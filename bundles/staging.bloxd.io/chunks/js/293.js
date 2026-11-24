export const id = 293;
export const ids = [293];
export const modules = {
  41306: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => YH,
      d: () => ZH,
      h: () => nH,
      j: () => qS,
      m: () => AH,
      o: () => uS,
      s: () => kH
    });
    var tS = gS(41315),
      bS = gS(41322),
      XS = gS(41334);
    class xS {
      constructor(SS, HS, gS, tS) {
        this.state = SS, this.pos = HS, this.explicit = gS, this.view = tS, this.abortListeners = [], this.abortOnDocChange = !1
      }
      tokenBefore(SS) {
        let HS = (0, XS.ob)(this.state).resolveInner(this.pos, -1);
        for (; HS && SS.indexOf(HS.name) < 0;) HS = HS.parent;
        return HS ? {
          from: HS.from,
          to: this.pos,
          text: this.state.sliceDoc(HS.from, this.pos),
          type: HS.type
        } : null
      }
      matchBefore(SS) {
        let HS = this.state.doc.lineAt(this.pos),
          gS = Math.max(HS.from, this.pos - 250),
          tS = HS.text.slice(gS - HS.from, this.pos - HS.from),
          bS = tS.search(kS(SS, !1));
        return bS < 0 ? null : {
          from: gS + bS,
          to: this.pos,
          text: tS.slice(bS)
        }
      }
      get aborted() {
        return null == this.abortListeners
      }
      addEventListener(SS, HS, gS) {
        "abort" == SS && this.abortListeners && (this.abortListeners.push(HS), gS && gS.onDocChange && (this.abortOnDocChange = !0))
      }
    }

    function NS(SS) {
      let HS = Object.keys(SS).join(""),
        gS = /\w/.test(HS);
      return gS && (HS = HS.replace(/\w/g, "")), `[${gS?"\\w":""}${HS.replace(/[^\w\s]/g,"\\$&")}]`
    }

    function qS(SS) {
      let HS = SS.map((SS => "string" == typeof SS ? {
          label: SS
        } : SS)),
        [gS, tS] = HS.every((SS => /^\w+$/.test(SS.label))) ? [/\w*$/, /\w+$/] : function(SS) {
          let HS = Object.create(null),
            gS = Object.create(null);
          for (let {
              label: bS
            }
            of SS) {
            HS[bS[0]] = !0;
            for (let SS = 1; SS < bS.length; SS++) gS[bS[SS]] = !0
          }
          let tS = NS(HS) + NS(gS) + "*$";
          return [new RegExp("^" + tS), new RegExp(tS)]
        }(HS);
      return SS => {
        let bS = SS.matchBefore(tS);
        return bS || SS.explicit ? {
          from: bS ? bS.from : SS.pos,
          options: HS,
          validFor: gS
        } : null
      }
    }

    function uS(SS, HS) {
      return gS => {
        for (let HS = (0, XS.ob)(gS.state).resolveInner(gS.pos, -1); HS; HS = HS.parent) {
          if (SS.indexOf(HS.name) > -1) return null;
          if (HS.type.isTop) break
        }
        return HS(gS)
      }
    }
    class IS {
      constructor(SS, HS, gS, tS) {
        this.completion = SS, this.source = HS, this.match = gS, this.score = tS
      }
    }

    function fS(SS) {
      return SS.selection.main.from
    }

    function kS(SS, HS) {
      var gS;
      let {
        source: tS
      } = SS, bS = HS && "^" != tS[0], XS = "$" != tS[tS.length - 1];
      return bS || XS ? new RegExp(`${bS?"^":""}(?:${tS})${XS?"$":""}`, null !== (gS = SS.flags) && void 0 !== gS ? gS : SS.ignoreCase ? "i" : "") : SS
    }
    const aS = tS.d.define();

    function KS(SS, HS, gS, bS) {
      let {
        main: XS
      } = SS.selection, xS = gS - XS.from, NS = bS - XS.from;
      return {
        ...SS.changeByRange((qS => {
          if (qS != XS && gS != bS && SS.sliceDoc(qS.from + xS, qS.from + NS) != SS.sliceDoc(gS, bS)) return {
            range: qS
          };
          let uS = SS.toText(HS);
          return {
            changes: {
              from: qS.from + xS,
              to: bS == XS.from ? qS.to : qS.from + NS,
              insert: uS
            },
            range: tS.i.cursor(qS.from + xS + uS.length)
          }
        })),
        scrollIntoView: !0,
        userEvent: "input.complete"
      }
    }
    const jS = new WeakMap;

    function GS(SS) {
      if (!Array.isArray(SS)) return SS;
      let HS = jS.get(SS);
      return HS || jS.set(SS, HS = qS(SS)), HS
    }
    const CS = tS.G.define(),
      nS = tS.G.define();
    class PS {
      constructor(SS) {
        this.pattern = SS, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
        for (let HS = 0; HS < SS.length;) {
          let gS = (0, tS.Q)(SS, HS),
            bS = (0, tS.T)(gS);
          this.chars.push(gS);
          let XS = SS.slice(HS, HS + bS),
            xS = XS.toUpperCase();
          this.folded.push((0, tS.Q)(xS == XS ? XS.toLowerCase() : xS, 0)), HS += bS
        }
        this.astral = SS.length != this.chars.length
      }
      ret(SS, HS) {
        return this.score = SS, this.matched = HS, this
      }
      match(SS) {
        if (0 == this.pattern.length) return this.ret(-100, []);
        if (SS.length < this.pattern.length) return null;
        let {
          chars: HS,
          folded: gS,
          any: bS,
          precise: XS,
          byWord: xS
        } = this;
        if (1 == HS.length) {
          let bS = (0, tS.Q)(SS, 0),
            XS = (0, tS.T)(bS),
            xS = XS == SS.length ? 0 : -100;
          if (bS == HS[0]);
          else {
            if (bS != gS[0]) return null;
            xS += -200
          }
          return this.ret(xS, [0, XS])
        }
        let NS = SS.indexOf(this.pattern);
        if (0 == NS) return this.ret(SS.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
        let qS = HS.length,
          uS = 0;
        if (NS < 0) {
          for (let XS = 0, xS = Math.min(SS.length, 200); XS < xS && uS < qS;) {
            let xS = (0, tS.Q)(SS, XS);
            xS != HS[uS] && xS != gS[uS] || (bS[uS++] = XS), XS += (0, tS.T)(xS)
          }
          if (uS < qS) return null
        }
        let IS = 0,
          fS = 0,
          kS = !1,
          aS = 0,
          KS = -1,
          jS = -1,
          GS = /[a-z]/.test(SS),
          CS = !0;
        for (let nS = 0, PS = Math.min(SS.length, 200), QS = 0; nS < PS && fS < qS;) {
          let bS = (0, tS.Q)(SS, nS);
          NS < 0 && (IS < qS && bS == HS[IS] && (XS[IS++] = nS), aS < qS && (bS == HS[aS] || bS == gS[aS] ? (0 == aS && (KS = nS), jS = nS + 1, aS++) : aS = 0));
          let uS, PS = bS < 255 ? bS >= 48 && bS <= 57 || bS >= 97 && bS <= 122 ? 2 : bS >= 65 && bS <= 90 ? 1 : 0 : (uS = (0, tS.eb)(bS)) != uS.toLowerCase() ? 1 : uS != uS.toUpperCase() ? 2 : 0;
          (!nS || 1 == PS && GS || 0 == QS && 0 != PS) && (HS[fS] == bS || gS[fS] == bS && (kS = !0) ? xS[fS++] = nS : xS.length && (CS = !1)), QS = PS, nS += (0, tS.T)(bS)
        }
        return fS == qS && 0 == xS[0] && CS ? this.result((kS ? -200 : 0) - 100, xS, SS) : aS == qS && 0 == KS ? this.ret(-200 - SS.length + (jS == SS.length ? 0 : -100), [0, jS]) : NS > -1 ? this.ret(-700 - SS.length, [NS, NS + this.pattern.length]) : aS == qS ? this.ret(-900 - SS.length, [KS, jS]) : fS == qS ? this.result((kS ? -200 : 0) - 100 - 700 + (CS ? 0 : -1100), xS, SS) : 2 == HS.length ? null : this.result((bS[0] ? -700 : 0) - 200 - 1100, bS, SS)
      }
      result(SS, HS, gS) {
        let bS = [],
          XS = 0;
        for (let xS of HS) {
          let SS = xS + (this.astral ? (0, tS.T)((0, tS.Q)(gS, xS)) : 1);
          XS && bS[XS - 1] == xS ? bS[XS - 1] = SS : (bS[XS++] = xS, bS[XS++] = SS)
        }
        return this.ret(SS - gS.length, bS)
      }
    }
    class QS {
      constructor(SS) {
        this.pattern = SS, this.matched = [], this.score = 0, this.folded = SS.toLowerCase()
      }
      match(SS) {
        if (SS.length < this.pattern.length) return null;
        let HS = SS.slice(0, this.pattern.length),
          gS = HS == this.pattern ? 0 : HS.toLowerCase() == this.folded ? -200 : null;
        return null == gS ? null : (this.matched = [0, HS.length], this.score = gS + (SS.length == this.pattern.length ? 0 : -100), this)
      }
    }
    const DS = tS.n.define({
      combine: SS => (0, tS.W)(SS, {
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
        positionInfo: hS,
        filterStrict: !1,
        compareCompletions: (SS, HS) => (SS.sortText || SS.label).localeCompare(HS.sortText || HS.label),
        interactionDelay: 75,
        updateSyncTime: 100
      }, {
        defaultKeymap: (SS, HS) => SS && HS,
        closeOnBlur: (SS, HS) => SS && HS,
        icons: (SS, HS) => SS && HS,
        tooltipClass: (SS, HS) => gS => wS(SS(gS), HS(gS)),
        optionClass: (SS, HS) => gS => wS(SS(gS), HS(gS)),
        addToOptions: (SS, HS) => SS.concat(HS),
        filterStrict: (SS, HS) => SS || HS
      })
    });

    function wS(SS, HS) {
      return SS ? HS ? SS + " " + HS : SS : HS
    }

    function hS(SS, HS, gS, tS, XS, xS) {
      let NS, qS, uS = SS.textDirection == bS.d.RTL,
        IS = uS,
        fS = !1,
        kS = "top",
        aS = HS.left - XS.left,
        KS = XS.right - HS.right,
        jS = tS.right - tS.left,
        GS = tS.bottom - tS.top;
      if (IS && aS < Math.min(jS, KS) ? IS = !1 : !IS && KS < Math.min(jS, aS) && (IS = !0), jS <= (IS ? aS : KS)) NS = Math.max(XS.top, Math.min(gS.top, XS.bottom - GS)) - HS.top, qS = Math.min(400, IS ? aS : KS);
      else {
        fS = !0, qS = Math.min(400, (uS ? HS.right : XS.right - HS.left) - 30);
        let SS = XS.bottom - HS.bottom;
        SS >= GS || SS > HS.top ? NS = gS.bottom - HS.top : (kS = "bottom", NS = HS.bottom - gS.top)
      }
      return {
        style: `${kS}: ${NS/((HS.bottom-HS.top)/xS.offsetHeight)}px; max-width: ${qS/((HS.right-HS.left)/xS.offsetWidth)}px`,
        class: "cm-completionInfo-" + (fS ? uS ? "left-narrow" : "right-narrow" : IS ? "left" : "right")
      }
    }
    const ZS = tS.G.define();

    function JS(SS, HS, gS) {
      if (SS <= gS) return {
        from: 0,
        to: SS
      };
      if (HS < 0 && (HS = 0), HS <= SS >> 1) {
        let SS = Math.floor(HS / gS);
        return {
          from: SS * gS,
          to: (SS + 1) * gS
        }
      }
      let tS = Math.floor((SS - HS) / gS);
      return {
        from: SS - (tS + 1) * gS,
        to: SS - tS * gS
      }
    }
    class OS {
      constructor(SS, HS, gS) {
        this.view = SS, this.stateField = HS, this.applyCompletion = gS, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
          read: () => this.measureInfo(),
          write: SS => this.placeInfo(SS),
          key: this
        }, this.space = null, this.currentClass = "";
        let tS = SS.state.field(HS),
          {
            options: bS,
            selected: XS
          } = tS.open,
          xS = SS.state.facet(DS);
        this.optionContent = function(SS) {
          let HS = SS.addToOptions.slice();
          return SS.icons && HS.push({
            render(SS) {
              let HS = document.createElement("div");
              return HS.classList.add("cm-completionIcon"), SS.type && HS.classList.add(...SS.type.split(/\s+/g).map((SS => "cm-completionIcon-" + SS))), HS.setAttribute("aria-hidden", "true"), HS
            },
            position: 20
          }), HS.push({
            render(SS, HS, gS, tS) {
              let bS = document.createElement("span");
              bS.className = "cm-completionLabel";
              let XS = SS.displayLabel || SS.label,
                xS = 0;
              for (let NS = 0; NS < tS.length;) {
                let SS = tS[NS++],
                  HS = tS[NS++];
                SS > xS && bS.appendChild(document.createTextNode(XS.slice(xS, SS)));
                let gS = bS.appendChild(document.createElement("span"));
                gS.appendChild(document.createTextNode(XS.slice(SS, HS))), gS.className = "cm-completionMatchedText", xS = HS
              }
              return xS < XS.length && bS.appendChild(document.createTextNode(XS.slice(xS))), bS
            },
            position: 50
          }, {
            render(SS) {
              if (!SS.detail) return null;
              let HS = document.createElement("span");
              return HS.className = "cm-completionDetail", HS.textContent = SS.detail, HS
            },
            position: 80
          }), HS.sort(((SS, HS) => SS.position - HS.position)).map((SS => SS.render))
        }(xS), this.optionClass = xS.optionClass, this.tooltipClass = xS.tooltipClass, this.range = JS(bS.length, XS, xS.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(SS.state), this.dom.addEventListener("mousedown", (gS => {
          let {
            options: tS
          } = SS.state.field(HS).open;
          for (let HS, bS = gS.target; bS && bS != this.dom; bS = bS.parentNode)
            if ("LI" == bS.nodeName && (HS = /-(\d+)$/.exec(bS.id)) && +HS[1] < tS.length) return this.applyCompletion(SS, tS[+HS[1]]), void gS.preventDefault();
          if (gS.target == this.list) {
            let HS = this.list.classList.contains("cm-completionListIncompleteTop") && gS.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && gS.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
            null != HS && (SS.dispatch({
              effects: ZS.of(HS)
            }), gS.preventDefault())
          }
        })), this.dom.addEventListener("focusout", (HS => {
          let gS = SS.state.field(this.stateField, !1);
          gS && gS.tooltip && SS.state.facet(DS).closeOnBlur && HS.relatedTarget != SS.contentDOM && SS.dispatch({
            effects: nS.of(null)
          })
        })), this.showOptions(bS, tS.id)
      }
      mount() {
        this.updateSel()
      }
      showOptions(SS, HS) {
        this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(SS, HS, this.range)), this.list.addEventListener("scroll", (() => {
          this.info && this.view.requestMeasure(this.placeInfoReq)
        }))
      }
      update(SS) {
        var HS;
        let gS = SS.state.field(this.stateField),
          tS = SS.startState.field(this.stateField);
        if (this.updateTooltipClass(SS.state), gS != tS) {
          let {
            options: bS,
            selected: XS,
            disabled: xS
          } = gS.open;
          tS.open && tS.open.options == bS || (this.range = JS(bS.length, XS, SS.state.facet(DS).maxRenderedOptions), this.showOptions(bS, gS.id)), this.updateSel(), xS != (null === (HS = tS.open) || void 0 === HS ? void 0 : HS.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!xS)
        }
      }
      updateTooltipClass(SS) {
        let HS = this.tooltipClass(SS);
        if (HS != this.currentClass) {
          for (let SS of this.currentClass.split(" ")) SS && this.dom.classList.remove(SS);
          for (let SS of HS.split(" ")) SS && this.dom.classList.add(SS);
          this.currentClass = HS
        }
      }
      positioned(SS) {
        this.space = SS, this.info && this.view.requestMeasure(this.placeInfoReq)
      }
      updateSel() {
        let SS = this.view.state.field(this.stateField),
          HS = SS.open;
        (HS.selected > -1 && HS.selected < this.range.from || HS.selected >= this.range.to) && (this.range = JS(HS.options.length, HS.selected, this.view.state.facet(DS).maxRenderedOptions), this.showOptions(HS.options, SS.id));
        let gS = this.updateSelectedOption(HS.selected);
        if (gS) {
          this.destroyInfo();
          let {
            completion: tS
          } = HS.options[HS.selected], {
            info: XS
          } = tS;
          if (!XS) return;
          let xS = "string" === typeof XS ? document.createTextNode(XS) : XS(tS);
          if (!xS) return;
          "then" in xS ? xS.then((HS => {
            HS && this.view.state.field(this.stateField, !1) == SS && this.addInfoPane(HS, tS)
          })).catch((SS => (0, bS.T)(this.view.state, SS, "completion info"))) : (this.addInfoPane(xS, tS), gS.setAttribute("aria-describedby", this.info.id))
        }
      }
      addInfoPane(SS, HS) {
        this.destroyInfo();
        let gS = this.info = document.createElement("div");
        if (gS.className = "cm-tooltip cm-completionInfo", gS.id = "cm-completionInfo-" + Math.floor(65535 * Math.random()).toString(16), null != SS.nodeType) gS.appendChild(SS), this.infoDestroy = null;
        else {
          let {
            dom: HS,
            destroy: tS
          } = SS;
          gS.appendChild(HS), this.infoDestroy = tS || null
        }
        this.dom.appendChild(gS), this.view.requestMeasure(this.placeInfoReq)
      }
      updateSelectedOption(SS) {
        let HS = null;
        for (let gS = this.list.firstChild, tS = this.range.from; gS; gS = gS.nextSibling, tS++) "LI" == gS.nodeName && gS.id ? tS == SS ? gS.hasAttribute("aria-selected") || (gS.setAttribute("aria-selected", "true"), HS = gS) : gS.hasAttribute("aria-selected") && (gS.removeAttribute("aria-selected"), gS.removeAttribute("aria-describedby")) : tS--;
        return HS && function(SS, HS) {
          let gS = SS.getBoundingClientRect(),
            tS = HS.getBoundingClientRect(),
            bS = gS.height / SS.offsetHeight;
          tS.top < gS.top ? SS.scrollTop -= (gS.top - tS.top) / bS : tS.bottom > gS.bottom && (SS.scrollTop += (tS.bottom - gS.bottom) / bS)
        }(this.list, HS), HS
      }
      measureInfo() {
        let SS = this.dom.querySelector("[aria-selected]");
        if (!SS || !this.info) return null;
        let HS = this.dom.getBoundingClientRect(),
          gS = this.info.getBoundingClientRect(),
          tS = SS.getBoundingClientRect(),
          bS = this.space;
        if (!bS) {
          let SS = this.dom.ownerDocument.documentElement;
          bS = {
            left: 0,
            top: 0,
            right: SS.clientWidth,
            bottom: SS.clientHeight
          }
        }
        return tS.top > Math.min(bS.bottom, HS.bottom) - 10 || tS.bottom < Math.max(bS.top, HS.top) + 10 ? null : this.view.state.facet(DS).positionInfo(this.view, HS, tS, gS, bS, this.dom)
      }
      placeInfo(SS) {
        this.info && (SS ? (SS.style && (this.info.style.cssText = SS.style), this.info.className = "cm-tooltip cm-completionInfo " + (SS.class || "")) : this.info.style.cssText = "top: -1e6px")
      }
      createListBox(SS, HS, gS) {
        const tS = document.createElement("ul");
        tS.id = HS, tS.setAttribute("role", "listbox"), tS.setAttribute("aria-expanded", "true"), tS.setAttribute("aria-label", this.view.state.phrase("Completions")), tS.addEventListener("mousedown", (SS => {
          SS.target == tS && SS.preventDefault()
        }));
        let bS = null;
        for (let XS = gS.from; XS < gS.to; XS++) {
          let {
            completion: xS,
            match: NS
          } = SS[XS], {
            section: qS
          } = xS;
          if (qS) {
            let SS = "string" == typeof qS ? qS : qS.name;
            if (SS != bS && (XS > gS.from || 0 == gS.from))
              if (bS = SS, "string" != typeof qS && qS.header) tS.appendChild(qS.header(qS));
              else {
                tS.appendChild(document.createElement("completion-section")).textContent = SS
              }
          }
          const uS = tS.appendChild(document.createElement("li"));
          uS.id = HS + "-" + XS, uS.setAttribute("role", "option");
          let IS = this.optionClass(xS);
          IS && (uS.className = IS);
          for (let SS of this.optionContent) {
            let HS = SS(xS, this.view.state, this.view, NS);
            HS && uS.appendChild(HS)
          }
        }
        return gS.from && tS.classList.add("cm-completionListIncompleteTop"), gS.to < SS.length && tS.classList.add("cm-completionListIncompleteBottom"), tS
      }
      destroyInfo() {
        this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
      }
      destroy() {
        this.destroyInfo()
      }
    }

    function dS(SS, HS) {
      return gS => new OS(gS, SS, HS)
    }

    function cS(SS) {
      return 100 * (SS.boost || 0) + (SS.apply ? 10 : 0) + (SS.info ? 5 : 0) + (SS.type ? 1 : 0)
    }
    class vS {
      constructor(SS, HS, gS, tS, bS, XS) {
        this.options = SS, this.attrs = HS, this.tooltip = gS, this.timestamp = tS, this.selected = bS, this.disabled = XS
      }
      setSelected(SS, HS) {
        return SS == this.selected || SS >= this.options.length ? this : new vS(this.options, AS(HS, SS), this.tooltip, this.timestamp, SS, this.disabled)
      }
      static build(SS, HS, gS, tS, bS, XS) {
        if (tS && !XS && SS.some((SS => SS.isPending))) return tS.setDisabled();
        let xS = function(SS, HS) {
          let gS = [],
            tS = null,
            bS = null,
            XS = SS => {
              gS.push(SS);
              let {
                section: HS
              } = SS.completion;
              if (HS) {
                tS || (tS = []);
                let SS = "string" == typeof HS ? HS : HS.name;
                tS.some((HS => HS.name == SS)) || tS.push("string" == typeof HS ? {
                  name: SS
                } : HS)
              }
            },
            xS = HS.facet(DS);
          for (let fS of SS)
            if (fS.hasResult()) {
              let SS = fS.result.getMatch;
              if (!1 === fS.result.filter)
                for (let HS of fS.result.options) XS(new IS(HS, fS.source, SS ? SS(HS) : [], 1e9 - gS.length));
              else {
                let gS, tS = HS.sliceDoc(fS.from, fS.to),
                  NS = xS.filterStrict ? new QS(tS) : new PS(tS);
                for (let HS of fS.result.options)
                  if (gS = NS.match(HS.label)) {
                    let tS = HS.displayLabel ? SS ? SS(HS, gS.matched) : [] : gS.matched,
                      xS = gS.score + (HS.boost || 0);
                    if (XS(new IS(HS, fS.source, tS, xS)), "object" == typeof HS.section && "dynamic" === HS.section.rank) {
                      let {
                        name: SS
                      } = HS.section;
                      bS || (bS = Object.create(null)), bS[SS] = Math.max(xS, bS[SS] || -1e9)
                    }
                  }
              }
            } if (tS) {
            let SS = Object.create(null),
              HS = 0,
              XS = (SS, HS) => ("dynamic" === SS.rank && "dynamic" === HS.rank ? bS[HS.name] - bS[SS.name] : 0) || ("number" == typeof SS.rank ? SS.rank : 1e9) - ("number" == typeof HS.rank ? HS.rank : 1e9) || (SS.name < HS.name ? -1 : 1);
            for (let gS of tS.sort(XS)) HS -= 1e5, SS[gS.name] = HS;
            for (let tS of gS) {
              let {
                section: HS
              } = tS.completion;
              HS && (tS.score += SS["string" == typeof HS ? HS : HS.name])
            }
          }
          let NS = [],
            qS = null,
            uS = xS.compareCompletions;
          for (let IS of gS.sort(((SS, HS) => HS.score - SS.score || uS(SS.completion, HS.completion)))) {
            let SS = IS.completion;
            !qS || qS.label != SS.label || qS.detail != SS.detail || null != qS.type && null != SS.type && qS.type != SS.type || qS.apply != SS.apply || qS.boost != SS.boost ? NS.push(IS) : cS(IS.completion) > cS(qS) && (NS[NS.length - 1] = IS), qS = IS.completion
          }
          return NS
        }(SS, HS);
        if (!xS.length) return tS && SS.some((SS => SS.isPending)) ? tS.setDisabled() : null;
        let NS = HS.facet(DS).selectOnOpen ? 0 : -1;
        if (tS && tS.selected != NS && -1 != tS.selected) {
          let SS = tS.options[tS.selected].completion;
          for (let HS = 0; HS < xS.length; HS++)
            if (xS[HS].completion == SS) {
              NS = HS;
              break
            }
        }
        return new vS(xS, AS(gS, NS), {
          pos: SS.reduce(((SS, HS) => HS.hasResult() ? Math.min(SS, HS.from) : SS), 1e8),
          create: sS,
          above: bS.aboveCursor
        }, tS ? tS.timestamp : Date.now(), NS, !1)
      }
      map(SS) {
        return new vS(this.options, this.attrs, {
          ...this.tooltip,
          pos: SS.mapPos(this.tooltip.pos)
        }, this.timestamp, this.selected, this.disabled)
      }
      setDisabled() {
        return new vS(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0)
      }
    }
    class ES {
      constructor(SS, HS, gS) {
        this.active = SS, this.id = HS, this.open = gS
      }
      static start() {
        return new ES(yS, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
      }
      update(SS) {
        let {
          state: HS
        } = SS, gS = HS.facet(DS), tS = (gS.override || HS.languageDataAt("autocomplete", fS(HS)).map(GS)).map((HS => (this.active.find((SS => SS.source == HS)) || new iS(HS, this.active.some((SS => 0 != SS.state)) ? 1 : 0)).update(SS, gS)));
        tS.length == this.active.length && tS.every(((SS, HS) => SS == this.active[HS])) && (tS = this.active);
        let bS = this.open,
          XS = SS.effects.some((SS => SS.is(zS)));
        bS && SS.docChanged && (bS = bS.map(SS.changes)), SS.selection || tS.some((HS => HS.hasResult() && SS.changes.touchesRange(HS.from, HS.to))) || ! function(SS, HS) {
          if (SS == HS) return !0;
          for (let gS = 0, tS = 0;;) {
            for (; gS < SS.length && !SS[gS].hasResult();) gS++;
            for (; tS < HS.length && !HS[tS].hasResult();) tS++;
            let bS = gS == SS.length,
              XS = tS == HS.length;
            if (bS || XS) return bS == XS;
            if (SS[gS++].result != HS[tS++].result) return !1
          }
        }(tS, this.active) || XS ? bS = vS.build(tS, HS, this.id, bS, gS, XS) : bS && bS.disabled && !tS.some((SS => SS.isPending)) && (bS = null), !bS && tS.every((SS => !SS.isPending)) && tS.some((SS => SS.hasResult())) && (tS = tS.map((SS => SS.hasResult() ? new iS(SS.source, 0) : SS)));
        for (let xS of SS.effects) xS.is(ZS) && (bS = bS && bS.setSelected(xS.value, this.id));
        return tS == this.active && bS == this.open ? this : new ES(tS, this.id, bS)
      }
      get tooltip() {
        return this.open ? this.open.tooltip : null
      }
      get attrs() {
        return this.open ? this.open.attrs : this.active.length ? LS : YS
      }
    }
    const LS = {
        "aria-autocomplete": "list"
      },
      YS = {};

    function AS(SS, HS) {
      let gS = {
        "aria-autocomplete": "list",
        "aria-haspopup": "listbox",
        "aria-controls": SS
      };
      return HS > -1 && (gS["aria-activedescendant"] = SS + "-" + HS), gS
    }
    const yS = [];

    function VS(SS, HS) {
      if (SS.isUserEvent("input.complete")) {
        let gS = SS.annotation(aS);
        if (gS && HS.activateOnCompletion(gS)) return 12
      }
      let gS = SS.isUserEvent("input.type");
      return gS && HS.activateOnTyping ? 5 : gS ? 1 : SS.isUserEvent("delete.backward") ? 2 : SS.selection ? 8 : SS.docChanged ? 16 : 0
    }
    class iS {
      constructor(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.source = SS, this.state = HS, this.explicit = gS
      }
      hasResult() {
        return !1
      }
      get isPending() {
        return 1 == this.state
      }
      update(SS, HS) {
        let gS = VS(SS, HS),
          tS = this;
        (8 & gS || 16 & gS && this.touches(SS)) && (tS = new iS(tS.source, 0)), 4 & gS && 0 == tS.state && (tS = new iS(this.source, 1)), tS = tS.updateFor(SS, gS);
        for (let bS of SS.effects)
          if (bS.is(CS)) tS = new iS(tS.source, 1, bS.value);
          else if (bS.is(nS)) tS = new iS(tS.source, 0);
        else if (bS.is(zS))
          for (let SS of bS.value) SS.source == tS.source && (tS = SS);
        return tS
      }
      updateFor(SS, HS) {
        return this.map(SS.changes)
      }
      map(SS) {
        return this
      }
      touches(SS) {
        return SS.changes.touchesRange(fS(SS.state))
      }
    }
    class WS extends iS {
      constructor(SS, HS, gS, tS, bS, XS) {
        super(SS, 3, HS), this.limit = gS, this.result = tS, this.from = bS, this.to = XS
      }
      hasResult() {
        return !0
      }
      updateFor(SS, HS) {
        var gS;
        if (!(3 & HS)) return this.map(SS.changes);
        let tS = this.result;
        tS.map && !SS.changes.empty && (tS = tS.map(tS, SS.changes));
        let bS = SS.changes.mapPos(this.from),
          XS = SS.changes.mapPos(this.to, 1),
          NS = fS(SS.state);
        if (NS > XS || !tS || 2 & HS && (fS(SS.startState) == this.from || NS < this.limit)) return new iS(this.source, 4 & HS ? 1 : 0);
        let qS = SS.changes.mapPos(this.limit);
        return function(SS, HS, gS, tS) {
          if (!SS) return !1;
          let bS = HS.sliceDoc(gS, tS);
          return "function" == typeof SS ? SS(bS, gS, tS, HS) : kS(SS, !0).test(bS)
        }(tS.validFor, SS.state, bS, XS) ? new WS(this.source, this.explicit, qS, tS, bS, XS) : tS.update && (tS = tS.update(tS, bS, XS, new xS(SS.state, NS, !1))) ? new WS(this.source, this.explicit, qS, tS, tS.from, null !== (gS = tS.to) && void 0 !== gS ? gS : fS(SS.state)) : new iS(this.source, 1, this.explicit)
      }
      map(SS) {
        if (SS.empty) return this;
        return (this.result.map ? this.result.map(this.result, SS) : this.result) ? new WS(this.source, this.explicit, SS.mapPos(this.limit), this.result, SS.mapPos(this.from), SS.mapPos(this.to, 1)) : new iS(this.source, 0)
      }
      touches(SS) {
        return SS.changes.touchesRange(this.from, this.to)
      }
    }
    const zS = tS.G.define({
        map: (SS, HS) => SS.map((SS => SS.map(HS)))
      }),
      US = tS.H.define({
        create: () => ES.start(),
        update: (SS, HS) => SS.update(HS),
        provide: SS => [bS.cb.from(SS, (SS => SS.tooltip)), bS.e.contentAttributes.from(SS, (SS => SS.attrs))]
      });

    function pS(SS, HS) {
      const gS = HS.completion.apply || HS.completion.label;
      let tS = SS.state.field(US).active.find((SS => SS.source == HS.source));
      return tS instanceof WS && ("string" == typeof gS ? SS.dispatch({
        ...KS(SS.state, gS, tS.from, tS.to),
        annotations: aS.of(HS.completion)
      }) : gS(SS, HS.completion, tS.from, tS.to), !0)
    }
    const sS = dS(US, pS);

    function BS(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option";
      return gS => {
        let tS = gS.state.field(US, !1);
        if (!tS || !tS.open || tS.open.disabled || Date.now() - tS.open.timestamp < gS.state.facet(DS).interactionDelay) return !1;
        let XS, xS = 1;
        "page" == HS && (XS = (0, bS.x)(gS, tS.open.tooltip)) && (xS = Math.max(2, Math.floor(XS.dom.offsetHeight / XS.dom.querySelector("li").offsetHeight) - 1));
        let {
          length: NS
        } = tS.open.options, qS = tS.open.selected > -1 ? tS.open.selected + xS * (SS ? 1 : -1) : SS ? 0 : NS - 1;
        return qS < 0 ? qS = "page" == HS ? 0 : NS - 1 : qS >= NS && (qS = "page" == HS ? NS - 1 : 0), gS.dispatch({
          effects: ZS.of(qS)
        }), !0
      }
    }
    const MS = SS => !!SS.state.field(US, !1) && (SS.dispatch({
      effects: CS.of(!0)
    }), !0);
    class FS {
      constructor(SS, HS) {
        this.active = SS, this.context = HS, this.time = Date.now(), this.updates = [], this.done = void 0
      }
    }
    const RS = bS.i.fromClass(class {
        constructor(SS) {
          this.view = SS, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
          for (let HS of SS.state.field(US).active) HS.isPending && this.startQuery(HS)
        }
        update(SS) {
          let HS = SS.state.field(US),
            gS = SS.state.facet(DS);
          if (!SS.selectionSet && !SS.docChanged && SS.startState.field(US) == HS) return;
          let tS = SS.transactions.some((SS => {
            let HS = VS(SS, gS);
            return 8 & HS || (SS.selection || SS.docChanged) && !(3 & HS)
          }));
          for (let NS = 0; NS < this.running.length; NS++) {
            let HS = this.running[NS];
            if (tS || HS.context.abortOnDocChange && SS.docChanged || HS.updates.length + SS.transactions.length > 50 && Date.now() - HS.time > 1e3) {
              for (let SS of HS.context.abortListeners) try {
                SS()
              } catch (xS) {
                (0, bS.T)(this.view.state, xS)
              }
              HS.context.abortListeners = null, this.running.splice(NS--, 1)
            } else HS.updates.push(...SS.transactions)
          }
          this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), SS.transactions.some((SS => SS.effects.some((SS => SS.is(CS))))) && (this.pendingStart = !0);
          let XS = this.pendingStart ? 50 : gS.activateOnTypingDelay;
          if (this.debounceUpdate = HS.active.some((SS => SS.isPending && !this.running.some((HS => HS.active.source == SS.source)))) ? setTimeout((() => this.startUpdate()), XS) : -1, 0 != this.composing)
            for (let bS of SS.transactions) bS.isUserEvent("input.type") ? this.composing = 2 : 2 == this.composing && bS.selection && (this.composing = 3)
        }
        startUpdate() {
          this.debounceUpdate = -1, this.pendingStart = !1;
          let {
            state: SS
          } = this.view, HS = SS.field(US);
          for (let gS of HS.active) gS.isPending && !this.running.some((SS => SS.active.source == gS.source)) && this.startQuery(gS);
          this.running.length && HS.open && HS.open.disabled && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(DS).updateSyncTime))
        }
        startQuery(SS) {
          let {
            state: HS
          } = this.view, gS = fS(HS), tS = new xS(HS, gS, SS.explicit, this.view), XS = new FS(SS, tS);
          this.running.push(XS), Promise.resolve(SS.source(tS)).then((SS => {
            XS.context.aborted || (XS.done = SS || null, this.scheduleAccept())
          }), (SS => {
            this.view.dispatch({
              effects: nS.of(null)
            }), (0, bS.T)(this.view.state, SS)
          }))
        }
        scheduleAccept() {
          this.running.every((SS => void 0 !== SS.done)) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(DS).updateSyncTime))
        }
        accept() {
          var SS;
          this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
          let HS = [],
            gS = this.view.state.facet(DS),
            tS = this.view.state.field(US);
          for (let bS = 0; bS < this.running.length; bS++) {
            let XS = this.running[bS];
            if (void 0 === XS.done) continue;
            if (this.running.splice(bS--, 1), XS.done) {
              let tS = fS(XS.updates.length ? XS.updates[0].startState : this.view.state),
                bS = Math.min(tS, XS.done.from + (XS.active.explicit ? 0 : 1)),
                xS = new WS(XS.active.source, XS.active.explicit, bS, XS.done, XS.done.from, null !== (SS = XS.done.to) && void 0 !== SS ? SS : tS);
              for (let SS of XS.updates) xS = xS.update(SS, gS);
              if (xS.hasResult()) {
                HS.push(xS);
                continue
              }
            }
            let xS = tS.active.find((SS => SS.source == XS.active.source));
            if (xS && xS.isPending)
              if (null == XS.done) {
                let SS = new iS(XS.active.source, 0);
                for (let HS of XS.updates) SS = SS.update(HS, gS);
                SS.isPending || HS.push(SS)
              } else this.startQuery(xS)
          }(HS.length || tS.open && tS.open.disabled) && this.view.dispatch({
            effects: zS.of(HS)
          })
        }
      }, {
        eventHandlers: {
          blur(SS) {
            let HS = this.view.state.field(US, !1);
            if (HS && HS.tooltip && this.view.state.facet(DS).closeOnBlur) {
              let gS = HS.open && (0, bS.x)(this.view, HS.open.tooltip);
              gS && gS.dom.contains(SS.relatedTarget) || setTimeout((() => this.view.dispatch({
                effects: nS.of(null)
              })), 10)
            }
          },
          compositionstart() {
            this.composing = 1
          },
          compositionend() {
            3 == this.composing && setTimeout((() => this.view.dispatch({
              effects: CS.of(!1)
            })), 20), this.composing = 0
          }
        }
      }),
      TS = "object" == typeof navigator && /Win/.test(navigator.platform),
      oS = tS.s.highest(bS.e.domEventHandlers({
        keydown(SS, HS) {
          let gS = HS.state.field(US, !1);
          if (!gS || !gS.open || gS.open.disabled || gS.open.selected < 0 || SS.key.length > 1 || SS.ctrlKey && (!TS || !SS.altKey) || SS.metaKey) return !1;
          let tS = gS.open.options[gS.open.selected],
            bS = gS.active.find((SS => SS.source == tS.source)),
            XS = tS.completion.commitCharacters || bS.result.commitCharacters;
          return XS && XS.indexOf(SS.key) > -1 && pS(HS, tS), !1
        }
      })),
      lS = bS.e.baseTheme({
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
    class mS {
      constructor(SS, HS, gS, tS) {
        this.field = SS, this.line = HS, this.from = gS, this.to = tS
      }
    }
    class eS {
      constructor(SS, HS, gS) {
        this.field = SS, this.from = HS, this.to = gS
      }
      map(SS) {
        let HS = SS.mapPos(this.from, -1, tS.q.TrackDel),
          gS = SS.mapPos(this.to, 1, tS.q.TrackDel);
        return null == HS || null == gS ? null : new eS(this.field, HS, gS)
      }
    }
    class rS {
      constructor(SS, HS) {
        this.lines = SS, this.fieldPositions = HS
      }
      instantiate(SS, HS) {
        let gS = [],
          tS = [HS],
          bS = SS.doc.lineAt(HS),
          xS = /^\s*/.exec(bS.text)[0];
        for (let qS of this.lines) {
          if (gS.length) {
            let gS = xS,
              bS = /^\t*/.exec(qS)[0].length;
            for (let HS = 0; HS < bS; HS++) gS += SS.facet(XS.$);
            tS.push(HS + gS.length - bS), qS = gS + qS.slice(bS)
          }
          gS.push(qS), HS += qS.length + 1
        }
        let NS = this.fieldPositions.map((SS => new eS(SS.field, tS[SS.line] + SS.from, tS[SS.line] + SS.to)));
        return {
          text: gS,
          HG: NS
        }
      }
      static parse(SS) {
        let HS, gS = [],
          tS = [],
          bS = [];
        for (let XS of SS.split(/\r\n?|\n/)) {
          for (; HS = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(XS);) {
            let SS = HS[1] ? +HS[1] : null,
              xS = HS[2] || HS[3] || "",
              NS = -1,
              qS = xS.replace(/\\[{}]/g, (SS => SS[1]));
            for (let HS = 0; HS < gS.length; HS++)(null != SS ? gS[HS].seq == SS : qS && gS[HS].name == qS) && (NS = HS);
            if (NS < 0) {
              let HS = 0;
              for (; HS < gS.length && (null == SS || null != gS[HS].seq && gS[HS].seq < SS);) HS++;
              gS.splice(HS, 0, {
                seq: SS,
                name: qS
              }), NS = HS;
              for (let SS of bS) SS.field >= NS && SS.field++
            }
            for (let gS of bS)
              if (gS.line == tS.length && gS.from > HS.index) {
                let SS = HS[2] ? 3 + (HS[1] || "").length : 2;
                gS.from -= SS, gS.to -= SS
              } bS.push(new mS(NS, tS.length, HS.index, HS.index + qS.length)), XS = XS.slice(0, HS.index) + xS + XS.slice(HS.index + HS[0].length)
          }
          XS = XS.replace(/\\([{}])/g, ((SS, HS, gS) => {
            for (let XS of bS) XS.line == tS.length && XS.from > gS && (XS.from--, XS.to--);
            return HS
          })), tS.push(XS)
        }
        return new rS(tS, bS)
      }
    }
    let SH = bS.b.widget({
        widget: new class extends bS.j {
          toDOM() {
            let SS = document.createElement("span");
            return SS.className = "cm-snippetFieldPosition", SS
          }
          ignoreEvent() {
            return !1
          }
        }
      }),
      HH = bS.b.mark({
        class: "cm-snippetField"
      });
    class gH {
      constructor(SS, HS) {
        this.HG = SS, this.active = HS, this.deco = bS.b.set(SS.map((SS => (SS.from == SS.to ? SH : HH).range(SS.from, SS.to))), !0)
      }
      map(SS) {
        let HS = [];
        for (let gS of this.HG) {
          let tS = gS.map(SS);
          if (!tS) return null;
          HS.push(tS)
        }
        return new gH(HS, this.active)
      }
      selectionInsideField(SS) {
        return SS.HG.every((SS => this.HG.some((HS => HS.field == this.active && HS.from <= SS.from && HS.to >= SS.to))))
      }
    }
    const tH = tS.G.define({
        map: (SS, HS) => SS && SS.map(HS)
      }),
      bH = tS.G.define(),
      XH = tS.H.define({
        create: () => null,
        update(SS, HS) {
          for (let gS of HS.effects) {
            if (gS.is(tH)) return gS.value;
            if (gS.is(bH) && SS) return new gH(SS.HG, gS.value)
          }
          return SS && HS.docChanged && (SS = SS.map(HS.changes)), SS && HS.selection && !SS.selectionInsideField(HS.selection) && (SS = null), SS
        },
        provide: SS => bS.e.KS.from(SS, (SS => SS ? SS.deco : bS.b.none))
      });

    function xH(SS, HS) {
      return tS.i.create(SS.filter((SS => SS.field == HS)).map((SS => tS.i.range(SS.from, SS.to))))
    }

    function NH(SS) {
      let HS = rS.parse(SS);
      return (SS, gS, bS, XS) => {
        let {
          text: xS,
          HG: NS
        } = HS.instantiate(SS.state, bS), {
          main: qS
        } = SS.state.selection, uS = {
          changes: {
            from: bS,
            to: XS == qS.from ? qS.to : XS,
            insert: tS.L.of(xS)
          },
          scrollIntoView: !0,
          annotations: gS ? [aS.of(gS), tS.N.userEvent.of("input.complete")] : void 0
        };
        if (NS.length && (uS.selection = xH(NS, 0)), NS.some((SS => SS.field > 0))) {
          let HS = new gH(NS, 0),
            gS = uS.effects = [tH.of(HS)];
          void 0 === SS.state.field(XH, !1) && gS.push(tS.G.appendConfig.of([XH, fH, aH, lS]))
        }
        SS.dispatch(SS.state.update(uS))
      }
    }

    function qH(SS) {
      return HS => {
        let {
          state: gS,
          dispatch: tS
        } = HS, bS = gS.field(XH, !1);
        if (!bS || SS < 0 && 0 == bS.active) return !1;
        let XS = bS.active + SS,
          xS = SS > 0 && !bS.HG.some((HS => HS.field == XS + SS));
        return tS(gS.update({
          selection: xH(bS.HG, XS),
          effects: tH.of(xS ? null : new gH(bS.HG, XS)),
          scrollIntoView: !0
        })), !0
      }
    }
    const uH = [{
        key: "Tab",
        run: qH(1),
        shift: qH(-1)
      }, {
        key: "Escape",
        run: SS => {
          let {
            state: HS,
            dispatch: gS
          } = SS;
          return !!HS.field(XH, !1) && (gS(HS.update({
            effects: tH.of(null)
          })), !0)
        }
      }],
      IH = tS.n.define({
        combine: SS => SS.length ? SS[0] : uH
      }),
      fH = tS.s.highest(bS.L.compute([IH], (SS => SS.facet(IH))));

    function kH(SS, HS) {
      return {
        ...HS,
        apply: NH(SS)
      }
    }
    const aH = bS.e.domEventHandlers({
      mousedown(SS, HS) {
        let gS, tS = HS.state.field(XH, !1);
        if (!tS || null == (gS = HS.posAtCoords({
            x: SS.clientX,
            y: SS.clientY
          }))) return !1;
        let bS = tS.HG.find((SS => SS.from <= gS && SS.to >= gS));
        return !(!bS || bS.field == tS.active) && (HS.dispatch({
          selection: xH(tS.HG, bS.field),
          effects: tH.of(tS.HG.some((SS => SS.field > bS.field)) ? new gH(tS.HG, bS.field) : null),
          scrollIntoView: !0
        }), !0)
      }
    });
    const KH = {
        brackets: ["(", "[", "{", "'", '"'],
        before: ")]}:;>",
        stringPrefixes: []
      },
      jH = tS.G.define({
        map(SS, HS) {
          let gS = HS.mapPos(SS, -1, tS.q.TrackAfter);
          return null == gS ? void 0 : gS
        }
      }),
      GH = new class extends tS.D {};
    GH.startSide = 1, GH.endSide = -1;
    const CH = tS.H.define({
      create: () => tS.A.empty,
      update(SS, HS) {
        if (SS = SS.map(HS.changes), HS.selection) {
          let gS = HS.state.doc.lineAt(HS.selection.main.head);
          SS = SS.update({
            filter: SS => SS >= gS.from && SS <= gS.to
          })
        }
        for (let gS of HS.effects) gS.is(jH) && (SS = SS.update({
          add: [GH.range(gS.value, gS.value + 1)]
        }));
        return SS
      }
    });

    function nH() {
      return [hH, CH]
    }
    const PH = "()[]{}<>\xab\xbb\xbb\xab\uff3b\uff3d\uff5b\uff5d";

    function QH(SS) {
      for (let HS = 0; HS < 16; HS += 2)
        if (PH.charCodeAt(HS) == SS) return PH.charAt(HS + 1);
      return (0, tS.eb)(SS < 128 ? SS : SS + 1)
    }

    function DH(SS, HS) {
      return SS.languageDataAt("closeBrackets", HS)[0] || KH
    }
    const wH = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      hH = bS.e.inputHandler.of(((SS, HS, gS, bS) => {
        if ((wH ? SS.composing : SS.compositionStarted) || SS.state.readOnly) return !1;
        let XS = SS.state.selection.main;
        if (bS.length > 2 || 2 == bS.length && 1 == (0, tS.T)((0, tS.Q)(bS, 0)) || HS != XS.from || gS != XS.to) return !1;
        let xS = function(SS, HS) {
          let gS = DH(SS, SS.selection.main.head),
            bS = gS.brackets || KH.brackets;
          for (let XS of bS) {
            let xS = QH((0, tS.Q)(XS, 0));
            if (HS == XS) return xS == XS ? vH(SS, XS, bS.indexOf(XS + XS + XS) > -1, gS) : dH(SS, XS, xS, gS.before || KH.before);
            if (HS == xS && JH(SS, SS.selection.main.from)) return cH(SS, XS, xS)
          }
          return null
        }(SS.state, bS);
        return !!xS && (SS.dispatch(xS), !0)
      })),
      ZH = [{
        key: "Backspace",
        run: SS => {
          let {
            state: HS,
            dispatch: gS
          } = SS;
          if (HS.readOnly) return !1;
          let bS = DH(HS, HS.selection.main.head).brackets || KH.brackets,
            XS = null,
            xS = HS.changeByRange((SS => {
              if (SS.empty) {
                let gS = function(SS, HS) {
                  let gS = SS.sliceString(HS - 2, HS);
                  return (0, tS.T)((0, tS.Q)(gS, 0)) == gS.length ? gS : gS.slice(1)
                }(HS.doc, SS.head);
                for (let XS of bS)
                  if (XS == gS && OH(HS.doc, SS.head) == QH((0, tS.Q)(XS, 0))) return {
                    changes: {
                      from: SS.head - XS.length,
                      to: SS.head + XS.length
                    },
                    range: tS.i.cursor(SS.head - XS.length)
                  }
              }
              return {
                range: XS = SS
              }
            }));
          return XS || gS(HS.update(xS, {
            scrollIntoView: !0,
            userEvent: "delete.backward"
          })), !XS
        }
      }];

    function JH(SS, HS) {
      let gS = !1;
      return SS.field(CH).between(0, SS.doc.length, (SS => {
        SS == HS && (gS = !0)
      })), gS
    }

    function OH(SS, HS) {
      let gS = SS.sliceString(HS, HS + 2);
      return gS.slice(0, (0, tS.T)((0, tS.Q)(gS, 0)))
    }

    function dH(SS, HS, gS, bS) {
      let XS = null,
        xS = SS.changeByRange((xS => {
          if (!xS.empty) return {
            changes: [{
              insert: HS,
              from: xS.from
            }, {
              insert: gS,
              from: xS.to
            }],
            effects: jH.of(xS.to + HS.length),
            range: tS.i.range(xS.anchor + HS.length, xS.head + HS.length)
          };
          let NS = OH(SS.doc, xS.head);
          return !NS || /\s/.test(NS) || bS.indexOf(NS) > -1 ? {
            changes: {
              insert: HS + gS,
              from: xS.head
            },
            effects: jH.of(xS.head + HS.length),
            range: tS.i.cursor(xS.head + HS.length)
          } : {
            range: XS = xS
          }
        }));
      return XS ? null : SS.update(xS, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function cH(SS, HS, gS) {
      let bS = null,
        XS = SS.changeByRange((HS => HS.empty && OH(SS.doc, HS.head) == gS ? {
          changes: {
            from: HS.head,
            to: HS.head + gS.length,
            insert: gS
          },
          range: tS.i.cursor(HS.head + gS.length)
        } : bS = {
          range: HS
        }));
      return bS ? null : SS.update(XS, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function vH(SS, HS, gS, bS) {
      let xS = bS.stringPrefixes || KH.stringPrefixes,
        NS = null,
        qS = SS.changeByRange((bS => {
          if (!bS.empty) return {
            changes: [{
              insert: HS,
              from: bS.from
            }, {
              insert: HS,
              from: bS.to
            }],
            effects: jH.of(bS.to + HS.length),
            range: tS.i.range(bS.anchor + HS.length, bS.head + HS.length)
          };
          let qS, uS = bS.head,
            IS = OH(SS.doc, uS);
          if (IS == HS) {
            if (EH(SS, uS)) return {
              changes: {
                insert: HS + HS,
                from: uS
              },
              effects: jH.of(uS + HS.length),
              range: tS.i.cursor(uS + HS.length)
            };
            if (JH(SS, uS)) {
              let bS = gS && SS.sliceDoc(uS, uS + 3 * HS.length) == HS + HS + HS ? HS + HS + HS : HS;
              return {
                changes: {
                  from: uS,
                  to: uS + bS.length,
                  insert: bS
                },
                range: tS.i.cursor(uS + bS.length)
              }
            }
          } else {
            if (gS && SS.sliceDoc(uS - 2 * HS.length, uS) == HS + HS && (qS = LH(SS, uS - 2 * HS.length, xS)) > -1 && EH(SS, qS)) return {
              changes: {
                insert: HS + HS + HS + HS,
                from: uS
              },
              effects: jH.of(uS + HS.length),
              range: tS.i.cursor(uS + HS.length)
            };
            if (SS.charCategorizer(uS)(IS) != tS.g.Word && LH(SS, uS, xS) > -1 && ! function(SS, HS, gS, tS) {
                let bS = (0, XS.ob)(SS).resolveInner(HS, -1),
                  xS = tS.reduce(((SS, HS) => Math.max(SS, HS.length)), 0);
                for (let XS = 0; XS < 5; XS++) {
                  let XS = SS.sliceDoc(bS.from, Math.min(bS.to, bS.from + gS.length + xS)),
                    NS = XS.indexOf(gS);
                  if (!NS || NS > -1 && tS.indexOf(XS.slice(0, NS)) > -1) {
                    let HS = bS.firstChild;
                    for (; HS && HS.from == bS.from && HS.to - HS.from > gS.length + NS;) {
                      if (SS.sliceDoc(HS.to - gS.length, HS.to) == gS) return !1;
                      HS = HS.firstChild
                    }
                    return !0
                  }
                  let qS = bS.to == HS && bS.parent;
                  if (!qS) break;
                  bS = qS
                }
                return !1
              }(SS, uS, HS, xS)) return {
              changes: {
                insert: HS + HS,
                from: uS
              },
              effects: jH.of(uS + HS.length),
              range: tS.i.cursor(uS + HS.length)
            }
          }
          return {
            range: NS = bS
          }
        }));
      return NS ? null : SS.update(qS, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function EH(SS, HS) {
      let gS = (0, XS.ob)(SS).resolveInner(HS + 1);
      return gS.parent && gS.from == HS
    }

    function LH(SS, HS, gS) {
      let bS = SS.charCategorizer(HS);
      if (bS(SS.sliceDoc(HS - 1, HS)) != tS.g.Word) return HS;
      for (let XS of gS) {
        let gS = HS - XS.length;
        if (SS.sliceDoc(gS, HS) == XS && bS(SS.sliceDoc(gS - 1, gS)) != tS.g.Word) return gS
      }
      return -1
    }

    function YH() {
      let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [oS, US, DS.of(SS), RS, yH, lS]
    }
    const AH = [{
        key: "Ctrl-Space",
        run: MS
      }, {
        mac: "Alt-`",
        run: MS
      }, {
        mac: "Alt-i",
        run: MS
      }, {
        key: "Escape",
        run: SS => {
          let HS = SS.state.field(US, !1);
          return !(!HS || !HS.active.some((SS => 0 != SS.state))) && (SS.dispatch({
            effects: nS.of(null)
          }), !0)
        }
      }, {
        key: "ArrowDown",
        run: BS(!0)
      }, {
        key: "ArrowUp",
        run: BS(!1)
      }, {
        key: "PageDown",
        run: BS(!0, "page")
      }, {
        key: "PageUp",
        run: BS(!1, "page")
      }, {
        key: "Enter",
        run: SS => {
          let HS = SS.state.field(US, !1);
          return !(SS.state.readOnly || !HS || !HS.open || HS.open.selected < 0 || HS.open.disabled || Date.now() - HS.open.timestamp < SS.state.facet(DS).interactionDelay) && pS(SS, HS.open.options[HS.open.selected])
        }
      }],
      yH = tS.s.highest(bS.L.computeN([DS], (SS => SS.facet(DS).defaultKeymap ? [AH] : [])))
  },
  41459: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => uS,
      e: () => kS,
      h: () => IS,
      l: () => fS
    });
    var tS = gS(41315);
    class bS {
      constructor(SS, HS, gS, tS) {
        this.origin = SS, this.changes = HS, this.effects = gS, this.clientID = tS
      }
    }
    class XS {
      constructor(SS, HS) {
        this.version = SS, this.unconfirmed = HS
      }
    }
    const xS = tS.n.define({
        combine(SS) {
          let HS = (0, tS.W)(SS, {
            startVersion: 0,
            clientID: null,
            sharedEffects: () => []
          }, {
            generatedID: SS => SS
          });
          return null == HS.clientID && (HS.clientID = SS.length && SS[0].generatedID || ""), HS
        }
      }),
      NS = tS.d.define(),
      qS = tS.H.define({
        create: SS => new XS(SS.facet(xS).startVersion, []),
        update(SS, HS) {
          let gS = HS.annotation(NS);
          if (gS) return gS;
          let {
            sharedEffects: tS,
            clientID: qS
          } = HS.startState.facet(xS), uS = tS(HS);
          return uS.length || !HS.changes.empty ? new XS(SS.version, SS.unconfirmed.concat(new bS(HS, HS.changes, uS, qS))) : SS
        }
      });

    function uS() {
      let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [qS, xS.of(Object.assign({
        generatedID: Math.floor(1e9 * Math.random()).toString(36)
      }, SS))]
    }

    function IS(SS, HS) {
      let {
        version: gS,
        unconfirmed: uS
      } = SS.field(qS), {
        clientID: IS
      } = SS.facet(xS);
      gS += HS.length;
      let fS = [],
        kS = null,
        aS = 0;
      for (let bS of HS) {
        let SS = aS < uS.length ? uS[aS] : null;
        SS && SS.clientID == bS.clientID ? (kS && (kS = kS.map(SS.changes, !0)), fS = tS.G.mapEffects(fS, bS.changes), aS++) : (fS = tS.G.mapEffects(fS, bS.changes), bS.effects && (fS = fS.concat(bS.effects)), kS = kS ? kS.compose(bS.changes) : bS.changes)
      }
      if (aS && (uS = uS.slice(aS)), uS.length && (kS && (uS = uS.map((SS => {
          let HS = SS.changes.map(kS);
          return kS = kS.map(SS.changes, !0), new bS(SS.origin, HS, tS.G.mapEffects(SS.effects, kS), IS)
        }))), fS.length)) {
        let SS = uS.reduce(((SS, HS) => SS.compose(HS.changes)), tS.ChangeSet.empty(uS[0].changes.length));
        fS = tS.G.mapEffects(fS, SS)
      }
      return kS ? SS.update({
        changes: kS,
        effects: fS,
        annotations: [tS.N.addToHistory.of(!1), tS.N.remote.of(!0), NS.of(new XS(gS, uS))],
        filter: !1
      }) : SS.update({
        annotations: [NS.of(new XS(gS, uS))]
      })
    }

    function fS(SS) {
      return SS.field(qS).unconfirmed
    }

    function kS(SS) {
      return SS.field(qS).version
    }
  },
  41349: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => jH
    });
    var tS = gS(41336);
    class bS {
      constructor(SS, HS, gS, tS, bS, XS, xS, NS, qS) {
        let uS = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          IS = arguments.length > 10 ? arguments[10] : void 0;
        this.p = SS, this.stack = HS, this.state = gS, this.reducePos = tS, this.pos = bS, this.score = XS, this.buffer = xS, this.bufferBase = NS, this.curContext = qS, this.lookAhead = uS, this.parent = IS
      }
      toString() {
        return `[${this.stack.filter(((SS,HS)=>HS%3==0)).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`
      }
      static start(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          tS = SS.parser.context;
        return new bS(SS, [], HS, gS, gS, 0, [], 0, tS ? new XS(tS, tS.start) : null, 0, null)
      }
      get context() {
        return this.curContext ? this.curContext.context : null
      }
      pushState(SS, HS) {
        this.stack.push(this.state, HS, this.bufferBase + this.buffer.length), this.state = SS
      }
      reduce(SS) {
        var HS;
        let gS = SS >> 19,
          tS = 65535 & SS,
          {
            parser: bS
          } = this.p,
          XS = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos),
          xS = bS.dynamicPrecedence(tS);
        if (xS && (this.score += xS), 0 == gS) return this.pushState(bS.getGoto(this.state, tS, !0), this.reducePos), tS < bS.minRepeatTerm && this.storeNode(tS, this.reducePos, this.reducePos, XS ? 8 : 4, !0), void this.reduceContext(tS, this.reducePos);
        let NS = this.stack.length - 3 * (gS - 1) - (262144 & SS ? 6 : 0),
          qS = NS ? this.stack[NS - 2] : this.p.HG[0].from,
          uS = this.reducePos - qS;
        uS >= 2e3 && !(null === (HS = this.p.parser.nodeSet.types[tS]) || void 0 === HS ? void 0 : HS.isAnonymous) && (qS == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = uS) : this.p.lastBigReductionSize < uS && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = qS, this.p.lastBigReductionSize = uS));
        let IS = NS ? this.stack[NS - 1] : 0,
          fS = this.bufferBase + this.buffer.length - IS;
        if (tS < bS.minRepeatTerm || 131072 & SS) {
          let SS = bS.stateFlag(this.state, 1) ? this.pos : this.reducePos;
          this.storeNode(tS, qS, SS, fS + 4, !0)
        }
        if (262144 & SS) this.state = this.stack[NS];
        else {
          let SS = this.stack[NS - 3];
          this.state = bS.getGoto(SS, tS, !0)
        }
        for (; this.stack.length > NS;) this.stack.pop();
        this.reduceContext(tS, qS)
      }
      storeNode(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
          bS = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (0 == SS && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
          let SS = this,
            tS = this.buffer.length;
          if (0 == tS && SS.parent && (tS = SS.bufferBase - SS.parent.bufferBase, SS = SS.parent), tS > 0 && 0 == SS.buffer[tS - 4] && SS.buffer[tS - 1] > -1) {
            if (HS == gS) return;
            if (SS.buffer[tS - 2] >= HS) return void(SS.buffer[tS - 2] = gS)
          }
        }
        if (bS && this.pos != gS) {
          let bS = this.buffer.length;
          if (bS > 0 && (0 != this.buffer[bS - 4] || this.buffer[bS - 1] < 0)) {
            let SS = !1;
            for (let HS = bS; HS > 0 && this.buffer[HS - 2] > gS; HS -= 4)
              if (this.buffer[HS - 1] >= 0) {
                SS = !0;
                break
              } if (SS)
              for (; bS > 0 && this.buffer[bS - 2] > gS;) this.buffer[bS] = this.buffer[bS - 4], this.buffer[bS + 1] = this.buffer[bS - 3], this.buffer[bS + 2] = this.buffer[bS - 2], this.buffer[bS + 3] = this.buffer[bS - 1], bS -= 4, tS > 4 && (tS -= 4)
          }
          this.buffer[bS] = SS, this.buffer[bS + 1] = HS, this.buffer[bS + 2] = gS, this.buffer[bS + 3] = tS
        } else this.buffer.push(SS, HS, gS, tS)
      }
      shift(SS, HS, gS, tS) {
        if (131072 & SS) this.pushState(65535 & SS, this.pos);
        else if (0 == (262144 & SS)) {
          let bS = SS,
            {
              parser: XS
            } = this.p;
          this.pos = tS;
          let xS = XS.stateFlag(bS, 1);
          !xS && (tS > gS || HS <= XS.maxNode) && (this.reducePos = tS), this.pushState(bS, xS ? gS : Math.min(gS, this.reducePos)), this.shiftContext(HS, gS), HS <= XS.maxNode && this.buffer.push(HS, gS, tS, 4)
        } else this.pos = tS, this.shiftContext(HS, gS), HS <= this.p.parser.maxNode && this.buffer.push(HS, gS, tS, 4)
      }
      apply(SS, HS, gS, tS) {
        65536 & SS ? this.reduce(SS) : this.shift(SS, HS, gS, tS)
      }
      useNode(SS, HS) {
        let gS = this.p.reused.length - 1;
        (gS < 0 || this.p.reused[gS] != SS) && (this.p.reused.push(SS), gS++);
        let tS = this.pos;
        this.reducePos = this.pos = tS + SS.length, this.pushState(HS, tS), this.buffer.push(gS, tS, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, SS, this, this.p.stream.reset(this.pos - SS.length)))
      }
      split() {
        let SS = this,
          HS = SS.buffer.length;
        for (; HS > 0 && SS.buffer[HS - 2] > SS.reducePos;) HS -= 4;
        let gS = SS.buffer.slice(HS),
          tS = SS.bufferBase + HS;
        for (; SS && tS == SS.bufferBase;) SS = SS.parent;
        return new bS(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, gS, tS, this.curContext, this.lookAhead, SS)
      }
      recoverByDelete(SS, HS) {
        let gS = SS <= this.p.parser.maxNode;
        gS && this.storeNode(SS, this.pos, HS, 4), this.storeNode(0, this.pos, HS, gS ? 8 : 4), this.pos = this.reducePos = HS, this.score -= 190
      }
      canShift(SS) {
        for (let HS = new xS(this);;) {
          let gS = this.p.parser.stateSlot(HS.state, 4) || this.p.parser.hasAction(HS.state, SS);
          if (0 == gS) return !1;
          if (0 == (65536 & gS)) return !0;
          HS.reduce(gS)
        }
      }
      recoverByInsert(SS) {
        if (this.stack.length >= 300) return [];
        let HS = this.p.parser.nextStates(this.state);
        if (HS.length > 8 || this.stack.length >= 120) {
          let gS = [];
          for (let tS, bS = 0; bS < HS.length; bS += 2)(tS = HS[bS + 1]) != this.state && this.p.parser.hasAction(tS, SS) && gS.push(HS[bS], tS);
          if (this.stack.length < 120)
            for (let SS = 0; gS.length < 8 && SS < HS.length; SS += 2) {
              let tS = HS[SS + 1];
              gS.some(((SS, HS) => 1 & HS && SS == tS)) || gS.push(HS[SS], tS)
            }
          HS = gS
        }
        let gS = [];
        for (let tS = 0; tS < HS.length && gS.length < 4; tS += 2) {
          let SS = HS[tS + 1];
          if (SS == this.state) continue;
          let bS = this.split();
          bS.pushState(SS, this.pos), bS.storeNode(0, bS.pos, bS.pos, 4, !0), bS.shiftContext(HS[tS], this.pos), bS.reducePos = this.pos, bS.score -= 200, gS.push(bS)
        }
        return gS
      }
      forceReduce() {
        let {
          parser: SS
        } = this.p, HS = SS.stateSlot(this.state, 5);
        if (0 == (65536 & HS)) return !1;
        if (!SS.validAction(this.state, HS)) {
          let gS = HS >> 19,
            tS = 65535 & HS,
            bS = this.stack.length - 3 * gS;
          if (bS < 0 || SS.getGoto(this.stack[bS], tS, !1) < 0) {
            let SS = this.findForcedReduction();
            if (null == SS) return !1;
            HS = SS
          }
          this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100
        }
        return this.reducePos = this.pos, this.reduce(HS), !0
      }
      findForcedReduction() {
        let {
          parser: SS
        } = this.p, HS = [], gS = (tS, bS) => {
          if (!HS.includes(tS)) return HS.push(tS), SS.allActions(tS, (HS => {
            if (393216 & HS);
            else if (65536 & HS) {
              let gS = (HS >> 19) - bS;
              if (gS > 1) {
                let tS = 65535 & HS,
                  bS = this.stack.length - 3 * gS;
                if (bS >= 0 && SS.getGoto(this.stack[bS], tS, !1) >= 0) return gS << 19 | 65536 | tS
              }
            } else {
              let SS = gS(HS, bS + 1);
              if (null != SS) return SS
            }
          }))
        };
        return gS(this.state, 0)
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
          parser: SS
        } = this.p;
        return 65535 == SS.data[SS.stateSlot(this.state, 1)] && !SS.stateSlot(this.state, 4)
      }
      restart() {
        this.storeNode(0, this.pos, this.pos, 4, !0), this.state = this.stack[0], this.stack.length = 0
      }
      sameState(SS) {
        if (this.state != SS.state || this.stack.length != SS.stack.length) return !1;
        for (let HS = 0; HS < this.stack.length; HS += 3)
          if (this.stack[HS] != SS.stack[HS]) return !1;
        return !0
      }
      get parser() {
        return this.p.parser
      }
      dialectEnabled(SS) {
        return this.p.parser.dialect.flags[SS]
      }
      shiftContext(SS, HS) {
        this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, SS, this, this.p.stream.reset(HS)))
      }
      reduceContext(SS, HS) {
        this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, SS, this, this.p.stream.reset(HS)))
      }
      emitContext() {
        let SS = this.buffer.length - 1;
        (SS < 0 || -3 != this.buffer[SS]) && this.buffer.push(this.curContext.hash, this.pos, this.pos, -3)
      }
      emitLookAhead() {
        let SS = this.buffer.length - 1;
        (SS < 0 || -4 != this.buffer[SS]) && this.buffer.push(this.lookAhead, this.pos, this.pos, -4)
      }
      updateContext(SS) {
        if (SS != this.curContext.context) {
          let HS = new XS(this.curContext.tracker, SS);
          HS.hash != this.curContext.hash && this.emitContext(), this.curContext = HS
        }
      }
      setLookAhead(SS) {
        return !(SS <= this.lookAhead) && (this.emitLookAhead(), this.lookAhead = SS, !0)
      }
      close() {
        this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead()
      }
    }
    class XS {
      constructor(SS, HS) {
        this.tracker = SS, this.context = HS, this.hash = SS.strict ? SS.hash(HS) : 0
      }
    }
    class xS {
      constructor(SS) {
        this.start = SS, this.state = SS.state, this.stack = SS.stack, this.base = this.stack.length
      }
      reduce(SS) {
        let HS = 65535 & SS,
          gS = SS >> 19;
        0 == gS ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= 3 * (gS - 1);
        let tS = this.start.p.parser.getGoto(this.stack[this.base - 3], HS, !0);
        this.state = tS
      }
    }
    class NS {
      constructor(SS, HS, gS) {
        this.stack = SS, this.pos = HS, this.index = gS, this.buffer = SS.buffer, 0 == this.index && this.maybeNext()
      }
      static create(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SS.bufferBase + SS.buffer.length;
        return new NS(SS, HS, HS - SS.bufferBase)
      }
      maybeNext() {
        let SS = this.stack.parent;
        null != SS && (this.index = this.stack.bufferBase - SS.bufferBase, this.stack = SS, this.buffer = SS.buffer)
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
        return new NS(this.stack, this.pos, this.index)
      }
    }

    function qS(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uint16Array;
      if ("string" != typeof SS) return SS;
      let gS = null;
      for (let tS = 0, bS = 0; tS < SS.length;) {
        let XS = 0;
        for (;;) {
          let HS = SS.charCodeAt(tS++),
            gS = !1;
          if (126 == HS) {
            XS = 65535;
            break
          }
          HS >= 92 && HS--, HS >= 34 && HS--;
          let bS = HS - 32;
          if (bS >= 46 && (bS -= 46, gS = !0), XS += bS, gS) break;
          XS *= 46
        }
        gS ? gS[bS++] = XS : gS = new HS(XS)
      }
      return gS
    }
    class uS {
      constructor() {
        this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0
      }
    }
    const IS = new uS;
    class fS {
      constructor(SS, HS) {
        this.input = SS, this.HG = HS, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = IS, this.rangeIndex = 0, this.pos = this.chunkPos = HS[0].from, this.range = HS[0], this.end = HS[HS.length - 1].to, this.readNext()
      }
      resolveOffset(SS, HS) {
        let gS = this.range,
          tS = this.rangeIndex,
          bS = this.pos + SS;
        for (; bS < gS.from;) {
          if (!tS) return null;
          let SS = this.HG[--tS];
          bS -= gS.from - SS.to, gS = SS
        }
        for (; HS < 0 ? bS > gS.to : bS >= gS.to;) {
          if (tS == this.HG.length - 1) return null;
          let SS = this.HG[++tS];
          bS += SS.from - gS.to, gS = SS
        }
        return bS
      }
      clipPos(SS) {
        if (SS >= this.range.from && SS < this.range.to) return SS;
        for (let HS of this.HG)
          if (HS.to > SS) return Math.max(SS, HS.from);
        return this.end
      }
      peek(SS) {
        let HS, gS, tS = this.chunkOff + SS;
        if (tS >= 0 && tS < this.chunk.length) HS = this.pos + SS, gS = this.chunk.charCodeAt(tS);
        else {
          let tS = this.resolveOffset(SS, 1);
          if (null == tS) return -1;
          if (HS = tS, HS >= this.chunk2Pos && HS < this.chunk2Pos + this.chunk2.length) gS = this.chunk2.charCodeAt(HS - this.chunk2Pos);
          else {
            let SS = this.rangeIndex,
              tS = this.range;
            for (; tS.to <= HS;) tS = this.HG[++SS];
            this.chunk2 = this.input.chunk(this.chunk2Pos = HS), HS + this.chunk2.length > tS.to && (this.chunk2 = this.chunk2.slice(0, tS.to - HS)), gS = this.chunk2.charCodeAt(0)
          }
        }
        return HS >= this.token.lookAhead && (this.token.lookAhead = HS + 1), gS
      }
      acceptToken(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gS = HS ? this.resolveOffset(HS, -1) : this.pos;
        if (null == gS || gS < this.token.start) throw new RangeError("Token end out of bounds");
        this.token.value = SS, this.token.end = gS
      }
      acceptTokenTo(SS, HS) {
        this.token.value = SS, this.token.end = HS
      }
      getChunk() {
        if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
          let {
            chunk: SS,
            chunkPos: HS
          } = this;
          this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = SS, this.chunk2Pos = HS, this.chunkOff = this.pos - this.chunkPos
        } else {
          this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
          let SS = this.input.chunk(this.pos),
            HS = this.pos + SS.length;
          this.chunk = HS > this.range.to ? SS.slice(0, this.range.to - this.pos) : SS, this.chunkPos = this.pos, this.chunkOff = 0
        }
      }
      readNext() {
        return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff)
      }
      advance() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        for (this.chunkOff += SS; this.pos + SS >= this.range.to;) {
          if (this.rangeIndex == this.HG.length - 1) return this.setDone();
          SS -= this.range.to - this.pos, this.range = this.HG[++this.rangeIndex], this.pos = this.range.from
        }
        return this.pos += SS, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext()
      }
      setDone() {
        return this.pos = this.chunkPos = this.end, this.range = this.HG[this.rangeIndex = this.HG.length - 1], this.chunk = "", this.next = -1
      }
      reset(SS, HS) {
        if (HS ? (this.token = HS, HS.start = SS, HS.lookAhead = SS + 1, HS.value = HS.extended = -1) : this.token = IS, this.pos != SS) {
          if (this.pos = SS, SS == this.end) return this.setDone(), this;
          for (; SS < this.range.from;) this.range = this.HG[--this.rangeIndex];
          for (; SS >= this.range.to;) this.range = this.HG[++this.rangeIndex];
          SS >= this.chunkPos && SS < this.chunkPos + this.chunk.length ? this.chunkOff = SS - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext()
        }
        return this
      }
      read(SS, HS) {
        if (SS >= this.chunkPos && HS <= this.chunkPos + this.chunk.length) return this.chunk.slice(SS - this.chunkPos, HS - this.chunkPos);
        if (SS >= this.chunk2Pos && HS <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(SS - this.chunk2Pos, HS - this.chunk2Pos);
        if (SS >= this.range.from && HS <= this.range.to) return this.input.read(SS, HS);
        let gS = "";
        for (let tS of this.HG) {
          if (tS.from >= HS) break;
          tS.to > SS && (gS += this.input.read(Math.max(tS.from, SS), Math.min(tS.to, HS)))
        }
        return gS
      }
    }
    class kS {
      constructor(SS, HS) {
        this.data = SS, this.id = HS
      }
      token(SS, HS) {
        let {
          parser: gS
        } = HS.p;
        jS(this.data, SS, HS, this.id, gS.data, gS.tokenPrecTable)
      }
    }
    kS.prototype.contextual = kS.prototype.fallback = kS.prototype.extend = !1;
    class aS {
      constructor(SS, HS, gS) {
        this.precTable = HS, this.elseToken = gS, this.data = "string" == typeof SS ? qS(SS) : SS
      }
      token(SS, HS) {
        let gS = SS.pos,
          tS = 0;
        for (;;) {
          let gS = SS.next < 0,
            bS = SS.resolveOffset(1, 1);
          if (jS(this.data, SS, HS, 0, this.data, this.precTable), SS.token.value > -1) break;
          if (null == this.elseToken) return;
          if (gS || tS++, null == bS) break;
          SS.reset(bS, SS.token)
        }
        tS && (SS.reset(gS, SS.token), SS.acceptToken(this.elseToken, tS))
      }
    }
    aS.prototype.contextual = kS.prototype.fallback = kS.prototype.extend = !1;
    class KS {
      constructor(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.token = SS, this.contextual = !!HS.contextual, this.fallback = !!HS.fallback, this.extend = !!HS.extend
      }
    }

    function jS(SS, HS, gS, tS, bS, XS) {
      let xS = 0,
        NS = 1 << tS,
        {
          dialect: qS
        } = gS.p.parser;
      SS: for (; 0 != (NS & SS[xS]);) {
        let gS = SS[xS + 1];
        for (let fS = xS + 3; fS < gS; fS += 2)
          if ((SS[fS + 1] & NS) > 0) {
            let gS = SS[fS];
            if (qS.allows(gS) && (-1 == HS.token.value || HS.token.value == gS || CS(gS, HS.token.value, bS, XS))) {
              HS.acceptToken(gS);
              break
            }
          } let tS = HS.next,
          uS = 0,
          IS = SS[xS + 2];
        if (!(HS.next < 0 && IS > uS && 65535 == SS[gS + 3 * IS - 3])) {
          for (; uS < IS;) {
            let bS = uS + IS >> 1,
              XS = gS + bS + (bS << 1),
              NS = SS[XS],
              qS = SS[XS + 1] || 65536;
            if (tS < NS) IS = bS;
            else {
              if (!(tS >= qS)) {
                xS = SS[XS + 2], HS.advance();
                continue SS
              }
              uS = bS + 1
            }
          }
          break
        }
        xS = SS[gS + 3 * IS - 1]
      }
    }

    function GS(SS, HS, gS) {
      for (let tS, bS = HS; 65535 != (tS = SS[bS]); bS++)
        if (tS == gS) return bS - HS;
      return -1
    }

    function CS(SS, HS, gS, tS) {
      let bS = GS(gS, tS, HS);
      return bS < 0 || GS(gS, tS, SS) < bS
    }
    const nS = "undefined" != typeof process && {
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
    let PS = null;

    function QS(SS, HS, gS) {
      let bS = SS.cursor(tS.g.IncludeAnonymous);
      for (bS.moveTo(HS);;)
        if (!(gS < 0 ? bS.childBefore(HS) : bS.childAfter(HS)))
          for (;;) {
            if ((gS < 0 ? bS.to < HS : bS.from > HS) && !bS.type.isError) return gS < 0 ? Math.max(0, Math.min(bS.to - 1, HS - 25)) : Math.min(SS.length, Math.max(bS.from + 1, HS + 25));
            if (gS < 0 ? bS.prevSibling() : bS.nextSibling()) break;
            if (!bS.parent()) return gS < 0 ? 0 : SS.length
          }
    }
    class DS {
      constructor(SS, HS) {
        this.fragments = SS, this.nodeSet = HS, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment()
      }
      nextFragment() {
        let SS = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
        if (SS) {
          for (this.safeFrom = SS.openStart ? QS(SS.tree, SS.from + SS.offset, 1) - SS.offset : SS.from, this.safeTo = SS.openEnd ? QS(SS.tree, SS.to + SS.offset, -1) - SS.offset : SS.to; this.trees.length;) this.trees.pop(), this.start.pop(), this.index.pop();
          this.trees.push(SS.tree), this.start.push(-SS.offset), this.index.push(0), this.nextStart = this.safeFrom
        } else this.nextStart = 1e9
      }
      nodeAt(SS) {
        if (SS < this.nextStart) return null;
        for (; this.fragment && this.safeTo <= SS;) this.nextFragment();
        if (!this.fragment) return null;
        for (;;) {
          let HS = this.trees.length - 1;
          if (HS < 0) return this.nextFragment(), null;
          let gS = this.trees[HS],
            bS = this.index[HS];
          if (bS == gS.children.length) {
            this.trees.pop(), this.start.pop(), this.index.pop();
            continue
          }
          let XS = gS.children[bS],
            xS = this.start[HS] + gS.positions[bS];
          if (xS > SS) return this.nextStart = xS, null;
          if (XS instanceof tS.w) {
            if (xS == SS) {
              if (xS < this.safeFrom) return null;
              let SS = xS + XS.length;
              if (SS <= this.safeTo) {
                let HS = XS.prop(tS.i.lookAhead);
                if (!HS || SS + HS < this.fragment.to) return XS
              }
            }
            this.index[HS]++, xS + XS.length >= Math.max(this.safeFrom, SS) && (this.trees.push(XS), this.start.push(xS), this.index.push(0))
          } else this.index[HS]++, this.nextStart = xS + XS.length
        }
      }
    }
    class wS {
      constructor(SS, HS) {
        this.stream = HS, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = SS.tokenizers.map((SS => new uS))
      }
      getActions(SS) {
        let HS = 0,
          gS = null,
          {
            parser: tS
          } = SS.p,
          {
            tokenizers: bS
          } = tS,
          XS = tS.stateSlot(SS.state, 3),
          xS = SS.curContext ? SS.curContext.hash : 0,
          NS = 0;
        for (let qS = 0; qS < bS.length; qS++) {
          if (0 == (1 << qS & XS)) continue;
          let tS = bS[qS],
            uS = this.tokens[qS];
          if ((!gS || tS.fallback) && ((tS.contextual || uS.start != SS.pos || uS.mask != XS || uS.context != xS) && (this.updateCachedToken(uS, tS, SS), uS.mask = XS, uS.context = xS), uS.lookAhead > uS.end + 25 && (NS = Math.max(uS.lookAhead, NS)), 0 != uS.value)) {
            let bS = HS;
            if (uS.extended > -1 && (HS = this.addActions(SS, uS.extended, uS.end, HS)), HS = this.addActions(SS, uS.value, uS.end, HS), !tS.extend && (gS = uS, HS > bS)) break
          }
        }
        for (; this.actions.length > HS;) this.actions.pop();
        return NS && SS.setLookAhead(NS), gS || SS.pos != this.stream.end || (gS = new uS, gS.value = SS.p.parser.eofTerm, gS.start = gS.end = SS.pos, HS = this.addActions(SS, gS.value, gS.end, HS)), this.mainToken = gS, this.actions
      }
      getMainToken(SS) {
        if (this.mainToken) return this.mainToken;
        let HS = new uS,
          {
            pos: gS,
            p: tS
          } = SS;
        return HS.start = gS, HS.end = Math.min(gS + 1, tS.stream.end), HS.value = gS == tS.stream.end ? tS.parser.eofTerm : 0, HS
      }
      updateCachedToken(SS, HS, gS) {
        let tS = this.stream.clipPos(gS.pos);
        if (HS.token(this.stream.reset(tS, SS), gS), SS.value > -1) {
          let {
            parser: HS
          } = gS.p;
          for (let tS = 0; tS < HS.specialized.length; tS++)
            if (HS.specialized[tS] == SS.value) {
              let bS = HS.specializers[tS](this.stream.read(SS.start, SS.end), gS);
              if (bS >= 0 && gS.p.parser.dialect.allows(bS >> 1)) {
                0 == (1 & bS) ? SS.value = bS >> 1 : SS.extended = bS >> 1;
                break
              }
            }
        } else SS.value = 0, SS.end = this.stream.clipPos(tS + 1)
      }
      putAction(SS, HS, gS, tS) {
        for (let bS = 0; bS < tS; bS += 3)
          if (this.actions[bS] == SS) return tS;
        return this.actions[tS++] = SS, this.actions[tS++] = HS, this.actions[tS++] = gS, tS
      }
      addActions(SS, HS, gS, tS) {
        let {
          state: bS
        } = SS, {
          parser: XS
        } = SS.p, {
          data: xS
        } = XS;
        for (let NS = 0; NS < 2; NS++)
          for (let SS = XS.stateSlot(bS, NS ? 2 : 1);; SS += 3) {
            if (65535 == xS[SS]) {
              if (1 != xS[SS + 1]) {
                0 == tS && 2 == xS[SS + 1] && (tS = this.putAction(cS(xS, SS + 2), HS, gS, tS));
                break
              }
              SS = cS(xS, SS + 2)
            }
            xS[SS] == HS && (tS = this.putAction(cS(xS, SS + 1), HS, gS, tS))
          }
        return tS
      }
    }
    class hS {
      constructor(SS, HS, gS, tS) {
        this.parser = SS, this.input = HS, this.HG = tS, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new fS(HS, tS), this.tokens = new wS(SS, this.stream), this.topTerm = SS.top[1];
        let {
          from: XS
        } = tS[0];
        this.stacks = [bS.start(this, SS.top[0], XS)], this.fragments = gS.length && this.stream.end - XS > 4 * SS.bufferLength ? new DS(gS, SS.nodeSet) : null
      }
      get parsedPos() {
        return this.minStackPos
      }
      advance() {
        let SS, HS, gS = this.stacks,
          tS = this.minStackPos,
          bS = this.stacks = [];
        if (this.bigReductionCount > 300 && 1 == gS.length) {
          let [SS] = gS;
          for (; SS.forceReduce() && SS.stack.length && SS.stack[SS.stack.length - 2] >= this.lastBigReductionStart;);
          this.bigReductionCount = this.lastBigReductionSize = 0
        }
        for (let XS = 0; XS < gS.length; XS++) {
          let xS = gS[XS];
          for (;;) {
            if (this.tokens.mainToken = null, xS.pos > tS) bS.push(xS);
            else {
              if (this.advanceStack(xS, bS, gS)) continue;
              {
                SS || (SS = [], HS = []), SS.push(xS);
                let gS = this.tokens.getMainToken(xS);
                HS.push(gS.value, gS.end)
              }
            }
            break
          }
        }
        if (!bS.length) {
          let HS = SS && function(SS) {
            let HS = null;
            for (let gS of SS) {
              let SS = gS.p.stoppedAt;
              (gS.pos == gS.p.stream.end || null != SS && gS.pos > SS) && gS.p.parser.stateFlag(gS.state, 2) && (!HS || HS.score < gS.score) && (HS = gS)
            }
            return HS
          }(SS);
          if (HS) return nS && console.log("Finish with " + this.stackID(HS)), this.stackToTree(HS);
          if (this.parser.strict) throw nS && SS && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + tS);
          this.recovering || (this.recovering = 5)
        }
        if (this.recovering && SS) {
          let gS = null != this.stoppedAt && SS[0].pos > this.stoppedAt ? SS[0] : this.runRecovery(SS, HS, bS);
          if (gS) return nS && console.log("Force-finish " + this.stackID(gS)), this.stackToTree(gS.forceAll())
        }
        if (this.recovering) {
          let SS = 1 == this.recovering ? 1 : 3 * this.recovering;
          if (bS.length > SS)
            for (bS.sort(((SS, HS) => HS.score - SS.score)); bS.length > SS;) bS.pop();
          bS.some((SS => SS.reducePos > tS)) && this.recovering--
        } else if (bS.length > 1) {
          SS: for (let SS = 0; SS < bS.length - 1; SS++) {
            let HS = bS[SS];
            for (let gS = SS + 1; gS < bS.length; gS++) {
              let tS = bS[gS];
              if (HS.sameState(tS) || HS.buffer.length > 500 && tS.buffer.length > 500) {
                if (!((HS.score - tS.score || HS.buffer.length - tS.buffer.length) > 0)) {
                  bS.splice(SS--, 1);
                  continue SS
                }
                bS.splice(gS--, 1)
              }
            }
          }
          bS.length > 12 && (bS.sort(((SS, HS) => HS.score - SS.score)), bS.splice(12, bS.length - 12))
        }
        this.minStackPos = bS[0].pos;
        for (let XS = 1; XS < bS.length; XS++) bS[XS].pos < this.minStackPos && (this.minStackPos = bS[XS].pos);
        return null
      }
      stopAt(SS) {
        if (null != this.stoppedAt && this.stoppedAt < SS) throw new RangeError("Can't move stoppedAt forward");
        this.stoppedAt = SS
      }
      advanceStack(SS, HS, gS) {
        let bS = SS.pos,
          {
            parser: XS
          } = this,
          xS = nS ? this.stackID(SS) + " -> " : "";
        if (null != this.stoppedAt && bS > this.stoppedAt) return SS.forceReduce() ? SS : null;
        if (this.fragments) {
          let HS = SS.curContext && SS.curContext.tracker.strict,
            gS = HS ? SS.curContext.hash : 0;
          for (let NS = this.fragments.nodeAt(bS); NS;) {
            let bS = this.parser.nodeSet.types[NS.type.id] == NS.type ? XS.getGoto(SS.state, NS.type.id) : -1;
            if (bS > -1 && NS.length && (!HS || (NS.prop(tS.i.contextHash) || 0) == gS)) return SS.useNode(NS, bS), nS && console.log(xS + this.stackID(SS) + ` (via reuse of ${XS.getName(NS.type.id)})`), !0;
            if (!(NS instanceof tS.w) || 0 == NS.children.length || NS.positions[0] > 0) break;
            let qS = NS.children[0];
            if (!(qS instanceof tS.w && 0 == NS.positions[0])) break;
            NS = qS
          }
        }
        let NS = XS.stateSlot(SS.state, 4);
        if (NS > 0) return SS.reduce(NS), nS && console.log(xS + this.stackID(SS) + ` (via always-reduce ${XS.getName(65535&NS)})`), !0;
        if (SS.stack.length >= 8400)
          for (; SS.stack.length > 6e3 && SS.forceReduce(););
        let qS = this.tokens.getActions(SS);
        for (let tS = 0; tS < qS.length;) {
          let NS = qS[tS++],
            uS = qS[tS++],
            IS = qS[tS++],
            fS = tS == qS.length || !gS,
            kS = fS ? SS : SS.split(),
            aS = this.tokens.mainToken;
          if (kS.apply(NS, uS, aS ? aS.start : kS.pos, IS), nS && console.log(xS + this.stackID(kS) + ` (via ${0==(65536&NS)?"shift":`reduce of ${XS.getName(65535&NS)}`} for ${XS.getName(uS)} @ ${bS}${kS==SS?"":", split"})`), fS) return !0;
          kS.pos > bS ? HS.push(kS) : gS.push(kS)
        }
        return !1
      }
      advanceFully(SS, HS) {
        let gS = SS.pos;
        for (;;) {
          if (!this.advanceStack(SS, null, null)) return !1;
          if (SS.pos > gS) return ZS(SS, HS), !0
        }
      }
      runRecovery(SS, HS, gS) {
        let tS = null,
          bS = !1;
        for (let XS = 0; XS < SS.length; XS++) {
          let xS = SS[XS],
            NS = HS[XS << 1],
            qS = HS[1 + (XS << 1)],
            uS = nS ? this.stackID(xS) + " -> " : "";
          if (xS.deadEnd) {
            if (bS) continue;
            if (bS = !0, xS.restart(), nS && console.log(uS + this.stackID(xS) + " (restarted)"), this.advanceFully(xS, gS)) continue
          }
          let IS = xS.split(),
            fS = uS;
          for (let SS = 0; SS < 10 && IS.forceReduce(); SS++) {
            if (nS && console.log(fS + this.stackID(IS) + " (via force-reduce)"), this.advanceFully(IS, gS)) break;
            nS && (fS = this.stackID(IS) + " -> ")
          }
          for (let SS of xS.recoverByInsert(NS)) nS && console.log(uS + this.stackID(SS) + " (via recover-insert)"), this.advanceFully(SS, gS);
          this.stream.end > xS.pos ? (qS == xS.pos && (qS++, NS = 0), xS.recoverByDelete(NS, qS), nS && console.log(uS + this.stackID(xS) + ` (via recover-delete ${this.parser.getName(NS)})`), ZS(xS, gS)) : (!tS || tS.score < IS.score) && (tS = IS)
        }
        return tS
      }
      stackToTree(SS) {
        return SS.close(), tS.w.build({
          buffer: NS.create(SS),
          nodeSet: this.parser.nodeSet,
          topID: this.topTerm,
          maxBufferLength: this.parser.bufferLength,
          reused: this.reused,
          start: this.HG[0].from,
          length: SS.pos - this.HG[0].from,
          minRepeatType: this.parser.minRepeatTerm
        })
      }
      stackID(SS) {
        let HS = (PS || (PS = new WeakMap)).get(SS);
        return HS || PS.set(SS, HS = String.fromCodePoint(this.nextStackID++)), HS + SS
      }
    }

    function ZS(SS, HS) {
      for (let gS = 0; gS < HS.length; gS++) {
        let tS = HS[gS];
        if (tS.pos == SS.pos && tS.sameState(SS)) return void(HS[gS].score < SS.score && (HS[gS] = SS))
      }
      HS.push(SS)
    }
    class JS {
      constructor(SS, HS, gS) {
        this.source = SS, this.flags = HS, this.disabled = gS
      }
      allows(SS) {
        return !this.disabled || 0 == this.disabled[SS]
      }
    }
    const OS = SS => SS;
    class dS extends tS.t {
      constructor(SS) {
        if (super(), this.wrappers = [], 14 != SS.version) throw new RangeError(`Parser version (${SS.version}) doesn't match runtime version (14)`);
        let HS = SS.nodeNames.split(" ");
        this.minRepeatTerm = HS.length;
        for (let tS = 0; tS < SS.repeatNodeCount; tS++) HS.push("");
        let gS = Object.keys(SS.topRules).map((HS => SS.topRules[HS][1])),
          bS = [];
        for (let tS = 0; tS < HS.length; tS++) bS.push([]);

        function XS(SS, HS, gS) {
          bS[SS].push([HS, HS.deserialize(String(gS))])
        }
        if (SS.nodeProps)
          for (let NS of SS.nodeProps) {
            let SS = NS[0];
            "string" == typeof SS && (SS = tS.i[SS]);
            for (let HS = 1; HS < NS.length;) {
              let gS = NS[HS++];
              if (gS >= 0) XS(gS, SS, NS[HS++]);
              else {
                let tS = NS[HS + -gS];
                for (let bS = -gS; bS > 0; bS--) XS(NS[HS++], SS, tS);
                HS++
              }
            }
          }
        this.nodeSet = new tS.m(HS.map(((HS, XS) => tS.p.define({
          name: XS >= this.minRepeatTerm ? void 0 : HS,
          id: XS,
          props: bS[XS],
          top: gS.indexOf(XS) > -1,
          error: 0 == XS,
          skipped: SS.skippedNodes && SS.skippedNodes.indexOf(XS) > -1
        })))), SS.propSources && (this.nodeSet = this.nodeSet.extend(...SS.propSources)), this.strict = !1, this.bufferLength = tS.e;
        let xS = qS(SS.tokenData);
        this.context = SS.context, this.specializerSpecs = SS.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
        for (let tS = 0; tS < this.specializerSpecs.length; tS++) this.specialized[tS] = this.specializerSpecs[tS].term;
        this.specializers = this.specializerSpecs.map(vS), this.states = qS(SS.states, Uint32Array), this.data = qS(SS.stateData), this.goto = qS(SS.goto), this.maxTerm = SS.maxTerm, this.tokenizers = SS.tokenizers.map((SS => "number" == typeof SS ? new kS(xS, SS) : SS)), this.topRules = SS.topRules, this.dialects = SS.dialects || {}, this.dynamicPrecedences = SS.dynamicPrecedences || null, this.tokenPrecTable = SS.tokenPrec, this.termNames = SS.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]]
      }
      createParse(SS, HS, gS) {
        let tS = new hS(this, SS, HS, gS);
        for (let bS of this.wrappers) tS = bS(tS, SS, HS, gS);
        return tS
      }
      getGoto(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          tS = this.goto;
        if (HS >= tS[0]) return -1;
        for (let bS = tS[HS + 1];;) {
          let HS = tS[bS++],
            XS = 1 & HS,
            xS = tS[bS++];
          if (XS && gS) return xS;
          for (let gS = bS + (HS >> 1); bS < gS; bS++)
            if (tS[bS] == SS) return xS;
          if (XS) return -1
        }
      }
      hasAction(SS, HS) {
        let gS = this.data;
        for (let tS = 0; tS < 2; tS++)
          for (let bS, XS = this.stateSlot(SS, tS ? 2 : 1);; XS += 3) {
            if (65535 == (bS = gS[XS])) {
              if (1 != gS[XS + 1]) {
                if (2 == gS[XS + 1]) return cS(gS, XS + 2);
                break
              }
              bS = gS[XS = cS(gS, XS + 2)]
            }
            if (bS == HS || 0 == bS) return cS(gS, XS + 1)
          }
        return 0
      }
      stateSlot(SS, HS) {
        return this.states[6 * SS + HS]
      }
      stateFlag(SS, HS) {
        return (this.stateSlot(SS, 0) & HS) > 0
      }
      validAction(SS, HS) {
        return !!this.allActions(SS, (SS => SS == HS || null))
      }
      allActions(SS, HS) {
        let gS = this.stateSlot(SS, 4),
          tS = gS ? HS(gS) : void 0;
        for (let bS = this.stateSlot(SS, 1); null == tS; bS += 3) {
          if (65535 == this.data[bS]) {
            if (1 != this.data[bS + 1]) break;
            bS = cS(this.data, bS + 2)
          }
          tS = HS(cS(this.data, bS + 1))
        }
        return tS
      }
      nextStates(SS) {
        let HS = [];
        for (let gS = this.stateSlot(SS, 1);; gS += 3) {
          if (65535 == this.data[gS]) {
            if (1 != this.data[gS + 1]) break;
            gS = cS(this.data, gS + 2)
          }
          if (0 == (1 & this.data[gS + 2])) {
            let SS = this.data[gS + 1];
            HS.some(((HS, gS) => 1 & gS && HS == SS)) || HS.push(this.data[gS], SS)
          }
        }
        return HS
      }
      configure(SS) {
        let HS = Object.assign(Object.create(dS.prototype), this);
        if (SS.props && (HS.nodeSet = this.nodeSet.extend(...SS.props)), SS.top) {
          let gS = this.topRules[SS.top];
          if (!gS) throw new RangeError(`Invalid top rule name ${SS.top}`);
          HS.top = gS
        }
        return SS.tokenizers && (HS.tokenizers = this.tokenizers.map((HS => {
          let gS = SS.tokenizers.find((SS => SS.from == HS));
          return gS ? gS.to : HS
        }))), SS.specializers && (HS.specializers = this.specializers.slice(), HS.specializerSpecs = this.specializerSpecs.map(((gS, tS) => {
          let bS = SS.specializers.find((SS => SS.from == gS.external));
          if (!bS) return gS;
          let XS = Object.assign(Object.assign({}, gS), {
            external: bS.to
          });
          return HS.specializers[tS] = vS(XS), XS
        }))), SS.contextTracker && (HS.context = SS.contextTracker), SS.dialect && (HS.dialect = this.parseDialect(SS.dialect)), null != SS.strict && (HS.strict = SS.strict), SS.wrap && (HS.wrappers = HS.wrappers.concat(SS.wrap)), null != SS.bufferLength && (HS.bufferLength = SS.bufferLength), HS
      }
      hasWrappers() {
        return this.wrappers.length > 0
      }
      getName(SS) {
        return this.termNames ? this.termNames[SS] : String(SS <= this.maxNode && this.nodeSet.types[SS].name || SS)
      }
      get eofTerm() {
        return this.maxNode + 1
      }
      get topNode() {
        return this.nodeSet.types[this.top[1]]
      }
      dynamicPrecedence(SS) {
        let HS = this.dynamicPrecedences;
        return null == HS ? 0 : HS[SS] || 0
      }
      parseDialect(SS) {
        let HS = Object.keys(this.dialects),
          gS = HS.map((() => !1));
        if (SS)
          for (let bS of SS.split(" ")) {
            let SS = HS.indexOf(bS);
            SS >= 0 && (gS[SS] = !0)
          }
        let tS = null;
        for (let bS = 0; bS < HS.length; bS++)
          if (!gS[bS])
            for (let SS, gS = this.dialects[HS[bS]]; 65535 != (SS = this.data[gS++]);)(tS || (tS = new Uint8Array(this.maxTerm + 1)))[SS] = 1;
        return new JS(SS, gS, tS)
      }
      static deserialize(SS) {
        return new dS(SS)
      }
    }

    function cS(SS, HS) {
      return SS[HS] | SS[HS + 1] << 16
    }

    function vS(SS) {
      if (SS.external) {
        let HS = SS.extend ? 1 : 0;
        return (gS, tS) => SS.external(gS, tS) << 1 | HS
      }
      return SS.get
    }
    var ES = gS(41345);
    const LS = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288],
      YS = new class {
        constructor(SS) {
          this.start = SS.start, this.shift = SS.shift || OS, this.reduce = SS.reduce || OS, this.reuse = SS.reuse || OS, this.hash = SS.hash || (() => 0), this.strict = !1 !== SS.strict
        }
      }({
        start: !1,
        shift: (SS, HS) => 5 == HS || 6 == HS || 320 == HS ? SS : 321 == HS,
        strict: !1
      }),
      AS = new KS(((SS, HS) => {
        let {
          next: gS
        } = SS;
        (125 == gS || -1 == gS || HS.context) && SS.acceptToken(318)
      }), {
        contextual: !0,
        fallback: !0
      }),
      yS = new KS(((SS, HS) => {
        let gS, {
          next: tS
        } = SS;
        LS.indexOf(tS) > -1 || (47 != tS || 47 != (gS = SS.peek(1)) && 42 != gS) && (125 == tS || 59 == tS || -1 == tS || HS.context || SS.acceptToken(316))
      }), {
        contextual: !0
      }),
      VS = new KS(((SS, HS) => {
        91 != SS.next || HS.context || SS.acceptToken(317)
      }), {
        contextual: !0
      }),
      iS = new KS(((SS, HS) => {
        let {
          next: gS
        } = SS;
        if (43 == gS || 45 == gS) {
          if (SS.advance(), gS == SS.next) {
            SS.advance();
            let gS = !HS.context && HS.canShift(1);
            SS.acceptToken(gS ? 1 : 2)
          }
        } else 63 == gS && 46 == SS.peek(1) && (SS.advance(), SS.advance(), (SS.next < 48 || SS.next > 57) && SS.acceptToken(3))
      }), {
        contextual: !0
      });

    function WS(SS, HS) {
      return SS >= 65 && SS <= 90 || SS >= 97 && SS <= 122 || 95 == SS || SS >= 192 || !HS && SS >= 48 && SS <= 57
    }
    const zS = new KS(((SS, HS) => {
        if (60 != SS.next || !HS.dialectEnabled(0)) return;
        if (SS.advance(), 47 == SS.next) return;
        let gS = 0;
        for (; LS.indexOf(SS.next) > -1;) SS.advance(), gS++;
        if (WS(SS.next, !0)) {
          for (SS.advance(), gS++; WS(SS.next, !1);) SS.advance(), gS++;
          for (; LS.indexOf(SS.next) > -1;) SS.advance(), gS++;
          if (44 == SS.next) return;
          for (let HS = 0;; HS++) {
            if (7 == HS) {
              if (!WS(SS.next, !0)) return;
              break
            }
            if (SS.next != "extends".charCodeAt(HS)) break;
            SS.advance(), gS++
          }
        }
        SS.acceptToken(4, -gS)
      })),
      US = (0, ES.f)({
        "get set async static": ES.j.modifier,
        "for while do if else switch try catch finally return throw break continue default case defer": ES.j.controlKeyword,
        "in of await yield void typeof delete instanceof as satisfies": ES.j.operatorKeyword,
        "let var const using function class extends": ES.j.definitionKeyword,
        "import export from": ES.j.moduleKeyword,
        "with debugger new": ES.j.keyword,
        TemplateString: ES.j.special(ES.j.string),
        super: ES.j.atom,
        BooleanLiteral: ES.j.bool,
        this: ES.j.self,
        null: ES.j.null,
        Star: ES.j.modifier,
        VariableName: ES.j.variableName,
        "CallExpression/VariableName TaggedTemplateExpression/VariableName": ES.j.function(ES.j.variableName),
        VariableDefinition: ES.j.definition(ES.j.variableName),
        Label: ES.j.labelName,
        PropertyName: ES.j.propertyName,
        PrivatePropertyName: ES.j.special(ES.j.propertyName),
        "CallExpression/MemberExpression/PropertyName": ES.j.function(ES.j.propertyName),
        "FunctionDeclaration/VariableDefinition": ES.j.function(ES.j.definition(ES.j.variableName)),
        "ClassDeclaration/VariableDefinition": ES.j.definition(ES.j.className),
        "NewExpression/VariableName": ES.j.className,
        PropertyDefinition: ES.j.definition(ES.j.propertyName),
        PrivatePropertyDefinition: ES.j.definition(ES.j.special(ES.j.propertyName)),
        UpdateOp: ES.j.updateOperator,
        "LineComment Hashbang": ES.j.lineComment,
        BlockComment: ES.j.blockComment,
        Number: ES.j.number,
        String: ES.j.string,
        Escape: ES.j.escape,
        ArithOp: ES.j.arithmeticOperator,
        LogicOp: ES.j.logicOperator,
        BitOp: ES.j.bitwiseOperator,
        CompareOp: ES.j.compareOperator,
        RegExp: ES.j.regexp,
        Equals: ES.j.definitionOperator,
        Arrow: ES.j.function(ES.j.punctuation),
        ": Spread": ES.j.punctuation,
        "( )": ES.j.paren,
        "[ ]": ES.j.squareBracket,
        "{ }": ES.j.brace,
        "InterpolationStart InterpolationEnd": ES.j.special(ES.j.brace),
        ".": ES.j.derefOperator,
        ", ;": ES.j.separator,
        "@": ES.j.meta,
        TypeName: ES.j.typeName,
        TypeDefinition: ES.j.definition(ES.j.typeName),
        "type enum interface implements namespace module declare": ES.j.definitionKeyword,
        "abstract global Privacy readonly override": ES.j.modifier,
        "is keyof unique infer asserts": ES.j.operatorKeyword,
        JSXAttributeValue: ES.j.attributeValue,
        JSXText: ES.j.content,
        "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": ES.j.angleBracket,
        "JSXIdentifier JSXNameSpacedName": ES.j.tagName,
        "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": ES.j.attributeName,
        "JSXBuiltin/JSXIdentifier": ES.j.standard(ES.j.tagName)
      }),
      pS = {
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
      sS = {
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
      BS = {
        __proto__: null,
        "<": 193
      },
      MS = dS.deserialize({
        version: 14,
        states: "$F|Q%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Il'#IlO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JrO6[Q!0MxO'#JsO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO9XQMhO'#F|O9`Q`O'#F{OOQ!0Lf'#Js'#JsOOQ!0Lb'#Jr'#JrO9eQ`O'#GwOOQ['#K_'#K_O9pQ`O'#IYO9uQ!0LrO'#IZOOQ['#J`'#J`OOQ['#I_'#I_Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GsO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EyO;hQMhO'#FeO;xQ`O'#GsOOQO'#K`'#K`O;}Q`O'#K`O<]Q`O'#G{O<]Q`O'#G|O<]Q`O'#HOO9kQ`O'#HRO=SQ`O'#HUO>kQ`O'#CeO>{Q`O'#HcO?TQ`O'#HiO?TQ`O'#HkO`QlO'#HmO?TQ`O'#HoO?TQ`O'#HrO?YQ`O'#HxO?_Q!0LsO'#IOO%[QlO'#IQO?jQ!0LsO'#ISO?uQ!0LsO'#IUO9uQ!0LrO'#IWO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jv'#JvO%[QlO'#JvOOQO'#Jy'#JyOOQO'#Ih'#IhOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J}'#J}OC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jx'#JxODlQpO'#JyOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CD})CD}OOOO'#I`'#I`OFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ia'#IaOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Ic'#IcOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IdOGyQ`O'#JtOIxQ!fO'#JtO+}QlO'#JtOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KTOKPQ`O'#KSOKPQ`O'#KSOKXQ`O,5;^OK^Q`O'#KROOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KQONtQ`O'#KPO9eQ`O'#KPO! YQ`O'#KPO! bQ`O,5;]O! gQ`O'#KPO!#lQ!fO'#JsOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#Jz'#JzOOQO-E<j-E<jO9kQ`O,5=_O!$rQ`O,5=_O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;dO!(|QpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)[QlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IpO!+_Q!0LrO,5<iO%[QlO,5;eO!&zQMhO,5;eO!+|QMhO,5;eO!-nQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-uQ,UO'#FjO!.rQ,UO'#KXO!.^Q,UO'#KXO!.yQ,UO'#KXOOQO'#KX'#KXO!/_Q,UO,5<SOOOW,5<`,5<`O!/pQlO'#FvOOOW'#Io'#IoO7VO7dO,5<QO!/wQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<eO!1pQ`O,5<hO!3YQ(CWO'#GXO!3jQ`O'#GYO!3oQ`O'#GYO!5_Q(CWO'#G^O!6dQpO'#GbOOQO'#Gn'#GnO!,TQMhO'#GmOOQO'#Gp'#GpO!,TQMhO'#GoO!7VQ$IUO'#JlOOQ!0Lh'#Jl'#JlO!7aQ`O'#JkO!7oQ`O'#JjO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<eO1SQ`O'#DZO!,TQMhO'#GPO!,TQMhO'#GRO!8gQ`O'#GTO!8lQ`O'#GUO!3oQ`O'#G[O!,TQMhO'#GaO<]Q`O'#JkO!8qQ`O'#EqO!9`Q`O,5<gOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KR'#KRO!:iQ!0LrO'#KaO9uQ!0LrO,5=cO`QlO,5>tOOQ['#Jh'#JhOOQ[,5>u,5>uOOQ[-E<]-E<]O!<hQ!0MxO,5:bO!:]QpO,5:`O!?RQ!0MxO,5:jO%[QlO,5:jO!AiQ!0MxO,5:lOOQO,5@z,5@zO!BYQMhO,5=_O!BhQ!0LrO'#JiO9`Q`O'#JiO!ByQ!0LrO,59ZO!CUQpO,59ZO!C^QMhO,59ZO:dQMhO,59ZO!CiQ`O,5;ZO!CqQ`O'#HbO!DVQ`O'#KdO%[QlO,5;}O!:]QpO,5<PO!D_Q`O,5=zO!DdQ`O,5=zO!DiQ`O,5=zO!DwQ`O,5=zO9uQ!0LrO,5=zO<]Q`O,5=jOOQO'#Cy'#CyO!EOQpO,5=gO!EWQMhO,5=hO!EcQ`O,5=jO!EhQ!bO,5=mO!EpQ`O'#K`O?YQ`O'#HWO9kQ`O'#HYO!EuQ`O'#HYO:dQMhO'#H[O!EzQ`O'#H[OOQ[,5=p,5=pO!FPQ`O'#H]O!FbQ`O'#CoO!FgQ`O,59PO!FqQ`O,59PO!HvQlO,59POOQ[,59P,59PO!IWQ!0LrO,59PO%[QlO,59PO!KcQlO'#HeOOQ['#Hf'#HfOOQ['#Hg'#HgO`QlO,5=}O!KyQ`O,5=}O`QlO,5>TO`QlO,5>VO!LOQ`O,5>XO`QlO,5>ZO!LTQ`O,5>^O!LYQlO,5>dOOQ[,5>j,5>jO%[QlO,5>jO9uQ!0LrO,5>lOOQ[,5>n,5>nO#!dQ`O,5>nOOQ[,5>p,5>pO#!dQ`O,5>pOOQ[,5>r,5>rO##QQpO'#D_O%[QlO'#JvO##sQpO'#JvO##}QpO'#DmO#$`QpO'#DmO#&qQlO'#DmO#&xQ`O'#JuO#'QQ`O,5:WO#'VQ`O'#EtO#'eQ`O'#KUO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CUQpO,5;YO!C^QMhO,5;YO:dQMhO,5;YO#(`Q`O,5@bO#(eQ07dO,5:sOOQO-E<f-E<fO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!ByQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CUQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I^'#I^P#+RO&2DjO,58|POOO,58|,58|OOOO-E<^-E<^OOQ!0Lh1G.p1G.pOOOO-E<_-E<_OOOO,59},59}O#+^Q!bO,59}OOOO-E<a-E<aOOQ!0Lf1G/g1G/gO#+cQ!fO,5?OO+}QlO,5?OOOQO,5?U,5?UO#+mQlO'#IdOOQO-E<b-E<bO#+zQ`O,5@`O#,SQ!fO,5@`O#,ZQ`O,5@nOOQ!0Lf1G/m1G/mO%[QlO,5@oO#,cQ`O'#IjOOQO-E<h-E<hO#,ZQ`O,5@nOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@lO#,wQ!0LrO,5@lO#-YQ!0LrO,5@lO#-aQ`O,5@kO9eQ`O,5@kO#-iQ`O,5@kO#-wQ`O'#ImO#-aQ`O,5@kOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2yO9kQ`O1G2yOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0rQ!0MzO'#JlO!$wQlO1G0uO#2}Q!fO'#JwO%[QlO'#JwO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#3^Q`O1G1OO#5rQ!0MxO1G1PO#5yQ!0MxO1G1PO#8aQ!0MxO1G1PO#8hQ!0MxO1G1PO#;OQ!0MxO1G1PO#=fQ!0MxO1G1PO#=mQ!0MxO1G1PO#=tQ!0MxO1G1PO#@[Q!0MxO1G1PO#@cQ!0MxO1G1PO#BpQ?MtO'#CiO#DkQ?MtO1G1`O#DrQ?MtO'#JsO#EVQ!0MxO,5?[OOQ!0Lb-E<n-E<nO#GdQ!0MxO1G1PO#HaQ!0MzO1G1POOQ!0Lf1G1P1G1PO#IdQMjO'#J|O#InQ`O,5:xO#IsQ!0MxO1G1cO#JgQ,UO,5<WO#JoQ,UO,5<XO#JwQ,UO'#FoO#K`Q`O'#FnOOQO'#KY'#KYOOQO'#In'#InO#KeQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#KvQ?MtO'#JrO#LQQ`O,5<bO!)[QlO,5<bOOOW-E<m-E<mOOQ!0Lf1G1l1G1lO#LVQpO'#KXOOQ!0Lf,5<d,5<dO#L_QpO,5<dO#LdQMhO'#DTOOOO'#Ib'#IbO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8lQ`O'#IrO#LvQ`O,5<zOOQ!0Lh,5<w,5<wO!,TQMhO'#IuO#MdQMjO,5=XO!,TQMhO'#IwO#NVQMjO,5=ZO!&zQMhO,5=]OOQO1G2S1G2SO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GbO$!dQ!dO,5<sO$!kQ`O'#K[O9eQ`O'#K[O$!yQ`O,5<uO$#aQ!dO'#C{O!,TQMhO,5<tO$#kQ`O'#GZO$$PQ`O,5<tO$$UQ!dO'#GWO$$cQ!dO'#K]O$$mQ`O'#K]O!&zQMhO'#K]O$$rQ`O,5<xO$$wQlO'#JvO$%RQpO'#GcO#$`QpO'#GcO$%dQ`O'#GgO!3oQ`O'#GkO$%iQ!0LrO'#ItO$%tQpO,5<|OOQ!0Lp,5<|,5<|O$%{QpO'#GcO$&YQpO'#GdO$&kQpO'#GdO$&pQMjO,5=XO$'QQMjO,5=ZOOQ!0Lh,5=^,5=^O!,TQMhO,5@VO!,TQMhO,5@VO$'bQ`O'#IyO$'vQ`O,5@UO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@VO$)TQ$IYO,59uOOQ!0Lh'#Jp'#JpO$)vQMjO,5<kO$*iQMjO,5<mO@zQ`O,5<oOOQ!0Lh,5<p,5<pO$*sQ`O,5<vO$*xQMjO,5<{O$+YQ`O'#KPO!$wQlO1G2RO$+_Q`O1G2RO9eQ`O'#KSO9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I{O$+dQ!0LrO,5@{OOQ[1G2}1G2}OOQ[1G4`1G4`OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-fQ!0MxO1G0UOOQ[1G2y1G2yO!&zQMhO1G2yO%[QlO1G2yO#.tQ`O1G2yO$/jQMhO'#EkOOQ!0Lb,5@T,5@TO$/wQ!0LrO,5@TOOQ[1G.u1G.uO!ByQ!0LrO1G.uO!CUQpO1G.uO!C^QMhO1G.uO$0YQ`O1G0uO$0_Q`O'#CiO$0jQ`O'#KeO$0rQ`O,5=|O$0wQ`O'#KeO$0|Q`O'#KeO$1[Q`O'#JRO$1jQ`O,5AOO$1rQ!fO1G1iOOQ!0Lf1G1k1G1kO9kQ`O1G3fO@zQ`O1G3fO$1yQ`O1G3fO$2OQ`O1G3fO!DiQ`O1G3fO9uQ!0LrO1G3fOOQ[1G3f1G3fO!EcQ`O1G3UO!&zQMhO1G3RO$2TQ`O1G3ROOQ[1G3S1G3SO!&zQMhO1G3SO$2YQ`O1G3SO$2bQpO'#HQOOQ[1G3U1G3UO!6_QpO'#I}O!EhQ!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$2jQMhO,5=tO9kQ`O,5=tO$%dQ`O,5=vO9`Q`O,5=vO!CUQpO,5=vO!C^QMhO,5=vO:dQMhO,5=vO$2xQ`O'#KcO$3TQ`O,5=wOOQ[1G.k1G.kO$3YQ!0LrO1G.kO@zQ`O1G.kO$3eQ`O1G.kO9uQ!0LrO1G.kO$5mQ!fO,5AQO$5zQ`O,5AQO9eQ`O,5AQO$6VQlO,5>PO$6^Q`O,5>POOQ[1G3i1G3iO`QlO1G3iOOQ[1G3o1G3oOOQ[1G3q1G3qO?TQ`O1G3sO$6cQlO1G3uO$:gQlO'#HtOOQ[1G3x1G3xO$:tQ`O'#HzO?YQ`O'#H|OOQ[1G4O1G4OO$:|QlO1G4OO9uQ!0LrO1G4UOOQ[1G4W1G4WOOQ!0Lb'#G_'#G_O9uQ!0LrO1G4YO9uQ!0LrO1G4[O$?TQ`O,5@bO!)[QlO,5;`O9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CUQpO,5:XO$?YQ?MtO,5:XOOQO,5;`,5;`O$?dQpO'#IeO$?zQ`O,5@aOOQ!0Lf1G/r1G/rO$@SQpO'#IkO$@^Q`O,5@pOOQ!0Lb1G0y1G0yO#$`QpO,5:XOOQO'#Ig'#IgO$@fQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CUQpO1G0tO!C^QMhO1G0tOOQ!0Lb1G5|1G5|O!ByQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@mQ!0LrO1G0mO$@xQ!0LrO1G0mO!CUQpO1G0^ODWQpO1G0^O$AWQ!0LrO1G0mOOQO1G0^1G0^O$AlQ!0MxO1G0mPOOO-E<[-E<[POOO1G.h1G.hOOOO1G/i1G/iO$AvQ!bO,5<iO$BOQ!fO1G4jOOQO1G4p1G4pO%[QlO,5?OO$BYQ`O1G5zO$BbQ`O1G6YO$BjQ!fO1G6ZO9eQ`O,5?UO$BtQ!0MxO1G6WO%[QlO1G6WO$CUQ!0LrO1G6WO$CgQ`O1G6VO$CgQ`O1G6VO9eQ`O1G6VO$CoQ`O,5?XO9eQ`O,5?XOOQO,5?X,5?XO$DTQ`O,5?XO$+YQ`O,5?XOOQO-E<k-E<kOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(e7+(eO!&zQMhO7+(eO%[QlO7+(eO$DcQ`O7+(eO$DnQMhO7+(eO$D|Q!0MzO,5=XO$GXQ!0MzO,5=ZO$IdQ!0MzO,5=XO$KuQ!0MzO,5=ZO$NWQ!0MzO,59uO%!]Q!0MzO,5<kO%$hQ!0MzO,5<mO%&sQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%)UQ!0MxO7+&aO%)xQlO'#IfO%*VQ`O,5@cO%*_Q!fO,5@cOOQ!0Lf1G0P1G0PO%*iQ`O7+&jOOQ!0Lf7+&j7+&jO%*nQ?MtO,5:fO%[QlO7+&zO%*xQ?MtO,5:bO%+VQ?MtO,5:jO%+aQ?MtO,5:lO%+kQMhO'#IiO%+uQ`O,5@hOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%+}Q!jO,5<ZO!)[QlO,5<YOOQO-E<l-E<lOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%,YQ`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%,_Q!dO,59oOOOO-E<`-E<`OOQ!0Lh1G/X1G/XO%,fQ!0MxO7+'kOOQ!0Lh,5?^,5?^O%-YQMhO1G2fP%-aQ`O'#IrPOQ!0Lh-E<p-E<pO%-}QMjO,5?aOOQ!0Lh-E<s-E<sO%.pQMjO,5?cOOQ!0Lh-E<u-E<uO%.zQ!dO1G2wO%/RQ!dO'#CrO%/iQMhO'#KSO$$wQlO'#JvOOQ!0Lh1G2_1G2_O%/sQ`O'#IqO%0[Q`O,5@vO%0[Q`O,5@vO%0dQ`O,5@vO%0oQ`O,5@vOOQO1G2a1G2aO%0}QMjO1G2`O$+YQ`O'#K[O!,TQMhO1G2`O%1_Q(CWO'#IsO%1lQ`O,5@wO!&zQMhO,5@wO%1tQ!dO,5@wOOQ!0Lh1G2d1G2dO%4UQ!fO'#CiO%4`Q`O,5=POOQ!0Lb,5<},5<}O%4hQpO,5<}OOQ!0Lb,5=O,5=OOCwQ`O,5<}O%4sQpO,5<}OOQ!0Lb,5=R,5=RO$+YQ`O,5=VOOQO,5?`,5?`OOQO-E<r-E<rOOQ!0Lp1G2h1G2hO#$`QpO,5<}O$$wQlO,5=PO%5RQ`O,5=OO%5^QpO,5=OO!,TQMhO'#IuO%6WQMjO1G2sO!,TQMhO'#IwO%6yQMjO1G2uO%7TQMjO1G5qO%7_QMjO1G5qOOQO,5?e,5?eOOQO-E<w-E<wOOQO1G.{1G.{O!,TQMhO1G5qO!,TQMhO1G5qO!:]QpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%7lQ`O1G2ZO!,TQMhO1G2bO%7qQ!0MxO7+'mOOQ!0Lf7+'m7+'mO!$wQlO7+'mO%8eQ`O,5;`OOQ!0Lb,5?g,5?gOOQ!0Lb-E<y-E<yO%8jQ!dO'#K^O#(ZQ`O7+(eO4UQ!fO7+(eO$DfQ`O7+(eO%8tQ!0MvO'#CiO%9XQ!0MvO,5=SO%9lQ`O,5=SO%9tQ`O,5=SOOQ!0Lb1G5o1G5oOOQ[7+$a7+$aO!ByQ!0LrO7+$aO!CUQpO7+$aO!$wQlO7+&aO%9yQ`O'#JQO%:bQ`O,5APOOQO1G3h1G3hO9kQ`O,5APO%:bQ`O,5APO%:jQ`O,5APOOQO,5?m,5?mOOQO-E=P-E=POOQ!0Lf7+'T7+'TO%:oQ`O7+)QO9uQ!0LrO7+)QO9kQ`O7+)QO@zQ`O7+)QO%:tQ`O7+)QOOQ[7+)Q7+)QOOQ[7+(p7+(pO%:yQ!0MvO7+(mO!&zQMhO7+(mO!E^Q`O7+(nOOQ[7+(n7+(nO!&zQMhO7+(nO%;TQ`O'#KbO%;`Q`O,5=lOOQO,5?i,5?iOOQO-E<{-E<{OOQ[7+(s7+(sO%<rQpO'#HZOOQ[1G3`1G3`O!&zQMhO1G3`O%[QlO1G3`O%<yQ`O1G3`O%=UQMhO1G3`O9uQ!0LrO1G3bO$%dQ`O1G3bO9`Q`O1G3bO!CUQpO1G3bO!C^QMhO1G3bO%=dQ`O'#JPO%=xQ`O,5@}O%>QQpO,5@}OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>]Q`O7+$VO%[QlO1G6lO%[QlO1G6mO%>bQ!0LrO1G6lO%>lQlO1G3kO%>sQ`O1G3kO%>xQlO1G3kOOQ[7+)T7+)TO9uQ!0LrO7+)_O`QlO7+)aOOQ['#Kh'#KhOOQ['#JS'#JSO%?PQlO,5>`OOQ[,5>`,5>`O%[QlO'#HuO%?^Q`O'#HwOOQ[,5>f,5>fO9eQ`O,5>fOOQ[,5>h,5>hOOQ[7+)j7+)jOOQ[7+)p7+)pOOQ[7+)t7+)tOOQ[7+)v7+)vO%?cQpO1G5|O%?}Q?MtO1G0zO%@XQ`O1G0zOOQO1G/s1G/sO%@dQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?V,5?VOOQO-E<i-E<iO!CUQpO1G/sOOQO-E<e-E<eOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CUQpO7+&`OOQO7+%x7+%xO$AlQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@nQ!0LrO7+&XO!ByQ!0LrO7+%xO!CUQpO7+%xO%@yQ!0LrO7+&XO%AXQ!0MxO7++rO%[QlO7++rO%AiQ`O7++qO%AiQ`O7++qOOQO1G4s1G4sO9eQ`O1G4sO%AqQ`O1G4sOOQS7+%}7+%}O#(ZQ`O<<LPO4UQ!fO<<LPO%BPQ`O<<LPOOQ[<<LP<<LPO!&zQMhO<<LPO%[QlO<<LPO%BXQ`O<<LPO%BdQ!0MzO,5?aO%DoQ!0MzO,5?cO%FzQ!0MzO1G2`O%I]Q!0MzO1G2sO%KhQ!0MzO1G2uO%MsQ!fO,5?QO%[QlO,5?QOOQO-E<d-E<dO%M}Q`O1G5}OOQ!0Lf<<JU<<JUO%NVQ?MtO1G0uO&!^Q?MtO1G1PO&!eQ?MtO1G1PO&$fQ?MtO1G1PO&$mQ?MtO1G1PO&&nQ?MtO1G1PO&(oQ?MtO1G1PO&(vQ?MtO1G1PO&(}Q?MtO1G1PO&+OQ?MtO1G1PO&+VQ?MtO1G1PO&+^Q!0MxO<<JfO&-UQ?MtO1G1PO&.RQ?MvO1G1PO&/UQ?MvO'#JlO&1[Q?MtO1G1cO&1iQ?MtO1G0UO&1sQMjO,5?TOOQO-E<g-E<gO!)[QlO'#FqOOQO'#KZ'#KZOOQO1G1u1G1uO&1}Q`O1G1tO&2SQ?MtO,5?[OOOW7+'h7+'hOOOO1G/Z1G/ZO&2^Q!dO1G4xOOQ!0Lh7+(Q7+(QP!&zQMhO,5?^O!,TQMhO7+(cO&2eQ`O,5?]O9eQ`O,5?]O$+YQ`O,5?]OOQO-E<o-E<oO&2sQ`O1G6bO&2sQ`O1G6bO&2{Q`O1G6bO&3WQMjO7+'zO&3hQ!dO,5?_O&3rQ`O,5?_O!&zQMhO,5?_OOQO-E<q-E<qO&3wQ!dO1G6cO&4RQ`O1G6cO&4ZQ`O1G2kO!&zQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%4hQpO1G2iO!CUQpO1G2iOCwQ`O1G2iOOQ!0Lb1G2q1G2qO&4`QpO1G2iO&4nQ`O1G2kO$+YQ`O1G2jOCwQ`O1G2jO$$wQlO1G2kO&4vQ`O1G2jO&5jQMjO,5?aOOQ!0Lh-E<t-E<tO&6]QMjO,5?cOOQ!0Lh-E<v-E<vO!,TQMhO7++]O&6gQMjO7++]O&6qQMjO7++]OOQ!0Lh1G/c1G/cO&7OQ`O1G/cOOQ!0Lh7+'u7+'uO&7TQMjO7+'|O&7eQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&8XQ`O1G0zO!&zQMhO'#IzO&8^Q`O,5@xO&:`Q!fO<<LPO!&zQMhO1G2nO&:gQ!0LrO1G2nOOQ[<<G{<<G{O!ByQ!0LrO<<G{O&:xQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?l,5?lO&;lQ`O,5?lO&;qQ`O,5?lOOQO-E=O-E=OO&<PQ`O1G6kO&<PQ`O1G6kO9kQ`O1G6kO@zQ`O<<LlOOQ[<<Ll<<LlO&<XQ`O<<LlO9uQ!0LrO<<LlO9kQ`O<<LlOOQ[<<LX<<LXO%:yQ!0MvO<<LXOOQ[<<LY<<LYO!E^Q`O<<LYO&<^QpO'#I|O&<iQ`O,5@|O!)[QlO,5@|OOQ[1G3W1G3WOOQO'#JO'#JOO9uQ!0LrO'#JOO&<qQpO,5=uOOQ[,5=u,5=uO&<xQpO'#EgO&=PQpO'#GeO&=UQ`O7+(zO&=ZQ`O7+(zOOQ[7+(z7+(zO!&zQMhO7+(zO%[QlO7+(zO&=cQ`O7+(zOOQ[7+(|7+(|O9uQ!0LrO7+(|O$%dQ`O7+(|O9`Q`O7+(|O!CUQpO7+(|O&=nQ`O,5?kOOQO-E<}-E<}OOQO'#H^'#H^O&=yQ`O1G6iO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>RQ`O7+,WO&>WQ`O7+,XO%[QlO7+,WO%[QlO7+,XOOQ[7+)V7+)VO&>]Q`O7+)VO&>bQlO7+)VO&>iQ`O7+)VOOQ[<<Ly<<LyOOQ[<<L{<<L{OOQ[-E=Q-E=QOOQ[1G3z1G3zO&>nQ`O,5>aOOQ[,5>c,5>cO&>sQ`O1G4QO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&>xQ?MtO1G6ZO?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AlQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!ByQ!0LrO<<IdO&?SQ!0LrO<<IsO&?_Q!0MxO<= ^O&?oQ`O<= ]OOQO7+*_7+*_O9eQ`O7+*_OOQ[ANAkANAkO&?wQ!fOANAkO!&zQMhOANAkO#(ZQ`OANAkO4UQ!fOANAkO&@OQ`OANAkO%[QlOANAkO&@WQ!0MzO7+'zO&BiQ!0MzO,5?aO&DtQ!0MzO,5?cO&GPQ!0MzO7+'|O&IbQ!fO1G4lO&IlQ?MtO7+&aO&KpQ?MvO,5=XO&MwQ?MvO,5=ZO&NXQ?MvO,5=XO&NiQ?MvO,5=ZO&NyQ?MvO,59uO'#PQ?MvO,5<kO'%SQ?MvO,5<mO''hQ?MvO,5<{O')^Q?MtO7+'kO')kQ?MtO7+'mO')xQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*d7+*dO')}QMjO<<K}OOQO1G4w1G4wO'*UQ`O1G4wO'*aQ`O1G4wO'*oQ`O7++|O'*oQ`O7++|O!&zQMhO1G4yO'*wQ!dO1G4yO'+RQ`O7++}O'+ZQ`O7+(VO'+fQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!CUQpO7+(TOCwQ`O7+(TO'+pQ`O7+(VO!&zQMhO7+(VO$+YQ`O7+(UO'+uQ`O7+(VOCwQ`O7+(UO'+}QMjO<<NwO!,TQMhO<<NwOOQ!0Lh7+$}7+$}O',XQ!dO,5?fOOQO-E<x-E<xO',cQ!0MvO7+(YO!&zQMhO7+(YOOQ[AN=gAN=gO9kQ`O1G5WOOQO1G5W1G5WO',sQ`O1G5WO',xQ`O7+,VO',xQ`O7+,VO9uQ!0LrOANBWO@zQ`OANBWOOQ[ANBWANBWO'-QQ`OANBWOOQ[ANAsANAsOOQ[ANAtANAtO'-VQ`O,5?hOOQO-E<z-E<zO'-bQ?MtO1G6hOOQO,5?j,5?jOOQO-E<|-E<|OOQ[1G3a1G3aO'-lQ`O,5=POOQ[<<Lf<<LfO!&zQMhO<<LfO&=UQ`O<<LfO'-qQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9uQ!0LrO<<LhO$%dQ`O<<LhO9`Q`O<<LhO'-yQpO1G5VO'.UQ`O7+,TOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= r<= rOOQ[<= s<= sO'.^Q`O<= rO'.cQ`O<= sOOQ[<<Lq<<LqO'.hQ`O<<LqO'.mQlO<<LqOOQ[1G3{1G3{O?YQ`O7+)lO'.tQ`O<<JQO'/PQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AlQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<My<<MyOOQ[G27VG27VO!&zQMhOG27VO#(ZQ`OG27VO'/ZQ!fOG27VO4UQ!fOG27VO'/bQ`OG27VO'/jQ?MtO<<JfO'/wQ?MvO1G2`O'1mQ?MvO,5?aO'3pQ?MvO,5?cO'5sQ?MvO1G2sO'7vQ?MvO1G2uO'9yQ?MtO<<KXO':WQ?MtO<<I{OOQO1G1w1G1wO!,TQMhOANAiOOQO7+*c7+*cO':eQ`O7+*cO':pQ`O<= hO':xQ!dO7+*eOOQ!0Lb<<Kq<<KqO$+YQ`O<<KqOCwQ`O<<KqO';SQ`O<<KqO!&zQMhO<<KqOOQ!0Lb<<Ko<<KoO!CUQpO<<KoO';_Q!dO<<KqOOQ!0Lb<<Kp<<KpO';iQ`O<<KqO!&zQMhO<<KqO$+YQ`O<<KpO';nQMjOANDcO';xQ!0MvO<<KtOOQO7+*r7+*rO9kQ`O7+*rO'<YQ`O<= qOOQ[G27rG27rO9uQ!0LrOG27rO@zQ`OG27rO!)[QlO1G5SO'<bQ`O7+,SO'<jQ`O1G2kO&=UQ`OANBQOOQ[ANBQANBQO!&zQMhOANBQO'<oQ`OANBQOOQ[ANBSANBSO9uQ!0LrOANBSO$%dQ`OANBSOOQO'#H_'#H_OOQO7+*q7+*qOOQ[G22wG22wOOQ[ANE^ANE^OOQ[ANE_ANE_OOQ[ANB]ANB]O'<wQ`OANB]OOQ[<<MW<<MWO!)[QlOAN?lOOQOG24yG24yO$AlQ!0MxOG24yO#(ZQ`OLD,qOOQ[LD,qLD,qO!&zQMhOLD,qO'<|Q!fOLD,qO'=TQ?MvO7+'zO'>yQ?MvO,5?aO'@|Q?MvO,5?cO'CPQ?MvO7+'|O'DuQMjOG27TOOQO<<M}<<M}OOQ!0LbANA]ANA]O$+YQ`OANA]OCwQ`OANA]O'EVQ!dOANA]OOQ!0LbANAZANAZO'E^Q`OANA]O!&zQMhOANA]O'EiQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N^<<N^OOQ[LD-^LD-^O9uQ!0LrOLD-^O'EsQ?MtO7+*nOOQO'#Gf'#GfOOQ[G27lG27lO&=UQ`OG27lO!&zQMhOG27lOOQ[G27nG27nO9uQ!0LrOG27nOOQ[G27wG27wO'E}Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#(ZQ`O!$(!]O!&zQMhO!$(!]O'FXQ!0MzOG27TOOQ!0LbG26wG26wO$+YQ`OG26wO'HjQ`OG26wOCwQ`OG26wO'HuQ!dOG26wO!&zQMhOG26wOOQ[!$(!x!$(!xOOQ[LD-WLD-WO&=UQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#(ZQ`O!)9EwOOQ!0LbLD,cLD,cO$+YQ`OLD,cOCwQ`OLD,cO'H|Q`OLD,cO'IXQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'I`Q?MvOG27TOOQ!0Lb!$( }!$( }O$+YQ`O!$( }OCwQ`O!$( }O'KUQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$+YQ`O!)9EiOCwQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$+YQ`O!.K;TOOQ!0Lb!4/0o!4/0oO!)[QlO'#DzO1PQ`O'#EXO'KaQ!fO'#JrO'KhQ!L^O'#DvO'KoQlO'#EOO'KvQ!fO'#CiO'N^Q!fO'#CiO!)[QlO'#EQO'NnQlO,5;ZO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO'#IpO(!qQ`O,5<iO!)[QlO,5;eO(!yQMhO,5;eO($dQMhO,5;eO!)[QlO,5;wO!&zQMhO'#GmO(!yQMhO'#GmO!&zQMhO'#GoO(!yQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GPO(!yQMhO'#GPO!&zQMhO'#GRO(!yQMhO'#GRO!&zQMhO'#GaO(!yQMhO'#GaO!)[QlO,5:jO($kQpO'#D_O($uQpO'#JvO!)[QlO,5@oO'NnQlO1G0uO(%PQ?MtO'#CiO!)[QlO1G2PO!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO(%ZQ!dO'#CrO!&zQMhO,5<tO(!yQMhO,5<tO'NnQlO1G2RO!)[QlO7+&zO!&zQMhO1G2`O(!yQMhO1G2`O!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO!&zQMhO1G2bO(!yQMhO1G2bO'NnQlO7+'mO'NnQlO7+&aO!&zQMhOANAiO(!yQMhOANAiO(%nQ`O'#EoO(%sQ`O'#EoO(%{Q`O'#F]O(&QQ`O'#EyO(&VQ`O'#KTO(&bQ`O'#KRO(&mQ`O,5;ZO(&rQMjO,5<eO(&yQ`O'#GYO('OQ`O'#GYO('TQ`O,5<eO(']Q`O,5<gO('eQ`O,5;ZO('mQ?MtO1G1`O('tQ`O,5<tO('yQ`O,5<tO((OQ`O,5<vO((TQ`O,5<vO((YQ`O1G2RO((_Q`O1G0uO((dQMjO<<K}O((kQMjO<<K}O((rQMhO'#F|O9`Q`O'#F{OAuQ`O'#EnO!)[QlO,5;tO!3oQ`O'#GYO!3oQ`O'#GYO!3oQ`O'#G[O!3oQ`O'#G[O!,TQMhO7+(cO!,TQMhO7+(cO%.zQ!dO1G2wO%.zQ!dO1G2wO!&zQMhO,5=]O!&zQMhO,5=]",
        stateData: "()x~O'|OS'}OSTOS(ORQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&W!WO&^!XO&`!YO&b!ZO&d![O&g!]O&m!^O&s!_O&u!`O&w!aO&y!bO&{!cO(TSO(VTO(YUO(aVO(o[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O(O!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'z]X(a]X(r]X(y]X(z]X~O!g%RX~P(qO_!}O(V#PO(W!}O(X#PO~O_#QO(X#PO(Y#PO(Z#QO~Ox#SO!U#TO(b#TO(c#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T<ZO(VTO(YUO(aVO(o[O~O![#ZO!]#WO!Y(hP!Y(vP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(VTO(YUO(aVO(o[O~Op#mO![#iO!|]O#i#lO#j#iO(T<[O!k(sP~P.iO!l#oO(T#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa(fX'z(fX'w(fX!k(fX!Y(fX!_(fX%i(fX!g(fX~P1qO#S$dO#`$eO$Q$eOP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX!_(gX%i(gX~Oa(gX'z(gX'w(gX!Y(gX!k(gXv(gX!g(gX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T$sO(VTO(YUO(a$uO(y$}O(z%POg(^P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(T%gO~O!g%mO~Oa%nO'z%nO~O!Q%rO~P%[O(U!lO~P%[O%n%vO~P%[Oh%VO!l%eO(T%gO(U!lO~Oe%}O!l%eO(T%gO~Oj$RO~O!_&PO(T%gO(U!lO(VTO(YUO`)WP~O!Q&SO!l&RO%j&VO&T&WO~P;SO!x#sO~O%s&YO!S)SX!_)SX(T)SX~O(T&ZO~Ol!PO!u&`O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&eOe&dO!x&bO%h&cO%{&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&kO#`&nO%j&iO(U!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'x&{O'z%nO~Oa%nO'x'OO'z%nO~Oa%nO'x'QO'z%nO~O'w]X!Y]Xv]X!k]X&[]X!_]X%i]X!g]X~P(qO!b'_O!c'WO!d'WO(U!lO(VTO(YUO~Os'UO!S'TO!['XO(e'SO!^(iP!^(xP~P@nOn'bO!_'`O(T%gO~Oe'gO!l%eO(T%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<VO#T!pO#U!pO#W!pO#X!pO(U!lO(VTO(YUO(e!mO(o!sO~O!b'mO!c'lO!d'lO#V!pO#['nO#]'nO~PBYOa%nOh%VO!g#vO!l%eO'z%nO(r'pO~O!p'tO#`'rO~PChOs!nO!S!oO(VTO(YUO(e!mO(o!sO~O!_XOs(mX!S(mX!b(mX!c(mX!d(mX!|(mX#T(mX#U(mX#V(mX#W(mX#X(mX#[(mX#](mX(U(mX(V(mX(Y(mX(e(mX(o(mX~O!c'lO!d'lO(U!lO~PDWO(P'xO(Q'xO(R'zO~O_!}O(V'|O(W!}O(X'|O~O_#QO(X'|O(Y'|O(Z#QO~Ov(OO~P%[Ox#SO!U#TO(b#TO(c(RO~O![(TO!Y'WX!Y'^X!]'WX!]'^X~P+}O!](VO!Y(hX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](VO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~O!Y(hX~PHRO!Y([O~O!Y(uX!](uX!g(uX!k(uX(r(uX~O#`(uX#k#dX!^(uX~PJUO#`(]O!Y(wX!](wX~O!](^O!Y(vX~O!Y(aO~O#`$eO~PJUO!^(bO~P`OR#zO!Q#yO!S#{O!l#xO(aVOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(r!na(y!na(z!na~Oa!na'z!na'w!na!Y!na!k!nav!na!_!na%i!na!g!na~PKlO!k(cO~O!g#vO#`(dO(r'pO!](tXa(tX'z(tX~O!k(tX~PNXO!S%hO!_%iO!|]O#i(iO#j(hO(T%gO~O!](jO!k(sX~O!k(lO~O!S%hO!_%iO#j(hO(T%gO~OP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~O!g#vO!k(gX~P! uOR(nO!Q(mO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(T!{a~P!#vO!x(rO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~O#k(xO~O![(zO!k(kP~P%[O(e(|O(o[O~O!S)OO!l#xO(e(|O(o[O~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]$_Oa$qa'z$qa'w$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)dO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Og(pP~P!,TO!Q)iO!g)hO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)hO!_({X$Z({X$]({X$_({X$f({X~O!Q)iO~P!.^O!Q)iO!_({X$Z({X$]({X$_({X$f({X~O!_)kO$Z)oO$])jO$_)jO$f)pO~O![)sO~P!)[O$]$hO$_$gO$f)wO~On$zX!Q$zX#S$zX'y$zX(y$zX(z$zX~OgmXg$zXnmX!]mX#`mX~P!0SOx)yO(b)zO(c)|O~On*VO!Q*OO'y*PO(y$}O(z%PO~Og)}O~P!1WOg*WO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S*YO!_*ZO!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op*`O![*^O(T*XO!k)OP~P!1uO#k*aO~O!l*bO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T*dO(VTO(YUO(a$uO(y$}O(z%PO~O![*gO!Y)PP~P!3tOr*sOs!nO!S*iO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO(e!mO~O!^*pO~P!5iO#S$dOn(`X!Q(`X'y(`X(y(`X(z(`X!](`X#`(`X~Og(`X$O(`X~P!6kOn*xO#`*wOg(_X!](_X~O!]*yOg(^X~Oj%dOk%dOl%dO(T&ZOg(^P~Os*|O~Og)}O(T&ZO~O!l+SO~O(T(vO~Op+WO!S%hO![#iO!_%iO!|]O#i#lO#j#iO(T%gO!k(sP~O!g#vO#k+XO~O!S%hO![+ZO!](^O!_%iO(T%gO!Y(vP~Os'[O!S+]O![+[O(VTO(YUO(e(|O~O!^(xP~P!9|O!]+^Oa)TX'z)TX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa!ja!]!ja'z!ja'w!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:tOR#zO!Q#yO!S#{O!l#xO(aVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(r!ra(y!ra(z!ra~Oa!ra'z!ra'w!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!=[OR#zO!Q#yO!S#{O!l#xO(aVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(r!ta(y!ta(z!ta~Oa!ta'z!ta'w!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?rOh%VOn+gO!_'`O%i+fO~O!g+iOa(]X!_(]X'z(]X!](]X~Oa%nO!_XO'z%nO~Oh%VO!l%eO~Oh%VO!l%eO(T%gO~O!g#vO#k(xO~Ob+tO%j+uO(T+qO(VTO(YUO!^)XP~O!]+vO`)WX~O[+zO~O`+{O~O!_&PO(T%gO(U!lO`)WP~O%j,OO~P;SOh%VO#`,SO~Oh%VOn,VO!_$|O~O!_,XO~O!Q,ZO!_XO~O%n%vO~O!x,`O~Oe,eO~Ob,fO(T#nO(VTO(YUO!^)VP~Oe%}O~O%j!QO(T&ZO~P=gO[,kO`,jO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(VTO(YUO(aVO(o[O~O!_!eO!u!gO$W!kO(T!dO~P!FyO`,jOa%nO'z%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa,pOl!OO!uwO%l!OO%m!OO%n!OO~P!IcO!l&oO~O&^,vO~O!_,xO~O&o,zO&q,{OP&laQ&laS&laY&laa&lad&lae&lal&lap&lar&las&lat&laz&la|&la!O&la!S&la!W&la!X&la!_&la!i&la!l&la!o&la!p&la!q&la!s&la!u&la!x&la!|&la$W&la$n&la%h&la%j&la%l&la%m&la%n&la%q&la%s&la%v&la%w&la%y&la&W&la&^&la&`&la&b&la&d&la&g&la&m&la&s&la&u&la&w&la&y&la&{&la'w&la(T&la(V&la(Y&la(a&la(o&la!^&la&e&lab&la&j&la~O(T-QO~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P#!iO!g-VO#`-UOh(jX!]#hX!^#hX!g(jX!l(jX~O!](jX!^(jX~P##[Oh%VO!g-XO!l%eO!]!aX!^!aX~Os!nO!S!oO(VTO(YUO(e!mO~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(VTO(YUO(aVO(o[O~O(T=QO~P#$qO!]-]O!^(iX~O!^-_O~O!g-VO#`-UO!]#hX!^#hX~O!]-`O!^(xX~O!^-bO~O!c-cO!d-cO(U!lO~P#$`O!^-fO~P'_On-iO!_'`O~O!Y-nO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(U!{a(V!{a(Y!{a(e!{a(o!{a~P!#vO!p-sO#`-qO~PChO!c-uO!d-uO(U!lO~PDWOa%nO#`-qO'z%nO~Oa%nO!g#vO#`-qO'z%nO~Oa%nO!g#vO!p-sO#`-qO'z%nO(r'pO~O(P'xO(Q'xO(R-zO~Ov-{O~O!Y'Wa!]'Wa~P!:tO![.PO!Y'WX!]'WX~P%[O!](VO!Y(ha~O!Y(ha~PHRO!](^O!Y(va~O!S%hO![.TO!_%iO(T%gO!Y'^X!]'^X~O#`.VO!](ta!k(taa(ta'z(ta~O!g#vO~P#,wO!](jO!k(sa~O!S%hO!_%iO#j.ZO(T%gO~Op.`O!S%hO![.]O!_%iO!|]O#i._O#j.]O(T%gO!]'aX!k'aX~OR.dO!l#xO~Oh%VOn.gO!_'`O%i.fO~Oa#ci!]#ci'z#ci'w#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:tOn>]O!Q*OO'y*PO(y$}O(z%PO~O#k#_aa#_a#`#_a'z#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#k(`XP(`XR(`X[(`Xa(`Xj(`Xr(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X'z(`X(a(`X(r(`X!k(`X!Y(`X'w(`Xv(`X!_(`X%i(`X!g(`X~P!6kO!].tO!k(kX~P!:tO!k.wO~O!Y.yO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#3cO#n$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#6QO#r$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(aVOa#mi!]#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(aVO(z#}Oa#mi!]#mi#z#mi#{#mi'z#mi(r#mi(y#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#;VO#x#mi~P#;VO#v$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(aVO(y#|O(z#}Oa#mi!]#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#={O#z$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X!]]X!^]X~O$O]X~P#@jOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO#z<gO#{<hO(aVO(r$YO(y#|O(z#}O~O$O.{O~P#BwO#S$dO#`<nO$Q<nO$O(gX!^(gX~P! uOa'da!]'da'z'da'w'da!k'da!Y'dav'da!_'da%i'da!g'da~P!:tO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO(y#mi(z#mi~P#EyOn>]O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P#EyO!]/POg(pX~P!1WOg/RO~Oa$Pi!]$Pi'z$Pi'w$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:tO$]/SO$_/SO~O$]/TO$_/TO~O!g)hO#`/UO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/VO~O!_)kO$Z/XO$])jO$_)jO$f/YO~O!]<iO!^(fX~P#BwO!^/ZO~O!g)hO$f({X~O$f/]O~Ov/^O~P!&zOx)yO(b)zO(c/aO~O!S/dO~O(y$}On%aa!Q%aa'y%aa(z%aa!]%aa#`%aa~Og%aa$O%aa~P#L{O(z%POn%ca!Q%ca'y%ca(y%ca!]%ca#`%ca~Og%ca$O%ca~P#MnO!]fX!gfX!kfX!k$zX(rfX~P!0SOp%WO![/mO!](^O(T/lO!Y(vP!Y)PP~P!1uOr*sO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO~Os<}O!S/nO![+[O!^*pO(e<|O!^(xP~P$ [O!k/oO~P#/sO!]/pO!g#vO(r'pO!k)OX~O!k/uO~OnoX!QoX'yoX(yoX(zoX~O!g#vO!koX~P$#OOp/wO!S%hO![*^O!_%iO(T%gO!k)OP~O#k/xO~O!Y$zX!]$zX!g%RX~P!0SO!]/yO!Y)PX~P#/sO!g/{O~O!Y/}O~OpkO(T0OO~P.iOh%VOr0TO!g#vO!l%eO(r'pO~O!g+iO~Oa%nO!]0XO'z%nO~O!^0ZO~P!5iO!c0[O!d0[O(U!lO~P#$`Os!nO!S0]O(VTO(YUO(e!mO~O#[0_O~Og%aa!]%aa#`%aa$O%aa~P!1WOg%ca!]%ca#`%ca$O%ca~P!1WOj%dOk%dOl%dO(T&ZOg'mX!]'mX~O!]*yOg(^a~Og0hO~On0jO#`0iOg(_a!](_a~OR0kO!Q0kO!S0lO#S$dOn}a'y}a(y}a(z}a!]}a#`}a~Og}a$O}a~P$(cO!Q*OO'y*POn$sa(y$sa(z$sa!]$sa#`$sa~Og$sa$O$sa~P$)_O!Q*OO'y*POn$ua(y$ua(z$ua!]$ua#`$ua~Og$ua$O$ua~P$*QO#k0oO~Og%Ta!]%Ta#`%Ta$O%Ta~P!1WO!g#vO~O#k0rO~O!]+^Oa)Ta'z)Ta~OR#zO!Q#yO!S#{O!l#xO(aVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(r!ri(y!ri(z!ri~Oa!ri'z!ri'w!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$+oOh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op0{O%]0|O(T0zO~P$.VO!g+iOa(]a!_(]a'z(]a!](]a~O#k1SO~O[]X!]fX!^fX~O!]1TO!^)XX~O!^1VO~O[1WO~Ob1YO(T+qO(VTO(YUO~O!_&PO(T%gO`'uX!]'uX~O!]+vO`)Wa~O!k1]O~P!:tO[1`O~O`1aO~O#`1fO~On1iO!_$|O~O(e(|O!^)UP~Oh%VOn1rO!_1oO%i1qO~O[1|O!]1zO!^)VX~O!^1}O~O`2POa%nO'z%nO~O(T#nO(VTO(YUO~O#S$dO#`$eO$Q$eOP(gXR(gX[(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~Oj2SO&[2TOa(gX~P$3pOj2SO#`$eO&[2TO~Oa2VO~P%[Oa2XO~O&e2[OP&ciQ&ciS&ciY&cia&cid&cie&cil&cip&cir&cis&cit&ciz&ci|&ci!O&ci!S&ci!W&ci!X&ci!_&ci!i&ci!l&ci!o&ci!p&ci!q&ci!s&ci!u&ci!x&ci!|&ci$W&ci$n&ci%h&ci%j&ci%l&ci%m&ci%n&ci%q&ci%s&ci%v&ci%w&ci%y&ci&W&ci&^&ci&`&ci&b&ci&d&ci&g&ci&m&ci&s&ci&u&ci&w&ci&y&ci&{&ci'w&ci(T&ci(V&ci(Y&ci(a&ci(o&ci!^&cib&ci&j&ci~Ob2bO!^2`O&j2aO~P`O!_XO!l2dO~O&q,{OP&liQ&liS&liY&lia&lid&lie&lil&lip&lir&lis&lit&liz&li|&li!O&li!S&li!W&li!X&li!_&li!i&li!l&li!o&li!p&li!q&li!s&li!u&li!x&li!|&li$W&li$n&li%h&li%j&li%l&li%m&li%n&li%q&li%s&li%v&li%w&li%y&li&W&li&^&li&`&li&b&li&d&li&g&li&m&li&s&li&u&li&w&li&y&li&{&li'w&li(T&li(V&li(Y&li(a&li(o&li!^&li&e&lib&li&j&li~O!Y2jO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2pO(e!mO!]'XX!^'XX~P@nO!]-]O!^(ia~O!]'_X!^'_X~P!9|O!]-`O!^(xa~O!^2wO~P'_Oa%nO#`3QO'z%nO~Oa%nO!g#vO#`3QO'z%nO~Oa%nO!g#vO!p3UO#`3QO'z%nO(r'pO~Oa%nO'z%nO~P!:tO!]$_Ov$qa~O!Y'Wi!]'Wi~P!:tO!](VO!Y(hi~O!](^O!Y(vi~O!Y(wi!](wi~P!:tO!](ti!k(tia(ti'z(ti~P!:tO#`3WO!](ti!k(tia(ti'z(ti~O!](jO!k(si~O!S%hO!_%iO!|]O#i3]O#j3[O(T%gO~O!S%hO!_%iO#j3[O(T%gO~On3dO!_'`O%i3cO~Oh%VOn3dO!_'`O%i3cO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aav%aa!_%aa%i%aa!g%aa~P#L{O#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%cav%ca!_%ca%i%ca!g%ca~P#MnO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/sO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/sO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'z}a(a}a(r}a!k}a!Y}a'w}av}a!_}a%i}a!g}a~P$(cO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'z$sa(a$sa(r$sa!k$sa!Y$sa'w$sav$sa!_$sa%i$sa!g$sa~P$)_O#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'z$ua(a$ua(r$ua!k$ua!Y$ua'w$uav$ua!_$ua%i$ua!g$ua~P$*QO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'z%Ta(a%Ta(r%Ta!k%Ta!Y%Ta'w%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/sOa#cq!]#cq'z#cq'w#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:tO![3lO!]'YX!k'YX~P%[O!].tO!k(ka~O!].tO!k(ka~P!:tO!Y3oO~O$O!na!^!na~PKlO$O!ja!]!ja!^!ja~P#BwO$O!ra!^!ra~P!=[O$O!ta!^!ta~P!?rOg']X!]']X~P!,TO!]/POg(pa~OSfO!_4TO$d4UO~O!^4YO~Ov4ZO~P#/sOa$mq!]$mq'z$mq'w$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:tO!Y4]O~P!&zO!S4^O~O!Q*OO'y*PO(z%POn'ia(y'ia!]'ia#`'ia~Og'ia$O'ia~P%-fO!Q*OO'y*POn'ka(y'ka(z'ka!]'ka#`'ka~Og'ka$O'ka~P%.XO(r$YO~P#/sO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!0SOp%WO(T=WO~P!1uOp4bO!S%hO![4aO!_%iO(T%gO!]'eX!k'eX~O!]/pO!k)Oa~O!]/pO!g#vO!k)Oa~O!]/pO!g#vO(r'pO!k)Oa~Og$|i!]$|i#`$|i$O$|i~P!1WO![4jO!Y'gX!]'gX~P!3tO!]/yO!Y)Pa~O!]/yO!Y)Pa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~Oj%YX!g%YX~P%2OOj4oO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4tO!l%eO(r'pO~Or4yO!g#vO(r'pO~Os!nO!S4zO(VTO(YUO(e!mO~O(y$}On%ai!Q%ai'y%ai(z%ai!]%ai#`%ai~Og%ai$O%ai~P%5oO(z%POn%ci!Q%ci'y%ci(y%ci!]%ci#`%ci~Og%ci$O%ci~P%6bOg(_i!](_i~P!1WO#`5QOg(_i!](_i~P!1WO!k5VO~Oa$oq!]$oq'z$oq'w$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:tO!Y5ZO~O!]5[O!_)QX~P#/sOa$zX!_$zX%^]X'z$zX!]$zX~P!0SO%^5_OaoX!_oX'zoX!]oX~P$#OOp5`O(T#nO~O%^5_O~Ob5fO%j5gO(T+qO(VTO(YUO!]'tX!^'tX~O!]1TO!^)Xa~O[5kO~O`5lO~O[5pO~Oa%nO'z%nO~P#/sO!]5uO#`5wO!^)UX~O!^5xO~Or6OOs!nO!S*iO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!pO#W!pO#X!pO#[5}O#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O!^5|O~P%;eOn6TO!_1oO%i6SO~Oh%VOn6TO!_1oO%i6SO~Ob6[O(T#nO(VTO(YUO!]'sX!^'sX~O!]1zO!^)Va~O(VTO(YUO(e6^O~O`6bO~Oj6eO&[6fO~PNXO!k6gO~P%[Oa6iO~Oa6iO~P%[Ob2bO!^6nO&j2aO~P`O!g6pO~O!g6rOh(ji!](ji!^(ji!g(ji!l(jir(ji(r(ji~O!]#hi!^#hi~P#BwO#`6sO!]#hi!^#hi~O!]!ai!^!ai~P#BwOa%nO#`6|O'z%nO~Oa%nO!g#vO#`6|O'z%nO~O!](tq!k(tqa(tq'z(tq~P!:tO!](jO!k(sq~O!S%hO!_%iO#j7TO(T%gO~O!_'`O%i7WO~On7[O!_'`O%i7WO~O#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'z'ia(a'ia(r'ia!k'ia!Y'ia'w'iav'ia!_'ia%i'ia!g'ia~P%-fO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'z'ka(a'ka(r'ka!k'ka!Y'ka'w'kav'ka!_'ka%i'ka!g'ka~P%.XO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'z$|i(a$|i(r$|i!k$|i!Y$|i'w$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/sO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'z%ai(a%ai(r%ai!k%ai!Y%ai'w%aiv%ai!_%ai%i%ai!g%ai~P%5oO#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'z%ci(a%ci(r%ci!k%ci!Y%ci'w%civ%ci!_%ci%i%ci!g%ci~P%6bO!]'Ya!k'Ya~P!:tO!].tO!k(ki~O$O#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#n#mi~P%NdO#n<_O~P%NdOP$[OR#zOr<kO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#r#mi~P&!lO#r<aO~P&!lOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO(aVO#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#v#mi~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO(aVO(z#}O#z#mi#{#mi$O#mi(r#mi(y#mi!]#mi!^#mi~O#x<eO~P&&uO#x#mi~P&&uO#v<cO~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO(aVO(y#|O(z#}O#{#mi$O#mi(r#mi!]#mi!^#mi~O#z#mi~P&)UO#z<gO~P&)UOa#|y!]#|y'z#|y'w#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:tO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO(y#mi(z#mi~P&,QOn>^O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P&,QO#S$dOP(`XR(`X[(`Xj(`Xn(`Xr(`X!Q(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X$O(`X'y(`X(a(`X(r(`X(y(`X(z(`X!](`X!^(`X~O$O$Pi!]$Pi!^$Pi~P#BwO$O!ri!^!ri~P$+oOg']a!]']a~P!1WO!^7nO~O!]'da!^'da~P#BwO!Y7oO~P#/sO!g#vO(r'pO!]'ea!k'ea~O!]/pO!k)Oi~O!]/pO!g#vO!k)Oi~Og$|q!]$|q#`$|q$O$|q~P!1WO!Y'ga!]'ga~P#/sO!g7vO~O!]/yO!Y)Pi~P#/sO!]/yO!Y)Pi~O!Y7yO~Oh%VOr8OO!l%eO(r'pO~Oj8QO!g#vO~Or8TO!g#vO(r'pO~O!Q*OO'y*PO(z%POn'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P&5RO!Q*OO'y*POn'la(y'la(z'la!]'la#`'la~Og'la$O'la~P&5tOg(_q!](_q~P!1WO#`8VOg(_q!](_q~P!1WO!Y8WO~Og%Oq!]%Oq#`%Oq$O%Oq~P!1WOa$oy!]$oy'z$oy'w$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:tO!g6rO~O!]5[O!_)Qa~O!_'`OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(a$Ta(r$Ta(y$Ta(z$Ta~O%i7WO~P&8fO%^8[Oa%[i!_%[i'z%[i!]%[i~Oa#cy!]#cy'z#cy'w#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:tO[8^O~Ob8`O(T+qO(VTO(YUO~O!]1TO!^)Xi~O`8dO~O(e(|O!]'pX!^'pX~O!]5uO!^)Ua~O!^8nO~P%;eO(o!sO~P$&YO#[8oO~O!_1oO~O!_1oO%i8qO~On8tO!_1oO%i8qO~O[8yO!]'sa!^'sa~O!]1zO!^)Vi~O!k8}O~O!k9OO~O!k9RO~O!k9RO~P%[Oa9TO~O!g9UO~O!k9VO~O!](wi!^(wi~P#BwOa%nO#`9_O'z%nO~O!](ty!k(tya(ty'z(ty~P!:tO!](jO!k(sy~O%i9bO~P&8fO!_'`O%i9bO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'z$|q(a$|q(r$|q!k$|q!Y$|q'w$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/sO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'z'ja(a'ja(r'ja!k'ja!Y'ja'w'jav'ja!_'ja%i'ja!g'ja~P&5RO#k'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la'z'la(a'la(r'la!k'la!Y'la'w'lav'la!_'la%i'la!g'la~P&5tO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'z%Oq(a%Oq(r%Oq!k%Oq!Y%Oq'w%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/sO!]'Yi!k'Yi~P!:tO$O#cq!]#cq!^#cq~P#BwO(y$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(a%aa(r%aa!]%aa!^%aa~On%aa!Q%aa'y%aa(z%aa~P&IyO(z%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(a%ca(r%ca!]%ca!^%ca~On%ca!Q%ca'y%ca(y%ca~P&LQOn>^O!Q*OO'y*PO(z%PO~P&IyOn>^O!Q*OO'y*PO(y$}O~P&LQOR0kO!Q0kO!S0lO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'y}a(a}a(r}a(y}a(z}a!]}a!^}a~O!Q*OO'y*POP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(a$sa(r$sa(y$sa(z$sa!]$sa!^$sa~O!Q*OO'y*POP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(a$ua(r$ua(y$ua(z$ua!]$ua!^$ua~On>^O!Q*OO'y*PO(y$}O(z%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(a%Ta(r%Ta!]%Ta!^%Ta~P''VO$O$mq!]$mq!^$mq~P#BwO$O$oq!]$oq!^$oq~P#BwO!^9oO~O$O9pO~P!1WO!g#vO!]'ei!k'ei~O!g#vO(r'pO!]'ei!k'ei~O!]/pO!k)Oq~O!Y'gi!]'gi~P#/sO!]/yO!Y)Pq~Or9wO!g#vO(r'pO~O[9yO!Y9xO~P#/sO!Y9xO~Oj:PO!g#vO~Og(_y!](_y~P!1WO!]'na!_'na~P#/sOa%[q!_%[q'z%[q!]%[q~P#/sO[:UO~O!]1TO!^)Xq~O`:YO~O#`:ZO!]'pa!^'pa~O!]5uO!^)Ui~P#BwO!S:]O~O!_1oO%i:`O~O(VTO(YUO(e:eO~O!]1zO!^)Vq~O!k:hO~O!k:iO~O!k:jO~O!k:jO~P%[O#`:mO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%i:rO~P&8fO!_'`O%i:rO~O$O#|y!]#|y!^#|y~P#BwOP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(a$|i(r$|i!]$|i!^$|i~P''VO!Q*OO'y*PO(z%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(a'ia(r'ia(y'ia!]'ia!^'ia~O!Q*OO'y*POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(a'ka(r'ka(y'ka(z'ka!]'ka!^'ka~O(y$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'y%ai(a%ai(r%ai(z%ai!]%ai!^%ai~O(z%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'y%ci(a%ci(r%ci(y%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#BwO$O#cy!]#cy!^#cy~P#BwO!g#vO!]'eq!k'eq~O!]/pO!k)Oy~O!Y'gq!]'gq~P#/sOr:|O!g#vO(r'pO~O[;QO!Y;PO~P#/sO!Y;PO~Og(_!R!](_!R~P!1WOa%[y!_%[y'z%[y!]%[y~P#/sO!]1TO!^)Xy~O!]5uO!^)Uq~O(T;XO~O!_1oO%i;[O~O!k;_O~O%i;dO~P&8fOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(a$|q(r$|q!]$|q!^$|q~P''VO!Q*OO'y*PO(z%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(a'ja(r'ja(y'ja!]'ja!^'ja~O!Q*OO'y*POP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la$O'la(a'la(r'la(y'la(z'la!]'la!^'la~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(a%Oq(r%Oq!]%Oq!^%Oq~P''VOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!1WO!Y;hO~P#/sOr;iO!g#vO(r'pO~O[;kO!Y;hO~P#/sO!]'pq!^'pq~P#BwO!]#h!Z!^#h!Z~P#BwO#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'z%e!Z(a%e!Z(r%e!Z!k%e!Z!Y%e!Z'w%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/sOr;tO!g#vO(r'pO~O!Y;uO~P#/sOr;|O!g#vO(r'pO~O!Y;}O~P#/sOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(a%e!Z(r%e!Z!]%e!Z!^%e!Z~P''VOr<QO!g#vO(r'pO~Ov(fX~P1qO!Q%rO~P!)[O(U!lO~P!)[O!YfX!]fX#`fX~P%2OOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~O!gfX!k]X!kfX(rfX~P'LTOP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_XO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]<iO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<tO!S${O!_$|O!i>WO!l$xO#j<zO$W%`O$t<vO$v<xO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Ol)dO~P(!yOr!eX(r!eX~P#!iOr(jX(r(jX~P##[O!^]X!^fX~P'LTO!YfX!Y$zX!]fX!]$zX#`fX~P!0SO#k<^O~O!g#vO#k<^O~O#`<nO~Oj<bO~O#`=OO!](wX!^(wX~O#`<nO!](uX!^(uX~O#k=PO~Og=RO~P!1WO#k=XO~O#k=YO~Og=RO(T&ZO~O!g#vO#k=ZO~O!g#vO#k=PO~O$O=[O~P#BwO#k=]O~O#k=^O~O#k=cO~O#k=dO~O#k=eO~O#k=fO~O$O=gO~P!1WO$O=hO~P!1WOl=sO~P7eOk#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~(OT#o!X'|(U#ps#n#qr!Q'}$]'}(T$_(e~",
        goto: "$9Y)]PPPPPP)^PP)aP)rP+W/]PPPP6mPP7TPP=QPPP@tPA^PA^PPPA^PCfPA^PA^PA^PCjPCoPD^PIWPPPI[PPPPI[L_PPPLeMVPI[PI[PP! eI[PPPI[PI[P!#lI[P!'S!(X!(bP!)U!)Y!)U!,gPPPPPPP!-W!(XPP!-h!/YP!2iI[I[!2n!5z!:h!:h!>gPPP!>oI[PPPPPPPPP!BOP!C]PPI[!DnPI[PI[I[I[I[I[PI[!FQP!I[P!LbP!Lf!Lp!Lt!LtP!IXP!Lx!LxP#!OP#!SI[PI[#!Y#%_CjA^PA^PA^A^P#&lA^A^#)OA^#+vA^#.SA^A^#.r#1W#1W#1]#1f#1W#1qPP#1WPA^#2ZA^#6YA^A^6mPPP#:_PPP#:x#:xP#:xP#;`#:xPP#;fP#;]P#;]#;y#;]#<e#<k#<n)aP#<q)aP#<z#<z#<zP)aP)aP)aP)aPP)aP#=Q#=TP#=T)aP#=XP#=[P)aP)aP)aP)aP)aP)a)aPP#=b#=h#=s#=y#>P#>V#>]#>k#>q#>{#?R#?]#?c#?s#?y#@k#@}#AT#AZ#Ai#BO#Cs#DR#DY#Et#FS#Gt#HS#HY#H`#Hf#Hp#Hv#H|#IW#Ij#IpPPPPPPPPPPP#IvPPPPPPP#Jk#Mx$ b$ i$ qPPP$']P$'f$*_$0x$0{$1O$1}$2Q$2X$2aP$2g$2jP$3W$3[$4S$5b$5g$5}PP$6S$6Y$6^$6a$6e$6i$7e$7|$8e$8i$8l$8o$8y$8|$9Q$9UR!|RoqOXst!Z#d%m&r&t&u&w,s,x2[2_Y!vQ'`-e1o5{Q%tvQ%|yQ&T|Q&j!VS'W!e-]Q'f!iS'l!r!yU*k$|*Z*oQ+o%}S+|&V&WQ,d&dQ-c'_Q-m'gQ-u'mQ0[*qQ1b,OQ1y,eR<{<Y%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_S#q]<V!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU+P%]<s<tQ+t&PQ,f&gQ,m&oQ0x+gQ0}+iQ1Y+uQ2R,kQ3`.gQ5`0|Q5f1TQ6[1zQ7Y3dQ8`5gR9e7['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S!S!nQ!r!v!y!z$|'W'_'`'l'm'n*k*o*q*r-]-c-e-u0[0_1o5{5}%[$ti#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q&X|Q'U!eS'[%i-`Q+t&PQ,P&WQ,f&gQ0n+SQ1Y+uQ1_+{Q2Q,jQ2R,kQ5f1TQ5o1aQ6[1zQ6_1|Q6`2PQ8`5gQ8c5lQ8|6bQ:X8dQ:f8yQ;V:YR<}*ZrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R,h&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'b'r(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>R>S[#]WZ#W#Z'X(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ%wxQ%{yW&Q|&V&W,OQ&_!TQ'c!hQ'e!iQ(q#sS+n%|%}Q+r&PQ,_&bQ,c&dS-l'f'gQ.i(rQ1R+oQ1X+uQ1Z+vQ1^+zQ1t,`S1x,d,eQ2|-mQ5e1TQ5i1WQ5n1`Q6Z1yQ8_5gQ8b5kQ8f5pQ:T8^R;T:U!U$zi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y!^%yy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{Q+h%wQ,T&[Q,W&]Q,b&dQ.h(qQ1s,_U1w,c,d,eQ3e.iQ6U1tS6Y1x1yQ8x6Z#f>T#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o>U<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hW%Ti%V*y>PS&[!Q&iQ&]!RQ&^!SU*}%[%d=sR,R&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^T)z$u){V+P%]<s<tW'[!e%i*Z-`S(}#y#zQ+c%rQ+y&SS.b(m(nQ1j,XQ5T0kR8i5u'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S$i$^c#Y#e%q%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.|.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ'Y!eR2q-]!W!nQ!e!r!v!y!z$|'W'_'`'l'm'n*Z*k*o*q*r-]-c-e-u0[0_1o5{5}R1l,ZnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&y!^Q'v!xS(s#u<^Q+l%zQ,]&_Q,^&aQ-j'dQ-w'oS.r(x=PS0q+X=ZQ1P+mQ1n,[Q2c,zQ2e,{Q2m-WQ2z-kQ2}-oS5Y0r=eQ5a1QS5d1S=fQ6t2oQ6x2{Q6}3SQ8]5bQ9Y6vQ9Z6yQ9^7OR:l9V$d$]c#Y#e%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vS(o#p'iQ)P#zS+b%q.|S.c(n(pR3^.d'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS#q]<VQ&t!XQ&u!YQ&w![Q&x!]R2Z,vQ'a!hQ+e%wQ-h'cS.e(q+hQ2x-gW3b.h.i0w0yQ6w2yW7U3_3a3e5^U9a7V7X7ZU:q9c9d9fS;b:p:sQ;p;cR;x;qU!wQ'`-eT5y1o5{!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(j,s,x.[2[2_]!pQ!r'`-e1o5{T#q]<V%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S(}#y#zS.b(m(n!s=l$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU$fd)_,mS(p#p'iU*v%R(w4OU0m+O.n7gQ5^0xQ7V3`Q9d7YR:s9em!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}Q't!uS(f#g2US-s'k'wQ/s*]Q0R*jQ3U-vQ4f/tQ4r0TQ4s0UQ4x0^Q7r4`S7}4t4vS8R4y4{Q9r7sQ9v7yQ9{8OQ:Q8TS:{9w9xS;g:|;PS;s;h;iS;{;t;uS<P;|;}R<S<QQ#wbQ's!uS(e#g2US(g#m+WQ+Y%fQ+j%xQ+p&OU-r'k't'wQ.W(fU/r*]*`/wQ0S*jQ0V*lQ1O+kQ1u,aS3R-s-vQ3Z.`S4e/s/tQ4n0PS4q0R0^Q4u0WQ6W1vQ7P3US7q4`4bQ7u4fU7|4r4x4{Q8P4wQ8v6XS9q7r7sQ9u7yQ9}8RQ:O8SQ:c8wQ:y9rS:z9v9xQ;S:QQ;^:dS;f:{;PS;r;g;hS;z;s;uS<O;{;}Q<R<PQ<T<SQ=o=jQ={=tR=|=uV!wQ'`-e%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S#wz!j!r=i$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=o>R%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Q%fj!^%xy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{S&Oz!jQ+k%yQ,a&dW1v,b,c,d,eU6X1w1x1yS8w6Y6ZQ:d8x!r=j$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ=t>QR=u>R%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Y#bWZ#W#Z(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ,n&o!p=k$Z$n)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=n'XU']!e%i*ZR2s-`%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ,m&oQ0x+gQ3`.gQ7Y3dR9e7[!b$Tc#Y%q(S(Y(t(y)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!P<d)^)q-Z.|2k2n3p3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!f$Vc#Y%q(S(Y(t(y)W)X)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!T<f)^)q-Z.|2k2n3p3v3w3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!^$Zc#Y%q(S(Y(t(y)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<WQ4_/kz>S)^)q-Z.|2k2n3p4P4X6u7b7k7l8k9X9g9m9n;W;`=vQ>X>ZR>Y>['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS$oh$pR4U/U'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$kf$qQ$ifS)j$l)nR)v$qT$jf$qT)l$l)n'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$oh$pQ$rhR)u$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_!s>Q$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'b)O)s*i+]+g,p,s,x-i.g/V/n0]0l1r2S2T2V2X2[2_2a3d4T4z6T6e6f6i7[8t9T!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^Q+T%aQ/c*Oo4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!U$yi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>YQ*c$zU*l$|*Z*oQ+U%bQ0W*m#f=q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n=r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hQ=w>TQ=x>UQ=y>VR=z>W!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hnoOXst!Z#d%m&r&t&u&w,s,x2[2_S*f${*YQ-R'OQ-S'QR4i/y%[%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q,U&]Q1h,WQ5s1gR8h5tV*n$|*Z*oU*n$|*Z*oT5z1o5{S0P*i/nQ4w0]T8S4z:]Q+j%xQ0V*lQ1O+kQ1u,aQ6W1vQ8v6XQ:c8wR;^:d!U%Oi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Yx*R$v)e*S*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>OS0`*t0a#f<o#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<p<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!d=S(u)c*[*e.j.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[`=T3}7c7f7j9h:t:w;yS=_.l3iT=`7e9k!U%Qi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y|*T$v)e*U*t+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>OS0b*u0c#f<q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!h=U(u)c*[*e.k.l.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[d=V3}7d7e7j9h9i:t:u:w;yS=a.m3jT=b7f9lrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q&f!UR,p&ornOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R&f!UQ,Y&^R1d,RsnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q1p,_S6R1s1tU8p6P6Q6US:_8r8sS;Y:^:aQ;m;ZR;w;nQ&m!VR,i&iR6_1|R:f8yW&Q|&V&W,OR1Z+vQ&r!WR,s&sR,y&xT2],x2_R,}&yQ,|&yR2f,}Q'y!{R-y'ySsOtQ#dXT%ps#dQ#OTR'{#OQ#RUR'}#RQ){$uR/`){Q#UVR(Q#UQ#XWU(W#X(X.QQ(X#YR.Q(YQ-^'YR2r-^Q.u(yS3m.u3nR3n.vQ-e'`R2v-eY!rQ'`-e1o5{R'j!rQ/Q)eR4S/QU#_W%h*YU(_#_(`.RQ(`#`R.R(ZQ-a']R2t-at`OXst!V!Z#d%m&i&k&r&t&u&w,s,x2[2_S#hZ%eU#r`#h.[R.[(jQ(k#jQ.X(gW.a(k.X3X7RQ3X.YR7R3YQ)n$lR/W)nQ$phR)t$pQ$`cU)a$`-|<jQ-|<WR<j)qQ/q*]W4c/q4d7t9sU4d/r/s/tS7t4e4fR9s7u$e*Q$v(u)c)e*[*e*t*u+Q+R+V.l.m.o.p.q/_/g/i/k/v/|0d0e0v1e3f3g3h3}4R4[4g4h4l4|5O5R5S5W5r7]7^7_7`7e7f7h7i7j7p7w7z8U8X8Z9h9i9j9t9|:R:S:t:u:v:w:x:};R;e;j;v;y=p=}>O>Z>[Q/z*eU4k/z4m7xQ4m/|R7x4lS*o$|*ZR0Y*ox*S$v)e*t*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>O!d.j(u)c*[*e.l.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/h*S.j7ca7c3}7e7f7j9h:t:w;yQ0a*tQ3i.lU4}0a3i9kR9k7e|*U$v)e*t*u+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>O!h.k(u)c*[*e.l.m.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/j*U.k7de7d3}7e7f7j9h9i:t:u:w;yQ0c*uQ3j.mU5P0c3j9lR9l7fQ*z%UR0g*zQ5]0vR8Y5]Q+_%kR0u+_Q5v1jS8j5v:[R:[8kQ,[&_R1m,[Q5{1oR8m5{Q1{,fS6]1{8zR8z6_Q1U+rW5h1U5j8a:VQ5j1XQ8a5iR:V8bQ+w&QR1[+wQ2_,xR6m2_YrOXst#dQ&v!ZQ+a%mQ,r&rQ,t&tQ,u&uQ,w&wQ2Y,sS2],x2_R6l2[Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'q!uQ+`%lQ+l%zQ,Q&XQ,h&mQ-P&|W-p'k's't'wQ-w'oQ0X*nQ1P+mQ1c,PS2O,i,lQ2g-OQ2h-RQ2i-SQ2}-oW3P-r-s-v-xQ5a1QQ5m1_Q5q1eQ6V1uQ6a2QQ6k2ZU6z3O3R3UQ6}3SQ8]5bQ8e5oQ8g5rQ8l5zQ8u6WQ8{6`S9[6{7PQ9^7OQ:W8cQ:b8vQ:g8|Q:n9]Q;U:XQ;]:cQ;a:oQ;l;VR;o;^Q%zyQ'd!iQ'o!uU+m%{%|%}Q-W'VU-k'e'f'gS-o'k'uQ0Q*jS1Q+n+oQ2o-YS2{-l-mQ3S-tS4p0R0UQ5b1RQ6v2uQ6y2|Q7O3TU7{4r4s4vQ9z7}R;O9{S$wi>PR*{%VU%Ui%V>PR0f*yQ$viS(u#v+iS)c$b$cQ)e$dQ*[$xS*e${*YQ*t%OQ*u%QQ+Q%^Q+R%_Q+V%cQ.l<oQ.m<qQ.o<uQ.p<wQ.q<yQ/_)yQ/g*RQ/i*TQ/k*VQ/v*aS/|*g/mQ0d*wQ0e*xl0v+f,V.f1i1q3c6S7W8q9b:`:r;[;dQ1e,SQ3f=SQ3g=UQ3h=XS3}<l<mQ4R/PS4[/d4^Q4g/xQ4h/yQ4l/{Q4|0`Q5O0bQ5R0iQ5S0jQ5W0oQ5r1fQ7]=]Q7^=_Q7_=aQ7`=cQ7e<pQ7f<rQ7h<vQ7i<xQ7j<zQ7p4_Q7w4jQ7z4oQ8U5QQ8X5[Q8Z5_Q9h=YQ9i=TQ9j=VQ9t7vQ9|8QQ:R8VQ:S8[Q:t=^Q:u=`Q:v=bQ:w=dQ:x9pQ:}9yQ;R:PQ;e=gQ;j;QQ;v;kQ;y=hQ=p>PQ=}>XQ>O>YQ>Z>]R>[>^Q+O%]Q.n<sR7g<tnpOXst!Z#d%m&r&t&u&w,s,x2[2_Q!fPS#fZ#oQ&|!`W'h!o*i0]4zQ(P#SQ)Q#{Q)r$nS,l&k&nQ,q&oQ-O&{S-T'T/nQ-g'bQ.x)OQ/[)sQ0s+]Q0y+gQ2W,pQ2y-iQ3a.gQ4W/VQ5U0lQ6Q1rQ6c2SQ6d2TQ6h2VQ6j2XQ6o2aQ7Z3dQ7m4TQ8s6TQ9P6eQ9Q6fQ9S6iQ9f7[Q:a8tR:k9T#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'b)O*i+]+g,p,s,x-i.g/n0]0l1r2S2T2V2X2[2_2a3d4z6T6e6f6i7[8t9TQ#YWQ#eYQ%quQ%svS%uw!gS(S#W(VQ(Y#ZQ(t#uQ(y#xQ)R$OQ)S$PQ)T$QQ)U$RQ)V$SQ)W$TQ)X$UQ)Y$VQ)Z$WQ)[$XQ)^$ZQ)`$_Q)b$aQ)g$eW)q$n)s/V4TQ+d%tQ+x&RS-Z'X2pQ-x'rS-}(T.PQ.S(]Q.U(dQ.s(xQ.v(zQ.z<UQ.|<XQ.}<YQ/O<]Q/b)}Q0p+XQ2k-UQ2n-XQ3O-qQ3V.VQ3k.tQ3p<^Q3q<_Q3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{.{Q3|<kQ4P<nQ4Q<{Q4X<iQ5X0rQ5c1SQ6u=OQ6{3QQ7Q3WQ7a3lQ7b=PQ7k=RQ7l=ZQ8k5wQ9X6sQ9]6|Q9g=[Q9m=eQ9n=fQ:o9_Q;W:ZQ;`:mQ<W#SR=v>SR#[WR'Z!el!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}S'V!e-]U*j$|*Z*oS-Y'W'_S0U*k*qQ0^*rQ2u-cQ4v0[R4{0_R({#xQ!fQT-d'`-e]!qQ!r'`-e1o5{Q#p]R'i<VR)f$dY!uQ'`-e1o5{Q'k!rS'u!v!yS'w!z5}S-t'l'mQ-v'nR3T-uT#kZ%eS#jZ%eS%km,oU(g#h#i#lS.Y(h(iQ.^(jQ0t+^Q3Y.ZU3Z.[.]._S7S3[3]R9`7Td#^W#W#Z%h(T(^*Y+Z.T/mr#gZm#h#i#l%e(h(i(j+^.Z.[.]._3[3]7TS*]$x*bQ/t*^Q2U,oQ2l-VQ4`/pQ6q2dQ7s4aQ9W6rT=m'X+[V#aW%h*YU#`W%h*YS(U#W(^U(Z#Z+Z/mS-['X+[T.O(T.TV'^!e%i*ZQ$lfR)x$qT)m$l)nR4V/UT*_$x*bT*h${*YQ0w+fQ1g,VQ3_.fQ5t1iQ6P1qQ7X3cQ8r6SQ9c7WQ:^8qQ:p9bQ;Z:`Q;c:rQ;n;[R;q;dnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&l!VR,h&itmOXst!U!V!Z#d%m&i&r&t&u&w,s,x2[2_R,o&oT%lm,oR1k,XR,g&gQ&U|S+}&V&WR1^,OR+s&PT&p!W&sT&q!W&sT2^,x2_",
        nodeNames: "\u26a0 ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
        maxTerm: 380,
        context: YS,
        nodeProps: [
          ["isolate", -8, 5, 6, 14, 37, 39, 51, 53, 55, ""],
          ["group", -26, 9, 17, 19, 68, 207, 211, 215, 216, 218, 221, 224, 234, 237, 243, 245, 247, 249, 252, 258, 264, 266, 268, 270, 272, 274, 275, "Statement", -34, 13, 14, 32, 35, 36, 42, 51, 54, 55, 57, 62, 70, 72, 76, 80, 82, 84, 85, 110, 111, 120, 121, 136, 139, 141, 142, 143, 144, 145, 147, 148, 167, 169, 171, "Expression", -23, 31, 33, 37, 41, 43, 45, 173, 175, 177, 178, 180, 181, 182, 184, 185, 186, 188, 189, 190, 201, 203, 205, 206, "Type", -3, 88, 103, 109, "ClassItem"],
          ["openedBy", 23, "<", 38, "InterpolationStart", 56, "[", 60, "{", 73, "(", 160, "JSXStartCloseTag"],
          ["closedBy", -2, 24, 168, ">", 40, "InterpolationEnd", 50, "]", 61, "}", 74, ")", 165, "JSXEndTag"]
        ],
        propSources: [US],
        skippedNodes: [0, 5, 6, 278],
        repeatNodeCount: 37,
        tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
        tokenizers: [yS, VS, iS, zS, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, AS, new aS("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340), new aS("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)],
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
          get: SS => pS[SS] || -1
        }, {
          term: 343,
          get: SS => sS[SS] || -1
        }, {
          term: 95,
          get: SS => BS[SS] || -1
        }],
        tokenPrec: 15201
      });
    var FS = gS(41334),
      RS = gS(41315),
      TS = gS(41322),
      oS = gS(41306);
    const lS = [(0, oS.s)("function ${name}(${params}) {\n\t${}\n}", {
        label: "function",
        detail: "definition",
        type: "keyword"
      }), (0, oS.s)("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}", {
        label: "for",
        detail: "loop",
        type: "keyword"
      }), (0, oS.s)("for (let ${name} of ${collection}) {\n\t${}\n}", {
        label: "for",
        detail: "of loop",
        type: "keyword"
      }), (0, oS.s)("do {\n\t${}\n} while (${})", {
        label: "do",
        detail: "loop",
        type: "keyword"
      }), (0, oS.s)("while (${}) {\n\t${}\n}", {
        label: "while",
        detail: "loop",
        type: "keyword"
      }), (0, oS.s)("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
        label: "try",
        detail: "/ catch block",
        type: "keyword"
      }), (0, oS.s)("if (${}) {\n\t${}\n}", {
        label: "if",
        detail: "block",
        type: "keyword"
      }), (0, oS.s)("if (${}) {\n\t${}\n} else {\n\t${}\n}", {
        label: "if",
        detail: "/ else block",
        type: "keyword"
      }), (0, oS.s)("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
        label: "class",
        detail: "definition",
        type: "keyword"
      }), (0, oS.s)('import {${names}} from "${module}"\n${}', {
        label: "import",
        detail: "named",
        type: "keyword"
      }), (0, oS.s)('import ${name} from "${module}"\n${}', {
        label: "import",
        detail: "default",
        type: "keyword"
      })],
      mS = lS.concat([(0, oS.s)("interface ${name} {\n\t${}\n}", {
        label: "interface",
        detail: "definition",
        type: "keyword"
      }), (0, oS.s)("type ${name} = ${type}", {
        label: "type",
        detail: "definition",
        type: "keyword"
      }), (0, oS.s)("enum ${name} {\n\t${}\n}", {
        label: "enum",
        detail: "definition",
        type: "keyword"
      })]),
      eS = new tS.q,
      rS = new Set(["Script", "Block", "FunctionExpression", "FunctionDeclaration", "ArrowFunction", "MethodDeclaration", "ForStatement"]);

    function SH(SS) {
      return (HS, gS) => {
        let tS = HS.node.getChild("VariableDefinition");
        return tS && gS(tS, SS), !0
      }
    }
    const HH = ["FunctionDeclaration"],
      gH = {
        FunctionDeclaration: SH("function"),
        ClassDeclaration: SH("class"),
        ClassExpression: () => !0,
        EnumDeclaration: SH("constant"),
        TypeAliasDeclaration: SH("type"),
        NamespaceDeclaration: SH("namespace"),
        VariableDefinition(SS, HS) {
          SS.matchContext(HH) || HS(SS, "variable")
        },
        TypeDefinition(SS, HS) {
          HS(SS, "type")
        },
        __proto__: null
      };

    function tH(SS, HS) {
      let gS = eS.get(HS);
      if (gS) return gS;
      let bS = [],
        XS = !0;

      function xS(HS, gS) {
        let tS = SS.sliceString(HS.from, HS.to);
        bS.push({
          label: tS,
          type: gS
        })
      }
      return HS.cursor(tS.g.IncludeAnonymous).iterate((HS => {
        if (XS) XS = !1;
        else if (HS.name) {
          let SS = gH[HS.name];
          if (SS && SS(HS, xS) || rS.has(HS.name)) return !1
        } else if (HS.to - HS.from > 8192) {
          for (let gS of tH(SS, HS.node)) bS.push(gS);
          return !1
        }
      })), eS.set(HS, bS), bS
    }
    const bH = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
      XH = ["TemplateString", "String", "RegExp", "LineComment", "BlockComment", "VariableDefinition", "TypeDefinition", "Label", "PropertyDefinition", "PropertyName", "PrivatePropertyDefinition", "PrivatePropertyName", "JSXText", "JSXAttributeValue", "JSXOpenTag", "JSXCloseTag", "JSXSelfClosingTag", ".", "?."];

    function xH(SS) {
      let HS = (0, FS.ob)(SS.state).resolveInner(SS.pos, -1);
      if (XH.indexOf(HS.name) > -1) return null;
      let gS = "VariableName" == HS.name || HS.to - HS.from < 20 && bH.test(SS.state.sliceDoc(HS.from, HS.to));
      if (!gS && !SS.explicit) return null;
      let tS = [];
      for (let bS = HS; bS; bS = bS.parent) rS.has(bS.name) && (tS = tS.concat(tH(SS.state.doc, bS)));
      return {
        options: tS,
        from: gS ? HS.from : SS.pos,
        validFor: bH
      }
    }
    const NH = FS.h.define({
        name: "javascript",
        parser: MS.configure({
          props: [FS.U.add({
            IfStatement: (0, FS.n)({
              except: /^\s*({|else\b)/
            }),
            TryStatement: (0, FS.n)({
              except: /^\s*({|catch\b|finally\b)/
            }),
            LabeledStatement: FS.A,
            SwitchBody: SS => {
              let HS = SS.textAfter,
                gS = /^\s*\}/.test(HS),
                tS = /^\s*(case|default)\b/.test(HS);
              return SS.baseIndent + (gS ? 0 : tS ? 1 : 2) * SS.unit
            },
            Block: (0, FS.w)({
              closing: "}"
            }),
            ArrowFunction: SS => SS.baseIndent + SS.unit,
            "TemplateString BlockComment": () => null,
            "Statement Property": (0, FS.n)({
              except: /^\s*{/
            }),
            JSXElement(SS) {
              let HS = /^\s*<\//.test(SS.textAfter);
              return SS.lineIndent(SS.node.from) + (HS ? 0 : SS.unit)
            },
            JSXEscape(SS) {
              let HS = /\s*\}/.test(SS.textAfter);
              return SS.lineIndent(SS.node.from) + (HS ? 0 : SS.unit)
            },
            "JSXOpenTag JSXSelfClosingTag": SS => SS.column(SS.node.from) + SS.unit
          }), FS.J.add({
            "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": FS.C,
            BlockComment: SS => ({
              from: SS.from + 2,
              to: SS.to - 2
            }),
            JSXElement(SS) {
              let HS = SS.firstChild;
              if (!HS || "JSXSelfClosingTag" == HS.name) return null;
              let gS = SS.lastChild;
              return {
                from: HS.to,
                to: gS.type.isError ? SS.to : gS.from
              }
            },
            "JSXSelfClosingTag JSXOpenTag"(SS) {
              var HS;
              let gS = null === (HS = SS.firstChild) || void 0 === HS ? void 0 : HS.nextSibling,
                tS = SS.lastChild;
              return !gS || gS.type.isError ? null : {
                from: gS.to,
                to: tS.type.isError ? SS.to : tS.from
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
      qH = {
        test: SS => /^JSX/.test(SS.name),
        facet: (0, FS.t)({
          commentTokens: {
            block: {
              open: "{/*",
              close: "*/}"
            }
          }
        })
      },
      uH = NH.configure({
        dialect: "ts"
      }, "typescript"),
      IH = NH.configure({
        dialect: "jsx",
        props: [FS.eb.add((SS => SS.isTop ? [qH] : void 0))]
      }),
      fH = NH.configure({
        dialect: "jsx ts",
        props: [FS.eb.add((SS => SS.isTop ? [qH] : void 0))]
      }, "typescript");
    let kH = SS => ({
      label: SS,
      type: "keyword"
    });
    const aH = "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(kH),
      KH = aH.concat(["declare", "implements", "private", "protected", "public"].map(kH));

    function jH() {
      let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        HS = SS.jsx ? SS.typescript ? fH : IH : SS.typescript ? uH : NH,
        gS = SS.typescript ? mS.concat(KH) : lS.concat(aH);
      return new FS.i(HS, [NH.data.of({
        autocomplete: (0, oS.o)(XH, (0, oS.j)(gS))
      }), NH.data.of({
        autocomplete: xH
      }), SS.jsx ? nH : []])
    }

    function GH(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : SS.length;
      for (let tS = null === HS || void 0 === HS ? void 0 : HS.firstChild; tS; tS = tS.nextSibling)
        if ("JSXIdentifier" == tS.name || "JSXBuiltin" == tS.name || "JSXNamespacedName" == tS.name || "JSXMemberExpression" == tS.name) return SS.sliceString(tS.from, Math.min(tS.to, gS));
      return ""
    }
    const CH = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      nH = TS.e.inputHandler.of(((SS, HS, gS, tS, bS) => {
        if ((CH ? SS.composing : SS.compositionStarted) || SS.state.readOnly || HS != gS || ">" != tS && "/" != tS || !NH.isActiveAt(SS.state, HS, -1)) return !1;
        let XS = bS(),
          {
            state: xS
          } = XS,
          NS = xS.changeByRange((SS => {
            var HS;
            let gS, {
                head: bS
              } = SS,
              XS = (0, FS.ob)(xS).resolveInner(bS - 1, -1);
            if ("JSXStartTag" == XS.name && (XS = XS.parent), xS.doc.sliceString(bS - 1, bS) != tS || "JSXAttributeValue" == XS.name && XS.to > bS);
            else {
              if (">" == tS && "JSXFragmentTag" == XS.name) return {
                range: SS,
                changes: {
                  from: bS,
                  insert: "</>"
                }
              };
              if ("/" == tS && "JSXStartCloseTag" == XS.name) {
                let SS = XS.parent,
                  tS = SS.parent;
                if (tS && SS.from == bS - 2 && ((gS = GH(xS.doc, tS.firstChild, bS)) || "JSXFragmentTag" == (null === (HS = tS.firstChild) || void 0 === HS ? void 0 : HS.name))) {
                  let SS = `${gS}>`;
                  return {
                    range: RS.i.cursor(bS + SS.length, -1),
                    changes: {
                      from: bS,
                      insert: SS
                    }
                  }
                }
              } else if (">" == tS) {
                let HS = function(SS) {
                  for (;;) {
                    if ("JSXOpenTag" == SS.name || "JSXSelfClosingTag" == SS.name || "JSXFragmentTag" == SS.name) return SS;
                    if ("JSXEscape" == SS.name || !SS.parent) return null;
                    SS = SS.parent
                  }
                }(XS);
                if (HS && "JSXOpenTag" == HS.name && !/^\/?>|^<\//.test(xS.doc.sliceString(bS, bS + 2)) && (gS = GH(xS.doc, HS, bS))) return {
                  range: SS,
                  changes: {
                    from: bS,
                    insert: `</${gS}>`
                  }
                }
              }
            }
            return {
              range: SS
            }
          }));
        return !NS.changes.empty && (SS.dispatch([XS, xS.update(NS, {
          userEvent: "input.complete",
          scrollIntoView: !0
        })]), !0)
      }))
  },
  41334: (SS, HS, gS) => {
    gS.d(HS, {
      $: () => vS,
      A: () => BS,
      B: () => nH,
      C: () => lS,
      G: () => uH,
      J: () => oS,
      K: () => CS,
      O: () => ES,
      R: () => YS,
      U: () => yS,
      X: () => RS,
      Z: () => LS,
      ab: () => sH,
      c: () => QH,
      eb: () => fS,
      f: () => AS,
      h: () => KS,
      i: () => dS,
      ib: () => ZH,
      l: () => WH,
      mb: () => GS,
      n: () => MS,
      ob: () => jS,
      q: () => dH,
      t: () => IS,
      w: () => pS
    });
    var tS, bS = gS(41336),
      XS = gS(41315),
      xS = gS(41322),
      NS = gS(41345),
      qS = gS(41324);
    const uS = new bS.i;

    function IS(SS) {
      return XS.n.define({
        combine: SS ? HS => HS.concat(SS) : void 0
      })
    }
    const fS = new bS.i;
    class kS {
      constructor(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this.data = SS, this.name = tS, XS.m.prototype.hasOwnProperty("tree") || Object.defineProperty(XS.m.prototype, "tree", {
          get() {
            return jS(this)
          }
        }), this.parser = HS, this.extension = [OS.of(this), XS.m.languageData.of(((SS, HS, gS) => {
          let tS = aS(SS, HS, gS),
            bS = tS.type.prop(uS);
          if (!bS) return [];
          let XS = SS.facet(bS),
            xS = tS.type.prop(fS);
          if (xS) {
            let bS = tS.resolve(HS - tS.from, gS);
            for (let HS of xS)
              if (HS.test(bS, SS)) {
                let gS = SS.facet(HS.facet);
                return "replace" == HS.type ? gS : gS.concat(XS)
              }
          }
          return XS
        }))].concat(gS)
      }
      isActiveAt(SS, HS) {
        return aS(SS, HS, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1).type.prop(uS) == this.data
      }
      findRegions(SS) {
        let HS = SS.facet(OS);
        if ((null === HS || void 0 === HS ? void 0 : HS.data) == this.data) return [{
          from: 0,
          to: SS.doc.length
        }];
        if (!HS || !HS.allowsNesting) return [];
        let gS = [],
          tS = (SS, HS) => {
            if (SS.prop(uS) == this.data) return void gS.push({
              from: HS,
              to: HS + SS.length
            });
            let XS = SS.prop(bS.i.mounted);
            if (XS) {
              if (XS.tree.prop(uS) == this.data) {
                if (XS.overlay)
                  for (let SS of XS.overlay) gS.push({
                    from: SS.from + HS,
                    to: SS.to + HS
                  });
                else gS.push({
                  from: HS,
                  to: HS + SS.length
                });
                return
              }
              if (XS.overlay) {
                let SS = gS.length;
                if (tS(XS.tree, XS.overlay[0].from + HS), gS.length > SS) return
              }
            }
            for (let gS = 0; gS < SS.children.length; gS++) {
              let XS = SS.children[gS];
              XS instanceof bS.w && tS(XS, SS.positions[gS] + HS)
            }
          };
        return tS(jS(SS), 0), gS
      }
      get allowsNesting() {
        return !0
      }
    }

    function aS(SS, HS, gS) {
      let tS = SS.facet(OS),
        XS = jS(SS).topNode;
      if (!tS || tS.allowsNesting)
        for (let xS = XS; xS; xS = xS.enter(HS, gS, bS.g.ExcludeBuffers | bS.g.EnterBracketed)) xS.type.isTop && (XS = xS);
      return XS
    }
    kS.setState = XS.G.define();
    class KS extends kS {
      constructor(SS, HS, gS) {
        super(SS, HS, [], gS), this.parser = HS
      }
      static define(SS) {
        let HS = IS(SS.languageData);
        return new KS(HS, SS.parser.configure({
          props: [uS.add((SS => SS.isTop ? HS : void 0))]
        }), SS.name)
      }
      configure(SS, HS) {
        return new KS(this.data, this.parser.configure(SS), HS || this.name)
      }
      get allowsNesting() {
        return this.parser.hasWrappers()
      }
    }

    function jS(SS) {
      let HS = SS.field(kS.state, !1);
      return HS ? HS.tree : bS.w.empty
    }

    function GS(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SS.doc.length;
      var gS;
      return (null === (gS = SS.field(kS.state, !1)) || void 0 === gS ? void 0 : gS.context.isDone(HS)) || !1
    }

    function CS(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SS.viewport.to,
        gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        tS = function(SS, HS) {
          let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
          var tS;
          let bS = null === (tS = SS.field(kS.state, !1)) || void 0 === tS ? void 0 : tS.context;
          if (!bS) return null;
          let XS = bS.viewport;
          bS.updateViewport({
            from: 0,
            to: HS
          });
          let xS = bS.isDone(HS) || bS.work(gS, HS) ? bS.tree : null;
          return bS.updateViewport(XS), xS
        }(SS.state, HS, gS);
      return tS != jS(SS.state) && SS.dispatch({}), !!tS
    }
    class nS {
      constructor(SS) {
        this.doc = SS, this.cursorPos = 0, this.string = "", this.cursor = SS.iter()
      }
      get length() {
        return this.doc.length
      }
      syncTo(SS) {
        return this.string = this.cursor.next(SS - this.cursorPos).value, this.cursorPos = SS + this.string.length, this.cursorPos - this.string.length
      }
      chunk(SS) {
        return this.syncTo(SS), this.string
      }
      get lineChunks() {
        return !0
      }
      read(SS, HS) {
        let gS = this.cursorPos - this.string.length;
        return SS < gS || HS >= this.cursorPos ? this.doc.sliceString(SS, HS) : this.string.slice(SS - gS, HS - gS)
      }
    }
    let PS = null;
    class QS {
      constructor(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          tS = arguments.length > 3 ? arguments[3] : void 0,
          bS = arguments.length > 4 ? arguments[4] : void 0,
          XS = arguments.length > 5 ? arguments[5] : void 0,
          xS = arguments.length > 6 ? arguments[6] : void 0,
          NS = arguments.length > 7 ? arguments[7] : void 0;
        this.parser = SS, this.state = HS, this.fragments = gS, this.tree = tS, this.treeLen = bS, this.viewport = XS, this.skipped = xS, this.scheduleOn = NS, this.parse = null, this.tempSkipped = []
      }
      static create(SS, HS, gS) {
        return new QS(SS, HS, [], bS.w.empty, 0, gS, [], null)
      }
      startParse() {
        return this.parser.startParse(new nS(this.state.doc), this.fragments)
      }
      work(SS, HS) {
        return null != HS && HS >= this.state.doc.length && (HS = void 0), this.tree != bS.w.empty && this.isDone(null !== HS && void 0 !== HS ? HS : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext((() => {
          var gS;
          if ("number" == typeof SS) {
            let HS = Date.now() + SS;
            SS = () => Date.now() > HS
          }
          for (this.parse || (this.parse = this.startParse()), null != HS && (null == this.parse.stoppedAt || this.parse.stoppedAt > HS) && HS < this.state.doc.length && this.parse.stopAt(HS);;) {
            let tS = this.parse.advance();
            if (tS) {
              if (this.fragments = this.withoutTempSkipped(bS.v.addTree(tS, this.fragments, null != this.parse.stoppedAt)), this.treeLen = null !== (gS = this.parse.stoppedAt) && void 0 !== gS ? gS : this.state.doc.length, this.tree = tS, this.parse = null, !(this.treeLen < (null !== HS && void 0 !== HS ? HS : this.state.doc.length))) return !0;
              this.parse = this.startParse()
            }
            if (SS()) return !1
          }
        }))
      }
      takeTree() {
        let SS, HS;
        this.parse && (SS = this.parse.parsedPos) >= this.treeLen && ((null == this.parse.stoppedAt || this.parse.stoppedAt > SS) && this.parse.stopAt(SS), this.withContext((() => {
          for (; !(HS = this.parse.advance()););
        })), this.treeLen = SS, this.tree = HS, this.fragments = this.withoutTempSkipped(bS.v.addTree(this.tree, this.fragments, !0)), this.parse = null)
      }
      withContext(SS) {
        let HS = PS;
        PS = this;
        try {
          return SS()
        } finally {
          PS = HS
        }
      }
      withoutTempSkipped(SS) {
        for (let HS; HS = this.tempSkipped.pop();) SS = DS(SS, HS.from, HS.to);
        return SS
      }
      changes(SS, HS) {
        let {
          fragments: gS,
          tree: tS,
          treeLen: XS,
          viewport: xS,
          skipped: NS
        } = this;
        if (this.takeTree(), !SS.empty) {
          let HS = [];
          if (SS.iterChangedRanges(((SS, gS, tS, bS) => HS.push({
              fromA: SS,
              toA: gS,
              fromB: tS,
              toB: bS
            }))), gS = bS.v.applyChanges(gS, HS), tS = bS.w.empty, XS = 0, xS = {
              from: SS.mapPos(xS.from, -1),
              to: SS.mapPos(xS.to, 1)
            }, this.skipped.length) {
            NS = [];
            for (let HS of this.skipped) {
              let gS = SS.mapPos(HS.from, 1),
                tS = SS.mapPos(HS.to, -1);
              gS < tS && NS.push({
                from: gS,
                to: tS
              })
            }
          }
        }
        return new QS(this.parser, HS, gS, tS, XS, xS, NS, this.scheduleOn)
      }
      updateViewport(SS) {
        if (this.viewport.from == SS.from && this.viewport.to == SS.to) return !1;
        this.viewport = SS;
        let HS = this.skipped.length;
        for (let gS = 0; gS < this.skipped.length; gS++) {
          let {
            from: HS,
            to: tS
          } = this.skipped[gS];
          HS < SS.to && tS > SS.from && (this.fragments = DS(this.fragments, HS, tS), this.skipped.splice(gS--, 1))
        }
        return !(this.skipped.length >= HS) && (this.reset(), !0)
      }
      reset() {
        this.parse && (this.takeTree(), this.parse = null)
      }
      skipUntilInView(SS, HS) {
        this.skipped.push({
          from: SS,
          to: HS
        })
      }
      static getSkippingParser(SS) {
        return new class extends bS.t {
          createParse(HS, gS, tS) {
            let XS = tS[0].from,
              xS = tS[tS.length - 1].to;
            return {
              parsedPos: XS,
              advance() {
                let HS = PS;
                if (HS) {
                  for (let SS of tS) HS.tempSkipped.push(SS);
                  SS && (HS.scheduleOn = HS.scheduleOn ? Promise.all([HS.scheduleOn, SS]) : SS)
                }
                return this.parsedPos = xS, new bS.w(bS.p.none, [], [], xS - XS)
              },
              stoppedAt: null,
              stopAt() {}
            }
          }
        }
      }
      isDone(SS) {
        SS = Math.min(SS, this.state.doc.length);
        let HS = this.fragments;
        return this.treeLen >= SS && HS.length && 0 == HS[0].from && HS[0].to >= SS
      }
      static get() {
        return PS
      }
    }

    function DS(SS, HS, gS) {
      return bS.v.applyChanges(SS, [{
        fromA: HS,
        toA: gS,
        fromB: HS,
        toB: gS
      }])
    }
    class wS {
      constructor(SS) {
        this.context = SS, this.tree = SS.tree
      }
      apply(SS) {
        if (!SS.docChanged && this.tree == this.context.tree) return this;
        let HS = this.context.changes(SS.changes, SS.state),
          gS = this.context.treeLen == SS.startState.doc.length ? void 0 : Math.max(SS.changes.mapPos(this.context.treeLen), HS.viewport.to);
        return HS.work(20, gS) || HS.takeTree(), new wS(HS)
      }
      static init(SS) {
        let HS = Math.min(3e3, SS.doc.length),
          gS = QS.create(SS.facet(OS).parser, SS, {
            from: 0,
            to: HS
          });
        return gS.work(20, HS) || gS.takeTree(), new wS(gS)
      }
    }
    kS.state = XS.H.define({
      create: wS.init,
      update(SS, HS) {
        for (let gS of HS.effects)
          if (gS.is(kS.setState)) return gS.value;
        return HS.startState.facet(OS) != HS.state.facet(OS) ? wS.init(HS.state) : SS.apply(HS)
      }
    });
    let hS = SS => {
      let HS = setTimeout((() => SS()), 500);
      return () => clearTimeout(HS)
    };
    "undefined" != typeof requestIdleCallback && (hS = SS => {
      let HS = -1,
        gS = setTimeout((() => {
          HS = requestIdleCallback(SS, {
            timeout: 400
          })
        }), 100);
      return () => HS < 0 ? clearTimeout(gS) : cancelIdleCallback(HS)
    });
    const ZS = "undefined" != typeof navigator && (null === (tS = navigator.scheduling) || void 0 === tS ? void 0 : tS.isInputPending) ? () => navigator.scheduling.isInputPending() : null,
      JS = xS.i.fromClass(class {
        constructor(SS) {
          this.view = SS, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork()
        }
        update(SS) {
          let HS = this.view.state.field(kS.state).context;
          (HS.updateViewport(SS.view.viewport) || this.view.viewport.to > HS.treeLen) && this.scheduleWork(), (SS.docChanged || SS.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(HS)
        }
        scheduleWork() {
          if (this.working) return;
          let {
            state: SS
          } = this.view, HS = SS.field(kS.state);
          HS.tree == HS.context.tree && HS.context.isDone(SS.doc.length) || (this.working = hS(this.work))
        }
        work(SS) {
          this.working = null;
          let HS = Date.now();
          if (this.chunkEnd < HS && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = HS + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
          let {
            state: gS,
            viewport: {
              to: tS
            }
          } = this.view, bS = gS.field(kS.state);
          if (bS.tree == bS.context.tree && bS.context.isDone(tS + 1e5)) return;
          let XS = Date.now() + Math.min(this.chunkBudget, 100, SS && !ZS ? Math.max(25, SS.timeRemaining() - 5) : 1e9),
            xS = bS.context.treeLen < tS && gS.doc.length > tS + 1e3,
            NS = bS.context.work((() => ZS && ZS() || Date.now() > XS), tS + (xS ? 0 : 1e5));
          this.chunkBudget -= Date.now() - HS, (NS || this.chunkBudget <= 0) && (bS.context.takeTree(), this.view.dispatch({
            effects: kS.setState.of(new wS(bS.context))
          })), this.chunkBudget > 0 && (!NS || xS) && this.scheduleWork(), this.checkAsyncSchedule(bS.context)
        }
        checkAsyncSchedule(SS) {
          SS.scheduleOn && (this.workScheduled++, SS.scheduleOn.then((() => this.scheduleWork())).catch((SS => (0, xS.T)(this.view.state, SS))).then((() => this.workScheduled--)), SS.scheduleOn = null)
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
      OS = XS.n.define({
        combine: SS => SS.length ? SS[0] : null,
        enables: SS => [kS.state, JS, xS.e.contentAttributes.compute([SS], (HS => {
          let gS = HS.facet(SS);
          return gS && gS.name ? {
            "data-language": gS.name
          } : {}
        }))]
      });
    class dS {
      constructor(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        this.language = SS, this.support = HS, this.extension = [SS, HS]
      }
    }
    const cS = XS.n.define(),
      vS = XS.n.define({
        combine: SS => {
          if (!SS.length) return "  ";
          let HS = SS[0];
          if (!HS || /\S/.test(HS) || Array.from(HS).some((SS => SS != HS[0]))) throw new Error("Invalid indent unit: " + JSON.stringify(SS[0]));
          return HS
        }
      });

    function ES(SS) {
      let HS = SS.facet(vS);
      return 9 == HS.charCodeAt(0) ? SS.tabSize * HS.length : HS.length
    }

    function LS(SS, HS) {
      let gS = "",
        tS = SS.tabSize,
        bS = SS.facet(vS)[0];
      if ("\t" == bS) {
        for (; HS >= tS;) gS += "\t", HS -= tS;
        bS = " "
      }
      for (let XS = 0; XS < HS; XS++) gS += bS;
      return gS
    }

    function YS(SS, HS) {
      SS instanceof XS.m && (SS = new AS(SS));
      for (let tS of SS.state.facet(cS)) {
        let gS = tS(SS, HS);
        if (void 0 !== gS) return gS
      }
      let gS = jS(SS.state);
      return gS.length >= HS ? function(SS, HS, gS) {
        let tS = HS.resolveStack(gS),
          bS = HS.resolveInner(gS, -1).resolve(gS, 0).enterUnfinishedNodesBefore(gS);
        if (bS != tS.node) {
          let SS = [];
          for (let HS = bS; HS && !(HS.from < tS.node.from || HS.to > tS.node.to || HS.from == tS.node.from && HS.type == tS.node.type); HS = HS.parent) SS.push(HS);
          for (let HS = SS.length - 1; HS >= 0; HS--) tS = {
            node: SS[HS],
            next: tS
          }
        }
        return VS(tS, SS, gS)
      }(SS, gS, HS) : null
    }
    class AS {
      constructor(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.state = SS, this.options = HS, this.unit = ES(SS)
      }
      lineAt(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          gS = this.state.doc.lineAt(SS),
          {
            simulateBreak: tS,
            simulateDoubleBreak: bS
          } = this.options;
        return null != tS && tS >= gS.from && tS <= gS.to ? bS && tS == SS ? {
          text: "",
          from: SS
        } : (HS < 0 ? tS < SS : tS <= SS) ? {
          text: gS.text.slice(tS - gS.from),
          from: tS
        } : {
          text: gS.text.slice(0, tS - gS.from),
          from: gS.from
        } : gS
      }
      textAfterPos(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (this.options.simulateDoubleBreak && SS == this.options.simulateBreak) return "";
        let {
          text: gS,
          from: tS
        } = this.lineAt(SS, HS);
        return gS.slice(SS - tS, Math.min(gS.length, SS + 100 - tS))
      }
      column(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: gS,
            from: tS
          } = this.lineAt(SS, HS),
          bS = this.countColumn(gS, SS - tS),
          XS = this.options.overrideIndentation ? this.options.overrideIndentation(tS) : -1;
        return XS > -1 && (bS += XS - this.countColumn(gS, gS.search(/\S|$/))), bS
      }
      countColumn(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SS.length;
        return (0, XS.Z)(SS, this.state.tabSize, HS)
      }
      lineIndent(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: gS,
            from: tS
          } = this.lineAt(SS, HS),
          bS = this.options.overrideIndentation;
        if (bS) {
          let SS = bS(tS);
          if (SS > -1) return SS
        }
        return this.countColumn(gS, gS.search(/\S|$/))
      }
      get simulatedBreak() {
        return this.options.simulateBreak || null
      }
    }
    const yS = new bS.i;

    function VS(SS, HS, gS) {
      for (let tS = SS; tS; tS = tS.next) {
        let SS = iS(tS.node);
        if (SS) return SS(zS.create(HS, gS, tS))
      }
      return 0
    }

    function iS(SS) {
      let HS = SS.type.prop(yS);
      if (HS) return HS;
      let gS, tS = SS.firstChild;
      if (tS && (gS = tS.type.prop(bS.i.closedBy))) {
        let HS = SS.lastChild,
          tS = HS && gS.indexOf(HS.name) > -1;
        return SS => sS(SS, !0, 1, void 0, tS && ! function(SS) {
          return SS.pos == SS.options.simulateBreak && SS.options.simulateDoubleBreak
        }(SS) ? HS.from : void 0)
      }
      return null == SS.parent ? WS : null
    }

    function WS() {
      return 0
    }
    class zS extends AS {
      constructor(SS, HS, gS) {
        super(SS.state, SS.options), this.base = SS, this.pos = HS, this.context = gS
      }
      get node() {
        return this.context.node
      }
      static create(SS, HS, gS) {
        return new zS(SS, HS, gS)
      }
      get textAfter() {
        return this.textAfterPos(this.pos)
      }
      get baseIndent() {
        return this.baseIndentFor(this.node)
      }
      baseIndentFor(SS) {
        let HS = this.state.doc.lineAt(SS.from);
        for (;;) {
          let gS = SS.resolve(HS.from);
          for (; gS.parent && gS.parent.from == gS.from;) gS = gS.parent;
          if (US(gS, SS)) break;
          HS = this.state.doc.lineAt(gS.from)
        }
        return this.lineIndent(HS.from)
      }
      continue () {
        return VS(this.context.next, this.base, this.pos)
      }
    }

    function US(SS, HS) {
      for (let gS = HS; gS; gS = gS.parent)
        if (SS == gS) return !0;
      return !1
    }

    function pS(SS) {
      let {
        closing: HS,
        align: gS = !0,
        units: tS = 1
      } = SS;
      return SS => sS(SS, gS, tS, HS)
    }

    function sS(SS, HS, gS, tS, bS) {
      let XS = SS.textAfter,
        xS = XS.match(/^\s*/)[0].length,
        NS = tS && XS.slice(xS, xS + tS.length) == tS || bS == SS.pos + xS,
        qS = HS ? function(SS) {
          let HS = SS.node,
            gS = HS.childAfter(HS.from),
            tS = HS.lastChild;
          if (!gS) return null;
          let bS = SS.options.simulateBreak,
            XS = SS.state.doc.lineAt(gS.from),
            xS = null == bS || bS <= XS.from ? XS.to : Math.min(XS.to, bS);
          for (let NS = gS.to;;) {
            let SS = HS.childAfter(NS);
            if (!SS || SS == tS) return null;
            if (!SS.type.isSkipped) {
              if (SS.from >= xS) return null;
              let HS = /^ */.exec(XS.text.slice(gS.to - XS.from))[0].length;
              return {
                from: gS.from,
                to: gS.to + HS
              }
            }
            NS = SS.to
          }
        }(SS) : null;
      return qS ? NS ? SS.column(qS.from) : SS.column(qS.to) : SS.baseIndent + (NS ? 0 : SS.unit * gS)
    }
    const BS = SS => SS.baseIndent;

    function MS() {
      let {
        except: SS,
        units: HS = 1
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return gS => {
        let tS = SS && SS.test(gS.textAfter);
        return gS.baseIndent + (tS ? 0 : HS * gS.unit)
      }
    }
    const FS = 200;

    function RS() {
      return XS.m.transactionFilter.of((SS => {
        if (!SS.docChanged || !SS.isUserEvent("input.type") && !SS.isUserEvent("input.complete")) return SS;
        let HS = SS.startState.languageDataAt("indentOnInput", SS.startState.selection.main.head);
        if (!HS.length) return SS;
        let gS = SS.newDoc,
          {
            head: tS
          } = SS.newSelection.main,
          bS = gS.lineAt(tS);
        if (tS > bS.from + FS) return SS;
        let XS = gS.sliceString(bS.from, tS);
        if (!HS.some((SS => SS.test(XS)))) return SS;
        let {
          state: xS
        } = SS, NS = -1, qS = [];
        for (let {
            head: uS
          }
          of xS.selection.HG) {
          let SS = xS.doc.lineAt(uS);
          if (SS.from == NS) continue;
          NS = SS.from;
          let HS = YS(xS, SS.from);
          if (null == HS) continue;
          let gS = /^\s*/.exec(SS.text)[0],
            tS = LS(xS, HS);
          gS != tS && qS.push({
            from: SS.from,
            to: SS.from + gS.length,
            insert: tS
          })
        }
        return qS.length ? [SS, {
          changes: qS,
          sequential: !0
        }] : SS
      }))
    }
    const TS = XS.n.define(),
      oS = new bS.i;

    function lS(SS) {
      let HS = SS.firstChild,
        gS = SS.lastChild;
      return HS && HS.to < gS.from ? {
        from: HS.to,
        to: gS.type.isError ? SS.to : gS.from
      } : null
    }

    function mS(SS) {
      let HS = SS.lastChild;
      return HS && HS.to == SS.to && HS.type.isError
    }

    function eS(SS, HS, gS) {
      for (let tS of SS.facet(TS)) {
        let bS = tS(SS, HS, gS);
        if (bS) return bS
      }
      return function(SS, HS, gS) {
        let tS = jS(SS);
        if (tS.length < gS) return null;
        let bS = null;
        for (let XS = tS.resolveStack(gS, 1); XS; XS = XS.next) {
          let xS = XS.node;
          if (xS.to <= gS || xS.from > gS) continue;
          if (bS && xS.from < HS) break;
          let NS = xS.type.prop(oS);
          if (NS && (xS.to < tS.length - 50 || tS.length == SS.doc.length || !mS(xS))) {
            let tS = NS(xS, SS);
            tS && tS.from <= gS && tS.from >= HS && tS.to > gS && (bS = tS)
          }
        }
        return bS
      }(SS, HS, gS)
    }

    function rS(SS, HS) {
      let gS = HS.mapPos(SS.from, 1),
        tS = HS.mapPos(SS.to, -1);
      return gS >= tS ? void 0 : {
        from: gS,
        to: tS
      }
    }
    const SH = XS.G.define({
        map: rS
      }),
      HH = XS.G.define({
        map: rS
      });

    function gH(SS) {
      let HS = [];
      for (let {
          head: gS
        }
        of SS.state.selection.HG) HS.some((SS => SS.from <= gS && SS.to >= gS)) || HS.push(SS.lineBlockAt(gS));
      return HS
    }
    const tH = XS.H.define({
      create: () => xS.b.none,
      update(SS, HS) {
        HS.isUserEvent("delete") && HS.changes.iterChangedRanges(((HS, gS) => SS = bH(SS, HS, gS))), SS = SS.map(HS.changes);
        for (let gS of HS.effects)
          if (gS.is(SH) && !xH(SS, gS.value.from, gS.value.to)) {
            let {
              preparePlaceholder: tS
            } = HS.state.facet(fH), bS = tS ? xS.b.replace({
              widget: new jH(tS(HS.state, gS.value))
            }) : KH;
            SS = SS.update({
              add: [bS.range(gS.value.from, gS.value.to)]
            })
          } else gS.is(HH) && (SS = SS.update({
            filter: (SS, HS) => gS.value.from != SS || gS.value.to != HS,
            filterFrom: gS.value.from,
            filterTo: gS.value.to
          }));
        return HS.selection && (SS = bH(SS, HS.selection.main.head)), SS
      },
      provide: SS => xS.e.KS.from(SS),
      toJSON(SS, HS) {
        let gS = [];
        return SS.between(0, HS.doc.length, ((SS, HS) => {
          gS.push(SS, HS)
        })), gS
      },
      fromJSON(SS) {
        if (!Array.isArray(SS) || SS.length % 2) throw new RangeError("Invalid JSON for fold state");
        let HS = [];
        for (let gS = 0; gS < SS.length;) {
          let tS = SS[gS++],
            bS = SS[gS++];
          if ("number" != typeof tS || "number" != typeof bS) throw new RangeError("Invalid JSON for fold state");
          HS.push(KH.range(tS, bS))
        }
        return xS.b.set(HS, !0)
      }
    });

    function bH(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : HS,
        tS = !1;
      return SS.between(HS, gS, ((SS, bS) => {
        SS < gS && bS > HS && (tS = !0)
      })), tS ? SS.update({
        filterFrom: HS,
        filterTo: gS,
        filter: (SS, tS) => SS >= gS || tS <= HS
      }) : SS
    }

    function XH(SS, HS, gS) {
      var tS;
      let bS = null;
      return null === (tS = SS.field(tH, !1)) || void 0 === tS || tS.between(HS, gS, ((SS, HS) => {
        (!bS || bS.from > SS) && (bS = {
          from: SS,
          to: HS
        })
      })), bS
    }

    function xH(SS, HS, gS) {
      let tS = !1;
      return SS.between(HS, HS, ((SS, bS) => {
        SS == HS && bS == gS && (tS = !0)
      })), tS
    }

    function NH(SS, HS) {
      return SS.field(tH, !1) ? HS : HS.concat(XS.G.appendConfig.of(kH()))
    }

    function qH(SS, HS) {
      let gS = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        tS = SS.state.doc.lineAt(HS.from).number,
        bS = SS.state.doc.lineAt(HS.to).number;
      return xS.e.announce.of(`${SS.state.phrase(gS?"Folded lines":"Unfolded lines")} ${tS} ${SS.state.phrase("to")} ${bS}.`)
    }
    const uH = [{
        key: "Ctrl-Shift-[",
        mac: "Cmd-Alt-[",
        run: SS => {
          for (let HS of gH(SS)) {
            let gS = eS(SS.state, HS.from, HS.to);
            if (gS) return SS.dispatch({
              effects: NH(SS.state, [SH.of(gS), qH(SS, gS)])
            }), !0
          }
          return !1
        }
      }, {
        key: "Ctrl-Shift-]",
        mac: "Cmd-Alt-]",
        run: SS => {
          if (!SS.state.field(tH, !1)) return !1;
          let HS = [];
          for (let gS of gH(SS)) {
            let tS = XH(SS.state, gS.from, gS.to);
            tS && HS.push(HH.of(tS), qH(SS, tS, !1))
          }
          return HS.length && SS.dispatch({
            effects: HS
          }), HS.length > 0
        }
      }, {
        key: "Ctrl-Alt-[",
        run: SS => {
          let {
            state: HS
          } = SS, gS = [];
          for (let tS = 0; tS < HS.doc.length;) {
            let bS = SS.lineBlockAt(tS),
              XS = eS(HS, bS.from, bS.to);
            XS && gS.push(SH.of(XS)), tS = (XS ? SS.lineBlockAt(XS.to) : bS).to + 1
          }
          return gS.length && SS.dispatch({
            effects: NH(SS.state, gS)
          }), !!gS.length
        }
      }, {
        key: "Ctrl-Alt-]",
        run: SS => {
          let HS = SS.state.field(tH, !1);
          if (!HS || !HS.size) return !1;
          let gS = [];
          return HS.between(0, SS.state.doc.length, ((SS, HS) => {
            gS.push(HH.of({
              from: SS,
              to: HS
            }))
          })), SS.dispatch({
            effects: gS
          }), !0
        }
      }],
      IH = {
        placeholderDOM: null,
        preparePlaceholder: null,
        placeholderText: "\u2026"
      },
      fH = XS.n.define({
        combine: SS => (0, XS.W)(SS, IH)
      });

    function kH(SS) {
      let HS = [tH, PH];
      return SS && HS.push(fH.of(SS)), HS
    }

    function aH(SS, HS) {
      let {
        state: gS
      } = SS, tS = gS.facet(fH), bS = HS => {
        let gS = SS.lineBlockAt(SS.posAtDOM(HS.target)),
          tS = XH(SS.state, gS.from, gS.to);
        tS && SS.dispatch({
          effects: HH.of(tS)
        }), HS.preventDefault()
      };
      if (tS.placeholderDOM) return tS.placeholderDOM(SS, bS, HS);
      let XS = document.createElement("span");
      return XS.textContent = tS.placeholderText, XS.setAttribute("aria-label", gS.phrase("folded code")), XS.title = gS.phrase("unfold"), XS.className = "cm-foldPlaceholder", XS.onclick = bS, XS
    }
    const KH = xS.b.replace({
      widget: new class extends xS.j {
        toDOM(SS) {
          return aH(SS, null)
        }
      }
    });
    class jH extends xS.j {
      constructor(SS) {
        super(), this.value = SS
      }
      eq(SS) {
        return this.value == SS.value
      }
      toDOM(SS) {
        return aH(SS, this.value)
      }
    }
    const GH = {
      openText: "\u2304",
      closedText: "\u203a",
      markerDOM: null,
      domEventHandlers: {},
      foldingChanged: () => !1
    };
    class CH extends xS.h {
      constructor(SS, HS) {
        super(), this.config = SS, this.open = HS
      }
      eq(SS) {
        return this.config == SS.config && this.open == SS.open
      }
      toDOM(SS) {
        if (this.config.markerDOM) return this.config.markerDOM(this.open);
        let HS = document.createElement("span");
        return HS.textContent = this.open ? this.config.openText : this.config.closedText, HS.title = SS.state.phrase(this.open ? "Fold line" : "Unfold line"), HS
      }
    }

    function nH() {
      let SS = {
          ...GH,
          ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        },
        HS = new CH(SS, !0),
        gS = new CH(SS, !1),
        tS = xS.i.fromClass(class {
          constructor(SS) {
            this.from = SS.viewport.from, this.markers = this.buildMarkers(SS)
          }
          update(HS) {
            (HS.docChanged || HS.viewportChanged || HS.startState.facet(OS) != HS.state.facet(OS) || HS.startState.field(tH, !1) != HS.state.field(tH, !1) || jS(HS.startState) != jS(HS.state) || SS.foldingChanged(HS)) && (this.markers = this.buildMarkers(HS.view))
          }
          buildMarkers(SS) {
            let tS = new XS.w;
            for (let bS of SS.viewportLineBlocks) {
              let XS = XH(SS.state, bS.from, bS.to) ? gS : eS(SS.state, bS.from, bS.to) ? HS : null;
              XS && tS.add(bS.from, bS.from, XS)
            }
            return tS.finish()
          }
        }),
        {
          domEventHandlers: bS
        } = SS;
      return [tS, (0, xS.B)({
        class: "cm-foldGutter",
        markers(SS) {
          var HS;
          return (null === (HS = SS.plugin(tS)) || void 0 === HS ? void 0 : HS.markers) || XS.A.empty
        },
        initialSpacer: () => new CH(SS, !1),
        domEventHandlers: {
          ...bS,
          click: (SS, HS, gS) => {
            if (bS.click && bS.click(SS, HS, gS)) return !0;
            let tS = XH(SS.state, HS.from, HS.to);
            if (tS) return SS.dispatch({
              effects: HH.of(tS)
            }), !0;
            let XS = eS(SS.state, HS.from, HS.to);
            return !!XS && (SS.dispatch({
              effects: SH.of(XS)
            }), !0)
          }
        }
      }), kH()]
    }
    const PH = xS.e.baseTheme({
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
    class QH {
      constructor(SS, HS) {
        let gS;

        function tS(SS) {
          let HS = qS.c.newName();
          return (gS || (gS = Object.create(null)))["." + HS] = SS, HS
        }
        this.specs = SS;
        const bS = "string" == typeof HS.all ? HS.all : HS.all ? tS(HS.all) : void 0,
          XS = HS.scope;
        this.scope = XS instanceof kS ? SS => SS.prop(uS) == XS.data : XS ? SS => SS == XS : void 0, this.style = (0, NS.i)(SS.map((SS => ({
          tag: SS.tag,
          class: SS.class || tS(Object.assign({}, SS, {
            tag: null
          }))
        }))), {
          all: bS
        }).style, this.module = gS ? new qS.c(gS) : null, this.themeType = HS.themeType
      }
      static define(SS, HS) {
        return new QH(SS, HS || {})
      }
    }
    const DH = XS.n.define(),
      wH = XS.n.define({
        combine: SS => SS.length ? [SS[0]] : null
      });

    function hH(SS) {
      let HS = SS.facet(DH);
      return HS.length ? HS : SS.facet(wH)
    }

    function ZH(SS, HS) {
      let gS, tS = [OH];
      return SS instanceof QH && (SS.module && tS.push(xS.e.styleModule.of(SS.module)), gS = SS.themeType), (null === HS || void 0 === HS ? void 0 : HS.fallback) ? tS.push(wH.of(SS)) : gS ? tS.push(DH.computeN([xS.e.darkTheme], (HS => HS.facet(xS.e.darkTheme) == ("dark" == gS) ? [SS] : []))) : tS.push(DH.of(SS)), tS
    }
    class JH {
      constructor(SS) {
        this.markCache = Object.create(null), this.tree = jS(SS.state), this.KS = this.buildDeco(SS, hH(SS.state)), this.decoratedTo = SS.viewport.to
      }
      update(SS) {
        let HS = jS(SS.state),
          gS = hH(SS.state),
          tS = gS != hH(SS.startState),
          {
            viewport: bS
          } = SS.view,
          XS = SS.changes.mapPos(this.decoratedTo, 1);
        HS.length < bS.to && !tS && HS.type == this.tree.type && XS >= bS.to ? (this.KS = this.KS.map(SS.changes), this.decoratedTo = XS) : (HS != this.tree || SS.viewportChanged || tS) && (this.tree = HS, this.KS = this.buildDeco(SS.view, gS), this.decoratedTo = bS.to)
      }
      buildDeco(SS, HS) {
        if (!HS || !this.tree.length) return xS.b.none;
        let gS = new XS.w;
        for (let {
            from: tS,
            to: bS
          }
          of SS.J9)(0, NS.d)(this.tree, HS, ((SS, HS, tS) => {
          gS.add(SS, HS, this.markCache[tS] || (this.markCache[tS] = xS.b.mark({
            class: tS
          })))
        }), tS, bS);
        return gS.finish()
      }
    }
    const OH = XS.s.high(xS.i.fromClass(JH, {
        KS: SS => SS.KS
      })),
      dH = QH.define([{
        tag: NS.j.meta,
        color: "#404740"
      }, {
        tag: NS.j.link,
        textDecoration: "underline"
      }, {
        tag: NS.j.heading,
        textDecoration: "underline",
        fontWeight: "bold"
      }, {
        tag: NS.j.emphasis,
        fontStyle: "italic"
      }, {
        tag: NS.j.strong,
        fontWeight: "bold"
      }, {
        tag: NS.j.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: NS.j.keyword,
        color: "#708"
      }, {
        tag: [NS.j.atom, NS.j.bool, NS.j.url, NS.j.contentSeparator, NS.j.labelName],
        color: "#219"
      }, {
        tag: [NS.j.literal, NS.j.inserted],
        color: "#164"
      }, {
        tag: [NS.j.string, NS.j.deleted],
        color: "#a11"
      }, {
        tag: [NS.j.regexp, NS.j.escape, NS.j.special(NS.j.string)],
        color: "#e40"
      }, {
        tag: NS.j.definition(NS.j.variableName),
        color: "#00f"
      }, {
        tag: NS.j.local(NS.j.variableName),
        color: "#30a"
      }, {
        tag: [NS.j.typeName, NS.j.namespace],
        color: "#085"
      }, {
        tag: NS.j.className,
        color: "#167"
      }, {
        tag: [NS.j.special(NS.j.variableName), NS.j.macroName],
        color: "#256"
      }, {
        tag: NS.j.definition(NS.j.propertyName),
        color: "#00c"
      }, {
        tag: NS.j.comment,
        color: "#940"
      }, {
        tag: NS.j.invalid,
        color: "#f00"
      }]),
      cH = xS.e.baseTheme({
        "&.cm-focused .cm-matchingBracket": {
          backgroundColor: "#328c8252"
        },
        "&.cm-focused .cm-nonmatchingBracket": {
          backgroundColor: "#bb555544"
        }
      }),
      vH = 1e4,
      EH = "()[]{}",
      LH = XS.n.define({
        combine: SS => (0, XS.W)(SS, {
          afterCursor: !0,
          brackets: EH,
          maxScanDistance: vH,
          renderMatch: yH
        })
      }),
      YH = xS.b.mark({
        class: "cm-matchingBracket"
      }),
      AH = xS.b.mark({
        class: "cm-nonmatchingBracket"
      });

    function yH(SS) {
      let HS = [],
        gS = SS.matched ? YH : AH;
      return HS.push(gS.range(SS.start.from, SS.start.to)), SS.end && HS.push(gS.range(SS.end.from, SS.end.to)), HS
    }

    function VH(SS) {
      let HS = [],
        gS = SS.facet(LH);
      for (let tS of SS.selection.HG) {
        if (!tS.empty) continue;
        let bS = sH(SS, tS.head, -1, gS) || tS.head > 0 && sH(SS, tS.head - 1, 1, gS) || gS.afterCursor && (sH(SS, tS.head, 1, gS) || tS.head < SS.doc.length && sH(SS, tS.head + 1, -1, gS));
        bS && (HS = HS.concat(gS.renderMatch(bS, SS)))
      }
      return xS.b.set(HS, !0)
    }
    const iH = [xS.i.fromClass(class {
      constructor(SS) {
        this.paused = !1, this.KS = VH(SS.state)
      }
      update(SS) {
        (SS.docChanged || SS.selectionSet || this.paused) && (SS.view.composing ? (this.KS = this.KS.map(SS.changes), this.paused = !0) : (this.KS = VH(SS.state), this.paused = !1))
      }
    }, {
      KS: SS => SS.KS
    }), cH];

    function WH() {
      let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [LH.of(SS), iH]
    }
    const zH = new bS.i;

    function UH(SS, HS, gS) {
      let tS = SS.prop(HS < 0 ? bS.i.openedBy : bS.i.closedBy);
      if (tS) return tS;
      if (1 == SS.name.length) {
        let tS = gS.indexOf(SS.name);
        if (tS > -1 && tS % 2 == (HS < 0 ? 1 : 0)) return [gS[tS + HS]]
      }
      return null
    }

    function pH(SS) {
      let HS = SS.type.prop(zH);
      return HS ? HS(SS.node) : SS
    }

    function sH(SS, HS, gS) {
      let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        bS = tS.maxScanDistance || vH,
        XS = tS.brackets || EH,
        xS = jS(SS),
        NS = xS.resolveInner(HS, gS);
      for (let qS = NS; qS; qS = qS.parent) {
        let tS = UH(qS.type, gS, XS);
        if (tS && qS.from < qS.to) {
          let bS = pH(qS);
          if (bS && (gS > 0 ? HS >= bS.from && HS < bS.to : HS > bS.from && HS <= bS.to)) return BH(SS, HS, gS, qS, bS, tS, XS)
        }
      }
      return function(SS, HS, gS, tS, bS, XS, xS) {
        if (gS < 0 ? !HS : HS == SS.doc.length) return null;
        let NS = gS < 0 ? SS.sliceDoc(HS - 1, HS) : SS.sliceDoc(HS, HS + 1),
          qS = xS.indexOf(NS);
        if (qS < 0 || qS % 2 == 0 != gS > 0) return null;
        let uS = {
            from: gS < 0 ? HS - 1 : HS,
            to: gS > 0 ? HS + 1 : HS
          },
          IS = SS.doc.iterRange(HS, gS > 0 ? SS.doc.length : 0),
          fS = 0;
        for (let kS = 0; !IS.next().done && kS <= XS;) {
          let SS = IS.value;
          gS < 0 && (kS += SS.length);
          let XS = HS + kS * gS;
          for (let HS = gS > 0 ? 0 : SS.length - 1, NS = gS > 0 ? SS.length : -1; HS != NS; HS += gS) {
            let NS = xS.indexOf(SS[HS]);
            if (!(NS < 0 || tS.resolveInner(XS + HS, 1).type != bS))
              if (NS % 2 == 0 == gS > 0) fS++;
              else {
                if (1 == fS) return {
                  start: uS,
                  end: {
                    from: XS + HS,
                    to: XS + HS + 1
                  },
                  matched: NS >> 1 == qS >> 1
                };
                fS--
              }
          }
          gS > 0 && (kS += SS.length)
        }
        return IS.done ? {
          start: uS,
          matched: !1
        } : null
      }(SS, HS, gS, xS, NS.type, bS, XS)
    }

    function BH(SS, HS, gS, tS, bS, XS, xS) {
      let NS = tS.parent,
        qS = {
          from: bS.from,
          to: bS.to
        },
        uS = 0,
        IS = null === NS || void 0 === NS ? void 0 : NS.cursor();
      if (IS && (gS < 0 ? IS.childBefore(tS.from) : IS.childAfter(tS.to)))
        do {
          if (gS < 0 ? IS.to <= tS.from : IS.from >= tS.to) {
            if (0 == uS && XS.indexOf(IS.type.name) > -1 && IS.from < IS.to) {
              let SS = pH(IS);
              return {
                start: qS,
                end: SS ? {
                  from: SS.from,
                  to: SS.to
                } : void 0,
                matched: !0
              }
            }
            if (UH(IS.type, gS, xS)) uS++;
            else if (UH(IS.type, -gS, xS)) {
              if (0 == uS) {
                let SS = pH(IS);
                return {
                  start: qS,
                  end: SS && SS.from < SS.to ? {
                    from: SS.from,
                    to: SS.to
                  } : void 0,
                  matched: !1
                }
              }
              uS--
            }
          }
        } while (gS < 0 ? IS.prevSibling() : IS.nextSibling());
      return {
        start: qS,
        matched: !1
      }
    }
    const MH = Object.create(null),
      FH = [bS.p.none],
      RH = [],
      TH = Object.create(null),
      oH = Object.create(null);
    for (let [eH, rH] of [
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
      ]) oH[eH] = mH(MH, rH);

    function lH(SS, HS) {
      RH.indexOf(SS) > -1 || (RH.push(SS), console.warn(HS))
    }

    function mH(SS, HS) {
      let gS = [];
      for (let bS of HS.split(" ")) {
        let HS = [];
        for (let gS of bS.split(".")) {
          let tS = SS[gS] || NS.j[gS];
          tS ? "function" == typeof tS ? HS.length ? HS = HS.map(tS) : lH(gS, `Modifier ${gS} used at start of tag`) : HS.length ? lH(gS, `Tag ${gS} used as modifier`) : HS = Array.isArray(tS) ? tS : [tS] : lH(gS, `Unknown highlighting tag ${gS}`)
        }
        for (let SS of HS) gS.push(SS)
      }
      if (!gS.length) return 0;
      let tS = HS.replace(/ /g, "_"),
        XS = tS + " " + gS.map((SS => SS.id)),
        xS = TH[XS];
      if (xS) return xS.id;
      let qS = TH[XS] = bS.p.define({
        id: FH.length,
        name: tS,
        props: [(0, NS.f)({
          [tS]: gS
        })]
      });
      return FH.push(qS), qS.id
    }
    xS.d.RTL, xS.d.LTR
  },
  41366: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => PS,
      h: () => hS
    });
    var tS = gS(41322),
      bS = gS(41315),
      XS = gS(41328);
    class xS {
      constructor(SS, HS, gS) {
        this.from = SS, this.to = HS, this.diagnostic = gS
      }
    }
    class NS {
      constructor(SS, HS, gS) {
        this.diagnostics = SS, this.panel = HS, this.selected = gS
      }
      static init(SS, HS, gS) {
        let XS = gS.facet(DS).markerFilter;
        XS && (SS = XS(SS, gS));
        let xS = SS.slice().sort(((SS, HS) => SS.from - HS.from || SS.to - HS.to)),
          uS = new bS.w,
          IS = [],
          fS = 0,
          kS = gS.doc.iter(),
          aS = 0,
          KS = gS.doc.length;
        for (let bS = 0;;) {
          let SS, HS, gS = bS == xS.length ? null : xS[bS];
          if (!gS && !IS.length) break;
          if (IS.length) SS = fS, HS = IS.reduce(((SS, HS) => Math.min(SS, HS.to)), gS && gS.from > SS ? gS.from : 1e8);
          else {
            if (SS = gS.from, SS > KS) break;
            HS = gS.to, IS.push(gS), bS++
          }
          for (; bS < xS.length;) {
            let gS = xS[bS];
            if (gS.from != SS || !(gS.to > gS.from || gS.to == SS)) {
              HS = Math.min(gS.from, HS);
              break
            }
            IS.push(gS), bS++, HS = Math.min(gS.to, HS)
          }
          HS = Math.min(HS, KS);
          let XS = !1;
          if (IS.some((gS => gS.from == SS && (gS.to == HS || HS == KS))) && (XS = SS == HS, !XS && HS - SS < 10)) {
            let gS = SS - (aS + kS.value.length);
            gS > 0 && (kS.next(gS), aS = SS);
            for (let tS = SS;;) {
              if (tS >= HS) {
                XS = !0;
                break
              }
              if (!kS.lineBreak && aS + kS.value.length > tS) break;
              tS = aS + kS.value.length, aS += kS.value.length, kS.next()
            }
          }
          let NS = AS(IS);
          if (XS) uS.add(SS, SS, tS.b.widget({
            widget: new OS(NS),
            diagnostics: IS.slice()
          }));
          else {
            let gS = IS.reduce(((SS, HS) => HS.markClass ? SS + " " + HS.markClass : SS), "");
            uS.add(SS, HS, tS.b.mark({
              class: "cm-lintRange cm-lintRange-" + NS + gS,
              diagnostics: IS.slice(),
              inclusiveEnd: IS.some((SS => SS.to > HS))
            }))
          }
          if (fS = HS, fS == KS) break;
          for (let tS = 0; tS < IS.length; tS++) IS[tS].to <= fS && IS.splice(tS--, 1)
        }
        let jS = uS.finish();
        return new NS(jS, HS, qS(jS))
      }
    }

    function qS(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        tS = null;
      return SS.between(gS, 1e9, ((SS, gS, bS) => {
        let {
          spec: XS
        } = bS;
        if (!(HS && XS.diagnostics.indexOf(HS) < 0))
          if (tS) {
            if (XS.diagnostics.indexOf(tS.diagnostic) < 0) return !1;
            tS = new xS(tS.from, gS, tS.diagnostic)
          } else tS = new xS(SS, gS, HS || XS.diagnostics[0])
      })), tS
    }

    function uS(SS, HS) {
      let gS = HS.pos,
        tS = HS.end || gS,
        bS = SS.state.facet(DS).hideOn(SS, gS, tS);
      if (null != bS) return bS;
      let XS = SS.startState.doc.lineAt(HS.pos);
      return !(!SS.effects.some((SS => SS.is(fS))) && !SS.changes.touchesRange(XS.from, Math.max(XS.to, tS)))
    }

    function IS(SS, HS) {
      return SS.field(KS, !1) ? HS : HS.concat(bS.G.appendConfig.of(yS))
    }
    const fS = bS.G.define(),
      kS = bS.G.define(),
      aS = bS.G.define(),
      KS = bS.H.define({
        create: () => new NS(tS.b.none, null, null),
        update(SS, HS) {
          if (HS.docChanged && SS.diagnostics.size) {
            let gS = SS.diagnostics.map(HS.changes),
              tS = null,
              bS = SS.panel;
            if (SS.selected) {
              let bS = HS.changes.mapPos(SS.selected.from, 1);
              tS = qS(gS, SS.selected.diagnostic, bS) || qS(gS, null, bS)
            }!gS.size && bS && HS.state.facet(DS).autoPanel && (bS = null), SS = new NS(gS, bS, tS)
          }
          for (let gS of HS.effects)
            if (gS.is(fS)) {
              let tS = HS.state.facet(DS).autoPanel ? gS.value.length ? cS.open : null : SS.panel;
              SS = NS.init(gS.value, tS, HS.state)
            } else gS.is(kS) ? SS = new NS(SS.diagnostics, gS.value ? cS.open : null, SS.selected) : gS.is(aS) && (SS = new NS(SS.diagnostics, SS.panel, gS.value));
          return SS
        },
        provide: SS => [tS.$.from(SS, (SS => SS.panel)), tS.e.KS.from(SS, (SS => SS.diagnostics))]
      });
    const jS = tS.b.mark({
      class: "cm-lintRange cm-lintRange-active"
    });

    function GS(SS, HS, gS) {
      let tS, {
          diagnostics: bS
        } = SS.state.field(KS),
        XS = -1,
        xS = -1;
      bS.between(HS - (gS < 0 ? 1 : 0), HS + (gS > 0 ? 1 : 0), ((SS, bS, NS) => {
        let {
          spec: qS
        } = NS;
        if (HS >= SS && HS <= bS && (SS == bS || (HS > SS || gS > 0) && (HS < bS || gS < 0))) return tS = qS.diagnostics, XS = SS, xS = bS, !1
      }));
      let NS = SS.state.facet(DS).tooltipFilter;
      return tS && NS && (tS = NS(tS, SS.state)), tS ? {
        pos: XS,
        end: xS,
        above: SS.state.doc.lineAt(XS).to < xS,
        create: () => ({
          dom: CS(SS, tS)
        })
      } : null
    }

    function CS(SS, HS) {
      return (0, XS.d)("ul", {
        class: "cm-tooltip-lint"
      }, HS.map((HS => JS(SS, HS, !1))))
    }
    const nS = SS => {
        let HS = SS.state.field(KS, !1);
        return !(!HS || !HS.panel) && (SS.dispatch({
          effects: kS.of(!1)
        }), !0)
      },
      PS = [{
        key: "Mod-Shift-m",
        run: SS => {
          let HS = SS.state.field(KS, !1);
          HS && HS.panel || SS.dispatch({
            effects: IS(SS.state, [kS.of(!0)])
          });
          let gS = (0, tS.v)(SS, cS.open);
          return gS && gS.dom.querySelector(".cm-panel-lint ul").focus(), !0
        },
        preventDefault: !0
      }, {
        key: "F8",
        run: SS => {
          let HS = SS.state.field(KS, !1);
          if (!HS) return !1;
          let gS = SS.state.selection.main,
            tS = qS(HS.diagnostics, null, gS.to + 1);
          return !(!tS && (tS = qS(HS.diagnostics, null, 0), !tS || tS.from == gS.from && tS.to == gS.to)) && (SS.dispatch({
            selection: {
              anchor: tS.from,
              head: tS.to
            },
            scrollIntoView: !0
          }), !0)
        }
      }],
      QS = tS.i.fromClass(class {
        constructor(SS) {
          this.view = SS, this.timeout = -1, this.set = !0;
          let {
            delay: HS
          } = SS.state.facet(DS);
          this.lintTime = Date.now() + HS, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, HS)
        }
        run() {
          clearTimeout(this.timeout);
          let SS = Date.now();
          if (SS < this.lintTime - 10) this.timeout = setTimeout(this.run, this.lintTime - SS);
          else {
            this.set = !1;
            let {
              state: SS
            } = this.view, {
              sources: HS
            } = SS.facet(DS);
            HS.length && function(SS, HS, gS) {
              let tS = [],
                bS = -1;
              for (let XS of SS) XS.then((gS => {
                tS.push(gS), clearTimeout(bS), tS.length == SS.length ? HS(tS) : bS = setTimeout((() => HS(tS)), 200)
              }), gS)
            }(HS.map((SS => Promise.resolve(SS(this.view)))), (HS => {
              this.view.state.doc == SS.doc && this.view.dispatch(function(SS, HS) {
                return {
                  effects: IS(SS, [fS.of(HS)])
                }
              }(this.view.state, HS.reduce(((SS, HS) => SS.concat(HS)))))
            }), (SS => {
              (0, tS.T)(this.view.state, SS)
            }))
          }
        }
        update(SS) {
          let HS = SS.state.facet(DS);
          (SS.docChanged || HS != SS.startState.facet(DS) || HS.needsRefresh && HS.needsRefresh(SS)) && (this.lintTime = Date.now() + HS.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, HS.delay)))
        }
        force() {
          this.set && (this.lintTime = Date.now(), this.run())
        }
        destroy() {
          clearTimeout(this.timeout)
        }
      });
    const DS = bS.n.define({
      combine: SS => ({
        sources: SS.map((SS => SS.source)).filter((SS => null != SS)),
        ...(0, bS.W)(SS.map((SS => SS.config)), {
          delay: 750,
          markerFilter: null,
          tooltipFilter: null,
          needsRefresh: null,
          hideOn: () => null
        }, {
          delay: Math.max,
          markerFilter: wS,
          tooltipFilter: wS,
          needsRefresh: (SS, HS) => SS ? HS ? gS => SS(gS) || HS(gS) : SS : HS,
          hideOn: (SS, HS) => SS ? HS ? (gS, tS, bS) => SS(gS, tS, bS) || HS(gS, tS, bS) : SS : HS,
          autoPanel: (SS, HS) => SS || HS
        })
      })
    });

    function wS(SS, HS) {
      return SS ? HS ? (gS, tS) => HS(SS(gS, tS), tS) : SS : HS
    }

    function hS(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return [DS.of({
        source: SS,
        config: HS
      }), QS, yS]
    }

    function ZS(SS) {
      let HS = [];
      if (SS) SS: for (let {
          name: gS
        }
        of SS) {
        for (let SS = 0; SS < gS.length; SS++) {
          let tS = gS[SS];
          if (/[a-zA-Z]/.test(tS) && !HS.some((SS => SS.toLowerCase() == tS.toLowerCase()))) {
            HS.push(tS);
            continue SS
          }
        }
        HS.push("")
      }
      return HS
    }

    function JS(SS, HS, gS) {
      var tS;
      let bS = gS ? ZS(HS.actions) : [];
      return (0, XS.d)("li", {
        class: "cm-diagnostic cm-diagnostic-" + HS.severity
      }, (0, XS.d)("span", {
        class: "cm-diagnosticText"
      }, HS.renderMessage ? HS.renderMessage(SS) : HS.message), null === (tS = HS.actions) || void 0 === tS ? void 0 : tS.map(((gS, tS) => {
        let xS = !1,
          NS = tS => {
            if (tS.preventDefault(), xS) return;
            xS = !0;
            let bS = qS(SS.state.field(KS).diagnostics, HS);
            bS && gS.apply(SS, bS.from, bS.to)
          },
          {
            name: uS
          } = gS,
          IS = bS[tS] ? uS.indexOf(bS[tS]) : -1,
          fS = IS < 0 ? uS : [uS.slice(0, IS), (0, XS.d)("u", uS.slice(IS, IS + 1)), uS.slice(IS + 1)],
          kS = gS.markClass ? " " + gS.markClass : "";
        return (0, XS.d)("button", {
          type: "button",
          class: "cm-diagnosticAction" + kS,
          onclick: NS,
          onmousedown: NS,
          "aria-label": ` Action: ${uS}${IS<0?"":` (access key "${bS[tS]})"`}.`
        }, fS)
      })), HS.source && (0, XS.d)("div", {
        class: "cm-diagnosticSource"
      }, HS.source))
    }
    class OS extends tS.j {
      constructor(SS) {
        super(), this.sev = SS
      }
      eq(SS) {
        return SS.sev == this.sev
      }
      toDOM() {
        return (0, XS.d)("span", {
          class: "cm-lintPoint cm-lintPoint-" + this.sev
        })
      }
    }
    class dS {
      constructor(SS, HS) {
        this.diagnostic = HS, this.id = "item_" + Math.floor(4294967295 * Math.random()).toString(16), this.dom = JS(SS, HS, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option")
      }
    }
    class cS {
      constructor(SS) {
        this.view = SS, this.items = [];
        this.list = (0, XS.d)("ul", {
          tabIndex: 0,
          role: "listbox",
          "aria-label": this.view.state.phrase("Diagnostics"),
          onkeydown: HS => {
            if (!(HS.ctrlKey || HS.altKey || HS.metaKey)) {
              if (27 == HS.keyCode) nS(this.view), this.view.focus();
              else if (38 == HS.keyCode || 33 == HS.keyCode) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
              else if (40 == HS.keyCode || 34 == HS.keyCode) this.moveSelection((this.selectedIndex + 1) % this.items.length);
              else if (36 == HS.keyCode) this.moveSelection(0);
              else if (35 == HS.keyCode) this.moveSelection(this.items.length - 1);
              else if (13 == HS.keyCode) this.view.focus();
              else {
                if (!(HS.keyCode >= 65 && HS.keyCode <= 90 && this.selectedIndex >= 0)) return;
                {
                  let {
                    diagnostic: gS
                  } = this.items[this.selectedIndex], tS = ZS(gS.actions);
                  for (let bS = 0; bS < tS.length; bS++)
                    if (tS[bS].toUpperCase().charCodeAt(0) == HS.keyCode) {
                      let HS = qS(this.view.state.field(KS).diagnostics, gS);
                      HS && gS.actions[bS].apply(SS, HS.from, HS.to)
                    }
                }
              }
              HS.preventDefault()
            }
          },
          onclick: SS => {
            for (let HS = 0; HS < this.items.length; HS++) this.items[HS].dom.contains(SS.target) && this.moveSelection(HS)
          }
        }), this.dom = (0, XS.d)("div", {
          class: "cm-panel-lint"
        }, this.list, (0, XS.d)("button", {
          type: "button",
          name: "close",
          "aria-label": this.view.state.phrase("close"),
          onclick: () => nS(this.view)
        }, "\xd7")), this.update()
      }
      get selectedIndex() {
        let SS = this.view.state.field(KS).selected;
        if (!SS) return -1;
        for (let HS = 0; HS < this.items.length; HS++)
          if (this.items[HS].diagnostic == SS.diagnostic) return HS;
        return -1
      }
      update() {
        let {
          diagnostics: SS,
          selected: HS
        } = this.view.state.field(KS), gS = 0, tS = !1, bS = null, XS = new Set;
        for (SS.between(0, this.view.state.doc.length, ((SS, xS, NS) => {
            let {
              spec: qS
            } = NS;
            for (let uS of qS.diagnostics) {
              if (XS.has(uS)) continue;
              XS.add(uS);
              let SS, xS = -1;
              for (let HS = gS; HS < this.items.length; HS++)
                if (this.items[HS].diagnostic == uS) {
                  xS = HS;
                  break
                } xS < 0 ? (SS = new dS(this.view, uS), this.items.splice(gS, 0, SS), tS = !0) : (SS = this.items[xS], xS > gS && (this.items.splice(gS, xS - gS), tS = !0)), HS && SS.diagnostic == HS.diagnostic ? SS.dom.hasAttribute("aria-selected") || (SS.dom.setAttribute("aria-selected", "true"), bS = SS) : SS.dom.hasAttribute("aria-selected") && SS.dom.removeAttribute("aria-selected"), gS++
            }
          })); gS < this.items.length && !(1 == this.items.length && this.items[0].diagnostic.from < 0);) tS = !0, this.items.pop();
        0 == this.items.length && (this.items.push(new dS(this.view, {
          from: -1,
          to: -1,
          severity: "info",
          message: this.view.state.phrase("No diagnostics")
        })), tS = !0), bS ? (this.list.setAttribute("aria-activedescendant", bS.id), this.view.requestMeasure({
          key: this,
          read: () => ({
            sel: bS.dom.getBoundingClientRect(),
            panel: this.list.getBoundingClientRect()
          }),
          write: SS => {
            let {
              sel: HS,
              panel: gS
            } = SS, tS = gS.height / this.list.offsetHeight;
            HS.top < gS.top ? this.list.scrollTop -= (gS.top - HS.top) / tS : HS.bottom > gS.bottom && (this.list.scrollTop += (HS.bottom - gS.bottom) / tS)
          }
        })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), tS && this.sync()
      }
      sync() {
        let SS = this.list.firstChild;

        function HS() {
          let HS = SS;
          SS = HS.nextSibling, HS.remove()
        }
        for (let gS of this.items)
          if (gS.dom.parentNode == this.list) {
            for (; SS != gS.dom;) HS();
            SS = gS.dom.nextSibling
          } else this.list.insertBefore(gS.dom, SS);
        for (; SS;) HS()
      }
      moveSelection(SS) {
        if (this.selectedIndex < 0) return;
        let HS = qS(this.view.state.field(KS).diagnostics, this.items[SS].diagnostic);
        HS && this.view.dispatch({
          selection: {
            anchor: HS.from,
            head: HS.to
          },
          scrollIntoView: !0,
          effects: aS.of(HS)
        })
      }
      static open(SS) {
        return new cS(SS)
      }
    }

    function vS(SS) {
      return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${arguments.length>1&&void 0!==arguments[1]?arguments[1]:'viewBox="0 0 40 40"'}>${encodeURIComponent(SS)}</svg>')`
    }

    function ES(SS) {
      return vS(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${SS}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"')
    }
    const LS = tS.e.baseTheme({
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
        backgroundImage: ES("#d11")
      },
      ".cm-lintRange-warning": {
        backgroundImage: ES("orange")
      },
      ".cm-lintRange-info": {
        backgroundImage: ES("#999")
      },
      ".cm-lintRange-hint": {
        backgroundImage: ES("#66d")
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

    function YS(SS) {
      return "error" == SS ? 4 : "warning" == SS ? 3 : "info" == SS ? 2 : 1
    }

    function AS(SS) {
      let HS = "hint",
        gS = 1;
      for (let tS of SS) {
        let SS = YS(tS.severity);
        SS > gS && (gS = SS, HS = tS.severity)
      }
      return HS
    }
    tS.h;
    const yS = [KS, tS.e.KS.compute([KS], (SS => {
      let {
        selected: HS,
        panel: gS
      } = SS.field(KS);
      return HS && gS && HS.from != HS.to ? tS.b.set([jS.range(HS.from, HS.to)]) : tS.b.none
    })), (0, tS.K)(GS, {
      hideOn: uS
    }), LS]
  },
  41359: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => eS,
      f: () => CS,
      j: () => rS
    });
    var tS = gS(41322),
      bS = gS(41315),
      XS = gS(41328);
    const xS = "function" == typeof String.prototype.normalize ? SS => SS.normalize("NFKD") : SS => SS;
    class NS {
      constructor(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : SS.length,
          bS = arguments.length > 4 ? arguments[4] : void 0,
          XS = arguments.length > 5 ? arguments[5] : void 0;
        this.test = XS, this.value = {
          from: 0,
          to: 0
        }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = SS.iterRange(gS, tS), this.bufferStart = gS, this.normalize = bS ? SS => bS(xS(SS)) : xS, this.query = this.normalize(HS)
      }
      peek() {
        if (this.bufferPos == this.buffer.length) {
          if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
          this.bufferPos = 0, this.buffer = this.iter.value
        }
        return (0, bS.Q)(this.buffer, this.bufferPos)
      }
      next() {
        for (; this.matches.length;) this.matches.pop();
        return this.nextOverlapping()
      }
      nextOverlapping() {
        for (;;) {
          let SS = this.peek();
          if (SS < 0) return this.done = !0, this;
          let HS = (0, bS.eb)(SS),
            gS = this.bufferStart + this.bufferPos;
          this.bufferPos += (0, bS.T)(SS);
          let tS = this.normalize(HS);
          if (tS.length)
            for (let bS = 0, XS = gS;; bS++) {
              let SS = tS.charCodeAt(bS),
                xS = this.match(SS, XS, this.bufferPos + this.bufferStart);
              if (bS == tS.length - 1) {
                if (xS) return this.value = xS, this;
                break
              }
              XS == gS && bS < HS.length && HS.charCodeAt(bS) == SS && XS++
            }
        }
      }
      match(SS, HS, gS) {
        let tS = null;
        for (let bS = 0; bS < this.matches.length; bS += 2) {
          let HS = this.matches[bS],
            XS = !1;
          this.query.charCodeAt(HS) == SS && (HS == this.query.length - 1 ? tS = {
            from: this.matches[bS + 1],
            to: gS
          } : (this.matches[bS]++, XS = !0)), XS || (this.matches.splice(bS, 2), bS -= 2)
        }
        return this.query.charCodeAt(0) == SS && (1 == this.query.length ? tS = {
          from: HS,
          to: gS
        } : this.matches.push(1, HS)), tS && this.test && !this.test(tS.from, tS.to, this.buffer, this.bufferStart) && (tS = null), tS
      }
    }
    "undefined" != typeof Symbol && (NS.prototype[Symbol.iterator] = function() {
      return this
    });
    const qS = {
        from: -1,
        to: -1,
        match: /.*/.exec("")
      },
      uS = "gm" + (null == /x/.unicode ? "" : "u");
    class IS {
      constructor(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : SS.length;
        if (this.text = SS, this.to = bS, this.curLine = "", this.done = !1, this.value = qS, /\\[sWDnr]|\n|\r|\[\^/.test(HS)) return new aS(SS, HS, gS, tS, bS);
        this.re = new RegExp(HS, uS + ((null === gS || void 0 === gS ? void 0 : gS.ignoreCase) ? "i" : "")), this.test = null === gS || void 0 === gS ? void 0 : gS.test, this.iter = SS.iter();
        let XS = SS.lineAt(tS);
        this.curLineStart = XS.from, this.matchPos = KS(SS, tS), this.getLine(this.curLineStart)
      }
      getLine(SS) {
        this.iter.next(SS), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next())
      }
      nextLine() {
        this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0)
      }
      next() {
        for (let SS = this.matchPos - this.curLineStart;;) {
          this.re.lastIndex = SS;
          let HS = this.matchPos <= this.to && this.re.exec(this.curLine);
          if (HS) {
            let gS = this.curLineStart + HS.index,
              tS = gS + HS[0].length;
            if (this.matchPos = KS(this.text, tS + (gS == tS ? 1 : 0)), gS == this.curLineStart + this.curLine.length && this.nextLine(), (gS < tS || gS > this.value.to) && (!this.test || this.test(gS, tS, HS))) return this.value = {
              from: gS,
              to: tS,
              match: HS
            }, this;
            SS = this.matchPos - this.curLineStart
          } else {
            if (!(this.curLineStart + this.curLine.length < this.to)) return this.done = !0, this;
            this.nextLine(), SS = 0
          }
        }
      }
    }
    const fS = new WeakMap;
    class kS {
      constructor(SS, HS) {
        this.from = SS, this.text = HS
      }
      get to() {
        return this.from + this.text.length
      }
      static get(SS, HS, gS) {
        let tS = fS.get(SS);
        if (!tS || tS.from >= gS || tS.to <= HS) {
          let tS = new kS(HS, SS.sliceString(HS, gS));
          return fS.set(SS, tS), tS
        }
        if (tS.from == HS && tS.to == gS) return tS;
        let {
          text: bS,
          from: XS
        } = tS;
        return XS > HS && (bS = SS.sliceString(HS, XS) + bS, XS = HS), tS.to < gS && (bS += SS.sliceString(tS.to, gS)), fS.set(SS, new kS(XS, bS)), new kS(HS, bS.slice(HS - XS, gS - XS))
      }
    }
    class aS {
      constructor(SS, HS, gS, tS, bS) {
        this.text = SS, this.to = bS, this.done = !1, this.value = qS, this.matchPos = KS(SS, tS), this.re = new RegExp(HS, uS + ((null === gS || void 0 === gS ? void 0 : gS.ignoreCase) ? "i" : "")), this.test = null === gS || void 0 === gS ? void 0 : gS.test, this.flat = kS.get(SS, tS, this.chunkEnd(tS + 5e3))
      }
      chunkEnd(SS) {
        return SS >= this.to ? this.to : this.text.lineAt(SS).to
      }
      next() {
        for (;;) {
          let SS = this.re.lastIndex = this.matchPos - this.flat.from,
            HS = this.re.exec(this.flat.text);
          if (HS && !HS[0] && HS.index == SS && (this.re.lastIndex = SS + 1, HS = this.re.exec(this.flat.text)), HS) {
            let SS = this.flat.from + HS.index,
              gS = SS + HS[0].length;
            if ((this.flat.to >= this.to || HS.index + HS[0].length <= this.flat.text.length - 10) && (!this.test || this.test(SS, gS, HS))) return this.value = {
              from: SS,
              to: gS,
              match: HS
            }, this.matchPos = KS(this.text, gS + (SS == gS ? 1 : 0)), this
          }
          if (this.flat.to == this.to) return this.done = !0, this;
          this.flat = kS.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + 2 * this.flat.text.length))
        }
      }
    }

    function KS(SS, HS) {
      if (HS >= SS.length) return HS;
      let gS, tS = SS.lineAt(HS);
      for (; HS < tS.to && (gS = tS.text.charCodeAt(HS - tS.from)) >= 56320 && gS < 57344;) HS++;
      return HS
    }
    "undefined" != typeof Symbol && (IS.prototype[Symbol.iterator] = aS.prototype[Symbol.iterator] = function() {
      return this
    });
    const jS = {
        highlightWordAroundCursor: !1,
        minSelectionLength: 1,
        maxMatches: 100,
        wholeWords: !1
      },
      GS = bS.n.define({
        combine: SS => (0, bS.W)(SS, jS, {
          highlightWordAroundCursor: (SS, HS) => SS || HS,
          minSelectionLength: Math.min,
          maxMatches: Math.min
        })
      });

    function CS(SS) {
      let HS = [wS, DS];
      return SS && HS.push(GS.of(SS)), HS
    }
    const nS = tS.b.mark({
        class: "cm-selectionMatch"
      }),
      PS = tS.b.mark({
        class: "cm-selectionMatch cm-selectionMatch-main"
      });

    function QS(SS, HS, gS, tS) {
      return (0 == gS || SS(HS.sliceDoc(gS - 1, gS)) != bS.g.Word) && (tS == HS.doc.length || SS(HS.sliceDoc(tS, tS + 1)) != bS.g.Word)
    }
    const DS = tS.i.fromClass(class {
        constructor(SS) {
          this.KS = this.getDeco(SS)
        }
        update(SS) {
          (SS.selectionSet || SS.docChanged || SS.viewportChanged) && (this.KS = this.getDeco(SS.view))
        }
        getDeco(SS) {
          let HS = SS.state.facet(GS),
            {
              state: gS
            } = SS,
            XS = gS.selection;
          if (XS.HG.length > 1) return tS.b.none;
          let xS, qS = XS.main,
            uS = null;
          if (qS.empty) {
            if (!HS.highlightWordAroundCursor) return tS.b.none;
            let SS = gS.wordAt(qS.head);
            if (!SS) return tS.b.none;
            uS = gS.charCategorizer(qS.head), xS = gS.sliceDoc(SS.from, SS.to)
          } else {
            let SS = qS.to - qS.from;
            if (SS < HS.minSelectionLength || SS > 200) return tS.b.none;
            if (HS.wholeWords) {
              if (xS = gS.sliceDoc(qS.from, qS.to), uS = gS.charCategorizer(qS.head), !QS(uS, gS, qS.from, qS.to) || ! function(SS, HS, gS, tS) {
                  return SS(HS.sliceDoc(gS, gS + 1)) == bS.g.Word && SS(HS.sliceDoc(tS - 1, tS)) == bS.g.Word
                }(uS, gS, qS.from, qS.to)) return tS.b.none
            } else if (xS = gS.sliceDoc(qS.from, qS.to), !xS) return tS.b.none
          }
          let IS = [];
          for (let bS of SS.J9) {
            let SS = new NS(gS.doc, xS, bS.from, bS.to);
            for (; !SS.next().done;) {
              let {
                from: bS,
                to: XS
              } = SS.value;
              if ((!uS || QS(uS, gS, bS, XS)) && (qS.empty && bS <= qS.from && XS >= qS.to ? IS.push(PS.range(bS, XS)) : (bS >= qS.to || XS <= qS.from) && IS.push(nS.range(bS, XS)), IS.length > HS.maxMatches)) return tS.b.none
            }
          }
          return tS.b.set(IS)
        }
      }, {
        KS: SS => SS.KS
      }),
      wS = tS.e.baseTheme({
        ".cm-selectionMatch": {
          backgroundColor: "#99ff7780"
        },
        ".cm-searchMatch .cm-selectionMatch": {
          backgroundColor: "transparent"
        }
      });
    const hS = bS.n.define({
      combine: SS => (0, bS.W)(SS, {
        top: !1,
        caseSensitive: !1,
        literal: !1,
        regexp: !1,
        wholeWord: !1,
        createPanel: SS => new SH(SS),
        scrollToMatch: SS => tS.e.scrollIntoView(SS)
      })
    });
    class ZS {
      constructor(SS) {
        this.search = SS.search, this.caseSensitive = !!SS.caseSensitive, this.literal = !!SS.literal, this.regexp = !!SS.regexp, this.replace = SS.replace || "", this.valid = !!this.search && (!this.regexp || function(SS) {
          try {
            return new RegExp(SS, uS), !0
          } catch (HS) {
            return !1
          }
        }(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!SS.wholeWord, this.test = SS.test
      }
      unquote(SS) {
        return this.literal ? SS : SS.replace(/\\([nrt\\])/g, ((SS, HS) => "n" == HS ? "\n" : "r" == HS ? "\r" : "t" == HS ? "\t" : "\\"))
      }
      eq(SS) {
        return this.search == SS.search && this.replace == SS.replace && this.caseSensitive == SS.caseSensitive && this.regexp == SS.regexp && this.wholeWord == SS.wholeWord && this.test == SS.test
      }
      create() {
        return this.regexp ? new LS(this) : new dS(this)
      }
      getCursor(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gS = arguments.length > 2 ? arguments[2] : void 0,
          tS = SS.doc ? SS : bS.m.create({
            doc: SS
          });
        return null == gS && (gS = tS.doc.length), this.regexp ? cS(this, tS, HS, gS) : OS(this, tS, HS, gS)
      }
    }
    class JS {
      constructor(SS) {
        this.spec = SS
      }
    }

    function OS(SS, HS, gS, tS) {
      let XS;
      var xS, qS;
      return SS.wholeWord && (xS = HS.doc, qS = HS.charCategorizer(HS.selection.main.head), XS = (SS, HS, gS, tS) => ((tS > SS || tS + gS.length < HS) && (tS = Math.max(0, SS - 2), gS = xS.sliceString(tS, Math.min(xS.length, HS + 2))), (qS(vS(gS, SS - tS)) != bS.g.Word || qS(ES(gS, SS - tS)) != bS.g.Word) && (qS(ES(gS, HS - tS)) != bS.g.Word || qS(vS(gS, HS - tS)) != bS.g.Word))), SS.test && (XS = function(SS, HS, gS) {
        return (tS, bS, XS, xS) => {
          if (gS && !gS(tS, bS, XS, xS)) return !1;
          let NS = tS >= xS && bS <= xS + XS.length ? XS.slice(tS - xS, bS - xS) : HS.doc.sliceString(tS, bS);
          return SS(NS, HS, tS, bS)
        }
      }(SS.test, HS, XS)), new NS(HS.doc, SS.unquoted, gS, tS, SS.caseSensitive ? void 0 : SS => SS.toLowerCase(), XS)
    }
    class dS extends JS {
      constructor(SS) {
        super(SS)
      }
      nextMatch(SS, HS, gS) {
        let tS = OS(this.spec, SS, gS, SS.doc.length).nextOverlapping();
        if (tS.done) {
          let gS = Math.min(SS.doc.length, HS + this.spec.unquoted.length);
          tS = OS(this.spec, SS, 0, gS).nextOverlapping()
        }
        return tS.done || tS.value.from == HS && tS.value.to == gS ? null : tS.value
      }
      prevMatchInRange(SS, HS, gS) {
        for (let tS = gS;;) {
          let gS = Math.max(HS, tS - 1e4 - this.spec.unquoted.length),
            bS = OS(this.spec, SS, gS, tS),
            XS = null;
          for (; !bS.nextOverlapping().done;) XS = bS.value;
          if (XS) return XS;
          if (gS == HS) return null;
          tS -= 1e4
        }
      }
      prevMatch(SS, HS, gS) {
        let tS = this.prevMatchInRange(SS, 0, HS);
        return tS || (tS = this.prevMatchInRange(SS, Math.max(0, gS - this.spec.unquoted.length), SS.doc.length)), !tS || tS.from == HS && tS.to == gS ? null : tS
      }
      getReplacement(SS) {
        return this.spec.unquote(this.spec.replace)
      }
      matchAll(SS, HS) {
        let gS = OS(this.spec, SS, 0, SS.doc.length),
          tS = [];
        for (; !gS.next().done;) {
          if (tS.length >= HS) return null;
          tS.push(gS.value)
        }
        return tS
      }
      highlight(SS, HS, gS, tS) {
        let bS = OS(this.spec, SS, Math.max(0, HS - this.spec.unquoted.length), Math.min(gS + this.spec.unquoted.length, SS.doc.length));
        for (; !bS.next().done;) tS(bS.value.from, bS.value.to)
      }
    }

    function cS(SS, HS, gS, tS) {
      let XS;
      var xS;
      return SS.wholeWord && (xS = HS.charCategorizer(HS.selection.main.head), XS = (SS, HS, gS) => !gS[0].length || (xS(vS(gS.input, gS.index)) != bS.g.Word || xS(ES(gS.input, gS.index)) != bS.g.Word) && (xS(ES(gS.input, gS.index + gS[0].length)) != bS.g.Word || xS(vS(gS.input, gS.index + gS[0].length)) != bS.g.Word)), SS.test && (XS = function(SS, HS, gS) {
        return (tS, bS, XS) => (!gS || gS(tS, bS, XS)) && SS(XS[0], HS, tS, bS)
      }(SS.test, HS, XS)), new IS(HS.doc, SS.search, {
        ignoreCase: !SS.caseSensitive,
        test: XS
      }, gS, tS)
    }

    function vS(SS, HS) {
      return SS.slice((0, bS.$)(SS, HS, !1), HS)
    }

    function ES(SS, HS) {
      return SS.slice(HS, (0, bS.$)(SS, HS))
    }
    class LS extends JS {
      nextMatch(SS, HS, gS) {
        let tS = cS(this.spec, SS, gS, SS.doc.length).next();
        return tS.done && (tS = cS(this.spec, SS, 0, HS).next()), tS.done ? null : tS.value
      }
      prevMatchInRange(SS, HS, gS) {
        for (let tS = 1;; tS++) {
          let bS = Math.max(HS, gS - 1e4 * tS),
            XS = cS(this.spec, SS, bS, gS),
            xS = null;
          for (; !XS.next().done;) xS = XS.value;
          if (xS && (bS == HS || xS.from > bS + 10)) return xS;
          if (bS == HS) return null
        }
      }
      prevMatch(SS, HS, gS) {
        return this.prevMatchInRange(SS, 0, HS) || this.prevMatchInRange(SS, gS, SS.doc.length)
      }
      getReplacement(SS) {
        return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, ((HS, gS) => {
          if ("&" == gS) return SS.match[0];
          if ("$" == gS) return "$";
          for (let tS = gS.length; tS > 0; tS--) {
            let HS = +gS.slice(0, tS);
            if (HS > 0 && HS < SS.match.length) return SS.match[HS] + gS.slice(tS)
          }
          return HS
        }))
      }
      matchAll(SS, HS) {
        let gS = cS(this.spec, SS, 0, SS.doc.length),
          tS = [];
        for (; !gS.next().done;) {
          if (tS.length >= HS) return null;
          tS.push(gS.value)
        }
        return tS
      }
      highlight(SS, HS, gS, tS) {
        let bS = cS(this.spec, SS, Math.max(0, HS - 250), Math.min(gS + 250, SS.doc.length));
        for (; !bS.next().done;) tS(bS.value.from, bS.value.to)
      }
    }
    const YS = bS.G.define(),
      AS = bS.G.define(),
      yS = bS.H.define({
        create: SS => new VS(TS(SS).create(), null),
        update(SS, HS) {
          for (let gS of HS.effects) gS.is(YS) ? SS = new VS(gS.value.create(), SS.panel) : gS.is(AS) && (SS = new VS(SS.query, gS.value ? RS : null));
          return SS
        },
        provide: SS => tS.$.from(SS, (SS => SS.panel))
      });
    class VS {
      constructor(SS, HS) {
        this.query = SS, this.panel = HS
      }
    }
    const iS = tS.b.mark({
        class: "cm-searchMatch"
      }),
      WS = tS.b.mark({
        class: "cm-searchMatch cm-searchMatch-selected"
      }),
      zS = tS.i.fromClass(class {
        constructor(SS) {
          this.view = SS, this.KS = this.highlight(SS.state.field(yS))
        }
        update(SS) {
          let HS = SS.state.field(yS);
          (HS != SS.startState.field(yS) || SS.docChanged || SS.selectionSet || SS.viewportChanged) && (this.KS = this.highlight(HS))
        }
        highlight(SS) {
          let {
            query: HS,
            panel: gS
          } = SS;
          if (!gS || !HS.spec.valid) return tS.b.none;
          let {
            view: XS
          } = this, xS = new bS.w;
          for (let tS = 0, bS = XS.J9, NS = bS.length; tS < NS; tS++) {
            let {
              from: SS,
              to: gS
            } = bS[tS];
            for (; tS < NS - 1 && gS > bS[tS + 1].from - 500;) gS = bS[++tS].to;
            HS.highlight(XS.state, SS, gS, ((SS, HS) => {
              let gS = XS.state.selection.HG.some((gS => gS.from == SS && gS.to == HS));
              xS.add(SS, HS, gS ? WS : iS)
            }))
          }
          return xS.finish()
        }
      }, {
        KS: SS => SS.KS
      });

    function US(SS) {
      return HS => {
        let gS = HS.state.field(yS, !1);
        return gS && gS.query.spec.valid ? SS(HS, gS) : mS(HS)
      }
    }
    const pS = US(((SS, HS) => {
        let {
          query: gS
        } = HS, {
          to: tS
        } = SS.state.selection.main, XS = gS.nextMatch(SS.state, tS, tS);
        if (!XS) return !1;
        let xS = bS.i.single(XS.from, XS.to),
          NS = SS.state.facet(hS);
        return SS.dispatch({
          selection: xS,
          effects: [bH(SS, XS), NS.scrollToMatch(xS.main, SS)],
          userEvent: "select.search"
        }), lS(SS), !0
      })),
      sS = US(((SS, HS) => {
        let {
          query: gS
        } = HS, {
          state: tS
        } = SS, {
          from: XS
        } = tS.selection.main, xS = gS.prevMatch(tS, XS, XS);
        if (!xS) return !1;
        let NS = bS.i.single(xS.from, xS.to),
          qS = SS.state.facet(hS);
        return SS.dispatch({
          selection: NS,
          effects: [bH(SS, xS), qS.scrollToMatch(NS.main, SS)],
          userEvent: "select.search"
        }), lS(SS), !0
      })),
      BS = US(((SS, HS) => {
        let {
          query: gS
        } = HS, tS = gS.matchAll(SS.state, 1e3);
        return !(!tS || !tS.length) && (SS.dispatch({
          selection: bS.i.create(tS.map((SS => bS.i.range(SS.from, SS.to)))),
          userEvent: "select.search.matches"
        }), !0)
      })),
      MS = US(((SS, HS) => {
        let {
          query: gS
        } = HS, {
          state: XS
        } = SS, {
          from: xS,
          to: NS
        } = XS.selection.main;
        if (XS.readOnly) return !1;
        let qS = gS.nextMatch(XS, xS, xS);
        if (!qS) return !1;
        let uS, IS, fS = qS,
          kS = [],
          aS = [];
        fS.from == xS && fS.to == NS && (IS = XS.toText(gS.getReplacement(fS)), kS.push({
          from: fS.from,
          to: fS.to,
          insert: IS
        }), fS = gS.nextMatch(XS, fS.from, fS.to), aS.push(tS.e.announce.of(XS.phrase("replaced match on line $", XS.doc.lineAt(xS).number) + ".")));
        let KS = SS.state.changes(kS);
        return fS && (uS = bS.i.single(fS.from, fS.to).map(KS), aS.push(bH(SS, fS)), aS.push(XS.facet(hS).scrollToMatch(uS.main, SS))), SS.dispatch({
          changes: KS,
          selection: uS,
          effects: aS,
          userEvent: "input.replace"
        }), !0
      })),
      FS = US(((SS, HS) => {
        let {
          query: gS
        } = HS;
        if (SS.state.readOnly) return !1;
        let bS = gS.matchAll(SS.state, 1e9).map((SS => {
          let {
            from: HS,
            to: tS
          } = SS;
          return {
            from: HS,
            to: tS,
            insert: gS.getReplacement(SS)
          }
        }));
        if (!bS.length) return !1;
        let XS = SS.state.phrase("replaced $ matches", bS.length) + ".";
        return SS.dispatch({
          changes: bS,
          effects: tS.e.announce.of(XS),
          userEvent: "input.replace.all"
        }), !0
      }));

    function RS(SS) {
      return SS.state.facet(hS).createPanel(SS)
    }

    function TS(SS, HS) {
      var gS, tS, bS, XS, xS;
      let NS = SS.selection.main,
        qS = NS.empty || NS.to > NS.from + 100 ? "" : SS.sliceDoc(NS.from, NS.to);
      if (HS && !qS) return HS;
      let uS = SS.facet(hS);
      return new ZS({
        search: (null !== (gS = null === HS || void 0 === HS ? void 0 : HS.literal) && void 0 !== gS ? gS : uS.literal) ? qS : qS.replace(/\n/g, "\\n"),
        caseSensitive: null !== (tS = null === HS || void 0 === HS ? void 0 : HS.caseSensitive) && void 0 !== tS ? tS : uS.caseSensitive,
        literal: null !== (bS = null === HS || void 0 === HS ? void 0 : HS.literal) && void 0 !== bS ? bS : uS.literal,
        regexp: null !== (XS = null === HS || void 0 === HS ? void 0 : HS.regexp) && void 0 !== XS ? XS : uS.regexp,
        wholeWord: null !== (xS = null === HS || void 0 === HS ? void 0 : HS.wholeWord) && void 0 !== xS ? xS : uS.wholeWord
      })
    }

    function oS(SS) {
      let HS = (0, tS.v)(SS, RS);
      return HS && HS.dom.querySelector("[main-field]")
    }

    function lS(SS) {
      let HS = oS(SS);
      HS && HS == SS.root.activeElement && HS.select()
    }
    const mS = SS => {
        let HS = SS.state.field(yS, !1);
        if (HS && HS.panel) {
          let gS = oS(SS);
          if (gS && gS != SS.root.activeElement) {
            let tS = TS(SS.state, HS.query.spec);
            tS.valid && SS.dispatch({
              effects: YS.of(tS)
            }), gS.focus(), gS.select()
          }
        } else SS.dispatch({
          effects: [AS.of(!0), HS ? YS.of(TS(SS.state, HS.query.spec)) : bS.G.appendConfig.of(xH)]
        });
        return !0
      },
      eS = SS => {
        let HS = SS.state.field(yS, !1);
        if (!HS || !HS.panel) return !1;
        let gS = (0, tS.v)(SS, RS);
        return gS && gS.dom.contains(SS.root.activeElement) && SS.focus(), SS.dispatch({
          effects: AS.of(!1)
        }), !0
      },
      rS = [{
        key: "Mod-f",
        run: mS,
        scope: "editor search-panel"
      }, {
        key: "F3",
        run: pS,
        shift: sS,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Mod-g",
        run: pS,
        shift: sS,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Escape",
        run: eS,
        scope: "editor search-panel"
      }, {
        key: "Mod-Shift-l",
        run: SS => {
          let {
            state: HS,
            dispatch: gS
          } = SS, tS = HS.selection;
          if (tS.HG.length > 1 || tS.main.empty) return !1;
          let {
            from: XS,
            to: xS
          } = tS.main, qS = [], uS = 0;
          for (let IS = new NS(HS.doc, HS.sliceDoc(XS, xS)); !IS.next().done;) {
            if (qS.length > 1e3) return !1;
            IS.value.from == XS && (uS = qS.length), qS.push(bS.i.range(IS.value.from, IS.value.to))
          }
          return gS(HS.update({
            selection: bS.i.create(qS, uS),
            userEvent: "select.search.matches"
          })), !0
        }
      }, {
        key: "Mod-Alt-g",
        run: SS => {
          let {
            state: HS
          } = SS, gS = String(HS.doc.lineAt(SS.state.selection.main.head).number), {
            close: XS,
            result: xS
          } = (0, tS.Z)(SS, {
            label: HS.phrase("Go to line"),
            input: {
              type: "text",
              name: "line",
              value: gS
            },
            focus: !0,
            submitLabel: HS.phrase("go")
          });
          return xS.then((gS => {
            let xS = gS && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(gS.elements.line.value);
            if (!xS) return void SS.dispatch({
              effects: XS
            });
            let NS = HS.doc.lineAt(HS.selection.main.head),
              [, qS, uS, IS, fS] = xS,
              kS = IS ? +IS.slice(1) : 0,
              aS = uS ? +uS : NS.number;
            if (uS && fS) {
              let SS = aS / 100;
              qS && (SS = SS * ("-" == qS ? -1 : 1) + NS.number / HS.doc.lines), aS = Math.round(HS.doc.lines * SS)
            } else uS && qS && (aS = aS * ("-" == qS ? -1 : 1) + NS.number);
            let KS = HS.doc.line(Math.max(1, Math.min(HS.doc.lines, aS))),
              jS = bS.i.cursor(KS.from + Math.max(0, Math.min(kS, KS.length)));
            SS.dispatch({
              effects: [XS, tS.e.scrollIntoView(jS.from, {
                y: "center"
              })],
              selection: jS
            })
          })), !0
        }
      }, {
        key: "Mod-d",
        run: SS => {
          let {
            state: HS,
            dispatch: gS
          } = SS, {
            HG: XS
          } = HS.selection;
          if (XS.some((SS => SS.from === SS.to))) return (SS => {
            let {
              state: HS,
              dispatch: gS
            } = SS, {
              selection: tS
            } = HS, XS = bS.i.create(tS.HG.map((SS => HS.wordAt(SS.head) || bS.i.cursor(SS.head))), tS.mainIndex);
            return !XS.eq(tS) && (gS(HS.update({
              selection: XS
            })), !0)
          })({
            state: HS,
            dispatch: gS
          });
          let xS = HS.sliceDoc(XS[0].from, XS[0].to);
          if (HS.selection.HG.some((SS => HS.sliceDoc(SS.from, SS.to) != xS))) return !1;
          let qS = function(SS, HS) {
            let {
              main: gS,
              HG: tS
            } = SS.selection, bS = SS.wordAt(gS.head), XS = bS && bS.from == gS.from && bS.to == gS.to;
            for (let xS = !1, qS = new NS(SS.doc, HS, tS[tS.length - 1].to);;) {
              if (qS.next(), !qS.done) {
                if (xS && tS.some((SS => SS.from == qS.value.from))) continue;
                if (XS) {
                  let HS = SS.wordAt(qS.value.from);
                  if (!HS || HS.from != qS.value.from || HS.to != qS.value.to) continue
                }
                return qS.value
              }
              if (xS) return null;
              qS = new NS(SS.doc, HS, 0, Math.max(0, tS[tS.length - 1].from - 1)), xS = !0
            }
          }(HS, xS);
          return !!qS && (gS(HS.update({
            selection: HS.selection.addRange(bS.i.range(qS.from, qS.to), !1),
            effects: tS.e.scrollIntoView(qS.to)
          })), !0)
        },
        preventDefault: !0
      }];
    class SH {
      constructor(SS) {
        this.view = SS;
        let HS = this.query = SS.state.field(yS).query.spec;

        function gS(SS, HS, gS) {
          return (0, XS.d)("button", {
            class: "cm-button",
            name: SS,
            onclick: HS,
            type: "button"
          }, gS)
        }
        this.commit = this.commit.bind(this), this.searchField = (0, XS.d)("input", {
          value: HS.search,
          placeholder: HH(SS, "Find"),
          "aria-label": HH(SS, "Find"),
          class: "cm-textfield",
          name: "search",
          form: "",
          "main-field": "true",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.replaceField = (0, XS.d)("input", {
          value: HS.replace,
          placeholder: HH(SS, "Replace"),
          "aria-label": HH(SS, "Replace"),
          class: "cm-textfield",
          name: "replace",
          form: "",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.caseField = (0, XS.d)("input", {
          type: "checkbox",
          name: "case",
          form: "",
          checked: HS.caseSensitive,
          onchange: this.commit
        }), this.reField = (0, XS.d)("input", {
          type: "checkbox",
          name: "re",
          form: "",
          checked: HS.regexp,
          onchange: this.commit
        }), this.wordField = (0, XS.d)("input", {
          type: "checkbox",
          name: "word",
          form: "",
          checked: HS.wholeWord,
          onchange: this.commit
        }), this.dom = (0, XS.d)("div", {
          onkeydown: SS => this.keydown(SS),
          class: "cm-search"
        }, [this.searchField, gS("next", (() => pS(SS)), [HH(SS, "next")]), gS("prev", (() => sS(SS)), [HH(SS, "previous")]), gS("select", (() => BS(SS)), [HH(SS, "all")]), (0, XS.d)("label", null, [this.caseField, HH(SS, "match case")]), (0, XS.d)("label", null, [this.reField, HH(SS, "regexp")]), (0, XS.d)("label", null, [this.wordField, HH(SS, "by word")]), ...SS.state.readOnly ? [] : [(0, XS.d)("br"), this.replaceField, gS("replace", (() => MS(SS)), [HH(SS, "replace")]), gS("replaceAll", (() => FS(SS)), [HH(SS, "replace all")])], (0, XS.d)("button", {
          name: "close",
          onclick: () => eS(SS),
          "aria-label": HH(SS, "close"),
          type: "button"
        }, ["\xd7"])])
      }
      commit() {
        let SS = new ZS({
          search: this.searchField.value,
          caseSensitive: this.caseField.checked,
          regexp: this.reField.checked,
          wholeWord: this.wordField.checked,
          replace: this.replaceField.value
        });
        SS.eq(this.query) || (this.query = SS, this.view.dispatch({
          effects: YS.of(SS)
        }))
      }
      keydown(SS) {
        (0, tS.X)(this.view, SS, "search-panel") ? SS.preventDefault(): 13 == SS.keyCode && SS.target == this.searchField ? (SS.preventDefault(), (SS.shiftKey ? sS : pS)(this.view)) : 13 == SS.keyCode && SS.target == this.replaceField && (SS.preventDefault(), MS(this.view))
      }
      update(SS) {
        for (let HS of SS.transactions)
          for (let SS of HS.effects) SS.is(YS) && !SS.value.eq(this.query) && this.setQuery(SS.value)
      }
      setQuery(SS) {
        this.query = SS, this.searchField.value = SS.search, this.replaceField.value = SS.replace, this.caseField.checked = SS.caseSensitive, this.reField.checked = SS.regexp, this.wordField.checked = SS.wholeWord
      }
      mount() {
        this.searchField.select()
      }
      get pos() {
        return 80
      }
      get top() {
        return this.view.state.facet(hS).top
      }
    }

    function HH(SS, HS) {
      return SS.state.phrase(HS)
    }
    const gH = 30,
      tH = /[\s\.,:;?!]/;

    function bH(SS, HS) {
      let {
        from: gS,
        to: bS
      } = HS, XS = SS.state.doc.lineAt(gS), xS = SS.state.doc.lineAt(bS).to, NS = Math.max(XS.from, gS - gH), qS = Math.min(xS, bS + gH), uS = SS.state.sliceDoc(NS, qS);
      if (NS != XS.from)
        for (let tS = 0; tS < gH; tS++)
          if (!tH.test(uS[tS + 1]) && tH.test(uS[tS])) {
            uS = uS.slice(tS);
            break
          } if (qS != xS)
        for (let tS = uS.length - 1; tS > uS.length - gH; tS--)
          if (!tH.test(uS[tS - 1]) && tH.test(uS[tS])) {
            uS = uS.slice(0, tS);
            break
          } return tS.e.announce.of(`${SS.state.phrase("current match")}. ${uS} ${SS.state.phrase("on line")} ${XS.number}.`)
    }
    const XH = tS.e.baseTheme({
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
      xH = [yS, bS.s.low(zS), XH]
  },
  41322: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => LS,
      d: () => uH,
      e: () => Ob,
      h: () => xx,
      i: () => lH,
      j: () => vS,
      m: () => vX,
      o: () => mb,
      s: () => xX,
      v: () => mX,
      x: () => TX,
      B: () => fx,
      G: () => nX,
      E: () => Ex,
      J: () => KX,
      K: () => RX,
      L: () => yb,
      P: () => Ox,
      T: () => FH,
      U: () => wX,
      V: () => OX,
      X: () => Wb,
      Z: () => gx,
      $: () => Hx,
      cb: () => UX
    });
    for (var tS = gS(41315), bS = gS(41324), XS = {
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
      }, xS = {
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
      }, NS = "undefined" != typeof navigator && /Mac/.test(navigator.platform), qS = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), uS = 0; uS < 10; uS++) XS[48 + uS] = XS[96 + uS] = String(uS);
    for (uS = 1; uS <= 24; uS++) XS[uS + 111] = "F" + uS;
    for (uS = 65; uS <= 90; uS++) XS[uS] = String.fromCharCode(uS + 32), xS[uS] = String.fromCharCode(uS);
    for (var IS in XS) xS.hasOwnProperty(IS) || (xS[IS] = XS[IS]);
    var fS = gS(41328);
    let kS = "undefined" != typeof navigator ? navigator : {
        userAgent: "",
        vendor: "",
        platform: ""
      },
      aS = "undefined" != typeof document ? document : {
        documentElement: {
          style: {}
        }
      };
    const KS = /Edge\/(\d+)/.exec(kS.userAgent),
      jS = /MSIE \d/.test(kS.userAgent),
      GS = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(kS.userAgent),
      CS = !!(jS || GS || KS),
      nS = !CS && /gecko\/(\d+)/i.test(kS.userAgent),
      PS = !CS && /Chrome\/(\d+)/.exec(kS.userAgent),
      QS = "webkitFontSmoothing" in aS.documentElement.style,
      DS = !CS && /Apple Computer/.test(kS.vendor),
      wS = DS && (/Mobile\/\w+/.test(kS.userAgent) || kS.maxTouchPoints > 2);
    var hS = {
      mac: wS || /Mac/.test(kS.platform),
      windows: /Win/.test(kS.platform),
      linux: /Linux|X11/.test(kS.platform),
      ie: CS,
      ie_version: jS ? aS.documentMode || 6 : GS ? +GS[1] : KS ? +KS[1] : 0,
      gecko: nS,
      gecko_version: nS ? +(/Firefox\/(\d+)/.exec(kS.userAgent) || [0, 0])[1] : 0,
      chrome: !!PS,
      chrome_version: PS ? +PS[1] : 0,
      ios: wS,
      android: /Android\b/.test(kS.userAgent),
      webkit: QS,
      webkit_version: QS ? +(/\bAppleWebKit\/(\d+)/.exec(kS.userAgent) || [0, 0])[1] : 0,
      safari: DS,
      safari_version: DS ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(kS.userAgent) || [0, 0])[1] : 0,
      tabSize: null != aS.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size"
    };

    function ZS(SS, HS) {
      for (let gS in SS) "class" == gS && HS.class ? HS.class += " " + SS.class : "style" == gS && HS.style ? HS.style += ";" + SS.style : HS[gS] = SS[gS];
      return HS
    }
    const JS = Object.create(null);

    function OS(SS, HS, gS) {
      if (SS == HS) return !0;
      SS || (SS = JS), HS || (HS = JS);
      let tS = Object.keys(SS),
        bS = Object.keys(HS);
      if (tS.length - (gS && tS.indexOf(gS) > -1 ? 1 : 0) != bS.length - (gS && bS.indexOf(gS) > -1 ? 1 : 0)) return !1;
      for (let XS of tS)
        if (XS != gS && (-1 == bS.indexOf(XS) || SS[XS] !== HS[XS])) return !1;
      return !0
    }

    function dS(SS, HS, gS) {
      let tS = !1;
      if (HS)
        for (let bS in HS) gS && bS in gS || (tS = !0, "style" == bS ? SS.style.cssText = "" : SS.removeAttribute(bS));
      if (gS)
        for (let bS in gS) HS && HS[bS] == gS[bS] || (tS = !0, "style" == bS ? SS.style.cssText = gS[bS] : SS.setAttribute(bS, gS[bS]));
      return tS
    }

    function cS(SS) {
      let HS = Object.create(null);
      for (let gS = 0; gS < SS.attributes.length; gS++) {
        let tS = SS.attributes[gS];
        HS[tS.name] = tS.value
      }
      return HS
    }
    class vS {
      eq(SS) {
        return !1
      }
      updateDOM(SS, HS, gS) {
        return !1
      }
      compare(SS) {
        return this == SS || this.constructor == SS.constructor && this.eq(SS)
      }
      get estimatedHeight() {
        return -1
      }
      get lineBreaks() {
        return 0
      }
      ignoreEvent(SS) {
        return !0
      }
      coordsAt(SS, HS, gS) {
        return null
      }
      get isHidden() {
        return !1
      }
      get editable() {
        return !1
      }
      destroy(SS) {}
    }
    var ES = function(SS) {
      return SS[SS.Text = 0] = "Text", SS[SS.WidgetBefore = 1] = "WidgetBefore", SS[SS.WidgetAfter = 2] = "WidgetAfter", SS[SS.WidgetRange = 3] = "WidgetRange", SS
    }(ES || (ES = {}));
    class LS extends tS.D {
      constructor(SS, HS, gS, tS) {
        super(), this.startSide = SS, this.endSide = HS, this.widget = gS, this.spec = tS
      }
      get heightRelevant() {
        return !1
      }
      static mark(SS) {
        return new YS(SS)
      }
      static widget(SS) {
        let HS = Math.max(-1e4, Math.min(1e4, SS.side || 0)),
          gS = !!SS.block;
        return HS += gS && !SS.inlineOrder ? HS > 0 ? 3e8 : -4e8 : HS > 0 ? 1e8 : -1e8, new yS(SS, HS, HS, gS, SS.widget || null, !1)
      }
      static replace(SS) {
        let HS, gS, tS = !!SS.block;
        if (SS.isBlockGap) HS = -5e8, gS = 4e8;
        else {
          let {
            start: bS,
            end: XS
          } = VS(SS, tS);
          HS = (bS ? tS ? -3e8 : -1 : 5e8) - 1, gS = 1 + (XS ? tS ? 2e8 : 1 : -6e8)
        }
        return new yS(SS, HS, gS, tS, SS.widget || null, !0)
      }
      static line(SS) {
        return new AS(SS)
      }
      static set(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return tS.A.of(SS, HS)
      }
      hasHeight() {
        return !!this.widget && this.widget.estimatedHeight > -1
      }
    }
    LS.none = tS.A.empty;
    class YS extends LS {
      constructor(SS) {
        let {
          start: HS,
          end: gS
        } = VS(SS);
        super(HS ? -1 : 5e8, gS ? 1 : -6e8, null, SS), this.tagName = SS.tagName || "span", this.attrs = SS.class && SS.attributes ? ZS(SS.attributes, {
          class: SS.class
        }) : SS.class ? {
          class: SS.class
        } : SS.attributes || JS
      }
      eq(SS) {
        return this == SS || SS instanceof YS && this.tagName == SS.tagName && OS(this.attrs, SS.attrs)
      }
      range(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SS;
        if (SS >= HS) throw new RangeError("Mark decorations may not be empty");
        return super.range(SS, HS)
      }
    }
    YS.prototype.point = !1;
    class AS extends LS {
      constructor(SS) {
        super(-2e8, -2e8, null, SS)
      }
      eq(SS) {
        return SS instanceof AS && this.spec.class == SS.spec.class && OS(this.spec.attributes, SS.spec.attributes)
      }
      range(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SS;
        if (HS != SS) throw new RangeError("Line decoration ranges must be zero-length");
        return super.range(SS, HS)
      }
    }
    AS.prototype.mapMode = tS.q.TrackBefore, AS.prototype.point = !0;
    class yS extends LS {
      constructor(SS, HS, gS, bS, XS, xS) {
        super(HS, gS, XS, SS), this.block = bS, this.isReplace = xS, this.mapMode = bS ? HS <= 0 ? tS.q.TrackBefore : tS.q.TrackAfter : tS.q.TrackDel
      }
      get type() {
        return this.startSide != this.endSide ? ES.WidgetRange : this.startSide <= 0 ? ES.WidgetBefore : ES.WidgetAfter
      }
      get heightRelevant() {
        return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0)
      }
      eq(SS) {
        return SS instanceof yS && (HS = this.widget, gS = SS.widget, HS == gS || !!(HS && gS && HS.compare(gS))) && this.block == SS.block && this.startSide == SS.startSide && this.endSide == SS.endSide;
        var HS, gS
      }
      range(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SS;
        if (this.isReplace && (SS > HS || SS == HS && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && HS != SS) throw new RangeError("Widget decorations can only have zero-length ranges");
        return super.range(SS, HS)
      }
    }

    function VS(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          inclusiveStart: gS,
          inclusiveEnd: tS
        } = SS;
      return null == gS && (gS = SS.inclusive), null == tS && (tS = SS.inclusive), {
        start: null !== gS && void 0 !== gS ? gS : HS,
        end: null !== tS && void 0 !== tS ? tS : HS
      }
    }

    function iS(SS, HS, gS) {
      let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        bS = gS.length - 1;
      bS >= 0 && gS[bS] + tS >= SS ? gS[bS] = Math.max(gS[bS], HS) : gS.push(SS, HS)
    }
    yS.prototype.point = !0;
    class WS extends tS.D {
      constructor(SS, HS) {
        super(), this.tagName = SS, this.attributes = HS
      }
      eq(SS) {
        return SS == this || SS instanceof WS && this.tagName == SS.tagName && OS(this.attributes, SS.attributes)
      }
      static create(SS) {
        return new WS(SS.tagName, SS.attributes || JS)
      }
      static set(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return tS.A.of(SS, HS)
      }
    }

    function zS(SS) {
      let HS;
      return HS = 11 == SS.nodeType ? SS.getSelection ? SS : SS.ownerDocument : SS, HS.getSelection()
    }

    function US(SS, HS) {
      return !!HS && (SS == HS || SS.contains(1 != HS.nodeType ? HS.parentNode : HS))
    }

    function pS(SS, HS) {
      if (!HS.anchorNode) return !1;
      try {
        return US(SS, HS.anchorNode)
      } catch (gS) {
        return !1
      }
    }

    function sS(SS) {
      return 3 == SS.nodeType ? tH(SS, 0, SS.nodeValue.length).getClientRects() : 1 == SS.nodeType ? SS.getClientRects() : []
    }

    function BS(SS, HS, gS, tS) {
      return !!gS && (RS(SS, HS, gS, tS, -1) || RS(SS, HS, gS, tS, 1))
    }

    function MS(SS) {
      for (var HS = 0;; HS++)
        if (!(SS = SS.previousSibling)) return HS
    }

    function FS(SS) {
      return 1 == SS.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(SS.nodeName)
    }

    function RS(SS, HS, gS, tS, bS) {
      for (;;) {
        if (SS == gS && HS == tS) return !0;
        if (HS == (bS < 0 ? 0 : TS(SS))) {
          if ("DIV" == SS.nodeName) return !1;
          let gS = SS.parentNode;
          if (!gS || 1 != gS.nodeType) return !1;
          HS = MS(SS) + (bS < 0 ? 0 : 1), SS = gS
        } else {
          if (1 != SS.nodeType) return !1;
          if (1 == (SS = SS.childNodes[HS + (bS < 0 ? -1 : 0)]).nodeType && "false" == SS.contentEditable) return !1;
          HS = bS < 0 ? TS(SS) : 0
        }
      }
    }

    function TS(SS) {
      return 3 == SS.nodeType ? SS.nodeValue.length : SS.childNodes.length
    }

    function oS(SS, HS) {
      let gS = HS ? SS.left : SS.right;
      return {
        left: gS,
        right: gS,
        top: SS.top,
        bottom: SS.bottom
      }
    }

    function lS(SS) {
      let HS = SS.visualViewport;
      return HS ? {
        left: 0,
        right: HS.width,
        top: 0,
        bottom: HS.height
      } : {
        left: 0,
        right: SS.innerWidth,
        top: 0,
        bottom: SS.innerHeight
      }
    }

    function mS(SS, HS) {
      let gS = HS.width / SS.offsetWidth,
        tS = HS.height / SS.offsetHeight;
      return (gS > .995 && gS < 1.005 || !isFinite(gS) || Math.abs(HS.width - SS.offsetWidth) < 1) && (gS = 1), (tS > .995 && tS < 1.005 || !isFinite(tS) || Math.abs(HS.height - SS.offsetHeight) < 1) && (tS = 1), {
        scaleX: gS,
        scaleY: tS
      }
    }

    function eS(SS) {
      let HS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        gS = SS.ownerDocument,
        tS = null,
        bS = null;
      for (let XS = SS.parentNode; XS && (XS != gS.body && (HS && !tS || !bS));)
        if (1 == XS.nodeType) !bS && XS.scrollHeight > XS.clientHeight && (bS = XS), HS && !tS && XS.scrollWidth > XS.clientWidth && (tS = XS), XS = XS.assignedSlot || XS.parentNode;
        else {
          if (11 != XS.nodeType) break;
          XS = XS.host
        } return {
        x: tS,
        y: bS
      }
    }
    WS.prototype.startSide = WS.prototype.endSide = -1;
    class rS {
      constructor() {
        this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
      }
      eq(SS) {
        return this.anchorNode == SS.anchorNode && this.anchorOffset == SS.anchorOffset && this.focusNode == SS.focusNode && this.focusOffset == SS.focusOffset
      }
      setRange(SS) {
        let {
          anchorNode: HS,
          focusNode: gS
        } = SS;
        this.set(HS, Math.min(SS.anchorOffset, HS ? TS(HS) : 0), gS, Math.min(SS.focusOffset, gS ? TS(gS) : 0))
      }
      set(SS, HS, gS, tS) {
        this.anchorNode = SS, this.anchorOffset = HS, this.focusNode = gS, this.focusOffset = tS
      }
    }
    let SH, HH = null;

    function gH(SS) {
      if (SS.setActive) return SS.setActive();
      if (HH) return SS.focus(HH);
      let HS = [];
      for (let gS = SS; gS && (HS.push(gS, gS.scrollTop, gS.scrollLeft), gS != gS.ownerDocument); gS = gS.parentNode);
      if (SS.focus(null == HH ? {
          get preventScroll() {
            return HH = {
              preventScroll: !0
            }, !0
          }
        } : void 0), !HH) {
        HH = !1;
        for (let SS = 0; SS < HS.length;) {
          let gS = HS[SS++],
            tS = HS[SS++],
            bS = HS[SS++];
          gS.scrollTop != tS && (gS.scrollTop = tS), gS.scrollLeft != bS && (gS.scrollLeft = bS)
        }
      }
    }

    function tH(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : HS,
        tS = SH || (SH = document.createRange());
      return tS.setEnd(SS, gS), tS.setStart(SS, HS), tS
    }

    function bH(SS, HS, gS, tS) {
      let bS = {
        key: HS,
        code: HS,
        keyCode: gS,
        which: gS,
        cancelable: !0
      };
      tS && ({
        altKey: bS.altKey,
        ctrlKey: bS.ctrlKey,
        shiftKey: bS.shiftKey,
        metaKey: bS.metaKey
      } = tS);
      let XS = new KeyboardEvent("keydown", bS);
      XS.synthetic = !0, SS.dispatchEvent(XS);
      let xS = new KeyboardEvent("keyup", bS);
      return xS.synthetic = !0, SS.dispatchEvent(xS), XS.defaultPrevented || xS.defaultPrevented
    }

    function XH(SS) {
      return SS instanceof Window ? SS.pageYOffset > Math.max(0, SS.document.documentElement.scrollHeight - SS.innerHeight - 4) : SS.scrollTop > Math.max(1, SS.scrollHeight - SS.clientHeight - 4)
    }

    function xH(SS, HS) {
      for (let gS = SS, tS = HS;;) {
        if (3 == gS.nodeType && tS > 0) return {
          node: gS,
          offset: tS
        };
        if (1 == gS.nodeType && tS > 0) {
          if ("false" == gS.contentEditable) return null;
          gS = gS.childNodes[tS - 1], tS = TS(gS)
        } else {
          if (!gS.parentNode || FS(gS)) return null;
          tS = MS(gS), gS = gS.parentNode
        }
      }
    }

    function NH(SS, HS) {
      for (let gS = SS, tS = HS;;) {
        if (3 == gS.nodeType && tS < gS.nodeValue.length) return {
          node: gS,
          offset: tS
        };
        if (1 == gS.nodeType && tS < gS.childNodes.length) {
          if ("false" == gS.contentEditable) return null;
          gS = gS.childNodes[tS], tS = 0
        } else {
          if (!gS.parentNode || FS(gS)) return null;
          tS = MS(gS) + 1, gS = gS.parentNode
        }
      }
    }
    hS.safari && hS.safari_version >= 26 && (HH = !1);
    class qH {
      constructor(SS, HS) {
        let gS = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.node = SS, this.offset = HS, this.precise = gS
      }
      static before(SS, HS) {
        return new qH(SS.parentNode, MS(SS), HS)
      }
      static after(SS, HS) {
        return new qH(SS.parentNode, MS(SS) + 1, HS)
      }
    }
    var uH = function(SS) {
      return SS[SS.LTR = 0] = "LTR", SS[SS.RTL = 1] = "RTL", SS
    }(uH || (uH = {}));
    const IH = uH.LTR,
      fH = uH.RTL;

    function kH(SS) {
      let HS = [];
      for (let gS = 0; gS < SS.length; gS++) HS.push(1 << +SS[gS]);
      return HS
    }
    const aH = kH("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),
      KH = kH("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),
      jH = Object.create(null),
      GH = [];
    for (let Lx of ["()", "[]", "{}"]) {
      let SS = Lx.charCodeAt(0),
        HS = Lx.charCodeAt(1);
      jH[SS] = HS, jH[HS] = -SS
    }

    function CH(SS) {
      return SS <= 247 ? aH[SS] : 1424 <= SS && SS <= 1524 ? 2 : 1536 <= SS && SS <= 1785 ? KH[SS - 1536] : 1774 <= SS && SS <= 2220 ? 4 : 8192 <= SS && SS <= 8204 ? 256 : 64336 <= SS && SS <= 65023 ? 4 : 1
    }
    const nH = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
    class PH {
      get dir() {
        return this.level % 2 ? fH : IH
      }
      constructor(SS, HS, gS) {
        this.from = SS, this.to = HS, this.level = gS
      }
      side(SS, HS) {
        return this.dir == HS == SS ? this.to : this.from
      }
      forward(SS, HS) {
        return SS == (this.dir == HS)
      }
      static find(SS, HS, gS, tS) {
        let bS = -1;
        for (let XS = 0; XS < SS.length; XS++) {
          let xS = SS[XS];
          if (xS.from <= HS && xS.to >= HS) {
            if (xS.level == gS) return XS;
            (bS < 0 || (0 != tS ? tS < 0 ? xS.from < HS : xS.to > HS : SS[bS].level > xS.level)) && (bS = XS)
          }
        }
        if (bS < 0) throw new RangeError("Index out of range");
        return bS
      }
    }

    function QH(SS, HS) {
      if (SS.length != HS.length) return !1;
      for (let gS = 0; gS < SS.length; gS++) {
        let tS = SS[gS],
          bS = HS[gS];
        if (tS.from != bS.from || tS.to != bS.to || tS.direction != bS.direction || !QH(tS.inner, bS.inner)) return !1
      }
      return !0
    }
    const DH = [];

    function wH(SS, HS, gS, tS, bS, XS, xS) {
      let NS = tS % 2 ? 2 : 1;
      if (tS % 2 == bS % 2)
        for (let qS = HS, uS = 0; qS < gS;) {
          let HS = !0,
            IS = !1;
          if (uS == XS.length || qS < XS[uS].from) {
            let SS = DH[qS];
            SS != NS && (HS = !1, IS = 16 == SS)
          }
          let fS = HS || 1 != NS ? null : [],
            kS = HS ? tS : tS + 1,
            aS = qS;
          SS: for (;;)
            if (uS < XS.length && aS == XS[uS].from) {
              if (IS) break SS;
              let KS = XS[uS];
              if (!HS)
                for (let SS = KS.to, HS = uS + 1;;) {
                  if (SS == gS) break SS;
                  if (!(HS < XS.length && XS[HS].from == SS)) {
                    if (DH[SS] == NS) break SS;
                    break
                  }
                  SS = XS[HS++].to
                }
              if (uS++, fS) fS.push(KS);
              else {
                KS.from > qS && xS.push(new PH(qS, KS.from, kS)), hH(SS, KS.direction == IH != !(kS % 2) ? tS + 1 : tS, bS, KS.inner, KS.from, KS.to, xS), qS = KS.to
              }
              aS = KS.to
            } else {
              if (aS == gS || (HS ? DH[aS] != NS : DH[aS] == NS)) break;
              aS++
            } fS ? wH(SS, qS, aS, tS + 1, bS, fS, xS) : qS < aS && xS.push(new PH(qS, aS, kS)), qS = aS
        } else
          for (let qS = gS, uS = XS.length; qS > HS;) {
            let gS = !0,
              IS = !1;
            if (!uS || qS > XS[uS - 1].to) {
              let SS = DH[qS - 1];
              SS != NS && (gS = !1, IS = 16 == SS)
            }
            let fS = gS || 1 != NS ? null : [],
              kS = gS ? tS : tS + 1,
              aS = qS;
            SS: for (;;)
              if (uS && aS == XS[uS - 1].to) {
                if (IS) break SS;
                let KS = XS[--uS];
                if (!gS)
                  for (let SS = KS.from, gS = uS;;) {
                    if (SS == HS) break SS;
                    if (!gS || XS[gS - 1].to != SS) {
                      if (DH[SS - 1] == NS) break SS;
                      break
                    }
                    SS = XS[--gS].from
                  }
                if (fS) fS.push(KS);
                else {
                  KS.to < qS && xS.push(new PH(KS.to, qS, kS)), hH(SS, KS.direction == IH != !(kS % 2) ? tS + 1 : tS, bS, KS.inner, KS.from, KS.to, xS), qS = KS.from
                }
                aS = KS.from
              } else {
                if (aS == HS || (gS ? DH[aS - 1] != NS : DH[aS - 1] == NS)) break;
                aS--
              } fS ? wH(SS, aS, qS, tS + 1, bS, fS, xS) : aS < qS && xS.push(new PH(aS, qS, kS)), qS = aS
          }
    }

    function hH(SS, HS, gS, tS, bS, XS, xS) {
      let NS = HS % 2 ? 2 : 1;
      ! function(SS, HS, gS, tS, bS) {
        for (let XS = 0; XS <= tS.length; XS++) {
          let xS = XS ? tS[XS - 1].to : HS,
            NS = XS < tS.length ? tS[XS].from : gS,
            qS = XS ? 256 : bS;
          for (let HS = xS, gS = qS, tS = qS; HS < NS; HS++) {
            let bS = CH(SS.charCodeAt(HS));
            512 == bS ? bS = gS : 8 == bS && 4 == tS && (bS = 16), DH[HS] = 4 == bS ? 2 : bS, 7 & bS && (tS = bS), gS = bS
          }
          for (let SS = xS, HS = qS, tS = qS; SS < NS; SS++) {
            let bS = DH[SS];
            if (128 == bS) SS < NS - 1 && HS == DH[SS + 1] && 24 & HS ? bS = DH[SS] = HS : DH[SS] = 256;
            else if (64 == bS) {
              let bS = SS + 1;
              for (; bS < NS && 64 == DH[bS];) bS++;
              let XS = SS && 8 == HS || bS < gS && 8 == DH[bS] ? 1 == tS ? 1 : 8 : 256;
              for (let HS = SS; HS < bS; HS++) DH[HS] = XS;
              SS = bS - 1
            } else 8 == bS && 1 == tS && (DH[SS] = 1);
            HS = bS, 7 & bS && (tS = bS)
          }
        }
      }(SS, bS, XS, tS, NS),
      function(SS, HS, gS, tS, bS) {
        let XS = 1 == bS ? 2 : 1;
        for (let xS = 0, NS = 0, qS = 0; xS <= tS.length; xS++) {
          let uS = xS ? tS[xS - 1].to : HS,
            IS = xS < tS.length ? tS[xS].from : gS;
          for (let HS, gS, tS, xS = uS; xS < IS; xS++)
            if (gS = jH[HS = SS.charCodeAt(xS)])
              if (gS < 0) {
                for (let SS = NS - 3; SS >= 0; SS -= 3)
                  if (GH[SS + 1] == -gS) {
                    let HS = GH[SS + 2],
                      gS = 2 & HS ? bS : 4 & HS ? 1 & HS ? XS : bS : 0;
                    gS && (DH[xS] = DH[GH[SS]] = gS), NS = SS;
                    break
                  }
              } else {
                if (189 == GH.length) break;
                GH[NS++] = xS, GH[NS++] = HS, GH[NS++] = qS
              }
          else if (2 == (tS = DH[xS]) || 1 == tS) {
            let SS = tS == bS;
            qS = SS ? 0 : 1;
            for (let HS = NS - 3; HS >= 0; HS -= 3) {
              let gS = GH[HS + 2];
              if (2 & gS) break;
              if (SS) GH[HS + 2] |= 2;
              else {
                if (4 & gS) break;
                GH[HS + 2] |= 4
              }
            }
          }
        }
      }(SS, bS, XS, tS, NS),
      function(SS, HS, gS, tS) {
        for (let bS = 0, XS = tS; bS <= gS.length; bS++) {
          let xS = bS ? gS[bS - 1].to : SS,
            NS = bS < gS.length ? gS[bS].from : HS;
          for (let qS = xS; qS < NS;) {
            let xS = DH[qS];
            if (256 == xS) {
              let xS = qS + 1;
              for (;;)
                if (xS == NS) {
                  if (bS == gS.length) break;
                  xS = gS[bS++].to, NS = bS < gS.length ? gS[bS].from : HS
                } else {
                  if (256 != DH[xS]) break;
                  xS++
                } let uS = 1 == XS,
                IS = uS == (1 == (xS < HS ? DH[xS] : tS)) ? uS ? 1 : 2 : tS;
              for (let HS = xS, tS = bS, XS = tS ? gS[tS - 1].to : SS; HS > qS;) HS == XS && (HS = gS[--tS].from, XS = tS ? gS[tS - 1].to : SS), DH[--HS] = IS;
              qS = xS
            } else XS = xS, qS++
          }
        }
      }(bS, XS, tS, NS), wH(SS, bS, XS, HS, gS, tS, xS)
    }

    function ZH(SS, HS, gS) {
      if (!SS) return [new PH(0, 0, HS == fH ? 1 : 0)];
      if (HS == IH && !gS.length && !nH.test(SS)) return JH(SS.length);
      if (gS.length)
        for (; SS.length > DH.length;) DH[DH.length] = 256;
      let tS = [],
        bS = HS == IH ? 0 : 1;
      return hH(SS, bS, bS, gS, 0, SS.length, tS), tS
    }

    function JH(SS) {
      return [new PH(0, SS, 0)]
    }
    let OH = "";

    function dH(SS, HS, gS, bS, XS) {
      var xS;
      let NS = bS.head - SS.from,
        qS = PH.find(HS, NS, null !== (xS = bS.bidiLevel) && void 0 !== xS ? xS : -1, bS.assoc),
        uS = HS[qS],
        IS = uS.side(XS, gS);
      if (NS == IS) {
        let SS = qS += XS ? 1 : -1;
        if (SS < 0 || SS >= HS.length) return null;
        uS = HS[qS = SS], NS = uS.side(!XS, gS), IS = uS.side(XS, gS)
      }
      let fS = (0, tS.$)(SS.text, NS, uS.forward(XS, gS));
      (fS < uS.from || fS > uS.to) && (fS = IS), OH = SS.text.slice(Math.min(NS, fS), Math.max(NS, fS));
      let kS = qS == (XS ? HS.length - 1 : 0) ? null : HS[qS + (XS ? 1 : -1)];
      return kS && fS == IS && kS.level + (XS ? 0 : 1) < uS.level ? tS.i.cursor(kS.side(!XS, gS) + SS.from, kS.forward(XS, gS) ? 1 : -1, kS.level) : tS.i.cursor(fS + SS.from, uS.forward(XS, gS) ? -1 : 1, uS.level)
    }

    function cH(SS, HS, gS) {
      for (let tS = HS; tS < gS; tS++) {
        let HS = CH(SS.charCodeAt(tS));
        if (1 == HS) return IH;
        if (2 == HS || 4 == HS) return fH
      }
      return IH
    }
    const vH = tS.n.define(),
      EH = tS.n.define(),
      LH = tS.n.define(),
      YH = tS.n.define(),
      AH = tS.n.define(),
      yH = tS.n.define(),
      VH = tS.n.define(),
      iH = tS.n.define(),
      WH = tS.n.define(),
      zH = tS.n.define({
        combine: SS => SS.some((SS => SS))
      }),
      UH = tS.n.define({
        combine: SS => SS.some((SS => SS))
      }),
      pH = tS.n.define();
    class sH {
      constructor(SS, HS, gS, tS, bS) {
        let XS = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.range = SS, this.y = HS, this.x = gS, this.yMargin = tS, this.xMargin = bS, this.isSnapshot = XS
      }
      map(SS) {
        return SS.empty ? this : new sH(this.range.map(SS), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
      clip(SS) {
        return this.range.to <= SS.doc.length ? this : new sH(tS.i.cursor(SS.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
    }
    const BH = tS.G.define({
        map: (SS, HS) => SS.map(HS)
      }),
      MH = tS.G.define();

    function FH(SS, HS, gS) {
      let tS = SS.facet(YH);
      tS.length ? tS[0](HS) : window.onerror && window.onerror(String(HS), gS, void 0, void 0, HS) || (gS ? console.error(gS + ":", HS) : console.error(HS))
    }
    const RH = tS.n.define({
      combine: SS => !SS.length || SS[0]
    });
    let TH = 0;
    const oH = tS.n.define({
      combine: SS => SS.filter(((HS, gS) => {
        for (let tS = 0; tS < gS; tS++)
          if (SS[tS].plugin == HS.plugin) return !1;
        return !0
      }))
    });
    class lH {
      constructor(SS, HS, gS, tS, bS) {
        this.id = SS, this.create = HS, this.domEventHandlers = gS, this.domEventObservers = tS, this.baseExtensions = bS(this), this.extension = this.baseExtensions.concat(oH.of({
          plugin: this,
          arg: void 0
        }))
      }
      of(SS) {
        return this.baseExtensions.concat(oH.of({
          plugin: this,
          arg: SS
        }))
      }
      static define(SS, HS) {
        const {
          eventHandlers: gS,
          eventObservers: tS,
          provide: bS,
          KS: XS
        } = HS || {};
        return new lH(TH++, SS, gS, tS, (SS => {
          let HS = [];
          return XS && HS.push(Sg.of((HS => {
            let gS = HS.plugin(SS);
            return gS ? XS(gS) : LS.none
          }))), bS && HS.push(bS(SS)), HS
        }))
      }
      static fromClass(SS, HS) {
        return lH.define(((HS, gS) => new SS(HS, gS)), HS)
      }
    }
    class mH {
      constructor(SS) {
        this.spec = SS, this.mustUpdate = null, this.value = null
      }
      get plugin() {
        return this.spec && this.spec.plugin
      }
      update(SS) {
        if (this.value) {
          if (this.mustUpdate) {
            let SS = this.mustUpdate;
            if (this.mustUpdate = null, this.value.update) try {
              this.value.update(SS)
            } catch (HS) {
              if (FH(SS.state, HS, "CodeMirror plugin crashed"), this.value.destroy) try {
                this.value.destroy()
              } catch (gS) {}
              this.deactivate()
            }
          }
        } else if (this.spec) try {
          this.value = this.spec.plugin.create(SS, this.spec.arg)
        } catch (HS) {
          FH(SS.state, HS, "CodeMirror plugin crashed"), this.deactivate()
        }
        return this
      }
      destroy(SS) {
        var HS;
        if (null === (HS = this.value) || void 0 === HS ? void 0 : HS.destroy) try {
          this.value.destroy()
        } catch (gS) {
          FH(SS.state, gS, "CodeMirror plugin crashed")
        }
      }
      deactivate() {
        this.spec = this.value = null
      }
    }
    const eH = tS.n.define(),
      rH = tS.n.define(),
      Sg = tS.n.define(),
      Hg = tS.n.define(),
      gg = tS.n.define(),
      tg = tS.n.define(),
      bg = tS.n.define();

    function Xg(SS, HS) {
      let gS = SS.state.facet(bg);
      if (!gS.length) return gS;
      let bS = gS.map((HS => HS instanceof Function ? HS(SS) : HS)),
        XS = [];
      return tS.A.spans(bS, HS.from, HS.to, {
        point() {},
        span(SS, gS, tS, bS) {
          let xS = SS - HS.from,
            NS = gS - HS.from,
            qS = XS;
          for (let XS = tS.length - 1; XS >= 0; XS--, bS--) {
            let SS, gS = tS[XS].spec.bidiIsolate;
            if (null == gS && (gS = cH(HS.text, xS, NS)), bS > 0 && qS.length && (SS = qS[qS.length - 1]).to == xS && SS.direction == gS) SS.to = NS, qS = SS.inner;
            else {
              let SS = {
                from: xS,
                to: NS,
                direction: gS,
                inner: []
              };
              qS.push(SS), qS = SS.inner
            }
          }
        }
      }), XS
    }
    const xg = tS.n.define();

    function Ng(SS) {
      let HS = 0,
        gS = 0,
        tS = 0,
        bS = 0;
      for (let XS of SS.state.facet(xg)) {
        let xS = XS(SS);
        xS && (null != xS.left && (HS = Math.max(HS, xS.left)), null != xS.right && (gS = Math.max(gS, xS.right)), null != xS.top && (tS = Math.max(tS, xS.top)), null != xS.bottom && (bS = Math.max(bS, xS.bottom)))
      }
      return {
        left: HS,
        right: gS,
        top: tS,
        bottom: bS
      }
    }
    const qg = tS.n.define();
    class ug {
      constructor(SS, HS, gS, tS) {
        this.fromA = SS, this.toA = HS, this.fromB = gS, this.toB = tS
      }
      join(SS) {
        return new ug(Math.min(this.fromA, SS.fromA), Math.max(this.toA, SS.toA), Math.min(this.fromB, SS.fromB), Math.max(this.toB, SS.toB))
      }
      addToSet(SS) {
        let HS = SS.length,
          gS = this;
        for (; HS > 0; HS--) {
          let tS = SS[HS - 1];
          if (!(tS.fromA > gS.toA)) {
            if (tS.toA < gS.fromA) break;
            gS = gS.join(tS), SS.splice(HS - 1, 1)
          }
        }
        return SS.splice(HS, 0, gS), SS
      }
      static extendWithRanges(SS, HS) {
        if (0 == HS.length) return SS;
        let gS = [];
        for (let tS = 0, bS = 0, XS = 0;;) {
          let xS = tS < SS.length ? SS[tS].fromB : 1e9,
            NS = bS < HS.length ? HS[bS] : 1e9,
            qS = Math.min(xS, NS);
          if (1e9 == qS) break;
          let uS = qS + XS,
            IS = qS,
            fS = uS;
          for (;;)
            if (bS < HS.length && HS[bS] <= IS) {
              let gS = HS[bS + 1];
              bS += 2, IS = Math.max(IS, gS);
              for (let HS = tS; HS < SS.length && SS[HS].fromB <= IS; HS++) XS = SS[HS].toA - SS[HS].toB;
              fS = Math.max(fS, gS + XS)
            } else {
              if (!(tS < SS.length && SS[tS].fromB <= IS)) break;
              {
                let HS = SS[tS++];
                IS = Math.max(IS, HS.toB), fS = Math.max(fS, HS.toA), XS = HS.toA - HS.toB
              }
            } gS.push(new ug(uS, fS, qS, IS))
        }
        return gS
      }
    }
    class Ig {
      constructor(SS, HS, gS) {
        this.view = SS, this.state = HS, this.transactions = gS, this.flags = 0, this.startState = SS.state, this.changes = tS.ChangeSet.empty(this.startState.doc.length);
        for (let tS of gS) this.changes = this.changes.compose(tS.changes);
        let bS = [];
        this.changes.iterChangedRanges(((SS, HS, gS, tS) => bS.push(new ug(SS, HS, gS, tS)))), this.changedRanges = bS
      }
      static create(SS, HS, gS) {
        return new Ig(SS, HS, gS)
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
        return this.transactions.some((SS => SS.selection))
      }
      get empty() {
        return 0 == this.flags && 0 == this.transactions.length
      }
    }
    const fg = [];
    class kg {
      constructor(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.dom = SS, this.length = HS, this.flags = gS, this.parent = null, SS.cmTile = this
      }
      get breakAfter() {
        return 1 & this.flags
      }
      get children() {
        return fg
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
      sync(SS) {
        if (this.flags |= 2, 4 & this.flags) {
          this.flags &= -5;
          let SS = this.domAttrs;
          SS && function(SS, HS) {
            for (let gS = SS.attributes.length - 1; gS >= 0; gS--) {
              let tS = SS.attributes[gS].name;
              null == HS[tS] && SS.removeAttribute(tS)
            }
            for (let gS in HS) {
              let tS = HS[gS];
              "style" == gS ? SS.style.cssText = tS : SS.getAttribute(gS) != tS && SS.setAttribute(gS, tS)
            }
          }(this.dom, SS)
        }
      }
      toString() {
        return this.constructor.name + (this.children.length ? `(${this.children})` : "") + (this.breakAfter ? "#" : "")
      }
      destroy() {
        this.parent = null
      }
      setDOM(SS) {
        this.dom = SS, SS.cmTile = this
      }
      get posAtStart() {
        return this.parent ? this.parent.posBefore(this) : 0
      }
      get posAtEnd() {
        return this.posAtStart + this.length
      }
      posBefore(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.posAtStart;
        for (let gS of this.children) {
          if (gS == SS) return HS;
          HS += gS.length + gS.breakAfter
        }
        throw new RangeError("Invalid child in posBefore")
      }
      posAfter(SS) {
        return this.posBefore(SS) + SS.length
      }
      covers(SS) {
        return !0
      }
      coordsIn(SS, HS) {
        return null
      }
      domPosFor(SS, HS) {
        let gS = MS(this.dom),
          tS = this.length ? SS > 0 : HS > 0;
        return new qH(this.parent.dom, gS + (tS ? 1 : 0), 0 == SS || SS == this.length)
      }
      markDirty(SS) {
        this.flags &= -3, SS && (this.flags |= 4), this.parent && 2 & this.parent.flags && this.parent.markDirty(!1)
      }
      get overrideDOMText() {
        return null
      }
      get root() {
        for (let SS = this; SS; SS = SS.parent)
          if (SS instanceof jg) return SS;
        return null
      }
      static get(SS) {
        return SS.cmTile
      }
    }
    class ag extends kg {
      constructor(SS) {
        super(SS, 0), this._children = []
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
      append(SS) {
        this.children.push(SS), SS.parent = this
      }
      sync(SS) {
        if (2 & this.flags) return;
        super.sync(SS);
        let HS, gS = this.dom,
          tS = null,
          bS = (null === SS || void 0 === SS ? void 0 : SS.node) == gS ? SS : null,
          XS = 0;
        for (let xS of this.children) {
          if (xS.sync(SS), XS += xS.length + xS.breakAfter, HS = tS ? tS.nextSibling : gS.firstChild, bS && HS != xS.dom && (bS.written = !0), xS.dom.parentNode == gS)
            for (; HS && HS != xS.dom;) HS = Kg(HS);
          else gS.insertBefore(xS.dom, HS);
          tS = xS.dom
        }
        for (HS = tS ? tS.nextSibling : gS.firstChild, bS && HS && (bS.written = !0); HS;) HS = Kg(HS);
        this.length = XS
      }
    }

    function Kg(SS) {
      let HS = SS.nextSibling;
      return SS.parentNode.removeChild(SS), HS
    }
    class jg extends ag {
      constructor(SS, HS) {
        super(HS), this.view = SS
      }
      owns(SS) {
        for (; SS; SS = SS.parent)
          if (SS == this) return !0;
        return !1
      }
      isBlock() {
        return !0
      }
      nearest(SS) {
        for (;;) {
          if (!SS) return null;
          let HS = kg.get(SS);
          if (HS && this.owns(HS)) return HS;
          SS = SS.parentNode
        }
      }
      blockTiles(SS) {
        for (let HS = [], gS = this, tS = 0, bS = 0;;)
          if (tS == gS.children.length) {
            if (!HS.length) return;
            gS = gS.parent, gS.breakAfter && bS++, tS = HS.pop()
          } else {
            let XS = gS.children[tS++];
            if (XS instanceof Gg) HS.push(tS), gS = XS, tS = 0;
            else {
              let HS = bS + XS.length,
                gS = SS(XS, bS);
              if (void 0 !== gS) return gS;
              bS = HS + XS.breakAfter
            }
          }
      }
      resolveBlock(SS, HS) {
        let gS, tS, bS = -1,
          XS = -1;
        if (this.blockTiles(((xS, NS) => {
            let qS = NS + xS.length;
            if (SS >= NS && SS <= qS) {
              if (xS.isWidget() && HS >= -1 && HS <= 1) {
                if (32 & xS.flags) return !0;
                16 & xS.flags && (gS = void 0)
              }(NS < SS || SS == qS && (HS < -1 ? xS.length : xS.covers(1))) && (!gS || !xS.isWidget() && gS.isWidget()) && (gS = xS, bS = SS - NS), (qS > SS || SS == NS && (HS > 1 ? xS.length : xS.covers(-1))) && (!tS || !xS.isWidget() && tS.isWidget()) && (tS = xS, XS = SS - NS)
            }
          })), !gS && !tS) throw new Error("No tile at position " + SS);
        return gS && HS < 0 || !tS ? {
          tile: gS,
          offset: bS
        } : {
          tile: tS,
          offset: XS
        }
      }
    }
    class Gg extends ag {
      constructor(SS, HS) {
        super(SS), this.wrapper = HS
      }
      isBlock() {
        return !0
      }
      covers(SS) {
        return !!this.children.length && (SS < 0 ? this.children[0].covers(-1) : this.lastChild.covers(1))
      }
      get domAttrs() {
        return this.wrapper.attributes
      }
      static of (SS, HS) {
        let gS = new Gg(HS || document.createElement(SS.tagName), SS);
        return HS || (gS.flags |= 4), gS
      }
    }
    class Cg extends ag {
      constructor(SS, HS) {
        super(SS), this.attrs = HS
      }
      isLine() {
        return !0
      }
      static start(SS, HS, gS) {
        let tS = new Cg(HS || document.createElement("div"), SS);
        return HS && gS || (tS.flags |= 4), tS
      }
      get domAttrs() {
        return this.attrs
      }
      resolveInline(SS, HS, gS) {
        let tS = null,
          bS = -1,
          XS = null,
          xS = -1;
        ! function SS(NS, qS) {
          for (let uS = 0, IS = 0; uS < NS.children.length && IS <= qS; uS++) {
            let fS = NS.children[uS],
              kS = IS + fS.length;
            kS >= qS && (fS.isComposite() ? SS(fS, qS - IS) : (!XS || XS.isHidden && (HS > 0 || gS && ng(XS, fS))) && (kS > qS || 32 & fS.flags) ? (XS = fS, xS = qS - IS) : (IS < qS || 16 & fS.flags && !fS.isHidden) && (tS = fS, bS = qS - IS)), IS = kS
          }
        }(this, SS);
        let NS = (HS < 0 ? tS : XS) || tS || XS;
        return NS ? {
          tile: NS,
          offset: NS == tS ? bS : xS
        } : null
      }
      coordsIn(SS, HS) {
        let gS = this.resolveInline(SS, HS, !0);
        return gS ? gS.tile.coordsIn(Math.max(0, gS.offset), HS) : function(SS) {
          let HS = SS.dom.lastChild;
          if (!HS) return SS.dom.getBoundingClientRect();
          let gS = sS(HS);
          return gS[gS.length - 1] || null
        }(this)
      }
      domIn(SS, HS) {
        let gS = this.resolveInline(SS, HS);
        if (gS) {
          let {
            tile: SS,
            offset: tS
          } = gS;
          if (this.dom.contains(SS.dom)) return SS.isText() ? new qH(SS.dom, Math.min(SS.dom.nodeValue.length, tS)) : SS.domPosFor(tS, 16 & SS.flags ? 1 : 32 & SS.flags ? -1 : HS);
          let bS = gS.tile.parent,
            XS = !1;
          for (let HS of bS.children) {
            if (XS) return new qH(HS.dom, 0);
            HS == gS.tile && (XS = !0)
          }
        }
        return new qH(this.dom, 0)
      }
    }

    function ng(SS, HS) {
      let gS = SS.coordsIn(0, 1),
        tS = HS.coordsIn(0, 1);
      return gS && tS && tS.top < gS.bottom
    }
    class Pg extends ag {
      constructor(SS, HS) {
        super(SS), this.mark = HS
      }
      get domAttrs() {
        return this.mark.attrs
      }
      static of (SS, HS) {
        let gS = new Pg(HS || document.createElement(SS.tagName), SS);
        return HS || (gS.flags |= 4), gS
      }
    }
    class Qg extends kg {
      constructor(SS, HS) {
        super(SS, HS.length), this.text = HS
      }
      sync(SS) {
        2 & this.flags || (super.sync(SS), this.dom.nodeValue != this.text && (SS && SS.node == this.dom && (SS.written = !0), this.dom.nodeValue = this.text))
      }
      isText() {
        return !0
      }
      toString() {
        return JSON.stringify(this.text)
      }
      coordsIn(SS, HS) {
        let gS = this.dom.nodeValue.length;
        SS > gS && (SS = gS);
        let tS = SS,
          bS = SS,
          XS = 0;
        0 == SS && HS < 0 || SS == gS && HS >= 0 ? hS.chrome || hS.gecko || (SS ? (tS--, XS = 1) : bS < gS && (bS++, XS = -1)) : HS < 0 ? tS-- : bS < gS && bS++;
        let xS = tH(this.dom, tS, bS).getClientRects();
        if (!xS.length) return null;
        let NS = xS[(XS ? XS < 0 : HS >= 0) ? 0 : xS.length - 1];
        return hS.safari && !XS && 0 == NS.width && (NS = Array.prototype.find.call(xS, (SS => SS.width)) || NS), XS ? oS(NS, XS < 0) : NS || null
      }
      static of (SS, HS) {
        let gS = new Qg(HS || document.createTextNode(SS), SS);
        return HS || (gS.flags |= 2), gS
      }
    }
    class Dg extends kg {
      constructor(SS, HS, gS, tS) {
        super(SS, HS, tS), this.widget = gS
      }
      isWidget() {
        return !0
      }
      get isHidden() {
        return this.widget.isHidden
      }
      covers(SS) {
        return !(48 & this.flags) && (this.flags & (SS < 0 ? 64 : 128)) > 0
      }
      coordsIn(SS, HS) {
        return this.coordsInWidget(SS, HS, !1)
      }
      coordsInWidget(SS, HS, gS) {
        let tS = this.widget.coordsAt(this.dom, SS, HS);
        if (tS) return tS;
        if (gS) return oS(this.dom.getBoundingClientRect(), this.length ? 0 == SS : HS <= 0);
        {
          let HS = this.dom.getClientRects(),
            gS = null;
          if (!HS.length) return null;
          let tS = !!(16 & this.flags) || !(32 & this.flags) && SS > 0;
          for (let bS = tS ? HS.length - 1 : 0; gS = HS[bS], !(SS > 0 ? 0 == bS : bS == HS.length - 1 || gS.top < gS.bottom); bS += tS ? -1 : 1);
          return oS(gS, !tS)
        }
      }
      get overrideDOMText() {
        if (!this.length) return tS.L.empty;
        let {
          root: SS
        } = this;
        if (!SS) return tS.L.empty;
        let HS = this.posAtStart;
        return SS.view.state.doc.slice(HS, HS + this.length)
      }
      destroy() {
        super.destroy(), this.widget.destroy(this.dom)
      }
      static of (SS, HS, gS, tS, bS) {
        return bS || (bS = SS.toDOM(HS), SS.editable || (bS.contentEditable = "false")), new Dg(bS, gS, SS, tS)
      }
    }
    class wg extends kg {
      constructor(SS) {
        let HS = document.createElement("img");
        HS.className = "cm-widgetBuffer", HS.setAttribute("aria-hidden", "true"), super(HS, 0, SS)
      }
      get isHidden() {
        return !0
      }
      get overrideDOMText() {
        return tS.L.empty
      }
      coordsIn(SS) {
        return this.dom.getBoundingClientRect()
      }
    }
    class hg {
      constructor(SS) {
        this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = SS
      }
      advance(SS, HS, gS) {
        let {
          tile: tS,
          index: bS,
          beforeBreak: XS,
          parents: xS
        } = this;
        for (; SS || HS > 0;)
          if (tS.isComposite())
            if (XS) {
              if (!SS) break;
              gS && gS.break(), SS--, XS = !1
            } else if (bS == tS.children.length) {
          if (!SS && !xS.length) break;
          gS && gS.leave(tS), XS = !!tS.breakAfter, ({
            tile: tS,
            index: bS
          } = xS.pop()), bS++
        } else {
          let NS = tS.children[bS],
            qS = NS.breakAfter;
          !(HS > 0 ? NS.length <= SS : NS.length < SS) || gS && !1 === gS.skip(NS, 0, NS.length) && NS.isComposite ? (xS.push({
            tile: tS,
            index: bS
          }), tS = NS, bS = 0, gS && NS.isComposite() && gS.enter(NS)) : (XS = !!qS, bS++, SS -= NS.length)
        } else if (bS == tS.length) XS = !!tS.breakAfter, ({
          tile: tS,
          index: bS
        } = xS.pop()), bS++;
        else {
          if (!SS) break;
          {
            let HS = Math.min(SS, tS.length - bS);
            gS && gS.skip(tS, bS, bS + HS), SS -= HS, bS += HS
          }
        }
        return this.tile = tS, this.index = bS, this.beforeBreak = XS, this
      }
      get root() {
        return this.parents.length ? this.parents[0].tile : this.tile
      }
    }
    class Zg {
      constructor(SS, HS, gS, tS) {
        this.from = SS, this.to = HS, this.wrapper = gS, this.rank = tS
      }
    }
    class Jg {
      constructor(SS, HS, gS) {
        this.cache = SS, this.root = HS, this.blockWrappers = gS, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0
      }
      addText(SS, HS, gS, tS) {
        var bS;
        this.flushBuffer();
        let XS = this.ensureMarks(HS, gS),
          xS = XS.lastChild;
        if (xS && xS.isText() && !(8 & xS.flags) && xS.length + SS.length < 512) {
          this.cache.reused.set(xS, 2), (XS.children[XS.children.length - 1] = new Qg(xS.dom, xS.text + SS)).parent = XS
        } else XS.append(tS || Qg.of(SS, null === (bS = this.cache.find(Qg)) || void 0 === bS ? void 0 : bS.dom));
        this.pos += SS.length, this.afterWidget = null
      }
      addComposition(SS, HS) {
        let gS = this.curLine;
        gS.dom != HS.line.dom && (gS.setDOM(this.cache.reused.has(HS.line) ? Yg(HS.line.dom) : HS.line.dom), this.cache.reused.set(HS.line, 2));
        let tS = gS;
        for (let xS = HS.marks.length - 1; xS >= 0; xS--) {
          let SS = HS.marks[xS],
            gS = tS.lastChild;
          if (gS instanceof Pg && gS.mark.eq(SS.mark)) gS.dom != SS.dom && gS.setDOM(Yg(SS.dom)), tS = gS;
          else {
            if (this.cache.reused.get(SS)) {
              let HS = kg.get(SS.dom);
              HS && HS.setDOM(Yg(SS.dom))
            }
            let HS = Pg.of(SS.mark, SS.dom);
            tS.append(HS), tS = HS
          }
          this.cache.reused.set(SS, 2)
        }
        let bS = kg.get(SS.text);
        bS && this.cache.reused.set(bS, 2);
        let XS = new Qg(SS.text, SS.text.nodeValue);
        XS.flags |= 8, tS.append(XS)
      }
      addInlineWidget(SS, HS, gS) {
        let tS = this.afterWidget && 48 & SS.flags && (48 & this.afterWidget.flags) == (48 & SS.flags);
        tS || this.flushBuffer();
        let bS = this.ensureMarks(HS, gS);
        tS || 16 & SS.flags || bS.append(this.getBuffer(1)), bS.append(SS), this.pos += SS.length, this.afterWidget = SS
      }
      addMark(SS, HS, gS) {
        this.flushBuffer(), this.ensureMarks(HS, gS).append(SS), this.pos += SS.length, this.afterWidget = null
      }
      addBlockWidget(SS) {
        this.getBlockPos().append(SS), this.pos += SS.length, this.lastBlock = SS, this.endLine()
      }
      continueWidget(SS) {
        (this.afterWidget || this.lastBlock).length += SS, this.pos += SS
      }
      addLineStart(SS, HS) {
        var gS;
        SS || (SS = Lg);
        let tS = Cg.start(SS, HS || (null === (gS = this.cache.find(Cg)) || void 0 === gS ? void 0 : gS.dom), !!HS);
        this.getBlockPos().append(this.lastBlock = this.curLine = tS)
      }
      addLine(SS) {
        this.getBlockPos().append(SS), this.pos += SS.length, this.lastBlock = SS, this.endLine()
      }
      addBreak() {
        this.lastBlock.flags |= 1, this.endLine(), this.pos++
      }
      addLineStartIfNotCovered(SS) {
        this.blockPosCovered() || this.addLineStart(SS)
      }
      ensureLine(SS) {
        this.curLine || this.addLineStart(SS)
      }
      ensureMarks(SS, HS) {
        var gS;
        let tS = this.curLine;
        for (let bS = SS.length - 1; bS >= 0; bS--) {
          let XS, xS = SS[bS];
          if (HS > 0 && (XS = tS.lastChild) && XS instanceof Pg && XS.mark.eq(xS)) tS = XS, HS--;
          else {
            let SS = Pg.of(xS, null === (gS = this.cache.find(Pg, (SS => SS.mark.eq(xS)))) || void 0 === gS ? void 0 : gS.dom);
            tS.append(SS), tS = SS, HS = 0
          }
        }
        return tS
      }
      endLine() {
        if (this.curLine) {
          this.flushBuffer();
          let SS = this.curLine.lastChild;
          SS && Eg(this.curLine, !1) && ("BR" == SS.dom.nodeName || !SS.isWidget() || hS.ios && Eg(this.curLine, !0)) || this.curLine.append(this.cache.findWidget(yg, 0, 32) || new Dg(yg.toDOM(), 0, yg, 32)), this.curLine = this.afterWidget = null
        }
      }
      updateBlockWrappers() {
        this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
        for (let SS = this.wrappers.length - 1; SS >= 0; SS--) this.wrappers[SS].to < this.pos && this.wrappers.splice(SS, 1);
        for (let SS = this.blockWrappers; SS.value && SS.from <= this.pos; SS.next())
          if (SS.to >= this.pos) {
            let HS = new Zg(SS.from, SS.to, SS.value, SS.rank),
              gS = this.wrappers.length;
            for (; gS > 0 && (this.wrappers[gS - 1].rank - HS.rank || this.wrappers[gS - 1].to - HS.to) < 0;) gS--;
            this.wrappers.splice(gS, 0, HS)
          } this.wrapperPos = this.pos
      }
      getBlockPos() {
        var SS;
        this.updateBlockWrappers();
        let HS = this.root;
        for (let gS of this.wrappers) {
          let tS = HS.lastChild;
          if (gS.from < this.pos && tS instanceof Gg && tS.wrapper.eq(gS.wrapper)) HS = tS;
          else {
            let tS = Gg.of(gS.wrapper, null === (SS = this.cache.find(Gg, (SS => SS.wrapper.eq(gS.wrapper)))) || void 0 === SS ? void 0 : SS.dom);
            HS.append(tS), HS = tS
          }
        }
        return HS
      }
      blockPosCovered() {
        let SS = this.lastBlock;
        return null != SS && !SS.breakAfter && (!SS.isWidget() || (160 & SS.flags) > 0)
      }
      getBuffer(SS) {
        let HS = 2 | (SS < 0 ? 16 : 32),
          gS = this.cache.find(wg, void 0, 1);
        return gS && (gS.flags = HS), gS || new wg(HS)
      }
      flushBuffer() {
        !this.afterWidget || 32 & this.afterWidget.flags || (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null)
      }
    }
    class Og {
      constructor(SS) {
        this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = SS.iter()
      }
      skip(SS) {
        this.textOff + SS <= this.text.length ? this.textOff += SS : (this.skipCount += SS - (this.text.length - this.textOff), this.text = "", this.textOff = 0)
      }
      next(SS) {
        if (this.textOff == this.text.length) {
          let {
            value: HS,
            lineBreak: gS,
            done: tS
          } = this.cursor.next(this.skipCount);
          if (this.skipCount = 0, tS) throw new Error("Ran out of text content when drawing inline views");
          this.text = HS;
          let bS = this.textOff = Math.min(SS, HS.length);
          return gS ? null : HS.slice(0, bS)
        }
        let HS = Math.min(this.text.length, this.textOff + SS),
          gS = this.text.slice(this.textOff, HS);
        return this.textOff = HS, gS
      }
    }
    const dg = [Dg, Cg, Qg, Pg, wg, Gg, jg];
    for (let Lx = 0; Lx < dg.length; Lx++) dg[Lx].bucket = Lx;
    class cg {
      constructor(SS) {
        this.view = SS, this.buckets = dg.map((() => [])), this.index = dg.map((() => 0)), this.reused = new Map
      }
      add(SS) {
        let HS = SS.constructor.bucket,
          gS = this.buckets[HS];
        gS.length < 6 ? gS.push(SS) : gS[this.index[HS] = (this.index[HS] + 1) % 6] = SS
      }
      find(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          tS = SS.bucket,
          bS = this.buckets[tS],
          XS = this.index[tS];
        for (let xS = bS.length - 1; xS >= 0; xS--) {
          let SS = (xS + XS) % bS.length,
            NS = bS[SS];
          if ((!HS || HS(NS)) && !this.reused.has(NS)) return bS.splice(SS, 1), SS < XS && this.index[tS]--, this.reused.set(NS, gS), NS
        }
        return null
      }
      findWidget(SS, HS, gS) {
        let tS = this.buckets[0];
        if (tS.length)
          for (let bS = 0, XS = 0;; bS++) {
            if (bS == tS.length) {
              if (XS) return null;
              XS = 1, bS = 0
            }
            let xS = tS[bS];
            if (!this.reused.has(xS) && (0 == XS ? xS.widget.compare(SS) : xS.widget.constructor == SS.constructor && SS.updateDOM(xS.dom, this.view, xS.widget))) return tS.splice(bS, 1), bS < this.index[0] && this.index[0]--, xS.widget == SS && xS.length == HS && (497 & xS.flags) == gS ? (this.reused.set(xS, 1), xS) : (this.reused.set(xS, 2), new Dg(xS.dom, HS, SS, -498 & xS.flags | gS))
          }
      }
      reuse(SS) {
        return this.reused.set(SS, 1), SS
      }
      maybeReuse(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        if (!this.reused.has(SS)) return this.reused.set(SS, HS), SS.dom
      }
      clear() {
        for (let SS = 0; SS < this.buckets.length; SS++) this.buckets[SS].length = this.index[SS] = 0
      }
    }
    class vg {
      constructor(SS, HS, gS, bS, XS) {
        this.view = SS, this.KS = bS, this.disallowBlockEffectsFor = XS, this.openWidget = !1, this.openMarks = 0, this.cache = new cg(SS), this.text = new Og(SS.state.doc), this.builder = new Jg(this.cache, new jg(SS, SS.contentDOM), tS.A.iter(gS)), this.cache.reused.set(HS, 2), this.old = new hg(HS), this.reuseWalker = {
          skip: (SS, HS, gS) => {
            if (this.cache.add(SS), SS.isComposite()) return !1
          },
          enter: SS => this.cache.add(SS),
          leave: () => {},
          break: () => {}
        }
      }
      run(SS, HS) {
        let gS = HS && this.getCompositionContext(HS.text);
        for (let tS = 0, bS = 0, XS = 0;;) {
          let xS = XS < SS.length ? SS[XS++] : null,
            NS = xS ? xS.fromA : this.old.root.length;
          if (NS > tS) {
            let SS = NS - tS;
            this.preserve(SS, !XS, !xS), tS = NS, bS += SS
          }
          if (!xS) break;
          HS && xS.fromA <= HS.range.fromA && xS.toA >= HS.range.toA ? (this.forward(xS.fromA, HS.range.fromA, HS.range.fromA < HS.range.toA ? 1 : -1), this.emit(bS, HS.range.fromB), this.cache.clear(), this.builder.addComposition(HS, gS), this.text.skip(HS.range.toB - HS.range.fromB), this.forward(HS.range.fromA, xS.toA), this.emit(HS.range.toB, xS.toB)) : (this.forward(xS.fromA, xS.toA), this.emit(bS, xS.toB)), bS = xS.toB, tS = xS.toA
        }
        return this.builder.curLine && this.builder.endLine(), this.builder.root
      }
      preserve(SS, HS, gS) {
        let tS = function(SS) {
            let HS = [];
            for (let gS = SS.parents.length; gS > 1; gS--) {
              let tS = gS == SS.parents.length ? SS.tile : SS.parents[gS].tile;
              tS instanceof Pg && HS.push(tS.mark)
            }
            return HS
          }(this.old),
          bS = this.openMarks;
        this.old.advance(SS, gS ? 1 : -1, {
          skip: (SS, HS, gS) => {
            if (SS.isWidget())
              if (this.openWidget) this.builder.continueWidget(gS - HS);
              else {
                let XS = gS > 0 || HS < SS.length ? Dg.of(SS.widget, this.view, gS - HS, 496 & SS.flags, this.cache.maybeReuse(SS)) : this.cache.reuse(SS);
                256 & XS.flags ? (XS.flags &= -2, this.builder.addBlockWidget(XS)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(XS, tS, bS), bS = tS.length)
              }
            else if (SS.isText()) this.builder.ensureLine(null), HS || gS != SS.length || this.cache.reused.has(SS) ? (this.cache.add(SS), this.builder.addText(SS.text.slice(HS, gS), tS, bS)) : this.builder.addText(SS.text, tS, bS, this.cache.reuse(SS)), bS = tS.length;
            else if (SS.isLine()) SS.flags &= -2, this.cache.reused.set(SS, 1), this.builder.addLine(SS);
            else if (SS instanceof wg) this.cache.add(SS);
            else {
              if (!(SS instanceof Pg)) return !1;
              this.builder.ensureLine(null), this.builder.addMark(SS, tS, bS), this.cache.reused.set(SS, 1), bS = tS.length
            }
            this.openWidget = !1
          },
          enter: SS => {
            SS.isLine() ? this.builder.addLineStart(SS.attrs, this.cache.maybeReuse(SS)) : (this.cache.add(SS), SS instanceof Pg && tS.unshift(SS.mark)), this.openWidget = !1
          },
          leave: SS => {
            SS.isLine() ? tS.length && (tS.length = bS = 0) : SS instanceof Pg && (tS.shift(), bS = Math.min(bS, tS.length))
          },
          break: () => {
            this.builder.addBreak(), this.openWidget = !1
          }
        }), this.text.skip(SS)
      }
      emit(SS, HS) {
        let gS = null,
          bS = this.builder,
          XS = 0,
          xS = tS.A.spans(this.KS, SS, HS, {
            point: (SS, HS, tS, xS, NS, qS) => {
              if (tS instanceof yS) {
                if (this.disallowBlockEffectsFor[qS]) {
                  if (tS.block) throw new RangeError("Block decorations may not be specified via plugins");
                  if (HS > this.view.state.doc.lineAt(SS).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins")
                }
                if (XS = xS.length, NS > xS.length) bS.continueWidget(HS - SS);
                else {
                  let XS = tS.widget || (tS.block ? Ag.block : Ag.inline),
                    qS = function(SS) {
                      let HS = SS.isReplace ? (SS.startSide < 0 ? 64 : 0) | (SS.endSide > 0 ? 128 : 0) : SS.startSide > 0 ? 32 : 16;
                      SS.block && (HS |= 256);
                      return HS
                    }(tS),
                    uS = this.cache.findWidget(XS, HS - SS, qS) || Dg.of(XS, this.view, HS - SS, qS);
                  tS.block ? (tS.startSide > 0 && bS.addLineStartIfNotCovered(gS), bS.addBlockWidget(uS)) : (bS.ensureLine(gS), bS.addInlineWidget(uS, xS, NS))
                }
                gS = null
              } else gS = function(SS, HS) {
                let gS = HS.spec.attributes,
                  tS = HS.spec.class;
                if (!gS && !tS) return SS;
                SS || (SS = {
                  class: "cm-line"
                });
                gS && ZS(gS, SS);
                tS && (SS.class += " " + tS);
                return SS
              }(gS, tS);
              HS > SS && this.text.skip(HS - SS)
            },
            span: (SS, HS, tS, XS) => {
              for (let xS = SS; xS < HS;) {
                let NS = this.text.next(Math.min(512, HS - xS));
                null == NS ? (bS.addLineStartIfNotCovered(gS), bS.addBreak(), xS++) : (bS.ensureLine(gS), bS.addText(NS, tS, xS == SS ? XS : tS.length), xS += NS.length), gS = null
              }
            }
          });
        bS.addLineStartIfNotCovered(gS), this.openWidget = xS > XS, this.openMarks = xS
      }
      forward(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        HS - SS <= 10 ? this.old.advance(HS - SS, gS, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(HS - SS - 10, -1), this.old.advance(5, gS, this.reuseWalker))
      }
      getCompositionContext(SS) {
        let HS = [],
          gS = null;
        for (let tS = SS.parentNode;; tS = tS.parentNode) {
          let SS = kg.get(tS);
          if (tS == this.view.contentDOM) break;
          SS instanceof Pg ? HS.push(SS) : (null === SS || void 0 === SS ? void 0 : SS.isLine()) ? gS = SS : SS instanceof Gg || ("DIV" != tS.nodeName || gS || tS == this.view.contentDOM ? gS || HS.push(Pg.of(new YS({
            tagName: tS.nodeName.toLowerCase(),
            attributes: cS(tS)
          }), tS)) : gS = new Cg(tS, Lg))
        }
        return {
          line: gS,
          marks: HS
        }
      }
    }

    function Eg(SS, HS) {
      let gS = SS => {
        for (let tS of SS.children)
          if ((HS ? tS.isText() : tS.length) || gS(tS)) return !0;
        return !1
      };
      return gS(SS)
    }
    const Lg = {
      class: "cm-line"
    };

    function Yg(SS) {
      let HS = kg.get(SS);
      return HS && HS.setDOM(SS.cloneNode()), SS
    }
    class Ag extends vS {
      constructor(SS) {
        super(), this.tag = SS
      }
      eq(SS) {
        return SS.tag == this.tag
      }
      toDOM() {
        return document.createElement(this.tag)
      }
      updateDOM(SS) {
        return SS.nodeName.toLowerCase() == this.tag
      }
      get isHidden() {
        return !0
      }
    }
    Ag.inline = new Ag("span"), Ag.block = new Ag("div");
    const yg = new class extends vS {
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
    class Vg {
      constructor(SS) {
        this.view = SS, this.KS = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = LS.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new jg(SS, SS.contentDOM), this.updateInner([new ug(0, 0, 0, SS.state.doc.length)], null)
      }
      update(SS) {
        var HS;
        let gS = SS.changedRanges;
        this.minWidth > 0 && gS.length && (gS.every((SS => {
          let {
            fromA: HS,
            toA: gS
          } = SS;
          return gS < this.minWidthFrom || HS > this.minWidthTo
        })) ? (this.minWidthFrom = SS.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = SS.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(SS);
        let bS = -1;
        this.view.inputState.composing >= 0 && !this.view.observer.editContext && ((null === (HS = this.domChanged) || void 0 === HS ? void 0 : HS.newSel) ? bS = this.domChanged.newSel.head : function(SS, HS) {
          let gS = !1;
          HS && SS.iterChangedRanges(((SS, tS) => {
            SS < HS.to && tS > HS.from && (gS = !0)
          }));
          return gS
        }(SS.changes, this.hasComposition) || SS.selectionSet || (bS = SS.state.selection.main.head));
        let XS = bS > -1 ? function(SS, HS, gS) {
          let tS = Wg(SS, gS);
          if (!tS) return null;
          let {
            node: bS,
            from: XS,
            to: xS
          } = tS, NS = bS.nodeValue;
          if (/[\n\r]/.test(NS)) return null;
          if (SS.state.doc.sliceString(tS.from, tS.to) != NS) return null;
          let qS = HS.invertedDesc;
          return {
            range: new ug(qS.mapPos(XS), qS.mapPos(xS), XS, xS),
            text: bS
          }
        }(this.view, SS.changes, bS) : null;
        if (this.domChanged = null, this.hasComposition) {
          let {
            from: HS,
            to: tS
          } = this.hasComposition;
          gS = new ug(HS, tS, SS.changes.mapPos(HS, -1), SS.changes.mapPos(tS, 1)).addToSet(gS.slice())
        }
        this.hasComposition = XS ? {
          from: XS.range.fromB,
          to: XS.range.toB
        } : null, (hS.ie || hS.chrome) && !XS && SS && SS.state.doc.lines != SS.startState.doc.lines && (this.forceSelection = !0);
        let xS = this.KS,
          NS = this.blockWrappers;
        this.updateDeco();
        let qS = function(SS, HS, gS) {
          let bS = new zg;
          return tS.A.compare(SS, HS, gS, bS), bS.changes
        }(xS, this.KS, SS.changes);
        qS.length && (gS = ug.extendWithRanges(gS, qS));
        let uS = function(SS, HS, gS) {
          let bS = new Ug;
          return tS.A.compare(SS, HS, gS, bS), bS.changes
        }(NS, this.blockWrappers, SS.changes);
        return uS.length && (gS = ug.extendWithRanges(gS, uS)), XS && !gS.some((SS => SS.fromA <= XS.range.fromA && SS.toA >= XS.range.toA)) && (gS = XS.range.addToSet(gS.slice())), !(2 & this.tile.flags && 0 == gS.length) && (this.updateInner(gS, XS), SS.transactions.length && (this.lastUpdate = Date.now()), !0)
      }
      updateInner(SS, HS) {
        this.view.viewState.mustMeasureContent = !0;
        let {
          observer: gS
        } = this.view;
        gS.ignore((() => {
          if (HS || SS.length) {
            let gS = this.tile,
              tS = new vg(this.view, gS, this.blockWrappers, this.KS, this.dynamicDecorationMap);
            HS && kg.get(HS.text) && tS.cache.reused.set(kg.get(HS.text), 2), this.tile = tS.run(SS, HS), ig(gS, tS.cache.reused)
          }
          this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
          let tS = hS.chrome || hS.ios ? {
            node: gS.selectionRange.focusNode,
            written: !1
          } : void 0;
          this.tile.sync(tS), !tS || !tS.written && gS.selectionRange.focusNode == tS.node && this.tile.dom.contains(tS.node) || (this.forceSelection = !0), this.tile.dom.style.height = ""
        }));
        let tS = [];
        if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
          for (let bS of this.tile.children) bS.isWidget() && bS.widget instanceof pg && tS.push(bS.dom);
        gS.updateGaps(tS)
      }
      updateEditContextFormatting(SS) {
        this.editContextFormatting = this.editContextFormatting.map(SS.changes);
        for (let HS of SS.transactions)
          for (let SS of HS.effects) SS.is(MH) && (this.editContextFormatting = SS.value)
      }
      updateSelection() {
        let SS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this.view.observer.selectionRange.focusNode || this.view.observer.readSelectionRange();
        let {
          dom: HS
        } = this.tile, gS = this.view.root.activeElement, tS = gS == HS, bS = !tS && !(this.view.state.facet(RH) || HS.tabIndex > -1) && pS(HS, this.view.observer.selectionRange) && !(gS && HS.contains(gS));
        if (!(tS || SS || bS)) return;
        let XS = this.forceSelection;
        this.forceSelection = !1;
        let xS, NS, qS = this.view.state.selection.main;
        if (qS.empty ? NS = xS = this.inlineDOMNearPos(qS.anchor, qS.assoc || 1) : (NS = this.inlineDOMNearPos(qS.head, qS.head == qS.from ? 1 : -1), xS = this.inlineDOMNearPos(qS.anchor, qS.anchor == qS.from ? 1 : -1)), hS.gecko && qS.empty && !this.hasComposition && (1 == (uS = xS).node.nodeType && uS.node.firstChild && (0 == uS.offset || "false" == uS.node.childNodes[uS.offset - 1].contentEditable) && (uS.offset == uS.node.childNodes.length || "false" == uS.node.childNodes[uS.offset].contentEditable))) {
          let SS = document.createTextNode("");
          this.view.observer.ignore((() => xS.node.insertBefore(SS, xS.node.childNodes[xS.offset] || null))), xS = NS = new qH(SS, 0), XS = !0
        }
        var uS;
        let IS = this.view.observer.selectionRange;
        !XS && IS.focusNode && (BS(xS.node, xS.offset, IS.anchorNode, IS.anchorOffset) && BS(NS.node, NS.offset, IS.focusNode, IS.focusOffset) || this.suppressWidgetCursorChange(IS, qS)) || (this.view.observer.ignore((() => {
          hS.android && hS.chrome && HS.contains(IS.focusNode) && function(SS, HS) {
            for (let gS = SS; gS && gS != HS; gS = gS.assignedSlot || gS.parentNode)
              if (1 == gS.nodeType && "false" == gS.contentEditable) return !0;
            return !1
          }(IS.focusNode, HS) && (HS.blur(), HS.focus({
            preventScroll: !0
          }));
          let SS = zS(this.view.root);
          if (SS)
            if (qS.empty) {
              if (hS.gecko) {
                let SS = (tS = xS.node, XS = xS.offset, 1 != tS.nodeType ? 0 : (XS && "false" == tS.childNodes[XS - 1].contentEditable ? 1 : 0) | (XS < tS.childNodes.length && "false" == tS.childNodes[XS].contentEditable ? 2 : 0));
                if (SS && 3 != SS) {
                  let HS = (1 == SS ? xH : NH)(xS.node, xS.offset);
                  HS && (xS = new qH(HS.node, HS.offset))
                }
              }
              SS.collapse(xS.node, xS.offset), null != qS.bidiLevel && void 0 !== SS.caretBidiLevel && (SS.caretBidiLevel = qS.bidiLevel)
            } else if (SS.extend) {
            SS.collapse(xS.node, xS.offset);
            try {
              SS.extend(NS.node, NS.offset)
            } catch (uS) {}
          } else {
            let HS = document.createRange();
            qS.anchor > qS.head && ([xS, NS] = [NS, xS]), HS.setEnd(NS.node, NS.offset), HS.setStart(xS.node, xS.offset), SS.removeAllRanges(), SS.addRange(HS)
          } else;
          var tS, XS;
          bS && this.view.root.activeElement == HS && (HS.blur(), gS && gS.focus())
        })), this.view.observer.setSelectionRange(xS, NS)), this.impreciseAnchor = xS.precise ? null : new qH(IS.anchorNode, IS.anchorOffset), this.impreciseHead = NS.precise ? null : new qH(IS.focusNode, IS.focusOffset)
      }
      suppressWidgetCursorChange(SS, HS) {
        return this.hasComposition && HS.empty && BS(SS.focusNode, SS.focusOffset, SS.anchorNode, SS.anchorOffset) && this.posFromDOM(SS.focusNode, SS.focusOffset) == HS.head
      }
      enforceCursorAssoc() {
        if (this.hasComposition) return;
        let {
          view: SS
        } = this, HS = SS.state.selection.main, gS = zS(SS.root), {
          anchorNode: tS,
          anchorOffset: bS
        } = SS.observer.selectionRange;
        if (!gS || !HS.empty || !HS.assoc || !gS.modify) return;
        let XS = this.lineAt(HS.head, HS.assoc);
        if (!XS) return;
        let xS = XS.posAtStart;
        if (HS.head == xS || HS.head == xS + XS.length) return;
        let NS = this.coordsAt(HS.head, -1),
          qS = this.coordsAt(HS.head, 1);
        if (!NS || !qS || NS.bottom > qS.top) return;
        let uS = this.domAtPos(HS.head + HS.assoc, HS.assoc);
        gS.collapse(uS.node, uS.offset), gS.modify("move", HS.assoc < 0 ? "forward" : "backward", "lineboundary"), SS.observer.readSelectionRange();
        let IS = SS.observer.selectionRange;
        SS.docView.posFromDOM(IS.anchorNode, IS.anchorOffset) != HS.from && gS.collapse(tS, bS)
      }
      posFromDOM(SS, HS) {
        let gS = this.tile.nearest(SS);
        if (!gS) return 2 & this.tile.dom.compareDocumentPosition(SS) ? 0 : this.view.state.doc.length;
        let tS = gS.posAtStart;
        if (!gS.isComposite()) return gS.isText() ? SS == gS.dom ? tS + HS : tS + (HS ? gS.length : 0) : tS;
        {
          let bS;
          if (SS == gS.dom) bS = gS.dom.childNodes[HS];
          else {
            let tS = 0 == TS(SS) ? 0 : 0 == HS ? -1 : 1;
            for (;;) {
              let HS = SS.parentNode;
              if (HS == gS.dom) break;
              0 == tS && HS.firstChild != HS.lastChild && (tS = SS == HS.firstChild ? -1 : 1), SS = HS
            }
            bS = tS < 0 ? SS : SS.nextSibling
          }
          if (bS == gS.dom.firstChild) return tS;
          for (; bS && !kg.get(bS);) bS = bS.nextSibling;
          if (!bS) return tS + gS.length;
          for (let SS = 0, HS = tS;; SS++) {
            let tS = gS.children[SS];
            if (tS.dom == bS) return HS;
            HS += tS.length + tS.breakAfter
          }
        }
      }
      domAtPos(SS, HS) {
        let {
          tile: gS,
          offset: tS
        } = this.tile.resolveBlock(SS, HS);
        return gS.isWidget() ? gS.domPosFor(SS, HS) : gS.domIn(tS, HS)
      }
      inlineDOMNearPos(SS, HS) {
        let gS, tS, bS = -1,
          XS = !1,
          xS = -1,
          NS = !1;
        return this.tile.blockTiles(((HS, qS) => {
          if (HS.isWidget()) {
            if (32 & HS.flags && qS >= SS) return !0;
            16 & HS.flags && (XS = !0)
          } else {
            let uS = qS + HS.length;
            if (qS <= SS && (gS = HS, bS = SS - qS, XS = uS < SS), uS >= SS && !tS && (tS = HS, xS = SS - qS, NS = qS > SS), qS > SS && tS) return !0
          }
        })), gS || tS ? (XS && tS ? gS = null : NS && gS && (tS = null), gS && HS < 0 || !tS ? gS.domIn(bS, HS) : tS.domIn(xS, HS)) : this.domAtPos(SS, HS)
      }
      coordsAt(SS, HS) {
        let {
          tile: gS,
          offset: tS
        } = this.tile.resolveBlock(SS, HS);
        return gS.isWidget() ? gS.widget instanceof pg ? null : gS.coordsInWidget(tS, HS, !0) : gS.coordsIn(tS, HS)
      }
      lineAt(SS, HS) {
        let {
          tile: gS
        } = this.tile.resolveBlock(SS, HS);
        return gS.isLine() ? gS : null
      }
      coordsForChar(SS) {
        let {
          tile: HS,
          offset: gS
        } = this.tile.resolveBlock(SS, 1);
        if (!HS.isLine()) return null;
        return function SS(HS, gS) {
          if (HS.isComposite())
            for (let tS of HS.children) {
              if (tS.length >= gS) {
                let HS = SS(tS, gS);
                if (HS) return HS
              }
              if ((gS -= tS.length) < 0) break
            } else if (HS.isText() && gS < HS.length) {
              let SS = (0, tS.$)(HS.text, gS);
              if (SS == gS) return null;
              let bS = tH(HS.dom, gS, SS).getClientRects();
              for (let HS = 0; HS < bS.length; HS++) {
                let SS = bS[HS];
                if (HS == bS.length - 1 || SS.top < SS.bottom && SS.left < SS.right) return SS
              }
            } return null
        }(HS, gS)
      }
      measureVisibleLineHeights(SS) {
        let HS = [],
          {
            from: gS,
            to: tS
          } = SS,
          bS = this.view.contentDOM.clientWidth,
          XS = bS > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
          xS = -1,
          NS = this.view.textDirection == uH.LTR,
          qS = 0,
          uS = (SS, IS, fS) => {
            for (let kS = 0; kS < SS.children.length && !(IS > tS); kS++) {
              let tS = SS.children[kS],
                aS = IS + tS.length,
                KS = tS.dom.getBoundingClientRect(),
                {
                  height: jS
                } = KS;
              if (fS && !kS && (qS += KS.top - fS.top), tS instanceof Gg) aS > gS && uS(tS, IS, KS);
              else if (IS >= gS && (qS > 0 && HS.push(-qS), HS.push(jS + qS), qS = 0, XS)) {
                let SS = tS.dom.lastChild,
                  HS = SS ? sS(SS) : [];
                if (HS.length) {
                  let SS = HS[HS.length - 1],
                    gS = NS ? SS.right - KS.left : KS.right - SS.left;
                  gS > xS && (xS = gS, this.minWidth = bS, this.minWidthFrom = IS, this.minWidthTo = aS)
                }
              }
              fS && kS == SS.children.length - 1 && (qS += fS.bottom - KS.bottom), IS = aS + tS.breakAfter
            }
          };
        return uS(this.tile, 0, null), HS
      }
      textDirectionAt(SS) {
        let {
          tile: HS
        } = this.tile.resolveBlock(SS, 1);
        return "rtl" == getComputedStyle(HS.dom).direction ? uH.RTL : uH.LTR
      }
      measureTextSize() {
        let SS = this.tile.blockTiles((SS => {
          if (SS.isLine() && SS.children.length && SS.length <= 20) {
            let HS, gS = 0;
            for (let tS of SS.children) {
              if (!tS.isText() || /[^ -~]/.test(tS.text)) return;
              let SS = sS(tS.dom);
              if (1 != SS.length) return;
              gS += SS[0].width, HS = SS[0].height
            }
            if (gS) return {
              lineHeight: SS.dom.getBoundingClientRect().height,
              charWidth: gS / SS.length,
              textHeight: HS
            }
          }
        }));
        if (SS) return SS;
        let HS, gS, tS, bS = document.createElement("div");
        return bS.className = "cm-line", bS.style.width = "99999px", bS.style.position = "absolute", bS.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore((() => {
          this.tile.dom.appendChild(bS);
          let SS = sS(bS.firstChild)[0];
          HS = bS.getBoundingClientRect().height, gS = SS && SS.width ? SS.width / 27 : 7, tS = SS && SS.height ? SS.height : HS, bS.remove()
        })), {
          lineHeight: HS,
          charWidth: gS,
          textHeight: tS
        }
      }
      computeBlockGapDeco() {
        let SS = [],
          HS = this.view.viewState;
        for (let gS = 0, tS = 0;; tS++) {
          let bS = tS == HS.viewports.length ? null : HS.viewports[tS],
            XS = bS ? bS.from - 1 : this.view.state.doc.length;
          if (XS > gS) {
            let tS = (HS.lineBlockAt(XS).bottom - HS.lineBlockAt(gS).top) / this.view.scaleY;
            SS.push(LS.replace({
              widget: new pg(tS),
              block: !0,
              inclusive: !0,
              isBlockGap: !0
            }).range(gS, XS))
          }
          if (!bS) break;
          gS = bS.to + 1
        }
        return LS.set(SS)
      }
      updateDeco() {
        let SS = 1,
          HS = this.view.state.facet(Sg).map((HS => (this.dynamicDecorationMap[SS++] = "function" == typeof HS) ? HS(this.view) : HS)),
          gS = !1,
          bS = this.view.state.facet(gg).map(((SS, HS) => {
            let tS = "function" == typeof SS;
            return tS && (gS = !0), tS ? SS(this.view) : SS
          }));
        for (bS.length && (this.dynamicDecorationMap[SS++] = gS, HS.push(tS.A.join(bS))), this.KS = [this.editContextFormatting, ...HS, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; SS < this.KS.length;) this.dynamicDecorationMap[SS++] = !1;
        this.blockWrappers = this.view.state.facet(Hg).map((SS => "function" == typeof SS ? SS(this.view) : SS))
      }
      scrollIntoView(SS) {
        var HS;
        if (SS.isSnapshot) {
          let HS = this.view.viewState.lineBlockAt(SS.range.head);
          return this.view.scrollDOM.scrollTop = HS.top - SS.yMargin, void(this.view.scrollDOM.scrollLeft = SS.xMargin)
        }
        for (let IS of this.view.state.facet(pH)) try {
          if (IS(this.view, SS.range, SS)) return !0
        } catch (uS) {
          FH(this.view.state, uS, "scroll handler")
        }
        let gS, {
            range: tS
          } = SS,
          bS = this.coordsAt(tS.head, null !== (HS = tS.assoc) && void 0 !== HS ? HS : tS.empty ? 0 : tS.head > tS.anchor ? -1 : 1);
        if (!bS) return;
        !tS.empty && (gS = this.coordsAt(tS.anchor, tS.anchor > tS.head ? -1 : 1)) && (bS = {
          left: Math.min(bS.left, gS.left),
          top: Math.min(bS.top, gS.top),
          right: Math.max(bS.right, gS.right),
          bottom: Math.max(bS.bottom, gS.bottom)
        });
        let XS = Ng(this.view),
          xS = {
            left: bS.left - XS.left,
            top: bS.top - XS.top,
            right: bS.right + XS.right,
            bottom: bS.bottom + XS.bottom
          },
          {
            offsetWidth: NS,
            offsetHeight: qS
          } = this.view.scrollDOM;
        if (function(SS, HS, gS, tS, bS, XS, xS, NS) {
            let qS = SS.ownerDocument,
              uS = qS.defaultView || window;
            for (let IS = SS, fS = !1; IS && !fS;)
              if (1 == IS.nodeType) {
                let SS, kS = IS == qS.body,
                  aS = 1,
                  KS = 1;
                if (kS) SS = lS(uS);
                else {
                  if (/^(fixed|sticky)$/.test(getComputedStyle(IS).position) && (fS = !0), IS.scrollHeight <= IS.clientHeight && IS.scrollWidth <= IS.clientWidth) {
                    IS = IS.assignedSlot || IS.parentNode;
                    continue
                  }
                  let HS = IS.getBoundingClientRect();
                  ({
                    scaleX: aS,
                    scaleY: KS
                  } = mS(IS, HS)), SS = {
                    left: HS.left,
                    right: HS.left + IS.clientWidth * aS,
                    top: HS.top,
                    bottom: HS.top + IS.clientHeight * KS
                  }
                }
                let jS = 0,
                  GS = 0;
                if ("nearest" == bS) HS.top < SS.top + xS ? (GS = HS.top - (SS.top + xS), gS > 0 && HS.bottom > SS.bottom + GS && (GS = HS.bottom - SS.bottom + xS)) : HS.bottom > SS.bottom - xS && (GS = HS.bottom - SS.bottom + xS, gS < 0 && HS.top - GS < SS.top && (GS = HS.top - (SS.top + xS)));
                else {
                  let tS = HS.bottom - HS.top,
                    XS = SS.bottom - SS.top;
                  GS = ("center" == bS && tS <= XS ? HS.top + tS / 2 - XS / 2 : "start" == bS || "center" == bS && gS < 0 ? HS.top - xS : HS.bottom - XS + xS) - SS.top
                }
                if ("nearest" == tS ? HS.left < SS.left + XS ? (jS = HS.left - (SS.left + XS), gS > 0 && HS.right > SS.right + jS && (jS = HS.right - SS.right + XS)) : HS.right > SS.right - XS && (jS = HS.right - SS.right + XS, gS < 0 && HS.left < SS.left + jS && (jS = HS.left - (SS.left + XS))) : jS = ("center" == tS ? HS.left + (HS.right - HS.left) / 2 - (SS.right - SS.left) / 2 : "start" == tS == NS ? HS.left - XS : HS.right - (SS.right - SS.left) + XS) - SS.left, jS || GS)
                  if (kS) uS.scrollBy(jS, GS);
                  else {
                    let SS = 0,
                      gS = 0;
                    if (GS) {
                      let SS = IS.scrollTop;
                      IS.scrollTop += GS / KS, gS = (IS.scrollTop - SS) * KS
                    }
                    if (jS) {
                      let HS = IS.scrollLeft;
                      IS.scrollLeft += jS / aS, SS = (IS.scrollLeft - HS) * aS
                    }
                    HS = {
                      left: HS.left - SS,
                      top: HS.top - gS,
                      right: HS.right - SS,
                      bottom: HS.bottom - gS
                    }, SS && Math.abs(SS - jS) < 1 && (tS = "nearest"), gS && Math.abs(gS - GS) < 1 && (bS = "nearest")
                  } if (kS) break;
                (HS.top < SS.top || HS.bottom > SS.bottom || HS.left < SS.left || HS.right > SS.right) && (HS = {
                  left: Math.max(HS.left, SS.left),
                  right: Math.min(HS.right, SS.right),
                  top: Math.max(HS.top, SS.top),
                  bottom: Math.min(HS.bottom, SS.bottom)
                }), IS = IS.assignedSlot || IS.parentNode
              } else {
                if (11 != IS.nodeType) break;
                IS = IS.host
              }
          }(this.view.scrollDOM, xS, tS.head < tS.anchor ? -1 : 1, SS.x, SS.y, Math.max(Math.min(SS.xMargin, NS), -NS), Math.max(Math.min(SS.yMargin, qS), -qS), this.view.textDirection == uH.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (bS.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || bS.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
          let SS = this.view.docView.lineAt(tS.head, 1);
          SS && SS.dom.scrollIntoView({
            block: "nearest"
          })
        }
      }
      lineHasWidget(SS) {
        let HS = SS => SS.isWidget() || SS.children.some(HS);
        return HS(this.tile.resolveBlock(SS, 1).tile)
      }
      destroy() {
        ig(this.tile)
      }
    }

    function ig(SS, HS) {
      let gS = null === HS || void 0 === HS ? void 0 : HS.get(SS);
      if (1 != gS) {
        null == gS && SS.destroy();
        for (let gS of SS.children) ig(gS, HS)
      }
    }

    function Wg(SS, HS) {
      let gS = SS.observer.selectionRange;
      if (!gS.focusNode) return null;
      let tS = xH(gS.focusNode, gS.focusOffset),
        bS = NH(gS.focusNode, gS.focusOffset),
        XS = tS || bS;
      if (bS && tS && bS.node != tS.node) {
        let HS = kg.get(bS.node);
        if (!HS || HS.isText() && HS.text != bS.node.nodeValue) XS = bS;
        else if (SS.docView.lastCompositionAfterCursor) {
          let SS = kg.get(tS.node);
          !SS || SS.isText() && SS.text != tS.node.nodeValue || (XS = bS)
        }
      }
      if (SS.docView.lastCompositionAfterCursor = XS != tS, !XS) return null;
      let xS = HS - XS.offset;
      return {
        from: xS,
        to: xS + XS.node.nodeValue.length,
        node: XS.node
      }
    }
    let zg = class {
      constructor() {
        this.changes = []
      }
      compareRange(SS, HS) {
        iS(SS, HS, this.changes)
      }
      comparePoint(SS, HS) {
        iS(SS, HS, this.changes)
      }
      boundChange(SS) {
        iS(SS, SS, this.changes)
      }
    };
    class Ug {
      constructor() {
        this.changes = []
      }
      compareRange(SS, HS) {
        iS(SS, HS, this.changes)
      }
      comparePoint() {}
      boundChange(SS) {
        iS(SS, SS, this.changes)
      }
    }
    class pg extends vS {
      constructor(SS) {
        super(), this.height = SS
      }
      toDOM() {
        let SS = document.createElement("div");
        return SS.className = "cm-gap", this.updateDOM(SS), SS
      }
      eq(SS) {
        return SS.height == this.height
      }
      updateDOM(SS) {
        return SS.style.height = this.height + "px", !0
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

    function sg(SS, HS, gS) {
      let tS = SS.lineBlockAt(HS);
      if (Array.isArray(tS.type)) {
        let SS;
        for (let bS of tS.type) {
          if (bS.from > HS) break;
          if (!(bS.to < HS)) {
            if (bS.from < HS && bS.to > HS) return bS;
            SS && (bS.type != ES.Text || SS.type == bS.type && !(gS < 0 ? bS.from < HS : bS.to > HS)) || (SS = bS)
          }
        }
        return SS || tS
      }
      return tS
    }

    function Bg(SS, HS, gS, tS) {
      let bS = SS.state.doc.lineAt(HS.head),
        XS = SS.bidiSpans(bS),
        xS = SS.textDirectionAt(bS.from);
      for (let NS = HS, qS = null;;) {
        let HS = dH(bS, XS, xS, NS, gS),
          uS = OH;
        if (!HS) {
          if (bS.number == (gS ? SS.state.doc.lines : 1)) return NS;
          uS = "\n", bS = SS.state.doc.line(bS.number + (gS ? 1 : -1)), XS = SS.bidiSpans(bS), HS = SS.visualLineSide(bS, !gS)
        }
        if (qS) {
          if (!qS(uS)) return NS
        } else {
          if (!tS) return HS;
          qS = tS(uS)
        }
        NS = HS
      }
    }

    function Mg(SS, HS, gS) {
      for (;;) {
        let tS = 0;
        for (let bS of SS) bS.between(HS - 1, HS + 1, ((SS, bS, XS) => {
          if (HS > SS && HS < bS) {
            let XS = tS || gS || (HS - SS < bS - HS ? -1 : 1);
            HS = XS < 0 ? SS : bS, tS = XS
          }
        }));
        if (!tS) return HS
      }
    }

    function Fg(SS, HS) {
      let gS = null;
      for (let bS = 0; bS < HS.HG.length; bS++) {
        let XS = HS.HG[bS],
          xS = null;
        if (XS.empty) {
          let HS = Mg(SS, XS.from, 0);
          HS != XS.from && (xS = tS.i.cursor(HS, -1))
        } else {
          let HS = Mg(SS, XS.from, -1),
            gS = Mg(SS, XS.to, 1);
          HS == XS.from && gS == XS.to || (xS = tS.i.range(XS.from == XS.anchor ? HS : gS, XS.from == XS.head ? HS : gS))
        }
        xS && (gS || (gS = HS.HG.slice()), gS[bS] = xS)
      }
      return gS ? tS.i.create(gS, HS.mainIndex) : HS
    }

    function Rg(SS, HS, gS) {
      let bS = Mg(SS.state.facet(tg).map((HS => HS(SS))), gS.from, HS.head > gS.from ? -1 : 1);
      return bS == gS.from ? gS : tS.i.cursor(bS, bS < gS.from ? 1 : -1)
    }
    class Tg {
      constructor(SS, HS) {
        this.pos = SS, this.assoc = HS
      }
    }

    function og(SS, HS, gS, bS) {
      let XS, xS = SS.contentDOM.getBoundingClientRect(),
        NS = xS.top + SS.viewState.paddingTop,
        {
          x: qS,
          y: uS
        } = HS,
        IS = uS - NS;
      for (;;) {
        if (IS < 0) return new Tg(0, 1);
        if (IS > SS.viewState.docHeight) return new Tg(SS.state.doc.length, -1);
        if (XS = SS.elementAtHeight(IS), null == bS) break;
        if (XS.type == ES.Text) {
          if (bS < 0 ? XS.to < SS.viewport.from : XS.from > SS.viewport.to) break;
          let HS = SS.docView.coordsAt(bS < 0 ? XS.from : XS.to, bS > 0 ? -1 : 1);
          if (HS && (bS < 0 ? HS.top <= IS + NS : HS.bottom >= IS + NS)) break
        }
        let HS = SS.viewState.heightOracle.textHeight / 2;
        IS = bS > 0 ? XS.bottom + HS : XS.top - HS
      }
      if (SS.viewport.from >= XS.to || SS.viewport.to <= XS.from) {
        if (gS) return null;
        if (XS.type == ES.Text) {
          let HS = function(SS, HS, gS, bS, XS) {
            let xS = Math.round((bS - HS.left) * SS.defaultCharacterWidth);
            if (SS.lineWrapping && gS.height > 1.5 * SS.defaultLineHeight) {
              let HS = SS.viewState.heightOracle.textHeight;
              xS += Math.floor((XS - gS.top - .5 * (SS.defaultLineHeight - HS)) / HS) * SS.viewState.heightOracle.lineLength
            }
            let NS = SS.state.sliceDoc(gS.from, gS.to);
            return gS.from + (0, tS.ab)(NS, xS, SS.state.tabSize)
          }(SS, xS, XS, qS, uS);
          return new Tg(HS, HS == XS.from ? 1 : -1)
        }
      }
      if (XS.type != ES.Text) return IS < (XS.top + XS.bottom) / 2 ? new Tg(XS.from, 1) : new Tg(XS.to, -1);
      let fS = SS.docView.lineAt(XS.from, 2);
      return fS && fS.length == XS.length || (fS = SS.docView.lineAt(XS.from, -2)), new lg(SS, qS, uS, SS.textDirectionAt(XS.from)).scanTile(fS, XS.from)
    }
    class lg {
      constructor(SS, HS, gS, tS) {
        this.view = SS, this.x = HS, this.y = gS, this.baseDir = tS, this.line = null, this.spans = null
      }
      bidiSpansAt(SS) {
        return (!this.line || this.line.from > SS || this.line.to < SS) && (this.line = this.view.state.doc.lineAt(SS), this.spans = this.view.bidiSpans(this.line)), this
      }
      baseDirAt(SS, HS) {
        let {
          line: gS,
          spans: tS
        } = this.bidiSpansAt(SS);
        return tS[PH.find(tS, SS - gS.from, -1, HS)].level == this.baseDir
      }
      dirAt(SS, HS) {
        let {
          line: gS,
          spans: tS
        } = this.bidiSpansAt(SS);
        return tS[PH.find(tS, SS - gS.from, -1, HS)].dir
      }
      bidiIn(SS, HS) {
        let {
          spans: gS,
          line: tS
        } = this.bidiSpansAt(SS);
        return gS.length > 1 || gS.length && (gS[0].level != this.baseDir || gS[0].to + tS.from < HS)
      }
      scan(SS, HS) {
        let gS, tS, bS, XS = 0,
          xS = SS.length - 1,
          NS = new Set,
          qS = this.bidiIn(SS[0], SS[xS]),
          uS = -1,
          IS = 1e9;
        SS: for (; XS < xS;) {
          let fS = xS - XS,
            kS = XS + xS >> 1;
          HS: if (NS.has(kS)) {
            let SS = XS + Math.floor(Math.random() * fS);
            for (let HS = 0; HS < fS; HS++) {
              if (!NS.has(SS)) {
                kS = SS;
                break HS
              }
              SS++, SS == xS && (SS = XS)
            }
            break SS
          } NS.add(kS);
          let aS = HS(kS);
          if (aS)
            for (let HS = 0; HS < aS.length; HS++) {
              let NS = aS[HS],
                fS = 0;
              if (!(0 == NS.width && aS.length > 1)) {
                if (NS.bottom < this.y)(!gS || gS.bottom < NS.bottom) && (gS = NS), fS = 1;
                else if (NS.top > this.y)(!tS || tS.top > NS.top) && (tS = NS), fS = -1;
                else {
                  let SS = NS.left > this.x ? this.x - NS.left : NS.right < this.x ? this.x - NS.right : 0,
                    HS = Math.abs(SS);
                  HS < IS && (uS = kS, IS = HS, bS = NS), SS && (fS = SS < 0 == (this.baseDir == uH.LTR) ? -1 : 1)
                } - 1 != fS || qS && !this.baseDirAt(SS[kS], 1) ? 1 != fS || qS && !this.baseDirAt(SS[kS + 1], -1) || (XS = kS + 1) : xS = kS
              }
            }
        }
        if (!bS) {
          let bS = gS && (!tS || this.y - gS.bottom < tS.top - this.y) ? gS : tS;
          return this.y = (bS.top + bS.bottom) / 2, this.scan(SS, HS)
        }
        if (IS) {
          if (gS && gS.bottom > bS.top) return this.y = gS.bottom - 1, this.scan(SS, HS);
          if (tS && tS.top < bS.bottom) return this.y = tS.top + 1, this.scan(SS, HS)
        }
        let fS = (qS ? this.dirAt(SS[uS], 1) : this.baseDir) == uH.LTR;
        return {
          i: uS,
          after: this.x > (bS.left + bS.right) / 2 == fS
        }
      }
      scanText(SS, HS) {
        let gS = [];
        for (let XS = 0; XS < SS.length; XS = (0, tS.$)(SS.text, XS)) gS.push(HS + XS);
        gS.push(HS + SS.length);
        let bS = this.scan(gS, (tS => {
          let bS = gS[tS] - HS,
            XS = gS[tS + 1] - HS;
          return tH(SS.dom, bS, XS).getClientRects()
        }));
        return bS.after ? new Tg(gS[bS.i + 1], -1) : new Tg(gS[bS.i], 1)
      }
      scanTile(SS, HS) {
        if (!SS.length) return new Tg(HS, 1);
        if (1 == SS.children.length) {
          let gS = SS.children[0];
          if (gS.isText()) return this.scanText(gS, HS);
          if (gS.isComposite()) return this.scanTile(gS, HS)
        }
        let gS = [HS];
        for (let xS = 0, NS = HS; xS < SS.children.length; xS++) gS.push(NS += SS.children[xS].length);
        let tS = this.scan(gS, (HS => {
            let gS = SS.children[HS];
            return 48 & gS.flags ? null : (1 == gS.dom.nodeType ? gS.dom : tH(gS.dom, 0, gS.length)).getClientRects()
          })),
          bS = SS.children[tS.i],
          XS = gS[tS.i];
        return bS.isText() ? this.scanText(bS, XS) : bS.isComposite() ? this.scanTile(bS, XS) : tS.after ? new Tg(gS[tS.i + 1], -1) : new Tg(XS, 1)
      }
    }
    const mg = "\uffff";
    class eg {
      constructor(SS, HS) {
        this.points = SS, this.view = HS, this.text = "", this.lineSeparator = HS.state.facet(tS.m.lineSeparator)
      }
      append(SS) {
        this.text += SS
      }
      lineBreak() {
        this.text += mg
      }
      readRange(SS, HS) {
        if (!SS) return this;
        let gS = SS.parentNode;
        for (let tS = SS;;) {
          this.findPointBefore(gS, tS);
          let SS = this.text.length;
          this.readNode(tS);
          let bS = kg.get(tS),
            XS = tS.nextSibling;
          if (XS == HS) {
            (null === bS || void 0 === bS ? void 0 : bS.breakAfter) && !XS && gS != this.view.contentDOM && this.lineBreak();
            break
          }
          let xS = kg.get(XS);
          (bS && xS ? bS.breakAfter : (bS ? bS.breakAfter : FS(tS)) || FS(XS) && ("BR" != tS.nodeName || (null === bS || void 0 === bS ? void 0 : bS.isWidget())) && this.text.length > SS) && !St(XS, HS) && this.lineBreak(), tS = XS
        }
        return this.findPointBefore(gS, HS), this
      }
      readTextNode(SS) {
        let HS = SS.nodeValue;
        for (let gS of this.points) gS.node == SS && (gS.pos = this.text.length + Math.min(gS.offset, HS.length));
        for (let gS = 0, tS = this.lineSeparator ? null : /\r\n?|\n/g;;) {
          let bS, XS = -1,
            xS = 1;
          if (this.lineSeparator ? (XS = HS.indexOf(this.lineSeparator, gS), xS = this.lineSeparator.length) : (bS = tS.exec(HS)) && (XS = bS.index, xS = bS[0].length), this.append(HS.slice(gS, XS < 0 ? HS.length : XS)), XS < 0) break;
          if (this.lineBreak(), xS > 1)
            for (let HS of this.points) HS.node == SS && HS.pos > this.text.length && (HS.pos -= xS - 1);
          gS = XS + xS
        }
      }
      readNode(SS) {
        let HS = kg.get(SS),
          gS = HS && HS.overrideDOMText;
        if (null != gS) {
          this.findPointInside(SS, gS.length);
          for (let SS = gS.iter(); !SS.next().done;) SS.lineBreak ? this.lineBreak() : this.append(SS.value)
        } else 3 == SS.nodeType ? this.readTextNode(SS) : "BR" == SS.nodeName ? SS.nextSibling && this.lineBreak() : 1 == SS.nodeType && this.readRange(SS.firstChild, null)
      }
      findPointBefore(SS, HS) {
        for (let gS of this.points) gS.node == SS && SS.childNodes[gS.offset] == HS && (gS.pos = this.text.length)
      }
      findPointInside(SS, HS) {
        for (let gS of this.points)(3 == SS.nodeType ? gS.node == SS : SS.contains(gS.node)) && (gS.pos = this.text.length + (rg(SS, gS.node, gS.offset) ? HS : 0))
      }
    }

    function rg(SS, HS, gS) {
      for (;;) {
        if (!HS || gS < TS(HS)) return !1;
        if (HS == SS) return !0;
        gS = MS(HS) + 1, HS = HS.parentNode
      }
    }

    function St(SS, HS) {
      let gS;
      for (; SS != HS && SS; SS = SS.nextSibling) {
        let HS = kg.get(SS);
        if (!(null === HS || void 0 === HS ? void 0 : HS.isWidget())) return !1;
        HS && (gS || (gS = [])).push(HS)
      }
      if (gS)
        for (let tS of gS) {
          let SS = tS.overrideDOMText;
          if (null === SS || void 0 === SS ? void 0 : SS.length) return !1
        }
      return !0
    }
    class Ht {
      constructor(SS, HS) {
        this.node = SS, this.offset = HS, this.pos = -1
      }
    }
    class gt {
      constructor(SS, HS, gS, bS) {
        this.typeOver = bS, this.bounds = null, this.text = "", this.domChanged = HS > -1;
        let {
          impreciseHead: XS,
          impreciseAnchor: xS
        } = SS.docView, NS = SS.state.selection;
        if (SS.state.readOnly && HS > -1) this.newSel = null;
        else if (HS > -1 && (this.bounds = tt(SS.docView.tile, HS, gS, 0))) {
          let HS = XS || xS ? [] : function(SS) {
              let HS = [];
              if (SS.root.activeElement != SS.contentDOM) return HS;
              let {
                anchorNode: gS,
                anchorOffset: tS,
                focusNode: bS,
                focusOffset: XS
              } = SS.observer.selectionRange;
              gS && (HS.push(new Ht(gS, tS)), bS == gS && XS == tS || HS.push(new Ht(bS, XS)));
              return HS
            }(SS),
            gS = new eg(HS, SS);
          gS.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = gS.text, this.newSel = function(SS, HS) {
            if (0 == SS.length) return null;
            let gS = SS[0].pos,
              bS = 2 == SS.length ? SS[1].pos : gS;
            return gS > -1 && bS > -1 ? tS.i.single(gS + HS, bS + HS) : null
          }(HS, this.bounds.from)
        } else {
          let HS = SS.observer.selectionRange,
            gS = XS && XS.node == HS.focusNode && XS.offset == HS.focusOffset || !US(SS.contentDOM, HS.focusNode) ? NS.main.head : SS.docView.posFromDOM(HS.focusNode, HS.focusOffset),
            bS = xS && xS.node == HS.anchorNode && xS.offset == HS.anchorOffset || !US(SS.contentDOM, HS.anchorNode) ? NS.main.anchor : SS.docView.posFromDOM(HS.anchorNode, HS.anchorOffset),
            qS = SS.viewport;
          if ((hS.ios || hS.chrome) && NS.main.empty && gS != bS && (qS.from > 0 || qS.to < SS.state.doc.length)) {
            let HS = Math.min(gS, bS),
              tS = Math.max(gS, bS),
              XS = qS.from - HS,
              xS = qS.to - tS;
            0 != XS && 1 != XS && 0 != HS || 0 != xS && -1 != xS && tS != SS.state.doc.length || (gS = 0, bS = SS.state.doc.length)
          }
          if (SS.inputState.composing > -1 && NS.HG.length > 1) this.newSel = NS.replaceRange(tS.i.range(bS, gS));
          else if (SS.lineWrapping && bS == gS && (!NS.main.empty || NS.main.head != gS) && SS.inputState.lastTouchTime > Date.now() - 100) {
            let HS = SS.coordsAtPos(gS, -1),
              bS = 0;
            HS && (bS = SS.inputState.lastTouchY <= HS.bottom ? -1 : 1), this.newSel = tS.i.create([tS.i.cursor(gS, bS)])
          } else this.newSel = tS.i.single(bS, gS)
        }
      }
    }

    function tt(SS, HS, gS, tS) {
      if (SS.isComposite()) {
        let bS = -1,
          XS = -1,
          xS = -1,
          NS = -1;
        for (let qS = 0, uS = tS, IS = tS; qS < SS.children.length; qS++) {
          let tS = SS.children[qS],
            fS = uS + tS.length;
          if (uS < HS && fS > gS) return tt(tS, HS, gS, uS);
          if (fS >= HS && -1 == bS && (bS = qS, XS = uS), uS > gS && tS.dom.parentNode == SS.dom) {
            xS = qS, NS = IS;
            break
          }
          IS = fS, uS = fS + tS.breakAfter
        }
        return {
          from: XS,
          to: NS < 0 ? tS + SS.length : NS,
          startDOM: (bS ? SS.children[bS - 1].dom.nextSibling : null) || SS.dom.firstChild,
          endDOM: xS < SS.children.length && xS >= 0 ? SS.children[xS].dom : null
        }
      }
      return SS.isText() ? {
        from: tS,
        to: tS + SS.length,
        startDOM: SS.dom,
        endDOM: SS.dom.nextSibling
      } : null
    }

    function bt(SS, HS) {
      let gS, {
          newSel: bS
        } = HS,
        {
          state: XS
        } = SS,
        xS = XS.selection.main,
        NS = SS.inputState.lastKeyTime > Date.now() - 100 ? SS.inputState.lastKeyCode : -1;
      if (HS.bounds) {
        let {
          from: SS,
          to: bS
        } = HS.bounds, qS = xS.from, uS = null;
        (8 === NS || hS.android && HS.text.length < bS - SS) && (qS = xS.to, uS = "end");
        let IS, fS, kS = XS.doc.sliceString(SS, bS, mg);
        !xS.empty && xS.from >= SS && xS.to <= bS && (HS.typeOver || kS != HS.text) && kS.slice(0, xS.from - SS) == HS.text.slice(0, xS.from - SS) && kS.slice(xS.to - SS) == HS.text.slice(IS = HS.text.length - (kS.length - (xS.to - SS))) ? gS = {
          from: xS.from,
          to: xS.to,
          insert: tS.L.of(HS.text.slice(xS.from - SS, IS).split(mg))
        } : (fS = xt(kS, HS.text, qS - SS, uS)) && (hS.chrome && 13 == NS && fS.toB == fS.from + 2 && HS.text.slice(fS.from, fS.toB) == mg + mg && fS.toB--, gS = {
          from: SS + fS.from,
          to: SS + fS.toA,
          insert: tS.L.of(HS.text.slice(fS.from, fS.toB).split(mg))
        })
      } else bS && (!SS.hasFocus && XS.facet(RH) || Nt(bS, xS)) && (bS = null);
      if (!gS && !bS) return !1;
      if ((hS.mac || hS.android) && gS && gS.from == gS.to && gS.from == xS.head - 1 && /^\. ?$/.test(gS.insert.toString()) && "off" == SS.contentDOM.getAttribute("autocorrect") ? (bS && 2 == gS.insert.length && (bS = tS.i.single(bS.main.anchor - 1, bS.main.head - 1)), gS = {
          from: gS.from,
          to: gS.to,
          insert: tS.L.of([gS.insert.toString().replace(".", " ")])
        }) : XS.doc.lineAt(xS.from).to < xS.to && SS.docView.lineHasWidget(xS.to) && SS.inputState.insertingTextAt > Date.now() - 50 ? gS = {
          from: xS.from,
          to: xS.to,
          insert: XS.toText(SS.inputState.insertingText)
        } : hS.chrome && gS && gS.from == gS.to && gS.from == xS.head && "\n " == gS.insert.toString() && SS.lineWrapping && (bS && (bS = tS.i.single(bS.main.anchor - 1, bS.main.head - 1)), gS = {
          from: xS.from,
          to: xS.to,
          insert: tS.L.of([" "])
        }), gS) return Xt(SS, gS, bS, NS);
      if (bS && !Nt(bS, xS)) {
        let HS = !1,
          gS = "select";
        return SS.inputState.lastSelectionTime > Date.now() - 50 && ("select" == SS.inputState.lastSelectionOrigin && (HS = !0), gS = SS.inputState.lastSelectionOrigin, "select.pointer" == gS && (bS = Fg(XS.facet(tg).map((HS => HS(SS))), bS))), SS.dispatch({
          selection: bS,
          scrollIntoView: HS,
          userEvent: gS
        }), !0
      }
      return !1
    }

    function Xt(SS, HS, gS) {
      let bS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
      if (hS.ios && SS.inputState.flushIOSKey(HS)) return !0;
      let XS = SS.state.selection.main;
      if (hS.android && (HS.to == XS.to && (HS.from == XS.from || HS.from == XS.from - 1 && " " == SS.state.sliceDoc(HS.from, XS.from)) && 1 == HS.insert.length && 2 == HS.insert.lines && bH(SS.contentDOM, "Enter", 13) || (HS.from == XS.from - 1 && HS.to == XS.to && 0 == HS.insert.length || 8 == bS && HS.insert.length < HS.to - HS.from && HS.to > XS.head) && bH(SS.contentDOM, "Backspace", 8) || HS.from == XS.from && HS.to == XS.to + 1 && 0 == HS.insert.length && bH(SS.contentDOM, "Delete", 46))) return !0;
      let xS, NS = HS.insert.toString();
      SS.inputState.composing >= 0 && SS.inputState.composing++;
      let qS = () => xS || (xS = function(SS, HS, gS) {
        let bS, XS = SS.state,
          xS = XS.selection.main,
          NS = -1;
        if (HS.from == HS.to && HS.from < xS.from || HS.from > xS.to) {
          let gS = HS.from < xS.from ? -1 : 1,
            tS = gS < 0 ? xS.from : xS.to,
            bS = Mg(XS.facet(tg).map((HS => HS(SS))), tS, gS);
          HS.from == bS && (NS = bS)
        }
        if (NS > -1) bS = {
          changes: HS,
          selection: tS.i.cursor(HS.from + HS.insert.length, -1)
        };
        else if (HS.from >= xS.from && HS.to <= xS.to && HS.to - HS.from >= (xS.to - xS.from) / 3 && (!gS || gS.main.empty && gS.main.from == HS.from + HS.insert.length) && SS.inputState.composing < 0) {
          let gS = xS.from < HS.from ? XS.sliceDoc(xS.from, HS.from) : "",
            tS = xS.to > HS.to ? XS.sliceDoc(HS.to, xS.to) : "";
          bS = XS.replaceSelection(SS.state.toText(gS + HS.insert.sliceString(0, void 0, SS.state.lineBreak) + tS))
        } else {
          let NS = XS.changes(HS),
            qS = gS && gS.main.to <= NS.newLength ? gS.main : void 0;
          if (XS.selection.HG.length > 1 && (SS.inputState.composing >= 0 || SS.inputState.compositionPendingChange) && HS.to <= xS.to + 10 && HS.to >= xS.to - 10) {
            let uS, IS = SS.state.sliceDoc(HS.from, HS.to),
              fS = gS && Wg(SS, gS.main.head);
            if (fS) {
              let SS = HS.insert.length - (HS.to - HS.from);
              uS = {
                from: fS.from,
                to: fS.to - SS
              }
            } else uS = SS.state.doc.lineAt(xS.head);
            let kS = xS.to - HS.to;
            bS = XS.changeByRange((gS => {
              if (gS.from == xS.from && gS.to == xS.to) return {
                changes: NS,
                range: qS || gS.map(NS)
              };
              let bS = gS.to - kS,
                fS = bS - IS.length;
              if (SS.state.sliceDoc(fS, bS) != IS || bS >= uS.from && fS <= uS.to) return {
                range: gS
              };
              let aS = XS.changes({
                  from: fS,
                  to: bS,
                  insert: HS.insert
                }),
                KS = gS.to - xS.to;
              return {
                changes: aS,
                range: qS ? tS.i.range(Math.max(0, qS.anchor + KS), Math.max(0, qS.head + KS)) : gS.map(aS)
              }
            }))
          } else bS = {
            changes: NS,
            selection: qS && XS.selection.replaceRange(qS)
          }
        }
        let qS = "input.type";
        (SS.composing || SS.inputState.compositionPendingChange && SS.inputState.compositionEndedAt > Date.now() - 50) && (SS.inputState.compositionPendingChange = !1, qS += ".compose", SS.inputState.compositionFirstChange && (qS += ".start", SS.inputState.compositionFirstChange = !1));
        return XS.update(bS, {
          userEvent: qS,
          scrollIntoView: !0
        })
      }(SS, HS, gS));
      return SS.state.facet(yH).some((gS => gS(SS, HS.from, HS.to, NS, qS))) || SS.dispatch(qS()), !0
    }

    function xt(SS, HS, gS, tS) {
      let bS = Math.min(SS.length, HS.length),
        XS = 0;
      for (; XS < bS && SS.charCodeAt(XS) == HS.charCodeAt(XS);) XS++;
      if (XS == bS && SS.length == HS.length) return null;
      let xS = SS.length,
        NS = HS.length;
      for (; xS > 0 && NS > 0 && SS.charCodeAt(xS - 1) == HS.charCodeAt(NS - 1);) xS--, NS--;
      if ("end" == tS) {
        gS -= xS + Math.max(0, XS - Math.min(xS, NS)) - XS
      }
      if (xS < XS && SS.length < HS.length) {
        XS -= gS <= XS && gS >= xS ? XS - gS : 0, NS = XS + (NS - xS), xS = XS
      } else if (NS < XS) {
        XS -= gS <= XS && gS >= NS ? XS - gS : 0, xS = XS + (xS - NS), NS = XS
      }
      return {
        from: XS,
        toA: xS,
        toB: NS
      }
    }

    function Nt(SS, HS) {
      return HS.head == SS.main.head && HS.anchor == SS.main.anchor
    }
    class qt {
      setSelectionOrigin(SS) {
        this.lastSelectionOrigin = SS, this.lastSelectionTime = Date.now()
      }
      constructor(SS) {
        this.view = SS, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = SS.hasFocus, hS.safari && SS.contentDOM.addEventListener("input", (() => null)), hS.gecko && function(SS) {
          At.has(SS) || (At.add(SS), SS.addEventListener("copy", (() => {})), SS.addEventListener("cut", (() => {})))
        }(SS.contentDOM.ownerDocument)
      }
      handleEvent(SS) {
        (function(SS, HS) {
          if (!HS.bubbles) return !0;
          if (HS.defaultPrevented) return !1;
          for (let gS, tS = HS.target; tS != SS.contentDOM; tS = tS.parentNode)
            if (!tS || 11 == tS.nodeType || (gS = kg.get(tS)) && gS.isWidget() && !gS.isHidden && gS.widget.ignoreEvent(HS)) return !1;
          return !0
        })(this.view, SS) && !this.ignoreDuringComposition(SS) && ("keydown" == SS.type && this.keydown(SS) || (0 != this.view.updateState ? Promise.resolve().then((() => this.runHandlers(SS.type, SS))) : this.runHandlers(SS.type, SS)))
      }
      runHandlers(SS, HS) {
        let gS = this.handlers[SS];
        if (gS) {
          for (let SS of gS.observers) SS(this.view, HS);
          for (let SS of gS.handlers) {
            if (HS.defaultPrevented) break;
            if (SS(this.view, HS)) {
              HS.preventDefault();
              break
            }
          }
        }
      }
      ensureHandlers(SS) {
        let HS = It(SS),
          gS = this.handlers,
          tS = this.view.contentDOM;
        for (let bS in HS)
          if ("scroll" != bS) {
            let SS = !HS[bS].handlers.length,
              XS = gS[bS];
            XS && SS != !XS.handlers.length && (tS.removeEventListener(bS, this.handleEvent), XS = null), XS || tS.addEventListener(bS, this.handleEvent, {
              passive: SS
            })
          } for (let bS in gS) "scroll" == bS || HS[bS] || tS.removeEventListener(bS, this.handleEvent);
        this.handlers = HS
      }
      keydown(SS) {
        if (this.lastKeyCode = SS.keyCode, this.lastKeyTime = Date.now(), 9 == SS.keyCode && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return !0;
        if (this.tabFocusMode > 0 && 27 != SS.keyCode && Kt.indexOf(SS.keyCode) < 0 && (this.tabFocusMode = -1), hS.android && hS.chrome && !SS.synthetic && (13 == SS.keyCode || 8 == SS.keyCode)) return this.view.observer.delayAndroidKey(SS.key, SS.keyCode), !0;
        let HS;
        return !hS.ios || SS.synthetic || SS.altKey || SS.metaKey || SS.shiftKey || !((HS = ft.find((HS => HS.keyCode == SS.keyCode))) && !SS.ctrlKey || kt.indexOf(SS.key) > -1 && SS.ctrlKey) ? (229 != SS.keyCode && this.view.observer.forceFlush(), !1) : (this.pendingIOSKey = HS || SS, setTimeout((() => this.flushIOSKey()), 250), !0)
      }
      flushIOSKey(SS) {
        let HS = this.pendingIOSKey;
        return !!HS && (!("Enter" == HS.key && SS && SS.from < SS.to && /^\S+$/.test(SS.insert.toString())) && (this.pendingIOSKey = void 0, bH(this.view.contentDOM, HS.key, HS.keyCode, HS instanceof KeyboardEvent ? HS : void 0)))
      }
      ignoreDuringComposition(SS) {
        return !(!/^key/.test(SS.type) || SS.synthetic) && (this.composing > 0 || !!(hS.safari && !hS.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = !1, !0))
      }
      startMouseSelection(SS) {
        this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = SS
      }
      update(SS) {
        this.view.observer.update(SS), this.mouseSelection && this.mouseSelection.update(SS), this.draggedContent && SS.docChanged && (this.draggedContent = this.draggedContent.map(SS.changes)), SS.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0)
      }
      destroy() {
        this.mouseSelection && this.mouseSelection.destroy()
      }
    }

    function ut(SS, HS) {
      return (gS, tS) => {
        try {
          return HS.call(SS, tS, gS)
        } catch (bS) {
          FH(gS.state, bS)
        }
      }
    }

    function It(SS) {
      let HS = Object.create(null);

      function gS(SS) {
        return HS[SS] || (HS[SS] = {
          observers: [],
          handlers: []
        })
      }
      for (let tS of SS) {
        let SS = tS.spec,
          HS = SS && SS.plugin.domEventHandlers,
          bS = SS && SS.plugin.domEventObservers;
        if (HS)
          for (let XS in HS) {
            let SS = HS[XS];
            SS && gS(XS).handlers.push(ut(tS.value, SS))
          }
        if (bS)
          for (let XS in bS) {
            let SS = bS[XS];
            SS && gS(XS).observers.push(ut(tS.value, SS))
          }
      }
      for (let tS in Ct) gS(tS).handlers.push(Ct[tS]);
      for (let tS in nt) gS(tS).observers.push(nt[tS]);
      return HS
    }
    const ft = [{
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
      kt = "dthko",
      Kt = [16, 17, 18, 20, 91, 92, 224, 225];

    function jt(SS) {
      return .7 * Math.max(0, SS) + 8
    }
    class Gt {
      constructor(SS, HS, gS, bS) {
        this.view = SS, this.startEvent = HS, this.style = gS, this.mustSelect = bS, this.scrollSpeed = {
          x: 0,
          y: 0
        }, this.scrolling = -1, this.lastEvent = HS, this.scrollParents = eS(SS.contentDOM), this.atoms = SS.state.facet(tg).map((HS => HS(SS)));
        let XS = SS.contentDOM.ownerDocument;
        XS.addEventListener("mousemove", this.move = this.move.bind(this)), XS.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = HS.shiftKey, this.multiple = SS.state.facet(tS.m.allowMultipleSelections) && function(SS, HS) {
          let gS = SS.state.facet(vH);
          return gS.length ? gS[0](HS) : hS.mac ? HS.metaKey : HS.ctrlKey
        }(SS, HS), this.dragging = !(! function(SS, HS) {
          let {
            main: gS
          } = SS.state.selection;
          if (gS.empty) return !1;
          let tS = zS(SS.root);
          if (!tS || 0 == tS.rangeCount) return !0;
          let bS = tS.getRangeAt(0).getClientRects();
          for (let XS = 0; XS < bS.length; XS++) {
            let SS = bS[XS];
            if (SS.left <= HS.clientX && SS.right >= HS.clientX && SS.top <= HS.clientY && SS.bottom >= HS.clientY) return !0
          }
          return !1
        }(SS, HS) || 1 != dt(HS)) && null
      }
      start(SS) {
        !1 === this.dragging && this.select(SS)
      }
      move(SS) {
        if (0 == SS.buttons) return this.destroy();
        if (this.dragging || null == this.dragging && (HS = this.startEvent, gS = SS, Math.max(Math.abs(HS.clientX - gS.clientX), Math.abs(HS.clientY - gS.clientY)) < 10)) return;
        var HS, gS;
        this.select(this.lastEvent = SS);
        let tS = 0,
          bS = 0,
          XS = 0,
          xS = 0,
          NS = this.view.win.innerWidth,
          qS = this.view.win.innerHeight;
        this.scrollParents.x && ({
          left: XS,
          right: NS
        } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({
          top: xS,
          bottom: qS
        } = this.scrollParents.y.getBoundingClientRect());
        let uS = Ng(this.view);
        SS.clientX - uS.left <= XS + 6 ? tS = -jt(XS - SS.clientX) : SS.clientX + uS.right >= NS - 6 && (tS = jt(SS.clientX - NS)), SS.clientY - uS.top <= xS + 6 ? bS = -jt(xS - SS.clientY) : SS.clientY + uS.bottom >= qS - 6 && (bS = jt(SS.clientY - qS)), this.setScrollSpeed(tS, bS)
      }
      up(SS) {
        null == this.dragging && this.select(this.lastEvent), this.dragging || SS.preventDefault(), this.destroy()
      }
      destroy() {
        this.setScrollSpeed(0, 0);
        let SS = this.view.contentDOM.ownerDocument;
        SS.removeEventListener("mousemove", this.move), SS.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null
      }
      setScrollSpeed(SS, HS) {
        this.scrollSpeed = {
          x: SS,
          y: HS
        }, SS || HS ? this.scrolling < 0 && (this.scrolling = setInterval((() => this.scroll()), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1)
      }
      scroll() {
        let {
          x: SS,
          y: HS
        } = this.scrollSpeed;
        SS && this.scrollParents.x && (this.scrollParents.x.scrollLeft += SS, SS = 0), HS && this.scrollParents.y && (this.scrollParents.y.scrollTop += HS, HS = 0), (SS || HS) && this.view.win.scrollBy(SS, HS), !1 === this.dragging && this.select(this.lastEvent)
      }
      select(SS) {
        let {
          view: HS
        } = this, gS = Fg(this.atoms, this.style.get(SS, this.extend, this.multiple));
        !this.mustSelect && gS.eq(HS.state.selection, !1 === this.dragging) || this.view.dispatch({
          selection: gS,
          userEvent: "select.pointer"
        }), this.mustSelect = !1
      }
      update(SS) {
        SS.transactions.some((SS => SS.isUserEvent("input.type"))) ? this.destroy() : this.style.update(SS) && setTimeout((() => this.select(this.lastEvent)), 20)
      }
    }
    const Ct = Object.create(null),
      nt = Object.create(null),
      Pt = hS.ie && hS.ie_version < 15 || hS.ios && hS.webkit_version < 604;

    function Qt(SS, HS, gS) {
      for (let tS of SS.facet(HS)) gS = tS(gS, SS);
      return gS
    }

    function Dt(SS, HS) {
      HS = Qt(SS.state, iH, HS);
      let gS, {
          state: bS
        } = SS,
        XS = 1,
        xS = bS.toText(HS),
        NS = xS.lines == bS.selection.HG.length;
      if (null != vt && bS.selection.HG.every((SS => SS.empty)) && vt == xS.toString()) {
        let SS = -1;
        gS = bS.changeByRange((gS => {
          let qS = bS.doc.lineAt(gS.from);
          if (qS.from == SS) return {
            range: gS
          };
          SS = qS.from;
          let uS = bS.toText((NS ? xS.line(XS++).text : HS) + bS.lineBreak);
          return {
            changes: {
              from: qS.from,
              insert: uS
            },
            range: tS.i.cursor(gS.from + uS.length)
          }
        }))
      } else gS = NS ? bS.changeByRange((SS => {
        let HS = xS.line(XS++);
        return {
          changes: {
            from: SS.from,
            to: SS.to,
            insert: HS.text
          },
          range: tS.i.cursor(SS.from + HS.length)
        }
      })) : bS.replaceSelection(xS);
      SS.dispatch(gS, {
        userEvent: "input.paste",
        scrollIntoView: !0
      })
    }

    function wt(SS, HS, gS, bS) {
      if (1 == bS) return tS.i.cursor(HS, gS);
      if (2 == bS) return function(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          bS = SS.charCategorizer(HS),
          XS = SS.doc.lineAt(HS),
          xS = HS - XS.from;
        if (0 == XS.length) return tS.i.cursor(HS);
        0 == xS ? gS = 1 : xS == XS.length && (gS = -1);
        let NS = xS,
          qS = xS;
        gS < 0 ? NS = (0, tS.$)(XS.text, xS, !1) : qS = (0, tS.$)(XS.text, xS);
        let uS = bS(XS.text.slice(NS, qS));
        for (; NS > 0;) {
          let SS = (0, tS.$)(XS.text, NS, !1);
          if (bS(XS.text.slice(SS, NS)) != uS) break;
          NS = SS
        }
        for (; qS < XS.length;) {
          let SS = (0, tS.$)(XS.text, qS);
          if (bS(XS.text.slice(qS, SS)) != uS) break;
          qS = SS
        }
        return tS.i.range(NS + XS.from, qS + XS.from)
      }(SS.state, HS, gS);
      {
        let bS = SS.docView.lineAt(HS, gS),
          XS = SS.state.doc.lineAt(bS ? bS.posAtEnd : HS),
          xS = bS ? bS.posAtStart : XS.from,
          NS = bS ? bS.posAtEnd : XS.to;
        return NS < SS.state.doc.length && NS == XS.to && NS++, tS.i.range(xS, NS)
      }
    }
    nt.scroll = SS => {
      SS.inputState.lastScrollTop = SS.scrollDOM.scrollTop, SS.inputState.lastScrollLeft = SS.scrollDOM.scrollLeft
    }, nt.wheel = nt.mousewheel = SS => {
      SS.inputState.lastWheelEvent = Date.now()
    }, Ct.keydown = (SS, HS) => (SS.inputState.setSelectionOrigin("select"), 27 == HS.keyCode && 0 != SS.inputState.tabFocusMode && (SS.inputState.tabFocusMode = Date.now() + 2e3), !1), nt.touchstart = (SS, HS) => {
      let gS = SS.inputState,
        tS = HS.targetTouches[0];
      gS.lastTouchTime = Date.now(), tS && (gS.lastTouchX = tS.clientX, gS.lastTouchY = tS.clientY), gS.setSelectionOrigin("select.pointer")
    }, nt.touchmove = SS => {
      SS.inputState.setSelectionOrigin("select.pointer")
    }, Ct.mousedown = (SS, HS) => {
      if (SS.observer.flush(), SS.inputState.lastTouchTime > Date.now() - 2e3) return !1;
      let gS = null;
      for (let tS of SS.state.facet(LH))
        if (gS = tS(SS, HS), gS) break;
      if (gS || 0 != HS.button || (gS = function(SS, HS) {
          let gS = SS.posAndSideAtCoords({
              x: HS.clientX,
              y: HS.clientY
            }, !1),
            bS = dt(HS),
            XS = SS.state.selection;
          return {
            update(SS) {
              SS.docChanged && (gS.pos = SS.changes.mapPos(gS.pos), XS = XS.map(SS.changes))
            },
            get(HS, xS, NS) {
              let qS, uS = SS.posAndSideAtCoords({
                  x: HS.clientX,
                  y: HS.clientY
                }, !1),
                IS = wt(SS, uS.pos, uS.assoc, bS);
              if (gS.pos != uS.pos && !xS) {
                let HS = wt(SS, gS.pos, gS.assoc, bS),
                  XS = Math.min(HS.from, IS.from),
                  xS = Math.max(HS.to, IS.to);
                IS = XS < IS.from ? tS.i.range(XS, xS, IS.assoc) : tS.i.range(xS, XS, IS.assoc)
              }
              return xS ? XS.replaceRange(XS.main.extend(IS.from, IS.to, IS.assoc)) : NS && 1 == bS && XS.HG.length > 1 && (qS = function(SS, HS) {
                for (let gS = 0; gS < SS.HG.length; gS++) {
                  let {
                    from: bS,
                    to: XS
                  } = SS.HG[gS];
                  if (bS <= HS && XS >= HS) return tS.i.create(SS.HG.slice(0, gS).concat(SS.HG.slice(gS + 1)), SS.mainIndex == gS ? 0 : SS.mainIndex - (SS.mainIndex > gS ? 1 : 0))
                }
                return null
              }(XS, uS.pos)) ? qS : NS ? XS.addRange(IS) : tS.i.create([IS])
            }
          }
        }(SS, HS)), gS) {
        let tS = !SS.hasFocus;
        SS.inputState.startMouseSelection(new Gt(SS, HS, gS, tS)), tS && SS.observer.ignore((() => {
          gH(SS.contentDOM);
          let HS = SS.root.activeElement;
          HS && !HS.contains(SS.contentDOM) && HS.blur()
        }));
        let bS = SS.inputState.mouseSelection;
        if (bS) return bS.start(HS), !1 === bS.dragging
      } else SS.inputState.setSelectionOrigin("select.pointer");
      return !1
    };
    const ht = hS.ie && hS.ie_version <= 11;
    let Zt = null,
      Jt = 0,
      Ot = 0;

    function dt(SS) {
      if (!ht) return SS.detail;
      let HS = Zt,
        gS = Ot;
      return Zt = SS, Ot = Date.now(), Jt = !HS || gS > Date.now() - 400 && Math.abs(HS.clientX - SS.clientX) < 2 && Math.abs(HS.clientY - SS.clientY) < 2 ? (Jt + 1) % 3 : 1
    }

    function ct(SS, HS, gS, tS) {
      if (!(gS = Qt(SS.state, iH, gS))) return;
      let bS = SS.posAtCoords({
          x: HS.clientX,
          y: HS.clientY
        }, !1),
        {
          draggedContent: XS
        } = SS.inputState,
        xS = tS && XS && function(SS, HS) {
          let gS = SS.state.facet(EH);
          return gS.length ? gS[0](HS) : hS.mac ? !HS.altKey : !HS.ctrlKey
        }(SS, HS) ? {
          from: XS.from,
          to: XS.to
        } : null,
        NS = {
          from: bS,
          insert: gS
        },
        qS = SS.state.changes(xS ? [xS, NS] : NS);
      SS.focus(), SS.dispatch({
        changes: qS,
        selection: {
          anchor: qS.mapPos(bS, -1),
          head: qS.mapPos(bS, 1)
        },
        userEvent: xS ? "move.drop" : "input.drop"
      }), SS.inputState.draggedContent = null
    }
    Ct.dragstart = (SS, HS) => {
      let {
        selection: {
          main: gS
        }
      } = SS.state;
      if (HS.target.draggable) {
        let bS = SS.docView.tile.nearest(HS.target);
        if (bS && bS.isWidget()) {
          let SS = bS.posAtStart,
            HS = SS + bS.length;
          (SS >= gS.to || HS <= gS.from) && (gS = tS.i.range(SS, HS))
        }
      }
      let {
        inputState: bS
      } = SS;
      return bS.mouseSelection && (bS.mouseSelection.dragging = !0), bS.draggedContent = gS, HS.dataTransfer && (HS.dataTransfer.setData("Text", Qt(SS.state, WH, SS.state.sliceDoc(gS.from, gS.to))), HS.dataTransfer.effectAllowed = "copyMove"), !1
    }, Ct.dragend = SS => (SS.inputState.draggedContent = null, !1), Ct.drop = (SS, HS) => {
      if (!HS.dataTransfer) return !1;
      if (SS.state.readOnly) return !0;
      let gS = HS.dataTransfer.files;
      if (gS && gS.length) {
        let tS = Array(gS.length),
          bS = 0,
          XS = () => {
            ++bS == gS.length && ct(SS, HS, tS.filter((SS => null != SS)).join(SS.state.lineBreak), !1)
          };
        for (let SS = 0; SS < gS.length; SS++) {
          let HS = new FileReader;
          HS.onerror = XS, HS.onload = () => {
            /[\x00-\x08\x0e-\x1f]{2}/.test(HS.result) || (tS[SS] = HS.result), XS()
          }, HS.readAsText(gS[SS])
        }
        return !0
      } {
        let gS = HS.dataTransfer.getData("Text");
        if (gS) return ct(SS, HS, gS, !0), !0
      }
      return !1
    }, Ct.paste = (SS, HS) => {
      if (SS.state.readOnly) return !0;
      SS.observer.flush();
      let gS = Pt ? null : HS.clipboardData;
      return gS ? (Dt(SS, gS.getData("text/plain") || gS.getData("text/uri-list")), !0) : (function(SS) {
        let HS = SS.dom.parentNode;
        if (!HS) return;
        let gS = HS.appendChild(document.createElement("textarea"));
        gS.style.cssText = "position: fixed; left: -10000px; top: 10px", gS.focus(), setTimeout((() => {
          SS.focus(), gS.remove(), Dt(SS, gS.value)
        }), 50)
      }(SS), !1)
    };
    let vt = null;
    Ct.copy = Ct.cut = (SS, HS) => {
      if (!pS(SS.contentDOM, SS.observer.selectionRange)) return !1;
      let {
        text: gS,
        HG: tS,
        linewise: bS
      } = function(SS) {
        let HS = [],
          gS = [],
          tS = !1;
        for (let bS of SS.selection.HG) bS.empty || (HS.push(SS.sliceDoc(bS.from, bS.to)), gS.push(bS));
        if (!HS.length) {
          let bS = -1;
          for (let {
              from: tS
            }
            of SS.selection.HG) {
            let XS = SS.doc.lineAt(tS);
            XS.number > bS && (HS.push(XS.text), gS.push({
              from: XS.from,
              to: Math.min(SS.doc.length, XS.to + 1)
            })), bS = XS.number
          }
          tS = !0
        }
        return {
          text: Qt(SS, WH, HS.join(SS.lineBreak)),
          HG: gS,
          linewise: tS
        }
      }(SS.state);
      if (!gS && !bS) return !1;
      vt = bS ? gS : null, "cut" != HS.type || SS.state.readOnly || SS.dispatch({
        changes: tS,
        scrollIntoView: !0,
        userEvent: "delete.cut"
      });
      let XS = Pt ? null : HS.clipboardData;
      return XS ? (XS.clearData(), XS.setData("text/plain", gS), !0) : (function(SS, HS) {
        let gS = SS.dom.parentNode;
        if (!gS) return;
        let tS = gS.appendChild(document.createElement("textarea"));
        tS.style.cssText = "position: fixed; left: -10000px; top: 10px", tS.value = HS, tS.focus(), tS.selectionEnd = HS.length, tS.selectionStart = 0, setTimeout((() => {
          tS.remove(), SS.focus()
        }), 50)
      }(SS, gS), !1)
    };
    const Et = tS.d.define();

    function Lt(SS, HS) {
      let gS = [];
      for (let tS of SS.facet(VH)) {
        let bS = tS(SS, HS);
        bS && gS.push(bS)
      }
      return gS.length ? SS.update({
        effects: gS,
        annotations: Et.of(!0)
      }) : null
    }

    function Yt(SS) {
      setTimeout((() => {
        let HS = SS.hasFocus;
        if (HS != SS.inputState.notifiedFocused) {
          let gS = Lt(SS.state, HS);
          gS ? SS.dispatch(gS) : SS.update([])
        }
      }), 10)
    }
    nt.focus = SS => {
      SS.inputState.lastFocusTime = Date.now(), SS.scrollDOM.scrollTop || !SS.inputState.lastScrollTop && !SS.inputState.lastScrollLeft || (SS.scrollDOM.scrollTop = SS.inputState.lastScrollTop, SS.scrollDOM.scrollLeft = SS.inputState.lastScrollLeft), Yt(SS)
    }, nt.blur = SS => {
      SS.observer.clearSelectionRange(), Yt(SS)
    }, nt.compositionstart = nt.compositionupdate = SS => {
      SS.observer.editContext || (null == SS.inputState.compositionFirstChange && (SS.inputState.compositionFirstChange = !0), SS.inputState.composing < 0 && (SS.inputState.composing = 0))
    }, nt.compositionend = SS => {
      SS.observer.editContext || (SS.inputState.composing = -1, SS.inputState.compositionEndedAt = Date.now(), SS.inputState.compositionPendingKey = !0, SS.inputState.compositionPendingChange = SS.observer.pendingRecords().length > 0, SS.inputState.compositionFirstChange = null, hS.chrome && hS.android ? SS.observer.flushSoon() : SS.inputState.compositionPendingChange ? Promise.resolve().then((() => SS.observer.flush())) : setTimeout((() => {
        SS.inputState.composing < 0 && SS.docView.hasComposition && SS.update([])
      }), 50))
    }, nt.contextmenu = SS => {
      SS.inputState.lastContextMenu = Date.now()
    }, Ct.beforeinput = (SS, HS) => {
      var gS, tS;
      if ("insertText" != HS.inputType && "insertCompositionText" != HS.inputType || (SS.inputState.insertingText = HS.data, SS.inputState.insertingTextAt = Date.now()), "insertReplacementText" == HS.inputType && SS.observer.editContext) {
        let tS = null === (gS = HS.dataTransfer) || void 0 === gS ? void 0 : gS.getData("text/plain"),
          bS = HS.getTargetRanges();
        if (tS && bS.length) {
          let HS = bS[0],
            gS = SS.posAtDOM(HS.startContainer, HS.startOffset),
            XS = SS.posAtDOM(HS.endContainer, HS.endOffset);
          return Xt(SS, {
            from: gS,
            to: XS,
            insert: SS.state.toText(tS)
          }, null), !0
        }
      }
      let bS;
      if (hS.chrome && hS.android && (bS = ft.find((SS => SS.inputType == HS.inputType))) && (SS.observer.delayAndroidKey(bS.key, bS.keyCode), "Backspace" == bS.key || "Delete" == bS.key)) {
        let HS = (null === (tS = window.visualViewport) || void 0 === tS ? void 0 : tS.height) || 0;
        setTimeout((() => {
          var gS;
          ((null === (gS = window.visualViewport) || void 0 === gS ? void 0 : gS.height) || 0) > HS + 10 && SS.hasFocus && (SS.contentDOM.blur(), SS.focus())
        }), 100)
      }
      return hS.ios && "deleteContentForward" == HS.inputType && SS.observer.flushSoon(), hS.safari && "insertText" == HS.inputType && SS.inputState.composing >= 0 && setTimeout((() => nt.compositionend(SS, HS)), 20), !1
    };
    const At = new Set;
    const yt = ["pre-wrap", "normal", "pre-line", "break-spaces"];
    let Vt = !1;

    function it() {
      Vt = !1
    }
    class Wt {
      constructor(SS) {
        this.lineWrapping = SS, this.doc = tS.L.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30
      }
      heightForGap(SS, HS) {
        let gS = this.doc.lineAt(HS).number - this.doc.lineAt(SS).number + 1;
        return this.lineWrapping && (gS += Math.max(0, Math.ceil((HS - SS - gS * this.lineLength * .5) / this.lineLength))), this.lineHeight * gS
      }
      heightForLine(SS) {
        if (!this.lineWrapping) return this.lineHeight;
        return (1 + Math.max(0, Math.ceil((SS - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight
      }
      setDoc(SS) {
        return this.doc = SS, this
      }
      mustRefreshForWrapping(SS) {
        return yt.indexOf(SS) > -1 != this.lineWrapping
      }
      mustRefreshForHeights(SS) {
        let HS = !1;
        for (let gS = 0; gS < SS.length; gS++) {
          let tS = SS[gS];
          tS < 0 ? gS++ : this.heightSamples[Math.floor(10 * tS)] || (HS = !0, this.heightSamples[Math.floor(10 * tS)] = !0)
        }
        return HS
      }
      refresh(SS, HS, gS, tS, bS, XS) {
        let xS = yt.indexOf(SS) > -1,
          NS = Math.abs(HS - this.lineHeight) > .3 || this.lineWrapping != xS || Math.abs(gS - this.charWidth) > .1;
        if (this.lineWrapping = xS, this.lineHeight = HS, this.charWidth = gS, this.textHeight = tS, this.lineLength = bS, NS) {
          this.heightSamples = {};
          for (let SS = 0; SS < XS.length; SS++) {
            let HS = XS[SS];
            HS < 0 ? SS++ : this.heightSamples[Math.floor(10 * HS)] = !0
          }
        }
        return NS
      }
    }
    class zt {
      constructor(SS, HS) {
        this.from = SS, this.heights = HS, this.index = 0
      }
      get more() {
        return this.index < this.heights.length
      }
    }
    class Ut {
      constructor(SS, HS, gS, tS, bS) {
        this.from = SS, this.length = HS, this.top = gS, this.height = tS, this._content = bS
      }
      get type() {
        return "number" == typeof this._content ? ES.Text : Array.isArray(this._content) ? this._content : this._content.type
      }
      get to() {
        return this.from + this.length
      }
      get bottom() {
        return this.top + this.height
      }
      get widget() {
        return this._content instanceof yS ? this._content.widget : null
      }
      get widgetLineBreaks() {
        return "number" == typeof this._content ? this._content : 0
      }
      join(SS) {
        let HS = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(SS._content) ? SS._content : [SS]);
        return new Ut(this.from, this.length + SS.length, this.top, this.height + SS.height, HS)
      }
    }
    var pt = function(SS) {
      return SS[SS.ByPos = 0] = "ByPos", SS[SS.ByHeight = 1] = "ByHeight", SS[SS.ByPosNoHeight = 2] = "ByPosNoHeight", SS
    }(pt || (pt = {}));
    const st = .001;
    class Bt {
      constructor(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.length = SS, this.height = HS, this.flags = gS
      }
      get outdated() {
        return (2 & this.flags) > 0
      }
      set outdated(SS) {
        this.flags = (SS ? 2 : 0) | -3 & this.flags
      }
      setHeight(SS) {
        this.height != SS && (Math.abs(this.height - SS) > st && (Vt = !0), this.height = SS)
      }
      replace(SS, HS, gS) {
        return Bt.of(gS)
      }
      decomposeLeft(SS, HS) {
        HS.push(this)
      }
      decomposeRight(SS, HS) {
        HS.push(this)
      }
      applyChanges(SS, HS, gS, tS) {
        let bS = this,
          XS = gS.doc;
        for (let xS = tS.length - 1; xS >= 0; xS--) {
          let {
            fromA: NS,
            toA: qS,
            fromB: uS,
            toB: IS
          } = tS[xS], fS = bS.lineAt(NS, pt.ByPosNoHeight, gS.setDoc(HS), 0, 0), kS = fS.to >= qS ? fS : bS.lineAt(qS, pt.ByPosNoHeight, gS, 0, 0);
          for (IS += kS.to - qS, qS = kS.to; xS > 0 && fS.from <= tS[xS - 1].toA;) NS = tS[xS - 1].fromA, uS = tS[xS - 1].fromB, xS--, NS < fS.from && (fS = bS.lineAt(NS, pt.ByPosNoHeight, gS, 0, 0));
          uS += fS.from - NS, NS = fS.from;
          let aS = et.build(gS.setDoc(XS), SS, uS, IS);
          bS = Mt(bS, bS.replace(NS, qS, aS))
        }
        return bS.updateHeight(gS, 0)
      }
      static empty() {
        return new Tt(0, 0, 0)
      }
      static of (SS) {
        if (1 == SS.length) return SS[0];
        let HS = 0,
          gS = SS.length,
          tS = 0,
          bS = 0;
        for (;;)
          if (HS == gS)
            if (tS > 2 * bS) {
              let bS = SS[HS - 1];
              bS.break ? SS.splice(--HS, 1, bS.left, null, bS.right) : SS.splice(--HS, 1, bS.left, bS.right), gS += 1 + bS.break, tS -= bS.size
            } else {
              if (!(bS > 2 * tS)) break;
              {
                let HS = SS[gS];
                HS.break ? SS.splice(gS, 1, HS.left, null, HS.right) : SS.splice(gS, 1, HS.left, HS.right), gS += 2 + HS.break, bS -= HS.size
              }
            }
        else if (tS < bS) {
          let gS = SS[HS++];
          gS && (tS += gS.size)
        } else {
          let HS = SS[--gS];
          HS && (bS += HS.size)
        }
        let XS = 0;
        return null == SS[HS - 1] ? (XS = 1, HS--) : null == SS[HS] && (XS = 1, gS++), new lt(Bt.of(SS.slice(0, HS)), XS, Bt.of(SS.slice(gS)))
      }
    }

    function Mt(SS, HS) {
      return SS == HS ? SS : (SS.constructor != HS.constructor && (Vt = !0), HS)
    }
    Bt.prototype.size = 1;
    const Ft = LS.replace({});
    class Rt extends Bt {
      constructor(SS, HS, gS) {
        super(SS, HS), this.deco = gS, this.spaceAbove = 0
      }
      mainBlock(SS, HS) {
        return new Ut(HS, this.length, SS + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0)
      }
      blockAt(SS, HS, gS, tS) {
        return this.spaceAbove && SS < gS + this.spaceAbove ? new Ut(tS, 0, gS, this.spaceAbove, Ft) : this.mainBlock(gS, tS)
      }
      lineAt(SS, HS, gS, tS, bS) {
        let XS = this.mainBlock(tS, bS);
        return this.spaceAbove ? this.blockAt(0, gS, tS, bS).join(XS) : XS
      }
      forEachLine(SS, HS, gS, tS, bS, XS) {
        SS <= bS + this.length && HS >= bS && XS(this.lineAt(0, pt.ByPos, gS, tS, bS))
      }
      setMeasuredHeight(SS) {
        let HS = SS.heights[SS.index++];
        HS < 0 ? (this.spaceAbove = -HS, HS = SS.heights[SS.index++]) : this.spaceAbove = 0, this.setHeight(HS)
      }
      updateHeight(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gS = arguments.length > 3 ? arguments[3] : void 0;
        return gS && gS.from <= HS && gS.more && this.setMeasuredHeight(gS), this.outdated = !1, this
      }
      toString() {
        return `block(${this.length})`
      }
    }
    class Tt extends Rt {
      constructor(SS, HS, gS) {
        super(SS, HS, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = gS
      }
      mainBlock(SS, HS) {
        return new Ut(HS, this.length, SS + this.spaceAbove, this.height - this.spaceAbove, this.breaks)
      }
      replace(SS, HS, gS) {
        let tS = gS[0];
        return 1 == gS.length && (tS instanceof Tt || tS instanceof ot && 4 & tS.flags) && Math.abs(this.length - tS.length) < 10 ? (tS instanceof ot ? tS = new Tt(tS.length, this.height, this.spaceAbove) : tS.height = this.height, this.outdated || (tS.outdated = !1), tS) : Bt.of(gS)
      }
      updateHeight(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          tS = arguments.length > 3 ? arguments[3] : void 0;
        return tS && tS.from <= HS && tS.more ? this.setMeasuredHeight(tS) : (gS || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, SS.heightForLine(this.length - this.collapsed)) + this.breaks * SS.lineHeight)), this.outdated = !1, this
      }
      toString() {
        return `line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`
      }
    }
    class ot extends Bt {
      constructor(SS) {
        super(SS, 0)
      }
      heightMetrics(SS, HS) {
        let gS, tS = SS.doc.lineAt(HS).number,
          bS = SS.doc.lineAt(HS + this.length).number,
          XS = bS - tS + 1,
          xS = 0;
        if (SS.lineWrapping) {
          let HS = Math.min(this.height, SS.lineHeight * XS);
          gS = HS / XS, this.length > XS + 1 && (xS = (this.height - HS) / (this.length - XS - 1))
        } else gS = this.height / XS;
        return {
          firstLine: tS,
          lastLine: bS,
          perLine: gS,
          perChar: xS
        }
      }
      blockAt(SS, HS, gS, tS) {
        let {
          firstLine: bS,
          lastLine: XS,
          perLine: xS,
          perChar: NS
        } = this.heightMetrics(HS, tS);
        if (HS.lineWrapping) {
          let bS = tS + (SS < HS.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (SS - gS) / this.height)) * this.length)),
            XS = HS.doc.lineAt(bS),
            qS = xS + XS.length * NS,
            uS = Math.max(gS, SS - qS / 2);
          return new Ut(XS.from, XS.length, uS, qS, 0)
        } {
          let tS = Math.max(0, Math.min(XS - bS, Math.floor((SS - gS) / xS))),
            {
              from: NS,
              length: qS
            } = HS.doc.line(bS + tS);
          return new Ut(NS, qS, gS + xS * tS, xS, 0)
        }
      }
      lineAt(SS, HS, gS, tS, bS) {
        if (HS == pt.ByHeight) return this.blockAt(SS, gS, tS, bS);
        if (HS == pt.ByPosNoHeight) {
          let {
            from: HS,
            to: tS
          } = gS.doc.lineAt(SS);
          return new Ut(HS, tS - HS, 0, 0, 0)
        }
        let {
          firstLine: XS,
          perLine: xS,
          perChar: NS
        } = this.heightMetrics(gS, bS), qS = gS.doc.lineAt(SS), uS = xS + qS.length * NS, IS = qS.number - XS, fS = tS + xS * IS + NS * (qS.from - bS - IS);
        return new Ut(qS.from, qS.length, Math.max(tS, Math.min(fS, tS + this.height - uS)), uS, 0)
      }
      forEachLine(SS, HS, gS, tS, bS, XS) {
        SS = Math.max(SS, bS), HS = Math.min(HS, bS + this.length);
        let {
          firstLine: xS,
          perLine: NS,
          perChar: qS
        } = this.heightMetrics(gS, bS);
        for (let uS = SS, IS = tS; uS <= HS;) {
          let HS = gS.doc.lineAt(uS);
          if (uS == SS) {
            let gS = HS.number - xS;
            IS += NS * gS + qS * (SS - bS - gS)
          }
          let tS = NS + qS * HS.length;
          XS(new Ut(HS.from, HS.length, IS, tS, 0)), IS += tS, uS = HS.to + 1
        }
      }
      replace(SS, HS, gS) {
        let tS = this.length - HS;
        if (tS > 0) {
          let SS = gS[gS.length - 1];
          SS instanceof ot ? gS[gS.length - 1] = new ot(SS.length + tS) : gS.push(null, new ot(tS - 1))
        }
        if (SS > 0) {
          let HS = gS[0];
          HS instanceof ot ? gS[0] = new ot(SS + HS.length) : gS.unshift(new ot(SS - 1), null)
        }
        return Bt.of(gS)
      }
      decomposeLeft(SS, HS) {
        HS.push(new ot(SS - 1), null)
      }
      decomposeRight(SS, HS) {
        HS.push(null, new ot(this.length - SS - 1))
      }
      updateHeight(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          tS = arguments.length > 3 ? arguments[3] : void 0,
          bS = HS + this.length;
        if (tS && tS.from <= HS + this.length && tS.more) {
          let gS = [],
            XS = Math.max(HS, tS.from),
            xS = -1;
          for (tS.from > HS && gS.push(new ot(tS.from - HS - 1).updateHeight(SS, HS)); XS <= bS && tS.more;) {
            let HS = SS.doc.lineAt(XS).length;
            gS.length && gS.push(null);
            let bS = tS.heights[tS.index++],
              NS = 0;
            bS < 0 && (NS = -bS, bS = tS.heights[tS.index++]), -1 == xS ? xS = bS : Math.abs(bS - xS) >= st && (xS = -2);
            let qS = new Tt(HS, bS, NS);
            qS.outdated = !1, gS.push(qS), XS += HS + 1
          }
          XS <= bS && gS.push(null, new ot(bS - XS).updateHeight(SS, XS));
          let NS = Bt.of(gS);
          return (xS < 0 || Math.abs(NS.height - this.height) >= st || Math.abs(xS - this.heightMetrics(SS, HS).perLine) >= st) && (Vt = !0), Mt(this, NS)
        }
        return (gS || this.outdated) && (this.setHeight(SS.heightForGap(HS, HS + this.length)), this.outdated = !1), this
      }
      toString() {
        return `gap(${this.length})`
      }
    }
    class lt extends Bt {
      constructor(SS, HS, gS) {
        super(SS.length + HS + gS.length, SS.height + gS.height, HS | (SS.outdated || gS.outdated ? 2 : 0)), this.left = SS, this.right = gS, this.size = SS.size + gS.size
      }
      get break() {
        return 1 & this.flags
      }
      blockAt(SS, HS, gS, tS) {
        let bS = gS + this.left.height;
        return SS < bS ? this.left.blockAt(SS, HS, gS, tS) : this.right.blockAt(SS, HS, bS, tS + this.left.length + this.break)
      }
      lineAt(SS, HS, gS, tS, bS) {
        let XS = tS + this.left.height,
          xS = bS + this.left.length + this.break,
          NS = HS == pt.ByHeight ? SS < XS : SS < xS,
          qS = NS ? this.left.lineAt(SS, HS, gS, tS, bS) : this.right.lineAt(SS, HS, gS, XS, xS);
        if (this.break || (NS ? qS.to < xS : qS.from > xS)) return qS;
        let uS = HS == pt.ByPosNoHeight ? pt.ByPosNoHeight : pt.ByPos;
        return NS ? qS.join(this.right.lineAt(xS, uS, gS, XS, xS)) : this.left.lineAt(xS, uS, gS, tS, bS).join(qS)
      }
      forEachLine(SS, HS, gS, tS, bS, XS) {
        let xS = tS + this.left.height,
          NS = bS + this.left.length + this.break;
        if (this.break) SS < NS && this.left.forEachLine(SS, HS, gS, tS, bS, XS), HS >= NS && this.right.forEachLine(SS, HS, gS, xS, NS, XS);
        else {
          let qS = this.lineAt(NS, pt.ByPos, gS, tS, bS);
          SS < qS.from && this.left.forEachLine(SS, qS.from - 1, gS, tS, bS, XS), qS.to >= SS && qS.from <= HS && XS(qS), HS > qS.to && this.right.forEachLine(qS.to + 1, HS, gS, xS, NS, XS)
        }
      }
      replace(SS, HS, gS) {
        let tS = this.left.length + this.break;
        if (HS < tS) return this.balanced(this.left.replace(SS, HS, gS), this.right);
        if (SS > this.left.length) return this.balanced(this.left, this.right.replace(SS - tS, HS - tS, gS));
        let bS = [];
        SS > 0 && this.decomposeLeft(SS, bS);
        let XS = bS.length;
        for (let xS of gS) bS.push(xS);
        if (SS > 0 && mt(bS, XS - 1), HS < this.length) {
          let SS = bS.length;
          this.decomposeRight(HS, bS), mt(bS, SS)
        }
        return Bt.of(bS)
      }
      decomposeLeft(SS, HS) {
        let gS = this.left.length;
        if (SS <= gS) return this.left.decomposeLeft(SS, HS);
        HS.push(this.left), this.break && (gS++, SS >= gS && HS.push(null)), SS > gS && this.right.decomposeLeft(SS - gS, HS)
      }
      decomposeRight(SS, HS) {
        let gS = this.left.length,
          tS = gS + this.break;
        if (SS >= tS) return this.right.decomposeRight(SS - tS, HS);
        SS < gS && this.left.decomposeRight(SS, HS), this.break && SS < tS && HS.push(null), HS.push(this.right)
      }
      balanced(SS, HS) {
        return SS.size > 2 * HS.size || HS.size > 2 * SS.size ? Bt.of(this.break ? [SS, null, HS] : [SS, HS]) : (this.left = Mt(this.left, SS), this.right = Mt(this.right, HS), this.setHeight(SS.height + HS.height), this.outdated = SS.outdated || HS.outdated, this.size = SS.size + HS.size, this.length = SS.length + this.break+HS.length, this)
      }
      updateHeight(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          tS = arguments.length > 3 ? arguments[3] : void 0,
          {
            left: bS,
            right: XS
          } = this,
          xS = HS + bS.length + this.break,
          NS = null;
        return tS && tS.from <= HS + bS.length && tS.more ? NS = bS = bS.updateHeight(SS, HS, gS, tS) : bS.updateHeight(SS, HS, gS), tS && tS.from <= xS + XS.length && tS.more ? NS = XS = XS.updateHeight(SS, xS, gS, tS) : XS.updateHeight(SS, xS, gS), NS ? this.balanced(bS, XS) : (this.height = this.left.height + this.right.height, this.outdated = !1, this)
      }
      toString() {
        return this.left + (this.break ? " " : "-") + this.right
      }
    }

    function mt(SS, HS) {
      let gS, tS;
      null == SS[HS] && (gS = SS[HS - 1]) instanceof ot && (tS = SS[HS + 1]) instanceof ot && SS.splice(HS - 1, 3, new ot(gS.length + 1 + tS.length))
    }
    class et {
      constructor(SS, HS) {
        this.pos = SS, this.oracle = HS, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = SS
      }
      get isCovered() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering
      }
      span(SS, HS) {
        if (this.lineStart > -1) {
          let SS = Math.min(HS, this.lineEnd),
            gS = this.nodes[this.nodes.length - 1];
          gS instanceof Tt ? gS.length += SS - this.pos : (SS > this.pos || !this.isCovered) && this.nodes.push(new Tt(SS - this.pos, -1, 0)), this.writtenTo = SS, HS > SS && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1)
        }
        this.pos = HS
      }
      point(SS, HS, gS) {
        if (SS < HS || gS.heightRelevant) {
          let tS = gS.widget ? gS.widget.estimatedHeight : 0,
            bS = gS.widget ? gS.widget.lineBreaks : 0;
          tS < 0 && (tS = this.oracle.lineHeight);
          let XS = HS - SS;
          gS.block ? this.rSS(new Rt(XS, tS, gS)) : (XS || bS || tS >= 5) && this.addLineDeco(tS, bS, XS)
        } else HS > SS && this.span(SS, HS);
        this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
      }
      enterLine() {
        if (this.lineStart > -1) return;
        let {
          from: SS,
          to: HS
        } = this.oracle.doc.lineAt(this.pos);
        this.lineStart = SS, this.lineEnd = HS, this.writtenTo < SS && ((this.writtenTo < SS - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, SS - 1)), this.nodes.push(null)), this.pos > SS && this.nodes.push(new Tt(this.pos - SS, -1, 0)), this.writtenTo = this.pos
      }
      blankContent(SS, HS) {
        let gS = new ot(HS - SS);
        return this.oracle.doc.lineAt(SS).to == HS && (gS.flags |= 4), gS
      }
      ensureLine() {
        this.enterLine();
        let SS = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (SS instanceof Tt) return SS;
        let HS = new Tt(0, -1, 0);
        return this.nodes.push(HS), HS
      }
      rSS(SS) {
        this.enterLine();
        let HS = SS.deco;
        HS && HS.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(SS), this.writtenTo = this.pos = this.pos + SS.length, HS && HS.endSide > 0 && (this.covering = SS)
      }
      addLineDeco(SS, HS, gS) {
        let tS = this.ensureLine();
        tS.length += gS, tS.collapsed += gS, tS.widgetHeight = Math.max(tS.widgetHeight, SS), tS.breaks += HS, this.writtenTo = this.pos = this.pos + gS
      }
      finish(SS) {
        let HS = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
        !(this.lineStart > -1) || HS instanceof Tt || this.isCovered ? (this.writtenTo < this.pos || null == HS) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new Tt(0, -1, 0));
        let gS = SS;
        for (let tS of this.nodes) tS instanceof Tt && tS.updateHeight(this.oracle, gS), gS += tS ? tS.length : 1;
        return this.nodes
      }
      static build(SS, HS, gS, bS) {
        let XS = new et(gS, SS);
        return tS.A.spans(HS, gS, bS, XS, 0), XS.finish(gS)
      }
    }
    class rt {
      constructor() {
        this.changes = []
      }
      compareRange() {}
      comparePoint(SS, HS, gS, tS) {
        (SS < HS || gS && gS.heightRelevant || tS && tS.heightRelevant) && iS(SS, HS, this.changes, 5)
      }
    }

    function Sb(SS, HS) {
      let gS = SS.getBoundingClientRect(),
        tS = SS.ownerDocument,
        bS = tS.defaultView || window,
        XS = Math.max(0, gS.left),
        xS = Math.min(bS.innerWidth, gS.right),
        NS = Math.max(0, gS.top),
        qS = Math.min(bS.innerHeight, gS.bottom);
      for (let uS = SS.parentNode; uS && uS != tS.body;)
        if (1 == uS.nodeType) {
          let HS = uS,
            gS = window.getComputedStyle(HS);
          if ((HS.scrollHeight > HS.clientHeight || HS.scrollWidth > HS.clientWidth) && "visible" != gS.overflow) {
            let gS = HS.getBoundingClientRect();
            XS = Math.max(XS, gS.left), xS = Math.min(xS, gS.right), NS = Math.max(NS, gS.top), qS = Math.min(uS == SS.parentNode ? bS.innerHeight : qS, gS.bottom)
          }
          uS = "absolute" == gS.position || "fixed" == gS.position ? HS.offsetParent : HS.parentNode
        } else {
          if (11 != uS.nodeType) break;
          uS = uS.host
        } return {
        left: XS - gS.left,
        right: Math.max(XS, xS) - gS.left,
        top: NS - (gS.top + HS),
        bottom: Math.max(NS, qS) - (gS.top + HS)
      }
    }

    function Hb(SS, HS) {
      let gS = SS.getBoundingClientRect();
      return {
        left: 0,
        right: gS.right - gS.left,
        top: HS,
        bottom: gS.bottom - (gS.top + HS)
      }
    }
    class gb {
      constructor(SS, HS, gS, tS) {
        this.from = SS, this.to = HS, this.size = gS, this.displaySize = tS
      }
      static same(SS, HS) {
        if (SS.length != HS.length) return !1;
        for (let gS = 0; gS < SS.length; gS++) {
          let tS = SS[gS],
            bS = HS[gS];
          if (tS.from != bS.from || tS.to != bS.to || tS.size != bS.size) return !1
        }
        return !0
      }
      draw(SS, HS) {
        return LS.replace({
          widget: new tb(this.displaySize * (HS ? SS.scaleY : SS.scaleX), HS)
        }).range(this.from, this.to)
      }
    }
    class tb extends vS {
      constructor(SS, HS) {
        super(), this.size = SS, this.vertical = HS
      }
      eq(SS) {
        return SS.size == this.size && SS.vertical == this.vertical
      }
      toDOM() {
        let SS = document.createElement("div");
        return this.vertical ? SS.style.height = this.size + "px" : (SS.style.width = this.size + "px", SS.style.height = "2px", SS.style.display = "inline-block"), SS
      }
      get estimatedHeight() {
        return this.vertical ? this.size : -1
      }
    }
    class bb {
      constructor(SS, HS) {
        this.view = SS, this.state = HS, this.pixelViewport = {
          left: 0,
          right: window.innerWidth,
          top: 0,
          bottom: 0
        }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = qb, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = uH.LTR, this.J9 = [], this.mustEnforceCursorAssoc = !1;
        let gS = HS.facet(rH).some((SS => "function" != typeof SS && "cm-lineWrapping" == SS.class));
        this.heightOracle = new Wt(gS), this.stateDeco = ub(HS), this.heightMap = Bt.empty().applyChanges(this.stateDeco, tS.L.empty, this.heightOracle.setDoc(HS.doc), [new ug(0, 0, 0, HS.doc.length)]);
        for (let tS = 0; tS < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); tS++);
        this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = LS.set(this.lineGaps.map((SS => SS.draw(this, !1)))), this.scrollParent = SS.scrollDOM, this.computeVisibleRanges()
      }
      updateForViewport() {
        let SS = [this.viewport],
          {
            main: HS
          } = this.state.selection;
        for (let gS = 0; gS <= 1; gS++) {
          let tS = gS ? HS.head : HS.anchor;
          if (!SS.some((SS => {
              let {
                from: HS,
                to: gS
              } = SS;
              return tS >= HS && tS <= gS
            }))) {
            let {
              from: HS,
              to: gS
            } = this.lineBlockAt(tS);
            SS.push(new Xb(HS, gS))
          }
        }
        return this.viewports = SS.sort(((SS, HS) => SS.from - HS.from)), this.updateScaler()
      }
      updateScaler() {
        let SS = this.scaler;
        return this.scaler = this.heightMap.height <= 7e6 ? qb : new Ib(this.heightOracle, this.heightMap, this.viewports), SS.eq(this.scaler) ? 0 : 2
      }
      updateViewportLines() {
        this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (SS => {
          this.viewportLines.push(fb(SS, this.scaler))
        }))
      }
      update(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.state = SS.state;
        let gS = this.stateDeco;
        this.stateDeco = ub(this.state);
        let bS = SS.changedRanges,
          XS = ug.extendWithRanges(bS, function(SS, HS, gS) {
            let bS = new rt;
            return tS.A.compare(SS, HS, gS, bS, 0), bS.changes
          }(gS, this.stateDeco, SS ? SS.changes : tS.ChangeSet.empty(this.state.doc.length))),
          xS = this.heightMap.height,
          NS = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
        it(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, SS.startState.doc, this.heightOracle.setDoc(this.state.doc), XS), (this.heightMap.height != xS || Vt) && (SS.flags |= 2), NS ? (this.scrollAnchorPos = SS.changes.mapPos(NS.from, -1), this.scrollAnchorHeight = NS.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = xS);
        let qS = XS.length ? this.mapViewport(this.viewport, SS.changes) : this.viewport;
        (HS && (HS.range.head < qS.from || HS.range.head > qS.to) || !this.viewportIsAppropriate(qS)) && (qS = this.getViewport(0, HS));
        let uS = qS.from != this.viewport.from || qS.to != this.viewport.to;
        this.viewport = qS, SS.flags |= this.updateForViewport(), (uS || !SS.changes.empty || 2 & SS.flags) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, SS.changes))), SS.flags |= this.computeVisibleRanges(SS.changes), HS && (this.scrollTarget = HS), !this.mustEnforceCursorAssoc && (SS.selectionSet || SS.focusChanged) && SS.view.lineWrapping && SS.state.selection.main.empty && SS.state.selection.main.assoc && !SS.state.facet(UH) && (this.mustEnforceCursorAssoc = !0)
      }
      measure() {
        let {
          view: SS
        } = this, HS = SS.contentDOM, gS = window.getComputedStyle(HS), bS = this.heightOracle, XS = gS.whiteSpace;
        this.defaultTextDirection = "rtl" == gS.direction ? uH.RTL : uH.LTR;
        let xS = this.heightOracle.mustRefreshForWrapping(XS) || "refresh" === this.mustMeasureContent,
          NS = HS.getBoundingClientRect(),
          qS = xS || this.mustMeasureContent || this.contentDOMHeight != NS.height;
        this.contentDOMHeight = NS.height, this.mustMeasureContent = !1;
        let uS = 0,
          IS = 0;
        if (NS.width && NS.height) {
          let {
            scaleX: SS,
            scaleY: gS
          } = mS(HS, NS);
          (SS > .005 && Math.abs(this.scaleX - SS) > .005 || gS > .005 && Math.abs(this.scaleY - gS) > .005) && (this.scaleX = SS, this.scaleY = gS, uS |= 16, xS = qS = !0)
        }
        let fS = (parseInt(gS.paddingTop) || 0) * this.scaleY,
          kS = (parseInt(gS.paddingBottom) || 0) * this.scaleY;
        this.paddingTop == fS && this.paddingBottom == kS || (this.paddingTop = fS, this.paddingBottom = kS, uS |= 18), this.editorWidth != SS.scrollDOM.clientWidth && (bS.lineWrapping && (qS = !0), this.editorWidth = SS.scrollDOM.clientWidth, uS |= 16);
        let aS = eS(this.view.contentDOM, !1).y;
        aS != this.scrollParent && (this.scrollParent = aS, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
        let KS = this.getScrollOffset();
        this.scrollOffset != KS && (this.scrollAnchorHeight = -1, this.scrollOffset = KS), this.scrolledToBottom = XH(this.scrollParent || SS.win);
        let jS = (this.printing ? Hb : Sb)(HS, this.paddingTop),
          GS = jS.top - this.pixelViewport.top,
          CS = jS.bottom - this.pixelViewport.bottom;
        this.pixelViewport = jS;
        let nS = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
        if (nS != this.inView && (this.inView = nS, nS && (qS = !0)), !this.inView && !this.scrollTarget && ! function(SS) {
            let HS = SS.getBoundingClientRect(),
              gS = SS.ownerDocument.defaultView || window;
            return HS.left < gS.innerWidth && HS.right > 0 && HS.top < gS.innerHeight && HS.bottom > 0
          }(SS.dom)) return 0;
        let PS = NS.width;
        if (this.contentDOMWidth == PS && this.editorHeight == SS.scrollDOM.clientHeight || (this.contentDOMWidth = NS.width, this.editorHeight = SS.scrollDOM.clientHeight, uS |= 16), qS) {
          let HS = SS.docView.measureVisibleLineHeights(this.viewport);
          if (bS.mustRefreshForHeights(HS) && (xS = !0), xS || bS.lineWrapping && Math.abs(PS - this.contentDOMWidth) > bS.charWidth) {
            let {
              lineHeight: gS,
              charWidth: tS,
              textHeight: NS
            } = SS.docView.measureTextSize();
            xS = gS > 0 && bS.refresh(XS, gS, tS, NS, Math.max(5, PS / tS), HS), xS && (SS.docView.minWidth = 0, uS |= 16)
          }
          GS > 0 && CS > 0 ? IS = Math.max(GS, CS) : GS < 0 && CS < 0 && (IS = Math.min(GS, CS)), it();
          for (let gS of this.viewports) {
            let XS = gS.from == this.viewport.from ? HS : SS.docView.measureVisibleLineHeights(gS);
            this.heightMap = (xS ? Bt.empty().applyChanges(this.stateDeco, tS.L.empty, this.heightOracle, [new ug(0, 0, 0, SS.state.doc.length)]) : this.heightMap).updateHeight(bS, 0, xS, new zt(gS.from, XS))
          }
          Vt && (uS |= 2)
        }
        let QS = !this.viewportIsAppropriate(this.viewport, IS) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
        return QS && (2 & uS && (uS |= this.updateScaler()), this.viewport = this.getViewport(IS, this.scrollTarget), uS |= this.updateForViewport()), (2 & uS || QS) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(xS ? [] : this.lineGaps, SS)), uS |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, SS.docView.enforceCursorAssoc()), uS
      }
      get visibleTop() {
        return this.scaler.fromDOM(this.pixelViewport.top)
      }
      get visibleBottom() {
        return this.scaler.fromDOM(this.pixelViewport.bottom)
      }
      getViewport(SS, HS) {
        let gS = .5 - Math.max(-.5, Math.min(.5, SS / 1e3 / 2)),
          tS = this.heightMap,
          bS = this.heightOracle,
          {
            visibleTop: XS,
            visibleBottom: xS
          } = this,
          NS = new Xb(tS.lineAt(XS - 1e3 * gS, pt.ByHeight, bS, 0, 0).from, tS.lineAt(xS + 1e3 * (1 - gS), pt.ByHeight, bS, 0, 0).to);
        if (HS) {
          let {
            head: SS
          } = HS.range;
          if (SS < NS.from || SS > NS.to) {
            let gS, XS = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
              xS = tS.lineAt(SS, pt.ByPos, bS, 0, 0);
            gS = "center" == HS.y ? (xS.top + xS.bottom) / 2 - XS / 2 : "start" == HS.y || "nearest" == HS.y && SS < NS.from ? xS.top : xS.bottom - XS, NS = new Xb(tS.lineAt(gS - 500, pt.ByHeight, bS, 0, 0).from, tS.lineAt(gS + XS + 500, pt.ByHeight, bS, 0, 0).to)
          }
        }
        return NS
      }
      mapViewport(SS, HS) {
        let gS = HS.mapPos(SS.from, -1),
          tS = HS.mapPos(SS.to, 1);
        return new Xb(this.heightMap.lineAt(gS, pt.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(tS, pt.ByPos, this.heightOracle, 0, 0).to)
      }
      viewportIsAppropriate(SS) {
        let {
          from: HS,
          to: gS
        } = SS, tS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!this.inView) return !0;
        let {
          top: bS
        } = this.heightMap.lineAt(HS, pt.ByPos, this.heightOracle, 0, 0), {
          bottom: XS
        } = this.heightMap.lineAt(gS, pt.ByPos, this.heightOracle, 0, 0), {
          visibleTop: xS,
          visibleBottom: NS
        } = this;
        return (0 == HS || bS <= xS - Math.max(10, Math.min(-tS, 250))) && (gS == this.state.doc.length || XS >= NS + Math.max(10, Math.min(tS, 250))) && bS > xS - 2e3 && XS < NS + 2e3
      }
      mapLineGaps(SS, HS) {
        if (!SS.length || HS.empty) return SS;
        let gS = [];
        for (let tS of SS) HS.touchesRange(tS.from, tS.to) || gS.push(new gb(HS.mapPos(tS.from), HS.mapPos(tS.to), tS.size, tS.displaySize));
        return gS
      }
      ensureLineGaps(SS, HS) {
        let gS = this.heightOracle.lineWrapping,
          bS = gS ? 1e4 : 2e3,
          XS = bS >> 1,
          xS = bS << 1;
        if (this.defaultTextDirection != uH.LTR && !gS) return [];
        let NS = [],
          qS = (bS, xS, uS, IS) => {
            if (xS - bS < XS) return;
            let fS = this.state.selection.main,
              kS = [fS.from];
            fS.empty || kS.push(fS.to);
            for (let SS of kS)
              if (SS > bS && SS < xS) return qS(bS, SS - 10, uS, IS), void qS(SS + 10, xS, uS, IS);
            let aS = function(SS, HS) {
              for (let gS of SS)
                if (HS(gS)) return gS;
              return
            }(SS, (SS => SS.from >= uS.from && SS.to <= uS.to && Math.abs(SS.from - bS) < XS && Math.abs(SS.to - xS) < XS && !kS.some((HS => SS.from < HS && SS.to > HS))));
            if (!aS) {
              if (xS < uS.to && HS && gS && HS.J9.some((SS => SS.from <= xS && SS.to >= xS))) {
                let SS = HS.moveToLineBoundary(tS.i.cursor(xS), !1, !0).head;
                SS > bS && (xS = SS)
              }
              let SS = this.gapSize(uS, bS, xS, IS);
              aS = new gb(bS, xS, SS, gS || SS < 2e6 ? SS : 2e6)
            }
            NS.push(aS)
          },
          uS = HS => {
            if (HS.length < xS || HS.type != ES.Text) return;
            let XS = function(SS, HS, gS) {
              let bS = [],
                XS = SS,
                xS = 0;
              tS.A.spans(gS, SS, HS, {
                span() {},
                point(SS, HS) {
                  SS > XS && (bS.push({
                    from: XS,
                    to: SS
                  }), xS += SS - XS), XS = HS
                }
              }, 20), XS < HS && (bS.push({
                from: XS,
                to: HS
              }), xS += HS - XS);
              return {
                total: xS,
                HG: bS
              }
            }(HS.from, HS.to, this.stateDeco);
            if (XS.total < xS) return;
            let NS, uS, IS = this.scrollTarget ? this.scrollTarget.range.head : null;
            if (gS) {
              let SS, gS, tS = bS / this.heightOracle.lineLength * this.heightOracle.lineHeight;
              if (null != IS) {
                let bS = Nb(XS, IS),
                  xS = ((this.visibleBottom - this.visibleTop) / 2 + tS) / HS.height;
                SS = bS - xS, gS = bS + xS
              } else SS = (this.visibleTop - HS.top - tS) / HS.height, gS = (this.visibleBottom - HS.top + tS) / HS.height;
              NS = xb(XS, SS), uS = xb(XS, gS)
            } else {
              let gS = XS.total * this.heightOracle.charWidth,
                tS = bS * this.heightOracle.charWidth,
                xS = 0;
              if (gS > 2e6)
                for (let bS of SS) bS.from >= HS.from && bS.from < HS.to && bS.size != bS.displaySize && bS.from * this.heightOracle.charWidth + xS < this.pixelViewport.left && (xS = bS.size - bS.displaySize);
              let qS, fS, kS = this.pixelViewport.left + xS,
                aS = this.pixelViewport.right + xS;
              if (null != IS) {
                let SS = Nb(XS, IS),
                  HS = ((aS - kS) / 2 + tS) / gS;
                qS = SS - HS, fS = SS + HS
              } else qS = (kS - tS) / gS, fS = (aS + tS) / gS;
              NS = xb(XS, qS), uS = xb(XS, fS)
            }
            NS > HS.from && qS(HS.from, NS, HS, XS), uS < HS.to && qS(uS, HS.to, HS, XS)
          };
        for (let tS of this.viewportLines) Array.isArray(tS.type) ? tS.type.forEach(uS) : uS(tS);
        return NS
      }
      gapSize(SS, HS, gS, tS) {
        let bS = Nb(tS, gS) - Nb(tS, HS);
        return this.heightOracle.lineWrapping ? SS.height * bS : tS.total * this.heightOracle.charWidth * bS
      }
      updateLineGaps(SS) {
        gb.same(SS, this.lineGaps) || (this.lineGaps = SS, this.lineGapDeco = LS.set(SS.map((SS => SS.draw(this, this.heightOracle.lineWrapping)))))
      }
      computeVisibleRanges(SS) {
        let HS = this.stateDeco;
        this.lineGaps.length && (HS = HS.concat(this.lineGapDeco));
        let gS = [];
        tS.A.spans(HS, this.viewport.from, this.viewport.to, {
          span(SS, HS) {
            gS.push({
              from: SS,
              to: HS
            })
          },
          point() {}
        }, 20);
        let bS = 0;
        if (gS.length != this.J9.length) bS = 12;
        else
          for (let tS = 0; tS < gS.length && !(8 & bS); tS++) {
            let HS = this.J9[tS],
              XS = gS[tS];
            HS.from == XS.from && HS.to == XS.to || (bS |= 4, SS && SS.mapPos(HS.from, -1) == XS.from && SS.mapPos(HS.to, 1) == XS.to || (bS |= 8))
          }
        return this.J9 = gS, bS
      }
      lineBlockAt(SS) {
        return SS >= this.viewport.from && SS <= this.viewport.to && this.viewportLines.find((HS => HS.from <= SS && HS.to >= SS)) || fb(this.heightMap.lineAt(SS, pt.ByPos, this.heightOracle, 0, 0), this.scaler)
      }
      lineBlockAtHeight(SS) {
        return SS >= this.viewportLines[0].top && SS <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((HS => HS.top <= SS && HS.bottom >= SS)) || fb(this.heightMap.lineAt(this.scaler.fromDOM(SS), pt.ByHeight, this.heightOracle, 0, 0), this.scaler)
      }
      getScrollOffset() {
        return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY
      }
      scrollAnchorAt(SS) {
        let HS = this.lineBlockAtHeight(SS + 8);
        return HS.from >= this.viewport.from || this.viewportLines[0].top - SS > 200 ? HS : this.viewportLines[0]
      }
      elementAtHeight(SS) {
        return fb(this.heightMap.blockAt(this.scaler.fromDOM(SS), this.heightOracle, 0, 0), this.scaler)
      }
      get docHeight() {
        return this.scaler.toDOM(this.heightMap.height)
      }
      get contentHeight() {
        return this.docHeight + this.paddingTop + this.paddingBottom
      }
    }
    class Xb {
      constructor(SS, HS) {
        this.from = SS, this.to = HS
      }
    }

    function xb(SS, HS) {
      let {
        total: gS,
        HG: tS
      } = SS;
      if (HS <= 0) return tS[0].from;
      if (HS >= 1) return tS[tS.length - 1].to;
      let bS = Math.floor(gS * HS);
      for (let XS = 0;; XS++) {
        let {
          from: SS,
          to: HS
        } = tS[XS], gS = HS - SS;
        if (bS <= gS) return SS + bS;
        bS -= gS
      }
    }

    function Nb(SS, HS) {
      let gS = 0;
      for (let {
          from: tS,
          to: bS
        }
        of SS.HG) {
        if (HS <= bS) {
          gS += HS - tS;
          break
        }
        gS += bS - tS
      }
      return gS / SS.total
    }
    const qb = {
      toDOM: SS => SS,
      fromDOM: SS => SS,
      scale: 1,
      eq(SS) {
        return SS == this
      }
    };

    function ub(SS) {
      let HS = SS.facet(Sg).filter((SS => "function" != typeof SS)),
        gS = SS.facet(gg).filter((SS => "function" != typeof SS));
      return gS.length && HS.push(tS.A.join(gS)), HS
    }
    class Ib {
      constructor(SS, HS, gS) {
        let tS = 0,
          bS = 0,
          XS = 0;
        this.viewports = gS.map((gS => {
          let {
            from: bS,
            to: XS
          } = gS, xS = HS.lineAt(bS, pt.ByPos, SS, 0, 0).top, NS = HS.lineAt(XS, pt.ByPos, SS, 0, 0).bottom;
          return tS += NS - xS, {
            from: bS,
            to: XS,
            top: xS,
            bottom: NS,
            domTop: 0,
            domBottom: 0
          }
        })), this.scale = (7e6 - tS) / (HS.height - tS);
        for (let xS of this.viewports) xS.domTop = XS + (xS.top - bS) * this.scale, XS = xS.domBottom = xS.domTop + (xS.bottom - xS.top), bS = xS.bottom
      }
      toDOM(SS) {
        for (let HS = 0, gS = 0, tS = 0;; HS++) {
          let bS = HS < this.viewports.length ? this.viewports[HS] : null;
          if (!bS || SS < bS.top) return tS + (SS - gS) * this.scale;
          if (SS <= bS.bottom) return bS.domTop + (SS - bS.top);
          gS = bS.bottom, tS = bS.domBottom
        }
      }
      fromDOM(SS) {
        for (let HS = 0, gS = 0, tS = 0;; HS++) {
          let bS = HS < this.viewports.length ? this.viewports[HS] : null;
          if (!bS || SS < bS.domTop) return gS + (SS - tS) / this.scale;
          if (SS <= bS.domBottom) return bS.top + (SS - bS.domTop);
          gS = bS.bottom, tS = bS.domBottom
        }
      }
      eq(SS) {
        return SS instanceof Ib && (this.scale == SS.scale && this.viewports.length == SS.viewports.length && this.viewports.every(((HS, gS) => HS.from == SS.viewports[gS].from && HS.to == SS.viewports[gS].to)))
      }
    }

    function fb(SS, HS) {
      if (1 == HS.scale) return SS;
      let gS = HS.toDOM(SS.top),
        tS = HS.toDOM(SS.bottom);
      return new Ut(SS.from, SS.length, gS, tS - gS, Array.isArray(SS._content) ? SS._content.map((SS => fb(SS, HS))) : SS._content)
    }
    const kb = tS.n.define({
        combine: SS => SS.join(" ")
      }),
      ab = tS.n.define({
        combine: SS => SS.indexOf(!0) > -1
      }),
      Kb = bS.c.newName(),
      jb = bS.c.newName(),
      Gb = bS.c.newName(),
      Cb = {
        "&light": "." + jb,
        "&dark": "." + Gb
      };

    function nb(SS, HS, gS) {
      return new bS.c(HS, {
        finish: HS => /&/.test(HS) ? HS.replace(/&\w*/, (HS => {
          if ("&" == HS) return SS;
          if (!gS || !gS[HS]) throw new RangeError(`Unsupported selector: ${HS}`);
          return gS[HS]
        })) : SS + " " + HS
      })
    }
    const Pb = nb("." + Kb, {
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
      }, Cb),
      Qb = {
        childList: !0,
        characterData: !0,
        subtree: !0,
        attributes: !0,
        characterDataOldValue: !0
      },
      Db = hS.ie && hS.ie_version <= 11;
    class wb {
      constructor(SS) {
        this.view = SS, this.active = !1, this.editContext = null, this.selectionRange = new rS, this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = SS.contentDOM, this.observer = new MutationObserver((HS => {
          for (let SS of HS) this.queue.push(SS);
          (hS.ie && hS.ie_version <= 11 || hS.ios && SS.composing) && HS.some((SS => "childList" == SS.type && SS.removedNodes.length || "characterData" == SS.type && SS.oldValue.length > SS.target.nodeValue.length)) ? this.flushSoon() : this.flush()
        })), !window.EditContext || !hS.android || !1 === SS.constructor.EDIT_CONTEXT || hS.chrome && hS.chrome_version < 126 || (this.editContext = new Jb(SS), SS.state.facet(RH) && (SS.contentDOM.editContext = this.editContext.editContext)), Db && (this.onCharData = SS => {
          this.queue.push({
            target: SS.target,
            type: "characterData",
            oldValue: SS.prevValue
          }), this.flushSoon()
        }), this.onSelectionChange = this.onSelectionChange.bind(this), this.WC = this.WC.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver((() => {
          var SS;
          (null === (SS = this.view.docView) || void 0 === SS ? void 0 : SS.lastUpdate) < Date.now() - 75 && this.WC()
        })), this.resizeScroll.observe(SS.scrollDOM)), this.addWindowListeners(this.win = SS.win), this.start(), "function" == typeof IntersectionObserver && (this.intersection = new IntersectionObserver((SS => {
          this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), SS.length > 0 && SS[SS.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")))
        }), {
          threshold: [0, .001]
        }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((SS => {
          SS.length > 0 && SS[SS.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"))
        }), {})), this.listenForScroll(), this.readSelectionRange()
      }
      onScrollChanged(SS) {
        this.view.inputState.runHandlers("scroll", SS), this.intersecting && this.view.measure()
      }
      onScroll(SS) {
        this.intersecting && this.flush(!1), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(SS)
      }
      WC() {
        this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout((() => {
          this.resizeTimeout = -1, this.view.requestMeasure()
        }), 50))
      }
      onPrint(SS) {
        ("change" != SS.type && SS.type || SS.matches) && (this.view.viewState.printing = !0, this.view.measure(), setTimeout((() => {
          this.view.viewState.printing = !1, this.view.requestMeasure()
        }), 500))
      }
      updateGaps(SS) {
        if (this.gapIntersection && (SS.length != this.gaps.length || this.gaps.some(((HS, gS) => HS != SS[gS])))) {
          this.gapIntersection.disconnect();
          for (let HS of SS) this.gapIntersection.observe(HS);
          this.gaps = SS
        }
      }
      onSelectionChange(SS) {
        let HS = this.selectionChanged;
        if (!this.readSelectionRange() || this.delayedAndroidKey) return;
        let {
          view: gS
        } = this, tS = this.selectionRange;
        if (gS.state.facet(RH) ? gS.root.activeElement != this.dom : !pS(this.dom, tS)) return;
        let bS = tS.anchorNode && gS.docView.tile.nearest(tS.anchorNode);
        bS && bS.isWidget() && bS.widget.ignoreEvent(SS) ? HS || (this.selectionChanged = !1) : (hS.ie && hS.ie_version <= 11 || hS.android && hS.chrome) && !gS.state.selection.main.empty && tS.focusNode && BS(tS.focusNode, tS.focusOffset, tS.anchorNode, tS.anchorOffset) ? this.flushSoon() : this.flush(!1)
      }
      readSelectionRange() {
        let {
          view: SS
        } = this, HS = zS(SS.root);
        if (!HS) return !1;
        let gS = hS.safari && 11 == SS.root.nodeType && SS.root.activeElement == this.dom && function(SS, HS) {
          if (HS.getComposedRanges) {
            let gS = HS.getComposedRanges(SS.root)[0];
            if (gS) return Zb(SS, gS)
          }
          let gS = null;

          function tS(SS) {
            SS.preventDefault(), SS.stopImmediatePropagation(), gS = SS.getTargetRanges()[0]
          }
          return SS.contentDOM.addEventListener("beforeinput", tS, !0), SS.dom.ownerDocument.execCommand("indent"), SS.contentDOM.removeEventListener("beforeinput", tS, !0), gS ? Zb(SS, gS) : null
        }(this.view, HS) || HS;
        if (!gS || this.selectionRange.eq(gS)) return !1;
        let tS = pS(this.dom, gS);
        return tS && !this.selectionChanged && SS.inputState.lastFocusTime > Date.now() - 200 && SS.inputState.lastTouchTime < Date.now() - 300 && function(SS, HS) {
          let gS = HS.focusNode,
            tS = HS.focusOffset;
          if (!gS || HS.anchorNode != gS || HS.anchorOffset != tS) return !1;
          for (tS = Math.min(tS, TS(gS));;)
            if (tS) {
              if (1 != gS.nodeType) return !1;
              let SS = gS.childNodes[tS - 1];
              "false" == SS.contentEditable ? tS-- : (gS = SS, tS = TS(gS))
            } else {
              if (gS == SS) return !0;
              tS = MS(gS), gS = gS.parentNode
            }
        }(this.dom, gS) ? (this.view.inputState.lastFocusTime = 0, SS.docView.updateSelection(), !1) : (this.selectionRange.setRange(gS), tS && (this.selectionChanged = !0), !0)
      }
      setSelectionRange(SS, HS) {
        this.selectionRange.set(SS.node, SS.offset, HS.node, HS.offset), this.selectionChanged = !1
      }
      clearSelectionRange() {
        this.selectionRange.set(null, 0, null, 0)
      }
      listenForScroll() {
        this.parentCheck = -1;
        let SS = 0,
          HS = null;
        for (let gS = this.dom; gS;)
          if (1 == gS.nodeType) !HS && SS < this.scrollTargets.length && this.scrollTargets[SS] == gS ? SS++ : HS || (HS = this.scrollTargets.slice(0, SS)), HS && HS.push(gS), gS = gS.assignedSlot || gS.parentNode;
          else {
            if (11 != gS.nodeType) break;
            gS = gS.host
          } if (SS < this.scrollTargets.length && !HS && (HS = this.scrollTargets.slice(0, SS)), HS) {
          for (let SS of this.scrollTargets) SS.removeEventListener("scroll", this.onScroll);
          for (let SS of this.scrollTargets = HS) SS.addEventListener("scroll", this.onScroll)
        }
      }
      ignore(SS) {
        if (!this.active) return SS();
        try {
          return this.stop(), SS()
        } finally {
          this.start(), this.clear()
        }
      }
      start() {
        this.active || (this.observer.observe(this.dom, Qb), Db && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0)
      }
      stop() {
        this.active && (this.active = !1, this.observer.disconnect(), Db && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData))
      }
      clear() {
        this.processRecords(), this.queue.length = 0, this.selectionChanged = !1
      }
      delayAndroidKey(SS, HS) {
        var gS;
        if (!this.delayedAndroidKey) {
          let SS = () => {
            let SS = this.delayedAndroidKey;
            if (SS) {
              this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = SS.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && SS.force && bH(this.dom, SS.key, SS.keyCode)
            }
          };
          this.flushingAndroidKey = this.view.win.requestAnimationFrame(SS)
        }
        this.delayedAndroidKey && "Enter" != SS || (this.delayedAndroidKey = {
          key: SS,
          keyCode: HS,
          force: this.lastChange < Date.now() - 50 || !!(null === (gS = this.delayedAndroidKey) || void 0 === gS ? void 0 : gS.force)
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
        for (let SS of this.observer.takeRecords()) this.queue.push(SS);
        return this.queue
      }
      processRecords() {
        let SS = this.pendingRecords();
        SS.length && (this.queue = []);
        let HS = -1,
          gS = -1,
          tS = !1;
        for (let bS of SS) {
          let SS = this.readMutation(bS);
          SS && (SS.typeOver && (tS = !0), -1 == HS ? ({
            from: HS,
            to: gS
          } = SS) : (HS = Math.min(SS.from, HS), gS = Math.max(SS.to, gS)))
        }
        return {
          from: HS,
          to: gS,
          typeOver: tS
        }
      }
      readChange() {
        let {
          from: SS,
          to: HS,
          typeOver: gS
        } = this.processRecords(), tS = this.selectionChanged && pS(this.dom, this.selectionRange);
        if (SS < 0 && !tS) return null;
        SS > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
        let bS = new gt(this.view, SS, HS, gS);
        return this.view.docView.domChanged = {
          newSel: bS.newSel ? bS.newSel.main : null
        }, bS
      }
      flush() {
        let SS = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
        SS && this.readSelectionRange();
        let HS = this.readChange();
        if (!HS) return this.view.requestMeasure(), !1;
        let gS = this.view.state,
          tS = bt(this.view, HS);
        return this.view.state == gS && (HS.domChanged || HS.newSel && !Nt(this.view.state.selection, HS.newSel.main)) && this.view.update([]), tS
      }
      readMutation(SS) {
        let HS = this.view.docView.tile.nearest(SS.target);
        if (!HS || HS.isWidget()) return null;
        if (HS.markDirty("attributes" == SS.type), "childList" == SS.type) {
          let gS = hb(HS, SS.previousSibling || SS.target.previousSibling, -1),
            tS = hb(HS, SS.nextSibling || SS.target.nextSibling, 1);
          return {
            from: gS ? HS.posAfter(gS) : HS.posAtStart,
            to: tS ? HS.posBefore(tS) : HS.posAtEnd,
            typeOver: !1
          }
        }
        return "characterData" == SS.type ? {
          from: HS.posAtStart,
          to: HS.posAtEnd,
          typeOver: SS.target.nodeValue == SS.oldValue
        } : null
      }
      setWindow(SS) {
        SS != this.win && (this.removeWindowListeners(this.win), this.win = SS, this.addWindowListeners(this.win))
      }
      addWindowListeners(SS) {
        SS.addEventListener("resize", this.WC), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : SS.addEventListener("beforeprint", this.onPrint), SS.addEventListener("scroll", this.onScroll), SS.document.addEventListener("selectionchange", this.onSelectionChange)
      }
      removeWindowListeners(SS) {
        SS.removeEventListener("scroll", this.onScroll), SS.removeEventListener("resize", this.WC), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : SS.removeEventListener("beforeprint", this.onPrint), SS.document.removeEventListener("selectionchange", this.onSelectionChange)
      }
      update(SS) {
        this.editContext && (this.editContext.update(SS), SS.startState.facet(RH) != SS.state.facet(RH) && (SS.view.contentDOM.editContext = SS.state.facet(RH) ? this.editContext.editContext : null))
      }
      destroy() {
        var SS, HS, gS;
        this.stop(), null === (SS = this.intersection) || void 0 === SS || SS.disconnect(), null === (HS = this.gapIntersection) || void 0 === HS || HS.disconnect(), null === (gS = this.resizeScroll) || void 0 === gS || gS.disconnect();
        for (let tS of this.scrollTargets) tS.removeEventListener("scroll", this.onScroll);
        this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy())
      }
    }

    function hb(SS, HS, gS) {
      for (; HS;) {
        let tS = kg.get(HS);
        if (tS && tS.parent == SS) return tS;
        let bS = HS.parentNode;
        HS = bS != SS.dom ? bS : gS > 0 ? HS.nextSibling : HS.previousSibling
      }
      return null
    }

    function Zb(SS, HS) {
      let gS = HS.startContainer,
        tS = HS.startOffset,
        bS = HS.endContainer,
        XS = HS.endOffset,
        xS = SS.docView.domAtPos(SS.state.selection.main.anchor, 1);
      return BS(xS.node, xS.offset, bS, XS) && ([gS, tS, bS, XS] = [bS, XS, gS, tS]), {
        anchorNode: gS,
        anchorOffset: tS,
        focusNode: bS,
        focusOffset: XS
      }
    }
    class Jb {
      constructor(SS) {
        this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = Object.create(null), this.composing = null, this.resetRange(SS.state);
        let HS = this.editContext = new window.EditContext({
          text: SS.state.doc.sliceString(this.from, this.to),
          selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, SS.state.selection.main.anchor))),
          selectionEnd: this.toContextPos(SS.state.selection.main.head)
        });
        this.handlers.textupdate = gS => {
          let bS = SS.state.selection.main,
            {
              anchor: XS,
              head: xS
            } = bS,
            NS = this.toEditorPos(gS.updateRangeStart),
            qS = this.toEditorPos(gS.updateRangeEnd);
          SS.inputState.composing >= 0 && !this.composing && (this.composing = {
            contextBase: gS.updateRangeStart,
            editorBase: NS,
            drifted: !1
          });
          let uS = qS - NS > gS.text.length;
          NS == this.from && XS < this.from ? NS = XS : qS == this.to && XS > this.to && (qS = XS);
          let IS = xt(SS.state.sliceDoc(NS, qS), gS.text, (uS ? bS.from : bS.to) - NS, uS ? "end" : null);
          if (!IS) {
            let HS = tS.i.single(this.toEditorPos(gS.selectionStart), this.toEditorPos(gS.selectionEnd));
            return void(Nt(HS, bS) || SS.dispatch({
              selection: HS,
              userEvent: "select"
            }))
          }
          let fS = {
            from: IS.from + NS,
            to: IS.toA + NS,
            insert: tS.L.of(gS.text.slice(IS.from, IS.toB).split("\n"))
          };
          if ((hS.mac || hS.android) && fS.from == xS - 1 && /^\. ?$/.test(gS.text) && "off" == SS.contentDOM.getAttribute("autocorrect") && (fS = {
              from: NS,
              to: qS,
              insert: tS.L.of([gS.text.replace(".", " ")])
            }), this.pendingContextChange = fS, !SS.state.readOnly) {
            let HS = this.to - this.from + (fS.to - fS.from + fS.insert.length);
            Xt(SS, fS, tS.i.single(this.toEditorPos(gS.selectionStart, HS), this.toEditorPos(gS.selectionEnd, HS)))
          }
          this.pendingContextChange && (this.revertPending(SS.state), this.setSelection(SS.state)), fS.from < fS.to && !fS.insert.length && SS.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(HS.text.slice(Math.max(0, gS.updateRangeStart - 1), Math.min(HS.text.length, gS.updateRangeStart + 1))) && this.handlers.compositionend(gS)
        }, this.handlers.characterboundsupdate = gS => {
          let tS = [],
            bS = null;
          for (let HS = this.toEditorPos(gS.rangeStart), XS = this.toEditorPos(gS.rangeEnd); HS < XS; HS++) {
            let gS = SS.coordsForChar(HS);
            bS = gS && new DOMRect(gS.left, gS.top, gS.right - gS.left, gS.bottom - gS.top) || bS || new DOMRect, tS.push(bS)
          }
          HS.updateCharacterBounds(gS.rangeStart, tS)
        }, this.handlers.textformatupdate = HS => {
          let gS = [];
          for (let SS of HS.getTextFormats()) {
            let HS = SS.underlineStyle,
              tS = SS.underlineThickness;
            if (!/none/i.test(HS) && !/none/i.test(tS)) {
              let bS = this.toEditorPos(SS.rangeStart),
                XS = this.toEditorPos(SS.rangeEnd);
              if (bS < XS) {
                let SS = `text-decoration: underline ${/^[a-z]/.test(HS)?HS+" ":"Dashed"==HS?"dashed ":"Squiggle"==HS?"wavy ":""}${/thin/i.test(tS)?1:2}px`;
                gS.push(LS.mark({
                  attributes: {
                    style: SS
                  }
                }).range(bS, XS))
              }
            }
          }
          SS.dispatch({
            effects: MH.of(LS.set(gS))
          })
        }, this.handlers.compositionstart = () => {
          SS.inputState.composing < 0 && (SS.inputState.composing = 0, SS.inputState.compositionFirstChange = !0)
        }, this.handlers.compositionend = () => {
          if (SS.inputState.composing = -1, SS.inputState.compositionFirstChange = null, this.composing) {
            let {
              drifted: HS
            } = this.composing;
            this.composing = null, HS && this.reset(SS.state)
          }
        };
        for (let gS in this.handlers) HS.addEventListener(gS, this.handlers[gS]);
        this.measureReq = {
          read: SS => {
            this.editContext.updateControlBounds(SS.contentDOM.getBoundingClientRect());
            let HS = zS(SS.root);
            HS && HS.rangeCount && this.editContext.updateSelectionBounds(HS.getRangeAt(0).getBoundingClientRect())
          }
        }
      }
      applyEdits(SS) {
        let HS = 0,
          gS = !1,
          tS = this.pendingContextChange;
        return SS.changes.iterChanges(((bS, XS, xS, NS, qS) => {
          if (gS) return;
          let uS = qS.length - (XS - bS);
          if (tS && XS >= tS.to) {
            if (tS.from == bS && tS.to == XS && tS.insert.eq(qS)) return tS = this.pendingContextChange = null, HS += uS, void(this.to += uS);
            tS = null, this.revertPending(SS.state)
          }
          if (bS += HS, (XS += HS) <= this.from) this.from += uS, this.to += uS;
          else if (bS < this.to) {
            if (bS < this.from || XS > this.to || this.to - this.from + qS.length > 3e4) return void(gS = !0);
            this.editContext.updateText(this.toContextPos(bS), this.toContextPos(XS), qS.toString()), this.to += uS
          }
          HS += uS
        })), tS && !gS && this.revertPending(SS.state), !gS
      }
      update(SS) {
        let HS = this.pendingContextChange,
          gS = SS.startState.selection.main;
        this.composing && (this.composing.drifted || !SS.changes.touchesRange(gS.from, gS.to) && SS.transactions.some((SS => !SS.isUserEvent("input.type") && SS.changes.touchesRange(this.from, this.to)))) ? (this.composing.drifted = !0, this.composing.editorBase = SS.changes.mapPos(this.composing.editorBase)) : this.applyEdits(SS) && this.rangeIsValid(SS.state) ? (SS.docChanged || SS.selectionSet || HS) && this.setSelection(SS.state) : (this.pendingContextChange = null, this.reset(SS.state)), (SS.geometryChanged || SS.docChanged || SS.selectionSet) && SS.view.requestMeasure(this.measureReq)
      }
      resetRange(SS) {
        let {
          head: HS
        } = SS.selection.main;
        this.from = Math.max(0, HS - 1e4), this.to = Math.min(SS.doc.length, HS + 1e4)
      }
      reset(SS) {
        this.resetRange(SS), this.editContext.updateText(0, this.editContext.text.length, SS.doc.sliceString(this.from, this.to)), this.setSelection(SS)
      }
      revertPending(SS) {
        let HS = this.pendingContextChange;
        this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(HS.from), this.toContextPos(HS.from + HS.insert.length), SS.doc.sliceString(HS.from, HS.to))
      }
      setSelection(SS) {
        let {
          main: HS
        } = SS.selection, gS = this.toContextPos(Math.max(this.from, Math.min(this.to, HS.anchor))), tS = this.toContextPos(HS.head);
        this.editContext.selectionStart == gS && this.editContext.selectionEnd == tS || this.editContext.updateSelection(gS, tS)
      }
      rangeIsValid(SS) {
        let {
          head: HS
        } = SS.selection.main;
        return !(this.from > 0 && HS - this.from < 500 || this.to < SS.doc.length && this.to - HS < 500 || this.to - this.from > 3e4)
      }
      toEditorPos(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.to - this.from;
        SS = Math.min(SS, HS);
        let gS = this.composing;
        return gS && gS.drifted ? gS.editorBase + (SS - gS.contextBase) : SS + this.from
      }
      toContextPos(SS) {
        let HS = this.composing;
        return HS && HS.drifted ? HS.contextBase + (SS - HS.editorBase) : SS - this.from
      }
      destroy() {
        for (let SS in this.handlers) this.editContext.removeEventListener(SS, this.handlers[SS])
      }
    }
    class Ob {
      get state() {
        return this.viewState.state
      }
      get viewport() {
        return this.viewState.viewport
      }
      get J9() {
        return this.viewState.J9
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
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var HS;
        this.plugins = [], this.pluginMap = new Map, this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), SS.parent && SS.parent.appendChild(this.dom);
        let {
          dispatch: gS
        } = SS;
        this.dispatchTransactions = SS.dispatchTransactions || gS && (SS => SS.forEach((SS => gS(SS, this)))) || (SS => this.update(SS)), this.dispatch = this.dispatch.bind(this), this._root = SS.root || function(SS) {
          for (; SS;) {
            if (SS && (9 == SS.nodeType || 11 == SS.nodeType && SS.host)) return SS;
            SS = SS.assignedSlot || SS.parentNode
          }
          return null
        }(SS.parent) || document, this.viewState = new bb(this, SS.state || tS.m.create(SS)), SS.scrollTo && SS.scrollTo.is(BH) && (this.viewState.scrollTarget = SS.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(oH).map((SS => new mH(SS)));
        for (let tS of this.plugins) tS.update(this);
        this.observer = new wb(this), this.inputState = new qt(this), this.inputState.ensureHandlers(this.plugins), this.docView = new Vg(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), (null === (HS = document.fonts) || void 0 === HS ? void 0 : HS.ready) && document.fonts.ready.then((() => {
          this.viewState.mustMeasureContent = "refresh", this.requestMeasure()
        }))
      }
      dispatch() {
        for (var SS = arguments.length, HS = new Array(SS), gS = 0; gS < SS; gS++) HS[gS] = arguments[gS];
        let bS = 1 == HS.length && HS[0] instanceof tS.N ? HS : 1 == HS.length && Array.isArray(HS[0]) ? HS[0] : [this.state.update(...HS)];
        this.dispatchTransactions(bS, this)
      }
      update(SS) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        let HS, gS = !1,
          bS = !1,
          XS = this.state;
        for (let tS of SS) {
          if (tS.startState != XS) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
          XS = tS.state
        }
        if (this.destroyed) return void(this.viewState.state = XS);
        let xS = this.hasFocus,
          NS = 0,
          qS = null;
        SS.some((SS => SS.annotation(Et))) ? (this.inputState.notifiedFocused = xS, NS = 1) : xS != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = xS, qS = Lt(XS, xS), qS || (NS = 1));
        let uS = this.observer.delayedAndroidKey,
          IS = null;
        if (uS ? (this.observer.clearDelayedAndroidKey(), IS = this.observer.readChange(), (IS && !this.state.doc.eq(XS.doc) || !this.state.selection.eq(XS.selection)) && (IS = null)) : this.observer.clear(), XS.facet(tS.m.phrases) != this.state.facet(tS.m.phrases)) return this.setState(XS);
        HS = Ig.create(this, XS, SS), HS.flags |= NS;
        let fS = this.viewState.scrollTarget;
        try {
          this.updateState = 2;
          for (let HS of SS) {
            if (fS && (fS = fS.map(HS.changes)), HS.scrollIntoView) {
              let {
                main: SS
              } = HS.state.selection, {
                x: gS,
                y: bS
              } = this.state.facet(Ob.cursorScrollMargin);
              fS = new sH(SS.empty ? SS : tS.i.cursor(SS.head, SS.head > SS.anchor ? -1 : 1), "nearest", "nearest", bS, gS)
            }
            for (let SS of HS.effects) SS.is(BH) && (fS = SS.value.clip(this.state))
          }
          this.viewState.update(HS, fS), this.bidiCache = vb.update(this.bidiCache, HS.changes), HS.empty || (this.updatePlugins(HS), this.inputState.update(HS)), gS = this.docView.update(HS), this.state.facet(qg) != this.styleModules && this.mountStyles(), bS = this.updateAttrs(), this.showAnnouncements(SS), this.docView.updateSelection(gS, SS.some((SS => SS.isUserEvent("select.pointer"))))
        } finally {
          this.updateState = 0
        }
        if (HS.startState.facet(kb) != HS.state.facet(kb) && (this.viewState.mustMeasureContent = !0), (gS || bS || fS || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), gS && this.docViewUpdate(), !HS.empty)
          for (let tS of this.state.facet(AH)) try {
            tS(HS)
          } catch (kS) {
            FH(this.state, kS, "update listener")
          }(qS || IS) && Promise.resolve().then((() => {
            qS && this.state == qS.startState && this.dispatch(qS), IS && !bt(this, IS) && uS.force && bH(this.contentDOM, uS.key, uS.keyCode)
          }))
      }
      setState(SS) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
        if (this.destroyed) return void(this.viewState.state = SS);
        this.updateState = 2;
        let HS = this.hasFocus;
        try {
          for (let SS of this.plugins) SS.destroy(this);
          this.viewState = new bb(this, SS), this.plugins = SS.facet(oH).map((SS => new mH(SS))), this.pluginMap.clear();
          for (let SS of this.plugins) SS.update(this);
          this.docView.destroy(), this.docView = new Vg(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = []
        } finally {
          this.updateState = 0
        }
        HS && this.focus(), this.requestMeasure()
      }
      updatePlugins(SS) {
        let HS = SS.startState.facet(oH),
          gS = SS.state.facet(oH);
        if (HS != gS) {
          let tS = [];
          for (let bS of gS) {
            let gS = HS.indexOf(bS);
            if (gS < 0) tS.push(new mH(bS));
            else {
              let HS = this.plugins[gS];
              HS.mustUpdate = SS, tS.push(HS)
            }
          }
          for (let HS of this.plugins) HS.mustUpdate != SS && HS.destroy(this);
          this.plugins = tS, this.pluginMap.clear()
        } else
          for (let tS of this.plugins) tS.mustUpdate = SS;
        for (let tS = 0; tS < this.plugins.length; tS++) this.plugins[tS].update(this);
        HS != gS && this.inputState.ensureHandlers(this.plugins)
      }
      docViewUpdate() {
        for (let HS of this.plugins) {
          let gS = HS.value;
          if (gS && gS.docViewUpdate) try {
            gS.docViewUpdate(this)
          } catch (SS) {
            FH(this.state, SS, "doc view update listener")
          }
        }
      }
      measure() {
        let SS = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.destroyed) return;
        if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) return this.measureScheduled = -1, void this.requestMeasure();
        this.measureScheduled = 0, SS && this.observer.forceFlush();
        let HS = null,
          gS = this.viewState.scrollParent,
          tS = this.viewState.getScrollOffset(),
          {
            scrollAnchorPos: bS,
            scrollAnchorHeight: XS
          } = this.viewState;
        Math.abs(tS - this.viewState.scrollOffset) > 1 && (XS = -1), this.viewState.scrollAnchorHeight = -1;
        try {
          for (let SS = 0;; SS++) {
            if (XS < 0)
              if (XH(gS || this.win)) bS = -1, XS = this.viewState.heightMap.height;
              else {
                let SS = this.viewState.scrollAnchorAt(tS);
                bS = SS.from, XS = SS.top
              } this.updateState = 1;
            let NS = this.viewState.measure();
            if (!NS && !this.measureRequests.length && null == this.viewState.scrollTarget) break;
            if (SS > 5) {
              console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
              break
            }
            let qS = [];
            4 & NS || ([this.measureRequests, qS] = [qS, this.measureRequests]);
            let uS = qS.map((SS => {
                try {
                  return SS.read(this)
                } catch (HS) {
                  return FH(this.state, HS), cb
                }
              })),
              IS = Ig.create(this, this.state, []),
              fS = !1;
            IS.flags |= NS, HS ? HS.flags |= NS : HS = IS, this.updateState = 2, IS.empty || (this.updatePlugins(IS), this.inputState.update(IS), this.updateAttrs(), fS = this.docView.update(IS), fS && this.docViewUpdate());
            for (let SS = 0; SS < qS.length; SS++)
              if (uS[SS] != cb) try {
                let HS = qS[SS];
                HS.write && HS.write(uS[SS], this)
              } catch (xS) {
                FH(this.state, xS)
              }
            if (fS && this.docView.updateSelection(!0), !IS.viewportChanged && 0 == this.measureRequests.length) {
              if (this.viewState.editorHeight) {
                if (this.viewState.scrollTarget) {
                  this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, XS = -1;
                  continue
                } {
                  let SS = ((bS < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(bS).top) - XS) / this.scaleY;
                  if ((SS > 1 || SS < -1) && (gS == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                    tS += SS, gS ? gS.scrollTop += SS : this.win.scrollBy(0, SS), XS = -1;
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
        if (HS && !HS.empty)
          for (let NS of this.state.facet(AH)) NS(HS)
      }
      get themeClasses() {
        return Kb + " " + (this.state.facet(ab) ? Gb : jb) + " " + this.state.facet(kb)
      }
      updateAttrs() {
        let SS = Eb(this, eH, {
            class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
          }),
          HS = {
            spellcheck: "false",
            autocorrect: "off",
            autocapitalize: "off",
            writingsuggestions: "false",
            translate: "no",
            contenteditable: this.state.facet(RH) ? "true" : "false",
            class: "cm-content",
            style: `${hS.tabSize}: ${this.state.tabSize}`,
            role: "textbox",
            "aria-multiline": "true"
          };
        this.state.readOnly && (HS["aria-readonly"] = "true"), Eb(this, rH, HS);
        let gS = this.observer.ignore((() => {
          let gS = dS(this.contentDOM, this.contentAttrs, HS),
            tS = dS(this.dom, this.editorAttrs, SS);
          return gS || tS
        }));
        return this.editorAttrs = SS, this.contentAttrs = HS, gS
      }
      showAnnouncements(SS) {
        let HS = !0;
        for (let gS of SS)
          for (let SS of gS.effects)
            if (SS.is(Ob.announce)) {
              HS && (this.announceDOM.textContent = ""), HS = !1, this.announceDOM.appendChild(document.createElement("div")).textContent = SS.value
            }
      }
      mountStyles() {
        this.styleModules = this.state.facet(qg);
        let SS = this.state.facet(Ob.cspNonce);
        bS.c.mount(this.root, this.styleModules.concat(Pb).reverse(), SS ? {
          nonce: SS
        } : void 0)
      }
      readMeasured() {
        if (2 == this.updateState) throw new Error("Reading the editor layout isn't allowed during an update");
        0 == this.updateState && this.measureScheduled > -1 && this.measure(!1)
      }
      requestMeasure(SS) {
        if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame((() => this.measure()))), SS) {
          if (this.measureRequests.indexOf(SS) > -1) return;
          if (null != SS.key)
            for (let HS = 0; HS < this.measureRequests.length; HS++)
              if (this.measureRequests[HS].key === SS.key) return void(this.measureRequests[HS] = SS);
          this.measureRequests.push(SS)
        }
      }
      plugin(SS) {
        let HS = this.pluginMap.get(SS);
        return (void 0 === HS || HS && HS.plugin != SS) && this.pluginMap.set(SS, HS = this.plugins.find((HS => HS.plugin == SS)) || null), HS && HS.update(this).value
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
      elementAtHeight(SS) {
        return this.readMeasured(), this.viewState.elementAtHeight(SS)
      }
      lineBlockAtHeight(SS) {
        return this.readMeasured(), this.viewState.lineBlockAtHeight(SS)
      }
      get viewportLineBlocks() {
        return this.viewState.viewportLines
      }
      lineBlockAt(SS) {
        return this.viewState.lineBlockAt(SS)
      }
      get contentHeight() {
        return this.viewState.contentHeight
      }
      moveByChar(SS, HS, gS) {
        return Rg(this, SS, Bg(this, SS, HS, gS))
      }
      moveByGroup(SS, HS) {
        return Rg(this, SS, Bg(this, SS, HS, (HS => function(SS, HS, gS) {
          let bS = SS.state.charCategorizer(HS),
            XS = bS(gS);
          return SS => {
            let HS = bS(SS);
            return XS == tS.g.Space && (XS = HS), XS == HS
          }
        }(this, SS.head, HS))))
      }
      visualLineSide(SS, HS) {
        let gS = this.bidiSpans(SS),
          bS = this.textDirectionAt(SS.from),
          XS = gS[HS ? gS.length - 1 : 0];
        return tS.i.cursor(XS.side(HS, bS) + SS.from, XS.forward(!HS, bS) ? 1 : -1)
      }
      moveToLineBoundary(SS, HS) {
        return function(SS, HS, gS, bS) {
          let XS = sg(SS, HS.head, HS.assoc || -1),
            xS = bS && XS.type == ES.Text && (SS.lineWrapping || XS.widgetLineBreaks) ? SS.coordsAtPos(HS.assoc < 0 && HS.head > XS.from ? HS.head - 1 : HS.head) : null;
          if (xS) {
            let HS = SS.dom.getBoundingClientRect(),
              bS = SS.textDirectionAt(XS.from),
              NS = SS.posAtCoords({
                x: gS == (bS == uH.LTR) ? HS.right - 1 : HS.left + 1,
                y: (xS.top + xS.bottom) / 2
              });
            if (null != NS) return tS.i.cursor(NS, gS ? -1 : 1)
          }
          return tS.i.cursor(gS ? XS.to : XS.from, gS ? -1 : 1)
        }(this, SS, HS, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2])
      }
      moveVertically(SS, HS, gS) {
        return Rg(this, SS, function(SS, HS, gS, bS) {
          let XS = HS.head,
            xS = gS ? 1 : -1;
          if (XS == (gS ? SS.state.doc.length : 0)) return tS.i.cursor(XS, HS.assoc);
          let NS, qS = HS.goalColumn,
            uS = SS.contentDOM.getBoundingClientRect(),
            IS = SS.coordsAtPos(XS, HS.assoc || ((HS.empty ? gS : HS.head == HS.from) ? 1 : -1)),
            fS = SS.documentTop;
          if (IS) null == qS && (qS = IS.left - uS.left), NS = xS < 0 ? IS.top : IS.bottom;
          else {
            let HS = SS.viewState.lineBlockAt(XS);
            null == qS && (qS = Math.min(uS.right - uS.left, SS.defaultCharacterWidth * (XS - HS.from))), NS = (xS < 0 ? HS.top : HS.bottom) + fS
          }
          let kS = uS.left + qS,
            aS = SS.viewState.heightOracle.textHeight >> 1,
            KS = null !== bS && void 0 !== bS ? bS : aS;
          for (let jS = 0;; jS += aS) {
            let HS = NS + (KS + jS) * xS,
              bS = og(SS, {
                x: kS,
                y: HS
              }, !1, xS);
            if (gS ? HS > uS.bottom : HS < uS.top) return tS.i.cursor(bS.pos, bS.assoc);
            let XS = SS.coordsAtPos(bS.pos, bS.assoc),
              IS = XS ? (XS.top + XS.bottom) / 2 : 0;
            if (!XS || (gS ? IS > NS : IS < NS)) return tS.i.cursor(bS.pos, bS.assoc, void 0, qS)
          }
        }(this, SS, HS, gS))
      }
      domAtPos(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return this.docView.domAtPos(SS, HS)
      }
      posAtDOM(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.docView.posFromDOM(SS, HS)
      }
      posAtCoords(SS) {
        let HS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this.readMeasured();
        let gS = og(this, SS, HS);
        return gS && gS.pos
      }
      posAndSideAtCoords(SS) {
        let HS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return this.readMeasured(), og(this, SS, HS)
      }
      coordsAtPos(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.readMeasured();
        let gS = this.docView.coordsAt(SS, HS);
        if (!gS || gS.left == gS.right) return gS;
        let tS = this.state.doc.lineAt(SS),
          bS = this.bidiSpans(tS);
        return oS(gS, bS[PH.find(bS, SS - tS.from, -1, HS)].dir == uH.LTR == HS > 0)
      }
      coordsForChar(SS) {
        return this.readMeasured(), this.docView.coordsForChar(SS)
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
      textDirectionAt(SS) {
        return !this.state.facet(zH) || SS < this.viewport.from || SS > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(SS))
      }
      get lineWrapping() {
        return this.viewState.heightOracle.lineWrapping
      }
      bidiSpans(SS) {
        if (SS.length > db) return JH(SS.length);
        let HS, gS = this.textDirectionAt(SS.from);
        for (let bS of this.bidiCache)
          if (bS.from == SS.from && bS.dir == gS && (bS.fresh || QH(bS.isolates, HS = Xg(this, SS)))) return bS.order;
        HS || (HS = Xg(this, SS));
        let tS = ZH(SS.text, gS, HS);
        return this.bidiCache.push(new vb(SS.from, SS.to, gS, HS, !0, tS)), tS
      }
      get hasFocus() {
        var SS;
        return (this.dom.ownerDocument.hasFocus() || hS.safari && (null === (SS = this.inputState) || void 0 === SS ? void 0 : SS.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM
      }
      focus() {
        this.observer.ignore((() => {
          gH(this.contentDOM), this.docView.updateSelection()
        }))
      }
      setRoot(SS) {
        this._root != SS && (this._root = SS, this.observer.setWindow((9 == SS.nodeType ? SS : SS.ownerDocument).defaultView || window), this.mountStyles())
      }
      destroy() {
        this.root.activeElement == this.contentDOM && this.contentDOM.blur();
        for (let SS of this.plugins) SS.destroy(this);
        this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0
      }
      static scrollIntoView(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var gS, bS, XS, xS;
        return BH.of(new sH("number" == typeof SS ? tS.i.cursor(SS) : SS, null !== (gS = HS.y) && void 0 !== gS ? gS : "nearest", null !== (bS = HS.x) && void 0 !== bS ? bS : "nearest", null !== (XS = HS.yMargin) && void 0 !== XS ? XS : 5, null !== (xS = HS.xMargin) && void 0 !== xS ? xS : 5))
      }
      scrollSnapshot() {
        let {
          scrollTop: SS,
          scrollLeft: HS
        } = this.scrollDOM, gS = this.viewState.scrollAnchorAt(SS);
        return BH.of(new sH(tS.i.cursor(gS.from), "start", "start", gS.top - SS, HS, !0))
      }
      setTabFocusMode(SS) {
        null == SS ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof SS ? this.inputState.tabFocusMode = SS ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + SS)
      }
      static domEventHandlers(SS) {
        return lH.define((() => ({})), {
          eventHandlers: SS
        })
      }
      static domEventObservers(SS) {
        return lH.define((() => ({})), {
          eventObservers: SS
        })
      }
      static theme(SS, HS) {
        let gS = bS.c.newName(),
          tS = [kb.of(gS), qg.of(nb(`.${gS}`, SS))];
        return HS && HS.dark && tS.push(ab.of(!0)), tS
      }
      static baseTheme(SS) {
        return tS.s.lowest(qg.of(nb("." + Kb, SS, Cb)))
      }
      static findFromDOM(SS) {
        var HS;
        let gS = SS.querySelector(".cm-content"),
          tS = gS && kg.get(gS) || kg.get(SS);
        return (null === (HS = null === tS || void 0 === tS ? void 0 : tS.root) || void 0 === HS ? void 0 : HS.view) || null
      }
    }
    Ob.styleModule = qg, Ob.inputHandler = yH, Ob.clipboardInputFilter = iH, Ob.clipboardOutputFilter = WH, Ob.scrollHandler = pH, Ob.focusChangeEffect = VH, Ob.perLineTextDirection = zH, Ob.exceptionSink = YH, Ob.updateListener = AH, Ob.editable = RH, Ob.mouseSelectionStyle = LH, Ob.dragMovesSelection = EH, Ob.clickAddsSelectionRange = vH, Ob.KS = Sg, Ob.blockWrappers = Hg, Ob.outerDecorations = gg, Ob.atomicRanges = tg, Ob.bidiIsolatedRanges = bg, Ob.cursorScrollMargin = tS.n.define({
      combine: SS => {
        let HS = 5,
          gS = 5;
        for (let tS of SS) "number" == typeof tS ? HS = gS = tS : ({
          x: HS,
          y: gS
        } = tS);
        return {
          x: HS,
          y: gS
        }
      }
    }), Ob.scrollMargins = xg, Ob.darkTheme = ab, Ob.cspNonce = tS.n.define({
      combine: SS => SS.length ? SS[0] : ""
    }), Ob.contentAttributes = rH, Ob.editorAttributes = eH, Ob.lineWrapping = Ob.contentAttributes.of({
      class: "cm-lineWrapping"
    }), Ob.announce = tS.G.define();
    const db = 4096,
      cb = {};
    class vb {
      constructor(SS, HS, gS, tS, bS, XS) {
        this.from = SS, this.to = HS, this.dir = gS, this.isolates = tS, this.fresh = bS, this.order = XS
      }
      static update(SS, HS) {
        if (HS.empty && !SS.some((SS => SS.fresh))) return SS;
        let gS = [],
          tS = SS.length ? SS[SS.length - 1].dir : uH.LTR;
        for (let bS = Math.max(0, SS.length - 10); bS < SS.length; bS++) {
          let XS = SS[bS];
          XS.dir != tS || HS.touchesRange(XS.from, XS.to) || gS.push(new vb(HS.mapPos(XS.from, 1), HS.mapPos(XS.to, -1), XS.dir, XS.isolates, !1, XS.order))
        }
        return gS
      }
    }

    function Eb(SS, HS, gS) {
      for (let tS = SS.state.facet(HS), bS = tS.length - 1; bS >= 0; bS--) {
        let HS = tS[bS],
          XS = "function" == typeof HS ? HS(SS) : HS;
        XS && ZS(XS, gS)
      }
      return gS
    }
    const Lb = hS.mac ? "mac" : hS.windows ? "win" : hS.linux ? "linux" : "key";

    function Yb(SS, HS, gS) {
      return HS.altKey && (SS = "Alt-" + SS), HS.ctrlKey && (SS = "Ctrl-" + SS), HS.metaKey && (SS = "Meta-" + SS), !1 !== gS && HS.shiftKey && (SS = "Shift-" + SS), SS
    }
    const Ab = tS.s.default(Ob.domEventHandlers({
        keydown: (SS, HS) => sb(ib(HS.state), SS, HS, "editor")
      })),
      yb = tS.n.define({
        enables: Ab
      }),
      Vb = new WeakMap;

    function ib(SS) {
      let HS = SS.facet(yb),
        gS = Vb.get(HS);
      return gS || Vb.set(HS, gS = function(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Lb,
          gS = Object.create(null),
          tS = Object.create(null),
          bS = (SS, HS) => {
            let gS = tS[SS];
            if (null == gS) tS[SS] = HS;
            else if (gS != HS) throw new Error("Key binding " + SS + " is used both as a regular binding and as a multi-stroke prefix")
          },
          XS = (SS, tS, XS, xS, NS) => {
            var qS, uS;
            let IS = gS[SS] || (gS[SS] = Object.create(null)),
              fS = tS.split(/ (?!$)/).map((SS => function(SS, HS) {
                const gS = SS.split(/-(?!$)/);
                let tS, bS, XS, xS, NS = gS[gS.length - 1];
                "Space" == NS && (NS = " ");
                for (let qS = 0; qS < gS.length - 1; ++qS) {
                  const SS = gS[qS];
                  if (/^(cmd|meta|m)$/i.test(SS)) xS = !0;
                  else if (/^a(lt)?$/i.test(SS)) tS = !0;
                  else if (/^(c|ctrl|control)$/i.test(SS)) bS = !0;
                  else if (/^s(hift)?$/i.test(SS)) XS = !0;
                  else {
                    if (!/^mod$/i.test(SS)) throw new Error("Unrecognized modifier name: " + SS);
                    "mac" == HS ? xS = !0 : bS = !0
                  }
                }
                return tS && (NS = "Alt-" + NS), bS && (NS = "Ctrl-" + NS), xS && (NS = "Meta-" + NS), XS && (NS = "Shift-" + NS), NS
              }(SS, HS)));
            for (let HS = 1; HS < fS.length; HS++) {
              let gS = fS.slice(0, HS).join(" ");
              bS(gS, !0), IS[gS] || (IS[gS] = {
                preventDefault: !0,
                stopPropagation: !1,
                run: [HS => {
                  let tS = zb = {
                    view: HS,
                    prefix: gS,
                    scope: SS
                  };
                  return setTimeout((() => {
                    zb == tS && (zb = null)
                  }), Ub), !0
                }]
              })
            }
            let kS = fS.join(" ");
            bS(kS, !1);
            let aS = IS[kS] || (IS[kS] = {
              preventDefault: !1,
              stopPropagation: !1,
              run: (null === (uS = null === (qS = IS._any) || void 0 === qS ? void 0 : qS.run) || void 0 === uS ? void 0 : uS.slice()) || []
            });
            XS && aS.run.push(XS), xS && (aS.preventDefault = !0), NS && (aS.stopPropagation = !0)
          };
        for (let xS of SS) {
          let SS = xS.scope ? xS.scope.split(" ") : ["editor"];
          if (xS.any)
            for (let HS of SS) {
              let SS = gS[HS] || (gS[HS] = Object.create(null));
              SS._any || (SS._any = {
                preventDefault: !1,
                stopPropagation: !1,
                run: []
              });
              let {
                any: tS
              } = xS;
              for (let HS in SS) SS[HS].run.push((SS => tS(SS, pb)))
            }
          let tS = xS[HS] || xS.key;
          if (tS)
            for (let HS of SS) XS(HS, tS, xS.run, xS.preventDefault, xS.stopPropagation), xS.shift && XS(HS, "Shift-" + tS, xS.shift, xS.preventDefault, xS.stopPropagation)
        }
        return gS
      }(HS.reduce(((SS, HS) => SS.concat(HS)), []))), gS
    }

    function Wb(SS, HS, gS) {
      return sb(ib(SS.state), HS, SS, gS)
    }
    let zb = null;
    const Ub = 4e3;
    let pb = null;

    function sb(SS, HS, gS, bS) {
      pb = HS;
      let uS = function(SS) {
          var HS = !(NS && SS.metaKey && SS.shiftKey && !SS.ctrlKey && !SS.altKey || qS && SS.shiftKey && SS.key && 1 == SS.key.length || "Unidentified" == SS.key) && SS.key || (SS.shiftKey ? xS : XS)[SS.keyCode] || SS.key || "Unidentified";
          return "Esc" == HS && (HS = "Escape"), "Del" == HS && (HS = "Delete"), "Left" == HS && (HS = "ArrowLeft"), "Up" == HS && (HS = "ArrowUp"), "Right" == HS && (HS = "ArrowRight"), "Down" == HS && (HS = "ArrowDown"), HS
        }(HS),
        IS = (0, tS.Q)(uS, 0),
        fS = (0, tS.T)(IS) == uS.length && " " != uS,
        kS = "",
        aS = !1,
        KS = !1,
        jS = !1;
      zb && zb.view == gS && zb.scope == bS && (kS = zb.prefix + " ", Kt.indexOf(HS.keyCode) < 0 && (KS = !0, zb = null));
      let GS, CS, nS = new Set,
        PS = SS => {
          if (SS) {
            for (let HS of SS.run)
              if (!nS.has(HS) && (nS.add(HS), HS(gS))) return SS.stopPropagation && (jS = !0), !0;
            SS.preventDefault && (SS.stopPropagation && (jS = !0), KS = !0)
          }
          return !1
        },
        QS = SS[bS];
      return QS && (PS(QS[kS + Yb(uS, HS, !fS)]) ? aS = !0 : !fS || !(HS.altKey || HS.metaKey || HS.ctrlKey) || hS.windows && HS.ctrlKey && HS.altKey || hS.mac && HS.altKey && !HS.ctrlKey && !HS.metaKey || !(GS = XS[HS.keyCode]) || GS == uS ? fS && HS.shiftKey && PS(QS[kS + Yb(uS, HS, !0)]) && (aS = !0) : (PS(QS[kS + Yb(GS, HS, !0)]) || HS.shiftKey && (CS = xS[HS.keyCode]) != uS && CS != GS && PS(QS[kS + Yb(CS, HS, !1)])) && (aS = !0), !aS && PS(QS._any) && (aS = !0)), KS && (aS = !0), aS && jS && HS.stopPropagation(), pb = null, aS
    }
    class Bb {
      constructor(SS, HS, gS, tS, bS) {
        this.className = SS, this.left = HS, this.top = gS, this.width = tS, this.height = bS
      }
      draw() {
        let SS = document.createElement("div");
        return SS.className = this.className, this.adjust(SS), SS
      }
      update(SS, HS) {
        return HS.className == this.className && (this.adjust(SS), !0)
      }
      adjust(SS) {
        SS.style.left = this.left + "px", SS.style.top = this.top + "px", null != this.width && (SS.style.width = this.width + "px"), SS.style.height = this.height + "px"
      }
      eq(SS) {
        return this.left == SS.left && this.top == SS.top && this.width == SS.width && this.height == SS.height && this.className == SS.className
      }
      static forRange(SS, HS, gS) {
        if (gS.empty) {
          let tS = SS.coordsAtPos(gS.head, gS.assoc || 1);
          if (!tS) return [];
          let bS = Mb(SS);
          return [new Bb(HS, tS.left - bS.left, tS.top - bS.top, null, tS.bottom - tS.top)]
        }
        return function(SS, HS, gS) {
          if (gS.to <= SS.viewport.from || gS.from >= SS.viewport.to) return [];
          let tS = Math.max(gS.from, SS.viewport.from),
            bS = Math.min(gS.to, SS.viewport.to),
            XS = SS.textDirection == uH.LTR,
            xS = SS.contentDOM,
            NS = xS.getBoundingClientRect(),
            qS = Mb(SS),
            uS = xS.querySelector(".cm-line"),
            IS = uS && window.getComputedStyle(uS),
            fS = NS.left + (IS ? parseInt(IS.paddingLeft) + Math.min(0, parseInt(IS.textIndent)) : 0),
            kS = NS.right - (IS ? parseInt(IS.paddingRight) : 0),
            aS = sg(SS, tS, 1),
            KS = sg(SS, bS, -1),
            jS = aS.type == ES.Text ? aS : null,
            GS = KS.type == ES.Text ? KS : null;
          jS && (SS.lineWrapping || aS.widgetLineBreaks) && (jS = Fb(SS, tS, 1, jS));
          GS && (SS.lineWrapping || KS.widgetLineBreaks) && (GS = Fb(SS, bS, -1, GS));
          if (jS && GS && jS.from == GS.from && jS.to == GS.to) return nS(PS(gS.from, gS.to, jS));
          {
            let HS = jS ? PS(gS.from, null, jS) : QS(aS, !1),
              tS = GS ? PS(null, gS.to, GS) : QS(KS, !0),
              bS = [];
            return (jS || aS).to < (GS || KS).from - (jS && GS ? 1 : 0) || aS.widgetLineBreaks > 1 && HS.bottom + SS.defaultLineHeight / 2 < tS.top ? bS.push(CS(fS, HS.bottom, kS, tS.top)) : HS.bottom < tS.top && SS.elementAtHeight((HS.bottom + tS.top) / 2).type == ES.Text && (HS.bottom = tS.top = (HS.bottom + tS.top) / 2), nS(HS).concat(bS).concat(nS(tS))
          }

          function CS(SS, gS, tS, bS) {
            return new Bb(HS, SS - qS.left, gS - qS.top, Math.max(0, tS - SS), bS - gS)
          }

          function nS(SS) {
            let {
              top: HS,
              bottom: gS,
              horizontal: tS
            } = SS, bS = [];
            for (let XS = 0; XS < tS.length; XS += 2) bS.push(CS(tS[XS], HS, tS[XS + 1], gS));
            return bS
          }

          function PS(HS, gS, tS) {
            let bS = 1e9,
              xS = -1e9,
              NS = [];

            function qS(HS, gS, qS, uS, IS) {
              let aS = SS.coordsAtPos(HS, HS == tS.to ? -2 : 2),
                KS = SS.coordsAtPos(qS, qS == tS.from ? 2 : -2);
              aS && KS && (bS = Math.min(aS.top, KS.top, bS), xS = Math.max(aS.bottom, KS.bottom, xS), IS == uH.LTR ? NS.push(XS && gS ? fS : aS.left, XS && uS ? kS : KS.right) : NS.push(!XS && uS ? fS : KS.left, !XS && gS ? kS : aS.right))
            }
            let uS = null !== HS && void 0 !== HS ? HS : tS.from,
              IS = null !== gS && void 0 !== gS ? gS : tS.to;
            for (let XS of SS.J9)
              if (XS.to > uS && XS.from < IS)
                for (let tS = Math.max(XS.from, uS), bS = Math.min(XS.to, IS);;) {
                  let XS = SS.state.doc.lineAt(tS);
                  for (let xS of SS.bidiSpans(XS)) {
                    let SS = xS.from + XS.from,
                      NS = xS.to + XS.from;
                    if (SS >= bS) break;
                    NS > tS && qS(Math.max(SS, tS), null == HS && SS <= uS, Math.min(NS, bS), null == gS && NS >= IS, xS.dir)
                  }
                  if (tS = XS.to + 1, tS >= bS) break
                }
            return 0 == NS.length && qS(uS, null == HS, IS, null == gS, SS.textDirection), {
              top: bS,
              bottom: xS,
              horizontal: NS
            }
          }

          function QS(SS, HS) {
            let gS = NS.top + (HS ? SS.top : SS.bottom);
            return {
              top: gS,
              bottom: gS,
              horizontal: []
            }
          }
        }(SS, HS, gS)
      }
    }

    function Mb(SS) {
      let HS = SS.scrollDOM.getBoundingClientRect();
      return {
        left: (SS.textDirection == uH.LTR ? HS.left : HS.right - SS.scrollDOM.clientWidth * SS.scaleX) - SS.scrollDOM.scrollLeft * SS.scaleX,
        top: HS.top - SS.scrollDOM.scrollTop * SS.scaleY
      }
    }

    function Fb(SS, HS, gS, tS) {
      let bS = SS.coordsAtPos(HS, 2 * gS);
      if (!bS) return tS;
      let XS = SS.dom.getBoundingClientRect(),
        xS = (bS.top + bS.bottom) / 2,
        NS = SS.posAtCoords({
          x: XS.left + 1,
          y: xS
        }),
        qS = SS.posAtCoords({
          x: XS.right - 1,
          y: xS
        });
      return null == NS || null == qS ? tS : {
        from: Math.max(tS.from, Math.min(NS, qS)),
        to: Math.min(tS.to, Math.max(NS, qS))
      }
    }
    class Rb {
      constructor(SS, HS) {
        this.view = SS, this.layer = HS, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
          read: this.measure.bind(this),
          write: this.draw.bind(this)
        }, this.dom = SS.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), HS.above && this.dom.classList.add("cm-layer-above"), HS.class && this.dom.classList.add(HS.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(SS.state), SS.requestMeasure(this.measureReq), HS.mount && HS.mount(this.dom, SS)
      }
      update(SS) {
        SS.startState.facet(Tb) != SS.state.facet(Tb) && this.setOrder(SS.state), (this.layer.update(SS, this.dom) || SS.geometryChanged) && (this.scale(), SS.view.requestMeasure(this.measureReq))
      }
      docViewUpdate(SS) {
        !1 !== this.layer.updateOnDocViewUpdate && SS.requestMeasure(this.measureReq)
      }
      setOrder(SS) {
        let HS = 0,
          gS = SS.facet(Tb);
        for (; HS < gS.length && gS[HS] != this.layer;) HS++;
        this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - HS)
      }
      measure() {
        return this.layer.markers(this.view)
      }
      scale() {
        let {
          scaleX: SS,
          scaleY: HS
        } = this.view;
        SS == this.scaleX && HS == this.scaleY || (this.scaleX = SS, this.scaleY = HS, this.dom.style.transform = `scale(${1/SS}, ${1/HS})`)
      }
      draw(SS) {
        if (SS.length != this.drawn.length || SS.some(((SS, HS) => {
            return gS = SS, tS = this.drawn[HS], !(gS.constructor == tS.constructor && gS.eq(tS));
            var gS, tS
          }))) {
          let HS = this.dom.firstChild,
            gS = 0;
          for (let tS of SS) tS.update && HS && tS.constructor && this.drawn[gS].constructor && tS.update(HS, this.drawn[gS]) ? (HS = HS.nextSibling, gS++) : this.dom.insertBefore(tS.draw(), HS);
          for (; HS;) {
            let SS = HS.nextSibling;
            HS.remove(), HS = SS
          }
          this.drawn = SS, hS.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none")
        }
      }
      destroy() {
        this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove()
      }
    }
    const Tb = tS.n.define();

    function ob(SS) {
      return [lH.define((HS => new Rb(HS, SS))), Tb.of(SS)]
    }
    const lb = tS.n.define({
      combine: SS => (0, tS.W)(SS, {
        cursorBlinkRate: 1200,
        drawRangeCursor: !0,
        iosSelectionHandles: !0
      }, {
        cursorBlinkRate: (SS, HS) => Math.min(SS, HS),
        drawRangeCursor: (SS, HS) => SS || HS
      })
    });

    function mb() {
      let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [lb.of(SS), rb, HX, gX, UH.of(!0)]
    }

    function eb(SS) {
      return SS.startState.facet(lb) != SS.state.facet(lb)
    }
    const rb = ob({
      above: !0,
      markers(SS) {
        let {
          state: HS
        } = SS, gS = HS.facet(lb), bS = [];
        for (let XS of HS.selection.HG) {
          let xS = XS == HS.selection.main;
          if (XS.empty || gS.drawRangeCursor && !(xS && hS.ios && gS.iosSelectionHandles)) {
            let HS = xS ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary",
              gS = XS.empty ? XS : tS.i.cursor(XS.head, XS.assoc);
            for (let tS of Bb.forRange(SS, HS, gS)) bS.push(tS)
          }
        }
        return bS
      },
      update(SS, HS) {
        SS.transactions.some((SS => SS.selection)) && (HS.style.animationName = "cm-blink" == HS.style.animationName ? "cm-blink2" : "cm-blink");
        let gS = eb(SS);
        return gS && SX(SS.state, HS), SS.docChanged || SS.selectionSet || gS
      },
      mount(SS, HS) {
        SX(HS.state, SS)
      },
      class: "cm-cursorLayer"
    });

    function SX(SS, HS) {
      HS.style.animationDuration = SS.facet(lb).cursorBlinkRate + "ms"
    }
    const HX = ob({
        above: !1,
        markers(SS) {
          let HS = [],
            {
              main: gS,
              HG: bS
            } = SS.state.selection;
          for (let tS of bS)
            if (!tS.empty)
              for (let gS of Bb.forRange(SS, "cm-selectionBackground", tS)) HS.push(gS);
          if (hS.ios && !gS.empty && SS.state.facet(lb).iosSelectionHandles) {
            for (let bS of Bb.forRange(SS, "cm-selectionHandle cm-selectionHandle-start", tS.i.cursor(gS.from, 1))) HS.push(bS);
            for (let bS of Bb.forRange(SS, "cm-selectionHandle cm-selectionHandle-end", tS.i.cursor(gS.to, 1))) HS.push(bS)
          }
          return HS
        },
        update: (SS, HS) => SS.docChanged || SS.selectionSet || SS.viewportChanged || eb(SS),
        class: "cm-selectionLayer"
      }),
      gX = tS.s.highest(Ob.theme({
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
      tX = tS.G.define({
        map: (SS, HS) => null == SS ? null : HS.mapPos(SS)
      }),
      bX = tS.H.define({
        create: () => null,
        update: (SS, HS) => (null != SS && (SS = HS.changes.mapPos(SS)), HS.effects.reduce(((SS, HS) => HS.is(tX) ? HS.value : SS), SS))
      }),
      XX = lH.fromClass(class {
        constructor(SS) {
          this.view = SS, this.cursor = null, this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawCursor.bind(this)
          }
        }
        update(SS) {
          var HS;
          let gS = SS.state.field(bX);
          null == gS ? null != this.cursor && (null === (HS = this.cursor) || void 0 === HS || HS.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (SS.startState.field(bX) != gS || SS.docChanged || SS.geometryChanged) && this.view.requestMeasure(this.measureReq))
        }
        readPos() {
          let {
            view: SS
          } = this, HS = SS.state.field(bX), gS = null != HS && SS.coordsAtPos(HS);
          if (!gS) return null;
          let tS = SS.scrollDOM.getBoundingClientRect();
          return {
            left: gS.left - tS.left + SS.scrollDOM.scrollLeft * SS.scaleX,
            top: gS.top - tS.top + SS.scrollDOM.scrollTop * SS.scaleY,
            height: gS.bottom - gS.top
          }
        }
        drawCursor(SS) {
          if (this.cursor) {
            let {
              scaleX: HS,
              scaleY: gS
            } = this.view;
            SS ? (this.cursor.style.left = SS.left / HS + "px", this.cursor.style.top = SS.top / gS + "px", this.cursor.style.height = SS.height / gS + "px") : this.cursor.style.left = "-100000px"
          }
        }
        destroy() {
          this.cursor && this.cursor.remove()
        }
        setDropPos(SS) {
          this.view.state.field(bX) != SS && this.view.dispatch({
            effects: tX.of(SS)
          })
        }
      }, {
        eventObservers: {
          dragover(SS) {
            this.setDropPos(this.view.posAtCoords({
              x: SS.clientX,
              y: SS.clientY
            }))
          },
          dragleave(SS) {
            SS.target != this.view.contentDOM && this.view.contentDOM.contains(SS.relatedTarget) || this.setDropPos(null)
          },
          dragend() {
            this.setDropPos(null)
          },
          drop() {
            this.setDropPos(null)
          }
        }
      });

    function xX() {
      return [bX, XX]
    }

    function NX(SS, HS, gS, tS, bS) {
      HS.lastIndex = 0;
      for (let XS, xS = SS.iterRange(gS, tS), NS = gS; !xS.next().done; NS += xS.value.length)
        if (!xS.lineBreak)
          for (; XS = HS.exec(xS.value);) bS(NS + XS.index, XS)
    }
    class qX {
      constructor(SS) {
        const {
          regexp: HS,
          decoration: gS,
          decorate: tS,
          boundary: bS,
          maxLength: XS = 1e3
        } = SS;
        if (!HS.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
        if (this.regexp = HS, tS) this.addMatch = (SS, HS, gS, bS) => tS(bS, gS, gS + SS[0].length, SS, HS);
        else if ("function" == typeof gS) this.addMatch = (SS, HS, tS, bS) => {
          let XS = gS(SS, HS, tS);
          XS && bS(tS, tS + SS[0].length, XS)
        };
        else {
          if (!gS) throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
          this.addMatch = (SS, HS, tS, bS) => bS(tS, tS + SS[0].length, gS)
        }
        this.boundary = bS, this.maxLength = XS
      }
      createDeco(SS) {
        let HS = new tS.w,
          gS = HS.add.bind(HS);
        for (let {
            from: tS,
            to: bS
          }
          of
          function(SS, HS) {
            let gS = SS.J9;
            if (1 == gS.length && gS[0].from == SS.viewport.from && gS[0].to == SS.viewport.to) return gS;
            let tS = [];
            for (let {
                from: bS,
                to: XS
              }
              of gS) bS = Math.max(SS.state.doc.lineAt(bS).from, bS - HS), XS = Math.min(SS.state.doc.lineAt(XS).to, XS + HS), tS.length && tS[tS.length - 1].to >= bS ? tS[tS.length - 1].to = XS : tS.push({
              from: bS,
              to: XS
            });
            return tS
          }(SS, this.maxLength)) NX(SS.state.doc, this.regexp, tS, bS, ((HS, tS) => this.addMatch(tS, SS, HS, gS)));
        return HS.finish()
      }
      updateDeco(SS, HS) {
        let gS = 1e9,
          tS = -1;
        return SS.docChanged && SS.changes.iterChanges(((HS, bS, XS, xS) => {
          xS >= SS.view.viewport.from && XS <= SS.view.viewport.to && (gS = Math.min(XS, gS), tS = Math.max(xS, tS))
        })), SS.viewportMoved || tS - gS > 1e3 ? this.createDeco(SS.view) : tS > -1 ? this.updateRange(SS.view, HS.map(SS.changes), gS, tS) : HS
      }
      updateRange(SS, HS, gS, tS) {
        for (let bS of SS.J9) {
          let XS = Math.max(bS.from, gS),
            xS = Math.min(bS.to, tS);
          if (xS >= XS) {
            let gS = SS.state.doc.lineAt(XS),
              tS = gS.to < xS ? SS.state.doc.lineAt(xS) : gS,
              NS = Math.max(bS.from, gS.from),
              qS = Math.min(bS.to, tS.to);
            if (this.boundary) {
              for (; XS > gS.from; XS--)
                if (this.boundary.test(gS.text[XS - 1 - gS.from])) {
                  NS = XS;
                  break
                } for (; xS < tS.to; xS++)
                if (this.boundary.test(tS.text[xS - tS.from])) {
                  qS = xS;
                  break
                }
            }
            let uS, IS = [],
              fS = (SS, HS, gS) => IS.push(gS.range(SS, HS));
            if (gS == tS)
              for (this.regexp.lastIndex = NS - gS.from;
                (uS = this.regexp.exec(gS.text)) && uS.index < qS - gS.from;) this.addMatch(uS, SS, uS.index + gS.from, fS);
            else NX(SS.state.doc, this.regexp, NS, qS, ((HS, gS) => this.addMatch(gS, SS, HS, fS)));
            HS = HS.update({
              filterFrom: NS,
              filterTo: qS,
              filter: (SS, HS) => SS < NS || HS > qS,
              add: IS
            })
          }
        }
        return HS
      }
    }
    const uX = null != /x/.unicode ? "gu" : "g",
      IX = new RegExp("[\0-\b\n-\x1f\x7f-\x9f\xad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]", uX),
      fX = {
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
    let kX = null;
    const aX = tS.n.define({
      combine(SS) {
        let HS = (0, tS.W)(SS, {
          render: null,
          specialChars: IX,
          addSpecialChars: null
        });
        return (HS.replaceTabs = ! function() {
          var SS;
          if (null == kX && "undefined" != typeof document && document.body) {
            let HS = document.body.style;
            kX = null != (null !== (SS = HS.tabSize) && void 0 !== SS ? SS : HS.MozTabSize)
          }
          return kX || !1
        }()) && (HS.specialChars = new RegExp("\t|" + HS.specialChars.source, uX)), HS.addSpecialChars && (HS.specialChars = new RegExp(HS.specialChars.source + "|" + HS.addSpecialChars.source, uX)), HS
      }
    });

    function KX() {
      let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [aX.of(SS), jX || (jX = lH.fromClass(class {
        constructor(SS) {
          this.view = SS, this.KS = LS.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(SS.state.facet(aX)), this.KS = this.decorator.createDeco(SS)
        }
        makeDecorator(SS) {
          return new qX({
            regexp: SS.specialChars,
            decoration: (HS, gS, bS) => {
              let {
                doc: XS
              } = gS.state, xS = (0, tS.Q)(HS[0], 0);
              if (9 == xS) {
                let SS = XS.lineAt(bS),
                  HS = gS.state.tabSize,
                  xS = (0, tS.Z)(SS.text, HS, bS - SS.from);
                return LS.replace({
                  widget: new CX((HS - xS % HS) * this.view.defaultCharacterWidth / this.view.scaleX)
                })
              }
              return this.decorationCache[xS] || (this.decorationCache[xS] = LS.replace({
                widget: new GX(SS, xS)
              }))
            },
            boundary: SS.replaceTabs ? void 0 : /[^]/
          })
        }
        update(SS) {
          let HS = SS.state.facet(aX);
          SS.startState.facet(aX) != HS ? (this.decorator = this.makeDecorator(HS), this.KS = this.decorator.createDeco(SS.view)) : this.KS = this.decorator.updateDeco(SS, this.KS)
        }
      }, {
        KS: SS => SS.KS
      }))]
    }
    let jX = null;
    class GX extends vS {
      constructor(SS, HS) {
        super(), this.options = SS, this.code = HS
      }
      eq(SS) {
        return SS.code == this.code
      }
      toDOM(SS) {
        let HS = function(SS) {
            return SS >= 32 ? "\u2022" : 10 == SS ? "\u2424" : String.fromCharCode(9216 + SS)
          }(this.code),
          gS = SS.state.phrase("Control character") + " " + (fX[this.code] || "0x" + this.code.toString(16)),
          tS = this.options.render && this.options.render(this.code, gS, HS);
        if (tS) return tS;
        let bS = document.createElement("span");
        return bS.textContent = HS, bS.title = gS, bS.setAttribute("aria-label", gS), bS.className = "cm-specialChar", bS
      }
      ignoreEvent() {
        return !1
      }
    }
    class CX extends vS {
      constructor(SS) {
        super(), this.width = SS
      }
      eq(SS) {
        return SS.width == this.width
      }
      toDOM() {
        let SS = document.createElement("span");
        return SS.textContent = "\t", SS.className = "cm-tab", SS.style.width = this.width + "px", SS
      }
      ignoreEvent() {
        return !1
      }
    }

    function nX() {
      return QX
    }
    const PX = LS.line({
        class: "cm-activeLine"
      }),
      QX = lH.fromClass(class {
        constructor(SS) {
          this.KS = this.getDeco(SS)
        }
        update(SS) {
          (SS.docChanged || SS.selectionSet) && (this.KS = this.getDeco(SS.view))
        }
        getDeco(SS) {
          let HS = -1,
            gS = [];
          for (let tS of SS.state.selection.HG) {
            let bS = SS.lineBlockAt(tS.head);
            bS.from > HS && (gS.push(PX.range(bS.from)), HS = bS.from)
          }
          return LS.set(gS)
        }
      }, {
        KS: SS => SS.KS
      });
    class DX extends vS {
      constructor(SS) {
        super(), this.content = SS
      }
      toDOM(SS) {
        let HS = document.createElement("span");
        return HS.className = "cm-placeholder", HS.style.pointerEvents = "none", HS.appendChild("string" == typeof this.content ? document.createTextNode(this.content) : "function" == typeof this.content ? this.content(SS) : this.content.cloneNode(!0)), HS.setAttribute("aria-hidden", "true"), HS
      }
      coordsAt(SS) {
        let HS = SS.firstChild ? sS(SS.firstChild) : [];
        if (!HS.length) return null;
        let gS = window.getComputedStyle(SS.parentNode),
          tS = oS(HS[0], "rtl" != gS.direction),
          bS = parseInt(gS.lineHeight);
        return tS.bottom - tS.top > 1.5 * bS ? {
          left: tS.left,
          right: tS.right,
          top: tS.top,
          bottom: tS.top + bS
        } : tS
      }
      ignoreEvent() {
        return !1
      }
    }

    function wX(SS) {
      let HS = lH.fromClass(class {
        constructor(HS) {
          this.view = HS, this.placeholder = SS ? LS.set([LS.widget({
            widget: new DX(SS),
            side: 1
          }).range(0)]) : LS.none
        }
        get KS() {
          return this.view.state.doc.length ? LS.none : this.placeholder
        }
      }, {
        KS: SS => SS.KS
      });
      return "string" == typeof SS ? [HS, Ob.contentAttributes.of({
        "aria-placeholder": SS
      })] : HS
    }
    const hX = 2e3;

    function ZX(SS, HS) {
      let gS = SS.posAtCoords({
          x: HS.clientX,
          y: HS.clientY
        }, !1),
        bS = SS.state.doc.lineAt(gS),
        XS = gS - bS.from,
        xS = XS > hX ? -1 : XS == bS.length ? function(SS, HS) {
          let gS = SS.coordsAtPos(SS.viewport.from);
          return gS ? Math.round(Math.abs((gS.left - HS) / SS.defaultCharacterWidth)) : -1
        }(SS, HS.clientX) : (0, tS.Z)(bS.text, SS.state.tabSize, gS - bS.from);
      return {
        line: bS.number,
        col: xS,
        off: XS
      }
    }

    function JX(SS, HS) {
      let gS = ZX(SS, HS),
        bS = SS.state.selection;
      return gS ? {
        update(SS) {
          if (SS.docChanged) {
            let HS = SS.changes.mapPos(SS.startState.doc.line(gS.line).from),
              tS = SS.state.doc.lineAt(HS);
            gS = {
              line: tS.number,
              col: gS.col,
              off: Math.min(gS.off, tS.length)
            }, bS = bS.map(SS.changes)
          }
        },
        get(HS, XS, xS) {
          let NS = ZX(SS, HS);
          if (!NS) return bS;
          let qS = function(SS, HS, gS) {
            let bS = Math.min(HS.line, gS.line),
              XS = Math.max(HS.line, gS.line),
              xS = [];
            if (HS.off > hX || gS.off > hX || HS.col < 0 || gS.col < 0) {
              let NS = Math.min(HS.off, gS.off),
                qS = Math.max(HS.off, gS.off);
              for (let HS = bS; HS <= XS; HS++) {
                let gS = SS.doc.line(HS);
                gS.length <= qS && xS.push(tS.i.range(gS.from + NS, gS.to + qS))
              }
            } else {
              let NS = Math.min(HS.col, gS.col),
                qS = Math.max(HS.col, gS.col);
              for (let HS = bS; HS <= XS; HS++) {
                let gS = SS.doc.line(HS),
                  bS = (0, tS.ab)(gS.text, NS, SS.tabSize, !0);
                if (bS < 0) xS.push(tS.i.cursor(gS.to));
                else {
                  let HS = (0, tS.ab)(gS.text, qS, SS.tabSize);
                  xS.push(tS.i.range(gS.from + bS, gS.from + HS))
                }
              }
            }
            return xS
          }(SS.state, gS, NS);
          return qS.length ? xS ? tS.i.create(qS.concat(bS.HG)) : tS.i.create(qS) : bS
        }
      } : null
    }

    function OX(SS) {
      let HS = (null === SS || void 0 === SS ? void 0 : SS.eventFilter) || (SS => SS.altKey && 0 == SS.button);
      return Ob.mouseSelectionStyle.of(((SS, gS) => HS(gS) ? JX(SS, gS) : null))
    }
    const dX = {
        Alt: [18, SS => !!SS.altKey],
        Control: [17, SS => !!SS.ctrlKey],
        Shift: [16, SS => !!SS.shiftKey],
        Meta: [91, SS => !!SS.metaKey]
      },
      cX = {
        style: "cursor: crosshair"
      };

    function vX() {
      let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [HS, gS] = dX[SS.key || "Alt"],
        tS = lH.fromClass(class {
          constructor(SS) {
            this.view = SS, this.isDown = !1
          }
          set(SS) {
            this.isDown != SS && (this.isDown = SS, this.view.update([]))
          }
        }, {
          eventObservers: {
            keydown(SS) {
              this.set(SS.keyCode == HS || gS(SS))
            },
            keyup(SS) {
              SS.keyCode != HS && gS(SS) || this.set(!1)
            },
            mousemove(SS) {
              this.set(gS(SS))
            }
          }
        });
      return [tS, Ob.contentAttributes.of((SS => {
        var HS;
        return (null === (HS = SS.plugin(tS)) || void 0 === HS ? void 0 : HS.isDown) ? cX : null
      }))]
    }
    const EX = "-10000px";
    class LX {
      constructor(SS, HS, gS, tS) {
        this.facet = HS, this.createTooltipView = gS, this.removeTooltipView = tS, this.input = SS.state.facet(HS), this.tooltips = this.input.filter((SS => SS));
        let bS = null;
        this.tooltipViews = this.tooltips.map((SS => bS = gS(SS, bS)))
      }
      update(SS, HS) {
        var gS;
        let tS = SS.state.facet(this.facet),
          bS = tS.filter((SS => SS));
        if (tS === this.input) {
          for (let HS of this.tooltipViews) HS.update && HS.update(SS);
          return !1
        }
        let XS = [],
          xS = HS ? [] : null;
        for (let NS = 0; NS < bS.length; NS++) {
          let gS = bS[NS],
            tS = -1;
          if (gS) {
            for (let SS = 0; SS < this.tooltips.length; SS++) {
              let HS = this.tooltips[SS];
              HS && HS.create == gS.create && (tS = SS)
            }
            if (tS < 0) XS[NS] = this.createTooltipView(gS, NS ? XS[NS - 1] : null), xS && (xS[NS] = !!gS.above);
            else {
              let gS = XS[NS] = this.tooltipViews[tS];
              xS && (xS[NS] = HS[tS]), gS.update && gS.update(SS)
            }
          }
        }
        for (let NS of this.tooltipViews) XS.indexOf(NS) < 0 && (this.removeTooltipView(NS), null === (gS = NS.destroy) || void 0 === gS || gS.call(NS));
        return HS && (xS.forEach(((SS, gS) => HS[gS] = SS)), HS.length = xS.length), this.input = tS, this.tooltips = bS, this.tooltipViews = XS, !0
      }
    }

    function YX(SS) {
      let HS = SS.dom.ownerDocument.documentElement;
      return {
        top: 0,
        left: 0,
        bottom: HS.clientHeight,
        right: HS.clientWidth
      }
    }
    const AX = tS.n.define({
        combine: SS => {
          var HS, gS, tS;
          return {
            position: hS.ios ? "absolute" : (null === (HS = SS.find((SS => SS.position))) || void 0 === HS ? void 0 : HS.position) || "fixed",
            parent: (null === (gS = SS.find((SS => SS.parent))) || void 0 === gS ? void 0 : gS.parent) || null,
            tooltipSpace: (null === (tS = SS.find((SS => SS.tooltipSpace))) || void 0 === tS ? void 0 : tS.tooltipSpace) || YX
          }
        }
      }),
      yX = new WeakMap,
      VX = lH.fromClass(class {
        constructor(SS) {
          this.view = SS, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
          let HS = SS.state.facet(AX);
          this.position = HS.position, this.parent = HS.parent, this.classes = SS.themeClasses, this.createContainer(), this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this
          }, this.resizeObserver = "function" == typeof ResizeObserver ? new ResizeObserver((() => this.measureSoon())) : null, this.manager = new LX(SS, UX, ((SS, HS) => this.createTooltip(SS, HS)), (SS => {
            this.resizeObserver && this.resizeObserver.unobserve(SS.dom), SS.dom.remove()
          })), this.above = this.manager.tooltips.map((SS => !!SS.above)), this.intersectionObserver = "function" == typeof IntersectionObserver ? new IntersectionObserver((SS => {
            Date.now() > this.lastTransaction - 50 && SS.length > 0 && SS[SS.length - 1].intersectionRatio < 1 && this.measureSoon()
          }), {
            threshold: [1]
          }) : null, this.observeIntersection(), SS.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure()
        }
        createContainer() {
          this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom
        }
        observeIntersection() {
          if (this.intersectionObserver) {
            this.intersectionObserver.disconnect();
            for (let SS of this.manager.tooltipViews) this.intersectionObserver.observe(SS.dom)
          }
        }
        measureSoon() {
          this.measureTimeout < 0 && (this.measureTimeout = setTimeout((() => {
            this.measureTimeout = -1, this.maybeMeasure()
          }), 50))
        }
        update(SS) {
          SS.transactions.length && (this.lastTransaction = Date.now());
          let HS = this.manager.update(SS, this.above);
          HS && this.observeIntersection();
          let gS = HS || SS.geometryChanged,
            tS = SS.state.facet(AX);
          if (tS.position != this.position && !this.madeAbsolute) {
            this.position = tS.position;
            for (let SS of this.manager.tooltipViews) SS.dom.style.position = this.position;
            gS = !0
          }
          if (tS.parent != this.parent) {
            this.parent && this.container.remove(), this.parent = tS.parent, this.createContainer();
            for (let SS of this.manager.tooltipViews) this.container.appendChild(SS.dom);
            gS = !0
          } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
          gS && this.maybeMeasure()
        }
        createTooltip(SS, HS) {
          let gS = SS.create(this.view),
            tS = HS ? HS.dom : null;
          if (gS.dom.classList.add("cm-tooltip"), SS.arrow && !gS.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
            let SS = document.createElement("div");
            SS.className = "cm-tooltip-arrow", gS.dom.appendChild(SS)
          }
          return gS.dom.style.position = this.position, gS.dom.style.top = EX, gS.dom.style.left = "0px", this.container.insertBefore(gS.dom, tS), gS.mount && gS.mount(this.view), this.resizeObserver && this.resizeObserver.observe(gS.dom), gS
        }
        destroy() {
          var SS, HS, gS;
          this.view.win.removeEventListener("resize", this.measureSoon);
          for (let tS of this.manager.tooltipViews) tS.dom.remove(), null === (SS = tS.destroy) || void 0 === SS || SS.call(tS);
          this.parent && this.container.remove(), null === (HS = this.resizeObserver) || void 0 === HS || HS.disconnect(), null === (gS = this.intersectionObserver) || void 0 === gS || gS.disconnect(), clearTimeout(this.measureTimeout)
        }
        readMeasure() {
          let SS = 1,
            HS = 1,
            gS = !1;
          if ("fixed" == this.position && this.manager.tooltipViews.length) {
            let {
              dom: SS
            } = this.manager.tooltipViews[0];
            if (hS.safari) {
              let HS = SS.getBoundingClientRect();
              gS = Math.abs(HS.top + 1e4) > 1 || Math.abs(HS.left) > 1
            } else gS = !!SS.offsetParent && SS.offsetParent != this.container.ownerDocument.body
          }
          if (gS || "absolute" == this.position)
            if (this.parent) {
              let gS = this.parent.getBoundingClientRect();
              gS.width && gS.height && (SS = gS.width / this.parent.offsetWidth, HS = gS.height / this.parent.offsetHeight)
            } else({
              scaleX: SS,
              scaleY: HS
            } = this.view.viewState);
          let tS = this.view.scrollDOM.getBoundingClientRect(),
            bS = Ng(this.view);
          return {
            visible: {
              left: tS.left + bS.left,
              top: tS.top + bS.top,
              right: tS.right - bS.right,
              bottom: tS.bottom - bS.bottom
            },
            parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
            pos: this.manager.tooltips.map(((SS, HS) => {
              let gS = this.manager.tooltipViews[HS];
              return gS.getCoords ? gS.getCoords(SS.pos) : this.view.coordsAtPos(SS.pos)
            })),
            size: this.manager.tooltipViews.map((SS => {
              let {
                dom: HS
              } = SS;
              return HS.getBoundingClientRect()
            })),
            space: this.view.state.facet(AX).tooltipSpace(this.view),
            scaleX: SS,
            scaleY: HS,
            makeAbsolute: gS
          }
        }
        writeMeasure(SS) {
          var HS;
          if (SS.makeAbsolute) {
            this.madeAbsolute = !0, this.position = "absolute";
            for (let SS of this.manager.tooltipViews) SS.dom.style.position = "absolute"
          }
          let {
            visible: gS,
            space: tS,
            scaleX: bS,
            scaleY: XS
          } = SS, xS = [];
          for (let NS = 0; NS < this.manager.tooltips.length; NS++) {
            let qS = this.manager.tooltips[NS],
              uS = this.manager.tooltipViews[NS],
              {
                dom: IS
              } = uS,
              fS = SS.pos[NS],
              kS = SS.size[NS];
            if (!fS || !1 !== qS.clip && (fS.bottom <= Math.max(gS.top, tS.top) || fS.top >= Math.min(gS.bottom, tS.bottom) || fS.right < Math.max(gS.left, tS.left) - .1 || fS.left > Math.min(gS.right, tS.right) + .1)) {
              IS.style.top = EX;
              continue
            }
            let aS = qS.arrow ? uS.dom.querySelector(".cm-tooltip-arrow") : null,
              KS = aS ? 7 : 0,
              jS = kS.right - kS.left,
              GS = null !== (HS = yX.get(uS)) && void 0 !== HS ? HS : kS.bottom - kS.top,
              CS = uS.offset || zX,
              nS = this.view.textDirection == uH.LTR,
              PS = kS.width > tS.right - tS.left ? nS ? tS.left : tS.right - kS.width : nS ? Math.max(tS.left, Math.min(fS.left - (aS ? 14 : 0) + CS.x, tS.right - jS)) : Math.min(Math.max(tS.left, fS.left - jS + (aS ? 14 : 0) - CS.x), tS.right - jS),
              QS = this.above[NS];
            !qS.strictSide && (QS ? fS.top - GS - KS - CS.y < tS.top : fS.bottom + GS + KS + CS.y > tS.bottom) && QS == tS.bottom - fS.bottom > fS.top - tS.top && (QS = this.above[NS] = !QS);
            let DS = (QS ? fS.top - tS.top : tS.bottom - fS.bottom) - KS;
            if (DS < GS && !1 !== uS.resize) {
              if (DS < this.view.defaultLineHeight) {
                IS.style.top = EX;
                continue
              }
              yX.set(uS, GS), IS.style.height = (GS = DS) / XS + "px"
            } else IS.style.height && (IS.style.height = "");
            let wS = QS ? fS.top - GS - KS - CS.y : fS.bottom + KS + CS.y,
              hS = PS + jS;
            if (!0 !== uS.overlap)
              for (let SS of xS) SS.left < hS && SS.right > PS && SS.top < wS + GS && SS.bottom > wS && (wS = QS ? SS.top - GS - 2 - KS : SS.bottom + KS + 2);
            if ("absolute" == this.position ? (IS.style.top = (wS - SS.parent.top) / XS + "px", iX(IS, (PS - SS.parent.left) / bS)) : (IS.style.top = wS / XS + "px", iX(IS, PS / bS)), aS) {
              let SS = fS.left + (nS ? CS.x : -CS.x) - (PS + 14 - 7);
              aS.style.left = SS / bS + "px"
            }!0 !== uS.overlap && xS.push({
              left: PS,
              top: wS,
              right: hS,
              bottom: wS + GS
            }), IS.classList.toggle("cm-tooltip-above", QS), IS.classList.toggle("cm-tooltip-below", !QS), uS.positioned && uS.positioned(SS.space)
          }
        }
        maybeMeasure() {
          if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
            for (let SS of this.manager.tooltipViews) SS.dom.style.top = EX
        }
      }, {
        eventObservers: {
          scroll() {
            this.maybeMeasure()
          }
        }
      });

    function iX(SS, HS) {
      let gS = parseInt(SS.style.left, 10);
      (isNaN(gS) || Math.abs(HS - gS) > 1) && (SS.style.left = HS + "px")
    }
    const WX = Ob.baseTheme({
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
      zX = {
        x: 0,
        y: 0
      },
      UX = tS.n.define({
        enables: [VX, WX]
      }),
      pX = tS.n.define({
        combine: SS => SS.reduce(((SS, HS) => SS.concat(HS)), [])
      });
    class sX {
      static create(SS) {
        return new sX(SS)
      }
      constructor(SS) {
        this.view = SS, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new LX(SS, pX, ((SS, HS) => this.createHostedView(SS, HS)), (SS => SS.dom.remove()))
      }
      createHostedView(SS, HS) {
        let gS = SS.create(this.view);
        return gS.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(gS.dom, HS ? HS.dom.nextSibling : this.dom.firstChild), this.mounted && gS.mount && gS.mount(this.view), gS
      }
      mount(SS) {
        for (let HS of this.manager.tooltipViews) HS.mount && HS.mount(SS);
        this.mounted = !0
      }
      positioned(SS) {
        for (let HS of this.manager.tooltipViews) HS.positioned && HS.positioned(SS)
      }
      update(SS) {
        this.manager.update(SS)
      }
      destroy() {
        var SS;
        for (let HS of this.manager.tooltipViews) null === (SS = HS.destroy) || void 0 === SS || SS.call(HS)
      }
      passProp(SS) {
        let HS;
        for (let gS of this.manager.tooltipViews) {
          let tS = gS[SS];
          if (void 0 !== tS)
            if (void 0 === HS) HS = tS;
            else if (HS !== tS) return
        }
        return HS
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
    const BX = UX.compute([pX], (SS => {
      let HS = SS.facet(pX);
      return 0 === HS.length ? null : {
        pos: Math.min(...HS.map((SS => SS.pos))),
        end: Math.max(...HS.map((SS => {
          var HS;
          return null !== (HS = SS.end) && void 0 !== HS ? HS : SS.pos
        }))),
        create: sX.create,
        above: HS[0].above,
        arrow: HS.some((SS => SS.arrow))
      }
    }));
    class MX {
      constructor(SS, HS, gS, tS, bS) {
        this.view = SS, this.source = HS, this.field = gS, this.setHover = tS, this.hoverTime = bS, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
          x: 0,
          y: 0,
          target: SS.dom,
          time: 0
        }, this.checkHover = this.checkHover.bind(this), SS.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), SS.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this))
      }
      update() {
        this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout((() => this.startHover()), 20))
      }
      get active() {
        return this.view.state.field(this.field)
      }
      checkHover() {
        if (this.hoverTimeout = -1, this.active.length) return;
        let SS = Date.now() - this.lastMove.time;
        SS < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - SS) : this.startHover()
      }
      startHover() {
        clearTimeout(this.restartTimeout);
        let {
          view: SS,
          lastMove: HS
        } = this, gS = SS.docView.tile.nearest(HS.target);
        if (!gS) return;
        let tS, bS = 1;
        if (gS.isWidget()) tS = gS.posAtStart;
        else {
          if (tS = SS.posAtCoords(HS), null == tS) return;
          let gS = SS.coordsAtPos(tS);
          if (!gS || HS.y < gS.top || HS.y > gS.bottom || HS.x < gS.left - SS.defaultCharacterWidth || HS.x > gS.right + SS.defaultCharacterWidth) return;
          let XS = SS.bidiSpans(SS.state.doc.lineAt(tS)).find((SS => SS.from <= tS && SS.to >= tS)),
            xS = XS && XS.dir == uH.RTL ? -1 : 1;
          bS = HS.x < gS.left ? -xS : xS
        }
        let XS = this.source(SS, tS, bS);
        if (null === XS || void 0 === XS ? void 0 : XS.then) {
          let HS = this.pending = {
            pos: tS
          };
          XS.then((gS => {
            this.pending == HS && (this.pending = null, !gS || Array.isArray(gS) && !gS.length || SS.dispatch({
              effects: this.setHover.of(Array.isArray(gS) ? gS : [gS])
            }))
          }), (HS => FH(SS.state, HS, "hover tooltip")))
        } else !XS || Array.isArray(XS) && !XS.length || SS.dispatch({
          effects: this.setHover.of(Array.isArray(XS) ? XS : [XS])
        })
      }
      get tooltip() {
        let SS = this.view.plugin(VX),
          HS = SS ? SS.manager.tooltips.findIndex((SS => SS.create == sX.create)) : -1;
        return HS > -1 ? SS.manager.tooltipViews[HS] : null
      }
      mousemove(SS) {
        var HS, gS;
        this.lastMove = {
          x: SS.clientX,
          y: SS.clientY,
          target: SS.target,
          time: Date.now()
        }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
        let {
          active: tS,
          tooltip: bS
        } = this;
        if (tS.length && bS && ! function(SS, HS) {
            let gS, {
              left: tS,
              right: bS,
              top: XS,
              bottom: xS
            } = SS.getBoundingClientRect();
            if (gS = SS.querySelector(".cm-tooltip-arrow")) {
              let SS = gS.getBoundingClientRect();
              XS = Math.min(SS.top, XS), xS = Math.max(SS.bottom, xS)
            }
            return HS.clientX >= tS - FX && HS.clientX <= bS + FX && HS.clientY >= XS - FX && HS.clientY <= xS + FX
          }(bS.dom, SS) || this.pending) {
          let {
            pos: bS
          } = tS[0] || this.pending, XS = null !== (gS = null === (HS = tS[0]) || void 0 === HS ? void 0 : HS.end) && void 0 !== gS ? gS : bS;
          (bS == XS ? this.view.posAtCoords(this.lastMove) == bS : function(SS, HS, gS, tS, bS) {
            let XS = SS.scrollDOM.getBoundingClientRect(),
              xS = SS.documentTop + SS.documentPadding.top + SS.contentHeight;
            if (XS.left > tS || XS.right < tS || XS.top > bS || Math.min(XS.bottom, xS) < bS) return !1;
            let NS = SS.posAtCoords({
              x: tS,
              y: bS
            }, !1);
            return NS >= HS && NS <= gS
          }(this.view, bS, XS, SS.clientX, SS.clientY)) || (this.view.dispatch({
            effects: this.setHover.of([])
          }), this.pending = null)
        }
      }
      mouseleave(SS) {
        clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
        let {
          active: HS
        } = this;
        if (HS.length) {
          let {
            tooltip: HS
          } = this;
          HS && HS.dom.contains(SS.relatedTarget) ? this.watchTooltipLeave(HS.dom) : this.view.dispatch({
            effects: this.setHover.of([])
          })
        }
      }
      watchTooltipLeave(SS) {
        let HS = gS => {
          SS.removeEventListener("mouseleave", HS), this.active.length && !this.view.dom.contains(gS.relatedTarget) && this.view.dispatch({
            effects: this.setHover.of([])
          })
        };
        SS.addEventListener("mouseleave", HS)
      }
      destroy() {
        clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove)
      }
    }
    const FX = 4;

    function RX(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        gS = tS.G.define(),
        bS = tS.H.define({
          create: () => [],
          update(SS, bS) {
            if (SS.length && (HS.hideOnChange && (bS.docChanged || bS.selection) ? SS = [] : HS.hideOn && (SS = SS.filter((SS => !HS.hideOn(bS, SS)))), bS.docChanged)) {
              let HS = [];
              for (let gS of SS) {
                let SS = bS.changes.mapPos(gS.pos, -1, tS.q.TrackDel);
                if (null != SS) {
                  let tS = Object.assign(Object.create(null), gS);
                  tS.pos = SS, null != tS.end && (tS.end = bS.changes.mapPos(tS.end)), HS.push(tS)
                }
              }
              SS = HS
            }
            for (let HS of bS.effects) HS.is(gS) && (SS = HS.value), HS.is(oX) && (SS = []);
            return SS
          },
          provide: SS => pX.from(SS)
        });
      return {
        active: bS,
        extension: [bS, lH.define((tS => new MX(tS, SS, bS, gS, HS.hoverTime || 300))), BX]
      }
    }

    function TX(SS, HS) {
      let gS = SS.plugin(VX);
      if (!gS) return null;
      let tS = gS.manager.tooltips.indexOf(HS);
      return tS < 0 ? null : gS.manager.tooltipViews[tS]
    }
    const oX = tS.G.define();
    const lX = tS.n.define({
      combine(SS) {
        let HS, gS;
        for (let tS of SS) HS = HS || tS.topContainer, gS = gS || tS.bottomContainer;
        return {
          topContainer: HS,
          bottomContainer: gS
        }
      }
    });

    function mX(SS, HS) {
      let gS = SS.plugin(eX),
        tS = gS ? gS.specs.indexOf(HS) : -1;
      return tS > -1 ? gS.panels[tS] : null
    }
    const eX = lH.fromClass(class {
      constructor(SS) {
        this.input = SS.state.facet(Hx), this.specs = this.input.filter((SS => SS)), this.panels = this.specs.map((HS => HS(SS)));
        let HS = SS.state.facet(lX);
        this.top = new rX(SS, !0, HS.topContainer), this.bottom = new rX(SS, !1, HS.bottomContainer), this.top.sync(this.panels.filter((SS => SS.top))), this.bottom.sync(this.panels.filter((SS => !SS.top)));
        for (let gS of this.panels) gS.dom.classList.add("cm-panel"), gS.mount && gS.mount()
      }
      update(SS) {
        let HS = SS.state.facet(lX);
        this.top.container != HS.topContainer && (this.top.sync([]), this.top = new rX(SS.view, !0, HS.topContainer)), this.bottom.container != HS.bottomContainer && (this.bottom.sync([]), this.bottom = new rX(SS.view, !1, HS.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
        let gS = SS.state.facet(Hx);
        if (gS != this.input) {
          let HS = gS.filter((SS => SS)),
            tS = [],
            bS = [],
            XS = [],
            xS = [];
          for (let gS of HS) {
            let HS, NS = this.specs.indexOf(gS);
            NS < 0 ? (HS = gS(SS.view), xS.push(HS)) : (HS = this.panels[NS], HS.update && HS.update(SS)), tS.push(HS), (HS.top ? bS : XS).push(HS)
          }
          this.specs = HS, this.panels = tS, this.top.sync(bS), this.bottom.sync(XS);
          for (let SS of xS) SS.dom.classList.add("cm-panel"), SS.mount && SS.mount()
        } else
          for (let tS of this.panels) tS.update && tS.update(SS)
      }
      destroy() {
        this.top.sync([]), this.bottom.sync([])
      }
    }, {
      provide: SS => Ob.scrollMargins.of((HS => {
        let gS = HS.plugin(SS);
        return gS && {
          top: gS.top.scrollMargin(),
          bottom: gS.bottom.scrollMargin()
        }
      }))
    });
    class rX {
      constructor(SS, HS, gS) {
        this.view = SS, this.top = HS, this.container = gS, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses()
      }
      sync(SS) {
        for (let HS of this.panels) HS.destroy && SS.indexOf(HS) < 0 && HS.destroy();
        this.panels = SS, this.syncDOM()
      }
      syncDOM() {
        if (0 == this.panels.length) return void(this.dom && (this.dom.remove(), this.dom = void 0));
        if (!this.dom) {
          this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
          let SS = this.container || this.view.dom;
          SS.insertBefore(this.dom, this.top ? SS.firstChild : null)
        }
        let SS = this.dom.firstChild;
        for (let HS of this.panels)
          if (HS.dom.parentNode == this.dom) {
            for (; SS != HS.dom;) SS = Sx(SS);
            SS = SS.nextSibling
          } else this.dom.insertBefore(HS.dom, SS);
        for (; SS;) SS = Sx(SS)
      }
      scrollMargin() {
        return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top)
      }
      syncClasses() {
        if (this.container && this.classes != this.view.themeClasses) {
          for (let SS of this.classes.split(" ")) SS && this.container.classList.remove(SS);
          for (let SS of (this.classes = this.view.themeClasses).split(" ")) SS && this.container.classList.add(SS)
        }
      }
    }

    function Sx(SS) {
      let HS = SS.nextSibling;
      return SS.remove(), HS
    }
    const Hx = tS.n.define({
      enables: eX
    });

    function gx(SS, HS) {
      let gS, bS = new Promise((SS => gS = SS)),
        XS = SS => function(SS, HS, gS) {
          let tS = HS.content ? HS.content(SS, (() => xS(null))) : null;
          if (!tS) {
            if (tS = (0, fS.d)("form"), HS.input) {
              let SS = (0, fS.d)("input", HS.input);
              /^(text|password|number|email|tel|url)$/.test(SS.type) && SS.classList.add("cm-textfield"), SS.name || (SS.name = "input"), tS.appendChild((0, fS.d)("label", (HS.label || "") + ": ", SS))
            } else tS.appendChild(document.createTextNode(HS.label || ""));
            tS.appendChild(document.createTextNode(" ")), tS.appendChild((0, fS.d)("button", {
              class: "cm-button",
              type: "submit"
            }, HS.submitLabel || "OK"))
          }
          let bS = "FORM" == tS.nodeName ? [tS] : tS.querySelectorAll("form");
          for (let NS = 0; NS < bS.length; NS++) {
            let SS = bS[NS];
            SS.addEventListener("keydown", (HS => {
              27 == HS.keyCode ? (HS.preventDefault(), xS(null)) : 13 == HS.keyCode && (HS.preventDefault(), xS(SS))
            })), SS.addEventListener("submit", (HS => {
              HS.preventDefault(), xS(SS)
            }))
          }
          let XS = (0, fS.d)("div", tS, (0, fS.d)("button", {
            onclick: () => xS(null),
            "aria-label": SS.state.phrase("close"),
            class: "cm-dialog-close",
            type: "button"
          }, ["\xd7"]));
          HS.class && (XS.className = HS.class);

          function xS(HS) {
            XS.contains(XS.ownerDocument.activeElement) && SS.focus(), gS(HS)
          }
          return XS.classList.add("cm-dialog"), {
            dom: XS,
            top: HS.top,
            mount: () => {
              if (HS.focus) {
                let SS;
                SS = "string" == typeof HS.focus ? tS.querySelector(HS.focus) : tS.querySelector("input") || tS.querySelector("button"), SS && "select" in SS ? SS.select() : SS && "focus" in SS && SS.focus()
              }
            }
          }
        }(SS, HS, gS);
      SS.state.field(tx, !1) ? SS.dispatch({
        effects: bx.of(XS)
      }) : SS.dispatch({
        effects: tS.G.appendConfig.of(tx.init((() => [XS])))
      });
      let xS = Xx.of(XS);
      return {
        close: xS,
        result: bS.then((HS => ((SS.win.queueMicrotask || (HS => SS.win.setTimeout(HS, 10)))((() => {
          SS.state.field(tx).indexOf(XS) > -1 && SS.dispatch({
            effects: xS
          })
        })), HS)))
      }
    }
    const tx = tS.H.define({
        create: () => [],
        update(SS, HS) {
          for (let gS of HS.effects) gS.is(bx) ? SS = [gS.value].concat(SS) : gS.is(Xx) && (SS = SS.filter((SS => SS != gS.value)));
          return SS
        },
        provide: SS => Hx.computeN([SS], (HS => HS.field(SS)))
      }),
      bx = tS.G.define(),
      Xx = tS.G.define();
    class xx extends tS.D {
      compare(SS) {
        return this == SS || this.constructor == SS.constructor && this.eq(SS)
      }
      eq(SS) {
        return !1
      }
      destroy(SS) {}
    }
    xx.prototype.elementClass = "", xx.prototype.toDOM = void 0, xx.prototype.mapMode = tS.q.TrackBefore, xx.prototype.startSide = xx.prototype.endSide = -1, xx.prototype.point = !0;
    const Nx = tS.n.define(),
      qx = tS.n.define(),
      ux = {
        class: "",
        renderEmptyElements: !1,
        elementStyle: "",
        markers: () => tS.A.empty,
        lineMarker: () => null,
        widgetMarker: () => null,
        lineMarkerChange: null,
        initialSpacer: null,
        updateSpacer: null,
        domEventHandlers: {},
        side: "before"
      },
      Ix = tS.n.define();

    function fx(SS) {
      return [ax(), Ix.of({
        ...ux,
        ...SS
      })]
    }
    const kx = tS.n.define({
      combine: SS => SS.some((SS => SS))
    });

    function ax(SS) {
      let HS = [Kx];
      return SS && !1 === SS.fixed && HS.push(kx.of(!0)), HS
    }
    const Kx = lH.fromClass(class {
      constructor(SS) {
        this.view = SS, this.domAfter = null, this.prevViewport = SS.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = SS.state.facet(Ix).map((HS => new nx(SS, HS))), this.fixed = !SS.state.facet(kx);
        for (let HS of this.gutters) "after" == HS.config.side ? this.getDOMAfter().appendChild(HS.dom) : this.dom.appendChild(HS.dom);
        this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), SS.scrollDOM.insertBefore(this.dom, SS.contentDOM)
      }
      getDOMAfter() {
        return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter
      }
      update(SS) {
        if (this.updateGutters(SS)) {
          let HS = this.prevViewport,
            gS = SS.view.viewport,
            tS = Math.min(HS.to, gS.to) - Math.max(HS.from, gS.from);
          this.syncGutters(tS < .8 * (gS.to - gS.from))
        }
        if (SS.geometryChanged) {
          let SS = this.view.contentHeight / this.view.scaleY + "px";
          this.dom.style.minHeight = SS, this.domAfter && (this.domAfter.style.minHeight = SS)
        }
        this.view.state.facet(kx) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = SS.view.viewport
      }
      syncGutters(SS) {
        let HS = this.dom.nextSibling;
        SS && (this.dom.remove(), this.domAfter && this.domAfter.remove());
        let gS = tS.A.iter(this.view.state.facet(Nx), this.view.viewport.from),
          bS = [],
          XS = this.gutters.map((SS => new Cx(SS, this.view.viewport, -this.view.documentPadding.top)));
        for (let tS of this.view.viewportLineBlocks)
          if (bS.length && (bS = []), Array.isArray(tS.type)) {
            let SS = !0;
            for (let HS of tS.type)
              if (HS.type == ES.Text && SS) {
                Gx(gS, bS, HS.from);
                for (let SS of XS) SS.line(this.view, HS, bS);
                SS = !1
              } else if (HS.widget)
              for (let SS of XS) SS.widget(this.view, HS)
          } else if (tS.type == ES.Text) {
          Gx(gS, bS, tS.from);
          for (let SS of XS) SS.line(this.view, tS, bS)
        } else if (tS.widget)
          for (let SS of XS) SS.widget(this.view, tS);
        for (let tS of XS) tS.finish();
        SS && (this.view.scrollDOM.insertBefore(this.dom, HS), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter))
      }
      updateGutters(SS) {
        let HS = SS.startState.facet(Ix),
          gS = SS.state.facet(Ix),
          bS = SS.docChanged || SS.heightChanged || SS.viewportChanged || !tS.A.eq(SS.startState.facet(Nx), SS.state.facet(Nx), SS.view.viewport.from, SS.view.viewport.to);
        if (HS == gS)
          for (let tS of this.gutters) tS.update(SS) && (bS = !0);
        else {
          bS = !0;
          let tS = [];
          for (let bS of gS) {
            let gS = HS.indexOf(bS);
            gS < 0 ? tS.push(new nx(this.view, bS)) : (this.gutters[gS].update(SS), tS.push(this.gutters[gS]))
          }
          for (let SS of this.gutters) SS.dom.remove(), tS.indexOf(SS) < 0 && SS.destroy();
          for (let SS of tS) "after" == SS.config.side ? this.getDOMAfter().appendChild(SS.dom) : this.dom.appendChild(SS.dom);
          this.gutters = tS
        }
        return bS
      }
      destroy() {
        for (let SS of this.gutters) SS.destroy();
        this.dom.remove(), this.domAfter && this.domAfter.remove()
      }
    }, {
      provide: SS => Ob.scrollMargins.of((HS => {
        let gS = HS.plugin(SS);
        if (!gS || 0 == gS.gutters.length || !gS.fixed) return null;
        let tS = gS.dom.offsetWidth * HS.scaleX,
          bS = gS.domAfter ? gS.domAfter.offsetWidth * HS.scaleX : 0;
        return HS.textDirection == uH.LTR ? {
          left: tS,
          right: bS
        } : {
          right: tS,
          left: bS
        }
      }))
    });

    function jx(SS) {
      return Array.isArray(SS) ? SS : [SS]
    }

    function Gx(SS, HS, gS) {
      for (; SS.value && SS.from <= gS;) SS.from == gS && HS.push(SS.value), SS.next()
    }
    class Cx {
      constructor(SS, HS, gS) {
        this.gutter = SS, this.height = gS, this.i = 0, this.cursor = tS.A.iter(SS.markers, HS.from)
      }
      addElement(SS, HS, gS) {
        let {
          gutter: tS
        } = this, bS = (HS.top - this.height) / SS.scaleY, XS = HS.height / SS.scaleY;
        if (this.i == tS.elements.length) {
          let HS = new Px(SS, XS, bS, gS);
          tS.elements.push(HS), tS.dom.appendChild(HS.dom)
        } else tS.elements[this.i].update(SS, XS, bS, gS);
        this.height = HS.bottom, this.i++
      }
      line(SS, HS, gS) {
        let tS = [];
        Gx(this.cursor, tS, HS.from), gS.length && (tS = tS.concat(gS));
        let bS = this.gutter.config.lineMarker(SS, HS, tS);
        bS && tS.unshift(bS);
        let XS = this.gutter;
        (0 != tS.length || XS.config.renderEmptyElements) && this.addElement(SS, HS, tS)
      }
      widget(SS, HS) {
        let gS = this.gutter.config.widgetMarker(SS, HS.widget, HS),
          tS = gS ? [gS] : null;
        for (let bS of SS.state.facet(qx)) {
          let gS = bS(SS, HS.widget, HS);
          gS && (tS || (tS = [])).push(gS)
        }
        tS && this.addElement(SS, HS, tS)
      }
      finish() {
        let SS = this.gutter;
        for (; SS.elements.length > this.i;) {
          let HS = SS.elements.pop();
          SS.dom.removeChild(HS.dom), HS.destroy()
        }
      }
    }
    class nx {
      constructor(SS, HS) {
        this.view = SS, this.config = HS, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
        for (let gS in HS.domEventHandlers) this.dom.addEventListener(gS, (tS => {
          let bS, XS = tS.target;
          if (XS != this.dom && this.dom.contains(XS)) {
            for (; XS.parentNode != this.dom;) XS = XS.parentNode;
            let SS = XS.getBoundingClientRect();
            bS = (SS.top + SS.bottom) / 2
          } else bS = tS.clientY;
          let xS = SS.lineBlockAtHeight(bS - SS.documentTop);
          HS.domEventHandlers[gS](SS, xS, tS) && tS.preventDefault()
        }));
        this.markers = jx(HS.markers(SS)), HS.initialSpacer && (this.spacer = new Px(SS, 0, 0, [HS.initialSpacer(SS)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none")
      }
      update(SS) {
        let HS = this.markers;
        if (this.markers = jx(this.config.markers(SS.view)), this.spacer && this.config.updateSpacer) {
          let HS = this.config.updateSpacer(this.spacer.markers[0], SS);
          HS != this.spacer.markers[0] && this.spacer.update(SS.view, 0, 0, [HS])
        }
        let gS = SS.view.viewport;
        return !tS.A.eq(this.markers, HS, gS.from, gS.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(SS)
      }
      destroy() {
        for (let SS of this.elements) SS.destroy()
      }
    }
    class Px {
      constructor(SS, HS, gS, tS) {
        this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(SS, HS, gS, tS)
      }
      update(SS, HS, gS, tS) {
        this.height != HS && (this.height = HS, this.dom.style.height = HS + "px"), this.above != gS && (this.dom.style.marginTop = (this.above = gS) ? gS + "px" : ""),
          function(SS, HS) {
            if (SS.length != HS.length) return !1;
            for (let gS = 0; gS < SS.length; gS++)
              if (!SS[gS].compare(HS[gS])) return !1;
            return !0
          }(this.markers, tS) || this.setMarkers(SS, tS)
      }
      setMarkers(SS, HS) {
        let gS = "cm-gutterElement",
          tS = this.dom.firstChild;
        for (let bS = 0, XS = 0;;) {
          let xS = XS,
            NS = bS < HS.length ? HS[bS++] : null,
            qS = !1;
          if (NS) {
            let SS = NS.elementClass;
            SS && (gS += " " + SS);
            for (let HS = XS; HS < this.markers.length; HS++)
              if (this.markers[HS].compare(NS)) {
                xS = HS, qS = !0;
                break
              }
          } else xS = this.markers.length;
          for (; XS < xS;) {
            let SS = this.markers[XS++];
            if (SS.toDOM) {
              SS.destroy(tS);
              let HS = tS.nextSibling;
              tS.remove(), tS = HS
            }
          }
          if (!NS) break;
          NS.toDOM && (qS ? tS = tS.nextSibling : this.dom.insertBefore(NS.toDOM(SS), tS)), qS && XS++
        }
        this.dom.className = gS, this.markers = HS
      }
      destroy() {
        this.setMarkers(null, [])
      }
    }
    const Qx = tS.n.define(),
      Dx = tS.n.define(),
      wx = tS.n.define({
        combine: SS => (0, tS.W)(SS, {
          formatNumber: String,
          domEventHandlers: {}
        }, {
          domEventHandlers(SS, HS) {
            let gS = Object.assign({}, SS);
            for (let tS in HS) {
              let SS = gS[tS],
                bS = HS[tS];
              gS[tS] = SS ? (HS, gS, tS) => SS(HS, gS, tS) || bS(HS, gS, tS) : bS
            }
            return gS
          }
        })
      });
    class hx extends xx {
      constructor(SS) {
        super(), this.number = SS
      }
      eq(SS) {
        return this.number == SS.number
      }
      toDOM() {
        return document.createTextNode(this.number)
      }
    }

    function Zx(SS, HS) {
      return SS.state.facet(wx).formatNumber(HS, SS.state)
    }
    const Jx = Ix.compute([wx], (SS => ({
      class: "cm-lineNumbers",
      renderEmptyElements: !1,
      markers: SS => SS.state.facet(Qx),
      lineMarker: (SS, HS, gS) => gS.some((SS => SS.toDOM)) ? null : new hx(Zx(SS, SS.state.doc.lineAt(HS.from).number)),
      widgetMarker: (SS, HS, gS) => {
        for (let tS of SS.state.facet(Dx)) {
          let bS = tS(SS, HS, gS);
          if (bS) return bS
        }
        return null
      },
      lineMarkerChange: SS => SS.startState.facet(wx) != SS.state.facet(wx),
      initialSpacer: SS => new hx(Zx(SS, dx(SS.state.doc.lines))),
      updateSpacer(SS, HS) {
        let gS = Zx(HS.view, dx(HS.view.state.doc.lines));
        return gS == SS.number ? SS : new hx(gS)
      },
      domEventHandlers: SS.facet(wx).domEventHandlers,
      side: "before"
    })));

    function Ox() {
      let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [wx.of(SS), ax(), Jx]
    }

    function dx(SS) {
      let HS = 9;
      for (; HS < SS;) HS = 10 * HS + 9;
      return HS
    }
    const cx = new class extends xx {
        constructor() {
          super(...arguments), this.elementClass = "cm-activeLineGutter"
        }
      },
      vx = Nx.compute(["selection"], (SS => {
        let HS = [],
          gS = -1;
        for (let tS of SS.selection.HG) {
          let bS = SS.doc.lineAt(tS.head).from;
          bS > gS && (gS = bS, HS.push(cx.range(bS)))
        }
        return tS.A.of(HS)
      }));

    function Ex() {
      return vx
    }
  },
  41336: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => tS,
      g: () => aS,
      i: () => xS,
      m: () => IS,
      p: () => uS,
      q: () => YS,
      t: () => yS,
      v: () => AS,
      w: () => KS
    });
    const tS = 1024;
    let bS = 0;
    class XS {
      constructor(SS, HS) {
        this.from = SS, this.to = HS
      }
    }
    class xS {
      constructor() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.id = bS++, this.perNode = !!SS.perNode, this.deserialize = SS.deserialize || (() => {
          throw new Error("This node type doesn't define a deserialize function")
        }), this.combine = SS.combine || null
      }
      add(SS) {
        if (this.perNode) throw new RangeError("Can't add per-node props to node types");
        return "function" != typeof SS && (SS = uS.match(SS)), HS => {
          let gS = SS(HS);
          return void 0 === gS ? null : [this, gS]
        }
      }
    }
    xS.closedBy = new xS({
      deserialize: SS => SS.split(" ")
    }), xS.openedBy = new xS({
      deserialize: SS => SS.split(" ")
    }), xS.group = new xS({
      deserialize: SS => SS.split(" ")
    }), xS.isolate = new xS({
      deserialize: SS => {
        if (SS && "rtl" != SS && "ltr" != SS && "auto" != SS) throw new RangeError("Invalid value for isolate: " + SS);
        return SS || "auto"
      }
    }), xS.contextHash = new xS({
      perNode: !0
    }), xS.lookAhead = new xS({
      perNode: !0
    }), xS.mounted = new xS({
      perNode: !0
    });
    class NS {
      constructor(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this.tree = SS, this.overlay = HS, this.parser = gS, this.bracketed = tS
      }
      static get(SS) {
        return SS && SS.props && SS.props[xS.mounted.id]
      }
    }
    const qS = Object.create(null);
    class uS {
      constructor(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.name = SS, this.props = HS, this.id = gS, this.flags = tS
      }
      static define(SS) {
        let HS = SS.props && SS.props.length ? Object.create(null) : qS,
          gS = (SS.top ? 1 : 0) | (SS.skipped ? 2 : 0) | (SS.error ? 4 : 0) | (null == SS.name ? 8 : 0),
          tS = new uS(SS.name || "", HS, SS.id, gS);
        if (SS.props)
          for (let bS of SS.props)
            if (Array.isArray(bS) || (bS = bS(tS)), bS) {
              if (bS[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
              HS[bS[0].id] = bS[1]
            } return tS
      }
      prop(SS) {
        return this.props[SS.id]
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
      is(SS) {
        if ("string" == typeof SS) {
          if (this.name == SS) return !0;
          let HS = this.prop(xS.group);
          return !!HS && HS.indexOf(SS) > -1
        }
        return this.id == SS
      }
      static match(SS) {
        let HS = Object.create(null);
        for (let gS in SS)
          for (let tS of gS.split(" ")) HS[tS] = SS[gS];
        return SS => {
          for (let gS = SS.prop(xS.group), tS = -1; tS < (gS ? gS.length : 0); tS++) {
            let bS = HS[tS < 0 ? SS.name : gS[tS]];
            if (bS) return bS
          }
        }
      }
    }
    uS.none = new uS("", Object.create(null), 0, 8);
    class IS {
      constructor(SS) {
        this.types = SS;
        for (let HS = 0; HS < SS.length; HS++)
          if (SS[HS].id != HS) throw new RangeError("Node type ids should correspond to array positions when creating a node set")
      }
      extend() {
        let SS = [];
        for (var HS = arguments.length, gS = new Array(HS), tS = 0; tS < HS; tS++) gS[tS] = arguments[tS];
        for (let bS of this.types) {
          let HS = null;
          for (let SS of gS) {
            let gS = SS(bS);
            if (gS) {
              HS || (HS = Object.assign({}, bS.props));
              let SS = gS[1],
                tS = gS[0];
              tS.combine && tS.id in HS && (SS = tS.combine(HS[tS.id], SS)), HS[tS.id] = SS
            }
          }
          SS.push(HS ? new uS(bS.name, HS, bS.id, bS.flags) : bS)
        }
        return new IS(SS)
      }
    }
    const fS = new WeakMap,
      kS = new WeakMap;
    var aS;
    ! function(SS) {
      SS[SS.ExcludeBuffers = 1] = "ExcludeBuffers", SS[SS.IncludeAnonymous = 2] = "IncludeAnonymous", SS[SS.IgnoreMounts = 4] = "IgnoreMounts", SS[SS.IgnoreOverlays = 8] = "IgnoreOverlays", SS[SS.EnterBracketed = 16] = "EnterBracketed"
    }(aS || (aS = {}));
    class KS {
      constructor(SS, HS, gS, tS, bS) {
        if (this.type = SS, this.children = HS, this.positions = gS, this.length = tS, this.props = null, bS && bS.length) {
          this.props = Object.create(null);
          for (let [SS, HS] of bS) this.props["number" == typeof SS ? SS : SS.id] = HS
        }
      }
      toString() {
        let SS = NS.get(this);
        if (SS && !SS.overlay) return SS.tree.toString();
        let HS = "";
        for (let gS of this.children) {
          let SS = gS.toString();
          SS && (HS && (HS += ","), HS += SS)
        }
        return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (HS.length ? "(" + HS + ")" : "") : HS
      }
      cursor() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return new dS(this.topNode, SS)
      }
      cursorAt(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gS = fS.get(this) || this.topNode,
          tS = new dS(gS);
        return tS.moveTo(SS, HS), fS.set(this, tS._tree), tS
      }
      get topNode() {
        return new QS(this, 0, 0, null)
      }
      resolve(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gS = nS(fS.get(this) || this.topNode, SS, HS, !1);
        return fS.set(this, gS), gS
      }
      resolveInner(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gS = nS(kS.get(this) || this.topNode, SS, HS, !0);
        return kS.set(this, gS), gS
      }
      resolveStack(SS) {
        return function(SS, HS, gS) {
          let tS = SS.resolveInner(HS, gS),
            bS = null;
          for (let XS = tS instanceof QS ? tS : tS.context.parent; XS; XS = XS.parent)
            if (XS.index < 0) {
              let SS = XS.parent;
              (bS || (bS = [tS])).push(SS.resolve(HS, gS)), XS = SS
            } else {
              let SS = NS.get(XS.tree);
              if (SS && SS.overlay && SS.overlay[0].from <= HS && SS.overlay[SS.overlay.length - 1].to >= HS) {
                let xS = new QS(SS.tree, SS.overlay[0].from + XS.from, -1, XS);
                (bS || (bS = [tS])).push(nS(xS, HS, gS, !1))
              }
            } return bS ? JS(bS) : tS
        }(this, SS, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
      }
      iterate(SS) {
        let {
          enter: HS,
          leave: gS,
          from: tS = 0,
          to: bS = this.length
        } = SS, XS = SS.mode || 0, xS = (XS & aS.IncludeAnonymous) > 0;
        for (let NS = this.cursor(XS | aS.IncludeAnonymous);;) {
          let SS = !1;
          if (NS.from <= bS && NS.to >= tS && (!xS && NS.type.isAnonymous || !1 !== HS(NS))) {
            if (NS.firstChild()) continue;
            SS = !0
          }
          for (; SS && gS && (xS || !NS.type.isAnonymous) && gS(NS), !NS.nextSibling();) {
            if (!NS.parent()) return;
            SS = !0
          }
        }
      }
      prop(SS) {
        return SS.perNode ? this.props ? this.props[SS.id] : void 0 : this.type.prop(SS)
      }
      get propValues() {
        let SS = [];
        if (this.props)
          for (let HS in this.props) SS.push([+HS, this.props[HS]]);
        return SS
      }
      balance() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this.children.length <= 8 ? this : LS(uS.none, this.children, this.positions, 0, this.children.length, 0, this.length, ((SS, HS, gS) => new KS(this.type, SS, HS, gS, this.propValues)), SS.makeTree || ((SS, HS, gS) => new KS(uS.none, SS, HS, gS)))
      }
      static build(SS) {
        return function(SS) {
          var HS;
          let {
            buffer: gS,
            nodeSet: bS,
            maxBufferLength: XS = tS,
            reused: NS = [],
            minRepeatType: qS = bS.types.length
          } = SS, uS = Array.isArray(gS) ? new jS(gS, gS.length) : gS, IS = bS.types, fS = 0, kS = 0;

          function aS(SS, HS, gS, tS, xS, KS) {
            let {
              id: jS,
              start: hS,
              end: ZS,
              size: JS
            } = uS, OS = kS, dS = fS;
            if (JS < 0) {
              if (uS.next(), -1 == JS) {
                let HS = NS[jS];
                return gS.push(HS), void tS.push(hS - SS)
              }
              if (-3 == JS) return void(fS = jS);
              if (-4 == JS) return void(kS = jS);
              throw new RangeError(`Unrecognized record size: ${JS}`)
            }
            let cS, vS, ES = IS[jS],
              YS = hS - SS;
            if (ZS - hS <= XS && (vS = DS(uS.pos - HS, xS))) {
              let HS = new Uint16Array(vS.size - vS.skip),
                gS = uS.pos - vS.size,
                tS = HS.length;
              for (; uS.pos > gS;) tS = wS(vS.start, HS, tS);
              cS = new GS(HS, ZS - vS.start, bS), YS = vS.start - SS
            } else {
              let SS = uS.pos - JS;
              uS.next();
              let HS = [],
                gS = [],
                tS = jS >= qS ? jS : -1,
                bS = 0,
                xS = ZS;
              for (; uS.pos > SS;) tS >= 0 && uS.id == tS && uS.size >= 0 ? (uS.end <= xS - XS && (PS(HS, gS, hS, bS, uS.end, xS, tS, OS, dS), bS = HS.length, xS = uS.end), uS.next()) : KS > 2500 ? CS(hS, SS, HS, gS) : aS(hS, SS, HS, gS, tS, KS + 1);
              if (tS >= 0 && bS > 0 && bS < HS.length && PS(HS, gS, hS, bS, hS, xS, tS, OS, dS), HS.reverse(), gS.reverse(), tS > -1 && bS > 0) {
                let SS = nS(ES, dS);
                cS = LS(ES, HS, gS, 0, HS.length, 0, ZS - hS, SS, SS)
              } else cS = QS(ES, HS, gS, ZS - hS, OS - ZS, dS)
            }
            gS.push(cS), tS.push(YS)
          }

          function CS(SS, HS, gS, tS) {
            let xS = [],
              NS = 0,
              qS = -1;
            for (; uS.pos > HS;) {
              let {
                id: SS,
                start: HS,
                end: gS,
                size: tS
              } = uS;
              if (tS > 4) uS.next();
              else {
                if (qS > -1 && HS < qS) break;
                qS < 0 && (qS = gS - XS), xS.push(SS, HS, gS), NS++, uS.next()
              }
            }
            if (NS) {
              let HS = new Uint16Array(4 * NS),
                XS = xS[xS.length - 2];
              for (let SS = xS.length - 3, gS = 0; SS >= 0; SS -= 3) HS[gS++] = xS[SS], HS[gS++] = xS[SS + 1] - XS, HS[gS++] = xS[SS + 2] - XS, HS[gS++] = gS;
              gS.push(new GS(HS, xS[2] - XS, bS)), tS.push(XS - SS)
            }
          }

          function nS(SS, HS) {
            return (gS, tS, bS) => {
              let XS, NS, qS = 0,
                uS = gS.length - 1;
              if (uS >= 0 && (XS = gS[uS]) instanceof KS) {
                if (!uS && XS.type == SS && XS.length == bS) return XS;
                (NS = XS.prop(xS.lookAhead)) && (qS = tS[uS] + XS.length + NS)
              }
              return QS(SS, gS, tS, bS, qS, HS)
            }
          }

          function PS(SS, HS, gS, tS, XS, xS, NS, qS, uS) {
            let IS = [],
              fS = [];
            for (; SS.length > tS;) IS.push(SS.pop()), fS.push(HS.pop() + gS - XS);
            SS.push(QS(bS.types[NS], IS, fS, xS - XS, qS - xS, uS)), HS.push(XS - gS)
          }

          function QS(SS, HS, gS, tS, bS, XS, NS) {
            if (XS) {
              let SS = [xS.contextHash, XS];
              NS = NS ? [SS].concat(NS) : [SS]
            }
            if (bS > 25) {
              let SS = [xS.lookAhead, bS];
              NS = NS ? [SS].concat(NS) : [SS]
            }
            return new KS(SS, HS, gS, tS, NS)
          }

          function DS(SS, HS) {
            let gS = uS.fork(),
              tS = 0,
              bS = 0,
              xS = 0,
              NS = gS.end - XS,
              IS = {
                size: 0,
                start: 0,
                skip: 0
              };
            SS: for (let XS = gS.pos - SS; gS.pos > XS;) {
              let SS = gS.size;
              if (gS.id == HS && SS >= 0) {
                IS.size = tS, IS.start = bS, IS.skip = xS, xS += 4, tS += 4, gS.next();
                continue
              }
              let uS = gS.pos - SS;
              if (SS < 0 || uS < XS || gS.start < NS) break;
              let fS = gS.id >= qS ? 4 : 0,
                kS = gS.start;
              for (gS.next(); gS.pos > uS;) {
                if (gS.size < 0) {
                  if (-3 != gS.size && -4 != gS.size) break SS;
                  fS += 4
                } else gS.id >= qS && (fS += 4);
                gS.next()
              }
              bS = kS, tS += SS, xS += fS
            }
            return (HS < 0 || tS == SS) && (IS.size = tS, IS.start = bS, IS.skip = xS), IS.size > 4 ? IS : void 0
          }

          function wS(SS, HS, gS) {
            let {
              id: tS,
              start: bS,
              end: XS,
              size: xS
            } = uS;
            if (uS.next(), xS >= 0 && tS < qS) {
              let NS = gS;
              if (xS > 4) {
                let tS = uS.pos - (xS - 4);
                for (; uS.pos > tS;) gS = wS(SS, HS, gS)
              }
              HS[--gS] = NS, HS[--gS] = XS - SS, HS[--gS] = bS - SS, HS[--gS] = tS
            } else - 3 == xS ? fS = tS : -4 == xS && (kS = tS);
            return gS
          }
          let hS = [],
            ZS = [];
          for (; uS.pos > 0;) aS(SS.start || 0, SS.bufferStart || 0, hS, ZS, -1, 0);
          let JS = null !== (HS = SS.length) && void 0 !== HS ? HS : hS.length ? ZS[0] + hS[0].length : 0;
          return new KS(IS[SS.topID], hS.reverse(), ZS.reverse(), JS)
        }(SS)
      }
    }
    KS.empty = new KS(uS.none, [], [], 0);
    class jS {
      constructor(SS, HS) {
        this.buffer = SS, this.index = HS
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
        return new jS(this.buffer, this.index)
      }
    }
    class GS {
      constructor(SS, HS, gS) {
        this.buffer = SS, this.length = HS, this.set = gS
      }
      get type() {
        return uS.none
      }
      toString() {
        let SS = [];
        for (let HS = 0; HS < this.buffer.length;) SS.push(this.childString(HS)), HS = this.buffer[HS + 3];
        return SS.join(",")
      }
      childString(SS) {
        let HS = this.buffer[SS],
          gS = this.buffer[SS + 3],
          tS = this.set.types[HS],
          bS = tS.name;
        if (/\W/.test(bS) && !tS.isError && (bS = JSON.stringify(bS)), gS == (SS += 4)) return bS;
        let XS = [];
        for (; SS < gS;) XS.push(this.childString(SS)), SS = this.buffer[SS + 3];
        return bS + "(" + XS.join(",") + ")"
      }
      findChild(SS, HS, gS, tS, bS) {
        let {
          buffer: XS
        } = this, xS = -1;
        for (let NS = SS; NS != HS && !(CS(bS, tS, XS[NS + 1], XS[NS + 2]) && (xS = NS, gS > 0)); NS = XS[NS + 3]);
        return xS
      }
      slice(SS, HS, gS) {
        let tS = this.buffer,
          bS = new Uint16Array(HS - SS),
          XS = 0;
        for (let xS = SS, NS = 0; xS < HS;) {
          bS[NS++] = tS[xS++], bS[NS++] = tS[xS++] - gS;
          let HS = bS[NS++] = tS[xS++] - gS;
          bS[NS++] = tS[xS++] - SS, XS = Math.max(XS, HS)
        }
        return new GS(bS, XS, this.set)
      }
    }

    function CS(SS, HS, gS, tS) {
      switch (SS) {
        case -2:
          return gS < HS;
        case -1:
          return tS >= HS && gS < HS;
        case 0:
          return gS < HS && tS > HS;
        case 1:
          return gS <= HS && tS > HS;
        case 2:
          return tS > HS;
        case 4:
          return !0
      }
    }

    function nS(SS, HS, gS, tS) {
      for (var bS; SS.from == SS.to || (gS < 1 ? SS.from >= HS : SS.from > HS) || (gS > -1 ? SS.to <= HS : SS.to < HS);) {
        let HS = !tS && SS instanceof QS && SS.index < 0 ? null : SS.parent;
        if (!HS) return SS;
        SS = HS
      }
      let XS = tS ? 0 : aS.IgnoreOverlays;
      if (tS)
        for (let xS = SS, NS = xS.parent; NS; xS = NS, NS = xS.parent) xS instanceof QS && xS.index < 0 && (null === (bS = NS.enter(HS, gS, XS)) || void 0 === bS ? void 0 : bS.from) != xS.from && (SS = NS);
      for (;;) {
        let tS = SS.enter(HS, gS, XS);
        if (!tS) return SS;
        SS = tS
      }
    }
    class PS {
      cursor() {
        return new dS(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)
      }
      getChild(SS) {
        let HS = DS(this, SS, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null);
        return HS.length ? HS[0] : null
      }
      getChildren(SS) {
        return DS(this, SS, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
      }
      resolve(SS) {
        return nS(this, SS, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !1)
      }
      resolveInner(SS) {
        return nS(this, SS, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !0)
      }
      matchContext(SS) {
        return wS(this.parent, SS)
      }
      enterUnfinishedNodesBefore(SS) {
        let HS = this.childBefore(SS),
          gS = this;
        for (; HS;) {
          let SS = HS.lastChild;
          if (!SS || SS.to != HS.to) break;
          SS.type.isError && SS.from == SS.to ? (gS = HS, HS = SS.prevSibling) : HS = SS
        }
        return gS
      }
      get node() {
        return this
      }
      get next() {
        return this.parent
      }
    }
    class QS extends PS {
      constructor(SS, HS, gS, tS) {
        super(), this._tree = SS, this.from = HS, this.index = gS, this._parent = tS
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
      nextChild(SS, HS, gS, tS) {
        let bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        for (let XS = this;;) {
          for (let {
              children: xS,
              positions: qS
            } = XS._tree, uS = HS > 0 ? xS.length : -1; SS != uS; SS += HS) {
            let uS, IS = xS[SS],
              fS = qS[SS] + XS.from;
            if (bS & aS.EnterBracketed && IS instanceof KS && (uS = NS.get(IS)) && !uS.overlay && uS.bracketed && gS >= fS && gS <= fS + IS.length || CS(tS, gS, fS, fS + IS.length))
              if (IS instanceof GS) {
                if (bS & aS.ExcludeBuffers) continue;
                let xS = IS.findChild(0, IS.buffer.length, HS, gS - fS, tS);
                if (xS > -1) return new ZS(new hS(XS, IS, SS, fS), null, xS)
              } else if (bS & aS.IncludeAnonymous || !IS.type.isAnonymous || cS(IS)) {
              let xS;
              if (!(bS & aS.IgnoreMounts) && (xS = NS.get(IS)) && !xS.overlay) return new QS(xS.tree, fS, SS, XS);
              let qS = new QS(IS, fS, SS, XS);
              return bS & aS.IncludeAnonymous || !qS.type.isAnonymous ? qS : qS.nextChild(HS < 0 ? IS.children.length - 1 : 0, HS, gS, tS, bS)
            }
          }
          if (bS & aS.IncludeAnonymous || !XS.type.isAnonymous) return null;
          if (SS = XS.index >= 0 ? XS.index + HS : HS < 0 ? -1 : XS._parent._tree.children.length, XS = XS._parent, !XS) return null
        }
      }
      get firstChild() {
        return this.nextChild(0, 1, 0, 4)
      }
      get lastChild() {
        return this.nextChild(this._tree.children.length - 1, -1, 0, 4)
      }
      childAfter(SS) {
        return this.nextChild(0, 1, SS, 2)
      }
      childBefore(SS) {
        return this.nextChild(this._tree.children.length - 1, -1, SS, -2)
      }
      prop(SS) {
        return this._tree.prop(SS)
      }
      enter(SS, HS) {
        let gS, tS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (!(tS & aS.IgnoreOverlays) && (gS = NS.get(this._tree)) && gS.overlay) {
          let bS = SS - this.from,
            XS = tS & aS.EnterBracketed && gS.bracketed;
          for (let {
              from: SS,
              to: tS
            }
            of gS.overlay)
            if ((HS > 0 || XS ? SS <= bS : SS < bS) && (HS < 0 || XS ? tS >= bS : tS > bS)) return new QS(gS.tree, gS.overlay[0].from + this.from, -1, this)
        }
        return this.nextChild(0, 1, SS, HS, tS)
      }
      nextSignificantParent() {
        let SS = this;
        for (; SS.type.isAnonymous && SS._parent;) SS = SS._parent;
        return SS
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

    function DS(SS, HS, gS, tS) {
      let bS = SS.cursor(),
        XS = [];
      if (!bS.firstChild()) return XS;
      if (null != gS)
        for (let xS = !1; !xS;)
          if (xS = bS.type.is(gS), !bS.nextSibling()) return XS;
      for (;;) {
        if (null != tS && bS.type.is(tS)) return XS;
        if (bS.type.is(HS) && XS.push(bS.node), !bS.nextSibling()) return null == tS ? XS : []
      }
    }

    function wS(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : HS.length - 1;
      for (let tS = SS; gS >= 0; tS = tS.parent) {
        if (!tS) return !1;
        if (!tS.type.isAnonymous) {
          if (HS[gS] && HS[gS] != tS.name) return !1;
          gS--
        }
      }
      return !0
    }
    class hS {
      constructor(SS, HS, gS, tS) {
        this.parent = SS, this.buffer = HS, this.index = gS, this.start = tS
      }
    }
    class ZS extends PS {
      get name() {
        return this.type.name
      }
      get from() {
        return this.context.start + this.context.buffer.buffer[this.index + 1]
      }
      get to() {
        return this.context.start + this.context.buffer.buffer[this.index + 2]
      }
      constructor(SS, HS, gS) {
        super(), this.context = SS, this._parent = HS, this.index = gS, this.type = SS.buffer.set.types[SS.buffer.buffer[gS]]
      }
      child(SS, HS, gS) {
        let {
          buffer: tS
        } = this.context, bS = tS.findChild(this.index + 4, tS.buffer[this.index + 3], SS, HS - this.context.start, gS);
        return bS < 0 ? null : new ZS(this.context, this, bS)
      }
      get firstChild() {
        return this.child(1, 0, 4)
      }
      get lastChild() {
        return this.child(-1, 0, 4)
      }
      childAfter(SS) {
        return this.child(1, SS, 2)
      }
      childBefore(SS) {
        return this.child(-1, SS, -2)
      }
      prop(SS) {
        return this.type.prop(SS)
      }
      enter(SS, HS) {
        if ((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0) & aS.ExcludeBuffers) return null;
        let {
          buffer: gS
        } = this.context, tS = gS.findChild(this.index + 4, gS.buffer[this.index + 3], HS > 0 ? 1 : -1, SS - this.context.start, HS);
        return tS < 0 ? null : new ZS(this.context, this, tS)
      }
      get parent() {
        return this._parent || this.context.parent.nextSignificantParent()
      }
      externalSibling(SS) {
        return this._parent ? null : this.context.parent.nextChild(this.context.index + SS, SS, 0, 4)
      }
      get nextSibling() {
        let {
          buffer: SS
        } = this.context, HS = SS.buffer[this.index + 3];
        return HS < (this._parent ? SS.buffer[this._parent.index + 3] : SS.buffer.length) ? new ZS(this.context, this._parent, HS) : this.externalSibling(1)
      }
      get prevSibling() {
        let {
          buffer: SS
        } = this.context, HS = this._parent ? this._parent.index + 4 : 0;
        return this.index == HS ? this.externalSibling(-1) : new ZS(this.context, this._parent, SS.findChild(HS, this.index, -1, 0, 4))
      }
      get tree() {
        return null
      }
      toTree() {
        let SS = [],
          HS = [],
          {
            buffer: gS
          } = this.context,
          tS = this.index + 4,
          bS = gS.buffer[this.index + 3];
        if (bS > tS) {
          let XS = gS.buffer[this.index + 1];
          SS.push(gS.slice(tS, bS, XS)), HS.push(0)
        }
        return new KS(this.type, SS, HS, this.to - this.from)
      }
      toString() {
        return this.context.buffer.childString(this.index)
      }
    }

    function JS(SS) {
      if (!SS.length) return null;
      let HS = 0,
        gS = SS[0];
      for (let XS = 1; XS < SS.length; XS++) {
        let tS = SS[XS];
        (tS.from > gS.from || tS.to < gS.to) && (gS = tS, HS = XS)
      }
      let tS = gS instanceof QS && gS.index < 0 ? null : gS.parent,
        bS = SS.slice();
      return tS ? bS[HS] = tS : bS.splice(HS, 1), new OS(bS, gS)
    }
    class OS {
      constructor(SS, HS) {
        this.heads = SS, this.node = HS
      }
      get next() {
        return JS(this.heads)
      }
    }
    class dS {
      get name() {
        return this.type.name
      }
      constructor(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = HS & ~aS.EnterBracketed, SS instanceof QS) this.yieldNode(SS);
        else {
          this._tree = SS.context.parent, this.buffer = SS.context;
          for (let HS = SS._parent; HS; HS = HS._parent) this.stack.unshift(HS.index);
          this.bufferNode = SS, this.yieldBuf(SS.index)
        }
      }
      yieldNode(SS) {
        return !!SS && (this._tree = SS, this.type = SS.type, this.from = SS.from, this.to = SS.to, !0)
      }
      yieldBuf(SS, HS) {
        this.index = SS;
        let {
          start: gS,
          buffer: tS
        } = this.buffer;
        return this.type = HS || tS.set.types[tS.buffer[SS]], this.from = gS + tS.buffer[SS + 1], this.to = gS + tS.buffer[SS + 2], !0
      }
      yield(SS) {
        return !!SS && (SS instanceof QS ? (this.buffer = null, this.yieldNode(SS)) : (this.buffer = SS.context, this.yieldBuf(SS.index, SS.type)))
      }
      toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
      }
      enterChild(SS, HS, gS) {
        if (!this.buffer) return this.yield(this._tree.nextChild(SS < 0 ? this._tree._tree.children.length - 1 : 0, SS, HS, gS, this.mode));
        let {
          buffer: tS
        } = this.buffer, bS = tS.findChild(this.index + 4, tS.buffer[this.index + 3], SS, HS - this.buffer.start, gS);
        return !(bS < 0) && (this.stack.push(this.index), this.yieldBuf(bS))
      }
      firstChild() {
        return this.enterChild(1, 0, 4)
      }
      lastChild() {
        return this.enterChild(-1, 0, 4)
      }
      childAfter(SS) {
        return this.enterChild(1, SS, 2)
      }
      childBefore(SS) {
        return this.enterChild(-1, SS, -2)
      }
      enter(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.mode;
        return this.buffer ? !(gS & aS.ExcludeBuffers) && this.enterChild(1, SS, HS) : this.yield(this._tree.enter(SS, HS, gS))
      }
      parent() {
        if (!this.buffer) return this.yieldNode(this.mode & aS.IncludeAnonymous ? this._tree._parent : this._tree.parent);
        if (this.stack.length) return this.yieldBuf(this.stack.pop());
        let SS = this.mode & aS.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        return this.buffer = null, this.yieldNode(SS)
      }
      sibling(SS) {
        if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + SS, SS, 0, 4, this.mode));
        let {
          buffer: HS
        } = this.buffer, gS = this.stack.length - 1;
        if (SS < 0) {
          let SS = gS < 0 ? 0 : this.stack[gS] + 4;
          if (this.index != SS) return this.yieldBuf(HS.findChild(SS, this.index, -1, 0, 4))
        } else {
          let SS = HS.buffer[this.index + 3];
          if (SS < (gS < 0 ? HS.buffer.length : HS.buffer[this.stack[gS] + 3])) return this.yieldBuf(SS)
        }
        return gS < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + SS, SS, 0, 4, this.mode))
      }
      nextSibling() {
        return this.sibling(1)
      }
      prevSibling() {
        return this.sibling(-1)
      }
      atLastNode(SS) {
        let HS, gS, {
          buffer: tS
        } = this;
        if (tS) {
          if (SS > 0) {
            if (this.index < tS.buffer.buffer.length) return !1
          } else
            for (let SS = 0; SS < this.index; SS++)
              if (tS.buffer.buffer[SS + 3] < this.index) return !1;
          ({
            index: HS,
            parent: gS
          } = tS)
        } else({
          index: HS,
          _parent: gS
        } = this._tree);
        for (; gS;
          ({
            index: HS,
            _parent: gS
          } = gS))
          if (HS > -1)
            for (let tS = HS + SS, bS = SS < 0 ? -1 : gS._tree.children.length; tS != bS; tS += SS) {
              let SS = gS._tree.children[tS];
              if (this.mode & aS.IncludeAnonymous || SS instanceof GS || !SS.type.isAnonymous || cS(SS)) return !1
            }
        return !0
      }
      move(SS, HS) {
        if (HS && this.enterChild(SS, 0, 4)) return !0;
        for (;;) {
          if (this.sibling(SS)) return !0;
          if (this.atLastNode(SS) || !this.parent()) return !1
        }
      }
      next() {
        let SS = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(1, SS)
      }
      prev() {
        let SS = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(-1, SS)
      }
      moveTo(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        for (;
          (this.from == this.to || (HS < 1 ? this.from >= SS : this.from > SS) || (HS > -1 ? this.to <= SS : this.to < SS)) && this.parent(););
        for (; this.enterChild(1, SS, HS););
        return this
      }
      get node() {
        if (!this.buffer) return this._tree;
        let SS = this.bufferNode,
          HS = null,
          gS = 0;
        if (SS && SS.context == this.buffer) SS: for (let tS = this.index, bS = this.stack.length; bS >= 0;) {
          for (let XS = SS; XS; XS = XS._parent)
            if (XS.index == tS) {
              if (tS == this.index) return XS;
              HS = XS, gS = bS + 1;
              break SS
            } tS = this.stack[--bS]
        }
        for (let tS = gS; tS < this.stack.length; tS++) HS = new ZS(this.buffer, HS, this.stack[tS]);
        return this.bufferNode = new ZS(this.buffer, HS, this.index)
      }
      get tree() {
        return this.buffer ? null : this._tree._tree
      }
      iterate(SS, HS) {
        for (let gS = 0;;) {
          let tS = !1;
          if (this.type.isAnonymous || !1 !== SS(this)) {
            if (this.firstChild()) {
              gS++;
              continue
            }
            this.type.isAnonymous || (tS = !0)
          }
          for (;;) {
            if (tS && HS && HS(this), tS = this.type.isAnonymous, !gS) return;
            if (this.nextSibling()) break;
            this.parent(), gS--, tS = !0
          }
        }
      }
      matchContext(SS) {
        if (!this.buffer) return wS(this.node.parent, SS);
        let {
          buffer: HS
        } = this.buffer, {
          types: gS
        } = HS.set;
        for (let tS = SS.length - 1, bS = this.stack.length - 1; tS >= 0; bS--) {
          if (bS < 0) return wS(this._tree, SS, tS);
          let XS = gS[HS.buffer[this.stack[bS]]];
          if (!XS.isAnonymous) {
            if (SS[tS] && SS[tS] != XS.name) return !1;
            tS--
          }
        }
        return !0
      }
    }

    function cS(SS) {
      return SS.children.some((SS => SS instanceof GS || !SS.type.isAnonymous || cS(SS)))
    }
    const vS = new WeakMap;

    function ES(SS, HS) {
      if (!SS.isAnonymous || HS instanceof GS || HS.type != SS) return 1;
      let gS = vS.get(HS);
      if (null == gS) {
        gS = 1;
        for (let tS of HS.children) {
          if (tS.type != SS || !(tS instanceof KS)) {
            gS = 1;
            break
          }
          gS += ES(SS, tS)
        }
        vS.set(HS, gS)
      }
      return gS
    }

    function LS(SS, HS, gS, tS, bS, XS, xS, NS, qS) {
      let uS = 0;
      for (let aS = tS; aS < bS; aS++) uS += ES(SS, HS[aS]);
      let IS = Math.ceil(1.5 * uS / 8),
        fS = [],
        kS = [];
      return function HS(gS, tS, bS, xS, NS) {
        for (let uS = bS; uS < xS;) {
          let bS = uS,
            aS = tS[uS],
            KS = ES(SS, gS[uS]);
          for (uS++; uS < xS; uS++) {
            let HS = ES(SS, gS[uS]);
            if (KS + HS >= IS) break;
            KS += HS
          }
          if (uS == bS + 1) {
            if (KS > IS) {
              let SS = gS[bS];
              HS(SS.children, SS.positions, 0, SS.children.length, tS[bS] + NS);
              continue
            }
            fS.push(gS[bS])
          } else {
            let HS = tS[uS - 1] + gS[uS - 1].length - aS;
            fS.push(LS(SS, gS, tS, bS, uS, aS, HS, null, qS))
          }
          kS.push(aS + NS - XS)
        }
      }(HS, gS, tS, bS, 0), (NS || qS)(fS, kS, xS)
    }
    class YS {
      constructor() {
        this.map = new WeakMap
      }
      setBuffer(SS, HS, gS) {
        let tS = this.map.get(SS);
        tS || this.map.set(SS, tS = new Map), tS.set(HS, gS)
      }
      getBuffer(SS, HS) {
        let gS = this.map.get(SS);
        return gS && gS.get(HS)
      }
      set(SS, HS) {
        SS instanceof ZS ? this.setBuffer(SS.context.buffer, SS.index, HS) : SS instanceof QS && this.map.set(SS.tree, HS)
      }
      get(SS) {
        return SS instanceof ZS ? this.getBuffer(SS.context.buffer, SS.index) : SS instanceof QS ? this.map.get(SS.tree) : void 0
      }
      cursorSet(SS, HS) {
        SS.buffer ? this.setBuffer(SS.buffer.buffer, SS.index, HS) : this.map.set(SS.tree, HS)
      }
      cursorGet(SS) {
        return SS.buffer ? this.getBuffer(SS.buffer.buffer, SS.index) : this.map.get(SS.tree)
      }
    }
    class AS {
      constructor(SS, HS, gS, tS) {
        let bS = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          XS = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.from = SS, this.to = HS, this.tree = gS, this.offset = tS, this.open = (bS ? 1 : 0) | (XS ? 2 : 0)
      }
      get openStart() {
        return (1 & this.open) > 0
      }
      get openEnd() {
        return (2 & this.open) > 0
      }
      static addTree(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          tS = [new AS(0, SS.length, SS, 0, !1, gS)];
        for (let bS of HS) bS.to > SS.length && tS.push(bS);
        return tS
      }
      static applyChanges(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
        if (!HS.length) return SS;
        let tS = [],
          bS = 1,
          XS = SS.length ? SS[0] : null;
        for (let xS = 0, NS = 0, qS = 0;; xS++) {
          let uS = xS < HS.length ? HS[xS] : null,
            IS = uS ? uS.fromA : 1e9;
          if (IS - NS >= gS)
            for (; XS && XS.from < IS;) {
              let HS = XS;
              if (NS >= HS.from || IS <= HS.to || qS) {
                let SS = Math.max(HS.from, NS) - qS,
                  gS = Math.min(HS.to, IS) - qS;
                HS = SS >= gS ? null : new AS(SS, gS, HS.tree, HS.offset + qS, xS > 0, !!uS)
              }
              if (HS && tS.push(HS), XS.to > IS) break;
              XS = bS < SS.length ? SS[bS++] : null
            }
          if (!uS) break;
          NS = uS.toA, qS = uS.toA - uS.toB
        }
        return tS
      }
    }
    class yS {
      startParse(SS, HS, gS) {
        return "string" == typeof SS && (SS = new VS(SS)), gS = gS ? gS.length ? gS.map((SS => new XS(SS.from, SS.to))) : [new XS(0, 0)] : [new XS(0, SS.length)], this.createParse(SS, HS || [], gS)
      }
      parse(SS, HS, gS) {
        let tS = this.startParse(SS, HS, gS);
        for (;;) {
          let SS = tS.advance();
          if (SS) return SS
        }
      }
    }
    class VS {
      constructor(SS) {
        this.string = SS
      }
      get length() {
        return this.string.length
      }
      chunk(SS) {
        return this.string.slice(SS)
      }
      get lineChunks() {
        return !1
      }
      read(SS, HS) {
        return this.string.slice(SS, HS)
      }
    }
    new xS({
      perNode: !0
    })
  },
  41345: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => kS,
      f: () => qS,
      i: () => fS,
      j: () => vS
    });
    var tS = gS(41336);
    let bS = 0;
    class XS {
      constructor(SS, HS, gS, tS) {
        this.name = SS, this.set = HS, this.base = gS, this.modified = tS, this.id = bS++
      }
      toString() {
        let {
          name: SS
        } = this;
        for (let HS of this.modified) HS.name && (SS = `${HS.name}(${SS})`);
        return SS
      }
      static define(SS, HS) {
        let gS = "string" == typeof SS ? SS : "?";
        if (SS instanceof XS && (HS = SS), null === HS || void 0 === HS ? void 0 : HS.base) throw new Error("Can not derive from a modified tag");
        let tS = new XS(gS, [], null, []);
        if (tS.set.push(tS), HS)
          for (let bS of HS.set) tS.set.push(bS);
        return tS
      }
      static defineModifier(SS) {
        let HS = new NS(SS);
        return SS => SS.modified.indexOf(HS) > -1 ? SS : NS.get(SS.base || SS, SS.modified.concat(HS).sort(((SS, HS) => SS.id - HS.id)))
      }
    }
    let xS = 0;
    class NS {
      constructor(SS) {
        this.name = SS, this.instances = [], this.id = xS++
      }
      static get(SS, HS) {
        if (!HS.length) return SS;
        let gS = HS[0].instances.find((gS => {
          return gS.base == SS && (tS = HS, bS = gS.modified, tS.length == bS.length && tS.every(((SS, HS) => SS == bS[HS])));
          var tS, bS
        }));
        if (gS) return gS;
        let tS = [],
          bS = new XS(SS.name, tS, SS, HS);
        for (let XS of HS) XS.instances.push(bS);
        let xS = function(SS) {
          let HS = [
            []
          ];
          for (let gS = 0; gS < SS.length; gS++)
            for (let tS = 0, bS = HS.length; tS < bS; tS++) HS.push(HS[tS].concat(SS[gS]));
          return HS.sort(((SS, HS) => HS.length - SS.length))
        }(HS);
        for (let XS of SS.set)
          if (!XS.modified.length)
            for (let SS of xS) tS.push(NS.get(XS, SS));
        return bS
      }
    }

    function qS(SS) {
      let HS = Object.create(null);
      for (let gS in SS) {
        let tS = SS[gS];
        Array.isArray(tS) || (tS = [tS]);
        for (let SS of gS.split(" "))
          if (SS) {
            let gS = [],
              bS = 2,
              XS = SS;
            for (let HS = 0;;) {
              if ("..." == XS && HS > 0 && HS + 3 == SS.length) {
                bS = 1;
                break
              }
              let tS = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(XS);
              if (!tS) throw new RangeError("Invalid path: " + SS);
              if (gS.push("*" == tS[0] ? "" : '"' == tS[0][0] ? JSON.parse(tS[0]) : tS[0]), HS += tS[0].length, HS == SS.length) break;
              let xS = SS[HS++];
              if (HS == SS.length && "!" == xS) {
                bS = 0;
                break
              }
              if ("/" != xS) throw new RangeError("Invalid path: " + SS);
              XS = SS.slice(HS)
            }
            let xS = gS.length - 1,
              NS = gS[xS];
            if (!NS) throw new RangeError("Invalid path: " + SS);
            let qS = new IS(tS, bS, xS > 0 ? gS.slice(0, xS) : null);
            HS[NS] = qS.sort(HS[NS])
          }
      }
      return uS.add(HS)
    }
    const uS = new tS.i({
      combine(SS, HS) {
        let gS, tS, bS;
        for (; SS || HS;) {
          if (!SS || HS && SS.depth >= HS.depth ? (bS = HS, HS = HS.next) : (bS = SS, SS = SS.next), gS && gS.mode == bS.mode && !bS.context && !gS.context) continue;
          let XS = new IS(bS.tags, bS.mode, bS.context);
          gS ? gS.next = XS : tS = XS, gS = XS
        }
        return tS
      }
    });
    class IS {
      constructor(SS, HS, gS, tS) {
        this.tags = SS, this.mode = HS, this.context = gS, this.next = tS
      }
      get opaque() {
        return 0 == this.mode
      }
      get inherit() {
        return 1 == this.mode
      }
      sort(SS) {
        return !SS || SS.depth < this.depth ? (this.next = SS, this) : (SS.next = this.sort(SS.next), SS)
      }
      get depth() {
        return this.context ? this.context.length : 0
      }
    }

    function fS(SS, HS) {
      let gS = Object.create(null);
      for (let XS of SS)
        if (Array.isArray(XS.tag))
          for (let SS of XS.tag) gS[SS.id] = XS.class;
        else gS[XS.tag.id] = XS.class;
      let {
        scope: tS,
        all: bS = null
      } = HS || {};
      return {
        style: SS => {
          let HS = bS;
          for (let tS of SS)
            for (let SS of tS.set) {
              let tS = gS[SS.id];
              if (tS) {
                HS = HS ? HS + " " + tS : tS;
                break
              }
            }
          return HS
        },
        scope: tS
      }
    }

    function kS(SS, HS, gS) {
      let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : SS.length,
        XS = new aS(tS, Array.isArray(HS) ? HS : [HS], gS);
      XS.highlightRange(SS.cursor(), tS, bS, "", XS.highlighters), XS.flush(bS)
    }
    IS.empty = new IS([], 2, null);
    class aS {
      constructor(SS, HS, gS) {
        this.at = SS, this.highlighters = HS, this.span = gS, this.class = ""
      }
      startSpan(SS, HS) {
        HS != this.class && (this.flush(SS), SS > this.at && (this.at = SS), this.class = HS)
      }
      flush(SS) {
        SS > this.at && this.class && this.span(this.at, SS, this.class)
      }
      highlightRange(SS, HS, gS, bS, XS) {
        let {
          type: xS,
          from: NS,
          to: qS
        } = SS;
        if (NS >= gS || qS <= HS) return;
        xS.isTop && (XS = this.highlighters.filter((SS => !SS.scope || SS.scope(xS))));
        let fS = bS,
          kS = function(SS) {
            let HS = SS.type.prop(uS);
            for (; HS && HS.context && !SS.matchContext(HS.context);) HS = HS.next;
            return HS || null
          }(SS) || IS.empty,
          aS = function(SS, HS) {
            let gS = null;
            for (let tS of SS) {
              let SS = tS.style(HS);
              SS && (gS = gS ? gS + " " + SS : SS)
            }
            return gS
          }(XS, kS.tags);
        if (aS && (fS && (fS += " "), fS += aS, 1 == kS.mode && (bS += (bS ? " " : "") + aS)), this.startSpan(Math.max(HS, NS), fS), kS.opaque) return;
        let KS = SS.tree && SS.tree.prop(tS.i.mounted);
        if (KS && KS.overlay) {
          let tS = SS.node.enter(KS.overlay[0].from + NS, 1),
            xS = this.highlighters.filter((SS => !SS.scope || SS.scope(KS.tree.type))),
            uS = SS.firstChild();
          for (let IS = 0, kS = NS;; IS++) {
            let aS = IS < KS.overlay.length ? KS.overlay[IS] : null,
              jS = aS ? aS.from + NS : qS,
              GS = Math.max(HS, kS),
              CS = Math.min(gS, jS);
            if (GS < CS && uS)
              for (; SS.from < CS && (this.highlightRange(SS, GS, CS, bS, XS), this.startSpan(Math.min(CS, SS.to), fS), !(SS.to >= jS) && SS.nextSibling()););
            if (!aS || jS > gS) break;
            kS = aS.to + NS, kS > HS && (this.highlightRange(tS.cursor(), Math.max(HS, aS.from + NS), Math.min(gS, kS), "", xS), this.startSpan(Math.min(gS, kS), fS))
          }
          uS && SS.parent()
        } else if (SS.firstChild()) {
          KS && (bS = "");
          do {
            if (!(SS.to <= HS)) {
              if (SS.from >= gS) break;
              this.highlightRange(SS, HS, gS, bS, XS), this.startSpan(Math.min(gS, SS.to), fS)
            }
          } while (SS.nextSibling());
          SS.parent()
        }
      }
    }
    const KS = XS.define,
      jS = KS(),
      GS = KS(),
      CS = KS(GS),
      nS = KS(GS),
      PS = KS(),
      QS = KS(PS),
      DS = KS(PS),
      wS = KS(),
      hS = KS(wS),
      ZS = KS(),
      JS = KS(),
      OS = KS(),
      dS = KS(OS),
      cS = KS(),
      vS = {
        comment: jS,
        lineComment: KS(jS),
        blockComment: KS(jS),
        docComment: KS(jS),
        name: GS,
        variableName: KS(GS),
        typeName: CS,
        tagName: KS(CS),
        propertyName: nS,
        attributeName: KS(nS),
        className: KS(GS),
        labelName: KS(GS),
        namespace: KS(GS),
        macroName: KS(GS),
        literal: PS,
        string: QS,
        docString: KS(QS),
        character: KS(QS),
        attributeValue: KS(QS),
        number: DS,
        integer: KS(DS),
        float: KS(DS),
        bool: KS(PS),
        regexp: KS(PS),
        escape: KS(PS),
        color: KS(PS),
        url: KS(PS),
        keyword: ZS,
        self: KS(ZS),
        null: KS(ZS),
        atom: KS(ZS),
        unit: KS(ZS),
        modifier: KS(ZS),
        operatorKeyword: KS(ZS),
        controlKeyword: KS(ZS),
        definitionKeyword: KS(ZS),
        moduleKeyword: KS(ZS),
        operator: JS,
        derefOperator: KS(JS),
        arithmeticOperator: KS(JS),
        logicOperator: KS(JS),
        bitwiseOperator: KS(JS),
        compareOperator: KS(JS),
        updateOperator: KS(JS),
        definitionOperator: KS(JS),
        typeOperator: KS(JS),
        controlOperator: KS(JS),
        punctuation: OS,
        separator: KS(OS),
        bracket: dS,
        angleBracket: KS(dS),
        squareBracket: KS(dS),
        paren: KS(dS),
        brace: KS(dS),
        content: wS,
        heading: hS,
        heading1: KS(hS),
        heading2: KS(hS),
        heading3: KS(hS),
        heading4: KS(hS),
        heading5: KS(hS),
        heading6: KS(hS),
        contentSeparator: KS(wS),
        list: KS(wS),
        quote: KS(wS),
        emphasis: KS(wS),
        strong: KS(wS),
        link: KS(wS),
        monospace: KS(wS),
        strikethrough: KS(wS),
        inserted: KS(),
        deleted: KS(),
        changed: KS(),
        invalid: KS(),
        meta: cS,
        documentMeta: KS(cS),
        annotation: KS(cS),
        processingInstruction: KS(cS),
        definition: XS.defineModifier("definition"),
        constant: XS.defineModifier("constant"),
        function: XS.defineModifier("function"),
        standard: XS.defineModifier("standard"),
        local: XS.defineModifier("local"),
        special: XS.defineModifier("special")
      };
    for (let ES in vS) {
      let SS = vS[ES];
      SS instanceof XS && (SS.name = ES)
    }
    fS([{
      tag: vS.link,
      class: "tok-link"
    }, {
      tag: vS.heading,
      class: "tok-heading"
    }, {
      tag: vS.emphasis,
      class: "tok-emphasis"
    }, {
      tag: vS.strong,
      class: "tok-strong"
    }, {
      tag: vS.keyword,
      class: "tok-keyword"
    }, {
      tag: vS.atom,
      class: "tok-atom"
    }, {
      tag: vS.bool,
      class: "tok-bool"
    }, {
      tag: vS.url,
      class: "tok-url"
    }, {
      tag: vS.labelName,
      class: "tok-labelName"
    }, {
      tag: vS.inserted,
      class: "tok-inserted"
    }, {
      tag: vS.deleted,
      class: "tok-deleted"
    }, {
      tag: vS.literal,
      class: "tok-literal"
    }, {
      tag: vS.string,
      class: "tok-string"
    }, {
      tag: vS.number,
      class: "tok-number"
    }, {
      tag: [vS.regexp, vS.escape, vS.special(vS.string)],
      class: "tok-string2"
    }, {
      tag: vS.variableName,
      class: "tok-variableName"
    }, {
      tag: vS.local(vS.variableName),
      class: "tok-variableName tok-local"
    }, {
      tag: vS.definition(vS.variableName),
      class: "tok-variableName tok-definition"
    }, {
      tag: vS.special(vS.variableName),
      class: "tok-variableName2"
    }, {
      tag: vS.definition(vS.propertyName),
      class: "tok-propertyName tok-definition"
    }, {
      tag: vS.typeName,
      class: "tok-typeName"
    }, {
      tag: vS.namespace,
      class: "tok-namespace"
    }, {
      tag: vS.className,
      class: "tok-className"
    }, {
      tag: vS.macroName,
      class: "tok-macroName"
    }, {
      tag: vS.propertyName,
      class: "tok-propertyName"
    }, {
      tag: vS.operator,
      class: "tok-operator"
    }, {
      tag: vS.comment,
      class: "tok-comment"
    }, {
      tag: vS.meta,
      class: "tok-meta"
    }, {
      tag: vS.invalid,
      class: "tok-invalid"
    }, {
      tag: vS.punctuation,
      class: "tok-punctuation"
    }])
  },
  41351: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => NS.e,
      g: () => xS.s,
      i: () => xS.G,
      m: () => xS.H,
      o: () => NS.i,
      s: () => hg,
      v: () => NS.K,
      x: () => NS.cb
    });
    var tS = gS(1458),
      bS = gS(1452),
      XS = gS(64),
      xS = gS(41315),
      NS = gS(41322),
      qS = gS(41334),
      uS = gS(41336);

    function IS(SS, HS) {
      return gS => {
        let {
          state: tS,
          dispatch: bS
        } = gS;
        if (tS.readOnly) return !1;
        let XS = SS(HS, tS);
        return !!XS && (bS(tS.update(XS)), !0)
      }
    }
    const fS = IS(CS, 0),
      kS = IS(GS, 0),
      aS = IS(((SS, HS) => GS(SS, HS, function(SS) {
        let HS = [];
        for (let gS of SS.selection.HG) {
          let tS = SS.doc.lineAt(gS.from),
            bS = gS.to <= tS.to ? tS : SS.doc.lineAt(gS.to);
          bS.from > tS.from && bS.from == gS.to && (bS = gS.to == tS.to + 1 ? tS : SS.doc.lineAt(gS.to - 1));
          let XS = HS.length - 1;
          XS >= 0 && HS[XS].to > tS.from ? HS[XS].to = bS.to : HS.push({
            from: tS.from + /^\s*/.exec(tS.text)[0].length,
            to: bS.to
          })
        }
        return HS
      }(HS))), 0);

    function KS(SS, HS) {
      let gS = SS.languageDataAt("commentTokens", HS, 1);
      return gS.length ? gS[0] : {}
    }
    const jS = 50;

    function GS(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : HS.selection.HG,
        tS = gS.map((SS => KS(HS, SS.from).block));
      if (!tS.every((SS => SS))) return null;
      let bS = gS.map(((SS, gS) => function(SS, HS, gS, tS) {
        let bS, XS, {
            open: xS,
            close: NS
          } = HS,
          qS = SS.sliceDoc(gS - jS, gS),
          uS = SS.sliceDoc(tS, tS + jS),
          IS = /\s*$/.exec(qS)[0].length,
          fS = /^\s*/.exec(uS)[0].length,
          kS = qS.length - IS;
        if (qS.slice(kS - xS.length, kS) == xS && uS.slice(fS, fS + NS.length) == NS) return {
          open: {
            pos: gS - IS,
            margin: IS && 1
          },
          close: {
            pos: tS + fS,
            margin: fS && 1
          }
        };
        tS - gS <= 2 * jS ? bS = XS = SS.sliceDoc(gS, tS) : (bS = SS.sliceDoc(gS, gS + jS), XS = SS.sliceDoc(tS - jS, tS));
        let aS = /^\s*/.exec(bS)[0].length,
          KS = /\s*$/.exec(XS)[0].length,
          GS = XS.length - KS - NS.length;
        return bS.slice(aS, aS + xS.length) == xS && XS.slice(GS, GS + NS.length) == NS ? {
          open: {
            pos: gS + aS + xS.length,
            margin: /\s/.test(bS.charAt(aS + xS.length)) ? 1 : 0
          },
          close: {
            pos: tS - KS - NS.length,
            margin: /\s/.test(XS.charAt(GS - 1)) ? 1 : 0
          }
        } : null
      }(HS, tS[gS], SS.from, SS.to)));
      if (2 != SS && !bS.every((SS => SS))) return {
        changes: HS.changes(gS.map(((SS, HS) => bS[HS] ? [] : [{
          from: SS.from,
          insert: tS[HS].open + " "
        }, {
          from: SS.to,
          insert: " " + tS[HS].close
        }])))
      };
      if (1 != SS && bS.some((SS => SS))) {
        let SS = [];
        for (let HS, gS = 0; gS < bS.length; gS++)
          if (HS = bS[gS]) {
            let bS = tS[gS],
              {
                open: XS,
                close: xS
              } = HS;
            SS.push({
              from: XS.pos - bS.open.length,
              to: XS.pos + XS.margin
            }, {
              from: xS.pos - xS.margin,
              to: xS.pos + bS.close.length
            })
          } return {
          changes: SS
        }
      }
      return null
    }

    function CS(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : HS.selection.HG,
        tS = [],
        bS = -1;
      SS: for (let {
          from: XS,
          to: xS
        }
        of gS) {
        let SS, gS = tS.length,
          NS = 1e9;
        for (let qS = XS; qS <= xS;) {
          let gS = HS.doc.lineAt(qS);
          if (void 0 == SS && (SS = KS(HS, gS.from).line, !SS)) continue SS;
          if (gS.from > bS && (XS == xS || xS > gS.from)) {
            bS = gS.from;
            let HS = /^\s*/.exec(gS.text)[0].length,
              XS = HS == gS.length,
              xS = gS.text.slice(HS, HS + SS.length) == SS ? HS : -1;
            HS < gS.text.length && HS < NS && (NS = HS), tS.push({
              line: gS,
              comment: xS,
              token: SS,
              indent: HS,
              empty: XS,
              single: !1
            })
          }
          qS = gS.to + 1
        }
        if (NS < 1e9)
          for (let HS = gS; HS < tS.length; HS++) tS[HS].indent < tS[HS].line.text.length && (tS[HS].indent = NS);
        tS.length == gS + 1 && (tS[gS].single = !0)
      }
      if (2 != SS && tS.some((SS => SS.comment < 0 && (!SS.empty || SS.single)))) {
        let SS = [];
        for (let {
            line: HS,
            token: bS,
            indent: XS,
            empty: xS,
            single: NS
          }
          of tS) !NS && xS || SS.push({
          from: HS.from + XS,
          insert: bS + " "
        });
        let gS = HS.changes(SS);
        return {
          changes: gS,
          selection: HS.selection.map(gS, 1)
        }
      }
      if (1 != SS && tS.some((SS => SS.comment >= 0))) {
        let SS = [];
        for (let {
            line: HS,
            comment: gS,
            token: bS
          }
          of tS)
          if (gS >= 0) {
            let tS = HS.from + gS,
              XS = tS + bS.length;
            " " == HS.text[XS - HS.from] && XS++, SS.push({
              from: tS,
              to: XS
            })
          } return {
          changes: SS
        }
      }
      return null
    }
    const nS = xS.d.define(),
      PS = xS.d.define(),
      QS = xS.n.define(),
      DS = xS.n.define({
        combine: SS => (0, xS.W)(SS, {
          minDepth: 100,
          newGroupDelay: 500,
          joinToEvent: (SS, HS) => HS
        }, {
          minDepth: Math.max,
          newGroupDelay: Math.min,
          joinToEvent: (SS, HS) => (gS, tS) => SS(gS, tS) || HS(gS, tS)
        })
      }),
      wS = xS.H.define({
        create: () => zS.empty,
        update(SS, HS) {
          let gS = HS.state.facet(DS),
            tS = HS.annotation(nS);
          if (tS) {
            let bS = cS.fromTransaction(HS, tS.selection),
              XS = tS.side,
              xS = 0 == XS ? SS.undone : SS.done;
            return xS = bS ? vS(xS, xS.length, gS.minDepth, bS) : AS(xS, HS.startState.selection), new zS(0 == XS ? tS.rest : xS, 0 == XS ? xS : tS.rest)
          }
          let bS = HS.annotation(PS);
          if ("full" != bS && "before" != bS || (SS = SS.isolate()), !1 === HS.annotation(xS.N.addToHistory)) return HS.changes.empty ? SS : SS.addMapping(HS.changes.desc);
          let XS = cS.fromTransaction(HS),
            NS = HS.annotation(xS.N.time),
            qS = HS.annotation(xS.N.userEvent);
          return XS ? SS = SS.addChanges(XS, NS, qS, gS, HS) : HS.selection && (SS = SS.addSelection(HS.startState.selection, NS, qS, gS.newGroupDelay)), "full" != bS && "after" != bS || (SS = SS.isolate()), SS
        },
        toJSON: SS => ({
          done: SS.done.map((SS => SS.toJSON())),
          undone: SS.undone.map((SS => SS.toJSON()))
        }),
        fromJSON: SS => new zS(SS.done.map(cS.fromJSON), SS.undone.map(cS.fromJSON))
      });

    function hS(SS, HS) {
      return function(gS) {
        let {
          state: tS,
          dispatch: bS
        } = gS;
        if (!HS && tS.readOnly) return !1;
        let XS = tS.field(wS, !1);
        if (!XS) return !1;
        let xS = XS.pop(SS, tS, HS);
        return !!xS && (bS(xS), !0)
      }
    }
    const ZS = hS(0, !1),
      JS = hS(1, !1),
      OS = hS(0, !0),
      dS = hS(1, !0);
    class cS {
      constructor(SS, HS, gS, tS, bS) {
        this.changes = SS, this.effects = HS, this.mapped = gS, this.startSelection = tS, this.selectionsAfter = bS
      }
      setSelAfter(SS) {
        return new cS(this.changes, this.effects, this.mapped, this.startSelection, SS)
      }
      toJSON() {
        var SS, HS, gS;
        return {
          changes: null === (SS = this.changes) || void 0 === SS ? void 0 : SS.toJSON(),
          mapped: null === (HS = this.mapped) || void 0 === HS ? void 0 : HS.toJSON(),
          startSelection: null === (gS = this.startSelection) || void 0 === gS ? void 0 : gS.toJSON(),
          selectionsAfter: this.selectionsAfter.map((SS => SS.toJSON()))
        }
      }
      static fromJSON(SS) {
        return new cS(SS.changes && xS.ChangeSet.fromJSON(SS.changes), [], SS.mapped && xS.f.fromJSON(SS.mapped), SS.startSelection && xS.i.fromJSON(SS.startSelection), SS.selectionsAfter.map(xS.i.fromJSON))
      }
      static fromTransaction(SS, HS) {
        let gS = LS;
        for (let tS of SS.startState.facet(QS)) {
          let HS = tS(SS);
          HS.length && (gS = gS.concat(HS))
        }
        return !gS.length && SS.changes.empty ? null : new cS(SS.changes.invert(SS.startState.doc), gS, void 0, HS || SS.startState.selection, LS)
      }
      static selection(SS) {
        return new cS(void 0, LS, void 0, void 0, SS)
      }
    }

    function vS(SS, HS, gS, tS) {
      let bS = HS + 1 > gS + 20 ? HS - gS - 1 : 0,
        XS = SS.slice(bS, HS);
      return XS.push(tS), XS
    }

    function ES(SS, HS) {
      return SS.length ? HS.length ? SS.concat(HS) : SS : HS
    }
    const LS = [],
      YS = 200;

    function AS(SS, HS) {
      if (SS.length) {
        let gS = SS[SS.length - 1],
          tS = gS.selectionsAfter.slice(Math.max(0, gS.selectionsAfter.length - YS));
        return tS.length && tS[tS.length - 1].eq(HS) ? SS : (tS.push(HS), vS(SS, SS.length - 1, 1e9, gS.setSelAfter(tS)))
      }
      return [cS.selection([HS])]
    }

    function yS(SS) {
      let HS = SS[SS.length - 1],
        gS = SS.slice();
      return gS[SS.length - 1] = HS.setSelAfter(HS.selectionsAfter.slice(0, HS.selectionsAfter.length - 1)), gS
    }

    function VS(SS, HS) {
      if (!SS.length) return SS;
      let gS = SS.length,
        tS = LS;
      for (; gS;) {
        let bS = iS(SS[gS - 1], HS, tS);
        if (bS.changes && !bS.changes.empty || bS.effects.length) {
          let HS = SS.slice(0, gS);
          return HS[gS - 1] = bS, HS
        }
        HS = bS.mapped, gS--, tS = bS.selectionsAfter
      }
      return tS.length ? [cS.selection(tS)] : LS
    }

    function iS(SS, HS, gS) {
      let tS = ES(SS.selectionsAfter.length ? SS.selectionsAfter.map((SS => SS.map(HS))) : LS, gS);
      if (!SS.changes) return cS.selection(tS);
      let bS = SS.changes.map(HS),
        XS = HS.mapDesc(SS.changes, !0),
        NS = SS.mapped ? SS.mapped.composeDesc(XS) : XS;
      return new cS(bS, xS.G.mapEffects(SS.effects, HS), NS, SS.startSelection.map(XS), tS)
    }
    const WS = /^(input\.type|delete)($|\.)/;
    class zS {
      constructor(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        this.done = SS, this.undone = HS, this.prevTime = gS, this.prevUserEvent = tS
      }
      isolate() {
        return this.prevTime ? new zS(this.done, this.undone) : this
      }
      addChanges(SS, HS, gS, tS, bS) {
        let XS = this.done,
          NS = XS[XS.length - 1];
        return XS = NS && NS.changes && !NS.changes.empty && SS.changes && (!gS || WS.test(gS)) && (!NS.selectionsAfter.length && HS - this.prevTime < tS.newGroupDelay && tS.joinToEvent(bS, function(SS, HS) {
          let gS = [],
            tS = !1;
          return SS.iterChangedRanges(((SS, HS) => gS.push(SS, HS))), HS.iterChangedRanges(((SS, HS, bS, XS) => {
            for (let xS = 0; xS < gS.length;) {
              let SS = gS[xS++],
                HS = gS[xS++];
              XS >= SS && bS <= HS && (tS = !0)
            }
          })), tS
        }(NS.changes, SS.changes)) || "input.type.compose" == gS) ? vS(XS, XS.length - 1, tS.minDepth, new cS(SS.changes.compose(NS.changes), ES(xS.G.mapEffects(SS.effects, NS.changes), NS.effects), NS.mapped, NS.startSelection, LS)) : vS(XS, XS.length, tS.minDepth, SS), new zS(XS, LS, HS, gS)
      }
      addSelection(SS, HS, gS, tS) {
        let bS = this.done.length ? this.done[this.done.length - 1].selectionsAfter : LS;
        return bS.length > 0 && HS - this.prevTime < tS && gS == this.prevUserEvent && gS && /^select($|\.)/.test(gS) && (XS = bS[bS.length - 1], xS = SS, XS.HG.length == xS.HG.length && 0 === XS.HG.filter(((SS, HS) => SS.empty != xS.HG[HS].empty)).length) ? this : new zS(AS(this.done, SS), this.undone, HS, gS);
        var XS, xS
      }
      addMapping(SS) {
        return new zS(VS(this.done, SS), VS(this.undone, SS), this.prevTime, this.prevUserEvent)
      }
      pop(SS, HS, gS) {
        let tS = 0 == SS ? this.done : this.undone;
        if (0 == tS.length) return null;
        let bS = tS[tS.length - 1],
          XS = bS.selectionsAfter[0] || (bS.startSelection ? bS.startSelection.map(bS.changes.invertedDesc, 1) : HS.selection);
        if (gS && bS.selectionsAfter.length) return HS.update({
          selection: bS.selectionsAfter[bS.selectionsAfter.length - 1],
          annotations: nS.of({
            side: SS,
            rest: yS(tS),
            selection: XS
          }),
          userEvent: 0 == SS ? "select.undo" : "select.redo",
          scrollIntoView: !0
        });
        if (bS.changes) {
          let gS = 1 == tS.length ? LS : tS.slice(0, tS.length - 1);
          return bS.mapped && (gS = VS(gS, bS.mapped)), HS.update({
            changes: bS.changes,
            selection: bS.startSelection,
            effects: bS.effects,
            annotations: nS.of({
              side: SS,
              rest: gS,
              selection: XS
            }),
            filter: !1,
            userEvent: 0 == SS ? "undo" : "redo",
            scrollIntoView: !0
          })
        }
        return null
      }
    }
    zS.empty = new zS(LS, LS);
    const US = [{
      key: "Mod-z",
      run: ZS,
      preventDefault: !0
    }, {
      key: "Mod-y",
      mac: "Mod-Shift-z",
      run: JS,
      preventDefault: !0
    }, {
      linux: "Ctrl-Shift-z",
      run: JS,
      preventDefault: !0
    }, {
      key: "Mod-u",
      run: OS,
      preventDefault: !0
    }, {
      key: "Alt-u",
      mac: "Mod-Shift-u",
      run: dS,
      preventDefault: !0
    }];

    function pS(SS, HS) {
      return xS.i.create(SS.HG.map(HS), SS.mainIndex)
    }

    function sS(SS, HS) {
      return SS.update({
        selection: HS,
        scrollIntoView: !0,
        userEvent: "select"
      })
    }

    function BS(SS, HS) {
      let {
        state: gS,
        dispatch: tS
      } = SS, bS = pS(gS.selection, HS);
      return !bS.eq(gS.selection, !0) && (tS(sS(gS, bS)), !0)
    }

    function MS(SS, HS) {
      return xS.i.cursor(HS ? SS.to : SS.from)
    }

    function FS(SS, HS) {
      return BS(SS, (gS => gS.empty ? SS.moveByChar(gS, HS) : MS(gS, HS)))
    }

    function RS(SS) {
      return SS.textDirectionAt(SS.state.selection.main.head) == NS.d.LTR
    }
    const TS = SS => FS(SS, !RS(SS)),
      oS = SS => FS(SS, RS(SS));

    function lS(SS, HS) {
      return BS(SS, (gS => gS.empty ? SS.moveByGroup(gS, HS) : MS(gS, HS)))
    }
    "undefined" != typeof Intl && Intl.Segmenter;

    function mS(SS, HS, gS) {
      if (HS.type.prop(gS)) return !0;
      let tS = HS.to - HS.from;
      return tS && (tS > 2 || /[^\s,.;:]/.test(SS.sliceDoc(HS.from, HS.to))) || HS.firstChild
    }

    function eS(SS, HS, gS) {
      let tS, bS, XS = (0, qS.ob)(SS).resolveInner(HS.head),
        NS = gS ? uS.i.closedBy : uS.i.openedBy;
      for (let xS = HS.head;;) {
        let HS = gS ? XS.childAfter(xS) : XS.childBefore(xS);
        if (!HS) break;
        mS(SS, HS, NS) ? XS = HS : xS = gS ? HS.to : HS.from
      }
      return bS = XS.type.prop(NS) && (tS = gS ? (0, qS.ab)(SS, XS.from, 1) : (0, qS.ab)(SS, XS.to, -1)) && tS.matched ? gS ? tS.end.to : tS.end.from : gS ? XS.to : XS.from, xS.i.cursor(bS, gS ? -1 : 1)
    }

    function rS(SS, HS) {
      return BS(SS, (gS => {
        if (!gS.empty) return MS(gS, HS);
        let tS = SS.moveVertically(gS, HS);
        return tS.head != gS.head ? tS : SS.moveToLineBoundary(gS, HS)
      }))
    }
    const SH = SS => rS(SS, !1),
      HH = SS => rS(SS, !0);

    function gH(SS) {
      let HS, gS = SS.scrollDOM.clientHeight < SS.scrollDOM.scrollHeight - 2,
        tS = 0,
        bS = 0;
      if (gS) {
        for (let HS of SS.state.facet(NS.e.scrollMargins)) {
          let gS = HS(SS);
          (null === gS || void 0 === gS ? void 0 : gS.top) && (tS = Math.max(null === gS || void 0 === gS ? void 0 : gS.top, tS)), (null === gS || void 0 === gS ? void 0 : gS.bottom) && (bS = Math.max(null === gS || void 0 === gS ? void 0 : gS.bottom, bS))
        }
        HS = SS.scrollDOM.clientHeight - tS - bS
      } else HS = (SS.dom.ownerDocument.defaultView || window).innerHeight;
      return {
        marginTop: tS,
        marginBottom: bS,
        selfScroll: gS,
        height: Math.max(SS.defaultLineHeight, HS - 5)
      }
    }

    function tH(SS, HS) {
      let gS, tS = gH(SS),
        {
          state: bS
        } = SS,
        XS = pS(bS.selection, (gS => gS.empty ? SS.moveVertically(gS, HS, tS.height) : MS(gS, HS)));
      if (XS.eq(bS.selection)) return !1;
      if (tS.selfScroll) {
        let HS = SS.coordsAtPos(bS.selection.main.head),
          xS = SS.scrollDOM.getBoundingClientRect(),
          qS = xS.top + tS.marginTop,
          uS = xS.bottom - tS.marginBottom;
        HS && HS.top > qS && HS.bottom < uS && (gS = NS.e.scrollIntoView(XS.main.head, {
          y: "start",
          yMargin: HS.top - qS
        }))
      }
      return SS.dispatch(sS(bS, XS), {
        effects: gS
      }), !0
    }
    const bH = SS => tH(SS, !1),
      XH = SS => tH(SS, !0);

    function xH(SS, HS, gS) {
      let tS = SS.lineBlockAt(HS.head),
        bS = SS.moveToLineBoundary(HS, gS);
      if (bS.head == HS.head && bS.head != (gS ? tS.to : tS.from) && (bS = SS.moveToLineBoundary(HS, gS, !1)), !gS && bS.head == tS.from && tS.length) {
        let gS = /^\s*/.exec(SS.state.sliceDoc(tS.from, Math.min(tS.from + 100, tS.to)))[0].length;
        gS && HS.head != tS.from + gS && (bS = xS.i.cursor(tS.from + gS))
      }
      return bS
    }

    function NH(SS, HS, gS) {
      let tS = !1,
        bS = pS(SS.selection, (HS => {
          let bS = (0, qS.ab)(SS, HS.head, -1) || (0, qS.ab)(SS, HS.head, 1) || HS.head > 0 && (0, qS.ab)(SS, HS.head - 1, 1) || HS.head < SS.doc.length && (0, qS.ab)(SS, HS.head + 1, -1);
          if (!bS || !bS.end) return HS;
          tS = !0;
          let XS = bS.start.from == HS.head ? bS.end.to : bS.end.from;
          return gS ? xS.i.range(HS.anchor, XS) : xS.i.cursor(XS)
        }));
      return !!tS && (HS(sS(SS, bS)), !0)
    }

    function qH(SS, HS) {
      let gS = pS(SS.state.selection, (SS => {
        let gS = HS(SS);
        return xS.i.range(SS.anchor, gS.head, gS.goalColumn, gS.bidiLevel || void 0, gS.assoc)
      }));
      return !gS.eq(SS.state.selection) && (SS.dispatch(sS(SS.state, gS)), !0)
    }

    function uH(SS, HS) {
      return qH(SS, (gS => SS.moveByChar(gS, HS)))
    }
    const IH = SS => uH(SS, !RS(SS)),
      fH = SS => uH(SS, RS(SS));

    function kH(SS, HS) {
      return qH(SS, (gS => SS.moveByGroup(gS, HS)))
    }

    function aH(SS, HS) {
      return qH(SS, (gS => SS.moveVertically(gS, HS)))
    }
    const KH = SS => aH(SS, !1),
      jH = SS => aH(SS, !0);

    function GH(SS, HS) {
      return qH(SS, (gS => SS.moveVertically(gS, HS, gH(SS).height)))
    }
    const CH = SS => GH(SS, !1),
      nH = SS => GH(SS, !0),
      PH = SS => {
        let {
          state: HS,
          dispatch: gS
        } = SS;
        return gS(sS(HS, {
          anchor: 0
        })), !0
      },
      QH = SS => {
        let {
          state: HS,
          dispatch: gS
        } = SS;
        return gS(sS(HS, {
          anchor: HS.doc.length
        })), !0
      },
      DH = SS => {
        let {
          state: HS,
          dispatch: gS
        } = SS;
        return gS(sS(HS, {
          anchor: HS.selection.main.anchor,
          head: 0
        })), !0
      },
      wH = SS => {
        let {
          state: HS,
          dispatch: gS
        } = SS;
        return gS(sS(HS, {
          anchor: HS.selection.main.anchor,
          head: HS.doc.length
        })), !0
      };

    function hH(SS, HS) {
      let {
        state: gS
      } = SS, tS = gS.selection, bS = gS.selection.HG.slice();
      for (let XS of gS.selection.HG) {
        let tS = gS.doc.lineAt(XS.head);
        if (HS ? tS.to < SS.state.doc.length : tS.from > 0)
          for (let gS = XS;;) {
            let XS = SS.moveVertically(gS, HS);
            if (XS.head < tS.from || XS.head > tS.to) {
              bS.some((SS => SS.head == XS.head)) || bS.push(XS);
              break
            }
            if (XS.head == gS.head) break;
            gS = XS
          }
      }
      return bS.length != tS.HG.length && (SS.dispatch(sS(gS, xS.i.create(bS, bS.length - 1))), !0)
    }

    function ZH(SS, HS) {
      if (SS.state.readOnly) return !1;
      let gS = "delete.selection",
        {
          state: tS
        } = SS,
        bS = tS.changeByRange((tS => {
          let {
            from: bS,
            to: XS
          } = tS;
          if (bS == XS) {
            let xS = HS(tS);
            xS < bS ? (gS = "delete.backward", xS = JH(SS, xS, !1)) : xS > bS && (gS = "delete.forward", xS = JH(SS, xS, !0)), bS = Math.min(bS, xS), XS = Math.max(XS, xS)
          } else bS = JH(SS, bS, !1), XS = JH(SS, XS, !0);
          return bS == XS ? {
            range: tS
          } : {
            changes: {
              from: bS,
              to: XS
            },
            range: xS.i.cursor(bS, bS < tS.head ? -1 : 1)
          }
        }));
      return !bS.changes.empty && (SS.dispatch(tS.update(bS, {
        scrollIntoView: !0,
        userEvent: gS,
        effects: "delete.selection" == gS ? NS.e.announce.of(tS.phrase("Selection deleted")) : void 0
      })), !0)
    }

    function JH(SS, HS, gS) {
      if (SS instanceof NS.e)
        for (let tS of SS.state.facet(NS.e.atomicRanges).map((HS => HS(SS)))) tS.between(HS, HS, ((SS, tS) => {
          SS < HS && tS > HS && (HS = gS ? tS : SS)
        }));
      return HS
    }
    const OH = (SS, HS, gS) => ZH(SS, (tS => {
        let bS, XS, NS = tS.from,
          {
            state: uS
          } = SS,
          IS = uS.doc.lineAt(NS);
        if (gS && !HS && NS > IS.from && NS < IS.from + 200 && !/[^ \t]/.test(bS = IS.text.slice(0, NS - IS.from))) {
          if ("\t" == bS[bS.length - 1]) return NS - 1;
          let SS = (0, xS.Z)(bS, uS.tabSize) % (0, qS.O)(uS) || (0, qS.O)(uS);
          for (let HS = 0; HS < SS && " " == bS[bS.length - 1 - HS]; HS++) NS--;
          XS = NS
        } else XS = (0, xS.$)(IS.text, NS - IS.from, HS, HS) + IS.from, XS == NS && IS.number != (HS ? uS.doc.lines : 1) ? XS += HS ? 1 : -1 : !HS && /[\ufe00-\ufe0f]/.test(IS.text.slice(XS - IS.from, NS - IS.from)) && (XS = (0, xS.$)(IS.text, XS - IS.from, !1, !1) + IS.from);
        return XS
      })),
      dH = SS => OH(SS, !1, !0),
      cH = SS => OH(SS, !0, !1),
      vH = (SS, HS) => ZH(SS, (gS => {
        let tS = gS.head,
          {
            state: bS
          } = SS,
          XS = bS.doc.lineAt(tS),
          NS = bS.charCategorizer(tS);
        for (let SS = null;;) {
          if (tS == (HS ? XS.to : XS.from)) {
            tS == gS.head && XS.number != (HS ? bS.doc.lines : 1) && (tS += HS ? 1 : -1);
            break
          }
          let qS = (0, xS.$)(XS.text, tS - XS.from, HS) + XS.from,
            uS = XS.text.slice(Math.min(tS, qS) - XS.from, Math.max(tS, qS) - XS.from),
            IS = NS(uS);
          if (null != SS && IS != SS) break;
          " " == uS && tS == gS.head || (SS = IS), tS = qS
        }
        return tS
      })),
      EH = SS => vH(SS, !1);

    function LH(SS) {
      let HS = [],
        gS = -1;
      for (let tS of SS.selection.HG) {
        let bS = SS.doc.lineAt(tS.from),
          XS = SS.doc.lineAt(tS.to);
        if (tS.empty || tS.to != XS.from || (XS = SS.doc.lineAt(tS.to - 1)), gS >= bS.number) {
          let SS = HS[HS.length - 1];
          SS.to = XS.to, SS.HG.push(tS)
        } else HS.push({
          from: bS.from,
          to: XS.to,
          HG: [tS]
        });
        gS = XS.number + 1
      }
      return HS
    }

    function YH(SS, HS, gS) {
      if (SS.readOnly) return !1;
      let tS = [],
        bS = [];
      for (let XS of LH(SS)) {
        if (gS ? XS.to == SS.doc.length : 0 == XS.from) continue;
        let HS = SS.doc.lineAt(gS ? XS.to + 1 : XS.from - 1),
          NS = HS.length + 1;
        if (gS) {
          tS.push({
            from: XS.to,
            to: HS.to
          }, {
            from: XS.from,
            insert: HS.text + SS.lineBreak
          });
          for (let HS of XS.HG) bS.push(xS.i.range(Math.min(SS.doc.length, HS.anchor + NS), Math.min(SS.doc.length, HS.head + NS)))
        } else {
          tS.push({
            from: HS.from,
            to: XS.from
          }, {
            from: XS.to,
            insert: SS.lineBreak + HS.text
          });
          for (let SS of XS.HG) bS.push(xS.i.range(SS.anchor - NS, SS.head - NS))
        }
      }
      return !!tS.length && (HS(SS.update({
        changes: tS,
        scrollIntoView: !0,
        selection: xS.i.create(bS, SS.selection.mainIndex),
        userEvent: "move.line"
      })), !0)
    }

    function AH(SS, HS, gS) {
      if (SS.readOnly) return !1;
      let tS = [];
      for (let XS of LH(SS)) gS ? tS.push({
        from: XS.from,
        insert: SS.doc.slice(XS.from, XS.to) + SS.lineBreak
      }) : tS.push({
        from: XS.to,
        insert: SS.lineBreak + SS.doc.slice(XS.from, XS.to)
      });
      let bS = SS.changes(tS);
      return HS(SS.update({
        changes: bS,
        selection: SS.selection.map(bS, gS ? 1 : -1),
        scrollIntoView: !0,
        userEvent: "input.copyline"
      })), !0
    }
    const yH = VH(!1);

    function VH(SS) {
      return HS => {
        let {
          state: gS,
          dispatch: tS
        } = HS;
        if (gS.readOnly) return !1;
        let bS = gS.changeByRange((HS => {
          let {
            from: tS,
            to: bS
          } = HS, XS = gS.doc.lineAt(tS), NS = !SS && tS == bS && function(SS, HS) {
            if (/\(\)|\[\]|\{\}/.test(SS.sliceDoc(HS - 1, HS + 1))) return {
              from: HS,
              to: HS
            };
            let gS, tS = (0, qS.ob)(SS).resolveInner(HS),
              bS = tS.childBefore(HS),
              XS = tS.childAfter(HS);
            return bS && XS && bS.to <= HS && XS.from >= HS && (gS = bS.type.prop(uS.i.closedBy)) && gS.indexOf(XS.name) > -1 && SS.doc.lineAt(bS.to).from == SS.doc.lineAt(XS.from).from && !/\S/.test(SS.sliceDoc(bS.to, XS.from)) ? {
              from: bS.to,
              to: XS.from
            } : null
          }(gS, tS);
          SS && (tS = bS = (bS <= XS.to ? XS : gS.doc.lineAt(bS)).to);
          let IS = new qS.f(gS, {
              simulateBreak: tS,
              simulateDoubleBreak: !!NS
            }),
            fS = (0, qS.R)(IS, tS);
          for (null == fS && (fS = (0, xS.Z)(/^\s*/.exec(gS.doc.lineAt(tS).text)[0], gS.tabSize)); bS < XS.to && /\s/.test(XS.text[bS - XS.from]);) bS++;
          NS ? ({
            from: tS,
            to: bS
          } = NS) : tS > XS.from && tS < XS.from + 100 && !/\S/.test(XS.text.slice(0, tS)) && (tS = XS.from);
          let kS = ["", (0, qS.Z)(gS, fS)];
          return NS && kS.push((0, qS.Z)(gS, IS.lineIndent(XS.from, -1))), {
            changes: {
              from: tS,
              to: bS,
              insert: xS.L.of(kS)
            },
            range: xS.i.cursor(tS + 1 + kS[1].length)
          }
        }));
        return tS(gS.update(bS, {
          scrollIntoView: !0,
          userEvent: "input"
        })), !0
      }
    }

    function iH(SS, HS) {
      let gS = -1;
      return SS.changeByRange((tS => {
        let bS = [];
        for (let xS = tS.from; xS <= tS.to;) {
          let XS = SS.doc.lineAt(xS);
          XS.number > gS && (tS.empty || tS.to > XS.from) && (HS(XS, bS, tS), gS = XS.number), xS = XS.to + 1
        }
        let XS = SS.changes(bS);
        return {
          changes: bS,
          range: xS.i.range(XS.mapPos(tS.anchor, 1), XS.mapPos(tS.head, 1))
        }
      }))
    }
    const WH = SS => {
        let {
          state: HS,
          dispatch: gS
        } = SS;
        return !HS.readOnly && (gS(HS.update(iH(HS, ((SS, gS) => {
          gS.push({
            from: SS.from,
            insert: HS.facet(qS.$)
          })
        })), {
          userEvent: "input.indent"
        })), !0)
      },
      zH = SS => {
        let {
          state: HS,
          dispatch: gS
        } = SS;
        return !HS.readOnly && (gS(HS.update(iH(HS, ((SS, gS) => {
          let tS = /^\s*/.exec(SS.text)[0];
          if (!tS) return;
          let bS = (0, xS.Z)(tS, HS.tabSize),
            XS = 0,
            NS = (0, qS.Z)(HS, Math.max(0, bS - (0, qS.O)(HS)));
          for (; XS < tS.length && XS < NS.length && tS.charCodeAt(XS) == NS.charCodeAt(XS);) XS++;
          gS.push({
            from: SS.from + XS,
            to: SS.from + tS.length,
            insert: NS.slice(XS)
          })
        })), {
          userEvent: "delete.dedent"
        })), !0)
      },
      UH = [{
        key: "Alt-ArrowLeft",
        mac: "Ctrl-ArrowLeft",
        run: SS => BS(SS, (HS => eS(SS.state, HS, !RS(SS)))),
        shift: SS => qH(SS, (HS => eS(SS.state, HS, !RS(SS))))
      }, {
        key: "Alt-ArrowRight",
        mac: "Ctrl-ArrowRight",
        run: SS => BS(SS, (HS => eS(SS.state, HS, RS(SS)))),
        shift: SS => qH(SS, (HS => eS(SS.state, HS, RS(SS))))
      }, {
        key: "Alt-ArrowUp",
        run: SS => {
          let {
            state: HS,
            dispatch: gS
          } = SS;
          return YH(HS, gS, !1)
        }
      }, {
        key: "Shift-Alt-ArrowUp",
        run: SS => {
          let {
            state: HS,
            dispatch: gS
          } = SS;
          return AH(HS, gS, !1)
        }
      }, {
        key: "Alt-ArrowDown",
        run: SS => {
          let {
            state: HS,
            dispatch: gS
          } = SS;
          return YH(HS, gS, !0)
        }
      }, {
        key: "Shift-Alt-ArrowDown",
        run: SS => {
          let {
            state: HS,
            dispatch: gS
          } = SS;
          return AH(HS, gS, !0)
        }
      }, {
        key: "Mod-Alt-ArrowUp",
        run: SS => hH(SS, !1)
      }, {
        key: "Mod-Alt-ArrowDown",
        run: SS => hH(SS, !0)
      }, {
        key: "Escape",
        run: SS => {
          let {
            state: HS,
            dispatch: gS
          } = SS, tS = HS.selection, bS = null;
          return tS.HG.length > 1 ? bS = xS.i.create([tS.main]) : tS.main.empty || (bS = xS.i.create([xS.i.cursor(tS.main.head)])), !!bS && (gS(sS(HS, bS)), !0)
        }
      }, {
        key: "Mod-Enter",
        run: VH(!0)
      }, {
        key: "Alt-l",
        mac: "Ctrl-l",
        run: SS => {
          let {
            state: HS,
            dispatch: gS
          } = SS, tS = LH(HS).map((SS => {
            let {
              from: gS,
              to: tS
            } = SS;
            return xS.i.range(gS, Math.min(tS + 1, HS.doc.length))
          }));
          return gS(HS.update({
            selection: xS.i.create(tS),
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Mod-i",
        run: SS => {
          let {
            state: HS,
            dispatch: gS
          } = SS, tS = pS(HS.selection, (SS => {
            let gS = (0, qS.ob)(HS),
              tS = gS.resolveStack(SS.from, 1);
            if (SS.empty) {
              let HS = gS.resolveStack(SS.from, -1);
              HS.node.from >= tS.node.from && HS.node.to <= tS.node.to && (tS = HS)
            }
            for (let HS = tS; HS; HS = HS.next) {
              let {
                node: gS
              } = HS;
              if ((gS.from < SS.from && gS.to >= SS.to || gS.to > SS.to && gS.from <= SS.from) && HS.next) return xS.i.range(gS.to, gS.from)
            }
            return SS
          }));
          return !tS.eq(HS.selection) && (gS(sS(HS, tS)), !0)
        },
        preventDefault: !0
      }, {
        key: "Mod-[",
        run: zH
      }, {
        key: "Mod-]",
        run: WH
      }, {
        key: "Mod-Alt-\\",
        run: SS => {
          let {
            state: HS,
            dispatch: gS
          } = SS;
          if (HS.readOnly) return !1;
          let tS = Object.create(null),
            bS = new qS.f(HS, {
              overrideIndentation: SS => {
                let HS = tS[SS];
                return null == HS ? -1 : HS
              }
            }),
            XS = iH(HS, ((SS, gS, XS) => {
              let xS = (0, qS.R)(bS, SS.from);
              if (null == xS) return;
              /\S/.test(SS.text) || (xS = 0);
              let NS = /^\s*/.exec(SS.text)[0],
                uS = (0, qS.Z)(HS, xS);
              (NS != uS || XS.from < SS.from + NS.length) && (tS[SS.from] = xS, gS.push({
                from: SS.from,
                to: SS.from + NS.length,
                insert: uS
              }))
            }));
          return XS.changes.empty || gS(HS.update(XS, {
            userEvent: "indent"
          })), !0
        }
      }, {
        key: "Shift-Mod-k",
        run: SS => {
          if (SS.state.readOnly) return !1;
          let {
            state: HS
          } = SS, gS = HS.changes(LH(HS).map((SS => {
            let {
              from: gS,
              to: tS
            } = SS;
            return gS > 0 ? gS-- : tS < HS.doc.length && tS++, {
              from: gS,
              to: tS
            }
          }))), tS = pS(HS.selection, (HS => {
            let gS;
            if (SS.lineWrapping) {
              let tS = SS.lineBlockAt(HS.head),
                bS = SS.coordsAtPos(HS.head, HS.assoc || 1);
              bS && (gS = tS.bottom + SS.documentTop - bS.bottom + SS.defaultLineHeight / 2)
            }
            return SS.moveVertically(HS, !0, gS)
          })).map(gS);
          return SS.dispatch({
            changes: gS,
            selection: tS,
            scrollIntoView: !0,
            userEvent: "delete.line"
          }), !0
        }
      }, {
        key: "Shift-Mod-\\",
        run: SS => {
          let {
            state: HS,
            dispatch: gS
          } = SS;
          return NH(HS, gS, !1)
        }
      }, {
        key: "Mod-/",
        run: SS => {
          let {
            state: HS
          } = SS, gS = HS.doc.lineAt(HS.selection.main.from), tS = KS(SS.state, gS.from);
          return tS.line ? fS(SS) : !!tS.block && aS(SS)
        }
      }, {
        key: "Alt-A",
        run: kS
      }, {
        key: "Ctrl-m",
        mac: "Shift-Alt-m",
        run: SS => (SS.setTabFocusMode(), !0)
      }].concat([{
        key: "ArrowLeft",
        run: TS,
        shift: IH,
        preventDefault: !0
      }, {
        key: "Mod-ArrowLeft",
        mac: "Alt-ArrowLeft",
        run: SS => lS(SS, !RS(SS)),
        shift: SS => kH(SS, !RS(SS)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowLeft",
        run: SS => BS(SS, (HS => xH(SS, HS, !RS(SS)))),
        shift: SS => qH(SS, (HS => xH(SS, HS, !RS(SS)))),
        preventDefault: !0
      }, {
        key: "ArrowRight",
        run: oS,
        shift: fH,
        preventDefault: !0
      }, {
        key: "Mod-ArrowRight",
        mac: "Alt-ArrowRight",
        run: SS => lS(SS, RS(SS)),
        shift: SS => kH(SS, RS(SS)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowRight",
        run: SS => BS(SS, (HS => xH(SS, HS, RS(SS)))),
        shift: SS => qH(SS, (HS => xH(SS, HS, RS(SS)))),
        preventDefault: !0
      }, {
        key: "ArrowUp",
        run: SH,
        shift: KH,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowUp",
        run: PH,
        shift: DH
      }, {
        mac: "Ctrl-ArrowUp",
        run: bH,
        shift: CH
      }, {
        key: "ArrowDown",
        run: HH,
        shift: jH,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowDown",
        run: QH,
        shift: wH
      }, {
        mac: "Ctrl-ArrowDown",
        run: XH,
        shift: nH
      }, {
        key: "PageUp",
        run: bH,
        shift: CH
      }, {
        key: "PageDown",
        run: XH,
        shift: nH
      }, {
        key: "Home",
        run: SS => BS(SS, (HS => xH(SS, HS, !1))),
        shift: SS => qH(SS, (HS => xH(SS, HS, !1))),
        preventDefault: !0
      }, {
        key: "Mod-Home",
        run: PH,
        shift: DH
      }, {
        key: "End",
        run: SS => BS(SS, (HS => xH(SS, HS, !0))),
        shift: SS => qH(SS, (HS => xH(SS, HS, !0))),
        preventDefault: !0
      }, {
        key: "Mod-End",
        run: QH,
        shift: wH
      }, {
        key: "Enter",
        run: yH,
        shift: yH
      }, {
        key: "Mod-a",
        run: SS => {
          let {
            state: HS,
            dispatch: gS
          } = SS;
          return gS(HS.update({
            selection: {
              anchor: 0,
              head: HS.doc.length
            },
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Backspace",
        run: dH,
        shift: dH,
        preventDefault: !0
      }, {
        key: "Delete",
        run: cH,
        preventDefault: !0
      }, {
        key: "Mod-Backspace",
        mac: "Alt-Backspace",
        run: EH,
        preventDefault: !0
      }, {
        key: "Mod-Delete",
        mac: "Alt-Delete",
        run: SS => vH(SS, !0),
        preventDefault: !0
      }, {
        mac: "Mod-Backspace",
        run: SS => ZH(SS, (HS => {
          let gS = SS.moveToLineBoundary(HS, !1).head;
          return HS.head > gS ? gS : Math.max(0, HS.head - 1)
        })),
        preventDefault: !0
      }, {
        mac: "Mod-Delete",
        run: SS => ZH(SS, (HS => {
          let gS = SS.moveToLineBoundary(HS, !0).head;
          return HS.head < gS ? gS : Math.min(SS.state.doc.length, HS.head + 1)
        })),
        preventDefault: !0
      }].concat([{
        key: "Ctrl-b",
        run: TS,
        shift: IH,
        preventDefault: !0
      }, {
        key: "Ctrl-f",
        run: oS,
        shift: fH
      }, {
        key: "Ctrl-p",
        run: SH,
        shift: KH
      }, {
        key: "Ctrl-n",
        run: HH,
        shift: jH
      }, {
        key: "Ctrl-a",
        run: SS => BS(SS, (HS => xS.i.cursor(SS.lineBlockAt(HS.head).from, 1))),
        shift: SS => qH(SS, (HS => xS.i.cursor(SS.lineBlockAt(HS.head).from)))
      }, {
        key: "Ctrl-e",
        run: SS => BS(SS, (HS => xS.i.cursor(SS.lineBlockAt(HS.head).to, -1))),
        shift: SS => qH(SS, (HS => xS.i.cursor(SS.lineBlockAt(HS.head).to)))
      }, {
        key: "Ctrl-d",
        run: cH
      }, {
        key: "Ctrl-h",
        run: dH
      }, {
        key: "Ctrl-k",
        run: SS => ZH(SS, (HS => {
          let gS = SS.lineBlockAt(HS.head).to;
          return HS.head < gS ? gS : Math.min(SS.state.doc.length, HS.head + 1)
        }))
      }, {
        key: "Ctrl-Alt-h",
        run: EH
      }, {
        key: "Ctrl-o",
        run: SS => {
          let {
            state: HS,
            dispatch: gS
          } = SS;
          if (HS.readOnly) return !1;
          let tS = HS.changeByRange((SS => ({
            changes: {
              from: SS.from,
              to: SS.to,
              insert: xS.L.of(["", ""])
            },
            range: xS.i.cursor(SS.from)
          })));
          return gS(HS.update(tS, {
            scrollIntoView: !0,
            userEvent: "input"
          })), !0
        }
      }, {
        key: "Ctrl-t",
        run: SS => {
          let {
            state: HS,
            dispatch: gS
          } = SS;
          if (HS.readOnly) return !1;
          let tS = HS.changeByRange((SS => {
            if (!SS.empty || 0 == SS.from || SS.from == HS.doc.length) return {
              range: SS
            };
            let gS = SS.from,
              tS = HS.doc.lineAt(gS),
              bS = gS == tS.from ? gS - 1 : (0, xS.$)(tS.text, gS - tS.from, !1) + tS.from,
              XS = gS == tS.to ? gS + 1 : (0, xS.$)(tS.text, gS - tS.from, !0) + tS.from;
            return {
              changes: {
                from: bS,
                to: XS,
                insert: HS.doc.slice(gS, XS).append(HS.doc.slice(bS, gS))
              },
              range: xS.i.cursor(XS)
            }
          }));
          return !tS.changes.empty && (gS(HS.update(tS, {
            scrollIntoView: !0,
            userEvent: "move.character"
          })), !0)
        }
      }, {
        key: "Ctrl-v",
        run: XH
      }].map((SS => ({
        mac: SS.key,
        run: SS.run,
        shift: SS.shift
      }))))),
      pH = {
        key: "Tab",
        run: WH,
        shift: zH
      };
    var sH = gS(41359),
      BH = gS(41306),
      MH = gS(41366),
      FH = function(SS) {
        void 0 === SS && (SS = {});
        var {
          crosshairCursor: HS = !1
        } = SS, gS = [];
        !1 !== SS.closeBracketsKeymap && (gS = gS.concat(BH.d)), !1 !== SS.defaultKeymap && (gS = gS.concat(UH)), !1 !== SS.searchKeymap && (gS = gS.concat(sH.j)), !1 !== SS.historyKeymap && (gS = gS.concat(US)), !1 !== SS.foldKeymap && (gS = gS.concat(qS.G)), !1 !== SS.completionKeymap && (gS = gS.concat(BH.m)), !1 !== SS.lintKeymap && (gS = gS.concat(MH.e));
        var tS = [];
        return !1 !== SS.lineNumbers && tS.push((0, NS.P)()), !1 !== SS.highlightActiveLineGutter && tS.push((0, NS.E)()), !1 !== SS.highlightSpecialChars && tS.push((0, NS.J)()), !1 !== SS.history && tS.push(function() {
          let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return [wS, DS.of(SS), NS.e.domEventHandlers({
            beforeinput(SS, HS) {
              let gS = "historyUndo" == SS.inputType ? ZS : "historyRedo" == SS.inputType ? JS : null;
              return !!gS && (SS.preventDefault(), gS(HS))
            }
          })]
        }()), !1 !== SS.foldGutter && tS.push((0, qS.B)()), !1 !== SS.drawSelection && tS.push((0, NS.o)()), !1 !== SS.dropCursor && tS.push((0, NS.s)()), !1 !== SS.allowMultipleSelections && tS.push(xS.m.allowMultipleSelections.of(!0)), !1 !== SS.indentOnInput && tS.push((0, qS.X)()), !1 !== SS.syntaxHighlighting && tS.push((0, qS.ib)(qS.q, {
          fallback: !0
        })), !1 !== SS.bracketMatching && tS.push((0, qS.l)()), !1 !== SS.closeBrackets && tS.push((0, BH.h)()), !1 !== SS.autocompletion && tS.push((0, BH.c)()), !1 !== SS.rectangularSelection && tS.push((0, NS.V)()), !1 !== HS && tS.push((0, NS.m)()), !1 !== SS.highlightActiveLine && tS.push((0, NS.G)()), !1 !== SS.highlightSelectionMatches && tS.push((0, sH.f)()), SS.tabSize && "number" === typeof SS.tabSize && tS.push(qS.$.of(" ".repeat(SS.tabSize))), tS.concat([NS.L.of(gS.flat())]).filter(Boolean)
      },
      RH = gS(41345);
    const TH = "#e5c07b",
      oH = "#e06c75",
      lH = "#56b6c2",
      mH = "#ffffff",
      eH = "#abb2bf",
      rH = "#7d8799",
      Sg = "#61afef",
      Hg = "#98c379",
      gg = "#d19a66",
      tg = "#c678dd",
      bg = "#21252b",
      Xg = "#2c313a",
      xg = "#282c34",
      Ng = "#353a42",
      qg = "#3E4451",
      ug = "#528bff",
      Ig = NS.e.theme({
        "&": {
          color: eH,
          backgroundColor: xg
        },
        ".cm-content": {
          caretColor: ug
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: ug
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: qg
        },
        ".cm-panels": {
          backgroundColor: bg,
          color: eH
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
          backgroundColor: xg,
          color: rH,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: Xg
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#ddd"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: Ng
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: Ng,
          borderBottomColor: Ng
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: Xg,
            color: eH
          }
        }
      }, {
        dark: !0
      }),
      fg = qS.c.define([{
        tag: RH.j.keyword,
        color: tg
      }, {
        tag: [RH.j.name, RH.j.deleted, RH.j.character, RH.j.propertyName, RH.j.macroName],
        color: oH
      }, {
        tag: [RH.j.function(RH.j.variableName), RH.j.labelName],
        color: Sg
      }, {
        tag: [RH.j.color, RH.j.constant(RH.j.name), RH.j.standard(RH.j.name)],
        color: gg
      }, {
        tag: [RH.j.definition(RH.j.name), RH.j.separator],
        color: eH
      }, {
        tag: [RH.j.typeName, RH.j.className, RH.j.number, RH.j.changed, RH.j.annotation, RH.j.modifier, RH.j.self, RH.j.namespace],
        color: TH
      }, {
        tag: [RH.j.operator, RH.j.operatorKeyword, RH.j.url, RH.j.escape, RH.j.regexp, RH.j.link, RH.j.special(RH.j.string)],
        color: lH
      }, {
        tag: [RH.j.meta, RH.j.comment],
        color: rH
      }, {
        tag: RH.j.strong,
        fontWeight: "bold"
      }, {
        tag: RH.j.emphasis,
        fontStyle: "italic"
      }, {
        tag: RH.j.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: RH.j.link,
        color: rH,
        textDecoration: "underline"
      }, {
        tag: RH.j.heading,
        fontWeight: "bold",
        color: oH
      }, {
        tag: [RH.j.atom, RH.j.bool, RH.j.special(RH.j.variableName)],
        color: gg
      }, {
        tag: [RH.j.processingInstruction, RH.j.string, RH.j.inserted],
        color: Hg
      }, {
        tag: RH.j.invalid,
        color: mH
      }]),
      kg = [Ig, (0, qS.ib)(fg)];
    var ag = NS.e.theme({
      "&": {
        backgroundColor: "#fff"
      }
    }, {
      dark: !1
    });
    class Kg {
      constructor(SS, HS) {
        this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = HS, this.timeoutMS = HS, this.callbacks.push(SS)
      }
      mf() {
        if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
          this.isTimeExhausted = !0;
          var SS = this.callbacks.slice();
          this.callbacks.length = 0, SS.forEach((SS => {
            try {
              SS()
            } catch (HS) {
              console.error("TimeoutLatch callback error:", HS)
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
    class jg {
      constructor() {
        this.interval = null, this.latches = new Set
      }
      add(SS) {
        this.latches.add(SS), this.start()
      }
      remove(SS) {
        this.latches.delete(SS), 0 === this.latches.size && this.stop()
      }
      start() {
        null === this.interval && (this.interval = setInterval((() => {
          this.latches.forEach((SS => {
            SS.mf(), SS.isDone && this.remove(SS)
          }))
        }), 1))
      }
      stop() {
        null !== this.interval && (clearInterval(this.interval), this.interval = null)
      }
    }
    var Gg = null,
      Cg = xS.d.define(),
      ng = [];

    function Pg(SS) {
      var {
        value: HS,
        selection: gS,
        onChange: tS,
        onStatistics: bS,
        onCreateEditor: qS,
        onUpdate: uS,
        extensions: IS = ng,
        autoFocus: fS,
        theme: kS = "light",
        height: aS = null,
        minHeight: KS = null,
        maxHeight: jS = null,
        width: GS = null,
        minWidth: CS = null,
        maxWidth: nS = null,
        placeholder: PS = "",
        editable: QS = !0,
        readOnly: DS = !1,
        indentWithTab: wS = !0,
        basicSetup: hS = !0,
        root: ZS,
        initialState: JS
      } = SS, [OS, dS] = (0, XS.useState)(), [cS, vS] = (0, XS.useState)(), [ES, LS] = (0, XS.useState)(), YS = (0, XS.useState)((() => ({
        current: null
      })))[0], AS = (0, XS.useState)((() => ({
        current: null
      })))[0], yS = NS.e.theme({
        "&": {
          height: aS,
          minHeight: KS,
          maxHeight: jS,
          width: GS,
          minWidth: CS,
          maxWidth: nS
        },
        "& .cm-scroller": {
          height: "100% !important"
        }
      }), VS = NS.e.updateListener.of((SS => {
        if (SS.docChanged && "function" === typeof tS && !SS.transactions.some((SS => SS.annotation(Cg)))) {
          YS.current ? YS.current.reset() : (YS.current = new Kg((() => {
            if (AS.current) {
              var SS = AS.current;
              AS.current = null, SS()
            }
            YS.current = null
          }), 200), ("undefined" === typeof window ? new jg : (Gg || (Gg = new jg), Gg)).add(YS.current));
          var HS = SS.state.doc.toString();
          tS(HS, SS)
        }
        bS && bS((SS => ({
          line: SS.state.doc.lineAt(SS.state.selection.main.from),
          lineCount: SS.state.doc.lines,
          lineBreak: SS.state.lineBreak,
          length: SS.state.doc.length,
          readOnly: SS.state.readOnly,
          tabSize: SS.state.tabSize,
          selection: SS.state.selection,
          selectionAsSingle: SS.state.selection.asSingle().main,
          HG: SS.state.selection.HG,
          selectionCode: SS.state.sliceDoc(SS.state.selection.main.from, SS.state.selection.main.to),
          selections: SS.state.selection.HG.map((HS => SS.state.sliceDoc(HS.from, HS.to))),
          selectedText: SS.state.selection.HG.some((SS => !SS.empty))
        }))(SS))
      })), iS = function(SS) {
        void 0 === SS && (SS = {});
        var {
          indentWithTab: HS = !0,
          editable: gS = !0,
          readOnly: tS = !1,
          theme: bS = "light",
          placeholder: XS = "",
          basicSetup: qS = !0
        } = SS, uS = [];
        switch (HS && uS.unshift(NS.L.of([pH])), qS && ("boolean" === typeof qS ? uS.unshift(FH()) : uS.unshift(FH(qS))), XS && uS.unshift((0, NS.U)(XS)), bS) {
          case "light":
            uS.push(ag);
            break;
          case "dark":
            uS.push(kg);
            break;
          case "none":
            break;
          default:
            uS.push(bS)
        }
        return !1 === gS && uS.push(NS.e.editable.of(!1)), tS && uS.push(xS.m.readOnly.of(!0)), [...uS]
      }({
        theme: kS,
        editable: QS,
        readOnly: DS,
        placeholder: PS,
        indentWithTab: wS,
        basicSetup: hS
      }), WS = [VS, yS, ...iS];
      return uS && "function" === typeof uS && WS.push(NS.e.updateListener.of(uS)), WS = WS.concat(IS), (0, XS.useLayoutEffect)((() => {
        if (OS && !ES) {
          var SS = {
              doc: HS,
              selection: gS,
              extensions: WS
            },
            tS = JS ? xS.m.fromJSON(JS.json, SS, JS.fields) : xS.m.create(SS);
          if (LS(tS), !cS) {
            var bS = new NS.e({
              state: tS,
              parent: OS,
              root: ZS
            });
            vS(bS), qS && qS(bS, tS)
          }
        }
        return () => {
          cS && (LS(void 0), vS(void 0))
        }
      }), [OS, ES]), (0, XS.useEffect)((() => {
        SS.container && dS(SS.container)
      }), [SS.container]), (0, XS.useEffect)((() => () => {
        cS && (cS.destroy(), vS(void 0)), YS.current && (YS.current.cancel(), YS.current = null)
      }), [cS]), (0, XS.useEffect)((() => {
        fS && cS && cS.focus()
      }), [fS, cS]), (0, XS.useEffect)((() => {
        cS && cS.dispatch({
          effects: xS.G.reconfigure.of(WS)
        })
      }), [kS, IS, aS, KS, jS, GS, CS, nS, PS, QS, DS, wS, hS, tS, uS]), (0, XS.useEffect)((() => {
        if (void 0 !== HS) {
          var SS = cS ? cS.state.doc.toString() : "";
          if (cS && HS !== SS) {
            var gS = () => {
              cS && HS !== cS.state.doc.toString() && cS.dispatch({
                changes: {
                  from: 0,
                  to: cS.state.doc.toString().length,
                  insert: HS || ""
                },
                annotations: [Cg.of(!0)]
              })
            };
            YS.current && !YS.current.isDone ? AS.current = gS : gS()
          }
        }
      }), [HS, cS]), {
        state: ES,
        setState: LS,
        view: cS,
        setView: vS,
        container: OS,
        setContainer: dS
      }
    }
    var Qg = gS(1181),
      Dg = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"],
      wg = (0, XS.forwardRef)(((SS, HS) => {
        var {
          className: gS,
          value: xS = "",
          selection: NS,
          extensions: qS = [],
          onChange: uS,
          onStatistics: IS,
          onCreateEditor: fS,
          onUpdate: kS,
          autoFocus: aS,
          theme: KS = "light",
          height: jS,
          minHeight: GS,
          maxHeight: CS,
          width: nS,
          minWidth: PS,
          maxWidth: QS,
          basicSetup: DS,
          placeholder: wS,
          indentWithTab: hS,
          editable: ZS,
          readOnly: JS,
          root: OS,
          initialState: dS
        } = SS, cS = (0, bS.c)(SS, Dg), vS = (0, XS.useRef)(null), {
          state: ES,
          view: LS,
          container: YS,
          setContainer: AS
        } = Pg({
          root: OS,
          value: xS,
          autoFocus: aS,
          theme: KS,
          height: jS,
          minHeight: GS,
          maxHeight: CS,
          width: nS,
          minWidth: PS,
          maxWidth: QS,
          basicSetup: DS,
          placeholder: wS,
          indentWithTab: hS,
          editable: ZS,
          readOnly: JS,
          selection: NS,
          onChange: uS,
          onStatistics: IS,
          onCreateEditor: fS,
          onUpdate: kS,
          extensions: qS,
          initialState: dS
        });
        (0, XS.useImperativeHandle)(HS, (() => ({
          editor: vS.current,
          state: ES,
          view: LS
        })), [vS, YS, ES, LS]);
        var yS = (0, XS.useCallback)((SS => {
          vS.current = SS, AS(SS)
        }), [AS]);
        if ("string" !== typeof xS) throw new Error("value must be typeof string but got " + typeof xS);
        var VS = "string" === typeof KS ? "cm-theme-" + KS : "cm-theme";
        return (0, Qg.jsx)("div", (0, tS.d)({
          ref: yS,
          className: VS + (gS ? " " + gS : "")
        }, cS))
      }));
    wg.displayName = "CodeMirror";
    const hg = wg
  },
  41328: (SS, HS, gS) => {
    function tS() {
      var SS = arguments[0];
      "string" == typeof SS && (SS = document.createElement(SS));
      var HS = 1,
        gS = arguments[1];
      if (gS && "object" == typeof gS && null == gS.nodeType && !Array.isArray(gS)) {
        for (var tS in gS)
          if (Object.prototype.hasOwnProperty.call(gS, tS)) {
            var XS = gS[tS];
            "string" == typeof XS ? SS.setAttribute(tS, XS) : null != XS && (SS[tS] = XS)
          } HS++
      }
      for (; HS < arguments.length; HS++) bS(SS, arguments[HS]);
      return SS
    }

    function bS(SS, HS) {
      if ("string" == typeof HS) SS.appendChild(document.createTextNode(HS));
      else if (null == HS);
      else if (null != HS.nodeType) SS.appendChild(HS);
      else {
        if (!Array.isArray(HS)) throw new RangeError("Unsupported child node: " + HS);
        for (var gS = 0; gS < HS.length; gS++) bS(SS, HS[gS])
      }
    }
    gS.d(HS, {
      d: () => tS
    })
  },
  41324: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => xS
    });
    const tS = "undefined" == typeof Symbol ? "__\u037c" : Symbol.for("\u037c"),
      bS = "undefined" == typeof Symbol ? "__styleSet" + Math.floor(1e8 * Math.random()) : Symbol("styleSet"),
      XS = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : {};
    class xS {
      constructor(SS, HS) {
        this.rules = [];
        let {
          finish: gS
        } = HS || {};

        function tS(SS) {
          return /^@/.test(SS) ? [SS] : SS.split(/,\s*/)
        }

        function bS(SS, HS, XS, xS) {
          let NS = [],
            qS = /^@(\w+)\b/.exec(SS[0]),
            uS = qS && "keyframes" == qS[1];
          if (qS && null == HS) return XS.push(SS[0] + ";");
          for (let gS in HS) {
            let xS = HS[gS];
            if (/&/.test(gS)) bS(gS.split(/,\s*/).map((HS => SS.map((SS => HS.replace(/&/, SS))))).reduce(((SS, HS) => SS.concat(HS))), xS, XS);
            else if (xS && "object" == typeof xS) {
              if (!qS) throw new RangeError("The value of a property (" + gS + ") should be a primitive value.");
              bS(tS(gS), xS, NS, uS)
            } else null != xS && NS.push(gS.replace(/_.*/, "").replace(/[A-Z]/g, (SS => "-" + SS.toLowerCase())) + ": " + xS + ";")
          }(NS.length || uS) && XS.push((!gS || qS || xS ? SS : SS.map(gS)).join(", ") + " {" + NS.join(" ") + "}")
        }
        for (let XS in SS) bS(tS(XS), SS[XS], this.rules)
      }
      getRules() {
        return this.rules.join("\n")
      }
      static newName() {
        let SS = XS[tS] || 1;
        return XS[tS] = SS + 1, "\u037c" + SS.toString(36)
      }
      static mount(SS, HS, gS) {
        let tS = SS[bS],
          XS = gS && gS.nonce;
        tS ? XS && tS.setNonce(XS) : tS = new qS(SS, XS), tS.mount(Array.isArray(HS) ? HS : [HS], SS)
      }
    }
    let NS = new Map;
    class qS {
      constructor(SS, HS) {
        let gS = SS.ownerDocument || SS,
          tS = gS.defaultView;
        if (!SS.head && SS.adoptedStyleSheets && tS.CSSStyleSheet) {
          let HS = NS.get(gS);
          if (HS) return SS[bS] = HS;
          this.sheet = new tS.CSSStyleSheet, NS.set(gS, this)
        } else this.styleTag = gS.createElement("style"), HS && this.styleTag.setAttribute("nonce", HS);
        this.modules = [], SS[bS] = this
      }
      mount(SS, HS) {
        let gS = this.sheet,
          tS = 0,
          bS = 0;
        for (let XS = 0; XS < SS.length; XS++) {
          let HS = SS[XS],
            xS = this.modules.indexOf(HS);
          if (xS < bS && xS > -1 && (this.modules.splice(xS, 1), bS--, xS = -1), -1 == xS) {
            if (this.modules.splice(bS++, 0, HS), gS)
              for (let SS = 0; SS < HS.rules.length; SS++) gS.insertRule(HS.rules[SS], tS++)
          } else {
            for (; bS < xS;) tS += this.modules[bS++].rules.length;
            tS += HS.rules.length, bS++
          }
        }
        if (gS) HS.adoptedStyleSheets.indexOf(this.sheet) < 0 && (HS.adoptedStyleSheets = [this.sheet, ...HS.adoptedStyleSheets]);
        else {
          let SS = "";
          for (let HS = 0; HS < this.modules.length; HS++) SS += this.modules[HS].getRules() + "\n";
          this.styleTag.textContent = SS;
          let gS = HS.head || HS;
          this.styleTag.parentNode != gS && gS.insertBefore(this.styleTag, gS.firstChild)
        }
      }
      setNonce(SS) {
        this.styleTag && this.styleTag.getAttribute("nonce") != SS && this.styleTag.setAttribute("nonce", SS)
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);