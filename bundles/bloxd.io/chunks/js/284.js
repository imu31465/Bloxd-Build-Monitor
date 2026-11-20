export const id = 284;
export const ids = [284];
export const modules = {
  40691: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => VR,
      g: () => wR,
      h: () => WR,
      k: () => qU,
      o: () => rR,
      r: () => KU,
      v: () => jR
    });
    var tU = gU(40700),
      pU = gU(40707),
      EU = gU(40728);
    class PU {
      constructor(UU, RU, gU, tU) {
        this.state = UU, this.pos = RU, this.explicit = gU, this.view = tU, this.abortListeners = [], this.abortOnDocChange = !1
      }
      tokenBefore(UU) {
        let RU = (0, EU.sb)(this.state).resolveInner(this.pos, -1);
        for (; RU && UU.indexOf(RU.name) < 0;) RU = RU.parent;
        return RU ? {
          from: RU.from,
          to: this.pos,
          text: this.state.sliceDoc(RU.from, this.pos),
          type: RU.type
        } : null
      }
      matchBefore(UU) {
        let RU = this.state.doc.lineAt(this.pos),
          gU = Math.max(RU.from, this.pos - 250),
          tU = RU.text.slice(gU - RU.from, this.pos - RU.from),
          pU = tU.search(jU(UU, !1));
        return pU < 0 ? null : {
          from: gU + pU,
          to: this.pos,
          text: tU.slice(pU)
        }
      }
      get aborted() {
        return null == this.abortListeners
      }
      addEventListener(UU, RU, gU) {
        "abort" == UU && this.abortListeners && (this.abortListeners.push(RU), gU && gU.onDocChange && (this.abortOnDocChange = !0))
      }
    }

    function TU(UU) {
      let RU = Object.keys(UU).join(""),
        gU = /\w/.test(RU);
      return gU && (RU = RU.replace(/\w/g, "")), `[${gU?"\\w":""}${RU.replace(/[^\w\s]/g,"\\$&")}]`
    }

    function qU(UU) {
      let RU = UU.map((UU => "string" == typeof UU ? {
          label: UU
        } : UU)),
        [gU, tU] = RU.every((UU => /^\w+$/.test(UU.label))) ? [/\w*$/, /\w+$/] : function(UU) {
          let RU = Object.create(null),
            gU = Object.create(null);
          for (let {
              label: pU
            }
            of UU) {
            RU[pU[0]] = !0;
            for (let UU = 1; UU < pU.length; UU++) gU[pU[UU]] = !0
          }
          let tU = TU(RU) + TU(gU) + "*$";
          return [new RegExp("^" + tU), new RegExp(tU)]
        }(RU);
      return UU => {
        let pU = UU.matchBefore(tU);
        return pU || UU.explicit ? {
          from: pU ? pU.from : UU.pos,
          options: RU,
          validFor: gU
        } : null
      }
    }

    function KU(UU, RU) {
      return gU => {
        for (let RU = (0, EU.sb)(gU.state).resolveInner(gU.pos, -1); RU; RU = RU.parent) {
          if (UU.indexOf(RU.name) > -1) return null;
          if (RU.type.isTop) break
        }
        return RU(gU)
      }
    }
    class cU {
      constructor(UU, RU, gU, tU) {
        this.completion = UU, this.source = RU, this.match = gU, this.score = tU
      }
    }

    function GU(UU) {
      return UU.selection.main.from
    }

    function jU(UU, RU) {
      var gU;
      let {
        source: tU
      } = UU, pU = RU && "^" != tU[0], EU = "$" != tU[tU.length - 1];
      return pU || EU ? new RegExp(`${pU?"^":""}(?:${tU})${EU?"$":""}`, null !== (gU = UU.flags) && void 0 !== gU ? gU : UU.ignoreCase ? "i" : "") : UU
    }
    const uU = tU.d.define();

    function CU(UU, RU, gU, pU) {
      let {
        main: EU
      } = UU.selection, PU = gU - EU.from, TU = pU - EU.from;
      return {
        ...UU.changeByRange((qU => {
          if (qU != EU && gU != pU && UU.sliceDoc(qU.from + PU, qU.from + TU) != UU.sliceDoc(gU, pU)) return {
            range: qU
          };
          let KU = UU.toText(RU);
          return {
            changes: {
              from: qU.from + PU,
              to: pU == EU.from ? qU.to : qU.from + TU,
              insert: KU
            },
            range: tU.k.cursor(qU.from + PU + KU.length)
          }
        })),
        scrollIntoView: !0,
        userEvent: "input.complete"
      }
    }
    const hU = new WeakMap;

    function QU(UU) {
      if (!Array.isArray(UU)) return UU;
      let RU = hU.get(UU);
      return RU || hU.set(UU, RU = qU(UU)), RU
    }
    const eU = tU.A.define(),
      WU = tU.A.define();
    class fU {
      constructor(UU) {
        this.pattern = UU, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
        for (let RU = 0; RU < UU.length;) {
          let gU = (0, tU.J)(UU, RU),
            pU = (0, tU.M)(gU);
          this.chars.push(gU);
          let EU = UU.slice(RU, RU + pU),
            PU = EU.toUpperCase();
          this.folded.push((0, tU.J)(PU == EU ? EU.toLowerCase() : PU, 0)), RU += pU
        }
        this.astral = UU.length != this.chars.length
      }
      ret(UU, RU) {
        return this.score = UU, this.matched = RU, this
      }
      match(UU) {
        if (0 == this.pattern.length) return this.ret(-100, []);
        if (UU.length < this.pattern.length) return null;
        let {
          chars: RU,
          folded: gU,
          any: pU,
          precise: EU,
          byWord: PU
        } = this;
        if (1 == RU.length) {
          let pU = (0, tU.J)(UU, 0),
            EU = (0, tU.M)(pU),
            PU = EU == UU.length ? 0 : -100;
          if (pU == RU[0]);
          else {
            if (pU != gU[0]) return null;
            PU += -200
          }
          return this.ret(PU, [0, EU])
        }
        let TU = UU.indexOf(this.pattern);
        if (0 == TU) return this.ret(UU.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
        let qU = RU.length,
          KU = 0;
        if (TU < 0) {
          for (let EU = 0, PU = Math.min(UU.length, 200); EU < PU && KU < qU;) {
            let PU = (0, tU.J)(UU, EU);
            PU != RU[KU] && PU != gU[KU] || (pU[KU++] = EU), EU += (0, tU.M)(PU)
          }
          if (KU < qU) return null
        }
        let cU = 0,
          GU = 0,
          jU = !1,
          uU = 0,
          CU = -1,
          hU = -1,
          QU = /[a-z]/.test(UU),
          eU = !0;
        for (let WU = 0, fU = Math.min(UU.length, 200), xU = 0; WU < fU && GU < qU;) {
          let pU = (0, tU.J)(UU, WU);
          TU < 0 && (cU < qU && pU == RU[cU] && (EU[cU++] = WU), uU < qU && (pU == RU[uU] || pU == gU[uU] ? (0 == uU && (CU = WU), hU = WU + 1, uU++) : uU = 0));
          let KU, fU = pU < 255 ? pU >= 48 && pU <= 57 || pU >= 97 && pU <= 122 ? 2 : pU >= 65 && pU <= 90 ? 1 : 0 : (KU = (0, tU.bb)(pU)) != KU.toLowerCase() ? 1 : KU != KU.toUpperCase() ? 2 : 0;
          (!WU || 1 == fU && QU || 0 == xU && 0 != fU) && (RU[GU] == pU || gU[GU] == pU && (jU = !0) ? PU[GU++] = WU : PU.length && (eU = !1)), xU = fU, WU += (0, tU.M)(pU)
        }
        return GU == qU && 0 == PU[0] && eU ? this.result((jU ? -200 : 0) - 100, PU, UU) : uU == qU && 0 == CU ? this.ret(-200 - UU.length + (hU == UU.length ? 0 : -100), [0, hU]) : TU > -1 ? this.ret(-700 - UU.length, [TU, TU + this.pattern.length]) : uU == qU ? this.ret(-900 - UU.length, [CU, hU]) : GU == qU ? this.result((jU ? -200 : 0) - 100 - 700 + (eU ? 0 : -1100), PU, UU) : 2 == RU.length ? null : this.result((pU[0] ? -700 : 0) - 200 - 1100, pU, UU)
      }
      result(UU, RU, gU) {
        let pU = [],
          EU = 0;
        for (let PU of RU) {
          let UU = PU + (this.astral ? (0, tU.M)((0, tU.J)(gU, PU)) : 1);
          EU && pU[EU - 1] == PU ? pU[EU - 1] = UU : (pU[EU++] = PU, pU[EU++] = UU)
        }
        return this.ret(UU - gU.length, pU)
      }
    }
    class xU {
      constructor(UU) {
        this.pattern = UU, this.matched = [], this.score = 0, this.folded = UU.toLowerCase()
      }
      match(UU) {
        if (UU.length < this.pattern.length) return null;
        let RU = UU.slice(0, this.pattern.length),
          gU = RU == this.pattern ? 0 : RU.toLowerCase() == this.folded ? -200 : null;
        return null == gU ? null : (this.matched = [0, RU.length], this.score = gU + (UU.length == this.pattern.length ? 0 : -100), this)
      }
    }
    const mU = tU.p.define({
      combine: UU => (0, tU.N)(UU, {
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
        positionInfo: JU,
        filterStrict: !1,
        compareCompletions: (UU, RU) => (UU.sortText || UU.label).localeCompare(RU.sortText || RU.label),
        interactionDelay: 75,
        updateSyncTime: 100
      }, {
        defaultKeymap: (UU, RU) => UU && RU,
        closeOnBlur: (UU, RU) => UU && RU,
        icons: (UU, RU) => UU && RU,
        tooltipClass: (UU, RU) => gU => IU(UU(gU), RU(gU)),
        optionClass: (UU, RU) => gU => IU(UU(gU), RU(gU)),
        addToOptions: (UU, RU) => UU.concat(RU),
        filterStrict: (UU, RU) => UU || RU
      })
    });

    function IU(UU, RU) {
      return UU ? RU ? UU + " " + RU : UU : RU
    }

    function JU(UU, RU, gU, tU, EU, PU) {
      let TU, qU, KU = UU.textDirection == pU.d.RTL,
        cU = KU,
        GU = !1,
        jU = "top",
        uU = RU.left - EU.left,
        CU = EU.right - RU.right,
        hU = tU.right - tU.left,
        QU = tU.bottom - tU.top;
      if (cU && uU < Math.min(hU, CU) ? cU = !1 : !cU && CU < Math.min(hU, uU) && (cU = !0), hU <= (cU ? uU : CU)) TU = Math.max(EU.top, Math.min(gU.top, EU.bottom - QU)) - RU.top, qU = Math.min(400, cU ? uU : CU);
      else {
        GU = !0, qU = Math.min(400, (KU ? RU.right : EU.right - RU.left) - 30);
        let UU = EU.bottom - RU.bottom;
        UU >= QU || UU > RU.top ? TU = gU.bottom - RU.top : (jU = "bottom", TU = RU.bottom - gU.top)
      }
      return {
        style: `${jU}: ${TU/((RU.bottom-RU.top)/PU.offsetHeight)}px; max-width: ${qU/((RU.right-RU.left)/PU.offsetWidth)}px`,
        class: "cm-completionInfo-" + (GU ? KU ? "left-narrow" : "right-narrow" : cU ? "left" : "right")
      }
    }
    const wU = tU.A.define();

    function nU(UU, RU, gU) {
      if (UU <= gU) return {
        from: 0,
        to: UU
      };
      if (RU < 0 && (RU = 0), RU <= UU >> 1) {
        let UU = Math.floor(RU / gU);
        return {
          from: UU * gU,
          to: (UU + 1) * gU
        }
      }
      let tU = Math.floor((UU - RU) / gU);
      return {
        from: UU - (tU + 1) * gU,
        to: UU - tU * gU
      }
    }
    class bU {
      constructor(UU, RU, gU) {
        this.view = UU, this.stateField = RU, this.applyCompletion = gU, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
          read: () => this.measureInfo(),
          write: UU => this.placeInfo(UU),
          key: this
        }, this.space = null, this.currentClass = "";
        let tU = UU.state.field(RU),
          {
            options: pU,
            selected: EU
          } = tU.open,
          PU = UU.state.facet(mU);
        this.optionContent = function(UU) {
          let RU = UU.addToOptions.slice();
          return UU.icons && RU.push({
            render(UU) {
              let RU = document.createElement("div");
              return RU.classList.add("cm-completionIcon"), UU.type && RU.classList.add(...UU.type.split(/\s+/g).map((UU => "cm-completionIcon-" + UU))), RU.setAttribute("aria-hidden", "true"), RU
            },
            position: 20
          }), RU.push({
            render(UU, RU, gU, tU) {
              let pU = document.createElement("span");
              pU.className = "cm-completionLabel";
              let EU = UU.displayLabel || UU.label,
                PU = 0;
              for (let TU = 0; TU < tU.length;) {
                let UU = tU[TU++],
                  RU = tU[TU++];
                UU > PU && pU.appendChild(document.createTextNode(EU.slice(PU, UU)));
                let gU = pU.appendChild(document.createElement("span"));
                gU.appendChild(document.createTextNode(EU.slice(UU, RU))), gU.className = "cm-completionMatchedText", PU = RU
              }
              return PU < EU.length && pU.appendChild(document.createTextNode(EU.slice(PU))), pU
            },
            position: 50
          }, {
            render(UU) {
              if (!UU.detail) return null;
              let RU = document.createElement("span");
              return RU.className = "cm-completionDetail", RU.textContent = UU.detail, RU
            },
            position: 80
          }), RU.sort(((UU, RU) => UU.position - RU.position)).map((UU => UU.render))
        }(PU), this.optionClass = PU.optionClass, this.tooltipClass = PU.tooltipClass, this.range = nU(pU.length, EU, PU.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(UU.state), this.dom.addEventListener("mousedown", (gU => {
          let {
            options: tU
          } = UU.state.field(RU).open;
          for (let RU, pU = gU.target; pU && pU != this.dom; pU = pU.parentNode)
            if ("LI" == pU.nodeName && (RU = /-(\d+)$/.exec(pU.id)) && +RU[1] < tU.length) return this.applyCompletion(UU, tU[+RU[1]]), void gU.preventDefault();
          if (gU.target == this.list) {
            let RU = this.list.classList.contains("cm-completionListIncompleteTop") && gU.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && gU.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
            null != RU && (UU.dispatch({
              effects: wU.of(RU)
            }), gU.preventDefault())
          }
        })), this.dom.addEventListener("focusout", (RU => {
          let gU = UU.state.field(this.stateField, !1);
          gU && gU.tooltip && UU.state.facet(mU).closeOnBlur && RU.relatedTarget != UU.contentDOM && UU.dispatch({
            effects: WU.of(null)
          })
        })), this.showOptions(pU, tU.id)
      }
      mount() {
        this.updateSel()
      }
      showOptions(UU, RU) {
        this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(UU, RU, this.range)), this.list.addEventListener("scroll", (() => {
          this.info && this.view.requestMeasure(this.placeInfoReq)
        }))
      }
      update(UU) {
        var RU;
        let gU = UU.state.field(this.stateField),
          tU = UU.startState.field(this.stateField);
        if (this.updateTooltipClass(UU.state), gU != tU) {
          let {
            options: pU,
            selected: EU,
            disabled: PU
          } = gU.open;
          tU.open && tU.open.options == pU || (this.range = nU(pU.length, EU, UU.state.facet(mU).maxRenderedOptions), this.showOptions(pU, gU.id)), this.updateSel(), PU != (null === (RU = tU.open) || void 0 === RU ? void 0 : RU.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!PU)
        }
      }
      updateTooltipClass(UU) {
        let RU = this.tooltipClass(UU);
        if (RU != this.currentClass) {
          for (let UU of this.currentClass.split(" ")) UU && this.dom.classList.remove(UU);
          for (let UU of RU.split(" ")) UU && this.dom.classList.add(UU);
          this.currentClass = RU
        }
      }
      positioned(UU) {
        this.space = UU, this.info && this.view.requestMeasure(this.placeInfoReq)
      }
      updateSel() {
        let UU = this.view.state.field(this.stateField),
          RU = UU.open;
        (RU.selected > -1 && RU.selected < this.range.from || RU.selected >= this.range.to) && (this.range = nU(RU.options.length, RU.selected, this.view.state.facet(mU).maxRenderedOptions), this.showOptions(RU.options, UU.id));
        let gU = this.updateSelectedOption(RU.selected);
        if (gU) {
          this.destroyInfo();
          let {
            completion: tU
          } = RU.options[RU.selected], {
            info: EU
          } = tU;
          if (!EU) return;
          let PU = "string" === typeof EU ? document.createTextNode(EU) : EU(tU);
          if (!PU) return;
          "then" in PU ? PU.then((RU => {
            RU && this.view.state.field(this.stateField, !1) == UU && this.addInfoPane(RU, tU)
          })).catch((UU => (0, pU.Q)(this.view.state, UU, "completion info"))) : (this.addInfoPane(PU, tU), gU.setAttribute("aria-describedby", this.info.id))
        }
      }
      addInfoPane(UU, RU) {
        this.destroyInfo();
        let gU = this.info = document.createElement("div");
        if (gU.className = "cm-tooltip cm-completionInfo", gU.id = "cm-completionInfo-" + Math.floor(65535 * Math.random()).toString(16), null != UU.nodeType) gU.appendChild(UU), this.infoDestroy = null;
        else {
          let {
            dom: RU,
            destroy: tU
          } = UU;
          gU.appendChild(RU), this.infoDestroy = tU || null
        }
        this.dom.appendChild(gU), this.view.requestMeasure(this.placeInfoReq)
      }
      updateSelectedOption(UU) {
        let RU = null;
        for (let gU = this.list.firstChild, tU = this.range.from; gU; gU = gU.nextSibling, tU++) "LI" == gU.nodeName && gU.id ? tU == UU ? gU.hasAttribute("aria-selected") || (gU.setAttribute("aria-selected", "true"), RU = gU) : gU.hasAttribute("aria-selected") && (gU.removeAttribute("aria-selected"), gU.removeAttribute("aria-describedby")) : tU--;
        return RU && function(UU, RU) {
          let gU = UU.getBoundingClientRect(),
            tU = RU.getBoundingClientRect(),
            pU = gU.height / UU.offsetHeight;
          tU.top < gU.top ? UU.scrollTop -= (gU.top - tU.top) / pU : tU.bottom > gU.bottom && (UU.scrollTop += (tU.bottom - gU.bottom) / pU)
        }(this.list, RU), RU
      }
      measureInfo() {
        let UU = this.dom.querySelector("[aria-selected]");
        if (!UU || !this.info) return null;
        let RU = this.dom.getBoundingClientRect(),
          gU = this.info.getBoundingClientRect(),
          tU = UU.getBoundingClientRect(),
          pU = this.space;
        if (!pU) {
          let UU = this.dom.ownerDocument.documentElement;
          pU = {
            left: 0,
            top: 0,
            right: UU.clientWidth,
            bottom: UU.clientHeight
          }
        }
        return tU.top > Math.min(pU.bottom, RU.bottom) - 10 || tU.bottom < Math.max(pU.top, RU.top) + 10 ? null : this.view.state.facet(mU).positionInfo(this.view, RU, tU, gU, pU, this.dom)
      }
      placeInfo(UU) {
        this.info && (UU ? (UU.style && (this.info.style.cssText = UU.style), this.info.className = "cm-tooltip cm-completionInfo " + (UU.class || "")) : this.info.style.cssText = "top: -1e6px")
      }
      createListBox(UU, RU, gU) {
        const tU = document.createElement("ul");
        tU.id = RU, tU.setAttribute("role", "listbox"), tU.setAttribute("aria-expanded", "true"), tU.setAttribute("aria-label", this.view.state.phrase("Completions")), tU.addEventListener("mousedown", (UU => {
          UU.target == tU && UU.preventDefault()
        }));
        let pU = null;
        for (let EU = gU.from; EU < gU.to; EU++) {
          let {
            completion: PU,
            match: TU
          } = UU[EU], {
            section: qU
          } = PU;
          if (qU) {
            let UU = "string" == typeof qU ? qU : qU.name;
            if (UU != pU && (EU > gU.from || 0 == gU.from))
              if (pU = UU, "string" != typeof qU && qU.header) tU.appendChild(qU.header(qU));
              else {
                tU.appendChild(document.createElement("completion-section")).textContent = UU
              }
          }
          const KU = tU.appendChild(document.createElement("li"));
          KU.id = RU + "-" + EU, KU.setAttribute("role", "option");
          let cU = this.optionClass(PU);
          cU && (KU.className = cU);
          for (let UU of this.optionContent) {
            let RU = UU(PU, this.view.state, this.view, TU);
            RU && KU.appendChild(RU)
          }
        }
        return gU.from && tU.classList.add("cm-completionListIncompleteTop"), gU.to < UU.length && tU.classList.add("cm-completionListIncompleteBottom"), tU
      }
      destroyInfo() {
        this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
      }
      destroy() {
        this.destroyInfo()
      }
    }

    function oU(UU, RU) {
      return gU => new bU(gU, UU, RU)
    }

    function ZU(UU) {
      return 100 * (UU.boost || 0) + (UU.apply ? 10 : 0) + (UU.info ? 5 : 0) + (UU.type ? 1 : 0)
    }
    class aU {
      constructor(UU, RU, gU, tU, pU, EU) {
        this.options = UU, this.attrs = RU, this.tooltip = gU, this.timestamp = tU, this.selected = pU, this.disabled = EU
      }
      setSelected(UU, RU) {
        return UU == this.selected || UU >= this.options.length ? this : new aU(this.options, rU(RU, UU), this.tooltip, this.timestamp, UU, this.disabled)
      }
      static build(UU, RU, gU, tU, pU, EU) {
        if (tU && !EU && UU.some((UU => UU.isPending))) return tU.setDisabled();
        let PU = function(UU, RU) {
          let gU = [],
            tU = null,
            pU = null,
            EU = UU => {
              gU.push(UU);
              let {
                section: RU
              } = UU.completion;
              if (RU) {
                tU || (tU = []);
                let UU = "string" == typeof RU ? RU : RU.name;
                tU.some((RU => RU.name == UU)) || tU.push("string" == typeof RU ? {
                  name: UU
                } : RU)
              }
            },
            PU = RU.facet(mU);
          for (let GU of UU)
            if (GU.hasResult()) {
              let UU = GU.result.getMatch;
              if (!1 === GU.result.filter)
                for (let RU of GU.result.options) EU(new cU(RU, GU.source, UU ? UU(RU) : [], 1e9 - gU.length));
              else {
                let gU, tU = RU.sliceDoc(GU.from, GU.to),
                  TU = PU.filterStrict ? new xU(tU) : new fU(tU);
                for (let RU of GU.result.options)
                  if (gU = TU.match(RU.label)) {
                    let tU = RU.displayLabel ? UU ? UU(RU, gU.matched) : [] : gU.matched,
                      PU = gU.score + (RU.boost || 0);
                    if (EU(new cU(RU, GU.source, tU, PU)), "object" == typeof RU.section && "dynamic" === RU.section.rank) {
                      let {
                        name: UU
                      } = RU.section;
                      pU || (pU = Object.create(null)), pU[UU] = Math.max(PU, pU[UU] || -1e9)
                    }
                  }
              }
            } if (tU) {
            let UU = Object.create(null),
              RU = 0,
              EU = (UU, RU) => ("dynamic" === UU.rank && "dynamic" === RU.rank ? pU[RU.name] - pU[UU.name] : 0) || ("number" == typeof UU.rank ? UU.rank : 1e9) - ("number" == typeof RU.rank ? RU.rank : 1e9) || (UU.name < RU.name ? -1 : 1);
            for (let gU of tU.sort(EU)) RU -= 1e5, UU[gU.name] = RU;
            for (let tU of gU) {
              let {
                section: RU
              } = tU.completion;
              RU && (tU.score += UU["string" == typeof RU ? RU : RU.name])
            }
          }
          let TU = [],
            qU = null,
            KU = PU.compareCompletions;
          for (let cU of gU.sort(((UU, RU) => RU.score - UU.score || KU(UU.completion, RU.completion)))) {
            let UU = cU.completion;
            !qU || qU.label != UU.label || qU.detail != UU.detail || null != qU.type && null != UU.type && qU.type != UU.type || qU.apply != UU.apply || qU.boost != UU.boost ? TU.push(cU) : ZU(cU.completion) > ZU(qU) && (TU[TU.length - 1] = cU), qU = cU.completion
          }
          return TU
        }(UU, RU);
        if (!PU.length) return tU && UU.some((UU => UU.isPending)) ? tU.setDisabled() : null;
        let TU = RU.facet(mU).selectOnOpen ? 0 : -1;
        if (tU && tU.selected != TU && -1 != tU.selected) {
          let UU = tU.options[tU.selected].completion;
          for (let RU = 0; RU < PU.length; RU++)
            if (PU[RU].completion == UU) {
              TU = RU;
              break
            }
        }
        return new aU(PU, rU(gU, TU), {
          pos: UU.reduce(((UU, RU) => RU.hasResult() ? Math.min(UU, RU.from) : UU), 1e8),
          create: kU,
          above: pU.aboveCursor
        }, tU ? tU.timestamp : Date.now(), TU, !1)
      }
      map(UU) {
        return new aU(this.options, this.attrs, {
          ...this.tooltip,
          pos: UU.mapPos(this.tooltip.pos)
        }, this.timestamp, this.selected, this.disabled)
      }
      setDisabled() {
        return new aU(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0)
      }
    }
    class YU {
      constructor(UU, RU, gU) {
        this.active = UU, this.id = RU, this.open = gU
      }
      static start() {
        return new YU(XU, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
      }
      update(UU) {
        let {
          state: RU
        } = UU, gU = RU.facet(mU), tU = (gU.override || RU.languageDataAt("autocomplete", GU(RU)).map(QU)).map((RU => (this.active.find((UU => UU.source == RU)) || new dU(RU, this.active.some((UU => 0 != UU.state)) ? 1 : 0)).update(UU, gU)));
        tU.length == this.active.length && tU.every(((UU, RU) => UU == this.active[RU])) && (tU = this.active);
        let pU = this.open,
          EU = UU.effects.some((UU => UU.is(SU)));
        pU && UU.docChanged && (pU = pU.map(UU.changes)), UU.selection || tU.some((RU => RU.hasResult() && UU.changes.touchesRange(RU.from, RU.to))) || ! function(UU, RU) {
          if (UU == RU) return !0;
          for (let gU = 0, tU = 0;;) {
            for (; gU < UU.length && !UU[gU].hasResult();) gU++;
            for (; tU < RU.length && !RU[tU].hasResult();) tU++;
            let pU = gU == UU.length,
              EU = tU == RU.length;
            if (pU || EU) return pU == EU;
            if (UU[gU++].result != RU[tU++].result) return !1
          }
        }(tU, this.active) || EU ? pU = aU.build(tU, RU, this.id, pU, gU, EU) : pU && pU.disabled && !tU.some((UU => UU.isPending)) && (pU = null), !pU && tU.every((UU => !UU.isPending)) && tU.some((UU => UU.hasResult())) && (tU = tU.map((UU => UU.hasResult() ? new dU(UU.source, 0) : UU)));
        for (let PU of UU.effects) PU.is(wU) && (pU = pU && pU.setSelected(PU.value, this.id));
        return tU == this.active && pU == this.open ? this : new YU(tU, this.id, pU)
      }
      get tooltip() {
        return this.open ? this.open.tooltip : null
      }
      get attrs() {
        return this.open ? this.open.attrs : this.active.length ? BU : VU
      }
    }
    const BU = {
        "aria-autocomplete": "list"
      },
      VU = {};

    function rU(UU, RU) {
      let gU = {
        "aria-autocomplete": "list",
        "aria-haspopup": "listbox",
        "aria-controls": UU
      };
      return RU > -1 && (gU["aria-activedescendant"] = UU + "-" + RU), gU
    }
    const XU = [];

    function vU(UU, RU) {
      if (UU.isUserEvent("input.complete")) {
        let gU = UU.annotation(uU);
        if (gU && RU.activateOnCompletion(gU)) return 12
      }
      let gU = UU.isUserEvent("input.type");
      return gU && RU.activateOnTyping ? 5 : gU ? 1 : UU.isUserEvent("delete.backward") ? 2 : UU.selection ? 8 : UU.docChanged ? 16 : 0
    }
    class dU {
      constructor(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.source = UU, this.state = RU, this.explicit = gU
      }
      hasResult() {
        return !1
      }
      get isPending() {
        return 1 == this.state
      }
      update(UU, RU) {
        let gU = vU(UU, RU),
          tU = this;
        (8 & gU || 16 & gU && this.touches(UU)) && (tU = new dU(tU.source, 0)), 4 & gU && 0 == tU.state && (tU = new dU(this.source, 1)), tU = tU.updateFor(UU, gU);
        for (let pU of UU.effects)
          if (pU.is(eU)) tU = new dU(tU.source, 1, pU.value);
          else if (pU.is(WU)) tU = new dU(tU.source, 0);
        else if (pU.is(SU))
          for (let UU of pU.value) UU.source == tU.source && (tU = UU);
        return tU
      }
      updateFor(UU, RU) {
        return this.map(UU.changes)
      }
      map(UU) {
        return this
      }
      touches(UU) {
        return UU.changes.touchesRange(GU(UU.state))
      }
    }
    class HU extends dU {
      constructor(UU, RU, gU, tU, pU, EU) {
        super(UU, 3, RU), this.limit = gU, this.result = tU, this.from = pU, this.to = EU
      }
      hasResult() {
        return !0
      }
      updateFor(UU, RU) {
        var gU;
        if (!(3 & RU)) return this.map(UU.changes);
        let tU = this.result;
        tU.map && !UU.changes.empty && (tU = tU.map(tU, UU.changes));
        let pU = UU.changes.mapPos(this.from),
          EU = UU.changes.mapPos(this.to, 1),
          TU = GU(UU.state);
        if (TU > EU || !tU || 2 & RU && (GU(UU.startState) == this.from || TU < this.limit)) return new dU(this.source, 4 & RU ? 1 : 0);
        let qU = UU.changes.mapPos(this.limit);
        return function(UU, RU, gU, tU) {
          if (!UU) return !1;
          let pU = RU.sliceDoc(gU, tU);
          return "function" == typeof UU ? UU(pU, gU, tU, RU) : jU(UU, !0).test(pU)
        }(tU.validFor, UU.state, pU, EU) ? new HU(this.source, this.explicit, qU, tU, pU, EU) : tU.update && (tU = tU.update(tU, pU, EU, new PU(UU.state, TU, !1))) ? new HU(this.source, this.explicit, qU, tU, tU.from, null !== (gU = tU.to) && void 0 !== gU ? gU : GU(UU.state)) : new dU(this.source, 1, this.explicit)
      }
      map(UU) {
        if (UU.empty) return this;
        return (this.result.map ? this.result.map(this.result, UU) : this.result) ? new HU(this.source, this.explicit, UU.mapPos(this.limit), this.result, UU.mapPos(this.from), UU.mapPos(this.to, 1)) : new dU(this.source, 0)
      }
      touches(UU) {
        return UU.changes.touchesRange(this.from, this.to)
      }
    }
    const SU = tU.A.define({
        map: (UU, RU) => UU.map((UU => UU.map(RU)))
      }),
      sU = tU.C.define({
        create: () => YU.start(),
        update: (UU, RU) => UU.update(RU),
        provide: UU => [pU.bb.from(UU, (UU => UU.tooltip)), pU.h.contentAttributes.from(UU, (UU => UU.attrs))]
      });

    function yU(UU, RU) {
      const gU = RU.completion.apply || RU.completion.label;
      let tU = UU.state.field(sU).active.find((UU => UU.source == RU.source));
      return tU instanceof HU && ("string" == typeof gU ? UU.dispatch({
        ...CU(UU.state, gU, tU.from, tU.to),
        annotations: uU.of(RU.completion)
      }) : gU(UU, RU.completion, tU.from, tU.to), !0)
    }
    const kU = oU(sU, yU);

    function FU(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option";
      return gU => {
        let tU = gU.state.field(sU, !1);
        if (!tU || !tU.open || tU.open.disabled || Date.now() - tU.open.timestamp < gU.state.facet(mU).interactionDelay) return !1;
        let EU, PU = 1;
        "page" == RU && (EU = (0, pU.A)(gU, tU.open.tooltip)) && (PU = Math.max(2, Math.floor(EU.dom.offsetHeight / EU.dom.querySelector("li").offsetHeight) - 1));
        let {
          length: TU
        } = tU.open.options, qU = tU.open.selected > -1 ? tU.open.selected + PU * (UU ? 1 : -1) : UU ? 0 : TU - 1;
        return qU < 0 ? qU = "page" == RU ? 0 : TU - 1 : qU >= TU && (qU = "page" == RU ? TU - 1 : 0), gU.dispatch({
          effects: wU.of(qU)
        }), !0
      }
    }
    const iU = UU => !!UU.state.field(sU, !1) && (UU.dispatch({
      effects: eU.of(!0)
    }), !0);
    class AU {
      constructor(UU, RU) {
        this.active = UU, this.context = RU, this.time = Date.now(), this.updates = [], this.done = void 0
      }
    }
    const zU = pU.l.fromClass(class {
        constructor(UU) {
          this.view = UU, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
          for (let RU of UU.state.field(sU).active) RU.isPending && this.startQuery(RU)
        }
        update(UU) {
          let RU = UU.state.field(sU),
            gU = UU.state.facet(mU);
          if (!UU.selectionSet && !UU.docChanged && UU.startState.field(sU) == RU) return;
          let tU = UU.transactions.some((UU => {
            let RU = vU(UU, gU);
            return 8 & RU || (UU.selection || UU.docChanged) && !(3 & RU)
          }));
          for (let TU = 0; TU < this.running.length; TU++) {
            let RU = this.running[TU];
            if (tU || RU.context.abortOnDocChange && UU.docChanged || RU.updates.length + UU.transactions.length > 50 && Date.now() - RU.time > 1e3) {
              for (let UU of RU.context.abortListeners) try {
                UU()
              } catch (PU) {
                (0, pU.Q)(this.view.state, PU)
              }
              RU.context.abortListeners = null, this.running.splice(TU--, 1)
            } else RU.updates.push(...UU.transactions)
          }
          this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), UU.transactions.some((UU => UU.effects.some((UU => UU.is(eU))))) && (this.pendingStart = !0);
          let EU = this.pendingStart ? 50 : gU.activateOnTypingDelay;
          if (this.debounceUpdate = RU.active.some((UU => UU.isPending && !this.running.some((RU => RU.active.source == UU.source)))) ? setTimeout((() => this.startUpdate()), EU) : -1, 0 != this.composing)
            for (let pU of UU.transactions) pU.isUserEvent("input.type") ? this.composing = 2 : 2 == this.composing && pU.selection && (this.composing = 3)
        }
        startUpdate() {
          this.debounceUpdate = -1, this.pendingStart = !1;
          let {
            state: UU
          } = this.view, RU = UU.field(sU);
          for (let gU of RU.active) gU.isPending && !this.running.some((UU => UU.active.source == gU.source)) && this.startQuery(gU);
          this.running.length && RU.open && RU.open.disabled && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(mU).updateSyncTime))
        }
        startQuery(UU) {
          let {
            state: RU
          } = this.view, gU = GU(RU), tU = new PU(RU, gU, UU.explicit, this.view), EU = new AU(UU, tU);
          this.running.push(EU), Promise.resolve(UU.source(tU)).then((UU => {
            EU.context.aborted || (EU.done = UU || null, this.scheduleAccept())
          }), (UU => {
            this.view.dispatch({
              effects: WU.of(null)
            }), (0, pU.Q)(this.view.state, UU)
          }))
        }
        scheduleAccept() {
          this.running.every((UU => void 0 !== UU.done)) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(mU).updateSyncTime))
        }
        accept() {
          var UU;
          this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
          let RU = [],
            gU = this.view.state.facet(mU),
            tU = this.view.state.field(sU);
          for (let pU = 0; pU < this.running.length; pU++) {
            let EU = this.running[pU];
            if (void 0 === EU.done) continue;
            if (this.running.splice(pU--, 1), EU.done) {
              let tU = GU(EU.updates.length ? EU.updates[0].startState : this.view.state),
                pU = Math.min(tU, EU.done.from + (EU.active.explicit ? 0 : 1)),
                PU = new HU(EU.active.source, EU.active.explicit, pU, EU.done, EU.done.from, null !== (UU = EU.done.to) && void 0 !== UU ? UU : tU);
              for (let UU of EU.updates) PU = PU.update(UU, gU);
              if (PU.hasResult()) {
                RU.push(PU);
                continue
              }
            }
            let PU = tU.active.find((UU => UU.source == EU.active.source));
            if (PU && PU.isPending)
              if (null == EU.done) {
                let UU = new dU(EU.active.source, 0);
                for (let RU of EU.updates) UU = UU.update(RU, gU);
                UU.isPending || RU.push(UU)
              } else this.startQuery(PU)
          }(RU.length || tU.open && tU.open.disabled) && this.view.dispatch({
            effects: SU.of(RU)
          })
        }
      }, {
        eventHandlers: {
          blur(UU) {
            let RU = this.view.state.field(sU, !1);
            if (RU && RU.tooltip && this.view.state.facet(mU).closeOnBlur) {
              let gU = RU.open && (0, pU.A)(this.view, RU.open.tooltip);
              gU && gU.dom.contains(UU.relatedTarget) || setTimeout((() => this.view.dispatch({
                effects: WU.of(null)
              })), 10)
            }
          },
          compositionstart() {
            this.composing = 1
          },
          compositionend() {
            3 == this.composing && setTimeout((() => this.view.dispatch({
              effects: eU.of(!1)
            })), 20), this.composing = 0
          }
        }
      }),
      MU = "object" == typeof navigator && /Win/.test(navigator.platform),
      DU = tU.s.highest(pU.h.domEventHandlers({
        keydown(UU, RU) {
          let gU = RU.state.field(sU, !1);
          if (!gU || !gU.open || gU.open.disabled || gU.open.selected < 0 || UU.key.length > 1 || UU.ctrlKey && (!MU || !UU.altKey) || UU.metaKey) return !1;
          let tU = gU.open.options[gU.open.selected],
            pU = gU.active.find((UU => UU.source == tU.source)),
            EU = tU.completion.commitCharacters || pU.result.commitCharacters;
          return EU && EU.indexOf(UU.key) > -1 && yU(RU, tU), !1
        }
      })),
      LU = pU.h.baseTheme({
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
    class NU {
      constructor(UU, RU, gU, tU) {
        this.field = UU, this.line = RU, this.from = gU, this.to = tU
      }
    }
    class lU {
      constructor(UU, RU, gU) {
        this.field = UU, this.from = RU, this.to = gU
      }
      map(UU) {
        let RU = UU.mapPos(this.from, -1, tU.q.TrackDel),
          gU = UU.mapPos(this.to, 1, tU.q.TrackDel);
        return null == RU || null == gU ? null : new lU(this.field, RU, gU)
      }
    }
    class OU {
      constructor(UU, RU) {
        this.lines = UU, this.fieldPositions = RU
      }
      instantiate(UU, RU) {
        let gU = [],
          tU = [RU],
          pU = UU.doc.lineAt(RU),
          PU = /^\s*/.exec(pU.text)[0];
        for (let qU of this.lines) {
          if (gU.length) {
            let gU = PU,
              pU = /^\t*/.exec(qU)[0].length;
            for (let RU = 0; RU < pU; RU++) gU += UU.facet(EU.cb);
            tU.push(RU + gU.length - pU), qU = gU + qU.slice(pU)
          }
          gU.push(qU), RU += qU.length + 1
        }
        let TU = this.fieldPositions.map((UU => new lU(UU.field, tU[UU.line] + UU.from, tU[UU.line] + UU.to)));
        return {
          text: gU,
          hu: TU
        }
      }
      static parse(UU) {
        let RU, gU = [],
          tU = [],
          pU = [];
        for (let EU of UU.split(/\r\n?|\n/)) {
          for (; RU = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(EU);) {
            let UU = RU[1] ? +RU[1] : null,
              PU = RU[2] || RU[3] || "",
              TU = -1,
              qU = PU.replace(/\\[{}]/g, (UU => UU[1]));
            for (let RU = 0; RU < gU.length; RU++)(null != UU ? gU[RU].seq == UU : qU && gU[RU].name == qU) && (TU = RU);
            if (TU < 0) {
              let RU = 0;
              for (; RU < gU.length && (null == UU || null != gU[RU].seq && gU[RU].seq < UU);) RU++;
              gU.splice(RU, 0, {
                seq: UU,
                name: qU
              }), TU = RU;
              for (let UU of pU) UU.field >= TU && UU.field++
            }
            for (let gU of pU)
              if (gU.line == tU.length && gU.from > RU.index) {
                let UU = RU[2] ? 3 + (RU[1] || "").length : 2;
                gU.from -= UU, gU.to -= UU
              } pU.push(new NU(TU, tU.length, RU.index, RU.index + qU.length)), EU = EU.slice(0, RU.index) + PU + EU.slice(RU.index + RU[0].length)
          }
          EU = EU.replace(/\\([{}])/g, ((UU, RU, gU) => {
            for (let EU of pU) EU.line == tU.length && EU.from > gU && (EU.from--, EU.to--);
            return RU
          })), tU.push(EU)
        }
        return new OU(tU, pU)
      }
    }
    let UR = pU.b.widget({
        widget: new class extends pU.o {
          toDOM() {
            let UU = document.createElement("span");
            return UU.className = "cm-snippetFieldPosition", UU
          }
          ignoreEvent() {
            return !1
          }
        }
      }),
      RR = pU.b.mark({
        class: "cm-snippetField"
      });
    class gR {
      constructor(UU, RU) {
        this.hu = UU, this.active = RU, this.deco = pU.b.set(UU.map((UU => (UU.from == UU.to ? UR : RR).range(UU.from, UU.to))), !0)
      }
      map(UU) {
        let RU = [];
        for (let gU of this.hu) {
          let tU = gU.map(UU);
          if (!tU) return null;
          RU.push(tU)
        }
        return new gR(RU, this.active)
      }
      selectionInsideField(UU) {
        return UU.hu.every((UU => this.hu.some((RU => RU.field == this.active && RU.from <= UU.from && RU.to >= UU.to))))
      }
    }
    const tR = tU.A.define({
        map: (UU, RU) => UU && UU.map(RU)
      }),
      pR = tU.A.define(),
      ER = tU.C.define({
        create: () => null,
        update(UU, RU) {
          for (let gU of RU.effects) {
            if (gU.is(tR)) return gU.value;
            if (gU.is(pR) && UU) return new gR(UU.hu, gU.value)
          }
          return UU && RU.docChanged && (UU = UU.map(RU.changes)), UU && RU.selection && !UU.selectionInsideField(RU.selection) && (UU = null), UU
        },
        provide: UU => pU.h.Yt.from(UU, (UU => UU ? UU.deco : pU.b.none))
      });

    function PR(UU, RU) {
      return tU.k.create(UU.filter((UU => UU.field == RU)).map((UU => tU.k.range(UU.from, UU.to))))
    }

    function TR(UU) {
      let RU = OU.parse(UU);
      return (UU, gU, pU, EU) => {
        let {
          text: PU,
          hu: TU
        } = RU.instantiate(UU.state, pU), {
          main: qU
        } = UU.state.selection, KU = {
          changes: {
            from: pU,
            to: EU == qU.from ? qU.to : EU,
            insert: tU.E.of(PU)
          },
          scrollIntoView: !0,
          annotations: gU ? [uU.of(gU), tU.G.userEvent.of("input.complete")] : void 0
        };
        if (TU.length && (KU.selection = PR(TU, 0)), TU.some((UU => UU.field > 0))) {
          let RU = new gR(TU, 0),
            gU = KU.effects = [tR.of(RU)];
          void 0 === UU.state.field(ER, !1) && gU.push(tU.A.appendConfig.of([ER, GR, uR, LU]))
        }
        UU.dispatch(UU.state.update(KU))
      }
    }

    function qR(UU) {
      return RU => {
        let {
          state: gU,
          dispatch: tU
        } = RU, pU = gU.field(ER, !1);
        if (!pU || UU < 0 && 0 == pU.active) return !1;
        let EU = pU.active + UU,
          PU = UU > 0 && !pU.hu.some((RU => RU.field == EU + UU));
        return tU(gU.update({
          selection: PR(pU.hu, EU),
          effects: tR.of(PU ? null : new gR(pU.hu, EU)),
          scrollIntoView: !0
        })), !0
      }
    }
    const KR = [{
        key: "Tab",
        run: qR(1),
        shift: qR(-1)
      }, {
        key: "Escape",
        run: UU => {
          let {
            state: RU,
            dispatch: gU
          } = UU;
          return !!RU.field(ER, !1) && (gU(RU.update({
            effects: tR.of(null)
          })), !0)
        }
      }],
      cR = tU.p.define({
        combine: UU => UU.length ? UU[0] : KR
      }),
      GR = tU.s.highest(pU.N.compute([cR], (UU => UU.facet(cR))));

    function jR(UU, RU) {
      return {
        ...RU,
        apply: TR(UU)
      }
    }
    const uR = pU.h.domEventHandlers({
      mousedown(UU, RU) {
        let gU, tU = RU.state.field(ER, !1);
        if (!tU || null == (gU = RU.posAtCoords({
            x: UU.clientX,
            y: UU.clientY
          }))) return !1;
        let pU = tU.hu.find((UU => UU.from <= gU && UU.to >= gU));
        return !(!pU || pU.field == tU.active) && (RU.dispatch({
          selection: PR(tU.hu, pU.field),
          effects: tR.of(tU.hu.some((UU => UU.field > pU.field)) ? new gR(tU.hu, pU.field) : null),
          scrollIntoView: !0
        }), !0)
      }
    });
    const CR = {
        brackets: ["(", "[", "{", "'", '"'],
        before: ")]}:;>",
        stringPrefixes: []
      },
      hR = tU.A.define({
        map(UU, RU) {
          let gU = RU.mapPos(UU, -1, tU.q.TrackAfter);
          return null == gU ? void 0 : gU
        }
      }),
      QR = new class extends tU.x {};
    QR.startSide = 1, QR.endSide = -1;
    const eR = tU.C.define({
      create: () => tU.v.empty,
      update(UU, RU) {
        if (UU = UU.map(RU.changes), RU.selection) {
          let gU = RU.state.doc.lineAt(RU.selection.main.head);
          UU = UU.update({
            filter: UU => UU >= gU.from && UU <= gU.to
          })
        }
        for (let gU of RU.effects) gU.is(hR) && (UU = UU.update({
          add: [QR.range(gU.value, gU.value + 1)]
        }));
        return UU
      }
    });

    function WR() {
      return [JR, eR]
    }
    const fR = "()[]{}<>\xab\xbb\xbb\xab\uff3b\uff3d\uff5b\uff5d";

    function xR(UU) {
      for (let RU = 0; RU < 16; RU += 2)
        if (fR.charCodeAt(RU) == UU) return fR.charAt(RU + 1);
      return (0, tU.bb)(UU < 128 ? UU : UU + 1)
    }

    function mR(UU, RU) {
      return UU.languageDataAt("closeBrackets", RU)[0] || CR
    }
    const IR = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      JR = pU.h.inputHandler.of(((UU, RU, gU, pU) => {
        if ((IR ? UU.composing : UU.compositionStarted) || UU.state.readOnly) return !1;
        let EU = UU.state.selection.main;
        if (pU.length > 2 || 2 == pU.length && 1 == (0, tU.M)((0, tU.J)(pU, 0)) || RU != EU.from || gU != EU.to) return !1;
        let PU = function(UU, RU) {
          let gU = mR(UU, UU.selection.main.head),
            pU = gU.brackets || CR.brackets;
          for (let EU of pU) {
            let PU = xR((0, tU.J)(EU, 0));
            if (RU == EU) return PU == EU ? aR(UU, EU, pU.indexOf(EU + EU + EU) > -1, gU) : oR(UU, EU, PU, gU.before || CR.before);
            if (RU == PU && nR(UU, UU.selection.main.from)) return ZR(UU, EU, PU)
          }
          return null
        }(UU.state, pU);
        return !!PU && (UU.dispatch(PU), !0)
      })),
      wR = [{
        key: "Backspace",
        run: UU => {
          let {
            state: RU,
            dispatch: gU
          } = UU;
          if (RU.readOnly) return !1;
          let pU = mR(RU, RU.selection.main.head).brackets || CR.brackets,
            EU = null,
            PU = RU.changeByRange((UU => {
              if (UU.empty) {
                let gU = function(UU, RU) {
                  let gU = UU.sliceString(RU - 2, RU);
                  return (0, tU.M)((0, tU.J)(gU, 0)) == gU.length ? gU : gU.slice(1)
                }(RU.doc, UU.head);
                for (let EU of pU)
                  if (EU == gU && bR(RU.doc, UU.head) == xR((0, tU.J)(EU, 0))) return {
                    changes: {
                      from: UU.head - EU.length,
                      to: UU.head + EU.length
                    },
                    range: tU.k.cursor(UU.head - EU.length)
                  }
              }
              return {
                range: EU = UU
              }
            }));
          return EU || gU(RU.update(PU, {
            scrollIntoView: !0,
            userEvent: "delete.backward"
          })), !EU
        }
      }];

    function nR(UU, RU) {
      let gU = !1;
      return UU.field(eR).between(0, UU.doc.length, (UU => {
        UU == RU && (gU = !0)
      })), gU
    }

    function bR(UU, RU) {
      let gU = UU.sliceString(RU, RU + 2);
      return gU.slice(0, (0, tU.M)((0, tU.J)(gU, 0)))
    }

    function oR(UU, RU, gU, pU) {
      let EU = null,
        PU = UU.changeByRange((PU => {
          if (!PU.empty) return {
            changes: [{
              insert: RU,
              from: PU.from
            }, {
              insert: gU,
              from: PU.to
            }],
            effects: hR.of(PU.to + RU.length),
            range: tU.k.range(PU.anchor + RU.length, PU.head + RU.length)
          };
          let TU = bR(UU.doc, PU.head);
          return !TU || /\s/.test(TU) || pU.indexOf(TU) > -1 ? {
            changes: {
              insert: RU + gU,
              from: PU.head
            },
            effects: hR.of(PU.head + RU.length),
            range: tU.k.cursor(PU.head + RU.length)
          } : {
            range: EU = PU
          }
        }));
      return EU ? null : UU.update(PU, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function ZR(UU, RU, gU) {
      let pU = null,
        EU = UU.changeByRange((RU => RU.empty && bR(UU.doc, RU.head) == gU ? {
          changes: {
            from: RU.head,
            to: RU.head + gU.length,
            insert: gU
          },
          range: tU.k.cursor(RU.head + gU.length)
        } : pU = {
          range: RU
        }));
      return pU ? null : UU.update(EU, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function aR(UU, RU, gU, pU) {
      let PU = pU.stringPrefixes || CR.stringPrefixes,
        TU = null,
        qU = UU.changeByRange((pU => {
          if (!pU.empty) return {
            changes: [{
              insert: RU,
              from: pU.from
            }, {
              insert: RU,
              from: pU.to
            }],
            effects: hR.of(pU.to + RU.length),
            range: tU.k.range(pU.anchor + RU.length, pU.head + RU.length)
          };
          let qU, KU = pU.head,
            cU = bR(UU.doc, KU);
          if (cU == RU) {
            if (YR(UU, KU)) return {
              changes: {
                insert: RU + RU,
                from: KU
              },
              effects: hR.of(KU + RU.length),
              range: tU.k.cursor(KU + RU.length)
            };
            if (nR(UU, KU)) {
              let pU = gU && UU.sliceDoc(KU, KU + 3 * RU.length) == RU + RU + RU ? RU + RU + RU : RU;
              return {
                changes: {
                  from: KU,
                  to: KU + pU.length,
                  insert: pU
                },
                range: tU.k.cursor(KU + pU.length)
              }
            }
          } else {
            if (gU && UU.sliceDoc(KU - 2 * RU.length, KU) == RU + RU && (qU = BR(UU, KU - 2 * RU.length, PU)) > -1 && YR(UU, qU)) return {
              changes: {
                insert: RU + RU + RU + RU,
                from: KU
              },
              effects: hR.of(KU + RU.length),
              range: tU.k.cursor(KU + RU.length)
            };
            if (UU.charCategorizer(KU)(cU) != tU.g.Word && BR(UU, KU, PU) > -1 && ! function(UU, RU, gU, tU) {
                let pU = (0, EU.sb)(UU).resolveInner(RU, -1),
                  PU = tU.reduce(((UU, RU) => Math.max(UU, RU.length)), 0);
                for (let EU = 0; EU < 5; EU++) {
                  let EU = UU.sliceDoc(pU.from, Math.min(pU.to, pU.from + gU.length + PU)),
                    TU = EU.indexOf(gU);
                  if (!TU || TU > -1 && tU.indexOf(EU.slice(0, TU)) > -1) {
                    let RU = pU.firstChild;
                    for (; RU && RU.from == pU.from && RU.to - RU.from > gU.length + TU;) {
                      if (UU.sliceDoc(RU.to - gU.length, RU.to) == gU) return !1;
                      RU = RU.firstChild
                    }
                    return !0
                  }
                  let qU = pU.to == RU && pU.parent;
                  if (!qU) break;
                  pU = qU
                }
                return !1
              }(UU, KU, RU, PU)) return {
              changes: {
                insert: RU + RU,
                from: KU
              },
              effects: hR.of(KU + RU.length),
              range: tU.k.cursor(KU + RU.length)
            }
          }
          return {
            range: TU = pU
          }
        }));
      return TU ? null : UU.update(qU, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function YR(UU, RU) {
      let gU = (0, EU.sb)(UU).resolveInner(RU + 1);
      return gU.parent && gU.from == RU
    }

    function BR(UU, RU, gU) {
      let pU = UU.charCategorizer(RU);
      if (pU(UU.sliceDoc(RU - 1, RU)) != tU.g.Word) return RU;
      for (let EU of gU) {
        let gU = RU - EU.length;
        if (UU.sliceDoc(gU, RU) == EU && pU(UU.sliceDoc(gU - 1, gU)) != tU.g.Word) return gU
      }
      return -1
    }

    function VR() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [DU, sU, mU.of(UU), zU, XR, LU]
    }
    const rR = [{
        key: "Ctrl-Space",
        run: iU
      }, {
        mac: "Alt-`",
        run: iU
      }, {
        mac: "Alt-i",
        run: iU
      }, {
        key: "Escape",
        run: UU => {
          let RU = UU.state.field(sU, !1);
          return !(!RU || !RU.active.some((UU => 0 != UU.state))) && (UU.dispatch({
            effects: WU.of(null)
          }), !0)
        }
      }, {
        key: "ArrowDown",
        run: FU(!0)
      }, {
        key: "ArrowUp",
        run: FU(!1)
      }, {
        key: "PageDown",
        run: FU(!0, "page")
      }, {
        key: "PageUp",
        run: FU(!1, "page")
      }, {
        key: "Enter",
        run: UU => {
          let RU = UU.state.field(sU, !1);
          return !(UU.state.readOnly || !RU || !RU.open || RU.open.selected < 0 || RU.open.disabled || Date.now() - RU.open.timestamp < UU.state.facet(mU).interactionDelay) && yU(UU, RU.open.options[RU.open.selected])
        }
      }],
      XR = tU.s.highest(pU.N.computeN([mU], (UU => UU.facet(mU).defaultKeymap ? [rR] : [])))
  },
  40853: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => KU,
      g: () => jU,
      j: () => cU,
      l: () => GU
    });
    var tU = gU(40700);
    class pU {
      constructor(UU, RU, gU, tU) {
        this.origin = UU, this.changes = RU, this.effects = gU, this.clientID = tU
      }
    }
    class EU {
      constructor(UU, RU) {
        this.version = UU, this.unconfirmed = RU
      }
    }
    const PU = tU.p.define({
        combine(UU) {
          let RU = (0, tU.N)(UU, {
            startVersion: 0,
            clientID: null,
            sharedEffects: () => []
          }, {
            generatedID: UU => UU
          });
          return null == RU.clientID && (RU.clientID = UU.length && UU[0].generatedID || ""), RU
        }
      }),
      TU = tU.d.define(),
      qU = tU.C.define({
        create: UU => new EU(UU.facet(PU).startVersion, []),
        update(UU, RU) {
          let gU = RU.annotation(TU);
          if (gU) return gU;
          let {
            sharedEffects: tU,
            clientID: qU
          } = RU.startState.facet(PU), KU = tU(RU);
          return KU.length || !RU.changes.empty ? new EU(UU.version, UU.unconfirmed.concat(new pU(RU, RU.changes, KU, qU))) : UU
        }
      });

    function KU() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [qU, PU.of(Object.assign({
        generatedID: Math.floor(1e9 * Math.random()).toString(36)
      }, UU))]
    }

    function cU(UU, RU) {
      let {
        version: gU,
        unconfirmed: KU
      } = UU.field(qU), {
        clientID: cU
      } = UU.facet(PU);
      gU += RU.length;
      let GU = [],
        jU = null,
        uU = 0;
      for (let pU of RU) {
        let UU = uU < KU.length ? KU[uU] : null;
        UU && UU.clientID == pU.clientID ? (jU && (jU = jU.map(UU.changes, !0)), GU = tU.A.mapEffects(GU, pU.changes), uU++) : (GU = tU.A.mapEffects(GU, pU.changes), pU.effects && (GU = GU.concat(pU.effects)), jU = jU ? jU.compose(pU.changes) : pU.changes)
      }
      if (uU && (KU = KU.slice(uU)), KU.length && (jU && (KU = KU.map((UU => {
          let RU = UU.changes.map(jU);
          return jU = jU.map(UU.changes, !0), new pU(UU.origin, RU, tU.A.mapEffects(UU.effects, jU), cU)
        }))), GU.length)) {
        let UU = KU.reduce(((UU, RU) => UU.compose(RU.changes)), tU.ChangeSet.empty(KU[0].changes.length));
        GU = tU.A.mapEffects(GU, UU)
      }
      return jU ? UU.update({
        changes: jU,
        effects: GU,
        annotations: [tU.G.addToHistory.of(!1), tU.G.remote.of(!0), TU.of(new EU(gU, KU))],
        filter: !1
      }) : UU.update({
        annotations: [TU.of(new EU(gU, KU))]
      })
    }

    function GU(UU) {
      return UU.field(qU).unconfirmed
    }

    function jU(UU) {
      return UU.field(qU).version
    }
  },
  40748: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => hR
    });
    var tU = gU(40734);
    class pU {
      constructor(UU, RU, gU, tU, pU, EU, PU, TU, qU) {
        let KU = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          cU = arguments.length > 10 ? arguments[10] : void 0;
        this.p = UU, this.stack = RU, this.state = gU, this.reducePos = tU, this.pos = pU, this.score = EU, this.buffer = PU, this.bufferBase = TU, this.curContext = qU, this.lookAhead = KU, this.parent = cU
      }
      toString() {
        return `[${this.stack.filter(((UU,RU)=>RU%3==0)).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`
      }
      static start(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          tU = UU.parser.context;
        return new pU(UU, [], RU, gU, gU, 0, [], 0, tU ? new EU(tU, tU.start) : null, 0, null)
      }
      get context() {
        return this.curContext ? this.curContext.context : null
      }
      pushState(UU, RU) {
        this.stack.push(this.state, RU, this.bufferBase + this.buffer.length), this.state = UU
      }
      reduce(UU) {
        var RU;
        let gU = UU >> 19,
          tU = 65535 & UU,
          {
            parser: pU
          } = this.p,
          EU = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos),
          PU = pU.dynamicPrecedence(tU);
        if (PU && (this.score += PU), 0 == gU) return this.pushState(pU.getGoto(this.state, tU, !0), this.reducePos), tU < pU.minRepeatTerm && this.storeNode(tU, this.reducePos, this.reducePos, EU ? 8 : 4, !0), void this.reduceContext(tU, this.reducePos);
        let TU = this.stack.length - 3 * (gU - 1) - (262144 & UU ? 6 : 0),
          qU = TU ? this.stack[TU - 2] : this.p.hu[0].from,
          KU = this.reducePos - qU;
        KU >= 2e3 && !(null === (RU = this.p.parser.nodeSet.types[tU]) || void 0 === RU ? void 0 : RU.isAnonymous) && (qU == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = KU) : this.p.lastBigReductionSize < KU && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = qU, this.p.lastBigReductionSize = KU));
        let cU = TU ? this.stack[TU - 1] : 0,
          GU = this.bufferBase + this.buffer.length - cU;
        if (tU < pU.minRepeatTerm || 131072 & UU) {
          let UU = pU.stateFlag(this.state, 1) ? this.pos : this.reducePos;
          this.storeNode(tU, qU, UU, GU + 4, !0)
        }
        if (262144 & UU) this.state = this.stack[TU];
        else {
          let UU = this.stack[TU - 3];
          this.state = pU.getGoto(UU, tU, !0)
        }
        for (; this.stack.length > TU;) this.stack.pop();
        this.reduceContext(tU, qU)
      }
      storeNode(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
          pU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (0 == UU && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
          let UU = this,
            tU = this.buffer.length;
          if (0 == tU && UU.parent && (tU = UU.bufferBase - UU.parent.bufferBase, UU = UU.parent), tU > 0 && 0 == UU.buffer[tU - 4] && UU.buffer[tU - 1] > -1) {
            if (RU == gU) return;
            if (UU.buffer[tU - 2] >= RU) return void(UU.buffer[tU - 2] = gU)
          }
        }
        if (pU && this.pos != gU) {
          let pU = this.buffer.length;
          if (pU > 0 && (0 != this.buffer[pU - 4] || this.buffer[pU - 1] < 0)) {
            let UU = !1;
            for (let RU = pU; RU > 0 && this.buffer[RU - 2] > gU; RU -= 4)
              if (this.buffer[RU - 1] >= 0) {
                UU = !0;
                break
              } if (UU)
              for (; pU > 0 && this.buffer[pU - 2] > gU;) this.buffer[pU] = this.buffer[pU - 4], this.buffer[pU + 1] = this.buffer[pU - 3], this.buffer[pU + 2] = this.buffer[pU - 2], this.buffer[pU + 3] = this.buffer[pU - 1], pU -= 4, tU > 4 && (tU -= 4)
          }
          this.buffer[pU] = UU, this.buffer[pU + 1] = RU, this.buffer[pU + 2] = gU, this.buffer[pU + 3] = tU
        } else this.buffer.push(UU, RU, gU, tU)
      }
      shift(UU, RU, gU, tU) {
        if (131072 & UU) this.pushState(65535 & UU, this.pos);
        else if (0 == (262144 & UU)) {
          let pU = UU,
            {
              parser: EU
            } = this.p;
          this.pos = tU;
          let PU = EU.stateFlag(pU, 1);
          !PU && (tU > gU || RU <= EU.maxNode) && (this.reducePos = tU), this.pushState(pU, PU ? gU : Math.min(gU, this.reducePos)), this.shiftContext(RU, gU), RU <= EU.maxNode && this.buffer.push(RU, gU, tU, 4)
        } else this.pos = tU, this.shiftContext(RU, gU), RU <= this.p.parser.maxNode && this.buffer.push(RU, gU, tU, 4)
      }
      apply(UU, RU, gU, tU) {
        65536 & UU ? this.reduce(UU) : this.shift(UU, RU, gU, tU)
      }
      useNode(UU, RU) {
        let gU = this.p.reused.length - 1;
        (gU < 0 || this.p.reused[gU] != UU) && (this.p.reused.push(UU), gU++);
        let tU = this.pos;
        this.reducePos = this.pos = tU + UU.length, this.pushState(RU, tU), this.buffer.push(gU, tU, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, UU, this, this.p.stream.reset(this.pos - UU.length)))
      }
      split() {
        let UU = this,
          RU = UU.buffer.length;
        for (; RU > 0 && UU.buffer[RU - 2] > UU.reducePos;) RU -= 4;
        let gU = UU.buffer.slice(RU),
          tU = UU.bufferBase + RU;
        for (; UU && tU == UU.bufferBase;) UU = UU.parent;
        return new pU(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, gU, tU, this.curContext, this.lookAhead, UU)
      }
      recoverByDelete(UU, RU) {
        let gU = UU <= this.p.parser.maxNode;
        gU && this.storeNode(UU, this.pos, RU, 4), this.storeNode(0, this.pos, RU, gU ? 8 : 4), this.pos = this.reducePos = RU, this.score -= 190
      }
      canShift(UU) {
        for (let RU = new PU(this);;) {
          let gU = this.p.parser.stateSlot(RU.state, 4) || this.p.parser.hasAction(RU.state, UU);
          if (0 == gU) return !1;
          if (0 == (65536 & gU)) return !0;
          RU.reduce(gU)
        }
      }
      recoverByInsert(UU) {
        if (this.stack.length >= 300) return [];
        let RU = this.p.parser.nextStates(this.state);
        if (RU.length > 8 || this.stack.length >= 120) {
          let gU = [];
          for (let tU, pU = 0; pU < RU.length; pU += 2)(tU = RU[pU + 1]) != this.state && this.p.parser.hasAction(tU, UU) && gU.push(RU[pU], tU);
          if (this.stack.length < 120)
            for (let UU = 0; gU.length < 8 && UU < RU.length; UU += 2) {
              let tU = RU[UU + 1];
              gU.some(((UU, RU) => 1 & RU && UU == tU)) || gU.push(RU[UU], tU)
            }
          RU = gU
        }
        let gU = [];
        for (let tU = 0; tU < RU.length && gU.length < 4; tU += 2) {
          let UU = RU[tU + 1];
          if (UU == this.state) continue;
          let pU = this.split();
          pU.pushState(UU, this.pos), pU.storeNode(0, pU.pos, pU.pos, 4, !0), pU.shiftContext(RU[tU], this.pos), pU.reducePos = this.pos, pU.score -= 200, gU.push(pU)
        }
        return gU
      }
      forceReduce() {
        let {
          parser: UU
        } = this.p, RU = UU.stateSlot(this.state, 5);
        if (0 == (65536 & RU)) return !1;
        if (!UU.validAction(this.state, RU)) {
          let gU = RU >> 19,
            tU = 65535 & RU,
            pU = this.stack.length - 3 * gU;
          if (pU < 0 || UU.getGoto(this.stack[pU], tU, !1) < 0) {
            let UU = this.findForcedReduction();
            if (null == UU) return !1;
            RU = UU
          }
          this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100
        }
        return this.reducePos = this.pos, this.reduce(RU), !0
      }
      findForcedReduction() {
        let {
          parser: UU
        } = this.p, RU = [], gU = (tU, pU) => {
          if (!RU.includes(tU)) return RU.push(tU), UU.allActions(tU, (RU => {
            if (393216 & RU);
            else if (65536 & RU) {
              let gU = (RU >> 19) - pU;
              if (gU > 1) {
                let tU = 65535 & RU,
                  pU = this.stack.length - 3 * gU;
                if (pU >= 0 && UU.getGoto(this.stack[pU], tU, !1) >= 0) return gU << 19 | 65536 | tU
              }
            } else {
              let UU = gU(RU, pU + 1);
              if (null != UU) return UU
            }
          }))
        };
        return gU(this.state, 0)
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
          parser: UU
        } = this.p;
        return 65535 == UU.data[UU.stateSlot(this.state, 1)] && !UU.stateSlot(this.state, 4)
      }
      restart() {
        this.storeNode(0, this.pos, this.pos, 4, !0), this.state = this.stack[0], this.stack.length = 0
      }
      sameState(UU) {
        if (this.state != UU.state || this.stack.length != UU.stack.length) return !1;
        for (let RU = 0; RU < this.stack.length; RU += 3)
          if (this.stack[RU] != UU.stack[RU]) return !1;
        return !0
      }
      get parser() {
        return this.p.parser
      }
      dialectEnabled(UU) {
        return this.p.parser.dialect.flags[UU]
      }
      shiftContext(UU, RU) {
        this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, UU, this, this.p.stream.reset(RU)))
      }
      reduceContext(UU, RU) {
        this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, UU, this, this.p.stream.reset(RU)))
      }
      emitContext() {
        let UU = this.buffer.length - 1;
        (UU < 0 || -3 != this.buffer[UU]) && this.buffer.push(this.curContext.hash, this.pos, this.pos, -3)
      }
      emitLookAhead() {
        let UU = this.buffer.length - 1;
        (UU < 0 || -4 != this.buffer[UU]) && this.buffer.push(this.lookAhead, this.pos, this.pos, -4)
      }
      updateContext(UU) {
        if (UU != this.curContext.context) {
          let RU = new EU(this.curContext.tracker, UU);
          RU.hash != this.curContext.hash && this.emitContext(), this.curContext = RU
        }
      }
      setLookAhead(UU) {
        return !(UU <= this.lookAhead) && (this.emitLookAhead(), this.lookAhead = UU, !0)
      }
      close() {
        this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead()
      }
    }
    class EU {
      constructor(UU, RU) {
        this.tracker = UU, this.context = RU, this.hash = UU.strict ? UU.hash(RU) : 0
      }
    }
    class PU {
      constructor(UU) {
        this.start = UU, this.state = UU.state, this.stack = UU.stack, this.base = this.stack.length
      }
      reduce(UU) {
        let RU = 65535 & UU,
          gU = UU >> 19;
        0 == gU ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= 3 * (gU - 1);
        let tU = this.start.p.parser.getGoto(this.stack[this.base - 3], RU, !0);
        this.state = tU
      }
    }
    class TU {
      constructor(UU, RU, gU) {
        this.stack = UU, this.pos = RU, this.index = gU, this.buffer = UU.buffer, 0 == this.index && this.maybeNext()
      }
      static create(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UU.bufferBase + UU.buffer.length;
        return new TU(UU, RU, RU - UU.bufferBase)
      }
      maybeNext() {
        let UU = this.stack.parent;
        null != UU && (this.index = this.stack.bufferBase - UU.bufferBase, this.stack = UU, this.buffer = UU.buffer)
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
        return new TU(this.stack, this.pos, this.index)
      }
    }

    function qU(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uint16Array;
      if ("string" != typeof UU) return UU;
      let gU = null;
      for (let tU = 0, pU = 0; tU < UU.length;) {
        let EU = 0;
        for (;;) {
          let RU = UU.charCodeAt(tU++),
            gU = !1;
          if (126 == RU) {
            EU = 65535;
            break
          }
          RU >= 92 && RU--, RU >= 34 && RU--;
          let pU = RU - 32;
          if (pU >= 46 && (pU -= 46, gU = !0), EU += pU, gU) break;
          EU *= 46
        }
        gU ? gU[pU++] = EU : gU = new RU(EU)
      }
      return gU
    }
    class KU {
      constructor() {
        this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0
      }
    }
    const cU = new KU;
    class GU {
      constructor(UU, RU) {
        this.input = UU, this.hu = RU, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = cU, this.rangeIndex = 0, this.pos = this.chunkPos = RU[0].from, this.range = RU[0], this.end = RU[RU.length - 1].to, this.readNext()
      }
      resolveOffset(UU, RU) {
        let gU = this.range,
          tU = this.rangeIndex,
          pU = this.pos + UU;
        for (; pU < gU.from;) {
          if (!tU) return null;
          let UU = this.hu[--tU];
          pU -= gU.from - UU.to, gU = UU
        }
        for (; RU < 0 ? pU > gU.to : pU >= gU.to;) {
          if (tU == this.hu.length - 1) return null;
          let UU = this.hu[++tU];
          pU += UU.from - gU.to, gU = UU
        }
        return pU
      }
      clipPos(UU) {
        if (UU >= this.range.from && UU < this.range.to) return UU;
        for (let RU of this.hu)
          if (RU.to > UU) return Math.max(UU, RU.from);
        return this.end
      }
      peek(UU) {
        let RU, gU, tU = this.chunkOff + UU;
        if (tU >= 0 && tU < this.chunk.length) RU = this.pos + UU, gU = this.chunk.charCodeAt(tU);
        else {
          let tU = this.resolveOffset(UU, 1);
          if (null == tU) return -1;
          if (RU = tU, RU >= this.chunk2Pos && RU < this.chunk2Pos + this.chunk2.length) gU = this.chunk2.charCodeAt(RU - this.chunk2Pos);
          else {
            let UU = this.rangeIndex,
              tU = this.range;
            for (; tU.to <= RU;) tU = this.hu[++UU];
            this.chunk2 = this.input.chunk(this.chunk2Pos = RU), RU + this.chunk2.length > tU.to && (this.chunk2 = this.chunk2.slice(0, tU.to - RU)), gU = this.chunk2.charCodeAt(0)
          }
        }
        return RU >= this.token.lookAhead && (this.token.lookAhead = RU + 1), gU
      }
      acceptToken(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gU = RU ? this.resolveOffset(RU, -1) : this.pos;
        if (null == gU || gU < this.token.start) throw new RangeError("Token end out of bounds");
        this.token.value = UU, this.token.end = gU
      }
      acceptTokenTo(UU, RU) {
        this.token.value = UU, this.token.end = RU
      }
      getChunk() {
        if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
          let {
            chunk: UU,
            chunkPos: RU
          } = this;
          this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = UU, this.chunk2Pos = RU, this.chunkOff = this.pos - this.chunkPos
        } else {
          this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
          let UU = this.input.chunk(this.pos),
            RU = this.pos + UU.length;
          this.chunk = RU > this.range.to ? UU.slice(0, this.range.to - this.pos) : UU, this.chunkPos = this.pos, this.chunkOff = 0
        }
      }
      readNext() {
        return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff)
      }
      advance() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        for (this.chunkOff += UU; this.pos + UU >= this.range.to;) {
          if (this.rangeIndex == this.hu.length - 1) return this.setDone();
          UU -= this.range.to - this.pos, this.range = this.hu[++this.rangeIndex], this.pos = this.range.from
        }
        return this.pos += UU, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext()
      }
      setDone() {
        return this.pos = this.chunkPos = this.end, this.range = this.hu[this.rangeIndex = this.hu.length - 1], this.chunk = "", this.next = -1
      }
      reset(UU, RU) {
        if (RU ? (this.token = RU, RU.start = UU, RU.lookAhead = UU + 1, RU.value = RU.extended = -1) : this.token = cU, this.pos != UU) {
          if (this.pos = UU, UU == this.end) return this.setDone(), this;
          for (; UU < this.range.from;) this.range = this.hu[--this.rangeIndex];
          for (; UU >= this.range.to;) this.range = this.hu[++this.rangeIndex];
          UU >= this.chunkPos && UU < this.chunkPos + this.chunk.length ? this.chunkOff = UU - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext()
        }
        return this
      }
      read(UU, RU) {
        if (UU >= this.chunkPos && RU <= this.chunkPos + this.chunk.length) return this.chunk.slice(UU - this.chunkPos, RU - this.chunkPos);
        if (UU >= this.chunk2Pos && RU <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(UU - this.chunk2Pos, RU - this.chunk2Pos);
        if (UU >= this.range.from && RU <= this.range.to) return this.input.read(UU, RU);
        let gU = "";
        for (let tU of this.hu) {
          if (tU.from >= RU) break;
          tU.to > UU && (gU += this.input.read(Math.max(tU.from, UU), Math.min(tU.to, RU)))
        }
        return gU
      }
    }
    class jU {
      constructor(UU, RU) {
        this.data = UU, this.id = RU
      }
      token(UU, RU) {
        let {
          parser: gU
        } = RU.p;
        hU(this.data, UU, RU, this.id, gU.data, gU.tokenPrecTable)
      }
    }
    jU.prototype.contextual = jU.prototype.fallback = jU.prototype.extend = !1;
    class uU {
      constructor(UU, RU, gU) {
        this.precTable = RU, this.elseToken = gU, this.data = "string" == typeof UU ? qU(UU) : UU
      }
      token(UU, RU) {
        let gU = UU.pos,
          tU = 0;
        for (;;) {
          let gU = UU.next < 0,
            pU = UU.resolveOffset(1, 1);
          if (hU(this.data, UU, RU, 0, this.data, this.precTable), UU.token.value > -1) break;
          if (null == this.elseToken) return;
          if (gU || tU++, null == pU) break;
          UU.reset(pU, UU.token)
        }
        tU && (UU.reset(gU, UU.token), UU.acceptToken(this.elseToken, tU))
      }
    }
    uU.prototype.contextual = jU.prototype.fallback = jU.prototype.extend = !1;
    class CU {
      constructor(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.token = UU, this.contextual = !!RU.contextual, this.fallback = !!RU.fallback, this.extend = !!RU.extend
      }
    }

    function hU(UU, RU, gU, tU, pU, EU) {
      let PU = 0,
        TU = 1 << tU,
        {
          dialect: qU
        } = gU.p.parser;
      UU: for (; 0 != (TU & UU[PU]);) {
        let gU = UU[PU + 1];
        for (let GU = PU + 3; GU < gU; GU += 2)
          if ((UU[GU + 1] & TU) > 0) {
            let gU = UU[GU];
            if (qU.allows(gU) && (-1 == RU.token.value || RU.token.value == gU || eU(gU, RU.token.value, pU, EU))) {
              RU.acceptToken(gU);
              break
            }
          } let tU = RU.next,
          KU = 0,
          cU = UU[PU + 2];
        if (!(RU.next < 0 && cU > KU && 65535 == UU[gU + 3 * cU - 3])) {
          for (; KU < cU;) {
            let pU = KU + cU >> 1,
              EU = gU + pU + (pU << 1),
              TU = UU[EU],
              qU = UU[EU + 1] || 65536;
            if (tU < TU) cU = pU;
            else {
              if (!(tU >= qU)) {
                PU = UU[EU + 2], RU.advance();
                continue UU
              }
              KU = pU + 1
            }
          }
          break
        }
        PU = UU[gU + 3 * cU - 1]
      }
    }

    function QU(UU, RU, gU) {
      for (let tU, pU = RU; 65535 != (tU = UU[pU]); pU++)
        if (tU == gU) return pU - RU;
      return -1
    }

    function eU(UU, RU, gU, tU) {
      let pU = QU(gU, tU, RU);
      return pU < 0 || QU(gU, tU, UU) < pU
    }
    const WU = "undefined" != typeof process && {
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
    let fU = null;

    function xU(UU, RU, gU) {
      let pU = UU.cursor(tU.h.IncludeAnonymous);
      for (pU.moveTo(RU);;)
        if (!(gU < 0 ? pU.childBefore(RU) : pU.childAfter(RU)))
          for (;;) {
            if ((gU < 0 ? pU.to < RU : pU.from > RU) && !pU.type.isError) return gU < 0 ? Math.max(0, Math.min(pU.to - 1, RU - 25)) : Math.min(UU.length, Math.max(pU.from + 1, RU + 25));
            if (gU < 0 ? pU.prevSibling() : pU.nextSibling()) break;
            if (!pU.parent()) return gU < 0 ? 0 : UU.length
          }
    }
    class mU {
      constructor(UU, RU) {
        this.fragments = UU, this.nodeSet = RU, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment()
      }
      nextFragment() {
        let UU = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
        if (UU) {
          for (this.safeFrom = UU.openStart ? xU(UU.tree, UU.from + UU.offset, 1) - UU.offset : UU.from, this.safeTo = UU.openEnd ? xU(UU.tree, UU.to + UU.offset, -1) - UU.offset : UU.to; this.trees.length;) this.trees.pop(), this.start.pop(), this.index.pop();
          this.trees.push(UU.tree), this.start.push(-UU.offset), this.index.push(0), this.nextStart = this.safeFrom
        } else this.nextStart = 1e9
      }
      nodeAt(UU) {
        if (UU < this.nextStart) return null;
        for (; this.fragment && this.safeTo <= UU;) this.nextFragment();
        if (!this.fragment) return null;
        for (;;) {
          let RU = this.trees.length - 1;
          if (RU < 0) return this.nextFragment(), null;
          let gU = this.trees[RU],
            pU = this.index[RU];
          if (pU == gU.children.length) {
            this.trees.pop(), this.start.pop(), this.index.pop();
            continue
          }
          let EU = gU.children[pU],
            PU = this.start[RU] + gU.positions[pU];
          if (PU > UU) return this.nextStart = PU, null;
          if (EU instanceof tU.v) {
            if (PU == UU) {
              if (PU < this.safeFrom) return null;
              let UU = PU + EU.length;
              if (UU <= this.safeTo) {
                let RU = EU.prop(tU.i.lookAhead);
                if (!RU || UU + RU < this.fragment.to) return EU
              }
            }
            this.index[RU]++, PU + EU.length >= Math.max(this.safeFrom, UU) && (this.trees.push(EU), this.start.push(PU), this.index.push(0))
          } else this.index[RU]++, this.nextStart = PU + EU.length
        }
      }
    }
    class IU {
      constructor(UU, RU) {
        this.stream = RU, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = UU.tokenizers.map((UU => new KU))
      }
      getActions(UU) {
        let RU = 0,
          gU = null,
          {
            parser: tU
          } = UU.p,
          {
            tokenizers: pU
          } = tU,
          EU = tU.stateSlot(UU.state, 3),
          PU = UU.curContext ? UU.curContext.hash : 0,
          TU = 0;
        for (let qU = 0; qU < pU.length; qU++) {
          if (0 == (1 << qU & EU)) continue;
          let tU = pU[qU],
            KU = this.tokens[qU];
          if ((!gU || tU.fallback) && ((tU.contextual || KU.start != UU.pos || KU.mask != EU || KU.context != PU) && (this.updateCachedToken(KU, tU, UU), KU.mask = EU, KU.context = PU), KU.lookAhead > KU.end + 25 && (TU = Math.max(KU.lookAhead, TU)), 0 != KU.value)) {
            let pU = RU;
            if (KU.extended > -1 && (RU = this.addActions(UU, KU.extended, KU.end, RU)), RU = this.addActions(UU, KU.value, KU.end, RU), !tU.extend && (gU = KU, RU > pU)) break
          }
        }
        for (; this.actions.length > RU;) this.actions.pop();
        return TU && UU.setLookAhead(TU), gU || UU.pos != this.stream.end || (gU = new KU, gU.value = UU.p.parser.eofTerm, gU.start = gU.end = UU.pos, RU = this.addActions(UU, gU.value, gU.end, RU)), this.mainToken = gU, this.actions
      }
      getMainToken(UU) {
        if (this.mainToken) return this.mainToken;
        let RU = new KU,
          {
            pos: gU,
            p: tU
          } = UU;
        return RU.start = gU, RU.end = Math.min(gU + 1, tU.stream.end), RU.value = gU == tU.stream.end ? tU.parser.eofTerm : 0, RU
      }
      updateCachedToken(UU, RU, gU) {
        let tU = this.stream.clipPos(gU.pos);
        if (RU.token(this.stream.reset(tU, UU), gU), UU.value > -1) {
          let {
            parser: RU
          } = gU.p;
          for (let tU = 0; tU < RU.specialized.length; tU++)
            if (RU.specialized[tU] == UU.value) {
              let pU = RU.specializers[tU](this.stream.read(UU.start, UU.end), gU);
              if (pU >= 0 && gU.p.parser.dialect.allows(pU >> 1)) {
                0 == (1 & pU) ? UU.value = pU >> 1 : UU.extended = pU >> 1;
                break
              }
            }
        } else UU.value = 0, UU.end = this.stream.clipPos(tU + 1)
      }
      putAction(UU, RU, gU, tU) {
        for (let pU = 0; pU < tU; pU += 3)
          if (this.actions[pU] == UU) return tU;
        return this.actions[tU++] = UU, this.actions[tU++] = RU, this.actions[tU++] = gU, tU
      }
      addActions(UU, RU, gU, tU) {
        let {
          state: pU
        } = UU, {
          parser: EU
        } = UU.p, {
          data: PU
        } = EU;
        for (let TU = 0; TU < 2; TU++)
          for (let UU = EU.stateSlot(pU, TU ? 2 : 1);; UU += 3) {
            if (65535 == PU[UU]) {
              if (1 != PU[UU + 1]) {
                0 == tU && 2 == PU[UU + 1] && (tU = this.putAction(ZU(PU, UU + 2), RU, gU, tU));
                break
              }
              UU = ZU(PU, UU + 2)
            }
            PU[UU] == RU && (tU = this.putAction(ZU(PU, UU + 1), RU, gU, tU))
          }
        return tU
      }
    }
    class JU {
      constructor(UU, RU, gU, tU) {
        this.parser = UU, this.input = RU, this.hu = tU, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new GU(RU, tU), this.tokens = new IU(UU, this.stream), this.topTerm = UU.top[1];
        let {
          from: EU
        } = tU[0];
        this.stacks = [pU.start(this, UU.top[0], EU)], this.fragments = gU.length && this.stream.end - EU > 4 * UU.bufferLength ? new mU(gU, UU.nodeSet) : null
      }
      get parsedPos() {
        return this.minStackPos
      }
      advance() {
        let UU, RU, gU = this.stacks,
          tU = this.minStackPos,
          pU = this.stacks = [];
        if (this.bigReductionCount > 300 && 1 == gU.length) {
          let [UU] = gU;
          for (; UU.forceReduce() && UU.stack.length && UU.stack[UU.stack.length - 2] >= this.lastBigReductionStart;);
          this.bigReductionCount = this.lastBigReductionSize = 0
        }
        for (let EU = 0; EU < gU.length; EU++) {
          let PU = gU[EU];
          for (;;) {
            if (this.tokens.mainToken = null, PU.pos > tU) pU.push(PU);
            else {
              if (this.advanceStack(PU, pU, gU)) continue;
              {
                UU || (UU = [], RU = []), UU.push(PU);
                let gU = this.tokens.getMainToken(PU);
                RU.push(gU.value, gU.end)
              }
            }
            break
          }
        }
        if (!pU.length) {
          let RU = UU && function(UU) {
            let RU = null;
            for (let gU of UU) {
              let UU = gU.p.stoppedAt;
              (gU.pos == gU.p.stream.end || null != UU && gU.pos > UU) && gU.p.parser.stateFlag(gU.state, 2) && (!RU || RU.score < gU.score) && (RU = gU)
            }
            return RU
          }(UU);
          if (RU) return WU && console.log("Finish with " + this.stackID(RU)), this.stackToTree(RU);
          if (this.parser.strict) throw WU && UU && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + tU);
          this.recovering || (this.recovering = 5)
        }
        if (this.recovering && UU) {
          let gU = null != this.stoppedAt && UU[0].pos > this.stoppedAt ? UU[0] : this.runRecovery(UU, RU, pU);
          if (gU) return WU && console.log("Force-finish " + this.stackID(gU)), this.stackToTree(gU.forceAll())
        }
        if (this.recovering) {
          let UU = 1 == this.recovering ? 1 : 3 * this.recovering;
          if (pU.length > UU)
            for (pU.sort(((UU, RU) => RU.score - UU.score)); pU.length > UU;) pU.pop();
          pU.some((UU => UU.reducePos > tU)) && this.recovering--
        } else if (pU.length > 1) {
          UU: for (let UU = 0; UU < pU.length - 1; UU++) {
            let RU = pU[UU];
            for (let gU = UU + 1; gU < pU.length; gU++) {
              let tU = pU[gU];
              if (RU.sameState(tU) || RU.buffer.length > 500 && tU.buffer.length > 500) {
                if (!((RU.score - tU.score || RU.buffer.length - tU.buffer.length) > 0)) {
                  pU.splice(UU--, 1);
                  continue UU
                }
                pU.splice(gU--, 1)
              }
            }
          }
          pU.length > 12 && (pU.sort(((UU, RU) => RU.score - UU.score)), pU.splice(12, pU.length - 12))
        }
        this.minStackPos = pU[0].pos;
        for (let EU = 1; EU < pU.length; EU++) pU[EU].pos < this.minStackPos && (this.minStackPos = pU[EU].pos);
        return null
      }
      stopAt(UU) {
        if (null != this.stoppedAt && this.stoppedAt < UU) throw new RangeError("Can't move stoppedAt forward");
        this.stoppedAt = UU
      }
      advanceStack(UU, RU, gU) {
        let pU = UU.pos,
          {
            parser: EU
          } = this,
          PU = WU ? this.stackID(UU) + " -> " : "";
        if (null != this.stoppedAt && pU > this.stoppedAt) return UU.forceReduce() ? UU : null;
        if (this.fragments) {
          let RU = UU.curContext && UU.curContext.tracker.strict,
            gU = RU ? UU.curContext.hash : 0;
          for (let TU = this.fragments.nodeAt(pU); TU;) {
            let pU = this.parser.nodeSet.types[TU.type.id] == TU.type ? EU.getGoto(UU.state, TU.type.id) : -1;
            if (pU > -1 && TU.length && (!RU || (TU.prop(tU.i.contextHash) || 0) == gU)) return UU.useNode(TU, pU), WU && console.log(PU + this.stackID(UU) + ` (via reuse of ${EU.getName(TU.type.id)})`), !0;
            if (!(TU instanceof tU.v) || 0 == TU.children.length || TU.positions[0] > 0) break;
            let qU = TU.children[0];
            if (!(qU instanceof tU.v && 0 == TU.positions[0])) break;
            TU = qU
          }
        }
        let TU = EU.stateSlot(UU.state, 4);
        if (TU > 0) return UU.reduce(TU), WU && console.log(PU + this.stackID(UU) + ` (via always-reduce ${EU.getName(65535&TU)})`), !0;
        if (UU.stack.length >= 8400)
          for (; UU.stack.length > 6e3 && UU.forceReduce(););
        let qU = this.tokens.getActions(UU);
        for (let tU = 0; tU < qU.length;) {
          let TU = qU[tU++],
            KU = qU[tU++],
            cU = qU[tU++],
            GU = tU == qU.length || !gU,
            jU = GU ? UU : UU.split(),
            uU = this.tokens.mainToken;
          if (jU.apply(TU, KU, uU ? uU.start : jU.pos, cU), WU && console.log(PU + this.stackID(jU) + ` (via ${0==(65536&TU)?"shift":`reduce of ${EU.getName(65535&TU)}`} for ${EU.getName(KU)} @ ${pU}${jU==UU?"":", split"})`), GU) return !0;
          jU.pos > pU ? RU.push(jU) : gU.push(jU)
        }
        return !1
      }
      advanceFully(UU, RU) {
        let gU = UU.pos;
        for (;;) {
          if (!this.advanceStack(UU, null, null)) return !1;
          if (UU.pos > gU) return wU(UU, RU), !0
        }
      }
      runRecovery(UU, RU, gU) {
        let tU = null,
          pU = !1;
        for (let EU = 0; EU < UU.length; EU++) {
          let PU = UU[EU],
            TU = RU[EU << 1],
            qU = RU[1 + (EU << 1)],
            KU = WU ? this.stackID(PU) + " -> " : "";
          if (PU.deadEnd) {
            if (pU) continue;
            if (pU = !0, PU.restart(), WU && console.log(KU + this.stackID(PU) + " (restarted)"), this.advanceFully(PU, gU)) continue
          }
          let cU = PU.split(),
            GU = KU;
          for (let UU = 0; UU < 10 && cU.forceReduce(); UU++) {
            if (WU && console.log(GU + this.stackID(cU) + " (via force-reduce)"), this.advanceFully(cU, gU)) break;
            WU && (GU = this.stackID(cU) + " -> ")
          }
          for (let UU of PU.recoverByInsert(TU)) WU && console.log(KU + this.stackID(UU) + " (via recover-insert)"), this.advanceFully(UU, gU);
          this.stream.end > PU.pos ? (qU == PU.pos && (qU++, TU = 0), PU.recoverByDelete(TU, qU), WU && console.log(KU + this.stackID(PU) + ` (via recover-delete ${this.parser.getName(TU)})`), wU(PU, gU)) : (!tU || tU.score < cU.score) && (tU = cU)
        }
        return tU
      }
      stackToTree(UU) {
        return UU.close(), tU.v.build({
          buffer: TU.create(UU),
          nodeSet: this.parser.nodeSet,
          topID: this.topTerm,
          maxBufferLength: this.parser.bufferLength,
          reused: this.reused,
          start: this.hu[0].from,
          length: UU.pos - this.hu[0].from,
          minRepeatType: this.parser.minRepeatTerm
        })
      }
      stackID(UU) {
        let RU = (fU || (fU = new WeakMap)).get(UU);
        return RU || fU.set(UU, RU = String.fromCodePoint(this.nextStackID++)), RU + UU
      }
    }

    function wU(UU, RU) {
      for (let gU = 0; gU < RU.length; gU++) {
        let tU = RU[gU];
        if (tU.pos == UU.pos && tU.sameState(UU)) return void(RU[gU].score < UU.score && (RU[gU] = UU))
      }
      RU.push(UU)
    }
    class nU {
      constructor(UU, RU, gU) {
        this.source = UU, this.flags = RU, this.disabled = gU
      }
      allows(UU) {
        return !this.disabled || 0 == this.disabled[UU]
      }
    }
    const bU = UU => UU;
    class oU extends tU.q {
      constructor(UU) {
        if (super(), this.wrappers = [], 14 != UU.version) throw new RangeError(`Parser version (${UU.version}) doesn't match runtime version (14)`);
        let RU = UU.nodeNames.split(" ");
        this.minRepeatTerm = RU.length;
        for (let tU = 0; tU < UU.repeatNodeCount; tU++) RU.push("");
        let gU = Object.keys(UU.topRules).map((RU => UU.topRules[RU][1])),
          pU = [];
        for (let tU = 0; tU < RU.length; tU++) pU.push([]);

        function EU(UU, RU, gU) {
          pU[UU].push([RU, RU.deserialize(String(gU))])
        }
        if (UU.nodeProps)
          for (let TU of UU.nodeProps) {
            let UU = TU[0];
            "string" == typeof UU && (UU = tU.i[UU]);
            for (let RU = 1; RU < TU.length;) {
              let gU = TU[RU++];
              if (gU >= 0) EU(gU, UU, TU[RU++]);
              else {
                let tU = TU[RU + -gU];
                for (let pU = -gU; pU > 0; pU--) EU(TU[RU++], UU, tU);
                RU++
              }
            }
          }
        this.nodeSet = new tU.k(RU.map(((RU, EU) => tU.l.define({
          name: EU >= this.minRepeatTerm ? void 0 : RU,
          id: EU,
          props: pU[EU],
          top: gU.indexOf(EU) > -1,
          error: 0 == EU,
          skipped: UU.skippedNodes && UU.skippedNodes.indexOf(EU) > -1
        })))), UU.propSources && (this.nodeSet = this.nodeSet.extend(...UU.propSources)), this.strict = !1, this.bufferLength = tU.d;
        let PU = qU(UU.tokenData);
        this.context = UU.context, this.specializerSpecs = UU.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
        for (let tU = 0; tU < this.specializerSpecs.length; tU++) this.specialized[tU] = this.specializerSpecs[tU].term;
        this.specializers = this.specializerSpecs.map(aU), this.states = qU(UU.states, Uint32Array), this.data = qU(UU.stateData), this.goto = qU(UU.goto), this.maxTerm = UU.maxTerm, this.tokenizers = UU.tokenizers.map((UU => "number" == typeof UU ? new jU(PU, UU) : UU)), this.topRules = UU.topRules, this.dialects = UU.dialects || {}, this.dynamicPrecedences = UU.dynamicPrecedences || null, this.tokenPrecTable = UU.tokenPrec, this.termNames = UU.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]]
      }
      createParse(UU, RU, gU) {
        let tU = new JU(this, UU, RU, gU);
        for (let pU of this.wrappers) tU = pU(tU, UU, RU, gU);
        return tU
      }
      getGoto(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          tU = this.goto;
        if (RU >= tU[0]) return -1;
        for (let pU = tU[RU + 1];;) {
          let RU = tU[pU++],
            EU = 1 & RU,
            PU = tU[pU++];
          if (EU && gU) return PU;
          for (let gU = pU + (RU >> 1); pU < gU; pU++)
            if (tU[pU] == UU) return PU;
          if (EU) return -1
        }
      }
      hasAction(UU, RU) {
        let gU = this.data;
        for (let tU = 0; tU < 2; tU++)
          for (let pU, EU = this.stateSlot(UU, tU ? 2 : 1);; EU += 3) {
            if (65535 == (pU = gU[EU])) {
              if (1 != gU[EU + 1]) {
                if (2 == gU[EU + 1]) return ZU(gU, EU + 2);
                break
              }
              pU = gU[EU = ZU(gU, EU + 2)]
            }
            if (pU == RU || 0 == pU) return ZU(gU, EU + 1)
          }
        return 0
      }
      stateSlot(UU, RU) {
        return this.states[6 * UU + RU]
      }
      stateFlag(UU, RU) {
        return (this.stateSlot(UU, 0) & RU) > 0
      }
      validAction(UU, RU) {
        return !!this.allActions(UU, (UU => UU == RU || null))
      }
      allActions(UU, RU) {
        let gU = this.stateSlot(UU, 4),
          tU = gU ? RU(gU) : void 0;
        for (let pU = this.stateSlot(UU, 1); null == tU; pU += 3) {
          if (65535 == this.data[pU]) {
            if (1 != this.data[pU + 1]) break;
            pU = ZU(this.data, pU + 2)
          }
          tU = RU(ZU(this.data, pU + 1))
        }
        return tU
      }
      nextStates(UU) {
        let RU = [];
        for (let gU = this.stateSlot(UU, 1);; gU += 3) {
          if (65535 == this.data[gU]) {
            if (1 != this.data[gU + 1]) break;
            gU = ZU(this.data, gU + 2)
          }
          if (0 == (1 & this.data[gU + 2])) {
            let UU = this.data[gU + 1];
            RU.some(((RU, gU) => 1 & gU && RU == UU)) || RU.push(this.data[gU], UU)
          }
        }
        return RU
      }
      configure(UU) {
        let RU = Object.assign(Object.create(oU.prototype), this);
        if (UU.props && (RU.nodeSet = this.nodeSet.extend(...UU.props)), UU.top) {
          let gU = this.topRules[UU.top];
          if (!gU) throw new RangeError(`Invalid top rule name ${UU.top}`);
          RU.top = gU
        }
        return UU.tokenizers && (RU.tokenizers = this.tokenizers.map((RU => {
          let gU = UU.tokenizers.find((UU => UU.from == RU));
          return gU ? gU.to : RU
        }))), UU.specializers && (RU.specializers = this.specializers.slice(), RU.specializerSpecs = this.specializerSpecs.map(((gU, tU) => {
          let pU = UU.specializers.find((UU => UU.from == gU.external));
          if (!pU) return gU;
          let EU = Object.assign(Object.assign({}, gU), {
            external: pU.to
          });
          return RU.specializers[tU] = aU(EU), EU
        }))), UU.contextTracker && (RU.context = UU.contextTracker), UU.dialect && (RU.dialect = this.parseDialect(UU.dialect)), null != UU.strict && (RU.strict = UU.strict), UU.wrap && (RU.wrappers = RU.wrappers.concat(UU.wrap)), null != UU.bufferLength && (RU.bufferLength = UU.bufferLength), RU
      }
      hasWrappers() {
        return this.wrappers.length > 0
      }
      getName(UU) {
        return this.termNames ? this.termNames[UU] : String(UU <= this.maxNode && this.nodeSet.types[UU].name || UU)
      }
      get eofTerm() {
        return this.maxNode + 1
      }
      get topNode() {
        return this.nodeSet.types[this.top[1]]
      }
      dynamicPrecedence(UU) {
        let RU = this.dynamicPrecedences;
        return null == RU ? 0 : RU[UU] || 0
      }
      parseDialect(UU) {
        let RU = Object.keys(this.dialects),
          gU = RU.map((() => !1));
        if (UU)
          for (let pU of UU.split(" ")) {
            let UU = RU.indexOf(pU);
            UU >= 0 && (gU[UU] = !0)
          }
        let tU = null;
        for (let pU = 0; pU < RU.length; pU++)
          if (!gU[pU])
            for (let UU, gU = this.dialects[RU[pU]]; 65535 != (UU = this.data[gU++]);)(tU || (tU = new Uint8Array(this.maxTerm + 1)))[UU] = 1;
        return new nU(UU, gU, tU)
      }
      static deserialize(UU) {
        return new oU(UU)
      }
    }

    function ZU(UU, RU) {
      return UU[RU] | UU[RU + 1] << 16
    }

    function aU(UU) {
      if (UU.external) {
        let RU = UU.extend ? 1 : 0;
        return (gU, tU) => UU.external(gU, tU) << 1 | RU
      }
      return UU.get
    }
    var YU = gU(40739);
    const BU = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288],
      VU = new class {
        constructor(UU) {
          this.start = UU.start, this.shift = UU.shift || bU, this.reduce = UU.reduce || bU, this.reuse = UU.reuse || bU, this.hash = UU.hash || (() => 0), this.strict = !1 !== UU.strict
        }
      }({
        start: !1,
        shift: (UU, RU) => 5 == RU || 6 == RU || 320 == RU ? UU : 321 == RU,
        strict: !1
      }),
      rU = new CU(((UU, RU) => {
        let {
          next: gU
        } = UU;
        (125 == gU || -1 == gU || RU.context) && UU.acceptToken(318)
      }), {
        contextual: !0,
        fallback: !0
      }),
      XU = new CU(((UU, RU) => {
        let gU, {
          next: tU
        } = UU;
        BU.indexOf(tU) > -1 || (47 != tU || 47 != (gU = UU.peek(1)) && 42 != gU) && (125 == tU || 59 == tU || -1 == tU || RU.context || UU.acceptToken(316))
      }), {
        contextual: !0
      }),
      vU = new CU(((UU, RU) => {
        91 != UU.next || RU.context || UU.acceptToken(317)
      }), {
        contextual: !0
      }),
      dU = new CU(((UU, RU) => {
        let {
          next: gU
        } = UU;
        if (43 == gU || 45 == gU) {
          if (UU.advance(), gU == UU.next) {
            UU.advance();
            let gU = !RU.context && RU.canShift(1);
            UU.acceptToken(gU ? 1 : 2)
          }
        } else 63 == gU && 46 == UU.peek(1) && (UU.advance(), UU.advance(), (UU.next < 48 || UU.next > 57) && UU.acceptToken(3))
      }), {
        contextual: !0
      });

    function HU(UU, RU) {
      return UU >= 65 && UU <= 90 || UU >= 97 && UU <= 122 || 95 == UU || UU >= 192 || !RU && UU >= 48 && UU <= 57
    }
    const SU = new CU(((UU, RU) => {
        if (60 != UU.next || !RU.dialectEnabled(0)) return;
        if (UU.advance(), 47 == UU.next) return;
        let gU = 0;
        for (; BU.indexOf(UU.next) > -1;) UU.advance(), gU++;
        if (HU(UU.next, !0)) {
          for (UU.advance(), gU++; HU(UU.next, !1);) UU.advance(), gU++;
          for (; BU.indexOf(UU.next) > -1;) UU.advance(), gU++;
          if (44 == UU.next) return;
          for (let RU = 0;; RU++) {
            if (7 == RU) {
              if (!HU(UU.next, !0)) return;
              break
            }
            if (UU.next != "extends".charCodeAt(RU)) break;
            UU.advance(), gU++
          }
        }
        UU.acceptToken(4, -gU)
      })),
      sU = (0, YU.e)({
        "get set async static": YU.j.modifier,
        "for while do if else switch try catch finally return throw break continue default case defer": YU.j.controlKeyword,
        "in of await yield void typeof delete instanceof as satisfies": YU.j.operatorKeyword,
        "let var const using function class extends": YU.j.definitionKeyword,
        "import export from": YU.j.moduleKeyword,
        "with debugger new": YU.j.keyword,
        TemplateString: YU.j.special(YU.j.string),
        super: YU.j.atom,
        BooleanLiteral: YU.j.bool,
        this: YU.j.self,
        null: YU.j.null,
        Star: YU.j.modifier,
        VariableName: YU.j.variableName,
        "CallExpression/VariableName TaggedTemplateExpression/VariableName": YU.j.function(YU.j.variableName),
        VariableDefinition: YU.j.definition(YU.j.variableName),
        Label: YU.j.labelName,
        PropertyName: YU.j.propertyName,
        PrivatePropertyName: YU.j.special(YU.j.propertyName),
        "CallExpression/MemberExpression/PropertyName": YU.j.function(YU.j.propertyName),
        "FunctionDeclaration/VariableDefinition": YU.j.function(YU.j.definition(YU.j.variableName)),
        "ClassDeclaration/VariableDefinition": YU.j.definition(YU.j.className),
        "NewExpression/VariableName": YU.j.className,
        PropertyDefinition: YU.j.definition(YU.j.propertyName),
        PrivatePropertyDefinition: YU.j.definition(YU.j.special(YU.j.propertyName)),
        UpdateOp: YU.j.updateOperator,
        "LineComment Hashbang": YU.j.lineComment,
        BlockComment: YU.j.blockComment,
        Number: YU.j.number,
        String: YU.j.string,
        Escape: YU.j.escape,
        ArithOp: YU.j.arithmeticOperator,
        LogicOp: YU.j.logicOperator,
        BitOp: YU.j.bitwiseOperator,
        CompareOp: YU.j.compareOperator,
        RegExp: YU.j.regexp,
        Equals: YU.j.definitionOperator,
        Arrow: YU.j.function(YU.j.punctuation),
        ": Spread": YU.j.punctuation,
        "( )": YU.j.paren,
        "[ ]": YU.j.squareBracket,
        "{ }": YU.j.brace,
        "InterpolationStart InterpolationEnd": YU.j.special(YU.j.brace),
        ".": YU.j.derefOperator,
        ", ;": YU.j.separator,
        "@": YU.j.meta,
        TypeName: YU.j.typeName,
        TypeDefinition: YU.j.definition(YU.j.typeName),
        "type enum interface implements namespace module declare": YU.j.definitionKeyword,
        "abstract global Privacy readonly override": YU.j.modifier,
        "is keyof unique infer asserts": YU.j.operatorKeyword,
        JSXAttributeValue: YU.j.attributeValue,
        JSXText: YU.j.content,
        "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": YU.j.angleBracket,
        "JSXIdentifier JSXNameSpacedName": YU.j.tagName,
        "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": YU.j.attributeName,
        "JSXBuiltin/JSXIdentifier": YU.j.standard(YU.j.tagName)
      }),
      yU = {
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
      kU = {
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
      FU = {
        __proto__: null,
        "<": 193
      },
      iU = oU.deserialize({
        version: 14,
        states: "$F|Q%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Il'#IlO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JrO6[Q!0MxO'#JsO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO9XQMhO'#F|O9`Q`O'#F{OOQ!0Lf'#Js'#JsOOQ!0Lb'#Jr'#JrO9eQ`O'#GwOOQ['#K_'#K_O9pQ`O'#IYO9uQ!0LrO'#IZOOQ['#J`'#J`OOQ['#I_'#I_Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GsO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EyO;hQMhO'#FeO;xQ`O'#GsOOQO'#K`'#K`O;}Q`O'#K`O<]Q`O'#G{O<]Q`O'#G|O<]Q`O'#HOO9kQ`O'#HRO=SQ`O'#HUO>kQ`O'#CeO>{Q`O'#HcO?TQ`O'#HiO?TQ`O'#HkO`QlO'#HmO?TQ`O'#HoO?TQ`O'#HrO?YQ`O'#HxO?_Q!0LsO'#IOO%[QlO'#IQO?jQ!0LsO'#ISO?uQ!0LsO'#IUO9uQ!0LrO'#IWO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jv'#JvO%[QlO'#JvOOQO'#Jy'#JyOOQO'#Ih'#IhOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J}'#J}OC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jx'#JxODlQpO'#JyOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CD})CD}OOOO'#I`'#I`OFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ia'#IaOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Ic'#IcOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IdOGyQ`O'#JtOIxQ!fO'#JtO+}QlO'#JtOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KTOKPQ`O'#KSOKPQ`O'#KSOKXQ`O,5;^OK^Q`O'#KROOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KQONtQ`O'#KPO9eQ`O'#KPO! YQ`O'#KPO! bQ`O,5;]O! gQ`O'#KPO!#lQ!fO'#JsOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#Jz'#JzOOQO-E<j-E<jO9kQ`O,5=_O!$rQ`O,5=_O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;dO!(|QpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)[QlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IpO!+_Q!0LrO,5<iO%[QlO,5;eO!&zQMhO,5;eO!+|QMhO,5;eO!-nQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-uQ,UO'#FjO!.rQ,UO'#KXO!.^Q,UO'#KXO!.yQ,UO'#KXOOQO'#KX'#KXO!/_Q,UO,5<SOOOW,5<`,5<`O!/pQlO'#FvOOOW'#Io'#IoO7VO7dO,5<QO!/wQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<eO!1pQ`O,5<hO!3YQ(CWO'#GXO!3jQ`O'#GYO!3oQ`O'#GYO!5_Q(CWO'#G^O!6dQpO'#GbOOQO'#Gn'#GnO!,TQMhO'#GmOOQO'#Gp'#GpO!,TQMhO'#GoO!7VQ$IUO'#JlOOQ!0Lh'#Jl'#JlO!7aQ`O'#JkO!7oQ`O'#JjO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<eO1SQ`O'#DZO!,TQMhO'#GPO!,TQMhO'#GRO!8gQ`O'#GTO!8lQ`O'#GUO!3oQ`O'#G[O!,TQMhO'#GaO<]Q`O'#JkO!8qQ`O'#EqO!9`Q`O,5<gOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KR'#KRO!:iQ!0LrO'#KaO9uQ!0LrO,5=cO`QlO,5>tOOQ['#Jh'#JhOOQ[,5>u,5>uOOQ[-E<]-E<]O!<hQ!0MxO,5:bO!:]QpO,5:`O!?RQ!0MxO,5:jO%[QlO,5:jO!AiQ!0MxO,5:lOOQO,5@z,5@zO!BYQMhO,5=_O!BhQ!0LrO'#JiO9`Q`O'#JiO!ByQ!0LrO,59ZO!CUQpO,59ZO!C^QMhO,59ZO:dQMhO,59ZO!CiQ`O,5;ZO!CqQ`O'#HbO!DVQ`O'#KdO%[QlO,5;}O!:]QpO,5<PO!D_Q`O,5=zO!DdQ`O,5=zO!DiQ`O,5=zO!DwQ`O,5=zO9uQ!0LrO,5=zO<]Q`O,5=jOOQO'#Cy'#CyO!EOQpO,5=gO!EWQMhO,5=hO!EcQ`O,5=jO!EhQ!bO,5=mO!EpQ`O'#K`O?YQ`O'#HWO9kQ`O'#HYO!EuQ`O'#HYO:dQMhO'#H[O!EzQ`O'#H[OOQ[,5=p,5=pO!FPQ`O'#H]O!FbQ`O'#CoO!FgQ`O,59PO!FqQ`O,59PO!HvQlO,59POOQ[,59P,59PO!IWQ!0LrO,59PO%[QlO,59PO!KcQlO'#HeOOQ['#Hf'#HfOOQ['#Hg'#HgO`QlO,5=}O!KyQ`O,5=}O`QlO,5>TO`QlO,5>VO!LOQ`O,5>XO`QlO,5>ZO!LTQ`O,5>^O!LYQlO,5>dOOQ[,5>j,5>jO%[QlO,5>jO9uQ!0LrO,5>lOOQ[,5>n,5>nO#!dQ`O,5>nOOQ[,5>p,5>pO#!dQ`O,5>pOOQ[,5>r,5>rO##QQpO'#D_O%[QlO'#JvO##sQpO'#JvO##}QpO'#DmO#$`QpO'#DmO#&qQlO'#DmO#&xQ`O'#JuO#'QQ`O,5:WO#'VQ`O'#EtO#'eQ`O'#KUO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CUQpO,5;YO!C^QMhO,5;YO:dQMhO,5;YO#(`Q`O,5@bO#(eQ07dO,5:sOOQO-E<f-E<fO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!ByQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CUQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I^'#I^P#+RO&2DjO,58|POOO,58|,58|OOOO-E<^-E<^OOQ!0Lh1G.p1G.pOOOO-E<_-E<_OOOO,59},59}O#+^Q!bO,59}OOOO-E<a-E<aOOQ!0Lf1G/g1G/gO#+cQ!fO,5?OO+}QlO,5?OOOQO,5?U,5?UO#+mQlO'#IdOOQO-E<b-E<bO#+zQ`O,5@`O#,SQ!fO,5@`O#,ZQ`O,5@nOOQ!0Lf1G/m1G/mO%[QlO,5@oO#,cQ`O'#IjOOQO-E<h-E<hO#,ZQ`O,5@nOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@lO#,wQ!0LrO,5@lO#-YQ!0LrO,5@lO#-aQ`O,5@kO9eQ`O,5@kO#-iQ`O,5@kO#-wQ`O'#ImO#-aQ`O,5@kOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2yO9kQ`O1G2yOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0rQ!0MzO'#JlO!$wQlO1G0uO#2}Q!fO'#JwO%[QlO'#JwO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#3^Q`O1G1OO#5rQ!0MxO1G1PO#5yQ!0MxO1G1PO#8aQ!0MxO1G1PO#8hQ!0MxO1G1PO#;OQ!0MxO1G1PO#=fQ!0MxO1G1PO#=mQ!0MxO1G1PO#=tQ!0MxO1G1PO#@[Q!0MxO1G1PO#@cQ!0MxO1G1PO#BpQ?MtO'#CiO#DkQ?MtO1G1`O#DrQ?MtO'#JsO#EVQ!0MxO,5?[OOQ!0Lb-E<n-E<nO#GdQ!0MxO1G1PO#HaQ!0MzO1G1POOQ!0Lf1G1P1G1PO#IdQMjO'#J|O#InQ`O,5:xO#IsQ!0MxO1G1cO#JgQ,UO,5<WO#JoQ,UO,5<XO#JwQ,UO'#FoO#K`Q`O'#FnOOQO'#KY'#KYOOQO'#In'#InO#KeQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#KvQ?MtO'#JrO#LQQ`O,5<bO!)[QlO,5<bOOOW-E<m-E<mOOQ!0Lf1G1l1G1lO#LVQpO'#KXOOQ!0Lf,5<d,5<dO#L_QpO,5<dO#LdQMhO'#DTOOOO'#Ib'#IbO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8lQ`O'#IrO#LvQ`O,5<zOOQ!0Lh,5<w,5<wO!,TQMhO'#IuO#MdQMjO,5=XO!,TQMhO'#IwO#NVQMjO,5=ZO!&zQMhO,5=]OOQO1G2S1G2SO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GbO$!dQ!dO,5<sO$!kQ`O'#K[O9eQ`O'#K[O$!yQ`O,5<uO$#aQ!dO'#C{O!,TQMhO,5<tO$#kQ`O'#GZO$$PQ`O,5<tO$$UQ!dO'#GWO$$cQ!dO'#K]O$$mQ`O'#K]O!&zQMhO'#K]O$$rQ`O,5<xO$$wQlO'#JvO$%RQpO'#GcO#$`QpO'#GcO$%dQ`O'#GgO!3oQ`O'#GkO$%iQ!0LrO'#ItO$%tQpO,5<|OOQ!0Lp,5<|,5<|O$%{QpO'#GcO$&YQpO'#GdO$&kQpO'#GdO$&pQMjO,5=XO$'QQMjO,5=ZOOQ!0Lh,5=^,5=^O!,TQMhO,5@VO!,TQMhO,5@VO$'bQ`O'#IyO$'vQ`O,5@UO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@VO$)TQ$IYO,59uOOQ!0Lh'#Jp'#JpO$)vQMjO,5<kO$*iQMjO,5<mO@zQ`O,5<oOOQ!0Lh,5<p,5<pO$*sQ`O,5<vO$*xQMjO,5<{O$+YQ`O'#KPO!$wQlO1G2RO$+_Q`O1G2RO9eQ`O'#KSO9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I{O$+dQ!0LrO,5@{OOQ[1G2}1G2}OOQ[1G4`1G4`OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-fQ!0MxO1G0UOOQ[1G2y1G2yO!&zQMhO1G2yO%[QlO1G2yO#.tQ`O1G2yO$/jQMhO'#EkOOQ!0Lb,5@T,5@TO$/wQ!0LrO,5@TOOQ[1G.u1G.uO!ByQ!0LrO1G.uO!CUQpO1G.uO!C^QMhO1G.uO$0YQ`O1G0uO$0_Q`O'#CiO$0jQ`O'#KeO$0rQ`O,5=|O$0wQ`O'#KeO$0|Q`O'#KeO$1[Q`O'#JRO$1jQ`O,5AOO$1rQ!fO1G1iOOQ!0Lf1G1k1G1kO9kQ`O1G3fO@zQ`O1G3fO$1yQ`O1G3fO$2OQ`O1G3fO!DiQ`O1G3fO9uQ!0LrO1G3fOOQ[1G3f1G3fO!EcQ`O1G3UO!&zQMhO1G3RO$2TQ`O1G3ROOQ[1G3S1G3SO!&zQMhO1G3SO$2YQ`O1G3SO$2bQpO'#HQOOQ[1G3U1G3UO!6_QpO'#I}O!EhQ!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$2jQMhO,5=tO9kQ`O,5=tO$%dQ`O,5=vO9`Q`O,5=vO!CUQpO,5=vO!C^QMhO,5=vO:dQMhO,5=vO$2xQ`O'#KcO$3TQ`O,5=wOOQ[1G.k1G.kO$3YQ!0LrO1G.kO@zQ`O1G.kO$3eQ`O1G.kO9uQ!0LrO1G.kO$5mQ!fO,5AQO$5zQ`O,5AQO9eQ`O,5AQO$6VQlO,5>PO$6^Q`O,5>POOQ[1G3i1G3iO`QlO1G3iOOQ[1G3o1G3oOOQ[1G3q1G3qO?TQ`O1G3sO$6cQlO1G3uO$:gQlO'#HtOOQ[1G3x1G3xO$:tQ`O'#HzO?YQ`O'#H|OOQ[1G4O1G4OO$:|QlO1G4OO9uQ!0LrO1G4UOOQ[1G4W1G4WOOQ!0Lb'#G_'#G_O9uQ!0LrO1G4YO9uQ!0LrO1G4[O$?TQ`O,5@bO!)[QlO,5;`O9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CUQpO,5:XO$?YQ?MtO,5:XOOQO,5;`,5;`O$?dQpO'#IeO$?zQ`O,5@aOOQ!0Lf1G/r1G/rO$@SQpO'#IkO$@^Q`O,5@pOOQ!0Lb1G0y1G0yO#$`QpO,5:XOOQO'#Ig'#IgO$@fQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CUQpO1G0tO!C^QMhO1G0tOOQ!0Lb1G5|1G5|O!ByQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@mQ!0LrO1G0mO$@xQ!0LrO1G0mO!CUQpO1G0^ODWQpO1G0^O$AWQ!0LrO1G0mOOQO1G0^1G0^O$AlQ!0MxO1G0mPOOO-E<[-E<[POOO1G.h1G.hOOOO1G/i1G/iO$AvQ!bO,5<iO$BOQ!fO1G4jOOQO1G4p1G4pO%[QlO,5?OO$BYQ`O1G5zO$BbQ`O1G6YO$BjQ!fO1G6ZO9eQ`O,5?UO$BtQ!0MxO1G6WO%[QlO1G6WO$CUQ!0LrO1G6WO$CgQ`O1G6VO$CgQ`O1G6VO9eQ`O1G6VO$CoQ`O,5?XO9eQ`O,5?XOOQO,5?X,5?XO$DTQ`O,5?XO$+YQ`O,5?XOOQO-E<k-E<kOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(e7+(eO!&zQMhO7+(eO%[QlO7+(eO$DcQ`O7+(eO$DnQMhO7+(eO$D|Q!0MzO,5=XO$GXQ!0MzO,5=ZO$IdQ!0MzO,5=XO$KuQ!0MzO,5=ZO$NWQ!0MzO,59uO%!]Q!0MzO,5<kO%$hQ!0MzO,5<mO%&sQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%)UQ!0MxO7+&aO%)xQlO'#IfO%*VQ`O,5@cO%*_Q!fO,5@cOOQ!0Lf1G0P1G0PO%*iQ`O7+&jOOQ!0Lf7+&j7+&jO%*nQ?MtO,5:fO%[QlO7+&zO%*xQ?MtO,5:bO%+VQ?MtO,5:jO%+aQ?MtO,5:lO%+kQMhO'#IiO%+uQ`O,5@hOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%+}Q!jO,5<ZO!)[QlO,5<YOOQO-E<l-E<lOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%,YQ`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%,_Q!dO,59oOOOO-E<`-E<`OOQ!0Lh1G/X1G/XO%,fQ!0MxO7+'kOOQ!0Lh,5?^,5?^O%-YQMhO1G2fP%-aQ`O'#IrPOQ!0Lh-E<p-E<pO%-}QMjO,5?aOOQ!0Lh-E<s-E<sO%.pQMjO,5?cOOQ!0Lh-E<u-E<uO%.zQ!dO1G2wO%/RQ!dO'#CrO%/iQMhO'#KSO$$wQlO'#JvOOQ!0Lh1G2_1G2_O%/sQ`O'#IqO%0[Q`O,5@vO%0[Q`O,5@vO%0dQ`O,5@vO%0oQ`O,5@vOOQO1G2a1G2aO%0}QMjO1G2`O$+YQ`O'#K[O!,TQMhO1G2`O%1_Q(CWO'#IsO%1lQ`O,5@wO!&zQMhO,5@wO%1tQ!dO,5@wOOQ!0Lh1G2d1G2dO%4UQ!fO'#CiO%4`Q`O,5=POOQ!0Lb,5<},5<}O%4hQpO,5<}OOQ!0Lb,5=O,5=OOCwQ`O,5<}O%4sQpO,5<}OOQ!0Lb,5=R,5=RO$+YQ`O,5=VOOQO,5?`,5?`OOQO-E<r-E<rOOQ!0Lp1G2h1G2hO#$`QpO,5<}O$$wQlO,5=PO%5RQ`O,5=OO%5^QpO,5=OO!,TQMhO'#IuO%6WQMjO1G2sO!,TQMhO'#IwO%6yQMjO1G2uO%7TQMjO1G5qO%7_QMjO1G5qOOQO,5?e,5?eOOQO-E<w-E<wOOQO1G.{1G.{O!,TQMhO1G5qO!,TQMhO1G5qO!:]QpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%7lQ`O1G2ZO!,TQMhO1G2bO%7qQ!0MxO7+'mOOQ!0Lf7+'m7+'mO!$wQlO7+'mO%8eQ`O,5;`OOQ!0Lb,5?g,5?gOOQ!0Lb-E<y-E<yO%8jQ!dO'#K^O#(ZQ`O7+(eO4UQ!fO7+(eO$DfQ`O7+(eO%8tQ!0MvO'#CiO%9XQ!0MvO,5=SO%9lQ`O,5=SO%9tQ`O,5=SOOQ!0Lb1G5o1G5oOOQ[7+$a7+$aO!ByQ!0LrO7+$aO!CUQpO7+$aO!$wQlO7+&aO%9yQ`O'#JQO%:bQ`O,5APOOQO1G3h1G3hO9kQ`O,5APO%:bQ`O,5APO%:jQ`O,5APOOQO,5?m,5?mOOQO-E=P-E=POOQ!0Lf7+'T7+'TO%:oQ`O7+)QO9uQ!0LrO7+)QO9kQ`O7+)QO@zQ`O7+)QO%:tQ`O7+)QOOQ[7+)Q7+)QOOQ[7+(p7+(pO%:yQ!0MvO7+(mO!&zQMhO7+(mO!E^Q`O7+(nOOQ[7+(n7+(nO!&zQMhO7+(nO%;TQ`O'#KbO%;`Q`O,5=lOOQO,5?i,5?iOOQO-E<{-E<{OOQ[7+(s7+(sO%<rQpO'#HZOOQ[1G3`1G3`O!&zQMhO1G3`O%[QlO1G3`O%<yQ`O1G3`O%=UQMhO1G3`O9uQ!0LrO1G3bO$%dQ`O1G3bO9`Q`O1G3bO!CUQpO1G3bO!C^QMhO1G3bO%=dQ`O'#JPO%=xQ`O,5@}O%>QQpO,5@}OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>]Q`O7+$VO%[QlO1G6lO%[QlO1G6mO%>bQ!0LrO1G6lO%>lQlO1G3kO%>sQ`O1G3kO%>xQlO1G3kOOQ[7+)T7+)TO9uQ!0LrO7+)_O`QlO7+)aOOQ['#Kh'#KhOOQ['#JS'#JSO%?PQlO,5>`OOQ[,5>`,5>`O%[QlO'#HuO%?^Q`O'#HwOOQ[,5>f,5>fO9eQ`O,5>fOOQ[,5>h,5>hOOQ[7+)j7+)jOOQ[7+)p7+)pOOQ[7+)t7+)tOOQ[7+)v7+)vO%?cQpO1G5|O%?}Q?MtO1G0zO%@XQ`O1G0zOOQO1G/s1G/sO%@dQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?V,5?VOOQO-E<i-E<iO!CUQpO1G/sOOQO-E<e-E<eOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CUQpO7+&`OOQO7+%x7+%xO$AlQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@nQ!0LrO7+&XO!ByQ!0LrO7+%xO!CUQpO7+%xO%@yQ!0LrO7+&XO%AXQ!0MxO7++rO%[QlO7++rO%AiQ`O7++qO%AiQ`O7++qOOQO1G4s1G4sO9eQ`O1G4sO%AqQ`O1G4sOOQS7+%}7+%}O#(ZQ`O<<LPO4UQ!fO<<LPO%BPQ`O<<LPOOQ[<<LP<<LPO!&zQMhO<<LPO%[QlO<<LPO%BXQ`O<<LPO%BdQ!0MzO,5?aO%DoQ!0MzO,5?cO%FzQ!0MzO1G2`O%I]Q!0MzO1G2sO%KhQ!0MzO1G2uO%MsQ!fO,5?QO%[QlO,5?QOOQO-E<d-E<dO%M}Q`O1G5}OOQ!0Lf<<JU<<JUO%NVQ?MtO1G0uO&!^Q?MtO1G1PO&!eQ?MtO1G1PO&$fQ?MtO1G1PO&$mQ?MtO1G1PO&&nQ?MtO1G1PO&(oQ?MtO1G1PO&(vQ?MtO1G1PO&(}Q?MtO1G1PO&+OQ?MtO1G1PO&+VQ?MtO1G1PO&+^Q!0MxO<<JfO&-UQ?MtO1G1PO&.RQ?MvO1G1PO&/UQ?MvO'#JlO&1[Q?MtO1G1cO&1iQ?MtO1G0UO&1sQMjO,5?TOOQO-E<g-E<gO!)[QlO'#FqOOQO'#KZ'#KZOOQO1G1u1G1uO&1}Q`O1G1tO&2SQ?MtO,5?[OOOW7+'h7+'hOOOO1G/Z1G/ZO&2^Q!dO1G4xOOQ!0Lh7+(Q7+(QP!&zQMhO,5?^O!,TQMhO7+(cO&2eQ`O,5?]O9eQ`O,5?]O$+YQ`O,5?]OOQO-E<o-E<oO&2sQ`O1G6bO&2sQ`O1G6bO&2{Q`O1G6bO&3WQMjO7+'zO&3hQ!dO,5?_O&3rQ`O,5?_O!&zQMhO,5?_OOQO-E<q-E<qO&3wQ!dO1G6cO&4RQ`O1G6cO&4ZQ`O1G2kO!&zQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%4hQpO1G2iO!CUQpO1G2iOCwQ`O1G2iOOQ!0Lb1G2q1G2qO&4`QpO1G2iO&4nQ`O1G2kO$+YQ`O1G2jOCwQ`O1G2jO$$wQlO1G2kO&4vQ`O1G2jO&5jQMjO,5?aOOQ!0Lh-E<t-E<tO&6]QMjO,5?cOOQ!0Lh-E<v-E<vO!,TQMhO7++]O&6gQMjO7++]O&6qQMjO7++]OOQ!0Lh1G/c1G/cO&7OQ`O1G/cOOQ!0Lh7+'u7+'uO&7TQMjO7+'|O&7eQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&8XQ`O1G0zO!&zQMhO'#IzO&8^Q`O,5@xO&:`Q!fO<<LPO!&zQMhO1G2nO&:gQ!0LrO1G2nOOQ[<<G{<<G{O!ByQ!0LrO<<G{O&:xQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?l,5?lO&;lQ`O,5?lO&;qQ`O,5?lOOQO-E=O-E=OO&<PQ`O1G6kO&<PQ`O1G6kO9kQ`O1G6kO@zQ`O<<LlOOQ[<<Ll<<LlO&<XQ`O<<LlO9uQ!0LrO<<LlO9kQ`O<<LlOOQ[<<LX<<LXO%:yQ!0MvO<<LXOOQ[<<LY<<LYO!E^Q`O<<LYO&<^QpO'#I|O&<iQ`O,5@|O!)[QlO,5@|OOQ[1G3W1G3WOOQO'#JO'#JOO9uQ!0LrO'#JOO&<qQpO,5=uOOQ[,5=u,5=uO&<xQpO'#EgO&=PQpO'#GeO&=UQ`O7+(zO&=ZQ`O7+(zOOQ[7+(z7+(zO!&zQMhO7+(zO%[QlO7+(zO&=cQ`O7+(zOOQ[7+(|7+(|O9uQ!0LrO7+(|O$%dQ`O7+(|O9`Q`O7+(|O!CUQpO7+(|O&=nQ`O,5?kOOQO-E<}-E<}OOQO'#H^'#H^O&=yQ`O1G6iO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>RQ`O7+,WO&>WQ`O7+,XO%[QlO7+,WO%[QlO7+,XOOQ[7+)V7+)VO&>]Q`O7+)VO&>bQlO7+)VO&>iQ`O7+)VOOQ[<<Ly<<LyOOQ[<<L{<<L{OOQ[-E=Q-E=QOOQ[1G3z1G3zO&>nQ`O,5>aOOQ[,5>c,5>cO&>sQ`O1G4QO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&>xQ?MtO1G6ZO?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AlQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!ByQ!0LrO<<IdO&?SQ!0LrO<<IsO&?_Q!0MxO<= ^O&?oQ`O<= ]OOQO7+*_7+*_O9eQ`O7+*_OOQ[ANAkANAkO&?wQ!fOANAkO!&zQMhOANAkO#(ZQ`OANAkO4UQ!fOANAkO&@OQ`OANAkO%[QlOANAkO&@WQ!0MzO7+'zO&BiQ!0MzO,5?aO&DtQ!0MzO,5?cO&GPQ!0MzO7+'|O&IbQ!fO1G4lO&IlQ?MtO7+&aO&KpQ?MvO,5=XO&MwQ?MvO,5=ZO&NXQ?MvO,5=XO&NiQ?MvO,5=ZO&NyQ?MvO,59uO'#PQ?MvO,5<kO'%SQ?MvO,5<mO''hQ?MvO,5<{O')^Q?MtO7+'kO')kQ?MtO7+'mO')xQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*d7+*dO')}QMjO<<K}OOQO1G4w1G4wO'*UQ`O1G4wO'*aQ`O1G4wO'*oQ`O7++|O'*oQ`O7++|O!&zQMhO1G4yO'*wQ!dO1G4yO'+RQ`O7++}O'+ZQ`O7+(VO'+fQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!CUQpO7+(TOCwQ`O7+(TO'+pQ`O7+(VO!&zQMhO7+(VO$+YQ`O7+(UO'+uQ`O7+(VOCwQ`O7+(UO'+}QMjO<<NwO!,TQMhO<<NwOOQ!0Lh7+$}7+$}O',XQ!dO,5?fOOQO-E<x-E<xO',cQ!0MvO7+(YO!&zQMhO7+(YOOQ[AN=gAN=gO9kQ`O1G5WOOQO1G5W1G5WO',sQ`O1G5WO',xQ`O7+,VO',xQ`O7+,VO9uQ!0LrOANBWO@zQ`OANBWOOQ[ANBWANBWO'-QQ`OANBWOOQ[ANAsANAsOOQ[ANAtANAtO'-VQ`O,5?hOOQO-E<z-E<zO'-bQ?MtO1G6hOOQO,5?j,5?jOOQO-E<|-E<|OOQ[1G3a1G3aO'-lQ`O,5=POOQ[<<Lf<<LfO!&zQMhO<<LfO&=UQ`O<<LfO'-qQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9uQ!0LrO<<LhO$%dQ`O<<LhO9`Q`O<<LhO'-yQpO1G5VO'.UQ`O7+,TOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= r<= rOOQ[<= s<= sO'.^Q`O<= rO'.cQ`O<= sOOQ[<<Lq<<LqO'.hQ`O<<LqO'.mQlO<<LqOOQ[1G3{1G3{O?YQ`O7+)lO'.tQ`O<<JQO'/PQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AlQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<My<<MyOOQ[G27VG27VO!&zQMhOG27VO#(ZQ`OG27VO'/ZQ!fOG27VO4UQ!fOG27VO'/bQ`OG27VO'/jQ?MtO<<JfO'/wQ?MvO1G2`O'1mQ?MvO,5?aO'3pQ?MvO,5?cO'5sQ?MvO1G2sO'7vQ?MvO1G2uO'9yQ?MtO<<KXO':WQ?MtO<<I{OOQO1G1w1G1wO!,TQMhOANAiOOQO7+*c7+*cO':eQ`O7+*cO':pQ`O<= hO':xQ!dO7+*eOOQ!0Lb<<Kq<<KqO$+YQ`O<<KqOCwQ`O<<KqO';SQ`O<<KqO!&zQMhO<<KqOOQ!0Lb<<Ko<<KoO!CUQpO<<KoO';_Q!dO<<KqOOQ!0Lb<<Kp<<KpO';iQ`O<<KqO!&zQMhO<<KqO$+YQ`O<<KpO';nQMjOANDcO';xQ!0MvO<<KtOOQO7+*r7+*rO9kQ`O7+*rO'<YQ`O<= qOOQ[G27rG27rO9uQ!0LrOG27rO@zQ`OG27rO!)[QlO1G5SO'<bQ`O7+,SO'<jQ`O1G2kO&=UQ`OANBQOOQ[ANBQANBQO!&zQMhOANBQO'<oQ`OANBQOOQ[ANBSANBSO9uQ!0LrOANBSO$%dQ`OANBSOOQO'#H_'#H_OOQO7+*q7+*qOOQ[G22wG22wOOQ[ANE^ANE^OOQ[ANE_ANE_OOQ[ANB]ANB]O'<wQ`OANB]OOQ[<<MW<<MWO!)[QlOAN?lOOQOG24yG24yO$AlQ!0MxOG24yO#(ZQ`OLD,qOOQ[LD,qLD,qO!&zQMhOLD,qO'<|Q!fOLD,qO'=TQ?MvO7+'zO'>yQ?MvO,5?aO'@|Q?MvO,5?cO'CPQ?MvO7+'|O'DuQMjOG27TOOQO<<M}<<M}OOQ!0LbANA]ANA]O$+YQ`OANA]OCwQ`OANA]O'EVQ!dOANA]OOQ!0LbANAZANAZO'E^Q`OANA]O!&zQMhOANA]O'EiQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N^<<N^OOQ[LD-^LD-^O9uQ!0LrOLD-^O'EsQ?MtO7+*nOOQO'#Gf'#GfOOQ[G27lG27lO&=UQ`OG27lO!&zQMhOG27lOOQ[G27nG27nO9uQ!0LrOG27nOOQ[G27wG27wO'E}Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#(ZQ`O!$(!]O!&zQMhO!$(!]O'FXQ!0MzOG27TOOQ!0LbG26wG26wO$+YQ`OG26wO'HjQ`OG26wOCwQ`OG26wO'HuQ!dOG26wO!&zQMhOG26wOOQ[!$(!x!$(!xOOQ[LD-WLD-WO&=UQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#(ZQ`O!)9EwOOQ!0LbLD,cLD,cO$+YQ`OLD,cOCwQ`OLD,cO'H|Q`OLD,cO'IXQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'I`Q?MvOG27TOOQ!0Lb!$( }!$( }O$+YQ`O!$( }OCwQ`O!$( }O'KUQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$+YQ`O!)9EiOCwQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$+YQ`O!.K;TOOQ!0Lb!4/0o!4/0oO!)[QlO'#DzO1PQ`O'#EXO'KaQ!fO'#JrO'KhQ!L^O'#DvO'KoQlO'#EOO'KvQ!fO'#CiO'N^Q!fO'#CiO!)[QlO'#EQO'NnQlO,5;ZO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO'#IpO(!qQ`O,5<iO!)[QlO,5;eO(!yQMhO,5;eO($dQMhO,5;eO!)[QlO,5;wO!&zQMhO'#GmO(!yQMhO'#GmO!&zQMhO'#GoO(!yQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GPO(!yQMhO'#GPO!&zQMhO'#GRO(!yQMhO'#GRO!&zQMhO'#GaO(!yQMhO'#GaO!)[QlO,5:jO($kQpO'#D_O($uQpO'#JvO!)[QlO,5@oO'NnQlO1G0uO(%PQ?MtO'#CiO!)[QlO1G2PO!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO(%ZQ!dO'#CrO!&zQMhO,5<tO(!yQMhO,5<tO'NnQlO1G2RO!)[QlO7+&zO!&zQMhO1G2`O(!yQMhO1G2`O!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO!&zQMhO1G2bO(!yQMhO1G2bO'NnQlO7+'mO'NnQlO7+&aO!&zQMhOANAiO(!yQMhOANAiO(%nQ`O'#EoO(%sQ`O'#EoO(%{Q`O'#F]O(&QQ`O'#EyO(&VQ`O'#KTO(&bQ`O'#KRO(&mQ`O,5;ZO(&rQMjO,5<eO(&yQ`O'#GYO('OQ`O'#GYO('TQ`O,5<eO(']Q`O,5<gO('eQ`O,5;ZO('mQ?MtO1G1`O('tQ`O,5<tO('yQ`O,5<tO((OQ`O,5<vO((TQ`O,5<vO((YQ`O1G2RO((_Q`O1G0uO((dQMjO<<K}O((kQMjO<<K}O((rQMhO'#F|O9`Q`O'#F{OAuQ`O'#EnO!)[QlO,5;tO!3oQ`O'#GYO!3oQ`O'#GYO!3oQ`O'#G[O!3oQ`O'#G[O!,TQMhO7+(cO!,TQMhO7+(cO%.zQ!dO1G2wO%.zQ!dO1G2wO!&zQMhO,5=]O!&zQMhO,5=]",
        stateData: "()x~O'|OS'}OSTOS(ORQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&W!WO&^!XO&`!YO&b!ZO&d![O&g!]O&m!^O&s!_O&u!`O&w!aO&y!bO&{!cO(TSO(VTO(YUO(aVO(o[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O(O!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'z]X(a]X(r]X(y]X(z]X~O!g%RX~P(qO_!}O(V#PO(W!}O(X#PO~O_#QO(X#PO(Y#PO(Z#QO~Ox#SO!U#TO(b#TO(c#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T<ZO(VTO(YUO(aVO(o[O~O![#ZO!]#WO!Y(hP!Y(vP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(VTO(YUO(aVO(o[O~Op#mO![#iO!|]O#i#lO#j#iO(T<[O!k(sP~P.iO!l#oO(T#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa(fX'z(fX'w(fX!k(fX!Y(fX!_(fX%i(fX!g(fX~P1qO#S$dO#`$eO$Q$eOP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX!_(gX%i(gX~Oa(gX'z(gX'w(gX!Y(gX!k(gXv(gX!g(gX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T$sO(VTO(YUO(a$uO(y$}O(z%POg(^P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(T%gO~O!g%mO~Oa%nO'z%nO~O!Q%rO~P%[O(U!lO~P%[O%n%vO~P%[Oh%VO!l%eO(T%gO(U!lO~Oe%}O!l%eO(T%gO~Oj$RO~O!_&PO(T%gO(U!lO(VTO(YUO`)WP~O!Q&SO!l&RO%j&VO&T&WO~P;SO!x#sO~O%s&YO!S)SX!_)SX(T)SX~O(T&ZO~Ol!PO!u&`O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&eOe&dO!x&bO%h&cO%{&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&kO#`&nO%j&iO(U!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'x&{O'z%nO~Oa%nO'x'OO'z%nO~Oa%nO'x'QO'z%nO~O'w]X!Y]Xv]X!k]X&[]X!_]X%i]X!g]X~P(qO!b'_O!c'WO!d'WO(U!lO(VTO(YUO~Os'UO!S'TO!['XO(e'SO!^(iP!^(xP~P@nOn'bO!_'`O(T%gO~Oe'gO!l%eO(T%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<VO#T!pO#U!pO#W!pO#X!pO(U!lO(VTO(YUO(e!mO(o!sO~O!b'mO!c'lO!d'lO#V!pO#['nO#]'nO~PBYOa%nOh%VO!g#vO!l%eO'z%nO(r'pO~O!p'tO#`'rO~PChOs!nO!S!oO(VTO(YUO(e!mO(o!sO~O!_XOs(mX!S(mX!b(mX!c(mX!d(mX!|(mX#T(mX#U(mX#V(mX#W(mX#X(mX#[(mX#](mX(U(mX(V(mX(Y(mX(e(mX(o(mX~O!c'lO!d'lO(U!lO~PDWO(P'xO(Q'xO(R'zO~O_!}O(V'|O(W!}O(X'|O~O_#QO(X'|O(Y'|O(Z#QO~Ov(OO~P%[Ox#SO!U#TO(b#TO(c(RO~O![(TO!Y'WX!Y'^X!]'WX!]'^X~P+}O!](VO!Y(hX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](VO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~O!Y(hX~PHRO!Y([O~O!Y(uX!](uX!g(uX!k(uX(r(uX~O#`(uX#k#dX!^(uX~PJUO#`(]O!Y(wX!](wX~O!](^O!Y(vX~O!Y(aO~O#`$eO~PJUO!^(bO~P`OR#zO!Q#yO!S#{O!l#xO(aVOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(r!na(y!na(z!na~Oa!na'z!na'w!na!Y!na!k!nav!na!_!na%i!na!g!na~PKlO!k(cO~O!g#vO#`(dO(r'pO!](tXa(tX'z(tX~O!k(tX~PNXO!S%hO!_%iO!|]O#i(iO#j(hO(T%gO~O!](jO!k(sX~O!k(lO~O!S%hO!_%iO#j(hO(T%gO~OP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~O!g#vO!k(gX~P! uOR(nO!Q(mO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(T!{a~P!#vO!x(rO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~O#k(xO~O![(zO!k(kP~P%[O(e(|O(o[O~O!S)OO!l#xO(e(|O(o[O~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]$_Oa$qa'z$qa'w$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)dO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Og(pP~P!,TO!Q)iO!g)hO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)hO!_({X$Z({X$]({X$_({X$f({X~O!Q)iO~P!.^O!Q)iO!_({X$Z({X$]({X$_({X$f({X~O!_)kO$Z)oO$])jO$_)jO$f)pO~O![)sO~P!)[O$]$hO$_$gO$f)wO~On$zX!Q$zX#S$zX'y$zX(y$zX(z$zX~OgmXg$zXnmX!]mX#`mX~P!0SOx)yO(b)zO(c)|O~On*VO!Q*OO'y*PO(y$}O(z%PO~Og)}O~P!1WOg*WO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S*YO!_*ZO!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op*`O![*^O(T*XO!k)OP~P!1uO#k*aO~O!l*bO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T*dO(VTO(YUO(a$uO(y$}O(z%PO~O![*gO!Y)PP~P!3tOr*sOs!nO!S*iO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO(e!mO~O!^*pO~P!5iO#S$dOn(`X!Q(`X'y(`X(y(`X(z(`X!](`X#`(`X~Og(`X$O(`X~P!6kOn*xO#`*wOg(_X!](_X~O!]*yOg(^X~Oj%dOk%dOl%dO(T&ZOg(^P~Os*|O~Og)}O(T&ZO~O!l+SO~O(T(vO~Op+WO!S%hO![#iO!_%iO!|]O#i#lO#j#iO(T%gO!k(sP~O!g#vO#k+XO~O!S%hO![+ZO!](^O!_%iO(T%gO!Y(vP~Os'[O!S+]O![+[O(VTO(YUO(e(|O~O!^(xP~P!9|O!]+^Oa)TX'z)TX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa!ja!]!ja'z!ja'w!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:tOR#zO!Q#yO!S#{O!l#xO(aVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(r!ra(y!ra(z!ra~Oa!ra'z!ra'w!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!=[OR#zO!Q#yO!S#{O!l#xO(aVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(r!ta(y!ta(z!ta~Oa!ta'z!ta'w!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?rOh%VOn+gO!_'`O%i+fO~O!g+iOa(]X!_(]X'z(]X!](]X~Oa%nO!_XO'z%nO~Oh%VO!l%eO~Oh%VO!l%eO(T%gO~O!g#vO#k(xO~Ob+tO%j+uO(T+qO(VTO(YUO!^)XP~O!]+vO`)WX~O[+zO~O`+{O~O!_&PO(T%gO(U!lO`)WP~O%j,OO~P;SOh%VO#`,SO~Oh%VOn,VO!_$|O~O!_,XO~O!Q,ZO!_XO~O%n%vO~O!x,`O~Oe,eO~Ob,fO(T#nO(VTO(YUO!^)VP~Oe%}O~O%j!QO(T&ZO~P=gO[,kO`,jO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(VTO(YUO(aVO(o[O~O!_!eO!u!gO$W!kO(T!dO~P!FyO`,jOa%nO'z%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa,pOl!OO!uwO%l!OO%m!OO%n!OO~P!IcO!l&oO~O&^,vO~O!_,xO~O&o,zO&q,{OP&laQ&laS&laY&laa&lad&lae&lal&lap&lar&las&lat&laz&la|&la!O&la!S&la!W&la!X&la!_&la!i&la!l&la!o&la!p&la!q&la!s&la!u&la!x&la!|&la$W&la$n&la%h&la%j&la%l&la%m&la%n&la%q&la%s&la%v&la%w&la%y&la&W&la&^&la&`&la&b&la&d&la&g&la&m&la&s&la&u&la&w&la&y&la&{&la'w&la(T&la(V&la(Y&la(a&la(o&la!^&la&e&lab&la&j&la~O(T-QO~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P#!iO!g-VO#`-UOh(jX!]#hX!^#hX!g(jX!l(jX~O!](jX!^(jX~P##[Oh%VO!g-XO!l%eO!]!aX!^!aX~Os!nO!S!oO(VTO(YUO(e!mO~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(VTO(YUO(aVO(o[O~O(T=QO~P#$qO!]-]O!^(iX~O!^-_O~O!g-VO#`-UO!]#hX!^#hX~O!]-`O!^(xX~O!^-bO~O!c-cO!d-cO(U!lO~P#$`O!^-fO~P'_On-iO!_'`O~O!Y-nO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(U!{a(V!{a(Y!{a(e!{a(o!{a~P!#vO!p-sO#`-qO~PChO!c-uO!d-uO(U!lO~PDWOa%nO#`-qO'z%nO~Oa%nO!g#vO#`-qO'z%nO~Oa%nO!g#vO!p-sO#`-qO'z%nO(r'pO~O(P'xO(Q'xO(R-zO~Ov-{O~O!Y'Wa!]'Wa~P!:tO![.PO!Y'WX!]'WX~P%[O!](VO!Y(ha~O!Y(ha~PHRO!](^O!Y(va~O!S%hO![.TO!_%iO(T%gO!Y'^X!]'^X~O#`.VO!](ta!k(taa(ta'z(ta~O!g#vO~P#,wO!](jO!k(sa~O!S%hO!_%iO#j.ZO(T%gO~Op.`O!S%hO![.]O!_%iO!|]O#i._O#j.]O(T%gO!]'aX!k'aX~OR.dO!l#xO~Oh%VOn.gO!_'`O%i.fO~Oa#ci!]#ci'z#ci'w#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:tOn>]O!Q*OO'y*PO(y$}O(z%PO~O#k#_aa#_a#`#_a'z#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#k(`XP(`XR(`X[(`Xa(`Xj(`Xr(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X'z(`X(a(`X(r(`X!k(`X!Y(`X'w(`Xv(`X!_(`X%i(`X!g(`X~P!6kO!].tO!k(kX~P!:tO!k.wO~O!Y.yO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#3cO#n$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#6QO#r$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(aVOa#mi!]#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(aVO(z#}Oa#mi!]#mi#z#mi#{#mi'z#mi(r#mi(y#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#;VO#x#mi~P#;VO#v$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(aVO(y#|O(z#}Oa#mi!]#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#={O#z$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X!]]X!^]X~O$O]X~P#@jOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO#z<gO#{<hO(aVO(r$YO(y#|O(z#}O~O$O.{O~P#BwO#S$dO#`<nO$Q<nO$O(gX!^(gX~P! uOa'da!]'da'z'da'w'da!k'da!Y'dav'da!_'da%i'da!g'da~P!:tO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO(y#mi(z#mi~P#EyOn>]O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P#EyO!]/POg(pX~P!1WOg/RO~Oa$Pi!]$Pi'z$Pi'w$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:tO$]/SO$_/SO~O$]/TO$_/TO~O!g)hO#`/UO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/VO~O!_)kO$Z/XO$])jO$_)jO$f/YO~O!]<iO!^(fX~P#BwO!^/ZO~O!g)hO$f({X~O$f/]O~Ov/^O~P!&zOx)yO(b)zO(c/aO~O!S/dO~O(y$}On%aa!Q%aa'y%aa(z%aa!]%aa#`%aa~Og%aa$O%aa~P#L{O(z%POn%ca!Q%ca'y%ca(y%ca!]%ca#`%ca~Og%ca$O%ca~P#MnO!]fX!gfX!kfX!k$zX(rfX~P!0SOp%WO![/mO!](^O(T/lO!Y(vP!Y)PP~P!1uOr*sO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO~Os<}O!S/nO![+[O!^*pO(e<|O!^(xP~P$ [O!k/oO~P#/sO!]/pO!g#vO(r'pO!k)OX~O!k/uO~OnoX!QoX'yoX(yoX(zoX~O!g#vO!koX~P$#OOp/wO!S%hO![*^O!_%iO(T%gO!k)OP~O#k/xO~O!Y$zX!]$zX!g%RX~P!0SO!]/yO!Y)PX~P#/sO!g/{O~O!Y/}O~OpkO(T0OO~P.iOh%VOr0TO!g#vO!l%eO(r'pO~O!g+iO~Oa%nO!]0XO'z%nO~O!^0ZO~P!5iO!c0[O!d0[O(U!lO~P#$`Os!nO!S0]O(VTO(YUO(e!mO~O#[0_O~Og%aa!]%aa#`%aa$O%aa~P!1WOg%ca!]%ca#`%ca$O%ca~P!1WOj%dOk%dOl%dO(T&ZOg'mX!]'mX~O!]*yOg(^a~Og0hO~On0jO#`0iOg(_a!](_a~OR0kO!Q0kO!S0lO#S$dOn}a'y}a(y}a(z}a!]}a#`}a~Og}a$O}a~P$(cO!Q*OO'y*POn$sa(y$sa(z$sa!]$sa#`$sa~Og$sa$O$sa~P$)_O!Q*OO'y*POn$ua(y$ua(z$ua!]$ua#`$ua~Og$ua$O$ua~P$*QO#k0oO~Og%Ta!]%Ta#`%Ta$O%Ta~P!1WO!g#vO~O#k0rO~O!]+^Oa)Ta'z)Ta~OR#zO!Q#yO!S#{O!l#xO(aVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(r!ri(y!ri(z!ri~Oa!ri'z!ri'w!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$+oOh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op0{O%]0|O(T0zO~P$.VO!g+iOa(]a!_(]a'z(]a!](]a~O#k1SO~O[]X!]fX!^fX~O!]1TO!^)XX~O!^1VO~O[1WO~Ob1YO(T+qO(VTO(YUO~O!_&PO(T%gO`'uX!]'uX~O!]+vO`)Wa~O!k1]O~P!:tO[1`O~O`1aO~O#`1fO~On1iO!_$|O~O(e(|O!^)UP~Oh%VOn1rO!_1oO%i1qO~O[1|O!]1zO!^)VX~O!^1}O~O`2POa%nO'z%nO~O(T#nO(VTO(YUO~O#S$dO#`$eO$Q$eOP(gXR(gX[(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~Oj2SO&[2TOa(gX~P$3pOj2SO#`$eO&[2TO~Oa2VO~P%[Oa2XO~O&e2[OP&ciQ&ciS&ciY&cia&cid&cie&cil&cip&cir&cis&cit&ciz&ci|&ci!O&ci!S&ci!W&ci!X&ci!_&ci!i&ci!l&ci!o&ci!p&ci!q&ci!s&ci!u&ci!x&ci!|&ci$W&ci$n&ci%h&ci%j&ci%l&ci%m&ci%n&ci%q&ci%s&ci%v&ci%w&ci%y&ci&W&ci&^&ci&`&ci&b&ci&d&ci&g&ci&m&ci&s&ci&u&ci&w&ci&y&ci&{&ci'w&ci(T&ci(V&ci(Y&ci(a&ci(o&ci!^&cib&ci&j&ci~Ob2bO!^2`O&j2aO~P`O!_XO!l2dO~O&q,{OP&liQ&liS&liY&lia&lid&lie&lil&lip&lir&lis&lit&liz&li|&li!O&li!S&li!W&li!X&li!_&li!i&li!l&li!o&li!p&li!q&li!s&li!u&li!x&li!|&li$W&li$n&li%h&li%j&li%l&li%m&li%n&li%q&li%s&li%v&li%w&li%y&li&W&li&^&li&`&li&b&li&d&li&g&li&m&li&s&li&u&li&w&li&y&li&{&li'w&li(T&li(V&li(Y&li(a&li(o&li!^&li&e&lib&li&j&li~O!Y2jO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2pO(e!mO!]'XX!^'XX~P@nO!]-]O!^(ia~O!]'_X!^'_X~P!9|O!]-`O!^(xa~O!^2wO~P'_Oa%nO#`3QO'z%nO~Oa%nO!g#vO#`3QO'z%nO~Oa%nO!g#vO!p3UO#`3QO'z%nO(r'pO~Oa%nO'z%nO~P!:tO!]$_Ov$qa~O!Y'Wi!]'Wi~P!:tO!](VO!Y(hi~O!](^O!Y(vi~O!Y(wi!](wi~P!:tO!](ti!k(tia(ti'z(ti~P!:tO#`3WO!](ti!k(tia(ti'z(ti~O!](jO!k(si~O!S%hO!_%iO!|]O#i3]O#j3[O(T%gO~O!S%hO!_%iO#j3[O(T%gO~On3dO!_'`O%i3cO~Oh%VOn3dO!_'`O%i3cO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aav%aa!_%aa%i%aa!g%aa~P#L{O#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%cav%ca!_%ca%i%ca!g%ca~P#MnO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/sO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/sO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'z}a(a}a(r}a!k}a!Y}a'w}av}a!_}a%i}a!g}a~P$(cO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'z$sa(a$sa(r$sa!k$sa!Y$sa'w$sav$sa!_$sa%i$sa!g$sa~P$)_O#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'z$ua(a$ua(r$ua!k$ua!Y$ua'w$uav$ua!_$ua%i$ua!g$ua~P$*QO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'z%Ta(a%Ta(r%Ta!k%Ta!Y%Ta'w%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/sOa#cq!]#cq'z#cq'w#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:tO![3lO!]'YX!k'YX~P%[O!].tO!k(ka~O!].tO!k(ka~P!:tO!Y3oO~O$O!na!^!na~PKlO$O!ja!]!ja!^!ja~P#BwO$O!ra!^!ra~P!=[O$O!ta!^!ta~P!?rOg']X!]']X~P!,TO!]/POg(pa~OSfO!_4TO$d4UO~O!^4YO~Ov4ZO~P#/sOa$mq!]$mq'z$mq'w$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:tO!Y4]O~P!&zO!S4^O~O!Q*OO'y*PO(z%POn'ia(y'ia!]'ia#`'ia~Og'ia$O'ia~P%-fO!Q*OO'y*POn'ka(y'ka(z'ka!]'ka#`'ka~Og'ka$O'ka~P%.XO(r$YO~P#/sO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!0SOp%WO(T=WO~P!1uOp4bO!S%hO![4aO!_%iO(T%gO!]'eX!k'eX~O!]/pO!k)Oa~O!]/pO!g#vO!k)Oa~O!]/pO!g#vO(r'pO!k)Oa~Og$|i!]$|i#`$|i$O$|i~P!1WO![4jO!Y'gX!]'gX~P!3tO!]/yO!Y)Pa~O!]/yO!Y)Pa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~Oj%YX!g%YX~P%2OOj4oO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4tO!l%eO(r'pO~Or4yO!g#vO(r'pO~Os!nO!S4zO(VTO(YUO(e!mO~O(y$}On%ai!Q%ai'y%ai(z%ai!]%ai#`%ai~Og%ai$O%ai~P%5oO(z%POn%ci!Q%ci'y%ci(y%ci!]%ci#`%ci~Og%ci$O%ci~P%6bOg(_i!](_i~P!1WO#`5QOg(_i!](_i~P!1WO!k5VO~Oa$oq!]$oq'z$oq'w$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:tO!Y5ZO~O!]5[O!_)QX~P#/sOa$zX!_$zX%^]X'z$zX!]$zX~P!0SO%^5_OaoX!_oX'zoX!]oX~P$#OOp5`O(T#nO~O%^5_O~Ob5fO%j5gO(T+qO(VTO(YUO!]'tX!^'tX~O!]1TO!^)Xa~O[5kO~O`5lO~O[5pO~Oa%nO'z%nO~P#/sO!]5uO#`5wO!^)UX~O!^5xO~Or6OOs!nO!S*iO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!pO#W!pO#X!pO#[5}O#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O!^5|O~P%;eOn6TO!_1oO%i6SO~Oh%VOn6TO!_1oO%i6SO~Ob6[O(T#nO(VTO(YUO!]'sX!^'sX~O!]1zO!^)Va~O(VTO(YUO(e6^O~O`6bO~Oj6eO&[6fO~PNXO!k6gO~P%[Oa6iO~Oa6iO~P%[Ob2bO!^6nO&j2aO~P`O!g6pO~O!g6rOh(ji!](ji!^(ji!g(ji!l(jir(ji(r(ji~O!]#hi!^#hi~P#BwO#`6sO!]#hi!^#hi~O!]!ai!^!ai~P#BwOa%nO#`6|O'z%nO~Oa%nO!g#vO#`6|O'z%nO~O!](tq!k(tqa(tq'z(tq~P!:tO!](jO!k(sq~O!S%hO!_%iO#j7TO(T%gO~O!_'`O%i7WO~On7[O!_'`O%i7WO~O#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'z'ia(a'ia(r'ia!k'ia!Y'ia'w'iav'ia!_'ia%i'ia!g'ia~P%-fO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'z'ka(a'ka(r'ka!k'ka!Y'ka'w'kav'ka!_'ka%i'ka!g'ka~P%.XO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'z$|i(a$|i(r$|i!k$|i!Y$|i'w$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/sO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'z%ai(a%ai(r%ai!k%ai!Y%ai'w%aiv%ai!_%ai%i%ai!g%ai~P%5oO#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'z%ci(a%ci(r%ci!k%ci!Y%ci'w%civ%ci!_%ci%i%ci!g%ci~P%6bO!]'Ya!k'Ya~P!:tO!].tO!k(ki~O$O#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#n#mi~P%NdO#n<_O~P%NdOP$[OR#zOr<kO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#r#mi~P&!lO#r<aO~P&!lOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO(aVO#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#v#mi~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO(aVO(z#}O#z#mi#{#mi$O#mi(r#mi(y#mi!]#mi!^#mi~O#x<eO~P&&uO#x#mi~P&&uO#v<cO~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO(aVO(y#|O(z#}O#{#mi$O#mi(r#mi!]#mi!^#mi~O#z#mi~P&)UO#z<gO~P&)UOa#|y!]#|y'z#|y'w#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:tO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO(y#mi(z#mi~P&,QOn>^O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P&,QO#S$dOP(`XR(`X[(`Xj(`Xn(`Xr(`X!Q(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X$O(`X'y(`X(a(`X(r(`X(y(`X(z(`X!](`X!^(`X~O$O$Pi!]$Pi!^$Pi~P#BwO$O!ri!^!ri~P$+oOg']a!]']a~P!1WO!^7nO~O!]'da!^'da~P#BwO!Y7oO~P#/sO!g#vO(r'pO!]'ea!k'ea~O!]/pO!k)Oi~O!]/pO!g#vO!k)Oi~Og$|q!]$|q#`$|q$O$|q~P!1WO!Y'ga!]'ga~P#/sO!g7vO~O!]/yO!Y)Pi~P#/sO!]/yO!Y)Pi~O!Y7yO~Oh%VOr8OO!l%eO(r'pO~Oj8QO!g#vO~Or8TO!g#vO(r'pO~O!Q*OO'y*PO(z%POn'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P&5RO!Q*OO'y*POn'la(y'la(z'la!]'la#`'la~Og'la$O'la~P&5tOg(_q!](_q~P!1WO#`8VOg(_q!](_q~P!1WO!Y8WO~Og%Oq!]%Oq#`%Oq$O%Oq~P!1WOa$oy!]$oy'z$oy'w$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:tO!g6rO~O!]5[O!_)Qa~O!_'`OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(a$Ta(r$Ta(y$Ta(z$Ta~O%i7WO~P&8fO%^8[Oa%[i!_%[i'z%[i!]%[i~Oa#cy!]#cy'z#cy'w#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:tO[8^O~Ob8`O(T+qO(VTO(YUO~O!]1TO!^)Xi~O`8dO~O(e(|O!]'pX!^'pX~O!]5uO!^)Ua~O!^8nO~P%;eO(o!sO~P$&YO#[8oO~O!_1oO~O!_1oO%i8qO~On8tO!_1oO%i8qO~O[8yO!]'sa!^'sa~O!]1zO!^)Vi~O!k8}O~O!k9OO~O!k9RO~O!k9RO~P%[Oa9TO~O!g9UO~O!k9VO~O!](wi!^(wi~P#BwOa%nO#`9_O'z%nO~O!](ty!k(tya(ty'z(ty~P!:tO!](jO!k(sy~O%i9bO~P&8fO!_'`O%i9bO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'z$|q(a$|q(r$|q!k$|q!Y$|q'w$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/sO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'z'ja(a'ja(r'ja!k'ja!Y'ja'w'jav'ja!_'ja%i'ja!g'ja~P&5RO#k'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la'z'la(a'la(r'la!k'la!Y'la'w'lav'la!_'la%i'la!g'la~P&5tO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'z%Oq(a%Oq(r%Oq!k%Oq!Y%Oq'w%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/sO!]'Yi!k'Yi~P!:tO$O#cq!]#cq!^#cq~P#BwO(y$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(a%aa(r%aa!]%aa!^%aa~On%aa!Q%aa'y%aa(z%aa~P&IyO(z%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(a%ca(r%ca!]%ca!^%ca~On%ca!Q%ca'y%ca(y%ca~P&LQOn>^O!Q*OO'y*PO(z%PO~P&IyOn>^O!Q*OO'y*PO(y$}O~P&LQOR0kO!Q0kO!S0lO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'y}a(a}a(r}a(y}a(z}a!]}a!^}a~O!Q*OO'y*POP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(a$sa(r$sa(y$sa(z$sa!]$sa!^$sa~O!Q*OO'y*POP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(a$ua(r$ua(y$ua(z$ua!]$ua!^$ua~On>^O!Q*OO'y*PO(y$}O(z%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(a%Ta(r%Ta!]%Ta!^%Ta~P''VO$O$mq!]$mq!^$mq~P#BwO$O$oq!]$oq!^$oq~P#BwO!^9oO~O$O9pO~P!1WO!g#vO!]'ei!k'ei~O!g#vO(r'pO!]'ei!k'ei~O!]/pO!k)Oq~O!Y'gi!]'gi~P#/sO!]/yO!Y)Pq~Or9wO!g#vO(r'pO~O[9yO!Y9xO~P#/sO!Y9xO~Oj:PO!g#vO~Og(_y!](_y~P!1WO!]'na!_'na~P#/sOa%[q!_%[q'z%[q!]%[q~P#/sO[:UO~O!]1TO!^)Xq~O`:YO~O#`:ZO!]'pa!^'pa~O!]5uO!^)Ui~P#BwO!S:]O~O!_1oO%i:`O~O(VTO(YUO(e:eO~O!]1zO!^)Vq~O!k:hO~O!k:iO~O!k:jO~O!k:jO~P%[O#`:mO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%i:rO~P&8fO!_'`O%i:rO~O$O#|y!]#|y!^#|y~P#BwOP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(a$|i(r$|i!]$|i!^$|i~P''VO!Q*OO'y*PO(z%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(a'ia(r'ia(y'ia!]'ia!^'ia~O!Q*OO'y*POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(a'ka(r'ka(y'ka(z'ka!]'ka!^'ka~O(y$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'y%ai(a%ai(r%ai(z%ai!]%ai!^%ai~O(z%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'y%ci(a%ci(r%ci(y%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#BwO$O#cy!]#cy!^#cy~P#BwO!g#vO!]'eq!k'eq~O!]/pO!k)Oy~O!Y'gq!]'gq~P#/sOr:|O!g#vO(r'pO~O[;QO!Y;PO~P#/sO!Y;PO~Og(_!R!](_!R~P!1WOa%[y!_%[y'z%[y!]%[y~P#/sO!]1TO!^)Xy~O!]5uO!^)Uq~O(T;XO~O!_1oO%i;[O~O!k;_O~O%i;dO~P&8fOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(a$|q(r$|q!]$|q!^$|q~P''VO!Q*OO'y*PO(z%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(a'ja(r'ja(y'ja!]'ja!^'ja~O!Q*OO'y*POP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la$O'la(a'la(r'la(y'la(z'la!]'la!^'la~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(a%Oq(r%Oq!]%Oq!^%Oq~P''VOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!1WO!Y;hO~P#/sOr;iO!g#vO(r'pO~O[;kO!Y;hO~P#/sO!]'pq!^'pq~P#BwO!]#h!Z!^#h!Z~P#BwO#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'z%e!Z(a%e!Z(r%e!Z!k%e!Z!Y%e!Z'w%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/sOr;tO!g#vO(r'pO~O!Y;uO~P#/sOr;|O!g#vO(r'pO~O!Y;}O~P#/sOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(a%e!Z(r%e!Z!]%e!Z!^%e!Z~P''VOr<QO!g#vO(r'pO~Ov(fX~P1qO!Q%rO~P!)[O(U!lO~P!)[O!YfX!]fX#`fX~P%2OOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~O!gfX!k]X!kfX(rfX~P'LTOP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_XO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]<iO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<tO!S${O!_$|O!i>WO!l$xO#j<zO$W%`O$t<vO$v<xO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Ol)dO~P(!yOr!eX(r!eX~P#!iOr(jX(r(jX~P##[O!^]X!^fX~P'LTO!YfX!Y$zX!]fX!]$zX#`fX~P!0SO#k<^O~O!g#vO#k<^O~O#`<nO~Oj<bO~O#`=OO!](wX!^(wX~O#`<nO!](uX!^(uX~O#k=PO~Og=RO~P!1WO#k=XO~O#k=YO~Og=RO(T&ZO~O!g#vO#k=ZO~O!g#vO#k=PO~O$O=[O~P#BwO#k=]O~O#k=^O~O#k=cO~O#k=dO~O#k=eO~O#k=fO~O$O=gO~P!1WO$O=hO~P!1WOl=sO~P7eOk#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~(OT#o!X'|(U#ps#n#qr!Q'}$]'}(T$_(e~",
        goto: "$9Y)]PPPPPP)^PP)aP)rP+W/]PPPP6mPP7TPP=QPPP@tPA^PA^PPPA^PCfPA^PA^PA^PCjPCoPD^PIWPPPI[PPPPI[L_PPPLeMVPI[PI[PP! eI[PPPI[PI[P!#lI[P!'S!(X!(bP!)U!)Y!)U!,gPPPPPPP!-W!(XPP!-h!/YP!2iI[I[!2n!5z!:h!:h!>gPPP!>oI[PPPPPPPPP!BOP!C]PPI[!DnPI[PI[I[I[I[I[PI[!FQP!I[P!LbP!Lf!Lp!Lt!LtP!IXP!Lx!LxP#!OP#!SI[PI[#!Y#%_CjA^PA^PA^A^P#&lA^A^#)OA^#+vA^#.SA^A^#.r#1W#1W#1]#1f#1W#1qPP#1WPA^#2ZA^#6YA^A^6mPPP#:_PPP#:x#:xP#:xP#;`#:xPP#;fP#;]P#;]#;y#;]#<e#<k#<n)aP#<q)aP#<z#<z#<zP)aP)aP)aP)aPP)aP#=Q#=TP#=T)aP#=XP#=[P)aP)aP)aP)aP)aP)a)aPP#=b#=h#=s#=y#>P#>V#>]#>k#>q#>{#?R#?]#?c#?s#?y#@k#@}#AT#AZ#Ai#BO#Cs#DR#DY#Et#FS#Gt#HS#HY#H`#Hf#Hp#Hv#H|#IW#Ij#IpPPPPPPPPPPP#IvPPPPPPP#Jk#Mx$ b$ i$ qPPP$']P$'f$*_$0x$0{$1O$1}$2Q$2X$2aP$2g$2jP$3W$3[$4S$5b$5g$5}PP$6S$6Y$6^$6a$6e$6i$7e$7|$8e$8i$8l$8o$8y$8|$9Q$9UR!|RoqOXst!Z#d%m&r&t&u&w,s,x2[2_Y!vQ'`-e1o5{Q%tvQ%|yQ&T|Q&j!VS'W!e-]Q'f!iS'l!r!yU*k$|*Z*oQ+o%}S+|&V&WQ,d&dQ-c'_Q-m'gQ-u'mQ0[*qQ1b,OQ1y,eR<{<Y%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_S#q]<V!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU+P%]<s<tQ+t&PQ,f&gQ,m&oQ0x+gQ0}+iQ1Y+uQ2R,kQ3`.gQ5`0|Q5f1TQ6[1zQ7Y3dQ8`5gR9e7['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S!S!nQ!r!v!y!z$|'W'_'`'l'm'n*k*o*q*r-]-c-e-u0[0_1o5{5}%[$ti#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q&X|Q'U!eS'[%i-`Q+t&PQ,P&WQ,f&gQ0n+SQ1Y+uQ1_+{Q2Q,jQ2R,kQ5f1TQ5o1aQ6[1zQ6_1|Q6`2PQ8`5gQ8c5lQ8|6bQ:X8dQ:f8yQ;V:YR<}*ZrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R,h&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'b'r(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>R>S[#]WZ#W#Z'X(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ%wxQ%{yW&Q|&V&W,OQ&_!TQ'c!hQ'e!iQ(q#sS+n%|%}Q+r&PQ,_&bQ,c&dS-l'f'gQ.i(rQ1R+oQ1X+uQ1Z+vQ1^+zQ1t,`S1x,d,eQ2|-mQ5e1TQ5i1WQ5n1`Q6Z1yQ8_5gQ8b5kQ8f5pQ:T8^R;T:U!U$zi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y!^%yy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{Q+h%wQ,T&[Q,W&]Q,b&dQ.h(qQ1s,_U1w,c,d,eQ3e.iQ6U1tS6Y1x1yQ8x6Z#f>T#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o>U<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hW%Ti%V*y>PS&[!Q&iQ&]!RQ&^!SU*}%[%d=sR,R&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^T)z$u){V+P%]<s<tW'[!e%i*Z-`S(}#y#zQ+c%rQ+y&SS.b(m(nQ1j,XQ5T0kR8i5u'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S$i$^c#Y#e%q%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.|.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ'Y!eR2q-]!W!nQ!e!r!v!y!z$|'W'_'`'l'm'n*Z*k*o*q*r-]-c-e-u0[0_1o5{5}R1l,ZnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&y!^Q'v!xS(s#u<^Q+l%zQ,]&_Q,^&aQ-j'dQ-w'oS.r(x=PS0q+X=ZQ1P+mQ1n,[Q2c,zQ2e,{Q2m-WQ2z-kQ2}-oS5Y0r=eQ5a1QS5d1S=fQ6t2oQ6x2{Q6}3SQ8]5bQ9Y6vQ9Z6yQ9^7OR:l9V$d$]c#Y#e%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vS(o#p'iQ)P#zS+b%q.|S.c(n(pR3^.d'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS#q]<VQ&t!XQ&u!YQ&w![Q&x!]R2Z,vQ'a!hQ+e%wQ-h'cS.e(q+hQ2x-gW3b.h.i0w0yQ6w2yW7U3_3a3e5^U9a7V7X7ZU:q9c9d9fS;b:p:sQ;p;cR;x;qU!wQ'`-eT5y1o5{!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(j,s,x.[2[2_]!pQ!r'`-e1o5{T#q]<V%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S(}#y#zS.b(m(n!s=l$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU$fd)_,mS(p#p'iU*v%R(w4OU0m+O.n7gQ5^0xQ7V3`Q9d7YR:s9em!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}Q't!uS(f#g2US-s'k'wQ/s*]Q0R*jQ3U-vQ4f/tQ4r0TQ4s0UQ4x0^Q7r4`S7}4t4vS8R4y4{Q9r7sQ9v7yQ9{8OQ:Q8TS:{9w9xS;g:|;PS;s;h;iS;{;t;uS<P;|;}R<S<QQ#wbQ's!uS(e#g2US(g#m+WQ+Y%fQ+j%xQ+p&OU-r'k't'wQ.W(fU/r*]*`/wQ0S*jQ0V*lQ1O+kQ1u,aS3R-s-vQ3Z.`S4e/s/tQ4n0PS4q0R0^Q4u0WQ6W1vQ7P3US7q4`4bQ7u4fU7|4r4x4{Q8P4wQ8v6XS9q7r7sQ9u7yQ9}8RQ:O8SQ:c8wQ:y9rS:z9v9xQ;S:QQ;^:dS;f:{;PS;r;g;hS;z;s;uS<O;{;}Q<R<PQ<T<SQ=o=jQ={=tR=|=uV!wQ'`-e%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S#wz!j!r=i$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=o>R%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Q%fj!^%xy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{S&Oz!jQ+k%yQ,a&dW1v,b,c,d,eU6X1w1x1yS8w6Y6ZQ:d8x!r=j$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ=t>QR=u>R%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Y#bWZ#W#Z(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ,n&o!p=k$Z$n)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=n'XU']!e%i*ZR2s-`%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ,m&oQ0x+gQ3`.gQ7Y3dR9e7[!b$Tc#Y%q(S(Y(t(y)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!P<d)^)q-Z.|2k2n3p3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!f$Vc#Y%q(S(Y(t(y)W)X)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!T<f)^)q-Z.|2k2n3p3v3w3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!^$Zc#Y%q(S(Y(t(y)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<WQ4_/kz>S)^)q-Z.|2k2n3p4P4X6u7b7k7l8k9X9g9m9n;W;`=vQ>X>ZR>Y>['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS$oh$pR4U/U'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$kf$qQ$ifS)j$l)nR)v$qT$jf$qT)l$l)n'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$oh$pQ$rhR)u$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_!s>Q$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'b)O)s*i+]+g,p,s,x-i.g/V/n0]0l1r2S2T2V2X2[2_2a3d4T4z6T6e6f6i7[8t9T!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^Q+T%aQ/c*Oo4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!U$yi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>YQ*c$zU*l$|*Z*oQ+U%bQ0W*m#f=q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n=r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hQ=w>TQ=x>UQ=y>VR=z>W!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hnoOXst!Z#d%m&r&t&u&w,s,x2[2_S*f${*YQ-R'OQ-S'QR4i/y%[%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q,U&]Q1h,WQ5s1gR8h5tV*n$|*Z*oU*n$|*Z*oT5z1o5{S0P*i/nQ4w0]T8S4z:]Q+j%xQ0V*lQ1O+kQ1u,aQ6W1vQ8v6XQ:c8wR;^:d!U%Oi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Yx*R$v)e*S*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>OS0`*t0a#f<o#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<p<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!d=S(u)c*[*e.j.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[`=T3}7c7f7j9h:t:w;yS=_.l3iT=`7e9k!U%Qi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y|*T$v)e*U*t+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>OS0b*u0c#f<q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!h=U(u)c*[*e.k.l.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[d=V3}7d7e7j9h9i:t:u:w;yS=a.m3jT=b7f9lrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q&f!UR,p&ornOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R&f!UQ,Y&^R1d,RsnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q1p,_S6R1s1tU8p6P6Q6US:_8r8sS;Y:^:aQ;m;ZR;w;nQ&m!VR,i&iR6_1|R:f8yW&Q|&V&W,OR1Z+vQ&r!WR,s&sR,y&xT2],x2_R,}&yQ,|&yR2f,}Q'y!{R-y'ySsOtQ#dXT%ps#dQ#OTR'{#OQ#RUR'}#RQ){$uR/`){Q#UVR(Q#UQ#XWU(W#X(X.QQ(X#YR.Q(YQ-^'YR2r-^Q.u(yS3m.u3nR3n.vQ-e'`R2v-eY!rQ'`-e1o5{R'j!rQ/Q)eR4S/QU#_W%h*YU(_#_(`.RQ(`#`R.R(ZQ-a']R2t-at`OXst!V!Z#d%m&i&k&r&t&u&w,s,x2[2_S#hZ%eU#r`#h.[R.[(jQ(k#jQ.X(gW.a(k.X3X7RQ3X.YR7R3YQ)n$lR/W)nQ$phR)t$pQ$`cU)a$`-|<jQ-|<WR<j)qQ/q*]W4c/q4d7t9sU4d/r/s/tS7t4e4fR9s7u$e*Q$v(u)c)e*[*e*t*u+Q+R+V.l.m.o.p.q/_/g/i/k/v/|0d0e0v1e3f3g3h3}4R4[4g4h4l4|5O5R5S5W5r7]7^7_7`7e7f7h7i7j7p7w7z8U8X8Z9h9i9j9t9|:R:S:t:u:v:w:x:};R;e;j;v;y=p=}>O>Z>[Q/z*eU4k/z4m7xQ4m/|R7x4lS*o$|*ZR0Y*ox*S$v)e*t*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>O!d.j(u)c*[*e.l.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/h*S.j7ca7c3}7e7f7j9h:t:w;yQ0a*tQ3i.lU4}0a3i9kR9k7e|*U$v)e*t*u+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>O!h.k(u)c*[*e.l.m.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/j*U.k7de7d3}7e7f7j9h9i:t:u:w;yQ0c*uQ3j.mU5P0c3j9lR9l7fQ*z%UR0g*zQ5]0vR8Y5]Q+_%kR0u+_Q5v1jS8j5v:[R:[8kQ,[&_R1m,[Q5{1oR8m5{Q1{,fS6]1{8zR8z6_Q1U+rW5h1U5j8a:VQ5j1XQ8a5iR:V8bQ+w&QR1[+wQ2_,xR6m2_YrOXst#dQ&v!ZQ+a%mQ,r&rQ,t&tQ,u&uQ,w&wQ2Y,sS2],x2_R6l2[Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'q!uQ+`%lQ+l%zQ,Q&XQ,h&mQ-P&|W-p'k's't'wQ-w'oQ0X*nQ1P+mQ1c,PS2O,i,lQ2g-OQ2h-RQ2i-SQ2}-oW3P-r-s-v-xQ5a1QQ5m1_Q5q1eQ6V1uQ6a2QQ6k2ZU6z3O3R3UQ6}3SQ8]5bQ8e5oQ8g5rQ8l5zQ8u6WQ8{6`S9[6{7PQ9^7OQ:W8cQ:b8vQ:g8|Q:n9]Q;U:XQ;]:cQ;a:oQ;l;VR;o;^Q%zyQ'd!iQ'o!uU+m%{%|%}Q-W'VU-k'e'f'gS-o'k'uQ0Q*jS1Q+n+oQ2o-YS2{-l-mQ3S-tS4p0R0UQ5b1RQ6v2uQ6y2|Q7O3TU7{4r4s4vQ9z7}R;O9{S$wi>PR*{%VU%Ui%V>PR0f*yQ$viS(u#v+iS)c$b$cQ)e$dQ*[$xS*e${*YQ*t%OQ*u%QQ+Q%^Q+R%_Q+V%cQ.l<oQ.m<qQ.o<uQ.p<wQ.q<yQ/_)yQ/g*RQ/i*TQ/k*VQ/v*aS/|*g/mQ0d*wQ0e*xl0v+f,V.f1i1q3c6S7W8q9b:`:r;[;dQ1e,SQ3f=SQ3g=UQ3h=XS3}<l<mQ4R/PS4[/d4^Q4g/xQ4h/yQ4l/{Q4|0`Q5O0bQ5R0iQ5S0jQ5W0oQ5r1fQ7]=]Q7^=_Q7_=aQ7`=cQ7e<pQ7f<rQ7h<vQ7i<xQ7j<zQ7p4_Q7w4jQ7z4oQ8U5QQ8X5[Q8Z5_Q9h=YQ9i=TQ9j=VQ9t7vQ9|8QQ:R8VQ:S8[Q:t=^Q:u=`Q:v=bQ:w=dQ:x9pQ:}9yQ;R:PQ;e=gQ;j;QQ;v;kQ;y=hQ=p>PQ=}>XQ>O>YQ>Z>]R>[>^Q+O%]Q.n<sR7g<tnpOXst!Z#d%m&r&t&u&w,s,x2[2_Q!fPS#fZ#oQ&|!`W'h!o*i0]4zQ(P#SQ)Q#{Q)r$nS,l&k&nQ,q&oQ-O&{S-T'T/nQ-g'bQ.x)OQ/[)sQ0s+]Q0y+gQ2W,pQ2y-iQ3a.gQ4W/VQ5U0lQ6Q1rQ6c2SQ6d2TQ6h2VQ6j2XQ6o2aQ7Z3dQ7m4TQ8s6TQ9P6eQ9Q6fQ9S6iQ9f7[Q:a8tR:k9T#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'b)O*i+]+g,p,s,x-i.g/n0]0l1r2S2T2V2X2[2_2a3d4z6T6e6f6i7[8t9TQ#YWQ#eYQ%quQ%svS%uw!gS(S#W(VQ(Y#ZQ(t#uQ(y#xQ)R$OQ)S$PQ)T$QQ)U$RQ)V$SQ)W$TQ)X$UQ)Y$VQ)Z$WQ)[$XQ)^$ZQ)`$_Q)b$aQ)g$eW)q$n)s/V4TQ+d%tQ+x&RS-Z'X2pQ-x'rS-}(T.PQ.S(]Q.U(dQ.s(xQ.v(zQ.z<UQ.|<XQ.}<YQ/O<]Q/b)}Q0p+XQ2k-UQ2n-XQ3O-qQ3V.VQ3k.tQ3p<^Q3q<_Q3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{.{Q3|<kQ4P<nQ4Q<{Q4X<iQ5X0rQ5c1SQ6u=OQ6{3QQ7Q3WQ7a3lQ7b=PQ7k=RQ7l=ZQ8k5wQ9X6sQ9]6|Q9g=[Q9m=eQ9n=fQ:o9_Q;W:ZQ;`:mQ<W#SR=v>SR#[WR'Z!el!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}S'V!e-]U*j$|*Z*oS-Y'W'_S0U*k*qQ0^*rQ2u-cQ4v0[R4{0_R({#xQ!fQT-d'`-e]!qQ!r'`-e1o5{Q#p]R'i<VR)f$dY!uQ'`-e1o5{Q'k!rS'u!v!yS'w!z5}S-t'l'mQ-v'nR3T-uT#kZ%eS#jZ%eS%km,oU(g#h#i#lS.Y(h(iQ.^(jQ0t+^Q3Y.ZU3Z.[.]._S7S3[3]R9`7Td#^W#W#Z%h(T(^*Y+Z.T/mr#gZm#h#i#l%e(h(i(j+^.Z.[.]._3[3]7TS*]$x*bQ/t*^Q2U,oQ2l-VQ4`/pQ6q2dQ7s4aQ9W6rT=m'X+[V#aW%h*YU#`W%h*YS(U#W(^U(Z#Z+Z/mS-['X+[T.O(T.TV'^!e%i*ZQ$lfR)x$qT)m$l)nR4V/UT*_$x*bT*h${*YQ0w+fQ1g,VQ3_.fQ5t1iQ6P1qQ7X3cQ8r6SQ9c7WQ:^8qQ:p9bQ;Z:`Q;c:rQ;n;[R;q;dnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&l!VR,h&itmOXst!U!V!Z#d%m&i&r&t&u&w,s,x2[2_R,o&oT%lm,oR1k,XR,g&gQ&U|S+}&V&WR1^,OR+s&PT&p!W&sT&q!W&sT2^,x2_",
        nodeNames: "\u26a0 ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
        maxTerm: 380,
        context: VU,
        nodeProps: [
          ["isolate", -8, 5, 6, 14, 37, 39, 51, 53, 55, ""],
          ["group", -26, 9, 17, 19, 68, 207, 211, 215, 216, 218, 221, 224, 234, 237, 243, 245, 247, 249, 252, 258, 264, 266, 268, 270, 272, 274, 275, "Statement", -34, 13, 14, 32, 35, 36, 42, 51, 54, 55, 57, 62, 70, 72, 76, 80, 82, 84, 85, 110, 111, 120, 121, 136, 139, 141, 142, 143, 144, 145, 147, 148, 167, 169, 171, "Expression", -23, 31, 33, 37, 41, 43, 45, 173, 175, 177, 178, 180, 181, 182, 184, 185, 186, 188, 189, 190, 201, 203, 205, 206, "Type", -3, 88, 103, 109, "ClassItem"],
          ["openedBy", 23, "<", 38, "InterpolationStart", 56, "[", 60, "{", 73, "(", 160, "JSXStartCloseTag"],
          ["closedBy", -2, 24, 168, ">", 40, "InterpolationEnd", 50, "]", 61, "}", 74, ")", 165, "JSXEndTag"]
        ],
        propSources: [sU],
        skippedNodes: [0, 5, 6, 278],
        repeatNodeCount: 37,
        tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
        tokenizers: [XU, vU, dU, SU, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, rU, new uU("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340), new uU("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)],
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
          get: UU => yU[UU] || -1
        }, {
          term: 343,
          get: UU => kU[UU] || -1
        }, {
          term: 95,
          get: UU => FU[UU] || -1
        }],
        tokenPrec: 15201
      });
    var AU = gU(40728),
      zU = gU(40700),
      MU = gU(40707),
      DU = gU(40691);
    const LU = [(0, DU.v)("function ${name}(${params}) {\n\t${}\n}", {
        label: "function",
        detail: "definition",
        type: "keyword"
      }), (0, DU.v)("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}", {
        label: "for",
        detail: "loop",
        type: "keyword"
      }), (0, DU.v)("for (let ${name} of ${collection}) {\n\t${}\n}", {
        label: "for",
        detail: "of loop",
        type: "keyword"
      }), (0, DU.v)("do {\n\t${}\n} while (${})", {
        label: "do",
        detail: "loop",
        type: "keyword"
      }), (0, DU.v)("while (${}) {\n\t${}\n}", {
        label: "while",
        detail: "loop",
        type: "keyword"
      }), (0, DU.v)("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
        label: "try",
        detail: "/ catch block",
        type: "keyword"
      }), (0, DU.v)("if (${}) {\n\t${}\n}", {
        label: "if",
        detail: "block",
        type: "keyword"
      }), (0, DU.v)("if (${}) {\n\t${}\n} else {\n\t${}\n}", {
        label: "if",
        detail: "/ else block",
        type: "keyword"
      }), (0, DU.v)("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
        label: "class",
        detail: "definition",
        type: "keyword"
      }), (0, DU.v)('import {${names}} from "${module}"\n${}', {
        label: "import",
        detail: "named",
        type: "keyword"
      }), (0, DU.v)('import ${name} from "${module}"\n${}', {
        label: "import",
        detail: "default",
        type: "keyword"
      })],
      NU = LU.concat([(0, DU.v)("interface ${name} {\n\t${}\n}", {
        label: "interface",
        detail: "definition",
        type: "keyword"
      }), (0, DU.v)("type ${name} = ${type}", {
        label: "type",
        detail: "definition",
        type: "keyword"
      }), (0, DU.v)("enum ${name} {\n\t${}\n}", {
        label: "enum",
        detail: "definition",
        type: "keyword"
      })]),
      lU = new tU.p,
      OU = new Set(["Script", "Block", "FunctionExpression", "FunctionDeclaration", "ArrowFunction", "MethodDeclaration", "ForStatement"]);

    function UR(UU) {
      return (RU, gU) => {
        let tU = RU.node.getChild("VariableDefinition");
        return tU && gU(tU, UU), !0
      }
    }
    const RR = ["FunctionDeclaration"],
      gR = {
        FunctionDeclaration: UR("function"),
        ClassDeclaration: UR("class"),
        ClassExpression: () => !0,
        EnumDeclaration: UR("constant"),
        TypeAliasDeclaration: UR("type"),
        NamespaceDeclaration: UR("namespace"),
        VariableDefinition(UU, RU) {
          UU.matchContext(RR) || RU(UU, "variable")
        },
        TypeDefinition(UU, RU) {
          RU(UU, "type")
        },
        __proto__: null
      };

    function tR(UU, RU) {
      let gU = lU.get(RU);
      if (gU) return gU;
      let pU = [],
        EU = !0;

      function PU(RU, gU) {
        let tU = UU.sliceString(RU.from, RU.to);
        pU.push({
          label: tU,
          type: gU
        })
      }
      return RU.cursor(tU.h.IncludeAnonymous).iterate((RU => {
        if (EU) EU = !1;
        else if (RU.name) {
          let UU = gR[RU.name];
          if (UU && UU(RU, PU) || OU.has(RU.name)) return !1
        } else if (RU.to - RU.from > 8192) {
          for (let gU of tR(UU, RU.node)) pU.push(gU);
          return !1
        }
      })), lU.set(RU, pU), pU
    }
    const pR = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
      ER = ["TemplateString", "String", "RegExp", "LineComment", "BlockComment", "VariableDefinition", "TypeDefinition", "Label", "PropertyDefinition", "PropertyName", "PrivatePropertyDefinition", "PrivatePropertyName", "JSXText", "JSXAttributeValue", "JSXOpenTag", "JSXCloseTag", "JSXSelfClosingTag", ".", "?."];

    function PR(UU) {
      let RU = (0, AU.sb)(UU.state).resolveInner(UU.pos, -1);
      if (ER.indexOf(RU.name) > -1) return null;
      let gU = "VariableName" == RU.name || RU.to - RU.from < 20 && pR.test(UU.state.sliceDoc(RU.from, RU.to));
      if (!gU && !UU.explicit) return null;
      let tU = [];
      for (let pU = RU; pU; pU = pU.parent) OU.has(pU.name) && (tU = tU.concat(tR(UU.state.doc, pU)));
      return {
        options: tU,
        from: gU ? RU.from : UU.pos,
        validFor: pR
      }
    }
    const TR = AU.i.define({
        name: "javascript",
        parser: iU.configure({
          props: [AU.X.add({
            IfStatement: (0, AU.q)({
              except: /^\s*({|else\b)/
            }),
            TryStatement: (0, AU.q)({
              except: /^\s*({|catch\b|finally\b)/
            }),
            LabeledStatement: AU.B,
            SwitchBody: UU => {
              let RU = UU.textAfter,
                gU = /^\s*\}/.test(RU),
                tU = /^\s*(case|default)\b/.test(RU);
              return UU.baseIndent + (gU ? 0 : tU ? 1 : 2) * UU.unit
            },
            Block: (0, AU.x)({
              closing: "}"
            }),
            ArrowFunction: UU => UU.baseIndent + UU.unit,
            "TemplateString BlockComment": () => null,
            "Statement Property": (0, AU.q)({
              except: /^\s*{/
            }),
            JSXElement(UU) {
              let RU = /^\s*<\//.test(UU.textAfter);
              return UU.lineIndent(UU.node.from) + (RU ? 0 : UU.unit)
            },
            JSXEscape(UU) {
              let RU = /\s*\}/.test(UU.textAfter);
              return UU.lineIndent(UU.node.from) + (RU ? 0 : UU.unit)
            },
            "JSXOpenTag JSXSelfClosingTag": UU => UU.column(UU.node.from) + UU.unit
          }), AU.M.add({
            "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": AU.G,
            BlockComment: UU => ({
              from: UU.from + 2,
              to: UU.to - 2
            }),
            JSXElement(UU) {
              let RU = UU.firstChild;
              if (!RU || "JSXSelfClosingTag" == RU.name) return null;
              let gU = UU.lastChild;
              return {
                from: RU.to,
                to: gU.type.isError ? UU.to : gU.from
              }
            },
            "JSXSelfClosingTag JSXOpenTag"(UU) {
              var RU;
              let gU = null === (RU = UU.firstChild) || void 0 === RU ? void 0 : RU.nextSibling,
                tU = UU.lastChild;
              return !gU || gU.type.isError ? null : {
                from: gU.to,
                to: tU.type.isError ? UU.to : tU.from
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
      qR = {
        test: UU => /^JSX/.test(UU.name),
        facet: (0, AU.v)({
          commentTokens: {
            block: {
              open: "{/*",
              close: "*/}"
            }
          }
        })
      },
      KR = TR.configure({
        dialect: "ts"
      }, "typescript"),
      cR = TR.configure({
        dialect: "jsx",
        props: [AU.jb.add((UU => UU.isTop ? [qR] : void 0))]
      }),
      GR = TR.configure({
        dialect: "jsx ts",
        props: [AU.jb.add((UU => UU.isTop ? [qR] : void 0))]
      }, "typescript");
    let jR = UU => ({
      label: UU,
      type: "keyword"
    });
    const uR = "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(jR),
      CR = uR.concat(["declare", "implements", "private", "protected", "public"].map(jR));

    function hR() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        RU = UU.jsx ? UU.typescript ? GR : cR : UU.typescript ? KR : TR,
        gU = UU.typescript ? NU.concat(CR) : LU.concat(uR);
      return new AU.m(RU, [TR.data.of({
        autocomplete: (0, DU.r)(ER, (0, DU.k)(gU))
      }), TR.data.of({
        autocomplete: PR
      }), UU.jsx ? WR : []])
    }

    function QR(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : UU.length;
      for (let tU = null === RU || void 0 === RU ? void 0 : RU.firstChild; tU; tU = tU.nextSibling)
        if ("JSXIdentifier" == tU.name || "JSXBuiltin" == tU.name || "JSXNamespacedName" == tU.name || "JSXMemberExpression" == tU.name) return UU.sliceString(tU.from, Math.min(tU.to, gU));
      return ""
    }
    const eR = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      WR = MU.h.inputHandler.of(((UU, RU, gU, tU, pU) => {
        if ((eR ? UU.composing : UU.compositionStarted) || UU.state.readOnly || RU != gU || ">" != tU && "/" != tU || !TR.isActiveAt(UU.state, RU, -1)) return !1;
        let EU = pU(),
          {
            state: PU
          } = EU,
          TU = PU.changeByRange((UU => {
            var RU;
            let gU, {
                head: pU
              } = UU,
              EU = (0, AU.sb)(PU).resolveInner(pU - 1, -1);
            if ("JSXStartTag" == EU.name && (EU = EU.parent), PU.doc.sliceString(pU - 1, pU) != tU || "JSXAttributeValue" == EU.name && EU.to > pU);
            else {
              if (">" == tU && "JSXFragmentTag" == EU.name) return {
                range: UU,
                changes: {
                  from: pU,
                  insert: "</>"
                }
              };
              if ("/" == tU && "JSXStartCloseTag" == EU.name) {
                let UU = EU.parent,
                  tU = UU.parent;
                if (tU && UU.from == pU - 2 && ((gU = QR(PU.doc, tU.firstChild, pU)) || "JSXFragmentTag" == (null === (RU = tU.firstChild) || void 0 === RU ? void 0 : RU.name))) {
                  let UU = `${gU}>`;
                  return {
                    range: zU.k.cursor(pU + UU.length, -1),
                    changes: {
                      from: pU,
                      insert: UU
                    }
                  }
                }
              } else if (">" == tU) {
                let RU = function(UU) {
                  for (;;) {
                    if ("JSXOpenTag" == UU.name || "JSXSelfClosingTag" == UU.name || "JSXFragmentTag" == UU.name) return UU;
                    if ("JSXEscape" == UU.name || !UU.parent) return null;
                    UU = UU.parent
                  }
                }(EU);
                if (RU && "JSXOpenTag" == RU.name && !/^\/?>|^<\//.test(PU.doc.sliceString(pU, pU + 2)) && (gU = QR(PU.doc, RU, pU))) return {
                  range: UU,
                  changes: {
                    from: pU,
                    insert: `</${gU}>`
                  }
                }
              }
            }
            return {
              range: UU
            }
          }));
        return !TU.changes.empty && (UU.dispatch([EU, PU.update(TU, {
          userEvent: "input.complete",
          scrollIntoView: !0
        })]), !0)
      }))
  },
  40728: (UU, RU, gU) => {
    gU.d(RU, {
      B: () => FU,
      F: () => WR,
      G: () => LU,
      K: () => KR,
      M: () => DU,
      P: () => eU,
      R: () => YU,
      U: () => VU,
      X: () => XU,
      Z: () => zU,
      ab: () => BU,
      cb: () => aU,
      d: () => xR,
      f: () => rU,
      fb: () => kR,
      i: () => CU,
      jb: () => GU,
      m: () => oU,
      nb: () => wR,
      p: () => HR,
      pb: () => QU,
      q: () => iU,
      s: () => oR,
      sb: () => hU,
      v: () => cU,
      x: () => yU
    });
    var tU, pU = gU(40734),
      EU = gU(40700),
      PU = gU(40707),
      TU = gU(40739),
      qU = gU(40714);
    const KU = new pU.i;

    function cU(UU) {
      return EU.p.define({
        combine: UU ? RU => RU.concat(UU) : void 0
      })
    }
    const GU = new pU.i;
    class jU {
      constructor(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this.data = UU, this.name = tU, EU.n.prototype.hasOwnProperty("tree") || Object.defineProperty(EU.n.prototype, "tree", {
          get() {
            return hU(this)
          }
        }), this.parser = RU, this.extension = [bU.of(this), EU.n.languageData.of(((UU, RU, gU) => {
          let tU = uU(UU, RU, gU),
            pU = tU.type.prop(KU);
          if (!pU) return [];
          let EU = UU.facet(pU),
            PU = tU.type.prop(GU);
          if (PU) {
            let pU = tU.resolve(RU - tU.from, gU);
            for (let RU of PU)
              if (RU.test(pU, UU)) {
                let gU = UU.facet(RU.facet);
                return "replace" == RU.type ? gU : gU.concat(EU)
              }
          }
          return EU
        }))].concat(gU)
      }
      isActiveAt(UU, RU) {
        return uU(UU, RU, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1).type.prop(KU) == this.data
      }
      findRegions(UU) {
        let RU = UU.facet(bU);
        if ((null === RU || void 0 === RU ? void 0 : RU.data) == this.data) return [{
          from: 0,
          to: UU.doc.length
        }];
        if (!RU || !RU.allowsNesting) return [];
        let gU = [],
          tU = (UU, RU) => {
            if (UU.prop(KU) == this.data) return void gU.push({
              from: RU,
              to: RU + UU.length
            });
            let EU = UU.prop(pU.i.mounted);
            if (EU) {
              if (EU.tree.prop(KU) == this.data) {
                if (EU.overlay)
                  for (let UU of EU.overlay) gU.push({
                    from: UU.from + RU,
                    to: UU.to + RU
                  });
                else gU.push({
                  from: RU,
                  to: RU + UU.length
                });
                return
              }
              if (EU.overlay) {
                let UU = gU.length;
                if (tU(EU.tree, EU.overlay[0].from + RU), gU.length > UU) return
              }
            }
            for (let gU = 0; gU < UU.children.length; gU++) {
              let EU = UU.children[gU];
              EU instanceof pU.v && tU(EU, UU.positions[gU] + RU)
            }
          };
        return tU(hU(UU), 0), gU
      }
      get allowsNesting() {
        return !0
      }
    }

    function uU(UU, RU, gU) {
      let tU = UU.facet(bU),
        EU = hU(UU).topNode;
      if (!tU || tU.allowsNesting)
        for (let PU = EU; PU; PU = PU.enter(RU, gU, pU.h.ExcludeBuffers | pU.h.EnterBracketed)) PU.type.isTop && (EU = PU);
      return EU
    }
    jU.setState = EU.A.define();
    class CU extends jU {
      constructor(UU, RU, gU) {
        super(UU, RU, [], gU), this.parser = RU
      }
      static define(UU) {
        let RU = cU(UU.languageData);
        return new CU(RU, UU.parser.configure({
          props: [KU.add((UU => UU.isTop ? RU : void 0))]
        }), UU.name)
      }
      configure(UU, RU) {
        return new CU(this.data, this.parser.configure(UU), RU || this.name)
      }
      get allowsNesting() {
        return this.parser.hasWrappers()
      }
    }

    function hU(UU) {
      let RU = UU.field(jU.state, !1);
      return RU ? RU.tree : pU.v.empty
    }

    function QU(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UU.doc.length;
      var gU;
      return (null === (gU = UU.field(jU.state, !1)) || void 0 === gU ? void 0 : gU.context.isDone(RU)) || !1
    }

    function eU(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UU.viewport.to,
        gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        tU = function(UU, RU) {
          let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
          var tU;
          let pU = null === (tU = UU.field(jU.state, !1)) || void 0 === tU ? void 0 : tU.context;
          if (!pU) return null;
          let EU = pU.viewport;
          pU.updateViewport({
            from: 0,
            to: RU
          });
          let PU = pU.isDone(RU) || pU.work(gU, RU) ? pU.tree : null;
          return pU.updateViewport(EU), PU
        }(UU.state, RU, gU);
      return tU != hU(UU.state) && UU.dispatch({}), !!tU
    }
    class WU {
      constructor(UU) {
        this.doc = UU, this.cursorPos = 0, this.string = "", this.cursor = UU.iter()
      }
      get length() {
        return this.doc.length
      }
      syncTo(UU) {
        return this.string = this.cursor.next(UU - this.cursorPos).value, this.cursorPos = UU + this.string.length, this.cursorPos - this.string.length
      }
      chunk(UU) {
        return this.syncTo(UU), this.string
      }
      get lineChunks() {
        return !0
      }
      read(UU, RU) {
        let gU = this.cursorPos - this.string.length;
        return UU < gU || RU >= this.cursorPos ? this.doc.sliceString(UU, RU) : this.string.slice(UU - gU, RU - gU)
      }
    }
    let fU = null;
    class xU {
      constructor(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          tU = arguments.length > 3 ? arguments[3] : void 0,
          pU = arguments.length > 4 ? arguments[4] : void 0,
          EU = arguments.length > 5 ? arguments[5] : void 0,
          PU = arguments.length > 6 ? arguments[6] : void 0,
          TU = arguments.length > 7 ? arguments[7] : void 0;
        this.parser = UU, this.state = RU, this.fragments = gU, this.tree = tU, this.treeLen = pU, this.viewport = EU, this.skipped = PU, this.scheduleOn = TU, this.parse = null, this.tempSkipped = []
      }
      static create(UU, RU, gU) {
        return new xU(UU, RU, [], pU.v.empty, 0, gU, [], null)
      }
      startParse() {
        return this.parser.startParse(new WU(this.state.doc), this.fragments)
      }
      work(UU, RU) {
        return null != RU && RU >= this.state.doc.length && (RU = void 0), this.tree != pU.v.empty && this.isDone(null !== RU && void 0 !== RU ? RU : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext((() => {
          var gU;
          if ("number" == typeof UU) {
            let RU = Date.now() + UU;
            UU = () => Date.now() > RU
          }
          for (this.parse || (this.parse = this.startParse()), null != RU && (null == this.parse.stoppedAt || this.parse.stoppedAt > RU) && RU < this.state.doc.length && this.parse.stopAt(RU);;) {
            let tU = this.parse.advance();
            if (tU) {
              if (this.fragments = this.withoutTempSkipped(pU.s.addTree(tU, this.fragments, null != this.parse.stoppedAt)), this.treeLen = null !== (gU = this.parse.stoppedAt) && void 0 !== gU ? gU : this.state.doc.length, this.tree = tU, this.parse = null, !(this.treeLen < (null !== RU && void 0 !== RU ? RU : this.state.doc.length))) return !0;
              this.parse = this.startParse()
            }
            if (UU()) return !1
          }
        }))
      }
      takeTree() {
        let UU, RU;
        this.parse && (UU = this.parse.parsedPos) >= this.treeLen && ((null == this.parse.stoppedAt || this.parse.stoppedAt > UU) && this.parse.stopAt(UU), this.withContext((() => {
          for (; !(RU = this.parse.advance()););
        })), this.treeLen = UU, this.tree = RU, this.fragments = this.withoutTempSkipped(pU.s.addTree(this.tree, this.fragments, !0)), this.parse = null)
      }
      withContext(UU) {
        let RU = fU;
        fU = this;
        try {
          return UU()
        } finally {
          fU = RU
        }
      }
      withoutTempSkipped(UU) {
        for (let RU; RU = this.tempSkipped.pop();) UU = mU(UU, RU.from, RU.to);
        return UU
      }
      changes(UU, RU) {
        let {
          fragments: gU,
          tree: tU,
          treeLen: EU,
          viewport: PU,
          skipped: TU
        } = this;
        if (this.takeTree(), !UU.empty) {
          let RU = [];
          if (UU.iterChangedRanges(((UU, gU, tU, pU) => RU.push({
              fromA: UU,
              toA: gU,
              fromB: tU,
              toB: pU
            }))), gU = pU.s.applyChanges(gU, RU), tU = pU.v.empty, EU = 0, PU = {
              from: UU.mapPos(PU.from, -1),
              to: UU.mapPos(PU.to, 1)
            }, this.skipped.length) {
            TU = [];
            for (let RU of this.skipped) {
              let gU = UU.mapPos(RU.from, 1),
                tU = UU.mapPos(RU.to, -1);
              gU < tU && TU.push({
                from: gU,
                to: tU
              })
            }
          }
        }
        return new xU(this.parser, RU, gU, tU, EU, PU, TU, this.scheduleOn)
      }
      updateViewport(UU) {
        if (this.viewport.from == UU.from && this.viewport.to == UU.to) return !1;
        this.viewport = UU;
        let RU = this.skipped.length;
        for (let gU = 0; gU < this.skipped.length; gU++) {
          let {
            from: RU,
            to: tU
          } = this.skipped[gU];
          RU < UU.to && tU > UU.from && (this.fragments = mU(this.fragments, RU, tU), this.skipped.splice(gU--, 1))
        }
        return !(this.skipped.length >= RU) && (this.reset(), !0)
      }
      reset() {
        this.parse && (this.takeTree(), this.parse = null)
      }
      skipUntilInView(UU, RU) {
        this.skipped.push({
          from: UU,
          to: RU
        })
      }
      static getSkippingParser(UU) {
        return new class extends pU.q {
          createParse(RU, gU, tU) {
            let EU = tU[0].from,
              PU = tU[tU.length - 1].to;
            return {
              parsedPos: EU,
              advance() {
                let RU = fU;
                if (RU) {
                  for (let UU of tU) RU.tempSkipped.push(UU);
                  UU && (RU.scheduleOn = RU.scheduleOn ? Promise.all([RU.scheduleOn, UU]) : UU)
                }
                return this.parsedPos = PU, new pU.v(pU.l.none, [], [], PU - EU)
              },
              stoppedAt: null,
              stopAt() {}
            }
          }
        }
      }
      isDone(UU) {
        UU = Math.min(UU, this.state.doc.length);
        let RU = this.fragments;
        return this.treeLen >= UU && RU.length && 0 == RU[0].from && RU[0].to >= UU
      }
      static get() {
        return fU
      }
    }

    function mU(UU, RU, gU) {
      return pU.s.applyChanges(UU, [{
        fromA: RU,
        toA: gU,
        fromB: RU,
        toB: gU
      }])
    }
    class IU {
      constructor(UU) {
        this.context = UU, this.tree = UU.tree
      }
      apply(UU) {
        if (!UU.docChanged && this.tree == this.context.tree) return this;
        let RU = this.context.changes(UU.changes, UU.state),
          gU = this.context.treeLen == UU.startState.doc.length ? void 0 : Math.max(UU.changes.mapPos(this.context.treeLen), RU.viewport.to);
        return RU.work(20, gU) || RU.takeTree(), new IU(RU)
      }
      static init(UU) {
        let RU = Math.min(3e3, UU.doc.length),
          gU = xU.create(UU.facet(bU).parser, UU, {
            from: 0,
            to: RU
          });
        return gU.work(20, RU) || gU.takeTree(), new IU(gU)
      }
    }
    jU.state = EU.C.define({
      create: IU.init,
      update(UU, RU) {
        for (let gU of RU.effects)
          if (gU.is(jU.setState)) return gU.value;
        return RU.startState.facet(bU) != RU.state.facet(bU) ? IU.init(RU.state) : UU.apply(RU)
      }
    });
    let JU = UU => {
      let RU = setTimeout((() => UU()), 500);
      return () => clearTimeout(RU)
    };
    "undefined" != typeof requestIdleCallback && (JU = UU => {
      let RU = -1,
        gU = setTimeout((() => {
          RU = requestIdleCallback(UU, {
            timeout: 400
          })
        }), 100);
      return () => RU < 0 ? clearTimeout(gU) : cancelIdleCallback(RU)
    });
    const wU = "undefined" != typeof navigator && (null === (tU = navigator.scheduling) || void 0 === tU ? void 0 : tU.isInputPending) ? () => navigator.scheduling.isInputPending() : null,
      nU = PU.l.fromClass(class {
        constructor(UU) {
          this.view = UU, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork()
        }
        update(UU) {
          let RU = this.view.state.field(jU.state).context;
          (RU.updateViewport(UU.view.viewport) || this.view.viewport.to > RU.treeLen) && this.scheduleWork(), (UU.docChanged || UU.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(RU)
        }
        scheduleWork() {
          if (this.working) return;
          let {
            state: UU
          } = this.view, RU = UU.field(jU.state);
          RU.tree == RU.context.tree && RU.context.isDone(UU.doc.length) || (this.working = JU(this.work))
        }
        work(UU) {
          this.working = null;
          let RU = Date.now();
          if (this.chunkEnd < RU && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = RU + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
          let {
            state: gU,
            viewport: {
              to: tU
            }
          } = this.view, pU = gU.field(jU.state);
          if (pU.tree == pU.context.tree && pU.context.isDone(tU + 1e5)) return;
          let EU = Date.now() + Math.min(this.chunkBudget, 100, UU && !wU ? Math.max(25, UU.timeRemaining() - 5) : 1e9),
            PU = pU.context.treeLen < tU && gU.doc.length > tU + 1e3,
            TU = pU.context.work((() => wU && wU() || Date.now() > EU), tU + (PU ? 0 : 1e5));
          this.chunkBudget -= Date.now() - RU, (TU || this.chunkBudget <= 0) && (pU.context.takeTree(), this.view.dispatch({
            effects: jU.setState.of(new IU(pU.context))
          })), this.chunkBudget > 0 && (!TU || PU) && this.scheduleWork(), this.checkAsyncSchedule(pU.context)
        }
        checkAsyncSchedule(UU) {
          UU.scheduleOn && (this.workScheduled++, UU.scheduleOn.then((() => this.scheduleWork())).catch((UU => (0, PU.Q)(this.view.state, UU))).then((() => this.workScheduled--)), UU.scheduleOn = null)
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
      bU = EU.p.define({
        combine: UU => UU.length ? UU[0] : null,
        enables: UU => [jU.state, nU, PU.h.contentAttributes.compute([UU], (RU => {
          let gU = RU.facet(UU);
          return gU && gU.name ? {
            "data-language": gU.name
          } : {}
        }))]
      });
    class oU {
      constructor(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        this.language = UU, this.support = RU, this.extension = [UU, RU]
      }
    }
    const ZU = EU.p.define(),
      aU = EU.p.define({
        combine: UU => {
          if (!UU.length) return "  ";
          let RU = UU[0];
          if (!RU || /\S/.test(RU) || Array.from(RU).some((UU => UU != RU[0]))) throw new Error("Invalid indent unit: " + JSON.stringify(UU[0]));
          return RU
        }
      });

    function YU(UU) {
      let RU = UU.facet(aU);
      return 9 == RU.charCodeAt(0) ? UU.tabSize * RU.length : RU.length
    }

    function BU(UU, RU) {
      let gU = "",
        tU = UU.tabSize,
        pU = UU.facet(aU)[0];
      if ("\t" == pU) {
        for (; RU >= tU;) gU += "\t", RU -= tU;
        pU = " "
      }
      for (let EU = 0; EU < RU; EU++) gU += pU;
      return gU
    }

    function VU(UU, RU) {
      UU instanceof EU.n && (UU = new rU(UU));
      for (let tU of UU.state.facet(ZU)) {
        let gU = tU(UU, RU);
        if (void 0 !== gU) return gU
      }
      let gU = hU(UU.state);
      return gU.length >= RU ? function(UU, RU, gU) {
        let tU = RU.resolveStack(gU),
          pU = RU.resolveInner(gU, -1).resolve(gU, 0).enterUnfinishedNodesBefore(gU);
        if (pU != tU.node) {
          let UU = [];
          for (let RU = pU; RU && !(RU.from < tU.node.from || RU.to > tU.node.to || RU.from == tU.node.from && RU.type == tU.node.type); RU = RU.parent) UU.push(RU);
          for (let RU = UU.length - 1; RU >= 0; RU--) tU = {
            node: UU[RU],
            next: tU
          }
        }
        return vU(tU, UU, gU)
      }(UU, gU, RU) : null
    }
    class rU {
      constructor(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.state = UU, this.options = RU, this.unit = YU(UU)
      }
      lineAt(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          gU = this.state.doc.lineAt(UU),
          {
            simulateBreak: tU,
            simulateDoubleBreak: pU
          } = this.options;
        return null != tU && tU >= gU.from && tU <= gU.to ? pU && tU == UU ? {
          text: "",
          from: UU
        } : (RU < 0 ? tU < UU : tU <= UU) ? {
          text: gU.text.slice(tU - gU.from),
          from: tU
        } : {
          text: gU.text.slice(0, tU - gU.from),
          from: gU.from
        } : gU
      }
      textAfterPos(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (this.options.simulateDoubleBreak && UU == this.options.simulateBreak) return "";
        let {
          text: gU,
          from: tU
        } = this.lineAt(UU, RU);
        return gU.slice(UU - tU, Math.min(gU.length, UU + 100 - tU))
      }
      column(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: gU,
            from: tU
          } = this.lineAt(UU, RU),
          pU = this.countColumn(gU, UU - tU),
          EU = this.options.overrideIndentation ? this.options.overrideIndentation(tU) : -1;
        return EU > -1 && (pU += EU - this.countColumn(gU, gU.search(/\S|$/))), pU
      }
      countColumn(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UU.length;
        return (0, EU.R)(UU, this.state.tabSize, RU)
      }
      lineIndent(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: gU,
            from: tU
          } = this.lineAt(UU, RU),
          pU = this.options.overrideIndentation;
        if (pU) {
          let UU = pU(tU);
          if (UU > -1) return UU
        }
        return this.countColumn(gU, gU.search(/\S|$/))
      }
      get simulatedBreak() {
        return this.options.simulateBreak || null
      }
    }
    const XU = new pU.i;

    function vU(UU, RU, gU) {
      for (let tU = UU; tU; tU = tU.next) {
        let UU = dU(tU.node);
        if (UU) return UU(SU.create(RU, gU, tU))
      }
      return 0
    }

    function dU(UU) {
      let RU = UU.type.prop(XU);
      if (RU) return RU;
      let gU, tU = UU.firstChild;
      if (tU && (gU = tU.type.prop(pU.i.closedBy))) {
        let RU = UU.lastChild,
          tU = RU && gU.indexOf(RU.name) > -1;
        return UU => kU(UU, !0, 1, void 0, tU && ! function(UU) {
          return UU.pos == UU.options.simulateBreak && UU.options.simulateDoubleBreak
        }(UU) ? RU.from : void 0)
      }
      return null == UU.parent ? HU : null
    }

    function HU() {
      return 0
    }
    class SU extends rU {
      constructor(UU, RU, gU) {
        super(UU.state, UU.options), this.base = UU, this.pos = RU, this.context = gU
      }
      get node() {
        return this.context.node
      }
      static create(UU, RU, gU) {
        return new SU(UU, RU, gU)
      }
      get textAfter() {
        return this.textAfterPos(this.pos)
      }
      get baseIndent() {
        return this.baseIndentFor(this.node)
      }
      baseIndentFor(UU) {
        let RU = this.state.doc.lineAt(UU.from);
        for (;;) {
          let gU = UU.resolve(RU.from);
          for (; gU.parent && gU.parent.from == gU.from;) gU = gU.parent;
          if (sU(gU, UU)) break;
          RU = this.state.doc.lineAt(gU.from)
        }
        return this.lineIndent(RU.from)
      }
      continue () {
        return vU(this.context.next, this.base, this.pos)
      }
    }

    function sU(UU, RU) {
      for (let gU = RU; gU; gU = gU.parent)
        if (UU == gU) return !0;
      return !1
    }

    function yU(UU) {
      let {
        closing: RU,
        align: gU = !0,
        units: tU = 1
      } = UU;
      return UU => kU(UU, gU, tU, RU)
    }

    function kU(UU, RU, gU, tU, pU) {
      let EU = UU.textAfter,
        PU = EU.match(/^\s*/)[0].length,
        TU = tU && EU.slice(PU, PU + tU.length) == tU || pU == UU.pos + PU,
        qU = RU ? function(UU) {
          let RU = UU.node,
            gU = RU.childAfter(RU.from),
            tU = RU.lastChild;
          if (!gU) return null;
          let pU = UU.options.simulateBreak,
            EU = UU.state.doc.lineAt(gU.from),
            PU = null == pU || pU <= EU.from ? EU.to : Math.min(EU.to, pU);
          for (let TU = gU.to;;) {
            let UU = RU.childAfter(TU);
            if (!UU || UU == tU) return null;
            if (!UU.type.isSkipped) {
              if (UU.from >= PU) return null;
              let RU = /^ */.exec(EU.text.slice(gU.to - EU.from))[0].length;
              return {
                from: gU.from,
                to: gU.to + RU
              }
            }
            TU = UU.to
          }
        }(UU) : null;
      return qU ? TU ? UU.column(qU.from) : UU.column(qU.to) : UU.baseIndent + (TU ? 0 : UU.unit * gU)
    }
    const FU = UU => UU.baseIndent;

    function iU() {
      let {
        except: UU,
        units: RU = 1
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return gU => {
        let tU = UU && UU.test(gU.textAfter);
        return gU.baseIndent + (tU ? 0 : RU * gU.unit)
      }
    }
    const AU = 200;

    function zU() {
      return EU.n.transactionFilter.of((UU => {
        if (!UU.docChanged || !UU.isUserEvent("input.type") && !UU.isUserEvent("input.complete")) return UU;
        let RU = UU.startState.languageDataAt("indentOnInput", UU.startState.selection.main.head);
        if (!RU.length) return UU;
        let gU = UU.newDoc,
          {
            head: tU
          } = UU.newSelection.main,
          pU = gU.lineAt(tU);
        if (tU > pU.from + AU) return UU;
        let EU = gU.sliceString(pU.from, tU);
        if (!RU.some((UU => UU.test(EU)))) return UU;
        let {
          state: PU
        } = UU, TU = -1, qU = [];
        for (let {
            head: KU
          }
          of PU.selection.hu) {
          let UU = PU.doc.lineAt(KU);
          if (UU.from == TU) continue;
          TU = UU.from;
          let RU = VU(PU, UU.from);
          if (null == RU) continue;
          let gU = /^\s*/.exec(UU.text)[0],
            tU = BU(PU, RU);
          gU != tU && qU.push({
            from: UU.from,
            to: UU.from + gU.length,
            insert: tU
          })
        }
        return qU.length ? [UU, {
          changes: qU,
          sequential: !0
        }] : UU
      }))
    }
    const MU = EU.p.define(),
      DU = new pU.i;

    function LU(UU) {
      let RU = UU.firstChild,
        gU = UU.lastChild;
      return RU && RU.to < gU.from ? {
        from: RU.to,
        to: gU.type.isError ? UU.to : gU.from
      } : null
    }

    function NU(UU) {
      let RU = UU.lastChild;
      return RU && RU.to == UU.to && RU.type.isError
    }

    function lU(UU, RU, gU) {
      for (let tU of UU.facet(MU)) {
        let pU = tU(UU, RU, gU);
        if (pU) return pU
      }
      return function(UU, RU, gU) {
        let tU = hU(UU);
        if (tU.length < gU) return null;
        let pU = null;
        for (let EU = tU.resolveStack(gU, 1); EU; EU = EU.next) {
          let PU = EU.node;
          if (PU.to <= gU || PU.from > gU) continue;
          if (pU && PU.from < RU) break;
          let TU = PU.type.prop(DU);
          if (TU && (PU.to < tU.length - 50 || tU.length == UU.doc.length || !NU(PU))) {
            let tU = TU(PU, UU);
            tU && tU.from <= gU && tU.from >= RU && tU.to > gU && (pU = tU)
          }
        }
        return pU
      }(UU, RU, gU)
    }

    function OU(UU, RU) {
      let gU = RU.mapPos(UU.from, 1),
        tU = RU.mapPos(UU.to, -1);
      return gU >= tU ? void 0 : {
        from: gU,
        to: tU
      }
    }
    const UR = EU.A.define({
        map: OU
      }),
      RR = EU.A.define({
        map: OU
      });

    function gR(UU) {
      let RU = [];
      for (let {
          head: gU
        }
        of UU.state.selection.hu) RU.some((UU => UU.from <= gU && UU.to >= gU)) || RU.push(UU.lineBlockAt(gU));
      return RU
    }
    const tR = EU.C.define({
      create: () => PU.b.none,
      update(UU, RU) {
        RU.isUserEvent("delete") && RU.changes.iterChangedRanges(((RU, gU) => UU = pR(UU, RU, gU))), UU = UU.map(RU.changes);
        for (let gU of RU.effects)
          if (gU.is(UR) && !PR(UU, gU.value.from, gU.value.to)) {
            let {
              preparePlaceholder: tU
            } = RU.state.facet(GR), pU = tU ? PU.b.replace({
              widget: new hR(tU(RU.state, gU.value))
            }) : CR;
            UU = UU.update({
              add: [pU.range(gU.value.from, gU.value.to)]
            })
          } else gU.is(RR) && (UU = UU.update({
            filter: (UU, RU) => gU.value.from != UU || gU.value.to != RU,
            filterFrom: gU.value.from,
            filterTo: gU.value.to
          }));
        return RU.selection && (UU = pR(UU, RU.selection.main.head)), UU
      },
      provide: UU => PU.h.Yt.from(UU),
      toJSON(UU, RU) {
        let gU = [];
        return UU.between(0, RU.doc.length, ((UU, RU) => {
          gU.push(UU, RU)
        })), gU
      },
      fromJSON(UU) {
        if (!Array.isArray(UU) || UU.length % 2) throw new RangeError("Invalid JSON for fold state");
        let RU = [];
        for (let gU = 0; gU < UU.length;) {
          let tU = UU[gU++],
            pU = UU[gU++];
          if ("number" != typeof tU || "number" != typeof pU) throw new RangeError("Invalid JSON for fold state");
          RU.push(CR.range(tU, pU))
        }
        return PU.b.set(RU, !0)
      }
    });

    function pR(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : RU,
        tU = !1;
      return UU.between(RU, gU, ((UU, pU) => {
        UU < gU && pU > RU && (tU = !0)
      })), tU ? UU.update({
        filterFrom: RU,
        filterTo: gU,
        filter: (UU, tU) => UU >= gU || tU <= RU
      }) : UU
    }

    function ER(UU, RU, gU) {
      var tU;
      let pU = null;
      return null === (tU = UU.field(tR, !1)) || void 0 === tU || tU.between(RU, gU, ((UU, RU) => {
        (!pU || pU.from > UU) && (pU = {
          from: UU,
          to: RU
        })
      })), pU
    }

    function PR(UU, RU, gU) {
      let tU = !1;
      return UU.between(RU, RU, ((UU, pU) => {
        UU == RU && pU == gU && (tU = !0)
      })), tU
    }

    function TR(UU, RU) {
      return UU.field(tR, !1) ? RU : RU.concat(EU.A.appendConfig.of(jR()))
    }

    function qR(UU, RU) {
      let gU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        tU = UU.state.doc.lineAt(RU.from).number,
        pU = UU.state.doc.lineAt(RU.to).number;
      return PU.h.announce.of(`${UU.state.phrase(gU?"Folded lines":"Unfolded lines")} ${tU} ${UU.state.phrase("to")} ${pU}.`)
    }
    const KR = [{
        key: "Ctrl-Shift-[",
        mac: "Cmd-Alt-[",
        run: UU => {
          for (let RU of gR(UU)) {
            let gU = lU(UU.state, RU.from, RU.to);
            if (gU) return UU.dispatch({
              effects: TR(UU.state, [UR.of(gU), qR(UU, gU)])
            }), !0
          }
          return !1
        }
      }, {
        key: "Ctrl-Shift-]",
        mac: "Cmd-Alt-]",
        run: UU => {
          if (!UU.state.field(tR, !1)) return !1;
          let RU = [];
          for (let gU of gR(UU)) {
            let tU = ER(UU.state, gU.from, gU.to);
            tU && RU.push(RR.of(tU), qR(UU, tU, !1))
          }
          return RU.length && UU.dispatch({
            effects: RU
          }), RU.length > 0
        }
      }, {
        key: "Ctrl-Alt-[",
        run: UU => {
          let {
            state: RU
          } = UU, gU = [];
          for (let tU = 0; tU < RU.doc.length;) {
            let pU = UU.lineBlockAt(tU),
              EU = lU(RU, pU.from, pU.to);
            EU && gU.push(UR.of(EU)), tU = (EU ? UU.lineBlockAt(EU.to) : pU).to + 1
          }
          return gU.length && UU.dispatch({
            effects: TR(UU.state, gU)
          }), !!gU.length
        }
      }, {
        key: "Ctrl-Alt-]",
        run: UU => {
          let RU = UU.state.field(tR, !1);
          if (!RU || !RU.size) return !1;
          let gU = [];
          return RU.between(0, UU.state.doc.length, ((UU, RU) => {
            gU.push(RR.of({
              from: UU,
              to: RU
            }))
          })), UU.dispatch({
            effects: gU
          }), !0
        }
      }],
      cR = {
        placeholderDOM: null,
        preparePlaceholder: null,
        placeholderText: "\u2026"
      },
      GR = EU.p.define({
        combine: UU => (0, EU.N)(UU, cR)
      });

    function jR(UU) {
      let RU = [tR, fR];
      return UU && RU.push(GR.of(UU)), RU
    }

    function uR(UU, RU) {
      let {
        state: gU
      } = UU, tU = gU.facet(GR), pU = RU => {
        let gU = UU.lineBlockAt(UU.posAtDOM(RU.target)),
          tU = ER(UU.state, gU.from, gU.to);
        tU && UU.dispatch({
          effects: RR.of(tU)
        }), RU.preventDefault()
      };
      if (tU.placeholderDOM) return tU.placeholderDOM(UU, pU, RU);
      let EU = document.createElement("span");
      return EU.textContent = tU.placeholderText, EU.setAttribute("aria-label", gU.phrase("folded code")), EU.title = gU.phrase("unfold"), EU.className = "cm-foldPlaceholder", EU.onclick = pU, EU
    }
    const CR = PU.b.replace({
      widget: new class extends PU.o {
        toDOM(UU) {
          return uR(UU, null)
        }
      }
    });
    class hR extends PU.o {
      constructor(UU) {
        super(), this.value = UU
      }
      eq(UU) {
        return this.value == UU.value
      }
      toDOM(UU) {
        return uR(UU, this.value)
      }
    }
    const QR = {
      openText: "\u2304",
      closedText: "\u203a",
      markerDOM: null,
      domEventHandlers: {},
      foldingChanged: () => !1
    };
    class eR extends PU.k {
      constructor(UU, RU) {
        super(), this.config = UU, this.open = RU
      }
      eq(UU) {
        return this.config == UU.config && this.open == UU.open
      }
      toDOM(UU) {
        if (this.config.markerDOM) return this.config.markerDOM(this.open);
        let RU = document.createElement("span");
        return RU.textContent = this.open ? this.config.openText : this.config.closedText, RU.title = UU.state.phrase(this.open ? "Fold line" : "Unfold line"), RU
      }
    }

    function WR() {
      let UU = {
          ...QR,
          ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        },
        RU = new eR(UU, !0),
        gU = new eR(UU, !1),
        tU = PU.l.fromClass(class {
          constructor(UU) {
            this.from = UU.viewport.from, this.markers = this.buildMarkers(UU)
          }
          update(RU) {
            (RU.docChanged || RU.viewportChanged || RU.startState.facet(bU) != RU.state.facet(bU) || RU.startState.field(tR, !1) != RU.state.field(tR, !1) || hU(RU.startState) != hU(RU.state) || UU.foldingChanged(RU)) && (this.markers = this.buildMarkers(RU.view))
          }
          buildMarkers(UU) {
            let tU = new EU.t;
            for (let pU of UU.viewportLineBlocks) {
              let EU = ER(UU.state, pU.from, pU.to) ? gU : lU(UU.state, pU.from, pU.to) ? RU : null;
              EU && tU.add(pU.from, pU.from, EU)
            }
            return tU.finish()
          }
        }),
        {
          domEventHandlers: pU
        } = UU;
      return [tU, (0, PU.E)({
        class: "cm-foldGutter",
        markers(UU) {
          var RU;
          return (null === (RU = UU.plugin(tU)) || void 0 === RU ? void 0 : RU.markers) || EU.v.empty
        },
        initialSpacer: () => new eR(UU, !1),
        domEventHandlers: {
          ...pU,
          click: (UU, RU, gU) => {
            if (pU.click && pU.click(UU, RU, gU)) return !0;
            let tU = ER(UU.state, RU.from, RU.to);
            if (tU) return UU.dispatch({
              effects: RR.of(tU)
            }), !0;
            let EU = lU(UU.state, RU.from, RU.to);
            return !!EU && (UU.dispatch({
              effects: UR.of(EU)
            }), !0)
          }
        }
      }), jR()]
    }
    const fR = PU.h.baseTheme({
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
    class xR {
      constructor(UU, RU) {
        let gU;

        function tU(UU) {
          let RU = qU.d.newName();
          return (gU || (gU = Object.create(null)))["." + RU] = UU, RU
        }
        this.specs = UU;
        const pU = "string" == typeof RU.all ? RU.all : RU.all ? tU(RU.all) : void 0,
          EU = RU.scope;
        this.scope = EU instanceof jU ? UU => UU.prop(KU) == EU.data : EU ? UU => UU == EU : void 0, this.style = (0, TU.g)(UU.map((UU => ({
          tag: UU.tag,
          class: UU.class || tU(Object.assign({}, UU, {
            tag: null
          }))
        }))), {
          all: pU
        }).style, this.module = gU ? new qU.d(gU) : null, this.themeType = RU.themeType
      }
      static define(UU, RU) {
        return new xR(UU, RU || {})
      }
    }
    const mR = EU.p.define(),
      IR = EU.p.define({
        combine: UU => UU.length ? [UU[0]] : null
      });

    function JR(UU) {
      let RU = UU.facet(mR);
      return RU.length ? RU : UU.facet(IR)
    }

    function wR(UU, RU) {
      let gU, tU = [bR];
      return UU instanceof xR && (UU.module && tU.push(PU.h.styleModule.of(UU.module)), gU = UU.themeType), (null === RU || void 0 === RU ? void 0 : RU.fallback) ? tU.push(IR.of(UU)) : gU ? tU.push(mR.computeN([PU.h.darkTheme], (RU => RU.facet(PU.h.darkTheme) == ("dark" == gU) ? [UU] : []))) : tU.push(mR.of(UU)), tU
    }
    class nR {
      constructor(UU) {
        this.markCache = Object.create(null), this.tree = hU(UU.state), this.Yt = this.buildDeco(UU, JR(UU.state)), this.decoratedTo = UU.viewport.to
      }
      update(UU) {
        let RU = hU(UU.state),
          gU = JR(UU.state),
          tU = gU != JR(UU.startState),
          {
            viewport: pU
          } = UU.view,
          EU = UU.changes.mapPos(this.decoratedTo, 1);
        RU.length < pU.to && !tU && RU.type == this.tree.type && EU >= pU.to ? (this.Yt = this.Yt.map(UU.changes), this.decoratedTo = EU) : (RU != this.tree || UU.viewportChanged || tU) && (this.tree = RU, this.Yt = this.buildDeco(UU.view, gU), this.decoratedTo = pU.to)
      }
      buildDeco(UU, RU) {
        if (!RU || !this.tree.length) return PU.b.none;
        let gU = new EU.t;
        for (let {
            from: tU,
            to: pU
          }
          of UU.h_)(0, TU.c)(this.tree, RU, ((UU, RU, tU) => {
          gU.add(UU, RU, this.markCache[tU] || (this.markCache[tU] = PU.b.mark({
            class: tU
          })))
        }), tU, pU);
        return gU.finish()
      }
    }
    const bR = EU.s.high(PU.l.fromClass(nR, {
        Yt: UU => UU.Yt
      })),
      oR = xR.define([{
        tag: TU.j.meta,
        color: "#404740"
      }, {
        tag: TU.j.link,
        textDecoration: "underline"
      }, {
        tag: TU.j.heading,
        textDecoration: "underline",
        fontWeight: "bold"
      }, {
        tag: TU.j.emphasis,
        fontStyle: "italic"
      }, {
        tag: TU.j.strong,
        fontWeight: "bold"
      }, {
        tag: TU.j.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: TU.j.keyword,
        color: "#708"
      }, {
        tag: [TU.j.atom, TU.j.bool, TU.j.url, TU.j.contentSeparator, TU.j.labelName],
        color: "#219"
      }, {
        tag: [TU.j.literal, TU.j.inserted],
        color: "#164"
      }, {
        tag: [TU.j.string, TU.j.deleted],
        color: "#a11"
      }, {
        tag: [TU.j.regexp, TU.j.escape, TU.j.special(TU.j.string)],
        color: "#e40"
      }, {
        tag: TU.j.definition(TU.j.variableName),
        color: "#00f"
      }, {
        tag: TU.j.local(TU.j.variableName),
        color: "#30a"
      }, {
        tag: [TU.j.typeName, TU.j.namespace],
        color: "#085"
      }, {
        tag: TU.j.className,
        color: "#167"
      }, {
        tag: [TU.j.special(TU.j.variableName), TU.j.macroName],
        color: "#256"
      }, {
        tag: TU.j.definition(TU.j.propertyName),
        color: "#00c"
      }, {
        tag: TU.j.comment,
        color: "#940"
      }, {
        tag: TU.j.invalid,
        color: "#f00"
      }]),
      ZR = PU.h.baseTheme({
        "&.cm-focused .cm-matchingBracket": {
          backgroundColor: "#328c8252"
        },
        "&.cm-focused .cm-nonmatchingBracket": {
          backgroundColor: "#bb555544"
        }
      }),
      aR = 1e4,
      YR = "()[]{}",
      BR = EU.p.define({
        combine: UU => (0, EU.N)(UU, {
          afterCursor: !0,
          brackets: YR,
          maxScanDistance: aR,
          renderMatch: XR
        })
      }),
      VR = PU.b.mark({
        class: "cm-matchingBracket"
      }),
      rR = PU.b.mark({
        class: "cm-nonmatchingBracket"
      });

    function XR(UU) {
      let RU = [],
        gU = UU.matched ? VR : rR;
      return RU.push(gU.range(UU.start.from, UU.start.to)), UU.end && RU.push(gU.range(UU.end.from, UU.end.to)), RU
    }

    function vR(UU) {
      let RU = [],
        gU = UU.facet(BR);
      for (let tU of UU.selection.hu) {
        if (!tU.empty) continue;
        let pU = kR(UU, tU.head, -1, gU) || tU.head > 0 && kR(UU, tU.head - 1, 1, gU) || gU.afterCursor && (kR(UU, tU.head, 1, gU) || tU.head < UU.doc.length && kR(UU, tU.head + 1, -1, gU));
        pU && (RU = RU.concat(gU.renderMatch(pU, UU)))
      }
      return PU.b.set(RU, !0)
    }
    const dR = [PU.l.fromClass(class {
      constructor(UU) {
        this.paused = !1, this.Yt = vR(UU.state)
      }
      update(UU) {
        (UU.docChanged || UU.selectionSet || this.paused) && (UU.view.composing ? (this.Yt = this.Yt.map(UU.changes), this.paused = !0) : (this.Yt = vR(UU.state), this.paused = !1))
      }
    }, {
      Yt: UU => UU.Yt
    }), ZR];

    function HR() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [BR.of(UU), dR]
    }
    const SR = new pU.i;

    function sR(UU, RU, gU) {
      let tU = UU.prop(RU < 0 ? pU.i.openedBy : pU.i.closedBy);
      if (tU) return tU;
      if (1 == UU.name.length) {
        let tU = gU.indexOf(UU.name);
        if (tU > -1 && tU % 2 == (RU < 0 ? 1 : 0)) return [gU[tU + RU]]
      }
      return null
    }

    function yR(UU) {
      let RU = UU.type.prop(SR);
      return RU ? RU(UU.node) : UU
    }

    function kR(UU, RU, gU) {
      let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        pU = tU.maxScanDistance || aR,
        EU = tU.brackets || YR,
        PU = hU(UU),
        TU = PU.resolveInner(RU, gU);
      for (let qU = TU; qU; qU = qU.parent) {
        let tU = sR(qU.type, gU, EU);
        if (tU && qU.from < qU.to) {
          let pU = yR(qU);
          if (pU && (gU > 0 ? RU >= pU.from && RU < pU.to : RU > pU.from && RU <= pU.to)) return FR(UU, RU, gU, qU, pU, tU, EU)
        }
      }
      return function(UU, RU, gU, tU, pU, EU, PU) {
        if (gU < 0 ? !RU : RU == UU.doc.length) return null;
        let TU = gU < 0 ? UU.sliceDoc(RU - 1, RU) : UU.sliceDoc(RU, RU + 1),
          qU = PU.indexOf(TU);
        if (qU < 0 || qU % 2 == 0 != gU > 0) return null;
        let KU = {
            from: gU < 0 ? RU - 1 : RU,
            to: gU > 0 ? RU + 1 : RU
          },
          cU = UU.doc.iterRange(RU, gU > 0 ? UU.doc.length : 0),
          GU = 0;
        for (let jU = 0; !cU.next().done && jU <= EU;) {
          let UU = cU.value;
          gU < 0 && (jU += UU.length);
          let EU = RU + jU * gU;
          for (let RU = gU > 0 ? 0 : UU.length - 1, TU = gU > 0 ? UU.length : -1; RU != TU; RU += gU) {
            let TU = PU.indexOf(UU[RU]);
            if (!(TU < 0 || tU.resolveInner(EU + RU, 1).type != pU))
              if (TU % 2 == 0 == gU > 0) GU++;
              else {
                if (1 == GU) return {
                  start: KU,
                  end: {
                    from: EU + RU,
                    to: EU + RU + 1
                  },
                  matched: TU >> 1 == qU >> 1
                };
                GU--
              }
          }
          gU > 0 && (jU += UU.length)
        }
        return cU.done ? {
          start: KU,
          matched: !1
        } : null
      }(UU, RU, gU, PU, TU.type, pU, EU)
    }

    function FR(UU, RU, gU, tU, pU, EU, PU) {
      let TU = tU.parent,
        qU = {
          from: pU.from,
          to: pU.to
        },
        KU = 0,
        cU = null === TU || void 0 === TU ? void 0 : TU.cursor();
      if (cU && (gU < 0 ? cU.childBefore(tU.from) : cU.childAfter(tU.to)))
        do {
          if (gU < 0 ? cU.to <= tU.from : cU.from >= tU.to) {
            if (0 == KU && EU.indexOf(cU.type.name) > -1 && cU.from < cU.to) {
              let UU = yR(cU);
              return {
                start: qU,
                end: UU ? {
                  from: UU.from,
                  to: UU.to
                } : void 0,
                matched: !0
              }
            }
            if (sR(cU.type, gU, PU)) KU++;
            else if (sR(cU.type, -gU, PU)) {
              if (0 == KU) {
                let UU = yR(cU);
                return {
                  start: qU,
                  end: UU && UU.from < UU.to ? {
                    from: UU.from,
                    to: UU.to
                  } : void 0,
                  matched: !1
                }
              }
              KU--
            }
          }
        } while (gU < 0 ? cU.prevSibling() : cU.nextSibling());
      return {
        start: qU,
        matched: !1
      }
    }
    const iR = Object.create(null),
      AR = [pU.l.none],
      zR = [],
      MR = Object.create(null),
      DR = Object.create(null);
    for (let [lR, OR] of [
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
      ]) DR[lR] = NR(iR, OR);

    function LR(UU, RU) {
      zR.indexOf(UU) > -1 || (zR.push(UU), console.warn(RU))
    }

    function NR(UU, RU) {
      let gU = [];
      for (let pU of RU.split(" ")) {
        let RU = [];
        for (let gU of pU.split(".")) {
          let tU = UU[gU] || TU.j[gU];
          tU ? "function" == typeof tU ? RU.length ? RU = RU.map(tU) : LR(gU, `Modifier ${gU} used at start of tag`) : RU.length ? LR(gU, `Tag ${gU} used as modifier`) : RU = Array.isArray(tU) ? tU : [tU] : LR(gU, `Unknown highlighting tag ${gU}`)
        }
        for (let UU of RU) gU.push(UU)
      }
      if (!gU.length) return 0;
      let tU = RU.replace(/ /g, "_"),
        EU = tU + " " + gU.map((UU => UU.id)),
        PU = MR[EU];
      if (PU) return PU.id;
      let qU = MR[EU] = pU.l.define({
        id: AR.length,
        name: tU,
        props: [(0, TU.e)({
          [tU]: gU
        })]
      });
      return AR.push(qU), qU.id
    }
    PU.d.RTL, PU.d.LTR
  },
  40763: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => fU,
      f: () => JU
    });
    var tU = gU(40707),
      pU = gU(40700),
      EU = gU(40719);
    class PU {
      constructor(UU, RU, gU) {
        this.from = UU, this.to = RU, this.diagnostic = gU
      }
    }
    class TU {
      constructor(UU, RU, gU) {
        this.diagnostics = UU, this.panel = RU, this.selected = gU
      }
      static init(UU, RU, gU) {
        let EU = gU.facet(mU).markerFilter;
        EU && (UU = EU(UU, gU));
        let PU = UU.slice().sort(((UU, RU) => UU.from - RU.from || UU.to - RU.to)),
          KU = new pU.t,
          cU = [],
          GU = 0,
          jU = gU.doc.iter(),
          uU = 0,
          CU = gU.doc.length;
        for (let pU = 0;;) {
          let UU, RU, gU = pU == PU.length ? null : PU[pU];
          if (!gU && !cU.length) break;
          if (cU.length) UU = GU, RU = cU.reduce(((UU, RU) => Math.min(UU, RU.to)), gU && gU.from > UU ? gU.from : 1e8);
          else {
            if (UU = gU.from, UU > CU) break;
            RU = gU.to, cU.push(gU), pU++
          }
          for (; pU < PU.length;) {
            let gU = PU[pU];
            if (gU.from != UU || !(gU.to > gU.from || gU.to == UU)) {
              RU = Math.min(gU.from, RU);
              break
            }
            cU.push(gU), pU++, RU = Math.min(gU.to, RU)
          }
          RU = Math.min(RU, CU);
          let EU = !1;
          if (cU.some((gU => gU.from == UU && (gU.to == RU || RU == CU))) && (EU = UU == RU, !EU && RU - UU < 10)) {
            let gU = UU - (uU + jU.value.length);
            gU > 0 && (jU.next(gU), uU = UU);
            for (let tU = UU;;) {
              if (tU >= RU) {
                EU = !0;
                break
              }
              if (!jU.lineBreak && uU + jU.value.length > tU) break;
              tU = uU + jU.value.length, uU += jU.value.length, jU.next()
            }
          }
          let TU = rU(cU);
          if (EU) KU.add(UU, UU, tU.b.widget({
            widget: new bU(TU),
            diagnostics: cU.slice()
          }));
          else {
            let gU = cU.reduce(((UU, RU) => RU.markClass ? UU + " " + RU.markClass : UU), "");
            KU.add(UU, RU, tU.b.mark({
              class: "cm-lintRange cm-lintRange-" + TU + gU,
              diagnostics: cU.slice(),
              inclusiveEnd: cU.some((UU => UU.to > RU))
            }))
          }
          if (GU = RU, GU == CU) break;
          for (let tU = 0; tU < cU.length; tU++) cU[tU].to <= GU && cU.splice(tU--, 1)
        }
        let hU = KU.finish();
        return new TU(hU, RU, qU(hU))
      }
    }

    function qU(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        tU = null;
      return UU.between(gU, 1e9, ((UU, gU, pU) => {
        let {
          spec: EU
        } = pU;
        if (!(RU && EU.diagnostics.indexOf(RU) < 0))
          if (tU) {
            if (EU.diagnostics.indexOf(tU.diagnostic) < 0) return !1;
            tU = new PU(tU.from, gU, tU.diagnostic)
          } else tU = new PU(UU, gU, RU || EU.diagnostics[0])
      })), tU
    }

    function KU(UU, RU) {
      let gU = RU.pos,
        tU = RU.end || gU,
        pU = UU.state.facet(mU).hideOn(UU, gU, tU);
      if (null != pU) return pU;
      let EU = UU.startState.doc.lineAt(RU.pos);
      return !(!UU.effects.some((UU => UU.is(GU))) && !UU.changes.touchesRange(EU.from, Math.max(EU.to, tU)))
    }

    function cU(UU, RU) {
      return UU.field(CU, !1) ? RU : RU.concat(pU.A.appendConfig.of(XU))
    }
    const GU = pU.A.define(),
      jU = pU.A.define(),
      uU = pU.A.define(),
      CU = pU.C.define({
        create: () => new TU(tU.b.none, null, null),
        update(UU, RU) {
          if (RU.docChanged && UU.diagnostics.size) {
            let gU = UU.diagnostics.map(RU.changes),
              tU = null,
              pU = UU.panel;
            if (UU.selected) {
              let pU = RU.changes.mapPos(UU.selected.from, 1);
              tU = qU(gU, UU.selected.diagnostic, pU) || qU(gU, null, pU)
            }!gU.size && pU && RU.state.facet(mU).autoPanel && (pU = null), UU = new TU(gU, pU, tU)
          }
          for (let gU of RU.effects)
            if (gU.is(GU)) {
              let tU = RU.state.facet(mU).autoPanel ? gU.value.length ? ZU.open : null : UU.panel;
              UU = TU.init(gU.value, tU, RU.state)
            } else gU.is(jU) ? UU = new TU(UU.diagnostics, gU.value ? ZU.open : null, UU.selected) : gU.is(uU) && (UU = new TU(UU.diagnostics, UU.panel, gU.value));
          return UU
        },
        provide: UU => [tU.Z.from(UU, (UU => UU.panel)), tU.h.Yt.from(UU, (UU => UU.diagnostics))]
      });
    const hU = tU.b.mark({
      class: "cm-lintRange cm-lintRange-active"
    });

    function QU(UU, RU, gU) {
      let tU, {
          diagnostics: pU
        } = UU.state.field(CU),
        EU = -1,
        PU = -1;
      pU.between(RU - (gU < 0 ? 1 : 0), RU + (gU > 0 ? 1 : 0), ((UU, pU, TU) => {
        let {
          spec: qU
        } = TU;
        if (RU >= UU && RU <= pU && (UU == pU || (RU > UU || gU > 0) && (RU < pU || gU < 0))) return tU = qU.diagnostics, EU = UU, PU = pU, !1
      }));
      let TU = UU.state.facet(mU).tooltipFilter;
      return tU && TU && (tU = TU(tU, UU.state)), tU ? {
        pos: EU,
        end: PU,
        above: UU.state.doc.lineAt(EU).to < PU,
        create: () => ({
          dom: eU(UU, tU)
        })
      } : null
    }

    function eU(UU, RU) {
      return (0, EU.d)("ul", {
        class: "cm-tooltip-lint"
      }, RU.map((RU => nU(UU, RU, !1))))
    }
    const WU = UU => {
        let RU = UU.state.field(CU, !1);
        return !(!RU || !RU.panel) && (UU.dispatch({
          effects: jU.of(!1)
        }), !0)
      },
      fU = [{
        key: "Mod-Shift-m",
        run: UU => {
          let RU = UU.state.field(CU, !1);
          RU && RU.panel || UU.dispatch({
            effects: cU(UU.state, [jU.of(!0)])
          });
          let gU = (0, tU.y)(UU, ZU.open);
          return gU && gU.dom.querySelector(".cm-panel-lint ul").focus(), !0
        },
        preventDefault: !0
      }, {
        key: "F8",
        run: UU => {
          let RU = UU.state.field(CU, !1);
          if (!RU) return !1;
          let gU = UU.state.selection.main,
            tU = qU(RU.diagnostics, null, gU.to + 1);
          return !(!tU && (tU = qU(RU.diagnostics, null, 0), !tU || tU.from == gU.from && tU.to == gU.to)) && (UU.dispatch({
            selection: {
              anchor: tU.from,
              head: tU.to
            },
            scrollIntoView: !0
          }), !0)
        }
      }],
      xU = tU.l.fromClass(class {
        constructor(UU) {
          this.view = UU, this.timeout = -1, this.set = !0;
          let {
            delay: RU
          } = UU.state.facet(mU);
          this.lintTime = Date.now() + RU, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, RU)
        }
        run() {
          clearTimeout(this.timeout);
          let UU = Date.now();
          if (UU < this.lintTime - 10) this.timeout = setTimeout(this.run, this.lintTime - UU);
          else {
            this.set = !1;
            let {
              state: UU
            } = this.view, {
              sources: RU
            } = UU.facet(mU);
            RU.length && function(UU, RU, gU) {
              let tU = [],
                pU = -1;
              for (let EU of UU) EU.then((gU => {
                tU.push(gU), clearTimeout(pU), tU.length == UU.length ? RU(tU) : pU = setTimeout((() => RU(tU)), 200)
              }), gU)
            }(RU.map((UU => Promise.resolve(UU(this.view)))), (RU => {
              this.view.state.doc == UU.doc && this.view.dispatch(function(UU, RU) {
                return {
                  effects: cU(UU, [GU.of(RU)])
                }
              }(this.view.state, RU.reduce(((UU, RU) => UU.concat(RU)))))
            }), (UU => {
              (0, tU.Q)(this.view.state, UU)
            }))
          }
        }
        update(UU) {
          let RU = UU.state.facet(mU);
          (UU.docChanged || RU != UU.startState.facet(mU) || RU.needsRefresh && RU.needsRefresh(UU)) && (this.lintTime = Date.now() + RU.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, RU.delay)))
        }
        force() {
          this.set && (this.lintTime = Date.now(), this.run())
        }
        destroy() {
          clearTimeout(this.timeout)
        }
      });
    const mU = pU.p.define({
      combine: UU => ({
        sources: UU.map((UU => UU.source)).filter((UU => null != UU)),
        ...(0, pU.N)(UU.map((UU => UU.config)), {
          delay: 750,
          markerFilter: null,
          tooltipFilter: null,
          needsRefresh: null,
          hideOn: () => null
        }, {
          delay: Math.max,
          markerFilter: IU,
          tooltipFilter: IU,
          needsRefresh: (UU, RU) => UU ? RU ? gU => UU(gU) || RU(gU) : UU : RU,
          hideOn: (UU, RU) => UU ? RU ? (gU, tU, pU) => UU(gU, tU, pU) || RU(gU, tU, pU) : UU : RU,
          autoPanel: (UU, RU) => UU || RU
        })
      })
    });

    function IU(UU, RU) {
      return UU ? RU ? (gU, tU) => RU(UU(gU, tU), tU) : UU : RU
    }

    function JU(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return [mU.of({
        source: UU,
        config: RU
      }), xU, XU]
    }

    function wU(UU) {
      let RU = [];
      if (UU) UU: for (let {
          name: gU
        }
        of UU) {
        for (let UU = 0; UU < gU.length; UU++) {
          let tU = gU[UU];
          if (/[a-zA-Z]/.test(tU) && !RU.some((UU => UU.toLowerCase() == tU.toLowerCase()))) {
            RU.push(tU);
            continue UU
          }
        }
        RU.push("")
      }
      return RU
    }

    function nU(UU, RU, gU) {
      var tU;
      let pU = gU ? wU(RU.actions) : [];
      return (0, EU.d)("li", {
        class: "cm-diagnostic cm-diagnostic-" + RU.severity
      }, (0, EU.d)("span", {
        class: "cm-diagnosticText"
      }, RU.renderMessage ? RU.renderMessage(UU) : RU.message), null === (tU = RU.actions) || void 0 === tU ? void 0 : tU.map(((gU, tU) => {
        let PU = !1,
          TU = tU => {
            if (tU.preventDefault(), PU) return;
            PU = !0;
            let pU = qU(UU.state.field(CU).diagnostics, RU);
            pU && gU.apply(UU, pU.from, pU.to)
          },
          {
            name: KU
          } = gU,
          cU = pU[tU] ? KU.indexOf(pU[tU]) : -1,
          GU = cU < 0 ? KU : [KU.slice(0, cU), (0, EU.d)("u", KU.slice(cU, cU + 1)), KU.slice(cU + 1)],
          jU = gU.markClass ? " " + gU.markClass : "";
        return (0, EU.d)("button", {
          type: "button",
          class: "cm-diagnosticAction" + jU,
          onclick: TU,
          onmousedown: TU,
          "aria-label": ` Action: ${KU}${cU<0?"":` (access key "${pU[tU]})"`}.`
        }, GU)
      })), RU.source && (0, EU.d)("div", {
        class: "cm-diagnosticSource"
      }, RU.source))
    }
    class bU extends tU.o {
      constructor(UU) {
        super(), this.sev = UU
      }
      eq(UU) {
        return UU.sev == this.sev
      }
      toDOM() {
        return (0, EU.d)("span", {
          class: "cm-lintPoint cm-lintPoint-" + this.sev
        })
      }
    }
    class oU {
      constructor(UU, RU) {
        this.diagnostic = RU, this.id = "item_" + Math.floor(4294967295 * Math.random()).toString(16), this.dom = nU(UU, RU, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option")
      }
    }
    class ZU {
      constructor(UU) {
        this.view = UU, this.items = [];
        this.list = (0, EU.d)("ul", {
          tabIndex: 0,
          role: "listbox",
          "aria-label": this.view.state.phrase("Diagnostics"),
          onkeydown: RU => {
            if (!(RU.ctrlKey || RU.altKey || RU.metaKey)) {
              if (27 == RU.keyCode) WU(this.view), this.view.focus();
              else if (38 == RU.keyCode || 33 == RU.keyCode) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
              else if (40 == RU.keyCode || 34 == RU.keyCode) this.moveSelection((this.selectedIndex + 1) % this.items.length);
              else if (36 == RU.keyCode) this.moveSelection(0);
              else if (35 == RU.keyCode) this.moveSelection(this.items.length - 1);
              else if (13 == RU.keyCode) this.view.focus();
              else {
                if (!(RU.keyCode >= 65 && RU.keyCode <= 90 && this.selectedIndex >= 0)) return;
                {
                  let {
                    diagnostic: gU
                  } = this.items[this.selectedIndex], tU = wU(gU.actions);
                  for (let pU = 0; pU < tU.length; pU++)
                    if (tU[pU].toUpperCase().charCodeAt(0) == RU.keyCode) {
                      let RU = qU(this.view.state.field(CU).diagnostics, gU);
                      RU && gU.actions[pU].apply(UU, RU.from, RU.to)
                    }
                }
              }
              RU.preventDefault()
            }
          },
          onclick: UU => {
            for (let RU = 0; RU < this.items.length; RU++) this.items[RU].dom.contains(UU.target) && this.moveSelection(RU)
          }
        }), this.dom = (0, EU.d)("div", {
          class: "cm-panel-lint"
        }, this.list, (0, EU.d)("button", {
          type: "button",
          name: "close",
          "aria-label": this.view.state.phrase("close"),
          onclick: () => WU(this.view)
        }, "\xd7")), this.update()
      }
      get selectedIndex() {
        let UU = this.view.state.field(CU).selected;
        if (!UU) return -1;
        for (let RU = 0; RU < this.items.length; RU++)
          if (this.items[RU].diagnostic == UU.diagnostic) return RU;
        return -1
      }
      update() {
        let {
          diagnostics: UU,
          selected: RU
        } = this.view.state.field(CU), gU = 0, tU = !1, pU = null, EU = new Set;
        for (UU.between(0, this.view.state.doc.length, ((UU, PU, TU) => {
            let {
              spec: qU
            } = TU;
            for (let KU of qU.diagnostics) {
              if (EU.has(KU)) continue;
              EU.add(KU);
              let UU, PU = -1;
              for (let RU = gU; RU < this.items.length; RU++)
                if (this.items[RU].diagnostic == KU) {
                  PU = RU;
                  break
                } PU < 0 ? (UU = new oU(this.view, KU), this.items.splice(gU, 0, UU), tU = !0) : (UU = this.items[PU], PU > gU && (this.items.splice(gU, PU - gU), tU = !0)), RU && UU.diagnostic == RU.diagnostic ? UU.dom.hasAttribute("aria-selected") || (UU.dom.setAttribute("aria-selected", "true"), pU = UU) : UU.dom.hasAttribute("aria-selected") && UU.dom.removeAttribute("aria-selected"), gU++
            }
          })); gU < this.items.length && !(1 == this.items.length && this.items[0].diagnostic.from < 0);) tU = !0, this.items.pop();
        0 == this.items.length && (this.items.push(new oU(this.view, {
          from: -1,
          to: -1,
          severity: "info",
          message: this.view.state.phrase("No diagnostics")
        })), tU = !0), pU ? (this.list.setAttribute("aria-activedescendant", pU.id), this.view.requestMeasure({
          key: this,
          read: () => ({
            sel: pU.dom.getBoundingClientRect(),
            panel: this.list.getBoundingClientRect()
          }),
          write: UU => {
            let {
              sel: RU,
              panel: gU
            } = UU, tU = gU.height / this.list.offsetHeight;
            RU.top < gU.top ? this.list.scrollTop -= (gU.top - RU.top) / tU : RU.bottom > gU.bottom && (this.list.scrollTop += (RU.bottom - gU.bottom) / tU)
          }
        })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), tU && this.sync()
      }
      sync() {
        let UU = this.list.firstChild;

        function RU() {
          let RU = UU;
          UU = RU.nextSibling, RU.remove()
        }
        for (let gU of this.items)
          if (gU.dom.parentNode == this.list) {
            for (; UU != gU.dom;) RU();
            UU = gU.dom.nextSibling
          } else this.list.insertBefore(gU.dom, UU);
        for (; UU;) RU()
      }
      moveSelection(UU) {
        if (this.selectedIndex < 0) return;
        let RU = qU(this.view.state.field(CU).diagnostics, this.items[UU].diagnostic);
        RU && this.view.dispatch({
          selection: {
            anchor: RU.from,
            head: RU.to
          },
          scrollIntoView: !0,
          effects: uU.of(RU)
        })
      }
      static open(UU) {
        return new ZU(UU)
      }
    }

    function aU(UU) {
      return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${arguments.length>1&&void 0!==arguments[1]?arguments[1]:'viewBox="0 0 40 40"'}>${encodeURIComponent(UU)}</svg>')`
    }

    function YU(UU) {
      return aU(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${UU}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"')
    }
    const BU = tU.h.baseTheme({
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
        backgroundImage: YU("#d11")
      },
      ".cm-lintRange-warning": {
        backgroundImage: YU("orange")
      },
      ".cm-lintRange-info": {
        backgroundImage: YU("#999")
      },
      ".cm-lintRange-hint": {
        backgroundImage: YU("#66d")
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

    function VU(UU) {
      return "error" == UU ? 4 : "warning" == UU ? 3 : "info" == UU ? 2 : 1
    }

    function rU(UU) {
      let RU = "hint",
        gU = 1;
      for (let tU of UU) {
        let UU = VU(tU.severity);
        UU > gU && (gU = UU, RU = tU.severity)
      }
      return RU
    }
    tU.k;
    const XU = [CU, tU.h.Yt.compute([CU], (UU => {
      let {
        selected: RU,
        panel: gU
      } = UU.field(CU);
      return RU && gU && RU.from != RU.to ? tU.b.set([hU.range(RU.from, RU.to)]) : tU.b.none
    })), (0, tU.M)(QU, {
      hideOn: KU
    }), BU]
  },
  40754: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => lU,
      e: () => eU,
      i: () => OU
    });
    var tU = gU(40707),
      pU = gU(40700),
      EU = gU(40719);
    const PU = "function" == typeof String.prototype.normalize ? UU => UU.normalize("NFKD") : UU => UU;
    class TU {
      constructor(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : UU.length,
          pU = arguments.length > 4 ? arguments[4] : void 0,
          EU = arguments.length > 5 ? arguments[5] : void 0;
        this.test = EU, this.value = {
          from: 0,
          to: 0
        }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = UU.iterRange(gU, tU), this.bufferStart = gU, this.normalize = pU ? UU => pU(PU(UU)) : PU, this.query = this.normalize(RU)
      }
      peek() {
        if (this.bufferPos == this.buffer.length) {
          if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
          this.bufferPos = 0, this.buffer = this.iter.value
        }
        return (0, pU.J)(this.buffer, this.bufferPos)
      }
      next() {
        for (; this.matches.length;) this.matches.pop();
        return this.nextOverlapping()
      }
      nextOverlapping() {
        for (;;) {
          let UU = this.peek();
          if (UU < 0) return this.done = !0, this;
          let RU = (0, pU.bb)(UU),
            gU = this.bufferStart + this.bufferPos;
          this.bufferPos += (0, pU.M)(UU);
          let tU = this.normalize(RU);
          if (tU.length)
            for (let pU = 0, EU = gU;; pU++) {
              let UU = tU.charCodeAt(pU),
                PU = this.match(UU, EU, this.bufferPos + this.bufferStart);
              if (pU == tU.length - 1) {
                if (PU) return this.value = PU, this;
                break
              }
              EU == gU && pU < RU.length && RU.charCodeAt(pU) == UU && EU++
            }
        }
      }
      match(UU, RU, gU) {
        let tU = null;
        for (let pU = 0; pU < this.matches.length; pU += 2) {
          let RU = this.matches[pU],
            EU = !1;
          this.query.charCodeAt(RU) == UU && (RU == this.query.length - 1 ? tU = {
            from: this.matches[pU + 1],
            to: gU
          } : (this.matches[pU]++, EU = !0)), EU || (this.matches.splice(pU, 2), pU -= 2)
        }
        return this.query.charCodeAt(0) == UU && (1 == this.query.length ? tU = {
          from: RU,
          to: gU
        } : this.matches.push(1, RU)), tU && this.test && !this.test(tU.from, tU.to, this.buffer, this.bufferStart) && (tU = null), tU
      }
    }
    "undefined" != typeof Symbol && (TU.prototype[Symbol.iterator] = function() {
      return this
    });
    const qU = {
        from: -1,
        to: -1,
        match: /.*/.exec("")
      },
      KU = "gm" + (null == /x/.unicode ? "" : "u");
    class cU {
      constructor(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : UU.length;
        if (this.text = UU, this.to = pU, this.curLine = "", this.done = !1, this.value = qU, /\\[sWDnr]|\n|\r|\[\^/.test(RU)) return new uU(UU, RU, gU, tU, pU);
        this.re = new RegExp(RU, KU + ((null === gU || void 0 === gU ? void 0 : gU.ignoreCase) ? "i" : "")), this.test = null === gU || void 0 === gU ? void 0 : gU.test, this.iter = UU.iter();
        let EU = UU.lineAt(tU);
        this.curLineStart = EU.from, this.matchPos = CU(UU, tU), this.getLine(this.curLineStart)
      }
      getLine(UU) {
        this.iter.next(UU), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next())
      }
      nextLine() {
        this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0)
      }
      next() {
        for (let UU = this.matchPos - this.curLineStart;;) {
          this.re.lastIndex = UU;
          let RU = this.matchPos <= this.to && this.re.exec(this.curLine);
          if (RU) {
            let gU = this.curLineStart + RU.index,
              tU = gU + RU[0].length;
            if (this.matchPos = CU(this.text, tU + (gU == tU ? 1 : 0)), gU == this.curLineStart + this.curLine.length && this.nextLine(), (gU < tU || gU > this.value.to) && (!this.test || this.test(gU, tU, RU))) return this.value = {
              from: gU,
              to: tU,
              match: RU
            }, this;
            UU = this.matchPos - this.curLineStart
          } else {
            if (!(this.curLineStart + this.curLine.length < this.to)) return this.done = !0, this;
            this.nextLine(), UU = 0
          }
        }
      }
    }
    const GU = new WeakMap;
    class jU {
      constructor(UU, RU) {
        this.from = UU, this.text = RU
      }
      get to() {
        return this.from + this.text.length
      }
      static get(UU, RU, gU) {
        let tU = GU.get(UU);
        if (!tU || tU.from >= gU || tU.to <= RU) {
          let tU = new jU(RU, UU.sliceString(RU, gU));
          return GU.set(UU, tU), tU
        }
        if (tU.from == RU && tU.to == gU) return tU;
        let {
          text: pU,
          from: EU
        } = tU;
        return EU > RU && (pU = UU.sliceString(RU, EU) + pU, EU = RU), tU.to < gU && (pU += UU.sliceString(tU.to, gU)), GU.set(UU, new jU(EU, pU)), new jU(RU, pU.slice(RU - EU, gU - EU))
      }
    }
    class uU {
      constructor(UU, RU, gU, tU, pU) {
        this.text = UU, this.to = pU, this.done = !1, this.value = qU, this.matchPos = CU(UU, tU), this.re = new RegExp(RU, KU + ((null === gU || void 0 === gU ? void 0 : gU.ignoreCase) ? "i" : "")), this.test = null === gU || void 0 === gU ? void 0 : gU.test, this.flat = jU.get(UU, tU, this.chunkEnd(tU + 5e3))
      }
      chunkEnd(UU) {
        return UU >= this.to ? this.to : this.text.lineAt(UU).to
      }
      next() {
        for (;;) {
          let UU = this.re.lastIndex = this.matchPos - this.flat.from,
            RU = this.re.exec(this.flat.text);
          if (RU && !RU[0] && RU.index == UU && (this.re.lastIndex = UU + 1, RU = this.re.exec(this.flat.text)), RU) {
            let UU = this.flat.from + RU.index,
              gU = UU + RU[0].length;
            if ((this.flat.to >= this.to || RU.index + RU[0].length <= this.flat.text.length - 10) && (!this.test || this.test(UU, gU, RU))) return this.value = {
              from: UU,
              to: gU,
              match: RU
            }, this.matchPos = CU(this.text, gU + (UU == gU ? 1 : 0)), this
          }
          if (this.flat.to == this.to) return this.done = !0, this;
          this.flat = jU.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + 2 * this.flat.text.length))
        }
      }
    }

    function CU(UU, RU) {
      if (RU >= UU.length) return RU;
      let gU, tU = UU.lineAt(RU);
      for (; RU < tU.to && (gU = tU.text.charCodeAt(RU - tU.from)) >= 56320 && gU < 57344;) RU++;
      return RU
    }
    "undefined" != typeof Symbol && (cU.prototype[Symbol.iterator] = uU.prototype[Symbol.iterator] = function() {
      return this
    });
    const hU = {
        highlightWordAroundCursor: !1,
        minSelectionLength: 1,
        maxMatches: 100,
        wholeWords: !1
      },
      QU = pU.p.define({
        combine: UU => (0, pU.N)(UU, hU, {
          highlightWordAroundCursor: (UU, RU) => UU || RU,
          minSelectionLength: Math.min,
          maxMatches: Math.min
        })
      });

    function eU(UU) {
      let RU = [IU, mU];
      return UU && RU.push(QU.of(UU)), RU
    }
    const WU = tU.b.mark({
        class: "cm-selectionMatch"
      }),
      fU = tU.b.mark({
        class: "cm-selectionMatch cm-selectionMatch-main"
      });

    function xU(UU, RU, gU, tU) {
      return (0 == gU || UU(RU.sliceDoc(gU - 1, gU)) != pU.g.Word) && (tU == RU.doc.length || UU(RU.sliceDoc(tU, tU + 1)) != pU.g.Word)
    }
    const mU = tU.l.fromClass(class {
        constructor(UU) {
          this.Yt = this.getDeco(UU)
        }
        update(UU) {
          (UU.selectionSet || UU.docChanged || UU.viewportChanged) && (this.Yt = this.getDeco(UU.view))
        }
        getDeco(UU) {
          let RU = UU.state.facet(QU),
            {
              state: gU
            } = UU,
            EU = gU.selection;
          if (EU.hu.length > 1) return tU.b.none;
          let PU, qU = EU.main,
            KU = null;
          if (qU.empty) {
            if (!RU.highlightWordAroundCursor) return tU.b.none;
            let UU = gU.wordAt(qU.head);
            if (!UU) return tU.b.none;
            KU = gU.charCategorizer(qU.head), PU = gU.sliceDoc(UU.from, UU.to)
          } else {
            let UU = qU.to - qU.from;
            if (UU < RU.minSelectionLength || UU > 200) return tU.b.none;
            if (RU.wholeWords) {
              if (PU = gU.sliceDoc(qU.from, qU.to), KU = gU.charCategorizer(qU.head), !xU(KU, gU, qU.from, qU.to) || ! function(UU, RU, gU, tU) {
                  return UU(RU.sliceDoc(gU, gU + 1)) == pU.g.Word && UU(RU.sliceDoc(tU - 1, tU)) == pU.g.Word
                }(KU, gU, qU.from, qU.to)) return tU.b.none
            } else if (PU = gU.sliceDoc(qU.from, qU.to), !PU) return tU.b.none
          }
          let cU = [];
          for (let pU of UU.h_) {
            let UU = new TU(gU.doc, PU, pU.from, pU.to);
            for (; !UU.next().done;) {
              let {
                from: pU,
                to: EU
              } = UU.value;
              if ((!KU || xU(KU, gU, pU, EU)) && (qU.empty && pU <= qU.from && EU >= qU.to ? cU.push(fU.range(pU, EU)) : (pU >= qU.to || EU <= qU.from) && cU.push(WU.range(pU, EU)), cU.length > RU.maxMatches)) return tU.b.none
            }
          }
          return tU.b.set(cU)
        }
      }, {
        Yt: UU => UU.Yt
      }),
      IU = tU.h.baseTheme({
        ".cm-selectionMatch": {
          backgroundColor: "#99ff7780"
        },
        ".cm-searchMatch .cm-selectionMatch": {
          backgroundColor: "transparent"
        }
      });
    const JU = pU.p.define({
      combine: UU => (0, pU.N)(UU, {
        top: !1,
        caseSensitive: !1,
        literal: !1,
        regexp: !1,
        wholeWord: !1,
        createPanel: UU => new UR(UU),
        scrollToMatch: UU => tU.h.scrollIntoView(UU)
      })
    });
    class wU {
      constructor(UU) {
        this.search = UU.search, this.caseSensitive = !!UU.caseSensitive, this.literal = !!UU.literal, this.regexp = !!UU.regexp, this.replace = UU.replace || "", this.valid = !!this.search && (!this.regexp || function(UU) {
          try {
            return new RegExp(UU, KU), !0
          } catch (RU) {
            return !1
          }
        }(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!UU.wholeWord, this.test = UU.test
      }
      unquote(UU) {
        return this.literal ? UU : UU.replace(/\\([nrt\\])/g, ((UU, RU) => "n" == RU ? "\n" : "r" == RU ? "\r" : "t" == RU ? "\t" : "\\"))
      }
      eq(UU) {
        return this.search == UU.search && this.replace == UU.replace && this.caseSensitive == UU.caseSensitive && this.regexp == UU.regexp && this.wholeWord == UU.wholeWord && this.test == UU.test
      }
      create() {
        return this.regexp ? new BU(this) : new oU(this)
      }
      getCursor(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gU = arguments.length > 2 ? arguments[2] : void 0,
          tU = UU.doc ? UU : pU.n.create({
            doc: UU
          });
        return null == gU && (gU = tU.doc.length), this.regexp ? ZU(this, tU, RU, gU) : bU(this, tU, RU, gU)
      }
    }
    class nU {
      constructor(UU) {
        this.spec = UU
      }
    }

    function bU(UU, RU, gU, tU) {
      let EU;
      var PU, qU;
      return UU.wholeWord && (PU = RU.doc, qU = RU.charCategorizer(RU.selection.main.head), EU = (UU, RU, gU, tU) => ((tU > UU || tU + gU.length < RU) && (tU = Math.max(0, UU - 2), gU = PU.sliceString(tU, Math.min(PU.length, RU + 2))), (qU(aU(gU, UU - tU)) != pU.g.Word || qU(YU(gU, UU - tU)) != pU.g.Word) && (qU(YU(gU, RU - tU)) != pU.g.Word || qU(aU(gU, RU - tU)) != pU.g.Word))), UU.test && (EU = function(UU, RU, gU) {
        return (tU, pU, EU, PU) => {
          if (gU && !gU(tU, pU, EU, PU)) return !1;
          let TU = tU >= PU && pU <= PU + EU.length ? EU.slice(tU - PU, pU - PU) : RU.doc.sliceString(tU, pU);
          return UU(TU, RU, tU, pU)
        }
      }(UU.test, RU, EU)), new TU(RU.doc, UU.unquoted, gU, tU, UU.caseSensitive ? void 0 : UU => UU.toLowerCase(), EU)
    }
    class oU extends nU {
      constructor(UU) {
        super(UU)
      }
      nextMatch(UU, RU, gU) {
        let tU = bU(this.spec, UU, gU, UU.doc.length).nextOverlapping();
        if (tU.done) {
          let gU = Math.min(UU.doc.length, RU + this.spec.unquoted.length);
          tU = bU(this.spec, UU, 0, gU).nextOverlapping()
        }
        return tU.done || tU.value.from == RU && tU.value.to == gU ? null : tU.value
      }
      prevMatchInRange(UU, RU, gU) {
        for (let tU = gU;;) {
          let gU = Math.max(RU, tU - 1e4 - this.spec.unquoted.length),
            pU = bU(this.spec, UU, gU, tU),
            EU = null;
          for (; !pU.nextOverlapping().done;) EU = pU.value;
          if (EU) return EU;
          if (gU == RU) return null;
          tU -= 1e4
        }
      }
      prevMatch(UU, RU, gU) {
        let tU = this.prevMatchInRange(UU, 0, RU);
        return tU || (tU = this.prevMatchInRange(UU, Math.max(0, gU - this.spec.unquoted.length), UU.doc.length)), !tU || tU.from == RU && tU.to == gU ? null : tU
      }
      getReplacement(UU) {
        return this.spec.unquote(this.spec.replace)
      }
      matchAll(UU, RU) {
        let gU = bU(this.spec, UU, 0, UU.doc.length),
          tU = [];
        for (; !gU.next().done;) {
          if (tU.length >= RU) return null;
          tU.push(gU.value)
        }
        return tU
      }
      highlight(UU, RU, gU, tU) {
        let pU = bU(this.spec, UU, Math.max(0, RU - this.spec.unquoted.length), Math.min(gU + this.spec.unquoted.length, UU.doc.length));
        for (; !pU.next().done;) tU(pU.value.from, pU.value.to)
      }
    }

    function ZU(UU, RU, gU, tU) {
      let EU;
      var PU;
      return UU.wholeWord && (PU = RU.charCategorizer(RU.selection.main.head), EU = (UU, RU, gU) => !gU[0].length || (PU(aU(gU.input, gU.index)) != pU.g.Word || PU(YU(gU.input, gU.index)) != pU.g.Word) && (PU(YU(gU.input, gU.index + gU[0].length)) != pU.g.Word || PU(aU(gU.input, gU.index + gU[0].length)) != pU.g.Word)), UU.test && (EU = function(UU, RU, gU) {
        return (tU, pU, EU) => (!gU || gU(tU, pU, EU)) && UU(EU[0], RU, tU, pU)
      }(UU.test, RU, EU)), new cU(RU.doc, UU.search, {
        ignoreCase: !UU.caseSensitive,
        test: EU
      }, gU, tU)
    }

    function aU(UU, RU) {
      return UU.slice((0, pU.V)(UU, RU, !1), RU)
    }

    function YU(UU, RU) {
      return UU.slice(RU, (0, pU.V)(UU, RU))
    }
    class BU extends nU {
      nextMatch(UU, RU, gU) {
        let tU = ZU(this.spec, UU, gU, UU.doc.length).next();
        return tU.done && (tU = ZU(this.spec, UU, 0, RU).next()), tU.done ? null : tU.value
      }
      prevMatchInRange(UU, RU, gU) {
        for (let tU = 1;; tU++) {
          let pU = Math.max(RU, gU - 1e4 * tU),
            EU = ZU(this.spec, UU, pU, gU),
            PU = null;
          for (; !EU.next().done;) PU = EU.value;
          if (PU && (pU == RU || PU.from > pU + 10)) return PU;
          if (pU == RU) return null
        }
      }
      prevMatch(UU, RU, gU) {
        return this.prevMatchInRange(UU, 0, RU) || this.prevMatchInRange(UU, gU, UU.doc.length)
      }
      getReplacement(UU) {
        return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, ((RU, gU) => {
          if ("&" == gU) return UU.match[0];
          if ("$" == gU) return "$";
          for (let tU = gU.length; tU > 0; tU--) {
            let RU = +gU.slice(0, tU);
            if (RU > 0 && RU < UU.match.length) return UU.match[RU] + gU.slice(tU)
          }
          return RU
        }))
      }
      matchAll(UU, RU) {
        let gU = ZU(this.spec, UU, 0, UU.doc.length),
          tU = [];
        for (; !gU.next().done;) {
          if (tU.length >= RU) return null;
          tU.push(gU.value)
        }
        return tU
      }
      highlight(UU, RU, gU, tU) {
        let pU = ZU(this.spec, UU, Math.max(0, RU - 250), Math.min(gU + 250, UU.doc.length));
        for (; !pU.next().done;) tU(pU.value.from, pU.value.to)
      }
    }
    const VU = pU.A.define(),
      rU = pU.A.define(),
      XU = pU.C.define({
        create: UU => new vU(MU(UU).create(), null),
        update(UU, RU) {
          for (let gU of RU.effects) gU.is(VU) ? UU = new vU(gU.value.create(), UU.panel) : gU.is(rU) && (UU = new vU(UU.query, gU.value ? zU : null));
          return UU
        },
        provide: UU => tU.Z.from(UU, (UU => UU.panel))
      });
    class vU {
      constructor(UU, RU) {
        this.query = UU, this.panel = RU
      }
    }
    const dU = tU.b.mark({
        class: "cm-searchMatch"
      }),
      HU = tU.b.mark({
        class: "cm-searchMatch cm-searchMatch-selected"
      }),
      SU = tU.l.fromClass(class {
        constructor(UU) {
          this.view = UU, this.Yt = this.highlight(UU.state.field(XU))
        }
        update(UU) {
          let RU = UU.state.field(XU);
          (RU != UU.startState.field(XU) || UU.docChanged || UU.selectionSet || UU.viewportChanged) && (this.Yt = this.highlight(RU))
        }
        highlight(UU) {
          let {
            query: RU,
            panel: gU
          } = UU;
          if (!gU || !RU.spec.valid) return tU.b.none;
          let {
            view: EU
          } = this, PU = new pU.t;
          for (let tU = 0, pU = EU.h_, TU = pU.length; tU < TU; tU++) {
            let {
              from: UU,
              to: gU
            } = pU[tU];
            for (; tU < TU - 1 && gU > pU[tU + 1].from - 500;) gU = pU[++tU].to;
            RU.highlight(EU.state, UU, gU, ((UU, RU) => {
              let gU = EU.state.selection.hu.some((gU => gU.from == UU && gU.to == RU));
              PU.add(UU, RU, gU ? HU : dU)
            }))
          }
          return PU.finish()
        }
      }, {
        Yt: UU => UU.Yt
      });

    function sU(UU) {
      return RU => {
        let gU = RU.state.field(XU, !1);
        return gU && gU.query.spec.valid ? UU(RU, gU) : NU(RU)
      }
    }
    const yU = sU(((UU, RU) => {
        let {
          query: gU
        } = RU, {
          to: tU
        } = UU.state.selection.main, EU = gU.nextMatch(UU.state, tU, tU);
        if (!EU) return !1;
        let PU = pU.k.single(EU.from, EU.to),
          TU = UU.state.facet(JU);
        return UU.dispatch({
          selection: PU,
          effects: [pR(UU, EU), TU.scrollToMatch(PU.main, UU)],
          userEvent: "select.search"
        }), LU(UU), !0
      })),
      kU = sU(((UU, RU) => {
        let {
          query: gU
        } = RU, {
          state: tU
        } = UU, {
          from: EU
        } = tU.selection.main, PU = gU.prevMatch(tU, EU, EU);
        if (!PU) return !1;
        let TU = pU.k.single(PU.from, PU.to),
          qU = UU.state.facet(JU);
        return UU.dispatch({
          selection: TU,
          effects: [pR(UU, PU), qU.scrollToMatch(TU.main, UU)],
          userEvent: "select.search"
        }), LU(UU), !0
      })),
      FU = sU(((UU, RU) => {
        let {
          query: gU
        } = RU, tU = gU.matchAll(UU.state, 1e3);
        return !(!tU || !tU.length) && (UU.dispatch({
          selection: pU.k.create(tU.map((UU => pU.k.range(UU.from, UU.to)))),
          userEvent: "select.search.matches"
        }), !0)
      })),
      iU = sU(((UU, RU) => {
        let {
          query: gU
        } = RU, {
          state: EU
        } = UU, {
          from: PU,
          to: TU
        } = EU.selection.main;
        if (EU.readOnly) return !1;
        let qU = gU.nextMatch(EU, PU, PU);
        if (!qU) return !1;
        let KU, cU, GU = qU,
          jU = [],
          uU = [];
        GU.from == PU && GU.to == TU && (cU = EU.toText(gU.getReplacement(GU)), jU.push({
          from: GU.from,
          to: GU.to,
          insert: cU
        }), GU = gU.nextMatch(EU, GU.from, GU.to), uU.push(tU.h.announce.of(EU.phrase("replaced match on line $", EU.doc.lineAt(PU).number) + ".")));
        let CU = UU.state.changes(jU);
        return GU && (KU = pU.k.single(GU.from, GU.to).map(CU), uU.push(pR(UU, GU)), uU.push(EU.facet(JU).scrollToMatch(KU.main, UU))), UU.dispatch({
          changes: CU,
          selection: KU,
          effects: uU,
          userEvent: "input.replace"
        }), !0
      })),
      AU = sU(((UU, RU) => {
        let {
          query: gU
        } = RU;
        if (UU.state.readOnly) return !1;
        let pU = gU.matchAll(UU.state, 1e9).map((UU => {
          let {
            from: RU,
            to: tU
          } = UU;
          return {
            from: RU,
            to: tU,
            insert: gU.getReplacement(UU)
          }
        }));
        if (!pU.length) return !1;
        let EU = UU.state.phrase("replaced $ matches", pU.length) + ".";
        return UU.dispatch({
          changes: pU,
          effects: tU.h.announce.of(EU),
          userEvent: "input.replace.all"
        }), !0
      }));

    function zU(UU) {
      return UU.state.facet(JU).createPanel(UU)
    }

    function MU(UU, RU) {
      var gU, tU, pU, EU, PU;
      let TU = UU.selection.main,
        qU = TU.empty || TU.to > TU.from + 100 ? "" : UU.sliceDoc(TU.from, TU.to);
      if (RU && !qU) return RU;
      let KU = UU.facet(JU);
      return new wU({
        search: (null !== (gU = null === RU || void 0 === RU ? void 0 : RU.literal) && void 0 !== gU ? gU : KU.literal) ? qU : qU.replace(/\n/g, "\\n"),
        caseSensitive: null !== (tU = null === RU || void 0 === RU ? void 0 : RU.caseSensitive) && void 0 !== tU ? tU : KU.caseSensitive,
        literal: null !== (pU = null === RU || void 0 === RU ? void 0 : RU.literal) && void 0 !== pU ? pU : KU.literal,
        regexp: null !== (EU = null === RU || void 0 === RU ? void 0 : RU.regexp) && void 0 !== EU ? EU : KU.regexp,
        wholeWord: null !== (PU = null === RU || void 0 === RU ? void 0 : RU.wholeWord) && void 0 !== PU ? PU : KU.wholeWord
      })
    }

    function DU(UU) {
      let RU = (0, tU.y)(UU, zU);
      return RU && RU.dom.querySelector("[main-field]")
    }

    function LU(UU) {
      let RU = DU(UU);
      RU && RU == UU.root.activeElement && RU.select()
    }
    const NU = UU => {
        let RU = UU.state.field(XU, !1);
        if (RU && RU.panel) {
          let gU = DU(UU);
          if (gU && gU != UU.root.activeElement) {
            let tU = MU(UU.state, RU.query.spec);
            tU.valid && UU.dispatch({
              effects: VU.of(tU)
            }), gU.focus(), gU.select()
          }
        } else UU.dispatch({
          effects: [rU.of(!0), RU ? VU.of(MU(UU.state, RU.query.spec)) : pU.A.appendConfig.of(PR)]
        });
        return !0
      },
      lU = UU => {
        let RU = UU.state.field(XU, !1);
        if (!RU || !RU.panel) return !1;
        let gU = (0, tU.y)(UU, zU);
        return gU && gU.dom.contains(UU.root.activeElement) && UU.focus(), UU.dispatch({
          effects: rU.of(!1)
        }), !0
      },
      OU = [{
        key: "Mod-f",
        run: NU,
        scope: "editor search-panel"
      }, {
        key: "F3",
        run: yU,
        shift: kU,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Mod-g",
        run: yU,
        shift: kU,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Escape",
        run: lU,
        scope: "editor search-panel"
      }, {
        key: "Mod-Shift-l",
        run: UU => {
          let {
            state: RU,
            dispatch: gU
          } = UU, tU = RU.selection;
          if (tU.hu.length > 1 || tU.main.empty) return !1;
          let {
            from: EU,
            to: PU
          } = tU.main, qU = [], KU = 0;
          for (let cU = new TU(RU.doc, RU.sliceDoc(EU, PU)); !cU.next().done;) {
            if (qU.length > 1e3) return !1;
            cU.value.from == EU && (KU = qU.length), qU.push(pU.k.range(cU.value.from, cU.value.to))
          }
          return gU(RU.update({
            selection: pU.k.create(qU, KU),
            userEvent: "select.search.matches"
          })), !0
        }
      }, {
        key: "Mod-Alt-g",
        run: UU => {
          let {
            state: RU
          } = UU, gU = String(RU.doc.lineAt(UU.state.selection.main.head).number), {
            close: EU,
            result: PU
          } = (0, tU.X)(UU, {
            label: RU.phrase("Go to line"),
            input: {
              type: "text",
              name: "line",
              value: gU
            },
            focus: !0,
            submitLabel: RU.phrase("go")
          });
          return PU.then((gU => {
            let PU = gU && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(gU.elements.line.value);
            if (!PU) return void UU.dispatch({
              effects: EU
            });
            let TU = RU.doc.lineAt(RU.selection.main.head),
              [, qU, KU, cU, GU] = PU,
              jU = cU ? +cU.slice(1) : 0,
              uU = KU ? +KU : TU.number;
            if (KU && GU) {
              let UU = uU / 100;
              qU && (UU = UU * ("-" == qU ? -1 : 1) + TU.number / RU.doc.lines), uU = Math.round(RU.doc.lines * UU)
            } else KU && qU && (uU = uU * ("-" == qU ? -1 : 1) + TU.number);
            let CU = RU.doc.line(Math.max(1, Math.min(RU.doc.lines, uU))),
              hU = pU.k.cursor(CU.from + Math.max(0, Math.min(jU, CU.length)));
            UU.dispatch({
              effects: [EU, tU.h.scrollIntoView(hU.from, {
                y: "center"
              })],
              selection: hU
            })
          })), !0
        }
      }, {
        key: "Mod-d",
        run: UU => {
          let {
            state: RU,
            dispatch: gU
          } = UU, {
            hu: EU
          } = RU.selection;
          if (EU.some((UU => UU.from === UU.to))) return (UU => {
            let {
              state: RU,
              dispatch: gU
            } = UU, {
              selection: tU
            } = RU, EU = pU.k.create(tU.hu.map((UU => RU.wordAt(UU.head) || pU.k.cursor(UU.head))), tU.mainIndex);
            return !EU.eq(tU) && (gU(RU.update({
              selection: EU
            })), !0)
          })({
            state: RU,
            dispatch: gU
          });
          let PU = RU.sliceDoc(EU[0].from, EU[0].to);
          if (RU.selection.hu.some((UU => RU.sliceDoc(UU.from, UU.to) != PU))) return !1;
          let qU = function(UU, RU) {
            let {
              main: gU,
              hu: tU
            } = UU.selection, pU = UU.wordAt(gU.head), EU = pU && pU.from == gU.from && pU.to == gU.to;
            for (let PU = !1, qU = new TU(UU.doc, RU, tU[tU.length - 1].to);;) {
              if (qU.next(), !qU.done) {
                if (PU && tU.some((UU => UU.from == qU.value.from))) continue;
                if (EU) {
                  let RU = UU.wordAt(qU.value.from);
                  if (!RU || RU.from != qU.value.from || RU.to != qU.value.to) continue
                }
                return qU.value
              }
              if (PU) return null;
              qU = new TU(UU.doc, RU, 0, Math.max(0, tU[tU.length - 1].from - 1)), PU = !0
            }
          }(RU, PU);
          return !!qU && (gU(RU.update({
            selection: RU.selection.addRange(pU.k.range(qU.from, qU.to), !1),
            effects: tU.h.scrollIntoView(qU.to)
          })), !0)
        },
        preventDefault: !0
      }];
    class UR {
      constructor(UU) {
        this.view = UU;
        let RU = this.query = UU.state.field(XU).query.spec;

        function gU(UU, RU, gU) {
          return (0, EU.d)("button", {
            class: "cm-button",
            name: UU,
            onclick: RU,
            type: "button"
          }, gU)
        }
        this.commit = this.commit.bind(this), this.searchField = (0, EU.d)("input", {
          value: RU.search,
          placeholder: RR(UU, "Find"),
          "aria-label": RR(UU, "Find"),
          class: "cm-textfield",
          name: "search",
          form: "",
          "main-field": "true",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.replaceField = (0, EU.d)("input", {
          value: RU.replace,
          placeholder: RR(UU, "Replace"),
          "aria-label": RR(UU, "Replace"),
          class: "cm-textfield",
          name: "replace",
          form: "",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.caseField = (0, EU.d)("input", {
          type: "checkbox",
          name: "case",
          form: "",
          checked: RU.caseSensitive,
          onchange: this.commit
        }), this.reField = (0, EU.d)("input", {
          type: "checkbox",
          name: "re",
          form: "",
          checked: RU.regexp,
          onchange: this.commit
        }), this.wordField = (0, EU.d)("input", {
          type: "checkbox",
          name: "word",
          form: "",
          checked: RU.wholeWord,
          onchange: this.commit
        }), this.dom = (0, EU.d)("div", {
          onkeydown: UU => this.keydown(UU),
          class: "cm-search"
        }, [this.searchField, gU("next", (() => yU(UU)), [RR(UU, "next")]), gU("prev", (() => kU(UU)), [RR(UU, "previous")]), gU("select", (() => FU(UU)), [RR(UU, "all")]), (0, EU.d)("label", null, [this.caseField, RR(UU, "match case")]), (0, EU.d)("label", null, [this.reField, RR(UU, "regexp")]), (0, EU.d)("label", null, [this.wordField, RR(UU, "by word")]), ...UU.state.readOnly ? [] : [(0, EU.d)("br"), this.replaceField, gU("replace", (() => iU(UU)), [RR(UU, "replace")]), gU("replaceAll", (() => AU(UU)), [RR(UU, "replace all")])], (0, EU.d)("button", {
          name: "close",
          onclick: () => lU(UU),
          "aria-label": RR(UU, "close"),
          type: "button"
        }, ["\xd7"])])
      }
      commit() {
        let UU = new wU({
          search: this.searchField.value,
          caseSensitive: this.caseField.checked,
          regexp: this.reField.checked,
          wholeWord: this.wordField.checked,
          replace: this.replaceField.value
        });
        UU.eq(this.query) || (this.query = UU, this.view.dispatch({
          effects: VU.of(UU)
        }))
      }
      keydown(UU) {
        (0, tU.W)(this.view, UU, "search-panel") ? UU.preventDefault(): 13 == UU.keyCode && UU.target == this.searchField ? (UU.preventDefault(), (UU.shiftKey ? kU : yU)(this.view)) : 13 == UU.keyCode && UU.target == this.replaceField && (UU.preventDefault(), iU(this.view))
      }
      update(UU) {
        for (let RU of UU.transactions)
          for (let UU of RU.effects) UU.is(VU) && !UU.value.eq(this.query) && this.setQuery(UU.value)
      }
      setQuery(UU) {
        this.query = UU, this.searchField.value = UU.search, this.replaceField.value = UU.replace, this.caseField.checked = UU.caseSensitive, this.reField.checked = UU.regexp, this.wordField.checked = UU.wholeWord
      }
      mount() {
        this.searchField.select()
      }
      get pos() {
        return 80
      }
      get top() {
        return this.view.state.facet(JU).top
      }
    }

    function RR(UU, RU) {
      return UU.state.phrase(RU)
    }
    const gR = 30,
      tR = /[\s\.,:;?!]/;

    function pR(UU, RU) {
      let {
        from: gU,
        to: pU
      } = RU, EU = UU.state.doc.lineAt(gU), PU = UU.state.doc.lineAt(pU).to, TU = Math.max(EU.from, gU - gR), qU = Math.min(PU, pU + gR), KU = UU.state.sliceDoc(TU, qU);
      if (TU != EU.from)
        for (let tU = 0; tU < gR; tU++)
          if (!tR.test(KU[tU + 1]) && tR.test(KU[tU])) {
            KU = KU.slice(tU);
            break
          } if (qU != PU)
        for (let tU = KU.length - 1; tU > KU.length - gR; tU--)
          if (!tR.test(KU[tU - 1]) && tR.test(KU[tU])) {
            KU = KU.slice(0, tU);
            break
          } return tU.h.announce.of(`${UU.state.phrase("current match")}. ${KU} ${UU.state.phrase("on line")} ${EU.number}.`)
    }
    const ER = tU.h.baseTheme({
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
      PR = [XU, pU.s.low(SU), ER]
  },
  40707: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => BU,
      d: () => KR,
      h: () => op,
      k: () => TP,
      l: () => LR,
      o: () => aU,
      s: () => YE,
      v: () => lp,
      x: () => TE,
      y: () => lE,
      A: () => DE,
      E: () => jP,
      J: () => fE,
      G: () => BP,
      K: () => hE,
      M: () => ME,
      N: () => vp,
      P: () => oP,
      Q: () => AR,
      R: () => JE,
      S: () => oE,
      W: () => Sp,
      X: () => tP,
      Z: () => gP,
      bb: () => yE
    });
    for (var tU = gU(40700), pU = gU(40714), EU = {
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
      }, PU = {
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
      }, TU = "undefined" != typeof navigator && /Mac/.test(navigator.platform), qU = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), KU = 0; KU < 10; KU++) EU[48 + KU] = EU[96 + KU] = String(KU);
    for (KU = 1; KU <= 24; KU++) EU[KU + 111] = "F" + KU;
    for (KU = 65; KU <= 90; KU++) EU[KU] = String.fromCharCode(KU + 32), PU[KU] = String.fromCharCode(KU);
    for (var cU in EU) PU.hasOwnProperty(cU) || (PU[cU] = EU[cU]);
    var GU = gU(40719);
    let jU = "undefined" != typeof navigator ? navigator : {
        userAgent: "",
        vendor: "",
        platform: ""
      },
      uU = "undefined" != typeof document ? document : {
        documentElement: {
          style: {}
        }
      };
    const CU = /Edge\/(\d+)/.exec(jU.userAgent),
      hU = /MSIE \d/.test(jU.userAgent),
      QU = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(jU.userAgent),
      eU = !!(hU || QU || CU),
      WU = !eU && /gecko\/(\d+)/i.test(jU.userAgent),
      fU = !eU && /Chrome\/(\d+)/.exec(jU.userAgent),
      xU = "webkitFontSmoothing" in uU.documentElement.style,
      mU = !eU && /Apple Computer/.test(jU.vendor),
      IU = mU && (/Mobile\/\w+/.test(jU.userAgent) || jU.maxTouchPoints > 2);
    var JU = {
      mac: IU || /Mac/.test(jU.platform),
      windows: /Win/.test(jU.platform),
      linux: /Linux|X11/.test(jU.platform),
      ie: eU,
      ie_version: hU ? uU.documentMode || 6 : QU ? +QU[1] : CU ? +CU[1] : 0,
      gecko: WU,
      gecko_version: WU ? +(/Firefox\/(\d+)/.exec(jU.userAgent) || [0, 0])[1] : 0,
      chrome: !!fU,
      chrome_version: fU ? +fU[1] : 0,
      ios: IU,
      android: /Android\b/.test(jU.userAgent),
      webkit: xU,
      webkit_version: xU ? +(/\bAppleWebKit\/(\d+)/.exec(jU.userAgent) || [0, 0])[1] : 0,
      safari: mU,
      safari_version: mU ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(jU.userAgent) || [0, 0])[1] : 0,
      tabSize: null != uU.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size"
    };

    function wU(UU, RU) {
      for (let gU in UU) "class" == gU && RU.class ? RU.class += " " + UU.class : "style" == gU && RU.style ? RU.style += ";" + UU.style : RU[gU] = UU[gU];
      return RU
    }
    const nU = Object.create(null);

    function bU(UU, RU, gU) {
      if (UU == RU) return !0;
      UU || (UU = nU), RU || (RU = nU);
      let tU = Object.keys(UU),
        pU = Object.keys(RU);
      if (tU.length - (gU && tU.indexOf(gU) > -1 ? 1 : 0) != pU.length - (gU && pU.indexOf(gU) > -1 ? 1 : 0)) return !1;
      for (let EU of tU)
        if (EU != gU && (-1 == pU.indexOf(EU) || UU[EU] !== RU[EU])) return !1;
      return !0
    }

    function oU(UU, RU, gU) {
      let tU = !1;
      if (RU)
        for (let pU in RU) gU && pU in gU || (tU = !0, "style" == pU ? UU.style.cssText = "" : UU.removeAttribute(pU));
      if (gU)
        for (let pU in gU) RU && RU[pU] == gU[pU] || (tU = !0, "style" == pU ? UU.style.cssText = gU[pU] : UU.setAttribute(pU, gU[pU]));
      return tU
    }

    function ZU(UU) {
      let RU = Object.create(null);
      for (let gU = 0; gU < UU.attributes.length; gU++) {
        let tU = UU.attributes[gU];
        RU[tU.name] = tU.value
      }
      return RU
    }
    class aU {
      eq(UU) {
        return !1
      }
      updateDOM(UU, RU, gU) {
        return !1
      }
      compare(UU) {
        return this == UU || this.constructor == UU.constructor && this.eq(UU)
      }
      get estimatedHeight() {
        return -1
      }
      get lineBreaks() {
        return 0
      }
      ignoreEvent(UU) {
        return !0
      }
      coordsAt(UU, RU, gU) {
        return null
      }
      get isHidden() {
        return !1
      }
      get editable() {
        return !1
      }
      destroy(UU) {}
    }
    var YU = function(UU) {
      return UU[UU.Text = 0] = "Text", UU[UU.WidgetBefore = 1] = "WidgetBefore", UU[UU.WidgetAfter = 2] = "WidgetAfter", UU[UU.WidgetRange = 3] = "WidgetRange", UU
    }(YU || (YU = {}));
    class BU extends tU.x {
      constructor(UU, RU, gU, tU) {
        super(), this.startSide = UU, this.endSide = RU, this.widget = gU, this.spec = tU
      }
      get heightRelevant() {
        return !1
      }
      static mark(UU) {
        return new VU(UU)
      }
      static widget(UU) {
        let RU = Math.max(-1e4, Math.min(1e4, UU.side || 0)),
          gU = !!UU.block;
        return RU += gU && !UU.inlineOrder ? RU > 0 ? 3e8 : -4e8 : RU > 0 ? 1e8 : -1e8, new XU(UU, RU, RU, gU, UU.widget || null, !1)
      }
      static replace(UU) {
        let RU, gU, tU = !!UU.block;
        if (UU.isBlockGap) RU = -5e8, gU = 4e8;
        else {
          let {
            start: pU,
            end: EU
          } = vU(UU, tU);
          RU = (pU ? tU ? -3e8 : -1 : 5e8) - 1, gU = 1 + (EU ? tU ? 2e8 : 1 : -6e8)
        }
        return new XU(UU, RU, gU, tU, UU.widget || null, !0)
      }
      static line(UU) {
        return new rU(UU)
      }
      static set(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return tU.v.of(UU, RU)
      }
      hasHeight() {
        return !!this.widget && this.widget.estimatedHeight > -1
      }
    }
    BU.none = tU.v.empty;
    class VU extends BU {
      constructor(UU) {
        let {
          start: RU,
          end: gU
        } = vU(UU);
        super(RU ? -1 : 5e8, gU ? 1 : -6e8, null, UU), this.tagName = UU.tagName || "span", this.attrs = UU.class && UU.attributes ? wU(UU.attributes, {
          class: UU.class
        }) : UU.class ? {
          class: UU.class
        } : UU.attributes || nU
      }
      eq(UU) {
        return this == UU || UU instanceof VU && this.tagName == UU.tagName && bU(this.attrs, UU.attrs)
      }
      range(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UU;
        if (UU >= RU) throw new RangeError("Mark decorations may not be empty");
        return super.range(UU, RU)
      }
    }
    VU.prototype.point = !1;
    class rU extends BU {
      constructor(UU) {
        super(-2e8, -2e8, null, UU)
      }
      eq(UU) {
        return UU instanceof rU && this.spec.class == UU.spec.class && bU(this.spec.attributes, UU.spec.attributes)
      }
      range(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UU;
        if (RU != UU) throw new RangeError("Line decoration ranges must be zero-length");
        return super.range(UU, RU)
      }
    }
    rU.prototype.mapMode = tU.q.TrackBefore, rU.prototype.point = !0;
    class XU extends BU {
      constructor(UU, RU, gU, pU, EU, PU) {
        super(RU, gU, EU, UU), this.block = pU, this.isReplace = PU, this.mapMode = pU ? RU <= 0 ? tU.q.TrackBefore : tU.q.TrackAfter : tU.q.TrackDel
      }
      get type() {
        return this.startSide != this.endSide ? YU.WidgetRange : this.startSide <= 0 ? YU.WidgetBefore : YU.WidgetAfter
      }
      get heightRelevant() {
        return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0)
      }
      eq(UU) {
        return UU instanceof XU && (RU = this.widget, gU = UU.widget, RU == gU || !!(RU && gU && RU.compare(gU))) && this.block == UU.block && this.startSide == UU.startSide && this.endSide == UU.endSide;
        var RU, gU
      }
      range(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UU;
        if (this.isReplace && (UU > RU || UU == RU && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && RU != UU) throw new RangeError("Widget decorations can only have zero-length ranges");
        return super.range(UU, RU)
      }
    }

    function vU(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          inclusiveStart: gU,
          inclusiveEnd: tU
        } = UU;
      return null == gU && (gU = UU.inclusive), null == tU && (tU = UU.inclusive), {
        start: null !== gU && void 0 !== gU ? gU : RU,
        end: null !== tU && void 0 !== tU ? tU : RU
      }
    }

    function dU(UU, RU, gU) {
      let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        pU = gU.length - 1;
      pU >= 0 && gU[pU] + tU >= UU ? gU[pU] = Math.max(gU[pU], RU) : gU.push(UU, RU)
    }
    XU.prototype.point = !0;
    class HU extends tU.x {
      constructor(UU, RU) {
        super(), this.tagName = UU, this.attributes = RU
      }
      eq(UU) {
        return UU == this || UU instanceof HU && this.tagName == UU.tagName && bU(this.attributes, UU.attributes)
      }
      static create(UU) {
        return new HU(UU.tagName, UU.attributes || nU)
      }
      static set(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return tU.v.of(UU, RU)
      }
    }

    function SU(UU) {
      let RU;
      return RU = 11 == UU.nodeType ? UU.getSelection ? UU : UU.ownerDocument : UU, RU.getSelection()
    }

    function sU(UU, RU) {
      return !!RU && (UU == RU || UU.contains(1 != RU.nodeType ? RU.parentNode : RU))
    }

    function yU(UU, RU) {
      if (!RU.anchorNode) return !1;
      try {
        return sU(UU, RU.anchorNode)
      } catch (gU) {
        return !1
      }
    }

    function kU(UU) {
      return 3 == UU.nodeType ? tR(UU, 0, UU.nodeValue.length).getClientRects() : 1 == UU.nodeType ? UU.getClientRects() : []
    }

    function FU(UU, RU, gU, tU) {
      return !!gU && (zU(UU, RU, gU, tU, -1) || zU(UU, RU, gU, tU, 1))
    }

    function iU(UU) {
      for (var RU = 0;; RU++)
        if (!(UU = UU.previousSibling)) return RU
    }

    function AU(UU) {
      return 1 == UU.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(UU.nodeName)
    }

    function zU(UU, RU, gU, tU, pU) {
      for (;;) {
        if (UU == gU && RU == tU) return !0;
        if (RU == (pU < 0 ? 0 : MU(UU))) {
          if ("DIV" == UU.nodeName) return !1;
          let gU = UU.parentNode;
          if (!gU || 1 != gU.nodeType) return !1;
          RU = iU(UU) + (pU < 0 ? 0 : 1), UU = gU
        } else {
          if (1 != UU.nodeType) return !1;
          if (1 == (UU = UU.childNodes[RU + (pU < 0 ? -1 : 0)]).nodeType && "false" == UU.contentEditable) return !1;
          RU = pU < 0 ? MU(UU) : 0
        }
      }
    }

    function MU(UU) {
      return 3 == UU.nodeType ? UU.nodeValue.length : UU.childNodes.length
    }

    function DU(UU, RU) {
      let gU = RU ? UU.left : UU.right;
      return {
        left: gU,
        right: gU,
        top: UU.top,
        bottom: UU.bottom
      }
    }

    function LU(UU) {
      let RU = UU.visualViewport;
      return RU ? {
        left: 0,
        right: RU.width,
        top: 0,
        bottom: RU.height
      } : {
        left: 0,
        right: UU.innerWidth,
        top: 0,
        bottom: UU.innerHeight
      }
    }

    function NU(UU, RU) {
      let gU = RU.width / UU.offsetWidth,
        tU = RU.height / UU.offsetHeight;
      return (gU > .995 && gU < 1.005 || !isFinite(gU) || Math.abs(RU.width - UU.offsetWidth) < 1) && (gU = 1), (tU > .995 && tU < 1.005 || !isFinite(tU) || Math.abs(RU.height - UU.offsetHeight) < 1) && (tU = 1), {
        scaleX: gU,
        scaleY: tU
      }
    }

    function lU(UU) {
      let RU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        gU = UU.ownerDocument,
        tU = null,
        pU = null;
      for (let EU = UU.parentNode; EU && (EU != gU.body && (RU && !tU || !pU));)
        if (1 == EU.nodeType) !pU && EU.scrollHeight > EU.clientHeight && (pU = EU), RU && !tU && EU.scrollWidth > EU.clientWidth && (tU = EU), EU = EU.assignedSlot || EU.parentNode;
        else {
          if (11 != EU.nodeType) break;
          EU = EU.host
        } return {
        x: tU,
        y: pU
      }
    }
    HU.prototype.startSide = HU.prototype.endSide = -1;
    class OU {
      constructor() {
        this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
      }
      eq(UU) {
        return this.anchorNode == UU.anchorNode && this.anchorOffset == UU.anchorOffset && this.focusNode == UU.focusNode && this.focusOffset == UU.focusOffset
      }
      setRange(UU) {
        let {
          anchorNode: RU,
          focusNode: gU
        } = UU;
        this.set(RU, Math.min(UU.anchorOffset, RU ? MU(RU) : 0), gU, Math.min(UU.focusOffset, gU ? MU(gU) : 0))
      }
      set(UU, RU, gU, tU) {
        this.anchorNode = UU, this.anchorOffset = RU, this.focusNode = gU, this.focusOffset = tU
      }
    }
    let UR, RR = null;

    function gR(UU) {
      if (UU.setActive) return UU.setActive();
      if (RR) return UU.focus(RR);
      let RU = [];
      for (let gU = UU; gU && (RU.push(gU, gU.scrollTop, gU.scrollLeft), gU != gU.ownerDocument); gU = gU.parentNode);
      if (UU.focus(null == RR ? {
          get preventScroll() {
            return RR = {
              preventScroll: !0
            }, !0
          }
        } : void 0), !RR) {
        RR = !1;
        for (let UU = 0; UU < RU.length;) {
          let gU = RU[UU++],
            tU = RU[UU++],
            pU = RU[UU++];
          gU.scrollTop != tU && (gU.scrollTop = tU), gU.scrollLeft != pU && (gU.scrollLeft = pU)
        }
      }
    }

    function tR(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : RU,
        tU = UR || (UR = document.createRange());
      return tU.setEnd(UU, gU), tU.setStart(UU, RU), tU
    }

    function pR(UU, RU, gU, tU) {
      let pU = {
        key: RU,
        code: RU,
        keyCode: gU,
        which: gU,
        cancelable: !0
      };
      tU && ({
        altKey: pU.altKey,
        ctrlKey: pU.ctrlKey,
        shiftKey: pU.shiftKey,
        metaKey: pU.metaKey
      } = tU);
      let EU = new KeyboardEvent("keydown", pU);
      EU.synthetic = !0, UU.dispatchEvent(EU);
      let PU = new KeyboardEvent("keyup", pU);
      return PU.synthetic = !0, UU.dispatchEvent(PU), EU.defaultPrevented || PU.defaultPrevented
    }

    function ER(UU) {
      return UU instanceof Window ? UU.pageYOffset > Math.max(0, UU.document.documentElement.scrollHeight - UU.innerHeight - 4) : UU.scrollTop > Math.max(1, UU.scrollHeight - UU.clientHeight - 4)
    }

    function PR(UU, RU) {
      for (let gU = UU, tU = RU;;) {
        if (3 == gU.nodeType && tU > 0) return {
          node: gU,
          offset: tU
        };
        if (1 == gU.nodeType && tU > 0) {
          if ("false" == gU.contentEditable) return null;
          gU = gU.childNodes[tU - 1], tU = MU(gU)
        } else {
          if (!gU.parentNode || AU(gU)) return null;
          tU = iU(gU), gU = gU.parentNode
        }
      }
    }

    function TR(UU, RU) {
      for (let gU = UU, tU = RU;;) {
        if (3 == gU.nodeType && tU < gU.nodeValue.length) return {
          node: gU,
          offset: tU
        };
        if (1 == gU.nodeType && tU < gU.childNodes.length) {
          if ("false" == gU.contentEditable) return null;
          gU = gU.childNodes[tU], tU = 0
        } else {
          if (!gU.parentNode || AU(gU)) return null;
          tU = iU(gU) + 1, gU = gU.parentNode
        }
      }
    }
    JU.safari && JU.safari_version >= 26 && (RR = !1);
    class qR {
      constructor(UU, RU) {
        let gU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.node = UU, this.offset = RU, this.precise = gU
      }
      static before(UU, RU) {
        return new qR(UU.parentNode, iU(UU), RU)
      }
      static after(UU, RU) {
        return new qR(UU.parentNode, iU(UU) + 1, RU)
      }
    }
    var KR = function(UU) {
      return UU[UU.LTR = 0] = "LTR", UU[UU.RTL = 1] = "RTL", UU
    }(KR || (KR = {}));
    const cR = KR.LTR,
      GR = KR.RTL;

    function jR(UU) {
      let RU = [];
      for (let gU = 0; gU < UU.length; gU++) RU.push(1 << +UU[gU]);
      return RU
    }
    const uR = jR("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),
      CR = jR("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),
      hR = Object.create(null),
      QR = [];
    for (let VP of ["()", "[]", "{}"]) {
      let UU = VP.charCodeAt(0),
        RU = VP.charCodeAt(1);
      hR[UU] = RU, hR[RU] = -UU
    }

    function eR(UU) {
      return UU <= 247 ? uR[UU] : 1424 <= UU && UU <= 1524 ? 2 : 1536 <= UU && UU <= 1785 ? CR[UU - 1536] : 1774 <= UU && UU <= 2220 ? 4 : 8192 <= UU && UU <= 8204 ? 256 : 64336 <= UU && UU <= 65023 ? 4 : 1
    }
    const WR = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
    class fR {
      get dir() {
        return this.level % 2 ? GR : cR
      }
      constructor(UU, RU, gU) {
        this.from = UU, this.to = RU, this.level = gU
      }
      side(UU, RU) {
        return this.dir == RU == UU ? this.to : this.from
      }
      forward(UU, RU) {
        return UU == (this.dir == RU)
      }
      static find(UU, RU, gU, tU) {
        let pU = -1;
        for (let EU = 0; EU < UU.length; EU++) {
          let PU = UU[EU];
          if (PU.from <= RU && PU.to >= RU) {
            if (PU.level == gU) return EU;
            (pU < 0 || (0 != tU ? tU < 0 ? PU.from < RU : PU.to > RU : UU[pU].level > PU.level)) && (pU = EU)
          }
        }
        if (pU < 0) throw new RangeError("Index out of range");
        return pU
      }
    }

    function xR(UU, RU) {
      if (UU.length != RU.length) return !1;
      for (let gU = 0; gU < UU.length; gU++) {
        let tU = UU[gU],
          pU = RU[gU];
        if (tU.from != pU.from || tU.to != pU.to || tU.direction != pU.direction || !xR(tU.inner, pU.inner)) return !1
      }
      return !0
    }
    const mR = [];

    function IR(UU, RU, gU, tU, pU, EU, PU) {
      let TU = tU % 2 ? 2 : 1;
      if (tU % 2 == pU % 2)
        for (let qU = RU, KU = 0; qU < gU;) {
          let RU = !0,
            cU = !1;
          if (KU == EU.length || qU < EU[KU].from) {
            let UU = mR[qU];
            UU != TU && (RU = !1, cU = 16 == UU)
          }
          let GU = RU || 1 != TU ? null : [],
            jU = RU ? tU : tU + 1,
            uU = qU;
          UU: for (;;)
            if (KU < EU.length && uU == EU[KU].from) {
              if (cU) break UU;
              let CU = EU[KU];
              if (!RU)
                for (let UU = CU.to, RU = KU + 1;;) {
                  if (UU == gU) break UU;
                  if (!(RU < EU.length && EU[RU].from == UU)) {
                    if (mR[UU] == TU) break UU;
                    break
                  }
                  UU = EU[RU++].to
                }
              if (KU++, GU) GU.push(CU);
              else {
                CU.from > qU && PU.push(new fR(qU, CU.from, jU)), JR(UU, CU.direction == cR != !(jU % 2) ? tU + 1 : tU, pU, CU.inner, CU.from, CU.to, PU), qU = CU.to
              }
              uU = CU.to
            } else {
              if (uU == gU || (RU ? mR[uU] != TU : mR[uU] == TU)) break;
              uU++
            } GU ? IR(UU, qU, uU, tU + 1, pU, GU, PU) : qU < uU && PU.push(new fR(qU, uU, jU)), qU = uU
        } else
          for (let qU = gU, KU = EU.length; qU > RU;) {
            let gU = !0,
              cU = !1;
            if (!KU || qU > EU[KU - 1].to) {
              let UU = mR[qU - 1];
              UU != TU && (gU = !1, cU = 16 == UU)
            }
            let GU = gU || 1 != TU ? null : [],
              jU = gU ? tU : tU + 1,
              uU = qU;
            UU: for (;;)
              if (KU && uU == EU[KU - 1].to) {
                if (cU) break UU;
                let CU = EU[--KU];
                if (!gU)
                  for (let UU = CU.from, gU = KU;;) {
                    if (UU == RU) break UU;
                    if (!gU || EU[gU - 1].to != UU) {
                      if (mR[UU - 1] == TU) break UU;
                      break
                    }
                    UU = EU[--gU].from
                  }
                if (GU) GU.push(CU);
                else {
                  CU.to < qU && PU.push(new fR(CU.to, qU, jU)), JR(UU, CU.direction == cR != !(jU % 2) ? tU + 1 : tU, pU, CU.inner, CU.from, CU.to, PU), qU = CU.from
                }
                uU = CU.from
              } else {
                if (uU == RU || (gU ? mR[uU - 1] != TU : mR[uU - 1] == TU)) break;
                uU--
              } GU ? IR(UU, uU, qU, tU + 1, pU, GU, PU) : uU < qU && PU.push(new fR(uU, qU, jU)), qU = uU
          }
    }

    function JR(UU, RU, gU, tU, pU, EU, PU) {
      let TU = RU % 2 ? 2 : 1;
      ! function(UU, RU, gU, tU, pU) {
        for (let EU = 0; EU <= tU.length; EU++) {
          let PU = EU ? tU[EU - 1].to : RU,
            TU = EU < tU.length ? tU[EU].from : gU,
            qU = EU ? 256 : pU;
          for (let RU = PU, gU = qU, tU = qU; RU < TU; RU++) {
            let pU = eR(UU.charCodeAt(RU));
            512 == pU ? pU = gU : 8 == pU && 4 == tU && (pU = 16), mR[RU] = 4 == pU ? 2 : pU, 7 & pU && (tU = pU), gU = pU
          }
          for (let UU = PU, RU = qU, tU = qU; UU < TU; UU++) {
            let pU = mR[UU];
            if (128 == pU) UU < TU - 1 && RU == mR[UU + 1] && 24 & RU ? pU = mR[UU] = RU : mR[UU] = 256;
            else if (64 == pU) {
              let pU = UU + 1;
              for (; pU < TU && 64 == mR[pU];) pU++;
              let EU = UU && 8 == RU || pU < gU && 8 == mR[pU] ? 1 == tU ? 1 : 8 : 256;
              for (let RU = UU; RU < pU; RU++) mR[RU] = EU;
              UU = pU - 1
            } else 8 == pU && 1 == tU && (mR[UU] = 1);
            RU = pU, 7 & pU && (tU = pU)
          }
        }
      }(UU, pU, EU, tU, TU),
      function(UU, RU, gU, tU, pU) {
        let EU = 1 == pU ? 2 : 1;
        for (let PU = 0, TU = 0, qU = 0; PU <= tU.length; PU++) {
          let KU = PU ? tU[PU - 1].to : RU,
            cU = PU < tU.length ? tU[PU].from : gU;
          for (let RU, gU, tU, PU = KU; PU < cU; PU++)
            if (gU = hR[RU = UU.charCodeAt(PU)])
              if (gU < 0) {
                for (let UU = TU - 3; UU >= 0; UU -= 3)
                  if (QR[UU + 1] == -gU) {
                    let RU = QR[UU + 2],
                      gU = 2 & RU ? pU : 4 & RU ? 1 & RU ? EU : pU : 0;
                    gU && (mR[PU] = mR[QR[UU]] = gU), TU = UU;
                    break
                  }
              } else {
                if (189 == QR.length) break;
                QR[TU++] = PU, QR[TU++] = RU, QR[TU++] = qU
              }
          else if (2 == (tU = mR[PU]) || 1 == tU) {
            let UU = tU == pU;
            qU = UU ? 0 : 1;
            for (let RU = TU - 3; RU >= 0; RU -= 3) {
              let gU = QR[RU + 2];
              if (2 & gU) break;
              if (UU) QR[RU + 2] |= 2;
              else {
                if (4 & gU) break;
                QR[RU + 2] |= 4
              }
            }
          }
        }
      }(UU, pU, EU, tU, TU),
      function(UU, RU, gU, tU) {
        for (let pU = 0, EU = tU; pU <= gU.length; pU++) {
          let PU = pU ? gU[pU - 1].to : UU,
            TU = pU < gU.length ? gU[pU].from : RU;
          for (let qU = PU; qU < TU;) {
            let PU = mR[qU];
            if (256 == PU) {
              let PU = qU + 1;
              for (;;)
                if (PU == TU) {
                  if (pU == gU.length) break;
                  PU = gU[pU++].to, TU = pU < gU.length ? gU[pU].from : RU
                } else {
                  if (256 != mR[PU]) break;
                  PU++
                } let KU = 1 == EU,
                cU = KU == (1 == (PU < RU ? mR[PU] : tU)) ? KU ? 1 : 2 : tU;
              for (let RU = PU, tU = pU, EU = tU ? gU[tU - 1].to : UU; RU > qU;) RU == EU && (RU = gU[--tU].from, EU = tU ? gU[tU - 1].to : UU), mR[--RU] = cU;
              qU = PU
            } else EU = PU, qU++
          }
        }
      }(pU, EU, tU, TU), IR(UU, pU, EU, RU, gU, tU, PU)
    }

    function wR(UU, RU, gU) {
      if (!UU) return [new fR(0, 0, RU == GR ? 1 : 0)];
      if (RU == cR && !gU.length && !WR.test(UU)) return nR(UU.length);
      if (gU.length)
        for (; UU.length > mR.length;) mR[mR.length] = 256;
      let tU = [],
        pU = RU == cR ? 0 : 1;
      return JR(UU, pU, pU, gU, 0, UU.length, tU), tU
    }

    function nR(UU) {
      return [new fR(0, UU, 0)]
    }
    let bR = "";

    function oR(UU, RU, gU, pU, EU) {
      var PU;
      let TU = pU.head - UU.from,
        qU = fR.find(RU, TU, null !== (PU = pU.bidiLevel) && void 0 !== PU ? PU : -1, pU.assoc),
        KU = RU[qU],
        cU = KU.side(EU, gU);
      if (TU == cU) {
        let UU = qU += EU ? 1 : -1;
        if (UU < 0 || UU >= RU.length) return null;
        KU = RU[qU = UU], TU = KU.side(!EU, gU), cU = KU.side(EU, gU)
      }
      let GU = (0, tU.V)(UU.text, TU, KU.forward(EU, gU));
      (GU < KU.from || GU > KU.to) && (GU = cU), bR = UU.text.slice(Math.min(TU, GU), Math.max(TU, GU));
      let jU = qU == (EU ? RU.length - 1 : 0) ? null : RU[qU + (EU ? 1 : -1)];
      return jU && GU == cU && jU.level + (EU ? 0 : 1) < KU.level ? tU.k.cursor(jU.side(!EU, gU) + UU.from, jU.forward(EU, gU) ? 1 : -1, jU.level) : tU.k.cursor(GU + UU.from, KU.forward(EU, gU) ? -1 : 1, KU.level)
    }

    function ZR(UU, RU, gU) {
      for (let tU = RU; tU < gU; tU++) {
        let RU = eR(UU.charCodeAt(tU));
        if (1 == RU) return cR;
        if (2 == RU || 4 == RU) return GR
      }
      return cR
    }
    const aR = tU.p.define(),
      YR = tU.p.define(),
      BR = tU.p.define(),
      VR = tU.p.define(),
      rR = tU.p.define(),
      XR = tU.p.define(),
      vR = tU.p.define(),
      dR = tU.p.define(),
      HR = tU.p.define(),
      SR = tU.p.define({
        combine: UU => UU.some((UU => UU))
      }),
      sR = tU.p.define({
        combine: UU => UU.some((UU => UU))
      }),
      yR = tU.p.define();
    class kR {
      constructor(UU, RU, gU, tU, pU) {
        let EU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.range = UU, this.y = RU, this.x = gU, this.yMargin = tU, this.xMargin = pU, this.isSnapshot = EU
      }
      map(UU) {
        return UU.empty ? this : new kR(this.range.map(UU), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
      clip(UU) {
        return this.range.to <= UU.doc.length ? this : new kR(tU.k.cursor(UU.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
    }
    const FR = tU.A.define({
        map: (UU, RU) => UU.map(RU)
      }),
      iR = tU.A.define();

    function AR(UU, RU, gU) {
      let tU = UU.facet(VR);
      tU.length ? tU[0](RU) : window.onerror && window.onerror(String(RU), gU, void 0, void 0, RU) || (gU ? console.error(gU + ":", RU) : console.error(RU))
    }
    const zR = tU.p.define({
      combine: UU => !UU.length || UU[0]
    });
    let MR = 0;
    const DR = tU.p.define({
      combine: UU => UU.filter(((RU, gU) => {
        for (let tU = 0; tU < gU; tU++)
          if (UU[tU].plugin == RU.plugin) return !1;
        return !0
      }))
    });
    class LR {
      constructor(UU, RU, gU, tU, pU) {
        this.id = UU, this.create = RU, this.domEventHandlers = gU, this.domEventObservers = tU, this.baseExtensions = pU(this), this.extension = this.baseExtensions.concat(DR.of({
          plugin: this,
          arg: void 0
        }))
      }
      of(UU) {
        return this.baseExtensions.concat(DR.of({
          plugin: this,
          arg: UU
        }))
      }
      static define(UU, RU) {
        const {
          eventHandlers: gU,
          eventObservers: tU,
          provide: pU,
          Yt: EU
        } = RU || {};
        return new LR(MR++, UU, gU, tU, (UU => {
          let RU = [];
          return EU && RU.push(Ug.of((RU => {
            let gU = RU.plugin(UU);
            return gU ? EU(gU) : BU.none
          }))), pU && RU.push(pU(UU)), RU
        }))
      }
      static fromClass(UU, RU) {
        return LR.define(((RU, gU) => new UU(RU, gU)), RU)
      }
    }
    class NR {
      constructor(UU) {
        this.spec = UU, this.mustUpdate = null, this.value = null
      }
      get plugin() {
        return this.spec && this.spec.plugin
      }
      update(UU) {
        if (this.value) {
          if (this.mustUpdate) {
            let UU = this.mustUpdate;
            if (this.mustUpdate = null, this.value.update) try {
              this.value.update(UU)
            } catch (RU) {
              if (AR(UU.state, RU, "CodeMirror plugin crashed"), this.value.destroy) try {
                this.value.destroy()
              } catch (gU) {}
              this.deactivate()
            }
          }
        } else if (this.spec) try {
          this.value = this.spec.plugin.create(UU, this.spec.arg)
        } catch (RU) {
          AR(UU.state, RU, "CodeMirror plugin crashed"), this.deactivate()
        }
        return this
      }
      destroy(UU) {
        var RU;
        if (null === (RU = this.value) || void 0 === RU ? void 0 : RU.destroy) try {
          this.value.destroy()
        } catch (gU) {
          AR(UU.state, gU, "CodeMirror plugin crashed")
        }
      }
      deactivate() {
        this.spec = this.value = null
      }
    }
    const lR = tU.p.define(),
      OR = tU.p.define(),
      Ug = tU.p.define(),
      Rg = tU.p.define(),
      gg = tU.p.define(),
      tg = tU.p.define(),
      pg = tU.p.define();

    function Eg(UU, RU) {
      let gU = UU.state.facet(pg);
      if (!gU.length) return gU;
      let pU = gU.map((RU => RU instanceof Function ? RU(UU) : RU)),
        EU = [];
      return tU.v.spans(pU, RU.from, RU.to, {
        point() {},
        span(UU, gU, tU, pU) {
          let PU = UU - RU.from,
            TU = gU - RU.from,
            qU = EU;
          for (let EU = tU.length - 1; EU >= 0; EU--, pU--) {
            let UU, gU = tU[EU].spec.bidiIsolate;
            if (null == gU && (gU = ZR(RU.text, PU, TU)), pU > 0 && qU.length && (UU = qU[qU.length - 1]).to == PU && UU.direction == gU) UU.to = TU, qU = UU.inner;
            else {
              let UU = {
                from: PU,
                to: TU,
                direction: gU,
                inner: []
              };
              qU.push(UU), qU = UU.inner
            }
          }
        }
      }), EU
    }
    const Pg = tU.p.define();

    function Tg(UU) {
      let RU = 0,
        gU = 0,
        tU = 0,
        pU = 0;
      for (let EU of UU.state.facet(Pg)) {
        let PU = EU(UU);
        PU && (null != PU.left && (RU = Math.max(RU, PU.left)), null != PU.right && (gU = Math.max(gU, PU.right)), null != PU.top && (tU = Math.max(tU, PU.top)), null != PU.bottom && (pU = Math.max(pU, PU.bottom)))
      }
      return {
        left: RU,
        right: gU,
        top: tU,
        bottom: pU
      }
    }
    const qg = tU.p.define();
    class Kg {
      constructor(UU, RU, gU, tU) {
        this.fromA = UU, this.toA = RU, this.fromB = gU, this.toB = tU
      }
      join(UU) {
        return new Kg(Math.min(this.fromA, UU.fromA), Math.max(this.toA, UU.toA), Math.min(this.fromB, UU.fromB), Math.max(this.toB, UU.toB))
      }
      addToSet(UU) {
        let RU = UU.length,
          gU = this;
        for (; RU > 0; RU--) {
          let tU = UU[RU - 1];
          if (!(tU.fromA > gU.toA)) {
            if (tU.toA < gU.fromA) break;
            gU = gU.join(tU), UU.splice(RU - 1, 1)
          }
        }
        return UU.splice(RU, 0, gU), UU
      }
      static extendWithRanges(UU, RU) {
        if (0 == RU.length) return UU;
        let gU = [];
        for (let tU = 0, pU = 0, EU = 0;;) {
          let PU = tU < UU.length ? UU[tU].fromB : 1e9,
            TU = pU < RU.length ? RU[pU] : 1e9,
            qU = Math.min(PU, TU);
          if (1e9 == qU) break;
          let KU = qU + EU,
            cU = qU,
            GU = KU;
          for (;;)
            if (pU < RU.length && RU[pU] <= cU) {
              let gU = RU[pU + 1];
              pU += 2, cU = Math.max(cU, gU);
              for (let RU = tU; RU < UU.length && UU[RU].fromB <= cU; RU++) EU = UU[RU].toA - UU[RU].toB;
              GU = Math.max(GU, gU + EU)
            } else {
              if (!(tU < UU.length && UU[tU].fromB <= cU)) break;
              {
                let RU = UU[tU++];
                cU = Math.max(cU, RU.toB), GU = Math.max(GU, RU.toA), EU = RU.toA - RU.toB
              }
            } gU.push(new Kg(KU, GU, qU, cU))
        }
        return gU
      }
    }
    class cg {
      constructor(UU, RU, gU) {
        this.view = UU, this.state = RU, this.transactions = gU, this.flags = 0, this.startState = UU.state, this.changes = tU.ChangeSet.empty(this.startState.doc.length);
        for (let tU of gU) this.changes = this.changes.compose(tU.changes);
        let pU = [];
        this.changes.iterChangedRanges(((UU, RU, gU, tU) => pU.push(new Kg(UU, RU, gU, tU)))), this.changedRanges = pU
      }
      static create(UU, RU, gU) {
        return new cg(UU, RU, gU)
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
        return this.transactions.some((UU => UU.selection))
      }
      get empty() {
        return 0 == this.flags && 0 == this.transactions.length
      }
    }
    const Gg = [];
    class jg {
      constructor(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.dom = UU, this.length = RU, this.flags = gU, this.parent = null, UU.cmTile = this
      }
      get breakAfter() {
        return 1 & this.flags
      }
      get children() {
        return Gg
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
      sync(UU) {
        if (this.flags |= 2, 4 & this.flags) {
          this.flags &= -5;
          let UU = this.domAttrs;
          UU && function(UU, RU) {
            for (let gU = UU.attributes.length - 1; gU >= 0; gU--) {
              let tU = UU.attributes[gU].name;
              null == RU[tU] && UU.removeAttribute(tU)
            }
            for (let gU in RU) {
              let tU = RU[gU];
              "style" == gU ? UU.style.cssText = tU : UU.getAttribute(gU) != tU && UU.setAttribute(gU, tU)
            }
          }(this.dom, UU)
        }
      }
      toString() {
        return this.constructor.name + (this.children.length ? `(${this.children})` : "") + (this.breakAfter ? "#" : "")
      }
      destroy() {
        this.parent = null
      }
      setDOM(UU) {
        this.dom = UU, UU.cmTile = this
      }
      get posAtStart() {
        return this.parent ? this.parent.posBefore(this) : 0
      }
      get posAtEnd() {
        return this.posAtStart + this.length
      }
      posBefore(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.posAtStart;
        for (let gU of this.children) {
          if (gU == UU) return RU;
          RU += gU.length + gU.breakAfter
        }
        throw new RangeError("Invalid child in posBefore")
      }
      posAfter(UU) {
        return this.posBefore(UU) + UU.length
      }
      covers(UU) {
        return !0
      }
      coordsIn(UU, RU) {
        return null
      }
      domPosFor(UU, RU) {
        let gU = iU(this.dom),
          tU = this.length ? UU > 0 : RU > 0;
        return new qR(this.parent.dom, gU + (tU ? 1 : 0), 0 == UU || UU == this.length)
      }
      markDirty(UU) {
        this.flags &= -3, UU && (this.flags |= 4), this.parent && 2 & this.parent.flags && this.parent.markDirty(!1)
      }
      get overrideDOMText() {
        return null
      }
      get root() {
        for (let UU = this; UU; UU = UU.parent)
          if (UU instanceof hg) return UU;
        return null
      }
      static get(UU) {
        return UU.cmTile
      }
    }
    class ug extends jg {
      constructor(UU) {
        super(UU, 0), this._children = []
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
      append(UU) {
        this.children.push(UU), UU.parent = this
      }
      sync(UU) {
        if (2 & this.flags) return;
        super.sync(UU);
        let RU, gU = this.dom,
          tU = null,
          pU = (null === UU || void 0 === UU ? void 0 : UU.node) == gU ? UU : null,
          EU = 0;
        for (let PU of this.children) {
          if (PU.sync(UU), EU += PU.length + PU.breakAfter, RU = tU ? tU.nextSibling : gU.firstChild, pU && RU != PU.dom && (pU.written = !0), PU.dom.parentNode == gU)
            for (; RU && RU != PU.dom;) RU = Cg(RU);
          else gU.insertBefore(PU.dom, RU);
          tU = PU.dom
        }
        for (RU = tU ? tU.nextSibling : gU.firstChild, pU && RU && (pU.written = !0); RU;) RU = Cg(RU);
        this.length = EU
      }
    }

    function Cg(UU) {
      let RU = UU.nextSibling;
      return UU.parentNode.removeChild(UU), RU
    }
    class hg extends ug {
      constructor(UU, RU) {
        super(RU), this.view = UU
      }
      owns(UU) {
        for (; UU; UU = UU.parent)
          if (UU == this) return !0;
        return !1
      }
      isBlock() {
        return !0
      }
      nearest(UU) {
        for (;;) {
          if (!UU) return null;
          let RU = jg.get(UU);
          if (RU && this.owns(RU)) return RU;
          UU = UU.parentNode
        }
      }
      blockTiles(UU) {
        for (let RU = [], gU = this, tU = 0, pU = 0;;)
          if (tU == gU.children.length) {
            if (!RU.length) return;
            gU = gU.parent, gU.breakAfter && pU++, tU = RU.pop()
          } else {
            let EU = gU.children[tU++];
            if (EU instanceof Qg) RU.push(tU), gU = EU, tU = 0;
            else {
              let RU = pU + EU.length,
                gU = UU(EU, pU);
              if (void 0 !== gU) return gU;
              pU = RU + EU.breakAfter
            }
          }
      }
      resolveBlock(UU, RU) {
        let gU, tU, pU = -1,
          EU = -1;
        if (this.blockTiles(((PU, TU) => {
            let qU = TU + PU.length;
            if (UU >= TU && UU <= qU) {
              if (PU.isWidget() && RU >= -1 && RU <= 1) {
                if (32 & PU.flags) return !0;
                16 & PU.flags && (gU = void 0)
              }(TU < UU || UU == qU && (RU < -1 ? PU.length : PU.covers(1))) && (!gU || !PU.isWidget() && gU.isWidget()) && (gU = PU, pU = UU - TU), (qU > UU || UU == TU && (RU > 1 ? PU.length : PU.covers(-1))) && (!tU || !PU.isWidget() && tU.isWidget()) && (tU = PU, EU = UU - TU)
            }
          })), !gU && !tU) throw new Error("No tile at position " + UU);
        return gU && RU < 0 || !tU ? {
          tile: gU,
          offset: pU
        } : {
          tile: tU,
          offset: EU
        }
      }
    }
    class Qg extends ug {
      constructor(UU, RU) {
        super(UU), this.wrapper = RU
      }
      isBlock() {
        return !0
      }
      covers(UU) {
        return !!this.children.length && (UU < 0 ? this.children[0].covers(-1) : this.lastChild.covers(1))
      }
      get domAttrs() {
        return this.wrapper.attributes
      }
      static of (UU, RU) {
        let gU = new Qg(RU || document.createElement(UU.tagName), UU);
        return RU || (gU.flags |= 4), gU
      }
    }
    class eg extends ug {
      constructor(UU, RU) {
        super(UU), this.attrs = RU
      }
      isLine() {
        return !0
      }
      static start(UU, RU, gU) {
        let tU = new eg(RU || document.createElement("div"), UU);
        return RU && gU || (tU.flags |= 4), tU
      }
      get domAttrs() {
        return this.attrs
      }
      resolveInline(UU, RU, gU) {
        let tU = null,
          pU = -1,
          EU = null,
          PU = -1;
        ! function UU(TU, qU) {
          for (let KU = 0, cU = 0; KU < TU.children.length && cU <= qU; KU++) {
            let GU = TU.children[KU],
              jU = cU + GU.length;
            jU >= qU && (GU.isComposite() ? UU(GU, qU - cU) : (!EU || EU.isHidden && (RU > 0 || gU && Wg(EU, GU))) && (jU > qU || 32 & GU.flags) ? (EU = GU, PU = qU - cU) : (cU < qU || 16 & GU.flags && !GU.isHidden) && (tU = GU, pU = qU - cU)), cU = jU
          }
        }(this, UU);
        let TU = (RU < 0 ? tU : EU) || tU || EU;
        return TU ? {
          tile: TU,
          offset: TU == tU ? pU : PU
        } : null
      }
      coordsIn(UU, RU) {
        let gU = this.resolveInline(UU, RU, !0);
        return gU ? gU.tile.coordsIn(Math.max(0, gU.offset), RU) : function(UU) {
          let RU = UU.dom.lastChild;
          if (!RU) return UU.dom.getBoundingClientRect();
          let gU = kU(RU);
          return gU[gU.length - 1] || null
        }(this)
      }
      domIn(UU, RU) {
        let gU = this.resolveInline(UU, RU);
        if (gU) {
          let {
            tile: UU,
            offset: tU
          } = gU;
          if (this.dom.contains(UU.dom)) return UU.isText() ? new qR(UU.dom, Math.min(UU.dom.nodeValue.length, tU)) : UU.domPosFor(tU, 16 & UU.flags ? 1 : 32 & UU.flags ? -1 : RU);
          let pU = gU.tile.parent,
            EU = !1;
          for (let RU of pU.children) {
            if (EU) return new qR(RU.dom, 0);
            RU == gU.tile && (EU = !0)
          }
        }
        return new qR(this.dom, 0)
      }
    }

    function Wg(UU, RU) {
      let gU = UU.coordsIn(0, 1),
        tU = RU.coordsIn(0, 1);
      return gU && tU && tU.top < gU.bottom
    }
    class fg extends ug {
      constructor(UU, RU) {
        super(UU), this.mark = RU
      }
      get domAttrs() {
        return this.mark.attrs
      }
      static of (UU, RU) {
        let gU = new fg(RU || document.createElement(UU.tagName), UU);
        return RU || (gU.flags |= 4), gU
      }
    }
    class xg extends jg {
      constructor(UU, RU) {
        super(UU, RU.length), this.text = RU
      }
      sync(UU) {
        2 & this.flags || (super.sync(UU), this.dom.nodeValue != this.text && (UU && UU.node == this.dom && (UU.written = !0), this.dom.nodeValue = this.text))
      }
      isText() {
        return !0
      }
      toString() {
        return JSON.stringify(this.text)
      }
      coordsIn(UU, RU) {
        let gU = this.dom.nodeValue.length;
        UU > gU && (UU = gU);
        let tU = UU,
          pU = UU,
          EU = 0;
        0 == UU && RU < 0 || UU == gU && RU >= 0 ? JU.chrome || JU.gecko || (UU ? (tU--, EU = 1) : pU < gU && (pU++, EU = -1)) : RU < 0 ? tU-- : pU < gU && pU++;
        let PU = tR(this.dom, tU, pU).getClientRects();
        if (!PU.length) return null;
        let TU = PU[(EU ? EU < 0 : RU >= 0) ? 0 : PU.length - 1];
        return JU.safari && !EU && 0 == TU.width && (TU = Array.prototype.find.call(PU, (UU => UU.width)) || TU), EU ? DU(TU, EU < 0) : TU || null
      }
      static of (UU, RU) {
        let gU = new xg(RU || document.createTextNode(UU), UU);
        return RU || (gU.flags |= 2), gU
      }
    }
    class mg extends jg {
      constructor(UU, RU, gU, tU) {
        super(UU, RU, tU), this.widget = gU
      }
      isWidget() {
        return !0
      }
      get isHidden() {
        return this.widget.isHidden
      }
      covers(UU) {
        return !(48 & this.flags) && (this.flags & (UU < 0 ? 64 : 128)) > 0
      }
      coordsIn(UU, RU) {
        return this.coordsInWidget(UU, RU, !1)
      }
      coordsInWidget(UU, RU, gU) {
        let tU = this.widget.coordsAt(this.dom, UU, RU);
        if (tU) return tU;
        if (gU) return DU(this.dom.getBoundingClientRect(), this.length ? 0 == UU : RU <= 0);
        {
          let RU = this.dom.getClientRects(),
            gU = null;
          if (!RU.length) return null;
          let tU = !!(16 & this.flags) || !(32 & this.flags) && UU > 0;
          for (let pU = tU ? RU.length - 1 : 0; gU = RU[pU], !(UU > 0 ? 0 == pU : pU == RU.length - 1 || gU.top < gU.bottom); pU += tU ? -1 : 1);
          return DU(gU, !tU)
        }
      }
      get overrideDOMText() {
        if (!this.length) return tU.E.empty;
        let {
          root: UU
        } = this;
        if (!UU) return tU.E.empty;
        let RU = this.posAtStart;
        return UU.view.state.doc.slice(RU, RU + this.length)
      }
      destroy() {
        super.destroy(), this.widget.destroy(this.dom)
      }
      static of (UU, RU, gU, tU, pU) {
        return pU || (pU = UU.toDOM(RU), UU.editable || (pU.contentEditable = "false")), new mg(pU, gU, UU, tU)
      }
    }
    class Ig extends jg {
      constructor(UU) {
        let RU = document.createElement("img");
        RU.className = "cm-widgetBuffer", RU.setAttribute("aria-hidden", "true"), super(RU, 0, UU)
      }
      get isHidden() {
        return !0
      }
      get overrideDOMText() {
        return tU.E.empty
      }
      coordsIn(UU) {
        return this.dom.getBoundingClientRect()
      }
    }
    class Jg {
      constructor(UU) {
        this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = UU
      }
      advance(UU, RU, gU) {
        let {
          tile: tU,
          index: pU,
          beforeBreak: EU,
          parents: PU
        } = this;
        for (; UU || RU > 0;)
          if (tU.isComposite())
            if (EU) {
              if (!UU) break;
              gU && gU.break(), UU--, EU = !1
            } else if (pU == tU.children.length) {
          if (!UU && !PU.length) break;
          gU && gU.leave(tU), EU = !!tU.breakAfter, ({
            tile: tU,
            index: pU
          } = PU.pop()), pU++
        } else {
          let TU = tU.children[pU],
            qU = TU.breakAfter;
          !(RU > 0 ? TU.length <= UU : TU.length < UU) || gU && !1 === gU.skip(TU, 0, TU.length) && TU.isComposite ? (PU.push({
            tile: tU,
            index: pU
          }), tU = TU, pU = 0, gU && TU.isComposite() && gU.enter(TU)) : (EU = !!qU, pU++, UU -= TU.length)
        } else if (pU == tU.length) EU = !!tU.breakAfter, ({
          tile: tU,
          index: pU
        } = PU.pop()), pU++;
        else {
          if (!UU) break;
          {
            let RU = Math.min(UU, tU.length - pU);
            gU && gU.skip(tU, pU, pU + RU), UU -= RU, pU += RU
          }
        }
        return this.tile = tU, this.index = pU, this.beforeBreak = EU, this
      }
      get root() {
        return this.parents.length ? this.parents[0].tile : this.tile
      }
    }
    class wg {
      constructor(UU, RU, gU, tU) {
        this.from = UU, this.to = RU, this.wrapper = gU, this.rank = tU
      }
    }
    class ng {
      constructor(UU, RU, gU) {
        this.cache = UU, this.root = RU, this.blockWrappers = gU, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0
      }
      addText(UU, RU, gU, tU) {
        var pU;
        this.flushBuffer();
        let EU = this.ensureMarks(RU, gU),
          PU = EU.lastChild;
        if (PU && PU.isText() && !(8 & PU.flags) && PU.length + UU.length < 512) {
          this.cache.reused.set(PU, 2), (EU.children[EU.children.length - 1] = new xg(PU.dom, PU.text + UU)).parent = EU
        } else EU.append(tU || xg.of(UU, null === (pU = this.cache.find(xg)) || void 0 === pU ? void 0 : pU.dom));
        this.pos += UU.length, this.afterWidget = null
      }
      addComposition(UU, RU) {
        let gU = this.curLine;
        gU.dom != RU.line.dom && (gU.setDOM(this.cache.reused.has(RU.line) ? Vg(RU.line.dom) : RU.line.dom), this.cache.reused.set(RU.line, 2));
        let tU = gU;
        for (let PU = RU.marks.length - 1; PU >= 0; PU--) {
          let UU = RU.marks[PU],
            gU = tU.lastChild;
          if (gU instanceof fg && gU.mark.eq(UU.mark)) gU.dom != UU.dom && gU.setDOM(Vg(UU.dom)), tU = gU;
          else {
            if (this.cache.reused.get(UU)) {
              let RU = jg.get(UU.dom);
              RU && RU.setDOM(Vg(UU.dom))
            }
            let RU = fg.of(UU.mark, UU.dom);
            tU.append(RU), tU = RU
          }
          this.cache.reused.set(UU, 2)
        }
        let pU = jg.get(UU.text);
        pU && this.cache.reused.set(pU, 2);
        let EU = new xg(UU.text, UU.text.nodeValue);
        EU.flags |= 8, tU.append(EU)
      }
      addInlineWidget(UU, RU, gU) {
        let tU = this.afterWidget && 48 & UU.flags && (48 & this.afterWidget.flags) == (48 & UU.flags);
        tU || this.flushBuffer();
        let pU = this.ensureMarks(RU, gU);
        tU || 16 & UU.flags || pU.append(this.getBuffer(1)), pU.append(UU), this.pos += UU.length, this.afterWidget = UU
      }
      addMark(UU, RU, gU) {
        this.flushBuffer(), this.ensureMarks(RU, gU).append(UU), this.pos += UU.length, this.afterWidget = null
      }
      addBlockWidget(UU) {
        this.getBlockPos().append(UU), this.pos += UU.length, this.lastBlock = UU, this.endLine()
      }
      continueWidget(UU) {
        (this.afterWidget || this.lastBlock).length += UU, this.pos += UU
      }
      addLineStart(UU, RU) {
        var gU;
        UU || (UU = Bg);
        let tU = eg.start(UU, RU || (null === (gU = this.cache.find(eg)) || void 0 === gU ? void 0 : gU.dom), !!RU);
        this.getBlockPos().append(this.lastBlock = this.curLine = tU)
      }
      addLine(UU) {
        this.getBlockPos().append(UU), this.pos += UU.length, this.lastBlock = UU, this.endLine()
      }
      addBreak() {
        this.lastBlock.flags |= 1, this.endLine(), this.pos++
      }
      addLineStartIfNotCovered(UU) {
        this.blockPosCovered() || this.addLineStart(UU)
      }
      ensureLine(UU) {
        this.curLine || this.addLineStart(UU)
      }
      ensureMarks(UU, RU) {
        var gU;
        let tU = this.curLine;
        for (let pU = UU.length - 1; pU >= 0; pU--) {
          let EU, PU = UU[pU];
          if (RU > 0 && (EU = tU.lastChild) && EU instanceof fg && EU.mark.eq(PU)) tU = EU, RU--;
          else {
            let UU = fg.of(PU, null === (gU = this.cache.find(fg, (UU => UU.mark.eq(PU)))) || void 0 === gU ? void 0 : gU.dom);
            tU.append(UU), tU = UU, RU = 0
          }
        }
        return tU
      }
      endLine() {
        if (this.curLine) {
          this.flushBuffer();
          let UU = this.curLine.lastChild;
          UU && Yg(this.curLine, !1) && ("BR" == UU.dom.nodeName || !UU.isWidget() || JU.ios && Yg(this.curLine, !0)) || this.curLine.append(this.cache.findWidget(Xg, 0, 32) || new mg(Xg.toDOM(), 0, Xg, 32)), this.curLine = this.afterWidget = null
        }
      }
      updateBlockWrappers() {
        this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
        for (let UU = this.wrappers.length - 1; UU >= 0; UU--) this.wrappers[UU].to < this.pos && this.wrappers.splice(UU, 1);
        for (let UU = this.blockWrappers; UU.value && UU.from <= this.pos; UU.next())
          if (UU.to >= this.pos) {
            let RU = new wg(UU.from, UU.to, UU.value, UU.rank),
              gU = this.wrappers.length;
            for (; gU > 0 && (this.wrappers[gU - 1].rank - RU.rank || this.wrappers[gU - 1].to - RU.to) < 0;) gU--;
            this.wrappers.splice(gU, 0, RU)
          } this.wrapperPos = this.pos
      }
      getBlockPos() {
        var UU;
        this.updateBlockWrappers();
        let RU = this.root;
        for (let gU of this.wrappers) {
          let tU = RU.lastChild;
          if (gU.from < this.pos && tU instanceof Qg && tU.wrapper.eq(gU.wrapper)) RU = tU;
          else {
            let tU = Qg.of(gU.wrapper, null === (UU = this.cache.find(Qg, (UU => UU.wrapper.eq(gU.wrapper)))) || void 0 === UU ? void 0 : UU.dom);
            RU.append(tU), RU = tU
          }
        }
        return RU
      }
      blockPosCovered() {
        let UU = this.lastBlock;
        return null != UU && !UU.breakAfter && (!UU.isWidget() || (160 & UU.flags) > 0)
      }
      getBuffer(UU) {
        let RU = 2 | (UU < 0 ? 16 : 32),
          gU = this.cache.find(Ig, void 0, 1);
        return gU && (gU.flags = RU), gU || new Ig(RU)
      }
      flushBuffer() {
        !this.afterWidget || 32 & this.afterWidget.flags || (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null)
      }
    }
    class bg {
      constructor(UU) {
        this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = UU.iter()
      }
      skip(UU) {
        this.textOff + UU <= this.text.length ? this.textOff += UU : (this.skipCount += UU - (this.text.length - this.textOff), this.text = "", this.textOff = 0)
      }
      next(UU) {
        if (this.textOff == this.text.length) {
          let {
            value: RU,
            lineBreak: gU,
            done: tU
          } = this.cursor.next(this.skipCount);
          if (this.skipCount = 0, tU) throw new Error("Ran out of text content when drawing inline views");
          this.text = RU;
          let pU = this.textOff = Math.min(UU, RU.length);
          return gU ? null : RU.slice(0, pU)
        }
        let RU = Math.min(this.text.length, this.textOff + UU),
          gU = this.text.slice(this.textOff, RU);
        return this.textOff = RU, gU
      }
    }
    const og = [mg, eg, xg, fg, Ig, Qg, hg];
    for (let VP = 0; VP < og.length; VP++) og[VP].bucket = VP;
    class Zg {
      constructor(UU) {
        this.view = UU, this.buckets = og.map((() => [])), this.index = og.map((() => 0)), this.reused = new Map
      }
      add(UU) {
        let RU = UU.constructor.bucket,
          gU = this.buckets[RU];
        gU.length < 6 ? gU.push(UU) : gU[this.index[RU] = (this.index[RU] + 1) % 6] = UU
      }
      find(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          tU = UU.bucket,
          pU = this.buckets[tU],
          EU = this.index[tU];
        for (let PU = pU.length - 1; PU >= 0; PU--) {
          let UU = (PU + EU) % pU.length,
            TU = pU[UU];
          if ((!RU || RU(TU)) && !this.reused.has(TU)) return pU.splice(UU, 1), UU < EU && this.index[tU]--, this.reused.set(TU, gU), TU
        }
        return null
      }
      findWidget(UU, RU, gU) {
        let tU = this.buckets[0];
        if (tU.length)
          for (let pU = 0, EU = 0;; pU++) {
            if (pU == tU.length) {
              if (EU) return null;
              EU = 1, pU = 0
            }
            let PU = tU[pU];
            if (!this.reused.has(PU) && (0 == EU ? PU.widget.compare(UU) : PU.widget.constructor == UU.constructor && UU.updateDOM(PU.dom, this.view, PU.widget))) return tU.splice(pU, 1), pU < this.index[0] && this.index[0]--, PU.widget == UU && PU.length == RU && (497 & PU.flags) == gU ? (this.reused.set(PU, 1), PU) : (this.reused.set(PU, 2), new mg(PU.dom, RU, UU, -498 & PU.flags | gU))
          }
      }
      reuse(UU) {
        return this.reused.set(UU, 1), UU
      }
      maybeReuse(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        if (!this.reused.has(UU)) return this.reused.set(UU, RU), UU.dom
      }
      clear() {
        for (let UU = 0; UU < this.buckets.length; UU++) this.buckets[UU].length = this.index[UU] = 0
      }
    }
    class ag {
      constructor(UU, RU, gU, pU, EU) {
        this.view = UU, this.Yt = pU, this.disallowBlockEffectsFor = EU, this.openWidget = !1, this.openMarks = 0, this.cache = new Zg(UU), this.text = new bg(UU.state.doc), this.builder = new ng(this.cache, new hg(UU, UU.contentDOM), tU.v.iter(gU)), this.cache.reused.set(RU, 2), this.old = new Jg(RU), this.reuseWalker = {
          skip: (UU, RU, gU) => {
            if (this.cache.add(UU), UU.isComposite()) return !1
          },
          enter: UU => this.cache.add(UU),
          leave: () => {},
          break: () => {}
        }
      }
      run(UU, RU) {
        let gU = RU && this.getCompositionContext(RU.text);
        for (let tU = 0, pU = 0, EU = 0;;) {
          let PU = EU < UU.length ? UU[EU++] : null,
            TU = PU ? PU.fromA : this.old.root.length;
          if (TU > tU) {
            let UU = TU - tU;
            this.preserve(UU, !EU, !PU), tU = TU, pU += UU
          }
          if (!PU) break;
          RU && PU.fromA <= RU.range.fromA && PU.toA >= RU.range.toA ? (this.forward(PU.fromA, RU.range.fromA, RU.range.fromA < RU.range.toA ? 1 : -1), this.emit(pU, RU.range.fromB), this.cache.clear(), this.builder.addComposition(RU, gU), this.text.skip(RU.range.toB - RU.range.fromB), this.forward(RU.range.fromA, PU.toA), this.emit(RU.range.toB, PU.toB)) : (this.forward(PU.fromA, PU.toA), this.emit(pU, PU.toB)), pU = PU.toB, tU = PU.toA
        }
        return this.builder.curLine && this.builder.endLine(), this.builder.root
      }
      preserve(UU, RU, gU) {
        let tU = function(UU) {
            let RU = [];
            for (let gU = UU.parents.length; gU > 1; gU--) {
              let tU = gU == UU.parents.length ? UU.tile : UU.parents[gU].tile;
              tU instanceof fg && RU.push(tU.mark)
            }
            return RU
          }(this.old),
          pU = this.openMarks;
        this.old.advance(UU, gU ? 1 : -1, {
          skip: (UU, RU, gU) => {
            if (UU.isWidget())
              if (this.openWidget) this.builder.continueWidget(gU - RU);
              else {
                let EU = gU > 0 || RU < UU.length ? mg.of(UU.widget, this.view, gU - RU, 496 & UU.flags, this.cache.maybeReuse(UU)) : this.cache.reuse(UU);
                256 & EU.flags ? (EU.flags &= -2, this.builder.addBlockWidget(EU)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(EU, tU, pU), pU = tU.length)
              }
            else if (UU.isText()) this.builder.ensureLine(null), RU || gU != UU.length || this.cache.reused.has(UU) ? (this.cache.add(UU), this.builder.addText(UU.text.slice(RU, gU), tU, pU)) : this.builder.addText(UU.text, tU, pU, this.cache.reuse(UU)), pU = tU.length;
            else if (UU.isLine()) UU.flags &= -2, this.cache.reused.set(UU, 1), this.builder.addLine(UU);
            else if (UU instanceof Ig) this.cache.add(UU);
            else {
              if (!(UU instanceof fg)) return !1;
              this.builder.ensureLine(null), this.builder.addMark(UU, tU, pU), this.cache.reused.set(UU, 1), pU = tU.length
            }
            this.openWidget = !1
          },
          enter: UU => {
            UU.isLine() ? this.builder.addLineStart(UU.attrs, this.cache.maybeReuse(UU)) : (this.cache.add(UU), UU instanceof fg && tU.unshift(UU.mark)), this.openWidget = !1
          },
          leave: UU => {
            UU.isLine() ? tU.length && (tU.length = pU = 0) : UU instanceof fg && (tU.shift(), pU = Math.min(pU, tU.length))
          },
          break: () => {
            this.builder.addBreak(), this.openWidget = !1
          }
        }), this.text.skip(UU)
      }
      emit(UU, RU) {
        let gU = null,
          pU = this.builder,
          EU = 0,
          PU = tU.v.spans(this.Yt, UU, RU, {
            point: (UU, RU, tU, PU, TU, qU) => {
              if (tU instanceof XU) {
                if (this.disallowBlockEffectsFor[qU]) {
                  if (tU.block) throw new RangeError("Block decorations may not be specified via plugins");
                  if (RU > this.view.state.doc.lineAt(UU).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins")
                }
                if (EU = PU.length, TU > PU.length) pU.continueWidget(RU - UU);
                else {
                  let EU = tU.widget || (tU.block ? rg.block : rg.inline),
                    qU = function(UU) {
                      let RU = UU.isReplace ? (UU.startSide < 0 ? 64 : 0) | (UU.endSide > 0 ? 128 : 0) : UU.startSide > 0 ? 32 : 16;
                      UU.block && (RU |= 256);
                      return RU
                    }(tU),
                    KU = this.cache.findWidget(EU, RU - UU, qU) || mg.of(EU, this.view, RU - UU, qU);
                  tU.block ? (tU.startSide > 0 && pU.addLineStartIfNotCovered(gU), pU.addBlockWidget(KU)) : (pU.ensureLine(gU), pU.addInlineWidget(KU, PU, TU))
                }
                gU = null
              } else gU = function(UU, RU) {
                let gU = RU.spec.attributes,
                  tU = RU.spec.class;
                if (!gU && !tU) return UU;
                UU || (UU = {
                  class: "cm-line"
                });
                gU && wU(gU, UU);
                tU && (UU.class += " " + tU);
                return UU
              }(gU, tU);
              RU > UU && this.text.skip(RU - UU)
            },
            span: (UU, RU, tU, EU) => {
              for (let PU = UU; PU < RU;) {
                let TU = this.text.next(Math.min(512, RU - PU));
                null == TU ? (pU.addLineStartIfNotCovered(gU), pU.addBreak(), PU++) : (pU.ensureLine(gU), pU.addText(TU, tU, PU == UU ? EU : tU.length), PU += TU.length), gU = null
              }
            }
          });
        pU.addLineStartIfNotCovered(gU), this.openWidget = PU > EU, this.openMarks = PU
      }
      forward(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        RU - UU <= 10 ? this.old.advance(RU - UU, gU, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(RU - UU - 10, -1), this.old.advance(5, gU, this.reuseWalker))
      }
      getCompositionContext(UU) {
        let RU = [],
          gU = null;
        for (let tU = UU.parentNode;; tU = tU.parentNode) {
          let UU = jg.get(tU);
          if (tU == this.view.contentDOM) break;
          UU instanceof fg ? RU.push(UU) : (null === UU || void 0 === UU ? void 0 : UU.isLine()) ? gU = UU : UU instanceof Qg || ("DIV" != tU.nodeName || gU || tU == this.view.contentDOM ? gU || RU.push(fg.of(new VU({
            tagName: tU.nodeName.toLowerCase(),
            attributes: ZU(tU)
          }), tU)) : gU = new eg(tU, Bg))
        }
        return {
          line: gU,
          marks: RU
        }
      }
    }

    function Yg(UU, RU) {
      let gU = UU => {
        for (let tU of UU.children)
          if ((RU ? tU.isText() : tU.length) || gU(tU)) return !0;
        return !1
      };
      return gU(UU)
    }
    const Bg = {
      class: "cm-line"
    };

    function Vg(UU) {
      let RU = jg.get(UU);
      return RU && RU.setDOM(UU.cloneNode()), UU
    }
    class rg extends aU {
      constructor(UU) {
        super(), this.tag = UU
      }
      eq(UU) {
        return UU.tag == this.tag
      }
      toDOM() {
        return document.createElement(this.tag)
      }
      updateDOM(UU) {
        return UU.nodeName.toLowerCase() == this.tag
      }
      get isHidden() {
        return !0
      }
    }
    rg.inline = new rg("span"), rg.block = new rg("div");
    const Xg = new class extends aU {
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
    class vg {
      constructor(UU) {
        this.view = UU, this.Yt = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = BU.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new hg(UU, UU.contentDOM), this.updateInner([new Kg(0, 0, 0, UU.state.doc.length)], null)
      }
      update(UU) {
        var RU;
        let gU = UU.changedRanges;
        this.minWidth > 0 && gU.length && (gU.every((UU => {
          let {
            fromA: RU,
            toA: gU
          } = UU;
          return gU < this.minWidthFrom || RU > this.minWidthTo
        })) ? (this.minWidthFrom = UU.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = UU.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(UU);
        let pU = -1;
        this.view.inputState.composing >= 0 && !this.view.observer.editContext && ((null === (RU = this.domChanged) || void 0 === RU ? void 0 : RU.newSel) ? pU = this.domChanged.newSel.head : function(UU, RU) {
          let gU = !1;
          RU && UU.iterChangedRanges(((UU, tU) => {
            UU < RU.to && tU > RU.from && (gU = !0)
          }));
          return gU
        }(UU.changes, this.hasComposition) || UU.selectionSet || (pU = UU.state.selection.main.head));
        let EU = pU > -1 ? function(UU, RU, gU) {
          let tU = Hg(UU, gU);
          if (!tU) return null;
          let {
            node: pU,
            from: EU,
            to: PU
          } = tU, TU = pU.nodeValue;
          if (/[\n\r]/.test(TU)) return null;
          if (UU.state.doc.sliceString(tU.from, tU.to) != TU) return null;
          let qU = RU.invertedDesc;
          return {
            range: new Kg(qU.mapPos(EU), qU.mapPos(PU), EU, PU),
            text: pU
          }
        }(this.view, UU.changes, pU) : null;
        if (this.domChanged = null, this.hasComposition) {
          let {
            from: RU,
            to: tU
          } = this.hasComposition;
          gU = new Kg(RU, tU, UU.changes.mapPos(RU, -1), UU.changes.mapPos(tU, 1)).addToSet(gU.slice())
        }
        this.hasComposition = EU ? {
          from: EU.range.fromB,
          to: EU.range.toB
        } : null, (JU.ie || JU.chrome) && !EU && UU && UU.state.doc.lines != UU.startState.doc.lines && (this.forceSelection = !0);
        let PU = this.Yt,
          TU = this.blockWrappers;
        this.updateDeco();
        let qU = function(UU, RU, gU) {
          let pU = new Sg;
          return tU.v.compare(UU, RU, gU, pU), pU.changes
        }(PU, this.Yt, UU.changes);
        qU.length && (gU = Kg.extendWithRanges(gU, qU));
        let KU = function(UU, RU, gU) {
          let pU = new sg;
          return tU.v.compare(UU, RU, gU, pU), pU.changes
        }(TU, this.blockWrappers, UU.changes);
        return KU.length && (gU = Kg.extendWithRanges(gU, KU)), EU && !gU.some((UU => UU.fromA <= EU.range.fromA && UU.toA >= EU.range.toA)) && (gU = EU.range.addToSet(gU.slice())), !(2 & this.tile.flags && 0 == gU.length) && (this.updateInner(gU, EU), UU.transactions.length && (this.lastUpdate = Date.now()), !0)
      }
      updateInner(UU, RU) {
        this.view.viewState.mustMeasureContent = !0;
        let {
          observer: gU
        } = this.view;
        gU.ignore((() => {
          if (RU || UU.length) {
            let gU = this.tile,
              tU = new ag(this.view, gU, this.blockWrappers, this.Yt, this.dynamicDecorationMap);
            RU && jg.get(RU.text) && tU.cache.reused.set(jg.get(RU.text), 2), this.tile = tU.run(UU, RU), dg(gU, tU.cache.reused)
          }
          this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
          let tU = JU.chrome || JU.ios ? {
            node: gU.selectionRange.focusNode,
            written: !1
          } : void 0;
          this.tile.sync(tU), !tU || !tU.written && gU.selectionRange.focusNode == tU.node && this.tile.dom.contains(tU.node) || (this.forceSelection = !0), this.tile.dom.style.height = ""
        }));
        let tU = [];
        if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
          for (let pU of this.tile.children) pU.isWidget() && pU.widget instanceof yg && tU.push(pU.dom);
        gU.updateGaps(tU)
      }
      updateEditContextFormatting(UU) {
        this.editContextFormatting = this.editContextFormatting.map(UU.changes);
        for (let RU of UU.transactions)
          for (let UU of RU.effects) UU.is(iR) && (this.editContextFormatting = UU.value)
      }
      updateSelection() {
        let UU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this.view.observer.selectionRange.focusNode || this.view.observer.readSelectionRange();
        let {
          dom: RU
        } = this.tile, gU = this.view.root.activeElement, tU = gU == RU, pU = !tU && !(this.view.state.facet(zR) || RU.tabIndex > -1) && yU(RU, this.view.observer.selectionRange) && !(gU && RU.contains(gU));
        if (!(tU || UU || pU)) return;
        let EU = this.forceSelection;
        this.forceSelection = !1;
        let PU, TU, qU = this.view.state.selection.main;
        if (qU.empty ? TU = PU = this.inlineDOMNearPos(qU.anchor, qU.assoc || 1) : (TU = this.inlineDOMNearPos(qU.head, qU.head == qU.from ? 1 : -1), PU = this.inlineDOMNearPos(qU.anchor, qU.anchor == qU.from ? 1 : -1)), JU.gecko && qU.empty && !this.hasComposition && (1 == (KU = PU).node.nodeType && KU.node.firstChild && (0 == KU.offset || "false" == KU.node.childNodes[KU.offset - 1].contentEditable) && (KU.offset == KU.node.childNodes.length || "false" == KU.node.childNodes[KU.offset].contentEditable))) {
          let UU = document.createTextNode("");
          this.view.observer.ignore((() => PU.node.insertBefore(UU, PU.node.childNodes[PU.offset] || null))), PU = TU = new qR(UU, 0), EU = !0
        }
        var KU;
        let cU = this.view.observer.selectionRange;
        !EU && cU.focusNode && (FU(PU.node, PU.offset, cU.anchorNode, cU.anchorOffset) && FU(TU.node, TU.offset, cU.focusNode, cU.focusOffset) || this.suppressWidgetCursorChange(cU, qU)) || (this.view.observer.ignore((() => {
          JU.android && JU.chrome && RU.contains(cU.focusNode) && function(UU, RU) {
            for (let gU = UU; gU && gU != RU; gU = gU.assignedSlot || gU.parentNode)
              if (1 == gU.nodeType && "false" == gU.contentEditable) return !0;
            return !1
          }(cU.focusNode, RU) && (RU.blur(), RU.focus({
            preventScroll: !0
          }));
          let UU = SU(this.view.root);
          if (UU)
            if (qU.empty) {
              if (JU.gecko) {
                let UU = (tU = PU.node, EU = PU.offset, 1 != tU.nodeType ? 0 : (EU && "false" == tU.childNodes[EU - 1].contentEditable ? 1 : 0) | (EU < tU.childNodes.length && "false" == tU.childNodes[EU].contentEditable ? 2 : 0));
                if (UU && 3 != UU) {
                  let RU = (1 == UU ? PR : TR)(PU.node, PU.offset);
                  RU && (PU = new qR(RU.node, RU.offset))
                }
              }
              UU.collapse(PU.node, PU.offset), null != qU.bidiLevel && void 0 !== UU.caretBidiLevel && (UU.caretBidiLevel = qU.bidiLevel)
            } else if (UU.extend) {
            UU.collapse(PU.node, PU.offset);
            try {
              UU.extend(TU.node, TU.offset)
            } catch (KU) {}
          } else {
            let RU = document.createRange();
            qU.anchor > qU.head && ([PU, TU] = [TU, PU]), RU.setEnd(TU.node, TU.offset), RU.setStart(PU.node, PU.offset), UU.removeAllRanges(), UU.addRange(RU)
          } else;
          var tU, EU;
          pU && this.view.root.activeElement == RU && (RU.blur(), gU && gU.focus())
        })), this.view.observer.setSelectionRange(PU, TU)), this.impreciseAnchor = PU.precise ? null : new qR(cU.anchorNode, cU.anchorOffset), this.impreciseHead = TU.precise ? null : new qR(cU.focusNode, cU.focusOffset)
      }
      suppressWidgetCursorChange(UU, RU) {
        return this.hasComposition && RU.empty && FU(UU.focusNode, UU.focusOffset, UU.anchorNode, UU.anchorOffset) && this.posFromDOM(UU.focusNode, UU.focusOffset) == RU.head
      }
      enforceCursorAssoc() {
        if (this.hasComposition) return;
        let {
          view: UU
        } = this, RU = UU.state.selection.main, gU = SU(UU.root), {
          anchorNode: tU,
          anchorOffset: pU
        } = UU.observer.selectionRange;
        if (!gU || !RU.empty || !RU.assoc || !gU.modify) return;
        let EU = this.lineAt(RU.head, RU.assoc);
        if (!EU) return;
        let PU = EU.posAtStart;
        if (RU.head == PU || RU.head == PU + EU.length) return;
        let TU = this.coordsAt(RU.head, -1),
          qU = this.coordsAt(RU.head, 1);
        if (!TU || !qU || TU.bottom > qU.top) return;
        let KU = this.domAtPos(RU.head + RU.assoc, RU.assoc);
        gU.collapse(KU.node, KU.offset), gU.modify("move", RU.assoc < 0 ? "forward" : "backward", "lineboundary"), UU.observer.readSelectionRange();
        let cU = UU.observer.selectionRange;
        UU.docView.posFromDOM(cU.anchorNode, cU.anchorOffset) != RU.from && gU.collapse(tU, pU)
      }
      posFromDOM(UU, RU) {
        let gU = this.tile.nearest(UU);
        if (!gU) return 2 & this.tile.dom.compareDocumentPosition(UU) ? 0 : this.view.state.doc.length;
        let tU = gU.posAtStart;
        if (!gU.isComposite()) return gU.isText() ? UU == gU.dom ? tU + RU : tU + (RU ? gU.length : 0) : tU;
        {
          let pU;
          if (UU == gU.dom) pU = gU.dom.childNodes[RU];
          else {
            let tU = 0 == MU(UU) ? 0 : 0 == RU ? -1 : 1;
            for (;;) {
              let RU = UU.parentNode;
              if (RU == gU.dom) break;
              0 == tU && RU.firstChild != RU.lastChild && (tU = UU == RU.firstChild ? -1 : 1), UU = RU
            }
            pU = tU < 0 ? UU : UU.nextSibling
          }
          if (pU == gU.dom.firstChild) return tU;
          for (; pU && !jg.get(pU);) pU = pU.nextSibling;
          if (!pU) return tU + gU.length;
          for (let UU = 0, RU = tU;; UU++) {
            let tU = gU.children[UU];
            if (tU.dom == pU) return RU;
            RU += tU.length + tU.breakAfter
          }
        }
      }
      domAtPos(UU, RU) {
        let {
          tile: gU,
          offset: tU
        } = this.tile.resolveBlock(UU, RU);
        return gU.isWidget() ? gU.domPosFor(UU, RU) : gU.domIn(tU, RU)
      }
      inlineDOMNearPos(UU, RU) {
        let gU, tU, pU = -1,
          EU = !1,
          PU = -1,
          TU = !1;
        return this.tile.blockTiles(((RU, qU) => {
          if (RU.isWidget()) {
            if (32 & RU.flags && qU >= UU) return !0;
            16 & RU.flags && (EU = !0)
          } else {
            let KU = qU + RU.length;
            if (qU <= UU && (gU = RU, pU = UU - qU, EU = KU < UU), KU >= UU && !tU && (tU = RU, PU = UU - qU, TU = qU > UU), qU > UU && tU) return !0
          }
        })), gU || tU ? (EU && tU ? gU = null : TU && gU && (tU = null), gU && RU < 0 || !tU ? gU.domIn(pU, RU) : tU.domIn(PU, RU)) : this.domAtPos(UU, RU)
      }
      coordsAt(UU, RU) {
        let {
          tile: gU,
          offset: tU
        } = this.tile.resolveBlock(UU, RU);
        return gU.isWidget() ? gU.widget instanceof yg ? null : gU.coordsInWidget(tU, RU, !0) : gU.coordsIn(tU, RU)
      }
      lineAt(UU, RU) {
        let {
          tile: gU
        } = this.tile.resolveBlock(UU, RU);
        return gU.isLine() ? gU : null
      }
      coordsForChar(UU) {
        let {
          tile: RU,
          offset: gU
        } = this.tile.resolveBlock(UU, 1);
        if (!RU.isLine()) return null;
        return function UU(RU, gU) {
          if (RU.isComposite())
            for (let tU of RU.children) {
              if (tU.length >= gU) {
                let RU = UU(tU, gU);
                if (RU) return RU
              }
              if ((gU -= tU.length) < 0) break
            } else if (RU.isText() && gU < RU.length) {
              let UU = (0, tU.V)(RU.text, gU);
              if (UU == gU) return null;
              let pU = tR(RU.dom, gU, UU).getClientRects();
              for (let RU = 0; RU < pU.length; RU++) {
                let UU = pU[RU];
                if (RU == pU.length - 1 || UU.top < UU.bottom && UU.left < UU.right) return UU
              }
            } return null
        }(RU, gU)
      }
      measureVisibleLineHeights(UU) {
        let RU = [],
          {
            from: gU,
            to: tU
          } = UU,
          pU = this.view.contentDOM.clientWidth,
          EU = pU > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
          PU = -1,
          TU = this.view.textDirection == KR.LTR,
          qU = 0,
          KU = (UU, cU, GU) => {
            for (let jU = 0; jU < UU.children.length && !(cU > tU); jU++) {
              let tU = UU.children[jU],
                uU = cU + tU.length,
                CU = tU.dom.getBoundingClientRect(),
                {
                  height: hU
                } = CU;
              if (GU && !jU && (qU += CU.top - GU.top), tU instanceof Qg) uU > gU && KU(tU, cU, CU);
              else if (cU >= gU && (qU > 0 && RU.push(-qU), RU.push(hU + qU), qU = 0, EU)) {
                let UU = tU.dom.lastChild,
                  RU = UU ? kU(UU) : [];
                if (RU.length) {
                  let UU = RU[RU.length - 1],
                    gU = TU ? UU.right - CU.left : CU.right - UU.left;
                  gU > PU && (PU = gU, this.minWidth = pU, this.minWidthFrom = cU, this.minWidthTo = uU)
                }
              }
              GU && jU == UU.children.length - 1 && (qU += GU.bottom - CU.bottom), cU = uU + tU.breakAfter
            }
          };
        return KU(this.tile, 0, null), RU
      }
      textDirectionAt(UU) {
        let {
          tile: RU
        } = this.tile.resolveBlock(UU, 1);
        return "rtl" == getComputedStyle(RU.dom).direction ? KR.RTL : KR.LTR
      }
      measureTextSize() {
        let UU = this.tile.blockTiles((UU => {
          if (UU.isLine() && UU.children.length && UU.length <= 20) {
            let RU, gU = 0;
            for (let tU of UU.children) {
              if (!tU.isText() || /[^ -~]/.test(tU.text)) return;
              let UU = kU(tU.dom);
              if (1 != UU.length) return;
              gU += UU[0].width, RU = UU[0].height
            }
            if (gU) return {
              lineHeight: UU.dom.getBoundingClientRect().height,
              charWidth: gU / UU.length,
              textHeight: RU
            }
          }
        }));
        if (UU) return UU;
        let RU, gU, tU, pU = document.createElement("div");
        return pU.className = "cm-line", pU.style.width = "99999px", pU.style.position = "absolute", pU.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore((() => {
          this.tile.dom.appendChild(pU);
          let UU = kU(pU.firstChild)[0];
          RU = pU.getBoundingClientRect().height, gU = UU && UU.width ? UU.width / 27 : 7, tU = UU && UU.height ? UU.height : RU, pU.remove()
        })), {
          lineHeight: RU,
          charWidth: gU,
          textHeight: tU
        }
      }
      computeBlockGapDeco() {
        let UU = [],
          RU = this.view.viewState;
        for (let gU = 0, tU = 0;; tU++) {
          let pU = tU == RU.viewports.length ? null : RU.viewports[tU],
            EU = pU ? pU.from - 1 : this.view.state.doc.length;
          if (EU > gU) {
            let tU = (RU.lineBlockAt(EU).bottom - RU.lineBlockAt(gU).top) / this.view.scaleY;
            UU.push(BU.replace({
              widget: new yg(tU),
              block: !0,
              inclusive: !0,
              isBlockGap: !0
            }).range(gU, EU))
          }
          if (!pU) break;
          gU = pU.to + 1
        }
        return BU.set(UU)
      }
      updateDeco() {
        let UU = 1,
          RU = this.view.state.facet(Ug).map((RU => (this.dynamicDecorationMap[UU++] = "function" == typeof RU) ? RU(this.view) : RU)),
          gU = !1,
          pU = this.view.state.facet(gg).map(((UU, RU) => {
            let tU = "function" == typeof UU;
            return tU && (gU = !0), tU ? UU(this.view) : UU
          }));
        for (pU.length && (this.dynamicDecorationMap[UU++] = gU, RU.push(tU.v.join(pU))), this.Yt = [this.editContextFormatting, ...RU, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; UU < this.Yt.length;) this.dynamicDecorationMap[UU++] = !1;
        this.blockWrappers = this.view.state.facet(Rg).map((UU => "function" == typeof UU ? UU(this.view) : UU))
      }
      scrollIntoView(UU) {
        var RU;
        if (UU.isSnapshot) {
          let RU = this.view.viewState.lineBlockAt(UU.range.head);
          return this.view.scrollDOM.scrollTop = RU.top - UU.yMargin, void(this.view.scrollDOM.scrollLeft = UU.xMargin)
        }
        for (let cU of this.view.state.facet(yR)) try {
          if (cU(this.view, UU.range, UU)) return !0
        } catch (KU) {
          AR(this.view.state, KU, "scroll handler")
        }
        let gU, {
            range: tU
          } = UU,
          pU = this.coordsAt(tU.head, null !== (RU = tU.assoc) && void 0 !== RU ? RU : tU.empty ? 0 : tU.head > tU.anchor ? -1 : 1);
        if (!pU) return;
        !tU.empty && (gU = this.coordsAt(tU.anchor, tU.anchor > tU.head ? -1 : 1)) && (pU = {
          left: Math.min(pU.left, gU.left),
          top: Math.min(pU.top, gU.top),
          right: Math.max(pU.right, gU.right),
          bottom: Math.max(pU.bottom, gU.bottom)
        });
        let EU = Tg(this.view),
          PU = {
            left: pU.left - EU.left,
            top: pU.top - EU.top,
            right: pU.right + EU.right,
            bottom: pU.bottom + EU.bottom
          },
          {
            offsetWidth: TU,
            offsetHeight: qU
          } = this.view.scrollDOM;
        if (function(UU, RU, gU, tU, pU, EU, PU, TU) {
            let qU = UU.ownerDocument,
              KU = qU.defaultView || window;
            for (let cU = UU, GU = !1; cU && !GU;)
              if (1 == cU.nodeType) {
                let UU, jU = cU == qU.body,
                  uU = 1,
                  CU = 1;
                if (jU) UU = LU(KU);
                else {
                  if (/^(fixed|sticky)$/.test(getComputedStyle(cU).position) && (GU = !0), cU.scrollHeight <= cU.clientHeight && cU.scrollWidth <= cU.clientWidth) {
                    cU = cU.assignedSlot || cU.parentNode;
                    continue
                  }
                  let RU = cU.getBoundingClientRect();
                  ({
                    scaleX: uU,
                    scaleY: CU
                  } = NU(cU, RU)), UU = {
                    left: RU.left,
                    right: RU.left + cU.clientWidth * uU,
                    top: RU.top,
                    bottom: RU.top + cU.clientHeight * CU
                  }
                }
                let hU = 0,
                  QU = 0;
                if ("nearest" == pU) RU.top < UU.top + PU ? (QU = RU.top - (UU.top + PU), gU > 0 && RU.bottom > UU.bottom + QU && (QU = RU.bottom - UU.bottom + PU)) : RU.bottom > UU.bottom - PU && (QU = RU.bottom - UU.bottom + PU, gU < 0 && RU.top - QU < UU.top && (QU = RU.top - (UU.top + PU)));
                else {
                  let tU = RU.bottom - RU.top,
                    EU = UU.bottom - UU.top;
                  QU = ("center" == pU && tU <= EU ? RU.top + tU / 2 - EU / 2 : "start" == pU || "center" == pU && gU < 0 ? RU.top - PU : RU.bottom - EU + PU) - UU.top
                }
                if ("nearest" == tU ? RU.left < UU.left + EU ? (hU = RU.left - (UU.left + EU), gU > 0 && RU.right > UU.right + hU && (hU = RU.right - UU.right + EU)) : RU.right > UU.right - EU && (hU = RU.right - UU.right + EU, gU < 0 && RU.left < UU.left + hU && (hU = RU.left - (UU.left + EU))) : hU = ("center" == tU ? RU.left + (RU.right - RU.left) / 2 - (UU.right - UU.left) / 2 : "start" == tU == TU ? RU.left - EU : RU.right - (UU.right - UU.left) + EU) - UU.left, hU || QU)
                  if (jU) KU.scrollBy(hU, QU);
                  else {
                    let UU = 0,
                      gU = 0;
                    if (QU) {
                      let UU = cU.scrollTop;
                      cU.scrollTop += QU / CU, gU = (cU.scrollTop - UU) * CU
                    }
                    if (hU) {
                      let RU = cU.scrollLeft;
                      cU.scrollLeft += hU / uU, UU = (cU.scrollLeft - RU) * uU
                    }
                    RU = {
                      left: RU.left - UU,
                      top: RU.top - gU,
                      right: RU.right - UU,
                      bottom: RU.bottom - gU
                    }, UU && Math.abs(UU - hU) < 1 && (tU = "nearest"), gU && Math.abs(gU - QU) < 1 && (pU = "nearest")
                  } if (jU) break;
                (RU.top < UU.top || RU.bottom > UU.bottom || RU.left < UU.left || RU.right > UU.right) && (RU = {
                  left: Math.max(RU.left, UU.left),
                  right: Math.min(RU.right, UU.right),
                  top: Math.max(RU.top, UU.top),
                  bottom: Math.min(RU.bottom, UU.bottom)
                }), cU = cU.assignedSlot || cU.parentNode
              } else {
                if (11 != cU.nodeType) break;
                cU = cU.host
              }
          }(this.view.scrollDOM, PU, tU.head < tU.anchor ? -1 : 1, UU.x, UU.y, Math.max(Math.min(UU.xMargin, TU), -TU), Math.max(Math.min(UU.yMargin, qU), -qU), this.view.textDirection == KR.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (pU.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || pU.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
          let UU = this.view.docView.lineAt(tU.head, 1);
          UU && UU.dom.scrollIntoView({
            block: "nearest"
          })
        }
      }
      lineHasWidget(UU) {
        let RU = UU => UU.isWidget() || UU.children.some(RU);
        return RU(this.tile.resolveBlock(UU, 1).tile)
      }
      destroy() {
        dg(this.tile)
      }
    }

    function dg(UU, RU) {
      let gU = null === RU || void 0 === RU ? void 0 : RU.get(UU);
      if (1 != gU) {
        null == gU && UU.destroy();
        for (let gU of UU.children) dg(gU, RU)
      }
    }

    function Hg(UU, RU) {
      let gU = UU.observer.selectionRange;
      if (!gU.focusNode) return null;
      let tU = PR(gU.focusNode, gU.focusOffset),
        pU = TR(gU.focusNode, gU.focusOffset),
        EU = tU || pU;
      if (pU && tU && pU.node != tU.node) {
        let RU = jg.get(pU.node);
        if (!RU || RU.isText() && RU.text != pU.node.nodeValue) EU = pU;
        else if (UU.docView.lastCompositionAfterCursor) {
          let UU = jg.get(tU.node);
          !UU || UU.isText() && UU.text != tU.node.nodeValue || (EU = pU)
        }
      }
      if (UU.docView.lastCompositionAfterCursor = EU != tU, !EU) return null;
      let PU = RU - EU.offset;
      return {
        from: PU,
        to: PU + EU.node.nodeValue.length,
        node: EU.node
      }
    }
    let Sg = class {
      constructor() {
        this.changes = []
      }
      compareRange(UU, RU) {
        dU(UU, RU, this.changes)
      }
      comparePoint(UU, RU) {
        dU(UU, RU, this.changes)
      }
      boundChange(UU) {
        dU(UU, UU, this.changes)
      }
    };
    class sg {
      constructor() {
        this.changes = []
      }
      compareRange(UU, RU) {
        dU(UU, RU, this.changes)
      }
      comparePoint() {}
      boundChange(UU) {
        dU(UU, UU, this.changes)
      }
    }
    class yg extends aU {
      constructor(UU) {
        super(), this.height = UU
      }
      toDOM() {
        let UU = document.createElement("div");
        return UU.className = "cm-gap", this.updateDOM(UU), UU
      }
      eq(UU) {
        return UU.height == this.height
      }
      updateDOM(UU) {
        return UU.style.height = this.height + "px", !0
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

    function kg(UU, RU, gU) {
      let tU = UU.lineBlockAt(RU);
      if (Array.isArray(tU.type)) {
        let UU;
        for (let pU of tU.type) {
          if (pU.from > RU) break;
          if (!(pU.to < RU)) {
            if (pU.from < RU && pU.to > RU) return pU;
            UU && (pU.type != YU.Text || UU.type == pU.type && !(gU < 0 ? pU.from < RU : pU.to > RU)) || (UU = pU)
          }
        }
        return UU || tU
      }
      return tU
    }

    function Fg(UU, RU, gU, tU) {
      let pU = UU.state.doc.lineAt(RU.head),
        EU = UU.bidiSpans(pU),
        PU = UU.textDirectionAt(pU.from);
      for (let TU = RU, qU = null;;) {
        let RU = oR(pU, EU, PU, TU, gU),
          KU = bR;
        if (!RU) {
          if (pU.number == (gU ? UU.state.doc.lines : 1)) return TU;
          KU = "\n", pU = UU.state.doc.line(pU.number + (gU ? 1 : -1)), EU = UU.bidiSpans(pU), RU = UU.visualLineSide(pU, !gU)
        }
        if (qU) {
          if (!qU(KU)) return TU
        } else {
          if (!tU) return RU;
          qU = tU(KU)
        }
        TU = RU
      }
    }

    function ig(UU, RU, gU) {
      for (;;) {
        let tU = 0;
        for (let pU of UU) pU.between(RU - 1, RU + 1, ((UU, pU, EU) => {
          if (RU > UU && RU < pU) {
            let EU = tU || gU || (RU - UU < pU - RU ? -1 : 1);
            RU = EU < 0 ? UU : pU, tU = EU
          }
        }));
        if (!tU) return RU
      }
    }

    function Ag(UU, RU) {
      let gU = null;
      for (let pU = 0; pU < RU.hu.length; pU++) {
        let EU = RU.hu[pU],
          PU = null;
        if (EU.empty) {
          let RU = ig(UU, EU.from, 0);
          RU != EU.from && (PU = tU.k.cursor(RU, -1))
        } else {
          let RU = ig(UU, EU.from, -1),
            gU = ig(UU, EU.to, 1);
          RU == EU.from && gU == EU.to || (PU = tU.k.range(EU.from == EU.anchor ? RU : gU, EU.from == EU.head ? RU : gU))
        }
        PU && (gU || (gU = RU.hu.slice()), gU[pU] = PU)
      }
      return gU ? tU.k.create(gU, RU.mainIndex) : RU
    }

    function zg(UU, RU, gU) {
      let pU = ig(UU.state.facet(tg).map((RU => RU(UU))), gU.from, RU.head > gU.from ? -1 : 1);
      return pU == gU.from ? gU : tU.k.cursor(pU, pU < gU.from ? 1 : -1)
    }
    class Mg {
      constructor(UU, RU) {
        this.pos = UU, this.assoc = RU
      }
    }

    function Dg(UU, RU, gU, pU) {
      let EU, PU = UU.contentDOM.getBoundingClientRect(),
        TU = PU.top + UU.viewState.paddingTop,
        {
          x: qU,
          y: KU
        } = RU,
        cU = KU - TU;
      for (;;) {
        if (cU < 0) return new Mg(0, 1);
        if (cU > UU.viewState.docHeight) return new Mg(UU.state.doc.length, -1);
        if (EU = UU.elementAtHeight(cU), null == pU) break;
        if (EU.type == YU.Text) {
          if (pU < 0 ? EU.to < UU.viewport.from : EU.from > UU.viewport.to) break;
          let RU = UU.docView.coordsAt(pU < 0 ? EU.from : EU.to, pU > 0 ? -1 : 1);
          if (RU && (pU < 0 ? RU.top <= cU + TU : RU.bottom >= cU + TU)) break
        }
        let RU = UU.viewState.heightOracle.textHeight / 2;
        cU = pU > 0 ? EU.bottom + RU : EU.top - RU
      }
      if (UU.viewport.from >= EU.to || UU.viewport.to <= EU.from) {
        if (gU) return null;
        if (EU.type == YU.Text) {
          let RU = function(UU, RU, gU, pU, EU) {
            let PU = Math.round((pU - RU.left) * UU.defaultCharacterWidth);
            if (UU.lineWrapping && gU.height > 1.5 * UU.defaultLineHeight) {
              let RU = UU.viewState.heightOracle.textHeight;
              PU += Math.floor((EU - gU.top - .5 * (UU.defaultLineHeight - RU)) / RU) * UU.viewState.heightOracle.lineLength
            }
            let TU = UU.state.sliceDoc(gU.from, gU.to);
            return gU.from + (0, tU.Z)(TU, PU, UU.state.tabSize)
          }(UU, PU, EU, qU, KU);
          return new Mg(RU, RU == EU.from ? 1 : -1)
        }
      }
      if (EU.type != YU.Text) return cU < (EU.top + EU.bottom) / 2 ? new Mg(EU.from, 1) : new Mg(EU.to, -1);
      let GU = UU.docView.lineAt(EU.from, 2);
      return GU && GU.length == EU.length || (GU = UU.docView.lineAt(EU.from, -2)), new Lg(UU, qU, KU, UU.textDirectionAt(EU.from)).scanTile(GU, EU.from)
    }
    class Lg {
      constructor(UU, RU, gU, tU) {
        this.view = UU, this.x = RU, this.y = gU, this.baseDir = tU, this.line = null, this.spans = null
      }
      bidiSpansAt(UU) {
        return (!this.line || this.line.from > UU || this.line.to < UU) && (this.line = this.view.state.doc.lineAt(UU), this.spans = this.view.bidiSpans(this.line)), this
      }
      baseDirAt(UU, RU) {
        let {
          line: gU,
          spans: tU
        } = this.bidiSpansAt(UU);
        return tU[fR.find(tU, UU - gU.from, -1, RU)].level == this.baseDir
      }
      dirAt(UU, RU) {
        let {
          line: gU,
          spans: tU
        } = this.bidiSpansAt(UU);
        return tU[fR.find(tU, UU - gU.from, -1, RU)].dir
      }
      bidiIn(UU, RU) {
        let {
          spans: gU,
          line: tU
        } = this.bidiSpansAt(UU);
        return gU.length > 1 || gU.length && (gU[0].level != this.baseDir || gU[0].to + tU.from < RU)
      }
      scan(UU, RU) {
        let gU, tU, pU, EU = 0,
          PU = UU.length - 1,
          TU = new Set,
          qU = this.bidiIn(UU[0], UU[PU]),
          KU = -1,
          cU = 1e9;
        UU: for (; EU < PU;) {
          let GU = PU - EU,
            jU = EU + PU >> 1;
          RU: if (TU.has(jU)) {
            let UU = EU + Math.floor(Math.random() * GU);
            for (let RU = 0; RU < GU; RU++) {
              if (!TU.has(UU)) {
                jU = UU;
                break RU
              }
              UU++, UU == PU && (UU = EU)
            }
            break UU
          } TU.add(jU);
          let uU = RU(jU);
          if (uU)
            for (let RU = 0; RU < uU.length; RU++) {
              let TU = uU[RU],
                GU = 0;
              if (!(0 == TU.width && uU.length > 1)) {
                if (TU.bottom < this.y)(!gU || gU.bottom < TU.bottom) && (gU = TU), GU = 1;
                else if (TU.top > this.y)(!tU || tU.top > TU.top) && (tU = TU), GU = -1;
                else {
                  let UU = TU.left > this.x ? this.x - TU.left : TU.right < this.x ? this.x - TU.right : 0,
                    RU = Math.abs(UU);
                  RU < cU && (KU = jU, cU = RU, pU = TU), UU && (GU = UU < 0 == (this.baseDir == KR.LTR) ? -1 : 1)
                } - 1 != GU || qU && !this.baseDirAt(UU[jU], 1) ? 1 != GU || qU && !this.baseDirAt(UU[jU + 1], -1) || (EU = jU + 1) : PU = jU
              }
            }
        }
        if (!pU) {
          let pU = gU && (!tU || this.y - gU.bottom < tU.top - this.y) ? gU : tU;
          return this.y = (pU.top + pU.bottom) / 2, this.scan(UU, RU)
        }
        if (cU) {
          if (gU && gU.bottom > pU.top) return this.y = gU.bottom - 1, this.scan(UU, RU);
          if (tU && tU.top < pU.bottom) return this.y = tU.top + 1, this.scan(UU, RU)
        }
        let GU = (qU ? this.dirAt(UU[KU], 1) : this.baseDir) == KR.LTR;
        return {
          i: KU,
          after: this.x > (pU.left + pU.right) / 2 == GU
        }
      }
      scanText(UU, RU) {
        let gU = [];
        for (let EU = 0; EU < UU.length; EU = (0, tU.V)(UU.text, EU)) gU.push(RU + EU);
        gU.push(RU + UU.length);
        let pU = this.scan(gU, (tU => {
          let pU = gU[tU] - RU,
            EU = gU[tU + 1] - RU;
          return tR(UU.dom, pU, EU).getClientRects()
        }));
        return pU.after ? new Mg(gU[pU.i + 1], -1) : new Mg(gU[pU.i], 1)
      }
      scanTile(UU, RU) {
        if (!UU.length) return new Mg(RU, 1);
        if (1 == UU.children.length) {
          let gU = UU.children[0];
          if (gU.isText()) return this.scanText(gU, RU);
          if (gU.isComposite()) return this.scanTile(gU, RU)
        }
        let gU = [RU];
        for (let PU = 0, TU = RU; PU < UU.children.length; PU++) gU.push(TU += UU.children[PU].length);
        let tU = this.scan(gU, (RU => {
            let gU = UU.children[RU];
            return 48 & gU.flags ? null : (1 == gU.dom.nodeType ? gU.dom : tR(gU.dom, 0, gU.length)).getClientRects()
          })),
          pU = UU.children[tU.i],
          EU = gU[tU.i];
        return pU.isText() ? this.scanText(pU, EU) : pU.isComposite() ? this.scanTile(pU, EU) : tU.after ? new Mg(gU[tU.i + 1], -1) : new Mg(EU, 1)
      }
    }
    const Ng = "\uffff";
    class lg {
      constructor(UU, RU) {
        this.points = UU, this.view = RU, this.text = "", this.lineSeparator = RU.state.facet(tU.n.lineSeparator)
      }
      append(UU) {
        this.text += UU
      }
      lineBreak() {
        this.text += Ng
      }
      readRange(UU, RU) {
        if (!UU) return this;
        let gU = UU.parentNode;
        for (let tU = UU;;) {
          this.findPointBefore(gU, tU);
          let UU = this.text.length;
          this.readNode(tU);
          let pU = jg.get(tU),
            EU = tU.nextSibling;
          if (EU == RU) {
            (null === pU || void 0 === pU ? void 0 : pU.breakAfter) && !EU && gU != this.view.contentDOM && this.lineBreak();
            break
          }
          let PU = jg.get(EU);
          (pU && PU ? pU.breakAfter : (pU ? pU.breakAfter : AU(tU)) || AU(EU) && ("BR" != tU.nodeName || (null === pU || void 0 === pU ? void 0 : pU.isWidget())) && this.text.length > UU) && !Ut(EU, RU) && this.lineBreak(), tU = EU
        }
        return this.findPointBefore(gU, RU), this
      }
      readTextNode(UU) {
        let RU = UU.nodeValue;
        for (let gU of this.points) gU.node == UU && (gU.pos = this.text.length + Math.min(gU.offset, RU.length));
        for (let gU = 0, tU = this.lineSeparator ? null : /\r\n?|\n/g;;) {
          let pU, EU = -1,
            PU = 1;
          if (this.lineSeparator ? (EU = RU.indexOf(this.lineSeparator, gU), PU = this.lineSeparator.length) : (pU = tU.exec(RU)) && (EU = pU.index, PU = pU[0].length), this.append(RU.slice(gU, EU < 0 ? RU.length : EU)), EU < 0) break;
          if (this.lineBreak(), PU > 1)
            for (let RU of this.points) RU.node == UU && RU.pos > this.text.length && (RU.pos -= PU - 1);
          gU = EU + PU
        }
      }
      readNode(UU) {
        let RU = jg.get(UU),
          gU = RU && RU.overrideDOMText;
        if (null != gU) {
          this.findPointInside(UU, gU.length);
          for (let UU = gU.iter(); !UU.next().done;) UU.lineBreak ? this.lineBreak() : this.append(UU.value)
        } else 3 == UU.nodeType ? this.readTextNode(UU) : "BR" == UU.nodeName ? UU.nextSibling && this.lineBreak() : 1 == UU.nodeType && this.readRange(UU.firstChild, null)
      }
      findPointBefore(UU, RU) {
        for (let gU of this.points) gU.node == UU && UU.childNodes[gU.offset] == RU && (gU.pos = this.text.length)
      }
      findPointInside(UU, RU) {
        for (let gU of this.points)(3 == UU.nodeType ? gU.node == UU : UU.contains(gU.node)) && (gU.pos = this.text.length + (Og(UU, gU.node, gU.offset) ? RU : 0))
      }
    }

    function Og(UU, RU, gU) {
      for (;;) {
        if (!RU || gU < MU(RU)) return !1;
        if (RU == UU) return !0;
        gU = iU(RU) + 1, RU = RU.parentNode
      }
    }

    function Ut(UU, RU) {
      let gU;
      for (; UU != RU && UU; UU = UU.nextSibling) {
        let RU = jg.get(UU);
        if (!(null === RU || void 0 === RU ? void 0 : RU.isWidget())) return !1;
        RU && (gU || (gU = [])).push(RU)
      }
      if (gU)
        for (let tU of gU) {
          let UU = tU.overrideDOMText;
          if (null === UU || void 0 === UU ? void 0 : UU.length) return !1
        }
      return !0
    }
    class Rt {
      constructor(UU, RU) {
        this.node = UU, this.offset = RU, this.pos = -1
      }
    }
    class gt {
      constructor(UU, RU, gU, pU) {
        this.typeOver = pU, this.bounds = null, this.text = "", this.domChanged = RU > -1;
        let {
          impreciseHead: EU,
          impreciseAnchor: PU
        } = UU.docView, TU = UU.state.selection;
        if (UU.state.readOnly && RU > -1) this.newSel = null;
        else if (RU > -1 && (this.bounds = tt(UU.docView.tile, RU, gU, 0))) {
          let RU = EU || PU ? [] : function(UU) {
              let RU = [];
              if (UU.root.activeElement != UU.contentDOM) return RU;
              let {
                anchorNode: gU,
                anchorOffset: tU,
                focusNode: pU,
                focusOffset: EU
              } = UU.observer.selectionRange;
              gU && (RU.push(new Rt(gU, tU)), pU == gU && EU == tU || RU.push(new Rt(pU, EU)));
              return RU
            }(UU),
            gU = new lg(RU, UU);
          gU.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = gU.text, this.newSel = function(UU, RU) {
            if (0 == UU.length) return null;
            let gU = UU[0].pos,
              pU = 2 == UU.length ? UU[1].pos : gU;
            return gU > -1 && pU > -1 ? tU.k.single(gU + RU, pU + RU) : null
          }(RU, this.bounds.from)
        } else {
          let RU = UU.observer.selectionRange,
            gU = EU && EU.node == RU.focusNode && EU.offset == RU.focusOffset || !sU(UU.contentDOM, RU.focusNode) ? TU.main.head : UU.docView.posFromDOM(RU.focusNode, RU.focusOffset),
            pU = PU && PU.node == RU.anchorNode && PU.offset == RU.anchorOffset || !sU(UU.contentDOM, RU.anchorNode) ? TU.main.anchor : UU.docView.posFromDOM(RU.anchorNode, RU.anchorOffset),
            qU = UU.viewport;
          if ((JU.ios || JU.chrome) && TU.main.empty && gU != pU && (qU.from > 0 || qU.to < UU.state.doc.length)) {
            let RU = Math.min(gU, pU),
              tU = Math.max(gU, pU),
              EU = qU.from - RU,
              PU = qU.to - tU;
            0 != EU && 1 != EU && 0 != RU || 0 != PU && -1 != PU && tU != UU.state.doc.length || (gU = 0, pU = UU.state.doc.length)
          }
          if (UU.inputState.composing > -1 && TU.hu.length > 1) this.newSel = TU.replaceRange(tU.k.range(pU, gU));
          else if (UU.lineWrapping && pU == gU && (!TU.main.empty || TU.main.head != gU) && UU.inputState.lastTouchTime > Date.now() - 100) {
            let RU = UU.coordsAtPos(gU, -1),
              pU = 0;
            RU && (pU = UU.inputState.lastTouchY <= RU.bottom ? -1 : 1), this.newSel = tU.k.create([tU.k.cursor(gU, pU)])
          } else this.newSel = tU.k.single(pU, gU)
        }
      }
    }

    function tt(UU, RU, gU, tU) {
      if (UU.isComposite()) {
        let pU = -1,
          EU = -1,
          PU = -1,
          TU = -1;
        for (let qU = 0, KU = tU, cU = tU; qU < UU.children.length; qU++) {
          let tU = UU.children[qU],
            GU = KU + tU.length;
          if (KU < RU && GU > gU) return tt(tU, RU, gU, KU);
          if (GU >= RU && -1 == pU && (pU = qU, EU = KU), KU > gU && tU.dom.parentNode == UU.dom) {
            PU = qU, TU = cU;
            break
          }
          cU = GU, KU = GU + tU.breakAfter
        }
        return {
          from: EU,
          to: TU < 0 ? tU + UU.length : TU,
          startDOM: (pU ? UU.children[pU - 1].dom.nextSibling : null) || UU.dom.firstChild,
          endDOM: PU < UU.children.length && PU >= 0 ? UU.children[PU].dom : null
        }
      }
      return UU.isText() ? {
        from: tU,
        to: tU + UU.length,
        startDOM: UU.dom,
        endDOM: UU.dom.nextSibling
      } : null
    }

    function pt(UU, RU) {
      let gU, {
          newSel: pU
        } = RU,
        {
          state: EU
        } = UU,
        PU = EU.selection.main,
        TU = UU.inputState.lastKeyTime > Date.now() - 100 ? UU.inputState.lastKeyCode : -1;
      if (RU.bounds) {
        let {
          from: UU,
          to: pU
        } = RU.bounds, qU = PU.from, KU = null;
        (8 === TU || JU.android && RU.text.length < pU - UU) && (qU = PU.to, KU = "end");
        let cU, GU, jU = EU.doc.sliceString(UU, pU, Ng);
        !PU.empty && PU.from >= UU && PU.to <= pU && (RU.typeOver || jU != RU.text) && jU.slice(0, PU.from - UU) == RU.text.slice(0, PU.from - UU) && jU.slice(PU.to - UU) == RU.text.slice(cU = RU.text.length - (jU.length - (PU.to - UU))) ? gU = {
          from: PU.from,
          to: PU.to,
          insert: tU.E.of(RU.text.slice(PU.from - UU, cU).split(Ng))
        } : (GU = Pt(jU, RU.text, qU - UU, KU)) && (JU.chrome && 13 == TU && GU.toB == GU.from + 2 && RU.text.slice(GU.from, GU.toB) == Ng + Ng && GU.toB--, gU = {
          from: UU + GU.from,
          to: UU + GU.toA,
          insert: tU.E.of(RU.text.slice(GU.from, GU.toB).split(Ng))
        })
      } else pU && (!UU.hasFocus && EU.facet(zR) || Tt(pU, PU)) && (pU = null);
      if (!gU && !pU) return !1;
      if ((JU.mac || JU.android) && gU && gU.from == gU.to && gU.from == PU.head - 1 && /^\. ?$/.test(gU.insert.toString()) && "off" == UU.contentDOM.getAttribute("autocorrect") ? (pU && 2 == gU.insert.length && (pU = tU.k.single(pU.main.anchor - 1, pU.main.head - 1)), gU = {
          from: gU.from,
          to: gU.to,
          insert: tU.E.of([gU.insert.toString().replace(".", " ")])
        }) : EU.doc.lineAt(PU.from).to < PU.to && UU.docView.lineHasWidget(PU.to) && UU.inputState.insertingTextAt > Date.now() - 50 ? gU = {
          from: PU.from,
          to: PU.to,
          insert: EU.toText(UU.inputState.insertingText)
        } : JU.chrome && gU && gU.from == gU.to && gU.from == PU.head && "\n " == gU.insert.toString() && UU.lineWrapping && (pU && (pU = tU.k.single(pU.main.anchor - 1, pU.main.head - 1)), gU = {
          from: PU.from,
          to: PU.to,
          insert: tU.E.of([" "])
        }), gU) return Et(UU, gU, pU, TU);
      if (pU && !Tt(pU, PU)) {
        let RU = !1,
          gU = "select";
        return UU.inputState.lastSelectionTime > Date.now() - 50 && ("select" == UU.inputState.lastSelectionOrigin && (RU = !0), gU = UU.inputState.lastSelectionOrigin, "select.pointer" == gU && (pU = Ag(EU.facet(tg).map((RU => RU(UU))), pU))), UU.dispatch({
          selection: pU,
          scrollIntoView: RU,
          userEvent: gU
        }), !0
      }
      return !1
    }

    function Et(UU, RU, gU) {
      let pU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
      if (JU.ios && UU.inputState.flushIOSKey(RU)) return !0;
      let EU = UU.state.selection.main;
      if (JU.android && (RU.to == EU.to && (RU.from == EU.from || RU.from == EU.from - 1 && " " == UU.state.sliceDoc(RU.from, EU.from)) && 1 == RU.insert.length && 2 == RU.insert.lines && pR(UU.contentDOM, "Enter", 13) || (RU.from == EU.from - 1 && RU.to == EU.to && 0 == RU.insert.length || 8 == pU && RU.insert.length < RU.to - RU.from && RU.to > EU.head) && pR(UU.contentDOM, "Backspace", 8) || RU.from == EU.from && RU.to == EU.to + 1 && 0 == RU.insert.length && pR(UU.contentDOM, "Delete", 46))) return !0;
      let PU, TU = RU.insert.toString();
      UU.inputState.composing >= 0 && UU.inputState.composing++;
      let qU = () => PU || (PU = function(UU, RU, gU) {
        let pU, EU = UU.state,
          PU = EU.selection.main,
          TU = -1;
        if (RU.from == RU.to && RU.from < PU.from || RU.from > PU.to) {
          let gU = RU.from < PU.from ? -1 : 1,
            tU = gU < 0 ? PU.from : PU.to,
            pU = ig(EU.facet(tg).map((RU => RU(UU))), tU, gU);
          RU.from == pU && (TU = pU)
        }
        if (TU > -1) pU = {
          changes: RU,
          selection: tU.k.cursor(RU.from + RU.insert.length, -1)
        };
        else if (RU.from >= PU.from && RU.to <= PU.to && RU.to - RU.from >= (PU.to - PU.from) / 3 && (!gU || gU.main.empty && gU.main.from == RU.from + RU.insert.length) && UU.inputState.composing < 0) {
          let gU = PU.from < RU.from ? EU.sliceDoc(PU.from, RU.from) : "",
            tU = PU.to > RU.to ? EU.sliceDoc(RU.to, PU.to) : "";
          pU = EU.replaceSelection(UU.state.toText(gU + RU.insert.sliceString(0, void 0, UU.state.lineBreak) + tU))
        } else {
          let TU = EU.changes(RU),
            qU = gU && gU.main.to <= TU.newLength ? gU.main : void 0;
          if (EU.selection.hu.length > 1 && (UU.inputState.composing >= 0 || UU.inputState.compositionPendingChange) && RU.to <= PU.to + 10 && RU.to >= PU.to - 10) {
            let KU, cU = UU.state.sliceDoc(RU.from, RU.to),
              GU = gU && Hg(UU, gU.main.head);
            if (GU) {
              let UU = RU.insert.length - (RU.to - RU.from);
              KU = {
                from: GU.from,
                to: GU.to - UU
              }
            } else KU = UU.state.doc.lineAt(PU.head);
            let jU = PU.to - RU.to;
            pU = EU.changeByRange((gU => {
              if (gU.from == PU.from && gU.to == PU.to) return {
                changes: TU,
                range: qU || gU.map(TU)
              };
              let pU = gU.to - jU,
                GU = pU - cU.length;
              if (UU.state.sliceDoc(GU, pU) != cU || pU >= KU.from && GU <= KU.to) return {
                range: gU
              };
              let uU = EU.changes({
                  from: GU,
                  to: pU,
                  insert: RU.insert
                }),
                CU = gU.to - PU.to;
              return {
                changes: uU,
                range: qU ? tU.k.range(Math.max(0, qU.anchor + CU), Math.max(0, qU.head + CU)) : gU.map(uU)
              }
            }))
          } else pU = {
            changes: TU,
            selection: qU && EU.selection.replaceRange(qU)
          }
        }
        let qU = "input.type";
        (UU.composing || UU.inputState.compositionPendingChange && UU.inputState.compositionEndedAt > Date.now() - 50) && (UU.inputState.compositionPendingChange = !1, qU += ".compose", UU.inputState.compositionFirstChange && (qU += ".start", UU.inputState.compositionFirstChange = !1));
        return EU.update(pU, {
          userEvent: qU,
          scrollIntoView: !0
        })
      }(UU, RU, gU));
      return UU.state.facet(XR).some((gU => gU(UU, RU.from, RU.to, TU, qU))) || UU.dispatch(qU()), !0
    }

    function Pt(UU, RU, gU, tU) {
      let pU = Math.min(UU.length, RU.length),
        EU = 0;
      for (; EU < pU && UU.charCodeAt(EU) == RU.charCodeAt(EU);) EU++;
      if (EU == pU && UU.length == RU.length) return null;
      let PU = UU.length,
        TU = RU.length;
      for (; PU > 0 && TU > 0 && UU.charCodeAt(PU - 1) == RU.charCodeAt(TU - 1);) PU--, TU--;
      if ("end" == tU) {
        gU -= PU + Math.max(0, EU - Math.min(PU, TU)) - EU
      }
      if (PU < EU && UU.length < RU.length) {
        EU -= gU <= EU && gU >= PU ? EU - gU : 0, TU = EU + (TU - PU), PU = EU
      } else if (TU < EU) {
        EU -= gU <= EU && gU >= TU ? EU - gU : 0, PU = EU + (PU - TU), TU = EU
      }
      return {
        from: EU,
        toA: PU,
        toB: TU
      }
    }

    function Tt(UU, RU) {
      return RU.head == UU.main.head && RU.anchor == UU.main.anchor
    }
    class qt {
      setSelectionOrigin(UU) {
        this.lastSelectionOrigin = UU, this.lastSelectionTime = Date.now()
      }
      constructor(UU) {
        this.view = UU, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = UU.hasFocus, JU.safari && UU.contentDOM.addEventListener("input", (() => null)), JU.gecko && function(UU) {
          rt.has(UU) || (rt.add(UU), UU.addEventListener("copy", (() => {})), UU.addEventListener("cut", (() => {})))
        }(UU.contentDOM.ownerDocument)
      }
      handleEvent(UU) {
        (function(UU, RU) {
          if (!RU.bubbles) return !0;
          if (RU.defaultPrevented) return !1;
          for (let gU, tU = RU.target; tU != UU.contentDOM; tU = tU.parentNode)
            if (!tU || 11 == tU.nodeType || (gU = jg.get(tU)) && gU.isWidget() && !gU.isHidden && gU.widget.ignoreEvent(RU)) return !1;
          return !0
        })(this.view, UU) && !this.ignoreDuringComposition(UU) && ("keydown" == UU.type && this.keydown(UU) || (0 != this.view.updateState ? Promise.resolve().then((() => this.runHandlers(UU.type, UU))) : this.runHandlers(UU.type, UU)))
      }
      runHandlers(UU, RU) {
        let gU = this.handlers[UU];
        if (gU) {
          for (let UU of gU.observers) UU(this.view, RU);
          for (let UU of gU.handlers) {
            if (RU.defaultPrevented) break;
            if (UU(this.view, RU)) {
              RU.preventDefault();
              break
            }
          }
        }
      }
      ensureHandlers(UU) {
        let RU = ct(UU),
          gU = this.handlers,
          tU = this.view.contentDOM;
        for (let pU in RU)
          if ("scroll" != pU) {
            let UU = !RU[pU].handlers.length,
              EU = gU[pU];
            EU && UU != !EU.handlers.length && (tU.removeEventListener(pU, this.handleEvent), EU = null), EU || tU.addEventListener(pU, this.handleEvent, {
              passive: UU
            })
          } for (let pU in gU) "scroll" == pU || RU[pU] || tU.removeEventListener(pU, this.handleEvent);
        this.handlers = RU
      }
      keydown(UU) {
        if (this.lastKeyCode = UU.keyCode, this.lastKeyTime = Date.now(), 9 == UU.keyCode && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return !0;
        if (this.tabFocusMode > 0 && 27 != UU.keyCode && ut.indexOf(UU.keyCode) < 0 && (this.tabFocusMode = -1), JU.android && JU.chrome && !UU.synthetic && (13 == UU.keyCode || 8 == UU.keyCode)) return this.view.observer.delayAndroidKey(UU.key, UU.keyCode), !0;
        let RU;
        return !JU.ios || UU.synthetic || UU.altKey || UU.metaKey || UU.shiftKey || !((RU = Gt.find((RU => RU.keyCode == UU.keyCode))) && !UU.ctrlKey || jt.indexOf(UU.key) > -1 && UU.ctrlKey) ? (229 != UU.keyCode && this.view.observer.forceFlush(), !1) : (this.pendingIOSKey = RU || UU, setTimeout((() => this.flushIOSKey()), 250), !0)
      }
      flushIOSKey(UU) {
        let RU = this.pendingIOSKey;
        return !!RU && (!("Enter" == RU.key && UU && UU.from < UU.to && /^\S+$/.test(UU.insert.toString())) && (this.pendingIOSKey = void 0, pR(this.view.contentDOM, RU.key, RU.keyCode, RU instanceof KeyboardEvent ? RU : void 0)))
      }
      ignoreDuringComposition(UU) {
        return !(!/^key/.test(UU.type) || UU.synthetic) && (this.composing > 0 || !!(JU.safari && !JU.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = !1, !0))
      }
      startMouseSelection(UU) {
        this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = UU
      }
      update(UU) {
        this.view.observer.update(UU), this.mouseSelection && this.mouseSelection.update(UU), this.draggedContent && UU.docChanged && (this.draggedContent = this.draggedContent.map(UU.changes)), UU.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0)
      }
      destroy() {
        this.mouseSelection && this.mouseSelection.destroy()
      }
    }

    function Kt(UU, RU) {
      return (gU, tU) => {
        try {
          return RU.call(UU, tU, gU)
        } catch (pU) {
          AR(gU.state, pU)
        }
      }
    }

    function ct(UU) {
      let RU = Object.create(null);

      function gU(UU) {
        return RU[UU] || (RU[UU] = {
          observers: [],
          handlers: []
        })
      }
      for (let tU of UU) {
        let UU = tU.spec,
          RU = UU && UU.plugin.domEventHandlers,
          pU = UU && UU.plugin.domEventObservers;
        if (RU)
          for (let EU in RU) {
            let UU = RU[EU];
            UU && gU(EU).handlers.push(Kt(tU.value, UU))
          }
        if (pU)
          for (let EU in pU) {
            let UU = pU[EU];
            UU && gU(EU).observers.push(Kt(tU.value, UU))
          }
      }
      for (let tU in Qt) gU(tU).handlers.push(Qt[tU]);
      for (let tU in et) gU(tU).observers.push(et[tU]);
      return RU
    }
    const Gt = [{
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
      jt = "dthko",
      ut = [16, 17, 18, 20, 91, 92, 224, 225];

    function Ct(UU) {
      return .7 * Math.max(0, UU) + 8
    }
    class ht {
      constructor(UU, RU, gU, pU) {
        this.view = UU, this.startEvent = RU, this.style = gU, this.mustSelect = pU, this.scrollSpeed = {
          x: 0,
          y: 0
        }, this.scrolling = -1, this.lastEvent = RU, this.scrollParents = lU(UU.contentDOM), this.atoms = UU.state.facet(tg).map((RU => RU(UU)));
        let EU = UU.contentDOM.ownerDocument;
        EU.addEventListener("mousemove", this.move = this.move.bind(this)), EU.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = RU.shiftKey, this.multiple = UU.state.facet(tU.n.allowMultipleSelections) && function(UU, RU) {
          let gU = UU.state.facet(aR);
          return gU.length ? gU[0](RU) : JU.mac ? RU.metaKey : RU.ctrlKey
        }(UU, RU), this.dragging = !(! function(UU, RU) {
          let {
            main: gU
          } = UU.state.selection;
          if (gU.empty) return !1;
          let tU = SU(UU.root);
          if (!tU || 0 == tU.rangeCount) return !0;
          let pU = tU.getRangeAt(0).getClientRects();
          for (let EU = 0; EU < pU.length; EU++) {
            let UU = pU[EU];
            if (UU.left <= RU.clientX && UU.right >= RU.clientX && UU.top <= RU.clientY && UU.bottom >= RU.clientY) return !0
          }
          return !1
        }(UU, RU) || 1 != bt(RU)) && null
      }
      start(UU) {
        !1 === this.dragging && this.select(UU)
      }
      move(UU) {
        if (0 == UU.buttons) return this.destroy();
        if (this.dragging || null == this.dragging && (RU = this.startEvent, gU = UU, Math.max(Math.abs(RU.clientX - gU.clientX), Math.abs(RU.clientY - gU.clientY)) < 10)) return;
        var RU, gU;
        this.select(this.lastEvent = UU);
        let tU = 0,
          pU = 0,
          EU = 0,
          PU = 0,
          TU = this.view.win.innerWidth,
          qU = this.view.win.innerHeight;
        this.scrollParents.x && ({
          left: EU,
          right: TU
        } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({
          top: PU,
          bottom: qU
        } = this.scrollParents.y.getBoundingClientRect());
        let KU = Tg(this.view);
        UU.clientX - KU.left <= EU + 6 ? tU = -Ct(EU - UU.clientX) : UU.clientX + KU.right >= TU - 6 && (tU = Ct(UU.clientX - TU)), UU.clientY - KU.top <= PU + 6 ? pU = -Ct(PU - UU.clientY) : UU.clientY + KU.bottom >= qU - 6 && (pU = Ct(UU.clientY - qU)), this.setScrollSpeed(tU, pU)
      }
      up(UU) {
        null == this.dragging && this.select(this.lastEvent), this.dragging || UU.preventDefault(), this.destroy()
      }
      destroy() {
        this.setScrollSpeed(0, 0);
        let UU = this.view.contentDOM.ownerDocument;
        UU.removeEventListener("mousemove", this.move), UU.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null
      }
      setScrollSpeed(UU, RU) {
        this.scrollSpeed = {
          x: UU,
          y: RU
        }, UU || RU ? this.scrolling < 0 && (this.scrolling = setInterval((() => this.scroll()), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1)
      }
      scroll() {
        let {
          x: UU,
          y: RU
        } = this.scrollSpeed;
        UU && this.scrollParents.x && (this.scrollParents.x.scrollLeft += UU, UU = 0), RU && this.scrollParents.y && (this.scrollParents.y.scrollTop += RU, RU = 0), (UU || RU) && this.view.win.scrollBy(UU, RU), !1 === this.dragging && this.select(this.lastEvent)
      }
      select(UU) {
        let {
          view: RU
        } = this, gU = Ag(this.atoms, this.style.get(UU, this.extend, this.multiple));
        !this.mustSelect && gU.eq(RU.state.selection, !1 === this.dragging) || this.view.dispatch({
          selection: gU,
          userEvent: "select.pointer"
        }), this.mustSelect = !1
      }
      update(UU) {
        UU.transactions.some((UU => UU.isUserEvent("input.type"))) ? this.destroy() : this.style.update(UU) && setTimeout((() => this.select(this.lastEvent)), 20)
      }
    }
    const Qt = Object.create(null),
      et = Object.create(null),
      Wt = JU.ie && JU.ie_version < 15 || JU.ios && JU.webkit_version < 604;

    function ft(UU, RU, gU) {
      for (let tU of UU.facet(RU)) gU = tU(gU, UU);
      return gU
    }

    function xt(UU, RU) {
      RU = ft(UU.state, dR, RU);
      let gU, {
          state: pU
        } = UU,
        EU = 1,
        PU = pU.toText(RU),
        TU = PU.lines == pU.selection.hu.length;
      if (null != Zt && pU.selection.hu.every((UU => UU.empty)) && Zt == PU.toString()) {
        let UU = -1;
        gU = pU.changeByRange((gU => {
          let qU = pU.doc.lineAt(gU.from);
          if (qU.from == UU) return {
            range: gU
          };
          UU = qU.from;
          let KU = pU.toText((TU ? PU.line(EU++).text : RU) + pU.lineBreak);
          return {
            changes: {
              from: qU.from,
              insert: KU
            },
            range: tU.k.cursor(gU.from + KU.length)
          }
        }))
      } else gU = TU ? pU.changeByRange((UU => {
        let RU = PU.line(EU++);
        return {
          changes: {
            from: UU.from,
            to: UU.to,
            insert: RU.text
          },
          range: tU.k.cursor(UU.from + RU.length)
        }
      })) : pU.replaceSelection(PU);
      UU.dispatch(gU, {
        userEvent: "input.paste",
        scrollIntoView: !0
      })
    }

    function mt(UU, RU, gU, pU) {
      if (1 == pU) return tU.k.cursor(RU, gU);
      if (2 == pU) return function(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          pU = UU.charCategorizer(RU),
          EU = UU.doc.lineAt(RU),
          PU = RU - EU.from;
        if (0 == EU.length) return tU.k.cursor(RU);
        0 == PU ? gU = 1 : PU == EU.length && (gU = -1);
        let TU = PU,
          qU = PU;
        gU < 0 ? TU = (0, tU.V)(EU.text, PU, !1) : qU = (0, tU.V)(EU.text, PU);
        let KU = pU(EU.text.slice(TU, qU));
        for (; TU > 0;) {
          let UU = (0, tU.V)(EU.text, TU, !1);
          if (pU(EU.text.slice(UU, TU)) != KU) break;
          TU = UU
        }
        for (; qU < EU.length;) {
          let UU = (0, tU.V)(EU.text, qU);
          if (pU(EU.text.slice(qU, UU)) != KU) break;
          qU = UU
        }
        return tU.k.range(TU + EU.from, qU + EU.from)
      }(UU.state, RU, gU);
      {
        let pU = UU.docView.lineAt(RU, gU),
          EU = UU.state.doc.lineAt(pU ? pU.posAtEnd : RU),
          PU = pU ? pU.posAtStart : EU.from,
          TU = pU ? pU.posAtEnd : EU.to;
        return TU < UU.state.doc.length && TU == EU.to && TU++, tU.k.range(PU, TU)
      }
    }
    et.scroll = UU => {
      UU.inputState.lastScrollTop = UU.scrollDOM.scrollTop, UU.inputState.lastScrollLeft = UU.scrollDOM.scrollLeft
    }, et.wheel = et.mousewheel = UU => {
      UU.inputState.lastWheelEvent = Date.now()
    }, Qt.keydown = (UU, RU) => (UU.inputState.setSelectionOrigin("select"), 27 == RU.keyCode && 0 != UU.inputState.tabFocusMode && (UU.inputState.tabFocusMode = Date.now() + 2e3), !1), et.touchstart = (UU, RU) => {
      let gU = UU.inputState,
        tU = RU.targetTouches[0];
      gU.lastTouchTime = Date.now(), tU && (gU.lastTouchX = tU.clientX, gU.lastTouchY = tU.clientY), gU.setSelectionOrigin("select.pointer")
    }, et.touchmove = UU => {
      UU.inputState.setSelectionOrigin("select.pointer")
    }, Qt.mousedown = (UU, RU) => {
      if (UU.observer.flush(), UU.inputState.lastTouchTime > Date.now() - 2e3) return !1;
      let gU = null;
      for (let tU of UU.state.facet(BR))
        if (gU = tU(UU, RU), gU) break;
      if (gU || 0 != RU.button || (gU = function(UU, RU) {
          let gU = UU.posAndSideAtCoords({
              x: RU.clientX,
              y: RU.clientY
            }, !1),
            pU = bt(RU),
            EU = UU.state.selection;
          return {
            update(UU) {
              UU.docChanged && (gU.pos = UU.changes.mapPos(gU.pos), EU = EU.map(UU.changes))
            },
            get(RU, PU, TU) {
              let qU, KU = UU.posAndSideAtCoords({
                  x: RU.clientX,
                  y: RU.clientY
                }, !1),
                cU = mt(UU, KU.pos, KU.assoc, pU);
              if (gU.pos != KU.pos && !PU) {
                let RU = mt(UU, gU.pos, gU.assoc, pU),
                  EU = Math.min(RU.from, cU.from),
                  PU = Math.max(RU.to, cU.to);
                cU = EU < cU.from ? tU.k.range(EU, PU, cU.assoc) : tU.k.range(PU, EU, cU.assoc)
              }
              return PU ? EU.replaceRange(EU.main.extend(cU.from, cU.to, cU.assoc)) : TU && 1 == pU && EU.hu.length > 1 && (qU = function(UU, RU) {
                for (let gU = 0; gU < UU.hu.length; gU++) {
                  let {
                    from: pU,
                    to: EU
                  } = UU.hu[gU];
                  if (pU <= RU && EU >= RU) return tU.k.create(UU.hu.slice(0, gU).concat(UU.hu.slice(gU + 1)), UU.mainIndex == gU ? 0 : UU.mainIndex - (UU.mainIndex > gU ? 1 : 0))
                }
                return null
              }(EU, KU.pos)) ? qU : TU ? EU.addRange(cU) : tU.k.create([cU])
            }
          }
        }(UU, RU)), gU) {
        let tU = !UU.hasFocus;
        UU.inputState.startMouseSelection(new ht(UU, RU, gU, tU)), tU && UU.observer.ignore((() => {
          gR(UU.contentDOM);
          let RU = UU.root.activeElement;
          RU && !RU.contains(UU.contentDOM) && RU.blur()
        }));
        let pU = UU.inputState.mouseSelection;
        if (pU) return pU.start(RU), !1 === pU.dragging
      } else UU.inputState.setSelectionOrigin("select.pointer");
      return !1
    };
    const It = JU.ie && JU.ie_version <= 11;
    let Jt = null,
      wt = 0,
      nt = 0;

    function bt(UU) {
      if (!It) return UU.detail;
      let RU = Jt,
        gU = nt;
      return Jt = UU, nt = Date.now(), wt = !RU || gU > Date.now() - 400 && Math.abs(RU.clientX - UU.clientX) < 2 && Math.abs(RU.clientY - UU.clientY) < 2 ? (wt + 1) % 3 : 1
    }

    function ot(UU, RU, gU, tU) {
      if (!(gU = ft(UU.state, dR, gU))) return;
      let pU = UU.posAtCoords({
          x: RU.clientX,
          y: RU.clientY
        }, !1),
        {
          draggedContent: EU
        } = UU.inputState,
        PU = tU && EU && function(UU, RU) {
          let gU = UU.state.facet(YR);
          return gU.length ? gU[0](RU) : JU.mac ? !RU.altKey : !RU.ctrlKey
        }(UU, RU) ? {
          from: EU.from,
          to: EU.to
        } : null,
        TU = {
          from: pU,
          insert: gU
        },
        qU = UU.state.changes(PU ? [PU, TU] : TU);
      UU.focus(), UU.dispatch({
        changes: qU,
        selection: {
          anchor: qU.mapPos(pU, -1),
          head: qU.mapPos(pU, 1)
        },
        userEvent: PU ? "move.drop" : "input.drop"
      }), UU.inputState.draggedContent = null
    }
    Qt.dragstart = (UU, RU) => {
      let {
        selection: {
          main: gU
        }
      } = UU.state;
      if (RU.target.draggable) {
        let pU = UU.docView.tile.nearest(RU.target);
        if (pU && pU.isWidget()) {
          let UU = pU.posAtStart,
            RU = UU + pU.length;
          (UU >= gU.to || RU <= gU.from) && (gU = tU.k.range(UU, RU))
        }
      }
      let {
        inputState: pU
      } = UU;
      return pU.mouseSelection && (pU.mouseSelection.dragging = !0), pU.draggedContent = gU, RU.dataTransfer && (RU.dataTransfer.setData("Text", ft(UU.state, HR, UU.state.sliceDoc(gU.from, gU.to))), RU.dataTransfer.effectAllowed = "copyMove"), !1
    }, Qt.dragend = UU => (UU.inputState.draggedContent = null, !1), Qt.drop = (UU, RU) => {
      if (!RU.dataTransfer) return !1;
      if (UU.state.readOnly) return !0;
      let gU = RU.dataTransfer.files;
      if (gU && gU.length) {
        let tU = Array(gU.length),
          pU = 0,
          EU = () => {
            ++pU == gU.length && ot(UU, RU, tU.filter((UU => null != UU)).join(UU.state.lineBreak), !1)
          };
        for (let UU = 0; UU < gU.length; UU++) {
          let RU = new FileReader;
          RU.onerror = EU, RU.onload = () => {
            /[\x00-\x08\x0e-\x1f]{2}/.test(RU.result) || (tU[UU] = RU.result), EU()
          }, RU.readAsText(gU[UU])
        }
        return !0
      } {
        let gU = RU.dataTransfer.getData("Text");
        if (gU) return ot(UU, RU, gU, !0), !0
      }
      return !1
    }, Qt.paste = (UU, RU) => {
      if (UU.state.readOnly) return !0;
      UU.observer.flush();
      let gU = Wt ? null : RU.clipboardData;
      return gU ? (xt(UU, gU.getData("text/plain") || gU.getData("text/uri-list")), !0) : (function(UU) {
        let RU = UU.dom.parentNode;
        if (!RU) return;
        let gU = RU.appendChild(document.createElement("textarea"));
        gU.style.cssText = "position: fixed; left: -10000px; top: 10px", gU.focus(), setTimeout((() => {
          UU.focus(), gU.remove(), xt(UU, gU.value)
        }), 50)
      }(UU), !1)
    };
    let Zt = null;
    Qt.copy = Qt.cut = (UU, RU) => {
      if (!yU(UU.contentDOM, UU.observer.selectionRange)) return !1;
      let {
        text: gU,
        hu: tU,
        linewise: pU
      } = function(UU) {
        let RU = [],
          gU = [],
          tU = !1;
        for (let pU of UU.selection.hu) pU.empty || (RU.push(UU.sliceDoc(pU.from, pU.to)), gU.push(pU));
        if (!RU.length) {
          let pU = -1;
          for (let {
              from: tU
            }
            of UU.selection.hu) {
            let EU = UU.doc.lineAt(tU);
            EU.number > pU && (RU.push(EU.text), gU.push({
              from: EU.from,
              to: Math.min(UU.doc.length, EU.to + 1)
            })), pU = EU.number
          }
          tU = !0
        }
        return {
          text: ft(UU, HR, RU.join(UU.lineBreak)),
          hu: gU,
          linewise: tU
        }
      }(UU.state);
      if (!gU && !pU) return !1;
      Zt = pU ? gU : null, "cut" != RU.type || UU.state.readOnly || UU.dispatch({
        changes: tU,
        scrollIntoView: !0,
        userEvent: "delete.cut"
      });
      let EU = Wt ? null : RU.clipboardData;
      return EU ? (EU.clearData(), EU.setData("text/plain", gU), !0) : (function(UU, RU) {
        let gU = UU.dom.parentNode;
        if (!gU) return;
        let tU = gU.appendChild(document.createElement("textarea"));
        tU.style.cssText = "position: fixed; left: -10000px; top: 10px", tU.value = RU, tU.focus(), tU.selectionEnd = RU.length, tU.selectionStart = 0, setTimeout((() => {
          tU.remove(), UU.focus()
        }), 50)
      }(UU, gU), !1)
    };
    const Yt = tU.d.define();

    function Bt(UU, RU) {
      let gU = [];
      for (let tU of UU.facet(vR)) {
        let pU = tU(UU, RU);
        pU && gU.push(pU)
      }
      return gU.length ? UU.update({
        effects: gU,
        annotations: Yt.of(!0)
      }) : null
    }

    function Vt(UU) {
      setTimeout((() => {
        let RU = UU.hasFocus;
        if (RU != UU.inputState.notifiedFocused) {
          let gU = Bt(UU.state, RU);
          gU ? UU.dispatch(gU) : UU.update([])
        }
      }), 10)
    }
    et.focus = UU => {
      UU.inputState.lastFocusTime = Date.now(), UU.scrollDOM.scrollTop || !UU.inputState.lastScrollTop && !UU.inputState.lastScrollLeft || (UU.scrollDOM.scrollTop = UU.inputState.lastScrollTop, UU.scrollDOM.scrollLeft = UU.inputState.lastScrollLeft), Vt(UU)
    }, et.blur = UU => {
      UU.observer.clearSelectionRange(), Vt(UU)
    }, et.compositionstart = et.compositionupdate = UU => {
      UU.observer.editContext || (null == UU.inputState.compositionFirstChange && (UU.inputState.compositionFirstChange = !0), UU.inputState.composing < 0 && (UU.inputState.composing = 0))
    }, et.compositionend = UU => {
      UU.observer.editContext || (UU.inputState.composing = -1, UU.inputState.compositionEndedAt = Date.now(), UU.inputState.compositionPendingKey = !0, UU.inputState.compositionPendingChange = UU.observer.pendingRecords().length > 0, UU.inputState.compositionFirstChange = null, JU.chrome && JU.android ? UU.observer.flushSoon() : UU.inputState.compositionPendingChange ? Promise.resolve().then((() => UU.observer.flush())) : setTimeout((() => {
        UU.inputState.composing < 0 && UU.docView.hasComposition && UU.update([])
      }), 50))
    }, et.contextmenu = UU => {
      UU.inputState.lastContextMenu = Date.now()
    }, Qt.beforeinput = (UU, RU) => {
      var gU, tU;
      if ("insertText" != RU.inputType && "insertCompositionText" != RU.inputType || (UU.inputState.insertingText = RU.data, UU.inputState.insertingTextAt = Date.now()), "insertReplacementText" == RU.inputType && UU.observer.editContext) {
        let tU = null === (gU = RU.dataTransfer) || void 0 === gU ? void 0 : gU.getData("text/plain"),
          pU = RU.getTargetRanges();
        if (tU && pU.length) {
          let RU = pU[0],
            gU = UU.posAtDOM(RU.startContainer, RU.startOffset),
            EU = UU.posAtDOM(RU.endContainer, RU.endOffset);
          return Et(UU, {
            from: gU,
            to: EU,
            insert: UU.state.toText(tU)
          }, null), !0
        }
      }
      let pU;
      if (JU.chrome && JU.android && (pU = Gt.find((UU => UU.inputType == RU.inputType))) && (UU.observer.delayAndroidKey(pU.key, pU.keyCode), "Backspace" == pU.key || "Delete" == pU.key)) {
        let RU = (null === (tU = window.visualViewport) || void 0 === tU ? void 0 : tU.height) || 0;
        setTimeout((() => {
          var gU;
          ((null === (gU = window.visualViewport) || void 0 === gU ? void 0 : gU.height) || 0) > RU + 10 && UU.hasFocus && (UU.contentDOM.blur(), UU.focus())
        }), 100)
      }
      return JU.ios && "deleteContentForward" == RU.inputType && UU.observer.flushSoon(), JU.safari && "insertText" == RU.inputType && UU.inputState.composing >= 0 && setTimeout((() => et.compositionend(UU, RU)), 20), !1
    };
    const rt = new Set;
    const Xt = ["pre-wrap", "normal", "pre-line", "break-spaces"];
    let vt = !1;

    function dt() {
      vt = !1
    }
    class Ht {
      constructor(UU) {
        this.lineWrapping = UU, this.doc = tU.E.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30
      }
      heightForGap(UU, RU) {
        let gU = this.doc.lineAt(RU).number - this.doc.lineAt(UU).number + 1;
        return this.lineWrapping && (gU += Math.max(0, Math.ceil((RU - UU - gU * this.lineLength * .5) / this.lineLength))), this.lineHeight * gU
      }
      heightForLine(UU) {
        if (!this.lineWrapping) return this.lineHeight;
        return (1 + Math.max(0, Math.ceil((UU - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight
      }
      setDoc(UU) {
        return this.doc = UU, this
      }
      mustRefreshForWrapping(UU) {
        return Xt.indexOf(UU) > -1 != this.lineWrapping
      }
      mustRefreshForHeights(UU) {
        let RU = !1;
        for (let gU = 0; gU < UU.length; gU++) {
          let tU = UU[gU];
          tU < 0 ? gU++ : this.heightSamples[Math.floor(10 * tU)] || (RU = !0, this.heightSamples[Math.floor(10 * tU)] = !0)
        }
        return RU
      }
      refresh(UU, RU, gU, tU, pU, EU) {
        let PU = Xt.indexOf(UU) > -1,
          TU = Math.abs(RU - this.lineHeight) > .3 || this.lineWrapping != PU || Math.abs(gU - this.charWidth) > .1;
        if (this.lineWrapping = PU, this.lineHeight = RU, this.charWidth = gU, this.textHeight = tU, this.lineLength = pU, TU) {
          this.heightSamples = {};
          for (let UU = 0; UU < EU.length; UU++) {
            let RU = EU[UU];
            RU < 0 ? UU++ : this.heightSamples[Math.floor(10 * RU)] = !0
          }
        }
        return TU
      }
    }
    class St {
      constructor(UU, RU) {
        this.from = UU, this.heights = RU, this.index = 0
      }
      get more() {
        return this.index < this.heights.length
      }
    }
    class st {
      constructor(UU, RU, gU, tU, pU) {
        this.from = UU, this.length = RU, this.top = gU, this.height = tU, this._content = pU
      }
      get type() {
        return "number" == typeof this._content ? YU.Text : Array.isArray(this._content) ? this._content : this._content.type
      }
      get to() {
        return this.from + this.length
      }
      get bottom() {
        return this.top + this.height
      }
      get widget() {
        return this._content instanceof XU ? this._content.widget : null
      }
      get widgetLineBreaks() {
        return "number" == typeof this._content ? this._content : 0
      }
      join(UU) {
        let RU = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(UU._content) ? UU._content : [UU]);
        return new st(this.from, this.length + UU.length, this.top, this.height + UU.height, RU)
      }
    }
    var yt = function(UU) {
      return UU[UU.ByPos = 0] = "ByPos", UU[UU.ByHeight = 1] = "ByHeight", UU[UU.ByPosNoHeight = 2] = "ByPosNoHeight", UU
    }(yt || (yt = {}));
    const kt = .001;
    class Ft {
      constructor(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.length = UU, this.height = RU, this.flags = gU
      }
      get outdated() {
        return (2 & this.flags) > 0
      }
      set outdated(UU) {
        this.flags = (UU ? 2 : 0) | -3 & this.flags
      }
      setHeight(UU) {
        this.height != UU && (Math.abs(this.height - UU) > kt && (vt = !0), this.height = UU)
      }
      replace(UU, RU, gU) {
        return Ft.of(gU)
      }
      decomposeLeft(UU, RU) {
        RU.push(this)
      }
      decomposeRight(UU, RU) {
        RU.push(this)
      }
      applyChanges(UU, RU, gU, tU) {
        let pU = this,
          EU = gU.doc;
        for (let PU = tU.length - 1; PU >= 0; PU--) {
          let {
            fromA: TU,
            toA: qU,
            fromB: KU,
            toB: cU
          } = tU[PU], GU = pU.lineAt(TU, yt.ByPosNoHeight, gU.setDoc(RU), 0, 0), jU = GU.to >= qU ? GU : pU.lineAt(qU, yt.ByPosNoHeight, gU, 0, 0);
          for (cU += jU.to - qU, qU = jU.to; PU > 0 && GU.from <= tU[PU - 1].toA;) TU = tU[PU - 1].fromA, KU = tU[PU - 1].fromB, PU--, TU < GU.from && (GU = pU.lineAt(TU, yt.ByPosNoHeight, gU, 0, 0));
          KU += GU.from - TU, TU = GU.from;
          let uU = lt.build(gU.setDoc(EU), UU, KU, cU);
          pU = it(pU, pU.replace(TU, qU, uU))
        }
        return pU.updateHeight(gU, 0)
      }
      static empty() {
        return new Mt(0, 0, 0)
      }
      static of (UU) {
        if (1 == UU.length) return UU[0];
        let RU = 0,
          gU = UU.length,
          tU = 0,
          pU = 0;
        for (;;)
          if (RU == gU)
            if (tU > 2 * pU) {
              let pU = UU[RU - 1];
              pU.break ? UU.splice(--RU, 1, pU.left, null, pU.right) : UU.splice(--RU, 1, pU.left, pU.right), gU += 1 + pU.break, tU -= pU.size
            } else {
              if (!(pU > 2 * tU)) break;
              {
                let RU = UU[gU];
                RU.break ? UU.splice(gU, 1, RU.left, null, RU.right) : UU.splice(gU, 1, RU.left, RU.right), gU += 2 + RU.break, pU -= RU.size
              }
            }
        else if (tU < pU) {
          let gU = UU[RU++];
          gU && (tU += gU.size)
        } else {
          let RU = UU[--gU];
          RU && (pU += RU.size)
        }
        let EU = 0;
        return null == UU[RU - 1] ? (EU = 1, RU--) : null == UU[RU] && (EU = 1, gU++), new Lt(Ft.of(UU.slice(0, RU)), EU, Ft.of(UU.slice(gU)))
      }
    }

    function it(UU, RU) {
      return UU == RU ? UU : (UU.constructor != RU.constructor && (vt = !0), RU)
    }
    Ft.prototype.size = 1;
    const At = BU.replace({});
    class zt extends Ft {
      constructor(UU, RU, gU) {
        super(UU, RU), this.deco = gU, this.spaceAbove = 0
      }
      mainBlock(UU, RU) {
        return new st(RU, this.length, UU + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0)
      }
      blockAt(UU, RU, gU, tU) {
        return this.spaceAbove && UU < gU + this.spaceAbove ? new st(tU, 0, gU, this.spaceAbove, At) : this.mainBlock(gU, tU)
      }
      lineAt(UU, RU, gU, tU, pU) {
        let EU = this.mainBlock(tU, pU);
        return this.spaceAbove ? this.blockAt(0, gU, tU, pU).join(EU) : EU
      }
      forEachLine(UU, RU, gU, tU, pU, EU) {
        UU <= pU + this.length && RU >= pU && EU(this.lineAt(0, yt.ByPos, gU, tU, pU))
      }
      setMeasuredHeight(UU) {
        let RU = UU.heights[UU.index++];
        RU < 0 ? (this.spaceAbove = -RU, RU = UU.heights[UU.index++]) : this.spaceAbove = 0, this.setHeight(RU)
      }
      updateHeight(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gU = arguments.length > 3 ? arguments[3] : void 0;
        return gU && gU.from <= RU && gU.more && this.setMeasuredHeight(gU), this.outdated = !1, this
      }
      toString() {
        return `block(${this.length})`
      }
    }
    class Mt extends zt {
      constructor(UU, RU, gU) {
        super(UU, RU, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = gU
      }
      mainBlock(UU, RU) {
        return new st(RU, this.length, UU + this.spaceAbove, this.height - this.spaceAbove, this.breaks)
      }
      replace(UU, RU, gU) {
        let tU = gU[0];
        return 1 == gU.length && (tU instanceof Mt || tU instanceof Dt && 4 & tU.flags) && Math.abs(this.length - tU.length) < 10 ? (tU instanceof Dt ? tU = new Mt(tU.length, this.height, this.spaceAbove) : tU.height = this.height, this.outdated || (tU.outdated = !1), tU) : Ft.of(gU)
      }
      updateHeight(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          tU = arguments.length > 3 ? arguments[3] : void 0;
        return tU && tU.from <= RU && tU.more ? this.setMeasuredHeight(tU) : (gU || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, UU.heightForLine(this.length - this.collapsed)) + this.breaks * UU.lineHeight)), this.outdated = !1, this
      }
      toString() {
        return `line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`
      }
    }
    class Dt extends Ft {
      constructor(UU) {
        super(UU, 0)
      }
      heightMetrics(UU, RU) {
        let gU, tU = UU.doc.lineAt(RU).number,
          pU = UU.doc.lineAt(RU + this.length).number,
          EU = pU - tU + 1,
          PU = 0;
        if (UU.lineWrapping) {
          let RU = Math.min(this.height, UU.lineHeight * EU);
          gU = RU / EU, this.length > EU + 1 && (PU = (this.height - RU) / (this.length - EU - 1))
        } else gU = this.height / EU;
        return {
          firstLine: tU,
          lastLine: pU,
          perLine: gU,
          perChar: PU
        }
      }
      blockAt(UU, RU, gU, tU) {
        let {
          firstLine: pU,
          lastLine: EU,
          perLine: PU,
          perChar: TU
        } = this.heightMetrics(RU, tU);
        if (RU.lineWrapping) {
          let pU = tU + (UU < RU.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (UU - gU) / this.height)) * this.length)),
            EU = RU.doc.lineAt(pU),
            qU = PU + EU.length * TU,
            KU = Math.max(gU, UU - qU / 2);
          return new st(EU.from, EU.length, KU, qU, 0)
        } {
          let tU = Math.max(0, Math.min(EU - pU, Math.floor((UU - gU) / PU))),
            {
              from: TU,
              length: qU
            } = RU.doc.line(pU + tU);
          return new st(TU, qU, gU + PU * tU, PU, 0)
        }
      }
      lineAt(UU, RU, gU, tU, pU) {
        if (RU == yt.ByHeight) return this.blockAt(UU, gU, tU, pU);
        if (RU == yt.ByPosNoHeight) {
          let {
            from: RU,
            to: tU
          } = gU.doc.lineAt(UU);
          return new st(RU, tU - RU, 0, 0, 0)
        }
        let {
          firstLine: EU,
          perLine: PU,
          perChar: TU
        } = this.heightMetrics(gU, pU), qU = gU.doc.lineAt(UU), KU = PU + qU.length * TU, cU = qU.number - EU, GU = tU + PU * cU + TU * (qU.from - pU - cU);
        return new st(qU.from, qU.length, Math.max(tU, Math.min(GU, tU + this.height - KU)), KU, 0)
      }
      forEachLine(UU, RU, gU, tU, pU, EU) {
        UU = Math.max(UU, pU), RU = Math.min(RU, pU + this.length);
        let {
          firstLine: PU,
          perLine: TU,
          perChar: qU
        } = this.heightMetrics(gU, pU);
        for (let KU = UU, cU = tU; KU <= RU;) {
          let RU = gU.doc.lineAt(KU);
          if (KU == UU) {
            let gU = RU.number - PU;
            cU += TU * gU + qU * (UU - pU - gU)
          }
          let tU = TU + qU * RU.length;
          EU(new st(RU.from, RU.length, cU, tU, 0)), cU += tU, KU = RU.to + 1
        }
      }
      replace(UU, RU, gU) {
        let tU = this.length - RU;
        if (tU > 0) {
          let UU = gU[gU.length - 1];
          UU instanceof Dt ? gU[gU.length - 1] = new Dt(UU.length + tU) : gU.push(null, new Dt(tU - 1))
        }
        if (UU > 0) {
          let RU = gU[0];
          RU instanceof Dt ? gU[0] = new Dt(UU + RU.length) : gU.unshift(new Dt(UU - 1), null)
        }
        return Ft.of(gU)
      }
      decomposeLeft(UU, RU) {
        RU.push(new Dt(UU - 1), null)
      }
      decomposeRight(UU, RU) {
        RU.push(null, new Dt(this.length - UU - 1))
      }
      updateHeight(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          tU = arguments.length > 3 ? arguments[3] : void 0,
          pU = RU + this.length;
        if (tU && tU.from <= RU + this.length && tU.more) {
          let gU = [],
            EU = Math.max(RU, tU.from),
            PU = -1;
          for (tU.from > RU && gU.push(new Dt(tU.from - RU - 1).updateHeight(UU, RU)); EU <= pU && tU.more;) {
            let RU = UU.doc.lineAt(EU).length;
            gU.length && gU.push(null);
            let pU = tU.heights[tU.index++],
              TU = 0;
            pU < 0 && (TU = -pU, pU = tU.heights[tU.index++]), -1 == PU ? PU = pU : Math.abs(pU - PU) >= kt && (PU = -2);
            let qU = new Mt(RU, pU, TU);
            qU.outdated = !1, gU.push(qU), EU += RU + 1
          }
          EU <= pU && gU.push(null, new Dt(pU - EU).updateHeight(UU, EU));
          let TU = Ft.of(gU);
          return (PU < 0 || Math.abs(TU.height - this.height) >= kt || Math.abs(PU - this.heightMetrics(UU, RU).perLine) >= kt) && (vt = !0), it(this, TU)
        }
        return (gU || this.outdated) && (this.setHeight(UU.heightForGap(RU, RU + this.length)), this.outdated = !1), this
      }
      toString() {
        return `gap(${this.length})`
      }
    }
    class Lt extends Ft {
      constructor(UU, RU, gU) {
        super(UU.length + RU + gU.length, UU.height + gU.height, RU | (UU.outdated || gU.outdated ? 2 : 0)), this.left = UU, this.right = gU, this.size = UU.size + gU.size
      }
      get break() {
        return 1 & this.flags
      }
      blockAt(UU, RU, gU, tU) {
        let pU = gU + this.left.height;
        return UU < pU ? this.left.blockAt(UU, RU, gU, tU) : this.right.blockAt(UU, RU, pU, tU + this.left.length + this.break)
      }
      lineAt(UU, RU, gU, tU, pU) {
        let EU = tU + this.left.height,
          PU = pU + this.left.length + this.break,
          TU = RU == yt.ByHeight ? UU < EU : UU < PU,
          qU = TU ? this.left.lineAt(UU, RU, gU, tU, pU) : this.right.lineAt(UU, RU, gU, EU, PU);
        if (this.break || (TU ? qU.to < PU : qU.from > PU)) return qU;
        let KU = RU == yt.ByPosNoHeight ? yt.ByPosNoHeight : yt.ByPos;
        return TU ? qU.join(this.right.lineAt(PU, KU, gU, EU, PU)) : this.left.lineAt(PU, KU, gU, tU, pU).join(qU)
      }
      forEachLine(UU, RU, gU, tU, pU, EU) {
        let PU = tU + this.left.height,
          TU = pU + this.left.length + this.break;
        if (this.break) UU < TU && this.left.forEachLine(UU, RU, gU, tU, pU, EU), RU >= TU && this.right.forEachLine(UU, RU, gU, PU, TU, EU);
        else {
          let qU = this.lineAt(TU, yt.ByPos, gU, tU, pU);
          UU < qU.from && this.left.forEachLine(UU, qU.from - 1, gU, tU, pU, EU), qU.to >= UU && qU.from <= RU && EU(qU), RU > qU.to && this.right.forEachLine(qU.to + 1, RU, gU, PU, TU, EU)
        }
      }
      replace(UU, RU, gU) {
        let tU = this.left.length + this.break;
        if (RU < tU) return this.balanced(this.left.replace(UU, RU, gU), this.right);
        if (UU > this.left.length) return this.balanced(this.left, this.right.replace(UU - tU, RU - tU, gU));
        let pU = [];
        UU > 0 && this.decomposeLeft(UU, pU);
        let EU = pU.length;
        for (let PU of gU) pU.push(PU);
        if (UU > 0 && Nt(pU, EU - 1), RU < this.length) {
          let UU = pU.length;
          this.decomposeRight(RU, pU), Nt(pU, UU)
        }
        return Ft.of(pU)
      }
      decomposeLeft(UU, RU) {
        let gU = this.left.length;
        if (UU <= gU) return this.left.decomposeLeft(UU, RU);
        RU.push(this.left), this.break && (gU++, UU >= gU && RU.push(null)), UU > gU && this.right.decomposeLeft(UU - gU, RU)
      }
      decomposeRight(UU, RU) {
        let gU = this.left.length,
          tU = gU + this.break;
        if (UU >= tU) return this.right.decomposeRight(UU - tU, RU);
        UU < gU && this.left.decomposeRight(UU, RU), this.break && UU < tU && RU.push(null), RU.push(this.right)
      }
      balanced(UU, RU) {
        return UU.size > 2 * RU.size || RU.size > 2 * UU.size ? Ft.of(this.break ? [UU, null, RU] : [UU, RU]) : (this.left = it(this.left, UU), this.right = it(this.right, RU), this.setHeight(UU.height + RU.height), this.outdated = UU.outdated || RU.outdated, this.size = UU.size + RU.size, this.length = UU.length + this.break+RU.length, this)
      }
      updateHeight(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          tU = arguments.length > 3 ? arguments[3] : void 0,
          {
            left: pU,
            right: EU
          } = this,
          PU = RU + pU.length + this.break,
          TU = null;
        return tU && tU.from <= RU + pU.length && tU.more ? TU = pU = pU.updateHeight(UU, RU, gU, tU) : pU.updateHeight(UU, RU, gU), tU && tU.from <= PU + EU.length && tU.more ? TU = EU = EU.updateHeight(UU, PU, gU, tU) : EU.updateHeight(UU, PU, gU), TU ? this.balanced(pU, EU) : (this.height = this.left.height + this.right.height, this.outdated = !1, this)
      }
      toString() {
        return this.left + (this.break ? " " : "-") + this.right
      }
    }

    function Nt(UU, RU) {
      let gU, tU;
      null == UU[RU] && (gU = UU[RU - 1]) instanceof Dt && (tU = UU[RU + 1]) instanceof Dt && UU.splice(RU - 1, 3, new Dt(gU.length + 1 + tU.length))
    }
    class lt {
      constructor(UU, RU) {
        this.pos = UU, this.oracle = RU, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = UU
      }
      get isCovered() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering
      }
      span(UU, RU) {
        if (this.lineStart > -1) {
          let UU = Math.min(RU, this.lineEnd),
            gU = this.nodes[this.nodes.length - 1];
          gU instanceof Mt ? gU.length += UU - this.pos : (UU > this.pos || !this.isCovered) && this.nodes.push(new Mt(UU - this.pos, -1, 0)), this.writtenTo = UU, RU > UU && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1)
        }
        this.pos = RU
      }
      point(UU, RU, gU) {
        if (UU < RU || gU.heightRelevant) {
          let tU = gU.widget ? gU.widget.estimatedHeight : 0,
            pU = gU.widget ? gU.widget.lineBreaks : 0;
          tU < 0 && (tU = this.oracle.lineHeight);
          let EU = RU - UU;
          gU.block ? this.vUU(new zt(EU, tU, gU)) : (EU || pU || tU >= 5) && this.addLineDeco(tU, pU, EU)
        } else RU > UU && this.span(UU, RU);
        this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
      }
      enterLine() {
        if (this.lineStart > -1) return;
        let {
          from: UU,
          to: RU
        } = this.oracle.doc.lineAt(this.pos);
        this.lineStart = UU, this.lineEnd = RU, this.writtenTo < UU && ((this.writtenTo < UU - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, UU - 1)), this.nodes.push(null)), this.pos > UU && this.nodes.push(new Mt(this.pos - UU, -1, 0)), this.writtenTo = this.pos
      }
      blankContent(UU, RU) {
        let gU = new Dt(RU - UU);
        return this.oracle.doc.lineAt(UU).to == RU && (gU.flags |= 4), gU
      }
      ensureLine() {
        this.enterLine();
        let UU = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (UU instanceof Mt) return UU;
        let RU = new Mt(0, -1, 0);
        return this.nodes.push(RU), RU
      }
      vUU(UU) {
        this.enterLine();
        let RU = UU.deco;
        RU && RU.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(UU), this.writtenTo = this.pos = this.pos + UU.length, RU && RU.endSide > 0 && (this.covering = UU)
      }
      addLineDeco(UU, RU, gU) {
        let tU = this.ensureLine();
        tU.length += gU, tU.collapsed += gU, tU.widgetHeight = Math.max(tU.widgetHeight, UU), tU.breaks += RU, this.writtenTo = this.pos = this.pos + gU
      }
      finish(UU) {
        let RU = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
        !(this.lineStart > -1) || RU instanceof Mt || this.isCovered ? (this.writtenTo < this.pos || null == RU) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new Mt(0, -1, 0));
        let gU = UU;
        for (let tU of this.nodes) tU instanceof Mt && tU.updateHeight(this.oracle, gU), gU += tU ? tU.length : 1;
        return this.nodes
      }
      static build(UU, RU, gU, pU) {
        let EU = new lt(gU, UU);
        return tU.v.spans(RU, gU, pU, EU, 0), EU.finish(gU)
      }
    }
    class Ot {
      constructor() {
        this.changes = []
      }
      compareRange() {}
      comparePoint(UU, RU, gU, tU) {
        (UU < RU || gU && gU.heightRelevant || tU && tU.heightRelevant) && dU(UU, RU, this.changes, 5)
      }
    }

    function Up(UU, RU) {
      let gU = UU.getBoundingClientRect(),
        tU = UU.ownerDocument,
        pU = tU.defaultView || window,
        EU = Math.max(0, gU.left),
        PU = Math.min(pU.innerWidth, gU.right),
        TU = Math.max(0, gU.top),
        qU = Math.min(pU.innerHeight, gU.bottom);
      for (let KU = UU.parentNode; KU && KU != tU.body;)
        if (1 == KU.nodeType) {
          let RU = KU,
            gU = window.getComputedStyle(RU);
          if ((RU.scrollHeight > RU.clientHeight || RU.scrollWidth > RU.clientWidth) && "visible" != gU.overflow) {
            let gU = RU.getBoundingClientRect();
            EU = Math.max(EU, gU.left), PU = Math.min(PU, gU.right), TU = Math.max(TU, gU.top), qU = Math.min(KU == UU.parentNode ? pU.innerHeight : qU, gU.bottom)
          }
          KU = "absolute" == gU.position || "fixed" == gU.position ? RU.offsetParent : RU.parentNode
        } else {
          if (11 != KU.nodeType) break;
          KU = KU.host
        } return {
        left: EU - gU.left,
        right: Math.max(EU, PU) - gU.left,
        top: TU - (gU.top + RU),
        bottom: Math.max(TU, qU) - (gU.top + RU)
      }
    }

    function Rp(UU, RU) {
      let gU = UU.getBoundingClientRect();
      return {
        left: 0,
        right: gU.right - gU.left,
        top: RU,
        bottom: gU.bottom - (gU.top + RU)
      }
    }
    class gp {
      constructor(UU, RU, gU, tU) {
        this.from = UU, this.to = RU, this.size = gU, this.displaySize = tU
      }
      static same(UU, RU) {
        if (UU.length != RU.length) return !1;
        for (let gU = 0; gU < UU.length; gU++) {
          let tU = UU[gU],
            pU = RU[gU];
          if (tU.from != pU.from || tU.to != pU.to || tU.size != pU.size) return !1
        }
        return !0
      }
      draw(UU, RU) {
        return BU.replace({
          widget: new tp(this.displaySize * (RU ? UU.scaleY : UU.scaleX), RU)
        }).range(this.from, this.to)
      }
    }
    class tp extends aU {
      constructor(UU, RU) {
        super(), this.size = UU, this.vertical = RU
      }
      eq(UU) {
        return UU.size == this.size && UU.vertical == this.vertical
      }
      toDOM() {
        let UU = document.createElement("div");
        return this.vertical ? UU.style.height = this.size + "px" : (UU.style.width = this.size + "px", UU.style.height = "2px", UU.style.display = "inline-block"), UU
      }
      get estimatedHeight() {
        return this.vertical ? this.size : -1
      }
    }
    class pp {
      constructor(UU, RU) {
        this.view = UU, this.state = RU, this.pixelViewport = {
          left: 0,
          right: window.innerWidth,
          top: 0,
          bottom: 0
        }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = qp, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = KR.LTR, this.h_ = [], this.mustEnforceCursorAssoc = !1;
        let gU = RU.facet(OR).some((UU => "function" != typeof UU && "cm-lineWrapping" == UU.class));
        this.heightOracle = new Ht(gU), this.stateDeco = Kp(RU), this.heightMap = Ft.empty().applyChanges(this.stateDeco, tU.E.empty, this.heightOracle.setDoc(RU.doc), [new Kg(0, 0, 0, RU.doc.length)]);
        for (let tU = 0; tU < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); tU++);
        this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = BU.set(this.lineGaps.map((UU => UU.draw(this, !1)))), this.scrollParent = UU.scrollDOM, this.computeVisibleRanges()
      }
      updateForViewport() {
        let UU = [this.viewport],
          {
            main: RU
          } = this.state.selection;
        for (let gU = 0; gU <= 1; gU++) {
          let tU = gU ? RU.head : RU.anchor;
          if (!UU.some((UU => {
              let {
                from: RU,
                to: gU
              } = UU;
              return tU >= RU && tU <= gU
            }))) {
            let {
              from: RU,
              to: gU
            } = this.lineBlockAt(tU);
            UU.push(new Ep(RU, gU))
          }
        }
        return this.viewports = UU.sort(((UU, RU) => UU.from - RU.from)), this.updateScaler()
      }
      updateScaler() {
        let UU = this.scaler;
        return this.scaler = this.heightMap.height <= 7e6 ? qp : new cp(this.heightOracle, this.heightMap, this.viewports), UU.eq(this.scaler) ? 0 : 2
      }
      updateViewportLines() {
        this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (UU => {
          this.viewportLines.push(Gp(UU, this.scaler))
        }))
      }
      update(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.state = UU.state;
        let gU = this.stateDeco;
        this.stateDeco = Kp(this.state);
        let pU = UU.changedRanges,
          EU = Kg.extendWithRanges(pU, function(UU, RU, gU) {
            let pU = new Ot;
            return tU.v.compare(UU, RU, gU, pU, 0), pU.changes
          }(gU, this.stateDeco, UU ? UU.changes : tU.ChangeSet.empty(this.state.doc.length))),
          PU = this.heightMap.height,
          TU = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
        dt(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, UU.startState.doc, this.heightOracle.setDoc(this.state.doc), EU), (this.heightMap.height != PU || vt) && (UU.flags |= 2), TU ? (this.scrollAnchorPos = UU.changes.mapPos(TU.from, -1), this.scrollAnchorHeight = TU.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = PU);
        let qU = EU.length ? this.mapViewport(this.viewport, UU.changes) : this.viewport;
        (RU && (RU.range.head < qU.from || RU.range.head > qU.to) || !this.viewportIsAppropriate(qU)) && (qU = this.getViewport(0, RU));
        let KU = qU.from != this.viewport.from || qU.to != this.viewport.to;
        this.viewport = qU, UU.flags |= this.updateForViewport(), (KU || !UU.changes.empty || 2 & UU.flags) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, UU.changes))), UU.flags |= this.computeVisibleRanges(UU.changes), RU && (this.scrollTarget = RU), !this.mustEnforceCursorAssoc && (UU.selectionSet || UU.focusChanged) && UU.view.lineWrapping && UU.state.selection.main.empty && UU.state.selection.main.assoc && !UU.state.facet(sR) && (this.mustEnforceCursorAssoc = !0)
      }
      measure() {
        let {
          view: UU
        } = this, RU = UU.contentDOM, gU = window.getComputedStyle(RU), pU = this.heightOracle, EU = gU.whiteSpace;
        this.defaultTextDirection = "rtl" == gU.direction ? KR.RTL : KR.LTR;
        let PU = this.heightOracle.mustRefreshForWrapping(EU) || "refresh" === this.mustMeasureContent,
          TU = RU.getBoundingClientRect(),
          qU = PU || this.mustMeasureContent || this.contentDOMHeight != TU.height;
        this.contentDOMHeight = TU.height, this.mustMeasureContent = !1;
        let KU = 0,
          cU = 0;
        if (TU.width && TU.height) {
          let {
            scaleX: UU,
            scaleY: gU
          } = NU(RU, TU);
          (UU > .005 && Math.abs(this.scaleX - UU) > .005 || gU > .005 && Math.abs(this.scaleY - gU) > .005) && (this.scaleX = UU, this.scaleY = gU, KU |= 16, PU = qU = !0)
        }
        let GU = (parseInt(gU.paddingTop) || 0) * this.scaleY,
          jU = (parseInt(gU.paddingBottom) || 0) * this.scaleY;
        this.paddingTop == GU && this.paddingBottom == jU || (this.paddingTop = GU, this.paddingBottom = jU, KU |= 18), this.editorWidth != UU.scrollDOM.clientWidth && (pU.lineWrapping && (qU = !0), this.editorWidth = UU.scrollDOM.clientWidth, KU |= 16);
        let uU = lU(this.view.contentDOM, !1).y;
        uU != this.scrollParent && (this.scrollParent = uU, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
        let CU = this.getScrollOffset();
        this.scrollOffset != CU && (this.scrollAnchorHeight = -1, this.scrollOffset = CU), this.scrolledToBottom = ER(this.scrollParent || UU.win);
        let hU = (this.printing ? Rp : Up)(RU, this.paddingTop),
          QU = hU.top - this.pixelViewport.top,
          eU = hU.bottom - this.pixelViewport.bottom;
        this.pixelViewport = hU;
        let WU = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
        if (WU != this.inView && (this.inView = WU, WU && (qU = !0)), !this.inView && !this.scrollTarget && ! function(UU) {
            let RU = UU.getBoundingClientRect(),
              gU = UU.ownerDocument.defaultView || window;
            return RU.left < gU.innerWidth && RU.right > 0 && RU.top < gU.innerHeight && RU.bottom > 0
          }(UU.dom)) return 0;
        let fU = TU.width;
        if (this.contentDOMWidth == fU && this.editorHeight == UU.scrollDOM.clientHeight || (this.contentDOMWidth = TU.width, this.editorHeight = UU.scrollDOM.clientHeight, KU |= 16), qU) {
          let RU = UU.docView.measureVisibleLineHeights(this.viewport);
          if (pU.mustRefreshForHeights(RU) && (PU = !0), PU || pU.lineWrapping && Math.abs(fU - this.contentDOMWidth) > pU.charWidth) {
            let {
              lineHeight: gU,
              charWidth: tU,
              textHeight: TU
            } = UU.docView.measureTextSize();
            PU = gU > 0 && pU.refresh(EU, gU, tU, TU, Math.max(5, fU / tU), RU), PU && (UU.docView.minWidth = 0, KU |= 16)
          }
          QU > 0 && eU > 0 ? cU = Math.max(QU, eU) : QU < 0 && eU < 0 && (cU = Math.min(QU, eU)), dt();
          for (let gU of this.viewports) {
            let EU = gU.from == this.viewport.from ? RU : UU.docView.measureVisibleLineHeights(gU);
            this.heightMap = (PU ? Ft.empty().applyChanges(this.stateDeco, tU.E.empty, this.heightOracle, [new Kg(0, 0, 0, UU.state.doc.length)]) : this.heightMap).updateHeight(pU, 0, PU, new St(gU.from, EU))
          }
          vt && (KU |= 2)
        }
        let xU = !this.viewportIsAppropriate(this.viewport, cU) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
        return xU && (2 & KU && (KU |= this.updateScaler()), this.viewport = this.getViewport(cU, this.scrollTarget), KU |= this.updateForViewport()), (2 & KU || xU) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(PU ? [] : this.lineGaps, UU)), KU |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, UU.docView.enforceCursorAssoc()), KU
      }
      get visibleTop() {
        return this.scaler.fromDOM(this.pixelViewport.top)
      }
      get visibleBottom() {
        return this.scaler.fromDOM(this.pixelViewport.bottom)
      }
      getViewport(UU, RU) {
        let gU = .5 - Math.max(-.5, Math.min(.5, UU / 1e3 / 2)),
          tU = this.heightMap,
          pU = this.heightOracle,
          {
            visibleTop: EU,
            visibleBottom: PU
          } = this,
          TU = new Ep(tU.lineAt(EU - 1e3 * gU, yt.ByHeight, pU, 0, 0).from, tU.lineAt(PU + 1e3 * (1 - gU), yt.ByHeight, pU, 0, 0).to);
        if (RU) {
          let {
            head: UU
          } = RU.range;
          if (UU < TU.from || UU > TU.to) {
            let gU, EU = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
              PU = tU.lineAt(UU, yt.ByPos, pU, 0, 0);
            gU = "center" == RU.y ? (PU.top + PU.bottom) / 2 - EU / 2 : "start" == RU.y || "nearest" == RU.y && UU < TU.from ? PU.top : PU.bottom - EU, TU = new Ep(tU.lineAt(gU - 500, yt.ByHeight, pU, 0, 0).from, tU.lineAt(gU + EU + 500, yt.ByHeight, pU, 0, 0).to)
          }
        }
        return TU
      }
      mapViewport(UU, RU) {
        let gU = RU.mapPos(UU.from, -1),
          tU = RU.mapPos(UU.to, 1);
        return new Ep(this.heightMap.lineAt(gU, yt.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(tU, yt.ByPos, this.heightOracle, 0, 0).to)
      }
      viewportIsAppropriate(UU) {
        let {
          from: RU,
          to: gU
        } = UU, tU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!this.inView) return !0;
        let {
          top: pU
        } = this.heightMap.lineAt(RU, yt.ByPos, this.heightOracle, 0, 0), {
          bottom: EU
        } = this.heightMap.lineAt(gU, yt.ByPos, this.heightOracle, 0, 0), {
          visibleTop: PU,
          visibleBottom: TU
        } = this;
        return (0 == RU || pU <= PU - Math.max(10, Math.min(-tU, 250))) && (gU == this.state.doc.length || EU >= TU + Math.max(10, Math.min(tU, 250))) && pU > PU - 2e3 && EU < TU + 2e3
      }
      mapLineGaps(UU, RU) {
        if (!UU.length || RU.empty) return UU;
        let gU = [];
        for (let tU of UU) RU.touchesRange(tU.from, tU.to) || gU.push(new gp(RU.mapPos(tU.from), RU.mapPos(tU.to), tU.size, tU.displaySize));
        return gU
      }
      ensureLineGaps(UU, RU) {
        let gU = this.heightOracle.lineWrapping,
          pU = gU ? 1e4 : 2e3,
          EU = pU >> 1,
          PU = pU << 1;
        if (this.defaultTextDirection != KR.LTR && !gU) return [];
        let TU = [],
          qU = (pU, PU, KU, cU) => {
            if (PU - pU < EU) return;
            let GU = this.state.selection.main,
              jU = [GU.from];
            GU.empty || jU.push(GU.to);
            for (let UU of jU)
              if (UU > pU && UU < PU) return qU(pU, UU - 10, KU, cU), void qU(UU + 10, PU, KU, cU);
            let uU = function(UU, RU) {
              for (let gU of UU)
                if (RU(gU)) return gU;
              return
            }(UU, (UU => UU.from >= KU.from && UU.to <= KU.to && Math.abs(UU.from - pU) < EU && Math.abs(UU.to - PU) < EU && !jU.some((RU => UU.from < RU && UU.to > RU))));
            if (!uU) {
              if (PU < KU.to && RU && gU && RU.h_.some((UU => UU.from <= PU && UU.to >= PU))) {
                let UU = RU.moveToLineBoundary(tU.k.cursor(PU), !1, !0).head;
                UU > pU && (PU = UU)
              }
              let UU = this.gapSize(KU, pU, PU, cU);
              uU = new gp(pU, PU, UU, gU || UU < 2e6 ? UU : 2e6)
            }
            TU.push(uU)
          },
          KU = RU => {
            if (RU.length < PU || RU.type != YU.Text) return;
            let EU = function(UU, RU, gU) {
              let pU = [],
                EU = UU,
                PU = 0;
              tU.v.spans(gU, UU, RU, {
                span() {},
                point(UU, RU) {
                  UU > EU && (pU.push({
                    from: EU,
                    to: UU
                  }), PU += UU - EU), EU = RU
                }
              }, 20), EU < RU && (pU.push({
                from: EU,
                to: RU
              }), PU += RU - EU);
              return {
                total: PU,
                hu: pU
              }
            }(RU.from, RU.to, this.stateDeco);
            if (EU.total < PU) return;
            let TU, KU, cU = this.scrollTarget ? this.scrollTarget.range.head : null;
            if (gU) {
              let UU, gU, tU = pU / this.heightOracle.lineLength * this.heightOracle.lineHeight;
              if (null != cU) {
                let pU = Tp(EU, cU),
                  PU = ((this.visibleBottom - this.visibleTop) / 2 + tU) / RU.height;
                UU = pU - PU, gU = pU + PU
              } else UU = (this.visibleTop - RU.top - tU) / RU.height, gU = (this.visibleBottom - RU.top + tU) / RU.height;
              TU = Pp(EU, UU), KU = Pp(EU, gU)
            } else {
              let gU = EU.total * this.heightOracle.charWidth,
                tU = pU * this.heightOracle.charWidth,
                PU = 0;
              if (gU > 2e6)
                for (let pU of UU) pU.from >= RU.from && pU.from < RU.to && pU.size != pU.displaySize && pU.from * this.heightOracle.charWidth + PU < this.pixelViewport.left && (PU = pU.size - pU.displaySize);
              let qU, GU, jU = this.pixelViewport.left + PU,
                uU = this.pixelViewport.right + PU;
              if (null != cU) {
                let UU = Tp(EU, cU),
                  RU = ((uU - jU) / 2 + tU) / gU;
                qU = UU - RU, GU = UU + RU
              } else qU = (jU - tU) / gU, GU = (uU + tU) / gU;
              TU = Pp(EU, qU), KU = Pp(EU, GU)
            }
            TU > RU.from && qU(RU.from, TU, RU, EU), KU < RU.to && qU(KU, RU.to, RU, EU)
          };
        for (let tU of this.viewportLines) Array.isArray(tU.type) ? tU.type.forEach(KU) : KU(tU);
        return TU
      }
      gapSize(UU, RU, gU, tU) {
        let pU = Tp(tU, gU) - Tp(tU, RU);
        return this.heightOracle.lineWrapping ? UU.height * pU : tU.total * this.heightOracle.charWidth * pU
      }
      updateLineGaps(UU) {
        gp.same(UU, this.lineGaps) || (this.lineGaps = UU, this.lineGapDeco = BU.set(UU.map((UU => UU.draw(this, this.heightOracle.lineWrapping)))))
      }
      computeVisibleRanges(UU) {
        let RU = this.stateDeco;
        this.lineGaps.length && (RU = RU.concat(this.lineGapDeco));
        let gU = [];
        tU.v.spans(RU, this.viewport.from, this.viewport.to, {
          span(UU, RU) {
            gU.push({
              from: UU,
              to: RU
            })
          },
          point() {}
        }, 20);
        let pU = 0;
        if (gU.length != this.h_.length) pU = 12;
        else
          for (let tU = 0; tU < gU.length && !(8 & pU); tU++) {
            let RU = this.h_[tU],
              EU = gU[tU];
            RU.from == EU.from && RU.to == EU.to || (pU |= 4, UU && UU.mapPos(RU.from, -1) == EU.from && UU.mapPos(RU.to, 1) == EU.to || (pU |= 8))
          }
        return this.h_ = gU, pU
      }
      lineBlockAt(UU) {
        return UU >= this.viewport.from && UU <= this.viewport.to && this.viewportLines.find((RU => RU.from <= UU && RU.to >= UU)) || Gp(this.heightMap.lineAt(UU, yt.ByPos, this.heightOracle, 0, 0), this.scaler)
      }
      lineBlockAtHeight(UU) {
        return UU >= this.viewportLines[0].top && UU <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((RU => RU.top <= UU && RU.bottom >= UU)) || Gp(this.heightMap.lineAt(this.scaler.fromDOM(UU), yt.ByHeight, this.heightOracle, 0, 0), this.scaler)
      }
      getScrollOffset() {
        return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY
      }
      scrollAnchorAt(UU) {
        let RU = this.lineBlockAtHeight(UU + 8);
        return RU.from >= this.viewport.from || this.viewportLines[0].top - UU > 200 ? RU : this.viewportLines[0]
      }
      elementAtHeight(UU) {
        return Gp(this.heightMap.blockAt(this.scaler.fromDOM(UU), this.heightOracle, 0, 0), this.scaler)
      }
      get docHeight() {
        return this.scaler.toDOM(this.heightMap.height)
      }
      get contentHeight() {
        return this.docHeight + this.paddingTop + this.paddingBottom
      }
    }
    class Ep {
      constructor(UU, RU) {
        this.from = UU, this.to = RU
      }
    }

    function Pp(UU, RU) {
      let {
        total: gU,
        hu: tU
      } = UU;
      if (RU <= 0) return tU[0].from;
      if (RU >= 1) return tU[tU.length - 1].to;
      let pU = Math.floor(gU * RU);
      for (let EU = 0;; EU++) {
        let {
          from: UU,
          to: RU
        } = tU[EU], gU = RU - UU;
        if (pU <= gU) return UU + pU;
        pU -= gU
      }
    }

    function Tp(UU, RU) {
      let gU = 0;
      for (let {
          from: tU,
          to: pU
        }
        of UU.hu) {
        if (RU <= pU) {
          gU += RU - tU;
          break
        }
        gU += pU - tU
      }
      return gU / UU.total
    }
    const qp = {
      toDOM: UU => UU,
      fromDOM: UU => UU,
      scale: 1,
      eq(UU) {
        return UU == this
      }
    };

    function Kp(UU) {
      let RU = UU.facet(Ug).filter((UU => "function" != typeof UU)),
        gU = UU.facet(gg).filter((UU => "function" != typeof UU));
      return gU.length && RU.push(tU.v.join(gU)), RU
    }
    class cp {
      constructor(UU, RU, gU) {
        let tU = 0,
          pU = 0,
          EU = 0;
        this.viewports = gU.map((gU => {
          let {
            from: pU,
            to: EU
          } = gU, PU = RU.lineAt(pU, yt.ByPos, UU, 0, 0).top, TU = RU.lineAt(EU, yt.ByPos, UU, 0, 0).bottom;
          return tU += TU - PU, {
            from: pU,
            to: EU,
            top: PU,
            bottom: TU,
            domTop: 0,
            domBottom: 0
          }
        })), this.scale = (7e6 - tU) / (RU.height - tU);
        for (let PU of this.viewports) PU.domTop = EU + (PU.top - pU) * this.scale, EU = PU.domBottom = PU.domTop + (PU.bottom - PU.top), pU = PU.bottom
      }
      toDOM(UU) {
        for (let RU = 0, gU = 0, tU = 0;; RU++) {
          let pU = RU < this.viewports.length ? this.viewports[RU] : null;
          if (!pU || UU < pU.top) return tU + (UU - gU) * this.scale;
          if (UU <= pU.bottom) return pU.domTop + (UU - pU.top);
          gU = pU.bottom, tU = pU.domBottom
        }
      }
      fromDOM(UU) {
        for (let RU = 0, gU = 0, tU = 0;; RU++) {
          let pU = RU < this.viewports.length ? this.viewports[RU] : null;
          if (!pU || UU < pU.domTop) return gU + (UU - tU) / this.scale;
          if (UU <= pU.domBottom) return pU.top + (UU - pU.domTop);
          gU = pU.bottom, tU = pU.domBottom
        }
      }
      eq(UU) {
        return UU instanceof cp && (this.scale == UU.scale && this.viewports.length == UU.viewports.length && this.viewports.every(((RU, gU) => RU.from == UU.viewports[gU].from && RU.to == UU.viewports[gU].to)))
      }
    }

    function Gp(UU, RU) {
      if (1 == RU.scale) return UU;
      let gU = RU.toDOM(UU.top),
        tU = RU.toDOM(UU.bottom);
      return new st(UU.from, UU.length, gU, tU - gU, Array.isArray(UU._content) ? UU._content.map((UU => Gp(UU, RU))) : UU._content)
    }
    const jp = tU.p.define({
        combine: UU => UU.join(" ")
      }),
      Cp = tU.p.define({
        combine: UU => UU.indexOf(!0) > -1
      }),
      hp = pU.d.newName(),
      Qp = pU.d.newName(),
      ep = pU.d.newName(),
      Wp = {
        "&light": "." + Qp,
        "&dark": "." + ep
      };

    function fp(UU, RU, gU) {
      return new pU.d(RU, {
        finish: RU => /&/.test(RU) ? RU.replace(/&\w*/, (RU => {
          if ("&" == RU) return UU;
          if (!gU || !gU[RU]) throw new RangeError(`Unsupported selector: ${RU}`);
          return gU[RU]
        })) : UU + " " + RU
      })
    }
    const xp = fp("." + hp, {
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
      }, Wp),
      mp = {
        childList: !0,
        characterData: !0,
        subtree: !0,
        attributes: !0,
        characterDataOldValue: !0
      },
      Ip = JU.ie && JU.ie_version <= 11;
    class Jp {
      constructor(UU) {
        this.view = UU, this.active = !1, this.editContext = null, this.selectionRange = new OU, this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = UU.contentDOM, this.observer = new MutationObserver((RU => {
          for (let UU of RU) this.queue.push(UU);
          (JU.ie && JU.ie_version <= 11 || JU.ios && UU.composing) && RU.some((UU => "childList" == UU.type && UU.removedNodes.length || "characterData" == UU.type && UU.oldValue.length > UU.target.nodeValue.length)) ? this.flushSoon() : this.flush()
        })), !window.EditContext || !JU.android || !1 === UU.constructor.EDIT_CONTEXT || JU.chrome && JU.chrome_version < 126 || (this.editContext = new bp(UU), UU.state.facet(zR) && (UU.contentDOM.editContext = this.editContext.editContext)), Ip && (this.onCharData = UU => {
          this.queue.push({
            target: UU.target,
            type: "characterData",
            oldValue: UU.prevValue
          }), this.flushSoon()
        }), this.onSelectionChange = this.onSelectionChange.bind(this), this.Xx = this.Xx.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver((() => {
          var UU;
          (null === (UU = this.view.docView) || void 0 === UU ? void 0 : UU.lastUpdate) < Date.now() - 75 && this.Xx()
        })), this.resizeScroll.observe(UU.scrollDOM)), this.addWindowListeners(this.win = UU.win), this.start(), "function" == typeof IntersectionObserver && (this.intersection = new IntersectionObserver((UU => {
          this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), UU.length > 0 && UU[UU.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")))
        }), {
          threshold: [0, .001]
        }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((UU => {
          UU.length > 0 && UU[UU.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"))
        }), {})), this.listenForScroll(), this.readSelectionRange()
      }
      onScrollChanged(UU) {
        this.view.inputState.runHandlers("scroll", UU), this.intersecting && this.view.measure()
      }
      onScroll(UU) {
        this.intersecting && this.flush(!1), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(UU)
      }
      Xx() {
        this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout((() => {
          this.resizeTimeout = -1, this.view.requestMeasure()
        }), 50))
      }
      onPrint(UU) {
        ("change" != UU.type && UU.type || UU.matches) && (this.view.viewState.printing = !0, this.view.measure(), setTimeout((() => {
          this.view.viewState.printing = !1, this.view.requestMeasure()
        }), 500))
      }
      updateGaps(UU) {
        if (this.gapIntersection && (UU.length != this.gaps.length || this.gaps.some(((RU, gU) => RU != UU[gU])))) {
          this.gapIntersection.disconnect();
          for (let RU of UU) this.gapIntersection.observe(RU);
          this.gaps = UU
        }
      }
      onSelectionChange(UU) {
        let RU = this.selectionChanged;
        if (!this.readSelectionRange() || this.delayedAndroidKey) return;
        let {
          view: gU
        } = this, tU = this.selectionRange;
        if (gU.state.facet(zR) ? gU.root.activeElement != this.dom : !yU(this.dom, tU)) return;
        let pU = tU.anchorNode && gU.docView.tile.nearest(tU.anchorNode);
        pU && pU.isWidget() && pU.widget.ignoreEvent(UU) ? RU || (this.selectionChanged = !1) : (JU.ie && JU.ie_version <= 11 || JU.android && JU.chrome) && !gU.state.selection.main.empty && tU.focusNode && FU(tU.focusNode, tU.focusOffset, tU.anchorNode, tU.anchorOffset) ? this.flushSoon() : this.flush(!1)
      }
      readSelectionRange() {
        let {
          view: UU
        } = this, RU = SU(UU.root);
        if (!RU) return !1;
        let gU = JU.safari && 11 == UU.root.nodeType && UU.root.activeElement == this.dom && function(UU, RU) {
          if (RU.getComposedRanges) {
            let gU = RU.getComposedRanges(UU.root)[0];
            if (gU) return np(UU, gU)
          }
          let gU = null;

          function tU(UU) {
            UU.preventDefault(), UU.stopImmediatePropagation(), gU = UU.getTargetRanges()[0]
          }
          return UU.contentDOM.addEventListener("beforeinput", tU, !0), UU.dom.ownerDocument.execCommand("indent"), UU.contentDOM.removeEventListener("beforeinput", tU, !0), gU ? np(UU, gU) : null
        }(this.view, RU) || RU;
        if (!gU || this.selectionRange.eq(gU)) return !1;
        let tU = yU(this.dom, gU);
        return tU && !this.selectionChanged && UU.inputState.lastFocusTime > Date.now() - 200 && UU.inputState.lastTouchTime < Date.now() - 300 && function(UU, RU) {
          let gU = RU.focusNode,
            tU = RU.focusOffset;
          if (!gU || RU.anchorNode != gU || RU.anchorOffset != tU) return !1;
          for (tU = Math.min(tU, MU(gU));;)
            if (tU) {
              if (1 != gU.nodeType) return !1;
              let UU = gU.childNodes[tU - 1];
              "false" == UU.contentEditable ? tU-- : (gU = UU, tU = MU(gU))
            } else {
              if (gU == UU) return !0;
              tU = iU(gU), gU = gU.parentNode
            }
        }(this.dom, gU) ? (this.view.inputState.lastFocusTime = 0, UU.docView.updateSelection(), !1) : (this.selectionRange.setRange(gU), tU && (this.selectionChanged = !0), !0)
      }
      setSelectionRange(UU, RU) {
        this.selectionRange.set(UU.node, UU.offset, RU.node, RU.offset), this.selectionChanged = !1
      }
      clearSelectionRange() {
        this.selectionRange.set(null, 0, null, 0)
      }
      listenForScroll() {
        this.parentCheck = -1;
        let UU = 0,
          RU = null;
        for (let gU = this.dom; gU;)
          if (1 == gU.nodeType) !RU && UU < this.scrollTargets.length && this.scrollTargets[UU] == gU ? UU++ : RU || (RU = this.scrollTargets.slice(0, UU)), RU && RU.push(gU), gU = gU.assignedSlot || gU.parentNode;
          else {
            if (11 != gU.nodeType) break;
            gU = gU.host
          } if (UU < this.scrollTargets.length && !RU && (RU = this.scrollTargets.slice(0, UU)), RU) {
          for (let UU of this.scrollTargets) UU.removeEventListener("scroll", this.onScroll);
          for (let UU of this.scrollTargets = RU) UU.addEventListener("scroll", this.onScroll)
        }
      }
      ignore(UU) {
        if (!this.active) return UU();
        try {
          return this.stop(), UU()
        } finally {
          this.start(), this.clear()
        }
      }
      start() {
        this.active || (this.observer.observe(this.dom, mp), Ip && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0)
      }
      stop() {
        this.active && (this.active = !1, this.observer.disconnect(), Ip && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData))
      }
      clear() {
        this.processRecords(), this.queue.length = 0, this.selectionChanged = !1
      }
      delayAndroidKey(UU, RU) {
        var gU;
        if (!this.delayedAndroidKey) {
          let UU = () => {
            let UU = this.delayedAndroidKey;
            if (UU) {
              this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = UU.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && UU.force && pR(this.dom, UU.key, UU.keyCode)
            }
          };
          this.flushingAndroidKey = this.view.win.requestAnimationFrame(UU)
        }
        this.delayedAndroidKey && "Enter" != UU || (this.delayedAndroidKey = {
          key: UU,
          keyCode: RU,
          force: this.lastChange < Date.now() - 50 || !!(null === (gU = this.delayedAndroidKey) || void 0 === gU ? void 0 : gU.force)
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
        for (let UU of this.observer.takeRecords()) this.queue.push(UU);
        return this.queue
      }
      processRecords() {
        let UU = this.pendingRecords();
        UU.length && (this.queue = []);
        let RU = -1,
          gU = -1,
          tU = !1;
        for (let pU of UU) {
          let UU = this.readMutation(pU);
          UU && (UU.typeOver && (tU = !0), -1 == RU ? ({
            from: RU,
            to: gU
          } = UU) : (RU = Math.min(UU.from, RU), gU = Math.max(UU.to, gU)))
        }
        return {
          from: RU,
          to: gU,
          typeOver: tU
        }
      }
      readChange() {
        let {
          from: UU,
          to: RU,
          typeOver: gU
        } = this.processRecords(), tU = this.selectionChanged && yU(this.dom, this.selectionRange);
        if (UU < 0 && !tU) return null;
        UU > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
        let pU = new gt(this.view, UU, RU, gU);
        return this.view.docView.domChanged = {
          newSel: pU.newSel ? pU.newSel.main : null
        }, pU
      }
      flush() {
        let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
        UU && this.readSelectionRange();
        let RU = this.readChange();
        if (!RU) return this.view.requestMeasure(), !1;
        let gU = this.view.state,
          tU = pt(this.view, RU);
        return this.view.state == gU && (RU.domChanged || RU.newSel && !Tt(this.view.state.selection, RU.newSel.main)) && this.view.update([]), tU
      }
      readMutation(UU) {
        let RU = this.view.docView.tile.nearest(UU.target);
        if (!RU || RU.isWidget()) return null;
        if (RU.markDirty("attributes" == UU.type), "childList" == UU.type) {
          let gU = wp(RU, UU.previousSibling || UU.target.previousSibling, -1),
            tU = wp(RU, UU.nextSibling || UU.target.nextSibling, 1);
          return {
            from: gU ? RU.posAfter(gU) : RU.posAtStart,
            to: tU ? RU.posBefore(tU) : RU.posAtEnd,
            typeOver: !1
          }
        }
        return "characterData" == UU.type ? {
          from: RU.posAtStart,
          to: RU.posAtEnd,
          typeOver: UU.target.nodeValue == UU.oldValue
        } : null
      }
      setWindow(UU) {
        UU != this.win && (this.removeWindowListeners(this.win), this.win = UU, this.addWindowListeners(this.win))
      }
      addWindowListeners(UU) {
        UU.addEventListener("resize", this.Xx), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : UU.addEventListener("beforeprint", this.onPrint), UU.addEventListener("scroll", this.onScroll), UU.document.addEventListener("selectionchange", this.onSelectionChange)
      }
      removeWindowListeners(UU) {
        UU.removeEventListener("scroll", this.onScroll), UU.removeEventListener("resize", this.Xx), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : UU.removeEventListener("beforeprint", this.onPrint), UU.document.removeEventListener("selectionchange", this.onSelectionChange)
      }
      update(UU) {
        this.editContext && (this.editContext.update(UU), UU.startState.facet(zR) != UU.state.facet(zR) && (UU.view.contentDOM.editContext = UU.state.facet(zR) ? this.editContext.editContext : null))
      }
      destroy() {
        var UU, RU, gU;
        this.stop(), null === (UU = this.intersection) || void 0 === UU || UU.disconnect(), null === (RU = this.gapIntersection) || void 0 === RU || RU.disconnect(), null === (gU = this.resizeScroll) || void 0 === gU || gU.disconnect();
        for (let tU of this.scrollTargets) tU.removeEventListener("scroll", this.onScroll);
        this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy())
      }
    }

    function wp(UU, RU, gU) {
      for (; RU;) {
        let tU = jg.get(RU);
        if (tU && tU.parent == UU) return tU;
        let pU = RU.parentNode;
        RU = pU != UU.dom ? pU : gU > 0 ? RU.nextSibling : RU.previousSibling
      }
      return null
    }

    function np(UU, RU) {
      let gU = RU.startContainer,
        tU = RU.startOffset,
        pU = RU.endContainer,
        EU = RU.endOffset,
        PU = UU.docView.domAtPos(UU.state.selection.main.anchor, 1);
      return FU(PU.node, PU.offset, pU, EU) && ([gU, tU, pU, EU] = [pU, EU, gU, tU]), {
        anchorNode: gU,
        anchorOffset: tU,
        focusNode: pU,
        focusOffset: EU
      }
    }
    class bp {
      constructor(UU) {
        this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = Object.create(null), this.composing = null, this.resetRange(UU.state);
        let RU = this.editContext = new window.EditContext({
          text: UU.state.doc.sliceString(this.from, this.to),
          selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, UU.state.selection.main.anchor))),
          selectionEnd: this.toContextPos(UU.state.selection.main.head)
        });
        this.handlers.textupdate = gU => {
          let pU = UU.state.selection.main,
            {
              anchor: EU,
              head: PU
            } = pU,
            TU = this.toEditorPos(gU.updateRangeStart),
            qU = this.toEditorPos(gU.updateRangeEnd);
          UU.inputState.composing >= 0 && !this.composing && (this.composing = {
            contextBase: gU.updateRangeStart,
            editorBase: TU,
            drifted: !1
          });
          let KU = qU - TU > gU.text.length;
          TU == this.from && EU < this.from ? TU = EU : qU == this.to && EU > this.to && (qU = EU);
          let cU = Pt(UU.state.sliceDoc(TU, qU), gU.text, (KU ? pU.from : pU.to) - TU, KU ? "end" : null);
          if (!cU) {
            let RU = tU.k.single(this.toEditorPos(gU.selectionStart), this.toEditorPos(gU.selectionEnd));
            return void(Tt(RU, pU) || UU.dispatch({
              selection: RU,
              userEvent: "select"
            }))
          }
          let GU = {
            from: cU.from + TU,
            to: cU.toA + TU,
            insert: tU.E.of(gU.text.slice(cU.from, cU.toB).split("\n"))
          };
          if ((JU.mac || JU.android) && GU.from == PU - 1 && /^\. ?$/.test(gU.text) && "off" == UU.contentDOM.getAttribute("autocorrect") && (GU = {
              from: TU,
              to: qU,
              insert: tU.E.of([gU.text.replace(".", " ")])
            }), this.pendingContextChange = GU, !UU.state.readOnly) {
            let RU = this.to - this.from + (GU.to - GU.from + GU.insert.length);
            Et(UU, GU, tU.k.single(this.toEditorPos(gU.selectionStart, RU), this.toEditorPos(gU.selectionEnd, RU)))
          }
          this.pendingContextChange && (this.revertPending(UU.state), this.setSelection(UU.state)), GU.from < GU.to && !GU.insert.length && UU.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(RU.text.slice(Math.max(0, gU.updateRangeStart - 1), Math.min(RU.text.length, gU.updateRangeStart + 1))) && this.handlers.compositionend(gU)
        }, this.handlers.characterboundsupdate = gU => {
          let tU = [],
            pU = null;
          for (let RU = this.toEditorPos(gU.rangeStart), EU = this.toEditorPos(gU.rangeEnd); RU < EU; RU++) {
            let gU = UU.coordsForChar(RU);
            pU = gU && new DOMRect(gU.left, gU.top, gU.right - gU.left, gU.bottom - gU.top) || pU || new DOMRect, tU.push(pU)
          }
          RU.updateCharacterBounds(gU.rangeStart, tU)
        }, this.handlers.textformatupdate = RU => {
          let gU = [];
          for (let UU of RU.getTextFormats()) {
            let RU = UU.underlineStyle,
              tU = UU.underlineThickness;
            if (!/none/i.test(RU) && !/none/i.test(tU)) {
              let pU = this.toEditorPos(UU.rangeStart),
                EU = this.toEditorPos(UU.rangeEnd);
              if (pU < EU) {
                let UU = `text-decoration: underline ${/^[a-z]/.test(RU)?RU+" ":"Dashed"==RU?"dashed ":"Squiggle"==RU?"wavy ":""}${/thin/i.test(tU)?1:2}px`;
                gU.push(BU.mark({
                  attributes: {
                    style: UU
                  }
                }).range(pU, EU))
              }
            }
          }
          UU.dispatch({
            effects: iR.of(BU.set(gU))
          })
        }, this.handlers.compositionstart = () => {
          UU.inputState.composing < 0 && (UU.inputState.composing = 0, UU.inputState.compositionFirstChange = !0)
        }, this.handlers.compositionend = () => {
          if (UU.inputState.composing = -1, UU.inputState.compositionFirstChange = null, this.composing) {
            let {
              drifted: RU
            } = this.composing;
            this.composing = null, RU && this.reset(UU.state)
          }
        };
        for (let gU in this.handlers) RU.addEventListener(gU, this.handlers[gU]);
        this.measureReq = {
          read: UU => {
            this.editContext.updateControlBounds(UU.contentDOM.getBoundingClientRect());
            let RU = SU(UU.root);
            RU && RU.rangeCount && this.editContext.updateSelectionBounds(RU.getRangeAt(0).getBoundingClientRect())
          }
        }
      }
      applyEdits(UU) {
        let RU = 0,
          gU = !1,
          tU = this.pendingContextChange;
        return UU.changes.iterChanges(((pU, EU, PU, TU, qU) => {
          if (gU) return;
          let KU = qU.length - (EU - pU);
          if (tU && EU >= tU.to) {
            if (tU.from == pU && tU.to == EU && tU.insert.eq(qU)) return tU = this.pendingContextChange = null, RU += KU, void(this.to += KU);
            tU = null, this.revertPending(UU.state)
          }
          if (pU += RU, (EU += RU) <= this.from) this.from += KU, this.to += KU;
          else if (pU < this.to) {
            if (pU < this.from || EU > this.to || this.to - this.from + qU.length > 3e4) return void(gU = !0);
            this.editContext.updateText(this.toContextPos(pU), this.toContextPos(EU), qU.toString()), this.to += KU
          }
          RU += KU
        })), tU && !gU && this.revertPending(UU.state), !gU
      }
      update(UU) {
        let RU = this.pendingContextChange,
          gU = UU.startState.selection.main;
        this.composing && (this.composing.drifted || !UU.changes.touchesRange(gU.from, gU.to) && UU.transactions.some((UU => !UU.isUserEvent("input.type") && UU.changes.touchesRange(this.from, this.to)))) ? (this.composing.drifted = !0, this.composing.editorBase = UU.changes.mapPos(this.composing.editorBase)) : this.applyEdits(UU) && this.rangeIsValid(UU.state) ? (UU.docChanged || UU.selectionSet || RU) && this.setSelection(UU.state) : (this.pendingContextChange = null, this.reset(UU.state)), (UU.geometryChanged || UU.docChanged || UU.selectionSet) && UU.view.requestMeasure(this.measureReq)
      }
      resetRange(UU) {
        let {
          head: RU
        } = UU.selection.main;
        this.from = Math.max(0, RU - 1e4), this.to = Math.min(UU.doc.length, RU + 1e4)
      }
      reset(UU) {
        this.resetRange(UU), this.editContext.updateText(0, this.editContext.text.length, UU.doc.sliceString(this.from, this.to)), this.setSelection(UU)
      }
      revertPending(UU) {
        let RU = this.pendingContextChange;
        this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(RU.from), this.toContextPos(RU.from + RU.insert.length), UU.doc.sliceString(RU.from, RU.to))
      }
      setSelection(UU) {
        let {
          main: RU
        } = UU.selection, gU = this.toContextPos(Math.max(this.from, Math.min(this.to, RU.anchor))), tU = this.toContextPos(RU.head);
        this.editContext.selectionStart == gU && this.editContext.selectionEnd == tU || this.editContext.updateSelection(gU, tU)
      }
      rangeIsValid(UU) {
        let {
          head: RU
        } = UU.selection.main;
        return !(this.from > 0 && RU - this.from < 500 || this.to < UU.doc.length && this.to - RU < 500 || this.to - this.from > 3e4)
      }
      toEditorPos(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.to - this.from;
        UU = Math.min(UU, RU);
        let gU = this.composing;
        return gU && gU.drifted ? gU.editorBase + (UU - gU.contextBase) : UU + this.from
      }
      toContextPos(UU) {
        let RU = this.composing;
        return RU && RU.drifted ? RU.contextBase + (UU - RU.editorBase) : UU - this.from
      }
      destroy() {
        for (let UU in this.handlers) this.editContext.removeEventListener(UU, this.handlers[UU])
      }
    }
    class op {
      get state() {
        return this.viewState.state
      }
      get viewport() {
        return this.viewState.viewport
      }
      get h_() {
        return this.viewState.h_
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
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var RU;
        this.plugins = [], this.pluginMap = new Map, this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), UU.parent && UU.parent.appendChild(this.dom);
        let {
          dispatch: gU
        } = UU;
        this.dispatchTransactions = UU.dispatchTransactions || gU && (UU => UU.forEach((UU => gU(UU, this)))) || (UU => this.update(UU)), this.dispatch = this.dispatch.bind(this), this._root = UU.root || function(UU) {
          for (; UU;) {
            if (UU && (9 == UU.nodeType || 11 == UU.nodeType && UU.host)) return UU;
            UU = UU.assignedSlot || UU.parentNode
          }
          return null
        }(UU.parent) || document, this.viewState = new pp(this, UU.state || tU.n.create(UU)), UU.scrollTo && UU.scrollTo.is(FR) && (this.viewState.scrollTarget = UU.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(DR).map((UU => new NR(UU)));
        for (let tU of this.plugins) tU.update(this);
        this.observer = new Jp(this), this.inputState = new qt(this), this.inputState.ensureHandlers(this.plugins), this.docView = new vg(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), (null === (RU = document.fonts) || void 0 === RU ? void 0 : RU.ready) && document.fonts.ready.then((() => {
          this.viewState.mustMeasureContent = "refresh", this.requestMeasure()
        }))
      }
      dispatch() {
        for (var UU = arguments.length, RU = new Array(UU), gU = 0; gU < UU; gU++) RU[gU] = arguments[gU];
        let pU = 1 == RU.length && RU[0] instanceof tU.G ? RU : 1 == RU.length && Array.isArray(RU[0]) ? RU[0] : [this.state.update(...RU)];
        this.dispatchTransactions(pU, this)
      }
      update(UU) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        let RU, gU = !1,
          pU = !1,
          EU = this.state;
        for (let tU of UU) {
          if (tU.startState != EU) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
          EU = tU.state
        }
        if (this.destroyed) return void(this.viewState.state = EU);
        let PU = this.hasFocus,
          TU = 0,
          qU = null;
        UU.some((UU => UU.annotation(Yt))) ? (this.inputState.notifiedFocused = PU, TU = 1) : PU != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = PU, qU = Bt(EU, PU), qU || (TU = 1));
        let KU = this.observer.delayedAndroidKey,
          cU = null;
        if (KU ? (this.observer.clearDelayedAndroidKey(), cU = this.observer.readChange(), (cU && !this.state.doc.eq(EU.doc) || !this.state.selection.eq(EU.selection)) && (cU = null)) : this.observer.clear(), EU.facet(tU.n.phrases) != this.state.facet(tU.n.phrases)) return this.setState(EU);
        RU = cg.create(this, EU, UU), RU.flags |= TU;
        let GU = this.viewState.scrollTarget;
        try {
          this.updateState = 2;
          for (let RU of UU) {
            if (GU && (GU = GU.map(RU.changes)), RU.scrollIntoView) {
              let {
                main: UU
              } = RU.state.selection, {
                x: gU,
                y: pU
              } = this.state.facet(op.cursorScrollMargin);
              GU = new kR(UU.empty ? UU : tU.k.cursor(UU.head, UU.head > UU.anchor ? -1 : 1), "nearest", "nearest", pU, gU)
            }
            for (let UU of RU.effects) UU.is(FR) && (GU = UU.value.clip(this.state))
          }
          this.viewState.update(RU, GU), this.bidiCache = Yp.update(this.bidiCache, RU.changes), RU.empty || (this.updatePlugins(RU), this.inputState.update(RU)), gU = this.docView.update(RU), this.state.facet(qg) != this.styleModules && this.mountStyles(), pU = this.updateAttrs(), this.showAnnouncements(UU), this.docView.updateSelection(gU, UU.some((UU => UU.isUserEvent("select.pointer"))))
        } finally {
          this.updateState = 0
        }
        if (RU.startState.facet(jp) != RU.state.facet(jp) && (this.viewState.mustMeasureContent = !0), (gU || pU || GU || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), gU && this.docViewUpdate(), !RU.empty)
          for (let tU of this.state.facet(rR)) try {
            tU(RU)
          } catch (jU) {
            AR(this.state, jU, "update listener")
          }(qU || cU) && Promise.resolve().then((() => {
            qU && this.state == qU.startState && this.dispatch(qU), cU && !pt(this, cU) && KU.force && pR(this.contentDOM, KU.key, KU.keyCode)
          }))
      }
      setState(UU) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
        if (this.destroyed) return void(this.viewState.state = UU);
        this.updateState = 2;
        let RU = this.hasFocus;
        try {
          for (let UU of this.plugins) UU.destroy(this);
          this.viewState = new pp(this, UU), this.plugins = UU.facet(DR).map((UU => new NR(UU))), this.pluginMap.clear();
          for (let UU of this.plugins) UU.update(this);
          this.docView.destroy(), this.docView = new vg(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = []
        } finally {
          this.updateState = 0
        }
        RU && this.focus(), this.requestMeasure()
      }
      updatePlugins(UU) {
        let RU = UU.startState.facet(DR),
          gU = UU.state.facet(DR);
        if (RU != gU) {
          let tU = [];
          for (let pU of gU) {
            let gU = RU.indexOf(pU);
            if (gU < 0) tU.push(new NR(pU));
            else {
              let RU = this.plugins[gU];
              RU.mustUpdate = UU, tU.push(RU)
            }
          }
          for (let RU of this.plugins) RU.mustUpdate != UU && RU.destroy(this);
          this.plugins = tU, this.pluginMap.clear()
        } else
          for (let tU of this.plugins) tU.mustUpdate = UU;
        for (let tU = 0; tU < this.plugins.length; tU++) this.plugins[tU].update(this);
        RU != gU && this.inputState.ensureHandlers(this.plugins)
      }
      docViewUpdate() {
        for (let RU of this.plugins) {
          let gU = RU.value;
          if (gU && gU.docViewUpdate) try {
            gU.docViewUpdate(this)
          } catch (UU) {
            AR(this.state, UU, "doc view update listener")
          }
        }
      }
      measure() {
        let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.destroyed) return;
        if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) return this.measureScheduled = -1, void this.requestMeasure();
        this.measureScheduled = 0, UU && this.observer.forceFlush();
        let RU = null,
          gU = this.viewState.scrollParent,
          tU = this.viewState.getScrollOffset(),
          {
            scrollAnchorPos: pU,
            scrollAnchorHeight: EU
          } = this.viewState;
        Math.abs(tU - this.viewState.scrollOffset) > 1 && (EU = -1), this.viewState.scrollAnchorHeight = -1;
        try {
          for (let UU = 0;; UU++) {
            if (EU < 0)
              if (ER(gU || this.win)) pU = -1, EU = this.viewState.heightMap.height;
              else {
                let UU = this.viewState.scrollAnchorAt(tU);
                pU = UU.from, EU = UU.top
              } this.updateState = 1;
            let TU = this.viewState.measure();
            if (!TU && !this.measureRequests.length && null == this.viewState.scrollTarget) break;
            if (UU > 5) {
              console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
              break
            }
            let qU = [];
            4 & TU || ([this.measureRequests, qU] = [qU, this.measureRequests]);
            let KU = qU.map((UU => {
                try {
                  return UU.read(this)
                } catch (RU) {
                  return AR(this.state, RU), ap
                }
              })),
              cU = cg.create(this, this.state, []),
              GU = !1;
            cU.flags |= TU, RU ? RU.flags |= TU : RU = cU, this.updateState = 2, cU.empty || (this.updatePlugins(cU), this.inputState.update(cU), this.updateAttrs(), GU = this.docView.update(cU), GU && this.docViewUpdate());
            for (let UU = 0; UU < qU.length; UU++)
              if (KU[UU] != ap) try {
                let RU = qU[UU];
                RU.write && RU.write(KU[UU], this)
              } catch (PU) {
                AR(this.state, PU)
              }
            if (GU && this.docView.updateSelection(!0), !cU.viewportChanged && 0 == this.measureRequests.length) {
              if (this.viewState.editorHeight) {
                if (this.viewState.scrollTarget) {
                  this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, EU = -1;
                  continue
                } {
                  let UU = ((pU < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(pU).top) - EU) / this.scaleY;
                  if ((UU > 1 || UU < -1) && (gU == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                    tU += UU, gU ? gU.scrollTop += UU : this.win.scrollBy(0, UU), EU = -1;
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
        if (RU && !RU.empty)
          for (let TU of this.state.facet(rR)) TU(RU)
      }
      get themeClasses() {
        return hp + " " + (this.state.facet(Cp) ? ep : Qp) + " " + this.state.facet(jp)
      }
      updateAttrs() {
        let UU = Bp(this, lR, {
            class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
          }),
          RU = {
            spellcheck: "false",
            autocorrect: "off",
            autocapitalize: "off",
            writingsuggestions: "false",
            translate: "no",
            contenteditable: this.state.facet(zR) ? "true" : "false",
            class: "cm-content",
            style: `${JU.tabSize}: ${this.state.tabSize}`,
            role: "textbox",
            "aria-multiline": "true"
          };
        this.state.readOnly && (RU["aria-readonly"] = "true"), Bp(this, OR, RU);
        let gU = this.observer.ignore((() => {
          let gU = oU(this.contentDOM, this.contentAttrs, RU),
            tU = oU(this.dom, this.editorAttrs, UU);
          return gU || tU
        }));
        return this.editorAttrs = UU, this.contentAttrs = RU, gU
      }
      showAnnouncements(UU) {
        let RU = !0;
        for (let gU of UU)
          for (let UU of gU.effects)
            if (UU.is(op.announce)) {
              RU && (this.announceDOM.textContent = ""), RU = !1, this.announceDOM.appendChild(document.createElement("div")).textContent = UU.value
            }
      }
      mountStyles() {
        this.styleModules = this.state.facet(qg);
        let UU = this.state.facet(op.cspNonce);
        pU.d.mount(this.root, this.styleModules.concat(xp).reverse(), UU ? {
          nonce: UU
        } : void 0)
      }
      readMeasured() {
        if (2 == this.updateState) throw new Error("Reading the editor layout isn't allowed during an update");
        0 == this.updateState && this.measureScheduled > -1 && this.measure(!1)
      }
      requestMeasure(UU) {
        if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame((() => this.measure()))), UU) {
          if (this.measureRequests.indexOf(UU) > -1) return;
          if (null != UU.key)
            for (let RU = 0; RU < this.measureRequests.length; RU++)
              if (this.measureRequests[RU].key === UU.key) return void(this.measureRequests[RU] = UU);
          this.measureRequests.push(UU)
        }
      }
      plugin(UU) {
        let RU = this.pluginMap.get(UU);
        return (void 0 === RU || RU && RU.plugin != UU) && this.pluginMap.set(UU, RU = this.plugins.find((RU => RU.plugin == UU)) || null), RU && RU.update(this).value
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
      elementAtHeight(UU) {
        return this.readMeasured(), this.viewState.elementAtHeight(UU)
      }
      lineBlockAtHeight(UU) {
        return this.readMeasured(), this.viewState.lineBlockAtHeight(UU)
      }
      get viewportLineBlocks() {
        return this.viewState.viewportLines
      }
      lineBlockAt(UU) {
        return this.viewState.lineBlockAt(UU)
      }
      get contentHeight() {
        return this.viewState.contentHeight
      }
      moveByChar(UU, RU, gU) {
        return zg(this, UU, Fg(this, UU, RU, gU))
      }
      moveByGroup(UU, RU) {
        return zg(this, UU, Fg(this, UU, RU, (RU => function(UU, RU, gU) {
          let pU = UU.state.charCategorizer(RU),
            EU = pU(gU);
          return UU => {
            let RU = pU(UU);
            return EU == tU.g.Space && (EU = RU), EU == RU
          }
        }(this, UU.head, RU))))
      }
      visualLineSide(UU, RU) {
        let gU = this.bidiSpans(UU),
          pU = this.textDirectionAt(UU.from),
          EU = gU[RU ? gU.length - 1 : 0];
        return tU.k.cursor(EU.side(RU, pU) + UU.from, EU.forward(!RU, pU) ? 1 : -1)
      }
      moveToLineBoundary(UU, RU) {
        return function(UU, RU, gU, pU) {
          let EU = kg(UU, RU.head, RU.assoc || -1),
            PU = pU && EU.type == YU.Text && (UU.lineWrapping || EU.widgetLineBreaks) ? UU.coordsAtPos(RU.assoc < 0 && RU.head > EU.from ? RU.head - 1 : RU.head) : null;
          if (PU) {
            let RU = UU.dom.getBoundingClientRect(),
              pU = UU.textDirectionAt(EU.from),
              TU = UU.posAtCoords({
                x: gU == (pU == KR.LTR) ? RU.right - 1 : RU.left + 1,
                y: (PU.top + PU.bottom) / 2
              });
            if (null != TU) return tU.k.cursor(TU, gU ? -1 : 1)
          }
          return tU.k.cursor(gU ? EU.to : EU.from, gU ? -1 : 1)
        }(this, UU, RU, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2])
      }
      moveVertically(UU, RU, gU) {
        return zg(this, UU, function(UU, RU, gU, pU) {
          let EU = RU.head,
            PU = gU ? 1 : -1;
          if (EU == (gU ? UU.state.doc.length : 0)) return tU.k.cursor(EU, RU.assoc);
          let TU, qU = RU.goalColumn,
            KU = UU.contentDOM.getBoundingClientRect(),
            cU = UU.coordsAtPos(EU, RU.assoc || ((RU.empty ? gU : RU.head == RU.from) ? 1 : -1)),
            GU = UU.documentTop;
          if (cU) null == qU && (qU = cU.left - KU.left), TU = PU < 0 ? cU.top : cU.bottom;
          else {
            let RU = UU.viewState.lineBlockAt(EU);
            null == qU && (qU = Math.min(KU.right - KU.left, UU.defaultCharacterWidth * (EU - RU.from))), TU = (PU < 0 ? RU.top : RU.bottom) + GU
          }
          let jU = KU.left + qU,
            uU = UU.viewState.heightOracle.textHeight >> 1,
            CU = null !== pU && void 0 !== pU ? pU : uU;
          for (let hU = 0;; hU += uU) {
            let RU = TU + (CU + hU) * PU,
              pU = Dg(UU, {
                x: jU,
                y: RU
              }, !1, PU);
            if (gU ? RU > KU.bottom : RU < KU.top) return tU.k.cursor(pU.pos, pU.assoc);
            let EU = UU.coordsAtPos(pU.pos, pU.assoc),
              cU = EU ? (EU.top + EU.bottom) / 2 : 0;
            if (!EU || (gU ? cU > TU : cU < TU)) return tU.k.cursor(pU.pos, pU.assoc, void 0, qU)
          }
        }(this, UU, RU, gU))
      }
      domAtPos(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return this.docView.domAtPos(UU, RU)
      }
      posAtDOM(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.docView.posFromDOM(UU, RU)
      }
      posAtCoords(UU) {
        let RU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this.readMeasured();
        let gU = Dg(this, UU, RU);
        return gU && gU.pos
      }
      posAndSideAtCoords(UU) {
        let RU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return this.readMeasured(), Dg(this, UU, RU)
      }
      coordsAtPos(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.readMeasured();
        let gU = this.docView.coordsAt(UU, RU);
        if (!gU || gU.left == gU.right) return gU;
        let tU = this.state.doc.lineAt(UU),
          pU = this.bidiSpans(tU);
        return DU(gU, pU[fR.find(pU, UU - tU.from, -1, RU)].dir == KR.LTR == RU > 0)
      }
      coordsForChar(UU) {
        return this.readMeasured(), this.docView.coordsForChar(UU)
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
      textDirectionAt(UU) {
        return !this.state.facet(SR) || UU < this.viewport.from || UU > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(UU))
      }
      get lineWrapping() {
        return this.viewState.heightOracle.lineWrapping
      }
      bidiSpans(UU) {
        if (UU.length > Zp) return nR(UU.length);
        let RU, gU = this.textDirectionAt(UU.from);
        for (let pU of this.bidiCache)
          if (pU.from == UU.from && pU.dir == gU && (pU.fresh || xR(pU.isolates, RU = Eg(this, UU)))) return pU.order;
        RU || (RU = Eg(this, UU));
        let tU = wR(UU.text, gU, RU);
        return this.bidiCache.push(new Yp(UU.from, UU.to, gU, RU, !0, tU)), tU
      }
      get hasFocus() {
        var UU;
        return (this.dom.ownerDocument.hasFocus() || JU.safari && (null === (UU = this.inputState) || void 0 === UU ? void 0 : UU.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM
      }
      focus() {
        this.observer.ignore((() => {
          gR(this.contentDOM), this.docView.updateSelection()
        }))
      }
      setRoot(UU) {
        this._root != UU && (this._root = UU, this.observer.setWindow((9 == UU.nodeType ? UU : UU.ownerDocument).defaultView || window), this.mountStyles())
      }
      destroy() {
        this.root.activeElement == this.contentDOM && this.contentDOM.blur();
        for (let UU of this.plugins) UU.destroy(this);
        this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0
      }
      static scrollIntoView(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var gU, pU, EU, PU;
        return FR.of(new kR("number" == typeof UU ? tU.k.cursor(UU) : UU, null !== (gU = RU.y) && void 0 !== gU ? gU : "nearest", null !== (pU = RU.x) && void 0 !== pU ? pU : "nearest", null !== (EU = RU.yMargin) && void 0 !== EU ? EU : 5, null !== (PU = RU.xMargin) && void 0 !== PU ? PU : 5))
      }
      scrollSnapshot() {
        let {
          scrollTop: UU,
          scrollLeft: RU
        } = this.scrollDOM, gU = this.viewState.scrollAnchorAt(UU);
        return FR.of(new kR(tU.k.cursor(gU.from), "start", "start", gU.top - UU, RU, !0))
      }
      setTabFocusMode(UU) {
        null == UU ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof UU ? this.inputState.tabFocusMode = UU ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + UU)
      }
      static domEventHandlers(UU) {
        return LR.define((() => ({})), {
          eventHandlers: UU
        })
      }
      static domEventObservers(UU) {
        return LR.define((() => ({})), {
          eventObservers: UU
        })
      }
      static theme(UU, RU) {
        let gU = pU.d.newName(),
          tU = [jp.of(gU), qg.of(fp(`.${gU}`, UU))];
        return RU && RU.dark && tU.push(Cp.of(!0)), tU
      }
      static baseTheme(UU) {
        return tU.s.lowest(qg.of(fp("." + hp, UU, Wp)))
      }
      static findFromDOM(UU) {
        var RU;
        let gU = UU.querySelector(".cm-content"),
          tU = gU && jg.get(gU) || jg.get(UU);
        return (null === (RU = null === tU || void 0 === tU ? void 0 : tU.root) || void 0 === RU ? void 0 : RU.view) || null
      }
    }
    op.styleModule = qg, op.inputHandler = XR, op.clipboardInputFilter = dR, op.clipboardOutputFilter = HR, op.scrollHandler = yR, op.focusChangeEffect = vR, op.perLineTextDirection = SR, op.exceptionSink = VR, op.updateListener = rR, op.editable = zR, op.mouseSelectionStyle = BR, op.dragMovesSelection = YR, op.clickAddsSelectionRange = aR, op.Yt = Ug, op.blockWrappers = Rg, op.outerDecorations = gg, op.atomicRanges = tg, op.bidiIsolatedRanges = pg, op.cursorScrollMargin = tU.p.define({
      combine: UU => {
        let RU = 5,
          gU = 5;
        for (let tU of UU) "number" == typeof tU ? RU = gU = tU : ({
          x: RU,
          y: gU
        } = tU);
        return {
          x: RU,
          y: gU
        }
      }
    }), op.scrollMargins = Pg, op.darkTheme = Cp, op.cspNonce = tU.p.define({
      combine: UU => UU.length ? UU[0] : ""
    }), op.contentAttributes = OR, op.editorAttributes = lR, op.lineWrapping = op.contentAttributes.of({
      class: "cm-lineWrapping"
    }), op.announce = tU.A.define();
    const Zp = 4096,
      ap = {};
    class Yp {
      constructor(UU, RU, gU, tU, pU, EU) {
        this.from = UU, this.to = RU, this.dir = gU, this.isolates = tU, this.fresh = pU, this.order = EU
      }
      static update(UU, RU) {
        if (RU.empty && !UU.some((UU => UU.fresh))) return UU;
        let gU = [],
          tU = UU.length ? UU[UU.length - 1].dir : KR.LTR;
        for (let pU = Math.max(0, UU.length - 10); pU < UU.length; pU++) {
          let EU = UU[pU];
          EU.dir != tU || RU.touchesRange(EU.from, EU.to) || gU.push(new Yp(RU.mapPos(EU.from, 1), RU.mapPos(EU.to, -1), EU.dir, EU.isolates, !1, EU.order))
        }
        return gU
      }
    }

    function Bp(UU, RU, gU) {
      for (let tU = UU.state.facet(RU), pU = tU.length - 1; pU >= 0; pU--) {
        let RU = tU[pU],
          EU = "function" == typeof RU ? RU(UU) : RU;
        EU && wU(EU, gU)
      }
      return gU
    }
    const Vp = JU.mac ? "mac" : JU.windows ? "win" : JU.linux ? "linux" : "key";

    function rp(UU, RU, gU) {
      return RU.altKey && (UU = "Alt-" + UU), RU.ctrlKey && (UU = "Ctrl-" + UU), RU.metaKey && (UU = "Meta-" + UU), !1 !== gU && RU.shiftKey && (UU = "Shift-" + UU), UU
    }
    const Xp = tU.s.default(op.domEventHandlers({
        keydown: (UU, RU) => Fp(Hp(RU.state), UU, RU, "editor")
      })),
      vp = tU.p.define({
        enables: Xp
      }),
      dp = new WeakMap;

    function Hp(UU) {
      let RU = UU.facet(vp),
        gU = dp.get(RU);
      return gU || dp.set(RU, gU = function(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Vp,
          gU = Object.create(null),
          tU = Object.create(null),
          pU = (UU, RU) => {
            let gU = tU[UU];
            if (null == gU) tU[UU] = RU;
            else if (gU != RU) throw new Error("Key binding " + UU + " is used both as a regular binding and as a multi-stroke prefix")
          },
          EU = (UU, tU, EU, PU, TU) => {
            var qU, KU;
            let cU = gU[UU] || (gU[UU] = Object.create(null)),
              GU = tU.split(/ (?!$)/).map((UU => function(UU, RU) {
                const gU = UU.split(/-(?!$)/);
                let tU, pU, EU, PU, TU = gU[gU.length - 1];
                "Space" == TU && (TU = " ");
                for (let qU = 0; qU < gU.length - 1; ++qU) {
                  const UU = gU[qU];
                  if (/^(cmd|meta|m)$/i.test(UU)) PU = !0;
                  else if (/^a(lt)?$/i.test(UU)) tU = !0;
                  else if (/^(c|ctrl|control)$/i.test(UU)) pU = !0;
                  else if (/^s(hift)?$/i.test(UU)) EU = !0;
                  else {
                    if (!/^mod$/i.test(UU)) throw new Error("Unrecognized modifier name: " + UU);
                    "mac" == RU ? PU = !0 : pU = !0
                  }
                }
                return tU && (TU = "Alt-" + TU), pU && (TU = "Ctrl-" + TU), PU && (TU = "Meta-" + TU), EU && (TU = "Shift-" + TU), TU
              }(UU, RU)));
            for (let RU = 1; RU < GU.length; RU++) {
              let gU = GU.slice(0, RU).join(" ");
              pU(gU, !0), cU[gU] || (cU[gU] = {
                preventDefault: !0,
                stopPropagation: !1,
                run: [RU => {
                  let tU = sp = {
                    view: RU,
                    prefix: gU,
                    scope: UU
                  };
                  return setTimeout((() => {
                    sp == tU && (sp = null)
                  }), yp), !0
                }]
              })
            }
            let jU = GU.join(" ");
            pU(jU, !1);
            let uU = cU[jU] || (cU[jU] = {
              preventDefault: !1,
              stopPropagation: !1,
              run: (null === (KU = null === (qU = cU._any) || void 0 === qU ? void 0 : qU.run) || void 0 === KU ? void 0 : KU.slice()) || []
            });
            EU && uU.run.push(EU), PU && (uU.preventDefault = !0), TU && (uU.stopPropagation = !0)
          };
        for (let PU of UU) {
          let UU = PU.scope ? PU.scope.split(" ") : ["editor"];
          if (PU.any)
            for (let RU of UU) {
              let UU = gU[RU] || (gU[RU] = Object.create(null));
              UU._any || (UU._any = {
                preventDefault: !1,
                stopPropagation: !1,
                run: []
              });
              let {
                any: tU
              } = PU;
              for (let RU in UU) UU[RU].run.push((UU => tU(UU, kp)))
            }
          let tU = PU[RU] || PU.key;
          if (tU)
            for (let RU of UU) EU(RU, tU, PU.run, PU.preventDefault, PU.stopPropagation), PU.shift && EU(RU, "Shift-" + tU, PU.shift, PU.preventDefault, PU.stopPropagation)
        }
        return gU
      }(RU.reduce(((UU, RU) => UU.concat(RU)), []))), gU
    }

    function Sp(UU, RU, gU) {
      return Fp(Hp(UU.state), RU, UU, gU)
    }
    let sp = null;
    const yp = 4e3;
    let kp = null;

    function Fp(UU, RU, gU, pU) {
      kp = RU;
      let KU = function(UU) {
          var RU = !(TU && UU.metaKey && UU.shiftKey && !UU.ctrlKey && !UU.altKey || qU && UU.shiftKey && UU.key && 1 == UU.key.length || "Unidentified" == UU.key) && UU.key || (UU.shiftKey ? PU : EU)[UU.keyCode] || UU.key || "Unidentified";
          return "Esc" == RU && (RU = "Escape"), "Del" == RU && (RU = "Delete"), "Left" == RU && (RU = "ArrowLeft"), "Up" == RU && (RU = "ArrowUp"), "Right" == RU && (RU = "ArrowRight"), "Down" == RU && (RU = "ArrowDown"), RU
        }(RU),
        cU = (0, tU.J)(KU, 0),
        GU = (0, tU.M)(cU) == KU.length && " " != KU,
        jU = "",
        uU = !1,
        CU = !1,
        hU = !1;
      sp && sp.view == gU && sp.scope == pU && (jU = sp.prefix + " ", ut.indexOf(RU.keyCode) < 0 && (CU = !0, sp = null));
      let QU, eU, WU = new Set,
        fU = UU => {
          if (UU) {
            for (let RU of UU.run)
              if (!WU.has(RU) && (WU.add(RU), RU(gU))) return UU.stopPropagation && (hU = !0), !0;
            UU.preventDefault && (UU.stopPropagation && (hU = !0), CU = !0)
          }
          return !1
        },
        xU = UU[pU];
      return xU && (fU(xU[jU + rp(KU, RU, !GU)]) ? uU = !0 : !GU || !(RU.altKey || RU.metaKey || RU.ctrlKey) || JU.windows && RU.ctrlKey && RU.altKey || JU.mac && RU.altKey && !RU.ctrlKey && !RU.metaKey || !(QU = EU[RU.keyCode]) || QU == KU ? GU && RU.shiftKey && fU(xU[jU + rp(KU, RU, !0)]) && (uU = !0) : (fU(xU[jU + rp(QU, RU, !0)]) || RU.shiftKey && (eU = PU[RU.keyCode]) != KU && eU != QU && fU(xU[jU + rp(eU, RU, !1)])) && (uU = !0), !uU && fU(xU._any) && (uU = !0)), CU && (uU = !0), uU && hU && RU.stopPropagation(), kp = null, uU
    }
    class ip {
      constructor(UU, RU, gU, tU, pU) {
        this.className = UU, this.left = RU, this.top = gU, this.width = tU, this.height = pU
      }
      draw() {
        let UU = document.createElement("div");
        return UU.className = this.className, this.adjust(UU), UU
      }
      update(UU, RU) {
        return RU.className == this.className && (this.adjust(UU), !0)
      }
      adjust(UU) {
        UU.style.left = this.left + "px", UU.style.top = this.top + "px", null != this.width && (UU.style.width = this.width + "px"), UU.style.height = this.height + "px"
      }
      eq(UU) {
        return this.left == UU.left && this.top == UU.top && this.width == UU.width && this.height == UU.height && this.className == UU.className
      }
      static forRange(UU, RU, gU) {
        if (gU.empty) {
          let tU = UU.coordsAtPos(gU.head, gU.assoc || 1);
          if (!tU) return [];
          let pU = Ap(UU);
          return [new ip(RU, tU.left - pU.left, tU.top - pU.top, null, tU.bottom - tU.top)]
        }
        return function(UU, RU, gU) {
          if (gU.to <= UU.viewport.from || gU.from >= UU.viewport.to) return [];
          let tU = Math.max(gU.from, UU.viewport.from),
            pU = Math.min(gU.to, UU.viewport.to),
            EU = UU.textDirection == KR.LTR,
            PU = UU.contentDOM,
            TU = PU.getBoundingClientRect(),
            qU = Ap(UU),
            KU = PU.querySelector(".cm-line"),
            cU = KU && window.getComputedStyle(KU),
            GU = TU.left + (cU ? parseInt(cU.paddingLeft) + Math.min(0, parseInt(cU.textIndent)) : 0),
            jU = TU.right - (cU ? parseInt(cU.paddingRight) : 0),
            uU = kg(UU, tU, 1),
            CU = kg(UU, pU, -1),
            hU = uU.type == YU.Text ? uU : null,
            QU = CU.type == YU.Text ? CU : null;
          hU && (UU.lineWrapping || uU.widgetLineBreaks) && (hU = zp(UU, tU, 1, hU));
          QU && (UU.lineWrapping || CU.widgetLineBreaks) && (QU = zp(UU, pU, -1, QU));
          if (hU && QU && hU.from == QU.from && hU.to == QU.to) return WU(fU(gU.from, gU.to, hU));
          {
            let RU = hU ? fU(gU.from, null, hU) : xU(uU, !1),
              tU = QU ? fU(null, gU.to, QU) : xU(CU, !0),
              pU = [];
            return (hU || uU).to < (QU || CU).from - (hU && QU ? 1 : 0) || uU.widgetLineBreaks > 1 && RU.bottom + UU.defaultLineHeight / 2 < tU.top ? pU.push(eU(GU, RU.bottom, jU, tU.top)) : RU.bottom < tU.top && UU.elementAtHeight((RU.bottom + tU.top) / 2).type == YU.Text && (RU.bottom = tU.top = (RU.bottom + tU.top) / 2), WU(RU).concat(pU).concat(WU(tU))
          }

          function eU(UU, gU, tU, pU) {
            return new ip(RU, UU - qU.left, gU - qU.top, Math.max(0, tU - UU), pU - gU)
          }

          function WU(UU) {
            let {
              top: RU,
              bottom: gU,
              horizontal: tU
            } = UU, pU = [];
            for (let EU = 0; EU < tU.length; EU += 2) pU.push(eU(tU[EU], RU, tU[EU + 1], gU));
            return pU
          }

          function fU(RU, gU, tU) {
            let pU = 1e9,
              PU = -1e9,
              TU = [];

            function qU(RU, gU, qU, KU, cU) {
              let uU = UU.coordsAtPos(RU, RU == tU.to ? -2 : 2),
                CU = UU.coordsAtPos(qU, qU == tU.from ? 2 : -2);
              uU && CU && (pU = Math.min(uU.top, CU.top, pU), PU = Math.max(uU.bottom, CU.bottom, PU), cU == KR.LTR ? TU.push(EU && gU ? GU : uU.left, EU && KU ? jU : CU.right) : TU.push(!EU && KU ? GU : CU.left, !EU && gU ? jU : uU.right))
            }
            let KU = null !== RU && void 0 !== RU ? RU : tU.from,
              cU = null !== gU && void 0 !== gU ? gU : tU.to;
            for (let EU of UU.h_)
              if (EU.to > KU && EU.from < cU)
                for (let tU = Math.max(EU.from, KU), pU = Math.min(EU.to, cU);;) {
                  let EU = UU.state.doc.lineAt(tU);
                  for (let PU of UU.bidiSpans(EU)) {
                    let UU = PU.from + EU.from,
                      TU = PU.to + EU.from;
                    if (UU >= pU) break;
                    TU > tU && qU(Math.max(UU, tU), null == RU && UU <= KU, Math.min(TU, pU), null == gU && TU >= cU, PU.dir)
                  }
                  if (tU = EU.to + 1, tU >= pU) break
                }
            return 0 == TU.length && qU(KU, null == RU, cU, null == gU, UU.textDirection), {
              top: pU,
              bottom: PU,
              horizontal: TU
            }
          }

          function xU(UU, RU) {
            let gU = TU.top + (RU ? UU.top : UU.bottom);
            return {
              top: gU,
              bottom: gU,
              horizontal: []
            }
          }
        }(UU, RU, gU)
      }
    }

    function Ap(UU) {
      let RU = UU.scrollDOM.getBoundingClientRect();
      return {
        left: (UU.textDirection == KR.LTR ? RU.left : RU.right - UU.scrollDOM.clientWidth * UU.scaleX) - UU.scrollDOM.scrollLeft * UU.scaleX,
        top: RU.top - UU.scrollDOM.scrollTop * UU.scaleY
      }
    }

    function zp(UU, RU, gU, tU) {
      let pU = UU.coordsAtPos(RU, 2 * gU);
      if (!pU) return tU;
      let EU = UU.dom.getBoundingClientRect(),
        PU = (pU.top + pU.bottom) / 2,
        TU = UU.posAtCoords({
          x: EU.left + 1,
          y: PU
        }),
        qU = UU.posAtCoords({
          x: EU.right - 1,
          y: PU
        });
      return null == TU || null == qU ? tU : {
        from: Math.max(tU.from, Math.min(TU, qU)),
        to: Math.min(tU.to, Math.max(TU, qU))
      }
    }
    class Mp {
      constructor(UU, RU) {
        this.view = UU, this.layer = RU, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
          read: this.measure.bind(this),
          write: this.draw.bind(this)
        }, this.dom = UU.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), RU.above && this.dom.classList.add("cm-layer-above"), RU.class && this.dom.classList.add(RU.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(UU.state), UU.requestMeasure(this.measureReq), RU.mount && RU.mount(this.dom, UU)
      }
      update(UU) {
        UU.startState.facet(Dp) != UU.state.facet(Dp) && this.setOrder(UU.state), (this.layer.update(UU, this.dom) || UU.geometryChanged) && (this.scale(), UU.view.requestMeasure(this.measureReq))
      }
      docViewUpdate(UU) {
        !1 !== this.layer.updateOnDocViewUpdate && UU.requestMeasure(this.measureReq)
      }
      setOrder(UU) {
        let RU = 0,
          gU = UU.facet(Dp);
        for (; RU < gU.length && gU[RU] != this.layer;) RU++;
        this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - RU)
      }
      measure() {
        return this.layer.markers(this.view)
      }
      scale() {
        let {
          scaleX: UU,
          scaleY: RU
        } = this.view;
        UU == this.scaleX && RU == this.scaleY || (this.scaleX = UU, this.scaleY = RU, this.dom.style.transform = `scale(${1/UU}, ${1/RU})`)
      }
      draw(UU) {
        if (UU.length != this.drawn.length || UU.some(((UU, RU) => {
            return gU = UU, tU = this.drawn[RU], !(gU.constructor == tU.constructor && gU.eq(tU));
            var gU, tU
          }))) {
          let RU = this.dom.firstChild,
            gU = 0;
          for (let tU of UU) tU.update && RU && tU.constructor && this.drawn[gU].constructor && tU.update(RU, this.drawn[gU]) ? (RU = RU.nextSibling, gU++) : this.dom.insertBefore(tU.draw(), RU);
          for (; RU;) {
            let UU = RU.nextSibling;
            RU.remove(), RU = UU
          }
          this.drawn = UU, JU.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none")
        }
      }
      destroy() {
        this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove()
      }
    }
    const Dp = tU.p.define();

    function Lp(UU) {
      return [LR.define((RU => new Mp(RU, UU))), Dp.of(UU)]
    }
    const Np = tU.p.define({
      combine: UU => (0, tU.N)(UU, {
        cursorBlinkRate: 1200,
        drawRangeCursor: !0,
        iosSelectionHandles: !0
      }, {
        cursorBlinkRate: (UU, RU) => Math.min(UU, RU),
        drawRangeCursor: (UU, RU) => UU || RU
      })
    });

    function lp() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Np.of(UU), UE, gE, tE, sR.of(!0)]
    }

    function Op(UU) {
      return UU.startState.facet(Np) != UU.state.facet(Np)
    }
    const UE = Lp({
      above: !0,
      markers(UU) {
        let {
          state: RU
        } = UU, gU = RU.facet(Np), pU = [];
        for (let EU of RU.selection.hu) {
          let PU = EU == RU.selection.main;
          if (EU.empty || gU.drawRangeCursor && !(PU && JU.ios && gU.iosSelectionHandles)) {
            let RU = PU ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary",
              gU = EU.empty ? EU : tU.k.cursor(EU.head, EU.assoc);
            for (let tU of ip.forRange(UU, RU, gU)) pU.push(tU)
          }
        }
        return pU
      },
      update(UU, RU) {
        UU.transactions.some((UU => UU.selection)) && (RU.style.animationName = "cm-blink" == RU.style.animationName ? "cm-blink2" : "cm-blink");
        let gU = Op(UU);
        return gU && RE(UU.state, RU), UU.docChanged || UU.selectionSet || gU
      },
      mount(UU, RU) {
        RE(RU.state, UU)
      },
      class: "cm-cursorLayer"
    });

    function RE(UU, RU) {
      RU.style.animationDuration = UU.facet(Np).cursorBlinkRate + "ms"
    }
    const gE = Lp({
        above: !1,
        markers(UU) {
          let RU = [],
            {
              main: gU,
              hu: pU
            } = UU.state.selection;
          for (let tU of pU)
            if (!tU.empty)
              for (let gU of ip.forRange(UU, "cm-selectionBackground", tU)) RU.push(gU);
          if (JU.ios && !gU.empty && UU.state.facet(Np).iosSelectionHandles) {
            for (let pU of ip.forRange(UU, "cm-selectionHandle cm-selectionHandle-start", tU.k.cursor(gU.from, 1))) RU.push(pU);
            for (let pU of ip.forRange(UU, "cm-selectionHandle cm-selectionHandle-end", tU.k.cursor(gU.to, 1))) RU.push(pU)
          }
          return RU
        },
        update: (UU, RU) => UU.docChanged || UU.selectionSet || UU.viewportChanged || Op(UU),
        class: "cm-selectionLayer"
      }),
      tE = tU.s.highest(op.theme({
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
      pE = tU.A.define({
        map: (UU, RU) => null == UU ? null : RU.mapPos(UU)
      }),
      EE = tU.C.define({
        create: () => null,
        update: (UU, RU) => (null != UU && (UU = RU.changes.mapPos(UU)), RU.effects.reduce(((UU, RU) => RU.is(pE) ? RU.value : UU), UU))
      }),
      PE = LR.fromClass(class {
        constructor(UU) {
          this.view = UU, this.cursor = null, this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawCursor.bind(this)
          }
        }
        update(UU) {
          var RU;
          let gU = UU.state.field(EE);
          null == gU ? null != this.cursor && (null === (RU = this.cursor) || void 0 === RU || RU.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (UU.startState.field(EE) != gU || UU.docChanged || UU.geometryChanged) && this.view.requestMeasure(this.measureReq))
        }
        readPos() {
          let {
            view: UU
          } = this, RU = UU.state.field(EE), gU = null != RU && UU.coordsAtPos(RU);
          if (!gU) return null;
          let tU = UU.scrollDOM.getBoundingClientRect();
          return {
            left: gU.left - tU.left + UU.scrollDOM.scrollLeft * UU.scaleX,
            top: gU.top - tU.top + UU.scrollDOM.scrollTop * UU.scaleY,
            height: gU.bottom - gU.top
          }
        }
        drawCursor(UU) {
          if (this.cursor) {
            let {
              scaleX: RU,
              scaleY: gU
            } = this.view;
            UU ? (this.cursor.style.left = UU.left / RU + "px", this.cursor.style.top = UU.top / gU + "px", this.cursor.style.height = UU.height / gU + "px") : this.cursor.style.left = "-100000px"
          }
        }
        destroy() {
          this.cursor && this.cursor.remove()
        }
        setDropPos(UU) {
          this.view.state.field(EE) != UU && this.view.dispatch({
            effects: pE.of(UU)
          })
        }
      }, {
        eventObservers: {
          dragover(UU) {
            this.setDropPos(this.view.posAtCoords({
              x: UU.clientX,
              y: UU.clientY
            }))
          },
          dragleave(UU) {
            UU.target != this.view.contentDOM && this.view.contentDOM.contains(UU.relatedTarget) || this.setDropPos(null)
          },
          dragend() {
            this.setDropPos(null)
          },
          drop() {
            this.setDropPos(null)
          }
        }
      });

    function TE() {
      return [EE, PE]
    }

    function qE(UU, RU, gU, tU, pU) {
      RU.lastIndex = 0;
      for (let EU, PU = UU.iterRange(gU, tU), TU = gU; !PU.next().done; TU += PU.value.length)
        if (!PU.lineBreak)
          for (; EU = RU.exec(PU.value);) pU(TU + EU.index, EU)
    }
    class KE {
      constructor(UU) {
        const {
          regexp: RU,
          decoration: gU,
          decorate: tU,
          boundary: pU,
          maxLength: EU = 1e3
        } = UU;
        if (!RU.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
        if (this.regexp = RU, tU) this.addMatch = (UU, RU, gU, pU) => tU(pU, gU, gU + UU[0].length, UU, RU);
        else if ("function" == typeof gU) this.addMatch = (UU, RU, tU, pU) => {
          let EU = gU(UU, RU, tU);
          EU && pU(tU, tU + UU[0].length, EU)
        };
        else {
          if (!gU) throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
          this.addMatch = (UU, RU, tU, pU) => pU(tU, tU + UU[0].length, gU)
        }
        this.boundary = pU, this.maxLength = EU
      }
      createDeco(UU) {
        let RU = new tU.t,
          gU = RU.add.bind(RU);
        for (let {
            from: tU,
            to: pU
          }
          of
          function(UU, RU) {
            let gU = UU.h_;
            if (1 == gU.length && gU[0].from == UU.viewport.from && gU[0].to == UU.viewport.to) return gU;
            let tU = [];
            for (let {
                from: pU,
                to: EU
              }
              of gU) pU = Math.max(UU.state.doc.lineAt(pU).from, pU - RU), EU = Math.min(UU.state.doc.lineAt(EU).to, EU + RU), tU.length && tU[tU.length - 1].to >= pU ? tU[tU.length - 1].to = EU : tU.push({
              from: pU,
              to: EU
            });
            return tU
          }(UU, this.maxLength)) qE(UU.state.doc, this.regexp, tU, pU, ((RU, tU) => this.addMatch(tU, UU, RU, gU)));
        return RU.finish()
      }
      updateDeco(UU, RU) {
        let gU = 1e9,
          tU = -1;
        return UU.docChanged && UU.changes.iterChanges(((RU, pU, EU, PU) => {
          PU >= UU.view.viewport.from && EU <= UU.view.viewport.to && (gU = Math.min(EU, gU), tU = Math.max(PU, tU))
        })), UU.viewportMoved || tU - gU > 1e3 ? this.createDeco(UU.view) : tU > -1 ? this.updateRange(UU.view, RU.map(UU.changes), gU, tU) : RU
      }
      updateRange(UU, RU, gU, tU) {
        for (let pU of UU.h_) {
          let EU = Math.max(pU.from, gU),
            PU = Math.min(pU.to, tU);
          if (PU >= EU) {
            let gU = UU.state.doc.lineAt(EU),
              tU = gU.to < PU ? UU.state.doc.lineAt(PU) : gU,
              TU = Math.max(pU.from, gU.from),
              qU = Math.min(pU.to, tU.to);
            if (this.boundary) {
              for (; EU > gU.from; EU--)
                if (this.boundary.test(gU.text[EU - 1 - gU.from])) {
                  TU = EU;
                  break
                } for (; PU < tU.to; PU++)
                if (this.boundary.test(tU.text[PU - tU.from])) {
                  qU = PU;
                  break
                }
            }
            let KU, cU = [],
              GU = (UU, RU, gU) => cU.push(gU.range(UU, RU));
            if (gU == tU)
              for (this.regexp.lastIndex = TU - gU.from;
                (KU = this.regexp.exec(gU.text)) && KU.index < qU - gU.from;) this.addMatch(KU, UU, KU.index + gU.from, GU);
            else qE(UU.state.doc, this.regexp, TU, qU, ((RU, gU) => this.addMatch(gU, UU, RU, GU)));
            RU = RU.update({
              filterFrom: TU,
              filterTo: qU,
              filter: (UU, RU) => UU < TU || RU > qU,
              add: cU
            })
          }
        }
        return RU
      }
    }
    const cE = null != /x/.unicode ? "gu" : "g",
      GE = new RegExp("[\0-\b\n-\x1f\x7f-\x9f\xad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]", cE),
      jE = {
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
    let uE = null;
    const CE = tU.p.define({
      combine(UU) {
        let RU = (0, tU.N)(UU, {
          render: null,
          specialChars: GE,
          addSpecialChars: null
        });
        return (RU.replaceTabs = ! function() {
          var UU;
          if (null == uE && "undefined" != typeof document && document.body) {
            let RU = document.body.style;
            uE = null != (null !== (UU = RU.tabSize) && void 0 !== UU ? UU : RU.MozTabSize)
          }
          return uE || !1
        }()) && (RU.specialChars = new RegExp("\t|" + RU.specialChars.source, cE)), RU.addSpecialChars && (RU.specialChars = new RegExp(RU.specialChars.source + "|" + RU.addSpecialChars.source, cE)), RU
      }
    });

    function hE() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [CE.of(UU), QE || (QE = LR.fromClass(class {
        constructor(UU) {
          this.view = UU, this.Yt = BU.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(UU.state.facet(CE)), this.Yt = this.decorator.createDeco(UU)
        }
        makeDecorator(UU) {
          return new KE({
            regexp: UU.specialChars,
            decoration: (RU, gU, pU) => {
              let {
                doc: EU
              } = gU.state, PU = (0, tU.J)(RU[0], 0);
              if (9 == PU) {
                let UU = EU.lineAt(pU),
                  RU = gU.state.tabSize,
                  PU = (0, tU.R)(UU.text, RU, pU - UU.from);
                return BU.replace({
                  widget: new WE((RU - PU % RU) * this.view.defaultCharacterWidth / this.view.scaleX)
                })
              }
              return this.decorationCache[PU] || (this.decorationCache[PU] = BU.replace({
                widget: new eE(UU, PU)
              }))
            },
            boundary: UU.replaceTabs ? void 0 : /[^]/
          })
        }
        update(UU) {
          let RU = UU.state.facet(CE);
          UU.startState.facet(CE) != RU ? (this.decorator = this.makeDecorator(RU), this.Yt = this.decorator.createDeco(UU.view)) : this.Yt = this.decorator.updateDeco(UU, this.Yt)
        }
      }, {
        Yt: UU => UU.Yt
      }))]
    }
    let QE = null;
    class eE extends aU {
      constructor(UU, RU) {
        super(), this.options = UU, this.code = RU
      }
      eq(UU) {
        return UU.code == this.code
      }
      toDOM(UU) {
        let RU = function(UU) {
            return UU >= 32 ? "\u2022" : 10 == UU ? "\u2424" : String.fromCharCode(9216 + UU)
          }(this.code),
          gU = UU.state.phrase("Control character") + " " + (jE[this.code] || "0x" + this.code.toString(16)),
          tU = this.options.render && this.options.render(this.code, gU, RU);
        if (tU) return tU;
        let pU = document.createElement("span");
        return pU.textContent = RU, pU.title = gU, pU.setAttribute("aria-label", gU), pU.className = "cm-specialChar", pU
      }
      ignoreEvent() {
        return !1
      }
    }
    class WE extends aU {
      constructor(UU) {
        super(), this.width = UU
      }
      eq(UU) {
        return UU.width == this.width
      }
      toDOM() {
        let UU = document.createElement("span");
        return UU.textContent = "\t", UU.className = "cm-tab", UU.style.width = this.width + "px", UU
      }
      ignoreEvent() {
        return !1
      }
    }

    function fE() {
      return mE
    }
    const xE = BU.line({
        class: "cm-activeLine"
      }),
      mE = LR.fromClass(class {
        constructor(UU) {
          this.Yt = this.getDeco(UU)
        }
        update(UU) {
          (UU.docChanged || UU.selectionSet) && (this.Yt = this.getDeco(UU.view))
        }
        getDeco(UU) {
          let RU = -1,
            gU = [];
          for (let tU of UU.state.selection.hu) {
            let pU = UU.lineBlockAt(tU.head);
            pU.from > RU && (gU.push(xE.range(pU.from)), RU = pU.from)
          }
          return BU.set(gU)
        }
      }, {
        Yt: UU => UU.Yt
      });
    class IE extends aU {
      constructor(UU) {
        super(), this.content = UU
      }
      toDOM(UU) {
        let RU = document.createElement("span");
        return RU.className = "cm-placeholder", RU.style.pointerEvents = "none", RU.appendChild("string" == typeof this.content ? document.createTextNode(this.content) : "function" == typeof this.content ? this.content(UU) : this.content.cloneNode(!0)), RU.setAttribute("aria-hidden", "true"), RU
      }
      coordsAt(UU) {
        let RU = UU.firstChild ? kU(UU.firstChild) : [];
        if (!RU.length) return null;
        let gU = window.getComputedStyle(UU.parentNode),
          tU = DU(RU[0], "rtl" != gU.direction),
          pU = parseInt(gU.lineHeight);
        return tU.bottom - tU.top > 1.5 * pU ? {
          left: tU.left,
          right: tU.right,
          top: tU.top,
          bottom: tU.top + pU
        } : tU
      }
      ignoreEvent() {
        return !1
      }
    }

    function JE(UU) {
      let RU = LR.fromClass(class {
        constructor(RU) {
          this.view = RU, this.placeholder = UU ? BU.set([BU.widget({
            widget: new IE(UU),
            side: 1
          }).range(0)]) : BU.none
        }
        get Yt() {
          return this.view.state.doc.length ? BU.none : this.placeholder
        }
      }, {
        Yt: UU => UU.Yt
      });
      return "string" == typeof UU ? [RU, op.contentAttributes.of({
        "aria-placeholder": UU
      })] : RU
    }
    const wE = 2e3;

    function nE(UU, RU) {
      let gU = UU.posAtCoords({
          x: RU.clientX,
          y: RU.clientY
        }, !1),
        pU = UU.state.doc.lineAt(gU),
        EU = gU - pU.from,
        PU = EU > wE ? -1 : EU == pU.length ? function(UU, RU) {
          let gU = UU.coordsAtPos(UU.viewport.from);
          return gU ? Math.round(Math.abs((gU.left - RU) / UU.defaultCharacterWidth)) : -1
        }(UU, RU.clientX) : (0, tU.R)(pU.text, UU.state.tabSize, gU - pU.from);
      return {
        line: pU.number,
        col: PU,
        off: EU
      }
    }

    function bE(UU, RU) {
      let gU = nE(UU, RU),
        pU = UU.state.selection;
      return gU ? {
        update(UU) {
          if (UU.docChanged) {
            let RU = UU.changes.mapPos(UU.startState.doc.line(gU.line).from),
              tU = UU.state.doc.lineAt(RU);
            gU = {
              line: tU.number,
              col: gU.col,
              off: Math.min(gU.off, tU.length)
            }, pU = pU.map(UU.changes)
          }
        },
        get(RU, EU, PU) {
          let TU = nE(UU, RU);
          if (!TU) return pU;
          let qU = function(UU, RU, gU) {
            let pU = Math.min(RU.line, gU.line),
              EU = Math.max(RU.line, gU.line),
              PU = [];
            if (RU.off > wE || gU.off > wE || RU.col < 0 || gU.col < 0) {
              let TU = Math.min(RU.off, gU.off),
                qU = Math.max(RU.off, gU.off);
              for (let RU = pU; RU <= EU; RU++) {
                let gU = UU.doc.line(RU);
                gU.length <= qU && PU.push(tU.k.range(gU.from + TU, gU.to + qU))
              }
            } else {
              let TU = Math.min(RU.col, gU.col),
                qU = Math.max(RU.col, gU.col);
              for (let RU = pU; RU <= EU; RU++) {
                let gU = UU.doc.line(RU),
                  pU = (0, tU.Z)(gU.text, TU, UU.tabSize, !0);
                if (pU < 0) PU.push(tU.k.cursor(gU.to));
                else {
                  let RU = (0, tU.Z)(gU.text, qU, UU.tabSize);
                  PU.push(tU.k.range(gU.from + pU, gU.from + RU))
                }
              }
            }
            return PU
          }(UU.state, gU, TU);
          return qU.length ? PU ? tU.k.create(qU.concat(pU.hu)) : tU.k.create(qU) : pU
        }
      } : null
    }

    function oE(UU) {
      let RU = (null === UU || void 0 === UU ? void 0 : UU.eventFilter) || (UU => UU.altKey && 0 == UU.button);
      return op.mouseSelectionStyle.of(((UU, gU) => RU(gU) ? bE(UU, gU) : null))
    }
    const ZE = {
        Alt: [18, UU => !!UU.altKey],
        Control: [17, UU => !!UU.ctrlKey],
        Shift: [16, UU => !!UU.shiftKey],
        Meta: [91, UU => !!UU.metaKey]
      },
      aE = {
        style: "cursor: crosshair"
      };

    function YE() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [RU, gU] = ZE[UU.key || "Alt"],
        tU = LR.fromClass(class {
          constructor(UU) {
            this.view = UU, this.isDown = !1
          }
          set(UU) {
            this.isDown != UU && (this.isDown = UU, this.view.update([]))
          }
        }, {
          eventObservers: {
            keydown(UU) {
              this.set(UU.keyCode == RU || gU(UU))
            },
            keyup(UU) {
              UU.keyCode != RU && gU(UU) || this.set(!1)
            },
            mousemove(UU) {
              this.set(gU(UU))
            }
          }
        });
      return [tU, op.contentAttributes.of((UU => {
        var RU;
        return (null === (RU = UU.plugin(tU)) || void 0 === RU ? void 0 : RU.isDown) ? aE : null
      }))]
    }
    const BE = "-10000px";
    class VE {
      constructor(UU, RU, gU, tU) {
        this.facet = RU, this.createTooltipView = gU, this.removeTooltipView = tU, this.input = UU.state.facet(RU), this.tooltips = this.input.filter((UU => UU));
        let pU = null;
        this.tooltipViews = this.tooltips.map((UU => pU = gU(UU, pU)))
      }
      update(UU, RU) {
        var gU;
        let tU = UU.state.facet(this.facet),
          pU = tU.filter((UU => UU));
        if (tU === this.input) {
          for (let RU of this.tooltipViews) RU.update && RU.update(UU);
          return !1
        }
        let EU = [],
          PU = RU ? [] : null;
        for (let TU = 0; TU < pU.length; TU++) {
          let gU = pU[TU],
            tU = -1;
          if (gU) {
            for (let UU = 0; UU < this.tooltips.length; UU++) {
              let RU = this.tooltips[UU];
              RU && RU.create == gU.create && (tU = UU)
            }
            if (tU < 0) EU[TU] = this.createTooltipView(gU, TU ? EU[TU - 1] : null), PU && (PU[TU] = !!gU.above);
            else {
              let gU = EU[TU] = this.tooltipViews[tU];
              PU && (PU[TU] = RU[tU]), gU.update && gU.update(UU)
            }
          }
        }
        for (let TU of this.tooltipViews) EU.indexOf(TU) < 0 && (this.removeTooltipView(TU), null === (gU = TU.destroy) || void 0 === gU || gU.call(TU));
        return RU && (PU.forEach(((UU, gU) => RU[gU] = UU)), RU.length = PU.length), this.input = tU, this.tooltips = pU, this.tooltipViews = EU, !0
      }
    }

    function rE(UU) {
      let RU = UU.dom.ownerDocument.documentElement;
      return {
        top: 0,
        left: 0,
        bottom: RU.clientHeight,
        right: RU.clientWidth
      }
    }
    const XE = tU.p.define({
        combine: UU => {
          var RU, gU, tU;
          return {
            position: JU.ios ? "absolute" : (null === (RU = UU.find((UU => UU.position))) || void 0 === RU ? void 0 : RU.position) || "fixed",
            parent: (null === (gU = UU.find((UU => UU.parent))) || void 0 === gU ? void 0 : gU.parent) || null,
            tooltipSpace: (null === (tU = UU.find((UU => UU.tooltipSpace))) || void 0 === tU ? void 0 : tU.tooltipSpace) || rE
          }
        }
      }),
      vE = new WeakMap,
      dE = LR.fromClass(class {
        constructor(UU) {
          this.view = UU, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
          let RU = UU.state.facet(XE);
          this.position = RU.position, this.parent = RU.parent, this.classes = UU.themeClasses, this.createContainer(), this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this
          }, this.resizeObserver = "function" == typeof ResizeObserver ? new ResizeObserver((() => this.measureSoon())) : null, this.manager = new VE(UU, yE, ((UU, RU) => this.createTooltip(UU, RU)), (UU => {
            this.resizeObserver && this.resizeObserver.unobserve(UU.dom), UU.dom.remove()
          })), this.above = this.manager.tooltips.map((UU => !!UU.above)), this.intersectionObserver = "function" == typeof IntersectionObserver ? new IntersectionObserver((UU => {
            Date.now() > this.lastTransaction - 50 && UU.length > 0 && UU[UU.length - 1].intersectionRatio < 1 && this.measureSoon()
          }), {
            threshold: [1]
          }) : null, this.observeIntersection(), UU.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure()
        }
        createContainer() {
          this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom
        }
        observeIntersection() {
          if (this.intersectionObserver) {
            this.intersectionObserver.disconnect();
            for (let UU of this.manager.tooltipViews) this.intersectionObserver.observe(UU.dom)
          }
        }
        measureSoon() {
          this.measureTimeout < 0 && (this.measureTimeout = setTimeout((() => {
            this.measureTimeout = -1, this.maybeMeasure()
          }), 50))
        }
        update(UU) {
          UU.transactions.length && (this.lastTransaction = Date.now());
          let RU = this.manager.update(UU, this.above);
          RU && this.observeIntersection();
          let gU = RU || UU.geometryChanged,
            tU = UU.state.facet(XE);
          if (tU.position != this.position && !this.madeAbsolute) {
            this.position = tU.position;
            for (let UU of this.manager.tooltipViews) UU.dom.style.position = this.position;
            gU = !0
          }
          if (tU.parent != this.parent) {
            this.parent && this.container.remove(), this.parent = tU.parent, this.createContainer();
            for (let UU of this.manager.tooltipViews) this.container.appendChild(UU.dom);
            gU = !0
          } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
          gU && this.maybeMeasure()
        }
        createTooltip(UU, RU) {
          let gU = UU.create(this.view),
            tU = RU ? RU.dom : null;
          if (gU.dom.classList.add("cm-tooltip"), UU.arrow && !gU.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
            let UU = document.createElement("div");
            UU.className = "cm-tooltip-arrow", gU.dom.appendChild(UU)
          }
          return gU.dom.style.position = this.position, gU.dom.style.top = BE, gU.dom.style.left = "0px", this.container.insertBefore(gU.dom, tU), gU.mount && gU.mount(this.view), this.resizeObserver && this.resizeObserver.observe(gU.dom), gU
        }
        destroy() {
          var UU, RU, gU;
          this.view.win.removeEventListener("resize", this.measureSoon);
          for (let tU of this.manager.tooltipViews) tU.dom.remove(), null === (UU = tU.destroy) || void 0 === UU || UU.call(tU);
          this.parent && this.container.remove(), null === (RU = this.resizeObserver) || void 0 === RU || RU.disconnect(), null === (gU = this.intersectionObserver) || void 0 === gU || gU.disconnect(), clearTimeout(this.measureTimeout)
        }
        readMeasure() {
          let UU = 1,
            RU = 1,
            gU = !1;
          if ("fixed" == this.position && this.manager.tooltipViews.length) {
            let {
              dom: UU
            } = this.manager.tooltipViews[0];
            if (JU.safari) {
              let RU = UU.getBoundingClientRect();
              gU = Math.abs(RU.top + 1e4) > 1 || Math.abs(RU.left) > 1
            } else gU = !!UU.offsetParent && UU.offsetParent != this.container.ownerDocument.body
          }
          if (gU || "absolute" == this.position)
            if (this.parent) {
              let gU = this.parent.getBoundingClientRect();
              gU.width && gU.height && (UU = gU.width / this.parent.offsetWidth, RU = gU.height / this.parent.offsetHeight)
            } else({
              scaleX: UU,
              scaleY: RU
            } = this.view.viewState);
          let tU = this.view.scrollDOM.getBoundingClientRect(),
            pU = Tg(this.view);
          return {
            visible: {
              left: tU.left + pU.left,
              top: tU.top + pU.top,
              right: tU.right - pU.right,
              bottom: tU.bottom - pU.bottom
            },
            parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
            pos: this.manager.tooltips.map(((UU, RU) => {
              let gU = this.manager.tooltipViews[RU];
              return gU.getCoords ? gU.getCoords(UU.pos) : this.view.coordsAtPos(UU.pos)
            })),
            size: this.manager.tooltipViews.map((UU => {
              let {
                dom: RU
              } = UU;
              return RU.getBoundingClientRect()
            })),
            space: this.view.state.facet(XE).tooltipSpace(this.view),
            scaleX: UU,
            scaleY: RU,
            makeAbsolute: gU
          }
        }
        writeMeasure(UU) {
          var RU;
          if (UU.makeAbsolute) {
            this.madeAbsolute = !0, this.position = "absolute";
            for (let UU of this.manager.tooltipViews) UU.dom.style.position = "absolute"
          }
          let {
            visible: gU,
            space: tU,
            scaleX: pU,
            scaleY: EU
          } = UU, PU = [];
          for (let TU = 0; TU < this.manager.tooltips.length; TU++) {
            let qU = this.manager.tooltips[TU],
              KU = this.manager.tooltipViews[TU],
              {
                dom: cU
              } = KU,
              GU = UU.pos[TU],
              jU = UU.size[TU];
            if (!GU || !1 !== qU.clip && (GU.bottom <= Math.max(gU.top, tU.top) || GU.top >= Math.min(gU.bottom, tU.bottom) || GU.right < Math.max(gU.left, tU.left) - .1 || GU.left > Math.min(gU.right, tU.right) + .1)) {
              cU.style.top = BE;
              continue
            }
            let uU = qU.arrow ? KU.dom.querySelector(".cm-tooltip-arrow") : null,
              CU = uU ? 7 : 0,
              hU = jU.right - jU.left,
              QU = null !== (RU = vE.get(KU)) && void 0 !== RU ? RU : jU.bottom - jU.top,
              eU = KU.offset || sE,
              WU = this.view.textDirection == KR.LTR,
              fU = jU.width > tU.right - tU.left ? WU ? tU.left : tU.right - jU.width : WU ? Math.max(tU.left, Math.min(GU.left - (uU ? 14 : 0) + eU.x, tU.right - hU)) : Math.min(Math.max(tU.left, GU.left - hU + (uU ? 14 : 0) - eU.x), tU.right - hU),
              xU = this.above[TU];
            !qU.strictSide && (xU ? GU.top - QU - CU - eU.y < tU.top : GU.bottom + QU + CU + eU.y > tU.bottom) && xU == tU.bottom - GU.bottom > GU.top - tU.top && (xU = this.above[TU] = !xU);
            let mU = (xU ? GU.top - tU.top : tU.bottom - GU.bottom) - CU;
            if (mU < QU && !1 !== KU.resize) {
              if (mU < this.view.defaultLineHeight) {
                cU.style.top = BE;
                continue
              }
              vE.set(KU, QU), cU.style.height = (QU = mU) / EU + "px"
            } else cU.style.height && (cU.style.height = "");
            let IU = xU ? GU.top - QU - CU - eU.y : GU.bottom + CU + eU.y,
              JU = fU + hU;
            if (!0 !== KU.overlap)
              for (let UU of PU) UU.left < JU && UU.right > fU && UU.top < IU + QU && UU.bottom > IU && (IU = xU ? UU.top - QU - 2 - CU : UU.bottom + CU + 2);
            if ("absolute" == this.position ? (cU.style.top = (IU - UU.parent.top) / EU + "px", HE(cU, (fU - UU.parent.left) / pU)) : (cU.style.top = IU / EU + "px", HE(cU, fU / pU)), uU) {
              let UU = GU.left + (WU ? eU.x : -eU.x) - (fU + 14 - 7);
              uU.style.left = UU / pU + "px"
            }!0 !== KU.overlap && PU.push({
              left: fU,
              top: IU,
              right: JU,
              bottom: IU + QU
            }), cU.classList.toggle("cm-tooltip-above", xU), cU.classList.toggle("cm-tooltip-below", !xU), KU.positioned && KU.positioned(UU.space)
          }
        }
        maybeMeasure() {
          if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
            for (let UU of this.manager.tooltipViews) UU.dom.style.top = BE
        }
      }, {
        eventObservers: {
          scroll() {
            this.maybeMeasure()
          }
        }
      });

    function HE(UU, RU) {
      let gU = parseInt(UU.style.left, 10);
      (isNaN(gU) || Math.abs(RU - gU) > 1) && (UU.style.left = RU + "px")
    }
    const SE = op.baseTheme({
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
      sE = {
        x: 0,
        y: 0
      },
      yE = tU.p.define({
        enables: [dE, SE]
      }),
      kE = tU.p.define({
        combine: UU => UU.reduce(((UU, RU) => UU.concat(RU)), [])
      });
    class FE {
      static create(UU) {
        return new FE(UU)
      }
      constructor(UU) {
        this.view = UU, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new VE(UU, kE, ((UU, RU) => this.createHostedView(UU, RU)), (UU => UU.dom.remove()))
      }
      createHostedView(UU, RU) {
        let gU = UU.create(this.view);
        return gU.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(gU.dom, RU ? RU.dom.nextSibling : this.dom.firstChild), this.mounted && gU.mount && gU.mount(this.view), gU
      }
      mount(UU) {
        for (let RU of this.manager.tooltipViews) RU.mount && RU.mount(UU);
        this.mounted = !0
      }
      positioned(UU) {
        for (let RU of this.manager.tooltipViews) RU.positioned && RU.positioned(UU)
      }
      update(UU) {
        this.manager.update(UU)
      }
      destroy() {
        var UU;
        for (let RU of this.manager.tooltipViews) null === (UU = RU.destroy) || void 0 === UU || UU.call(RU)
      }
      passProp(UU) {
        let RU;
        for (let gU of this.manager.tooltipViews) {
          let tU = gU[UU];
          if (void 0 !== tU)
            if (void 0 === RU) RU = tU;
            else if (RU !== tU) return
        }
        return RU
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
    const iE = yE.compute([kE], (UU => {
      let RU = UU.facet(kE);
      return 0 === RU.length ? null : {
        pos: Math.min(...RU.map((UU => UU.pos))),
        end: Math.max(...RU.map((UU => {
          var RU;
          return null !== (RU = UU.end) && void 0 !== RU ? RU : UU.pos
        }))),
        create: FE.create,
        above: RU[0].above,
        arrow: RU.some((UU => UU.arrow))
      }
    }));
    class AE {
      constructor(UU, RU, gU, tU, pU) {
        this.view = UU, this.source = RU, this.field = gU, this.setHover = tU, this.hoverTime = pU, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
          x: 0,
          y: 0,
          target: UU.dom,
          time: 0
        }, this.checkHover = this.checkHover.bind(this), UU.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), UU.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this))
      }
      update() {
        this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout((() => this.startHover()), 20))
      }
      get active() {
        return this.view.state.field(this.field)
      }
      checkHover() {
        if (this.hoverTimeout = -1, this.active.length) return;
        let UU = Date.now() - this.lastMove.time;
        UU < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - UU) : this.startHover()
      }
      startHover() {
        clearTimeout(this.restartTimeout);
        let {
          view: UU,
          lastMove: RU
        } = this, gU = UU.docView.tile.nearest(RU.target);
        if (!gU) return;
        let tU, pU = 1;
        if (gU.isWidget()) tU = gU.posAtStart;
        else {
          if (tU = UU.posAtCoords(RU), null == tU) return;
          let gU = UU.coordsAtPos(tU);
          if (!gU || RU.y < gU.top || RU.y > gU.bottom || RU.x < gU.left - UU.defaultCharacterWidth || RU.x > gU.right + UU.defaultCharacterWidth) return;
          let EU = UU.bidiSpans(UU.state.doc.lineAt(tU)).find((UU => UU.from <= tU && UU.to >= tU)),
            PU = EU && EU.dir == KR.RTL ? -1 : 1;
          pU = RU.x < gU.left ? -PU : PU
        }
        let EU = this.source(UU, tU, pU);
        if (null === EU || void 0 === EU ? void 0 : EU.then) {
          let RU = this.pending = {
            pos: tU
          };
          EU.then((gU => {
            this.pending == RU && (this.pending = null, !gU || Array.isArray(gU) && !gU.length || UU.dispatch({
              effects: this.setHover.of(Array.isArray(gU) ? gU : [gU])
            }))
          }), (RU => AR(UU.state, RU, "hover tooltip")))
        } else !EU || Array.isArray(EU) && !EU.length || UU.dispatch({
          effects: this.setHover.of(Array.isArray(EU) ? EU : [EU])
        })
      }
      get tooltip() {
        let UU = this.view.plugin(dE),
          RU = UU ? UU.manager.tooltips.findIndex((UU => UU.create == FE.create)) : -1;
        return RU > -1 ? UU.manager.tooltipViews[RU] : null
      }
      mousemove(UU) {
        var RU, gU;
        this.lastMove = {
          x: UU.clientX,
          y: UU.clientY,
          target: UU.target,
          time: Date.now()
        }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
        let {
          active: tU,
          tooltip: pU
        } = this;
        if (tU.length && pU && ! function(UU, RU) {
            let gU, {
              left: tU,
              right: pU,
              top: EU,
              bottom: PU
            } = UU.getBoundingClientRect();
            if (gU = UU.querySelector(".cm-tooltip-arrow")) {
              let UU = gU.getBoundingClientRect();
              EU = Math.min(UU.top, EU), PU = Math.max(UU.bottom, PU)
            }
            return RU.clientX >= tU - zE && RU.clientX <= pU + zE && RU.clientY >= EU - zE && RU.clientY <= PU + zE
          }(pU.dom, UU) || this.pending) {
          let {
            pos: pU
          } = tU[0] || this.pending, EU = null !== (gU = null === (RU = tU[0]) || void 0 === RU ? void 0 : RU.end) && void 0 !== gU ? gU : pU;
          (pU == EU ? this.view.posAtCoords(this.lastMove) == pU : function(UU, RU, gU, tU, pU) {
            let EU = UU.scrollDOM.getBoundingClientRect(),
              PU = UU.documentTop + UU.documentPadding.top + UU.contentHeight;
            if (EU.left > tU || EU.right < tU || EU.top > pU || Math.min(EU.bottom, PU) < pU) return !1;
            let TU = UU.posAtCoords({
              x: tU,
              y: pU
            }, !1);
            return TU >= RU && TU <= gU
          }(this.view, pU, EU, UU.clientX, UU.clientY)) || (this.view.dispatch({
            effects: this.setHover.of([])
          }), this.pending = null)
        }
      }
      mouseleave(UU) {
        clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
        let {
          active: RU
        } = this;
        if (RU.length) {
          let {
            tooltip: RU
          } = this;
          RU && RU.dom.contains(UU.relatedTarget) ? this.watchTooltipLeave(RU.dom) : this.view.dispatch({
            effects: this.setHover.of([])
          })
        }
      }
      watchTooltipLeave(UU) {
        let RU = gU => {
          UU.removeEventListener("mouseleave", RU), this.active.length && !this.view.dom.contains(gU.relatedTarget) && this.view.dispatch({
            effects: this.setHover.of([])
          })
        };
        UU.addEventListener("mouseleave", RU)
      }
      destroy() {
        clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove)
      }
    }
    const zE = 4;

    function ME(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        gU = tU.A.define(),
        pU = tU.C.define({
          create: () => [],
          update(UU, pU) {
            if (UU.length && (RU.hideOnChange && (pU.docChanged || pU.selection) ? UU = [] : RU.hideOn && (UU = UU.filter((UU => !RU.hideOn(pU, UU)))), pU.docChanged)) {
              let RU = [];
              for (let gU of UU) {
                let UU = pU.changes.mapPos(gU.pos, -1, tU.q.TrackDel);
                if (null != UU) {
                  let tU = Object.assign(Object.create(null), gU);
                  tU.pos = UU, null != tU.end && (tU.end = pU.changes.mapPos(tU.end)), RU.push(tU)
                }
              }
              UU = RU
            }
            for (let RU of pU.effects) RU.is(gU) && (UU = RU.value), RU.is(LE) && (UU = []);
            return UU
          },
          provide: UU => kE.from(UU)
        });
      return {
        active: pU,
        extension: [pU, LR.define((tU => new AE(tU, UU, pU, gU, RU.hoverTime || 300))), iE]
      }
    }

    function DE(UU, RU) {
      let gU = UU.plugin(dE);
      if (!gU) return null;
      let tU = gU.manager.tooltips.indexOf(RU);
      return tU < 0 ? null : gU.manager.tooltipViews[tU]
    }
    const LE = tU.A.define();
    const NE = tU.p.define({
      combine(UU) {
        let RU, gU;
        for (let tU of UU) RU = RU || tU.topContainer, gU = gU || tU.bottomContainer;
        return {
          topContainer: RU,
          bottomContainer: gU
        }
      }
    });

    function lE(UU, RU) {
      let gU = UU.plugin(OE),
        tU = gU ? gU.specs.indexOf(RU) : -1;
      return tU > -1 ? gU.panels[tU] : null
    }
    const OE = LR.fromClass(class {
      constructor(UU) {
        this.input = UU.state.facet(gP), this.specs = this.input.filter((UU => UU)), this.panels = this.specs.map((RU => RU(UU)));
        let RU = UU.state.facet(NE);
        this.top = new UP(UU, !0, RU.topContainer), this.bottom = new UP(UU, !1, RU.bottomContainer), this.top.sync(this.panels.filter((UU => UU.top))), this.bottom.sync(this.panels.filter((UU => !UU.top)));
        for (let gU of this.panels) gU.dom.classList.add("cm-panel"), gU.mount && gU.mount()
      }
      update(UU) {
        let RU = UU.state.facet(NE);
        this.top.container != RU.topContainer && (this.top.sync([]), this.top = new UP(UU.view, !0, RU.topContainer)), this.bottom.container != RU.bottomContainer && (this.bottom.sync([]), this.bottom = new UP(UU.view, !1, RU.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
        let gU = UU.state.facet(gP);
        if (gU != this.input) {
          let RU = gU.filter((UU => UU)),
            tU = [],
            pU = [],
            EU = [],
            PU = [];
          for (let gU of RU) {
            let RU, TU = this.specs.indexOf(gU);
            TU < 0 ? (RU = gU(UU.view), PU.push(RU)) : (RU = this.panels[TU], RU.update && RU.update(UU)), tU.push(RU), (RU.top ? pU : EU).push(RU)
          }
          this.specs = RU, this.panels = tU, this.top.sync(pU), this.bottom.sync(EU);
          for (let UU of PU) UU.dom.classList.add("cm-panel"), UU.mount && UU.mount()
        } else
          for (let tU of this.panels) tU.update && tU.update(UU)
      }
      destroy() {
        this.top.sync([]), this.bottom.sync([])
      }
    }, {
      provide: UU => op.scrollMargins.of((RU => {
        let gU = RU.plugin(UU);
        return gU && {
          top: gU.top.scrollMargin(),
          bottom: gU.bottom.scrollMargin()
        }
      }))
    });
    class UP {
      constructor(UU, RU, gU) {
        this.view = UU, this.top = RU, this.container = gU, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses()
      }
      sync(UU) {
        for (let RU of this.panels) RU.destroy && UU.indexOf(RU) < 0 && RU.destroy();
        this.panels = UU, this.syncDOM()
      }
      syncDOM() {
        if (0 == this.panels.length) return void(this.dom && (this.dom.remove(), this.dom = void 0));
        if (!this.dom) {
          this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
          let UU = this.container || this.view.dom;
          UU.insertBefore(this.dom, this.top ? UU.firstChild : null)
        }
        let UU = this.dom.firstChild;
        for (let RU of this.panels)
          if (RU.dom.parentNode == this.dom) {
            for (; UU != RU.dom;) UU = RP(UU);
            UU = UU.nextSibling
          } else this.dom.insertBefore(RU.dom, UU);
        for (; UU;) UU = RP(UU)
      }
      scrollMargin() {
        return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top)
      }
      syncClasses() {
        if (this.container && this.classes != this.view.themeClasses) {
          for (let UU of this.classes.split(" ")) UU && this.container.classList.remove(UU);
          for (let UU of (this.classes = this.view.themeClasses).split(" ")) UU && this.container.classList.add(UU)
        }
      }
    }

    function RP(UU) {
      let RU = UU.nextSibling;
      return UU.remove(), RU
    }
    const gP = tU.p.define({
      enables: OE
    });

    function tP(UU, RU) {
      let gU, pU = new Promise((UU => gU = UU)),
        EU = UU => function(UU, RU, gU) {
          let tU = RU.content ? RU.content(UU, (() => PU(null))) : null;
          if (!tU) {
            if (tU = (0, GU.d)("form"), RU.input) {
              let UU = (0, GU.d)("input", RU.input);
              /^(text|password|number|email|tel|url)$/.test(UU.type) && UU.classList.add("cm-textfield"), UU.name || (UU.name = "input"), tU.appendChild((0, GU.d)("label", (RU.label || "") + ": ", UU))
            } else tU.appendChild(document.createTextNode(RU.label || ""));
            tU.appendChild(document.createTextNode(" ")), tU.appendChild((0, GU.d)("button", {
              class: "cm-button",
              type: "submit"
            }, RU.submitLabel || "OK"))
          }
          let pU = "FORM" == tU.nodeName ? [tU] : tU.querySelectorAll("form");
          for (let TU = 0; TU < pU.length; TU++) {
            let UU = pU[TU];
            UU.addEventListener("keydown", (RU => {
              27 == RU.keyCode ? (RU.preventDefault(), PU(null)) : 13 == RU.keyCode && (RU.preventDefault(), PU(UU))
            })), UU.addEventListener("submit", (RU => {
              RU.preventDefault(), PU(UU)
            }))
          }
          let EU = (0, GU.d)("div", tU, (0, GU.d)("button", {
            onclick: () => PU(null),
            "aria-label": UU.state.phrase("close"),
            class: "cm-dialog-close",
            type: "button"
          }, ["\xd7"]));
          RU.class && (EU.className = RU.class);

          function PU(RU) {
            EU.contains(EU.ownerDocument.activeElement) && UU.focus(), gU(RU)
          }
          return EU.classList.add("cm-dialog"), {
            dom: EU,
            top: RU.top,
            mount: () => {
              if (RU.focus) {
                let UU;
                UU = "string" == typeof RU.focus ? tU.querySelector(RU.focus) : tU.querySelector("input") || tU.querySelector("button"), UU && "select" in UU ? UU.select() : UU && "focus" in UU && UU.focus()
              }
            }
          }
        }(UU, RU, gU);
      UU.state.field(pP, !1) ? UU.dispatch({
        effects: EP.of(EU)
      }) : UU.dispatch({
        effects: tU.A.appendConfig.of(pP.init((() => [EU])))
      });
      let PU = PP.of(EU);
      return {
        close: PU,
        result: pU.then((RU => ((UU.win.queueMicrotask || (RU => UU.win.setTimeout(RU, 10)))((() => {
          UU.state.field(pP).indexOf(EU) > -1 && UU.dispatch({
            effects: PU
          })
        })), RU)))
      }
    }
    const pP = tU.C.define({
        create: () => [],
        update(UU, RU) {
          for (let gU of RU.effects) gU.is(EP) ? UU = [gU.value].concat(UU) : gU.is(PP) && (UU = UU.filter((UU => UU != gU.value)));
          return UU
        },
        provide: UU => gP.computeN([UU], (RU => RU.field(UU)))
      }),
      EP = tU.A.define(),
      PP = tU.A.define();
    class TP extends tU.x {
      compare(UU) {
        return this == UU || this.constructor == UU.constructor && this.eq(UU)
      }
      eq(UU) {
        return !1
      }
      destroy(UU) {}
    }
    TP.prototype.elementClass = "", TP.prototype.toDOM = void 0, TP.prototype.mapMode = tU.q.TrackBefore, TP.prototype.startSide = TP.prototype.endSide = -1, TP.prototype.point = !0;
    const qP = tU.p.define(),
      KP = tU.p.define(),
      cP = {
        class: "",
        renderEmptyElements: !1,
        elementStyle: "",
        markers: () => tU.v.empty,
        lineMarker: () => null,
        widgetMarker: () => null,
        lineMarkerChange: null,
        initialSpacer: null,
        updateSpacer: null,
        domEventHandlers: {},
        side: "before"
      },
      GP = tU.p.define();

    function jP(UU) {
      return [CP(), GP.of({
        ...cP,
        ...UU
      })]
    }
    const uP = tU.p.define({
      combine: UU => UU.some((UU => UU))
    });

    function CP(UU) {
      let RU = [hP];
      return UU && !1 === UU.fixed && RU.push(uP.of(!0)), RU
    }
    const hP = LR.fromClass(class {
      constructor(UU) {
        this.view = UU, this.domAfter = null, this.prevViewport = UU.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = UU.state.facet(GP).map((RU => new fP(UU, RU))), this.fixed = !UU.state.facet(uP);
        for (let RU of this.gutters) "after" == RU.config.side ? this.getDOMAfter().appendChild(RU.dom) : this.dom.appendChild(RU.dom);
        this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), UU.scrollDOM.insertBefore(this.dom, UU.contentDOM)
      }
      getDOMAfter() {
        return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter
      }
      update(UU) {
        if (this.updateGutters(UU)) {
          let RU = this.prevViewport,
            gU = UU.view.viewport,
            tU = Math.min(RU.to, gU.to) - Math.max(RU.from, gU.from);
          this.syncGutters(tU < .8 * (gU.to - gU.from))
        }
        if (UU.geometryChanged) {
          let UU = this.view.contentHeight / this.view.scaleY + "px";
          this.dom.style.minHeight = UU, this.domAfter && (this.domAfter.style.minHeight = UU)
        }
        this.view.state.facet(uP) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = UU.view.viewport
      }
      syncGutters(UU) {
        let RU = this.dom.nextSibling;
        UU && (this.dom.remove(), this.domAfter && this.domAfter.remove());
        let gU = tU.v.iter(this.view.state.facet(qP), this.view.viewport.from),
          pU = [],
          EU = this.gutters.map((UU => new WP(UU, this.view.viewport, -this.view.documentPadding.top)));
        for (let tU of this.view.viewportLineBlocks)
          if (pU.length && (pU = []), Array.isArray(tU.type)) {
            let UU = !0;
            for (let RU of tU.type)
              if (RU.type == YU.Text && UU) {
                eP(gU, pU, RU.from);
                for (let UU of EU) UU.line(this.view, RU, pU);
                UU = !1
              } else if (RU.widget)
              for (let UU of EU) UU.widget(this.view, RU)
          } else if (tU.type == YU.Text) {
          eP(gU, pU, tU.from);
          for (let UU of EU) UU.line(this.view, tU, pU)
        } else if (tU.widget)
          for (let UU of EU) UU.widget(this.view, tU);
        for (let tU of EU) tU.finish();
        UU && (this.view.scrollDOM.insertBefore(this.dom, RU), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter))
      }
      updateGutters(UU) {
        let RU = UU.startState.facet(GP),
          gU = UU.state.facet(GP),
          pU = UU.docChanged || UU.heightChanged || UU.viewportChanged || !tU.v.eq(UU.startState.facet(qP), UU.state.facet(qP), UU.view.viewport.from, UU.view.viewport.to);
        if (RU == gU)
          for (let tU of this.gutters) tU.update(UU) && (pU = !0);
        else {
          pU = !0;
          let tU = [];
          for (let pU of gU) {
            let gU = RU.indexOf(pU);
            gU < 0 ? tU.push(new fP(this.view, pU)) : (this.gutters[gU].update(UU), tU.push(this.gutters[gU]))
          }
          for (let UU of this.gutters) UU.dom.remove(), tU.indexOf(UU) < 0 && UU.destroy();
          for (let UU of tU) "after" == UU.config.side ? this.getDOMAfter().appendChild(UU.dom) : this.dom.appendChild(UU.dom);
          this.gutters = tU
        }
        return pU
      }
      destroy() {
        for (let UU of this.gutters) UU.destroy();
        this.dom.remove(), this.domAfter && this.domAfter.remove()
      }
    }, {
      provide: UU => op.scrollMargins.of((RU => {
        let gU = RU.plugin(UU);
        if (!gU || 0 == gU.gutters.length || !gU.fixed) return null;
        let tU = gU.dom.offsetWidth * RU.scaleX,
          pU = gU.domAfter ? gU.domAfter.offsetWidth * RU.scaleX : 0;
        return RU.textDirection == KR.LTR ? {
          left: tU,
          right: pU
        } : {
          right: tU,
          left: pU
        }
      }))
    });

    function QP(UU) {
      return Array.isArray(UU) ? UU : [UU]
    }

    function eP(UU, RU, gU) {
      for (; UU.value && UU.from <= gU;) UU.from == gU && RU.push(UU.value), UU.next()
    }
    class WP {
      constructor(UU, RU, gU) {
        this.gutter = UU, this.height = gU, this.i = 0, this.cursor = tU.v.iter(UU.markers, RU.from)
      }
      addElement(UU, RU, gU) {
        let {
          gutter: tU
        } = this, pU = (RU.top - this.height) / UU.scaleY, EU = RU.height / UU.scaleY;
        if (this.i == tU.elements.length) {
          let RU = new xP(UU, EU, pU, gU);
          tU.elements.push(RU), tU.dom.appendChild(RU.dom)
        } else tU.elements[this.i].update(UU, EU, pU, gU);
        this.height = RU.bottom, this.i++
      }
      line(UU, RU, gU) {
        let tU = [];
        eP(this.cursor, tU, RU.from), gU.length && (tU = tU.concat(gU));
        let pU = this.gutter.config.lineMarker(UU, RU, tU);
        pU && tU.unshift(pU);
        let EU = this.gutter;
        (0 != tU.length || EU.config.renderEmptyElements) && this.addElement(UU, RU, tU)
      }
      widget(UU, RU) {
        let gU = this.gutter.config.widgetMarker(UU, RU.widget, RU),
          tU = gU ? [gU] : null;
        for (let pU of UU.state.facet(KP)) {
          let gU = pU(UU, RU.widget, RU);
          gU && (tU || (tU = [])).push(gU)
        }
        tU && this.addElement(UU, RU, tU)
      }
      finish() {
        let UU = this.gutter;
        for (; UU.elements.length > this.i;) {
          let RU = UU.elements.pop();
          UU.dom.removeChild(RU.dom), RU.destroy()
        }
      }
    }
    class fP {
      constructor(UU, RU) {
        this.view = UU, this.config = RU, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
        for (let gU in RU.domEventHandlers) this.dom.addEventListener(gU, (tU => {
          let pU, EU = tU.target;
          if (EU != this.dom && this.dom.contains(EU)) {
            for (; EU.parentNode != this.dom;) EU = EU.parentNode;
            let UU = EU.getBoundingClientRect();
            pU = (UU.top + UU.bottom) / 2
          } else pU = tU.clientY;
          let PU = UU.lineBlockAtHeight(pU - UU.documentTop);
          RU.domEventHandlers[gU](UU, PU, tU) && tU.preventDefault()
        }));
        this.markers = QP(RU.markers(UU)), RU.initialSpacer && (this.spacer = new xP(UU, 0, 0, [RU.initialSpacer(UU)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none")
      }
      update(UU) {
        let RU = this.markers;
        if (this.markers = QP(this.config.markers(UU.view)), this.spacer && this.config.updateSpacer) {
          let RU = this.config.updateSpacer(this.spacer.markers[0], UU);
          RU != this.spacer.markers[0] && this.spacer.update(UU.view, 0, 0, [RU])
        }
        let gU = UU.view.viewport;
        return !tU.v.eq(this.markers, RU, gU.from, gU.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(UU)
      }
      destroy() {
        for (let UU of this.elements) UU.destroy()
      }
    }
    class xP {
      constructor(UU, RU, gU, tU) {
        this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(UU, RU, gU, tU)
      }
      update(UU, RU, gU, tU) {
        this.height != RU && (this.height = RU, this.dom.style.height = RU + "px"), this.above != gU && (this.dom.style.marginTop = (this.above = gU) ? gU + "px" : ""),
          function(UU, RU) {
            if (UU.length != RU.length) return !1;
            for (let gU = 0; gU < UU.length; gU++)
              if (!UU[gU].compare(RU[gU])) return !1;
            return !0
          }(this.markers, tU) || this.setMarkers(UU, tU)
      }
      setMarkers(UU, RU) {
        let gU = "cm-gutterElement",
          tU = this.dom.firstChild;
        for (let pU = 0, EU = 0;;) {
          let PU = EU,
            TU = pU < RU.length ? RU[pU++] : null,
            qU = !1;
          if (TU) {
            let UU = TU.elementClass;
            UU && (gU += " " + UU);
            for (let RU = EU; RU < this.markers.length; RU++)
              if (this.markers[RU].compare(TU)) {
                PU = RU, qU = !0;
                break
              }
          } else PU = this.markers.length;
          for (; EU < PU;) {
            let UU = this.markers[EU++];
            if (UU.toDOM) {
              UU.destroy(tU);
              let RU = tU.nextSibling;
              tU.remove(), tU = RU
            }
          }
          if (!TU) break;
          TU.toDOM && (qU ? tU = tU.nextSibling : this.dom.insertBefore(TU.toDOM(UU), tU)), qU && EU++
        }
        this.dom.className = gU, this.markers = RU
      }
      destroy() {
        this.setMarkers(null, [])
      }
    }
    const mP = tU.p.define(),
      IP = tU.p.define(),
      JP = tU.p.define({
        combine: UU => (0, tU.N)(UU, {
          formatNumber: String,
          domEventHandlers: {}
        }, {
          domEventHandlers(UU, RU) {
            let gU = Object.assign({}, UU);
            for (let tU in RU) {
              let UU = gU[tU],
                pU = RU[tU];
              gU[tU] = UU ? (RU, gU, tU) => UU(RU, gU, tU) || pU(RU, gU, tU) : pU
            }
            return gU
          }
        })
      });
    class wP extends TP {
      constructor(UU) {
        super(), this.number = UU
      }
      eq(UU) {
        return this.number == UU.number
      }
      toDOM() {
        return document.createTextNode(this.number)
      }
    }

    function nP(UU, RU) {
      return UU.state.facet(JP).formatNumber(RU, UU.state)
    }
    const bP = GP.compute([JP], (UU => ({
      class: "cm-lineNumbers",
      renderEmptyElements: !1,
      markers: UU => UU.state.facet(mP),
      lineMarker: (UU, RU, gU) => gU.some((UU => UU.toDOM)) ? null : new wP(nP(UU, UU.state.doc.lineAt(RU.from).number)),
      widgetMarker: (UU, RU, gU) => {
        for (let tU of UU.state.facet(IP)) {
          let pU = tU(UU, RU, gU);
          if (pU) return pU
        }
        return null
      },
      lineMarkerChange: UU => UU.startState.facet(JP) != UU.state.facet(JP),
      initialSpacer: UU => new wP(nP(UU, ZP(UU.state.doc.lines))),
      updateSpacer(UU, RU) {
        let gU = nP(RU.view, ZP(RU.view.state.doc.lines));
        return gU == UU.number ? UU : new wP(gU)
      },
      domEventHandlers: UU.facet(JP).domEventHandlers,
      side: "before"
    })));

    function oP() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [JP.of(UU), CP(), bP]
    }

    function ZP(UU) {
      let RU = 9;
      for (; RU < UU;) RU = 10 * RU + 9;
      return RU
    }
    const aP = new class extends TP {
        constructor() {
          super(...arguments), this.elementClass = "cm-activeLineGutter"
        }
      },
      YP = qP.compute(["selection"], (UU => {
        let RU = [],
          gU = -1;
        for (let tU of UU.selection.hu) {
          let pU = UU.doc.lineAt(tU.head).from;
          pU > gU && (gU = pU, RU.push(aP.range(pU)))
        }
        return tU.v.of(RU)
      }));

    function BP() {
      return YP
    }
  },
  40734: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => tU,
      h: () => uU,
      i: () => PU,
      k: () => cU,
      l: () => KU,
      p: () => VU,
      q: () => XU,
      s: () => rU,
      v: () => CU
    });
    const tU = 1024;
    let pU = 0;
    class EU {
      constructor(UU, RU) {
        this.from = UU, this.to = RU
      }
    }
    class PU {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.id = pU++, this.perNode = !!UU.perNode, this.deserialize = UU.deserialize || (() => {
          throw new Error("This node type doesn't define a deserialize function")
        }), this.combine = UU.combine || null
      }
      add(UU) {
        if (this.perNode) throw new RangeError("Can't add per-node props to node types");
        return "function" != typeof UU && (UU = KU.match(UU)), RU => {
          let gU = UU(RU);
          return void 0 === gU ? null : [this, gU]
        }
      }
    }
    PU.closedBy = new PU({
      deserialize: UU => UU.split(" ")
    }), PU.openedBy = new PU({
      deserialize: UU => UU.split(" ")
    }), PU.group = new PU({
      deserialize: UU => UU.split(" ")
    }), PU.isolate = new PU({
      deserialize: UU => {
        if (UU && "rtl" != UU && "ltr" != UU && "auto" != UU) throw new RangeError("Invalid value for isolate: " + UU);
        return UU || "auto"
      }
    }), PU.contextHash = new PU({
      perNode: !0
    }), PU.lookAhead = new PU({
      perNode: !0
    }), PU.mounted = new PU({
      perNode: !0
    });
    class TU {
      constructor(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this.tree = UU, this.overlay = RU, this.parser = gU, this.bracketed = tU
      }
      static get(UU) {
        return UU && UU.props && UU.props[PU.mounted.id]
      }
    }
    const qU = Object.create(null);
    class KU {
      constructor(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.name = UU, this.props = RU, this.id = gU, this.flags = tU
      }
      static define(UU) {
        let RU = UU.props && UU.props.length ? Object.create(null) : qU,
          gU = (UU.top ? 1 : 0) | (UU.skipped ? 2 : 0) | (UU.error ? 4 : 0) | (null == UU.name ? 8 : 0),
          tU = new KU(UU.name || "", RU, UU.id, gU);
        if (UU.props)
          for (let pU of UU.props)
            if (Array.isArray(pU) || (pU = pU(tU)), pU) {
              if (pU[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
              RU[pU[0].id] = pU[1]
            } return tU
      }
      prop(UU) {
        return this.props[UU.id]
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
      is(UU) {
        if ("string" == typeof UU) {
          if (this.name == UU) return !0;
          let RU = this.prop(PU.group);
          return !!RU && RU.indexOf(UU) > -1
        }
        return this.id == UU
      }
      static match(UU) {
        let RU = Object.create(null);
        for (let gU in UU)
          for (let tU of gU.split(" ")) RU[tU] = UU[gU];
        return UU => {
          for (let gU = UU.prop(PU.group), tU = -1; tU < (gU ? gU.length : 0); tU++) {
            let pU = RU[tU < 0 ? UU.name : gU[tU]];
            if (pU) return pU
          }
        }
      }
    }
    KU.none = new KU("", Object.create(null), 0, 8);
    class cU {
      constructor(UU) {
        this.types = UU;
        for (let RU = 0; RU < UU.length; RU++)
          if (UU[RU].id != RU) throw new RangeError("Node type ids should correspond to array positions when creating a node set")
      }
      extend() {
        let UU = [];
        for (var RU = arguments.length, gU = new Array(RU), tU = 0; tU < RU; tU++) gU[tU] = arguments[tU];
        for (let pU of this.types) {
          let RU = null;
          for (let UU of gU) {
            let gU = UU(pU);
            if (gU) {
              RU || (RU = Object.assign({}, pU.props));
              let UU = gU[1],
                tU = gU[0];
              tU.combine && tU.id in RU && (UU = tU.combine(RU[tU.id], UU)), RU[tU.id] = UU
            }
          }
          UU.push(RU ? new KU(pU.name, RU, pU.id, pU.flags) : pU)
        }
        return new cU(UU)
      }
    }
    const GU = new WeakMap,
      jU = new WeakMap;
    var uU;
    ! function(UU) {
      UU[UU.ExcludeBuffers = 1] = "ExcludeBuffers", UU[UU.IncludeAnonymous = 2] = "IncludeAnonymous", UU[UU.IgnoreMounts = 4] = "IgnoreMounts", UU[UU.IgnoreOverlays = 8] = "IgnoreOverlays", UU[UU.EnterBracketed = 16] = "EnterBracketed"
    }(uU || (uU = {}));
    class CU {
      constructor(UU, RU, gU, tU, pU) {
        if (this.type = UU, this.children = RU, this.positions = gU, this.length = tU, this.props = null, pU && pU.length) {
          this.props = Object.create(null);
          for (let [UU, RU] of pU) this.props["number" == typeof UU ? UU : UU.id] = RU
        }
      }
      toString() {
        let UU = TU.get(this);
        if (UU && !UU.overlay) return UU.tree.toString();
        let RU = "";
        for (let gU of this.children) {
          let UU = gU.toString();
          UU && (RU && (RU += ","), RU += UU)
        }
        return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (RU.length ? "(" + RU + ")" : "") : RU
      }
      cursor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return new oU(this.topNode, UU)
      }
      cursorAt(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gU = GU.get(this) || this.topNode,
          tU = new oU(gU);
        return tU.moveTo(UU, RU), GU.set(this, tU._tree), tU
      }
      get topNode() {
        return new xU(this, 0, 0, null)
      }
      resolve(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gU = WU(GU.get(this) || this.topNode, UU, RU, !1);
        return GU.set(this, gU), gU
      }
      resolveInner(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gU = WU(jU.get(this) || this.topNode, UU, RU, !0);
        return jU.set(this, gU), gU
      }
      resolveStack(UU) {
        return function(UU, RU, gU) {
          let tU = UU.resolveInner(RU, gU),
            pU = null;
          for (let EU = tU instanceof xU ? tU : tU.context.parent; EU; EU = EU.parent)
            if (EU.index < 0) {
              let UU = EU.parent;
              (pU || (pU = [tU])).push(UU.resolve(RU, gU)), EU = UU
            } else {
              let UU = TU.get(EU.tree);
              if (UU && UU.overlay && UU.overlay[0].from <= RU && UU.overlay[UU.overlay.length - 1].to >= RU) {
                let PU = new xU(UU.tree, UU.overlay[0].from + EU.from, -1, EU);
                (pU || (pU = [tU])).push(WU(PU, RU, gU, !1))
              }
            } return pU ? nU(pU) : tU
        }(this, UU, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
      }
      iterate(UU) {
        let {
          enter: RU,
          leave: gU,
          from: tU = 0,
          to: pU = this.length
        } = UU, EU = UU.mode || 0, PU = (EU & uU.IncludeAnonymous) > 0;
        for (let TU = this.cursor(EU | uU.IncludeAnonymous);;) {
          let UU = !1;
          if (TU.from <= pU && TU.to >= tU && (!PU && TU.type.isAnonymous || !1 !== RU(TU))) {
            if (TU.firstChild()) continue;
            UU = !0
          }
          for (; UU && gU && (PU || !TU.type.isAnonymous) && gU(TU), !TU.nextSibling();) {
            if (!TU.parent()) return;
            UU = !0
          }
        }
      }
      prop(UU) {
        return UU.perNode ? this.props ? this.props[UU.id] : void 0 : this.type.prop(UU)
      }
      get propValues() {
        let UU = [];
        if (this.props)
          for (let RU in this.props) UU.push([+RU, this.props[RU]]);
        return UU
      }
      balance() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this.children.length <= 8 ? this : BU(KU.none, this.children, this.positions, 0, this.children.length, 0, this.length, ((UU, RU, gU) => new CU(this.type, UU, RU, gU, this.propValues)), UU.makeTree || ((UU, RU, gU) => new CU(KU.none, UU, RU, gU)))
      }
      static build(UU) {
        return function(UU) {
          var RU;
          let {
            buffer: gU,
            nodeSet: pU,
            maxBufferLength: EU = tU,
            reused: TU = [],
            minRepeatType: qU = pU.types.length
          } = UU, KU = Array.isArray(gU) ? new hU(gU, gU.length) : gU, cU = pU.types, GU = 0, jU = 0;

          function uU(UU, RU, gU, tU, PU, CU) {
            let {
              id: hU,
              start: JU,
              end: wU,
              size: nU
            } = KU, bU = jU, oU = GU;
            if (nU < 0) {
              if (KU.next(), -1 == nU) {
                let RU = TU[hU];
                return gU.push(RU), void tU.push(JU - UU)
              }
              if (-3 == nU) return void(GU = hU);
              if (-4 == nU) return void(jU = hU);
              throw new RangeError(`Unrecognized record size: ${nU}`)
            }
            let ZU, aU, YU = cU[hU],
              VU = JU - UU;
            if (wU - JU <= EU && (aU = mU(KU.pos - RU, PU))) {
              let RU = new Uint16Array(aU.size - aU.skip),
                gU = KU.pos - aU.size,
                tU = RU.length;
              for (; KU.pos > gU;) tU = IU(aU.start, RU, tU);
              ZU = new QU(RU, wU - aU.start, pU), VU = aU.start - UU
            } else {
              let UU = KU.pos - nU;
              KU.next();
              let RU = [],
                gU = [],
                tU = hU >= qU ? hU : -1,
                pU = 0,
                PU = wU;
              for (; KU.pos > UU;) tU >= 0 && KU.id == tU && KU.size >= 0 ? (KU.end <= PU - EU && (fU(RU, gU, JU, pU, KU.end, PU, tU, bU, oU), pU = RU.length, PU = KU.end), KU.next()) : CU > 2500 ? eU(JU, UU, RU, gU) : uU(JU, UU, RU, gU, tU, CU + 1);
              if (tU >= 0 && pU > 0 && pU < RU.length && fU(RU, gU, JU, pU, JU, PU, tU, bU, oU), RU.reverse(), gU.reverse(), tU > -1 && pU > 0) {
                let UU = WU(YU, oU);
                ZU = BU(YU, RU, gU, 0, RU.length, 0, wU - JU, UU, UU)
              } else ZU = xU(YU, RU, gU, wU - JU, bU - wU, oU)
            }
            gU.push(ZU), tU.push(VU)
          }

          function eU(UU, RU, gU, tU) {
            let PU = [],
              TU = 0,
              qU = -1;
            for (; KU.pos > RU;) {
              let {
                id: UU,
                start: RU,
                end: gU,
                size: tU
              } = KU;
              if (tU > 4) KU.next();
              else {
                if (qU > -1 && RU < qU) break;
                qU < 0 && (qU = gU - EU), PU.push(UU, RU, gU), TU++, KU.next()
              }
            }
            if (TU) {
              let RU = new Uint16Array(4 * TU),
                EU = PU[PU.length - 2];
              for (let UU = PU.length - 3, gU = 0; UU >= 0; UU -= 3) RU[gU++] = PU[UU], RU[gU++] = PU[UU + 1] - EU, RU[gU++] = PU[UU + 2] - EU, RU[gU++] = gU;
              gU.push(new QU(RU, PU[2] - EU, pU)), tU.push(EU - UU)
            }
          }

          function WU(UU, RU) {
            return (gU, tU, pU) => {
              let EU, TU, qU = 0,
                KU = gU.length - 1;
              if (KU >= 0 && (EU = gU[KU]) instanceof CU) {
                if (!KU && EU.type == UU && EU.length == pU) return EU;
                (TU = EU.prop(PU.lookAhead)) && (qU = tU[KU] + EU.length + TU)
              }
              return xU(UU, gU, tU, pU, qU, RU)
            }
          }

          function fU(UU, RU, gU, tU, EU, PU, TU, qU, KU) {
            let cU = [],
              GU = [];
            for (; UU.length > tU;) cU.push(UU.pop()), GU.push(RU.pop() + gU - EU);
            UU.push(xU(pU.types[TU], cU, GU, PU - EU, qU - PU, KU)), RU.push(EU - gU)
          }

          function xU(UU, RU, gU, tU, pU, EU, TU) {
            if (EU) {
              let UU = [PU.contextHash, EU];
              TU = TU ? [UU].concat(TU) : [UU]
            }
            if (pU > 25) {
              let UU = [PU.lookAhead, pU];
              TU = TU ? [UU].concat(TU) : [UU]
            }
            return new CU(UU, RU, gU, tU, TU)
          }

          function mU(UU, RU) {
            let gU = KU.fork(),
              tU = 0,
              pU = 0,
              PU = 0,
              TU = gU.end - EU,
              cU = {
                size: 0,
                start: 0,
                skip: 0
              };
            UU: for (let EU = gU.pos - UU; gU.pos > EU;) {
              let UU = gU.size;
              if (gU.id == RU && UU >= 0) {
                cU.size = tU, cU.start = pU, cU.skip = PU, PU += 4, tU += 4, gU.next();
                continue
              }
              let KU = gU.pos - UU;
              if (UU < 0 || KU < EU || gU.start < TU) break;
              let GU = gU.id >= qU ? 4 : 0,
                jU = gU.start;
              for (gU.next(); gU.pos > KU;) {
                if (gU.size < 0) {
                  if (-3 != gU.size && -4 != gU.size) break UU;
                  GU += 4
                } else gU.id >= qU && (GU += 4);
                gU.next()
              }
              pU = jU, tU += UU, PU += GU
            }
            return (RU < 0 || tU == UU) && (cU.size = tU, cU.start = pU, cU.skip = PU), cU.size > 4 ? cU : void 0
          }

          function IU(UU, RU, gU) {
            let {
              id: tU,
              start: pU,
              end: EU,
              size: PU
            } = KU;
            if (KU.next(), PU >= 0 && tU < qU) {
              let TU = gU;
              if (PU > 4) {
                let tU = KU.pos - (PU - 4);
                for (; KU.pos > tU;) gU = IU(UU, RU, gU)
              }
              RU[--gU] = TU, RU[--gU] = EU - UU, RU[--gU] = pU - UU, RU[--gU] = tU
            } else - 3 == PU ? GU = tU : -4 == PU && (jU = tU);
            return gU
          }
          let JU = [],
            wU = [];
          for (; KU.pos > 0;) uU(UU.start || 0, UU.bufferStart || 0, JU, wU, -1, 0);
          let nU = null !== (RU = UU.length) && void 0 !== RU ? RU : JU.length ? wU[0] + JU[0].length : 0;
          return new CU(cU[UU.topID], JU.reverse(), wU.reverse(), nU)
        }(UU)
      }
    }
    CU.empty = new CU(KU.none, [], [], 0);
    class hU {
      constructor(UU, RU) {
        this.buffer = UU, this.index = RU
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
        return new hU(this.buffer, this.index)
      }
    }
    class QU {
      constructor(UU, RU, gU) {
        this.buffer = UU, this.length = RU, this.set = gU
      }
      get type() {
        return KU.none
      }
      toString() {
        let UU = [];
        for (let RU = 0; RU < this.buffer.length;) UU.push(this.childString(RU)), RU = this.buffer[RU + 3];
        return UU.join(",")
      }
      childString(UU) {
        let RU = this.buffer[UU],
          gU = this.buffer[UU + 3],
          tU = this.set.types[RU],
          pU = tU.name;
        if (/\W/.test(pU) && !tU.isError && (pU = JSON.stringify(pU)), gU == (UU += 4)) return pU;
        let EU = [];
        for (; UU < gU;) EU.push(this.childString(UU)), UU = this.buffer[UU + 3];
        return pU + "(" + EU.join(",") + ")"
      }
      findChild(UU, RU, gU, tU, pU) {
        let {
          buffer: EU
        } = this, PU = -1;
        for (let TU = UU; TU != RU && !(eU(pU, tU, EU[TU + 1], EU[TU + 2]) && (PU = TU, gU > 0)); TU = EU[TU + 3]);
        return PU
      }
      slice(UU, RU, gU) {
        let tU = this.buffer,
          pU = new Uint16Array(RU - UU),
          EU = 0;
        for (let PU = UU, TU = 0; PU < RU;) {
          pU[TU++] = tU[PU++], pU[TU++] = tU[PU++] - gU;
          let RU = pU[TU++] = tU[PU++] - gU;
          pU[TU++] = tU[PU++] - UU, EU = Math.max(EU, RU)
        }
        return new QU(pU, EU, this.set)
      }
    }

    function eU(UU, RU, gU, tU) {
      switch (UU) {
        case -2:
          return gU < RU;
        case -1:
          return tU >= RU && gU < RU;
        case 0:
          return gU < RU && tU > RU;
        case 1:
          return gU <= RU && tU > RU;
        case 2:
          return tU > RU;
        case 4:
          return !0
      }
    }

    function WU(UU, RU, gU, tU) {
      for (var pU; UU.from == UU.to || (gU < 1 ? UU.from >= RU : UU.from > RU) || (gU > -1 ? UU.to <= RU : UU.to < RU);) {
        let RU = !tU && UU instanceof xU && UU.index < 0 ? null : UU.parent;
        if (!RU) return UU;
        UU = RU
      }
      let EU = tU ? 0 : uU.IgnoreOverlays;
      if (tU)
        for (let PU = UU, TU = PU.parent; TU; PU = TU, TU = PU.parent) PU instanceof xU && PU.index < 0 && (null === (pU = TU.enter(RU, gU, EU)) || void 0 === pU ? void 0 : pU.from) != PU.from && (UU = TU);
      for (;;) {
        let tU = UU.enter(RU, gU, EU);
        if (!tU) return UU;
        UU = tU
      }
    }
    class fU {
      cursor() {
        return new oU(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)
      }
      getChild(UU) {
        let RU = mU(this, UU, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null);
        return RU.length ? RU[0] : null
      }
      getChildren(UU) {
        return mU(this, UU, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
      }
      resolve(UU) {
        return WU(this, UU, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !1)
      }
      resolveInner(UU) {
        return WU(this, UU, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !0)
      }
      matchContext(UU) {
        return IU(this.parent, UU)
      }
      enterUnfinishedNodesBefore(UU) {
        let RU = this.childBefore(UU),
          gU = this;
        for (; RU;) {
          let UU = RU.lastChild;
          if (!UU || UU.to != RU.to) break;
          UU.type.isError && UU.from == UU.to ? (gU = RU, RU = UU.prevSibling) : RU = UU
        }
        return gU
      }
      get node() {
        return this
      }
      get next() {
        return this.parent
      }
    }
    class xU extends fU {
      constructor(UU, RU, gU, tU) {
        super(), this._tree = UU, this.from = RU, this.index = gU, this._parent = tU
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
      nextChild(UU, RU, gU, tU) {
        let pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        for (let EU = this;;) {
          for (let {
              children: PU,
              positions: qU
            } = EU._tree, KU = RU > 0 ? PU.length : -1; UU != KU; UU += RU) {
            let KU, cU = PU[UU],
              GU = qU[UU] + EU.from;
            if (pU & uU.EnterBracketed && cU instanceof CU && (KU = TU.get(cU)) && !KU.overlay && KU.bracketed && gU >= GU && gU <= GU + cU.length || eU(tU, gU, GU, GU + cU.length))
              if (cU instanceof QU) {
                if (pU & uU.ExcludeBuffers) continue;
                let PU = cU.findChild(0, cU.buffer.length, RU, gU - GU, tU);
                if (PU > -1) return new wU(new JU(EU, cU, UU, GU), null, PU)
              } else if (pU & uU.IncludeAnonymous || !cU.type.isAnonymous || ZU(cU)) {
              let PU;
              if (!(pU & uU.IgnoreMounts) && (PU = TU.get(cU)) && !PU.overlay) return new xU(PU.tree, GU, UU, EU);
              let qU = new xU(cU, GU, UU, EU);
              return pU & uU.IncludeAnonymous || !qU.type.isAnonymous ? qU : qU.nextChild(RU < 0 ? cU.children.length - 1 : 0, RU, gU, tU, pU)
            }
          }
          if (pU & uU.IncludeAnonymous || !EU.type.isAnonymous) return null;
          if (UU = EU.index >= 0 ? EU.index + RU : RU < 0 ? -1 : EU._parent._tree.children.length, EU = EU._parent, !EU) return null
        }
      }
      get firstChild() {
        return this.nextChild(0, 1, 0, 4)
      }
      get lastChild() {
        return this.nextChild(this._tree.children.length - 1, -1, 0, 4)
      }
      childAfter(UU) {
        return this.nextChild(0, 1, UU, 2)
      }
      childBefore(UU) {
        return this.nextChild(this._tree.children.length - 1, -1, UU, -2)
      }
      prop(UU) {
        return this._tree.prop(UU)
      }
      enter(UU, RU) {
        let gU, tU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (!(tU & uU.IgnoreOverlays) && (gU = TU.get(this._tree)) && gU.overlay) {
          let pU = UU - this.from,
            EU = tU & uU.EnterBracketed && gU.bracketed;
          for (let {
              from: UU,
              to: tU
            }
            of gU.overlay)
            if ((RU > 0 || EU ? UU <= pU : UU < pU) && (RU < 0 || EU ? tU >= pU : tU > pU)) return new xU(gU.tree, gU.overlay[0].from + this.from, -1, this)
        }
        return this.nextChild(0, 1, UU, RU, tU)
      }
      nextSignificantParent() {
        let UU = this;
        for (; UU.type.isAnonymous && UU._parent;) UU = UU._parent;
        return UU
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

    function mU(UU, RU, gU, tU) {
      let pU = UU.cursor(),
        EU = [];
      if (!pU.firstChild()) return EU;
      if (null != gU)
        for (let PU = !1; !PU;)
          if (PU = pU.type.is(gU), !pU.nextSibling()) return EU;
      for (;;) {
        if (null != tU && pU.type.is(tU)) return EU;
        if (pU.type.is(RU) && EU.push(pU.node), !pU.nextSibling()) return null == tU ? EU : []
      }
    }

    function IU(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : RU.length - 1;
      for (let tU = UU; gU >= 0; tU = tU.parent) {
        if (!tU) return !1;
        if (!tU.type.isAnonymous) {
          if (RU[gU] && RU[gU] != tU.name) return !1;
          gU--
        }
      }
      return !0
    }
    class JU {
      constructor(UU, RU, gU, tU) {
        this.parent = UU, this.buffer = RU, this.index = gU, this.start = tU
      }
    }
    class wU extends fU {
      get name() {
        return this.type.name
      }
      get from() {
        return this.context.start + this.context.buffer.buffer[this.index + 1]
      }
      get to() {
        return this.context.start + this.context.buffer.buffer[this.index + 2]
      }
      constructor(UU, RU, gU) {
        super(), this.context = UU, this._parent = RU, this.index = gU, this.type = UU.buffer.set.types[UU.buffer.buffer[gU]]
      }
      child(UU, RU, gU) {
        let {
          buffer: tU
        } = this.context, pU = tU.findChild(this.index + 4, tU.buffer[this.index + 3], UU, RU - this.context.start, gU);
        return pU < 0 ? null : new wU(this.context, this, pU)
      }
      get firstChild() {
        return this.child(1, 0, 4)
      }
      get lastChild() {
        return this.child(-1, 0, 4)
      }
      childAfter(UU) {
        return this.child(1, UU, 2)
      }
      childBefore(UU) {
        return this.child(-1, UU, -2)
      }
      prop(UU) {
        return this.type.prop(UU)
      }
      enter(UU, RU) {
        if ((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0) & uU.ExcludeBuffers) return null;
        let {
          buffer: gU
        } = this.context, tU = gU.findChild(this.index + 4, gU.buffer[this.index + 3], RU > 0 ? 1 : -1, UU - this.context.start, RU);
        return tU < 0 ? null : new wU(this.context, this, tU)
      }
      get parent() {
        return this._parent || this.context.parent.nextSignificantParent()
      }
      externalSibling(UU) {
        return this._parent ? null : this.context.parent.nextChild(this.context.index + UU, UU, 0, 4)
      }
      get nextSibling() {
        let {
          buffer: UU
        } = this.context, RU = UU.buffer[this.index + 3];
        return RU < (this._parent ? UU.buffer[this._parent.index + 3] : UU.buffer.length) ? new wU(this.context, this._parent, RU) : this.externalSibling(1)
      }
      get prevSibling() {
        let {
          buffer: UU
        } = this.context, RU = this._parent ? this._parent.index + 4 : 0;
        return this.index == RU ? this.externalSibling(-1) : new wU(this.context, this._parent, UU.findChild(RU, this.index, -1, 0, 4))
      }
      get tree() {
        return null
      }
      toTree() {
        let UU = [],
          RU = [],
          {
            buffer: gU
          } = this.context,
          tU = this.index + 4,
          pU = gU.buffer[this.index + 3];
        if (pU > tU) {
          let EU = gU.buffer[this.index + 1];
          UU.push(gU.slice(tU, pU, EU)), RU.push(0)
        }
        return new CU(this.type, UU, RU, this.to - this.from)
      }
      toString() {
        return this.context.buffer.childString(this.index)
      }
    }

    function nU(UU) {
      if (!UU.length) return null;
      let RU = 0,
        gU = UU[0];
      for (let EU = 1; EU < UU.length; EU++) {
        let tU = UU[EU];
        (tU.from > gU.from || tU.to < gU.to) && (gU = tU, RU = EU)
      }
      let tU = gU instanceof xU && gU.index < 0 ? null : gU.parent,
        pU = UU.slice();
      return tU ? pU[RU] = tU : pU.splice(RU, 1), new bU(pU, gU)
    }
    class bU {
      constructor(UU, RU) {
        this.heads = UU, this.node = RU
      }
      get next() {
        return nU(this.heads)
      }
    }
    class oU {
      get name() {
        return this.type.name
      }
      constructor(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = RU & ~uU.EnterBracketed, UU instanceof xU) this.yieldNode(UU);
        else {
          this._tree = UU.context.parent, this.buffer = UU.context;
          for (let RU = UU._parent; RU; RU = RU._parent) this.stack.unshift(RU.index);
          this.bufferNode = UU, this.yieldBuf(UU.index)
        }
      }
      yieldNode(UU) {
        return !!UU && (this._tree = UU, this.type = UU.type, this.from = UU.from, this.to = UU.to, !0)
      }
      yieldBuf(UU, RU) {
        this.index = UU;
        let {
          start: gU,
          buffer: tU
        } = this.buffer;
        return this.type = RU || tU.set.types[tU.buffer[UU]], this.from = gU + tU.buffer[UU + 1], this.to = gU + tU.buffer[UU + 2], !0
      }
      yield(UU) {
        return !!UU && (UU instanceof xU ? (this.buffer = null, this.yieldNode(UU)) : (this.buffer = UU.context, this.yieldBuf(UU.index, UU.type)))
      }
      toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
      }
      enterChild(UU, RU, gU) {
        if (!this.buffer) return this.yield(this._tree.nextChild(UU < 0 ? this._tree._tree.children.length - 1 : 0, UU, RU, gU, this.mode));
        let {
          buffer: tU
        } = this.buffer, pU = tU.findChild(this.index + 4, tU.buffer[this.index + 3], UU, RU - this.buffer.start, gU);
        return !(pU < 0) && (this.stack.push(this.index), this.yieldBuf(pU))
      }
      firstChild() {
        return this.enterChild(1, 0, 4)
      }
      lastChild() {
        return this.enterChild(-1, 0, 4)
      }
      childAfter(UU) {
        return this.enterChild(1, UU, 2)
      }
      childBefore(UU) {
        return this.enterChild(-1, UU, -2)
      }
      enter(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.mode;
        return this.buffer ? !(gU & uU.ExcludeBuffers) && this.enterChild(1, UU, RU) : this.yield(this._tree.enter(UU, RU, gU))
      }
      parent() {
        if (!this.buffer) return this.yieldNode(this.mode & uU.IncludeAnonymous ? this._tree._parent : this._tree.parent);
        if (this.stack.length) return this.yieldBuf(this.stack.pop());
        let UU = this.mode & uU.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        return this.buffer = null, this.yieldNode(UU)
      }
      sibling(UU) {
        if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + UU, UU, 0, 4, this.mode));
        let {
          buffer: RU
        } = this.buffer, gU = this.stack.length - 1;
        if (UU < 0) {
          let UU = gU < 0 ? 0 : this.stack[gU] + 4;
          if (this.index != UU) return this.yieldBuf(RU.findChild(UU, this.index, -1, 0, 4))
        } else {
          let UU = RU.buffer[this.index + 3];
          if (UU < (gU < 0 ? RU.buffer.length : RU.buffer[this.stack[gU] + 3])) return this.yieldBuf(UU)
        }
        return gU < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + UU, UU, 0, 4, this.mode))
      }
      nextSibling() {
        return this.sibling(1)
      }
      prevSibling() {
        return this.sibling(-1)
      }
      atLastNode(UU) {
        let RU, gU, {
          buffer: tU
        } = this;
        if (tU) {
          if (UU > 0) {
            if (this.index < tU.buffer.buffer.length) return !1
          } else
            for (let UU = 0; UU < this.index; UU++)
              if (tU.buffer.buffer[UU + 3] < this.index) return !1;
          ({
            index: RU,
            parent: gU
          } = tU)
        } else({
          index: RU,
          _parent: gU
        } = this._tree);
        for (; gU;
          ({
            index: RU,
            _parent: gU
          } = gU))
          if (RU > -1)
            for (let tU = RU + UU, pU = UU < 0 ? -1 : gU._tree.children.length; tU != pU; tU += UU) {
              let UU = gU._tree.children[tU];
              if (this.mode & uU.IncludeAnonymous || UU instanceof QU || !UU.type.isAnonymous || ZU(UU)) return !1
            }
        return !0
      }
      move(UU, RU) {
        if (RU && this.enterChild(UU, 0, 4)) return !0;
        for (;;) {
          if (this.sibling(UU)) return !0;
          if (this.atLastNode(UU) || !this.parent()) return !1
        }
      }
      next() {
        let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(1, UU)
      }
      prev() {
        let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(-1, UU)
      }
      moveTo(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        for (;
          (this.from == this.to || (RU < 1 ? this.from >= UU : this.from > UU) || (RU > -1 ? this.to <= UU : this.to < UU)) && this.parent(););
        for (; this.enterChild(1, UU, RU););
        return this
      }
      get node() {
        if (!this.buffer) return this._tree;
        let UU = this.bufferNode,
          RU = null,
          gU = 0;
        if (UU && UU.context == this.buffer) UU: for (let tU = this.index, pU = this.stack.length; pU >= 0;) {
          for (let EU = UU; EU; EU = EU._parent)
            if (EU.index == tU) {
              if (tU == this.index) return EU;
              RU = EU, gU = pU + 1;
              break UU
            } tU = this.stack[--pU]
        }
        for (let tU = gU; tU < this.stack.length; tU++) RU = new wU(this.buffer, RU, this.stack[tU]);
        return this.bufferNode = new wU(this.buffer, RU, this.index)
      }
      get tree() {
        return this.buffer ? null : this._tree._tree
      }
      iterate(UU, RU) {
        for (let gU = 0;;) {
          let tU = !1;
          if (this.type.isAnonymous || !1 !== UU(this)) {
            if (this.firstChild()) {
              gU++;
              continue
            }
            this.type.isAnonymous || (tU = !0)
          }
          for (;;) {
            if (tU && RU && RU(this), tU = this.type.isAnonymous, !gU) return;
            if (this.nextSibling()) break;
            this.parent(), gU--, tU = !0
          }
        }
      }
      matchContext(UU) {
        if (!this.buffer) return IU(this.node.parent, UU);
        let {
          buffer: RU
        } = this.buffer, {
          types: gU
        } = RU.set;
        for (let tU = UU.length - 1, pU = this.stack.length - 1; tU >= 0; pU--) {
          if (pU < 0) return IU(this._tree, UU, tU);
          let EU = gU[RU.buffer[this.stack[pU]]];
          if (!EU.isAnonymous) {
            if (UU[tU] && UU[tU] != EU.name) return !1;
            tU--
          }
        }
        return !0
      }
    }

    function ZU(UU) {
      return UU.children.some((UU => UU instanceof QU || !UU.type.isAnonymous || ZU(UU)))
    }
    const aU = new WeakMap;

    function YU(UU, RU) {
      if (!UU.isAnonymous || RU instanceof QU || RU.type != UU) return 1;
      let gU = aU.get(RU);
      if (null == gU) {
        gU = 1;
        for (let tU of RU.children) {
          if (tU.type != UU || !(tU instanceof CU)) {
            gU = 1;
            break
          }
          gU += YU(UU, tU)
        }
        aU.set(RU, gU)
      }
      return gU
    }

    function BU(UU, RU, gU, tU, pU, EU, PU, TU, qU) {
      let KU = 0;
      for (let uU = tU; uU < pU; uU++) KU += YU(UU, RU[uU]);
      let cU = Math.ceil(1.5 * KU / 8),
        GU = [],
        jU = [];
      return function RU(gU, tU, pU, PU, TU) {
        for (let KU = pU; KU < PU;) {
          let pU = KU,
            uU = tU[KU],
            CU = YU(UU, gU[KU]);
          for (KU++; KU < PU; KU++) {
            let RU = YU(UU, gU[KU]);
            if (CU + RU >= cU) break;
            CU += RU
          }
          if (KU == pU + 1) {
            if (CU > cU) {
              let UU = gU[pU];
              RU(UU.children, UU.positions, 0, UU.children.length, tU[pU] + TU);
              continue
            }
            GU.push(gU[pU])
          } else {
            let RU = tU[KU - 1] + gU[KU - 1].length - uU;
            GU.push(BU(UU, gU, tU, pU, KU, uU, RU, null, qU))
          }
          jU.push(uU + TU - EU)
        }
      }(RU, gU, tU, pU, 0), (TU || qU)(GU, jU, PU)
    }
    class VU {
      constructor() {
        this.map = new WeakMap
      }
      setBuffer(UU, RU, gU) {
        let tU = this.map.get(UU);
        tU || this.map.set(UU, tU = new Map), tU.set(RU, gU)
      }
      getBuffer(UU, RU) {
        let gU = this.map.get(UU);
        return gU && gU.get(RU)
      }
      set(UU, RU) {
        UU instanceof wU ? this.setBuffer(UU.context.buffer, UU.index, RU) : UU instanceof xU && this.map.set(UU.tree, RU)
      }
      get(UU) {
        return UU instanceof wU ? this.getBuffer(UU.context.buffer, UU.index) : UU instanceof xU ? this.map.get(UU.tree) : void 0
      }
      cursorSet(UU, RU) {
        UU.buffer ? this.setBuffer(UU.buffer.buffer, UU.index, RU) : this.map.set(UU.tree, RU)
      }
      cursorGet(UU) {
        return UU.buffer ? this.getBuffer(UU.buffer.buffer, UU.index) : this.map.get(UU.tree)
      }
    }
    class rU {
      constructor(UU, RU, gU, tU) {
        let pU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          EU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.from = UU, this.to = RU, this.tree = gU, this.offset = tU, this.open = (pU ? 1 : 0) | (EU ? 2 : 0)
      }
      get openStart() {
        return (1 & this.open) > 0
      }
      get openEnd() {
        return (2 & this.open) > 0
      }
      static addTree(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          tU = [new rU(0, UU.length, UU, 0, !1, gU)];
        for (let pU of RU) pU.to > UU.length && tU.push(pU);
        return tU
      }
      static applyChanges(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
        if (!RU.length) return UU;
        let tU = [],
          pU = 1,
          EU = UU.length ? UU[0] : null;
        for (let PU = 0, TU = 0, qU = 0;; PU++) {
          let KU = PU < RU.length ? RU[PU] : null,
            cU = KU ? KU.fromA : 1e9;
          if (cU - TU >= gU)
            for (; EU && EU.from < cU;) {
              let RU = EU;
              if (TU >= RU.from || cU <= RU.to || qU) {
                let UU = Math.max(RU.from, TU) - qU,
                  gU = Math.min(RU.to, cU) - qU;
                RU = UU >= gU ? null : new rU(UU, gU, RU.tree, RU.offset + qU, PU > 0, !!KU)
              }
              if (RU && tU.push(RU), EU.to > cU) break;
              EU = pU < UU.length ? UU[pU++] : null
            }
          if (!KU) break;
          TU = KU.toA, qU = KU.toA - KU.toB
        }
        return tU
      }
    }
    class XU {
      startParse(UU, RU, gU) {
        return "string" == typeof UU && (UU = new vU(UU)), gU = gU ? gU.length ? gU.map((UU => new EU(UU.from, UU.to))) : [new EU(0, 0)] : [new EU(0, UU.length)], this.createParse(UU, RU || [], gU)
      }
      parse(UU, RU, gU) {
        let tU = this.startParse(UU, RU, gU);
        for (;;) {
          let UU = tU.advance();
          if (UU) return UU
        }
      }
    }
    class vU {
      constructor(UU) {
        this.string = UU
      }
      get length() {
        return this.string.length
      }
      chunk(UU) {
        return this.string.slice(UU)
      }
      get lineChunks() {
        return !1
      }
      read(UU, RU) {
        return this.string.slice(UU, RU)
      }
    }
    new PU({
      perNode: !0
    })
  },
  40739: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => jU,
      e: () => qU,
      g: () => GU,
      j: () => aU
    });
    var tU = gU(40734);
    let pU = 0;
    class EU {
      constructor(UU, RU, gU, tU) {
        this.name = UU, this.set = RU, this.base = gU, this.modified = tU, this.id = pU++
      }
      toString() {
        let {
          name: UU
        } = this;
        for (let RU of this.modified) RU.name && (UU = `${RU.name}(${UU})`);
        return UU
      }
      static define(UU, RU) {
        let gU = "string" == typeof UU ? UU : "?";
        if (UU instanceof EU && (RU = UU), null === RU || void 0 === RU ? void 0 : RU.base) throw new Error("Can not derive from a modified tag");
        let tU = new EU(gU, [], null, []);
        if (tU.set.push(tU), RU)
          for (let pU of RU.set) tU.set.push(pU);
        return tU
      }
      static defineModifier(UU) {
        let RU = new TU(UU);
        return UU => UU.modified.indexOf(RU) > -1 ? UU : TU.get(UU.base || UU, UU.modified.concat(RU).sort(((UU, RU) => UU.id - RU.id)))
      }
    }
    let PU = 0;
    class TU {
      constructor(UU) {
        this.name = UU, this.instances = [], this.id = PU++
      }
      static get(UU, RU) {
        if (!RU.length) return UU;
        let gU = RU[0].instances.find((gU => {
          return gU.base == UU && (tU = RU, pU = gU.modified, tU.length == pU.length && tU.every(((UU, RU) => UU == pU[RU])));
          var tU, pU
        }));
        if (gU) return gU;
        let tU = [],
          pU = new EU(UU.name, tU, UU, RU);
        for (let EU of RU) EU.instances.push(pU);
        let PU = function(UU) {
          let RU = [
            []
          ];
          for (let gU = 0; gU < UU.length; gU++)
            for (let tU = 0, pU = RU.length; tU < pU; tU++) RU.push(RU[tU].concat(UU[gU]));
          return RU.sort(((UU, RU) => RU.length - UU.length))
        }(RU);
        for (let EU of UU.set)
          if (!EU.modified.length)
            for (let UU of PU) tU.push(TU.get(EU, UU));
        return pU
      }
    }

    function qU(UU) {
      let RU = Object.create(null);
      for (let gU in UU) {
        let tU = UU[gU];
        Array.isArray(tU) || (tU = [tU]);
        for (let UU of gU.split(" "))
          if (UU) {
            let gU = [],
              pU = 2,
              EU = UU;
            for (let RU = 0;;) {
              if ("..." == EU && RU > 0 && RU + 3 == UU.length) {
                pU = 1;
                break
              }
              let tU = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(EU);
              if (!tU) throw new RangeError("Invalid path: " + UU);
              if (gU.push("*" == tU[0] ? "" : '"' == tU[0][0] ? JSON.parse(tU[0]) : tU[0]), RU += tU[0].length, RU == UU.length) break;
              let PU = UU[RU++];
              if (RU == UU.length && "!" == PU) {
                pU = 0;
                break
              }
              if ("/" != PU) throw new RangeError("Invalid path: " + UU);
              EU = UU.slice(RU)
            }
            let PU = gU.length - 1,
              TU = gU[PU];
            if (!TU) throw new RangeError("Invalid path: " + UU);
            let qU = new cU(tU, pU, PU > 0 ? gU.slice(0, PU) : null);
            RU[TU] = qU.sort(RU[TU])
          }
      }
      return KU.add(RU)
    }
    const KU = new tU.i({
      combine(UU, RU) {
        let gU, tU, pU;
        for (; UU || RU;) {
          if (!UU || RU && UU.depth >= RU.depth ? (pU = RU, RU = RU.next) : (pU = UU, UU = UU.next), gU && gU.mode == pU.mode && !pU.context && !gU.context) continue;
          let EU = new cU(pU.tags, pU.mode, pU.context);
          gU ? gU.next = EU : tU = EU, gU = EU
        }
        return tU
      }
    });
    class cU {
      constructor(UU, RU, gU, tU) {
        this.tags = UU, this.mode = RU, this.context = gU, this.next = tU
      }
      get opaque() {
        return 0 == this.mode
      }
      get inherit() {
        return 1 == this.mode
      }
      sort(UU) {
        return !UU || UU.depth < this.depth ? (this.next = UU, this) : (UU.next = this.sort(UU.next), UU)
      }
      get depth() {
        return this.context ? this.context.length : 0
      }
    }

    function GU(UU, RU) {
      let gU = Object.create(null);
      for (let EU of UU)
        if (Array.isArray(EU.tag))
          for (let UU of EU.tag) gU[UU.id] = EU.class;
        else gU[EU.tag.id] = EU.class;
      let {
        scope: tU,
        all: pU = null
      } = RU || {};
      return {
        style: UU => {
          let RU = pU;
          for (let tU of UU)
            for (let UU of tU.set) {
              let tU = gU[UU.id];
              if (tU) {
                RU = RU ? RU + " " + tU : tU;
                break
              }
            }
          return RU
        },
        scope: tU
      }
    }

    function jU(UU, RU, gU) {
      let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : UU.length,
        EU = new uU(tU, Array.isArray(RU) ? RU : [RU], gU);
      EU.highlightRange(UU.cursor(), tU, pU, "", EU.highlighters), EU.flush(pU)
    }
    cU.empty = new cU([], 2, null);
    class uU {
      constructor(UU, RU, gU) {
        this.at = UU, this.highlighters = RU, this.span = gU, this.class = ""
      }
      startSpan(UU, RU) {
        RU != this.class && (this.flush(UU), UU > this.at && (this.at = UU), this.class = RU)
      }
      flush(UU) {
        UU > this.at && this.class && this.span(this.at, UU, this.class)
      }
      highlightRange(UU, RU, gU, pU, EU) {
        let {
          type: PU,
          from: TU,
          to: qU
        } = UU;
        if (TU >= gU || qU <= RU) return;
        PU.isTop && (EU = this.highlighters.filter((UU => !UU.scope || UU.scope(PU))));
        let GU = pU,
          jU = function(UU) {
            let RU = UU.type.prop(KU);
            for (; RU && RU.context && !UU.matchContext(RU.context);) RU = RU.next;
            return RU || null
          }(UU) || cU.empty,
          uU = function(UU, RU) {
            let gU = null;
            for (let tU of UU) {
              let UU = tU.style(RU);
              UU && (gU = gU ? gU + " " + UU : UU)
            }
            return gU
          }(EU, jU.tags);
        if (uU && (GU && (GU += " "), GU += uU, 1 == jU.mode && (pU += (pU ? " " : "") + uU)), this.startSpan(Math.max(RU, TU), GU), jU.opaque) return;
        let CU = UU.tree && UU.tree.prop(tU.i.mounted);
        if (CU && CU.overlay) {
          let tU = UU.node.enter(CU.overlay[0].from + TU, 1),
            PU = this.highlighters.filter((UU => !UU.scope || UU.scope(CU.tree.type))),
            KU = UU.firstChild();
          for (let cU = 0, jU = TU;; cU++) {
            let uU = cU < CU.overlay.length ? CU.overlay[cU] : null,
              hU = uU ? uU.from + TU : qU,
              QU = Math.max(RU, jU),
              eU = Math.min(gU, hU);
            if (QU < eU && KU)
              for (; UU.from < eU && (this.highlightRange(UU, QU, eU, pU, EU), this.startSpan(Math.min(eU, UU.to), GU), !(UU.to >= hU) && UU.nextSibling()););
            if (!uU || hU > gU) break;
            jU = uU.to + TU, jU > RU && (this.highlightRange(tU.cursor(), Math.max(RU, uU.from + TU), Math.min(gU, jU), "", PU), this.startSpan(Math.min(gU, jU), GU))
          }
          KU && UU.parent()
        } else if (UU.firstChild()) {
          CU && (pU = "");
          do {
            if (!(UU.to <= RU)) {
              if (UU.from >= gU) break;
              this.highlightRange(UU, RU, gU, pU, EU), this.startSpan(Math.min(gU, UU.to), GU)
            }
          } while (UU.nextSibling());
          UU.parent()
        }
      }
    }
    const CU = EU.define,
      hU = CU(),
      QU = CU(),
      eU = CU(QU),
      WU = CU(QU),
      fU = CU(),
      xU = CU(fU),
      mU = CU(fU),
      IU = CU(),
      JU = CU(IU),
      wU = CU(),
      nU = CU(),
      bU = CU(),
      oU = CU(bU),
      ZU = CU(),
      aU = {
        comment: hU,
        lineComment: CU(hU),
        blockComment: CU(hU),
        docComment: CU(hU),
        name: QU,
        variableName: CU(QU),
        typeName: eU,
        tagName: CU(eU),
        propertyName: WU,
        attributeName: CU(WU),
        className: CU(QU),
        labelName: CU(QU),
        namespace: CU(QU),
        macroName: CU(QU),
        literal: fU,
        string: xU,
        docString: CU(xU),
        character: CU(xU),
        attributeValue: CU(xU),
        number: mU,
        integer: CU(mU),
        float: CU(mU),
        bool: CU(fU),
        regexp: CU(fU),
        escape: CU(fU),
        color: CU(fU),
        url: CU(fU),
        keyword: wU,
        self: CU(wU),
        null: CU(wU),
        atom: CU(wU),
        unit: CU(wU),
        modifier: CU(wU),
        operatorKeyword: CU(wU),
        controlKeyword: CU(wU),
        definitionKeyword: CU(wU),
        moduleKeyword: CU(wU),
        operator: nU,
        derefOperator: CU(nU),
        arithmeticOperator: CU(nU),
        logicOperator: CU(nU),
        bitwiseOperator: CU(nU),
        compareOperator: CU(nU),
        updateOperator: CU(nU),
        definitionOperator: CU(nU),
        typeOperator: CU(nU),
        controlOperator: CU(nU),
        punctuation: bU,
        separator: CU(bU),
        bracket: oU,
        angleBracket: CU(oU),
        squareBracket: CU(oU),
        paren: CU(oU),
        brace: CU(oU),
        content: IU,
        heading: JU,
        heading1: CU(JU),
        heading2: CU(JU),
        heading3: CU(JU),
        heading4: CU(JU),
        heading5: CU(JU),
        heading6: CU(JU),
        contentSeparator: CU(IU),
        list: CU(IU),
        quote: CU(IU),
        emphasis: CU(IU),
        strong: CU(IU),
        link: CU(IU),
        monospace: CU(IU),
        strikethrough: CU(IU),
        inserted: CU(),
        deleted: CU(),
        changed: CU(),
        invalid: CU(),
        meta: ZU,
        documentMeta: CU(ZU),
        annotation: CU(ZU),
        processingInstruction: CU(ZU),
        definition: EU.defineModifier("definition"),
        constant: EU.defineModifier("constant"),
        function: EU.defineModifier("function"),
        standard: EU.defineModifier("standard"),
        local: EU.defineModifier("local"),
        special: EU.defineModifier("special")
      };
    for (let YU in aU) {
      let UU = aU[YU];
      UU instanceof EU && (UU.name = YU)
    }
    GU([{
      tag: aU.link,
      class: "tok-link"
    }, {
      tag: aU.heading,
      class: "tok-heading"
    }, {
      tag: aU.emphasis,
      class: "tok-emphasis"
    }, {
      tag: aU.strong,
      class: "tok-strong"
    }, {
      tag: aU.keyword,
      class: "tok-keyword"
    }, {
      tag: aU.atom,
      class: "tok-atom"
    }, {
      tag: aU.bool,
      class: "tok-bool"
    }, {
      tag: aU.url,
      class: "tok-url"
    }, {
      tag: aU.labelName,
      class: "tok-labelName"
    }, {
      tag: aU.inserted,
      class: "tok-inserted"
    }, {
      tag: aU.deleted,
      class: "tok-deleted"
    }, {
      tag: aU.literal,
      class: "tok-literal"
    }, {
      tag: aU.string,
      class: "tok-string"
    }, {
      tag: aU.number,
      class: "tok-number"
    }, {
      tag: [aU.regexp, aU.escape, aU.special(aU.string)],
      class: "tok-string2"
    }, {
      tag: aU.variableName,
      class: "tok-variableName"
    }, {
      tag: aU.local(aU.variableName),
      class: "tok-variableName tok-local"
    }, {
      tag: aU.definition(aU.variableName),
      class: "tok-variableName tok-definition"
    }, {
      tag: aU.special(aU.variableName),
      class: "tok-variableName2"
    }, {
      tag: aU.definition(aU.propertyName),
      class: "tok-propertyName tok-definition"
    }, {
      tag: aU.typeName,
      class: "tok-typeName"
    }, {
      tag: aU.namespace,
      class: "tok-namespace"
    }, {
      tag: aU.className,
      class: "tok-className"
    }, {
      tag: aU.macroName,
      class: "tok-macroName"
    }, {
      tag: aU.propertyName,
      class: "tok-propertyName"
    }, {
      tag: aU.operator,
      class: "tok-operator"
    }, {
      tag: aU.comment,
      class: "tok-comment"
    }, {
      tag: aU.meta,
      class: "tok-meta"
    }, {
      tag: aU.invalid,
      class: "tok-invalid"
    }, {
      tag: aU.punctuation,
      class: "tok-punctuation"
    }])
  },
  40751: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => TU.h,
      h: () => PU.s,
      j: () => PU.A,
      m: () => PU.C,
      q: () => TU.l,
      r: () => Jg,
      t: () => TU.M,
      w: () => TU.bb
    });
    var tU = gU(1357),
      pU = gU(1349),
      EU = gU(56),
      PU = gU(40700),
      TU = gU(40707),
      qU = gU(40728),
      KU = gU(40734);

    function cU(UU, RU) {
      return gU => {
        let {
          state: tU,
          dispatch: pU
        } = gU;
        if (tU.readOnly) return !1;
        let EU = UU(RU, tU);
        return !!EU && (pU(tU.update(EU)), !0)
      }
    }
    const GU = cU(eU, 0),
      jU = cU(QU, 0),
      uU = cU(((UU, RU) => QU(UU, RU, function(UU) {
        let RU = [];
        for (let gU of UU.selection.hu) {
          let tU = UU.doc.lineAt(gU.from),
            pU = gU.to <= tU.to ? tU : UU.doc.lineAt(gU.to);
          pU.from > tU.from && pU.from == gU.to && (pU = gU.to == tU.to + 1 ? tU : UU.doc.lineAt(gU.to - 1));
          let EU = RU.length - 1;
          EU >= 0 && RU[EU].to > tU.from ? RU[EU].to = pU.to : RU.push({
            from: tU.from + /^\s*/.exec(tU.text)[0].length,
            to: pU.to
          })
        }
        return RU
      }(RU))), 0);

    function CU(UU, RU) {
      let gU = UU.languageDataAt("commentTokens", RU, 1);
      return gU.length ? gU[0] : {}
    }
    const hU = 50;

    function QU(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : RU.selection.hu,
        tU = gU.map((UU => CU(RU, UU.from).block));
      if (!tU.every((UU => UU))) return null;
      let pU = gU.map(((UU, gU) => function(UU, RU, gU, tU) {
        let pU, EU, {
            open: PU,
            close: TU
          } = RU,
          qU = UU.sliceDoc(gU - hU, gU),
          KU = UU.sliceDoc(tU, tU + hU),
          cU = /\s*$/.exec(qU)[0].length,
          GU = /^\s*/.exec(KU)[0].length,
          jU = qU.length - cU;
        if (qU.slice(jU - PU.length, jU) == PU && KU.slice(GU, GU + TU.length) == TU) return {
          open: {
            pos: gU - cU,
            margin: cU && 1
          },
          close: {
            pos: tU + GU,
            margin: GU && 1
          }
        };
        tU - gU <= 2 * hU ? pU = EU = UU.sliceDoc(gU, tU) : (pU = UU.sliceDoc(gU, gU + hU), EU = UU.sliceDoc(tU - hU, tU));
        let uU = /^\s*/.exec(pU)[0].length,
          CU = /\s*$/.exec(EU)[0].length,
          QU = EU.length - CU - TU.length;
        return pU.slice(uU, uU + PU.length) == PU && EU.slice(QU, QU + TU.length) == TU ? {
          open: {
            pos: gU + uU + PU.length,
            margin: /\s/.test(pU.charAt(uU + PU.length)) ? 1 : 0
          },
          close: {
            pos: tU - CU - TU.length,
            margin: /\s/.test(EU.charAt(QU - 1)) ? 1 : 0
          }
        } : null
      }(RU, tU[gU], UU.from, UU.to)));
      if (2 != UU && !pU.every((UU => UU))) return {
        changes: RU.changes(gU.map(((UU, RU) => pU[RU] ? [] : [{
          from: UU.from,
          insert: tU[RU].open + " "
        }, {
          from: UU.to,
          insert: " " + tU[RU].close
        }])))
      };
      if (1 != UU && pU.some((UU => UU))) {
        let UU = [];
        for (let RU, gU = 0; gU < pU.length; gU++)
          if (RU = pU[gU]) {
            let pU = tU[gU],
              {
                open: EU,
                close: PU
              } = RU;
            UU.push({
              from: EU.pos - pU.open.length,
              to: EU.pos + EU.margin
            }, {
              from: PU.pos - PU.margin,
              to: PU.pos + pU.close.length
            })
          } return {
          changes: UU
        }
      }
      return null
    }

    function eU(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : RU.selection.hu,
        tU = [],
        pU = -1;
      UU: for (let {
          from: EU,
          to: PU
        }
        of gU) {
        let UU, gU = tU.length,
          TU = 1e9;
        for (let qU = EU; qU <= PU;) {
          let gU = RU.doc.lineAt(qU);
          if (void 0 == UU && (UU = CU(RU, gU.from).line, !UU)) continue UU;
          if (gU.from > pU && (EU == PU || PU > gU.from)) {
            pU = gU.from;
            let RU = /^\s*/.exec(gU.text)[0].length,
              EU = RU == gU.length,
              PU = gU.text.slice(RU, RU + UU.length) == UU ? RU : -1;
            RU < gU.text.length && RU < TU && (TU = RU), tU.push({
              line: gU,
              comment: PU,
              token: UU,
              indent: RU,
              empty: EU,
              single: !1
            })
          }
          qU = gU.to + 1
        }
        if (TU < 1e9)
          for (let RU = gU; RU < tU.length; RU++) tU[RU].indent < tU[RU].line.text.length && (tU[RU].indent = TU);
        tU.length == gU + 1 && (tU[gU].single = !0)
      }
      if (2 != UU && tU.some((UU => UU.comment < 0 && (!UU.empty || UU.single)))) {
        let UU = [];
        for (let {
            line: RU,
            token: pU,
            indent: EU,
            empty: PU,
            single: TU
          }
          of tU) !TU && PU || UU.push({
          from: RU.from + EU,
          insert: pU + " "
        });
        let gU = RU.changes(UU);
        return {
          changes: gU,
          selection: RU.selection.map(gU, 1)
        }
      }
      if (1 != UU && tU.some((UU => UU.comment >= 0))) {
        let UU = [];
        for (let {
            line: RU,
            comment: gU,
            token: pU
          }
          of tU)
          if (gU >= 0) {
            let tU = RU.from + gU,
              EU = tU + pU.length;
            " " == RU.text[EU - RU.from] && EU++, UU.push({
              from: tU,
              to: EU
            })
          } return {
          changes: UU
        }
      }
      return null
    }
    const WU = PU.d.define(),
      fU = PU.d.define(),
      xU = PU.p.define(),
      mU = PU.p.define({
        combine: UU => (0, PU.N)(UU, {
          minDepth: 100,
          newGroupDelay: 500,
          joinToEvent: (UU, RU) => RU
        }, {
          minDepth: Math.max,
          newGroupDelay: Math.min,
          joinToEvent: (UU, RU) => (gU, tU) => UU(gU, tU) || RU(gU, tU)
        })
      }),
      IU = PU.C.define({
        create: () => SU.empty,
        update(UU, RU) {
          let gU = RU.state.facet(mU),
            tU = RU.annotation(WU);
          if (tU) {
            let pU = ZU.fromTransaction(RU, tU.selection),
              EU = tU.side,
              PU = 0 == EU ? UU.undone : UU.done;
            return PU = pU ? aU(PU, PU.length, gU.minDepth, pU) : rU(PU, RU.startState.selection), new SU(0 == EU ? tU.rest : PU, 0 == EU ? PU : tU.rest)
          }
          let pU = RU.annotation(fU);
          if ("full" != pU && "before" != pU || (UU = UU.isolate()), !1 === RU.annotation(PU.G.addToHistory)) return RU.changes.empty ? UU : UU.addMapping(RU.changes.desc);
          let EU = ZU.fromTransaction(RU),
            TU = RU.annotation(PU.G.time),
            qU = RU.annotation(PU.G.userEvent);
          return EU ? UU = UU.addChanges(EU, TU, qU, gU, RU) : RU.selection && (UU = UU.addSelection(RU.startState.selection, TU, qU, gU.newGroupDelay)), "full" != pU && "after" != pU || (UU = UU.isolate()), UU
        },
        toJSON: UU => ({
          done: UU.done.map((UU => UU.toJSON())),
          undone: UU.undone.map((UU => UU.toJSON()))
        }),
        fromJSON: UU => new SU(UU.done.map(ZU.fromJSON), UU.undone.map(ZU.fromJSON))
      });

    function JU(UU, RU) {
      return function(gU) {
        let {
          state: tU,
          dispatch: pU
        } = gU;
        if (!RU && tU.readOnly) return !1;
        let EU = tU.field(IU, !1);
        if (!EU) return !1;
        let PU = EU.pop(UU, tU, RU);
        return !!PU && (pU(PU), !0)
      }
    }
    const wU = JU(0, !1),
      nU = JU(1, !1),
      bU = JU(0, !0),
      oU = JU(1, !0);
    class ZU {
      constructor(UU, RU, gU, tU, pU) {
        this.changes = UU, this.effects = RU, this.mapped = gU, this.startSelection = tU, this.selectionsAfter = pU
      }
      setSelAfter(UU) {
        return new ZU(this.changes, this.effects, this.mapped, this.startSelection, UU)
      }
      toJSON() {
        var UU, RU, gU;
        return {
          changes: null === (UU = this.changes) || void 0 === UU ? void 0 : UU.toJSON(),
          mapped: null === (RU = this.mapped) || void 0 === RU ? void 0 : RU.toJSON(),
          startSelection: null === (gU = this.startSelection) || void 0 === gU ? void 0 : gU.toJSON(),
          selectionsAfter: this.selectionsAfter.map((UU => UU.toJSON()))
        }
      }
      static fromJSON(UU) {
        return new ZU(UU.changes && PU.ChangeSet.fromJSON(UU.changes), [], UU.mapped && PU.e.fromJSON(UU.mapped), UU.startSelection && PU.k.fromJSON(UU.startSelection), UU.selectionsAfter.map(PU.k.fromJSON))
      }
      static fromTransaction(UU, RU) {
        let gU = BU;
        for (let tU of UU.startState.facet(xU)) {
          let RU = tU(UU);
          RU.length && (gU = gU.concat(RU))
        }
        return !gU.length && UU.changes.empty ? null : new ZU(UU.changes.invert(UU.startState.doc), gU, void 0, RU || UU.startState.selection, BU)
      }
      static selection(UU) {
        return new ZU(void 0, BU, void 0, void 0, UU)
      }
    }

    function aU(UU, RU, gU, tU) {
      let pU = RU + 1 > gU + 20 ? RU - gU - 1 : 0,
        EU = UU.slice(pU, RU);
      return EU.push(tU), EU
    }

    function YU(UU, RU) {
      return UU.length ? RU.length ? UU.concat(RU) : UU : RU
    }
    const BU = [],
      VU = 200;

    function rU(UU, RU) {
      if (UU.length) {
        let gU = UU[UU.length - 1],
          tU = gU.selectionsAfter.slice(Math.max(0, gU.selectionsAfter.length - VU));
        return tU.length && tU[tU.length - 1].eq(RU) ? UU : (tU.push(RU), aU(UU, UU.length - 1, 1e9, gU.setSelAfter(tU)))
      }
      return [ZU.selection([RU])]
    }

    function XU(UU) {
      let RU = UU[UU.length - 1],
        gU = UU.slice();
      return gU[UU.length - 1] = RU.setSelAfter(RU.selectionsAfter.slice(0, RU.selectionsAfter.length - 1)), gU
    }

    function vU(UU, RU) {
      if (!UU.length) return UU;
      let gU = UU.length,
        tU = BU;
      for (; gU;) {
        let pU = dU(UU[gU - 1], RU, tU);
        if (pU.changes && !pU.changes.empty || pU.effects.length) {
          let RU = UU.slice(0, gU);
          return RU[gU - 1] = pU, RU
        }
        RU = pU.mapped, gU--, tU = pU.selectionsAfter
      }
      return tU.length ? [ZU.selection(tU)] : BU
    }

    function dU(UU, RU, gU) {
      let tU = YU(UU.selectionsAfter.length ? UU.selectionsAfter.map((UU => UU.map(RU))) : BU, gU);
      if (!UU.changes) return ZU.selection(tU);
      let pU = UU.changes.map(RU),
        EU = RU.mapDesc(UU.changes, !0),
        TU = UU.mapped ? UU.mapped.composeDesc(EU) : EU;
      return new ZU(pU, PU.A.mapEffects(UU.effects, RU), TU, UU.startSelection.map(EU), tU)
    }
    const HU = /^(input\.type|delete)($|\.)/;
    class SU {
      constructor(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        this.done = UU, this.undone = RU, this.prevTime = gU, this.prevUserEvent = tU
      }
      isolate() {
        return this.prevTime ? new SU(this.done, this.undone) : this
      }
      addChanges(UU, RU, gU, tU, pU) {
        let EU = this.done,
          TU = EU[EU.length - 1];
        return EU = TU && TU.changes && !TU.changes.empty && UU.changes && (!gU || HU.test(gU)) && (!TU.selectionsAfter.length && RU - this.prevTime < tU.newGroupDelay && tU.joinToEvent(pU, function(UU, RU) {
          let gU = [],
            tU = !1;
          return UU.iterChangedRanges(((UU, RU) => gU.push(UU, RU))), RU.iterChangedRanges(((UU, RU, pU, EU) => {
            for (let PU = 0; PU < gU.length;) {
              let UU = gU[PU++],
                RU = gU[PU++];
              EU >= UU && pU <= RU && (tU = !0)
            }
          })), tU
        }(TU.changes, UU.changes)) || "input.type.compose" == gU) ? aU(EU, EU.length - 1, tU.minDepth, new ZU(UU.changes.compose(TU.changes), YU(PU.A.mapEffects(UU.effects, TU.changes), TU.effects), TU.mapped, TU.startSelection, BU)) : aU(EU, EU.length, tU.minDepth, UU), new SU(EU, BU, RU, gU)
      }
      addSelection(UU, RU, gU, tU) {
        let pU = this.done.length ? this.done[this.done.length - 1].selectionsAfter : BU;
        return pU.length > 0 && RU - this.prevTime < tU && gU == this.prevUserEvent && gU && /^select($|\.)/.test(gU) && (EU = pU[pU.length - 1], PU = UU, EU.hu.length == PU.hu.length && 0 === EU.hu.filter(((UU, RU) => UU.empty != PU.hu[RU].empty)).length) ? this : new SU(rU(this.done, UU), this.undone, RU, gU);
        var EU, PU
      }
      addMapping(UU) {
        return new SU(vU(this.done, UU), vU(this.undone, UU), this.prevTime, this.prevUserEvent)
      }
      pop(UU, RU, gU) {
        let tU = 0 == UU ? this.done : this.undone;
        if (0 == tU.length) return null;
        let pU = tU[tU.length - 1],
          EU = pU.selectionsAfter[0] || (pU.startSelection ? pU.startSelection.map(pU.changes.invertedDesc, 1) : RU.selection);
        if (gU && pU.selectionsAfter.length) return RU.update({
          selection: pU.selectionsAfter[pU.selectionsAfter.length - 1],
          annotations: WU.of({
            side: UU,
            rest: XU(tU),
            selection: EU
          }),
          userEvent: 0 == UU ? "select.undo" : "select.redo",
          scrollIntoView: !0
        });
        if (pU.changes) {
          let gU = 1 == tU.length ? BU : tU.slice(0, tU.length - 1);
          return pU.mapped && (gU = vU(gU, pU.mapped)), RU.update({
            changes: pU.changes,
            selection: pU.startSelection,
            effects: pU.effects,
            annotations: WU.of({
              side: UU,
              rest: gU,
              selection: EU
            }),
            filter: !1,
            userEvent: 0 == UU ? "undo" : "redo",
            scrollIntoView: !0
          })
        }
        return null
      }
    }
    SU.empty = new SU(BU, BU);
    const sU = [{
      key: "Mod-z",
      run: wU,
      preventDefault: !0
    }, {
      key: "Mod-y",
      mac: "Mod-Shift-z",
      run: nU,
      preventDefault: !0
    }, {
      linux: "Ctrl-Shift-z",
      run: nU,
      preventDefault: !0
    }, {
      key: "Mod-u",
      run: bU,
      preventDefault: !0
    }, {
      key: "Alt-u",
      mac: "Mod-Shift-u",
      run: oU,
      preventDefault: !0
    }];

    function yU(UU, RU) {
      return PU.k.create(UU.hu.map(RU), UU.mainIndex)
    }

    function kU(UU, RU) {
      return UU.update({
        selection: RU,
        scrollIntoView: !0,
        userEvent: "select"
      })
    }

    function FU(UU, RU) {
      let {
        state: gU,
        dispatch: tU
      } = UU, pU = yU(gU.selection, RU);
      return !pU.eq(gU.selection, !0) && (tU(kU(gU, pU)), !0)
    }

    function iU(UU, RU) {
      return PU.k.cursor(RU ? UU.to : UU.from)
    }

    function AU(UU, RU) {
      return FU(UU, (gU => gU.empty ? UU.moveByChar(gU, RU) : iU(gU, RU)))
    }

    function zU(UU) {
      return UU.textDirectionAt(UU.state.selection.main.head) == TU.d.LTR
    }
    const MU = UU => AU(UU, !zU(UU)),
      DU = UU => AU(UU, zU(UU));

    function LU(UU, RU) {
      return FU(UU, (gU => gU.empty ? UU.moveByGroup(gU, RU) : iU(gU, RU)))
    }
    "undefined" != typeof Intl && Intl.Segmenter;

    function NU(UU, RU, gU) {
      if (RU.type.prop(gU)) return !0;
      let tU = RU.to - RU.from;
      return tU && (tU > 2 || /[^\s,.;:]/.test(UU.sliceDoc(RU.from, RU.to))) || RU.firstChild
    }

    function lU(UU, RU, gU) {
      let tU, pU, EU = (0, qU.sb)(UU).resolveInner(RU.head),
        TU = gU ? KU.i.closedBy : KU.i.openedBy;
      for (let PU = RU.head;;) {
        let RU = gU ? EU.childAfter(PU) : EU.childBefore(PU);
        if (!RU) break;
        NU(UU, RU, TU) ? EU = RU : PU = gU ? RU.to : RU.from
      }
      return pU = EU.type.prop(TU) && (tU = gU ? (0, qU.fb)(UU, EU.from, 1) : (0, qU.fb)(UU, EU.to, -1)) && tU.matched ? gU ? tU.end.to : tU.end.from : gU ? EU.to : EU.from, PU.k.cursor(pU, gU ? -1 : 1)
    }

    function OU(UU, RU) {
      return FU(UU, (gU => {
        if (!gU.empty) return iU(gU, RU);
        let tU = UU.moveVertically(gU, RU);
        return tU.head != gU.head ? tU : UU.moveToLineBoundary(gU, RU)
      }))
    }
    const UR = UU => OU(UU, !1),
      RR = UU => OU(UU, !0);

    function gR(UU) {
      let RU, gU = UU.scrollDOM.clientHeight < UU.scrollDOM.scrollHeight - 2,
        tU = 0,
        pU = 0;
      if (gU) {
        for (let RU of UU.state.facet(TU.h.scrollMargins)) {
          let gU = RU(UU);
          (null === gU || void 0 === gU ? void 0 : gU.top) && (tU = Math.max(null === gU || void 0 === gU ? void 0 : gU.top, tU)), (null === gU || void 0 === gU ? void 0 : gU.bottom) && (pU = Math.max(null === gU || void 0 === gU ? void 0 : gU.bottom, pU))
        }
        RU = UU.scrollDOM.clientHeight - tU - pU
      } else RU = (UU.dom.ownerDocument.defaultView || window).innerHeight;
      return {
        marginTop: tU,
        marginBottom: pU,
        selfScroll: gU,
        height: Math.max(UU.defaultLineHeight, RU - 5)
      }
    }

    function tR(UU, RU) {
      let gU, tU = gR(UU),
        {
          state: pU
        } = UU,
        EU = yU(pU.selection, (gU => gU.empty ? UU.moveVertically(gU, RU, tU.height) : iU(gU, RU)));
      if (EU.eq(pU.selection)) return !1;
      if (tU.selfScroll) {
        let RU = UU.coordsAtPos(pU.selection.main.head),
          PU = UU.scrollDOM.getBoundingClientRect(),
          qU = PU.top + tU.marginTop,
          KU = PU.bottom - tU.marginBottom;
        RU && RU.top > qU && RU.bottom < KU && (gU = TU.h.scrollIntoView(EU.main.head, {
          y: "start",
          yMargin: RU.top - qU
        }))
      }
      return UU.dispatch(kU(pU, EU), {
        effects: gU
      }), !0
    }
    const pR = UU => tR(UU, !1),
      ER = UU => tR(UU, !0);

    function PR(UU, RU, gU) {
      let tU = UU.lineBlockAt(RU.head),
        pU = UU.moveToLineBoundary(RU, gU);
      if (pU.head == RU.head && pU.head != (gU ? tU.to : tU.from) && (pU = UU.moveToLineBoundary(RU, gU, !1)), !gU && pU.head == tU.from && tU.length) {
        let gU = /^\s*/.exec(UU.state.sliceDoc(tU.from, Math.min(tU.from + 100, tU.to)))[0].length;
        gU && RU.head != tU.from + gU && (pU = PU.k.cursor(tU.from + gU))
      }
      return pU
    }

    function TR(UU, RU, gU) {
      let tU = !1,
        pU = yU(UU.selection, (RU => {
          let pU = (0, qU.fb)(UU, RU.head, -1) || (0, qU.fb)(UU, RU.head, 1) || RU.head > 0 && (0, qU.fb)(UU, RU.head - 1, 1) || RU.head < UU.doc.length && (0, qU.fb)(UU, RU.head + 1, -1);
          if (!pU || !pU.end) return RU;
          tU = !0;
          let EU = pU.start.from == RU.head ? pU.end.to : pU.end.from;
          return gU ? PU.k.range(RU.anchor, EU) : PU.k.cursor(EU)
        }));
      return !!tU && (RU(kU(UU, pU)), !0)
    }

    function qR(UU, RU) {
      let gU = yU(UU.state.selection, (UU => {
        let gU = RU(UU);
        return PU.k.range(UU.anchor, gU.head, gU.goalColumn, gU.bidiLevel || void 0, gU.assoc)
      }));
      return !gU.eq(UU.state.selection) && (UU.dispatch(kU(UU.state, gU)), !0)
    }

    function KR(UU, RU) {
      return qR(UU, (gU => UU.moveByChar(gU, RU)))
    }
    const cR = UU => KR(UU, !zU(UU)),
      GR = UU => KR(UU, zU(UU));

    function jR(UU, RU) {
      return qR(UU, (gU => UU.moveByGroup(gU, RU)))
    }

    function uR(UU, RU) {
      return qR(UU, (gU => UU.moveVertically(gU, RU)))
    }
    const CR = UU => uR(UU, !1),
      hR = UU => uR(UU, !0);

    function QR(UU, RU) {
      return qR(UU, (gU => UU.moveVertically(gU, RU, gR(UU).height)))
    }
    const eR = UU => QR(UU, !1),
      WR = UU => QR(UU, !0),
      fR = UU => {
        let {
          state: RU,
          dispatch: gU
        } = UU;
        return gU(kU(RU, {
          anchor: 0
        })), !0
      },
      xR = UU => {
        let {
          state: RU,
          dispatch: gU
        } = UU;
        return gU(kU(RU, {
          anchor: RU.doc.length
        })), !0
      },
      mR = UU => {
        let {
          state: RU,
          dispatch: gU
        } = UU;
        return gU(kU(RU, {
          anchor: RU.selection.main.anchor,
          head: 0
        })), !0
      },
      IR = UU => {
        let {
          state: RU,
          dispatch: gU
        } = UU;
        return gU(kU(RU, {
          anchor: RU.selection.main.anchor,
          head: RU.doc.length
        })), !0
      };

    function JR(UU, RU) {
      let {
        state: gU
      } = UU, tU = gU.selection, pU = gU.selection.hu.slice();
      for (let EU of gU.selection.hu) {
        let tU = gU.doc.lineAt(EU.head);
        if (RU ? tU.to < UU.state.doc.length : tU.from > 0)
          for (let gU = EU;;) {
            let EU = UU.moveVertically(gU, RU);
            if (EU.head < tU.from || EU.head > tU.to) {
              pU.some((UU => UU.head == EU.head)) || pU.push(EU);
              break
            }
            if (EU.head == gU.head) break;
            gU = EU
          }
      }
      return pU.length != tU.hu.length && (UU.dispatch(kU(gU, PU.k.create(pU, pU.length - 1))), !0)
    }

    function wR(UU, RU) {
      if (UU.state.readOnly) return !1;
      let gU = "delete.selection",
        {
          state: tU
        } = UU,
        pU = tU.changeByRange((tU => {
          let {
            from: pU,
            to: EU
          } = tU;
          if (pU == EU) {
            let PU = RU(tU);
            PU < pU ? (gU = "delete.backward", PU = nR(UU, PU, !1)) : PU > pU && (gU = "delete.forward", PU = nR(UU, PU, !0)), pU = Math.min(pU, PU), EU = Math.max(EU, PU)
          } else pU = nR(UU, pU, !1), EU = nR(UU, EU, !0);
          return pU == EU ? {
            range: tU
          } : {
            changes: {
              from: pU,
              to: EU
            },
            range: PU.k.cursor(pU, pU < tU.head ? -1 : 1)
          }
        }));
      return !pU.changes.empty && (UU.dispatch(tU.update(pU, {
        scrollIntoView: !0,
        userEvent: gU,
        effects: "delete.selection" == gU ? TU.h.announce.of(tU.phrase("Selection deleted")) : void 0
      })), !0)
    }

    function nR(UU, RU, gU) {
      if (UU instanceof TU.h)
        for (let tU of UU.state.facet(TU.h.atomicRanges).map((RU => RU(UU)))) tU.between(RU, RU, ((UU, tU) => {
          UU < RU && tU > RU && (RU = gU ? tU : UU)
        }));
      return RU
    }
    const bR = (UU, RU, gU) => wR(UU, (tU => {
        let pU, EU, TU = tU.from,
          {
            state: KU
          } = UU,
          cU = KU.doc.lineAt(TU);
        if (gU && !RU && TU > cU.from && TU < cU.from + 200 && !/[^ \t]/.test(pU = cU.text.slice(0, TU - cU.from))) {
          if ("\t" == pU[pU.length - 1]) return TU - 1;
          let UU = (0, PU.R)(pU, KU.tabSize) % (0, qU.R)(KU) || (0, qU.R)(KU);
          for (let RU = 0; RU < UU && " " == pU[pU.length - 1 - RU]; RU++) TU--;
          EU = TU
        } else EU = (0, PU.V)(cU.text, TU - cU.from, RU, RU) + cU.from, EU == TU && cU.number != (RU ? KU.doc.lines : 1) ? EU += RU ? 1 : -1 : !RU && /[\ufe00-\ufe0f]/.test(cU.text.slice(EU - cU.from, TU - cU.from)) && (EU = (0, PU.V)(cU.text, EU - cU.from, !1, !1) + cU.from);
        return EU
      })),
      oR = UU => bR(UU, !1, !0),
      ZR = UU => bR(UU, !0, !1),
      aR = (UU, RU) => wR(UU, (gU => {
        let tU = gU.head,
          {
            state: pU
          } = UU,
          EU = pU.doc.lineAt(tU),
          TU = pU.charCategorizer(tU);
        for (let UU = null;;) {
          if (tU == (RU ? EU.to : EU.from)) {
            tU == gU.head && EU.number != (RU ? pU.doc.lines : 1) && (tU += RU ? 1 : -1);
            break
          }
          let qU = (0, PU.V)(EU.text, tU - EU.from, RU) + EU.from,
            KU = EU.text.slice(Math.min(tU, qU) - EU.from, Math.max(tU, qU) - EU.from),
            cU = TU(KU);
          if (null != UU && cU != UU) break;
          " " == KU && tU == gU.head || (UU = cU), tU = qU
        }
        return tU
      })),
      YR = UU => aR(UU, !1);

    function BR(UU) {
      let RU = [],
        gU = -1;
      for (let tU of UU.selection.hu) {
        let pU = UU.doc.lineAt(tU.from),
          EU = UU.doc.lineAt(tU.to);
        if (tU.empty || tU.to != EU.from || (EU = UU.doc.lineAt(tU.to - 1)), gU >= pU.number) {
          let UU = RU[RU.length - 1];
          UU.to = EU.to, UU.hu.push(tU)
        } else RU.push({
          from: pU.from,
          to: EU.to,
          hu: [tU]
        });
        gU = EU.number + 1
      }
      return RU
    }

    function VR(UU, RU, gU) {
      if (UU.readOnly) return !1;
      let tU = [],
        pU = [];
      for (let EU of BR(UU)) {
        if (gU ? EU.to == UU.doc.length : 0 == EU.from) continue;
        let RU = UU.doc.lineAt(gU ? EU.to + 1 : EU.from - 1),
          TU = RU.length + 1;
        if (gU) {
          tU.push({
            from: EU.to,
            to: RU.to
          }, {
            from: EU.from,
            insert: RU.text + UU.lineBreak
          });
          for (let RU of EU.hu) pU.push(PU.k.range(Math.min(UU.doc.length, RU.anchor + TU), Math.min(UU.doc.length, RU.head + TU)))
        } else {
          tU.push({
            from: RU.from,
            to: EU.from
          }, {
            from: EU.to,
            insert: UU.lineBreak + RU.text
          });
          for (let UU of EU.hu) pU.push(PU.k.range(UU.anchor - TU, UU.head - TU))
        }
      }
      return !!tU.length && (RU(UU.update({
        changes: tU,
        scrollIntoView: !0,
        selection: PU.k.create(pU, UU.selection.mainIndex),
        userEvent: "move.line"
      })), !0)
    }

    function rR(UU, RU, gU) {
      if (UU.readOnly) return !1;
      let tU = [];
      for (let EU of BR(UU)) gU ? tU.push({
        from: EU.from,
        insert: UU.doc.slice(EU.from, EU.to) + UU.lineBreak
      }) : tU.push({
        from: EU.to,
        insert: UU.lineBreak + UU.doc.slice(EU.from, EU.to)
      });
      let pU = UU.changes(tU);
      return RU(UU.update({
        changes: pU,
        selection: UU.selection.map(pU, gU ? 1 : -1),
        scrollIntoView: !0,
        userEvent: "input.copyline"
      })), !0
    }
    const XR = vR(!1);

    function vR(UU) {
      return RU => {
        let {
          state: gU,
          dispatch: tU
        } = RU;
        if (gU.readOnly) return !1;
        let pU = gU.changeByRange((RU => {
          let {
            from: tU,
            to: pU
          } = RU, EU = gU.doc.lineAt(tU), TU = !UU && tU == pU && function(UU, RU) {
            if (/\(\)|\[\]|\{\}/.test(UU.sliceDoc(RU - 1, RU + 1))) return {
              from: RU,
              to: RU
            };
            let gU, tU = (0, qU.sb)(UU).resolveInner(RU),
              pU = tU.childBefore(RU),
              EU = tU.childAfter(RU);
            return pU && EU && pU.to <= RU && EU.from >= RU && (gU = pU.type.prop(KU.i.closedBy)) && gU.indexOf(EU.name) > -1 && UU.doc.lineAt(pU.to).from == UU.doc.lineAt(EU.from).from && !/\S/.test(UU.sliceDoc(pU.to, EU.from)) ? {
              from: pU.to,
              to: EU.from
            } : null
          }(gU, tU);
          UU && (tU = pU = (pU <= EU.to ? EU : gU.doc.lineAt(pU)).to);
          let cU = new qU.f(gU, {
              simulateBreak: tU,
              simulateDoubleBreak: !!TU
            }),
            GU = (0, qU.U)(cU, tU);
          for (null == GU && (GU = (0, PU.R)(/^\s*/.exec(gU.doc.lineAt(tU).text)[0], gU.tabSize)); pU < EU.to && /\s/.test(EU.text[pU - EU.from]);) pU++;
          TU ? ({
            from: tU,
            to: pU
          } = TU) : tU > EU.from && tU < EU.from + 100 && !/\S/.test(EU.text.slice(0, tU)) && (tU = EU.from);
          let jU = ["", (0, qU.ab)(gU, GU)];
          return TU && jU.push((0, qU.ab)(gU, cU.lineIndent(EU.from, -1))), {
            changes: {
              from: tU,
              to: pU,
              insert: PU.E.of(jU)
            },
            range: PU.k.cursor(tU + 1 + jU[1].length)
          }
        }));
        return tU(gU.update(pU, {
          scrollIntoView: !0,
          userEvent: "input"
        })), !0
      }
    }

    function dR(UU, RU) {
      let gU = -1;
      return UU.changeByRange((tU => {
        let pU = [];
        for (let PU = tU.from; PU <= tU.to;) {
          let EU = UU.doc.lineAt(PU);
          EU.number > gU && (tU.empty || tU.to > EU.from) && (RU(EU, pU, tU), gU = EU.number), PU = EU.to + 1
        }
        let EU = UU.changes(pU);
        return {
          changes: pU,
          range: PU.k.range(EU.mapPos(tU.anchor, 1), EU.mapPos(tU.head, 1))
        }
      }))
    }
    const HR = UU => {
        let {
          state: RU,
          dispatch: gU
        } = UU;
        return !RU.readOnly && (gU(RU.update(dR(RU, ((UU, gU) => {
          gU.push({
            from: UU.from,
            insert: RU.facet(qU.cb)
          })
        })), {
          userEvent: "input.indent"
        })), !0)
      },
      SR = UU => {
        let {
          state: RU,
          dispatch: gU
        } = UU;
        return !RU.readOnly && (gU(RU.update(dR(RU, ((UU, gU) => {
          let tU = /^\s*/.exec(UU.text)[0];
          if (!tU) return;
          let pU = (0, PU.R)(tU, RU.tabSize),
            EU = 0,
            TU = (0, qU.ab)(RU, Math.max(0, pU - (0, qU.R)(RU)));
          for (; EU < tU.length && EU < TU.length && tU.charCodeAt(EU) == TU.charCodeAt(EU);) EU++;
          gU.push({
            from: UU.from + EU,
            to: UU.from + tU.length,
            insert: TU.slice(EU)
          })
        })), {
          userEvent: "delete.dedent"
        })), !0)
      },
      sR = [{
        key: "Alt-ArrowLeft",
        mac: "Ctrl-ArrowLeft",
        run: UU => FU(UU, (RU => lU(UU.state, RU, !zU(UU)))),
        shift: UU => qR(UU, (RU => lU(UU.state, RU, !zU(UU))))
      }, {
        key: "Alt-ArrowRight",
        mac: "Ctrl-ArrowRight",
        run: UU => FU(UU, (RU => lU(UU.state, RU, zU(UU)))),
        shift: UU => qR(UU, (RU => lU(UU.state, RU, zU(UU))))
      }, {
        key: "Alt-ArrowUp",
        run: UU => {
          let {
            state: RU,
            dispatch: gU
          } = UU;
          return VR(RU, gU, !1)
        }
      }, {
        key: "Shift-Alt-ArrowUp",
        run: UU => {
          let {
            state: RU,
            dispatch: gU
          } = UU;
          return rR(RU, gU, !1)
        }
      }, {
        key: "Alt-ArrowDown",
        run: UU => {
          let {
            state: RU,
            dispatch: gU
          } = UU;
          return VR(RU, gU, !0)
        }
      }, {
        key: "Shift-Alt-ArrowDown",
        run: UU => {
          let {
            state: RU,
            dispatch: gU
          } = UU;
          return rR(RU, gU, !0)
        }
      }, {
        key: "Mod-Alt-ArrowUp",
        run: UU => JR(UU, !1)
      }, {
        key: "Mod-Alt-ArrowDown",
        run: UU => JR(UU, !0)
      }, {
        key: "Escape",
        run: UU => {
          let {
            state: RU,
            dispatch: gU
          } = UU, tU = RU.selection, pU = null;
          return tU.hu.length > 1 ? pU = PU.k.create([tU.main]) : tU.main.empty || (pU = PU.k.create([PU.k.cursor(tU.main.head)])), !!pU && (gU(kU(RU, pU)), !0)
        }
      }, {
        key: "Mod-Enter",
        run: vR(!0)
      }, {
        key: "Alt-l",
        mac: "Ctrl-l",
        run: UU => {
          let {
            state: RU,
            dispatch: gU
          } = UU, tU = BR(RU).map((UU => {
            let {
              from: gU,
              to: tU
            } = UU;
            return PU.k.range(gU, Math.min(tU + 1, RU.doc.length))
          }));
          return gU(RU.update({
            selection: PU.k.create(tU),
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Mod-i",
        run: UU => {
          let {
            state: RU,
            dispatch: gU
          } = UU, tU = yU(RU.selection, (UU => {
            let gU = (0, qU.sb)(RU),
              tU = gU.resolveStack(UU.from, 1);
            if (UU.empty) {
              let RU = gU.resolveStack(UU.from, -1);
              RU.node.from >= tU.node.from && RU.node.to <= tU.node.to && (tU = RU)
            }
            for (let RU = tU; RU; RU = RU.next) {
              let {
                node: gU
              } = RU;
              if ((gU.from < UU.from && gU.to >= UU.to || gU.to > UU.to && gU.from <= UU.from) && RU.next) return PU.k.range(gU.to, gU.from)
            }
            return UU
          }));
          return !tU.eq(RU.selection) && (gU(kU(RU, tU)), !0)
        },
        preventDefault: !0
      }, {
        key: "Mod-[",
        run: SR
      }, {
        key: "Mod-]",
        run: HR
      }, {
        key: "Mod-Alt-\\",
        run: UU => {
          let {
            state: RU,
            dispatch: gU
          } = UU;
          if (RU.readOnly) return !1;
          let tU = Object.create(null),
            pU = new qU.f(RU, {
              overrideIndentation: UU => {
                let RU = tU[UU];
                return null == RU ? -1 : RU
              }
            }),
            EU = dR(RU, ((UU, gU, EU) => {
              let PU = (0, qU.U)(pU, UU.from);
              if (null == PU) return;
              /\S/.test(UU.text) || (PU = 0);
              let TU = /^\s*/.exec(UU.text)[0],
                KU = (0, qU.ab)(RU, PU);
              (TU != KU || EU.from < UU.from + TU.length) && (tU[UU.from] = PU, gU.push({
                from: UU.from,
                to: UU.from + TU.length,
                insert: KU
              }))
            }));
          return EU.changes.empty || gU(RU.update(EU, {
            userEvent: "indent"
          })), !0
        }
      }, {
        key: "Shift-Mod-k",
        run: UU => {
          if (UU.state.readOnly) return !1;
          let {
            state: RU
          } = UU, gU = RU.changes(BR(RU).map((UU => {
            let {
              from: gU,
              to: tU
            } = UU;
            return gU > 0 ? gU-- : tU < RU.doc.length && tU++, {
              from: gU,
              to: tU
            }
          }))), tU = yU(RU.selection, (RU => {
            let gU;
            if (UU.lineWrapping) {
              let tU = UU.lineBlockAt(RU.head),
                pU = UU.coordsAtPos(RU.head, RU.assoc || 1);
              pU && (gU = tU.bottom + UU.documentTop - pU.bottom + UU.defaultLineHeight / 2)
            }
            return UU.moveVertically(RU, !0, gU)
          })).map(gU);
          return UU.dispatch({
            changes: gU,
            selection: tU,
            scrollIntoView: !0,
            userEvent: "delete.line"
          }), !0
        }
      }, {
        key: "Shift-Mod-\\",
        run: UU => {
          let {
            state: RU,
            dispatch: gU
          } = UU;
          return TR(RU, gU, !1)
        }
      }, {
        key: "Mod-/",
        run: UU => {
          let {
            state: RU
          } = UU, gU = RU.doc.lineAt(RU.selection.main.from), tU = CU(UU.state, gU.from);
          return tU.line ? GU(UU) : !!tU.block && uU(UU)
        }
      }, {
        key: "Alt-A",
        run: jU
      }, {
        key: "Ctrl-m",
        mac: "Shift-Alt-m",
        run: UU => (UU.setTabFocusMode(), !0)
      }].concat([{
        key: "ArrowLeft",
        run: MU,
        shift: cR,
        preventDefault: !0
      }, {
        key: "Mod-ArrowLeft",
        mac: "Alt-ArrowLeft",
        run: UU => LU(UU, !zU(UU)),
        shift: UU => jR(UU, !zU(UU)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowLeft",
        run: UU => FU(UU, (RU => PR(UU, RU, !zU(UU)))),
        shift: UU => qR(UU, (RU => PR(UU, RU, !zU(UU)))),
        preventDefault: !0
      }, {
        key: "ArrowRight",
        run: DU,
        shift: GR,
        preventDefault: !0
      }, {
        key: "Mod-ArrowRight",
        mac: "Alt-ArrowRight",
        run: UU => LU(UU, zU(UU)),
        shift: UU => jR(UU, zU(UU)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowRight",
        run: UU => FU(UU, (RU => PR(UU, RU, zU(UU)))),
        shift: UU => qR(UU, (RU => PR(UU, RU, zU(UU)))),
        preventDefault: !0
      }, {
        key: "ArrowUp",
        run: UR,
        shift: CR,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowUp",
        run: fR,
        shift: mR
      }, {
        mac: "Ctrl-ArrowUp",
        run: pR,
        shift: eR
      }, {
        key: "ArrowDown",
        run: RR,
        shift: hR,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowDown",
        run: xR,
        shift: IR
      }, {
        mac: "Ctrl-ArrowDown",
        run: ER,
        shift: WR
      }, {
        key: "PageUp",
        run: pR,
        shift: eR
      }, {
        key: "PageDown",
        run: ER,
        shift: WR
      }, {
        key: "Home",
        run: UU => FU(UU, (RU => PR(UU, RU, !1))),
        shift: UU => qR(UU, (RU => PR(UU, RU, !1))),
        preventDefault: !0
      }, {
        key: "Mod-Home",
        run: fR,
        shift: mR
      }, {
        key: "End",
        run: UU => FU(UU, (RU => PR(UU, RU, !0))),
        shift: UU => qR(UU, (RU => PR(UU, RU, !0))),
        preventDefault: !0
      }, {
        key: "Mod-End",
        run: xR,
        shift: IR
      }, {
        key: "Enter",
        run: XR,
        shift: XR
      }, {
        key: "Mod-a",
        run: UU => {
          let {
            state: RU,
            dispatch: gU
          } = UU;
          return gU(RU.update({
            selection: {
              anchor: 0,
              head: RU.doc.length
            },
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Backspace",
        run: oR,
        shift: oR,
        preventDefault: !0
      }, {
        key: "Delete",
        run: ZR,
        preventDefault: !0
      }, {
        key: "Mod-Backspace",
        mac: "Alt-Backspace",
        run: YR,
        preventDefault: !0
      }, {
        key: "Mod-Delete",
        mac: "Alt-Delete",
        run: UU => aR(UU, !0),
        preventDefault: !0
      }, {
        mac: "Mod-Backspace",
        run: UU => wR(UU, (RU => {
          let gU = UU.moveToLineBoundary(RU, !1).head;
          return RU.head > gU ? gU : Math.max(0, RU.head - 1)
        })),
        preventDefault: !0
      }, {
        mac: "Mod-Delete",
        run: UU => wR(UU, (RU => {
          let gU = UU.moveToLineBoundary(RU, !0).head;
          return RU.head < gU ? gU : Math.min(UU.state.doc.length, RU.head + 1)
        })),
        preventDefault: !0
      }].concat([{
        key: "Ctrl-b",
        run: MU,
        shift: cR,
        preventDefault: !0
      }, {
        key: "Ctrl-f",
        run: DU,
        shift: GR
      }, {
        key: "Ctrl-p",
        run: UR,
        shift: CR
      }, {
        key: "Ctrl-n",
        run: RR,
        shift: hR
      }, {
        key: "Ctrl-a",
        run: UU => FU(UU, (RU => PU.k.cursor(UU.lineBlockAt(RU.head).from, 1))),
        shift: UU => qR(UU, (RU => PU.k.cursor(UU.lineBlockAt(RU.head).from)))
      }, {
        key: "Ctrl-e",
        run: UU => FU(UU, (RU => PU.k.cursor(UU.lineBlockAt(RU.head).to, -1))),
        shift: UU => qR(UU, (RU => PU.k.cursor(UU.lineBlockAt(RU.head).to)))
      }, {
        key: "Ctrl-d",
        run: ZR
      }, {
        key: "Ctrl-h",
        run: oR
      }, {
        key: "Ctrl-k",
        run: UU => wR(UU, (RU => {
          let gU = UU.lineBlockAt(RU.head).to;
          return RU.head < gU ? gU : Math.min(UU.state.doc.length, RU.head + 1)
        }))
      }, {
        key: "Ctrl-Alt-h",
        run: YR
      }, {
        key: "Ctrl-o",
        run: UU => {
          let {
            state: RU,
            dispatch: gU
          } = UU;
          if (RU.readOnly) return !1;
          let tU = RU.changeByRange((UU => ({
            changes: {
              from: UU.from,
              to: UU.to,
              insert: PU.E.of(["", ""])
            },
            range: PU.k.cursor(UU.from)
          })));
          return gU(RU.update(tU, {
            scrollIntoView: !0,
            userEvent: "input"
          })), !0
        }
      }, {
        key: "Ctrl-t",
        run: UU => {
          let {
            state: RU,
            dispatch: gU
          } = UU;
          if (RU.readOnly) return !1;
          let tU = RU.changeByRange((UU => {
            if (!UU.empty || 0 == UU.from || UU.from == RU.doc.length) return {
              range: UU
            };
            let gU = UU.from,
              tU = RU.doc.lineAt(gU),
              pU = gU == tU.from ? gU - 1 : (0, PU.V)(tU.text, gU - tU.from, !1) + tU.from,
              EU = gU == tU.to ? gU + 1 : (0, PU.V)(tU.text, gU - tU.from, !0) + tU.from;
            return {
              changes: {
                from: pU,
                to: EU,
                insert: RU.doc.slice(gU, EU).append(RU.doc.slice(pU, gU))
              },
              range: PU.k.cursor(EU)
            }
          }));
          return !tU.changes.empty && (gU(RU.update(tU, {
            scrollIntoView: !0,
            userEvent: "move.character"
          })), !0)
        }
      }, {
        key: "Ctrl-v",
        run: ER
      }].map((UU => ({
        mac: UU.key,
        run: UU.run,
        shift: UU.shift
      }))))),
      yR = {
        key: "Tab",
        run: HR,
        shift: SR
      };
    var kR = gU(40754),
      FR = gU(40691),
      iR = gU(40763),
      AR = function(UU) {
        void 0 === UU && (UU = {});
        var {
          crosshairCursor: RU = !1
        } = UU, gU = [];
        !1 !== UU.closeBracketsKeymap && (gU = gU.concat(FR.g)), !1 !== UU.defaultKeymap && (gU = gU.concat(sR)), !1 !== UU.searchKeymap && (gU = gU.concat(kR.i)), !1 !== UU.historyKeymap && (gU = gU.concat(sU)), !1 !== UU.foldKeymap && (gU = gU.concat(qU.K)), !1 !== UU.completionKeymap && (gU = gU.concat(FR.o)), !1 !== UU.lintKeymap && (gU = gU.concat(iR.c));
        var tU = [];
        return !1 !== UU.lineNumbers && tU.push((0, TU.P)()), !1 !== UU.highlightActiveLineGutter && tU.push((0, TU.G)()), !1 !== UU.highlightSpecialChars && tU.push((0, TU.K)()), !1 !== UU.history && tU.push(function() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return [IU, mU.of(UU), TU.h.domEventHandlers({
            beforeinput(UU, RU) {
              let gU = "historyUndo" == UU.inputType ? wU : "historyRedo" == UU.inputType ? nU : null;
              return !!gU && (UU.preventDefault(), gU(RU))
            }
          })]
        }()), !1 !== UU.foldGutter && tU.push((0, qU.F)()), !1 !== UU.drawSelection && tU.push((0, TU.v)()), !1 !== UU.dropCursor && tU.push((0, TU.x)()), !1 !== UU.allowMultipleSelections && tU.push(PU.n.allowMultipleSelections.of(!0)), !1 !== UU.indentOnInput && tU.push((0, qU.Z)()), !1 !== UU.syntaxHighlighting && tU.push((0, qU.nb)(qU.s, {
          fallback: !0
        })), !1 !== UU.bracketMatching && tU.push((0, qU.p)()), !1 !== UU.closeBrackets && tU.push((0, FR.h)()), !1 !== UU.autocompletion && tU.push((0, FR.d)()), !1 !== UU.rectangularSelection && tU.push((0, TU.S)()), !1 !== RU && tU.push((0, TU.s)()), !1 !== UU.highlightActiveLine && tU.push((0, TU.J)()), !1 !== UU.highlightSelectionMatches && tU.push((0, kR.e)()), UU.tabSize && "number" === typeof UU.tabSize && tU.push(qU.cb.of(" ".repeat(UU.tabSize))), tU.concat([TU.N.of(gU.flat())]).filter(Boolean)
      },
      zR = gU(40739);
    const MR = "#e5c07b",
      DR = "#e06c75",
      LR = "#56b6c2",
      NR = "#ffffff",
      lR = "#abb2bf",
      OR = "#7d8799",
      Ug = "#61afef",
      Rg = "#98c379",
      gg = "#d19a66",
      tg = "#c678dd",
      pg = "#21252b",
      Eg = "#2c313a",
      Pg = "#282c34",
      Tg = "#353a42",
      qg = "#3E4451",
      Kg = "#528bff",
      cg = TU.h.theme({
        "&": {
          color: lR,
          backgroundColor: Pg
        },
        ".cm-content": {
          caretColor: Kg
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: Kg
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: qg
        },
        ".cm-panels": {
          backgroundColor: pg,
          color: lR
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
          backgroundColor: Pg,
          color: OR,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: Eg
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#ddd"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: Tg
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: Tg,
          borderBottomColor: Tg
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: Eg,
            color: lR
          }
        }
      }, {
        dark: !0
      }),
      Gg = qU.d.define([{
        tag: zR.j.keyword,
        color: tg
      }, {
        tag: [zR.j.name, zR.j.deleted, zR.j.character, zR.j.propertyName, zR.j.macroName],
        color: DR
      }, {
        tag: [zR.j.function(zR.j.variableName), zR.j.labelName],
        color: Ug
      }, {
        tag: [zR.j.color, zR.j.constant(zR.j.name), zR.j.standard(zR.j.name)],
        color: gg
      }, {
        tag: [zR.j.definition(zR.j.name), zR.j.separator],
        color: lR
      }, {
        tag: [zR.j.typeName, zR.j.className, zR.j.number, zR.j.changed, zR.j.annotation, zR.j.modifier, zR.j.self, zR.j.namespace],
        color: MR
      }, {
        tag: [zR.j.operator, zR.j.operatorKeyword, zR.j.url, zR.j.escape, zR.j.regexp, zR.j.link, zR.j.special(zR.j.string)],
        color: LR
      }, {
        tag: [zR.j.meta, zR.j.comment],
        color: OR
      }, {
        tag: zR.j.strong,
        fontWeight: "bold"
      }, {
        tag: zR.j.emphasis,
        fontStyle: "italic"
      }, {
        tag: zR.j.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: zR.j.link,
        color: OR,
        textDecoration: "underline"
      }, {
        tag: zR.j.heading,
        fontWeight: "bold",
        color: DR
      }, {
        tag: [zR.j.atom, zR.j.bool, zR.j.special(zR.j.variableName)],
        color: gg
      }, {
        tag: [zR.j.processingInstruction, zR.j.string, zR.j.inserted],
        color: Rg
      }, {
        tag: zR.j.invalid,
        color: NR
      }]),
      jg = [cg, (0, qU.nb)(Gg)];
    var ug = TU.h.theme({
      "&": {
        backgroundColor: "#fff"
      }
    }, {
      dark: !1
    });
    class Cg {
      constructor(UU, RU) {
        this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = RU, this.timeoutMS = RU, this.callbacks.push(UU)
      }
      HG() {
        if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
          this.isTimeExhausted = !0;
          var UU = this.callbacks.slice();
          this.callbacks.length = 0, UU.forEach((UU => {
            try {
              UU()
            } catch (RU) {
              console.error("TimeoutLatch callback error:", RU)
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
    class hg {
      constructor() {
        this.interval = null, this.latches = new Set
      }
      add(UU) {
        this.latches.add(UU), this.start()
      }
      remove(UU) {
        this.latches.delete(UU), 0 === this.latches.size && this.stop()
      }
      start() {
        null === this.interval && (this.interval = setInterval((() => {
          this.latches.forEach((UU => {
            UU.HG(), UU.isDone && this.remove(UU)
          }))
        }), 1))
      }
      stop() {
        null !== this.interval && (clearInterval(this.interval), this.interval = null)
      }
    }
    var Qg = null,
      eg = PU.d.define(),
      Wg = [];

    function fg(UU) {
      var {
        value: RU,
        selection: gU,
        onChange: tU,
        onStatistics: pU,
        onCreateEditor: qU,
        onUpdate: KU,
        extensions: cU = Wg,
        autoFocus: GU,
        theme: jU = "light",
        height: uU = null,
        minHeight: CU = null,
        maxHeight: hU = null,
        width: QU = null,
        minWidth: eU = null,
        maxWidth: WU = null,
        placeholder: fU = "",
        editable: xU = !0,
        readOnly: mU = !1,
        indentWithTab: IU = !0,
        basicSetup: JU = !0,
        root: wU,
        initialState: nU
      } = UU, [bU, oU] = (0, EU.useState)(), [ZU, aU] = (0, EU.useState)(), [YU, BU] = (0, EU.useState)(), VU = (0, EU.useState)((() => ({
        current: null
      })))[0], rU = (0, EU.useState)((() => ({
        current: null
      })))[0], XU = TU.h.theme({
        "&": {
          height: uU,
          minHeight: CU,
          maxHeight: hU,
          width: QU,
          minWidth: eU,
          maxWidth: WU
        },
        "& .cm-scroller": {
          height: "100% !important"
        }
      }), vU = TU.h.updateListener.of((UU => {
        if (UU.docChanged && "function" === typeof tU && !UU.transactions.some((UU => UU.annotation(eg)))) {
          VU.current ? VU.current.reset() : (VU.current = new Cg((() => {
            if (rU.current) {
              var UU = rU.current;
              rU.current = null, UU()
            }
            VU.current = null
          }), 200), ("undefined" === typeof window ? new hg : (Qg || (Qg = new hg), Qg)).add(VU.current));
          var RU = UU.state.doc.toString();
          tU(RU, UU)
        }
        pU && pU((UU => ({
          line: UU.state.doc.lineAt(UU.state.selection.main.from),
          lineCount: UU.state.doc.lines,
          lineBreak: UU.state.lineBreak,
          length: UU.state.doc.length,
          readOnly: UU.state.readOnly,
          tabSize: UU.state.tabSize,
          selection: UU.state.selection,
          selectionAsSingle: UU.state.selection.asSingle().main,
          hu: UU.state.selection.hu,
          selectionCode: UU.state.sliceDoc(UU.state.selection.main.from, UU.state.selection.main.to),
          selections: UU.state.selection.hu.map((RU => UU.state.sliceDoc(RU.from, RU.to))),
          selectedText: UU.state.selection.hu.some((UU => !UU.empty))
        }))(UU))
      })), dU = function(UU) {
        void 0 === UU && (UU = {});
        var {
          indentWithTab: RU = !0,
          editable: gU = !0,
          readOnly: tU = !1,
          theme: pU = "light",
          placeholder: EU = "",
          basicSetup: qU = !0
        } = UU, KU = [];
        switch (RU && KU.unshift(TU.N.of([yR])), qU && ("boolean" === typeof qU ? KU.unshift(AR()) : KU.unshift(AR(qU))), EU && KU.unshift((0, TU.R)(EU)), pU) {
          case "light":
            KU.push(ug);
            break;
          case "dark":
            KU.push(jg);
            break;
          case "none":
            break;
          default:
            KU.push(pU)
        }
        return !1 === gU && KU.push(TU.h.editable.of(!1)), tU && KU.push(PU.n.readOnly.of(!0)), [...KU]
      }({
        theme: jU,
        editable: xU,
        readOnly: mU,
        placeholder: fU,
        indentWithTab: IU,
        basicSetup: JU
      }), HU = [vU, XU, ...dU];
      return KU && "function" === typeof KU && HU.push(TU.h.updateListener.of(KU)), HU = HU.concat(cU), (0, EU.useLayoutEffect)((() => {
        if (bU && !YU) {
          var UU = {
              doc: RU,
              selection: gU,
              extensions: HU
            },
            tU = nU ? PU.n.fromJSON(nU.json, UU, nU.fields) : PU.n.create(UU);
          if (BU(tU), !ZU) {
            var pU = new TU.h({
              state: tU,
              parent: bU,
              root: wU
            });
            aU(pU), qU && qU(pU, tU)
          }
        }
        return () => {
          ZU && (BU(void 0), aU(void 0))
        }
      }), [bU, YU]), (0, EU.useEffect)((() => {
        UU.container && oU(UU.container)
      }), [UU.container]), (0, EU.useEffect)((() => () => {
        ZU && (ZU.destroy(), aU(void 0)), VU.current && (VU.current.cancel(), VU.current = null)
      }), [ZU]), (0, EU.useEffect)((() => {
        GU && ZU && ZU.focus()
      }), [GU, ZU]), (0, EU.useEffect)((() => {
        ZU && ZU.dispatch({
          effects: PU.A.reconfigure.of(HU)
        })
      }), [jU, cU, uU, CU, hU, QU, eU, WU, fU, xU, mU, IU, JU, tU, KU]), (0, EU.useEffect)((() => {
        if (void 0 !== RU) {
          var UU = ZU ? ZU.state.doc.toString() : "";
          if (ZU && RU !== UU) {
            var gU = () => {
              ZU && RU !== ZU.state.doc.toString() && ZU.dispatch({
                changes: {
                  from: 0,
                  to: ZU.state.doc.toString().length,
                  insert: RU || ""
                },
                annotations: [eg.of(!0)]
              })
            };
            VU.current && !VU.current.isDone ? rU.current = gU : gU()
          }
        }
      }), [RU, ZU]), {
        state: YU,
        setState: BU,
        view: ZU,
        setView: aU,
        container: bU,
        setContainer: oU
      }
    }
    var xg = gU(1090),
      mg = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"],
      Ig = (0, EU.forwardRef)(((UU, RU) => {
        var {
          className: gU,
          value: PU = "",
          selection: TU,
          extensions: qU = [],
          onChange: KU,
          onStatistics: cU,
          onCreateEditor: GU,
          onUpdate: jU,
          autoFocus: uU,
          theme: CU = "light",
          height: hU,
          minHeight: QU,
          maxHeight: eU,
          width: WU,
          minWidth: fU,
          maxWidth: xU,
          basicSetup: mU,
          placeholder: IU,
          indentWithTab: JU,
          editable: wU,
          readOnly: nU,
          root: bU,
          initialState: oU
        } = UU, ZU = (0, pU.d)(UU, mg), aU = (0, EU.useRef)(null), {
          state: YU,
          view: BU,
          container: VU,
          setContainer: rU
        } = fg({
          root: bU,
          value: PU,
          autoFocus: uU,
          theme: CU,
          height: hU,
          minHeight: QU,
          maxHeight: eU,
          width: WU,
          minWidth: fU,
          maxWidth: xU,
          basicSetup: mU,
          placeholder: IU,
          indentWithTab: JU,
          editable: wU,
          readOnly: nU,
          selection: TU,
          onChange: KU,
          onStatistics: cU,
          onCreateEditor: GU,
          onUpdate: jU,
          extensions: qU,
          initialState: oU
        });
        (0, EU.useImperativeHandle)(RU, (() => ({
          editor: aU.current,
          state: YU,
          view: BU
        })), [aU, VU, YU, BU]);
        var XU = (0, EU.useCallback)((UU => {
          aU.current = UU, rU(UU)
        }), [rU]);
        if ("string" !== typeof PU) throw new Error("value must be typeof string but got " + typeof PU);
        var vU = "string" === typeof CU ? "cm-theme-" + CU : "cm-theme";
        return (0, xg.jsx)("div", (0, tU.e)({
          ref: XU,
          className: vU + (gU ? " " + gU : "")
        }, ZU))
      }));
    Ig.displayName = "CodeMirror";
    const Jg = Ig
  },
  40719: (UU, RU, gU) => {
    function tU() {
      var UU = arguments[0];
      "string" == typeof UU && (UU = document.createElement(UU));
      var RU = 1,
        gU = arguments[1];
      if (gU && "object" == typeof gU && null == gU.nodeType && !Array.isArray(gU)) {
        for (var tU in gU)
          if (Object.prototype.hasOwnProperty.call(gU, tU)) {
            var EU = gU[tU];
            "string" == typeof EU ? UU.setAttribute(tU, EU) : null != EU && (UU[tU] = EU)
          } RU++
      }
      for (; RU < arguments.length; RU++) pU(UU, arguments[RU]);
      return UU
    }

    function pU(UU, RU) {
      if ("string" == typeof RU) UU.appendChild(document.createTextNode(RU));
      else if (null == RU);
      else if (null != RU.nodeType) UU.appendChild(RU);
      else {
        if (!Array.isArray(RU)) throw new RangeError("Unsupported child node: " + RU);
        for (var gU = 0; gU < RU.length; gU++) pU(UU, RU[gU])
      }
    }
    gU.d(RU, {
      d: () => tU
    })
  },
  40714: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => PU
    });
    const tU = "undefined" == typeof Symbol ? "__\u037c" : Symbol.for("\u037c"),
      pU = "undefined" == typeof Symbol ? "__styleSet" + Math.floor(1e8 * Math.random()) : Symbol("styleSet"),
      EU = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : {};
    class PU {
      constructor(UU, RU) {
        this.rules = [];
        let {
          finish: gU
        } = RU || {};

        function tU(UU) {
          return /^@/.test(UU) ? [UU] : UU.split(/,\s*/)
        }

        function pU(UU, RU, EU, PU) {
          let TU = [],
            qU = /^@(\w+)\b/.exec(UU[0]),
            KU = qU && "keyframes" == qU[1];
          if (qU && null == RU) return EU.push(UU[0] + ";");
          for (let gU in RU) {
            let PU = RU[gU];
            if (/&/.test(gU)) pU(gU.split(/,\s*/).map((RU => UU.map((UU => RU.replace(/&/, UU))))).reduce(((UU, RU) => UU.concat(RU))), PU, EU);
            else if (PU && "object" == typeof PU) {
              if (!qU) throw new RangeError("The value of a property (" + gU + ") should be a primitive value.");
              pU(tU(gU), PU, TU, KU)
            } else null != PU && TU.push(gU.replace(/_.*/, "").replace(/[A-Z]/g, (UU => "-" + UU.toLowerCase())) + ": " + PU + ";")
          }(TU.length || KU) && EU.push((!gU || qU || PU ? UU : UU.map(gU)).join(", ") + " {" + TU.join(" ") + "}")
        }
        for (let EU in UU) pU(tU(EU), UU[EU], this.rules)
      }
      getRules() {
        return this.rules.join("\n")
      }
      static newName() {
        let UU = EU[tU] || 1;
        return EU[tU] = UU + 1, "\u037c" + UU.toString(36)
      }
      static mount(UU, RU, gU) {
        let tU = UU[pU],
          EU = gU && gU.nonce;
        tU ? EU && tU.setNonce(EU) : tU = new qU(UU, EU), tU.mount(Array.isArray(RU) ? RU : [RU], UU)
      }
    }
    let TU = new Map;
    class qU {
      constructor(UU, RU) {
        let gU = UU.ownerDocument || UU,
          tU = gU.defaultView;
        if (!UU.head && UU.adoptedStyleSheets && tU.CSSStyleSheet) {
          let RU = TU.get(gU);
          if (RU) return UU[pU] = RU;
          this.sheet = new tU.CSSStyleSheet, TU.set(gU, this)
        } else this.styleTag = gU.createElement("style"), RU && this.styleTag.setAttribute("nonce", RU);
        this.modules = [], UU[pU] = this
      }
      mount(UU, RU) {
        let gU = this.sheet,
          tU = 0,
          pU = 0;
        for (let EU = 0; EU < UU.length; EU++) {
          let RU = UU[EU],
            PU = this.modules.indexOf(RU);
          if (PU < pU && PU > -1 && (this.modules.splice(PU, 1), pU--, PU = -1), -1 == PU) {
            if (this.modules.splice(pU++, 0, RU), gU)
              for (let UU = 0; UU < RU.rules.length; UU++) gU.insertRule(RU.rules[UU], tU++)
          } else {
            for (; pU < PU;) tU += this.modules[pU++].rules.length;
            tU += RU.rules.length, pU++
          }
        }
        if (gU) RU.adoptedStyleSheets.indexOf(this.sheet) < 0 && (RU.adoptedStyleSheets = [this.sheet, ...RU.adoptedStyleSheets]);
        else {
          let UU = "";
          for (let RU = 0; RU < this.modules.length; RU++) UU += this.modules[RU].getRules() + "\n";
          this.styleTag.textContent = UU;
          let gU = RU.head || RU;
          this.styleTag.parentNode != gU && gU.insertBefore(this.styleTag, gU.firstChild)
        }
      }
      setNonce(UU) {
        this.styleTag && this.styleTag.getAttribute("nonce") != UU && this.styleTag.setAttribute("nonce", UU)
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);