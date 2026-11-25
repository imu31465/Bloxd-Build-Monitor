export const id = 603;
export const ids = [603];
export const modules = {
  43970: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => sr,
      f: () => br,
      i: () => lr,
      l: () => nM,
      o: () => Dr,
      p: () => QM,
      s: () => mr
    });
    var OM = iM(43972),
      SM = iM(43977),
      jM = iM(43996);
    class aM {
      constructor(MM, rM, iM, OM) {
        this.state = MM, this.pos = rM, this.explicit = iM, this.view = OM, this.abortListeners = [], this.abortOnDocChange = !1
      }
      tokenBefore(MM) {
        let rM = (0, jM.kb)(this.state).resolveInner(this.pos, -1);
        for (; rM && MM.indexOf(rM.name) < 0;) rM = rM.parent;
        return rM ? {
          from: rM.from,
          to: this.pos,
          text: this.state.sliceDoc(rM.from, this.pos),
          type: rM.type
        } : null
      }
      matchBefore(MM) {
        let rM = this.state.doc.lineAt(this.pos),
          iM = Math.max(rM.from, this.pos - 250),
          OM = rM.text.slice(iM - rM.from, this.pos - rM.from),
          SM = OM.search(mM(MM, !1));
        return SM < 0 ? null : {
          from: iM + SM,
          to: this.pos,
          text: OM.slice(SM)
        }
      }
      get aborted() {
        return null == this.abortListeners
      }
      addEventListener(MM, rM, iM) {
        "abort" == MM && this.abortListeners && (this.abortListeners.push(rM), iM && iM.onDocChange && (this.abortOnDocChange = !0))
      }
    }

    function PM(MM) {
      let rM = Object.keys(MM).join(""),
        iM = /\w/.test(rM);
      return iM && (rM = rM.replace(/\w/g, "")), `[${iM?"\\w":""}${rM.replace(/[^\w\s]/g,"\\$&")}]`
    }

    function nM(MM) {
      let rM = MM.map((MM => "string" == typeof MM ? {
          label: MM
        } : MM)),
        [iM, OM] = rM.every((MM => /^\w+$/.test(MM.label))) ? [/\w*$/, /\w+$/] : function(MM) {
          let rM = Object.create(null),
            iM = Object.create(null);
          for (let {
              label: SM
            }
            of MM) {
            rM[SM[0]] = !0;
            for (let MM = 1; MM < SM.length; MM++) iM[SM[MM]] = !0
          }
          let OM = PM(rM) + PM(iM) + "*$";
          return [new RegExp("^" + OM), new RegExp(OM)]
        }(rM);
      return MM => {
        let SM = MM.matchBefore(OM);
        return SM || MM.explicit ? {
          from: SM ? SM.from : MM.pos,
          options: rM,
          validFor: iM
        } : null
      }
    }

    function QM(MM, rM) {
      return iM => {
        for (let rM = (0, jM.kb)(iM.state).resolveInner(iM.pos, -1); rM; rM = rM.parent) {
          if (MM.indexOf(rM.name) > -1) return null;
          if (rM.type.isTop) break
        }
        return rM(iM)
      }
    }
    class zM {
      constructor(MM, rM, iM, OM) {
        this.completion = MM, this.source = rM, this.match = iM, this.score = OM
      }
    }

    function LM(MM) {
      return MM.selection.main.from
    }

    function mM(MM, rM) {
      var iM;
      let {
        source: OM
      } = MM, SM = rM && "^" != OM[0], jM = "$" != OM[OM.length - 1];
      return SM || jM ? new RegExp(`${SM?"^":""}(?:${OM})${jM?"$":""}`, null !== (iM = MM.flags) && void 0 !== iM ? iM : MM.ignoreCase ? "i" : "") : MM
    }
    const HM = OM.e.define();

    function hM(MM, rM, iM, SM) {
      let {
        main: jM
      } = MM.selection, aM = iM - jM.from, PM = SM - jM.from;
      return {
        ...MM.changeByRange((nM => {
          if (nM != jM && iM != SM && MM.sliceDoc(nM.from + aM, nM.from + PM) != MM.sliceDoc(iM, SM)) return {
            range: nM
          };
          let QM = MM.toText(rM);
          return {
            changes: {
              from: nM.from + aM,
              to: SM == jM.from ? nM.to : nM.from + PM,
              insert: QM
            },
            range: OM.l.cursor(nM.from + aM + QM.length)
          }
        })),
        scrollIntoView: !0,
        userEvent: "input.complete"
      }
    }
    const JM = new WeakMap;

    function dM(MM) {
      if (!Array.isArray(MM)) return MM;
      let rM = JM.get(MM);
      return rM || JM.set(MM, rM = nM(MM)), rM
    }
    const yM = OM.G.define(),
      lM = OM.G.define();
    class EM {
      constructor(MM) {
        this.pattern = MM, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
        for (let rM = 0; rM < MM.length;) {
          let iM = (0, OM.Q)(MM, rM),
            SM = (0, OM.S)(iM);
          this.chars.push(iM);
          let jM = MM.slice(rM, rM + SM),
            aM = jM.toUpperCase();
          this.folded.push((0, OM.Q)(aM == jM ? jM.toLowerCase() : aM, 0)), rM += SM
        }
        this.astral = MM.length != this.chars.length
      }
      ret(MM, rM) {
        return this.score = MM, this.matched = rM, this
      }
      match(MM) {
        if (0 == this.pattern.length) return this.ret(-100, []);
        if (MM.length < this.pattern.length) return null;
        let {
          chars: rM,
          folded: iM,
          any: SM,
          precise: jM,
          byWord: aM
        } = this;
        if (1 == rM.length) {
          let SM = (0, OM.Q)(MM, 0),
            jM = (0, OM.S)(SM),
            aM = jM == MM.length ? 0 : -100;
          if (SM == rM[0]);
          else {
            if (SM != iM[0]) return null;
            aM += -200
          }
          return this.ret(aM, [0, jM])
        }
        let PM = MM.indexOf(this.pattern);
        if (0 == PM) return this.ret(MM.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
        let nM = rM.length,
          QM = 0;
        if (PM < 0) {
          for (let jM = 0, aM = Math.min(MM.length, 200); jM < aM && QM < nM;) {
            let aM = (0, OM.Q)(MM, jM);
            aM != rM[QM] && aM != iM[QM] || (SM[QM++] = jM), jM += (0, OM.S)(aM)
          }
          if (QM < nM) return null
        }
        let zM = 0,
          LM = 0,
          mM = !1,
          HM = 0,
          hM = -1,
          JM = -1,
          dM = /[a-z]/.test(MM),
          yM = !0;
        for (let lM = 0, EM = Math.min(MM.length, 200), UM = 0; lM < EM && LM < nM;) {
          let SM = (0, OM.Q)(MM, lM);
          PM < 0 && (zM < nM && SM == rM[zM] && (jM[zM++] = lM), HM < nM && (SM == rM[HM] || SM == iM[HM] ? (0 == HM && (hM = lM), JM = lM + 1, HM++) : HM = 0));
          let QM, EM = SM < 255 ? SM >= 48 && SM <= 57 || SM >= 97 && SM <= 122 ? 2 : SM >= 65 && SM <= 90 ? 1 : 0 : (QM = (0, OM.eb)(SM)) != QM.toLowerCase() ? 1 : QM != QM.toUpperCase() ? 2 : 0;
          (!lM || 1 == EM && dM || 0 == UM && 0 != EM) && (rM[LM] == SM || iM[LM] == SM && (mM = !0) ? aM[LM++] = lM : aM.length && (yM = !1)), UM = EM, lM += (0, OM.S)(SM)
        }
        return LM == nM && 0 == aM[0] && yM ? this.result((mM ? -200 : 0) - 100, aM, MM) : HM == nM && 0 == hM ? this.ret(-200 - MM.length + (JM == MM.length ? 0 : -100), [0, JM]) : PM > -1 ? this.ret(-700 - MM.length, [PM, PM + this.pattern.length]) : HM == nM ? this.ret(-900 - MM.length, [hM, JM]) : LM == nM ? this.result((mM ? -200 : 0) - 100 - 700 + (yM ? 0 : -1100), aM, MM) : 2 == rM.length ? null : this.result((SM[0] ? -700 : 0) - 200 - 1100, SM, MM)
      }
      result(MM, rM, iM) {
        let SM = [],
          jM = 0;
        for (let aM of rM) {
          let MM = aM + (this.astral ? (0, OM.S)((0, OM.Q)(iM, aM)) : 1);
          jM && SM[jM - 1] == aM ? SM[jM - 1] = MM : (SM[jM++] = aM, SM[jM++] = MM)
        }
        return this.ret(MM - iM.length, SM)
      }
    }
    class UM {
      constructor(MM) {
        this.pattern = MM, this.matched = [], this.score = 0, this.folded = MM.toLowerCase()
      }
      match(MM) {
        if (MM.length < this.pattern.length) return null;
        let rM = MM.slice(0, this.pattern.length),
          iM = rM == this.pattern ? 0 : rM.toLowerCase() == this.folded ? -200 : null;
        return null == iM ? null : (this.matched = [0, rM.length], this.score = iM + (MM.length == this.pattern.length ? 0 : -100), this)
      }
    }
    const GM = OM.s.define({
      combine: MM => (0, OM.V)(MM, {
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
        positionInfo: eM,
        filterStrict: !1,
        compareCompletions: (MM, rM) => (MM.sortText || MM.label).localeCompare(rM.sortText || rM.label),
        interactionDelay: 75,
        updateSyncTime: 100
      }, {
        defaultKeymap: (MM, rM) => MM && rM,
        closeOnBlur: (MM, rM) => MM && rM,
        icons: (MM, rM) => MM && rM,
        tooltipClass: (MM, rM) => iM => CM(MM(iM), rM(iM)),
        optionClass: (MM, rM) => iM => CM(MM(iM), rM(iM)),
        addToOptions: (MM, rM) => MM.concat(rM),
        filterStrict: (MM, rM) => MM || rM
      })
    });

    function CM(MM, rM) {
      return MM ? rM ? MM + " " + rM : MM : rM
    }

    function eM(MM, rM, iM, OM, jM, aM) {
      let PM, nM, QM = MM.textDirection == SM.d.RTL,
        zM = QM,
        LM = !1,
        mM = "top",
        HM = rM.left - jM.left,
        hM = jM.right - rM.right,
        JM = OM.right - OM.left,
        dM = OM.bottom - OM.top;
      if (zM && HM < Math.min(JM, hM) ? zM = !1 : !zM && hM < Math.min(JM, HM) && (zM = !0), JM <= (zM ? HM : hM)) PM = Math.max(jM.top, Math.min(iM.top, jM.bottom - dM)) - rM.top, nM = Math.min(400, zM ? HM : hM);
      else {
        LM = !0, nM = Math.min(400, (QM ? rM.right : jM.right - rM.left) - 30);
        let MM = jM.bottom - rM.bottom;
        MM >= dM || MM > rM.top ? PM = iM.bottom - rM.top : (mM = "bottom", PM = rM.bottom - iM.top)
      }
      return {
        style: `${mM}: ${PM/((rM.bottom-rM.top)/aM.offsetHeight)}px; max-width: ${nM/((rM.right-rM.left)/aM.offsetWidth)}px`,
        class: "cm-completionInfo-" + (LM ? QM ? "left-narrow" : "right-narrow" : zM ? "left" : "right")
      }
    }
    const bM = OM.G.define();

    function wM(MM, rM, iM) {
      if (MM <= iM) return {
        from: 0,
        to: MM
      };
      if (rM < 0 && (rM = 0), rM <= MM >> 1) {
        let MM = Math.floor(rM / iM);
        return {
          from: MM * iM,
          to: (MM + 1) * iM
        }
      }
      let OM = Math.floor((MM - rM) / iM);
      return {
        from: MM - (OM + 1) * iM,
        to: MM - OM * iM
      }
    }
    class tM {
      constructor(MM, rM, iM) {
        this.view = MM, this.stateField = rM, this.applyCompletion = iM, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
          read: () => this.measureInfo(),
          write: MM => this.placeInfo(MM),
          key: this
        }, this.space = null, this.currentClass = "";
        let OM = MM.state.field(rM),
          {
            options: SM,
            selected: jM
          } = OM.open,
          aM = MM.state.facet(GM);
        this.optionContent = function(MM) {
          let rM = MM.addToOptions.slice();
          return MM.icons && rM.push({
            render(MM) {
              let rM = document.createElement("div");
              return rM.classList.add("cm-completionIcon"), MM.type && rM.classList.add(...MM.type.split(/\s+/g).map((MM => "cm-completionIcon-" + MM))), rM.setAttribute("aria-hidden", "true"), rM
            },
            position: 20
          }), rM.push({
            render(MM, rM, iM, OM) {
              let SM = document.createElement("span");
              SM.className = "cm-completionLabel";
              let jM = MM.displayLabel || MM.label,
                aM = 0;
              for (let PM = 0; PM < OM.length;) {
                let MM = OM[PM++],
                  rM = OM[PM++];
                MM > aM && SM.appendChild(document.createTextNode(jM.slice(aM, MM)));
                let iM = SM.appendChild(document.createElement("span"));
                iM.appendChild(document.createTextNode(jM.slice(MM, rM))), iM.className = "cm-completionMatchedText", aM = rM
              }
              return aM < jM.length && SM.appendChild(document.createTextNode(jM.slice(aM))), SM
            },
            position: 50
          }, {
            render(MM) {
              if (!MM.detail) return null;
              let rM = document.createElement("span");
              return rM.className = "cm-completionDetail", rM.textContent = MM.detail, rM
            },
            position: 80
          }), rM.sort(((MM, rM) => MM.position - rM.position)).map((MM => MM.render))
        }(aM), this.optionClass = aM.optionClass, this.tooltipClass = aM.tooltipClass, this.range = wM(SM.length, jM, aM.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(MM.state), this.dom.addEventListener("mousedown", (iM => {
          let {
            options: OM
          } = MM.state.field(rM).open;
          for (let rM, SM = iM.target; SM && SM != this.dom; SM = SM.parentNode)
            if ("LI" == SM.nodeName && (rM = /-(\d+)$/.exec(SM.id)) && +rM[1] < OM.length) return this.applyCompletion(MM, OM[+rM[1]]), void iM.preventDefault();
          if (iM.target == this.list) {
            let rM = this.list.classList.contains("cm-completionListIncompleteTop") && iM.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && iM.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
            null != rM && (MM.dispatch({
              effects: bM.of(rM)
            }), iM.preventDefault())
          }
        })), this.dom.addEventListener("focusout", (rM => {
          let iM = MM.state.field(this.stateField, !1);
          iM && iM.tooltip && MM.state.facet(GM).closeOnBlur && rM.relatedTarget != MM.contentDOM && MM.dispatch({
            effects: lM.of(null)
          })
        })), this.showOptions(SM, OM.id)
      }
      mount() {
        this.updateSel()
      }
      showOptions(MM, rM) {
        this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(MM, rM, this.range)), this.list.addEventListener("scroll", (() => {
          this.info && this.view.requestMeasure(this.placeInfoReq)
        }))
      }
      update(MM) {
        var rM;
        let iM = MM.state.field(this.stateField),
          OM = MM.startState.field(this.stateField);
        if (this.updateTooltipClass(MM.state), iM != OM) {
          let {
            options: SM,
            selected: jM,
            disabled: aM
          } = iM.open;
          OM.open && OM.open.options == SM || (this.range = wM(SM.length, jM, MM.state.facet(GM).maxRenderedOptions), this.showOptions(SM, iM.id)), this.updateSel(), aM != (null === (rM = OM.open) || void 0 === rM ? void 0 : rM.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!aM)
        }
      }
      updateTooltipClass(MM) {
        let rM = this.tooltipClass(MM);
        if (rM != this.currentClass) {
          for (let MM of this.currentClass.split(" ")) MM && this.dom.classList.remove(MM);
          for (let MM of rM.split(" ")) MM && this.dom.classList.add(MM);
          this.currentClass = rM
        }
      }
      positioned(MM) {
        this.space = MM, this.info && this.view.requestMeasure(this.placeInfoReq)
      }
      updateSel() {
        let MM = this.view.state.field(this.stateField),
          rM = MM.open;
        (rM.selected > -1 && rM.selected < this.range.from || rM.selected >= this.range.to) && (this.range = wM(rM.options.length, rM.selected, this.view.state.facet(GM).maxRenderedOptions), this.showOptions(rM.options, MM.id));
        let iM = this.updateSelectedOption(rM.selected);
        if (iM) {
          this.destroyInfo();
          let {
            completion: OM
          } = rM.options[rM.selected], {
            info: jM
          } = OM;
          if (!jM) return;
          let aM = "string" === typeof jM ? document.createTextNode(jM) : jM(OM);
          if (!aM) return;
          "then" in aM ? aM.then((rM => {
            rM && this.view.state.field(this.stateField, !1) == MM && this.addInfoPane(rM, OM)
          })).catch((MM => (0, SM._)(this.view.state, MM, "completion info"))) : (this.addInfoPane(aM, OM), iM.setAttribute("aria-describedby", this.info.id))
        }
      }
      addInfoPane(MM, rM) {
        this.destroyInfo();
        let iM = this.info = document.createElement("div");
        if (iM.className = "cm-tooltip cm-completionInfo", iM.id = "cm-completionInfo-" + Math.floor(65535 * Math.random()).toString(16), null != MM.nodeType) iM.appendChild(MM), this.infoDestroy = null;
        else {
          let {
            dom: rM,
            destroy: OM
          } = MM;
          iM.appendChild(rM), this.infoDestroy = OM || null
        }
        this.dom.appendChild(iM), this.view.requestMeasure(this.placeInfoReq)
      }
      updateSelectedOption(MM) {
        let rM = null;
        for (let iM = this.list.firstChild, OM = this.range.from; iM; iM = iM.nextSibling, OM++) "LI" == iM.nodeName && iM.id ? OM == MM ? iM.hasAttribute("aria-selected") || (iM.setAttribute("aria-selected", "true"), rM = iM) : iM.hasAttribute("aria-selected") && (iM.removeAttribute("aria-selected"), iM.removeAttribute("aria-describedby")) : OM--;
        return rM && function(MM, rM) {
          let iM = MM.getBoundingClientRect(),
            OM = rM.getBoundingClientRect(),
            SM = iM.height / MM.offsetHeight;
          OM.top < iM.top ? MM.scrollTop -= (iM.top - OM.top) / SM : OM.bottom > iM.bottom && (MM.scrollTop += (OM.bottom - iM.bottom) / SM)
        }(this.list, rM), rM
      }
      measureInfo() {
        let MM = this.dom.querySelector("[aria-selected]");
        if (!MM || !this.info) return null;
        let rM = this.dom.getBoundingClientRect(),
          iM = this.info.getBoundingClientRect(),
          OM = MM.getBoundingClientRect(),
          SM = this.space;
        if (!SM) {
          let MM = this.dom.ownerDocument.documentElement;
          SM = {
            left: 0,
            top: 0,
            right: MM.clientWidth,
            bottom: MM.clientHeight
          }
        }
        return OM.top > Math.min(SM.bottom, rM.bottom) - 10 || OM.bottom < Math.max(SM.top, rM.top) + 10 ? null : this.view.state.facet(GM).positionInfo(this.view, rM, OM, iM, SM, this.dom)
      }
      placeInfo(MM) {
        this.info && (MM ? (MM.style && (this.info.style.cssText = MM.style), this.info.className = "cm-tooltip cm-completionInfo " + (MM.class || "")) : this.info.style.cssText = "top: -1e6px")
      }
      createListBox(MM, rM, iM) {
        const OM = document.createElement("ul");
        OM.id = rM, OM.setAttribute("role", "listbox"), OM.setAttribute("aria-expanded", "true"), OM.setAttribute("aria-label", this.view.state.phrase("Completions")), OM.addEventListener("mousedown", (MM => {
          MM.target == OM && MM.preventDefault()
        }));
        let SM = null;
        for (let jM = iM.from; jM < iM.to; jM++) {
          let {
            completion: aM,
            match: PM
          } = MM[jM], {
            section: nM
          } = aM;
          if (nM) {
            let MM = "string" == typeof nM ? nM : nM.name;
            if (MM != SM && (jM > iM.from || 0 == iM.from))
              if (SM = MM, "string" != typeof nM && nM.header) OM.appendChild(nM.header(nM));
              else {
                OM.appendChild(document.createElement("completion-section")).textContent = MM
              }
          }
          const QM = OM.appendChild(document.createElement("li"));
          QM.id = rM + "-" + jM, QM.setAttribute("role", "option");
          let zM = this.optionClass(aM);
          zM && (QM.className = zM);
          for (let MM of this.optionContent) {
            let rM = MM(aM, this.view.state, this.view, PM);
            rM && QM.appendChild(rM)
          }
        }
        return iM.from && OM.classList.add("cm-completionListIncompleteTop"), iM.to < MM.length && OM.classList.add("cm-completionListIncompleteBottom"), OM
      }
      destroyInfo() {
        this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
      }
      destroy() {
        this.destroyInfo()
      }
    }

    function gM(MM, rM) {
      return iM => new tM(iM, MM, rM)
    }

    function uM(MM) {
      return 100 * (MM.boost || 0) + (MM.apply ? 10 : 0) + (MM.info ? 5 : 0) + (MM.type ? 1 : 0)
    }
    class RM {
      constructor(MM, rM, iM, OM, SM, jM) {
        this.options = MM, this.attrs = rM, this.tooltip = iM, this.timestamp = OM, this.selected = SM, this.disabled = jM
      }
      setSelected(MM, rM) {
        return MM == this.selected || MM >= this.options.length ? this : new RM(this.options, DM(rM, MM), this.tooltip, this.timestamp, MM, this.disabled)
      }
      static build(MM, rM, iM, OM, SM, jM) {
        if (OM && !jM && MM.some((MM => MM.isPending))) return OM.setDisabled();
        let aM = function(MM, rM) {
          let iM = [],
            OM = null,
            SM = null,
            jM = MM => {
              iM.push(MM);
              let {
                section: rM
              } = MM.completion;
              if (rM) {
                OM || (OM = []);
                let MM = "string" == typeof rM ? rM : rM.name;
                OM.some((rM => rM.name == MM)) || OM.push("string" == typeof rM ? {
                  name: MM
                } : rM)
              }
            },
            aM = rM.facet(GM);
          for (let LM of MM)
            if (LM.hasResult()) {
              let MM = LM.result.getMatch;
              if (!1 === LM.result.filter)
                for (let rM of LM.result.options) jM(new zM(rM, LM.source, MM ? MM(rM) : [], 1e9 - iM.length));
              else {
                let iM, OM = rM.sliceDoc(LM.from, LM.to),
                  PM = aM.filterStrict ? new UM(OM) : new EM(OM);
                for (let rM of LM.result.options)
                  if (iM = PM.match(rM.label)) {
                    let OM = rM.displayLabel ? MM ? MM(rM, iM.matched) : [] : iM.matched,
                      aM = iM.score + (rM.boost || 0);
                    if (jM(new zM(rM, LM.source, OM, aM)), "object" == typeof rM.section && "dynamic" === rM.section.rank) {
                      let {
                        name: MM
                      } = rM.section;
                      SM || (SM = Object.create(null)), SM[MM] = Math.max(aM, SM[MM] || -1e9)
                    }
                  }
              }
            } if (OM) {
            let MM = Object.create(null),
              rM = 0,
              jM = (MM, rM) => ("dynamic" === MM.rank && "dynamic" === rM.rank ? SM[rM.name] - SM[MM.name] : 0) || ("number" == typeof MM.rank ? MM.rank : 1e9) - ("number" == typeof rM.rank ? rM.rank : 1e9) || (MM.name < rM.name ? -1 : 1);
            for (let iM of OM.sort(jM)) rM -= 1e5, MM[iM.name] = rM;
            for (let OM of iM) {
              let {
                section: rM
              } = OM.completion;
              rM && (OM.score += MM["string" == typeof rM ? rM : rM.name])
            }
          }
          let PM = [],
            nM = null,
            QM = aM.compareCompletions;
          for (let zM of iM.sort(((MM, rM) => rM.score - MM.score || QM(MM.completion, rM.completion)))) {
            let MM = zM.completion;
            !nM || nM.label != MM.label || nM.detail != MM.detail || null != nM.type && null != MM.type && nM.type != MM.type || nM.apply != MM.apply || nM.boost != MM.boost ? PM.push(zM) : uM(zM.completion) > uM(nM) && (PM[PM.length - 1] = zM), nM = zM.completion
          }
          return PM
        }(MM, rM);
        if (!aM.length) return OM && MM.some((MM => MM.isPending)) ? OM.setDisabled() : null;
        let PM = rM.facet(GM).selectOnOpen ? 0 : -1;
        if (OM && OM.selected != PM && -1 != OM.selected) {
          let MM = OM.options[OM.selected].completion;
          for (let rM = 0; rM < aM.length; rM++)
            if (aM[rM].completion == MM) {
              PM = rM;
              break
            }
        }
        return new RM(aM, DM(iM, PM), {
          pos: MM.reduce(((MM, rM) => rM.hasResult() ? Math.min(MM, rM.from) : MM), 1e8),
          create: xM,
          above: SM.aboveCursor
        }, OM ? OM.timestamp : Date.now(), PM, !1)
      }
      map(MM) {
        return new RM(this.options, this.attrs, {
          ...this.tooltip,
          pos: MM.mapPos(this.tooltip.pos)
        }, this.timestamp, this.selected, this.disabled)
      }
      setDisabled() {
        return new RM(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0)
      }
    }
    class pM {
      constructor(MM, rM, iM) {
        this.active = MM, this.id = rM, this.open = iM
      }
      static start() {
        return new pM(kM, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
      }
      update(MM) {
        let {
          state: rM
        } = MM, iM = rM.facet(GM), OM = (iM.override || rM.languageDataAt("autocomplete", LM(rM)).map(dM)).map((rM => (this.active.find((MM => MM.source == rM)) || new oM(rM, this.active.some((MM => 0 != MM.state)) ? 1 : 0)).update(MM, iM)));
        OM.length == this.active.length && OM.every(((MM, rM) => MM == this.active[rM])) && (OM = this.active);
        let SM = this.open,
          jM = MM.effects.some((MM => MM.is(YM)));
        SM && MM.docChanged && (SM = SM.map(MM.changes)), MM.selection || OM.some((rM => rM.hasResult() && MM.changes.touchesRange(rM.from, rM.to))) || ! function(MM, rM) {
          if (MM == rM) return !0;
          for (let iM = 0, OM = 0;;) {
            for (; iM < MM.length && !MM[iM].hasResult();) iM++;
            for (; OM < rM.length && !rM[OM].hasResult();) OM++;
            let SM = iM == MM.length,
              jM = OM == rM.length;
            if (SM || jM) return SM == jM;
            if (MM[iM++].result != rM[OM++].result) return !1
          }
        }(OM, this.active) || jM ? SM = RM.build(OM, rM, this.id, SM, iM, jM) : SM && SM.disabled && !OM.some((MM => MM.isPending)) && (SM = null), !SM && OM.every((MM => !MM.isPending)) && OM.some((MM => MM.hasResult())) && (OM = OM.map((MM => MM.hasResult() ? new oM(MM.source, 0) : MM)));
        for (let aM of MM.effects) aM.is(bM) && (SM = SM && SM.setSelected(aM.value, this.id));
        return OM == this.active && SM == this.open ? this : new pM(OM, this.id, SM)
      }
      get tooltip() {
        return this.open ? this.open.tooltip : null
      }
      get attrs() {
        return this.open ? this.open.attrs : this.active.length ? WM : sM
      }
    }
    const WM = {
        "aria-autocomplete": "list"
      },
      sM = {};

    function DM(MM, rM) {
      let iM = {
        "aria-autocomplete": "list",
        "aria-haspopup": "listbox",
        "aria-controls": MM
      };
      return rM > -1 && (iM["aria-activedescendant"] = MM + "-" + rM), iM
    }
    const kM = [];

    function ZM(MM, rM) {
      if (MM.isUserEvent("input.complete")) {
        let iM = MM.annotation(HM);
        if (iM && rM.activateOnCompletion(iM)) return 12
      }
      let iM = MM.isUserEvent("input.type");
      return iM && rM.activateOnTyping ? 5 : iM ? 1 : MM.isUserEvent("delete.backward") ? 2 : MM.selection ? 8 : MM.docChanged ? 16 : 0
    }
    class oM {
      constructor(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.source = MM, this.state = rM, this.explicit = iM
      }
      hasResult() {
        return !1
      }
      get isPending() {
        return 1 == this.state
      }
      update(MM, rM) {
        let iM = ZM(MM, rM),
          OM = this;
        (8 & iM || 16 & iM && this.touches(MM)) && (OM = new oM(OM.source, 0)), 4 & iM && 0 == OM.state && (OM = new oM(this.source, 1)), OM = OM.updateFor(MM, iM);
        for (let SM of MM.effects)
          if (SM.is(yM)) OM = new oM(OM.source, 1, SM.value);
          else if (SM.is(lM)) OM = new oM(OM.source, 0);
        else if (SM.is(YM))
          for (let MM of SM.value) MM.source == OM.source && (OM = MM);
        return OM
      }
      updateFor(MM, rM) {
        return this.map(MM.changes)
      }
      map(MM) {
        return this
      }
      touches(MM) {
        return MM.changes.touchesRange(LM(MM.state))
      }
    }
    class fM extends oM {
      constructor(MM, rM, iM, OM, SM, jM) {
        super(MM, 3, rM), this.limit = iM, this.result = OM, this.from = SM, this.to = jM
      }
      hasResult() {
        return !0
      }
      updateFor(MM, rM) {
        var iM;
        if (!(3 & rM)) return this.map(MM.changes);
        let OM = this.result;
        OM.map && !MM.changes.empty && (OM = OM.map(OM, MM.changes));
        let SM = MM.changes.mapPos(this.from),
          jM = MM.changes.mapPos(this.to, 1),
          PM = LM(MM.state);
        if (PM > jM || !OM || 2 & rM && (LM(MM.startState) == this.from || PM < this.limit)) return new oM(this.source, 4 & rM ? 1 : 0);
        let nM = MM.changes.mapPos(this.limit);
        return function(MM, rM, iM, OM) {
          if (!MM) return !1;
          let SM = rM.sliceDoc(iM, OM);
          return "function" == typeof MM ? MM(SM, iM, OM, rM) : mM(MM, !0).test(SM)
        }(OM.validFor, MM.state, SM, jM) ? new fM(this.source, this.explicit, nM, OM, SM, jM) : OM.update && (OM = OM.update(OM, SM, jM, new aM(MM.state, PM, !1))) ? new fM(this.source, this.explicit, nM, OM, OM.from, null !== (iM = OM.to) && void 0 !== iM ? iM : LM(MM.state)) : new oM(this.source, 1, this.explicit)
      }
      map(MM) {
        if (MM.empty) return this;
        return (this.result.map ? this.result.map(this.result, MM) : this.result) ? new fM(this.source, this.explicit, MM.mapPos(this.limit), this.result, MM.mapPos(this.from), MM.mapPos(this.to, 1)) : new oM(this.source, 0)
      }
      touches(MM) {
        return MM.changes.touchesRange(this.from, this.to)
      }
    }
    const YM = OM.G.define({
        map: (MM, rM) => MM.map((MM => MM.map(rM)))
      }),
      NM = OM.H.define({
        create: () => pM.start(),
        update: (MM, rM) => MM.update(rM),
        provide: MM => [SM.nb.from(MM, (MM => MM.tooltip)), SM.f.contentAttributes.from(MM, (MM => MM.attrs))]
      });

    function AM(MM, rM) {
      const iM = rM.completion.apply || rM.completion.label;
      let OM = MM.state.field(NM).active.find((MM => MM.source == rM.source));
      return OM instanceof fM && ("string" == typeof iM ? MM.dispatch({
        ...hM(MM.state, iM, OM.from, OM.to),
        annotations: HM.of(rM.completion)
      }) : iM(MM, rM.completion, OM.from, OM.to), !0)
    }
    const xM = gM(NM, AM);

    function vM(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option";
      return iM => {
        let OM = iM.state.field(NM, !1);
        if (!OM || !OM.open || OM.open.disabled || Date.now() - OM.open.timestamp < iM.state.facet(GM).interactionDelay) return !1;
        let jM, aM = 1;
        "page" == rM && (jM = (0, SM.H)(iM, OM.open.tooltip)) && (aM = Math.max(2, Math.floor(jM.dom.offsetHeight / jM.dom.querySelector("li").offsetHeight) - 1));
        let {
          length: PM
        } = OM.open.options, nM = OM.open.selected > -1 ? OM.open.selected + aM * (MM ? 1 : -1) : MM ? 0 : PM - 1;
        return nM < 0 ? nM = "page" == rM ? 0 : PM - 1 : nM >= PM && (nM = "page" == rM ? PM - 1 : 0), iM.dispatch({
          effects: bM.of(nM)
        }), !0
      }
    }
    const FM = MM => !!MM.state.field(NM, !1) && (MM.dispatch({
      effects: yM.of(!0)
    }), !0);
    class BM {
      constructor(MM, rM) {
        this.active = MM, this.context = rM, this.time = Date.now(), this.updates = [], this.done = void 0
      }
    }
    const XM = SM.m.fromClass(class {
        constructor(MM) {
          this.view = MM, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
          for (let rM of MM.state.field(NM).active) rM.isPending && this.startQuery(rM)
        }
        update(MM) {
          let rM = MM.state.field(NM),
            iM = MM.state.facet(GM);
          if (!MM.selectionSet && !MM.docChanged && MM.startState.field(NM) == rM) return;
          let OM = MM.transactions.some((MM => {
            let rM = ZM(MM, iM);
            return 8 & rM || (MM.selection || MM.docChanged) && !(3 & rM)
          }));
          for (let PM = 0; PM < this.running.length; PM++) {
            let rM = this.running[PM];
            if (OM || rM.context.abortOnDocChange && MM.docChanged || rM.updates.length + MM.transactions.length > 50 && Date.now() - rM.time > 1e3) {
              for (let MM of rM.context.abortListeners) try {
                MM()
              } catch (aM) {
                (0, SM._)(this.view.state, aM)
              }
              rM.context.abortListeners = null, this.running.splice(PM--, 1)
            } else rM.updates.push(...MM.transactions)
          }
          this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), MM.transactions.some((MM => MM.effects.some((MM => MM.is(yM))))) && (this.pendingStart = !0);
          let jM = this.pendingStart ? 50 : iM.activateOnTypingDelay;
          if (this.debounceUpdate = rM.active.some((MM => MM.isPending && !this.running.some((rM => rM.active.source == MM.source)))) ? setTimeout((() => this.startUpdate()), jM) : -1, 0 != this.composing)
            for (let SM of MM.transactions) SM.isUserEvent("input.type") ? this.composing = 2 : 2 == this.composing && SM.selection && (this.composing = 3)
        }
        startUpdate() {
          this.debounceUpdate = -1, this.pendingStart = !1;
          let {
            state: MM
          } = this.view, rM = MM.field(NM);
          for (let iM of rM.active) iM.isPending && !this.running.some((MM => MM.active.source == iM.source)) && this.startQuery(iM);
          this.running.length && rM.open && rM.open.disabled && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(GM).updateSyncTime))
        }
        startQuery(MM) {
          let {
            state: rM
          } = this.view, iM = LM(rM), OM = new aM(rM, iM, MM.explicit, this.view), jM = new BM(MM, OM);
          this.running.push(jM), Promise.resolve(MM.source(OM)).then((MM => {
            jM.context.aborted || (jM.done = MM || null, this.scheduleAccept())
          }), (MM => {
            this.view.dispatch({
              effects: lM.of(null)
            }), (0, SM._)(this.view.state, MM)
          }))
        }
        scheduleAccept() {
          this.running.every((MM => void 0 !== MM.done)) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(GM).updateSyncTime))
        }
        accept() {
          var MM;
          this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
          let rM = [],
            iM = this.view.state.facet(GM),
            OM = this.view.state.field(NM);
          for (let SM = 0; SM < this.running.length; SM++) {
            let jM = this.running[SM];
            if (void 0 === jM.done) continue;
            if (this.running.splice(SM--, 1), jM.done) {
              let OM = LM(jM.updates.length ? jM.updates[0].startState : this.view.state),
                SM = Math.min(OM, jM.done.from + (jM.active.explicit ? 0 : 1)),
                aM = new fM(jM.active.source, jM.active.explicit, SM, jM.done, jM.done.from, null !== (MM = jM.done.to) && void 0 !== MM ? MM : OM);
              for (let MM of jM.updates) aM = aM.update(MM, iM);
              if (aM.hasResult()) {
                rM.push(aM);
                continue
              }
            }
            let aM = OM.active.find((MM => MM.source == jM.active.source));
            if (aM && aM.isPending)
              if (null == jM.done) {
                let MM = new oM(jM.active.source, 0);
                for (let rM of jM.updates) MM = MM.update(rM, iM);
                MM.isPending || rM.push(MM)
              } else this.startQuery(aM)
          }(rM.length || OM.open && OM.open.disabled) && this.view.dispatch({
            effects: YM.of(rM)
          })
        }
      }, {
        eventHandlers: {
          blur(MM) {
            let rM = this.view.state.field(NM, !1);
            if (rM && rM.tooltip && this.view.state.facet(GM).closeOnBlur) {
              let iM = rM.open && (0, SM.H)(this.view, rM.open.tooltip);
              iM && iM.dom.contains(MM.relatedTarget) || setTimeout((() => this.view.dispatch({
                effects: lM.of(null)
              })), 10)
            }
          },
          compositionstart() {
            this.composing = 1
          },
          compositionend() {
            3 == this.composing && setTimeout((() => this.view.dispatch({
              effects: yM.of(!1)
            })), 20), this.composing = 0
          }
        }
      }),
      IM = "object" == typeof navigator && /Win/.test(navigator.platform),
      KM = OM.y.highest(SM.f.domEventHandlers({
        keydown(MM, rM) {
          let iM = rM.state.field(NM, !1);
          if (!iM || !iM.open || iM.open.disabled || iM.open.selected < 0 || MM.key.length > 1 || MM.ctrlKey && (!IM || !MM.altKey) || MM.metaKey) return !1;
          let OM = iM.open.options[iM.open.selected],
            SM = iM.active.find((MM => MM.source == OM.source)),
            jM = OM.completion.commitCharacters || SM.result.commitCharacters;
          return jM && jM.indexOf(MM.key) > -1 && AM(rM, OM), !1
        }
      })),
      qM = SM.f.baseTheme({
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
    class TM {
      constructor(MM, rM, iM, OM) {
        this.field = MM, this.line = rM, this.from = iM, this.to = OM
      }
    }
    class VM {
      constructor(MM, rM, iM) {
        this.field = MM, this.from = rM, this.to = iM
      }
      map(MM) {
        let rM = MM.mapPos(this.from, -1, OM.v.TrackDel),
          iM = MM.mapPos(this.to, 1, OM.v.TrackDel);
        return null == rM || null == iM ? null : new VM(this.field, rM, iM)
      }
    }
    class cM {
      constructor(MM, rM) {
        this.lines = MM, this.fieldPositions = rM
      }
      instantiate(MM, rM) {
        let iM = [],
          OM = [rM],
          SM = MM.doc.lineAt(rM),
          aM = /^\s*/.exec(SM.text)[0];
        for (let nM of this.lines) {
          if (iM.length) {
            let iM = aM,
              SM = /^\t*/.exec(nM)[0].length;
            for (let rM = 0; rM < SM; rM++) iM += MM.facet(jM.X);
            OM.push(rM + iM.length - SM), nM = iM + nM.slice(SM)
          }
          iM.push(nM), rM += nM.length + 1
        }
        let PM = this.fieldPositions.map((MM => new VM(MM.field, OM[MM.line] + MM.from, OM[MM.line] + MM.to)));
        return {
          text: iM,
          Ld: PM
        }
      }
      static parse(MM) {
        let rM, iM = [],
          OM = [],
          SM = [];
        for (let jM of MM.split(/\r\n?|\n/)) {
          for (; rM = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(jM);) {
            let MM = rM[1] ? +rM[1] : null,
              aM = rM[2] || rM[3] || "",
              PM = -1,
              nM = aM.replace(/\\[{}]/g, (MM => MM[1]));
            for (let rM = 0; rM < iM.length; rM++)(null != MM ? iM[rM].seq == MM : nM && iM[rM].name == nM) && (PM = rM);
            if (PM < 0) {
              let rM = 0;
              for (; rM < iM.length && (null == MM || null != iM[rM].seq && iM[rM].seq < MM);) rM++;
              iM.splice(rM, 0, {
                seq: MM,
                name: nM
              }), PM = rM;
              for (let MM of SM) MM.field >= PM && MM.field++
            }
            for (let iM of SM)
              if (iM.line == OM.length && iM.from > rM.index) {
                let MM = rM[2] ? 3 + (rM[1] || "").length : 2;
                iM.from -= MM, iM.to -= MM
              } SM.push(new TM(PM, OM.length, rM.index, rM.index + nM.length)), jM = jM.slice(0, rM.index) + aM + jM.slice(rM.index + rM[0].length)
          }
          jM = jM.replace(/\\([{}])/g, ((MM, rM, iM) => {
            for (let jM of SM) jM.line == OM.length && jM.from > iM && (jM.from--, jM.to--);
            return rM
          })), OM.push(jM)
        }
        return new cM(OM, SM)
      }
    }
    let Mr = SM.c.widget({
        widget: new class extends SM.q {
          toDOM() {
            let MM = document.createElement("span");
            return MM.className = "cm-snippetFieldPosition", MM
          }
          ignoreEvent() {
            return !1
          }
        }
      }),
      rr = SM.c.mark({
        class: "cm-snippetField"
      });
    class ir {
      constructor(MM, rM) {
        this.Ld = MM, this.active = rM, this.deco = SM.c.set(MM.map((MM => (MM.from == MM.to ? Mr : rr).range(MM.from, MM.to))), !0)
      }
      map(MM) {
        let rM = [];
        for (let iM of this.Ld) {
          let OM = iM.map(MM);
          if (!OM) return null;
          rM.push(OM)
        }
        return new ir(rM, this.active)
      }
      selectionInsideField(MM) {
        return MM.Ld.every((MM => this.Ld.some((rM => rM.field == this.active && rM.from <= MM.from && rM.to >= MM.to))))
      }
    }
    const Or = OM.G.define({
        map: (MM, rM) => MM && MM.map(rM)
      }),
      Sr = OM.G.define(),
      jr = OM.H.define({
        create: () => null,
        update(MM, rM) {
          for (let iM of rM.effects) {
            if (iM.is(Or)) return iM.value;
            if (iM.is(Sr) && MM) return new ir(MM.Ld, iM.value)
          }
          return MM && rM.docChanged && (MM = MM.map(rM.changes)), MM && rM.selection && !MM.selectionInsideField(rM.selection) && (MM = null), MM
        },
        provide: MM => SM.f.ij.from(MM, (MM => MM ? MM.deco : SM.c.none))
      });

    function ar(MM, rM) {
      return OM.l.create(MM.filter((MM => MM.field == rM)).map((MM => OM.l.range(MM.from, MM.to))))
    }

    function Pr(MM) {
      let rM = cM.parse(MM);
      return (MM, iM, SM, jM) => {
        let {
          text: aM,
          Ld: PM
        } = rM.instantiate(MM.state, SM), {
          main: nM
        } = MM.state.selection, QM = {
          changes: {
            from: SM,
            to: jM == nM.from ? nM.to : jM,
            insert: OM.K.of(aM)
          },
          scrollIntoView: !0,
          annotations: iM ? [HM.of(iM), OM.M.userEvent.of("input.complete")] : void 0
        };
        if (PM.length && (QM.selection = ar(PM, 0)), PM.some((MM => MM.field > 0))) {
          let rM = new ir(PM, 0),
            iM = QM.effects = [Or.of(rM)];
          void 0 === MM.state.field(jr, !1) && iM.push(OM.G.appendConfig.of([jr, Lr, Hr, qM]))
        }
        MM.dispatch(MM.state.update(QM))
      }
    }

    function nr(MM) {
      return rM => {
        let {
          state: iM,
          dispatch: OM
        } = rM, SM = iM.field(jr, !1);
        if (!SM || MM < 0 && 0 == SM.active) return !1;
        let jM = SM.active + MM,
          aM = MM > 0 && !SM.Ld.some((rM => rM.field == jM + MM));
        return OM(iM.update({
          selection: ar(SM.Ld, jM),
          effects: Or.of(aM ? null : new ir(SM.Ld, jM)),
          scrollIntoView: !0
        })), !0
      }
    }
    const Qr = [{
        key: "Tab",
        run: nr(1),
        shift: nr(-1)
      }, {
        key: "Escape",
        run: MM => {
          let {
            state: rM,
            dispatch: iM
          } = MM;
          return !!rM.field(jr, !1) && (iM(rM.update({
            effects: Or.of(null)
          })), !0)
        }
      }],
      zr = OM.s.define({
        combine: MM => MM.length ? MM[0] : Qr
      }),
      Lr = OM.y.highest(SM.X.compute([zr], (MM => MM.facet(zr))));

    function mr(MM, rM) {
      return {
        ...rM,
        apply: Pr(MM)
      }
    }
    const Hr = SM.f.domEventHandlers({
      mousedown(MM, rM) {
        let iM, OM = rM.state.field(jr, !1);
        if (!OM || null == (iM = rM.posAtCoords({
            x: MM.clientX,
            y: MM.clientY
          }))) return !1;
        let SM = OM.Ld.find((MM => MM.from <= iM && MM.to >= iM));
        return !(!SM || SM.field == OM.active) && (rM.dispatch({
          selection: ar(OM.Ld, SM.field),
          effects: Or.of(OM.Ld.some((MM => MM.field > SM.field)) ? new ir(OM.Ld, SM.field) : null),
          scrollIntoView: !0
        }), !0)
      }
    });
    const hr = {
        brackets: ["(", "[", "{", "'", '"'],
        before: ")]}:;>",
        stringPrefixes: []
      },
      Jr = OM.G.define({
        map(MM, rM) {
          let iM = rM.mapPos(MM, -1, OM.v.TrackAfter);
          return null == iM ? void 0 : iM
        }
      }),
      dr = new class extends OM.D {};
    dr.startSide = 1, dr.endSide = -1;
    const yr = OM.H.define({
      create: () => OM.A.empty,
      update(MM, rM) {
        if (MM = MM.map(rM.changes), rM.selection) {
          let iM = rM.state.doc.lineAt(rM.selection.main.head);
          MM = MM.update({
            filter: MM => MM >= iM.from && MM <= iM.to
          })
        }
        for (let iM of rM.effects) iM.is(Jr) && (MM = MM.update({
          add: [dr.range(iM.value, iM.value + 1)]
        }));
        return MM
      }
    });

    function lr() {
      return [er, yr]
    }
    const Er = "()[]{}<>\xab\xbb\xbb\xab\uff3b\uff3d\uff5b\uff5d";

    function Ur(MM) {
      for (let rM = 0; rM < 16; rM += 2)
        if (Er.charCodeAt(rM) == MM) return Er.charAt(rM + 1);
      return (0, OM.eb)(MM < 128 ? MM : MM + 1)
    }

    function Gr(MM, rM) {
      return MM.languageDataAt("closeBrackets", rM)[0] || hr
    }
    const Cr = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      er = SM.f.inputHandler.of(((MM, rM, iM, SM) => {
        if ((Cr ? MM.composing : MM.compositionStarted) || MM.state.readOnly) return !1;
        let jM = MM.state.selection.main;
        if (SM.length > 2 || 2 == SM.length && 1 == (0, OM.S)((0, OM.Q)(SM, 0)) || rM != jM.from || iM != jM.to) return !1;
        let aM = function(MM, rM) {
          let iM = Gr(MM, MM.selection.main.head),
            SM = iM.brackets || hr.brackets;
          for (let jM of SM) {
            let aM = Ur((0, OM.Q)(jM, 0));
            if (rM == jM) return aM == jM ? Rr(MM, jM, SM.indexOf(jM + jM + jM) > -1, iM) : gr(MM, jM, aM, iM.before || hr.before);
            if (rM == aM && wr(MM, MM.selection.main.from)) return ur(MM, jM, aM)
          }
          return null
        }(MM.state, SM);
        return !!aM && (MM.dispatch(aM), !0)
      })),
      br = [{
        key: "Backspace",
        run: MM => {
          let {
            state: rM,
            dispatch: iM
          } = MM;
          if (rM.readOnly) return !1;
          let SM = Gr(rM, rM.selection.main.head).brackets || hr.brackets,
            jM = null,
            aM = rM.changeByRange((MM => {
              if (MM.empty) {
                let iM = function(MM, rM) {
                  let iM = MM.sliceString(rM - 2, rM);
                  return (0, OM.S)((0, OM.Q)(iM, 0)) == iM.length ? iM : iM.slice(1)
                }(rM.doc, MM.head);
                for (let jM of SM)
                  if (jM == iM && tr(rM.doc, MM.head) == Ur((0, OM.Q)(jM, 0))) return {
                    changes: {
                      from: MM.head - jM.length,
                      to: MM.head + jM.length
                    },
                    range: OM.l.cursor(MM.head - jM.length)
                  }
              }
              return {
                range: jM = MM
              }
            }));
          return jM || iM(rM.update(aM, {
            scrollIntoView: !0,
            userEvent: "delete.backward"
          })), !jM
        }
      }];

    function wr(MM, rM) {
      let iM = !1;
      return MM.field(yr).between(0, MM.doc.length, (MM => {
        MM == rM && (iM = !0)
      })), iM
    }

    function tr(MM, rM) {
      let iM = MM.sliceString(rM, rM + 2);
      return iM.slice(0, (0, OM.S)((0, OM.Q)(iM, 0)))
    }

    function gr(MM, rM, iM, SM) {
      let jM = null,
        aM = MM.changeByRange((aM => {
          if (!aM.empty) return {
            changes: [{
              insert: rM,
              from: aM.from
            }, {
              insert: iM,
              from: aM.to
            }],
            effects: Jr.of(aM.to + rM.length),
            range: OM.l.range(aM.anchor + rM.length, aM.head + rM.length)
          };
          let PM = tr(MM.doc, aM.head);
          return !PM || /\s/.test(PM) || SM.indexOf(PM) > -1 ? {
            changes: {
              insert: rM + iM,
              from: aM.head
            },
            effects: Jr.of(aM.head + rM.length),
            range: OM.l.cursor(aM.head + rM.length)
          } : {
            range: jM = aM
          }
        }));
      return jM ? null : MM.update(aM, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function ur(MM, rM, iM) {
      let SM = null,
        jM = MM.changeByRange((rM => rM.empty && tr(MM.doc, rM.head) == iM ? {
          changes: {
            from: rM.head,
            to: rM.head + iM.length,
            insert: iM
          },
          range: OM.l.cursor(rM.head + iM.length)
        } : SM = {
          range: rM
        }));
      return SM ? null : MM.update(jM, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function Rr(MM, rM, iM, SM) {
      let aM = SM.stringPrefixes || hr.stringPrefixes,
        PM = null,
        nM = MM.changeByRange((SM => {
          if (!SM.empty) return {
            changes: [{
              insert: rM,
              from: SM.from
            }, {
              insert: rM,
              from: SM.to
            }],
            effects: Jr.of(SM.to + rM.length),
            range: OM.l.range(SM.anchor + rM.length, SM.head + rM.length)
          };
          let nM, QM = SM.head,
            zM = tr(MM.doc, QM);
          if (zM == rM) {
            if (pr(MM, QM)) return {
              changes: {
                insert: rM + rM,
                from: QM
              },
              effects: Jr.of(QM + rM.length),
              range: OM.l.cursor(QM + rM.length)
            };
            if (wr(MM, QM)) {
              let SM = iM && MM.sliceDoc(QM, QM + 3 * rM.length) == rM + rM + rM ? rM + rM + rM : rM;
              return {
                changes: {
                  from: QM,
                  to: QM + SM.length,
                  insert: SM
                },
                range: OM.l.cursor(QM + SM.length)
              }
            }
          } else {
            if (iM && MM.sliceDoc(QM - 2 * rM.length, QM) == rM + rM && (nM = Wr(MM, QM - 2 * rM.length, aM)) > -1 && pr(MM, nM)) return {
              changes: {
                insert: rM + rM + rM + rM,
                from: QM
              },
              effects: Jr.of(QM + rM.length),
              range: OM.l.cursor(QM + rM.length)
            };
            if (MM.charCategorizer(QM)(zM) != OM.h.Word && Wr(MM, QM, aM) > -1 && ! function(MM, rM, iM, OM) {
                let SM = (0, jM.kb)(MM).resolveInner(rM, -1),
                  aM = OM.reduce(((MM, rM) => Math.max(MM, rM.length)), 0);
                for (let jM = 0; jM < 5; jM++) {
                  let jM = MM.sliceDoc(SM.from, Math.min(SM.to, SM.from + iM.length + aM)),
                    PM = jM.indexOf(iM);
                  if (!PM || PM > -1 && OM.indexOf(jM.slice(0, PM)) > -1) {
                    let rM = SM.firstChild;
                    for (; rM && rM.from == SM.from && rM.to - rM.from > iM.length + PM;) {
                      if (MM.sliceDoc(rM.to - iM.length, rM.to) == iM) return !1;
                      rM = rM.firstChild
                    }
                    return !0
                  }
                  let nM = SM.to == rM && SM.parent;
                  if (!nM) break;
                  SM = nM
                }
                return !1
              }(MM, QM, rM, aM)) return {
              changes: {
                insert: rM + rM,
                from: QM
              },
              effects: Jr.of(QM + rM.length),
              range: OM.l.cursor(QM + rM.length)
            }
          }
          return {
            range: PM = SM
          }
        }));
      return PM ? null : MM.update(nM, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function pr(MM, rM) {
      let iM = (0, jM.kb)(MM).resolveInner(rM + 1);
      return iM.parent && iM.from == rM
    }

    function Wr(MM, rM, iM) {
      let SM = MM.charCategorizer(rM);
      if (SM(MM.sliceDoc(rM - 1, rM)) != OM.h.Word) return rM;
      for (let jM of iM) {
        let iM = rM - jM.length;
        if (MM.sliceDoc(iM, rM) == jM && SM(MM.sliceDoc(iM - 1, iM)) != OM.h.Word) return iM
      }
      return -1
    }

    function sr() {
      let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [KM, NM, GM.of(MM), XM, kr, qM]
    }
    const Dr = [{
        key: "Ctrl-Space",
        run: FM
      }, {
        mac: "Alt-`",
        run: FM
      }, {
        mac: "Alt-i",
        run: FM
      }, {
        key: "Escape",
        run: MM => {
          let rM = MM.state.field(NM, !1);
          return !(!rM || !rM.active.some((MM => 0 != MM.state))) && (MM.dispatch({
            effects: lM.of(null)
          }), !0)
        }
      }, {
        key: "ArrowDown",
        run: vM(!0)
      }, {
        key: "ArrowUp",
        run: vM(!1)
      }, {
        key: "PageDown",
        run: vM(!0, "page")
      }, {
        key: "PageUp",
        run: vM(!1, "page")
      }, {
        key: "Enter",
        run: MM => {
          let rM = MM.state.field(NM, !1);
          return !(MM.state.readOnly || !rM || !rM.open || rM.open.selected < 0 || rM.open.disabled || Date.now() - rM.open.timestamp < MM.state.facet(GM).interactionDelay) && AM(MM, rM.open.options[rM.open.selected])
        }
      }],
      kr = OM.y.highest(SM.X.computeN([GM], (MM => MM.facet(GM).defaultKeymap ? [Dr] : [])))
  },
  44114: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => QM,
      e: () => mM,
      h: () => zM,
      i: () => LM
    });
    var OM = iM(43972);
    class SM {
      constructor(MM, rM, iM, OM) {
        this.origin = MM, this.changes = rM, this.effects = iM, this.clientID = OM
      }
    }
    class jM {
      constructor(MM, rM) {
        this.version = MM, this.unconfirmed = rM
      }
    }
    const aM = OM.s.define({
        combine(MM) {
          let rM = (0, OM.V)(MM, {
            startVersion: 0,
            clientID: null,
            sharedEffects: () => []
          }, {
            generatedID: MM => MM
          });
          return null == rM.clientID && (rM.clientID = MM.length && MM[0].generatedID || ""), rM
        }
      }),
      PM = OM.e.define(),
      nM = OM.H.define({
        create: MM => new jM(MM.facet(aM).startVersion, []),
        update(MM, rM) {
          let iM = rM.annotation(PM);
          if (iM) return iM;
          let {
            sharedEffects: OM,
            clientID: nM
          } = rM.startState.facet(aM), QM = OM(rM);
          return QM.length || !rM.changes.empty ? new jM(MM.version, MM.unconfirmed.concat(new SM(rM, rM.changes, QM, nM))) : MM
        }
      });

    function QM() {
      let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [nM, aM.of(Object.assign({
        generatedID: Math.floor(1e9 * Math.random()).toString(36)
      }, MM))]
    }

    function zM(MM, rM) {
      let {
        version: iM,
        unconfirmed: QM
      } = MM.field(nM), {
        clientID: zM
      } = MM.facet(aM);
      iM += rM.length;
      let LM = [],
        mM = null,
        HM = 0;
      for (let SM of rM) {
        let MM = HM < QM.length ? QM[HM] : null;
        MM && MM.clientID == SM.clientID ? (mM && (mM = mM.map(MM.changes, !0)), LM = OM.G.mapEffects(LM, SM.changes), HM++) : (LM = OM.G.mapEffects(LM, SM.changes), SM.effects && (LM = LM.concat(SM.effects)), mM = mM ? mM.compose(SM.changes) : SM.changes)
      }
      if (HM && (QM = QM.slice(HM)), QM.length && (mM && (QM = QM.map((MM => {
          let rM = MM.changes.map(mM);
          return mM = mM.map(MM.changes, !0), new SM(MM.origin, rM, OM.G.mapEffects(MM.effects, mM), zM)
        }))), LM.length)) {
        let MM = QM.reduce(((MM, rM) => MM.compose(rM.changes)), OM.ChangeSet.empty(QM[0].changes.length));
        LM = OM.G.mapEffects(LM, MM)
      }
      return mM ? MM.update({
        changes: mM,
        effects: LM,
        annotations: [OM.M.addToHistory.of(!1), OM.M.remote.of(!0), PM.of(new jM(iM, QM))],
        filter: !1
      }) : MM.update({
        annotations: [PM.of(new jM(iM, QM))]
      })
    }

    function LM(MM) {
      return MM.field(nM).unconfirmed
    }

    function mM(MM) {
      return MM.field(nM).version
    }
  },
  44014: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => Jr
    });
    var OM = iM(43998);
    class SM {
      constructor(MM, rM, iM, OM, SM, jM, aM, PM, nM) {
        let QM = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          zM = arguments.length > 10 ? arguments[10] : void 0;
        this.p = MM, this.stack = rM, this.state = iM, this.reducePos = OM, this.pos = SM, this.score = jM, this.buffer = aM, this.bufferBase = PM, this.curContext = nM, this.lookAhead = QM, this.parent = zM
      }
      toString() {
        return `[${this.stack.filter(((MM,rM)=>rM%3==0)).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`
      }
      static start(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          OM = MM.parser.context;
        return new SM(MM, [], rM, iM, iM, 0, [], 0, OM ? new jM(OM, OM.start) : null, 0, null)
      }
      get context() {
        return this.curContext ? this.curContext.context : null
      }
      pushState(MM, rM) {
        this.stack.push(this.state, rM, this.bufferBase + this.buffer.length), this.state = MM
      }
      reduce(MM) {
        var rM;
        let iM = MM >> 19,
          OM = 65535 & MM,
          {
            parser: SM
          } = this.p,
          jM = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos),
          aM = SM.dynamicPrecedence(OM);
        if (aM && (this.score += aM), 0 == iM) return this.pushState(SM.getGoto(this.state, OM, !0), this.reducePos), OM < SM.minRepeatTerm && this.storeNode(OM, this.reducePos, this.reducePos, jM ? 8 : 4, !0), void this.reduceContext(OM, this.reducePos);
        let PM = this.stack.length - 3 * (iM - 1) - (262144 & MM ? 6 : 0),
          nM = PM ? this.stack[PM - 2] : this.p.Ld[0].from,
          QM = this.reducePos - nM;
        QM >= 2e3 && !(null === (rM = this.p.parser.nodeSet.types[OM]) || void 0 === rM ? void 0 : rM.isAnonymous) && (nM == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = QM) : this.p.lastBigReductionSize < QM && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = nM, this.p.lastBigReductionSize = QM));
        let zM = PM ? this.stack[PM - 1] : 0,
          LM = this.bufferBase + this.buffer.length - zM;
        if (OM < SM.minRepeatTerm || 131072 & MM) {
          let MM = SM.stateFlag(this.state, 1) ? this.pos : this.reducePos;
          this.storeNode(OM, nM, MM, LM + 4, !0)
        }
        if (262144 & MM) this.state = this.stack[PM];
        else {
          let MM = this.stack[PM - 3];
          this.state = SM.getGoto(MM, OM, !0)
        }
        for (; this.stack.length > PM;) this.stack.pop();
        this.reduceContext(OM, nM)
      }
      storeNode(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
          SM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (0 == MM && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
          let MM = this,
            OM = this.buffer.length;
          if (0 == OM && MM.parent && (OM = MM.bufferBase - MM.parent.bufferBase, MM = MM.parent), OM > 0 && 0 == MM.buffer[OM - 4] && MM.buffer[OM - 1] > -1) {
            if (rM == iM) return;
            if (MM.buffer[OM - 2] >= rM) return void(MM.buffer[OM - 2] = iM)
          }
        }
        if (SM && this.pos != iM) {
          let SM = this.buffer.length;
          if (SM > 0 && (0 != this.buffer[SM - 4] || this.buffer[SM - 1] < 0)) {
            let MM = !1;
            for (let rM = SM; rM > 0 && this.buffer[rM - 2] > iM; rM -= 4)
              if (this.buffer[rM - 1] >= 0) {
                MM = !0;
                break
              } if (MM)
              for (; SM > 0 && this.buffer[SM - 2] > iM;) this.buffer[SM] = this.buffer[SM - 4], this.buffer[SM + 1] = this.buffer[SM - 3], this.buffer[SM + 2] = this.buffer[SM - 2], this.buffer[SM + 3] = this.buffer[SM - 1], SM -= 4, OM > 4 && (OM -= 4)
          }
          this.buffer[SM] = MM, this.buffer[SM + 1] = rM, this.buffer[SM + 2] = iM, this.buffer[SM + 3] = OM
        } else this.buffer.push(MM, rM, iM, OM)
      }
      shift(MM, rM, iM, OM) {
        if (131072 & MM) this.pushState(65535 & MM, this.pos);
        else if (0 == (262144 & MM)) {
          let SM = MM,
            {
              parser: jM
            } = this.p;
          this.pos = OM;
          let aM = jM.stateFlag(SM, 1);
          !aM && (OM > iM || rM <= jM.maxNode) && (this.reducePos = OM), this.pushState(SM, aM ? iM : Math.min(iM, this.reducePos)), this.shiftContext(rM, iM), rM <= jM.maxNode && this.buffer.push(rM, iM, OM, 4)
        } else this.pos = OM, this.shiftContext(rM, iM), rM <= this.p.parser.maxNode && this.buffer.push(rM, iM, OM, 4)
      }
      apply(MM, rM, iM, OM) {
        65536 & MM ? this.reduce(MM) : this.shift(MM, rM, iM, OM)
      }
      useNode(MM, rM) {
        let iM = this.p.reused.length - 1;
        (iM < 0 || this.p.reused[iM] != MM) && (this.p.reused.push(MM), iM++);
        let OM = this.pos;
        this.reducePos = this.pos = OM + MM.length, this.pushState(rM, OM), this.buffer.push(iM, OM, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, MM, this, this.p.stream.reset(this.pos - MM.length)))
      }
      split() {
        let MM = this,
          rM = MM.buffer.length;
        for (; rM > 0 && MM.buffer[rM - 2] > MM.reducePos;) rM -= 4;
        let iM = MM.buffer.slice(rM),
          OM = MM.bufferBase + rM;
        for (; MM && OM == MM.bufferBase;) MM = MM.parent;
        return new SM(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, iM, OM, this.curContext, this.lookAhead, MM)
      }
      recoverByDelete(MM, rM) {
        let iM = MM <= this.p.parser.maxNode;
        iM && this.storeNode(MM, this.pos, rM, 4), this.storeNode(0, this.pos, rM, iM ? 8 : 4), this.pos = this.reducePos = rM, this.score -= 190
      }
      canShift(MM) {
        for (let rM = new aM(this);;) {
          let iM = this.p.parser.stateSlot(rM.state, 4) || this.p.parser.hasAction(rM.state, MM);
          if (0 == iM) return !1;
          if (0 == (65536 & iM)) return !0;
          rM.reduce(iM)
        }
      }
      recoverByInsert(MM) {
        if (this.stack.length >= 300) return [];
        let rM = this.p.parser.nextStates(this.state);
        if (rM.length > 8 || this.stack.length >= 120) {
          let iM = [];
          for (let OM, SM = 0; SM < rM.length; SM += 2)(OM = rM[SM + 1]) != this.state && this.p.parser.hasAction(OM, MM) && iM.push(rM[SM], OM);
          if (this.stack.length < 120)
            for (let MM = 0; iM.length < 8 && MM < rM.length; MM += 2) {
              let OM = rM[MM + 1];
              iM.some(((MM, rM) => 1 & rM && MM == OM)) || iM.push(rM[MM], OM)
            }
          rM = iM
        }
        let iM = [];
        for (let OM = 0; OM < rM.length && iM.length < 4; OM += 2) {
          let MM = rM[OM + 1];
          if (MM == this.state) continue;
          let SM = this.split();
          SM.pushState(MM, this.pos), SM.storeNode(0, SM.pos, SM.pos, 4, !0), SM.shiftContext(rM[OM], this.pos), SM.reducePos = this.pos, SM.score -= 200, iM.push(SM)
        }
        return iM
      }
      forceReduce() {
        let {
          parser: MM
        } = this.p, rM = MM.stateSlot(this.state, 5);
        if (0 == (65536 & rM)) return !1;
        if (!MM.validAction(this.state, rM)) {
          let iM = rM >> 19,
            OM = 65535 & rM,
            SM = this.stack.length - 3 * iM;
          if (SM < 0 || MM.getGoto(this.stack[SM], OM, !1) < 0) {
            let MM = this.findForcedReduction();
            if (null == MM) return !1;
            rM = MM
          }
          this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100
        }
        return this.reducePos = this.pos, this.reduce(rM), !0
      }
      findForcedReduction() {
        let {
          parser: MM
        } = this.p, rM = [], iM = (OM, SM) => {
          if (!rM.includes(OM)) return rM.push(OM), MM.allActions(OM, (rM => {
            if (393216 & rM);
            else if (65536 & rM) {
              let iM = (rM >> 19) - SM;
              if (iM > 1) {
                let OM = 65535 & rM,
                  SM = this.stack.length - 3 * iM;
                if (SM >= 0 && MM.getGoto(this.stack[SM], OM, !1) >= 0) return iM << 19 | 65536 | OM
              }
            } else {
              let MM = iM(rM, SM + 1);
              if (null != MM) return MM
            }
          }))
        };
        return iM(this.state, 0)
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
          parser: MM
        } = this.p;
        return 65535 == MM.data[MM.stateSlot(this.state, 1)] && !MM.stateSlot(this.state, 4)
      }
      restart() {
        this.storeNode(0, this.pos, this.pos, 4, !0), this.state = this.stack[0], this.stack.length = 0
      }
      sameState(MM) {
        if (this.state != MM.state || this.stack.length != MM.stack.length) return !1;
        for (let rM = 0; rM < this.stack.length; rM += 3)
          if (this.stack[rM] != MM.stack[rM]) return !1;
        return !0
      }
      get parser() {
        return this.p.parser
      }
      dialectEnabled(MM) {
        return this.p.parser.dialect.flags[MM]
      }
      shiftContext(MM, rM) {
        this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, MM, this, this.p.stream.reset(rM)))
      }
      reduceContext(MM, rM) {
        this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, MM, this, this.p.stream.reset(rM)))
      }
      emitContext() {
        let MM = this.buffer.length - 1;
        (MM < 0 || -3 != this.buffer[MM]) && this.buffer.push(this.curContext.hash, this.pos, this.pos, -3)
      }
      emitLookAhead() {
        let MM = this.buffer.length - 1;
        (MM < 0 || -4 != this.buffer[MM]) && this.buffer.push(this.lookAhead, this.pos, this.pos, -4)
      }
      updateContext(MM) {
        if (MM != this.curContext.context) {
          let rM = new jM(this.curContext.tracker, MM);
          rM.hash != this.curContext.hash && this.emitContext(), this.curContext = rM
        }
      }
      setLookAhead(MM) {
        return !(MM <= this.lookAhead) && (this.emitLookAhead(), this.lookAhead = MM, !0)
      }
      close() {
        this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead()
      }
    }
    class jM {
      constructor(MM, rM) {
        this.tracker = MM, this.context = rM, this.hash = MM.strict ? MM.hash(rM) : 0
      }
    }
    class aM {
      constructor(MM) {
        this.start = MM, this.state = MM.state, this.stack = MM.stack, this.base = this.stack.length
      }
      reduce(MM) {
        let rM = 65535 & MM,
          iM = MM >> 19;
        0 == iM ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= 3 * (iM - 1);
        let OM = this.start.p.parser.getGoto(this.stack[this.base - 3], rM, !0);
        this.state = OM
      }
    }
    class PM {
      constructor(MM, rM, iM) {
        this.stack = MM, this.pos = rM, this.index = iM, this.buffer = MM.buffer, 0 == this.index && this.maybeNext()
      }
      static create(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : MM.bufferBase + MM.buffer.length;
        return new PM(MM, rM, rM - MM.bufferBase)
      }
      maybeNext() {
        let MM = this.stack.parent;
        null != MM && (this.index = this.stack.bufferBase - MM.bufferBase, this.stack = MM, this.buffer = MM.buffer)
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
        return new PM(this.stack, this.pos, this.index)
      }
    }

    function nM(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uint16Array;
      if ("string" != typeof MM) return MM;
      let iM = null;
      for (let OM = 0, SM = 0; OM < MM.length;) {
        let jM = 0;
        for (;;) {
          let rM = MM.charCodeAt(OM++),
            iM = !1;
          if (126 == rM) {
            jM = 65535;
            break
          }
          rM >= 92 && rM--, rM >= 34 && rM--;
          let SM = rM - 32;
          if (SM >= 46 && (SM -= 46, iM = !0), jM += SM, iM) break;
          jM *= 46
        }
        iM ? iM[SM++] = jM : iM = new rM(jM)
      }
      return iM
    }
    class QM {
      constructor() {
        this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0
      }
    }
    const zM = new QM;
    class LM {
      constructor(MM, rM) {
        this.input = MM, this.Ld = rM, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = zM, this.rangeIndex = 0, this.pos = this.chunkPos = rM[0].from, this.range = rM[0], this.end = rM[rM.length - 1].to, this.readNext()
      }
      resolveOffset(MM, rM) {
        let iM = this.range,
          OM = this.rangeIndex,
          SM = this.pos + MM;
        for (; SM < iM.from;) {
          if (!OM) return null;
          let MM = this.Ld[--OM];
          SM -= iM.from - MM.to, iM = MM
        }
        for (; rM < 0 ? SM > iM.to : SM >= iM.to;) {
          if (OM == this.Ld.length - 1) return null;
          let MM = this.Ld[++OM];
          SM += MM.from - iM.to, iM = MM
        }
        return SM
      }
      clipPos(MM) {
        if (MM >= this.range.from && MM < this.range.to) return MM;
        for (let rM of this.Ld)
          if (rM.to > MM) return Math.max(MM, rM.from);
        return this.end
      }
      peek(MM) {
        let rM, iM, OM = this.chunkOff + MM;
        if (OM >= 0 && OM < this.chunk.length) rM = this.pos + MM, iM = this.chunk.charCodeAt(OM);
        else {
          let OM = this.resolveOffset(MM, 1);
          if (null == OM) return -1;
          if (rM = OM, rM >= this.chunk2Pos && rM < this.chunk2Pos + this.chunk2.length) iM = this.chunk2.charCodeAt(rM - this.chunk2Pos);
          else {
            let MM = this.rangeIndex,
              OM = this.range;
            for (; OM.to <= rM;) OM = this.Ld[++MM];
            this.chunk2 = this.input.chunk(this.chunk2Pos = rM), rM + this.chunk2.length > OM.to && (this.chunk2 = this.chunk2.slice(0, OM.to - rM)), iM = this.chunk2.charCodeAt(0)
          }
        }
        return rM >= this.token.lookAhead && (this.token.lookAhead = rM + 1), iM
      }
      acceptToken(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          iM = rM ? this.resolveOffset(rM, -1) : this.pos;
        if (null == iM || iM < this.token.start) throw new RangeError("Token end out of bounds");
        this.token.value = MM, this.token.end = iM
      }
      acceptTokenTo(MM, rM) {
        this.token.value = MM, this.token.end = rM
      }
      getChunk() {
        if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
          let {
            chunk: MM,
            chunkPos: rM
          } = this;
          this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = MM, this.chunk2Pos = rM, this.chunkOff = this.pos - this.chunkPos
        } else {
          this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
          let MM = this.input.chunk(this.pos),
            rM = this.pos + MM.length;
          this.chunk = rM > this.range.to ? MM.slice(0, this.range.to - this.pos) : MM, this.chunkPos = this.pos, this.chunkOff = 0
        }
      }
      readNext() {
        return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff)
      }
      advance() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        for (this.chunkOff += MM; this.pos + MM >= this.range.to;) {
          if (this.rangeIndex == this.Ld.length - 1) return this.setDone();
          MM -= this.range.to - this.pos, this.range = this.Ld[++this.rangeIndex], this.pos = this.range.from
        }
        return this.pos += MM, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext()
      }
      setDone() {
        return this.pos = this.chunkPos = this.end, this.range = this.Ld[this.rangeIndex = this.Ld.length - 1], this.chunk = "", this.next = -1
      }
      reset(MM, rM) {
        if (rM ? (this.token = rM, rM.start = MM, rM.lookAhead = MM + 1, rM.value = rM.extended = -1) : this.token = zM, this.pos != MM) {
          if (this.pos = MM, MM == this.end) return this.setDone(), this;
          for (; MM < this.range.from;) this.range = this.Ld[--this.rangeIndex];
          for (; MM >= this.range.to;) this.range = this.Ld[++this.rangeIndex];
          MM >= this.chunkPos && MM < this.chunkPos + this.chunk.length ? this.chunkOff = MM - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext()
        }
        return this
      }
      read(MM, rM) {
        if (MM >= this.chunkPos && rM <= this.chunkPos + this.chunk.length) return this.chunk.slice(MM - this.chunkPos, rM - this.chunkPos);
        if (MM >= this.chunk2Pos && rM <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(MM - this.chunk2Pos, rM - this.chunk2Pos);
        if (MM >= this.range.from && rM <= this.range.to) return this.input.read(MM, rM);
        let iM = "";
        for (let OM of this.Ld) {
          if (OM.from >= rM) break;
          OM.to > MM && (iM += this.input.read(Math.max(OM.from, MM), Math.min(OM.to, rM)))
        }
        return iM
      }
    }
    class mM {
      constructor(MM, rM) {
        this.data = MM, this.id = rM
      }
      token(MM, rM) {
        let {
          parser: iM
        } = rM.p;
        JM(this.data, MM, rM, this.id, iM.data, iM.tokenPrecTable)
      }
    }
    mM.prototype.contextual = mM.prototype.fallback = mM.prototype.extend = !1;
    class HM {
      constructor(MM, rM, iM) {
        this.precTable = rM, this.elseToken = iM, this.data = "string" == typeof MM ? nM(MM) : MM
      }
      token(MM, rM) {
        let iM = MM.pos,
          OM = 0;
        for (;;) {
          let iM = MM.next < 0,
            SM = MM.resolveOffset(1, 1);
          if (JM(this.data, MM, rM, 0, this.data, this.precTable), MM.token.value > -1) break;
          if (null == this.elseToken) return;
          if (iM || OM++, null == SM) break;
          MM.reset(SM, MM.token)
        }
        OM && (MM.reset(iM, MM.token), MM.acceptToken(this.elseToken, OM))
      }
    }
    HM.prototype.contextual = mM.prototype.fallback = mM.prototype.extend = !1;
    class hM {
      constructor(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.token = MM, this.contextual = !!rM.contextual, this.fallback = !!rM.fallback, this.extend = !!rM.extend
      }
    }

    function JM(MM, rM, iM, OM, SM, jM) {
      let aM = 0,
        PM = 1 << OM,
        {
          dialect: nM
        } = iM.p.parser;
      MM: for (; 0 != (PM & MM[aM]);) {
        let iM = MM[aM + 1];
        for (let LM = aM + 3; LM < iM; LM += 2)
          if ((MM[LM + 1] & PM) > 0) {
            let iM = MM[LM];
            if (nM.allows(iM) && (-1 == rM.token.value || rM.token.value == iM || yM(iM, rM.token.value, SM, jM))) {
              rM.acceptToken(iM);
              break
            }
          } let OM = rM.next,
          QM = 0,
          zM = MM[aM + 2];
        if (!(rM.next < 0 && zM > QM && 65535 == MM[iM + 3 * zM - 3])) {
          for (; QM < zM;) {
            let SM = QM + zM >> 1,
              jM = iM + SM + (SM << 1),
              PM = MM[jM],
              nM = MM[jM + 1] || 65536;
            if (OM < PM) zM = SM;
            else {
              if (!(OM >= nM)) {
                aM = MM[jM + 2], rM.advance();
                continue MM
              }
              QM = SM + 1
            }
          }
          break
        }
        aM = MM[iM + 3 * zM - 1]
      }
    }

    function dM(MM, rM, iM) {
      for (let OM, SM = rM; 65535 != (OM = MM[SM]); SM++)
        if (OM == iM) return SM - rM;
      return -1
    }

    function yM(MM, rM, iM, OM) {
      let SM = dM(iM, OM, rM);
      return SM < 0 || dM(iM, OM, MM) < SM
    }
    const lM = "undefined" != typeof process && {
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
    let EM = null;

    function UM(MM, rM, iM) {
      let SM = MM.cursor(OM.c.IncludeAnonymous);
      for (SM.moveTo(rM);;)
        if (!(iM < 0 ? SM.childBefore(rM) : SM.childAfter(rM)))
          for (;;) {
            if ((iM < 0 ? SM.to < rM : SM.from > rM) && !SM.type.isError) return iM < 0 ? Math.max(0, Math.min(SM.to - 1, rM - 25)) : Math.min(MM.length, Math.max(SM.from + 1, rM + 25));
            if (iM < 0 ? SM.prevSibling() : SM.nextSibling()) break;
            if (!SM.parent()) return iM < 0 ? 0 : MM.length
          }
    }
    class GM {
      constructor(MM, rM) {
        this.fragments = MM, this.nodeSet = rM, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment()
      }
      nextFragment() {
        let MM = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
        if (MM) {
          for (this.safeFrom = MM.openStart ? UM(MM.tree, MM.from + MM.offset, 1) - MM.offset : MM.from, this.safeTo = MM.openEnd ? UM(MM.tree, MM.to + MM.offset, -1) - MM.offset : MM.to; this.trees.length;) this.trees.pop(), this.start.pop(), this.index.pop();
          this.trees.push(MM.tree), this.start.push(-MM.offset), this.index.push(0), this.nextStart = this.safeFrom
        } else this.nextStart = 1e9
      }
      nodeAt(MM) {
        if (MM < this.nextStart) return null;
        for (; this.fragment && this.safeTo <= MM;) this.nextFragment();
        if (!this.fragment) return null;
        for (;;) {
          let rM = this.trees.length - 1;
          if (rM < 0) return this.nextFragment(), null;
          let iM = this.trees[rM],
            SM = this.index[rM];
          if (SM == iM.children.length) {
            this.trees.pop(), this.start.pop(), this.index.pop();
            continue
          }
          let jM = iM.children[SM],
            aM = this.start[rM] + iM.positions[SM];
          if (aM > MM) return this.nextStart = aM, null;
          if (jM instanceof OM.v) {
            if (aM == MM) {
              if (aM < this.safeFrom) return null;
              let MM = aM + jM.length;
              if (MM <= this.safeTo) {
                let rM = jM.prop(OM.f.lookAhead);
                if (!rM || MM + rM < this.fragment.to) return jM
              }
            }
            this.index[rM]++, aM + jM.length >= Math.max(this.safeFrom, MM) && (this.trees.push(jM), this.start.push(aM), this.index.push(0))
          } else this.index[rM]++, this.nextStart = aM + jM.length
        }
      }
    }
    class CM {
      constructor(MM, rM) {
        this.stream = rM, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = MM.tokenizers.map((MM => new QM))
      }
      getActions(MM) {
        let rM = 0,
          iM = null,
          {
            parser: OM
          } = MM.p,
          {
            tokenizers: SM
          } = OM,
          jM = OM.stateSlot(MM.state, 3),
          aM = MM.curContext ? MM.curContext.hash : 0,
          PM = 0;
        for (let nM = 0; nM < SM.length; nM++) {
          if (0 == (1 << nM & jM)) continue;
          let OM = SM[nM],
            QM = this.tokens[nM];
          if ((!iM || OM.fallback) && ((OM.contextual || QM.start != MM.pos || QM.mask != jM || QM.context != aM) && (this.updateCachedToken(QM, OM, MM), QM.mask = jM, QM.context = aM), QM.lookAhead > QM.end + 25 && (PM = Math.max(QM.lookAhead, PM)), 0 != QM.value)) {
            let SM = rM;
            if (QM.extended > -1 && (rM = this.addActions(MM, QM.extended, QM.end, rM)), rM = this.addActions(MM, QM.value, QM.end, rM), !OM.extend && (iM = QM, rM > SM)) break
          }
        }
        for (; this.actions.length > rM;) this.actions.pop();
        return PM && MM.setLookAhead(PM), iM || MM.pos != this.stream.end || (iM = new QM, iM.value = MM.p.parser.eofTerm, iM.start = iM.end = MM.pos, rM = this.addActions(MM, iM.value, iM.end, rM)), this.mainToken = iM, this.actions
      }
      getMainToken(MM) {
        if (this.mainToken) return this.mainToken;
        let rM = new QM,
          {
            pos: iM,
            p: OM
          } = MM;
        return rM.start = iM, rM.end = Math.min(iM + 1, OM.stream.end), rM.value = iM == OM.stream.end ? OM.parser.eofTerm : 0, rM
      }
      updateCachedToken(MM, rM, iM) {
        let OM = this.stream.clipPos(iM.pos);
        if (rM.token(this.stream.reset(OM, MM), iM), MM.value > -1) {
          let {
            parser: rM
          } = iM.p;
          for (let OM = 0; OM < rM.specialized.length; OM++)
            if (rM.specialized[OM] == MM.value) {
              let SM = rM.specializers[OM](this.stream.read(MM.start, MM.end), iM);
              if (SM >= 0 && iM.p.parser.dialect.allows(SM >> 1)) {
                0 == (1 & SM) ? MM.value = SM >> 1 : MM.extended = SM >> 1;
                break
              }
            }
        } else MM.value = 0, MM.end = this.stream.clipPos(OM + 1)
      }
      putAction(MM, rM, iM, OM) {
        for (let SM = 0; SM < OM; SM += 3)
          if (this.actions[SM] == MM) return OM;
        return this.actions[OM++] = MM, this.actions[OM++] = rM, this.actions[OM++] = iM, OM
      }
      addActions(MM, rM, iM, OM) {
        let {
          state: SM
        } = MM, {
          parser: jM
        } = MM.p, {
          data: aM
        } = jM;
        for (let PM = 0; PM < 2; PM++)
          for (let MM = jM.stateSlot(SM, PM ? 2 : 1);; MM += 3) {
            if (65535 == aM[MM]) {
              if (1 != aM[MM + 1]) {
                0 == OM && 2 == aM[MM + 1] && (OM = this.putAction(uM(aM, MM + 2), rM, iM, OM));
                break
              }
              MM = uM(aM, MM + 2)
            }
            aM[MM] == rM && (OM = this.putAction(uM(aM, MM + 1), rM, iM, OM))
          }
        return OM
      }
    }
    class eM {
      constructor(MM, rM, iM, OM) {
        this.parser = MM, this.input = rM, this.Ld = OM, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new LM(rM, OM), this.tokens = new CM(MM, this.stream), this.topTerm = MM.top[1];
        let {
          from: jM
        } = OM[0];
        this.stacks = [SM.start(this, MM.top[0], jM)], this.fragments = iM.length && this.stream.end - jM > 4 * MM.bufferLength ? new GM(iM, MM.nodeSet) : null
      }
      get parsedPos() {
        return this.minStackPos
      }
      advance() {
        let MM, rM, iM = this.stacks,
          OM = this.minStackPos,
          SM = this.stacks = [];
        if (this.bigReductionCount > 300 && 1 == iM.length) {
          let [MM] = iM;
          for (; MM.forceReduce() && MM.stack.length && MM.stack[MM.stack.length - 2] >= this.lastBigReductionStart;);
          this.bigReductionCount = this.lastBigReductionSize = 0
        }
        for (let jM = 0; jM < iM.length; jM++) {
          let aM = iM[jM];
          for (;;) {
            if (this.tokens.mainToken = null, aM.pos > OM) SM.push(aM);
            else {
              if (this.advanceStack(aM, SM, iM)) continue;
              {
                MM || (MM = [], rM = []), MM.push(aM);
                let iM = this.tokens.getMainToken(aM);
                rM.push(iM.value, iM.end)
              }
            }
            break
          }
        }
        if (!SM.length) {
          let rM = MM && function(MM) {
            let rM = null;
            for (let iM of MM) {
              let MM = iM.p.stoppedAt;
              (iM.pos == iM.p.stream.end || null != MM && iM.pos > MM) && iM.p.parser.stateFlag(iM.state, 2) && (!rM || rM.score < iM.score) && (rM = iM)
            }
            return rM
          }(MM);
          if (rM) return lM && console.log("Finish with " + this.stackID(rM)), this.stackToTree(rM);
          if (this.parser.strict) throw lM && MM && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + OM);
          this.recovering || (this.recovering = 5)
        }
        if (this.recovering && MM) {
          let iM = null != this.stoppedAt && MM[0].pos > this.stoppedAt ? MM[0] : this.runRecovery(MM, rM, SM);
          if (iM) return lM && console.log("Force-finish " + this.stackID(iM)), this.stackToTree(iM.forceAll())
        }
        if (this.recovering) {
          let MM = 1 == this.recovering ? 1 : 3 * this.recovering;
          if (SM.length > MM)
            for (SM.sort(((MM, rM) => rM.score - MM.score)); SM.length > MM;) SM.pop();
          SM.some((MM => MM.reducePos > OM)) && this.recovering--
        } else if (SM.length > 1) {
          MM: for (let MM = 0; MM < SM.length - 1; MM++) {
            let rM = SM[MM];
            for (let iM = MM + 1; iM < SM.length; iM++) {
              let OM = SM[iM];
              if (rM.sameState(OM) || rM.buffer.length > 500 && OM.buffer.length > 500) {
                if (!((rM.score - OM.score || rM.buffer.length - OM.buffer.length) > 0)) {
                  SM.splice(MM--, 1);
                  continue MM
                }
                SM.splice(iM--, 1)
              }
            }
          }
          SM.length > 12 && (SM.sort(((MM, rM) => rM.score - MM.score)), SM.splice(12, SM.length - 12))
        }
        this.minStackPos = SM[0].pos;
        for (let jM = 1; jM < SM.length; jM++) SM[jM].pos < this.minStackPos && (this.minStackPos = SM[jM].pos);
        return null
      }
      stopAt(MM) {
        if (null != this.stoppedAt && this.stoppedAt < MM) throw new RangeError("Can't move stoppedAt forward");
        this.stoppedAt = MM
      }
      advanceStack(MM, rM, iM) {
        let SM = MM.pos,
          {
            parser: jM
          } = this,
          aM = lM ? this.stackID(MM) + " -> " : "";
        if (null != this.stoppedAt && SM > this.stoppedAt) return MM.forceReduce() ? MM : null;
        if (this.fragments) {
          let rM = MM.curContext && MM.curContext.tracker.strict,
            iM = rM ? MM.curContext.hash : 0;
          for (let PM = this.fragments.nodeAt(SM); PM;) {
            let SM = this.parser.nodeSet.types[PM.type.id] == PM.type ? jM.getGoto(MM.state, PM.type.id) : -1;
            if (SM > -1 && PM.length && (!rM || (PM.prop(OM.f.contextHash) || 0) == iM)) return MM.useNode(PM, SM), lM && console.log(aM + this.stackID(MM) + ` (via reuse of ${jM.getName(PM.type.id)})`), !0;
            if (!(PM instanceof OM.v) || 0 == PM.children.length || PM.positions[0] > 0) break;
            let nM = PM.children[0];
            if (!(nM instanceof OM.v && 0 == PM.positions[0])) break;
            PM = nM
          }
        }
        let PM = jM.stateSlot(MM.state, 4);
        if (PM > 0) return MM.reduce(PM), lM && console.log(aM + this.stackID(MM) + ` (via always-reduce ${jM.getName(65535&PM)})`), !0;
        if (MM.stack.length >= 8400)
          for (; MM.stack.length > 6e3 && MM.forceReduce(););
        let nM = this.tokens.getActions(MM);
        for (let OM = 0; OM < nM.length;) {
          let PM = nM[OM++],
            QM = nM[OM++],
            zM = nM[OM++],
            LM = OM == nM.length || !iM,
            mM = LM ? MM : MM.split(),
            HM = this.tokens.mainToken;
          if (mM.apply(PM, QM, HM ? HM.start : mM.pos, zM), lM && console.log(aM + this.stackID(mM) + ` (via ${0==(65536&PM)?"shift":`reduce of ${jM.getName(65535&PM)}`} for ${jM.getName(QM)} @ ${SM}${mM==MM?"":", split"})`), LM) return !0;
          mM.pos > SM ? rM.push(mM) : iM.push(mM)
        }
        return !1
      }
      advanceFully(MM, rM) {
        let iM = MM.pos;
        for (;;) {
          if (!this.advanceStack(MM, null, null)) return !1;
          if (MM.pos > iM) return bM(MM, rM), !0
        }
      }
      runRecovery(MM, rM, iM) {
        let OM = null,
          SM = !1;
        for (let jM = 0; jM < MM.length; jM++) {
          let aM = MM[jM],
            PM = rM[jM << 1],
            nM = rM[1 + (jM << 1)],
            QM = lM ? this.stackID(aM) + " -> " : "";
          if (aM.deadEnd) {
            if (SM) continue;
            if (SM = !0, aM.restart(), lM && console.log(QM + this.stackID(aM) + " (restarted)"), this.advanceFully(aM, iM)) continue
          }
          let zM = aM.split(),
            LM = QM;
          for (let MM = 0; MM < 10 && zM.forceReduce(); MM++) {
            if (lM && console.log(LM + this.stackID(zM) + " (via force-reduce)"), this.advanceFully(zM, iM)) break;
            lM && (LM = this.stackID(zM) + " -> ")
          }
          for (let MM of aM.recoverByInsert(PM)) lM && console.log(QM + this.stackID(MM) + " (via recover-insert)"), this.advanceFully(MM, iM);
          this.stream.end > aM.pos ? (nM == aM.pos && (nM++, PM = 0), aM.recoverByDelete(PM, nM), lM && console.log(QM + this.stackID(aM) + ` (via recover-delete ${this.parser.getName(PM)})`), bM(aM, iM)) : (!OM || OM.score < zM.score) && (OM = zM)
        }
        return OM
      }
      stackToTree(MM) {
        return MM.close(), OM.v.build({
          buffer: PM.create(MM),
          nodeSet: this.parser.nodeSet,
          topID: this.topTerm,
          maxBufferLength: this.parser.bufferLength,
          reused: this.reused,
          start: this.Ld[0].from,
          length: MM.pos - this.Ld[0].from,
          minRepeatType: this.parser.minRepeatTerm
        })
      }
      stackID(MM) {
        let rM = (EM || (EM = new WeakMap)).get(MM);
        return rM || EM.set(MM, rM = String.fromCodePoint(this.nextStackID++)), rM + MM
      }
    }

    function bM(MM, rM) {
      for (let iM = 0; iM < rM.length; iM++) {
        let OM = rM[iM];
        if (OM.pos == MM.pos && OM.sameState(MM)) return void(rM[iM].score < MM.score && (rM[iM] = MM))
      }
      rM.push(MM)
    }
    class wM {
      constructor(MM, rM, iM) {
        this.source = MM, this.flags = rM, this.disabled = iM
      }
      allows(MM) {
        return !this.disabled || 0 == this.disabled[MM]
      }
    }
    const tM = MM => MM;
    class gM extends OM.p {
      constructor(MM) {
        if (super(), this.wrappers = [], 14 != MM.version) throw new RangeError(`Parser version (${MM.version}) doesn't match runtime version (14)`);
        let rM = MM.nodeNames.split(" ");
        this.minRepeatTerm = rM.length;
        for (let OM = 0; OM < MM.repeatNodeCount; OM++) rM.push("");
        let iM = Object.keys(MM.topRules).map((rM => MM.topRules[rM][1])),
          SM = [];
        for (let OM = 0; OM < rM.length; OM++) SM.push([]);

        function jM(MM, rM, iM) {
          SM[MM].push([rM, rM.deserialize(String(iM))])
        }
        if (MM.nodeProps)
          for (let PM of MM.nodeProps) {
            let MM = PM[0];
            "string" == typeof MM && (MM = OM.f[MM]);
            for (let rM = 1; rM < PM.length;) {
              let iM = PM[rM++];
              if (iM >= 0) jM(iM, MM, PM[rM++]);
              else {
                let OM = PM[rM + -iM];
                for (let SM = -iM; SM > 0; SM--) jM(PM[rM++], MM, OM);
                rM++
              }
            }
          }
        this.nodeSet = new OM.g(rM.map(((rM, jM) => OM.j.define({
          name: jM >= this.minRepeatTerm ? void 0 : rM,
          id: jM,
          props: SM[jM],
          top: iM.indexOf(jM) > -1,
          error: 0 == jM,
          skipped: MM.skippedNodes && MM.skippedNodes.indexOf(jM) > -1
        })))), MM.propSources && (this.nodeSet = this.nodeSet.extend(...MM.propSources)), this.strict = !1, this.bufferLength = OM.b;
        let aM = nM(MM.tokenData);
        this.context = MM.context, this.specializerSpecs = MM.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
        for (let OM = 0; OM < this.specializerSpecs.length; OM++) this.specialized[OM] = this.specializerSpecs[OM].term;
        this.specializers = this.specializerSpecs.map(RM), this.states = nM(MM.states, Uint32Array), this.data = nM(MM.stateData), this.goto = nM(MM.goto), this.maxTerm = MM.maxTerm, this.tokenizers = MM.tokenizers.map((MM => "number" == typeof MM ? new mM(aM, MM) : MM)), this.topRules = MM.topRules, this.dialects = MM.dialects || {}, this.dynamicPrecedences = MM.dynamicPrecedences || null, this.tokenPrecTable = MM.tokenPrec, this.termNames = MM.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]]
      }
      createParse(MM, rM, iM) {
        let OM = new eM(this, MM, rM, iM);
        for (let SM of this.wrappers) OM = SM(OM, MM, rM, iM);
        return OM
      }
      getGoto(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          OM = this.goto;
        if (rM >= OM[0]) return -1;
        for (let SM = OM[rM + 1];;) {
          let rM = OM[SM++],
            jM = 1 & rM,
            aM = OM[SM++];
          if (jM && iM) return aM;
          for (let iM = SM + (rM >> 1); SM < iM; SM++)
            if (OM[SM] == MM) return aM;
          if (jM) return -1
        }
      }
      hasAction(MM, rM) {
        let iM = this.data;
        for (let OM = 0; OM < 2; OM++)
          for (let SM, jM = this.stateSlot(MM, OM ? 2 : 1);; jM += 3) {
            if (65535 == (SM = iM[jM])) {
              if (1 != iM[jM + 1]) {
                if (2 == iM[jM + 1]) return uM(iM, jM + 2);
                break
              }
              SM = iM[jM = uM(iM, jM + 2)]
            }
            if (SM == rM || 0 == SM) return uM(iM, jM + 1)
          }
        return 0
      }
      stateSlot(MM, rM) {
        return this.states[6 * MM + rM]
      }
      stateFlag(MM, rM) {
        return (this.stateSlot(MM, 0) & rM) > 0
      }
      validAction(MM, rM) {
        return !!this.allActions(MM, (MM => MM == rM || null))
      }
      allActions(MM, rM) {
        let iM = this.stateSlot(MM, 4),
          OM = iM ? rM(iM) : void 0;
        for (let SM = this.stateSlot(MM, 1); null == OM; SM += 3) {
          if (65535 == this.data[SM]) {
            if (1 != this.data[SM + 1]) break;
            SM = uM(this.data, SM + 2)
          }
          OM = rM(uM(this.data, SM + 1))
        }
        return OM
      }
      nextStates(MM) {
        let rM = [];
        for (let iM = this.stateSlot(MM, 1);; iM += 3) {
          if (65535 == this.data[iM]) {
            if (1 != this.data[iM + 1]) break;
            iM = uM(this.data, iM + 2)
          }
          if (0 == (1 & this.data[iM + 2])) {
            let MM = this.data[iM + 1];
            rM.some(((rM, iM) => 1 & iM && rM == MM)) || rM.push(this.data[iM], MM)
          }
        }
        return rM
      }
      configure(MM) {
        let rM = Object.assign(Object.create(gM.prototype), this);
        if (MM.props && (rM.nodeSet = this.nodeSet.extend(...MM.props)), MM.top) {
          let iM = this.topRules[MM.top];
          if (!iM) throw new RangeError(`Invalid top rule name ${MM.top}`);
          rM.top = iM
        }
        return MM.tokenizers && (rM.tokenizers = this.tokenizers.map((rM => {
          let iM = MM.tokenizers.find((MM => MM.from == rM));
          return iM ? iM.to : rM
        }))), MM.specializers && (rM.specializers = this.specializers.slice(), rM.specializerSpecs = this.specializerSpecs.map(((iM, OM) => {
          let SM = MM.specializers.find((MM => MM.from == iM.external));
          if (!SM) return iM;
          let jM = Object.assign(Object.assign({}, iM), {
            external: SM.to
          });
          return rM.specializers[OM] = RM(jM), jM
        }))), MM.contextTracker && (rM.context = MM.contextTracker), MM.dialect && (rM.dialect = this.parseDialect(MM.dialect)), null != MM.strict && (rM.strict = MM.strict), MM.wrap && (rM.wrappers = rM.wrappers.concat(MM.wrap)), null != MM.bufferLength && (rM.bufferLength = MM.bufferLength), rM
      }
      hasWrappers() {
        return this.wrappers.length > 0
      }
      getName(MM) {
        return this.termNames ? this.termNames[MM] : String(MM <= this.maxNode && this.nodeSet.types[MM].name || MM)
      }
      get eofTerm() {
        return this.maxNode + 1
      }
      get topNode() {
        return this.nodeSet.types[this.top[1]]
      }
      dynamicPrecedence(MM) {
        let rM = this.dynamicPrecedences;
        return null == rM ? 0 : rM[MM] || 0
      }
      parseDialect(MM) {
        let rM = Object.keys(this.dialects),
          iM = rM.map((() => !1));
        if (MM)
          for (let SM of MM.split(" ")) {
            let MM = rM.indexOf(SM);
            MM >= 0 && (iM[MM] = !0)
          }
        let OM = null;
        for (let SM = 0; SM < rM.length; SM++)
          if (!iM[SM])
            for (let MM, iM = this.dialects[rM[SM]]; 65535 != (MM = this.data[iM++]);)(OM || (OM = new Uint8Array(this.maxTerm + 1)))[MM] = 1;
        return new wM(MM, iM, OM)
      }
      static deserialize(MM) {
        return new gM(MM)
      }
    }

    function uM(MM, rM) {
      return MM[rM] | MM[rM + 1] << 16
    }

    function RM(MM) {
      if (MM.external) {
        let rM = MM.extend ? 1 : 0;
        return (iM, OM) => MM.external(iM, OM) << 1 | rM
      }
      return MM.get
    }
    var pM = iM(44005);
    const WM = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288],
      sM = new class {
        constructor(MM) {
          this.start = MM.start, this.shift = MM.shift || tM, this.reduce = MM.reduce || tM, this.reuse = MM.reuse || tM, this.hash = MM.hash || (() => 0), this.strict = !1 !== MM.strict
        }
      }({
        start: !1,
        shift: (MM, rM) => 5 == rM || 6 == rM || 320 == rM ? MM : 321 == rM,
        strict: !1
      }),
      DM = new hM(((MM, rM) => {
        let {
          next: iM
        } = MM;
        (125 == iM || -1 == iM || rM.context) && MM.acceptToken(318)
      }), {
        contextual: !0,
        fallback: !0
      }),
      kM = new hM(((MM, rM) => {
        let iM, {
          next: OM
        } = MM;
        WM.indexOf(OM) > -1 || (47 != OM || 47 != (iM = MM.peek(1)) && 42 != iM) && (125 == OM || 59 == OM || -1 == OM || rM.context || MM.acceptToken(316))
      }), {
        contextual: !0
      }),
      ZM = new hM(((MM, rM) => {
        91 != MM.next || rM.context || MM.acceptToken(317)
      }), {
        contextual: !0
      }),
      oM = new hM(((MM, rM) => {
        let {
          next: iM
        } = MM;
        if (43 == iM || 45 == iM) {
          if (MM.advance(), iM == MM.next) {
            MM.advance();
            let iM = !rM.context && rM.canShift(1);
            MM.acceptToken(iM ? 1 : 2)
          }
        } else 63 == iM && 46 == MM.peek(1) && (MM.advance(), MM.advance(), (MM.next < 48 || MM.next > 57) && MM.acceptToken(3))
      }), {
        contextual: !0
      });

    function fM(MM, rM) {
      return MM >= 65 && MM <= 90 || MM >= 97 && MM <= 122 || 95 == MM || MM >= 192 || !rM && MM >= 48 && MM <= 57
    }
    const YM = new hM(((MM, rM) => {
        if (60 != MM.next || !rM.dialectEnabled(0)) return;
        if (MM.advance(), 47 == MM.next) return;
        let iM = 0;
        for (; WM.indexOf(MM.next) > -1;) MM.advance(), iM++;
        if (fM(MM.next, !0)) {
          for (MM.advance(), iM++; fM(MM.next, !1);) MM.advance(), iM++;
          for (; WM.indexOf(MM.next) > -1;) MM.advance(), iM++;
          if (44 == MM.next) return;
          for (let rM = 0;; rM++) {
            if (7 == rM) {
              if (!fM(MM.next, !0)) return;
              break
            }
            if (MM.next != "extends".charCodeAt(rM)) break;
            MM.advance(), iM++
          }
        }
        MM.acceptToken(4, -iM)
      })),
      NM = (0, pM.i)({
        "get set async static": pM.m.modifier,
        "for while do if else switch try catch finally return throw break continue default case defer": pM.m.controlKeyword,
        "in of await yield void typeof delete instanceof as satisfies": pM.m.operatorKeyword,
        "let var const using function class extends": pM.m.definitionKeyword,
        "import export from": pM.m.moduleKeyword,
        "with debugger new": pM.m.keyword,
        TemplateString: pM.m.special(pM.m.string),
        super: pM.m.atom,
        BooleanLiteral: pM.m.bool,
        this: pM.m.self,
        null: pM.m.null,
        Star: pM.m.modifier,
        VariableName: pM.m.variableName,
        "CallExpression/VariableName TaggedTemplateExpression/VariableName": pM.m.function(pM.m.variableName),
        VariableDefinition: pM.m.definition(pM.m.variableName),
        Label: pM.m.labelName,
        PropertyName: pM.m.propertyName,
        PrivatePropertyName: pM.m.special(pM.m.propertyName),
        "CallExpression/MemberExpression/PropertyName": pM.m.function(pM.m.propertyName),
        "FunctionDeclaration/VariableDefinition": pM.m.function(pM.m.definition(pM.m.variableName)),
        "ClassDeclaration/VariableDefinition": pM.m.definition(pM.m.className),
        "NewExpression/VariableName": pM.m.className,
        PropertyDefinition: pM.m.definition(pM.m.propertyName),
        PrivatePropertyDefinition: pM.m.definition(pM.m.special(pM.m.propertyName)),
        UpdateOp: pM.m.updateOperator,
        "LineComment Hashbang": pM.m.lineComment,
        BlockComment: pM.m.blockComment,
        Number: pM.m.number,
        String: pM.m.string,
        Escape: pM.m.escape,
        ArithOp: pM.m.arithmeticOperator,
        LogicOp: pM.m.logicOperator,
        BitOp: pM.m.bitwiseOperator,
        CompareOp: pM.m.compareOperator,
        RegExp: pM.m.regexp,
        Equals: pM.m.definitionOperator,
        Arrow: pM.m.function(pM.m.punctuation),
        ": Spread": pM.m.punctuation,
        "( )": pM.m.paren,
        "[ ]": pM.m.squareBracket,
        "{ }": pM.m.brace,
        "InterpolationStart InterpolationEnd": pM.m.special(pM.m.brace),
        ".": pM.m.derefOperator,
        ", ;": pM.m.separator,
        "@": pM.m.meta,
        TypeName: pM.m.typeName,
        TypeDefinition: pM.m.definition(pM.m.typeName),
        "type enum interface implements namespace module declare": pM.m.definitionKeyword,
        "abstract global Privacy readonly override": pM.m.modifier,
        "is keyof unique infer asserts": pM.m.operatorKeyword,
        JSXAttributeValue: pM.m.attributeValue,
        JSXText: pM.m.content,
        "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": pM.m.angleBracket,
        "JSXIdentifier JSXNameSpacedName": pM.m.tagName,
        "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": pM.m.attributeName,
        "JSXBuiltin/JSXIdentifier": pM.m.standard(pM.m.tagName)
      }),
      AM = {
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
      xM = {
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
      vM = {
        __proto__: null,
        "<": 193
      },
      FM = gM.deserialize({
        version: 14,
        states: "$F|Q%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Il'#IlO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JrO6[Q!0MxO'#JsO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO9XQMhO'#F|O9`Q`O'#F{OOQ!0Lf'#Js'#JsOOQ!0Lb'#Jr'#JrO9eQ`O'#GwOOQ['#K_'#K_O9pQ`O'#IYO9uQ!0LrO'#IZOOQ['#J`'#J`OOQ['#I_'#I_Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GsO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EyO;hQMhO'#FeO;xQ`O'#GsOOQO'#K`'#K`O;}Q`O'#K`O<]Q`O'#G{O<]Q`O'#G|O<]Q`O'#HOO9kQ`O'#HRO=SQ`O'#HUO>kQ`O'#CeO>{Q`O'#HcO?TQ`O'#HiO?TQ`O'#HkO`QlO'#HmO?TQ`O'#HoO?TQ`O'#HrO?YQ`O'#HxO?_Q!0LsO'#IOO%[QlO'#IQO?jQ!0LsO'#ISO?uQ!0LsO'#IUO9uQ!0LrO'#IWO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jv'#JvO%[QlO'#JvOOQO'#Jy'#JyOOQO'#Ih'#IhOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J}'#J}OC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jx'#JxODlQpO'#JyOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CD})CD}OOOO'#I`'#I`OFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ia'#IaOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Ic'#IcOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IdOGyQ`O'#JtOIxQ!fO'#JtO+}QlO'#JtOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KTOKPQ`O'#KSOKPQ`O'#KSOKXQ`O,5;^OK^Q`O'#KROOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KQONtQ`O'#KPO9eQ`O'#KPO! YQ`O'#KPO! bQ`O,5;]O! gQ`O'#KPO!#lQ!fO'#JsOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#Jz'#JzOOQO-E<j-E<jO9kQ`O,5=_O!$rQ`O,5=_O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;dO!(|QpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)[QlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IpO!+_Q!0LrO,5<iO%[QlO,5;eO!&zQMhO,5;eO!+|QMhO,5;eO!-nQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-uQ,UO'#FjO!.rQ,UO'#KXO!.^Q,UO'#KXO!.yQ,UO'#KXOOQO'#KX'#KXO!/_Q,UO,5<SOOOW,5<`,5<`O!/pQlO'#FvOOOW'#Io'#IoO7VO7dO,5<QO!/wQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<eO!1pQ`O,5<hO!3YQ(CWO'#GXO!3jQ`O'#GYO!3oQ`O'#GYO!5_Q(CWO'#G^O!6dQpO'#GbOOQO'#Gn'#GnO!,TQMhO'#GmOOQO'#Gp'#GpO!,TQMhO'#GoO!7VQ$IUO'#JlOOQ!0Lh'#Jl'#JlO!7aQ`O'#JkO!7oQ`O'#JjO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<eO1SQ`O'#DZO!,TQMhO'#GPO!,TQMhO'#GRO!8gQ`O'#GTO!8lQ`O'#GUO!3oQ`O'#G[O!,TQMhO'#GaO<]Q`O'#JkO!8qQ`O'#EqO!9`Q`O,5<gOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KR'#KRO!:iQ!0LrO'#KaO9uQ!0LrO,5=cO`QlO,5>tOOQ['#Jh'#JhOOQ[,5>u,5>uOOQ[-E<]-E<]O!<hQ!0MxO,5:bO!:]QpO,5:`O!?RQ!0MxO,5:jO%[QlO,5:jO!AiQ!0MxO,5:lOOQO,5@z,5@zO!BYQMhO,5=_O!BhQ!0LrO'#JiO9`Q`O'#JiO!ByQ!0LrO,59ZO!CUQpO,59ZO!C^QMhO,59ZO:dQMhO,59ZO!CiQ`O,5;ZO!CqQ`O'#HbO!DVQ`O'#KdO%[QlO,5;}O!:]QpO,5<PO!D_Q`O,5=zO!DdQ`O,5=zO!DiQ`O,5=zO!DwQ`O,5=zO9uQ!0LrO,5=zO<]Q`O,5=jOOQO'#Cy'#CyO!EOQpO,5=gO!EWQMhO,5=hO!EcQ`O,5=jO!EhQ!bO,5=mO!EpQ`O'#K`O?YQ`O'#HWO9kQ`O'#HYO!EuQ`O'#HYO:dQMhO'#H[O!EzQ`O'#H[OOQ[,5=p,5=pO!FPQ`O'#H]O!FbQ`O'#CoO!FgQ`O,59PO!FqQ`O,59PO!HvQlO,59POOQ[,59P,59PO!IWQ!0LrO,59PO%[QlO,59PO!KcQlO'#HeOOQ['#Hf'#HfOOQ['#Hg'#HgO`QlO,5=}O!KyQ`O,5=}O`QlO,5>TO`QlO,5>VO!LOQ`O,5>XO`QlO,5>ZO!LTQ`O,5>^O!LYQlO,5>dOOQ[,5>j,5>jO%[QlO,5>jO9uQ!0LrO,5>lOOQ[,5>n,5>nO#!dQ`O,5>nOOQ[,5>p,5>pO#!dQ`O,5>pOOQ[,5>r,5>rO##QQpO'#D_O%[QlO'#JvO##sQpO'#JvO##}QpO'#DmO#$`QpO'#DmO#&qQlO'#DmO#&xQ`O'#JuO#'QQ`O,5:WO#'VQ`O'#EtO#'eQ`O'#KUO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CUQpO,5;YO!C^QMhO,5;YO:dQMhO,5;YO#(`Q`O,5@bO#(eQ07dO,5:sOOQO-E<f-E<fO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!ByQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CUQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I^'#I^P#+RO&2DjO,58|POOO,58|,58|OOOO-E<^-E<^OOQ!0Lh1G.p1G.pOOOO-E<_-E<_OOOO,59},59}O#+^Q!bO,59}OOOO-E<a-E<aOOQ!0Lf1G/g1G/gO#+cQ!fO,5?OO+}QlO,5?OOOQO,5?U,5?UO#+mQlO'#IdOOQO-E<b-E<bO#+zQ`O,5@`O#,SQ!fO,5@`O#,ZQ`O,5@nOOQ!0Lf1G/m1G/mO%[QlO,5@oO#,cQ`O'#IjOOQO-E<h-E<hO#,ZQ`O,5@nOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@lO#,wQ!0LrO,5@lO#-YQ!0LrO,5@lO#-aQ`O,5@kO9eQ`O,5@kO#-iQ`O,5@kO#-wQ`O'#ImO#-aQ`O,5@kOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2yO9kQ`O1G2yOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0rQ!0MzO'#JlO!$wQlO1G0uO#2}Q!fO'#JwO%[QlO'#JwO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#3^Q`O1G1OO#5rQ!0MxO1G1PO#5yQ!0MxO1G1PO#8aQ!0MxO1G1PO#8hQ!0MxO1G1PO#;OQ!0MxO1G1PO#=fQ!0MxO1G1PO#=mQ!0MxO1G1PO#=tQ!0MxO1G1PO#@[Q!0MxO1G1PO#@cQ!0MxO1G1PO#BpQ?MtO'#CiO#DkQ?MtO1G1`O#DrQ?MtO'#JsO#EVQ!0MxO,5?[OOQ!0Lb-E<n-E<nO#GdQ!0MxO1G1PO#HaQ!0MzO1G1POOQ!0Lf1G1P1G1PO#IdQMjO'#J|O#InQ`O,5:xO#IsQ!0MxO1G1cO#JgQ,UO,5<WO#JoQ,UO,5<XO#JwQ,UO'#FoO#K`Q`O'#FnOOQO'#KY'#KYOOQO'#In'#InO#KeQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#KvQ?MtO'#JrO#LQQ`O,5<bO!)[QlO,5<bOOOW-E<m-E<mOOQ!0Lf1G1l1G1lO#LVQpO'#KXOOQ!0Lf,5<d,5<dO#L_QpO,5<dO#LdQMhO'#DTOOOO'#Ib'#IbO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8lQ`O'#IrO#LvQ`O,5<zOOQ!0Lh,5<w,5<wO!,TQMhO'#IuO#MdQMjO,5=XO!,TQMhO'#IwO#NVQMjO,5=ZO!&zQMhO,5=]OOQO1G2S1G2SO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GbO$!dQ!dO,5<sO$!kQ`O'#K[O9eQ`O'#K[O$!yQ`O,5<uO$#aQ!dO'#C{O!,TQMhO,5<tO$#kQ`O'#GZO$$PQ`O,5<tO$$UQ!dO'#GWO$$cQ!dO'#K]O$$mQ`O'#K]O!&zQMhO'#K]O$$rQ`O,5<xO$$wQlO'#JvO$%RQpO'#GcO#$`QpO'#GcO$%dQ`O'#GgO!3oQ`O'#GkO$%iQ!0LrO'#ItO$%tQpO,5<|OOQ!0Lp,5<|,5<|O$%{QpO'#GcO$&YQpO'#GdO$&kQpO'#GdO$&pQMjO,5=XO$'QQMjO,5=ZOOQ!0Lh,5=^,5=^O!,TQMhO,5@VO!,TQMhO,5@VO$'bQ`O'#IyO$'vQ`O,5@UO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@VO$)TQ$IYO,59uOOQ!0Lh'#Jp'#JpO$)vQMjO,5<kO$*iQMjO,5<mO@zQ`O,5<oOOQ!0Lh,5<p,5<pO$*sQ`O,5<vO$*xQMjO,5<{O$+YQ`O'#KPO!$wQlO1G2RO$+_Q`O1G2RO9eQ`O'#KSO9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I{O$+dQ!0LrO,5@{OOQ[1G2}1G2}OOQ[1G4`1G4`OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-fQ!0MxO1G0UOOQ[1G2y1G2yO!&zQMhO1G2yO%[QlO1G2yO#.tQ`O1G2yO$/jQMhO'#EkOOQ!0Lb,5@T,5@TO$/wQ!0LrO,5@TOOQ[1G.u1G.uO!ByQ!0LrO1G.uO!CUQpO1G.uO!C^QMhO1G.uO$0YQ`O1G0uO$0_Q`O'#CiO$0jQ`O'#KeO$0rQ`O,5=|O$0wQ`O'#KeO$0|Q`O'#KeO$1[Q`O'#JRO$1jQ`O,5AOO$1rQ!fO1G1iOOQ!0Lf1G1k1G1kO9kQ`O1G3fO@zQ`O1G3fO$1yQ`O1G3fO$2OQ`O1G3fO!DiQ`O1G3fO9uQ!0LrO1G3fOOQ[1G3f1G3fO!EcQ`O1G3UO!&zQMhO1G3RO$2TQ`O1G3ROOQ[1G3S1G3SO!&zQMhO1G3SO$2YQ`O1G3SO$2bQpO'#HQOOQ[1G3U1G3UO!6_QpO'#I}O!EhQ!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$2jQMhO,5=tO9kQ`O,5=tO$%dQ`O,5=vO9`Q`O,5=vO!CUQpO,5=vO!C^QMhO,5=vO:dQMhO,5=vO$2xQ`O'#KcO$3TQ`O,5=wOOQ[1G.k1G.kO$3YQ!0LrO1G.kO@zQ`O1G.kO$3eQ`O1G.kO9uQ!0LrO1G.kO$5mQ!fO,5AQO$5zQ`O,5AQO9eQ`O,5AQO$6VQlO,5>PO$6^Q`O,5>POOQ[1G3i1G3iO`QlO1G3iOOQ[1G3o1G3oOOQ[1G3q1G3qO?TQ`O1G3sO$6cQlO1G3uO$:gQlO'#HtOOQ[1G3x1G3xO$:tQ`O'#HzO?YQ`O'#H|OOQ[1G4O1G4OO$:|QlO1G4OO9uQ!0LrO1G4UOOQ[1G4W1G4WOOQ!0Lb'#G_'#G_O9uQ!0LrO1G4YO9uQ!0LrO1G4[O$?TQ`O,5@bO!)[QlO,5;`O9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CUQpO,5:XO$?YQ?MtO,5:XOOQO,5;`,5;`O$?dQpO'#IeO$?zQ`O,5@aOOQ!0Lf1G/r1G/rO$@SQpO'#IkO$@^Q`O,5@pOOQ!0Lb1G0y1G0yO#$`QpO,5:XOOQO'#Ig'#IgO$@fQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CUQpO1G0tO!C^QMhO1G0tOOQ!0Lb1G5|1G5|O!ByQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@mQ!0LrO1G0mO$@xQ!0LrO1G0mO!CUQpO1G0^ODWQpO1G0^O$AWQ!0LrO1G0mOOQO1G0^1G0^O$AlQ!0MxO1G0mPOOO-E<[-E<[POOO1G.h1G.hOOOO1G/i1G/iO$AvQ!bO,5<iO$BOQ!fO1G4jOOQO1G4p1G4pO%[QlO,5?OO$BYQ`O1G5zO$BbQ`O1G6YO$BjQ!fO1G6ZO9eQ`O,5?UO$BtQ!0MxO1G6WO%[QlO1G6WO$CUQ!0LrO1G6WO$CgQ`O1G6VO$CgQ`O1G6VO9eQ`O1G6VO$CoQ`O,5?XO9eQ`O,5?XOOQO,5?X,5?XO$DTQ`O,5?XO$+YQ`O,5?XOOQO-E<k-E<kOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(e7+(eO!&zQMhO7+(eO%[QlO7+(eO$DcQ`O7+(eO$DnQMhO7+(eO$D|Q!0MzO,5=XO$GXQ!0MzO,5=ZO$IdQ!0MzO,5=XO$KuQ!0MzO,5=ZO$NWQ!0MzO,59uO%!]Q!0MzO,5<kO%$hQ!0MzO,5<mO%&sQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%)UQ!0MxO7+&aO%)xQlO'#IfO%*VQ`O,5@cO%*_Q!fO,5@cOOQ!0Lf1G0P1G0PO%*iQ`O7+&jOOQ!0Lf7+&j7+&jO%*nQ?MtO,5:fO%[QlO7+&zO%*xQ?MtO,5:bO%+VQ?MtO,5:jO%+aQ?MtO,5:lO%+kQMhO'#IiO%+uQ`O,5@hOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%+}Q!jO,5<ZO!)[QlO,5<YOOQO-E<l-E<lOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%,YQ`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%,_Q!dO,59oOOOO-E<`-E<`OOQ!0Lh1G/X1G/XO%,fQ!0MxO7+'kOOQ!0Lh,5?^,5?^O%-YQMhO1G2fP%-aQ`O'#IrPOQ!0Lh-E<p-E<pO%-}QMjO,5?aOOQ!0Lh-E<s-E<sO%.pQMjO,5?cOOQ!0Lh-E<u-E<uO%.zQ!dO1G2wO%/RQ!dO'#CrO%/iQMhO'#KSO$$wQlO'#JvOOQ!0Lh1G2_1G2_O%/sQ`O'#IqO%0[Q`O,5@vO%0[Q`O,5@vO%0dQ`O,5@vO%0oQ`O,5@vOOQO1G2a1G2aO%0}QMjO1G2`O$+YQ`O'#K[O!,TQMhO1G2`O%1_Q(CWO'#IsO%1lQ`O,5@wO!&zQMhO,5@wO%1tQ!dO,5@wOOQ!0Lh1G2d1G2dO%4UQ!fO'#CiO%4`Q`O,5=POOQ!0Lb,5<},5<}O%4hQpO,5<}OOQ!0Lb,5=O,5=OOCwQ`O,5<}O%4sQpO,5<}OOQ!0Lb,5=R,5=RO$+YQ`O,5=VOOQO,5?`,5?`OOQO-E<r-E<rOOQ!0Lp1G2h1G2hO#$`QpO,5<}O$$wQlO,5=PO%5RQ`O,5=OO%5^QpO,5=OO!,TQMhO'#IuO%6WQMjO1G2sO!,TQMhO'#IwO%6yQMjO1G2uO%7TQMjO1G5qO%7_QMjO1G5qOOQO,5?e,5?eOOQO-E<w-E<wOOQO1G.{1G.{O!,TQMhO1G5qO!,TQMhO1G5qO!:]QpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%7lQ`O1G2ZO!,TQMhO1G2bO%7qQ!0MxO7+'mOOQ!0Lf7+'m7+'mO!$wQlO7+'mO%8eQ`O,5;`OOQ!0Lb,5?g,5?gOOQ!0Lb-E<y-E<yO%8jQ!dO'#K^O#(ZQ`O7+(eO4UQ!fO7+(eO$DfQ`O7+(eO%8tQ!0MvO'#CiO%9XQ!0MvO,5=SO%9lQ`O,5=SO%9tQ`O,5=SOOQ!0Lb1G5o1G5oOOQ[7+$a7+$aO!ByQ!0LrO7+$aO!CUQpO7+$aO!$wQlO7+&aO%9yQ`O'#JQO%:bQ`O,5APOOQO1G3h1G3hO9kQ`O,5APO%:bQ`O,5APO%:jQ`O,5APOOQO,5?m,5?mOOQO-E=P-E=POOQ!0Lf7+'T7+'TO%:oQ`O7+)QO9uQ!0LrO7+)QO9kQ`O7+)QO@zQ`O7+)QO%:tQ`O7+)QOOQ[7+)Q7+)QOOQ[7+(p7+(pO%:yQ!0MvO7+(mO!&zQMhO7+(mO!E^Q`O7+(nOOQ[7+(n7+(nO!&zQMhO7+(nO%;TQ`O'#KbO%;`Q`O,5=lOOQO,5?i,5?iOOQO-E<{-E<{OOQ[7+(s7+(sO%<rQpO'#HZOOQ[1G3`1G3`O!&zQMhO1G3`O%[QlO1G3`O%<yQ`O1G3`O%=UQMhO1G3`O9uQ!0LrO1G3bO$%dQ`O1G3bO9`Q`O1G3bO!CUQpO1G3bO!C^QMhO1G3bO%=dQ`O'#JPO%=xQ`O,5@}O%>QQpO,5@}OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>]Q`O7+$VO%[QlO1G6lO%[QlO1G6mO%>bQ!0LrO1G6lO%>lQlO1G3kO%>sQ`O1G3kO%>xQlO1G3kOOQ[7+)T7+)TO9uQ!0LrO7+)_O`QlO7+)aOOQ['#Kh'#KhOOQ['#JS'#JSO%?PQlO,5>`OOQ[,5>`,5>`O%[QlO'#HuO%?^Q`O'#HwOOQ[,5>f,5>fO9eQ`O,5>fOOQ[,5>h,5>hOOQ[7+)j7+)jOOQ[7+)p7+)pOOQ[7+)t7+)tOOQ[7+)v7+)vO%?cQpO1G5|O%?}Q?MtO1G0zO%@XQ`O1G0zOOQO1G/s1G/sO%@dQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?V,5?VOOQO-E<i-E<iO!CUQpO1G/sOOQO-E<e-E<eOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CUQpO7+&`OOQO7+%x7+%xO$AlQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@nQ!0LrO7+&XO!ByQ!0LrO7+%xO!CUQpO7+%xO%@yQ!0LrO7+&XO%AXQ!0MxO7++rO%[QlO7++rO%AiQ`O7++qO%AiQ`O7++qOOQO1G4s1G4sO9eQ`O1G4sO%AqQ`O1G4sOOQS7+%}7+%}O#(ZQ`O<<LPO4UQ!fO<<LPO%BPQ`O<<LPOOQ[<<LP<<LPO!&zQMhO<<LPO%[QlO<<LPO%BXQ`O<<LPO%BdQ!0MzO,5?aO%DoQ!0MzO,5?cO%FzQ!0MzO1G2`O%I]Q!0MzO1G2sO%KhQ!0MzO1G2uO%MsQ!fO,5?QO%[QlO,5?QOOQO-E<d-E<dO%M}Q`O1G5}OOQ!0Lf<<JU<<JUO%NVQ?MtO1G0uO&!^Q?MtO1G1PO&!eQ?MtO1G1PO&$fQ?MtO1G1PO&$mQ?MtO1G1PO&&nQ?MtO1G1PO&(oQ?MtO1G1PO&(vQ?MtO1G1PO&(}Q?MtO1G1PO&+OQ?MtO1G1PO&+VQ?MtO1G1PO&+^Q!0MxO<<JfO&-UQ?MtO1G1PO&.RQ?MvO1G1PO&/UQ?MvO'#JlO&1[Q?MtO1G1cO&1iQ?MtO1G0UO&1sQMjO,5?TOOQO-E<g-E<gO!)[QlO'#FqOOQO'#KZ'#KZOOQO1G1u1G1uO&1}Q`O1G1tO&2SQ?MtO,5?[OOOW7+'h7+'hOOOO1G/Z1G/ZO&2^Q!dO1G4xOOQ!0Lh7+(Q7+(QP!&zQMhO,5?^O!,TQMhO7+(cO&2eQ`O,5?]O9eQ`O,5?]O$+YQ`O,5?]OOQO-E<o-E<oO&2sQ`O1G6bO&2sQ`O1G6bO&2{Q`O1G6bO&3WQMjO7+'zO&3hQ!dO,5?_O&3rQ`O,5?_O!&zQMhO,5?_OOQO-E<q-E<qO&3wQ!dO1G6cO&4RQ`O1G6cO&4ZQ`O1G2kO!&zQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%4hQpO1G2iO!CUQpO1G2iOCwQ`O1G2iOOQ!0Lb1G2q1G2qO&4`QpO1G2iO&4nQ`O1G2kO$+YQ`O1G2jOCwQ`O1G2jO$$wQlO1G2kO&4vQ`O1G2jO&5jQMjO,5?aOOQ!0Lh-E<t-E<tO&6]QMjO,5?cOOQ!0Lh-E<v-E<vO!,TQMhO7++]O&6gQMjO7++]O&6qQMjO7++]OOQ!0Lh1G/c1G/cO&7OQ`O1G/cOOQ!0Lh7+'u7+'uO&7TQMjO7+'|O&7eQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&8XQ`O1G0zO!&zQMhO'#IzO&8^Q`O,5@xO&:`Q!fO<<LPO!&zQMhO1G2nO&:gQ!0LrO1G2nOOQ[<<G{<<G{O!ByQ!0LrO<<G{O&:xQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?l,5?lO&;lQ`O,5?lO&;qQ`O,5?lOOQO-E=O-E=OO&<PQ`O1G6kO&<PQ`O1G6kO9kQ`O1G6kO@zQ`O<<LlOOQ[<<Ll<<LlO&<XQ`O<<LlO9uQ!0LrO<<LlO9kQ`O<<LlOOQ[<<LX<<LXO%:yQ!0MvO<<LXOOQ[<<LY<<LYO!E^Q`O<<LYO&<^QpO'#I|O&<iQ`O,5@|O!)[QlO,5@|OOQ[1G3W1G3WOOQO'#JO'#JOO9uQ!0LrO'#JOO&<qQpO,5=uOOQ[,5=u,5=uO&<xQpO'#EgO&=PQpO'#GeO&=UQ`O7+(zO&=ZQ`O7+(zOOQ[7+(z7+(zO!&zQMhO7+(zO%[QlO7+(zO&=cQ`O7+(zOOQ[7+(|7+(|O9uQ!0LrO7+(|O$%dQ`O7+(|O9`Q`O7+(|O!CUQpO7+(|O&=nQ`O,5?kOOQO-E<}-E<}OOQO'#H^'#H^O&=yQ`O1G6iO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>RQ`O7+,WO&>WQ`O7+,XO%[QlO7+,WO%[QlO7+,XOOQ[7+)V7+)VO&>]Q`O7+)VO&>bQlO7+)VO&>iQ`O7+)VOOQ[<<Ly<<LyOOQ[<<L{<<L{OOQ[-E=Q-E=QOOQ[1G3z1G3zO&>nQ`O,5>aOOQ[,5>c,5>cO&>sQ`O1G4QO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&>xQ?MtO1G6ZO?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AlQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!ByQ!0LrO<<IdO&?SQ!0LrO<<IsO&?_Q!0MxO<= ^O&?oQ`O<= ]OOQO7+*_7+*_O9eQ`O7+*_OOQ[ANAkANAkO&?wQ!fOANAkO!&zQMhOANAkO#(ZQ`OANAkO4UQ!fOANAkO&@OQ`OANAkO%[QlOANAkO&@WQ!0MzO7+'zO&BiQ!0MzO,5?aO&DtQ!0MzO,5?cO&GPQ!0MzO7+'|O&IbQ!fO1G4lO&IlQ?MtO7+&aO&KpQ?MvO,5=XO&MwQ?MvO,5=ZO&NXQ?MvO,5=XO&NiQ?MvO,5=ZO&NyQ?MvO,59uO'#PQ?MvO,5<kO'%SQ?MvO,5<mO''hQ?MvO,5<{O')^Q?MtO7+'kO')kQ?MtO7+'mO')xQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*d7+*dO')}QMjO<<K}OOQO1G4w1G4wO'*UQ`O1G4wO'*aQ`O1G4wO'*oQ`O7++|O'*oQ`O7++|O!&zQMhO1G4yO'*wQ!dO1G4yO'+RQ`O7++}O'+ZQ`O7+(VO'+fQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!CUQpO7+(TOCwQ`O7+(TO'+pQ`O7+(VO!&zQMhO7+(VO$+YQ`O7+(UO'+uQ`O7+(VOCwQ`O7+(UO'+}QMjO<<NwO!,TQMhO<<NwOOQ!0Lh7+$}7+$}O',XQ!dO,5?fOOQO-E<x-E<xO',cQ!0MvO7+(YO!&zQMhO7+(YOOQ[AN=gAN=gO9kQ`O1G5WOOQO1G5W1G5WO',sQ`O1G5WO',xQ`O7+,VO',xQ`O7+,VO9uQ!0LrOANBWO@zQ`OANBWOOQ[ANBWANBWO'-QQ`OANBWOOQ[ANAsANAsOOQ[ANAtANAtO'-VQ`O,5?hOOQO-E<z-E<zO'-bQ?MtO1G6hOOQO,5?j,5?jOOQO-E<|-E<|OOQ[1G3a1G3aO'-lQ`O,5=POOQ[<<Lf<<LfO!&zQMhO<<LfO&=UQ`O<<LfO'-qQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9uQ!0LrO<<LhO$%dQ`O<<LhO9`Q`O<<LhO'-yQpO1G5VO'.UQ`O7+,TOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= r<= rOOQ[<= s<= sO'.^Q`O<= rO'.cQ`O<= sOOQ[<<Lq<<LqO'.hQ`O<<LqO'.mQlO<<LqOOQ[1G3{1G3{O?YQ`O7+)lO'.tQ`O<<JQO'/PQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AlQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<My<<MyOOQ[G27VG27VO!&zQMhOG27VO#(ZQ`OG27VO'/ZQ!fOG27VO4UQ!fOG27VO'/bQ`OG27VO'/jQ?MtO<<JfO'/wQ?MvO1G2`O'1mQ?MvO,5?aO'3pQ?MvO,5?cO'5sQ?MvO1G2sO'7vQ?MvO1G2uO'9yQ?MtO<<KXO':WQ?MtO<<I{OOQO1G1w1G1wO!,TQMhOANAiOOQO7+*c7+*cO':eQ`O7+*cO':pQ`O<= hO':xQ!dO7+*eOOQ!0Lb<<Kq<<KqO$+YQ`O<<KqOCwQ`O<<KqO';SQ`O<<KqO!&zQMhO<<KqOOQ!0Lb<<Ko<<KoO!CUQpO<<KoO';_Q!dO<<KqOOQ!0Lb<<Kp<<KpO';iQ`O<<KqO!&zQMhO<<KqO$+YQ`O<<KpO';nQMjOANDcO';xQ!0MvO<<KtOOQO7+*r7+*rO9kQ`O7+*rO'<YQ`O<= qOOQ[G27rG27rO9uQ!0LrOG27rO@zQ`OG27rO!)[QlO1G5SO'<bQ`O7+,SO'<jQ`O1G2kO&=UQ`OANBQOOQ[ANBQANBQO!&zQMhOANBQO'<oQ`OANBQOOQ[ANBSANBSO9uQ!0LrOANBSO$%dQ`OANBSOOQO'#H_'#H_OOQO7+*q7+*qOOQ[G22wG22wOOQ[ANE^ANE^OOQ[ANE_ANE_OOQ[ANB]ANB]O'<wQ`OANB]OOQ[<<MW<<MWO!)[QlOAN?lOOQOG24yG24yO$AlQ!0MxOG24yO#(ZQ`OLD,qOOQ[LD,qLD,qO!&zQMhOLD,qO'<|Q!fOLD,qO'=TQ?MvO7+'zO'>yQ?MvO,5?aO'@|Q?MvO,5?cO'CPQ?MvO7+'|O'DuQMjOG27TOOQO<<M}<<M}OOQ!0LbANA]ANA]O$+YQ`OANA]OCwQ`OANA]O'EVQ!dOANA]OOQ!0LbANAZANAZO'E^Q`OANA]O!&zQMhOANA]O'EiQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N^<<N^OOQ[LD-^LD-^O9uQ!0LrOLD-^O'EsQ?MtO7+*nOOQO'#Gf'#GfOOQ[G27lG27lO&=UQ`OG27lO!&zQMhOG27lOOQ[G27nG27nO9uQ!0LrOG27nOOQ[G27wG27wO'E}Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#(ZQ`O!$(!]O!&zQMhO!$(!]O'FXQ!0MzOG27TOOQ!0LbG26wG26wO$+YQ`OG26wO'HjQ`OG26wOCwQ`OG26wO'HuQ!dOG26wO!&zQMhOG26wOOQ[!$(!x!$(!xOOQ[LD-WLD-WO&=UQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#(ZQ`O!)9EwOOQ!0LbLD,cLD,cO$+YQ`OLD,cOCwQ`OLD,cO'H|Q`OLD,cO'IXQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'I`Q?MvOG27TOOQ!0Lb!$( }!$( }O$+YQ`O!$( }OCwQ`O!$( }O'KUQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$+YQ`O!)9EiOCwQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$+YQ`O!.K;TOOQ!0Lb!4/0o!4/0oO!)[QlO'#DzO1PQ`O'#EXO'KaQ!fO'#JrO'KhQ!L^O'#DvO'KoQlO'#EOO'KvQ!fO'#CiO'N^Q!fO'#CiO!)[QlO'#EQO'NnQlO,5;ZO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO'#IpO(!qQ`O,5<iO!)[QlO,5;eO(!yQMhO,5;eO($dQMhO,5;eO!)[QlO,5;wO!&zQMhO'#GmO(!yQMhO'#GmO!&zQMhO'#GoO(!yQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GPO(!yQMhO'#GPO!&zQMhO'#GRO(!yQMhO'#GRO!&zQMhO'#GaO(!yQMhO'#GaO!)[QlO,5:jO($kQpO'#D_O($uQpO'#JvO!)[QlO,5@oO'NnQlO1G0uO(%PQ?MtO'#CiO!)[QlO1G2PO!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO(%ZQ!dO'#CrO!&zQMhO,5<tO(!yQMhO,5<tO'NnQlO1G2RO!)[QlO7+&zO!&zQMhO1G2`O(!yQMhO1G2`O!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO!&zQMhO1G2bO(!yQMhO1G2bO'NnQlO7+'mO'NnQlO7+&aO!&zQMhOANAiO(!yQMhOANAiO(%nQ`O'#EoO(%sQ`O'#EoO(%{Q`O'#F]O(&QQ`O'#EyO(&VQ`O'#KTO(&bQ`O'#KRO(&mQ`O,5;ZO(&rQMjO,5<eO(&yQ`O'#GYO('OQ`O'#GYO('TQ`O,5<eO(']Q`O,5<gO('eQ`O,5;ZO('mQ?MtO1G1`O('tQ`O,5<tO('yQ`O,5<tO((OQ`O,5<vO((TQ`O,5<vO((YQ`O1G2RO((_Q`O1G0uO((dQMjO<<K}O((kQMjO<<K}O((rQMhO'#F|O9`Q`O'#F{OAuQ`O'#EnO!)[QlO,5;tO!3oQ`O'#GYO!3oQ`O'#GYO!3oQ`O'#G[O!3oQ`O'#G[O!,TQMhO7+(cO!,TQMhO7+(cO%.zQ!dO1G2wO%.zQ!dO1G2wO!&zQMhO,5=]O!&zQMhO,5=]",
        stateData: "()x~O'|OS'}OSTOS(ORQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&W!WO&^!XO&`!YO&b!ZO&d![O&g!]O&m!^O&s!_O&u!`O&w!aO&y!bO&{!cO(TSO(VTO(YUO(aVO(o[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O(O!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'z]X(a]X(r]X(y]X(z]X~O!g%RX~P(qO_!}O(V#PO(W!}O(X#PO~O_#QO(X#PO(Y#PO(Z#QO~Ox#SO!U#TO(b#TO(c#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T<ZO(VTO(YUO(aVO(o[O~O![#ZO!]#WO!Y(hP!Y(vP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(VTO(YUO(aVO(o[O~Op#mO![#iO!|]O#i#lO#j#iO(T<[O!k(sP~P.iO!l#oO(T#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa(fX'z(fX'w(fX!k(fX!Y(fX!_(fX%i(fX!g(fX~P1qO#S$dO#`$eO$Q$eOP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX!_(gX%i(gX~Oa(gX'z(gX'w(gX!Y(gX!k(gXv(gX!g(gX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T$sO(VTO(YUO(a$uO(y$}O(z%POg(^P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(T%gO~O!g%mO~Oa%nO'z%nO~O!Q%rO~P%[O(U!lO~P%[O%n%vO~P%[Oh%VO!l%eO(T%gO(U!lO~Oe%}O!l%eO(T%gO~Oj$RO~O!_&PO(T%gO(U!lO(VTO(YUO`)WP~O!Q&SO!l&RO%j&VO&T&WO~P;SO!x#sO~O%s&YO!S)SX!_)SX(T)SX~O(T&ZO~Ol!PO!u&`O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&eOe&dO!x&bO%h&cO%{&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&kO#`&nO%j&iO(U!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'x&{O'z%nO~Oa%nO'x'OO'z%nO~Oa%nO'x'QO'z%nO~O'w]X!Y]Xv]X!k]X&[]X!_]X%i]X!g]X~P(qO!b'_O!c'WO!d'WO(U!lO(VTO(YUO~Os'UO!S'TO!['XO(e'SO!^(iP!^(xP~P@nOn'bO!_'`O(T%gO~Oe'gO!l%eO(T%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<VO#T!pO#U!pO#W!pO#X!pO(U!lO(VTO(YUO(e!mO(o!sO~O!b'mO!c'lO!d'lO#V!pO#['nO#]'nO~PBYOa%nOh%VO!g#vO!l%eO'z%nO(r'pO~O!p'tO#`'rO~PChOs!nO!S!oO(VTO(YUO(e!mO(o!sO~O!_XOs(mX!S(mX!b(mX!c(mX!d(mX!|(mX#T(mX#U(mX#V(mX#W(mX#X(mX#[(mX#](mX(U(mX(V(mX(Y(mX(e(mX(o(mX~O!c'lO!d'lO(U!lO~PDWO(P'xO(Q'xO(R'zO~O_!}O(V'|O(W!}O(X'|O~O_#QO(X'|O(Y'|O(Z#QO~Ov(OO~P%[Ox#SO!U#TO(b#TO(c(RO~O![(TO!Y'WX!Y'^X!]'WX!]'^X~P+}O!](VO!Y(hX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](VO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~O!Y(hX~PHRO!Y([O~O!Y(uX!](uX!g(uX!k(uX(r(uX~O#`(uX#k#dX!^(uX~PJUO#`(]O!Y(wX!](wX~O!](^O!Y(vX~O!Y(aO~O#`$eO~PJUO!^(bO~P`OR#zO!Q#yO!S#{O!l#xO(aVOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(r!na(y!na(z!na~Oa!na'z!na'w!na!Y!na!k!nav!na!_!na%i!na!g!na~PKlO!k(cO~O!g#vO#`(dO(r'pO!](tXa(tX'z(tX~O!k(tX~PNXO!S%hO!_%iO!|]O#i(iO#j(hO(T%gO~O!](jO!k(sX~O!k(lO~O!S%hO!_%iO#j(hO(T%gO~OP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~O!g#vO!k(gX~P! uOR(nO!Q(mO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(T!{a~P!#vO!x(rO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~O#k(xO~O![(zO!k(kP~P%[O(e(|O(o[O~O!S)OO!l#xO(e(|O(o[O~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]$_Oa$qa'z$qa'w$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)dO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Og(pP~P!,TO!Q)iO!g)hO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)hO!_({X$Z({X$]({X$_({X$f({X~O!Q)iO~P!.^O!Q)iO!_({X$Z({X$]({X$_({X$f({X~O!_)kO$Z)oO$])jO$_)jO$f)pO~O![)sO~P!)[O$]$hO$_$gO$f)wO~On$zX!Q$zX#S$zX'y$zX(y$zX(z$zX~OgmXg$zXnmX!]mX#`mX~P!0SOx)yO(b)zO(c)|O~On*VO!Q*OO'y*PO(y$}O(z%PO~Og)}O~P!1WOg*WO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S*YO!_*ZO!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op*`O![*^O(T*XO!k)OP~P!1uO#k*aO~O!l*bO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T*dO(VTO(YUO(a$uO(y$}O(z%PO~O![*gO!Y)PP~P!3tOr*sOs!nO!S*iO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO(e!mO~O!^*pO~P!5iO#S$dOn(`X!Q(`X'y(`X(y(`X(z(`X!](`X#`(`X~Og(`X$O(`X~P!6kOn*xO#`*wOg(_X!](_X~O!]*yOg(^X~Oj%dOk%dOl%dO(T&ZOg(^P~Os*|O~Og)}O(T&ZO~O!l+SO~O(T(vO~Op+WO!S%hO![#iO!_%iO!|]O#i#lO#j#iO(T%gO!k(sP~O!g#vO#k+XO~O!S%hO![+ZO!](^O!_%iO(T%gO!Y(vP~Os'[O!S+]O![+[O(VTO(YUO(e(|O~O!^(xP~P!9|O!]+^Oa)TX'z)TX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa!ja!]!ja'z!ja'w!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:tOR#zO!Q#yO!S#{O!l#xO(aVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(r!ra(y!ra(z!ra~Oa!ra'z!ra'w!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!=[OR#zO!Q#yO!S#{O!l#xO(aVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(r!ta(y!ta(z!ta~Oa!ta'z!ta'w!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?rOh%VOn+gO!_'`O%i+fO~O!g+iOa(]X!_(]X'z(]X!](]X~Oa%nO!_XO'z%nO~Oh%VO!l%eO~Oh%VO!l%eO(T%gO~O!g#vO#k(xO~Ob+tO%j+uO(T+qO(VTO(YUO!^)XP~O!]+vO`)WX~O[+zO~O`+{O~O!_&PO(T%gO(U!lO`)WP~O%j,OO~P;SOh%VO#`,SO~Oh%VOn,VO!_$|O~O!_,XO~O!Q,ZO!_XO~O%n%vO~O!x,`O~Oe,eO~Ob,fO(T#nO(VTO(YUO!^)VP~Oe%}O~O%j!QO(T&ZO~P=gO[,kO`,jO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(VTO(YUO(aVO(o[O~O!_!eO!u!gO$W!kO(T!dO~P!FyO`,jOa%nO'z%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa,pOl!OO!uwO%l!OO%m!OO%n!OO~P!IcO!l&oO~O&^,vO~O!_,xO~O&o,zO&q,{OP&laQ&laS&laY&laa&lad&lae&lal&lap&lar&las&lat&laz&la|&la!O&la!S&la!W&la!X&la!_&la!i&la!l&la!o&la!p&la!q&la!s&la!u&la!x&la!|&la$W&la$n&la%h&la%j&la%l&la%m&la%n&la%q&la%s&la%v&la%w&la%y&la&W&la&^&la&`&la&b&la&d&la&g&la&m&la&s&la&u&la&w&la&y&la&{&la'w&la(T&la(V&la(Y&la(a&la(o&la!^&la&e&lab&la&j&la~O(T-QO~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P#!iO!g-VO#`-UOh(jX!]#hX!^#hX!g(jX!l(jX~O!](jX!^(jX~P##[Oh%VO!g-XO!l%eO!]!aX!^!aX~Os!nO!S!oO(VTO(YUO(e!mO~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(VTO(YUO(aVO(o[O~O(T=QO~P#$qO!]-]O!^(iX~O!^-_O~O!g-VO#`-UO!]#hX!^#hX~O!]-`O!^(xX~O!^-bO~O!c-cO!d-cO(U!lO~P#$`O!^-fO~P'_On-iO!_'`O~O!Y-nO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(U!{a(V!{a(Y!{a(e!{a(o!{a~P!#vO!p-sO#`-qO~PChO!c-uO!d-uO(U!lO~PDWOa%nO#`-qO'z%nO~Oa%nO!g#vO#`-qO'z%nO~Oa%nO!g#vO!p-sO#`-qO'z%nO(r'pO~O(P'xO(Q'xO(R-zO~Ov-{O~O!Y'Wa!]'Wa~P!:tO![.PO!Y'WX!]'WX~P%[O!](VO!Y(ha~O!Y(ha~PHRO!](^O!Y(va~O!S%hO![.TO!_%iO(T%gO!Y'^X!]'^X~O#`.VO!](ta!k(taa(ta'z(ta~O!g#vO~P#,wO!](jO!k(sa~O!S%hO!_%iO#j.ZO(T%gO~Op.`O!S%hO![.]O!_%iO!|]O#i._O#j.]O(T%gO!]'aX!k'aX~OR.dO!l#xO~Oh%VOn.gO!_'`O%i.fO~Oa#ci!]#ci'z#ci'w#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:tOn>]O!Q*OO'y*PO(y$}O(z%PO~O#k#_aa#_a#`#_a'z#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#k(`XP(`XR(`X[(`Xa(`Xj(`Xr(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X'z(`X(a(`X(r(`X!k(`X!Y(`X'w(`Xv(`X!_(`X%i(`X!g(`X~P!6kO!].tO!k(kX~P!:tO!k.wO~O!Y.yO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#3cO#n$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#6QO#r$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(aVOa#mi!]#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(aVO(z#}Oa#mi!]#mi#z#mi#{#mi'z#mi(r#mi(y#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#;VO#x#mi~P#;VO#v$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(aVO(y#|O(z#}Oa#mi!]#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#={O#z$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X!]]X!^]X~O$O]X~P#@jOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO#z<gO#{<hO(aVO(r$YO(y#|O(z#}O~O$O.{O~P#BwO#S$dO#`<nO$Q<nO$O(gX!^(gX~P! uOa'da!]'da'z'da'w'da!k'da!Y'dav'da!_'da%i'da!g'da~P!:tO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO(y#mi(z#mi~P#EyOn>]O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P#EyO!]/POg(pX~P!1WOg/RO~Oa$Pi!]$Pi'z$Pi'w$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:tO$]/SO$_/SO~O$]/TO$_/TO~O!g)hO#`/UO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/VO~O!_)kO$Z/XO$])jO$_)jO$f/YO~O!]<iO!^(fX~P#BwO!^/ZO~O!g)hO$f({X~O$f/]O~Ov/^O~P!&zOx)yO(b)zO(c/aO~O!S/dO~O(y$}On%aa!Q%aa'y%aa(z%aa!]%aa#`%aa~Og%aa$O%aa~P#L{O(z%POn%ca!Q%ca'y%ca(y%ca!]%ca#`%ca~Og%ca$O%ca~P#MnO!]fX!gfX!kfX!k$zX(rfX~P!0SOp%WO![/mO!](^O(T/lO!Y(vP!Y)PP~P!1uOr*sO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO~Os<}O!S/nO![+[O!^*pO(e<|O!^(xP~P$ [O!k/oO~P#/sO!]/pO!g#vO(r'pO!k)OX~O!k/uO~OnoX!QoX'yoX(yoX(zoX~O!g#vO!koX~P$#OOp/wO!S%hO![*^O!_%iO(T%gO!k)OP~O#k/xO~O!Y$zX!]$zX!g%RX~P!0SO!]/yO!Y)PX~P#/sO!g/{O~O!Y/}O~OpkO(T0OO~P.iOh%VOr0TO!g#vO!l%eO(r'pO~O!g+iO~Oa%nO!]0XO'z%nO~O!^0ZO~P!5iO!c0[O!d0[O(U!lO~P#$`Os!nO!S0]O(VTO(YUO(e!mO~O#[0_O~Og%aa!]%aa#`%aa$O%aa~P!1WOg%ca!]%ca#`%ca$O%ca~P!1WOj%dOk%dOl%dO(T&ZOg'mX!]'mX~O!]*yOg(^a~Og0hO~On0jO#`0iOg(_a!](_a~OR0kO!Q0kO!S0lO#S$dOn}a'y}a(y}a(z}a!]}a#`}a~Og}a$O}a~P$(cO!Q*OO'y*POn$sa(y$sa(z$sa!]$sa#`$sa~Og$sa$O$sa~P$)_O!Q*OO'y*POn$ua(y$ua(z$ua!]$ua#`$ua~Og$ua$O$ua~P$*QO#k0oO~Og%Ta!]%Ta#`%Ta$O%Ta~P!1WO!g#vO~O#k0rO~O!]+^Oa)Ta'z)Ta~OR#zO!Q#yO!S#{O!l#xO(aVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(r!ri(y!ri(z!ri~Oa!ri'z!ri'w!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$+oOh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op0{O%]0|O(T0zO~P$.VO!g+iOa(]a!_(]a'z(]a!](]a~O#k1SO~O[]X!]fX!^fX~O!]1TO!^)XX~O!^1VO~O[1WO~Ob1YO(T+qO(VTO(YUO~O!_&PO(T%gO`'uX!]'uX~O!]+vO`)Wa~O!k1]O~P!:tO[1`O~O`1aO~O#`1fO~On1iO!_$|O~O(e(|O!^)UP~Oh%VOn1rO!_1oO%i1qO~O[1|O!]1zO!^)VX~O!^1}O~O`2POa%nO'z%nO~O(T#nO(VTO(YUO~O#S$dO#`$eO$Q$eOP(gXR(gX[(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~Oj2SO&[2TOa(gX~P$3pOj2SO#`$eO&[2TO~Oa2VO~P%[Oa2XO~O&e2[OP&ciQ&ciS&ciY&cia&cid&cie&cil&cip&cir&cis&cit&ciz&ci|&ci!O&ci!S&ci!W&ci!X&ci!_&ci!i&ci!l&ci!o&ci!p&ci!q&ci!s&ci!u&ci!x&ci!|&ci$W&ci$n&ci%h&ci%j&ci%l&ci%m&ci%n&ci%q&ci%s&ci%v&ci%w&ci%y&ci&W&ci&^&ci&`&ci&b&ci&d&ci&g&ci&m&ci&s&ci&u&ci&w&ci&y&ci&{&ci'w&ci(T&ci(V&ci(Y&ci(a&ci(o&ci!^&cib&ci&j&ci~Ob2bO!^2`O&j2aO~P`O!_XO!l2dO~O&q,{OP&liQ&liS&liY&lia&lid&lie&lil&lip&lir&lis&lit&liz&li|&li!O&li!S&li!W&li!X&li!_&li!i&li!l&li!o&li!p&li!q&li!s&li!u&li!x&li!|&li$W&li$n&li%h&li%j&li%l&li%m&li%n&li%q&li%s&li%v&li%w&li%y&li&W&li&^&li&`&li&b&li&d&li&g&li&m&li&s&li&u&li&w&li&y&li&{&li'w&li(T&li(V&li(Y&li(a&li(o&li!^&li&e&lib&li&j&li~O!Y2jO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2pO(e!mO!]'XX!^'XX~P@nO!]-]O!^(ia~O!]'_X!^'_X~P!9|O!]-`O!^(xa~O!^2wO~P'_Oa%nO#`3QO'z%nO~Oa%nO!g#vO#`3QO'z%nO~Oa%nO!g#vO!p3UO#`3QO'z%nO(r'pO~Oa%nO'z%nO~P!:tO!]$_Ov$qa~O!Y'Wi!]'Wi~P!:tO!](VO!Y(hi~O!](^O!Y(vi~O!Y(wi!](wi~P!:tO!](ti!k(tia(ti'z(ti~P!:tO#`3WO!](ti!k(tia(ti'z(ti~O!](jO!k(si~O!S%hO!_%iO!|]O#i3]O#j3[O(T%gO~O!S%hO!_%iO#j3[O(T%gO~On3dO!_'`O%i3cO~Oh%VOn3dO!_'`O%i3cO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aav%aa!_%aa%i%aa!g%aa~P#L{O#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%cav%ca!_%ca%i%ca!g%ca~P#MnO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/sO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/sO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'z}a(a}a(r}a!k}a!Y}a'w}av}a!_}a%i}a!g}a~P$(cO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'z$sa(a$sa(r$sa!k$sa!Y$sa'w$sav$sa!_$sa%i$sa!g$sa~P$)_O#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'z$ua(a$ua(r$ua!k$ua!Y$ua'w$uav$ua!_$ua%i$ua!g$ua~P$*QO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'z%Ta(a%Ta(r%Ta!k%Ta!Y%Ta'w%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/sOa#cq!]#cq'z#cq'w#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:tO![3lO!]'YX!k'YX~P%[O!].tO!k(ka~O!].tO!k(ka~P!:tO!Y3oO~O$O!na!^!na~PKlO$O!ja!]!ja!^!ja~P#BwO$O!ra!^!ra~P!=[O$O!ta!^!ta~P!?rOg']X!]']X~P!,TO!]/POg(pa~OSfO!_4TO$d4UO~O!^4YO~Ov4ZO~P#/sOa$mq!]$mq'z$mq'w$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:tO!Y4]O~P!&zO!S4^O~O!Q*OO'y*PO(z%POn'ia(y'ia!]'ia#`'ia~Og'ia$O'ia~P%-fO!Q*OO'y*POn'ka(y'ka(z'ka!]'ka#`'ka~Og'ka$O'ka~P%.XO(r$YO~P#/sO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!0SOp%WO(T=WO~P!1uOp4bO!S%hO![4aO!_%iO(T%gO!]'eX!k'eX~O!]/pO!k)Oa~O!]/pO!g#vO!k)Oa~O!]/pO!g#vO(r'pO!k)Oa~Og$|i!]$|i#`$|i$O$|i~P!1WO![4jO!Y'gX!]'gX~P!3tO!]/yO!Y)Pa~O!]/yO!Y)Pa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~Oj%YX!g%YX~P%2OOj4oO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4tO!l%eO(r'pO~Or4yO!g#vO(r'pO~Os!nO!S4zO(VTO(YUO(e!mO~O(y$}On%ai!Q%ai'y%ai(z%ai!]%ai#`%ai~Og%ai$O%ai~P%5oO(z%POn%ci!Q%ci'y%ci(y%ci!]%ci#`%ci~Og%ci$O%ci~P%6bOg(_i!](_i~P!1WO#`5QOg(_i!](_i~P!1WO!k5VO~Oa$oq!]$oq'z$oq'w$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:tO!Y5ZO~O!]5[O!_)QX~P#/sOa$zX!_$zX%^]X'z$zX!]$zX~P!0SO%^5_OaoX!_oX'zoX!]oX~P$#OOp5`O(T#nO~O%^5_O~Ob5fO%j5gO(T+qO(VTO(YUO!]'tX!^'tX~O!]1TO!^)Xa~O[5kO~O`5lO~O[5pO~Oa%nO'z%nO~P#/sO!]5uO#`5wO!^)UX~O!^5xO~Or6OOs!nO!S*iO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!pO#W!pO#X!pO#[5}O#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O!^5|O~P%;eOn6TO!_1oO%i6SO~Oh%VOn6TO!_1oO%i6SO~Ob6[O(T#nO(VTO(YUO!]'sX!^'sX~O!]1zO!^)Va~O(VTO(YUO(e6^O~O`6bO~Oj6eO&[6fO~PNXO!k6gO~P%[Oa6iO~Oa6iO~P%[Ob2bO!^6nO&j2aO~P`O!g6pO~O!g6rOh(ji!](ji!^(ji!g(ji!l(jir(ji(r(ji~O!]#hi!^#hi~P#BwO#`6sO!]#hi!^#hi~O!]!ai!^!ai~P#BwOa%nO#`6|O'z%nO~Oa%nO!g#vO#`6|O'z%nO~O!](tq!k(tqa(tq'z(tq~P!:tO!](jO!k(sq~O!S%hO!_%iO#j7TO(T%gO~O!_'`O%i7WO~On7[O!_'`O%i7WO~O#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'z'ia(a'ia(r'ia!k'ia!Y'ia'w'iav'ia!_'ia%i'ia!g'ia~P%-fO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'z'ka(a'ka(r'ka!k'ka!Y'ka'w'kav'ka!_'ka%i'ka!g'ka~P%.XO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'z$|i(a$|i(r$|i!k$|i!Y$|i'w$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/sO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'z%ai(a%ai(r%ai!k%ai!Y%ai'w%aiv%ai!_%ai%i%ai!g%ai~P%5oO#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'z%ci(a%ci(r%ci!k%ci!Y%ci'w%civ%ci!_%ci%i%ci!g%ci~P%6bO!]'Ya!k'Ya~P!:tO!].tO!k(ki~O$O#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#n#mi~P%NdO#n<_O~P%NdOP$[OR#zOr<kO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#r#mi~P&!lO#r<aO~P&!lOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO(aVO#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#v#mi~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO(aVO(z#}O#z#mi#{#mi$O#mi(r#mi(y#mi!]#mi!^#mi~O#x<eO~P&&uO#x#mi~P&&uO#v<cO~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO(aVO(y#|O(z#}O#{#mi$O#mi(r#mi!]#mi!^#mi~O#z#mi~P&)UO#z<gO~P&)UOa#|y!]#|y'z#|y'w#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:tO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO(y#mi(z#mi~P&,QOn>^O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P&,QO#S$dOP(`XR(`X[(`Xj(`Xn(`Xr(`X!Q(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X$O(`X'y(`X(a(`X(r(`X(y(`X(z(`X!](`X!^(`X~O$O$Pi!]$Pi!^$Pi~P#BwO$O!ri!^!ri~P$+oOg']a!]']a~P!1WO!^7nO~O!]'da!^'da~P#BwO!Y7oO~P#/sO!g#vO(r'pO!]'ea!k'ea~O!]/pO!k)Oi~O!]/pO!g#vO!k)Oi~Og$|q!]$|q#`$|q$O$|q~P!1WO!Y'ga!]'ga~P#/sO!g7vO~O!]/yO!Y)Pi~P#/sO!]/yO!Y)Pi~O!Y7yO~Oh%VOr8OO!l%eO(r'pO~Oj8QO!g#vO~Or8TO!g#vO(r'pO~O!Q*OO'y*PO(z%POn'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P&5RO!Q*OO'y*POn'la(y'la(z'la!]'la#`'la~Og'la$O'la~P&5tOg(_q!](_q~P!1WO#`8VOg(_q!](_q~P!1WO!Y8WO~Og%Oq!]%Oq#`%Oq$O%Oq~P!1WOa$oy!]$oy'z$oy'w$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:tO!g6rO~O!]5[O!_)Qa~O!_'`OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(a$Ta(r$Ta(y$Ta(z$Ta~O%i7WO~P&8fO%^8[Oa%[i!_%[i'z%[i!]%[i~Oa#cy!]#cy'z#cy'w#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:tO[8^O~Ob8`O(T+qO(VTO(YUO~O!]1TO!^)Xi~O`8dO~O(e(|O!]'pX!^'pX~O!]5uO!^)Ua~O!^8nO~P%;eO(o!sO~P$&YO#[8oO~O!_1oO~O!_1oO%i8qO~On8tO!_1oO%i8qO~O[8yO!]'sa!^'sa~O!]1zO!^)Vi~O!k8}O~O!k9OO~O!k9RO~O!k9RO~P%[Oa9TO~O!g9UO~O!k9VO~O!](wi!^(wi~P#BwOa%nO#`9_O'z%nO~O!](ty!k(tya(ty'z(ty~P!:tO!](jO!k(sy~O%i9bO~P&8fO!_'`O%i9bO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'z$|q(a$|q(r$|q!k$|q!Y$|q'w$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/sO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'z'ja(a'ja(r'ja!k'ja!Y'ja'w'jav'ja!_'ja%i'ja!g'ja~P&5RO#k'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la'z'la(a'la(r'la!k'la!Y'la'w'lav'la!_'la%i'la!g'la~P&5tO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'z%Oq(a%Oq(r%Oq!k%Oq!Y%Oq'w%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/sO!]'Yi!k'Yi~P!:tO$O#cq!]#cq!^#cq~P#BwO(y$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(a%aa(r%aa!]%aa!^%aa~On%aa!Q%aa'y%aa(z%aa~P&IyO(z%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(a%ca(r%ca!]%ca!^%ca~On%ca!Q%ca'y%ca(y%ca~P&LQOn>^O!Q*OO'y*PO(z%PO~P&IyOn>^O!Q*OO'y*PO(y$}O~P&LQOR0kO!Q0kO!S0lO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'y}a(a}a(r}a(y}a(z}a!]}a!^}a~O!Q*OO'y*POP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(a$sa(r$sa(y$sa(z$sa!]$sa!^$sa~O!Q*OO'y*POP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(a$ua(r$ua(y$ua(z$ua!]$ua!^$ua~On>^O!Q*OO'y*PO(y$}O(z%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(a%Ta(r%Ta!]%Ta!^%Ta~P''VO$O$mq!]$mq!^$mq~P#BwO$O$oq!]$oq!^$oq~P#BwO!^9oO~O$O9pO~P!1WO!g#vO!]'ei!k'ei~O!g#vO(r'pO!]'ei!k'ei~O!]/pO!k)Oq~O!Y'gi!]'gi~P#/sO!]/yO!Y)Pq~Or9wO!g#vO(r'pO~O[9yO!Y9xO~P#/sO!Y9xO~Oj:PO!g#vO~Og(_y!](_y~P!1WO!]'na!_'na~P#/sOa%[q!_%[q'z%[q!]%[q~P#/sO[:UO~O!]1TO!^)Xq~O`:YO~O#`:ZO!]'pa!^'pa~O!]5uO!^)Ui~P#BwO!S:]O~O!_1oO%i:`O~O(VTO(YUO(e:eO~O!]1zO!^)Vq~O!k:hO~O!k:iO~O!k:jO~O!k:jO~P%[O#`:mO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%i:rO~P&8fO!_'`O%i:rO~O$O#|y!]#|y!^#|y~P#BwOP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(a$|i(r$|i!]$|i!^$|i~P''VO!Q*OO'y*PO(z%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(a'ia(r'ia(y'ia!]'ia!^'ia~O!Q*OO'y*POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(a'ka(r'ka(y'ka(z'ka!]'ka!^'ka~O(y$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'y%ai(a%ai(r%ai(z%ai!]%ai!^%ai~O(z%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'y%ci(a%ci(r%ci(y%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#BwO$O#cy!]#cy!^#cy~P#BwO!g#vO!]'eq!k'eq~O!]/pO!k)Oy~O!Y'gq!]'gq~P#/sOr:|O!g#vO(r'pO~O[;QO!Y;PO~P#/sO!Y;PO~Og(_!R!](_!R~P!1WOa%[y!_%[y'z%[y!]%[y~P#/sO!]1TO!^)Xy~O!]5uO!^)Uq~O(T;XO~O!_1oO%i;[O~O!k;_O~O%i;dO~P&8fOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(a$|q(r$|q!]$|q!^$|q~P''VO!Q*OO'y*PO(z%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(a'ja(r'ja(y'ja!]'ja!^'ja~O!Q*OO'y*POP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la$O'la(a'la(r'la(y'la(z'la!]'la!^'la~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(a%Oq(r%Oq!]%Oq!^%Oq~P''VOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!1WO!Y;hO~P#/sOr;iO!g#vO(r'pO~O[;kO!Y;hO~P#/sO!]'pq!^'pq~P#BwO!]#h!Z!^#h!Z~P#BwO#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'z%e!Z(a%e!Z(r%e!Z!k%e!Z!Y%e!Z'w%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/sOr;tO!g#vO(r'pO~O!Y;uO~P#/sOr;|O!g#vO(r'pO~O!Y;}O~P#/sOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(a%e!Z(r%e!Z!]%e!Z!^%e!Z~P''VOr<QO!g#vO(r'pO~Ov(fX~P1qO!Q%rO~P!)[O(U!lO~P!)[O!YfX!]fX#`fX~P%2OOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~O!gfX!k]X!kfX(rfX~P'LTOP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_XO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]<iO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<tO!S${O!_$|O!i>WO!l$xO#j<zO$W%`O$t<vO$v<xO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Ol)dO~P(!yOr!eX(r!eX~P#!iOr(jX(r(jX~P##[O!^]X!^fX~P'LTO!YfX!Y$zX!]fX!]$zX#`fX~P!0SO#k<^O~O!g#vO#k<^O~O#`<nO~Oj<bO~O#`=OO!](wX!^(wX~O#`<nO!](uX!^(uX~O#k=PO~Og=RO~P!1WO#k=XO~O#k=YO~Og=RO(T&ZO~O!g#vO#k=ZO~O!g#vO#k=PO~O$O=[O~P#BwO#k=]O~O#k=^O~O#k=cO~O#k=dO~O#k=eO~O#k=fO~O$O=gO~P!1WO$O=hO~P!1WOl=sO~P7eOk#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~(OT#o!X'|(U#ps#n#qr!Q'}$]'}(T$_(e~",
        goto: "$9Y)]PPPPPP)^PP)aP)rP+W/]PPPP6mPP7TPP=QPPP@tPA^PA^PPPA^PCfPA^PA^PA^PCjPCoPD^PIWPPPI[PPPPI[L_PPPLeMVPI[PI[PP! eI[PPPI[PI[P!#lI[P!'S!(X!(bP!)U!)Y!)U!,gPPPPPPP!-W!(XPP!-h!/YP!2iI[I[!2n!5z!:h!:h!>gPPP!>oI[PPPPPPPPP!BOP!C]PPI[!DnPI[PI[I[I[I[I[PI[!FQP!I[P!LbP!Lf!Lp!Lt!LtP!IXP!Lx!LxP#!OP#!SI[PI[#!Y#%_CjA^PA^PA^A^P#&lA^A^#)OA^#+vA^#.SA^A^#.r#1W#1W#1]#1f#1W#1qPP#1WPA^#2ZA^#6YA^A^6mPPP#:_PPP#:x#:xP#:xP#;`#:xPP#;fP#;]P#;]#;y#;]#<e#<k#<n)aP#<q)aP#<z#<z#<zP)aP)aP)aP)aPP)aP#=Q#=TP#=T)aP#=XP#=[P)aP)aP)aP)aP)aP)a)aPP#=b#=h#=s#=y#>P#>V#>]#>k#>q#>{#?R#?]#?c#?s#?y#@k#@}#AT#AZ#Ai#BO#Cs#DR#DY#Et#FS#Gt#HS#HY#H`#Hf#Hp#Hv#H|#IW#Ij#IpPPPPPPPPPPP#IvPPPPPPP#Jk#Mx$ b$ i$ qPPP$']P$'f$*_$0x$0{$1O$1}$2Q$2X$2aP$2g$2jP$3W$3[$4S$5b$5g$5}PP$6S$6Y$6^$6a$6e$6i$7e$7|$8e$8i$8l$8o$8y$8|$9Q$9UR!|RoqOXst!Z#d%m&r&t&u&w,s,x2[2_Y!vQ'`-e1o5{Q%tvQ%|yQ&T|Q&j!VS'W!e-]Q'f!iS'l!r!yU*k$|*Z*oQ+o%}S+|&V&WQ,d&dQ-c'_Q-m'gQ-u'mQ0[*qQ1b,OQ1y,eR<{<Y%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_S#q]<V!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU+P%]<s<tQ+t&PQ,f&gQ,m&oQ0x+gQ0}+iQ1Y+uQ2R,kQ3`.gQ5`0|Q5f1TQ6[1zQ7Y3dQ8`5gR9e7['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S!S!nQ!r!v!y!z$|'W'_'`'l'm'n*k*o*q*r-]-c-e-u0[0_1o5{5}%[$ti#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q&X|Q'U!eS'[%i-`Q+t&PQ,P&WQ,f&gQ0n+SQ1Y+uQ1_+{Q2Q,jQ2R,kQ5f1TQ5o1aQ6[1zQ6_1|Q6`2PQ8`5gQ8c5lQ8|6bQ:X8dQ:f8yQ;V:YR<}*ZrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R,h&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'b'r(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>R>S[#]WZ#W#Z'X(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ%wxQ%{yW&Q|&V&W,OQ&_!TQ'c!hQ'e!iQ(q#sS+n%|%}Q+r&PQ,_&bQ,c&dS-l'f'gQ.i(rQ1R+oQ1X+uQ1Z+vQ1^+zQ1t,`S1x,d,eQ2|-mQ5e1TQ5i1WQ5n1`Q6Z1yQ8_5gQ8b5kQ8f5pQ:T8^R;T:U!U$zi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y!^%yy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{Q+h%wQ,T&[Q,W&]Q,b&dQ.h(qQ1s,_U1w,c,d,eQ3e.iQ6U1tS6Y1x1yQ8x6Z#f>T#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o>U<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hW%Ti%V*y>PS&[!Q&iQ&]!RQ&^!SU*}%[%d=sR,R&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^T)z$u){V+P%]<s<tW'[!e%i*Z-`S(}#y#zQ+c%rQ+y&SS.b(m(nQ1j,XQ5T0kR8i5u'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S$i$^c#Y#e%q%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.|.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ'Y!eR2q-]!W!nQ!e!r!v!y!z$|'W'_'`'l'm'n*Z*k*o*q*r-]-c-e-u0[0_1o5{5}R1l,ZnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&y!^Q'v!xS(s#u<^Q+l%zQ,]&_Q,^&aQ-j'dQ-w'oS.r(x=PS0q+X=ZQ1P+mQ1n,[Q2c,zQ2e,{Q2m-WQ2z-kQ2}-oS5Y0r=eQ5a1QS5d1S=fQ6t2oQ6x2{Q6}3SQ8]5bQ9Y6vQ9Z6yQ9^7OR:l9V$d$]c#Y#e%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vS(o#p'iQ)P#zS+b%q.|S.c(n(pR3^.d'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS#q]<VQ&t!XQ&u!YQ&w![Q&x!]R2Z,vQ'a!hQ+e%wQ-h'cS.e(q+hQ2x-gW3b.h.i0w0yQ6w2yW7U3_3a3e5^U9a7V7X7ZU:q9c9d9fS;b:p:sQ;p;cR;x;qU!wQ'`-eT5y1o5{!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(j,s,x.[2[2_]!pQ!r'`-e1o5{T#q]<V%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S(}#y#zS.b(m(n!s=l$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU$fd)_,mS(p#p'iU*v%R(w4OU0m+O.n7gQ5^0xQ7V3`Q9d7YR:s9em!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}Q't!uS(f#g2US-s'k'wQ/s*]Q0R*jQ3U-vQ4f/tQ4r0TQ4s0UQ4x0^Q7r4`S7}4t4vS8R4y4{Q9r7sQ9v7yQ9{8OQ:Q8TS:{9w9xS;g:|;PS;s;h;iS;{;t;uS<P;|;}R<S<QQ#wbQ's!uS(e#g2US(g#m+WQ+Y%fQ+j%xQ+p&OU-r'k't'wQ.W(fU/r*]*`/wQ0S*jQ0V*lQ1O+kQ1u,aS3R-s-vQ3Z.`S4e/s/tQ4n0PS4q0R0^Q4u0WQ6W1vQ7P3US7q4`4bQ7u4fU7|4r4x4{Q8P4wQ8v6XS9q7r7sQ9u7yQ9}8RQ:O8SQ:c8wQ:y9rS:z9v9xQ;S:QQ;^:dS;f:{;PS;r;g;hS;z;s;uS<O;{;}Q<R<PQ<T<SQ=o=jQ={=tR=|=uV!wQ'`-e%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S#wz!j!r=i$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=o>R%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Q%fj!^%xy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{S&Oz!jQ+k%yQ,a&dW1v,b,c,d,eU6X1w1x1yS8w6Y6ZQ:d8x!r=j$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ=t>QR=u>R%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Y#bWZ#W#Z(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ,n&o!p=k$Z$n)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=n'XU']!e%i*ZR2s-`%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ,m&oQ0x+gQ3`.gQ7Y3dR9e7[!b$Tc#Y%q(S(Y(t(y)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!P<d)^)q-Z.|2k2n3p3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!f$Vc#Y%q(S(Y(t(y)W)X)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!T<f)^)q-Z.|2k2n3p3v3w3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!^$Zc#Y%q(S(Y(t(y)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<WQ4_/kz>S)^)q-Z.|2k2n3p4P4X6u7b7k7l8k9X9g9m9n;W;`=vQ>X>ZR>Y>['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS$oh$pR4U/U'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$kf$qQ$ifS)j$l)nR)v$qT$jf$qT)l$l)n'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$oh$pQ$rhR)u$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_!s>Q$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'b)O)s*i+]+g,p,s,x-i.g/V/n0]0l1r2S2T2V2X2[2_2a3d4T4z6T6e6f6i7[8t9T!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^Q+T%aQ/c*Oo4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!U$yi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>YQ*c$zU*l$|*Z*oQ+U%bQ0W*m#f=q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n=r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hQ=w>TQ=x>UQ=y>VR=z>W!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hnoOXst!Z#d%m&r&t&u&w,s,x2[2_S*f${*YQ-R'OQ-S'QR4i/y%[%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q,U&]Q1h,WQ5s1gR8h5tV*n$|*Z*oU*n$|*Z*oT5z1o5{S0P*i/nQ4w0]T8S4z:]Q+j%xQ0V*lQ1O+kQ1u,aQ6W1vQ8v6XQ:c8wR;^:d!U%Oi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Yx*R$v)e*S*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>OS0`*t0a#f<o#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<p<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!d=S(u)c*[*e.j.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[`=T3}7c7f7j9h:t:w;yS=_.l3iT=`7e9k!U%Qi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y|*T$v)e*U*t+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>OS0b*u0c#f<q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!h=U(u)c*[*e.k.l.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[d=V3}7d7e7j9h9i:t:u:w;yS=a.m3jT=b7f9lrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q&f!UR,p&ornOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R&f!UQ,Y&^R1d,RsnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q1p,_S6R1s1tU8p6P6Q6US:_8r8sS;Y:^:aQ;m;ZR;w;nQ&m!VR,i&iR6_1|R:f8yW&Q|&V&W,OR1Z+vQ&r!WR,s&sR,y&xT2],x2_R,}&yQ,|&yR2f,}Q'y!{R-y'ySsOtQ#dXT%ps#dQ#OTR'{#OQ#RUR'}#RQ){$uR/`){Q#UVR(Q#UQ#XWU(W#X(X.QQ(X#YR.Q(YQ-^'YR2r-^Q.u(yS3m.u3nR3n.vQ-e'`R2v-eY!rQ'`-e1o5{R'j!rQ/Q)eR4S/QU#_W%h*YU(_#_(`.RQ(`#`R.R(ZQ-a']R2t-at`OXst!V!Z#d%m&i&k&r&t&u&w,s,x2[2_S#hZ%eU#r`#h.[R.[(jQ(k#jQ.X(gW.a(k.X3X7RQ3X.YR7R3YQ)n$lR/W)nQ$phR)t$pQ$`cU)a$`-|<jQ-|<WR<j)qQ/q*]W4c/q4d7t9sU4d/r/s/tS7t4e4fR9s7u$e*Q$v(u)c)e*[*e*t*u+Q+R+V.l.m.o.p.q/_/g/i/k/v/|0d0e0v1e3f3g3h3}4R4[4g4h4l4|5O5R5S5W5r7]7^7_7`7e7f7h7i7j7p7w7z8U8X8Z9h9i9j9t9|:R:S:t:u:v:w:x:};R;e;j;v;y=p=}>O>Z>[Q/z*eU4k/z4m7xQ4m/|R7x4lS*o$|*ZR0Y*ox*S$v)e*t*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>O!d.j(u)c*[*e.l.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/h*S.j7ca7c3}7e7f7j9h:t:w;yQ0a*tQ3i.lU4}0a3i9kR9k7e|*U$v)e*t*u+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>O!h.k(u)c*[*e.l.m.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/j*U.k7de7d3}7e7f7j9h9i:t:u:w;yQ0c*uQ3j.mU5P0c3j9lR9l7fQ*z%UR0g*zQ5]0vR8Y5]Q+_%kR0u+_Q5v1jS8j5v:[R:[8kQ,[&_R1m,[Q5{1oR8m5{Q1{,fS6]1{8zR8z6_Q1U+rW5h1U5j8a:VQ5j1XQ8a5iR:V8bQ+w&QR1[+wQ2_,xR6m2_YrOXst#dQ&v!ZQ+a%mQ,r&rQ,t&tQ,u&uQ,w&wQ2Y,sS2],x2_R6l2[Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'q!uQ+`%lQ+l%zQ,Q&XQ,h&mQ-P&|W-p'k's't'wQ-w'oQ0X*nQ1P+mQ1c,PS2O,i,lQ2g-OQ2h-RQ2i-SQ2}-oW3P-r-s-v-xQ5a1QQ5m1_Q5q1eQ6V1uQ6a2QQ6k2ZU6z3O3R3UQ6}3SQ8]5bQ8e5oQ8g5rQ8l5zQ8u6WQ8{6`S9[6{7PQ9^7OQ:W8cQ:b8vQ:g8|Q:n9]Q;U:XQ;]:cQ;a:oQ;l;VR;o;^Q%zyQ'd!iQ'o!uU+m%{%|%}Q-W'VU-k'e'f'gS-o'k'uQ0Q*jS1Q+n+oQ2o-YS2{-l-mQ3S-tS4p0R0UQ5b1RQ6v2uQ6y2|Q7O3TU7{4r4s4vQ9z7}R;O9{S$wi>PR*{%VU%Ui%V>PR0f*yQ$viS(u#v+iS)c$b$cQ)e$dQ*[$xS*e${*YQ*t%OQ*u%QQ+Q%^Q+R%_Q+V%cQ.l<oQ.m<qQ.o<uQ.p<wQ.q<yQ/_)yQ/g*RQ/i*TQ/k*VQ/v*aS/|*g/mQ0d*wQ0e*xl0v+f,V.f1i1q3c6S7W8q9b:`:r;[;dQ1e,SQ3f=SQ3g=UQ3h=XS3}<l<mQ4R/PS4[/d4^Q4g/xQ4h/yQ4l/{Q4|0`Q5O0bQ5R0iQ5S0jQ5W0oQ5r1fQ7]=]Q7^=_Q7_=aQ7`=cQ7e<pQ7f<rQ7h<vQ7i<xQ7j<zQ7p4_Q7w4jQ7z4oQ8U5QQ8X5[Q8Z5_Q9h=YQ9i=TQ9j=VQ9t7vQ9|8QQ:R8VQ:S8[Q:t=^Q:u=`Q:v=bQ:w=dQ:x9pQ:}9yQ;R:PQ;e=gQ;j;QQ;v;kQ;y=hQ=p>PQ=}>XQ>O>YQ>Z>]R>[>^Q+O%]Q.n<sR7g<tnpOXst!Z#d%m&r&t&u&w,s,x2[2_Q!fPS#fZ#oQ&|!`W'h!o*i0]4zQ(P#SQ)Q#{Q)r$nS,l&k&nQ,q&oQ-O&{S-T'T/nQ-g'bQ.x)OQ/[)sQ0s+]Q0y+gQ2W,pQ2y-iQ3a.gQ4W/VQ5U0lQ6Q1rQ6c2SQ6d2TQ6h2VQ6j2XQ6o2aQ7Z3dQ7m4TQ8s6TQ9P6eQ9Q6fQ9S6iQ9f7[Q:a8tR:k9T#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'b)O*i+]+g,p,s,x-i.g/n0]0l1r2S2T2V2X2[2_2a3d4z6T6e6f6i7[8t9TQ#YWQ#eYQ%quQ%svS%uw!gS(S#W(VQ(Y#ZQ(t#uQ(y#xQ)R$OQ)S$PQ)T$QQ)U$RQ)V$SQ)W$TQ)X$UQ)Y$VQ)Z$WQ)[$XQ)^$ZQ)`$_Q)b$aQ)g$eW)q$n)s/V4TQ+d%tQ+x&RS-Z'X2pQ-x'rS-}(T.PQ.S(]Q.U(dQ.s(xQ.v(zQ.z<UQ.|<XQ.}<YQ/O<]Q/b)}Q0p+XQ2k-UQ2n-XQ3O-qQ3V.VQ3k.tQ3p<^Q3q<_Q3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{.{Q3|<kQ4P<nQ4Q<{Q4X<iQ5X0rQ5c1SQ6u=OQ6{3QQ7Q3WQ7a3lQ7b=PQ7k=RQ7l=ZQ8k5wQ9X6sQ9]6|Q9g=[Q9m=eQ9n=fQ:o9_Q;W:ZQ;`:mQ<W#SR=v>SR#[WR'Z!el!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}S'V!e-]U*j$|*Z*oS-Y'W'_S0U*k*qQ0^*rQ2u-cQ4v0[R4{0_R({#xQ!fQT-d'`-e]!qQ!r'`-e1o5{Q#p]R'i<VR)f$dY!uQ'`-e1o5{Q'k!rS'u!v!yS'w!z5}S-t'l'mQ-v'nR3T-uT#kZ%eS#jZ%eS%km,oU(g#h#i#lS.Y(h(iQ.^(jQ0t+^Q3Y.ZU3Z.[.]._S7S3[3]R9`7Td#^W#W#Z%h(T(^*Y+Z.T/mr#gZm#h#i#l%e(h(i(j+^.Z.[.]._3[3]7TS*]$x*bQ/t*^Q2U,oQ2l-VQ4`/pQ6q2dQ7s4aQ9W6rT=m'X+[V#aW%h*YU#`W%h*YS(U#W(^U(Z#Z+Z/mS-['X+[T.O(T.TV'^!e%i*ZQ$lfR)x$qT)m$l)nR4V/UT*_$x*bT*h${*YQ0w+fQ1g,VQ3_.fQ5t1iQ6P1qQ7X3cQ8r6SQ9c7WQ:^8qQ:p9bQ;Z:`Q;c:rQ;n;[R;q;dnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&l!VR,h&itmOXst!U!V!Z#d%m&i&r&t&u&w,s,x2[2_R,o&oT%lm,oR1k,XR,g&gQ&U|S+}&V&WR1^,OR+s&PT&p!W&sT&q!W&sT2^,x2_",
        nodeNames: "\u26a0 ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
        maxTerm: 380,
        context: sM,
        nodeProps: [
          ["isolate", -8, 5, 6, 14, 37, 39, 51, 53, 55, ""],
          ["group", -26, 9, 17, 19, 68, 207, 211, 215, 216, 218, 221, 224, 234, 237, 243, 245, 247, 249, 252, 258, 264, 266, 268, 270, 272, 274, 275, "Statement", -34, 13, 14, 32, 35, 36, 42, 51, 54, 55, 57, 62, 70, 72, 76, 80, 82, 84, 85, 110, 111, 120, 121, 136, 139, 141, 142, 143, 144, 145, 147, 148, 167, 169, 171, "Expression", -23, 31, 33, 37, 41, 43, 45, 173, 175, 177, 178, 180, 181, 182, 184, 185, 186, 188, 189, 190, 201, 203, 205, 206, "Type", -3, 88, 103, 109, "ClassItem"],
          ["openedBy", 23, "<", 38, "InterpolationStart", 56, "[", 60, "{", 73, "(", 160, "JSXStartCloseTag"],
          ["closedBy", -2, 24, 168, ">", 40, "InterpolationEnd", 50, "]", 61, "}", 74, ")", 165, "JSXEndTag"]
        ],
        propSources: [NM],
        skippedNodes: [0, 5, 6, 278],
        repeatNodeCount: 37,
        tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
        tokenizers: [kM, ZM, oM, YM, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, DM, new HM("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340), new HM("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)],
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
          get: MM => AM[MM] || -1
        }, {
          term: 343,
          get: MM => xM[MM] || -1
        }, {
          term: 95,
          get: MM => vM[MM] || -1
        }],
        tokenPrec: 15201
      });
    var BM = iM(43996),
      XM = iM(43972),
      IM = iM(43977),
      KM = iM(43970);
    const qM = [(0, KM.s)("function ${name}(${params}) {\n\t${}\n}", {
        label: "function",
        detail: "definition",
        type: "keyword"
      }), (0, KM.s)("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}", {
        label: "for",
        detail: "loop",
        type: "keyword"
      }), (0, KM.s)("for (let ${name} of ${collection}) {\n\t${}\n}", {
        label: "for",
        detail: "of loop",
        type: "keyword"
      }), (0, KM.s)("do {\n\t${}\n} while (${})", {
        label: "do",
        detail: "loop",
        type: "keyword"
      }), (0, KM.s)("while (${}) {\n\t${}\n}", {
        label: "while",
        detail: "loop",
        type: "keyword"
      }), (0, KM.s)("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
        label: "try",
        detail: "/ catch block",
        type: "keyword"
      }), (0, KM.s)("if (${}) {\n\t${}\n}", {
        label: "if",
        detail: "block",
        type: "keyword"
      }), (0, KM.s)("if (${}) {\n\t${}\n} else {\n\t${}\n}", {
        label: "if",
        detail: "/ else block",
        type: "keyword"
      }), (0, KM.s)("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
        label: "class",
        detail: "definition",
        type: "keyword"
      }), (0, KM.s)('import {${names}} from "${module}"\n${}', {
        label: "import",
        detail: "named",
        type: "keyword"
      }), (0, KM.s)('import ${name} from "${module}"\n${}', {
        label: "import",
        detail: "default",
        type: "keyword"
      })],
      TM = qM.concat([(0, KM.s)("interface ${name} {\n\t${}\n}", {
        label: "interface",
        detail: "definition",
        type: "keyword"
      }), (0, KM.s)("type ${name} = ${type}", {
        label: "type",
        detail: "definition",
        type: "keyword"
      }), (0, KM.s)("enum ${name} {\n\t${}\n}", {
        label: "enum",
        detail: "definition",
        type: "keyword"
      })]),
      VM = new OM.n,
      cM = new Set(["Script", "Block", "FunctionExpression", "FunctionDeclaration", "ArrowFunction", "MethodDeclaration", "ForStatement"]);

    function Mr(MM) {
      return (rM, iM) => {
        let OM = rM.node.getChild("VariableDefinition");
        return OM && iM(OM, MM), !0
      }
    }
    const rr = ["FunctionDeclaration"],
      ir = {
        FunctionDeclaration: Mr("function"),
        ClassDeclaration: Mr("class"),
        ClassExpression: () => !0,
        EnumDeclaration: Mr("constant"),
        TypeAliasDeclaration: Mr("type"),
        NamespaceDeclaration: Mr("namespace"),
        VariableDefinition(MM, rM) {
          MM.matchContext(rr) || rM(MM, "variable")
        },
        TypeDefinition(MM, rM) {
          rM(MM, "type")
        },
        __proto__: null
      };

    function Or(MM, rM) {
      let iM = VM.get(rM);
      if (iM) return iM;
      let SM = [],
        jM = !0;

      function aM(rM, iM) {
        let OM = MM.sliceString(rM.from, rM.to);
        SM.push({
          label: OM,
          type: iM
        })
      }
      return rM.cursor(OM.c.IncludeAnonymous).iterate((rM => {
        if (jM) jM = !1;
        else if (rM.name) {
          let MM = ir[rM.name];
          if (MM && MM(rM, aM) || cM.has(rM.name)) return !1
        } else if (rM.to - rM.from > 8192) {
          for (let iM of Or(MM, rM.node)) SM.push(iM);
          return !1
        }
      })), VM.set(rM, SM), SM
    }
    const Sr = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
      jr = ["TemplateString", "String", "RegExp", "LineComment", "BlockComment", "VariableDefinition", "TypeDefinition", "Label", "PropertyDefinition", "PropertyName", "PrivatePropertyDefinition", "PrivatePropertyName", "JSXText", "JSXAttributeValue", "JSXOpenTag", "JSXCloseTag", "JSXSelfClosingTag", ".", "?."];

    function ar(MM) {
      let rM = (0, BM.kb)(MM.state).resolveInner(MM.pos, -1);
      if (jr.indexOf(rM.name) > -1) return null;
      let iM = "VariableName" == rM.name || rM.to - rM.from < 20 && Sr.test(MM.state.sliceDoc(rM.from, rM.to));
      if (!iM && !MM.explicit) return null;
      let OM = [];
      for (let SM = rM; SM; SM = SM.parent) cM.has(SM.name) && (OM = OM.concat(Or(MM.state.doc, SM)));
      return {
        options: OM,
        from: iM ? rM.from : MM.pos,
        validFor: Sr
      }
    }
    const Pr = BM.i.define({
        name: "javascript",
        parser: FM.configure({
          props: [BM.R.add({
            IfStatement: (0, BM.m)({
              except: /^\s*({|else\b)/
            }),
            TryStatement: (0, BM.m)({
              except: /^\s*({|catch\b|finally\b)/
            }),
            LabeledStatement: BM.A,
            SwitchBody: MM => {
              let rM = MM.textAfter,
                iM = /^\s*\}/.test(rM),
                OM = /^\s*(case|default)\b/.test(rM);
              return MM.baseIndent + (iM ? 0 : OM ? 1 : 2) * MM.unit
            },
            Block: (0, BM.w)({
              closing: "}"
            }),
            ArrowFunction: MM => MM.baseIndent + MM.unit,
            "TemplateString BlockComment": () => null,
            "Statement Property": (0, BM.m)({
              except: /^\s*{/
            }),
            JSXElement(MM) {
              let rM = /^\s*<\//.test(MM.textAfter);
              return MM.lineIndent(MM.node.from) + (rM ? 0 : MM.unit)
            },
            JSXEscape(MM) {
              let rM = /\s*\}/.test(MM.textAfter);
              return MM.lineIndent(MM.node.from) + (rM ? 0 : MM.unit)
            },
            "JSXOpenTag JSXSelfClosingTag": MM => MM.column(MM.node.from) + MM.unit
          }), BM.H.add({
            "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": BM.E,
            BlockComment: MM => ({
              from: MM.from + 2,
              to: MM.to - 2
            }),
            JSXElement(MM) {
              let rM = MM.firstChild;
              if (!rM || "JSXSelfClosingTag" == rM.name) return null;
              let iM = MM.lastChild;
              return {
                from: rM.to,
                to: iM.type.isError ? MM.to : iM.from
              }
            },
            "JSXSelfClosingTag JSXOpenTag"(MM) {
              var rM;
              let iM = null === (rM = MM.firstChild) || void 0 === rM ? void 0 : rM.nextSibling,
                OM = MM.lastChild;
              return !iM || iM.type.isError ? null : {
                from: iM.to,
                to: OM.type.isError ? MM.to : OM.from
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
      nr = {
        test: MM => /^JSX/.test(MM.name),
        facet: (0, BM.s)({
          commentTokens: {
            block: {
              open: "{/*",
              close: "*/}"
            }
          }
        })
      },
      Qr = Pr.configure({
        dialect: "ts"
      }, "typescript"),
      zr = Pr.configure({
        dialect: "jsx",
        props: [BM.ab.add((MM => MM.isTop ? [nr] : void 0))]
      }),
      Lr = Pr.configure({
        dialect: "jsx ts",
        props: [BM.ab.add((MM => MM.isTop ? [nr] : void 0))]
      }, "typescript");
    let mr = MM => ({
      label: MM,
      type: "keyword"
    });
    const Hr = "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(mr),
      hr = Hr.concat(["declare", "implements", "private", "protected", "public"].map(mr));

    function Jr() {
      let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        rM = MM.jsx ? MM.typescript ? Lr : zr : MM.typescript ? Qr : Pr,
        iM = MM.typescript ? TM.concat(hr) : qM.concat(Hr);
      return new BM.j(rM, [Pr.data.of({
        autocomplete: (0, KM.p)(jr, (0, KM.l)(iM))
      }), Pr.data.of({
        autocomplete: ar
      }), MM.jsx ? lr : []])
    }

    function dr(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : MM.length;
      for (let OM = null === rM || void 0 === rM ? void 0 : rM.firstChild; OM; OM = OM.nextSibling)
        if ("JSXIdentifier" == OM.name || "JSXBuiltin" == OM.name || "JSXNamespacedName" == OM.name || "JSXMemberExpression" == OM.name) return MM.sliceString(OM.from, Math.min(OM.to, iM));
      return ""
    }
    const yr = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      lr = IM.f.inputHandler.of(((MM, rM, iM, OM, SM) => {
        if ((yr ? MM.composing : MM.compositionStarted) || MM.state.readOnly || rM != iM || ">" != OM && "/" != OM || !Pr.isActiveAt(MM.state, rM, -1)) return !1;
        let jM = SM(),
          {
            state: aM
          } = jM,
          PM = aM.changeByRange((MM => {
            var rM;
            let iM, {
                head: SM
              } = MM,
              jM = (0, BM.kb)(aM).resolveInner(SM - 1, -1);
            if ("JSXStartTag" == jM.name && (jM = jM.parent), aM.doc.sliceString(SM - 1, SM) != OM || "JSXAttributeValue" == jM.name && jM.to > SM);
            else {
              if (">" == OM && "JSXFragmentTag" == jM.name) return {
                range: MM,
                changes: {
                  from: SM,
                  insert: "</>"
                }
              };
              if ("/" == OM && "JSXStartCloseTag" == jM.name) {
                let MM = jM.parent,
                  OM = MM.parent;
                if (OM && MM.from == SM - 2 && ((iM = dr(aM.doc, OM.firstChild, SM)) || "JSXFragmentTag" == (null === (rM = OM.firstChild) || void 0 === rM ? void 0 : rM.name))) {
                  let MM = `${iM}>`;
                  return {
                    range: XM.l.cursor(SM + MM.length, -1),
                    changes: {
                      from: SM,
                      insert: MM
                    }
                  }
                }
              } else if (">" == OM) {
                let rM = function(MM) {
                  for (;;) {
                    if ("JSXOpenTag" == MM.name || "JSXSelfClosingTag" == MM.name || "JSXFragmentTag" == MM.name) return MM;
                    if ("JSXEscape" == MM.name || !MM.parent) return null;
                    MM = MM.parent
                  }
                }(jM);
                if (rM && "JSXOpenTag" == rM.name && !/^\/?>|^<\//.test(aM.doc.sliceString(SM, SM + 2)) && (iM = dr(aM.doc, rM, SM))) return {
                  range: MM,
                  changes: {
                    from: SM,
                    insert: `</${iM}>`
                  }
                }
              }
            }
            return {
              range: MM
            }
          }));
        return !PM.changes.empty && (MM.dispatch([jM, aM.update(PM, {
          userEvent: "input.complete",
          scrollIntoView: !0
        })]), !0)
      }))
  },
  43996: (MM, rM, iM) => {
    iM.d(rM, {
      A: () => vM,
      C: () => lr,
      E: () => qM,
      G: () => Qr,
      H: () => KM,
      K: () => yM,
      L: () => pM,
      O: () => sM,
      R: () => kM,
      S: () => XM,
      U: () => WM,
      X: () => RM,
      Y: () => xr,
      ab: () => LM,
      b: () => Ur,
      e: () => DM,
      eb: () => br,
      i: () => hM,
      ib: () => dM,
      j: () => gM,
      kb: () => JM,
      l: () => fr,
      m: () => FM,
      q: () => gr,
      s: () => zM,
      w: () => AM
    });
    var OM, SM = iM(43998),
      jM = iM(43972),
      aM = iM(43977),
      PM = iM(44005),
      nM = iM(43982);
    const QM = new SM.f;

    function zM(MM) {
      return jM.s.define({
        combine: MM ? rM => rM.concat(MM) : void 0
      })
    }
    const LM = new SM.f;
    class mM {
      constructor(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this.data = MM, this.name = OM, jM.p.prototype.hasOwnProperty("tree") || Object.defineProperty(jM.p.prototype, "tree", {
          get() {
            return JM(this)
          }
        }), this.parser = rM, this.extension = [tM.of(this), jM.p.languageData.of(((MM, rM, iM) => {
          let OM = HM(MM, rM, iM),
            SM = OM.type.prop(QM);
          if (!SM) return [];
          let jM = MM.facet(SM),
            aM = OM.type.prop(LM);
          if (aM) {
            let SM = OM.resolve(rM - OM.from, iM);
            for (let rM of aM)
              if (rM.test(SM, MM)) {
                let iM = MM.facet(rM.facet);
                return "replace" == rM.type ? iM : iM.concat(jM)
              }
          }
          return jM
        }))].concat(iM)
      }
      isActiveAt(MM, rM) {
        return HM(MM, rM, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1).type.prop(QM) == this.data
      }
      findRegions(MM) {
        let rM = MM.facet(tM);
        if ((null === rM || void 0 === rM ? void 0 : rM.data) == this.data) return [{
          from: 0,
          to: MM.doc.length
        }];
        if (!rM || !rM.allowsNesting) return [];
        let iM = [],
          OM = (MM, rM) => {
            if (MM.prop(QM) == this.data) return void iM.push({
              from: rM,
              to: rM + MM.length
            });
            let jM = MM.prop(SM.f.mounted);
            if (jM) {
              if (jM.tree.prop(QM) == this.data) {
                if (jM.overlay)
                  for (let MM of jM.overlay) iM.push({
                    from: MM.from + rM,
                    to: MM.to + rM
                  });
                else iM.push({
                  from: rM,
                  to: rM + MM.length
                });
                return
              }
              if (jM.overlay) {
                let MM = iM.length;
                if (OM(jM.tree, jM.overlay[0].from + rM), iM.length > MM) return
              }
            }
            for (let iM = 0; iM < MM.children.length; iM++) {
              let jM = MM.children[iM];
              jM instanceof SM.v && OM(jM, MM.positions[iM] + rM)
            }
          };
        return OM(JM(MM), 0), iM
      }
      get allowsNesting() {
        return !0
      }
    }

    function HM(MM, rM, iM) {
      let OM = MM.facet(tM),
        jM = JM(MM).topNode;
      if (!OM || OM.allowsNesting)
        for (let aM = jM; aM; aM = aM.enter(rM, iM, SM.c.ExcludeBuffers | SM.c.EnterBracketed)) aM.type.isTop && (jM = aM);
      return jM
    }
    mM.setState = jM.G.define();
    class hM extends mM {
      constructor(MM, rM, iM) {
        super(MM, rM, [], iM), this.parser = rM
      }
      static define(MM) {
        let rM = zM(MM.languageData);
        return new hM(rM, MM.parser.configure({
          props: [QM.add((MM => MM.isTop ? rM : void 0))]
        }), MM.name)
      }
      configure(MM, rM) {
        return new hM(this.data, this.parser.configure(MM), rM || this.name)
      }
      get allowsNesting() {
        return this.parser.hasWrappers()
      }
    }

    function JM(MM) {
      let rM = MM.field(mM.state, !1);
      return rM ? rM.tree : SM.v.empty
    }

    function dM(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : MM.doc.length;
      var iM;
      return (null === (iM = MM.field(mM.state, !1)) || void 0 === iM ? void 0 : iM.context.isDone(rM)) || !1
    }

    function yM(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : MM.viewport.to,
        iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        OM = function(MM, rM) {
          let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
          var OM;
          let SM = null === (OM = MM.field(mM.state, !1)) || void 0 === OM ? void 0 : OM.context;
          if (!SM) return null;
          let jM = SM.viewport;
          SM.updateViewport({
            from: 0,
            to: rM
          });
          let aM = SM.isDone(rM) || SM.work(iM, rM) ? SM.tree : null;
          return SM.updateViewport(jM), aM
        }(MM.state, rM, iM);
      return OM != JM(MM.state) && MM.dispatch({}), !!OM
    }
    class lM {
      constructor(MM) {
        this.doc = MM, this.cursorPos = 0, this.string = "", this.cursor = MM.iter()
      }
      get length() {
        return this.doc.length
      }
      syncTo(MM) {
        return this.string = this.cursor.next(MM - this.cursorPos).value, this.cursorPos = MM + this.string.length, this.cursorPos - this.string.length
      }
      chunk(MM) {
        return this.syncTo(MM), this.string
      }
      get lineChunks() {
        return !0
      }
      read(MM, rM) {
        let iM = this.cursorPos - this.string.length;
        return MM < iM || rM >= this.cursorPos ? this.doc.sliceString(MM, rM) : this.string.slice(MM - iM, rM - iM)
      }
    }
    let EM = null;
    class UM {
      constructor(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          OM = arguments.length > 3 ? arguments[3] : void 0,
          SM = arguments.length > 4 ? arguments[4] : void 0,
          jM = arguments.length > 5 ? arguments[5] : void 0,
          aM = arguments.length > 6 ? arguments[6] : void 0,
          PM = arguments.length > 7 ? arguments[7] : void 0;
        this.parser = MM, this.state = rM, this.fragments = iM, this.tree = OM, this.treeLen = SM, this.viewport = jM, this.skipped = aM, this.scheduleOn = PM, this.parse = null, this.tempSkipped = []
      }
      static create(MM, rM, iM) {
        return new UM(MM, rM, [], SM.v.empty, 0, iM, [], null)
      }
      startParse() {
        return this.parser.startParse(new lM(this.state.doc), this.fragments)
      }
      work(MM, rM) {
        return null != rM && rM >= this.state.doc.length && (rM = void 0), this.tree != SM.v.empty && this.isDone(null !== rM && void 0 !== rM ? rM : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext((() => {
          var iM;
          if ("number" == typeof MM) {
            let rM = Date.now() + MM;
            MM = () => Date.now() > rM
          }
          for (this.parse || (this.parse = this.startParse()), null != rM && (null == this.parse.stoppedAt || this.parse.stoppedAt > rM) && rM < this.state.doc.length && this.parse.stopAt(rM);;) {
            let OM = this.parse.advance();
            if (OM) {
              if (this.fragments = this.withoutTempSkipped(SM.r.addTree(OM, this.fragments, null != this.parse.stoppedAt)), this.treeLen = null !== (iM = this.parse.stoppedAt) && void 0 !== iM ? iM : this.state.doc.length, this.tree = OM, this.parse = null, !(this.treeLen < (null !== rM && void 0 !== rM ? rM : this.state.doc.length))) return !0;
              this.parse = this.startParse()
            }
            if (MM()) return !1
          }
        }))
      }
      takeTree() {
        let MM, rM;
        this.parse && (MM = this.parse.parsedPos) >= this.treeLen && ((null == this.parse.stoppedAt || this.parse.stoppedAt > MM) && this.parse.stopAt(MM), this.withContext((() => {
          for (; !(rM = this.parse.advance()););
        })), this.treeLen = MM, this.tree = rM, this.fragments = this.withoutTempSkipped(SM.r.addTree(this.tree, this.fragments, !0)), this.parse = null)
      }
      withContext(MM) {
        let rM = EM;
        EM = this;
        try {
          return MM()
        } finally {
          EM = rM
        }
      }
      withoutTempSkipped(MM) {
        for (let rM; rM = this.tempSkipped.pop();) MM = GM(MM, rM.from, rM.to);
        return MM
      }
      changes(MM, rM) {
        let {
          fragments: iM,
          tree: OM,
          treeLen: jM,
          viewport: aM,
          skipped: PM
        } = this;
        if (this.takeTree(), !MM.empty) {
          let rM = [];
          if (MM.iterChangedRanges(((MM, iM, OM, SM) => rM.push({
              fromA: MM,
              toA: iM,
              fromB: OM,
              toB: SM
            }))), iM = SM.r.applyChanges(iM, rM), OM = SM.v.empty, jM = 0, aM = {
              from: MM.mapPos(aM.from, -1),
              to: MM.mapPos(aM.to, 1)
            }, this.skipped.length) {
            PM = [];
            for (let rM of this.skipped) {
              let iM = MM.mapPos(rM.from, 1),
                OM = MM.mapPos(rM.to, -1);
              iM < OM && PM.push({
                from: iM,
                to: OM
              })
            }
          }
        }
        return new UM(this.parser, rM, iM, OM, jM, aM, PM, this.scheduleOn)
      }
      updateViewport(MM) {
        if (this.viewport.from == MM.from && this.viewport.to == MM.to) return !1;
        this.viewport = MM;
        let rM = this.skipped.length;
        for (let iM = 0; iM < this.skipped.length; iM++) {
          let {
            from: rM,
            to: OM
          } = this.skipped[iM];
          rM < MM.to && OM > MM.from && (this.fragments = GM(this.fragments, rM, OM), this.skipped.splice(iM--, 1))
        }
        return !(this.skipped.length >= rM) && (this.reset(), !0)
      }
      reset() {
        this.parse && (this.takeTree(), this.parse = null)
      }
      skipUntilInView(MM, rM) {
        this.skipped.push({
          from: MM,
          to: rM
        })
      }
      static getSkippingParser(MM) {
        return new class extends SM.p {
          createParse(rM, iM, OM) {
            let jM = OM[0].from,
              aM = OM[OM.length - 1].to;
            return {
              parsedPos: jM,
              advance() {
                let rM = EM;
                if (rM) {
                  for (let MM of OM) rM.tempSkipped.push(MM);
                  MM && (rM.scheduleOn = rM.scheduleOn ? Promise.all([rM.scheduleOn, MM]) : MM)
                }
                return this.parsedPos = aM, new SM.v(SM.j.none, [], [], aM - jM)
              },
              stoppedAt: null,
              stopAt() {}
            }
          }
        }
      }
      isDone(MM) {
        MM = Math.min(MM, this.state.doc.length);
        let rM = this.fragments;
        return this.treeLen >= MM && rM.length && 0 == rM[0].from && rM[0].to >= MM
      }
      static get() {
        return EM
      }
    }

    function GM(MM, rM, iM) {
      return SM.r.applyChanges(MM, [{
        fromA: rM,
        toA: iM,
        fromB: rM,
        toB: iM
      }])
    }
    class CM {
      constructor(MM) {
        this.context = MM, this.tree = MM.tree
      }
      apply(MM) {
        if (!MM.docChanged && this.tree == this.context.tree) return this;
        let rM = this.context.changes(MM.changes, MM.state),
          iM = this.context.treeLen == MM.startState.doc.length ? void 0 : Math.max(MM.changes.mapPos(this.context.treeLen), rM.viewport.to);
        return rM.work(20, iM) || rM.takeTree(), new CM(rM)
      }
      static init(MM) {
        let rM = Math.min(3e3, MM.doc.length),
          iM = UM.create(MM.facet(tM).parser, MM, {
            from: 0,
            to: rM
          });
        return iM.work(20, rM) || iM.takeTree(), new CM(iM)
      }
    }
    mM.state = jM.H.define({
      create: CM.init,
      update(MM, rM) {
        for (let iM of rM.effects)
          if (iM.is(mM.setState)) return iM.value;
        return rM.startState.facet(tM) != rM.state.facet(tM) ? CM.init(rM.state) : MM.apply(rM)
      }
    });
    let eM = MM => {
      let rM = setTimeout((() => MM()), 500);
      return () => clearTimeout(rM)
    };
    "undefined" != typeof requestIdleCallback && (eM = MM => {
      let rM = -1,
        iM = setTimeout((() => {
          rM = requestIdleCallback(MM, {
            timeout: 400
          })
        }), 100);
      return () => rM < 0 ? clearTimeout(iM) : cancelIdleCallback(rM)
    });
    const bM = "undefined" != typeof navigator && (null === (OM = navigator.scheduling) || void 0 === OM ? void 0 : OM.isInputPending) ? () => navigator.scheduling.isInputPending() : null,
      wM = aM.m.fromClass(class {
        constructor(MM) {
          this.view = MM, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork()
        }
        update(MM) {
          let rM = this.view.state.field(mM.state).context;
          (rM.updateViewport(MM.view.viewport) || this.view.viewport.to > rM.treeLen) && this.scheduleWork(), (MM.docChanged || MM.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(rM)
        }
        scheduleWork() {
          if (this.working) return;
          let {
            state: MM
          } = this.view, rM = MM.field(mM.state);
          rM.tree == rM.context.tree && rM.context.isDone(MM.doc.length) || (this.working = eM(this.work))
        }
        work(MM) {
          this.working = null;
          let rM = Date.now();
          if (this.chunkEnd < rM && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = rM + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
          let {
            state: iM,
            viewport: {
              to: OM
            }
          } = this.view, SM = iM.field(mM.state);
          if (SM.tree == SM.context.tree && SM.context.isDone(OM + 1e5)) return;
          let jM = Date.now() + Math.min(this.chunkBudget, 100, MM && !bM ? Math.max(25, MM.timeRemaining() - 5) : 1e9),
            aM = SM.context.treeLen < OM && iM.doc.length > OM + 1e3,
            PM = SM.context.work((() => bM && bM() || Date.now() > jM), OM + (aM ? 0 : 1e5));
          this.chunkBudget -= Date.now() - rM, (PM || this.chunkBudget <= 0) && (SM.context.takeTree(), this.view.dispatch({
            effects: mM.setState.of(new CM(SM.context))
          })), this.chunkBudget > 0 && (!PM || aM) && this.scheduleWork(), this.checkAsyncSchedule(SM.context)
        }
        checkAsyncSchedule(MM) {
          MM.scheduleOn && (this.workScheduled++, MM.scheduleOn.then((() => this.scheduleWork())).catch((MM => (0, aM._)(this.view.state, MM))).then((() => this.workScheduled--)), MM.scheduleOn = null)
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
      tM = jM.s.define({
        combine: MM => MM.length ? MM[0] : null,
        enables: MM => [mM.state, wM, aM.f.contentAttributes.compute([MM], (rM => {
          let iM = rM.facet(MM);
          return iM && iM.name ? {
            "data-language": iM.name
          } : {}
        }))]
      });
    class gM {
      constructor(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        this.language = MM, this.support = rM, this.extension = [MM, rM]
      }
    }
    const uM = jM.s.define(),
      RM = jM.s.define({
        combine: MM => {
          if (!MM.length) return "  ";
          let rM = MM[0];
          if (!rM || /\S/.test(rM) || Array.from(rM).some((MM => MM != rM[0]))) throw new Error("Invalid indent unit: " + JSON.stringify(MM[0]));
          return rM
        }
      });

    function pM(MM) {
      let rM = MM.facet(RM);
      return 9 == rM.charCodeAt(0) ? MM.tabSize * rM.length : rM.length
    }

    function WM(MM, rM) {
      let iM = "",
        OM = MM.tabSize,
        SM = MM.facet(RM)[0];
      if ("\t" == SM) {
        for (; rM >= OM;) iM += "\t", rM -= OM;
        SM = " "
      }
      for (let jM = 0; jM < rM; jM++) iM += SM;
      return iM
    }

    function sM(MM, rM) {
      MM instanceof jM.p && (MM = new DM(MM));
      for (let OM of MM.state.facet(uM)) {
        let iM = OM(MM, rM);
        if (void 0 !== iM) return iM
      }
      let iM = JM(MM.state);
      return iM.length >= rM ? function(MM, rM, iM) {
        let OM = rM.resolveStack(iM),
          SM = rM.resolveInner(iM, -1).resolve(iM, 0).enterUnfinishedNodesBefore(iM);
        if (SM != OM.node) {
          let MM = [];
          for (let rM = SM; rM && !(rM.from < OM.node.from || rM.to > OM.node.to || rM.from == OM.node.from && rM.type == OM.node.type); rM = rM.parent) MM.push(rM);
          for (let rM = MM.length - 1; rM >= 0; rM--) OM = {
            node: MM[rM],
            next: OM
          }
        }
        return ZM(OM, MM, iM)
      }(MM, iM, rM) : null
    }
    class DM {
      constructor(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.state = MM, this.options = rM, this.unit = pM(MM)
      }
      lineAt(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          iM = this.state.doc.lineAt(MM),
          {
            simulateBreak: OM,
            simulateDoubleBreak: SM
          } = this.options;
        return null != OM && OM >= iM.from && OM <= iM.to ? SM && OM == MM ? {
          text: "",
          from: MM
        } : (rM < 0 ? OM < MM : OM <= MM) ? {
          text: iM.text.slice(OM - iM.from),
          from: OM
        } : {
          text: iM.text.slice(0, OM - iM.from),
          from: iM.from
        } : iM
      }
      textAfterPos(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (this.options.simulateDoubleBreak && MM == this.options.simulateBreak) return "";
        let {
          text: iM,
          from: OM
        } = this.lineAt(MM, rM);
        return iM.slice(MM - OM, Math.min(iM.length, MM + 100 - OM))
      }
      column(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: iM,
            from: OM
          } = this.lineAt(MM, rM),
          SM = this.countColumn(iM, MM - OM),
          jM = this.options.overrideIndentation ? this.options.overrideIndentation(OM) : -1;
        return jM > -1 && (SM += jM - this.countColumn(iM, iM.search(/\S|$/))), SM
      }
      countColumn(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : MM.length;
        return (0, jM.Y)(MM, this.state.tabSize, rM)
      }
      lineIndent(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: iM,
            from: OM
          } = this.lineAt(MM, rM),
          SM = this.options.overrideIndentation;
        if (SM) {
          let MM = SM(OM);
          if (MM > -1) return MM
        }
        return this.countColumn(iM, iM.search(/\S|$/))
      }
      get simulatedBreak() {
        return this.options.simulateBreak || null
      }
    }
    const kM = new SM.f;

    function ZM(MM, rM, iM) {
      for (let OM = MM; OM; OM = OM.next) {
        let MM = oM(OM.node);
        if (MM) return MM(YM.create(rM, iM, OM))
      }
      return 0
    }

    function oM(MM) {
      let rM = MM.type.prop(kM);
      if (rM) return rM;
      let iM, OM = MM.firstChild;
      if (OM && (iM = OM.type.prop(SM.f.closedBy))) {
        let rM = MM.lastChild,
          OM = rM && iM.indexOf(rM.name) > -1;
        return MM => xM(MM, !0, 1, void 0, OM && ! function(MM) {
          return MM.pos == MM.options.simulateBreak && MM.options.simulateDoubleBreak
        }(MM) ? rM.from : void 0)
      }
      return null == MM.parent ? fM : null
    }

    function fM() {
      return 0
    }
    class YM extends DM {
      constructor(MM, rM, iM) {
        super(MM.state, MM.options), this.base = MM, this.pos = rM, this.context = iM
      }
      get node() {
        return this.context.node
      }
      static create(MM, rM, iM) {
        return new YM(MM, rM, iM)
      }
      get textAfter() {
        return this.textAfterPos(this.pos)
      }
      get baseIndent() {
        return this.baseIndentFor(this.node)
      }
      baseIndentFor(MM) {
        let rM = this.state.doc.lineAt(MM.from);
        for (;;) {
          let iM = MM.resolve(rM.from);
          for (; iM.parent && iM.parent.from == iM.from;) iM = iM.parent;
          if (NM(iM, MM)) break;
          rM = this.state.doc.lineAt(iM.from)
        }
        return this.lineIndent(rM.from)
      }
      continue () {
        return ZM(this.context.next, this.base, this.pos)
      }
    }

    function NM(MM, rM) {
      for (let iM = rM; iM; iM = iM.parent)
        if (MM == iM) return !0;
      return !1
    }

    function AM(MM) {
      let {
        closing: rM,
        align: iM = !0,
        units: OM = 1
      } = MM;
      return MM => xM(MM, iM, OM, rM)
    }

    function xM(MM, rM, iM, OM, SM) {
      let jM = MM.textAfter,
        aM = jM.match(/^\s*/)[0].length,
        PM = OM && jM.slice(aM, aM + OM.length) == OM || SM == MM.pos + aM,
        nM = rM ? function(MM) {
          let rM = MM.node,
            iM = rM.childAfter(rM.from),
            OM = rM.lastChild;
          if (!iM) return null;
          let SM = MM.options.simulateBreak,
            jM = MM.state.doc.lineAt(iM.from),
            aM = null == SM || SM <= jM.from ? jM.to : Math.min(jM.to, SM);
          for (let PM = iM.to;;) {
            let MM = rM.childAfter(PM);
            if (!MM || MM == OM) return null;
            if (!MM.type.isSkipped) {
              if (MM.from >= aM) return null;
              let rM = /^ */.exec(jM.text.slice(iM.to - jM.from))[0].length;
              return {
                from: iM.from,
                to: iM.to + rM
              }
            }
            PM = MM.to
          }
        }(MM) : null;
      return nM ? PM ? MM.column(nM.from) : MM.column(nM.to) : MM.baseIndent + (PM ? 0 : MM.unit * iM)
    }
    const vM = MM => MM.baseIndent;

    function FM() {
      let {
        except: MM,
        units: rM = 1
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return iM => {
        let OM = MM && MM.test(iM.textAfter);
        return iM.baseIndent + (OM ? 0 : rM * iM.unit)
      }
    }
    const BM = 200;

    function XM() {
      return jM.p.transactionFilter.of((MM => {
        if (!MM.docChanged || !MM.isUserEvent("input.type") && !MM.isUserEvent("input.complete")) return MM;
        let rM = MM.startState.languageDataAt("indentOnInput", MM.startState.selection.main.head);
        if (!rM.length) return MM;
        let iM = MM.newDoc,
          {
            head: OM
          } = MM.newSelection.main,
          SM = iM.lineAt(OM);
        if (OM > SM.from + BM) return MM;
        let jM = iM.sliceString(SM.from, OM);
        if (!rM.some((MM => MM.test(jM)))) return MM;
        let {
          state: aM
        } = MM, PM = -1, nM = [];
        for (let {
            head: QM
          }
          of aM.selection.Ld) {
          let MM = aM.doc.lineAt(QM);
          if (MM.from == PM) continue;
          PM = MM.from;
          let rM = sM(aM, MM.from);
          if (null == rM) continue;
          let iM = /^\s*/.exec(MM.text)[0],
            OM = WM(aM, rM);
          iM != OM && nM.push({
            from: MM.from,
            to: MM.from + iM.length,
            insert: OM
          })
        }
        return nM.length ? [MM, {
          changes: nM,
          sequential: !0
        }] : MM
      }))
    }
    const IM = jM.s.define(),
      KM = new SM.f;

    function qM(MM) {
      let rM = MM.firstChild,
        iM = MM.lastChild;
      return rM && rM.to < iM.from ? {
        from: rM.to,
        to: iM.type.isError ? MM.to : iM.from
      } : null
    }

    function TM(MM) {
      let rM = MM.lastChild;
      return rM && rM.to == MM.to && rM.type.isError
    }

    function VM(MM, rM, iM) {
      for (let OM of MM.facet(IM)) {
        let SM = OM(MM, rM, iM);
        if (SM) return SM
      }
      return function(MM, rM, iM) {
        let OM = JM(MM);
        if (OM.length < iM) return null;
        let SM = null;
        for (let jM = OM.resolveStack(iM, 1); jM; jM = jM.next) {
          let aM = jM.node;
          if (aM.to <= iM || aM.from > iM) continue;
          if (SM && aM.from < rM) break;
          let PM = aM.type.prop(KM);
          if (PM && (aM.to < OM.length - 50 || OM.length == MM.doc.length || !TM(aM))) {
            let OM = PM(aM, MM);
            OM && OM.from <= iM && OM.from >= rM && OM.to > iM && (SM = OM)
          }
        }
        return SM
      }(MM, rM, iM)
    }

    function cM(MM, rM) {
      let iM = rM.mapPos(MM.from, 1),
        OM = rM.mapPos(MM.to, -1);
      return iM >= OM ? void 0 : {
        from: iM,
        to: OM
      }
    }
    const Mr = jM.G.define({
        map: cM
      }),
      rr = jM.G.define({
        map: cM
      });

    function ir(MM) {
      let rM = [];
      for (let {
          head: iM
        }
        of MM.state.selection.Ld) rM.some((MM => MM.from <= iM && MM.to >= iM)) || rM.push(MM.lineBlockAt(iM));
      return rM
    }
    const Or = jM.H.define({
      create: () => aM.c.none,
      update(MM, rM) {
        rM.isUserEvent("delete") && rM.changes.iterChangedRanges(((rM, iM) => MM = Sr(MM, rM, iM))), MM = MM.map(rM.changes);
        for (let iM of rM.effects)
          if (iM.is(Mr) && !ar(MM, iM.value.from, iM.value.to)) {
            let {
              preparePlaceholder: OM
            } = rM.state.facet(Lr), SM = OM ? aM.c.replace({
              widget: new Jr(OM(rM.state, iM.value))
            }) : hr;
            MM = MM.update({
              add: [SM.range(iM.value.from, iM.value.to)]
            })
          } else iM.is(rr) && (MM = MM.update({
            filter: (MM, rM) => iM.value.from != MM || iM.value.to != rM,
            filterFrom: iM.value.from,
            filterTo: iM.value.to
          }));
        return rM.selection && (MM = Sr(MM, rM.selection.main.head)), MM
      },
      provide: MM => aM.f.ij.from(MM),
      toJSON(MM, rM) {
        let iM = [];
        return MM.between(0, rM.doc.length, ((MM, rM) => {
          iM.push(MM, rM)
        })), iM
      },
      fromJSON(MM) {
        if (!Array.isArray(MM) || MM.length % 2) throw new RangeError("Invalid JSON for fold state");
        let rM = [];
        for (let iM = 0; iM < MM.length;) {
          let OM = MM[iM++],
            SM = MM[iM++];
          if ("number" != typeof OM || "number" != typeof SM) throw new RangeError("Invalid JSON for fold state");
          rM.push(hr.range(OM, SM))
        }
        return aM.c.set(rM, !0)
      }
    });

    function Sr(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : rM,
        OM = !1;
      return MM.between(rM, iM, ((MM, SM) => {
        MM < iM && SM > rM && (OM = !0)
      })), OM ? MM.update({
        filterFrom: rM,
        filterTo: iM,
        filter: (MM, OM) => MM >= iM || OM <= rM
      }) : MM
    }

    function jr(MM, rM, iM) {
      var OM;
      let SM = null;
      return null === (OM = MM.field(Or, !1)) || void 0 === OM || OM.between(rM, iM, ((MM, rM) => {
        (!SM || SM.from > MM) && (SM = {
          from: MM,
          to: rM
        })
      })), SM
    }

    function ar(MM, rM, iM) {
      let OM = !1;
      return MM.between(rM, rM, ((MM, SM) => {
        MM == rM && SM == iM && (OM = !0)
      })), OM
    }

    function Pr(MM, rM) {
      return MM.field(Or, !1) ? rM : rM.concat(jM.G.appendConfig.of(mr()))
    }

    function nr(MM, rM) {
      let iM = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        OM = MM.state.doc.lineAt(rM.from).number,
        SM = MM.state.doc.lineAt(rM.to).number;
      return aM.f.announce.of(`${MM.state.phrase(iM?"Folded lines":"Unfolded lines")} ${OM} ${MM.state.phrase("to")} ${SM}.`)
    }
    const Qr = [{
        key: "Ctrl-Shift-[",
        mac: "Cmd-Alt-[",
        run: MM => {
          for (let rM of ir(MM)) {
            let iM = VM(MM.state, rM.from, rM.to);
            if (iM) return MM.dispatch({
              effects: Pr(MM.state, [Mr.of(iM), nr(MM, iM)])
            }), !0
          }
          return !1
        }
      }, {
        key: "Ctrl-Shift-]",
        mac: "Cmd-Alt-]",
        run: MM => {
          if (!MM.state.field(Or, !1)) return !1;
          let rM = [];
          for (let iM of ir(MM)) {
            let OM = jr(MM.state, iM.from, iM.to);
            OM && rM.push(rr.of(OM), nr(MM, OM, !1))
          }
          return rM.length && MM.dispatch({
            effects: rM
          }), rM.length > 0
        }
      }, {
        key: "Ctrl-Alt-[",
        run: MM => {
          let {
            state: rM
          } = MM, iM = [];
          for (let OM = 0; OM < rM.doc.length;) {
            let SM = MM.lineBlockAt(OM),
              jM = VM(rM, SM.from, SM.to);
            jM && iM.push(Mr.of(jM)), OM = (jM ? MM.lineBlockAt(jM.to) : SM).to + 1
          }
          return iM.length && MM.dispatch({
            effects: Pr(MM.state, iM)
          }), !!iM.length
        }
      }, {
        key: "Ctrl-Alt-]",
        run: MM => {
          let rM = MM.state.field(Or, !1);
          if (!rM || !rM.size) return !1;
          let iM = [];
          return rM.between(0, MM.state.doc.length, ((MM, rM) => {
            iM.push(rr.of({
              from: MM,
              to: rM
            }))
          })), MM.dispatch({
            effects: iM
          }), !0
        }
      }],
      zr = {
        placeholderDOM: null,
        preparePlaceholder: null,
        placeholderText: "\u2026"
      },
      Lr = jM.s.define({
        combine: MM => (0, jM.V)(MM, zr)
      });

    function mr(MM) {
      let rM = [Or, Er];
      return MM && rM.push(Lr.of(MM)), rM
    }

    function Hr(MM, rM) {
      let {
        state: iM
      } = MM, OM = iM.facet(Lr), SM = rM => {
        let iM = MM.lineBlockAt(MM.posAtDOM(rM.target)),
          OM = jr(MM.state, iM.from, iM.to);
        OM && MM.dispatch({
          effects: rr.of(OM)
        }), rM.preventDefault()
      };
      if (OM.placeholderDOM) return OM.placeholderDOM(MM, SM, rM);
      let jM = document.createElement("span");
      return jM.textContent = OM.placeholderText, jM.setAttribute("aria-label", iM.phrase("folded code")), jM.title = iM.phrase("unfold"), jM.className = "cm-foldPlaceholder", jM.onclick = SM, jM
    }
    const hr = aM.c.replace({
      widget: new class extends aM.q {
        toDOM(MM) {
          return Hr(MM, null)
        }
      }
    });
    class Jr extends aM.q {
      constructor(MM) {
        super(), this.value = MM
      }
      eq(MM) {
        return this.value == MM.value
      }
      toDOM(MM) {
        return Hr(MM, this.value)
      }
    }
    const dr = {
      openText: "\u2304",
      closedText: "\u203a",
      markerDOM: null,
      domEventHandlers: {},
      foldingChanged: () => !1
    };
    class yr extends aM.i {
      constructor(MM, rM) {
        super(), this.config = MM, this.open = rM
      }
      eq(MM) {
        return this.config == MM.config && this.open == MM.open
      }
      toDOM(MM) {
        if (this.config.markerDOM) return this.config.markerDOM(this.open);
        let rM = document.createElement("span");
        return rM.textContent = this.open ? this.config.openText : this.config.closedText, rM.title = MM.state.phrase(this.open ? "Fold line" : "Unfold line"), rM
      }
    }

    function lr() {
      let MM = {
          ...dr,
          ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        },
        rM = new yr(MM, !0),
        iM = new yr(MM, !1),
        OM = aM.m.fromClass(class {
          constructor(MM) {
            this.from = MM.viewport.from, this.markers = this.buildMarkers(MM)
          }
          update(rM) {
            (rM.docChanged || rM.viewportChanged || rM.startState.facet(tM) != rM.state.facet(tM) || rM.startState.field(Or, !1) != rM.state.field(Or, !1) || JM(rM.startState) != JM(rM.state) || MM.foldingChanged(rM)) && (this.markers = this.buildMarkers(rM.view))
          }
          buildMarkers(MM) {
            let OM = new jM.z;
            for (let SM of MM.viewportLineBlocks) {
              let jM = jr(MM.state, SM.from, SM.to) ? iM : VM(MM.state, SM.from, SM.to) ? rM : null;
              jM && OM.add(SM.from, SM.from, jM)
            }
            return OM.finish()
          }
        }),
        {
          domEventHandlers: SM
        } = MM;
      return [OM, (0, aM.K)({
        class: "cm-foldGutter",
        markers(MM) {
          var rM;
          return (null === (rM = MM.plugin(OM)) || void 0 === rM ? void 0 : rM.markers) || jM.A.empty
        },
        initialSpacer: () => new yr(MM, !1),
        domEventHandlers: {
          ...SM,
          click: (MM, rM, iM) => {
            if (SM.click && SM.click(MM, rM, iM)) return !0;
            let OM = jr(MM.state, rM.from, rM.to);
            if (OM) return MM.dispatch({
              effects: rr.of(OM)
            }), !0;
            let jM = VM(MM.state, rM.from, rM.to);
            return !!jM && (MM.dispatch({
              effects: Mr.of(jM)
            }), !0)
          }
        }
      }), mr()]
    }
    const Er = aM.f.baseTheme({
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
    class Ur {
      constructor(MM, rM) {
        let iM;

        function OM(MM) {
          let rM = nM.b.newName();
          return (iM || (iM = Object.create(null)))["." + rM] = MM, rM
        }
        this.specs = MM;
        const SM = "string" == typeof rM.all ? rM.all : rM.all ? OM(rM.all) : void 0,
          jM = rM.scope;
        this.scope = jM instanceof mM ? MM => MM.prop(QM) == jM.data : jM ? MM => MM == jM : void 0, this.style = (0, PM.j)(MM.map((MM => ({
          tag: MM.tag,
          class: MM.class || OM(Object.assign({}, MM, {
            tag: null
          }))
        }))), {
          all: SM
        }).style, this.module = iM ? new nM.b(iM) : null, this.themeType = rM.themeType
      }
      static define(MM, rM) {
        return new Ur(MM, rM || {})
      }
    }
    const Gr = jM.s.define(),
      Cr = jM.s.define({
        combine: MM => MM.length ? [MM[0]] : null
      });

    function er(MM) {
      let rM = MM.facet(Gr);
      return rM.length ? rM : MM.facet(Cr)
    }

    function br(MM, rM) {
      let iM, OM = [tr];
      return MM instanceof Ur && (MM.module && OM.push(aM.f.styleModule.of(MM.module)), iM = MM.themeType), (null === rM || void 0 === rM ? void 0 : rM.fallback) ? OM.push(Cr.of(MM)) : iM ? OM.push(Gr.computeN([aM.f.darkTheme], (rM => rM.facet(aM.f.darkTheme) == ("dark" == iM) ? [MM] : []))) : OM.push(Gr.of(MM)), OM
    }
    class wr {
      constructor(MM) {
        this.markCache = Object.create(null), this.tree = JM(MM.state), this.ij = this.buildDeco(MM, er(MM.state)), this.decoratedTo = MM.viewport.to
      }
      update(MM) {
        let rM = JM(MM.state),
          iM = er(MM.state),
          OM = iM != er(MM.startState),
          {
            viewport: SM
          } = MM.view,
          jM = MM.changes.mapPos(this.decoratedTo, 1);
        rM.length < SM.to && !OM && rM.type == this.tree.type && jM >= SM.to ? (this.ij = this.ij.map(MM.changes), this.decoratedTo = jM) : (rM != this.tree || MM.viewportChanged || OM) && (this.tree = rM, this.ij = this.buildDeco(MM.view, iM), this.decoratedTo = SM.to)
      }
      buildDeco(MM, rM) {
        if (!rM || !this.tree.length) return aM.c.none;
        let iM = new jM.z;
        for (let {
            from: OM,
            to: SM
          }
          of MM.A_)(0, PM.e)(this.tree, rM, ((MM, rM, OM) => {
          iM.add(MM, rM, this.markCache[OM] || (this.markCache[OM] = aM.c.mark({
            class: OM
          })))
        }), OM, SM);
        return iM.finish()
      }
    }
    const tr = jM.y.high(aM.m.fromClass(wr, {
        ij: MM => MM.ij
      })),
      gr = Ur.define([{
        tag: PM.m.meta,
        color: "#404740"
      }, {
        tag: PM.m.link,
        textDecoration: "underline"
      }, {
        tag: PM.m.heading,
        textDecoration: "underline",
        fontWeight: "bold"
      }, {
        tag: PM.m.emphasis,
        fontStyle: "italic"
      }, {
        tag: PM.m.strong,
        fontWeight: "bold"
      }, {
        tag: PM.m.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: PM.m.keyword,
        color: "#708"
      }, {
        tag: [PM.m.atom, PM.m.bool, PM.m.url, PM.m.contentSeparator, PM.m.labelName],
        color: "#219"
      }, {
        tag: [PM.m.literal, PM.m.inserted],
        color: "#164"
      }, {
        tag: [PM.m.string, PM.m.deleted],
        color: "#a11"
      }, {
        tag: [PM.m.regexp, PM.m.escape, PM.m.special(PM.m.string)],
        color: "#e40"
      }, {
        tag: PM.m.definition(PM.m.variableName),
        color: "#00f"
      }, {
        tag: PM.m.local(PM.m.variableName),
        color: "#30a"
      }, {
        tag: [PM.m.typeName, PM.m.namespace],
        color: "#085"
      }, {
        tag: PM.m.className,
        color: "#167"
      }, {
        tag: [PM.m.special(PM.m.variableName), PM.m.macroName],
        color: "#256"
      }, {
        tag: PM.m.definition(PM.m.propertyName),
        color: "#00c"
      }, {
        tag: PM.m.comment,
        color: "#940"
      }, {
        tag: PM.m.invalid,
        color: "#f00"
      }]),
      ur = aM.f.baseTheme({
        "&.cm-focused .cm-matchingBracket": {
          backgroundColor: "#328c8252"
        },
        "&.cm-focused .cm-nonmatchingBracket": {
          backgroundColor: "#bb555544"
        }
      }),
      Rr = 1e4,
      pr = "()[]{}",
      Wr = jM.s.define({
        combine: MM => (0, jM.V)(MM, {
          afterCursor: !0,
          brackets: pr,
          maxScanDistance: Rr,
          renderMatch: kr
        })
      }),
      sr = aM.c.mark({
        class: "cm-matchingBracket"
      }),
      Dr = aM.c.mark({
        class: "cm-nonmatchingBracket"
      });

    function kr(MM) {
      let rM = [],
        iM = MM.matched ? sr : Dr;
      return rM.push(iM.range(MM.start.from, MM.start.to)), MM.end && rM.push(iM.range(MM.end.from, MM.end.to)), rM
    }

    function Zr(MM) {
      let rM = [],
        iM = MM.facet(Wr);
      for (let OM of MM.selection.Ld) {
        if (!OM.empty) continue;
        let SM = xr(MM, OM.head, -1, iM) || OM.head > 0 && xr(MM, OM.head - 1, 1, iM) || iM.afterCursor && (xr(MM, OM.head, 1, iM) || OM.head < MM.doc.length && xr(MM, OM.head + 1, -1, iM));
        SM && (rM = rM.concat(iM.renderMatch(SM, MM)))
      }
      return aM.c.set(rM, !0)
    }
    const or = [aM.m.fromClass(class {
      constructor(MM) {
        this.paused = !1, this.ij = Zr(MM.state)
      }
      update(MM) {
        (MM.docChanged || MM.selectionSet || this.paused) && (MM.view.composing ? (this.ij = this.ij.map(MM.changes), this.paused = !0) : (this.ij = Zr(MM.state), this.paused = !1))
      }
    }, {
      ij: MM => MM.ij
    }), ur];

    function fr() {
      let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Wr.of(MM), or]
    }
    const Yr = new SM.f;

    function Nr(MM, rM, iM) {
      let OM = MM.prop(rM < 0 ? SM.f.openedBy : SM.f.closedBy);
      if (OM) return OM;
      if (1 == MM.name.length) {
        let OM = iM.indexOf(MM.name);
        if (OM > -1 && OM % 2 == (rM < 0 ? 1 : 0)) return [iM[OM + rM]]
      }
      return null
    }

    function Ar(MM) {
      let rM = MM.type.prop(Yr);
      return rM ? rM(MM.node) : MM
    }

    function xr(MM, rM, iM) {
      let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        SM = OM.maxScanDistance || Rr,
        jM = OM.brackets || pr,
        aM = JM(MM),
        PM = aM.resolveInner(rM, iM);
      for (let nM = PM; nM; nM = nM.parent) {
        let OM = Nr(nM.type, iM, jM);
        if (OM && nM.from < nM.to) {
          let SM = Ar(nM);
          if (SM && (iM > 0 ? rM >= SM.from && rM < SM.to : rM > SM.from && rM <= SM.to)) return vr(MM, rM, iM, nM, SM, OM, jM)
        }
      }
      return function(MM, rM, iM, OM, SM, jM, aM) {
        if (iM < 0 ? !rM : rM == MM.doc.length) return null;
        let PM = iM < 0 ? MM.sliceDoc(rM - 1, rM) : MM.sliceDoc(rM, rM + 1),
          nM = aM.indexOf(PM);
        if (nM < 0 || nM % 2 == 0 != iM > 0) return null;
        let QM = {
            from: iM < 0 ? rM - 1 : rM,
            to: iM > 0 ? rM + 1 : rM
          },
          zM = MM.doc.iterRange(rM, iM > 0 ? MM.doc.length : 0),
          LM = 0;
        for (let mM = 0; !zM.next().done && mM <= jM;) {
          let MM = zM.value;
          iM < 0 && (mM += MM.length);
          let jM = rM + mM * iM;
          for (let rM = iM > 0 ? 0 : MM.length - 1, PM = iM > 0 ? MM.length : -1; rM != PM; rM += iM) {
            let PM = aM.indexOf(MM[rM]);
            if (!(PM < 0 || OM.resolveInner(jM + rM, 1).type != SM))
              if (PM % 2 == 0 == iM > 0) LM++;
              else {
                if (1 == LM) return {
                  start: QM,
                  end: {
                    from: jM + rM,
                    to: jM + rM + 1
                  },
                  matched: PM >> 1 == nM >> 1
                };
                LM--
              }
          }
          iM > 0 && (mM += MM.length)
        }
        return zM.done ? {
          start: QM,
          matched: !1
        } : null
      }(MM, rM, iM, aM, PM.type, SM, jM)
    }

    function vr(MM, rM, iM, OM, SM, jM, aM) {
      let PM = OM.parent,
        nM = {
          from: SM.from,
          to: SM.to
        },
        QM = 0,
        zM = null === PM || void 0 === PM ? void 0 : PM.cursor();
      if (zM && (iM < 0 ? zM.childBefore(OM.from) : zM.childAfter(OM.to)))
        do {
          if (iM < 0 ? zM.to <= OM.from : zM.from >= OM.to) {
            if (0 == QM && jM.indexOf(zM.type.name) > -1 && zM.from < zM.to) {
              let MM = Ar(zM);
              return {
                start: nM,
                end: MM ? {
                  from: MM.from,
                  to: MM.to
                } : void 0,
                matched: !0
              }
            }
            if (Nr(zM.type, iM, aM)) QM++;
            else if (Nr(zM.type, -iM, aM)) {
              if (0 == QM) {
                let MM = Ar(zM);
                return {
                  start: nM,
                  end: MM && MM.from < MM.to ? {
                    from: MM.from,
                    to: MM.to
                  } : void 0,
                  matched: !1
                }
              }
              QM--
            }
          }
        } while (iM < 0 ? zM.prevSibling() : zM.nextSibling());
      return {
        start: nM,
        matched: !1
      }
    }
    const Fr = Object.create(null),
      Br = [SM.j.none],
      Xr = [],
      Ir = Object.create(null),
      Kr = Object.create(null);
    for (let [Vr, cr] of [
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
      ]) Kr[Vr] = Tr(Fr, cr);

    function qr(MM, rM) {
      Xr.indexOf(MM) > -1 || (Xr.push(MM), console.warn(rM))
    }

    function Tr(MM, rM) {
      let iM = [];
      for (let SM of rM.split(" ")) {
        let rM = [];
        for (let iM of SM.split(".")) {
          let OM = MM[iM] || PM.m[iM];
          OM ? "function" == typeof OM ? rM.length ? rM = rM.map(OM) : qr(iM, `Modifier ${iM} used at start of tag`) : rM.length ? qr(iM, `Tag ${iM} used as modifier`) : rM = Array.isArray(OM) ? OM : [OM] : qr(iM, `Unknown highlighting tag ${iM}`)
        }
        for (let MM of rM) iM.push(MM)
      }
      if (!iM.length) return 0;
      let OM = rM.replace(/ /g, "_"),
        jM = OM + " " + iM.map((MM => MM.id)),
        aM = Ir[jM];
      if (aM) return aM.id;
      let nM = Ir[jM] = SM.j.define({
        id: Br.length,
        name: OM,
        props: [(0, PM.i)({
          [OM]: iM
        })]
      });
      return Br.push(nM), nM.id
    }
    aM.d.RTL, aM.d.LTR
  },
  44038: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => EM,
      f: () => eM
    });
    var OM = iM(43977),
      SM = iM(43972),
      jM = iM(43987);
    class aM {
      constructor(MM, rM, iM) {
        this.from = MM, this.to = rM, this.diagnostic = iM
      }
    }
    class PM {
      constructor(MM, rM, iM) {
        this.diagnostics = MM, this.panel = rM, this.selected = iM
      }
      static init(MM, rM, iM) {
        let jM = iM.facet(GM).markerFilter;
        jM && (MM = jM(MM, iM));
        let aM = MM.slice().sort(((MM, rM) => MM.from - rM.from || MM.to - rM.to)),
          QM = new SM.z,
          zM = [],
          LM = 0,
          mM = iM.doc.iter(),
          HM = 0,
          hM = iM.doc.length;
        for (let SM = 0;;) {
          let MM, rM, iM = SM == aM.length ? null : aM[SM];
          if (!iM && !zM.length) break;
          if (zM.length) MM = LM, rM = zM.reduce(((MM, rM) => Math.min(MM, rM.to)), iM && iM.from > MM ? iM.from : 1e8);
          else {
            if (MM = iM.from, MM > hM) break;
            rM = iM.to, zM.push(iM), SM++
          }
          for (; SM < aM.length;) {
            let iM = aM[SM];
            if (iM.from != MM || !(iM.to > iM.from || iM.to == MM)) {
              rM = Math.min(iM.from, rM);
              break
            }
            zM.push(iM), SM++, rM = Math.min(iM.to, rM)
          }
          rM = Math.min(rM, hM);
          let jM = !1;
          if (zM.some((iM => iM.from == MM && (iM.to == rM || rM == hM))) && (jM = MM == rM, !jM && rM - MM < 10)) {
            let iM = MM - (HM + mM.value.length);
            iM > 0 && (mM.next(iM), HM = MM);
            for (let OM = MM;;) {
              if (OM >= rM) {
                jM = !0;
                break
              }
              if (!mM.lineBreak && HM + mM.value.length > OM) break;
              OM = HM + mM.value.length, HM += mM.value.length, mM.next()
            }
          }
          let PM = DM(zM);
          if (jM) QM.add(MM, MM, OM.c.widget({
            widget: new tM(PM),
            diagnostics: zM.slice()
          }));
          else {
            let iM = zM.reduce(((MM, rM) => rM.markClass ? MM + " " + rM.markClass : MM), "");
            QM.add(MM, rM, OM.c.mark({
              class: "cm-lintRange cm-lintRange-" + PM + iM,
              diagnostics: zM.slice(),
              inclusiveEnd: zM.some((MM => MM.to > rM))
            }))
          }
          if (LM = rM, LM == hM) break;
          for (let OM = 0; OM < zM.length; OM++) zM[OM].to <= LM && zM.splice(OM--, 1)
        }
        let JM = QM.finish();
        return new PM(JM, rM, nM(JM))
      }
    }

    function nM(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        OM = null;
      return MM.between(iM, 1e9, ((MM, iM, SM) => {
        let {
          spec: jM
        } = SM;
        if (!(rM && jM.diagnostics.indexOf(rM) < 0))
          if (OM) {
            if (jM.diagnostics.indexOf(OM.diagnostic) < 0) return !1;
            OM = new aM(OM.from, iM, OM.diagnostic)
          } else OM = new aM(MM, iM, rM || jM.diagnostics[0])
      })), OM
    }

    function QM(MM, rM) {
      let iM = rM.pos,
        OM = rM.end || iM,
        SM = MM.state.facet(GM).hideOn(MM, iM, OM);
      if (null != SM) return SM;
      let jM = MM.startState.doc.lineAt(rM.pos);
      return !(!MM.effects.some((MM => MM.is(LM))) && !MM.changes.touchesRange(jM.from, Math.max(jM.to, OM)))
    }

    function zM(MM, rM) {
      return MM.field(hM, !1) ? rM : rM.concat(SM.G.appendConfig.of(kM))
    }
    const LM = SM.G.define(),
      mM = SM.G.define(),
      HM = SM.G.define(),
      hM = SM.H.define({
        create: () => new PM(OM.c.none, null, null),
        update(MM, rM) {
          if (rM.docChanged && MM.diagnostics.size) {
            let iM = MM.diagnostics.map(rM.changes),
              OM = null,
              SM = MM.panel;
            if (MM.selected) {
              let SM = rM.changes.mapPos(MM.selected.from, 1);
              OM = nM(iM, MM.selected.diagnostic, SM) || nM(iM, null, SM)
            }!iM.size && SM && rM.state.facet(GM).autoPanel && (SM = null), MM = new PM(iM, SM, OM)
          }
          for (let iM of rM.effects)
            if (iM.is(LM)) {
              let OM = rM.state.facet(GM).autoPanel ? iM.value.length ? uM.open : null : MM.panel;
              MM = PM.init(iM.value, OM, rM.state)
            } else iM.is(mM) ? MM = new PM(MM.diagnostics, iM.value ? uM.open : null, MM.selected) : iM.is(HM) && (MM = new PM(MM.diagnostics, MM.panel, iM.value));
          return MM
        },
        provide: MM => [OM.mb.from(MM, (MM => MM.panel)), OM.f.ij.from(MM, (MM => MM.diagnostics))]
      });
    const JM = OM.c.mark({
      class: "cm-lintRange cm-lintRange-active"
    });

    function dM(MM, rM, iM) {
      let OM, {
          diagnostics: SM
        } = MM.state.field(hM),
        jM = -1,
        aM = -1;
      SM.between(rM - (iM < 0 ? 1 : 0), rM + (iM > 0 ? 1 : 0), ((MM, SM, PM) => {
        let {
          spec: nM
        } = PM;
        if (rM >= MM && rM <= SM && (MM == SM || (rM > MM || iM > 0) && (rM < SM || iM < 0))) return OM = nM.diagnostics, jM = MM, aM = SM, !1
      }));
      let PM = MM.state.facet(GM).tooltipFilter;
      return OM && PM && (OM = PM(OM, MM.state)), OM ? {
        pos: jM,
        end: aM,
        above: MM.state.doc.lineAt(jM).to < aM,
        create: () => ({
          dom: yM(MM, OM)
        })
      } : null
    }

    function yM(MM, rM) {
      return (0, jM.c)("ul", {
        class: "cm-tooltip-lint"
      }, rM.map((rM => wM(MM, rM, !1))))
    }
    const lM = MM => {
        let rM = MM.state.field(hM, !1);
        return !(!rM || !rM.panel) && (MM.dispatch({
          effects: mM.of(!1)
        }), !0)
      },
      EM = [{
        key: "Mod-Shift-m",
        run: MM => {
          let rM = MM.state.field(hM, !1);
          rM && rM.panel || MM.dispatch({
            effects: zM(MM.state, [mM.of(!0)])
          });
          let iM = (0, OM.D)(MM, uM.open);
          return iM && iM.dom.querySelector(".cm-panel-lint ul").focus(), !0
        },
        preventDefault: !0
      }, {
        key: "F8",
        run: MM => {
          let rM = MM.state.field(hM, !1);
          if (!rM) return !1;
          let iM = MM.state.selection.main,
            OM = nM(rM.diagnostics, null, iM.to + 1);
          return !(!OM && (OM = nM(rM.diagnostics, null, 0), !OM || OM.from == iM.from && OM.to == iM.to)) && (MM.dispatch({
            selection: {
              anchor: OM.from,
              head: OM.to
            },
            scrollIntoView: !0
          }), !0)
        }
      }],
      UM = OM.m.fromClass(class {
        constructor(MM) {
          this.view = MM, this.timeout = -1, this.set = !0;
          let {
            delay: rM
          } = MM.state.facet(GM);
          this.lintTime = Date.now() + rM, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, rM)
        }
        run() {
          clearTimeout(this.timeout);
          let MM = Date.now();
          if (MM < this.lintTime - 10) this.timeout = setTimeout(this.run, this.lintTime - MM);
          else {
            this.set = !1;
            let {
              state: MM
            } = this.view, {
              sources: rM
            } = MM.facet(GM);
            rM.length && function(MM, rM, iM) {
              let OM = [],
                SM = -1;
              for (let jM of MM) jM.then((iM => {
                OM.push(iM), clearTimeout(SM), OM.length == MM.length ? rM(OM) : SM = setTimeout((() => rM(OM)), 200)
              }), iM)
            }(rM.map((MM => Promise.resolve(MM(this.view)))), (rM => {
              this.view.state.doc == MM.doc && this.view.dispatch(function(MM, rM) {
                return {
                  effects: zM(MM, [LM.of(rM)])
                }
              }(this.view.state, rM.reduce(((MM, rM) => MM.concat(rM)))))
            }), (MM => {
              (0, OM._)(this.view.state, MM)
            }))
          }
        }
        update(MM) {
          let rM = MM.state.facet(GM);
          (MM.docChanged || rM != MM.startState.facet(GM) || rM.needsRefresh && rM.needsRefresh(MM)) && (this.lintTime = Date.now() + rM.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, rM.delay)))
        }
        force() {
          this.set && (this.lintTime = Date.now(), this.run())
        }
        destroy() {
          clearTimeout(this.timeout)
        }
      });
    const GM = SM.s.define({
      combine: MM => ({
        sources: MM.map((MM => MM.source)).filter((MM => null != MM)),
        ...(0, SM.V)(MM.map((MM => MM.config)), {
          delay: 750,
          markerFilter: null,
          tooltipFilter: null,
          needsRefresh: null,
          hideOn: () => null
        }, {
          delay: Math.max,
          markerFilter: CM,
          tooltipFilter: CM,
          needsRefresh: (MM, rM) => MM ? rM ? iM => MM(iM) || rM(iM) : MM : rM,
          hideOn: (MM, rM) => MM ? rM ? (iM, OM, SM) => MM(iM, OM, SM) || rM(iM, OM, SM) : MM : rM,
          autoPanel: (MM, rM) => MM || rM
        })
      })
    });

    function CM(MM, rM) {
      return MM ? rM ? (iM, OM) => rM(MM(iM, OM), OM) : MM : rM
    }

    function eM(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return [GM.of({
        source: MM,
        config: rM
      }), UM, kM]
    }

    function bM(MM) {
      let rM = [];
      if (MM) MM: for (let {
          name: iM
        }
        of MM) {
        for (let MM = 0; MM < iM.length; MM++) {
          let OM = iM[MM];
          if (/[a-zA-Z]/.test(OM) && !rM.some((MM => MM.toLowerCase() == OM.toLowerCase()))) {
            rM.push(OM);
            continue MM
          }
        }
        rM.push("")
      }
      return rM
    }

    function wM(MM, rM, iM) {
      var OM;
      let SM = iM ? bM(rM.actions) : [];
      return (0, jM.c)("li", {
        class: "cm-diagnostic cm-diagnostic-" + rM.severity
      }, (0, jM.c)("span", {
        class: "cm-diagnosticText"
      }, rM.renderMessage ? rM.renderMessage(MM) : rM.message), null === (OM = rM.actions) || void 0 === OM ? void 0 : OM.map(((iM, OM) => {
        let aM = !1,
          PM = OM => {
            if (OM.preventDefault(), aM) return;
            aM = !0;
            let SM = nM(MM.state.field(hM).diagnostics, rM);
            SM && iM.apply(MM, SM.from, SM.to)
          },
          {
            name: QM
          } = iM,
          zM = SM[OM] ? QM.indexOf(SM[OM]) : -1,
          LM = zM < 0 ? QM : [QM.slice(0, zM), (0, jM.c)("u", QM.slice(zM, zM + 1)), QM.slice(zM + 1)],
          mM = iM.markClass ? " " + iM.markClass : "";
        return (0, jM.c)("button", {
          type: "button",
          class: "cm-diagnosticAction" + mM,
          onclick: PM,
          onmousedown: PM,
          "aria-label": ` Action: ${QM}${zM<0?"":` (access key "${SM[OM]})"`}.`
        }, LM)
      })), rM.source && (0, jM.c)("div", {
        class: "cm-diagnosticSource"
      }, rM.source))
    }
    class tM extends OM.q {
      constructor(MM) {
        super(), this.sev = MM
      }
      eq(MM) {
        return MM.sev == this.sev
      }
      toDOM() {
        return (0, jM.c)("span", {
          class: "cm-lintPoint cm-lintPoint-" + this.sev
        })
      }
    }
    class gM {
      constructor(MM, rM) {
        this.diagnostic = rM, this.id = "item_" + Math.floor(4294967295 * Math.random()).toString(16), this.dom = wM(MM, rM, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option")
      }
    }
    class uM {
      constructor(MM) {
        this.view = MM, this.items = [];
        this.list = (0, jM.c)("ul", {
          tabIndex: 0,
          role: "listbox",
          "aria-label": this.view.state.phrase("Diagnostics"),
          onkeydown: rM => {
            if (!(rM.ctrlKey || rM.altKey || rM.metaKey)) {
              if (27 == rM.keyCode) lM(this.view), this.view.focus();
              else if (38 == rM.keyCode || 33 == rM.keyCode) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
              else if (40 == rM.keyCode || 34 == rM.keyCode) this.moveSelection((this.selectedIndex + 1) % this.items.length);
              else if (36 == rM.keyCode) this.moveSelection(0);
              else if (35 == rM.keyCode) this.moveSelection(this.items.length - 1);
              else if (13 == rM.keyCode) this.view.focus();
              else {
                if (!(rM.keyCode >= 65 && rM.keyCode <= 90 && this.selectedIndex >= 0)) return;
                {
                  let {
                    diagnostic: iM
                  } = this.items[this.selectedIndex], OM = bM(iM.actions);
                  for (let SM = 0; SM < OM.length; SM++)
                    if (OM[SM].toUpperCase().charCodeAt(0) == rM.keyCode) {
                      let rM = nM(this.view.state.field(hM).diagnostics, iM);
                      rM && iM.actions[SM].apply(MM, rM.from, rM.to)
                    }
                }
              }
              rM.preventDefault()
            }
          },
          onclick: MM => {
            for (let rM = 0; rM < this.items.length; rM++) this.items[rM].dom.contains(MM.target) && this.moveSelection(rM)
          }
        }), this.dom = (0, jM.c)("div", {
          class: "cm-panel-lint"
        }, this.list, (0, jM.c)("button", {
          type: "button",
          name: "close",
          "aria-label": this.view.state.phrase("close"),
          onclick: () => lM(this.view)
        }, "\xd7")), this.update()
      }
      get selectedIndex() {
        let MM = this.view.state.field(hM).selected;
        if (!MM) return -1;
        for (let rM = 0; rM < this.items.length; rM++)
          if (this.items[rM].diagnostic == MM.diagnostic) return rM;
        return -1
      }
      update() {
        let {
          diagnostics: MM,
          selected: rM
        } = this.view.state.field(hM), iM = 0, OM = !1, SM = null, jM = new Set;
        for (MM.between(0, this.view.state.doc.length, ((MM, aM, PM) => {
            let {
              spec: nM
            } = PM;
            for (let QM of nM.diagnostics) {
              if (jM.has(QM)) continue;
              jM.add(QM);
              let MM, aM = -1;
              for (let rM = iM; rM < this.items.length; rM++)
                if (this.items[rM].diagnostic == QM) {
                  aM = rM;
                  break
                } aM < 0 ? (MM = new gM(this.view, QM), this.items.splice(iM, 0, MM), OM = !0) : (MM = this.items[aM], aM > iM && (this.items.splice(iM, aM - iM), OM = !0)), rM && MM.diagnostic == rM.diagnostic ? MM.dom.hasAttribute("aria-selected") || (MM.dom.setAttribute("aria-selected", "true"), SM = MM) : MM.dom.hasAttribute("aria-selected") && MM.dom.removeAttribute("aria-selected"), iM++
            }
          })); iM < this.items.length && !(1 == this.items.length && this.items[0].diagnostic.from < 0);) OM = !0, this.items.pop();
        0 == this.items.length && (this.items.push(new gM(this.view, {
          from: -1,
          to: -1,
          severity: "info",
          message: this.view.state.phrase("No diagnostics")
        })), OM = !0), SM ? (this.list.setAttribute("aria-activedescendant", SM.id), this.view.requestMeasure({
          key: this,
          read: () => ({
            sel: SM.dom.getBoundingClientRect(),
            panel: this.list.getBoundingClientRect()
          }),
          write: MM => {
            let {
              sel: rM,
              panel: iM
            } = MM, OM = iM.height / this.list.offsetHeight;
            rM.top < iM.top ? this.list.scrollTop -= (iM.top - rM.top) / OM : rM.bottom > iM.bottom && (this.list.scrollTop += (rM.bottom - iM.bottom) / OM)
          }
        })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), OM && this.sync()
      }
      sync() {
        let MM = this.list.firstChild;

        function rM() {
          let rM = MM;
          MM = rM.nextSibling, rM.remove()
        }
        for (let iM of this.items)
          if (iM.dom.parentNode == this.list) {
            for (; MM != iM.dom;) rM();
            MM = iM.dom.nextSibling
          } else this.list.insertBefore(iM.dom, MM);
        for (; MM;) rM()
      }
      moveSelection(MM) {
        if (this.selectedIndex < 0) return;
        let rM = nM(this.view.state.field(hM).diagnostics, this.items[MM].diagnostic);
        rM && this.view.dispatch({
          selection: {
            anchor: rM.from,
            head: rM.to
          },
          scrollIntoView: !0,
          effects: HM.of(rM)
        })
      }
      static open(MM) {
        return new uM(MM)
      }
    }

    function RM(MM) {
      return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${arguments.length>1&&void 0!==arguments[1]?arguments[1]:'viewBox="0 0 40 40"'}>${encodeURIComponent(MM)}</svg>')`
    }

    function pM(MM) {
      return RM(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${MM}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"')
    }
    const WM = OM.f.baseTheme({
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
        backgroundImage: pM("#d11")
      },
      ".cm-lintRange-warning": {
        backgroundImage: pM("orange")
      },
      ".cm-lintRange-info": {
        backgroundImage: pM("#999")
      },
      ".cm-lintRange-hint": {
        backgroundImage: pM("#66d")
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

    function sM(MM) {
      return "error" == MM ? 4 : "warning" == MM ? 3 : "info" == MM ? 2 : 1
    }

    function DM(MM) {
      let rM = "hint",
        iM = 1;
      for (let OM of MM) {
        let MM = sM(OM.severity);
        MM > iM && (iM = MM, rM = OM.severity)
      }
      return rM
    }
    OM.i;
    const kM = [hM, OM.f.ij.compute([hM], (MM => {
      let {
        selected: rM,
        panel: iM
      } = MM.field(hM);
      return rM && iM && rM.from != rM.to ? OM.c.set([JM.range(rM.from, rM.to)]) : OM.c.none
    })), (0, OM.T)(dM, {
      hideOn: QM
    }), WM]
  },
  44029: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => VM,
      f: () => yM,
      h: () => cM
    });
    var OM = iM(43977),
      SM = iM(43972),
      jM = iM(43987);
    const aM = "function" == typeof String.prototype.normalize ? MM => MM.normalize("NFKD") : MM => MM;
    class PM {
      constructor(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : MM.length,
          SM = arguments.length > 4 ? arguments[4] : void 0,
          jM = arguments.length > 5 ? arguments[5] : void 0;
        this.test = jM, this.value = {
          from: 0,
          to: 0
        }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = MM.iterRange(iM, OM), this.bufferStart = iM, this.normalize = SM ? MM => SM(aM(MM)) : aM, this.query = this.normalize(rM)
      }
      peek() {
        if (this.bufferPos == this.buffer.length) {
          if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
          this.bufferPos = 0, this.buffer = this.iter.value
        }
        return (0, SM.Q)(this.buffer, this.bufferPos)
      }
      next() {
        for (; this.matches.length;) this.matches.pop();
        return this.nextOverlapping()
      }
      nextOverlapping() {
        for (;;) {
          let MM = this.peek();
          if (MM < 0) return this.done = !0, this;
          let rM = (0, SM.eb)(MM),
            iM = this.bufferStart + this.bufferPos;
          this.bufferPos += (0, SM.S)(MM);
          let OM = this.normalize(rM);
          if (OM.length)
            for (let SM = 0, jM = iM;; SM++) {
              let MM = OM.charCodeAt(SM),
                aM = this.match(MM, jM, this.bufferPos + this.bufferStart);
              if (SM == OM.length - 1) {
                if (aM) return this.value = aM, this;
                break
              }
              jM == iM && SM < rM.length && rM.charCodeAt(SM) == MM && jM++
            }
        }
      }
      match(MM, rM, iM) {
        let OM = null;
        for (let SM = 0; SM < this.matches.length; SM += 2) {
          let rM = this.matches[SM],
            jM = !1;
          this.query.charCodeAt(rM) == MM && (rM == this.query.length - 1 ? OM = {
            from: this.matches[SM + 1],
            to: iM
          } : (this.matches[SM]++, jM = !0)), jM || (this.matches.splice(SM, 2), SM -= 2)
        }
        return this.query.charCodeAt(0) == MM && (1 == this.query.length ? OM = {
          from: rM,
          to: iM
        } : this.matches.push(1, rM)), OM && this.test && !this.test(OM.from, OM.to, this.buffer, this.bufferStart) && (OM = null), OM
      }
    }
    "undefined" != typeof Symbol && (PM.prototype[Symbol.iterator] = function() {
      return this
    });
    const nM = {
        from: -1,
        to: -1,
        match: /.*/.exec("")
      },
      QM = "gm" + (null == /x/.unicode ? "" : "u");
    class zM {
      constructor(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : MM.length;
        if (this.text = MM, this.to = SM, this.curLine = "", this.done = !1, this.value = nM, /\\[sWDnr]|\n|\r|\[\^/.test(rM)) return new HM(MM, rM, iM, OM, SM);
        this.re = new RegExp(rM, QM + ((null === iM || void 0 === iM ? void 0 : iM.ignoreCase) ? "i" : "")), this.test = null === iM || void 0 === iM ? void 0 : iM.test, this.iter = MM.iter();
        let jM = MM.lineAt(OM);
        this.curLineStart = jM.from, this.matchPos = hM(MM, OM), this.getLine(this.curLineStart)
      }
      getLine(MM) {
        this.iter.next(MM), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next())
      }
      nextLine() {
        this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0)
      }
      next() {
        for (let MM = this.matchPos - this.curLineStart;;) {
          this.re.lastIndex = MM;
          let rM = this.matchPos <= this.to && this.re.exec(this.curLine);
          if (rM) {
            let iM = this.curLineStart + rM.index,
              OM = iM + rM[0].length;
            if (this.matchPos = hM(this.text, OM + (iM == OM ? 1 : 0)), iM == this.curLineStart + this.curLine.length && this.nextLine(), (iM < OM || iM > this.value.to) && (!this.test || this.test(iM, OM, rM))) return this.value = {
              from: iM,
              to: OM,
              match: rM
            }, this;
            MM = this.matchPos - this.curLineStart
          } else {
            if (!(this.curLineStart + this.curLine.length < this.to)) return this.done = !0, this;
            this.nextLine(), MM = 0
          }
        }
      }
    }
    const LM = new WeakMap;
    class mM {
      constructor(MM, rM) {
        this.from = MM, this.text = rM
      }
      get to() {
        return this.from + this.text.length
      }
      static get(MM, rM, iM) {
        let OM = LM.get(MM);
        if (!OM || OM.from >= iM || OM.to <= rM) {
          let OM = new mM(rM, MM.sliceString(rM, iM));
          return LM.set(MM, OM), OM
        }
        if (OM.from == rM && OM.to == iM) return OM;
        let {
          text: SM,
          from: jM
        } = OM;
        return jM > rM && (SM = MM.sliceString(rM, jM) + SM, jM = rM), OM.to < iM && (SM += MM.sliceString(OM.to, iM)), LM.set(MM, new mM(jM, SM)), new mM(rM, SM.slice(rM - jM, iM - jM))
      }
    }
    class HM {
      constructor(MM, rM, iM, OM, SM) {
        this.text = MM, this.to = SM, this.done = !1, this.value = nM, this.matchPos = hM(MM, OM), this.re = new RegExp(rM, QM + ((null === iM || void 0 === iM ? void 0 : iM.ignoreCase) ? "i" : "")), this.test = null === iM || void 0 === iM ? void 0 : iM.test, this.flat = mM.get(MM, OM, this.chunkEnd(OM + 5e3))
      }
      chunkEnd(MM) {
        return MM >= this.to ? this.to : this.text.lineAt(MM).to
      }
      next() {
        for (;;) {
          let MM = this.re.lastIndex = this.matchPos - this.flat.from,
            rM = this.re.exec(this.flat.text);
          if (rM && !rM[0] && rM.index == MM && (this.re.lastIndex = MM + 1, rM = this.re.exec(this.flat.text)), rM) {
            let MM = this.flat.from + rM.index,
              iM = MM + rM[0].length;
            if ((this.flat.to >= this.to || rM.index + rM[0].length <= this.flat.text.length - 10) && (!this.test || this.test(MM, iM, rM))) return this.value = {
              from: MM,
              to: iM,
              match: rM
            }, this.matchPos = hM(this.text, iM + (MM == iM ? 1 : 0)), this
          }
          if (this.flat.to == this.to) return this.done = !0, this;
          this.flat = mM.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + 2 * this.flat.text.length))
        }
      }
    }

    function hM(MM, rM) {
      if (rM >= MM.length) return rM;
      let iM, OM = MM.lineAt(rM);
      for (; rM < OM.to && (iM = OM.text.charCodeAt(rM - OM.from)) >= 56320 && iM < 57344;) rM++;
      return rM
    }
    "undefined" != typeof Symbol && (zM.prototype[Symbol.iterator] = HM.prototype[Symbol.iterator] = function() {
      return this
    });
    const JM = {
        highlightWordAroundCursor: !1,
        minSelectionLength: 1,
        maxMatches: 100,
        wholeWords: !1
      },
      dM = SM.s.define({
        combine: MM => (0, SM.V)(MM, JM, {
          highlightWordAroundCursor: (MM, rM) => MM || rM,
          minSelectionLength: Math.min,
          maxMatches: Math.min
        })
      });

    function yM(MM) {
      let rM = [CM, GM];
      return MM && rM.push(dM.of(MM)), rM
    }
    const lM = OM.c.mark({
        class: "cm-selectionMatch"
      }),
      EM = OM.c.mark({
        class: "cm-selectionMatch cm-selectionMatch-main"
      });

    function UM(MM, rM, iM, OM) {
      return (0 == iM || MM(rM.sliceDoc(iM - 1, iM)) != SM.h.Word) && (OM == rM.doc.length || MM(rM.sliceDoc(OM, OM + 1)) != SM.h.Word)
    }
    const GM = OM.m.fromClass(class {
        constructor(MM) {
          this.ij = this.getDeco(MM)
        }
        update(MM) {
          (MM.selectionSet || MM.docChanged || MM.viewportChanged) && (this.ij = this.getDeco(MM.view))
        }
        getDeco(MM) {
          let rM = MM.state.facet(dM),
            {
              state: iM
            } = MM,
            jM = iM.selection;
          if (jM.Ld.length > 1) return OM.c.none;
          let aM, nM = jM.main,
            QM = null;
          if (nM.empty) {
            if (!rM.highlightWordAroundCursor) return OM.c.none;
            let MM = iM.wordAt(nM.head);
            if (!MM) return OM.c.none;
            QM = iM.charCategorizer(nM.head), aM = iM.sliceDoc(MM.from, MM.to)
          } else {
            let MM = nM.to - nM.from;
            if (MM < rM.minSelectionLength || MM > 200) return OM.c.none;
            if (rM.wholeWords) {
              if (aM = iM.sliceDoc(nM.from, nM.to), QM = iM.charCategorizer(nM.head), !UM(QM, iM, nM.from, nM.to) || ! function(MM, rM, iM, OM) {
                  return MM(rM.sliceDoc(iM, iM + 1)) == SM.h.Word && MM(rM.sliceDoc(OM - 1, OM)) == SM.h.Word
                }(QM, iM, nM.from, nM.to)) return OM.c.none
            } else if (aM = iM.sliceDoc(nM.from, nM.to), !aM) return OM.c.none
          }
          let zM = [];
          for (let SM of MM.A_) {
            let MM = new PM(iM.doc, aM, SM.from, SM.to);
            for (; !MM.next().done;) {
              let {
                from: SM,
                to: jM
              } = MM.value;
              if ((!QM || UM(QM, iM, SM, jM)) && (nM.empty && SM <= nM.from && jM >= nM.to ? zM.push(EM.range(SM, jM)) : (SM >= nM.to || jM <= nM.from) && zM.push(lM.range(SM, jM)), zM.length > rM.maxMatches)) return OM.c.none
            }
          }
          return OM.c.set(zM)
        }
      }, {
        ij: MM => MM.ij
      }),
      CM = OM.f.baseTheme({
        ".cm-selectionMatch": {
          backgroundColor: "#99ff7780"
        },
        ".cm-searchMatch .cm-selectionMatch": {
          backgroundColor: "transparent"
        }
      });
    const eM = SM.s.define({
      combine: MM => (0, SM.V)(MM, {
        top: !1,
        caseSensitive: !1,
        literal: !1,
        regexp: !1,
        wholeWord: !1,
        createPanel: MM => new Mr(MM),
        scrollToMatch: MM => OM.f.scrollIntoView(MM)
      })
    });
    class bM {
      constructor(MM) {
        this.search = MM.search, this.caseSensitive = !!MM.caseSensitive, this.literal = !!MM.literal, this.regexp = !!MM.regexp, this.replace = MM.replace || "", this.valid = !!this.search && (!this.regexp || function(MM) {
          try {
            return new RegExp(MM, QM), !0
          } catch (rM) {
            return !1
          }
        }(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!MM.wholeWord, this.test = MM.test
      }
      unquote(MM) {
        return this.literal ? MM : MM.replace(/\\([nrt\\])/g, ((MM, rM) => "n" == rM ? "\n" : "r" == rM ? "\r" : "t" == rM ? "\t" : "\\"))
      }
      eq(MM) {
        return this.search == MM.search && this.replace == MM.replace && this.caseSensitive == MM.caseSensitive && this.regexp == MM.regexp && this.wholeWord == MM.wholeWord && this.test == MM.test
      }
      create() {
        return this.regexp ? new WM(this) : new gM(this)
      }
      getCursor(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          iM = arguments.length > 2 ? arguments[2] : void 0,
          OM = MM.doc ? MM : SM.p.create({
            doc: MM
          });
        return null == iM && (iM = OM.doc.length), this.regexp ? uM(this, OM, rM, iM) : tM(this, OM, rM, iM)
      }
    }
    class wM {
      constructor(MM) {
        this.spec = MM
      }
    }

    function tM(MM, rM, iM, OM) {
      let jM;
      var aM, nM;
      return MM.wholeWord && (aM = rM.doc, nM = rM.charCategorizer(rM.selection.main.head), jM = (MM, rM, iM, OM) => ((OM > MM || OM + iM.length < rM) && (OM = Math.max(0, MM - 2), iM = aM.sliceString(OM, Math.min(aM.length, rM + 2))), (nM(RM(iM, MM - OM)) != SM.h.Word || nM(pM(iM, MM - OM)) != SM.h.Word) && (nM(pM(iM, rM - OM)) != SM.h.Word || nM(RM(iM, rM - OM)) != SM.h.Word))), MM.test && (jM = function(MM, rM, iM) {
        return (OM, SM, jM, aM) => {
          if (iM && !iM(OM, SM, jM, aM)) return !1;
          let PM = OM >= aM && SM <= aM + jM.length ? jM.slice(OM - aM, SM - aM) : rM.doc.sliceString(OM, SM);
          return MM(PM, rM, OM, SM)
        }
      }(MM.test, rM, jM)), new PM(rM.doc, MM.unquoted, iM, OM, MM.caseSensitive ? void 0 : MM => MM.toLowerCase(), jM)
    }
    class gM extends wM {
      constructor(MM) {
        super(MM)
      }
      nextMatch(MM, rM, iM) {
        let OM = tM(this.spec, MM, iM, MM.doc.length).nextOverlapping();
        if (OM.done) {
          let iM = Math.min(MM.doc.length, rM + this.spec.unquoted.length);
          OM = tM(this.spec, MM, 0, iM).nextOverlapping()
        }
        return OM.done || OM.value.from == rM && OM.value.to == iM ? null : OM.value
      }
      prevMatchInRange(MM, rM, iM) {
        for (let OM = iM;;) {
          let iM = Math.max(rM, OM - 1e4 - this.spec.unquoted.length),
            SM = tM(this.spec, MM, iM, OM),
            jM = null;
          for (; !SM.nextOverlapping().done;) jM = SM.value;
          if (jM) return jM;
          if (iM == rM) return null;
          OM -= 1e4
        }
      }
      prevMatch(MM, rM, iM) {
        let OM = this.prevMatchInRange(MM, 0, rM);
        return OM || (OM = this.prevMatchInRange(MM, Math.max(0, iM - this.spec.unquoted.length), MM.doc.length)), !OM || OM.from == rM && OM.to == iM ? null : OM
      }
      getReplacement(MM) {
        return this.spec.unquote(this.spec.replace)
      }
      matchAll(MM, rM) {
        let iM = tM(this.spec, MM, 0, MM.doc.length),
          OM = [];
        for (; !iM.next().done;) {
          if (OM.length >= rM) return null;
          OM.push(iM.value)
        }
        return OM
      }
      highlight(MM, rM, iM, OM) {
        let SM = tM(this.spec, MM, Math.max(0, rM - this.spec.unquoted.length), Math.min(iM + this.spec.unquoted.length, MM.doc.length));
        for (; !SM.next().done;) OM(SM.value.from, SM.value.to)
      }
    }

    function uM(MM, rM, iM, OM) {
      let jM;
      var aM;
      return MM.wholeWord && (aM = rM.charCategorizer(rM.selection.main.head), jM = (MM, rM, iM) => !iM[0].length || (aM(RM(iM.input, iM.index)) != SM.h.Word || aM(pM(iM.input, iM.index)) != SM.h.Word) && (aM(pM(iM.input, iM.index + iM[0].length)) != SM.h.Word || aM(RM(iM.input, iM.index + iM[0].length)) != SM.h.Word)), MM.test && (jM = function(MM, rM, iM) {
        return (OM, SM, jM) => (!iM || iM(OM, SM, jM)) && MM(jM[0], rM, OM, SM)
      }(MM.test, rM, jM)), new zM(rM.doc, MM.search, {
        ignoreCase: !MM.caseSensitive,
        test: jM
      }, iM, OM)
    }

    function RM(MM, rM) {
      return MM.slice((0, SM.$)(MM, rM, !1), rM)
    }

    function pM(MM, rM) {
      return MM.slice(rM, (0, SM.$)(MM, rM))
    }
    class WM extends wM {
      nextMatch(MM, rM, iM) {
        let OM = uM(this.spec, MM, iM, MM.doc.length).next();
        return OM.done && (OM = uM(this.spec, MM, 0, rM).next()), OM.done ? null : OM.value
      }
      prevMatchInRange(MM, rM, iM) {
        for (let OM = 1;; OM++) {
          let SM = Math.max(rM, iM - 1e4 * OM),
            jM = uM(this.spec, MM, SM, iM),
            aM = null;
          for (; !jM.next().done;) aM = jM.value;
          if (aM && (SM == rM || aM.from > SM + 10)) return aM;
          if (SM == rM) return null
        }
      }
      prevMatch(MM, rM, iM) {
        return this.prevMatchInRange(MM, 0, rM) || this.prevMatchInRange(MM, iM, MM.doc.length)
      }
      getReplacement(MM) {
        return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, ((rM, iM) => {
          if ("&" == iM) return MM.match[0];
          if ("$" == iM) return "$";
          for (let OM = iM.length; OM > 0; OM--) {
            let rM = +iM.slice(0, OM);
            if (rM > 0 && rM < MM.match.length) return MM.match[rM] + iM.slice(OM)
          }
          return rM
        }))
      }
      matchAll(MM, rM) {
        let iM = uM(this.spec, MM, 0, MM.doc.length),
          OM = [];
        for (; !iM.next().done;) {
          if (OM.length >= rM) return null;
          OM.push(iM.value)
        }
        return OM
      }
      highlight(MM, rM, iM, OM) {
        let SM = uM(this.spec, MM, Math.max(0, rM - 250), Math.min(iM + 250, MM.doc.length));
        for (; !SM.next().done;) OM(SM.value.from, SM.value.to)
      }
    }
    const sM = SM.G.define(),
      DM = SM.G.define(),
      kM = SM.H.define({
        create: MM => new ZM(IM(MM).create(), null),
        update(MM, rM) {
          for (let iM of rM.effects) iM.is(sM) ? MM = new ZM(iM.value.create(), MM.panel) : iM.is(DM) && (MM = new ZM(MM.query, iM.value ? XM : null));
          return MM
        },
        provide: MM => OM.mb.from(MM, (MM => MM.panel))
      });
    class ZM {
      constructor(MM, rM) {
        this.query = MM, this.panel = rM
      }
    }
    const oM = OM.c.mark({
        class: "cm-searchMatch"
      }),
      fM = OM.c.mark({
        class: "cm-searchMatch cm-searchMatch-selected"
      }),
      YM = OM.m.fromClass(class {
        constructor(MM) {
          this.view = MM, this.ij = this.highlight(MM.state.field(kM))
        }
        update(MM) {
          let rM = MM.state.field(kM);
          (rM != MM.startState.field(kM) || MM.docChanged || MM.selectionSet || MM.viewportChanged) && (this.ij = this.highlight(rM))
        }
        highlight(MM) {
          let {
            query: rM,
            panel: iM
          } = MM;
          if (!iM || !rM.spec.valid) return OM.c.none;
          let {
            view: jM
          } = this, aM = new SM.z;
          for (let OM = 0, SM = jM.A_, PM = SM.length; OM < PM; OM++) {
            let {
              from: MM,
              to: iM
            } = SM[OM];
            for (; OM < PM - 1 && iM > SM[OM + 1].from - 500;) iM = SM[++OM].to;
            rM.highlight(jM.state, MM, iM, ((MM, rM) => {
              let iM = jM.state.selection.Ld.some((iM => iM.from == MM && iM.to == rM));
              aM.add(MM, rM, iM ? fM : oM)
            }))
          }
          return aM.finish()
        }
      }, {
        ij: MM => MM.ij
      });

    function NM(MM) {
      return rM => {
        let iM = rM.state.field(kM, !1);
        return iM && iM.query.spec.valid ? MM(rM, iM) : TM(rM)
      }
    }
    const AM = NM(((MM, rM) => {
        let {
          query: iM
        } = rM, {
          to: OM
        } = MM.state.selection.main, jM = iM.nextMatch(MM.state, OM, OM);
        if (!jM) return !1;
        let aM = SM.l.single(jM.from, jM.to),
          PM = MM.state.facet(eM);
        return MM.dispatch({
          selection: aM,
          effects: [Sr(MM, jM), PM.scrollToMatch(aM.main, MM)],
          userEvent: "select.search"
        }), qM(MM), !0
      })),
      xM = NM(((MM, rM) => {
        let {
          query: iM
        } = rM, {
          state: OM
        } = MM, {
          from: jM
        } = OM.selection.main, aM = iM.prevMatch(OM, jM, jM);
        if (!aM) return !1;
        let PM = SM.l.single(aM.from, aM.to),
          nM = MM.state.facet(eM);
        return MM.dispatch({
          selection: PM,
          effects: [Sr(MM, aM), nM.scrollToMatch(PM.main, MM)],
          userEvent: "select.search"
        }), qM(MM), !0
      })),
      vM = NM(((MM, rM) => {
        let {
          query: iM
        } = rM, OM = iM.matchAll(MM.state, 1e3);
        return !(!OM || !OM.length) && (MM.dispatch({
          selection: SM.l.create(OM.map((MM => SM.l.range(MM.from, MM.to)))),
          userEvent: "select.search.matches"
        }), !0)
      })),
      FM = NM(((MM, rM) => {
        let {
          query: iM
        } = rM, {
          state: jM
        } = MM, {
          from: aM,
          to: PM
        } = jM.selection.main;
        if (jM.readOnly) return !1;
        let nM = iM.nextMatch(jM, aM, aM);
        if (!nM) return !1;
        let QM, zM, LM = nM,
          mM = [],
          HM = [];
        LM.from == aM && LM.to == PM && (zM = jM.toText(iM.getReplacement(LM)), mM.push({
          from: LM.from,
          to: LM.to,
          insert: zM
        }), LM = iM.nextMatch(jM, LM.from, LM.to), HM.push(OM.f.announce.of(jM.phrase("replaced match on line $", jM.doc.lineAt(aM).number) + ".")));
        let hM = MM.state.changes(mM);
        return LM && (QM = SM.l.single(LM.from, LM.to).map(hM), HM.push(Sr(MM, LM)), HM.push(jM.facet(eM).scrollToMatch(QM.main, MM))), MM.dispatch({
          changes: hM,
          selection: QM,
          effects: HM,
          userEvent: "input.replace"
        }), !0
      })),
      BM = NM(((MM, rM) => {
        let {
          query: iM
        } = rM;
        if (MM.state.readOnly) return !1;
        let SM = iM.matchAll(MM.state, 1e9).map((MM => {
          let {
            from: rM,
            to: OM
          } = MM;
          return {
            from: rM,
            to: OM,
            insert: iM.getReplacement(MM)
          }
        }));
        if (!SM.length) return !1;
        let jM = MM.state.phrase("replaced $ matches", SM.length) + ".";
        return MM.dispatch({
          changes: SM,
          effects: OM.f.announce.of(jM),
          userEvent: "input.replace.all"
        }), !0
      }));

    function XM(MM) {
      return MM.state.facet(eM).createPanel(MM)
    }

    function IM(MM, rM) {
      var iM, OM, SM, jM, aM;
      let PM = MM.selection.main,
        nM = PM.empty || PM.to > PM.from + 100 ? "" : MM.sliceDoc(PM.from, PM.to);
      if (rM && !nM) return rM;
      let QM = MM.facet(eM);
      return new bM({
        search: (null !== (iM = null === rM || void 0 === rM ? void 0 : rM.literal) && void 0 !== iM ? iM : QM.literal) ? nM : nM.replace(/\n/g, "\\n"),
        caseSensitive: null !== (OM = null === rM || void 0 === rM ? void 0 : rM.caseSensitive) && void 0 !== OM ? OM : QM.caseSensitive,
        literal: null !== (SM = null === rM || void 0 === rM ? void 0 : rM.literal) && void 0 !== SM ? SM : QM.literal,
        regexp: null !== (jM = null === rM || void 0 === rM ? void 0 : rM.regexp) && void 0 !== jM ? jM : QM.regexp,
        wholeWord: null !== (aM = null === rM || void 0 === rM ? void 0 : rM.wholeWord) && void 0 !== aM ? aM : QM.wholeWord
      })
    }

    function KM(MM) {
      let rM = (0, OM.D)(MM, XM);
      return rM && rM.dom.querySelector("[main-field]")
    }

    function qM(MM) {
      let rM = KM(MM);
      rM && rM == MM.root.activeElement && rM.select()
    }
    const TM = MM => {
        let rM = MM.state.field(kM, !1);
        if (rM && rM.panel) {
          let iM = KM(MM);
          if (iM && iM != MM.root.activeElement) {
            let OM = IM(MM.state, rM.query.spec);
            OM.valid && MM.dispatch({
              effects: sM.of(OM)
            }), iM.focus(), iM.select()
          }
        } else MM.dispatch({
          effects: [DM.of(!0), rM ? sM.of(IM(MM.state, rM.query.spec)) : SM.G.appendConfig.of(ar)]
        });
        return !0
      },
      VM = MM => {
        let rM = MM.state.field(kM, !1);
        if (!rM || !rM.panel) return !1;
        let iM = (0, OM.D)(MM, XM);
        return iM && iM.dom.contains(MM.root.activeElement) && MM.focus(), MM.dispatch({
          effects: DM.of(!1)
        }), !0
      },
      cM = [{
        key: "Mod-f",
        run: TM,
        scope: "editor search-panel"
      }, {
        key: "F3",
        run: AM,
        shift: xM,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Mod-g",
        run: AM,
        shift: xM,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Escape",
        run: VM,
        scope: "editor search-panel"
      }, {
        key: "Mod-Shift-l",
        run: MM => {
          let {
            state: rM,
            dispatch: iM
          } = MM, OM = rM.selection;
          if (OM.Ld.length > 1 || OM.main.empty) return !1;
          let {
            from: jM,
            to: aM
          } = OM.main, nM = [], QM = 0;
          for (let zM = new PM(rM.doc, rM.sliceDoc(jM, aM)); !zM.next().done;) {
            if (nM.length > 1e3) return !1;
            zM.value.from == jM && (QM = nM.length), nM.push(SM.l.range(zM.value.from, zM.value.to))
          }
          return iM(rM.update({
            selection: SM.l.create(nM, QM),
            userEvent: "select.search.matches"
          })), !0
        }
      }, {
        key: "Mod-Alt-g",
        run: MM => {
          let {
            state: rM
          } = MM, iM = String(rM.doc.lineAt(MM.state.selection.main.head).number), {
            close: jM,
            result: aM
          } = (0, OM.kb)(MM, {
            label: rM.phrase("Go to line"),
            input: {
              type: "text",
              name: "line",
              value: iM
            },
            focus: !0,
            submitLabel: rM.phrase("go")
          });
          return aM.then((iM => {
            let aM = iM && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(iM.elements.line.value);
            if (!aM) return void MM.dispatch({
              effects: jM
            });
            let PM = rM.doc.lineAt(rM.selection.main.head),
              [, nM, QM, zM, LM] = aM,
              mM = zM ? +zM.slice(1) : 0,
              HM = QM ? +QM : PM.number;
            if (QM && LM) {
              let MM = HM / 100;
              nM && (MM = MM * ("-" == nM ? -1 : 1) + PM.number / rM.doc.lines), HM = Math.round(rM.doc.lines * MM)
            } else QM && nM && (HM = HM * ("-" == nM ? -1 : 1) + PM.number);
            let hM = rM.doc.line(Math.max(1, Math.min(rM.doc.lines, HM))),
              JM = SM.l.cursor(hM.from + Math.max(0, Math.min(mM, hM.length)));
            MM.dispatch({
              effects: [jM, OM.f.scrollIntoView(JM.from, {
                y: "center"
              })],
              selection: JM
            })
          })), !0
        }
      }, {
        key: "Mod-d",
        run: MM => {
          let {
            state: rM,
            dispatch: iM
          } = MM, {
            Ld: jM
          } = rM.selection;
          if (jM.some((MM => MM.from === MM.to))) return (MM => {
            let {
              state: rM,
              dispatch: iM
            } = MM, {
              selection: OM
            } = rM, jM = SM.l.create(OM.Ld.map((MM => rM.wordAt(MM.head) || SM.l.cursor(MM.head))), OM.mainIndex);
            return !jM.eq(OM) && (iM(rM.update({
              selection: jM
            })), !0)
          })({
            state: rM,
            dispatch: iM
          });
          let aM = rM.sliceDoc(jM[0].from, jM[0].to);
          if (rM.selection.Ld.some((MM => rM.sliceDoc(MM.from, MM.to) != aM))) return !1;
          let nM = function(MM, rM) {
            let {
              main: iM,
              Ld: OM
            } = MM.selection, SM = MM.wordAt(iM.head), jM = SM && SM.from == iM.from && SM.to == iM.to;
            for (let aM = !1, nM = new PM(MM.doc, rM, OM[OM.length - 1].to);;) {
              if (nM.next(), !nM.done) {
                if (aM && OM.some((MM => MM.from == nM.value.from))) continue;
                if (jM) {
                  let rM = MM.wordAt(nM.value.from);
                  if (!rM || rM.from != nM.value.from || rM.to != nM.value.to) continue
                }
                return nM.value
              }
              if (aM) return null;
              nM = new PM(MM.doc, rM, 0, Math.max(0, OM[OM.length - 1].from - 1)), aM = !0
            }
          }(rM, aM);
          return !!nM && (iM(rM.update({
            selection: rM.selection.addRange(SM.l.range(nM.from, nM.to), !1),
            effects: OM.f.scrollIntoView(nM.to)
          })), !0)
        },
        preventDefault: !0
      }];
    class Mr {
      constructor(MM) {
        this.view = MM;
        let rM = this.query = MM.state.field(kM).query.spec;

        function iM(MM, rM, iM) {
          return (0, jM.c)("button", {
            class: "cm-button",
            name: MM,
            onclick: rM,
            type: "button"
          }, iM)
        }
        this.commit = this.commit.bind(this), this.searchField = (0, jM.c)("input", {
          value: rM.search,
          placeholder: rr(MM, "Find"),
          "aria-label": rr(MM, "Find"),
          class: "cm-textfield",
          name: "search",
          form: "",
          "main-field": "true",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.replaceField = (0, jM.c)("input", {
          value: rM.replace,
          placeholder: rr(MM, "Replace"),
          "aria-label": rr(MM, "Replace"),
          class: "cm-textfield",
          name: "replace",
          form: "",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.caseField = (0, jM.c)("input", {
          type: "checkbox",
          name: "case",
          form: "",
          checked: rM.caseSensitive,
          onchange: this.commit
        }), this.reField = (0, jM.c)("input", {
          type: "checkbox",
          name: "re",
          form: "",
          checked: rM.regexp,
          onchange: this.commit
        }), this.wordField = (0, jM.c)("input", {
          type: "checkbox",
          name: "word",
          form: "",
          checked: rM.wholeWord,
          onchange: this.commit
        }), this.dom = (0, jM.c)("div", {
          onkeydown: MM => this.keydown(MM),
          class: "cm-search"
        }, [this.searchField, iM("next", (() => AM(MM)), [rr(MM, "next")]), iM("prev", (() => xM(MM)), [rr(MM, "previous")]), iM("select", (() => vM(MM)), [rr(MM, "all")]), (0, jM.c)("label", null, [this.caseField, rr(MM, "match case")]), (0, jM.c)("label", null, [this.reField, rr(MM, "regexp")]), (0, jM.c)("label", null, [this.wordField, rr(MM, "by word")]), ...MM.state.readOnly ? [] : [(0, jM.c)("br"), this.replaceField, iM("replace", (() => FM(MM)), [rr(MM, "replace")]), iM("replaceAll", (() => BM(MM)), [rr(MM, "replace all")])], (0, jM.c)("button", {
          name: "close",
          onclick: () => VM(MM),
          "aria-label": rr(MM, "close"),
          type: "button"
        }, ["\xd7"])])
      }
      commit() {
        let MM = new bM({
          search: this.searchField.value,
          caseSensitive: this.caseField.checked,
          regexp: this.reField.checked,
          wholeWord: this.wordField.checked,
          replace: this.replaceField.value
        });
        MM.eq(this.query) || (this.query = MM, this.view.dispatch({
          effects: sM.of(MM)
        }))
      }
      keydown(MM) {
        (0, OM.jb)(this.view, MM, "search-panel") ? MM.preventDefault(): 13 == MM.keyCode && MM.target == this.searchField ? (MM.preventDefault(), (MM.shiftKey ? xM : AM)(this.view)) : 13 == MM.keyCode && MM.target == this.replaceField && (MM.preventDefault(), FM(this.view))
      }
      update(MM) {
        for (let rM of MM.transactions)
          for (let MM of rM.effects) MM.is(sM) && !MM.value.eq(this.query) && this.setQuery(MM.value)
      }
      setQuery(MM) {
        this.query = MM, this.searchField.value = MM.search, this.replaceField.value = MM.replace, this.caseField.checked = MM.caseSensitive, this.reField.checked = MM.regexp, this.wordField.checked = MM.wholeWord
      }
      mount() {
        this.searchField.select()
      }
      get pos() {
        return 80
      }
      get top() {
        return this.view.state.facet(eM).top
      }
    }

    function rr(MM, rM) {
      return MM.state.phrase(rM)
    }
    const ir = 30,
      Or = /[\s\.,:;?!]/;

    function Sr(MM, rM) {
      let {
        from: iM,
        to: SM
      } = rM, jM = MM.state.doc.lineAt(iM), aM = MM.state.doc.lineAt(SM).to, PM = Math.max(jM.from, iM - ir), nM = Math.min(aM, SM + ir), QM = MM.state.sliceDoc(PM, nM);
      if (PM != jM.from)
        for (let OM = 0; OM < ir; OM++)
          if (!Or.test(QM[OM + 1]) && Or.test(QM[OM])) {
            QM = QM.slice(OM);
            break
          } if (nM != aM)
        for (let OM = QM.length - 1; OM > QM.length - ir; OM--)
          if (!Or.test(QM[OM - 1]) && Or.test(QM[OM])) {
            QM = QM.slice(0, OM);
            break
          } return OM.f.announce.of(`${MM.state.phrase("current match")}. ${QM} ${MM.state.phrase("on line")} ${jM.number}.`)
    }
    const jr = OM.f.baseTheme({
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
      ar = [kM, SM.y.low(YM), jr]
  },
  43977: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => WM,
      d: () => Qr,
      f: () => gS,
      i: () => Pa,
      m: () => qr,
      q: () => RM,
      u: () => pj,
      x: () => VS,
      A: () => Pj,
      D: () => Vj,
      H: () => Kj,
      K: () => ma,
      N: () => Ej,
      M: () => Wa,
      Q: () => Jj,
      T: () => Ij,
      X: () => ZS,
      Y: () => ga,
      _: () => Br,
      bb: () => ej,
      fb: () => gj,
      jb: () => YS,
      kb: () => Oa,
      mb: () => ia,
      nb: () => Aj
    });
    for (var OM = iM(43972), SM = iM(43982), jM = {
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
      }, aM = {
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
      }, PM = "undefined" != typeof navigator && /Mac/.test(navigator.platform), nM = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), QM = 0; QM < 10; QM++) jM[48 + QM] = jM[96 + QM] = String(QM);
    for (QM = 1; QM <= 24; QM++) jM[QM + 111] = "F" + QM;
    for (QM = 65; QM <= 90; QM++) jM[QM] = String.fromCharCode(QM + 32), aM[QM] = String.fromCharCode(QM);
    for (var zM in jM) aM.hasOwnProperty(zM) || (aM[zM] = jM[zM]);
    var LM = iM(43987);
    let mM = "undefined" != typeof navigator ? navigator : {
        userAgent: "",
        vendor: "",
        platform: ""
      },
      HM = "undefined" != typeof document ? document : {
        documentElement: {
          style: {}
        }
      };
    const hM = /Edge\/(\d+)/.exec(mM.userAgent),
      JM = /MSIE \d/.test(mM.userAgent),
      dM = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(mM.userAgent),
      yM = !!(JM || dM || hM),
      lM = !yM && /gecko\/(\d+)/i.test(mM.userAgent),
      EM = !yM && /Chrome\/(\d+)/.exec(mM.userAgent),
      UM = "webkitFontSmoothing" in HM.documentElement.style,
      GM = !yM && /Apple Computer/.test(mM.vendor),
      CM = GM && (/Mobile\/\w+/.test(mM.userAgent) || mM.maxTouchPoints > 2);
    var eM = {
      mac: CM || /Mac/.test(mM.platform),
      windows: /Win/.test(mM.platform),
      linux: /Linux|X11/.test(mM.platform),
      ie: yM,
      ie_version: JM ? HM.documentMode || 6 : dM ? +dM[1] : hM ? +hM[1] : 0,
      gecko: lM,
      gecko_version: lM ? +(/Firefox\/(\d+)/.exec(mM.userAgent) || [0, 0])[1] : 0,
      chrome: !!EM,
      chrome_version: EM ? +EM[1] : 0,
      ios: CM,
      android: /Android\b/.test(mM.userAgent),
      webkit: UM,
      webkit_version: UM ? +(/\bAppleWebKit\/(\d+)/.exec(mM.userAgent) || [0, 0])[1] : 0,
      safari: GM,
      safari_version: GM ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(mM.userAgent) || [0, 0])[1] : 0,
      tabSize: null != HM.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size"
    };

    function bM(MM, rM) {
      for (let iM in MM) "class" == iM && rM.class ? rM.class += " " + MM.class : "style" == iM && rM.style ? rM.style += ";" + MM.style : rM[iM] = MM[iM];
      return rM
    }
    const wM = Object.create(null);

    function tM(MM, rM, iM) {
      if (MM == rM) return !0;
      MM || (MM = wM), rM || (rM = wM);
      let OM = Object.keys(MM),
        SM = Object.keys(rM);
      if (OM.length - (iM && OM.indexOf(iM) > -1 ? 1 : 0) != SM.length - (iM && SM.indexOf(iM) > -1 ? 1 : 0)) return !1;
      for (let jM of OM)
        if (jM != iM && (-1 == SM.indexOf(jM) || MM[jM] !== rM[jM])) return !1;
      return !0
    }

    function gM(MM, rM, iM) {
      let OM = !1;
      if (rM)
        for (let SM in rM) iM && SM in iM || (OM = !0, "style" == SM ? MM.style.cssText = "" : MM.removeAttribute(SM));
      if (iM)
        for (let SM in iM) rM && rM[SM] == iM[SM] || (OM = !0, "style" == SM ? MM.style.cssText = iM[SM] : MM.setAttribute(SM, iM[SM]));
      return OM
    }

    function uM(MM) {
      let rM = Object.create(null);
      for (let iM = 0; iM < MM.attributes.length; iM++) {
        let OM = MM.attributes[iM];
        rM[OM.name] = OM.value
      }
      return rM
    }
    class RM {
      eq(MM) {
        return !1
      }
      updateDOM(MM, rM, iM) {
        return !1
      }
      compare(MM) {
        return this == MM || this.constructor == MM.constructor && this.eq(MM)
      }
      get estimatedHeight() {
        return -1
      }
      get lineBreaks() {
        return 0
      }
      ignoreEvent(MM) {
        return !0
      }
      coordsAt(MM, rM, iM) {
        return null
      }
      get isHidden() {
        return !1
      }
      get editable() {
        return !1
      }
      destroy(MM) {}
    }
    var pM = function(MM) {
      return MM[MM.Text = 0] = "Text", MM[MM.WidgetBefore = 1] = "WidgetBefore", MM[MM.WidgetAfter = 2] = "WidgetAfter", MM[MM.WidgetRange = 3] = "WidgetRange", MM
    }(pM || (pM = {}));
    class WM extends OM.D {
      constructor(MM, rM, iM, OM) {
        super(), this.startSide = MM, this.endSide = rM, this.widget = iM, this.spec = OM
      }
      get heightRelevant() {
        return !1
      }
      static mark(MM) {
        return new sM(MM)
      }
      static widget(MM) {
        let rM = Math.max(-1e4, Math.min(1e4, MM.side || 0)),
          iM = !!MM.block;
        return rM += iM && !MM.inlineOrder ? rM > 0 ? 3e8 : -4e8 : rM > 0 ? 1e8 : -1e8, new kM(MM, rM, rM, iM, MM.widget || null, !1)
      }
      static replace(MM) {
        let rM, iM, OM = !!MM.block;
        if (MM.isBlockGap) rM = -5e8, iM = 4e8;
        else {
          let {
            start: SM,
            end: jM
          } = ZM(MM, OM);
          rM = (SM ? OM ? -3e8 : -1 : 5e8) - 1, iM = 1 + (jM ? OM ? 2e8 : 1 : -6e8)
        }
        return new kM(MM, rM, iM, OM, MM.widget || null, !0)
      }
      static line(MM) {
        return new DM(MM)
      }
      static set(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return OM.A.of(MM, rM)
      }
      hasHeight() {
        return !!this.widget && this.widget.estimatedHeight > -1
      }
    }
    WM.none = OM.A.empty;
    class sM extends WM {
      constructor(MM) {
        let {
          start: rM,
          end: iM
        } = ZM(MM);
        super(rM ? -1 : 5e8, iM ? 1 : -6e8, null, MM), this.tagName = MM.tagName || "span", this.attrs = MM.class && MM.attributes ? bM(MM.attributes, {
          class: MM.class
        }) : MM.class ? {
          class: MM.class
        } : MM.attributes || wM
      }
      eq(MM) {
        return this == MM || MM instanceof sM && this.tagName == MM.tagName && tM(this.attrs, MM.attrs)
      }
      range(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : MM;
        if (MM >= rM) throw new RangeError("Mark decorations may not be empty");
        return super.range(MM, rM)
      }
    }
    sM.prototype.point = !1;
    class DM extends WM {
      constructor(MM) {
        super(-2e8, -2e8, null, MM)
      }
      eq(MM) {
        return MM instanceof DM && this.spec.class == MM.spec.class && tM(this.spec.attributes, MM.spec.attributes)
      }
      range(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : MM;
        if (rM != MM) throw new RangeError("Line decoration ranges must be zero-length");
        return super.range(MM, rM)
      }
    }
    DM.prototype.mapMode = OM.v.TrackBefore, DM.prototype.point = !0;
    class kM extends WM {
      constructor(MM, rM, iM, SM, jM, aM) {
        super(rM, iM, jM, MM), this.block = SM, this.isReplace = aM, this.mapMode = SM ? rM <= 0 ? OM.v.TrackBefore : OM.v.TrackAfter : OM.v.TrackDel
      }
      get type() {
        return this.startSide != this.endSide ? pM.WidgetRange : this.startSide <= 0 ? pM.WidgetBefore : pM.WidgetAfter
      }
      get heightRelevant() {
        return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0)
      }
      eq(MM) {
        return MM instanceof kM && (rM = this.widget, iM = MM.widget, rM == iM || !!(rM && iM && rM.compare(iM))) && this.block == MM.block && this.startSide == MM.startSide && this.endSide == MM.endSide;
        var rM, iM
      }
      range(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : MM;
        if (this.isReplace && (MM > rM || MM == rM && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && rM != MM) throw new RangeError("Widget decorations can only have zero-length ranges");
        return super.range(MM, rM)
      }
    }

    function ZM(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          inclusiveStart: iM,
          inclusiveEnd: OM
        } = MM;
      return null == iM && (iM = MM.inclusive), null == OM && (OM = MM.inclusive), {
        start: null !== iM && void 0 !== iM ? iM : rM,
        end: null !== OM && void 0 !== OM ? OM : rM
      }
    }

    function oM(MM, rM, iM) {
      let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        SM = iM.length - 1;
      SM >= 0 && iM[SM] + OM >= MM ? iM[SM] = Math.max(iM[SM], rM) : iM.push(MM, rM)
    }
    kM.prototype.point = !0;
    class fM extends OM.D {
      constructor(MM, rM) {
        super(), this.tagName = MM, this.attributes = rM
      }
      eq(MM) {
        return MM == this || MM instanceof fM && this.tagName == MM.tagName && tM(this.attributes, MM.attributes)
      }
      static create(MM) {
        return new fM(MM.tagName, MM.attributes || wM)
      }
      static set(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return OM.A.of(MM, rM)
      }
    }

    function YM(MM) {
      let rM;
      return rM = 11 == MM.nodeType ? MM.getSelection ? MM : MM.ownerDocument : MM, rM.getSelection()
    }

    function NM(MM, rM) {
      return !!rM && (MM == rM || MM.contains(1 != rM.nodeType ? rM.parentNode : rM))
    }

    function AM(MM, rM) {
      if (!rM.anchorNode) return !1;
      try {
        return NM(MM, rM.anchorNode)
      } catch (iM) {
        return !1
      }
    }

    function xM(MM) {
      return 3 == MM.nodeType ? Or(MM, 0, MM.nodeValue.length).getClientRects() : 1 == MM.nodeType ? MM.getClientRects() : []
    }

    function vM(MM, rM, iM, OM) {
      return !!iM && (XM(MM, rM, iM, OM, -1) || XM(MM, rM, iM, OM, 1))
    }

    function FM(MM) {
      for (var rM = 0;; rM++)
        if (!(MM = MM.previousSibling)) return rM
    }

    function BM(MM) {
      return 1 == MM.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(MM.nodeName)
    }

    function XM(MM, rM, iM, OM, SM) {
      for (;;) {
        if (MM == iM && rM == OM) return !0;
        if (rM == (SM < 0 ? 0 : IM(MM))) {
          if ("DIV" == MM.nodeName) return !1;
          let iM = MM.parentNode;
          if (!iM || 1 != iM.nodeType) return !1;
          rM = FM(MM) + (SM < 0 ? 0 : 1), MM = iM
        } else {
          if (1 != MM.nodeType) return !1;
          if (1 == (MM = MM.childNodes[rM + (SM < 0 ? -1 : 0)]).nodeType && "false" == MM.contentEditable) return !1;
          rM = SM < 0 ? IM(MM) : 0
        }
      }
    }

    function IM(MM) {
      return 3 == MM.nodeType ? MM.nodeValue.length : MM.childNodes.length
    }

    function KM(MM, rM) {
      let iM = rM ? MM.left : MM.right;
      return {
        left: iM,
        right: iM,
        top: MM.top,
        bottom: MM.bottom
      }
    }

    function qM(MM) {
      let rM = MM.visualViewport;
      return rM ? {
        left: 0,
        right: rM.width,
        top: 0,
        bottom: rM.height
      } : {
        left: 0,
        right: MM.innerWidth,
        top: 0,
        bottom: MM.innerHeight
      }
    }

    function TM(MM, rM) {
      let iM = rM.width / MM.offsetWidth,
        OM = rM.height / MM.offsetHeight;
      return (iM > .995 && iM < 1.005 || !isFinite(iM) || Math.abs(rM.width - MM.offsetWidth) < 1) && (iM = 1), (OM > .995 && OM < 1.005 || !isFinite(OM) || Math.abs(rM.height - MM.offsetHeight) < 1) && (OM = 1), {
        scaleX: iM,
        scaleY: OM
      }
    }

    function VM(MM) {
      let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        iM = MM.ownerDocument,
        OM = null,
        SM = null;
      for (let jM = MM.parentNode; jM && (jM != iM.body && (rM && !OM || !SM));)
        if (1 == jM.nodeType) !SM && jM.scrollHeight > jM.clientHeight && (SM = jM), rM && !OM && jM.scrollWidth > jM.clientWidth && (OM = jM), jM = jM.assignedSlot || jM.parentNode;
        else {
          if (11 != jM.nodeType) break;
          jM = jM.host
        } return {
        x: OM,
        y: SM
      }
    }
    fM.prototype.startSide = fM.prototype.endSide = -1;
    class cM {
      constructor() {
        this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
      }
      eq(MM) {
        return this.anchorNode == MM.anchorNode && this.anchorOffset == MM.anchorOffset && this.focusNode == MM.focusNode && this.focusOffset == MM.focusOffset
      }
      setRange(MM) {
        let {
          anchorNode: rM,
          focusNode: iM
        } = MM;
        this.set(rM, Math.min(MM.anchorOffset, rM ? IM(rM) : 0), iM, Math.min(MM.focusOffset, iM ? IM(iM) : 0))
      }
      set(MM, rM, iM, OM) {
        this.anchorNode = MM, this.anchorOffset = rM, this.focusNode = iM, this.focusOffset = OM
      }
    }
    let Mr, rr = null;

    function ir(MM) {
      if (MM.setActive) return MM.setActive();
      if (rr) return MM.focus(rr);
      let rM = [];
      for (let iM = MM; iM && (rM.push(iM, iM.scrollTop, iM.scrollLeft), iM != iM.ownerDocument); iM = iM.parentNode);
      if (MM.focus(null == rr ? {
          get preventScroll() {
            return rr = {
              preventScroll: !0
            }, !0
          }
        } : void 0), !rr) {
        rr = !1;
        for (let MM = 0; MM < rM.length;) {
          let iM = rM[MM++],
            OM = rM[MM++],
            SM = rM[MM++];
          iM.scrollTop != OM && (iM.scrollTop = OM), iM.scrollLeft != SM && (iM.scrollLeft = SM)
        }
      }
    }

    function Or(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : rM,
        OM = Mr || (Mr = document.createRange());
      return OM.setEnd(MM, iM), OM.setStart(MM, rM), OM
    }

    function Sr(MM, rM, iM, OM) {
      let SM = {
        key: rM,
        code: rM,
        keyCode: iM,
        which: iM,
        cancelable: !0
      };
      OM && ({
        altKey: SM.altKey,
        ctrlKey: SM.ctrlKey,
        shiftKey: SM.shiftKey,
        metaKey: SM.metaKey
      } = OM);
      let jM = new KeyboardEvent("keydown", SM);
      jM.synthetic = !0, MM.dispatchEvent(jM);
      let aM = new KeyboardEvent("keyup", SM);
      return aM.synthetic = !0, MM.dispatchEvent(aM), jM.defaultPrevented || aM.defaultPrevented
    }

    function jr(MM) {
      return MM instanceof Window ? MM.pageYOffset > Math.max(0, MM.document.documentElement.scrollHeight - MM.innerHeight - 4) : MM.scrollTop > Math.max(1, MM.scrollHeight - MM.clientHeight - 4)
    }

    function ar(MM, rM) {
      for (let iM = MM, OM = rM;;) {
        if (3 == iM.nodeType && OM > 0) return {
          node: iM,
          offset: OM
        };
        if (1 == iM.nodeType && OM > 0) {
          if ("false" == iM.contentEditable) return null;
          iM = iM.childNodes[OM - 1], OM = IM(iM)
        } else {
          if (!iM.parentNode || BM(iM)) return null;
          OM = FM(iM), iM = iM.parentNode
        }
      }
    }

    function Pr(MM, rM) {
      for (let iM = MM, OM = rM;;) {
        if (3 == iM.nodeType && OM < iM.nodeValue.length) return {
          node: iM,
          offset: OM
        };
        if (1 == iM.nodeType && OM < iM.childNodes.length) {
          if ("false" == iM.contentEditable) return null;
          iM = iM.childNodes[OM], OM = 0
        } else {
          if (!iM.parentNode || BM(iM)) return null;
          OM = FM(iM) + 1, iM = iM.parentNode
        }
      }
    }
    eM.safari && eM.safari_version >= 26 && (rr = !1);
    class nr {
      constructor(MM, rM) {
        let iM = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.node = MM, this.offset = rM, this.precise = iM
      }
      static before(MM, rM) {
        return new nr(MM.parentNode, FM(MM), rM)
      }
      static after(MM, rM) {
        return new nr(MM.parentNode, FM(MM) + 1, rM)
      }
    }
    var Qr = function(MM) {
      return MM[MM.LTR = 0] = "LTR", MM[MM.RTL = 1] = "RTL", MM
    }(Qr || (Qr = {}));
    const zr = Qr.LTR,
      Lr = Qr.RTL;

    function mr(MM) {
      let rM = [];
      for (let iM = 0; iM < MM.length; iM++) rM.push(1 << +MM[iM]);
      return rM
    }
    const Hr = mr("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),
      hr = mr("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),
      Jr = Object.create(null),
      dr = [];
    for (let sa of ["()", "[]", "{}"]) {
      let MM = sa.charCodeAt(0),
        rM = sa.charCodeAt(1);
      Jr[MM] = rM, Jr[rM] = -MM
    }

    function yr(MM) {
      return MM <= 247 ? Hr[MM] : 1424 <= MM && MM <= 1524 ? 2 : 1536 <= MM && MM <= 1785 ? hr[MM - 1536] : 1774 <= MM && MM <= 2220 ? 4 : 8192 <= MM && MM <= 8204 ? 256 : 64336 <= MM && MM <= 65023 ? 4 : 1
    }
    const lr = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
    class Er {
      get dir() {
        return this.level % 2 ? Lr : zr
      }
      constructor(MM, rM, iM) {
        this.from = MM, this.to = rM, this.level = iM
      }
      side(MM, rM) {
        return this.dir == rM == MM ? this.to : this.from
      }
      forward(MM, rM) {
        return MM == (this.dir == rM)
      }
      static find(MM, rM, iM, OM) {
        let SM = -1;
        for (let jM = 0; jM < MM.length; jM++) {
          let aM = MM[jM];
          if (aM.from <= rM && aM.to >= rM) {
            if (aM.level == iM) return jM;
            (SM < 0 || (0 != OM ? OM < 0 ? aM.from < rM : aM.to > rM : MM[SM].level > aM.level)) && (SM = jM)
          }
        }
        if (SM < 0) throw new RangeError("Index out of range");
        return SM
      }
    }

    function Ur(MM, rM) {
      if (MM.length != rM.length) return !1;
      for (let iM = 0; iM < MM.length; iM++) {
        let OM = MM[iM],
          SM = rM[iM];
        if (OM.from != SM.from || OM.to != SM.to || OM.direction != SM.direction || !Ur(OM.inner, SM.inner)) return !1
      }
      return !0
    }
    const Gr = [];

    function Cr(MM, rM, iM, OM, SM, jM, aM) {
      let PM = OM % 2 ? 2 : 1;
      if (OM % 2 == SM % 2)
        for (let nM = rM, QM = 0; nM < iM;) {
          let rM = !0,
            zM = !1;
          if (QM == jM.length || nM < jM[QM].from) {
            let MM = Gr[nM];
            MM != PM && (rM = !1, zM = 16 == MM)
          }
          let LM = rM || 1 != PM ? null : [],
            mM = rM ? OM : OM + 1,
            HM = nM;
          MM: for (;;)
            if (QM < jM.length && HM == jM[QM].from) {
              if (zM) break MM;
              let hM = jM[QM];
              if (!rM)
                for (let MM = hM.to, rM = QM + 1;;) {
                  if (MM == iM) break MM;
                  if (!(rM < jM.length && jM[rM].from == MM)) {
                    if (Gr[MM] == PM) break MM;
                    break
                  }
                  MM = jM[rM++].to
                }
              if (QM++, LM) LM.push(hM);
              else {
                hM.from > nM && aM.push(new Er(nM, hM.from, mM)), er(MM, hM.direction == zr != !(mM % 2) ? OM + 1 : OM, SM, hM.inner, hM.from, hM.to, aM), nM = hM.to
              }
              HM = hM.to
            } else {
              if (HM == iM || (rM ? Gr[HM] != PM : Gr[HM] == PM)) break;
              HM++
            } LM ? Cr(MM, nM, HM, OM + 1, SM, LM, aM) : nM < HM && aM.push(new Er(nM, HM, mM)), nM = HM
        } else
          for (let nM = iM, QM = jM.length; nM > rM;) {
            let iM = !0,
              zM = !1;
            if (!QM || nM > jM[QM - 1].to) {
              let MM = Gr[nM - 1];
              MM != PM && (iM = !1, zM = 16 == MM)
            }
            let LM = iM || 1 != PM ? null : [],
              mM = iM ? OM : OM + 1,
              HM = nM;
            MM: for (;;)
              if (QM && HM == jM[QM - 1].to) {
                if (zM) break MM;
                let hM = jM[--QM];
                if (!iM)
                  for (let MM = hM.from, iM = QM;;) {
                    if (MM == rM) break MM;
                    if (!iM || jM[iM - 1].to != MM) {
                      if (Gr[MM - 1] == PM) break MM;
                      break
                    }
                    MM = jM[--iM].from
                  }
                if (LM) LM.push(hM);
                else {
                  hM.to < nM && aM.push(new Er(hM.to, nM, mM)), er(MM, hM.direction == zr != !(mM % 2) ? OM + 1 : OM, SM, hM.inner, hM.from, hM.to, aM), nM = hM.from
                }
                HM = hM.from
              } else {
                if (HM == rM || (iM ? Gr[HM - 1] != PM : Gr[HM - 1] == PM)) break;
                HM--
              } LM ? Cr(MM, HM, nM, OM + 1, SM, LM, aM) : HM < nM && aM.push(new Er(HM, nM, mM)), nM = HM
          }
    }

    function er(MM, rM, iM, OM, SM, jM, aM) {
      let PM = rM % 2 ? 2 : 1;
      ! function(MM, rM, iM, OM, SM) {
        for (let jM = 0; jM <= OM.length; jM++) {
          let aM = jM ? OM[jM - 1].to : rM,
            PM = jM < OM.length ? OM[jM].from : iM,
            nM = jM ? 256 : SM;
          for (let rM = aM, iM = nM, OM = nM; rM < PM; rM++) {
            let SM = yr(MM.charCodeAt(rM));
            512 == SM ? SM = iM : 8 == SM && 4 == OM && (SM = 16), Gr[rM] = 4 == SM ? 2 : SM, 7 & SM && (OM = SM), iM = SM
          }
          for (let MM = aM, rM = nM, OM = nM; MM < PM; MM++) {
            let SM = Gr[MM];
            if (128 == SM) MM < PM - 1 && rM == Gr[MM + 1] && 24 & rM ? SM = Gr[MM] = rM : Gr[MM] = 256;
            else if (64 == SM) {
              let SM = MM + 1;
              for (; SM < PM && 64 == Gr[SM];) SM++;
              let jM = MM && 8 == rM || SM < iM && 8 == Gr[SM] ? 1 == OM ? 1 : 8 : 256;
              for (let rM = MM; rM < SM; rM++) Gr[rM] = jM;
              MM = SM - 1
            } else 8 == SM && 1 == OM && (Gr[MM] = 1);
            rM = SM, 7 & SM && (OM = SM)
          }
        }
      }(MM, SM, jM, OM, PM),
      function(MM, rM, iM, OM, SM) {
        let jM = 1 == SM ? 2 : 1;
        for (let aM = 0, PM = 0, nM = 0; aM <= OM.length; aM++) {
          let QM = aM ? OM[aM - 1].to : rM,
            zM = aM < OM.length ? OM[aM].from : iM;
          for (let rM, iM, OM, aM = QM; aM < zM; aM++)
            if (iM = Jr[rM = MM.charCodeAt(aM)])
              if (iM < 0) {
                for (let MM = PM - 3; MM >= 0; MM -= 3)
                  if (dr[MM + 1] == -iM) {
                    let rM = dr[MM + 2],
                      iM = 2 & rM ? SM : 4 & rM ? 1 & rM ? jM : SM : 0;
                    iM && (Gr[aM] = Gr[dr[MM]] = iM), PM = MM;
                    break
                  }
              } else {
                if (189 == dr.length) break;
                dr[PM++] = aM, dr[PM++] = rM, dr[PM++] = nM
              }
          else if (2 == (OM = Gr[aM]) || 1 == OM) {
            let MM = OM == SM;
            nM = MM ? 0 : 1;
            for (let rM = PM - 3; rM >= 0; rM -= 3) {
              let iM = dr[rM + 2];
              if (2 & iM) break;
              if (MM) dr[rM + 2] |= 2;
              else {
                if (4 & iM) break;
                dr[rM + 2] |= 4
              }
            }
          }
        }
      }(MM, SM, jM, OM, PM),
      function(MM, rM, iM, OM) {
        for (let SM = 0, jM = OM; SM <= iM.length; SM++) {
          let aM = SM ? iM[SM - 1].to : MM,
            PM = SM < iM.length ? iM[SM].from : rM;
          for (let nM = aM; nM < PM;) {
            let aM = Gr[nM];
            if (256 == aM) {
              let aM = nM + 1;
              for (;;)
                if (aM == PM) {
                  if (SM == iM.length) break;
                  aM = iM[SM++].to, PM = SM < iM.length ? iM[SM].from : rM
                } else {
                  if (256 != Gr[aM]) break;
                  aM++
                } let QM = 1 == jM,
                zM = QM == (1 == (aM < rM ? Gr[aM] : OM)) ? QM ? 1 : 2 : OM;
              for (let rM = aM, OM = SM, jM = OM ? iM[OM - 1].to : MM; rM > nM;) rM == jM && (rM = iM[--OM].from, jM = OM ? iM[OM - 1].to : MM), Gr[--rM] = zM;
              nM = aM
            } else jM = aM, nM++
          }
        }
      }(SM, jM, OM, PM), Cr(MM, SM, jM, rM, iM, OM, aM)
    }

    function br(MM, rM, iM) {
      if (!MM) return [new Er(0, 0, rM == Lr ? 1 : 0)];
      if (rM == zr && !iM.length && !lr.test(MM)) return wr(MM.length);
      if (iM.length)
        for (; MM.length > Gr.length;) Gr[Gr.length] = 256;
      let OM = [],
        SM = rM == zr ? 0 : 1;
      return er(MM, SM, SM, iM, 0, MM.length, OM), OM
    }

    function wr(MM) {
      return [new Er(0, MM, 0)]
    }
    let tr = "";

    function gr(MM, rM, iM, SM, jM) {
      var aM;
      let PM = SM.head - MM.from,
        nM = Er.find(rM, PM, null !== (aM = SM.bidiLevel) && void 0 !== aM ? aM : -1, SM.assoc),
        QM = rM[nM],
        zM = QM.side(jM, iM);
      if (PM == zM) {
        let MM = nM += jM ? 1 : -1;
        if (MM < 0 || MM >= rM.length) return null;
        QM = rM[nM = MM], PM = QM.side(!jM, iM), zM = QM.side(jM, iM)
      }
      let LM = (0, OM.$)(MM.text, PM, QM.forward(jM, iM));
      (LM < QM.from || LM > QM.to) && (LM = zM), tr = MM.text.slice(Math.min(PM, LM), Math.max(PM, LM));
      let mM = nM == (jM ? rM.length - 1 : 0) ? null : rM[nM + (jM ? 1 : -1)];
      return mM && LM == zM && mM.level + (jM ? 0 : 1) < QM.level ? OM.l.cursor(mM.side(!jM, iM) + MM.from, mM.forward(jM, iM) ? 1 : -1, mM.level) : OM.l.cursor(LM + MM.from, QM.forward(jM, iM) ? -1 : 1, QM.level)
    }

    function ur(MM, rM, iM) {
      for (let OM = rM; OM < iM; OM++) {
        let rM = yr(MM.charCodeAt(OM));
        if (1 == rM) return zr;
        if (2 == rM || 4 == rM) return Lr
      }
      return zr
    }
    const Rr = OM.s.define(),
      pr = OM.s.define(),
      Wr = OM.s.define(),
      sr = OM.s.define(),
      Dr = OM.s.define(),
      kr = OM.s.define(),
      Zr = OM.s.define(),
      or = OM.s.define(),
      fr = OM.s.define(),
      Yr = OM.s.define({
        combine: MM => MM.some((MM => MM))
      }),
      Nr = OM.s.define({
        combine: MM => MM.some((MM => MM))
      }),
      Ar = OM.s.define();
    class xr {
      constructor(MM, rM, iM, OM, SM) {
        let jM = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.range = MM, this.y = rM, this.x = iM, this.yMargin = OM, this.xMargin = SM, this.isSnapshot = jM
      }
      map(MM) {
        return MM.empty ? this : new xr(this.range.map(MM), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
      clip(MM) {
        return this.range.to <= MM.doc.length ? this : new xr(OM.l.cursor(MM.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
    }
    const vr = OM.G.define({
        map: (MM, rM) => MM.map(rM)
      }),
      Fr = OM.G.define();

    function Br(MM, rM, iM) {
      let OM = MM.facet(sr);
      OM.length ? OM[0](rM) : window.onerror && window.onerror(String(rM), iM, void 0, void 0, rM) || (iM ? console.error(iM + ":", rM) : console.error(rM))
    }
    const Xr = OM.s.define({
      combine: MM => !MM.length || MM[0]
    });
    let Ir = 0;
    const Kr = OM.s.define({
      combine: MM => MM.filter(((rM, iM) => {
        for (let OM = 0; OM < iM; OM++)
          if (MM[OM].plugin == rM.plugin) return !1;
        return !0
      }))
    });
    class qr {
      constructor(MM, rM, iM, OM, SM) {
        this.id = MM, this.create = rM, this.domEventHandlers = iM, this.domEventObservers = OM, this.baseExtensions = SM(this), this.extension = this.baseExtensions.concat(Kr.of({
          plugin: this,
          arg: void 0
        }))
      }
      of(MM) {
        return this.baseExtensions.concat(Kr.of({
          plugin: this,
          arg: MM
        }))
      }
      static define(MM, rM) {
        const {
          eventHandlers: iM,
          eventObservers: OM,
          provide: SM,
          ij: jM
        } = rM || {};
        return new qr(Ir++, MM, iM, OM, (MM => {
          let rM = [];
          return jM && rM.push(Mi.of((rM => {
            let iM = rM.plugin(MM);
            return iM ? jM(iM) : WM.none
          }))), SM && rM.push(SM(MM)), rM
        }))
      }
      static fromClass(MM, rM) {
        return qr.define(((rM, iM) => new MM(rM, iM)), rM)
      }
    }
    class Tr {
      constructor(MM) {
        this.spec = MM, this.mustUpdate = null, this.value = null
      }
      get plugin() {
        return this.spec && this.spec.plugin
      }
      update(MM) {
        if (this.value) {
          if (this.mustUpdate) {
            let MM = this.mustUpdate;
            if (this.mustUpdate = null, this.value.update) try {
              this.value.update(MM)
            } catch (rM) {
              if (Br(MM.state, rM, "CodeMirror plugin crashed"), this.value.destroy) try {
                this.value.destroy()
              } catch (iM) {}
              this.deactivate()
            }
          }
        } else if (this.spec) try {
          this.value = this.spec.plugin.create(MM, this.spec.arg)
        } catch (rM) {
          Br(MM.state, rM, "CodeMirror plugin crashed"), this.deactivate()
        }
        return this
      }
      destroy(MM) {
        var rM;
        if (null === (rM = this.value) || void 0 === rM ? void 0 : rM.destroy) try {
          this.value.destroy()
        } catch (iM) {
          Br(MM.state, iM, "CodeMirror plugin crashed")
        }
      }
      deactivate() {
        this.spec = this.value = null
      }
    }
    const Vr = OM.s.define(),
      cr = OM.s.define(),
      Mi = OM.s.define(),
      ri = OM.s.define(),
      ii = OM.s.define(),
      Oi = OM.s.define(),
      Si = OM.s.define();

    function ji(MM, rM) {
      let iM = MM.state.facet(Si);
      if (!iM.length) return iM;
      let SM = iM.map((rM => rM instanceof Function ? rM(MM) : rM)),
        jM = [];
      return OM.A.spans(SM, rM.from, rM.to, {
        point() {},
        span(MM, iM, OM, SM) {
          let aM = MM - rM.from,
            PM = iM - rM.from,
            nM = jM;
          for (let jM = OM.length - 1; jM >= 0; jM--, SM--) {
            let MM, iM = OM[jM].spec.bidiIsolate;
            if (null == iM && (iM = ur(rM.text, aM, PM)), SM > 0 && nM.length && (MM = nM[nM.length - 1]).to == aM && MM.direction == iM) MM.to = PM, nM = MM.inner;
            else {
              let MM = {
                from: aM,
                to: PM,
                direction: iM,
                inner: []
              };
              nM.push(MM), nM = MM.inner
            }
          }
        }
      }), jM
    }
    const ai = OM.s.define();

    function Pi(MM) {
      let rM = 0,
        iM = 0,
        OM = 0,
        SM = 0;
      for (let jM of MM.state.facet(ai)) {
        let aM = jM(MM);
        aM && (null != aM.left && (rM = Math.max(rM, aM.left)), null != aM.right && (iM = Math.max(iM, aM.right)), null != aM.top && (OM = Math.max(OM, aM.top)), null != aM.bottom && (SM = Math.max(SM, aM.bottom)))
      }
      return {
        left: rM,
        right: iM,
        top: OM,
        bottom: SM
      }
    }
    const ni = OM.s.define();
    class Qi {
      constructor(MM, rM, iM, OM) {
        this.fromA = MM, this.toA = rM, this.fromB = iM, this.toB = OM
      }
      join(MM) {
        return new Qi(Math.min(this.fromA, MM.fromA), Math.max(this.toA, MM.toA), Math.min(this.fromB, MM.fromB), Math.max(this.toB, MM.toB))
      }
      addToSet(MM) {
        let rM = MM.length,
          iM = this;
        for (; rM > 0; rM--) {
          let OM = MM[rM - 1];
          if (!(OM.fromA > iM.toA)) {
            if (OM.toA < iM.fromA) break;
            iM = iM.join(OM), MM.splice(rM - 1, 1)
          }
        }
        return MM.splice(rM, 0, iM), MM
      }
      static extendWithRanges(MM, rM) {
        if (0 == rM.length) return MM;
        let iM = [];
        for (let OM = 0, SM = 0, jM = 0;;) {
          let aM = OM < MM.length ? MM[OM].fromB : 1e9,
            PM = SM < rM.length ? rM[SM] : 1e9,
            nM = Math.min(aM, PM);
          if (1e9 == nM) break;
          let QM = nM + jM,
            zM = nM,
            LM = QM;
          for (;;)
            if (SM < rM.length && rM[SM] <= zM) {
              let iM = rM[SM + 1];
              SM += 2, zM = Math.max(zM, iM);
              for (let rM = OM; rM < MM.length && MM[rM].fromB <= zM; rM++) jM = MM[rM].toA - MM[rM].toB;
              LM = Math.max(LM, iM + jM)
            } else {
              if (!(OM < MM.length && MM[OM].fromB <= zM)) break;
              {
                let rM = MM[OM++];
                zM = Math.max(zM, rM.toB), LM = Math.max(LM, rM.toA), jM = rM.toA - rM.toB
              }
            } iM.push(new Qi(QM, LM, nM, zM))
        }
        return iM
      }
    }
    class zi {
      constructor(MM, rM, iM) {
        this.view = MM, this.state = rM, this.transactions = iM, this.flags = 0, this.startState = MM.state, this.changes = OM.ChangeSet.empty(this.startState.doc.length);
        for (let OM of iM) this.changes = this.changes.compose(OM.changes);
        let SM = [];
        this.changes.iterChangedRanges(((MM, rM, iM, OM) => SM.push(new Qi(MM, rM, iM, OM)))), this.changedRanges = SM
      }
      static create(MM, rM, iM) {
        return new zi(MM, rM, iM)
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
        return this.transactions.some((MM => MM.selection))
      }
      get empty() {
        return 0 == this.flags && 0 == this.transactions.length
      }
    }
    const Li = [];
    class mi {
      constructor(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.dom = MM, this.length = rM, this.flags = iM, this.parent = null, MM.cmTile = this
      }
      get breakAfter() {
        return 1 & this.flags
      }
      get children() {
        return Li
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
      sync(MM) {
        if (this.flags |= 2, 4 & this.flags) {
          this.flags &= -5;
          let MM = this.domAttrs;
          MM && function(MM, rM) {
            for (let iM = MM.attributes.length - 1; iM >= 0; iM--) {
              let OM = MM.attributes[iM].name;
              null == rM[OM] && MM.removeAttribute(OM)
            }
            for (let iM in rM) {
              let OM = rM[iM];
              "style" == iM ? MM.style.cssText = OM : MM.getAttribute(iM) != OM && MM.setAttribute(iM, OM)
            }
          }(this.dom, MM)
        }
      }
      toString() {
        return this.constructor.name + (this.children.length ? `(${this.children})` : "") + (this.breakAfter ? "#" : "")
      }
      destroy() {
        this.parent = null
      }
      setDOM(MM) {
        this.dom = MM, MM.cmTile = this
      }
      get posAtStart() {
        return this.parent ? this.parent.posBefore(this) : 0
      }
      get posAtEnd() {
        return this.posAtStart + this.length
      }
      posBefore(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.posAtStart;
        for (let iM of this.children) {
          if (iM == MM) return rM;
          rM += iM.length + iM.breakAfter
        }
        throw new RangeError("Invalid child in posBefore")
      }
      posAfter(MM) {
        return this.posBefore(MM) + MM.length
      }
      covers(MM) {
        return !0
      }
      coordsIn(MM, rM) {
        return null
      }
      domPosFor(MM, rM) {
        let iM = FM(this.dom),
          OM = this.length ? MM > 0 : rM > 0;
        return new nr(this.parent.dom, iM + (OM ? 1 : 0), 0 == MM || MM == this.length)
      }
      markDirty(MM) {
        this.flags &= -3, MM && (this.flags |= 4), this.parent && 2 & this.parent.flags && this.parent.markDirty(!1)
      }
      get overrideDOMText() {
        return null
      }
      get root() {
        for (let MM = this; MM; MM = MM.parent)
          if (MM instanceof di) return MM;
        return null
      }
      static get(MM) {
        return MM.cmTile
      }
    }
    class Hi extends mi {
      constructor(MM) {
        super(MM, 0), this._children = []
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
      append(MM) {
        this.children.push(MM), MM.parent = this
      }
      sync(MM) {
        if (2 & this.flags) return;
        super.sync(MM);
        let rM, iM = this.dom,
          OM = null,
          SM = (null === MM || void 0 === MM ? void 0 : MM.node) == iM ? MM : null,
          jM = 0;
        for (let aM of this.children) {
          if (aM.sync(MM), jM += aM.length + aM.breakAfter, rM = OM ? OM.nextSibling : iM.firstChild, SM && rM != aM.dom && (SM.written = !0), aM.dom.parentNode == iM)
            for (; rM && rM != aM.dom;) rM = Ji(rM);
          else iM.insertBefore(aM.dom, rM);
          OM = aM.dom
        }
        for (rM = OM ? OM.nextSibling : iM.firstChild, SM && rM && (SM.written = !0); rM;) rM = Ji(rM);
        this.length = jM
      }
    }

    function Ji(MM) {
      let rM = MM.nextSibling;
      return MM.parentNode.removeChild(MM), rM
    }
    class di extends Hi {
      constructor(MM, rM) {
        super(rM), this.view = MM
      }
      owns(MM) {
        for (; MM; MM = MM.parent)
          if (MM == this) return !0;
        return !1
      }
      isBlock() {
        return !0
      }
      nearest(MM) {
        for (;;) {
          if (!MM) return null;
          let rM = mi.get(MM);
          if (rM && this.owns(rM)) return rM;
          MM = MM.parentNode
        }
      }
      blockTiles(MM) {
        for (let rM = [], iM = this, OM = 0, SM = 0;;)
          if (OM == iM.children.length) {
            if (!rM.length) return;
            iM = iM.parent, iM.breakAfter && SM++, OM = rM.pop()
          } else {
            let jM = iM.children[OM++];
            if (jM instanceof yi) rM.push(OM), iM = jM, OM = 0;
            else {
              let rM = SM + jM.length,
                iM = MM(jM, SM);
              if (void 0 !== iM) return iM;
              SM = rM + jM.breakAfter
            }
          }
      }
      resolveBlock(MM, rM) {
        let iM, OM, SM = -1,
          jM = -1;
        if (this.blockTiles(((aM, PM) => {
            let nM = PM + aM.length;
            if (MM >= PM && MM <= nM) {
              if (aM.isWidget() && rM >= -1 && rM <= 1) {
                if (32 & aM.flags) return !0;
                16 & aM.flags && (iM = void 0)
              }(PM < MM || MM == nM && (rM < -1 ? aM.length : aM.covers(1))) && (!iM || !aM.isWidget() && iM.isWidget()) && (iM = aM, SM = MM - PM), (nM > MM || MM == PM && (rM > 1 ? aM.length : aM.covers(-1))) && (!OM || !aM.isWidget() && OM.isWidget()) && (OM = aM, jM = MM - PM)
            }
          })), !iM && !OM) throw new Error("No tile at position " + MM);
        return iM && rM < 0 || !OM ? {
          tile: iM,
          offset: SM
        } : {
          tile: OM,
          offset: jM
        }
      }
    }
    class yi extends Hi {
      constructor(MM, rM) {
        super(MM), this.wrapper = rM
      }
      isBlock() {
        return !0
      }
      covers(MM) {
        return !!this.children.length && (MM < 0 ? this.children[0].covers(-1) : this.lastChild.covers(1))
      }
      get domAttrs() {
        return this.wrapper.attributes
      }
      static of (MM, rM) {
        let iM = new yi(rM || document.createElement(MM.tagName), MM);
        return rM || (iM.flags |= 4), iM
      }
    }
    class li extends Hi {
      constructor(MM, rM) {
        super(MM), this.attrs = rM
      }
      isLine() {
        return !0
      }
      static start(MM, rM, iM) {
        let OM = new li(rM || document.createElement("div"), MM);
        return rM && iM || (OM.flags |= 4), OM
      }
      get domAttrs() {
        return this.attrs
      }
      resolveInline(MM, rM, iM) {
        let OM = null,
          SM = -1,
          jM = null,
          aM = -1;
        ! function MM(PM, nM) {
          for (let QM = 0, zM = 0; QM < PM.children.length && zM <= nM; QM++) {
            let LM = PM.children[QM],
              mM = zM + LM.length;
            mM >= nM && (LM.isComposite() ? MM(LM, nM - zM) : (!jM || jM.isHidden && (rM > 0 || iM && Ei(jM, LM))) && (mM > nM || 32 & LM.flags) ? (jM = LM, aM = nM - zM) : (zM < nM || 16 & LM.flags && !LM.isHidden) && (OM = LM, SM = nM - zM)), zM = mM
          }
        }(this, MM);
        let PM = (rM < 0 ? OM : jM) || OM || jM;
        return PM ? {
          tile: PM,
          offset: PM == OM ? SM : aM
        } : null
      }
      coordsIn(MM, rM) {
        let iM = this.resolveInline(MM, rM, !0);
        return iM ? iM.tile.coordsIn(Math.max(0, iM.offset), rM) : function(MM) {
          let rM = MM.dom.lastChild;
          if (!rM) return MM.dom.getBoundingClientRect();
          let iM = xM(rM);
          return iM[iM.length - 1] || null
        }(this)
      }
      domIn(MM, rM) {
        let iM = this.resolveInline(MM, rM);
        if (iM) {
          let {
            tile: MM,
            offset: OM
          } = iM;
          if (this.dom.contains(MM.dom)) return MM.isText() ? new nr(MM.dom, Math.min(MM.dom.nodeValue.length, OM)) : MM.domPosFor(OM, 16 & MM.flags ? 1 : 32 & MM.flags ? -1 : rM);
          let SM = iM.tile.parent,
            jM = !1;
          for (let rM of SM.children) {
            if (jM) return new nr(rM.dom, 0);
            rM == iM.tile && (jM = !0)
          }
        }
        return new nr(this.dom, 0)
      }
    }

    function Ei(MM, rM) {
      let iM = MM.coordsIn(0, 1),
        OM = rM.coordsIn(0, 1);
      return iM && OM && OM.top < iM.bottom
    }
    class Ui extends Hi {
      constructor(MM, rM) {
        super(MM), this.mark = rM
      }
      get domAttrs() {
        return this.mark.attrs
      }
      static of (MM, rM) {
        let iM = new Ui(rM || document.createElement(MM.tagName), MM);
        return rM || (iM.flags |= 4), iM
      }
    }
    class Gi extends mi {
      constructor(MM, rM) {
        super(MM, rM.length), this.text = rM
      }
      sync(MM) {
        2 & this.flags || (super.sync(MM), this.dom.nodeValue != this.text && (MM && MM.node == this.dom && (MM.written = !0), this.dom.nodeValue = this.text))
      }
      isText() {
        return !0
      }
      toString() {
        return JSON.stringify(this.text)
      }
      coordsIn(MM, rM) {
        let iM = this.dom.nodeValue.length;
        MM > iM && (MM = iM);
        let OM = MM,
          SM = MM,
          jM = 0;
        0 == MM && rM < 0 || MM == iM && rM >= 0 ? eM.chrome || eM.gecko || (MM ? (OM--, jM = 1) : SM < iM && (SM++, jM = -1)) : rM < 0 ? OM-- : SM < iM && SM++;
        let aM = Or(this.dom, OM, SM).getClientRects();
        if (!aM.length) return null;
        let PM = aM[(jM ? jM < 0 : rM >= 0) ? 0 : aM.length - 1];
        return eM.safari && !jM && 0 == PM.width && (PM = Array.prototype.find.call(aM, (MM => MM.width)) || PM), jM ? KM(PM, jM < 0) : PM || null
      }
      static of (MM, rM) {
        let iM = new Gi(rM || document.createTextNode(MM), MM);
        return rM || (iM.flags |= 2), iM
      }
    }
    class Ci extends mi {
      constructor(MM, rM, iM, OM) {
        super(MM, rM, OM), this.widget = iM
      }
      isWidget() {
        return !0
      }
      get isHidden() {
        return this.widget.isHidden
      }
      covers(MM) {
        return !(48 & this.flags) && (this.flags & (MM < 0 ? 64 : 128)) > 0
      }
      coordsIn(MM, rM) {
        return this.coordsInWidget(MM, rM, !1)
      }
      coordsInWidget(MM, rM, iM) {
        let OM = this.widget.coordsAt(this.dom, MM, rM);
        if (OM) return OM;
        if (iM) return KM(this.dom.getBoundingClientRect(), this.length ? 0 == MM : rM <= 0);
        {
          let rM = this.dom.getClientRects(),
            iM = null;
          if (!rM.length) return null;
          let OM = !!(16 & this.flags) || !(32 & this.flags) && MM > 0;
          for (let SM = OM ? rM.length - 1 : 0; iM = rM[SM], !(MM > 0 ? 0 == SM : SM == rM.length - 1 || iM.top < iM.bottom); SM += OM ? -1 : 1);
          return KM(iM, !OM)
        }
      }
      get overrideDOMText() {
        if (!this.length) return OM.K.empty;
        let {
          root: MM
        } = this;
        if (!MM) return OM.K.empty;
        let rM = this.posAtStart;
        return MM.view.state.doc.slice(rM, rM + this.length)
      }
      destroy() {
        super.destroy(), this.widget.destroy(this.dom)
      }
      static of (MM, rM, iM, OM, SM) {
        return SM || (SM = MM.toDOM(rM), MM.editable || (SM.contentEditable = "false")), new Ci(SM, iM, MM, OM)
      }
    }
    class ei extends mi {
      constructor(MM) {
        let rM = document.createElement("img");
        rM.className = "cm-widgetBuffer", rM.setAttribute("aria-hidden", "true"), super(rM, 0, MM)
      }
      get isHidden() {
        return !0
      }
      get overrideDOMText() {
        return OM.K.empty
      }
      coordsIn(MM) {
        return this.dom.getBoundingClientRect()
      }
    }
    class bi {
      constructor(MM) {
        this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = MM
      }
      advance(MM, rM, iM) {
        let {
          tile: OM,
          index: SM,
          beforeBreak: jM,
          parents: aM
        } = this;
        for (; MM || rM > 0;)
          if (OM.isComposite())
            if (jM) {
              if (!MM) break;
              iM && iM.break(), MM--, jM = !1
            } else if (SM == OM.children.length) {
          if (!MM && !aM.length) break;
          iM && iM.leave(OM), jM = !!OM.breakAfter, ({
            tile: OM,
            index: SM
          } = aM.pop()), SM++
        } else {
          let PM = OM.children[SM],
            nM = PM.breakAfter;
          !(rM > 0 ? PM.length <= MM : PM.length < MM) || iM && !1 === iM.skip(PM, 0, PM.length) && PM.isComposite ? (aM.push({
            tile: OM,
            index: SM
          }), OM = PM, SM = 0, iM && PM.isComposite() && iM.enter(PM)) : (jM = !!nM, SM++, MM -= PM.length)
        } else if (SM == OM.length) jM = !!OM.breakAfter, ({
          tile: OM,
          index: SM
        } = aM.pop()), SM++;
        else {
          if (!MM) break;
          {
            let rM = Math.min(MM, OM.length - SM);
            iM && iM.skip(OM, SM, SM + rM), MM -= rM, SM += rM
          }
        }
        return this.tile = OM, this.index = SM, this.beforeBreak = jM, this
      }
      get root() {
        return this.parents.length ? this.parents[0].tile : this.tile
      }
    }
    class wi {
      constructor(MM, rM, iM, OM) {
        this.from = MM, this.to = rM, this.wrapper = iM, this.rank = OM
      }
    }
    class ti {
      constructor(MM, rM, iM) {
        this.cache = MM, this.root = rM, this.blockWrappers = iM, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0
      }
      addText(MM, rM, iM, OM) {
        var SM;
        this.flushBuffer();
        let jM = this.ensureMarks(rM, iM),
          aM = jM.lastChild;
        if (aM && aM.isText() && !(8 & aM.flags) && aM.length + MM.length < 512) {
          this.cache.reused.set(aM, 2), (jM.children[jM.children.length - 1] = new Gi(aM.dom, aM.text + MM)).parent = jM
        } else jM.append(OM || Gi.of(MM, null === (SM = this.cache.find(Gi)) || void 0 === SM ? void 0 : SM.dom));
        this.pos += MM.length, this.afterWidget = null
      }
      addComposition(MM, rM) {
        let iM = this.curLine;
        iM.dom != rM.line.dom && (iM.setDOM(this.cache.reused.has(rM.line) ? ki(rM.line.dom) : rM.line.dom), this.cache.reused.set(rM.line, 2));
        let OM = iM;
        for (let aM = rM.marks.length - 1; aM >= 0; aM--) {
          let MM = rM.marks[aM],
            iM = OM.lastChild;
          if (iM instanceof Ui && iM.mark.eq(MM.mark)) iM.dom != MM.dom && iM.setDOM(ki(MM.dom)), OM = iM;
          else {
            if (this.cache.reused.get(MM)) {
              let rM = mi.get(MM.dom);
              rM && rM.setDOM(ki(MM.dom))
            }
            let rM = Ui.of(MM.mark, MM.dom);
            OM.append(rM), OM = rM
          }
          this.cache.reused.set(MM, 2)
        }
        let SM = mi.get(MM.text);
        SM && this.cache.reused.set(SM, 2);
        let jM = new Gi(MM.text, MM.text.nodeValue);
        jM.flags |= 8, OM.append(jM)
      }
      addInlineWidget(MM, rM, iM) {
        let OM = this.afterWidget && 48 & MM.flags && (48 & this.afterWidget.flags) == (48 & MM.flags);
        OM || this.flushBuffer();
        let SM = this.ensureMarks(rM, iM);
        OM || 16 & MM.flags || SM.append(this.getBuffer(1)), SM.append(MM), this.pos += MM.length, this.afterWidget = MM
      }
      addMark(MM, rM, iM) {
        this.flushBuffer(), this.ensureMarks(rM, iM).append(MM), this.pos += MM.length, this.afterWidget = null
      }
      addBlockWidget(MM) {
        this.getBlockPos().append(MM), this.pos += MM.length, this.lastBlock = MM, this.endLine()
      }
      continueWidget(MM) {
        (this.afterWidget || this.lastBlock).length += MM, this.pos += MM
      }
      addLineStart(MM, rM) {
        var iM;
        MM || (MM = Di);
        let OM = li.start(MM, rM || (null === (iM = this.cache.find(li)) || void 0 === iM ? void 0 : iM.dom), !!rM);
        this.getBlockPos().append(this.lastBlock = this.curLine = OM)
      }
      addLine(MM) {
        this.getBlockPos().append(MM), this.pos += MM.length, this.lastBlock = MM, this.endLine()
      }
      addBreak() {
        this.lastBlock.flags |= 1, this.endLine(), this.pos++
      }
      addLineStartIfNotCovered(MM) {
        this.blockPosCovered() || this.addLineStart(MM)
      }
      ensureLine(MM) {
        this.curLine || this.addLineStart(MM)
      }
      ensureMarks(MM, rM) {
        var iM;
        let OM = this.curLine;
        for (let SM = MM.length - 1; SM >= 0; SM--) {
          let jM, aM = MM[SM];
          if (rM > 0 && (jM = OM.lastChild) && jM instanceof Ui && jM.mark.eq(aM)) OM = jM, rM--;
          else {
            let MM = Ui.of(aM, null === (iM = this.cache.find(Ui, (MM => MM.mark.eq(aM)))) || void 0 === iM ? void 0 : iM.dom);
            OM.append(MM), OM = MM, rM = 0
          }
        }
        return OM
      }
      endLine() {
        if (this.curLine) {
          this.flushBuffer();
          let MM = this.curLine.lastChild;
          MM && si(this.curLine, !1) && ("BR" == MM.dom.nodeName || !MM.isWidget() || eM.ios && si(this.curLine, !0)) || this.curLine.append(this.cache.findWidget(oi, 0, 32) || new Ci(oi.toDOM(), 0, oi, 32)), this.curLine = this.afterWidget = null
        }
      }
      updateBlockWrappers() {
        this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
        for (let MM = this.wrappers.length - 1; MM >= 0; MM--) this.wrappers[MM].to < this.pos && this.wrappers.splice(MM, 1);
        for (let MM = this.blockWrappers; MM.value && MM.from <= this.pos; MM.next())
          if (MM.to >= this.pos) {
            let rM = new wi(MM.from, MM.to, MM.value, MM.rank),
              iM = this.wrappers.length;
            for (; iM > 0 && (this.wrappers[iM - 1].rank - rM.rank || this.wrappers[iM - 1].to - rM.to) < 0;) iM--;
            this.wrappers.splice(iM, 0, rM)
          } this.wrapperPos = this.pos
      }
      getBlockPos() {
        var MM;
        this.updateBlockWrappers();
        let rM = this.root;
        for (let iM of this.wrappers) {
          let OM = rM.lastChild;
          if (iM.from < this.pos && OM instanceof yi && OM.wrapper.eq(iM.wrapper)) rM = OM;
          else {
            let OM = yi.of(iM.wrapper, null === (MM = this.cache.find(yi, (MM => MM.wrapper.eq(iM.wrapper)))) || void 0 === MM ? void 0 : MM.dom);
            rM.append(OM), rM = OM
          }
        }
        return rM
      }
      blockPosCovered() {
        let MM = this.lastBlock;
        return null != MM && !MM.breakAfter && (!MM.isWidget() || (160 & MM.flags) > 0)
      }
      getBuffer(MM) {
        let rM = 2 | (MM < 0 ? 16 : 32),
          iM = this.cache.find(ei, void 0, 1);
        return iM && (iM.flags = rM), iM || new ei(rM)
      }
      flushBuffer() {
        !this.afterWidget || 32 & this.afterWidget.flags || (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null)
      }
    }
    class gi {
      constructor(MM) {
        this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = MM.iter()
      }
      skip(MM) {
        this.textOff + MM <= this.text.length ? this.textOff += MM : (this.skipCount += MM - (this.text.length - this.textOff), this.text = "", this.textOff = 0)
      }
      next(MM) {
        if (this.textOff == this.text.length) {
          let {
            value: rM,
            lineBreak: iM,
            done: OM
          } = this.cursor.next(this.skipCount);
          if (this.skipCount = 0, OM) throw new Error("Ran out of text content when drawing inline views");
          this.text = rM;
          let SM = this.textOff = Math.min(MM, rM.length);
          return iM ? null : rM.slice(0, SM)
        }
        let rM = Math.min(this.text.length, this.textOff + MM),
          iM = this.text.slice(this.textOff, rM);
        return this.textOff = rM, iM
      }
    }
    const ui = [Ci, li, Gi, Ui, ei, yi, di];
    for (let sa = 0; sa < ui.length; sa++) ui[sa].bucket = sa;
    class Ri {
      constructor(MM) {
        this.view = MM, this.buckets = ui.map((() => [])), this.index = ui.map((() => 0)), this.reused = new Map
      }
      add(MM) {
        let rM = MM.constructor.bucket,
          iM = this.buckets[rM];
        iM.length < 6 ? iM.push(MM) : iM[this.index[rM] = (this.index[rM] + 1) % 6] = MM
      }
      find(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          OM = MM.bucket,
          SM = this.buckets[OM],
          jM = this.index[OM];
        for (let aM = SM.length - 1; aM >= 0; aM--) {
          let MM = (aM + jM) % SM.length,
            PM = SM[MM];
          if ((!rM || rM(PM)) && !this.reused.has(PM)) return SM.splice(MM, 1), MM < jM && this.index[OM]--, this.reused.set(PM, iM), PM
        }
        return null
      }
      findWidget(MM, rM, iM) {
        let OM = this.buckets[0];
        if (OM.length)
          for (let SM = 0, jM = 0;; SM++) {
            if (SM == OM.length) {
              if (jM) return null;
              jM = 1, SM = 0
            }
            let aM = OM[SM];
            if (!this.reused.has(aM) && (0 == jM ? aM.widget.compare(MM) : aM.widget.constructor == MM.constructor && MM.updateDOM(aM.dom, this.view, aM.widget))) return OM.splice(SM, 1), SM < this.index[0] && this.index[0]--, aM.widget == MM && aM.length == rM && (497 & aM.flags) == iM ? (this.reused.set(aM, 1), aM) : (this.reused.set(aM, 2), new Ci(aM.dom, rM, MM, -498 & aM.flags | iM))
          }
      }
      reuse(MM) {
        return this.reused.set(MM, 1), MM
      }
      maybeReuse(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        if (!this.reused.has(MM)) return this.reused.set(MM, rM), MM.dom
      }
      clear() {
        for (let MM = 0; MM < this.buckets.length; MM++) this.buckets[MM].length = this.index[MM] = 0
      }
    }
    class Wi {
      constructor(MM, rM, iM, SM, jM) {
        this.view = MM, this.ij = SM, this.disallowBlockEffectsFor = jM, this.openWidget = !1, this.openMarks = 0, this.cache = new Ri(MM), this.text = new gi(MM.state.doc), this.builder = new ti(this.cache, new di(MM, MM.contentDOM), OM.A.iter(iM)), this.cache.reused.set(rM, 2), this.old = new bi(rM), this.reuseWalker = {
          skip: (MM, rM, iM) => {
            if (this.cache.add(MM), MM.isComposite()) return !1
          },
          enter: MM => this.cache.add(MM),
          leave: () => {},
          break: () => {}
        }
      }
      run(MM, rM) {
        let iM = rM && this.getCompositionContext(rM.text);
        for (let OM = 0, SM = 0, jM = 0;;) {
          let aM = jM < MM.length ? MM[jM++] : null,
            PM = aM ? aM.fromA : this.old.root.length;
          if (PM > OM) {
            let MM = PM - OM;
            this.preserve(MM, !jM, !aM), OM = PM, SM += MM
          }
          if (!aM) break;
          rM && aM.fromA <= rM.range.fromA && aM.toA >= rM.range.toA ? (this.forward(aM.fromA, rM.range.fromA, rM.range.fromA < rM.range.toA ? 1 : -1), this.emit(SM, rM.range.fromB), this.cache.clear(), this.builder.addComposition(rM, iM), this.text.skip(rM.range.toB - rM.range.fromB), this.forward(rM.range.fromA, aM.toA), this.emit(rM.range.toB, aM.toB)) : (this.forward(aM.fromA, aM.toA), this.emit(SM, aM.toB)), SM = aM.toB, OM = aM.toA
        }
        return this.builder.curLine && this.builder.endLine(), this.builder.root
      }
      preserve(MM, rM, iM) {
        let OM = function(MM) {
            let rM = [];
            for (let iM = MM.parents.length; iM > 1; iM--) {
              let OM = iM == MM.parents.length ? MM.tile : MM.parents[iM].tile;
              OM instanceof Ui && rM.push(OM.mark)
            }
            return rM
          }(this.old),
          SM = this.openMarks;
        this.old.advance(MM, iM ? 1 : -1, {
          skip: (MM, rM, iM) => {
            if (MM.isWidget())
              if (this.openWidget) this.builder.continueWidget(iM - rM);
              else {
                let jM = iM > 0 || rM < MM.length ? Ci.of(MM.widget, this.view, iM - rM, 496 & MM.flags, this.cache.maybeReuse(MM)) : this.cache.reuse(MM);
                256 & jM.flags ? (jM.flags &= -2, this.builder.addBlockWidget(jM)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(jM, OM, SM), SM = OM.length)
              }
            else if (MM.isText()) this.builder.ensureLine(null), rM || iM != MM.length || this.cache.reused.has(MM) ? (this.cache.add(MM), this.builder.addText(MM.text.slice(rM, iM), OM, SM)) : this.builder.addText(MM.text, OM, SM, this.cache.reuse(MM)), SM = OM.length;
            else if (MM.isLine()) MM.flags &= -2, this.cache.reused.set(MM, 1), this.builder.addLine(MM);
            else if (MM instanceof ei) this.cache.add(MM);
            else {
              if (!(MM instanceof Ui)) return !1;
              this.builder.ensureLine(null), this.builder.addMark(MM, OM, SM), this.cache.reused.set(MM, 1), SM = OM.length
            }
            this.openWidget = !1
          },
          enter: MM => {
            MM.isLine() ? this.builder.addLineStart(MM.attrs, this.cache.maybeReuse(MM)) : (this.cache.add(MM), MM instanceof Ui && OM.unshift(MM.mark)), this.openWidget = !1
          },
          leave: MM => {
            MM.isLine() ? OM.length && (OM.length = SM = 0) : MM instanceof Ui && (OM.shift(), SM = Math.min(SM, OM.length))
          },
          break: () => {
            this.builder.addBreak(), this.openWidget = !1
          }
        }), this.text.skip(MM)
      }
      emit(MM, rM) {
        let iM = null,
          SM = this.builder,
          jM = 0,
          aM = OM.A.spans(this.ij, MM, rM, {
            point: (MM, rM, OM, aM, PM, nM) => {
              if (OM instanceof kM) {
                if (this.disallowBlockEffectsFor[nM]) {
                  if (OM.block) throw new RangeError("Block decorations may not be specified via plugins");
                  if (rM > this.view.state.doc.lineAt(MM).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins")
                }
                if (jM = aM.length, PM > aM.length) SM.continueWidget(rM - MM);
                else {
                  let jM = OM.widget || (OM.block ? Zi.block : Zi.inline),
                    nM = function(MM) {
                      let rM = MM.isReplace ? (MM.startSide < 0 ? 64 : 0) | (MM.endSide > 0 ? 128 : 0) : MM.startSide > 0 ? 32 : 16;
                      MM.block && (rM |= 256);
                      return rM
                    }(OM),
                    QM = this.cache.findWidget(jM, rM - MM, nM) || Ci.of(jM, this.view, rM - MM, nM);
                  OM.block ? (OM.startSide > 0 && SM.addLineStartIfNotCovered(iM), SM.addBlockWidget(QM)) : (SM.ensureLine(iM), SM.addInlineWidget(QM, aM, PM))
                }
                iM = null
              } else iM = function(MM, rM) {
                let iM = rM.spec.attributes,
                  OM = rM.spec.class;
                if (!iM && !OM) return MM;
                MM || (MM = {
                  class: "cm-line"
                });
                iM && bM(iM, MM);
                OM && (MM.class += " " + OM);
                return MM
              }(iM, OM);
              rM > MM && this.text.skip(rM - MM)
            },
            span: (MM, rM, OM, jM) => {
              for (let aM = MM; aM < rM;) {
                let PM = this.text.next(Math.min(512, rM - aM));
                null == PM ? (SM.addLineStartIfNotCovered(iM), SM.addBreak(), aM++) : (SM.ensureLine(iM), SM.addText(PM, OM, aM == MM ? jM : OM.length), aM += PM.length), iM = null
              }
            }
          });
        SM.addLineStartIfNotCovered(iM), this.openWidget = aM > jM, this.openMarks = aM
      }
      forward(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        rM - MM <= 10 ? this.old.advance(rM - MM, iM, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(rM - MM - 10, -1), this.old.advance(5, iM, this.reuseWalker))
      }
      getCompositionContext(MM) {
        let rM = [],
          iM = null;
        for (let OM = MM.parentNode;; OM = OM.parentNode) {
          let MM = mi.get(OM);
          if (OM == this.view.contentDOM) break;
          MM instanceof Ui ? rM.push(MM) : (null === MM || void 0 === MM ? void 0 : MM.isLine()) ? iM = MM : MM instanceof yi || ("DIV" != OM.nodeName || iM || OM == this.view.contentDOM ? iM || rM.push(Ui.of(new sM({
            tagName: OM.nodeName.toLowerCase(),
            attributes: uM(OM)
          }), OM)) : iM = new li(OM, Di))
        }
        return {
          line: iM,
          marks: rM
        }
      }
    }

    function si(MM, rM) {
      let iM = MM => {
        for (let OM of MM.children)
          if ((rM ? OM.isText() : OM.length) || iM(OM)) return !0;
        return !1
      };
      return iM(MM)
    }
    const Di = {
      class: "cm-line"
    };

    function ki(MM) {
      let rM = mi.get(MM);
      return rM && rM.setDOM(MM.cloneNode()), MM
    }
    class Zi extends RM {
      constructor(MM) {
        super(), this.tag = MM
      }
      eq(MM) {
        return MM.tag == this.tag
      }
      toDOM() {
        return document.createElement(this.tag)
      }
      updateDOM(MM) {
        return MM.nodeName.toLowerCase() == this.tag
      }
      get isHidden() {
        return !0
      }
    }
    Zi.inline = new Zi("span"), Zi.block = new Zi("div");
    const oi = new class extends RM {
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
    class fi {
      constructor(MM) {
        this.view = MM, this.ij = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = WM.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new di(MM, MM.contentDOM), this.updateInner([new Qi(0, 0, 0, MM.state.doc.length)], null)
      }
      update(MM) {
        var rM;
        let iM = MM.changedRanges;
        this.minWidth > 0 && iM.length && (iM.every((MM => {
          let {
            fromA: rM,
            toA: iM
          } = MM;
          return iM < this.minWidthFrom || rM > this.minWidthTo
        })) ? (this.minWidthFrom = MM.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = MM.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(MM);
        let SM = -1;
        this.view.inputState.composing >= 0 && !this.view.observer.editContext && ((null === (rM = this.domChanged) || void 0 === rM ? void 0 : rM.newSel) ? SM = this.domChanged.newSel.head : function(MM, rM) {
          let iM = !1;
          rM && MM.iterChangedRanges(((MM, OM) => {
            MM < rM.to && OM > rM.from && (iM = !0)
          }));
          return iM
        }(MM.changes, this.hasComposition) || MM.selectionSet || (SM = MM.state.selection.main.head));
        let jM = SM > -1 ? function(MM, rM, iM) {
          let OM = Ni(MM, iM);
          if (!OM) return null;
          let {
            node: SM,
            from: jM,
            to: aM
          } = OM, PM = SM.nodeValue;
          if (/[\n\r]/.test(PM)) return null;
          if (MM.state.doc.sliceString(OM.from, OM.to) != PM) return null;
          let nM = rM.invertedDesc;
          return {
            range: new Qi(nM.mapPos(jM), nM.mapPos(aM), jM, aM),
            text: SM
          }
        }(this.view, MM.changes, SM) : null;
        if (this.domChanged = null, this.hasComposition) {
          let {
            from: rM,
            to: OM
          } = this.hasComposition;
          iM = new Qi(rM, OM, MM.changes.mapPos(rM, -1), MM.changes.mapPos(OM, 1)).addToSet(iM.slice())
        }
        this.hasComposition = jM ? {
          from: jM.range.fromB,
          to: jM.range.toB
        } : null, (eM.ie || eM.chrome) && !jM && MM && MM.state.doc.lines != MM.startState.doc.lines && (this.forceSelection = !0);
        let aM = this.ij,
          PM = this.blockWrappers;
        this.updateDeco();
        let nM = function(MM, rM, iM) {
          let SM = new Ai;
          return OM.A.compare(MM, rM, iM, SM), SM.changes
        }(aM, this.ij, MM.changes);
        nM.length && (iM = Qi.extendWithRanges(iM, nM));
        let QM = function(MM, rM, iM) {
          let SM = new xi;
          return OM.A.compare(MM, rM, iM, SM), SM.changes
        }(PM, this.blockWrappers, MM.changes);
        return QM.length && (iM = Qi.extendWithRanges(iM, QM)), jM && !iM.some((MM => MM.fromA <= jM.range.fromA && MM.toA >= jM.range.toA)) && (iM = jM.range.addToSet(iM.slice())), !(2 & this.tile.flags && 0 == iM.length) && (this.updateInner(iM, jM), MM.transactions.length && (this.lastUpdate = Date.now()), !0)
      }
      updateInner(MM, rM) {
        this.view.viewState.mustMeasureContent = !0;
        let {
          observer: iM
        } = this.view;
        iM.ignore((() => {
          if (rM || MM.length) {
            let iM = this.tile,
              OM = new Wi(this.view, iM, this.blockWrappers, this.ij, this.dynamicDecorationMap);
            rM && mi.get(rM.text) && OM.cache.reused.set(mi.get(rM.text), 2), this.tile = OM.run(MM, rM), Yi(iM, OM.cache.reused)
          }
          this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
          let OM = eM.chrome || eM.ios ? {
            node: iM.selectionRange.focusNode,
            written: !1
          } : void 0;
          this.tile.sync(OM), !OM || !OM.written && iM.selectionRange.focusNode == OM.node && this.tile.dom.contains(OM.node) || (this.forceSelection = !0), this.tile.dom.style.height = ""
        }));
        let OM = [];
        if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
          for (let SM of this.tile.children) SM.isWidget() && SM.widget instanceof vi && OM.push(SM.dom);
        iM.updateGaps(OM)
      }
      updateEditContextFormatting(MM) {
        this.editContextFormatting = this.editContextFormatting.map(MM.changes);
        for (let rM of MM.transactions)
          for (let MM of rM.effects) MM.is(Fr) && (this.editContextFormatting = MM.value)
      }
      updateSelection() {
        let MM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this.view.observer.selectionRange.focusNode || this.view.observer.readSelectionRange();
        let {
          dom: rM
        } = this.tile, iM = this.view.root.activeElement, OM = iM == rM, SM = !OM && !(this.view.state.facet(Xr) || rM.tabIndex > -1) && AM(rM, this.view.observer.selectionRange) && !(iM && rM.contains(iM));
        if (!(OM || MM || SM)) return;
        let jM = this.forceSelection;
        this.forceSelection = !1;
        let aM, PM, nM = this.view.state.selection.main;
        if (nM.empty ? PM = aM = this.inlineDOMNearPos(nM.anchor, nM.assoc || 1) : (PM = this.inlineDOMNearPos(nM.head, nM.head == nM.from ? 1 : -1), aM = this.inlineDOMNearPos(nM.anchor, nM.anchor == nM.from ? 1 : -1)), eM.gecko && nM.empty && !this.hasComposition && (1 == (QM = aM).node.nodeType && QM.node.firstChild && (0 == QM.offset || "false" == QM.node.childNodes[QM.offset - 1].contentEditable) && (QM.offset == QM.node.childNodes.length || "false" == QM.node.childNodes[QM.offset].contentEditable))) {
          let MM = document.createTextNode("");
          this.view.observer.ignore((() => aM.node.insertBefore(MM, aM.node.childNodes[aM.offset] || null))), aM = PM = new nr(MM, 0), jM = !0
        }
        var QM;
        let zM = this.view.observer.selectionRange;
        !jM && zM.focusNode && (vM(aM.node, aM.offset, zM.anchorNode, zM.anchorOffset) && vM(PM.node, PM.offset, zM.focusNode, zM.focusOffset) || this.suppressWidgetCursorChange(zM, nM)) || (this.view.observer.ignore((() => {
          eM.android && eM.chrome && rM.contains(zM.focusNode) && function(MM, rM) {
            for (let iM = MM; iM && iM != rM; iM = iM.assignedSlot || iM.parentNode)
              if (1 == iM.nodeType && "false" == iM.contentEditable) return !0;
            return !1
          }(zM.focusNode, rM) && (rM.blur(), rM.focus({
            preventScroll: !0
          }));
          let MM = YM(this.view.root);
          if (MM)
            if (nM.empty) {
              if (eM.gecko) {
                let MM = (OM = aM.node, jM = aM.offset, 1 != OM.nodeType ? 0 : (jM && "false" == OM.childNodes[jM - 1].contentEditable ? 1 : 0) | (jM < OM.childNodes.length && "false" == OM.childNodes[jM].contentEditable ? 2 : 0));
                if (MM && 3 != MM) {
                  let rM = (1 == MM ? ar : Pr)(aM.node, aM.offset);
                  rM && (aM = new nr(rM.node, rM.offset))
                }
              }
              MM.collapse(aM.node, aM.offset), null != nM.bidiLevel && void 0 !== MM.caretBidiLevel && (MM.caretBidiLevel = nM.bidiLevel)
            } else if (MM.extend) {
            MM.collapse(aM.node, aM.offset);
            try {
              MM.extend(PM.node, PM.offset)
            } catch (QM) {}
          } else {
            let rM = document.createRange();
            nM.anchor > nM.head && ([aM, PM] = [PM, aM]), rM.setEnd(PM.node, PM.offset), rM.setStart(aM.node, aM.offset), MM.removeAllRanges(), MM.addRange(rM)
          } else;
          var OM, jM;
          SM && this.view.root.activeElement == rM && (rM.blur(), iM && iM.focus())
        })), this.view.observer.setSelectionRange(aM, PM)), this.impreciseAnchor = aM.precise ? null : new nr(zM.anchorNode, zM.anchorOffset), this.impreciseHead = PM.precise ? null : new nr(zM.focusNode, zM.focusOffset)
      }
      suppressWidgetCursorChange(MM, rM) {
        return this.hasComposition && rM.empty && vM(MM.focusNode, MM.focusOffset, MM.anchorNode, MM.anchorOffset) && this.posFromDOM(MM.focusNode, MM.focusOffset) == rM.head
      }
      enforceCursorAssoc() {
        if (this.hasComposition) return;
        let {
          view: MM
        } = this, rM = MM.state.selection.main, iM = YM(MM.root), {
          anchorNode: OM,
          anchorOffset: SM
        } = MM.observer.selectionRange;
        if (!iM || !rM.empty || !rM.assoc || !iM.modify) return;
        let jM = this.lineAt(rM.head, rM.assoc);
        if (!jM) return;
        let aM = jM.posAtStart;
        if (rM.head == aM || rM.head == aM + jM.length) return;
        let PM = this.coordsAt(rM.head, -1),
          nM = this.coordsAt(rM.head, 1);
        if (!PM || !nM || PM.bottom > nM.top) return;
        let QM = this.domAtPos(rM.head + rM.assoc, rM.assoc);
        iM.collapse(QM.node, QM.offset), iM.modify("move", rM.assoc < 0 ? "forward" : "backward", "lineboundary"), MM.observer.readSelectionRange();
        let zM = MM.observer.selectionRange;
        MM.docView.posFromDOM(zM.anchorNode, zM.anchorOffset) != rM.from && iM.collapse(OM, SM)
      }
      posFromDOM(MM, rM) {
        let iM = this.tile.nearest(MM);
        if (!iM) return 2 & this.tile.dom.compareDocumentPosition(MM) ? 0 : this.view.state.doc.length;
        let OM = iM.posAtStart;
        if (!iM.isComposite()) return iM.isText() ? MM == iM.dom ? OM + rM : OM + (rM ? iM.length : 0) : OM;
        {
          let SM;
          if (MM == iM.dom) SM = iM.dom.childNodes[rM];
          else {
            let OM = 0 == IM(MM) ? 0 : 0 == rM ? -1 : 1;
            for (;;) {
              let rM = MM.parentNode;
              if (rM == iM.dom) break;
              0 == OM && rM.firstChild != rM.lastChild && (OM = MM == rM.firstChild ? -1 : 1), MM = rM
            }
            SM = OM < 0 ? MM : MM.nextSibling
          }
          if (SM == iM.dom.firstChild) return OM;
          for (; SM && !mi.get(SM);) SM = SM.nextSibling;
          if (!SM) return OM + iM.length;
          for (let MM = 0, rM = OM;; MM++) {
            let OM = iM.children[MM];
            if (OM.dom == SM) return rM;
            rM += OM.length + OM.breakAfter
          }
        }
      }
      domAtPos(MM, rM) {
        let {
          tile: iM,
          offset: OM
        } = this.tile.resolveBlock(MM, rM);
        return iM.isWidget() ? iM.domPosFor(MM, rM) : iM.domIn(OM, rM)
      }
      inlineDOMNearPos(MM, rM) {
        let iM, OM, SM = -1,
          jM = !1,
          aM = -1,
          PM = !1;
        return this.tile.blockTiles(((rM, nM) => {
          if (rM.isWidget()) {
            if (32 & rM.flags && nM >= MM) return !0;
            16 & rM.flags && (jM = !0)
          } else {
            let QM = nM + rM.length;
            if (nM <= MM && (iM = rM, SM = MM - nM, jM = QM < MM), QM >= MM && !OM && (OM = rM, aM = MM - nM, PM = nM > MM), nM > MM && OM) return !0
          }
        })), iM || OM ? (jM && OM ? iM = null : PM && iM && (OM = null), iM && rM < 0 || !OM ? iM.domIn(SM, rM) : OM.domIn(aM, rM)) : this.domAtPos(MM, rM)
      }
      coordsAt(MM, rM) {
        let {
          tile: iM,
          offset: OM
        } = this.tile.resolveBlock(MM, rM);
        return iM.isWidget() ? iM.widget instanceof vi ? null : iM.coordsInWidget(OM, rM, !0) : iM.coordsIn(OM, rM)
      }
      lineAt(MM, rM) {
        let {
          tile: iM
        } = this.tile.resolveBlock(MM, rM);
        return iM.isLine() ? iM : null
      }
      coordsForChar(MM) {
        let {
          tile: rM,
          offset: iM
        } = this.tile.resolveBlock(MM, 1);
        if (!rM.isLine()) return null;
        return function MM(rM, iM) {
          if (rM.isComposite())
            for (let OM of rM.children) {
              if (OM.length >= iM) {
                let rM = MM(OM, iM);
                if (rM) return rM
              }
              if ((iM -= OM.length) < 0) break
            } else if (rM.isText() && iM < rM.length) {
              let MM = (0, OM.$)(rM.text, iM);
              if (MM == iM) return null;
              let SM = Or(rM.dom, iM, MM).getClientRects();
              for (let rM = 0; rM < SM.length; rM++) {
                let MM = SM[rM];
                if (rM == SM.length - 1 || MM.top < MM.bottom && MM.left < MM.right) return MM
              }
            } return null
        }(rM, iM)
      }
      measureVisibleLineHeights(MM) {
        let rM = [],
          {
            from: iM,
            to: OM
          } = MM,
          SM = this.view.contentDOM.clientWidth,
          jM = SM > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
          aM = -1,
          PM = this.view.textDirection == Qr.LTR,
          nM = 0,
          QM = (MM, zM, LM) => {
            for (let mM = 0; mM < MM.children.length && !(zM > OM); mM++) {
              let OM = MM.children[mM],
                HM = zM + OM.length,
                hM = OM.dom.getBoundingClientRect(),
                {
                  height: JM
                } = hM;
              if (LM && !mM && (nM += hM.top - LM.top), OM instanceof yi) HM > iM && QM(OM, zM, hM);
              else if (zM >= iM && (nM > 0 && rM.push(-nM), rM.push(JM + nM), nM = 0, jM)) {
                let MM = OM.dom.lastChild,
                  rM = MM ? xM(MM) : [];
                if (rM.length) {
                  let MM = rM[rM.length - 1],
                    iM = PM ? MM.right - hM.left : hM.right - MM.left;
                  iM > aM && (aM = iM, this.minWidth = SM, this.minWidthFrom = zM, this.minWidthTo = HM)
                }
              }
              LM && mM == MM.children.length - 1 && (nM += LM.bottom - hM.bottom), zM = HM + OM.breakAfter
            }
          };
        return QM(this.tile, 0, null), rM
      }
      textDirectionAt(MM) {
        let {
          tile: rM
        } = this.tile.resolveBlock(MM, 1);
        return "rtl" == getComputedStyle(rM.dom).direction ? Qr.RTL : Qr.LTR
      }
      measureTextSize() {
        let MM = this.tile.blockTiles((MM => {
          if (MM.isLine() && MM.children.length && MM.length <= 20) {
            let rM, iM = 0;
            for (let OM of MM.children) {
              if (!OM.isText() || /[^ -~]/.test(OM.text)) return;
              let MM = xM(OM.dom);
              if (1 != MM.length) return;
              iM += MM[0].width, rM = MM[0].height
            }
            if (iM) return {
              lineHeight: MM.dom.getBoundingClientRect().height,
              charWidth: iM / MM.length,
              textHeight: rM
            }
          }
        }));
        if (MM) return MM;
        let rM, iM, OM, SM = document.createElement("div");
        return SM.className = "cm-line", SM.style.width = "99999px", SM.style.position = "absolute", SM.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore((() => {
          this.tile.dom.appendChild(SM);
          let MM = xM(SM.firstChild)[0];
          rM = SM.getBoundingClientRect().height, iM = MM && MM.width ? MM.width / 27 : 7, OM = MM && MM.height ? MM.height : rM, SM.remove()
        })), {
          lineHeight: rM,
          charWidth: iM,
          textHeight: OM
        }
      }
      computeBlockGapDeco() {
        let MM = [],
          rM = this.view.viewState;
        for (let iM = 0, OM = 0;; OM++) {
          let SM = OM == rM.viewports.length ? null : rM.viewports[OM],
            jM = SM ? SM.from - 1 : this.view.state.doc.length;
          if (jM > iM) {
            let OM = (rM.lineBlockAt(jM).bottom - rM.lineBlockAt(iM).top) / this.view.scaleY;
            MM.push(WM.replace({
              widget: new vi(OM),
              block: !0,
              inclusive: !0,
              isBlockGap: !0
            }).range(iM, jM))
          }
          if (!SM) break;
          iM = SM.to + 1
        }
        return WM.set(MM)
      }
      updateDeco() {
        let MM = 1,
          rM = this.view.state.facet(Mi).map((rM => (this.dynamicDecorationMap[MM++] = "function" == typeof rM) ? rM(this.view) : rM)),
          iM = !1,
          SM = this.view.state.facet(ii).map(((MM, rM) => {
            let OM = "function" == typeof MM;
            return OM && (iM = !0), OM ? MM(this.view) : MM
          }));
        for (SM.length && (this.dynamicDecorationMap[MM++] = iM, rM.push(OM.A.join(SM))), this.ij = [this.editContextFormatting, ...rM, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; MM < this.ij.length;) this.dynamicDecorationMap[MM++] = !1;
        this.blockWrappers = this.view.state.facet(ri).map((MM => "function" == typeof MM ? MM(this.view) : MM))
      }
      scrollIntoView(MM) {
        var rM;
        if (MM.isSnapshot) {
          let rM = this.view.viewState.lineBlockAt(MM.range.head);
          return this.view.scrollDOM.scrollTop = rM.top - MM.yMargin, void(this.view.scrollDOM.scrollLeft = MM.xMargin)
        }
        for (let zM of this.view.state.facet(Ar)) try {
          if (zM(this.view, MM.range, MM)) return !0
        } catch (QM) {
          Br(this.view.state, QM, "scroll handler")
        }
        let iM, {
            range: OM
          } = MM,
          SM = this.coordsAt(OM.head, null !== (rM = OM.assoc) && void 0 !== rM ? rM : OM.empty ? 0 : OM.head > OM.anchor ? -1 : 1);
        if (!SM) return;
        !OM.empty && (iM = this.coordsAt(OM.anchor, OM.anchor > OM.head ? -1 : 1)) && (SM = {
          left: Math.min(SM.left, iM.left),
          top: Math.min(SM.top, iM.top),
          right: Math.max(SM.right, iM.right),
          bottom: Math.max(SM.bottom, iM.bottom)
        });
        let jM = Pi(this.view),
          aM = {
            left: SM.left - jM.left,
            top: SM.top - jM.top,
            right: SM.right + jM.right,
            bottom: SM.bottom + jM.bottom
          },
          {
            offsetWidth: PM,
            offsetHeight: nM
          } = this.view.scrollDOM;
        if (function(MM, rM, iM, OM, SM, jM, aM, PM) {
            let nM = MM.ownerDocument,
              QM = nM.defaultView || window;
            for (let zM = MM, LM = !1; zM && !LM;)
              if (1 == zM.nodeType) {
                let MM, mM = zM == nM.body,
                  HM = 1,
                  hM = 1;
                if (mM) MM = qM(QM);
                else {
                  if (/^(fixed|sticky)$/.test(getComputedStyle(zM).position) && (LM = !0), zM.scrollHeight <= zM.clientHeight && zM.scrollWidth <= zM.clientWidth) {
                    zM = zM.assignedSlot || zM.parentNode;
                    continue
                  }
                  let rM = zM.getBoundingClientRect();
                  ({
                    scaleX: HM,
                    scaleY: hM
                  } = TM(zM, rM)), MM = {
                    left: rM.left,
                    right: rM.left + zM.clientWidth * HM,
                    top: rM.top,
                    bottom: rM.top + zM.clientHeight * hM
                  }
                }
                let JM = 0,
                  dM = 0;
                if ("nearest" == SM) rM.top < MM.top + aM ? (dM = rM.top - (MM.top + aM), iM > 0 && rM.bottom > MM.bottom + dM && (dM = rM.bottom - MM.bottom + aM)) : rM.bottom > MM.bottom - aM && (dM = rM.bottom - MM.bottom + aM, iM < 0 && rM.top - dM < MM.top && (dM = rM.top - (MM.top + aM)));
                else {
                  let OM = rM.bottom - rM.top,
                    jM = MM.bottom - MM.top;
                  dM = ("center" == SM && OM <= jM ? rM.top + OM / 2 - jM / 2 : "start" == SM || "center" == SM && iM < 0 ? rM.top - aM : rM.bottom - jM + aM) - MM.top
                }
                if ("nearest" == OM ? rM.left < MM.left + jM ? (JM = rM.left - (MM.left + jM), iM > 0 && rM.right > MM.right + JM && (JM = rM.right - MM.right + jM)) : rM.right > MM.right - jM && (JM = rM.right - MM.right + jM, iM < 0 && rM.left < MM.left + JM && (JM = rM.left - (MM.left + jM))) : JM = ("center" == OM ? rM.left + (rM.right - rM.left) / 2 - (MM.right - MM.left) / 2 : "start" == OM == PM ? rM.left - jM : rM.right - (MM.right - MM.left) + jM) - MM.left, JM || dM)
                  if (mM) QM.scrollBy(JM, dM);
                  else {
                    let MM = 0,
                      iM = 0;
                    if (dM) {
                      let MM = zM.scrollTop;
                      zM.scrollTop += dM / hM, iM = (zM.scrollTop - MM) * hM
                    }
                    if (JM) {
                      let rM = zM.scrollLeft;
                      zM.scrollLeft += JM / HM, MM = (zM.scrollLeft - rM) * HM
                    }
                    rM = {
                      left: rM.left - MM,
                      top: rM.top - iM,
                      right: rM.right - MM,
                      bottom: rM.bottom - iM
                    }, MM && Math.abs(MM - JM) < 1 && (OM = "nearest"), iM && Math.abs(iM - dM) < 1 && (SM = "nearest")
                  } if (mM) break;
                (rM.top < MM.top || rM.bottom > MM.bottom || rM.left < MM.left || rM.right > MM.right) && (rM = {
                  left: Math.max(rM.left, MM.left),
                  right: Math.min(rM.right, MM.right),
                  top: Math.max(rM.top, MM.top),
                  bottom: Math.min(rM.bottom, MM.bottom)
                }), zM = zM.assignedSlot || zM.parentNode
              } else {
                if (11 != zM.nodeType) break;
                zM = zM.host
              }
          }(this.view.scrollDOM, aM, OM.head < OM.anchor ? -1 : 1, MM.x, MM.y, Math.max(Math.min(MM.xMargin, PM), -PM), Math.max(Math.min(MM.yMargin, nM), -nM), this.view.textDirection == Qr.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (SM.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || SM.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
          let MM = this.view.docView.lineAt(OM.head, 1);
          MM && MM.dom.scrollIntoView({
            block: "nearest"
          })
        }
      }
      lineHasWidget(MM) {
        let rM = MM => MM.isWidget() || MM.children.some(rM);
        return rM(this.tile.resolveBlock(MM, 1).tile)
      }
      destroy() {
        Yi(this.tile)
      }
    }

    function Yi(MM, rM) {
      let iM = null === rM || void 0 === rM ? void 0 : rM.get(MM);
      if (1 != iM) {
        null == iM && MM.destroy();
        for (let iM of MM.children) Yi(iM, rM)
      }
    }

    function Ni(MM, rM) {
      let iM = MM.observer.selectionRange;
      if (!iM.focusNode) return null;
      let OM = ar(iM.focusNode, iM.focusOffset),
        SM = Pr(iM.focusNode, iM.focusOffset),
        jM = OM || SM;
      if (SM && OM && SM.node != OM.node) {
        let rM = mi.get(SM.node);
        if (!rM || rM.isText() && rM.text != SM.node.nodeValue) jM = SM;
        else if (MM.docView.lastCompositionAfterCursor) {
          let MM = mi.get(OM.node);
          !MM || MM.isText() && MM.text != OM.node.nodeValue || (jM = SM)
        }
      }
      if (MM.docView.lastCompositionAfterCursor = jM != OM, !jM) return null;
      let aM = rM - jM.offset;
      return {
        from: aM,
        to: aM + jM.node.nodeValue.length,
        node: jM.node
      }
    }
    let Ai = class {
      constructor() {
        this.changes = []
      }
      compareRange(MM, rM) {
        oM(MM, rM, this.changes)
      }
      comparePoint(MM, rM) {
        oM(MM, rM, this.changes)
      }
      boundChange(MM) {
        oM(MM, MM, this.changes)
      }
    };
    class xi {
      constructor() {
        this.changes = []
      }
      compareRange(MM, rM) {
        oM(MM, rM, this.changes)
      }
      comparePoint() {}
      boundChange(MM) {
        oM(MM, MM, this.changes)
      }
    }
    class vi extends RM {
      constructor(MM) {
        super(), this.height = MM
      }
      toDOM() {
        let MM = document.createElement("div");
        return MM.className = "cm-gap", this.updateDOM(MM), MM
      }
      eq(MM) {
        return MM.height == this.height
      }
      updateDOM(MM) {
        return MM.style.height = this.height + "px", !0
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

    function Fi(MM, rM, iM) {
      let OM = MM.lineBlockAt(rM);
      if (Array.isArray(OM.type)) {
        let MM;
        for (let SM of OM.type) {
          if (SM.from > rM) break;
          if (!(SM.to < rM)) {
            if (SM.from < rM && SM.to > rM) return SM;
            MM && (SM.type != pM.Text || MM.type == SM.type && !(iM < 0 ? SM.from < rM : SM.to > rM)) || (MM = SM)
          }
        }
        return MM || OM
      }
      return OM
    }

    function Bi(MM, rM, iM, OM) {
      let SM = MM.state.doc.lineAt(rM.head),
        jM = MM.bidiSpans(SM),
        aM = MM.textDirectionAt(SM.from);
      for (let PM = rM, nM = null;;) {
        let rM = gr(SM, jM, aM, PM, iM),
          QM = tr;
        if (!rM) {
          if (SM.number == (iM ? MM.state.doc.lines : 1)) return PM;
          QM = "\n", SM = MM.state.doc.line(SM.number + (iM ? 1 : -1)), jM = MM.bidiSpans(SM), rM = MM.visualLineSide(SM, !iM)
        }
        if (nM) {
          if (!nM(QM)) return PM
        } else {
          if (!OM) return rM;
          nM = OM(QM)
        }
        PM = rM
      }
    }

    function Xi(MM, rM, iM) {
      for (;;) {
        let OM = 0;
        for (let SM of MM) SM.between(rM - 1, rM + 1, ((MM, SM, jM) => {
          if (rM > MM && rM < SM) {
            let jM = OM || iM || (rM - MM < SM - rM ? -1 : 1);
            rM = jM < 0 ? MM : SM, OM = jM
          }
        }));
        if (!OM) return rM
      }
    }

    function Ii(MM, rM) {
      let iM = null;
      for (let SM = 0; SM < rM.Ld.length; SM++) {
        let jM = rM.Ld[SM],
          aM = null;
        if (jM.empty) {
          let rM = Xi(MM, jM.from, 0);
          rM != jM.from && (aM = OM.l.cursor(rM, -1))
        } else {
          let rM = Xi(MM, jM.from, -1),
            iM = Xi(MM, jM.to, 1);
          rM == jM.from && iM == jM.to || (aM = OM.l.range(jM.from == jM.anchor ? rM : iM, jM.from == jM.head ? rM : iM))
        }
        aM && (iM || (iM = rM.Ld.slice()), iM[SM] = aM)
      }
      return iM ? OM.l.create(iM, rM.mainIndex) : rM
    }

    function Ki(MM, rM, iM) {
      let SM = Xi(MM.state.facet(Oi).map((rM => rM(MM))), iM.from, rM.head > iM.from ? -1 : 1);
      return SM == iM.from ? iM : OM.l.cursor(SM, SM < iM.from ? 1 : -1)
    }
    class qi {
      constructor(MM, rM) {
        this.pos = MM, this.assoc = rM
      }
    }

    function Ti(MM, rM, iM, SM) {
      let jM, aM = MM.contentDOM.getBoundingClientRect(),
        PM = aM.top + MM.viewState.paddingTop,
        {
          x: nM,
          y: QM
        } = rM,
        zM = QM - PM;
      for (;;) {
        if (zM < 0) return new qi(0, 1);
        if (zM > MM.viewState.docHeight) return new qi(MM.state.doc.length, -1);
        if (jM = MM.elementAtHeight(zM), null == SM) break;
        if (jM.type == pM.Text) {
          if (SM < 0 ? jM.to < MM.viewport.from : jM.from > MM.viewport.to) break;
          let rM = MM.docView.coordsAt(SM < 0 ? jM.from : jM.to, SM > 0 ? -1 : 1);
          if (rM && (SM < 0 ? rM.top <= zM + PM : rM.bottom >= zM + PM)) break
        }
        let rM = MM.viewState.heightOracle.textHeight / 2;
        zM = SM > 0 ? jM.bottom + rM : jM.top - rM
      }
      if (MM.viewport.from >= jM.to || MM.viewport.to <= jM.from) {
        if (iM) return null;
        if (jM.type == pM.Text) {
          let rM = function(MM, rM, iM, SM, jM) {
            let aM = Math.round((SM - rM.left) * MM.defaultCharacterWidth);
            if (MM.lineWrapping && iM.height > 1.5 * MM.defaultLineHeight) {
              let rM = MM.viewState.heightOracle.textHeight;
              aM += Math.floor((jM - iM.top - .5 * (MM.defaultLineHeight - rM)) / rM) * MM.viewState.heightOracle.lineLength
            }
            let PM = MM.state.sliceDoc(iM.from, iM.to);
            return iM.from + (0, OM.cb)(PM, aM, MM.state.tabSize)
          }(MM, aM, jM, nM, QM);
          return new qi(rM, rM == jM.from ? 1 : -1)
        }
      }
      if (jM.type != pM.Text) return zM < (jM.top + jM.bottom) / 2 ? new qi(jM.from, 1) : new qi(jM.to, -1);
      let LM = MM.docView.lineAt(jM.from, 2);
      return LM && LM.length == jM.length || (LM = MM.docView.lineAt(jM.from, -2)), new Vi(MM, nM, QM, MM.textDirectionAt(jM.from)).scanTile(LM, jM.from)
    }
    class Vi {
      constructor(MM, rM, iM, OM) {
        this.view = MM, this.x = rM, this.y = iM, this.baseDir = OM, this.line = null, this.spans = null
      }
      bidiSpansAt(MM) {
        return (!this.line || this.line.from > MM || this.line.to < MM) && (this.line = this.view.state.doc.lineAt(MM), this.spans = this.view.bidiSpans(this.line)), this
      }
      baseDirAt(MM, rM) {
        let {
          line: iM,
          spans: OM
        } = this.bidiSpansAt(MM);
        return OM[Er.find(OM, MM - iM.from, -1, rM)].level == this.baseDir
      }
      dirAt(MM, rM) {
        let {
          line: iM,
          spans: OM
        } = this.bidiSpansAt(MM);
        return OM[Er.find(OM, MM - iM.from, -1, rM)].dir
      }
      bidiIn(MM, rM) {
        let {
          spans: iM,
          line: OM
        } = this.bidiSpansAt(MM);
        return iM.length > 1 || iM.length && (iM[0].level != this.baseDir || iM[0].to + OM.from < rM)
      }
      scan(MM, rM) {
        let iM, OM, SM, jM = 0,
          aM = MM.length - 1,
          PM = new Set,
          nM = this.bidiIn(MM[0], MM[aM]),
          QM = -1,
          zM = 1e9;
        MM: for (; jM < aM;) {
          let LM = aM - jM,
            mM = jM + aM >> 1;
          rM: if (PM.has(mM)) {
            let MM = jM + Math.floor(Math.random() * LM);
            for (let rM = 0; rM < LM; rM++) {
              if (!PM.has(MM)) {
                mM = MM;
                break rM
              }
              MM++, MM == aM && (MM = jM)
            }
            break MM
          } PM.add(mM);
          let HM = rM(mM);
          if (HM)
            for (let rM = 0; rM < HM.length; rM++) {
              let PM = HM[rM],
                LM = 0;
              if (!(0 == PM.width && HM.length > 1)) {
                if (PM.bottom < this.y)(!iM || iM.bottom < PM.bottom) && (iM = PM), LM = 1;
                else if (PM.top > this.y)(!OM || OM.top > PM.top) && (OM = PM), LM = -1;
                else {
                  let MM = PM.left > this.x ? this.x - PM.left : PM.right < this.x ? this.x - PM.right : 0,
                    rM = Math.abs(MM);
                  rM < zM && (QM = mM, zM = rM, SM = PM), MM && (LM = MM < 0 == (this.baseDir == Qr.LTR) ? -1 : 1)
                } - 1 != LM || nM && !this.baseDirAt(MM[mM], 1) ? 1 != LM || nM && !this.baseDirAt(MM[mM + 1], -1) || (jM = mM + 1) : aM = mM
              }
            }
        }
        if (!SM) {
          let SM = iM && (!OM || this.y - iM.bottom < OM.top - this.y) ? iM : OM;
          return this.y = (SM.top + SM.bottom) / 2, this.scan(MM, rM)
        }
        if (zM) {
          if (iM && iM.bottom > SM.top) return this.y = iM.bottom - 1, this.scan(MM, rM);
          if (OM && OM.top < SM.bottom) return this.y = OM.top + 1, this.scan(MM, rM)
        }
        let LM = (nM ? this.dirAt(MM[QM], 1) : this.baseDir) == Qr.LTR;
        return {
          i: QM,
          after: this.x > (SM.left + SM.right) / 2 == LM
        }
      }
      scanText(MM, rM) {
        let iM = [];
        for (let jM = 0; jM < MM.length; jM = (0, OM.$)(MM.text, jM)) iM.push(rM + jM);
        iM.push(rM + MM.length);
        let SM = this.scan(iM, (OM => {
          let SM = iM[OM] - rM,
            jM = iM[OM + 1] - rM;
          return Or(MM.dom, SM, jM).getClientRects()
        }));
        return SM.after ? new qi(iM[SM.i + 1], -1) : new qi(iM[SM.i], 1)
      }
      scanTile(MM, rM) {
        if (!MM.length) return new qi(rM, 1);
        if (1 == MM.children.length) {
          let iM = MM.children[0];
          if (iM.isText()) return this.scanText(iM, rM);
          if (iM.isComposite()) return this.scanTile(iM, rM)
        }
        let iM = [rM];
        for (let aM = 0, PM = rM; aM < MM.children.length; aM++) iM.push(PM += MM.children[aM].length);
        let OM = this.scan(iM, (rM => {
            let iM = MM.children[rM];
            return 48 & iM.flags ? null : (1 == iM.dom.nodeType ? iM.dom : Or(iM.dom, 0, iM.length)).getClientRects()
          })),
          SM = MM.children[OM.i],
          jM = iM[OM.i];
        return SM.isText() ? this.scanText(SM, jM) : SM.isComposite() ? this.scanTile(SM, jM) : OM.after ? new qi(iM[OM.i + 1], -1) : new qi(jM, 1)
      }
    }
    const ci = "\uffff";
    class MO {
      constructor(MM, rM) {
        this.points = MM, this.view = rM, this.text = "", this.lineSeparator = rM.state.facet(OM.p.lineSeparator)
      }
      append(MM) {
        this.text += MM
      }
      lineBreak() {
        this.text += ci
      }
      readRange(MM, rM) {
        if (!MM) return this;
        let iM = MM.parentNode;
        for (let OM = MM;;) {
          this.findPointBefore(iM, OM);
          let MM = this.text.length;
          this.readNode(OM);
          let SM = mi.get(OM),
            jM = OM.nextSibling;
          if (jM == rM) {
            (null === SM || void 0 === SM ? void 0 : SM.breakAfter) && !jM && iM != this.view.contentDOM && this.lineBreak();
            break
          }
          let aM = mi.get(jM);
          (SM && aM ? SM.breakAfter : (SM ? SM.breakAfter : BM(OM)) || BM(jM) && ("BR" != OM.nodeName || (null === SM || void 0 === SM ? void 0 : SM.isWidget())) && this.text.length > MM) && !iO(jM, rM) && this.lineBreak(), OM = jM
        }
        return this.findPointBefore(iM, rM), this
      }
      readTextNode(MM) {
        let rM = MM.nodeValue;
        for (let iM of this.points) iM.node == MM && (iM.pos = this.text.length + Math.min(iM.offset, rM.length));
        for (let iM = 0, OM = this.lineSeparator ? null : /\r\n?|\n/g;;) {
          let SM, jM = -1,
            aM = 1;
          if (this.lineSeparator ? (jM = rM.indexOf(this.lineSeparator, iM), aM = this.lineSeparator.length) : (SM = OM.exec(rM)) && (jM = SM.index, aM = SM[0].length), this.append(rM.slice(iM, jM < 0 ? rM.length : jM)), jM < 0) break;
          if (this.lineBreak(), aM > 1)
            for (let rM of this.points) rM.node == MM && rM.pos > this.text.length && (rM.pos -= aM - 1);
          iM = jM + aM
        }
      }
      readNode(MM) {
        let rM = mi.get(MM),
          iM = rM && rM.overrideDOMText;
        if (null != iM) {
          this.findPointInside(MM, iM.length);
          for (let MM = iM.iter(); !MM.next().done;) MM.lineBreak ? this.lineBreak() : this.append(MM.value)
        } else 3 == MM.nodeType ? this.readTextNode(MM) : "BR" == MM.nodeName ? MM.nextSibling && this.lineBreak() : 1 == MM.nodeType && this.readRange(MM.firstChild, null)
      }
      findPointBefore(MM, rM) {
        for (let iM of this.points) iM.node == MM && MM.childNodes[iM.offset] == rM && (iM.pos = this.text.length)
      }
      findPointInside(MM, rM) {
        for (let iM of this.points)(3 == MM.nodeType ? iM.node == MM : MM.contains(iM.node)) && (iM.pos = this.text.length + (rO(MM, iM.node, iM.offset) ? rM : 0))
      }
    }

    function rO(MM, rM, iM) {
      for (;;) {
        if (!rM || iM < IM(rM)) return !1;
        if (rM == MM) return !0;
        iM = FM(rM) + 1, rM = rM.parentNode
      }
    }

    function iO(MM, rM) {
      let iM;
      for (; MM != rM && MM; MM = MM.nextSibling) {
        let rM = mi.get(MM);
        if (!(null === rM || void 0 === rM ? void 0 : rM.isWidget())) return !1;
        rM && (iM || (iM = [])).push(rM)
      }
      if (iM)
        for (let OM of iM) {
          let MM = OM.overrideDOMText;
          if (null === MM || void 0 === MM ? void 0 : MM.length) return !1
        }
      return !0
    }
    class OO {
      constructor(MM, rM) {
        this.node = MM, this.offset = rM, this.pos = -1
      }
    }
    class SO {
      constructor(MM, rM, iM, SM) {
        this.typeOver = SM, this.bounds = null, this.text = "", this.domChanged = rM > -1;
        let {
          impreciseHead: jM,
          impreciseAnchor: aM
        } = MM.docView, PM = MM.state.selection;
        if (MM.state.readOnly && rM > -1) this.newSel = null;
        else if (rM > -1 && (this.bounds = jO(MM.docView.tile, rM, iM, 0))) {
          let rM = jM || aM ? [] : function(MM) {
              let rM = [];
              if (MM.root.activeElement != MM.contentDOM) return rM;
              let {
                anchorNode: iM,
                anchorOffset: OM,
                focusNode: SM,
                focusOffset: jM
              } = MM.observer.selectionRange;
              iM && (rM.push(new OO(iM, OM)), SM == iM && jM == OM || rM.push(new OO(SM, jM)));
              return rM
            }(MM),
            iM = new MO(rM, MM);
          iM.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = iM.text, this.newSel = function(MM, rM) {
            if (0 == MM.length) return null;
            let iM = MM[0].pos,
              SM = 2 == MM.length ? MM[1].pos : iM;
            return iM > -1 && SM > -1 ? OM.l.single(iM + rM, SM + rM) : null
          }(rM, this.bounds.from)
        } else {
          let rM = MM.observer.selectionRange,
            iM = jM && jM.node == rM.focusNode && jM.offset == rM.focusOffset || !NM(MM.contentDOM, rM.focusNode) ? PM.main.head : MM.docView.posFromDOM(rM.focusNode, rM.focusOffset),
            SM = aM && aM.node == rM.anchorNode && aM.offset == rM.anchorOffset || !NM(MM.contentDOM, rM.anchorNode) ? PM.main.anchor : MM.docView.posFromDOM(rM.anchorNode, rM.anchorOffset),
            nM = MM.viewport;
          if ((eM.ios || eM.chrome) && PM.main.empty && iM != SM && (nM.from > 0 || nM.to < MM.state.doc.length)) {
            let rM = Math.min(iM, SM),
              OM = Math.max(iM, SM),
              jM = nM.from - rM,
              aM = nM.to - OM;
            0 != jM && 1 != jM && 0 != rM || 0 != aM && -1 != aM && OM != MM.state.doc.length || (iM = 0, SM = MM.state.doc.length)
          }
          if (MM.inputState.composing > -1 && PM.Ld.length > 1) this.newSel = PM.replaceRange(OM.l.range(SM, iM));
          else if (MM.lineWrapping && SM == iM && (!PM.main.empty || PM.main.head != iM) && MM.inputState.lastTouchTime > Date.now() - 100) {
            let rM = MM.coordsAtPos(iM, -1),
              SM = 0;
            rM && (SM = MM.inputState.lastTouchY <= rM.bottom ? -1 : 1), this.newSel = OM.l.create([OM.l.cursor(iM, SM)])
          } else this.newSel = OM.l.single(SM, iM)
        }
      }
    }

    function jO(MM, rM, iM, OM) {
      if (MM.isComposite()) {
        let SM = -1,
          jM = -1,
          aM = -1,
          PM = -1;
        for (let nM = 0, QM = OM, zM = OM; nM < MM.children.length; nM++) {
          let OM = MM.children[nM],
            LM = QM + OM.length;
          if (QM < rM && LM > iM) return jO(OM, rM, iM, QM);
          if (LM >= rM && -1 == SM && (SM = nM, jM = QM), QM > iM && OM.dom.parentNode == MM.dom) {
            aM = nM, PM = zM;
            break
          }
          zM = LM, QM = LM + OM.breakAfter
        }
        return {
          from: jM,
          to: PM < 0 ? OM + MM.length : PM,
          startDOM: (SM ? MM.children[SM - 1].dom.nextSibling : null) || MM.dom.firstChild,
          endDOM: aM < MM.children.length && aM >= 0 ? MM.children[aM].dom : null
        }
      }
      return MM.isText() ? {
        from: OM,
        to: OM + MM.length,
        startDOM: MM.dom,
        endDOM: MM.dom.nextSibling
      } : null
    }

    function aO(MM, rM) {
      let iM, {
          newSel: SM
        } = rM,
        {
          state: jM
        } = MM,
        aM = jM.selection.main,
        PM = MM.inputState.lastKeyTime > Date.now() - 100 ? MM.inputState.lastKeyCode : -1;
      if (rM.bounds) {
        let {
          from: MM,
          to: SM
        } = rM.bounds, nM = aM.from, QM = null;
        (8 === PM || eM.android && rM.text.length < SM - MM) && (nM = aM.to, QM = "end");
        let zM, LM, mM = jM.doc.sliceString(MM, SM, ci);
        !aM.empty && aM.from >= MM && aM.to <= SM && (rM.typeOver || mM != rM.text) && mM.slice(0, aM.from - MM) == rM.text.slice(0, aM.from - MM) && mM.slice(aM.to - MM) == rM.text.slice(zM = rM.text.length - (mM.length - (aM.to - MM))) ? iM = {
          from: aM.from,
          to: aM.to,
          insert: OM.K.of(rM.text.slice(aM.from - MM, zM).split(ci))
        } : (LM = nO(mM, rM.text, nM - MM, QM)) && (eM.chrome && 13 == PM && LM.toB == LM.from + 2 && rM.text.slice(LM.from, LM.toB) == ci + ci && LM.toB--, iM = {
          from: MM + LM.from,
          to: MM + LM.toA,
          insert: OM.K.of(rM.text.slice(LM.from, LM.toB).split(ci))
        })
      } else SM && (!MM.hasFocus && jM.facet(Xr) || QO(SM, aM)) && (SM = null);
      if (!iM && !SM) return !1;
      if ((eM.mac || eM.android) && iM && iM.from == iM.to && iM.from == aM.head - 1 && /^\. ?$/.test(iM.insert.toString()) && "off" == MM.contentDOM.getAttribute("autocorrect") ? (SM && 2 == iM.insert.length && (SM = OM.l.single(SM.main.anchor - 1, SM.main.head - 1)), iM = {
          from: iM.from,
          to: iM.to,
          insert: OM.K.of([iM.insert.toString().replace(".", " ")])
        }) : jM.doc.lineAt(aM.from).to < aM.to && MM.docView.lineHasWidget(aM.to) && MM.inputState.insertingTextAt > Date.now() - 50 ? iM = {
          from: aM.from,
          to: aM.to,
          insert: jM.toText(MM.inputState.insertingText)
        } : eM.chrome && iM && iM.from == iM.to && iM.from == aM.head && "\n " == iM.insert.toString() && MM.lineWrapping && (SM && (SM = OM.l.single(SM.main.anchor - 1, SM.main.head - 1)), iM = {
          from: aM.from,
          to: aM.to,
          insert: OM.K.of([" "])
        }), iM) return PO(MM, iM, SM, PM);
      if (SM && !QO(SM, aM)) {
        let rM = !1,
          iM = "select";
        return MM.inputState.lastSelectionTime > Date.now() - 50 && ("select" == MM.inputState.lastSelectionOrigin && (rM = !0), iM = MM.inputState.lastSelectionOrigin, "select.pointer" == iM && (SM = Ii(jM.facet(Oi).map((rM => rM(MM))), SM))), MM.dispatch({
          selection: SM,
          scrollIntoView: rM,
          userEvent: iM
        }), !0
      }
      return !1
    }

    function PO(MM, rM, iM) {
      let SM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
      if (eM.ios && MM.inputState.flushIOSKey(rM)) return !0;
      let jM = MM.state.selection.main;
      if (eM.android && (rM.to == jM.to && (rM.from == jM.from || rM.from == jM.from - 1 && " " == MM.state.sliceDoc(rM.from, jM.from)) && 1 == rM.insert.length && 2 == rM.insert.lines && Sr(MM.contentDOM, "Enter", 13) || (rM.from == jM.from - 1 && rM.to == jM.to && 0 == rM.insert.length || 8 == SM && rM.insert.length < rM.to - rM.from && rM.to > jM.head) && Sr(MM.contentDOM, "Backspace", 8) || rM.from == jM.from && rM.to == jM.to + 1 && 0 == rM.insert.length && Sr(MM.contentDOM, "Delete", 46))) return !0;
      let aM, PM = rM.insert.toString();
      MM.inputState.composing >= 0 && MM.inputState.composing++;
      let nM = () => aM || (aM = function(MM, rM, iM) {
        let SM, jM = MM.state,
          aM = jM.selection.main,
          PM = -1;
        if (rM.from == rM.to && rM.from < aM.from || rM.from > aM.to) {
          let iM = rM.from < aM.from ? -1 : 1,
            OM = iM < 0 ? aM.from : aM.to,
            SM = Xi(jM.facet(Oi).map((rM => rM(MM))), OM, iM);
          rM.from == SM && (PM = SM)
        }
        if (PM > -1) SM = {
          changes: rM,
          selection: OM.l.cursor(rM.from + rM.insert.length, -1)
        };
        else if (rM.from >= aM.from && rM.to <= aM.to && rM.to - rM.from >= (aM.to - aM.from) / 3 && (!iM || iM.main.empty && iM.main.from == rM.from + rM.insert.length) && MM.inputState.composing < 0) {
          let iM = aM.from < rM.from ? jM.sliceDoc(aM.from, rM.from) : "",
            OM = aM.to > rM.to ? jM.sliceDoc(rM.to, aM.to) : "";
          SM = jM.replaceSelection(MM.state.toText(iM + rM.insert.sliceString(0, void 0, MM.state.lineBreak) + OM))
        } else {
          let PM = jM.changes(rM),
            nM = iM && iM.main.to <= PM.newLength ? iM.main : void 0;
          if (jM.selection.Ld.length > 1 && (MM.inputState.composing >= 0 || MM.inputState.compositionPendingChange) && rM.to <= aM.to + 10 && rM.to >= aM.to - 10) {
            let QM, zM = MM.state.sliceDoc(rM.from, rM.to),
              LM = iM && Ni(MM, iM.main.head);
            if (LM) {
              let MM = rM.insert.length - (rM.to - rM.from);
              QM = {
                from: LM.from,
                to: LM.to - MM
              }
            } else QM = MM.state.doc.lineAt(aM.head);
            let mM = aM.to - rM.to;
            SM = jM.changeByRange((iM => {
              if (iM.from == aM.from && iM.to == aM.to) return {
                changes: PM,
                range: nM || iM.map(PM)
              };
              let SM = iM.to - mM,
                LM = SM - zM.length;
              if (MM.state.sliceDoc(LM, SM) != zM || SM >= QM.from && LM <= QM.to) return {
                range: iM
              };
              let HM = jM.changes({
                  from: LM,
                  to: SM,
                  insert: rM.insert
                }),
                hM = iM.to - aM.to;
              return {
                changes: HM,
                range: nM ? OM.l.range(Math.max(0, nM.anchor + hM), Math.max(0, nM.head + hM)) : iM.map(HM)
              }
            }))
          } else SM = {
            changes: PM,
            selection: nM && jM.selection.replaceRange(nM)
          }
        }
        let nM = "input.type";
        (MM.composing || MM.inputState.compositionPendingChange && MM.inputState.compositionEndedAt > Date.now() - 50) && (MM.inputState.compositionPendingChange = !1, nM += ".compose", MM.inputState.compositionFirstChange && (nM += ".start", MM.inputState.compositionFirstChange = !1));
        return jM.update(SM, {
          userEvent: nM,
          scrollIntoView: !0
        })
      }(MM, rM, iM));
      return MM.state.facet(kr).some((iM => iM(MM, rM.from, rM.to, PM, nM))) || MM.dispatch(nM()), !0
    }

    function nO(MM, rM, iM, OM) {
      let SM = Math.min(MM.length, rM.length),
        jM = 0;
      for (; jM < SM && MM.charCodeAt(jM) == rM.charCodeAt(jM);) jM++;
      if (jM == SM && MM.length == rM.length) return null;
      let aM = MM.length,
        PM = rM.length;
      for (; aM > 0 && PM > 0 && MM.charCodeAt(aM - 1) == rM.charCodeAt(PM - 1);) aM--, PM--;
      if ("end" == OM) {
        iM -= aM + Math.max(0, jM - Math.min(aM, PM)) - jM
      }
      if (aM < jM && MM.length < rM.length) {
        jM -= iM <= jM && iM >= aM ? jM - iM : 0, PM = jM + (PM - aM), aM = jM
      } else if (PM < jM) {
        jM -= iM <= jM && iM >= PM ? jM - iM : 0, aM = jM + (aM - PM), PM = jM
      }
      return {
        from: jM,
        toA: aM,
        toB: PM
      }
    }

    function QO(MM, rM) {
      return rM.head == MM.main.head && rM.anchor == MM.main.anchor
    }
    class zO {
      setSelectionOrigin(MM) {
        this.lastSelectionOrigin = MM, this.lastSelectionTime = Date.now()
      }
      constructor(MM) {
        this.view = MM, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = MM.hasFocus, eM.safari && MM.contentDOM.addEventListener("input", (() => null)), eM.gecko && function(MM) {
          kO.has(MM) || (kO.add(MM), MM.addEventListener("copy", (() => {})), MM.addEventListener("cut", (() => {})))
        }(MM.contentDOM.ownerDocument)
      }
      handleEvent(MM) {
        (function(MM, rM) {
          if (!rM.bubbles) return !0;
          if (rM.defaultPrevented) return !1;
          for (let iM, OM = rM.target; OM != MM.contentDOM; OM = OM.parentNode)
            if (!OM || 11 == OM.nodeType || (iM = mi.get(OM)) && iM.isWidget() && !iM.isHidden && iM.widget.ignoreEvent(rM)) return !1;
          return !0
        })(this.view, MM) && !this.ignoreDuringComposition(MM) && ("keydown" == MM.type && this.keydown(MM) || (0 != this.view.updateState ? Promise.resolve().then((() => this.runHandlers(MM.type, MM))) : this.runHandlers(MM.type, MM)))
      }
      runHandlers(MM, rM) {
        let iM = this.handlers[MM];
        if (iM) {
          for (let MM of iM.observers) MM(this.view, rM);
          for (let MM of iM.handlers) {
            if (rM.defaultPrevented) break;
            if (MM(this.view, rM)) {
              rM.preventDefault();
              break
            }
          }
        }
      }
      ensureHandlers(MM) {
        let rM = mO(MM),
          iM = this.handlers,
          OM = this.view.contentDOM;
        for (let SM in rM)
          if ("scroll" != SM) {
            let MM = !rM[SM].handlers.length,
              jM = iM[SM];
            jM && MM != !jM.handlers.length && (OM.removeEventListener(SM, this.handleEvent), jM = null), jM || OM.addEventListener(SM, this.handleEvent, {
              passive: MM
            })
          } for (let SM in iM) "scroll" == SM || rM[SM] || OM.removeEventListener(SM, this.handleEvent);
        this.handlers = rM
      }
      keydown(MM) {
        if (this.lastKeyCode = MM.keyCode, this.lastKeyTime = Date.now(), 9 == MM.keyCode && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return !0;
        if (this.tabFocusMode > 0 && 27 != MM.keyCode && JO.indexOf(MM.keyCode) < 0 && (this.tabFocusMode = -1), eM.android && eM.chrome && !MM.synthetic && (13 == MM.keyCode || 8 == MM.keyCode)) return this.view.observer.delayAndroidKey(MM.key, MM.keyCode), !0;
        let rM;
        return !eM.ios || MM.synthetic || MM.altKey || MM.metaKey || MM.shiftKey || !((rM = HO.find((rM => rM.keyCode == MM.keyCode))) && !MM.ctrlKey || hO.indexOf(MM.key) > -1 && MM.ctrlKey) ? (229 != MM.keyCode && this.view.observer.forceFlush(), !1) : (this.pendingIOSKey = rM || MM, setTimeout((() => this.flushIOSKey()), 250), !0)
      }
      flushIOSKey(MM) {
        let rM = this.pendingIOSKey;
        return !!rM && (!("Enter" == rM.key && MM && MM.from < MM.to && /^\S+$/.test(MM.insert.toString())) && (this.pendingIOSKey = void 0, Sr(this.view.contentDOM, rM.key, rM.keyCode, rM instanceof KeyboardEvent ? rM : void 0)))
      }
      ignoreDuringComposition(MM) {
        return !(!/^key/.test(MM.type) || MM.synthetic) && (this.composing > 0 || !!(eM.safari && !eM.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = !1, !0))
      }
      startMouseSelection(MM) {
        this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = MM
      }
      update(MM) {
        this.view.observer.update(MM), this.mouseSelection && this.mouseSelection.update(MM), this.draggedContent && MM.docChanged && (this.draggedContent = this.draggedContent.map(MM.changes)), MM.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0)
      }
      destroy() {
        this.mouseSelection && this.mouseSelection.destroy()
      }
    }

    function LO(MM, rM) {
      return (iM, OM) => {
        try {
          return rM.call(MM, OM, iM)
        } catch (SM) {
          Br(iM.state, SM)
        }
      }
    }

    function mO(MM) {
      let rM = Object.create(null);

      function iM(MM) {
        return rM[MM] || (rM[MM] = {
          observers: [],
          handlers: []
        })
      }
      for (let OM of MM) {
        let MM = OM.spec,
          rM = MM && MM.plugin.domEventHandlers,
          SM = MM && MM.plugin.domEventObservers;
        if (rM)
          for (let jM in rM) {
            let MM = rM[jM];
            MM && iM(jM).handlers.push(LO(OM.value, MM))
          }
        if (SM)
          for (let jM in SM) {
            let MM = SM[jM];
            MM && iM(jM).observers.push(LO(OM.value, MM))
          }
      }
      for (let OM in lO) iM(OM).handlers.push(lO[OM]);
      for (let OM in EO) iM(OM).observers.push(EO[OM]);
      return rM
    }
    const HO = [{
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
      hO = "dthko",
      JO = [16, 17, 18, 20, 91, 92, 224, 225];

    function dO(MM) {
      return .7 * Math.max(0, MM) + 8
    }
    class yO {
      constructor(MM, rM, iM, SM) {
        this.view = MM, this.startEvent = rM, this.style = iM, this.mustSelect = SM, this.scrollSpeed = {
          x: 0,
          y: 0
        }, this.scrolling = -1, this.lastEvent = rM, this.scrollParents = VM(MM.contentDOM), this.atoms = MM.state.facet(Oi).map((rM => rM(MM)));
        let jM = MM.contentDOM.ownerDocument;
        jM.addEventListener("mousemove", this.move = this.move.bind(this)), jM.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = rM.shiftKey, this.multiple = MM.state.facet(OM.p.allowMultipleSelections) && function(MM, rM) {
          let iM = MM.state.facet(Rr);
          return iM.length ? iM[0](rM) : eM.mac ? rM.metaKey : rM.ctrlKey
        }(MM, rM), this.dragging = !(! function(MM, rM) {
          let {
            main: iM
          } = MM.state.selection;
          if (iM.empty) return !1;
          let OM = YM(MM.root);
          if (!OM || 0 == OM.rangeCount) return !0;
          let SM = OM.getRangeAt(0).getClientRects();
          for (let jM = 0; jM < SM.length; jM++) {
            let MM = SM[jM];
            if (MM.left <= rM.clientX && MM.right >= rM.clientX && MM.top <= rM.clientY && MM.bottom >= rM.clientY) return !0
          }
          return !1
        }(MM, rM) || 1 != uO(rM)) && null
      }
      start(MM) {
        !1 === this.dragging && this.select(MM)
      }
      move(MM) {
        if (0 == MM.buttons) return this.destroy();
        if (this.dragging || null == this.dragging && (rM = this.startEvent, iM = MM, Math.max(Math.abs(rM.clientX - iM.clientX), Math.abs(rM.clientY - iM.clientY)) < 10)) return;
        var rM, iM;
        this.select(this.lastEvent = MM);
        let OM = 0,
          SM = 0,
          jM = 0,
          aM = 0,
          PM = this.view.win.innerWidth,
          nM = this.view.win.innerHeight;
        this.scrollParents.x && ({
          left: jM,
          right: PM
        } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({
          top: aM,
          bottom: nM
        } = this.scrollParents.y.getBoundingClientRect());
        let QM = Pi(this.view);
        MM.clientX - QM.left <= jM + 6 ? OM = -dO(jM - MM.clientX) : MM.clientX + QM.right >= PM - 6 && (OM = dO(MM.clientX - PM)), MM.clientY - QM.top <= aM + 6 ? SM = -dO(aM - MM.clientY) : MM.clientY + QM.bottom >= nM - 6 && (SM = dO(MM.clientY - nM)), this.setScrollSpeed(OM, SM)
      }
      up(MM) {
        null == this.dragging && this.select(this.lastEvent), this.dragging || MM.preventDefault(), this.destroy()
      }
      destroy() {
        this.setScrollSpeed(0, 0);
        let MM = this.view.contentDOM.ownerDocument;
        MM.removeEventListener("mousemove", this.move), MM.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null
      }
      setScrollSpeed(MM, rM) {
        this.scrollSpeed = {
          x: MM,
          y: rM
        }, MM || rM ? this.scrolling < 0 && (this.scrolling = setInterval((() => this.scroll()), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1)
      }
      scroll() {
        let {
          x: MM,
          y: rM
        } = this.scrollSpeed;
        MM && this.scrollParents.x && (this.scrollParents.x.scrollLeft += MM, MM = 0), rM && this.scrollParents.y && (this.scrollParents.y.scrollTop += rM, rM = 0), (MM || rM) && this.view.win.scrollBy(MM, rM), !1 === this.dragging && this.select(this.lastEvent)
      }
      select(MM) {
        let {
          view: rM
        } = this, iM = Ii(this.atoms, this.style.get(MM, this.extend, this.multiple));
        !this.mustSelect && iM.eq(rM.state.selection, !1 === this.dragging) || this.view.dispatch({
          selection: iM,
          userEvent: "select.pointer"
        }), this.mustSelect = !1
      }
      update(MM) {
        MM.transactions.some((MM => MM.isUserEvent("input.type"))) ? this.destroy() : this.style.update(MM) && setTimeout((() => this.select(this.lastEvent)), 20)
      }
    }
    const lO = Object.create(null),
      EO = Object.create(null),
      UO = eM.ie && eM.ie_version < 15 || eM.ios && eM.webkit_version < 604;

    function GO(MM, rM, iM) {
      for (let OM of MM.facet(rM)) iM = OM(iM, MM);
      return iM
    }

    function CO(MM, rM) {
      rM = GO(MM.state, or, rM);
      let iM, {
          state: SM
        } = MM,
        jM = 1,
        aM = SM.toText(rM),
        PM = aM.lines == SM.selection.Ld.length;
      if (null != pO && SM.selection.Ld.every((MM => MM.empty)) && pO == aM.toString()) {
        let MM = -1;
        iM = SM.changeByRange((iM => {
          let nM = SM.doc.lineAt(iM.from);
          if (nM.from == MM) return {
            range: iM
          };
          MM = nM.from;
          let QM = SM.toText((PM ? aM.line(jM++).text : rM) + SM.lineBreak);
          return {
            changes: {
              from: nM.from,
              insert: QM
            },
            range: OM.l.cursor(iM.from + QM.length)
          }
        }))
      } else iM = PM ? SM.changeByRange((MM => {
        let rM = aM.line(jM++);
        return {
          changes: {
            from: MM.from,
            to: MM.to,
            insert: rM.text
          },
          range: OM.l.cursor(MM.from + rM.length)
        }
      })) : SM.replaceSelection(aM);
      MM.dispatch(iM, {
        userEvent: "input.paste",
        scrollIntoView: !0
      })
    }

    function eO(MM, rM, iM, SM) {
      if (1 == SM) return OM.l.cursor(rM, iM);
      if (2 == SM) return function(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          SM = MM.charCategorizer(rM),
          jM = MM.doc.lineAt(rM),
          aM = rM - jM.from;
        if (0 == jM.length) return OM.l.cursor(rM);
        0 == aM ? iM = 1 : aM == jM.length && (iM = -1);
        let PM = aM,
          nM = aM;
        iM < 0 ? PM = (0, OM.$)(jM.text, aM, !1) : nM = (0, OM.$)(jM.text, aM);
        let QM = SM(jM.text.slice(PM, nM));
        for (; PM > 0;) {
          let MM = (0, OM.$)(jM.text, PM, !1);
          if (SM(jM.text.slice(MM, PM)) != QM) break;
          PM = MM
        }
        for (; nM < jM.length;) {
          let MM = (0, OM.$)(jM.text, nM);
          if (SM(jM.text.slice(nM, MM)) != QM) break;
          nM = MM
        }
        return OM.l.range(PM + jM.from, nM + jM.from)
      }(MM.state, rM, iM);
      {
        let SM = MM.docView.lineAt(rM, iM),
          jM = MM.state.doc.lineAt(SM ? SM.posAtEnd : rM),
          aM = SM ? SM.posAtStart : jM.from,
          PM = SM ? SM.posAtEnd : jM.to;
        return PM < MM.state.doc.length && PM == jM.to && PM++, OM.l.range(aM, PM)
      }
    }
    EO.scroll = MM => {
      MM.inputState.lastScrollTop = MM.scrollDOM.scrollTop, MM.inputState.lastScrollLeft = MM.scrollDOM.scrollLeft
    }, EO.wheel = EO.mousewheel = MM => {
      MM.inputState.lastWheelEvent = Date.now()
    }, lO.keydown = (MM, rM) => (MM.inputState.setSelectionOrigin("select"), 27 == rM.keyCode && 0 != MM.inputState.tabFocusMode && (MM.inputState.tabFocusMode = Date.now() + 2e3), !1), EO.touchstart = (MM, rM) => {
      let iM = MM.inputState,
        OM = rM.targetTouches[0];
      iM.lastTouchTime = Date.now(), OM && (iM.lastTouchX = OM.clientX, iM.lastTouchY = OM.clientY), iM.setSelectionOrigin("select.pointer")
    }, EO.touchmove = MM => {
      MM.inputState.setSelectionOrigin("select.pointer")
    }, lO.mousedown = (MM, rM) => {
      if (MM.observer.flush(), MM.inputState.lastTouchTime > Date.now() - 2e3) return !1;
      let iM = null;
      for (let OM of MM.state.facet(Wr))
        if (iM = OM(MM, rM), iM) break;
      if (iM || 0 != rM.button || (iM = function(MM, rM) {
          let iM = MM.posAndSideAtCoords({
              x: rM.clientX,
              y: rM.clientY
            }, !1),
            SM = uO(rM),
            jM = MM.state.selection;
          return {
            update(MM) {
              MM.docChanged && (iM.pos = MM.changes.mapPos(iM.pos), jM = jM.map(MM.changes))
            },
            get(rM, aM, PM) {
              let nM, QM = MM.posAndSideAtCoords({
                  x: rM.clientX,
                  y: rM.clientY
                }, !1),
                zM = eO(MM, QM.pos, QM.assoc, SM);
              if (iM.pos != QM.pos && !aM) {
                let rM = eO(MM, iM.pos, iM.assoc, SM),
                  jM = Math.min(rM.from, zM.from),
                  aM = Math.max(rM.to, zM.to);
                zM = jM < zM.from ? OM.l.range(jM, aM, zM.assoc) : OM.l.range(aM, jM, zM.assoc)
              }
              return aM ? jM.replaceRange(jM.main.extend(zM.from, zM.to, zM.assoc)) : PM && 1 == SM && jM.Ld.length > 1 && (nM = function(MM, rM) {
                for (let iM = 0; iM < MM.Ld.length; iM++) {
                  let {
                    from: SM,
                    to: jM
                  } = MM.Ld[iM];
                  if (SM <= rM && jM >= rM) return OM.l.create(MM.Ld.slice(0, iM).concat(MM.Ld.slice(iM + 1)), MM.mainIndex == iM ? 0 : MM.mainIndex - (MM.mainIndex > iM ? 1 : 0))
                }
                return null
              }(jM, QM.pos)) ? nM : PM ? jM.addRange(zM) : OM.l.create([zM])
            }
          }
        }(MM, rM)), iM) {
        let OM = !MM.hasFocus;
        MM.inputState.startMouseSelection(new yO(MM, rM, iM, OM)), OM && MM.observer.ignore((() => {
          ir(MM.contentDOM);
          let rM = MM.root.activeElement;
          rM && !rM.contains(MM.contentDOM) && rM.blur()
        }));
        let SM = MM.inputState.mouseSelection;
        if (SM) return SM.start(rM), !1 === SM.dragging
      } else MM.inputState.setSelectionOrigin("select.pointer");
      return !1
    };
    const bO = eM.ie && eM.ie_version <= 11;
    let wO = null,
      tO = 0,
      gO = 0;

    function uO(MM) {
      if (!bO) return MM.detail;
      let rM = wO,
        iM = gO;
      return wO = MM, gO = Date.now(), tO = !rM || iM > Date.now() - 400 && Math.abs(rM.clientX - MM.clientX) < 2 && Math.abs(rM.clientY - MM.clientY) < 2 ? (tO + 1) % 3 : 1
    }

    function RO(MM, rM, iM, OM) {
      if (!(iM = GO(MM.state, or, iM))) return;
      let SM = MM.posAtCoords({
          x: rM.clientX,
          y: rM.clientY
        }, !1),
        {
          draggedContent: jM
        } = MM.inputState,
        aM = OM && jM && function(MM, rM) {
          let iM = MM.state.facet(pr);
          return iM.length ? iM[0](rM) : eM.mac ? !rM.altKey : !rM.ctrlKey
        }(MM, rM) ? {
          from: jM.from,
          to: jM.to
        } : null,
        PM = {
          from: SM,
          insert: iM
        },
        nM = MM.state.changes(aM ? [aM, PM] : PM);
      MM.focus(), MM.dispatch({
        changes: nM,
        selection: {
          anchor: nM.mapPos(SM, -1),
          head: nM.mapPos(SM, 1)
        },
        userEvent: aM ? "move.drop" : "input.drop"
      }), MM.inputState.draggedContent = null
    }
    lO.dragstart = (MM, rM) => {
      let {
        selection: {
          main: iM
        }
      } = MM.state;
      if (rM.target.draggable) {
        let SM = MM.docView.tile.nearest(rM.target);
        if (SM && SM.isWidget()) {
          let MM = SM.posAtStart,
            rM = MM + SM.length;
          (MM >= iM.to || rM <= iM.from) && (iM = OM.l.range(MM, rM))
        }
      }
      let {
        inputState: SM
      } = MM;
      return SM.mouseSelection && (SM.mouseSelection.dragging = !0), SM.draggedContent = iM, rM.dataTransfer && (rM.dataTransfer.setData("Text", GO(MM.state, fr, MM.state.sliceDoc(iM.from, iM.to))), rM.dataTransfer.effectAllowed = "copyMove"), !1
    }, lO.dragend = MM => (MM.inputState.draggedContent = null, !1), lO.drop = (MM, rM) => {
      if (!rM.dataTransfer) return !1;
      if (MM.state.readOnly) return !0;
      let iM = rM.dataTransfer.files;
      if (iM && iM.length) {
        let OM = Array(iM.length),
          SM = 0,
          jM = () => {
            ++SM == iM.length && RO(MM, rM, OM.filter((MM => null != MM)).join(MM.state.lineBreak), !1)
          };
        for (let MM = 0; MM < iM.length; MM++) {
          let rM = new FileReader;
          rM.onerror = jM, rM.onload = () => {
            /[\x00-\x08\x0e-\x1f]{2}/.test(rM.result) || (OM[MM] = rM.result), jM()
          }, rM.readAsText(iM[MM])
        }
        return !0
      } {
        let iM = rM.dataTransfer.getData("Text");
        if (iM) return RO(MM, rM, iM, !0), !0
      }
      return !1
    }, lO.paste = (MM, rM) => {
      if (MM.state.readOnly) return !0;
      MM.observer.flush();
      let iM = UO ? null : rM.clipboardData;
      return iM ? (CO(MM, iM.getData("text/plain") || iM.getData("text/uri-list")), !0) : (function(MM) {
        let rM = MM.dom.parentNode;
        if (!rM) return;
        let iM = rM.appendChild(document.createElement("textarea"));
        iM.style.cssText = "position: fixed; left: -10000px; top: 10px", iM.focus(), setTimeout((() => {
          MM.focus(), iM.remove(), CO(MM, iM.value)
        }), 50)
      }(MM), !1)
    };
    let pO = null;
    lO.copy = lO.cut = (MM, rM) => {
      if (!AM(MM.contentDOM, MM.observer.selectionRange)) return !1;
      let {
        text: iM,
        Ld: OM,
        linewise: SM
      } = function(MM) {
        let rM = [],
          iM = [],
          OM = !1;
        for (let SM of MM.selection.Ld) SM.empty || (rM.push(MM.sliceDoc(SM.from, SM.to)), iM.push(SM));
        if (!rM.length) {
          let SM = -1;
          for (let {
              from: OM
            }
            of MM.selection.Ld) {
            let jM = MM.doc.lineAt(OM);
            jM.number > SM && (rM.push(jM.text), iM.push({
              from: jM.from,
              to: Math.min(MM.doc.length, jM.to + 1)
            })), SM = jM.number
          }
          OM = !0
        }
        return {
          text: GO(MM, fr, rM.join(MM.lineBreak)),
          Ld: iM,
          linewise: OM
        }
      }(MM.state);
      if (!iM && !SM) return !1;
      pO = SM ? iM : null, "cut" != rM.type || MM.state.readOnly || MM.dispatch({
        changes: OM,
        scrollIntoView: !0,
        userEvent: "delete.cut"
      });
      let jM = UO ? null : rM.clipboardData;
      return jM ? (jM.clearData(), jM.setData("text/plain", iM), !0) : (function(MM, rM) {
        let iM = MM.dom.parentNode;
        if (!iM) return;
        let OM = iM.appendChild(document.createElement("textarea"));
        OM.style.cssText = "position: fixed; left: -10000px; top: 10px", OM.value = rM, OM.focus(), OM.selectionEnd = rM.length, OM.selectionStart = 0, setTimeout((() => {
          OM.remove(), MM.focus()
        }), 50)
      }(MM, iM), !1)
    };
    const WO = OM.e.define();

    function sO(MM, rM) {
      let iM = [];
      for (let OM of MM.facet(Zr)) {
        let SM = OM(MM, rM);
        SM && iM.push(SM)
      }
      return iM.length ? MM.update({
        effects: iM,
        annotations: WO.of(!0)
      }) : null
    }

    function DO(MM) {
      setTimeout((() => {
        let rM = MM.hasFocus;
        if (rM != MM.inputState.notifiedFocused) {
          let iM = sO(MM.state, rM);
          iM ? MM.dispatch(iM) : MM.update([])
        }
      }), 10)
    }
    EO.focus = MM => {
      MM.inputState.lastFocusTime = Date.now(), MM.scrollDOM.scrollTop || !MM.inputState.lastScrollTop && !MM.inputState.lastScrollLeft || (MM.scrollDOM.scrollTop = MM.inputState.lastScrollTop, MM.scrollDOM.scrollLeft = MM.inputState.lastScrollLeft), DO(MM)
    }, EO.blur = MM => {
      MM.observer.clearSelectionRange(), DO(MM)
    }, EO.compositionstart = EO.compositionupdate = MM => {
      MM.observer.editContext || (null == MM.inputState.compositionFirstChange && (MM.inputState.compositionFirstChange = !0), MM.inputState.composing < 0 && (MM.inputState.composing = 0))
    }, EO.compositionend = MM => {
      MM.observer.editContext || (MM.inputState.composing = -1, MM.inputState.compositionEndedAt = Date.now(), MM.inputState.compositionPendingKey = !0, MM.inputState.compositionPendingChange = MM.observer.pendingRecords().length > 0, MM.inputState.compositionFirstChange = null, eM.chrome && eM.android ? MM.observer.flushSoon() : MM.inputState.compositionPendingChange ? Promise.resolve().then((() => MM.observer.flush())) : setTimeout((() => {
        MM.inputState.composing < 0 && MM.docView.hasComposition && MM.update([])
      }), 50))
    }, EO.contextmenu = MM => {
      MM.inputState.lastContextMenu = Date.now()
    }, lO.beforeinput = (MM, rM) => {
      var iM, OM;
      if ("insertText" != rM.inputType && "insertCompositionText" != rM.inputType || (MM.inputState.insertingText = rM.data, MM.inputState.insertingTextAt = Date.now()), "insertReplacementText" == rM.inputType && MM.observer.editContext) {
        let OM = null === (iM = rM.dataTransfer) || void 0 === iM ? void 0 : iM.getData("text/plain"),
          SM = rM.getTargetRanges();
        if (OM && SM.length) {
          let rM = SM[0],
            iM = MM.posAtDOM(rM.startContainer, rM.startOffset),
            jM = MM.posAtDOM(rM.endContainer, rM.endOffset);
          return PO(MM, {
            from: iM,
            to: jM,
            insert: MM.state.toText(OM)
          }, null), !0
        }
      }
      let SM;
      if (eM.chrome && eM.android && (SM = HO.find((MM => MM.inputType == rM.inputType))) && (MM.observer.delayAndroidKey(SM.key, SM.keyCode), "Backspace" == SM.key || "Delete" == SM.key)) {
        let rM = (null === (OM = window.visualViewport) || void 0 === OM ? void 0 : OM.height) || 0;
        setTimeout((() => {
          var iM;
          ((null === (iM = window.visualViewport) || void 0 === iM ? void 0 : iM.height) || 0) > rM + 10 && MM.hasFocus && (MM.contentDOM.blur(), MM.focus())
        }), 100)
      }
      return eM.ios && "deleteContentForward" == rM.inputType && MM.observer.flushSoon(), eM.safari && "insertText" == rM.inputType && MM.inputState.composing >= 0 && setTimeout((() => EO.compositionend(MM, rM)), 20), !1
    };
    const kO = new Set;
    const ZO = ["pre-wrap", "normal", "pre-line", "break-spaces"];
    let oO = !1;

    function fO() {
      oO = !1
    }
    class YO {
      constructor(MM) {
        this.lineWrapping = MM, this.doc = OM.K.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30
      }
      heightForGap(MM, rM) {
        let iM = this.doc.lineAt(rM).number - this.doc.lineAt(MM).number + 1;
        return this.lineWrapping && (iM += Math.max(0, Math.ceil((rM - MM - iM * this.lineLength * .5) / this.lineLength))), this.lineHeight * iM
      }
      heightForLine(MM) {
        if (!this.lineWrapping) return this.lineHeight;
        return (1 + Math.max(0, Math.ceil((MM - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight
      }
      setDoc(MM) {
        return this.doc = MM, this
      }
      mustRefreshForWrapping(MM) {
        return ZO.indexOf(MM) > -1 != this.lineWrapping
      }
      mustRefreshForHeights(MM) {
        let rM = !1;
        for (let iM = 0; iM < MM.length; iM++) {
          let OM = MM[iM];
          OM < 0 ? iM++ : this.heightSamples[Math.floor(10 * OM)] || (rM = !0, this.heightSamples[Math.floor(10 * OM)] = !0)
        }
        return rM
      }
      refresh(MM, rM, iM, OM, SM, jM) {
        let aM = ZO.indexOf(MM) > -1,
          PM = Math.abs(rM - this.lineHeight) > .3 || this.lineWrapping != aM || Math.abs(iM - this.charWidth) > .1;
        if (this.lineWrapping = aM, this.lineHeight = rM, this.charWidth = iM, this.textHeight = OM, this.lineLength = SM, PM) {
          this.heightSamples = {};
          for (let MM = 0; MM < jM.length; MM++) {
            let rM = jM[MM];
            rM < 0 ? MM++ : this.heightSamples[Math.floor(10 * rM)] = !0
          }
        }
        return PM
      }
    }
    class NO {
      constructor(MM, rM) {
        this.from = MM, this.heights = rM, this.index = 0
      }
      get more() {
        return this.index < this.heights.length
      }
    }
    class AO {
      constructor(MM, rM, iM, OM, SM) {
        this.from = MM, this.length = rM, this.top = iM, this.height = OM, this._content = SM
      }
      get type() {
        return "number" == typeof this._content ? pM.Text : Array.isArray(this._content) ? this._content : this._content.type
      }
      get to() {
        return this.from + this.length
      }
      get bottom() {
        return this.top + this.height
      }
      get widget() {
        return this._content instanceof kM ? this._content.widget : null
      }
      get widgetLineBreaks() {
        return "number" == typeof this._content ? this._content : 0
      }
      join(MM) {
        let rM = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(MM._content) ? MM._content : [MM]);
        return new AO(this.from, this.length + MM.length, this.top, this.height + MM.height, rM)
      }
    }
    var xO = function(MM) {
      return MM[MM.ByPos = 0] = "ByPos", MM[MM.ByHeight = 1] = "ByHeight", MM[MM.ByPosNoHeight = 2] = "ByPosNoHeight", MM
    }(xO || (xO = {}));
    const vO = .001;
    class FO {
      constructor(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.length = MM, this.height = rM, this.flags = iM
      }
      get outdated() {
        return (2 & this.flags) > 0
      }
      set outdated(MM) {
        this.flags = (MM ? 2 : 0) | -3 & this.flags
      }
      setHeight(MM) {
        this.height != MM && (Math.abs(this.height - MM) > vO && (oO = !0), this.height = MM)
      }
      replace(MM, rM, iM) {
        return FO.of(iM)
      }
      decomposeLeft(MM, rM) {
        rM.push(this)
      }
      decomposeRight(MM, rM) {
        rM.push(this)
      }
      applyChanges(MM, rM, iM, OM) {
        let SM = this,
          jM = iM.doc;
        for (let aM = OM.length - 1; aM >= 0; aM--) {
          let {
            fromA: PM,
            toA: nM,
            fromB: QM,
            toB: zM
          } = OM[aM], LM = SM.lineAt(PM, xO.ByPosNoHeight, iM.setDoc(rM), 0, 0), mM = LM.to >= nM ? LM : SM.lineAt(nM, xO.ByPosNoHeight, iM, 0, 0);
          for (zM += mM.to - nM, nM = mM.to; aM > 0 && LM.from <= OM[aM - 1].toA;) PM = OM[aM - 1].fromA, QM = OM[aM - 1].fromB, aM--, PM < LM.from && (LM = SM.lineAt(PM, xO.ByPosNoHeight, iM, 0, 0));
          QM += LM.from - PM, PM = LM.from;
          let HM = cO.build(iM.setDoc(jM), MM, QM, zM);
          SM = BO(SM, SM.replace(PM, nM, HM))
        }
        return SM.updateHeight(iM, 0)
      }
      static empty() {
        return new KO(0, 0, 0)
      }
      static of (MM) {
        if (1 == MM.length) return MM[0];
        let rM = 0,
          iM = MM.length,
          OM = 0,
          SM = 0;
        for (;;)
          if (rM == iM)
            if (OM > 2 * SM) {
              let SM = MM[rM - 1];
              SM.break ? MM.splice(--rM, 1, SM.left, null, SM.right) : MM.splice(--rM, 1, SM.left, SM.right), iM += 1 + SM.break, OM -= SM.size
            } else {
              if (!(SM > 2 * OM)) break;
              {
                let rM = MM[iM];
                rM.break ? MM.splice(iM, 1, rM.left, null, rM.right) : MM.splice(iM, 1, rM.left, rM.right), iM += 2 + rM.break, SM -= rM.size
              }
            }
        else if (OM < SM) {
          let iM = MM[rM++];
          iM && (OM += iM.size)
        } else {
          let rM = MM[--iM];
          rM && (SM += rM.size)
        }
        let jM = 0;
        return null == MM[rM - 1] ? (jM = 1, rM--) : null == MM[rM] && (jM = 1, iM++), new TO(FO.of(MM.slice(0, rM)), jM, FO.of(MM.slice(iM)))
      }
    }

    function BO(MM, rM) {
      return MM == rM ? MM : (MM.constructor != rM.constructor && (oO = !0), rM)
    }
    FO.prototype.size = 1;
    const XO = WM.replace({});
    class IO extends FO {
      constructor(MM, rM, iM) {
        super(MM, rM), this.deco = iM, this.spaceAbove = 0
      }
      mainBlock(MM, rM) {
        return new AO(rM, this.length, MM + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0)
      }
      blockAt(MM, rM, iM, OM) {
        return this.spaceAbove && MM < iM + this.spaceAbove ? new AO(OM, 0, iM, this.spaceAbove, XO) : this.mainBlock(iM, OM)
      }
      lineAt(MM, rM, iM, OM, SM) {
        let jM = this.mainBlock(OM, SM);
        return this.spaceAbove ? this.blockAt(0, iM, OM, SM).join(jM) : jM
      }
      forEachLine(MM, rM, iM, OM, SM, jM) {
        MM <= SM + this.length && rM >= SM && jM(this.lineAt(0, xO.ByPos, iM, OM, SM))
      }
      setMeasuredHeight(MM) {
        let rM = MM.heights[MM.index++];
        rM < 0 ? (this.spaceAbove = -rM, rM = MM.heights[MM.index++]) : this.spaceAbove = 0, this.setHeight(rM)
      }
      updateHeight(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          iM = arguments.length > 3 ? arguments[3] : void 0;
        return iM && iM.from <= rM && iM.more && this.setMeasuredHeight(iM), this.outdated = !1, this
      }
      toString() {
        return `block(${this.length})`
      }
    }
    class KO extends IO {
      constructor(MM, rM, iM) {
        super(MM, rM, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = iM
      }
      mainBlock(MM, rM) {
        return new AO(rM, this.length, MM + this.spaceAbove, this.height - this.spaceAbove, this.breaks)
      }
      replace(MM, rM, iM) {
        let OM = iM[0];
        return 1 == iM.length && (OM instanceof KO || OM instanceof qO && 4 & OM.flags) && Math.abs(this.length - OM.length) < 10 ? (OM instanceof qO ? OM = new KO(OM.length, this.height, this.spaceAbove) : OM.height = this.height, this.outdated || (OM.outdated = !1), OM) : FO.of(iM)
      }
      updateHeight(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          OM = arguments.length > 3 ? arguments[3] : void 0;
        return OM && OM.from <= rM && OM.more ? this.setMeasuredHeight(OM) : (iM || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, MM.heightForLine(this.length - this.collapsed)) + this.breaks * MM.lineHeight)), this.outdated = !1, this
      }
      toString() {
        return `line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`
      }
    }
    class qO extends FO {
      constructor(MM) {
        super(MM, 0)
      }
      heightMetrics(MM, rM) {
        let iM, OM = MM.doc.lineAt(rM).number,
          SM = MM.doc.lineAt(rM + this.length).number,
          jM = SM - OM + 1,
          aM = 0;
        if (MM.lineWrapping) {
          let rM = Math.min(this.height, MM.lineHeight * jM);
          iM = rM / jM, this.length > jM + 1 && (aM = (this.height - rM) / (this.length - jM - 1))
        } else iM = this.height / jM;
        return {
          firstLine: OM,
          lastLine: SM,
          perLine: iM,
          perChar: aM
        }
      }
      blockAt(MM, rM, iM, OM) {
        let {
          firstLine: SM,
          lastLine: jM,
          perLine: aM,
          perChar: PM
        } = this.heightMetrics(rM, OM);
        if (rM.lineWrapping) {
          let SM = OM + (MM < rM.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (MM - iM) / this.height)) * this.length)),
            jM = rM.doc.lineAt(SM),
            nM = aM + jM.length * PM,
            QM = Math.max(iM, MM - nM / 2);
          return new AO(jM.from, jM.length, QM, nM, 0)
        } {
          let OM = Math.max(0, Math.min(jM - SM, Math.floor((MM - iM) / aM))),
            {
              from: PM,
              length: nM
            } = rM.doc.line(SM + OM);
          return new AO(PM, nM, iM + aM * OM, aM, 0)
        }
      }
      lineAt(MM, rM, iM, OM, SM) {
        if (rM == xO.ByHeight) return this.blockAt(MM, iM, OM, SM);
        if (rM == xO.ByPosNoHeight) {
          let {
            from: rM,
            to: OM
          } = iM.doc.lineAt(MM);
          return new AO(rM, OM - rM, 0, 0, 0)
        }
        let {
          firstLine: jM,
          perLine: aM,
          perChar: PM
        } = this.heightMetrics(iM, SM), nM = iM.doc.lineAt(MM), QM = aM + nM.length * PM, zM = nM.number - jM, LM = OM + aM * zM + PM * (nM.from - SM - zM);
        return new AO(nM.from, nM.length, Math.max(OM, Math.min(LM, OM + this.height - QM)), QM, 0)
      }
      forEachLine(MM, rM, iM, OM, SM, jM) {
        MM = Math.max(MM, SM), rM = Math.min(rM, SM + this.length);
        let {
          firstLine: aM,
          perLine: PM,
          perChar: nM
        } = this.heightMetrics(iM, SM);
        for (let QM = MM, zM = OM; QM <= rM;) {
          let rM = iM.doc.lineAt(QM);
          if (QM == MM) {
            let iM = rM.number - aM;
            zM += PM * iM + nM * (MM - SM - iM)
          }
          let OM = PM + nM * rM.length;
          jM(new AO(rM.from, rM.length, zM, OM, 0)), zM += OM, QM = rM.to + 1
        }
      }
      replace(MM, rM, iM) {
        let OM = this.length - rM;
        if (OM > 0) {
          let MM = iM[iM.length - 1];
          MM instanceof qO ? iM[iM.length - 1] = new qO(MM.length + OM) : iM.push(null, new qO(OM - 1))
        }
        if (MM > 0) {
          let rM = iM[0];
          rM instanceof qO ? iM[0] = new qO(MM + rM.length) : iM.unshift(new qO(MM - 1), null)
        }
        return FO.of(iM)
      }
      decomposeLeft(MM, rM) {
        rM.push(new qO(MM - 1), null)
      }
      decomposeRight(MM, rM) {
        rM.push(null, new qO(this.length - MM - 1))
      }
      updateHeight(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          OM = arguments.length > 3 ? arguments[3] : void 0,
          SM = rM + this.length;
        if (OM && OM.from <= rM + this.length && OM.more) {
          let iM = [],
            jM = Math.max(rM, OM.from),
            aM = -1;
          for (OM.from > rM && iM.push(new qO(OM.from - rM - 1).updateHeight(MM, rM)); jM <= SM && OM.more;) {
            let rM = MM.doc.lineAt(jM).length;
            iM.length && iM.push(null);
            let SM = OM.heights[OM.index++],
              PM = 0;
            SM < 0 && (PM = -SM, SM = OM.heights[OM.index++]), -1 == aM ? aM = SM : Math.abs(SM - aM) >= vO && (aM = -2);
            let nM = new KO(rM, SM, PM);
            nM.outdated = !1, iM.push(nM), jM += rM + 1
          }
          jM <= SM && iM.push(null, new qO(SM - jM).updateHeight(MM, jM));
          let PM = FO.of(iM);
          return (aM < 0 || Math.abs(PM.height - this.height) >= vO || Math.abs(aM - this.heightMetrics(MM, rM).perLine) >= vO) && (oO = !0), BO(this, PM)
        }
        return (iM || this.outdated) && (this.setHeight(MM.heightForGap(rM, rM + this.length)), this.outdated = !1), this
      }
      toString() {
        return `gap(${this.length})`
      }
    }
    class TO extends FO {
      constructor(MM, rM, iM) {
        super(MM.length + rM + iM.length, MM.height + iM.height, rM | (MM.outdated || iM.outdated ? 2 : 0)), this.left = MM, this.right = iM, this.size = MM.size + iM.size
      }
      get break() {
        return 1 & this.flags
      }
      blockAt(MM, rM, iM, OM) {
        let SM = iM + this.left.height;
        return MM < SM ? this.left.blockAt(MM, rM, iM, OM) : this.right.blockAt(MM, rM, SM, OM + this.left.length + this.break)
      }
      lineAt(MM, rM, iM, OM, SM) {
        let jM = OM + this.left.height,
          aM = SM + this.left.length + this.break,
          PM = rM == xO.ByHeight ? MM < jM : MM < aM,
          nM = PM ? this.left.lineAt(MM, rM, iM, OM, SM) : this.right.lineAt(MM, rM, iM, jM, aM);
        if (this.break || (PM ? nM.to < aM : nM.from > aM)) return nM;
        let QM = rM == xO.ByPosNoHeight ? xO.ByPosNoHeight : xO.ByPos;
        return PM ? nM.join(this.right.lineAt(aM, QM, iM, jM, aM)) : this.left.lineAt(aM, QM, iM, OM, SM).join(nM)
      }
      forEachLine(MM, rM, iM, OM, SM, jM) {
        let aM = OM + this.left.height,
          PM = SM + this.left.length + this.break;
        if (this.break) MM < PM && this.left.forEachLine(MM, rM, iM, OM, SM, jM), rM >= PM && this.right.forEachLine(MM, rM, iM, aM, PM, jM);
        else {
          let nM = this.lineAt(PM, xO.ByPos, iM, OM, SM);
          MM < nM.from && this.left.forEachLine(MM, nM.from - 1, iM, OM, SM, jM), nM.to >= MM && nM.from <= rM && jM(nM), rM > nM.to && this.right.forEachLine(nM.to + 1, rM, iM, aM, PM, jM)
        }
      }
      replace(MM, rM, iM) {
        let OM = this.left.length + this.break;
        if (rM < OM) return this.balanced(this.left.replace(MM, rM, iM), this.right);
        if (MM > this.left.length) return this.balanced(this.left, this.right.replace(MM - OM, rM - OM, iM));
        let SM = [];
        MM > 0 && this.decomposeLeft(MM, SM);
        let jM = SM.length;
        for (let aM of iM) SM.push(aM);
        if (MM > 0 && VO(SM, jM - 1), rM < this.length) {
          let MM = SM.length;
          this.decomposeRight(rM, SM), VO(SM, MM)
        }
        return FO.of(SM)
      }
      decomposeLeft(MM, rM) {
        let iM = this.left.length;
        if (MM <= iM) return this.left.decomposeLeft(MM, rM);
        rM.push(this.left), this.break && (iM++, MM >= iM && rM.push(null)), MM > iM && this.right.decomposeLeft(MM - iM, rM)
      }
      decomposeRight(MM, rM) {
        let iM = this.left.length,
          OM = iM + this.break;
        if (MM >= OM) return this.right.decomposeRight(MM - OM, rM);
        MM < iM && this.left.decomposeRight(MM, rM), this.break && MM < OM && rM.push(null), rM.push(this.right)
      }
      balanced(MM, rM) {
        return MM.size > 2 * rM.size || rM.size > 2 * MM.size ? FO.of(this.break ? [MM, null, rM] : [MM, rM]) : (this.left = BO(this.left, MM), this.right = BO(this.right, rM), this.setHeight(MM.height + rM.height), this.outdated = MM.outdated || rM.outdated, this.size = MM.size + rM.size, this.length = MM.length + this.break+rM.length, this)
      }
      updateHeight(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          OM = arguments.length > 3 ? arguments[3] : void 0,
          {
            left: SM,
            right: jM
          } = this,
          aM = rM + SM.length + this.break,
          PM = null;
        return OM && OM.from <= rM + SM.length && OM.more ? PM = SM = SM.updateHeight(MM, rM, iM, OM) : SM.updateHeight(MM, rM, iM), OM && OM.from <= aM + jM.length && OM.more ? PM = jM = jM.updateHeight(MM, aM, iM, OM) : jM.updateHeight(MM, aM, iM), PM ? this.balanced(SM, jM) : (this.height = this.left.height + this.right.height, this.outdated = !1, this)
      }
      toString() {
        return this.left + (this.break ? " " : "-") + this.right
      }
    }

    function VO(MM, rM) {
      let iM, OM;
      null == MM[rM] && (iM = MM[rM - 1]) instanceof qO && (OM = MM[rM + 1]) instanceof qO && MM.splice(rM - 1, 3, new qO(iM.length + 1 + OM.length))
    }
    class cO {
      constructor(MM, rM) {
        this.pos = MM, this.oracle = rM, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = MM
      }
      get isCovered() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering
      }
      span(MM, rM) {
        if (this.lineStart > -1) {
          let MM = Math.min(rM, this.lineEnd),
            iM = this.nodes[this.nodes.length - 1];
          iM instanceof KO ? iM.length += MM - this.pos : (MM > this.pos || !this.isCovered) && this.nodes.push(new KO(MM - this.pos, -1, 0)), this.writtenTo = MM, rM > MM && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1)
        }
        this.pos = rM
      }
      point(MM, rM, iM) {
        if (MM < rM || iM.heightRelevant) {
          let OM = iM.widget ? iM.widget.estimatedHeight : 0,
            SM = iM.widget ? iM.widget.lineBreaks : 0;
          OM < 0 && (OM = this.oracle.lineHeight);
          let jM = rM - MM;
          iM.block ? this.yrM(new IO(jM, OM, iM)) : (jM || SM || OM >= 5) && this.addLineDeco(OM, SM, jM)
        } else rM > MM && this.span(MM, rM);
        this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
      }
      enterLine() {
        if (this.lineStart > -1) return;
        let {
          from: MM,
          to: rM
        } = this.oracle.doc.lineAt(this.pos);
        this.lineStart = MM, this.lineEnd = rM, this.writtenTo < MM && ((this.writtenTo < MM - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, MM - 1)), this.nodes.push(null)), this.pos > MM && this.nodes.push(new KO(this.pos - MM, -1, 0)), this.writtenTo = this.pos
      }
      blankContent(MM, rM) {
        let iM = new qO(rM - MM);
        return this.oracle.doc.lineAt(MM).to == rM && (iM.flags |= 4), iM
      }
      ensureLine() {
        this.enterLine();
        let MM = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (MM instanceof KO) return MM;
        let rM = new KO(0, -1, 0);
        return this.nodes.push(rM), rM
      }
      yrM(MM) {
        this.enterLine();
        let rM = MM.deco;
        rM && rM.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(MM), this.writtenTo = this.pos = this.pos + MM.length, rM && rM.endSide > 0 && (this.covering = MM)
      }
      addLineDeco(MM, rM, iM) {
        let OM = this.ensureLine();
        OM.length += iM, OM.collapsed += iM, OM.widgetHeight = Math.max(OM.widgetHeight, MM), OM.breaks += rM, this.writtenTo = this.pos = this.pos + iM
      }
      finish(MM) {
        let rM = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
        !(this.lineStart > -1) || rM instanceof KO || this.isCovered ? (this.writtenTo < this.pos || null == rM) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new KO(0, -1, 0));
        let iM = MM;
        for (let OM of this.nodes) OM instanceof KO && OM.updateHeight(this.oracle, iM), iM += OM ? OM.length : 1;
        return this.nodes
      }
      static build(MM, rM, iM, SM) {
        let jM = new cO(iM, MM);
        return OM.A.spans(rM, iM, SM, jM, 0), jM.finish(iM)
      }
    }
    class MS {
      constructor() {
        this.changes = []
      }
      compareRange() {}
      comparePoint(MM, rM, iM, OM) {
        (MM < rM || iM && iM.heightRelevant || OM && OM.heightRelevant) && oM(MM, rM, this.changes, 5)
      }
    }

    function rS(MM, rM) {
      let iM = MM.getBoundingClientRect(),
        OM = MM.ownerDocument,
        SM = OM.defaultView || window,
        jM = Math.max(0, iM.left),
        aM = Math.min(SM.innerWidth, iM.right),
        PM = Math.max(0, iM.top),
        nM = Math.min(SM.innerHeight, iM.bottom);
      for (let QM = MM.parentNode; QM && QM != OM.body;)
        if (1 == QM.nodeType) {
          let rM = QM,
            iM = window.getComputedStyle(rM);
          if ((rM.scrollHeight > rM.clientHeight || rM.scrollWidth > rM.clientWidth) && "visible" != iM.overflow) {
            let iM = rM.getBoundingClientRect();
            jM = Math.max(jM, iM.left), aM = Math.min(aM, iM.right), PM = Math.max(PM, iM.top), nM = Math.min(QM == MM.parentNode ? SM.innerHeight : nM, iM.bottom)
          }
          QM = "absolute" == iM.position || "fixed" == iM.position ? rM.offsetParent : rM.parentNode
        } else {
          if (11 != QM.nodeType) break;
          QM = QM.host
        } return {
        left: jM - iM.left,
        right: Math.max(jM, aM) - iM.left,
        top: PM - (iM.top + rM),
        bottom: Math.max(PM, nM) - (iM.top + rM)
      }
    }

    function iS(MM, rM) {
      let iM = MM.getBoundingClientRect();
      return {
        left: 0,
        right: iM.right - iM.left,
        top: rM,
        bottom: iM.bottom - (iM.top + rM)
      }
    }
    class OS {
      constructor(MM, rM, iM, OM) {
        this.from = MM, this.to = rM, this.size = iM, this.displaySize = OM
      }
      static same(MM, rM) {
        if (MM.length != rM.length) return !1;
        for (let iM = 0; iM < MM.length; iM++) {
          let OM = MM[iM],
            SM = rM[iM];
          if (OM.from != SM.from || OM.to != SM.to || OM.size != SM.size) return !1
        }
        return !0
      }
      draw(MM, rM) {
        return WM.replace({
          widget: new SS(this.displaySize * (rM ? MM.scaleY : MM.scaleX), rM)
        }).range(this.from, this.to)
      }
    }
    class SS extends RM {
      constructor(MM, rM) {
        super(), this.size = MM, this.vertical = rM
      }
      eq(MM) {
        return MM.size == this.size && MM.vertical == this.vertical
      }
      toDOM() {
        let MM = document.createElement("div");
        return this.vertical ? MM.style.height = this.size + "px" : (MM.style.width = this.size + "px", MM.style.height = "2px", MM.style.display = "inline-block"), MM
      }
      get estimatedHeight() {
        return this.vertical ? this.size : -1
      }
    }
    class jS {
      constructor(MM, rM) {
        this.view = MM, this.state = rM, this.pixelViewport = {
          left: 0,
          right: window.innerWidth,
          top: 0,
          bottom: 0
        }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = QS, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = Qr.LTR, this.A_ = [], this.mustEnforceCursorAssoc = !1;
        let iM = rM.facet(cr).some((MM => "function" != typeof MM && "cm-lineWrapping" == MM.class));
        this.heightOracle = new YO(iM), this.stateDeco = zS(rM), this.heightMap = FO.empty().applyChanges(this.stateDeco, OM.K.empty, this.heightOracle.setDoc(rM.doc), [new Qi(0, 0, 0, rM.doc.length)]);
        for (let OM = 0; OM < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); OM++);
        this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = WM.set(this.lineGaps.map((MM => MM.draw(this, !1)))), this.scrollParent = MM.scrollDOM, this.computeVisibleRanges()
      }
      updateForViewport() {
        let MM = [this.viewport],
          {
            main: rM
          } = this.state.selection;
        for (let iM = 0; iM <= 1; iM++) {
          let OM = iM ? rM.head : rM.anchor;
          if (!MM.some((MM => {
              let {
                from: rM,
                to: iM
              } = MM;
              return OM >= rM && OM <= iM
            }))) {
            let {
              from: rM,
              to: iM
            } = this.lineBlockAt(OM);
            MM.push(new aS(rM, iM))
          }
        }
        return this.viewports = MM.sort(((MM, rM) => MM.from - rM.from)), this.updateScaler()
      }
      updateScaler() {
        let MM = this.scaler;
        return this.scaler = this.heightMap.height <= 7e6 ? QS : new LS(this.heightOracle, this.heightMap, this.viewports), MM.eq(this.scaler) ? 0 : 2
      }
      updateViewportLines() {
        this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (MM => {
          this.viewportLines.push(mS(MM, this.scaler))
        }))
      }
      update(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.state = MM.state;
        let iM = this.stateDeco;
        this.stateDeco = zS(this.state);
        let SM = MM.changedRanges,
          jM = Qi.extendWithRanges(SM, function(MM, rM, iM) {
            let SM = new MS;
            return OM.A.compare(MM, rM, iM, SM, 0), SM.changes
          }(iM, this.stateDeco, MM ? MM.changes : OM.ChangeSet.empty(this.state.doc.length))),
          aM = this.heightMap.height,
          PM = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
        fO(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, MM.startState.doc, this.heightOracle.setDoc(this.state.doc), jM), (this.heightMap.height != aM || oO) && (MM.flags |= 2), PM ? (this.scrollAnchorPos = MM.changes.mapPos(PM.from, -1), this.scrollAnchorHeight = PM.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = aM);
        let nM = jM.length ? this.mapViewport(this.viewport, MM.changes) : this.viewport;
        (rM && (rM.range.head < nM.from || rM.range.head > nM.to) || !this.viewportIsAppropriate(nM)) && (nM = this.getViewport(0, rM));
        let QM = nM.from != this.viewport.from || nM.to != this.viewport.to;
        this.viewport = nM, MM.flags |= this.updateForViewport(), (QM || !MM.changes.empty || 2 & MM.flags) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, MM.changes))), MM.flags |= this.computeVisibleRanges(MM.changes), rM && (this.scrollTarget = rM), !this.mustEnforceCursorAssoc && (MM.selectionSet || MM.focusChanged) && MM.view.lineWrapping && MM.state.selection.main.empty && MM.state.selection.main.assoc && !MM.state.facet(Nr) && (this.mustEnforceCursorAssoc = !0)
      }
      measure() {
        let {
          view: MM
        } = this, rM = MM.contentDOM, iM = window.getComputedStyle(rM), SM = this.heightOracle, jM = iM.whiteSpace;
        this.defaultTextDirection = "rtl" == iM.direction ? Qr.RTL : Qr.LTR;
        let aM = this.heightOracle.mustRefreshForWrapping(jM) || "refresh" === this.mustMeasureContent,
          PM = rM.getBoundingClientRect(),
          nM = aM || this.mustMeasureContent || this.contentDOMHeight != PM.height;
        this.contentDOMHeight = PM.height, this.mustMeasureContent = !1;
        let QM = 0,
          zM = 0;
        if (PM.width && PM.height) {
          let {
            scaleX: MM,
            scaleY: iM
          } = TM(rM, PM);
          (MM > .005 && Math.abs(this.scaleX - MM) > .005 || iM > .005 && Math.abs(this.scaleY - iM) > .005) && (this.scaleX = MM, this.scaleY = iM, QM |= 16, aM = nM = !0)
        }
        let LM = (parseInt(iM.paddingTop) || 0) * this.scaleY,
          mM = (parseInt(iM.paddingBottom) || 0) * this.scaleY;
        this.paddingTop == LM && this.paddingBottom == mM || (this.paddingTop = LM, this.paddingBottom = mM, QM |= 18), this.editorWidth != MM.scrollDOM.clientWidth && (SM.lineWrapping && (nM = !0), this.editorWidth = MM.scrollDOM.clientWidth, QM |= 16);
        let HM = VM(this.view.contentDOM, !1).y;
        HM != this.scrollParent && (this.scrollParent = HM, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
        let hM = this.getScrollOffset();
        this.scrollOffset != hM && (this.scrollAnchorHeight = -1, this.scrollOffset = hM), this.scrolledToBottom = jr(this.scrollParent || MM.win);
        let JM = (this.printing ? iS : rS)(rM, this.paddingTop),
          dM = JM.top - this.pixelViewport.top,
          yM = JM.bottom - this.pixelViewport.bottom;
        this.pixelViewport = JM;
        let lM = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
        if (lM != this.inView && (this.inView = lM, lM && (nM = !0)), !this.inView && !this.scrollTarget && ! function(MM) {
            let rM = MM.getBoundingClientRect(),
              iM = MM.ownerDocument.defaultView || window;
            return rM.left < iM.innerWidth && rM.right > 0 && rM.top < iM.innerHeight && rM.bottom > 0
          }(MM.dom)) return 0;
        let EM = PM.width;
        if (this.contentDOMWidth == EM && this.editorHeight == MM.scrollDOM.clientHeight || (this.contentDOMWidth = PM.width, this.editorHeight = MM.scrollDOM.clientHeight, QM |= 16), nM) {
          let rM = MM.docView.measureVisibleLineHeights(this.viewport);
          if (SM.mustRefreshForHeights(rM) && (aM = !0), aM || SM.lineWrapping && Math.abs(EM - this.contentDOMWidth) > SM.charWidth) {
            let {
              lineHeight: iM,
              charWidth: OM,
              textHeight: PM
            } = MM.docView.measureTextSize();
            aM = iM > 0 && SM.refresh(jM, iM, OM, PM, Math.max(5, EM / OM), rM), aM && (MM.docView.minWidth = 0, QM |= 16)
          }
          dM > 0 && yM > 0 ? zM = Math.max(dM, yM) : dM < 0 && yM < 0 && (zM = Math.min(dM, yM)), fO();
          for (let iM of this.viewports) {
            let jM = iM.from == this.viewport.from ? rM : MM.docView.measureVisibleLineHeights(iM);
            this.heightMap = (aM ? FO.empty().applyChanges(this.stateDeco, OM.K.empty, this.heightOracle, [new Qi(0, 0, 0, MM.state.doc.length)]) : this.heightMap).updateHeight(SM, 0, aM, new NO(iM.from, jM))
          }
          oO && (QM |= 2)
        }
        let UM = !this.viewportIsAppropriate(this.viewport, zM) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
        return UM && (2 & QM && (QM |= this.updateScaler()), this.viewport = this.getViewport(zM, this.scrollTarget), QM |= this.updateForViewport()), (2 & QM || UM) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(aM ? [] : this.lineGaps, MM)), QM |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, MM.docView.enforceCursorAssoc()), QM
      }
      get visibleTop() {
        return this.scaler.fromDOM(this.pixelViewport.top)
      }
      get visibleBottom() {
        return this.scaler.fromDOM(this.pixelViewport.bottom)
      }
      getViewport(MM, rM) {
        let iM = .5 - Math.max(-.5, Math.min(.5, MM / 1e3 / 2)),
          OM = this.heightMap,
          SM = this.heightOracle,
          {
            visibleTop: jM,
            visibleBottom: aM
          } = this,
          PM = new aS(OM.lineAt(jM - 1e3 * iM, xO.ByHeight, SM, 0, 0).from, OM.lineAt(aM + 1e3 * (1 - iM), xO.ByHeight, SM, 0, 0).to);
        if (rM) {
          let {
            head: MM
          } = rM.range;
          if (MM < PM.from || MM > PM.to) {
            let iM, jM = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
              aM = OM.lineAt(MM, xO.ByPos, SM, 0, 0);
            iM = "center" == rM.y ? (aM.top + aM.bottom) / 2 - jM / 2 : "start" == rM.y || "nearest" == rM.y && MM < PM.from ? aM.top : aM.bottom - jM, PM = new aS(OM.lineAt(iM - 500, xO.ByHeight, SM, 0, 0).from, OM.lineAt(iM + jM + 500, xO.ByHeight, SM, 0, 0).to)
          }
        }
        return PM
      }
      mapViewport(MM, rM) {
        let iM = rM.mapPos(MM.from, -1),
          OM = rM.mapPos(MM.to, 1);
        return new aS(this.heightMap.lineAt(iM, xO.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(OM, xO.ByPos, this.heightOracle, 0, 0).to)
      }
      viewportIsAppropriate(MM) {
        let {
          from: rM,
          to: iM
        } = MM, OM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!this.inView) return !0;
        let {
          top: SM
        } = this.heightMap.lineAt(rM, xO.ByPos, this.heightOracle, 0, 0), {
          bottom: jM
        } = this.heightMap.lineAt(iM, xO.ByPos, this.heightOracle, 0, 0), {
          visibleTop: aM,
          visibleBottom: PM
        } = this;
        return (0 == rM || SM <= aM - Math.max(10, Math.min(-OM, 250))) && (iM == this.state.doc.length || jM >= PM + Math.max(10, Math.min(OM, 250))) && SM > aM - 2e3 && jM < PM + 2e3
      }
      mapLineGaps(MM, rM) {
        if (!MM.length || rM.empty) return MM;
        let iM = [];
        for (let OM of MM) rM.touchesRange(OM.from, OM.to) || iM.push(new OS(rM.mapPos(OM.from), rM.mapPos(OM.to), OM.size, OM.displaySize));
        return iM
      }
      ensureLineGaps(MM, rM) {
        let iM = this.heightOracle.lineWrapping,
          SM = iM ? 1e4 : 2e3,
          jM = SM >> 1,
          aM = SM << 1;
        if (this.defaultTextDirection != Qr.LTR && !iM) return [];
        let PM = [],
          nM = (SM, aM, QM, zM) => {
            if (aM - SM < jM) return;
            let LM = this.state.selection.main,
              mM = [LM.from];
            LM.empty || mM.push(LM.to);
            for (let MM of mM)
              if (MM > SM && MM < aM) return nM(SM, MM - 10, QM, zM), void nM(MM + 10, aM, QM, zM);
            let HM = function(MM, rM) {
              for (let iM of MM)
                if (rM(iM)) return iM;
              return
            }(MM, (MM => MM.from >= QM.from && MM.to <= QM.to && Math.abs(MM.from - SM) < jM && Math.abs(MM.to - aM) < jM && !mM.some((rM => MM.from < rM && MM.to > rM))));
            if (!HM) {
              if (aM < QM.to && rM && iM && rM.A_.some((MM => MM.from <= aM && MM.to >= aM))) {
                let MM = rM.moveToLineBoundary(OM.l.cursor(aM), !1, !0).head;
                MM > SM && (aM = MM)
              }
              let MM = this.gapSize(QM, SM, aM, zM);
              HM = new OS(SM, aM, MM, iM || MM < 2e6 ? MM : 2e6)
            }
            PM.push(HM)
          },
          QM = rM => {
            if (rM.length < aM || rM.type != pM.Text) return;
            let jM = function(MM, rM, iM) {
              let SM = [],
                jM = MM,
                aM = 0;
              OM.A.spans(iM, MM, rM, {
                span() {},
                point(MM, rM) {
                  MM > jM && (SM.push({
                    from: jM,
                    to: MM
                  }), aM += MM - jM), jM = rM
                }
              }, 20), jM < rM && (SM.push({
                from: jM,
                to: rM
              }), aM += rM - jM);
              return {
                total: aM,
                Ld: SM
              }
            }(rM.from, rM.to, this.stateDeco);
            if (jM.total < aM) return;
            let PM, QM, zM = this.scrollTarget ? this.scrollTarget.range.head : null;
            if (iM) {
              let MM, iM, OM = SM / this.heightOracle.lineLength * this.heightOracle.lineHeight;
              if (null != zM) {
                let SM = nS(jM, zM),
                  aM = ((this.visibleBottom - this.visibleTop) / 2 + OM) / rM.height;
                MM = SM - aM, iM = SM + aM
              } else MM = (this.visibleTop - rM.top - OM) / rM.height, iM = (this.visibleBottom - rM.top + OM) / rM.height;
              PM = PS(jM, MM), QM = PS(jM, iM)
            } else {
              let iM = jM.total * this.heightOracle.charWidth,
                OM = SM * this.heightOracle.charWidth,
                aM = 0;
              if (iM > 2e6)
                for (let SM of MM) SM.from >= rM.from && SM.from < rM.to && SM.size != SM.displaySize && SM.from * this.heightOracle.charWidth + aM < this.pixelViewport.left && (aM = SM.size - SM.displaySize);
              let nM, LM, mM = this.pixelViewport.left + aM,
                HM = this.pixelViewport.right + aM;
              if (null != zM) {
                let MM = nS(jM, zM),
                  rM = ((HM - mM) / 2 + OM) / iM;
                nM = MM - rM, LM = MM + rM
              } else nM = (mM - OM) / iM, LM = (HM + OM) / iM;
              PM = PS(jM, nM), QM = PS(jM, LM)
            }
            PM > rM.from && nM(rM.from, PM, rM, jM), QM < rM.to && nM(QM, rM.to, rM, jM)
          };
        for (let OM of this.viewportLines) Array.isArray(OM.type) ? OM.type.forEach(QM) : QM(OM);
        return PM
      }
      gapSize(MM, rM, iM, OM) {
        let SM = nS(OM, iM) - nS(OM, rM);
        return this.heightOracle.lineWrapping ? MM.height * SM : OM.total * this.heightOracle.charWidth * SM
      }
      updateLineGaps(MM) {
        OS.same(MM, this.lineGaps) || (this.lineGaps = MM, this.lineGapDeco = WM.set(MM.map((MM => MM.draw(this, this.heightOracle.lineWrapping)))))
      }
      computeVisibleRanges(MM) {
        let rM = this.stateDeco;
        this.lineGaps.length && (rM = rM.concat(this.lineGapDeco));
        let iM = [];
        OM.A.spans(rM, this.viewport.from, this.viewport.to, {
          span(MM, rM) {
            iM.push({
              from: MM,
              to: rM
            })
          },
          point() {}
        }, 20);
        let SM = 0;
        if (iM.length != this.A_.length) SM = 12;
        else
          for (let OM = 0; OM < iM.length && !(8 & SM); OM++) {
            let rM = this.A_[OM],
              jM = iM[OM];
            rM.from == jM.from && rM.to == jM.to || (SM |= 4, MM && MM.mapPos(rM.from, -1) == jM.from && MM.mapPos(rM.to, 1) == jM.to || (SM |= 8))
          }
        return this.A_ = iM, SM
      }
      lineBlockAt(MM) {
        return MM >= this.viewport.from && MM <= this.viewport.to && this.viewportLines.find((rM => rM.from <= MM && rM.to >= MM)) || mS(this.heightMap.lineAt(MM, xO.ByPos, this.heightOracle, 0, 0), this.scaler)
      }
      lineBlockAtHeight(MM) {
        return MM >= this.viewportLines[0].top && MM <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((rM => rM.top <= MM && rM.bottom >= MM)) || mS(this.heightMap.lineAt(this.scaler.fromDOM(MM), xO.ByHeight, this.heightOracle, 0, 0), this.scaler)
      }
      getScrollOffset() {
        return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY
      }
      scrollAnchorAt(MM) {
        let rM = this.lineBlockAtHeight(MM + 8);
        return rM.from >= this.viewport.from || this.viewportLines[0].top - MM > 200 ? rM : this.viewportLines[0]
      }
      elementAtHeight(MM) {
        return mS(this.heightMap.blockAt(this.scaler.fromDOM(MM), this.heightOracle, 0, 0), this.scaler)
      }
      get docHeight() {
        return this.scaler.toDOM(this.heightMap.height)
      }
      get contentHeight() {
        return this.docHeight + this.paddingTop + this.paddingBottom
      }
    }
    class aS {
      constructor(MM, rM) {
        this.from = MM, this.to = rM
      }
    }

    function PS(MM, rM) {
      let {
        total: iM,
        Ld: OM
      } = MM;
      if (rM <= 0) return OM[0].from;
      if (rM >= 1) return OM[OM.length - 1].to;
      let SM = Math.floor(iM * rM);
      for (let jM = 0;; jM++) {
        let {
          from: MM,
          to: rM
        } = OM[jM], iM = rM - MM;
        if (SM <= iM) return MM + SM;
        SM -= iM
      }
    }

    function nS(MM, rM) {
      let iM = 0;
      for (let {
          from: OM,
          to: SM
        }
        of MM.Ld) {
        if (rM <= SM) {
          iM += rM - OM;
          break
        }
        iM += SM - OM
      }
      return iM / MM.total
    }
    const QS = {
      toDOM: MM => MM,
      fromDOM: MM => MM,
      scale: 1,
      eq(MM) {
        return MM == this
      }
    };

    function zS(MM) {
      let rM = MM.facet(Mi).filter((MM => "function" != typeof MM)),
        iM = MM.facet(ii).filter((MM => "function" != typeof MM));
      return iM.length && rM.push(OM.A.join(iM)), rM
    }
    class LS {
      constructor(MM, rM, iM) {
        let OM = 0,
          SM = 0,
          jM = 0;
        this.viewports = iM.map((iM => {
          let {
            from: SM,
            to: jM
          } = iM, aM = rM.lineAt(SM, xO.ByPos, MM, 0, 0).top, PM = rM.lineAt(jM, xO.ByPos, MM, 0, 0).bottom;
          return OM += PM - aM, {
            from: SM,
            to: jM,
            top: aM,
            bottom: PM,
            domTop: 0,
            domBottom: 0
          }
        })), this.scale = (7e6 - OM) / (rM.height - OM);
        for (let aM of this.viewports) aM.domTop = jM + (aM.top - SM) * this.scale, jM = aM.domBottom = aM.domTop + (aM.bottom - aM.top), SM = aM.bottom
      }
      toDOM(MM) {
        for (let rM = 0, iM = 0, OM = 0;; rM++) {
          let SM = rM < this.viewports.length ? this.viewports[rM] : null;
          if (!SM || MM < SM.top) return OM + (MM - iM) * this.scale;
          if (MM <= SM.bottom) return SM.domTop + (MM - SM.top);
          iM = SM.bottom, OM = SM.domBottom
        }
      }
      fromDOM(MM) {
        for (let rM = 0, iM = 0, OM = 0;; rM++) {
          let SM = rM < this.viewports.length ? this.viewports[rM] : null;
          if (!SM || MM < SM.domTop) return iM + (MM - OM) / this.scale;
          if (MM <= SM.domBottom) return SM.top + (MM - SM.domTop);
          iM = SM.bottom, OM = SM.domBottom
        }
      }
      eq(MM) {
        return MM instanceof LS && (this.scale == MM.scale && this.viewports.length == MM.viewports.length && this.viewports.every(((rM, iM) => rM.from == MM.viewports[iM].from && rM.to == MM.viewports[iM].to)))
      }
    }

    function mS(MM, rM) {
      if (1 == rM.scale) return MM;
      let iM = rM.toDOM(MM.top),
        OM = rM.toDOM(MM.bottom);
      return new AO(MM.from, MM.length, iM, OM - iM, Array.isArray(MM._content) ? MM._content.map((MM => mS(MM, rM))) : MM._content)
    }
    const HS = OM.s.define({
        combine: MM => MM.join(" ")
      }),
      hS = OM.s.define({
        combine: MM => MM.indexOf(!0) > -1
      }),
      JS = SM.b.newName(),
      dS = SM.b.newName(),
      yS = SM.b.newName(),
      lS = {
        "&light": "." + dS,
        "&dark": "." + yS
      };

    function ES(MM, rM, iM) {
      return new SM.b(rM, {
        finish: rM => /&/.test(rM) ? rM.replace(/&\w*/, (rM => {
          if ("&" == rM) return MM;
          if (!iM || !iM[rM]) throw new RangeError(`Unsupported selector: ${rM}`);
          return iM[rM]
        })) : MM + " " + rM
      })
    }
    const US = ES("." + JS, {
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
      }, lS),
      GS = {
        childList: !0,
        characterData: !0,
        subtree: !0,
        attributes: !0,
        characterDataOldValue: !0
      },
      CS = eM.ie && eM.ie_version <= 11;
    class eS {
      constructor(MM) {
        this.view = MM, this.active = !1, this.editContext = null, this.selectionRange = new cM, this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = MM.contentDOM, this.observer = new MutationObserver((rM => {
          for (let MM of rM) this.queue.push(MM);
          (eM.ie && eM.ie_version <= 11 || eM.ios && MM.composing) && rM.some((MM => "childList" == MM.type && MM.removedNodes.length || "characterData" == MM.type && MM.oldValue.length > MM.target.nodeValue.length)) ? this.flushSoon() : this.flush()
        })), !window.EditContext || !eM.android || !1 === MM.constructor.EDIT_CONTEXT || eM.chrome && eM.chrome_version < 126 || (this.editContext = new tS(MM), MM.state.facet(Xr) && (MM.contentDOM.editContext = this.editContext.editContext)), CS && (this.onCharData = MM => {
          this.queue.push({
            target: MM.target,
            type: "characterData",
            oldValue: MM.prevValue
          }), this.flushSoon()
        }), this.onSelectionChange = this.onSelectionChange.bind(this), this.pE = this.pE.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver((() => {
          var MM;
          (null === (MM = this.view.docView) || void 0 === MM ? void 0 : MM.lastUpdate) < Date.now() - 75 && this.pE()
        })), this.resizeScroll.observe(MM.scrollDOM)), this.addWindowListeners(this.win = MM.win), this.start(), "function" == typeof IntersectionObserver && (this.intersection = new IntersectionObserver((MM => {
          this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), MM.length > 0 && MM[MM.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")))
        }), {
          threshold: [0, .001]
        }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((MM => {
          MM.length > 0 && MM[MM.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"))
        }), {})), this.listenForScroll(), this.readSelectionRange()
      }
      onScrollChanged(MM) {
        this.view.inputState.runHandlers("scroll", MM), this.intersecting && this.view.measure()
      }
      onScroll(MM) {
        this.intersecting && this.flush(!1), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(MM)
      }
      pE() {
        this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout((() => {
          this.resizeTimeout = -1, this.view.requestMeasure()
        }), 50))
      }
      onPrint(MM) {
        ("change" != MM.type && MM.type || MM.matches) && (this.view.viewState.printing = !0, this.view.measure(), setTimeout((() => {
          this.view.viewState.printing = !1, this.view.requestMeasure()
        }), 500))
      }
      updateGaps(MM) {
        if (this.gapIntersection && (MM.length != this.gaps.length || this.gaps.some(((rM, iM) => rM != MM[iM])))) {
          this.gapIntersection.disconnect();
          for (let rM of MM) this.gapIntersection.observe(rM);
          this.gaps = MM
        }
      }
      onSelectionChange(MM) {
        let rM = this.selectionChanged;
        if (!this.readSelectionRange() || this.delayedAndroidKey) return;
        let {
          view: iM
        } = this, OM = this.selectionRange;
        if (iM.state.facet(Xr) ? iM.root.activeElement != this.dom : !AM(this.dom, OM)) return;
        let SM = OM.anchorNode && iM.docView.tile.nearest(OM.anchorNode);
        SM && SM.isWidget() && SM.widget.ignoreEvent(MM) ? rM || (this.selectionChanged = !1) : (eM.ie && eM.ie_version <= 11 || eM.android && eM.chrome) && !iM.state.selection.main.empty && OM.focusNode && vM(OM.focusNode, OM.focusOffset, OM.anchorNode, OM.anchorOffset) ? this.flushSoon() : this.flush(!1)
      }
      readSelectionRange() {
        let {
          view: MM
        } = this, rM = YM(MM.root);
        if (!rM) return !1;
        let iM = eM.safari && 11 == MM.root.nodeType && MM.root.activeElement == this.dom && function(MM, rM) {
          if (rM.getComposedRanges) {
            let iM = rM.getComposedRanges(MM.root)[0];
            if (iM) return wS(MM, iM)
          }
          let iM = null;

          function OM(MM) {
            MM.preventDefault(), MM.stopImmediatePropagation(), iM = MM.getTargetRanges()[0]
          }
          return MM.contentDOM.addEventListener("beforeinput", OM, !0), MM.dom.ownerDocument.execCommand("indent"), MM.contentDOM.removeEventListener("beforeinput", OM, !0), iM ? wS(MM, iM) : null
        }(this.view, rM) || rM;
        if (!iM || this.selectionRange.eq(iM)) return !1;
        let OM = AM(this.dom, iM);
        return OM && !this.selectionChanged && MM.inputState.lastFocusTime > Date.now() - 200 && MM.inputState.lastTouchTime < Date.now() - 300 && function(MM, rM) {
          let iM = rM.focusNode,
            OM = rM.focusOffset;
          if (!iM || rM.anchorNode != iM || rM.anchorOffset != OM) return !1;
          for (OM = Math.min(OM, IM(iM));;)
            if (OM) {
              if (1 != iM.nodeType) return !1;
              let MM = iM.childNodes[OM - 1];
              "false" == MM.contentEditable ? OM-- : (iM = MM, OM = IM(iM))
            } else {
              if (iM == MM) return !0;
              OM = FM(iM), iM = iM.parentNode
            }
        }(this.dom, iM) ? (this.view.inputState.lastFocusTime = 0, MM.docView.updateSelection(), !1) : (this.selectionRange.setRange(iM), OM && (this.selectionChanged = !0), !0)
      }
      setSelectionRange(MM, rM) {
        this.selectionRange.set(MM.node, MM.offset, rM.node, rM.offset), this.selectionChanged = !1
      }
      clearSelectionRange() {
        this.selectionRange.set(null, 0, null, 0)
      }
      listenForScroll() {
        this.parentCheck = -1;
        let MM = 0,
          rM = null;
        for (let iM = this.dom; iM;)
          if (1 == iM.nodeType) !rM && MM < this.scrollTargets.length && this.scrollTargets[MM] == iM ? MM++ : rM || (rM = this.scrollTargets.slice(0, MM)), rM && rM.push(iM), iM = iM.assignedSlot || iM.parentNode;
          else {
            if (11 != iM.nodeType) break;
            iM = iM.host
          } if (MM < this.scrollTargets.length && !rM && (rM = this.scrollTargets.slice(0, MM)), rM) {
          for (let MM of this.scrollTargets) MM.removeEventListener("scroll", this.onScroll);
          for (let MM of this.scrollTargets = rM) MM.addEventListener("scroll", this.onScroll)
        }
      }
      ignore(MM) {
        if (!this.active) return MM();
        try {
          return this.stop(), MM()
        } finally {
          this.start(), this.clear()
        }
      }
      start() {
        this.active || (this.observer.observe(this.dom, GS), CS && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0)
      }
      stop() {
        this.active && (this.active = !1, this.observer.disconnect(), CS && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData))
      }
      clear() {
        this.processRecords(), this.queue.length = 0, this.selectionChanged = !1
      }
      delayAndroidKey(MM, rM) {
        var iM;
        if (!this.delayedAndroidKey) {
          let MM = () => {
            let MM = this.delayedAndroidKey;
            if (MM) {
              this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = MM.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && MM.force && Sr(this.dom, MM.key, MM.keyCode)
            }
          };
          this.flushingAndroidKey = this.view.win.requestAnimationFrame(MM)
        }
        this.delayedAndroidKey && "Enter" != MM || (this.delayedAndroidKey = {
          key: MM,
          keyCode: rM,
          force: this.lastChange < Date.now() - 50 || !!(null === (iM = this.delayedAndroidKey) || void 0 === iM ? void 0 : iM.force)
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
        for (let MM of this.observer.takeRecords()) this.queue.push(MM);
        return this.queue
      }
      processRecords() {
        let MM = this.pendingRecords();
        MM.length && (this.queue = []);
        let rM = -1,
          iM = -1,
          OM = !1;
        for (let SM of MM) {
          let MM = this.readMutation(SM);
          MM && (MM.typeOver && (OM = !0), -1 == rM ? ({
            from: rM,
            to: iM
          } = MM) : (rM = Math.min(MM.from, rM), iM = Math.max(MM.to, iM)))
        }
        return {
          from: rM,
          to: iM,
          typeOver: OM
        }
      }
      readChange() {
        let {
          from: MM,
          to: rM,
          typeOver: iM
        } = this.processRecords(), OM = this.selectionChanged && AM(this.dom, this.selectionRange);
        if (MM < 0 && !OM) return null;
        MM > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
        let SM = new SO(this.view, MM, rM, iM);
        return this.view.docView.domChanged = {
          newSel: SM.newSel ? SM.newSel.main : null
        }, SM
      }
      flush() {
        let MM = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
        MM && this.readSelectionRange();
        let rM = this.readChange();
        if (!rM) return this.view.requestMeasure(), !1;
        let iM = this.view.state,
          OM = aO(this.view, rM);
        return this.view.state == iM && (rM.domChanged || rM.newSel && !QO(this.view.state.selection, rM.newSel.main)) && this.view.update([]), OM
      }
      readMutation(MM) {
        let rM = this.view.docView.tile.nearest(MM.target);
        if (!rM || rM.isWidget()) return null;
        if (rM.markDirty("attributes" == MM.type), "childList" == MM.type) {
          let iM = bS(rM, MM.previousSibling || MM.target.previousSibling, -1),
            OM = bS(rM, MM.nextSibling || MM.target.nextSibling, 1);
          return {
            from: iM ? rM.posAfter(iM) : rM.posAtStart,
            to: OM ? rM.posBefore(OM) : rM.posAtEnd,
            typeOver: !1
          }
        }
        return "characterData" == MM.type ? {
          from: rM.posAtStart,
          to: rM.posAtEnd,
          typeOver: MM.target.nodeValue == MM.oldValue
        } : null
      }
      setWindow(MM) {
        MM != this.win && (this.removeWindowListeners(this.win), this.win = MM, this.addWindowListeners(this.win))
      }
      addWindowListeners(MM) {
        MM.addEventListener("resize", this.pE), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : MM.addEventListener("beforeprint", this.onPrint), MM.addEventListener("scroll", this.onScroll), MM.document.addEventListener("selectionchange", this.onSelectionChange)
      }
      removeWindowListeners(MM) {
        MM.removeEventListener("scroll", this.onScroll), MM.removeEventListener("resize", this.pE), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : MM.removeEventListener("beforeprint", this.onPrint), MM.document.removeEventListener("selectionchange", this.onSelectionChange)
      }
      update(MM) {
        this.editContext && (this.editContext.update(MM), MM.startState.facet(Xr) != MM.state.facet(Xr) && (MM.view.contentDOM.editContext = MM.state.facet(Xr) ? this.editContext.editContext : null))
      }
      destroy() {
        var MM, rM, iM;
        this.stop(), null === (MM = this.intersection) || void 0 === MM || MM.disconnect(), null === (rM = this.gapIntersection) || void 0 === rM || rM.disconnect(), null === (iM = this.resizeScroll) || void 0 === iM || iM.disconnect();
        for (let OM of this.scrollTargets) OM.removeEventListener("scroll", this.onScroll);
        this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy())
      }
    }

    function bS(MM, rM, iM) {
      for (; rM;) {
        let OM = mi.get(rM);
        if (OM && OM.parent == MM) return OM;
        let SM = rM.parentNode;
        rM = SM != MM.dom ? SM : iM > 0 ? rM.nextSibling : rM.previousSibling
      }
      return null
    }

    function wS(MM, rM) {
      let iM = rM.startContainer,
        OM = rM.startOffset,
        SM = rM.endContainer,
        jM = rM.endOffset,
        aM = MM.docView.domAtPos(MM.state.selection.main.anchor, 1);
      return vM(aM.node, aM.offset, SM, jM) && ([iM, OM, SM, jM] = [SM, jM, iM, OM]), {
        anchorNode: iM,
        anchorOffset: OM,
        focusNode: SM,
        focusOffset: jM
      }
    }
    class tS {
      constructor(MM) {
        this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = Object.create(null), this.composing = null, this.resetRange(MM.state);
        let rM = this.editContext = new window.EditContext({
          text: MM.state.doc.sliceString(this.from, this.to),
          selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, MM.state.selection.main.anchor))),
          selectionEnd: this.toContextPos(MM.state.selection.main.head)
        });
        this.handlers.textupdate = iM => {
          let SM = MM.state.selection.main,
            {
              anchor: jM,
              head: aM
            } = SM,
            PM = this.toEditorPos(iM.updateRangeStart),
            nM = this.toEditorPos(iM.updateRangeEnd);
          MM.inputState.composing >= 0 && !this.composing && (this.composing = {
            contextBase: iM.updateRangeStart,
            editorBase: PM,
            drifted: !1
          });
          let QM = nM - PM > iM.text.length;
          PM == this.from && jM < this.from ? PM = jM : nM == this.to && jM > this.to && (nM = jM);
          let zM = nO(MM.state.sliceDoc(PM, nM), iM.text, (QM ? SM.from : SM.to) - PM, QM ? "end" : null);
          if (!zM) {
            let rM = OM.l.single(this.toEditorPos(iM.selectionStart), this.toEditorPos(iM.selectionEnd));
            return void(QO(rM, SM) || MM.dispatch({
              selection: rM,
              userEvent: "select"
            }))
          }
          let LM = {
            from: zM.from + PM,
            to: zM.toA + PM,
            insert: OM.K.of(iM.text.slice(zM.from, zM.toB).split("\n"))
          };
          if ((eM.mac || eM.android) && LM.from == aM - 1 && /^\. ?$/.test(iM.text) && "off" == MM.contentDOM.getAttribute("autocorrect") && (LM = {
              from: PM,
              to: nM,
              insert: OM.K.of([iM.text.replace(".", " ")])
            }), this.pendingContextChange = LM, !MM.state.readOnly) {
            let rM = this.to - this.from + (LM.to - LM.from + LM.insert.length);
            PO(MM, LM, OM.l.single(this.toEditorPos(iM.selectionStart, rM), this.toEditorPos(iM.selectionEnd, rM)))
          }
          this.pendingContextChange && (this.revertPending(MM.state), this.setSelection(MM.state)), LM.from < LM.to && !LM.insert.length && MM.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(rM.text.slice(Math.max(0, iM.updateRangeStart - 1), Math.min(rM.text.length, iM.updateRangeStart + 1))) && this.handlers.compositionend(iM)
        }, this.handlers.characterboundsupdate = iM => {
          let OM = [],
            SM = null;
          for (let rM = this.toEditorPos(iM.rangeStart), jM = this.toEditorPos(iM.rangeEnd); rM < jM; rM++) {
            let iM = MM.coordsForChar(rM);
            SM = iM && new DOMRect(iM.left, iM.top, iM.right - iM.left, iM.bottom - iM.top) || SM || new DOMRect, OM.push(SM)
          }
          rM.updateCharacterBounds(iM.rangeStart, OM)
        }, this.handlers.textformatupdate = rM => {
          let iM = [];
          for (let MM of rM.getTextFormats()) {
            let rM = MM.underlineStyle,
              OM = MM.underlineThickness;
            if (!/none/i.test(rM) && !/none/i.test(OM)) {
              let SM = this.toEditorPos(MM.rangeStart),
                jM = this.toEditorPos(MM.rangeEnd);
              if (SM < jM) {
                let MM = `text-decoration: underline ${/^[a-z]/.test(rM)?rM+" ":"Dashed"==rM?"dashed ":"Squiggle"==rM?"wavy ":""}${/thin/i.test(OM)?1:2}px`;
                iM.push(WM.mark({
                  attributes: {
                    style: MM
                  }
                }).range(SM, jM))
              }
            }
          }
          MM.dispatch({
            effects: Fr.of(WM.set(iM))
          })
        }, this.handlers.compositionstart = () => {
          MM.inputState.composing < 0 && (MM.inputState.composing = 0, MM.inputState.compositionFirstChange = !0)
        }, this.handlers.compositionend = () => {
          if (MM.inputState.composing = -1, MM.inputState.compositionFirstChange = null, this.composing) {
            let {
              drifted: rM
            } = this.composing;
            this.composing = null, rM && this.reset(MM.state)
          }
        };
        for (let iM in this.handlers) rM.addEventListener(iM, this.handlers[iM]);
        this.measureReq = {
          read: MM => {
            this.editContext.updateControlBounds(MM.contentDOM.getBoundingClientRect());
            let rM = YM(MM.root);
            rM && rM.rangeCount && this.editContext.updateSelectionBounds(rM.getRangeAt(0).getBoundingClientRect())
          }
        }
      }
      applyEdits(MM) {
        let rM = 0,
          iM = !1,
          OM = this.pendingContextChange;
        return MM.changes.iterChanges(((SM, jM, aM, PM, nM) => {
          if (iM) return;
          let QM = nM.length - (jM - SM);
          if (OM && jM >= OM.to) {
            if (OM.from == SM && OM.to == jM && OM.insert.eq(nM)) return OM = this.pendingContextChange = null, rM += QM, void(this.to += QM);
            OM = null, this.revertPending(MM.state)
          }
          if (SM += rM, (jM += rM) <= this.from) this.from += QM, this.to += QM;
          else if (SM < this.to) {
            if (SM < this.from || jM > this.to || this.to - this.from + nM.length > 3e4) return void(iM = !0);
            this.editContext.updateText(this.toContextPos(SM), this.toContextPos(jM), nM.toString()), this.to += QM
          }
          rM += QM
        })), OM && !iM && this.revertPending(MM.state), !iM
      }
      update(MM) {
        let rM = this.pendingContextChange,
          iM = MM.startState.selection.main;
        this.composing && (this.composing.drifted || !MM.changes.touchesRange(iM.from, iM.to) && MM.transactions.some((MM => !MM.isUserEvent("input.type") && MM.changes.touchesRange(this.from, this.to)))) ? (this.composing.drifted = !0, this.composing.editorBase = MM.changes.mapPos(this.composing.editorBase)) : this.applyEdits(MM) && this.rangeIsValid(MM.state) ? (MM.docChanged || MM.selectionSet || rM) && this.setSelection(MM.state) : (this.pendingContextChange = null, this.reset(MM.state)), (MM.geometryChanged || MM.docChanged || MM.selectionSet) && MM.view.requestMeasure(this.measureReq)
      }
      resetRange(MM) {
        let {
          head: rM
        } = MM.selection.main;
        this.from = Math.max(0, rM - 1e4), this.to = Math.min(MM.doc.length, rM + 1e4)
      }
      reset(MM) {
        this.resetRange(MM), this.editContext.updateText(0, this.editContext.text.length, MM.doc.sliceString(this.from, this.to)), this.setSelection(MM)
      }
      revertPending(MM) {
        let rM = this.pendingContextChange;
        this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(rM.from), this.toContextPos(rM.from + rM.insert.length), MM.doc.sliceString(rM.from, rM.to))
      }
      setSelection(MM) {
        let {
          main: rM
        } = MM.selection, iM = this.toContextPos(Math.max(this.from, Math.min(this.to, rM.anchor))), OM = this.toContextPos(rM.head);
        this.editContext.selectionStart == iM && this.editContext.selectionEnd == OM || this.editContext.updateSelection(iM, OM)
      }
      rangeIsValid(MM) {
        let {
          head: rM
        } = MM.selection.main;
        return !(this.from > 0 && rM - this.from < 500 || this.to < MM.doc.length && this.to - rM < 500 || this.to - this.from > 3e4)
      }
      toEditorPos(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.to - this.from;
        MM = Math.min(MM, rM);
        let iM = this.composing;
        return iM && iM.drifted ? iM.editorBase + (MM - iM.contextBase) : MM + this.from
      }
      toContextPos(MM) {
        let rM = this.composing;
        return rM && rM.drifted ? rM.contextBase + (MM - rM.editorBase) : MM - this.from
      }
      destroy() {
        for (let MM in this.handlers) this.editContext.removeEventListener(MM, this.handlers[MM])
      }
    }
    class gS {
      get state() {
        return this.viewState.state
      }
      get viewport() {
        return this.viewState.viewport
      }
      get A_() {
        return this.viewState.A_
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
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var rM;
        this.plugins = [], this.pluginMap = new Map, this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), MM.parent && MM.parent.appendChild(this.dom);
        let {
          dispatch: iM
        } = MM;
        this.dispatchTransactions = MM.dispatchTransactions || iM && (MM => MM.forEach((MM => iM(MM, this)))) || (MM => this.update(MM)), this.dispatch = this.dispatch.bind(this), this._root = MM.root || function(MM) {
          for (; MM;) {
            if (MM && (9 == MM.nodeType || 11 == MM.nodeType && MM.host)) return MM;
            MM = MM.assignedSlot || MM.parentNode
          }
          return null
        }(MM.parent) || document, this.viewState = new jS(this, MM.state || OM.p.create(MM)), MM.scrollTo && MM.scrollTo.is(vr) && (this.viewState.scrollTarget = MM.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(Kr).map((MM => new Tr(MM)));
        for (let OM of this.plugins) OM.update(this);
        this.observer = new eS(this), this.inputState = new zO(this), this.inputState.ensureHandlers(this.plugins), this.docView = new fi(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), (null === (rM = document.fonts) || void 0 === rM ? void 0 : rM.ready) && document.fonts.ready.then((() => {
          this.viewState.mustMeasureContent = "refresh", this.requestMeasure()
        }))
      }
      dispatch() {
        for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
        let SM = 1 == rM.length && rM[0] instanceof OM.M ? rM : 1 == rM.length && Array.isArray(rM[0]) ? rM[0] : [this.state.update(...rM)];
        this.dispatchTransactions(SM, this)
      }
      update(MM) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        let rM, iM = !1,
          SM = !1,
          jM = this.state;
        for (let OM of MM) {
          if (OM.startState != jM) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
          jM = OM.state
        }
        if (this.destroyed) return void(this.viewState.state = jM);
        let aM = this.hasFocus,
          PM = 0,
          nM = null;
        MM.some((MM => MM.annotation(WO))) ? (this.inputState.notifiedFocused = aM, PM = 1) : aM != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = aM, nM = sO(jM, aM), nM || (PM = 1));
        let QM = this.observer.delayedAndroidKey,
          zM = null;
        if (QM ? (this.observer.clearDelayedAndroidKey(), zM = this.observer.readChange(), (zM && !this.state.doc.eq(jM.doc) || !this.state.selection.eq(jM.selection)) && (zM = null)) : this.observer.clear(), jM.facet(OM.p.phrases) != this.state.facet(OM.p.phrases)) return this.setState(jM);
        rM = zi.create(this, jM, MM), rM.flags |= PM;
        let LM = this.viewState.scrollTarget;
        try {
          this.updateState = 2;
          for (let rM of MM) {
            if (LM && (LM = LM.map(rM.changes)), rM.scrollIntoView) {
              let {
                main: MM
              } = rM.state.selection, {
                x: iM,
                y: SM
              } = this.state.facet(gS.cursorScrollMargin);
              LM = new xr(MM.empty ? MM : OM.l.cursor(MM.head, MM.head > MM.anchor ? -1 : 1), "nearest", "nearest", SM, iM)
            }
            for (let MM of rM.effects) MM.is(vr) && (LM = MM.value.clip(this.state))
          }
          this.viewState.update(rM, LM), this.bidiCache = pS.update(this.bidiCache, rM.changes), rM.empty || (this.updatePlugins(rM), this.inputState.update(rM)), iM = this.docView.update(rM), this.state.facet(ni) != this.styleModules && this.mountStyles(), SM = this.updateAttrs(), this.showAnnouncements(MM), this.docView.updateSelection(iM, MM.some((MM => MM.isUserEvent("select.pointer"))))
        } finally {
          this.updateState = 0
        }
        if (rM.startState.facet(HS) != rM.state.facet(HS) && (this.viewState.mustMeasureContent = !0), (iM || SM || LM || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), iM && this.docViewUpdate(), !rM.empty)
          for (let OM of this.state.facet(Dr)) try {
            OM(rM)
          } catch (mM) {
            Br(this.state, mM, "update listener")
          }(nM || zM) && Promise.resolve().then((() => {
            nM && this.state == nM.startState && this.dispatch(nM), zM && !aO(this, zM) && QM.force && Sr(this.contentDOM, QM.key, QM.keyCode)
          }))
      }
      setState(MM) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
        if (this.destroyed) return void(this.viewState.state = MM);
        this.updateState = 2;
        let rM = this.hasFocus;
        try {
          for (let MM of this.plugins) MM.destroy(this);
          this.viewState = new jS(this, MM), this.plugins = MM.facet(Kr).map((MM => new Tr(MM))), this.pluginMap.clear();
          for (let MM of this.plugins) MM.update(this);
          this.docView.destroy(), this.docView = new fi(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = []
        } finally {
          this.updateState = 0
        }
        rM && this.focus(), this.requestMeasure()
      }
      updatePlugins(MM) {
        let rM = MM.startState.facet(Kr),
          iM = MM.state.facet(Kr);
        if (rM != iM) {
          let OM = [];
          for (let SM of iM) {
            let iM = rM.indexOf(SM);
            if (iM < 0) OM.push(new Tr(SM));
            else {
              let rM = this.plugins[iM];
              rM.mustUpdate = MM, OM.push(rM)
            }
          }
          for (let rM of this.plugins) rM.mustUpdate != MM && rM.destroy(this);
          this.plugins = OM, this.pluginMap.clear()
        } else
          for (let OM of this.plugins) OM.mustUpdate = MM;
        for (let OM = 0; OM < this.plugins.length; OM++) this.plugins[OM].update(this);
        rM != iM && this.inputState.ensureHandlers(this.plugins)
      }
      docViewUpdate() {
        for (let rM of this.plugins) {
          let iM = rM.value;
          if (iM && iM.docViewUpdate) try {
            iM.docViewUpdate(this)
          } catch (MM) {
            Br(this.state, MM, "doc view update listener")
          }
        }
      }
      measure() {
        let MM = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.destroyed) return;
        if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) return this.measureScheduled = -1, void this.requestMeasure();
        this.measureScheduled = 0, MM && this.observer.forceFlush();
        let rM = null,
          iM = this.viewState.scrollParent,
          OM = this.viewState.getScrollOffset(),
          {
            scrollAnchorPos: SM,
            scrollAnchorHeight: jM
          } = this.viewState;
        Math.abs(OM - this.viewState.scrollOffset) > 1 && (jM = -1), this.viewState.scrollAnchorHeight = -1;
        try {
          for (let MM = 0;; MM++) {
            if (jM < 0)
              if (jr(iM || this.win)) SM = -1, jM = this.viewState.heightMap.height;
              else {
                let MM = this.viewState.scrollAnchorAt(OM);
                SM = MM.from, jM = MM.top
              } this.updateState = 1;
            let PM = this.viewState.measure();
            if (!PM && !this.measureRequests.length && null == this.viewState.scrollTarget) break;
            if (MM > 5) {
              console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
              break
            }
            let nM = [];
            4 & PM || ([this.measureRequests, nM] = [nM, this.measureRequests]);
            let QM = nM.map((MM => {
                try {
                  return MM.read(this)
                } catch (rM) {
                  return Br(this.state, rM), RS
                }
              })),
              zM = zi.create(this, this.state, []),
              LM = !1;
            zM.flags |= PM, rM ? rM.flags |= PM : rM = zM, this.updateState = 2, zM.empty || (this.updatePlugins(zM), this.inputState.update(zM), this.updateAttrs(), LM = this.docView.update(zM), LM && this.docViewUpdate());
            for (let MM = 0; MM < nM.length; MM++)
              if (QM[MM] != RS) try {
                let rM = nM[MM];
                rM.write && rM.write(QM[MM], this)
              } catch (aM) {
                Br(this.state, aM)
              }
            if (LM && this.docView.updateSelection(!0), !zM.viewportChanged && 0 == this.measureRequests.length) {
              if (this.viewState.editorHeight) {
                if (this.viewState.scrollTarget) {
                  this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, jM = -1;
                  continue
                } {
                  let MM = ((SM < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(SM).top) - jM) / this.scaleY;
                  if ((MM > 1 || MM < -1) && (iM == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                    OM += MM, iM ? iM.scrollTop += MM : this.win.scrollBy(0, MM), jM = -1;
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
        if (rM && !rM.empty)
          for (let PM of this.state.facet(Dr)) PM(rM)
      }
      get themeClasses() {
        return JS + " " + (this.state.facet(hS) ? yS : dS) + " " + this.state.facet(HS)
      }
      updateAttrs() {
        let MM = WS(this, Vr, {
            class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
          }),
          rM = {
            spellcheck: "false",
            autocorrect: "off",
            autocapitalize: "off",
            writingsuggestions: "false",
            translate: "no",
            contenteditable: this.state.facet(Xr) ? "true" : "false",
            class: "cm-content",
            style: `${eM.tabSize}: ${this.state.tabSize}`,
            role: "textbox",
            "aria-multiline": "true"
          };
        this.state.readOnly && (rM["aria-readonly"] = "true"), WS(this, cr, rM);
        let iM = this.observer.ignore((() => {
          let iM = gM(this.contentDOM, this.contentAttrs, rM),
            OM = gM(this.dom, this.editorAttrs, MM);
          return iM || OM
        }));
        return this.editorAttrs = MM, this.contentAttrs = rM, iM
      }
      showAnnouncements(MM) {
        let rM = !0;
        for (let iM of MM)
          for (let MM of iM.effects)
            if (MM.is(gS.announce)) {
              rM && (this.announceDOM.textContent = ""), rM = !1, this.announceDOM.appendChild(document.createElement("div")).textContent = MM.value
            }
      }
      mountStyles() {
        this.styleModules = this.state.facet(ni);
        let MM = this.state.facet(gS.cspNonce);
        SM.b.mount(this.root, this.styleModules.concat(US).reverse(), MM ? {
          nonce: MM
        } : void 0)
      }
      readMeasured() {
        if (2 == this.updateState) throw new Error("Reading the editor layout isn't allowed during an update");
        0 == this.updateState && this.measureScheduled > -1 && this.measure(!1)
      }
      requestMeasure(MM) {
        if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame((() => this.measure()))), MM) {
          if (this.measureRequests.indexOf(MM) > -1) return;
          if (null != MM.key)
            for (let rM = 0; rM < this.measureRequests.length; rM++)
              if (this.measureRequests[rM].key === MM.key) return void(this.measureRequests[rM] = MM);
          this.measureRequests.push(MM)
        }
      }
      plugin(MM) {
        let rM = this.pluginMap.get(MM);
        return (void 0 === rM || rM && rM.plugin != MM) && this.pluginMap.set(MM, rM = this.plugins.find((rM => rM.plugin == MM)) || null), rM && rM.update(this).value
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
      elementAtHeight(MM) {
        return this.readMeasured(), this.viewState.elementAtHeight(MM)
      }
      lineBlockAtHeight(MM) {
        return this.readMeasured(), this.viewState.lineBlockAtHeight(MM)
      }
      get viewportLineBlocks() {
        return this.viewState.viewportLines
      }
      lineBlockAt(MM) {
        return this.viewState.lineBlockAt(MM)
      }
      get contentHeight() {
        return this.viewState.contentHeight
      }
      moveByChar(MM, rM, iM) {
        return Ki(this, MM, Bi(this, MM, rM, iM))
      }
      moveByGroup(MM, rM) {
        return Ki(this, MM, Bi(this, MM, rM, (rM => function(MM, rM, iM) {
          let SM = MM.state.charCategorizer(rM),
            jM = SM(iM);
          return MM => {
            let rM = SM(MM);
            return jM == OM.h.Space && (jM = rM), jM == rM
          }
        }(this, MM.head, rM))))
      }
      visualLineSide(MM, rM) {
        let iM = this.bidiSpans(MM),
          SM = this.textDirectionAt(MM.from),
          jM = iM[rM ? iM.length - 1 : 0];
        return OM.l.cursor(jM.side(rM, SM) + MM.from, jM.forward(!rM, SM) ? 1 : -1)
      }
      moveToLineBoundary(MM, rM) {
        return function(MM, rM, iM, SM) {
          let jM = Fi(MM, rM.head, rM.assoc || -1),
            aM = SM && jM.type == pM.Text && (MM.lineWrapping || jM.widgetLineBreaks) ? MM.coordsAtPos(rM.assoc < 0 && rM.head > jM.from ? rM.head - 1 : rM.head) : null;
          if (aM) {
            let rM = MM.dom.getBoundingClientRect(),
              SM = MM.textDirectionAt(jM.from),
              PM = MM.posAtCoords({
                x: iM == (SM == Qr.LTR) ? rM.right - 1 : rM.left + 1,
                y: (aM.top + aM.bottom) / 2
              });
            if (null != PM) return OM.l.cursor(PM, iM ? -1 : 1)
          }
          return OM.l.cursor(iM ? jM.to : jM.from, iM ? -1 : 1)
        }(this, MM, rM, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2])
      }
      moveVertically(MM, rM, iM) {
        return Ki(this, MM, function(MM, rM, iM, SM) {
          let jM = rM.head,
            aM = iM ? 1 : -1;
          if (jM == (iM ? MM.state.doc.length : 0)) return OM.l.cursor(jM, rM.assoc);
          let PM, nM = rM.goalColumn,
            QM = MM.contentDOM.getBoundingClientRect(),
            zM = MM.coordsAtPos(jM, rM.assoc || ((rM.empty ? iM : rM.head == rM.from) ? 1 : -1)),
            LM = MM.documentTop;
          if (zM) null == nM && (nM = zM.left - QM.left), PM = aM < 0 ? zM.top : zM.bottom;
          else {
            let rM = MM.viewState.lineBlockAt(jM);
            null == nM && (nM = Math.min(QM.right - QM.left, MM.defaultCharacterWidth * (jM - rM.from))), PM = (aM < 0 ? rM.top : rM.bottom) + LM
          }
          let mM = QM.left + nM,
            HM = MM.viewState.heightOracle.textHeight >> 1,
            hM = null !== SM && void 0 !== SM ? SM : HM;
          for (let JM = 0;; JM += HM) {
            let rM = PM + (hM + JM) * aM,
              SM = Ti(MM, {
                x: mM,
                y: rM
              }, !1, aM);
            if (iM ? rM > QM.bottom : rM < QM.top) return OM.l.cursor(SM.pos, SM.assoc);
            let jM = MM.coordsAtPos(SM.pos, SM.assoc),
              zM = jM ? (jM.top + jM.bottom) / 2 : 0;
            if (!jM || (iM ? zM > PM : zM < PM)) return OM.l.cursor(SM.pos, SM.assoc, void 0, nM)
          }
        }(this, MM, rM, iM))
      }
      domAtPos(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return this.docView.domAtPos(MM, rM)
      }
      posAtDOM(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.docView.posFromDOM(MM, rM)
      }
      posAtCoords(MM) {
        let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this.readMeasured();
        let iM = Ti(this, MM, rM);
        return iM && iM.pos
      }
      posAndSideAtCoords(MM) {
        let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return this.readMeasured(), Ti(this, MM, rM)
      }
      coordsAtPos(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.readMeasured();
        let iM = this.docView.coordsAt(MM, rM);
        if (!iM || iM.left == iM.right) return iM;
        let OM = this.state.doc.lineAt(MM),
          SM = this.bidiSpans(OM);
        return KM(iM, SM[Er.find(SM, MM - OM.from, -1, rM)].dir == Qr.LTR == rM > 0)
      }
      coordsForChar(MM) {
        return this.readMeasured(), this.docView.coordsForChar(MM)
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
      textDirectionAt(MM) {
        return !this.state.facet(Yr) || MM < this.viewport.from || MM > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(MM))
      }
      get lineWrapping() {
        return this.viewState.heightOracle.lineWrapping
      }
      bidiSpans(MM) {
        if (MM.length > uS) return wr(MM.length);
        let rM, iM = this.textDirectionAt(MM.from);
        for (let SM of this.bidiCache)
          if (SM.from == MM.from && SM.dir == iM && (SM.fresh || Ur(SM.isolates, rM = ji(this, MM)))) return SM.order;
        rM || (rM = ji(this, MM));
        let OM = br(MM.text, iM, rM);
        return this.bidiCache.push(new pS(MM.from, MM.to, iM, rM, !0, OM)), OM
      }
      get hasFocus() {
        var MM;
        return (this.dom.ownerDocument.hasFocus() || eM.safari && (null === (MM = this.inputState) || void 0 === MM ? void 0 : MM.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM
      }
      focus() {
        this.observer.ignore((() => {
          ir(this.contentDOM), this.docView.updateSelection()
        }))
      }
      setRoot(MM) {
        this._root != MM && (this._root = MM, this.observer.setWindow((9 == MM.nodeType ? MM : MM.ownerDocument).defaultView || window), this.mountStyles())
      }
      destroy() {
        this.root.activeElement == this.contentDOM && this.contentDOM.blur();
        for (let MM of this.plugins) MM.destroy(this);
        this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0
      }
      static scrollIntoView(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var iM, SM, jM, aM;
        return vr.of(new xr("number" == typeof MM ? OM.l.cursor(MM) : MM, null !== (iM = rM.y) && void 0 !== iM ? iM : "nearest", null !== (SM = rM.x) && void 0 !== SM ? SM : "nearest", null !== (jM = rM.yMargin) && void 0 !== jM ? jM : 5, null !== (aM = rM.xMargin) && void 0 !== aM ? aM : 5))
      }
      scrollSnapshot() {
        let {
          scrollTop: MM,
          scrollLeft: rM
        } = this.scrollDOM, iM = this.viewState.scrollAnchorAt(MM);
        return vr.of(new xr(OM.l.cursor(iM.from), "start", "start", iM.top - MM, rM, !0))
      }
      setTabFocusMode(MM) {
        null == MM ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof MM ? this.inputState.tabFocusMode = MM ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + MM)
      }
      static domEventHandlers(MM) {
        return qr.define((() => ({})), {
          eventHandlers: MM
        })
      }
      static domEventObservers(MM) {
        return qr.define((() => ({})), {
          eventObservers: MM
        })
      }
      static theme(MM, rM) {
        let iM = SM.b.newName(),
          OM = [HS.of(iM), ni.of(ES(`.${iM}`, MM))];
        return rM && rM.dark && OM.push(hS.of(!0)), OM
      }
      static baseTheme(MM) {
        return OM.y.lowest(ni.of(ES("." + JS, MM, lS)))
      }
      static findFromDOM(MM) {
        var rM;
        let iM = MM.querySelector(".cm-content"),
          OM = iM && mi.get(iM) || mi.get(MM);
        return (null === (rM = null === OM || void 0 === OM ? void 0 : OM.root) || void 0 === rM ? void 0 : rM.view) || null
      }
    }
    gS.styleModule = ni, gS.inputHandler = kr, gS.clipboardInputFilter = or, gS.clipboardOutputFilter = fr, gS.scrollHandler = Ar, gS.focusChangeEffect = Zr, gS.perLineTextDirection = Yr, gS.exceptionSink = sr, gS.updateListener = Dr, gS.editable = Xr, gS.mouseSelectionStyle = Wr, gS.dragMovesSelection = pr, gS.clickAddsSelectionRange = Rr, gS.ij = Mi, gS.blockWrappers = ri, gS.outerDecorations = ii, gS.atomicRanges = Oi, gS.bidiIsolatedRanges = Si, gS.cursorScrollMargin = OM.s.define({
      combine: MM => {
        let rM = 5,
          iM = 5;
        for (let OM of MM) "number" == typeof OM ? rM = iM = OM : ({
          x: rM,
          y: iM
        } = OM);
        return {
          x: rM,
          y: iM
        }
      }
    }), gS.scrollMargins = ai, gS.darkTheme = hS, gS.cspNonce = OM.s.define({
      combine: MM => MM.length ? MM[0] : ""
    }), gS.contentAttributes = cr, gS.editorAttributes = Vr, gS.lineWrapping = gS.contentAttributes.of({
      class: "cm-lineWrapping"
    }), gS.announce = OM.G.define();
    const uS = 4096,
      RS = {};
    class pS {
      constructor(MM, rM, iM, OM, SM, jM) {
        this.from = MM, this.to = rM, this.dir = iM, this.isolates = OM, this.fresh = SM, this.order = jM
      }
      static update(MM, rM) {
        if (rM.empty && !MM.some((MM => MM.fresh))) return MM;
        let iM = [],
          OM = MM.length ? MM[MM.length - 1].dir : Qr.LTR;
        for (let SM = Math.max(0, MM.length - 10); SM < MM.length; SM++) {
          let jM = MM[SM];
          jM.dir != OM || rM.touchesRange(jM.from, jM.to) || iM.push(new pS(rM.mapPos(jM.from, 1), rM.mapPos(jM.to, -1), jM.dir, jM.isolates, !1, jM.order))
        }
        return iM
      }
    }

    function WS(MM, rM, iM) {
      for (let OM = MM.state.facet(rM), SM = OM.length - 1; SM >= 0; SM--) {
        let rM = OM[SM],
          jM = "function" == typeof rM ? rM(MM) : rM;
        jM && bM(jM, iM)
      }
      return iM
    }
    const sS = eM.mac ? "mac" : eM.windows ? "win" : eM.linux ? "linux" : "key";

    function DS(MM, rM, iM) {
      return rM.altKey && (MM = "Alt-" + MM), rM.ctrlKey && (MM = "Ctrl-" + MM), rM.metaKey && (MM = "Meta-" + MM), !1 !== iM && rM.shiftKey && (MM = "Shift-" + MM), MM
    }
    const kS = OM.y.default(gS.domEventHandlers({
        keydown: (MM, rM) => vS(fS(rM.state), MM, rM, "editor")
      })),
      ZS = OM.s.define({
        enables: kS
      }),
      oS = new WeakMap;

    function fS(MM) {
      let rM = MM.facet(ZS),
        iM = oS.get(rM);
      return iM || oS.set(rM, iM = function(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : sS,
          iM = Object.create(null),
          OM = Object.create(null),
          SM = (MM, rM) => {
            let iM = OM[MM];
            if (null == iM) OM[MM] = rM;
            else if (iM != rM) throw new Error("Key binding " + MM + " is used both as a regular binding and as a multi-stroke prefix")
          },
          jM = (MM, OM, jM, aM, PM) => {
            var nM, QM;
            let zM = iM[MM] || (iM[MM] = Object.create(null)),
              LM = OM.split(/ (?!$)/).map((MM => function(MM, rM) {
                const iM = MM.split(/-(?!$)/);
                let OM, SM, jM, aM, PM = iM[iM.length - 1];
                "Space" == PM && (PM = " ");
                for (let nM = 0; nM < iM.length - 1; ++nM) {
                  const MM = iM[nM];
                  if (/^(cmd|meta|m)$/i.test(MM)) aM = !0;
                  else if (/^a(lt)?$/i.test(MM)) OM = !0;
                  else if (/^(c|ctrl|control)$/i.test(MM)) SM = !0;
                  else if (/^s(hift)?$/i.test(MM)) jM = !0;
                  else {
                    if (!/^mod$/i.test(MM)) throw new Error("Unrecognized modifier name: " + MM);
                    "mac" == rM ? aM = !0 : SM = !0
                  }
                }
                return OM && (PM = "Alt-" + PM), SM && (PM = "Ctrl-" + PM), aM && (PM = "Meta-" + PM), jM && (PM = "Shift-" + PM), PM
              }(MM, rM)));
            for (let rM = 1; rM < LM.length; rM++) {
              let iM = LM.slice(0, rM).join(" ");
              SM(iM, !0), zM[iM] || (zM[iM] = {
                preventDefault: !0,
                stopPropagation: !1,
                run: [rM => {
                  let OM = NS = {
                    view: rM,
                    prefix: iM,
                    scope: MM
                  };
                  return setTimeout((() => {
                    NS == OM && (NS = null)
                  }), AS), !0
                }]
              })
            }
            let mM = LM.join(" ");
            SM(mM, !1);
            let HM = zM[mM] || (zM[mM] = {
              preventDefault: !1,
              stopPropagation: !1,
              run: (null === (QM = null === (nM = zM._any) || void 0 === nM ? void 0 : nM.run) || void 0 === QM ? void 0 : QM.slice()) || []
            });
            jM && HM.run.push(jM), aM && (HM.preventDefault = !0), PM && (HM.stopPropagation = !0)
          };
        for (let aM of MM) {
          let MM = aM.scope ? aM.scope.split(" ") : ["editor"];
          if (aM.any)
            for (let rM of MM) {
              let MM = iM[rM] || (iM[rM] = Object.create(null));
              MM._any || (MM._any = {
                preventDefault: !1,
                stopPropagation: !1,
                run: []
              });
              let {
                any: OM
              } = aM;
              for (let rM in MM) MM[rM].run.push((MM => OM(MM, xS)))
            }
          let OM = aM[rM] || aM.key;
          if (OM)
            for (let rM of MM) jM(rM, OM, aM.run, aM.preventDefault, aM.stopPropagation), aM.shift && jM(rM, "Shift-" + OM, aM.shift, aM.preventDefault, aM.stopPropagation)
        }
        return iM
      }(rM.reduce(((MM, rM) => MM.concat(rM)), []))), iM
    }

    function YS(MM, rM, iM) {
      return vS(fS(MM.state), rM, MM, iM)
    }
    let NS = null;
    const AS = 4e3;
    let xS = null;

    function vS(MM, rM, iM, SM) {
      xS = rM;
      let QM = function(MM) {
          var rM = !(PM && MM.metaKey && MM.shiftKey && !MM.ctrlKey && !MM.altKey || nM && MM.shiftKey && MM.key && 1 == MM.key.length || "Unidentified" == MM.key) && MM.key || (MM.shiftKey ? aM : jM)[MM.keyCode] || MM.key || "Unidentified";
          return "Esc" == rM && (rM = "Escape"), "Del" == rM && (rM = "Delete"), "Left" == rM && (rM = "ArrowLeft"), "Up" == rM && (rM = "ArrowUp"), "Right" == rM && (rM = "ArrowRight"), "Down" == rM && (rM = "ArrowDown"), rM
        }(rM),
        zM = (0, OM.Q)(QM, 0),
        LM = (0, OM.S)(zM) == QM.length && " " != QM,
        mM = "",
        HM = !1,
        hM = !1,
        JM = !1;
      NS && NS.view == iM && NS.scope == SM && (mM = NS.prefix + " ", JO.indexOf(rM.keyCode) < 0 && (hM = !0, NS = null));
      let dM, yM, lM = new Set,
        EM = MM => {
          if (MM) {
            for (let rM of MM.run)
              if (!lM.has(rM) && (lM.add(rM), rM(iM))) return MM.stopPropagation && (JM = !0), !0;
            MM.preventDefault && (MM.stopPropagation && (JM = !0), hM = !0)
          }
          return !1
        },
        UM = MM[SM];
      return UM && (EM(UM[mM + DS(QM, rM, !LM)]) ? HM = !0 : !LM || !(rM.altKey || rM.metaKey || rM.ctrlKey) || eM.windows && rM.ctrlKey && rM.altKey || eM.mac && rM.altKey && !rM.ctrlKey && !rM.metaKey || !(dM = jM[rM.keyCode]) || dM == QM ? LM && rM.shiftKey && EM(UM[mM + DS(QM, rM, !0)]) && (HM = !0) : (EM(UM[mM + DS(dM, rM, !0)]) || rM.shiftKey && (yM = aM[rM.keyCode]) != QM && yM != dM && EM(UM[mM + DS(yM, rM, !1)])) && (HM = !0), !HM && EM(UM._any) && (HM = !0)), hM && (HM = !0), HM && JM && rM.stopPropagation(), xS = null, HM
    }
    class FS {
      constructor(MM, rM, iM, OM, SM) {
        this.className = MM, this.left = rM, this.top = iM, this.width = OM, this.height = SM
      }
      draw() {
        let MM = document.createElement("div");
        return MM.className = this.className, this.adjust(MM), MM
      }
      update(MM, rM) {
        return rM.className == this.className && (this.adjust(MM), !0)
      }
      adjust(MM) {
        MM.style.left = this.left + "px", MM.style.top = this.top + "px", null != this.width && (MM.style.width = this.width + "px"), MM.style.height = this.height + "px"
      }
      eq(MM) {
        return this.left == MM.left && this.top == MM.top && this.width == MM.width && this.height == MM.height && this.className == MM.className
      }
      static forRange(MM, rM, iM) {
        if (iM.empty) {
          let OM = MM.coordsAtPos(iM.head, iM.assoc || 1);
          if (!OM) return [];
          let SM = BS(MM);
          return [new FS(rM, OM.left - SM.left, OM.top - SM.top, null, OM.bottom - OM.top)]
        }
        return function(MM, rM, iM) {
          if (iM.to <= MM.viewport.from || iM.from >= MM.viewport.to) return [];
          let OM = Math.max(iM.from, MM.viewport.from),
            SM = Math.min(iM.to, MM.viewport.to),
            jM = MM.textDirection == Qr.LTR,
            aM = MM.contentDOM,
            PM = aM.getBoundingClientRect(),
            nM = BS(MM),
            QM = aM.querySelector(".cm-line"),
            zM = QM && window.getComputedStyle(QM),
            LM = PM.left + (zM ? parseInt(zM.paddingLeft) + Math.min(0, parseInt(zM.textIndent)) : 0),
            mM = PM.right - (zM ? parseInt(zM.paddingRight) : 0),
            HM = Fi(MM, OM, 1),
            hM = Fi(MM, SM, -1),
            JM = HM.type == pM.Text ? HM : null,
            dM = hM.type == pM.Text ? hM : null;
          JM && (MM.lineWrapping || HM.widgetLineBreaks) && (JM = XS(MM, OM, 1, JM));
          dM && (MM.lineWrapping || hM.widgetLineBreaks) && (dM = XS(MM, SM, -1, dM));
          if (JM && dM && JM.from == dM.from && JM.to == dM.to) return lM(EM(iM.from, iM.to, JM));
          {
            let rM = JM ? EM(iM.from, null, JM) : UM(HM, !1),
              OM = dM ? EM(null, iM.to, dM) : UM(hM, !0),
              SM = [];
            return (JM || HM).to < (dM || hM).from - (JM && dM ? 1 : 0) || HM.widgetLineBreaks > 1 && rM.bottom + MM.defaultLineHeight / 2 < OM.top ? SM.push(yM(LM, rM.bottom, mM, OM.top)) : rM.bottom < OM.top && MM.elementAtHeight((rM.bottom + OM.top) / 2).type == pM.Text && (rM.bottom = OM.top = (rM.bottom + OM.top) / 2), lM(rM).concat(SM).concat(lM(OM))
          }

          function yM(MM, iM, OM, SM) {
            return new FS(rM, MM - nM.left, iM - nM.top, Math.max(0, OM - MM), SM - iM)
          }

          function lM(MM) {
            let {
              top: rM,
              bottom: iM,
              horizontal: OM
            } = MM, SM = [];
            for (let jM = 0; jM < OM.length; jM += 2) SM.push(yM(OM[jM], rM, OM[jM + 1], iM));
            return SM
          }

          function EM(rM, iM, OM) {
            let SM = 1e9,
              aM = -1e9,
              PM = [];

            function nM(rM, iM, nM, QM, zM) {
              let HM = MM.coordsAtPos(rM, rM == OM.to ? -2 : 2),
                hM = MM.coordsAtPos(nM, nM == OM.from ? 2 : -2);
              HM && hM && (SM = Math.min(HM.top, hM.top, SM), aM = Math.max(HM.bottom, hM.bottom, aM), zM == Qr.LTR ? PM.push(jM && iM ? LM : HM.left, jM && QM ? mM : hM.right) : PM.push(!jM && QM ? LM : hM.left, !jM && iM ? mM : HM.right))
            }
            let QM = null !== rM && void 0 !== rM ? rM : OM.from,
              zM = null !== iM && void 0 !== iM ? iM : OM.to;
            for (let jM of MM.A_)
              if (jM.to > QM && jM.from < zM)
                for (let OM = Math.max(jM.from, QM), SM = Math.min(jM.to, zM);;) {
                  let jM = MM.state.doc.lineAt(OM);
                  for (let aM of MM.bidiSpans(jM)) {
                    let MM = aM.from + jM.from,
                      PM = aM.to + jM.from;
                    if (MM >= SM) break;
                    PM > OM && nM(Math.max(MM, OM), null == rM && MM <= QM, Math.min(PM, SM), null == iM && PM >= zM, aM.dir)
                  }
                  if (OM = jM.to + 1, OM >= SM) break
                }
            return 0 == PM.length && nM(QM, null == rM, zM, null == iM, MM.textDirection), {
              top: SM,
              bottom: aM,
              horizontal: PM
            }
          }

          function UM(MM, rM) {
            let iM = PM.top + (rM ? MM.top : MM.bottom);
            return {
              top: iM,
              bottom: iM,
              horizontal: []
            }
          }
        }(MM, rM, iM)
      }
    }

    function BS(MM) {
      let rM = MM.scrollDOM.getBoundingClientRect();
      return {
        left: (MM.textDirection == Qr.LTR ? rM.left : rM.right - MM.scrollDOM.clientWidth * MM.scaleX) - MM.scrollDOM.scrollLeft * MM.scaleX,
        top: rM.top - MM.scrollDOM.scrollTop * MM.scaleY
      }
    }

    function XS(MM, rM, iM, OM) {
      let SM = MM.coordsAtPos(rM, 2 * iM);
      if (!SM) return OM;
      let jM = MM.dom.getBoundingClientRect(),
        aM = (SM.top + SM.bottom) / 2,
        PM = MM.posAtCoords({
          x: jM.left + 1,
          y: aM
        }),
        nM = MM.posAtCoords({
          x: jM.right - 1,
          y: aM
        });
      return null == PM || null == nM ? OM : {
        from: Math.max(OM.from, Math.min(PM, nM)),
        to: Math.min(OM.to, Math.max(PM, nM))
      }
    }
    class IS {
      constructor(MM, rM) {
        this.view = MM, this.layer = rM, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
          read: this.measure.bind(this),
          write: this.draw.bind(this)
        }, this.dom = MM.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), rM.above && this.dom.classList.add("cm-layer-above"), rM.class && this.dom.classList.add(rM.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(MM.state), MM.requestMeasure(this.measureReq), rM.mount && rM.mount(this.dom, MM)
      }
      update(MM) {
        MM.startState.facet(KS) != MM.state.facet(KS) && this.setOrder(MM.state), (this.layer.update(MM, this.dom) || MM.geometryChanged) && (this.scale(), MM.view.requestMeasure(this.measureReq))
      }
      docViewUpdate(MM) {
        !1 !== this.layer.updateOnDocViewUpdate && MM.requestMeasure(this.measureReq)
      }
      setOrder(MM) {
        let rM = 0,
          iM = MM.facet(KS);
        for (; rM < iM.length && iM[rM] != this.layer;) rM++;
        this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - rM)
      }
      measure() {
        return this.layer.markers(this.view)
      }
      scale() {
        let {
          scaleX: MM,
          scaleY: rM
        } = this.view;
        MM == this.scaleX && rM == this.scaleY || (this.scaleX = MM, this.scaleY = rM, this.dom.style.transform = `scale(${1/MM}, ${1/rM})`)
      }
      draw(MM) {
        if (MM.length != this.drawn.length || MM.some(((MM, rM) => {
            return iM = MM, OM = this.drawn[rM], !(iM.constructor == OM.constructor && iM.eq(OM));
            var iM, OM
          }))) {
          let rM = this.dom.firstChild,
            iM = 0;
          for (let OM of MM) OM.update && rM && OM.constructor && this.drawn[iM].constructor && OM.update(rM, this.drawn[iM]) ? (rM = rM.nextSibling, iM++) : this.dom.insertBefore(OM.draw(), rM);
          for (; rM;) {
            let MM = rM.nextSibling;
            rM.remove(), rM = MM
          }
          this.drawn = MM, eM.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none")
        }
      }
      destroy() {
        this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove()
      }
    }
    const KS = OM.s.define();

    function qS(MM) {
      return [qr.define((rM => new IS(rM, MM))), KS.of(MM)]
    }
    const TS = OM.s.define({
      combine: MM => (0, OM.V)(MM, {
        cursorBlinkRate: 1200,
        drawRangeCursor: !0,
        iosSelectionHandles: !0
      }, {
        cursorBlinkRate: (MM, rM) => Math.min(MM, rM),
        drawRangeCursor: (MM, rM) => MM || rM
      })
    });

    function VS() {
      let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [TS.of(MM), Mj, ij, Oj, Nr.of(!0)]
    }

    function cS(MM) {
      return MM.startState.facet(TS) != MM.state.facet(TS)
    }
    const Mj = qS({
      above: !0,
      markers(MM) {
        let {
          state: rM
        } = MM, iM = rM.facet(TS), SM = [];
        for (let jM of rM.selection.Ld) {
          let aM = jM == rM.selection.main;
          if (jM.empty || iM.drawRangeCursor && !(aM && eM.ios && iM.iosSelectionHandles)) {
            let rM = aM ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary",
              iM = jM.empty ? jM : OM.l.cursor(jM.head, jM.assoc);
            for (let OM of FS.forRange(MM, rM, iM)) SM.push(OM)
          }
        }
        return SM
      },
      update(MM, rM) {
        MM.transactions.some((MM => MM.selection)) && (rM.style.animationName = "cm-blink" == rM.style.animationName ? "cm-blink2" : "cm-blink");
        let iM = cS(MM);
        return iM && rj(MM.state, rM), MM.docChanged || MM.selectionSet || iM
      },
      mount(MM, rM) {
        rj(rM.state, MM)
      },
      class: "cm-cursorLayer"
    });

    function rj(MM, rM) {
      rM.style.animationDuration = MM.facet(TS).cursorBlinkRate + "ms"
    }
    const ij = qS({
        above: !1,
        markers(MM) {
          let rM = [],
            {
              main: iM,
              Ld: SM
            } = MM.state.selection;
          for (let OM of SM)
            if (!OM.empty)
              for (let iM of FS.forRange(MM, "cm-selectionBackground", OM)) rM.push(iM);
          if (eM.ios && !iM.empty && MM.state.facet(TS).iosSelectionHandles) {
            for (let SM of FS.forRange(MM, "cm-selectionHandle cm-selectionHandle-start", OM.l.cursor(iM.from, 1))) rM.push(SM);
            for (let SM of FS.forRange(MM, "cm-selectionHandle cm-selectionHandle-end", OM.l.cursor(iM.to, 1))) rM.push(SM)
          }
          return rM
        },
        update: (MM, rM) => MM.docChanged || MM.selectionSet || MM.viewportChanged || cS(MM),
        class: "cm-selectionLayer"
      }),
      Oj = OM.y.highest(gS.theme({
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
      Sj = OM.G.define({
        map: (MM, rM) => null == MM ? null : rM.mapPos(MM)
      }),
      jj = OM.H.define({
        create: () => null,
        update: (MM, rM) => (null != MM && (MM = rM.changes.mapPos(MM)), rM.effects.reduce(((MM, rM) => rM.is(Sj) ? rM.value : MM), MM))
      }),
      aj = qr.fromClass(class {
        constructor(MM) {
          this.view = MM, this.cursor = null, this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawCursor.bind(this)
          }
        }
        update(MM) {
          var rM;
          let iM = MM.state.field(jj);
          null == iM ? null != this.cursor && (null === (rM = this.cursor) || void 0 === rM || rM.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (MM.startState.field(jj) != iM || MM.docChanged || MM.geometryChanged) && this.view.requestMeasure(this.measureReq))
        }
        readPos() {
          let {
            view: MM
          } = this, rM = MM.state.field(jj), iM = null != rM && MM.coordsAtPos(rM);
          if (!iM) return null;
          let OM = MM.scrollDOM.getBoundingClientRect();
          return {
            left: iM.left - OM.left + MM.scrollDOM.scrollLeft * MM.scaleX,
            top: iM.top - OM.top + MM.scrollDOM.scrollTop * MM.scaleY,
            height: iM.bottom - iM.top
          }
        }
        drawCursor(MM) {
          if (this.cursor) {
            let {
              scaleX: rM,
              scaleY: iM
            } = this.view;
            MM ? (this.cursor.style.left = MM.left / rM + "px", this.cursor.style.top = MM.top / iM + "px", this.cursor.style.height = MM.height / iM + "px") : this.cursor.style.left = "-100000px"
          }
        }
        destroy() {
          this.cursor && this.cursor.remove()
        }
        setDropPos(MM) {
          this.view.state.field(jj) != MM && this.view.dispatch({
            effects: Sj.of(MM)
          })
        }
      }, {
        eventObservers: {
          dragover(MM) {
            this.setDropPos(this.view.posAtCoords({
              x: MM.clientX,
              y: MM.clientY
            }))
          },
          dragleave(MM) {
            MM.target != this.view.contentDOM && this.view.contentDOM.contains(MM.relatedTarget) || this.setDropPos(null)
          },
          dragend() {
            this.setDropPos(null)
          },
          drop() {
            this.setDropPos(null)
          }
        }
      });

    function Pj() {
      return [jj, aj]
    }

    function nj(MM, rM, iM, OM, SM) {
      rM.lastIndex = 0;
      for (let jM, aM = MM.iterRange(iM, OM), PM = iM; !aM.next().done; PM += aM.value.length)
        if (!aM.lineBreak)
          for (; jM = rM.exec(aM.value);) SM(PM + jM.index, jM)
    }
    class Qj {
      constructor(MM) {
        const {
          regexp: rM,
          decoration: iM,
          decorate: OM,
          boundary: SM,
          maxLength: jM = 1e3
        } = MM;
        if (!rM.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
        if (this.regexp = rM, OM) this.addMatch = (MM, rM, iM, SM) => OM(SM, iM, iM + MM[0].length, MM, rM);
        else if ("function" == typeof iM) this.addMatch = (MM, rM, OM, SM) => {
          let jM = iM(MM, rM, OM);
          jM && SM(OM, OM + MM[0].length, jM)
        };
        else {
          if (!iM) throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
          this.addMatch = (MM, rM, OM, SM) => SM(OM, OM + MM[0].length, iM)
        }
        this.boundary = SM, this.maxLength = jM
      }
      createDeco(MM) {
        let rM = new OM.z,
          iM = rM.add.bind(rM);
        for (let {
            from: OM,
            to: SM
          }
          of
          function(MM, rM) {
            let iM = MM.A_;
            if (1 == iM.length && iM[0].from == MM.viewport.from && iM[0].to == MM.viewport.to) return iM;
            let OM = [];
            for (let {
                from: SM,
                to: jM
              }
              of iM) SM = Math.max(MM.state.doc.lineAt(SM).from, SM - rM), jM = Math.min(MM.state.doc.lineAt(jM).to, jM + rM), OM.length && OM[OM.length - 1].to >= SM ? OM[OM.length - 1].to = jM : OM.push({
              from: SM,
              to: jM
            });
            return OM
          }(MM, this.maxLength)) nj(MM.state.doc, this.regexp, OM, SM, ((rM, OM) => this.addMatch(OM, MM, rM, iM)));
        return rM.finish()
      }
      updateDeco(MM, rM) {
        let iM = 1e9,
          OM = -1;
        return MM.docChanged && MM.changes.iterChanges(((rM, SM, jM, aM) => {
          aM >= MM.view.viewport.from && jM <= MM.view.viewport.to && (iM = Math.min(jM, iM), OM = Math.max(aM, OM))
        })), MM.viewportMoved || OM - iM > 1e3 ? this.createDeco(MM.view) : OM > -1 ? this.updateRange(MM.view, rM.map(MM.changes), iM, OM) : rM
      }
      updateRange(MM, rM, iM, OM) {
        for (let SM of MM.A_) {
          let jM = Math.max(SM.from, iM),
            aM = Math.min(SM.to, OM);
          if (aM >= jM) {
            let iM = MM.state.doc.lineAt(jM),
              OM = iM.to < aM ? MM.state.doc.lineAt(aM) : iM,
              PM = Math.max(SM.from, iM.from),
              nM = Math.min(SM.to, OM.to);
            if (this.boundary) {
              for (; jM > iM.from; jM--)
                if (this.boundary.test(iM.text[jM - 1 - iM.from])) {
                  PM = jM;
                  break
                } for (; aM < OM.to; aM++)
                if (this.boundary.test(OM.text[aM - OM.from])) {
                  nM = aM;
                  break
                }
            }
            let QM, zM = [],
              LM = (MM, rM, iM) => zM.push(iM.range(MM, rM));
            if (iM == OM)
              for (this.regexp.lastIndex = PM - iM.from;
                (QM = this.regexp.exec(iM.text)) && QM.index < nM - iM.from;) this.addMatch(QM, MM, QM.index + iM.from, LM);
            else nj(MM.state.doc, this.regexp, PM, nM, ((rM, iM) => this.addMatch(iM, MM, rM, LM)));
            rM = rM.update({
              filterFrom: PM,
              filterTo: nM,
              filter: (MM, rM) => MM < PM || rM > nM,
              add: zM
            })
          }
        }
        return rM
      }
    }
    const zj = null != /x/.unicode ? "gu" : "g",
      Lj = new RegExp("[\0-\b\n-\x1f\x7f-\x9f\xad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]", zj),
      mj = {
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
    let Hj = null;
    const hj = OM.s.define({
      combine(MM) {
        let rM = (0, OM.V)(MM, {
          render: null,
          specialChars: Lj,
          addSpecialChars: null
        });
        return (rM.replaceTabs = ! function() {
          var MM;
          if (null == Hj && "undefined" != typeof document && document.body) {
            let rM = document.body.style;
            Hj = null != (null !== (MM = rM.tabSize) && void 0 !== MM ? MM : rM.MozTabSize)
          }
          return Hj || !1
        }()) && (rM.specialChars = new RegExp("\t|" + rM.specialChars.source, zj)), rM.addSpecialChars && (rM.specialChars = new RegExp(rM.specialChars.source + "|" + rM.addSpecialChars.source, zj)), rM
      }
    });

    function Jj() {
      let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [hj.of(MM), dj || (dj = qr.fromClass(class {
        constructor(MM) {
          this.view = MM, this.ij = WM.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(MM.state.facet(hj)), this.ij = this.decorator.createDeco(MM)
        }
        makeDecorator(MM) {
          return new Qj({
            regexp: MM.specialChars,
            decoration: (rM, iM, SM) => {
              let {
                doc: jM
              } = iM.state, aM = (0, OM.Q)(rM[0], 0);
              if (9 == aM) {
                let MM = jM.lineAt(SM),
                  rM = iM.state.tabSize,
                  aM = (0, OM.Y)(MM.text, rM, SM - MM.from);
                return WM.replace({
                  widget: new lj((rM - aM % rM) * this.view.defaultCharacterWidth / this.view.scaleX)
                })
              }
              return this.decorationCache[aM] || (this.decorationCache[aM] = WM.replace({
                widget: new yj(MM, aM)
              }))
            },
            boundary: MM.replaceTabs ? void 0 : /[^]/
          })
        }
        update(MM) {
          let rM = MM.state.facet(hj);
          MM.startState.facet(hj) != rM ? (this.decorator = this.makeDecorator(rM), this.ij = this.decorator.createDeco(MM.view)) : this.ij = this.decorator.updateDeco(MM, this.ij)
        }
      }, {
        ij: MM => MM.ij
      }))]
    }
    let dj = null;
    class yj extends RM {
      constructor(MM, rM) {
        super(), this.options = MM, this.code = rM
      }
      eq(MM) {
        return MM.code == this.code
      }
      toDOM(MM) {
        let rM = function(MM) {
            return MM >= 32 ? "\u2022" : 10 == MM ? "\u2424" : String.fromCharCode(9216 + MM)
          }(this.code),
          iM = MM.state.phrase("Control character") + " " + (mj[this.code] || "0x" + this.code.toString(16)),
          OM = this.options.render && this.options.render(this.code, iM, rM);
        if (OM) return OM;
        let SM = document.createElement("span");
        return SM.textContent = rM, SM.title = iM, SM.setAttribute("aria-label", iM), SM.className = "cm-specialChar", SM
      }
      ignoreEvent() {
        return !1
      }
    }
    class lj extends RM {
      constructor(MM) {
        super(), this.width = MM
      }
      eq(MM) {
        return MM.width == this.width
      }
      toDOM() {
        let MM = document.createElement("span");
        return MM.textContent = "\t", MM.className = "cm-tab", MM.style.width = this.width + "px", MM
      }
      ignoreEvent() {
        return !1
      }
    }

    function Ej() {
      return Gj
    }
    const Uj = WM.line({
        class: "cm-activeLine"
      }),
      Gj = qr.fromClass(class {
        constructor(MM) {
          this.ij = this.getDeco(MM)
        }
        update(MM) {
          (MM.docChanged || MM.selectionSet) && (this.ij = this.getDeco(MM.view))
        }
        getDeco(MM) {
          let rM = -1,
            iM = [];
          for (let OM of MM.state.selection.Ld) {
            let SM = MM.lineBlockAt(OM.head);
            SM.from > rM && (iM.push(Uj.range(SM.from)), rM = SM.from)
          }
          return WM.set(iM)
        }
      }, {
        ij: MM => MM.ij
      });
    class Cj extends RM {
      constructor(MM) {
        super(), this.content = MM
      }
      toDOM(MM) {
        let rM = document.createElement("span");
        return rM.className = "cm-placeholder", rM.style.pointerEvents = "none", rM.appendChild("string" == typeof this.content ? document.createTextNode(this.content) : "function" == typeof this.content ? this.content(MM) : this.content.cloneNode(!0)), rM.setAttribute("aria-hidden", "true"), rM
      }
      coordsAt(MM) {
        let rM = MM.firstChild ? xM(MM.firstChild) : [];
        if (!rM.length) return null;
        let iM = window.getComputedStyle(MM.parentNode),
          OM = KM(rM[0], "rtl" != iM.direction),
          SM = parseInt(iM.lineHeight);
        return OM.bottom - OM.top > 1.5 * SM ? {
          left: OM.left,
          right: OM.right,
          top: OM.top,
          bottom: OM.top + SM
        } : OM
      }
      ignoreEvent() {
        return !1
      }
    }

    function ej(MM) {
      let rM = qr.fromClass(class {
        constructor(rM) {
          this.view = rM, this.placeholder = MM ? WM.set([WM.widget({
            widget: new Cj(MM),
            side: 1
          }).range(0)]) : WM.none
        }
        get ij() {
          return this.view.state.doc.length ? WM.none : this.placeholder
        }
      }, {
        ij: MM => MM.ij
      });
      return "string" == typeof MM ? [rM, gS.contentAttributes.of({
        "aria-placeholder": MM
      })] : rM
    }
    const bj = 2e3;

    function wj(MM, rM) {
      let iM = MM.posAtCoords({
          x: rM.clientX,
          y: rM.clientY
        }, !1),
        SM = MM.state.doc.lineAt(iM),
        jM = iM - SM.from,
        aM = jM > bj ? -1 : jM == SM.length ? function(MM, rM) {
          let iM = MM.coordsAtPos(MM.viewport.from);
          return iM ? Math.round(Math.abs((iM.left - rM) / MM.defaultCharacterWidth)) : -1
        }(MM, rM.clientX) : (0, OM.Y)(SM.text, MM.state.tabSize, iM - SM.from);
      return {
        line: SM.number,
        col: aM,
        off: jM
      }
    }

    function tj(MM, rM) {
      let iM = wj(MM, rM),
        SM = MM.state.selection;
      return iM ? {
        update(MM) {
          if (MM.docChanged) {
            let rM = MM.changes.mapPos(MM.startState.doc.line(iM.line).from),
              OM = MM.state.doc.lineAt(rM);
            iM = {
              line: OM.number,
              col: iM.col,
              off: Math.min(iM.off, OM.length)
            }, SM = SM.map(MM.changes)
          }
        },
        get(rM, jM, aM) {
          let PM = wj(MM, rM);
          if (!PM) return SM;
          let nM = function(MM, rM, iM) {
            let SM = Math.min(rM.line, iM.line),
              jM = Math.max(rM.line, iM.line),
              aM = [];
            if (rM.off > bj || iM.off > bj || rM.col < 0 || iM.col < 0) {
              let PM = Math.min(rM.off, iM.off),
                nM = Math.max(rM.off, iM.off);
              for (let rM = SM; rM <= jM; rM++) {
                let iM = MM.doc.line(rM);
                iM.length <= nM && aM.push(OM.l.range(iM.from + PM, iM.to + nM))
              }
            } else {
              let PM = Math.min(rM.col, iM.col),
                nM = Math.max(rM.col, iM.col);
              for (let rM = SM; rM <= jM; rM++) {
                let iM = MM.doc.line(rM),
                  SM = (0, OM.cb)(iM.text, PM, MM.tabSize, !0);
                if (SM < 0) aM.push(OM.l.cursor(iM.to));
                else {
                  let rM = (0, OM.cb)(iM.text, nM, MM.tabSize);
                  aM.push(OM.l.range(iM.from + SM, iM.from + rM))
                }
              }
            }
            return aM
          }(MM.state, iM, PM);
          return nM.length ? aM ? OM.l.create(nM.concat(SM.Ld)) : OM.l.create(nM) : SM
        }
      } : null
    }

    function gj(MM) {
      let rM = (null === MM || void 0 === MM ? void 0 : MM.eventFilter) || (MM => MM.altKey && 0 == MM.button);
      return gS.mouseSelectionStyle.of(((MM, iM) => rM(iM) ? tj(MM, iM) : null))
    }
    const uj = {
        Alt: [18, MM => !!MM.altKey],
        Control: [17, MM => !!MM.ctrlKey],
        Shift: [16, MM => !!MM.shiftKey],
        Meta: [91, MM => !!MM.metaKey]
      },
      Rj = {
        style: "cursor: crosshair"
      };

    function pj() {
      let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [rM, iM] = uj[MM.key || "Alt"],
        OM = qr.fromClass(class {
          constructor(MM) {
            this.view = MM, this.isDown = !1
          }
          set(MM) {
            this.isDown != MM && (this.isDown = MM, this.view.update([]))
          }
        }, {
          eventObservers: {
            keydown(MM) {
              this.set(MM.keyCode == rM || iM(MM))
            },
            keyup(MM) {
              MM.keyCode != rM && iM(MM) || this.set(!1)
            },
            mousemove(MM) {
              this.set(iM(MM))
            }
          }
        });
      return [OM, gS.contentAttributes.of((MM => {
        var rM;
        return (null === (rM = MM.plugin(OM)) || void 0 === rM ? void 0 : rM.isDown) ? Rj : null
      }))]
    }
    const Wj = "-10000px";
    class sj {
      constructor(MM, rM, iM, OM) {
        this.facet = rM, this.createTooltipView = iM, this.removeTooltipView = OM, this.input = MM.state.facet(rM), this.tooltips = this.input.filter((MM => MM));
        let SM = null;
        this.tooltipViews = this.tooltips.map((MM => SM = iM(MM, SM)))
      }
      update(MM, rM) {
        var iM;
        let OM = MM.state.facet(this.facet),
          SM = OM.filter((MM => MM));
        if (OM === this.input) {
          for (let rM of this.tooltipViews) rM.update && rM.update(MM);
          return !1
        }
        let jM = [],
          aM = rM ? [] : null;
        for (let PM = 0; PM < SM.length; PM++) {
          let iM = SM[PM],
            OM = -1;
          if (iM) {
            for (let MM = 0; MM < this.tooltips.length; MM++) {
              let rM = this.tooltips[MM];
              rM && rM.create == iM.create && (OM = MM)
            }
            if (OM < 0) jM[PM] = this.createTooltipView(iM, PM ? jM[PM - 1] : null), aM && (aM[PM] = !!iM.above);
            else {
              let iM = jM[PM] = this.tooltipViews[OM];
              aM && (aM[PM] = rM[OM]), iM.update && iM.update(MM)
            }
          }
        }
        for (let PM of this.tooltipViews) jM.indexOf(PM) < 0 && (this.removeTooltipView(PM), null === (iM = PM.destroy) || void 0 === iM || iM.call(PM));
        return rM && (aM.forEach(((MM, iM) => rM[iM] = MM)), rM.length = aM.length), this.input = OM, this.tooltips = SM, this.tooltipViews = jM, !0
      }
    }

    function Dj(MM) {
      let rM = MM.dom.ownerDocument.documentElement;
      return {
        top: 0,
        left: 0,
        bottom: rM.clientHeight,
        right: rM.clientWidth
      }
    }
    const kj = OM.s.define({
        combine: MM => {
          var rM, iM, OM;
          return {
            position: eM.ios ? "absolute" : (null === (rM = MM.find((MM => MM.position))) || void 0 === rM ? void 0 : rM.position) || "fixed",
            parent: (null === (iM = MM.find((MM => MM.parent))) || void 0 === iM ? void 0 : iM.parent) || null,
            tooltipSpace: (null === (OM = MM.find((MM => MM.tooltipSpace))) || void 0 === OM ? void 0 : OM.tooltipSpace) || Dj
          }
        }
      }),
      Zj = new WeakMap,
      oj = qr.fromClass(class {
        constructor(MM) {
          this.view = MM, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
          let rM = MM.state.facet(kj);
          this.position = rM.position, this.parent = rM.parent, this.classes = MM.themeClasses, this.createContainer(), this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this
          }, this.resizeObserver = "function" == typeof ResizeObserver ? new ResizeObserver((() => this.measureSoon())) : null, this.manager = new sj(MM, Aj, ((MM, rM) => this.createTooltip(MM, rM)), (MM => {
            this.resizeObserver && this.resizeObserver.unobserve(MM.dom), MM.dom.remove()
          })), this.above = this.manager.tooltips.map((MM => !!MM.above)), this.intersectionObserver = "function" == typeof IntersectionObserver ? new IntersectionObserver((MM => {
            Date.now() > this.lastTransaction - 50 && MM.length > 0 && MM[MM.length - 1].intersectionRatio < 1 && this.measureSoon()
          }), {
            threshold: [1]
          }) : null, this.observeIntersection(), MM.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure()
        }
        createContainer() {
          this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom
        }
        observeIntersection() {
          if (this.intersectionObserver) {
            this.intersectionObserver.disconnect();
            for (let MM of this.manager.tooltipViews) this.intersectionObserver.observe(MM.dom)
          }
        }
        measureSoon() {
          this.measureTimeout < 0 && (this.measureTimeout = setTimeout((() => {
            this.measureTimeout = -1, this.maybeMeasure()
          }), 50))
        }
        update(MM) {
          MM.transactions.length && (this.lastTransaction = Date.now());
          let rM = this.manager.update(MM, this.above);
          rM && this.observeIntersection();
          let iM = rM || MM.geometryChanged,
            OM = MM.state.facet(kj);
          if (OM.position != this.position && !this.madeAbsolute) {
            this.position = OM.position;
            for (let MM of this.manager.tooltipViews) MM.dom.style.position = this.position;
            iM = !0
          }
          if (OM.parent != this.parent) {
            this.parent && this.container.remove(), this.parent = OM.parent, this.createContainer();
            for (let MM of this.manager.tooltipViews) this.container.appendChild(MM.dom);
            iM = !0
          } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
          iM && this.maybeMeasure()
        }
        createTooltip(MM, rM) {
          let iM = MM.create(this.view),
            OM = rM ? rM.dom : null;
          if (iM.dom.classList.add("cm-tooltip"), MM.arrow && !iM.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
            let MM = document.createElement("div");
            MM.className = "cm-tooltip-arrow", iM.dom.appendChild(MM)
          }
          return iM.dom.style.position = this.position, iM.dom.style.top = Wj, iM.dom.style.left = "0px", this.container.insertBefore(iM.dom, OM), iM.mount && iM.mount(this.view), this.resizeObserver && this.resizeObserver.observe(iM.dom), iM
        }
        destroy() {
          var MM, rM, iM;
          this.view.win.removeEventListener("resize", this.measureSoon);
          for (let OM of this.manager.tooltipViews) OM.dom.remove(), null === (MM = OM.destroy) || void 0 === MM || MM.call(OM);
          this.parent && this.container.remove(), null === (rM = this.resizeObserver) || void 0 === rM || rM.disconnect(), null === (iM = this.intersectionObserver) || void 0 === iM || iM.disconnect(), clearTimeout(this.measureTimeout)
        }
        readMeasure() {
          let MM = 1,
            rM = 1,
            iM = !1;
          if ("fixed" == this.position && this.manager.tooltipViews.length) {
            let {
              dom: MM
            } = this.manager.tooltipViews[0];
            if (eM.safari) {
              let rM = MM.getBoundingClientRect();
              iM = Math.abs(rM.top + 1e4) > 1 || Math.abs(rM.left) > 1
            } else iM = !!MM.offsetParent && MM.offsetParent != this.container.ownerDocument.body
          }
          if (iM || "absolute" == this.position)
            if (this.parent) {
              let iM = this.parent.getBoundingClientRect();
              iM.width && iM.height && (MM = iM.width / this.parent.offsetWidth, rM = iM.height / this.parent.offsetHeight)
            } else({
              scaleX: MM,
              scaleY: rM
            } = this.view.viewState);
          let OM = this.view.scrollDOM.getBoundingClientRect(),
            SM = Pi(this.view);
          return {
            visible: {
              left: OM.left + SM.left,
              top: OM.top + SM.top,
              right: OM.right - SM.right,
              bottom: OM.bottom - SM.bottom
            },
            parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
            pos: this.manager.tooltips.map(((MM, rM) => {
              let iM = this.manager.tooltipViews[rM];
              return iM.getCoords ? iM.getCoords(MM.pos) : this.view.coordsAtPos(MM.pos)
            })),
            size: this.manager.tooltipViews.map((MM => {
              let {
                dom: rM
              } = MM;
              return rM.getBoundingClientRect()
            })),
            space: this.view.state.facet(kj).tooltipSpace(this.view),
            scaleX: MM,
            scaleY: rM,
            makeAbsolute: iM
          }
        }
        writeMeasure(MM) {
          var rM;
          if (MM.makeAbsolute) {
            this.madeAbsolute = !0, this.position = "absolute";
            for (let MM of this.manager.tooltipViews) MM.dom.style.position = "absolute"
          }
          let {
            visible: iM,
            space: OM,
            scaleX: SM,
            scaleY: jM
          } = MM, aM = [];
          for (let PM = 0; PM < this.manager.tooltips.length; PM++) {
            let nM = this.manager.tooltips[PM],
              QM = this.manager.tooltipViews[PM],
              {
                dom: zM
              } = QM,
              LM = MM.pos[PM],
              mM = MM.size[PM];
            if (!LM || !1 !== nM.clip && (LM.bottom <= Math.max(iM.top, OM.top) || LM.top >= Math.min(iM.bottom, OM.bottom) || LM.right < Math.max(iM.left, OM.left) - .1 || LM.left > Math.min(iM.right, OM.right) + .1)) {
              zM.style.top = Wj;
              continue
            }
            let HM = nM.arrow ? QM.dom.querySelector(".cm-tooltip-arrow") : null,
              hM = HM ? 7 : 0,
              JM = mM.right - mM.left,
              dM = null !== (rM = Zj.get(QM)) && void 0 !== rM ? rM : mM.bottom - mM.top,
              yM = QM.offset || Nj,
              lM = this.view.textDirection == Qr.LTR,
              EM = mM.width > OM.right - OM.left ? lM ? OM.left : OM.right - mM.width : lM ? Math.max(OM.left, Math.min(LM.left - (HM ? 14 : 0) + yM.x, OM.right - JM)) : Math.min(Math.max(OM.left, LM.left - JM + (HM ? 14 : 0) - yM.x), OM.right - JM),
              UM = this.above[PM];
            !nM.strictSide && (UM ? LM.top - dM - hM - yM.y < OM.top : LM.bottom + dM + hM + yM.y > OM.bottom) && UM == OM.bottom - LM.bottom > LM.top - OM.top && (UM = this.above[PM] = !UM);
            let GM = (UM ? LM.top - OM.top : OM.bottom - LM.bottom) - hM;
            if (GM < dM && !1 !== QM.resize) {
              if (GM < this.view.defaultLineHeight) {
                zM.style.top = Wj;
                continue
              }
              Zj.set(QM, dM), zM.style.height = (dM = GM) / jM + "px"
            } else zM.style.height && (zM.style.height = "");
            let CM = UM ? LM.top - dM - hM - yM.y : LM.bottom + hM + yM.y,
              eM = EM + JM;
            if (!0 !== QM.overlap)
              for (let MM of aM) MM.left < eM && MM.right > EM && MM.top < CM + dM && MM.bottom > CM && (CM = UM ? MM.top - dM - 2 - hM : MM.bottom + hM + 2);
            if ("absolute" == this.position ? (zM.style.top = (CM - MM.parent.top) / jM + "px", fj(zM, (EM - MM.parent.left) / SM)) : (zM.style.top = CM / jM + "px", fj(zM, EM / SM)), HM) {
              let MM = LM.left + (lM ? yM.x : -yM.x) - (EM + 14 - 7);
              HM.style.left = MM / SM + "px"
            }!0 !== QM.overlap && aM.push({
              left: EM,
              top: CM,
              right: eM,
              bottom: CM + dM
            }), zM.classList.toggle("cm-tooltip-above", UM), zM.classList.toggle("cm-tooltip-below", !UM), QM.positioned && QM.positioned(MM.space)
          }
        }
        maybeMeasure() {
          if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
            for (let MM of this.manager.tooltipViews) MM.dom.style.top = Wj
        }
      }, {
        eventObservers: {
          scroll() {
            this.maybeMeasure()
          }
        }
      });

    function fj(MM, rM) {
      let iM = parseInt(MM.style.left, 10);
      (isNaN(iM) || Math.abs(rM - iM) > 1) && (MM.style.left = rM + "px")
    }
    const Yj = gS.baseTheme({
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
      Nj = {
        x: 0,
        y: 0
      },
      Aj = OM.s.define({
        enables: [oj, Yj]
      }),
      xj = OM.s.define({
        combine: MM => MM.reduce(((MM, rM) => MM.concat(rM)), [])
      });
    class vj {
      static create(MM) {
        return new vj(MM)
      }
      constructor(MM) {
        this.view = MM, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new sj(MM, xj, ((MM, rM) => this.createHostedView(MM, rM)), (MM => MM.dom.remove()))
      }
      createHostedView(MM, rM) {
        let iM = MM.create(this.view);
        return iM.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(iM.dom, rM ? rM.dom.nextSibling : this.dom.firstChild), this.mounted && iM.mount && iM.mount(this.view), iM
      }
      mount(MM) {
        for (let rM of this.manager.tooltipViews) rM.mount && rM.mount(MM);
        this.mounted = !0
      }
      positioned(MM) {
        for (let rM of this.manager.tooltipViews) rM.positioned && rM.positioned(MM)
      }
      update(MM) {
        this.manager.update(MM)
      }
      destroy() {
        var MM;
        for (let rM of this.manager.tooltipViews) null === (MM = rM.destroy) || void 0 === MM || MM.call(rM)
      }
      passProp(MM) {
        let rM;
        for (let iM of this.manager.tooltipViews) {
          let OM = iM[MM];
          if (void 0 !== OM)
            if (void 0 === rM) rM = OM;
            else if (rM !== OM) return
        }
        return rM
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
    const Fj = Aj.compute([xj], (MM => {
      let rM = MM.facet(xj);
      return 0 === rM.length ? null : {
        pos: Math.min(...rM.map((MM => MM.pos))),
        end: Math.max(...rM.map((MM => {
          var rM;
          return null !== (rM = MM.end) && void 0 !== rM ? rM : MM.pos
        }))),
        create: vj.create,
        above: rM[0].above,
        arrow: rM.some((MM => MM.arrow))
      }
    }));
    class Bj {
      constructor(MM, rM, iM, OM, SM) {
        this.view = MM, this.source = rM, this.field = iM, this.setHover = OM, this.hoverTime = SM, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
          x: 0,
          y: 0,
          target: MM.dom,
          time: 0
        }, this.checkHover = this.checkHover.bind(this), MM.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), MM.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this))
      }
      update() {
        this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout((() => this.startHover()), 20))
      }
      get active() {
        return this.view.state.field(this.field)
      }
      checkHover() {
        if (this.hoverTimeout = -1, this.active.length) return;
        let MM = Date.now() - this.lastMove.time;
        MM < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - MM) : this.startHover()
      }
      startHover() {
        clearTimeout(this.restartTimeout);
        let {
          view: MM,
          lastMove: rM
        } = this, iM = MM.docView.tile.nearest(rM.target);
        if (!iM) return;
        let OM, SM = 1;
        if (iM.isWidget()) OM = iM.posAtStart;
        else {
          if (OM = MM.posAtCoords(rM), null == OM) return;
          let iM = MM.coordsAtPos(OM);
          if (!iM || rM.y < iM.top || rM.y > iM.bottom || rM.x < iM.left - MM.defaultCharacterWidth || rM.x > iM.right + MM.defaultCharacterWidth) return;
          let jM = MM.bidiSpans(MM.state.doc.lineAt(OM)).find((MM => MM.from <= OM && MM.to >= OM)),
            aM = jM && jM.dir == Qr.RTL ? -1 : 1;
          SM = rM.x < iM.left ? -aM : aM
        }
        let jM = this.source(MM, OM, SM);
        if (null === jM || void 0 === jM ? void 0 : jM.then) {
          let rM = this.pending = {
            pos: OM
          };
          jM.then((iM => {
            this.pending == rM && (this.pending = null, !iM || Array.isArray(iM) && !iM.length || MM.dispatch({
              effects: this.setHover.of(Array.isArray(iM) ? iM : [iM])
            }))
          }), (rM => Br(MM.state, rM, "hover tooltip")))
        } else !jM || Array.isArray(jM) && !jM.length || MM.dispatch({
          effects: this.setHover.of(Array.isArray(jM) ? jM : [jM])
        })
      }
      get tooltip() {
        let MM = this.view.plugin(oj),
          rM = MM ? MM.manager.tooltips.findIndex((MM => MM.create == vj.create)) : -1;
        return rM > -1 ? MM.manager.tooltipViews[rM] : null
      }
      mousemove(MM) {
        var rM, iM;
        this.lastMove = {
          x: MM.clientX,
          y: MM.clientY,
          target: MM.target,
          time: Date.now()
        }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
        let {
          active: OM,
          tooltip: SM
        } = this;
        if (OM.length && SM && ! function(MM, rM) {
            let iM, {
              left: OM,
              right: SM,
              top: jM,
              bottom: aM
            } = MM.getBoundingClientRect();
            if (iM = MM.querySelector(".cm-tooltip-arrow")) {
              let MM = iM.getBoundingClientRect();
              jM = Math.min(MM.top, jM), aM = Math.max(MM.bottom, aM)
            }
            return rM.clientX >= OM - Xj && rM.clientX <= SM + Xj && rM.clientY >= jM - Xj && rM.clientY <= aM + Xj
          }(SM.dom, MM) || this.pending) {
          let {
            pos: SM
          } = OM[0] || this.pending, jM = null !== (iM = null === (rM = OM[0]) || void 0 === rM ? void 0 : rM.end) && void 0 !== iM ? iM : SM;
          (SM == jM ? this.view.posAtCoords(this.lastMove) == SM : function(MM, rM, iM, OM, SM) {
            let jM = MM.scrollDOM.getBoundingClientRect(),
              aM = MM.documentTop + MM.documentPadding.top + MM.contentHeight;
            if (jM.left > OM || jM.right < OM || jM.top > SM || Math.min(jM.bottom, aM) < SM) return !1;
            let PM = MM.posAtCoords({
              x: OM,
              y: SM
            }, !1);
            return PM >= rM && PM <= iM
          }(this.view, SM, jM, MM.clientX, MM.clientY)) || (this.view.dispatch({
            effects: this.setHover.of([])
          }), this.pending = null)
        }
      }
      mouseleave(MM) {
        clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
        let {
          active: rM
        } = this;
        if (rM.length) {
          let {
            tooltip: rM
          } = this;
          rM && rM.dom.contains(MM.relatedTarget) ? this.watchTooltipLeave(rM.dom) : this.view.dispatch({
            effects: this.setHover.of([])
          })
        }
      }
      watchTooltipLeave(MM) {
        let rM = iM => {
          MM.removeEventListener("mouseleave", rM), this.active.length && !this.view.dom.contains(iM.relatedTarget) && this.view.dispatch({
            effects: this.setHover.of([])
          })
        };
        MM.addEventListener("mouseleave", rM)
      }
      destroy() {
        clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove)
      }
    }
    const Xj = 4;

    function Ij(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        iM = OM.G.define(),
        SM = OM.H.define({
          create: () => [],
          update(MM, SM) {
            if (MM.length && (rM.hideOnChange && (SM.docChanged || SM.selection) ? MM = [] : rM.hideOn && (MM = MM.filter((MM => !rM.hideOn(SM, MM)))), SM.docChanged)) {
              let rM = [];
              for (let iM of MM) {
                let MM = SM.changes.mapPos(iM.pos, -1, OM.v.TrackDel);
                if (null != MM) {
                  let OM = Object.assign(Object.create(null), iM);
                  OM.pos = MM, null != OM.end && (OM.end = SM.changes.mapPos(OM.end)), rM.push(OM)
                }
              }
              MM = rM
            }
            for (let rM of SM.effects) rM.is(iM) && (MM = rM.value), rM.is(qj) && (MM = []);
            return MM
          },
          provide: MM => xj.from(MM)
        });
      return {
        active: SM,
        extension: [SM, qr.define((OM => new Bj(OM, MM, SM, iM, rM.hoverTime || 300))), Fj]
      }
    }

    function Kj(MM, rM) {
      let iM = MM.plugin(oj);
      if (!iM) return null;
      let OM = iM.manager.tooltips.indexOf(rM);
      return OM < 0 ? null : iM.manager.tooltipViews[OM]
    }
    const qj = OM.G.define();
    const Tj = OM.s.define({
      combine(MM) {
        let rM, iM;
        for (let OM of MM) rM = rM || OM.topContainer, iM = iM || OM.bottomContainer;
        return {
          topContainer: rM,
          bottomContainer: iM
        }
      }
    });

    function Vj(MM, rM) {
      let iM = MM.plugin(cj),
        OM = iM ? iM.specs.indexOf(rM) : -1;
      return OM > -1 ? iM.panels[OM] : null
    }
    const cj = qr.fromClass(class {
      constructor(MM) {
        this.input = MM.state.facet(ia), this.specs = this.input.filter((MM => MM)), this.panels = this.specs.map((rM => rM(MM)));
        let rM = MM.state.facet(Tj);
        this.top = new Ma(MM, !0, rM.topContainer), this.bottom = new Ma(MM, !1, rM.bottomContainer), this.top.sync(this.panels.filter((MM => MM.top))), this.bottom.sync(this.panels.filter((MM => !MM.top)));
        for (let iM of this.panels) iM.dom.classList.add("cm-panel"), iM.mount && iM.mount()
      }
      update(MM) {
        let rM = MM.state.facet(Tj);
        this.top.container != rM.topContainer && (this.top.sync([]), this.top = new Ma(MM.view, !0, rM.topContainer)), this.bottom.container != rM.bottomContainer && (this.bottom.sync([]), this.bottom = new Ma(MM.view, !1, rM.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
        let iM = MM.state.facet(ia);
        if (iM != this.input) {
          let rM = iM.filter((MM => MM)),
            OM = [],
            SM = [],
            jM = [],
            aM = [];
          for (let iM of rM) {
            let rM, PM = this.specs.indexOf(iM);
            PM < 0 ? (rM = iM(MM.view), aM.push(rM)) : (rM = this.panels[PM], rM.update && rM.update(MM)), OM.push(rM), (rM.top ? SM : jM).push(rM)
          }
          this.specs = rM, this.panels = OM, this.top.sync(SM), this.bottom.sync(jM);
          for (let MM of aM) MM.dom.classList.add("cm-panel"), MM.mount && MM.mount()
        } else
          for (let OM of this.panels) OM.update && OM.update(MM)
      }
      destroy() {
        this.top.sync([]), this.bottom.sync([])
      }
    }, {
      provide: MM => gS.scrollMargins.of((rM => {
        let iM = rM.plugin(MM);
        return iM && {
          top: iM.top.scrollMargin(),
          bottom: iM.bottom.scrollMargin()
        }
      }))
    });
    class Ma {
      constructor(MM, rM, iM) {
        this.view = MM, this.top = rM, this.container = iM, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses()
      }
      sync(MM) {
        for (let rM of this.panels) rM.destroy && MM.indexOf(rM) < 0 && rM.destroy();
        this.panels = MM, this.syncDOM()
      }
      syncDOM() {
        if (0 == this.panels.length) return void(this.dom && (this.dom.remove(), this.dom = void 0));
        if (!this.dom) {
          this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
          let MM = this.container || this.view.dom;
          MM.insertBefore(this.dom, this.top ? MM.firstChild : null)
        }
        let MM = this.dom.firstChild;
        for (let rM of this.panels)
          if (rM.dom.parentNode == this.dom) {
            for (; MM != rM.dom;) MM = ra(MM);
            MM = MM.nextSibling
          } else this.dom.insertBefore(rM.dom, MM);
        for (; MM;) MM = ra(MM)
      }
      scrollMargin() {
        return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top)
      }
      syncClasses() {
        if (this.container && this.classes != this.view.themeClasses) {
          for (let MM of this.classes.split(" ")) MM && this.container.classList.remove(MM);
          for (let MM of (this.classes = this.view.themeClasses).split(" ")) MM && this.container.classList.add(MM)
        }
      }
    }

    function ra(MM) {
      let rM = MM.nextSibling;
      return MM.remove(), rM
    }
    const ia = OM.s.define({
      enables: cj
    });

    function Oa(MM, rM) {
      let iM, SM = new Promise((MM => iM = MM)),
        jM = MM => function(MM, rM, iM) {
          let OM = rM.content ? rM.content(MM, (() => aM(null))) : null;
          if (!OM) {
            if (OM = (0, LM.c)("form"), rM.input) {
              let MM = (0, LM.c)("input", rM.input);
              /^(text|password|number|email|tel|url)$/.test(MM.type) && MM.classList.add("cm-textfield"), MM.name || (MM.name = "input"), OM.appendChild((0, LM.c)("label", (rM.label || "") + ": ", MM))
            } else OM.appendChild(document.createTextNode(rM.label || ""));
            OM.appendChild(document.createTextNode(" ")), OM.appendChild((0, LM.c)("button", {
              class: "cm-button",
              type: "submit"
            }, rM.submitLabel || "OK"))
          }
          let SM = "FORM" == OM.nodeName ? [OM] : OM.querySelectorAll("form");
          for (let PM = 0; PM < SM.length; PM++) {
            let MM = SM[PM];
            MM.addEventListener("keydown", (rM => {
              27 == rM.keyCode ? (rM.preventDefault(), aM(null)) : 13 == rM.keyCode && (rM.preventDefault(), aM(MM))
            })), MM.addEventListener("submit", (rM => {
              rM.preventDefault(), aM(MM)
            }))
          }
          let jM = (0, LM.c)("div", OM, (0, LM.c)("button", {
            onclick: () => aM(null),
            "aria-label": MM.state.phrase("close"),
            class: "cm-dialog-close",
            type: "button"
          }, ["\xd7"]));
          rM.class && (jM.className = rM.class);

          function aM(rM) {
            jM.contains(jM.ownerDocument.activeElement) && MM.focus(), iM(rM)
          }
          return jM.classList.add("cm-dialog"), {
            dom: jM,
            top: rM.top,
            mount: () => {
              if (rM.focus) {
                let MM;
                MM = "string" == typeof rM.focus ? OM.querySelector(rM.focus) : OM.querySelector("input") || OM.querySelector("button"), MM && "select" in MM ? MM.select() : MM && "focus" in MM && MM.focus()
              }
            }
          }
        }(MM, rM, iM);
      MM.state.field(Sa, !1) ? MM.dispatch({
        effects: ja.of(jM)
      }) : MM.dispatch({
        effects: OM.G.appendConfig.of(Sa.init((() => [jM])))
      });
      let aM = aa.of(jM);
      return {
        close: aM,
        result: SM.then((rM => ((MM.win.queueMicrotask || (rM => MM.win.setTimeout(rM, 10)))((() => {
          MM.state.field(Sa).indexOf(jM) > -1 && MM.dispatch({
            effects: aM
          })
        })), rM)))
      }
    }
    const Sa = OM.H.define({
        create: () => [],
        update(MM, rM) {
          for (let iM of rM.effects) iM.is(ja) ? MM = [iM.value].concat(MM) : iM.is(aa) && (MM = MM.filter((MM => MM != iM.value)));
          return MM
        },
        provide: MM => ia.computeN([MM], (rM => rM.field(MM)))
      }),
      ja = OM.G.define(),
      aa = OM.G.define();
    class Pa extends OM.D {
      compare(MM) {
        return this == MM || this.constructor == MM.constructor && this.eq(MM)
      }
      eq(MM) {
        return !1
      }
      destroy(MM) {}
    }
    Pa.prototype.elementClass = "", Pa.prototype.toDOM = void 0, Pa.prototype.mapMode = OM.v.TrackBefore, Pa.prototype.startSide = Pa.prototype.endSide = -1, Pa.prototype.point = !0;
    const na = OM.s.define(),
      Qa = OM.s.define(),
      za = {
        class: "",
        renderEmptyElements: !1,
        elementStyle: "",
        markers: () => OM.A.empty,
        lineMarker: () => null,
        widgetMarker: () => null,
        lineMarkerChange: null,
        initialSpacer: null,
        updateSpacer: null,
        domEventHandlers: {},
        side: "before"
      },
      La = OM.s.define();

    function ma(MM) {
      return [ha(), La.of({
        ...za,
        ...MM
      })]
    }
    const Ha = OM.s.define({
      combine: MM => MM.some((MM => MM))
    });

    function ha(MM) {
      let rM = [Ja];
      return MM && !1 === MM.fixed && rM.push(Ha.of(!0)), rM
    }
    const Ja = qr.fromClass(class {
      constructor(MM) {
        this.view = MM, this.domAfter = null, this.prevViewport = MM.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = MM.state.facet(La).map((rM => new Ea(MM, rM))), this.fixed = !MM.state.facet(Ha);
        for (let rM of this.gutters) "after" == rM.config.side ? this.getDOMAfter().appendChild(rM.dom) : this.dom.appendChild(rM.dom);
        this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), MM.scrollDOM.insertBefore(this.dom, MM.contentDOM)
      }
      getDOMAfter() {
        return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter
      }
      update(MM) {
        if (this.updateGutters(MM)) {
          let rM = this.prevViewport,
            iM = MM.view.viewport,
            OM = Math.min(rM.to, iM.to) - Math.max(rM.from, iM.from);
          this.syncGutters(OM < .8 * (iM.to - iM.from))
        }
        if (MM.geometryChanged) {
          let MM = this.view.contentHeight / this.view.scaleY + "px";
          this.dom.style.minHeight = MM, this.domAfter && (this.domAfter.style.minHeight = MM)
        }
        this.view.state.facet(Ha) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = MM.view.viewport
      }
      syncGutters(MM) {
        let rM = this.dom.nextSibling;
        MM && (this.dom.remove(), this.domAfter && this.domAfter.remove());
        let iM = OM.A.iter(this.view.state.facet(na), this.view.viewport.from),
          SM = [],
          jM = this.gutters.map((MM => new la(MM, this.view.viewport, -this.view.documentPadding.top)));
        for (let OM of this.view.viewportLineBlocks)
          if (SM.length && (SM = []), Array.isArray(OM.type)) {
            let MM = !0;
            for (let rM of OM.type)
              if (rM.type == pM.Text && MM) {
                ya(iM, SM, rM.from);
                for (let MM of jM) MM.line(this.view, rM, SM);
                MM = !1
              } else if (rM.widget)
              for (let MM of jM) MM.widget(this.view, rM)
          } else if (OM.type == pM.Text) {
          ya(iM, SM, OM.from);
          for (let MM of jM) MM.line(this.view, OM, SM)
        } else if (OM.widget)
          for (let MM of jM) MM.widget(this.view, OM);
        for (let OM of jM) OM.finish();
        MM && (this.view.scrollDOM.insertBefore(this.dom, rM), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter))
      }
      updateGutters(MM) {
        let rM = MM.startState.facet(La),
          iM = MM.state.facet(La),
          SM = MM.docChanged || MM.heightChanged || MM.viewportChanged || !OM.A.eq(MM.startState.facet(na), MM.state.facet(na), MM.view.viewport.from, MM.view.viewport.to);
        if (rM == iM)
          for (let OM of this.gutters) OM.update(MM) && (SM = !0);
        else {
          SM = !0;
          let OM = [];
          for (let SM of iM) {
            let iM = rM.indexOf(SM);
            iM < 0 ? OM.push(new Ea(this.view, SM)) : (this.gutters[iM].update(MM), OM.push(this.gutters[iM]))
          }
          for (let MM of this.gutters) MM.dom.remove(), OM.indexOf(MM) < 0 && MM.destroy();
          for (let MM of OM) "after" == MM.config.side ? this.getDOMAfter().appendChild(MM.dom) : this.dom.appendChild(MM.dom);
          this.gutters = OM
        }
        return SM
      }
      destroy() {
        for (let MM of this.gutters) MM.destroy();
        this.dom.remove(), this.domAfter && this.domAfter.remove()
      }
    }, {
      provide: MM => gS.scrollMargins.of((rM => {
        let iM = rM.plugin(MM);
        if (!iM || 0 == iM.gutters.length || !iM.fixed) return null;
        let OM = iM.dom.offsetWidth * rM.scaleX,
          SM = iM.domAfter ? iM.domAfter.offsetWidth * rM.scaleX : 0;
        return rM.textDirection == Qr.LTR ? {
          left: OM,
          right: SM
        } : {
          right: OM,
          left: SM
        }
      }))
    });

    function da(MM) {
      return Array.isArray(MM) ? MM : [MM]
    }

    function ya(MM, rM, iM) {
      for (; MM.value && MM.from <= iM;) MM.from == iM && rM.push(MM.value), MM.next()
    }
    class la {
      constructor(MM, rM, iM) {
        this.gutter = MM, this.height = iM, this.i = 0, this.cursor = OM.A.iter(MM.markers, rM.from)
      }
      addElement(MM, rM, iM) {
        let {
          gutter: OM
        } = this, SM = (rM.top - this.height) / MM.scaleY, jM = rM.height / MM.scaleY;
        if (this.i == OM.elements.length) {
          let rM = new Ua(MM, jM, SM, iM);
          OM.elements.push(rM), OM.dom.appendChild(rM.dom)
        } else OM.elements[this.i].update(MM, jM, SM, iM);
        this.height = rM.bottom, this.i++
      }
      line(MM, rM, iM) {
        let OM = [];
        ya(this.cursor, OM, rM.from), iM.length && (OM = OM.concat(iM));
        let SM = this.gutter.config.lineMarker(MM, rM, OM);
        SM && OM.unshift(SM);
        let jM = this.gutter;
        (0 != OM.length || jM.config.renderEmptyElements) && this.addElement(MM, rM, OM)
      }
      widget(MM, rM) {
        let iM = this.gutter.config.widgetMarker(MM, rM.widget, rM),
          OM = iM ? [iM] : null;
        for (let SM of MM.state.facet(Qa)) {
          let iM = SM(MM, rM.widget, rM);
          iM && (OM || (OM = [])).push(iM)
        }
        OM && this.addElement(MM, rM, OM)
      }
      finish() {
        let MM = this.gutter;
        for (; MM.elements.length > this.i;) {
          let rM = MM.elements.pop();
          MM.dom.removeChild(rM.dom), rM.destroy()
        }
      }
    }
    class Ea {
      constructor(MM, rM) {
        this.view = MM, this.config = rM, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
        for (let iM in rM.domEventHandlers) this.dom.addEventListener(iM, (OM => {
          let SM, jM = OM.target;
          if (jM != this.dom && this.dom.contains(jM)) {
            for (; jM.parentNode != this.dom;) jM = jM.parentNode;
            let MM = jM.getBoundingClientRect();
            SM = (MM.top + MM.bottom) / 2
          } else SM = OM.clientY;
          let aM = MM.lineBlockAtHeight(SM - MM.documentTop);
          rM.domEventHandlers[iM](MM, aM, OM) && OM.preventDefault()
        }));
        this.markers = da(rM.markers(MM)), rM.initialSpacer && (this.spacer = new Ua(MM, 0, 0, [rM.initialSpacer(MM)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none")
      }
      update(MM) {
        let rM = this.markers;
        if (this.markers = da(this.config.markers(MM.view)), this.spacer && this.config.updateSpacer) {
          let rM = this.config.updateSpacer(this.spacer.markers[0], MM);
          rM != this.spacer.markers[0] && this.spacer.update(MM.view, 0, 0, [rM])
        }
        let iM = MM.view.viewport;
        return !OM.A.eq(this.markers, rM, iM.from, iM.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(MM)
      }
      destroy() {
        for (let MM of this.elements) MM.destroy()
      }
    }
    class Ua {
      constructor(MM, rM, iM, OM) {
        this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(MM, rM, iM, OM)
      }
      update(MM, rM, iM, OM) {
        this.height != rM && (this.height = rM, this.dom.style.height = rM + "px"), this.above != iM && (this.dom.style.marginTop = (this.above = iM) ? iM + "px" : ""),
          function(MM, rM) {
            if (MM.length != rM.length) return !1;
            for (let iM = 0; iM < MM.length; iM++)
              if (!MM[iM].compare(rM[iM])) return !1;
            return !0
          }(this.markers, OM) || this.setMarkers(MM, OM)
      }
      setMarkers(MM, rM) {
        let iM = "cm-gutterElement",
          OM = this.dom.firstChild;
        for (let SM = 0, jM = 0;;) {
          let aM = jM,
            PM = SM < rM.length ? rM[SM++] : null,
            nM = !1;
          if (PM) {
            let MM = PM.elementClass;
            MM && (iM += " " + MM);
            for (let rM = jM; rM < this.markers.length; rM++)
              if (this.markers[rM].compare(PM)) {
                aM = rM, nM = !0;
                break
              }
          } else aM = this.markers.length;
          for (; jM < aM;) {
            let MM = this.markers[jM++];
            if (MM.toDOM) {
              MM.destroy(OM);
              let rM = OM.nextSibling;
              OM.remove(), OM = rM
            }
          }
          if (!PM) break;
          PM.toDOM && (nM ? OM = OM.nextSibling : this.dom.insertBefore(PM.toDOM(MM), OM)), nM && jM++
        }
        this.dom.className = iM, this.markers = rM
      }
      destroy() {
        this.setMarkers(null, [])
      }
    }
    const Ga = OM.s.define(),
      Ca = OM.s.define(),
      ea = OM.s.define({
        combine: MM => (0, OM.V)(MM, {
          formatNumber: String,
          domEventHandlers: {}
        }, {
          domEventHandlers(MM, rM) {
            let iM = Object.assign({}, MM);
            for (let OM in rM) {
              let MM = iM[OM],
                SM = rM[OM];
              iM[OM] = MM ? (rM, iM, OM) => MM(rM, iM, OM) || SM(rM, iM, OM) : SM
            }
            return iM
          }
        })
      });
    class ba extends Pa {
      constructor(MM) {
        super(), this.number = MM
      }
      eq(MM) {
        return this.number == MM.number
      }
      toDOM() {
        return document.createTextNode(this.number)
      }
    }

    function wa(MM, rM) {
      return MM.state.facet(ea).formatNumber(rM, MM.state)
    }
    const ta = La.compute([ea], (MM => ({
      class: "cm-lineNumbers",
      renderEmptyElements: !1,
      markers: MM => MM.state.facet(Ga),
      lineMarker: (MM, rM, iM) => iM.some((MM => MM.toDOM)) ? null : new ba(wa(MM, MM.state.doc.lineAt(rM.from).number)),
      widgetMarker: (MM, rM, iM) => {
        for (let OM of MM.state.facet(Ca)) {
          let SM = OM(MM, rM, iM);
          if (SM) return SM
        }
        return null
      },
      lineMarkerChange: MM => MM.startState.facet(ea) != MM.state.facet(ea),
      initialSpacer: MM => new ba(wa(MM, ua(MM.state.doc.lines))),
      updateSpacer(MM, rM) {
        let iM = wa(rM.view, ua(rM.view.state.doc.lines));
        return iM == MM.number ? MM : new ba(iM)
      },
      domEventHandlers: MM.facet(ea).domEventHandlers,
      side: "before"
    })));

    function ga() {
      let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [ea.of(MM), ha(), ta]
    }

    function ua(MM) {
      let rM = 9;
      for (; rM < MM;) rM = 10 * rM + 9;
      return rM
    }
    const Ra = new class extends Pa {
        constructor() {
          super(...arguments), this.elementClass = "cm-activeLineGutter"
        }
      },
      pa = na.compute(["selection"], (MM => {
        let rM = [],
          iM = -1;
        for (let OM of MM.selection.Ld) {
          let SM = MM.doc.lineAt(OM.head).from;
          SM > iM && (iM = SM, rM.push(Ra.range(SM)))
        }
        return OM.A.of(rM)
      }));

    function Wa() {
      return pa
    }
  },
  43998: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => OM,
      c: () => HM,
      f: () => aM,
      g: () => zM,
      j: () => QM,
      n: () => sM,
      p: () => kM,
      r: () => DM,
      v: () => hM
    });
    const OM = 1024;
    let SM = 0;
    class jM {
      constructor(MM, rM) {
        this.from = MM, this.to = rM
      }
    }
    class aM {
      constructor() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.id = SM++, this.perNode = !!MM.perNode, this.deserialize = MM.deserialize || (() => {
          throw new Error("This node type doesn't define a deserialize function")
        }), this.combine = MM.combine || null
      }
      add(MM) {
        if (this.perNode) throw new RangeError("Can't add per-node props to node types");
        return "function" != typeof MM && (MM = QM.match(MM)), rM => {
          let iM = MM(rM);
          return void 0 === iM ? null : [this, iM]
        }
      }
    }
    aM.closedBy = new aM({
      deserialize: MM => MM.split(" ")
    }), aM.openedBy = new aM({
      deserialize: MM => MM.split(" ")
    }), aM.group = new aM({
      deserialize: MM => MM.split(" ")
    }), aM.isolate = new aM({
      deserialize: MM => {
        if (MM && "rtl" != MM && "ltr" != MM && "auto" != MM) throw new RangeError("Invalid value for isolate: " + MM);
        return MM || "auto"
      }
    }), aM.contextHash = new aM({
      perNode: !0
    }), aM.lookAhead = new aM({
      perNode: !0
    }), aM.mounted = new aM({
      perNode: !0
    });
    class PM {
      constructor(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this.tree = MM, this.overlay = rM, this.parser = iM, this.bracketed = OM
      }
      static get(MM) {
        return MM && MM.props && MM.props[aM.mounted.id]
      }
    }
    const nM = Object.create(null);
    class QM {
      constructor(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.name = MM, this.props = rM, this.id = iM, this.flags = OM
      }
      static define(MM) {
        let rM = MM.props && MM.props.length ? Object.create(null) : nM,
          iM = (MM.top ? 1 : 0) | (MM.skipped ? 2 : 0) | (MM.error ? 4 : 0) | (null == MM.name ? 8 : 0),
          OM = new QM(MM.name || "", rM, MM.id, iM);
        if (MM.props)
          for (let SM of MM.props)
            if (Array.isArray(SM) || (SM = SM(OM)), SM) {
              if (SM[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
              rM[SM[0].id] = SM[1]
            } return OM
      }
      prop(MM) {
        return this.props[MM.id]
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
      is(MM) {
        if ("string" == typeof MM) {
          if (this.name == MM) return !0;
          let rM = this.prop(aM.group);
          return !!rM && rM.indexOf(MM) > -1
        }
        return this.id == MM
      }
      static match(MM) {
        let rM = Object.create(null);
        for (let iM in MM)
          for (let OM of iM.split(" ")) rM[OM] = MM[iM];
        return MM => {
          for (let iM = MM.prop(aM.group), OM = -1; OM < (iM ? iM.length : 0); OM++) {
            let SM = rM[OM < 0 ? MM.name : iM[OM]];
            if (SM) return SM
          }
        }
      }
    }
    QM.none = new QM("", Object.create(null), 0, 8);
    class zM {
      constructor(MM) {
        this.types = MM;
        for (let rM = 0; rM < MM.length; rM++)
          if (MM[rM].id != rM) throw new RangeError("Node type ids should correspond to array positions when creating a node set")
      }
      extend() {
        let MM = [];
        for (var rM = arguments.length, iM = new Array(rM), OM = 0; OM < rM; OM++) iM[OM] = arguments[OM];
        for (let SM of this.types) {
          let rM = null;
          for (let MM of iM) {
            let iM = MM(SM);
            if (iM) {
              rM || (rM = Object.assign({}, SM.props));
              let MM = iM[1],
                OM = iM[0];
              OM.combine && OM.id in rM && (MM = OM.combine(rM[OM.id], MM)), rM[OM.id] = MM
            }
          }
          MM.push(rM ? new QM(SM.name, rM, SM.id, SM.flags) : SM)
        }
        return new zM(MM)
      }
    }
    const LM = new WeakMap,
      mM = new WeakMap;
    var HM;
    ! function(MM) {
      MM[MM.ExcludeBuffers = 1] = "ExcludeBuffers", MM[MM.IncludeAnonymous = 2] = "IncludeAnonymous", MM[MM.IgnoreMounts = 4] = "IgnoreMounts", MM[MM.IgnoreOverlays = 8] = "IgnoreOverlays", MM[MM.EnterBracketed = 16] = "EnterBracketed"
    }(HM || (HM = {}));
    class hM {
      constructor(MM, rM, iM, OM, SM) {
        if (this.type = MM, this.children = rM, this.positions = iM, this.length = OM, this.props = null, SM && SM.length) {
          this.props = Object.create(null);
          for (let [MM, rM] of SM) this.props["number" == typeof MM ? MM : MM.id] = rM
        }
      }
      toString() {
        let MM = PM.get(this);
        if (MM && !MM.overlay) return MM.tree.toString();
        let rM = "";
        for (let iM of this.children) {
          let MM = iM.toString();
          MM && (rM && (rM += ","), rM += MM)
        }
        return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (rM.length ? "(" + rM + ")" : "") : rM
      }
      cursor() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return new gM(this.topNode, MM)
      }
      cursorAt(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          iM = LM.get(this) || this.topNode,
          OM = new gM(iM);
        return OM.moveTo(MM, rM), LM.set(this, OM._tree), OM
      }
      get topNode() {
        return new UM(this, 0, 0, null)
      }
      resolve(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          iM = lM(LM.get(this) || this.topNode, MM, rM, !1);
        return LM.set(this, iM), iM
      }
      resolveInner(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          iM = lM(mM.get(this) || this.topNode, MM, rM, !0);
        return mM.set(this, iM), iM
      }
      resolveStack(MM) {
        return function(MM, rM, iM) {
          let OM = MM.resolveInner(rM, iM),
            SM = null;
          for (let jM = OM instanceof UM ? OM : OM.context.parent; jM; jM = jM.parent)
            if (jM.index < 0) {
              let MM = jM.parent;
              (SM || (SM = [OM])).push(MM.resolve(rM, iM)), jM = MM
            } else {
              let MM = PM.get(jM.tree);
              if (MM && MM.overlay && MM.overlay[0].from <= rM && MM.overlay[MM.overlay.length - 1].to >= rM) {
                let aM = new UM(MM.tree, MM.overlay[0].from + jM.from, -1, jM);
                (SM || (SM = [OM])).push(lM(aM, rM, iM, !1))
              }
            } return SM ? wM(SM) : OM
        }(this, MM, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
      }
      iterate(MM) {
        let {
          enter: rM,
          leave: iM,
          from: OM = 0,
          to: SM = this.length
        } = MM, jM = MM.mode || 0, aM = (jM & HM.IncludeAnonymous) > 0;
        for (let PM = this.cursor(jM | HM.IncludeAnonymous);;) {
          let MM = !1;
          if (PM.from <= SM && PM.to >= OM && (!aM && PM.type.isAnonymous || !1 !== rM(PM))) {
            if (PM.firstChild()) continue;
            MM = !0
          }
          for (; MM && iM && (aM || !PM.type.isAnonymous) && iM(PM), !PM.nextSibling();) {
            if (!PM.parent()) return;
            MM = !0
          }
        }
      }
      prop(MM) {
        return MM.perNode ? this.props ? this.props[MM.id] : void 0 : this.type.prop(MM)
      }
      get propValues() {
        let MM = [];
        if (this.props)
          for (let rM in this.props) MM.push([+rM, this.props[rM]]);
        return MM
      }
      balance() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this.children.length <= 8 ? this : WM(QM.none, this.children, this.positions, 0, this.children.length, 0, this.length, ((MM, rM, iM) => new hM(this.type, MM, rM, iM, this.propValues)), MM.makeTree || ((MM, rM, iM) => new hM(QM.none, MM, rM, iM)))
      }
      static build(MM) {
        return function(MM) {
          var rM;
          let {
            buffer: iM,
            nodeSet: SM,
            maxBufferLength: jM = OM,
            reused: PM = [],
            minRepeatType: nM = SM.types.length
          } = MM, QM = Array.isArray(iM) ? new JM(iM, iM.length) : iM, zM = SM.types, LM = 0, mM = 0;

          function HM(MM, rM, iM, OM, aM, hM) {
            let {
              id: JM,
              start: eM,
              end: bM,
              size: wM
            } = QM, tM = mM, gM = LM;
            if (wM < 0) {
              if (QM.next(), -1 == wM) {
                let rM = PM[JM];
                return iM.push(rM), void OM.push(eM - MM)
              }
              if (-3 == wM) return void(LM = JM);
              if (-4 == wM) return void(mM = JM);
              throw new RangeError(`Unrecognized record size: ${wM}`)
            }
            let uM, RM, pM = zM[JM],
              sM = eM - MM;
            if (bM - eM <= jM && (RM = GM(QM.pos - rM, aM))) {
              let rM = new Uint16Array(RM.size - RM.skip),
                iM = QM.pos - RM.size,
                OM = rM.length;
              for (; QM.pos > iM;) OM = CM(RM.start, rM, OM);
              uM = new dM(rM, bM - RM.start, SM), sM = RM.start - MM
            } else {
              let MM = QM.pos - wM;
              QM.next();
              let rM = [],
                iM = [],
                OM = JM >= nM ? JM : -1,
                SM = 0,
                aM = bM;
              for (; QM.pos > MM;) OM >= 0 && QM.id == OM && QM.size >= 0 ? (QM.end <= aM - jM && (EM(rM, iM, eM, SM, QM.end, aM, OM, tM, gM), SM = rM.length, aM = QM.end), QM.next()) : hM > 2500 ? yM(eM, MM, rM, iM) : HM(eM, MM, rM, iM, OM, hM + 1);
              if (OM >= 0 && SM > 0 && SM < rM.length && EM(rM, iM, eM, SM, eM, aM, OM, tM, gM), rM.reverse(), iM.reverse(), OM > -1 && SM > 0) {
                let MM = lM(pM, gM);
                uM = WM(pM, rM, iM, 0, rM.length, 0, bM - eM, MM, MM)
              } else uM = UM(pM, rM, iM, bM - eM, tM - bM, gM)
            }
            iM.push(uM), OM.push(sM)
          }

          function yM(MM, rM, iM, OM) {
            let aM = [],
              PM = 0,
              nM = -1;
            for (; QM.pos > rM;) {
              let {
                id: MM,
                start: rM,
                end: iM,
                size: OM
              } = QM;
              if (OM > 4) QM.next();
              else {
                if (nM > -1 && rM < nM) break;
                nM < 0 && (nM = iM - jM), aM.push(MM, rM, iM), PM++, QM.next()
              }
            }
            if (PM) {
              let rM = new Uint16Array(4 * PM),
                jM = aM[aM.length - 2];
              for (let MM = aM.length - 3, iM = 0; MM >= 0; MM -= 3) rM[iM++] = aM[MM], rM[iM++] = aM[MM + 1] - jM, rM[iM++] = aM[MM + 2] - jM, rM[iM++] = iM;
              iM.push(new dM(rM, aM[2] - jM, SM)), OM.push(jM - MM)
            }
          }

          function lM(MM, rM) {
            return (iM, OM, SM) => {
              let jM, PM, nM = 0,
                QM = iM.length - 1;
              if (QM >= 0 && (jM = iM[QM]) instanceof hM) {
                if (!QM && jM.type == MM && jM.length == SM) return jM;
                (PM = jM.prop(aM.lookAhead)) && (nM = OM[QM] + jM.length + PM)
              }
              return UM(MM, iM, OM, SM, nM, rM)
            }
          }

          function EM(MM, rM, iM, OM, jM, aM, PM, nM, QM) {
            let zM = [],
              LM = [];
            for (; MM.length > OM;) zM.push(MM.pop()), LM.push(rM.pop() + iM - jM);
            MM.push(UM(SM.types[PM], zM, LM, aM - jM, nM - aM, QM)), rM.push(jM - iM)
          }

          function UM(MM, rM, iM, OM, SM, jM, PM) {
            if (jM) {
              let MM = [aM.contextHash, jM];
              PM = PM ? [MM].concat(PM) : [MM]
            }
            if (SM > 25) {
              let MM = [aM.lookAhead, SM];
              PM = PM ? [MM].concat(PM) : [MM]
            }
            return new hM(MM, rM, iM, OM, PM)
          }

          function GM(MM, rM) {
            let iM = QM.fork(),
              OM = 0,
              SM = 0,
              aM = 0,
              PM = iM.end - jM,
              zM = {
                size: 0,
                start: 0,
                skip: 0
              };
            MM: for (let jM = iM.pos - MM; iM.pos > jM;) {
              let MM = iM.size;
              if (iM.id == rM && MM >= 0) {
                zM.size = OM, zM.start = SM, zM.skip = aM, aM += 4, OM += 4, iM.next();
                continue
              }
              let QM = iM.pos - MM;
              if (MM < 0 || QM < jM || iM.start < PM) break;
              let LM = iM.id >= nM ? 4 : 0,
                mM = iM.start;
              for (iM.next(); iM.pos > QM;) {
                if (iM.size < 0) {
                  if (-3 != iM.size && -4 != iM.size) break MM;
                  LM += 4
                } else iM.id >= nM && (LM += 4);
                iM.next()
              }
              SM = mM, OM += MM, aM += LM
            }
            return (rM < 0 || OM == MM) && (zM.size = OM, zM.start = SM, zM.skip = aM), zM.size > 4 ? zM : void 0
          }

          function CM(MM, rM, iM) {
            let {
              id: OM,
              start: SM,
              end: jM,
              size: aM
            } = QM;
            if (QM.next(), aM >= 0 && OM < nM) {
              let PM = iM;
              if (aM > 4) {
                let OM = QM.pos - (aM - 4);
                for (; QM.pos > OM;) iM = CM(MM, rM, iM)
              }
              rM[--iM] = PM, rM[--iM] = jM - MM, rM[--iM] = SM - MM, rM[--iM] = OM
            } else - 3 == aM ? LM = OM : -4 == aM && (mM = OM);
            return iM
          }
          let eM = [],
            bM = [];
          for (; QM.pos > 0;) HM(MM.start || 0, MM.bufferStart || 0, eM, bM, -1, 0);
          let wM = null !== (rM = MM.length) && void 0 !== rM ? rM : eM.length ? bM[0] + eM[0].length : 0;
          return new hM(zM[MM.topID], eM.reverse(), bM.reverse(), wM)
        }(MM)
      }
    }
    hM.empty = new hM(QM.none, [], [], 0);
    class JM {
      constructor(MM, rM) {
        this.buffer = MM, this.index = rM
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
        return new JM(this.buffer, this.index)
      }
    }
    class dM {
      constructor(MM, rM, iM) {
        this.buffer = MM, this.length = rM, this.set = iM
      }
      get type() {
        return QM.none
      }
      toString() {
        let MM = [];
        for (let rM = 0; rM < this.buffer.length;) MM.push(this.childString(rM)), rM = this.buffer[rM + 3];
        return MM.join(",")
      }
      childString(MM) {
        let rM = this.buffer[MM],
          iM = this.buffer[MM + 3],
          OM = this.set.types[rM],
          SM = OM.name;
        if (/\W/.test(SM) && !OM.isError && (SM = JSON.stringify(SM)), iM == (MM += 4)) return SM;
        let jM = [];
        for (; MM < iM;) jM.push(this.childString(MM)), MM = this.buffer[MM + 3];
        return SM + "(" + jM.join(",") + ")"
      }
      findChild(MM, rM, iM, OM, SM) {
        let {
          buffer: jM
        } = this, aM = -1;
        for (let PM = MM; PM != rM && !(yM(SM, OM, jM[PM + 1], jM[PM + 2]) && (aM = PM, iM > 0)); PM = jM[PM + 3]);
        return aM
      }
      slice(MM, rM, iM) {
        let OM = this.buffer,
          SM = new Uint16Array(rM - MM),
          jM = 0;
        for (let aM = MM, PM = 0; aM < rM;) {
          SM[PM++] = OM[aM++], SM[PM++] = OM[aM++] - iM;
          let rM = SM[PM++] = OM[aM++] - iM;
          SM[PM++] = OM[aM++] - MM, jM = Math.max(jM, rM)
        }
        return new dM(SM, jM, this.set)
      }
    }

    function yM(MM, rM, iM, OM) {
      switch (MM) {
        case -2:
          return iM < rM;
        case -1:
          return OM >= rM && iM < rM;
        case 0:
          return iM < rM && OM > rM;
        case 1:
          return iM <= rM && OM > rM;
        case 2:
          return OM > rM;
        case 4:
          return !0
      }
    }

    function lM(MM, rM, iM, OM) {
      for (var SM; MM.from == MM.to || (iM < 1 ? MM.from >= rM : MM.from > rM) || (iM > -1 ? MM.to <= rM : MM.to < rM);) {
        let rM = !OM && MM instanceof UM && MM.index < 0 ? null : MM.parent;
        if (!rM) return MM;
        MM = rM
      }
      let jM = OM ? 0 : HM.IgnoreOverlays;
      if (OM)
        for (let aM = MM, PM = aM.parent; PM; aM = PM, PM = aM.parent) aM instanceof UM && aM.index < 0 && (null === (SM = PM.enter(rM, iM, jM)) || void 0 === SM ? void 0 : SM.from) != aM.from && (MM = PM);
      for (;;) {
        let OM = MM.enter(rM, iM, jM);
        if (!OM) return MM;
        MM = OM
      }
    }
    class EM {
      cursor() {
        return new gM(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)
      }
      getChild(MM) {
        let rM = GM(this, MM, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null);
        return rM.length ? rM[0] : null
      }
      getChildren(MM) {
        return GM(this, MM, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
      }
      resolve(MM) {
        return lM(this, MM, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !1)
      }
      resolveInner(MM) {
        return lM(this, MM, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !0)
      }
      matchContext(MM) {
        return CM(this.parent, MM)
      }
      enterUnfinishedNodesBefore(MM) {
        let rM = this.childBefore(MM),
          iM = this;
        for (; rM;) {
          let MM = rM.lastChild;
          if (!MM || MM.to != rM.to) break;
          MM.type.isError && MM.from == MM.to ? (iM = rM, rM = MM.prevSibling) : rM = MM
        }
        return iM
      }
      get node() {
        return this
      }
      get next() {
        return this.parent
      }
    }
    class UM extends EM {
      constructor(MM, rM, iM, OM) {
        super(), this._tree = MM, this.from = rM, this.index = iM, this._parent = OM
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
      nextChild(MM, rM, iM, OM) {
        let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        for (let jM = this;;) {
          for (let {
              children: aM,
              positions: nM
            } = jM._tree, QM = rM > 0 ? aM.length : -1; MM != QM; MM += rM) {
            let QM, zM = aM[MM],
              LM = nM[MM] + jM.from;
            if (SM & HM.EnterBracketed && zM instanceof hM && (QM = PM.get(zM)) && !QM.overlay && QM.bracketed && iM >= LM && iM <= LM + zM.length || yM(OM, iM, LM, LM + zM.length))
              if (zM instanceof dM) {
                if (SM & HM.ExcludeBuffers) continue;
                let aM = zM.findChild(0, zM.buffer.length, rM, iM - LM, OM);
                if (aM > -1) return new bM(new eM(jM, zM, MM, LM), null, aM)
              } else if (SM & HM.IncludeAnonymous || !zM.type.isAnonymous || uM(zM)) {
              let aM;
              if (!(SM & HM.IgnoreMounts) && (aM = PM.get(zM)) && !aM.overlay) return new UM(aM.tree, LM, MM, jM);
              let nM = new UM(zM, LM, MM, jM);
              return SM & HM.IncludeAnonymous || !nM.type.isAnonymous ? nM : nM.nextChild(rM < 0 ? zM.children.length - 1 : 0, rM, iM, OM, SM)
            }
          }
          if (SM & HM.IncludeAnonymous || !jM.type.isAnonymous) return null;
          if (MM = jM.index >= 0 ? jM.index + rM : rM < 0 ? -1 : jM._parent._tree.children.length, jM = jM._parent, !jM) return null
        }
      }
      get firstChild() {
        return this.nextChild(0, 1, 0, 4)
      }
      get lastChild() {
        return this.nextChild(this._tree.children.length - 1, -1, 0, 4)
      }
      childAfter(MM) {
        return this.nextChild(0, 1, MM, 2)
      }
      childBefore(MM) {
        return this.nextChild(this._tree.children.length - 1, -1, MM, -2)
      }
      prop(MM) {
        return this._tree.prop(MM)
      }
      enter(MM, rM) {
        let iM, OM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (!(OM & HM.IgnoreOverlays) && (iM = PM.get(this._tree)) && iM.overlay) {
          let SM = MM - this.from,
            jM = OM & HM.EnterBracketed && iM.bracketed;
          for (let {
              from: MM,
              to: OM
            }
            of iM.overlay)
            if ((rM > 0 || jM ? MM <= SM : MM < SM) && (rM < 0 || jM ? OM >= SM : OM > SM)) return new UM(iM.tree, iM.overlay[0].from + this.from, -1, this)
        }
        return this.nextChild(0, 1, MM, rM, OM)
      }
      nextSignificantParent() {
        let MM = this;
        for (; MM.type.isAnonymous && MM._parent;) MM = MM._parent;
        return MM
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

    function GM(MM, rM, iM, OM) {
      let SM = MM.cursor(),
        jM = [];
      if (!SM.firstChild()) return jM;
      if (null != iM)
        for (let aM = !1; !aM;)
          if (aM = SM.type.is(iM), !SM.nextSibling()) return jM;
      for (;;) {
        if (null != OM && SM.type.is(OM)) return jM;
        if (SM.type.is(rM) && jM.push(SM.node), !SM.nextSibling()) return null == OM ? jM : []
      }
    }

    function CM(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : rM.length - 1;
      for (let OM = MM; iM >= 0; OM = OM.parent) {
        if (!OM) return !1;
        if (!OM.type.isAnonymous) {
          if (rM[iM] && rM[iM] != OM.name) return !1;
          iM--
        }
      }
      return !0
    }
    class eM {
      constructor(MM, rM, iM, OM) {
        this.parent = MM, this.buffer = rM, this.index = iM, this.start = OM
      }
    }
    class bM extends EM {
      get name() {
        return this.type.name
      }
      get from() {
        return this.context.start + this.context.buffer.buffer[this.index + 1]
      }
      get to() {
        return this.context.start + this.context.buffer.buffer[this.index + 2]
      }
      constructor(MM, rM, iM) {
        super(), this.context = MM, this._parent = rM, this.index = iM, this.type = MM.buffer.set.types[MM.buffer.buffer[iM]]
      }
      child(MM, rM, iM) {
        let {
          buffer: OM
        } = this.context, SM = OM.findChild(this.index + 4, OM.buffer[this.index + 3], MM, rM - this.context.start, iM);
        return SM < 0 ? null : new bM(this.context, this, SM)
      }
      get firstChild() {
        return this.child(1, 0, 4)
      }
      get lastChild() {
        return this.child(-1, 0, 4)
      }
      childAfter(MM) {
        return this.child(1, MM, 2)
      }
      childBefore(MM) {
        return this.child(-1, MM, -2)
      }
      prop(MM) {
        return this.type.prop(MM)
      }
      enter(MM, rM) {
        if ((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0) & HM.ExcludeBuffers) return null;
        let {
          buffer: iM
        } = this.context, OM = iM.findChild(this.index + 4, iM.buffer[this.index + 3], rM > 0 ? 1 : -1, MM - this.context.start, rM);
        return OM < 0 ? null : new bM(this.context, this, OM)
      }
      get parent() {
        return this._parent || this.context.parent.nextSignificantParent()
      }
      externalSibling(MM) {
        return this._parent ? null : this.context.parent.nextChild(this.context.index + MM, MM, 0, 4)
      }
      get nextSibling() {
        let {
          buffer: MM
        } = this.context, rM = MM.buffer[this.index + 3];
        return rM < (this._parent ? MM.buffer[this._parent.index + 3] : MM.buffer.length) ? new bM(this.context, this._parent, rM) : this.externalSibling(1)
      }
      get prevSibling() {
        let {
          buffer: MM
        } = this.context, rM = this._parent ? this._parent.index + 4 : 0;
        return this.index == rM ? this.externalSibling(-1) : new bM(this.context, this._parent, MM.findChild(rM, this.index, -1, 0, 4))
      }
      get tree() {
        return null
      }
      toTree() {
        let MM = [],
          rM = [],
          {
            buffer: iM
          } = this.context,
          OM = this.index + 4,
          SM = iM.buffer[this.index + 3];
        if (SM > OM) {
          let jM = iM.buffer[this.index + 1];
          MM.push(iM.slice(OM, SM, jM)), rM.push(0)
        }
        return new hM(this.type, MM, rM, this.to - this.from)
      }
      toString() {
        return this.context.buffer.childString(this.index)
      }
    }

    function wM(MM) {
      if (!MM.length) return null;
      let rM = 0,
        iM = MM[0];
      for (let jM = 1; jM < MM.length; jM++) {
        let OM = MM[jM];
        (OM.from > iM.from || OM.to < iM.to) && (iM = OM, rM = jM)
      }
      let OM = iM instanceof UM && iM.index < 0 ? null : iM.parent,
        SM = MM.slice();
      return OM ? SM[rM] = OM : SM.splice(rM, 1), new tM(SM, iM)
    }
    class tM {
      constructor(MM, rM) {
        this.heads = MM, this.node = rM
      }
      get next() {
        return wM(this.heads)
      }
    }
    class gM {
      get name() {
        return this.type.name
      }
      constructor(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = rM & ~HM.EnterBracketed, MM instanceof UM) this.yieldNode(MM);
        else {
          this._tree = MM.context.parent, this.buffer = MM.context;
          for (let rM = MM._parent; rM; rM = rM._parent) this.stack.unshift(rM.index);
          this.bufferNode = MM, this.yieldBuf(MM.index)
        }
      }
      yieldNode(MM) {
        return !!MM && (this._tree = MM, this.type = MM.type, this.from = MM.from, this.to = MM.to, !0)
      }
      yieldBuf(MM, rM) {
        this.index = MM;
        let {
          start: iM,
          buffer: OM
        } = this.buffer;
        return this.type = rM || OM.set.types[OM.buffer[MM]], this.from = iM + OM.buffer[MM + 1], this.to = iM + OM.buffer[MM + 2], !0
      }
      yield(MM) {
        return !!MM && (MM instanceof UM ? (this.buffer = null, this.yieldNode(MM)) : (this.buffer = MM.context, this.yieldBuf(MM.index, MM.type)))
      }
      toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
      }
      enterChild(MM, rM, iM) {
        if (!this.buffer) return this.yield(this._tree.nextChild(MM < 0 ? this._tree._tree.children.length - 1 : 0, MM, rM, iM, this.mode));
        let {
          buffer: OM
        } = this.buffer, SM = OM.findChild(this.index + 4, OM.buffer[this.index + 3], MM, rM - this.buffer.start, iM);
        return !(SM < 0) && (this.stack.push(this.index), this.yieldBuf(SM))
      }
      firstChild() {
        return this.enterChild(1, 0, 4)
      }
      lastChild() {
        return this.enterChild(-1, 0, 4)
      }
      childAfter(MM) {
        return this.enterChild(1, MM, 2)
      }
      childBefore(MM) {
        return this.enterChild(-1, MM, -2)
      }
      enter(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.mode;
        return this.buffer ? !(iM & HM.ExcludeBuffers) && this.enterChild(1, MM, rM) : this.yield(this._tree.enter(MM, rM, iM))
      }
      parent() {
        if (!this.buffer) return this.yieldNode(this.mode & HM.IncludeAnonymous ? this._tree._parent : this._tree.parent);
        if (this.stack.length) return this.yieldBuf(this.stack.pop());
        let MM = this.mode & HM.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        return this.buffer = null, this.yieldNode(MM)
      }
      sibling(MM) {
        if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + MM, MM, 0, 4, this.mode));
        let {
          buffer: rM
        } = this.buffer, iM = this.stack.length - 1;
        if (MM < 0) {
          let MM = iM < 0 ? 0 : this.stack[iM] + 4;
          if (this.index != MM) return this.yieldBuf(rM.findChild(MM, this.index, -1, 0, 4))
        } else {
          let MM = rM.buffer[this.index + 3];
          if (MM < (iM < 0 ? rM.buffer.length : rM.buffer[this.stack[iM] + 3])) return this.yieldBuf(MM)
        }
        return iM < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + MM, MM, 0, 4, this.mode))
      }
      nextSibling() {
        return this.sibling(1)
      }
      prevSibling() {
        return this.sibling(-1)
      }
      atLastNode(MM) {
        let rM, iM, {
          buffer: OM
        } = this;
        if (OM) {
          if (MM > 0) {
            if (this.index < OM.buffer.buffer.length) return !1
          } else
            for (let MM = 0; MM < this.index; MM++)
              if (OM.buffer.buffer[MM + 3] < this.index) return !1;
          ({
            index: rM,
            parent: iM
          } = OM)
        } else({
          index: rM,
          _parent: iM
        } = this._tree);
        for (; iM;
          ({
            index: rM,
            _parent: iM
          } = iM))
          if (rM > -1)
            for (let OM = rM + MM, SM = MM < 0 ? -1 : iM._tree.children.length; OM != SM; OM += MM) {
              let MM = iM._tree.children[OM];
              if (this.mode & HM.IncludeAnonymous || MM instanceof dM || !MM.type.isAnonymous || uM(MM)) return !1
            }
        return !0
      }
      move(MM, rM) {
        if (rM && this.enterChild(MM, 0, 4)) return !0;
        for (;;) {
          if (this.sibling(MM)) return !0;
          if (this.atLastNode(MM) || !this.parent()) return !1
        }
      }
      next() {
        let MM = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(1, MM)
      }
      prev() {
        let MM = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(-1, MM)
      }
      moveTo(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        for (;
          (this.from == this.to || (rM < 1 ? this.from >= MM : this.from > MM) || (rM > -1 ? this.to <= MM : this.to < MM)) && this.parent(););
        for (; this.enterChild(1, MM, rM););
        return this
      }
      get node() {
        if (!this.buffer) return this._tree;
        let MM = this.bufferNode,
          rM = null,
          iM = 0;
        if (MM && MM.context == this.buffer) MM: for (let OM = this.index, SM = this.stack.length; SM >= 0;) {
          for (let jM = MM; jM; jM = jM._parent)
            if (jM.index == OM) {
              if (OM == this.index) return jM;
              rM = jM, iM = SM + 1;
              break MM
            } OM = this.stack[--SM]
        }
        for (let OM = iM; OM < this.stack.length; OM++) rM = new bM(this.buffer, rM, this.stack[OM]);
        return this.bufferNode = new bM(this.buffer, rM, this.index)
      }
      get tree() {
        return this.buffer ? null : this._tree._tree
      }
      iterate(MM, rM) {
        for (let iM = 0;;) {
          let OM = !1;
          if (this.type.isAnonymous || !1 !== MM(this)) {
            if (this.firstChild()) {
              iM++;
              continue
            }
            this.type.isAnonymous || (OM = !0)
          }
          for (;;) {
            if (OM && rM && rM(this), OM = this.type.isAnonymous, !iM) return;
            if (this.nextSibling()) break;
            this.parent(), iM--, OM = !0
          }
        }
      }
      matchContext(MM) {
        if (!this.buffer) return CM(this.node.parent, MM);
        let {
          buffer: rM
        } = this.buffer, {
          types: iM
        } = rM.set;
        for (let OM = MM.length - 1, SM = this.stack.length - 1; OM >= 0; SM--) {
          if (SM < 0) return CM(this._tree, MM, OM);
          let jM = iM[rM.buffer[this.stack[SM]]];
          if (!jM.isAnonymous) {
            if (MM[OM] && MM[OM] != jM.name) return !1;
            OM--
          }
        }
        return !0
      }
    }

    function uM(MM) {
      return MM.children.some((MM => MM instanceof dM || !MM.type.isAnonymous || uM(MM)))
    }
    const RM = new WeakMap;

    function pM(MM, rM) {
      if (!MM.isAnonymous || rM instanceof dM || rM.type != MM) return 1;
      let iM = RM.get(rM);
      if (null == iM) {
        iM = 1;
        for (let OM of rM.children) {
          if (OM.type != MM || !(OM instanceof hM)) {
            iM = 1;
            break
          }
          iM += pM(MM, OM)
        }
        RM.set(rM, iM)
      }
      return iM
    }

    function WM(MM, rM, iM, OM, SM, jM, aM, PM, nM) {
      let QM = 0;
      for (let HM = OM; HM < SM; HM++) QM += pM(MM, rM[HM]);
      let zM = Math.ceil(1.5 * QM / 8),
        LM = [],
        mM = [];
      return function rM(iM, OM, SM, aM, PM) {
        for (let QM = SM; QM < aM;) {
          let SM = QM,
            HM = OM[QM],
            hM = pM(MM, iM[QM]);
          for (QM++; QM < aM; QM++) {
            let rM = pM(MM, iM[QM]);
            if (hM + rM >= zM) break;
            hM += rM
          }
          if (QM == SM + 1) {
            if (hM > zM) {
              let MM = iM[SM];
              rM(MM.children, MM.positions, 0, MM.children.length, OM[SM] + PM);
              continue
            }
            LM.push(iM[SM])
          } else {
            let rM = OM[QM - 1] + iM[QM - 1].length - HM;
            LM.push(WM(MM, iM, OM, SM, QM, HM, rM, null, nM))
          }
          mM.push(HM + PM - jM)
        }
      }(rM, iM, OM, SM, 0), (PM || nM)(LM, mM, aM)
    }
    class sM {
      constructor() {
        this.map = new WeakMap
      }
      setBuffer(MM, rM, iM) {
        let OM = this.map.get(MM);
        OM || this.map.set(MM, OM = new Map), OM.set(rM, iM)
      }
      getBuffer(MM, rM) {
        let iM = this.map.get(MM);
        return iM && iM.get(rM)
      }
      set(MM, rM) {
        MM instanceof bM ? this.setBuffer(MM.context.buffer, MM.index, rM) : MM instanceof UM && this.map.set(MM.tree, rM)
      }
      get(MM) {
        return MM instanceof bM ? this.getBuffer(MM.context.buffer, MM.index) : MM instanceof UM ? this.map.get(MM.tree) : void 0
      }
      cursorSet(MM, rM) {
        MM.buffer ? this.setBuffer(MM.buffer.buffer, MM.index, rM) : this.map.set(MM.tree, rM)
      }
      cursorGet(MM) {
        return MM.buffer ? this.getBuffer(MM.buffer.buffer, MM.index) : this.map.get(MM.tree)
      }
    }
    class DM {
      constructor(MM, rM, iM, OM) {
        let SM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          jM = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.from = MM, this.to = rM, this.tree = iM, this.offset = OM, this.open = (SM ? 1 : 0) | (jM ? 2 : 0)
      }
      get openStart() {
        return (1 & this.open) > 0
      }
      get openEnd() {
        return (2 & this.open) > 0
      }
      static addTree(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          OM = [new DM(0, MM.length, MM, 0, !1, iM)];
        for (let SM of rM) SM.to > MM.length && OM.push(SM);
        return OM
      }
      static applyChanges(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
        if (!rM.length) return MM;
        let OM = [],
          SM = 1,
          jM = MM.length ? MM[0] : null;
        for (let aM = 0, PM = 0, nM = 0;; aM++) {
          let QM = aM < rM.length ? rM[aM] : null,
            zM = QM ? QM.fromA : 1e9;
          if (zM - PM >= iM)
            for (; jM && jM.from < zM;) {
              let rM = jM;
              if (PM >= rM.from || zM <= rM.to || nM) {
                let MM = Math.max(rM.from, PM) - nM,
                  iM = Math.min(rM.to, zM) - nM;
                rM = MM >= iM ? null : new DM(MM, iM, rM.tree, rM.offset + nM, aM > 0, !!QM)
              }
              if (rM && OM.push(rM), jM.to > zM) break;
              jM = SM < MM.length ? MM[SM++] : null
            }
          if (!QM) break;
          PM = QM.toA, nM = QM.toA - QM.toB
        }
        return OM
      }
    }
    class kM {
      startParse(MM, rM, iM) {
        return "string" == typeof MM && (MM = new ZM(MM)), iM = iM ? iM.length ? iM.map((MM => new jM(MM.from, MM.to))) : [new jM(0, 0)] : [new jM(0, MM.length)], this.createParse(MM, rM || [], iM)
      }
      parse(MM, rM, iM) {
        let OM = this.startParse(MM, rM, iM);
        for (;;) {
          let MM = OM.advance();
          if (MM) return MM
        }
      }
    }
    class ZM {
      constructor(MM) {
        this.string = MM
      }
      get length() {
        return this.string.length
      }
      chunk(MM) {
        return this.string.slice(MM)
      }
      get lineChunks() {
        return !1
      }
      read(MM, rM) {
        return this.string.slice(MM, rM)
      }
    }
    new aM({
      perNode: !0
    })
  },
  44005: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => mM,
      i: () => nM,
      j: () => LM,
      m: () => RM
    });
    var OM = iM(43998);
    let SM = 0;
    class jM {
      constructor(MM, rM, iM, OM) {
        this.name = MM, this.set = rM, this.base = iM, this.modified = OM, this.id = SM++
      }
      toString() {
        let {
          name: MM
        } = this;
        for (let rM of this.modified) rM.name && (MM = `${rM.name}(${MM})`);
        return MM
      }
      static define(MM, rM) {
        let iM = "string" == typeof MM ? MM : "?";
        if (MM instanceof jM && (rM = MM), null === rM || void 0 === rM ? void 0 : rM.base) throw new Error("Can not derive from a modified tag");
        let OM = new jM(iM, [], null, []);
        if (OM.set.push(OM), rM)
          for (let SM of rM.set) OM.set.push(SM);
        return OM
      }
      static defineModifier(MM) {
        let rM = new PM(MM);
        return MM => MM.modified.indexOf(rM) > -1 ? MM : PM.get(MM.base || MM, MM.modified.concat(rM).sort(((MM, rM) => MM.id - rM.id)))
      }
    }
    let aM = 0;
    class PM {
      constructor(MM) {
        this.name = MM, this.instances = [], this.id = aM++
      }
      static get(MM, rM) {
        if (!rM.length) return MM;
        let iM = rM[0].instances.find((iM => {
          return iM.base == MM && (OM = rM, SM = iM.modified, OM.length == SM.length && OM.every(((MM, rM) => MM == SM[rM])));
          var OM, SM
        }));
        if (iM) return iM;
        let OM = [],
          SM = new jM(MM.name, OM, MM, rM);
        for (let jM of rM) jM.instances.push(SM);
        let aM = function(MM) {
          let rM = [
            []
          ];
          for (let iM = 0; iM < MM.length; iM++)
            for (let OM = 0, SM = rM.length; OM < SM; OM++) rM.push(rM[OM].concat(MM[iM]));
          return rM.sort(((MM, rM) => rM.length - MM.length))
        }(rM);
        for (let jM of MM.set)
          if (!jM.modified.length)
            for (let MM of aM) OM.push(PM.get(jM, MM));
        return SM
      }
    }

    function nM(MM) {
      let rM = Object.create(null);
      for (let iM in MM) {
        let OM = MM[iM];
        Array.isArray(OM) || (OM = [OM]);
        for (let MM of iM.split(" "))
          if (MM) {
            let iM = [],
              SM = 2,
              jM = MM;
            for (let rM = 0;;) {
              if ("..." == jM && rM > 0 && rM + 3 == MM.length) {
                SM = 1;
                break
              }
              let OM = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(jM);
              if (!OM) throw new RangeError("Invalid path: " + MM);
              if (iM.push("*" == OM[0] ? "" : '"' == OM[0][0] ? JSON.parse(OM[0]) : OM[0]), rM += OM[0].length, rM == MM.length) break;
              let aM = MM[rM++];
              if (rM == MM.length && "!" == aM) {
                SM = 0;
                break
              }
              if ("/" != aM) throw new RangeError("Invalid path: " + MM);
              jM = MM.slice(rM)
            }
            let aM = iM.length - 1,
              PM = iM[aM];
            if (!PM) throw new RangeError("Invalid path: " + MM);
            let nM = new zM(OM, SM, aM > 0 ? iM.slice(0, aM) : null);
            rM[PM] = nM.sort(rM[PM])
          }
      }
      return QM.add(rM)
    }
    const QM = new OM.f({
      combine(MM, rM) {
        let iM, OM, SM;
        for (; MM || rM;) {
          if (!MM || rM && MM.depth >= rM.depth ? (SM = rM, rM = rM.next) : (SM = MM, MM = MM.next), iM && iM.mode == SM.mode && !SM.context && !iM.context) continue;
          let jM = new zM(SM.tags, SM.mode, SM.context);
          iM ? iM.next = jM : OM = jM, iM = jM
        }
        return OM
      }
    });
    class zM {
      constructor(MM, rM, iM, OM) {
        this.tags = MM, this.mode = rM, this.context = iM, this.next = OM
      }
      get opaque() {
        return 0 == this.mode
      }
      get inherit() {
        return 1 == this.mode
      }
      sort(MM) {
        return !MM || MM.depth < this.depth ? (this.next = MM, this) : (MM.next = this.sort(MM.next), MM)
      }
      get depth() {
        return this.context ? this.context.length : 0
      }
    }

    function LM(MM, rM) {
      let iM = Object.create(null);
      for (let jM of MM)
        if (Array.isArray(jM.tag))
          for (let MM of jM.tag) iM[MM.id] = jM.class;
        else iM[jM.tag.id] = jM.class;
      let {
        scope: OM,
        all: SM = null
      } = rM || {};
      return {
        style: MM => {
          let rM = SM;
          for (let OM of MM)
            for (let MM of OM.set) {
              let OM = iM[MM.id];
              if (OM) {
                rM = rM ? rM + " " + OM : OM;
                break
              }
            }
          return rM
        },
        scope: OM
      }
    }

    function mM(MM, rM, iM) {
      let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : MM.length,
        jM = new HM(OM, Array.isArray(rM) ? rM : [rM], iM);
      jM.highlightRange(MM.cursor(), OM, SM, "", jM.highlighters), jM.flush(SM)
    }
    zM.empty = new zM([], 2, null);
    class HM {
      constructor(MM, rM, iM) {
        this.at = MM, this.highlighters = rM, this.span = iM, this.class = ""
      }
      startSpan(MM, rM) {
        rM != this.class && (this.flush(MM), MM > this.at && (this.at = MM), this.class = rM)
      }
      flush(MM) {
        MM > this.at && this.class && this.span(this.at, MM, this.class)
      }
      highlightRange(MM, rM, iM, SM, jM) {
        let {
          type: aM,
          from: PM,
          to: nM
        } = MM;
        if (PM >= iM || nM <= rM) return;
        aM.isTop && (jM = this.highlighters.filter((MM => !MM.scope || MM.scope(aM))));
        let LM = SM,
          mM = function(MM) {
            let rM = MM.type.prop(QM);
            for (; rM && rM.context && !MM.matchContext(rM.context);) rM = rM.next;
            return rM || null
          }(MM) || zM.empty,
          HM = function(MM, rM) {
            let iM = null;
            for (let OM of MM) {
              let MM = OM.style(rM);
              MM && (iM = iM ? iM + " " + MM : MM)
            }
            return iM
          }(jM, mM.tags);
        if (HM && (LM && (LM += " "), LM += HM, 1 == mM.mode && (SM += (SM ? " " : "") + HM)), this.startSpan(Math.max(rM, PM), LM), mM.opaque) return;
        let hM = MM.tree && MM.tree.prop(OM.f.mounted);
        if (hM && hM.overlay) {
          let OM = MM.node.enter(hM.overlay[0].from + PM, 1),
            aM = this.highlighters.filter((MM => !MM.scope || MM.scope(hM.tree.type))),
            QM = MM.firstChild();
          for (let zM = 0, mM = PM;; zM++) {
            let HM = zM < hM.overlay.length ? hM.overlay[zM] : null,
              JM = HM ? HM.from + PM : nM,
              dM = Math.max(rM, mM),
              yM = Math.min(iM, JM);
            if (dM < yM && QM)
              for (; MM.from < yM && (this.highlightRange(MM, dM, yM, SM, jM), this.startSpan(Math.min(yM, MM.to), LM), !(MM.to >= JM) && MM.nextSibling()););
            if (!HM || JM > iM) break;
            mM = HM.to + PM, mM > rM && (this.highlightRange(OM.cursor(), Math.max(rM, HM.from + PM), Math.min(iM, mM), "", aM), this.startSpan(Math.min(iM, mM), LM))
          }
          QM && MM.parent()
        } else if (MM.firstChild()) {
          hM && (SM = "");
          do {
            if (!(MM.to <= rM)) {
              if (MM.from >= iM) break;
              this.highlightRange(MM, rM, iM, SM, jM), this.startSpan(Math.min(iM, MM.to), LM)
            }
          } while (MM.nextSibling());
          MM.parent()
        }
      }
    }
    const hM = jM.define,
      JM = hM(),
      dM = hM(),
      yM = hM(dM),
      lM = hM(dM),
      EM = hM(),
      UM = hM(EM),
      GM = hM(EM),
      CM = hM(),
      eM = hM(CM),
      bM = hM(),
      wM = hM(),
      tM = hM(),
      gM = hM(tM),
      uM = hM(),
      RM = {
        comment: JM,
        lineComment: hM(JM),
        blockComment: hM(JM),
        docComment: hM(JM),
        name: dM,
        variableName: hM(dM),
        typeName: yM,
        tagName: hM(yM),
        propertyName: lM,
        attributeName: hM(lM),
        className: hM(dM),
        labelName: hM(dM),
        namespace: hM(dM),
        macroName: hM(dM),
        literal: EM,
        string: UM,
        docString: hM(UM),
        character: hM(UM),
        attributeValue: hM(UM),
        number: GM,
        integer: hM(GM),
        float: hM(GM),
        bool: hM(EM),
        regexp: hM(EM),
        escape: hM(EM),
        color: hM(EM),
        url: hM(EM),
        keyword: bM,
        self: hM(bM),
        null: hM(bM),
        atom: hM(bM),
        unit: hM(bM),
        modifier: hM(bM),
        operatorKeyword: hM(bM),
        controlKeyword: hM(bM),
        definitionKeyword: hM(bM),
        moduleKeyword: hM(bM),
        operator: wM,
        derefOperator: hM(wM),
        arithmeticOperator: hM(wM),
        logicOperator: hM(wM),
        bitwiseOperator: hM(wM),
        compareOperator: hM(wM),
        updateOperator: hM(wM),
        definitionOperator: hM(wM),
        typeOperator: hM(wM),
        controlOperator: hM(wM),
        punctuation: tM,
        separator: hM(tM),
        bracket: gM,
        angleBracket: hM(gM),
        squareBracket: hM(gM),
        paren: hM(gM),
        brace: hM(gM),
        content: CM,
        heading: eM,
        heading1: hM(eM),
        heading2: hM(eM),
        heading3: hM(eM),
        heading4: hM(eM),
        heading5: hM(eM),
        heading6: hM(eM),
        contentSeparator: hM(CM),
        list: hM(CM),
        quote: hM(CM),
        emphasis: hM(CM),
        strong: hM(CM),
        link: hM(CM),
        monospace: hM(CM),
        strikethrough: hM(CM),
        inserted: hM(),
        deleted: hM(),
        changed: hM(),
        invalid: hM(),
        meta: uM,
        documentMeta: hM(uM),
        annotation: hM(uM),
        processingInstruction: hM(uM),
        definition: jM.defineModifier("definition"),
        constant: jM.defineModifier("constant"),
        function: jM.defineModifier("function"),
        standard: jM.defineModifier("standard"),
        local: jM.defineModifier("local"),
        special: jM.defineModifier("special")
      };
    for (let pM in RM) {
      let MM = RM[pM];
      MM instanceof jM && (MM.name = pM)
    }
    LM([{
      tag: RM.link,
      class: "tok-link"
    }, {
      tag: RM.heading,
      class: "tok-heading"
    }, {
      tag: RM.emphasis,
      class: "tok-emphasis"
    }, {
      tag: RM.strong,
      class: "tok-strong"
    }, {
      tag: RM.keyword,
      class: "tok-keyword"
    }, {
      tag: RM.atom,
      class: "tok-atom"
    }, {
      tag: RM.bool,
      class: "tok-bool"
    }, {
      tag: RM.url,
      class: "tok-url"
    }, {
      tag: RM.labelName,
      class: "tok-labelName"
    }, {
      tag: RM.inserted,
      class: "tok-inserted"
    }, {
      tag: RM.deleted,
      class: "tok-deleted"
    }, {
      tag: RM.literal,
      class: "tok-literal"
    }, {
      tag: RM.string,
      class: "tok-string"
    }, {
      tag: RM.number,
      class: "tok-number"
    }, {
      tag: [RM.regexp, RM.escape, RM.special(RM.string)],
      class: "tok-string2"
    }, {
      tag: RM.variableName,
      class: "tok-variableName"
    }, {
      tag: RM.local(RM.variableName),
      class: "tok-variableName tok-local"
    }, {
      tag: RM.definition(RM.variableName),
      class: "tok-variableName tok-definition"
    }, {
      tag: RM.special(RM.variableName),
      class: "tok-variableName2"
    }, {
      tag: RM.definition(RM.propertyName),
      class: "tok-propertyName tok-definition"
    }, {
      tag: RM.typeName,
      class: "tok-typeName"
    }, {
      tag: RM.namespace,
      class: "tok-namespace"
    }, {
      tag: RM.className,
      class: "tok-className"
    }, {
      tag: RM.macroName,
      class: "tok-macroName"
    }, {
      tag: RM.propertyName,
      class: "tok-propertyName"
    }, {
      tag: RM.operator,
      class: "tok-operator"
    }, {
      tag: RM.comment,
      class: "tok-comment"
    }, {
      tag: RM.meta,
      class: "tok-meta"
    }, {
      tag: RM.invalid,
      class: "tok-invalid"
    }, {
      tag: RM.punctuation,
      class: "tok-punctuation"
    }])
  },
  44023: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => PM.f,
      e: () => aM.y,
      i: () => aM.G,
      k: () => aM.H,
      l: () => PM.m,
      o: () => bi,
      r: () => PM.T,
      s: () => PM.nb
    });
    var OM = iM(1456),
      SM = iM(1453),
      jM = iM(44),
      aM = iM(43972),
      PM = iM(43977),
      nM = iM(43996),
      QM = iM(43998);

    function zM(MM, rM) {
      return iM => {
        let {
          state: OM,
          dispatch: SM
        } = iM;
        if (OM.readOnly) return !1;
        let jM = MM(rM, OM);
        return !!jM && (SM(OM.update(jM)), !0)
      }
    }
    const LM = zM(yM, 0),
      mM = zM(dM, 0),
      HM = zM(((MM, rM) => dM(MM, rM, function(MM) {
        let rM = [];
        for (let iM of MM.selection.Ld) {
          let OM = MM.doc.lineAt(iM.from),
            SM = iM.to <= OM.to ? OM : MM.doc.lineAt(iM.to);
          SM.from > OM.from && SM.from == iM.to && (SM = iM.to == OM.to + 1 ? OM : MM.doc.lineAt(iM.to - 1));
          let jM = rM.length - 1;
          jM >= 0 && rM[jM].to > OM.from ? rM[jM].to = SM.to : rM.push({
            from: OM.from + /^\s*/.exec(OM.text)[0].length,
            to: SM.to
          })
        }
        return rM
      }(rM))), 0);

    function hM(MM, rM) {
      let iM = MM.languageDataAt("commentTokens", rM, 1);
      return iM.length ? iM[0] : {}
    }
    const JM = 50;

    function dM(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : rM.selection.Ld,
        OM = iM.map((MM => hM(rM, MM.from).block));
      if (!OM.every((MM => MM))) return null;
      let SM = iM.map(((MM, iM) => function(MM, rM, iM, OM) {
        let SM, jM, {
            open: aM,
            close: PM
          } = rM,
          nM = MM.sliceDoc(iM - JM, iM),
          QM = MM.sliceDoc(OM, OM + JM),
          zM = /\s*$/.exec(nM)[0].length,
          LM = /^\s*/.exec(QM)[0].length,
          mM = nM.length - zM;
        if (nM.slice(mM - aM.length, mM) == aM && QM.slice(LM, LM + PM.length) == PM) return {
          open: {
            pos: iM - zM,
            margin: zM && 1
          },
          close: {
            pos: OM + LM,
            margin: LM && 1
          }
        };
        OM - iM <= 2 * JM ? SM = jM = MM.sliceDoc(iM, OM) : (SM = MM.sliceDoc(iM, iM + JM), jM = MM.sliceDoc(OM - JM, OM));
        let HM = /^\s*/.exec(SM)[0].length,
          hM = /\s*$/.exec(jM)[0].length,
          dM = jM.length - hM - PM.length;
        return SM.slice(HM, HM + aM.length) == aM && jM.slice(dM, dM + PM.length) == PM ? {
          open: {
            pos: iM + HM + aM.length,
            margin: /\s/.test(SM.charAt(HM + aM.length)) ? 1 : 0
          },
          close: {
            pos: OM - hM - PM.length,
            margin: /\s/.test(jM.charAt(dM - 1)) ? 1 : 0
          }
        } : null
      }(rM, OM[iM], MM.from, MM.to)));
      if (2 != MM && !SM.every((MM => MM))) return {
        changes: rM.changes(iM.map(((MM, rM) => SM[rM] ? [] : [{
          from: MM.from,
          insert: OM[rM].open + " "
        }, {
          from: MM.to,
          insert: " " + OM[rM].close
        }])))
      };
      if (1 != MM && SM.some((MM => MM))) {
        let MM = [];
        for (let rM, iM = 0; iM < SM.length; iM++)
          if (rM = SM[iM]) {
            let SM = OM[iM],
              {
                open: jM,
                close: aM
              } = rM;
            MM.push({
              from: jM.pos - SM.open.length,
              to: jM.pos + jM.margin
            }, {
              from: aM.pos - aM.margin,
              to: aM.pos + SM.close.length
            })
          } return {
          changes: MM
        }
      }
      return null
    }

    function yM(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : rM.selection.Ld,
        OM = [],
        SM = -1;
      MM: for (let {
          from: jM,
          to: aM
        }
        of iM) {
        let MM, iM = OM.length,
          PM = 1e9;
        for (let nM = jM; nM <= aM;) {
          let iM = rM.doc.lineAt(nM);
          if (void 0 == MM && (MM = hM(rM, iM.from).line, !MM)) continue MM;
          if (iM.from > SM && (jM == aM || aM > iM.from)) {
            SM = iM.from;
            let rM = /^\s*/.exec(iM.text)[0].length,
              jM = rM == iM.length,
              aM = iM.text.slice(rM, rM + MM.length) == MM ? rM : -1;
            rM < iM.text.length && rM < PM && (PM = rM), OM.push({
              line: iM,
              comment: aM,
              token: MM,
              indent: rM,
              empty: jM,
              single: !1
            })
          }
          nM = iM.to + 1
        }
        if (PM < 1e9)
          for (let rM = iM; rM < OM.length; rM++) OM[rM].indent < OM[rM].line.text.length && (OM[rM].indent = PM);
        OM.length == iM + 1 && (OM[iM].single = !0)
      }
      if (2 != MM && OM.some((MM => MM.comment < 0 && (!MM.empty || MM.single)))) {
        let MM = [];
        for (let {
            line: rM,
            token: SM,
            indent: jM,
            empty: aM,
            single: PM
          }
          of OM) !PM && aM || MM.push({
          from: rM.from + jM,
          insert: SM + " "
        });
        let iM = rM.changes(MM);
        return {
          changes: iM,
          selection: rM.selection.map(iM, 1)
        }
      }
      if (1 != MM && OM.some((MM => MM.comment >= 0))) {
        let MM = [];
        for (let {
            line: rM,
            comment: iM,
            token: SM
          }
          of OM)
          if (iM >= 0) {
            let OM = rM.from + iM,
              jM = OM + SM.length;
            " " == rM.text[jM - rM.from] && jM++, MM.push({
              from: OM,
              to: jM
            })
          } return {
          changes: MM
        }
      }
      return null
    }
    const lM = aM.e.define(),
      EM = aM.e.define(),
      UM = aM.s.define(),
      GM = aM.s.define({
        combine: MM => (0, aM.V)(MM, {
          minDepth: 100,
          newGroupDelay: 500,
          joinToEvent: (MM, rM) => rM
        }, {
          minDepth: Math.max,
          newGroupDelay: Math.min,
          joinToEvent: (MM, rM) => (iM, OM) => MM(iM, OM) || rM(iM, OM)
        })
      }),
      CM = aM.H.define({
        create: () => YM.empty,
        update(MM, rM) {
          let iM = rM.state.facet(GM),
            OM = rM.annotation(lM);
          if (OM) {
            let SM = uM.fromTransaction(rM, OM.selection),
              jM = OM.side,
              aM = 0 == jM ? MM.undone : MM.done;
            return aM = SM ? RM(aM, aM.length, iM.minDepth, SM) : DM(aM, rM.startState.selection), new YM(0 == jM ? OM.rest : aM, 0 == jM ? aM : OM.rest)
          }
          let SM = rM.annotation(EM);
          if ("full" != SM && "before" != SM || (MM = MM.isolate()), !1 === rM.annotation(aM.M.addToHistory)) return rM.changes.empty ? MM : MM.addMapping(rM.changes.desc);
          let jM = uM.fromTransaction(rM),
            PM = rM.annotation(aM.M.time),
            nM = rM.annotation(aM.M.userEvent);
          return jM ? MM = MM.addChanges(jM, PM, nM, iM, rM) : rM.selection && (MM = MM.addSelection(rM.startState.selection, PM, nM, iM.newGroupDelay)), "full" != SM && "after" != SM || (MM = MM.isolate()), MM
        },
        toJSON: MM => ({
          done: MM.done.map((MM => MM.toJSON())),
          undone: MM.undone.map((MM => MM.toJSON()))
        }),
        fromJSON: MM => new YM(MM.done.map(uM.fromJSON), MM.undone.map(uM.fromJSON))
      });

    function eM(MM, rM) {
      return function(iM) {
        let {
          state: OM,
          dispatch: SM
        } = iM;
        if (!rM && OM.readOnly) return !1;
        let jM = OM.field(CM, !1);
        if (!jM) return !1;
        let aM = jM.pop(MM, OM, rM);
        return !!aM && (SM(aM), !0)
      }
    }
    const bM = eM(0, !1),
      wM = eM(1, !1),
      tM = eM(0, !0),
      gM = eM(1, !0);
    class uM {
      constructor(MM, rM, iM, OM, SM) {
        this.changes = MM, this.effects = rM, this.mapped = iM, this.startSelection = OM, this.selectionsAfter = SM
      }
      setSelAfter(MM) {
        return new uM(this.changes, this.effects, this.mapped, this.startSelection, MM)
      }
      toJSON() {
        var MM, rM, iM;
        return {
          changes: null === (MM = this.changes) || void 0 === MM ? void 0 : MM.toJSON(),
          mapped: null === (rM = this.mapped) || void 0 === rM ? void 0 : rM.toJSON(),
          startSelection: null === (iM = this.startSelection) || void 0 === iM ? void 0 : iM.toJSON(),
          selectionsAfter: this.selectionsAfter.map((MM => MM.toJSON()))
        }
      }
      static fromJSON(MM) {
        return new uM(MM.changes && aM.ChangeSet.fromJSON(MM.changes), [], MM.mapped && aM.f.fromJSON(MM.mapped), MM.startSelection && aM.l.fromJSON(MM.startSelection), MM.selectionsAfter.map(aM.l.fromJSON))
      }
      static fromTransaction(MM, rM) {
        let iM = WM;
        for (let OM of MM.startState.facet(UM)) {
          let rM = OM(MM);
          rM.length && (iM = iM.concat(rM))
        }
        return !iM.length && MM.changes.empty ? null : new uM(MM.changes.invert(MM.startState.doc), iM, void 0, rM || MM.startState.selection, WM)
      }
      static selection(MM) {
        return new uM(void 0, WM, void 0, void 0, MM)
      }
    }

    function RM(MM, rM, iM, OM) {
      let SM = rM + 1 > iM + 20 ? rM - iM - 1 : 0,
        jM = MM.slice(SM, rM);
      return jM.push(OM), jM
    }

    function pM(MM, rM) {
      return MM.length ? rM.length ? MM.concat(rM) : MM : rM
    }
    const WM = [],
      sM = 200;

    function DM(MM, rM) {
      if (MM.length) {
        let iM = MM[MM.length - 1],
          OM = iM.selectionsAfter.slice(Math.max(0, iM.selectionsAfter.length - sM));
        return OM.length && OM[OM.length - 1].eq(rM) ? MM : (OM.push(rM), RM(MM, MM.length - 1, 1e9, iM.setSelAfter(OM)))
      }
      return [uM.selection([rM])]
    }

    function kM(MM) {
      let rM = MM[MM.length - 1],
        iM = MM.slice();
      return iM[MM.length - 1] = rM.setSelAfter(rM.selectionsAfter.slice(0, rM.selectionsAfter.length - 1)), iM
    }

    function ZM(MM, rM) {
      if (!MM.length) return MM;
      let iM = MM.length,
        OM = WM;
      for (; iM;) {
        let SM = oM(MM[iM - 1], rM, OM);
        if (SM.changes && !SM.changes.empty || SM.effects.length) {
          let rM = MM.slice(0, iM);
          return rM[iM - 1] = SM, rM
        }
        rM = SM.mapped, iM--, OM = SM.selectionsAfter
      }
      return OM.length ? [uM.selection(OM)] : WM
    }

    function oM(MM, rM, iM) {
      let OM = pM(MM.selectionsAfter.length ? MM.selectionsAfter.map((MM => MM.map(rM))) : WM, iM);
      if (!MM.changes) return uM.selection(OM);
      let SM = MM.changes.map(rM),
        jM = rM.mapDesc(MM.changes, !0),
        PM = MM.mapped ? MM.mapped.composeDesc(jM) : jM;
      return new uM(SM, aM.G.mapEffects(MM.effects, rM), PM, MM.startSelection.map(jM), OM)
    }
    const fM = /^(input\.type|delete)($|\.)/;
    class YM {
      constructor(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        this.done = MM, this.undone = rM, this.prevTime = iM, this.prevUserEvent = OM
      }
      isolate() {
        return this.prevTime ? new YM(this.done, this.undone) : this
      }
      addChanges(MM, rM, iM, OM, SM) {
        let jM = this.done,
          PM = jM[jM.length - 1];
        return jM = PM && PM.changes && !PM.changes.empty && MM.changes && (!iM || fM.test(iM)) && (!PM.selectionsAfter.length && rM - this.prevTime < OM.newGroupDelay && OM.joinToEvent(SM, function(MM, rM) {
          let iM = [],
            OM = !1;
          return MM.iterChangedRanges(((MM, rM) => iM.push(MM, rM))), rM.iterChangedRanges(((MM, rM, SM, jM) => {
            for (let aM = 0; aM < iM.length;) {
              let MM = iM[aM++],
                rM = iM[aM++];
              jM >= MM && SM <= rM && (OM = !0)
            }
          })), OM
        }(PM.changes, MM.changes)) || "input.type.compose" == iM) ? RM(jM, jM.length - 1, OM.minDepth, new uM(MM.changes.compose(PM.changes), pM(aM.G.mapEffects(MM.effects, PM.changes), PM.effects), PM.mapped, PM.startSelection, WM)) : RM(jM, jM.length, OM.minDepth, MM), new YM(jM, WM, rM, iM)
      }
      addSelection(MM, rM, iM, OM) {
        let SM = this.done.length ? this.done[this.done.length - 1].selectionsAfter : WM;
        return SM.length > 0 && rM - this.prevTime < OM && iM == this.prevUserEvent && iM && /^select($|\.)/.test(iM) && (jM = SM[SM.length - 1], aM = MM, jM.Ld.length == aM.Ld.length && 0 === jM.Ld.filter(((MM, rM) => MM.empty != aM.Ld[rM].empty)).length) ? this : new YM(DM(this.done, MM), this.undone, rM, iM);
        var jM, aM
      }
      addMapping(MM) {
        return new YM(ZM(this.done, MM), ZM(this.undone, MM), this.prevTime, this.prevUserEvent)
      }
      pop(MM, rM, iM) {
        let OM = 0 == MM ? this.done : this.undone;
        if (0 == OM.length) return null;
        let SM = OM[OM.length - 1],
          jM = SM.selectionsAfter[0] || (SM.startSelection ? SM.startSelection.map(SM.changes.invertedDesc, 1) : rM.selection);
        if (iM && SM.selectionsAfter.length) return rM.update({
          selection: SM.selectionsAfter[SM.selectionsAfter.length - 1],
          annotations: lM.of({
            side: MM,
            rest: kM(OM),
            selection: jM
          }),
          userEvent: 0 == MM ? "select.undo" : "select.redo",
          scrollIntoView: !0
        });
        if (SM.changes) {
          let iM = 1 == OM.length ? WM : OM.slice(0, OM.length - 1);
          return SM.mapped && (iM = ZM(iM, SM.mapped)), rM.update({
            changes: SM.changes,
            selection: SM.startSelection,
            effects: SM.effects,
            annotations: lM.of({
              side: MM,
              rest: iM,
              selection: jM
            }),
            filter: !1,
            userEvent: 0 == MM ? "undo" : "redo",
            scrollIntoView: !0
          })
        }
        return null
      }
    }
    YM.empty = new YM(WM, WM);
    const NM = [{
      key: "Mod-z",
      run: bM,
      preventDefault: !0
    }, {
      key: "Mod-y",
      mac: "Mod-Shift-z",
      run: wM,
      preventDefault: !0
    }, {
      linux: "Ctrl-Shift-z",
      run: wM,
      preventDefault: !0
    }, {
      key: "Mod-u",
      run: tM,
      preventDefault: !0
    }, {
      key: "Alt-u",
      mac: "Mod-Shift-u",
      run: gM,
      preventDefault: !0
    }];

    function AM(MM, rM) {
      return aM.l.create(MM.Ld.map(rM), MM.mainIndex)
    }

    function xM(MM, rM) {
      return MM.update({
        selection: rM,
        scrollIntoView: !0,
        userEvent: "select"
      })
    }

    function vM(MM, rM) {
      let {
        state: iM,
        dispatch: OM
      } = MM, SM = AM(iM.selection, rM);
      return !SM.eq(iM.selection, !0) && (OM(xM(iM, SM)), !0)
    }

    function FM(MM, rM) {
      return aM.l.cursor(rM ? MM.to : MM.from)
    }

    function BM(MM, rM) {
      return vM(MM, (iM => iM.empty ? MM.moveByChar(iM, rM) : FM(iM, rM)))
    }

    function XM(MM) {
      return MM.textDirectionAt(MM.state.selection.main.head) == PM.d.LTR
    }
    const IM = MM => BM(MM, !XM(MM)),
      KM = MM => BM(MM, XM(MM));

    function qM(MM, rM) {
      return vM(MM, (iM => iM.empty ? MM.moveByGroup(iM, rM) : FM(iM, rM)))
    }
    "undefined" != typeof Intl && Intl.Segmenter;

    function TM(MM, rM, iM) {
      if (rM.type.prop(iM)) return !0;
      let OM = rM.to - rM.from;
      return OM && (OM > 2 || /[^\s,.;:]/.test(MM.sliceDoc(rM.from, rM.to))) || rM.firstChild
    }

    function VM(MM, rM, iM) {
      let OM, SM, jM = (0, nM.kb)(MM).resolveInner(rM.head),
        PM = iM ? QM.f.closedBy : QM.f.openedBy;
      for (let aM = rM.head;;) {
        let rM = iM ? jM.childAfter(aM) : jM.childBefore(aM);
        if (!rM) break;
        TM(MM, rM, PM) ? jM = rM : aM = iM ? rM.to : rM.from
      }
      return SM = jM.type.prop(PM) && (OM = iM ? (0, nM.Y)(MM, jM.from, 1) : (0, nM.Y)(MM, jM.to, -1)) && OM.matched ? iM ? OM.end.to : OM.end.from : iM ? jM.to : jM.from, aM.l.cursor(SM, iM ? -1 : 1)
    }

    function cM(MM, rM) {
      return vM(MM, (iM => {
        if (!iM.empty) return FM(iM, rM);
        let OM = MM.moveVertically(iM, rM);
        return OM.head != iM.head ? OM : MM.moveToLineBoundary(iM, rM)
      }))
    }
    const Mr = MM => cM(MM, !1),
      rr = MM => cM(MM, !0);

    function ir(MM) {
      let rM, iM = MM.scrollDOM.clientHeight < MM.scrollDOM.scrollHeight - 2,
        OM = 0,
        SM = 0;
      if (iM) {
        for (let rM of MM.state.facet(PM.f.scrollMargins)) {
          let iM = rM(MM);
          (null === iM || void 0 === iM ? void 0 : iM.top) && (OM = Math.max(null === iM || void 0 === iM ? void 0 : iM.top, OM)), (null === iM || void 0 === iM ? void 0 : iM.bottom) && (SM = Math.max(null === iM || void 0 === iM ? void 0 : iM.bottom, SM))
        }
        rM = MM.scrollDOM.clientHeight - OM - SM
      } else rM = (MM.dom.ownerDocument.defaultView || window).innerHeight;
      return {
        marginTop: OM,
        marginBottom: SM,
        selfScroll: iM,
        height: Math.max(MM.defaultLineHeight, rM - 5)
      }
    }

    function Or(MM, rM) {
      let iM, OM = ir(MM),
        {
          state: SM
        } = MM,
        jM = AM(SM.selection, (iM => iM.empty ? MM.moveVertically(iM, rM, OM.height) : FM(iM, rM)));
      if (jM.eq(SM.selection)) return !1;
      if (OM.selfScroll) {
        let rM = MM.coordsAtPos(SM.selection.main.head),
          aM = MM.scrollDOM.getBoundingClientRect(),
          nM = aM.top + OM.marginTop,
          QM = aM.bottom - OM.marginBottom;
        rM && rM.top > nM && rM.bottom < QM && (iM = PM.f.scrollIntoView(jM.main.head, {
          y: "start",
          yMargin: rM.top - nM
        }))
      }
      return MM.dispatch(xM(SM, jM), {
        effects: iM
      }), !0
    }
    const Sr = MM => Or(MM, !1),
      jr = MM => Or(MM, !0);

    function ar(MM, rM, iM) {
      let OM = MM.lineBlockAt(rM.head),
        SM = MM.moveToLineBoundary(rM, iM);
      if (SM.head == rM.head && SM.head != (iM ? OM.to : OM.from) && (SM = MM.moveToLineBoundary(rM, iM, !1)), !iM && SM.head == OM.from && OM.length) {
        let iM = /^\s*/.exec(MM.state.sliceDoc(OM.from, Math.min(OM.from + 100, OM.to)))[0].length;
        iM && rM.head != OM.from + iM && (SM = aM.l.cursor(OM.from + iM))
      }
      return SM
    }

    function Pr(MM, rM, iM) {
      let OM = !1,
        SM = AM(MM.selection, (rM => {
          let SM = (0, nM.Y)(MM, rM.head, -1) || (0, nM.Y)(MM, rM.head, 1) || rM.head > 0 && (0, nM.Y)(MM, rM.head - 1, 1) || rM.head < MM.doc.length && (0, nM.Y)(MM, rM.head + 1, -1);
          if (!SM || !SM.end) return rM;
          OM = !0;
          let jM = SM.start.from == rM.head ? SM.end.to : SM.end.from;
          return iM ? aM.l.range(rM.anchor, jM) : aM.l.cursor(jM)
        }));
      return !!OM && (rM(xM(MM, SM)), !0)
    }

    function nr(MM, rM) {
      let iM = AM(MM.state.selection, (MM => {
        let iM = rM(MM);
        return aM.l.range(MM.anchor, iM.head, iM.goalColumn, iM.bidiLevel || void 0, iM.assoc)
      }));
      return !iM.eq(MM.state.selection) && (MM.dispatch(xM(MM.state, iM)), !0)
    }

    function Qr(MM, rM) {
      return nr(MM, (iM => MM.moveByChar(iM, rM)))
    }
    const zr = MM => Qr(MM, !XM(MM)),
      Lr = MM => Qr(MM, XM(MM));

    function mr(MM, rM) {
      return nr(MM, (iM => MM.moveByGroup(iM, rM)))
    }

    function Hr(MM, rM) {
      return nr(MM, (iM => MM.moveVertically(iM, rM)))
    }
    const hr = MM => Hr(MM, !1),
      Jr = MM => Hr(MM, !0);

    function dr(MM, rM) {
      return nr(MM, (iM => MM.moveVertically(iM, rM, ir(MM).height)))
    }
    const yr = MM => dr(MM, !1),
      lr = MM => dr(MM, !0),
      Er = MM => {
        let {
          state: rM,
          dispatch: iM
        } = MM;
        return iM(xM(rM, {
          anchor: 0
        })), !0
      },
      Ur = MM => {
        let {
          state: rM,
          dispatch: iM
        } = MM;
        return iM(xM(rM, {
          anchor: rM.doc.length
        })), !0
      },
      Gr = MM => {
        let {
          state: rM,
          dispatch: iM
        } = MM;
        return iM(xM(rM, {
          anchor: rM.selection.main.anchor,
          head: 0
        })), !0
      },
      Cr = MM => {
        let {
          state: rM,
          dispatch: iM
        } = MM;
        return iM(xM(rM, {
          anchor: rM.selection.main.anchor,
          head: rM.doc.length
        })), !0
      };

    function er(MM, rM) {
      let {
        state: iM
      } = MM, OM = iM.selection, SM = iM.selection.Ld.slice();
      for (let jM of iM.selection.Ld) {
        let OM = iM.doc.lineAt(jM.head);
        if (rM ? OM.to < MM.state.doc.length : OM.from > 0)
          for (let iM = jM;;) {
            let jM = MM.moveVertically(iM, rM);
            if (jM.head < OM.from || jM.head > OM.to) {
              SM.some((MM => MM.head == jM.head)) || SM.push(jM);
              break
            }
            if (jM.head == iM.head) break;
            iM = jM
          }
      }
      return SM.length != OM.Ld.length && (MM.dispatch(xM(iM, aM.l.create(SM, SM.length - 1))), !0)
    }

    function br(MM, rM) {
      if (MM.state.readOnly) return !1;
      let iM = "delete.selection",
        {
          state: OM
        } = MM,
        SM = OM.changeByRange((OM => {
          let {
            from: SM,
            to: jM
          } = OM;
          if (SM == jM) {
            let aM = rM(OM);
            aM < SM ? (iM = "delete.backward", aM = wr(MM, aM, !1)) : aM > SM && (iM = "delete.forward", aM = wr(MM, aM, !0)), SM = Math.min(SM, aM), jM = Math.max(jM, aM)
          } else SM = wr(MM, SM, !1), jM = wr(MM, jM, !0);
          return SM == jM ? {
            range: OM
          } : {
            changes: {
              from: SM,
              to: jM
            },
            range: aM.l.cursor(SM, SM < OM.head ? -1 : 1)
          }
        }));
      return !SM.changes.empty && (MM.dispatch(OM.update(SM, {
        scrollIntoView: !0,
        userEvent: iM,
        effects: "delete.selection" == iM ? PM.f.announce.of(OM.phrase("Selection deleted")) : void 0
      })), !0)
    }

    function wr(MM, rM, iM) {
      if (MM instanceof PM.f)
        for (let OM of MM.state.facet(PM.f.atomicRanges).map((rM => rM(MM)))) OM.between(rM, rM, ((MM, OM) => {
          MM < rM && OM > rM && (rM = iM ? OM : MM)
        }));
      return rM
    }
    const tr = (MM, rM, iM) => br(MM, (OM => {
        let SM, jM, PM = OM.from,
          {
            state: QM
          } = MM,
          zM = QM.doc.lineAt(PM);
        if (iM && !rM && PM > zM.from && PM < zM.from + 200 && !/[^ \t]/.test(SM = zM.text.slice(0, PM - zM.from))) {
          if ("\t" == SM[SM.length - 1]) return PM - 1;
          let MM = (0, aM.Y)(SM, QM.tabSize) % (0, nM.L)(QM) || (0, nM.L)(QM);
          for (let rM = 0; rM < MM && " " == SM[SM.length - 1 - rM]; rM++) PM--;
          jM = PM
        } else jM = (0, aM.$)(zM.text, PM - zM.from, rM, rM) + zM.from, jM == PM && zM.number != (rM ? QM.doc.lines : 1) ? jM += rM ? 1 : -1 : !rM && /[\ufe00-\ufe0f]/.test(zM.text.slice(jM - zM.from, PM - zM.from)) && (jM = (0, aM.$)(zM.text, jM - zM.from, !1, !1) + zM.from);
        return jM
      })),
      gr = MM => tr(MM, !1, !0),
      ur = MM => tr(MM, !0, !1),
      Rr = (MM, rM) => br(MM, (iM => {
        let OM = iM.head,
          {
            state: SM
          } = MM,
          jM = SM.doc.lineAt(OM),
          PM = SM.charCategorizer(OM);
        for (let MM = null;;) {
          if (OM == (rM ? jM.to : jM.from)) {
            OM == iM.head && jM.number != (rM ? SM.doc.lines : 1) && (OM += rM ? 1 : -1);
            break
          }
          let nM = (0, aM.$)(jM.text, OM - jM.from, rM) + jM.from,
            QM = jM.text.slice(Math.min(OM, nM) - jM.from, Math.max(OM, nM) - jM.from),
            zM = PM(QM);
          if (null != MM && zM != MM) break;
          " " == QM && OM == iM.head || (MM = zM), OM = nM
        }
        return OM
      })),
      pr = MM => Rr(MM, !1);

    function Wr(MM) {
      let rM = [],
        iM = -1;
      for (let OM of MM.selection.Ld) {
        let SM = MM.doc.lineAt(OM.from),
          jM = MM.doc.lineAt(OM.to);
        if (OM.empty || OM.to != jM.from || (jM = MM.doc.lineAt(OM.to - 1)), iM >= SM.number) {
          let MM = rM[rM.length - 1];
          MM.to = jM.to, MM.Ld.push(OM)
        } else rM.push({
          from: SM.from,
          to: jM.to,
          Ld: [OM]
        });
        iM = jM.number + 1
      }
      return rM
    }

    function sr(MM, rM, iM) {
      if (MM.readOnly) return !1;
      let OM = [],
        SM = [];
      for (let jM of Wr(MM)) {
        if (iM ? jM.to == MM.doc.length : 0 == jM.from) continue;
        let rM = MM.doc.lineAt(iM ? jM.to + 1 : jM.from - 1),
          PM = rM.length + 1;
        if (iM) {
          OM.push({
            from: jM.to,
            to: rM.to
          }, {
            from: jM.from,
            insert: rM.text + MM.lineBreak
          });
          for (let rM of jM.Ld) SM.push(aM.l.range(Math.min(MM.doc.length, rM.anchor + PM), Math.min(MM.doc.length, rM.head + PM)))
        } else {
          OM.push({
            from: rM.from,
            to: jM.from
          }, {
            from: jM.to,
            insert: MM.lineBreak + rM.text
          });
          for (let MM of jM.Ld) SM.push(aM.l.range(MM.anchor - PM, MM.head - PM))
        }
      }
      return !!OM.length && (rM(MM.update({
        changes: OM,
        scrollIntoView: !0,
        selection: aM.l.create(SM, MM.selection.mainIndex),
        userEvent: "move.line"
      })), !0)
    }

    function Dr(MM, rM, iM) {
      if (MM.readOnly) return !1;
      let OM = [];
      for (let jM of Wr(MM)) iM ? OM.push({
        from: jM.from,
        insert: MM.doc.slice(jM.from, jM.to) + MM.lineBreak
      }) : OM.push({
        from: jM.to,
        insert: MM.lineBreak + MM.doc.slice(jM.from, jM.to)
      });
      let SM = MM.changes(OM);
      return rM(MM.update({
        changes: SM,
        selection: MM.selection.map(SM, iM ? 1 : -1),
        scrollIntoView: !0,
        userEvent: "input.copyline"
      })), !0
    }
    const kr = Zr(!1);

    function Zr(MM) {
      return rM => {
        let {
          state: iM,
          dispatch: OM
        } = rM;
        if (iM.readOnly) return !1;
        let SM = iM.changeByRange((rM => {
          let {
            from: OM,
            to: SM
          } = rM, jM = iM.doc.lineAt(OM), PM = !MM && OM == SM && function(MM, rM) {
            if (/\(\)|\[\]|\{\}/.test(MM.sliceDoc(rM - 1, rM + 1))) return {
              from: rM,
              to: rM
            };
            let iM, OM = (0, nM.kb)(MM).resolveInner(rM),
              SM = OM.childBefore(rM),
              jM = OM.childAfter(rM);
            return SM && jM && SM.to <= rM && jM.from >= rM && (iM = SM.type.prop(QM.f.closedBy)) && iM.indexOf(jM.name) > -1 && MM.doc.lineAt(SM.to).from == MM.doc.lineAt(jM.from).from && !/\S/.test(MM.sliceDoc(SM.to, jM.from)) ? {
              from: SM.to,
              to: jM.from
            } : null
          }(iM, OM);
          MM && (OM = SM = (SM <= jM.to ? jM : iM.doc.lineAt(SM)).to);
          let zM = new nM.e(iM, {
              simulateBreak: OM,
              simulateDoubleBreak: !!PM
            }),
            LM = (0, nM.O)(zM, OM);
          for (null == LM && (LM = (0, aM.Y)(/^\s*/.exec(iM.doc.lineAt(OM).text)[0], iM.tabSize)); SM < jM.to && /\s/.test(jM.text[SM - jM.from]);) SM++;
          PM ? ({
            from: OM,
            to: SM
          } = PM) : OM > jM.from && OM < jM.from + 100 && !/\S/.test(jM.text.slice(0, OM)) && (OM = jM.from);
          let mM = ["", (0, nM.U)(iM, LM)];
          return PM && mM.push((0, nM.U)(iM, zM.lineIndent(jM.from, -1))), {
            changes: {
              from: OM,
              to: SM,
              insert: aM.K.of(mM)
            },
            range: aM.l.cursor(OM + 1 + mM[1].length)
          }
        }));
        return OM(iM.update(SM, {
          scrollIntoView: !0,
          userEvent: "input"
        })), !0
      }
    }

    function or(MM, rM) {
      let iM = -1;
      return MM.changeByRange((OM => {
        let SM = [];
        for (let aM = OM.from; aM <= OM.to;) {
          let jM = MM.doc.lineAt(aM);
          jM.number > iM && (OM.empty || OM.to > jM.from) && (rM(jM, SM, OM), iM = jM.number), aM = jM.to + 1
        }
        let jM = MM.changes(SM);
        return {
          changes: SM,
          range: aM.l.range(jM.mapPos(OM.anchor, 1), jM.mapPos(OM.head, 1))
        }
      }))
    }
    const fr = MM => {
        let {
          state: rM,
          dispatch: iM
        } = MM;
        return !rM.readOnly && (iM(rM.update(or(rM, ((MM, iM) => {
          iM.push({
            from: MM.from,
            insert: rM.facet(nM.X)
          })
        })), {
          userEvent: "input.indent"
        })), !0)
      },
      Yr = MM => {
        let {
          state: rM,
          dispatch: iM
        } = MM;
        return !rM.readOnly && (iM(rM.update(or(rM, ((MM, iM) => {
          let OM = /^\s*/.exec(MM.text)[0];
          if (!OM) return;
          let SM = (0, aM.Y)(OM, rM.tabSize),
            jM = 0,
            PM = (0, nM.U)(rM, Math.max(0, SM - (0, nM.L)(rM)));
          for (; jM < OM.length && jM < PM.length && OM.charCodeAt(jM) == PM.charCodeAt(jM);) jM++;
          iM.push({
            from: MM.from + jM,
            to: MM.from + OM.length,
            insert: PM.slice(jM)
          })
        })), {
          userEvent: "delete.dedent"
        })), !0)
      },
      Nr = [{
        key: "Alt-ArrowLeft",
        mac: "Ctrl-ArrowLeft",
        run: MM => vM(MM, (rM => VM(MM.state, rM, !XM(MM)))),
        shift: MM => nr(MM, (rM => VM(MM.state, rM, !XM(MM))))
      }, {
        key: "Alt-ArrowRight",
        mac: "Ctrl-ArrowRight",
        run: MM => vM(MM, (rM => VM(MM.state, rM, XM(MM)))),
        shift: MM => nr(MM, (rM => VM(MM.state, rM, XM(MM))))
      }, {
        key: "Alt-ArrowUp",
        run: MM => {
          let {
            state: rM,
            dispatch: iM
          } = MM;
          return sr(rM, iM, !1)
        }
      }, {
        key: "Shift-Alt-ArrowUp",
        run: MM => {
          let {
            state: rM,
            dispatch: iM
          } = MM;
          return Dr(rM, iM, !1)
        }
      }, {
        key: "Alt-ArrowDown",
        run: MM => {
          let {
            state: rM,
            dispatch: iM
          } = MM;
          return sr(rM, iM, !0)
        }
      }, {
        key: "Shift-Alt-ArrowDown",
        run: MM => {
          let {
            state: rM,
            dispatch: iM
          } = MM;
          return Dr(rM, iM, !0)
        }
      }, {
        key: "Mod-Alt-ArrowUp",
        run: MM => er(MM, !1)
      }, {
        key: "Mod-Alt-ArrowDown",
        run: MM => er(MM, !0)
      }, {
        key: "Escape",
        run: MM => {
          let {
            state: rM,
            dispatch: iM
          } = MM, OM = rM.selection, SM = null;
          return OM.Ld.length > 1 ? SM = aM.l.create([OM.main]) : OM.main.empty || (SM = aM.l.create([aM.l.cursor(OM.main.head)])), !!SM && (iM(xM(rM, SM)), !0)
        }
      }, {
        key: "Mod-Enter",
        run: Zr(!0)
      }, {
        key: "Alt-l",
        mac: "Ctrl-l",
        run: MM => {
          let {
            state: rM,
            dispatch: iM
          } = MM, OM = Wr(rM).map((MM => {
            let {
              from: iM,
              to: OM
            } = MM;
            return aM.l.range(iM, Math.min(OM + 1, rM.doc.length))
          }));
          return iM(rM.update({
            selection: aM.l.create(OM),
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Mod-i",
        run: MM => {
          let {
            state: rM,
            dispatch: iM
          } = MM, OM = AM(rM.selection, (MM => {
            let iM = (0, nM.kb)(rM),
              OM = iM.resolveStack(MM.from, 1);
            if (MM.empty) {
              let rM = iM.resolveStack(MM.from, -1);
              rM.node.from >= OM.node.from && rM.node.to <= OM.node.to && (OM = rM)
            }
            for (let rM = OM; rM; rM = rM.next) {
              let {
                node: iM
              } = rM;
              if ((iM.from < MM.from && iM.to >= MM.to || iM.to > MM.to && iM.from <= MM.from) && rM.next) return aM.l.range(iM.to, iM.from)
            }
            return MM
          }));
          return !OM.eq(rM.selection) && (iM(xM(rM, OM)), !0)
        },
        preventDefault: !0
      }, {
        key: "Mod-[",
        run: Yr
      }, {
        key: "Mod-]",
        run: fr
      }, {
        key: "Mod-Alt-\\",
        run: MM => {
          let {
            state: rM,
            dispatch: iM
          } = MM;
          if (rM.readOnly) return !1;
          let OM = Object.create(null),
            SM = new nM.e(rM, {
              overrideIndentation: MM => {
                let rM = OM[MM];
                return null == rM ? -1 : rM
              }
            }),
            jM = or(rM, ((MM, iM, jM) => {
              let aM = (0, nM.O)(SM, MM.from);
              if (null == aM) return;
              /\S/.test(MM.text) || (aM = 0);
              let PM = /^\s*/.exec(MM.text)[0],
                QM = (0, nM.U)(rM, aM);
              (PM != QM || jM.from < MM.from + PM.length) && (OM[MM.from] = aM, iM.push({
                from: MM.from,
                to: MM.from + PM.length,
                insert: QM
              }))
            }));
          return jM.changes.empty || iM(rM.update(jM, {
            userEvent: "indent"
          })), !0
        }
      }, {
        key: "Shift-Mod-k",
        run: MM => {
          if (MM.state.readOnly) return !1;
          let {
            state: rM
          } = MM, iM = rM.changes(Wr(rM).map((MM => {
            let {
              from: iM,
              to: OM
            } = MM;
            return iM > 0 ? iM-- : OM < rM.doc.length && OM++, {
              from: iM,
              to: OM
            }
          }))), OM = AM(rM.selection, (rM => {
            let iM;
            if (MM.lineWrapping) {
              let OM = MM.lineBlockAt(rM.head),
                SM = MM.coordsAtPos(rM.head, rM.assoc || 1);
              SM && (iM = OM.bottom + MM.documentTop - SM.bottom + MM.defaultLineHeight / 2)
            }
            return MM.moveVertically(rM, !0, iM)
          })).map(iM);
          return MM.dispatch({
            changes: iM,
            selection: OM,
            scrollIntoView: !0,
            userEvent: "delete.line"
          }), !0
        }
      }, {
        key: "Shift-Mod-\\",
        run: MM => {
          let {
            state: rM,
            dispatch: iM
          } = MM;
          return Pr(rM, iM, !1)
        }
      }, {
        key: "Mod-/",
        run: MM => {
          let {
            state: rM
          } = MM, iM = rM.doc.lineAt(rM.selection.main.from), OM = hM(MM.state, iM.from);
          return OM.line ? LM(MM) : !!OM.block && HM(MM)
        }
      }, {
        key: "Alt-A",
        run: mM
      }, {
        key: "Ctrl-m",
        mac: "Shift-Alt-m",
        run: MM => (MM.setTabFocusMode(), !0)
      }].concat([{
        key: "ArrowLeft",
        run: IM,
        shift: zr,
        preventDefault: !0
      }, {
        key: "Mod-ArrowLeft",
        mac: "Alt-ArrowLeft",
        run: MM => qM(MM, !XM(MM)),
        shift: MM => mr(MM, !XM(MM)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowLeft",
        run: MM => vM(MM, (rM => ar(MM, rM, !XM(MM)))),
        shift: MM => nr(MM, (rM => ar(MM, rM, !XM(MM)))),
        preventDefault: !0
      }, {
        key: "ArrowRight",
        run: KM,
        shift: Lr,
        preventDefault: !0
      }, {
        key: "Mod-ArrowRight",
        mac: "Alt-ArrowRight",
        run: MM => qM(MM, XM(MM)),
        shift: MM => mr(MM, XM(MM)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowRight",
        run: MM => vM(MM, (rM => ar(MM, rM, XM(MM)))),
        shift: MM => nr(MM, (rM => ar(MM, rM, XM(MM)))),
        preventDefault: !0
      }, {
        key: "ArrowUp",
        run: Mr,
        shift: hr,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowUp",
        run: Er,
        shift: Gr
      }, {
        mac: "Ctrl-ArrowUp",
        run: Sr,
        shift: yr
      }, {
        key: "ArrowDown",
        run: rr,
        shift: Jr,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowDown",
        run: Ur,
        shift: Cr
      }, {
        mac: "Ctrl-ArrowDown",
        run: jr,
        shift: lr
      }, {
        key: "PageUp",
        run: Sr,
        shift: yr
      }, {
        key: "PageDown",
        run: jr,
        shift: lr
      }, {
        key: "Home",
        run: MM => vM(MM, (rM => ar(MM, rM, !1))),
        shift: MM => nr(MM, (rM => ar(MM, rM, !1))),
        preventDefault: !0
      }, {
        key: "Mod-Home",
        run: Er,
        shift: Gr
      }, {
        key: "End",
        run: MM => vM(MM, (rM => ar(MM, rM, !0))),
        shift: MM => nr(MM, (rM => ar(MM, rM, !0))),
        preventDefault: !0
      }, {
        key: "Mod-End",
        run: Ur,
        shift: Cr
      }, {
        key: "Enter",
        run: kr,
        shift: kr
      }, {
        key: "Mod-a",
        run: MM => {
          let {
            state: rM,
            dispatch: iM
          } = MM;
          return iM(rM.update({
            selection: {
              anchor: 0,
              head: rM.doc.length
            },
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Backspace",
        run: gr,
        shift: gr,
        preventDefault: !0
      }, {
        key: "Delete",
        run: ur,
        preventDefault: !0
      }, {
        key: "Mod-Backspace",
        mac: "Alt-Backspace",
        run: pr,
        preventDefault: !0
      }, {
        key: "Mod-Delete",
        mac: "Alt-Delete",
        run: MM => Rr(MM, !0),
        preventDefault: !0
      }, {
        mac: "Mod-Backspace",
        run: MM => br(MM, (rM => {
          let iM = MM.moveToLineBoundary(rM, !1).head;
          return rM.head > iM ? iM : Math.max(0, rM.head - 1)
        })),
        preventDefault: !0
      }, {
        mac: "Mod-Delete",
        run: MM => br(MM, (rM => {
          let iM = MM.moveToLineBoundary(rM, !0).head;
          return rM.head < iM ? iM : Math.min(MM.state.doc.length, rM.head + 1)
        })),
        preventDefault: !0
      }].concat([{
        key: "Ctrl-b",
        run: IM,
        shift: zr,
        preventDefault: !0
      }, {
        key: "Ctrl-f",
        run: KM,
        shift: Lr
      }, {
        key: "Ctrl-p",
        run: Mr,
        shift: hr
      }, {
        key: "Ctrl-n",
        run: rr,
        shift: Jr
      }, {
        key: "Ctrl-a",
        run: MM => vM(MM, (rM => aM.l.cursor(MM.lineBlockAt(rM.head).from, 1))),
        shift: MM => nr(MM, (rM => aM.l.cursor(MM.lineBlockAt(rM.head).from)))
      }, {
        key: "Ctrl-e",
        run: MM => vM(MM, (rM => aM.l.cursor(MM.lineBlockAt(rM.head).to, -1))),
        shift: MM => nr(MM, (rM => aM.l.cursor(MM.lineBlockAt(rM.head).to)))
      }, {
        key: "Ctrl-d",
        run: ur
      }, {
        key: "Ctrl-h",
        run: gr
      }, {
        key: "Ctrl-k",
        run: MM => br(MM, (rM => {
          let iM = MM.lineBlockAt(rM.head).to;
          return rM.head < iM ? iM : Math.min(MM.state.doc.length, rM.head + 1)
        }))
      }, {
        key: "Ctrl-Alt-h",
        run: pr
      }, {
        key: "Ctrl-o",
        run: MM => {
          let {
            state: rM,
            dispatch: iM
          } = MM;
          if (rM.readOnly) return !1;
          let OM = rM.changeByRange((MM => ({
            changes: {
              from: MM.from,
              to: MM.to,
              insert: aM.K.of(["", ""])
            },
            range: aM.l.cursor(MM.from)
          })));
          return iM(rM.update(OM, {
            scrollIntoView: !0,
            userEvent: "input"
          })), !0
        }
      }, {
        key: "Ctrl-t",
        run: MM => {
          let {
            state: rM,
            dispatch: iM
          } = MM;
          if (rM.readOnly) return !1;
          let OM = rM.changeByRange((MM => {
            if (!MM.empty || 0 == MM.from || MM.from == rM.doc.length) return {
              range: MM
            };
            let iM = MM.from,
              OM = rM.doc.lineAt(iM),
              SM = iM == OM.from ? iM - 1 : (0, aM.$)(OM.text, iM - OM.from, !1) + OM.from,
              jM = iM == OM.to ? iM + 1 : (0, aM.$)(OM.text, iM - OM.from, !0) + OM.from;
            return {
              changes: {
                from: SM,
                to: jM,
                insert: rM.doc.slice(iM, jM).append(rM.doc.slice(SM, iM))
              },
              range: aM.l.cursor(jM)
            }
          }));
          return !OM.changes.empty && (iM(rM.update(OM, {
            scrollIntoView: !0,
            userEvent: "move.character"
          })), !0)
        }
      }, {
        key: "Ctrl-v",
        run: jr
      }].map((MM => ({
        mac: MM.key,
        run: MM.run,
        shift: MM.shift
      }))))),
      Ar = {
        key: "Tab",
        run: fr,
        shift: Yr
      };
    var xr = iM(44029),
      vr = iM(43970),
      Fr = iM(44038),
      Br = function(MM) {
        void 0 === MM && (MM = {});
        var {
          crosshairCursor: rM = !1
        } = MM, iM = [];
        !1 !== MM.closeBracketsKeymap && (iM = iM.concat(vr.f)), !1 !== MM.defaultKeymap && (iM = iM.concat(Nr)), !1 !== MM.searchKeymap && (iM = iM.concat(xr.h)), !1 !== MM.historyKeymap && (iM = iM.concat(NM)), !1 !== MM.foldKeymap && (iM = iM.concat(nM.G)), !1 !== MM.completionKeymap && (iM = iM.concat(vr.o)), !1 !== MM.lintKeymap && (iM = iM.concat(Fr.d));
        var OM = [];
        return !1 !== MM.lineNumbers && OM.push((0, PM.Y)()), !1 !== MM.highlightActiveLineGutter && OM.push((0, PM.M)()), !1 !== MM.highlightSpecialChars && OM.push((0, PM.Q)()), !1 !== MM.history && OM.push(function() {
          let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return [CM, GM.of(MM), PM.f.domEventHandlers({
            beforeinput(MM, rM) {
              let iM = "historyUndo" == MM.inputType ? bM : "historyRedo" == MM.inputType ? wM : null;
              return !!iM && (MM.preventDefault(), iM(rM))
            }
          })]
        }()), !1 !== MM.foldGutter && OM.push((0, nM.C)()), !1 !== MM.drawSelection && OM.push((0, PM.x)()), !1 !== MM.dropCursor && OM.push((0, PM.A)()), !1 !== MM.allowMultipleSelections && OM.push(aM.p.allowMultipleSelections.of(!0)), !1 !== MM.indentOnInput && OM.push((0, nM.S)()), !1 !== MM.syntaxHighlighting && OM.push((0, nM.eb)(nM.q, {
          fallback: !0
        })), !1 !== MM.bracketMatching && OM.push((0, nM.l)()), !1 !== MM.closeBrackets && OM.push((0, vr.i)()), !1 !== MM.autocompletion && OM.push((0, vr.c)()), !1 !== MM.rectangularSelection && OM.push((0, PM.fb)()), !1 !== rM && OM.push((0, PM.u)()), !1 !== MM.highlightActiveLine && OM.push((0, PM.N)()), !1 !== MM.highlightSelectionMatches && OM.push((0, xr.f)()), MM.tabSize && "number" === typeof MM.tabSize && OM.push(nM.X.of(" ".repeat(MM.tabSize))), OM.concat([PM.X.of(iM.flat())]).filter(Boolean)
      },
      Xr = iM(44005);
    const Ir = "#e5c07b",
      Kr = "#e06c75",
      qr = "#56b6c2",
      Tr = "#ffffff",
      Vr = "#abb2bf",
      cr = "#7d8799",
      Mi = "#61afef",
      ri = "#98c379",
      ii = "#d19a66",
      Oi = "#c678dd",
      Si = "#21252b",
      ji = "#2c313a",
      ai = "#282c34",
      Pi = "#353a42",
      ni = "#3E4451",
      Qi = "#528bff",
      zi = PM.f.theme({
        "&": {
          color: Vr,
          backgroundColor: ai
        },
        ".cm-content": {
          caretColor: Qi
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: Qi
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: ni
        },
        ".cm-panels": {
          backgroundColor: Si,
          color: Vr
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
          backgroundColor: ai,
          color: cr,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: ji
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#ddd"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: Pi
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: Pi,
          borderBottomColor: Pi
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: ji,
            color: Vr
          }
        }
      }, {
        dark: !0
      }),
      Li = nM.b.define([{
        tag: Xr.m.keyword,
        color: Oi
      }, {
        tag: [Xr.m.name, Xr.m.deleted, Xr.m.character, Xr.m.propertyName, Xr.m.macroName],
        color: Kr
      }, {
        tag: [Xr.m.function(Xr.m.variableName), Xr.m.labelName],
        color: Mi
      }, {
        tag: [Xr.m.color, Xr.m.constant(Xr.m.name), Xr.m.standard(Xr.m.name)],
        color: ii
      }, {
        tag: [Xr.m.definition(Xr.m.name), Xr.m.separator],
        color: Vr
      }, {
        tag: [Xr.m.typeName, Xr.m.className, Xr.m.number, Xr.m.changed, Xr.m.annotation, Xr.m.modifier, Xr.m.self, Xr.m.namespace],
        color: Ir
      }, {
        tag: [Xr.m.operator, Xr.m.operatorKeyword, Xr.m.url, Xr.m.escape, Xr.m.regexp, Xr.m.link, Xr.m.special(Xr.m.string)],
        color: qr
      }, {
        tag: [Xr.m.meta, Xr.m.comment],
        color: cr
      }, {
        tag: Xr.m.strong,
        fontWeight: "bold"
      }, {
        tag: Xr.m.emphasis,
        fontStyle: "italic"
      }, {
        tag: Xr.m.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: Xr.m.link,
        color: cr,
        textDecoration: "underline"
      }, {
        tag: Xr.m.heading,
        fontWeight: "bold",
        color: Kr
      }, {
        tag: [Xr.m.atom, Xr.m.bool, Xr.m.special(Xr.m.variableName)],
        color: ii
      }, {
        tag: [Xr.m.processingInstruction, Xr.m.string, Xr.m.inserted],
        color: ri
      }, {
        tag: Xr.m.invalid,
        color: Tr
      }]),
      mi = [zi, (0, nM.eb)(Li)];
    var Hi = PM.f.theme({
      "&": {
        backgroundColor: "#fff"
      }
    }, {
      dark: !1
    });
    class Ji {
      constructor(MM, rM) {
        this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = rM, this.timeoutMS = rM, this.callbacks.push(MM)
      }
      bL() {
        if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
          this.isTimeExhausted = !0;
          var MM = this.callbacks.slice();
          this.callbacks.length = 0, MM.forEach((MM => {
            try {
              MM()
            } catch (rM) {
              console.error("TimeoutLatch callback error:", rM)
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
    class di {
      constructor() {
        this.interval = null, this.latches = new Set
      }
      add(MM) {
        this.latches.add(MM), this.start()
      }
      remove(MM) {
        this.latches.delete(MM), 0 === this.latches.size && this.stop()
      }
      start() {
        null === this.interval && (this.interval = setInterval((() => {
          this.latches.forEach((MM => {
            MM.bL(), MM.isDone && this.remove(MM)
          }))
        }), 1))
      }
      stop() {
        null !== this.interval && (clearInterval(this.interval), this.interval = null)
      }
    }
    var yi = null,
      li = aM.e.define(),
      Ei = [];

    function Ui(MM) {
      var {
        value: rM,
        selection: iM,
        onChange: OM,
        onStatistics: SM,
        onCreateEditor: nM,
        onUpdate: QM,
        extensions: zM = Ei,
        autoFocus: LM,
        theme: mM = "light",
        height: HM = null,
        minHeight: hM = null,
        maxHeight: JM = null,
        width: dM = null,
        minWidth: yM = null,
        maxWidth: lM = null,
        placeholder: EM = "",
        editable: UM = !0,
        readOnly: GM = !1,
        indentWithTab: CM = !0,
        basicSetup: eM = !0,
        root: bM,
        initialState: wM
      } = MM, [tM, gM] = (0, jM.useState)(), [uM, RM] = (0, jM.useState)(), [pM, WM] = (0, jM.useState)(), sM = (0, jM.useState)((() => ({
        current: null
      })))[0], DM = (0, jM.useState)((() => ({
        current: null
      })))[0], kM = PM.f.theme({
        "&": {
          height: HM,
          minHeight: hM,
          maxHeight: JM,
          width: dM,
          minWidth: yM,
          maxWidth: lM
        },
        "& .cm-scroller": {
          height: "100% !important"
        }
      }), ZM = PM.f.updateListener.of((MM => {
        if (MM.docChanged && "function" === typeof OM && !MM.transactions.some((MM => MM.annotation(li)))) {
          sM.current ? sM.current.reset() : (sM.current = new Ji((() => {
            if (DM.current) {
              var MM = DM.current;
              DM.current = null, MM()
            }
            sM.current = null
          }), 200), ("undefined" === typeof window ? new di : (yi || (yi = new di), yi)).add(sM.current));
          var rM = MM.state.doc.toString();
          OM(rM, MM)
        }
        SM && SM((MM => ({
          line: MM.state.doc.lineAt(MM.state.selection.main.from),
          lineCount: MM.state.doc.lines,
          lineBreak: MM.state.lineBreak,
          length: MM.state.doc.length,
          readOnly: MM.state.readOnly,
          tabSize: MM.state.tabSize,
          selection: MM.state.selection,
          selectionAsSingle: MM.state.selection.asSingle().main,
          Ld: MM.state.selection.Ld,
          selectionCode: MM.state.sliceDoc(MM.state.selection.main.from, MM.state.selection.main.to),
          selections: MM.state.selection.Ld.map((rM => MM.state.sliceDoc(rM.from, rM.to))),
          selectedText: MM.state.selection.Ld.some((MM => !MM.empty))
        }))(MM))
      })), oM = function(MM) {
        void 0 === MM && (MM = {});
        var {
          indentWithTab: rM = !0,
          editable: iM = !0,
          readOnly: OM = !1,
          theme: SM = "light",
          placeholder: jM = "",
          basicSetup: nM = !0
        } = MM, QM = [];
        switch (rM && QM.unshift(PM.X.of([Ar])), nM && ("boolean" === typeof nM ? QM.unshift(Br()) : QM.unshift(Br(nM))), jM && QM.unshift((0, PM.bb)(jM)), SM) {
          case "light":
            QM.push(Hi);
            break;
          case "dark":
            QM.push(mi);
            break;
          case "none":
            break;
          default:
            QM.push(SM)
        }
        return !1 === iM && QM.push(PM.f.editable.of(!1)), OM && QM.push(aM.p.readOnly.of(!0)), [...QM]
      }({
        theme: mM,
        editable: UM,
        readOnly: GM,
        placeholder: EM,
        indentWithTab: CM,
        basicSetup: eM
      }), fM = [ZM, kM, ...oM];
      return QM && "function" === typeof QM && fM.push(PM.f.updateListener.of(QM)), fM = fM.concat(zM), (0, jM.useLayoutEffect)((() => {
        if (tM && !pM) {
          var MM = {
              doc: rM,
              selection: iM,
              extensions: fM
            },
            OM = wM ? aM.p.fromJSON(wM.json, MM, wM.fields) : aM.p.create(MM);
          if (WM(OM), !uM) {
            var SM = new PM.f({
              state: OM,
              parent: tM,
              root: bM
            });
            RM(SM), nM && nM(SM, OM)
          }
        }
        return () => {
          uM && (WM(void 0), RM(void 0))
        }
      }), [tM, pM]), (0, jM.useEffect)((() => {
        MM.container && gM(MM.container)
      }), [MM.container]), (0, jM.useEffect)((() => () => {
        uM && (uM.destroy(), RM(void 0)), sM.current && (sM.current.cancel(), sM.current = null)
      }), [uM]), (0, jM.useEffect)((() => {
        LM && uM && uM.focus()
      }), [LM, uM]), (0, jM.useEffect)((() => {
        uM && uM.dispatch({
          effects: aM.G.reconfigure.of(fM)
        })
      }), [mM, zM, HM, hM, JM, dM, yM, lM, EM, UM, GM, CM, eM, OM, QM]), (0, jM.useEffect)((() => {
        if (void 0 !== rM) {
          var MM = uM ? uM.state.doc.toString() : "";
          if (uM && rM !== MM) {
            var iM = () => {
              uM && rM !== uM.state.doc.toString() && uM.dispatch({
                changes: {
                  from: 0,
                  to: uM.state.doc.toString().length,
                  insert: rM || ""
                },
                annotations: [li.of(!0)]
              })
            };
            sM.current && !sM.current.isDone ? DM.current = iM : iM()
          }
        }
      }), [rM, uM]), {
        state: pM,
        setState: WM,
        view: uM,
        setView: RM,
        container: tM,
        setContainer: gM
      }
    }
    var Gi = iM(1303),
      Ci = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"],
      ei = (0, jM.forwardRef)(((MM, rM) => {
        var {
          className: iM,
          value: aM = "",
          selection: PM,
          extensions: nM = [],
          onChange: QM,
          onStatistics: zM,
          onCreateEditor: LM,
          onUpdate: mM,
          autoFocus: HM,
          theme: hM = "light",
          height: JM,
          minHeight: dM,
          maxHeight: yM,
          width: lM,
          minWidth: EM,
          maxWidth: UM,
          basicSetup: GM,
          placeholder: CM,
          indentWithTab: eM,
          editable: bM,
          readOnly: wM,
          root: tM,
          initialState: gM
        } = MM, uM = (0, SM.c)(MM, Ci), RM = (0, jM.useRef)(null), {
          state: pM,
          view: WM,
          container: sM,
          setContainer: DM
        } = Ui({
          root: tM,
          value: aM,
          autoFocus: HM,
          theme: hM,
          height: JM,
          minHeight: dM,
          maxHeight: yM,
          width: lM,
          minWidth: EM,
          maxWidth: UM,
          basicSetup: GM,
          placeholder: CM,
          indentWithTab: eM,
          editable: bM,
          readOnly: wM,
          selection: PM,
          onChange: QM,
          onStatistics: zM,
          onCreateEditor: LM,
          onUpdate: mM,
          extensions: nM,
          initialState: gM
        });
        (0, jM.useImperativeHandle)(rM, (() => ({
          editor: RM.current,
          state: pM,
          view: WM
        })), [RM, sM, pM, WM]);
        var kM = (0, jM.useCallback)((MM => {
          RM.current = MM, DM(MM)
        }), [DM]);
        if ("string" !== typeof aM) throw new Error("value must be typeof string but got " + typeof aM);
        var ZM = "string" === typeof hM ? "cm-theme-" + hM : "cm-theme";
        return (0, Gi.jsx)("div", (0, OM.e)({
          ref: kM,
          className: ZM + (iM ? " " + iM : "")
        }, uM))
      }));
    ei.displayName = "CodeMirror";
    const bi = ei
  },
  43987: (MM, rM, iM) => {
    function OM() {
      var MM = arguments[0];
      "string" == typeof MM && (MM = document.createElement(MM));
      var rM = 1,
        iM = arguments[1];
      if (iM && "object" == typeof iM && null == iM.nodeType && !Array.isArray(iM)) {
        for (var OM in iM)
          if (Object.prototype.hasOwnProperty.call(iM, OM)) {
            var jM = iM[OM];
            "string" == typeof jM ? MM.setAttribute(OM, jM) : null != jM && (MM[OM] = jM)
          } rM++
      }
      for (; rM < arguments.length; rM++) SM(MM, arguments[rM]);
      return MM
    }

    function SM(MM, rM) {
      if ("string" == typeof rM) MM.appendChild(document.createTextNode(rM));
      else if (null == rM);
      else if (null != rM.nodeType) MM.appendChild(rM);
      else {
        if (!Array.isArray(rM)) throw new RangeError("Unsupported child node: " + rM);
        for (var iM = 0; iM < rM.length; iM++) SM(MM, rM[iM])
      }
    }
    iM.d(rM, {
      c: () => OM
    })
  },
  43982: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => aM
    });
    const OM = "undefined" == typeof Symbol ? "__\u037c" : Symbol.for("\u037c"),
      SM = "undefined" == typeof Symbol ? "__styleSet" + Math.floor(1e8 * Math.random()) : Symbol("styleSet"),
      jM = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : {};
    class aM {
      constructor(MM, rM) {
        this.rules = [];
        let {
          finish: iM
        } = rM || {};

        function OM(MM) {
          return /^@/.test(MM) ? [MM] : MM.split(/,\s*/)
        }

        function SM(MM, rM, jM, aM) {
          let PM = [],
            nM = /^@(\w+)\b/.exec(MM[0]),
            QM = nM && "keyframes" == nM[1];
          if (nM && null == rM) return jM.push(MM[0] + ";");
          for (let iM in rM) {
            let aM = rM[iM];
            if (/&/.test(iM)) SM(iM.split(/,\s*/).map((rM => MM.map((MM => rM.replace(/&/, MM))))).reduce(((MM, rM) => MM.concat(rM))), aM, jM);
            else if (aM && "object" == typeof aM) {
              if (!nM) throw new RangeError("The value of a property (" + iM + ") should be a primitive value.");
              SM(OM(iM), aM, PM, QM)
            } else null != aM && PM.push(iM.replace(/_.*/, "").replace(/[A-Z]/g, (MM => "-" + MM.toLowerCase())) + ": " + aM + ";")
          }(PM.length || QM) && jM.push((!iM || nM || aM ? MM : MM.map(iM)).join(", ") + " {" + PM.join(" ") + "}")
        }
        for (let jM in MM) SM(OM(jM), MM[jM], this.rules)
      }
      getRules() {
        return this.rules.join("\n")
      }
      static newName() {
        let MM = jM[OM] || 1;
        return jM[OM] = MM + 1, "\u037c" + MM.toString(36)
      }
      static mount(MM, rM, iM) {
        let OM = MM[SM],
          jM = iM && iM.nonce;
        OM ? jM && OM.setNonce(jM) : OM = new nM(MM, jM), OM.mount(Array.isArray(rM) ? rM : [rM], MM)
      }
    }
    let PM = new Map;
    class nM {
      constructor(MM, rM) {
        let iM = MM.ownerDocument || MM,
          OM = iM.defaultView;
        if (!MM.head && MM.adoptedStyleSheets && OM.CSSStyleSheet) {
          let rM = PM.get(iM);
          if (rM) return MM[SM] = rM;
          this.sheet = new OM.CSSStyleSheet, PM.set(iM, this)
        } else this.styleTag = iM.createElement("style"), rM && this.styleTag.setAttribute("nonce", rM);
        this.modules = [], MM[SM] = this
      }
      mount(MM, rM) {
        let iM = this.sheet,
          OM = 0,
          SM = 0;
        for (let jM = 0; jM < MM.length; jM++) {
          let rM = MM[jM],
            aM = this.modules.indexOf(rM);
          if (aM < SM && aM > -1 && (this.modules.splice(aM, 1), SM--, aM = -1), -1 == aM) {
            if (this.modules.splice(SM++, 0, rM), iM)
              for (let MM = 0; MM < rM.rules.length; MM++) iM.insertRule(rM.rules[MM], OM++)
          } else {
            for (; SM < aM;) OM += this.modules[SM++].rules.length;
            OM += rM.rules.length, SM++
          }
        }
        if (iM) rM.adoptedStyleSheets.indexOf(this.sheet) < 0 && (rM.adoptedStyleSheets = [this.sheet, ...rM.adoptedStyleSheets]);
        else {
          let MM = "";
          for (let rM = 0; rM < this.modules.length; rM++) MM += this.modules[rM].getRules() + "\n";
          this.styleTag.textContent = MM;
          let iM = rM.head || rM;
          this.styleTag.parentNode != iM && iM.insertBefore(this.styleTag, iM.firstChild)
        }
      }
      setNonce(MM) {
        this.styleTag && this.styleTag.getAttribute("nonce") != MM && this.styleTag.setAttribute("nonce", MM)
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);