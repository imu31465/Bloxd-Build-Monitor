export const id = 284;
export const ids = [284];
export const modules = {
  40373: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => VC,
      h: () => PC,
      i: () => NC,
      m: () => QD,
      q: () => zC,
      r: () => wD,
      v: () => yC
    });
    var ID = cD(40379),
      pD = cD(40384),
      iD = cD(40398);
    class fD {
      constructor(DD, CD, cD, ID) {
        this.state = DD, this.pos = CD, this.explicit = cD, this.view = ID, this.abortListeners = [], this.abortOnDocChange = !1
      }
      tokenBefore(DD) {
        let CD = (0, iD.mb)(this.state).resolveInner(this.pos, -1);
        for (; CD && DD.indexOf(CD.name) < 0;) CD = CD.parent;
        return CD ? {
          from: CD.from,
          to: this.pos,
          text: this.state.sliceDoc(CD.from, this.pos),
          type: CD.type
        } : null
      }
      matchBefore(DD) {
        let CD = this.state.doc.lineAt(this.pos),
          cD = Math.max(CD.from, this.pos - 250),
          ID = CD.text.slice(cD - CD.from, this.pos - CD.from),
          pD = ID.search(yD(DD, !1));
        return pD < 0 ? null : {
          from: cD + pD,
          to: this.pos,
          text: ID.slice(pD)
        }
      }
      get aborted() {
        return null == this.abortListeners
      }
      addEventListener(DD, CD, cD) {
        "abort" == DD && this.abortListeners && (this.abortListeners.push(CD), cD && cD.onDocChange && (this.abortOnDocChange = !0))
      }
    }

    function bD(DD) {
      let CD = Object.keys(DD).join(""),
        cD = /\w/.test(CD);
      return cD && (CD = CD.replace(/\w/g, "")), `[${cD?"\\w":""}${CD.replace(/[^\w\s]/g,"\\$&")}]`
    }

    function QD(DD) {
      let CD = DD.map((DD => "string" == typeof DD ? {
          label: DD
        } : DD)),
        [cD, ID] = CD.every((DD => /^\w+$/.test(DD.label))) ? [/\w*$/, /\w+$/] : function(DD) {
          let CD = Object.create(null),
            cD = Object.create(null);
          for (let {
              label: pD
            }
            of DD) {
            CD[pD[0]] = !0;
            for (let DD = 1; DD < pD.length; DD++) cD[pD[DD]] = !0
          }
          let ID = bD(CD) + bD(cD) + "*$";
          return [new RegExp("^" + ID), new RegExp(ID)]
        }(CD);
      return DD => {
        let pD = DD.matchBefore(ID);
        return pD || DD.explicit ? {
          from: pD ? pD.from : DD.pos,
          options: CD,
          validFor: cD
        } : null
      }
    }

    function wD(DD, CD) {
      return cD => {
        for (let CD = (0, iD.mb)(cD.state).resolveInner(cD.pos, -1); CD; CD = CD.parent) {
          if (DD.indexOf(CD.name) > -1) return null;
          if (CD.type.isTop) break
        }
        return CD(cD)
      }
    }
    class SD {
      constructor(DD, CD, cD, ID) {
        this.completion = DD, this.source = CD, this.match = cD, this.score = ID
      }
    }

    function BD(DD) {
      return DD.selection.main.from
    }

    function yD(DD, CD) {
      var cD;
      let {
        source: ID
      } = DD, pD = CD && "^" != ID[0], iD = "$" != ID[ID.length - 1];
      return pD || iD ? new RegExp(`${pD?"^":""}(?:${ID})${iD?"$":""}`, null !== (cD = DD.flags) && void 0 !== cD ? cD : DD.ignoreCase ? "i" : "") : DD
    }
    const MD = ID.c.define();

    function tD(DD, CD, cD, pD) {
      let {
        main: iD
      } = DD.selection, fD = cD - iD.from, bD = pD - iD.from;
      return {
        ...DD.changeByRange((QD => {
          if (QD != iD && cD != pD && DD.sliceDoc(QD.from + fD, QD.from + bD) != DD.sliceDoc(cD, pD)) return {
            range: QD
          };
          let wD = DD.toText(CD);
          return {
            changes: {
              from: QD.from + fD,
              to: pD == iD.from ? QD.to : QD.from + bD,
              insert: wD
            },
            range: ID.i.cursor(QD.from + fD + wD.length)
          }
        })),
        scrollIntoView: !0,
        userEvent: "input.complete"
      }
    }
    const ZD = new WeakMap;

    function oD(DD) {
      if (!Array.isArray(DD)) return DD;
      let CD = ZD.get(DD);
      return CD || ZD.set(DD, CD = QD(DD)), CD
    }
    const vD = ID.D.define(),
      ND = ID.D.define();
    class gD {
      constructor(DD) {
        this.pattern = DD, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
        for (let CD = 0; CD < DD.length;) {
          let cD = (0, ID.O)(DD, CD),
            pD = (0, ID.S)(cD);
          this.chars.push(cD);
          let iD = DD.slice(CD, CD + pD),
            fD = iD.toUpperCase();
          this.folded.push((0, ID.O)(fD == iD ? iD.toLowerCase() : fD, 0)), CD += pD
        }
        this.astral = DD.length != this.chars.length
      }
      ret(DD, CD) {
        return this.score = DD, this.matched = CD, this
      }
      match(DD) {
        if (0 == this.pattern.length) return this.ret(-100, []);
        if (DD.length < this.pattern.length) return null;
        let {
          chars: CD,
          folded: cD,
          any: pD,
          precise: iD,
          byWord: fD
        } = this;
        if (1 == CD.length) {
          let pD = (0, ID.O)(DD, 0),
            iD = (0, ID.S)(pD),
            fD = iD == DD.length ? 0 : -100;
          if (pD == CD[0]);
          else {
            if (pD != cD[0]) return null;
            fD += -200
          }
          return this.ret(fD, [0, iD])
        }
        let bD = DD.indexOf(this.pattern);
        if (0 == bD) return this.ret(DD.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
        let QD = CD.length,
          wD = 0;
        if (bD < 0) {
          for (let iD = 0, fD = Math.min(DD.length, 200); iD < fD && wD < QD;) {
            let fD = (0, ID.O)(DD, iD);
            fD != CD[wD] && fD != cD[wD] || (pD[wD++] = iD), iD += (0, ID.S)(fD)
          }
          if (wD < QD) return null
        }
        let SD = 0,
          BD = 0,
          yD = !1,
          MD = 0,
          tD = -1,
          ZD = -1,
          oD = /[a-z]/.test(DD),
          vD = !0;
        for (let ND = 0, gD = Math.min(DD.length, 200), XD = 0; ND < gD && BD < QD;) {
          let pD = (0, ID.O)(DD, ND);
          bD < 0 && (SD < QD && pD == CD[SD] && (iD[SD++] = ND), MD < QD && (pD == CD[MD] || pD == cD[MD] ? (0 == MD && (tD = ND), ZD = ND + 1, MD++) : MD = 0));
          let wD, gD = pD < 255 ? pD >= 48 && pD <= 57 || pD >= 97 && pD <= 122 ? 2 : pD >= 65 && pD <= 90 ? 1 : 0 : (wD = (0, ID.bb)(pD)) != wD.toLowerCase() ? 1 : wD != wD.toUpperCase() ? 2 : 0;
          (!ND || 1 == gD && oD || 0 == XD && 0 != gD) && (CD[BD] == pD || cD[BD] == pD && (yD = !0) ? fD[BD++] = ND : fD.length && (vD = !1)), XD = gD, ND += (0, ID.S)(pD)
        }
        return BD == QD && 0 == fD[0] && vD ? this.result((yD ? -200 : 0) - 100, fD, DD) : MD == QD && 0 == tD ? this.ret(-200 - DD.length + (ZD == DD.length ? 0 : -100), [0, ZD]) : bD > -1 ? this.ret(-700 - DD.length, [bD, bD + this.pattern.length]) : MD == QD ? this.ret(-900 - DD.length, [tD, ZD]) : BD == QD ? this.result((yD ? -200 : 0) - 100 - 700 + (vD ? 0 : -1100), fD, DD) : 2 == CD.length ? null : this.result((pD[0] ? -700 : 0) - 200 - 1100, pD, DD)
      }
      result(DD, CD, cD) {
        let pD = [],
          iD = 0;
        for (let fD of CD) {
          let DD = fD + (this.astral ? (0, ID.S)((0, ID.O)(cD, fD)) : 1);
          iD && pD[iD - 1] == fD ? pD[iD - 1] = DD : (pD[iD++] = fD, pD[iD++] = DD)
        }
        return this.ret(DD - cD.length, pD)
      }
    }
    class XD {
      constructor(DD) {
        this.pattern = DD, this.matched = [], this.score = 0, this.folded = DD.toLowerCase()
      }
      match(DD) {
        if (DD.length < this.pattern.length) return null;
        let CD = DD.slice(0, this.pattern.length),
          cD = CD == this.pattern ? 0 : CD.toLowerCase() == this.folded ? -200 : null;
        return null == cD ? null : (this.matched = [0, CD.length], this.score = cD + (DD.length == this.pattern.length ? 0 : -100), this)
      }
    }
    const mD = ID.l.define({
      combine: DD => (0, ID.U)(DD, {
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
        positionInfo: OD,
        filterStrict: !1,
        compareCompletions: (DD, CD) => (DD.sortText || DD.label).localeCompare(CD.sortText || CD.label),
        interactionDelay: 75,
        updateSyncTime: 100
      }, {
        defaultKeymap: (DD, CD) => DD && CD,
        closeOnBlur: (DD, CD) => DD && CD,
        icons: (DD, CD) => DD && CD,
        tooltipClass: (DD, CD) => cD => nD(DD(cD), CD(cD)),
        optionClass: (DD, CD) => cD => nD(DD(cD), CD(cD)),
        addToOptions: (DD, CD) => DD.concat(CD),
        filterStrict: (DD, CD) => DD || CD
      })
    });

    function nD(DD, CD) {
      return DD ? CD ? DD + " " + CD : DD : CD
    }

    function OD(DD, CD, cD, ID, iD, fD) {
      let bD, QD, wD = DD.textDirection == pD.i.RTL,
        SD = wD,
        BD = !1,
        yD = "top",
        MD = CD.left - iD.left,
        tD = iD.right - CD.right,
        ZD = ID.right - ID.left,
        oD = ID.bottom - ID.top;
      if (SD && MD < Math.min(ZD, tD) ? SD = !1 : !SD && tD < Math.min(ZD, MD) && (SD = !0), ZD <= (SD ? MD : tD)) bD = Math.max(iD.top, Math.min(cD.top, iD.bottom - oD)) - CD.top, QD = Math.min(400, SD ? MD : tD);
      else {
        BD = !0, QD = Math.min(400, (wD ? CD.right : iD.right - CD.left) - 30);
        let DD = iD.bottom - CD.bottom;
        DD >= oD || DD > CD.top ? bD = cD.bottom - CD.top : (yD = "bottom", bD = CD.bottom - cD.top)
      }
      return {
        style: `${yD}: ${bD/((CD.bottom-CD.top)/fD.offsetHeight)}px; max-width: ${QD/((CD.right-CD.left)/fD.offsetWidth)}px`,
        class: "cm-completionInfo-" + (BD ? wD ? "left-narrow" : "right-narrow" : SD ? "left" : "right")
      }
    }
    const PD = ID.D.define();

    function HD(DD, CD, cD) {
      if (DD <= cD) return {
        from: 0,
        to: DD
      };
      if (CD < 0 && (CD = 0), CD <= DD >> 1) {
        let DD = Math.floor(CD / cD);
        return {
          from: DD * cD,
          to: (DD + 1) * cD
        }
      }
      let ID = Math.floor((DD - CD) / cD);
      return {
        from: DD - (ID + 1) * cD,
        to: DD - ID * cD
      }
    }
    class UD {
      constructor(DD, CD, cD) {
        this.view = DD, this.stateField = CD, this.applyCompletion = cD, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
          read: () => this.measureInfo(),
          write: DD => this.placeInfo(DD),
          key: this
        }, this.space = null, this.currentClass = "";
        let ID = DD.state.field(CD),
          {
            options: pD,
            selected: iD
          } = ID.open,
          fD = DD.state.facet(mD);
        this.optionContent = function(DD) {
          let CD = DD.addToOptions.slice();
          return DD.icons && CD.push({
            render(DD) {
              let CD = document.createElement("div");
              return CD.classList.add("cm-completionIcon"), DD.type && CD.classList.add(...DD.type.split(/\s+/g).map((DD => "cm-completionIcon-" + DD))), CD.setAttribute("aria-hidden", "true"), CD
            },
            position: 20
          }), CD.push({
            render(DD, CD, cD, ID) {
              let pD = document.createElement("span");
              pD.className = "cm-completionLabel";
              let iD = DD.displayLabel || DD.label,
                fD = 0;
              for (let bD = 0; bD < ID.length;) {
                let DD = ID[bD++],
                  CD = ID[bD++];
                DD > fD && pD.appendChild(document.createTextNode(iD.slice(fD, DD)));
                let cD = pD.appendChild(document.createElement("span"));
                cD.appendChild(document.createTextNode(iD.slice(DD, CD))), cD.className = "cm-completionMatchedText", fD = CD
              }
              return fD < iD.length && pD.appendChild(document.createTextNode(iD.slice(fD))), pD
            },
            position: 50
          }, {
            render(DD) {
              if (!DD.detail) return null;
              let CD = document.createElement("span");
              return CD.className = "cm-completionDetail", CD.textContent = DD.detail, CD
            },
            position: 80
          }), CD.sort(((DD, CD) => DD.position - CD.position)).map((DD => DD.render))
        }(fD), this.optionClass = fD.optionClass, this.tooltipClass = fD.tooltipClass, this.range = HD(pD.length, iD, fD.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(DD.state), this.dom.addEventListener("mousedown", (cD => {
          let {
            options: ID
          } = DD.state.field(CD).open;
          for (let CD, pD = cD.target; pD && pD != this.dom; pD = pD.parentNode)
            if ("LI" == pD.nodeName && (CD = /-(\d+)$/.exec(pD.id)) && +CD[1] < ID.length) return this.applyCompletion(DD, ID[+CD[1]]), void cD.preventDefault();
          if (cD.target == this.list) {
            let CD = this.list.classList.contains("cm-completionListIncompleteTop") && cD.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && cD.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
            null != CD && (DD.dispatch({
              effects: PD.of(CD)
            }), cD.preventDefault())
          }
        })), this.dom.addEventListener("focusout", (CD => {
          let cD = DD.state.field(this.stateField, !1);
          cD && cD.tooltip && DD.state.facet(mD).closeOnBlur && CD.relatedTarget != DD.contentDOM && DD.dispatch({
            effects: ND.of(null)
          })
        })), this.showOptions(pD, ID.id)
      }
      mount() {
        this.updateSel()
      }
      showOptions(DD, CD) {
        this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(DD, CD, this.range)), this.list.addEventListener("scroll", (() => {
          this.info && this.view.requestMeasure(this.placeInfoReq)
        }))
      }
      update(DD) {
        var CD;
        let cD = DD.state.field(this.stateField),
          ID = DD.startState.field(this.stateField);
        if (this.updateTooltipClass(DD.state), cD != ID) {
          let {
            options: pD,
            selected: iD,
            disabled: fD
          } = cD.open;
          ID.open && ID.open.options == pD || (this.range = HD(pD.length, iD, DD.state.facet(mD).maxRenderedOptions), this.showOptions(pD, cD.id)), this.updateSel(), fD != (null === (CD = ID.open) || void 0 === CD ? void 0 : CD.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!fD)
        }
      }
      updateTooltipClass(DD) {
        let CD = this.tooltipClass(DD);
        if (CD != this.currentClass) {
          for (let DD of this.currentClass.split(" ")) DD && this.dom.classList.remove(DD);
          for (let DD of CD.split(" ")) DD && this.dom.classList.add(DD);
          this.currentClass = CD
        }
      }
      positioned(DD) {
        this.space = DD, this.info && this.view.requestMeasure(this.placeInfoReq)
      }
      updateSel() {
        let DD = this.view.state.field(this.stateField),
          CD = DD.open;
        (CD.selected > -1 && CD.selected < this.range.from || CD.selected >= this.range.to) && (this.range = HD(CD.options.length, CD.selected, this.view.state.facet(mD).maxRenderedOptions), this.showOptions(CD.options, DD.id));
        let cD = this.updateSelectedOption(CD.selected);
        if (cD) {
          this.destroyInfo();
          let {
            completion: ID
          } = CD.options[CD.selected], {
            info: iD
          } = ID;
          if (!iD) return;
          let fD = "string" === typeof iD ? document.createTextNode(iD) : iD(ID);
          if (!fD) return;
          "then" in fD ? fD.then((CD => {
            CD && this.view.state.field(this.stateField, !1) == DD && this.addInfoPane(CD, ID)
          })).catch((DD => (0, pD.fb)(this.view.state, DD, "completion info"))) : (this.addInfoPane(fD, ID), cD.setAttribute("aria-describedby", this.info.id))
        }
      }
      addInfoPane(DD, CD) {
        this.destroyInfo();
        let cD = this.info = document.createElement("div");
        if (cD.className = "cm-tooltip cm-completionInfo", cD.id = "cm-completionInfo-" + Math.floor(65535 * Math.random()).toString(16), null != DD.nodeType) cD.appendChild(DD), this.infoDestroy = null;
        else {
          let {
            dom: CD,
            destroy: ID
          } = DD;
          cD.appendChild(CD), this.infoDestroy = ID || null
        }
        this.dom.appendChild(cD), this.view.requestMeasure(this.placeInfoReq)
      }
      updateSelectedOption(DD) {
        let CD = null;
        for (let cD = this.list.firstChild, ID = this.range.from; cD; cD = cD.nextSibling, ID++) "LI" == cD.nodeName && cD.id ? ID == DD ? cD.hasAttribute("aria-selected") || (cD.setAttribute("aria-selected", "true"), CD = cD) : cD.hasAttribute("aria-selected") && (cD.removeAttribute("aria-selected"), cD.removeAttribute("aria-describedby")) : ID--;
        return CD && function(DD, CD) {
          let cD = DD.getBoundingClientRect(),
            ID = CD.getBoundingClientRect(),
            pD = cD.height / DD.offsetHeight;
          ID.top < cD.top ? DD.scrollTop -= (cD.top - ID.top) / pD : ID.bottom > cD.bottom && (DD.scrollTop += (ID.bottom - cD.bottom) / pD)
        }(this.list, CD), CD
      }
      measureInfo() {
        let DD = this.dom.querySelector("[aria-selected]");
        if (!DD || !this.info) return null;
        let CD = this.dom.getBoundingClientRect(),
          cD = this.info.getBoundingClientRect(),
          ID = DD.getBoundingClientRect(),
          pD = this.space;
        if (!pD) {
          let DD = this.dom.ownerDocument.documentElement;
          pD = {
            left: 0,
            top: 0,
            right: DD.clientWidth,
            bottom: DD.clientHeight
          }
        }
        return ID.top > Math.min(pD.bottom, CD.bottom) - 10 || ID.bottom < Math.max(pD.top, CD.top) + 10 ? null : this.view.state.facet(mD).positionInfo(this.view, CD, ID, cD, pD, this.dom)
      }
      placeInfo(DD) {
        this.info && (DD ? (DD.style && (this.info.style.cssText = DD.style), this.info.className = "cm-tooltip cm-completionInfo " + (DD.class || "")) : this.info.style.cssText = "top: -1e6px")
      }
      createListBox(DD, CD, cD) {
        const ID = document.createElement("ul");
        ID.id = CD, ID.setAttribute("role", "listbox"), ID.setAttribute("aria-expanded", "true"), ID.setAttribute("aria-label", this.view.state.phrase("Completions")), ID.addEventListener("mousedown", (DD => {
          DD.target == ID && DD.preventDefault()
        }));
        let pD = null;
        for (let iD = cD.from; iD < cD.to; iD++) {
          let {
            completion: fD,
            match: bD
          } = DD[iD], {
            section: QD
          } = fD;
          if (QD) {
            let DD = "string" == typeof QD ? QD : QD.name;
            if (DD != pD && (iD > cD.from || 0 == cD.from))
              if (pD = DD, "string" != typeof QD && QD.header) ID.appendChild(QD.header(QD));
              else {
                ID.appendChild(document.createElement("completion-section")).textContent = DD
              }
          }
          const wD = ID.appendChild(document.createElement("li"));
          wD.id = CD + "-" + iD, wD.setAttribute("role", "option");
          let SD = this.optionClass(fD);
          SD && (wD.className = SD);
          for (let DD of this.optionContent) {
            let CD = DD(fD, this.view.state, this.view, bD);
            CD && wD.appendChild(CD)
          }
        }
        return cD.from && ID.classList.add("cm-completionListIncompleteTop"), cD.to < DD.length && ID.classList.add("cm-completionListIncompleteBottom"), ID
      }
      destroyInfo() {
        this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
      }
      destroy() {
        this.destroyInfo()
      }
    }

    function xD(DD, CD) {
      return cD => new UD(cD, DD, CD)
    }

    function qD(DD) {
      return 100 * (DD.boost || 0) + (DD.apply ? 10 : 0) + (DD.info ? 5 : 0) + (DD.type ? 1 : 0)
    }
    class JD {
      constructor(DD, CD, cD, ID, pD, iD) {
        this.options = DD, this.attrs = CD, this.tooltip = cD, this.timestamp = ID, this.selected = pD, this.disabled = iD
      }
      setSelected(DD, CD) {
        return DD == this.selected || DD >= this.options.length ? this : new JD(this.options, zD(CD, DD), this.tooltip, this.timestamp, DD, this.disabled)
      }
      static build(DD, CD, cD, ID, pD, iD) {
        if (ID && !iD && DD.some((DD => DD.isPending))) return ID.setDisabled();
        let fD = function(DD, CD) {
          let cD = [],
            ID = null,
            pD = null,
            iD = DD => {
              cD.push(DD);
              let {
                section: CD
              } = DD.completion;
              if (CD) {
                ID || (ID = []);
                let DD = "string" == typeof CD ? CD : CD.name;
                ID.some((CD => CD.name == DD)) || ID.push("string" == typeof CD ? {
                  name: DD
                } : CD)
              }
            },
            fD = CD.facet(mD);
          for (let BD of DD)
            if (BD.hasResult()) {
              let DD = BD.result.getMatch;
              if (!1 === BD.result.filter)
                for (let CD of BD.result.options) iD(new SD(CD, BD.source, DD ? DD(CD) : [], 1e9 - cD.length));
              else {
                let cD, ID = CD.sliceDoc(BD.from, BD.to),
                  bD = fD.filterStrict ? new XD(ID) : new gD(ID);
                for (let CD of BD.result.options)
                  if (cD = bD.match(CD.label)) {
                    let ID = CD.displayLabel ? DD ? DD(CD, cD.matched) : [] : cD.matched,
                      fD = cD.score + (CD.boost || 0);
                    if (iD(new SD(CD, BD.source, ID, fD)), "object" == typeof CD.section && "dynamic" === CD.section.rank) {
                      let {
                        name: DD
                      } = CD.section;
                      pD || (pD = Object.create(null)), pD[DD] = Math.max(fD, pD[DD] || -1e9)
                    }
                  }
              }
            } if (ID) {
            let DD = Object.create(null),
              CD = 0,
              iD = (DD, CD) => ("dynamic" === DD.rank && "dynamic" === CD.rank ? pD[CD.name] - pD[DD.name] : 0) || ("number" == typeof DD.rank ? DD.rank : 1e9) - ("number" == typeof CD.rank ? CD.rank : 1e9) || (DD.name < CD.name ? -1 : 1);
            for (let cD of ID.sort(iD)) CD -= 1e5, DD[cD.name] = CD;
            for (let ID of cD) {
              let {
                section: CD
              } = ID.completion;
              CD && (ID.score += DD["string" == typeof CD ? CD : CD.name])
            }
          }
          let bD = [],
            QD = null,
            wD = fD.compareCompletions;
          for (let SD of cD.sort(((DD, CD) => CD.score - DD.score || wD(DD.completion, CD.completion)))) {
            let DD = SD.completion;
            !QD || QD.label != DD.label || QD.detail != DD.detail || null != QD.type && null != DD.type && QD.type != DD.type || QD.apply != DD.apply || QD.boost != DD.boost ? bD.push(SD) : qD(SD.completion) > qD(QD) && (bD[bD.length - 1] = SD), QD = SD.completion
          }
          return bD
        }(DD, CD);
        if (!fD.length) return ID && DD.some((DD => DD.isPending)) ? ID.setDisabled() : null;
        let bD = CD.facet(mD).selectOnOpen ? 0 : -1;
        if (ID && ID.selected != bD && -1 != ID.selected) {
          let DD = ID.options[ID.selected].completion;
          for (let CD = 0; CD < fD.length; CD++)
            if (fD[CD].completion == DD) {
              bD = CD;
              break
            }
        }
        return new JD(fD, zD(cD, bD), {
          pos: DD.reduce(((DD, CD) => CD.hasResult() ? Math.min(DD, CD.from) : DD), 1e8),
          create: dD,
          above: pD.aboveCursor
        }, ID ? ID.timestamp : Date.now(), bD, !1)
      }
      map(DD) {
        return new JD(this.options, this.attrs, {
          ...this.tooltip,
          pos: DD.mapPos(this.tooltip.pos)
        }, this.timestamp, this.selected, this.disabled)
      }
      setDisabled() {
        return new JD(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0)
      }
    }
    class KD {
      constructor(DD, CD, cD) {
        this.active = DD, this.id = CD, this.open = cD
      }
      static start() {
        return new KD(jD, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
      }
      update(DD) {
        let {
          state: CD
        } = DD, cD = CD.facet(mD), ID = (cD.override || CD.languageDataAt("autocomplete", BD(CD)).map(oD)).map((CD => (this.active.find((DD => DD.source == CD)) || new LD(CD, this.active.some((DD => 0 != DD.state)) ? 1 : 0)).update(DD, cD)));
        ID.length == this.active.length && ID.every(((DD, CD) => DD == this.active[CD])) && (ID = this.active);
        let pD = this.open,
          iD = DD.effects.some((DD => DD.is(GD)));
        pD && DD.docChanged && (pD = pD.map(DD.changes)), DD.selection || ID.some((CD => CD.hasResult() && DD.changes.touchesRange(CD.from, CD.to))) || ! function(DD, CD) {
          if (DD == CD) return !0;
          for (let cD = 0, ID = 0;;) {
            for (; cD < DD.length && !DD[cD].hasResult();) cD++;
            for (; ID < CD.length && !CD[ID].hasResult();) ID++;
            let pD = cD == DD.length,
              iD = ID == CD.length;
            if (pD || iD) return pD == iD;
            if (DD[cD++].result != CD[ID++].result) return !1
          }
        }(ID, this.active) || iD ? pD = JD.build(ID, CD, this.id, pD, cD, iD) : pD && pD.disabled && !ID.some((DD => DD.isPending)) && (pD = null), !pD && ID.every((DD => !DD.isPending)) && ID.some((DD => DD.hasResult())) && (ID = ID.map((DD => DD.hasResult() ? new LD(DD.source, 0) : DD)));
        for (let fD of DD.effects) fD.is(PD) && (pD = pD && pD.setSelected(fD.value, this.id));
        return ID == this.active && pD == this.open ? this : new KD(ID, this.id, pD)
      }
      get tooltip() {
        return this.open ? this.open.tooltip : null
      }
      get attrs() {
        return this.open ? this.open.attrs : this.active.length ? aD : VD
      }
    }
    const aD = {
        "aria-autocomplete": "list"
      },
      VD = {};

    function zD(DD, CD) {
      let cD = {
        "aria-autocomplete": "list",
        "aria-haspopup": "listbox",
        "aria-controls": DD
      };
      return CD > -1 && (cD["aria-activedescendant"] = DD + "-" + CD), cD
    }
    const jD = [];

    function lD(DD, CD) {
      if (DD.isUserEvent("input.complete")) {
        let cD = DD.annotation(MD);
        if (cD && CD.activateOnCompletion(cD)) return 12
      }
      let cD = DD.isUserEvent("input.type");
      return cD && CD.activateOnTyping ? 5 : cD ? 1 : DD.isUserEvent("delete.backward") ? 2 : DD.selection ? 8 : DD.docChanged ? 16 : 0
    }
    class LD {
      constructor(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.source = DD, this.state = CD, this.explicit = cD
      }
      hasResult() {
        return !1
      }
      get isPending() {
        return 1 == this.state
      }
      update(DD, CD) {
        let cD = lD(DD, CD),
          ID = this;
        (8 & cD || 16 & cD && this.touches(DD)) && (ID = new LD(ID.source, 0)), 4 & cD && 0 == ID.state && (ID = new LD(this.source, 1)), ID = ID.updateFor(DD, cD);
        for (let pD of DD.effects)
          if (pD.is(vD)) ID = new LD(ID.source, 1, pD.value);
          else if (pD.is(ND)) ID = new LD(ID.source, 0);
        else if (pD.is(GD))
          for (let DD of pD.value) DD.source == ID.source && (ID = DD);
        return ID
      }
      updateFor(DD, CD) {
        return this.map(DD.changes)
      }
      map(DD) {
        return this
      }
      touches(DD) {
        return DD.changes.touchesRange(BD(DD.state))
      }
    }
    class TD extends LD {
      constructor(DD, CD, cD, ID, pD, iD) {
        super(DD, 3, CD), this.limit = cD, this.result = ID, this.from = pD, this.to = iD
      }
      hasResult() {
        return !0
      }
      updateFor(DD, CD) {
        var cD;
        if (!(3 & CD)) return this.map(DD.changes);
        let ID = this.result;
        ID.map && !DD.changes.empty && (ID = ID.map(ID, DD.changes));
        let pD = DD.changes.mapPos(this.from),
          iD = DD.changes.mapPos(this.to, 1),
          bD = BD(DD.state);
        if (bD > iD || !ID || 2 & CD && (BD(DD.startState) == this.from || bD < this.limit)) return new LD(this.source, 4 & CD ? 1 : 0);
        let QD = DD.changes.mapPos(this.limit);
        return function(DD, CD, cD, ID) {
          if (!DD) return !1;
          let pD = CD.sliceDoc(cD, ID);
          return "function" == typeof DD ? DD(pD, cD, ID, CD) : yD(DD, !0).test(pD)
        }(ID.validFor, DD.state, pD, iD) ? new TD(this.source, this.explicit, QD, ID, pD, iD) : ID.update && (ID = ID.update(ID, pD, iD, new fD(DD.state, bD, !1))) ? new TD(this.source, this.explicit, QD, ID, ID.from, null !== (cD = ID.to) && void 0 !== cD ? cD : BD(DD.state)) : new LD(this.source, 1, this.explicit)
      }
      map(DD) {
        if (DD.empty) return this;
        return (this.result.map ? this.result.map(this.result, DD) : this.result) ? new TD(this.source, this.explicit, DD.mapPos(this.limit), this.result, DD.mapPos(this.from), DD.mapPos(this.to, 1)) : new LD(this.source, 0)
      }
      touches(DD) {
        return DD.changes.touchesRange(this.from, this.to)
      }
    }
    const GD = ID.D.define({
        map: (DD, CD) => DD.map((DD => DD.map(CD)))
      }),
      RD = ID.F.define({
        create: () => KD.start(),
        update: (DD, CD) => DD.update(CD),
        provide: DD => [pD.wb.from(DD, (DD => DD.tooltip)), pD.m.contentAttributes.from(DD, (DD => DD.attrs))]
      });

    function kD(DD, CD) {
      const cD = CD.completion.apply || CD.completion.label;
      let ID = DD.state.field(RD).active.find((DD => DD.source == CD.source));
      return ID instanceof TD && ("string" == typeof cD ? DD.dispatch({
        ...tD(DD.state, cD, ID.from, ID.to),
        annotations: MD.of(CD.completion)
      }) : cD(DD, CD.completion, ID.from, ID.to), !0)
    }
    const dD = xD(RD, kD);

    function YD(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option";
      return cD => {
        let ID = cD.state.field(RD, !1);
        if (!ID || !ID.open || ID.open.disabled || Date.now() - ID.open.timestamp < cD.state.facet(mD).interactionDelay) return !1;
        let iD, fD = 1;
        "page" == CD && (iD = (0, pD.L)(cD, ID.open.tooltip)) && (fD = Math.max(2, Math.floor(iD.dom.offsetHeight / iD.dom.querySelector("li").offsetHeight) - 1));
        let {
          length: bD
        } = ID.open.options, QD = ID.open.selected > -1 ? ID.open.selected + fD * (DD ? 1 : -1) : DD ? 0 : bD - 1;
        return QD < 0 ? QD = "page" == CD ? 0 : bD - 1 : QD >= bD && (QD = "page" == CD ? bD - 1 : 0), cD.dispatch({
          effects: PD.of(QD)
        }), !0
      }
    }
    const WD = DD => !!DD.state.field(RD, !1) && (DD.dispatch({
      effects: vD.of(!0)
    }), !0);
    class sD {
      constructor(DD, CD) {
        this.active = DD, this.context = CD, this.time = Date.now(), this.updates = [], this.done = void 0
      }
    }
    const ED = pD.u.fromClass(class {
        constructor(DD) {
          this.view = DD, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
          for (let CD of DD.state.field(RD).active) CD.isPending && this.startQuery(CD)
        }
        update(DD) {
          let CD = DD.state.field(RD),
            cD = DD.state.facet(mD);
          if (!DD.selectionSet && !DD.docChanged && DD.startState.field(RD) == CD) return;
          let ID = DD.transactions.some((DD => {
            let CD = lD(DD, cD);
            return 8 & CD || (DD.selection || DD.docChanged) && !(3 & CD)
          }));
          for (let bD = 0; bD < this.running.length; bD++) {
            let CD = this.running[bD];
            if (ID || CD.context.abortOnDocChange && DD.docChanged || CD.updates.length + DD.transactions.length > 50 && Date.now() - CD.time > 1e3) {
              for (let DD of CD.context.abortListeners) try {
                DD()
              } catch (fD) {
                (0, pD.fb)(this.view.state, fD)
              }
              CD.context.abortListeners = null, this.running.splice(bD--, 1)
            } else CD.updates.push(...DD.transactions)
          }
          this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), DD.transactions.some((DD => DD.effects.some((DD => DD.is(vD))))) && (this.pendingStart = !0);
          let iD = this.pendingStart ? 50 : cD.activateOnTypingDelay;
          if (this.debounceUpdate = CD.active.some((DD => DD.isPending && !this.running.some((CD => CD.active.source == DD.source)))) ? setTimeout((() => this.startUpdate()), iD) : -1, 0 != this.composing)
            for (let pD of DD.transactions) pD.isUserEvent("input.type") ? this.composing = 2 : 2 == this.composing && pD.selection && (this.composing = 3)
        }
        startUpdate() {
          this.debounceUpdate = -1, this.pendingStart = !1;
          let {
            state: DD
          } = this.view, CD = DD.field(RD);
          for (let cD of CD.active) cD.isPending && !this.running.some((DD => DD.active.source == cD.source)) && this.startQuery(cD);
          this.running.length && CD.open && CD.open.disabled && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(mD).updateSyncTime))
        }
        startQuery(DD) {
          let {
            state: CD
          } = this.view, cD = BD(CD), ID = new fD(CD, cD, DD.explicit, this.view), iD = new sD(DD, ID);
          this.running.push(iD), Promise.resolve(DD.source(ID)).then((DD => {
            iD.context.aborted || (iD.done = DD || null, this.scheduleAccept())
          }), (DD => {
            this.view.dispatch({
              effects: ND.of(null)
            }), (0, pD.fb)(this.view.state, DD)
          }))
        }
        scheduleAccept() {
          this.running.every((DD => void 0 !== DD.done)) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(mD).updateSyncTime))
        }
        accept() {
          var DD;
          this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
          let CD = [],
            cD = this.view.state.facet(mD),
            ID = this.view.state.field(RD);
          for (let pD = 0; pD < this.running.length; pD++) {
            let iD = this.running[pD];
            if (void 0 === iD.done) continue;
            if (this.running.splice(pD--, 1), iD.done) {
              let ID = BD(iD.updates.length ? iD.updates[0].startState : this.view.state),
                pD = Math.min(ID, iD.done.from + (iD.active.explicit ? 0 : 1)),
                fD = new TD(iD.active.source, iD.active.explicit, pD, iD.done, iD.done.from, null !== (DD = iD.done.to) && void 0 !== DD ? DD : ID);
              for (let DD of iD.updates) fD = fD.update(DD, cD);
              if (fD.hasResult()) {
                CD.push(fD);
                continue
              }
            }
            let fD = ID.active.find((DD => DD.source == iD.active.source));
            if (fD && fD.isPending)
              if (null == iD.done) {
                let DD = new LD(iD.active.source, 0);
                for (let CD of iD.updates) DD = DD.update(CD, cD);
                DD.isPending || CD.push(DD)
              } else this.startQuery(fD)
          }(CD.length || ID.open && ID.open.disabled) && this.view.dispatch({
            effects: GD.of(CD)
          })
        }
      }, {
        eventHandlers: {
          blur(DD) {
            let CD = this.view.state.field(RD, !1);
            if (CD && CD.tooltip && this.view.state.facet(mD).closeOnBlur) {
              let cD = CD.open && (0, pD.L)(this.view, CD.open.tooltip);
              cD && cD.dom.contains(DD.relatedTarget) || setTimeout((() => this.view.dispatch({
                effects: ND.of(null)
              })), 10)
            }
          },
          compositionstart() {
            this.composing = 1
          },
          compositionend() {
            3 == this.composing && setTimeout((() => this.view.dispatch({
              effects: vD.of(!1)
            })), 20), this.composing = 0
          }
        }
      }),
      eD = "object" == typeof navigator && /Win/.test(navigator.platform),
      uD = ID.s.highest(pD.m.domEventHandlers({
        keydown(DD, CD) {
          let cD = CD.state.field(RD, !1);
          if (!cD || !cD.open || cD.open.disabled || cD.open.selected < 0 || DD.key.length > 1 || DD.ctrlKey && (!eD || !DD.altKey) || DD.metaKey) return !1;
          let ID = cD.open.options[cD.open.selected],
            pD = cD.active.find((DD => DD.source == ID.source)),
            iD = ID.completion.commitCharacters || pD.result.commitCharacters;
          return iD && iD.indexOf(DD.key) > -1 && kD(CD, ID), !1
        }
      })),
      hD = pD.m.baseTheme({
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
    class rD {
      constructor(DD, CD, cD, ID) {
        this.field = DD, this.line = CD, this.from = cD, this.to = ID
      }
    }
    class AD {
      constructor(DD, CD, cD) {
        this.field = DD, this.from = CD, this.to = cD
      }
      map(DD) {
        let CD = DD.mapPos(this.from, -1, ID.o.TrackDel),
          cD = DD.mapPos(this.to, 1, ID.o.TrackDel);
        return null == CD || null == cD ? null : new AD(this.field, CD, cD)
      }
    }
    class FD {
      constructor(DD, CD) {
        this.lines = DD, this.fieldPositions = CD
      }
      instantiate(DD, CD) {
        let cD = [],
          ID = [CD],
          pD = DD.doc.lineAt(CD),
          fD = /^\s*/.exec(pD.text)[0];
        for (let QD of this.lines) {
          if (cD.length) {
            let cD = fD,
              pD = /^\t*/.exec(QD)[0].length;
            for (let CD = 0; CD < pD; CD++) cD += DD.facet(iD.gb);
            ID.push(CD + cD.length - pD), QD = cD + QD.slice(pD)
          }
          cD.push(QD), CD += QD.length + 1
        }
        let bD = this.fieldPositions.map((DD => new AD(DD.field, ID[DD.line] + DD.from, ID[DD.line] + DD.to)));
        return {
          text: cD,
          df: bD
        }
      }
      static parse(DD) {
        let CD, cD = [],
          ID = [],
          pD = [];
        for (let iD of DD.split(/\r\n?|\n/)) {
          for (; CD = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(iD);) {
            let DD = CD[1] ? +CD[1] : null,
              fD = CD[2] || CD[3] || "",
              bD = -1,
              QD = fD.replace(/\\[{}]/g, (DD => DD[1]));
            for (let CD = 0; CD < cD.length; CD++)(null != DD ? cD[CD].seq == DD : QD && cD[CD].name == QD) && (bD = CD);
            if (bD < 0) {
              let CD = 0;
              for (; CD < cD.length && (null == DD || null != cD[CD].seq && cD[CD].seq < DD);) CD++;
              cD.splice(CD, 0, {
                seq: DD,
                name: QD
              }), bD = CD;
              for (let DD of pD) DD.field >= bD && DD.field++
            }
            for (let cD of pD)
              if (cD.line == ID.length && cD.from > CD.index) {
                let DD = CD[2] ? 3 + (CD[1] || "").length : 2;
                cD.from -= DD, cD.to -= DD
              } pD.push(new rD(bD, ID.length, CD.index, CD.index + QD.length)), iD = iD.slice(0, CD.index) + fD + iD.slice(CD.index + CD[0].length)
          }
          iD = iD.replace(/\\([{}])/g, ((DD, CD, cD) => {
            for (let iD of pD) iD.line == ID.length && iD.from > cD && (iD.from--, iD.to--);
            return CD
          })), ID.push(iD)
        }
        return new FD(ID, pD)
      }
    }
    let DC = pD.e.widget({
        widget: new class extends pD.y {
          toDOM() {
            let DD = document.createElement("span");
            return DD.className = "cm-snippetFieldPosition", DD
          }
          ignoreEvent() {
            return !1
          }
        }
      }),
      CC = pD.e.mark({
        class: "cm-snippetField"
      });
    class cC {
      constructor(DD, CD) {
        this.df = DD, this.active = CD, this.deco = pD.e.set(DD.map((DD => (DD.from == DD.to ? DC : CC).range(DD.from, DD.to))), !0)
      }
      map(DD) {
        let CD = [];
        for (let cD of this.df) {
          let ID = cD.map(DD);
          if (!ID) return null;
          CD.push(ID)
        }
        return new cC(CD, this.active)
      }
      selectionInsideField(DD) {
        return DD.df.every((DD => this.df.some((CD => CD.field == this.active && CD.from <= DD.from && CD.to >= DD.to))))
      }
    }
    const IC = ID.D.define({
        map: (DD, CD) => DD && DD.map(CD)
      }),
      pC = ID.D.define(),
      iC = ID.F.define({
        create: () => null,
        update(DD, CD) {
          for (let cD of CD.effects) {
            if (cD.is(IC)) return cD.value;
            if (cD.is(pC) && DD) return new cC(DD.df, cD.value)
          }
          return DD && CD.docChanged && (DD = DD.map(CD.changes)), DD && CD.selection && !DD.selectionInsideField(CD.selection) && (DD = null), DD
        },
        provide: DD => pD.m.qI.from(DD, (DD => DD ? DD.deco : pD.e.none))
      });

    function fC(DD, CD) {
      return ID.i.create(DD.filter((DD => DD.field == CD)).map((DD => ID.i.range(DD.from, DD.to))))
    }

    function bC(DD) {
      let CD = FD.parse(DD);
      return (DD, cD, pD, iD) => {
        let {
          text: fD,
          df: bD
        } = CD.instantiate(DD.state, pD), {
          main: QD
        } = DD.state.selection, wD = {
          changes: {
            from: pD,
            to: iD == QD.from ? QD.to : iD,
            insert: ID.J.of(fD)
          },
          scrollIntoView: !0,
          annotations: cD ? [MD.of(cD), ID.L.userEvent.of("input.complete")] : void 0
        };
        if (bD.length && (wD.selection = fC(bD, 0)), bD.some((DD => DD.field > 0))) {
          let CD = new cC(bD, 0),
            cD = wD.effects = [IC.of(CD)];
          void 0 === DD.state.field(iC, !1) && cD.push(ID.D.appendConfig.of([iC, BC, MC, hD]))
        }
        DD.dispatch(DD.state.update(wD))
      }
    }

    function QC(DD) {
      return CD => {
        let {
          state: cD,
          dispatch: ID
        } = CD, pD = cD.field(iC, !1);
        if (!pD || DD < 0 && 0 == pD.active) return !1;
        let iD = pD.active + DD,
          fD = DD > 0 && !pD.df.some((CD => CD.field == iD + DD));
        return ID(cD.update({
          selection: fC(pD.df, iD),
          effects: IC.of(fD ? null : new cC(pD.df, iD)),
          scrollIntoView: !0
        })), !0
      }
    }
    const wC = [{
        key: "Tab",
        run: QC(1),
        shift: QC(-1)
      }, {
        key: "Escape",
        run: DD => {
          let {
            state: CD,
            dispatch: cD
          } = DD;
          return !!CD.field(iC, !1) && (cD(CD.update({
            effects: IC.of(null)
          })), !0)
        }
      }],
      SC = ID.l.define({
        combine: DD => DD.length ? DD[0] : wC
      }),
      BC = ID.s.highest(pD._.compute([SC], (DD => DD.facet(SC))));

    function yC(DD, CD) {
      return {
        ...CD,
        apply: bC(DD)
      }
    }
    const MC = pD.m.domEventHandlers({
      mousedown(DD, CD) {
        let cD, ID = CD.state.field(iC, !1);
        if (!ID || null == (cD = CD.posAtCoords({
            x: DD.clientX,
            y: DD.clientY
          }))) return !1;
        let pD = ID.df.find((DD => DD.from <= cD && DD.to >= cD));
        return !(!pD || pD.field == ID.active) && (CD.dispatch({
          selection: fC(ID.df, pD.field),
          effects: IC.of(ID.df.some((DD => DD.field > pD.field)) ? new cC(ID.df, pD.field) : null),
          scrollIntoView: !0
        }), !0)
      }
    });
    const tC = {
        brackets: ["(", "[", "{", "'", '"'],
        before: ")]}:;>",
        stringPrefixes: []
      },
      ZC = ID.D.define({
        map(DD, CD) {
          let cD = CD.mapPos(DD, -1, ID.o.TrackAfter);
          return null == cD ? void 0 : cD
        }
      }),
      oC = new class extends ID.B {};
    oC.startSide = 1, oC.endSide = -1;
    const vC = ID.F.define({
      create: () => ID.x.empty,
      update(DD, CD) {
        if (DD = DD.map(CD.changes), CD.selection) {
          let cD = CD.state.doc.lineAt(CD.selection.main.head);
          DD = DD.update({
            filter: DD => DD >= cD.from && DD <= cD.to
          })
        }
        for (let cD of CD.effects) cD.is(ZC) && (DD = DD.update({
          add: [oC.range(cD.value, cD.value + 1)]
        }));
        return DD
      }
    });

    function NC() {
      return [OC, vC]
    }
    const gC = "()[]{}<>\xab\xbb\xbb\xab\uff3b\uff3d\uff5b\uff5d";

    function XC(DD) {
      for (let CD = 0; CD < 16; CD += 2)
        if (gC.charCodeAt(CD) == DD) return gC.charAt(CD + 1);
      return (0, ID.bb)(DD < 128 ? DD : DD + 1)
    }

    function mC(DD, CD) {
      return DD.languageDataAt("closeBrackets", CD)[0] || tC
    }
    const nC = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      OC = pD.m.inputHandler.of(((DD, CD, cD, pD) => {
        if ((nC ? DD.composing : DD.compositionStarted) || DD.state.readOnly) return !1;
        let iD = DD.state.selection.main;
        if (pD.length > 2 || 2 == pD.length && 1 == (0, ID.S)((0, ID.O)(pD, 0)) || CD != iD.from || cD != iD.to) return !1;
        let fD = function(DD, CD) {
          let cD = mC(DD, DD.selection.main.head),
            pD = cD.brackets || tC.brackets;
          for (let iD of pD) {
            let fD = XC((0, ID.O)(iD, 0));
            if (CD == iD) return fD == iD ? JC(DD, iD, pD.indexOf(iD + iD + iD) > -1, cD) : xC(DD, iD, fD, cD.before || tC.before);
            if (CD == fD && HC(DD, DD.selection.main.from)) return qC(DD, iD, fD)
          }
          return null
        }(DD.state, pD);
        return !!fD && (DD.dispatch(fD), !0)
      })),
      PC = [{
        key: "Backspace",
        run: DD => {
          let {
            state: CD,
            dispatch: cD
          } = DD;
          if (CD.readOnly) return !1;
          let pD = mC(CD, CD.selection.main.head).brackets || tC.brackets,
            iD = null,
            fD = CD.changeByRange((DD => {
              if (DD.empty) {
                let cD = function(DD, CD) {
                  let cD = DD.sliceString(CD - 2, CD);
                  return (0, ID.S)((0, ID.O)(cD, 0)) == cD.length ? cD : cD.slice(1)
                }(CD.doc, DD.head);
                for (let iD of pD)
                  if (iD == cD && UC(CD.doc, DD.head) == XC((0, ID.O)(iD, 0))) return {
                    changes: {
                      from: DD.head - iD.length,
                      to: DD.head + iD.length
                    },
                    range: ID.i.cursor(DD.head - iD.length)
                  }
              }
              return {
                range: iD = DD
              }
            }));
          return iD || cD(CD.update(fD, {
            scrollIntoView: !0,
            userEvent: "delete.backward"
          })), !iD
        }
      }];

    function HC(DD, CD) {
      let cD = !1;
      return DD.field(vC).between(0, DD.doc.length, (DD => {
        DD == CD && (cD = !0)
      })), cD
    }

    function UC(DD, CD) {
      let cD = DD.sliceString(CD, CD + 2);
      return cD.slice(0, (0, ID.S)((0, ID.O)(cD, 0)))
    }

    function xC(DD, CD, cD, pD) {
      let iD = null,
        fD = DD.changeByRange((fD => {
          if (!fD.empty) return {
            changes: [{
              insert: CD,
              from: fD.from
            }, {
              insert: cD,
              from: fD.to
            }],
            effects: ZC.of(fD.to + CD.length),
            range: ID.i.range(fD.anchor + CD.length, fD.head + CD.length)
          };
          let bD = UC(DD.doc, fD.head);
          return !bD || /\s/.test(bD) || pD.indexOf(bD) > -1 ? {
            changes: {
              insert: CD + cD,
              from: fD.head
            },
            effects: ZC.of(fD.head + CD.length),
            range: ID.i.cursor(fD.head + CD.length)
          } : {
            range: iD = fD
          }
        }));
      return iD ? null : DD.update(fD, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function qC(DD, CD, cD) {
      let pD = null,
        iD = DD.changeByRange((CD => CD.empty && UC(DD.doc, CD.head) == cD ? {
          changes: {
            from: CD.head,
            to: CD.head + cD.length,
            insert: cD
          },
          range: ID.i.cursor(CD.head + cD.length)
        } : pD = {
          range: CD
        }));
      return pD ? null : DD.update(iD, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function JC(DD, CD, cD, pD) {
      let fD = pD.stringPrefixes || tC.stringPrefixes,
        bD = null,
        QD = DD.changeByRange((pD => {
          if (!pD.empty) return {
            changes: [{
              insert: CD,
              from: pD.from
            }, {
              insert: CD,
              from: pD.to
            }],
            effects: ZC.of(pD.to + CD.length),
            range: ID.i.range(pD.anchor + CD.length, pD.head + CD.length)
          };
          let QD, wD = pD.head,
            SD = UC(DD.doc, wD);
          if (SD == CD) {
            if (KC(DD, wD)) return {
              changes: {
                insert: CD + CD,
                from: wD
              },
              effects: ZC.of(wD + CD.length),
              range: ID.i.cursor(wD + CD.length)
            };
            if (HC(DD, wD)) {
              let pD = cD && DD.sliceDoc(wD, wD + 3 * CD.length) == CD + CD + CD ? CD + CD + CD : CD;
              return {
                changes: {
                  from: wD,
                  to: wD + pD.length,
                  insert: pD
                },
                range: ID.i.cursor(wD + pD.length)
              }
            }
          } else {
            if (cD && DD.sliceDoc(wD - 2 * CD.length, wD) == CD + CD && (QD = aC(DD, wD - 2 * CD.length, fD)) > -1 && KC(DD, QD)) return {
              changes: {
                insert: CD + CD + CD + CD,
                from: wD
              },
              effects: ZC.of(wD + CD.length),
              range: ID.i.cursor(wD + CD.length)
            };
            if (DD.charCategorizer(wD)(SD) != ID.f.Word && aC(DD, wD, fD) > -1 && ! function(DD, CD, cD, ID) {
                let pD = (0, iD.mb)(DD).resolveInner(CD, -1),
                  fD = ID.reduce(((DD, CD) => Math.max(DD, CD.length)), 0);
                for (let iD = 0; iD < 5; iD++) {
                  let iD = DD.sliceDoc(pD.from, Math.min(pD.to, pD.from + cD.length + fD)),
                    bD = iD.indexOf(cD);
                  if (!bD || bD > -1 && ID.indexOf(iD.slice(0, bD)) > -1) {
                    let CD = pD.firstChild;
                    for (; CD && CD.from == pD.from && CD.to - CD.from > cD.length + bD;) {
                      if (DD.sliceDoc(CD.to - cD.length, CD.to) == cD) return !1;
                      CD = CD.firstChild
                    }
                    return !0
                  }
                  let QD = pD.to == CD && pD.parent;
                  if (!QD) break;
                  pD = QD
                }
                return !1
              }(DD, wD, CD, fD)) return {
              changes: {
                insert: CD + CD,
                from: wD
              },
              effects: ZC.of(wD + CD.length),
              range: ID.i.cursor(wD + CD.length)
            }
          }
          return {
            range: bD = pD
          }
        }));
      return bD ? null : DD.update(QD, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function KC(DD, CD) {
      let cD = (0, iD.mb)(DD).resolveInner(CD + 1);
      return cD.parent && cD.from == CD
    }

    function aC(DD, CD, cD) {
      let pD = DD.charCategorizer(CD);
      if (pD(DD.sliceDoc(CD - 1, CD)) != ID.f.Word) return CD;
      for (let iD of cD) {
        let cD = CD - iD.length;
        if (DD.sliceDoc(cD, CD) == iD && pD(DD.sliceDoc(cD - 1, cD)) != ID.f.Word) return cD
      }
      return -1
    }

    function VC() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [uD, RD, mD.of(DD), ED, jC, hD]
    }
    const zC = [{
        key: "Ctrl-Space",
        run: WD
      }, {
        mac: "Alt-`",
        run: WD
      }, {
        mac: "Alt-i",
        run: WD
      }, {
        key: "Escape",
        run: DD => {
          let CD = DD.state.field(RD, !1);
          return !(!CD || !CD.active.some((DD => 0 != DD.state))) && (DD.dispatch({
            effects: ND.of(null)
          }), !0)
        }
      }, {
        key: "ArrowDown",
        run: YD(!0)
      }, {
        key: "ArrowUp",
        run: YD(!1)
      }, {
        key: "PageDown",
        run: YD(!0, "page")
      }, {
        key: "PageUp",
        run: YD(!1, "page")
      }, {
        key: "Enter",
        run: DD => {
          let CD = DD.state.field(RD, !1);
          return !(DD.state.readOnly || !CD || !CD.open || CD.open.selected < 0 || CD.open.disabled || Date.now() - CD.open.timestamp < DD.state.facet(mD).interactionDelay) && kD(DD, CD.open.options[CD.open.selected])
        }
      }],
      jC = ID.s.highest(pD._.computeN([mD], (DD => DD.facet(mD).defaultKeymap ? [zC] : [])))
  },
  40514: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => wD,
      e: () => yD,
      h: () => SD,
      k: () => BD
    });
    var ID = cD(40379);
    class pD {
      constructor(DD, CD, cD, ID) {
        this.origin = DD, this.changes = CD, this.effects = cD, this.clientID = ID
      }
    }
    class iD {
      constructor(DD, CD) {
        this.version = DD, this.unconfirmed = CD
      }
    }
    const fD = ID.l.define({
        combine(DD) {
          let CD = (0, ID.U)(DD, {
            startVersion: 0,
            clientID: null,
            sharedEffects: () => []
          }, {
            generatedID: DD => DD
          });
          return null == CD.clientID && (CD.clientID = DD.length && DD[0].generatedID || ""), CD
        }
      }),
      bD = ID.c.define(),
      QD = ID.F.define({
        create: DD => new iD(DD.facet(fD).startVersion, []),
        update(DD, CD) {
          let cD = CD.annotation(bD);
          if (cD) return cD;
          let {
            sharedEffects: ID,
            clientID: QD
          } = CD.startState.facet(fD), wD = ID(CD);
          return wD.length || !CD.changes.empty ? new iD(DD.version, DD.unconfirmed.concat(new pD(CD, CD.changes, wD, QD))) : DD
        }
      });

    function wD() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [QD, fD.of(Object.assign({
        generatedID: Math.floor(1e9 * Math.random()).toString(36)
      }, DD))]
    }

    function SD(DD, CD) {
      let {
        version: cD,
        unconfirmed: wD
      } = DD.field(QD), {
        clientID: SD
      } = DD.facet(fD);
      cD += CD.length;
      let BD = [],
        yD = null,
        MD = 0;
      for (let pD of CD) {
        let DD = MD < wD.length ? wD[MD] : null;
        DD && DD.clientID == pD.clientID ? (yD && (yD = yD.map(DD.changes, !0)), BD = ID.D.mapEffects(BD, pD.changes), MD++) : (BD = ID.D.mapEffects(BD, pD.changes), pD.effects && (BD = BD.concat(pD.effects)), yD = yD ? yD.compose(pD.changes) : pD.changes)
      }
      if (MD && (wD = wD.slice(MD)), wD.length && (yD && (wD = wD.map((DD => {
          let CD = DD.changes.map(yD);
          return yD = yD.map(DD.changes, !0), new pD(DD.origin, CD, ID.D.mapEffects(DD.effects, yD), SD)
        }))), BD.length)) {
        let DD = wD.reduce(((DD, CD) => DD.compose(CD.changes)), ID.ChangeSet.empty(wD[0].changes.length));
        BD = ID.D.mapEffects(BD, DD)
      }
      return yD ? DD.update({
        changes: yD,
        effects: BD,
        annotations: [ID.L.addToHistory.of(!1), ID.L.remote.of(!0), bD.of(new iD(cD, wD))],
        filter: !1
      }) : DD.update({
        annotations: [bD.of(new iD(cD, wD))]
      })
    }

    function BD(DD) {
      return DD.field(QD).unconfirmed
    }

    function yD(DD) {
      return DD.field(QD).version
    }
  },
  40415: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => ZC
    });
    var ID = cD(40403);
    class pD {
      constructor(DD, CD, cD, ID, pD, iD, fD, bD, QD) {
        let wD = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          SD = arguments.length > 10 ? arguments[10] : void 0;
        this.p = DD, this.stack = CD, this.state = cD, this.reducePos = ID, this.pos = pD, this.score = iD, this.buffer = fD, this.bufferBase = bD, this.curContext = QD, this.lookAhead = wD, this.parent = SD
      }
      toString() {
        return `[${this.stack.filter(((DD,CD)=>CD%3==0)).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`
      }
      static start(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          ID = DD.parser.context;
        return new pD(DD, [], CD, cD, cD, 0, [], 0, ID ? new iD(ID, ID.start) : null, 0, null)
      }
      get context() {
        return this.curContext ? this.curContext.context : null
      }
      pushState(DD, CD) {
        this.stack.push(this.state, CD, this.bufferBase + this.buffer.length), this.state = DD
      }
      reduce(DD) {
        var CD;
        let cD = DD >> 19,
          ID = 65535 & DD,
          {
            parser: pD
          } = this.p,
          iD = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos),
          fD = pD.dynamicPrecedence(ID);
        if (fD && (this.score += fD), 0 == cD) return this.pushState(pD.getGoto(this.state, ID, !0), this.reducePos), ID < pD.minRepeatTerm && this.storeNode(ID, this.reducePos, this.reducePos, iD ? 8 : 4, !0), void this.reduceContext(ID, this.reducePos);
        let bD = this.stack.length - 3 * (cD - 1) - (262144 & DD ? 6 : 0),
          QD = bD ? this.stack[bD - 2] : this.p.df[0].from,
          wD = this.reducePos - QD;
        wD >= 2e3 && !(null === (CD = this.p.parser.nodeSet.types[ID]) || void 0 === CD ? void 0 : CD.isAnonymous) && (QD == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = wD) : this.p.lastBigReductionSize < wD && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = QD, this.p.lastBigReductionSize = wD));
        let SD = bD ? this.stack[bD - 1] : 0,
          BD = this.bufferBase + this.buffer.length - SD;
        if (ID < pD.minRepeatTerm || 131072 & DD) {
          let DD = pD.stateFlag(this.state, 1) ? this.pos : this.reducePos;
          this.storeNode(ID, QD, DD, BD + 4, !0)
        }
        if (262144 & DD) this.state = this.stack[bD];
        else {
          let DD = this.stack[bD - 3];
          this.state = pD.getGoto(DD, ID, !0)
        }
        for (; this.stack.length > bD;) this.stack.pop();
        this.reduceContext(ID, QD)
      }
      storeNode(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
          pD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (0 == DD && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
          let DD = this,
            ID = this.buffer.length;
          if (0 == ID && DD.parent && (ID = DD.bufferBase - DD.parent.bufferBase, DD = DD.parent), ID > 0 && 0 == DD.buffer[ID - 4] && DD.buffer[ID - 1] > -1) {
            if (CD == cD) return;
            if (DD.buffer[ID - 2] >= CD) return void(DD.buffer[ID - 2] = cD)
          }
        }
        if (pD && this.pos != cD) {
          let pD = this.buffer.length;
          if (pD > 0 && (0 != this.buffer[pD - 4] || this.buffer[pD - 1] < 0)) {
            let DD = !1;
            for (let CD = pD; CD > 0 && this.buffer[CD - 2] > cD; CD -= 4)
              if (this.buffer[CD - 1] >= 0) {
                DD = !0;
                break
              } if (DD)
              for (; pD > 0 && this.buffer[pD - 2] > cD;) this.buffer[pD] = this.buffer[pD - 4], this.buffer[pD + 1] = this.buffer[pD - 3], this.buffer[pD + 2] = this.buffer[pD - 2], this.buffer[pD + 3] = this.buffer[pD - 1], pD -= 4, ID > 4 && (ID -= 4)
          }
          this.buffer[pD] = DD, this.buffer[pD + 1] = CD, this.buffer[pD + 2] = cD, this.buffer[pD + 3] = ID
        } else this.buffer.push(DD, CD, cD, ID)
      }
      shift(DD, CD, cD, ID) {
        if (131072 & DD) this.pushState(65535 & DD, this.pos);
        else if (0 == (262144 & DD)) {
          let pD = DD,
            {
              parser: iD
            } = this.p;
          this.pos = ID;
          let fD = iD.stateFlag(pD, 1);
          !fD && (ID > cD || CD <= iD.maxNode) && (this.reducePos = ID), this.pushState(pD, fD ? cD : Math.min(cD, this.reducePos)), this.shiftContext(CD, cD), CD <= iD.maxNode && this.buffer.push(CD, cD, ID, 4)
        } else this.pos = ID, this.shiftContext(CD, cD), CD <= this.p.parser.maxNode && this.buffer.push(CD, cD, ID, 4)
      }
      apply(DD, CD, cD, ID) {
        65536 & DD ? this.reduce(DD) : this.shift(DD, CD, cD, ID)
      }
      useNode(DD, CD) {
        let cD = this.p.reused.length - 1;
        (cD < 0 || this.p.reused[cD] != DD) && (this.p.reused.push(DD), cD++);
        let ID = this.pos;
        this.reducePos = this.pos = ID + DD.length, this.pushState(CD, ID), this.buffer.push(cD, ID, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, DD, this, this.p.stream.reset(this.pos - DD.length)))
      }
      split() {
        let DD = this,
          CD = DD.buffer.length;
        for (; CD > 0 && DD.buffer[CD - 2] > DD.reducePos;) CD -= 4;
        let cD = DD.buffer.slice(CD),
          ID = DD.bufferBase + CD;
        for (; DD && ID == DD.bufferBase;) DD = DD.parent;
        return new pD(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, cD, ID, this.curContext, this.lookAhead, DD)
      }
      recoverByDelete(DD, CD) {
        let cD = DD <= this.p.parser.maxNode;
        cD && this.storeNode(DD, this.pos, CD, 4), this.storeNode(0, this.pos, CD, cD ? 8 : 4), this.pos = this.reducePos = CD, this.score -= 190
      }
      canShift(DD) {
        for (let CD = new fD(this);;) {
          let cD = this.p.parser.stateSlot(CD.state, 4) || this.p.parser.hasAction(CD.state, DD);
          if (0 == cD) return !1;
          if (0 == (65536 & cD)) return !0;
          CD.reduce(cD)
        }
      }
      recoverByInsert(DD) {
        if (this.stack.length >= 300) return [];
        let CD = this.p.parser.nextStates(this.state);
        if (CD.length > 8 || this.stack.length >= 120) {
          let cD = [];
          for (let ID, pD = 0; pD < CD.length; pD += 2)(ID = CD[pD + 1]) != this.state && this.p.parser.hasAction(ID, DD) && cD.push(CD[pD], ID);
          if (this.stack.length < 120)
            for (let DD = 0; cD.length < 8 && DD < CD.length; DD += 2) {
              let ID = CD[DD + 1];
              cD.some(((DD, CD) => 1 & CD && DD == ID)) || cD.push(CD[DD], ID)
            }
          CD = cD
        }
        let cD = [];
        for (let ID = 0; ID < CD.length && cD.length < 4; ID += 2) {
          let DD = CD[ID + 1];
          if (DD == this.state) continue;
          let pD = this.split();
          pD.pushState(DD, this.pos), pD.storeNode(0, pD.pos, pD.pos, 4, !0), pD.shiftContext(CD[ID], this.pos), pD.reducePos = this.pos, pD.score -= 200, cD.push(pD)
        }
        return cD
      }
      forceReduce() {
        let {
          parser: DD
        } = this.p, CD = DD.stateSlot(this.state, 5);
        if (0 == (65536 & CD)) return !1;
        if (!DD.validAction(this.state, CD)) {
          let cD = CD >> 19,
            ID = 65535 & CD,
            pD = this.stack.length - 3 * cD;
          if (pD < 0 || DD.getGoto(this.stack[pD], ID, !1) < 0) {
            let DD = this.findForcedReduction();
            if (null == DD) return !1;
            CD = DD
          }
          this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100
        }
        return this.reducePos = this.pos, this.reduce(CD), !0
      }
      findForcedReduction() {
        let {
          parser: DD
        } = this.p, CD = [], cD = (ID, pD) => {
          if (!CD.includes(ID)) return CD.push(ID), DD.allActions(ID, (CD => {
            if (393216 & CD);
            else if (65536 & CD) {
              let cD = (CD >> 19) - pD;
              if (cD > 1) {
                let ID = 65535 & CD,
                  pD = this.stack.length - 3 * cD;
                if (pD >= 0 && DD.getGoto(this.stack[pD], ID, !1) >= 0) return cD << 19 | 65536 | ID
              }
            } else {
              let DD = cD(CD, pD + 1);
              if (null != DD) return DD
            }
          }))
        };
        return cD(this.state, 0)
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
          parser: DD
        } = this.p;
        return 65535 == DD.data[DD.stateSlot(this.state, 1)] && !DD.stateSlot(this.state, 4)
      }
      restart() {
        this.storeNode(0, this.pos, this.pos, 4, !0), this.state = this.stack[0], this.stack.length = 0
      }
      sameState(DD) {
        if (this.state != DD.state || this.stack.length != DD.stack.length) return !1;
        for (let CD = 0; CD < this.stack.length; CD += 3)
          if (this.stack[CD] != DD.stack[CD]) return !1;
        return !0
      }
      get parser() {
        return this.p.parser
      }
      dialectEnabled(DD) {
        return this.p.parser.dialect.flags[DD]
      }
      shiftContext(DD, CD) {
        this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, DD, this, this.p.stream.reset(CD)))
      }
      reduceContext(DD, CD) {
        this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, DD, this, this.p.stream.reset(CD)))
      }
      emitContext() {
        let DD = this.buffer.length - 1;
        (DD < 0 || -3 != this.buffer[DD]) && this.buffer.push(this.curContext.hash, this.pos, this.pos, -3)
      }
      emitLookAhead() {
        let DD = this.buffer.length - 1;
        (DD < 0 || -4 != this.buffer[DD]) && this.buffer.push(this.lookAhead, this.pos, this.pos, -4)
      }
      updateContext(DD) {
        if (DD != this.curContext.context) {
          let CD = new iD(this.curContext.tracker, DD);
          CD.hash != this.curContext.hash && this.emitContext(), this.curContext = CD
        }
      }
      setLookAhead(DD) {
        return !(DD <= this.lookAhead) && (this.emitLookAhead(), this.lookAhead = DD, !0)
      }
      close() {
        this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead()
      }
    }
    class iD {
      constructor(DD, CD) {
        this.tracker = DD, this.context = CD, this.hash = DD.strict ? DD.hash(CD) : 0
      }
    }
    class fD {
      constructor(DD) {
        this.start = DD, this.state = DD.state, this.stack = DD.stack, this.base = this.stack.length
      }
      reduce(DD) {
        let CD = 65535 & DD,
          cD = DD >> 19;
        0 == cD ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= 3 * (cD - 1);
        let ID = this.start.p.parser.getGoto(this.stack[this.base - 3], CD, !0);
        this.state = ID
      }
    }
    class bD {
      constructor(DD, CD, cD) {
        this.stack = DD, this.pos = CD, this.index = cD, this.buffer = DD.buffer, 0 == this.index && this.maybeNext()
      }
      static create(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DD.bufferBase + DD.buffer.length;
        return new bD(DD, CD, CD - DD.bufferBase)
      }
      maybeNext() {
        let DD = this.stack.parent;
        null != DD && (this.index = this.stack.bufferBase - DD.bufferBase, this.stack = DD, this.buffer = DD.buffer)
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
        return new bD(this.stack, this.pos, this.index)
      }
    }

    function QD(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uint16Array;
      if ("string" != typeof DD) return DD;
      let cD = null;
      for (let ID = 0, pD = 0; ID < DD.length;) {
        let iD = 0;
        for (;;) {
          let CD = DD.charCodeAt(ID++),
            cD = !1;
          if (126 == CD) {
            iD = 65535;
            break
          }
          CD >= 92 && CD--, CD >= 34 && CD--;
          let pD = CD - 32;
          if (pD >= 46 && (pD -= 46, cD = !0), iD += pD, cD) break;
          iD *= 46
        }
        cD ? cD[pD++] = iD : cD = new CD(iD)
      }
      return cD
    }
    class wD {
      constructor() {
        this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0
      }
    }
    const SD = new wD;
    class BD {
      constructor(DD, CD) {
        this.input = DD, this.df = CD, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = SD, this.rangeIndex = 0, this.pos = this.chunkPos = CD[0].from, this.range = CD[0], this.end = CD[CD.length - 1].to, this.readNext()
      }
      resolveOffset(DD, CD) {
        let cD = this.range,
          ID = this.rangeIndex,
          pD = this.pos + DD;
        for (; pD < cD.from;) {
          if (!ID) return null;
          let DD = this.df[--ID];
          pD -= cD.from - DD.to, cD = DD
        }
        for (; CD < 0 ? pD > cD.to : pD >= cD.to;) {
          if (ID == this.df.length - 1) return null;
          let DD = this.df[++ID];
          pD += DD.from - cD.to, cD = DD
        }
        return pD
      }
      clipPos(DD) {
        if (DD >= this.range.from && DD < this.range.to) return DD;
        for (let CD of this.df)
          if (CD.to > DD) return Math.max(DD, CD.from);
        return this.end
      }
      peek(DD) {
        let CD, cD, ID = this.chunkOff + DD;
        if (ID >= 0 && ID < this.chunk.length) CD = this.pos + DD, cD = this.chunk.charCodeAt(ID);
        else {
          let ID = this.resolveOffset(DD, 1);
          if (null == ID) return -1;
          if (CD = ID, CD >= this.chunk2Pos && CD < this.chunk2Pos + this.chunk2.length) cD = this.chunk2.charCodeAt(CD - this.chunk2Pos);
          else {
            let DD = this.rangeIndex,
              ID = this.range;
            for (; ID.to <= CD;) ID = this.df[++DD];
            this.chunk2 = this.input.chunk(this.chunk2Pos = CD), CD + this.chunk2.length > ID.to && (this.chunk2 = this.chunk2.slice(0, ID.to - CD)), cD = this.chunk2.charCodeAt(0)
          }
        }
        return CD >= this.token.lookAhead && (this.token.lookAhead = CD + 1), cD
      }
      acceptToken(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cD = CD ? this.resolveOffset(CD, -1) : this.pos;
        if (null == cD || cD < this.token.start) throw new RangeError("Token end out of bounds");
        this.token.value = DD, this.token.end = cD
      }
      acceptTokenTo(DD, CD) {
        this.token.value = DD, this.token.end = CD
      }
      getChunk() {
        if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
          let {
            chunk: DD,
            chunkPos: CD
          } = this;
          this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = DD, this.chunk2Pos = CD, this.chunkOff = this.pos - this.chunkPos
        } else {
          this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
          let DD = this.input.chunk(this.pos),
            CD = this.pos + DD.length;
          this.chunk = CD > this.range.to ? DD.slice(0, this.range.to - this.pos) : DD, this.chunkPos = this.pos, this.chunkOff = 0
        }
      }
      readNext() {
        return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff)
      }
      advance() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        for (this.chunkOff += DD; this.pos + DD >= this.range.to;) {
          if (this.rangeIndex == this.df.length - 1) return this.setDone();
          DD -= this.range.to - this.pos, this.range = this.df[++this.rangeIndex], this.pos = this.range.from
        }
        return this.pos += DD, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext()
      }
      setDone() {
        return this.pos = this.chunkPos = this.end, this.range = this.df[this.rangeIndex = this.df.length - 1], this.chunk = "", this.next = -1
      }
      reset(DD, CD) {
        if (CD ? (this.token = CD, CD.start = DD, CD.lookAhead = DD + 1, CD.value = CD.extended = -1) : this.token = SD, this.pos != DD) {
          if (this.pos = DD, DD == this.end) return this.setDone(), this;
          for (; DD < this.range.from;) this.range = this.df[--this.rangeIndex];
          for (; DD >= this.range.to;) this.range = this.df[++this.rangeIndex];
          DD >= this.chunkPos && DD < this.chunkPos + this.chunk.length ? this.chunkOff = DD - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext()
        }
        return this
      }
      read(DD, CD) {
        if (DD >= this.chunkPos && CD <= this.chunkPos + this.chunk.length) return this.chunk.slice(DD - this.chunkPos, CD - this.chunkPos);
        if (DD >= this.chunk2Pos && CD <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(DD - this.chunk2Pos, CD - this.chunk2Pos);
        if (DD >= this.range.from && CD <= this.range.to) return this.input.read(DD, CD);
        let cD = "";
        for (let ID of this.df) {
          if (ID.from >= CD) break;
          ID.to > DD && (cD += this.input.read(Math.max(ID.from, DD), Math.min(ID.to, CD)))
        }
        return cD
      }
    }
    class yD {
      constructor(DD, CD) {
        this.data = DD, this.id = CD
      }
      token(DD, CD) {
        let {
          parser: cD
        } = CD.p;
        ZD(this.data, DD, CD, this.id, cD.data, cD.tokenPrecTable)
      }
    }
    yD.prototype.contextual = yD.prototype.fallback = yD.prototype.extend = !1;
    class MD {
      constructor(DD, CD, cD) {
        this.precTable = CD, this.elseToken = cD, this.data = "string" == typeof DD ? QD(DD) : DD
      }
      token(DD, CD) {
        let cD = DD.pos,
          ID = 0;
        for (;;) {
          let cD = DD.next < 0,
            pD = DD.resolveOffset(1, 1);
          if (ZD(this.data, DD, CD, 0, this.data, this.precTable), DD.token.value > -1) break;
          if (null == this.elseToken) return;
          if (cD || ID++, null == pD) break;
          DD.reset(pD, DD.token)
        }
        ID && (DD.reset(cD, DD.token), DD.acceptToken(this.elseToken, ID))
      }
    }
    MD.prototype.contextual = yD.prototype.fallback = yD.prototype.extend = !1;
    class tD {
      constructor(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.token = DD, this.contextual = !!CD.contextual, this.fallback = !!CD.fallback, this.extend = !!CD.extend
      }
    }

    function ZD(DD, CD, cD, ID, pD, iD) {
      let fD = 0,
        bD = 1 << ID,
        {
          dialect: QD
        } = cD.p.parser;
      DD: for (; 0 != (bD & DD[fD]);) {
        let cD = DD[fD + 1];
        for (let BD = fD + 3; BD < cD; BD += 2)
          if ((DD[BD + 1] & bD) > 0) {
            let cD = DD[BD];
            if (QD.allows(cD) && (-1 == CD.token.value || CD.token.value == cD || vD(cD, CD.token.value, pD, iD))) {
              CD.acceptToken(cD);
              break
            }
          } let ID = CD.next,
          wD = 0,
          SD = DD[fD + 2];
        if (!(CD.next < 0 && SD > wD && 65535 == DD[cD + 3 * SD - 3])) {
          for (; wD < SD;) {
            let pD = wD + SD >> 1,
              iD = cD + pD + (pD << 1),
              bD = DD[iD],
              QD = DD[iD + 1] || 65536;
            if (ID < bD) SD = pD;
            else {
              if (!(ID >= QD)) {
                fD = DD[iD + 2], CD.advance();
                continue DD
              }
              wD = pD + 1
            }
          }
          break
        }
        fD = DD[cD + 3 * SD - 1]
      }
    }

    function oD(DD, CD, cD) {
      for (let ID, pD = CD; 65535 != (ID = DD[pD]); pD++)
        if (ID == cD) return pD - CD;
      return -1
    }

    function vD(DD, CD, cD, ID) {
      let pD = oD(cD, ID, CD);
      return pD < 0 || oD(cD, ID, DD) < pD
    }
    const ND = "undefined" != typeof process && {
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
    let gD = null;

    function XD(DD, CD, cD) {
      let pD = DD.cursor(ID.f.IncludeAnonymous);
      for (pD.moveTo(CD);;)
        if (!(cD < 0 ? pD.childBefore(CD) : pD.childAfter(CD)))
          for (;;) {
            if ((cD < 0 ? pD.to < CD : pD.from > CD) && !pD.type.isError) return cD < 0 ? Math.max(0, Math.min(pD.to - 1, CD - 25)) : Math.min(DD.length, Math.max(pD.from + 1, CD + 25));
            if (cD < 0 ? pD.prevSibling() : pD.nextSibling()) break;
            if (!pD.parent()) return cD < 0 ? 0 : DD.length
          }
    }
    class mD {
      constructor(DD, CD) {
        this.fragments = DD, this.nodeSet = CD, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment()
      }
      nextFragment() {
        let DD = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
        if (DD) {
          for (this.safeFrom = DD.openStart ? XD(DD.tree, DD.from + DD.offset, 1) - DD.offset : DD.from, this.safeTo = DD.openEnd ? XD(DD.tree, DD.to + DD.offset, -1) - DD.offset : DD.to; this.trees.length;) this.trees.pop(), this.start.pop(), this.index.pop();
          this.trees.push(DD.tree), this.start.push(-DD.offset), this.index.push(0), this.nextStart = this.safeFrom
        } else this.nextStart = 1e9
      }
      nodeAt(DD) {
        if (DD < this.nextStart) return null;
        for (; this.fragment && this.safeTo <= DD;) this.nextFragment();
        if (!this.fragment) return null;
        for (;;) {
          let CD = this.trees.length - 1;
          if (CD < 0) return this.nextFragment(), null;
          let cD = this.trees[CD],
            pD = this.index[CD];
          if (pD == cD.children.length) {
            this.trees.pop(), this.start.pop(), this.index.pop();
            continue
          }
          let iD = cD.children[pD],
            fD = this.start[CD] + cD.positions[pD];
          if (fD > DD) return this.nextStart = fD, null;
          if (iD instanceof ID.x) {
            if (fD == DD) {
              if (fD < this.safeFrom) return null;
              let DD = fD + iD.length;
              if (DD <= this.safeTo) {
                let CD = iD.prop(ID.g.lookAhead);
                if (!CD || DD + CD < this.fragment.to) return iD
              }
            }
            this.index[CD]++, fD + iD.length >= Math.max(this.safeFrom, DD) && (this.trees.push(iD), this.start.push(fD), this.index.push(0))
          } else this.index[CD]++, this.nextStart = fD + iD.length
        }
      }
    }
    class nD {
      constructor(DD, CD) {
        this.stream = CD, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = DD.tokenizers.map((DD => new wD))
      }
      getActions(DD) {
        let CD = 0,
          cD = null,
          {
            parser: ID
          } = DD.p,
          {
            tokenizers: pD
          } = ID,
          iD = ID.stateSlot(DD.state, 3),
          fD = DD.curContext ? DD.curContext.hash : 0,
          bD = 0;
        for (let QD = 0; QD < pD.length; QD++) {
          if (0 == (1 << QD & iD)) continue;
          let ID = pD[QD],
            wD = this.tokens[QD];
          if ((!cD || ID.fallback) && ((ID.contextual || wD.start != DD.pos || wD.mask != iD || wD.context != fD) && (this.updateCachedToken(wD, ID, DD), wD.mask = iD, wD.context = fD), wD.lookAhead > wD.end + 25 && (bD = Math.max(wD.lookAhead, bD)), 0 != wD.value)) {
            let pD = CD;
            if (wD.extended > -1 && (CD = this.addActions(DD, wD.extended, wD.end, CD)), CD = this.addActions(DD, wD.value, wD.end, CD), !ID.extend && (cD = wD, CD > pD)) break
          }
        }
        for (; this.actions.length > CD;) this.actions.pop();
        return bD && DD.setLookAhead(bD), cD || DD.pos != this.stream.end || (cD = new wD, cD.value = DD.p.parser.eofTerm, cD.start = cD.end = DD.pos, CD = this.addActions(DD, cD.value, cD.end, CD)), this.mainToken = cD, this.actions
      }
      getMainToken(DD) {
        if (this.mainToken) return this.mainToken;
        let CD = new wD,
          {
            pos: cD,
            p: ID
          } = DD;
        return CD.start = cD, CD.end = Math.min(cD + 1, ID.stream.end), CD.value = cD == ID.stream.end ? ID.parser.eofTerm : 0, CD
      }
      updateCachedToken(DD, CD, cD) {
        let ID = this.stream.clipPos(cD.pos);
        if (CD.token(this.stream.reset(ID, DD), cD), DD.value > -1) {
          let {
            parser: CD
          } = cD.p;
          for (let ID = 0; ID < CD.specialized.length; ID++)
            if (CD.specialized[ID] == DD.value) {
              let pD = CD.specializers[ID](this.stream.read(DD.start, DD.end), cD);
              if (pD >= 0 && cD.p.parser.dialect.allows(pD >> 1)) {
                0 == (1 & pD) ? DD.value = pD >> 1 : DD.extended = pD >> 1;
                break
              }
            }
        } else DD.value = 0, DD.end = this.stream.clipPos(ID + 1)
      }
      putAction(DD, CD, cD, ID) {
        for (let pD = 0; pD < ID; pD += 3)
          if (this.actions[pD] == DD) return ID;
        return this.actions[ID++] = DD, this.actions[ID++] = CD, this.actions[ID++] = cD, ID
      }
      addActions(DD, CD, cD, ID) {
        let {
          state: pD
        } = DD, {
          parser: iD
        } = DD.p, {
          data: fD
        } = iD;
        for (let bD = 0; bD < 2; bD++)
          for (let DD = iD.stateSlot(pD, bD ? 2 : 1);; DD += 3) {
            if (65535 == fD[DD]) {
              if (1 != fD[DD + 1]) {
                0 == ID && 2 == fD[DD + 1] && (ID = this.putAction(qD(fD, DD + 2), CD, cD, ID));
                break
              }
              DD = qD(fD, DD + 2)
            }
            fD[DD] == CD && (ID = this.putAction(qD(fD, DD + 1), CD, cD, ID))
          }
        return ID
      }
    }
    class OD {
      constructor(DD, CD, cD, ID) {
        this.parser = DD, this.input = CD, this.df = ID, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new BD(CD, ID), this.tokens = new nD(DD, this.stream), this.topTerm = DD.top[1];
        let {
          from: iD
        } = ID[0];
        this.stacks = [pD.start(this, DD.top[0], iD)], this.fragments = cD.length && this.stream.end - iD > 4 * DD.bufferLength ? new mD(cD, DD.nodeSet) : null
      }
      get parsedPos() {
        return this.minStackPos
      }
      advance() {
        let DD, CD, cD = this.stacks,
          ID = this.minStackPos,
          pD = this.stacks = [];
        if (this.bigReductionCount > 300 && 1 == cD.length) {
          let [DD] = cD;
          for (; DD.forceReduce() && DD.stack.length && DD.stack[DD.stack.length - 2] >= this.lastBigReductionStart;);
          this.bigReductionCount = this.lastBigReductionSize = 0
        }
        for (let iD = 0; iD < cD.length; iD++) {
          let fD = cD[iD];
          for (;;) {
            if (this.tokens.mainToken = null, fD.pos > ID) pD.push(fD);
            else {
              if (this.advanceStack(fD, pD, cD)) continue;
              {
                DD || (DD = [], CD = []), DD.push(fD);
                let cD = this.tokens.getMainToken(fD);
                CD.push(cD.value, cD.end)
              }
            }
            break
          }
        }
        if (!pD.length) {
          let CD = DD && function(DD) {
            let CD = null;
            for (let cD of DD) {
              let DD = cD.p.stoppedAt;
              (cD.pos == cD.p.stream.end || null != DD && cD.pos > DD) && cD.p.parser.stateFlag(cD.state, 2) && (!CD || CD.score < cD.score) && (CD = cD)
            }
            return CD
          }(DD);
          if (CD) return ND && console.log("Finish with " + this.stackID(CD)), this.stackToTree(CD);
          if (this.parser.strict) throw ND && DD && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + ID);
          this.recovering || (this.recovering = 5)
        }
        if (this.recovering && DD) {
          let cD = null != this.stoppedAt && DD[0].pos > this.stoppedAt ? DD[0] : this.runRecovery(DD, CD, pD);
          if (cD) return ND && console.log("Force-finish " + this.stackID(cD)), this.stackToTree(cD.forceAll())
        }
        if (this.recovering) {
          let DD = 1 == this.recovering ? 1 : 3 * this.recovering;
          if (pD.length > DD)
            for (pD.sort(((DD, CD) => CD.score - DD.score)); pD.length > DD;) pD.pop();
          pD.some((DD => DD.reducePos > ID)) && this.recovering--
        } else if (pD.length > 1) {
          DD: for (let DD = 0; DD < pD.length - 1; DD++) {
            let CD = pD[DD];
            for (let cD = DD + 1; cD < pD.length; cD++) {
              let ID = pD[cD];
              if (CD.sameState(ID) || CD.buffer.length > 500 && ID.buffer.length > 500) {
                if (!((CD.score - ID.score || CD.buffer.length - ID.buffer.length) > 0)) {
                  pD.splice(DD--, 1);
                  continue DD
                }
                pD.splice(cD--, 1)
              }
            }
          }
          pD.length > 12 && (pD.sort(((DD, CD) => CD.score - DD.score)), pD.splice(12, pD.length - 12))
        }
        this.minStackPos = pD[0].pos;
        for (let iD = 1; iD < pD.length; iD++) pD[iD].pos < this.minStackPos && (this.minStackPos = pD[iD].pos);
        return null
      }
      stopAt(DD) {
        if (null != this.stoppedAt && this.stoppedAt < DD) throw new RangeError("Can't move stoppedAt forward");
        this.stoppedAt = DD
      }
      advanceStack(DD, CD, cD) {
        let pD = DD.pos,
          {
            parser: iD
          } = this,
          fD = ND ? this.stackID(DD) + " -> " : "";
        if (null != this.stoppedAt && pD > this.stoppedAt) return DD.forceReduce() ? DD : null;
        if (this.fragments) {
          let CD = DD.curContext && DD.curContext.tracker.strict,
            cD = CD ? DD.curContext.hash : 0;
          for (let bD = this.fragments.nodeAt(pD); bD;) {
            let pD = this.parser.nodeSet.types[bD.type.id] == bD.type ? iD.getGoto(DD.state, bD.type.id) : -1;
            if (pD > -1 && bD.length && (!CD || (bD.prop(ID.g.contextHash) || 0) == cD)) return DD.useNode(bD, pD), ND && console.log(fD + this.stackID(DD) + ` (via reuse of ${iD.getName(bD.type.id)})`), !0;
            if (!(bD instanceof ID.x) || 0 == bD.children.length || bD.positions[0] > 0) break;
            let QD = bD.children[0];
            if (!(QD instanceof ID.x && 0 == bD.positions[0])) break;
            bD = QD
          }
        }
        let bD = iD.stateSlot(DD.state, 4);
        if (bD > 0) return DD.reduce(bD), ND && console.log(fD + this.stackID(DD) + ` (via always-reduce ${iD.getName(65535&bD)})`), !0;
        if (DD.stack.length >= 8400)
          for (; DD.stack.length > 6e3 && DD.forceReduce(););
        let QD = this.tokens.getActions(DD);
        for (let ID = 0; ID < QD.length;) {
          let bD = QD[ID++],
            wD = QD[ID++],
            SD = QD[ID++],
            BD = ID == QD.length || !cD,
            yD = BD ? DD : DD.split(),
            MD = this.tokens.mainToken;
          if (yD.apply(bD, wD, MD ? MD.start : yD.pos, SD), ND && console.log(fD + this.stackID(yD) + ` (via ${0==(65536&bD)?"shift":`reduce of ${iD.getName(65535&bD)}`} for ${iD.getName(wD)} @ ${pD}${yD==DD?"":", split"})`), BD) return !0;
          yD.pos > pD ? CD.push(yD) : cD.push(yD)
        }
        return !1
      }
      advanceFully(DD, CD) {
        let cD = DD.pos;
        for (;;) {
          if (!this.advanceStack(DD, null, null)) return !1;
          if (DD.pos > cD) return PD(DD, CD), !0
        }
      }
      runRecovery(DD, CD, cD) {
        let ID = null,
          pD = !1;
        for (let iD = 0; iD < DD.length; iD++) {
          let fD = DD[iD],
            bD = CD[iD << 1],
            QD = CD[1 + (iD << 1)],
            wD = ND ? this.stackID(fD) + " -> " : "";
          if (fD.deadEnd) {
            if (pD) continue;
            if (pD = !0, fD.restart(), ND && console.log(wD + this.stackID(fD) + " (restarted)"), this.advanceFully(fD, cD)) continue
          }
          let SD = fD.split(),
            BD = wD;
          for (let DD = 0; DD < 10 && SD.forceReduce(); DD++) {
            if (ND && console.log(BD + this.stackID(SD) + " (via force-reduce)"), this.advanceFully(SD, cD)) break;
            ND && (BD = this.stackID(SD) + " -> ")
          }
          for (let DD of fD.recoverByInsert(bD)) ND && console.log(wD + this.stackID(DD) + " (via recover-insert)"), this.advanceFully(DD, cD);
          this.stream.end > fD.pos ? (QD == fD.pos && (QD++, bD = 0), fD.recoverByDelete(bD, QD), ND && console.log(wD + this.stackID(fD) + ` (via recover-delete ${this.parser.getName(bD)})`), PD(fD, cD)) : (!ID || ID.score < SD.score) && (ID = SD)
        }
        return ID
      }
      stackToTree(DD) {
        return DD.close(), ID.x.build({
          buffer: bD.create(DD),
          nodeSet: this.parser.nodeSet,
          topID: this.topTerm,
          maxBufferLength: this.parser.bufferLength,
          reused: this.reused,
          start: this.df[0].from,
          length: DD.pos - this.df[0].from,
          minRepeatType: this.parser.minRepeatTerm
        })
      }
      stackID(DD) {
        let CD = (gD || (gD = new WeakMap)).get(DD);
        return CD || gD.set(DD, CD = String.fromCodePoint(this.nextStackID++)), CD + DD
      }
    }

    function PD(DD, CD) {
      for (let cD = 0; cD < CD.length; cD++) {
        let ID = CD[cD];
        if (ID.pos == DD.pos && ID.sameState(DD)) return void(CD[cD].score < DD.score && (CD[cD] = DD))
      }
      CD.push(DD)
    }
    class HD {
      constructor(DD, CD, cD) {
        this.source = DD, this.flags = CD, this.disabled = cD
      }
      allows(DD) {
        return !this.disabled || 0 == this.disabled[DD]
      }
    }
    const UD = DD => DD;
    class xD extends ID.s {
      constructor(DD) {
        if (super(), this.wrappers = [], 14 != DD.version) throw new RangeError(`Parser version (${DD.version}) doesn't match runtime version (14)`);
        let CD = DD.nodeNames.split(" ");
        this.minRepeatTerm = CD.length;
        for (let ID = 0; ID < DD.repeatNodeCount; ID++) CD.push("");
        let cD = Object.keys(DD.topRules).map((CD => DD.topRules[CD][1])),
          pD = [];
        for (let ID = 0; ID < CD.length; ID++) pD.push([]);

        function iD(DD, CD, cD) {
          pD[DD].push([CD, CD.deserialize(String(cD))])
        }
        if (DD.nodeProps)
          for (let bD of DD.nodeProps) {
            let DD = bD[0];
            "string" == typeof DD && (DD = ID.g[DD]);
            for (let CD = 1; CD < bD.length;) {
              let cD = bD[CD++];
              if (cD >= 0) iD(cD, DD, bD[CD++]);
              else {
                let ID = bD[CD + -cD];
                for (let pD = -cD; pD > 0; pD--) iD(bD[CD++], DD, ID);
                CD++
              }
            }
          }
        this.nodeSet = new ID.j(CD.map(((CD, iD) => ID.m.define({
          name: iD >= this.minRepeatTerm ? void 0 : CD,
          id: iD,
          props: pD[iD],
          top: cD.indexOf(iD) > -1,
          error: 0 == iD,
          skipped: DD.skippedNodes && DD.skippedNodes.indexOf(iD) > -1
        })))), DD.propSources && (this.nodeSet = this.nodeSet.extend(...DD.propSources)), this.strict = !1, this.bufferLength = ID.e;
        let fD = QD(DD.tokenData);
        this.context = DD.context, this.specializerSpecs = DD.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
        for (let ID = 0; ID < this.specializerSpecs.length; ID++) this.specialized[ID] = this.specializerSpecs[ID].term;
        this.specializers = this.specializerSpecs.map(JD), this.states = QD(DD.states, Uint32Array), this.data = QD(DD.stateData), this.goto = QD(DD.goto), this.maxTerm = DD.maxTerm, this.tokenizers = DD.tokenizers.map((DD => "number" == typeof DD ? new yD(fD, DD) : DD)), this.topRules = DD.topRules, this.dialects = DD.dialects || {}, this.dynamicPrecedences = DD.dynamicPrecedences || null, this.tokenPrecTable = DD.tokenPrec, this.termNames = DD.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]]
      }
      createParse(DD, CD, cD) {
        let ID = new OD(this, DD, CD, cD);
        for (let pD of this.wrappers) ID = pD(ID, DD, CD, cD);
        return ID
      }
      getGoto(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          ID = this.goto;
        if (CD >= ID[0]) return -1;
        for (let pD = ID[CD + 1];;) {
          let CD = ID[pD++],
            iD = 1 & CD,
            fD = ID[pD++];
          if (iD && cD) return fD;
          for (let cD = pD + (CD >> 1); pD < cD; pD++)
            if (ID[pD] == DD) return fD;
          if (iD) return -1
        }
      }
      hasAction(DD, CD) {
        let cD = this.data;
        for (let ID = 0; ID < 2; ID++)
          for (let pD, iD = this.stateSlot(DD, ID ? 2 : 1);; iD += 3) {
            if (65535 == (pD = cD[iD])) {
              if (1 != cD[iD + 1]) {
                if (2 == cD[iD + 1]) return qD(cD, iD + 2);
                break
              }
              pD = cD[iD = qD(cD, iD + 2)]
            }
            if (pD == CD || 0 == pD) return qD(cD, iD + 1)
          }
        return 0
      }
      stateSlot(DD, CD) {
        return this.states[6 * DD + CD]
      }
      stateFlag(DD, CD) {
        return (this.stateSlot(DD, 0) & CD) > 0
      }
      validAction(DD, CD) {
        return !!this.allActions(DD, (DD => DD == CD || null))
      }
      allActions(DD, CD) {
        let cD = this.stateSlot(DD, 4),
          ID = cD ? CD(cD) : void 0;
        for (let pD = this.stateSlot(DD, 1); null == ID; pD += 3) {
          if (65535 == this.data[pD]) {
            if (1 != this.data[pD + 1]) break;
            pD = qD(this.data, pD + 2)
          }
          ID = CD(qD(this.data, pD + 1))
        }
        return ID
      }
      nextStates(DD) {
        let CD = [];
        for (let cD = this.stateSlot(DD, 1);; cD += 3) {
          if (65535 == this.data[cD]) {
            if (1 != this.data[cD + 1]) break;
            cD = qD(this.data, cD + 2)
          }
          if (0 == (1 & this.data[cD + 2])) {
            let DD = this.data[cD + 1];
            CD.some(((CD, cD) => 1 & cD && CD == DD)) || CD.push(this.data[cD], DD)
          }
        }
        return CD
      }
      configure(DD) {
        let CD = Object.assign(Object.create(xD.prototype), this);
        if (DD.props && (CD.nodeSet = this.nodeSet.extend(...DD.props)), DD.top) {
          let cD = this.topRules[DD.top];
          if (!cD) throw new RangeError(`Invalid top rule name ${DD.top}`);
          CD.top = cD
        }
        return DD.tokenizers && (CD.tokenizers = this.tokenizers.map((CD => {
          let cD = DD.tokenizers.find((DD => DD.from == CD));
          return cD ? cD.to : CD
        }))), DD.specializers && (CD.specializers = this.specializers.slice(), CD.specializerSpecs = this.specializerSpecs.map(((cD, ID) => {
          let pD = DD.specializers.find((DD => DD.from == cD.external));
          if (!pD) return cD;
          let iD = Object.assign(Object.assign({}, cD), {
            external: pD.to
          });
          return CD.specializers[ID] = JD(iD), iD
        }))), DD.contextTracker && (CD.context = DD.contextTracker), DD.dialect && (CD.dialect = this.parseDialect(DD.dialect)), null != DD.strict && (CD.strict = DD.strict), DD.wrap && (CD.wrappers = CD.wrappers.concat(DD.wrap)), null != DD.bufferLength && (CD.bufferLength = DD.bufferLength), CD
      }
      hasWrappers() {
        return this.wrappers.length > 0
      }
      getName(DD) {
        return this.termNames ? this.termNames[DD] : String(DD <= this.maxNode && this.nodeSet.types[DD].name || DD)
      }
      get eofTerm() {
        return this.maxNode + 1
      }
      get topNode() {
        return this.nodeSet.types[this.top[1]]
      }
      dynamicPrecedence(DD) {
        let CD = this.dynamicPrecedences;
        return null == CD ? 0 : CD[DD] || 0
      }
      parseDialect(DD) {
        let CD = Object.keys(this.dialects),
          cD = CD.map((() => !1));
        if (DD)
          for (let pD of DD.split(" ")) {
            let DD = CD.indexOf(pD);
            DD >= 0 && (cD[DD] = !0)
          }
        let ID = null;
        for (let pD = 0; pD < CD.length; pD++)
          if (!cD[pD])
            for (let DD, cD = this.dialects[CD[pD]]; 65535 != (DD = this.data[cD++]);)(ID || (ID = new Uint8Array(this.maxTerm + 1)))[DD] = 1;
        return new HD(DD, cD, ID)
      }
      static deserialize(DD) {
        return new xD(DD)
      }
    }

    function qD(DD, CD) {
      return DD[CD] | DD[CD + 1] << 16
    }

    function JD(DD) {
      if (DD.external) {
        let CD = DD.extend ? 1 : 0;
        return (cD, ID) => DD.external(cD, ID) << 1 | CD
      }
      return DD.get
    }
    var KD = cD(40406);
    const aD = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288],
      VD = new class {
        constructor(DD) {
          this.start = DD.start, this.shift = DD.shift || UD, this.reduce = DD.reduce || UD, this.reuse = DD.reuse || UD, this.hash = DD.hash || (() => 0), this.strict = !1 !== DD.strict
        }
      }({
        start: !1,
        shift: (DD, CD) => 5 == CD || 6 == CD || 320 == CD ? DD : 321 == CD,
        strict: !1
      }),
      zD = new tD(((DD, CD) => {
        let {
          next: cD
        } = DD;
        (125 == cD || -1 == cD || CD.context) && DD.acceptToken(318)
      }), {
        contextual: !0,
        fallback: !0
      }),
      jD = new tD(((DD, CD) => {
        let cD, {
          next: ID
        } = DD;
        aD.indexOf(ID) > -1 || (47 != ID || 47 != (cD = DD.peek(1)) && 42 != cD) && (125 == ID || 59 == ID || -1 == ID || CD.context || DD.acceptToken(316))
      }), {
        contextual: !0
      }),
      lD = new tD(((DD, CD) => {
        91 != DD.next || CD.context || DD.acceptToken(317)
      }), {
        contextual: !0
      }),
      LD = new tD(((DD, CD) => {
        let {
          next: cD
        } = DD;
        if (43 == cD || 45 == cD) {
          if (DD.advance(), cD == DD.next) {
            DD.advance();
            let cD = !CD.context && CD.canShift(1);
            DD.acceptToken(cD ? 1 : 2)
          }
        } else 63 == cD && 46 == DD.peek(1) && (DD.advance(), DD.advance(), (DD.next < 48 || DD.next > 57) && DD.acceptToken(3))
      }), {
        contextual: !0
      });

    function TD(DD, CD) {
      return DD >= 65 && DD <= 90 || DD >= 97 && DD <= 122 || 95 == DD || DD >= 192 || !CD && DD >= 48 && DD <= 57
    }
    const GD = new tD(((DD, CD) => {
        if (60 != DD.next || !CD.dialectEnabled(0)) return;
        if (DD.advance(), 47 == DD.next) return;
        let cD = 0;
        for (; aD.indexOf(DD.next) > -1;) DD.advance(), cD++;
        if (TD(DD.next, !0)) {
          for (DD.advance(), cD++; TD(DD.next, !1);) DD.advance(), cD++;
          for (; aD.indexOf(DD.next) > -1;) DD.advance(), cD++;
          if (44 == DD.next) return;
          for (let CD = 0;; CD++) {
            if (7 == CD) {
              if (!TD(DD.next, !0)) return;
              break
            }
            if (DD.next != "extends".charCodeAt(CD)) break;
            DD.advance(), cD++
          }
        }
        DD.acceptToken(4, -cD)
      })),
      RD = (0, KD.f)({
        "get set async static": KD.m.modifier,
        "for while do if else switch try catch finally return throw break continue default case defer": KD.m.controlKeyword,
        "in of await yield void typeof delete instanceof as satisfies": KD.m.operatorKeyword,
        "let var const using function class extends": KD.m.definitionKeyword,
        "import export from": KD.m.moduleKeyword,
        "with debugger new": KD.m.keyword,
        TemplateString: KD.m.special(KD.m.string),
        super: KD.m.atom,
        BooleanLiteral: KD.m.bool,
        this: KD.m.self,
        null: KD.m.null,
        Star: KD.m.modifier,
        VariableName: KD.m.variableName,
        "CallExpression/VariableName TaggedTemplateExpression/VariableName": KD.m.function(KD.m.variableName),
        VariableDefinition: KD.m.definition(KD.m.variableName),
        Label: KD.m.labelName,
        PropertyName: KD.m.propertyName,
        PrivatePropertyName: KD.m.special(KD.m.propertyName),
        "CallExpression/MemberExpression/PropertyName": KD.m.function(KD.m.propertyName),
        "FunctionDeclaration/VariableDefinition": KD.m.function(KD.m.definition(KD.m.variableName)),
        "ClassDeclaration/VariableDefinition": KD.m.definition(KD.m.className),
        "NewExpression/VariableName": KD.m.className,
        PropertyDefinition: KD.m.definition(KD.m.propertyName),
        PrivatePropertyDefinition: KD.m.definition(KD.m.special(KD.m.propertyName)),
        UpdateOp: KD.m.updateOperator,
        "LineComment Hashbang": KD.m.lineComment,
        BlockComment: KD.m.blockComment,
        Number: KD.m.number,
        String: KD.m.string,
        Escape: KD.m.escape,
        ArithOp: KD.m.arithmeticOperator,
        LogicOp: KD.m.logicOperator,
        BitOp: KD.m.bitwiseOperator,
        CompareOp: KD.m.compareOperator,
        RegExp: KD.m.regexp,
        Equals: KD.m.definitionOperator,
        Arrow: KD.m.function(KD.m.punctuation),
        ": Spread": KD.m.punctuation,
        "( )": KD.m.paren,
        "[ ]": KD.m.squareBracket,
        "{ }": KD.m.brace,
        "InterpolationStart InterpolationEnd": KD.m.special(KD.m.brace),
        ".": KD.m.derefOperator,
        ", ;": KD.m.separator,
        "@": KD.m.meta,
        TypeName: KD.m.typeName,
        TypeDefinition: KD.m.definition(KD.m.typeName),
        "type enum interface implements namespace module declare": KD.m.definitionKeyword,
        "abstract global Privacy readonly override": KD.m.modifier,
        "is keyof unique infer asserts": KD.m.operatorKeyword,
        JSXAttributeValue: KD.m.attributeValue,
        JSXText: KD.m.content,
        "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": KD.m.angleBracket,
        "JSXIdentifier JSXNameSpacedName": KD.m.tagName,
        "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": KD.m.attributeName,
        "JSXBuiltin/JSXIdentifier": KD.m.standard(KD.m.tagName)
      }),
      kD = {
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
      dD = {
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
      YD = {
        __proto__: null,
        "<": 193
      },
      WD = xD.deserialize({
        version: 14,
        states: "$F|Q%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Il'#IlO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JrO6[Q!0MxO'#JsO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO9XQMhO'#F|O9`Q`O'#F{OOQ!0Lf'#Js'#JsOOQ!0Lb'#Jr'#JrO9eQ`O'#GwOOQ['#K_'#K_O9pQ`O'#IYO9uQ!0LrO'#IZOOQ['#J`'#J`OOQ['#I_'#I_Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GsO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EyO;hQMhO'#FeO;xQ`O'#GsOOQO'#K`'#K`O;}Q`O'#K`O<]Q`O'#G{O<]Q`O'#G|O<]Q`O'#HOO9kQ`O'#HRO=SQ`O'#HUO>kQ`O'#CeO>{Q`O'#HcO?TQ`O'#HiO?TQ`O'#HkO`QlO'#HmO?TQ`O'#HoO?TQ`O'#HrO?YQ`O'#HxO?_Q!0LsO'#IOO%[QlO'#IQO?jQ!0LsO'#ISO?uQ!0LsO'#IUO9uQ!0LrO'#IWO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jv'#JvO%[QlO'#JvOOQO'#Jy'#JyOOQO'#Ih'#IhOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J}'#J}OC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jx'#JxODlQpO'#JyOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CD})CD}OOOO'#I`'#I`OFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ia'#IaOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Ic'#IcOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IdOGyQ`O'#JtOIxQ!fO'#JtO+}QlO'#JtOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KTOKPQ`O'#KSOKPQ`O'#KSOKXQ`O,5;^OK^Q`O'#KROOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KQONtQ`O'#KPO9eQ`O'#KPO! YQ`O'#KPO! bQ`O,5;]O! gQ`O'#KPO!#lQ!fO'#JsOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#Jz'#JzOOQO-E<j-E<jO9kQ`O,5=_O!$rQ`O,5=_O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;dO!(|QpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)[QlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IpO!+_Q!0LrO,5<iO%[QlO,5;eO!&zQMhO,5;eO!+|QMhO,5;eO!-nQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-uQ,UO'#FjO!.rQ,UO'#KXO!.^Q,UO'#KXO!.yQ,UO'#KXOOQO'#KX'#KXO!/_Q,UO,5<SOOOW,5<`,5<`O!/pQlO'#FvOOOW'#Io'#IoO7VO7dO,5<QO!/wQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<eO!1pQ`O,5<hO!3YQ(CWO'#GXO!3jQ`O'#GYO!3oQ`O'#GYO!5_Q(CWO'#G^O!6dQpO'#GbOOQO'#Gn'#GnO!,TQMhO'#GmOOQO'#Gp'#GpO!,TQMhO'#GoO!7VQ$IUO'#JlOOQ!0Lh'#Jl'#JlO!7aQ`O'#JkO!7oQ`O'#JjO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<eO1SQ`O'#DZO!,TQMhO'#GPO!,TQMhO'#GRO!8gQ`O'#GTO!8lQ`O'#GUO!3oQ`O'#G[O!,TQMhO'#GaO<]Q`O'#JkO!8qQ`O'#EqO!9`Q`O,5<gOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KR'#KRO!:iQ!0LrO'#KaO9uQ!0LrO,5=cO`QlO,5>tOOQ['#Jh'#JhOOQ[,5>u,5>uOOQ[-E<]-E<]O!<hQ!0MxO,5:bO!:]QpO,5:`O!?RQ!0MxO,5:jO%[QlO,5:jO!AiQ!0MxO,5:lOOQO,5@z,5@zO!BYQMhO,5=_O!BhQ!0LrO'#JiO9`Q`O'#JiO!ByQ!0LrO,59ZO!CUQpO,59ZO!C^QMhO,59ZO:dQMhO,59ZO!CiQ`O,5;ZO!CqQ`O'#HbO!DVQ`O'#KdO%[QlO,5;}O!:]QpO,5<PO!D_Q`O,5=zO!DdQ`O,5=zO!DiQ`O,5=zO!DwQ`O,5=zO9uQ!0LrO,5=zO<]Q`O,5=jOOQO'#Cy'#CyO!EOQpO,5=gO!EWQMhO,5=hO!EcQ`O,5=jO!EhQ!bO,5=mO!EpQ`O'#K`O?YQ`O'#HWO9kQ`O'#HYO!EuQ`O'#HYO:dQMhO'#H[O!EzQ`O'#H[OOQ[,5=p,5=pO!FPQ`O'#H]O!FbQ`O'#CoO!FgQ`O,59PO!FqQ`O,59PO!HvQlO,59POOQ[,59P,59PO!IWQ!0LrO,59PO%[QlO,59PO!KcQlO'#HeOOQ['#Hf'#HfOOQ['#Hg'#HgO`QlO,5=}O!KyQ`O,5=}O`QlO,5>TO`QlO,5>VO!LOQ`O,5>XO`QlO,5>ZO!LTQ`O,5>^O!LYQlO,5>dOOQ[,5>j,5>jO%[QlO,5>jO9uQ!0LrO,5>lOOQ[,5>n,5>nO#!dQ`O,5>nOOQ[,5>p,5>pO#!dQ`O,5>pOOQ[,5>r,5>rO##QQpO'#D_O%[QlO'#JvO##sQpO'#JvO##}QpO'#DmO#$`QpO'#DmO#&qQlO'#DmO#&xQ`O'#JuO#'QQ`O,5:WO#'VQ`O'#EtO#'eQ`O'#KUO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CUQpO,5;YO!C^QMhO,5;YO:dQMhO,5;YO#(`Q`O,5@bO#(eQ07dO,5:sOOQO-E<f-E<fO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!ByQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CUQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I^'#I^P#+RO&2DjO,58|POOO,58|,58|OOOO-E<^-E<^OOQ!0Lh1G.p1G.pOOOO-E<_-E<_OOOO,59},59}O#+^Q!bO,59}OOOO-E<a-E<aOOQ!0Lf1G/g1G/gO#+cQ!fO,5?OO+}QlO,5?OOOQO,5?U,5?UO#+mQlO'#IdOOQO-E<b-E<bO#+zQ`O,5@`O#,SQ!fO,5@`O#,ZQ`O,5@nOOQ!0Lf1G/m1G/mO%[QlO,5@oO#,cQ`O'#IjOOQO-E<h-E<hO#,ZQ`O,5@nOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@lO#,wQ!0LrO,5@lO#-YQ!0LrO,5@lO#-aQ`O,5@kO9eQ`O,5@kO#-iQ`O,5@kO#-wQ`O'#ImO#-aQ`O,5@kOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2yO9kQ`O1G2yOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0rQ!0MzO'#JlO!$wQlO1G0uO#2}Q!fO'#JwO%[QlO'#JwO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#3^Q`O1G1OO#5rQ!0MxO1G1PO#5yQ!0MxO1G1PO#8aQ!0MxO1G1PO#8hQ!0MxO1G1PO#;OQ!0MxO1G1PO#=fQ!0MxO1G1PO#=mQ!0MxO1G1PO#=tQ!0MxO1G1PO#@[Q!0MxO1G1PO#@cQ!0MxO1G1PO#BpQ?MtO'#CiO#DkQ?MtO1G1`O#DrQ?MtO'#JsO#EVQ!0MxO,5?[OOQ!0Lb-E<n-E<nO#GdQ!0MxO1G1PO#HaQ!0MzO1G1POOQ!0Lf1G1P1G1PO#IdQMjO'#J|O#InQ`O,5:xO#IsQ!0MxO1G1cO#JgQ,UO,5<WO#JoQ,UO,5<XO#JwQ,UO'#FoO#K`Q`O'#FnOOQO'#KY'#KYOOQO'#In'#InO#KeQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#KvQ?MtO'#JrO#LQQ`O,5<bO!)[QlO,5<bOOOW-E<m-E<mOOQ!0Lf1G1l1G1lO#LVQpO'#KXOOQ!0Lf,5<d,5<dO#L_QpO,5<dO#LdQMhO'#DTOOOO'#Ib'#IbO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8lQ`O'#IrO#LvQ`O,5<zOOQ!0Lh,5<w,5<wO!,TQMhO'#IuO#MdQMjO,5=XO!,TQMhO'#IwO#NVQMjO,5=ZO!&zQMhO,5=]OOQO1G2S1G2SO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GbO$!dQ!dO,5<sO$!kQ`O'#K[O9eQ`O'#K[O$!yQ`O,5<uO$#aQ!dO'#C{O!,TQMhO,5<tO$#kQ`O'#GZO$$PQ`O,5<tO$$UQ!dO'#GWO$$cQ!dO'#K]O$$mQ`O'#K]O!&zQMhO'#K]O$$rQ`O,5<xO$$wQlO'#JvO$%RQpO'#GcO#$`QpO'#GcO$%dQ`O'#GgO!3oQ`O'#GkO$%iQ!0LrO'#ItO$%tQpO,5<|OOQ!0Lp,5<|,5<|O$%{QpO'#GcO$&YQpO'#GdO$&kQpO'#GdO$&pQMjO,5=XO$'QQMjO,5=ZOOQ!0Lh,5=^,5=^O!,TQMhO,5@VO!,TQMhO,5@VO$'bQ`O'#IyO$'vQ`O,5@UO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@VO$)TQ$IYO,59uOOQ!0Lh'#Jp'#JpO$)vQMjO,5<kO$*iQMjO,5<mO@zQ`O,5<oOOQ!0Lh,5<p,5<pO$*sQ`O,5<vO$*xQMjO,5<{O$+YQ`O'#KPO!$wQlO1G2RO$+_Q`O1G2RO9eQ`O'#KSO9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I{O$+dQ!0LrO,5@{OOQ[1G2}1G2}OOQ[1G4`1G4`OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-fQ!0MxO1G0UOOQ[1G2y1G2yO!&zQMhO1G2yO%[QlO1G2yO#.tQ`O1G2yO$/jQMhO'#EkOOQ!0Lb,5@T,5@TO$/wQ!0LrO,5@TOOQ[1G.u1G.uO!ByQ!0LrO1G.uO!CUQpO1G.uO!C^QMhO1G.uO$0YQ`O1G0uO$0_Q`O'#CiO$0jQ`O'#KeO$0rQ`O,5=|O$0wQ`O'#KeO$0|Q`O'#KeO$1[Q`O'#JRO$1jQ`O,5AOO$1rQ!fO1G1iOOQ!0Lf1G1k1G1kO9kQ`O1G3fO@zQ`O1G3fO$1yQ`O1G3fO$2OQ`O1G3fO!DiQ`O1G3fO9uQ!0LrO1G3fOOQ[1G3f1G3fO!EcQ`O1G3UO!&zQMhO1G3RO$2TQ`O1G3ROOQ[1G3S1G3SO!&zQMhO1G3SO$2YQ`O1G3SO$2bQpO'#HQOOQ[1G3U1G3UO!6_QpO'#I}O!EhQ!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$2jQMhO,5=tO9kQ`O,5=tO$%dQ`O,5=vO9`Q`O,5=vO!CUQpO,5=vO!C^QMhO,5=vO:dQMhO,5=vO$2xQ`O'#KcO$3TQ`O,5=wOOQ[1G.k1G.kO$3YQ!0LrO1G.kO@zQ`O1G.kO$3eQ`O1G.kO9uQ!0LrO1G.kO$5mQ!fO,5AQO$5zQ`O,5AQO9eQ`O,5AQO$6VQlO,5>PO$6^Q`O,5>POOQ[1G3i1G3iO`QlO1G3iOOQ[1G3o1G3oOOQ[1G3q1G3qO?TQ`O1G3sO$6cQlO1G3uO$:gQlO'#HtOOQ[1G3x1G3xO$:tQ`O'#HzO?YQ`O'#H|OOQ[1G4O1G4OO$:|QlO1G4OO9uQ!0LrO1G4UOOQ[1G4W1G4WOOQ!0Lb'#G_'#G_O9uQ!0LrO1G4YO9uQ!0LrO1G4[O$?TQ`O,5@bO!)[QlO,5;`O9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CUQpO,5:XO$?YQ?MtO,5:XOOQO,5;`,5;`O$?dQpO'#IeO$?zQ`O,5@aOOQ!0Lf1G/r1G/rO$@SQpO'#IkO$@^Q`O,5@pOOQ!0Lb1G0y1G0yO#$`QpO,5:XOOQO'#Ig'#IgO$@fQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CUQpO1G0tO!C^QMhO1G0tOOQ!0Lb1G5|1G5|O!ByQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@mQ!0LrO1G0mO$@xQ!0LrO1G0mO!CUQpO1G0^ODWQpO1G0^O$AWQ!0LrO1G0mOOQO1G0^1G0^O$AlQ!0MxO1G0mPOOO-E<[-E<[POOO1G.h1G.hOOOO1G/i1G/iO$AvQ!bO,5<iO$BOQ!fO1G4jOOQO1G4p1G4pO%[QlO,5?OO$BYQ`O1G5zO$BbQ`O1G6YO$BjQ!fO1G6ZO9eQ`O,5?UO$BtQ!0MxO1G6WO%[QlO1G6WO$CUQ!0LrO1G6WO$CgQ`O1G6VO$CgQ`O1G6VO9eQ`O1G6VO$CoQ`O,5?XO9eQ`O,5?XOOQO,5?X,5?XO$DTQ`O,5?XO$+YQ`O,5?XOOQO-E<k-E<kOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(e7+(eO!&zQMhO7+(eO%[QlO7+(eO$DcQ`O7+(eO$DnQMhO7+(eO$D|Q!0MzO,5=XO$GXQ!0MzO,5=ZO$IdQ!0MzO,5=XO$KuQ!0MzO,5=ZO$NWQ!0MzO,59uO%!]Q!0MzO,5<kO%$hQ!0MzO,5<mO%&sQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%)UQ!0MxO7+&aO%)xQlO'#IfO%*VQ`O,5@cO%*_Q!fO,5@cOOQ!0Lf1G0P1G0PO%*iQ`O7+&jOOQ!0Lf7+&j7+&jO%*nQ?MtO,5:fO%[QlO7+&zO%*xQ?MtO,5:bO%+VQ?MtO,5:jO%+aQ?MtO,5:lO%+kQMhO'#IiO%+uQ`O,5@hOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%+}Q!jO,5<ZO!)[QlO,5<YOOQO-E<l-E<lOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%,YQ`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%,_Q!dO,59oOOOO-E<`-E<`OOQ!0Lh1G/X1G/XO%,fQ!0MxO7+'kOOQ!0Lh,5?^,5?^O%-YQMhO1G2fP%-aQ`O'#IrPOQ!0Lh-E<p-E<pO%-}QMjO,5?aOOQ!0Lh-E<s-E<sO%.pQMjO,5?cOOQ!0Lh-E<u-E<uO%.zQ!dO1G2wO%/RQ!dO'#CrO%/iQMhO'#KSO$$wQlO'#JvOOQ!0Lh1G2_1G2_O%/sQ`O'#IqO%0[Q`O,5@vO%0[Q`O,5@vO%0dQ`O,5@vO%0oQ`O,5@vOOQO1G2a1G2aO%0}QMjO1G2`O$+YQ`O'#K[O!,TQMhO1G2`O%1_Q(CWO'#IsO%1lQ`O,5@wO!&zQMhO,5@wO%1tQ!dO,5@wOOQ!0Lh1G2d1G2dO%4UQ!fO'#CiO%4`Q`O,5=POOQ!0Lb,5<},5<}O%4hQpO,5<}OOQ!0Lb,5=O,5=OOCwQ`O,5<}O%4sQpO,5<}OOQ!0Lb,5=R,5=RO$+YQ`O,5=VOOQO,5?`,5?`OOQO-E<r-E<rOOQ!0Lp1G2h1G2hO#$`QpO,5<}O$$wQlO,5=PO%5RQ`O,5=OO%5^QpO,5=OO!,TQMhO'#IuO%6WQMjO1G2sO!,TQMhO'#IwO%6yQMjO1G2uO%7TQMjO1G5qO%7_QMjO1G5qOOQO,5?e,5?eOOQO-E<w-E<wOOQO1G.{1G.{O!,TQMhO1G5qO!,TQMhO1G5qO!:]QpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%7lQ`O1G2ZO!,TQMhO1G2bO%7qQ!0MxO7+'mOOQ!0Lf7+'m7+'mO!$wQlO7+'mO%8eQ`O,5;`OOQ!0Lb,5?g,5?gOOQ!0Lb-E<y-E<yO%8jQ!dO'#K^O#(ZQ`O7+(eO4UQ!fO7+(eO$DfQ`O7+(eO%8tQ!0MvO'#CiO%9XQ!0MvO,5=SO%9lQ`O,5=SO%9tQ`O,5=SOOQ!0Lb1G5o1G5oOOQ[7+$a7+$aO!ByQ!0LrO7+$aO!CUQpO7+$aO!$wQlO7+&aO%9yQ`O'#JQO%:bQ`O,5APOOQO1G3h1G3hO9kQ`O,5APO%:bQ`O,5APO%:jQ`O,5APOOQO,5?m,5?mOOQO-E=P-E=POOQ!0Lf7+'T7+'TO%:oQ`O7+)QO9uQ!0LrO7+)QO9kQ`O7+)QO@zQ`O7+)QO%:tQ`O7+)QOOQ[7+)Q7+)QOOQ[7+(p7+(pO%:yQ!0MvO7+(mO!&zQMhO7+(mO!E^Q`O7+(nOOQ[7+(n7+(nO!&zQMhO7+(nO%;TQ`O'#KbO%;`Q`O,5=lOOQO,5?i,5?iOOQO-E<{-E<{OOQ[7+(s7+(sO%<rQpO'#HZOOQ[1G3`1G3`O!&zQMhO1G3`O%[QlO1G3`O%<yQ`O1G3`O%=UQMhO1G3`O9uQ!0LrO1G3bO$%dQ`O1G3bO9`Q`O1G3bO!CUQpO1G3bO!C^QMhO1G3bO%=dQ`O'#JPO%=xQ`O,5@}O%>QQpO,5@}OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>]Q`O7+$VO%[QlO1G6lO%[QlO1G6mO%>bQ!0LrO1G6lO%>lQlO1G3kO%>sQ`O1G3kO%>xQlO1G3kOOQ[7+)T7+)TO9uQ!0LrO7+)_O`QlO7+)aOOQ['#Kh'#KhOOQ['#JS'#JSO%?PQlO,5>`OOQ[,5>`,5>`O%[QlO'#HuO%?^Q`O'#HwOOQ[,5>f,5>fO9eQ`O,5>fOOQ[,5>h,5>hOOQ[7+)j7+)jOOQ[7+)p7+)pOOQ[7+)t7+)tOOQ[7+)v7+)vO%?cQpO1G5|O%?}Q?MtO1G0zO%@XQ`O1G0zOOQO1G/s1G/sO%@dQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?V,5?VOOQO-E<i-E<iO!CUQpO1G/sOOQO-E<e-E<eOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CUQpO7+&`OOQO7+%x7+%xO$AlQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@nQ!0LrO7+&XO!ByQ!0LrO7+%xO!CUQpO7+%xO%@yQ!0LrO7+&XO%AXQ!0MxO7++rO%[QlO7++rO%AiQ`O7++qO%AiQ`O7++qOOQO1G4s1G4sO9eQ`O1G4sO%AqQ`O1G4sOOQS7+%}7+%}O#(ZQ`O<<LPO4UQ!fO<<LPO%BPQ`O<<LPOOQ[<<LP<<LPO!&zQMhO<<LPO%[QlO<<LPO%BXQ`O<<LPO%BdQ!0MzO,5?aO%DoQ!0MzO,5?cO%FzQ!0MzO1G2`O%I]Q!0MzO1G2sO%KhQ!0MzO1G2uO%MsQ!fO,5?QO%[QlO,5?QOOQO-E<d-E<dO%M}Q`O1G5}OOQ!0Lf<<JU<<JUO%NVQ?MtO1G0uO&!^Q?MtO1G1PO&!eQ?MtO1G1PO&$fQ?MtO1G1PO&$mQ?MtO1G1PO&&nQ?MtO1G1PO&(oQ?MtO1G1PO&(vQ?MtO1G1PO&(}Q?MtO1G1PO&+OQ?MtO1G1PO&+VQ?MtO1G1PO&+^Q!0MxO<<JfO&-UQ?MtO1G1PO&.RQ?MvO1G1PO&/UQ?MvO'#JlO&1[Q?MtO1G1cO&1iQ?MtO1G0UO&1sQMjO,5?TOOQO-E<g-E<gO!)[QlO'#FqOOQO'#KZ'#KZOOQO1G1u1G1uO&1}Q`O1G1tO&2SQ?MtO,5?[OOOW7+'h7+'hOOOO1G/Z1G/ZO&2^Q!dO1G4xOOQ!0Lh7+(Q7+(QP!&zQMhO,5?^O!,TQMhO7+(cO&2eQ`O,5?]O9eQ`O,5?]O$+YQ`O,5?]OOQO-E<o-E<oO&2sQ`O1G6bO&2sQ`O1G6bO&2{Q`O1G6bO&3WQMjO7+'zO&3hQ!dO,5?_O&3rQ`O,5?_O!&zQMhO,5?_OOQO-E<q-E<qO&3wQ!dO1G6cO&4RQ`O1G6cO&4ZQ`O1G2kO!&zQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%4hQpO1G2iO!CUQpO1G2iOCwQ`O1G2iOOQ!0Lb1G2q1G2qO&4`QpO1G2iO&4nQ`O1G2kO$+YQ`O1G2jOCwQ`O1G2jO$$wQlO1G2kO&4vQ`O1G2jO&5jQMjO,5?aOOQ!0Lh-E<t-E<tO&6]QMjO,5?cOOQ!0Lh-E<v-E<vO!,TQMhO7++]O&6gQMjO7++]O&6qQMjO7++]OOQ!0Lh1G/c1G/cO&7OQ`O1G/cOOQ!0Lh7+'u7+'uO&7TQMjO7+'|O&7eQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&8XQ`O1G0zO!&zQMhO'#IzO&8^Q`O,5@xO&:`Q!fO<<LPO!&zQMhO1G2nO&:gQ!0LrO1G2nOOQ[<<G{<<G{O!ByQ!0LrO<<G{O&:xQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?l,5?lO&;lQ`O,5?lO&;qQ`O,5?lOOQO-E=O-E=OO&<PQ`O1G6kO&<PQ`O1G6kO9kQ`O1G6kO@zQ`O<<LlOOQ[<<Ll<<LlO&<XQ`O<<LlO9uQ!0LrO<<LlO9kQ`O<<LlOOQ[<<LX<<LXO%:yQ!0MvO<<LXOOQ[<<LY<<LYO!E^Q`O<<LYO&<^QpO'#I|O&<iQ`O,5@|O!)[QlO,5@|OOQ[1G3W1G3WOOQO'#JO'#JOO9uQ!0LrO'#JOO&<qQpO,5=uOOQ[,5=u,5=uO&<xQpO'#EgO&=PQpO'#GeO&=UQ`O7+(zO&=ZQ`O7+(zOOQ[7+(z7+(zO!&zQMhO7+(zO%[QlO7+(zO&=cQ`O7+(zOOQ[7+(|7+(|O9uQ!0LrO7+(|O$%dQ`O7+(|O9`Q`O7+(|O!CUQpO7+(|O&=nQ`O,5?kOOQO-E<}-E<}OOQO'#H^'#H^O&=yQ`O1G6iO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>RQ`O7+,WO&>WQ`O7+,XO%[QlO7+,WO%[QlO7+,XOOQ[7+)V7+)VO&>]Q`O7+)VO&>bQlO7+)VO&>iQ`O7+)VOOQ[<<Ly<<LyOOQ[<<L{<<L{OOQ[-E=Q-E=QOOQ[1G3z1G3zO&>nQ`O,5>aOOQ[,5>c,5>cO&>sQ`O1G4QO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&>xQ?MtO1G6ZO?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AlQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!ByQ!0LrO<<IdO&?SQ!0LrO<<IsO&?_Q!0MxO<= ^O&?oQ`O<= ]OOQO7+*_7+*_O9eQ`O7+*_OOQ[ANAkANAkO&?wQ!fOANAkO!&zQMhOANAkO#(ZQ`OANAkO4UQ!fOANAkO&@OQ`OANAkO%[QlOANAkO&@WQ!0MzO7+'zO&BiQ!0MzO,5?aO&DtQ!0MzO,5?cO&GPQ!0MzO7+'|O&IbQ!fO1G4lO&IlQ?MtO7+&aO&KpQ?MvO,5=XO&MwQ?MvO,5=ZO&NXQ?MvO,5=XO&NiQ?MvO,5=ZO&NyQ?MvO,59uO'#PQ?MvO,5<kO'%SQ?MvO,5<mO''hQ?MvO,5<{O')^Q?MtO7+'kO')kQ?MtO7+'mO')xQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*d7+*dO')}QMjO<<K}OOQO1G4w1G4wO'*UQ`O1G4wO'*aQ`O1G4wO'*oQ`O7++|O'*oQ`O7++|O!&zQMhO1G4yO'*wQ!dO1G4yO'+RQ`O7++}O'+ZQ`O7+(VO'+fQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!CUQpO7+(TOCwQ`O7+(TO'+pQ`O7+(VO!&zQMhO7+(VO$+YQ`O7+(UO'+uQ`O7+(VOCwQ`O7+(UO'+}QMjO<<NwO!,TQMhO<<NwOOQ!0Lh7+$}7+$}O',XQ!dO,5?fOOQO-E<x-E<xO',cQ!0MvO7+(YO!&zQMhO7+(YOOQ[AN=gAN=gO9kQ`O1G5WOOQO1G5W1G5WO',sQ`O1G5WO',xQ`O7+,VO',xQ`O7+,VO9uQ!0LrOANBWO@zQ`OANBWOOQ[ANBWANBWO'-QQ`OANBWOOQ[ANAsANAsOOQ[ANAtANAtO'-VQ`O,5?hOOQO-E<z-E<zO'-bQ?MtO1G6hOOQO,5?j,5?jOOQO-E<|-E<|OOQ[1G3a1G3aO'-lQ`O,5=POOQ[<<Lf<<LfO!&zQMhO<<LfO&=UQ`O<<LfO'-qQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9uQ!0LrO<<LhO$%dQ`O<<LhO9`Q`O<<LhO'-yQpO1G5VO'.UQ`O7+,TOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= r<= rOOQ[<= s<= sO'.^Q`O<= rO'.cQ`O<= sOOQ[<<Lq<<LqO'.hQ`O<<LqO'.mQlO<<LqOOQ[1G3{1G3{O?YQ`O7+)lO'.tQ`O<<JQO'/PQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AlQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<My<<MyOOQ[G27VG27VO!&zQMhOG27VO#(ZQ`OG27VO'/ZQ!fOG27VO4UQ!fOG27VO'/bQ`OG27VO'/jQ?MtO<<JfO'/wQ?MvO1G2`O'1mQ?MvO,5?aO'3pQ?MvO,5?cO'5sQ?MvO1G2sO'7vQ?MvO1G2uO'9yQ?MtO<<KXO':WQ?MtO<<I{OOQO1G1w1G1wO!,TQMhOANAiOOQO7+*c7+*cO':eQ`O7+*cO':pQ`O<= hO':xQ!dO7+*eOOQ!0Lb<<Kq<<KqO$+YQ`O<<KqOCwQ`O<<KqO';SQ`O<<KqO!&zQMhO<<KqOOQ!0Lb<<Ko<<KoO!CUQpO<<KoO';_Q!dO<<KqOOQ!0Lb<<Kp<<KpO';iQ`O<<KqO!&zQMhO<<KqO$+YQ`O<<KpO';nQMjOANDcO';xQ!0MvO<<KtOOQO7+*r7+*rO9kQ`O7+*rO'<YQ`O<= qOOQ[G27rG27rO9uQ!0LrOG27rO@zQ`OG27rO!)[QlO1G5SO'<bQ`O7+,SO'<jQ`O1G2kO&=UQ`OANBQOOQ[ANBQANBQO!&zQMhOANBQO'<oQ`OANBQOOQ[ANBSANBSO9uQ!0LrOANBSO$%dQ`OANBSOOQO'#H_'#H_OOQO7+*q7+*qOOQ[G22wG22wOOQ[ANE^ANE^OOQ[ANE_ANE_OOQ[ANB]ANB]O'<wQ`OANB]OOQ[<<MW<<MWO!)[QlOAN?lOOQOG24yG24yO$AlQ!0MxOG24yO#(ZQ`OLD,qOOQ[LD,qLD,qO!&zQMhOLD,qO'<|Q!fOLD,qO'=TQ?MvO7+'zO'>yQ?MvO,5?aO'@|Q?MvO,5?cO'CPQ?MvO7+'|O'DuQMjOG27TOOQO<<M}<<M}OOQ!0LbANA]ANA]O$+YQ`OANA]OCwQ`OANA]O'EVQ!dOANA]OOQ!0LbANAZANAZO'E^Q`OANA]O!&zQMhOANA]O'EiQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N^<<N^OOQ[LD-^LD-^O9uQ!0LrOLD-^O'EsQ?MtO7+*nOOQO'#Gf'#GfOOQ[G27lG27lO&=UQ`OG27lO!&zQMhOG27lOOQ[G27nG27nO9uQ!0LrOG27nOOQ[G27wG27wO'E}Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#(ZQ`O!$(!]O!&zQMhO!$(!]O'FXQ!0MzOG27TOOQ!0LbG26wG26wO$+YQ`OG26wO'HjQ`OG26wOCwQ`OG26wO'HuQ!dOG26wO!&zQMhOG26wOOQ[!$(!x!$(!xOOQ[LD-WLD-WO&=UQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#(ZQ`O!)9EwOOQ!0LbLD,cLD,cO$+YQ`OLD,cOCwQ`OLD,cO'H|Q`OLD,cO'IXQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'I`Q?MvOG27TOOQ!0Lb!$( }!$( }O$+YQ`O!$( }OCwQ`O!$( }O'KUQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$+YQ`O!)9EiOCwQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$+YQ`O!.K;TOOQ!0Lb!4/0o!4/0oO!)[QlO'#DzO1PQ`O'#EXO'KaQ!fO'#JrO'KhQ!L^O'#DvO'KoQlO'#EOO'KvQ!fO'#CiO'N^Q!fO'#CiO!)[QlO'#EQO'NnQlO,5;ZO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO'#IpO(!qQ`O,5<iO!)[QlO,5;eO(!yQMhO,5;eO($dQMhO,5;eO!)[QlO,5;wO!&zQMhO'#GmO(!yQMhO'#GmO!&zQMhO'#GoO(!yQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GPO(!yQMhO'#GPO!&zQMhO'#GRO(!yQMhO'#GRO!&zQMhO'#GaO(!yQMhO'#GaO!)[QlO,5:jO($kQpO'#D_O($uQpO'#JvO!)[QlO,5@oO'NnQlO1G0uO(%PQ?MtO'#CiO!)[QlO1G2PO!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO(%ZQ!dO'#CrO!&zQMhO,5<tO(!yQMhO,5<tO'NnQlO1G2RO!)[QlO7+&zO!&zQMhO1G2`O(!yQMhO1G2`O!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO!&zQMhO1G2bO(!yQMhO1G2bO'NnQlO7+'mO'NnQlO7+&aO!&zQMhOANAiO(!yQMhOANAiO(%nQ`O'#EoO(%sQ`O'#EoO(%{Q`O'#F]O(&QQ`O'#EyO(&VQ`O'#KTO(&bQ`O'#KRO(&mQ`O,5;ZO(&rQMjO,5<eO(&yQ`O'#GYO('OQ`O'#GYO('TQ`O,5<eO(']Q`O,5<gO('eQ`O,5;ZO('mQ?MtO1G1`O('tQ`O,5<tO('yQ`O,5<tO((OQ`O,5<vO((TQ`O,5<vO((YQ`O1G2RO((_Q`O1G0uO((dQMjO<<K}O((kQMjO<<K}O((rQMhO'#F|O9`Q`O'#F{OAuQ`O'#EnO!)[QlO,5;tO!3oQ`O'#GYO!3oQ`O'#GYO!3oQ`O'#G[O!3oQ`O'#G[O!,TQMhO7+(cO!,TQMhO7+(cO%.zQ!dO1G2wO%.zQ!dO1G2wO!&zQMhO,5=]O!&zQMhO,5=]",
        stateData: "()x~O'|OS'}OSTOS(ORQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&W!WO&^!XO&`!YO&b!ZO&d![O&g!]O&m!^O&s!_O&u!`O&w!aO&y!bO&{!cO(TSO(VTO(YUO(aVO(o[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O(O!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'z]X(a]X(r]X(y]X(z]X~O!g%RX~P(qO_!}O(V#PO(W!}O(X#PO~O_#QO(X#PO(Y#PO(Z#QO~Ox#SO!U#TO(b#TO(c#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T<ZO(VTO(YUO(aVO(o[O~O![#ZO!]#WO!Y(hP!Y(vP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(VTO(YUO(aVO(o[O~Op#mO![#iO!|]O#i#lO#j#iO(T<[O!k(sP~P.iO!l#oO(T#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa(fX'z(fX'w(fX!k(fX!Y(fX!_(fX%i(fX!g(fX~P1qO#S$dO#`$eO$Q$eOP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX!_(gX%i(gX~Oa(gX'z(gX'w(gX!Y(gX!k(gXv(gX!g(gX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T$sO(VTO(YUO(a$uO(y$}O(z%POg(^P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(T%gO~O!g%mO~Oa%nO'z%nO~O!Q%rO~P%[O(U!lO~P%[O%n%vO~P%[Oh%VO!l%eO(T%gO(U!lO~Oe%}O!l%eO(T%gO~Oj$RO~O!_&PO(T%gO(U!lO(VTO(YUO`)WP~O!Q&SO!l&RO%j&VO&T&WO~P;SO!x#sO~O%s&YO!S)SX!_)SX(T)SX~O(T&ZO~Ol!PO!u&`O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&eOe&dO!x&bO%h&cO%{&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&kO#`&nO%j&iO(U!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'x&{O'z%nO~Oa%nO'x'OO'z%nO~Oa%nO'x'QO'z%nO~O'w]X!Y]Xv]X!k]X&[]X!_]X%i]X!g]X~P(qO!b'_O!c'WO!d'WO(U!lO(VTO(YUO~Os'UO!S'TO!['XO(e'SO!^(iP!^(xP~P@nOn'bO!_'`O(T%gO~Oe'gO!l%eO(T%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<VO#T!pO#U!pO#W!pO#X!pO(U!lO(VTO(YUO(e!mO(o!sO~O!b'mO!c'lO!d'lO#V!pO#['nO#]'nO~PBYOa%nOh%VO!g#vO!l%eO'z%nO(r'pO~O!p'tO#`'rO~PChOs!nO!S!oO(VTO(YUO(e!mO(o!sO~O!_XOs(mX!S(mX!b(mX!c(mX!d(mX!|(mX#T(mX#U(mX#V(mX#W(mX#X(mX#[(mX#](mX(U(mX(V(mX(Y(mX(e(mX(o(mX~O!c'lO!d'lO(U!lO~PDWO(P'xO(Q'xO(R'zO~O_!}O(V'|O(W!}O(X'|O~O_#QO(X'|O(Y'|O(Z#QO~Ov(OO~P%[Ox#SO!U#TO(b#TO(c(RO~O![(TO!Y'WX!Y'^X!]'WX!]'^X~P+}O!](VO!Y(hX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](VO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~O!Y(hX~PHRO!Y([O~O!Y(uX!](uX!g(uX!k(uX(r(uX~O#`(uX#k#dX!^(uX~PJUO#`(]O!Y(wX!](wX~O!](^O!Y(vX~O!Y(aO~O#`$eO~PJUO!^(bO~P`OR#zO!Q#yO!S#{O!l#xO(aVOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(r!na(y!na(z!na~Oa!na'z!na'w!na!Y!na!k!nav!na!_!na%i!na!g!na~PKlO!k(cO~O!g#vO#`(dO(r'pO!](tXa(tX'z(tX~O!k(tX~PNXO!S%hO!_%iO!|]O#i(iO#j(hO(T%gO~O!](jO!k(sX~O!k(lO~O!S%hO!_%iO#j(hO(T%gO~OP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~O!g#vO!k(gX~P! uOR(nO!Q(mO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(T!{a~P!#vO!x(rO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~O#k(xO~O![(zO!k(kP~P%[O(e(|O(o[O~O!S)OO!l#xO(e(|O(o[O~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]$_Oa$qa'z$qa'w$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)dO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Og(pP~P!,TO!Q)iO!g)hO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)hO!_({X$Z({X$]({X$_({X$f({X~O!Q)iO~P!.^O!Q)iO!_({X$Z({X$]({X$_({X$f({X~O!_)kO$Z)oO$])jO$_)jO$f)pO~O![)sO~P!)[O$]$hO$_$gO$f)wO~On$zX!Q$zX#S$zX'y$zX(y$zX(z$zX~OgmXg$zXnmX!]mX#`mX~P!0SOx)yO(b)zO(c)|O~On*VO!Q*OO'y*PO(y$}O(z%PO~Og)}O~P!1WOg*WO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S*YO!_*ZO!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op*`O![*^O(T*XO!k)OP~P!1uO#k*aO~O!l*bO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T*dO(VTO(YUO(a$uO(y$}O(z%PO~O![*gO!Y)PP~P!3tOr*sOs!nO!S*iO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO(e!mO~O!^*pO~P!5iO#S$dOn(`X!Q(`X'y(`X(y(`X(z(`X!](`X#`(`X~Og(`X$O(`X~P!6kOn*xO#`*wOg(_X!](_X~O!]*yOg(^X~Oj%dOk%dOl%dO(T&ZOg(^P~Os*|O~Og)}O(T&ZO~O!l+SO~O(T(vO~Op+WO!S%hO![#iO!_%iO!|]O#i#lO#j#iO(T%gO!k(sP~O!g#vO#k+XO~O!S%hO![+ZO!](^O!_%iO(T%gO!Y(vP~Os'[O!S+]O![+[O(VTO(YUO(e(|O~O!^(xP~P!9|O!]+^Oa)TX'z)TX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa!ja!]!ja'z!ja'w!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:tOR#zO!Q#yO!S#{O!l#xO(aVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(r!ra(y!ra(z!ra~Oa!ra'z!ra'w!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!=[OR#zO!Q#yO!S#{O!l#xO(aVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(r!ta(y!ta(z!ta~Oa!ta'z!ta'w!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?rOh%VOn+gO!_'`O%i+fO~O!g+iOa(]X!_(]X'z(]X!](]X~Oa%nO!_XO'z%nO~Oh%VO!l%eO~Oh%VO!l%eO(T%gO~O!g#vO#k(xO~Ob+tO%j+uO(T+qO(VTO(YUO!^)XP~O!]+vO`)WX~O[+zO~O`+{O~O!_&PO(T%gO(U!lO`)WP~O%j,OO~P;SOh%VO#`,SO~Oh%VOn,VO!_$|O~O!_,XO~O!Q,ZO!_XO~O%n%vO~O!x,`O~Oe,eO~Ob,fO(T#nO(VTO(YUO!^)VP~Oe%}O~O%j!QO(T&ZO~P=gO[,kO`,jO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(VTO(YUO(aVO(o[O~O!_!eO!u!gO$W!kO(T!dO~P!FyO`,jOa%nO'z%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa,pOl!OO!uwO%l!OO%m!OO%n!OO~P!IcO!l&oO~O&^,vO~O!_,xO~O&o,zO&q,{OP&laQ&laS&laY&laa&lad&lae&lal&lap&lar&las&lat&laz&la|&la!O&la!S&la!W&la!X&la!_&la!i&la!l&la!o&la!p&la!q&la!s&la!u&la!x&la!|&la$W&la$n&la%h&la%j&la%l&la%m&la%n&la%q&la%s&la%v&la%w&la%y&la&W&la&^&la&`&la&b&la&d&la&g&la&m&la&s&la&u&la&w&la&y&la&{&la'w&la(T&la(V&la(Y&la(a&la(o&la!^&la&e&lab&la&j&la~O(T-QO~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P#!iO!g-VO#`-UOh(jX!]#hX!^#hX!g(jX!l(jX~O!](jX!^(jX~P##[Oh%VO!g-XO!l%eO!]!aX!^!aX~Os!nO!S!oO(VTO(YUO(e!mO~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(VTO(YUO(aVO(o[O~O(T=QO~P#$qO!]-]O!^(iX~O!^-_O~O!g-VO#`-UO!]#hX!^#hX~O!]-`O!^(xX~O!^-bO~O!c-cO!d-cO(U!lO~P#$`O!^-fO~P'_On-iO!_'`O~O!Y-nO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(U!{a(V!{a(Y!{a(e!{a(o!{a~P!#vO!p-sO#`-qO~PChO!c-uO!d-uO(U!lO~PDWOa%nO#`-qO'z%nO~Oa%nO!g#vO#`-qO'z%nO~Oa%nO!g#vO!p-sO#`-qO'z%nO(r'pO~O(P'xO(Q'xO(R-zO~Ov-{O~O!Y'Wa!]'Wa~P!:tO![.PO!Y'WX!]'WX~P%[O!](VO!Y(ha~O!Y(ha~PHRO!](^O!Y(va~O!S%hO![.TO!_%iO(T%gO!Y'^X!]'^X~O#`.VO!](ta!k(taa(ta'z(ta~O!g#vO~P#,wO!](jO!k(sa~O!S%hO!_%iO#j.ZO(T%gO~Op.`O!S%hO![.]O!_%iO!|]O#i._O#j.]O(T%gO!]'aX!k'aX~OR.dO!l#xO~Oh%VOn.gO!_'`O%i.fO~Oa#ci!]#ci'z#ci'w#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:tOn>]O!Q*OO'y*PO(y$}O(z%PO~O#k#_aa#_a#`#_a'z#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#k(`XP(`XR(`X[(`Xa(`Xj(`Xr(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X'z(`X(a(`X(r(`X!k(`X!Y(`X'w(`Xv(`X!_(`X%i(`X!g(`X~P!6kO!].tO!k(kX~P!:tO!k.wO~O!Y.yO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#3cO#n$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#6QO#r$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(aVOa#mi!]#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(aVO(z#}Oa#mi!]#mi#z#mi#{#mi'z#mi(r#mi(y#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#;VO#x#mi~P#;VO#v$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(aVO(y#|O(z#}Oa#mi!]#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#={O#z$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X!]]X!^]X~O$O]X~P#@jOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO#z<gO#{<hO(aVO(r$YO(y#|O(z#}O~O$O.{O~P#BwO#S$dO#`<nO$Q<nO$O(gX!^(gX~P! uOa'da!]'da'z'da'w'da!k'da!Y'dav'da!_'da%i'da!g'da~P!:tO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO(y#mi(z#mi~P#EyOn>]O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P#EyO!]/POg(pX~P!1WOg/RO~Oa$Pi!]$Pi'z$Pi'w$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:tO$]/SO$_/SO~O$]/TO$_/TO~O!g)hO#`/UO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/VO~O!_)kO$Z/XO$])jO$_)jO$f/YO~O!]<iO!^(fX~P#BwO!^/ZO~O!g)hO$f({X~O$f/]O~Ov/^O~P!&zOx)yO(b)zO(c/aO~O!S/dO~O(y$}On%aa!Q%aa'y%aa(z%aa!]%aa#`%aa~Og%aa$O%aa~P#L{O(z%POn%ca!Q%ca'y%ca(y%ca!]%ca#`%ca~Og%ca$O%ca~P#MnO!]fX!gfX!kfX!k$zX(rfX~P!0SOp%WO![/mO!](^O(T/lO!Y(vP!Y)PP~P!1uOr*sO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO~Os<}O!S/nO![+[O!^*pO(e<|O!^(xP~P$ [O!k/oO~P#/sO!]/pO!g#vO(r'pO!k)OX~O!k/uO~OnoX!QoX'yoX(yoX(zoX~O!g#vO!koX~P$#OOp/wO!S%hO![*^O!_%iO(T%gO!k)OP~O#k/xO~O!Y$zX!]$zX!g%RX~P!0SO!]/yO!Y)PX~P#/sO!g/{O~O!Y/}O~OpkO(T0OO~P.iOh%VOr0TO!g#vO!l%eO(r'pO~O!g+iO~Oa%nO!]0XO'z%nO~O!^0ZO~P!5iO!c0[O!d0[O(U!lO~P#$`Os!nO!S0]O(VTO(YUO(e!mO~O#[0_O~Og%aa!]%aa#`%aa$O%aa~P!1WOg%ca!]%ca#`%ca$O%ca~P!1WOj%dOk%dOl%dO(T&ZOg'mX!]'mX~O!]*yOg(^a~Og0hO~On0jO#`0iOg(_a!](_a~OR0kO!Q0kO!S0lO#S$dOn}a'y}a(y}a(z}a!]}a#`}a~Og}a$O}a~P$(cO!Q*OO'y*POn$sa(y$sa(z$sa!]$sa#`$sa~Og$sa$O$sa~P$)_O!Q*OO'y*POn$ua(y$ua(z$ua!]$ua#`$ua~Og$ua$O$ua~P$*QO#k0oO~Og%Ta!]%Ta#`%Ta$O%Ta~P!1WO!g#vO~O#k0rO~O!]+^Oa)Ta'z)Ta~OR#zO!Q#yO!S#{O!l#xO(aVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(r!ri(y!ri(z!ri~Oa!ri'z!ri'w!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$+oOh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op0{O%]0|O(T0zO~P$.VO!g+iOa(]a!_(]a'z(]a!](]a~O#k1SO~O[]X!]fX!^fX~O!]1TO!^)XX~O!^1VO~O[1WO~Ob1YO(T+qO(VTO(YUO~O!_&PO(T%gO`'uX!]'uX~O!]+vO`)Wa~O!k1]O~P!:tO[1`O~O`1aO~O#`1fO~On1iO!_$|O~O(e(|O!^)UP~Oh%VOn1rO!_1oO%i1qO~O[1|O!]1zO!^)VX~O!^1}O~O`2POa%nO'z%nO~O(T#nO(VTO(YUO~O#S$dO#`$eO$Q$eOP(gXR(gX[(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~Oj2SO&[2TOa(gX~P$3pOj2SO#`$eO&[2TO~Oa2VO~P%[Oa2XO~O&e2[OP&ciQ&ciS&ciY&cia&cid&cie&cil&cip&cir&cis&cit&ciz&ci|&ci!O&ci!S&ci!W&ci!X&ci!_&ci!i&ci!l&ci!o&ci!p&ci!q&ci!s&ci!u&ci!x&ci!|&ci$W&ci$n&ci%h&ci%j&ci%l&ci%m&ci%n&ci%q&ci%s&ci%v&ci%w&ci%y&ci&W&ci&^&ci&`&ci&b&ci&d&ci&g&ci&m&ci&s&ci&u&ci&w&ci&y&ci&{&ci'w&ci(T&ci(V&ci(Y&ci(a&ci(o&ci!^&cib&ci&j&ci~Ob2bO!^2`O&j2aO~P`O!_XO!l2dO~O&q,{OP&liQ&liS&liY&lia&lid&lie&lil&lip&lir&lis&lit&liz&li|&li!O&li!S&li!W&li!X&li!_&li!i&li!l&li!o&li!p&li!q&li!s&li!u&li!x&li!|&li$W&li$n&li%h&li%j&li%l&li%m&li%n&li%q&li%s&li%v&li%w&li%y&li&W&li&^&li&`&li&b&li&d&li&g&li&m&li&s&li&u&li&w&li&y&li&{&li'w&li(T&li(V&li(Y&li(a&li(o&li!^&li&e&lib&li&j&li~O!Y2jO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2pO(e!mO!]'XX!^'XX~P@nO!]-]O!^(ia~O!]'_X!^'_X~P!9|O!]-`O!^(xa~O!^2wO~P'_Oa%nO#`3QO'z%nO~Oa%nO!g#vO#`3QO'z%nO~Oa%nO!g#vO!p3UO#`3QO'z%nO(r'pO~Oa%nO'z%nO~P!:tO!]$_Ov$qa~O!Y'Wi!]'Wi~P!:tO!](VO!Y(hi~O!](^O!Y(vi~O!Y(wi!](wi~P!:tO!](ti!k(tia(ti'z(ti~P!:tO#`3WO!](ti!k(tia(ti'z(ti~O!](jO!k(si~O!S%hO!_%iO!|]O#i3]O#j3[O(T%gO~O!S%hO!_%iO#j3[O(T%gO~On3dO!_'`O%i3cO~Oh%VOn3dO!_'`O%i3cO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aav%aa!_%aa%i%aa!g%aa~P#L{O#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%cav%ca!_%ca%i%ca!g%ca~P#MnO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/sO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/sO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'z}a(a}a(r}a!k}a!Y}a'w}av}a!_}a%i}a!g}a~P$(cO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'z$sa(a$sa(r$sa!k$sa!Y$sa'w$sav$sa!_$sa%i$sa!g$sa~P$)_O#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'z$ua(a$ua(r$ua!k$ua!Y$ua'w$uav$ua!_$ua%i$ua!g$ua~P$*QO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'z%Ta(a%Ta(r%Ta!k%Ta!Y%Ta'w%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/sOa#cq!]#cq'z#cq'w#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:tO![3lO!]'YX!k'YX~P%[O!].tO!k(ka~O!].tO!k(ka~P!:tO!Y3oO~O$O!na!^!na~PKlO$O!ja!]!ja!^!ja~P#BwO$O!ra!^!ra~P!=[O$O!ta!^!ta~P!?rOg']X!]']X~P!,TO!]/POg(pa~OSfO!_4TO$d4UO~O!^4YO~Ov4ZO~P#/sOa$mq!]$mq'z$mq'w$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:tO!Y4]O~P!&zO!S4^O~O!Q*OO'y*PO(z%POn'ia(y'ia!]'ia#`'ia~Og'ia$O'ia~P%-fO!Q*OO'y*POn'ka(y'ka(z'ka!]'ka#`'ka~Og'ka$O'ka~P%.XO(r$YO~P#/sO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!0SOp%WO(T=WO~P!1uOp4bO!S%hO![4aO!_%iO(T%gO!]'eX!k'eX~O!]/pO!k)Oa~O!]/pO!g#vO!k)Oa~O!]/pO!g#vO(r'pO!k)Oa~Og$|i!]$|i#`$|i$O$|i~P!1WO![4jO!Y'gX!]'gX~P!3tO!]/yO!Y)Pa~O!]/yO!Y)Pa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~Oj%YX!g%YX~P%2OOj4oO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4tO!l%eO(r'pO~Or4yO!g#vO(r'pO~Os!nO!S4zO(VTO(YUO(e!mO~O(y$}On%ai!Q%ai'y%ai(z%ai!]%ai#`%ai~Og%ai$O%ai~P%5oO(z%POn%ci!Q%ci'y%ci(y%ci!]%ci#`%ci~Og%ci$O%ci~P%6bOg(_i!](_i~P!1WO#`5QOg(_i!](_i~P!1WO!k5VO~Oa$oq!]$oq'z$oq'w$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:tO!Y5ZO~O!]5[O!_)QX~P#/sOa$zX!_$zX%^]X'z$zX!]$zX~P!0SO%^5_OaoX!_oX'zoX!]oX~P$#OOp5`O(T#nO~O%^5_O~Ob5fO%j5gO(T+qO(VTO(YUO!]'tX!^'tX~O!]1TO!^)Xa~O[5kO~O`5lO~O[5pO~Oa%nO'z%nO~P#/sO!]5uO#`5wO!^)UX~O!^5xO~Or6OOs!nO!S*iO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!pO#W!pO#X!pO#[5}O#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O!^5|O~P%;eOn6TO!_1oO%i6SO~Oh%VOn6TO!_1oO%i6SO~Ob6[O(T#nO(VTO(YUO!]'sX!^'sX~O!]1zO!^)Va~O(VTO(YUO(e6^O~O`6bO~Oj6eO&[6fO~PNXO!k6gO~P%[Oa6iO~Oa6iO~P%[Ob2bO!^6nO&j2aO~P`O!g6pO~O!g6rOh(ji!](ji!^(ji!g(ji!l(jir(ji(r(ji~O!]#hi!^#hi~P#BwO#`6sO!]#hi!^#hi~O!]!ai!^!ai~P#BwOa%nO#`6|O'z%nO~Oa%nO!g#vO#`6|O'z%nO~O!](tq!k(tqa(tq'z(tq~P!:tO!](jO!k(sq~O!S%hO!_%iO#j7TO(T%gO~O!_'`O%i7WO~On7[O!_'`O%i7WO~O#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'z'ia(a'ia(r'ia!k'ia!Y'ia'w'iav'ia!_'ia%i'ia!g'ia~P%-fO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'z'ka(a'ka(r'ka!k'ka!Y'ka'w'kav'ka!_'ka%i'ka!g'ka~P%.XO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'z$|i(a$|i(r$|i!k$|i!Y$|i'w$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/sO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'z%ai(a%ai(r%ai!k%ai!Y%ai'w%aiv%ai!_%ai%i%ai!g%ai~P%5oO#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'z%ci(a%ci(r%ci!k%ci!Y%ci'w%civ%ci!_%ci%i%ci!g%ci~P%6bO!]'Ya!k'Ya~P!:tO!].tO!k(ki~O$O#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#n#mi~P%NdO#n<_O~P%NdOP$[OR#zOr<kO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#r#mi~P&!lO#r<aO~P&!lOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO(aVO#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#v#mi~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO(aVO(z#}O#z#mi#{#mi$O#mi(r#mi(y#mi!]#mi!^#mi~O#x<eO~P&&uO#x#mi~P&&uO#v<cO~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO(aVO(y#|O(z#}O#{#mi$O#mi(r#mi!]#mi!^#mi~O#z#mi~P&)UO#z<gO~P&)UOa#|y!]#|y'z#|y'w#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:tO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO(y#mi(z#mi~P&,QOn>^O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P&,QO#S$dOP(`XR(`X[(`Xj(`Xn(`Xr(`X!Q(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X$O(`X'y(`X(a(`X(r(`X(y(`X(z(`X!](`X!^(`X~O$O$Pi!]$Pi!^$Pi~P#BwO$O!ri!^!ri~P$+oOg']a!]']a~P!1WO!^7nO~O!]'da!^'da~P#BwO!Y7oO~P#/sO!g#vO(r'pO!]'ea!k'ea~O!]/pO!k)Oi~O!]/pO!g#vO!k)Oi~Og$|q!]$|q#`$|q$O$|q~P!1WO!Y'ga!]'ga~P#/sO!g7vO~O!]/yO!Y)Pi~P#/sO!]/yO!Y)Pi~O!Y7yO~Oh%VOr8OO!l%eO(r'pO~Oj8QO!g#vO~Or8TO!g#vO(r'pO~O!Q*OO'y*PO(z%POn'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P&5RO!Q*OO'y*POn'la(y'la(z'la!]'la#`'la~Og'la$O'la~P&5tOg(_q!](_q~P!1WO#`8VOg(_q!](_q~P!1WO!Y8WO~Og%Oq!]%Oq#`%Oq$O%Oq~P!1WOa$oy!]$oy'z$oy'w$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:tO!g6rO~O!]5[O!_)Qa~O!_'`OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(a$Ta(r$Ta(y$Ta(z$Ta~O%i7WO~P&8fO%^8[Oa%[i!_%[i'z%[i!]%[i~Oa#cy!]#cy'z#cy'w#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:tO[8^O~Ob8`O(T+qO(VTO(YUO~O!]1TO!^)Xi~O`8dO~O(e(|O!]'pX!^'pX~O!]5uO!^)Ua~O!^8nO~P%;eO(o!sO~P$&YO#[8oO~O!_1oO~O!_1oO%i8qO~On8tO!_1oO%i8qO~O[8yO!]'sa!^'sa~O!]1zO!^)Vi~O!k8}O~O!k9OO~O!k9RO~O!k9RO~P%[Oa9TO~O!g9UO~O!k9VO~O!](wi!^(wi~P#BwOa%nO#`9_O'z%nO~O!](ty!k(tya(ty'z(ty~P!:tO!](jO!k(sy~O%i9bO~P&8fO!_'`O%i9bO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'z$|q(a$|q(r$|q!k$|q!Y$|q'w$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/sO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'z'ja(a'ja(r'ja!k'ja!Y'ja'w'jav'ja!_'ja%i'ja!g'ja~P&5RO#k'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la'z'la(a'la(r'la!k'la!Y'la'w'lav'la!_'la%i'la!g'la~P&5tO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'z%Oq(a%Oq(r%Oq!k%Oq!Y%Oq'w%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/sO!]'Yi!k'Yi~P!:tO$O#cq!]#cq!^#cq~P#BwO(y$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(a%aa(r%aa!]%aa!^%aa~On%aa!Q%aa'y%aa(z%aa~P&IyO(z%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(a%ca(r%ca!]%ca!^%ca~On%ca!Q%ca'y%ca(y%ca~P&LQOn>^O!Q*OO'y*PO(z%PO~P&IyOn>^O!Q*OO'y*PO(y$}O~P&LQOR0kO!Q0kO!S0lO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'y}a(a}a(r}a(y}a(z}a!]}a!^}a~O!Q*OO'y*POP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(a$sa(r$sa(y$sa(z$sa!]$sa!^$sa~O!Q*OO'y*POP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(a$ua(r$ua(y$ua(z$ua!]$ua!^$ua~On>^O!Q*OO'y*PO(y$}O(z%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(a%Ta(r%Ta!]%Ta!^%Ta~P''VO$O$mq!]$mq!^$mq~P#BwO$O$oq!]$oq!^$oq~P#BwO!^9oO~O$O9pO~P!1WO!g#vO!]'ei!k'ei~O!g#vO(r'pO!]'ei!k'ei~O!]/pO!k)Oq~O!Y'gi!]'gi~P#/sO!]/yO!Y)Pq~Or9wO!g#vO(r'pO~O[9yO!Y9xO~P#/sO!Y9xO~Oj:PO!g#vO~Og(_y!](_y~P!1WO!]'na!_'na~P#/sOa%[q!_%[q'z%[q!]%[q~P#/sO[:UO~O!]1TO!^)Xq~O`:YO~O#`:ZO!]'pa!^'pa~O!]5uO!^)Ui~P#BwO!S:]O~O!_1oO%i:`O~O(VTO(YUO(e:eO~O!]1zO!^)Vq~O!k:hO~O!k:iO~O!k:jO~O!k:jO~P%[O#`:mO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%i:rO~P&8fO!_'`O%i:rO~O$O#|y!]#|y!^#|y~P#BwOP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(a$|i(r$|i!]$|i!^$|i~P''VO!Q*OO'y*PO(z%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(a'ia(r'ia(y'ia!]'ia!^'ia~O!Q*OO'y*POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(a'ka(r'ka(y'ka(z'ka!]'ka!^'ka~O(y$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'y%ai(a%ai(r%ai(z%ai!]%ai!^%ai~O(z%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'y%ci(a%ci(r%ci(y%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#BwO$O#cy!]#cy!^#cy~P#BwO!g#vO!]'eq!k'eq~O!]/pO!k)Oy~O!Y'gq!]'gq~P#/sOr:|O!g#vO(r'pO~O[;QO!Y;PO~P#/sO!Y;PO~Og(_!R!](_!R~P!1WOa%[y!_%[y'z%[y!]%[y~P#/sO!]1TO!^)Xy~O!]5uO!^)Uq~O(T;XO~O!_1oO%i;[O~O!k;_O~O%i;dO~P&8fOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(a$|q(r$|q!]$|q!^$|q~P''VO!Q*OO'y*PO(z%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(a'ja(r'ja(y'ja!]'ja!^'ja~O!Q*OO'y*POP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la$O'la(a'la(r'la(y'la(z'la!]'la!^'la~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(a%Oq(r%Oq!]%Oq!^%Oq~P''VOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!1WO!Y;hO~P#/sOr;iO!g#vO(r'pO~O[;kO!Y;hO~P#/sO!]'pq!^'pq~P#BwO!]#h!Z!^#h!Z~P#BwO#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'z%e!Z(a%e!Z(r%e!Z!k%e!Z!Y%e!Z'w%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/sOr;tO!g#vO(r'pO~O!Y;uO~P#/sOr;|O!g#vO(r'pO~O!Y;}O~P#/sOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(a%e!Z(r%e!Z!]%e!Z!^%e!Z~P''VOr<QO!g#vO(r'pO~Ov(fX~P1qO!Q%rO~P!)[O(U!lO~P!)[O!YfX!]fX#`fX~P%2OOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~O!gfX!k]X!kfX(rfX~P'LTOP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_XO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]<iO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<tO!S${O!_$|O!i>WO!l$xO#j<zO$W%`O$t<vO$v<xO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Ol)dO~P(!yOr!eX(r!eX~P#!iOr(jX(r(jX~P##[O!^]X!^fX~P'LTO!YfX!Y$zX!]fX!]$zX#`fX~P!0SO#k<^O~O!g#vO#k<^O~O#`<nO~Oj<bO~O#`=OO!](wX!^(wX~O#`<nO!](uX!^(uX~O#k=PO~Og=RO~P!1WO#k=XO~O#k=YO~Og=RO(T&ZO~O!g#vO#k=ZO~O!g#vO#k=PO~O$O=[O~P#BwO#k=]O~O#k=^O~O#k=cO~O#k=dO~O#k=eO~O#k=fO~O$O=gO~P!1WO$O=hO~P!1WOl=sO~P7eOk#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~(OT#o!X'|(U#ps#n#qr!Q'}$]'}(T$_(e~",
        goto: "$9Y)]PPPPPP)^PP)aP)rP+W/]PPPP6mPP7TPP=QPPP@tPA^PA^PPPA^PCfPA^PA^PA^PCjPCoPD^PIWPPPI[PPPPI[L_PPPLeMVPI[PI[PP! eI[PPPI[PI[P!#lI[P!'S!(X!(bP!)U!)Y!)U!,gPPPPPPP!-W!(XPP!-h!/YP!2iI[I[!2n!5z!:h!:h!>gPPP!>oI[PPPPPPPPP!BOP!C]PPI[!DnPI[PI[I[I[I[I[PI[!FQP!I[P!LbP!Lf!Lp!Lt!LtP!IXP!Lx!LxP#!OP#!SI[PI[#!Y#%_CjA^PA^PA^A^P#&lA^A^#)OA^#+vA^#.SA^A^#.r#1W#1W#1]#1f#1W#1qPP#1WPA^#2ZA^#6YA^A^6mPPP#:_PPP#:x#:xP#:xP#;`#:xPP#;fP#;]P#;]#;y#;]#<e#<k#<n)aP#<q)aP#<z#<z#<zP)aP)aP)aP)aPP)aP#=Q#=TP#=T)aP#=XP#=[P)aP)aP)aP)aP)aP)a)aPP#=b#=h#=s#=y#>P#>V#>]#>k#>q#>{#?R#?]#?c#?s#?y#@k#@}#AT#AZ#Ai#BO#Cs#DR#DY#Et#FS#Gt#HS#HY#H`#Hf#Hp#Hv#H|#IW#Ij#IpPPPPPPPPPPP#IvPPPPPPP#Jk#Mx$ b$ i$ qPPP$']P$'f$*_$0x$0{$1O$1}$2Q$2X$2aP$2g$2jP$3W$3[$4S$5b$5g$5}PP$6S$6Y$6^$6a$6e$6i$7e$7|$8e$8i$8l$8o$8y$8|$9Q$9UR!|RoqOXst!Z#d%m&r&t&u&w,s,x2[2_Y!vQ'`-e1o5{Q%tvQ%|yQ&T|Q&j!VS'W!e-]Q'f!iS'l!r!yU*k$|*Z*oQ+o%}S+|&V&WQ,d&dQ-c'_Q-m'gQ-u'mQ0[*qQ1b,OQ1y,eR<{<Y%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_S#q]<V!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU+P%]<s<tQ+t&PQ,f&gQ,m&oQ0x+gQ0}+iQ1Y+uQ2R,kQ3`.gQ5`0|Q5f1TQ6[1zQ7Y3dQ8`5gR9e7['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S!S!nQ!r!v!y!z$|'W'_'`'l'm'n*k*o*q*r-]-c-e-u0[0_1o5{5}%[$ti#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q&X|Q'U!eS'[%i-`Q+t&PQ,P&WQ,f&gQ0n+SQ1Y+uQ1_+{Q2Q,jQ2R,kQ5f1TQ5o1aQ6[1zQ6_1|Q6`2PQ8`5gQ8c5lQ8|6bQ:X8dQ:f8yQ;V:YR<}*ZrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R,h&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'b'r(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>R>S[#]WZ#W#Z'X(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ%wxQ%{yW&Q|&V&W,OQ&_!TQ'c!hQ'e!iQ(q#sS+n%|%}Q+r&PQ,_&bQ,c&dS-l'f'gQ.i(rQ1R+oQ1X+uQ1Z+vQ1^+zQ1t,`S1x,d,eQ2|-mQ5e1TQ5i1WQ5n1`Q6Z1yQ8_5gQ8b5kQ8f5pQ:T8^R;T:U!U$zi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y!^%yy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{Q+h%wQ,T&[Q,W&]Q,b&dQ.h(qQ1s,_U1w,c,d,eQ3e.iQ6U1tS6Y1x1yQ8x6Z#f>T#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o>U<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hW%Ti%V*y>PS&[!Q&iQ&]!RQ&^!SU*}%[%d=sR,R&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^T)z$u){V+P%]<s<tW'[!e%i*Z-`S(}#y#zQ+c%rQ+y&SS.b(m(nQ1j,XQ5T0kR8i5u'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S$i$^c#Y#e%q%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.|.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ'Y!eR2q-]!W!nQ!e!r!v!y!z$|'W'_'`'l'm'n*Z*k*o*q*r-]-c-e-u0[0_1o5{5}R1l,ZnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&y!^Q'v!xS(s#u<^Q+l%zQ,]&_Q,^&aQ-j'dQ-w'oS.r(x=PS0q+X=ZQ1P+mQ1n,[Q2c,zQ2e,{Q2m-WQ2z-kQ2}-oS5Y0r=eQ5a1QS5d1S=fQ6t2oQ6x2{Q6}3SQ8]5bQ9Y6vQ9Z6yQ9^7OR:l9V$d$]c#Y#e%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vS(o#p'iQ)P#zS+b%q.|S.c(n(pR3^.d'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS#q]<VQ&t!XQ&u!YQ&w![Q&x!]R2Z,vQ'a!hQ+e%wQ-h'cS.e(q+hQ2x-gW3b.h.i0w0yQ6w2yW7U3_3a3e5^U9a7V7X7ZU:q9c9d9fS;b:p:sQ;p;cR;x;qU!wQ'`-eT5y1o5{!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(j,s,x.[2[2_]!pQ!r'`-e1o5{T#q]<V%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S(}#y#zS.b(m(n!s=l$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU$fd)_,mS(p#p'iU*v%R(w4OU0m+O.n7gQ5^0xQ7V3`Q9d7YR:s9em!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}Q't!uS(f#g2US-s'k'wQ/s*]Q0R*jQ3U-vQ4f/tQ4r0TQ4s0UQ4x0^Q7r4`S7}4t4vS8R4y4{Q9r7sQ9v7yQ9{8OQ:Q8TS:{9w9xS;g:|;PS;s;h;iS;{;t;uS<P;|;}R<S<QQ#wbQ's!uS(e#g2US(g#m+WQ+Y%fQ+j%xQ+p&OU-r'k't'wQ.W(fU/r*]*`/wQ0S*jQ0V*lQ1O+kQ1u,aS3R-s-vQ3Z.`S4e/s/tQ4n0PS4q0R0^Q4u0WQ6W1vQ7P3US7q4`4bQ7u4fU7|4r4x4{Q8P4wQ8v6XS9q7r7sQ9u7yQ9}8RQ:O8SQ:c8wQ:y9rS:z9v9xQ;S:QQ;^:dS;f:{;PS;r;g;hS;z;s;uS<O;{;}Q<R<PQ<T<SQ=o=jQ={=tR=|=uV!wQ'`-e%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S#wz!j!r=i$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=o>R%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Q%fj!^%xy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{S&Oz!jQ+k%yQ,a&dW1v,b,c,d,eU6X1w1x1yS8w6Y6ZQ:d8x!r=j$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ=t>QR=u>R%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Y#bWZ#W#Z(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ,n&o!p=k$Z$n)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=n'XU']!e%i*ZR2s-`%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ,m&oQ0x+gQ3`.gQ7Y3dR9e7[!b$Tc#Y%q(S(Y(t(y)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!P<d)^)q-Z.|2k2n3p3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!f$Vc#Y%q(S(Y(t(y)W)X)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!T<f)^)q-Z.|2k2n3p3v3w3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!^$Zc#Y%q(S(Y(t(y)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<WQ4_/kz>S)^)q-Z.|2k2n3p4P4X6u7b7k7l8k9X9g9m9n;W;`=vQ>X>ZR>Y>['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS$oh$pR4U/U'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$kf$qQ$ifS)j$l)nR)v$qT$jf$qT)l$l)n'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$oh$pQ$rhR)u$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_!s>Q$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'b)O)s*i+]+g,p,s,x-i.g/V/n0]0l1r2S2T2V2X2[2_2a3d4T4z6T6e6f6i7[8t9T!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^Q+T%aQ/c*Oo4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!U$yi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>YQ*c$zU*l$|*Z*oQ+U%bQ0W*m#f=q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n=r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hQ=w>TQ=x>UQ=y>VR=z>W!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hnoOXst!Z#d%m&r&t&u&w,s,x2[2_S*f${*YQ-R'OQ-S'QR4i/y%[%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q,U&]Q1h,WQ5s1gR8h5tV*n$|*Z*oU*n$|*Z*oT5z1o5{S0P*i/nQ4w0]T8S4z:]Q+j%xQ0V*lQ1O+kQ1u,aQ6W1vQ8v6XQ:c8wR;^:d!U%Oi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Yx*R$v)e*S*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>OS0`*t0a#f<o#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<p<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!d=S(u)c*[*e.j.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[`=T3}7c7f7j9h:t:w;yS=_.l3iT=`7e9k!U%Qi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y|*T$v)e*U*t+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>OS0b*u0c#f<q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!h=U(u)c*[*e.k.l.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[d=V3}7d7e7j9h9i:t:u:w;yS=a.m3jT=b7f9lrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q&f!UR,p&ornOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R&f!UQ,Y&^R1d,RsnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q1p,_S6R1s1tU8p6P6Q6US:_8r8sS;Y:^:aQ;m;ZR;w;nQ&m!VR,i&iR6_1|R:f8yW&Q|&V&W,OR1Z+vQ&r!WR,s&sR,y&xT2],x2_R,}&yQ,|&yR2f,}Q'y!{R-y'ySsOtQ#dXT%ps#dQ#OTR'{#OQ#RUR'}#RQ){$uR/`){Q#UVR(Q#UQ#XWU(W#X(X.QQ(X#YR.Q(YQ-^'YR2r-^Q.u(yS3m.u3nR3n.vQ-e'`R2v-eY!rQ'`-e1o5{R'j!rQ/Q)eR4S/QU#_W%h*YU(_#_(`.RQ(`#`R.R(ZQ-a']R2t-at`OXst!V!Z#d%m&i&k&r&t&u&w,s,x2[2_S#hZ%eU#r`#h.[R.[(jQ(k#jQ.X(gW.a(k.X3X7RQ3X.YR7R3YQ)n$lR/W)nQ$phR)t$pQ$`cU)a$`-|<jQ-|<WR<j)qQ/q*]W4c/q4d7t9sU4d/r/s/tS7t4e4fR9s7u$e*Q$v(u)c)e*[*e*t*u+Q+R+V.l.m.o.p.q/_/g/i/k/v/|0d0e0v1e3f3g3h3}4R4[4g4h4l4|5O5R5S5W5r7]7^7_7`7e7f7h7i7j7p7w7z8U8X8Z9h9i9j9t9|:R:S:t:u:v:w:x:};R;e;j;v;y=p=}>O>Z>[Q/z*eU4k/z4m7xQ4m/|R7x4lS*o$|*ZR0Y*ox*S$v)e*t*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>O!d.j(u)c*[*e.l.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/h*S.j7ca7c3}7e7f7j9h:t:w;yQ0a*tQ3i.lU4}0a3i9kR9k7e|*U$v)e*t*u+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>O!h.k(u)c*[*e.l.m.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/j*U.k7de7d3}7e7f7j9h9i:t:u:w;yQ0c*uQ3j.mU5P0c3j9lR9l7fQ*z%UR0g*zQ5]0vR8Y5]Q+_%kR0u+_Q5v1jS8j5v:[R:[8kQ,[&_R1m,[Q5{1oR8m5{Q1{,fS6]1{8zR8z6_Q1U+rW5h1U5j8a:VQ5j1XQ8a5iR:V8bQ+w&QR1[+wQ2_,xR6m2_YrOXst#dQ&v!ZQ+a%mQ,r&rQ,t&tQ,u&uQ,w&wQ2Y,sS2],x2_R6l2[Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'q!uQ+`%lQ+l%zQ,Q&XQ,h&mQ-P&|W-p'k's't'wQ-w'oQ0X*nQ1P+mQ1c,PS2O,i,lQ2g-OQ2h-RQ2i-SQ2}-oW3P-r-s-v-xQ5a1QQ5m1_Q5q1eQ6V1uQ6a2QQ6k2ZU6z3O3R3UQ6}3SQ8]5bQ8e5oQ8g5rQ8l5zQ8u6WQ8{6`S9[6{7PQ9^7OQ:W8cQ:b8vQ:g8|Q:n9]Q;U:XQ;]:cQ;a:oQ;l;VR;o;^Q%zyQ'd!iQ'o!uU+m%{%|%}Q-W'VU-k'e'f'gS-o'k'uQ0Q*jS1Q+n+oQ2o-YS2{-l-mQ3S-tS4p0R0UQ5b1RQ6v2uQ6y2|Q7O3TU7{4r4s4vQ9z7}R;O9{S$wi>PR*{%VU%Ui%V>PR0f*yQ$viS(u#v+iS)c$b$cQ)e$dQ*[$xS*e${*YQ*t%OQ*u%QQ+Q%^Q+R%_Q+V%cQ.l<oQ.m<qQ.o<uQ.p<wQ.q<yQ/_)yQ/g*RQ/i*TQ/k*VQ/v*aS/|*g/mQ0d*wQ0e*xl0v+f,V.f1i1q3c6S7W8q9b:`:r;[;dQ1e,SQ3f=SQ3g=UQ3h=XS3}<l<mQ4R/PS4[/d4^Q4g/xQ4h/yQ4l/{Q4|0`Q5O0bQ5R0iQ5S0jQ5W0oQ5r1fQ7]=]Q7^=_Q7_=aQ7`=cQ7e<pQ7f<rQ7h<vQ7i<xQ7j<zQ7p4_Q7w4jQ7z4oQ8U5QQ8X5[Q8Z5_Q9h=YQ9i=TQ9j=VQ9t7vQ9|8QQ:R8VQ:S8[Q:t=^Q:u=`Q:v=bQ:w=dQ:x9pQ:}9yQ;R:PQ;e=gQ;j;QQ;v;kQ;y=hQ=p>PQ=}>XQ>O>YQ>Z>]R>[>^Q+O%]Q.n<sR7g<tnpOXst!Z#d%m&r&t&u&w,s,x2[2_Q!fPS#fZ#oQ&|!`W'h!o*i0]4zQ(P#SQ)Q#{Q)r$nS,l&k&nQ,q&oQ-O&{S-T'T/nQ-g'bQ.x)OQ/[)sQ0s+]Q0y+gQ2W,pQ2y-iQ3a.gQ4W/VQ5U0lQ6Q1rQ6c2SQ6d2TQ6h2VQ6j2XQ6o2aQ7Z3dQ7m4TQ8s6TQ9P6eQ9Q6fQ9S6iQ9f7[Q:a8tR:k9T#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'b)O*i+]+g,p,s,x-i.g/n0]0l1r2S2T2V2X2[2_2a3d4z6T6e6f6i7[8t9TQ#YWQ#eYQ%quQ%svS%uw!gS(S#W(VQ(Y#ZQ(t#uQ(y#xQ)R$OQ)S$PQ)T$QQ)U$RQ)V$SQ)W$TQ)X$UQ)Y$VQ)Z$WQ)[$XQ)^$ZQ)`$_Q)b$aQ)g$eW)q$n)s/V4TQ+d%tQ+x&RS-Z'X2pQ-x'rS-}(T.PQ.S(]Q.U(dQ.s(xQ.v(zQ.z<UQ.|<XQ.}<YQ/O<]Q/b)}Q0p+XQ2k-UQ2n-XQ3O-qQ3V.VQ3k.tQ3p<^Q3q<_Q3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{.{Q3|<kQ4P<nQ4Q<{Q4X<iQ5X0rQ5c1SQ6u=OQ6{3QQ7Q3WQ7a3lQ7b=PQ7k=RQ7l=ZQ8k5wQ9X6sQ9]6|Q9g=[Q9m=eQ9n=fQ:o9_Q;W:ZQ;`:mQ<W#SR=v>SR#[WR'Z!el!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}S'V!e-]U*j$|*Z*oS-Y'W'_S0U*k*qQ0^*rQ2u-cQ4v0[R4{0_R({#xQ!fQT-d'`-e]!qQ!r'`-e1o5{Q#p]R'i<VR)f$dY!uQ'`-e1o5{Q'k!rS'u!v!yS'w!z5}S-t'l'mQ-v'nR3T-uT#kZ%eS#jZ%eS%km,oU(g#h#i#lS.Y(h(iQ.^(jQ0t+^Q3Y.ZU3Z.[.]._S7S3[3]R9`7Td#^W#W#Z%h(T(^*Y+Z.T/mr#gZm#h#i#l%e(h(i(j+^.Z.[.]._3[3]7TS*]$x*bQ/t*^Q2U,oQ2l-VQ4`/pQ6q2dQ7s4aQ9W6rT=m'X+[V#aW%h*YU#`W%h*YS(U#W(^U(Z#Z+Z/mS-['X+[T.O(T.TV'^!e%i*ZQ$lfR)x$qT)m$l)nR4V/UT*_$x*bT*h${*YQ0w+fQ1g,VQ3_.fQ5t1iQ6P1qQ7X3cQ8r6SQ9c7WQ:^8qQ:p9bQ;Z:`Q;c:rQ;n;[R;q;dnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&l!VR,h&itmOXst!U!V!Z#d%m&i&r&t&u&w,s,x2[2_R,o&oT%lm,oR1k,XR,g&gQ&U|S+}&V&WR1^,OR+s&PT&p!W&sT&q!W&sT2^,x2_",
        nodeNames: "\u26a0 ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
        maxTerm: 380,
        context: VD,
        nodeProps: [
          ["isolate", -8, 5, 6, 14, 37, 39, 51, 53, 55, ""],
          ["group", -26, 9, 17, 19, 68, 207, 211, 215, 216, 218, 221, 224, 234, 237, 243, 245, 247, 249, 252, 258, 264, 266, 268, 270, 272, 274, 275, "Statement", -34, 13, 14, 32, 35, 36, 42, 51, 54, 55, 57, 62, 70, 72, 76, 80, 82, 84, 85, 110, 111, 120, 121, 136, 139, 141, 142, 143, 144, 145, 147, 148, 167, 169, 171, "Expression", -23, 31, 33, 37, 41, 43, 45, 173, 175, 177, 178, 180, 181, 182, 184, 185, 186, 188, 189, 190, 201, 203, 205, 206, "Type", -3, 88, 103, 109, "ClassItem"],
          ["openedBy", 23, "<", 38, "InterpolationStart", 56, "[", 60, "{", 73, "(", 160, "JSXStartCloseTag"],
          ["closedBy", -2, 24, 168, ">", 40, "InterpolationEnd", 50, "]", 61, "}", 74, ")", 165, "JSXEndTag"]
        ],
        propSources: [RD],
        skippedNodes: [0, 5, 6, 278],
        repeatNodeCount: 37,
        tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
        tokenizers: [jD, lD, LD, GD, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, zD, new MD("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340), new MD("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)],
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
          get: DD => kD[DD] || -1
        }, {
          term: 343,
          get: DD => dD[DD] || -1
        }, {
          term: 95,
          get: DD => YD[DD] || -1
        }],
        tokenPrec: 15201
      });
    var sD = cD(40398),
      ED = cD(40379),
      eD = cD(40384),
      uD = cD(40373);
    const hD = [(0, uD.v)("function ${name}(${params}) {\n\t${}\n}", {
        label: "function",
        detail: "definition",
        type: "keyword"
      }), (0, uD.v)("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}", {
        label: "for",
        detail: "loop",
        type: "keyword"
      }), (0, uD.v)("for (let ${name} of ${collection}) {\n\t${}\n}", {
        label: "for",
        detail: "of loop",
        type: "keyword"
      }), (0, uD.v)("do {\n\t${}\n} while (${})", {
        label: "do",
        detail: "loop",
        type: "keyword"
      }), (0, uD.v)("while (${}) {\n\t${}\n}", {
        label: "while",
        detail: "loop",
        type: "keyword"
      }), (0, uD.v)("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
        label: "try",
        detail: "/ catch block",
        type: "keyword"
      }), (0, uD.v)("if (${}) {\n\t${}\n}", {
        label: "if",
        detail: "block",
        type: "keyword"
      }), (0, uD.v)("if (${}) {\n\t${}\n} else {\n\t${}\n}", {
        label: "if",
        detail: "/ else block",
        type: "keyword"
      }), (0, uD.v)("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
        label: "class",
        detail: "definition",
        type: "keyword"
      }), (0, uD.v)('import {${names}} from "${module}"\n${}', {
        label: "import",
        detail: "named",
        type: "keyword"
      }), (0, uD.v)('import ${name} from "${module}"\n${}', {
        label: "import",
        detail: "default",
        type: "keyword"
      })],
      rD = hD.concat([(0, uD.v)("interface ${name} {\n\t${}\n}", {
        label: "interface",
        detail: "definition",
        type: "keyword"
      }), (0, uD.v)("type ${name} = ${type}", {
        label: "type",
        detail: "definition",
        type: "keyword"
      }), (0, uD.v)("enum ${name} {\n\t${}\n}", {
        label: "enum",
        detail: "definition",
        type: "keyword"
      })]),
      AD = new ID.q,
      FD = new Set(["Script", "Block", "FunctionExpression", "FunctionDeclaration", "ArrowFunction", "MethodDeclaration", "ForStatement"]);

    function DC(DD) {
      return (CD, cD) => {
        let ID = CD.node.getChild("VariableDefinition");
        return ID && cD(ID, DD), !0
      }
    }
    const CC = ["FunctionDeclaration"],
      cC = {
        FunctionDeclaration: DC("function"),
        ClassDeclaration: DC("class"),
        ClassExpression: () => !0,
        EnumDeclaration: DC("constant"),
        TypeAliasDeclaration: DC("type"),
        NamespaceDeclaration: DC("namespace"),
        VariableDefinition(DD, CD) {
          DD.matchContext(CC) || CD(DD, "variable")
        },
        TypeDefinition(DD, CD) {
          CD(DD, "type")
        },
        __proto__: null
      };

    function IC(DD, CD) {
      let cD = AD.get(CD);
      if (cD) return cD;
      let pD = [],
        iD = !0;

      function fD(CD, cD) {
        let ID = DD.sliceString(CD.from, CD.to);
        pD.push({
          label: ID,
          type: cD
        })
      }
      return CD.cursor(ID.f.IncludeAnonymous).iterate((CD => {
        if (iD) iD = !1;
        else if (CD.name) {
          let DD = cC[CD.name];
          if (DD && DD(CD, fD) || FD.has(CD.name)) return !1
        } else if (CD.to - CD.from > 8192) {
          for (let cD of IC(DD, CD.node)) pD.push(cD);
          return !1
        }
      })), AD.set(CD, pD), pD
    }
    const pC = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
      iC = ["TemplateString", "String", "RegExp", "LineComment", "BlockComment", "VariableDefinition", "TypeDefinition", "Label", "PropertyDefinition", "PropertyName", "PrivatePropertyDefinition", "PrivatePropertyName", "JSXText", "JSXAttributeValue", "JSXOpenTag", "JSXCloseTag", "JSXSelfClosingTag", ".", "?."];

    function fC(DD) {
      let CD = (0, sD.mb)(DD.state).resolveInner(DD.pos, -1);
      if (iC.indexOf(CD.name) > -1) return null;
      let cD = "VariableName" == CD.name || CD.to - CD.from < 20 && pC.test(DD.state.sliceDoc(CD.from, CD.to));
      if (!cD && !DD.explicit) return null;
      let ID = [];
      for (let pD = CD; pD; pD = pD.parent) FD.has(pD.name) && (ID = ID.concat(IC(DD.state.doc, pD)));
      return {
        options: ID,
        from: cD ? CD.from : DD.pos,
        validFor: pC
      }
    }
    const bC = sD.i.define({
        name: "javascript",
        parser: WD.configure({
          props: [sD.Y.add({
            IfStatement: (0, sD.r)({
              except: /^\s*({|else\b)/
            }),
            TryStatement: (0, sD.r)({
              except: /^\s*({|catch\b|finally\b)/
            }),
            LabeledStatement: sD.B,
            SwitchBody: DD => {
              let CD = DD.textAfter,
                cD = /^\s*\}/.test(CD),
                ID = /^\s*(case|default)\b/.test(CD);
              return DD.baseIndent + (cD ? 0 : ID ? 1 : 2) * DD.unit
            },
            Block: (0, sD.z)({
              closing: "}"
            }),
            ArrowFunction: DD => DD.baseIndent + DD.unit,
            "TemplateString BlockComment": () => null,
            "Statement Property": (0, sD.r)({
              except: /^\s*{/
            }),
            JSXElement(DD) {
              let CD = /^\s*<\//.test(DD.textAfter);
              return DD.lineIndent(DD.node.from) + (CD ? 0 : DD.unit)
            },
            JSXEscape(DD) {
              let CD = /\s*\}/.test(DD.textAfter);
              return DD.lineIndent(DD.node.from) + (CD ? 0 : DD.unit)
            },
            "JSXOpenTag JSXSelfClosingTag": DD => DD.column(DD.node.from) + DD.unit
          }), sD.P.add({
            "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": sD.H,
            BlockComment: DD => ({
              from: DD.from + 2,
              to: DD.to - 2
            }),
            JSXElement(DD) {
              let CD = DD.firstChild;
              if (!CD || "JSXSelfClosingTag" == CD.name) return null;
              let cD = DD.lastChild;
              return {
                from: CD.to,
                to: cD.type.isError ? DD.to : cD.from
              }
            },
            "JSXSelfClosingTag JSXOpenTag"(DD) {
              var CD;
              let cD = null === (CD = DD.firstChild) || void 0 === CD ? void 0 : CD.nextSibling,
                ID = DD.lastChild;
              return !cD || cD.type.isError ? null : {
                from: cD.to,
                to: ID.type.isError ? DD.to : ID.from
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
      QC = {
        test: DD => /^JSX/.test(DD.name),
        facet: (0, sD.x)({
          commentTokens: {
            block: {
              open: "{/*",
              close: "*/}"
            }
          }
        })
      },
      wC = bC.configure({
        dialect: "ts"
      }, "typescript"),
      SC = bC.configure({
        dialect: "jsx",
        props: [sD.ib.add((DD => DD.isTop ? [QC] : void 0))]
      }),
      BC = bC.configure({
        dialect: "jsx ts",
        props: [sD.ib.add((DD => DD.isTop ? [QC] : void 0))]
      }, "typescript");
    let yC = DD => ({
      label: DD,
      type: "keyword"
    });
    const MC = "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(yC),
      tC = MC.concat(["declare", "implements", "private", "protected", "public"].map(yC));

    function ZC() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        CD = DD.jsx ? DD.typescript ? BC : SC : DD.typescript ? wC : bC,
        cD = DD.typescript ? rD.concat(tC) : hD.concat(MC);
      return new sD.m(CD, [bC.data.of({
        autocomplete: (0, uD.r)(iC, (0, uD.m)(cD))
      }), bC.data.of({
        autocomplete: fC
      }), DD.jsx ? NC : []])
    }

    function oC(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : DD.length;
      for (let ID = null === CD || void 0 === CD ? void 0 : CD.firstChild; ID; ID = ID.nextSibling)
        if ("JSXIdentifier" == ID.name || "JSXBuiltin" == ID.name || "JSXNamespacedName" == ID.name || "JSXMemberExpression" == ID.name) return DD.sliceString(ID.from, Math.min(ID.to, cD));
      return ""
    }
    const vC = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      NC = eD.m.inputHandler.of(((DD, CD, cD, ID, pD) => {
        if ((vC ? DD.composing : DD.compositionStarted) || DD.state.readOnly || CD != cD || ">" != ID && "/" != ID || !bC.isActiveAt(DD.state, CD, -1)) return !1;
        let iD = pD(),
          {
            state: fD
          } = iD,
          bD = fD.changeByRange((DD => {
            var CD;
            let cD, {
                head: pD
              } = DD,
              iD = (0, sD.mb)(fD).resolveInner(pD - 1, -1);
            if ("JSXStartTag" == iD.name && (iD = iD.parent), fD.doc.sliceString(pD - 1, pD) != ID || "JSXAttributeValue" == iD.name && iD.to > pD);
            else {
              if (">" == ID && "JSXFragmentTag" == iD.name) return {
                range: DD,
                changes: {
                  from: pD,
                  insert: "</>"
                }
              };
              if ("/" == ID && "JSXStartCloseTag" == iD.name) {
                let DD = iD.parent,
                  ID = DD.parent;
                if (ID && DD.from == pD - 2 && ((cD = oC(fD.doc, ID.firstChild, pD)) || "JSXFragmentTag" == (null === (CD = ID.firstChild) || void 0 === CD ? void 0 : CD.name))) {
                  let DD = `${cD}>`;
                  return {
                    range: ED.i.cursor(pD + DD.length, -1),
                    changes: {
                      from: pD,
                      insert: DD
                    }
                  }
                }
              } else if (">" == ID) {
                let CD = function(DD) {
                  for (;;) {
                    if ("JSXOpenTag" == DD.name || "JSXSelfClosingTag" == DD.name || "JSXFragmentTag" == DD.name) return DD;
                    if ("JSXEscape" == DD.name || !DD.parent) return null;
                    DD = DD.parent
                  }
                }(iD);
                if (CD && "JSXOpenTag" == CD.name && !/^\/?>|^<\//.test(fD.doc.sliceString(pD, pD + 2)) && (cD = oC(fD.doc, CD, pD))) return {
                  range: DD,
                  changes: {
                    from: pD,
                    insert: `</${cD}>`
                  }
                }
              }
            }
            return {
              range: DD
            }
          }));
        return !bD.changes.empty && (DD.dispatch([iD, fD.update(bD, {
          userEvent: "input.complete",
          scrollIntoView: !0
        })]), !0)
      }))
  },
  40398: (DD, CD, cD) => {
    cD.d(CD, {
      B: () => YD,
      F: () => NC,
      H: () => hD,
      L: () => wC,
      P: () => uD,
      S: () => vD,
      V: () => KD,
      W: () => VD,
      Y: () => jD,
      ab: () => ED,
      c: () => XC,
      eb: () => aD,
      f: () => zD,
      gb: () => JD,
      hb: () => dC,
      i: () => tD,
      ib: () => BD,
      jb: () => PC,
      lb: () => oD,
      m: () => xD,
      mb: () => ZD,
      o: () => TC,
      r: () => WD,
      v: () => xC,
      x: () => SD,
      z: () => kD
    });
    var ID, pD = cD(40403),
      iD = cD(40379),
      fD = cD(40384),
      bD = cD(40406),
      QD = cD(40387);
    const wD = new pD.g;

    function SD(DD) {
      return iD.l.define({
        combine: DD ? CD => CD.concat(DD) : void 0
      })
    }
    const BD = new pD.g;
    class yD {
      constructor(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this.data = DD, this.name = ID, iD.j.prototype.hasOwnProperty("tree") || Object.defineProperty(iD.j.prototype, "tree", {
          get() {
            return ZD(this)
          }
        }), this.parser = CD, this.extension = [UD.of(this), iD.j.languageData.of(((DD, CD, cD) => {
          let ID = MD(DD, CD, cD),
            pD = ID.type.prop(wD);
          if (!pD) return [];
          let iD = DD.facet(pD),
            fD = ID.type.prop(BD);
          if (fD) {
            let pD = ID.resolve(CD - ID.from, cD);
            for (let CD of fD)
              if (CD.test(pD, DD)) {
                let cD = DD.facet(CD.facet);
                return "replace" == CD.type ? cD : cD.concat(iD)
              }
          }
          return iD
        }))].concat(cD)
      }
      isActiveAt(DD, CD) {
        return MD(DD, CD, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1).type.prop(wD) == this.data
      }
      findRegions(DD) {
        let CD = DD.facet(UD);
        if ((null === CD || void 0 === CD ? void 0 : CD.data) == this.data) return [{
          from: 0,
          to: DD.doc.length
        }];
        if (!CD || !CD.allowsNesting) return [];
        let cD = [],
          ID = (DD, CD) => {
            if (DD.prop(wD) == this.data) return void cD.push({
              from: CD,
              to: CD + DD.length
            });
            let iD = DD.prop(pD.g.mounted);
            if (iD) {
              if (iD.tree.prop(wD) == this.data) {
                if (iD.overlay)
                  for (let DD of iD.overlay) cD.push({
                    from: DD.from + CD,
                    to: DD.to + CD
                  });
                else cD.push({
                  from: CD,
                  to: CD + DD.length
                });
                return
              }
              if (iD.overlay) {
                let DD = cD.length;
                if (ID(iD.tree, iD.overlay[0].from + CD), cD.length > DD) return
              }
            }
            for (let cD = 0; cD < DD.children.length; cD++) {
              let iD = DD.children[cD];
              iD instanceof pD.x && ID(iD, DD.positions[cD] + CD)
            }
          };
        return ID(ZD(DD), 0), cD
      }
      get allowsNesting() {
        return !0
      }
    }

    function MD(DD, CD, cD) {
      let ID = DD.facet(UD),
        iD = ZD(DD).topNode;
      if (!ID || ID.allowsNesting)
        for (let fD = iD; fD; fD = fD.enter(CD, cD, pD.f.ExcludeBuffers | pD.f.EnterBracketed)) fD.type.isTop && (iD = fD);
      return iD
    }
    yD.setState = iD.D.define();
    class tD extends yD {
      constructor(DD, CD, cD) {
        super(DD, CD, [], cD), this.parser = CD
      }
      static define(DD) {
        let CD = SD(DD.languageData);
        return new tD(CD, DD.parser.configure({
          props: [wD.add((DD => DD.isTop ? CD : void 0))]
        }), DD.name)
      }
      configure(DD, CD) {
        return new tD(this.data, this.parser.configure(DD), CD || this.name)
      }
      get allowsNesting() {
        return this.parser.hasWrappers()
      }
    }

    function ZD(DD) {
      let CD = DD.field(yD.state, !1);
      return CD ? CD.tree : pD.x.empty
    }

    function oD(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DD.doc.length;
      var cD;
      return (null === (cD = DD.field(yD.state, !1)) || void 0 === cD ? void 0 : cD.context.isDone(CD)) || !1
    }

    function vD(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DD.viewport.to,
        cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        ID = function(DD, CD) {
          let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
          var ID;
          let pD = null === (ID = DD.field(yD.state, !1)) || void 0 === ID ? void 0 : ID.context;
          if (!pD) return null;
          let iD = pD.viewport;
          pD.updateViewport({
            from: 0,
            to: CD
          });
          let fD = pD.isDone(CD) || pD.work(cD, CD) ? pD.tree : null;
          return pD.updateViewport(iD), fD
        }(DD.state, CD, cD);
      return ID != ZD(DD.state) && DD.dispatch({}), !!ID
    }
    class ND {
      constructor(DD) {
        this.doc = DD, this.cursorPos = 0, this.string = "", this.cursor = DD.iter()
      }
      get length() {
        return this.doc.length
      }
      syncTo(DD) {
        return this.string = this.cursor.next(DD - this.cursorPos).value, this.cursorPos = DD + this.string.length, this.cursorPos - this.string.length
      }
      chunk(DD) {
        return this.syncTo(DD), this.string
      }
      get lineChunks() {
        return !0
      }
      read(DD, CD) {
        let cD = this.cursorPos - this.string.length;
        return DD < cD || CD >= this.cursorPos ? this.doc.sliceString(DD, CD) : this.string.slice(DD - cD, CD - cD)
      }
    }
    let gD = null;
    class XD {
      constructor(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          ID = arguments.length > 3 ? arguments[3] : void 0,
          pD = arguments.length > 4 ? arguments[4] : void 0,
          iD = arguments.length > 5 ? arguments[5] : void 0,
          fD = arguments.length > 6 ? arguments[6] : void 0,
          bD = arguments.length > 7 ? arguments[7] : void 0;
        this.parser = DD, this.state = CD, this.fragments = cD, this.tree = ID, this.treeLen = pD, this.viewport = iD, this.skipped = fD, this.scheduleOn = bD, this.parse = null, this.tempSkipped = []
      }
      static create(DD, CD, cD) {
        return new XD(DD, CD, [], pD.x.empty, 0, cD, [], null)
      }
      startParse() {
        return this.parser.startParse(new ND(this.state.doc), this.fragments)
      }
      work(DD, CD) {
        return null != CD && CD >= this.state.doc.length && (CD = void 0), this.tree != pD.x.empty && this.isDone(null !== CD && void 0 !== CD ? CD : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext((() => {
          var cD;
          if ("number" == typeof DD) {
            let CD = Date.now() + DD;
            DD = () => Date.now() > CD
          }
          for (this.parse || (this.parse = this.startParse()), null != CD && (null == this.parse.stoppedAt || this.parse.stoppedAt > CD) && CD < this.state.doc.length && this.parse.stopAt(CD);;) {
            let ID = this.parse.advance();
            if (ID) {
              if (this.fragments = this.withoutTempSkipped(pD.t.addTree(ID, this.fragments, null != this.parse.stoppedAt)), this.treeLen = null !== (cD = this.parse.stoppedAt) && void 0 !== cD ? cD : this.state.doc.length, this.tree = ID, this.parse = null, !(this.treeLen < (null !== CD && void 0 !== CD ? CD : this.state.doc.length))) return !0;
              this.parse = this.startParse()
            }
            if (DD()) return !1
          }
        }))
      }
      takeTree() {
        let DD, CD;
        this.parse && (DD = this.parse.parsedPos) >= this.treeLen && ((null == this.parse.stoppedAt || this.parse.stoppedAt > DD) && this.parse.stopAt(DD), this.withContext((() => {
          for (; !(CD = this.parse.advance()););
        })), this.treeLen = DD, this.tree = CD, this.fragments = this.withoutTempSkipped(pD.t.addTree(this.tree, this.fragments, !0)), this.parse = null)
      }
      withContext(DD) {
        let CD = gD;
        gD = this;
        try {
          return DD()
        } finally {
          gD = CD
        }
      }
      withoutTempSkipped(DD) {
        for (let CD; CD = this.tempSkipped.pop();) DD = mD(DD, CD.from, CD.to);
        return DD
      }
      changes(DD, CD) {
        let {
          fragments: cD,
          tree: ID,
          treeLen: iD,
          viewport: fD,
          skipped: bD
        } = this;
        if (this.takeTree(), !DD.empty) {
          let CD = [];
          if (DD.iterChangedRanges(((DD, cD, ID, pD) => CD.push({
              fromA: DD,
              toA: cD,
              fromB: ID,
              toB: pD
            }))), cD = pD.t.applyChanges(cD, CD), ID = pD.x.empty, iD = 0, fD = {
              from: DD.mapPos(fD.from, -1),
              to: DD.mapPos(fD.to, 1)
            }, this.skipped.length) {
            bD = [];
            for (let CD of this.skipped) {
              let cD = DD.mapPos(CD.from, 1),
                ID = DD.mapPos(CD.to, -1);
              cD < ID && bD.push({
                from: cD,
                to: ID
              })
            }
          }
        }
        return new XD(this.parser, CD, cD, ID, iD, fD, bD, this.scheduleOn)
      }
      updateViewport(DD) {
        if (this.viewport.from == DD.from && this.viewport.to == DD.to) return !1;
        this.viewport = DD;
        let CD = this.skipped.length;
        for (let cD = 0; cD < this.skipped.length; cD++) {
          let {
            from: CD,
            to: ID
          } = this.skipped[cD];
          CD < DD.to && ID > DD.from && (this.fragments = mD(this.fragments, CD, ID), this.skipped.splice(cD--, 1))
        }
        return !(this.skipped.length >= CD) && (this.reset(), !0)
      }
      reset() {
        this.parse && (this.takeTree(), this.parse = null)
      }
      skipUntilInView(DD, CD) {
        this.skipped.push({
          from: DD,
          to: CD
        })
      }
      static getSkippingParser(DD) {
        return new class extends pD.s {
          createParse(CD, cD, ID) {
            let iD = ID[0].from,
              fD = ID[ID.length - 1].to;
            return {
              parsedPos: iD,
              advance() {
                let CD = gD;
                if (CD) {
                  for (let DD of ID) CD.tempSkipped.push(DD);
                  DD && (CD.scheduleOn = CD.scheduleOn ? Promise.all([CD.scheduleOn, DD]) : DD)
                }
                return this.parsedPos = fD, new pD.x(pD.m.none, [], [], fD - iD)
              },
              stoppedAt: null,
              stopAt() {}
            }
          }
        }
      }
      isDone(DD) {
        DD = Math.min(DD, this.state.doc.length);
        let CD = this.fragments;
        return this.treeLen >= DD && CD.length && 0 == CD[0].from && CD[0].to >= DD
      }
      static get() {
        return gD
      }
    }

    function mD(DD, CD, cD) {
      return pD.t.applyChanges(DD, [{
        fromA: CD,
        toA: cD,
        fromB: CD,
        toB: cD
      }])
    }
    class nD {
      constructor(DD) {
        this.context = DD, this.tree = DD.tree
      }
      apply(DD) {
        if (!DD.docChanged && this.tree == this.context.tree) return this;
        let CD = this.context.changes(DD.changes, DD.state),
          cD = this.context.treeLen == DD.startState.doc.length ? void 0 : Math.max(DD.changes.mapPos(this.context.treeLen), CD.viewport.to);
        return CD.work(20, cD) || CD.takeTree(), new nD(CD)
      }
      static init(DD) {
        let CD = Math.min(3e3, DD.doc.length),
          cD = XD.create(DD.facet(UD).parser, DD, {
            from: 0,
            to: CD
          });
        return cD.work(20, CD) || cD.takeTree(), new nD(cD)
      }
    }
    yD.state = iD.F.define({
      create: nD.init,
      update(DD, CD) {
        for (let cD of CD.effects)
          if (cD.is(yD.setState)) return cD.value;
        return CD.startState.facet(UD) != CD.state.facet(UD) ? nD.init(CD.state) : DD.apply(CD)
      }
    });
    let OD = DD => {
      let CD = setTimeout((() => DD()), 500);
      return () => clearTimeout(CD)
    };
    "undefined" != typeof requestIdleCallback && (OD = DD => {
      let CD = -1,
        cD = setTimeout((() => {
          CD = requestIdleCallback(DD, {
            timeout: 400
          })
        }), 100);
      return () => CD < 0 ? clearTimeout(cD) : cancelIdleCallback(CD)
    });
    const PD = "undefined" != typeof navigator && (null === (ID = navigator.scheduling) || void 0 === ID ? void 0 : ID.isInputPending) ? () => navigator.scheduling.isInputPending() : null,
      HD = fD.u.fromClass(class {
        constructor(DD) {
          this.view = DD, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork()
        }
        update(DD) {
          let CD = this.view.state.field(yD.state).context;
          (CD.updateViewport(DD.view.viewport) || this.view.viewport.to > CD.treeLen) && this.scheduleWork(), (DD.docChanged || DD.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(CD)
        }
        scheduleWork() {
          if (this.working) return;
          let {
            state: DD
          } = this.view, CD = DD.field(yD.state);
          CD.tree == CD.context.tree && CD.context.isDone(DD.doc.length) || (this.working = OD(this.work))
        }
        work(DD) {
          this.working = null;
          let CD = Date.now();
          if (this.chunkEnd < CD && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = CD + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
          let {
            state: cD,
            viewport: {
              to: ID
            }
          } = this.view, pD = cD.field(yD.state);
          if (pD.tree == pD.context.tree && pD.context.isDone(ID + 1e5)) return;
          let iD = Date.now() + Math.min(this.chunkBudget, 100, DD && !PD ? Math.max(25, DD.timeRemaining() - 5) : 1e9),
            fD = pD.context.treeLen < ID && cD.doc.length > ID + 1e3,
            bD = pD.context.work((() => PD && PD() || Date.now() > iD), ID + (fD ? 0 : 1e5));
          this.chunkBudget -= Date.now() - CD, (bD || this.chunkBudget <= 0) && (pD.context.takeTree(), this.view.dispatch({
            effects: yD.setState.of(new nD(pD.context))
          })), this.chunkBudget > 0 && (!bD || fD) && this.scheduleWork(), this.checkAsyncSchedule(pD.context)
        }
        checkAsyncSchedule(DD) {
          DD.scheduleOn && (this.workScheduled++, DD.scheduleOn.then((() => this.scheduleWork())).catch((DD => (0, fD.fb)(this.view.state, DD))).then((() => this.workScheduled--)), DD.scheduleOn = null)
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
      UD = iD.l.define({
        combine: DD => DD.length ? DD[0] : null,
        enables: DD => [yD.state, HD, fD.m.contentAttributes.compute([DD], (CD => {
          let cD = CD.facet(DD);
          return cD && cD.name ? {
            "data-language": cD.name
          } : {}
        }))]
      });
    class xD {
      constructor(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        this.language = DD, this.support = CD, this.extension = [DD, CD]
      }
    }
    const qD = iD.l.define(),
      JD = iD.l.define({
        combine: DD => {
          if (!DD.length) return "  ";
          let CD = DD[0];
          if (!CD || /\S/.test(CD) || Array.from(CD).some((DD => DD != CD[0]))) throw new Error("Invalid indent unit: " + JSON.stringify(DD[0]));
          return CD
        }
      });

    function KD(DD) {
      let CD = DD.facet(JD);
      return 9 == CD.charCodeAt(0) ? DD.tabSize * CD.length : CD.length
    }

    function aD(DD, CD) {
      let cD = "",
        ID = DD.tabSize,
        pD = DD.facet(JD)[0];
      if ("\t" == pD) {
        for (; CD >= ID;) cD += "\t", CD -= ID;
        pD = " "
      }
      for (let iD = 0; iD < CD; iD++) cD += pD;
      return cD
    }

    function VD(DD, CD) {
      DD instanceof iD.j && (DD = new zD(DD));
      for (let ID of DD.state.facet(qD)) {
        let cD = ID(DD, CD);
        if (void 0 !== cD) return cD
      }
      let cD = ZD(DD.state);
      return cD.length >= CD ? function(DD, CD, cD) {
        let ID = CD.resolveStack(cD),
          pD = CD.resolveInner(cD, -1).resolve(cD, 0).enterUnfinishedNodesBefore(cD);
        if (pD != ID.node) {
          let DD = [];
          for (let CD = pD; CD && !(CD.from < ID.node.from || CD.to > ID.node.to || CD.from == ID.node.from && CD.type == ID.node.type); CD = CD.parent) DD.push(CD);
          for (let CD = DD.length - 1; CD >= 0; CD--) ID = {
            node: DD[CD],
            next: ID
          }
        }
        return lD(ID, DD, cD)
      }(DD, cD, CD) : null
    }
    class zD {
      constructor(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.state = DD, this.options = CD, this.unit = KD(DD)
      }
      lineAt(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          cD = this.state.doc.lineAt(DD),
          {
            simulateBreak: ID,
            simulateDoubleBreak: pD
          } = this.options;
        return null != ID && ID >= cD.from && ID <= cD.to ? pD && ID == DD ? {
          text: "",
          from: DD
        } : (CD < 0 ? ID < DD : ID <= DD) ? {
          text: cD.text.slice(ID - cD.from),
          from: ID
        } : {
          text: cD.text.slice(0, ID - cD.from),
          from: cD.from
        } : cD
      }
      textAfterPos(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (this.options.simulateDoubleBreak && DD == this.options.simulateBreak) return "";
        let {
          text: cD,
          from: ID
        } = this.lineAt(DD, CD);
        return cD.slice(DD - ID, Math.min(cD.length, DD + 100 - ID))
      }
      column(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: cD,
            from: ID
          } = this.lineAt(DD, CD),
          pD = this.countColumn(cD, DD - ID),
          iD = this.options.overrideIndentation ? this.options.overrideIndentation(ID) : -1;
        return iD > -1 && (pD += iD - this.countColumn(cD, cD.search(/\S|$/))), pD
      }
      countColumn(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DD.length;
        return (0, iD.Y)(DD, this.state.tabSize, CD)
      }
      lineIndent(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: cD,
            from: ID
          } = this.lineAt(DD, CD),
          pD = this.options.overrideIndentation;
        if (pD) {
          let DD = pD(ID);
          if (DD > -1) return DD
        }
        return this.countColumn(cD, cD.search(/\S|$/))
      }
      get simulatedBreak() {
        return this.options.simulateBreak || null
      }
    }
    const jD = new pD.g;

    function lD(DD, CD, cD) {
      for (let ID = DD; ID; ID = ID.next) {
        let DD = LD(ID.node);
        if (DD) return DD(GD.create(CD, cD, ID))
      }
      return 0
    }

    function LD(DD) {
      let CD = DD.type.prop(jD);
      if (CD) return CD;
      let cD, ID = DD.firstChild;
      if (ID && (cD = ID.type.prop(pD.g.closedBy))) {
        let CD = DD.lastChild,
          ID = CD && cD.indexOf(CD.name) > -1;
        return DD => dD(DD, !0, 1, void 0, ID && ! function(DD) {
          return DD.pos == DD.options.simulateBreak && DD.options.simulateDoubleBreak
        }(DD) ? CD.from : void 0)
      }
      return null == DD.parent ? TD : null
    }

    function TD() {
      return 0
    }
    class GD extends zD {
      constructor(DD, CD, cD) {
        super(DD.state, DD.options), this.base = DD, this.pos = CD, this.context = cD
      }
      get node() {
        return this.context.node
      }
      static create(DD, CD, cD) {
        return new GD(DD, CD, cD)
      }
      get textAfter() {
        return this.textAfterPos(this.pos)
      }
      get baseIndent() {
        return this.baseIndentFor(this.node)
      }
      baseIndentFor(DD) {
        let CD = this.state.doc.lineAt(DD.from);
        for (;;) {
          let cD = DD.resolve(CD.from);
          for (; cD.parent && cD.parent.from == cD.from;) cD = cD.parent;
          if (RD(cD, DD)) break;
          CD = this.state.doc.lineAt(cD.from)
        }
        return this.lineIndent(CD.from)
      }
      continue () {
        return lD(this.context.next, this.base, this.pos)
      }
    }

    function RD(DD, CD) {
      for (let cD = CD; cD; cD = cD.parent)
        if (DD == cD) return !0;
      return !1
    }

    function kD(DD) {
      let {
        closing: CD,
        align: cD = !0,
        units: ID = 1
      } = DD;
      return DD => dD(DD, cD, ID, CD)
    }

    function dD(DD, CD, cD, ID, pD) {
      let iD = DD.textAfter,
        fD = iD.match(/^\s*/)[0].length,
        bD = ID && iD.slice(fD, fD + ID.length) == ID || pD == DD.pos + fD,
        QD = CD ? function(DD) {
          let CD = DD.node,
            cD = CD.childAfter(CD.from),
            ID = CD.lastChild;
          if (!cD) return null;
          let pD = DD.options.simulateBreak,
            iD = DD.state.doc.lineAt(cD.from),
            fD = null == pD || pD <= iD.from ? iD.to : Math.min(iD.to, pD);
          for (let bD = cD.to;;) {
            let DD = CD.childAfter(bD);
            if (!DD || DD == ID) return null;
            if (!DD.type.isSkipped) {
              if (DD.from >= fD) return null;
              let CD = /^ */.exec(iD.text.slice(cD.to - iD.from))[0].length;
              return {
                from: cD.from,
                to: cD.to + CD
              }
            }
            bD = DD.to
          }
        }(DD) : null;
      return QD ? bD ? DD.column(QD.from) : DD.column(QD.to) : DD.baseIndent + (bD ? 0 : DD.unit * cD)
    }
    const YD = DD => DD.baseIndent;

    function WD() {
      let {
        except: DD,
        units: CD = 1
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return cD => {
        let ID = DD && DD.test(cD.textAfter);
        return cD.baseIndent + (ID ? 0 : CD * cD.unit)
      }
    }
    const sD = 200;

    function ED() {
      return iD.j.transactionFilter.of((DD => {
        if (!DD.docChanged || !DD.isUserEvent("input.type") && !DD.isUserEvent("input.complete")) return DD;
        let CD = DD.startState.languageDataAt("indentOnInput", DD.startState.selection.main.head);
        if (!CD.length) return DD;
        let cD = DD.newDoc,
          {
            head: ID
          } = DD.newSelection.main,
          pD = cD.lineAt(ID);
        if (ID > pD.from + sD) return DD;
        let iD = cD.sliceString(pD.from, ID);
        if (!CD.some((DD => DD.test(iD)))) return DD;
        let {
          state: fD
        } = DD, bD = -1, QD = [];
        for (let {
            head: wD
          }
          of fD.selection.df) {
          let DD = fD.doc.lineAt(wD);
          if (DD.from == bD) continue;
          bD = DD.from;
          let CD = VD(fD, DD.from);
          if (null == CD) continue;
          let cD = /^\s*/.exec(DD.text)[0],
            ID = aD(fD, CD);
          cD != ID && QD.push({
            from: DD.from,
            to: DD.from + cD.length,
            insert: ID
          })
        }
        return QD.length ? [DD, {
          changes: QD,
          sequential: !0
        }] : DD
      }))
    }
    const eD = iD.l.define(),
      uD = new pD.g;

    function hD(DD) {
      let CD = DD.firstChild,
        cD = DD.lastChild;
      return CD && CD.to < cD.from ? {
        from: CD.to,
        to: cD.type.isError ? DD.to : cD.from
      } : null
    }

    function rD(DD) {
      let CD = DD.lastChild;
      return CD && CD.to == DD.to && CD.type.isError
    }

    function AD(DD, CD, cD) {
      for (let ID of DD.facet(eD)) {
        let pD = ID(DD, CD, cD);
        if (pD) return pD
      }
      return function(DD, CD, cD) {
        let ID = ZD(DD);
        if (ID.length < cD) return null;
        let pD = null;
        for (let iD = ID.resolveStack(cD, 1); iD; iD = iD.next) {
          let fD = iD.node;
          if (fD.to <= cD || fD.from > cD) continue;
          if (pD && fD.from < CD) break;
          let bD = fD.type.prop(uD);
          if (bD && (fD.to < ID.length - 50 || ID.length == DD.doc.length || !rD(fD))) {
            let ID = bD(fD, DD);
            ID && ID.from <= cD && ID.from >= CD && ID.to > cD && (pD = ID)
          }
        }
        return pD
      }(DD, CD, cD)
    }

    function FD(DD, CD) {
      let cD = CD.mapPos(DD.from, 1),
        ID = CD.mapPos(DD.to, -1);
      return cD >= ID ? void 0 : {
        from: cD,
        to: ID
      }
    }
    const DC = iD.D.define({
        map: FD
      }),
      CC = iD.D.define({
        map: FD
      });

    function cC(DD) {
      let CD = [];
      for (let {
          head: cD
        }
        of DD.state.selection.df) CD.some((DD => DD.from <= cD && DD.to >= cD)) || CD.push(DD.lineBlockAt(cD));
      return CD
    }
    const IC = iD.F.define({
      create: () => fD.e.none,
      update(DD, CD) {
        CD.isUserEvent("delete") && CD.changes.iterChangedRanges(((CD, cD) => DD = pC(DD, CD, cD))), DD = DD.map(CD.changes);
        for (let cD of CD.effects)
          if (cD.is(DC) && !fC(DD, cD.value.from, cD.value.to)) {
            let {
              preparePlaceholder: ID
            } = CD.state.facet(BC), pD = ID ? fD.e.replace({
              widget: new ZC(ID(CD.state, cD.value))
            }) : tC;
            DD = DD.update({
              add: [pD.range(cD.value.from, cD.value.to)]
            })
          } else cD.is(CC) && (DD = DD.update({
            filter: (DD, CD) => cD.value.from != DD || cD.value.to != CD,
            filterFrom: cD.value.from,
            filterTo: cD.value.to
          }));
        return CD.selection && (DD = pC(DD, CD.selection.main.head)), DD
      },
      provide: DD => fD.m.qI.from(DD),
      toJSON(DD, CD) {
        let cD = [];
        return DD.between(0, CD.doc.length, ((DD, CD) => {
          cD.push(DD, CD)
        })), cD
      },
      fromJSON(DD) {
        if (!Array.isArray(DD) || DD.length % 2) throw new RangeError("Invalid JSON for fold state");
        let CD = [];
        for (let cD = 0; cD < DD.length;) {
          let ID = DD[cD++],
            pD = DD[cD++];
          if ("number" != typeof ID || "number" != typeof pD) throw new RangeError("Invalid JSON for fold state");
          CD.push(tC.range(ID, pD))
        }
        return fD.e.set(CD, !0)
      }
    });

    function pC(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : CD,
        ID = !1;
      return DD.between(CD, cD, ((DD, pD) => {
        DD < cD && pD > CD && (ID = !0)
      })), ID ? DD.update({
        filterFrom: CD,
        filterTo: cD,
        filter: (DD, ID) => DD >= cD || ID <= CD
      }) : DD
    }

    function iC(DD, CD, cD) {
      var ID;
      let pD = null;
      return null === (ID = DD.field(IC, !1)) || void 0 === ID || ID.between(CD, cD, ((DD, CD) => {
        (!pD || pD.from > DD) && (pD = {
          from: DD,
          to: CD
        })
      })), pD
    }

    function fC(DD, CD, cD) {
      let ID = !1;
      return DD.between(CD, CD, ((DD, pD) => {
        DD == CD && pD == cD && (ID = !0)
      })), ID
    }

    function bC(DD, CD) {
      return DD.field(IC, !1) ? CD : CD.concat(iD.D.appendConfig.of(yC()))
    }

    function QC(DD, CD) {
      let cD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        ID = DD.state.doc.lineAt(CD.from).number,
        pD = DD.state.doc.lineAt(CD.to).number;
      return fD.m.announce.of(`${DD.state.phrase(cD?"Folded lines":"Unfolded lines")} ${ID} ${DD.state.phrase("to")} ${pD}.`)
    }
    const wC = [{
        key: "Ctrl-Shift-[",
        mac: "Cmd-Alt-[",
        run: DD => {
          for (let CD of cC(DD)) {
            let cD = AD(DD.state, CD.from, CD.to);
            if (cD) return DD.dispatch({
              effects: bC(DD.state, [DC.of(cD), QC(DD, cD)])
            }), !0
          }
          return !1
        }
      }, {
        key: "Ctrl-Shift-]",
        mac: "Cmd-Alt-]",
        run: DD => {
          if (!DD.state.field(IC, !1)) return !1;
          let CD = [];
          for (let cD of cC(DD)) {
            let ID = iC(DD.state, cD.from, cD.to);
            ID && CD.push(CC.of(ID), QC(DD, ID, !1))
          }
          return CD.length && DD.dispatch({
            effects: CD
          }), CD.length > 0
        }
      }, {
        key: "Ctrl-Alt-[",
        run: DD => {
          let {
            state: CD
          } = DD, cD = [];
          for (let ID = 0; ID < CD.doc.length;) {
            let pD = DD.lineBlockAt(ID),
              iD = AD(CD, pD.from, pD.to);
            iD && cD.push(DC.of(iD)), ID = (iD ? DD.lineBlockAt(iD.to) : pD).to + 1
          }
          return cD.length && DD.dispatch({
            effects: bC(DD.state, cD)
          }), !!cD.length
        }
      }, {
        key: "Ctrl-Alt-]",
        run: DD => {
          let CD = DD.state.field(IC, !1);
          if (!CD || !CD.size) return !1;
          let cD = [];
          return CD.between(0, DD.state.doc.length, ((DD, CD) => {
            cD.push(CC.of({
              from: DD,
              to: CD
            }))
          })), DD.dispatch({
            effects: cD
          }), !0
        }
      }],
      SC = {
        placeholderDOM: null,
        preparePlaceholder: null,
        placeholderText: "\u2026"
      },
      BC = iD.l.define({
        combine: DD => (0, iD.U)(DD, SC)
      });

    function yC(DD) {
      let CD = [IC, gC];
      return DD && CD.push(BC.of(DD)), CD
    }

    function MC(DD, CD) {
      let {
        state: cD
      } = DD, ID = cD.facet(BC), pD = CD => {
        let cD = DD.lineBlockAt(DD.posAtDOM(CD.target)),
          ID = iC(DD.state, cD.from, cD.to);
        ID && DD.dispatch({
          effects: CC.of(ID)
        }), CD.preventDefault()
      };
      if (ID.placeholderDOM) return ID.placeholderDOM(DD, pD, CD);
      let iD = document.createElement("span");
      return iD.textContent = ID.placeholderText, iD.setAttribute("aria-label", cD.phrase("folded code")), iD.title = cD.phrase("unfold"), iD.className = "cm-foldPlaceholder", iD.onclick = pD, iD
    }
    const tC = fD.e.replace({
      widget: new class extends fD.y {
        toDOM(DD) {
          return MC(DD, null)
        }
      }
    });
    class ZC extends fD.y {
      constructor(DD) {
        super(), this.value = DD
      }
      eq(DD) {
        return this.value == DD.value
      }
      toDOM(DD) {
        return MC(DD, this.value)
      }
    }
    const oC = {
      openText: "\u2304",
      closedText: "\u203a",
      markerDOM: null,
      domEventHandlers: {},
      foldingChanged: () => !1
    };
    class vC extends fD.q {
      constructor(DD, CD) {
        super(), this.config = DD, this.open = CD
      }
      eq(DD) {
        return this.config == DD.config && this.open == DD.open
      }
      toDOM(DD) {
        if (this.config.markerDOM) return this.config.markerDOM(this.open);
        let CD = document.createElement("span");
        return CD.textContent = this.open ? this.config.openText : this.config.closedText, CD.title = DD.state.phrase(this.open ? "Fold line" : "Unfold line"), CD
      }
    }

    function NC() {
      let DD = {
          ...oC,
          ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        },
        CD = new vC(DD, !0),
        cD = new vC(DD, !1),
        ID = fD.u.fromClass(class {
          constructor(DD) {
            this.from = DD.viewport.from, this.markers = this.buildMarkers(DD)
          }
          update(CD) {
            (CD.docChanged || CD.viewportChanged || CD.startState.facet(UD) != CD.state.facet(UD) || CD.startState.field(IC, !1) != CD.state.field(IC, !1) || ZD(CD.startState) != ZD(CD.state) || DD.foldingChanged(CD)) && (this.markers = this.buildMarkers(CD.view))
          }
          buildMarkers(DD) {
            let ID = new iD.u;
            for (let pD of DD.viewportLineBlocks) {
              let iD = iC(DD.state, pD.from, pD.to) ? cD : AD(DD.state, pD.from, pD.to) ? CD : null;
              iD && ID.add(pD.from, pD.from, iD)
            }
            return ID.finish()
          }
        }),
        {
          domEventHandlers: pD
        } = DD;
      return [ID, (0, fD.M)({
        class: "cm-foldGutter",
        markers(DD) {
          var CD;
          return (null === (CD = DD.plugin(ID)) || void 0 === CD ? void 0 : CD.markers) || iD.x.empty
        },
        initialSpacer: () => new vC(DD, !1),
        domEventHandlers: {
          ...pD,
          click: (DD, CD, cD) => {
            if (pD.click && pD.click(DD, CD, cD)) return !0;
            let ID = iC(DD.state, CD.from, CD.to);
            if (ID) return DD.dispatch({
              effects: CC.of(ID)
            }), !0;
            let iD = AD(DD.state, CD.from, CD.to);
            return !!iD && (DD.dispatch({
              effects: DC.of(iD)
            }), !0)
          }
        }
      }), yC()]
    }
    const gC = fD.m.baseTheme({
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
    class XC {
      constructor(DD, CD) {
        let cD;

        function ID(DD) {
          let CD = QD.d.newName();
          return (cD || (cD = Object.create(null)))["." + CD] = DD, CD
        }
        this.specs = DD;
        const pD = "string" == typeof CD.all ? CD.all : CD.all ? ID(CD.all) : void 0,
          iD = CD.scope;
        this.scope = iD instanceof yD ? DD => DD.prop(wD) == iD.data : iD ? DD => DD == iD : void 0, this.style = (0, bD.i)(DD.map((DD => ({
          tag: DD.tag,
          class: DD.class || ID(Object.assign({}, DD, {
            tag: null
          }))
        }))), {
          all: pD
        }).style, this.module = cD ? new QD.d(cD) : null, this.themeType = CD.themeType
      }
      static define(DD, CD) {
        return new XC(DD, CD || {})
      }
    }
    const mC = iD.l.define(),
      nC = iD.l.define({
        combine: DD => DD.length ? [DD[0]] : null
      });

    function OC(DD) {
      let CD = DD.facet(mC);
      return CD.length ? CD : DD.facet(nC)
    }

    function PC(DD, CD) {
      let cD, ID = [UC];
      return DD instanceof XC && (DD.module && ID.push(fD.m.styleModule.of(DD.module)), cD = DD.themeType), (null === CD || void 0 === CD ? void 0 : CD.fallback) ? ID.push(nC.of(DD)) : cD ? ID.push(mC.computeN([fD.m.darkTheme], (CD => CD.facet(fD.m.darkTheme) == ("dark" == cD) ? [DD] : []))) : ID.push(mC.of(DD)), ID
    }
    class HC {
      constructor(DD) {
        this.markCache = Object.create(null), this.tree = ZD(DD.state), this.qI = this.buildDeco(DD, OC(DD.state)), this.decoratedTo = DD.viewport.to
      }
      update(DD) {
        let CD = ZD(DD.state),
          cD = OC(DD.state),
          ID = cD != OC(DD.startState),
          {
            viewport: pD
          } = DD.view,
          iD = DD.changes.mapPos(this.decoratedTo, 1);
        CD.length < pD.to && !ID && CD.type == this.tree.type && iD >= pD.to ? (this.qI = this.qI.map(DD.changes), this.decoratedTo = iD) : (CD != this.tree || DD.viewportChanged || ID) && (this.tree = CD, this.qI = this.buildDeco(DD.view, cD), this.decoratedTo = pD.to)
      }
      buildDeco(DD, CD) {
        if (!CD || !this.tree.length) return fD.e.none;
        let cD = new iD.u;
        for (let {
            from: ID,
            to: pD
          }
          of DD.o3)(0, bD.b)(this.tree, CD, ((DD, CD, ID) => {
          cD.add(DD, CD, this.markCache[ID] || (this.markCache[ID] = fD.e.mark({
            class: ID
          })))
        }), ID, pD);
        return cD.finish()
      }
    }
    const UC = iD.s.high(fD.u.fromClass(HC, {
        qI: DD => DD.qI
      })),
      xC = XC.define([{
        tag: bD.m.meta,
        color: "#404740"
      }, {
        tag: bD.m.link,
        textDecoration: "underline"
      }, {
        tag: bD.m.heading,
        textDecoration: "underline",
        fontWeight: "bold"
      }, {
        tag: bD.m.emphasis,
        fontStyle: "italic"
      }, {
        tag: bD.m.strong,
        fontWeight: "bold"
      }, {
        tag: bD.m.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: bD.m.keyword,
        color: "#708"
      }, {
        tag: [bD.m.atom, bD.m.bool, bD.m.url, bD.m.contentSeparator, bD.m.labelName],
        color: "#219"
      }, {
        tag: [bD.m.literal, bD.m.inserted],
        color: "#164"
      }, {
        tag: [bD.m.string, bD.m.deleted],
        color: "#a11"
      }, {
        tag: [bD.m.regexp, bD.m.escape, bD.m.special(bD.m.string)],
        color: "#e40"
      }, {
        tag: bD.m.definition(bD.m.variableName),
        color: "#00f"
      }, {
        tag: bD.m.local(bD.m.variableName),
        color: "#30a"
      }, {
        tag: [bD.m.typeName, bD.m.namespace],
        color: "#085"
      }, {
        tag: bD.m.className,
        color: "#167"
      }, {
        tag: [bD.m.special(bD.m.variableName), bD.m.macroName],
        color: "#256"
      }, {
        tag: bD.m.definition(bD.m.propertyName),
        color: "#00c"
      }, {
        tag: bD.m.comment,
        color: "#940"
      }, {
        tag: bD.m.invalid,
        color: "#f00"
      }]),
      qC = fD.m.baseTheme({
        "&.cm-focused .cm-matchingBracket": {
          backgroundColor: "#328c8252"
        },
        "&.cm-focused .cm-nonmatchingBracket": {
          backgroundColor: "#bb555544"
        }
      }),
      JC = 1e4,
      KC = "()[]{}",
      aC = iD.l.define({
        combine: DD => (0, iD.U)(DD, {
          afterCursor: !0,
          brackets: KC,
          maxScanDistance: JC,
          renderMatch: jC
        })
      }),
      VC = fD.e.mark({
        class: "cm-matchingBracket"
      }),
      zC = fD.e.mark({
        class: "cm-nonmatchingBracket"
      });

    function jC(DD) {
      let CD = [],
        cD = DD.matched ? VC : zC;
      return CD.push(cD.range(DD.start.from, DD.start.to)), DD.end && CD.push(cD.range(DD.end.from, DD.end.to)), CD
    }

    function lC(DD) {
      let CD = [],
        cD = DD.facet(aC);
      for (let ID of DD.selection.df) {
        if (!ID.empty) continue;
        let pD = dC(DD, ID.head, -1, cD) || ID.head > 0 && dC(DD, ID.head - 1, 1, cD) || cD.afterCursor && (dC(DD, ID.head, 1, cD) || ID.head < DD.doc.length && dC(DD, ID.head + 1, -1, cD));
        pD && (CD = CD.concat(cD.renderMatch(pD, DD)))
      }
      return fD.e.set(CD, !0)
    }
    const LC = [fD.u.fromClass(class {
      constructor(DD) {
        this.paused = !1, this.qI = lC(DD.state)
      }
      update(DD) {
        (DD.docChanged || DD.selectionSet || this.paused) && (DD.view.composing ? (this.qI = this.qI.map(DD.changes), this.paused = !0) : (this.qI = lC(DD.state), this.paused = !1))
      }
    }, {
      qI: DD => DD.qI
    }), qC];

    function TC() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [aC.of(DD), LC]
    }
    const GC = new pD.g;

    function RC(DD, CD, cD) {
      let ID = DD.prop(CD < 0 ? pD.g.openedBy : pD.g.closedBy);
      if (ID) return ID;
      if (1 == DD.name.length) {
        let ID = cD.indexOf(DD.name);
        if (ID > -1 && ID % 2 == (CD < 0 ? 1 : 0)) return [cD[ID + CD]]
      }
      return null
    }

    function kC(DD) {
      let CD = DD.type.prop(GC);
      return CD ? CD(DD.node) : DD
    }

    function dC(DD, CD, cD) {
      let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        pD = ID.maxScanDistance || JC,
        iD = ID.brackets || KC,
        fD = ZD(DD),
        bD = fD.resolveInner(CD, cD);
      for (let QD = bD; QD; QD = QD.parent) {
        let ID = RC(QD.type, cD, iD);
        if (ID && QD.from < QD.to) {
          let pD = kC(QD);
          if (pD && (cD > 0 ? CD >= pD.from && CD < pD.to : CD > pD.from && CD <= pD.to)) return YC(DD, CD, cD, QD, pD, ID, iD)
        }
      }
      return function(DD, CD, cD, ID, pD, iD, fD) {
        if (cD < 0 ? !CD : CD == DD.doc.length) return null;
        let bD = cD < 0 ? DD.sliceDoc(CD - 1, CD) : DD.sliceDoc(CD, CD + 1),
          QD = fD.indexOf(bD);
        if (QD < 0 || QD % 2 == 0 != cD > 0) return null;
        let wD = {
            from: cD < 0 ? CD - 1 : CD,
            to: cD > 0 ? CD + 1 : CD
          },
          SD = DD.doc.iterRange(CD, cD > 0 ? DD.doc.length : 0),
          BD = 0;
        for (let yD = 0; !SD.next().done && yD <= iD;) {
          let DD = SD.value;
          cD < 0 && (yD += DD.length);
          let iD = CD + yD * cD;
          for (let CD = cD > 0 ? 0 : DD.length - 1, bD = cD > 0 ? DD.length : -1; CD != bD; CD += cD) {
            let bD = fD.indexOf(DD[CD]);
            if (!(bD < 0 || ID.resolveInner(iD + CD, 1).type != pD))
              if (bD % 2 == 0 == cD > 0) BD++;
              else {
                if (1 == BD) return {
                  start: wD,
                  end: {
                    from: iD + CD,
                    to: iD + CD + 1
                  },
                  matched: bD >> 1 == QD >> 1
                };
                BD--
              }
          }
          cD > 0 && (yD += DD.length)
        }
        return SD.done ? {
          start: wD,
          matched: !1
        } : null
      }(DD, CD, cD, fD, bD.type, pD, iD)
    }

    function YC(DD, CD, cD, ID, pD, iD, fD) {
      let bD = ID.parent,
        QD = {
          from: pD.from,
          to: pD.to
        },
        wD = 0,
        SD = null === bD || void 0 === bD ? void 0 : bD.cursor();
      if (SD && (cD < 0 ? SD.childBefore(ID.from) : SD.childAfter(ID.to)))
        do {
          if (cD < 0 ? SD.to <= ID.from : SD.from >= ID.to) {
            if (0 == wD && iD.indexOf(SD.type.name) > -1 && SD.from < SD.to) {
              let DD = kC(SD);
              return {
                start: QD,
                end: DD ? {
                  from: DD.from,
                  to: DD.to
                } : void 0,
                matched: !0
              }
            }
            if (RC(SD.type, cD, fD)) wD++;
            else if (RC(SD.type, -cD, fD)) {
              if (0 == wD) {
                let DD = kC(SD);
                return {
                  start: QD,
                  end: DD && DD.from < DD.to ? {
                    from: DD.from,
                    to: DD.to
                  } : void 0,
                  matched: !1
                }
              }
              wD--
            }
          }
        } while (cD < 0 ? SD.prevSibling() : SD.nextSibling());
      return {
        start: QD,
        matched: !1
      }
    }
    const WC = Object.create(null),
      sC = [pD.m.none],
      EC = [],
      eC = Object.create(null),
      uC = Object.create(null);
    for (let [AC, FC] of [
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
      ]) uC[AC] = rC(WC, FC);

    function hC(DD, CD) {
      EC.indexOf(DD) > -1 || (EC.push(DD), console.warn(CD))
    }

    function rC(DD, CD) {
      let cD = [];
      for (let pD of CD.split(" ")) {
        let CD = [];
        for (let cD of pD.split(".")) {
          let ID = DD[cD] || bD.m[cD];
          ID ? "function" == typeof ID ? CD.length ? CD = CD.map(ID) : hC(cD, `Modifier ${cD} used at start of tag`) : CD.length ? hC(cD, `Tag ${cD} used as modifier`) : CD = Array.isArray(ID) ? ID : [ID] : hC(cD, `Unknown highlighting tag ${cD}`)
        }
        for (let DD of CD) cD.push(DD)
      }
      if (!cD.length) return 0;
      let ID = CD.replace(/ /g, "_"),
        iD = ID + " " + cD.map((DD => DD.id)),
        fD = eC[iD];
      if (fD) return fD.id;
      let QD = eC[iD] = pD.m.define({
        id: sC.length,
        name: ID,
        props: [(0, bD.f)({
          [ID]: cD
        })]
      });
      return sC.push(QD), QD.id
    }
    fD.i.RTL, fD.i.LTR
  },
  40431: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => gD,
      e: () => OD
    });
    var ID = cD(40384),
      pD = cD(40379),
      iD = cD(40394);
    class fD {
      constructor(DD, CD, cD) {
        this.from = DD, this.to = CD, this.diagnostic = cD
      }
    }
    class bD {
      constructor(DD, CD, cD) {
        this.diagnostics = DD, this.panel = CD, this.selected = cD
      }
      static init(DD, CD, cD) {
        let iD = cD.facet(mD).markerFilter;
        iD && (DD = iD(DD, cD));
        let fD = DD.slice().sort(((DD, CD) => DD.from - CD.from || DD.to - CD.to)),
          wD = new pD.u,
          SD = [],
          BD = 0,
          yD = cD.doc.iter(),
          MD = 0,
          tD = cD.doc.length;
        for (let pD = 0;;) {
          let DD, CD, cD = pD == fD.length ? null : fD[pD];
          if (!cD && !SD.length) break;
          if (SD.length) DD = BD, CD = SD.reduce(((DD, CD) => Math.min(DD, CD.to)), cD && cD.from > DD ? cD.from : 1e8);
          else {
            if (DD = cD.from, DD > tD) break;
            CD = cD.to, SD.push(cD), pD++
          }
          for (; pD < fD.length;) {
            let cD = fD[pD];
            if (cD.from != DD || !(cD.to > cD.from || cD.to == DD)) {
              CD = Math.min(cD.from, CD);
              break
            }
            SD.push(cD), pD++, CD = Math.min(cD.to, CD)
          }
          CD = Math.min(CD, tD);
          let iD = !1;
          if (SD.some((cD => cD.from == DD && (cD.to == CD || CD == tD))) && (iD = DD == CD, !iD && CD - DD < 10)) {
            let cD = DD - (MD + yD.value.length);
            cD > 0 && (yD.next(cD), MD = DD);
            for (let ID = DD;;) {
              if (ID >= CD) {
                iD = !0;
                break
              }
              if (!yD.lineBreak && MD + yD.value.length > ID) break;
              ID = MD + yD.value.length, MD += yD.value.length, yD.next()
            }
          }
          let bD = zD(SD);
          if (iD) wD.add(DD, DD, ID.e.widget({
            widget: new UD(bD),
            diagnostics: SD.slice()
          }));
          else {
            let cD = SD.reduce(((DD, CD) => CD.markClass ? DD + " " + CD.markClass : DD), "");
            wD.add(DD, CD, ID.e.mark({
              class: "cm-lintRange cm-lintRange-" + bD + cD,
              diagnostics: SD.slice(),
              inclusiveEnd: SD.some((DD => DD.to > CD))
            }))
          }
          if (BD = CD, BD == tD) break;
          for (let ID = 0; ID < SD.length; ID++) SD[ID].to <= BD && SD.splice(ID--, 1)
        }
        let ZD = wD.finish();
        return new bD(ZD, CD, QD(ZD))
      }
    }

    function QD(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        ID = null;
      return DD.between(cD, 1e9, ((DD, cD, pD) => {
        let {
          spec: iD
        } = pD;
        if (!(CD && iD.diagnostics.indexOf(CD) < 0))
          if (ID) {
            if (iD.diagnostics.indexOf(ID.diagnostic) < 0) return !1;
            ID = new fD(ID.from, cD, ID.diagnostic)
          } else ID = new fD(DD, cD, CD || iD.diagnostics[0])
      })), ID
    }

    function wD(DD, CD) {
      let cD = CD.pos,
        ID = CD.end || cD,
        pD = DD.state.facet(mD).hideOn(DD, cD, ID);
      if (null != pD) return pD;
      let iD = DD.startState.doc.lineAt(CD.pos);
      return !(!DD.effects.some((DD => DD.is(BD))) && !DD.changes.touchesRange(iD.from, Math.max(iD.to, ID)))
    }

    function SD(DD, CD) {
      return DD.field(tD, !1) ? CD : CD.concat(pD.D.appendConfig.of(jD))
    }
    const BD = pD.D.define(),
      yD = pD.D.define(),
      MD = pD.D.define(),
      tD = pD.F.define({
        create: () => new bD(ID.e.none, null, null),
        update(DD, CD) {
          if (CD.docChanged && DD.diagnostics.size) {
            let cD = DD.diagnostics.map(CD.changes),
              ID = null,
              pD = DD.panel;
            if (DD.selected) {
              let pD = CD.changes.mapPos(DD.selected.from, 1);
              ID = QD(cD, DD.selected.diagnostic, pD) || QD(cD, null, pD)
            }!cD.size && pD && CD.state.facet(mD).autoPanel && (pD = null), DD = new bD(cD, pD, ID)
          }
          for (let cD of CD.effects)
            if (cD.is(BD)) {
              let ID = CD.state.facet(mD).autoPanel ? cD.value.length ? qD.open : null : DD.panel;
              DD = bD.init(cD.value, ID, CD.state)
            } else cD.is(yD) ? DD = new bD(DD.diagnostics, cD.value ? qD.open : null, DD.selected) : cD.is(MD) && (DD = new bD(DD.diagnostics, DD.panel, cD.value));
          return DD
        },
        provide: DD => [ID.tb.from(DD, (DD => DD.panel)), ID.m.qI.from(DD, (DD => DD.diagnostics))]
      });
    const ZD = ID.e.mark({
      class: "cm-lintRange cm-lintRange-active"
    });

    function oD(DD, CD, cD) {
      let ID, {
          diagnostics: pD
        } = DD.state.field(tD),
        iD = -1,
        fD = -1;
      pD.between(CD - (cD < 0 ? 1 : 0), CD + (cD > 0 ? 1 : 0), ((DD, pD, bD) => {
        let {
          spec: QD
        } = bD;
        if (CD >= DD && CD <= pD && (DD == pD || (CD > DD || cD > 0) && (CD < pD || cD < 0))) return ID = QD.diagnostics, iD = DD, fD = pD, !1
      }));
      let bD = DD.state.facet(mD).tooltipFilter;
      return ID && bD && (ID = bD(ID, DD.state)), ID ? {
        pos: iD,
        end: fD,
        above: DD.state.doc.lineAt(iD).to < fD,
        create: () => ({
          dom: vD(DD, ID)
        })
      } : null
    }

    function vD(DD, CD) {
      return (0, iD.b)("ul", {
        class: "cm-tooltip-lint"
      }, CD.map((CD => HD(DD, CD, !1))))
    }
    const ND = DD => {
        let CD = DD.state.field(tD, !1);
        return !(!CD || !CD.panel) && (DD.dispatch({
          effects: yD.of(!1)
        }), !0)
      },
      gD = [{
        key: "Mod-Shift-m",
        run: DD => {
          let CD = DD.state.field(tD, !1);
          CD && CD.panel || DD.dispatch({
            effects: SD(DD.state, [yD.of(!0)])
          });
          let cD = (0, ID.K)(DD, qD.open);
          return cD && cD.dom.querySelector(".cm-panel-lint ul").focus(), !0
        },
        preventDefault: !0
      }, {
        key: "F8",
        run: DD => {
          let CD = DD.state.field(tD, !1);
          if (!CD) return !1;
          let cD = DD.state.selection.main,
            ID = QD(CD.diagnostics, null, cD.to + 1);
          return !(!ID && (ID = QD(CD.diagnostics, null, 0), !ID || ID.from == cD.from && ID.to == cD.to)) && (DD.dispatch({
            selection: {
              anchor: ID.from,
              head: ID.to
            },
            scrollIntoView: !0
          }), !0)
        }
      }],
      XD = ID.u.fromClass(class {
        constructor(DD) {
          this.view = DD, this.timeout = -1, this.set = !0;
          let {
            delay: CD
          } = DD.state.facet(mD);
          this.lintTime = Date.now() + CD, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, CD)
        }
        run() {
          clearTimeout(this.timeout);
          let DD = Date.now();
          if (DD < this.lintTime - 10) this.timeout = setTimeout(this.run, this.lintTime - DD);
          else {
            this.set = !1;
            let {
              state: DD
            } = this.view, {
              sources: CD
            } = DD.facet(mD);
            CD.length && function(DD, CD, cD) {
              let ID = [],
                pD = -1;
              for (let iD of DD) iD.then((cD => {
                ID.push(cD), clearTimeout(pD), ID.length == DD.length ? CD(ID) : pD = setTimeout((() => CD(ID)), 200)
              }), cD)
            }(CD.map((DD => Promise.resolve(DD(this.view)))), (CD => {
              this.view.state.doc == DD.doc && this.view.dispatch(function(DD, CD) {
                return {
                  effects: SD(DD, [BD.of(CD)])
                }
              }(this.view.state, CD.reduce(((DD, CD) => DD.concat(CD)))))
            }), (DD => {
              (0, ID.fb)(this.view.state, DD)
            }))
          }
        }
        update(DD) {
          let CD = DD.state.facet(mD);
          (DD.docChanged || CD != DD.startState.facet(mD) || CD.needsRefresh && CD.needsRefresh(DD)) && (this.lintTime = Date.now() + CD.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, CD.delay)))
        }
        force() {
          this.set && (this.lintTime = Date.now(), this.run())
        }
        destroy() {
          clearTimeout(this.timeout)
        }
      });
    const mD = pD.l.define({
      combine: DD => ({
        sources: DD.map((DD => DD.source)).filter((DD => null != DD)),
        ...(0, pD.U)(DD.map((DD => DD.config)), {
          delay: 750,
          markerFilter: null,
          tooltipFilter: null,
          needsRefresh: null,
          hideOn: () => null
        }, {
          delay: Math.max,
          markerFilter: nD,
          tooltipFilter: nD,
          needsRefresh: (DD, CD) => DD ? CD ? cD => DD(cD) || CD(cD) : DD : CD,
          hideOn: (DD, CD) => DD ? CD ? (cD, ID, pD) => DD(cD, ID, pD) || CD(cD, ID, pD) : DD : CD,
          autoPanel: (DD, CD) => DD || CD
        })
      })
    });

    function nD(DD, CD) {
      return DD ? CD ? (cD, ID) => CD(DD(cD, ID), ID) : DD : CD
    }

    function OD(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return [mD.of({
        source: DD,
        config: CD
      }), XD, jD]
    }

    function PD(DD) {
      let CD = [];
      if (DD) DD: for (let {
          name: cD
        }
        of DD) {
        for (let DD = 0; DD < cD.length; DD++) {
          let ID = cD[DD];
          if (/[a-zA-Z]/.test(ID) && !CD.some((DD => DD.toLowerCase() == ID.toLowerCase()))) {
            CD.push(ID);
            continue DD
          }
        }
        CD.push("")
      }
      return CD
    }

    function HD(DD, CD, cD) {
      var ID;
      let pD = cD ? PD(CD.actions) : [];
      return (0, iD.b)("li", {
        class: "cm-diagnostic cm-diagnostic-" + CD.severity
      }, (0, iD.b)("span", {
        class: "cm-diagnosticText"
      }, CD.renderMessage ? CD.renderMessage(DD) : CD.message), null === (ID = CD.actions) || void 0 === ID ? void 0 : ID.map(((cD, ID) => {
        let fD = !1,
          bD = ID => {
            if (ID.preventDefault(), fD) return;
            fD = !0;
            let pD = QD(DD.state.field(tD).diagnostics, CD);
            pD && cD.apply(DD, pD.from, pD.to)
          },
          {
            name: wD
          } = cD,
          SD = pD[ID] ? wD.indexOf(pD[ID]) : -1,
          BD = SD < 0 ? wD : [wD.slice(0, SD), (0, iD.b)("u", wD.slice(SD, SD + 1)), wD.slice(SD + 1)],
          yD = cD.markClass ? " " + cD.markClass : "";
        return (0, iD.b)("button", {
          type: "button",
          class: "cm-diagnosticAction" + yD,
          onclick: bD,
          onmousedown: bD,
          "aria-label": ` Action: ${wD}${SD<0?"":` (access key "${pD[ID]})"`}.`
        }, BD)
      })), CD.source && (0, iD.b)("div", {
        class: "cm-diagnosticSource"
      }, CD.source))
    }
    class UD extends ID.y {
      constructor(DD) {
        super(), this.sev = DD
      }
      eq(DD) {
        return DD.sev == this.sev
      }
      toDOM() {
        return (0, iD.b)("span", {
          class: "cm-lintPoint cm-lintPoint-" + this.sev
        })
      }
    }
    class xD {
      constructor(DD, CD) {
        this.diagnostic = CD, this.id = "item_" + Math.floor(4294967295 * Math.random()).toString(16), this.dom = HD(DD, CD, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option")
      }
    }
    class qD {
      constructor(DD) {
        this.view = DD, this.items = [];
        this.list = (0, iD.b)("ul", {
          tabIndex: 0,
          role: "listbox",
          "aria-label": this.view.state.phrase("Diagnostics"),
          onkeydown: CD => {
            if (!(CD.ctrlKey || CD.altKey || CD.metaKey)) {
              if (27 == CD.keyCode) ND(this.view), this.view.focus();
              else if (38 == CD.keyCode || 33 == CD.keyCode) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
              else if (40 == CD.keyCode || 34 == CD.keyCode) this.moveSelection((this.selectedIndex + 1) % this.items.length);
              else if (36 == CD.keyCode) this.moveSelection(0);
              else if (35 == CD.keyCode) this.moveSelection(this.items.length - 1);
              else if (13 == CD.keyCode) this.view.focus();
              else {
                if (!(CD.keyCode >= 65 && CD.keyCode <= 90 && this.selectedIndex >= 0)) return;
                {
                  let {
                    diagnostic: cD
                  } = this.items[this.selectedIndex], ID = PD(cD.actions);
                  for (let pD = 0; pD < ID.length; pD++)
                    if (ID[pD].toUpperCase().charCodeAt(0) == CD.keyCode) {
                      let CD = QD(this.view.state.field(tD).diagnostics, cD);
                      CD && cD.actions[pD].apply(DD, CD.from, CD.to)
                    }
                }
              }
              CD.preventDefault()
            }
          },
          onclick: DD => {
            for (let CD = 0; CD < this.items.length; CD++) this.items[CD].dom.contains(DD.target) && this.moveSelection(CD)
          }
        }), this.dom = (0, iD.b)("div", {
          class: "cm-panel-lint"
        }, this.list, (0, iD.b)("button", {
          type: "button",
          name: "close",
          "aria-label": this.view.state.phrase("close"),
          onclick: () => ND(this.view)
        }, "\xd7")), this.update()
      }
      get selectedIndex() {
        let DD = this.view.state.field(tD).selected;
        if (!DD) return -1;
        for (let CD = 0; CD < this.items.length; CD++)
          if (this.items[CD].diagnostic == DD.diagnostic) return CD;
        return -1
      }
      update() {
        let {
          diagnostics: DD,
          selected: CD
        } = this.view.state.field(tD), cD = 0, ID = !1, pD = null, iD = new Set;
        for (DD.between(0, this.view.state.doc.length, ((DD, fD, bD) => {
            let {
              spec: QD
            } = bD;
            for (let wD of QD.diagnostics) {
              if (iD.has(wD)) continue;
              iD.add(wD);
              let DD, fD = -1;
              for (let CD = cD; CD < this.items.length; CD++)
                if (this.items[CD].diagnostic == wD) {
                  fD = CD;
                  break
                } fD < 0 ? (DD = new xD(this.view, wD), this.items.splice(cD, 0, DD), ID = !0) : (DD = this.items[fD], fD > cD && (this.items.splice(cD, fD - cD), ID = !0)), CD && DD.diagnostic == CD.diagnostic ? DD.dom.hasAttribute("aria-selected") || (DD.dom.setAttribute("aria-selected", "true"), pD = DD) : DD.dom.hasAttribute("aria-selected") && DD.dom.removeAttribute("aria-selected"), cD++
            }
          })); cD < this.items.length && !(1 == this.items.length && this.items[0].diagnostic.from < 0);) ID = !0, this.items.pop();
        0 == this.items.length && (this.items.push(new xD(this.view, {
          from: -1,
          to: -1,
          severity: "info",
          message: this.view.state.phrase("No diagnostics")
        })), ID = !0), pD ? (this.list.setAttribute("aria-activedescendant", pD.id), this.view.requestMeasure({
          key: this,
          read: () => ({
            sel: pD.dom.getBoundingClientRect(),
            panel: this.list.getBoundingClientRect()
          }),
          write: DD => {
            let {
              sel: CD,
              panel: cD
            } = DD, ID = cD.height / this.list.offsetHeight;
            CD.top < cD.top ? this.list.scrollTop -= (cD.top - CD.top) / ID : CD.bottom > cD.bottom && (this.list.scrollTop += (CD.bottom - cD.bottom) / ID)
          }
        })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), ID && this.sync()
      }
      sync() {
        let DD = this.list.firstChild;

        function CD() {
          let CD = DD;
          DD = CD.nextSibling, CD.remove()
        }
        for (let cD of this.items)
          if (cD.dom.parentNode == this.list) {
            for (; DD != cD.dom;) CD();
            DD = cD.dom.nextSibling
          } else this.list.insertBefore(cD.dom, DD);
        for (; DD;) CD()
      }
      moveSelection(DD) {
        if (this.selectedIndex < 0) return;
        let CD = QD(this.view.state.field(tD).diagnostics, this.items[DD].diagnostic);
        CD && this.view.dispatch({
          selection: {
            anchor: CD.from,
            head: CD.to
          },
          scrollIntoView: !0,
          effects: MD.of(CD)
        })
      }
      static open(DD) {
        return new qD(DD)
      }
    }

    function JD(DD) {
      return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${arguments.length>1&&void 0!==arguments[1]?arguments[1]:'viewBox="0 0 40 40"'}>${encodeURIComponent(DD)}</svg>')`
    }

    function KD(DD) {
      return JD(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${DD}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"')
    }
    const aD = ID.m.baseTheme({
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
        backgroundImage: KD("#d11")
      },
      ".cm-lintRange-warning": {
        backgroundImage: KD("orange")
      },
      ".cm-lintRange-info": {
        backgroundImage: KD("#999")
      },
      ".cm-lintRange-hint": {
        backgroundImage: KD("#66d")
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

    function VD(DD) {
      return "error" == DD ? 4 : "warning" == DD ? 3 : "info" == DD ? 2 : 1
    }

    function zD(DD) {
      let CD = "hint",
        cD = 1;
      for (let ID of DD) {
        let DD = VD(ID.severity);
        DD > cD && (cD = DD, CD = ID.severity)
      }
      return CD
    }
    ID.q;
    const jD = [tD, ID.m.qI.compute([tD], (DD => {
      let {
        selected: CD,
        panel: cD
      } = DD.field(tD);
      return CD && cD && CD.from != CD.to ? ID.e.set([ZD.range(CD.from, CD.to)]) : ID.e.none
    })), (0, ID.W)(oD, {
      hideOn: wD
    }), aD]
  },
  40423: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => AD,
      e: () => vD,
      h: () => FD
    });
    var ID = cD(40384),
      pD = cD(40379),
      iD = cD(40394);
    const fD = "function" == typeof String.prototype.normalize ? DD => DD.normalize("NFKD") : DD => DD;
    class bD {
      constructor(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : DD.length,
          pD = arguments.length > 4 ? arguments[4] : void 0,
          iD = arguments.length > 5 ? arguments[5] : void 0;
        this.test = iD, this.value = {
          from: 0,
          to: 0
        }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = DD.iterRange(cD, ID), this.bufferStart = cD, this.normalize = pD ? DD => pD(fD(DD)) : fD, this.query = this.normalize(CD)
      }
      peek() {
        if (this.bufferPos == this.buffer.length) {
          if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
          this.bufferPos = 0, this.buffer = this.iter.value
        }
        return (0, pD.O)(this.buffer, this.bufferPos)
      }
      next() {
        for (; this.matches.length;) this.matches.pop();
        return this.nextOverlapping()
      }
      nextOverlapping() {
        for (;;) {
          let DD = this.peek();
          if (DD < 0) return this.done = !0, this;
          let CD = (0, pD.bb)(DD),
            cD = this.bufferStart + this.bufferPos;
          this.bufferPos += (0, pD.S)(DD);
          let ID = this.normalize(CD);
          if (ID.length)
            for (let pD = 0, iD = cD;; pD++) {
              let DD = ID.charCodeAt(pD),
                fD = this.match(DD, iD, this.bufferPos + this.bufferStart);
              if (pD == ID.length - 1) {
                if (fD) return this.value = fD, this;
                break
              }
              iD == cD && pD < CD.length && CD.charCodeAt(pD) == DD && iD++
            }
        }
      }
      match(DD, CD, cD) {
        let ID = null;
        for (let pD = 0; pD < this.matches.length; pD += 2) {
          let CD = this.matches[pD],
            iD = !1;
          this.query.charCodeAt(CD) == DD && (CD == this.query.length - 1 ? ID = {
            from: this.matches[pD + 1],
            to: cD
          } : (this.matches[pD]++, iD = !0)), iD || (this.matches.splice(pD, 2), pD -= 2)
        }
        return this.query.charCodeAt(0) == DD && (1 == this.query.length ? ID = {
          from: CD,
          to: cD
        } : this.matches.push(1, CD)), ID && this.test && !this.test(ID.from, ID.to, this.buffer, this.bufferStart) && (ID = null), ID
      }
    }
    "undefined" != typeof Symbol && (bD.prototype[Symbol.iterator] = function() {
      return this
    });
    const QD = {
        from: -1,
        to: -1,
        match: /.*/.exec("")
      },
      wD = "gm" + (null == /x/.unicode ? "" : "u");
    class SD {
      constructor(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : DD.length;
        if (this.text = DD, this.to = pD, this.curLine = "", this.done = !1, this.value = QD, /\\[sWDnr]|\n|\r|\[\^/.test(CD)) return new MD(DD, CD, cD, ID, pD);
        this.re = new RegExp(CD, wD + ((null === cD || void 0 === cD ? void 0 : cD.ignoreCase) ? "i" : "")), this.test = null === cD || void 0 === cD ? void 0 : cD.test, this.iter = DD.iter();
        let iD = DD.lineAt(ID);
        this.curLineStart = iD.from, this.matchPos = tD(DD, ID), this.getLine(this.curLineStart)
      }
      getLine(DD) {
        this.iter.next(DD), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next())
      }
      nextLine() {
        this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0)
      }
      next() {
        for (let DD = this.matchPos - this.curLineStart;;) {
          this.re.lastIndex = DD;
          let CD = this.matchPos <= this.to && this.re.exec(this.curLine);
          if (CD) {
            let cD = this.curLineStart + CD.index,
              ID = cD + CD[0].length;
            if (this.matchPos = tD(this.text, ID + (cD == ID ? 1 : 0)), cD == this.curLineStart + this.curLine.length && this.nextLine(), (cD < ID || cD > this.value.to) && (!this.test || this.test(cD, ID, CD))) return this.value = {
              from: cD,
              to: ID,
              match: CD
            }, this;
            DD = this.matchPos - this.curLineStart
          } else {
            if (!(this.curLineStart + this.curLine.length < this.to)) return this.done = !0, this;
            this.nextLine(), DD = 0
          }
        }
      }
    }
    const BD = new WeakMap;
    class yD {
      constructor(DD, CD) {
        this.from = DD, this.text = CD
      }
      get to() {
        return this.from + this.text.length
      }
      static get(DD, CD, cD) {
        let ID = BD.get(DD);
        if (!ID || ID.from >= cD || ID.to <= CD) {
          let ID = new yD(CD, DD.sliceString(CD, cD));
          return BD.set(DD, ID), ID
        }
        if (ID.from == CD && ID.to == cD) return ID;
        let {
          text: pD,
          from: iD
        } = ID;
        return iD > CD && (pD = DD.sliceString(CD, iD) + pD, iD = CD), ID.to < cD && (pD += DD.sliceString(ID.to, cD)), BD.set(DD, new yD(iD, pD)), new yD(CD, pD.slice(CD - iD, cD - iD))
      }
    }
    class MD {
      constructor(DD, CD, cD, ID, pD) {
        this.text = DD, this.to = pD, this.done = !1, this.value = QD, this.matchPos = tD(DD, ID), this.re = new RegExp(CD, wD + ((null === cD || void 0 === cD ? void 0 : cD.ignoreCase) ? "i" : "")), this.test = null === cD || void 0 === cD ? void 0 : cD.test, this.flat = yD.get(DD, ID, this.chunkEnd(ID + 5e3))
      }
      chunkEnd(DD) {
        return DD >= this.to ? this.to : this.text.lineAt(DD).to
      }
      next() {
        for (;;) {
          let DD = this.re.lastIndex = this.matchPos - this.flat.from,
            CD = this.re.exec(this.flat.text);
          if (CD && !CD[0] && CD.index == DD && (this.re.lastIndex = DD + 1, CD = this.re.exec(this.flat.text)), CD) {
            let DD = this.flat.from + CD.index,
              cD = DD + CD[0].length;
            if ((this.flat.to >= this.to || CD.index + CD[0].length <= this.flat.text.length - 10) && (!this.test || this.test(DD, cD, CD))) return this.value = {
              from: DD,
              to: cD,
              match: CD
            }, this.matchPos = tD(this.text, cD + (DD == cD ? 1 : 0)), this
          }
          if (this.flat.to == this.to) return this.done = !0, this;
          this.flat = yD.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + 2 * this.flat.text.length))
        }
      }
    }

    function tD(DD, CD) {
      if (CD >= DD.length) return CD;
      let cD, ID = DD.lineAt(CD);
      for (; CD < ID.to && (cD = ID.text.charCodeAt(CD - ID.from)) >= 56320 && cD < 57344;) CD++;
      return CD
    }
    "undefined" != typeof Symbol && (SD.prototype[Symbol.iterator] = MD.prototype[Symbol.iterator] = function() {
      return this
    });
    const ZD = {
        highlightWordAroundCursor: !1,
        minSelectionLength: 1,
        maxMatches: 100,
        wholeWords: !1
      },
      oD = pD.l.define({
        combine: DD => (0, pD.U)(DD, ZD, {
          highlightWordAroundCursor: (DD, CD) => DD || CD,
          minSelectionLength: Math.min,
          maxMatches: Math.min
        })
      });

    function vD(DD) {
      let CD = [nD, mD];
      return DD && CD.push(oD.of(DD)), CD
    }
    const ND = ID.e.mark({
        class: "cm-selectionMatch"
      }),
      gD = ID.e.mark({
        class: "cm-selectionMatch cm-selectionMatch-main"
      });

    function XD(DD, CD, cD, ID) {
      return (0 == cD || DD(CD.sliceDoc(cD - 1, cD)) != pD.f.Word) && (ID == CD.doc.length || DD(CD.sliceDoc(ID, ID + 1)) != pD.f.Word)
    }
    const mD = ID.u.fromClass(class {
        constructor(DD) {
          this.qI = this.getDeco(DD)
        }
        update(DD) {
          (DD.selectionSet || DD.docChanged || DD.viewportChanged) && (this.qI = this.getDeco(DD.view))
        }
        getDeco(DD) {
          let CD = DD.state.facet(oD),
            {
              state: cD
            } = DD,
            iD = cD.selection;
          if (iD.df.length > 1) return ID.e.none;
          let fD, QD = iD.main,
            wD = null;
          if (QD.empty) {
            if (!CD.highlightWordAroundCursor) return ID.e.none;
            let DD = cD.wordAt(QD.head);
            if (!DD) return ID.e.none;
            wD = cD.charCategorizer(QD.head), fD = cD.sliceDoc(DD.from, DD.to)
          } else {
            let DD = QD.to - QD.from;
            if (DD < CD.minSelectionLength || DD > 200) return ID.e.none;
            if (CD.wholeWords) {
              if (fD = cD.sliceDoc(QD.from, QD.to), wD = cD.charCategorizer(QD.head), !XD(wD, cD, QD.from, QD.to) || ! function(DD, CD, cD, ID) {
                  return DD(CD.sliceDoc(cD, cD + 1)) == pD.f.Word && DD(CD.sliceDoc(ID - 1, ID)) == pD.f.Word
                }(wD, cD, QD.from, QD.to)) return ID.e.none
            } else if (fD = cD.sliceDoc(QD.from, QD.to), !fD) return ID.e.none
          }
          let SD = [];
          for (let pD of DD.o3) {
            let DD = new bD(cD.doc, fD, pD.from, pD.to);
            for (; !DD.next().done;) {
              let {
                from: pD,
                to: iD
              } = DD.value;
              if ((!wD || XD(wD, cD, pD, iD)) && (QD.empty && pD <= QD.from && iD >= QD.to ? SD.push(gD.range(pD, iD)) : (pD >= QD.to || iD <= QD.from) && SD.push(ND.range(pD, iD)), SD.length > CD.maxMatches)) return ID.e.none
            }
          }
          return ID.e.set(SD)
        }
      }, {
        qI: DD => DD.qI
      }),
      nD = ID.m.baseTheme({
        ".cm-selectionMatch": {
          backgroundColor: "#99ff7780"
        },
        ".cm-searchMatch .cm-selectionMatch": {
          backgroundColor: "transparent"
        }
      });
    const OD = pD.l.define({
      combine: DD => (0, pD.U)(DD, {
        top: !1,
        caseSensitive: !1,
        literal: !1,
        regexp: !1,
        wholeWord: !1,
        createPanel: DD => new DC(DD),
        scrollToMatch: DD => ID.m.scrollIntoView(DD)
      })
    });
    class PD {
      constructor(DD) {
        this.search = DD.search, this.caseSensitive = !!DD.caseSensitive, this.literal = !!DD.literal, this.regexp = !!DD.regexp, this.replace = DD.replace || "", this.valid = !!this.search && (!this.regexp || function(DD) {
          try {
            return new RegExp(DD, wD), !0
          } catch (CD) {
            return !1
          }
        }(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!DD.wholeWord, this.test = DD.test
      }
      unquote(DD) {
        return this.literal ? DD : DD.replace(/\\([nrt\\])/g, ((DD, CD) => "n" == CD ? "\n" : "r" == CD ? "\r" : "t" == CD ? "\t" : "\\"))
      }
      eq(DD) {
        return this.search == DD.search && this.replace == DD.replace && this.caseSensitive == DD.caseSensitive && this.regexp == DD.regexp && this.wholeWord == DD.wholeWord && this.test == DD.test
      }
      create() {
        return this.regexp ? new aD(this) : new xD(this)
      }
      getCursor(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cD = arguments.length > 2 ? arguments[2] : void 0,
          ID = DD.doc ? DD : pD.j.create({
            doc: DD
          });
        return null == cD && (cD = ID.doc.length), this.regexp ? qD(this, ID, CD, cD) : UD(this, ID, CD, cD)
      }
    }
    class HD {
      constructor(DD) {
        this.spec = DD
      }
    }

    function UD(DD, CD, cD, ID) {
      let iD;
      var fD, QD;
      return DD.wholeWord && (fD = CD.doc, QD = CD.charCategorizer(CD.selection.main.head), iD = (DD, CD, cD, ID) => ((ID > DD || ID + cD.length < CD) && (ID = Math.max(0, DD - 2), cD = fD.sliceString(ID, Math.min(fD.length, CD + 2))), (QD(JD(cD, DD - ID)) != pD.f.Word || QD(KD(cD, DD - ID)) != pD.f.Word) && (QD(KD(cD, CD - ID)) != pD.f.Word || QD(JD(cD, CD - ID)) != pD.f.Word))), DD.test && (iD = function(DD, CD, cD) {
        return (ID, pD, iD, fD) => {
          if (cD && !cD(ID, pD, iD, fD)) return !1;
          let bD = ID >= fD && pD <= fD + iD.length ? iD.slice(ID - fD, pD - fD) : CD.doc.sliceString(ID, pD);
          return DD(bD, CD, ID, pD)
        }
      }(DD.test, CD, iD)), new bD(CD.doc, DD.unquoted, cD, ID, DD.caseSensitive ? void 0 : DD => DD.toLowerCase(), iD)
    }
    class xD extends HD {
      constructor(DD) {
        super(DD)
      }
      nextMatch(DD, CD, cD) {
        let ID = UD(this.spec, DD, cD, DD.doc.length).nextOverlapping();
        if (ID.done) {
          let cD = Math.min(DD.doc.length, CD + this.spec.unquoted.length);
          ID = UD(this.spec, DD, 0, cD).nextOverlapping()
        }
        return ID.done || ID.value.from == CD && ID.value.to == cD ? null : ID.value
      }
      prevMatchInRange(DD, CD, cD) {
        for (let ID = cD;;) {
          let cD = Math.max(CD, ID - 1e4 - this.spec.unquoted.length),
            pD = UD(this.spec, DD, cD, ID),
            iD = null;
          for (; !pD.nextOverlapping().done;) iD = pD.value;
          if (iD) return iD;
          if (cD == CD) return null;
          ID -= 1e4
        }
      }
      prevMatch(DD, CD, cD) {
        let ID = this.prevMatchInRange(DD, 0, CD);
        return ID || (ID = this.prevMatchInRange(DD, Math.max(0, cD - this.spec.unquoted.length), DD.doc.length)), !ID || ID.from == CD && ID.to == cD ? null : ID
      }
      getReplacement(DD) {
        return this.spec.unquote(this.spec.replace)
      }
      matchAll(DD, CD) {
        let cD = UD(this.spec, DD, 0, DD.doc.length),
          ID = [];
        for (; !cD.next().done;) {
          if (ID.length >= CD) return null;
          ID.push(cD.value)
        }
        return ID
      }
      highlight(DD, CD, cD, ID) {
        let pD = UD(this.spec, DD, Math.max(0, CD - this.spec.unquoted.length), Math.min(cD + this.spec.unquoted.length, DD.doc.length));
        for (; !pD.next().done;) ID(pD.value.from, pD.value.to)
      }
    }

    function qD(DD, CD, cD, ID) {
      let iD;
      var fD;
      return DD.wholeWord && (fD = CD.charCategorizer(CD.selection.main.head), iD = (DD, CD, cD) => !cD[0].length || (fD(JD(cD.input, cD.index)) != pD.f.Word || fD(KD(cD.input, cD.index)) != pD.f.Word) && (fD(KD(cD.input, cD.index + cD[0].length)) != pD.f.Word || fD(JD(cD.input, cD.index + cD[0].length)) != pD.f.Word)), DD.test && (iD = function(DD, CD, cD) {
        return (ID, pD, iD) => (!cD || cD(ID, pD, iD)) && DD(iD[0], CD, ID, pD)
      }(DD.test, CD, iD)), new SD(CD.doc, DD.search, {
        ignoreCase: !DD.caseSensitive,
        test: iD
      }, cD, ID)
    }

    function JD(DD, CD) {
      return DD.slice((0, pD._)(DD, CD, !1), CD)
    }

    function KD(DD, CD) {
      return DD.slice(CD, (0, pD._)(DD, CD))
    }
    class aD extends HD {
      nextMatch(DD, CD, cD) {
        let ID = qD(this.spec, DD, cD, DD.doc.length).next();
        return ID.done && (ID = qD(this.spec, DD, 0, CD).next()), ID.done ? null : ID.value
      }
      prevMatchInRange(DD, CD, cD) {
        for (let ID = 1;; ID++) {
          let pD = Math.max(CD, cD - 1e4 * ID),
            iD = qD(this.spec, DD, pD, cD),
            fD = null;
          for (; !iD.next().done;) fD = iD.value;
          if (fD && (pD == CD || fD.from > pD + 10)) return fD;
          if (pD == CD) return null
        }
      }
      prevMatch(DD, CD, cD) {
        return this.prevMatchInRange(DD, 0, CD) || this.prevMatchInRange(DD, cD, DD.doc.length)
      }
      getReplacement(DD) {
        return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, ((CD, cD) => {
          if ("&" == cD) return DD.match[0];
          if ("$" == cD) return "$";
          for (let ID = cD.length; ID > 0; ID--) {
            let CD = +cD.slice(0, ID);
            if (CD > 0 && CD < DD.match.length) return DD.match[CD] + cD.slice(ID)
          }
          return CD
        }))
      }
      matchAll(DD, CD) {
        let cD = qD(this.spec, DD, 0, DD.doc.length),
          ID = [];
        for (; !cD.next().done;) {
          if (ID.length >= CD) return null;
          ID.push(cD.value)
        }
        return ID
      }
      highlight(DD, CD, cD, ID) {
        let pD = qD(this.spec, DD, Math.max(0, CD - 250), Math.min(cD + 250, DD.doc.length));
        for (; !pD.next().done;) ID(pD.value.from, pD.value.to)
      }
    }
    const VD = pD.D.define(),
      zD = pD.D.define(),
      jD = pD.F.define({
        create: DD => new lD(eD(DD).create(), null),
        update(DD, CD) {
          for (let cD of CD.effects) cD.is(VD) ? DD = new lD(cD.value.create(), DD.panel) : cD.is(zD) && (DD = new lD(DD.query, cD.value ? ED : null));
          return DD
        },
        provide: DD => ID.tb.from(DD, (DD => DD.panel))
      });
    class lD {
      constructor(DD, CD) {
        this.query = DD, this.panel = CD
      }
    }
    const LD = ID.e.mark({
        class: "cm-searchMatch"
      }),
      TD = ID.e.mark({
        class: "cm-searchMatch cm-searchMatch-selected"
      }),
      GD = ID.u.fromClass(class {
        constructor(DD) {
          this.view = DD, this.qI = this.highlight(DD.state.field(jD))
        }
        update(DD) {
          let CD = DD.state.field(jD);
          (CD != DD.startState.field(jD) || DD.docChanged || DD.selectionSet || DD.viewportChanged) && (this.qI = this.highlight(CD))
        }
        highlight(DD) {
          let {
            query: CD,
            panel: cD
          } = DD;
          if (!cD || !CD.spec.valid) return ID.e.none;
          let {
            view: iD
          } = this, fD = new pD.u;
          for (let ID = 0, pD = iD.o3, bD = pD.length; ID < bD; ID++) {
            let {
              from: DD,
              to: cD
            } = pD[ID];
            for (; ID < bD - 1 && cD > pD[ID + 1].from - 500;) cD = pD[++ID].to;
            CD.highlight(iD.state, DD, cD, ((DD, CD) => {
              let cD = iD.state.selection.df.some((cD => cD.from == DD && cD.to == CD));
              fD.add(DD, CD, cD ? TD : LD)
            }))
          }
          return fD.finish()
        }
      }, {
        qI: DD => DD.qI
      });

    function RD(DD) {
      return CD => {
        let cD = CD.state.field(jD, !1);
        return cD && cD.query.spec.valid ? DD(CD, cD) : rD(CD)
      }
    }
    const kD = RD(((DD, CD) => {
        let {
          query: cD
        } = CD, {
          to: ID
        } = DD.state.selection.main, iD = cD.nextMatch(DD.state, ID, ID);
        if (!iD) return !1;
        let fD = pD.i.single(iD.from, iD.to),
          bD = DD.state.facet(OD);
        return DD.dispatch({
          selection: fD,
          effects: [pC(DD, iD), bD.scrollToMatch(fD.main, DD)],
          userEvent: "select.search"
        }), hD(DD), !0
      })),
      dD = RD(((DD, CD) => {
        let {
          query: cD
        } = CD, {
          state: ID
        } = DD, {
          from: iD
        } = ID.selection.main, fD = cD.prevMatch(ID, iD, iD);
        if (!fD) return !1;
        let bD = pD.i.single(fD.from, fD.to),
          QD = DD.state.facet(OD);
        return DD.dispatch({
          selection: bD,
          effects: [pC(DD, fD), QD.scrollToMatch(bD.main, DD)],
          userEvent: "select.search"
        }), hD(DD), !0
      })),
      YD = RD(((DD, CD) => {
        let {
          query: cD
        } = CD, ID = cD.matchAll(DD.state, 1e3);
        return !(!ID || !ID.length) && (DD.dispatch({
          selection: pD.i.create(ID.map((DD => pD.i.range(DD.from, DD.to)))),
          userEvent: "select.search.matches"
        }), !0)
      })),
      WD = RD(((DD, CD) => {
        let {
          query: cD
        } = CD, {
          state: iD
        } = DD, {
          from: fD,
          to: bD
        } = iD.selection.main;
        if (iD.readOnly) return !1;
        let QD = cD.nextMatch(iD, fD, fD);
        if (!QD) return !1;
        let wD, SD, BD = QD,
          yD = [],
          MD = [];
        BD.from == fD && BD.to == bD && (SD = iD.toText(cD.getReplacement(BD)), yD.push({
          from: BD.from,
          to: BD.to,
          insert: SD
        }), BD = cD.nextMatch(iD, BD.from, BD.to), MD.push(ID.m.announce.of(iD.phrase("replaced match on line $", iD.doc.lineAt(fD).number) + ".")));
        let tD = DD.state.changes(yD);
        return BD && (wD = pD.i.single(BD.from, BD.to).map(tD), MD.push(pC(DD, BD)), MD.push(iD.facet(OD).scrollToMatch(wD.main, DD))), DD.dispatch({
          changes: tD,
          selection: wD,
          effects: MD,
          userEvent: "input.replace"
        }), !0
      })),
      sD = RD(((DD, CD) => {
        let {
          query: cD
        } = CD;
        if (DD.state.readOnly) return !1;
        let pD = cD.matchAll(DD.state, 1e9).map((DD => {
          let {
            from: CD,
            to: ID
          } = DD;
          return {
            from: CD,
            to: ID,
            insert: cD.getReplacement(DD)
          }
        }));
        if (!pD.length) return !1;
        let iD = DD.state.phrase("replaced $ matches", pD.length) + ".";
        return DD.dispatch({
          changes: pD,
          effects: ID.m.announce.of(iD),
          userEvent: "input.replace.all"
        }), !0
      }));

    function ED(DD) {
      return DD.state.facet(OD).createPanel(DD)
    }

    function eD(DD, CD) {
      var cD, ID, pD, iD, fD;
      let bD = DD.selection.main,
        QD = bD.empty || bD.to > bD.from + 100 ? "" : DD.sliceDoc(bD.from, bD.to);
      if (CD && !QD) return CD;
      let wD = DD.facet(OD);
      return new PD({
        search: (null !== (cD = null === CD || void 0 === CD ? void 0 : CD.literal) && void 0 !== cD ? cD : wD.literal) ? QD : QD.replace(/\n/g, "\\n"),
        caseSensitive: null !== (ID = null === CD || void 0 === CD ? void 0 : CD.caseSensitive) && void 0 !== ID ? ID : wD.caseSensitive,
        literal: null !== (pD = null === CD || void 0 === CD ? void 0 : CD.literal) && void 0 !== pD ? pD : wD.literal,
        regexp: null !== (iD = null === CD || void 0 === CD ? void 0 : CD.regexp) && void 0 !== iD ? iD : wD.regexp,
        wholeWord: null !== (fD = null === CD || void 0 === CD ? void 0 : CD.wholeWord) && void 0 !== fD ? fD : wD.wholeWord
      })
    }

    function uD(DD) {
      let CD = (0, ID.K)(DD, ED);
      return CD && CD.dom.querySelector("[main-field]")
    }

    function hD(DD) {
      let CD = uD(DD);
      CD && CD == DD.root.activeElement && CD.select()
    }
    const rD = DD => {
        let CD = DD.state.field(jD, !1);
        if (CD && CD.panel) {
          let cD = uD(DD);
          if (cD && cD != DD.root.activeElement) {
            let ID = eD(DD.state, CD.query.spec);
            ID.valid && DD.dispatch({
              effects: VD.of(ID)
            }), cD.focus(), cD.select()
          }
        } else DD.dispatch({
          effects: [zD.of(!0), CD ? VD.of(eD(DD.state, CD.query.spec)) : pD.D.appendConfig.of(fC)]
        });
        return !0
      },
      AD = DD => {
        let CD = DD.state.field(jD, !1);
        if (!CD || !CD.panel) return !1;
        let cD = (0, ID.K)(DD, ED);
        return cD && cD.dom.contains(DD.root.activeElement) && DD.focus(), DD.dispatch({
          effects: zD.of(!1)
        }), !0
      },
      FD = [{
        key: "Mod-f",
        run: rD,
        scope: "editor search-panel"
      }, {
        key: "F3",
        run: kD,
        shift: dD,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Mod-g",
        run: kD,
        shift: dD,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Escape",
        run: AD,
        scope: "editor search-panel"
      }, {
        key: "Mod-Shift-l",
        run: DD => {
          let {
            state: CD,
            dispatch: cD
          } = DD, ID = CD.selection;
          if (ID.df.length > 1 || ID.main.empty) return !1;
          let {
            from: iD,
            to: fD
          } = ID.main, QD = [], wD = 0;
          for (let SD = new bD(CD.doc, CD.sliceDoc(iD, fD)); !SD.next().done;) {
            if (QD.length > 1e3) return !1;
            SD.value.from == iD && (wD = QD.length), QD.push(pD.i.range(SD.value.from, SD.value.to))
          }
          return cD(CD.update({
            selection: pD.i.create(QD, wD),
            userEvent: "select.search.matches"
          })), !0
        }
      }, {
        key: "Mod-Alt-g",
        run: DD => {
          let {
            state: CD
          } = DD, cD = String(CD.doc.lineAt(DD.state.selection.main.head).number), {
            close: iD,
            result: fD
          } = (0, ID.qb)(DD, {
            label: CD.phrase("Go to line"),
            input: {
              type: "text",
              name: "line",
              value: cD
            },
            focus: !0,
            submitLabel: CD.phrase("go")
          });
          return fD.then((cD => {
            let fD = cD && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(cD.elements.line.value);
            if (!fD) return void DD.dispatch({
              effects: iD
            });
            let bD = CD.doc.lineAt(CD.selection.main.head),
              [, QD, wD, SD, BD] = fD,
              yD = SD ? +SD.slice(1) : 0,
              MD = wD ? +wD : bD.number;
            if (wD && BD) {
              let DD = MD / 100;
              QD && (DD = DD * ("-" == QD ? -1 : 1) + bD.number / CD.doc.lines), MD = Math.round(CD.doc.lines * DD)
            } else wD && QD && (MD = MD * ("-" == QD ? -1 : 1) + bD.number);
            let tD = CD.doc.line(Math.max(1, Math.min(CD.doc.lines, MD))),
              ZD = pD.i.cursor(tD.from + Math.max(0, Math.min(yD, tD.length)));
            DD.dispatch({
              effects: [iD, ID.m.scrollIntoView(ZD.from, {
                y: "center"
              })],
              selection: ZD
            })
          })), !0
        }
      }, {
        key: "Mod-d",
        run: DD => {
          let {
            state: CD,
            dispatch: cD
          } = DD, {
            df: iD
          } = CD.selection;
          if (iD.some((DD => DD.from === DD.to))) return (DD => {
            let {
              state: CD,
              dispatch: cD
            } = DD, {
              selection: ID
            } = CD, iD = pD.i.create(ID.df.map((DD => CD.wordAt(DD.head) || pD.i.cursor(DD.head))), ID.mainIndex);
            return !iD.eq(ID) && (cD(CD.update({
              selection: iD
            })), !0)
          })({
            state: CD,
            dispatch: cD
          });
          let fD = CD.sliceDoc(iD[0].from, iD[0].to);
          if (CD.selection.df.some((DD => CD.sliceDoc(DD.from, DD.to) != fD))) return !1;
          let QD = function(DD, CD) {
            let {
              main: cD,
              df: ID
            } = DD.selection, pD = DD.wordAt(cD.head), iD = pD && pD.from == cD.from && pD.to == cD.to;
            for (let fD = !1, QD = new bD(DD.doc, CD, ID[ID.length - 1].to);;) {
              if (QD.next(), !QD.done) {
                if (fD && ID.some((DD => DD.from == QD.value.from))) continue;
                if (iD) {
                  let CD = DD.wordAt(QD.value.from);
                  if (!CD || CD.from != QD.value.from || CD.to != QD.value.to) continue
                }
                return QD.value
              }
              if (fD) return null;
              QD = new bD(DD.doc, CD, 0, Math.max(0, ID[ID.length - 1].from - 1)), fD = !0
            }
          }(CD, fD);
          return !!QD && (cD(CD.update({
            selection: CD.selection.addRange(pD.i.range(QD.from, QD.to), !1),
            effects: ID.m.scrollIntoView(QD.to)
          })), !0)
        },
        preventDefault: !0
      }];
    class DC {
      constructor(DD) {
        this.view = DD;
        let CD = this.query = DD.state.field(jD).query.spec;

        function cD(DD, CD, cD) {
          return (0, iD.b)("button", {
            class: "cm-button",
            name: DD,
            onclick: CD,
            type: "button"
          }, cD)
        }
        this.commit = this.commit.bind(this), this.searchField = (0, iD.b)("input", {
          value: CD.search,
          placeholder: CC(DD, "Find"),
          "aria-label": CC(DD, "Find"),
          class: "cm-textfield",
          name: "search",
          form: "",
          "main-field": "true",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.replaceField = (0, iD.b)("input", {
          value: CD.replace,
          placeholder: CC(DD, "Replace"),
          "aria-label": CC(DD, "Replace"),
          class: "cm-textfield",
          name: "replace",
          form: "",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.caseField = (0, iD.b)("input", {
          type: "checkbox",
          name: "case",
          form: "",
          checked: CD.caseSensitive,
          onchange: this.commit
        }), this.reField = (0, iD.b)("input", {
          type: "checkbox",
          name: "re",
          form: "",
          checked: CD.regexp,
          onchange: this.commit
        }), this.wordField = (0, iD.b)("input", {
          type: "checkbox",
          name: "word",
          form: "",
          checked: CD.wholeWord,
          onchange: this.commit
        }), this.dom = (0, iD.b)("div", {
          onkeydown: DD => this.keydown(DD),
          class: "cm-search"
        }, [this.searchField, cD("next", (() => kD(DD)), [CC(DD, "next")]), cD("prev", (() => dD(DD)), [CC(DD, "previous")]), cD("select", (() => YD(DD)), [CC(DD, "all")]), (0, iD.b)("label", null, [this.caseField, CC(DD, "match case")]), (0, iD.b)("label", null, [this.reField, CC(DD, "regexp")]), (0, iD.b)("label", null, [this.wordField, CC(DD, "by word")]), ...DD.state.readOnly ? [] : [(0, iD.b)("br"), this.replaceField, cD("replace", (() => WD(DD)), [CC(DD, "replace")]), cD("replaceAll", (() => sD(DD)), [CC(DD, "replace all")])], (0, iD.b)("button", {
          name: "close",
          onclick: () => AD(DD),
          "aria-label": CC(DD, "close"),
          type: "button"
        }, ["\xd7"])])
      }
      commit() {
        let DD = new PD({
          search: this.searchField.value,
          caseSensitive: this.caseField.checked,
          regexp: this.reField.checked,
          wholeWord: this.wordField.checked,
          replace: this.replaceField.value
        });
        DD.eq(this.query) || (this.query = DD, this.view.dispatch({
          effects: VD.of(DD)
        }))
      }
      keydown(DD) {
        (0, ID.mb)(this.view, DD, "search-panel") ? DD.preventDefault(): 13 == DD.keyCode && DD.target == this.searchField ? (DD.preventDefault(), (DD.shiftKey ? dD : kD)(this.view)) : 13 == DD.keyCode && DD.target == this.replaceField && (DD.preventDefault(), WD(this.view))
      }
      update(DD) {
        for (let CD of DD.transactions)
          for (let DD of CD.effects) DD.is(VD) && !DD.value.eq(this.query) && this.setQuery(DD.value)
      }
      setQuery(DD) {
        this.query = DD, this.searchField.value = DD.search, this.replaceField.value = DD.replace, this.caseField.checked = DD.caseSensitive, this.reField.checked = DD.regexp, this.wordField.checked = DD.wholeWord
      }
      mount() {
        this.searchField.select()
      }
      get pos() {
        return 80
      }
      get top() {
        return this.view.state.facet(OD).top
      }
    }

    function CC(DD, CD) {
      return DD.state.phrase(CD)
    }
    const cC = 30,
      IC = /[\s\.,:;?!]/;

    function pC(DD, CD) {
      let {
        from: cD,
        to: pD
      } = CD, iD = DD.state.doc.lineAt(cD), fD = DD.state.doc.lineAt(pD).to, bD = Math.max(iD.from, cD - cC), QD = Math.min(fD, pD + cC), wD = DD.state.sliceDoc(bD, QD);
      if (bD != iD.from)
        for (let ID = 0; ID < cC; ID++)
          if (!IC.test(wD[ID + 1]) && IC.test(wD[ID])) {
            wD = wD.slice(ID);
            break
          } if (QD != fD)
        for (let ID = wD.length - 1; ID > wD.length - cC; ID--)
          if (!IC.test(wD[ID - 1]) && IC.test(wD[ID])) {
            wD = wD.slice(0, ID);
            break
          } return ID.m.announce.of(`${DD.state.phrase("current match")}. ${wD} ${DD.state.phrase("on line")} ${iD.number}.`)
    }
    const iC = ID.m.baseTheme({
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
      fC = [jD, pD.s.low(GD), iC]
  },
  40384: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => aD,
      i: () => wC,
      m: () => Hp,
      q: () => Sf,
      u: () => hC,
      y: () => JD,
      B: () => Ki,
      E: () => rp,
      I: () => bi,
      K: () => Fi,
      L: () => ui,
      M: () => Zf,
      P: () => gi,
      N: () => jf,
      S: () => Zi,
      W: () => ei,
      _: () => zp,
      cb: () => Kf,
      fb: () => sC,
      ib: () => Oi,
      kb: () => xi,
      mb: () => Lp,
      qb: () => ff,
      tb: () => pf,
      wb: () => ki
    });
    for (var ID = cD(40379), pD = cD(40387), iD = {
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
      }, fD = {
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
      }, bD = "undefined" != typeof navigator && /Mac/.test(navigator.platform), QD = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), wD = 0; wD < 10; wD++) iD[48 + wD] = iD[96 + wD] = String(wD);
    for (wD = 1; wD <= 24; wD++) iD[wD + 111] = "F" + wD;
    for (wD = 65; wD <= 90; wD++) iD[wD] = String.fromCharCode(wD + 32), fD[wD] = String.fromCharCode(wD);
    for (var SD in iD) fD.hasOwnProperty(SD) || (fD[SD] = iD[SD]);
    var BD = cD(40394);
    let yD = "undefined" != typeof navigator ? navigator : {
        userAgent: "",
        vendor: "",
        platform: ""
      },
      MD = "undefined" != typeof document ? document : {
        documentElement: {
          style: {}
        }
      };
    const tD = /Edge\/(\d+)/.exec(yD.userAgent),
      ZD = /MSIE \d/.test(yD.userAgent),
      oD = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(yD.userAgent),
      vD = !!(ZD || oD || tD),
      ND = !vD && /gecko\/(\d+)/i.test(yD.userAgent),
      gD = !vD && /Chrome\/(\d+)/.exec(yD.userAgent),
      XD = "webkitFontSmoothing" in MD.documentElement.style,
      mD = !vD && /Apple Computer/.test(yD.vendor),
      nD = mD && (/Mobile\/\w+/.test(yD.userAgent) || yD.maxTouchPoints > 2);
    var OD = {
      mac: nD || /Mac/.test(yD.platform),
      windows: /Win/.test(yD.platform),
      linux: /Linux|X11/.test(yD.platform),
      ie: vD,
      ie_version: ZD ? MD.documentMode || 6 : oD ? +oD[1] : tD ? +tD[1] : 0,
      gecko: ND,
      gecko_version: ND ? +(/Firefox\/(\d+)/.exec(yD.userAgent) || [0, 0])[1] : 0,
      chrome: !!gD,
      chrome_version: gD ? +gD[1] : 0,
      ios: nD,
      android: /Android\b/.test(yD.userAgent),
      webkit: XD,
      webkit_version: XD ? +(/\bAppleWebKit\/(\d+)/.exec(yD.userAgent) || [0, 0])[1] : 0,
      safari: mD,
      safari_version: mD ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(yD.userAgent) || [0, 0])[1] : 0,
      tabSize: null != MD.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size"
    };

    function PD(DD, CD) {
      for (let cD in DD) "class" == cD && CD.class ? CD.class += " " + DD.class : "style" == cD && CD.style ? CD.style += ";" + DD.style : CD[cD] = DD[cD];
      return CD
    }
    const HD = Object.create(null);

    function UD(DD, CD, cD) {
      if (DD == CD) return !0;
      DD || (DD = HD), CD || (CD = HD);
      let ID = Object.keys(DD),
        pD = Object.keys(CD);
      if (ID.length - (cD && ID.indexOf(cD) > -1 ? 1 : 0) != pD.length - (cD && pD.indexOf(cD) > -1 ? 1 : 0)) return !1;
      for (let iD of ID)
        if (iD != cD && (-1 == pD.indexOf(iD) || DD[iD] !== CD[iD])) return !1;
      return !0
    }

    function xD(DD, CD, cD) {
      let ID = !1;
      if (CD)
        for (let pD in CD) cD && pD in cD || (ID = !0, "style" == pD ? DD.style.cssText = "" : DD.removeAttribute(pD));
      if (cD)
        for (let pD in cD) CD && CD[pD] == cD[pD] || (ID = !0, "style" == pD ? DD.style.cssText = cD[pD] : DD.setAttribute(pD, cD[pD]));
      return ID
    }

    function qD(DD) {
      let CD = Object.create(null);
      for (let cD = 0; cD < DD.attributes.length; cD++) {
        let ID = DD.attributes[cD];
        CD[ID.name] = ID.value
      }
      return CD
    }
    class JD {
      eq(DD) {
        return !1
      }
      updateDOM(DD, CD, cD) {
        return !1
      }
      compare(DD) {
        return this == DD || this.constructor == DD.constructor && this.eq(DD)
      }
      get estimatedHeight() {
        return -1
      }
      get lineBreaks() {
        return 0
      }
      ignoreEvent(DD) {
        return !0
      }
      coordsAt(DD, CD, cD) {
        return null
      }
      get isHidden() {
        return !1
      }
      get editable() {
        return !1
      }
      destroy(DD) {}
    }
    var KD = function(DD) {
      return DD[DD.Text = 0] = "Text", DD[DD.WidgetBefore = 1] = "WidgetBefore", DD[DD.WidgetAfter = 2] = "WidgetAfter", DD[DD.WidgetRange = 3] = "WidgetRange", DD
    }(KD || (KD = {}));
    class aD extends ID.B {
      constructor(DD, CD, cD, ID) {
        super(), this.startSide = DD, this.endSide = CD, this.widget = cD, this.spec = ID
      }
      get heightRelevant() {
        return !1
      }
      static mark(DD) {
        return new VD(DD)
      }
      static widget(DD) {
        let CD = Math.max(-1e4, Math.min(1e4, DD.side || 0)),
          cD = !!DD.block;
        return CD += cD && !DD.inlineOrder ? CD > 0 ? 3e8 : -4e8 : CD > 0 ? 1e8 : -1e8, new jD(DD, CD, CD, cD, DD.widget || null, !1)
      }
      static replace(DD) {
        let CD, cD, ID = !!DD.block;
        if (DD.isBlockGap) CD = -5e8, cD = 4e8;
        else {
          let {
            start: pD,
            end: iD
          } = lD(DD, ID);
          CD = (pD ? ID ? -3e8 : -1 : 5e8) - 1, cD = 1 + (iD ? ID ? 2e8 : 1 : -6e8)
        }
        return new jD(DD, CD, cD, ID, DD.widget || null, !0)
      }
      static line(DD) {
        return new zD(DD)
      }
      static set(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return ID.x.of(DD, CD)
      }
      hasHeight() {
        return !!this.widget && this.widget.estimatedHeight > -1
      }
    }
    aD.none = ID.x.empty;
    class VD extends aD {
      constructor(DD) {
        let {
          start: CD,
          end: cD
        } = lD(DD);
        super(CD ? -1 : 5e8, cD ? 1 : -6e8, null, DD), this.tagName = DD.tagName || "span", this.attrs = DD.class && DD.attributes ? PD(DD.attributes, {
          class: DD.class
        }) : DD.class ? {
          class: DD.class
        } : DD.attributes || HD
      }
      eq(DD) {
        return this == DD || DD instanceof VD && this.tagName == DD.tagName && UD(this.attrs, DD.attrs)
      }
      range(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DD;
        if (DD >= CD) throw new RangeError("Mark decorations may not be empty");
        return super.range(DD, CD)
      }
    }
    VD.prototype.point = !1;
    class zD extends aD {
      constructor(DD) {
        super(-2e8, -2e8, null, DD)
      }
      eq(DD) {
        return DD instanceof zD && this.spec.class == DD.spec.class && UD(this.spec.attributes, DD.spec.attributes)
      }
      range(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DD;
        if (CD != DD) throw new RangeError("Line decoration ranges must be zero-length");
        return super.range(DD, CD)
      }
    }
    zD.prototype.mapMode = ID.o.TrackBefore, zD.prototype.point = !0;
    class jD extends aD {
      constructor(DD, CD, cD, pD, iD, fD) {
        super(CD, cD, iD, DD), this.block = pD, this.isReplace = fD, this.mapMode = pD ? CD <= 0 ? ID.o.TrackBefore : ID.o.TrackAfter : ID.o.TrackDel
      }
      get type() {
        return this.startSide != this.endSide ? KD.WidgetRange : this.startSide <= 0 ? KD.WidgetBefore : KD.WidgetAfter
      }
      get heightRelevant() {
        return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0)
      }
      eq(DD) {
        return DD instanceof jD && (CD = this.widget, cD = DD.widget, CD == cD || !!(CD && cD && CD.compare(cD))) && this.block == DD.block && this.startSide == DD.startSide && this.endSide == DD.endSide;
        var CD, cD
      }
      range(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DD;
        if (this.isReplace && (DD > CD || DD == CD && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && CD != DD) throw new RangeError("Widget decorations can only have zero-length ranges");
        return super.range(DD, CD)
      }
    }

    function lD(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          inclusiveStart: cD,
          inclusiveEnd: ID
        } = DD;
      return null == cD && (cD = DD.inclusive), null == ID && (ID = DD.inclusive), {
        start: null !== cD && void 0 !== cD ? cD : CD,
        end: null !== ID && void 0 !== ID ? ID : CD
      }
    }

    function LD(DD, CD, cD) {
      let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        pD = cD.length - 1;
      pD >= 0 && cD[pD] + ID >= DD ? cD[pD] = Math.max(cD[pD], CD) : cD.push(DD, CD)
    }
    jD.prototype.point = !0;
    class TD extends ID.B {
      constructor(DD, CD) {
        super(), this.tagName = DD, this.attributes = CD
      }
      eq(DD) {
        return DD == this || DD instanceof TD && this.tagName == DD.tagName && UD(this.attributes, DD.attributes)
      }
      static create(DD) {
        return new TD(DD.tagName, DD.attributes || HD)
      }
      static set(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return ID.x.of(DD, CD)
      }
    }

    function GD(DD) {
      let CD;
      return CD = 11 == DD.nodeType ? DD.getSelection ? DD : DD.ownerDocument : DD, CD.getSelection()
    }

    function RD(DD, CD) {
      return !!CD && (DD == CD || DD.contains(1 != CD.nodeType ? CD.parentNode : CD))
    }

    function kD(DD, CD) {
      if (!CD.anchorNode) return !1;
      try {
        return RD(DD, CD.anchorNode)
      } catch (cD) {
        return !1
      }
    }

    function dD(DD) {
      return 3 == DD.nodeType ? IC(DD, 0, DD.nodeValue.length).getClientRects() : 1 == DD.nodeType ? DD.getClientRects() : []
    }

    function YD(DD, CD, cD, ID) {
      return !!cD && (ED(DD, CD, cD, ID, -1) || ED(DD, CD, cD, ID, 1))
    }

    function WD(DD) {
      for (var CD = 0;; CD++)
        if (!(DD = DD.previousSibling)) return CD
    }

    function sD(DD) {
      return 1 == DD.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(DD.nodeName)
    }

    function ED(DD, CD, cD, ID, pD) {
      for (;;) {
        if (DD == cD && CD == ID) return !0;
        if (CD == (pD < 0 ? 0 : eD(DD))) {
          if ("DIV" == DD.nodeName) return !1;
          let cD = DD.parentNode;
          if (!cD || 1 != cD.nodeType) return !1;
          CD = WD(DD) + (pD < 0 ? 0 : 1), DD = cD
        } else {
          if (1 != DD.nodeType) return !1;
          if (1 == (DD = DD.childNodes[CD + (pD < 0 ? -1 : 0)]).nodeType && "false" == DD.contentEditable) return !1;
          CD = pD < 0 ? eD(DD) : 0
        }
      }
    }

    function eD(DD) {
      return 3 == DD.nodeType ? DD.nodeValue.length : DD.childNodes.length
    }

    function uD(DD, CD) {
      let cD = CD ? DD.left : DD.right;
      return {
        left: cD,
        right: cD,
        top: DD.top,
        bottom: DD.bottom
      }
    }

    function hD(DD) {
      let CD = DD.visualViewport;
      return CD ? {
        left: 0,
        right: CD.width,
        top: 0,
        bottom: CD.height
      } : {
        left: 0,
        right: DD.innerWidth,
        top: 0,
        bottom: DD.innerHeight
      }
    }

    function rD(DD, CD) {
      let cD = CD.width / DD.offsetWidth,
        ID = CD.height / DD.offsetHeight;
      return (cD > .995 && cD < 1.005 || !isFinite(cD) || Math.abs(CD.width - DD.offsetWidth) < 1) && (cD = 1), (ID > .995 && ID < 1.005 || !isFinite(ID) || Math.abs(CD.height - DD.offsetHeight) < 1) && (ID = 1), {
        scaleX: cD,
        scaleY: ID
      }
    }

    function AD(DD) {
      let CD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        cD = DD.ownerDocument,
        ID = null,
        pD = null;
      for (let iD = DD.parentNode; iD && (iD != cD.body && (CD && !ID || !pD));)
        if (1 == iD.nodeType) !pD && iD.scrollHeight > iD.clientHeight && (pD = iD), CD && !ID && iD.scrollWidth > iD.clientWidth && (ID = iD), iD = iD.assignedSlot || iD.parentNode;
        else {
          if (11 != iD.nodeType) break;
          iD = iD.host
        } return {
        x: ID,
        y: pD
      }
    }
    TD.prototype.startSide = TD.prototype.endSide = -1;
    class FD {
      constructor() {
        this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
      }
      eq(DD) {
        return this.anchorNode == DD.anchorNode && this.anchorOffset == DD.anchorOffset && this.focusNode == DD.focusNode && this.focusOffset == DD.focusOffset
      }
      setRange(DD) {
        let {
          anchorNode: CD,
          focusNode: cD
        } = DD;
        this.set(CD, Math.min(DD.anchorOffset, CD ? eD(CD) : 0), cD, Math.min(DD.focusOffset, cD ? eD(cD) : 0))
      }
      set(DD, CD, cD, ID) {
        this.anchorNode = DD, this.anchorOffset = CD, this.focusNode = cD, this.focusOffset = ID
      }
    }
    let DC, CC = null;

    function cC(DD) {
      if (DD.setActive) return DD.setActive();
      if (CC) return DD.focus(CC);
      let CD = [];
      for (let cD = DD; cD && (CD.push(cD, cD.scrollTop, cD.scrollLeft), cD != cD.ownerDocument); cD = cD.parentNode);
      if (DD.focus(null == CC ? {
          get preventScroll() {
            return CC = {
              preventScroll: !0
            }, !0
          }
        } : void 0), !CC) {
        CC = !1;
        for (let DD = 0; DD < CD.length;) {
          let cD = CD[DD++],
            ID = CD[DD++],
            pD = CD[DD++];
          cD.scrollTop != ID && (cD.scrollTop = ID), cD.scrollLeft != pD && (cD.scrollLeft = pD)
        }
      }
    }

    function IC(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : CD,
        ID = DC || (DC = document.createRange());
      return ID.setEnd(DD, cD), ID.setStart(DD, CD), ID
    }

    function pC(DD, CD, cD, ID) {
      let pD = {
        key: CD,
        code: CD,
        keyCode: cD,
        which: cD,
        cancelable: !0
      };
      ID && ({
        altKey: pD.altKey,
        ctrlKey: pD.ctrlKey,
        shiftKey: pD.shiftKey,
        metaKey: pD.metaKey
      } = ID);
      let iD = new KeyboardEvent("keydown", pD);
      iD.synthetic = !0, DD.dispatchEvent(iD);
      let fD = new KeyboardEvent("keyup", pD);
      return fD.synthetic = !0, DD.dispatchEvent(fD), iD.defaultPrevented || fD.defaultPrevented
    }

    function iC(DD) {
      return DD instanceof Window ? DD.pageYOffset > Math.max(0, DD.document.documentElement.scrollHeight - DD.innerHeight - 4) : DD.scrollTop > Math.max(1, DD.scrollHeight - DD.clientHeight - 4)
    }

    function fC(DD, CD) {
      for (let cD = DD, ID = CD;;) {
        if (3 == cD.nodeType && ID > 0) return {
          node: cD,
          offset: ID
        };
        if (1 == cD.nodeType && ID > 0) {
          if ("false" == cD.contentEditable) return null;
          cD = cD.childNodes[ID - 1], ID = eD(cD)
        } else {
          if (!cD.parentNode || sD(cD)) return null;
          ID = WD(cD), cD = cD.parentNode
        }
      }
    }

    function bC(DD, CD) {
      for (let cD = DD, ID = CD;;) {
        if (3 == cD.nodeType && ID < cD.nodeValue.length) return {
          node: cD,
          offset: ID
        };
        if (1 == cD.nodeType && ID < cD.childNodes.length) {
          if ("false" == cD.contentEditable) return null;
          cD = cD.childNodes[ID], ID = 0
        } else {
          if (!cD.parentNode || sD(cD)) return null;
          ID = WD(cD) + 1, cD = cD.parentNode
        }
      }
    }
    OD.safari && OD.safari_version >= 26 && (CC = !1);
    class QC {
      constructor(DD, CD) {
        let cD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.node = DD, this.offset = CD, this.precise = cD
      }
      static before(DD, CD) {
        return new QC(DD.parentNode, WD(DD), CD)
      }
      static after(DD, CD) {
        return new QC(DD.parentNode, WD(DD) + 1, CD)
      }
    }
    var wC = function(DD) {
      return DD[DD.LTR = 0] = "LTR", DD[DD.RTL = 1] = "RTL", DD
    }(wC || (wC = {}));
    const SC = wC.LTR,
      BC = wC.RTL;

    function yC(DD) {
      let CD = [];
      for (let cD = 0; cD < DD.length; cD++) CD.push(1 << +DD[cD]);
      return CD
    }
    const MC = yC("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),
      tC = yC("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),
      ZC = Object.create(null),
      oC = [];
    for (let lf of ["()", "[]", "{}"]) {
      let DD = lf.charCodeAt(0),
        CD = lf.charCodeAt(1);
      ZC[DD] = CD, ZC[CD] = -DD
    }

    function vC(DD) {
      return DD <= 247 ? MC[DD] : 1424 <= DD && DD <= 1524 ? 2 : 1536 <= DD && DD <= 1785 ? tC[DD - 1536] : 1774 <= DD && DD <= 2220 ? 4 : 8192 <= DD && DD <= 8204 ? 256 : 64336 <= DD && DD <= 65023 ? 4 : 1
    }
    const NC = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
    class gC {
      get dir() {
        return this.level % 2 ? BC : SC
      }
      constructor(DD, CD, cD) {
        this.from = DD, this.to = CD, this.level = cD
      }
      side(DD, CD) {
        return this.dir == CD == DD ? this.to : this.from
      }
      forward(DD, CD) {
        return DD == (this.dir == CD)
      }
      static find(DD, CD, cD, ID) {
        let pD = -1;
        for (let iD = 0; iD < DD.length; iD++) {
          let fD = DD[iD];
          if (fD.from <= CD && fD.to >= CD) {
            if (fD.level == cD) return iD;
            (pD < 0 || (0 != ID ? ID < 0 ? fD.from < CD : fD.to > CD : DD[pD].level > fD.level)) && (pD = iD)
          }
        }
        if (pD < 0) throw new RangeError("Index out of range");
        return pD
      }
    }

    function XC(DD, CD) {
      if (DD.length != CD.length) return !1;
      for (let cD = 0; cD < DD.length; cD++) {
        let ID = DD[cD],
          pD = CD[cD];
        if (ID.from != pD.from || ID.to != pD.to || ID.direction != pD.direction || !XC(ID.inner, pD.inner)) return !1
      }
      return !0
    }
    const mC = [];

    function nC(DD, CD, cD, ID, pD, iD, fD) {
      let bD = ID % 2 ? 2 : 1;
      if (ID % 2 == pD % 2)
        for (let QD = CD, wD = 0; QD < cD;) {
          let CD = !0,
            SD = !1;
          if (wD == iD.length || QD < iD[wD].from) {
            let DD = mC[QD];
            DD != bD && (CD = !1, SD = 16 == DD)
          }
          let BD = CD || 1 != bD ? null : [],
            yD = CD ? ID : ID + 1,
            MD = QD;
          DD: for (;;)
            if (wD < iD.length && MD == iD[wD].from) {
              if (SD) break DD;
              let tD = iD[wD];
              if (!CD)
                for (let DD = tD.to, CD = wD + 1;;) {
                  if (DD == cD) break DD;
                  if (!(CD < iD.length && iD[CD].from == DD)) {
                    if (mC[DD] == bD) break DD;
                    break
                  }
                  DD = iD[CD++].to
                }
              if (wD++, BD) BD.push(tD);
              else {
                tD.from > QD && fD.push(new gC(QD, tD.from, yD)), OC(DD, tD.direction == SC != !(yD % 2) ? ID + 1 : ID, pD, tD.inner, tD.from, tD.to, fD), QD = tD.to
              }
              MD = tD.to
            } else {
              if (MD == cD || (CD ? mC[MD] != bD : mC[MD] == bD)) break;
              MD++
            } BD ? nC(DD, QD, MD, ID + 1, pD, BD, fD) : QD < MD && fD.push(new gC(QD, MD, yD)), QD = MD
        } else
          for (let QD = cD, wD = iD.length; QD > CD;) {
            let cD = !0,
              SD = !1;
            if (!wD || QD > iD[wD - 1].to) {
              let DD = mC[QD - 1];
              DD != bD && (cD = !1, SD = 16 == DD)
            }
            let BD = cD || 1 != bD ? null : [],
              yD = cD ? ID : ID + 1,
              MD = QD;
            DD: for (;;)
              if (wD && MD == iD[wD - 1].to) {
                if (SD) break DD;
                let tD = iD[--wD];
                if (!cD)
                  for (let DD = tD.from, cD = wD;;) {
                    if (DD == CD) break DD;
                    if (!cD || iD[cD - 1].to != DD) {
                      if (mC[DD - 1] == bD) break DD;
                      break
                    }
                    DD = iD[--cD].from
                  }
                if (BD) BD.push(tD);
                else {
                  tD.to < QD && fD.push(new gC(tD.to, QD, yD)), OC(DD, tD.direction == SC != !(yD % 2) ? ID + 1 : ID, pD, tD.inner, tD.from, tD.to, fD), QD = tD.from
                }
                MD = tD.from
              } else {
                if (MD == CD || (cD ? mC[MD - 1] != bD : mC[MD - 1] == bD)) break;
                MD--
              } BD ? nC(DD, MD, QD, ID + 1, pD, BD, fD) : MD < QD && fD.push(new gC(MD, QD, yD)), QD = MD
          }
    }

    function OC(DD, CD, cD, ID, pD, iD, fD) {
      let bD = CD % 2 ? 2 : 1;
      ! function(DD, CD, cD, ID, pD) {
        for (let iD = 0; iD <= ID.length; iD++) {
          let fD = iD ? ID[iD - 1].to : CD,
            bD = iD < ID.length ? ID[iD].from : cD,
            QD = iD ? 256 : pD;
          for (let CD = fD, cD = QD, ID = QD; CD < bD; CD++) {
            let pD = vC(DD.charCodeAt(CD));
            512 == pD ? pD = cD : 8 == pD && 4 == ID && (pD = 16), mC[CD] = 4 == pD ? 2 : pD, 7 & pD && (ID = pD), cD = pD
          }
          for (let DD = fD, CD = QD, ID = QD; DD < bD; DD++) {
            let pD = mC[DD];
            if (128 == pD) DD < bD - 1 && CD == mC[DD + 1] && 24 & CD ? pD = mC[DD] = CD : mC[DD] = 256;
            else if (64 == pD) {
              let pD = DD + 1;
              for (; pD < bD && 64 == mC[pD];) pD++;
              let iD = DD && 8 == CD || pD < cD && 8 == mC[pD] ? 1 == ID ? 1 : 8 : 256;
              for (let CD = DD; CD < pD; CD++) mC[CD] = iD;
              DD = pD - 1
            } else 8 == pD && 1 == ID && (mC[DD] = 1);
            CD = pD, 7 & pD && (ID = pD)
          }
        }
      }(DD, pD, iD, ID, bD),
      function(DD, CD, cD, ID, pD) {
        let iD = 1 == pD ? 2 : 1;
        for (let fD = 0, bD = 0, QD = 0; fD <= ID.length; fD++) {
          let wD = fD ? ID[fD - 1].to : CD,
            SD = fD < ID.length ? ID[fD].from : cD;
          for (let CD, cD, ID, fD = wD; fD < SD; fD++)
            if (cD = ZC[CD = DD.charCodeAt(fD)])
              if (cD < 0) {
                for (let DD = bD - 3; DD >= 0; DD -= 3)
                  if (oC[DD + 1] == -cD) {
                    let CD = oC[DD + 2],
                      cD = 2 & CD ? pD : 4 & CD ? 1 & CD ? iD : pD : 0;
                    cD && (mC[fD] = mC[oC[DD]] = cD), bD = DD;
                    break
                  }
              } else {
                if (189 == oC.length) break;
                oC[bD++] = fD, oC[bD++] = CD, oC[bD++] = QD
              }
          else if (2 == (ID = mC[fD]) || 1 == ID) {
            let DD = ID == pD;
            QD = DD ? 0 : 1;
            for (let CD = bD - 3; CD >= 0; CD -= 3) {
              let cD = oC[CD + 2];
              if (2 & cD) break;
              if (DD) oC[CD + 2] |= 2;
              else {
                if (4 & cD) break;
                oC[CD + 2] |= 4
              }
            }
          }
        }
      }(DD, pD, iD, ID, bD),
      function(DD, CD, cD, ID) {
        for (let pD = 0, iD = ID; pD <= cD.length; pD++) {
          let fD = pD ? cD[pD - 1].to : DD,
            bD = pD < cD.length ? cD[pD].from : CD;
          for (let QD = fD; QD < bD;) {
            let fD = mC[QD];
            if (256 == fD) {
              let fD = QD + 1;
              for (;;)
                if (fD == bD) {
                  if (pD == cD.length) break;
                  fD = cD[pD++].to, bD = pD < cD.length ? cD[pD].from : CD
                } else {
                  if (256 != mC[fD]) break;
                  fD++
                } let wD = 1 == iD,
                SD = wD == (1 == (fD < CD ? mC[fD] : ID)) ? wD ? 1 : 2 : ID;
              for (let CD = fD, ID = pD, iD = ID ? cD[ID - 1].to : DD; CD > QD;) CD == iD && (CD = cD[--ID].from, iD = ID ? cD[ID - 1].to : DD), mC[--CD] = SD;
              QD = fD
            } else iD = fD, QD++
          }
        }
      }(pD, iD, ID, bD), nC(DD, pD, iD, CD, cD, ID, fD)
    }

    function PC(DD, CD, cD) {
      if (!DD) return [new gC(0, 0, CD == BC ? 1 : 0)];
      if (CD == SC && !cD.length && !NC.test(DD)) return HC(DD.length);
      if (cD.length)
        for (; DD.length > mC.length;) mC[mC.length] = 256;
      let ID = [],
        pD = CD == SC ? 0 : 1;
      return OC(DD, pD, pD, cD, 0, DD.length, ID), ID
    }

    function HC(DD) {
      return [new gC(0, DD, 0)]
    }
    let UC = "";

    function xC(DD, CD, cD, pD, iD) {
      var fD;
      let bD = pD.head - DD.from,
        QD = gC.find(CD, bD, null !== (fD = pD.bidiLevel) && void 0 !== fD ? fD : -1, pD.assoc),
        wD = CD[QD],
        SD = wD.side(iD, cD);
      if (bD == SD) {
        let DD = QD += iD ? 1 : -1;
        if (DD < 0 || DD >= CD.length) return null;
        wD = CD[QD = DD], bD = wD.side(!iD, cD), SD = wD.side(iD, cD)
      }
      let BD = (0, ID._)(DD.text, bD, wD.forward(iD, cD));
      (BD < wD.from || BD > wD.to) && (BD = SD), UC = DD.text.slice(Math.min(bD, BD), Math.max(bD, BD));
      let yD = QD == (iD ? CD.length - 1 : 0) ? null : CD[QD + (iD ? 1 : -1)];
      return yD && BD == SD && yD.level + (iD ? 0 : 1) < wD.level ? ID.i.cursor(yD.side(!iD, cD) + DD.from, yD.forward(iD, cD) ? 1 : -1, yD.level) : ID.i.cursor(BD + DD.from, wD.forward(iD, cD) ? -1 : 1, wD.level)
    }

    function qC(DD, CD, cD) {
      for (let ID = CD; ID < cD; ID++) {
        let CD = vC(DD.charCodeAt(ID));
        if (1 == CD) return SC;
        if (2 == CD || 4 == CD) return BC
      }
      return SC
    }
    const JC = ID.l.define(),
      KC = ID.l.define(),
      aC = ID.l.define(),
      VC = ID.l.define(),
      zC = ID.l.define(),
      jC = ID.l.define(),
      lC = ID.l.define(),
      LC = ID.l.define(),
      TC = ID.l.define(),
      GC = ID.l.define({
        combine: DD => DD.some((DD => DD))
      }),
      RC = ID.l.define({
        combine: DD => DD.some((DD => DD))
      }),
      kC = ID.l.define();
    class dC {
      constructor(DD, CD, cD, ID, pD) {
        let iD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.range = DD, this.y = CD, this.x = cD, this.yMargin = ID, this.xMargin = pD, this.isSnapshot = iD
      }
      map(DD) {
        return DD.empty ? this : new dC(this.range.map(DD), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
      clip(DD) {
        return this.range.to <= DD.doc.length ? this : new dC(ID.i.cursor(DD.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
    }
    const YC = ID.D.define({
        map: (DD, CD) => DD.map(CD)
      }),
      WC = ID.D.define();

    function sC(DD, CD, cD) {
      let ID = DD.facet(VC);
      ID.length ? ID[0](CD) : window.onerror && window.onerror(String(CD), cD, void 0, void 0, CD) || (cD ? console.error(cD + ":", CD) : console.error(CD))
    }
    const EC = ID.l.define({
      combine: DD => !DD.length || DD[0]
    });
    let eC = 0;
    const uC = ID.l.define({
      combine: DD => DD.filter(((CD, cD) => {
        for (let ID = 0; ID < cD; ID++)
          if (DD[ID].plugin == CD.plugin) return !1;
        return !0
      }))
    });
    class hC {
      constructor(DD, CD, cD, ID, pD) {
        this.id = DD, this.create = CD, this.domEventHandlers = cD, this.domEventObservers = ID, this.baseExtensions = pD(this), this.extension = this.baseExtensions.concat(uC.of({
          plugin: this,
          arg: void 0
        }))
      }
      of(DD) {
        return this.baseExtensions.concat(uC.of({
          plugin: this,
          arg: DD
        }))
      }
      static define(DD, CD) {
        const {
          eventHandlers: cD,
          eventObservers: ID,
          provide: pD,
          qI: iD
        } = CD || {};
        return new hC(eC++, DD, cD, ID, (DD => {
          let CD = [];
          return iD && CD.push(Dc.of((CD => {
            let cD = CD.plugin(DD);
            return cD ? iD(cD) : aD.none
          }))), pD && CD.push(pD(DD)), CD
        }))
      }
      static fromClass(DD, CD) {
        return hC.define(((CD, cD) => new DD(CD, cD)), CD)
      }
    }
    class rC {
      constructor(DD) {
        this.spec = DD, this.mustUpdate = null, this.value = null
      }
      get plugin() {
        return this.spec && this.spec.plugin
      }
      update(DD) {
        if (this.value) {
          if (this.mustUpdate) {
            let DD = this.mustUpdate;
            if (this.mustUpdate = null, this.value.update) try {
              this.value.update(DD)
            } catch (CD) {
              if (sC(DD.state, CD, "CodeMirror plugin crashed"), this.value.destroy) try {
                this.value.destroy()
              } catch (cD) {}
              this.deactivate()
            }
          }
        } else if (this.spec) try {
          this.value = this.spec.plugin.create(DD, this.spec.arg)
        } catch (CD) {
          sC(DD.state, CD, "CodeMirror plugin crashed"), this.deactivate()
        }
        return this
      }
      destroy(DD) {
        var CD;
        if (null === (CD = this.value) || void 0 === CD ? void 0 : CD.destroy) try {
          this.value.destroy()
        } catch (cD) {
          sC(DD.state, cD, "CodeMirror plugin crashed")
        }
      }
      deactivate() {
        this.spec = this.value = null
      }
    }
    const AC = ID.l.define(),
      FC = ID.l.define(),
      Dc = ID.l.define(),
      Cc = ID.l.define(),
      cc = ID.l.define(),
      Ic = ID.l.define(),
      pc = ID.l.define();

    function ic(DD, CD) {
      let cD = DD.state.facet(pc);
      if (!cD.length) return cD;
      let pD = cD.map((CD => CD instanceof Function ? CD(DD) : CD)),
        iD = [];
      return ID.x.spans(pD, CD.from, CD.to, {
        point() {},
        span(DD, cD, ID, pD) {
          let fD = DD - CD.from,
            bD = cD - CD.from,
            QD = iD;
          for (let iD = ID.length - 1; iD >= 0; iD--, pD--) {
            let DD, cD = ID[iD].spec.bidiIsolate;
            if (null == cD && (cD = qC(CD.text, fD, bD)), pD > 0 && QD.length && (DD = QD[QD.length - 1]).to == fD && DD.direction == cD) DD.to = bD, QD = DD.inner;
            else {
              let DD = {
                from: fD,
                to: bD,
                direction: cD,
                inner: []
              };
              QD.push(DD), QD = DD.inner
            }
          }
        }
      }), iD
    }
    const fc = ID.l.define();

    function bc(DD) {
      let CD = 0,
        cD = 0,
        ID = 0,
        pD = 0;
      for (let iD of DD.state.facet(fc)) {
        let fD = iD(DD);
        fD && (null != fD.left && (CD = Math.max(CD, fD.left)), null != fD.right && (cD = Math.max(cD, fD.right)), null != fD.top && (ID = Math.max(ID, fD.top)), null != fD.bottom && (pD = Math.max(pD, fD.bottom)))
      }
      return {
        left: CD,
        right: cD,
        top: ID,
        bottom: pD
      }
    }
    const Qc = ID.l.define();
    class wc {
      constructor(DD, CD, cD, ID) {
        this.fromA = DD, this.toA = CD, this.fromB = cD, this.toB = ID
      }
      join(DD) {
        return new wc(Math.min(this.fromA, DD.fromA), Math.max(this.toA, DD.toA), Math.min(this.fromB, DD.fromB), Math.max(this.toB, DD.toB))
      }
      addToSet(DD) {
        let CD = DD.length,
          cD = this;
        for (; CD > 0; CD--) {
          let ID = DD[CD - 1];
          if (!(ID.fromA > cD.toA)) {
            if (ID.toA < cD.fromA) break;
            cD = cD.join(ID), DD.splice(CD - 1, 1)
          }
        }
        return DD.splice(CD, 0, cD), DD
      }
      static extendWithRanges(DD, CD) {
        if (0 == CD.length) return DD;
        let cD = [];
        for (let ID = 0, pD = 0, iD = 0;;) {
          let fD = ID < DD.length ? DD[ID].fromB : 1e9,
            bD = pD < CD.length ? CD[pD] : 1e9,
            QD = Math.min(fD, bD);
          if (1e9 == QD) break;
          let wD = QD + iD,
            SD = QD,
            BD = wD;
          for (;;)
            if (pD < CD.length && CD[pD] <= SD) {
              let cD = CD[pD + 1];
              pD += 2, SD = Math.max(SD, cD);
              for (let CD = ID; CD < DD.length && DD[CD].fromB <= SD; CD++) iD = DD[CD].toA - DD[CD].toB;
              BD = Math.max(BD, cD + iD)
            } else {
              if (!(ID < DD.length && DD[ID].fromB <= SD)) break;
              {
                let CD = DD[ID++];
                SD = Math.max(SD, CD.toB), BD = Math.max(BD, CD.toA), iD = CD.toA - CD.toB
              }
            } cD.push(new wc(wD, BD, QD, SD))
        }
        return cD
      }
    }
    class Sc {
      constructor(DD, CD, cD) {
        this.view = DD, this.state = CD, this.transactions = cD, this.flags = 0, this.startState = DD.state, this.changes = ID.ChangeSet.empty(this.startState.doc.length);
        for (let ID of cD) this.changes = this.changes.compose(ID.changes);
        let pD = [];
        this.changes.iterChangedRanges(((DD, CD, cD, ID) => pD.push(new wc(DD, CD, cD, ID)))), this.changedRanges = pD
      }
      static create(DD, CD, cD) {
        return new Sc(DD, CD, cD)
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
        return this.transactions.some((DD => DD.selection))
      }
      get empty() {
        return 0 == this.flags && 0 == this.transactions.length
      }
    }
    const Bc = [];
    class yc {
      constructor(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.dom = DD, this.length = CD, this.flags = cD, this.parent = null, DD.cmTile = this
      }
      get breakAfter() {
        return 1 & this.flags
      }
      get children() {
        return Bc
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
      sync(DD) {
        if (this.flags |= 2, 4 & this.flags) {
          this.flags &= -5;
          let DD = this.domAttrs;
          DD && function(DD, CD) {
            for (let cD = DD.attributes.length - 1; cD >= 0; cD--) {
              let ID = DD.attributes[cD].name;
              null == CD[ID] && DD.removeAttribute(ID)
            }
            for (let cD in CD) {
              let ID = CD[cD];
              "style" == cD ? DD.style.cssText = ID : DD.getAttribute(cD) != ID && DD.setAttribute(cD, ID)
            }
          }(this.dom, DD)
        }
      }
      toString() {
        return this.constructor.name + (this.children.length ? `(${this.children})` : "") + (this.breakAfter ? "#" : "")
      }
      destroy() {
        this.parent = null
      }
      setDOM(DD) {
        this.dom = DD, DD.cmTile = this
      }
      get posAtStart() {
        return this.parent ? this.parent.posBefore(this) : 0
      }
      get posAtEnd() {
        return this.posAtStart + this.length
      }
      posBefore(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.posAtStart;
        for (let cD of this.children) {
          if (cD == DD) return CD;
          CD += cD.length + cD.breakAfter
        }
        throw new RangeError("Invalid child in posBefore")
      }
      posAfter(DD) {
        return this.posBefore(DD) + DD.length
      }
      covers(DD) {
        return !0
      }
      coordsIn(DD, CD) {
        return null
      }
      domPosFor(DD, CD) {
        let cD = WD(this.dom),
          ID = this.length ? DD > 0 : CD > 0;
        return new QC(this.parent.dom, cD + (ID ? 1 : 0), 0 == DD || DD == this.length)
      }
      markDirty(DD) {
        this.flags &= -3, DD && (this.flags |= 4), this.parent && 2 & this.parent.flags && this.parent.markDirty(!1)
      }
      get overrideDOMText() {
        return null
      }
      get root() {
        for (let DD = this; DD; DD = DD.parent)
          if (DD instanceof Zc) return DD;
        return null
      }
      static get(DD) {
        return DD.cmTile
      }
    }
    class Mc extends yc {
      constructor(DD) {
        super(DD, 0), this._children = []
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
      append(DD) {
        this.children.push(DD), DD.parent = this
      }
      sync(DD) {
        if (2 & this.flags) return;
        super.sync(DD);
        let CD, cD = this.dom,
          ID = null,
          pD = (null === DD || void 0 === DD ? void 0 : DD.node) == cD ? DD : null,
          iD = 0;
        for (let fD of this.children) {
          if (fD.sync(DD), iD += fD.length + fD.breakAfter, CD = ID ? ID.nextSibling : cD.firstChild, pD && CD != fD.dom && (pD.written = !0), fD.dom.parentNode == cD)
            for (; CD && CD != fD.dom;) CD = tc(CD);
          else cD.insertBefore(fD.dom, CD);
          ID = fD.dom
        }
        for (CD = ID ? ID.nextSibling : cD.firstChild, pD && CD && (pD.written = !0); CD;) CD = tc(CD);
        this.length = iD
      }
    }

    function tc(DD) {
      let CD = DD.nextSibling;
      return DD.parentNode.removeChild(DD), CD
    }
    class Zc extends Mc {
      constructor(DD, CD) {
        super(CD), this.view = DD
      }
      owns(DD) {
        for (; DD; DD = DD.parent)
          if (DD == this) return !0;
        return !1
      }
      isBlock() {
        return !0
      }
      nearest(DD) {
        for (;;) {
          if (!DD) return null;
          let CD = yc.get(DD);
          if (CD && this.owns(CD)) return CD;
          DD = DD.parentNode
        }
      }
      blockTiles(DD) {
        for (let CD = [], cD = this, ID = 0, pD = 0;;)
          if (ID == cD.children.length) {
            if (!CD.length) return;
            cD = cD.parent, cD.breakAfter && pD++, ID = CD.pop()
          } else {
            let iD = cD.children[ID++];
            if (iD instanceof oc) CD.push(ID), cD = iD, ID = 0;
            else {
              let CD = pD + iD.length,
                cD = DD(iD, pD);
              if (void 0 !== cD) return cD;
              pD = CD + iD.breakAfter
            }
          }
      }
      resolveBlock(DD, CD) {
        let cD, ID, pD = -1,
          iD = -1;
        if (this.blockTiles(((fD, bD) => {
            let QD = bD + fD.length;
            if (DD >= bD && DD <= QD) {
              if (fD.isWidget() && CD >= -1 && CD <= 1) {
                if (32 & fD.flags) return !0;
                16 & fD.flags && (cD = void 0)
              }(bD < DD || DD == QD && (CD < -1 ? fD.length : fD.covers(1))) && (!cD || !fD.isWidget() && cD.isWidget()) && (cD = fD, pD = DD - bD), (QD > DD || DD == bD && (CD > 1 ? fD.length : fD.covers(-1))) && (!ID || !fD.isWidget() && ID.isWidget()) && (ID = fD, iD = DD - bD)
            }
          })), !cD && !ID) throw new Error("No tile at position " + DD);
        return cD && CD < 0 || !ID ? {
          tile: cD,
          offset: pD
        } : {
          tile: ID,
          offset: iD
        }
      }
    }
    class oc extends Mc {
      constructor(DD, CD) {
        super(DD), this.wrapper = CD
      }
      isBlock() {
        return !0
      }
      covers(DD) {
        return !!this.children.length && (DD < 0 ? this.children[0].covers(-1) : this.lastChild.covers(1))
      }
      get domAttrs() {
        return this.wrapper.attributes
      }
      static of (DD, CD) {
        let cD = new oc(CD || document.createElement(DD.tagName), DD);
        return CD || (cD.flags |= 4), cD
      }
    }
    class vc extends Mc {
      constructor(DD, CD) {
        super(DD), this.attrs = CD
      }
      isLine() {
        return !0
      }
      static start(DD, CD, cD) {
        let ID = new vc(CD || document.createElement("div"), DD);
        return CD && cD || (ID.flags |= 4), ID
      }
      get domAttrs() {
        return this.attrs
      }
      resolveInline(DD, CD, cD) {
        let ID = null,
          pD = -1,
          iD = null,
          fD = -1;
        ! function DD(bD, QD) {
          for (let wD = 0, SD = 0; wD < bD.children.length && SD <= QD; wD++) {
            let BD = bD.children[wD],
              yD = SD + BD.length;
            yD >= QD && (BD.isComposite() ? DD(BD, QD - SD) : (!iD || iD.isHidden && (CD > 0 || cD && Nc(iD, BD))) && (yD > QD || 32 & BD.flags) ? (iD = BD, fD = QD - SD) : (SD < QD || 16 & BD.flags && !BD.isHidden) && (ID = BD, pD = QD - SD)), SD = yD
          }
        }(this, DD);
        let bD = (CD < 0 ? ID : iD) || ID || iD;
        return bD ? {
          tile: bD,
          offset: bD == ID ? pD : fD
        } : null
      }
      coordsIn(DD, CD) {
        let cD = this.resolveInline(DD, CD, !0);
        return cD ? cD.tile.coordsIn(Math.max(0, cD.offset), CD) : function(DD) {
          let CD = DD.dom.lastChild;
          if (!CD) return DD.dom.getBoundingClientRect();
          let cD = dD(CD);
          return cD[cD.length - 1] || null
        }(this)
      }
      domIn(DD, CD) {
        let cD = this.resolveInline(DD, CD);
        if (cD) {
          let {
            tile: DD,
            offset: ID
          } = cD;
          if (this.dom.contains(DD.dom)) return DD.isText() ? new QC(DD.dom, Math.min(DD.dom.nodeValue.length, ID)) : DD.domPosFor(ID, 16 & DD.flags ? 1 : 32 & DD.flags ? -1 : CD);
          let pD = cD.tile.parent,
            iD = !1;
          for (let CD of pD.children) {
            if (iD) return new QC(CD.dom, 0);
            CD == cD.tile && (iD = !0)
          }
        }
        return new QC(this.dom, 0)
      }
    }

    function Nc(DD, CD) {
      let cD = DD.coordsIn(0, 1),
        ID = CD.coordsIn(0, 1);
      return cD && ID && ID.top < cD.bottom
    }
    class gc extends Mc {
      constructor(DD, CD) {
        super(DD), this.mark = CD
      }
      get domAttrs() {
        return this.mark.attrs
      }
      static of (DD, CD) {
        let cD = new gc(CD || document.createElement(DD.tagName), DD);
        return CD || (cD.flags |= 4), cD
      }
    }
    class Xc extends yc {
      constructor(DD, CD) {
        super(DD, CD.length), this.text = CD
      }
      sync(DD) {
        2 & this.flags || (super.sync(DD), this.dom.nodeValue != this.text && (DD && DD.node == this.dom && (DD.written = !0), this.dom.nodeValue = this.text))
      }
      isText() {
        return !0
      }
      toString() {
        return JSON.stringify(this.text)
      }
      coordsIn(DD, CD) {
        let cD = this.dom.nodeValue.length;
        DD > cD && (DD = cD);
        let ID = DD,
          pD = DD,
          iD = 0;
        0 == DD && CD < 0 || DD == cD && CD >= 0 ? OD.chrome || OD.gecko || (DD ? (ID--, iD = 1) : pD < cD && (pD++, iD = -1)) : CD < 0 ? ID-- : pD < cD && pD++;
        let fD = IC(this.dom, ID, pD).getClientRects();
        if (!fD.length) return null;
        let bD = fD[(iD ? iD < 0 : CD >= 0) ? 0 : fD.length - 1];
        return OD.safari && !iD && 0 == bD.width && (bD = Array.prototype.find.call(fD, (DD => DD.width)) || bD), iD ? uD(bD, iD < 0) : bD || null
      }
      static of (DD, CD) {
        let cD = new Xc(CD || document.createTextNode(DD), DD);
        return CD || (cD.flags |= 2), cD
      }
    }
    class mc extends yc {
      constructor(DD, CD, cD, ID) {
        super(DD, CD, ID), this.widget = cD
      }
      isWidget() {
        return !0
      }
      get isHidden() {
        return this.widget.isHidden
      }
      covers(DD) {
        return !(48 & this.flags) && (this.flags & (DD < 0 ? 64 : 128)) > 0
      }
      coordsIn(DD, CD) {
        return this.coordsInWidget(DD, CD, !1)
      }
      coordsInWidget(DD, CD, cD) {
        let ID = this.widget.coordsAt(this.dom, DD, CD);
        if (ID) return ID;
        if (cD) return uD(this.dom.getBoundingClientRect(), this.length ? 0 == DD : CD <= 0);
        {
          let CD = this.dom.getClientRects(),
            cD = null;
          if (!CD.length) return null;
          let ID = !!(16 & this.flags) || !(32 & this.flags) && DD > 0;
          for (let pD = ID ? CD.length - 1 : 0; cD = CD[pD], !(DD > 0 ? 0 == pD : pD == CD.length - 1 || cD.top < cD.bottom); pD += ID ? -1 : 1);
          return uD(cD, !ID)
        }
      }
      get overrideDOMText() {
        if (!this.length) return ID.J.empty;
        let {
          root: DD
        } = this;
        if (!DD) return ID.J.empty;
        let CD = this.posAtStart;
        return DD.view.state.doc.slice(CD, CD + this.length)
      }
      destroy() {
        super.destroy(), this.widget.destroy(this.dom)
      }
      static of (DD, CD, cD, ID, pD) {
        return pD || (pD = DD.toDOM(CD), DD.editable || (pD.contentEditable = "false")), new mc(pD, cD, DD, ID)
      }
    }
    class nc extends yc {
      constructor(DD) {
        let CD = document.createElement("img");
        CD.className = "cm-widgetBuffer", CD.setAttribute("aria-hidden", "true"), super(CD, 0, DD)
      }
      get isHidden() {
        return !0
      }
      get overrideDOMText() {
        return ID.J.empty
      }
      coordsIn(DD) {
        return this.dom.getBoundingClientRect()
      }
    }
    class Oc {
      constructor(DD) {
        this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = DD
      }
      advance(DD, CD, cD) {
        let {
          tile: ID,
          index: pD,
          beforeBreak: iD,
          parents: fD
        } = this;
        for (; DD || CD > 0;)
          if (ID.isComposite())
            if (iD) {
              if (!DD) break;
              cD && cD.break(), DD--, iD = !1
            } else if (pD == ID.children.length) {
          if (!DD && !fD.length) break;
          cD && cD.leave(ID), iD = !!ID.breakAfter, ({
            tile: ID,
            index: pD
          } = fD.pop()), pD++
        } else {
          let bD = ID.children[pD],
            QD = bD.breakAfter;
          !(CD > 0 ? bD.length <= DD : bD.length < DD) || cD && !1 === cD.skip(bD, 0, bD.length) && bD.isComposite ? (fD.push({
            tile: ID,
            index: pD
          }), ID = bD, pD = 0, cD && bD.isComposite() && cD.enter(bD)) : (iD = !!QD, pD++, DD -= bD.length)
        } else if (pD == ID.length) iD = !!ID.breakAfter, ({
          tile: ID,
          index: pD
        } = fD.pop()), pD++;
        else {
          if (!DD) break;
          {
            let CD = Math.min(DD, ID.length - pD);
            cD && cD.skip(ID, pD, pD + CD), DD -= CD, pD += CD
          }
        }
        return this.tile = ID, this.index = pD, this.beforeBreak = iD, this
      }
      get root() {
        return this.parents.length ? this.parents[0].tile : this.tile
      }
    }
    class Pc {
      constructor(DD, CD, cD, ID) {
        this.from = DD, this.to = CD, this.wrapper = cD, this.rank = ID
      }
    }
    class Hc {
      constructor(DD, CD, cD) {
        this.cache = DD, this.root = CD, this.blockWrappers = cD, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0
      }
      addText(DD, CD, cD, ID) {
        var pD;
        this.flushBuffer();
        let iD = this.ensureMarks(CD, cD),
          fD = iD.lastChild;
        if (fD && fD.isText() && !(8 & fD.flags) && fD.length + DD.length < 512) {
          this.cache.reused.set(fD, 2), (iD.children[iD.children.length - 1] = new Xc(fD.dom, fD.text + DD)).parent = iD
        } else iD.append(ID || Xc.of(DD, null === (pD = this.cache.find(Xc)) || void 0 === pD ? void 0 : pD.dom));
        this.pos += DD.length, this.afterWidget = null
      }
      addComposition(DD, CD) {
        let cD = this.curLine;
        cD.dom != CD.line.dom && (cD.setDOM(this.cache.reused.has(CD.line) ? Vc(CD.line.dom) : CD.line.dom), this.cache.reused.set(CD.line, 2));
        let ID = cD;
        for (let fD = CD.marks.length - 1; fD >= 0; fD--) {
          let DD = CD.marks[fD],
            cD = ID.lastChild;
          if (cD instanceof gc && cD.mark.eq(DD.mark)) cD.dom != DD.dom && cD.setDOM(Vc(DD.dom)), ID = cD;
          else {
            if (this.cache.reused.get(DD)) {
              let CD = yc.get(DD.dom);
              CD && CD.setDOM(Vc(DD.dom))
            }
            let CD = gc.of(DD.mark, DD.dom);
            ID.append(CD), ID = CD
          }
          this.cache.reused.set(DD, 2)
        }
        let pD = yc.get(DD.text);
        pD && this.cache.reused.set(pD, 2);
        let iD = new Xc(DD.text, DD.text.nodeValue);
        iD.flags |= 8, ID.append(iD)
      }
      addInlineWidget(DD, CD, cD) {
        let ID = this.afterWidget && 48 & DD.flags && (48 & this.afterWidget.flags) == (48 & DD.flags);
        ID || this.flushBuffer();
        let pD = this.ensureMarks(CD, cD);
        ID || 16 & DD.flags || pD.append(this.getBuffer(1)), pD.append(DD), this.pos += DD.length, this.afterWidget = DD
      }
      addMark(DD, CD, cD) {
        this.flushBuffer(), this.ensureMarks(CD, cD).append(DD), this.pos += DD.length, this.afterWidget = null
      }
      addBlockWidget(DD) {
        this.getBlockPos().append(DD), this.pos += DD.length, this.lastBlock = DD, this.endLine()
      }
      continueWidget(DD) {
        (this.afterWidget || this.lastBlock).length += DD, this.pos += DD
      }
      addLineStart(DD, CD) {
        var cD;
        DD || (DD = ac);
        let ID = vc.start(DD, CD || (null === (cD = this.cache.find(vc)) || void 0 === cD ? void 0 : cD.dom), !!CD);
        this.getBlockPos().append(this.lastBlock = this.curLine = ID)
      }
      addLine(DD) {
        this.getBlockPos().append(DD), this.pos += DD.length, this.lastBlock = DD, this.endLine()
      }
      addBreak() {
        this.lastBlock.flags |= 1, this.endLine(), this.pos++
      }
      addLineStartIfNotCovered(DD) {
        this.blockPosCovered() || this.addLineStart(DD)
      }
      ensureLine(DD) {
        this.curLine || this.addLineStart(DD)
      }
      ensureMarks(DD, CD) {
        var cD;
        let ID = this.curLine;
        for (let pD = DD.length - 1; pD >= 0; pD--) {
          let iD, fD = DD[pD];
          if (CD > 0 && (iD = ID.lastChild) && iD instanceof gc && iD.mark.eq(fD)) ID = iD, CD--;
          else {
            let DD = gc.of(fD, null === (cD = this.cache.find(gc, (DD => DD.mark.eq(fD)))) || void 0 === cD ? void 0 : cD.dom);
            ID.append(DD), ID = DD, CD = 0
          }
        }
        return ID
      }
      endLine() {
        if (this.curLine) {
          this.flushBuffer();
          let DD = this.curLine.lastChild;
          DD && Kc(this.curLine, !1) && ("BR" == DD.dom.nodeName || !DD.isWidget() || OD.ios && Kc(this.curLine, !0)) || this.curLine.append(this.cache.findWidget(jc, 0, 32) || new mc(jc.toDOM(), 0, jc, 32)), this.curLine = this.afterWidget = null
        }
      }
      updateBlockWrappers() {
        this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
        for (let DD = this.wrappers.length - 1; DD >= 0; DD--) this.wrappers[DD].to < this.pos && this.wrappers.splice(DD, 1);
        for (let DD = this.blockWrappers; DD.value && DD.from <= this.pos; DD.next())
          if (DD.to >= this.pos) {
            let CD = new Pc(DD.from, DD.to, DD.value, DD.rank),
              cD = this.wrappers.length;
            for (; cD > 0 && (this.wrappers[cD - 1].rank - CD.rank || this.wrappers[cD - 1].to - CD.to) < 0;) cD--;
            this.wrappers.splice(cD, 0, CD)
          } this.wrapperPos = this.pos
      }
      getBlockPos() {
        var DD;
        this.updateBlockWrappers();
        let CD = this.root;
        for (let cD of this.wrappers) {
          let ID = CD.lastChild;
          if (cD.from < this.pos && ID instanceof oc && ID.wrapper.eq(cD.wrapper)) CD = ID;
          else {
            let ID = oc.of(cD.wrapper, null === (DD = this.cache.find(oc, (DD => DD.wrapper.eq(cD.wrapper)))) || void 0 === DD ? void 0 : DD.dom);
            CD.append(ID), CD = ID
          }
        }
        return CD
      }
      blockPosCovered() {
        let DD = this.lastBlock;
        return null != DD && !DD.breakAfter && (!DD.isWidget() || (160 & DD.flags) > 0)
      }
      getBuffer(DD) {
        let CD = 2 | (DD < 0 ? 16 : 32),
          cD = this.cache.find(nc, void 0, 1);
        return cD && (cD.flags = CD), cD || new nc(CD)
      }
      flushBuffer() {
        !this.afterWidget || 32 & this.afterWidget.flags || (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null)
      }
    }
    class Uc {
      constructor(DD) {
        this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = DD.iter()
      }
      skip(DD) {
        this.textOff + DD <= this.text.length ? this.textOff += DD : (this.skipCount += DD - (this.text.length - this.textOff), this.text = "", this.textOff = 0)
      }
      next(DD) {
        if (this.textOff == this.text.length) {
          let {
            value: CD,
            lineBreak: cD,
            done: ID
          } = this.cursor.next(this.skipCount);
          if (this.skipCount = 0, ID) throw new Error("Ran out of text content when drawing inline views");
          this.text = CD;
          let pD = this.textOff = Math.min(DD, CD.length);
          return cD ? null : CD.slice(0, pD)
        }
        let CD = Math.min(this.text.length, this.textOff + DD),
          cD = this.text.slice(this.textOff, CD);
        return this.textOff = CD, cD
      }
    }
    const xc = [mc, vc, Xc, gc, nc, oc, Zc];
    for (let lf = 0; lf < xc.length; lf++) xc[lf].bucket = lf;
    class qc {
      constructor(DD) {
        this.view = DD, this.buckets = xc.map((() => [])), this.index = xc.map((() => 0)), this.reused = new Map
      }
      add(DD) {
        let CD = DD.constructor.bucket,
          cD = this.buckets[CD];
        cD.length < 6 ? cD.push(DD) : cD[this.index[CD] = (this.index[CD] + 1) % 6] = DD
      }
      find(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          ID = DD.bucket,
          pD = this.buckets[ID],
          iD = this.index[ID];
        for (let fD = pD.length - 1; fD >= 0; fD--) {
          let DD = (fD + iD) % pD.length,
            bD = pD[DD];
          if ((!CD || CD(bD)) && !this.reused.has(bD)) return pD.splice(DD, 1), DD < iD && this.index[ID]--, this.reused.set(bD, cD), bD
        }
        return null
      }
      findWidget(DD, CD, cD) {
        let ID = this.buckets[0];
        if (ID.length)
          for (let pD = 0, iD = 0;; pD++) {
            if (pD == ID.length) {
              if (iD) return null;
              iD = 1, pD = 0
            }
            let fD = ID[pD];
            if (!this.reused.has(fD) && (0 == iD ? fD.widget.compare(DD) : fD.widget.constructor == DD.constructor && DD.updateDOM(fD.dom, this.view, fD.widget))) return ID.splice(pD, 1), pD < this.index[0] && this.index[0]--, fD.widget == DD && fD.length == CD && (497 & fD.flags) == cD ? (this.reused.set(fD, 1), fD) : (this.reused.set(fD, 2), new mc(fD.dom, CD, DD, -498 & fD.flags | cD))
          }
      }
      reuse(DD) {
        return this.reused.set(DD, 1), DD
      }
      maybeReuse(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        if (!this.reused.has(DD)) return this.reused.set(DD, CD), DD.dom
      }
      clear() {
        for (let DD = 0; DD < this.buckets.length; DD++) this.buckets[DD].length = this.index[DD] = 0
      }
    }
    class Jc {
      constructor(DD, CD, cD, pD, iD) {
        this.view = DD, this.qI = pD, this.disallowBlockEffectsFor = iD, this.openWidget = !1, this.openMarks = 0, this.cache = new qc(DD), this.text = new Uc(DD.state.doc), this.builder = new Hc(this.cache, new Zc(DD, DD.contentDOM), ID.x.iter(cD)), this.cache.reused.set(CD, 2), this.old = new Oc(CD), this.reuseWalker = {
          skip: (DD, CD, cD) => {
            if (this.cache.add(DD), DD.isComposite()) return !1
          },
          enter: DD => this.cache.add(DD),
          leave: () => {},
          break: () => {}
        }
      }
      run(DD, CD) {
        let cD = CD && this.getCompositionContext(CD.text);
        for (let ID = 0, pD = 0, iD = 0;;) {
          let fD = iD < DD.length ? DD[iD++] : null,
            bD = fD ? fD.fromA : this.old.root.length;
          if (bD > ID) {
            let DD = bD - ID;
            this.preserve(DD, !iD, !fD), ID = bD, pD += DD
          }
          if (!fD) break;
          CD && fD.fromA <= CD.range.fromA && fD.toA >= CD.range.toA ? (this.forward(fD.fromA, CD.range.fromA, CD.range.fromA < CD.range.toA ? 1 : -1), this.emit(pD, CD.range.fromB), this.cache.clear(), this.builder.addComposition(CD, cD), this.text.skip(CD.range.toB - CD.range.fromB), this.forward(CD.range.fromA, fD.toA), this.emit(CD.range.toB, fD.toB)) : (this.forward(fD.fromA, fD.toA), this.emit(pD, fD.toB)), pD = fD.toB, ID = fD.toA
        }
        return this.builder.curLine && this.builder.endLine(), this.builder.root
      }
      preserve(DD, CD, cD) {
        let ID = function(DD) {
            let CD = [];
            for (let cD = DD.parents.length; cD > 1; cD--) {
              let ID = cD == DD.parents.length ? DD.tile : DD.parents[cD].tile;
              ID instanceof gc && CD.push(ID.mark)
            }
            return CD
          }(this.old),
          pD = this.openMarks;
        this.old.advance(DD, cD ? 1 : -1, {
          skip: (DD, CD, cD) => {
            if (DD.isWidget())
              if (this.openWidget) this.builder.continueWidget(cD - CD);
              else {
                let iD = cD > 0 || CD < DD.length ? mc.of(DD.widget, this.view, cD - CD, 496 & DD.flags, this.cache.maybeReuse(DD)) : this.cache.reuse(DD);
                256 & iD.flags ? (iD.flags &= -2, this.builder.addBlockWidget(iD)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(iD, ID, pD), pD = ID.length)
              }
            else if (DD.isText()) this.builder.ensureLine(null), CD || cD != DD.length || this.cache.reused.has(DD) ? (this.cache.add(DD), this.builder.addText(DD.text.slice(CD, cD), ID, pD)) : this.builder.addText(DD.text, ID, pD, this.cache.reuse(DD)), pD = ID.length;
            else if (DD.isLine()) DD.flags &= -2, this.cache.reused.set(DD, 1), this.builder.addLine(DD);
            else if (DD instanceof nc) this.cache.add(DD);
            else {
              if (!(DD instanceof gc)) return !1;
              this.builder.ensureLine(null), this.builder.addMark(DD, ID, pD), this.cache.reused.set(DD, 1), pD = ID.length
            }
            this.openWidget = !1
          },
          enter: DD => {
            DD.isLine() ? this.builder.addLineStart(DD.attrs, this.cache.maybeReuse(DD)) : (this.cache.add(DD), DD instanceof gc && ID.unshift(DD.mark)), this.openWidget = !1
          },
          leave: DD => {
            DD.isLine() ? ID.length && (ID.length = pD = 0) : DD instanceof gc && (ID.shift(), pD = Math.min(pD, ID.length))
          },
          break: () => {
            this.builder.addBreak(), this.openWidget = !1
          }
        }), this.text.skip(DD)
      }
      emit(DD, CD) {
        let cD = null,
          pD = this.builder,
          iD = 0,
          fD = ID.x.spans(this.qI, DD, CD, {
            point: (DD, CD, ID, fD, bD, QD) => {
              if (ID instanceof jD) {
                if (this.disallowBlockEffectsFor[QD]) {
                  if (ID.block) throw new RangeError("Block decorations may not be specified via plugins");
                  if (CD > this.view.state.doc.lineAt(DD).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins")
                }
                if (iD = fD.length, bD > fD.length) pD.continueWidget(CD - DD);
                else {
                  let iD = ID.widget || (ID.block ? zc.block : zc.inline),
                    QD = function(DD) {
                      let CD = DD.isReplace ? (DD.startSide < 0 ? 64 : 0) | (DD.endSide > 0 ? 128 : 0) : DD.startSide > 0 ? 32 : 16;
                      DD.block && (CD |= 256);
                      return CD
                    }(ID),
                    wD = this.cache.findWidget(iD, CD - DD, QD) || mc.of(iD, this.view, CD - DD, QD);
                  ID.block ? (ID.startSide > 0 && pD.addLineStartIfNotCovered(cD), pD.addBlockWidget(wD)) : (pD.ensureLine(cD), pD.addInlineWidget(wD, fD, bD))
                }
                cD = null
              } else cD = function(DD, CD) {
                let cD = CD.spec.attributes,
                  ID = CD.spec.class;
                if (!cD && !ID) return DD;
                DD || (DD = {
                  class: "cm-line"
                });
                cD && PD(cD, DD);
                ID && (DD.class += " " + ID);
                return DD
              }(cD, ID);
              CD > DD && this.text.skip(CD - DD)
            },
            span: (DD, CD, ID, iD) => {
              for (let fD = DD; fD < CD;) {
                let bD = this.text.next(Math.min(512, CD - fD));
                null == bD ? (pD.addLineStartIfNotCovered(cD), pD.addBreak(), fD++) : (pD.ensureLine(cD), pD.addText(bD, ID, fD == DD ? iD : ID.length), fD += bD.length), cD = null
              }
            }
          });
        pD.addLineStartIfNotCovered(cD), this.openWidget = fD > iD, this.openMarks = fD
      }
      forward(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        CD - DD <= 10 ? this.old.advance(CD - DD, cD, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(CD - DD - 10, -1), this.old.advance(5, cD, this.reuseWalker))
      }
      getCompositionContext(DD) {
        let CD = [],
          cD = null;
        for (let ID = DD.parentNode;; ID = ID.parentNode) {
          let DD = yc.get(ID);
          if (ID == this.view.contentDOM) break;
          DD instanceof gc ? CD.push(DD) : (null === DD || void 0 === DD ? void 0 : DD.isLine()) ? cD = DD : DD instanceof oc || ("DIV" != ID.nodeName || cD || ID == this.view.contentDOM ? cD || CD.push(gc.of(new VD({
            tagName: ID.nodeName.toLowerCase(),
            attributes: qD(ID)
          }), ID)) : cD = new vc(ID, ac))
        }
        return {
          line: cD,
          marks: CD
        }
      }
    }

    function Kc(DD, CD) {
      let cD = DD => {
        for (let ID of DD.children)
          if ((CD ? ID.isText() : ID.length) || cD(ID)) return !0;
        return !1
      };
      return cD(DD)
    }
    const ac = {
      class: "cm-line"
    };

    function Vc(DD) {
      let CD = yc.get(DD);
      return CD && CD.setDOM(DD.cloneNode()), DD
    }
    class zc extends JD {
      constructor(DD) {
        super(), this.tag = DD
      }
      eq(DD) {
        return DD.tag == this.tag
      }
      toDOM() {
        return document.createElement(this.tag)
      }
      updateDOM(DD) {
        return DD.nodeName.toLowerCase() == this.tag
      }
      get isHidden() {
        return !0
      }
    }
    zc.inline = new zc("span"), zc.block = new zc("div");
    const jc = new class extends JD {
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
    class lc {
      constructor(DD) {
        this.view = DD, this.qI = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = aD.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new Zc(DD, DD.contentDOM), this.updateInner([new wc(0, 0, 0, DD.state.doc.length)], null)
      }
      update(DD) {
        var CD;
        let cD = DD.changedRanges;
        this.minWidth > 0 && cD.length && (cD.every((DD => {
          let {
            fromA: CD,
            toA: cD
          } = DD;
          return cD < this.minWidthFrom || CD > this.minWidthTo
        })) ? (this.minWidthFrom = DD.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = DD.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(DD);
        let pD = -1;
        this.view.inputState.composing >= 0 && !this.view.observer.editContext && ((null === (CD = this.domChanged) || void 0 === CD ? void 0 : CD.newSel) ? pD = this.domChanged.newSel.head : function(DD, CD) {
          let cD = !1;
          CD && DD.iterChangedRanges(((DD, ID) => {
            DD < CD.to && ID > CD.from && (cD = !0)
          }));
          return cD
        }(DD.changes, this.hasComposition) || DD.selectionSet || (pD = DD.state.selection.main.head));
        let iD = pD > -1 ? function(DD, CD, cD) {
          let ID = Tc(DD, cD);
          if (!ID) return null;
          let {
            node: pD,
            from: iD,
            to: fD
          } = ID, bD = pD.nodeValue;
          if (/[\n\r]/.test(bD)) return null;
          if (DD.state.doc.sliceString(ID.from, ID.to) != bD) return null;
          let QD = CD.invertedDesc;
          return {
            range: new wc(QD.mapPos(iD), QD.mapPos(fD), iD, fD),
            text: pD
          }
        }(this.view, DD.changes, pD) : null;
        if (this.domChanged = null, this.hasComposition) {
          let {
            from: CD,
            to: ID
          } = this.hasComposition;
          cD = new wc(CD, ID, DD.changes.mapPos(CD, -1), DD.changes.mapPos(ID, 1)).addToSet(cD.slice())
        }
        this.hasComposition = iD ? {
          from: iD.range.fromB,
          to: iD.range.toB
        } : null, (OD.ie || OD.chrome) && !iD && DD && DD.state.doc.lines != DD.startState.doc.lines && (this.forceSelection = !0);
        let fD = this.qI,
          bD = this.blockWrappers;
        this.updateDeco();
        let QD = function(DD, CD, cD) {
          let pD = new Gc;
          return ID.x.compare(DD, CD, cD, pD), pD.changes
        }(fD, this.qI, DD.changes);
        QD.length && (cD = wc.extendWithRanges(cD, QD));
        let wD = function(DD, CD, cD) {
          let pD = new Rc;
          return ID.x.compare(DD, CD, cD, pD), pD.changes
        }(bD, this.blockWrappers, DD.changes);
        return wD.length && (cD = wc.extendWithRanges(cD, wD)), iD && !cD.some((DD => DD.fromA <= iD.range.fromA && DD.toA >= iD.range.toA)) && (cD = iD.range.addToSet(cD.slice())), !(2 & this.tile.flags && 0 == cD.length) && (this.updateInner(cD, iD), DD.transactions.length && (this.lastUpdate = Date.now()), !0)
      }
      updateInner(DD, CD) {
        this.view.viewState.mustMeasureContent = !0;
        let {
          observer: cD
        } = this.view;
        cD.ignore((() => {
          if (CD || DD.length) {
            let cD = this.tile,
              ID = new Jc(this.view, cD, this.blockWrappers, this.qI, this.dynamicDecorationMap);
            CD && yc.get(CD.text) && ID.cache.reused.set(yc.get(CD.text), 2), this.tile = ID.run(DD, CD), Lc(cD, ID.cache.reused)
          }
          this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
          let ID = OD.chrome || OD.ios ? {
            node: cD.selectionRange.focusNode,
            written: !1
          } : void 0;
          this.tile.sync(ID), !ID || !ID.written && cD.selectionRange.focusNode == ID.node && this.tile.dom.contains(ID.node) || (this.forceSelection = !0), this.tile.dom.style.height = ""
        }));
        let ID = [];
        if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
          for (let pD of this.tile.children) pD.isWidget() && pD.widget instanceof kc && ID.push(pD.dom);
        cD.updateGaps(ID)
      }
      updateEditContextFormatting(DD) {
        this.editContextFormatting = this.editContextFormatting.map(DD.changes);
        for (let CD of DD.transactions)
          for (let DD of CD.effects) DD.is(WC) && (this.editContextFormatting = DD.value)
      }
      updateSelection() {
        let DD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this.view.observer.selectionRange.focusNode || this.view.observer.readSelectionRange();
        let {
          dom: CD
        } = this.tile, cD = this.view.root.activeElement, ID = cD == CD, pD = !ID && !(this.view.state.facet(EC) || CD.tabIndex > -1) && kD(CD, this.view.observer.selectionRange) && !(cD && CD.contains(cD));
        if (!(ID || DD || pD)) return;
        let iD = this.forceSelection;
        this.forceSelection = !1;
        let fD, bD, QD = this.view.state.selection.main;
        if (QD.empty ? bD = fD = this.inlineDOMNearPos(QD.anchor, QD.assoc || 1) : (bD = this.inlineDOMNearPos(QD.head, QD.head == QD.from ? 1 : -1), fD = this.inlineDOMNearPos(QD.anchor, QD.anchor == QD.from ? 1 : -1)), OD.gecko && QD.empty && !this.hasComposition && (1 == (wD = fD).node.nodeType && wD.node.firstChild && (0 == wD.offset || "false" == wD.node.childNodes[wD.offset - 1].contentEditable) && (wD.offset == wD.node.childNodes.length || "false" == wD.node.childNodes[wD.offset].contentEditable))) {
          let DD = document.createTextNode("");
          this.view.observer.ignore((() => fD.node.insertBefore(DD, fD.node.childNodes[fD.offset] || null))), fD = bD = new QC(DD, 0), iD = !0
        }
        var wD;
        let SD = this.view.observer.selectionRange;
        !iD && SD.focusNode && (YD(fD.node, fD.offset, SD.anchorNode, SD.anchorOffset) && YD(bD.node, bD.offset, SD.focusNode, SD.focusOffset) || this.suppressWidgetCursorChange(SD, QD)) || (this.view.observer.ignore((() => {
          OD.android && OD.chrome && CD.contains(SD.focusNode) && function(DD, CD) {
            for (let cD = DD; cD && cD != CD; cD = cD.assignedSlot || cD.parentNode)
              if (1 == cD.nodeType && "false" == cD.contentEditable) return !0;
            return !1
          }(SD.focusNode, CD) && (CD.blur(), CD.focus({
            preventScroll: !0
          }));
          let DD = GD(this.view.root);
          if (DD)
            if (QD.empty) {
              if (OD.gecko) {
                let DD = (ID = fD.node, iD = fD.offset, 1 != ID.nodeType ? 0 : (iD && "false" == ID.childNodes[iD - 1].contentEditable ? 1 : 0) | (iD < ID.childNodes.length && "false" == ID.childNodes[iD].contentEditable ? 2 : 0));
                if (DD && 3 != DD) {
                  let CD = (1 == DD ? fC : bC)(fD.node, fD.offset);
                  CD && (fD = new QC(CD.node, CD.offset))
                }
              }
              DD.collapse(fD.node, fD.offset), null != QD.bidiLevel && void 0 !== DD.caretBidiLevel && (DD.caretBidiLevel = QD.bidiLevel)
            } else if (DD.extend) {
            DD.collapse(fD.node, fD.offset);
            try {
              DD.extend(bD.node, bD.offset)
            } catch (wD) {}
          } else {
            let CD = document.createRange();
            QD.anchor > QD.head && ([fD, bD] = [bD, fD]), CD.setEnd(bD.node, bD.offset), CD.setStart(fD.node, fD.offset), DD.removeAllRanges(), DD.addRange(CD)
          } else;
          var ID, iD;
          pD && this.view.root.activeElement == CD && (CD.blur(), cD && cD.focus())
        })), this.view.observer.setSelectionRange(fD, bD)), this.impreciseAnchor = fD.precise ? null : new QC(SD.anchorNode, SD.anchorOffset), this.impreciseHead = bD.precise ? null : new QC(SD.focusNode, SD.focusOffset)
      }
      suppressWidgetCursorChange(DD, CD) {
        return this.hasComposition && CD.empty && YD(DD.focusNode, DD.focusOffset, DD.anchorNode, DD.anchorOffset) && this.posFromDOM(DD.focusNode, DD.focusOffset) == CD.head
      }
      enforceCursorAssoc() {
        if (this.hasComposition) return;
        let {
          view: DD
        } = this, CD = DD.state.selection.main, cD = GD(DD.root), {
          anchorNode: ID,
          anchorOffset: pD
        } = DD.observer.selectionRange;
        if (!cD || !CD.empty || !CD.assoc || !cD.modify) return;
        let iD = this.lineAt(CD.head, CD.assoc);
        if (!iD) return;
        let fD = iD.posAtStart;
        if (CD.head == fD || CD.head == fD + iD.length) return;
        let bD = this.coordsAt(CD.head, -1),
          QD = this.coordsAt(CD.head, 1);
        if (!bD || !QD || bD.bottom > QD.top) return;
        let wD = this.domAtPos(CD.head + CD.assoc, CD.assoc);
        cD.collapse(wD.node, wD.offset), cD.modify("move", CD.assoc < 0 ? "forward" : "backward", "lineboundary"), DD.observer.readSelectionRange();
        let SD = DD.observer.selectionRange;
        DD.docView.posFromDOM(SD.anchorNode, SD.anchorOffset) != CD.from && cD.collapse(ID, pD)
      }
      posFromDOM(DD, CD) {
        let cD = this.tile.nearest(DD);
        if (!cD) return 2 & this.tile.dom.compareDocumentPosition(DD) ? 0 : this.view.state.doc.length;
        let ID = cD.posAtStart;
        if (!cD.isComposite()) return cD.isText() ? DD == cD.dom ? ID + CD : ID + (CD ? cD.length : 0) : ID;
        {
          let pD;
          if (DD == cD.dom) pD = cD.dom.childNodes[CD];
          else {
            let ID = 0 == eD(DD) ? 0 : 0 == CD ? -1 : 1;
            for (;;) {
              let CD = DD.parentNode;
              if (CD == cD.dom) break;
              0 == ID && CD.firstChild != CD.lastChild && (ID = DD == CD.firstChild ? -1 : 1), DD = CD
            }
            pD = ID < 0 ? DD : DD.nextSibling
          }
          if (pD == cD.dom.firstChild) return ID;
          for (; pD && !yc.get(pD);) pD = pD.nextSibling;
          if (!pD) return ID + cD.length;
          for (let DD = 0, CD = ID;; DD++) {
            let ID = cD.children[DD];
            if (ID.dom == pD) return CD;
            CD += ID.length + ID.breakAfter
          }
        }
      }
      domAtPos(DD, CD) {
        let {
          tile: cD,
          offset: ID
        } = this.tile.resolveBlock(DD, CD);
        return cD.isWidget() ? cD.domPosFor(DD, CD) : cD.domIn(ID, CD)
      }
      inlineDOMNearPos(DD, CD) {
        let cD, ID, pD = -1,
          iD = !1,
          fD = -1,
          bD = !1;
        return this.tile.blockTiles(((CD, QD) => {
          if (CD.isWidget()) {
            if (32 & CD.flags && QD >= DD) return !0;
            16 & CD.flags && (iD = !0)
          } else {
            let wD = QD + CD.length;
            if (QD <= DD && (cD = CD, pD = DD - QD, iD = wD < DD), wD >= DD && !ID && (ID = CD, fD = DD - QD, bD = QD > DD), QD > DD && ID) return !0
          }
        })), cD || ID ? (iD && ID ? cD = null : bD && cD && (ID = null), cD && CD < 0 || !ID ? cD.domIn(pD, CD) : ID.domIn(fD, CD)) : this.domAtPos(DD, CD)
      }
      coordsAt(DD, CD) {
        let {
          tile: cD,
          offset: ID
        } = this.tile.resolveBlock(DD, CD);
        return cD.isWidget() ? cD.widget instanceof kc ? null : cD.coordsInWidget(ID, CD, !0) : cD.coordsIn(ID, CD)
      }
      lineAt(DD, CD) {
        let {
          tile: cD
        } = this.tile.resolveBlock(DD, CD);
        return cD.isLine() ? cD : null
      }
      coordsForChar(DD) {
        let {
          tile: CD,
          offset: cD
        } = this.tile.resolveBlock(DD, 1);
        if (!CD.isLine()) return null;
        return function DD(CD, cD) {
          if (CD.isComposite())
            for (let ID of CD.children) {
              if (ID.length >= cD) {
                let CD = DD(ID, cD);
                if (CD) return CD
              }
              if ((cD -= ID.length) < 0) break
            } else if (CD.isText() && cD < CD.length) {
              let DD = (0, ID._)(CD.text, cD);
              if (DD == cD) return null;
              let pD = IC(CD.dom, cD, DD).getClientRects();
              for (let CD = 0; CD < pD.length; CD++) {
                let DD = pD[CD];
                if (CD == pD.length - 1 || DD.top < DD.bottom && DD.left < DD.right) return DD
              }
            } return null
        }(CD, cD)
      }
      measureVisibleLineHeights(DD) {
        let CD = [],
          {
            from: cD,
            to: ID
          } = DD,
          pD = this.view.contentDOM.clientWidth,
          iD = pD > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
          fD = -1,
          bD = this.view.textDirection == wC.LTR,
          QD = 0,
          wD = (DD, SD, BD) => {
            for (let yD = 0; yD < DD.children.length && !(SD > ID); yD++) {
              let ID = DD.children[yD],
                MD = SD + ID.length,
                tD = ID.dom.getBoundingClientRect(),
                {
                  height: ZD
                } = tD;
              if (BD && !yD && (QD += tD.top - BD.top), ID instanceof oc) MD > cD && wD(ID, SD, tD);
              else if (SD >= cD && (QD > 0 && CD.push(-QD), CD.push(ZD + QD), QD = 0, iD)) {
                let DD = ID.dom.lastChild,
                  CD = DD ? dD(DD) : [];
                if (CD.length) {
                  let DD = CD[CD.length - 1],
                    cD = bD ? DD.right - tD.left : tD.right - DD.left;
                  cD > fD && (fD = cD, this.minWidth = pD, this.minWidthFrom = SD, this.minWidthTo = MD)
                }
              }
              BD && yD == DD.children.length - 1 && (QD += BD.bottom - tD.bottom), SD = MD + ID.breakAfter
            }
          };
        return wD(this.tile, 0, null), CD
      }
      textDirectionAt(DD) {
        let {
          tile: CD
        } = this.tile.resolveBlock(DD, 1);
        return "rtl" == getComputedStyle(CD.dom).direction ? wC.RTL : wC.LTR
      }
      measureTextSize() {
        let DD = this.tile.blockTiles((DD => {
          if (DD.isLine() && DD.children.length && DD.length <= 20) {
            let CD, cD = 0;
            for (let ID of DD.children) {
              if (!ID.isText() || /[^ -~]/.test(ID.text)) return;
              let DD = dD(ID.dom);
              if (1 != DD.length) return;
              cD += DD[0].width, CD = DD[0].height
            }
            if (cD) return {
              lineHeight: DD.dom.getBoundingClientRect().height,
              charWidth: cD / DD.length,
              textHeight: CD
            }
          }
        }));
        if (DD) return DD;
        let CD, cD, ID, pD = document.createElement("div");
        return pD.className = "cm-line", pD.style.width = "99999px", pD.style.position = "absolute", pD.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore((() => {
          this.tile.dom.appendChild(pD);
          let DD = dD(pD.firstChild)[0];
          CD = pD.getBoundingClientRect().height, cD = DD && DD.width ? DD.width / 27 : 7, ID = DD && DD.height ? DD.height : CD, pD.remove()
        })), {
          lineHeight: CD,
          charWidth: cD,
          textHeight: ID
        }
      }
      computeBlockGapDeco() {
        let DD = [],
          CD = this.view.viewState;
        for (let cD = 0, ID = 0;; ID++) {
          let pD = ID == CD.viewports.length ? null : CD.viewports[ID],
            iD = pD ? pD.from - 1 : this.view.state.doc.length;
          if (iD > cD) {
            let ID = (CD.lineBlockAt(iD).bottom - CD.lineBlockAt(cD).top) / this.view.scaleY;
            DD.push(aD.replace({
              widget: new kc(ID),
              block: !0,
              inclusive: !0,
              isBlockGap: !0
            }).range(cD, iD))
          }
          if (!pD) break;
          cD = pD.to + 1
        }
        return aD.set(DD)
      }
      updateDeco() {
        let DD = 1,
          CD = this.view.state.facet(Dc).map((CD => (this.dynamicDecorationMap[DD++] = "function" == typeof CD) ? CD(this.view) : CD)),
          cD = !1,
          pD = this.view.state.facet(cc).map(((DD, CD) => {
            let ID = "function" == typeof DD;
            return ID && (cD = !0), ID ? DD(this.view) : DD
          }));
        for (pD.length && (this.dynamicDecorationMap[DD++] = cD, CD.push(ID.x.join(pD))), this.qI = [this.editContextFormatting, ...CD, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; DD < this.qI.length;) this.dynamicDecorationMap[DD++] = !1;
        this.blockWrappers = this.view.state.facet(Cc).map((DD => "function" == typeof DD ? DD(this.view) : DD))
      }
      scrollIntoView(DD) {
        var CD;
        if (DD.isSnapshot) {
          let CD = this.view.viewState.lineBlockAt(DD.range.head);
          return this.view.scrollDOM.scrollTop = CD.top - DD.yMargin, void(this.view.scrollDOM.scrollLeft = DD.xMargin)
        }
        for (let SD of this.view.state.facet(kC)) try {
          if (SD(this.view, DD.range, DD)) return !0
        } catch (wD) {
          sC(this.view.state, wD, "scroll handler")
        }
        let cD, {
            range: ID
          } = DD,
          pD = this.coordsAt(ID.head, null !== (CD = ID.assoc) && void 0 !== CD ? CD : ID.empty ? 0 : ID.head > ID.anchor ? -1 : 1);
        if (!pD) return;
        !ID.empty && (cD = this.coordsAt(ID.anchor, ID.anchor > ID.head ? -1 : 1)) && (pD = {
          left: Math.min(pD.left, cD.left),
          top: Math.min(pD.top, cD.top),
          right: Math.max(pD.right, cD.right),
          bottom: Math.max(pD.bottom, cD.bottom)
        });
        let iD = bc(this.view),
          fD = {
            left: pD.left - iD.left,
            top: pD.top - iD.top,
            right: pD.right + iD.right,
            bottom: pD.bottom + iD.bottom
          },
          {
            offsetWidth: bD,
            offsetHeight: QD
          } = this.view.scrollDOM;
        if (function(DD, CD, cD, ID, pD, iD, fD, bD) {
            let QD = DD.ownerDocument,
              wD = QD.defaultView || window;
            for (let SD = DD, BD = !1; SD && !BD;)
              if (1 == SD.nodeType) {
                let DD, yD = SD == QD.body,
                  MD = 1,
                  tD = 1;
                if (yD) DD = hD(wD);
                else {
                  if (/^(fixed|sticky)$/.test(getComputedStyle(SD).position) && (BD = !0), SD.scrollHeight <= SD.clientHeight && SD.scrollWidth <= SD.clientWidth) {
                    SD = SD.assignedSlot || SD.parentNode;
                    continue
                  }
                  let CD = SD.getBoundingClientRect();
                  ({
                    scaleX: MD,
                    scaleY: tD
                  } = rD(SD, CD)), DD = {
                    left: CD.left,
                    right: CD.left + SD.clientWidth * MD,
                    top: CD.top,
                    bottom: CD.top + SD.clientHeight * tD
                  }
                }
                let ZD = 0,
                  oD = 0;
                if ("nearest" == pD) CD.top < DD.top + fD ? (oD = CD.top - (DD.top + fD), cD > 0 && CD.bottom > DD.bottom + oD && (oD = CD.bottom - DD.bottom + fD)) : CD.bottom > DD.bottom - fD && (oD = CD.bottom - DD.bottom + fD, cD < 0 && CD.top - oD < DD.top && (oD = CD.top - (DD.top + fD)));
                else {
                  let ID = CD.bottom - CD.top,
                    iD = DD.bottom - DD.top;
                  oD = ("center" == pD && ID <= iD ? CD.top + ID / 2 - iD / 2 : "start" == pD || "center" == pD && cD < 0 ? CD.top - fD : CD.bottom - iD + fD) - DD.top
                }
                if ("nearest" == ID ? CD.left < DD.left + iD ? (ZD = CD.left - (DD.left + iD), cD > 0 && CD.right > DD.right + ZD && (ZD = CD.right - DD.right + iD)) : CD.right > DD.right - iD && (ZD = CD.right - DD.right + iD, cD < 0 && CD.left < DD.left + ZD && (ZD = CD.left - (DD.left + iD))) : ZD = ("center" == ID ? CD.left + (CD.right - CD.left) / 2 - (DD.right - DD.left) / 2 : "start" == ID == bD ? CD.left - iD : CD.right - (DD.right - DD.left) + iD) - DD.left, ZD || oD)
                  if (yD) wD.scrollBy(ZD, oD);
                  else {
                    let DD = 0,
                      cD = 0;
                    if (oD) {
                      let DD = SD.scrollTop;
                      SD.scrollTop += oD / tD, cD = (SD.scrollTop - DD) * tD
                    }
                    if (ZD) {
                      let CD = SD.scrollLeft;
                      SD.scrollLeft += ZD / MD, DD = (SD.scrollLeft - CD) * MD
                    }
                    CD = {
                      left: CD.left - DD,
                      top: CD.top - cD,
                      right: CD.right - DD,
                      bottom: CD.bottom - cD
                    }, DD && Math.abs(DD - ZD) < 1 && (ID = "nearest"), cD && Math.abs(cD - oD) < 1 && (pD = "nearest")
                  } if (yD) break;
                (CD.top < DD.top || CD.bottom > DD.bottom || CD.left < DD.left || CD.right > DD.right) && (CD = {
                  left: Math.max(CD.left, DD.left),
                  right: Math.min(CD.right, DD.right),
                  top: Math.max(CD.top, DD.top),
                  bottom: Math.min(CD.bottom, DD.bottom)
                }), SD = SD.assignedSlot || SD.parentNode
              } else {
                if (11 != SD.nodeType) break;
                SD = SD.host
              }
          }(this.view.scrollDOM, fD, ID.head < ID.anchor ? -1 : 1, DD.x, DD.y, Math.max(Math.min(DD.xMargin, bD), -bD), Math.max(Math.min(DD.yMargin, QD), -QD), this.view.textDirection == wC.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (pD.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || pD.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
          let DD = this.view.docView.lineAt(ID.head, 1);
          DD && DD.dom.scrollIntoView({
            block: "nearest"
          })
        }
      }
      lineHasWidget(DD) {
        let CD = DD => DD.isWidget() || DD.children.some(CD);
        return CD(this.tile.resolveBlock(DD, 1).tile)
      }
      destroy() {
        Lc(this.tile)
      }
    }

    function Lc(DD, CD) {
      let cD = null === CD || void 0 === CD ? void 0 : CD.get(DD);
      if (1 != cD) {
        null == cD && DD.destroy();
        for (let cD of DD.children) Lc(cD, CD)
      }
    }

    function Tc(DD, CD) {
      let cD = DD.observer.selectionRange;
      if (!cD.focusNode) return null;
      let ID = fC(cD.focusNode, cD.focusOffset),
        pD = bC(cD.focusNode, cD.focusOffset),
        iD = ID || pD;
      if (pD && ID && pD.node != ID.node) {
        let CD = yc.get(pD.node);
        if (!CD || CD.isText() && CD.text != pD.node.nodeValue) iD = pD;
        else if (DD.docView.lastCompositionAfterCursor) {
          let DD = yc.get(ID.node);
          !DD || DD.isText() && DD.text != ID.node.nodeValue || (iD = pD)
        }
      }
      if (DD.docView.lastCompositionAfterCursor = iD != ID, !iD) return null;
      let fD = CD - iD.offset;
      return {
        from: fD,
        to: fD + iD.node.nodeValue.length,
        node: iD.node
      }
    }
    let Gc = class {
      constructor() {
        this.changes = []
      }
      compareRange(DD, CD) {
        LD(DD, CD, this.changes)
      }
      comparePoint(DD, CD) {
        LD(DD, CD, this.changes)
      }
      boundChange(DD) {
        LD(DD, DD, this.changes)
      }
    };
    class Rc {
      constructor() {
        this.changes = []
      }
      compareRange(DD, CD) {
        LD(DD, CD, this.changes)
      }
      comparePoint() {}
      boundChange(DD) {
        LD(DD, DD, this.changes)
      }
    }
    class kc extends JD {
      constructor(DD) {
        super(), this.height = DD
      }
      toDOM() {
        let DD = document.createElement("div");
        return DD.className = "cm-gap", this.updateDOM(DD), DD
      }
      eq(DD) {
        return DD.height == this.height
      }
      updateDOM(DD) {
        return DD.style.height = this.height + "px", !0
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

    function dc(DD, CD, cD) {
      let ID = DD.lineBlockAt(CD);
      if (Array.isArray(ID.type)) {
        let DD;
        for (let pD of ID.type) {
          if (pD.from > CD) break;
          if (!(pD.to < CD)) {
            if (pD.from < CD && pD.to > CD) return pD;
            DD && (pD.type != KD.Text || DD.type == pD.type && !(cD < 0 ? pD.from < CD : pD.to > CD)) || (DD = pD)
          }
        }
        return DD || ID
      }
      return ID
    }

    function Yc(DD, CD, cD, ID) {
      let pD = DD.state.doc.lineAt(CD.head),
        iD = DD.bidiSpans(pD),
        fD = DD.textDirectionAt(pD.from);
      for (let bD = CD, QD = null;;) {
        let CD = xC(pD, iD, fD, bD, cD),
          wD = UC;
        if (!CD) {
          if (pD.number == (cD ? DD.state.doc.lines : 1)) return bD;
          wD = "\n", pD = DD.state.doc.line(pD.number + (cD ? 1 : -1)), iD = DD.bidiSpans(pD), CD = DD.visualLineSide(pD, !cD)
        }
        if (QD) {
          if (!QD(wD)) return bD
        } else {
          if (!ID) return CD;
          QD = ID(wD)
        }
        bD = CD
      }
    }

    function Wc(DD, CD, cD) {
      for (;;) {
        let ID = 0;
        for (let pD of DD) pD.between(CD - 1, CD + 1, ((DD, pD, iD) => {
          if (CD > DD && CD < pD) {
            let iD = ID || cD || (CD - DD < pD - CD ? -1 : 1);
            CD = iD < 0 ? DD : pD, ID = iD
          }
        }));
        if (!ID) return CD
      }
    }

    function sc(DD, CD) {
      let cD = null;
      for (let pD = 0; pD < CD.df.length; pD++) {
        let iD = CD.df[pD],
          fD = null;
        if (iD.empty) {
          let CD = Wc(DD, iD.from, 0);
          CD != iD.from && (fD = ID.i.cursor(CD, -1))
        } else {
          let CD = Wc(DD, iD.from, -1),
            cD = Wc(DD, iD.to, 1);
          CD == iD.from && cD == iD.to || (fD = ID.i.range(iD.from == iD.anchor ? CD : cD, iD.from == iD.head ? CD : cD))
        }
        fD && (cD || (cD = CD.df.slice()), cD[pD] = fD)
      }
      return cD ? ID.i.create(cD, CD.mainIndex) : CD
    }

    function Ec(DD, CD, cD) {
      let pD = Wc(DD.state.facet(Ic).map((CD => CD(DD))), cD.from, CD.head > cD.from ? -1 : 1);
      return pD == cD.from ? cD : ID.i.cursor(pD, pD < cD.from ? 1 : -1)
    }
    class ec {
      constructor(DD, CD) {
        this.pos = DD, this.assoc = CD
      }
    }

    function uc(DD, CD, cD, pD) {
      let iD, fD = DD.contentDOM.getBoundingClientRect(),
        bD = fD.top + DD.viewState.paddingTop,
        {
          x: QD,
          y: wD
        } = CD,
        SD = wD - bD;
      for (;;) {
        if (SD < 0) return new ec(0, 1);
        if (SD > DD.viewState.docHeight) return new ec(DD.state.doc.length, -1);
        if (iD = DD.elementAtHeight(SD), null == pD) break;
        if (iD.type == KD.Text) {
          if (pD < 0 ? iD.to < DD.viewport.from : iD.from > DD.viewport.to) break;
          let CD = DD.docView.coordsAt(pD < 0 ? iD.from : iD.to, pD > 0 ? -1 : 1);
          if (CD && (pD < 0 ? CD.top <= SD + bD : CD.bottom >= SD + bD)) break
        }
        let CD = DD.viewState.heightOracle.textHeight / 2;
        SD = pD > 0 ? iD.bottom + CD : iD.top - CD
      }
      if (DD.viewport.from >= iD.to || DD.viewport.to <= iD.from) {
        if (cD) return null;
        if (iD.type == KD.Text) {
          let CD = function(DD, CD, cD, pD, iD) {
            let fD = Math.round((pD - CD.left) * DD.defaultCharacterWidth);
            if (DD.lineWrapping && cD.height > 1.5 * DD.defaultLineHeight) {
              let CD = DD.viewState.heightOracle.textHeight;
              fD += Math.floor((iD - cD.top - .5 * (DD.defaultLineHeight - CD)) / CD) * DD.viewState.heightOracle.lineLength
            }
            let bD = DD.state.sliceDoc(cD.from, cD.to);
            return cD.from + (0, ID.ab)(bD, fD, DD.state.tabSize)
          }(DD, fD, iD, QD, wD);
          return new ec(CD, CD == iD.from ? 1 : -1)
        }
      }
      if (iD.type != KD.Text) return SD < (iD.top + iD.bottom) / 2 ? new ec(iD.from, 1) : new ec(iD.to, -1);
      let BD = DD.docView.lineAt(iD.from, 2);
      return BD && BD.length == iD.length || (BD = DD.docView.lineAt(iD.from, -2)), new hc(DD, QD, wD, DD.textDirectionAt(iD.from)).scanTile(BD, iD.from)
    }
    class hc {
      constructor(DD, CD, cD, ID) {
        this.view = DD, this.x = CD, this.y = cD, this.baseDir = ID, this.line = null, this.spans = null
      }
      bidiSpansAt(DD) {
        return (!this.line || this.line.from > DD || this.line.to < DD) && (this.line = this.view.state.doc.lineAt(DD), this.spans = this.view.bidiSpans(this.line)), this
      }
      baseDirAt(DD, CD) {
        let {
          line: cD,
          spans: ID
        } = this.bidiSpansAt(DD);
        return ID[gC.find(ID, DD - cD.from, -1, CD)].level == this.baseDir
      }
      dirAt(DD, CD) {
        let {
          line: cD,
          spans: ID
        } = this.bidiSpansAt(DD);
        return ID[gC.find(ID, DD - cD.from, -1, CD)].dir
      }
      bidiIn(DD, CD) {
        let {
          spans: cD,
          line: ID
        } = this.bidiSpansAt(DD);
        return cD.length > 1 || cD.length && (cD[0].level != this.baseDir || cD[0].to + ID.from < CD)
      }
      scan(DD, CD) {
        let cD, ID, pD, iD = 0,
          fD = DD.length - 1,
          bD = new Set,
          QD = this.bidiIn(DD[0], DD[fD]),
          wD = -1,
          SD = 1e9;
        DD: for (; iD < fD;) {
          let BD = fD - iD,
            yD = iD + fD >> 1;
          CD: if (bD.has(yD)) {
            let DD = iD + Math.floor(Math.random() * BD);
            for (let CD = 0; CD < BD; CD++) {
              if (!bD.has(DD)) {
                yD = DD;
                break CD
              }
              DD++, DD == fD && (DD = iD)
            }
            break DD
          } bD.add(yD);
          let MD = CD(yD);
          if (MD)
            for (let CD = 0; CD < MD.length; CD++) {
              let bD = MD[CD],
                BD = 0;
              if (!(0 == bD.width && MD.length > 1)) {
                if (bD.bottom < this.y)(!cD || cD.bottom < bD.bottom) && (cD = bD), BD = 1;
                else if (bD.top > this.y)(!ID || ID.top > bD.top) && (ID = bD), BD = -1;
                else {
                  let DD = bD.left > this.x ? this.x - bD.left : bD.right < this.x ? this.x - bD.right : 0,
                    CD = Math.abs(DD);
                  CD < SD && (wD = yD, SD = CD, pD = bD), DD && (BD = DD < 0 == (this.baseDir == wC.LTR) ? -1 : 1)
                } - 1 != BD || QD && !this.baseDirAt(DD[yD], 1) ? 1 != BD || QD && !this.baseDirAt(DD[yD + 1], -1) || (iD = yD + 1) : fD = yD
              }
            }
        }
        if (!pD) {
          let pD = cD && (!ID || this.y - cD.bottom < ID.top - this.y) ? cD : ID;
          return this.y = (pD.top + pD.bottom) / 2, this.scan(DD, CD)
        }
        if (SD) {
          if (cD && cD.bottom > pD.top) return this.y = cD.bottom - 1, this.scan(DD, CD);
          if (ID && ID.top < pD.bottom) return this.y = ID.top + 1, this.scan(DD, CD)
        }
        let BD = (QD ? this.dirAt(DD[wD], 1) : this.baseDir) == wC.LTR;
        return {
          i: wD,
          after: this.x > (pD.left + pD.right) / 2 == BD
        }
      }
      scanText(DD, CD) {
        let cD = [];
        for (let iD = 0; iD < DD.length; iD = (0, ID._)(DD.text, iD)) cD.push(CD + iD);
        cD.push(CD + DD.length);
        let pD = this.scan(cD, (ID => {
          let pD = cD[ID] - CD,
            iD = cD[ID + 1] - CD;
          return IC(DD.dom, pD, iD).getClientRects()
        }));
        return pD.after ? new ec(cD[pD.i + 1], -1) : new ec(cD[pD.i], 1)
      }
      scanTile(DD, CD) {
        if (!DD.length) return new ec(CD, 1);
        if (1 == DD.children.length) {
          let cD = DD.children[0];
          if (cD.isText()) return this.scanText(cD, CD);
          if (cD.isComposite()) return this.scanTile(cD, CD)
        }
        let cD = [CD];
        for (let fD = 0, bD = CD; fD < DD.children.length; fD++) cD.push(bD += DD.children[fD].length);
        let ID = this.scan(cD, (CD => {
            let cD = DD.children[CD];
            return 48 & cD.flags ? null : (1 == cD.dom.nodeType ? cD.dom : IC(cD.dom, 0, cD.length)).getClientRects()
          })),
          pD = DD.children[ID.i],
          iD = cD[ID.i];
        return pD.isText() ? this.scanText(pD, iD) : pD.isComposite() ? this.scanTile(pD, iD) : ID.after ? new ec(cD[ID.i + 1], -1) : new ec(iD, 1)
      }
    }
    const rc = "\uffff";
    class Ac {
      constructor(DD, CD) {
        this.points = DD, this.view = CD, this.text = "", this.lineSeparator = CD.state.facet(ID.j.lineSeparator)
      }
      append(DD) {
        this.text += DD
      }
      lineBreak() {
        this.text += rc
      }
      readRange(DD, CD) {
        if (!DD) return this;
        let cD = DD.parentNode;
        for (let ID = DD;;) {
          this.findPointBefore(cD, ID);
          let DD = this.text.length;
          this.readNode(ID);
          let pD = yc.get(ID),
            iD = ID.nextSibling;
          if (iD == CD) {
            (null === pD || void 0 === pD ? void 0 : pD.breakAfter) && !iD && cD != this.view.contentDOM && this.lineBreak();
            break
          }
          let fD = yc.get(iD);
          (pD && fD ? pD.breakAfter : (pD ? pD.breakAfter : sD(ID)) || sD(iD) && ("BR" != ID.nodeName || (null === pD || void 0 === pD ? void 0 : pD.isWidget())) && this.text.length > DD) && !DI(iD, CD) && this.lineBreak(), ID = iD
        }
        return this.findPointBefore(cD, CD), this
      }
      readTextNode(DD) {
        let CD = DD.nodeValue;
        for (let cD of this.points) cD.node == DD && (cD.pos = this.text.length + Math.min(cD.offset, CD.length));
        for (let cD = 0, ID = this.lineSeparator ? null : /\r\n?|\n/g;;) {
          let pD, iD = -1,
            fD = 1;
          if (this.lineSeparator ? (iD = CD.indexOf(this.lineSeparator, cD), fD = this.lineSeparator.length) : (pD = ID.exec(CD)) && (iD = pD.index, fD = pD[0].length), this.append(CD.slice(cD, iD < 0 ? CD.length : iD)), iD < 0) break;
          if (this.lineBreak(), fD > 1)
            for (let CD of this.points) CD.node == DD && CD.pos > this.text.length && (CD.pos -= fD - 1);
          cD = iD + fD
        }
      }
      readNode(DD) {
        let CD = yc.get(DD),
          cD = CD && CD.overrideDOMText;
        if (null != cD) {
          this.findPointInside(DD, cD.length);
          for (let DD = cD.iter(); !DD.next().done;) DD.lineBreak ? this.lineBreak() : this.append(DD.value)
        } else 3 == DD.nodeType ? this.readTextNode(DD) : "BR" == DD.nodeName ? DD.nextSibling && this.lineBreak() : 1 == DD.nodeType && this.readRange(DD.firstChild, null)
      }
      findPointBefore(DD, CD) {
        for (let cD of this.points) cD.node == DD && DD.childNodes[cD.offset] == CD && (cD.pos = this.text.length)
      }
      findPointInside(DD, CD) {
        for (let cD of this.points)(3 == DD.nodeType ? cD.node == DD : DD.contains(cD.node)) && (cD.pos = this.text.length + (Fc(DD, cD.node, cD.offset) ? CD : 0))
      }
    }

    function Fc(DD, CD, cD) {
      for (;;) {
        if (!CD || cD < eD(CD)) return !1;
        if (CD == DD) return !0;
        cD = WD(CD) + 1, CD = CD.parentNode
      }
    }

    function DI(DD, CD) {
      let cD;
      for (; DD != CD && DD; DD = DD.nextSibling) {
        let CD = yc.get(DD);
        if (!(null === CD || void 0 === CD ? void 0 : CD.isWidget())) return !1;
        CD && (cD || (cD = [])).push(CD)
      }
      if (cD)
        for (let ID of cD) {
          let DD = ID.overrideDOMText;
          if (null === DD || void 0 === DD ? void 0 : DD.length) return !1
        }
      return !0
    }
    class CI {
      constructor(DD, CD) {
        this.node = DD, this.offset = CD, this.pos = -1
      }
    }
    class cI {
      constructor(DD, CD, cD, pD) {
        this.typeOver = pD, this.bounds = null, this.text = "", this.domChanged = CD > -1;
        let {
          impreciseHead: iD,
          impreciseAnchor: fD
        } = DD.docView, bD = DD.state.selection;
        if (DD.state.readOnly && CD > -1) this.newSel = null;
        else if (CD > -1 && (this.bounds = II(DD.docView.tile, CD, cD, 0))) {
          let CD = iD || fD ? [] : function(DD) {
              let CD = [];
              if (DD.root.activeElement != DD.contentDOM) return CD;
              let {
                anchorNode: cD,
                anchorOffset: ID,
                focusNode: pD,
                focusOffset: iD
              } = DD.observer.selectionRange;
              cD && (CD.push(new CI(cD, ID)), pD == cD && iD == ID || CD.push(new CI(pD, iD)));
              return CD
            }(DD),
            cD = new Ac(CD, DD);
          cD.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = cD.text, this.newSel = function(DD, CD) {
            if (0 == DD.length) return null;
            let cD = DD[0].pos,
              pD = 2 == DD.length ? DD[1].pos : cD;
            return cD > -1 && pD > -1 ? ID.i.single(cD + CD, pD + CD) : null
          }(CD, this.bounds.from)
        } else {
          let CD = DD.observer.selectionRange,
            cD = iD && iD.node == CD.focusNode && iD.offset == CD.focusOffset || !RD(DD.contentDOM, CD.focusNode) ? bD.main.head : DD.docView.posFromDOM(CD.focusNode, CD.focusOffset),
            pD = fD && fD.node == CD.anchorNode && fD.offset == CD.anchorOffset || !RD(DD.contentDOM, CD.anchorNode) ? bD.main.anchor : DD.docView.posFromDOM(CD.anchorNode, CD.anchorOffset),
            QD = DD.viewport;
          if ((OD.ios || OD.chrome) && bD.main.empty && cD != pD && (QD.from > 0 || QD.to < DD.state.doc.length)) {
            let CD = Math.min(cD, pD),
              ID = Math.max(cD, pD),
              iD = QD.from - CD,
              fD = QD.to - ID;
            0 != iD && 1 != iD && 0 != CD || 0 != fD && -1 != fD && ID != DD.state.doc.length || (cD = 0, pD = DD.state.doc.length)
          }
          if (DD.inputState.composing > -1 && bD.df.length > 1) this.newSel = bD.replaceRange(ID.i.range(pD, cD));
          else if (DD.lineWrapping && pD == cD && (!bD.main.empty || bD.main.head != cD) && DD.inputState.lastTouchTime > Date.now() - 100) {
            let CD = DD.coordsAtPos(cD, -1),
              pD = 0;
            CD && (pD = DD.inputState.lastTouchY <= CD.bottom ? -1 : 1), this.newSel = ID.i.create([ID.i.cursor(cD, pD)])
          } else this.newSel = ID.i.single(pD, cD)
        }
      }
    }

    function II(DD, CD, cD, ID) {
      if (DD.isComposite()) {
        let pD = -1,
          iD = -1,
          fD = -1,
          bD = -1;
        for (let QD = 0, wD = ID, SD = ID; QD < DD.children.length; QD++) {
          let ID = DD.children[QD],
            BD = wD + ID.length;
          if (wD < CD && BD > cD) return II(ID, CD, cD, wD);
          if (BD >= CD && -1 == pD && (pD = QD, iD = wD), wD > cD && ID.dom.parentNode == DD.dom) {
            fD = QD, bD = SD;
            break
          }
          SD = BD, wD = BD + ID.breakAfter
        }
        return {
          from: iD,
          to: bD < 0 ? ID + DD.length : bD,
          startDOM: (pD ? DD.children[pD - 1].dom.nextSibling : null) || DD.dom.firstChild,
          endDOM: fD < DD.children.length && fD >= 0 ? DD.children[fD].dom : null
        }
      }
      return DD.isText() ? {
        from: ID,
        to: ID + DD.length,
        startDOM: DD.dom,
        endDOM: DD.dom.nextSibling
      } : null
    }

    function pI(DD, CD) {
      let cD, {
          newSel: pD
        } = CD,
        {
          state: iD
        } = DD,
        fD = iD.selection.main,
        bD = DD.inputState.lastKeyTime > Date.now() - 100 ? DD.inputState.lastKeyCode : -1;
      if (CD.bounds) {
        let {
          from: DD,
          to: pD
        } = CD.bounds, QD = fD.from, wD = null;
        (8 === bD || OD.android && CD.text.length < pD - DD) && (QD = fD.to, wD = "end");
        let SD, BD, yD = iD.doc.sliceString(DD, pD, rc);
        !fD.empty && fD.from >= DD && fD.to <= pD && (CD.typeOver || yD != CD.text) && yD.slice(0, fD.from - DD) == CD.text.slice(0, fD.from - DD) && yD.slice(fD.to - DD) == CD.text.slice(SD = CD.text.length - (yD.length - (fD.to - DD))) ? cD = {
          from: fD.from,
          to: fD.to,
          insert: ID.J.of(CD.text.slice(fD.from - DD, SD).split(rc))
        } : (BD = fI(yD, CD.text, QD - DD, wD)) && (OD.chrome && 13 == bD && BD.toB == BD.from + 2 && CD.text.slice(BD.from, BD.toB) == rc + rc && BD.toB--, cD = {
          from: DD + BD.from,
          to: DD + BD.toA,
          insert: ID.J.of(CD.text.slice(BD.from, BD.toB).split(rc))
        })
      } else pD && (!DD.hasFocus && iD.facet(EC) || bI(pD, fD)) && (pD = null);
      if (!cD && !pD) return !1;
      if ((OD.mac || OD.android) && cD && cD.from == cD.to && cD.from == fD.head - 1 && /^\. ?$/.test(cD.insert.toString()) && "off" == DD.contentDOM.getAttribute("autocorrect") ? (pD && 2 == cD.insert.length && (pD = ID.i.single(pD.main.anchor - 1, pD.main.head - 1)), cD = {
          from: cD.from,
          to: cD.to,
          insert: ID.J.of([cD.insert.toString().replace(".", " ")])
        }) : iD.doc.lineAt(fD.from).to < fD.to && DD.docView.lineHasWidget(fD.to) && DD.inputState.insertingTextAt > Date.now() - 50 ? cD = {
          from: fD.from,
          to: fD.to,
          insert: iD.toText(DD.inputState.insertingText)
        } : OD.chrome && cD && cD.from == cD.to && cD.from == fD.head && "\n " == cD.insert.toString() && DD.lineWrapping && (pD && (pD = ID.i.single(pD.main.anchor - 1, pD.main.head - 1)), cD = {
          from: fD.from,
          to: fD.to,
          insert: ID.J.of([" "])
        }), cD) return iI(DD, cD, pD, bD);
      if (pD && !bI(pD, fD)) {
        let CD = !1,
          cD = "select";
        return DD.inputState.lastSelectionTime > Date.now() - 50 && ("select" == DD.inputState.lastSelectionOrigin && (CD = !0), cD = DD.inputState.lastSelectionOrigin, "select.pointer" == cD && (pD = sc(iD.facet(Ic).map((CD => CD(DD))), pD))), DD.dispatch({
          selection: pD,
          scrollIntoView: CD,
          userEvent: cD
        }), !0
      }
      return !1
    }

    function iI(DD, CD, cD) {
      let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
      if (OD.ios && DD.inputState.flushIOSKey(CD)) return !0;
      let iD = DD.state.selection.main;
      if (OD.android && (CD.to == iD.to && (CD.from == iD.from || CD.from == iD.from - 1 && " " == DD.state.sliceDoc(CD.from, iD.from)) && 1 == CD.insert.length && 2 == CD.insert.lines && pC(DD.contentDOM, "Enter", 13) || (CD.from == iD.from - 1 && CD.to == iD.to && 0 == CD.insert.length || 8 == pD && CD.insert.length < CD.to - CD.from && CD.to > iD.head) && pC(DD.contentDOM, "Backspace", 8) || CD.from == iD.from && CD.to == iD.to + 1 && 0 == CD.insert.length && pC(DD.contentDOM, "Delete", 46))) return !0;
      let fD, bD = CD.insert.toString();
      DD.inputState.composing >= 0 && DD.inputState.composing++;
      let QD = () => fD || (fD = function(DD, CD, cD) {
        let pD, iD = DD.state,
          fD = iD.selection.main,
          bD = -1;
        if (CD.from == CD.to && CD.from < fD.from || CD.from > fD.to) {
          let cD = CD.from < fD.from ? -1 : 1,
            ID = cD < 0 ? fD.from : fD.to,
            pD = Wc(iD.facet(Ic).map((CD => CD(DD))), ID, cD);
          CD.from == pD && (bD = pD)
        }
        if (bD > -1) pD = {
          changes: CD,
          selection: ID.i.cursor(CD.from + CD.insert.length, -1)
        };
        else if (CD.from >= fD.from && CD.to <= fD.to && CD.to - CD.from >= (fD.to - fD.from) / 3 && (!cD || cD.main.empty && cD.main.from == CD.from + CD.insert.length) && DD.inputState.composing < 0) {
          let cD = fD.from < CD.from ? iD.sliceDoc(fD.from, CD.from) : "",
            ID = fD.to > CD.to ? iD.sliceDoc(CD.to, fD.to) : "";
          pD = iD.replaceSelection(DD.state.toText(cD + CD.insert.sliceString(0, void 0, DD.state.lineBreak) + ID))
        } else {
          let bD = iD.changes(CD),
            QD = cD && cD.main.to <= bD.newLength ? cD.main : void 0;
          if (iD.selection.df.length > 1 && (DD.inputState.composing >= 0 || DD.inputState.compositionPendingChange) && CD.to <= fD.to + 10 && CD.to >= fD.to - 10) {
            let wD, SD = DD.state.sliceDoc(CD.from, CD.to),
              BD = cD && Tc(DD, cD.main.head);
            if (BD) {
              let DD = CD.insert.length - (CD.to - CD.from);
              wD = {
                from: BD.from,
                to: BD.to - DD
              }
            } else wD = DD.state.doc.lineAt(fD.head);
            let yD = fD.to - CD.to;
            pD = iD.changeByRange((cD => {
              if (cD.from == fD.from && cD.to == fD.to) return {
                changes: bD,
                range: QD || cD.map(bD)
              };
              let pD = cD.to - yD,
                BD = pD - SD.length;
              if (DD.state.sliceDoc(BD, pD) != SD || pD >= wD.from && BD <= wD.to) return {
                range: cD
              };
              let MD = iD.changes({
                  from: BD,
                  to: pD,
                  insert: CD.insert
                }),
                tD = cD.to - fD.to;
              return {
                changes: MD,
                range: QD ? ID.i.range(Math.max(0, QD.anchor + tD), Math.max(0, QD.head + tD)) : cD.map(MD)
              }
            }))
          } else pD = {
            changes: bD,
            selection: QD && iD.selection.replaceRange(QD)
          }
        }
        let QD = "input.type";
        (DD.composing || DD.inputState.compositionPendingChange && DD.inputState.compositionEndedAt > Date.now() - 50) && (DD.inputState.compositionPendingChange = !1, QD += ".compose", DD.inputState.compositionFirstChange && (QD += ".start", DD.inputState.compositionFirstChange = !1));
        return iD.update(pD, {
          userEvent: QD,
          scrollIntoView: !0
        })
      }(DD, CD, cD));
      return DD.state.facet(jC).some((cD => cD(DD, CD.from, CD.to, bD, QD))) || DD.dispatch(QD()), !0
    }

    function fI(DD, CD, cD, ID) {
      let pD = Math.min(DD.length, CD.length),
        iD = 0;
      for (; iD < pD && DD.charCodeAt(iD) == CD.charCodeAt(iD);) iD++;
      if (iD == pD && DD.length == CD.length) return null;
      let fD = DD.length,
        bD = CD.length;
      for (; fD > 0 && bD > 0 && DD.charCodeAt(fD - 1) == CD.charCodeAt(bD - 1);) fD--, bD--;
      if ("end" == ID) {
        cD -= fD + Math.max(0, iD - Math.min(fD, bD)) - iD
      }
      if (fD < iD && DD.length < CD.length) {
        iD -= cD <= iD && cD >= fD ? iD - cD : 0, bD = iD + (bD - fD), fD = iD
      } else if (bD < iD) {
        iD -= cD <= iD && cD >= bD ? iD - cD : 0, fD = iD + (fD - bD), bD = iD
      }
      return {
        from: iD,
        toA: fD,
        toB: bD
      }
    }

    function bI(DD, CD) {
      return CD.head == DD.main.head && CD.anchor == DD.main.anchor
    }
    class QI {
      setSelectionOrigin(DD) {
        this.lastSelectionOrigin = DD, this.lastSelectionTime = Date.now()
      }
      constructor(DD) {
        this.view = DD, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = DD.hasFocus, OD.safari && DD.contentDOM.addEventListener("input", (() => null)), OD.gecko && function(DD) {
          VI.has(DD) || (VI.add(DD), DD.addEventListener("copy", (() => {})), DD.addEventListener("cut", (() => {})))
        }(DD.contentDOM.ownerDocument)
      }
      handleEvent(DD) {
        (function(DD, CD) {
          if (!CD.bubbles) return !0;
          if (CD.defaultPrevented) return !1;
          for (let cD, ID = CD.target; ID != DD.contentDOM; ID = ID.parentNode)
            if (!ID || 11 == ID.nodeType || (cD = yc.get(ID)) && cD.isWidget() && !cD.isHidden && cD.widget.ignoreEvent(CD)) return !1;
          return !0
        })(this.view, DD) && !this.ignoreDuringComposition(DD) && ("keydown" == DD.type && this.keydown(DD) || (0 != this.view.updateState ? Promise.resolve().then((() => this.runHandlers(DD.type, DD))) : this.runHandlers(DD.type, DD)))
      }
      runHandlers(DD, CD) {
        let cD = this.handlers[DD];
        if (cD) {
          for (let DD of cD.observers) DD(this.view, CD);
          for (let DD of cD.handlers) {
            if (CD.defaultPrevented) break;
            if (DD(this.view, CD)) {
              CD.preventDefault();
              break
            }
          }
        }
      }
      ensureHandlers(DD) {
        let CD = SI(DD),
          cD = this.handlers,
          ID = this.view.contentDOM;
        for (let pD in CD)
          if ("scroll" != pD) {
            let DD = !CD[pD].handlers.length,
              iD = cD[pD];
            iD && DD != !iD.handlers.length && (ID.removeEventListener(pD, this.handleEvent), iD = null), iD || ID.addEventListener(pD, this.handleEvent, {
              passive: DD
            })
          } for (let pD in cD) "scroll" == pD || CD[pD] || ID.removeEventListener(pD, this.handleEvent);
        this.handlers = CD
      }
      keydown(DD) {
        if (this.lastKeyCode = DD.keyCode, this.lastKeyTime = Date.now(), 9 == DD.keyCode && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return !0;
        if (this.tabFocusMode > 0 && 27 != DD.keyCode && MI.indexOf(DD.keyCode) < 0 && (this.tabFocusMode = -1), OD.android && OD.chrome && !DD.synthetic && (13 == DD.keyCode || 8 == DD.keyCode)) return this.view.observer.delayAndroidKey(DD.key, DD.keyCode), !0;
        let CD;
        return !OD.ios || DD.synthetic || DD.altKey || DD.metaKey || DD.shiftKey || !((CD = BI.find((CD => CD.keyCode == DD.keyCode))) && !DD.ctrlKey || yI.indexOf(DD.key) > -1 && DD.ctrlKey) ? (229 != DD.keyCode && this.view.observer.forceFlush(), !1) : (this.pendingIOSKey = CD || DD, setTimeout((() => this.flushIOSKey()), 250), !0)
      }
      flushIOSKey(DD) {
        let CD = this.pendingIOSKey;
        return !!CD && (!("Enter" == CD.key && DD && DD.from < DD.to && /^\S+$/.test(DD.insert.toString())) && (this.pendingIOSKey = void 0, pC(this.view.contentDOM, CD.key, CD.keyCode, CD instanceof KeyboardEvent ? CD : void 0)))
      }
      ignoreDuringComposition(DD) {
        return !(!/^key/.test(DD.type) || DD.synthetic) && (this.composing > 0 || !!(OD.safari && !OD.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = !1, !0))
      }
      startMouseSelection(DD) {
        this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = DD
      }
      update(DD) {
        this.view.observer.update(DD), this.mouseSelection && this.mouseSelection.update(DD), this.draggedContent && DD.docChanged && (this.draggedContent = this.draggedContent.map(DD.changes)), DD.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0)
      }
      destroy() {
        this.mouseSelection && this.mouseSelection.destroy()
      }
    }

    function wI(DD, CD) {
      return (cD, ID) => {
        try {
          return CD.call(DD, ID, cD)
        } catch (pD) {
          sC(cD.state, pD)
        }
      }
    }

    function SI(DD) {
      let CD = Object.create(null);

      function cD(DD) {
        return CD[DD] || (CD[DD] = {
          observers: [],
          handlers: []
        })
      }
      for (let ID of DD) {
        let DD = ID.spec,
          CD = DD && DD.plugin.domEventHandlers,
          pD = DD && DD.plugin.domEventObservers;
        if (CD)
          for (let iD in CD) {
            let DD = CD[iD];
            DD && cD(iD).handlers.push(wI(ID.value, DD))
          }
        if (pD)
          for (let iD in pD) {
            let DD = pD[iD];
            DD && cD(iD).observers.push(wI(ID.value, DD))
          }
      }
      for (let ID in oI) cD(ID).handlers.push(oI[ID]);
      for (let ID in vI) cD(ID).observers.push(vI[ID]);
      return CD
    }
    const BI = [{
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
      yI = "dthko",
      MI = [16, 17, 18, 20, 91, 92, 224, 225];

    function tI(DD) {
      return .7 * Math.max(0, DD) + 8
    }
    class ZI {
      constructor(DD, CD, cD, pD) {
        this.view = DD, this.startEvent = CD, this.style = cD, this.mustSelect = pD, this.scrollSpeed = {
          x: 0,
          y: 0
        }, this.scrolling = -1, this.lastEvent = CD, this.scrollParents = AD(DD.contentDOM), this.atoms = DD.state.facet(Ic).map((CD => CD(DD)));
        let iD = DD.contentDOM.ownerDocument;
        iD.addEventListener("mousemove", this.move = this.move.bind(this)), iD.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = CD.shiftKey, this.multiple = DD.state.facet(ID.j.allowMultipleSelections) && function(DD, CD) {
          let cD = DD.state.facet(JC);
          return cD.length ? cD[0](CD) : OD.mac ? CD.metaKey : CD.ctrlKey
        }(DD, CD), this.dragging = !(! function(DD, CD) {
          let {
            main: cD
          } = DD.state.selection;
          if (cD.empty) return !1;
          let ID = GD(DD.root);
          if (!ID || 0 == ID.rangeCount) return !0;
          let pD = ID.getRangeAt(0).getClientRects();
          for (let iD = 0; iD < pD.length; iD++) {
            let DD = pD[iD];
            if (DD.left <= CD.clientX && DD.right >= CD.clientX && DD.top <= CD.clientY && DD.bottom >= CD.clientY) return !0
          }
          return !1
        }(DD, CD) || 1 != UI(CD)) && null
      }
      start(DD) {
        !1 === this.dragging && this.select(DD)
      }
      move(DD) {
        if (0 == DD.buttons) return this.destroy();
        if (this.dragging || null == this.dragging && (CD = this.startEvent, cD = DD, Math.max(Math.abs(CD.clientX - cD.clientX), Math.abs(CD.clientY - cD.clientY)) < 10)) return;
        var CD, cD;
        this.select(this.lastEvent = DD);
        let ID = 0,
          pD = 0,
          iD = 0,
          fD = 0,
          bD = this.view.win.innerWidth,
          QD = this.view.win.innerHeight;
        this.scrollParents.x && ({
          left: iD,
          right: bD
        } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({
          top: fD,
          bottom: QD
        } = this.scrollParents.y.getBoundingClientRect());
        let wD = bc(this.view);
        DD.clientX - wD.left <= iD + 6 ? ID = -tI(iD - DD.clientX) : DD.clientX + wD.right >= bD - 6 && (ID = tI(DD.clientX - bD)), DD.clientY - wD.top <= fD + 6 ? pD = -tI(fD - DD.clientY) : DD.clientY + wD.bottom >= QD - 6 && (pD = tI(DD.clientY - QD)), this.setScrollSpeed(ID, pD)
      }
      up(DD) {
        null == this.dragging && this.select(this.lastEvent), this.dragging || DD.preventDefault(), this.destroy()
      }
      destroy() {
        this.setScrollSpeed(0, 0);
        let DD = this.view.contentDOM.ownerDocument;
        DD.removeEventListener("mousemove", this.move), DD.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null
      }
      setScrollSpeed(DD, CD) {
        this.scrollSpeed = {
          x: DD,
          y: CD
        }, DD || CD ? this.scrolling < 0 && (this.scrolling = setInterval((() => this.scroll()), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1)
      }
      scroll() {
        let {
          x: DD,
          y: CD
        } = this.scrollSpeed;
        DD && this.scrollParents.x && (this.scrollParents.x.scrollLeft += DD, DD = 0), CD && this.scrollParents.y && (this.scrollParents.y.scrollTop += CD, CD = 0), (DD || CD) && this.view.win.scrollBy(DD, CD), !1 === this.dragging && this.select(this.lastEvent)
      }
      select(DD) {
        let {
          view: CD
        } = this, cD = sc(this.atoms, this.style.get(DD, this.extend, this.multiple));
        !this.mustSelect && cD.eq(CD.state.selection, !1 === this.dragging) || this.view.dispatch({
          selection: cD,
          userEvent: "select.pointer"
        }), this.mustSelect = !1
      }
      update(DD) {
        DD.transactions.some((DD => DD.isUserEvent("input.type"))) ? this.destroy() : this.style.update(DD) && setTimeout((() => this.select(this.lastEvent)), 20)
      }
    }
    const oI = Object.create(null),
      vI = Object.create(null),
      NI = OD.ie && OD.ie_version < 15 || OD.ios && OD.webkit_version < 604;

    function gI(DD, CD, cD) {
      for (let ID of DD.facet(CD)) cD = ID(cD, DD);
      return cD
    }

    function XI(DD, CD) {
      CD = gI(DD.state, LC, CD);
      let cD, {
          state: pD
        } = DD,
        iD = 1,
        fD = pD.toText(CD),
        bD = fD.lines == pD.selection.df.length;
      if (null != qI && pD.selection.df.every((DD => DD.empty)) && qI == fD.toString()) {
        let DD = -1;
        cD = pD.changeByRange((cD => {
          let QD = pD.doc.lineAt(cD.from);
          if (QD.from == DD) return {
            range: cD
          };
          DD = QD.from;
          let wD = pD.toText((bD ? fD.line(iD++).text : CD) + pD.lineBreak);
          return {
            changes: {
              from: QD.from,
              insert: wD
            },
            range: ID.i.cursor(cD.from + wD.length)
          }
        }))
      } else cD = bD ? pD.changeByRange((DD => {
        let CD = fD.line(iD++);
        return {
          changes: {
            from: DD.from,
            to: DD.to,
            insert: CD.text
          },
          range: ID.i.cursor(DD.from + CD.length)
        }
      })) : pD.replaceSelection(fD);
      DD.dispatch(cD, {
        userEvent: "input.paste",
        scrollIntoView: !0
      })
    }

    function mI(DD, CD, cD, pD) {
      if (1 == pD) return ID.i.cursor(CD, cD);
      if (2 == pD) return function(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          pD = DD.charCategorizer(CD),
          iD = DD.doc.lineAt(CD),
          fD = CD - iD.from;
        if (0 == iD.length) return ID.i.cursor(CD);
        0 == fD ? cD = 1 : fD == iD.length && (cD = -1);
        let bD = fD,
          QD = fD;
        cD < 0 ? bD = (0, ID._)(iD.text, fD, !1) : QD = (0, ID._)(iD.text, fD);
        let wD = pD(iD.text.slice(bD, QD));
        for (; bD > 0;) {
          let DD = (0, ID._)(iD.text, bD, !1);
          if (pD(iD.text.slice(DD, bD)) != wD) break;
          bD = DD
        }
        for (; QD < iD.length;) {
          let DD = (0, ID._)(iD.text, QD);
          if (pD(iD.text.slice(QD, DD)) != wD) break;
          QD = DD
        }
        return ID.i.range(bD + iD.from, QD + iD.from)
      }(DD.state, CD, cD);
      {
        let pD = DD.docView.lineAt(CD, cD),
          iD = DD.state.doc.lineAt(pD ? pD.posAtEnd : CD),
          fD = pD ? pD.posAtStart : iD.from,
          bD = pD ? pD.posAtEnd : iD.to;
        return bD < DD.state.doc.length && bD == iD.to && bD++, ID.i.range(fD, bD)
      }
    }
    vI.scroll = DD => {
      DD.inputState.lastScrollTop = DD.scrollDOM.scrollTop, DD.inputState.lastScrollLeft = DD.scrollDOM.scrollLeft
    }, vI.wheel = vI.mousewheel = DD => {
      DD.inputState.lastWheelEvent = Date.now()
    }, oI.keydown = (DD, CD) => (DD.inputState.setSelectionOrigin("select"), 27 == CD.keyCode && 0 != DD.inputState.tabFocusMode && (DD.inputState.tabFocusMode = Date.now() + 2e3), !1), vI.touchstart = (DD, CD) => {
      let cD = DD.inputState,
        ID = CD.targetTouches[0];
      cD.lastTouchTime = Date.now(), ID && (cD.lastTouchX = ID.clientX, cD.lastTouchY = ID.clientY), cD.setSelectionOrigin("select.pointer")
    }, vI.touchmove = DD => {
      DD.inputState.setSelectionOrigin("select.pointer")
    }, oI.mousedown = (DD, CD) => {
      if (DD.observer.flush(), DD.inputState.lastTouchTime > Date.now() - 2e3) return !1;
      let cD = null;
      for (let ID of DD.state.facet(aC))
        if (cD = ID(DD, CD), cD) break;
      if (cD || 0 != CD.button || (cD = function(DD, CD) {
          let cD = DD.posAndSideAtCoords({
              x: CD.clientX,
              y: CD.clientY
            }, !1),
            pD = UI(CD),
            iD = DD.state.selection;
          return {
            update(DD) {
              DD.docChanged && (cD.pos = DD.changes.mapPos(cD.pos), iD = iD.map(DD.changes))
            },
            get(CD, fD, bD) {
              let QD, wD = DD.posAndSideAtCoords({
                  x: CD.clientX,
                  y: CD.clientY
                }, !1),
                SD = mI(DD, wD.pos, wD.assoc, pD);
              if (cD.pos != wD.pos && !fD) {
                let CD = mI(DD, cD.pos, cD.assoc, pD),
                  iD = Math.min(CD.from, SD.from),
                  fD = Math.max(CD.to, SD.to);
                SD = iD < SD.from ? ID.i.range(iD, fD, SD.assoc) : ID.i.range(fD, iD, SD.assoc)
              }
              return fD ? iD.replaceRange(iD.main.extend(SD.from, SD.to, SD.assoc)) : bD && 1 == pD && iD.df.length > 1 && (QD = function(DD, CD) {
                for (let cD = 0; cD < DD.df.length; cD++) {
                  let {
                    from: pD,
                    to: iD
                  } = DD.df[cD];
                  if (pD <= CD && iD >= CD) return ID.i.create(DD.df.slice(0, cD).concat(DD.df.slice(cD + 1)), DD.mainIndex == cD ? 0 : DD.mainIndex - (DD.mainIndex > cD ? 1 : 0))
                }
                return null
              }(iD, wD.pos)) ? QD : bD ? iD.addRange(SD) : ID.i.create([SD])
            }
          }
        }(DD, CD)), cD) {
        let ID = !DD.hasFocus;
        DD.inputState.startMouseSelection(new ZI(DD, CD, cD, ID)), ID && DD.observer.ignore((() => {
          cC(DD.contentDOM);
          let CD = DD.root.activeElement;
          CD && !CD.contains(DD.contentDOM) && CD.blur()
        }));
        let pD = DD.inputState.mouseSelection;
        if (pD) return pD.start(CD), !1 === pD.dragging
      } else DD.inputState.setSelectionOrigin("select.pointer");
      return !1
    };
    const nI = OD.ie && OD.ie_version <= 11;
    let OI = null,
      PI = 0,
      HI = 0;

    function UI(DD) {
      if (!nI) return DD.detail;
      let CD = OI,
        cD = HI;
      return OI = DD, HI = Date.now(), PI = !CD || cD > Date.now() - 400 && Math.abs(CD.clientX - DD.clientX) < 2 && Math.abs(CD.clientY - DD.clientY) < 2 ? (PI + 1) % 3 : 1
    }

    function xI(DD, CD, cD, ID) {
      if (!(cD = gI(DD.state, LC, cD))) return;
      let pD = DD.posAtCoords({
          x: CD.clientX,
          y: CD.clientY
        }, !1),
        {
          draggedContent: iD
        } = DD.inputState,
        fD = ID && iD && function(DD, CD) {
          let cD = DD.state.facet(KC);
          return cD.length ? cD[0](CD) : OD.mac ? !CD.altKey : !CD.ctrlKey
        }(DD, CD) ? {
          from: iD.from,
          to: iD.to
        } : null,
        bD = {
          from: pD,
          insert: cD
        },
        QD = DD.state.changes(fD ? [fD, bD] : bD);
      DD.focus(), DD.dispatch({
        changes: QD,
        selection: {
          anchor: QD.mapPos(pD, -1),
          head: QD.mapPos(pD, 1)
        },
        userEvent: fD ? "move.drop" : "input.drop"
      }), DD.inputState.draggedContent = null
    }
    oI.dragstart = (DD, CD) => {
      let {
        selection: {
          main: cD
        }
      } = DD.state;
      if (CD.target.draggable) {
        let pD = DD.docView.tile.nearest(CD.target);
        if (pD && pD.isWidget()) {
          let DD = pD.posAtStart,
            CD = DD + pD.length;
          (DD >= cD.to || CD <= cD.from) && (cD = ID.i.range(DD, CD))
        }
      }
      let {
        inputState: pD
      } = DD;
      return pD.mouseSelection && (pD.mouseSelection.dragging = !0), pD.draggedContent = cD, CD.dataTransfer && (CD.dataTransfer.setData("Text", gI(DD.state, TC, DD.state.sliceDoc(cD.from, cD.to))), CD.dataTransfer.effectAllowed = "copyMove"), !1
    }, oI.dragend = DD => (DD.inputState.draggedContent = null, !1), oI.drop = (DD, CD) => {
      if (!CD.dataTransfer) return !1;
      if (DD.state.readOnly) return !0;
      let cD = CD.dataTransfer.files;
      if (cD && cD.length) {
        let ID = Array(cD.length),
          pD = 0,
          iD = () => {
            ++pD == cD.length && xI(DD, CD, ID.filter((DD => null != DD)).join(DD.state.lineBreak), !1)
          };
        for (let DD = 0; DD < cD.length; DD++) {
          let CD = new FileReader;
          CD.onerror = iD, CD.onload = () => {
            /[\x00-\x08\x0e-\x1f]{2}/.test(CD.result) || (ID[DD] = CD.result), iD()
          }, CD.readAsText(cD[DD])
        }
        return !0
      } {
        let cD = CD.dataTransfer.getData("Text");
        if (cD) return xI(DD, CD, cD, !0), !0
      }
      return !1
    }, oI.paste = (DD, CD) => {
      if (DD.state.readOnly) return !0;
      DD.observer.flush();
      let cD = NI ? null : CD.clipboardData;
      return cD ? (XI(DD, cD.getData("text/plain") || cD.getData("text/uri-list")), !0) : (function(DD) {
        let CD = DD.dom.parentNode;
        if (!CD) return;
        let cD = CD.appendChild(document.createElement("textarea"));
        cD.style.cssText = "position: fixed; left: -10000px; top: 10px", cD.focus(), setTimeout((() => {
          DD.focus(), cD.remove(), XI(DD, cD.value)
        }), 50)
      }(DD), !1)
    };
    let qI = null;
    oI.copy = oI.cut = (DD, CD) => {
      if (!kD(DD.contentDOM, DD.observer.selectionRange)) return !1;
      let {
        text: cD,
        df: ID,
        linewise: pD
      } = function(DD) {
        let CD = [],
          cD = [],
          ID = !1;
        for (let pD of DD.selection.df) pD.empty || (CD.push(DD.sliceDoc(pD.from, pD.to)), cD.push(pD));
        if (!CD.length) {
          let pD = -1;
          for (let {
              from: ID
            }
            of DD.selection.df) {
            let iD = DD.doc.lineAt(ID);
            iD.number > pD && (CD.push(iD.text), cD.push({
              from: iD.from,
              to: Math.min(DD.doc.length, iD.to + 1)
            })), pD = iD.number
          }
          ID = !0
        }
        return {
          text: gI(DD, TC, CD.join(DD.lineBreak)),
          df: cD,
          linewise: ID
        }
      }(DD.state);
      if (!cD && !pD) return !1;
      qI = pD ? cD : null, "cut" != CD.type || DD.state.readOnly || DD.dispatch({
        changes: ID,
        scrollIntoView: !0,
        userEvent: "delete.cut"
      });
      let iD = NI ? null : CD.clipboardData;
      return iD ? (iD.clearData(), iD.setData("text/plain", cD), !0) : (function(DD, CD) {
        let cD = DD.dom.parentNode;
        if (!cD) return;
        let ID = cD.appendChild(document.createElement("textarea"));
        ID.style.cssText = "position: fixed; left: -10000px; top: 10px", ID.value = CD, ID.focus(), ID.selectionEnd = CD.length, ID.selectionStart = 0, setTimeout((() => {
          ID.remove(), DD.focus()
        }), 50)
      }(DD, cD), !1)
    };
    const JI = ID.c.define();

    function KI(DD, CD) {
      let cD = [];
      for (let ID of DD.facet(lC)) {
        let pD = ID(DD, CD);
        pD && cD.push(pD)
      }
      return cD.length ? DD.update({
        effects: cD,
        annotations: JI.of(!0)
      }) : null
    }

    function aI(DD) {
      setTimeout((() => {
        let CD = DD.hasFocus;
        if (CD != DD.inputState.notifiedFocused) {
          let cD = KI(DD.state, CD);
          cD ? DD.dispatch(cD) : DD.update([])
        }
      }), 10)
    }
    vI.focus = DD => {
      DD.inputState.lastFocusTime = Date.now(), DD.scrollDOM.scrollTop || !DD.inputState.lastScrollTop && !DD.inputState.lastScrollLeft || (DD.scrollDOM.scrollTop = DD.inputState.lastScrollTop, DD.scrollDOM.scrollLeft = DD.inputState.lastScrollLeft), aI(DD)
    }, vI.blur = DD => {
      DD.observer.clearSelectionRange(), aI(DD)
    }, vI.compositionstart = vI.compositionupdate = DD => {
      DD.observer.editContext || (null == DD.inputState.compositionFirstChange && (DD.inputState.compositionFirstChange = !0), DD.inputState.composing < 0 && (DD.inputState.composing = 0))
    }, vI.compositionend = DD => {
      DD.observer.editContext || (DD.inputState.composing = -1, DD.inputState.compositionEndedAt = Date.now(), DD.inputState.compositionPendingKey = !0, DD.inputState.compositionPendingChange = DD.observer.pendingRecords().length > 0, DD.inputState.compositionFirstChange = null, OD.chrome && OD.android ? DD.observer.flushSoon() : DD.inputState.compositionPendingChange ? Promise.resolve().then((() => DD.observer.flush())) : setTimeout((() => {
        DD.inputState.composing < 0 && DD.docView.hasComposition && DD.update([])
      }), 50))
    }, vI.contextmenu = DD => {
      DD.inputState.lastContextMenu = Date.now()
    }, oI.beforeinput = (DD, CD) => {
      var cD, ID;
      if ("insertText" != CD.inputType && "insertCompositionText" != CD.inputType || (DD.inputState.insertingText = CD.data, DD.inputState.insertingTextAt = Date.now()), "insertReplacementText" == CD.inputType && DD.observer.editContext) {
        let ID = null === (cD = CD.dataTransfer) || void 0 === cD ? void 0 : cD.getData("text/plain"),
          pD = CD.getTargetRanges();
        if (ID && pD.length) {
          let CD = pD[0],
            cD = DD.posAtDOM(CD.startContainer, CD.startOffset),
            iD = DD.posAtDOM(CD.endContainer, CD.endOffset);
          return iI(DD, {
            from: cD,
            to: iD,
            insert: DD.state.toText(ID)
          }, null), !0
        }
      }
      let pD;
      if (OD.chrome && OD.android && (pD = BI.find((DD => DD.inputType == CD.inputType))) && (DD.observer.delayAndroidKey(pD.key, pD.keyCode), "Backspace" == pD.key || "Delete" == pD.key)) {
        let CD = (null === (ID = window.visualViewport) || void 0 === ID ? void 0 : ID.height) || 0;
        setTimeout((() => {
          var cD;
          ((null === (cD = window.visualViewport) || void 0 === cD ? void 0 : cD.height) || 0) > CD + 10 && DD.hasFocus && (DD.contentDOM.blur(), DD.focus())
        }), 100)
      }
      return OD.ios && "deleteContentForward" == CD.inputType && DD.observer.flushSoon(), OD.safari && "insertText" == CD.inputType && DD.inputState.composing >= 0 && setTimeout((() => vI.compositionend(DD, CD)), 20), !1
    };
    const VI = new Set;
    const zI = ["pre-wrap", "normal", "pre-line", "break-spaces"];
    let jI = !1;

    function lI() {
      jI = !1
    }
    class LI {
      constructor(DD) {
        this.lineWrapping = DD, this.doc = ID.J.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30
      }
      heightForGap(DD, CD) {
        let cD = this.doc.lineAt(CD).number - this.doc.lineAt(DD).number + 1;
        return this.lineWrapping && (cD += Math.max(0, Math.ceil((CD - DD - cD * this.lineLength * .5) / this.lineLength))), this.lineHeight * cD
      }
      heightForLine(DD) {
        if (!this.lineWrapping) return this.lineHeight;
        return (1 + Math.max(0, Math.ceil((DD - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight
      }
      setDoc(DD) {
        return this.doc = DD, this
      }
      mustRefreshForWrapping(DD) {
        return zI.indexOf(DD) > -1 != this.lineWrapping
      }
      mustRefreshForHeights(DD) {
        let CD = !1;
        for (let cD = 0; cD < DD.length; cD++) {
          let ID = DD[cD];
          ID < 0 ? cD++ : this.heightSamples[Math.floor(10 * ID)] || (CD = !0, this.heightSamples[Math.floor(10 * ID)] = !0)
        }
        return CD
      }
      refresh(DD, CD, cD, ID, pD, iD) {
        let fD = zI.indexOf(DD) > -1,
          bD = Math.abs(CD - this.lineHeight) > .3 || this.lineWrapping != fD || Math.abs(cD - this.charWidth) > .1;
        if (this.lineWrapping = fD, this.lineHeight = CD, this.charWidth = cD, this.textHeight = ID, this.lineLength = pD, bD) {
          this.heightSamples = {};
          for (let DD = 0; DD < iD.length; DD++) {
            let CD = iD[DD];
            CD < 0 ? DD++ : this.heightSamples[Math.floor(10 * CD)] = !0
          }
        }
        return bD
      }
    }
    class TI {
      constructor(DD, CD) {
        this.from = DD, this.heights = CD, this.index = 0
      }
      get more() {
        return this.index < this.heights.length
      }
    }
    class GI {
      constructor(DD, CD, cD, ID, pD) {
        this.from = DD, this.length = CD, this.top = cD, this.height = ID, this._content = pD
      }
      get type() {
        return "number" == typeof this._content ? KD.Text : Array.isArray(this._content) ? this._content : this._content.type
      }
      get to() {
        return this.from + this.length
      }
      get bottom() {
        return this.top + this.height
      }
      get widget() {
        return this._content instanceof jD ? this._content.widget : null
      }
      get widgetLineBreaks() {
        return "number" == typeof this._content ? this._content : 0
      }
      join(DD) {
        let CD = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(DD._content) ? DD._content : [DD]);
        return new GI(this.from, this.length + DD.length, this.top, this.height + DD.height, CD)
      }
    }
    var RI = function(DD) {
      return DD[DD.ByPos = 0] = "ByPos", DD[DD.ByHeight = 1] = "ByHeight", DD[DD.ByPosNoHeight = 2] = "ByPosNoHeight", DD
    }(RI || (RI = {}));
    const kI = .001;
    class dI {
      constructor(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.length = DD, this.height = CD, this.flags = cD
      }
      get outdated() {
        return (2 & this.flags) > 0
      }
      set outdated(DD) {
        this.flags = (DD ? 2 : 0) | -3 & this.flags
      }
      setHeight(DD) {
        this.height != DD && (Math.abs(this.height - DD) > kI && (jI = !0), this.height = DD)
      }
      replace(DD, CD, cD) {
        return dI.of(cD)
      }
      decomposeLeft(DD, CD) {
        CD.push(this)
      }
      decomposeRight(DD, CD) {
        CD.push(this)
      }
      applyChanges(DD, CD, cD, ID) {
        let pD = this,
          iD = cD.doc;
        for (let fD = ID.length - 1; fD >= 0; fD--) {
          let {
            fromA: bD,
            toA: QD,
            fromB: wD,
            toB: SD
          } = ID[fD], BD = pD.lineAt(bD, RI.ByPosNoHeight, cD.setDoc(CD), 0, 0), yD = BD.to >= QD ? BD : pD.lineAt(QD, RI.ByPosNoHeight, cD, 0, 0);
          for (SD += yD.to - QD, QD = yD.to; fD > 0 && BD.from <= ID[fD - 1].toA;) bD = ID[fD - 1].fromA, wD = ID[fD - 1].fromB, fD--, bD < BD.from && (BD = pD.lineAt(bD, RI.ByPosNoHeight, cD, 0, 0));
          wD += BD.from - bD, bD = BD.from;
          let MD = rI.build(cD.setDoc(iD), DD, wD, SD);
          pD = YI(pD, pD.replace(bD, QD, MD))
        }
        return pD.updateHeight(cD, 0)
      }
      static empty() {
        return new EI(0, 0, 0)
      }
      static of (DD) {
        if (1 == DD.length) return DD[0];
        let CD = 0,
          cD = DD.length,
          ID = 0,
          pD = 0;
        for (;;)
          if (CD == cD)
            if (ID > 2 * pD) {
              let pD = DD[CD - 1];
              pD.break ? DD.splice(--CD, 1, pD.left, null, pD.right) : DD.splice(--CD, 1, pD.left, pD.right), cD += 1 + pD.break, ID -= pD.size
            } else {
              if (!(pD > 2 * ID)) break;
              {
                let CD = DD[cD];
                CD.break ? DD.splice(cD, 1, CD.left, null, CD.right) : DD.splice(cD, 1, CD.left, CD.right), cD += 2 + CD.break, pD -= CD.size
              }
            }
        else if (ID < pD) {
          let cD = DD[CD++];
          cD && (ID += cD.size)
        } else {
          let CD = DD[--cD];
          CD && (pD += CD.size)
        }
        let iD = 0;
        return null == DD[CD - 1] ? (iD = 1, CD--) : null == DD[CD] && (iD = 1, cD++), new uI(dI.of(DD.slice(0, CD)), iD, dI.of(DD.slice(cD)))
      }
    }

    function YI(DD, CD) {
      return DD == CD ? DD : (DD.constructor != CD.constructor && (jI = !0), CD)
    }
    dI.prototype.size = 1;
    const WI = aD.replace({});
    class sI extends dI {
      constructor(DD, CD, cD) {
        super(DD, CD), this.deco = cD, this.spaceAbove = 0
      }
      mainBlock(DD, CD) {
        return new GI(CD, this.length, DD + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0)
      }
      blockAt(DD, CD, cD, ID) {
        return this.spaceAbove && DD < cD + this.spaceAbove ? new GI(ID, 0, cD, this.spaceAbove, WI) : this.mainBlock(cD, ID)
      }
      lineAt(DD, CD, cD, ID, pD) {
        let iD = this.mainBlock(ID, pD);
        return this.spaceAbove ? this.blockAt(0, cD, ID, pD).join(iD) : iD
      }
      forEachLine(DD, CD, cD, ID, pD, iD) {
        DD <= pD + this.length && CD >= pD && iD(this.lineAt(0, RI.ByPos, cD, ID, pD))
      }
      setMeasuredHeight(DD) {
        let CD = DD.heights[DD.index++];
        CD < 0 ? (this.spaceAbove = -CD, CD = DD.heights[DD.index++]) : this.spaceAbove = 0, this.setHeight(CD)
      }
      updateHeight(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cD = arguments.length > 3 ? arguments[3] : void 0;
        return cD && cD.from <= CD && cD.more && this.setMeasuredHeight(cD), this.outdated = !1, this
      }
      toString() {
        return `block(${this.length})`
      }
    }
    class EI extends sI {
      constructor(DD, CD, cD) {
        super(DD, CD, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = cD
      }
      mainBlock(DD, CD) {
        return new GI(CD, this.length, DD + this.spaceAbove, this.height - this.spaceAbove, this.breaks)
      }
      replace(DD, CD, cD) {
        let ID = cD[0];
        return 1 == cD.length && (ID instanceof EI || ID instanceof eI && 4 & ID.flags) && Math.abs(this.length - ID.length) < 10 ? (ID instanceof eI ? ID = new EI(ID.length, this.height, this.spaceAbove) : ID.height = this.height, this.outdated || (ID.outdated = !1), ID) : dI.of(cD)
      }
      updateHeight(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          ID = arguments.length > 3 ? arguments[3] : void 0;
        return ID && ID.from <= CD && ID.more ? this.setMeasuredHeight(ID) : (cD || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, DD.heightForLine(this.length - this.collapsed)) + this.breaks * DD.lineHeight)), this.outdated = !1, this
      }
      toString() {
        return `line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`
      }
    }
    class eI extends dI {
      constructor(DD) {
        super(DD, 0)
      }
      heightMetrics(DD, CD) {
        let cD, ID = DD.doc.lineAt(CD).number,
          pD = DD.doc.lineAt(CD + this.length).number,
          iD = pD - ID + 1,
          fD = 0;
        if (DD.lineWrapping) {
          let CD = Math.min(this.height, DD.lineHeight * iD);
          cD = CD / iD, this.length > iD + 1 && (fD = (this.height - CD) / (this.length - iD - 1))
        } else cD = this.height / iD;
        return {
          firstLine: ID,
          lastLine: pD,
          perLine: cD,
          perChar: fD
        }
      }
      blockAt(DD, CD, cD, ID) {
        let {
          firstLine: pD,
          lastLine: iD,
          perLine: fD,
          perChar: bD
        } = this.heightMetrics(CD, ID);
        if (CD.lineWrapping) {
          let pD = ID + (DD < CD.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (DD - cD) / this.height)) * this.length)),
            iD = CD.doc.lineAt(pD),
            QD = fD + iD.length * bD,
            wD = Math.max(cD, DD - QD / 2);
          return new GI(iD.from, iD.length, wD, QD, 0)
        } {
          let ID = Math.max(0, Math.min(iD - pD, Math.floor((DD - cD) / fD))),
            {
              from: bD,
              length: QD
            } = CD.doc.line(pD + ID);
          return new GI(bD, QD, cD + fD * ID, fD, 0)
        }
      }
      lineAt(DD, CD, cD, ID, pD) {
        if (CD == RI.ByHeight) return this.blockAt(DD, cD, ID, pD);
        if (CD == RI.ByPosNoHeight) {
          let {
            from: CD,
            to: ID
          } = cD.doc.lineAt(DD);
          return new GI(CD, ID - CD, 0, 0, 0)
        }
        let {
          firstLine: iD,
          perLine: fD,
          perChar: bD
        } = this.heightMetrics(cD, pD), QD = cD.doc.lineAt(DD), wD = fD + QD.length * bD, SD = QD.number - iD, BD = ID + fD * SD + bD * (QD.from - pD - SD);
        return new GI(QD.from, QD.length, Math.max(ID, Math.min(BD, ID + this.height - wD)), wD, 0)
      }
      forEachLine(DD, CD, cD, ID, pD, iD) {
        DD = Math.max(DD, pD), CD = Math.min(CD, pD + this.length);
        let {
          firstLine: fD,
          perLine: bD,
          perChar: QD
        } = this.heightMetrics(cD, pD);
        for (let wD = DD, SD = ID; wD <= CD;) {
          let CD = cD.doc.lineAt(wD);
          if (wD == DD) {
            let cD = CD.number - fD;
            SD += bD * cD + QD * (DD - pD - cD)
          }
          let ID = bD + QD * CD.length;
          iD(new GI(CD.from, CD.length, SD, ID, 0)), SD += ID, wD = CD.to + 1
        }
      }
      replace(DD, CD, cD) {
        let ID = this.length - CD;
        if (ID > 0) {
          let DD = cD[cD.length - 1];
          DD instanceof eI ? cD[cD.length - 1] = new eI(DD.length + ID) : cD.push(null, new eI(ID - 1))
        }
        if (DD > 0) {
          let CD = cD[0];
          CD instanceof eI ? cD[0] = new eI(DD + CD.length) : cD.unshift(new eI(DD - 1), null)
        }
        return dI.of(cD)
      }
      decomposeLeft(DD, CD) {
        CD.push(new eI(DD - 1), null)
      }
      decomposeRight(DD, CD) {
        CD.push(null, new eI(this.length - DD - 1))
      }
      updateHeight(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          ID = arguments.length > 3 ? arguments[3] : void 0,
          pD = CD + this.length;
        if (ID && ID.from <= CD + this.length && ID.more) {
          let cD = [],
            iD = Math.max(CD, ID.from),
            fD = -1;
          for (ID.from > CD && cD.push(new eI(ID.from - CD - 1).updateHeight(DD, CD)); iD <= pD && ID.more;) {
            let CD = DD.doc.lineAt(iD).length;
            cD.length && cD.push(null);
            let pD = ID.heights[ID.index++],
              bD = 0;
            pD < 0 && (bD = -pD, pD = ID.heights[ID.index++]), -1 == fD ? fD = pD : Math.abs(pD - fD) >= kI && (fD = -2);
            let QD = new EI(CD, pD, bD);
            QD.outdated = !1, cD.push(QD), iD += CD + 1
          }
          iD <= pD && cD.push(null, new eI(pD - iD).updateHeight(DD, iD));
          let bD = dI.of(cD);
          return (fD < 0 || Math.abs(bD.height - this.height) >= kI || Math.abs(fD - this.heightMetrics(DD, CD).perLine) >= kI) && (jI = !0), YI(this, bD)
        }
        return (cD || this.outdated) && (this.setHeight(DD.heightForGap(CD, CD + this.length)), this.outdated = !1), this
      }
      toString() {
        return `gap(${this.length})`
      }
    }
    class uI extends dI {
      constructor(DD, CD, cD) {
        super(DD.length + CD + cD.length, DD.height + cD.height, CD | (DD.outdated || cD.outdated ? 2 : 0)), this.left = DD, this.right = cD, this.size = DD.size + cD.size
      }
      get break() {
        return 1 & this.flags
      }
      blockAt(DD, CD, cD, ID) {
        let pD = cD + this.left.height;
        return DD < pD ? this.left.blockAt(DD, CD, cD, ID) : this.right.blockAt(DD, CD, pD, ID + this.left.length + this.break)
      }
      lineAt(DD, CD, cD, ID, pD) {
        let iD = ID + this.left.height,
          fD = pD + this.left.length + this.break,
          bD = CD == RI.ByHeight ? DD < iD : DD < fD,
          QD = bD ? this.left.lineAt(DD, CD, cD, ID, pD) : this.right.lineAt(DD, CD, cD, iD, fD);
        if (this.break || (bD ? QD.to < fD : QD.from > fD)) return QD;
        let wD = CD == RI.ByPosNoHeight ? RI.ByPosNoHeight : RI.ByPos;
        return bD ? QD.join(this.right.lineAt(fD, wD, cD, iD, fD)) : this.left.lineAt(fD, wD, cD, ID, pD).join(QD)
      }
      forEachLine(DD, CD, cD, ID, pD, iD) {
        let fD = ID + this.left.height,
          bD = pD + this.left.length + this.break;
        if (this.break) DD < bD && this.left.forEachLine(DD, CD, cD, ID, pD, iD), CD >= bD && this.right.forEachLine(DD, CD, cD, fD, bD, iD);
        else {
          let QD = this.lineAt(bD, RI.ByPos, cD, ID, pD);
          DD < QD.from && this.left.forEachLine(DD, QD.from - 1, cD, ID, pD, iD), QD.to >= DD && QD.from <= CD && iD(QD), CD > QD.to && this.right.forEachLine(QD.to + 1, CD, cD, fD, bD, iD)
        }
      }
      replace(DD, CD, cD) {
        let ID = this.left.length + this.break;
        if (CD < ID) return this.balanced(this.left.replace(DD, CD, cD), this.right);
        if (DD > this.left.length) return this.balanced(this.left, this.right.replace(DD - ID, CD - ID, cD));
        let pD = [];
        DD > 0 && this.decomposeLeft(DD, pD);
        let iD = pD.length;
        for (let fD of cD) pD.push(fD);
        if (DD > 0 && hI(pD, iD - 1), CD < this.length) {
          let DD = pD.length;
          this.decomposeRight(CD, pD), hI(pD, DD)
        }
        return dI.of(pD)
      }
      decomposeLeft(DD, CD) {
        let cD = this.left.length;
        if (DD <= cD) return this.left.decomposeLeft(DD, CD);
        CD.push(this.left), this.break && (cD++, DD >= cD && CD.push(null)), DD > cD && this.right.decomposeLeft(DD - cD, CD)
      }
      decomposeRight(DD, CD) {
        let cD = this.left.length,
          ID = cD + this.break;
        if (DD >= ID) return this.right.decomposeRight(DD - ID, CD);
        DD < cD && this.left.decomposeRight(DD, CD), this.break && DD < ID && CD.push(null), CD.push(this.right)
      }
      balanced(DD, CD) {
        return DD.size > 2 * CD.size || CD.size > 2 * DD.size ? dI.of(this.break ? [DD, null, CD] : [DD, CD]) : (this.left = YI(this.left, DD), this.right = YI(this.right, CD), this.setHeight(DD.height + CD.height), this.outdated = DD.outdated || CD.outdated, this.size = DD.size + CD.size, this.length = DD.length + this.break+CD.length, this)
      }
      updateHeight(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          ID = arguments.length > 3 ? arguments[3] : void 0,
          {
            left: pD,
            right: iD
          } = this,
          fD = CD + pD.length + this.break,
          bD = null;
        return ID && ID.from <= CD + pD.length && ID.more ? bD = pD = pD.updateHeight(DD, CD, cD, ID) : pD.updateHeight(DD, CD, cD), ID && ID.from <= fD + iD.length && ID.more ? bD = iD = iD.updateHeight(DD, fD, cD, ID) : iD.updateHeight(DD, fD, cD), bD ? this.balanced(pD, iD) : (this.height = this.left.height + this.right.height, this.outdated = !1, this)
      }
      toString() {
        return this.left + (this.break ? " " : "-") + this.right
      }
    }

    function hI(DD, CD) {
      let cD, ID;
      null == DD[CD] && (cD = DD[CD - 1]) instanceof eI && (ID = DD[CD + 1]) instanceof eI && DD.splice(CD - 1, 3, new eI(cD.length + 1 + ID.length))
    }
    class rI {
      constructor(DD, CD) {
        this.pos = DD, this.oracle = CD, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = DD
      }
      get isCovered() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering
      }
      span(DD, CD) {
        if (this.lineStart > -1) {
          let DD = Math.min(CD, this.lineEnd),
            cD = this.nodes[this.nodes.length - 1];
          cD instanceof EI ? cD.length += DD - this.pos : (DD > this.pos || !this.isCovered) && this.nodes.push(new EI(DD - this.pos, -1, 0)), this.writtenTo = DD, CD > DD && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1)
        }
        this.pos = CD
      }
      point(DD, CD, cD) {
        if (DD < CD || cD.heightRelevant) {
          let ID = cD.widget ? cD.widget.estimatedHeight : 0,
            pD = cD.widget ? cD.widget.lineBreaks : 0;
          ID < 0 && (ID = this.oracle.lineHeight);
          let iD = CD - DD;
          cD.block ? this.vDD(new sI(iD, ID, cD)) : (iD || pD || ID >= 5) && this.addLineDeco(ID, pD, iD)
        } else CD > DD && this.span(DD, CD);
        this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
      }
      enterLine() {
        if (this.lineStart > -1) return;
        let {
          from: DD,
          to: CD
        } = this.oracle.doc.lineAt(this.pos);
        this.lineStart = DD, this.lineEnd = CD, this.writtenTo < DD && ((this.writtenTo < DD - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, DD - 1)), this.nodes.push(null)), this.pos > DD && this.nodes.push(new EI(this.pos - DD, -1, 0)), this.writtenTo = this.pos
      }
      blankContent(DD, CD) {
        let cD = new eI(CD - DD);
        return this.oracle.doc.lineAt(DD).to == CD && (cD.flags |= 4), cD
      }
      ensureLine() {
        this.enterLine();
        let DD = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (DD instanceof EI) return DD;
        let CD = new EI(0, -1, 0);
        return this.nodes.push(CD), CD
      }
      vDD(DD) {
        this.enterLine();
        let CD = DD.deco;
        CD && CD.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(DD), this.writtenTo = this.pos = this.pos + DD.length, CD && CD.endSide > 0 && (this.covering = DD)
      }
      addLineDeco(DD, CD, cD) {
        let ID = this.ensureLine();
        ID.length += cD, ID.collapsed += cD, ID.widgetHeight = Math.max(ID.widgetHeight, DD), ID.breaks += CD, this.writtenTo = this.pos = this.pos + cD
      }
      finish(DD) {
        let CD = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
        !(this.lineStart > -1) || CD instanceof EI || this.isCovered ? (this.writtenTo < this.pos || null == CD) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new EI(0, -1, 0));
        let cD = DD;
        for (let ID of this.nodes) ID instanceof EI && ID.updateHeight(this.oracle, cD), cD += ID ? ID.length : 1;
        return this.nodes
      }
      static build(DD, CD, cD, pD) {
        let iD = new rI(cD, DD);
        return ID.x.spans(CD, cD, pD, iD, 0), iD.finish(cD)
      }
    }
    class AI {
      constructor() {
        this.changes = []
      }
      compareRange() {}
      comparePoint(DD, CD, cD, ID) {
        (DD < CD || cD && cD.heightRelevant || ID && ID.heightRelevant) && LD(DD, CD, this.changes, 5)
      }
    }

    function FI(DD, CD) {
      let cD = DD.getBoundingClientRect(),
        ID = DD.ownerDocument,
        pD = ID.defaultView || window,
        iD = Math.max(0, cD.left),
        fD = Math.min(pD.innerWidth, cD.right),
        bD = Math.max(0, cD.top),
        QD = Math.min(pD.innerHeight, cD.bottom);
      for (let wD = DD.parentNode; wD && wD != ID.body;)
        if (1 == wD.nodeType) {
          let CD = wD,
            cD = window.getComputedStyle(CD);
          if ((CD.scrollHeight > CD.clientHeight || CD.scrollWidth > CD.clientWidth) && "visible" != cD.overflow) {
            let cD = CD.getBoundingClientRect();
            iD = Math.max(iD, cD.left), fD = Math.min(fD, cD.right), bD = Math.max(bD, cD.top), QD = Math.min(wD == DD.parentNode ? pD.innerHeight : QD, cD.bottom)
          }
          wD = "absolute" == cD.position || "fixed" == cD.position ? CD.offsetParent : CD.parentNode
        } else {
          if (11 != wD.nodeType) break;
          wD = wD.host
        } return {
        left: iD - cD.left,
        right: Math.max(iD, fD) - cD.left,
        top: bD - (cD.top + CD),
        bottom: Math.max(bD, QD) - (cD.top + CD)
      }
    }

    function Dp(DD, CD) {
      let cD = DD.getBoundingClientRect();
      return {
        left: 0,
        right: cD.right - cD.left,
        top: CD,
        bottom: cD.bottom - (cD.top + CD)
      }
    }
    class Cp {
      constructor(DD, CD, cD, ID) {
        this.from = DD, this.to = CD, this.size = cD, this.displaySize = ID
      }
      static same(DD, CD) {
        if (DD.length != CD.length) return !1;
        for (let cD = 0; cD < DD.length; cD++) {
          let ID = DD[cD],
            pD = CD[cD];
          if (ID.from != pD.from || ID.to != pD.to || ID.size != pD.size) return !1
        }
        return !0
      }
      draw(DD, CD) {
        return aD.replace({
          widget: new cp(this.displaySize * (CD ? DD.scaleY : DD.scaleX), CD)
        }).range(this.from, this.to)
      }
    }
    class cp extends JD {
      constructor(DD, CD) {
        super(), this.size = DD, this.vertical = CD
      }
      eq(DD) {
        return DD.size == this.size && DD.vertical == this.vertical
      }
      toDOM() {
        let DD = document.createElement("div");
        return this.vertical ? DD.style.height = this.size + "px" : (DD.style.width = this.size + "px", DD.style.height = "2px", DD.style.display = "inline-block"), DD
      }
      get estimatedHeight() {
        return this.vertical ? this.size : -1
      }
    }
    class Ip {
      constructor(DD, CD) {
        this.view = DD, this.state = CD, this.pixelViewport = {
          left: 0,
          right: window.innerWidth,
          top: 0,
          bottom: 0
        }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = bp, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = wC.LTR, this.o3 = [], this.mustEnforceCursorAssoc = !1;
        let cD = CD.facet(FC).some((DD => "function" != typeof DD && "cm-lineWrapping" == DD.class));
        this.heightOracle = new LI(cD), this.stateDeco = Qp(CD), this.heightMap = dI.empty().applyChanges(this.stateDeco, ID.J.empty, this.heightOracle.setDoc(CD.doc), [new wc(0, 0, 0, CD.doc.length)]);
        for (let ID = 0; ID < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); ID++);
        this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = aD.set(this.lineGaps.map((DD => DD.draw(this, !1)))), this.scrollParent = DD.scrollDOM, this.computeVisibleRanges()
      }
      updateForViewport() {
        let DD = [this.viewport],
          {
            main: CD
          } = this.state.selection;
        for (let cD = 0; cD <= 1; cD++) {
          let ID = cD ? CD.head : CD.anchor;
          if (!DD.some((DD => {
              let {
                from: CD,
                to: cD
              } = DD;
              return ID >= CD && ID <= cD
            }))) {
            let {
              from: CD,
              to: cD
            } = this.lineBlockAt(ID);
            DD.push(new pp(CD, cD))
          }
        }
        return this.viewports = DD.sort(((DD, CD) => DD.from - CD.from)), this.updateScaler()
      }
      updateScaler() {
        let DD = this.scaler;
        return this.scaler = this.heightMap.height <= 7e6 ? bp : new wp(this.heightOracle, this.heightMap, this.viewports), DD.eq(this.scaler) ? 0 : 2
      }
      updateViewportLines() {
        this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (DD => {
          this.viewportLines.push(Sp(DD, this.scaler))
        }))
      }
      update(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.state = DD.state;
        let cD = this.stateDeco;
        this.stateDeco = Qp(this.state);
        let pD = DD.changedRanges,
          iD = wc.extendWithRanges(pD, function(DD, CD, cD) {
            let pD = new AI;
            return ID.x.compare(DD, CD, cD, pD, 0), pD.changes
          }(cD, this.stateDeco, DD ? DD.changes : ID.ChangeSet.empty(this.state.doc.length))),
          fD = this.heightMap.height,
          bD = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
        lI(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, DD.startState.doc, this.heightOracle.setDoc(this.state.doc), iD), (this.heightMap.height != fD || jI) && (DD.flags |= 2), bD ? (this.scrollAnchorPos = DD.changes.mapPos(bD.from, -1), this.scrollAnchorHeight = bD.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = fD);
        let QD = iD.length ? this.mapViewport(this.viewport, DD.changes) : this.viewport;
        (CD && (CD.range.head < QD.from || CD.range.head > QD.to) || !this.viewportIsAppropriate(QD)) && (QD = this.getViewport(0, CD));
        let wD = QD.from != this.viewport.from || QD.to != this.viewport.to;
        this.viewport = QD, DD.flags |= this.updateForViewport(), (wD || !DD.changes.empty || 2 & DD.flags) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, DD.changes))), DD.flags |= this.computeVisibleRanges(DD.changes), CD && (this.scrollTarget = CD), !this.mustEnforceCursorAssoc && (DD.selectionSet || DD.focusChanged) && DD.view.lineWrapping && DD.state.selection.main.empty && DD.state.selection.main.assoc && !DD.state.facet(RC) && (this.mustEnforceCursorAssoc = !0)
      }
      measure() {
        let {
          view: DD
        } = this, CD = DD.contentDOM, cD = window.getComputedStyle(CD), pD = this.heightOracle, iD = cD.whiteSpace;
        this.defaultTextDirection = "rtl" == cD.direction ? wC.RTL : wC.LTR;
        let fD = this.heightOracle.mustRefreshForWrapping(iD) || "refresh" === this.mustMeasureContent,
          bD = CD.getBoundingClientRect(),
          QD = fD || this.mustMeasureContent || this.contentDOMHeight != bD.height;
        this.contentDOMHeight = bD.height, this.mustMeasureContent = !1;
        let wD = 0,
          SD = 0;
        if (bD.width && bD.height) {
          let {
            scaleX: DD,
            scaleY: cD
          } = rD(CD, bD);
          (DD > .005 && Math.abs(this.scaleX - DD) > .005 || cD > .005 && Math.abs(this.scaleY - cD) > .005) && (this.scaleX = DD, this.scaleY = cD, wD |= 16, fD = QD = !0)
        }
        let BD = (parseInt(cD.paddingTop) || 0) * this.scaleY,
          yD = (parseInt(cD.paddingBottom) || 0) * this.scaleY;
        this.paddingTop == BD && this.paddingBottom == yD || (this.paddingTop = BD, this.paddingBottom = yD, wD |= 18), this.editorWidth != DD.scrollDOM.clientWidth && (pD.lineWrapping && (QD = !0), this.editorWidth = DD.scrollDOM.clientWidth, wD |= 16);
        let MD = AD(this.view.contentDOM, !1).y;
        MD != this.scrollParent && (this.scrollParent = MD, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
        let tD = this.getScrollOffset();
        this.scrollOffset != tD && (this.scrollAnchorHeight = -1, this.scrollOffset = tD), this.scrolledToBottom = iC(this.scrollParent || DD.win);
        let ZD = (this.printing ? Dp : FI)(CD, this.paddingTop),
          oD = ZD.top - this.pixelViewport.top,
          vD = ZD.bottom - this.pixelViewport.bottom;
        this.pixelViewport = ZD;
        let ND = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
        if (ND != this.inView && (this.inView = ND, ND && (QD = !0)), !this.inView && !this.scrollTarget && ! function(DD) {
            let CD = DD.getBoundingClientRect(),
              cD = DD.ownerDocument.defaultView || window;
            return CD.left < cD.innerWidth && CD.right > 0 && CD.top < cD.innerHeight && CD.bottom > 0
          }(DD.dom)) return 0;
        let gD = bD.width;
        if (this.contentDOMWidth == gD && this.editorHeight == DD.scrollDOM.clientHeight || (this.contentDOMWidth = bD.width, this.editorHeight = DD.scrollDOM.clientHeight, wD |= 16), QD) {
          let CD = DD.docView.measureVisibleLineHeights(this.viewport);
          if (pD.mustRefreshForHeights(CD) && (fD = !0), fD || pD.lineWrapping && Math.abs(gD - this.contentDOMWidth) > pD.charWidth) {
            let {
              lineHeight: cD,
              charWidth: ID,
              textHeight: bD
            } = DD.docView.measureTextSize();
            fD = cD > 0 && pD.refresh(iD, cD, ID, bD, Math.max(5, gD / ID), CD), fD && (DD.docView.minWidth = 0, wD |= 16)
          }
          oD > 0 && vD > 0 ? SD = Math.max(oD, vD) : oD < 0 && vD < 0 && (SD = Math.min(oD, vD)), lI();
          for (let cD of this.viewports) {
            let iD = cD.from == this.viewport.from ? CD : DD.docView.measureVisibleLineHeights(cD);
            this.heightMap = (fD ? dI.empty().applyChanges(this.stateDeco, ID.J.empty, this.heightOracle, [new wc(0, 0, 0, DD.state.doc.length)]) : this.heightMap).updateHeight(pD, 0, fD, new TI(cD.from, iD))
          }
          jI && (wD |= 2)
        }
        let XD = !this.viewportIsAppropriate(this.viewport, SD) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
        return XD && (2 & wD && (wD |= this.updateScaler()), this.viewport = this.getViewport(SD, this.scrollTarget), wD |= this.updateForViewport()), (2 & wD || XD) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(fD ? [] : this.lineGaps, DD)), wD |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, DD.docView.enforceCursorAssoc()), wD
      }
      get visibleTop() {
        return this.scaler.fromDOM(this.pixelViewport.top)
      }
      get visibleBottom() {
        return this.scaler.fromDOM(this.pixelViewport.bottom)
      }
      getViewport(DD, CD) {
        let cD = .5 - Math.max(-.5, Math.min(.5, DD / 1e3 / 2)),
          ID = this.heightMap,
          pD = this.heightOracle,
          {
            visibleTop: iD,
            visibleBottom: fD
          } = this,
          bD = new pp(ID.lineAt(iD - 1e3 * cD, RI.ByHeight, pD, 0, 0).from, ID.lineAt(fD + 1e3 * (1 - cD), RI.ByHeight, pD, 0, 0).to);
        if (CD) {
          let {
            head: DD
          } = CD.range;
          if (DD < bD.from || DD > bD.to) {
            let cD, iD = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
              fD = ID.lineAt(DD, RI.ByPos, pD, 0, 0);
            cD = "center" == CD.y ? (fD.top + fD.bottom) / 2 - iD / 2 : "start" == CD.y || "nearest" == CD.y && DD < bD.from ? fD.top : fD.bottom - iD, bD = new pp(ID.lineAt(cD - 500, RI.ByHeight, pD, 0, 0).from, ID.lineAt(cD + iD + 500, RI.ByHeight, pD, 0, 0).to)
          }
        }
        return bD
      }
      mapViewport(DD, CD) {
        let cD = CD.mapPos(DD.from, -1),
          ID = CD.mapPos(DD.to, 1);
        return new pp(this.heightMap.lineAt(cD, RI.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(ID, RI.ByPos, this.heightOracle, 0, 0).to)
      }
      viewportIsAppropriate(DD) {
        let {
          from: CD,
          to: cD
        } = DD, ID = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!this.inView) return !0;
        let {
          top: pD
        } = this.heightMap.lineAt(CD, RI.ByPos, this.heightOracle, 0, 0), {
          bottom: iD
        } = this.heightMap.lineAt(cD, RI.ByPos, this.heightOracle, 0, 0), {
          visibleTop: fD,
          visibleBottom: bD
        } = this;
        return (0 == CD || pD <= fD - Math.max(10, Math.min(-ID, 250))) && (cD == this.state.doc.length || iD >= bD + Math.max(10, Math.min(ID, 250))) && pD > fD - 2e3 && iD < bD + 2e3
      }
      mapLineGaps(DD, CD) {
        if (!DD.length || CD.empty) return DD;
        let cD = [];
        for (let ID of DD) CD.touchesRange(ID.from, ID.to) || cD.push(new Cp(CD.mapPos(ID.from), CD.mapPos(ID.to), ID.size, ID.displaySize));
        return cD
      }
      ensureLineGaps(DD, CD) {
        let cD = this.heightOracle.lineWrapping,
          pD = cD ? 1e4 : 2e3,
          iD = pD >> 1,
          fD = pD << 1;
        if (this.defaultTextDirection != wC.LTR && !cD) return [];
        let bD = [],
          QD = (pD, fD, wD, SD) => {
            if (fD - pD < iD) return;
            let BD = this.state.selection.main,
              yD = [BD.from];
            BD.empty || yD.push(BD.to);
            for (let DD of yD)
              if (DD > pD && DD < fD) return QD(pD, DD - 10, wD, SD), void QD(DD + 10, fD, wD, SD);
            let MD = function(DD, CD) {
              for (let cD of DD)
                if (CD(cD)) return cD;
              return
            }(DD, (DD => DD.from >= wD.from && DD.to <= wD.to && Math.abs(DD.from - pD) < iD && Math.abs(DD.to - fD) < iD && !yD.some((CD => DD.from < CD && DD.to > CD))));
            if (!MD) {
              if (fD < wD.to && CD && cD && CD.o3.some((DD => DD.from <= fD && DD.to >= fD))) {
                let DD = CD.moveToLineBoundary(ID.i.cursor(fD), !1, !0).head;
                DD > pD && (fD = DD)
              }
              let DD = this.gapSize(wD, pD, fD, SD);
              MD = new Cp(pD, fD, DD, cD || DD < 2e6 ? DD : 2e6)
            }
            bD.push(MD)
          },
          wD = CD => {
            if (CD.length < fD || CD.type != KD.Text) return;
            let iD = function(DD, CD, cD) {
              let pD = [],
                iD = DD,
                fD = 0;
              ID.x.spans(cD, DD, CD, {
                span() {},
                point(DD, CD) {
                  DD > iD && (pD.push({
                    from: iD,
                    to: DD
                  }), fD += DD - iD), iD = CD
                }
              }, 20), iD < CD && (pD.push({
                from: iD,
                to: CD
              }), fD += CD - iD);
              return {
                total: fD,
                df: pD
              }
            }(CD.from, CD.to, this.stateDeco);
            if (iD.total < fD) return;
            let bD, wD, SD = this.scrollTarget ? this.scrollTarget.range.head : null;
            if (cD) {
              let DD, cD, ID = pD / this.heightOracle.lineLength * this.heightOracle.lineHeight;
              if (null != SD) {
                let pD = fp(iD, SD),
                  fD = ((this.visibleBottom - this.visibleTop) / 2 + ID) / CD.height;
                DD = pD - fD, cD = pD + fD
              } else DD = (this.visibleTop - CD.top - ID) / CD.height, cD = (this.visibleBottom - CD.top + ID) / CD.height;
              bD = ip(iD, DD), wD = ip(iD, cD)
            } else {
              let cD = iD.total * this.heightOracle.charWidth,
                ID = pD * this.heightOracle.charWidth,
                fD = 0;
              if (cD > 2e6)
                for (let pD of DD) pD.from >= CD.from && pD.from < CD.to && pD.size != pD.displaySize && pD.from * this.heightOracle.charWidth + fD < this.pixelViewport.left && (fD = pD.size - pD.displaySize);
              let QD, BD, yD = this.pixelViewport.left + fD,
                MD = this.pixelViewport.right + fD;
              if (null != SD) {
                let DD = fp(iD, SD),
                  CD = ((MD - yD) / 2 + ID) / cD;
                QD = DD - CD, BD = DD + CD
              } else QD = (yD - ID) / cD, BD = (MD + ID) / cD;
              bD = ip(iD, QD), wD = ip(iD, BD)
            }
            bD > CD.from && QD(CD.from, bD, CD, iD), wD < CD.to && QD(wD, CD.to, CD, iD)
          };
        for (let ID of this.viewportLines) Array.isArray(ID.type) ? ID.type.forEach(wD) : wD(ID);
        return bD
      }
      gapSize(DD, CD, cD, ID) {
        let pD = fp(ID, cD) - fp(ID, CD);
        return this.heightOracle.lineWrapping ? DD.height * pD : ID.total * this.heightOracle.charWidth * pD
      }
      updateLineGaps(DD) {
        Cp.same(DD, this.lineGaps) || (this.lineGaps = DD, this.lineGapDeco = aD.set(DD.map((DD => DD.draw(this, this.heightOracle.lineWrapping)))))
      }
      computeVisibleRanges(DD) {
        let CD = this.stateDeco;
        this.lineGaps.length && (CD = CD.concat(this.lineGapDeco));
        let cD = [];
        ID.x.spans(CD, this.viewport.from, this.viewport.to, {
          span(DD, CD) {
            cD.push({
              from: DD,
              to: CD
            })
          },
          point() {}
        }, 20);
        let pD = 0;
        if (cD.length != this.o3.length) pD = 12;
        else
          for (let ID = 0; ID < cD.length && !(8 & pD); ID++) {
            let CD = this.o3[ID],
              iD = cD[ID];
            CD.from == iD.from && CD.to == iD.to || (pD |= 4, DD && DD.mapPos(CD.from, -1) == iD.from && DD.mapPos(CD.to, 1) == iD.to || (pD |= 8))
          }
        return this.o3 = cD, pD
      }
      lineBlockAt(DD) {
        return DD >= this.viewport.from && DD <= this.viewport.to && this.viewportLines.find((CD => CD.from <= DD && CD.to >= DD)) || Sp(this.heightMap.lineAt(DD, RI.ByPos, this.heightOracle, 0, 0), this.scaler)
      }
      lineBlockAtHeight(DD) {
        return DD >= this.viewportLines[0].top && DD <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((CD => CD.top <= DD && CD.bottom >= DD)) || Sp(this.heightMap.lineAt(this.scaler.fromDOM(DD), RI.ByHeight, this.heightOracle, 0, 0), this.scaler)
      }
      getScrollOffset() {
        return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY
      }
      scrollAnchorAt(DD) {
        let CD = this.lineBlockAtHeight(DD + 8);
        return CD.from >= this.viewport.from || this.viewportLines[0].top - DD > 200 ? CD : this.viewportLines[0]
      }
      elementAtHeight(DD) {
        return Sp(this.heightMap.blockAt(this.scaler.fromDOM(DD), this.heightOracle, 0, 0), this.scaler)
      }
      get docHeight() {
        return this.scaler.toDOM(this.heightMap.height)
      }
      get contentHeight() {
        return this.docHeight + this.paddingTop + this.paddingBottom
      }
    }
    class pp {
      constructor(DD, CD) {
        this.from = DD, this.to = CD
      }
    }

    function ip(DD, CD) {
      let {
        total: cD,
        df: ID
      } = DD;
      if (CD <= 0) return ID[0].from;
      if (CD >= 1) return ID[ID.length - 1].to;
      let pD = Math.floor(cD * CD);
      for (let iD = 0;; iD++) {
        let {
          from: DD,
          to: CD
        } = ID[iD], cD = CD - DD;
        if (pD <= cD) return DD + pD;
        pD -= cD
      }
    }

    function fp(DD, CD) {
      let cD = 0;
      for (let {
          from: ID,
          to: pD
        }
        of DD.df) {
        if (CD <= pD) {
          cD += CD - ID;
          break
        }
        cD += pD - ID
      }
      return cD / DD.total
    }
    const bp = {
      toDOM: DD => DD,
      fromDOM: DD => DD,
      scale: 1,
      eq(DD) {
        return DD == this
      }
    };

    function Qp(DD) {
      let CD = DD.facet(Dc).filter((DD => "function" != typeof DD)),
        cD = DD.facet(cc).filter((DD => "function" != typeof DD));
      return cD.length && CD.push(ID.x.join(cD)), CD
    }
    class wp {
      constructor(DD, CD, cD) {
        let ID = 0,
          pD = 0,
          iD = 0;
        this.viewports = cD.map((cD => {
          let {
            from: pD,
            to: iD
          } = cD, fD = CD.lineAt(pD, RI.ByPos, DD, 0, 0).top, bD = CD.lineAt(iD, RI.ByPos, DD, 0, 0).bottom;
          return ID += bD - fD, {
            from: pD,
            to: iD,
            top: fD,
            bottom: bD,
            domTop: 0,
            domBottom: 0
          }
        })), this.scale = (7e6 - ID) / (CD.height - ID);
        for (let fD of this.viewports) fD.domTop = iD + (fD.top - pD) * this.scale, iD = fD.domBottom = fD.domTop + (fD.bottom - fD.top), pD = fD.bottom
      }
      toDOM(DD) {
        for (let CD = 0, cD = 0, ID = 0;; CD++) {
          let pD = CD < this.viewports.length ? this.viewports[CD] : null;
          if (!pD || DD < pD.top) return ID + (DD - cD) * this.scale;
          if (DD <= pD.bottom) return pD.domTop + (DD - pD.top);
          cD = pD.bottom, ID = pD.domBottom
        }
      }
      fromDOM(DD) {
        for (let CD = 0, cD = 0, ID = 0;; CD++) {
          let pD = CD < this.viewports.length ? this.viewports[CD] : null;
          if (!pD || DD < pD.domTop) return cD + (DD - ID) / this.scale;
          if (DD <= pD.domBottom) return pD.top + (DD - pD.domTop);
          cD = pD.bottom, ID = pD.domBottom
        }
      }
      eq(DD) {
        return DD instanceof wp && (this.scale == DD.scale && this.viewports.length == DD.viewports.length && this.viewports.every(((CD, cD) => CD.from == DD.viewports[cD].from && CD.to == DD.viewports[cD].to)))
      }
    }

    function Sp(DD, CD) {
      if (1 == CD.scale) return DD;
      let cD = CD.toDOM(DD.top),
        ID = CD.toDOM(DD.bottom);
      return new GI(DD.from, DD.length, cD, ID - cD, Array.isArray(DD._content) ? DD._content.map((DD => Sp(DD, CD))) : DD._content)
    }
    const Bp = ID.l.define({
        combine: DD => DD.join(" ")
      }),
      yp = ID.l.define({
        combine: DD => DD.indexOf(!0) > -1
      }),
      Mp = pD.d.newName(),
      tp = pD.d.newName(),
      Zp = pD.d.newName(),
      op = {
        "&light": "." + tp,
        "&dark": "." + Zp
      };

    function vp(DD, CD, cD) {
      return new pD.d(CD, {
        finish: CD => /&/.test(CD) ? CD.replace(/&\w*/, (CD => {
          if ("&" == CD) return DD;
          if (!cD || !cD[CD]) throw new RangeError(`Unsupported selector: ${CD}`);
          return cD[CD]
        })) : DD + " " + CD
      })
    }
    const Np = vp("." + Mp, {
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
      }, op),
      gp = {
        childList: !0,
        characterData: !0,
        subtree: !0,
        attributes: !0,
        characterDataOldValue: !0
      },
      Xp = OD.ie && OD.ie_version <= 11;
    class mp {
      constructor(DD) {
        this.view = DD, this.active = !1, this.editContext = null, this.selectionRange = new FD, this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = DD.contentDOM, this.observer = new MutationObserver((CD => {
          for (let DD of CD) this.queue.push(DD);
          (OD.ie && OD.ie_version <= 11 || OD.ios && DD.composing) && CD.some((DD => "childList" == DD.type && DD.removedNodes.length || "characterData" == DD.type && DD.oldValue.length > DD.target.nodeValue.length)) ? this.flushSoon() : this.flush()
        })), !window.EditContext || !OD.android || !1 === DD.constructor.EDIT_CONTEXT || OD.chrome && OD.chrome_version < 126 || (this.editContext = new Pp(DD), DD.state.facet(EC) && (DD.contentDOM.editContext = this.editContext.editContext)), Xp && (this.onCharData = DD => {
          this.queue.push({
            target: DD.target,
            type: "characterData",
            oldValue: DD.prevValue
          }), this.flushSoon()
        }), this.onSelectionChange = this.onSelectionChange.bind(this), this.yX = this.yX.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver((() => {
          var DD;
          (null === (DD = this.view.docView) || void 0 === DD ? void 0 : DD.lastUpdate) < Date.now() - 75 && this.yX()
        })), this.resizeScroll.observe(DD.scrollDOM)), this.addWindowListeners(this.win = DD.win), this.start(), "function" == typeof IntersectionObserver && (this.intersection = new IntersectionObserver((DD => {
          this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), DD.length > 0 && DD[DD.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")))
        }), {
          threshold: [0, .001]
        }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((DD => {
          DD.length > 0 && DD[DD.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"))
        }), {})), this.listenForScroll(), this.readSelectionRange()
      }
      onScrollChanged(DD) {
        this.view.inputState.runHandlers("scroll", DD), this.intersecting && this.view.measure()
      }
      onScroll(DD) {
        this.intersecting && this.flush(!1), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(DD)
      }
      yX() {
        this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout((() => {
          this.resizeTimeout = -1, this.view.requestMeasure()
        }), 50))
      }
      onPrint(DD) {
        ("change" != DD.type && DD.type || DD.matches) && (this.view.viewState.printing = !0, this.view.measure(), setTimeout((() => {
          this.view.viewState.printing = !1, this.view.requestMeasure()
        }), 500))
      }
      updateGaps(DD) {
        if (this.gapIntersection && (DD.length != this.gaps.length || this.gaps.some(((CD, cD) => CD != DD[cD])))) {
          this.gapIntersection.disconnect();
          for (let CD of DD) this.gapIntersection.observe(CD);
          this.gaps = DD
        }
      }
      onSelectionChange(DD) {
        let CD = this.selectionChanged;
        if (!this.readSelectionRange() || this.delayedAndroidKey) return;
        let {
          view: cD
        } = this, ID = this.selectionRange;
        if (cD.state.facet(EC) ? cD.root.activeElement != this.dom : !kD(this.dom, ID)) return;
        let pD = ID.anchorNode && cD.docView.tile.nearest(ID.anchorNode);
        pD && pD.isWidget() && pD.widget.ignoreEvent(DD) ? CD || (this.selectionChanged = !1) : (OD.ie && OD.ie_version <= 11 || OD.android && OD.chrome) && !cD.state.selection.main.empty && ID.focusNode && YD(ID.focusNode, ID.focusOffset, ID.anchorNode, ID.anchorOffset) ? this.flushSoon() : this.flush(!1)
      }
      readSelectionRange() {
        let {
          view: DD
        } = this, CD = GD(DD.root);
        if (!CD) return !1;
        let cD = OD.safari && 11 == DD.root.nodeType && DD.root.activeElement == this.dom && function(DD, CD) {
          if (CD.getComposedRanges) {
            let cD = CD.getComposedRanges(DD.root)[0];
            if (cD) return Op(DD, cD)
          }
          let cD = null;

          function ID(DD) {
            DD.preventDefault(), DD.stopImmediatePropagation(), cD = DD.getTargetRanges()[0]
          }
          return DD.contentDOM.addEventListener("beforeinput", ID, !0), DD.dom.ownerDocument.execCommand("indent"), DD.contentDOM.removeEventListener("beforeinput", ID, !0), cD ? Op(DD, cD) : null
        }(this.view, CD) || CD;
        if (!cD || this.selectionRange.eq(cD)) return !1;
        let ID = kD(this.dom, cD);
        return ID && !this.selectionChanged && DD.inputState.lastFocusTime > Date.now() - 200 && DD.inputState.lastTouchTime < Date.now() - 300 && function(DD, CD) {
          let cD = CD.focusNode,
            ID = CD.focusOffset;
          if (!cD || CD.anchorNode != cD || CD.anchorOffset != ID) return !1;
          for (ID = Math.min(ID, eD(cD));;)
            if (ID) {
              if (1 != cD.nodeType) return !1;
              let DD = cD.childNodes[ID - 1];
              "false" == DD.contentEditable ? ID-- : (cD = DD, ID = eD(cD))
            } else {
              if (cD == DD) return !0;
              ID = WD(cD), cD = cD.parentNode
            }
        }(this.dom, cD) ? (this.view.inputState.lastFocusTime = 0, DD.docView.updateSelection(), !1) : (this.selectionRange.setRange(cD), ID && (this.selectionChanged = !0), !0)
      }
      setSelectionRange(DD, CD) {
        this.selectionRange.set(DD.node, DD.offset, CD.node, CD.offset), this.selectionChanged = !1
      }
      clearSelectionRange() {
        this.selectionRange.set(null, 0, null, 0)
      }
      listenForScroll() {
        this.parentCheck = -1;
        let DD = 0,
          CD = null;
        for (let cD = this.dom; cD;)
          if (1 == cD.nodeType) !CD && DD < this.scrollTargets.length && this.scrollTargets[DD] == cD ? DD++ : CD || (CD = this.scrollTargets.slice(0, DD)), CD && CD.push(cD), cD = cD.assignedSlot || cD.parentNode;
          else {
            if (11 != cD.nodeType) break;
            cD = cD.host
          } if (DD < this.scrollTargets.length && !CD && (CD = this.scrollTargets.slice(0, DD)), CD) {
          for (let DD of this.scrollTargets) DD.removeEventListener("scroll", this.onScroll);
          for (let DD of this.scrollTargets = CD) DD.addEventListener("scroll", this.onScroll)
        }
      }
      ignore(DD) {
        if (!this.active) return DD();
        try {
          return this.stop(), DD()
        } finally {
          this.start(), this.clear()
        }
      }
      start() {
        this.active || (this.observer.observe(this.dom, gp), Xp && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0)
      }
      stop() {
        this.active && (this.active = !1, this.observer.disconnect(), Xp && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData))
      }
      clear() {
        this.processRecords(), this.queue.length = 0, this.selectionChanged = !1
      }
      delayAndroidKey(DD, CD) {
        var cD;
        if (!this.delayedAndroidKey) {
          let DD = () => {
            let DD = this.delayedAndroidKey;
            if (DD) {
              this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = DD.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && DD.force && pC(this.dom, DD.key, DD.keyCode)
            }
          };
          this.flushingAndroidKey = this.view.win.requestAnimationFrame(DD)
        }
        this.delayedAndroidKey && "Enter" != DD || (this.delayedAndroidKey = {
          key: DD,
          keyCode: CD,
          force: this.lastChange < Date.now() - 50 || !!(null === (cD = this.delayedAndroidKey) || void 0 === cD ? void 0 : cD.force)
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
        for (let DD of this.observer.takeRecords()) this.queue.push(DD);
        return this.queue
      }
      processRecords() {
        let DD = this.pendingRecords();
        DD.length && (this.queue = []);
        let CD = -1,
          cD = -1,
          ID = !1;
        for (let pD of DD) {
          let DD = this.readMutation(pD);
          DD && (DD.typeOver && (ID = !0), -1 == CD ? ({
            from: CD,
            to: cD
          } = DD) : (CD = Math.min(DD.from, CD), cD = Math.max(DD.to, cD)))
        }
        return {
          from: CD,
          to: cD,
          typeOver: ID
        }
      }
      readChange() {
        let {
          from: DD,
          to: CD,
          typeOver: cD
        } = this.processRecords(), ID = this.selectionChanged && kD(this.dom, this.selectionRange);
        if (DD < 0 && !ID) return null;
        DD > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
        let pD = new cI(this.view, DD, CD, cD);
        return this.view.docView.domChanged = {
          newSel: pD.newSel ? pD.newSel.main : null
        }, pD
      }
      flush() {
        let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
        DD && this.readSelectionRange();
        let CD = this.readChange();
        if (!CD) return this.view.requestMeasure(), !1;
        let cD = this.view.state,
          ID = pI(this.view, CD);
        return this.view.state == cD && (CD.domChanged || CD.newSel && !bI(this.view.state.selection, CD.newSel.main)) && this.view.update([]), ID
      }
      readMutation(DD) {
        let CD = this.view.docView.tile.nearest(DD.target);
        if (!CD || CD.isWidget()) return null;
        if (CD.markDirty("attributes" == DD.type), "childList" == DD.type) {
          let cD = np(CD, DD.previousSibling || DD.target.previousSibling, -1),
            ID = np(CD, DD.nextSibling || DD.target.nextSibling, 1);
          return {
            from: cD ? CD.posAfter(cD) : CD.posAtStart,
            to: ID ? CD.posBefore(ID) : CD.posAtEnd,
            typeOver: !1
          }
        }
        return "characterData" == DD.type ? {
          from: CD.posAtStart,
          to: CD.posAtEnd,
          typeOver: DD.target.nodeValue == DD.oldValue
        } : null
      }
      setWindow(DD) {
        DD != this.win && (this.removeWindowListeners(this.win), this.win = DD, this.addWindowListeners(this.win))
      }
      addWindowListeners(DD) {
        DD.addEventListener("resize", this.yX), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : DD.addEventListener("beforeprint", this.onPrint), DD.addEventListener("scroll", this.onScroll), DD.document.addEventListener("selectionchange", this.onSelectionChange)
      }
      removeWindowListeners(DD) {
        DD.removeEventListener("scroll", this.onScroll), DD.removeEventListener("resize", this.yX), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : DD.removeEventListener("beforeprint", this.onPrint), DD.document.removeEventListener("selectionchange", this.onSelectionChange)
      }
      update(DD) {
        this.editContext && (this.editContext.update(DD), DD.startState.facet(EC) != DD.state.facet(EC) && (DD.view.contentDOM.editContext = DD.state.facet(EC) ? this.editContext.editContext : null))
      }
      destroy() {
        var DD, CD, cD;
        this.stop(), null === (DD = this.intersection) || void 0 === DD || DD.disconnect(), null === (CD = this.gapIntersection) || void 0 === CD || CD.disconnect(), null === (cD = this.resizeScroll) || void 0 === cD || cD.disconnect();
        for (let ID of this.scrollTargets) ID.removeEventListener("scroll", this.onScroll);
        this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy())
      }
    }

    function np(DD, CD, cD) {
      for (; CD;) {
        let ID = yc.get(CD);
        if (ID && ID.parent == DD) return ID;
        let pD = CD.parentNode;
        CD = pD != DD.dom ? pD : cD > 0 ? CD.nextSibling : CD.previousSibling
      }
      return null
    }

    function Op(DD, CD) {
      let cD = CD.startContainer,
        ID = CD.startOffset,
        pD = CD.endContainer,
        iD = CD.endOffset,
        fD = DD.docView.domAtPos(DD.state.selection.main.anchor, 1);
      return YD(fD.node, fD.offset, pD, iD) && ([cD, ID, pD, iD] = [pD, iD, cD, ID]), {
        anchorNode: cD,
        anchorOffset: ID,
        focusNode: pD,
        focusOffset: iD
      }
    }
    class Pp {
      constructor(DD) {
        this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = Object.create(null), this.composing = null, this.resetRange(DD.state);
        let CD = this.editContext = new window.EditContext({
          text: DD.state.doc.sliceString(this.from, this.to),
          selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, DD.state.selection.main.anchor))),
          selectionEnd: this.toContextPos(DD.state.selection.main.head)
        });
        this.handlers.textupdate = cD => {
          let pD = DD.state.selection.main,
            {
              anchor: iD,
              head: fD
            } = pD,
            bD = this.toEditorPos(cD.updateRangeStart),
            QD = this.toEditorPos(cD.updateRangeEnd);
          DD.inputState.composing >= 0 && !this.composing && (this.composing = {
            contextBase: cD.updateRangeStart,
            editorBase: bD,
            drifted: !1
          });
          let wD = QD - bD > cD.text.length;
          bD == this.from && iD < this.from ? bD = iD : QD == this.to && iD > this.to && (QD = iD);
          let SD = fI(DD.state.sliceDoc(bD, QD), cD.text, (wD ? pD.from : pD.to) - bD, wD ? "end" : null);
          if (!SD) {
            let CD = ID.i.single(this.toEditorPos(cD.selectionStart), this.toEditorPos(cD.selectionEnd));
            return void(bI(CD, pD) || DD.dispatch({
              selection: CD,
              userEvent: "select"
            }))
          }
          let BD = {
            from: SD.from + bD,
            to: SD.toA + bD,
            insert: ID.J.of(cD.text.slice(SD.from, SD.toB).split("\n"))
          };
          if ((OD.mac || OD.android) && BD.from == fD - 1 && /^\. ?$/.test(cD.text) && "off" == DD.contentDOM.getAttribute("autocorrect") && (BD = {
              from: bD,
              to: QD,
              insert: ID.J.of([cD.text.replace(".", " ")])
            }), this.pendingContextChange = BD, !DD.state.readOnly) {
            let CD = this.to - this.from + (BD.to - BD.from + BD.insert.length);
            iI(DD, BD, ID.i.single(this.toEditorPos(cD.selectionStart, CD), this.toEditorPos(cD.selectionEnd, CD)))
          }
          this.pendingContextChange && (this.revertPending(DD.state), this.setSelection(DD.state)), BD.from < BD.to && !BD.insert.length && DD.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(CD.text.slice(Math.max(0, cD.updateRangeStart - 1), Math.min(CD.text.length, cD.updateRangeStart + 1))) && this.handlers.compositionend(cD)
        }, this.handlers.characterboundsupdate = cD => {
          let ID = [],
            pD = null;
          for (let CD = this.toEditorPos(cD.rangeStart), iD = this.toEditorPos(cD.rangeEnd); CD < iD; CD++) {
            let cD = DD.coordsForChar(CD);
            pD = cD && new DOMRect(cD.left, cD.top, cD.right - cD.left, cD.bottom - cD.top) || pD || new DOMRect, ID.push(pD)
          }
          CD.updateCharacterBounds(cD.rangeStart, ID)
        }, this.handlers.textformatupdate = CD => {
          let cD = [];
          for (let DD of CD.getTextFormats()) {
            let CD = DD.underlineStyle,
              ID = DD.underlineThickness;
            if (!/none/i.test(CD) && !/none/i.test(ID)) {
              let pD = this.toEditorPos(DD.rangeStart),
                iD = this.toEditorPos(DD.rangeEnd);
              if (pD < iD) {
                let DD = `text-decoration: underline ${/^[a-z]/.test(CD)?CD+" ":"Dashed"==CD?"dashed ":"Squiggle"==CD?"wavy ":""}${/thin/i.test(ID)?1:2}px`;
                cD.push(aD.mark({
                  attributes: {
                    style: DD
                  }
                }).range(pD, iD))
              }
            }
          }
          DD.dispatch({
            effects: WC.of(aD.set(cD))
          })
        }, this.handlers.compositionstart = () => {
          DD.inputState.composing < 0 && (DD.inputState.composing = 0, DD.inputState.compositionFirstChange = !0)
        }, this.handlers.compositionend = () => {
          if (DD.inputState.composing = -1, DD.inputState.compositionFirstChange = null, this.composing) {
            let {
              drifted: CD
            } = this.composing;
            this.composing = null, CD && this.reset(DD.state)
          }
        };
        for (let cD in this.handlers) CD.addEventListener(cD, this.handlers[cD]);
        this.measureReq = {
          read: DD => {
            this.editContext.updateControlBounds(DD.contentDOM.getBoundingClientRect());
            let CD = GD(DD.root);
            CD && CD.rangeCount && this.editContext.updateSelectionBounds(CD.getRangeAt(0).getBoundingClientRect())
          }
        }
      }
      applyEdits(DD) {
        let CD = 0,
          cD = !1,
          ID = this.pendingContextChange;
        return DD.changes.iterChanges(((pD, iD, fD, bD, QD) => {
          if (cD) return;
          let wD = QD.length - (iD - pD);
          if (ID && iD >= ID.to) {
            if (ID.from == pD && ID.to == iD && ID.insert.eq(QD)) return ID = this.pendingContextChange = null, CD += wD, void(this.to += wD);
            ID = null, this.revertPending(DD.state)
          }
          if (pD += CD, (iD += CD) <= this.from) this.from += wD, this.to += wD;
          else if (pD < this.to) {
            if (pD < this.from || iD > this.to || this.to - this.from + QD.length > 3e4) return void(cD = !0);
            this.editContext.updateText(this.toContextPos(pD), this.toContextPos(iD), QD.toString()), this.to += wD
          }
          CD += wD
        })), ID && !cD && this.revertPending(DD.state), !cD
      }
      update(DD) {
        let CD = this.pendingContextChange,
          cD = DD.startState.selection.main;
        this.composing && (this.composing.drifted || !DD.changes.touchesRange(cD.from, cD.to) && DD.transactions.some((DD => !DD.isUserEvent("input.type") && DD.changes.touchesRange(this.from, this.to)))) ? (this.composing.drifted = !0, this.composing.editorBase = DD.changes.mapPos(this.composing.editorBase)) : this.applyEdits(DD) && this.rangeIsValid(DD.state) ? (DD.docChanged || DD.selectionSet || CD) && this.setSelection(DD.state) : (this.pendingContextChange = null, this.reset(DD.state)), (DD.geometryChanged || DD.docChanged || DD.selectionSet) && DD.view.requestMeasure(this.measureReq)
      }
      resetRange(DD) {
        let {
          head: CD
        } = DD.selection.main;
        this.from = Math.max(0, CD - 1e4), this.to = Math.min(DD.doc.length, CD + 1e4)
      }
      reset(DD) {
        this.resetRange(DD), this.editContext.updateText(0, this.editContext.text.length, DD.doc.sliceString(this.from, this.to)), this.setSelection(DD)
      }
      revertPending(DD) {
        let CD = this.pendingContextChange;
        this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(CD.from), this.toContextPos(CD.from + CD.insert.length), DD.doc.sliceString(CD.from, CD.to))
      }
      setSelection(DD) {
        let {
          main: CD
        } = DD.selection, cD = this.toContextPos(Math.max(this.from, Math.min(this.to, CD.anchor))), ID = this.toContextPos(CD.head);
        this.editContext.selectionStart == cD && this.editContext.selectionEnd == ID || this.editContext.updateSelection(cD, ID)
      }
      rangeIsValid(DD) {
        let {
          head: CD
        } = DD.selection.main;
        return !(this.from > 0 && CD - this.from < 500 || this.to < DD.doc.length && this.to - CD < 500 || this.to - this.from > 3e4)
      }
      toEditorPos(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.to - this.from;
        DD = Math.min(DD, CD);
        let cD = this.composing;
        return cD && cD.drifted ? cD.editorBase + (DD - cD.contextBase) : DD + this.from
      }
      toContextPos(DD) {
        let CD = this.composing;
        return CD && CD.drifted ? CD.contextBase + (DD - CD.editorBase) : DD - this.from
      }
      destroy() {
        for (let DD in this.handlers) this.editContext.removeEventListener(DD, this.handlers[DD])
      }
    }
    class Hp {
      get state() {
        return this.viewState.state
      }
      get viewport() {
        return this.viewState.viewport
      }
      get o3() {
        return this.viewState.o3
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
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var CD;
        this.plugins = [], this.pluginMap = new Map, this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), DD.parent && DD.parent.appendChild(this.dom);
        let {
          dispatch: cD
        } = DD;
        this.dispatchTransactions = DD.dispatchTransactions || cD && (DD => DD.forEach((DD => cD(DD, this)))) || (DD => this.update(DD)), this.dispatch = this.dispatch.bind(this), this._root = DD.root || function(DD) {
          for (; DD;) {
            if (DD && (9 == DD.nodeType || 11 == DD.nodeType && DD.host)) return DD;
            DD = DD.assignedSlot || DD.parentNode
          }
          return null
        }(DD.parent) || document, this.viewState = new Ip(this, DD.state || ID.j.create(DD)), DD.scrollTo && DD.scrollTo.is(YC) && (this.viewState.scrollTarget = DD.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(uC).map((DD => new rC(DD)));
        for (let ID of this.plugins) ID.update(this);
        this.observer = new mp(this), this.inputState = new QI(this), this.inputState.ensureHandlers(this.plugins), this.docView = new lc(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), (null === (CD = document.fonts) || void 0 === CD ? void 0 : CD.ready) && document.fonts.ready.then((() => {
          this.viewState.mustMeasureContent = "refresh", this.requestMeasure()
        }))
      }
      dispatch() {
        for (var DD = arguments.length, CD = new Array(DD), cD = 0; cD < DD; cD++) CD[cD] = arguments[cD];
        let pD = 1 == CD.length && CD[0] instanceof ID.L ? CD : 1 == CD.length && Array.isArray(CD[0]) ? CD[0] : [this.state.update(...CD)];
        this.dispatchTransactions(pD, this)
      }
      update(DD) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        let CD, cD = !1,
          pD = !1,
          iD = this.state;
        for (let ID of DD) {
          if (ID.startState != iD) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
          iD = ID.state
        }
        if (this.destroyed) return void(this.viewState.state = iD);
        let fD = this.hasFocus,
          bD = 0,
          QD = null;
        DD.some((DD => DD.annotation(JI))) ? (this.inputState.notifiedFocused = fD, bD = 1) : fD != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = fD, QD = KI(iD, fD), QD || (bD = 1));
        let wD = this.observer.delayedAndroidKey,
          SD = null;
        if (wD ? (this.observer.clearDelayedAndroidKey(), SD = this.observer.readChange(), (SD && !this.state.doc.eq(iD.doc) || !this.state.selection.eq(iD.selection)) && (SD = null)) : this.observer.clear(), iD.facet(ID.j.phrases) != this.state.facet(ID.j.phrases)) return this.setState(iD);
        CD = Sc.create(this, iD, DD), CD.flags |= bD;
        let BD = this.viewState.scrollTarget;
        try {
          this.updateState = 2;
          for (let CD of DD) {
            if (BD && (BD = BD.map(CD.changes)), CD.scrollIntoView) {
              let {
                main: DD
              } = CD.state.selection, {
                x: cD,
                y: pD
              } = this.state.facet(Hp.cursorScrollMargin);
              BD = new dC(DD.empty ? DD : ID.i.cursor(DD.head, DD.head > DD.anchor ? -1 : 1), "nearest", "nearest", pD, cD)
            }
            for (let DD of CD.effects) DD.is(YC) && (BD = DD.value.clip(this.state))
          }
          this.viewState.update(CD, BD), this.bidiCache = qp.update(this.bidiCache, CD.changes), CD.empty || (this.updatePlugins(CD), this.inputState.update(CD)), cD = this.docView.update(CD), this.state.facet(Qc) != this.styleModules && this.mountStyles(), pD = this.updateAttrs(), this.showAnnouncements(DD), this.docView.updateSelection(cD, DD.some((DD => DD.isUserEvent("select.pointer"))))
        } finally {
          this.updateState = 0
        }
        if (CD.startState.facet(Bp) != CD.state.facet(Bp) && (this.viewState.mustMeasureContent = !0), (cD || pD || BD || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), cD && this.docViewUpdate(), !CD.empty)
          for (let ID of this.state.facet(zC)) try {
            ID(CD)
          } catch (yD) {
            sC(this.state, yD, "update listener")
          }(QD || SD) && Promise.resolve().then((() => {
            QD && this.state == QD.startState && this.dispatch(QD), SD && !pI(this, SD) && wD.force && pC(this.contentDOM, wD.key, wD.keyCode)
          }))
      }
      setState(DD) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
        if (this.destroyed) return void(this.viewState.state = DD);
        this.updateState = 2;
        let CD = this.hasFocus;
        try {
          for (let DD of this.plugins) DD.destroy(this);
          this.viewState = new Ip(this, DD), this.plugins = DD.facet(uC).map((DD => new rC(DD))), this.pluginMap.clear();
          for (let DD of this.plugins) DD.update(this);
          this.docView.destroy(), this.docView = new lc(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = []
        } finally {
          this.updateState = 0
        }
        CD && this.focus(), this.requestMeasure()
      }
      updatePlugins(DD) {
        let CD = DD.startState.facet(uC),
          cD = DD.state.facet(uC);
        if (CD != cD) {
          let ID = [];
          for (let pD of cD) {
            let cD = CD.indexOf(pD);
            if (cD < 0) ID.push(new rC(pD));
            else {
              let CD = this.plugins[cD];
              CD.mustUpdate = DD, ID.push(CD)
            }
          }
          for (let CD of this.plugins) CD.mustUpdate != DD && CD.destroy(this);
          this.plugins = ID, this.pluginMap.clear()
        } else
          for (let ID of this.plugins) ID.mustUpdate = DD;
        for (let ID = 0; ID < this.plugins.length; ID++) this.plugins[ID].update(this);
        CD != cD && this.inputState.ensureHandlers(this.plugins)
      }
      docViewUpdate() {
        for (let CD of this.plugins) {
          let cD = CD.value;
          if (cD && cD.docViewUpdate) try {
            cD.docViewUpdate(this)
          } catch (DD) {
            sC(this.state, DD, "doc view update listener")
          }
        }
      }
      measure() {
        let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.destroyed) return;
        if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) return this.measureScheduled = -1, void this.requestMeasure();
        this.measureScheduled = 0, DD && this.observer.forceFlush();
        let CD = null,
          cD = this.viewState.scrollParent,
          ID = this.viewState.getScrollOffset(),
          {
            scrollAnchorPos: pD,
            scrollAnchorHeight: iD
          } = this.viewState;
        Math.abs(ID - this.viewState.scrollOffset) > 1 && (iD = -1), this.viewState.scrollAnchorHeight = -1;
        try {
          for (let DD = 0;; DD++) {
            if (iD < 0)
              if (iC(cD || this.win)) pD = -1, iD = this.viewState.heightMap.height;
              else {
                let DD = this.viewState.scrollAnchorAt(ID);
                pD = DD.from, iD = DD.top
              } this.updateState = 1;
            let bD = this.viewState.measure();
            if (!bD && !this.measureRequests.length && null == this.viewState.scrollTarget) break;
            if (DD > 5) {
              console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
              break
            }
            let QD = [];
            4 & bD || ([this.measureRequests, QD] = [QD, this.measureRequests]);
            let wD = QD.map((DD => {
                try {
                  return DD.read(this)
                } catch (CD) {
                  return sC(this.state, CD), xp
                }
              })),
              SD = Sc.create(this, this.state, []),
              BD = !1;
            SD.flags |= bD, CD ? CD.flags |= bD : CD = SD, this.updateState = 2, SD.empty || (this.updatePlugins(SD), this.inputState.update(SD), this.updateAttrs(), BD = this.docView.update(SD), BD && this.docViewUpdate());
            for (let DD = 0; DD < QD.length; DD++)
              if (wD[DD] != xp) try {
                let CD = QD[DD];
                CD.write && CD.write(wD[DD], this)
              } catch (fD) {
                sC(this.state, fD)
              }
            if (BD && this.docView.updateSelection(!0), !SD.viewportChanged && 0 == this.measureRequests.length) {
              if (this.viewState.editorHeight) {
                if (this.viewState.scrollTarget) {
                  this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, iD = -1;
                  continue
                } {
                  let DD = ((pD < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(pD).top) - iD) / this.scaleY;
                  if ((DD > 1 || DD < -1) && (cD == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                    ID += DD, cD ? cD.scrollTop += DD : this.win.scrollBy(0, DD), iD = -1;
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
        if (CD && !CD.empty)
          for (let bD of this.state.facet(zC)) bD(CD)
      }
      get themeClasses() {
        return Mp + " " + (this.state.facet(yp) ? Zp : tp) + " " + this.state.facet(Bp)
      }
      updateAttrs() {
        let DD = Jp(this, AC, {
            class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
          }),
          CD = {
            spellcheck: "false",
            autocorrect: "off",
            autocapitalize: "off",
            writingsuggestions: "false",
            translate: "no",
            contenteditable: this.state.facet(EC) ? "true" : "false",
            class: "cm-content",
            style: `${OD.tabSize}: ${this.state.tabSize}`,
            role: "textbox",
            "aria-multiline": "true"
          };
        this.state.readOnly && (CD["aria-readonly"] = "true"), Jp(this, FC, CD);
        let cD = this.observer.ignore((() => {
          let cD = xD(this.contentDOM, this.contentAttrs, CD),
            ID = xD(this.dom, this.editorAttrs, DD);
          return cD || ID
        }));
        return this.editorAttrs = DD, this.contentAttrs = CD, cD
      }
      showAnnouncements(DD) {
        let CD = !0;
        for (let cD of DD)
          for (let DD of cD.effects)
            if (DD.is(Hp.announce)) {
              CD && (this.announceDOM.textContent = ""), CD = !1, this.announceDOM.appendChild(document.createElement("div")).textContent = DD.value
            }
      }
      mountStyles() {
        this.styleModules = this.state.facet(Qc);
        let DD = this.state.facet(Hp.cspNonce);
        pD.d.mount(this.root, this.styleModules.concat(Np).reverse(), DD ? {
          nonce: DD
        } : void 0)
      }
      readMeasured() {
        if (2 == this.updateState) throw new Error("Reading the editor layout isn't allowed during an update");
        0 == this.updateState && this.measureScheduled > -1 && this.measure(!1)
      }
      requestMeasure(DD) {
        if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame((() => this.measure()))), DD) {
          if (this.measureRequests.indexOf(DD) > -1) return;
          if (null != DD.key)
            for (let CD = 0; CD < this.measureRequests.length; CD++)
              if (this.measureRequests[CD].key === DD.key) return void(this.measureRequests[CD] = DD);
          this.measureRequests.push(DD)
        }
      }
      plugin(DD) {
        let CD = this.pluginMap.get(DD);
        return (void 0 === CD || CD && CD.plugin != DD) && this.pluginMap.set(DD, CD = this.plugins.find((CD => CD.plugin == DD)) || null), CD && CD.update(this).value
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
      elementAtHeight(DD) {
        return this.readMeasured(), this.viewState.elementAtHeight(DD)
      }
      lineBlockAtHeight(DD) {
        return this.readMeasured(), this.viewState.lineBlockAtHeight(DD)
      }
      get viewportLineBlocks() {
        return this.viewState.viewportLines
      }
      lineBlockAt(DD) {
        return this.viewState.lineBlockAt(DD)
      }
      get contentHeight() {
        return this.viewState.contentHeight
      }
      moveByChar(DD, CD, cD) {
        return Ec(this, DD, Yc(this, DD, CD, cD))
      }
      moveByGroup(DD, CD) {
        return Ec(this, DD, Yc(this, DD, CD, (CD => function(DD, CD, cD) {
          let pD = DD.state.charCategorizer(CD),
            iD = pD(cD);
          return DD => {
            let CD = pD(DD);
            return iD == ID.f.Space && (iD = CD), iD == CD
          }
        }(this, DD.head, CD))))
      }
      visualLineSide(DD, CD) {
        let cD = this.bidiSpans(DD),
          pD = this.textDirectionAt(DD.from),
          iD = cD[CD ? cD.length - 1 : 0];
        return ID.i.cursor(iD.side(CD, pD) + DD.from, iD.forward(!CD, pD) ? 1 : -1)
      }
      moveToLineBoundary(DD, CD) {
        return function(DD, CD, cD, pD) {
          let iD = dc(DD, CD.head, CD.assoc || -1),
            fD = pD && iD.type == KD.Text && (DD.lineWrapping || iD.widgetLineBreaks) ? DD.coordsAtPos(CD.assoc < 0 && CD.head > iD.from ? CD.head - 1 : CD.head) : null;
          if (fD) {
            let CD = DD.dom.getBoundingClientRect(),
              pD = DD.textDirectionAt(iD.from),
              bD = DD.posAtCoords({
                x: cD == (pD == wC.LTR) ? CD.right - 1 : CD.left + 1,
                y: (fD.top + fD.bottom) / 2
              });
            if (null != bD) return ID.i.cursor(bD, cD ? -1 : 1)
          }
          return ID.i.cursor(cD ? iD.to : iD.from, cD ? -1 : 1)
        }(this, DD, CD, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2])
      }
      moveVertically(DD, CD, cD) {
        return Ec(this, DD, function(DD, CD, cD, pD) {
          let iD = CD.head,
            fD = cD ? 1 : -1;
          if (iD == (cD ? DD.state.doc.length : 0)) return ID.i.cursor(iD, CD.assoc);
          let bD, QD = CD.goalColumn,
            wD = DD.contentDOM.getBoundingClientRect(),
            SD = DD.coordsAtPos(iD, CD.assoc || ((CD.empty ? cD : CD.head == CD.from) ? 1 : -1)),
            BD = DD.documentTop;
          if (SD) null == QD && (QD = SD.left - wD.left), bD = fD < 0 ? SD.top : SD.bottom;
          else {
            let CD = DD.viewState.lineBlockAt(iD);
            null == QD && (QD = Math.min(wD.right - wD.left, DD.defaultCharacterWidth * (iD - CD.from))), bD = (fD < 0 ? CD.top : CD.bottom) + BD
          }
          let yD = wD.left + QD,
            MD = DD.viewState.heightOracle.textHeight >> 1,
            tD = null !== pD && void 0 !== pD ? pD : MD;
          for (let ZD = 0;; ZD += MD) {
            let CD = bD + (tD + ZD) * fD,
              pD = uc(DD, {
                x: yD,
                y: CD
              }, !1, fD);
            if (cD ? CD > wD.bottom : CD < wD.top) return ID.i.cursor(pD.pos, pD.assoc);
            let iD = DD.coordsAtPos(pD.pos, pD.assoc),
              SD = iD ? (iD.top + iD.bottom) / 2 : 0;
            if (!iD || (cD ? SD > bD : SD < bD)) return ID.i.cursor(pD.pos, pD.assoc, void 0, QD)
          }
        }(this, DD, CD, cD))
      }
      domAtPos(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return this.docView.domAtPos(DD, CD)
      }
      posAtDOM(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.docView.posFromDOM(DD, CD)
      }
      posAtCoords(DD) {
        let CD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this.readMeasured();
        let cD = uc(this, DD, CD);
        return cD && cD.pos
      }
      posAndSideAtCoords(DD) {
        let CD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return this.readMeasured(), uc(this, DD, CD)
      }
      coordsAtPos(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.readMeasured();
        let cD = this.docView.coordsAt(DD, CD);
        if (!cD || cD.left == cD.right) return cD;
        let ID = this.state.doc.lineAt(DD),
          pD = this.bidiSpans(ID);
        return uD(cD, pD[gC.find(pD, DD - ID.from, -1, CD)].dir == wC.LTR == CD > 0)
      }
      coordsForChar(DD) {
        return this.readMeasured(), this.docView.coordsForChar(DD)
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
      textDirectionAt(DD) {
        return !this.state.facet(GC) || DD < this.viewport.from || DD > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(DD))
      }
      get lineWrapping() {
        return this.viewState.heightOracle.lineWrapping
      }
      bidiSpans(DD) {
        if (DD.length > Up) return HC(DD.length);
        let CD, cD = this.textDirectionAt(DD.from);
        for (let pD of this.bidiCache)
          if (pD.from == DD.from && pD.dir == cD && (pD.fresh || XC(pD.isolates, CD = ic(this, DD)))) return pD.order;
        CD || (CD = ic(this, DD));
        let ID = PC(DD.text, cD, CD);
        return this.bidiCache.push(new qp(DD.from, DD.to, cD, CD, !0, ID)), ID
      }
      get hasFocus() {
        var DD;
        return (this.dom.ownerDocument.hasFocus() || OD.safari && (null === (DD = this.inputState) || void 0 === DD ? void 0 : DD.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM
      }
      focus() {
        this.observer.ignore((() => {
          cC(this.contentDOM), this.docView.updateSelection()
        }))
      }
      setRoot(DD) {
        this._root != DD && (this._root = DD, this.observer.setWindow((9 == DD.nodeType ? DD : DD.ownerDocument).defaultView || window), this.mountStyles())
      }
      destroy() {
        this.root.activeElement == this.contentDOM && this.contentDOM.blur();
        for (let DD of this.plugins) DD.destroy(this);
        this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0
      }
      static scrollIntoView(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var cD, pD, iD, fD;
        return YC.of(new dC("number" == typeof DD ? ID.i.cursor(DD) : DD, null !== (cD = CD.y) && void 0 !== cD ? cD : "nearest", null !== (pD = CD.x) && void 0 !== pD ? pD : "nearest", null !== (iD = CD.yMargin) && void 0 !== iD ? iD : 5, null !== (fD = CD.xMargin) && void 0 !== fD ? fD : 5))
      }
      scrollSnapshot() {
        let {
          scrollTop: DD,
          scrollLeft: CD
        } = this.scrollDOM, cD = this.viewState.scrollAnchorAt(DD);
        return YC.of(new dC(ID.i.cursor(cD.from), "start", "start", cD.top - DD, CD, !0))
      }
      setTabFocusMode(DD) {
        null == DD ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof DD ? this.inputState.tabFocusMode = DD ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + DD)
      }
      static domEventHandlers(DD) {
        return hC.define((() => ({})), {
          eventHandlers: DD
        })
      }
      static domEventObservers(DD) {
        return hC.define((() => ({})), {
          eventObservers: DD
        })
      }
      static theme(DD, CD) {
        let cD = pD.d.newName(),
          ID = [Bp.of(cD), Qc.of(vp(`.${cD}`, DD))];
        return CD && CD.dark && ID.push(yp.of(!0)), ID
      }
      static baseTheme(DD) {
        return ID.s.lowest(Qc.of(vp("." + Mp, DD, op)))
      }
      static findFromDOM(DD) {
        var CD;
        let cD = DD.querySelector(".cm-content"),
          ID = cD && yc.get(cD) || yc.get(DD);
        return (null === (CD = null === ID || void 0 === ID ? void 0 : ID.root) || void 0 === CD ? void 0 : CD.view) || null
      }
    }
    Hp.styleModule = Qc, Hp.inputHandler = jC, Hp.clipboardInputFilter = LC, Hp.clipboardOutputFilter = TC, Hp.scrollHandler = kC, Hp.focusChangeEffect = lC, Hp.perLineTextDirection = GC, Hp.exceptionSink = VC, Hp.updateListener = zC, Hp.editable = EC, Hp.mouseSelectionStyle = aC, Hp.dragMovesSelection = KC, Hp.clickAddsSelectionRange = JC, Hp.qI = Dc, Hp.blockWrappers = Cc, Hp.outerDecorations = cc, Hp.atomicRanges = Ic, Hp.bidiIsolatedRanges = pc, Hp.cursorScrollMargin = ID.l.define({
      combine: DD => {
        let CD = 5,
          cD = 5;
        for (let ID of DD) "number" == typeof ID ? CD = cD = ID : ({
          x: CD,
          y: cD
        } = ID);
        return {
          x: CD,
          y: cD
        }
      }
    }), Hp.scrollMargins = fc, Hp.darkTheme = yp, Hp.cspNonce = ID.l.define({
      combine: DD => DD.length ? DD[0] : ""
    }), Hp.contentAttributes = FC, Hp.editorAttributes = AC, Hp.lineWrapping = Hp.contentAttributes.of({
      class: "cm-lineWrapping"
    }), Hp.announce = ID.D.define();
    const Up = 4096,
      xp = {};
    class qp {
      constructor(DD, CD, cD, ID, pD, iD) {
        this.from = DD, this.to = CD, this.dir = cD, this.isolates = ID, this.fresh = pD, this.order = iD
      }
      static update(DD, CD) {
        if (CD.empty && !DD.some((DD => DD.fresh))) return DD;
        let cD = [],
          ID = DD.length ? DD[DD.length - 1].dir : wC.LTR;
        for (let pD = Math.max(0, DD.length - 10); pD < DD.length; pD++) {
          let iD = DD[pD];
          iD.dir != ID || CD.touchesRange(iD.from, iD.to) || cD.push(new qp(CD.mapPos(iD.from, 1), CD.mapPos(iD.to, -1), iD.dir, iD.isolates, !1, iD.order))
        }
        return cD
      }
    }

    function Jp(DD, CD, cD) {
      for (let ID = DD.state.facet(CD), pD = ID.length - 1; pD >= 0; pD--) {
        let CD = ID[pD],
          iD = "function" == typeof CD ? CD(DD) : CD;
        iD && PD(iD, cD)
      }
      return cD
    }
    const Kp = OD.mac ? "mac" : OD.windows ? "win" : OD.linux ? "linux" : "key";

    function ap(DD, CD, cD) {
      return CD.altKey && (DD = "Alt-" + DD), CD.ctrlKey && (DD = "Ctrl-" + DD), CD.metaKey && (DD = "Meta-" + DD), !1 !== cD && CD.shiftKey && (DD = "Shift-" + DD), DD
    }
    const Vp = ID.s.default(Hp.domEventHandlers({
        keydown: (DD, CD) => kp(lp(CD.state), DD, CD, "editor")
      })),
      zp = ID.l.define({
        enables: Vp
      }),
      jp = new WeakMap;

    function lp(DD) {
      let CD = DD.facet(zp),
        cD = jp.get(CD);
      return cD || jp.set(CD, cD = function(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Kp,
          cD = Object.create(null),
          ID = Object.create(null),
          pD = (DD, CD) => {
            let cD = ID[DD];
            if (null == cD) ID[DD] = CD;
            else if (cD != CD) throw new Error("Key binding " + DD + " is used both as a regular binding and as a multi-stroke prefix")
          },
          iD = (DD, ID, iD, fD, bD) => {
            var QD, wD;
            let SD = cD[DD] || (cD[DD] = Object.create(null)),
              BD = ID.split(/ (?!$)/).map((DD => function(DD, CD) {
                const cD = DD.split(/-(?!$)/);
                let ID, pD, iD, fD, bD = cD[cD.length - 1];
                "Space" == bD && (bD = " ");
                for (let QD = 0; QD < cD.length - 1; ++QD) {
                  const DD = cD[QD];
                  if (/^(cmd|meta|m)$/i.test(DD)) fD = !0;
                  else if (/^a(lt)?$/i.test(DD)) ID = !0;
                  else if (/^(c|ctrl|control)$/i.test(DD)) pD = !0;
                  else if (/^s(hift)?$/i.test(DD)) iD = !0;
                  else {
                    if (!/^mod$/i.test(DD)) throw new Error("Unrecognized modifier name: " + DD);
                    "mac" == CD ? fD = !0 : pD = !0
                  }
                }
                return ID && (bD = "Alt-" + bD), pD && (bD = "Ctrl-" + bD), fD && (bD = "Meta-" + bD), iD && (bD = "Shift-" + bD), bD
              }(DD, CD)));
            for (let CD = 1; CD < BD.length; CD++) {
              let cD = BD.slice(0, CD).join(" ");
              pD(cD, !0), SD[cD] || (SD[cD] = {
                preventDefault: !0,
                stopPropagation: !1,
                run: [CD => {
                  let ID = Tp = {
                    view: CD,
                    prefix: cD,
                    scope: DD
                  };
                  return setTimeout((() => {
                    Tp == ID && (Tp = null)
                  }), Gp), !0
                }]
              })
            }
            let yD = BD.join(" ");
            pD(yD, !1);
            let MD = SD[yD] || (SD[yD] = {
              preventDefault: !1,
              stopPropagation: !1,
              run: (null === (wD = null === (QD = SD._any) || void 0 === QD ? void 0 : QD.run) || void 0 === wD ? void 0 : wD.slice()) || []
            });
            iD && MD.run.push(iD), fD && (MD.preventDefault = !0), bD && (MD.stopPropagation = !0)
          };
        for (let fD of DD) {
          let DD = fD.scope ? fD.scope.split(" ") : ["editor"];
          if (fD.any)
            for (let CD of DD) {
              let DD = cD[CD] || (cD[CD] = Object.create(null));
              DD._any || (DD._any = {
                preventDefault: !1,
                stopPropagation: !1,
                run: []
              });
              let {
                any: ID
              } = fD;
              for (let CD in DD) DD[CD].run.push((DD => ID(DD, Rp)))
            }
          let ID = fD[CD] || fD.key;
          if (ID)
            for (let CD of DD) iD(CD, ID, fD.run, fD.preventDefault, fD.stopPropagation), fD.shift && iD(CD, "Shift-" + ID, fD.shift, fD.preventDefault, fD.stopPropagation)
        }
        return cD
      }(CD.reduce(((DD, CD) => DD.concat(CD)), []))), cD
    }

    function Lp(DD, CD, cD) {
      return kp(lp(DD.state), CD, DD, cD)
    }
    let Tp = null;
    const Gp = 4e3;
    let Rp = null;

    function kp(DD, CD, cD, pD) {
      Rp = CD;
      let wD = function(DD) {
          var CD = !(bD && DD.metaKey && DD.shiftKey && !DD.ctrlKey && !DD.altKey || QD && DD.shiftKey && DD.key && 1 == DD.key.length || "Unidentified" == DD.key) && DD.key || (DD.shiftKey ? fD : iD)[DD.keyCode] || DD.key || "Unidentified";
          return "Esc" == CD && (CD = "Escape"), "Del" == CD && (CD = "Delete"), "Left" == CD && (CD = "ArrowLeft"), "Up" == CD && (CD = "ArrowUp"), "Right" == CD && (CD = "ArrowRight"), "Down" == CD && (CD = "ArrowDown"), CD
        }(CD),
        SD = (0, ID.O)(wD, 0),
        BD = (0, ID.S)(SD) == wD.length && " " != wD,
        yD = "",
        MD = !1,
        tD = !1,
        ZD = !1;
      Tp && Tp.view == cD && Tp.scope == pD && (yD = Tp.prefix + " ", MI.indexOf(CD.keyCode) < 0 && (tD = !0, Tp = null));
      let oD, vD, ND = new Set,
        gD = DD => {
          if (DD) {
            for (let CD of DD.run)
              if (!ND.has(CD) && (ND.add(CD), CD(cD))) return DD.stopPropagation && (ZD = !0), !0;
            DD.preventDefault && (DD.stopPropagation && (ZD = !0), tD = !0)
          }
          return !1
        },
        XD = DD[pD];
      return XD && (gD(XD[yD + ap(wD, CD, !BD)]) ? MD = !0 : !BD || !(CD.altKey || CD.metaKey || CD.ctrlKey) || OD.windows && CD.ctrlKey && CD.altKey || OD.mac && CD.altKey && !CD.ctrlKey && !CD.metaKey || !(oD = iD[CD.keyCode]) || oD == wD ? BD && CD.shiftKey && gD(XD[yD + ap(wD, CD, !0)]) && (MD = !0) : (gD(XD[yD + ap(oD, CD, !0)]) || CD.shiftKey && (vD = fD[CD.keyCode]) != wD && vD != oD && gD(XD[yD + ap(vD, CD, !1)])) && (MD = !0), !MD && gD(XD._any) && (MD = !0)), tD && (MD = !0), MD && ZD && CD.stopPropagation(), Rp = null, MD
    }
    class dp {
      constructor(DD, CD, cD, ID, pD) {
        this.className = DD, this.left = CD, this.top = cD, this.width = ID, this.height = pD
      }
      draw() {
        let DD = document.createElement("div");
        return DD.className = this.className, this.adjust(DD), DD
      }
      update(DD, CD) {
        return CD.className == this.className && (this.adjust(DD), !0)
      }
      adjust(DD) {
        DD.style.left = this.left + "px", DD.style.top = this.top + "px", null != this.width && (DD.style.width = this.width + "px"), DD.style.height = this.height + "px"
      }
      eq(DD) {
        return this.left == DD.left && this.top == DD.top && this.width == DD.width && this.height == DD.height && this.className == DD.className
      }
      static forRange(DD, CD, cD) {
        if (cD.empty) {
          let ID = DD.coordsAtPos(cD.head, cD.assoc || 1);
          if (!ID) return [];
          let pD = Yp(DD);
          return [new dp(CD, ID.left - pD.left, ID.top - pD.top, null, ID.bottom - ID.top)]
        }
        return function(DD, CD, cD) {
          if (cD.to <= DD.viewport.from || cD.from >= DD.viewport.to) return [];
          let ID = Math.max(cD.from, DD.viewport.from),
            pD = Math.min(cD.to, DD.viewport.to),
            iD = DD.textDirection == wC.LTR,
            fD = DD.contentDOM,
            bD = fD.getBoundingClientRect(),
            QD = Yp(DD),
            wD = fD.querySelector(".cm-line"),
            SD = wD && window.getComputedStyle(wD),
            BD = bD.left + (SD ? parseInt(SD.paddingLeft) + Math.min(0, parseInt(SD.textIndent)) : 0),
            yD = bD.right - (SD ? parseInt(SD.paddingRight) : 0),
            MD = dc(DD, ID, 1),
            tD = dc(DD, pD, -1),
            ZD = MD.type == KD.Text ? MD : null,
            oD = tD.type == KD.Text ? tD : null;
          ZD && (DD.lineWrapping || MD.widgetLineBreaks) && (ZD = Wp(DD, ID, 1, ZD));
          oD && (DD.lineWrapping || tD.widgetLineBreaks) && (oD = Wp(DD, pD, -1, oD));
          if (ZD && oD && ZD.from == oD.from && ZD.to == oD.to) return ND(gD(cD.from, cD.to, ZD));
          {
            let CD = ZD ? gD(cD.from, null, ZD) : XD(MD, !1),
              ID = oD ? gD(null, cD.to, oD) : XD(tD, !0),
              pD = [];
            return (ZD || MD).to < (oD || tD).from - (ZD && oD ? 1 : 0) || MD.widgetLineBreaks > 1 && CD.bottom + DD.defaultLineHeight / 2 < ID.top ? pD.push(vD(BD, CD.bottom, yD, ID.top)) : CD.bottom < ID.top && DD.elementAtHeight((CD.bottom + ID.top) / 2).type == KD.Text && (CD.bottom = ID.top = (CD.bottom + ID.top) / 2), ND(CD).concat(pD).concat(ND(ID))
          }

          function vD(DD, cD, ID, pD) {
            return new dp(CD, DD - QD.left, cD - QD.top, Math.max(0, ID - DD), pD - cD)
          }

          function ND(DD) {
            let {
              top: CD,
              bottom: cD,
              horizontal: ID
            } = DD, pD = [];
            for (let iD = 0; iD < ID.length; iD += 2) pD.push(vD(ID[iD], CD, ID[iD + 1], cD));
            return pD
          }

          function gD(CD, cD, ID) {
            let pD = 1e9,
              fD = -1e9,
              bD = [];

            function QD(CD, cD, QD, wD, SD) {
              let MD = DD.coordsAtPos(CD, CD == ID.to ? -2 : 2),
                tD = DD.coordsAtPos(QD, QD == ID.from ? 2 : -2);
              MD && tD && (pD = Math.min(MD.top, tD.top, pD), fD = Math.max(MD.bottom, tD.bottom, fD), SD == wC.LTR ? bD.push(iD && cD ? BD : MD.left, iD && wD ? yD : tD.right) : bD.push(!iD && wD ? BD : tD.left, !iD && cD ? yD : MD.right))
            }
            let wD = null !== CD && void 0 !== CD ? CD : ID.from,
              SD = null !== cD && void 0 !== cD ? cD : ID.to;
            for (let iD of DD.o3)
              if (iD.to > wD && iD.from < SD)
                for (let ID = Math.max(iD.from, wD), pD = Math.min(iD.to, SD);;) {
                  let iD = DD.state.doc.lineAt(ID);
                  for (let fD of DD.bidiSpans(iD)) {
                    let DD = fD.from + iD.from,
                      bD = fD.to + iD.from;
                    if (DD >= pD) break;
                    bD > ID && QD(Math.max(DD, ID), null == CD && DD <= wD, Math.min(bD, pD), null == cD && bD >= SD, fD.dir)
                  }
                  if (ID = iD.to + 1, ID >= pD) break
                }
            return 0 == bD.length && QD(wD, null == CD, SD, null == cD, DD.textDirection), {
              top: pD,
              bottom: fD,
              horizontal: bD
            }
          }

          function XD(DD, CD) {
            let cD = bD.top + (CD ? DD.top : DD.bottom);
            return {
              top: cD,
              bottom: cD,
              horizontal: []
            }
          }
        }(DD, CD, cD)
      }
    }

    function Yp(DD) {
      let CD = DD.scrollDOM.getBoundingClientRect();
      return {
        left: (DD.textDirection == wC.LTR ? CD.left : CD.right - DD.scrollDOM.clientWidth * DD.scaleX) - DD.scrollDOM.scrollLeft * DD.scaleX,
        top: CD.top - DD.scrollDOM.scrollTop * DD.scaleY
      }
    }

    function Wp(DD, CD, cD, ID) {
      let pD = DD.coordsAtPos(CD, 2 * cD);
      if (!pD) return ID;
      let iD = DD.dom.getBoundingClientRect(),
        fD = (pD.top + pD.bottom) / 2,
        bD = DD.posAtCoords({
          x: iD.left + 1,
          y: fD
        }),
        QD = DD.posAtCoords({
          x: iD.right - 1,
          y: fD
        });
      return null == bD || null == QD ? ID : {
        from: Math.max(ID.from, Math.min(bD, QD)),
        to: Math.min(ID.to, Math.max(bD, QD))
      }
    }
    class sp {
      constructor(DD, CD) {
        this.view = DD, this.layer = CD, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
          read: this.measure.bind(this),
          write: this.draw.bind(this)
        }, this.dom = DD.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), CD.above && this.dom.classList.add("cm-layer-above"), CD.class && this.dom.classList.add(CD.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(DD.state), DD.requestMeasure(this.measureReq), CD.mount && CD.mount(this.dom, DD)
      }
      update(DD) {
        DD.startState.facet(Ep) != DD.state.facet(Ep) && this.setOrder(DD.state), (this.layer.update(DD, this.dom) || DD.geometryChanged) && (this.scale(), DD.view.requestMeasure(this.measureReq))
      }
      docViewUpdate(DD) {
        !1 !== this.layer.updateOnDocViewUpdate && DD.requestMeasure(this.measureReq)
      }
      setOrder(DD) {
        let CD = 0,
          cD = DD.facet(Ep);
        for (; CD < cD.length && cD[CD] != this.layer;) CD++;
        this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - CD)
      }
      measure() {
        return this.layer.markers(this.view)
      }
      scale() {
        let {
          scaleX: DD,
          scaleY: CD
        } = this.view;
        DD == this.scaleX && CD == this.scaleY || (this.scaleX = DD, this.scaleY = CD, this.dom.style.transform = `scale(${1/DD}, ${1/CD})`)
      }
      draw(DD) {
        if (DD.length != this.drawn.length || DD.some(((DD, CD) => {
            return cD = DD, ID = this.drawn[CD], !(cD.constructor == ID.constructor && cD.eq(ID));
            var cD, ID
          }))) {
          let CD = this.dom.firstChild,
            cD = 0;
          for (let ID of DD) ID.update && CD && ID.constructor && this.drawn[cD].constructor && ID.update(CD, this.drawn[cD]) ? (CD = CD.nextSibling, cD++) : this.dom.insertBefore(ID.draw(), CD);
          for (; CD;) {
            let DD = CD.nextSibling;
            CD.remove(), CD = DD
          }
          this.drawn = DD, OD.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none")
        }
      }
      destroy() {
        this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove()
      }
    }
    const Ep = ID.l.define();

    function ep(DD) {
      return [hC.define((CD => new sp(CD, DD))), Ep.of(DD)]
    }
    const hp = ID.l.define({
      combine: DD => (0, ID.U)(DD, {
        cursorBlinkRate: 1200,
        drawRangeCursor: !0,
        iosSelectionHandles: !0
      }, {
        cursorBlinkRate: (DD, CD) => Math.min(DD, CD),
        drawRangeCursor: (DD, CD) => DD || CD
      })
    });

    function rp() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [hp.of(DD), Fp, Ci, ci, RC.of(!0)]
    }

    function Ap(DD) {
      return DD.startState.facet(hp) != DD.state.facet(hp)
    }
    const Fp = ep({
      above: !0,
      markers(DD) {
        let {
          state: CD
        } = DD, cD = CD.facet(hp), pD = [];
        for (let iD of CD.selection.df) {
          let fD = iD == CD.selection.main;
          if (iD.empty || cD.drawRangeCursor && !(fD && OD.ios && cD.iosSelectionHandles)) {
            let CD = fD ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary",
              cD = iD.empty ? iD : ID.i.cursor(iD.head, iD.assoc);
            for (let ID of dp.forRange(DD, CD, cD)) pD.push(ID)
          }
        }
        return pD
      },
      update(DD, CD) {
        DD.transactions.some((DD => DD.selection)) && (CD.style.animationName = "cm-blink" == CD.style.animationName ? "cm-blink2" : "cm-blink");
        let cD = Ap(DD);
        return cD && Di(DD.state, CD), DD.docChanged || DD.selectionSet || cD
      },
      mount(DD, CD) {
        Di(CD.state, DD)
      },
      class: "cm-cursorLayer"
    });

    function Di(DD, CD) {
      CD.style.animationDuration = DD.facet(hp).cursorBlinkRate + "ms"
    }
    const Ci = ep({
        above: !1,
        markers(DD) {
          let CD = [],
            {
              main: cD,
              df: pD
            } = DD.state.selection;
          for (let ID of pD)
            if (!ID.empty)
              for (let cD of dp.forRange(DD, "cm-selectionBackground", ID)) CD.push(cD);
          if (OD.ios && !cD.empty && DD.state.facet(hp).iosSelectionHandles) {
            for (let pD of dp.forRange(DD, "cm-selectionHandle cm-selectionHandle-start", ID.i.cursor(cD.from, 1))) CD.push(pD);
            for (let pD of dp.forRange(DD, "cm-selectionHandle cm-selectionHandle-end", ID.i.cursor(cD.to, 1))) CD.push(pD)
          }
          return CD
        },
        update: (DD, CD) => DD.docChanged || DD.selectionSet || DD.viewportChanged || Ap(DD),
        class: "cm-selectionLayer"
      }),
      ci = ID.s.highest(Hp.theme({
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
      Ii = ID.D.define({
        map: (DD, CD) => null == DD ? null : CD.mapPos(DD)
      }),
      ii = ID.F.define({
        create: () => null,
        update: (DD, CD) => (null != DD && (DD = CD.changes.mapPos(DD)), CD.effects.reduce(((DD, CD) => CD.is(Ii) ? CD.value : DD), DD))
      }),
      fi = hC.fromClass(class {
        constructor(DD) {
          this.view = DD, this.cursor = null, this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawCursor.bind(this)
          }
        }
        update(DD) {
          var CD;
          let cD = DD.state.field(ii);
          null == cD ? null != this.cursor && (null === (CD = this.cursor) || void 0 === CD || CD.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (DD.startState.field(ii) != cD || DD.docChanged || DD.geometryChanged) && this.view.requestMeasure(this.measureReq))
        }
        readPos() {
          let {
            view: DD
          } = this, CD = DD.state.field(ii), cD = null != CD && DD.coordsAtPos(CD);
          if (!cD) return null;
          let ID = DD.scrollDOM.getBoundingClientRect();
          return {
            left: cD.left - ID.left + DD.scrollDOM.scrollLeft * DD.scaleX,
            top: cD.top - ID.top + DD.scrollDOM.scrollTop * DD.scaleY,
            height: cD.bottom - cD.top
          }
        }
        drawCursor(DD) {
          if (this.cursor) {
            let {
              scaleX: CD,
              scaleY: cD
            } = this.view;
            DD ? (this.cursor.style.left = DD.left / CD + "px", this.cursor.style.top = DD.top / cD + "px", this.cursor.style.height = DD.height / cD + "px") : this.cursor.style.left = "-100000px"
          }
        }
        destroy() {
          this.cursor && this.cursor.remove()
        }
        setDropPos(DD) {
          this.view.state.field(ii) != DD && this.view.dispatch({
            effects: Ii.of(DD)
          })
        }
      }, {
        eventObservers: {
          dragover(DD) {
            this.setDropPos(this.view.posAtCoords({
              x: DD.clientX,
              y: DD.clientY
            }))
          },
          dragleave(DD) {
            DD.target != this.view.contentDOM && this.view.contentDOM.contains(DD.relatedTarget) || this.setDropPos(null)
          },
          dragend() {
            this.setDropPos(null)
          },
          drop() {
            this.setDropPos(null)
          }
        }
      });

    function bi() {
      return [ii, fi]
    }

    function Qi(DD, CD, cD, ID, pD) {
      CD.lastIndex = 0;
      for (let iD, fD = DD.iterRange(cD, ID), bD = cD; !fD.next().done; bD += fD.value.length)
        if (!fD.lineBreak)
          for (; iD = CD.exec(fD.value);) pD(bD + iD.index, iD)
    }
    class wi {
      constructor(DD) {
        const {
          regexp: CD,
          decoration: cD,
          decorate: ID,
          boundary: pD,
          maxLength: iD = 1e3
        } = DD;
        if (!CD.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
        if (this.regexp = CD, ID) this.addMatch = (DD, CD, cD, pD) => ID(pD, cD, cD + DD[0].length, DD, CD);
        else if ("function" == typeof cD) this.addMatch = (DD, CD, ID, pD) => {
          let iD = cD(DD, CD, ID);
          iD && pD(ID, ID + DD[0].length, iD)
        };
        else {
          if (!cD) throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
          this.addMatch = (DD, CD, ID, pD) => pD(ID, ID + DD[0].length, cD)
        }
        this.boundary = pD, this.maxLength = iD
      }
      createDeco(DD) {
        let CD = new ID.u,
          cD = CD.add.bind(CD);
        for (let {
            from: ID,
            to: pD
          }
          of
          function(DD, CD) {
            let cD = DD.o3;
            if (1 == cD.length && cD[0].from == DD.viewport.from && cD[0].to == DD.viewport.to) return cD;
            let ID = [];
            for (let {
                from: pD,
                to: iD
              }
              of cD) pD = Math.max(DD.state.doc.lineAt(pD).from, pD - CD), iD = Math.min(DD.state.doc.lineAt(iD).to, iD + CD), ID.length && ID[ID.length - 1].to >= pD ? ID[ID.length - 1].to = iD : ID.push({
              from: pD,
              to: iD
            });
            return ID
          }(DD, this.maxLength)) Qi(DD.state.doc, this.regexp, ID, pD, ((CD, ID) => this.addMatch(ID, DD, CD, cD)));
        return CD.finish()
      }
      updateDeco(DD, CD) {
        let cD = 1e9,
          ID = -1;
        return DD.docChanged && DD.changes.iterChanges(((CD, pD, iD, fD) => {
          fD >= DD.view.viewport.from && iD <= DD.view.viewport.to && (cD = Math.min(iD, cD), ID = Math.max(fD, ID))
        })), DD.viewportMoved || ID - cD > 1e3 ? this.createDeco(DD.view) : ID > -1 ? this.updateRange(DD.view, CD.map(DD.changes), cD, ID) : CD
      }
      updateRange(DD, CD, cD, ID) {
        for (let pD of DD.o3) {
          let iD = Math.max(pD.from, cD),
            fD = Math.min(pD.to, ID);
          if (fD >= iD) {
            let cD = DD.state.doc.lineAt(iD),
              ID = cD.to < fD ? DD.state.doc.lineAt(fD) : cD,
              bD = Math.max(pD.from, cD.from),
              QD = Math.min(pD.to, ID.to);
            if (this.boundary) {
              for (; iD > cD.from; iD--)
                if (this.boundary.test(cD.text[iD - 1 - cD.from])) {
                  bD = iD;
                  break
                } for (; fD < ID.to; fD++)
                if (this.boundary.test(ID.text[fD - ID.from])) {
                  QD = fD;
                  break
                }
            }
            let wD, SD = [],
              BD = (DD, CD, cD) => SD.push(cD.range(DD, CD));
            if (cD == ID)
              for (this.regexp.lastIndex = bD - cD.from;
                (wD = this.regexp.exec(cD.text)) && wD.index < QD - cD.from;) this.addMatch(wD, DD, wD.index + cD.from, BD);
            else Qi(DD.state.doc, this.regexp, bD, QD, ((CD, cD) => this.addMatch(cD, DD, CD, BD)));
            CD = CD.update({
              filterFrom: bD,
              filterTo: QD,
              filter: (DD, CD) => DD < bD || CD > QD,
              add: SD
            })
          }
        }
        return CD
      }
    }
    const Si = null != /x/.unicode ? "gu" : "g",
      Bi = new RegExp("[\0-\b\n-\x1f\x7f-\x9f\xad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]", Si),
      yi = {
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
    let Mi = null;
    const ti = ID.l.define({
      combine(DD) {
        let CD = (0, ID.U)(DD, {
          render: null,
          specialChars: Bi,
          addSpecialChars: null
        });
        return (CD.replaceTabs = ! function() {
          var DD;
          if (null == Mi && "undefined" != typeof document && document.body) {
            let CD = document.body.style;
            Mi = null != (null !== (DD = CD.tabSize) && void 0 !== DD ? DD : CD.MozTabSize)
          }
          return Mi || !1
        }()) && (CD.specialChars = new RegExp("\t|" + CD.specialChars.source, Si)), CD.addSpecialChars && (CD.specialChars = new RegExp(CD.specialChars.source + "|" + CD.addSpecialChars.source, Si)), CD
      }
    });

    function Zi() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [ti.of(DD), oi || (oi = hC.fromClass(class {
        constructor(DD) {
          this.view = DD, this.qI = aD.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(DD.state.facet(ti)), this.qI = this.decorator.createDeco(DD)
        }
        makeDecorator(DD) {
          return new wi({
            regexp: DD.specialChars,
            decoration: (CD, cD, pD) => {
              let {
                doc: iD
              } = cD.state, fD = (0, ID.O)(CD[0], 0);
              if (9 == fD) {
                let DD = iD.lineAt(pD),
                  CD = cD.state.tabSize,
                  fD = (0, ID.Y)(DD.text, CD, pD - DD.from);
                return aD.replace({
                  widget: new Ni((CD - fD % CD) * this.view.defaultCharacterWidth / this.view.scaleX)
                })
              }
              return this.decorationCache[fD] || (this.decorationCache[fD] = aD.replace({
                widget: new vi(DD, fD)
              }))
            },
            boundary: DD.replaceTabs ? void 0 : /[^]/
          })
        }
        update(DD) {
          let CD = DD.state.facet(ti);
          DD.startState.facet(ti) != CD ? (this.decorator = this.makeDecorator(CD), this.qI = this.decorator.createDeco(DD.view)) : this.qI = this.decorator.updateDeco(DD, this.qI)
        }
      }, {
        qI: DD => DD.qI
      }))]
    }
    let oi = null;
    class vi extends JD {
      constructor(DD, CD) {
        super(), this.options = DD, this.code = CD
      }
      eq(DD) {
        return DD.code == this.code
      }
      toDOM(DD) {
        let CD = function(DD) {
            return DD >= 32 ? "\u2022" : 10 == DD ? "\u2424" : String.fromCharCode(9216 + DD)
          }(this.code),
          cD = DD.state.phrase("Control character") + " " + (yi[this.code] || "0x" + this.code.toString(16)),
          ID = this.options.render && this.options.render(this.code, cD, CD);
        if (ID) return ID;
        let pD = document.createElement("span");
        return pD.textContent = CD, pD.title = cD, pD.setAttribute("aria-label", cD), pD.className = "cm-specialChar", pD
      }
      ignoreEvent() {
        return !1
      }
    }
    class Ni extends JD {
      constructor(DD) {
        super(), this.width = DD
      }
      eq(DD) {
        return DD.width == this.width
      }
      toDOM() {
        let DD = document.createElement("span");
        return DD.textContent = "\t", DD.className = "cm-tab", DD.style.width = this.width + "px", DD
      }
      ignoreEvent() {
        return !1
      }
    }

    function gi() {
      return mi
    }
    const Xi = aD.line({
        class: "cm-activeLine"
      }),
      mi = hC.fromClass(class {
        constructor(DD) {
          this.qI = this.getDeco(DD)
        }
        update(DD) {
          (DD.docChanged || DD.selectionSet) && (this.qI = this.getDeco(DD.view))
        }
        getDeco(DD) {
          let CD = -1,
            cD = [];
          for (let ID of DD.state.selection.df) {
            let pD = DD.lineBlockAt(ID.head);
            pD.from > CD && (cD.push(Xi.range(pD.from)), CD = pD.from)
          }
          return aD.set(cD)
        }
      }, {
        qI: DD => DD.qI
      });
    class ni extends JD {
      constructor(DD) {
        super(), this.content = DD
      }
      toDOM(DD) {
        let CD = document.createElement("span");
        return CD.className = "cm-placeholder", CD.style.pointerEvents = "none", CD.appendChild("string" == typeof this.content ? document.createTextNode(this.content) : "function" == typeof this.content ? this.content(DD) : this.content.cloneNode(!0)), CD.setAttribute("aria-hidden", "true"), CD
      }
      coordsAt(DD) {
        let CD = DD.firstChild ? dD(DD.firstChild) : [];
        if (!CD.length) return null;
        let cD = window.getComputedStyle(DD.parentNode),
          ID = uD(CD[0], "rtl" != cD.direction),
          pD = parseInt(cD.lineHeight);
        return ID.bottom - ID.top > 1.5 * pD ? {
          left: ID.left,
          right: ID.right,
          top: ID.top,
          bottom: ID.top + pD
        } : ID
      }
      ignoreEvent() {
        return !1
      }
    }

    function Oi(DD) {
      let CD = hC.fromClass(class {
        constructor(CD) {
          this.view = CD, this.placeholder = DD ? aD.set([aD.widget({
            widget: new ni(DD),
            side: 1
          }).range(0)]) : aD.none
        }
        get qI() {
          return this.view.state.doc.length ? aD.none : this.placeholder
        }
      }, {
        qI: DD => DD.qI
      });
      return "string" == typeof DD ? [CD, Hp.contentAttributes.of({
        "aria-placeholder": DD
      })] : CD
    }
    const Pi = 2e3;

    function Hi(DD, CD) {
      let cD = DD.posAtCoords({
          x: CD.clientX,
          y: CD.clientY
        }, !1),
        pD = DD.state.doc.lineAt(cD),
        iD = cD - pD.from,
        fD = iD > Pi ? -1 : iD == pD.length ? function(DD, CD) {
          let cD = DD.coordsAtPos(DD.viewport.from);
          return cD ? Math.round(Math.abs((cD.left - CD) / DD.defaultCharacterWidth)) : -1
        }(DD, CD.clientX) : (0, ID.Y)(pD.text, DD.state.tabSize, cD - pD.from);
      return {
        line: pD.number,
        col: fD,
        off: iD
      }
    }

    function Ui(DD, CD) {
      let cD = Hi(DD, CD),
        pD = DD.state.selection;
      return cD ? {
        update(DD) {
          if (DD.docChanged) {
            let CD = DD.changes.mapPos(DD.startState.doc.line(cD.line).from),
              ID = DD.state.doc.lineAt(CD);
            cD = {
              line: ID.number,
              col: cD.col,
              off: Math.min(cD.off, ID.length)
            }, pD = pD.map(DD.changes)
          }
        },
        get(CD, iD, fD) {
          let bD = Hi(DD, CD);
          if (!bD) return pD;
          let QD = function(DD, CD, cD) {
            let pD = Math.min(CD.line, cD.line),
              iD = Math.max(CD.line, cD.line),
              fD = [];
            if (CD.off > Pi || cD.off > Pi || CD.col < 0 || cD.col < 0) {
              let bD = Math.min(CD.off, cD.off),
                QD = Math.max(CD.off, cD.off);
              for (let CD = pD; CD <= iD; CD++) {
                let cD = DD.doc.line(CD);
                cD.length <= QD && fD.push(ID.i.range(cD.from + bD, cD.to + QD))
              }
            } else {
              let bD = Math.min(CD.col, cD.col),
                QD = Math.max(CD.col, cD.col);
              for (let CD = pD; CD <= iD; CD++) {
                let cD = DD.doc.line(CD),
                  pD = (0, ID.ab)(cD.text, bD, DD.tabSize, !0);
                if (pD < 0) fD.push(ID.i.cursor(cD.to));
                else {
                  let CD = (0, ID.ab)(cD.text, QD, DD.tabSize);
                  fD.push(ID.i.range(cD.from + pD, cD.from + CD))
                }
              }
            }
            return fD
          }(DD.state, cD, bD);
          return QD.length ? fD ? ID.i.create(QD.concat(pD.df)) : ID.i.create(QD) : pD
        }
      } : null
    }

    function xi(DD) {
      let CD = (null === DD || void 0 === DD ? void 0 : DD.eventFilter) || (DD => DD.altKey && 0 == DD.button);
      return Hp.mouseSelectionStyle.of(((DD, cD) => CD(cD) ? Ui(DD, cD) : null))
    }
    const qi = {
        Alt: [18, DD => !!DD.altKey],
        Control: [17, DD => !!DD.ctrlKey],
        Shift: [16, DD => !!DD.shiftKey],
        Meta: [91, DD => !!DD.metaKey]
      },
      Ji = {
        style: "cursor: crosshair"
      };

    function Ki() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [CD, cD] = qi[DD.key || "Alt"],
        ID = hC.fromClass(class {
          constructor(DD) {
            this.view = DD, this.isDown = !1
          }
          set(DD) {
            this.isDown != DD && (this.isDown = DD, this.view.update([]))
          }
        }, {
          eventObservers: {
            keydown(DD) {
              this.set(DD.keyCode == CD || cD(DD))
            },
            keyup(DD) {
              DD.keyCode != CD && cD(DD) || this.set(!1)
            },
            mousemove(DD) {
              this.set(cD(DD))
            }
          }
        });
      return [ID, Hp.contentAttributes.of((DD => {
        var CD;
        return (null === (CD = DD.plugin(ID)) || void 0 === CD ? void 0 : CD.isDown) ? Ji : null
      }))]
    }
    const ai = "-10000px";
    class Vi {
      constructor(DD, CD, cD, ID) {
        this.facet = CD, this.createTooltipView = cD, this.removeTooltipView = ID, this.input = DD.state.facet(CD), this.tooltips = this.input.filter((DD => DD));
        let pD = null;
        this.tooltipViews = this.tooltips.map((DD => pD = cD(DD, pD)))
      }
      update(DD, CD) {
        var cD;
        let ID = DD.state.facet(this.facet),
          pD = ID.filter((DD => DD));
        if (ID === this.input) {
          for (let CD of this.tooltipViews) CD.update && CD.update(DD);
          return !1
        }
        let iD = [],
          fD = CD ? [] : null;
        for (let bD = 0; bD < pD.length; bD++) {
          let cD = pD[bD],
            ID = -1;
          if (cD) {
            for (let DD = 0; DD < this.tooltips.length; DD++) {
              let CD = this.tooltips[DD];
              CD && CD.create == cD.create && (ID = DD)
            }
            if (ID < 0) iD[bD] = this.createTooltipView(cD, bD ? iD[bD - 1] : null), fD && (fD[bD] = !!cD.above);
            else {
              let cD = iD[bD] = this.tooltipViews[ID];
              fD && (fD[bD] = CD[ID]), cD.update && cD.update(DD)
            }
          }
        }
        for (let bD of this.tooltipViews) iD.indexOf(bD) < 0 && (this.removeTooltipView(bD), null === (cD = bD.destroy) || void 0 === cD || cD.call(bD));
        return CD && (fD.forEach(((DD, cD) => CD[cD] = DD)), CD.length = fD.length), this.input = ID, this.tooltips = pD, this.tooltipViews = iD, !0
      }
    }

    function zi(DD) {
      let CD = DD.dom.ownerDocument.documentElement;
      return {
        top: 0,
        left: 0,
        bottom: CD.clientHeight,
        right: CD.clientWidth
      }
    }
    const ji = ID.l.define({
        combine: DD => {
          var CD, cD, ID;
          return {
            position: OD.ios ? "absolute" : (null === (CD = DD.find((DD => DD.position))) || void 0 === CD ? void 0 : CD.position) || "fixed",
            parent: (null === (cD = DD.find((DD => DD.parent))) || void 0 === cD ? void 0 : cD.parent) || null,
            tooltipSpace: (null === (ID = DD.find((DD => DD.tooltipSpace))) || void 0 === ID ? void 0 : ID.tooltipSpace) || zi
          }
        }
      }),
      li = new WeakMap,
      Li = hC.fromClass(class {
        constructor(DD) {
          this.view = DD, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
          let CD = DD.state.facet(ji);
          this.position = CD.position, this.parent = CD.parent, this.classes = DD.themeClasses, this.createContainer(), this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this
          }, this.resizeObserver = "function" == typeof ResizeObserver ? new ResizeObserver((() => this.measureSoon())) : null, this.manager = new Vi(DD, ki, ((DD, CD) => this.createTooltip(DD, CD)), (DD => {
            this.resizeObserver && this.resizeObserver.unobserve(DD.dom), DD.dom.remove()
          })), this.above = this.manager.tooltips.map((DD => !!DD.above)), this.intersectionObserver = "function" == typeof IntersectionObserver ? new IntersectionObserver((DD => {
            Date.now() > this.lastTransaction - 50 && DD.length > 0 && DD[DD.length - 1].intersectionRatio < 1 && this.measureSoon()
          }), {
            threshold: [1]
          }) : null, this.observeIntersection(), DD.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure()
        }
        createContainer() {
          this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom
        }
        observeIntersection() {
          if (this.intersectionObserver) {
            this.intersectionObserver.disconnect();
            for (let DD of this.manager.tooltipViews) this.intersectionObserver.observe(DD.dom)
          }
        }
        measureSoon() {
          this.measureTimeout < 0 && (this.measureTimeout = setTimeout((() => {
            this.measureTimeout = -1, this.maybeMeasure()
          }), 50))
        }
        update(DD) {
          DD.transactions.length && (this.lastTransaction = Date.now());
          let CD = this.manager.update(DD, this.above);
          CD && this.observeIntersection();
          let cD = CD || DD.geometryChanged,
            ID = DD.state.facet(ji);
          if (ID.position != this.position && !this.madeAbsolute) {
            this.position = ID.position;
            for (let DD of this.manager.tooltipViews) DD.dom.style.position = this.position;
            cD = !0
          }
          if (ID.parent != this.parent) {
            this.parent && this.container.remove(), this.parent = ID.parent, this.createContainer();
            for (let DD of this.manager.tooltipViews) this.container.appendChild(DD.dom);
            cD = !0
          } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
          cD && this.maybeMeasure()
        }
        createTooltip(DD, CD) {
          let cD = DD.create(this.view),
            ID = CD ? CD.dom : null;
          if (cD.dom.classList.add("cm-tooltip"), DD.arrow && !cD.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
            let DD = document.createElement("div");
            DD.className = "cm-tooltip-arrow", cD.dom.appendChild(DD)
          }
          return cD.dom.style.position = this.position, cD.dom.style.top = ai, cD.dom.style.left = "0px", this.container.insertBefore(cD.dom, ID), cD.mount && cD.mount(this.view), this.resizeObserver && this.resizeObserver.observe(cD.dom), cD
        }
        destroy() {
          var DD, CD, cD;
          this.view.win.removeEventListener("resize", this.measureSoon);
          for (let ID of this.manager.tooltipViews) ID.dom.remove(), null === (DD = ID.destroy) || void 0 === DD || DD.call(ID);
          this.parent && this.container.remove(), null === (CD = this.resizeObserver) || void 0 === CD || CD.disconnect(), null === (cD = this.intersectionObserver) || void 0 === cD || cD.disconnect(), clearTimeout(this.measureTimeout)
        }
        readMeasure() {
          let DD = 1,
            CD = 1,
            cD = !1;
          if ("fixed" == this.position && this.manager.tooltipViews.length) {
            let {
              dom: DD
            } = this.manager.tooltipViews[0];
            if (OD.safari) {
              let CD = DD.getBoundingClientRect();
              cD = Math.abs(CD.top + 1e4) > 1 || Math.abs(CD.left) > 1
            } else cD = !!DD.offsetParent && DD.offsetParent != this.container.ownerDocument.body
          }
          if (cD || "absolute" == this.position)
            if (this.parent) {
              let cD = this.parent.getBoundingClientRect();
              cD.width && cD.height && (DD = cD.width / this.parent.offsetWidth, CD = cD.height / this.parent.offsetHeight)
            } else({
              scaleX: DD,
              scaleY: CD
            } = this.view.viewState);
          let ID = this.view.scrollDOM.getBoundingClientRect(),
            pD = bc(this.view);
          return {
            visible: {
              left: ID.left + pD.left,
              top: ID.top + pD.top,
              right: ID.right - pD.right,
              bottom: ID.bottom - pD.bottom
            },
            parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
            pos: this.manager.tooltips.map(((DD, CD) => {
              let cD = this.manager.tooltipViews[CD];
              return cD.getCoords ? cD.getCoords(DD.pos) : this.view.coordsAtPos(DD.pos)
            })),
            size: this.manager.tooltipViews.map((DD => {
              let {
                dom: CD
              } = DD;
              return CD.getBoundingClientRect()
            })),
            space: this.view.state.facet(ji).tooltipSpace(this.view),
            scaleX: DD,
            scaleY: CD,
            makeAbsolute: cD
          }
        }
        writeMeasure(DD) {
          var CD;
          if (DD.makeAbsolute) {
            this.madeAbsolute = !0, this.position = "absolute";
            for (let DD of this.manager.tooltipViews) DD.dom.style.position = "absolute"
          }
          let {
            visible: cD,
            space: ID,
            scaleX: pD,
            scaleY: iD
          } = DD, fD = [];
          for (let bD = 0; bD < this.manager.tooltips.length; bD++) {
            let QD = this.manager.tooltips[bD],
              wD = this.manager.tooltipViews[bD],
              {
                dom: SD
              } = wD,
              BD = DD.pos[bD],
              yD = DD.size[bD];
            if (!BD || !1 !== QD.clip && (BD.bottom <= Math.max(cD.top, ID.top) || BD.top >= Math.min(cD.bottom, ID.bottom) || BD.right < Math.max(cD.left, ID.left) - .1 || BD.left > Math.min(cD.right, ID.right) + .1)) {
              SD.style.top = ai;
              continue
            }
            let MD = QD.arrow ? wD.dom.querySelector(".cm-tooltip-arrow") : null,
              tD = MD ? 7 : 0,
              ZD = yD.right - yD.left,
              oD = null !== (CD = li.get(wD)) && void 0 !== CD ? CD : yD.bottom - yD.top,
              vD = wD.offset || Ri,
              ND = this.view.textDirection == wC.LTR,
              gD = yD.width > ID.right - ID.left ? ND ? ID.left : ID.right - yD.width : ND ? Math.max(ID.left, Math.min(BD.left - (MD ? 14 : 0) + vD.x, ID.right - ZD)) : Math.min(Math.max(ID.left, BD.left - ZD + (MD ? 14 : 0) - vD.x), ID.right - ZD),
              XD = this.above[bD];
            !QD.strictSide && (XD ? BD.top - oD - tD - vD.y < ID.top : BD.bottom + oD + tD + vD.y > ID.bottom) && XD == ID.bottom - BD.bottom > BD.top - ID.top && (XD = this.above[bD] = !XD);
            let mD = (XD ? BD.top - ID.top : ID.bottom - BD.bottom) - tD;
            if (mD < oD && !1 !== wD.resize) {
              if (mD < this.view.defaultLineHeight) {
                SD.style.top = ai;
                continue
              }
              li.set(wD, oD), SD.style.height = (oD = mD) / iD + "px"
            } else SD.style.height && (SD.style.height = "");
            let nD = XD ? BD.top - oD - tD - vD.y : BD.bottom + tD + vD.y,
              OD = gD + ZD;
            if (!0 !== wD.overlap)
              for (let DD of fD) DD.left < OD && DD.right > gD && DD.top < nD + oD && DD.bottom > nD && (nD = XD ? DD.top - oD - 2 - tD : DD.bottom + tD + 2);
            if ("absolute" == this.position ? (SD.style.top = (nD - DD.parent.top) / iD + "px", Ti(SD, (gD - DD.parent.left) / pD)) : (SD.style.top = nD / iD + "px", Ti(SD, gD / pD)), MD) {
              let DD = BD.left + (ND ? vD.x : -vD.x) - (gD + 14 - 7);
              MD.style.left = DD / pD + "px"
            }!0 !== wD.overlap && fD.push({
              left: gD,
              top: nD,
              right: OD,
              bottom: nD + oD
            }), SD.classList.toggle("cm-tooltip-above", XD), SD.classList.toggle("cm-tooltip-below", !XD), wD.positioned && wD.positioned(DD.space)
          }
        }
        maybeMeasure() {
          if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
            for (let DD of this.manager.tooltipViews) DD.dom.style.top = ai
        }
      }, {
        eventObservers: {
          scroll() {
            this.maybeMeasure()
          }
        }
      });

    function Ti(DD, CD) {
      let cD = parseInt(DD.style.left, 10);
      (isNaN(cD) || Math.abs(CD - cD) > 1) && (DD.style.left = CD + "px")
    }
    const Gi = Hp.baseTheme({
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
      Ri = {
        x: 0,
        y: 0
      },
      ki = ID.l.define({
        enables: [Li, Gi]
      }),
      di = ID.l.define({
        combine: DD => DD.reduce(((DD, CD) => DD.concat(CD)), [])
      });
    class Yi {
      static create(DD) {
        return new Yi(DD)
      }
      constructor(DD) {
        this.view = DD, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new Vi(DD, di, ((DD, CD) => this.createHostedView(DD, CD)), (DD => DD.dom.remove()))
      }
      createHostedView(DD, CD) {
        let cD = DD.create(this.view);
        return cD.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(cD.dom, CD ? CD.dom.nextSibling : this.dom.firstChild), this.mounted && cD.mount && cD.mount(this.view), cD
      }
      mount(DD) {
        for (let CD of this.manager.tooltipViews) CD.mount && CD.mount(DD);
        this.mounted = !0
      }
      positioned(DD) {
        for (let CD of this.manager.tooltipViews) CD.positioned && CD.positioned(DD)
      }
      update(DD) {
        this.manager.update(DD)
      }
      destroy() {
        var DD;
        for (let CD of this.manager.tooltipViews) null === (DD = CD.destroy) || void 0 === DD || DD.call(CD)
      }
      passProp(DD) {
        let CD;
        for (let cD of this.manager.tooltipViews) {
          let ID = cD[DD];
          if (void 0 !== ID)
            if (void 0 === CD) CD = ID;
            else if (CD !== ID) return
        }
        return CD
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
    const Wi = ki.compute([di], (DD => {
      let CD = DD.facet(di);
      return 0 === CD.length ? null : {
        pos: Math.min(...CD.map((DD => DD.pos))),
        end: Math.max(...CD.map((DD => {
          var CD;
          return null !== (CD = DD.end) && void 0 !== CD ? CD : DD.pos
        }))),
        create: Yi.create,
        above: CD[0].above,
        arrow: CD.some((DD => DD.arrow))
      }
    }));
    class si {
      constructor(DD, CD, cD, ID, pD) {
        this.view = DD, this.source = CD, this.field = cD, this.setHover = ID, this.hoverTime = pD, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
          x: 0,
          y: 0,
          target: DD.dom,
          time: 0
        }, this.checkHover = this.checkHover.bind(this), DD.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), DD.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this))
      }
      update() {
        this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout((() => this.startHover()), 20))
      }
      get active() {
        return this.view.state.field(this.field)
      }
      checkHover() {
        if (this.hoverTimeout = -1, this.active.length) return;
        let DD = Date.now() - this.lastMove.time;
        DD < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - DD) : this.startHover()
      }
      startHover() {
        clearTimeout(this.restartTimeout);
        let {
          view: DD,
          lastMove: CD
        } = this, cD = DD.docView.tile.nearest(CD.target);
        if (!cD) return;
        let ID, pD = 1;
        if (cD.isWidget()) ID = cD.posAtStart;
        else {
          if (ID = DD.posAtCoords(CD), null == ID) return;
          let cD = DD.coordsAtPos(ID);
          if (!cD || CD.y < cD.top || CD.y > cD.bottom || CD.x < cD.left - DD.defaultCharacterWidth || CD.x > cD.right + DD.defaultCharacterWidth) return;
          let iD = DD.bidiSpans(DD.state.doc.lineAt(ID)).find((DD => DD.from <= ID && DD.to >= ID)),
            fD = iD && iD.dir == wC.RTL ? -1 : 1;
          pD = CD.x < cD.left ? -fD : fD
        }
        let iD = this.source(DD, ID, pD);
        if (null === iD || void 0 === iD ? void 0 : iD.then) {
          let CD = this.pending = {
            pos: ID
          };
          iD.then((cD => {
            this.pending == CD && (this.pending = null, !cD || Array.isArray(cD) && !cD.length || DD.dispatch({
              effects: this.setHover.of(Array.isArray(cD) ? cD : [cD])
            }))
          }), (CD => sC(DD.state, CD, "hover tooltip")))
        } else !iD || Array.isArray(iD) && !iD.length || DD.dispatch({
          effects: this.setHover.of(Array.isArray(iD) ? iD : [iD])
        })
      }
      get tooltip() {
        let DD = this.view.plugin(Li),
          CD = DD ? DD.manager.tooltips.findIndex((DD => DD.create == Yi.create)) : -1;
        return CD > -1 ? DD.manager.tooltipViews[CD] : null
      }
      mousemove(DD) {
        var CD, cD;
        this.lastMove = {
          x: DD.clientX,
          y: DD.clientY,
          target: DD.target,
          time: Date.now()
        }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
        let {
          active: ID,
          tooltip: pD
        } = this;
        if (ID.length && pD && ! function(DD, CD) {
            let cD, {
              left: ID,
              right: pD,
              top: iD,
              bottom: fD
            } = DD.getBoundingClientRect();
            if (cD = DD.querySelector(".cm-tooltip-arrow")) {
              let DD = cD.getBoundingClientRect();
              iD = Math.min(DD.top, iD), fD = Math.max(DD.bottom, fD)
            }
            return CD.clientX >= ID - Ei && CD.clientX <= pD + Ei && CD.clientY >= iD - Ei && CD.clientY <= fD + Ei
          }(pD.dom, DD) || this.pending) {
          let {
            pos: pD
          } = ID[0] || this.pending, iD = null !== (cD = null === (CD = ID[0]) || void 0 === CD ? void 0 : CD.end) && void 0 !== cD ? cD : pD;
          (pD == iD ? this.view.posAtCoords(this.lastMove) == pD : function(DD, CD, cD, ID, pD) {
            let iD = DD.scrollDOM.getBoundingClientRect(),
              fD = DD.documentTop + DD.documentPadding.top + DD.contentHeight;
            if (iD.left > ID || iD.right < ID || iD.top > pD || Math.min(iD.bottom, fD) < pD) return !1;
            let bD = DD.posAtCoords({
              x: ID,
              y: pD
            }, !1);
            return bD >= CD && bD <= cD
          }(this.view, pD, iD, DD.clientX, DD.clientY)) || (this.view.dispatch({
            effects: this.setHover.of([])
          }), this.pending = null)
        }
      }
      mouseleave(DD) {
        clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
        let {
          active: CD
        } = this;
        if (CD.length) {
          let {
            tooltip: CD
          } = this;
          CD && CD.dom.contains(DD.relatedTarget) ? this.watchTooltipLeave(CD.dom) : this.view.dispatch({
            effects: this.setHover.of([])
          })
        }
      }
      watchTooltipLeave(DD) {
        let CD = cD => {
          DD.removeEventListener("mouseleave", CD), this.active.length && !this.view.dom.contains(cD.relatedTarget) && this.view.dispatch({
            effects: this.setHover.of([])
          })
        };
        DD.addEventListener("mouseleave", CD)
      }
      destroy() {
        clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove)
      }
    }
    const Ei = 4;

    function ei(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        cD = ID.D.define(),
        pD = ID.F.define({
          create: () => [],
          update(DD, pD) {
            if (DD.length && (CD.hideOnChange && (pD.docChanged || pD.selection) ? DD = [] : CD.hideOn && (DD = DD.filter((DD => !CD.hideOn(pD, DD)))), pD.docChanged)) {
              let CD = [];
              for (let cD of DD) {
                let DD = pD.changes.mapPos(cD.pos, -1, ID.o.TrackDel);
                if (null != DD) {
                  let ID = Object.assign(Object.create(null), cD);
                  ID.pos = DD, null != ID.end && (ID.end = pD.changes.mapPos(ID.end)), CD.push(ID)
                }
              }
              DD = CD
            }
            for (let CD of pD.effects) CD.is(cD) && (DD = CD.value), CD.is(ri) && (DD = []);
            return DD
          },
          provide: DD => di.from(DD)
        });
      return {
        active: pD,
        extension: [pD, hC.define((ID => new si(ID, DD, pD, cD, CD.hoverTime || 300))), Wi]
      }
    }

    function ui(DD, CD) {
      let cD = DD.plugin(Li);
      if (!cD) return null;
      let ID = cD.manager.tooltips.indexOf(CD);
      return ID < 0 ? null : cD.manager.tooltipViews[ID]
    }
    const ri = ID.D.define();
    const Ai = ID.l.define({
      combine(DD) {
        let CD, cD;
        for (let ID of DD) CD = CD || ID.topContainer, cD = cD || ID.bottomContainer;
        return {
          topContainer: CD,
          bottomContainer: cD
        }
      }
    });

    function Fi(DD, CD) {
      let cD = DD.plugin(Df),
        ID = cD ? cD.specs.indexOf(CD) : -1;
      return ID > -1 ? cD.panels[ID] : null
    }
    const Df = hC.fromClass(class {
      constructor(DD) {
        this.input = DD.state.facet(pf), this.specs = this.input.filter((DD => DD)), this.panels = this.specs.map((CD => CD(DD)));
        let CD = DD.state.facet(Ai);
        this.top = new Cf(DD, !0, CD.topContainer), this.bottom = new Cf(DD, !1, CD.bottomContainer), this.top.sync(this.panels.filter((DD => DD.top))), this.bottom.sync(this.panels.filter((DD => !DD.top)));
        for (let cD of this.panels) cD.dom.classList.add("cm-panel"), cD.mount && cD.mount()
      }
      update(DD) {
        let CD = DD.state.facet(Ai);
        this.top.container != CD.topContainer && (this.top.sync([]), this.top = new Cf(DD.view, !0, CD.topContainer)), this.bottom.container != CD.bottomContainer && (this.bottom.sync([]), this.bottom = new Cf(DD.view, !1, CD.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
        let cD = DD.state.facet(pf);
        if (cD != this.input) {
          let CD = cD.filter((DD => DD)),
            ID = [],
            pD = [],
            iD = [],
            fD = [];
          for (let cD of CD) {
            let CD, bD = this.specs.indexOf(cD);
            bD < 0 ? (CD = cD(DD.view), fD.push(CD)) : (CD = this.panels[bD], CD.update && CD.update(DD)), ID.push(CD), (CD.top ? pD : iD).push(CD)
          }
          this.specs = CD, this.panels = ID, this.top.sync(pD), this.bottom.sync(iD);
          for (let DD of fD) DD.dom.classList.add("cm-panel"), DD.mount && DD.mount()
        } else
          for (let ID of this.panels) ID.update && ID.update(DD)
      }
      destroy() {
        this.top.sync([]), this.bottom.sync([])
      }
    }, {
      provide: DD => Hp.scrollMargins.of((CD => {
        let cD = CD.plugin(DD);
        return cD && {
          top: cD.top.scrollMargin(),
          bottom: cD.bottom.scrollMargin()
        }
      }))
    });
    class Cf {
      constructor(DD, CD, cD) {
        this.view = DD, this.top = CD, this.container = cD, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses()
      }
      sync(DD) {
        for (let CD of this.panels) CD.destroy && DD.indexOf(CD) < 0 && CD.destroy();
        this.panels = DD, this.syncDOM()
      }
      syncDOM() {
        if (0 == this.panels.length) return void(this.dom && (this.dom.remove(), this.dom = void 0));
        if (!this.dom) {
          this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
          let DD = this.container || this.view.dom;
          DD.insertBefore(this.dom, this.top ? DD.firstChild : null)
        }
        let DD = this.dom.firstChild;
        for (let CD of this.panels)
          if (CD.dom.parentNode == this.dom) {
            for (; DD != CD.dom;) DD = If(DD);
            DD = DD.nextSibling
          } else this.dom.insertBefore(CD.dom, DD);
        for (; DD;) DD = If(DD)
      }
      scrollMargin() {
        return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top)
      }
      syncClasses() {
        if (this.container && this.classes != this.view.themeClasses) {
          for (let DD of this.classes.split(" ")) DD && this.container.classList.remove(DD);
          for (let DD of (this.classes = this.view.themeClasses).split(" ")) DD && this.container.classList.add(DD)
        }
      }
    }

    function If(DD) {
      let CD = DD.nextSibling;
      return DD.remove(), CD
    }
    const pf = ID.l.define({
      enables: Df
    });

    function ff(DD, CD) {
      let cD, pD = new Promise((DD => cD = DD)),
        iD = DD => function(DD, CD, cD) {
          let ID = CD.content ? CD.content(DD, (() => fD(null))) : null;
          if (!ID) {
            if (ID = (0, BD.b)("form"), CD.input) {
              let DD = (0, BD.b)("input", CD.input);
              /^(text|password|number|email|tel|url)$/.test(DD.type) && DD.classList.add("cm-textfield"), DD.name || (DD.name = "input"), ID.appendChild((0, BD.b)("label", (CD.label || "") + ": ", DD))
            } else ID.appendChild(document.createTextNode(CD.label || ""));
            ID.appendChild(document.createTextNode(" ")), ID.appendChild((0, BD.b)("button", {
              class: "cm-button",
              type: "submit"
            }, CD.submitLabel || "OK"))
          }
          let pD = "FORM" == ID.nodeName ? [ID] : ID.querySelectorAll("form");
          for (let bD = 0; bD < pD.length; bD++) {
            let DD = pD[bD];
            DD.addEventListener("keydown", (CD => {
              27 == CD.keyCode ? (CD.preventDefault(), fD(null)) : 13 == CD.keyCode && (CD.preventDefault(), fD(DD))
            })), DD.addEventListener("submit", (CD => {
              CD.preventDefault(), fD(DD)
            }))
          }
          let iD = (0, BD.b)("div", ID, (0, BD.b)("button", {
            onclick: () => fD(null),
            "aria-label": DD.state.phrase("close"),
            class: "cm-dialog-close",
            type: "button"
          }, ["\xd7"]));
          CD.class && (iD.className = CD.class);

          function fD(CD) {
            iD.contains(iD.ownerDocument.activeElement) && DD.focus(), cD(CD)
          }
          return iD.classList.add("cm-dialog"), {
            dom: iD,
            top: CD.top,
            mount: () => {
              if (CD.focus) {
                let DD;
                DD = "string" == typeof CD.focus ? ID.querySelector(CD.focus) : ID.querySelector("input") || ID.querySelector("button"), DD && "select" in DD ? DD.select() : DD && "focus" in DD && DD.focus()
              }
            }
          }
        }(DD, CD, cD);
      DD.state.field(bf, !1) ? DD.dispatch({
        effects: Qf.of(iD)
      }) : DD.dispatch({
        effects: ID.D.appendConfig.of(bf.init((() => [iD])))
      });
      let fD = wf.of(iD);
      return {
        close: fD,
        result: pD.then((CD => ((DD.win.queueMicrotask || (CD => DD.win.setTimeout(CD, 10)))((() => {
          DD.state.field(bf).indexOf(iD) > -1 && DD.dispatch({
            effects: fD
          })
        })), CD)))
      }
    }
    const bf = ID.F.define({
        create: () => [],
        update(DD, CD) {
          for (let cD of CD.effects) cD.is(Qf) ? DD = [cD.value].concat(DD) : cD.is(wf) && (DD = DD.filter((DD => DD != cD.value)));
          return DD
        },
        provide: DD => pf.computeN([DD], (CD => CD.field(DD)))
      }),
      Qf = ID.D.define(),
      wf = ID.D.define();
    class Sf extends ID.B {
      compare(DD) {
        return this == DD || this.constructor == DD.constructor && this.eq(DD)
      }
      eq(DD) {
        return !1
      }
      destroy(DD) {}
    }
    Sf.prototype.elementClass = "", Sf.prototype.toDOM = void 0, Sf.prototype.mapMode = ID.o.TrackBefore, Sf.prototype.startSide = Sf.prototype.endSide = -1, Sf.prototype.point = !0;
    const Bf = ID.l.define(),
      yf = ID.l.define(),
      Mf = {
        class: "",
        renderEmptyElements: !1,
        elementStyle: "",
        markers: () => ID.x.empty,
        lineMarker: () => null,
        widgetMarker: () => null,
        lineMarkerChange: null,
        initialSpacer: null,
        updateSpacer: null,
        domEventHandlers: {},
        side: "before"
      },
      tf = ID.l.define();

    function Zf(DD) {
      return [vf(), tf.of({
        ...Mf,
        ...DD
      })]
    }
    const of = ID.l.define({
      combine: DD => DD.some((DD => DD))
    });

    function vf(DD) {
      let CD = [Nf];
      return DD && !1 === DD.fixed && CD.push(of.of(!0)), CD
    }
    const Nf = hC.fromClass(class {
      constructor(DD) {
        this.view = DD, this.domAfter = null, this.prevViewport = DD.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = DD.state.facet(tf).map((CD => new nf(DD, CD))), this.fixed = !DD.state.facet(of);
        for (let CD of this.gutters) "after" == CD.config.side ? this.getDOMAfter().appendChild(CD.dom) : this.dom.appendChild(CD.dom);
        this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), DD.scrollDOM.insertBefore(this.dom, DD.contentDOM)
      }
      getDOMAfter() {
        return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter
      }
      update(DD) {
        if (this.updateGutters(DD)) {
          let CD = this.prevViewport,
            cD = DD.view.viewport,
            ID = Math.min(CD.to, cD.to) - Math.max(CD.from, cD.from);
          this.syncGutters(ID < .8 * (cD.to - cD.from))
        }
        if (DD.geometryChanged) {
          let DD = this.view.contentHeight / this.view.scaleY + "px";
          this.dom.style.minHeight = DD, this.domAfter && (this.domAfter.style.minHeight = DD)
        }
        this.view.state.facet(of) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = DD.view.viewport
      }
      syncGutters(DD) {
        let CD = this.dom.nextSibling;
        DD && (this.dom.remove(), this.domAfter && this.domAfter.remove());
        let cD = ID.x.iter(this.view.state.facet(Bf), this.view.viewport.from),
          pD = [],
          iD = this.gutters.map((DD => new mf(DD, this.view.viewport, -this.view.documentPadding.top)));
        for (let ID of this.view.viewportLineBlocks)
          if (pD.length && (pD = []), Array.isArray(ID.type)) {
            let DD = !0;
            for (let CD of ID.type)
              if (CD.type == KD.Text && DD) {
                Xf(cD, pD, CD.from);
                for (let DD of iD) DD.line(this.view, CD, pD);
                DD = !1
              } else if (CD.widget)
              for (let DD of iD) DD.widget(this.view, CD)
          } else if (ID.type == KD.Text) {
          Xf(cD, pD, ID.from);
          for (let DD of iD) DD.line(this.view, ID, pD)
        } else if (ID.widget)
          for (let DD of iD) DD.widget(this.view, ID);
        for (let ID of iD) ID.finish();
        DD && (this.view.scrollDOM.insertBefore(this.dom, CD), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter))
      }
      updateGutters(DD) {
        let CD = DD.startState.facet(tf),
          cD = DD.state.facet(tf),
          pD = DD.docChanged || DD.heightChanged || DD.viewportChanged || !ID.x.eq(DD.startState.facet(Bf), DD.state.facet(Bf), DD.view.viewport.from, DD.view.viewport.to);
        if (CD == cD)
          for (let ID of this.gutters) ID.update(DD) && (pD = !0);
        else {
          pD = !0;
          let ID = [];
          for (let pD of cD) {
            let cD = CD.indexOf(pD);
            cD < 0 ? ID.push(new nf(this.view, pD)) : (this.gutters[cD].update(DD), ID.push(this.gutters[cD]))
          }
          for (let DD of this.gutters) DD.dom.remove(), ID.indexOf(DD) < 0 && DD.destroy();
          for (let DD of ID) "after" == DD.config.side ? this.getDOMAfter().appendChild(DD.dom) : this.dom.appendChild(DD.dom);
          this.gutters = ID
        }
        return pD
      }
      destroy() {
        for (let DD of this.gutters) DD.destroy();
        this.dom.remove(), this.domAfter && this.domAfter.remove()
      }
    }, {
      provide: DD => Hp.scrollMargins.of((CD => {
        let cD = CD.plugin(DD);
        if (!cD || 0 == cD.gutters.length || !cD.fixed) return null;
        let ID = cD.dom.offsetWidth * CD.scaleX,
          pD = cD.domAfter ? cD.domAfter.offsetWidth * CD.scaleX : 0;
        return CD.textDirection == wC.LTR ? {
          left: ID,
          right: pD
        } : {
          right: ID,
          left: pD
        }
      }))
    });

    function gf(DD) {
      return Array.isArray(DD) ? DD : [DD]
    }

    function Xf(DD, CD, cD) {
      for (; DD.value && DD.from <= cD;) DD.from == cD && CD.push(DD.value), DD.next()
    }
    class mf {
      constructor(DD, CD, cD) {
        this.gutter = DD, this.height = cD, this.i = 0, this.cursor = ID.x.iter(DD.markers, CD.from)
      }
      addElement(DD, CD, cD) {
        let {
          gutter: ID
        } = this, pD = (CD.top - this.height) / DD.scaleY, iD = CD.height / DD.scaleY;
        if (this.i == ID.elements.length) {
          let CD = new Of(DD, iD, pD, cD);
          ID.elements.push(CD), ID.dom.appendChild(CD.dom)
        } else ID.elements[this.i].update(DD, iD, pD, cD);
        this.height = CD.bottom, this.i++
      }
      line(DD, CD, cD) {
        let ID = [];
        Xf(this.cursor, ID, CD.from), cD.length && (ID = ID.concat(cD));
        let pD = this.gutter.config.lineMarker(DD, CD, ID);
        pD && ID.unshift(pD);
        let iD = this.gutter;
        (0 != ID.length || iD.config.renderEmptyElements) && this.addElement(DD, CD, ID)
      }
      widget(DD, CD) {
        let cD = this.gutter.config.widgetMarker(DD, CD.widget, CD),
          ID = cD ? [cD] : null;
        for (let pD of DD.state.facet(yf)) {
          let cD = pD(DD, CD.widget, CD);
          cD && (ID || (ID = [])).push(cD)
        }
        ID && this.addElement(DD, CD, ID)
      }
      finish() {
        let DD = this.gutter;
        for (; DD.elements.length > this.i;) {
          let CD = DD.elements.pop();
          DD.dom.removeChild(CD.dom), CD.destroy()
        }
      }
    }
    class nf {
      constructor(DD, CD) {
        this.view = DD, this.config = CD, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
        for (let cD in CD.domEventHandlers) this.dom.addEventListener(cD, (ID => {
          let pD, iD = ID.target;
          if (iD != this.dom && this.dom.contains(iD)) {
            for (; iD.parentNode != this.dom;) iD = iD.parentNode;
            let DD = iD.getBoundingClientRect();
            pD = (DD.top + DD.bottom) / 2
          } else pD = ID.clientY;
          let fD = DD.lineBlockAtHeight(pD - DD.documentTop);
          CD.domEventHandlers[cD](DD, fD, ID) && ID.preventDefault()
        }));
        this.markers = gf(CD.markers(DD)), CD.initialSpacer && (this.spacer = new Of(DD, 0, 0, [CD.initialSpacer(DD)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none")
      }
      update(DD) {
        let CD = this.markers;
        if (this.markers = gf(this.config.markers(DD.view)), this.spacer && this.config.updateSpacer) {
          let CD = this.config.updateSpacer(this.spacer.markers[0], DD);
          CD != this.spacer.markers[0] && this.spacer.update(DD.view, 0, 0, [CD])
        }
        let cD = DD.view.viewport;
        return !ID.x.eq(this.markers, CD, cD.from, cD.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(DD)
      }
      destroy() {
        for (let DD of this.elements) DD.destroy()
      }
    }
    class Of {
      constructor(DD, CD, cD, ID) {
        this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(DD, CD, cD, ID)
      }
      update(DD, CD, cD, ID) {
        this.height != CD && (this.height = CD, this.dom.style.height = CD + "px"), this.above != cD && (this.dom.style.marginTop = (this.above = cD) ? cD + "px" : ""),
          function(DD, CD) {
            if (DD.length != CD.length) return !1;
            for (let cD = 0; cD < DD.length; cD++)
              if (!DD[cD].compare(CD[cD])) return !1;
            return !0
          }(this.markers, ID) || this.setMarkers(DD, ID)
      }
      setMarkers(DD, CD) {
        let cD = "cm-gutterElement",
          ID = this.dom.firstChild;
        for (let pD = 0, iD = 0;;) {
          let fD = iD,
            bD = pD < CD.length ? CD[pD++] : null,
            QD = !1;
          if (bD) {
            let DD = bD.elementClass;
            DD && (cD += " " + DD);
            for (let CD = iD; CD < this.markers.length; CD++)
              if (this.markers[CD].compare(bD)) {
                fD = CD, QD = !0;
                break
              }
          } else fD = this.markers.length;
          for (; iD < fD;) {
            let DD = this.markers[iD++];
            if (DD.toDOM) {
              DD.destroy(ID);
              let CD = ID.nextSibling;
              ID.remove(), ID = CD
            }
          }
          if (!bD) break;
          bD.toDOM && (QD ? ID = ID.nextSibling : this.dom.insertBefore(bD.toDOM(DD), ID)), QD && iD++
        }
        this.dom.className = cD, this.markers = CD
      }
      destroy() {
        this.setMarkers(null, [])
      }
    }
    const Pf = ID.l.define(),
      Hf = ID.l.define(),
      Uf = ID.l.define({
        combine: DD => (0, ID.U)(DD, {
          formatNumber: String,
          domEventHandlers: {}
        }, {
          domEventHandlers(DD, CD) {
            let cD = Object.assign({}, DD);
            for (let ID in CD) {
              let DD = cD[ID],
                pD = CD[ID];
              cD[ID] = DD ? (CD, cD, ID) => DD(CD, cD, ID) || pD(CD, cD, ID) : pD
            }
            return cD
          }
        })
      });
    class xf extends Sf {
      constructor(DD) {
        super(), this.number = DD
      }
      eq(DD) {
        return this.number == DD.number
      }
      toDOM() {
        return document.createTextNode(this.number)
      }
    }

    function qf(DD, CD) {
      return DD.state.facet(Uf).formatNumber(CD, DD.state)
    }
    const Jf = tf.compute([Uf], (DD => ({
      class: "cm-lineNumbers",
      renderEmptyElements: !1,
      markers: DD => DD.state.facet(Pf),
      lineMarker: (DD, CD, cD) => cD.some((DD => DD.toDOM)) ? null : new xf(qf(DD, DD.state.doc.lineAt(CD.from).number)),
      widgetMarker: (DD, CD, cD) => {
        for (let ID of DD.state.facet(Hf)) {
          let pD = ID(DD, CD, cD);
          if (pD) return pD
        }
        return null
      },
      lineMarkerChange: DD => DD.startState.facet(Uf) != DD.state.facet(Uf),
      initialSpacer: DD => new xf(qf(DD, af(DD.state.doc.lines))),
      updateSpacer(DD, CD) {
        let cD = qf(CD.view, af(CD.view.state.doc.lines));
        return cD == DD.number ? DD : new xf(cD)
      },
      domEventHandlers: DD.facet(Uf).domEventHandlers,
      side: "before"
    })));

    function Kf() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Uf.of(DD), vf(), Jf]
    }

    function af(DD) {
      let CD = 9;
      for (; CD < DD;) CD = 10 * CD + 9;
      return CD
    }
    const Vf = new class extends Sf {
        constructor() {
          super(...arguments), this.elementClass = "cm-activeLineGutter"
        }
      },
      zf = Bf.compute(["selection"], (DD => {
        let CD = [],
          cD = -1;
        for (let ID of DD.selection.df) {
          let pD = DD.doc.lineAt(ID.head).from;
          pD > cD && (cD = pD, CD.push(Vf.range(pD)))
        }
        return ID.x.of(CD)
      }));

    function jf() {
      return zf
    }
  },
  40403: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => ID,
      f: () => MD,
      g: () => fD,
      j: () => SD,
      m: () => wD,
      q: () => VD,
      s: () => jD,
      t: () => zD,
      x: () => tD
    });
    const ID = 1024;
    let pD = 0;
    class iD {
      constructor(DD, CD) {
        this.from = DD, this.to = CD
      }
    }
    class fD {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.id = pD++, this.perNode = !!DD.perNode, this.deserialize = DD.deserialize || (() => {
          throw new Error("This node type doesn't define a deserialize function")
        }), this.combine = DD.combine || null
      }
      add(DD) {
        if (this.perNode) throw new RangeError("Can't add per-node props to node types");
        return "function" != typeof DD && (DD = wD.match(DD)), CD => {
          let cD = DD(CD);
          return void 0 === cD ? null : [this, cD]
        }
      }
    }
    fD.closedBy = new fD({
      deserialize: DD => DD.split(" ")
    }), fD.openedBy = new fD({
      deserialize: DD => DD.split(" ")
    }), fD.group = new fD({
      deserialize: DD => DD.split(" ")
    }), fD.isolate = new fD({
      deserialize: DD => {
        if (DD && "rtl" != DD && "ltr" != DD && "auto" != DD) throw new RangeError("Invalid value for isolate: " + DD);
        return DD || "auto"
      }
    }), fD.contextHash = new fD({
      perNode: !0
    }), fD.lookAhead = new fD({
      perNode: !0
    }), fD.mounted = new fD({
      perNode: !0
    });
    class bD {
      constructor(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this.tree = DD, this.overlay = CD, this.parser = cD, this.bracketed = ID
      }
      static get(DD) {
        return DD && DD.props && DD.props[fD.mounted.id]
      }
    }
    const QD = Object.create(null);
    class wD {
      constructor(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.name = DD, this.props = CD, this.id = cD, this.flags = ID
      }
      static define(DD) {
        let CD = DD.props && DD.props.length ? Object.create(null) : QD,
          cD = (DD.top ? 1 : 0) | (DD.skipped ? 2 : 0) | (DD.error ? 4 : 0) | (null == DD.name ? 8 : 0),
          ID = new wD(DD.name || "", CD, DD.id, cD);
        if (DD.props)
          for (let pD of DD.props)
            if (Array.isArray(pD) || (pD = pD(ID)), pD) {
              if (pD[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
              CD[pD[0].id] = pD[1]
            } return ID
      }
      prop(DD) {
        return this.props[DD.id]
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
      is(DD) {
        if ("string" == typeof DD) {
          if (this.name == DD) return !0;
          let CD = this.prop(fD.group);
          return !!CD && CD.indexOf(DD) > -1
        }
        return this.id == DD
      }
      static match(DD) {
        let CD = Object.create(null);
        for (let cD in DD)
          for (let ID of cD.split(" ")) CD[ID] = DD[cD];
        return DD => {
          for (let cD = DD.prop(fD.group), ID = -1; ID < (cD ? cD.length : 0); ID++) {
            let pD = CD[ID < 0 ? DD.name : cD[ID]];
            if (pD) return pD
          }
        }
      }
    }
    wD.none = new wD("", Object.create(null), 0, 8);
    class SD {
      constructor(DD) {
        this.types = DD;
        for (let CD = 0; CD < DD.length; CD++)
          if (DD[CD].id != CD) throw new RangeError("Node type ids should correspond to array positions when creating a node set")
      }
      extend() {
        let DD = [];
        for (var CD = arguments.length, cD = new Array(CD), ID = 0; ID < CD; ID++) cD[ID] = arguments[ID];
        for (let pD of this.types) {
          let CD = null;
          for (let DD of cD) {
            let cD = DD(pD);
            if (cD) {
              CD || (CD = Object.assign({}, pD.props));
              let DD = cD[1],
                ID = cD[0];
              ID.combine && ID.id in CD && (DD = ID.combine(CD[ID.id], DD)), CD[ID.id] = DD
            }
          }
          DD.push(CD ? new wD(pD.name, CD, pD.id, pD.flags) : pD)
        }
        return new SD(DD)
      }
    }
    const BD = new WeakMap,
      yD = new WeakMap;
    var MD;
    ! function(DD) {
      DD[DD.ExcludeBuffers = 1] = "ExcludeBuffers", DD[DD.IncludeAnonymous = 2] = "IncludeAnonymous", DD[DD.IgnoreMounts = 4] = "IgnoreMounts", DD[DD.IgnoreOverlays = 8] = "IgnoreOverlays", DD[DD.EnterBracketed = 16] = "EnterBracketed"
    }(MD || (MD = {}));
    class tD {
      constructor(DD, CD, cD, ID, pD) {
        if (this.type = DD, this.children = CD, this.positions = cD, this.length = ID, this.props = null, pD && pD.length) {
          this.props = Object.create(null);
          for (let [DD, CD] of pD) this.props["number" == typeof DD ? DD : DD.id] = CD
        }
      }
      toString() {
        let DD = bD.get(this);
        if (DD && !DD.overlay) return DD.tree.toString();
        let CD = "";
        for (let cD of this.children) {
          let DD = cD.toString();
          DD && (CD && (CD += ","), CD += DD)
        }
        return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (CD.length ? "(" + CD + ")" : "") : CD
      }
      cursor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return new xD(this.topNode, DD)
      }
      cursorAt(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cD = BD.get(this) || this.topNode,
          ID = new xD(cD);
        return ID.moveTo(DD, CD), BD.set(this, ID._tree), ID
      }
      get topNode() {
        return new XD(this, 0, 0, null)
      }
      resolve(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cD = ND(BD.get(this) || this.topNode, DD, CD, !1);
        return BD.set(this, cD), cD
      }
      resolveInner(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cD = ND(yD.get(this) || this.topNode, DD, CD, !0);
        return yD.set(this, cD), cD
      }
      resolveStack(DD) {
        return function(DD, CD, cD) {
          let ID = DD.resolveInner(CD, cD),
            pD = null;
          for (let iD = ID instanceof XD ? ID : ID.context.parent; iD; iD = iD.parent)
            if (iD.index < 0) {
              let DD = iD.parent;
              (pD || (pD = [ID])).push(DD.resolve(CD, cD)), iD = DD
            } else {
              let DD = bD.get(iD.tree);
              if (DD && DD.overlay && DD.overlay[0].from <= CD && DD.overlay[DD.overlay.length - 1].to >= CD) {
                let fD = new XD(DD.tree, DD.overlay[0].from + iD.from, -1, iD);
                (pD || (pD = [ID])).push(ND(fD, CD, cD, !1))
              }
            } return pD ? HD(pD) : ID
        }(this, DD, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
      }
      iterate(DD) {
        let {
          enter: CD,
          leave: cD,
          from: ID = 0,
          to: pD = this.length
        } = DD, iD = DD.mode || 0, fD = (iD & MD.IncludeAnonymous) > 0;
        for (let bD = this.cursor(iD | MD.IncludeAnonymous);;) {
          let DD = !1;
          if (bD.from <= pD && bD.to >= ID && (!fD && bD.type.isAnonymous || !1 !== CD(bD))) {
            if (bD.firstChild()) continue;
            DD = !0
          }
          for (; DD && cD && (fD || !bD.type.isAnonymous) && cD(bD), !bD.nextSibling();) {
            if (!bD.parent()) return;
            DD = !0
          }
        }
      }
      prop(DD) {
        return DD.perNode ? this.props ? this.props[DD.id] : void 0 : this.type.prop(DD)
      }
      get propValues() {
        let DD = [];
        if (this.props)
          for (let CD in this.props) DD.push([+CD, this.props[CD]]);
        return DD
      }
      balance() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this.children.length <= 8 ? this : aD(wD.none, this.children, this.positions, 0, this.children.length, 0, this.length, ((DD, CD, cD) => new tD(this.type, DD, CD, cD, this.propValues)), DD.makeTree || ((DD, CD, cD) => new tD(wD.none, DD, CD, cD)))
      }
      static build(DD) {
        return function(DD) {
          var CD;
          let {
            buffer: cD,
            nodeSet: pD,
            maxBufferLength: iD = ID,
            reused: bD = [],
            minRepeatType: QD = pD.types.length
          } = DD, wD = Array.isArray(cD) ? new ZD(cD, cD.length) : cD, SD = pD.types, BD = 0, yD = 0;

          function MD(DD, CD, cD, ID, fD, tD) {
            let {
              id: ZD,
              start: OD,
              end: PD,
              size: HD
            } = wD, UD = yD, xD = BD;
            if (HD < 0) {
              if (wD.next(), -1 == HD) {
                let CD = bD[ZD];
                return cD.push(CD), void ID.push(OD - DD)
              }
              if (-3 == HD) return void(BD = ZD);
              if (-4 == HD) return void(yD = ZD);
              throw new RangeError(`Unrecognized record size: ${HD}`)
            }
            let qD, JD, KD = SD[ZD],
              VD = OD - DD;
            if (PD - OD <= iD && (JD = mD(wD.pos - CD, fD))) {
              let CD = new Uint16Array(JD.size - JD.skip),
                cD = wD.pos - JD.size,
                ID = CD.length;
              for (; wD.pos > cD;) ID = nD(JD.start, CD, ID);
              qD = new oD(CD, PD - JD.start, pD), VD = JD.start - DD
            } else {
              let DD = wD.pos - HD;
              wD.next();
              let CD = [],
                cD = [],
                ID = ZD >= QD ? ZD : -1,
                pD = 0,
                fD = PD;
              for (; wD.pos > DD;) ID >= 0 && wD.id == ID && wD.size >= 0 ? (wD.end <= fD - iD && (gD(CD, cD, OD, pD, wD.end, fD, ID, UD, xD), pD = CD.length, fD = wD.end), wD.next()) : tD > 2500 ? vD(OD, DD, CD, cD) : MD(OD, DD, CD, cD, ID, tD + 1);
              if (ID >= 0 && pD > 0 && pD < CD.length && gD(CD, cD, OD, pD, OD, fD, ID, UD, xD), CD.reverse(), cD.reverse(), ID > -1 && pD > 0) {
                let DD = ND(KD, xD);
                qD = aD(KD, CD, cD, 0, CD.length, 0, PD - OD, DD, DD)
              } else qD = XD(KD, CD, cD, PD - OD, UD - PD, xD)
            }
            cD.push(qD), ID.push(VD)
          }

          function vD(DD, CD, cD, ID) {
            let fD = [],
              bD = 0,
              QD = -1;
            for (; wD.pos > CD;) {
              let {
                id: DD,
                start: CD,
                end: cD,
                size: ID
              } = wD;
              if (ID > 4) wD.next();
              else {
                if (QD > -1 && CD < QD) break;
                QD < 0 && (QD = cD - iD), fD.push(DD, CD, cD), bD++, wD.next()
              }
            }
            if (bD) {
              let CD = new Uint16Array(4 * bD),
                iD = fD[fD.length - 2];
              for (let DD = fD.length - 3, cD = 0; DD >= 0; DD -= 3) CD[cD++] = fD[DD], CD[cD++] = fD[DD + 1] - iD, CD[cD++] = fD[DD + 2] - iD, CD[cD++] = cD;
              cD.push(new oD(CD, fD[2] - iD, pD)), ID.push(iD - DD)
            }
          }

          function ND(DD, CD) {
            return (cD, ID, pD) => {
              let iD, bD, QD = 0,
                wD = cD.length - 1;
              if (wD >= 0 && (iD = cD[wD]) instanceof tD) {
                if (!wD && iD.type == DD && iD.length == pD) return iD;
                (bD = iD.prop(fD.lookAhead)) && (QD = ID[wD] + iD.length + bD)
              }
              return XD(DD, cD, ID, pD, QD, CD)
            }
          }

          function gD(DD, CD, cD, ID, iD, fD, bD, QD, wD) {
            let SD = [],
              BD = [];
            for (; DD.length > ID;) SD.push(DD.pop()), BD.push(CD.pop() + cD - iD);
            DD.push(XD(pD.types[bD], SD, BD, fD - iD, QD - fD, wD)), CD.push(iD - cD)
          }

          function XD(DD, CD, cD, ID, pD, iD, bD) {
            if (iD) {
              let DD = [fD.contextHash, iD];
              bD = bD ? [DD].concat(bD) : [DD]
            }
            if (pD > 25) {
              let DD = [fD.lookAhead, pD];
              bD = bD ? [DD].concat(bD) : [DD]
            }
            return new tD(DD, CD, cD, ID, bD)
          }

          function mD(DD, CD) {
            let cD = wD.fork(),
              ID = 0,
              pD = 0,
              fD = 0,
              bD = cD.end - iD,
              SD = {
                size: 0,
                start: 0,
                skip: 0
              };
            DD: for (let iD = cD.pos - DD; cD.pos > iD;) {
              let DD = cD.size;
              if (cD.id == CD && DD >= 0) {
                SD.size = ID, SD.start = pD, SD.skip = fD, fD += 4, ID += 4, cD.next();
                continue
              }
              let wD = cD.pos - DD;
              if (DD < 0 || wD < iD || cD.start < bD) break;
              let BD = cD.id >= QD ? 4 : 0,
                yD = cD.start;
              for (cD.next(); cD.pos > wD;) {
                if (cD.size < 0) {
                  if (-3 != cD.size && -4 != cD.size) break DD;
                  BD += 4
                } else cD.id >= QD && (BD += 4);
                cD.next()
              }
              pD = yD, ID += DD, fD += BD
            }
            return (CD < 0 || ID == DD) && (SD.size = ID, SD.start = pD, SD.skip = fD), SD.size > 4 ? SD : void 0
          }

          function nD(DD, CD, cD) {
            let {
              id: ID,
              start: pD,
              end: iD,
              size: fD
            } = wD;
            if (wD.next(), fD >= 0 && ID < QD) {
              let bD = cD;
              if (fD > 4) {
                let ID = wD.pos - (fD - 4);
                for (; wD.pos > ID;) cD = nD(DD, CD, cD)
              }
              CD[--cD] = bD, CD[--cD] = iD - DD, CD[--cD] = pD - DD, CD[--cD] = ID
            } else - 3 == fD ? BD = ID : -4 == fD && (yD = ID);
            return cD
          }
          let OD = [],
            PD = [];
          for (; wD.pos > 0;) MD(DD.start || 0, DD.bufferStart || 0, OD, PD, -1, 0);
          let HD = null !== (CD = DD.length) && void 0 !== CD ? CD : OD.length ? PD[0] + OD[0].length : 0;
          return new tD(SD[DD.topID], OD.reverse(), PD.reverse(), HD)
        }(DD)
      }
    }
    tD.empty = new tD(wD.none, [], [], 0);
    class ZD {
      constructor(DD, CD) {
        this.buffer = DD, this.index = CD
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
        return new ZD(this.buffer, this.index)
      }
    }
    class oD {
      constructor(DD, CD, cD) {
        this.buffer = DD, this.length = CD, this.set = cD
      }
      get type() {
        return wD.none
      }
      toString() {
        let DD = [];
        for (let CD = 0; CD < this.buffer.length;) DD.push(this.childString(CD)), CD = this.buffer[CD + 3];
        return DD.join(",")
      }
      childString(DD) {
        let CD = this.buffer[DD],
          cD = this.buffer[DD + 3],
          ID = this.set.types[CD],
          pD = ID.name;
        if (/\W/.test(pD) && !ID.isError && (pD = JSON.stringify(pD)), cD == (DD += 4)) return pD;
        let iD = [];
        for (; DD < cD;) iD.push(this.childString(DD)), DD = this.buffer[DD + 3];
        return pD + "(" + iD.join(",") + ")"
      }
      findChild(DD, CD, cD, ID, pD) {
        let {
          buffer: iD
        } = this, fD = -1;
        for (let bD = DD; bD != CD && !(vD(pD, ID, iD[bD + 1], iD[bD + 2]) && (fD = bD, cD > 0)); bD = iD[bD + 3]);
        return fD
      }
      slice(DD, CD, cD) {
        let ID = this.buffer,
          pD = new Uint16Array(CD - DD),
          iD = 0;
        for (let fD = DD, bD = 0; fD < CD;) {
          pD[bD++] = ID[fD++], pD[bD++] = ID[fD++] - cD;
          let CD = pD[bD++] = ID[fD++] - cD;
          pD[bD++] = ID[fD++] - DD, iD = Math.max(iD, CD)
        }
        return new oD(pD, iD, this.set)
      }
    }

    function vD(DD, CD, cD, ID) {
      switch (DD) {
        case -2:
          return cD < CD;
        case -1:
          return ID >= CD && cD < CD;
        case 0:
          return cD < CD && ID > CD;
        case 1:
          return cD <= CD && ID > CD;
        case 2:
          return ID > CD;
        case 4:
          return !0
      }
    }

    function ND(DD, CD, cD, ID) {
      for (var pD; DD.from == DD.to || (cD < 1 ? DD.from >= CD : DD.from > CD) || (cD > -1 ? DD.to <= CD : DD.to < CD);) {
        let CD = !ID && DD instanceof XD && DD.index < 0 ? null : DD.parent;
        if (!CD) return DD;
        DD = CD
      }
      let iD = ID ? 0 : MD.IgnoreOverlays;
      if (ID)
        for (let fD = DD, bD = fD.parent; bD; fD = bD, bD = fD.parent) fD instanceof XD && fD.index < 0 && (null === (pD = bD.enter(CD, cD, iD)) || void 0 === pD ? void 0 : pD.from) != fD.from && (DD = bD);
      for (;;) {
        let ID = DD.enter(CD, cD, iD);
        if (!ID) return DD;
        DD = ID
      }
    }
    class gD {
      cursor() {
        return new xD(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)
      }
      getChild(DD) {
        let CD = mD(this, DD, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null);
        return CD.length ? CD[0] : null
      }
      getChildren(DD) {
        return mD(this, DD, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
      }
      resolve(DD) {
        return ND(this, DD, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !1)
      }
      resolveInner(DD) {
        return ND(this, DD, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !0)
      }
      matchContext(DD) {
        return nD(this.parent, DD)
      }
      enterUnfinishedNodesBefore(DD) {
        let CD = this.childBefore(DD),
          cD = this;
        for (; CD;) {
          let DD = CD.lastChild;
          if (!DD || DD.to != CD.to) break;
          DD.type.isError && DD.from == DD.to ? (cD = CD, CD = DD.prevSibling) : CD = DD
        }
        return cD
      }
      get node() {
        return this
      }
      get next() {
        return this.parent
      }
    }
    class XD extends gD {
      constructor(DD, CD, cD, ID) {
        super(), this._tree = DD, this.from = CD, this.index = cD, this._parent = ID
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
      nextChild(DD, CD, cD, ID) {
        let pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        for (let iD = this;;) {
          for (let {
              children: fD,
              positions: QD
            } = iD._tree, wD = CD > 0 ? fD.length : -1; DD != wD; DD += CD) {
            let wD, SD = fD[DD],
              BD = QD[DD] + iD.from;
            if (pD & MD.EnterBracketed && SD instanceof tD && (wD = bD.get(SD)) && !wD.overlay && wD.bracketed && cD >= BD && cD <= BD + SD.length || vD(ID, cD, BD, BD + SD.length))
              if (SD instanceof oD) {
                if (pD & MD.ExcludeBuffers) continue;
                let fD = SD.findChild(0, SD.buffer.length, CD, cD - BD, ID);
                if (fD > -1) return new PD(new OD(iD, SD, DD, BD), null, fD)
              } else if (pD & MD.IncludeAnonymous || !SD.type.isAnonymous || qD(SD)) {
              let fD;
              if (!(pD & MD.IgnoreMounts) && (fD = bD.get(SD)) && !fD.overlay) return new XD(fD.tree, BD, DD, iD);
              let QD = new XD(SD, BD, DD, iD);
              return pD & MD.IncludeAnonymous || !QD.type.isAnonymous ? QD : QD.nextChild(CD < 0 ? SD.children.length - 1 : 0, CD, cD, ID, pD)
            }
          }
          if (pD & MD.IncludeAnonymous || !iD.type.isAnonymous) return null;
          if (DD = iD.index >= 0 ? iD.index + CD : CD < 0 ? -1 : iD._parent._tree.children.length, iD = iD._parent, !iD) return null
        }
      }
      get firstChild() {
        return this.nextChild(0, 1, 0, 4)
      }
      get lastChild() {
        return this.nextChild(this._tree.children.length - 1, -1, 0, 4)
      }
      childAfter(DD) {
        return this.nextChild(0, 1, DD, 2)
      }
      childBefore(DD) {
        return this.nextChild(this._tree.children.length - 1, -1, DD, -2)
      }
      prop(DD) {
        return this._tree.prop(DD)
      }
      enter(DD, CD) {
        let cD, ID = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (!(ID & MD.IgnoreOverlays) && (cD = bD.get(this._tree)) && cD.overlay) {
          let pD = DD - this.from,
            iD = ID & MD.EnterBracketed && cD.bracketed;
          for (let {
              from: DD,
              to: ID
            }
            of cD.overlay)
            if ((CD > 0 || iD ? DD <= pD : DD < pD) && (CD < 0 || iD ? ID >= pD : ID > pD)) return new XD(cD.tree, cD.overlay[0].from + this.from, -1, this)
        }
        return this.nextChild(0, 1, DD, CD, ID)
      }
      nextSignificantParent() {
        let DD = this;
        for (; DD.type.isAnonymous && DD._parent;) DD = DD._parent;
        return DD
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

    function mD(DD, CD, cD, ID) {
      let pD = DD.cursor(),
        iD = [];
      if (!pD.firstChild()) return iD;
      if (null != cD)
        for (let fD = !1; !fD;)
          if (fD = pD.type.is(cD), !pD.nextSibling()) return iD;
      for (;;) {
        if (null != ID && pD.type.is(ID)) return iD;
        if (pD.type.is(CD) && iD.push(pD.node), !pD.nextSibling()) return null == ID ? iD : []
      }
    }

    function nD(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : CD.length - 1;
      for (let ID = DD; cD >= 0; ID = ID.parent) {
        if (!ID) return !1;
        if (!ID.type.isAnonymous) {
          if (CD[cD] && CD[cD] != ID.name) return !1;
          cD--
        }
      }
      return !0
    }
    class OD {
      constructor(DD, CD, cD, ID) {
        this.parent = DD, this.buffer = CD, this.index = cD, this.start = ID
      }
    }
    class PD extends gD {
      get name() {
        return this.type.name
      }
      get from() {
        return this.context.start + this.context.buffer.buffer[this.index + 1]
      }
      get to() {
        return this.context.start + this.context.buffer.buffer[this.index + 2]
      }
      constructor(DD, CD, cD) {
        super(), this.context = DD, this._parent = CD, this.index = cD, this.type = DD.buffer.set.types[DD.buffer.buffer[cD]]
      }
      child(DD, CD, cD) {
        let {
          buffer: ID
        } = this.context, pD = ID.findChild(this.index + 4, ID.buffer[this.index + 3], DD, CD - this.context.start, cD);
        return pD < 0 ? null : new PD(this.context, this, pD)
      }
      get firstChild() {
        return this.child(1, 0, 4)
      }
      get lastChild() {
        return this.child(-1, 0, 4)
      }
      childAfter(DD) {
        return this.child(1, DD, 2)
      }
      childBefore(DD) {
        return this.child(-1, DD, -2)
      }
      prop(DD) {
        return this.type.prop(DD)
      }
      enter(DD, CD) {
        if ((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0) & MD.ExcludeBuffers) return null;
        let {
          buffer: cD
        } = this.context, ID = cD.findChild(this.index + 4, cD.buffer[this.index + 3], CD > 0 ? 1 : -1, DD - this.context.start, CD);
        return ID < 0 ? null : new PD(this.context, this, ID)
      }
      get parent() {
        return this._parent || this.context.parent.nextSignificantParent()
      }
      externalSibling(DD) {
        return this._parent ? null : this.context.parent.nextChild(this.context.index + DD, DD, 0, 4)
      }
      get nextSibling() {
        let {
          buffer: DD
        } = this.context, CD = DD.buffer[this.index + 3];
        return CD < (this._parent ? DD.buffer[this._parent.index + 3] : DD.buffer.length) ? new PD(this.context, this._parent, CD) : this.externalSibling(1)
      }
      get prevSibling() {
        let {
          buffer: DD
        } = this.context, CD = this._parent ? this._parent.index + 4 : 0;
        return this.index == CD ? this.externalSibling(-1) : new PD(this.context, this._parent, DD.findChild(CD, this.index, -1, 0, 4))
      }
      get tree() {
        return null
      }
      toTree() {
        let DD = [],
          CD = [],
          {
            buffer: cD
          } = this.context,
          ID = this.index + 4,
          pD = cD.buffer[this.index + 3];
        if (pD > ID) {
          let iD = cD.buffer[this.index + 1];
          DD.push(cD.slice(ID, pD, iD)), CD.push(0)
        }
        return new tD(this.type, DD, CD, this.to - this.from)
      }
      toString() {
        return this.context.buffer.childString(this.index)
      }
    }

    function HD(DD) {
      if (!DD.length) return null;
      let CD = 0,
        cD = DD[0];
      for (let iD = 1; iD < DD.length; iD++) {
        let ID = DD[iD];
        (ID.from > cD.from || ID.to < cD.to) && (cD = ID, CD = iD)
      }
      let ID = cD instanceof XD && cD.index < 0 ? null : cD.parent,
        pD = DD.slice();
      return ID ? pD[CD] = ID : pD.splice(CD, 1), new UD(pD, cD)
    }
    class UD {
      constructor(DD, CD) {
        this.heads = DD, this.node = CD
      }
      get next() {
        return HD(this.heads)
      }
    }
    class xD {
      get name() {
        return this.type.name
      }
      constructor(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = CD & ~MD.EnterBracketed, DD instanceof XD) this.yieldNode(DD);
        else {
          this._tree = DD.context.parent, this.buffer = DD.context;
          for (let CD = DD._parent; CD; CD = CD._parent) this.stack.unshift(CD.index);
          this.bufferNode = DD, this.yieldBuf(DD.index)
        }
      }
      yieldNode(DD) {
        return !!DD && (this._tree = DD, this.type = DD.type, this.from = DD.from, this.to = DD.to, !0)
      }
      yieldBuf(DD, CD) {
        this.index = DD;
        let {
          start: cD,
          buffer: ID
        } = this.buffer;
        return this.type = CD || ID.set.types[ID.buffer[DD]], this.from = cD + ID.buffer[DD + 1], this.to = cD + ID.buffer[DD + 2], !0
      }
      yield(DD) {
        return !!DD && (DD instanceof XD ? (this.buffer = null, this.yieldNode(DD)) : (this.buffer = DD.context, this.yieldBuf(DD.index, DD.type)))
      }
      toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
      }
      enterChild(DD, CD, cD) {
        if (!this.buffer) return this.yield(this._tree.nextChild(DD < 0 ? this._tree._tree.children.length - 1 : 0, DD, CD, cD, this.mode));
        let {
          buffer: ID
        } = this.buffer, pD = ID.findChild(this.index + 4, ID.buffer[this.index + 3], DD, CD - this.buffer.start, cD);
        return !(pD < 0) && (this.stack.push(this.index), this.yieldBuf(pD))
      }
      firstChild() {
        return this.enterChild(1, 0, 4)
      }
      lastChild() {
        return this.enterChild(-1, 0, 4)
      }
      childAfter(DD) {
        return this.enterChild(1, DD, 2)
      }
      childBefore(DD) {
        return this.enterChild(-1, DD, -2)
      }
      enter(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.mode;
        return this.buffer ? !(cD & MD.ExcludeBuffers) && this.enterChild(1, DD, CD) : this.yield(this._tree.enter(DD, CD, cD))
      }
      parent() {
        if (!this.buffer) return this.yieldNode(this.mode & MD.IncludeAnonymous ? this._tree._parent : this._tree.parent);
        if (this.stack.length) return this.yieldBuf(this.stack.pop());
        let DD = this.mode & MD.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        return this.buffer = null, this.yieldNode(DD)
      }
      sibling(DD) {
        if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + DD, DD, 0, 4, this.mode));
        let {
          buffer: CD
        } = this.buffer, cD = this.stack.length - 1;
        if (DD < 0) {
          let DD = cD < 0 ? 0 : this.stack[cD] + 4;
          if (this.index != DD) return this.yieldBuf(CD.findChild(DD, this.index, -1, 0, 4))
        } else {
          let DD = CD.buffer[this.index + 3];
          if (DD < (cD < 0 ? CD.buffer.length : CD.buffer[this.stack[cD] + 3])) return this.yieldBuf(DD)
        }
        return cD < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + DD, DD, 0, 4, this.mode))
      }
      nextSibling() {
        return this.sibling(1)
      }
      prevSibling() {
        return this.sibling(-1)
      }
      atLastNode(DD) {
        let CD, cD, {
          buffer: ID
        } = this;
        if (ID) {
          if (DD > 0) {
            if (this.index < ID.buffer.buffer.length) return !1
          } else
            for (let DD = 0; DD < this.index; DD++)
              if (ID.buffer.buffer[DD + 3] < this.index) return !1;
          ({
            index: CD,
            parent: cD
          } = ID)
        } else({
          index: CD,
          _parent: cD
        } = this._tree);
        for (; cD;
          ({
            index: CD,
            _parent: cD
          } = cD))
          if (CD > -1)
            for (let ID = CD + DD, pD = DD < 0 ? -1 : cD._tree.children.length; ID != pD; ID += DD) {
              let DD = cD._tree.children[ID];
              if (this.mode & MD.IncludeAnonymous || DD instanceof oD || !DD.type.isAnonymous || qD(DD)) return !1
            }
        return !0
      }
      move(DD, CD) {
        if (CD && this.enterChild(DD, 0, 4)) return !0;
        for (;;) {
          if (this.sibling(DD)) return !0;
          if (this.atLastNode(DD) || !this.parent()) return !1
        }
      }
      next() {
        let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(1, DD)
      }
      prev() {
        let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(-1, DD)
      }
      moveTo(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        for (;
          (this.from == this.to || (CD < 1 ? this.from >= DD : this.from > DD) || (CD > -1 ? this.to <= DD : this.to < DD)) && this.parent(););
        for (; this.enterChild(1, DD, CD););
        return this
      }
      get node() {
        if (!this.buffer) return this._tree;
        let DD = this.bufferNode,
          CD = null,
          cD = 0;
        if (DD && DD.context == this.buffer) DD: for (let ID = this.index, pD = this.stack.length; pD >= 0;) {
          for (let iD = DD; iD; iD = iD._parent)
            if (iD.index == ID) {
              if (ID == this.index) return iD;
              CD = iD, cD = pD + 1;
              break DD
            } ID = this.stack[--pD]
        }
        for (let ID = cD; ID < this.stack.length; ID++) CD = new PD(this.buffer, CD, this.stack[ID]);
        return this.bufferNode = new PD(this.buffer, CD, this.index)
      }
      get tree() {
        return this.buffer ? null : this._tree._tree
      }
      iterate(DD, CD) {
        for (let cD = 0;;) {
          let ID = !1;
          if (this.type.isAnonymous || !1 !== DD(this)) {
            if (this.firstChild()) {
              cD++;
              continue
            }
            this.type.isAnonymous || (ID = !0)
          }
          for (;;) {
            if (ID && CD && CD(this), ID = this.type.isAnonymous, !cD) return;
            if (this.nextSibling()) break;
            this.parent(), cD--, ID = !0
          }
        }
      }
      matchContext(DD) {
        if (!this.buffer) return nD(this.node.parent, DD);
        let {
          buffer: CD
        } = this.buffer, {
          types: cD
        } = CD.set;
        for (let ID = DD.length - 1, pD = this.stack.length - 1; ID >= 0; pD--) {
          if (pD < 0) return nD(this._tree, DD, ID);
          let iD = cD[CD.buffer[this.stack[pD]]];
          if (!iD.isAnonymous) {
            if (DD[ID] && DD[ID] != iD.name) return !1;
            ID--
          }
        }
        return !0
      }
    }

    function qD(DD) {
      return DD.children.some((DD => DD instanceof oD || !DD.type.isAnonymous || qD(DD)))
    }
    const JD = new WeakMap;

    function KD(DD, CD) {
      if (!DD.isAnonymous || CD instanceof oD || CD.type != DD) return 1;
      let cD = JD.get(CD);
      if (null == cD) {
        cD = 1;
        for (let ID of CD.children) {
          if (ID.type != DD || !(ID instanceof tD)) {
            cD = 1;
            break
          }
          cD += KD(DD, ID)
        }
        JD.set(CD, cD)
      }
      return cD
    }

    function aD(DD, CD, cD, ID, pD, iD, fD, bD, QD) {
      let wD = 0;
      for (let MD = ID; MD < pD; MD++) wD += KD(DD, CD[MD]);
      let SD = Math.ceil(1.5 * wD / 8),
        BD = [],
        yD = [];
      return function CD(cD, ID, pD, fD, bD) {
        for (let wD = pD; wD < fD;) {
          let pD = wD,
            MD = ID[wD],
            tD = KD(DD, cD[wD]);
          for (wD++; wD < fD; wD++) {
            let CD = KD(DD, cD[wD]);
            if (tD + CD >= SD) break;
            tD += CD
          }
          if (wD == pD + 1) {
            if (tD > SD) {
              let DD = cD[pD];
              CD(DD.children, DD.positions, 0, DD.children.length, ID[pD] + bD);
              continue
            }
            BD.push(cD[pD])
          } else {
            let CD = ID[wD - 1] + cD[wD - 1].length - MD;
            BD.push(aD(DD, cD, ID, pD, wD, MD, CD, null, QD))
          }
          yD.push(MD + bD - iD)
        }
      }(CD, cD, ID, pD, 0), (bD || QD)(BD, yD, fD)
    }
    class VD {
      constructor() {
        this.map = new WeakMap
      }
      setBuffer(DD, CD, cD) {
        let ID = this.map.get(DD);
        ID || this.map.set(DD, ID = new Map), ID.set(CD, cD)
      }
      getBuffer(DD, CD) {
        let cD = this.map.get(DD);
        return cD && cD.get(CD)
      }
      set(DD, CD) {
        DD instanceof PD ? this.setBuffer(DD.context.buffer, DD.index, CD) : DD instanceof XD && this.map.set(DD.tree, CD)
      }
      get(DD) {
        return DD instanceof PD ? this.getBuffer(DD.context.buffer, DD.index) : DD instanceof XD ? this.map.get(DD.tree) : void 0
      }
      cursorSet(DD, CD) {
        DD.buffer ? this.setBuffer(DD.buffer.buffer, DD.index, CD) : this.map.set(DD.tree, CD)
      }
      cursorGet(DD) {
        return DD.buffer ? this.getBuffer(DD.buffer.buffer, DD.index) : this.map.get(DD.tree)
      }
    }
    class zD {
      constructor(DD, CD, cD, ID) {
        let pD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          iD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.from = DD, this.to = CD, this.tree = cD, this.offset = ID, this.open = (pD ? 1 : 0) | (iD ? 2 : 0)
      }
      get openStart() {
        return (1 & this.open) > 0
      }
      get openEnd() {
        return (2 & this.open) > 0
      }
      static addTree(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          ID = [new zD(0, DD.length, DD, 0, !1, cD)];
        for (let pD of CD) pD.to > DD.length && ID.push(pD);
        return ID
      }
      static applyChanges(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
        if (!CD.length) return DD;
        let ID = [],
          pD = 1,
          iD = DD.length ? DD[0] : null;
        for (let fD = 0, bD = 0, QD = 0;; fD++) {
          let wD = fD < CD.length ? CD[fD] : null,
            SD = wD ? wD.fromA : 1e9;
          if (SD - bD >= cD)
            for (; iD && iD.from < SD;) {
              let CD = iD;
              if (bD >= CD.from || SD <= CD.to || QD) {
                let DD = Math.max(CD.from, bD) - QD,
                  cD = Math.min(CD.to, SD) - QD;
                CD = DD >= cD ? null : new zD(DD, cD, CD.tree, CD.offset + QD, fD > 0, !!wD)
              }
              if (CD && ID.push(CD), iD.to > SD) break;
              iD = pD < DD.length ? DD[pD++] : null
            }
          if (!wD) break;
          bD = wD.toA, QD = wD.toA - wD.toB
        }
        return ID
      }
    }
    class jD {
      startParse(DD, CD, cD) {
        return "string" == typeof DD && (DD = new lD(DD)), cD = cD ? cD.length ? cD.map((DD => new iD(DD.from, DD.to))) : [new iD(0, 0)] : [new iD(0, DD.length)], this.createParse(DD, CD || [], cD)
      }
      parse(DD, CD, cD) {
        let ID = this.startParse(DD, CD, cD);
        for (;;) {
          let DD = ID.advance();
          if (DD) return DD
        }
      }
    }
    class lD {
      constructor(DD) {
        this.string = DD
      }
      get length() {
        return this.string.length
      }
      chunk(DD) {
        return this.string.slice(DD)
      }
      get lineChunks() {
        return !1
      }
      read(DD, CD) {
        return this.string.slice(DD, CD)
      }
    }
    new fD({
      perNode: !0
    })
  },
  40406: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => yD,
      f: () => QD,
      i: () => BD,
      m: () => JD
    });
    var ID = cD(40403);
    let pD = 0;
    class iD {
      constructor(DD, CD, cD, ID) {
        this.name = DD, this.set = CD, this.base = cD, this.modified = ID, this.id = pD++
      }
      toString() {
        let {
          name: DD
        } = this;
        for (let CD of this.modified) CD.name && (DD = `${CD.name}(${DD})`);
        return DD
      }
      static define(DD, CD) {
        let cD = "string" == typeof DD ? DD : "?";
        if (DD instanceof iD && (CD = DD), null === CD || void 0 === CD ? void 0 : CD.base) throw new Error("Can not derive from a modified tag");
        let ID = new iD(cD, [], null, []);
        if (ID.set.push(ID), CD)
          for (let pD of CD.set) ID.set.push(pD);
        return ID
      }
      static defineModifier(DD) {
        let CD = new bD(DD);
        return DD => DD.modified.indexOf(CD) > -1 ? DD : bD.get(DD.base || DD, DD.modified.concat(CD).sort(((DD, CD) => DD.id - CD.id)))
      }
    }
    let fD = 0;
    class bD {
      constructor(DD) {
        this.name = DD, this.instances = [], this.id = fD++
      }
      static get(DD, CD) {
        if (!CD.length) return DD;
        let cD = CD[0].instances.find((cD => {
          return cD.base == DD && (ID = CD, pD = cD.modified, ID.length == pD.length && ID.every(((DD, CD) => DD == pD[CD])));
          var ID, pD
        }));
        if (cD) return cD;
        let ID = [],
          pD = new iD(DD.name, ID, DD, CD);
        for (let iD of CD) iD.instances.push(pD);
        let fD = function(DD) {
          let CD = [
            []
          ];
          for (let cD = 0; cD < DD.length; cD++)
            for (let ID = 0, pD = CD.length; ID < pD; ID++) CD.push(CD[ID].concat(DD[cD]));
          return CD.sort(((DD, CD) => CD.length - DD.length))
        }(CD);
        for (let iD of DD.set)
          if (!iD.modified.length)
            for (let DD of fD) ID.push(bD.get(iD, DD));
        return pD
      }
    }

    function QD(DD) {
      let CD = Object.create(null);
      for (let cD in DD) {
        let ID = DD[cD];
        Array.isArray(ID) || (ID = [ID]);
        for (let DD of cD.split(" "))
          if (DD) {
            let cD = [],
              pD = 2,
              iD = DD;
            for (let CD = 0;;) {
              if ("..." == iD && CD > 0 && CD + 3 == DD.length) {
                pD = 1;
                break
              }
              let ID = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(iD);
              if (!ID) throw new RangeError("Invalid path: " + DD);
              if (cD.push("*" == ID[0] ? "" : '"' == ID[0][0] ? JSON.parse(ID[0]) : ID[0]), CD += ID[0].length, CD == DD.length) break;
              let fD = DD[CD++];
              if (CD == DD.length && "!" == fD) {
                pD = 0;
                break
              }
              if ("/" != fD) throw new RangeError("Invalid path: " + DD);
              iD = DD.slice(CD)
            }
            let fD = cD.length - 1,
              bD = cD[fD];
            if (!bD) throw new RangeError("Invalid path: " + DD);
            let QD = new SD(ID, pD, fD > 0 ? cD.slice(0, fD) : null);
            CD[bD] = QD.sort(CD[bD])
          }
      }
      return wD.add(CD)
    }
    const wD = new ID.g({
      combine(DD, CD) {
        let cD, ID, pD;
        for (; DD || CD;) {
          if (!DD || CD && DD.depth >= CD.depth ? (pD = CD, CD = CD.next) : (pD = DD, DD = DD.next), cD && cD.mode == pD.mode && !pD.context && !cD.context) continue;
          let iD = new SD(pD.tags, pD.mode, pD.context);
          cD ? cD.next = iD : ID = iD, cD = iD
        }
        return ID
      }
    });
    class SD {
      constructor(DD, CD, cD, ID) {
        this.tags = DD, this.mode = CD, this.context = cD, this.next = ID
      }
      get opaque() {
        return 0 == this.mode
      }
      get inherit() {
        return 1 == this.mode
      }
      sort(DD) {
        return !DD || DD.depth < this.depth ? (this.next = DD, this) : (DD.next = this.sort(DD.next), DD)
      }
      get depth() {
        return this.context ? this.context.length : 0
      }
    }

    function BD(DD, CD) {
      let cD = Object.create(null);
      for (let iD of DD)
        if (Array.isArray(iD.tag))
          for (let DD of iD.tag) cD[DD.id] = iD.class;
        else cD[iD.tag.id] = iD.class;
      let {
        scope: ID,
        all: pD = null
      } = CD || {};
      return {
        style: DD => {
          let CD = pD;
          for (let ID of DD)
            for (let DD of ID.set) {
              let ID = cD[DD.id];
              if (ID) {
                CD = CD ? CD + " " + ID : ID;
                break
              }
            }
          return CD
        },
        scope: ID
      }
    }

    function yD(DD, CD, cD) {
      let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : DD.length,
        iD = new MD(ID, Array.isArray(CD) ? CD : [CD], cD);
      iD.highlightRange(DD.cursor(), ID, pD, "", iD.highlighters), iD.flush(pD)
    }
    SD.empty = new SD([], 2, null);
    class MD {
      constructor(DD, CD, cD) {
        this.at = DD, this.highlighters = CD, this.span = cD, this.class = ""
      }
      startSpan(DD, CD) {
        CD != this.class && (this.flush(DD), DD > this.at && (this.at = DD), this.class = CD)
      }
      flush(DD) {
        DD > this.at && this.class && this.span(this.at, DD, this.class)
      }
      highlightRange(DD, CD, cD, pD, iD) {
        let {
          type: fD,
          from: bD,
          to: QD
        } = DD;
        if (bD >= cD || QD <= CD) return;
        fD.isTop && (iD = this.highlighters.filter((DD => !DD.scope || DD.scope(fD))));
        let BD = pD,
          yD = function(DD) {
            let CD = DD.type.prop(wD);
            for (; CD && CD.context && !DD.matchContext(CD.context);) CD = CD.next;
            return CD || null
          }(DD) || SD.empty,
          MD = function(DD, CD) {
            let cD = null;
            for (let ID of DD) {
              let DD = ID.style(CD);
              DD && (cD = cD ? cD + " " + DD : DD)
            }
            return cD
          }(iD, yD.tags);
        if (MD && (BD && (BD += " "), BD += MD, 1 == yD.mode && (pD += (pD ? " " : "") + MD)), this.startSpan(Math.max(CD, bD), BD), yD.opaque) return;
        let tD = DD.tree && DD.tree.prop(ID.g.mounted);
        if (tD && tD.overlay) {
          let ID = DD.node.enter(tD.overlay[0].from + bD, 1),
            fD = this.highlighters.filter((DD => !DD.scope || DD.scope(tD.tree.type))),
            wD = DD.firstChild();
          for (let SD = 0, yD = bD;; SD++) {
            let MD = SD < tD.overlay.length ? tD.overlay[SD] : null,
              ZD = MD ? MD.from + bD : QD,
              oD = Math.max(CD, yD),
              vD = Math.min(cD, ZD);
            if (oD < vD && wD)
              for (; DD.from < vD && (this.highlightRange(DD, oD, vD, pD, iD), this.startSpan(Math.min(vD, DD.to), BD), !(DD.to >= ZD) && DD.nextSibling()););
            if (!MD || ZD > cD) break;
            yD = MD.to + bD, yD > CD && (this.highlightRange(ID.cursor(), Math.max(CD, MD.from + bD), Math.min(cD, yD), "", fD), this.startSpan(Math.min(cD, yD), BD))
          }
          wD && DD.parent()
        } else if (DD.firstChild()) {
          tD && (pD = "");
          do {
            if (!(DD.to <= CD)) {
              if (DD.from >= cD) break;
              this.highlightRange(DD, CD, cD, pD, iD), this.startSpan(Math.min(cD, DD.to), BD)
            }
          } while (DD.nextSibling());
          DD.parent()
        }
      }
    }
    const tD = iD.define,
      ZD = tD(),
      oD = tD(),
      vD = tD(oD),
      ND = tD(oD),
      gD = tD(),
      XD = tD(gD),
      mD = tD(gD),
      nD = tD(),
      OD = tD(nD),
      PD = tD(),
      HD = tD(),
      UD = tD(),
      xD = tD(UD),
      qD = tD(),
      JD = {
        comment: ZD,
        lineComment: tD(ZD),
        blockComment: tD(ZD),
        docComment: tD(ZD),
        name: oD,
        variableName: tD(oD),
        typeName: vD,
        tagName: tD(vD),
        propertyName: ND,
        attributeName: tD(ND),
        className: tD(oD),
        labelName: tD(oD),
        namespace: tD(oD),
        macroName: tD(oD),
        literal: gD,
        string: XD,
        docString: tD(XD),
        character: tD(XD),
        attributeValue: tD(XD),
        number: mD,
        integer: tD(mD),
        float: tD(mD),
        bool: tD(gD),
        regexp: tD(gD),
        escape: tD(gD),
        color: tD(gD),
        url: tD(gD),
        keyword: PD,
        self: tD(PD),
        null: tD(PD),
        atom: tD(PD),
        unit: tD(PD),
        modifier: tD(PD),
        operatorKeyword: tD(PD),
        controlKeyword: tD(PD),
        definitionKeyword: tD(PD),
        moduleKeyword: tD(PD),
        operator: HD,
        derefOperator: tD(HD),
        arithmeticOperator: tD(HD),
        logicOperator: tD(HD),
        bitwiseOperator: tD(HD),
        compareOperator: tD(HD),
        updateOperator: tD(HD),
        definitionOperator: tD(HD),
        typeOperator: tD(HD),
        controlOperator: tD(HD),
        punctuation: UD,
        separator: tD(UD),
        bracket: xD,
        angleBracket: tD(xD),
        squareBracket: tD(xD),
        paren: tD(xD),
        brace: tD(xD),
        content: nD,
        heading: OD,
        heading1: tD(OD),
        heading2: tD(OD),
        heading3: tD(OD),
        heading4: tD(OD),
        heading5: tD(OD),
        heading6: tD(OD),
        contentSeparator: tD(nD),
        list: tD(nD),
        quote: tD(nD),
        emphasis: tD(nD),
        strong: tD(nD),
        link: tD(nD),
        monospace: tD(nD),
        strikethrough: tD(nD),
        inserted: tD(),
        deleted: tD(),
        changed: tD(),
        invalid: tD(),
        meta: qD,
        documentMeta: tD(qD),
        annotation: tD(qD),
        processingInstruction: tD(qD),
        definition: iD.defineModifier("definition"),
        constant: iD.defineModifier("constant"),
        function: iD.defineModifier("function"),
        standard: iD.defineModifier("standard"),
        local: iD.defineModifier("local"),
        special: iD.defineModifier("special")
      };
    for (let KD in JD) {
      let DD = JD[KD];
      DD instanceof iD && (DD.name = KD)
    }
    BD([{
      tag: JD.link,
      class: "tok-link"
    }, {
      tag: JD.heading,
      class: "tok-heading"
    }, {
      tag: JD.emphasis,
      class: "tok-emphasis"
    }, {
      tag: JD.strong,
      class: "tok-strong"
    }, {
      tag: JD.keyword,
      class: "tok-keyword"
    }, {
      tag: JD.atom,
      class: "tok-atom"
    }, {
      tag: JD.bool,
      class: "tok-bool"
    }, {
      tag: JD.url,
      class: "tok-url"
    }, {
      tag: JD.labelName,
      class: "tok-labelName"
    }, {
      tag: JD.inserted,
      class: "tok-inserted"
    }, {
      tag: JD.deleted,
      class: "tok-deleted"
    }, {
      tag: JD.literal,
      class: "tok-literal"
    }, {
      tag: JD.string,
      class: "tok-string"
    }, {
      tag: JD.number,
      class: "tok-number"
    }, {
      tag: [JD.regexp, JD.escape, JD.special(JD.string)],
      class: "tok-string2"
    }, {
      tag: JD.variableName,
      class: "tok-variableName"
    }, {
      tag: JD.local(JD.variableName),
      class: "tok-variableName tok-local"
    }, {
      tag: JD.definition(JD.variableName),
      class: "tok-variableName tok-definition"
    }, {
      tag: JD.special(JD.variableName),
      class: "tok-variableName2"
    }, {
      tag: JD.definition(JD.propertyName),
      class: "tok-propertyName tok-definition"
    }, {
      tag: JD.typeName,
      class: "tok-typeName"
    }, {
      tag: JD.namespace,
      class: "tok-namespace"
    }, {
      tag: JD.className,
      class: "tok-className"
    }, {
      tag: JD.macroName,
      class: "tok-macroName"
    }, {
      tag: JD.propertyName,
      class: "tok-propertyName"
    }, {
      tag: JD.operator,
      class: "tok-operator"
    }, {
      tag: JD.comment,
      class: "tok-comment"
    }, {
      tag: JD.meta,
      class: "tok-meta"
    }, {
      tag: JD.invalid,
      class: "tok-invalid"
    }, {
      tag: JD.punctuation,
      class: "tok-punctuation"
    }])
  },
  40419: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => bD.m,
      f: () => fD.s,
      j: () => fD.D,
      n: () => fD.F,
      q: () => bD.u,
      u: () => Oc,
      w: () => bD.W,
      A: () => bD.wb
    });
    var ID = cD(1377),
      pD = cD(1374),
      iD = cD(53),
      fD = cD(40379),
      bD = cD(40384),
      QD = cD(40398),
      wD = cD(40403);

    function SD(DD, CD) {
      return cD => {
        let {
          state: ID,
          dispatch: pD
        } = cD;
        if (ID.readOnly) return !1;
        let iD = DD(CD, ID);
        return !!iD && (pD(ID.update(iD)), !0)
      }
    }
    const BD = SD(vD, 0),
      yD = SD(oD, 0),
      MD = SD(((DD, CD) => oD(DD, CD, function(DD) {
        let CD = [];
        for (let cD of DD.selection.df) {
          let ID = DD.doc.lineAt(cD.from),
            pD = cD.to <= ID.to ? ID : DD.doc.lineAt(cD.to);
          pD.from > ID.from && pD.from == cD.to && (pD = cD.to == ID.to + 1 ? ID : DD.doc.lineAt(cD.to - 1));
          let iD = CD.length - 1;
          iD >= 0 && CD[iD].to > ID.from ? CD[iD].to = pD.to : CD.push({
            from: ID.from + /^\s*/.exec(ID.text)[0].length,
            to: pD.to
          })
        }
        return CD
      }(CD))), 0);

    function tD(DD, CD) {
      let cD = DD.languageDataAt("commentTokens", CD, 1);
      return cD.length ? cD[0] : {}
    }
    const ZD = 50;

    function oD(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : CD.selection.df,
        ID = cD.map((DD => tD(CD, DD.from).block));
      if (!ID.every((DD => DD))) return null;
      let pD = cD.map(((DD, cD) => function(DD, CD, cD, ID) {
        let pD, iD, {
            open: fD,
            close: bD
          } = CD,
          QD = DD.sliceDoc(cD - ZD, cD),
          wD = DD.sliceDoc(ID, ID + ZD),
          SD = /\s*$/.exec(QD)[0].length,
          BD = /^\s*/.exec(wD)[0].length,
          yD = QD.length - SD;
        if (QD.slice(yD - fD.length, yD) == fD && wD.slice(BD, BD + bD.length) == bD) return {
          open: {
            pos: cD - SD,
            margin: SD && 1
          },
          close: {
            pos: ID + BD,
            margin: BD && 1
          }
        };
        ID - cD <= 2 * ZD ? pD = iD = DD.sliceDoc(cD, ID) : (pD = DD.sliceDoc(cD, cD + ZD), iD = DD.sliceDoc(ID - ZD, ID));
        let MD = /^\s*/.exec(pD)[0].length,
          tD = /\s*$/.exec(iD)[0].length,
          oD = iD.length - tD - bD.length;
        return pD.slice(MD, MD + fD.length) == fD && iD.slice(oD, oD + bD.length) == bD ? {
          open: {
            pos: cD + MD + fD.length,
            margin: /\s/.test(pD.charAt(MD + fD.length)) ? 1 : 0
          },
          close: {
            pos: ID - tD - bD.length,
            margin: /\s/.test(iD.charAt(oD - 1)) ? 1 : 0
          }
        } : null
      }(CD, ID[cD], DD.from, DD.to)));
      if (2 != DD && !pD.every((DD => DD))) return {
        changes: CD.changes(cD.map(((DD, CD) => pD[CD] ? [] : [{
          from: DD.from,
          insert: ID[CD].open + " "
        }, {
          from: DD.to,
          insert: " " + ID[CD].close
        }])))
      };
      if (1 != DD && pD.some((DD => DD))) {
        let DD = [];
        for (let CD, cD = 0; cD < pD.length; cD++)
          if (CD = pD[cD]) {
            let pD = ID[cD],
              {
                open: iD,
                close: fD
              } = CD;
            DD.push({
              from: iD.pos - pD.open.length,
              to: iD.pos + iD.margin
            }, {
              from: fD.pos - fD.margin,
              to: fD.pos + pD.close.length
            })
          } return {
          changes: DD
        }
      }
      return null
    }

    function vD(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : CD.selection.df,
        ID = [],
        pD = -1;
      DD: for (let {
          from: iD,
          to: fD
        }
        of cD) {
        let DD, cD = ID.length,
          bD = 1e9;
        for (let QD = iD; QD <= fD;) {
          let cD = CD.doc.lineAt(QD);
          if (void 0 == DD && (DD = tD(CD, cD.from).line, !DD)) continue DD;
          if (cD.from > pD && (iD == fD || fD > cD.from)) {
            pD = cD.from;
            let CD = /^\s*/.exec(cD.text)[0].length,
              iD = CD == cD.length,
              fD = cD.text.slice(CD, CD + DD.length) == DD ? CD : -1;
            CD < cD.text.length && CD < bD && (bD = CD), ID.push({
              line: cD,
              comment: fD,
              token: DD,
              indent: CD,
              empty: iD,
              single: !1
            })
          }
          QD = cD.to + 1
        }
        if (bD < 1e9)
          for (let CD = cD; CD < ID.length; CD++) ID[CD].indent < ID[CD].line.text.length && (ID[CD].indent = bD);
        ID.length == cD + 1 && (ID[cD].single = !0)
      }
      if (2 != DD && ID.some((DD => DD.comment < 0 && (!DD.empty || DD.single)))) {
        let DD = [];
        for (let {
            line: CD,
            token: pD,
            indent: iD,
            empty: fD,
            single: bD
          }
          of ID) !bD && fD || DD.push({
          from: CD.from + iD,
          insert: pD + " "
        });
        let cD = CD.changes(DD);
        return {
          changes: cD,
          selection: CD.selection.map(cD, 1)
        }
      }
      if (1 != DD && ID.some((DD => DD.comment >= 0))) {
        let DD = [];
        for (let {
            line: CD,
            comment: cD,
            token: pD
          }
          of ID)
          if (cD >= 0) {
            let ID = CD.from + cD,
              iD = ID + pD.length;
            " " == CD.text[iD - CD.from] && iD++, DD.push({
              from: ID,
              to: iD
            })
          } return {
          changes: DD
        }
      }
      return null
    }
    const ND = fD.c.define(),
      gD = fD.c.define(),
      XD = fD.l.define(),
      mD = fD.l.define({
        combine: DD => (0, fD.U)(DD, {
          minDepth: 100,
          newGroupDelay: 500,
          joinToEvent: (DD, CD) => CD
        }, {
          minDepth: Math.max,
          newGroupDelay: Math.min,
          joinToEvent: (DD, CD) => (cD, ID) => DD(cD, ID) || CD(cD, ID)
        })
      }),
      nD = fD.F.define({
        create: () => GD.empty,
        update(DD, CD) {
          let cD = CD.state.facet(mD),
            ID = CD.annotation(ND);
          if (ID) {
            let pD = qD.fromTransaction(CD, ID.selection),
              iD = ID.side,
              fD = 0 == iD ? DD.undone : DD.done;
            return fD = pD ? JD(fD, fD.length, cD.minDepth, pD) : zD(fD, CD.startState.selection), new GD(0 == iD ? ID.rest : fD, 0 == iD ? fD : ID.rest)
          }
          let pD = CD.annotation(gD);
          if ("full" != pD && "before" != pD || (DD = DD.isolate()), !1 === CD.annotation(fD.L.addToHistory)) return CD.changes.empty ? DD : DD.addMapping(CD.changes.desc);
          let iD = qD.fromTransaction(CD),
            bD = CD.annotation(fD.L.time),
            QD = CD.annotation(fD.L.userEvent);
          return iD ? DD = DD.addChanges(iD, bD, QD, cD, CD) : CD.selection && (DD = DD.addSelection(CD.startState.selection, bD, QD, cD.newGroupDelay)), "full" != pD && "after" != pD || (DD = DD.isolate()), DD
        },
        toJSON: DD => ({
          done: DD.done.map((DD => DD.toJSON())),
          undone: DD.undone.map((DD => DD.toJSON()))
        }),
        fromJSON: DD => new GD(DD.done.map(qD.fromJSON), DD.undone.map(qD.fromJSON))
      });

    function OD(DD, CD) {
      return function(cD) {
        let {
          state: ID,
          dispatch: pD
        } = cD;
        if (!CD && ID.readOnly) return !1;
        let iD = ID.field(nD, !1);
        if (!iD) return !1;
        let fD = iD.pop(DD, ID, CD);
        return !!fD && (pD(fD), !0)
      }
    }
    const PD = OD(0, !1),
      HD = OD(1, !1),
      UD = OD(0, !0),
      xD = OD(1, !0);
    class qD {
      constructor(DD, CD, cD, ID, pD) {
        this.changes = DD, this.effects = CD, this.mapped = cD, this.startSelection = ID, this.selectionsAfter = pD
      }
      setSelAfter(DD) {
        return new qD(this.changes, this.effects, this.mapped, this.startSelection, DD)
      }
      toJSON() {
        var DD, CD, cD;
        return {
          changes: null === (DD = this.changes) || void 0 === DD ? void 0 : DD.toJSON(),
          mapped: null === (CD = this.mapped) || void 0 === CD ? void 0 : CD.toJSON(),
          startSelection: null === (cD = this.startSelection) || void 0 === cD ? void 0 : cD.toJSON(),
          selectionsAfter: this.selectionsAfter.map((DD => DD.toJSON()))
        }
      }
      static fromJSON(DD) {
        return new qD(DD.changes && fD.ChangeSet.fromJSON(DD.changes), [], DD.mapped && fD.e.fromJSON(DD.mapped), DD.startSelection && fD.i.fromJSON(DD.startSelection), DD.selectionsAfter.map(fD.i.fromJSON))
      }
      static fromTransaction(DD, CD) {
        let cD = aD;
        for (let ID of DD.startState.facet(XD)) {
          let CD = ID(DD);
          CD.length && (cD = cD.concat(CD))
        }
        return !cD.length && DD.changes.empty ? null : new qD(DD.changes.invert(DD.startState.doc), cD, void 0, CD || DD.startState.selection, aD)
      }
      static selection(DD) {
        return new qD(void 0, aD, void 0, void 0, DD)
      }
    }

    function JD(DD, CD, cD, ID) {
      let pD = CD + 1 > cD + 20 ? CD - cD - 1 : 0,
        iD = DD.slice(pD, CD);
      return iD.push(ID), iD
    }

    function KD(DD, CD) {
      return DD.length ? CD.length ? DD.concat(CD) : DD : CD
    }
    const aD = [],
      VD = 200;

    function zD(DD, CD) {
      if (DD.length) {
        let cD = DD[DD.length - 1],
          ID = cD.selectionsAfter.slice(Math.max(0, cD.selectionsAfter.length - VD));
        return ID.length && ID[ID.length - 1].eq(CD) ? DD : (ID.push(CD), JD(DD, DD.length - 1, 1e9, cD.setSelAfter(ID)))
      }
      return [qD.selection([CD])]
    }

    function jD(DD) {
      let CD = DD[DD.length - 1],
        cD = DD.slice();
      return cD[DD.length - 1] = CD.setSelAfter(CD.selectionsAfter.slice(0, CD.selectionsAfter.length - 1)), cD
    }

    function lD(DD, CD) {
      if (!DD.length) return DD;
      let cD = DD.length,
        ID = aD;
      for (; cD;) {
        let pD = LD(DD[cD - 1], CD, ID);
        if (pD.changes && !pD.changes.empty || pD.effects.length) {
          let CD = DD.slice(0, cD);
          return CD[cD - 1] = pD, CD
        }
        CD = pD.mapped, cD--, ID = pD.selectionsAfter
      }
      return ID.length ? [qD.selection(ID)] : aD
    }

    function LD(DD, CD, cD) {
      let ID = KD(DD.selectionsAfter.length ? DD.selectionsAfter.map((DD => DD.map(CD))) : aD, cD);
      if (!DD.changes) return qD.selection(ID);
      let pD = DD.changes.map(CD),
        iD = CD.mapDesc(DD.changes, !0),
        bD = DD.mapped ? DD.mapped.composeDesc(iD) : iD;
      return new qD(pD, fD.D.mapEffects(DD.effects, CD), bD, DD.startSelection.map(iD), ID)
    }
    const TD = /^(input\.type|delete)($|\.)/;
    class GD {
      constructor(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        this.done = DD, this.undone = CD, this.prevTime = cD, this.prevUserEvent = ID
      }
      isolate() {
        return this.prevTime ? new GD(this.done, this.undone) : this
      }
      addChanges(DD, CD, cD, ID, pD) {
        let iD = this.done,
          bD = iD[iD.length - 1];
        return iD = bD && bD.changes && !bD.changes.empty && DD.changes && (!cD || TD.test(cD)) && (!bD.selectionsAfter.length && CD - this.prevTime < ID.newGroupDelay && ID.joinToEvent(pD, function(DD, CD) {
          let cD = [],
            ID = !1;
          return DD.iterChangedRanges(((DD, CD) => cD.push(DD, CD))), CD.iterChangedRanges(((DD, CD, pD, iD) => {
            for (let fD = 0; fD < cD.length;) {
              let DD = cD[fD++],
                CD = cD[fD++];
              iD >= DD && pD <= CD && (ID = !0)
            }
          })), ID
        }(bD.changes, DD.changes)) || "input.type.compose" == cD) ? JD(iD, iD.length - 1, ID.minDepth, new qD(DD.changes.compose(bD.changes), KD(fD.D.mapEffects(DD.effects, bD.changes), bD.effects), bD.mapped, bD.startSelection, aD)) : JD(iD, iD.length, ID.minDepth, DD), new GD(iD, aD, CD, cD)
      }
      addSelection(DD, CD, cD, ID) {
        let pD = this.done.length ? this.done[this.done.length - 1].selectionsAfter : aD;
        return pD.length > 0 && CD - this.prevTime < ID && cD == this.prevUserEvent && cD && /^select($|\.)/.test(cD) && (iD = pD[pD.length - 1], fD = DD, iD.df.length == fD.df.length && 0 === iD.df.filter(((DD, CD) => DD.empty != fD.df[CD].empty)).length) ? this : new GD(zD(this.done, DD), this.undone, CD, cD);
        var iD, fD
      }
      addMapping(DD) {
        return new GD(lD(this.done, DD), lD(this.undone, DD), this.prevTime, this.prevUserEvent)
      }
      pop(DD, CD, cD) {
        let ID = 0 == DD ? this.done : this.undone;
        if (0 == ID.length) return null;
        let pD = ID[ID.length - 1],
          iD = pD.selectionsAfter[0] || (pD.startSelection ? pD.startSelection.map(pD.changes.invertedDesc, 1) : CD.selection);
        if (cD && pD.selectionsAfter.length) return CD.update({
          selection: pD.selectionsAfter[pD.selectionsAfter.length - 1],
          annotations: ND.of({
            side: DD,
            rest: jD(ID),
            selection: iD
          }),
          userEvent: 0 == DD ? "select.undo" : "select.redo",
          scrollIntoView: !0
        });
        if (pD.changes) {
          let cD = 1 == ID.length ? aD : ID.slice(0, ID.length - 1);
          return pD.mapped && (cD = lD(cD, pD.mapped)), CD.update({
            changes: pD.changes,
            selection: pD.startSelection,
            effects: pD.effects,
            annotations: ND.of({
              side: DD,
              rest: cD,
              selection: iD
            }),
            filter: !1,
            userEvent: 0 == DD ? "undo" : "redo",
            scrollIntoView: !0
          })
        }
        return null
      }
    }
    GD.empty = new GD(aD, aD);
    const RD = [{
      key: "Mod-z",
      run: PD,
      preventDefault: !0
    }, {
      key: "Mod-y",
      mac: "Mod-Shift-z",
      run: HD,
      preventDefault: !0
    }, {
      linux: "Ctrl-Shift-z",
      run: HD,
      preventDefault: !0
    }, {
      key: "Mod-u",
      run: UD,
      preventDefault: !0
    }, {
      key: "Alt-u",
      mac: "Mod-Shift-u",
      run: xD,
      preventDefault: !0
    }];

    function kD(DD, CD) {
      return fD.i.create(DD.df.map(CD), DD.mainIndex)
    }

    function dD(DD, CD) {
      return DD.update({
        selection: CD,
        scrollIntoView: !0,
        userEvent: "select"
      })
    }

    function YD(DD, CD) {
      let {
        state: cD,
        dispatch: ID
      } = DD, pD = kD(cD.selection, CD);
      return !pD.eq(cD.selection, !0) && (ID(dD(cD, pD)), !0)
    }

    function WD(DD, CD) {
      return fD.i.cursor(CD ? DD.to : DD.from)
    }

    function sD(DD, CD) {
      return YD(DD, (cD => cD.empty ? DD.moveByChar(cD, CD) : WD(cD, CD)))
    }

    function ED(DD) {
      return DD.textDirectionAt(DD.state.selection.main.head) == bD.i.LTR
    }
    const eD = DD => sD(DD, !ED(DD)),
      uD = DD => sD(DD, ED(DD));

    function hD(DD, CD) {
      return YD(DD, (cD => cD.empty ? DD.moveByGroup(cD, CD) : WD(cD, CD)))
    }
    "undefined" != typeof Intl && Intl.Segmenter;

    function rD(DD, CD, cD) {
      if (CD.type.prop(cD)) return !0;
      let ID = CD.to - CD.from;
      return ID && (ID > 2 || /[^\s,.;:]/.test(DD.sliceDoc(CD.from, CD.to))) || CD.firstChild
    }

    function AD(DD, CD, cD) {
      let ID, pD, iD = (0, QD.mb)(DD).resolveInner(CD.head),
        bD = cD ? wD.g.closedBy : wD.g.openedBy;
      for (let fD = CD.head;;) {
        let CD = cD ? iD.childAfter(fD) : iD.childBefore(fD);
        if (!CD) break;
        rD(DD, CD, bD) ? iD = CD : fD = cD ? CD.to : CD.from
      }
      return pD = iD.type.prop(bD) && (ID = cD ? (0, QD.hb)(DD, iD.from, 1) : (0, QD.hb)(DD, iD.to, -1)) && ID.matched ? cD ? ID.end.to : ID.end.from : cD ? iD.to : iD.from, fD.i.cursor(pD, cD ? -1 : 1)
    }

    function FD(DD, CD) {
      return YD(DD, (cD => {
        if (!cD.empty) return WD(cD, CD);
        let ID = DD.moveVertically(cD, CD);
        return ID.head != cD.head ? ID : DD.moveToLineBoundary(cD, CD)
      }))
    }
    const DC = DD => FD(DD, !1),
      CC = DD => FD(DD, !0);

    function cC(DD) {
      let CD, cD = DD.scrollDOM.clientHeight < DD.scrollDOM.scrollHeight - 2,
        ID = 0,
        pD = 0;
      if (cD) {
        for (let CD of DD.state.facet(bD.m.scrollMargins)) {
          let cD = CD(DD);
          (null === cD || void 0 === cD ? void 0 : cD.top) && (ID = Math.max(null === cD || void 0 === cD ? void 0 : cD.top, ID)), (null === cD || void 0 === cD ? void 0 : cD.bottom) && (pD = Math.max(null === cD || void 0 === cD ? void 0 : cD.bottom, pD))
        }
        CD = DD.scrollDOM.clientHeight - ID - pD
      } else CD = (DD.dom.ownerDocument.defaultView || window).innerHeight;
      return {
        marginTop: ID,
        marginBottom: pD,
        selfScroll: cD,
        height: Math.max(DD.defaultLineHeight, CD - 5)
      }
    }

    function IC(DD, CD) {
      let cD, ID = cC(DD),
        {
          state: pD
        } = DD,
        iD = kD(pD.selection, (cD => cD.empty ? DD.moveVertically(cD, CD, ID.height) : WD(cD, CD)));
      if (iD.eq(pD.selection)) return !1;
      if (ID.selfScroll) {
        let CD = DD.coordsAtPos(pD.selection.main.head),
          fD = DD.scrollDOM.getBoundingClientRect(),
          QD = fD.top + ID.marginTop,
          wD = fD.bottom - ID.marginBottom;
        CD && CD.top > QD && CD.bottom < wD && (cD = bD.m.scrollIntoView(iD.main.head, {
          y: "start",
          yMargin: CD.top - QD
        }))
      }
      return DD.dispatch(dD(pD, iD), {
        effects: cD
      }), !0
    }
    const pC = DD => IC(DD, !1),
      iC = DD => IC(DD, !0);

    function fC(DD, CD, cD) {
      let ID = DD.lineBlockAt(CD.head),
        pD = DD.moveToLineBoundary(CD, cD);
      if (pD.head == CD.head && pD.head != (cD ? ID.to : ID.from) && (pD = DD.moveToLineBoundary(CD, cD, !1)), !cD && pD.head == ID.from && ID.length) {
        let cD = /^\s*/.exec(DD.state.sliceDoc(ID.from, Math.min(ID.from + 100, ID.to)))[0].length;
        cD && CD.head != ID.from + cD && (pD = fD.i.cursor(ID.from + cD))
      }
      return pD
    }

    function bC(DD, CD, cD) {
      let ID = !1,
        pD = kD(DD.selection, (CD => {
          let pD = (0, QD.hb)(DD, CD.head, -1) || (0, QD.hb)(DD, CD.head, 1) || CD.head > 0 && (0, QD.hb)(DD, CD.head - 1, 1) || CD.head < DD.doc.length && (0, QD.hb)(DD, CD.head + 1, -1);
          if (!pD || !pD.end) return CD;
          ID = !0;
          let iD = pD.start.from == CD.head ? pD.end.to : pD.end.from;
          return cD ? fD.i.range(CD.anchor, iD) : fD.i.cursor(iD)
        }));
      return !!ID && (CD(dD(DD, pD)), !0)
    }

    function QC(DD, CD) {
      let cD = kD(DD.state.selection, (DD => {
        let cD = CD(DD);
        return fD.i.range(DD.anchor, cD.head, cD.goalColumn, cD.bidiLevel || void 0, cD.assoc)
      }));
      return !cD.eq(DD.state.selection) && (DD.dispatch(dD(DD.state, cD)), !0)
    }

    function wC(DD, CD) {
      return QC(DD, (cD => DD.moveByChar(cD, CD)))
    }
    const SC = DD => wC(DD, !ED(DD)),
      BC = DD => wC(DD, ED(DD));

    function yC(DD, CD) {
      return QC(DD, (cD => DD.moveByGroup(cD, CD)))
    }

    function MC(DD, CD) {
      return QC(DD, (cD => DD.moveVertically(cD, CD)))
    }
    const tC = DD => MC(DD, !1),
      ZC = DD => MC(DD, !0);

    function oC(DD, CD) {
      return QC(DD, (cD => DD.moveVertically(cD, CD, cC(DD).height)))
    }
    const vC = DD => oC(DD, !1),
      NC = DD => oC(DD, !0),
      gC = DD => {
        let {
          state: CD,
          dispatch: cD
        } = DD;
        return cD(dD(CD, {
          anchor: 0
        })), !0
      },
      XC = DD => {
        let {
          state: CD,
          dispatch: cD
        } = DD;
        return cD(dD(CD, {
          anchor: CD.doc.length
        })), !0
      },
      mC = DD => {
        let {
          state: CD,
          dispatch: cD
        } = DD;
        return cD(dD(CD, {
          anchor: CD.selection.main.anchor,
          head: 0
        })), !0
      },
      nC = DD => {
        let {
          state: CD,
          dispatch: cD
        } = DD;
        return cD(dD(CD, {
          anchor: CD.selection.main.anchor,
          head: CD.doc.length
        })), !0
      };

    function OC(DD, CD) {
      let {
        state: cD
      } = DD, ID = cD.selection, pD = cD.selection.df.slice();
      for (let iD of cD.selection.df) {
        let ID = cD.doc.lineAt(iD.head);
        if (CD ? ID.to < DD.state.doc.length : ID.from > 0)
          for (let cD = iD;;) {
            let iD = DD.moveVertically(cD, CD);
            if (iD.head < ID.from || iD.head > ID.to) {
              pD.some((DD => DD.head == iD.head)) || pD.push(iD);
              break
            }
            if (iD.head == cD.head) break;
            cD = iD
          }
      }
      return pD.length != ID.df.length && (DD.dispatch(dD(cD, fD.i.create(pD, pD.length - 1))), !0)
    }

    function PC(DD, CD) {
      if (DD.state.readOnly) return !1;
      let cD = "delete.selection",
        {
          state: ID
        } = DD,
        pD = ID.changeByRange((ID => {
          let {
            from: pD,
            to: iD
          } = ID;
          if (pD == iD) {
            let fD = CD(ID);
            fD < pD ? (cD = "delete.backward", fD = HC(DD, fD, !1)) : fD > pD && (cD = "delete.forward", fD = HC(DD, fD, !0)), pD = Math.min(pD, fD), iD = Math.max(iD, fD)
          } else pD = HC(DD, pD, !1), iD = HC(DD, iD, !0);
          return pD == iD ? {
            range: ID
          } : {
            changes: {
              from: pD,
              to: iD
            },
            range: fD.i.cursor(pD, pD < ID.head ? -1 : 1)
          }
        }));
      return !pD.changes.empty && (DD.dispatch(ID.update(pD, {
        scrollIntoView: !0,
        userEvent: cD,
        effects: "delete.selection" == cD ? bD.m.announce.of(ID.phrase("Selection deleted")) : void 0
      })), !0)
    }

    function HC(DD, CD, cD) {
      if (DD instanceof bD.m)
        for (let ID of DD.state.facet(bD.m.atomicRanges).map((CD => CD(DD)))) ID.between(CD, CD, ((DD, ID) => {
          DD < CD && ID > CD && (CD = cD ? ID : DD)
        }));
      return CD
    }
    const UC = (DD, CD, cD) => PC(DD, (ID => {
        let pD, iD, bD = ID.from,
          {
            state: wD
          } = DD,
          SD = wD.doc.lineAt(bD);
        if (cD && !CD && bD > SD.from && bD < SD.from + 200 && !/[^ \t]/.test(pD = SD.text.slice(0, bD - SD.from))) {
          if ("\t" == pD[pD.length - 1]) return bD - 1;
          let DD = (0, fD.Y)(pD, wD.tabSize) % (0, QD.V)(wD) || (0, QD.V)(wD);
          for (let CD = 0; CD < DD && " " == pD[pD.length - 1 - CD]; CD++) bD--;
          iD = bD
        } else iD = (0, fD._)(SD.text, bD - SD.from, CD, CD) + SD.from, iD == bD && SD.number != (CD ? wD.doc.lines : 1) ? iD += CD ? 1 : -1 : !CD && /[\ufe00-\ufe0f]/.test(SD.text.slice(iD - SD.from, bD - SD.from)) && (iD = (0, fD._)(SD.text, iD - SD.from, !1, !1) + SD.from);
        return iD
      })),
      xC = DD => UC(DD, !1, !0),
      qC = DD => UC(DD, !0, !1),
      JC = (DD, CD) => PC(DD, (cD => {
        let ID = cD.head,
          {
            state: pD
          } = DD,
          iD = pD.doc.lineAt(ID),
          bD = pD.charCategorizer(ID);
        for (let DD = null;;) {
          if (ID == (CD ? iD.to : iD.from)) {
            ID == cD.head && iD.number != (CD ? pD.doc.lines : 1) && (ID += CD ? 1 : -1);
            break
          }
          let QD = (0, fD._)(iD.text, ID - iD.from, CD) + iD.from,
            wD = iD.text.slice(Math.min(ID, QD) - iD.from, Math.max(ID, QD) - iD.from),
            SD = bD(wD);
          if (null != DD && SD != DD) break;
          " " == wD && ID == cD.head || (DD = SD), ID = QD
        }
        return ID
      })),
      KC = DD => JC(DD, !1);

    function aC(DD) {
      let CD = [],
        cD = -1;
      for (let ID of DD.selection.df) {
        let pD = DD.doc.lineAt(ID.from),
          iD = DD.doc.lineAt(ID.to);
        if (ID.empty || ID.to != iD.from || (iD = DD.doc.lineAt(ID.to - 1)), cD >= pD.number) {
          let DD = CD[CD.length - 1];
          DD.to = iD.to, DD.df.push(ID)
        } else CD.push({
          from: pD.from,
          to: iD.to,
          df: [ID]
        });
        cD = iD.number + 1
      }
      return CD
    }

    function VC(DD, CD, cD) {
      if (DD.readOnly) return !1;
      let ID = [],
        pD = [];
      for (let iD of aC(DD)) {
        if (cD ? iD.to == DD.doc.length : 0 == iD.from) continue;
        let CD = DD.doc.lineAt(cD ? iD.to + 1 : iD.from - 1),
          bD = CD.length + 1;
        if (cD) {
          ID.push({
            from: iD.to,
            to: CD.to
          }, {
            from: iD.from,
            insert: CD.text + DD.lineBreak
          });
          for (let CD of iD.df) pD.push(fD.i.range(Math.min(DD.doc.length, CD.anchor + bD), Math.min(DD.doc.length, CD.head + bD)))
        } else {
          ID.push({
            from: CD.from,
            to: iD.from
          }, {
            from: iD.to,
            insert: DD.lineBreak + CD.text
          });
          for (let DD of iD.df) pD.push(fD.i.range(DD.anchor - bD, DD.head - bD))
        }
      }
      return !!ID.length && (CD(DD.update({
        changes: ID,
        scrollIntoView: !0,
        selection: fD.i.create(pD, DD.selection.mainIndex),
        userEvent: "move.line"
      })), !0)
    }

    function zC(DD, CD, cD) {
      if (DD.readOnly) return !1;
      let ID = [];
      for (let iD of aC(DD)) cD ? ID.push({
        from: iD.from,
        insert: DD.doc.slice(iD.from, iD.to) + DD.lineBreak
      }) : ID.push({
        from: iD.to,
        insert: DD.lineBreak + DD.doc.slice(iD.from, iD.to)
      });
      let pD = DD.changes(ID);
      return CD(DD.update({
        changes: pD,
        selection: DD.selection.map(pD, cD ? 1 : -1),
        scrollIntoView: !0,
        userEvent: "input.copyline"
      })), !0
    }
    const jC = lC(!1);

    function lC(DD) {
      return CD => {
        let {
          state: cD,
          dispatch: ID
        } = CD;
        if (cD.readOnly) return !1;
        let pD = cD.changeByRange((CD => {
          let {
            from: ID,
            to: pD
          } = CD, iD = cD.doc.lineAt(ID), bD = !DD && ID == pD && function(DD, CD) {
            if (/\(\)|\[\]|\{\}/.test(DD.sliceDoc(CD - 1, CD + 1))) return {
              from: CD,
              to: CD
            };
            let cD, ID = (0, QD.mb)(DD).resolveInner(CD),
              pD = ID.childBefore(CD),
              iD = ID.childAfter(CD);
            return pD && iD && pD.to <= CD && iD.from >= CD && (cD = pD.type.prop(wD.g.closedBy)) && cD.indexOf(iD.name) > -1 && DD.doc.lineAt(pD.to).from == DD.doc.lineAt(iD.from).from && !/\S/.test(DD.sliceDoc(pD.to, iD.from)) ? {
              from: pD.to,
              to: iD.from
            } : null
          }(cD, ID);
          DD && (ID = pD = (pD <= iD.to ? iD : cD.doc.lineAt(pD)).to);
          let SD = new QD.f(cD, {
              simulateBreak: ID,
              simulateDoubleBreak: !!bD
            }),
            BD = (0, QD.W)(SD, ID);
          for (null == BD && (BD = (0, fD.Y)(/^\s*/.exec(cD.doc.lineAt(ID).text)[0], cD.tabSize)); pD < iD.to && /\s/.test(iD.text[pD - iD.from]);) pD++;
          bD ? ({
            from: ID,
            to: pD
          } = bD) : ID > iD.from && ID < iD.from + 100 && !/\S/.test(iD.text.slice(0, ID)) && (ID = iD.from);
          let yD = ["", (0, QD.eb)(cD, BD)];
          return bD && yD.push((0, QD.eb)(cD, SD.lineIndent(iD.from, -1))), {
            changes: {
              from: ID,
              to: pD,
              insert: fD.J.of(yD)
            },
            range: fD.i.cursor(ID + 1 + yD[1].length)
          }
        }));
        return ID(cD.update(pD, {
          scrollIntoView: !0,
          userEvent: "input"
        })), !0
      }
    }

    function LC(DD, CD) {
      let cD = -1;
      return DD.changeByRange((ID => {
        let pD = [];
        for (let fD = ID.from; fD <= ID.to;) {
          let iD = DD.doc.lineAt(fD);
          iD.number > cD && (ID.empty || ID.to > iD.from) && (CD(iD, pD, ID), cD = iD.number), fD = iD.to + 1
        }
        let iD = DD.changes(pD);
        return {
          changes: pD,
          range: fD.i.range(iD.mapPos(ID.anchor, 1), iD.mapPos(ID.head, 1))
        }
      }))
    }
    const TC = DD => {
        let {
          state: CD,
          dispatch: cD
        } = DD;
        return !CD.readOnly && (cD(CD.update(LC(CD, ((DD, cD) => {
          cD.push({
            from: DD.from,
            insert: CD.facet(QD.gb)
          })
        })), {
          userEvent: "input.indent"
        })), !0)
      },
      GC = DD => {
        let {
          state: CD,
          dispatch: cD
        } = DD;
        return !CD.readOnly && (cD(CD.update(LC(CD, ((DD, cD) => {
          let ID = /^\s*/.exec(DD.text)[0];
          if (!ID) return;
          let pD = (0, fD.Y)(ID, CD.tabSize),
            iD = 0,
            bD = (0, QD.eb)(CD, Math.max(0, pD - (0, QD.V)(CD)));
          for (; iD < ID.length && iD < bD.length && ID.charCodeAt(iD) == bD.charCodeAt(iD);) iD++;
          cD.push({
            from: DD.from + iD,
            to: DD.from + ID.length,
            insert: bD.slice(iD)
          })
        })), {
          userEvent: "delete.dedent"
        })), !0)
      },
      RC = [{
        key: "Alt-ArrowLeft",
        mac: "Ctrl-ArrowLeft",
        run: DD => YD(DD, (CD => AD(DD.state, CD, !ED(DD)))),
        shift: DD => QC(DD, (CD => AD(DD.state, CD, !ED(DD))))
      }, {
        key: "Alt-ArrowRight",
        mac: "Ctrl-ArrowRight",
        run: DD => YD(DD, (CD => AD(DD.state, CD, ED(DD)))),
        shift: DD => QC(DD, (CD => AD(DD.state, CD, ED(DD))))
      }, {
        key: "Alt-ArrowUp",
        run: DD => {
          let {
            state: CD,
            dispatch: cD
          } = DD;
          return VC(CD, cD, !1)
        }
      }, {
        key: "Shift-Alt-ArrowUp",
        run: DD => {
          let {
            state: CD,
            dispatch: cD
          } = DD;
          return zC(CD, cD, !1)
        }
      }, {
        key: "Alt-ArrowDown",
        run: DD => {
          let {
            state: CD,
            dispatch: cD
          } = DD;
          return VC(CD, cD, !0)
        }
      }, {
        key: "Shift-Alt-ArrowDown",
        run: DD => {
          let {
            state: CD,
            dispatch: cD
          } = DD;
          return zC(CD, cD, !0)
        }
      }, {
        key: "Mod-Alt-ArrowUp",
        run: DD => OC(DD, !1)
      }, {
        key: "Mod-Alt-ArrowDown",
        run: DD => OC(DD, !0)
      }, {
        key: "Escape",
        run: DD => {
          let {
            state: CD,
            dispatch: cD
          } = DD, ID = CD.selection, pD = null;
          return ID.df.length > 1 ? pD = fD.i.create([ID.main]) : ID.main.empty || (pD = fD.i.create([fD.i.cursor(ID.main.head)])), !!pD && (cD(dD(CD, pD)), !0)
        }
      }, {
        key: "Mod-Enter",
        run: lC(!0)
      }, {
        key: "Alt-l",
        mac: "Ctrl-l",
        run: DD => {
          let {
            state: CD,
            dispatch: cD
          } = DD, ID = aC(CD).map((DD => {
            let {
              from: cD,
              to: ID
            } = DD;
            return fD.i.range(cD, Math.min(ID + 1, CD.doc.length))
          }));
          return cD(CD.update({
            selection: fD.i.create(ID),
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Mod-i",
        run: DD => {
          let {
            state: CD,
            dispatch: cD
          } = DD, ID = kD(CD.selection, (DD => {
            let cD = (0, QD.mb)(CD),
              ID = cD.resolveStack(DD.from, 1);
            if (DD.empty) {
              let CD = cD.resolveStack(DD.from, -1);
              CD.node.from >= ID.node.from && CD.node.to <= ID.node.to && (ID = CD)
            }
            for (let CD = ID; CD; CD = CD.next) {
              let {
                node: cD
              } = CD;
              if ((cD.from < DD.from && cD.to >= DD.to || cD.to > DD.to && cD.from <= DD.from) && CD.next) return fD.i.range(cD.to, cD.from)
            }
            return DD
          }));
          return !ID.eq(CD.selection) && (cD(dD(CD, ID)), !0)
        },
        preventDefault: !0
      }, {
        key: "Mod-[",
        run: GC
      }, {
        key: "Mod-]",
        run: TC
      }, {
        key: "Mod-Alt-\\",
        run: DD => {
          let {
            state: CD,
            dispatch: cD
          } = DD;
          if (CD.readOnly) return !1;
          let ID = Object.create(null),
            pD = new QD.f(CD, {
              overrideIndentation: DD => {
                let CD = ID[DD];
                return null == CD ? -1 : CD
              }
            }),
            iD = LC(CD, ((DD, cD, iD) => {
              let fD = (0, QD.W)(pD, DD.from);
              if (null == fD) return;
              /\S/.test(DD.text) || (fD = 0);
              let bD = /^\s*/.exec(DD.text)[0],
                wD = (0, QD.eb)(CD, fD);
              (bD != wD || iD.from < DD.from + bD.length) && (ID[DD.from] = fD, cD.push({
                from: DD.from,
                to: DD.from + bD.length,
                insert: wD
              }))
            }));
          return iD.changes.empty || cD(CD.update(iD, {
            userEvent: "indent"
          })), !0
        }
      }, {
        key: "Shift-Mod-k",
        run: DD => {
          if (DD.state.readOnly) return !1;
          let {
            state: CD
          } = DD, cD = CD.changes(aC(CD).map((DD => {
            let {
              from: cD,
              to: ID
            } = DD;
            return cD > 0 ? cD-- : ID < CD.doc.length && ID++, {
              from: cD,
              to: ID
            }
          }))), ID = kD(CD.selection, (CD => {
            let cD;
            if (DD.lineWrapping) {
              let ID = DD.lineBlockAt(CD.head),
                pD = DD.coordsAtPos(CD.head, CD.assoc || 1);
              pD && (cD = ID.bottom + DD.documentTop - pD.bottom + DD.defaultLineHeight / 2)
            }
            return DD.moveVertically(CD, !0, cD)
          })).map(cD);
          return DD.dispatch({
            changes: cD,
            selection: ID,
            scrollIntoView: !0,
            userEvent: "delete.line"
          }), !0
        }
      }, {
        key: "Shift-Mod-\\",
        run: DD => {
          let {
            state: CD,
            dispatch: cD
          } = DD;
          return bC(CD, cD, !1)
        }
      }, {
        key: "Mod-/",
        run: DD => {
          let {
            state: CD
          } = DD, cD = CD.doc.lineAt(CD.selection.main.from), ID = tD(DD.state, cD.from);
          return ID.line ? BD(DD) : !!ID.block && MD(DD)
        }
      }, {
        key: "Alt-A",
        run: yD
      }, {
        key: "Ctrl-m",
        mac: "Shift-Alt-m",
        run: DD => (DD.setTabFocusMode(), !0)
      }].concat([{
        key: "ArrowLeft",
        run: eD,
        shift: SC,
        preventDefault: !0
      }, {
        key: "Mod-ArrowLeft",
        mac: "Alt-ArrowLeft",
        run: DD => hD(DD, !ED(DD)),
        shift: DD => yC(DD, !ED(DD)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowLeft",
        run: DD => YD(DD, (CD => fC(DD, CD, !ED(DD)))),
        shift: DD => QC(DD, (CD => fC(DD, CD, !ED(DD)))),
        preventDefault: !0
      }, {
        key: "ArrowRight",
        run: uD,
        shift: BC,
        preventDefault: !0
      }, {
        key: "Mod-ArrowRight",
        mac: "Alt-ArrowRight",
        run: DD => hD(DD, ED(DD)),
        shift: DD => yC(DD, ED(DD)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowRight",
        run: DD => YD(DD, (CD => fC(DD, CD, ED(DD)))),
        shift: DD => QC(DD, (CD => fC(DD, CD, ED(DD)))),
        preventDefault: !0
      }, {
        key: "ArrowUp",
        run: DC,
        shift: tC,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowUp",
        run: gC,
        shift: mC
      }, {
        mac: "Ctrl-ArrowUp",
        run: pC,
        shift: vC
      }, {
        key: "ArrowDown",
        run: CC,
        shift: ZC,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowDown",
        run: XC,
        shift: nC
      }, {
        mac: "Ctrl-ArrowDown",
        run: iC,
        shift: NC
      }, {
        key: "PageUp",
        run: pC,
        shift: vC
      }, {
        key: "PageDown",
        run: iC,
        shift: NC
      }, {
        key: "Home",
        run: DD => YD(DD, (CD => fC(DD, CD, !1))),
        shift: DD => QC(DD, (CD => fC(DD, CD, !1))),
        preventDefault: !0
      }, {
        key: "Mod-Home",
        run: gC,
        shift: mC
      }, {
        key: "End",
        run: DD => YD(DD, (CD => fC(DD, CD, !0))),
        shift: DD => QC(DD, (CD => fC(DD, CD, !0))),
        preventDefault: !0
      }, {
        key: "Mod-End",
        run: XC,
        shift: nC
      }, {
        key: "Enter",
        run: jC,
        shift: jC
      }, {
        key: "Mod-a",
        run: DD => {
          let {
            state: CD,
            dispatch: cD
          } = DD;
          return cD(CD.update({
            selection: {
              anchor: 0,
              head: CD.doc.length
            },
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Backspace",
        run: xC,
        shift: xC,
        preventDefault: !0
      }, {
        key: "Delete",
        run: qC,
        preventDefault: !0
      }, {
        key: "Mod-Backspace",
        mac: "Alt-Backspace",
        run: KC,
        preventDefault: !0
      }, {
        key: "Mod-Delete",
        mac: "Alt-Delete",
        run: DD => JC(DD, !0),
        preventDefault: !0
      }, {
        mac: "Mod-Backspace",
        run: DD => PC(DD, (CD => {
          let cD = DD.moveToLineBoundary(CD, !1).head;
          return CD.head > cD ? cD : Math.max(0, CD.head - 1)
        })),
        preventDefault: !0
      }, {
        mac: "Mod-Delete",
        run: DD => PC(DD, (CD => {
          let cD = DD.moveToLineBoundary(CD, !0).head;
          return CD.head < cD ? cD : Math.min(DD.state.doc.length, CD.head + 1)
        })),
        preventDefault: !0
      }].concat([{
        key: "Ctrl-b",
        run: eD,
        shift: SC,
        preventDefault: !0
      }, {
        key: "Ctrl-f",
        run: uD,
        shift: BC
      }, {
        key: "Ctrl-p",
        run: DC,
        shift: tC
      }, {
        key: "Ctrl-n",
        run: CC,
        shift: ZC
      }, {
        key: "Ctrl-a",
        run: DD => YD(DD, (CD => fD.i.cursor(DD.lineBlockAt(CD.head).from, 1))),
        shift: DD => QC(DD, (CD => fD.i.cursor(DD.lineBlockAt(CD.head).from)))
      }, {
        key: "Ctrl-e",
        run: DD => YD(DD, (CD => fD.i.cursor(DD.lineBlockAt(CD.head).to, -1))),
        shift: DD => QC(DD, (CD => fD.i.cursor(DD.lineBlockAt(CD.head).to)))
      }, {
        key: "Ctrl-d",
        run: qC
      }, {
        key: "Ctrl-h",
        run: xC
      }, {
        key: "Ctrl-k",
        run: DD => PC(DD, (CD => {
          let cD = DD.lineBlockAt(CD.head).to;
          return CD.head < cD ? cD : Math.min(DD.state.doc.length, CD.head + 1)
        }))
      }, {
        key: "Ctrl-Alt-h",
        run: KC
      }, {
        key: "Ctrl-o",
        run: DD => {
          let {
            state: CD,
            dispatch: cD
          } = DD;
          if (CD.readOnly) return !1;
          let ID = CD.changeByRange((DD => ({
            changes: {
              from: DD.from,
              to: DD.to,
              insert: fD.J.of(["", ""])
            },
            range: fD.i.cursor(DD.from)
          })));
          return cD(CD.update(ID, {
            scrollIntoView: !0,
            userEvent: "input"
          })), !0
        }
      }, {
        key: "Ctrl-t",
        run: DD => {
          let {
            state: CD,
            dispatch: cD
          } = DD;
          if (CD.readOnly) return !1;
          let ID = CD.changeByRange((DD => {
            if (!DD.empty || 0 == DD.from || DD.from == CD.doc.length) return {
              range: DD
            };
            let cD = DD.from,
              ID = CD.doc.lineAt(cD),
              pD = cD == ID.from ? cD - 1 : (0, fD._)(ID.text, cD - ID.from, !1) + ID.from,
              iD = cD == ID.to ? cD + 1 : (0, fD._)(ID.text, cD - ID.from, !0) + ID.from;
            return {
              changes: {
                from: pD,
                to: iD,
                insert: CD.doc.slice(cD, iD).append(CD.doc.slice(pD, cD))
              },
              range: fD.i.cursor(iD)
            }
          }));
          return !ID.changes.empty && (cD(CD.update(ID, {
            scrollIntoView: !0,
            userEvent: "move.character"
          })), !0)
        }
      }, {
        key: "Ctrl-v",
        run: iC
      }].map((DD => ({
        mac: DD.key,
        run: DD.run,
        shift: DD.shift
      }))))),
      kC = {
        key: "Tab",
        run: TC,
        shift: GC
      };
    var dC = cD(40423),
      YC = cD(40373),
      WC = cD(40431),
      sC = function(DD) {
        void 0 === DD && (DD = {});
        var {
          crosshairCursor: CD = !1
        } = DD, cD = [];
        !1 !== DD.closeBracketsKeymap && (cD = cD.concat(YC.h)), !1 !== DD.defaultKeymap && (cD = cD.concat(RC)), !1 !== DD.searchKeymap && (cD = cD.concat(dC.h)), !1 !== DD.historyKeymap && (cD = cD.concat(RD)), !1 !== DD.foldKeymap && (cD = cD.concat(QD.L)), !1 !== DD.completionKeymap && (cD = cD.concat(YC.q)), !1 !== DD.lintKeymap && (cD = cD.concat(WC.b));
        var ID = [];
        return !1 !== DD.lineNumbers && ID.push((0, bD.cb)()), !1 !== DD.highlightActiveLineGutter && ID.push((0, bD.N)()), !1 !== DD.highlightSpecialChars && ID.push((0, bD.S)()), !1 !== DD.history && ID.push(function() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return [nD, mD.of(DD), bD.m.domEventHandlers({
            beforeinput(DD, CD) {
              let cD = "historyUndo" == DD.inputType ? PD : "historyRedo" == DD.inputType ? HD : null;
              return !!cD && (DD.preventDefault(), cD(CD))
            }
          })]
        }()), !1 !== DD.foldGutter && ID.push((0, QD.F)()), !1 !== DD.drawSelection && ID.push((0, bD.E)()), !1 !== DD.dropCursor && ID.push((0, bD.I)()), !1 !== DD.allowMultipleSelections && ID.push(fD.j.allowMultipleSelections.of(!0)), !1 !== DD.indentOnInput && ID.push((0, QD.ab)()), !1 !== DD.syntaxHighlighting && ID.push((0, QD.jb)(QD.v, {
          fallback: !0
        })), !1 !== DD.bracketMatching && ID.push((0, QD.o)()), !1 !== DD.closeBrackets && ID.push((0, YC.i)()), !1 !== DD.autocompletion && ID.push((0, YC.e)()), !1 !== DD.rectangularSelection && ID.push((0, bD.kb)()), !1 !== CD && ID.push((0, bD.B)()), !1 !== DD.highlightActiveLine && ID.push((0, bD.P)()), !1 !== DD.highlightSelectionMatches && ID.push((0, dC.e)()), DD.tabSize && "number" === typeof DD.tabSize && ID.push(QD.gb.of(" ".repeat(DD.tabSize))), ID.concat([bD._.of(cD.flat())]).filter(Boolean)
      },
      EC = cD(40406);
    const eC = "#e5c07b",
      uC = "#e06c75",
      hC = "#56b6c2",
      rC = "#ffffff",
      AC = "#abb2bf",
      FC = "#7d8799",
      Dc = "#61afef",
      Cc = "#98c379",
      cc = "#d19a66",
      Ic = "#c678dd",
      pc = "#21252b",
      ic = "#2c313a",
      fc = "#282c34",
      bc = "#353a42",
      Qc = "#3E4451",
      wc = "#528bff",
      Sc = bD.m.theme({
        "&": {
          color: AC,
          backgroundColor: fc
        },
        ".cm-content": {
          caretColor: wc
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: wc
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: Qc
        },
        ".cm-panels": {
          backgroundColor: pc,
          color: AC
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
          backgroundColor: fc,
          color: FC,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: ic
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#ddd"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: bc
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: bc,
          borderBottomColor: bc
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: ic,
            color: AC
          }
        }
      }, {
        dark: !0
      }),
      Bc = QD.c.define([{
        tag: EC.m.keyword,
        color: Ic
      }, {
        tag: [EC.m.name, EC.m.deleted, EC.m.character, EC.m.propertyName, EC.m.macroName],
        color: uC
      }, {
        tag: [EC.m.function(EC.m.variableName), EC.m.labelName],
        color: Dc
      }, {
        tag: [EC.m.color, EC.m.constant(EC.m.name), EC.m.standard(EC.m.name)],
        color: cc
      }, {
        tag: [EC.m.definition(EC.m.name), EC.m.separator],
        color: AC
      }, {
        tag: [EC.m.typeName, EC.m.className, EC.m.number, EC.m.changed, EC.m.annotation, EC.m.modifier, EC.m.self, EC.m.namespace],
        color: eC
      }, {
        tag: [EC.m.operator, EC.m.operatorKeyword, EC.m.url, EC.m.escape, EC.m.regexp, EC.m.link, EC.m.special(EC.m.string)],
        color: hC
      }, {
        tag: [EC.m.meta, EC.m.comment],
        color: FC
      }, {
        tag: EC.m.strong,
        fontWeight: "bold"
      }, {
        tag: EC.m.emphasis,
        fontStyle: "italic"
      }, {
        tag: EC.m.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: EC.m.link,
        color: FC,
        textDecoration: "underline"
      }, {
        tag: EC.m.heading,
        fontWeight: "bold",
        color: uC
      }, {
        tag: [EC.m.atom, EC.m.bool, EC.m.special(EC.m.variableName)],
        color: cc
      }, {
        tag: [EC.m.processingInstruction, EC.m.string, EC.m.inserted],
        color: Cc
      }, {
        tag: EC.m.invalid,
        color: rC
      }]),
      yc = [Sc, (0, QD.jb)(Bc)];
    var Mc = bD.m.theme({
      "&": {
        backgroundColor: "#fff"
      }
    }, {
      dark: !1
    });
    class tc {
      constructor(DD, CD) {
        this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = CD, this.timeoutMS = CD, this.callbacks.push(DD)
      }
      wy() {
        if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
          this.isTimeExhausted = !0;
          var DD = this.callbacks.slice();
          this.callbacks.length = 0, DD.forEach((DD => {
            try {
              DD()
            } catch (CD) {
              console.error("TimeoutLatch callback error:", CD)
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
    class Zc {
      constructor() {
        this.interval = null, this.latches = new Set
      }
      add(DD) {
        this.latches.add(DD), this.start()
      }
      remove(DD) {
        this.latches.delete(DD), 0 === this.latches.size && this.stop()
      }
      start() {
        null === this.interval && (this.interval = setInterval((() => {
          this.latches.forEach((DD => {
            DD.wy(), DD.isDone && this.remove(DD)
          }))
        }), 1))
      }
      stop() {
        null !== this.interval && (clearInterval(this.interval), this.interval = null)
      }
    }
    var oc = null,
      vc = fD.c.define(),
      Nc = [];

    function gc(DD) {
      var {
        value: CD,
        selection: cD,
        onChange: ID,
        onStatistics: pD,
        onCreateEditor: QD,
        onUpdate: wD,
        extensions: SD = Nc,
        autoFocus: BD,
        theme: yD = "light",
        height: MD = null,
        minHeight: tD = null,
        maxHeight: ZD = null,
        width: oD = null,
        minWidth: vD = null,
        maxWidth: ND = null,
        placeholder: gD = "",
        editable: XD = !0,
        readOnly: mD = !1,
        indentWithTab: nD = !0,
        basicSetup: OD = !0,
        root: PD,
        initialState: HD
      } = DD, [UD, xD] = (0, iD.useState)(), [qD, JD] = (0, iD.useState)(), [KD, aD] = (0, iD.useState)(), VD = (0, iD.useState)((() => ({
        current: null
      })))[0], zD = (0, iD.useState)((() => ({
        current: null
      })))[0], jD = bD.m.theme({
        "&": {
          height: MD,
          minHeight: tD,
          maxHeight: ZD,
          width: oD,
          minWidth: vD,
          maxWidth: ND
        },
        "& .cm-scroller": {
          height: "100% !important"
        }
      }), lD = bD.m.updateListener.of((DD => {
        if (DD.docChanged && "function" === typeof ID && !DD.transactions.some((DD => DD.annotation(vc)))) {
          VD.current ? VD.current.reset() : (VD.current = new tc((() => {
            if (zD.current) {
              var DD = zD.current;
              zD.current = null, DD()
            }
            VD.current = null
          }), 200), ("undefined" === typeof window ? new Zc : (oc || (oc = new Zc), oc)).add(VD.current));
          var CD = DD.state.doc.toString();
          ID(CD, DD)
        }
        pD && pD((DD => ({
          line: DD.state.doc.lineAt(DD.state.selection.main.from),
          lineCount: DD.state.doc.lines,
          lineBreak: DD.state.lineBreak,
          length: DD.state.doc.length,
          readOnly: DD.state.readOnly,
          tabSize: DD.state.tabSize,
          selection: DD.state.selection,
          selectionAsSingle: DD.state.selection.asSingle().main,
          df: DD.state.selection.df,
          selectionCode: DD.state.sliceDoc(DD.state.selection.main.from, DD.state.selection.main.to),
          selections: DD.state.selection.df.map((CD => DD.state.sliceDoc(CD.from, CD.to))),
          selectedText: DD.state.selection.df.some((DD => !DD.empty))
        }))(DD))
      })), LD = function(DD) {
        void 0 === DD && (DD = {});
        var {
          indentWithTab: CD = !0,
          editable: cD = !0,
          readOnly: ID = !1,
          theme: pD = "light",
          placeholder: iD = "",
          basicSetup: QD = !0
        } = DD, wD = [];
        switch (CD && wD.unshift(bD._.of([kC])), QD && ("boolean" === typeof QD ? wD.unshift(sC()) : wD.unshift(sC(QD))), iD && wD.unshift((0, bD.ib)(iD)), pD) {
          case "light":
            wD.push(Mc);
            break;
          case "dark":
            wD.push(yc);
            break;
          case "none":
            break;
          default:
            wD.push(pD)
        }
        return !1 === cD && wD.push(bD.m.editable.of(!1)), ID && wD.push(fD.j.readOnly.of(!0)), [...wD]
      }({
        theme: yD,
        editable: XD,
        readOnly: mD,
        placeholder: gD,
        indentWithTab: nD,
        basicSetup: OD
      }), TD = [lD, jD, ...LD];
      return wD && "function" === typeof wD && TD.push(bD.m.updateListener.of(wD)), TD = TD.concat(SD), (0, iD.useLayoutEffect)((() => {
        if (UD && !KD) {
          var DD = {
              doc: CD,
              selection: cD,
              extensions: TD
            },
            ID = HD ? fD.j.fromJSON(HD.json, DD, HD.fields) : fD.j.create(DD);
          if (aD(ID), !qD) {
            var pD = new bD.m({
              state: ID,
              parent: UD,
              root: PD
            });
            JD(pD), QD && QD(pD, ID)
          }
        }
        return () => {
          qD && (aD(void 0), JD(void 0))
        }
      }), [UD, KD]), (0, iD.useEffect)((() => {
        DD.container && xD(DD.container)
      }), [DD.container]), (0, iD.useEffect)((() => () => {
        qD && (qD.destroy(), JD(void 0)), VD.current && (VD.current.cancel(), VD.current = null)
      }), [qD]), (0, iD.useEffect)((() => {
        BD && qD && qD.focus()
      }), [BD, qD]), (0, iD.useEffect)((() => {
        qD && qD.dispatch({
          effects: fD.D.reconfigure.of(TD)
        })
      }), [yD, SD, MD, tD, ZD, oD, vD, ND, gD, XD, mD, nD, OD, ID, wD]), (0, iD.useEffect)((() => {
        if (void 0 !== CD) {
          var DD = qD ? qD.state.doc.toString() : "";
          if (qD && CD !== DD) {
            var cD = () => {
              qD && CD !== qD.state.doc.toString() && qD.dispatch({
                changes: {
                  from: 0,
                  to: qD.state.doc.toString().length,
                  insert: CD || ""
                },
                annotations: [vc.of(!0)]
              })
            };
            VD.current && !VD.current.isDone ? zD.current = cD : cD()
          }
        }
      }), [CD, qD]), {
        state: KD,
        setState: aD,
        view: qD,
        setView: JD,
        container: UD,
        setContainer: xD
      }
    }
    var Xc = cD(1093),
      mc = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"],
      nc = (0, iD.forwardRef)(((DD, CD) => {
        var {
          className: cD,
          value: fD = "",
          selection: bD,
          extensions: QD = [],
          onChange: wD,
          onStatistics: SD,
          onCreateEditor: BD,
          onUpdate: yD,
          autoFocus: MD,
          theme: tD = "light",
          height: ZD,
          minHeight: oD,
          maxHeight: vD,
          width: ND,
          minWidth: gD,
          maxWidth: XD,
          basicSetup: mD,
          placeholder: nD,
          indentWithTab: OD,
          editable: PD,
          readOnly: HD,
          root: UD,
          initialState: xD
        } = DD, qD = (0, pD.b)(DD, mc), JD = (0, iD.useRef)(null), {
          state: KD,
          view: aD,
          container: VD,
          setContainer: zD
        } = gc({
          root: UD,
          value: fD,
          autoFocus: MD,
          theme: tD,
          height: ZD,
          minHeight: oD,
          maxHeight: vD,
          width: ND,
          minWidth: gD,
          maxWidth: XD,
          basicSetup: mD,
          placeholder: nD,
          indentWithTab: OD,
          editable: PD,
          readOnly: HD,
          selection: bD,
          onChange: wD,
          onStatistics: SD,
          onCreateEditor: BD,
          onUpdate: yD,
          extensions: QD,
          initialState: xD
        });
        (0, iD.useImperativeHandle)(CD, (() => ({
          editor: JD.current,
          state: KD,
          view: aD
        })), [JD, VD, KD, aD]);
        var jD = (0, iD.useCallback)((DD => {
          JD.current = DD, zD(DD)
        }), [zD]);
        if ("string" !== typeof fD) throw new Error("value must be typeof string but got " + typeof fD);
        var lD = "string" === typeof tD ? "cm-theme-" + tD : "cm-theme";
        return (0, Xc.jsx)("div", (0, ID.e)({
          ref: jD,
          className: lD + (cD ? " " + cD : "")
        }, qD))
      }));
    nc.displayName = "CodeMirror";
    const Oc = nc
  },
  40394: (DD, CD, cD) => {
    function ID() {
      var DD = arguments[0];
      "string" == typeof DD && (DD = document.createElement(DD));
      var CD = 1,
        cD = arguments[1];
      if (cD && "object" == typeof cD && null == cD.nodeType && !Array.isArray(cD)) {
        for (var ID in cD)
          if (Object.prototype.hasOwnProperty.call(cD, ID)) {
            var iD = cD[ID];
            "string" == typeof iD ? DD.setAttribute(ID, iD) : null != iD && (DD[ID] = iD)
          } CD++
      }
      for (; CD < arguments.length; CD++) pD(DD, arguments[CD]);
      return DD
    }

    function pD(DD, CD) {
      if ("string" == typeof CD) DD.appendChild(document.createTextNode(CD));
      else if (null == CD);
      else if (null != CD.nodeType) DD.appendChild(CD);
      else {
        if (!Array.isArray(CD)) throw new RangeError("Unsupported child node: " + CD);
        for (var cD = 0; cD < CD.length; cD++) pD(DD, CD[cD])
      }
    }
    cD.d(CD, {
      b: () => ID
    })
  },
  40387: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => fD
    });
    const ID = "undefined" == typeof Symbol ? "__\u037c" : Symbol.for("\u037c"),
      pD = "undefined" == typeof Symbol ? "__styleSet" + Math.floor(1e8 * Math.random()) : Symbol("styleSet"),
      iD = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : {};
    class fD {
      constructor(DD, CD) {
        this.rules = [];
        let {
          finish: cD
        } = CD || {};

        function ID(DD) {
          return /^@/.test(DD) ? [DD] : DD.split(/,\s*/)
        }

        function pD(DD, CD, iD, fD) {
          let bD = [],
            QD = /^@(\w+)\b/.exec(DD[0]),
            wD = QD && "keyframes" == QD[1];
          if (QD && null == CD) return iD.push(DD[0] + ";");
          for (let cD in CD) {
            let fD = CD[cD];
            if (/&/.test(cD)) pD(cD.split(/,\s*/).map((CD => DD.map((DD => CD.replace(/&/, DD))))).reduce(((DD, CD) => DD.concat(CD))), fD, iD);
            else if (fD && "object" == typeof fD) {
              if (!QD) throw new RangeError("The value of a property (" + cD + ") should be a primitive value.");
              pD(ID(cD), fD, bD, wD)
            } else null != fD && bD.push(cD.replace(/_.*/, "").replace(/[A-Z]/g, (DD => "-" + DD.toLowerCase())) + ": " + fD + ";")
          }(bD.length || wD) && iD.push((!cD || QD || fD ? DD : DD.map(cD)).join(", ") + " {" + bD.join(" ") + "}")
        }
        for (let iD in DD) pD(ID(iD), DD[iD], this.rules)
      }
      getRules() {
        return this.rules.join("\n")
      }
      static newName() {
        let DD = iD[ID] || 1;
        return iD[ID] = DD + 1, "\u037c" + DD.toString(36)
      }
      static mount(DD, CD, cD) {
        let ID = DD[pD],
          iD = cD && cD.nonce;
        ID ? iD && ID.setNonce(iD) : ID = new QD(DD, iD), ID.mount(Array.isArray(CD) ? CD : [CD], DD)
      }
    }
    let bD = new Map;
    class QD {
      constructor(DD, CD) {
        let cD = DD.ownerDocument || DD,
          ID = cD.defaultView;
        if (!DD.head && DD.adoptedStyleSheets && ID.CSSStyleSheet) {
          let CD = bD.get(cD);
          if (CD) return DD[pD] = CD;
          this.sheet = new ID.CSSStyleSheet, bD.set(cD, this)
        } else this.styleTag = cD.createElement("style"), CD && this.styleTag.setAttribute("nonce", CD);
        this.modules = [], DD[pD] = this
      }
      mount(DD, CD) {
        let cD = this.sheet,
          ID = 0,
          pD = 0;
        for (let iD = 0; iD < DD.length; iD++) {
          let CD = DD[iD],
            fD = this.modules.indexOf(CD);
          if (fD < pD && fD > -1 && (this.modules.splice(fD, 1), pD--, fD = -1), -1 == fD) {
            if (this.modules.splice(pD++, 0, CD), cD)
              for (let DD = 0; DD < CD.rules.length; DD++) cD.insertRule(CD.rules[DD], ID++)
          } else {
            for (; pD < fD;) ID += this.modules[pD++].rules.length;
            ID += CD.rules.length, pD++
          }
        }
        if (cD) CD.adoptedStyleSheets.indexOf(this.sheet) < 0 && (CD.adoptedStyleSheets = [this.sheet, ...CD.adoptedStyleSheets]);
        else {
          let DD = "";
          for (let CD = 0; CD < this.modules.length; CD++) DD += this.modules[CD].getRules() + "\n";
          this.styleTag.textContent = DD;
          let cD = CD.head || CD;
          this.styleTag.parentNode != cD && cD.insertBefore(this.styleTag, cD.firstChild)
        }
      }
      setNonce(DD) {
        this.styleTag && this.styleTag.getAttribute("nonce") != DD && this.styleTag.setAttribute("nonce", DD)
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);