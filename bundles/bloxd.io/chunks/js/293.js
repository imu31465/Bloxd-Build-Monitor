export const id = 293;
export const ids = [293];
export const modules = {
  41210: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => dz,
      e: () => Xz,
      g: () => nz,
      i: () => cD,
      l: () => Sz,
      m: () => gD,
      n: () => Uz
    });
    var pD = wD(41212),
      sD = wD(41217),
      KD = wD(41231);
    class rD {
      constructor(DD, zD, wD, pD) {
        this.state = DD, this.pos = zD, this.explicit = wD, this.view = pD, this.abortListeners = [], this.abortOnDocChange = !1
      }
      tokenBefore(DD) {
        let zD = (0, KD.jb)(this.state).resolveInner(this.pos, -1);
        for (; zD && DD.indexOf(zD.name) < 0;) zD = zD.parent;
        return zD ? {
          from: zD.from,
          to: this.pos,
          text: this.state.sliceDoc(zD.from, this.pos),
          type: zD.type
        } : null
      }
      matchBefore(DD) {
        let zD = this.state.doc.lineAt(this.pos),
          wD = Math.max(zD.from, this.pos - 250),
          pD = zD.text.slice(wD - zD.from, this.pos - zD.from),
          sD = pD.search(UD(DD, !1));
        return sD < 0 ? null : {
          from: wD + sD,
          to: this.pos,
          text: pD.slice(sD)
        }
      }
      get aborted() {
        return null == this.abortListeners
      }
      addEventListener(DD, zD, wD) {
        "abort" == DD && this.abortListeners && (this.abortListeners.push(zD), wD && wD.onDocChange && (this.abortOnDocChange = !0))
      }
    }

    function LD(DD) {
      let zD = Object.keys(DD).join(""),
        wD = /\w/.test(zD);
      return wD && (zD = zD.replace(/\w/g, "")), `[${wD?"\\w":""}${zD.replace(/[^\w\s]/g,"\\$&")}]`
    }

    function cD(DD) {
      let zD = DD.map((DD => "string" == typeof DD ? {
          label: DD
        } : DD)),
        [wD, pD] = zD.every((DD => /^\w+$/.test(DD.label))) ? [/\w*$/, /\w+$/] : function(DD) {
          let zD = Object.create(null),
            wD = Object.create(null);
          for (let {
              label: sD
            }
            of DD) {
            zD[sD[0]] = !0;
            for (let DD = 1; DD < sD.length; DD++) wD[sD[DD]] = !0
          }
          let pD = LD(zD) + LD(wD) + "*$";
          return [new RegExp("^" + pD), new RegExp(pD)]
        }(zD);
      return DD => {
        let sD = DD.matchBefore(pD);
        return sD || DD.explicit ? {
          from: sD ? sD.from : DD.pos,
          options: zD,
          validFor: wD
        } : null
      }
    }

    function gD(DD, zD) {
      return wD => {
        for (let zD = (0, KD.jb)(wD.state).resolveInner(wD.pos, -1); zD; zD = zD.parent) {
          if (DD.indexOf(zD.name) > -1) return null;
          if (zD.type.isTop) break
        }
        return zD(wD)
      }
    }
    class RD {
      constructor(DD, zD, wD, pD) {
        this.completion = DD, this.source = zD, this.match = wD, this.score = pD
      }
    }

    function AD(DD) {
      return DD.selection.main.from
    }

    function UD(DD, zD) {
      var wD;
      let {
        source: pD
      } = DD, sD = zD && "^" != pD[0], KD = "$" != pD[pD.length - 1];
      return sD || KD ? new RegExp(`${sD?"^":""}(?:${pD})${KD?"$":""}`, null !== (wD = DD.flags) && void 0 !== wD ? wD : DD.ignoreCase ? "i" : "") : DD
    }
    const fD = pD.c.define();

    function ID(DD, zD, wD, sD) {
      let {
        main: KD
      } = DD.selection, rD = wD - KD.from, LD = sD - KD.from;
      return {
        ...DD.changeByRange((cD => {
          if (cD != KD && wD != sD && DD.sliceDoc(cD.from + rD, cD.from + LD) != DD.sliceDoc(wD, sD)) return {
            range: cD
          };
          let gD = DD.toText(zD);
          return {
            changes: {
              from: cD.from + rD,
              to: sD == KD.from ? cD.to : cD.from + LD,
              insert: gD
            },
            range: pD.j.cursor(cD.from + rD + gD.length)
          }
        })),
        scrollIntoView: !0,
        userEvent: "input.complete"
      }
    }
    const BD = new WeakMap;

    function GD(DD) {
      if (!Array.isArray(DD)) return DD;
      let zD = BD.get(DD);
      return zD || BD.set(DD, zD = cD(DD)), zD
    }
    const hD = pD.E.define(),
      nD = pD.E.define();
    class MD {
      constructor(DD) {
        this.pattern = DD, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
        for (let zD = 0; zD < DD.length;) {
          let wD = (0, pD.P)(DD, zD),
            sD = (0, pD.T)(wD);
          this.chars.push(wD);
          let KD = DD.slice(zD, zD + sD),
            rD = KD.toUpperCase();
          this.folded.push((0, pD.P)(rD == KD ? KD.toLowerCase() : rD, 0)), zD += sD
        }
        this.astral = DD.length != this.chars.length
      }
      ret(DD, zD) {
        return this.score = DD, this.matched = zD, this
      }
      match(DD) {
        if (0 == this.pattern.length) return this.ret(-100, []);
        if (DD.length < this.pattern.length) return null;
        let {
          chars: zD,
          folded: wD,
          any: sD,
          precise: KD,
          byWord: rD
        } = this;
        if (1 == zD.length) {
          let sD = (0, pD.P)(DD, 0),
            KD = (0, pD.T)(sD),
            rD = KD == DD.length ? 0 : -100;
          if (sD == zD[0]);
          else {
            if (sD != wD[0]) return null;
            rD += -200
          }
          return this.ret(rD, [0, KD])
        }
        let LD = DD.indexOf(this.pattern);
        if (0 == LD) return this.ret(DD.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
        let cD = zD.length,
          gD = 0;
        if (LD < 0) {
          for (let KD = 0, rD = Math.min(DD.length, 200); KD < rD && gD < cD;) {
            let rD = (0, pD.P)(DD, KD);
            rD != zD[gD] && rD != wD[gD] || (sD[gD++] = KD), KD += (0, pD.T)(rD)
          }
          if (gD < cD) return null
        }
        let RD = 0,
          AD = 0,
          UD = !1,
          fD = 0,
          ID = -1,
          BD = -1,
          GD = /[a-z]/.test(DD),
          hD = !0;
        for (let nD = 0, MD = Math.min(DD.length, 200), OD = 0; nD < MD && AD < cD;) {
          let sD = (0, pD.P)(DD, nD);
          LD < 0 && (RD < cD && sD == zD[RD] && (KD[RD++] = nD), fD < cD && (sD == zD[fD] || sD == wD[fD] ? (0 == fD && (ID = nD), BD = nD + 1, fD++) : fD = 0));
          let gD, MD = sD < 255 ? sD >= 48 && sD <= 57 || sD >= 97 && sD <= 122 ? 2 : sD >= 65 && sD <= 90 ? 1 : 0 : (gD = (0, pD.fb)(sD)) != gD.toLowerCase() ? 1 : gD != gD.toUpperCase() ? 2 : 0;
          (!nD || 1 == MD && GD || 0 == OD && 0 != MD) && (zD[AD] == sD || wD[AD] == sD && (UD = !0) ? rD[AD++] = nD : rD.length && (hD = !1)), OD = MD, nD += (0, pD.T)(sD)
        }
        return AD == cD && 0 == rD[0] && hD ? this.result((UD ? -200 : 0) - 100, rD, DD) : fD == cD && 0 == ID ? this.ret(-200 - DD.length + (BD == DD.length ? 0 : -100), [0, BD]) : LD > -1 ? this.ret(-700 - DD.length, [LD, LD + this.pattern.length]) : fD == cD ? this.ret(-900 - DD.length, [ID, BD]) : AD == cD ? this.result((UD ? -200 : 0) - 100 - 700 + (hD ? 0 : -1100), rD, DD) : 2 == zD.length ? null : this.result((sD[0] ? -700 : 0) - 200 - 1100, sD, DD)
      }
      result(DD, zD, wD) {
        let sD = [],
          KD = 0;
        for (let rD of zD) {
          let DD = rD + (this.astral ? (0, pD.T)((0, pD.P)(wD, rD)) : 1);
          KD && sD[KD - 1] == rD ? sD[KD - 1] = DD : (sD[KD++] = rD, sD[KD++] = DD)
        }
        return this.ret(DD - wD.length, sD)
      }
    }
    class OD {
      constructor(DD) {
        this.pattern = DD, this.matched = [], this.score = 0, this.folded = DD.toLowerCase()
      }
      match(DD) {
        if (DD.length < this.pattern.length) return null;
        let zD = DD.slice(0, this.pattern.length),
          wD = zD == this.pattern ? 0 : zD.toLowerCase() == this.folded ? -200 : null;
        return null == wD ? null : (this.matched = [0, zD.length], this.score = wD + (DD.length == this.pattern.length ? 0 : -100), this)
      }
    }
    const JD = pD.n.define({
      combine: DD => (0, pD.W)(DD, {
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
        positionInfo: QD,
        filterStrict: !1,
        compareCompletions: (DD, zD) => (DD.sortText || DD.label).localeCompare(zD.sortText || zD.label),
        interactionDelay: 75,
        updateSyncTime: 100
      }, {
        defaultKeymap: (DD, zD) => DD && zD,
        closeOnBlur: (DD, zD) => DD && zD,
        icons: (DD, zD) => DD && zD,
        tooltipClass: (DD, zD) => wD => ED(DD(wD), zD(wD)),
        optionClass: (DD, zD) => wD => ED(DD(wD), zD(wD)),
        addToOptions: (DD, zD) => DD.concat(zD),
        filterStrict: (DD, zD) => DD || zD
      })
    });

    function ED(DD, zD) {
      return DD ? zD ? DD + " " + zD : DD : zD
    }

    function QD(DD, zD, wD, pD, KD, rD) {
      let LD, cD, gD = DD.textDirection == sD.h.RTL,
        RD = gD,
        AD = !1,
        UD = "top",
        fD = zD.left - KD.left,
        ID = KD.right - zD.right,
        BD = pD.right - pD.left,
        GD = pD.bottom - pD.top;
      if (RD && fD < Math.min(BD, ID) ? RD = !1 : !RD && ID < Math.min(BD, fD) && (RD = !0), BD <= (RD ? fD : ID)) LD = Math.max(KD.top, Math.min(wD.top, KD.bottom - GD)) - zD.top, cD = Math.min(400, RD ? fD : ID);
      else {
        AD = !0, cD = Math.min(400, (gD ? zD.right : KD.right - zD.left) - 30);
        let DD = KD.bottom - zD.bottom;
        DD >= GD || DD > zD.top ? LD = wD.bottom - zD.top : (UD = "bottom", LD = zD.bottom - wD.top)
      }
      return {
        style: `${UD}: ${LD/((zD.bottom-zD.top)/rD.offsetHeight)}px; max-width: ${cD/((zD.right-zD.left)/rD.offsetWidth)}px`,
        class: "cm-completionInfo-" + (AD ? gD ? "left-narrow" : "right-narrow" : RD ? "left" : "right")
      }
    }
    const XD = pD.E.define();

    function VD(DD, zD, wD) {
      if (DD <= wD) return {
        from: 0,
        to: DD
      };
      if (zD < 0 && (zD = 0), zD <= DD >> 1) {
        let DD = Math.floor(zD / wD);
        return {
          from: DD * wD,
          to: (DD + 1) * wD
        }
      }
      let pD = Math.floor((DD - zD) / wD);
      return {
        from: DD - (pD + 1) * wD,
        to: DD - pD * wD
      }
    }
    class PD {
      constructor(DD, zD, wD) {
        this.view = DD, this.stateField = zD, this.applyCompletion = wD, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
          read: () => this.measureInfo(),
          write: DD => this.placeInfo(DD),
          key: this
        }, this.space = null, this.currentClass = "";
        let pD = DD.state.field(zD),
          {
            options: sD,
            selected: KD
          } = pD.open,
          rD = DD.state.facet(JD);
        this.optionContent = function(DD) {
          let zD = DD.addToOptions.slice();
          return DD.icons && zD.push({
            render(DD) {
              let zD = document.createElement("div");
              return zD.classList.add("cm-completionIcon"), DD.type && zD.classList.add(...DD.type.split(/\s+/g).map((DD => "cm-completionIcon-" + DD))), zD.setAttribute("aria-hidden", "true"), zD
            },
            position: 20
          }), zD.push({
            render(DD, zD, wD, pD) {
              let sD = document.createElement("span");
              sD.className = "cm-completionLabel";
              let KD = DD.displayLabel || DD.label,
                rD = 0;
              for (let LD = 0; LD < pD.length;) {
                let DD = pD[LD++],
                  zD = pD[LD++];
                DD > rD && sD.appendChild(document.createTextNode(KD.slice(rD, DD)));
                let wD = sD.appendChild(document.createElement("span"));
                wD.appendChild(document.createTextNode(KD.slice(DD, zD))), wD.className = "cm-completionMatchedText", rD = zD
              }
              return rD < KD.length && sD.appendChild(document.createTextNode(KD.slice(rD))), sD
            },
            position: 50
          }, {
            render(DD) {
              if (!DD.detail) return null;
              let zD = document.createElement("span");
              return zD.className = "cm-completionDetail", zD.textContent = DD.detail, zD
            },
            position: 80
          }), zD.sort(((DD, zD) => DD.position - zD.position)).map((DD => DD.render))
        }(rD), this.optionClass = rD.optionClass, this.tooltipClass = rD.tooltipClass, this.range = VD(sD.length, KD, rD.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(DD.state), this.dom.addEventListener("mousedown", (wD => {
          let {
            options: pD
          } = DD.state.field(zD).open;
          for (let zD, sD = wD.target; sD && sD != this.dom; sD = sD.parentNode)
            if ("LI" == sD.nodeName && (zD = /-(\d+)$/.exec(sD.id)) && +zD[1] < pD.length) return this.applyCompletion(DD, pD[+zD[1]]), void wD.preventDefault();
          if (wD.target == this.list) {
            let zD = this.list.classList.contains("cm-completionListIncompleteTop") && wD.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && wD.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
            null != zD && (DD.dispatch({
              effects: XD.of(zD)
            }), wD.preventDefault())
          }
        })), this.dom.addEventListener("focusout", (zD => {
          let wD = DD.state.field(this.stateField, !1);
          wD && wD.tooltip && DD.state.facet(JD).closeOnBlur && zD.relatedTarget != DD.contentDOM && DD.dispatch({
            effects: nD.of(null)
          })
        })), this.showOptions(sD, pD.id)
      }
      mount() {
        this.updateSel()
      }
      showOptions(DD, zD) {
        this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(DD, zD, this.range)), this.list.addEventListener("scroll", (() => {
          this.info && this.view.requestMeasure(this.placeInfoReq)
        }))
      }
      update(DD) {
        var zD;
        let wD = DD.state.field(this.stateField),
          pD = DD.startState.field(this.stateField);
        if (this.updateTooltipClass(DD.state), wD != pD) {
          let {
            options: sD,
            selected: KD,
            disabled: rD
          } = wD.open;
          pD.open && pD.open.options == sD || (this.range = VD(sD.length, KD, DD.state.facet(JD).maxRenderedOptions), this.showOptions(sD, wD.id)), this.updateSel(), rD != (null === (zD = pD.open) || void 0 === zD ? void 0 : zD.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!rD)
        }
      }
      updateTooltipClass(DD) {
        let zD = this.tooltipClass(DD);
        if (zD != this.currentClass) {
          for (let DD of this.currentClass.split(" ")) DD && this.dom.classList.remove(DD);
          for (let DD of zD.split(" ")) DD && this.dom.classList.add(DD);
          this.currentClass = zD
        }
      }
      positioned(DD) {
        this.space = DD, this.info && this.view.requestMeasure(this.placeInfoReq)
      }
      updateSel() {
        let DD = this.view.state.field(this.stateField),
          zD = DD.open;
        (zD.selected > -1 && zD.selected < this.range.from || zD.selected >= this.range.to) && (this.range = VD(zD.options.length, zD.selected, this.view.state.facet(JD).maxRenderedOptions), this.showOptions(zD.options, DD.id));
        let wD = this.updateSelectedOption(zD.selected);
        if (wD) {
          this.destroyInfo();
          let {
            completion: pD
          } = zD.options[zD.selected], {
            info: KD
          } = pD;
          if (!KD) return;
          let rD = "string" === typeof KD ? document.createTextNode(KD) : KD(pD);
          if (!rD) return;
          "then" in rD ? rD.then((zD => {
            zD && this.view.state.field(this.stateField, !1) == DD && this.addInfoPane(zD, pD)
          })).catch((DD => (0, sD.cb)(this.view.state, DD, "completion info"))) : (this.addInfoPane(rD, pD), wD.setAttribute("aria-describedby", this.info.id))
        }
      }
      addInfoPane(DD, zD) {
        this.destroyInfo();
        let wD = this.info = document.createElement("div");
        if (wD.className = "cm-tooltip cm-completionInfo", wD.id = "cm-completionInfo-" + Math.floor(65535 * Math.random()).toString(16), null != DD.nodeType) wD.appendChild(DD), this.infoDestroy = null;
        else {
          let {
            dom: zD,
            destroy: pD
          } = DD;
          wD.appendChild(zD), this.infoDestroy = pD || null
        }
        this.dom.appendChild(wD), this.view.requestMeasure(this.placeInfoReq)
      }
      updateSelectedOption(DD) {
        let zD = null;
        for (let wD = this.list.firstChild, pD = this.range.from; wD; wD = wD.nextSibling, pD++) "LI" == wD.nodeName && wD.id ? pD == DD ? wD.hasAttribute("aria-selected") || (wD.setAttribute("aria-selected", "true"), zD = wD) : wD.hasAttribute("aria-selected") && (wD.removeAttribute("aria-selected"), wD.removeAttribute("aria-describedby")) : pD--;
        return zD && function(DD, zD) {
          let wD = DD.getBoundingClientRect(),
            pD = zD.getBoundingClientRect(),
            sD = wD.height / DD.offsetHeight;
          pD.top < wD.top ? DD.scrollTop -= (wD.top - pD.top) / sD : pD.bottom > wD.bottom && (DD.scrollTop += (pD.bottom - wD.bottom) / sD)
        }(this.list, zD), zD
      }
      measureInfo() {
        let DD = this.dom.querySelector("[aria-selected]");
        if (!DD || !this.info) return null;
        let zD = this.dom.getBoundingClientRect(),
          wD = this.info.getBoundingClientRect(),
          pD = DD.getBoundingClientRect(),
          sD = this.space;
        if (!sD) {
          let DD = this.dom.ownerDocument.documentElement;
          sD = {
            left: 0,
            top: 0,
            right: DD.clientWidth,
            bottom: DD.clientHeight
          }
        }
        return pD.top > Math.min(sD.bottom, zD.bottom) - 10 || pD.bottom < Math.max(sD.top, zD.top) + 10 ? null : this.view.state.facet(JD).positionInfo(this.view, zD, pD, wD, sD, this.dom)
      }
      placeInfo(DD) {
        this.info && (DD ? (DD.style && (this.info.style.cssText = DD.style), this.info.className = "cm-tooltip cm-completionInfo " + (DD.class || "")) : this.info.style.cssText = "top: -1e6px")
      }
      createListBox(DD, zD, wD) {
        const pD = document.createElement("ul");
        pD.id = zD, pD.setAttribute("role", "listbox"), pD.setAttribute("aria-expanded", "true"), pD.setAttribute("aria-label", this.view.state.phrase("Completions")), pD.addEventListener("mousedown", (DD => {
          DD.target == pD && DD.preventDefault()
        }));
        let sD = null;
        for (let KD = wD.from; KD < wD.to; KD++) {
          let {
            completion: rD,
            match: LD
          } = DD[KD], {
            section: cD
          } = rD;
          if (cD) {
            let DD = "string" == typeof cD ? cD : cD.name;
            if (DD != sD && (KD > wD.from || 0 == wD.from))
              if (sD = DD, "string" != typeof cD && cD.header) pD.appendChild(cD.header(cD));
              else {
                pD.appendChild(document.createElement("completion-section")).textContent = DD
              }
          }
          const gD = pD.appendChild(document.createElement("li"));
          gD.id = zD + "-" + KD, gD.setAttribute("role", "option");
          let RD = this.optionClass(rD);
          RD && (gD.className = RD);
          for (let DD of this.optionContent) {
            let zD = DD(rD, this.view.state, this.view, LD);
            zD && gD.appendChild(zD)
          }
        }
        return wD.from && pD.classList.add("cm-completionListIncompleteTop"), wD.to < DD.length && pD.classList.add("cm-completionListIncompleteBottom"), pD
      }
      destroyInfo() {
        this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
      }
      destroy() {
        this.destroyInfo()
      }
    }

    function CD(DD, zD) {
      return wD => new PD(wD, DD, zD)
    }

    function xD(DD) {
      return 100 * (DD.boost || 0) + (DD.apply ? 10 : 0) + (DD.info ? 5 : 0) + (DD.type ? 1 : 0)
    }
    class TD {
      constructor(DD, zD, wD, pD, sD, KD) {
        this.options = DD, this.attrs = zD, this.tooltip = wD, this.timestamp = pD, this.selected = sD, this.disabled = KD
      }
      setSelected(DD, zD) {
        return DD == this.selected || DD >= this.options.length ? this : new TD(this.options, SD(zD, DD), this.tooltip, this.timestamp, DD, this.disabled)
      }
      static build(DD, zD, wD, pD, sD, KD) {
        if (pD && !KD && DD.some((DD => DD.isPending))) return pD.setDisabled();
        let rD = function(DD, zD) {
          let wD = [],
            pD = null,
            sD = null,
            KD = DD => {
              wD.push(DD);
              let {
                section: zD
              } = DD.completion;
              if (zD) {
                pD || (pD = []);
                let DD = "string" == typeof zD ? zD : zD.name;
                pD.some((zD => zD.name == DD)) || pD.push("string" == typeof zD ? {
                  name: DD
                } : zD)
              }
            },
            rD = zD.facet(JD);
          for (let AD of DD)
            if (AD.hasResult()) {
              let DD = AD.result.getMatch;
              if (!1 === AD.result.filter)
                for (let zD of AD.result.options) KD(new RD(zD, AD.source, DD ? DD(zD) : [], 1e9 - wD.length));
              else {
                let wD, pD = zD.sliceDoc(AD.from, AD.to),
                  LD = rD.filterStrict ? new OD(pD) : new MD(pD);
                for (let zD of AD.result.options)
                  if (wD = LD.match(zD.label)) {
                    let pD = zD.displayLabel ? DD ? DD(zD, wD.matched) : [] : wD.matched,
                      rD = wD.score + (zD.boost || 0);
                    if (KD(new RD(zD, AD.source, pD, rD)), "object" == typeof zD.section && "dynamic" === zD.section.rank) {
                      let {
                        name: DD
                      } = zD.section;
                      sD || (sD = Object.create(null)), sD[DD] = Math.max(rD, sD[DD] || -1e9)
                    }
                  }
              }
            } if (pD) {
            let DD = Object.create(null),
              zD = 0,
              KD = (DD, zD) => ("dynamic" === DD.rank && "dynamic" === zD.rank ? sD[zD.name] - sD[DD.name] : 0) || ("number" == typeof DD.rank ? DD.rank : 1e9) - ("number" == typeof zD.rank ? zD.rank : 1e9) || (DD.name < zD.name ? -1 : 1);
            for (let wD of pD.sort(KD)) zD -= 1e5, DD[wD.name] = zD;
            for (let pD of wD) {
              let {
                section: zD
              } = pD.completion;
              zD && (pD.score += DD["string" == typeof zD ? zD : zD.name])
            }
          }
          let LD = [],
            cD = null,
            gD = rD.compareCompletions;
          for (let RD of wD.sort(((DD, zD) => zD.score - DD.score || gD(DD.completion, zD.completion)))) {
            let DD = RD.completion;
            !cD || cD.label != DD.label || cD.detail != DD.detail || null != cD.type && null != DD.type && cD.type != DD.type || cD.apply != DD.apply || cD.boost != DD.boost ? LD.push(RD) : xD(RD.completion) > xD(cD) && (LD[LD.length - 1] = RD), cD = RD.completion
          }
          return LD
        }(DD, zD);
        if (!rD.length) return pD && DD.some((DD => DD.isPending)) ? pD.setDisabled() : null;
        let LD = zD.facet(JD).selectOnOpen ? 0 : -1;
        if (pD && pD.selected != LD && -1 != pD.selected) {
          let DD = pD.options[pD.selected].completion;
          for (let zD = 0; zD < rD.length; zD++)
            if (rD[zD].completion == DD) {
              LD = zD;
              break
            }
        }
        return new TD(rD, SD(wD, LD), {
          pos: DD.reduce(((DD, zD) => zD.hasResult() ? Math.min(DD, zD.from) : DD), 1e8),
          create: mD,
          above: sD.aboveCursor
        }, pD ? pD.timestamp : Date.now(), LD, !1)
      }
      map(DD) {
        return new TD(this.options, this.attrs, {
          ...this.tooltip,
          pos: DD.mapPos(this.tooltip.pos)
        }, this.timestamp, this.selected, this.disabled)
      }
      setDisabled() {
        return new TD(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0)
      }
    }
    class bD {
      constructor(DD, zD, wD) {
        this.active = DD, this.id = zD, this.open = wD
      }
      static start() {
        return new bD(iD, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
      }
      update(DD) {
        let {
          state: zD
        } = DD, wD = zD.facet(JD), pD = (wD.override || zD.languageDataAt("autocomplete", AD(zD)).map(GD)).map((zD => (this.active.find((DD => DD.source == zD)) || new WD(zD, this.active.some((DD => 0 != DD.state)) ? 1 : 0)).update(DD, wD)));
        pD.length == this.active.length && pD.every(((DD, zD) => DD == this.active[zD])) && (pD = this.active);
        let sD = this.open,
          KD = DD.effects.some((DD => DD.is(ZD)));
        sD && DD.docChanged && (sD = sD.map(DD.changes)), DD.selection || pD.some((zD => zD.hasResult() && DD.changes.touchesRange(zD.from, zD.to))) || ! function(DD, zD) {
          if (DD == zD) return !0;
          for (let wD = 0, pD = 0;;) {
            for (; wD < DD.length && !DD[wD].hasResult();) wD++;
            for (; pD < zD.length && !zD[pD].hasResult();) pD++;
            let sD = wD == DD.length,
              KD = pD == zD.length;
            if (sD || KD) return sD == KD;
            if (DD[wD++].result != zD[pD++].result) return !1
          }
        }(pD, this.active) || KD ? sD = TD.build(pD, zD, this.id, sD, wD, KD) : sD && sD.disabled && !pD.some((DD => DD.isPending)) && (sD = null), !sD && pD.every((DD => !DD.isPending)) && pD.some((DD => DD.hasResult())) && (pD = pD.map((DD => DD.hasResult() ? new WD(DD.source, 0) : DD)));
        for (let rD of DD.effects) rD.is(XD) && (sD = sD && sD.setSelected(rD.value, this.id));
        return pD == this.active && sD == this.open ? this : new bD(pD, this.id, sD)
      }
      get tooltip() {
        return this.open ? this.open.tooltip : null
      }
      get attrs() {
        return this.open ? this.open.attrs : this.active.length ? jD : dD
      }
    }
    const jD = {
        "aria-autocomplete": "list"
      },
      dD = {};

    function SD(DD, zD) {
      let wD = {
        "aria-autocomplete": "list",
        "aria-haspopup": "listbox",
        "aria-controls": DD
      };
      return zD > -1 && (wD["aria-activedescendant"] = DD + "-" + zD), wD
    }
    const iD = [];

    function lD(DD, zD) {
      if (DD.isUserEvent("input.complete")) {
        let wD = DD.annotation(fD);
        if (wD && zD.activateOnCompletion(wD)) return 12
      }
      let wD = DD.isUserEvent("input.type");
      return wD && zD.activateOnTyping ? 5 : wD ? 1 : DD.isUserEvent("delete.backward") ? 2 : DD.selection ? 8 : DD.docChanged ? 16 : 0
    }
    class WD {
      constructor(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.source = DD, this.state = zD, this.explicit = wD
      }
      hasResult() {
        return !1
      }
      get isPending() {
        return 1 == this.state
      }
      update(DD, zD) {
        let wD = lD(DD, zD),
          pD = this;
        (8 & wD || 16 & wD && this.touches(DD)) && (pD = new WD(pD.source, 0)), 4 & wD && 0 == pD.state && (pD = new WD(this.source, 1)), pD = pD.updateFor(DD, wD);
        for (let sD of DD.effects)
          if (sD.is(hD)) pD = new WD(pD.source, 1, sD.value);
          else if (sD.is(nD)) pD = new WD(pD.source, 0);
        else if (sD.is(ZD))
          for (let DD of sD.value) DD.source == pD.source && (pD = DD);
        return pD
      }
      updateFor(DD, zD) {
        return this.map(DD.changes)
      }
      map(DD) {
        return this
      }
      touches(DD) {
        return DD.changes.touchesRange(AD(DD.state))
      }
    }
    class ND extends WD {
      constructor(DD, zD, wD, pD, sD, KD) {
        super(DD, 3, zD), this.limit = wD, this.result = pD, this.from = sD, this.to = KD
      }
      hasResult() {
        return !0
      }
      updateFor(DD, zD) {
        var wD;
        if (!(3 & zD)) return this.map(DD.changes);
        let pD = this.result;
        pD.map && !DD.changes.empty && (pD = pD.map(pD, DD.changes));
        let sD = DD.changes.mapPos(this.from),
          KD = DD.changes.mapPos(this.to, 1),
          LD = AD(DD.state);
        if (LD > KD || !pD || 2 & zD && (AD(DD.startState) == this.from || LD < this.limit)) return new WD(this.source, 4 & zD ? 1 : 0);
        let cD = DD.changes.mapPos(this.limit);
        return function(DD, zD, wD, pD) {
          if (!DD) return !1;
          let sD = zD.sliceDoc(wD, pD);
          return "function" == typeof DD ? DD(sD, wD, pD, zD) : UD(DD, !0).test(sD)
        }(pD.validFor, DD.state, sD, KD) ? new ND(this.source, this.explicit, cD, pD, sD, KD) : pD.update && (pD = pD.update(pD, sD, KD, new rD(DD.state, LD, !1))) ? new ND(this.source, this.explicit, cD, pD, pD.from, null !== (wD = pD.to) && void 0 !== wD ? wD : AD(DD.state)) : new WD(this.source, 1, this.explicit)
      }
      map(DD) {
        if (DD.empty) return this;
        return (this.result.map ? this.result.map(this.result, DD) : this.result) ? new ND(this.source, this.explicit, DD.mapPos(this.limit), this.result, DD.mapPos(this.from), DD.mapPos(this.to, 1)) : new WD(this.source, 0)
      }
      touches(DD) {
        return DD.changes.touchesRange(this.from, this.to)
      }
    }
    const ZD = pD.E.define({
        map: (DD, zD) => DD.map((DD => DD.map(zD)))
      }),
      yD = pD.G.define({
        create: () => bD.start(),
        update: (DD, zD) => DD.update(zD),
        provide: DD => [sD.sb.from(DD, (DD => DD.tooltip)), sD.i.contentAttributes.from(DD, (DD => DD.attrs))]
      });

    function kD(DD, zD) {
      const wD = zD.completion.apply || zD.completion.label;
      let pD = DD.state.field(yD).active.find((DD => DD.source == zD.source));
      return pD instanceof ND && ("string" == typeof wD ? DD.dispatch({
        ...ID(DD.state, wD, pD.from, pD.to),
        annotations: fD.of(zD.completion)
      }) : wD(DD, zD.completion, pD.from, pD.to), !0)
    }
    const mD = CD(yD, kD);

    function eD(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option";
      return wD => {
        let pD = wD.state.field(yD, !1);
        if (!pD || !pD.open || pD.open.disabled || Date.now() - pD.open.timestamp < wD.state.facet(JD).interactionDelay) return !1;
        let KD, rD = 1;
        "page" == zD && (KD = (0, sD.K)(wD, pD.open.tooltip)) && (rD = Math.max(2, Math.floor(KD.dom.offsetHeight / KD.dom.querySelector("li").offsetHeight) - 1));
        let {
          length: LD
        } = pD.open.options, cD = pD.open.selected > -1 ? pD.open.selected + rD * (DD ? 1 : -1) : DD ? 0 : LD - 1;
        return cD < 0 ? cD = "page" == zD ? 0 : LD - 1 : cD >= LD && (cD = "page" == zD ? LD - 1 : 0), wD.dispatch({
          effects: XD.of(cD)
        }), !0
      }
    }
    const oD = DD => !!DD.state.field(yD, !1) && (DD.dispatch({
      effects: hD.of(!0)
    }), !0);
    class aD {
      constructor(DD, zD) {
        this.active = DD, this.context = zD, this.time = Date.now(), this.updates = [], this.done = void 0
      }
    }
    const uD = sD.n.fromClass(class {
        constructor(DD) {
          this.view = DD, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
          for (let zD of DD.state.field(yD).active) zD.isPending && this.startQuery(zD)
        }
        update(DD) {
          let zD = DD.state.field(yD),
            wD = DD.state.facet(JD);
          if (!DD.selectionSet && !DD.docChanged && DD.startState.field(yD) == zD) return;
          let pD = DD.transactions.some((DD => {
            let zD = lD(DD, wD);
            return 8 & zD || (DD.selection || DD.docChanged) && !(3 & zD)
          }));
          for (let LD = 0; LD < this.running.length; LD++) {
            let zD = this.running[LD];
            if (pD || zD.context.abortOnDocChange && DD.docChanged || zD.updates.length + DD.transactions.length > 50 && Date.now() - zD.time > 1e3) {
              for (let DD of zD.context.abortListeners) try {
                DD()
              } catch (rD) {
                (0, sD.cb)(this.view.state, rD)
              }
              zD.context.abortListeners = null, this.running.splice(LD--, 1)
            } else zD.updates.push(...DD.transactions)
          }
          this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), DD.transactions.some((DD => DD.effects.some((DD => DD.is(hD))))) && (this.pendingStart = !0);
          let KD = this.pendingStart ? 50 : wD.activateOnTypingDelay;
          if (this.debounceUpdate = zD.active.some((DD => DD.isPending && !this.running.some((zD => zD.active.source == DD.source)))) ? setTimeout((() => this.startUpdate()), KD) : -1, 0 != this.composing)
            for (let sD of DD.transactions) sD.isUserEvent("input.type") ? this.composing = 2 : 2 == this.composing && sD.selection && (this.composing = 3)
        }
        startUpdate() {
          this.debounceUpdate = -1, this.pendingStart = !1;
          let {
            state: DD
          } = this.view, zD = DD.field(yD);
          for (let wD of zD.active) wD.isPending && !this.running.some((DD => DD.active.source == wD.source)) && this.startQuery(wD);
          this.running.length && zD.open && zD.open.disabled && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(JD).updateSyncTime))
        }
        startQuery(DD) {
          let {
            state: zD
          } = this.view, wD = AD(zD), pD = new rD(zD, wD, DD.explicit, this.view), KD = new aD(DD, pD);
          this.running.push(KD), Promise.resolve(DD.source(pD)).then((DD => {
            KD.context.aborted || (KD.done = DD || null, this.scheduleAccept())
          }), (DD => {
            this.view.dispatch({
              effects: nD.of(null)
            }), (0, sD.cb)(this.view.state, DD)
          }))
        }
        scheduleAccept() {
          this.running.every((DD => void 0 !== DD.done)) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(JD).updateSyncTime))
        }
        accept() {
          var DD;
          this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
          let zD = [],
            wD = this.view.state.facet(JD),
            pD = this.view.state.field(yD);
          for (let sD = 0; sD < this.running.length; sD++) {
            let KD = this.running[sD];
            if (void 0 === KD.done) continue;
            if (this.running.splice(sD--, 1), KD.done) {
              let pD = AD(KD.updates.length ? KD.updates[0].startState : this.view.state),
                sD = Math.min(pD, KD.done.from + (KD.active.explicit ? 0 : 1)),
                rD = new ND(KD.active.source, KD.active.explicit, sD, KD.done, KD.done.from, null !== (DD = KD.done.to) && void 0 !== DD ? DD : pD);
              for (let DD of KD.updates) rD = rD.update(DD, wD);
              if (rD.hasResult()) {
                zD.push(rD);
                continue
              }
            }
            let rD = pD.active.find((DD => DD.source == KD.active.source));
            if (rD && rD.isPending)
              if (null == KD.done) {
                let DD = new WD(KD.active.source, 0);
                for (let zD of KD.updates) DD = DD.update(zD, wD);
                DD.isPending || zD.push(DD)
              } else this.startQuery(rD)
          }(zD.length || pD.open && pD.open.disabled) && this.view.dispatch({
            effects: ZD.of(zD)
          })
        }
      }, {
        eventHandlers: {
          blur(DD) {
            let zD = this.view.state.field(yD, !1);
            if (zD && zD.tooltip && this.view.state.facet(JD).closeOnBlur) {
              let wD = zD.open && (0, sD.K)(this.view, zD.open.tooltip);
              wD && wD.dom.contains(DD.relatedTarget) || setTimeout((() => this.view.dispatch({
                effects: nD.of(null)
              })), 10)
            }
          },
          compositionstart() {
            this.composing = 1
          },
          compositionend() {
            3 == this.composing && setTimeout((() => this.view.dispatch({
              effects: hD.of(!1)
            })), 20), this.composing = 0
          }
        }
      }),
      vD = "object" == typeof navigator && /Win/.test(navigator.platform),
      tD = pD.u.highest(sD.i.domEventHandlers({
        keydown(DD, zD) {
          let wD = zD.state.field(yD, !1);
          if (!wD || !wD.open || wD.open.disabled || wD.open.selected < 0 || DD.key.length > 1 || DD.ctrlKey && (!vD || !DD.altKey) || DD.metaKey) return !1;
          let pD = wD.open.options[wD.open.selected],
            sD = wD.active.find((DD => DD.source == pD.source)),
            KD = pD.completion.commitCharacters || sD.result.commitCharacters;
          return KD && KD.indexOf(DD.key) > -1 && kD(zD, pD), !1
        }
      })),
      FD = sD.i.baseTheme({
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
    class YD {
      constructor(DD, zD, wD, pD) {
        this.field = DD, this.line = zD, this.from = wD, this.to = pD
      }
    }
    class HD {
      constructor(DD, zD, wD) {
        this.field = DD, this.from = zD, this.to = wD
      }
      map(DD) {
        let zD = DD.mapPos(this.from, -1, pD.q.TrackDel),
          wD = DD.mapPos(this.to, 1, pD.q.TrackDel);
        return null == zD || null == wD ? null : new HD(this.field, zD, wD)
      }
    }
    class qD {
      constructor(DD, zD) {
        this.lines = DD, this.fieldPositions = zD
      }
      instantiate(DD, zD) {
        let wD = [],
          pD = [zD],
          sD = DD.doc.lineAt(zD),
          rD = /^\s*/.exec(sD.text)[0];
        for (let cD of this.lines) {
          if (wD.length) {
            let wD = rD,
              sD = /^\t*/.exec(cD)[0].length;
            for (let zD = 0; zD < sD; zD++) wD += DD.facet(KD.ab);
            pD.push(zD + wD.length - sD), cD = wD + cD.slice(sD)
          }
          wD.push(cD), zD += cD.length + 1
        }
        let LD = this.fieldPositions.map((DD => new HD(DD.field, pD[DD.line] + DD.from, pD[DD.line] + DD.to)));
        return {
          text: wD,
          rG: LD
        }
      }
      static parse(DD) {
        let zD, wD = [],
          pD = [],
          sD = [];
        for (let KD of DD.split(/\r\n?|\n/)) {
          for (; zD = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(KD);) {
            let DD = zD[1] ? +zD[1] : null,
              rD = zD[2] || zD[3] || "",
              LD = -1,
              cD = rD.replace(/\\[{}]/g, (DD => DD[1]));
            for (let zD = 0; zD < wD.length; zD++)(null != DD ? wD[zD].seq == DD : cD && wD[zD].name == cD) && (LD = zD);
            if (LD < 0) {
              let zD = 0;
              for (; zD < wD.length && (null == DD || null != wD[zD].seq && wD[zD].seq < DD);) zD++;
              wD.splice(zD, 0, {
                seq: DD,
                name: cD
              }), LD = zD;
              for (let DD of sD) DD.field >= LD && DD.field++
            }
            for (let wD of sD)
              if (wD.line == pD.length && wD.from > zD.index) {
                let DD = zD[2] ? 3 + (zD[1] || "").length : 2;
                wD.from -= DD, wD.to -= DD
              } sD.push(new YD(LD, pD.length, zD.index, zD.index + cD.length)), KD = KD.slice(0, zD.index) + rD + KD.slice(zD.index + zD[0].length)
          }
          KD = KD.replace(/\\([{}])/g, ((DD, zD, wD) => {
            for (let KD of sD) KD.line == pD.length && KD.from > wD && (KD.from--, KD.to--);
            return zD
          })), pD.push(KD)
        }
        return new qD(pD, sD)
      }
    }
    let Dz = sD.d.widget({
        widget: new class extends sD.r {
          toDOM() {
            let DD = document.createElement("span");
            return DD.className = "cm-snippetFieldPosition", DD
          }
          ignoreEvent() {
            return !1
          }
        }
      }),
      zz = sD.d.mark({
        class: "cm-snippetField"
      });
    class wz {
      constructor(DD, zD) {
        this.rG = DD, this.active = zD, this.deco = sD.d.set(DD.map((DD => (DD.from == DD.to ? Dz : zz).range(DD.from, DD.to))), !0)
      }
      map(DD) {
        let zD = [];
        for (let wD of this.rG) {
          let pD = wD.map(DD);
          if (!pD) return null;
          zD.push(pD)
        }
        return new wz(zD, this.active)
      }
      selectionInsideField(DD) {
        return DD.rG.every((DD => this.rG.some((zD => zD.field == this.active && zD.from <= DD.from && zD.to >= DD.to))))
      }
    }
    const pz = pD.E.define({
        map: (DD, zD) => DD && DD.map(zD)
      }),
      sz = pD.E.define(),
      Kz = pD.G.define({
        create: () => null,
        update(DD, zD) {
          for (let wD of zD.effects) {
            if (wD.is(pz)) return wD.value;
            if (wD.is(sz) && DD) return new wz(DD.rG, wD.value)
          }
          return DD && zD.docChanged && (DD = DD.map(zD.changes)), DD && zD.selection && !DD.selectionInsideField(zD.selection) && (DD = null), DD
        },
        provide: DD => sD.i.BD.from(DD, (DD => DD ? DD.deco : sD.d.none))
      });

    function rz(DD, zD) {
      return pD.j.create(DD.filter((DD => DD.field == zD)).map((DD => pD.j.range(DD.from, DD.to))))
    }

    function Lz(DD) {
      let zD = qD.parse(DD);
      return (DD, wD, sD, KD) => {
        let {
          text: rD,
          rG: LD
        } = zD.instantiate(DD.state, sD), {
          main: cD
        } = DD.state.selection, gD = {
          changes: {
            from: sD,
            to: KD == cD.from ? cD.to : KD,
            insert: pD.K.of(rD)
          },
          scrollIntoView: !0,
          annotations: wD ? [fD.of(wD), pD.M.userEvent.of("input.complete")] : void 0
        };
        if (LD.length && (gD.selection = rz(LD, 0)), LD.some((DD => DD.field > 0))) {
          let zD = new wz(LD, 0),
            wD = gD.effects = [pz.of(zD)];
          void 0 === DD.state.field(Kz, !1) && wD.push(pD.E.appendConfig.of([Kz, Az, fz, FD]))
        }
        DD.dispatch(DD.state.update(gD))
      }
    }

    function cz(DD) {
      return zD => {
        let {
          state: wD,
          dispatch: pD
        } = zD, sD = wD.field(Kz, !1);
        if (!sD || DD < 0 && 0 == sD.active) return !1;
        let KD = sD.active + DD,
          rD = DD > 0 && !sD.rG.some((zD => zD.field == KD + DD));
        return pD(wD.update({
          selection: rz(sD.rG, KD),
          effects: pz.of(rD ? null : new wz(sD.rG, KD)),
          scrollIntoView: !0
        })), !0
      }
    }
    const gz = [{
        key: "Tab",
        run: cz(1),
        shift: cz(-1)
      }, {
        key: "Escape",
        run: DD => {
          let {
            state: zD,
            dispatch: wD
          } = DD;
          return !!zD.field(Kz, !1) && (wD(zD.update({
            effects: pz.of(null)
          })), !0)
        }
      }],
      Rz = pD.n.define({
        combine: DD => DD.length ? DD[0] : gz
      }),
      Az = pD.u.highest(sD.Z.compute([Rz], (DD => DD.facet(Rz))));

    function Uz(DD, zD) {
      return {
        ...zD,
        apply: Lz(DD)
      }
    }
    const fz = sD.i.domEventHandlers({
      mousedown(DD, zD) {
        let wD, pD = zD.state.field(Kz, !1);
        if (!pD || null == (wD = zD.posAtCoords({
            x: DD.clientX,
            y: DD.clientY
          }))) return !1;
        let sD = pD.rG.find((DD => DD.from <= wD && DD.to >= wD));
        return !(!sD || sD.field == pD.active) && (zD.dispatch({
          selection: rz(pD.rG, sD.field),
          effects: pz.of(pD.rG.some((DD => DD.field > sD.field)) ? new wz(pD.rG, sD.field) : null),
          scrollIntoView: !0
        }), !0)
      }
    });
    const Iz = {
        brackets: ["(", "[", "{", "'", '"'],
        before: ")]}:;>",
        stringPrefixes: []
      },
      Bz = pD.E.define({
        map(DD, zD) {
          let wD = zD.mapPos(DD, -1, pD.q.TrackAfter);
          return null == wD ? void 0 : wD
        }
      }),
      Gz = new class extends pD.C {};
    Gz.startSide = 1, Gz.endSide = -1;
    const hz = pD.G.define({
      create: () => pD.z.empty,
      update(DD, zD) {
        if (DD = DD.map(zD.changes), zD.selection) {
          let wD = zD.state.doc.lineAt(zD.selection.main.head);
          DD = DD.update({
            filter: DD => DD >= wD.from && DD <= wD.to
          })
        }
        for (let wD of zD.effects) wD.is(Bz) && (DD = DD.update({
          add: [Gz.range(wD.value, wD.value + 1)]
        }));
        return DD
      }
    });

    function nz() {
      return [Qz, hz]
    }
    const Mz = "()[]{}<>\xab\xbb\xbb\xab\uff3b\uff3d\uff5b\uff5d";

    function Oz(DD) {
      for (let zD = 0; zD < 16; zD += 2)
        if (Mz.charCodeAt(zD) == DD) return Mz.charAt(zD + 1);
      return (0, pD.fb)(DD < 128 ? DD : DD + 1)
    }

    function Jz(DD, zD) {
      return DD.languageDataAt("closeBrackets", zD)[0] || Iz
    }
    const Ez = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      Qz = sD.i.inputHandler.of(((DD, zD, wD, sD) => {
        if ((Ez ? DD.composing : DD.compositionStarted) || DD.state.readOnly) return !1;
        let KD = DD.state.selection.main;
        if (sD.length > 2 || 2 == sD.length && 1 == (0, pD.T)((0, pD.P)(sD, 0)) || zD != KD.from || wD != KD.to) return !1;
        let rD = function(DD, zD) {
          let wD = Jz(DD, DD.selection.main.head),
            sD = wD.brackets || Iz.brackets;
          for (let KD of sD) {
            let rD = Oz((0, pD.P)(KD, 0));
            if (zD == KD) return rD == KD ? Tz(DD, KD, sD.indexOf(KD + KD + KD) > -1, wD) : Cz(DD, KD, rD, wD.before || Iz.before);
            if (zD == rD && Vz(DD, DD.selection.main.from)) return xz(DD, KD, rD)
          }
          return null
        }(DD.state, sD);
        return !!rD && (DD.dispatch(rD), !0)
      })),
      Xz = [{
        key: "Backspace",
        run: DD => {
          let {
            state: zD,
            dispatch: wD
          } = DD;
          if (zD.readOnly) return !1;
          let sD = Jz(zD, zD.selection.main.head).brackets || Iz.brackets,
            KD = null,
            rD = zD.changeByRange((DD => {
              if (DD.empty) {
                let wD = function(DD, zD) {
                  let wD = DD.sliceString(zD - 2, zD);
                  return (0, pD.T)((0, pD.P)(wD, 0)) == wD.length ? wD : wD.slice(1)
                }(zD.doc, DD.head);
                for (let KD of sD)
                  if (KD == wD && Pz(zD.doc, DD.head) == Oz((0, pD.P)(KD, 0))) return {
                    changes: {
                      from: DD.head - KD.length,
                      to: DD.head + KD.length
                    },
                    range: pD.j.cursor(DD.head - KD.length)
                  }
              }
              return {
                range: KD = DD
              }
            }));
          return KD || wD(zD.update(rD, {
            scrollIntoView: !0,
            userEvent: "delete.backward"
          })), !KD
        }
      }];

    function Vz(DD, zD) {
      let wD = !1;
      return DD.field(hz).between(0, DD.doc.length, (DD => {
        DD == zD && (wD = !0)
      })), wD
    }

    function Pz(DD, zD) {
      let wD = DD.sliceString(zD, zD + 2);
      return wD.slice(0, (0, pD.T)((0, pD.P)(wD, 0)))
    }

    function Cz(DD, zD, wD, sD) {
      let KD = null,
        rD = DD.changeByRange((rD => {
          if (!rD.empty) return {
            changes: [{
              insert: zD,
              from: rD.from
            }, {
              insert: wD,
              from: rD.to
            }],
            effects: Bz.of(rD.to + zD.length),
            range: pD.j.range(rD.anchor + zD.length, rD.head + zD.length)
          };
          let LD = Pz(DD.doc, rD.head);
          return !LD || /\s/.test(LD) || sD.indexOf(LD) > -1 ? {
            changes: {
              insert: zD + wD,
              from: rD.head
            },
            effects: Bz.of(rD.head + zD.length),
            range: pD.j.cursor(rD.head + zD.length)
          } : {
            range: KD = rD
          }
        }));
      return KD ? null : DD.update(rD, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function xz(DD, zD, wD) {
      let sD = null,
        KD = DD.changeByRange((zD => zD.empty && Pz(DD.doc, zD.head) == wD ? {
          changes: {
            from: zD.head,
            to: zD.head + wD.length,
            insert: wD
          },
          range: pD.j.cursor(zD.head + wD.length)
        } : sD = {
          range: zD
        }));
      return sD ? null : DD.update(KD, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function Tz(DD, zD, wD, sD) {
      let rD = sD.stringPrefixes || Iz.stringPrefixes,
        LD = null,
        cD = DD.changeByRange((sD => {
          if (!sD.empty) return {
            changes: [{
              insert: zD,
              from: sD.from
            }, {
              insert: zD,
              from: sD.to
            }],
            effects: Bz.of(sD.to + zD.length),
            range: pD.j.range(sD.anchor + zD.length, sD.head + zD.length)
          };
          let cD, gD = sD.head,
            RD = Pz(DD.doc, gD);
          if (RD == zD) {
            if (bz(DD, gD)) return {
              changes: {
                insert: zD + zD,
                from: gD
              },
              effects: Bz.of(gD + zD.length),
              range: pD.j.cursor(gD + zD.length)
            };
            if (Vz(DD, gD)) {
              let sD = wD && DD.sliceDoc(gD, gD + 3 * zD.length) == zD + zD + zD ? zD + zD + zD : zD;
              return {
                changes: {
                  from: gD,
                  to: gD + sD.length,
                  insert: sD
                },
                range: pD.j.cursor(gD + sD.length)
              }
            }
          } else {
            if (wD && DD.sliceDoc(gD - 2 * zD.length, gD) == zD + zD && (cD = jz(DD, gD - 2 * zD.length, rD)) > -1 && bz(DD, cD)) return {
              changes: {
                insert: zD + zD + zD + zD,
                from: gD
              },
              effects: Bz.of(gD + zD.length),
              range: pD.j.cursor(gD + zD.length)
            };
            if (DD.charCategorizer(gD)(RD) != pD.h.Word && jz(DD, gD, rD) > -1 && ! function(DD, zD, wD, pD) {
                let sD = (0, KD.jb)(DD).resolveInner(zD, -1),
                  rD = pD.reduce(((DD, zD) => Math.max(DD, zD.length)), 0);
                for (let KD = 0; KD < 5; KD++) {
                  let KD = DD.sliceDoc(sD.from, Math.min(sD.to, sD.from + wD.length + rD)),
                    LD = KD.indexOf(wD);
                  if (!LD || LD > -1 && pD.indexOf(KD.slice(0, LD)) > -1) {
                    let zD = sD.firstChild;
                    for (; zD && zD.from == sD.from && zD.to - zD.from > wD.length + LD;) {
                      if (DD.sliceDoc(zD.to - wD.length, zD.to) == wD) return !1;
                      zD = zD.firstChild
                    }
                    return !0
                  }
                  let cD = sD.to == zD && sD.parent;
                  if (!cD) break;
                  sD = cD
                }
                return !1
              }(DD, gD, zD, rD)) return {
              changes: {
                insert: zD + zD,
                from: gD
              },
              effects: Bz.of(gD + zD.length),
              range: pD.j.cursor(gD + zD.length)
            }
          }
          return {
            range: LD = sD
          }
        }));
      return LD ? null : DD.update(cD, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function bz(DD, zD) {
      let wD = (0, KD.jb)(DD).resolveInner(zD + 1);
      return wD.parent && wD.from == zD
    }

    function jz(DD, zD, wD) {
      let sD = DD.charCategorizer(zD);
      if (sD(DD.sliceDoc(zD - 1, zD)) != pD.h.Word) return zD;
      for (let KD of wD) {
        let wD = zD - KD.length;
        if (DD.sliceDoc(wD, zD) == KD && sD(DD.sliceDoc(wD - 1, wD)) != pD.h.Word) return wD
      }
      return -1
    }

    function dz() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [tD, yD, JD.of(DD), uD, iz, FD]
    }
    const Sz = [{
        key: "Ctrl-Space",
        run: oD
      }, {
        mac: "Alt-`",
        run: oD
      }, {
        mac: "Alt-i",
        run: oD
      }, {
        key: "Escape",
        run: DD => {
          let zD = DD.state.field(yD, !1);
          return !(!zD || !zD.active.some((DD => 0 != DD.state))) && (DD.dispatch({
            effects: nD.of(null)
          }), !0)
        }
      }, {
        key: "ArrowDown",
        run: eD(!0)
      }, {
        key: "ArrowUp",
        run: eD(!1)
      }, {
        key: "PageDown",
        run: eD(!0, "page")
      }, {
        key: "PageUp",
        run: eD(!1, "page")
      }, {
        key: "Enter",
        run: DD => {
          let zD = DD.state.field(yD, !1);
          return !(DD.state.readOnly || !zD || !zD.open || zD.open.selected < 0 || zD.open.disabled || Date.now() - zD.open.timestamp < DD.state.facet(JD).interactionDelay) && kD(DD, zD.open.options[zD.open.selected])
        }
      }],
      iz = pD.u.highest(sD.Z.computeN([JD], (DD => DD.facet(JD).defaultKeymap ? [Sz] : [])))
  },
  41355: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => gD,
      d: () => UD,
      h: () => RD,
      l: () => AD
    });
    var pD = wD(41212);
    class sD {
      constructor(DD, zD, wD, pD) {
        this.origin = DD, this.changes = zD, this.effects = wD, this.clientID = pD
      }
    }
    class KD {
      constructor(DD, zD) {
        this.version = DD, this.unconfirmed = zD
      }
    }
    const rD = pD.n.define({
        combine(DD) {
          let zD = (0, pD.W)(DD, {
            startVersion: 0,
            clientID: null,
            sharedEffects: () => []
          }, {
            generatedID: DD => DD
          });
          return null == zD.clientID && (zD.clientID = DD.length && DD[0].generatedID || ""), zD
        }
      }),
      LD = pD.c.define(),
      cD = pD.G.define({
        create: DD => new KD(DD.facet(rD).startVersion, []),
        update(DD, zD) {
          let wD = zD.annotation(LD);
          if (wD) return wD;
          let {
            sharedEffects: pD,
            clientID: cD
          } = zD.startState.facet(rD), gD = pD(zD);
          return gD.length || !zD.changes.empty ? new KD(DD.version, DD.unconfirmed.concat(new sD(zD, zD.changes, gD, cD))) : DD
        }
      });

    function gD() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [cD, rD.of(Object.assign({
        generatedID: Math.floor(1e9 * Math.random()).toString(36)
      }, DD))]
    }

    function RD(DD, zD) {
      let {
        version: wD,
        unconfirmed: gD
      } = DD.field(cD), {
        clientID: RD
      } = DD.facet(rD);
      wD += zD.length;
      let AD = [],
        UD = null,
        fD = 0;
      for (let sD of zD) {
        let DD = fD < gD.length ? gD[fD] : null;
        DD && DD.clientID == sD.clientID ? (UD && (UD = UD.map(DD.changes, !0)), AD = pD.E.mapEffects(AD, sD.changes), fD++) : (AD = pD.E.mapEffects(AD, sD.changes), sD.effects && (AD = AD.concat(sD.effects)), UD = UD ? UD.compose(sD.changes) : sD.changes)
      }
      if (fD && (gD = gD.slice(fD)), gD.length && (UD && (gD = gD.map((DD => {
          let zD = DD.changes.map(UD);
          return UD = UD.map(DD.changes, !0), new sD(DD.origin, zD, pD.E.mapEffects(DD.effects, UD), RD)
        }))), AD.length)) {
        let DD = gD.reduce(((DD, zD) => DD.compose(zD.changes)), pD.ChangeSet.empty(gD[0].changes.length));
        AD = pD.E.mapEffects(AD, DD)
      }
      return UD ? DD.update({
        changes: UD,
        effects: AD,
        annotations: [pD.M.addToHistory.of(!1), pD.M.remote.of(!0), LD.of(new KD(wD, gD))],
        filter: !1
      }) : DD.update({
        annotations: [LD.of(new KD(wD, gD))]
      })
    }

    function AD(DD) {
      return DD.field(cD).unconfirmed
    }

    function UD(DD) {
      return DD.field(cD).version
    }
  },
  41243: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => Bz
    });
    var pD = wD(41233);
    class sD {
      constructor(DD, zD, wD, pD, sD, KD, rD, LD, cD) {
        let gD = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          RD = arguments.length > 10 ? arguments[10] : void 0;
        this.p = DD, this.stack = zD, this.state = wD, this.reducePos = pD, this.pos = sD, this.score = KD, this.buffer = rD, this.bufferBase = LD, this.curContext = cD, this.lookAhead = gD, this.parent = RD
      }
      toString() {
        return `[${this.stack.filter(((DD,zD)=>zD%3==0)).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`
      }
      static start(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          pD = DD.parser.context;
        return new sD(DD, [], zD, wD, wD, 0, [], 0, pD ? new KD(pD, pD.start) : null, 0, null)
      }
      get context() {
        return this.curContext ? this.curContext.context : null
      }
      pushState(DD, zD) {
        this.stack.push(this.state, zD, this.bufferBase + this.buffer.length), this.state = DD
      }
      reduce(DD) {
        var zD;
        let wD = DD >> 19,
          pD = 65535 & DD,
          {
            parser: sD
          } = this.p,
          KD = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos),
          rD = sD.dynamicPrecedence(pD);
        if (rD && (this.score += rD), 0 == wD) return this.pushState(sD.getGoto(this.state, pD, !0), this.reducePos), pD < sD.minRepeatTerm && this.storeNode(pD, this.reducePos, this.reducePos, KD ? 8 : 4, !0), void this.reduceContext(pD, this.reducePos);
        let LD = this.stack.length - 3 * (wD - 1) - (262144 & DD ? 6 : 0),
          cD = LD ? this.stack[LD - 2] : this.p.rG[0].from,
          gD = this.reducePos - cD;
        gD >= 2e3 && !(null === (zD = this.p.parser.nodeSet.types[pD]) || void 0 === zD ? void 0 : zD.isAnonymous) && (cD == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = gD) : this.p.lastBigReductionSize < gD && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = cD, this.p.lastBigReductionSize = gD));
        let RD = LD ? this.stack[LD - 1] : 0,
          AD = this.bufferBase + this.buffer.length - RD;
        if (pD < sD.minRepeatTerm || 131072 & DD) {
          let DD = sD.stateFlag(this.state, 1) ? this.pos : this.reducePos;
          this.storeNode(pD, cD, DD, AD + 4, !0)
        }
        if (262144 & DD) this.state = this.stack[LD];
        else {
          let DD = this.stack[LD - 3];
          this.state = sD.getGoto(DD, pD, !0)
        }
        for (; this.stack.length > LD;) this.stack.pop();
        this.reduceContext(pD, cD)
      }
      storeNode(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
          sD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (0 == DD && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
          let DD = this,
            pD = this.buffer.length;
          if (0 == pD && DD.parent && (pD = DD.bufferBase - DD.parent.bufferBase, DD = DD.parent), pD > 0 && 0 == DD.buffer[pD - 4] && DD.buffer[pD - 1] > -1) {
            if (zD == wD) return;
            if (DD.buffer[pD - 2] >= zD) return void(DD.buffer[pD - 2] = wD)
          }
        }
        if (sD && this.pos != wD) {
          let sD = this.buffer.length;
          if (sD > 0 && (0 != this.buffer[sD - 4] || this.buffer[sD - 1] < 0)) {
            let DD = !1;
            for (let zD = sD; zD > 0 && this.buffer[zD - 2] > wD; zD -= 4)
              if (this.buffer[zD - 1] >= 0) {
                DD = !0;
                break
              } if (DD)
              for (; sD > 0 && this.buffer[sD - 2] > wD;) this.buffer[sD] = this.buffer[sD - 4], this.buffer[sD + 1] = this.buffer[sD - 3], this.buffer[sD + 2] = this.buffer[sD - 2], this.buffer[sD + 3] = this.buffer[sD - 1], sD -= 4, pD > 4 && (pD -= 4)
          }
          this.buffer[sD] = DD, this.buffer[sD + 1] = zD, this.buffer[sD + 2] = wD, this.buffer[sD + 3] = pD
        } else this.buffer.push(DD, zD, wD, pD)
      }
      shift(DD, zD, wD, pD) {
        if (131072 & DD) this.pushState(65535 & DD, this.pos);
        else if (0 == (262144 & DD)) {
          let sD = DD,
            {
              parser: KD
            } = this.p;
          this.pos = pD;
          let rD = KD.stateFlag(sD, 1);
          !rD && (pD > wD || zD <= KD.maxNode) && (this.reducePos = pD), this.pushState(sD, rD ? wD : Math.min(wD, this.reducePos)), this.shiftContext(zD, wD), zD <= KD.maxNode && this.buffer.push(zD, wD, pD, 4)
        } else this.pos = pD, this.shiftContext(zD, wD), zD <= this.p.parser.maxNode && this.buffer.push(zD, wD, pD, 4)
      }
      apply(DD, zD, wD, pD) {
        65536 & DD ? this.reduce(DD) : this.shift(DD, zD, wD, pD)
      }
      useNode(DD, zD) {
        let wD = this.p.reused.length - 1;
        (wD < 0 || this.p.reused[wD] != DD) && (this.p.reused.push(DD), wD++);
        let pD = this.pos;
        this.reducePos = this.pos = pD + DD.length, this.pushState(zD, pD), this.buffer.push(wD, pD, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, DD, this, this.p.stream.reset(this.pos - DD.length)))
      }
      split() {
        let DD = this,
          zD = DD.buffer.length;
        for (; zD > 0 && DD.buffer[zD - 2] > DD.reducePos;) zD -= 4;
        let wD = DD.buffer.slice(zD),
          pD = DD.bufferBase + zD;
        for (; DD && pD == DD.bufferBase;) DD = DD.parent;
        return new sD(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, wD, pD, this.curContext, this.lookAhead, DD)
      }
      recoverByDelete(DD, zD) {
        let wD = DD <= this.p.parser.maxNode;
        wD && this.storeNode(DD, this.pos, zD, 4), this.storeNode(0, this.pos, zD, wD ? 8 : 4), this.pos = this.reducePos = zD, this.score -= 190
      }
      canShift(DD) {
        for (let zD = new rD(this);;) {
          let wD = this.p.parser.stateSlot(zD.state, 4) || this.p.parser.hasAction(zD.state, DD);
          if (0 == wD) return !1;
          if (0 == (65536 & wD)) return !0;
          zD.reduce(wD)
        }
      }
      recoverByInsert(DD) {
        if (this.stack.length >= 300) return [];
        let zD = this.p.parser.nextStates(this.state);
        if (zD.length > 8 || this.stack.length >= 120) {
          let wD = [];
          for (let pD, sD = 0; sD < zD.length; sD += 2)(pD = zD[sD + 1]) != this.state && this.p.parser.hasAction(pD, DD) && wD.push(zD[sD], pD);
          if (this.stack.length < 120)
            for (let DD = 0; wD.length < 8 && DD < zD.length; DD += 2) {
              let pD = zD[DD + 1];
              wD.some(((DD, zD) => 1 & zD && DD == pD)) || wD.push(zD[DD], pD)
            }
          zD = wD
        }
        let wD = [];
        for (let pD = 0; pD < zD.length && wD.length < 4; pD += 2) {
          let DD = zD[pD + 1];
          if (DD == this.state) continue;
          let sD = this.split();
          sD.pushState(DD, this.pos), sD.storeNode(0, sD.pos, sD.pos, 4, !0), sD.shiftContext(zD[pD], this.pos), sD.reducePos = this.pos, sD.score -= 200, wD.push(sD)
        }
        return wD
      }
      forceReduce() {
        let {
          parser: DD
        } = this.p, zD = DD.stateSlot(this.state, 5);
        if (0 == (65536 & zD)) return !1;
        if (!DD.validAction(this.state, zD)) {
          let wD = zD >> 19,
            pD = 65535 & zD,
            sD = this.stack.length - 3 * wD;
          if (sD < 0 || DD.getGoto(this.stack[sD], pD, !1) < 0) {
            let DD = this.findForcedReduction();
            if (null == DD) return !1;
            zD = DD
          }
          this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100
        }
        return this.reducePos = this.pos, this.reduce(zD), !0
      }
      findForcedReduction() {
        let {
          parser: DD
        } = this.p, zD = [], wD = (pD, sD) => {
          if (!zD.includes(pD)) return zD.push(pD), DD.allActions(pD, (zD => {
            if (393216 & zD);
            else if (65536 & zD) {
              let wD = (zD >> 19) - sD;
              if (wD > 1) {
                let pD = 65535 & zD,
                  sD = this.stack.length - 3 * wD;
                if (sD >= 0 && DD.getGoto(this.stack[sD], pD, !1) >= 0) return wD << 19 | 65536 | pD
              }
            } else {
              let DD = wD(zD, sD + 1);
              if (null != DD) return DD
            }
          }))
        };
        return wD(this.state, 0)
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
        for (let zD = 0; zD < this.stack.length; zD += 3)
          if (this.stack[zD] != DD.stack[zD]) return !1;
        return !0
      }
      get parser() {
        return this.p.parser
      }
      dialectEnabled(DD) {
        return this.p.parser.dialect.flags[DD]
      }
      shiftContext(DD, zD) {
        this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, DD, this, this.p.stream.reset(zD)))
      }
      reduceContext(DD, zD) {
        this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, DD, this, this.p.stream.reset(zD)))
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
          let zD = new KD(this.curContext.tracker, DD);
          zD.hash != this.curContext.hash && this.emitContext(), this.curContext = zD
        }
      }
      setLookAhead(DD) {
        return !(DD <= this.lookAhead) && (this.emitLookAhead(), this.lookAhead = DD, !0)
      }
      close() {
        this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead()
      }
    }
    class KD {
      constructor(DD, zD) {
        this.tracker = DD, this.context = zD, this.hash = DD.strict ? DD.hash(zD) : 0
      }
    }
    class rD {
      constructor(DD) {
        this.start = DD, this.state = DD.state, this.stack = DD.stack, this.base = this.stack.length
      }
      reduce(DD) {
        let zD = 65535 & DD,
          wD = DD >> 19;
        0 == wD ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= 3 * (wD - 1);
        let pD = this.start.p.parser.getGoto(this.stack[this.base - 3], zD, !0);
        this.state = pD
      }
    }
    class LD {
      constructor(DD, zD, wD) {
        this.stack = DD, this.pos = zD, this.index = wD, this.buffer = DD.buffer, 0 == this.index && this.maybeNext()
      }
      static create(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DD.bufferBase + DD.buffer.length;
        return new LD(DD, zD, zD - DD.bufferBase)
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
        return new LD(this.stack, this.pos, this.index)
      }
    }

    function cD(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uint16Array;
      if ("string" != typeof DD) return DD;
      let wD = null;
      for (let pD = 0, sD = 0; pD < DD.length;) {
        let KD = 0;
        for (;;) {
          let zD = DD.charCodeAt(pD++),
            wD = !1;
          if (126 == zD) {
            KD = 65535;
            break
          }
          zD >= 92 && zD--, zD >= 34 && zD--;
          let sD = zD - 32;
          if (sD >= 46 && (sD -= 46, wD = !0), KD += sD, wD) break;
          KD *= 46
        }
        wD ? wD[sD++] = KD : wD = new zD(KD)
      }
      return wD
    }
    class gD {
      constructor() {
        this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0
      }
    }
    const RD = new gD;
    class AD {
      constructor(DD, zD) {
        this.input = DD, this.rG = zD, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = RD, this.rangeIndex = 0, this.pos = this.chunkPos = zD[0].from, this.range = zD[0], this.end = zD[zD.length - 1].to, this.readNext()
      }
      resolveOffset(DD, zD) {
        let wD = this.range,
          pD = this.rangeIndex,
          sD = this.pos + DD;
        for (; sD < wD.from;) {
          if (!pD) return null;
          let DD = this.rG[--pD];
          sD -= wD.from - DD.to, wD = DD
        }
        for (; zD < 0 ? sD > wD.to : sD >= wD.to;) {
          if (pD == this.rG.length - 1) return null;
          let DD = this.rG[++pD];
          sD += DD.from - wD.to, wD = DD
        }
        return sD
      }
      clipPos(DD) {
        if (DD >= this.range.from && DD < this.range.to) return DD;
        for (let zD of this.rG)
          if (zD.to > DD) return Math.max(DD, zD.from);
        return this.end
      }
      peek(DD) {
        let zD, wD, pD = this.chunkOff + DD;
        if (pD >= 0 && pD < this.chunk.length) zD = this.pos + DD, wD = this.chunk.charCodeAt(pD);
        else {
          let pD = this.resolveOffset(DD, 1);
          if (null == pD) return -1;
          if (zD = pD, zD >= this.chunk2Pos && zD < this.chunk2Pos + this.chunk2.length) wD = this.chunk2.charCodeAt(zD - this.chunk2Pos);
          else {
            let DD = this.rangeIndex,
              pD = this.range;
            for (; pD.to <= zD;) pD = this.rG[++DD];
            this.chunk2 = this.input.chunk(this.chunk2Pos = zD), zD + this.chunk2.length > pD.to && (this.chunk2 = this.chunk2.slice(0, pD.to - zD)), wD = this.chunk2.charCodeAt(0)
          }
        }
        return zD >= this.token.lookAhead && (this.token.lookAhead = zD + 1), wD
      }
      acceptToken(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wD = zD ? this.resolveOffset(zD, -1) : this.pos;
        if (null == wD || wD < this.token.start) throw new RangeError("Token end out of bounds");
        this.token.value = DD, this.token.end = wD
      }
      acceptTokenTo(DD, zD) {
        this.token.value = DD, this.token.end = zD
      }
      getChunk() {
        if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
          let {
            chunk: DD,
            chunkPos: zD
          } = this;
          this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = DD, this.chunk2Pos = zD, this.chunkOff = this.pos - this.chunkPos
        } else {
          this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
          let DD = this.input.chunk(this.pos),
            zD = this.pos + DD.length;
          this.chunk = zD > this.range.to ? DD.slice(0, this.range.to - this.pos) : DD, this.chunkPos = this.pos, this.chunkOff = 0
        }
      }
      readNext() {
        return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff)
      }
      advance() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        for (this.chunkOff += DD; this.pos + DD >= this.range.to;) {
          if (this.rangeIndex == this.rG.length - 1) return this.setDone();
          DD -= this.range.to - this.pos, this.range = this.rG[++this.rangeIndex], this.pos = this.range.from
        }
        return this.pos += DD, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext()
      }
      setDone() {
        return this.pos = this.chunkPos = this.end, this.range = this.rG[this.rangeIndex = this.rG.length - 1], this.chunk = "", this.next = -1
      }
      reset(DD, zD) {
        if (zD ? (this.token = zD, zD.start = DD, zD.lookAhead = DD + 1, zD.value = zD.extended = -1) : this.token = RD, this.pos != DD) {
          if (this.pos = DD, DD == this.end) return this.setDone(), this;
          for (; DD < this.range.from;) this.range = this.rG[--this.rangeIndex];
          for (; DD >= this.range.to;) this.range = this.rG[++this.rangeIndex];
          DD >= this.chunkPos && DD < this.chunkPos + this.chunk.length ? this.chunkOff = DD - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext()
        }
        return this
      }
      read(DD, zD) {
        if (DD >= this.chunkPos && zD <= this.chunkPos + this.chunk.length) return this.chunk.slice(DD - this.chunkPos, zD - this.chunkPos);
        if (DD >= this.chunk2Pos && zD <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(DD - this.chunk2Pos, zD - this.chunk2Pos);
        if (DD >= this.range.from && zD <= this.range.to) return this.input.read(DD, zD);
        let wD = "";
        for (let pD of this.rG) {
          if (pD.from >= zD) break;
          pD.to > DD && (wD += this.input.read(Math.max(pD.from, DD), Math.min(pD.to, zD)))
        }
        return wD
      }
    }
    class UD {
      constructor(DD, zD) {
        this.data = DD, this.id = zD
      }
      token(DD, zD) {
        let {
          parser: wD
        } = zD.p;
        BD(this.data, DD, zD, this.id, wD.data, wD.tokenPrecTable)
      }
    }
    UD.prototype.contextual = UD.prototype.fallback = UD.prototype.extend = !1;
    class fD {
      constructor(DD, zD, wD) {
        this.precTable = zD, this.elseToken = wD, this.data = "string" == typeof DD ? cD(DD) : DD
      }
      token(DD, zD) {
        let wD = DD.pos,
          pD = 0;
        for (;;) {
          let wD = DD.next < 0,
            sD = DD.resolveOffset(1, 1);
          if (BD(this.data, DD, zD, 0, this.data, this.precTable), DD.token.value > -1) break;
          if (null == this.elseToken) return;
          if (wD || pD++, null == sD) break;
          DD.reset(sD, DD.token)
        }
        pD && (DD.reset(wD, DD.token), DD.acceptToken(this.elseToken, pD))
      }
    }
    fD.prototype.contextual = UD.prototype.fallback = UD.prototype.extend = !1;
    class ID {
      constructor(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.token = DD, this.contextual = !!zD.contextual, this.fallback = !!zD.fallback, this.extend = !!zD.extend
      }
    }

    function BD(DD, zD, wD, pD, sD, KD) {
      let rD = 0,
        LD = 1 << pD,
        {
          dialect: cD
        } = wD.p.parser;
      DD: for (; 0 != (LD & DD[rD]);) {
        let wD = DD[rD + 1];
        for (let AD = rD + 3; AD < wD; AD += 2)
          if ((DD[AD + 1] & LD) > 0) {
            let wD = DD[AD];
            if (cD.allows(wD) && (-1 == zD.token.value || zD.token.value == wD || hD(wD, zD.token.value, sD, KD))) {
              zD.acceptToken(wD);
              break
            }
          } let pD = zD.next,
          gD = 0,
          RD = DD[rD + 2];
        if (!(zD.next < 0 && RD > gD && 65535 == DD[wD + 3 * RD - 3])) {
          for (; gD < RD;) {
            let sD = gD + RD >> 1,
              KD = wD + sD + (sD << 1),
              LD = DD[KD],
              cD = DD[KD + 1] || 65536;
            if (pD < LD) RD = sD;
            else {
              if (!(pD >= cD)) {
                rD = DD[KD + 2], zD.advance();
                continue DD
              }
              gD = sD + 1
            }
          }
          break
        }
        rD = DD[wD + 3 * RD - 1]
      }
    }

    function GD(DD, zD, wD) {
      for (let pD, sD = zD; 65535 != (pD = DD[sD]); sD++)
        if (pD == wD) return sD - zD;
      return -1
    }

    function hD(DD, zD, wD, pD) {
      let sD = GD(wD, pD, zD);
      return sD < 0 || GD(wD, pD, DD) < sD
    }
    const nD = "undefined" != typeof process && {
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
    let MD = null;

    function OD(DD, zD, wD) {
      let sD = DD.cursor(pD.f.IncludeAnonymous);
      for (sD.moveTo(zD);;)
        if (!(wD < 0 ? sD.childBefore(zD) : sD.childAfter(zD)))
          for (;;) {
            if ((wD < 0 ? sD.to < zD : sD.from > zD) && !sD.type.isError) return wD < 0 ? Math.max(0, Math.min(sD.to - 1, zD - 25)) : Math.min(DD.length, Math.max(sD.from + 1, zD + 25));
            if (wD < 0 ? sD.prevSibling() : sD.nextSibling()) break;
            if (!sD.parent()) return wD < 0 ? 0 : DD.length
          }
    }
    class JD {
      constructor(DD, zD) {
        this.fragments = DD, this.nodeSet = zD, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment()
      }
      nextFragment() {
        let DD = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
        if (DD) {
          for (this.safeFrom = DD.openStart ? OD(DD.tree, DD.from + DD.offset, 1) - DD.offset : DD.from, this.safeTo = DD.openEnd ? OD(DD.tree, DD.to + DD.offset, -1) - DD.offset : DD.to; this.trees.length;) this.trees.pop(), this.start.pop(), this.index.pop();
          this.trees.push(DD.tree), this.start.push(-DD.offset), this.index.push(0), this.nextStart = this.safeFrom
        } else this.nextStart = 1e9
      }
      nodeAt(DD) {
        if (DD < this.nextStart) return null;
        for (; this.fragment && this.safeTo <= DD;) this.nextFragment();
        if (!this.fragment) return null;
        for (;;) {
          let zD = this.trees.length - 1;
          if (zD < 0) return this.nextFragment(), null;
          let wD = this.trees[zD],
            sD = this.index[zD];
          if (sD == wD.children.length) {
            this.trees.pop(), this.start.pop(), this.index.pop();
            continue
          }
          let KD = wD.children[sD],
            rD = this.start[zD] + wD.positions[sD];
          if (rD > DD) return this.nextStart = rD, null;
          if (KD instanceof pD.s) {
            if (rD == DD) {
              if (rD < this.safeFrom) return null;
              let DD = rD + KD.length;
              if (DD <= this.safeTo) {
                let zD = KD.prop(pD.g.lookAhead);
                if (!zD || DD + zD < this.fragment.to) return KD
              }
            }
            this.index[zD]++, rD + KD.length >= Math.max(this.safeFrom, DD) && (this.trees.push(KD), this.start.push(rD), this.index.push(0))
          } else this.index[zD]++, this.nextStart = rD + KD.length
        }
      }
    }
    class ED {
      constructor(DD, zD) {
        this.stream = zD, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = DD.tokenizers.map((DD => new gD))
      }
      getActions(DD) {
        let zD = 0,
          wD = null,
          {
            parser: pD
          } = DD.p,
          {
            tokenizers: sD
          } = pD,
          KD = pD.stateSlot(DD.state, 3),
          rD = DD.curContext ? DD.curContext.hash : 0,
          LD = 0;
        for (let cD = 0; cD < sD.length; cD++) {
          if (0 == (1 << cD & KD)) continue;
          let pD = sD[cD],
            gD = this.tokens[cD];
          if ((!wD || pD.fallback) && ((pD.contextual || gD.start != DD.pos || gD.mask != KD || gD.context != rD) && (this.updateCachedToken(gD, pD, DD), gD.mask = KD, gD.context = rD), gD.lookAhead > gD.end + 25 && (LD = Math.max(gD.lookAhead, LD)), 0 != gD.value)) {
            let sD = zD;
            if (gD.extended > -1 && (zD = this.addActions(DD, gD.extended, gD.end, zD)), zD = this.addActions(DD, gD.value, gD.end, zD), !pD.extend && (wD = gD, zD > sD)) break
          }
        }
        for (; this.actions.length > zD;) this.actions.pop();
        return LD && DD.setLookAhead(LD), wD || DD.pos != this.stream.end || (wD = new gD, wD.value = DD.p.parser.eofTerm, wD.start = wD.end = DD.pos, zD = this.addActions(DD, wD.value, wD.end, zD)), this.mainToken = wD, this.actions
      }
      getMainToken(DD) {
        if (this.mainToken) return this.mainToken;
        let zD = new gD,
          {
            pos: wD,
            p: pD
          } = DD;
        return zD.start = wD, zD.end = Math.min(wD + 1, pD.stream.end), zD.value = wD == pD.stream.end ? pD.parser.eofTerm : 0, zD
      }
      updateCachedToken(DD, zD, wD) {
        let pD = this.stream.clipPos(wD.pos);
        if (zD.token(this.stream.reset(pD, DD), wD), DD.value > -1) {
          let {
            parser: zD
          } = wD.p;
          for (let pD = 0; pD < zD.specialized.length; pD++)
            if (zD.specialized[pD] == DD.value) {
              let sD = zD.specializers[pD](this.stream.read(DD.start, DD.end), wD);
              if (sD >= 0 && wD.p.parser.dialect.allows(sD >> 1)) {
                0 == (1 & sD) ? DD.value = sD >> 1 : DD.extended = sD >> 1;
                break
              }
            }
        } else DD.value = 0, DD.end = this.stream.clipPos(pD + 1)
      }
      putAction(DD, zD, wD, pD) {
        for (let sD = 0; sD < pD; sD += 3)
          if (this.actions[sD] == DD) return pD;
        return this.actions[pD++] = DD, this.actions[pD++] = zD, this.actions[pD++] = wD, pD
      }
      addActions(DD, zD, wD, pD) {
        let {
          state: sD
        } = DD, {
          parser: KD
        } = DD.p, {
          data: rD
        } = KD;
        for (let LD = 0; LD < 2; LD++)
          for (let DD = KD.stateSlot(sD, LD ? 2 : 1);; DD += 3) {
            if (65535 == rD[DD]) {
              if (1 != rD[DD + 1]) {
                0 == pD && 2 == rD[DD + 1] && (pD = this.putAction(xD(rD, DD + 2), zD, wD, pD));
                break
              }
              DD = xD(rD, DD + 2)
            }
            rD[DD] == zD && (pD = this.putAction(xD(rD, DD + 1), zD, wD, pD))
          }
        return pD
      }
    }
    class QD {
      constructor(DD, zD, wD, pD) {
        this.parser = DD, this.input = zD, this.rG = pD, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new AD(zD, pD), this.tokens = new ED(DD, this.stream), this.topTerm = DD.top[1];
        let {
          from: KD
        } = pD[0];
        this.stacks = [sD.start(this, DD.top[0], KD)], this.fragments = wD.length && this.stream.end - KD > 4 * DD.bufferLength ? new JD(wD, DD.nodeSet) : null
      }
      get parsedPos() {
        return this.minStackPos
      }
      advance() {
        let DD, zD, wD = this.stacks,
          pD = this.minStackPos,
          sD = this.stacks = [];
        if (this.bigReductionCount > 300 && 1 == wD.length) {
          let [DD] = wD;
          for (; DD.forceReduce() && DD.stack.length && DD.stack[DD.stack.length - 2] >= this.lastBigReductionStart;);
          this.bigReductionCount = this.lastBigReductionSize = 0
        }
        for (let KD = 0; KD < wD.length; KD++) {
          let rD = wD[KD];
          for (;;) {
            if (this.tokens.mainToken = null, rD.pos > pD) sD.push(rD);
            else {
              if (this.advanceStack(rD, sD, wD)) continue;
              {
                DD || (DD = [], zD = []), DD.push(rD);
                let wD = this.tokens.getMainToken(rD);
                zD.push(wD.value, wD.end)
              }
            }
            break
          }
        }
        if (!sD.length) {
          let zD = DD && function(DD) {
            let zD = null;
            for (let wD of DD) {
              let DD = wD.p.stoppedAt;
              (wD.pos == wD.p.stream.end || null != DD && wD.pos > DD) && wD.p.parser.stateFlag(wD.state, 2) && (!zD || zD.score < wD.score) && (zD = wD)
            }
            return zD
          }(DD);
          if (zD) return nD && console.log("Finish with " + this.stackID(zD)), this.stackToTree(zD);
          if (this.parser.strict) throw nD && DD && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + pD);
          this.recovering || (this.recovering = 5)
        }
        if (this.recovering && DD) {
          let wD = null != this.stoppedAt && DD[0].pos > this.stoppedAt ? DD[0] : this.runRecovery(DD, zD, sD);
          if (wD) return nD && console.log("Force-finish " + this.stackID(wD)), this.stackToTree(wD.forceAll())
        }
        if (this.recovering) {
          let DD = 1 == this.recovering ? 1 : 3 * this.recovering;
          if (sD.length > DD)
            for (sD.sort(((DD, zD) => zD.score - DD.score)); sD.length > DD;) sD.pop();
          sD.some((DD => DD.reducePos > pD)) && this.recovering--
        } else if (sD.length > 1) {
          DD: for (let DD = 0; DD < sD.length - 1; DD++) {
            let zD = sD[DD];
            for (let wD = DD + 1; wD < sD.length; wD++) {
              let pD = sD[wD];
              if (zD.sameState(pD) || zD.buffer.length > 500 && pD.buffer.length > 500) {
                if (!((zD.score - pD.score || zD.buffer.length - pD.buffer.length) > 0)) {
                  sD.splice(DD--, 1);
                  continue DD
                }
                sD.splice(wD--, 1)
              }
            }
          }
          sD.length > 12 && (sD.sort(((DD, zD) => zD.score - DD.score)), sD.splice(12, sD.length - 12))
        }
        this.minStackPos = sD[0].pos;
        for (let KD = 1; KD < sD.length; KD++) sD[KD].pos < this.minStackPos && (this.minStackPos = sD[KD].pos);
        return null
      }
      stopAt(DD) {
        if (null != this.stoppedAt && this.stoppedAt < DD) throw new RangeError("Can't move stoppedAt forward");
        this.stoppedAt = DD
      }
      advanceStack(DD, zD, wD) {
        let sD = DD.pos,
          {
            parser: KD
          } = this,
          rD = nD ? this.stackID(DD) + " -> " : "";
        if (null != this.stoppedAt && sD > this.stoppedAt) return DD.forceReduce() ? DD : null;
        if (this.fragments) {
          let zD = DD.curContext && DD.curContext.tracker.strict,
            wD = zD ? DD.curContext.hash : 0;
          for (let LD = this.fragments.nodeAt(sD); LD;) {
            let sD = this.parser.nodeSet.types[LD.type.id] == LD.type ? KD.getGoto(DD.state, LD.type.id) : -1;
            if (sD > -1 && LD.length && (!zD || (LD.prop(pD.g.contextHash) || 0) == wD)) return DD.useNode(LD, sD), nD && console.log(rD + this.stackID(DD) + ` (via reuse of ${KD.getName(LD.type.id)})`), !0;
            if (!(LD instanceof pD.s) || 0 == LD.children.length || LD.positions[0] > 0) break;
            let cD = LD.children[0];
            if (!(cD instanceof pD.s && 0 == LD.positions[0])) break;
            LD = cD
          }
        }
        let LD = KD.stateSlot(DD.state, 4);
        if (LD > 0) return DD.reduce(LD), nD && console.log(rD + this.stackID(DD) + ` (via always-reduce ${KD.getName(65535&LD)})`), !0;
        if (DD.stack.length >= 8400)
          for (; DD.stack.length > 6e3 && DD.forceReduce(););
        let cD = this.tokens.getActions(DD);
        for (let pD = 0; pD < cD.length;) {
          let LD = cD[pD++],
            gD = cD[pD++],
            RD = cD[pD++],
            AD = pD == cD.length || !wD,
            UD = AD ? DD : DD.split(),
            fD = this.tokens.mainToken;
          if (UD.apply(LD, gD, fD ? fD.start : UD.pos, RD), nD && console.log(rD + this.stackID(UD) + ` (via ${0==(65536&LD)?"shift":`reduce of ${KD.getName(65535&LD)}`} for ${KD.getName(gD)} @ ${sD}${UD==DD?"":", split"})`), AD) return !0;
          UD.pos > sD ? zD.push(UD) : wD.push(UD)
        }
        return !1
      }
      advanceFully(DD, zD) {
        let wD = DD.pos;
        for (;;) {
          if (!this.advanceStack(DD, null, null)) return !1;
          if (DD.pos > wD) return XD(DD, zD), !0
        }
      }
      runRecovery(DD, zD, wD) {
        let pD = null,
          sD = !1;
        for (let KD = 0; KD < DD.length; KD++) {
          let rD = DD[KD],
            LD = zD[KD << 1],
            cD = zD[1 + (KD << 1)],
            gD = nD ? this.stackID(rD) + " -> " : "";
          if (rD.deadEnd) {
            if (sD) continue;
            if (sD = !0, rD.restart(), nD && console.log(gD + this.stackID(rD) + " (restarted)"), this.advanceFully(rD, wD)) continue
          }
          let RD = rD.split(),
            AD = gD;
          for (let DD = 0; DD < 10 && RD.forceReduce(); DD++) {
            if (nD && console.log(AD + this.stackID(RD) + " (via force-reduce)"), this.advanceFully(RD, wD)) break;
            nD && (AD = this.stackID(RD) + " -> ")
          }
          for (let DD of rD.recoverByInsert(LD)) nD && console.log(gD + this.stackID(DD) + " (via recover-insert)"), this.advanceFully(DD, wD);
          this.stream.end > rD.pos ? (cD == rD.pos && (cD++, LD = 0), rD.recoverByDelete(LD, cD), nD && console.log(gD + this.stackID(rD) + ` (via recover-delete ${this.parser.getName(LD)})`), XD(rD, wD)) : (!pD || pD.score < RD.score) && (pD = RD)
        }
        return pD
      }
      stackToTree(DD) {
        return DD.close(), pD.s.build({
          buffer: LD.create(DD),
          nodeSet: this.parser.nodeSet,
          topID: this.topTerm,
          maxBufferLength: this.parser.bufferLength,
          reused: this.reused,
          start: this.rG[0].from,
          length: DD.pos - this.rG[0].from,
          minRepeatType: this.parser.minRepeatTerm
        })
      }
      stackID(DD) {
        let zD = (MD || (MD = new WeakMap)).get(DD);
        return zD || MD.set(DD, zD = String.fromCodePoint(this.nextStackID++)), zD + DD
      }
    }

    function XD(DD, zD) {
      for (let wD = 0; wD < zD.length; wD++) {
        let pD = zD[wD];
        if (pD.pos == DD.pos && pD.sameState(DD)) return void(zD[wD].score < DD.score && (zD[wD] = DD))
      }
      zD.push(DD)
    }
    class VD {
      constructor(DD, zD, wD) {
        this.source = DD, this.flags = zD, this.disabled = wD
      }
      allows(DD) {
        return !this.disabled || 0 == this.disabled[DD]
      }
    }
    const PD = DD => DD;
    class CD extends pD.n {
      constructor(DD) {
        if (super(), this.wrappers = [], 14 != DD.version) throw new RangeError(`Parser version (${DD.version}) doesn't match runtime version (14)`);
        let zD = DD.nodeNames.split(" ");
        this.minRepeatTerm = zD.length;
        for (let pD = 0; pD < DD.repeatNodeCount; pD++) zD.push("");
        let wD = Object.keys(DD.topRules).map((zD => DD.topRules[zD][1])),
          sD = [];
        for (let pD = 0; pD < zD.length; pD++) sD.push([]);

        function KD(DD, zD, wD) {
          sD[DD].push([zD, zD.deserialize(String(wD))])
        }
        if (DD.nodeProps)
          for (let LD of DD.nodeProps) {
            let DD = LD[0];
            "string" == typeof DD && (DD = pD.g[DD]);
            for (let zD = 1; zD < LD.length;) {
              let wD = LD[zD++];
              if (wD >= 0) KD(wD, DD, LD[zD++]);
              else {
                let pD = LD[zD + -wD];
                for (let sD = -wD; sD > 0; sD--) KD(LD[zD++], DD, pD);
                zD++
              }
            }
          }
        this.nodeSet = new pD.h(zD.map(((zD, KD) => pD.i.define({
          name: KD >= this.minRepeatTerm ? void 0 : zD,
          id: KD,
          props: sD[KD],
          top: wD.indexOf(KD) > -1,
          error: 0 == KD,
          skipped: DD.skippedNodes && DD.skippedNodes.indexOf(KD) > -1
        })))), DD.propSources && (this.nodeSet = this.nodeSet.extend(...DD.propSources)), this.strict = !1, this.bufferLength = pD.e;
        let rD = cD(DD.tokenData);
        this.context = DD.context, this.specializerSpecs = DD.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
        for (let pD = 0; pD < this.specializerSpecs.length; pD++) this.specialized[pD] = this.specializerSpecs[pD].term;
        this.specializers = this.specializerSpecs.map(TD), this.states = cD(DD.states, Uint32Array), this.data = cD(DD.stateData), this.goto = cD(DD.goto), this.maxTerm = DD.maxTerm, this.tokenizers = DD.tokenizers.map((DD => "number" == typeof DD ? new UD(rD, DD) : DD)), this.topRules = DD.topRules, this.dialects = DD.dialects || {}, this.dynamicPrecedences = DD.dynamicPrecedences || null, this.tokenPrecTable = DD.tokenPrec, this.termNames = DD.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]]
      }
      createParse(DD, zD, wD) {
        let pD = new QD(this, DD, zD, wD);
        for (let sD of this.wrappers) pD = sD(pD, DD, zD, wD);
        return pD
      }
      getGoto(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          pD = this.goto;
        if (zD >= pD[0]) return -1;
        for (let sD = pD[zD + 1];;) {
          let zD = pD[sD++],
            KD = 1 & zD,
            rD = pD[sD++];
          if (KD && wD) return rD;
          for (let wD = sD + (zD >> 1); sD < wD; sD++)
            if (pD[sD] == DD) return rD;
          if (KD) return -1
        }
      }
      hasAction(DD, zD) {
        let wD = this.data;
        for (let pD = 0; pD < 2; pD++)
          for (let sD, KD = this.stateSlot(DD, pD ? 2 : 1);; KD += 3) {
            if (65535 == (sD = wD[KD])) {
              if (1 != wD[KD + 1]) {
                if (2 == wD[KD + 1]) return xD(wD, KD + 2);
                break
              }
              sD = wD[KD = xD(wD, KD + 2)]
            }
            if (sD == zD || 0 == sD) return xD(wD, KD + 1)
          }
        return 0
      }
      stateSlot(DD, zD) {
        return this.states[6 * DD + zD]
      }
      stateFlag(DD, zD) {
        return (this.stateSlot(DD, 0) & zD) > 0
      }
      validAction(DD, zD) {
        return !!this.allActions(DD, (DD => DD == zD || null))
      }
      allActions(DD, zD) {
        let wD = this.stateSlot(DD, 4),
          pD = wD ? zD(wD) : void 0;
        for (let sD = this.stateSlot(DD, 1); null == pD; sD += 3) {
          if (65535 == this.data[sD]) {
            if (1 != this.data[sD + 1]) break;
            sD = xD(this.data, sD + 2)
          }
          pD = zD(xD(this.data, sD + 1))
        }
        return pD
      }
      nextStates(DD) {
        let zD = [];
        for (let wD = this.stateSlot(DD, 1);; wD += 3) {
          if (65535 == this.data[wD]) {
            if (1 != this.data[wD + 1]) break;
            wD = xD(this.data, wD + 2)
          }
          if (0 == (1 & this.data[wD + 2])) {
            let DD = this.data[wD + 1];
            zD.some(((zD, wD) => 1 & wD && zD == DD)) || zD.push(this.data[wD], DD)
          }
        }
        return zD
      }
      configure(DD) {
        let zD = Object.assign(Object.create(CD.prototype), this);
        if (DD.props && (zD.nodeSet = this.nodeSet.extend(...DD.props)), DD.top) {
          let wD = this.topRules[DD.top];
          if (!wD) throw new RangeError(`Invalid top rule name ${DD.top}`);
          zD.top = wD
        }
        return DD.tokenizers && (zD.tokenizers = this.tokenizers.map((zD => {
          let wD = DD.tokenizers.find((DD => DD.from == zD));
          return wD ? wD.to : zD
        }))), DD.specializers && (zD.specializers = this.specializers.slice(), zD.specializerSpecs = this.specializerSpecs.map(((wD, pD) => {
          let sD = DD.specializers.find((DD => DD.from == wD.external));
          if (!sD) return wD;
          let KD = Object.assign(Object.assign({}, wD), {
            external: sD.to
          });
          return zD.specializers[pD] = TD(KD), KD
        }))), DD.contextTracker && (zD.context = DD.contextTracker), DD.dialect && (zD.dialect = this.parseDialect(DD.dialect)), null != DD.strict && (zD.strict = DD.strict), DD.wrap && (zD.wrappers = zD.wrappers.concat(DD.wrap)), null != DD.bufferLength && (zD.bufferLength = DD.bufferLength), zD
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
        let zD = this.dynamicPrecedences;
        return null == zD ? 0 : zD[DD] || 0
      }
      parseDialect(DD) {
        let zD = Object.keys(this.dialects),
          wD = zD.map((() => !1));
        if (DD)
          for (let sD of DD.split(" ")) {
            let DD = zD.indexOf(sD);
            DD >= 0 && (wD[DD] = !0)
          }
        let pD = null;
        for (let sD = 0; sD < zD.length; sD++)
          if (!wD[sD])
            for (let DD, wD = this.dialects[zD[sD]]; 65535 != (DD = this.data[wD++]);)(pD || (pD = new Uint8Array(this.maxTerm + 1)))[DD] = 1;
        return new VD(DD, wD, pD)
      }
      static deserialize(DD) {
        return new CD(DD)
      }
    }

    function xD(DD, zD) {
      return DD[zD] | DD[zD + 1] << 16
    }

    function TD(DD) {
      if (DD.external) {
        let zD = DD.extend ? 1 : 0;
        return (wD, pD) => DD.external(wD, pD) << 1 | zD
      }
      return DD.get
    }
    var bD = wD(41239);
    const jD = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288],
      dD = new class {
        constructor(DD) {
          this.start = DD.start, this.shift = DD.shift || PD, this.reduce = DD.reduce || PD, this.reuse = DD.reuse || PD, this.hash = DD.hash || (() => 0), this.strict = !1 !== DD.strict
        }
      }({
        start: !1,
        shift: (DD, zD) => 5 == zD || 6 == zD || 320 == zD ? DD : 321 == zD,
        strict: !1
      }),
      SD = new ID(((DD, zD) => {
        let {
          next: wD
        } = DD;
        (125 == wD || -1 == wD || zD.context) && DD.acceptToken(318)
      }), {
        contextual: !0,
        fallback: !0
      }),
      iD = new ID(((DD, zD) => {
        let wD, {
          next: pD
        } = DD;
        jD.indexOf(pD) > -1 || (47 != pD || 47 != (wD = DD.peek(1)) && 42 != wD) && (125 == pD || 59 == pD || -1 == pD || zD.context || DD.acceptToken(316))
      }), {
        contextual: !0
      }),
      lD = new ID(((DD, zD) => {
        91 != DD.next || zD.context || DD.acceptToken(317)
      }), {
        contextual: !0
      }),
      WD = new ID(((DD, zD) => {
        let {
          next: wD
        } = DD;
        if (43 == wD || 45 == wD) {
          if (DD.advance(), wD == DD.next) {
            DD.advance();
            let wD = !zD.context && zD.canShift(1);
            DD.acceptToken(wD ? 1 : 2)
          }
        } else 63 == wD && 46 == DD.peek(1) && (DD.advance(), DD.advance(), (DD.next < 48 || DD.next > 57) && DD.acceptToken(3))
      }), {
        contextual: !0
      });

    function ND(DD, zD) {
      return DD >= 65 && DD <= 90 || DD >= 97 && DD <= 122 || 95 == DD || DD >= 192 || !zD && DD >= 48 && DD <= 57
    }
    const ZD = new ID(((DD, zD) => {
        if (60 != DD.next || !zD.dialectEnabled(0)) return;
        if (DD.advance(), 47 == DD.next) return;
        let wD = 0;
        for (; jD.indexOf(DD.next) > -1;) DD.advance(), wD++;
        if (ND(DD.next, !0)) {
          for (DD.advance(), wD++; ND(DD.next, !1);) DD.advance(), wD++;
          for (; jD.indexOf(DD.next) > -1;) DD.advance(), wD++;
          if (44 == DD.next) return;
          for (let zD = 0;; zD++) {
            if (7 == zD) {
              if (!ND(DD.next, !0)) return;
              break
            }
            if (DD.next != "extends".charCodeAt(zD)) break;
            DD.advance(), wD++
          }
        }
        DD.acceptToken(4, -wD)
      })),
      yD = (0, bD.g)({
        "get set async static": bD.n.modifier,
        "for while do if else switch try catch finally return throw break continue default case defer": bD.n.controlKeyword,
        "in of await yield void typeof delete instanceof as satisfies": bD.n.operatorKeyword,
        "let var const using function class extends": bD.n.definitionKeyword,
        "import export from": bD.n.moduleKeyword,
        "with debugger new": bD.n.keyword,
        TemplateString: bD.n.special(bD.n.string),
        super: bD.n.atom,
        BooleanLiteral: bD.n.bool,
        this: bD.n.self,
        null: bD.n.null,
        Star: bD.n.modifier,
        VariableName: bD.n.variableName,
        "CallExpression/VariableName TaggedTemplateExpression/VariableName": bD.n.function(bD.n.variableName),
        VariableDefinition: bD.n.definition(bD.n.variableName),
        Label: bD.n.labelName,
        PropertyName: bD.n.propertyName,
        PrivatePropertyName: bD.n.special(bD.n.propertyName),
        "CallExpression/MemberExpression/PropertyName": bD.n.function(bD.n.propertyName),
        "FunctionDeclaration/VariableDefinition": bD.n.function(bD.n.definition(bD.n.variableName)),
        "ClassDeclaration/VariableDefinition": bD.n.definition(bD.n.className),
        "NewExpression/VariableName": bD.n.className,
        PropertyDefinition: bD.n.definition(bD.n.propertyName),
        PrivatePropertyDefinition: bD.n.definition(bD.n.special(bD.n.propertyName)),
        UpdateOp: bD.n.updateOperator,
        "LineComment Hashbang": bD.n.lineComment,
        BlockComment: bD.n.blockComment,
        Number: bD.n.number,
        String: bD.n.string,
        Escape: bD.n.escape,
        ArithOp: bD.n.arithmeticOperator,
        LogicOp: bD.n.logicOperator,
        BitOp: bD.n.bitwiseOperator,
        CompareOp: bD.n.compareOperator,
        RegExp: bD.n.regexp,
        Equals: bD.n.definitionOperator,
        Arrow: bD.n.function(bD.n.punctuation),
        ": Spread": bD.n.punctuation,
        "( )": bD.n.paren,
        "[ ]": bD.n.squareBracket,
        "{ }": bD.n.brace,
        "InterpolationStart InterpolationEnd": bD.n.special(bD.n.brace),
        ".": bD.n.derefOperator,
        ", ;": bD.n.separator,
        "@": bD.n.meta,
        TypeName: bD.n.typeName,
        TypeDefinition: bD.n.definition(bD.n.typeName),
        "type enum interface implements namespace module declare": bD.n.definitionKeyword,
        "abstract global Privacy readonly override": bD.n.modifier,
        "is keyof unique infer asserts": bD.n.operatorKeyword,
        JSXAttributeValue: bD.n.attributeValue,
        JSXText: bD.n.content,
        "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": bD.n.angleBracket,
        "JSXIdentifier JSXNameSpacedName": bD.n.tagName,
        "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": bD.n.attributeName,
        "JSXBuiltin/JSXIdentifier": bD.n.standard(bD.n.tagName)
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
      mD = {
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
      eD = {
        __proto__: null,
        "<": 193
      },
      oD = CD.deserialize({
        version: 14,
        states: "$F|Q%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Il'#IlO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JrO6[Q!0MxO'#JsO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO9XQMhO'#F|O9`Q`O'#F{OOQ!0Lf'#Js'#JsOOQ!0Lb'#Jr'#JrO9eQ`O'#GwOOQ['#K_'#K_O9pQ`O'#IYO9uQ!0LrO'#IZOOQ['#J`'#J`OOQ['#I_'#I_Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GsO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EyO;hQMhO'#FeO;xQ`O'#GsOOQO'#K`'#K`O;}Q`O'#K`O<]Q`O'#G{O<]Q`O'#G|O<]Q`O'#HOO9kQ`O'#HRO=SQ`O'#HUO>kQ`O'#CeO>{Q`O'#HcO?TQ`O'#HiO?TQ`O'#HkO`QlO'#HmO?TQ`O'#HoO?TQ`O'#HrO?YQ`O'#HxO?_Q!0LsO'#IOO%[QlO'#IQO?jQ!0LsO'#ISO?uQ!0LsO'#IUO9uQ!0LrO'#IWO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jv'#JvO%[QlO'#JvOOQO'#Jy'#JyOOQO'#Ih'#IhOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J}'#J}OC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jx'#JxODlQpO'#JyOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CD})CD}OOOO'#I`'#I`OFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ia'#IaOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Ic'#IcOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IdOGyQ`O'#JtOIxQ!fO'#JtO+}QlO'#JtOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KTOKPQ`O'#KSOKPQ`O'#KSOKXQ`O,5;^OK^Q`O'#KROOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KQONtQ`O'#KPO9eQ`O'#KPO! YQ`O'#KPO! bQ`O,5;]O! gQ`O'#KPO!#lQ!fO'#JsOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#Jz'#JzOOQO-E<j-E<jO9kQ`O,5=_O!$rQ`O,5=_O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;dO!(|QpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)[QlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IpO!+_Q!0LrO,5<iO%[QlO,5;eO!&zQMhO,5;eO!+|QMhO,5;eO!-nQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-uQ,UO'#FjO!.rQ,UO'#KXO!.^Q,UO'#KXO!.yQ,UO'#KXOOQO'#KX'#KXO!/_Q,UO,5<SOOOW,5<`,5<`O!/pQlO'#FvOOOW'#Io'#IoO7VO7dO,5<QO!/wQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<eO!1pQ`O,5<hO!3YQ(CWO'#GXO!3jQ`O'#GYO!3oQ`O'#GYO!5_Q(CWO'#G^O!6dQpO'#GbOOQO'#Gn'#GnO!,TQMhO'#GmOOQO'#Gp'#GpO!,TQMhO'#GoO!7VQ$IUO'#JlOOQ!0Lh'#Jl'#JlO!7aQ`O'#JkO!7oQ`O'#JjO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<eO1SQ`O'#DZO!,TQMhO'#GPO!,TQMhO'#GRO!8gQ`O'#GTO!8lQ`O'#GUO!3oQ`O'#G[O!,TQMhO'#GaO<]Q`O'#JkO!8qQ`O'#EqO!9`Q`O,5<gOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KR'#KRO!:iQ!0LrO'#KaO9uQ!0LrO,5=cO`QlO,5>tOOQ['#Jh'#JhOOQ[,5>u,5>uOOQ[-E<]-E<]O!<hQ!0MxO,5:bO!:]QpO,5:`O!?RQ!0MxO,5:jO%[QlO,5:jO!AiQ!0MxO,5:lOOQO,5@z,5@zO!BYQMhO,5=_O!BhQ!0LrO'#JiO9`Q`O'#JiO!ByQ!0LrO,59ZO!CUQpO,59ZO!C^QMhO,59ZO:dQMhO,59ZO!CiQ`O,5;ZO!CqQ`O'#HbO!DVQ`O'#KdO%[QlO,5;}O!:]QpO,5<PO!D_Q`O,5=zO!DdQ`O,5=zO!DiQ`O,5=zO!DwQ`O,5=zO9uQ!0LrO,5=zO<]Q`O,5=jOOQO'#Cy'#CyO!EOQpO,5=gO!EWQMhO,5=hO!EcQ`O,5=jO!EhQ!bO,5=mO!EpQ`O'#K`O?YQ`O'#HWO9kQ`O'#HYO!EuQ`O'#HYO:dQMhO'#H[O!EzQ`O'#H[OOQ[,5=p,5=pO!FPQ`O'#H]O!FbQ`O'#CoO!FgQ`O,59PO!FqQ`O,59PO!HvQlO,59POOQ[,59P,59PO!IWQ!0LrO,59PO%[QlO,59PO!KcQlO'#HeOOQ['#Hf'#HfOOQ['#Hg'#HgO`QlO,5=}O!KyQ`O,5=}O`QlO,5>TO`QlO,5>VO!LOQ`O,5>XO`QlO,5>ZO!LTQ`O,5>^O!LYQlO,5>dOOQ[,5>j,5>jO%[QlO,5>jO9uQ!0LrO,5>lOOQ[,5>n,5>nO#!dQ`O,5>nOOQ[,5>p,5>pO#!dQ`O,5>pOOQ[,5>r,5>rO##QQpO'#D_O%[QlO'#JvO##sQpO'#JvO##}QpO'#DmO#$`QpO'#DmO#&qQlO'#DmO#&xQ`O'#JuO#'QQ`O,5:WO#'VQ`O'#EtO#'eQ`O'#KUO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CUQpO,5;YO!C^QMhO,5;YO:dQMhO,5;YO#(`Q`O,5@bO#(eQ07dO,5:sOOQO-E<f-E<fO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!ByQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CUQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I^'#I^P#+RO&2DjO,58|POOO,58|,58|OOOO-E<^-E<^OOQ!0Lh1G.p1G.pOOOO-E<_-E<_OOOO,59},59}O#+^Q!bO,59}OOOO-E<a-E<aOOQ!0Lf1G/g1G/gO#+cQ!fO,5?OO+}QlO,5?OOOQO,5?U,5?UO#+mQlO'#IdOOQO-E<b-E<bO#+zQ`O,5@`O#,SQ!fO,5@`O#,ZQ`O,5@nOOQ!0Lf1G/m1G/mO%[QlO,5@oO#,cQ`O'#IjOOQO-E<h-E<hO#,ZQ`O,5@nOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@lO#,wQ!0LrO,5@lO#-YQ!0LrO,5@lO#-aQ`O,5@kO9eQ`O,5@kO#-iQ`O,5@kO#-wQ`O'#ImO#-aQ`O,5@kOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2yO9kQ`O1G2yOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0rQ!0MzO'#JlO!$wQlO1G0uO#2}Q!fO'#JwO%[QlO'#JwO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#3^Q`O1G1OO#5rQ!0MxO1G1PO#5yQ!0MxO1G1PO#8aQ!0MxO1G1PO#8hQ!0MxO1G1PO#;OQ!0MxO1G1PO#=fQ!0MxO1G1PO#=mQ!0MxO1G1PO#=tQ!0MxO1G1PO#@[Q!0MxO1G1PO#@cQ!0MxO1G1PO#BpQ?MtO'#CiO#DkQ?MtO1G1`O#DrQ?MtO'#JsO#EVQ!0MxO,5?[OOQ!0Lb-E<n-E<nO#GdQ!0MxO1G1PO#HaQ!0MzO1G1POOQ!0Lf1G1P1G1PO#IdQMjO'#J|O#InQ`O,5:xO#IsQ!0MxO1G1cO#JgQ,UO,5<WO#JoQ,UO,5<XO#JwQ,UO'#FoO#K`Q`O'#FnOOQO'#KY'#KYOOQO'#In'#InO#KeQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#KvQ?MtO'#JrO#LQQ`O,5<bO!)[QlO,5<bOOOW-E<m-E<mOOQ!0Lf1G1l1G1lO#LVQpO'#KXOOQ!0Lf,5<d,5<dO#L_QpO,5<dO#LdQMhO'#DTOOOO'#Ib'#IbO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8lQ`O'#IrO#LvQ`O,5<zOOQ!0Lh,5<w,5<wO!,TQMhO'#IuO#MdQMjO,5=XO!,TQMhO'#IwO#NVQMjO,5=ZO!&zQMhO,5=]OOQO1G2S1G2SO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GbO$!dQ!dO,5<sO$!kQ`O'#K[O9eQ`O'#K[O$!yQ`O,5<uO$#aQ!dO'#C{O!,TQMhO,5<tO$#kQ`O'#GZO$$PQ`O,5<tO$$UQ!dO'#GWO$$cQ!dO'#K]O$$mQ`O'#K]O!&zQMhO'#K]O$$rQ`O,5<xO$$wQlO'#JvO$%RQpO'#GcO#$`QpO'#GcO$%dQ`O'#GgO!3oQ`O'#GkO$%iQ!0LrO'#ItO$%tQpO,5<|OOQ!0Lp,5<|,5<|O$%{QpO'#GcO$&YQpO'#GdO$&kQpO'#GdO$&pQMjO,5=XO$'QQMjO,5=ZOOQ!0Lh,5=^,5=^O!,TQMhO,5@VO!,TQMhO,5@VO$'bQ`O'#IyO$'vQ`O,5@UO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@VO$)TQ$IYO,59uOOQ!0Lh'#Jp'#JpO$)vQMjO,5<kO$*iQMjO,5<mO@zQ`O,5<oOOQ!0Lh,5<p,5<pO$*sQ`O,5<vO$*xQMjO,5<{O$+YQ`O'#KPO!$wQlO1G2RO$+_Q`O1G2RO9eQ`O'#KSO9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I{O$+dQ!0LrO,5@{OOQ[1G2}1G2}OOQ[1G4`1G4`OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-fQ!0MxO1G0UOOQ[1G2y1G2yO!&zQMhO1G2yO%[QlO1G2yO#.tQ`O1G2yO$/jQMhO'#EkOOQ!0Lb,5@T,5@TO$/wQ!0LrO,5@TOOQ[1G.u1G.uO!ByQ!0LrO1G.uO!CUQpO1G.uO!C^QMhO1G.uO$0YQ`O1G0uO$0_Q`O'#CiO$0jQ`O'#KeO$0rQ`O,5=|O$0wQ`O'#KeO$0|Q`O'#KeO$1[Q`O'#JRO$1jQ`O,5AOO$1rQ!fO1G1iOOQ!0Lf1G1k1G1kO9kQ`O1G3fO@zQ`O1G3fO$1yQ`O1G3fO$2OQ`O1G3fO!DiQ`O1G3fO9uQ!0LrO1G3fOOQ[1G3f1G3fO!EcQ`O1G3UO!&zQMhO1G3RO$2TQ`O1G3ROOQ[1G3S1G3SO!&zQMhO1G3SO$2YQ`O1G3SO$2bQpO'#HQOOQ[1G3U1G3UO!6_QpO'#I}O!EhQ!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$2jQMhO,5=tO9kQ`O,5=tO$%dQ`O,5=vO9`Q`O,5=vO!CUQpO,5=vO!C^QMhO,5=vO:dQMhO,5=vO$2xQ`O'#KcO$3TQ`O,5=wOOQ[1G.k1G.kO$3YQ!0LrO1G.kO@zQ`O1G.kO$3eQ`O1G.kO9uQ!0LrO1G.kO$5mQ!fO,5AQO$5zQ`O,5AQO9eQ`O,5AQO$6VQlO,5>PO$6^Q`O,5>POOQ[1G3i1G3iO`QlO1G3iOOQ[1G3o1G3oOOQ[1G3q1G3qO?TQ`O1G3sO$6cQlO1G3uO$:gQlO'#HtOOQ[1G3x1G3xO$:tQ`O'#HzO?YQ`O'#H|OOQ[1G4O1G4OO$:|QlO1G4OO9uQ!0LrO1G4UOOQ[1G4W1G4WOOQ!0Lb'#G_'#G_O9uQ!0LrO1G4YO9uQ!0LrO1G4[O$?TQ`O,5@bO!)[QlO,5;`O9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CUQpO,5:XO$?YQ?MtO,5:XOOQO,5;`,5;`O$?dQpO'#IeO$?zQ`O,5@aOOQ!0Lf1G/r1G/rO$@SQpO'#IkO$@^Q`O,5@pOOQ!0Lb1G0y1G0yO#$`QpO,5:XOOQO'#Ig'#IgO$@fQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CUQpO1G0tO!C^QMhO1G0tOOQ!0Lb1G5|1G5|O!ByQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@mQ!0LrO1G0mO$@xQ!0LrO1G0mO!CUQpO1G0^ODWQpO1G0^O$AWQ!0LrO1G0mOOQO1G0^1G0^O$AlQ!0MxO1G0mPOOO-E<[-E<[POOO1G.h1G.hOOOO1G/i1G/iO$AvQ!bO,5<iO$BOQ!fO1G4jOOQO1G4p1G4pO%[QlO,5?OO$BYQ`O1G5zO$BbQ`O1G6YO$BjQ!fO1G6ZO9eQ`O,5?UO$BtQ!0MxO1G6WO%[QlO1G6WO$CUQ!0LrO1G6WO$CgQ`O1G6VO$CgQ`O1G6VO9eQ`O1G6VO$CoQ`O,5?XO9eQ`O,5?XOOQO,5?X,5?XO$DTQ`O,5?XO$+YQ`O,5?XOOQO-E<k-E<kOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(e7+(eO!&zQMhO7+(eO%[QlO7+(eO$DcQ`O7+(eO$DnQMhO7+(eO$D|Q!0MzO,5=XO$GXQ!0MzO,5=ZO$IdQ!0MzO,5=XO$KuQ!0MzO,5=ZO$NWQ!0MzO,59uO%!]Q!0MzO,5<kO%$hQ!0MzO,5<mO%&sQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%)UQ!0MxO7+&aO%)xQlO'#IfO%*VQ`O,5@cO%*_Q!fO,5@cOOQ!0Lf1G0P1G0PO%*iQ`O7+&jOOQ!0Lf7+&j7+&jO%*nQ?MtO,5:fO%[QlO7+&zO%*xQ?MtO,5:bO%+VQ?MtO,5:jO%+aQ?MtO,5:lO%+kQMhO'#IiO%+uQ`O,5@hOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%+}Q!jO,5<ZO!)[QlO,5<YOOQO-E<l-E<lOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%,YQ`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%,_Q!dO,59oOOOO-E<`-E<`OOQ!0Lh1G/X1G/XO%,fQ!0MxO7+'kOOQ!0Lh,5?^,5?^O%-YQMhO1G2fP%-aQ`O'#IrPOQ!0Lh-E<p-E<pO%-}QMjO,5?aOOQ!0Lh-E<s-E<sO%.pQMjO,5?cOOQ!0Lh-E<u-E<uO%.zQ!dO1G2wO%/RQ!dO'#CrO%/iQMhO'#KSO$$wQlO'#JvOOQ!0Lh1G2_1G2_O%/sQ`O'#IqO%0[Q`O,5@vO%0[Q`O,5@vO%0dQ`O,5@vO%0oQ`O,5@vOOQO1G2a1G2aO%0}QMjO1G2`O$+YQ`O'#K[O!,TQMhO1G2`O%1_Q(CWO'#IsO%1lQ`O,5@wO!&zQMhO,5@wO%1tQ!dO,5@wOOQ!0Lh1G2d1G2dO%4UQ!fO'#CiO%4`Q`O,5=POOQ!0Lb,5<},5<}O%4hQpO,5<}OOQ!0Lb,5=O,5=OOCwQ`O,5<}O%4sQpO,5<}OOQ!0Lb,5=R,5=RO$+YQ`O,5=VOOQO,5?`,5?`OOQO-E<r-E<rOOQ!0Lp1G2h1G2hO#$`QpO,5<}O$$wQlO,5=PO%5RQ`O,5=OO%5^QpO,5=OO!,TQMhO'#IuO%6WQMjO1G2sO!,TQMhO'#IwO%6yQMjO1G2uO%7TQMjO1G5qO%7_QMjO1G5qOOQO,5?e,5?eOOQO-E<w-E<wOOQO1G.{1G.{O!,TQMhO1G5qO!,TQMhO1G5qO!:]QpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%7lQ`O1G2ZO!,TQMhO1G2bO%7qQ!0MxO7+'mOOQ!0Lf7+'m7+'mO!$wQlO7+'mO%8eQ`O,5;`OOQ!0Lb,5?g,5?gOOQ!0Lb-E<y-E<yO%8jQ!dO'#K^O#(ZQ`O7+(eO4UQ!fO7+(eO$DfQ`O7+(eO%8tQ!0MvO'#CiO%9XQ!0MvO,5=SO%9lQ`O,5=SO%9tQ`O,5=SOOQ!0Lb1G5o1G5oOOQ[7+$a7+$aO!ByQ!0LrO7+$aO!CUQpO7+$aO!$wQlO7+&aO%9yQ`O'#JQO%:bQ`O,5APOOQO1G3h1G3hO9kQ`O,5APO%:bQ`O,5APO%:jQ`O,5APOOQO,5?m,5?mOOQO-E=P-E=POOQ!0Lf7+'T7+'TO%:oQ`O7+)QO9uQ!0LrO7+)QO9kQ`O7+)QO@zQ`O7+)QO%:tQ`O7+)QOOQ[7+)Q7+)QOOQ[7+(p7+(pO%:yQ!0MvO7+(mO!&zQMhO7+(mO!E^Q`O7+(nOOQ[7+(n7+(nO!&zQMhO7+(nO%;TQ`O'#KbO%;`Q`O,5=lOOQO,5?i,5?iOOQO-E<{-E<{OOQ[7+(s7+(sO%<rQpO'#HZOOQ[1G3`1G3`O!&zQMhO1G3`O%[QlO1G3`O%<yQ`O1G3`O%=UQMhO1G3`O9uQ!0LrO1G3bO$%dQ`O1G3bO9`Q`O1G3bO!CUQpO1G3bO!C^QMhO1G3bO%=dQ`O'#JPO%=xQ`O,5@}O%>QQpO,5@}OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>]Q`O7+$VO%[QlO1G6lO%[QlO1G6mO%>bQ!0LrO1G6lO%>lQlO1G3kO%>sQ`O1G3kO%>xQlO1G3kOOQ[7+)T7+)TO9uQ!0LrO7+)_O`QlO7+)aOOQ['#Kh'#KhOOQ['#JS'#JSO%?PQlO,5>`OOQ[,5>`,5>`O%[QlO'#HuO%?^Q`O'#HwOOQ[,5>f,5>fO9eQ`O,5>fOOQ[,5>h,5>hOOQ[7+)j7+)jOOQ[7+)p7+)pOOQ[7+)t7+)tOOQ[7+)v7+)vO%?cQpO1G5|O%?}Q?MtO1G0zO%@XQ`O1G0zOOQO1G/s1G/sO%@dQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?V,5?VOOQO-E<i-E<iO!CUQpO1G/sOOQO-E<e-E<eOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CUQpO7+&`OOQO7+%x7+%xO$AlQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@nQ!0LrO7+&XO!ByQ!0LrO7+%xO!CUQpO7+%xO%@yQ!0LrO7+&XO%AXQ!0MxO7++rO%[QlO7++rO%AiQ`O7++qO%AiQ`O7++qOOQO1G4s1G4sO9eQ`O1G4sO%AqQ`O1G4sOOQS7+%}7+%}O#(ZQ`O<<LPO4UQ!fO<<LPO%BPQ`O<<LPOOQ[<<LP<<LPO!&zQMhO<<LPO%[QlO<<LPO%BXQ`O<<LPO%BdQ!0MzO,5?aO%DoQ!0MzO,5?cO%FzQ!0MzO1G2`O%I]Q!0MzO1G2sO%KhQ!0MzO1G2uO%MsQ!fO,5?QO%[QlO,5?QOOQO-E<d-E<dO%M}Q`O1G5}OOQ!0Lf<<JU<<JUO%NVQ?MtO1G0uO&!^Q?MtO1G1PO&!eQ?MtO1G1PO&$fQ?MtO1G1PO&$mQ?MtO1G1PO&&nQ?MtO1G1PO&(oQ?MtO1G1PO&(vQ?MtO1G1PO&(}Q?MtO1G1PO&+OQ?MtO1G1PO&+VQ?MtO1G1PO&+^Q!0MxO<<JfO&-UQ?MtO1G1PO&.RQ?MvO1G1PO&/UQ?MvO'#JlO&1[Q?MtO1G1cO&1iQ?MtO1G0UO&1sQMjO,5?TOOQO-E<g-E<gO!)[QlO'#FqOOQO'#KZ'#KZOOQO1G1u1G1uO&1}Q`O1G1tO&2SQ?MtO,5?[OOOW7+'h7+'hOOOO1G/Z1G/ZO&2^Q!dO1G4xOOQ!0Lh7+(Q7+(QP!&zQMhO,5?^O!,TQMhO7+(cO&2eQ`O,5?]O9eQ`O,5?]O$+YQ`O,5?]OOQO-E<o-E<oO&2sQ`O1G6bO&2sQ`O1G6bO&2{Q`O1G6bO&3WQMjO7+'zO&3hQ!dO,5?_O&3rQ`O,5?_O!&zQMhO,5?_OOQO-E<q-E<qO&3wQ!dO1G6cO&4RQ`O1G6cO&4ZQ`O1G2kO!&zQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%4hQpO1G2iO!CUQpO1G2iOCwQ`O1G2iOOQ!0Lb1G2q1G2qO&4`QpO1G2iO&4nQ`O1G2kO$+YQ`O1G2jOCwQ`O1G2jO$$wQlO1G2kO&4vQ`O1G2jO&5jQMjO,5?aOOQ!0Lh-E<t-E<tO&6]QMjO,5?cOOQ!0Lh-E<v-E<vO!,TQMhO7++]O&6gQMjO7++]O&6qQMjO7++]OOQ!0Lh1G/c1G/cO&7OQ`O1G/cOOQ!0Lh7+'u7+'uO&7TQMjO7+'|O&7eQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&8XQ`O1G0zO!&zQMhO'#IzO&8^Q`O,5@xO&:`Q!fO<<LPO!&zQMhO1G2nO&:gQ!0LrO1G2nOOQ[<<G{<<G{O!ByQ!0LrO<<G{O&:xQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?l,5?lO&;lQ`O,5?lO&;qQ`O,5?lOOQO-E=O-E=OO&<PQ`O1G6kO&<PQ`O1G6kO9kQ`O1G6kO@zQ`O<<LlOOQ[<<Ll<<LlO&<XQ`O<<LlO9uQ!0LrO<<LlO9kQ`O<<LlOOQ[<<LX<<LXO%:yQ!0MvO<<LXOOQ[<<LY<<LYO!E^Q`O<<LYO&<^QpO'#I|O&<iQ`O,5@|O!)[QlO,5@|OOQ[1G3W1G3WOOQO'#JO'#JOO9uQ!0LrO'#JOO&<qQpO,5=uOOQ[,5=u,5=uO&<xQpO'#EgO&=PQpO'#GeO&=UQ`O7+(zO&=ZQ`O7+(zOOQ[7+(z7+(zO!&zQMhO7+(zO%[QlO7+(zO&=cQ`O7+(zOOQ[7+(|7+(|O9uQ!0LrO7+(|O$%dQ`O7+(|O9`Q`O7+(|O!CUQpO7+(|O&=nQ`O,5?kOOQO-E<}-E<}OOQO'#H^'#H^O&=yQ`O1G6iO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>RQ`O7+,WO&>WQ`O7+,XO%[QlO7+,WO%[QlO7+,XOOQ[7+)V7+)VO&>]Q`O7+)VO&>bQlO7+)VO&>iQ`O7+)VOOQ[<<Ly<<LyOOQ[<<L{<<L{OOQ[-E=Q-E=QOOQ[1G3z1G3zO&>nQ`O,5>aOOQ[,5>c,5>cO&>sQ`O1G4QO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&>xQ?MtO1G6ZO?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AlQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!ByQ!0LrO<<IdO&?SQ!0LrO<<IsO&?_Q!0MxO<= ^O&?oQ`O<= ]OOQO7+*_7+*_O9eQ`O7+*_OOQ[ANAkANAkO&?wQ!fOANAkO!&zQMhOANAkO#(ZQ`OANAkO4UQ!fOANAkO&@OQ`OANAkO%[QlOANAkO&@WQ!0MzO7+'zO&BiQ!0MzO,5?aO&DtQ!0MzO,5?cO&GPQ!0MzO7+'|O&IbQ!fO1G4lO&IlQ?MtO7+&aO&KpQ?MvO,5=XO&MwQ?MvO,5=ZO&NXQ?MvO,5=XO&NiQ?MvO,5=ZO&NyQ?MvO,59uO'#PQ?MvO,5<kO'%SQ?MvO,5<mO''hQ?MvO,5<{O')^Q?MtO7+'kO')kQ?MtO7+'mO')xQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*d7+*dO')}QMjO<<K}OOQO1G4w1G4wO'*UQ`O1G4wO'*aQ`O1G4wO'*oQ`O7++|O'*oQ`O7++|O!&zQMhO1G4yO'*wQ!dO1G4yO'+RQ`O7++}O'+ZQ`O7+(VO'+fQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!CUQpO7+(TOCwQ`O7+(TO'+pQ`O7+(VO!&zQMhO7+(VO$+YQ`O7+(UO'+uQ`O7+(VOCwQ`O7+(UO'+}QMjO<<NwO!,TQMhO<<NwOOQ!0Lh7+$}7+$}O',XQ!dO,5?fOOQO-E<x-E<xO',cQ!0MvO7+(YO!&zQMhO7+(YOOQ[AN=gAN=gO9kQ`O1G5WOOQO1G5W1G5WO',sQ`O1G5WO',xQ`O7+,VO',xQ`O7+,VO9uQ!0LrOANBWO@zQ`OANBWOOQ[ANBWANBWO'-QQ`OANBWOOQ[ANAsANAsOOQ[ANAtANAtO'-VQ`O,5?hOOQO-E<z-E<zO'-bQ?MtO1G6hOOQO,5?j,5?jOOQO-E<|-E<|OOQ[1G3a1G3aO'-lQ`O,5=POOQ[<<Lf<<LfO!&zQMhO<<LfO&=UQ`O<<LfO'-qQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9uQ!0LrO<<LhO$%dQ`O<<LhO9`Q`O<<LhO'-yQpO1G5VO'.UQ`O7+,TOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= r<= rOOQ[<= s<= sO'.^Q`O<= rO'.cQ`O<= sOOQ[<<Lq<<LqO'.hQ`O<<LqO'.mQlO<<LqOOQ[1G3{1G3{O?YQ`O7+)lO'.tQ`O<<JQO'/PQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AlQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<My<<MyOOQ[G27VG27VO!&zQMhOG27VO#(ZQ`OG27VO'/ZQ!fOG27VO4UQ!fOG27VO'/bQ`OG27VO'/jQ?MtO<<JfO'/wQ?MvO1G2`O'1mQ?MvO,5?aO'3pQ?MvO,5?cO'5sQ?MvO1G2sO'7vQ?MvO1G2uO'9yQ?MtO<<KXO':WQ?MtO<<I{OOQO1G1w1G1wO!,TQMhOANAiOOQO7+*c7+*cO':eQ`O7+*cO':pQ`O<= hO':xQ!dO7+*eOOQ!0Lb<<Kq<<KqO$+YQ`O<<KqOCwQ`O<<KqO';SQ`O<<KqO!&zQMhO<<KqOOQ!0Lb<<Ko<<KoO!CUQpO<<KoO';_Q!dO<<KqOOQ!0Lb<<Kp<<KpO';iQ`O<<KqO!&zQMhO<<KqO$+YQ`O<<KpO';nQMjOANDcO';xQ!0MvO<<KtOOQO7+*r7+*rO9kQ`O7+*rO'<YQ`O<= qOOQ[G27rG27rO9uQ!0LrOG27rO@zQ`OG27rO!)[QlO1G5SO'<bQ`O7+,SO'<jQ`O1G2kO&=UQ`OANBQOOQ[ANBQANBQO!&zQMhOANBQO'<oQ`OANBQOOQ[ANBSANBSO9uQ!0LrOANBSO$%dQ`OANBSOOQO'#H_'#H_OOQO7+*q7+*qOOQ[G22wG22wOOQ[ANE^ANE^OOQ[ANE_ANE_OOQ[ANB]ANB]O'<wQ`OANB]OOQ[<<MW<<MWO!)[QlOAN?lOOQOG24yG24yO$AlQ!0MxOG24yO#(ZQ`OLD,qOOQ[LD,qLD,qO!&zQMhOLD,qO'<|Q!fOLD,qO'=TQ?MvO7+'zO'>yQ?MvO,5?aO'@|Q?MvO,5?cO'CPQ?MvO7+'|O'DuQMjOG27TOOQO<<M}<<M}OOQ!0LbANA]ANA]O$+YQ`OANA]OCwQ`OANA]O'EVQ!dOANA]OOQ!0LbANAZANAZO'E^Q`OANA]O!&zQMhOANA]O'EiQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N^<<N^OOQ[LD-^LD-^O9uQ!0LrOLD-^O'EsQ?MtO7+*nOOQO'#Gf'#GfOOQ[G27lG27lO&=UQ`OG27lO!&zQMhOG27lOOQ[G27nG27nO9uQ!0LrOG27nOOQ[G27wG27wO'E}Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#(ZQ`O!$(!]O!&zQMhO!$(!]O'FXQ!0MzOG27TOOQ!0LbG26wG26wO$+YQ`OG26wO'HjQ`OG26wOCwQ`OG26wO'HuQ!dOG26wO!&zQMhOG26wOOQ[!$(!x!$(!xOOQ[LD-WLD-WO&=UQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#(ZQ`O!)9EwOOQ!0LbLD,cLD,cO$+YQ`OLD,cOCwQ`OLD,cO'H|Q`OLD,cO'IXQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'I`Q?MvOG27TOOQ!0Lb!$( }!$( }O$+YQ`O!$( }OCwQ`O!$( }O'KUQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$+YQ`O!)9EiOCwQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$+YQ`O!.K;TOOQ!0Lb!4/0o!4/0oO!)[QlO'#DzO1PQ`O'#EXO'KaQ!fO'#JrO'KhQ!L^O'#DvO'KoQlO'#EOO'KvQ!fO'#CiO'N^Q!fO'#CiO!)[QlO'#EQO'NnQlO,5;ZO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO'#IpO(!qQ`O,5<iO!)[QlO,5;eO(!yQMhO,5;eO($dQMhO,5;eO!)[QlO,5;wO!&zQMhO'#GmO(!yQMhO'#GmO!&zQMhO'#GoO(!yQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GPO(!yQMhO'#GPO!&zQMhO'#GRO(!yQMhO'#GRO!&zQMhO'#GaO(!yQMhO'#GaO!)[QlO,5:jO($kQpO'#D_O($uQpO'#JvO!)[QlO,5@oO'NnQlO1G0uO(%PQ?MtO'#CiO!)[QlO1G2PO!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO(%ZQ!dO'#CrO!&zQMhO,5<tO(!yQMhO,5<tO'NnQlO1G2RO!)[QlO7+&zO!&zQMhO1G2`O(!yQMhO1G2`O!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO!&zQMhO1G2bO(!yQMhO1G2bO'NnQlO7+'mO'NnQlO7+&aO!&zQMhOANAiO(!yQMhOANAiO(%nQ`O'#EoO(%sQ`O'#EoO(%{Q`O'#F]O(&QQ`O'#EyO(&VQ`O'#KTO(&bQ`O'#KRO(&mQ`O,5;ZO(&rQMjO,5<eO(&yQ`O'#GYO('OQ`O'#GYO('TQ`O,5<eO(']Q`O,5<gO('eQ`O,5;ZO('mQ?MtO1G1`O('tQ`O,5<tO('yQ`O,5<tO((OQ`O,5<vO((TQ`O,5<vO((YQ`O1G2RO((_Q`O1G0uO((dQMjO<<K}O((kQMjO<<K}O((rQMhO'#F|O9`Q`O'#F{OAuQ`O'#EnO!)[QlO,5;tO!3oQ`O'#GYO!3oQ`O'#GYO!3oQ`O'#G[O!3oQ`O'#G[O!,TQMhO7+(cO!,TQMhO7+(cO%.zQ!dO1G2wO%.zQ!dO1G2wO!&zQMhO,5=]O!&zQMhO,5=]",
        stateData: "()x~O'|OS'}OSTOS(ORQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&W!WO&^!XO&`!YO&b!ZO&d![O&g!]O&m!^O&s!_O&u!`O&w!aO&y!bO&{!cO(TSO(VTO(YUO(aVO(o[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O(O!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'z]X(a]X(r]X(y]X(z]X~O!g%RX~P(qO_!}O(V#PO(W!}O(X#PO~O_#QO(X#PO(Y#PO(Z#QO~Ox#SO!U#TO(b#TO(c#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T<ZO(VTO(YUO(aVO(o[O~O![#ZO!]#WO!Y(hP!Y(vP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(VTO(YUO(aVO(o[O~Op#mO![#iO!|]O#i#lO#j#iO(T<[O!k(sP~P.iO!l#oO(T#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa(fX'z(fX'w(fX!k(fX!Y(fX!_(fX%i(fX!g(fX~P1qO#S$dO#`$eO$Q$eOP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX!_(gX%i(gX~Oa(gX'z(gX'w(gX!Y(gX!k(gXv(gX!g(gX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T$sO(VTO(YUO(a$uO(y$}O(z%POg(^P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(T%gO~O!g%mO~Oa%nO'z%nO~O!Q%rO~P%[O(U!lO~P%[O%n%vO~P%[Oh%VO!l%eO(T%gO(U!lO~Oe%}O!l%eO(T%gO~Oj$RO~O!_&PO(T%gO(U!lO(VTO(YUO`)WP~O!Q&SO!l&RO%j&VO&T&WO~P;SO!x#sO~O%s&YO!S)SX!_)SX(T)SX~O(T&ZO~Ol!PO!u&`O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&eOe&dO!x&bO%h&cO%{&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&kO#`&nO%j&iO(U!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'x&{O'z%nO~Oa%nO'x'OO'z%nO~Oa%nO'x'QO'z%nO~O'w]X!Y]Xv]X!k]X&[]X!_]X%i]X!g]X~P(qO!b'_O!c'WO!d'WO(U!lO(VTO(YUO~Os'UO!S'TO!['XO(e'SO!^(iP!^(xP~P@nOn'bO!_'`O(T%gO~Oe'gO!l%eO(T%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<VO#T!pO#U!pO#W!pO#X!pO(U!lO(VTO(YUO(e!mO(o!sO~O!b'mO!c'lO!d'lO#V!pO#['nO#]'nO~PBYOa%nOh%VO!g#vO!l%eO'z%nO(r'pO~O!p'tO#`'rO~PChOs!nO!S!oO(VTO(YUO(e!mO(o!sO~O!_XOs(mX!S(mX!b(mX!c(mX!d(mX!|(mX#T(mX#U(mX#V(mX#W(mX#X(mX#[(mX#](mX(U(mX(V(mX(Y(mX(e(mX(o(mX~O!c'lO!d'lO(U!lO~PDWO(P'xO(Q'xO(R'zO~O_!}O(V'|O(W!}O(X'|O~O_#QO(X'|O(Y'|O(Z#QO~Ov(OO~P%[Ox#SO!U#TO(b#TO(c(RO~O![(TO!Y'WX!Y'^X!]'WX!]'^X~P+}O!](VO!Y(hX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](VO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~O!Y(hX~PHRO!Y([O~O!Y(uX!](uX!g(uX!k(uX(r(uX~O#`(uX#k#dX!^(uX~PJUO#`(]O!Y(wX!](wX~O!](^O!Y(vX~O!Y(aO~O#`$eO~PJUO!^(bO~P`OR#zO!Q#yO!S#{O!l#xO(aVOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(r!na(y!na(z!na~Oa!na'z!na'w!na!Y!na!k!nav!na!_!na%i!na!g!na~PKlO!k(cO~O!g#vO#`(dO(r'pO!](tXa(tX'z(tX~O!k(tX~PNXO!S%hO!_%iO!|]O#i(iO#j(hO(T%gO~O!](jO!k(sX~O!k(lO~O!S%hO!_%iO#j(hO(T%gO~OP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~O!g#vO!k(gX~P! uOR(nO!Q(mO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(T!{a~P!#vO!x(rO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~O#k(xO~O![(zO!k(kP~P%[O(e(|O(o[O~O!S)OO!l#xO(e(|O(o[O~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]$_Oa$qa'z$qa'w$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)dO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Og(pP~P!,TO!Q)iO!g)hO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)hO!_({X$Z({X$]({X$_({X$f({X~O!Q)iO~P!.^O!Q)iO!_({X$Z({X$]({X$_({X$f({X~O!_)kO$Z)oO$])jO$_)jO$f)pO~O![)sO~P!)[O$]$hO$_$gO$f)wO~On$zX!Q$zX#S$zX'y$zX(y$zX(z$zX~OgmXg$zXnmX!]mX#`mX~P!0SOx)yO(b)zO(c)|O~On*VO!Q*OO'y*PO(y$}O(z%PO~Og)}O~P!1WOg*WO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S*YO!_*ZO!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op*`O![*^O(T*XO!k)OP~P!1uO#k*aO~O!l*bO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T*dO(VTO(YUO(a$uO(y$}O(z%PO~O![*gO!Y)PP~P!3tOr*sOs!nO!S*iO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO(e!mO~O!^*pO~P!5iO#S$dOn(`X!Q(`X'y(`X(y(`X(z(`X!](`X#`(`X~Og(`X$O(`X~P!6kOn*xO#`*wOg(_X!](_X~O!]*yOg(^X~Oj%dOk%dOl%dO(T&ZOg(^P~Os*|O~Og)}O(T&ZO~O!l+SO~O(T(vO~Op+WO!S%hO![#iO!_%iO!|]O#i#lO#j#iO(T%gO!k(sP~O!g#vO#k+XO~O!S%hO![+ZO!](^O!_%iO(T%gO!Y(vP~Os'[O!S+]O![+[O(VTO(YUO(e(|O~O!^(xP~P!9|O!]+^Oa)TX'z)TX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa!ja!]!ja'z!ja'w!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:tOR#zO!Q#yO!S#{O!l#xO(aVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(r!ra(y!ra(z!ra~Oa!ra'z!ra'w!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!=[OR#zO!Q#yO!S#{O!l#xO(aVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(r!ta(y!ta(z!ta~Oa!ta'z!ta'w!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?rOh%VOn+gO!_'`O%i+fO~O!g+iOa(]X!_(]X'z(]X!](]X~Oa%nO!_XO'z%nO~Oh%VO!l%eO~Oh%VO!l%eO(T%gO~O!g#vO#k(xO~Ob+tO%j+uO(T+qO(VTO(YUO!^)XP~O!]+vO`)WX~O[+zO~O`+{O~O!_&PO(T%gO(U!lO`)WP~O%j,OO~P;SOh%VO#`,SO~Oh%VOn,VO!_$|O~O!_,XO~O!Q,ZO!_XO~O%n%vO~O!x,`O~Oe,eO~Ob,fO(T#nO(VTO(YUO!^)VP~Oe%}O~O%j!QO(T&ZO~P=gO[,kO`,jO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(VTO(YUO(aVO(o[O~O!_!eO!u!gO$W!kO(T!dO~P!FyO`,jOa%nO'z%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa,pOl!OO!uwO%l!OO%m!OO%n!OO~P!IcO!l&oO~O&^,vO~O!_,xO~O&o,zO&q,{OP&laQ&laS&laY&laa&lad&lae&lal&lap&lar&las&lat&laz&la|&la!O&la!S&la!W&la!X&la!_&la!i&la!l&la!o&la!p&la!q&la!s&la!u&la!x&la!|&la$W&la$n&la%h&la%j&la%l&la%m&la%n&la%q&la%s&la%v&la%w&la%y&la&W&la&^&la&`&la&b&la&d&la&g&la&m&la&s&la&u&la&w&la&y&la&{&la'w&la(T&la(V&la(Y&la(a&la(o&la!^&la&e&lab&la&j&la~O(T-QO~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P#!iO!g-VO#`-UOh(jX!]#hX!^#hX!g(jX!l(jX~O!](jX!^(jX~P##[Oh%VO!g-XO!l%eO!]!aX!^!aX~Os!nO!S!oO(VTO(YUO(e!mO~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(VTO(YUO(aVO(o[O~O(T=QO~P#$qO!]-]O!^(iX~O!^-_O~O!g-VO#`-UO!]#hX!^#hX~O!]-`O!^(xX~O!^-bO~O!c-cO!d-cO(U!lO~P#$`O!^-fO~P'_On-iO!_'`O~O!Y-nO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(U!{a(V!{a(Y!{a(e!{a(o!{a~P!#vO!p-sO#`-qO~PChO!c-uO!d-uO(U!lO~PDWOa%nO#`-qO'z%nO~Oa%nO!g#vO#`-qO'z%nO~Oa%nO!g#vO!p-sO#`-qO'z%nO(r'pO~O(P'xO(Q'xO(R-zO~Ov-{O~O!Y'Wa!]'Wa~P!:tO![.PO!Y'WX!]'WX~P%[O!](VO!Y(ha~O!Y(ha~PHRO!](^O!Y(va~O!S%hO![.TO!_%iO(T%gO!Y'^X!]'^X~O#`.VO!](ta!k(taa(ta'z(ta~O!g#vO~P#,wO!](jO!k(sa~O!S%hO!_%iO#j.ZO(T%gO~Op.`O!S%hO![.]O!_%iO!|]O#i._O#j.]O(T%gO!]'aX!k'aX~OR.dO!l#xO~Oh%VOn.gO!_'`O%i.fO~Oa#ci!]#ci'z#ci'w#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:tOn>]O!Q*OO'y*PO(y$}O(z%PO~O#k#_aa#_a#`#_a'z#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#k(`XP(`XR(`X[(`Xa(`Xj(`Xr(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X'z(`X(a(`X(r(`X!k(`X!Y(`X'w(`Xv(`X!_(`X%i(`X!g(`X~P!6kO!].tO!k(kX~P!:tO!k.wO~O!Y.yO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#3cO#n$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#6QO#r$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(aVOa#mi!]#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(aVO(z#}Oa#mi!]#mi#z#mi#{#mi'z#mi(r#mi(y#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#;VO#x#mi~P#;VO#v$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(aVO(y#|O(z#}Oa#mi!]#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#={O#z$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X!]]X!^]X~O$O]X~P#@jOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO#z<gO#{<hO(aVO(r$YO(y#|O(z#}O~O$O.{O~P#BwO#S$dO#`<nO$Q<nO$O(gX!^(gX~P! uOa'da!]'da'z'da'w'da!k'da!Y'dav'da!_'da%i'da!g'da~P!:tO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO(y#mi(z#mi~P#EyOn>]O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P#EyO!]/POg(pX~P!1WOg/RO~Oa$Pi!]$Pi'z$Pi'w$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:tO$]/SO$_/SO~O$]/TO$_/TO~O!g)hO#`/UO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/VO~O!_)kO$Z/XO$])jO$_)jO$f/YO~O!]<iO!^(fX~P#BwO!^/ZO~O!g)hO$f({X~O$f/]O~Ov/^O~P!&zOx)yO(b)zO(c/aO~O!S/dO~O(y$}On%aa!Q%aa'y%aa(z%aa!]%aa#`%aa~Og%aa$O%aa~P#L{O(z%POn%ca!Q%ca'y%ca(y%ca!]%ca#`%ca~Og%ca$O%ca~P#MnO!]fX!gfX!kfX!k$zX(rfX~P!0SOp%WO![/mO!](^O(T/lO!Y(vP!Y)PP~P!1uOr*sO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO~Os<}O!S/nO![+[O!^*pO(e<|O!^(xP~P$ [O!k/oO~P#/sO!]/pO!g#vO(r'pO!k)OX~O!k/uO~OnoX!QoX'yoX(yoX(zoX~O!g#vO!koX~P$#OOp/wO!S%hO![*^O!_%iO(T%gO!k)OP~O#k/xO~O!Y$zX!]$zX!g%RX~P!0SO!]/yO!Y)PX~P#/sO!g/{O~O!Y/}O~OpkO(T0OO~P.iOh%VOr0TO!g#vO!l%eO(r'pO~O!g+iO~Oa%nO!]0XO'z%nO~O!^0ZO~P!5iO!c0[O!d0[O(U!lO~P#$`Os!nO!S0]O(VTO(YUO(e!mO~O#[0_O~Og%aa!]%aa#`%aa$O%aa~P!1WOg%ca!]%ca#`%ca$O%ca~P!1WOj%dOk%dOl%dO(T&ZOg'mX!]'mX~O!]*yOg(^a~Og0hO~On0jO#`0iOg(_a!](_a~OR0kO!Q0kO!S0lO#S$dOn}a'y}a(y}a(z}a!]}a#`}a~Og}a$O}a~P$(cO!Q*OO'y*POn$sa(y$sa(z$sa!]$sa#`$sa~Og$sa$O$sa~P$)_O!Q*OO'y*POn$ua(y$ua(z$ua!]$ua#`$ua~Og$ua$O$ua~P$*QO#k0oO~Og%Ta!]%Ta#`%Ta$O%Ta~P!1WO!g#vO~O#k0rO~O!]+^Oa)Ta'z)Ta~OR#zO!Q#yO!S#{O!l#xO(aVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(r!ri(y!ri(z!ri~Oa!ri'z!ri'w!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$+oOh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op0{O%]0|O(T0zO~P$.VO!g+iOa(]a!_(]a'z(]a!](]a~O#k1SO~O[]X!]fX!^fX~O!]1TO!^)XX~O!^1VO~O[1WO~Ob1YO(T+qO(VTO(YUO~O!_&PO(T%gO`'uX!]'uX~O!]+vO`)Wa~O!k1]O~P!:tO[1`O~O`1aO~O#`1fO~On1iO!_$|O~O(e(|O!^)UP~Oh%VOn1rO!_1oO%i1qO~O[1|O!]1zO!^)VX~O!^1}O~O`2POa%nO'z%nO~O(T#nO(VTO(YUO~O#S$dO#`$eO$Q$eOP(gXR(gX[(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~Oj2SO&[2TOa(gX~P$3pOj2SO#`$eO&[2TO~Oa2VO~P%[Oa2XO~O&e2[OP&ciQ&ciS&ciY&cia&cid&cie&cil&cip&cir&cis&cit&ciz&ci|&ci!O&ci!S&ci!W&ci!X&ci!_&ci!i&ci!l&ci!o&ci!p&ci!q&ci!s&ci!u&ci!x&ci!|&ci$W&ci$n&ci%h&ci%j&ci%l&ci%m&ci%n&ci%q&ci%s&ci%v&ci%w&ci%y&ci&W&ci&^&ci&`&ci&b&ci&d&ci&g&ci&m&ci&s&ci&u&ci&w&ci&y&ci&{&ci'w&ci(T&ci(V&ci(Y&ci(a&ci(o&ci!^&cib&ci&j&ci~Ob2bO!^2`O&j2aO~P`O!_XO!l2dO~O&q,{OP&liQ&liS&liY&lia&lid&lie&lil&lip&lir&lis&lit&liz&li|&li!O&li!S&li!W&li!X&li!_&li!i&li!l&li!o&li!p&li!q&li!s&li!u&li!x&li!|&li$W&li$n&li%h&li%j&li%l&li%m&li%n&li%q&li%s&li%v&li%w&li%y&li&W&li&^&li&`&li&b&li&d&li&g&li&m&li&s&li&u&li&w&li&y&li&{&li'w&li(T&li(V&li(Y&li(a&li(o&li!^&li&e&lib&li&j&li~O!Y2jO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2pO(e!mO!]'XX!^'XX~P@nO!]-]O!^(ia~O!]'_X!^'_X~P!9|O!]-`O!^(xa~O!^2wO~P'_Oa%nO#`3QO'z%nO~Oa%nO!g#vO#`3QO'z%nO~Oa%nO!g#vO!p3UO#`3QO'z%nO(r'pO~Oa%nO'z%nO~P!:tO!]$_Ov$qa~O!Y'Wi!]'Wi~P!:tO!](VO!Y(hi~O!](^O!Y(vi~O!Y(wi!](wi~P!:tO!](ti!k(tia(ti'z(ti~P!:tO#`3WO!](ti!k(tia(ti'z(ti~O!](jO!k(si~O!S%hO!_%iO!|]O#i3]O#j3[O(T%gO~O!S%hO!_%iO#j3[O(T%gO~On3dO!_'`O%i3cO~Oh%VOn3dO!_'`O%i3cO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aav%aa!_%aa%i%aa!g%aa~P#L{O#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%cav%ca!_%ca%i%ca!g%ca~P#MnO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/sO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/sO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'z}a(a}a(r}a!k}a!Y}a'w}av}a!_}a%i}a!g}a~P$(cO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'z$sa(a$sa(r$sa!k$sa!Y$sa'w$sav$sa!_$sa%i$sa!g$sa~P$)_O#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'z$ua(a$ua(r$ua!k$ua!Y$ua'w$uav$ua!_$ua%i$ua!g$ua~P$*QO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'z%Ta(a%Ta(r%Ta!k%Ta!Y%Ta'w%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/sOa#cq!]#cq'z#cq'w#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:tO![3lO!]'YX!k'YX~P%[O!].tO!k(ka~O!].tO!k(ka~P!:tO!Y3oO~O$O!na!^!na~PKlO$O!ja!]!ja!^!ja~P#BwO$O!ra!^!ra~P!=[O$O!ta!^!ta~P!?rOg']X!]']X~P!,TO!]/POg(pa~OSfO!_4TO$d4UO~O!^4YO~Ov4ZO~P#/sOa$mq!]$mq'z$mq'w$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:tO!Y4]O~P!&zO!S4^O~O!Q*OO'y*PO(z%POn'ia(y'ia!]'ia#`'ia~Og'ia$O'ia~P%-fO!Q*OO'y*POn'ka(y'ka(z'ka!]'ka#`'ka~Og'ka$O'ka~P%.XO(r$YO~P#/sO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!0SOp%WO(T=WO~P!1uOp4bO!S%hO![4aO!_%iO(T%gO!]'eX!k'eX~O!]/pO!k)Oa~O!]/pO!g#vO!k)Oa~O!]/pO!g#vO(r'pO!k)Oa~Og$|i!]$|i#`$|i$O$|i~P!1WO![4jO!Y'gX!]'gX~P!3tO!]/yO!Y)Pa~O!]/yO!Y)Pa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~Oj%YX!g%YX~P%2OOj4oO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4tO!l%eO(r'pO~Or4yO!g#vO(r'pO~Os!nO!S4zO(VTO(YUO(e!mO~O(y$}On%ai!Q%ai'y%ai(z%ai!]%ai#`%ai~Og%ai$O%ai~P%5oO(z%POn%ci!Q%ci'y%ci(y%ci!]%ci#`%ci~Og%ci$O%ci~P%6bOg(_i!](_i~P!1WO#`5QOg(_i!](_i~P!1WO!k5VO~Oa$oq!]$oq'z$oq'w$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:tO!Y5ZO~O!]5[O!_)QX~P#/sOa$zX!_$zX%^]X'z$zX!]$zX~P!0SO%^5_OaoX!_oX'zoX!]oX~P$#OOp5`O(T#nO~O%^5_O~Ob5fO%j5gO(T+qO(VTO(YUO!]'tX!^'tX~O!]1TO!^)Xa~O[5kO~O`5lO~O[5pO~Oa%nO'z%nO~P#/sO!]5uO#`5wO!^)UX~O!^5xO~Or6OOs!nO!S*iO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!pO#W!pO#X!pO#[5}O#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O!^5|O~P%;eOn6TO!_1oO%i6SO~Oh%VOn6TO!_1oO%i6SO~Ob6[O(T#nO(VTO(YUO!]'sX!^'sX~O!]1zO!^)Va~O(VTO(YUO(e6^O~O`6bO~Oj6eO&[6fO~PNXO!k6gO~P%[Oa6iO~Oa6iO~P%[Ob2bO!^6nO&j2aO~P`O!g6pO~O!g6rOh(ji!](ji!^(ji!g(ji!l(jir(ji(r(ji~O!]#hi!^#hi~P#BwO#`6sO!]#hi!^#hi~O!]!ai!^!ai~P#BwOa%nO#`6|O'z%nO~Oa%nO!g#vO#`6|O'z%nO~O!](tq!k(tqa(tq'z(tq~P!:tO!](jO!k(sq~O!S%hO!_%iO#j7TO(T%gO~O!_'`O%i7WO~On7[O!_'`O%i7WO~O#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'z'ia(a'ia(r'ia!k'ia!Y'ia'w'iav'ia!_'ia%i'ia!g'ia~P%-fO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'z'ka(a'ka(r'ka!k'ka!Y'ka'w'kav'ka!_'ka%i'ka!g'ka~P%.XO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'z$|i(a$|i(r$|i!k$|i!Y$|i'w$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/sO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'z%ai(a%ai(r%ai!k%ai!Y%ai'w%aiv%ai!_%ai%i%ai!g%ai~P%5oO#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'z%ci(a%ci(r%ci!k%ci!Y%ci'w%civ%ci!_%ci%i%ci!g%ci~P%6bO!]'Ya!k'Ya~P!:tO!].tO!k(ki~O$O#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#n#mi~P%NdO#n<_O~P%NdOP$[OR#zOr<kO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#r#mi~P&!lO#r<aO~P&!lOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO(aVO#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#v#mi~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO(aVO(z#}O#z#mi#{#mi$O#mi(r#mi(y#mi!]#mi!^#mi~O#x<eO~P&&uO#x#mi~P&&uO#v<cO~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO(aVO(y#|O(z#}O#{#mi$O#mi(r#mi!]#mi!^#mi~O#z#mi~P&)UO#z<gO~P&)UOa#|y!]#|y'z#|y'w#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:tO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO(y#mi(z#mi~P&,QOn>^O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P&,QO#S$dOP(`XR(`X[(`Xj(`Xn(`Xr(`X!Q(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X$O(`X'y(`X(a(`X(r(`X(y(`X(z(`X!](`X!^(`X~O$O$Pi!]$Pi!^$Pi~P#BwO$O!ri!^!ri~P$+oOg']a!]']a~P!1WO!^7nO~O!]'da!^'da~P#BwO!Y7oO~P#/sO!g#vO(r'pO!]'ea!k'ea~O!]/pO!k)Oi~O!]/pO!g#vO!k)Oi~Og$|q!]$|q#`$|q$O$|q~P!1WO!Y'ga!]'ga~P#/sO!g7vO~O!]/yO!Y)Pi~P#/sO!]/yO!Y)Pi~O!Y7yO~Oh%VOr8OO!l%eO(r'pO~Oj8QO!g#vO~Or8TO!g#vO(r'pO~O!Q*OO'y*PO(z%POn'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P&5RO!Q*OO'y*POn'la(y'la(z'la!]'la#`'la~Og'la$O'la~P&5tOg(_q!](_q~P!1WO#`8VOg(_q!](_q~P!1WO!Y8WO~Og%Oq!]%Oq#`%Oq$O%Oq~P!1WOa$oy!]$oy'z$oy'w$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:tO!g6rO~O!]5[O!_)Qa~O!_'`OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(a$Ta(r$Ta(y$Ta(z$Ta~O%i7WO~P&8fO%^8[Oa%[i!_%[i'z%[i!]%[i~Oa#cy!]#cy'z#cy'w#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:tO[8^O~Ob8`O(T+qO(VTO(YUO~O!]1TO!^)Xi~O`8dO~O(e(|O!]'pX!^'pX~O!]5uO!^)Ua~O!^8nO~P%;eO(o!sO~P$&YO#[8oO~O!_1oO~O!_1oO%i8qO~On8tO!_1oO%i8qO~O[8yO!]'sa!^'sa~O!]1zO!^)Vi~O!k8}O~O!k9OO~O!k9RO~O!k9RO~P%[Oa9TO~O!g9UO~O!k9VO~O!](wi!^(wi~P#BwOa%nO#`9_O'z%nO~O!](ty!k(tya(ty'z(ty~P!:tO!](jO!k(sy~O%i9bO~P&8fO!_'`O%i9bO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'z$|q(a$|q(r$|q!k$|q!Y$|q'w$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/sO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'z'ja(a'ja(r'ja!k'ja!Y'ja'w'jav'ja!_'ja%i'ja!g'ja~P&5RO#k'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la'z'la(a'la(r'la!k'la!Y'la'w'lav'la!_'la%i'la!g'la~P&5tO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'z%Oq(a%Oq(r%Oq!k%Oq!Y%Oq'w%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/sO!]'Yi!k'Yi~P!:tO$O#cq!]#cq!^#cq~P#BwO(y$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(a%aa(r%aa!]%aa!^%aa~On%aa!Q%aa'y%aa(z%aa~P&IyO(z%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(a%ca(r%ca!]%ca!^%ca~On%ca!Q%ca'y%ca(y%ca~P&LQOn>^O!Q*OO'y*PO(z%PO~P&IyOn>^O!Q*OO'y*PO(y$}O~P&LQOR0kO!Q0kO!S0lO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'y}a(a}a(r}a(y}a(z}a!]}a!^}a~O!Q*OO'y*POP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(a$sa(r$sa(y$sa(z$sa!]$sa!^$sa~O!Q*OO'y*POP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(a$ua(r$ua(y$ua(z$ua!]$ua!^$ua~On>^O!Q*OO'y*PO(y$}O(z%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(a%Ta(r%Ta!]%Ta!^%Ta~P''VO$O$mq!]$mq!^$mq~P#BwO$O$oq!]$oq!^$oq~P#BwO!^9oO~O$O9pO~P!1WO!g#vO!]'ei!k'ei~O!g#vO(r'pO!]'ei!k'ei~O!]/pO!k)Oq~O!Y'gi!]'gi~P#/sO!]/yO!Y)Pq~Or9wO!g#vO(r'pO~O[9yO!Y9xO~P#/sO!Y9xO~Oj:PO!g#vO~Og(_y!](_y~P!1WO!]'na!_'na~P#/sOa%[q!_%[q'z%[q!]%[q~P#/sO[:UO~O!]1TO!^)Xq~O`:YO~O#`:ZO!]'pa!^'pa~O!]5uO!^)Ui~P#BwO!S:]O~O!_1oO%i:`O~O(VTO(YUO(e:eO~O!]1zO!^)Vq~O!k:hO~O!k:iO~O!k:jO~O!k:jO~P%[O#`:mO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%i:rO~P&8fO!_'`O%i:rO~O$O#|y!]#|y!^#|y~P#BwOP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(a$|i(r$|i!]$|i!^$|i~P''VO!Q*OO'y*PO(z%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(a'ia(r'ia(y'ia!]'ia!^'ia~O!Q*OO'y*POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(a'ka(r'ka(y'ka(z'ka!]'ka!^'ka~O(y$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'y%ai(a%ai(r%ai(z%ai!]%ai!^%ai~O(z%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'y%ci(a%ci(r%ci(y%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#BwO$O#cy!]#cy!^#cy~P#BwO!g#vO!]'eq!k'eq~O!]/pO!k)Oy~O!Y'gq!]'gq~P#/sOr:|O!g#vO(r'pO~O[;QO!Y;PO~P#/sO!Y;PO~Og(_!R!](_!R~P!1WOa%[y!_%[y'z%[y!]%[y~P#/sO!]1TO!^)Xy~O!]5uO!^)Uq~O(T;XO~O!_1oO%i;[O~O!k;_O~O%i;dO~P&8fOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(a$|q(r$|q!]$|q!^$|q~P''VO!Q*OO'y*PO(z%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(a'ja(r'ja(y'ja!]'ja!^'ja~O!Q*OO'y*POP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la$O'la(a'la(r'la(y'la(z'la!]'la!^'la~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(a%Oq(r%Oq!]%Oq!^%Oq~P''VOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!1WO!Y;hO~P#/sOr;iO!g#vO(r'pO~O[;kO!Y;hO~P#/sO!]'pq!^'pq~P#BwO!]#h!Z!^#h!Z~P#BwO#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'z%e!Z(a%e!Z(r%e!Z!k%e!Z!Y%e!Z'w%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/sOr;tO!g#vO(r'pO~O!Y;uO~P#/sOr;|O!g#vO(r'pO~O!Y;}O~P#/sOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(a%e!Z(r%e!Z!]%e!Z!^%e!Z~P''VOr<QO!g#vO(r'pO~Ov(fX~P1qO!Q%rO~P!)[O(U!lO~P!)[O!YfX!]fX#`fX~P%2OOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~O!gfX!k]X!kfX(rfX~P'LTOP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_XO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]<iO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<tO!S${O!_$|O!i>WO!l$xO#j<zO$W%`O$t<vO$v<xO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Ol)dO~P(!yOr!eX(r!eX~P#!iOr(jX(r(jX~P##[O!^]X!^fX~P'LTO!YfX!Y$zX!]fX!]$zX#`fX~P!0SO#k<^O~O!g#vO#k<^O~O#`<nO~Oj<bO~O#`=OO!](wX!^(wX~O#`<nO!](uX!^(uX~O#k=PO~Og=RO~P!1WO#k=XO~O#k=YO~Og=RO(T&ZO~O!g#vO#k=ZO~O!g#vO#k=PO~O$O=[O~P#BwO#k=]O~O#k=^O~O#k=cO~O#k=dO~O#k=eO~O#k=fO~O$O=gO~P!1WO$O=hO~P!1WOl=sO~P7eOk#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~(OT#o!X'|(U#ps#n#qr!Q'}$]'}(T$_(e~",
        goto: "$9Y)]PPPPPP)^PP)aP)rP+W/]PPPP6mPP7TPP=QPPP@tPA^PA^PPPA^PCfPA^PA^PA^PCjPCoPD^PIWPPPI[PPPPI[L_PPPLeMVPI[PI[PP! eI[PPPI[PI[P!#lI[P!'S!(X!(bP!)U!)Y!)U!,gPPPPPPP!-W!(XPP!-h!/YP!2iI[I[!2n!5z!:h!:h!>gPPP!>oI[PPPPPPPPP!BOP!C]PPI[!DnPI[PI[I[I[I[I[PI[!FQP!I[P!LbP!Lf!Lp!Lt!LtP!IXP!Lx!LxP#!OP#!SI[PI[#!Y#%_CjA^PA^PA^A^P#&lA^A^#)OA^#+vA^#.SA^A^#.r#1W#1W#1]#1f#1W#1qPP#1WPA^#2ZA^#6YA^A^6mPPP#:_PPP#:x#:xP#:xP#;`#:xPP#;fP#;]P#;]#;y#;]#<e#<k#<n)aP#<q)aP#<z#<z#<zP)aP)aP)aP)aPP)aP#=Q#=TP#=T)aP#=XP#=[P)aP)aP)aP)aP)aP)a)aPP#=b#=h#=s#=y#>P#>V#>]#>k#>q#>{#?R#?]#?c#?s#?y#@k#@}#AT#AZ#Ai#BO#Cs#DR#DY#Et#FS#Gt#HS#HY#H`#Hf#Hp#Hv#H|#IW#Ij#IpPPPPPPPPPPP#IvPPPPPPP#Jk#Mx$ b$ i$ qPPP$']P$'f$*_$0x$0{$1O$1}$2Q$2X$2aP$2g$2jP$3W$3[$4S$5b$5g$5}PP$6S$6Y$6^$6a$6e$6i$7e$7|$8e$8i$8l$8o$8y$8|$9Q$9UR!|RoqOXst!Z#d%m&r&t&u&w,s,x2[2_Y!vQ'`-e1o5{Q%tvQ%|yQ&T|Q&j!VS'W!e-]Q'f!iS'l!r!yU*k$|*Z*oQ+o%}S+|&V&WQ,d&dQ-c'_Q-m'gQ-u'mQ0[*qQ1b,OQ1y,eR<{<Y%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_S#q]<V!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU+P%]<s<tQ+t&PQ,f&gQ,m&oQ0x+gQ0}+iQ1Y+uQ2R,kQ3`.gQ5`0|Q5f1TQ6[1zQ7Y3dQ8`5gR9e7['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S!S!nQ!r!v!y!z$|'W'_'`'l'm'n*k*o*q*r-]-c-e-u0[0_1o5{5}%[$ti#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q&X|Q'U!eS'[%i-`Q+t&PQ,P&WQ,f&gQ0n+SQ1Y+uQ1_+{Q2Q,jQ2R,kQ5f1TQ5o1aQ6[1zQ6_1|Q6`2PQ8`5gQ8c5lQ8|6bQ:X8dQ:f8yQ;V:YR<}*ZrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R,h&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'b'r(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>R>S[#]WZ#W#Z'X(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ%wxQ%{yW&Q|&V&W,OQ&_!TQ'c!hQ'e!iQ(q#sS+n%|%}Q+r&PQ,_&bQ,c&dS-l'f'gQ.i(rQ1R+oQ1X+uQ1Z+vQ1^+zQ1t,`S1x,d,eQ2|-mQ5e1TQ5i1WQ5n1`Q6Z1yQ8_5gQ8b5kQ8f5pQ:T8^R;T:U!U$zi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y!^%yy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{Q+h%wQ,T&[Q,W&]Q,b&dQ.h(qQ1s,_U1w,c,d,eQ3e.iQ6U1tS6Y1x1yQ8x6Z#f>T#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o>U<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hW%Ti%V*y>PS&[!Q&iQ&]!RQ&^!SU*}%[%d=sR,R&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^T)z$u){V+P%]<s<tW'[!e%i*Z-`S(}#y#zQ+c%rQ+y&SS.b(m(nQ1j,XQ5T0kR8i5u'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S$i$^c#Y#e%q%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.|.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ'Y!eR2q-]!W!nQ!e!r!v!y!z$|'W'_'`'l'm'n*Z*k*o*q*r-]-c-e-u0[0_1o5{5}R1l,ZnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&y!^Q'v!xS(s#u<^Q+l%zQ,]&_Q,^&aQ-j'dQ-w'oS.r(x=PS0q+X=ZQ1P+mQ1n,[Q2c,zQ2e,{Q2m-WQ2z-kQ2}-oS5Y0r=eQ5a1QS5d1S=fQ6t2oQ6x2{Q6}3SQ8]5bQ9Y6vQ9Z6yQ9^7OR:l9V$d$]c#Y#e%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vS(o#p'iQ)P#zS+b%q.|S.c(n(pR3^.d'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS#q]<VQ&t!XQ&u!YQ&w![Q&x!]R2Z,vQ'a!hQ+e%wQ-h'cS.e(q+hQ2x-gW3b.h.i0w0yQ6w2yW7U3_3a3e5^U9a7V7X7ZU:q9c9d9fS;b:p:sQ;p;cR;x;qU!wQ'`-eT5y1o5{!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(j,s,x.[2[2_]!pQ!r'`-e1o5{T#q]<V%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S(}#y#zS.b(m(n!s=l$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU$fd)_,mS(p#p'iU*v%R(w4OU0m+O.n7gQ5^0xQ7V3`Q9d7YR:s9em!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}Q't!uS(f#g2US-s'k'wQ/s*]Q0R*jQ3U-vQ4f/tQ4r0TQ4s0UQ4x0^Q7r4`S7}4t4vS8R4y4{Q9r7sQ9v7yQ9{8OQ:Q8TS:{9w9xS;g:|;PS;s;h;iS;{;t;uS<P;|;}R<S<QQ#wbQ's!uS(e#g2US(g#m+WQ+Y%fQ+j%xQ+p&OU-r'k't'wQ.W(fU/r*]*`/wQ0S*jQ0V*lQ1O+kQ1u,aS3R-s-vQ3Z.`S4e/s/tQ4n0PS4q0R0^Q4u0WQ6W1vQ7P3US7q4`4bQ7u4fU7|4r4x4{Q8P4wQ8v6XS9q7r7sQ9u7yQ9}8RQ:O8SQ:c8wQ:y9rS:z9v9xQ;S:QQ;^:dS;f:{;PS;r;g;hS;z;s;uS<O;{;}Q<R<PQ<T<SQ=o=jQ={=tR=|=uV!wQ'`-e%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S#wz!j!r=i$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=o>R%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Q%fj!^%xy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{S&Oz!jQ+k%yQ,a&dW1v,b,c,d,eU6X1w1x1yS8w6Y6ZQ:d8x!r=j$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ=t>QR=u>R%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Y#bWZ#W#Z(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ,n&o!p=k$Z$n)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=n'XU']!e%i*ZR2s-`%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ,m&oQ0x+gQ3`.gQ7Y3dR9e7[!b$Tc#Y%q(S(Y(t(y)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!P<d)^)q-Z.|2k2n3p3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!f$Vc#Y%q(S(Y(t(y)W)X)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!T<f)^)q-Z.|2k2n3p3v3w3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!^$Zc#Y%q(S(Y(t(y)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<WQ4_/kz>S)^)q-Z.|2k2n3p4P4X6u7b7k7l8k9X9g9m9n;W;`=vQ>X>ZR>Y>['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS$oh$pR4U/U'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$kf$qQ$ifS)j$l)nR)v$qT$jf$qT)l$l)n'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$oh$pQ$rhR)u$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_!s>Q$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'b)O)s*i+]+g,p,s,x-i.g/V/n0]0l1r2S2T2V2X2[2_2a3d4T4z6T6e6f6i7[8t9T!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^Q+T%aQ/c*Oo4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!U$yi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>YQ*c$zU*l$|*Z*oQ+U%bQ0W*m#f=q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n=r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hQ=w>TQ=x>UQ=y>VR=z>W!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hnoOXst!Z#d%m&r&t&u&w,s,x2[2_S*f${*YQ-R'OQ-S'QR4i/y%[%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q,U&]Q1h,WQ5s1gR8h5tV*n$|*Z*oU*n$|*Z*oT5z1o5{S0P*i/nQ4w0]T8S4z:]Q+j%xQ0V*lQ1O+kQ1u,aQ6W1vQ8v6XQ:c8wR;^:d!U%Oi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Yx*R$v)e*S*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>OS0`*t0a#f<o#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<p<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!d=S(u)c*[*e.j.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[`=T3}7c7f7j9h:t:w;yS=_.l3iT=`7e9k!U%Qi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y|*T$v)e*U*t+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>OS0b*u0c#f<q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!h=U(u)c*[*e.k.l.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[d=V3}7d7e7j9h9i:t:u:w;yS=a.m3jT=b7f9lrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q&f!UR,p&ornOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R&f!UQ,Y&^R1d,RsnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q1p,_S6R1s1tU8p6P6Q6US:_8r8sS;Y:^:aQ;m;ZR;w;nQ&m!VR,i&iR6_1|R:f8yW&Q|&V&W,OR1Z+vQ&r!WR,s&sR,y&xT2],x2_R,}&yQ,|&yR2f,}Q'y!{R-y'ySsOtQ#dXT%ps#dQ#OTR'{#OQ#RUR'}#RQ){$uR/`){Q#UVR(Q#UQ#XWU(W#X(X.QQ(X#YR.Q(YQ-^'YR2r-^Q.u(yS3m.u3nR3n.vQ-e'`R2v-eY!rQ'`-e1o5{R'j!rQ/Q)eR4S/QU#_W%h*YU(_#_(`.RQ(`#`R.R(ZQ-a']R2t-at`OXst!V!Z#d%m&i&k&r&t&u&w,s,x2[2_S#hZ%eU#r`#h.[R.[(jQ(k#jQ.X(gW.a(k.X3X7RQ3X.YR7R3YQ)n$lR/W)nQ$phR)t$pQ$`cU)a$`-|<jQ-|<WR<j)qQ/q*]W4c/q4d7t9sU4d/r/s/tS7t4e4fR9s7u$e*Q$v(u)c)e*[*e*t*u+Q+R+V.l.m.o.p.q/_/g/i/k/v/|0d0e0v1e3f3g3h3}4R4[4g4h4l4|5O5R5S5W5r7]7^7_7`7e7f7h7i7j7p7w7z8U8X8Z9h9i9j9t9|:R:S:t:u:v:w:x:};R;e;j;v;y=p=}>O>Z>[Q/z*eU4k/z4m7xQ4m/|R7x4lS*o$|*ZR0Y*ox*S$v)e*t*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>O!d.j(u)c*[*e.l.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/h*S.j7ca7c3}7e7f7j9h:t:w;yQ0a*tQ3i.lU4}0a3i9kR9k7e|*U$v)e*t*u+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>O!h.k(u)c*[*e.l.m.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/j*U.k7de7d3}7e7f7j9h9i:t:u:w;yQ0c*uQ3j.mU5P0c3j9lR9l7fQ*z%UR0g*zQ5]0vR8Y5]Q+_%kR0u+_Q5v1jS8j5v:[R:[8kQ,[&_R1m,[Q5{1oR8m5{Q1{,fS6]1{8zR8z6_Q1U+rW5h1U5j8a:VQ5j1XQ8a5iR:V8bQ+w&QR1[+wQ2_,xR6m2_YrOXst#dQ&v!ZQ+a%mQ,r&rQ,t&tQ,u&uQ,w&wQ2Y,sS2],x2_R6l2[Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'q!uQ+`%lQ+l%zQ,Q&XQ,h&mQ-P&|W-p'k's't'wQ-w'oQ0X*nQ1P+mQ1c,PS2O,i,lQ2g-OQ2h-RQ2i-SQ2}-oW3P-r-s-v-xQ5a1QQ5m1_Q5q1eQ6V1uQ6a2QQ6k2ZU6z3O3R3UQ6}3SQ8]5bQ8e5oQ8g5rQ8l5zQ8u6WQ8{6`S9[6{7PQ9^7OQ:W8cQ:b8vQ:g8|Q:n9]Q;U:XQ;]:cQ;a:oQ;l;VR;o;^Q%zyQ'd!iQ'o!uU+m%{%|%}Q-W'VU-k'e'f'gS-o'k'uQ0Q*jS1Q+n+oQ2o-YS2{-l-mQ3S-tS4p0R0UQ5b1RQ6v2uQ6y2|Q7O3TU7{4r4s4vQ9z7}R;O9{S$wi>PR*{%VU%Ui%V>PR0f*yQ$viS(u#v+iS)c$b$cQ)e$dQ*[$xS*e${*YQ*t%OQ*u%QQ+Q%^Q+R%_Q+V%cQ.l<oQ.m<qQ.o<uQ.p<wQ.q<yQ/_)yQ/g*RQ/i*TQ/k*VQ/v*aS/|*g/mQ0d*wQ0e*xl0v+f,V.f1i1q3c6S7W8q9b:`:r;[;dQ1e,SQ3f=SQ3g=UQ3h=XS3}<l<mQ4R/PS4[/d4^Q4g/xQ4h/yQ4l/{Q4|0`Q5O0bQ5R0iQ5S0jQ5W0oQ5r1fQ7]=]Q7^=_Q7_=aQ7`=cQ7e<pQ7f<rQ7h<vQ7i<xQ7j<zQ7p4_Q7w4jQ7z4oQ8U5QQ8X5[Q8Z5_Q9h=YQ9i=TQ9j=VQ9t7vQ9|8QQ:R8VQ:S8[Q:t=^Q:u=`Q:v=bQ:w=dQ:x9pQ:}9yQ;R:PQ;e=gQ;j;QQ;v;kQ;y=hQ=p>PQ=}>XQ>O>YQ>Z>]R>[>^Q+O%]Q.n<sR7g<tnpOXst!Z#d%m&r&t&u&w,s,x2[2_Q!fPS#fZ#oQ&|!`W'h!o*i0]4zQ(P#SQ)Q#{Q)r$nS,l&k&nQ,q&oQ-O&{S-T'T/nQ-g'bQ.x)OQ/[)sQ0s+]Q0y+gQ2W,pQ2y-iQ3a.gQ4W/VQ5U0lQ6Q1rQ6c2SQ6d2TQ6h2VQ6j2XQ6o2aQ7Z3dQ7m4TQ8s6TQ9P6eQ9Q6fQ9S6iQ9f7[Q:a8tR:k9T#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'b)O*i+]+g,p,s,x-i.g/n0]0l1r2S2T2V2X2[2_2a3d4z6T6e6f6i7[8t9TQ#YWQ#eYQ%quQ%svS%uw!gS(S#W(VQ(Y#ZQ(t#uQ(y#xQ)R$OQ)S$PQ)T$QQ)U$RQ)V$SQ)W$TQ)X$UQ)Y$VQ)Z$WQ)[$XQ)^$ZQ)`$_Q)b$aQ)g$eW)q$n)s/V4TQ+d%tQ+x&RS-Z'X2pQ-x'rS-}(T.PQ.S(]Q.U(dQ.s(xQ.v(zQ.z<UQ.|<XQ.}<YQ/O<]Q/b)}Q0p+XQ2k-UQ2n-XQ3O-qQ3V.VQ3k.tQ3p<^Q3q<_Q3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{.{Q3|<kQ4P<nQ4Q<{Q4X<iQ5X0rQ5c1SQ6u=OQ6{3QQ7Q3WQ7a3lQ7b=PQ7k=RQ7l=ZQ8k5wQ9X6sQ9]6|Q9g=[Q9m=eQ9n=fQ:o9_Q;W:ZQ;`:mQ<W#SR=v>SR#[WR'Z!el!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}S'V!e-]U*j$|*Z*oS-Y'W'_S0U*k*qQ0^*rQ2u-cQ4v0[R4{0_R({#xQ!fQT-d'`-e]!qQ!r'`-e1o5{Q#p]R'i<VR)f$dY!uQ'`-e1o5{Q'k!rS'u!v!yS'w!z5}S-t'l'mQ-v'nR3T-uT#kZ%eS#jZ%eS%km,oU(g#h#i#lS.Y(h(iQ.^(jQ0t+^Q3Y.ZU3Z.[.]._S7S3[3]R9`7Td#^W#W#Z%h(T(^*Y+Z.T/mr#gZm#h#i#l%e(h(i(j+^.Z.[.]._3[3]7TS*]$x*bQ/t*^Q2U,oQ2l-VQ4`/pQ6q2dQ7s4aQ9W6rT=m'X+[V#aW%h*YU#`W%h*YS(U#W(^U(Z#Z+Z/mS-['X+[T.O(T.TV'^!e%i*ZQ$lfR)x$qT)m$l)nR4V/UT*_$x*bT*h${*YQ0w+fQ1g,VQ3_.fQ5t1iQ6P1qQ7X3cQ8r6SQ9c7WQ:^8qQ:p9bQ;Z:`Q;c:rQ;n;[R;q;dnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&l!VR,h&itmOXst!U!V!Z#d%m&i&r&t&u&w,s,x2[2_R,o&oT%lm,oR1k,XR,g&gQ&U|S+}&V&WR1^,OR+s&PT&p!W&sT&q!W&sT2^,x2_",
        nodeNames: "\u26a0 ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
        maxTerm: 380,
        context: dD,
        nodeProps: [
          ["isolate", -8, 5, 6, 14, 37, 39, 51, 53, 55, ""],
          ["group", -26, 9, 17, 19, 68, 207, 211, 215, 216, 218, 221, 224, 234, 237, 243, 245, 247, 249, 252, 258, 264, 266, 268, 270, 272, 274, 275, "Statement", -34, 13, 14, 32, 35, 36, 42, 51, 54, 55, 57, 62, 70, 72, 76, 80, 82, 84, 85, 110, 111, 120, 121, 136, 139, 141, 142, 143, 144, 145, 147, 148, 167, 169, 171, "Expression", -23, 31, 33, 37, 41, 43, 45, 173, 175, 177, 178, 180, 181, 182, 184, 185, 186, 188, 189, 190, 201, 203, 205, 206, "Type", -3, 88, 103, 109, "ClassItem"],
          ["openedBy", 23, "<", 38, "InterpolationStart", 56, "[", 60, "{", 73, "(", 160, "JSXStartCloseTag"],
          ["closedBy", -2, 24, 168, ">", 40, "InterpolationEnd", 50, "]", 61, "}", 74, ")", 165, "JSXEndTag"]
        ],
        propSources: [yD],
        skippedNodes: [0, 5, 6, 278],
        repeatNodeCount: 37,
        tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
        tokenizers: [iD, lD, WD, ZD, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, SD, new fD("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340), new fD("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)],
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
          get: DD => mD[DD] || -1
        }, {
          term: 95,
          get: DD => eD[DD] || -1
        }],
        tokenPrec: 15201
      });
    var aD = wD(41231),
      uD = wD(41212),
      vD = wD(41217),
      tD = wD(41210);
    const FD = [(0, tD.n)("function ${name}(${params}) {\n\t${}\n}", {
        label: "function",
        detail: "definition",
        type: "keyword"
      }), (0, tD.n)("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}", {
        label: "for",
        detail: "loop",
        type: "keyword"
      }), (0, tD.n)("for (let ${name} of ${collection}) {\n\t${}\n}", {
        label: "for",
        detail: "of loop",
        type: "keyword"
      }), (0, tD.n)("do {\n\t${}\n} while (${})", {
        label: "do",
        detail: "loop",
        type: "keyword"
      }), (0, tD.n)("while (${}) {\n\t${}\n}", {
        label: "while",
        detail: "loop",
        type: "keyword"
      }), (0, tD.n)("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
        label: "try",
        detail: "/ catch block",
        type: "keyword"
      }), (0, tD.n)("if (${}) {\n\t${}\n}", {
        label: "if",
        detail: "block",
        type: "keyword"
      }), (0, tD.n)("if (${}) {\n\t${}\n} else {\n\t${}\n}", {
        label: "if",
        detail: "/ else block",
        type: "keyword"
      }), (0, tD.n)("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
        label: "class",
        detail: "definition",
        type: "keyword"
      }), (0, tD.n)('import {${names}} from "${module}"\n${}', {
        label: "import",
        detail: "named",
        type: "keyword"
      }), (0, tD.n)('import ${name} from "${module}"\n${}', {
        label: "import",
        detail: "default",
        type: "keyword"
      })],
      YD = FD.concat([(0, tD.n)("interface ${name} {\n\t${}\n}", {
        label: "interface",
        detail: "definition",
        type: "keyword"
      }), (0, tD.n)("type ${name} = ${type}", {
        label: "type",
        detail: "definition",
        type: "keyword"
      }), (0, tD.n)("enum ${name} {\n\t${}\n}", {
        label: "enum",
        detail: "definition",
        type: "keyword"
      })]),
      HD = new pD.m,
      qD = new Set(["Script", "Block", "FunctionExpression", "FunctionDeclaration", "ArrowFunction", "MethodDeclaration", "ForStatement"]);

    function Dz(DD) {
      return (zD, wD) => {
        let pD = zD.node.getChild("VariableDefinition");
        return pD && wD(pD, DD), !0
      }
    }
    const zz = ["FunctionDeclaration"],
      wz = {
        FunctionDeclaration: Dz("function"),
        ClassDeclaration: Dz("class"),
        ClassExpression: () => !0,
        EnumDeclaration: Dz("constant"),
        TypeAliasDeclaration: Dz("type"),
        NamespaceDeclaration: Dz("namespace"),
        VariableDefinition(DD, zD) {
          DD.matchContext(zz) || zD(DD, "variable")
        },
        TypeDefinition(DD, zD) {
          zD(DD, "type")
        },
        __proto__: null
      };

    function pz(DD, zD) {
      let wD = HD.get(zD);
      if (wD) return wD;
      let sD = [],
        KD = !0;

      function rD(zD, wD) {
        let pD = DD.sliceString(zD.from, zD.to);
        sD.push({
          label: pD,
          type: wD
        })
      }
      return zD.cursor(pD.f.IncludeAnonymous).iterate((zD => {
        if (KD) KD = !1;
        else if (zD.name) {
          let DD = wz[zD.name];
          if (DD && DD(zD, rD) || qD.has(zD.name)) return !1
        } else if (zD.to - zD.from > 8192) {
          for (let wD of pz(DD, zD.node)) sD.push(wD);
          return !1
        }
      })), HD.set(zD, sD), sD
    }
    const sz = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
      Kz = ["TemplateString", "String", "RegExp", "LineComment", "BlockComment", "VariableDefinition", "TypeDefinition", "Label", "PropertyDefinition", "PropertyName", "PrivatePropertyDefinition", "PrivatePropertyName", "JSXText", "JSXAttributeValue", "JSXOpenTag", "JSXCloseTag", "JSXSelfClosingTag", ".", "?."];

    function rz(DD) {
      let zD = (0, aD.jb)(DD.state).resolveInner(DD.pos, -1);
      if (Kz.indexOf(zD.name) > -1) return null;
      let wD = "VariableName" == zD.name || zD.to - zD.from < 20 && sz.test(DD.state.sliceDoc(zD.from, zD.to));
      if (!wD && !DD.explicit) return null;
      let pD = [];
      for (let sD = zD; sD; sD = sD.parent) qD.has(sD.name) && (pD = pD.concat(pz(DD.state.doc, sD)));
      return {
        options: pD,
        from: wD ? zD.from : DD.pos,
        validFor: sz
      }
    }
    const Lz = aD.l.define({
        name: "javascript",
        parser: oD.configure({
          props: [aD.Y.add({
            IfStatement: (0, aD.t)({
              except: /^\s*({|else\b)/
            }),
            TryStatement: (0, aD.t)({
              except: /^\s*({|catch\b|finally\b)/
            }),
            LabeledStatement: aD.G,
            SwitchBody: DD => {
              let zD = DD.textAfter,
                wD = /^\s*\}/.test(zD),
                pD = /^\s*(case|default)\b/.test(zD);
              return DD.baseIndent + (wD ? 0 : pD ? 1 : 2) * DD.unit
            },
            Block: (0, aD.E)({
              closing: "}"
            }),
            ArrowFunction: DD => DD.baseIndent + DD.unit,
            "TemplateString BlockComment": () => null,
            "Statement Property": (0, aD.t)({
              except: /^\s*{/
            }),
            JSXElement(DD) {
              let zD = /^\s*<\//.test(DD.textAfter);
              return DD.lineIndent(DD.node.from) + (zD ? 0 : DD.unit)
            },
            JSXEscape(DD) {
              let zD = /\s*\}/.test(DD.textAfter);
              return DD.lineIndent(DD.node.from) + (zD ? 0 : DD.unit)
            },
            "JSXOpenTag JSXSelfClosingTag": DD => DD.column(DD.node.from) + DD.unit
          }), aD.N.add({
            "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": aD.K,
            BlockComment: DD => ({
              from: DD.from + 2,
              to: DD.to - 2
            }),
            JSXElement(DD) {
              let zD = DD.firstChild;
              if (!zD || "JSXSelfClosingTag" == zD.name) return null;
              let wD = DD.lastChild;
              return {
                from: zD.to,
                to: wD.type.isError ? DD.to : wD.from
              }
            },
            "JSXSelfClosingTag JSXOpenTag"(DD) {
              var zD;
              let wD = null === (zD = DD.firstChild) || void 0 === zD ? void 0 : zD.nextSibling,
                pD = DD.lastChild;
              return !wD || wD.type.isError ? null : {
                from: wD.to,
                to: pD.type.isError ? DD.to : pD.from
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
      cz = {
        test: DD => /^JSX/.test(DD.name),
        facet: (0, aD.A)({
          commentTokens: {
            block: {
              open: "{/*",
              close: "*/}"
            }
          }
        })
      },
      gz = Lz.configure({
        dialect: "ts"
      }, "typescript"),
      Rz = Lz.configure({
        dialect: "jsx",
        props: [aD.db.add((DD => DD.isTop ? [cz] : void 0))]
      }),
      Az = Lz.configure({
        dialect: "jsx ts",
        props: [aD.db.add((DD => DD.isTop ? [cz] : void 0))]
      }, "typescript");
    let Uz = DD => ({
      label: DD,
      type: "keyword"
    });
    const fz = "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(Uz),
      Iz = fz.concat(["declare", "implements", "private", "protected", "public"].map(Uz));

    function Bz() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        zD = DD.jsx ? DD.typescript ? Az : Rz : DD.typescript ? gz : Lz,
        wD = DD.typescript ? YD.concat(Iz) : FD.concat(fz);
      return new aD.o(zD, [Lz.data.of({
        autocomplete: (0, tD.m)(Kz, (0, tD.i)(wD))
      }), Lz.data.of({
        autocomplete: rz
      }), DD.jsx ? nz : []])
    }

    function Gz(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : DD.length;
      for (let pD = null === zD || void 0 === zD ? void 0 : zD.firstChild; pD; pD = pD.nextSibling)
        if ("JSXIdentifier" == pD.name || "JSXBuiltin" == pD.name || "JSXNamespacedName" == pD.name || "JSXMemberExpression" == pD.name) return DD.sliceString(pD.from, Math.min(pD.to, wD));
      return ""
    }
    const hz = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      nz = vD.i.inputHandler.of(((DD, zD, wD, pD, sD) => {
        if ((hz ? DD.composing : DD.compositionStarted) || DD.state.readOnly || zD != wD || ">" != pD && "/" != pD || !Lz.isActiveAt(DD.state, zD, -1)) return !1;
        let KD = sD(),
          {
            state: rD
          } = KD,
          LD = rD.changeByRange((DD => {
            var zD;
            let wD, {
                head: sD
              } = DD,
              KD = (0, aD.jb)(rD).resolveInner(sD - 1, -1);
            if ("JSXStartTag" == KD.name && (KD = KD.parent), rD.doc.sliceString(sD - 1, sD) != pD || "JSXAttributeValue" == KD.name && KD.to > sD);
            else {
              if (">" == pD && "JSXFragmentTag" == KD.name) return {
                range: DD,
                changes: {
                  from: sD,
                  insert: "</>"
                }
              };
              if ("/" == pD && "JSXStartCloseTag" == KD.name) {
                let DD = KD.parent,
                  pD = DD.parent;
                if (pD && DD.from == sD - 2 && ((wD = Gz(rD.doc, pD.firstChild, sD)) || "JSXFragmentTag" == (null === (zD = pD.firstChild) || void 0 === zD ? void 0 : zD.name))) {
                  let DD = `${wD}>`;
                  return {
                    range: uD.j.cursor(sD + DD.length, -1),
                    changes: {
                      from: sD,
                      insert: DD
                    }
                  }
                }
              } else if (">" == pD) {
                let zD = function(DD) {
                  for (;;) {
                    if ("JSXOpenTag" == DD.name || "JSXSelfClosingTag" == DD.name || "JSXFragmentTag" == DD.name) return DD;
                    if ("JSXEscape" == DD.name || !DD.parent) return null;
                    DD = DD.parent
                  }
                }(KD);
                if (zD && "JSXOpenTag" == zD.name && !/^\/?>|^<\//.test(rD.doc.sliceString(sD, sD + 2)) && (wD = Gz(rD.doc, zD, sD))) return {
                  range: DD,
                  changes: {
                    from: sD,
                    insert: `</${wD}>`
                  }
                }
              }
            }
            return {
              range: DD
            }
          }));
        return !LD.changes.empty && (DD.dispatch([KD, rD.update(LD, {
          userEvent: "input.complete",
          scrollIntoView: !0
        })]), !0)
      }))
  },
  41231: (DD, zD, wD) => {
    wD.d(zD, {
      A: () => RD,
      E: () => kD,
      G: () => eD,
      I: () => nz,
      K: () => FD,
      L: () => gz,
      N: () => tD,
      R: () => hD,
      T: () => bD,
      X: () => dD,
      Y: () => iD,
      Z: () => uD,
      _: () => jD,
      ab: () => TD,
      bb: () => mz,
      db: () => AD,
      e: () => Oz,
      hb: () => Xz,
      i: () => SD,
      ib: () => GD,
      jb: () => BD,
      l: () => ID,
      o: () => CD,
      q: () => Nz,
      t: () => oD,
      x: () => Cz
    });
    var pD, sD = wD(41233),
      KD = wD(41212),
      rD = wD(41217),
      LD = wD(41239),
      cD = wD(41220);
    const gD = new sD.g;

    function RD(DD) {
      return KD.n.define({
        combine: DD ? zD => zD.concat(DD) : void 0
      })
    }
    const AD = new sD.g;
    class UD {
      constructor(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this.data = DD, this.name = pD, KD.k.prototype.hasOwnProperty("tree") || Object.defineProperty(KD.k.prototype, "tree", {
          get() {
            return BD(this)
          }
        }), this.parser = zD, this.extension = [PD.of(this), KD.k.languageData.of(((DD, zD, wD) => {
          let pD = fD(DD, zD, wD),
            sD = pD.type.prop(gD);
          if (!sD) return [];
          let KD = DD.facet(sD),
            rD = pD.type.prop(AD);
          if (rD) {
            let sD = pD.resolve(zD - pD.from, wD);
            for (let zD of rD)
              if (zD.test(sD, DD)) {
                let wD = DD.facet(zD.facet);
                return "replace" == zD.type ? wD : wD.concat(KD)
              }
          }
          return KD
        }))].concat(wD)
      }
      isActiveAt(DD, zD) {
        return fD(DD, zD, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1).type.prop(gD) == this.data
      }
      findRegions(DD) {
        let zD = DD.facet(PD);
        if ((null === zD || void 0 === zD ? void 0 : zD.data) == this.data) return [{
          from: 0,
          to: DD.doc.length
        }];
        if (!zD || !zD.allowsNesting) return [];
        let wD = [],
          pD = (DD, zD) => {
            if (DD.prop(gD) == this.data) return void wD.push({
              from: zD,
              to: zD + DD.length
            });
            let KD = DD.prop(sD.g.mounted);
            if (KD) {
              if (KD.tree.prop(gD) == this.data) {
                if (KD.overlay)
                  for (let DD of KD.overlay) wD.push({
                    from: DD.from + zD,
                    to: DD.to + zD
                  });
                else wD.push({
                  from: zD,
                  to: zD + DD.length
                });
                return
              }
              if (KD.overlay) {
                let DD = wD.length;
                if (pD(KD.tree, KD.overlay[0].from + zD), wD.length > DD) return
              }
            }
            for (let wD = 0; wD < DD.children.length; wD++) {
              let KD = DD.children[wD];
              KD instanceof sD.s && pD(KD, DD.positions[wD] + zD)
            }
          };
        return pD(BD(DD), 0), wD
      }
      get allowsNesting() {
        return !0
      }
    }

    function fD(DD, zD, wD) {
      let pD = DD.facet(PD),
        KD = BD(DD).topNode;
      if (!pD || pD.allowsNesting)
        for (let rD = KD; rD; rD = rD.enter(zD, wD, sD.f.ExcludeBuffers | sD.f.EnterBracketed)) rD.type.isTop && (KD = rD);
      return KD
    }
    UD.setState = KD.E.define();
    class ID extends UD {
      constructor(DD, zD, wD) {
        super(DD, zD, [], wD), this.parser = zD
      }
      static define(DD) {
        let zD = RD(DD.languageData);
        return new ID(zD, DD.parser.configure({
          props: [gD.add((DD => DD.isTop ? zD : void 0))]
        }), DD.name)
      }
      configure(DD, zD) {
        return new ID(this.data, this.parser.configure(DD), zD || this.name)
      }
      get allowsNesting() {
        return this.parser.hasWrappers()
      }
    }

    function BD(DD) {
      let zD = DD.field(UD.state, !1);
      return zD ? zD.tree : sD.s.empty
    }

    function GD(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DD.doc.length;
      var wD;
      return (null === (wD = DD.field(UD.state, !1)) || void 0 === wD ? void 0 : wD.context.isDone(zD)) || !1
    }

    function hD(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DD.viewport.to,
        wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        pD = function(DD, zD) {
          let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
          var pD;
          let sD = null === (pD = DD.field(UD.state, !1)) || void 0 === pD ? void 0 : pD.context;
          if (!sD) return null;
          let KD = sD.viewport;
          sD.updateViewport({
            from: 0,
            to: zD
          });
          let rD = sD.isDone(zD) || sD.work(wD, zD) ? sD.tree : null;
          return sD.updateViewport(KD), rD
        }(DD.state, zD, wD);
      return pD != BD(DD.state) && DD.dispatch({}), !!pD
    }
    class nD {
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
      read(DD, zD) {
        let wD = this.cursorPos - this.string.length;
        return DD < wD || zD >= this.cursorPos ? this.doc.sliceString(DD, zD) : this.string.slice(DD - wD, zD - wD)
      }
    }
    let MD = null;
    class OD {
      constructor(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          pD = arguments.length > 3 ? arguments[3] : void 0,
          sD = arguments.length > 4 ? arguments[4] : void 0,
          KD = arguments.length > 5 ? arguments[5] : void 0,
          rD = arguments.length > 6 ? arguments[6] : void 0,
          LD = arguments.length > 7 ? arguments[7] : void 0;
        this.parser = DD, this.state = zD, this.fragments = wD, this.tree = pD, this.treeLen = sD, this.viewport = KD, this.skipped = rD, this.scheduleOn = LD, this.parse = null, this.tempSkipped = []
      }
      static create(DD, zD, wD) {
        return new OD(DD, zD, [], sD.s.empty, 0, wD, [], null)
      }
      startParse() {
        return this.parser.startParse(new nD(this.state.doc), this.fragments)
      }
      work(DD, zD) {
        return null != zD && zD >= this.state.doc.length && (zD = void 0), this.tree != sD.s.empty && this.isDone(null !== zD && void 0 !== zD ? zD : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext((() => {
          var wD;
          if ("number" == typeof DD) {
            let zD = Date.now() + DD;
            DD = () => Date.now() > zD
          }
          for (this.parse || (this.parse = this.startParse()), null != zD && (null == this.parse.stoppedAt || this.parse.stoppedAt > zD) && zD < this.state.doc.length && this.parse.stopAt(zD);;) {
            let pD = this.parse.advance();
            if (pD) {
              if (this.fragments = this.withoutTempSkipped(sD.q.addTree(pD, this.fragments, null != this.parse.stoppedAt)), this.treeLen = null !== (wD = this.parse.stoppedAt) && void 0 !== wD ? wD : this.state.doc.length, this.tree = pD, this.parse = null, !(this.treeLen < (null !== zD && void 0 !== zD ? zD : this.state.doc.length))) return !0;
              this.parse = this.startParse()
            }
            if (DD()) return !1
          }
        }))
      }
      takeTree() {
        let DD, zD;
        this.parse && (DD = this.parse.parsedPos) >= this.treeLen && ((null == this.parse.stoppedAt || this.parse.stoppedAt > DD) && this.parse.stopAt(DD), this.withContext((() => {
          for (; !(zD = this.parse.advance()););
        })), this.treeLen = DD, this.tree = zD, this.fragments = this.withoutTempSkipped(sD.q.addTree(this.tree, this.fragments, !0)), this.parse = null)
      }
      withContext(DD) {
        let zD = MD;
        MD = this;
        try {
          return DD()
        } finally {
          MD = zD
        }
      }
      withoutTempSkipped(DD) {
        for (let zD; zD = this.tempSkipped.pop();) DD = JD(DD, zD.from, zD.to);
        return DD
      }
      changes(DD, zD) {
        let {
          fragments: wD,
          tree: pD,
          treeLen: KD,
          viewport: rD,
          skipped: LD
        } = this;
        if (this.takeTree(), !DD.empty) {
          let zD = [];
          if (DD.iterChangedRanges(((DD, wD, pD, sD) => zD.push({
              fromA: DD,
              toA: wD,
              fromB: pD,
              toB: sD
            }))), wD = sD.q.applyChanges(wD, zD), pD = sD.s.empty, KD = 0, rD = {
              from: DD.mapPos(rD.from, -1),
              to: DD.mapPos(rD.to, 1)
            }, this.skipped.length) {
            LD = [];
            for (let zD of this.skipped) {
              let wD = DD.mapPos(zD.from, 1),
                pD = DD.mapPos(zD.to, -1);
              wD < pD && LD.push({
                from: wD,
                to: pD
              })
            }
          }
        }
        return new OD(this.parser, zD, wD, pD, KD, rD, LD, this.scheduleOn)
      }
      updateViewport(DD) {
        if (this.viewport.from == DD.from && this.viewport.to == DD.to) return !1;
        this.viewport = DD;
        let zD = this.skipped.length;
        for (let wD = 0; wD < this.skipped.length; wD++) {
          let {
            from: zD,
            to: pD
          } = this.skipped[wD];
          zD < DD.to && pD > DD.from && (this.fragments = JD(this.fragments, zD, pD), this.skipped.splice(wD--, 1))
        }
        return !(this.skipped.length >= zD) && (this.reset(), !0)
      }
      reset() {
        this.parse && (this.takeTree(), this.parse = null)
      }
      skipUntilInView(DD, zD) {
        this.skipped.push({
          from: DD,
          to: zD
        })
      }
      static getSkippingParser(DD) {
        return new class extends sD.n {
          createParse(zD, wD, pD) {
            let KD = pD[0].from,
              rD = pD[pD.length - 1].to;
            return {
              parsedPos: KD,
              advance() {
                let zD = MD;
                if (zD) {
                  for (let DD of pD) zD.tempSkipped.push(DD);
                  DD && (zD.scheduleOn = zD.scheduleOn ? Promise.all([zD.scheduleOn, DD]) : DD)
                }
                return this.parsedPos = rD, new sD.s(sD.i.none, [], [], rD - KD)
              },
              stoppedAt: null,
              stopAt() {}
            }
          }
        }
      }
      isDone(DD) {
        DD = Math.min(DD, this.state.doc.length);
        let zD = this.fragments;
        return this.treeLen >= DD && zD.length && 0 == zD[0].from && zD[0].to >= DD
      }
      static get() {
        return MD
      }
    }

    function JD(DD, zD, wD) {
      return sD.q.applyChanges(DD, [{
        fromA: zD,
        toA: wD,
        fromB: zD,
        toB: wD
      }])
    }
    class ED {
      constructor(DD) {
        this.context = DD, this.tree = DD.tree
      }
      apply(DD) {
        if (!DD.docChanged && this.tree == this.context.tree) return this;
        let zD = this.context.changes(DD.changes, DD.state),
          wD = this.context.treeLen == DD.startState.doc.length ? void 0 : Math.max(DD.changes.mapPos(this.context.treeLen), zD.viewport.to);
        return zD.work(20, wD) || zD.takeTree(), new ED(zD)
      }
      static init(DD) {
        let zD = Math.min(3e3, DD.doc.length),
          wD = OD.create(DD.facet(PD).parser, DD, {
            from: 0,
            to: zD
          });
        return wD.work(20, zD) || wD.takeTree(), new ED(wD)
      }
    }
    UD.state = KD.G.define({
      create: ED.init,
      update(DD, zD) {
        for (let wD of zD.effects)
          if (wD.is(UD.setState)) return wD.value;
        return zD.startState.facet(PD) != zD.state.facet(PD) ? ED.init(zD.state) : DD.apply(zD)
      }
    });
    let QD = DD => {
      let zD = setTimeout((() => DD()), 500);
      return () => clearTimeout(zD)
    };
    "undefined" != typeof requestIdleCallback && (QD = DD => {
      let zD = -1,
        wD = setTimeout((() => {
          zD = requestIdleCallback(DD, {
            timeout: 400
          })
        }), 100);
      return () => zD < 0 ? clearTimeout(wD) : cancelIdleCallback(zD)
    });
    const XD = "undefined" != typeof navigator && (null === (pD = navigator.scheduling) || void 0 === pD ? void 0 : pD.isInputPending) ? () => navigator.scheduling.isInputPending() : null,
      VD = rD.n.fromClass(class {
        constructor(DD) {
          this.view = DD, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork()
        }
        update(DD) {
          let zD = this.view.state.field(UD.state).context;
          (zD.updateViewport(DD.view.viewport) || this.view.viewport.to > zD.treeLen) && this.scheduleWork(), (DD.docChanged || DD.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(zD)
        }
        scheduleWork() {
          if (this.working) return;
          let {
            state: DD
          } = this.view, zD = DD.field(UD.state);
          zD.tree == zD.context.tree && zD.context.isDone(DD.doc.length) || (this.working = QD(this.work))
        }
        work(DD) {
          this.working = null;
          let zD = Date.now();
          if (this.chunkEnd < zD && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = zD + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
          let {
            state: wD,
            viewport: {
              to: pD
            }
          } = this.view, sD = wD.field(UD.state);
          if (sD.tree == sD.context.tree && sD.context.isDone(pD + 1e5)) return;
          let KD = Date.now() + Math.min(this.chunkBudget, 100, DD && !XD ? Math.max(25, DD.timeRemaining() - 5) : 1e9),
            rD = sD.context.treeLen < pD && wD.doc.length > pD + 1e3,
            LD = sD.context.work((() => XD && XD() || Date.now() > KD), pD + (rD ? 0 : 1e5));
          this.chunkBudget -= Date.now() - zD, (LD || this.chunkBudget <= 0) && (sD.context.takeTree(), this.view.dispatch({
            effects: UD.setState.of(new ED(sD.context))
          })), this.chunkBudget > 0 && (!LD || rD) && this.scheduleWork(), this.checkAsyncSchedule(sD.context)
        }
        checkAsyncSchedule(DD) {
          DD.scheduleOn && (this.workScheduled++, DD.scheduleOn.then((() => this.scheduleWork())).catch((DD => (0, rD.cb)(this.view.state, DD))).then((() => this.workScheduled--)), DD.scheduleOn = null)
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
      PD = KD.n.define({
        combine: DD => DD.length ? DD[0] : null,
        enables: DD => [UD.state, VD, rD.i.contentAttributes.compute([DD], (zD => {
          let wD = zD.facet(DD);
          return wD && wD.name ? {
            "data-language": wD.name
          } : {}
        }))]
      });
    class CD {
      constructor(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        this.language = DD, this.support = zD, this.extension = [DD, zD]
      }
    }
    const xD = KD.n.define(),
      TD = KD.n.define({
        combine: DD => {
          if (!DD.length) return "  ";
          let zD = DD[0];
          if (!zD || /\S/.test(zD) || Array.from(zD).some((DD => DD != zD[0]))) throw new Error("Invalid indent unit: " + JSON.stringify(DD[0]));
          return zD
        }
      });

    function bD(DD) {
      let zD = DD.facet(TD);
      return 9 == zD.charCodeAt(0) ? DD.tabSize * zD.length : zD.length
    }

    function jD(DD, zD) {
      let wD = "",
        pD = DD.tabSize,
        sD = DD.facet(TD)[0];
      if ("\t" == sD) {
        for (; zD >= pD;) wD += "\t", zD -= pD;
        sD = " "
      }
      for (let KD = 0; KD < zD; KD++) wD += sD;
      return wD
    }

    function dD(DD, zD) {
      DD instanceof KD.k && (DD = new SD(DD));
      for (let pD of DD.state.facet(xD)) {
        let wD = pD(DD, zD);
        if (void 0 !== wD) return wD
      }
      let wD = BD(DD.state);
      return wD.length >= zD ? function(DD, zD, wD) {
        let pD = zD.resolveStack(wD),
          sD = zD.resolveInner(wD, -1).resolve(wD, 0).enterUnfinishedNodesBefore(wD);
        if (sD != pD.node) {
          let DD = [];
          for (let zD = sD; zD && !(zD.from < pD.node.from || zD.to > pD.node.to || zD.from == pD.node.from && zD.type == pD.node.type); zD = zD.parent) DD.push(zD);
          for (let zD = DD.length - 1; zD >= 0; zD--) pD = {
            node: DD[zD],
            next: pD
          }
        }
        return lD(pD, DD, wD)
      }(DD, wD, zD) : null
    }
    class SD {
      constructor(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.state = DD, this.options = zD, this.unit = bD(DD)
      }
      lineAt(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          wD = this.state.doc.lineAt(DD),
          {
            simulateBreak: pD,
            simulateDoubleBreak: sD
          } = this.options;
        return null != pD && pD >= wD.from && pD <= wD.to ? sD && pD == DD ? {
          text: "",
          from: DD
        } : (zD < 0 ? pD < DD : pD <= DD) ? {
          text: wD.text.slice(pD - wD.from),
          from: pD
        } : {
          text: wD.text.slice(0, pD - wD.from),
          from: wD.from
        } : wD
      }
      textAfterPos(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (this.options.simulateDoubleBreak && DD == this.options.simulateBreak) return "";
        let {
          text: wD,
          from: pD
        } = this.lineAt(DD, zD);
        return wD.slice(DD - pD, Math.min(wD.length, DD + 100 - pD))
      }
      column(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: wD,
            from: pD
          } = this.lineAt(DD, zD),
          sD = this.countColumn(wD, DD - pD),
          KD = this.options.overrideIndentation ? this.options.overrideIndentation(pD) : -1;
        return KD > -1 && (sD += KD - this.countColumn(wD, wD.search(/\S|$/))), sD
      }
      countColumn(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DD.length;
        return (0, KD.Z)(DD, this.state.tabSize, zD)
      }
      lineIndent(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: wD,
            from: pD
          } = this.lineAt(DD, zD),
          sD = this.options.overrideIndentation;
        if (sD) {
          let DD = sD(pD);
          if (DD > -1) return DD
        }
        return this.countColumn(wD, wD.search(/\S|$/))
      }
      get simulatedBreak() {
        return this.options.simulateBreak || null
      }
    }
    const iD = new sD.g;

    function lD(DD, zD, wD) {
      for (let pD = DD; pD; pD = pD.next) {
        let DD = WD(pD.node);
        if (DD) return DD(ZD.create(zD, wD, pD))
      }
      return 0
    }

    function WD(DD) {
      let zD = DD.type.prop(iD);
      if (zD) return zD;
      let wD, pD = DD.firstChild;
      if (pD && (wD = pD.type.prop(sD.g.closedBy))) {
        let zD = DD.lastChild,
          pD = zD && wD.indexOf(zD.name) > -1;
        return DD => mD(DD, !0, 1, void 0, pD && ! function(DD) {
          return DD.pos == DD.options.simulateBreak && DD.options.simulateDoubleBreak
        }(DD) ? zD.from : void 0)
      }
      return null == DD.parent ? ND : null
    }

    function ND() {
      return 0
    }
    class ZD extends SD {
      constructor(DD, zD, wD) {
        super(DD.state, DD.options), this.base = DD, this.pos = zD, this.context = wD
      }
      get node() {
        return this.context.node
      }
      static create(DD, zD, wD) {
        return new ZD(DD, zD, wD)
      }
      get textAfter() {
        return this.textAfterPos(this.pos)
      }
      get baseIndent() {
        return this.baseIndentFor(this.node)
      }
      baseIndentFor(DD) {
        let zD = this.state.doc.lineAt(DD.from);
        for (;;) {
          let wD = DD.resolve(zD.from);
          for (; wD.parent && wD.parent.from == wD.from;) wD = wD.parent;
          if (yD(wD, DD)) break;
          zD = this.state.doc.lineAt(wD.from)
        }
        return this.lineIndent(zD.from)
      }
      continue () {
        return lD(this.context.next, this.base, this.pos)
      }
    }

    function yD(DD, zD) {
      for (let wD = zD; wD; wD = wD.parent)
        if (DD == wD) return !0;
      return !1
    }

    function kD(DD) {
      let {
        closing: zD,
        align: wD = !0,
        units: pD = 1
      } = DD;
      return DD => mD(DD, wD, pD, zD)
    }

    function mD(DD, zD, wD, pD, sD) {
      let KD = DD.textAfter,
        rD = KD.match(/^\s*/)[0].length,
        LD = pD && KD.slice(rD, rD + pD.length) == pD || sD == DD.pos + rD,
        cD = zD ? function(DD) {
          let zD = DD.node,
            wD = zD.childAfter(zD.from),
            pD = zD.lastChild;
          if (!wD) return null;
          let sD = DD.options.simulateBreak,
            KD = DD.state.doc.lineAt(wD.from),
            rD = null == sD || sD <= KD.from ? KD.to : Math.min(KD.to, sD);
          for (let LD = wD.to;;) {
            let DD = zD.childAfter(LD);
            if (!DD || DD == pD) return null;
            if (!DD.type.isSkipped) {
              if (DD.from >= rD) return null;
              let zD = /^ */.exec(KD.text.slice(wD.to - KD.from))[0].length;
              return {
                from: wD.from,
                to: wD.to + zD
              }
            }
            LD = DD.to
          }
        }(DD) : null;
      return cD ? LD ? DD.column(cD.from) : DD.column(cD.to) : DD.baseIndent + (LD ? 0 : DD.unit * wD)
    }
    const eD = DD => DD.baseIndent;

    function oD() {
      let {
        except: DD,
        units: zD = 1
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return wD => {
        let pD = DD && DD.test(wD.textAfter);
        return wD.baseIndent + (pD ? 0 : zD * wD.unit)
      }
    }
    const aD = 200;

    function uD() {
      return KD.k.transactionFilter.of((DD => {
        if (!DD.docChanged || !DD.isUserEvent("input.type") && !DD.isUserEvent("input.complete")) return DD;
        let zD = DD.startState.languageDataAt("indentOnInput", DD.startState.selection.main.head);
        if (!zD.length) return DD;
        let wD = DD.newDoc,
          {
            head: pD
          } = DD.newSelection.main,
          sD = wD.lineAt(pD);
        if (pD > sD.from + aD) return DD;
        let KD = wD.sliceString(sD.from, pD);
        if (!zD.some((DD => DD.test(KD)))) return DD;
        let {
          state: rD
        } = DD, LD = -1, cD = [];
        for (let {
            head: gD
          }
          of rD.selection.rG) {
          let DD = rD.doc.lineAt(gD);
          if (DD.from == LD) continue;
          LD = DD.from;
          let zD = dD(rD, DD.from);
          if (null == zD) continue;
          let wD = /^\s*/.exec(DD.text)[0],
            pD = jD(rD, zD);
          wD != pD && cD.push({
            from: DD.from,
            to: DD.from + wD.length,
            insert: pD
          })
        }
        return cD.length ? [DD, {
          changes: cD,
          sequential: !0
        }] : DD
      }))
    }
    const vD = KD.n.define(),
      tD = new sD.g;

    function FD(DD) {
      let zD = DD.firstChild,
        wD = DD.lastChild;
      return zD && zD.to < wD.from ? {
        from: zD.to,
        to: wD.type.isError ? DD.to : wD.from
      } : null
    }

    function YD(DD) {
      let zD = DD.lastChild;
      return zD && zD.to == DD.to && zD.type.isError
    }

    function HD(DD, zD, wD) {
      for (let pD of DD.facet(vD)) {
        let sD = pD(DD, zD, wD);
        if (sD) return sD
      }
      return function(DD, zD, wD) {
        let pD = BD(DD);
        if (pD.length < wD) return null;
        let sD = null;
        for (let KD = pD.resolveStack(wD, 1); KD; KD = KD.next) {
          let rD = KD.node;
          if (rD.to <= wD || rD.from > wD) continue;
          if (sD && rD.from < zD) break;
          let LD = rD.type.prop(tD);
          if (LD && (rD.to < pD.length - 50 || pD.length == DD.doc.length || !YD(rD))) {
            let pD = LD(rD, DD);
            pD && pD.from <= wD && pD.from >= zD && pD.to > wD && (sD = pD)
          }
        }
        return sD
      }(DD, zD, wD)
    }

    function qD(DD, zD) {
      let wD = zD.mapPos(DD.from, 1),
        pD = zD.mapPos(DD.to, -1);
      return wD >= pD ? void 0 : {
        from: wD,
        to: pD
      }
    }
    const Dz = KD.E.define({
        map: qD
      }),
      zz = KD.E.define({
        map: qD
      });

    function wz(DD) {
      let zD = [];
      for (let {
          head: wD
        }
        of DD.state.selection.rG) zD.some((DD => DD.from <= wD && DD.to >= wD)) || zD.push(DD.lineBlockAt(wD));
      return zD
    }
    const pz = KD.G.define({
      create: () => rD.d.none,
      update(DD, zD) {
        zD.isUserEvent("delete") && zD.changes.iterChangedRanges(((zD, wD) => DD = sz(DD, zD, wD))), DD = DD.map(zD.changes);
        for (let wD of zD.effects)
          if (wD.is(Dz) && !rz(DD, wD.value.from, wD.value.to)) {
            let {
              preparePlaceholder: pD
            } = zD.state.facet(Az), sD = pD ? rD.d.replace({
              widget: new Bz(pD(zD.state, wD.value))
            }) : Iz;
            DD = DD.update({
              add: [sD.range(wD.value.from, wD.value.to)]
            })
          } else wD.is(zz) && (DD = DD.update({
            filter: (DD, zD) => wD.value.from != DD || wD.value.to != zD,
            filterFrom: wD.value.from,
            filterTo: wD.value.to
          }));
        return zD.selection && (DD = sz(DD, zD.selection.main.head)), DD
      },
      provide: DD => rD.i.BD.from(DD),
      toJSON(DD, zD) {
        let wD = [];
        return DD.between(0, zD.doc.length, ((DD, zD) => {
          wD.push(DD, zD)
        })), wD
      },
      fromJSON(DD) {
        if (!Array.isArray(DD) || DD.length % 2) throw new RangeError("Invalid JSON for fold state");
        let zD = [];
        for (let wD = 0; wD < DD.length;) {
          let pD = DD[wD++],
            sD = DD[wD++];
          if ("number" != typeof pD || "number" != typeof sD) throw new RangeError("Invalid JSON for fold state");
          zD.push(Iz.range(pD, sD))
        }
        return rD.d.set(zD, !0)
      }
    });

    function sz(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zD,
        pD = !1;
      return DD.between(zD, wD, ((DD, sD) => {
        DD < wD && sD > zD && (pD = !0)
      })), pD ? DD.update({
        filterFrom: zD,
        filterTo: wD,
        filter: (DD, pD) => DD >= wD || pD <= zD
      }) : DD
    }

    function Kz(DD, zD, wD) {
      var pD;
      let sD = null;
      return null === (pD = DD.field(pz, !1)) || void 0 === pD || pD.between(zD, wD, ((DD, zD) => {
        (!sD || sD.from > DD) && (sD = {
          from: DD,
          to: zD
        })
      })), sD
    }

    function rz(DD, zD, wD) {
      let pD = !1;
      return DD.between(zD, zD, ((DD, sD) => {
        DD == zD && sD == wD && (pD = !0)
      })), pD
    }

    function Lz(DD, zD) {
      return DD.field(pz, !1) ? zD : zD.concat(KD.E.appendConfig.of(Uz()))
    }

    function cz(DD, zD) {
      let wD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        pD = DD.state.doc.lineAt(zD.from).number,
        sD = DD.state.doc.lineAt(zD.to).number;
      return rD.i.announce.of(`${DD.state.phrase(wD?"Folded lines":"Unfolded lines")} ${pD} ${DD.state.phrase("to")} ${sD}.`)
    }
    const gz = [{
        key: "Ctrl-Shift-[",
        mac: "Cmd-Alt-[",
        run: DD => {
          for (let zD of wz(DD)) {
            let wD = HD(DD.state, zD.from, zD.to);
            if (wD) return DD.dispatch({
              effects: Lz(DD.state, [Dz.of(wD), cz(DD, wD)])
            }), !0
          }
          return !1
        }
      }, {
        key: "Ctrl-Shift-]",
        mac: "Cmd-Alt-]",
        run: DD => {
          if (!DD.state.field(pz, !1)) return !1;
          let zD = [];
          for (let wD of wz(DD)) {
            let pD = Kz(DD.state, wD.from, wD.to);
            pD && zD.push(zz.of(pD), cz(DD, pD, !1))
          }
          return zD.length && DD.dispatch({
            effects: zD
          }), zD.length > 0
        }
      }, {
        key: "Ctrl-Alt-[",
        run: DD => {
          let {
            state: zD
          } = DD, wD = [];
          for (let pD = 0; pD < zD.doc.length;) {
            let sD = DD.lineBlockAt(pD),
              KD = HD(zD, sD.from, sD.to);
            KD && wD.push(Dz.of(KD)), pD = (KD ? DD.lineBlockAt(KD.to) : sD).to + 1
          }
          return wD.length && DD.dispatch({
            effects: Lz(DD.state, wD)
          }), !!wD.length
        }
      }, {
        key: "Ctrl-Alt-]",
        run: DD => {
          let zD = DD.state.field(pz, !1);
          if (!zD || !zD.size) return !1;
          let wD = [];
          return zD.between(0, DD.state.doc.length, ((DD, zD) => {
            wD.push(zz.of({
              from: DD,
              to: zD
            }))
          })), DD.dispatch({
            effects: wD
          }), !0
        }
      }],
      Rz = {
        placeholderDOM: null,
        preparePlaceholder: null,
        placeholderText: "\u2026"
      },
      Az = KD.n.define({
        combine: DD => (0, KD.W)(DD, Rz)
      });

    function Uz(DD) {
      let zD = [pz, Mz];
      return DD && zD.push(Az.of(DD)), zD
    }

    function fz(DD, zD) {
      let {
        state: wD
      } = DD, pD = wD.facet(Az), sD = zD => {
        let wD = DD.lineBlockAt(DD.posAtDOM(zD.target)),
          pD = Kz(DD.state, wD.from, wD.to);
        pD && DD.dispatch({
          effects: zz.of(pD)
        }), zD.preventDefault()
      };
      if (pD.placeholderDOM) return pD.placeholderDOM(DD, sD, zD);
      let KD = document.createElement("span");
      return KD.textContent = pD.placeholderText, KD.setAttribute("aria-label", wD.phrase("folded code")), KD.title = wD.phrase("unfold"), KD.className = "cm-foldPlaceholder", KD.onclick = sD, KD
    }
    const Iz = rD.d.replace({
      widget: new class extends rD.r {
        toDOM(DD) {
          return fz(DD, null)
        }
      }
    });
    class Bz extends rD.r {
      constructor(DD) {
        super(), this.value = DD
      }
      eq(DD) {
        return this.value == DD.value
      }
      toDOM(DD) {
        return fz(DD, this.value)
      }
    }
    const Gz = {
      openText: "\u2304",
      closedText: "\u203a",
      markerDOM: null,
      domEventHandlers: {},
      foldingChanged: () => !1
    };
    class hz extends rD.j {
      constructor(DD, zD) {
        super(), this.config = DD, this.open = zD
      }
      eq(DD) {
        return this.config == DD.config && this.open == DD.open
      }
      toDOM(DD) {
        if (this.config.markerDOM) return this.config.markerDOM(this.open);
        let zD = document.createElement("span");
        return zD.textContent = this.open ? this.config.openText : this.config.closedText, zD.title = DD.state.phrase(this.open ? "Fold line" : "Unfold line"), zD
      }
    }

    function nz() {
      let DD = {
          ...Gz,
          ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        },
        zD = new hz(DD, !0),
        wD = new hz(DD, !1),
        pD = rD.n.fromClass(class {
          constructor(DD) {
            this.from = DD.viewport.from, this.markers = this.buildMarkers(DD)
          }
          update(zD) {
            (zD.docChanged || zD.viewportChanged || zD.startState.facet(PD) != zD.state.facet(PD) || zD.startState.field(pz, !1) != zD.state.field(pz, !1) || BD(zD.startState) != BD(zD.state) || DD.foldingChanged(zD)) && (this.markers = this.buildMarkers(zD.view))
          }
          buildMarkers(DD) {
            let pD = new KD.v;
            for (let sD of DD.viewportLineBlocks) {
              let KD = Kz(DD.state, sD.from, sD.to) ? wD : HD(DD.state, sD.from, sD.to) ? zD : null;
              KD && pD.add(sD.from, sD.from, KD)
            }
            return pD.finish()
          }
        }),
        {
          domEventHandlers: sD
        } = DD;
      return [pD, (0, rD.L)({
        class: "cm-foldGutter",
        markers(DD) {
          var zD;
          return (null === (zD = DD.plugin(pD)) || void 0 === zD ? void 0 : zD.markers) || KD.z.empty
        },
        initialSpacer: () => new hz(DD, !1),
        domEventHandlers: {
          ...sD,
          click: (DD, zD, wD) => {
            if (sD.click && sD.click(DD, zD, wD)) return !0;
            let pD = Kz(DD.state, zD.from, zD.to);
            if (pD) return DD.dispatch({
              effects: zz.of(pD)
            }), !0;
            let KD = HD(DD.state, zD.from, zD.to);
            return !!KD && (DD.dispatch({
              effects: Dz.of(KD)
            }), !0)
          }
        }
      }), Uz()]
    }
    const Mz = rD.i.baseTheme({
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
    class Oz {
      constructor(DD, zD) {
        let wD;

        function pD(DD) {
          let zD = cD.b.newName();
          return (wD || (wD = Object.create(null)))["." + zD] = DD, zD
        }
        this.specs = DD;
        const sD = "string" == typeof zD.all ? zD.all : zD.all ? pD(zD.all) : void 0,
          KD = zD.scope;
        this.scope = KD instanceof UD ? DD => DD.prop(gD) == KD.data : KD ? DD => DD == KD : void 0, this.style = (0, LD.k)(DD.map((DD => ({
          tag: DD.tag,
          class: DD.class || pD(Object.assign({}, DD, {
            tag: null
          }))
        }))), {
          all: sD
        }).style, this.module = wD ? new cD.b(wD) : null, this.themeType = zD.themeType
      }
      static define(DD, zD) {
        return new Oz(DD, zD || {})
      }
    }
    const Jz = KD.n.define(),
      Ez = KD.n.define({
        combine: DD => DD.length ? [DD[0]] : null
      });

    function Qz(DD) {
      let zD = DD.facet(Jz);
      return zD.length ? zD : DD.facet(Ez)
    }

    function Xz(DD, zD) {
      let wD, pD = [Pz];
      return DD instanceof Oz && (DD.module && pD.push(rD.i.styleModule.of(DD.module)), wD = DD.themeType), (null === zD || void 0 === zD ? void 0 : zD.fallback) ? pD.push(Ez.of(DD)) : wD ? pD.push(Jz.computeN([rD.i.darkTheme], (zD => zD.facet(rD.i.darkTheme) == ("dark" == wD) ? [DD] : []))) : pD.push(Jz.of(DD)), pD
    }
    class Vz {
      constructor(DD) {
        this.markCache = Object.create(null), this.tree = BD(DD.state), this.BD = this.buildDeco(DD, Qz(DD.state)), this.decoratedTo = DD.viewport.to
      }
      update(DD) {
        let zD = BD(DD.state),
          wD = Qz(DD.state),
          pD = wD != Qz(DD.startState),
          {
            viewport: sD
          } = DD.view,
          KD = DD.changes.mapPos(this.decoratedTo, 1);
        zD.length < sD.to && !pD && zD.type == this.tree.type && KD >= sD.to ? (this.BD = this.BD.map(DD.changes), this.decoratedTo = KD) : (zD != this.tree || DD.viewportChanged || pD) && (this.tree = zD, this.BD = this.buildDeco(DD.view, wD), this.decoratedTo = sD.to)
      }
      buildDeco(DD, zD) {
        if (!zD || !this.tree.length) return rD.d.none;
        let wD = new KD.v;
        for (let {
            from: pD,
            to: sD
          }
          of DD.w6)(0, LD.d)(this.tree, zD, ((DD, zD, pD) => {
          wD.add(DD, zD, this.markCache[pD] || (this.markCache[pD] = rD.d.mark({
            class: pD
          })))
        }), pD, sD);
        return wD.finish()
      }
    }
    const Pz = KD.u.high(rD.n.fromClass(Vz, {
        BD: DD => DD.BD
      })),
      Cz = Oz.define([{
        tag: LD.n.meta,
        color: "#404740"
      }, {
        tag: LD.n.link,
        textDecoration: "underline"
      }, {
        tag: LD.n.heading,
        textDecoration: "underline",
        fontWeight: "bold"
      }, {
        tag: LD.n.emphasis,
        fontStyle: "italic"
      }, {
        tag: LD.n.strong,
        fontWeight: "bold"
      }, {
        tag: LD.n.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: LD.n.keyword,
        color: "#708"
      }, {
        tag: [LD.n.atom, LD.n.bool, LD.n.url, LD.n.contentSeparator, LD.n.labelName],
        color: "#219"
      }, {
        tag: [LD.n.literal, LD.n.inserted],
        color: "#164"
      }, {
        tag: [LD.n.string, LD.n.deleted],
        color: "#a11"
      }, {
        tag: [LD.n.regexp, LD.n.escape, LD.n.special(LD.n.string)],
        color: "#e40"
      }, {
        tag: LD.n.definition(LD.n.variableName),
        color: "#00f"
      }, {
        tag: LD.n.local(LD.n.variableName),
        color: "#30a"
      }, {
        tag: [LD.n.typeName, LD.n.namespace],
        color: "#085"
      }, {
        tag: LD.n.className,
        color: "#167"
      }, {
        tag: [LD.n.special(LD.n.variableName), LD.n.macroName],
        color: "#256"
      }, {
        tag: LD.n.definition(LD.n.propertyName),
        color: "#00c"
      }, {
        tag: LD.n.comment,
        color: "#940"
      }, {
        tag: LD.n.invalid,
        color: "#f00"
      }]),
      xz = rD.i.baseTheme({
        "&.cm-focused .cm-matchingBracket": {
          backgroundColor: "#328c8252"
        },
        "&.cm-focused .cm-nonmatchingBracket": {
          backgroundColor: "#bb555544"
        }
      }),
      Tz = 1e4,
      bz = "()[]{}",
      jz = KD.n.define({
        combine: DD => (0, KD.W)(DD, {
          afterCursor: !0,
          brackets: bz,
          maxScanDistance: Tz,
          renderMatch: iz
        })
      }),
      dz = rD.d.mark({
        class: "cm-matchingBracket"
      }),
      Sz = rD.d.mark({
        class: "cm-nonmatchingBracket"
      });

    function iz(DD) {
      let zD = [],
        wD = DD.matched ? dz : Sz;
      return zD.push(wD.range(DD.start.from, DD.start.to)), DD.end && zD.push(wD.range(DD.end.from, DD.end.to)), zD
    }

    function lz(DD) {
      let zD = [],
        wD = DD.facet(jz);
      for (let pD of DD.selection.rG) {
        if (!pD.empty) continue;
        let sD = mz(DD, pD.head, -1, wD) || pD.head > 0 && mz(DD, pD.head - 1, 1, wD) || wD.afterCursor && (mz(DD, pD.head, 1, wD) || pD.head < DD.doc.length && mz(DD, pD.head + 1, -1, wD));
        sD && (zD = zD.concat(wD.renderMatch(sD, DD)))
      }
      return rD.d.set(zD, !0)
    }
    const Wz = [rD.n.fromClass(class {
      constructor(DD) {
        this.paused = !1, this.BD = lz(DD.state)
      }
      update(DD) {
        (DD.docChanged || DD.selectionSet || this.paused) && (DD.view.composing ? (this.BD = this.BD.map(DD.changes), this.paused = !0) : (this.BD = lz(DD.state), this.paused = !1))
      }
    }, {
      BD: DD => DD.BD
    }), xz];

    function Nz() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [jz.of(DD), Wz]
    }
    const Zz = new sD.g;

    function yz(DD, zD, wD) {
      let pD = DD.prop(zD < 0 ? sD.g.openedBy : sD.g.closedBy);
      if (pD) return pD;
      if (1 == DD.name.length) {
        let pD = wD.indexOf(DD.name);
        if (pD > -1 && pD % 2 == (zD < 0 ? 1 : 0)) return [wD[pD + zD]]
      }
      return null
    }

    function kz(DD) {
      let zD = DD.type.prop(Zz);
      return zD ? zD(DD.node) : DD
    }

    function mz(DD, zD, wD) {
      let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        sD = pD.maxScanDistance || Tz,
        KD = pD.brackets || bz,
        rD = BD(DD),
        LD = rD.resolveInner(zD, wD);
      for (let cD = LD; cD; cD = cD.parent) {
        let pD = yz(cD.type, wD, KD);
        if (pD && cD.from < cD.to) {
          let sD = kz(cD);
          if (sD && (wD > 0 ? zD >= sD.from && zD < sD.to : zD > sD.from && zD <= sD.to)) return ez(DD, zD, wD, cD, sD, pD, KD)
        }
      }
      return function(DD, zD, wD, pD, sD, KD, rD) {
        if (wD < 0 ? !zD : zD == DD.doc.length) return null;
        let LD = wD < 0 ? DD.sliceDoc(zD - 1, zD) : DD.sliceDoc(zD, zD + 1),
          cD = rD.indexOf(LD);
        if (cD < 0 || cD % 2 == 0 != wD > 0) return null;
        let gD = {
            from: wD < 0 ? zD - 1 : zD,
            to: wD > 0 ? zD + 1 : zD
          },
          RD = DD.doc.iterRange(zD, wD > 0 ? DD.doc.length : 0),
          AD = 0;
        for (let UD = 0; !RD.next().done && UD <= KD;) {
          let DD = RD.value;
          wD < 0 && (UD += DD.length);
          let KD = zD + UD * wD;
          for (let zD = wD > 0 ? 0 : DD.length - 1, LD = wD > 0 ? DD.length : -1; zD != LD; zD += wD) {
            let LD = rD.indexOf(DD[zD]);
            if (!(LD < 0 || pD.resolveInner(KD + zD, 1).type != sD))
              if (LD % 2 == 0 == wD > 0) AD++;
              else {
                if (1 == AD) return {
                  start: gD,
                  end: {
                    from: KD + zD,
                    to: KD + zD + 1
                  },
                  matched: LD >> 1 == cD >> 1
                };
                AD--
              }
          }
          wD > 0 && (UD += DD.length)
        }
        return RD.done ? {
          start: gD,
          matched: !1
        } : null
      }(DD, zD, wD, rD, LD.type, sD, KD)
    }

    function ez(DD, zD, wD, pD, sD, KD, rD) {
      let LD = pD.parent,
        cD = {
          from: sD.from,
          to: sD.to
        },
        gD = 0,
        RD = null === LD || void 0 === LD ? void 0 : LD.cursor();
      if (RD && (wD < 0 ? RD.childBefore(pD.from) : RD.childAfter(pD.to)))
        do {
          if (wD < 0 ? RD.to <= pD.from : RD.from >= pD.to) {
            if (0 == gD && KD.indexOf(RD.type.name) > -1 && RD.from < RD.to) {
              let DD = kz(RD);
              return {
                start: cD,
                end: DD ? {
                  from: DD.from,
                  to: DD.to
                } : void 0,
                matched: !0
              }
            }
            if (yz(RD.type, wD, rD)) gD++;
            else if (yz(RD.type, -wD, rD)) {
              if (0 == gD) {
                let DD = kz(RD);
                return {
                  start: cD,
                  end: DD && DD.from < DD.to ? {
                    from: DD.from,
                    to: DD.to
                  } : void 0,
                  matched: !1
                }
              }
              gD--
            }
          }
        } while (wD < 0 ? RD.prevSibling() : RD.nextSibling());
      return {
        start: cD,
        matched: !1
      }
    }
    const oz = Object.create(null),
      az = [sD.i.none],
      uz = [],
      vz = Object.create(null),
      tz = Object.create(null);
    for (let [Hz, qz] of [
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
      ]) tz[Hz] = Yz(oz, qz);

    function Fz(DD, zD) {
      uz.indexOf(DD) > -1 || (uz.push(DD), console.warn(zD))
    }

    function Yz(DD, zD) {
      let wD = [];
      for (let sD of zD.split(" ")) {
        let zD = [];
        for (let wD of sD.split(".")) {
          let pD = DD[wD] || LD.n[wD];
          pD ? "function" == typeof pD ? zD.length ? zD = zD.map(pD) : Fz(wD, `Modifier ${wD} used at start of tag`) : zD.length ? Fz(wD, `Tag ${wD} used as modifier`) : zD = Array.isArray(pD) ? pD : [pD] : Fz(wD, `Unknown highlighting tag ${wD}`)
        }
        for (let DD of zD) wD.push(DD)
      }
      if (!wD.length) return 0;
      let pD = zD.replace(/ /g, "_"),
        KD = pD + " " + wD.map((DD => DD.id)),
        rD = vz[KD];
      if (rD) return rD.id;
      let cD = vz[KD] = sD.i.define({
        id: az.length,
        name: pD,
        props: [(0, LD.g)({
          [pD]: wD
        })]
      });
      return az.push(cD), cD.id
    }
    rD.h.RTL, rD.h.LTR
  },
  41261: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => MD,
      e: () => QD
    });
    var pD = wD(41217),
      sD = wD(41212),
      KD = wD(41228);
    class rD {
      constructor(DD, zD, wD) {
        this.from = DD, this.to = zD, this.diagnostic = wD
      }
    }
    class LD {
      constructor(DD, zD, wD) {
        this.diagnostics = DD, this.panel = zD, this.selected = wD
      }
      static init(DD, zD, wD) {
        let KD = wD.facet(JD).markerFilter;
        KD && (DD = KD(DD, wD));
        let rD = DD.slice().sort(((DD, zD) => DD.from - zD.from || DD.to - zD.to)),
          gD = new sD.v,
          RD = [],
          AD = 0,
          UD = wD.doc.iter(),
          fD = 0,
          ID = wD.doc.length;
        for (let sD = 0;;) {
          let DD, zD, wD = sD == rD.length ? null : rD[sD];
          if (!wD && !RD.length) break;
          if (RD.length) DD = AD, zD = RD.reduce(((DD, zD) => Math.min(DD, zD.to)), wD && wD.from > DD ? wD.from : 1e8);
          else {
            if (DD = wD.from, DD > ID) break;
            zD = wD.to, RD.push(wD), sD++
          }
          for (; sD < rD.length;) {
            let wD = rD[sD];
            if (wD.from != DD || !(wD.to > wD.from || wD.to == DD)) {
              zD = Math.min(wD.from, zD);
              break
            }
            RD.push(wD), sD++, zD = Math.min(wD.to, zD)
          }
          zD = Math.min(zD, ID);
          let KD = !1;
          if (RD.some((wD => wD.from == DD && (wD.to == zD || zD == ID))) && (KD = DD == zD, !KD && zD - DD < 10)) {
            let wD = DD - (fD + UD.value.length);
            wD > 0 && (UD.next(wD), fD = DD);
            for (let pD = DD;;) {
              if (pD >= zD) {
                KD = !0;
                break
              }
              if (!UD.lineBreak && fD + UD.value.length > pD) break;
              pD = fD + UD.value.length, fD += UD.value.length, UD.next()
            }
          }
          let LD = SD(RD);
          if (KD) gD.add(DD, DD, pD.d.widget({
            widget: new PD(LD),
            diagnostics: RD.slice()
          }));
          else {
            let wD = RD.reduce(((DD, zD) => zD.markClass ? DD + " " + zD.markClass : DD), "");
            gD.add(DD, zD, pD.d.mark({
              class: "cm-lintRange cm-lintRange-" + LD + wD,
              diagnostics: RD.slice(),
              inclusiveEnd: RD.some((DD => DD.to > zD))
            }))
          }
          if (AD = zD, AD == ID) break;
          for (let pD = 0; pD < RD.length; pD++) RD[pD].to <= AD && RD.splice(pD--, 1)
        }
        let BD = gD.finish();
        return new LD(BD, zD, cD(BD))
      }
    }

    function cD(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        pD = null;
      return DD.between(wD, 1e9, ((DD, wD, sD) => {
        let {
          spec: KD
        } = sD;
        if (!(zD && KD.diagnostics.indexOf(zD) < 0))
          if (pD) {
            if (KD.diagnostics.indexOf(pD.diagnostic) < 0) return !1;
            pD = new rD(pD.from, wD, pD.diagnostic)
          } else pD = new rD(DD, wD, zD || KD.diagnostics[0])
      })), pD
    }

    function gD(DD, zD) {
      let wD = zD.pos,
        pD = zD.end || wD,
        sD = DD.state.facet(JD).hideOn(DD, wD, pD);
      if (null != sD) return sD;
      let KD = DD.startState.doc.lineAt(zD.pos);
      return !(!DD.effects.some((DD => DD.is(AD))) && !DD.changes.touchesRange(KD.from, Math.max(KD.to, pD)))
    }

    function RD(DD, zD) {
      return DD.field(ID, !1) ? zD : zD.concat(sD.E.appendConfig.of(iD))
    }
    const AD = sD.E.define(),
      UD = sD.E.define(),
      fD = sD.E.define(),
      ID = sD.G.define({
        create: () => new LD(pD.d.none, null, null),
        update(DD, zD) {
          if (zD.docChanged && DD.diagnostics.size) {
            let wD = DD.diagnostics.map(zD.changes),
              pD = null,
              sD = DD.panel;
            if (DD.selected) {
              let sD = zD.changes.mapPos(DD.selected.from, 1);
              pD = cD(wD, DD.selected.diagnostic, sD) || cD(wD, null, sD)
            }!wD.size && sD && zD.state.facet(JD).autoPanel && (sD = null), DD = new LD(wD, sD, pD)
          }
          for (let wD of zD.effects)
            if (wD.is(AD)) {
              let pD = zD.state.facet(JD).autoPanel ? wD.value.length ? xD.open : null : DD.panel;
              DD = LD.init(wD.value, pD, zD.state)
            } else wD.is(UD) ? DD = new LD(DD.diagnostics, wD.value ? xD.open : null, DD.selected) : wD.is(fD) && (DD = new LD(DD.diagnostics, DD.panel, wD.value));
          return DD
        },
        provide: DD => [pD.ob.from(DD, (DD => DD.panel)), pD.i.BD.from(DD, (DD => DD.diagnostics))]
      });
    const BD = pD.d.mark({
      class: "cm-lintRange cm-lintRange-active"
    });

    function GD(DD, zD, wD) {
      let pD, {
          diagnostics: sD
        } = DD.state.field(ID),
        KD = -1,
        rD = -1;
      sD.between(zD - (wD < 0 ? 1 : 0), zD + (wD > 0 ? 1 : 0), ((DD, sD, LD) => {
        let {
          spec: cD
        } = LD;
        if (zD >= DD && zD <= sD && (DD == sD || (zD > DD || wD > 0) && (zD < sD || wD < 0))) return pD = cD.diagnostics, KD = DD, rD = sD, !1
      }));
      let LD = DD.state.facet(JD).tooltipFilter;
      return pD && LD && (pD = LD(pD, DD.state)), pD ? {
        pos: KD,
        end: rD,
        above: DD.state.doc.lineAt(KD).to < rD,
        create: () => ({
          dom: hD(DD, pD)
        })
      } : null
    }

    function hD(DD, zD) {
      return (0, KD.d)("ul", {
        class: "cm-tooltip-lint"
      }, zD.map((zD => VD(DD, zD, !1))))
    }
    const nD = DD => {
        let zD = DD.state.field(ID, !1);
        return !(!zD || !zD.panel) && (DD.dispatch({
          effects: UD.of(!1)
        }), !0)
      },
      MD = [{
        key: "Mod-Shift-m",
        run: DD => {
          let zD = DD.state.field(ID, !1);
          zD && zD.panel || DD.dispatch({
            effects: RD(DD.state, [UD.of(!0)])
          });
          let wD = (0, pD.G)(DD, xD.open);
          return wD && wD.dom.querySelector(".cm-panel-lint ul").focus(), !0
        },
        preventDefault: !0
      }, {
        key: "F8",
        run: DD => {
          let zD = DD.state.field(ID, !1);
          if (!zD) return !1;
          let wD = DD.state.selection.main,
            pD = cD(zD.diagnostics, null, wD.to + 1);
          return !(!pD && (pD = cD(zD.diagnostics, null, 0), !pD || pD.from == wD.from && pD.to == wD.to)) && (DD.dispatch({
            selection: {
              anchor: pD.from,
              head: pD.to
            },
            scrollIntoView: !0
          }), !0)
        }
      }],
      OD = pD.n.fromClass(class {
        constructor(DD) {
          this.view = DD, this.timeout = -1, this.set = !0;
          let {
            delay: zD
          } = DD.state.facet(JD);
          this.lintTime = Date.now() + zD, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, zD)
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
              sources: zD
            } = DD.facet(JD);
            zD.length && function(DD, zD, wD) {
              let pD = [],
                sD = -1;
              for (let KD of DD) KD.then((wD => {
                pD.push(wD), clearTimeout(sD), pD.length == DD.length ? zD(pD) : sD = setTimeout((() => zD(pD)), 200)
              }), wD)
            }(zD.map((DD => Promise.resolve(DD(this.view)))), (zD => {
              this.view.state.doc == DD.doc && this.view.dispatch(function(DD, zD) {
                return {
                  effects: RD(DD, [AD.of(zD)])
                }
              }(this.view.state, zD.reduce(((DD, zD) => DD.concat(zD)))))
            }), (DD => {
              (0, pD.cb)(this.view.state, DD)
            }))
          }
        }
        update(DD) {
          let zD = DD.state.facet(JD);
          (DD.docChanged || zD != DD.startState.facet(JD) || zD.needsRefresh && zD.needsRefresh(DD)) && (this.lintTime = Date.now() + zD.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, zD.delay)))
        }
        force() {
          this.set && (this.lintTime = Date.now(), this.run())
        }
        destroy() {
          clearTimeout(this.timeout)
        }
      });
    const JD = sD.n.define({
      combine: DD => ({
        sources: DD.map((DD => DD.source)).filter((DD => null != DD)),
        ...(0, sD.W)(DD.map((DD => DD.config)), {
          delay: 750,
          markerFilter: null,
          tooltipFilter: null,
          needsRefresh: null,
          hideOn: () => null
        }, {
          delay: Math.max,
          markerFilter: ED,
          tooltipFilter: ED,
          needsRefresh: (DD, zD) => DD ? zD ? wD => DD(wD) || zD(wD) : DD : zD,
          hideOn: (DD, zD) => DD ? zD ? (wD, pD, sD) => DD(wD, pD, sD) || zD(wD, pD, sD) : DD : zD,
          autoPanel: (DD, zD) => DD || zD
        })
      })
    });

    function ED(DD, zD) {
      return DD ? zD ? (wD, pD) => zD(DD(wD, pD), pD) : DD : zD
    }

    function QD(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return [JD.of({
        source: DD,
        config: zD
      }), OD, iD]
    }

    function XD(DD) {
      let zD = [];
      if (DD) DD: for (let {
          name: wD
        }
        of DD) {
        for (let DD = 0; DD < wD.length; DD++) {
          let pD = wD[DD];
          if (/[a-zA-Z]/.test(pD) && !zD.some((DD => DD.toLowerCase() == pD.toLowerCase()))) {
            zD.push(pD);
            continue DD
          }
        }
        zD.push("")
      }
      return zD
    }

    function VD(DD, zD, wD) {
      var pD;
      let sD = wD ? XD(zD.actions) : [];
      return (0, KD.d)("li", {
        class: "cm-diagnostic cm-diagnostic-" + zD.severity
      }, (0, KD.d)("span", {
        class: "cm-diagnosticText"
      }, zD.renderMessage ? zD.renderMessage(DD) : zD.message), null === (pD = zD.actions) || void 0 === pD ? void 0 : pD.map(((wD, pD) => {
        let rD = !1,
          LD = pD => {
            if (pD.preventDefault(), rD) return;
            rD = !0;
            let sD = cD(DD.state.field(ID).diagnostics, zD);
            sD && wD.apply(DD, sD.from, sD.to)
          },
          {
            name: gD
          } = wD,
          RD = sD[pD] ? gD.indexOf(sD[pD]) : -1,
          AD = RD < 0 ? gD : [gD.slice(0, RD), (0, KD.d)("u", gD.slice(RD, RD + 1)), gD.slice(RD + 1)],
          UD = wD.markClass ? " " + wD.markClass : "";
        return (0, KD.d)("button", {
          type: "button",
          class: "cm-diagnosticAction" + UD,
          onclick: LD,
          onmousedown: LD,
          "aria-label": ` Action: ${gD}${RD<0?"":` (access key "${sD[pD]})"`}.`
        }, AD)
      })), zD.source && (0, KD.d)("div", {
        class: "cm-diagnosticSource"
      }, zD.source))
    }
    class PD extends pD.r {
      constructor(DD) {
        super(), this.sev = DD
      }
      eq(DD) {
        return DD.sev == this.sev
      }
      toDOM() {
        return (0, KD.d)("span", {
          class: "cm-lintPoint cm-lintPoint-" + this.sev
        })
      }
    }
    class CD {
      constructor(DD, zD) {
        this.diagnostic = zD, this.id = "item_" + Math.floor(4294967295 * Math.random()).toString(16), this.dom = VD(DD, zD, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option")
      }
    }
    class xD {
      constructor(DD) {
        this.view = DD, this.items = [];
        this.list = (0, KD.d)("ul", {
          tabIndex: 0,
          role: "listbox",
          "aria-label": this.view.state.phrase("Diagnostics"),
          onkeydown: zD => {
            if (!(zD.ctrlKey || zD.altKey || zD.metaKey)) {
              if (27 == zD.keyCode) nD(this.view), this.view.focus();
              else if (38 == zD.keyCode || 33 == zD.keyCode) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
              else if (40 == zD.keyCode || 34 == zD.keyCode) this.moveSelection((this.selectedIndex + 1) % this.items.length);
              else if (36 == zD.keyCode) this.moveSelection(0);
              else if (35 == zD.keyCode) this.moveSelection(this.items.length - 1);
              else if (13 == zD.keyCode) this.view.focus();
              else {
                if (!(zD.keyCode >= 65 && zD.keyCode <= 90 && this.selectedIndex >= 0)) return;
                {
                  let {
                    diagnostic: wD
                  } = this.items[this.selectedIndex], pD = XD(wD.actions);
                  for (let sD = 0; sD < pD.length; sD++)
                    if (pD[sD].toUpperCase().charCodeAt(0) == zD.keyCode) {
                      let zD = cD(this.view.state.field(ID).diagnostics, wD);
                      zD && wD.actions[sD].apply(DD, zD.from, zD.to)
                    }
                }
              }
              zD.preventDefault()
            }
          },
          onclick: DD => {
            for (let zD = 0; zD < this.items.length; zD++) this.items[zD].dom.contains(DD.target) && this.moveSelection(zD)
          }
        }), this.dom = (0, KD.d)("div", {
          class: "cm-panel-lint"
        }, this.list, (0, KD.d)("button", {
          type: "button",
          name: "close",
          "aria-label": this.view.state.phrase("close"),
          onclick: () => nD(this.view)
        }, "\xd7")), this.update()
      }
      get selectedIndex() {
        let DD = this.view.state.field(ID).selected;
        if (!DD) return -1;
        for (let zD = 0; zD < this.items.length; zD++)
          if (this.items[zD].diagnostic == DD.diagnostic) return zD;
        return -1
      }
      update() {
        let {
          diagnostics: DD,
          selected: zD
        } = this.view.state.field(ID), wD = 0, pD = !1, sD = null, KD = new Set;
        for (DD.between(0, this.view.state.doc.length, ((DD, rD, LD) => {
            let {
              spec: cD
            } = LD;
            for (let gD of cD.diagnostics) {
              if (KD.has(gD)) continue;
              KD.add(gD);
              let DD, rD = -1;
              for (let zD = wD; zD < this.items.length; zD++)
                if (this.items[zD].diagnostic == gD) {
                  rD = zD;
                  break
                } rD < 0 ? (DD = new CD(this.view, gD), this.items.splice(wD, 0, DD), pD = !0) : (DD = this.items[rD], rD > wD && (this.items.splice(wD, rD - wD), pD = !0)), zD && DD.diagnostic == zD.diagnostic ? DD.dom.hasAttribute("aria-selected") || (DD.dom.setAttribute("aria-selected", "true"), sD = DD) : DD.dom.hasAttribute("aria-selected") && DD.dom.removeAttribute("aria-selected"), wD++
            }
          })); wD < this.items.length && !(1 == this.items.length && this.items[0].diagnostic.from < 0);) pD = !0, this.items.pop();
        0 == this.items.length && (this.items.push(new CD(this.view, {
          from: -1,
          to: -1,
          severity: "info",
          message: this.view.state.phrase("No diagnostics")
        })), pD = !0), sD ? (this.list.setAttribute("aria-activedescendant", sD.id), this.view.requestMeasure({
          key: this,
          read: () => ({
            sel: sD.dom.getBoundingClientRect(),
            panel: this.list.getBoundingClientRect()
          }),
          write: DD => {
            let {
              sel: zD,
              panel: wD
            } = DD, pD = wD.height / this.list.offsetHeight;
            zD.top < wD.top ? this.list.scrollTop -= (wD.top - zD.top) / pD : zD.bottom > wD.bottom && (this.list.scrollTop += (zD.bottom - wD.bottom) / pD)
          }
        })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), pD && this.sync()
      }
      sync() {
        let DD = this.list.firstChild;

        function zD() {
          let zD = DD;
          DD = zD.nextSibling, zD.remove()
        }
        for (let wD of this.items)
          if (wD.dom.parentNode == this.list) {
            for (; DD != wD.dom;) zD();
            DD = wD.dom.nextSibling
          } else this.list.insertBefore(wD.dom, DD);
        for (; DD;) zD()
      }
      moveSelection(DD) {
        if (this.selectedIndex < 0) return;
        let zD = cD(this.view.state.field(ID).diagnostics, this.items[DD].diagnostic);
        zD && this.view.dispatch({
          selection: {
            anchor: zD.from,
            head: zD.to
          },
          scrollIntoView: !0,
          effects: fD.of(zD)
        })
      }
      static open(DD) {
        return new xD(DD)
      }
    }

    function TD(DD) {
      return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${arguments.length>1&&void 0!==arguments[1]?arguments[1]:'viewBox="0 0 40 40"'}>${encodeURIComponent(DD)}</svg>')`
    }

    function bD(DD) {
      return TD(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${DD}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"')
    }
    const jD = pD.i.baseTheme({
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
        backgroundImage: bD("#d11")
      },
      ".cm-lintRange-warning": {
        backgroundImage: bD("orange")
      },
      ".cm-lintRange-info": {
        backgroundImage: bD("#999")
      },
      ".cm-lintRange-hint": {
        backgroundImage: bD("#66d")
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

    function dD(DD) {
      return "error" == DD ? 4 : "warning" == DD ? 3 : "info" == DD ? 2 : 1
    }

    function SD(DD) {
      let zD = "hint",
        wD = 1;
      for (let pD of DD) {
        let DD = dD(pD.severity);
        DD > wD && (wD = DD, zD = pD.severity)
      }
      return zD
    }
    pD.j;
    const iD = [ID, pD.i.BD.compute([ID], (DD => {
      let {
        selected: zD,
        panel: wD
      } = DD.field(ID);
      return zD && wD && zD.from != zD.to ? pD.d.set([BD.range(zD.from, zD.to)]) : pD.d.none
    })), (0, pD.Y)(GD, {
      hideOn: gD
    }), jD]
  },
  41256: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => HD,
      e: () => hD,
      i: () => qD
    });
    var pD = wD(41217),
      sD = wD(41212),
      KD = wD(41228);
    const rD = "function" == typeof String.prototype.normalize ? DD => DD.normalize("NFKD") : DD => DD;
    class LD {
      constructor(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : DD.length,
          sD = arguments.length > 4 ? arguments[4] : void 0,
          KD = arguments.length > 5 ? arguments[5] : void 0;
        this.test = KD, this.value = {
          from: 0,
          to: 0
        }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = DD.iterRange(wD, pD), this.bufferStart = wD, this.normalize = sD ? DD => sD(rD(DD)) : rD, this.query = this.normalize(zD)
      }
      peek() {
        if (this.bufferPos == this.buffer.length) {
          if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
          this.bufferPos = 0, this.buffer = this.iter.value
        }
        return (0, sD.P)(this.buffer, this.bufferPos)
      }
      next() {
        for (; this.matches.length;) this.matches.pop();
        return this.nextOverlapping()
      }
      nextOverlapping() {
        for (;;) {
          let DD = this.peek();
          if (DD < 0) return this.done = !0, this;
          let zD = (0, sD.fb)(DD),
            wD = this.bufferStart + this.bufferPos;
          this.bufferPos += (0, sD.T)(DD);
          let pD = this.normalize(zD);
          if (pD.length)
            for (let sD = 0, KD = wD;; sD++) {
              let DD = pD.charCodeAt(sD),
                rD = this.match(DD, KD, this.bufferPos + this.bufferStart);
              if (sD == pD.length - 1) {
                if (rD) return this.value = rD, this;
                break
              }
              KD == wD && sD < zD.length && zD.charCodeAt(sD) == DD && KD++
            }
        }
      }
      match(DD, zD, wD) {
        let pD = null;
        for (let sD = 0; sD < this.matches.length; sD += 2) {
          let zD = this.matches[sD],
            KD = !1;
          this.query.charCodeAt(zD) == DD && (zD == this.query.length - 1 ? pD = {
            from: this.matches[sD + 1],
            to: wD
          } : (this.matches[sD]++, KD = !0)), KD || (this.matches.splice(sD, 2), sD -= 2)
        }
        return this.query.charCodeAt(0) == DD && (1 == this.query.length ? pD = {
          from: zD,
          to: wD
        } : this.matches.push(1, zD)), pD && this.test && !this.test(pD.from, pD.to, this.buffer, this.bufferStart) && (pD = null), pD
      }
    }
    "undefined" != typeof Symbol && (LD.prototype[Symbol.iterator] = function() {
      return this
    });
    const cD = {
        from: -1,
        to: -1,
        match: /.*/.exec("")
      },
      gD = "gm" + (null == /x/.unicode ? "" : "u");
    class RD {
      constructor(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : DD.length;
        if (this.text = DD, this.to = sD, this.curLine = "", this.done = !1, this.value = cD, /\\[sWDnr]|\n|\r|\[\^/.test(zD)) return new fD(DD, zD, wD, pD, sD);
        this.re = new RegExp(zD, gD + ((null === wD || void 0 === wD ? void 0 : wD.ignoreCase) ? "i" : "")), this.test = null === wD || void 0 === wD ? void 0 : wD.test, this.iter = DD.iter();
        let KD = DD.lineAt(pD);
        this.curLineStart = KD.from, this.matchPos = ID(DD, pD), this.getLine(this.curLineStart)
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
          let zD = this.matchPos <= this.to && this.re.exec(this.curLine);
          if (zD) {
            let wD = this.curLineStart + zD.index,
              pD = wD + zD[0].length;
            if (this.matchPos = ID(this.text, pD + (wD == pD ? 1 : 0)), wD == this.curLineStart + this.curLine.length && this.nextLine(), (wD < pD || wD > this.value.to) && (!this.test || this.test(wD, pD, zD))) return this.value = {
              from: wD,
              to: pD,
              match: zD
            }, this;
            DD = this.matchPos - this.curLineStart
          } else {
            if (!(this.curLineStart + this.curLine.length < this.to)) return this.done = !0, this;
            this.nextLine(), DD = 0
          }
        }
      }
    }
    const AD = new WeakMap;
    class UD {
      constructor(DD, zD) {
        this.from = DD, this.text = zD
      }
      get to() {
        return this.from + this.text.length
      }
      static get(DD, zD, wD) {
        let pD = AD.get(DD);
        if (!pD || pD.from >= wD || pD.to <= zD) {
          let pD = new UD(zD, DD.sliceString(zD, wD));
          return AD.set(DD, pD), pD
        }
        if (pD.from == zD && pD.to == wD) return pD;
        let {
          text: sD,
          from: KD
        } = pD;
        return KD > zD && (sD = DD.sliceString(zD, KD) + sD, KD = zD), pD.to < wD && (sD += DD.sliceString(pD.to, wD)), AD.set(DD, new UD(KD, sD)), new UD(zD, sD.slice(zD - KD, wD - KD))
      }
    }
    class fD {
      constructor(DD, zD, wD, pD, sD) {
        this.text = DD, this.to = sD, this.done = !1, this.value = cD, this.matchPos = ID(DD, pD), this.re = new RegExp(zD, gD + ((null === wD || void 0 === wD ? void 0 : wD.ignoreCase) ? "i" : "")), this.test = null === wD || void 0 === wD ? void 0 : wD.test, this.flat = UD.get(DD, pD, this.chunkEnd(pD + 5e3))
      }
      chunkEnd(DD) {
        return DD >= this.to ? this.to : this.text.lineAt(DD).to
      }
      next() {
        for (;;) {
          let DD = this.re.lastIndex = this.matchPos - this.flat.from,
            zD = this.re.exec(this.flat.text);
          if (zD && !zD[0] && zD.index == DD && (this.re.lastIndex = DD + 1, zD = this.re.exec(this.flat.text)), zD) {
            let DD = this.flat.from + zD.index,
              wD = DD + zD[0].length;
            if ((this.flat.to >= this.to || zD.index + zD[0].length <= this.flat.text.length - 10) && (!this.test || this.test(DD, wD, zD))) return this.value = {
              from: DD,
              to: wD,
              match: zD
            }, this.matchPos = ID(this.text, wD + (DD == wD ? 1 : 0)), this
          }
          if (this.flat.to == this.to) return this.done = !0, this;
          this.flat = UD.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + 2 * this.flat.text.length))
        }
      }
    }

    function ID(DD, zD) {
      if (zD >= DD.length) return zD;
      let wD, pD = DD.lineAt(zD);
      for (; zD < pD.to && (wD = pD.text.charCodeAt(zD - pD.from)) >= 56320 && wD < 57344;) zD++;
      return zD
    }
    "undefined" != typeof Symbol && (RD.prototype[Symbol.iterator] = fD.prototype[Symbol.iterator] = function() {
      return this
    });
    const BD = {
        highlightWordAroundCursor: !1,
        minSelectionLength: 1,
        maxMatches: 100,
        wholeWords: !1
      },
      GD = sD.n.define({
        combine: DD => (0, sD.W)(DD, BD, {
          highlightWordAroundCursor: (DD, zD) => DD || zD,
          minSelectionLength: Math.min,
          maxMatches: Math.min
        })
      });

    function hD(DD) {
      let zD = [ED, JD];
      return DD && zD.push(GD.of(DD)), zD
    }
    const nD = pD.d.mark({
        class: "cm-selectionMatch"
      }),
      MD = pD.d.mark({
        class: "cm-selectionMatch cm-selectionMatch-main"
      });

    function OD(DD, zD, wD, pD) {
      return (0 == wD || DD(zD.sliceDoc(wD - 1, wD)) != sD.h.Word) && (pD == zD.doc.length || DD(zD.sliceDoc(pD, pD + 1)) != sD.h.Word)
    }
    const JD = pD.n.fromClass(class {
        constructor(DD) {
          this.BD = this.getDeco(DD)
        }
        update(DD) {
          (DD.selectionSet || DD.docChanged || DD.viewportChanged) && (this.BD = this.getDeco(DD.view))
        }
        getDeco(DD) {
          let zD = DD.state.facet(GD),
            {
              state: wD
            } = DD,
            KD = wD.selection;
          if (KD.rG.length > 1) return pD.d.none;
          let rD, cD = KD.main,
            gD = null;
          if (cD.empty) {
            if (!zD.highlightWordAroundCursor) return pD.d.none;
            let DD = wD.wordAt(cD.head);
            if (!DD) return pD.d.none;
            gD = wD.charCategorizer(cD.head), rD = wD.sliceDoc(DD.from, DD.to)
          } else {
            let DD = cD.to - cD.from;
            if (DD < zD.minSelectionLength || DD > 200) return pD.d.none;
            if (zD.wholeWords) {
              if (rD = wD.sliceDoc(cD.from, cD.to), gD = wD.charCategorizer(cD.head), !OD(gD, wD, cD.from, cD.to) || ! function(DD, zD, wD, pD) {
                  return DD(zD.sliceDoc(wD, wD + 1)) == sD.h.Word && DD(zD.sliceDoc(pD - 1, pD)) == sD.h.Word
                }(gD, wD, cD.from, cD.to)) return pD.d.none
            } else if (rD = wD.sliceDoc(cD.from, cD.to), !rD) return pD.d.none
          }
          let RD = [];
          for (let sD of DD.w6) {
            let DD = new LD(wD.doc, rD, sD.from, sD.to);
            for (; !DD.next().done;) {
              let {
                from: sD,
                to: KD
              } = DD.value;
              if ((!gD || OD(gD, wD, sD, KD)) && (cD.empty && sD <= cD.from && KD >= cD.to ? RD.push(MD.range(sD, KD)) : (sD >= cD.to || KD <= cD.from) && RD.push(nD.range(sD, KD)), RD.length > zD.maxMatches)) return pD.d.none
            }
          }
          return pD.d.set(RD)
        }
      }, {
        BD: DD => DD.BD
      }),
      ED = pD.i.baseTheme({
        ".cm-selectionMatch": {
          backgroundColor: "#99ff7780"
        },
        ".cm-searchMatch .cm-selectionMatch": {
          backgroundColor: "transparent"
        }
      });
    const QD = sD.n.define({
      combine: DD => (0, sD.W)(DD, {
        top: !1,
        caseSensitive: !1,
        literal: !1,
        regexp: !1,
        wholeWord: !1,
        createPanel: DD => new Dz(DD),
        scrollToMatch: DD => pD.i.scrollIntoView(DD)
      })
    });
    class XD {
      constructor(DD) {
        this.search = DD.search, this.caseSensitive = !!DD.caseSensitive, this.literal = !!DD.literal, this.regexp = !!DD.regexp, this.replace = DD.replace || "", this.valid = !!this.search && (!this.regexp || function(DD) {
          try {
            return new RegExp(DD, gD), !0
          } catch (zD) {
            return !1
          }
        }(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!DD.wholeWord, this.test = DD.test
      }
      unquote(DD) {
        return this.literal ? DD : DD.replace(/\\([nrt\\])/g, ((DD, zD) => "n" == zD ? "\n" : "r" == zD ? "\r" : "t" == zD ? "\t" : "\\"))
      }
      eq(DD) {
        return this.search == DD.search && this.replace == DD.replace && this.caseSensitive == DD.caseSensitive && this.regexp == DD.regexp && this.wholeWord == DD.wholeWord && this.test == DD.test
      }
      create() {
        return this.regexp ? new jD(this) : new CD(this)
      }
      getCursor(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wD = arguments.length > 2 ? arguments[2] : void 0,
          pD = DD.doc ? DD : sD.k.create({
            doc: DD
          });
        return null == wD && (wD = pD.doc.length), this.regexp ? xD(this, pD, zD, wD) : PD(this, pD, zD, wD)
      }
    }
    class VD {
      constructor(DD) {
        this.spec = DD
      }
    }

    function PD(DD, zD, wD, pD) {
      let KD;
      var rD, cD;
      return DD.wholeWord && (rD = zD.doc, cD = zD.charCategorizer(zD.selection.main.head), KD = (DD, zD, wD, pD) => ((pD > DD || pD + wD.length < zD) && (pD = Math.max(0, DD - 2), wD = rD.sliceString(pD, Math.min(rD.length, zD + 2))), (cD(TD(wD, DD - pD)) != sD.h.Word || cD(bD(wD, DD - pD)) != sD.h.Word) && (cD(bD(wD, zD - pD)) != sD.h.Word || cD(TD(wD, zD - pD)) != sD.h.Word))), DD.test && (KD = function(DD, zD, wD) {
        return (pD, sD, KD, rD) => {
          if (wD && !wD(pD, sD, KD, rD)) return !1;
          let LD = pD >= rD && sD <= rD + KD.length ? KD.slice(pD - rD, sD - rD) : zD.doc.sliceString(pD, sD);
          return DD(LD, zD, pD, sD)
        }
      }(DD.test, zD, KD)), new LD(zD.doc, DD.unquoted, wD, pD, DD.caseSensitive ? void 0 : DD => DD.toLowerCase(), KD)
    }
    class CD extends VD {
      constructor(DD) {
        super(DD)
      }
      nextMatch(DD, zD, wD) {
        let pD = PD(this.spec, DD, wD, DD.doc.length).nextOverlapping();
        if (pD.done) {
          let wD = Math.min(DD.doc.length, zD + this.spec.unquoted.length);
          pD = PD(this.spec, DD, 0, wD).nextOverlapping()
        }
        return pD.done || pD.value.from == zD && pD.value.to == wD ? null : pD.value
      }
      prevMatchInRange(DD, zD, wD) {
        for (let pD = wD;;) {
          let wD = Math.max(zD, pD - 1e4 - this.spec.unquoted.length),
            sD = PD(this.spec, DD, wD, pD),
            KD = null;
          for (; !sD.nextOverlapping().done;) KD = sD.value;
          if (KD) return KD;
          if (wD == zD) return null;
          pD -= 1e4
        }
      }
      prevMatch(DD, zD, wD) {
        let pD = this.prevMatchInRange(DD, 0, zD);
        return pD || (pD = this.prevMatchInRange(DD, Math.max(0, wD - this.spec.unquoted.length), DD.doc.length)), !pD || pD.from == zD && pD.to == wD ? null : pD
      }
      getReplacement(DD) {
        return this.spec.unquote(this.spec.replace)
      }
      matchAll(DD, zD) {
        let wD = PD(this.spec, DD, 0, DD.doc.length),
          pD = [];
        for (; !wD.next().done;) {
          if (pD.length >= zD) return null;
          pD.push(wD.value)
        }
        return pD
      }
      highlight(DD, zD, wD, pD) {
        let sD = PD(this.spec, DD, Math.max(0, zD - this.spec.unquoted.length), Math.min(wD + this.spec.unquoted.length, DD.doc.length));
        for (; !sD.next().done;) pD(sD.value.from, sD.value.to)
      }
    }

    function xD(DD, zD, wD, pD) {
      let KD;
      var rD;
      return DD.wholeWord && (rD = zD.charCategorizer(zD.selection.main.head), KD = (DD, zD, wD) => !wD[0].length || (rD(TD(wD.input, wD.index)) != sD.h.Word || rD(bD(wD.input, wD.index)) != sD.h.Word) && (rD(bD(wD.input, wD.index + wD[0].length)) != sD.h.Word || rD(TD(wD.input, wD.index + wD[0].length)) != sD.h.Word)), DD.test && (KD = function(DD, zD, wD) {
        return (pD, sD, KD) => (!wD || wD(pD, sD, KD)) && DD(KD[0], zD, pD, sD)
      }(DD.test, zD, KD)), new RD(zD.doc, DD.search, {
        ignoreCase: !DD.caseSensitive,
        test: KD
      }, wD, pD)
    }

    function TD(DD, zD) {
      return DD.slice((0, sD._)(DD, zD, !1), zD)
    }

    function bD(DD, zD) {
      return DD.slice(zD, (0, sD._)(DD, zD))
    }
    class jD extends VD {
      nextMatch(DD, zD, wD) {
        let pD = xD(this.spec, DD, wD, DD.doc.length).next();
        return pD.done && (pD = xD(this.spec, DD, 0, zD).next()), pD.done ? null : pD.value
      }
      prevMatchInRange(DD, zD, wD) {
        for (let pD = 1;; pD++) {
          let sD = Math.max(zD, wD - 1e4 * pD),
            KD = xD(this.spec, DD, sD, wD),
            rD = null;
          for (; !KD.next().done;) rD = KD.value;
          if (rD && (sD == zD || rD.from > sD + 10)) return rD;
          if (sD == zD) return null
        }
      }
      prevMatch(DD, zD, wD) {
        return this.prevMatchInRange(DD, 0, zD) || this.prevMatchInRange(DD, wD, DD.doc.length)
      }
      getReplacement(DD) {
        return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, ((zD, wD) => {
          if ("&" == wD) return DD.match[0];
          if ("$" == wD) return "$";
          for (let pD = wD.length; pD > 0; pD--) {
            let zD = +wD.slice(0, pD);
            if (zD > 0 && zD < DD.match.length) return DD.match[zD] + wD.slice(pD)
          }
          return zD
        }))
      }
      matchAll(DD, zD) {
        let wD = xD(this.spec, DD, 0, DD.doc.length),
          pD = [];
        for (; !wD.next().done;) {
          if (pD.length >= zD) return null;
          pD.push(wD.value)
        }
        return pD
      }
      highlight(DD, zD, wD, pD) {
        let sD = xD(this.spec, DD, Math.max(0, zD - 250), Math.min(wD + 250, DD.doc.length));
        for (; !sD.next().done;) pD(sD.value.from, sD.value.to)
      }
    }
    const dD = sD.E.define(),
      SD = sD.E.define(),
      iD = sD.G.define({
        create: DD => new lD(vD(DD).create(), null),
        update(DD, zD) {
          for (let wD of zD.effects) wD.is(dD) ? DD = new lD(wD.value.create(), DD.panel) : wD.is(SD) && (DD = new lD(DD.query, wD.value ? uD : null));
          return DD
        },
        provide: DD => pD.ob.from(DD, (DD => DD.panel))
      });
    class lD {
      constructor(DD, zD) {
        this.query = DD, this.panel = zD
      }
    }
    const WD = pD.d.mark({
        class: "cm-searchMatch"
      }),
      ND = pD.d.mark({
        class: "cm-searchMatch cm-searchMatch-selected"
      }),
      ZD = pD.n.fromClass(class {
        constructor(DD) {
          this.view = DD, this.BD = this.highlight(DD.state.field(iD))
        }
        update(DD) {
          let zD = DD.state.field(iD);
          (zD != DD.startState.field(iD) || DD.docChanged || DD.selectionSet || DD.viewportChanged) && (this.BD = this.highlight(zD))
        }
        highlight(DD) {
          let {
            query: zD,
            panel: wD
          } = DD;
          if (!wD || !zD.spec.valid) return pD.d.none;
          let {
            view: KD
          } = this, rD = new sD.v;
          for (let pD = 0, sD = KD.w6, LD = sD.length; pD < LD; pD++) {
            let {
              from: DD,
              to: wD
            } = sD[pD];
            for (; pD < LD - 1 && wD > sD[pD + 1].from - 500;) wD = sD[++pD].to;
            zD.highlight(KD.state, DD, wD, ((DD, zD) => {
              let wD = KD.state.selection.rG.some((wD => wD.from == DD && wD.to == zD));
              rD.add(DD, zD, wD ? ND : WD)
            }))
          }
          return rD.finish()
        }
      }, {
        BD: DD => DD.BD
      });

    function yD(DD) {
      return zD => {
        let wD = zD.state.field(iD, !1);
        return wD && wD.query.spec.valid ? DD(zD, wD) : YD(zD)
      }
    }
    const kD = yD(((DD, zD) => {
        let {
          query: wD
        } = zD, {
          to: pD
        } = DD.state.selection.main, KD = wD.nextMatch(DD.state, pD, pD);
        if (!KD) return !1;
        let rD = sD.j.single(KD.from, KD.to),
          LD = DD.state.facet(QD);
        return DD.dispatch({
          selection: rD,
          effects: [sz(DD, KD), LD.scrollToMatch(rD.main, DD)],
          userEvent: "select.search"
        }), FD(DD), !0
      })),
      mD = yD(((DD, zD) => {
        let {
          query: wD
        } = zD, {
          state: pD
        } = DD, {
          from: KD
        } = pD.selection.main, rD = wD.prevMatch(pD, KD, KD);
        if (!rD) return !1;
        let LD = sD.j.single(rD.from, rD.to),
          cD = DD.state.facet(QD);
        return DD.dispatch({
          selection: LD,
          effects: [sz(DD, rD), cD.scrollToMatch(LD.main, DD)],
          userEvent: "select.search"
        }), FD(DD), !0
      })),
      eD = yD(((DD, zD) => {
        let {
          query: wD
        } = zD, pD = wD.matchAll(DD.state, 1e3);
        return !(!pD || !pD.length) && (DD.dispatch({
          selection: sD.j.create(pD.map((DD => sD.j.range(DD.from, DD.to)))),
          userEvent: "select.search.matches"
        }), !0)
      })),
      oD = yD(((DD, zD) => {
        let {
          query: wD
        } = zD, {
          state: KD
        } = DD, {
          from: rD,
          to: LD
        } = KD.selection.main;
        if (KD.readOnly) return !1;
        let cD = wD.nextMatch(KD, rD, rD);
        if (!cD) return !1;
        let gD, RD, AD = cD,
          UD = [],
          fD = [];
        AD.from == rD && AD.to == LD && (RD = KD.toText(wD.getReplacement(AD)), UD.push({
          from: AD.from,
          to: AD.to,
          insert: RD
        }), AD = wD.nextMatch(KD, AD.from, AD.to), fD.push(pD.i.announce.of(KD.phrase("replaced match on line $", KD.doc.lineAt(rD).number) + ".")));
        let ID = DD.state.changes(UD);
        return AD && (gD = sD.j.single(AD.from, AD.to).map(ID), fD.push(sz(DD, AD)), fD.push(KD.facet(QD).scrollToMatch(gD.main, DD))), DD.dispatch({
          changes: ID,
          selection: gD,
          effects: fD,
          userEvent: "input.replace"
        }), !0
      })),
      aD = yD(((DD, zD) => {
        let {
          query: wD
        } = zD;
        if (DD.state.readOnly) return !1;
        let sD = wD.matchAll(DD.state, 1e9).map((DD => {
          let {
            from: zD,
            to: pD
          } = DD;
          return {
            from: zD,
            to: pD,
            insert: wD.getReplacement(DD)
          }
        }));
        if (!sD.length) return !1;
        let KD = DD.state.phrase("replaced $ matches", sD.length) + ".";
        return DD.dispatch({
          changes: sD,
          effects: pD.i.announce.of(KD),
          userEvent: "input.replace.all"
        }), !0
      }));

    function uD(DD) {
      return DD.state.facet(QD).createPanel(DD)
    }

    function vD(DD, zD) {
      var wD, pD, sD, KD, rD;
      let LD = DD.selection.main,
        cD = LD.empty || LD.to > LD.from + 100 ? "" : DD.sliceDoc(LD.from, LD.to);
      if (zD && !cD) return zD;
      let gD = DD.facet(QD);
      return new XD({
        search: (null !== (wD = null === zD || void 0 === zD ? void 0 : zD.literal) && void 0 !== wD ? wD : gD.literal) ? cD : cD.replace(/\n/g, "\\n"),
        caseSensitive: null !== (pD = null === zD || void 0 === zD ? void 0 : zD.caseSensitive) && void 0 !== pD ? pD : gD.caseSensitive,
        literal: null !== (sD = null === zD || void 0 === zD ? void 0 : zD.literal) && void 0 !== sD ? sD : gD.literal,
        regexp: null !== (KD = null === zD || void 0 === zD ? void 0 : zD.regexp) && void 0 !== KD ? KD : gD.regexp,
        wholeWord: null !== (rD = null === zD || void 0 === zD ? void 0 : zD.wholeWord) && void 0 !== rD ? rD : gD.wholeWord
      })
    }

    function tD(DD) {
      let zD = (0, pD.G)(DD, uD);
      return zD && zD.dom.querySelector("[main-field]")
    }

    function FD(DD) {
      let zD = tD(DD);
      zD && zD == DD.root.activeElement && zD.select()
    }
    const YD = DD => {
        let zD = DD.state.field(iD, !1);
        if (zD && zD.panel) {
          let wD = tD(DD);
          if (wD && wD != DD.root.activeElement) {
            let pD = vD(DD.state, zD.query.spec);
            pD.valid && DD.dispatch({
              effects: dD.of(pD)
            }), wD.focus(), wD.select()
          }
        } else DD.dispatch({
          effects: [SD.of(!0), zD ? dD.of(vD(DD.state, zD.query.spec)) : sD.E.appendConfig.of(rz)]
        });
        return !0
      },
      HD = DD => {
        let zD = DD.state.field(iD, !1);
        if (!zD || !zD.panel) return !1;
        let wD = (0, pD.G)(DD, uD);
        return wD && wD.dom.contains(DD.root.activeElement) && DD.focus(), DD.dispatch({
          effects: SD.of(!1)
        }), !0
      },
      qD = [{
        key: "Mod-f",
        run: YD,
        scope: "editor search-panel"
      }, {
        key: "F3",
        run: kD,
        shift: mD,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Mod-g",
        run: kD,
        shift: mD,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Escape",
        run: HD,
        scope: "editor search-panel"
      }, {
        key: "Mod-Shift-l",
        run: DD => {
          let {
            state: zD,
            dispatch: wD
          } = DD, pD = zD.selection;
          if (pD.rG.length > 1 || pD.main.empty) return !1;
          let {
            from: KD,
            to: rD
          } = pD.main, cD = [], gD = 0;
          for (let RD = new LD(zD.doc, zD.sliceDoc(KD, rD)); !RD.next().done;) {
            if (cD.length > 1e3) return !1;
            RD.value.from == KD && (gD = cD.length), cD.push(sD.j.range(RD.value.from, RD.value.to))
          }
          return wD(zD.update({
            selection: sD.j.create(cD, gD),
            userEvent: "select.search.matches"
          })), !0
        }
      }, {
        key: "Mod-Alt-g",
        run: DD => {
          let {
            state: zD
          } = DD, wD = String(zD.doc.lineAt(DD.state.selection.main.head).number), {
            close: KD,
            result: rD
          } = (0, pD.mb)(DD, {
            label: zD.phrase("Go to line"),
            input: {
              type: "text",
              name: "line",
              value: wD
            },
            focus: !0,
            submitLabel: zD.phrase("go")
          });
          return rD.then((wD => {
            let rD = wD && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(wD.elements.line.value);
            if (!rD) return void DD.dispatch({
              effects: KD
            });
            let LD = zD.doc.lineAt(zD.selection.main.head),
              [, cD, gD, RD, AD] = rD,
              UD = RD ? +RD.slice(1) : 0,
              fD = gD ? +gD : LD.number;
            if (gD && AD) {
              let DD = fD / 100;
              cD && (DD = DD * ("-" == cD ? -1 : 1) + LD.number / zD.doc.lines), fD = Math.round(zD.doc.lines * DD)
            } else gD && cD && (fD = fD * ("-" == cD ? -1 : 1) + LD.number);
            let ID = zD.doc.line(Math.max(1, Math.min(zD.doc.lines, fD))),
              BD = sD.j.cursor(ID.from + Math.max(0, Math.min(UD, ID.length)));
            DD.dispatch({
              effects: [KD, pD.i.scrollIntoView(BD.from, {
                y: "center"
              })],
              selection: BD
            })
          })), !0
        }
      }, {
        key: "Mod-d",
        run: DD => {
          let {
            state: zD,
            dispatch: wD
          } = DD, {
            rG: KD
          } = zD.selection;
          if (KD.some((DD => DD.from === DD.to))) return (DD => {
            let {
              state: zD,
              dispatch: wD
            } = DD, {
              selection: pD
            } = zD, KD = sD.j.create(pD.rG.map((DD => zD.wordAt(DD.head) || sD.j.cursor(DD.head))), pD.mainIndex);
            return !KD.eq(pD) && (wD(zD.update({
              selection: KD
            })), !0)
          })({
            state: zD,
            dispatch: wD
          });
          let rD = zD.sliceDoc(KD[0].from, KD[0].to);
          if (zD.selection.rG.some((DD => zD.sliceDoc(DD.from, DD.to) != rD))) return !1;
          let cD = function(DD, zD) {
            let {
              main: wD,
              rG: pD
            } = DD.selection, sD = DD.wordAt(wD.head), KD = sD && sD.from == wD.from && sD.to == wD.to;
            for (let rD = !1, cD = new LD(DD.doc, zD, pD[pD.length - 1].to);;) {
              if (cD.next(), !cD.done) {
                if (rD && pD.some((DD => DD.from == cD.value.from))) continue;
                if (KD) {
                  let zD = DD.wordAt(cD.value.from);
                  if (!zD || zD.from != cD.value.from || zD.to != cD.value.to) continue
                }
                return cD.value
              }
              if (rD) return null;
              cD = new LD(DD.doc, zD, 0, Math.max(0, pD[pD.length - 1].from - 1)), rD = !0
            }
          }(zD, rD);
          return !!cD && (wD(zD.update({
            selection: zD.selection.addRange(sD.j.range(cD.from, cD.to), !1),
            effects: pD.i.scrollIntoView(cD.to)
          })), !0)
        },
        preventDefault: !0
      }];
    class Dz {
      constructor(DD) {
        this.view = DD;
        let zD = this.query = DD.state.field(iD).query.spec;

        function wD(DD, zD, wD) {
          return (0, KD.d)("button", {
            class: "cm-button",
            name: DD,
            onclick: zD,
            type: "button"
          }, wD)
        }
        this.commit = this.commit.bind(this), this.searchField = (0, KD.d)("input", {
          value: zD.search,
          placeholder: zz(DD, "Find"),
          "aria-label": zz(DD, "Find"),
          class: "cm-textfield",
          name: "search",
          form: "",
          "main-field": "true",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.replaceField = (0, KD.d)("input", {
          value: zD.replace,
          placeholder: zz(DD, "Replace"),
          "aria-label": zz(DD, "Replace"),
          class: "cm-textfield",
          name: "replace",
          form: "",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.caseField = (0, KD.d)("input", {
          type: "checkbox",
          name: "case",
          form: "",
          checked: zD.caseSensitive,
          onchange: this.commit
        }), this.reField = (0, KD.d)("input", {
          type: "checkbox",
          name: "re",
          form: "",
          checked: zD.regexp,
          onchange: this.commit
        }), this.wordField = (0, KD.d)("input", {
          type: "checkbox",
          name: "word",
          form: "",
          checked: zD.wholeWord,
          onchange: this.commit
        }), this.dom = (0, KD.d)("div", {
          onkeydown: DD => this.keydown(DD),
          class: "cm-search"
        }, [this.searchField, wD("next", (() => kD(DD)), [zz(DD, "next")]), wD("prev", (() => mD(DD)), [zz(DD, "previous")]), wD("select", (() => eD(DD)), [zz(DD, "all")]), (0, KD.d)("label", null, [this.caseField, zz(DD, "match case")]), (0, KD.d)("label", null, [this.reField, zz(DD, "regexp")]), (0, KD.d)("label", null, [this.wordField, zz(DD, "by word")]), ...DD.state.readOnly ? [] : [(0, KD.d)("br"), this.replaceField, wD("replace", (() => oD(DD)), [zz(DD, "replace")]), wD("replaceAll", (() => aD(DD)), [zz(DD, "replace all")])], (0, KD.d)("button", {
          name: "close",
          onclick: () => HD(DD),
          "aria-label": zz(DD, "close"),
          type: "button"
        }, ["\xd7"])])
      }
      commit() {
        let DD = new XD({
          search: this.searchField.value,
          caseSensitive: this.caseField.checked,
          regexp: this.reField.checked,
          wholeWord: this.wordField.checked,
          replace: this.replaceField.value
        });
        DD.eq(this.query) || (this.query = DD, this.view.dispatch({
          effects: dD.of(DD)
        }))
      }
      keydown(DD) {
        (0, pD.lb)(this.view, DD, "search-panel") ? DD.preventDefault(): 13 == DD.keyCode && DD.target == this.searchField ? (DD.preventDefault(), (DD.shiftKey ? mD : kD)(this.view)) : 13 == DD.keyCode && DD.target == this.replaceField && (DD.preventDefault(), oD(this.view))
      }
      update(DD) {
        for (let zD of DD.transactions)
          for (let DD of zD.effects) DD.is(dD) && !DD.value.eq(this.query) && this.setQuery(DD.value)
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
        return this.view.state.facet(QD).top
      }
    }

    function zz(DD, zD) {
      return DD.state.phrase(zD)
    }
    const wz = 30,
      pz = /[\s\.,:;?!]/;

    function sz(DD, zD) {
      let {
        from: wD,
        to: sD
      } = zD, KD = DD.state.doc.lineAt(wD), rD = DD.state.doc.lineAt(sD).to, LD = Math.max(KD.from, wD - wz), cD = Math.min(rD, sD + wz), gD = DD.state.sliceDoc(LD, cD);
      if (LD != KD.from)
        for (let pD = 0; pD < wz; pD++)
          if (!pz.test(gD[pD + 1]) && pz.test(gD[pD])) {
            gD = gD.slice(pD);
            break
          } if (cD != rD)
        for (let pD = gD.length - 1; pD > gD.length - wz; pD--)
          if (!pz.test(gD[pD - 1]) && pz.test(gD[pD])) {
            gD = gD.slice(0, pD);
            break
          } return pD.i.announce.of(`${DD.state.phrase("current match")}. ${gD} ${DD.state.phrase("on line")} ${KD.number}.`)
    }
    const Kz = pD.i.baseTheme({
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
      rz = [iD, sD.u.low(ZD), Kz]
  },
  41217: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => jD,
      h: () => gz,
      i: () => xs,
      j: () => gr,
      n: () => Fz,
      r: () => TD,
      v: () => dK,
      y: () => DK,
      C: () => gK,
      G: () => Dr,
      K: () => YK,
      L: () => Ir,
      T: () => JK,
      P: () => Sr,
      U: () => hK,
      Y: () => FK,
      Z: () => Ns,
      bb: () => Tr,
      cb: () => az,
      db: () => VK,
      hb: () => TK,
      lb: () => ks,
      mb: () => Kr,
      ob: () => sr,
      sb: () => eK
    });
    for (var pD = wD(41212), sD = wD(41220), KD = {
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
      }, rD = {
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
      }, LD = "undefined" != typeof navigator && /Mac/.test(navigator.platform), cD = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), gD = 0; gD < 10; gD++) KD[48 + gD] = KD[96 + gD] = String(gD);
    for (gD = 1; gD <= 24; gD++) KD[gD + 111] = "F" + gD;
    for (gD = 65; gD <= 90; gD++) KD[gD] = String.fromCharCode(gD + 32), rD[gD] = String.fromCharCode(gD);
    for (var RD in KD) rD.hasOwnProperty(RD) || (rD[RD] = KD[RD]);
    var AD = wD(41228);
    let UD = "undefined" != typeof navigator ? navigator : {
        userAgent: "",
        vendor: "",
        platform: ""
      },
      fD = "undefined" != typeof document ? document : {
        documentElement: {
          style: {}
        }
      };
    const ID = /Edge\/(\d+)/.exec(UD.userAgent),
      BD = /MSIE \d/.test(UD.userAgent),
      GD = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(UD.userAgent),
      hD = !!(BD || GD || ID),
      nD = !hD && /gecko\/(\d+)/i.test(UD.userAgent),
      MD = !hD && /Chrome\/(\d+)/.exec(UD.userAgent),
      OD = "webkitFontSmoothing" in fD.documentElement.style,
      JD = !hD && /Apple Computer/.test(UD.vendor),
      ED = JD && (/Mobile\/\w+/.test(UD.userAgent) || UD.maxTouchPoints > 2);
    var QD = {
      mac: ED || /Mac/.test(UD.platform),
      windows: /Win/.test(UD.platform),
      linux: /Linux|X11/.test(UD.platform),
      ie: hD,
      ie_version: BD ? fD.documentMode || 6 : GD ? +GD[1] : ID ? +ID[1] : 0,
      gecko: nD,
      gecko_version: nD ? +(/Firefox\/(\d+)/.exec(UD.userAgent) || [0, 0])[1] : 0,
      chrome: !!MD,
      chrome_version: MD ? +MD[1] : 0,
      ios: ED,
      android: /Android\b/.test(UD.userAgent),
      webkit: OD,
      webkit_version: OD ? +(/\bAppleWebKit\/(\d+)/.exec(UD.userAgent) || [0, 0])[1] : 0,
      safari: JD,
      safari_version: JD ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(UD.userAgent) || [0, 0])[1] : 0,
      tabSize: null != fD.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size"
    };

    function XD(DD, zD) {
      for (let wD in DD) "class" == wD && zD.class ? zD.class += " " + DD.class : "style" == wD && zD.style ? zD.style += ";" + DD.style : zD[wD] = DD[wD];
      return zD
    }
    const VD = Object.create(null);

    function PD(DD, zD, wD) {
      if (DD == zD) return !0;
      DD || (DD = VD), zD || (zD = VD);
      let pD = Object.keys(DD),
        sD = Object.keys(zD);
      if (pD.length - (wD && pD.indexOf(wD) > -1 ? 1 : 0) != sD.length - (wD && sD.indexOf(wD) > -1 ? 1 : 0)) return !1;
      for (let KD of pD)
        if (KD != wD && (-1 == sD.indexOf(KD) || DD[KD] !== zD[KD])) return !1;
      return !0
    }

    function CD(DD, zD, wD) {
      let pD = !1;
      if (zD)
        for (let sD in zD) wD && sD in wD || (pD = !0, "style" == sD ? DD.style.cssText = "" : DD.removeAttribute(sD));
      if (wD)
        for (let sD in wD) zD && zD[sD] == wD[sD] || (pD = !0, "style" == sD ? DD.style.cssText = wD[sD] : DD.setAttribute(sD, wD[sD]));
      return pD
    }

    function xD(DD) {
      let zD = Object.create(null);
      for (let wD = 0; wD < DD.attributes.length; wD++) {
        let pD = DD.attributes[wD];
        zD[pD.name] = pD.value
      }
      return zD
    }
    class TD {
      eq(DD) {
        return !1
      }
      updateDOM(DD, zD, wD) {
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
      coordsAt(DD, zD, wD) {
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
    var bD = function(DD) {
      return DD[DD.Text = 0] = "Text", DD[DD.WidgetBefore = 1] = "WidgetBefore", DD[DD.WidgetAfter = 2] = "WidgetAfter", DD[DD.WidgetRange = 3] = "WidgetRange", DD
    }(bD || (bD = {}));
    class jD extends pD.C {
      constructor(DD, zD, wD, pD) {
        super(), this.startSide = DD, this.endSide = zD, this.widget = wD, this.spec = pD
      }
      get heightRelevant() {
        return !1
      }
      static mark(DD) {
        return new dD(DD)
      }
      static widget(DD) {
        let zD = Math.max(-1e4, Math.min(1e4, DD.side || 0)),
          wD = !!DD.block;
        return zD += wD && !DD.inlineOrder ? zD > 0 ? 3e8 : -4e8 : zD > 0 ? 1e8 : -1e8, new iD(DD, zD, zD, wD, DD.widget || null, !1)
      }
      static replace(DD) {
        let zD, wD, pD = !!DD.block;
        if (DD.isBlockGap) zD = -5e8, wD = 4e8;
        else {
          let {
            start: sD,
            end: KD
          } = lD(DD, pD);
          zD = (sD ? pD ? -3e8 : -1 : 5e8) - 1, wD = 1 + (KD ? pD ? 2e8 : 1 : -6e8)
        }
        return new iD(DD, zD, wD, pD, DD.widget || null, !0)
      }
      static line(DD) {
        return new SD(DD)
      }
      static set(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return pD.z.of(DD, zD)
      }
      hasHeight() {
        return !!this.widget && this.widget.estimatedHeight > -1
      }
    }
    jD.none = pD.z.empty;
    class dD extends jD {
      constructor(DD) {
        let {
          start: zD,
          end: wD
        } = lD(DD);
        super(zD ? -1 : 5e8, wD ? 1 : -6e8, null, DD), this.tagName = DD.tagName || "span", this.attrs = DD.class && DD.attributes ? XD(DD.attributes, {
          class: DD.class
        }) : DD.class ? {
          class: DD.class
        } : DD.attributes || VD
      }
      eq(DD) {
        return this == DD || DD instanceof dD && this.tagName == DD.tagName && PD(this.attrs, DD.attrs)
      }
      range(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DD;
        if (DD >= zD) throw new RangeError("Mark decorations may not be empty");
        return super.range(DD, zD)
      }
    }
    dD.prototype.point = !1;
    class SD extends jD {
      constructor(DD) {
        super(-2e8, -2e8, null, DD)
      }
      eq(DD) {
        return DD instanceof SD && this.spec.class == DD.spec.class && PD(this.spec.attributes, DD.spec.attributes)
      }
      range(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DD;
        if (zD != DD) throw new RangeError("Line decoration ranges must be zero-length");
        return super.range(DD, zD)
      }
    }
    SD.prototype.mapMode = pD.q.TrackBefore, SD.prototype.point = !0;
    class iD extends jD {
      constructor(DD, zD, wD, sD, KD, rD) {
        super(zD, wD, KD, DD), this.block = sD, this.isReplace = rD, this.mapMode = sD ? zD <= 0 ? pD.q.TrackBefore : pD.q.TrackAfter : pD.q.TrackDel
      }
      get type() {
        return this.startSide != this.endSide ? bD.WidgetRange : this.startSide <= 0 ? bD.WidgetBefore : bD.WidgetAfter
      }
      get heightRelevant() {
        return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0)
      }
      eq(DD) {
        return DD instanceof iD && (zD = this.widget, wD = DD.widget, zD == wD || !!(zD && wD && zD.compare(wD))) && this.block == DD.block && this.startSide == DD.startSide && this.endSide == DD.endSide;
        var zD, wD
      }
      range(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DD;
        if (this.isReplace && (DD > zD || DD == zD && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && zD != DD) throw new RangeError("Widget decorations can only have zero-length ranges");
        return super.range(DD, zD)
      }
    }

    function lD(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          inclusiveStart: wD,
          inclusiveEnd: pD
        } = DD;
      return null == wD && (wD = DD.inclusive), null == pD && (pD = DD.inclusive), {
        start: null !== wD && void 0 !== wD ? wD : zD,
        end: null !== pD && void 0 !== pD ? pD : zD
      }
    }

    function WD(DD, zD, wD) {
      let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        sD = wD.length - 1;
      sD >= 0 && wD[sD] + pD >= DD ? wD[sD] = Math.max(wD[sD], zD) : wD.push(DD, zD)
    }
    iD.prototype.point = !0;
    class ND extends pD.C {
      constructor(DD, zD) {
        super(), this.tagName = DD, this.attributes = zD
      }
      eq(DD) {
        return DD == this || DD instanceof ND && this.tagName == DD.tagName && PD(this.attributes, DD.attributes)
      }
      static create(DD) {
        return new ND(DD.tagName, DD.attributes || VD)
      }
      static set(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return pD.z.of(DD, zD)
      }
    }

    function ZD(DD) {
      let zD;
      return zD = 11 == DD.nodeType ? DD.getSelection ? DD : DD.ownerDocument : DD, zD.getSelection()
    }

    function yD(DD, zD) {
      return !!zD && (DD == zD || DD.contains(1 != zD.nodeType ? zD.parentNode : zD))
    }

    function kD(DD, zD) {
      if (!zD.anchorNode) return !1;
      try {
        return yD(DD, zD.anchorNode)
      } catch (wD) {
        return !1
      }
    }

    function mD(DD) {
      return 3 == DD.nodeType ? pz(DD, 0, DD.nodeValue.length).getClientRects() : 1 == DD.nodeType ? DD.getClientRects() : []
    }

    function eD(DD, zD, wD, pD) {
      return !!wD && (uD(DD, zD, wD, pD, -1) || uD(DD, zD, wD, pD, 1))
    }

    function oD(DD) {
      for (var zD = 0;; zD++)
        if (!(DD = DD.previousSibling)) return zD
    }

    function aD(DD) {
      return 1 == DD.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(DD.nodeName)
    }

    function uD(DD, zD, wD, pD, sD) {
      for (;;) {
        if (DD == wD && zD == pD) return !0;
        if (zD == (sD < 0 ? 0 : vD(DD))) {
          if ("DIV" == DD.nodeName) return !1;
          let wD = DD.parentNode;
          if (!wD || 1 != wD.nodeType) return !1;
          zD = oD(DD) + (sD < 0 ? 0 : 1), DD = wD
        } else {
          if (1 != DD.nodeType) return !1;
          if (1 == (DD = DD.childNodes[zD + (sD < 0 ? -1 : 0)]).nodeType && "false" == DD.contentEditable) return !1;
          zD = sD < 0 ? vD(DD) : 0
        }
      }
    }

    function vD(DD) {
      return 3 == DD.nodeType ? DD.nodeValue.length : DD.childNodes.length
    }

    function tD(DD, zD) {
      let wD = zD ? DD.left : DD.right;
      return {
        left: wD,
        right: wD,
        top: DD.top,
        bottom: DD.bottom
      }
    }

    function FD(DD) {
      let zD = DD.visualViewport;
      return zD ? {
        left: 0,
        right: zD.width,
        top: 0,
        bottom: zD.height
      } : {
        left: 0,
        right: DD.innerWidth,
        top: 0,
        bottom: DD.innerHeight
      }
    }

    function YD(DD, zD) {
      let wD = zD.width / DD.offsetWidth,
        pD = zD.height / DD.offsetHeight;
      return (wD > .995 && wD < 1.005 || !isFinite(wD) || Math.abs(zD.width - DD.offsetWidth) < 1) && (wD = 1), (pD > .995 && pD < 1.005 || !isFinite(pD) || Math.abs(zD.height - DD.offsetHeight) < 1) && (pD = 1), {
        scaleX: wD,
        scaleY: pD
      }
    }

    function HD(DD) {
      let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        wD = DD.ownerDocument,
        pD = null,
        sD = null;
      for (let KD = DD.parentNode; KD && (KD != wD.body && (zD && !pD || !sD));)
        if (1 == KD.nodeType) !sD && KD.scrollHeight > KD.clientHeight && (sD = KD), zD && !pD && KD.scrollWidth > KD.clientWidth && (pD = KD), KD = KD.assignedSlot || KD.parentNode;
        else {
          if (11 != KD.nodeType) break;
          KD = KD.host
        } return {
        x: pD,
        y: sD
      }
    }
    ND.prototype.startSide = ND.prototype.endSide = -1;
    class qD {
      constructor() {
        this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
      }
      eq(DD) {
        return this.anchorNode == DD.anchorNode && this.anchorOffset == DD.anchorOffset && this.focusNode == DD.focusNode && this.focusOffset == DD.focusOffset
      }
      setRange(DD) {
        let {
          anchorNode: zD,
          focusNode: wD
        } = DD;
        this.set(zD, Math.min(DD.anchorOffset, zD ? vD(zD) : 0), wD, Math.min(DD.focusOffset, wD ? vD(wD) : 0))
      }
      set(DD, zD, wD, pD) {
        this.anchorNode = DD, this.anchorOffset = zD, this.focusNode = wD, this.focusOffset = pD
      }
    }
    let Dz, zz = null;

    function wz(DD) {
      if (DD.setActive) return DD.setActive();
      if (zz) return DD.focus(zz);
      let zD = [];
      for (let wD = DD; wD && (zD.push(wD, wD.scrollTop, wD.scrollLeft), wD != wD.ownerDocument); wD = wD.parentNode);
      if (DD.focus(null == zz ? {
          get preventScroll() {
            return zz = {
              preventScroll: !0
            }, !0
          }
        } : void 0), !zz) {
        zz = !1;
        for (let DD = 0; DD < zD.length;) {
          let wD = zD[DD++],
            pD = zD[DD++],
            sD = zD[DD++];
          wD.scrollTop != pD && (wD.scrollTop = pD), wD.scrollLeft != sD && (wD.scrollLeft = sD)
        }
      }
    }

    function pz(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zD,
        pD = Dz || (Dz = document.createRange());
      return pD.setEnd(DD, wD), pD.setStart(DD, zD), pD
    }

    function sz(DD, zD, wD, pD) {
      let sD = {
        key: zD,
        code: zD,
        keyCode: wD,
        which: wD,
        cancelable: !0
      };
      pD && ({
        altKey: sD.altKey,
        ctrlKey: sD.ctrlKey,
        shiftKey: sD.shiftKey,
        metaKey: sD.metaKey
      } = pD);
      let KD = new KeyboardEvent("keydown", sD);
      KD.synthetic = !0, DD.dispatchEvent(KD);
      let rD = new KeyboardEvent("keyup", sD);
      return rD.synthetic = !0, DD.dispatchEvent(rD), KD.defaultPrevented || rD.defaultPrevented
    }

    function Kz(DD) {
      return DD instanceof Window ? DD.pageYOffset > Math.max(0, DD.document.documentElement.scrollHeight - DD.innerHeight - 4) : DD.scrollTop > Math.max(1, DD.scrollHeight - DD.clientHeight - 4)
    }

    function rz(DD, zD) {
      for (let wD = DD, pD = zD;;) {
        if (3 == wD.nodeType && pD > 0) return {
          node: wD,
          offset: pD
        };
        if (1 == wD.nodeType && pD > 0) {
          if ("false" == wD.contentEditable) return null;
          wD = wD.childNodes[pD - 1], pD = vD(wD)
        } else {
          if (!wD.parentNode || aD(wD)) return null;
          pD = oD(wD), wD = wD.parentNode
        }
      }
    }

    function Lz(DD, zD) {
      for (let wD = DD, pD = zD;;) {
        if (3 == wD.nodeType && pD < wD.nodeValue.length) return {
          node: wD,
          offset: pD
        };
        if (1 == wD.nodeType && pD < wD.childNodes.length) {
          if ("false" == wD.contentEditable) return null;
          wD = wD.childNodes[pD], pD = 0
        } else {
          if (!wD.parentNode || aD(wD)) return null;
          pD = oD(wD) + 1, wD = wD.parentNode
        }
      }
    }
    QD.safari && QD.safari_version >= 26 && (zz = !1);
    class cz {
      constructor(DD, zD) {
        let wD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.node = DD, this.offset = zD, this.precise = wD
      }
      static before(DD, zD) {
        return new cz(DD.parentNode, oD(DD), zD)
      }
      static after(DD, zD) {
        return new cz(DD.parentNode, oD(DD) + 1, zD)
      }
    }
    var gz = function(DD) {
      return DD[DD.LTR = 0] = "LTR", DD[DD.RTL = 1] = "RTL", DD
    }(gz || (gz = {}));
    const Rz = gz.LTR,
      Az = gz.RTL;

    function Uz(DD) {
      let zD = [];
      for (let wD = 0; wD < DD.length; wD++) zD.push(1 << +DD[wD]);
      return zD
    }
    const fz = Uz("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),
      Iz = Uz("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),
      Bz = Object.create(null),
      Gz = [];
    for (let ir of ["()", "[]", "{}"]) {
      let DD = ir.charCodeAt(0),
        zD = ir.charCodeAt(1);
      Bz[DD] = zD, Bz[zD] = -DD
    }

    function hz(DD) {
      return DD <= 247 ? fz[DD] : 1424 <= DD && DD <= 1524 ? 2 : 1536 <= DD && DD <= 1785 ? Iz[DD - 1536] : 1774 <= DD && DD <= 2220 ? 4 : 8192 <= DD && DD <= 8204 ? 256 : 64336 <= DD && DD <= 65023 ? 4 : 1
    }
    const nz = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
    class Mz {
      get dir() {
        return this.level % 2 ? Az : Rz
      }
      constructor(DD, zD, wD) {
        this.from = DD, this.to = zD, this.level = wD
      }
      side(DD, zD) {
        return this.dir == zD == DD ? this.to : this.from
      }
      forward(DD, zD) {
        return DD == (this.dir == zD)
      }
      static find(DD, zD, wD, pD) {
        let sD = -1;
        for (let KD = 0; KD < DD.length; KD++) {
          let rD = DD[KD];
          if (rD.from <= zD && rD.to >= zD) {
            if (rD.level == wD) return KD;
            (sD < 0 || (0 != pD ? pD < 0 ? rD.from < zD : rD.to > zD : DD[sD].level > rD.level)) && (sD = KD)
          }
        }
        if (sD < 0) throw new RangeError("Index out of range");
        return sD
      }
    }

    function Oz(DD, zD) {
      if (DD.length != zD.length) return !1;
      for (let wD = 0; wD < DD.length; wD++) {
        let pD = DD[wD],
          sD = zD[wD];
        if (pD.from != sD.from || pD.to != sD.to || pD.direction != sD.direction || !Oz(pD.inner, sD.inner)) return !1
      }
      return !0
    }
    const Jz = [];

    function Ez(DD, zD, wD, pD, sD, KD, rD) {
      let LD = pD % 2 ? 2 : 1;
      if (pD % 2 == sD % 2)
        for (let cD = zD, gD = 0; cD < wD;) {
          let zD = !0,
            RD = !1;
          if (gD == KD.length || cD < KD[gD].from) {
            let DD = Jz[cD];
            DD != LD && (zD = !1, RD = 16 == DD)
          }
          let AD = zD || 1 != LD ? null : [],
            UD = zD ? pD : pD + 1,
            fD = cD;
          DD: for (;;)
            if (gD < KD.length && fD == KD[gD].from) {
              if (RD) break DD;
              let ID = KD[gD];
              if (!zD)
                for (let DD = ID.to, zD = gD + 1;;) {
                  if (DD == wD) break DD;
                  if (!(zD < KD.length && KD[zD].from == DD)) {
                    if (Jz[DD] == LD) break DD;
                    break
                  }
                  DD = KD[zD++].to
                }
              if (gD++, AD) AD.push(ID);
              else {
                ID.from > cD && rD.push(new Mz(cD, ID.from, UD)), Qz(DD, ID.direction == Rz != !(UD % 2) ? pD + 1 : pD, sD, ID.inner, ID.from, ID.to, rD), cD = ID.to
              }
              fD = ID.to
            } else {
              if (fD == wD || (zD ? Jz[fD] != LD : Jz[fD] == LD)) break;
              fD++
            } AD ? Ez(DD, cD, fD, pD + 1, sD, AD, rD) : cD < fD && rD.push(new Mz(cD, fD, UD)), cD = fD
        } else
          for (let cD = wD, gD = KD.length; cD > zD;) {
            let wD = !0,
              RD = !1;
            if (!gD || cD > KD[gD - 1].to) {
              let DD = Jz[cD - 1];
              DD != LD && (wD = !1, RD = 16 == DD)
            }
            let AD = wD || 1 != LD ? null : [],
              UD = wD ? pD : pD + 1,
              fD = cD;
            DD: for (;;)
              if (gD && fD == KD[gD - 1].to) {
                if (RD) break DD;
                let ID = KD[--gD];
                if (!wD)
                  for (let DD = ID.from, wD = gD;;) {
                    if (DD == zD) break DD;
                    if (!wD || KD[wD - 1].to != DD) {
                      if (Jz[DD - 1] == LD) break DD;
                      break
                    }
                    DD = KD[--wD].from
                  }
                if (AD) AD.push(ID);
                else {
                  ID.to < cD && rD.push(new Mz(ID.to, cD, UD)), Qz(DD, ID.direction == Rz != !(UD % 2) ? pD + 1 : pD, sD, ID.inner, ID.from, ID.to, rD), cD = ID.from
                }
                fD = ID.from
              } else {
                if (fD == zD || (wD ? Jz[fD - 1] != LD : Jz[fD - 1] == LD)) break;
                fD--
              } AD ? Ez(DD, fD, cD, pD + 1, sD, AD, rD) : fD < cD && rD.push(new Mz(fD, cD, UD)), cD = fD
          }
    }

    function Qz(DD, zD, wD, pD, sD, KD, rD) {
      let LD = zD % 2 ? 2 : 1;
      ! function(DD, zD, wD, pD, sD) {
        for (let KD = 0; KD <= pD.length; KD++) {
          let rD = KD ? pD[KD - 1].to : zD,
            LD = KD < pD.length ? pD[KD].from : wD,
            cD = KD ? 256 : sD;
          for (let zD = rD, wD = cD, pD = cD; zD < LD; zD++) {
            let sD = hz(DD.charCodeAt(zD));
            512 == sD ? sD = wD : 8 == sD && 4 == pD && (sD = 16), Jz[zD] = 4 == sD ? 2 : sD, 7 & sD && (pD = sD), wD = sD
          }
          for (let DD = rD, zD = cD, pD = cD; DD < LD; DD++) {
            let sD = Jz[DD];
            if (128 == sD) DD < LD - 1 && zD == Jz[DD + 1] && 24 & zD ? sD = Jz[DD] = zD : Jz[DD] = 256;
            else if (64 == sD) {
              let sD = DD + 1;
              for (; sD < LD && 64 == Jz[sD];) sD++;
              let KD = DD && 8 == zD || sD < wD && 8 == Jz[sD] ? 1 == pD ? 1 : 8 : 256;
              for (let zD = DD; zD < sD; zD++) Jz[zD] = KD;
              DD = sD - 1
            } else 8 == sD && 1 == pD && (Jz[DD] = 1);
            zD = sD, 7 & sD && (pD = sD)
          }
        }
      }(DD, sD, KD, pD, LD),
      function(DD, zD, wD, pD, sD) {
        let KD = 1 == sD ? 2 : 1;
        for (let rD = 0, LD = 0, cD = 0; rD <= pD.length; rD++) {
          let gD = rD ? pD[rD - 1].to : zD,
            RD = rD < pD.length ? pD[rD].from : wD;
          for (let zD, wD, pD, rD = gD; rD < RD; rD++)
            if (wD = Bz[zD = DD.charCodeAt(rD)])
              if (wD < 0) {
                for (let DD = LD - 3; DD >= 0; DD -= 3)
                  if (Gz[DD + 1] == -wD) {
                    let zD = Gz[DD + 2],
                      wD = 2 & zD ? sD : 4 & zD ? 1 & zD ? KD : sD : 0;
                    wD && (Jz[rD] = Jz[Gz[DD]] = wD), LD = DD;
                    break
                  }
              } else {
                if (189 == Gz.length) break;
                Gz[LD++] = rD, Gz[LD++] = zD, Gz[LD++] = cD
              }
          else if (2 == (pD = Jz[rD]) || 1 == pD) {
            let DD = pD == sD;
            cD = DD ? 0 : 1;
            for (let zD = LD - 3; zD >= 0; zD -= 3) {
              let wD = Gz[zD + 2];
              if (2 & wD) break;
              if (DD) Gz[zD + 2] |= 2;
              else {
                if (4 & wD) break;
                Gz[zD + 2] |= 4
              }
            }
          }
        }
      }(DD, sD, KD, pD, LD),
      function(DD, zD, wD, pD) {
        for (let sD = 0, KD = pD; sD <= wD.length; sD++) {
          let rD = sD ? wD[sD - 1].to : DD,
            LD = sD < wD.length ? wD[sD].from : zD;
          for (let cD = rD; cD < LD;) {
            let rD = Jz[cD];
            if (256 == rD) {
              let rD = cD + 1;
              for (;;)
                if (rD == LD) {
                  if (sD == wD.length) break;
                  rD = wD[sD++].to, LD = sD < wD.length ? wD[sD].from : zD
                } else {
                  if (256 != Jz[rD]) break;
                  rD++
                } let gD = 1 == KD,
                RD = gD == (1 == (rD < zD ? Jz[rD] : pD)) ? gD ? 1 : 2 : pD;
              for (let zD = rD, pD = sD, KD = pD ? wD[pD - 1].to : DD; zD > cD;) zD == KD && (zD = wD[--pD].from, KD = pD ? wD[pD - 1].to : DD), Jz[--zD] = RD;
              cD = rD
            } else KD = rD, cD++
          }
        }
      }(sD, KD, pD, LD), Ez(DD, sD, KD, zD, wD, pD, rD)
    }

    function Xz(DD, zD, wD) {
      if (!DD) return [new Mz(0, 0, zD == Az ? 1 : 0)];
      if (zD == Rz && !wD.length && !nz.test(DD)) return Vz(DD.length);
      if (wD.length)
        for (; DD.length > Jz.length;) Jz[Jz.length] = 256;
      let pD = [],
        sD = zD == Rz ? 0 : 1;
      return Qz(DD, sD, sD, wD, 0, DD.length, pD), pD
    }

    function Vz(DD) {
      return [new Mz(0, DD, 0)]
    }
    let Pz = "";

    function Cz(DD, zD, wD, sD, KD) {
      var rD;
      let LD = sD.head - DD.from,
        cD = Mz.find(zD, LD, null !== (rD = sD.bidiLevel) && void 0 !== rD ? rD : -1, sD.assoc),
        gD = zD[cD],
        RD = gD.side(KD, wD);
      if (LD == RD) {
        let DD = cD += KD ? 1 : -1;
        if (DD < 0 || DD >= zD.length) return null;
        gD = zD[cD = DD], LD = gD.side(!KD, wD), RD = gD.side(KD, wD)
      }
      let AD = (0, pD._)(DD.text, LD, gD.forward(KD, wD));
      (AD < gD.from || AD > gD.to) && (AD = RD), Pz = DD.text.slice(Math.min(LD, AD), Math.max(LD, AD));
      let UD = cD == (KD ? zD.length - 1 : 0) ? null : zD[cD + (KD ? 1 : -1)];
      return UD && AD == RD && UD.level + (KD ? 0 : 1) < gD.level ? pD.j.cursor(UD.side(!KD, wD) + DD.from, UD.forward(KD, wD) ? 1 : -1, UD.level) : pD.j.cursor(AD + DD.from, gD.forward(KD, wD) ? -1 : 1, gD.level)
    }

    function xz(DD, zD, wD) {
      for (let pD = zD; pD < wD; pD++) {
        let zD = hz(DD.charCodeAt(pD));
        if (1 == zD) return Rz;
        if (2 == zD || 4 == zD) return Az
      }
      return Rz
    }
    const Tz = pD.n.define(),
      bz = pD.n.define(),
      jz = pD.n.define(),
      dz = pD.n.define(),
      Sz = pD.n.define(),
      iz = pD.n.define(),
      lz = pD.n.define(),
      Wz = pD.n.define(),
      Nz = pD.n.define(),
      Zz = pD.n.define({
        combine: DD => DD.some((DD => DD))
      }),
      yz = pD.n.define({
        combine: DD => DD.some((DD => DD))
      }),
      kz = pD.n.define();
    class mz {
      constructor(DD, zD, wD, pD, sD) {
        let KD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.range = DD, this.y = zD, this.x = wD, this.yMargin = pD, this.xMargin = sD, this.isSnapshot = KD
      }
      map(DD) {
        return DD.empty ? this : new mz(this.range.map(DD), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
      clip(DD) {
        return this.range.to <= DD.doc.length ? this : new mz(pD.j.cursor(DD.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
    }
    const ez = pD.E.define({
        map: (DD, zD) => DD.map(zD)
      }),
      oz = pD.E.define();

    function az(DD, zD, wD) {
      let pD = DD.facet(dz);
      pD.length ? pD[0](zD) : window.onerror && window.onerror(String(zD), wD, void 0, void 0, zD) || (wD ? console.error(wD + ":", zD) : console.error(zD))
    }
    const uz = pD.n.define({
      combine: DD => !DD.length || DD[0]
    });
    let vz = 0;
    const tz = pD.n.define({
      combine: DD => DD.filter(((zD, wD) => {
        for (let pD = 0; pD < wD; pD++)
          if (DD[pD].plugin == zD.plugin) return !1;
        return !0
      }))
    });
    class Fz {
      constructor(DD, zD, wD, pD, sD) {
        this.id = DD, this.create = zD, this.domEventHandlers = wD, this.domEventObservers = pD, this.baseExtensions = sD(this), this.extension = this.baseExtensions.concat(tz.of({
          plugin: this,
          arg: void 0
        }))
      }
      of(DD) {
        return this.baseExtensions.concat(tz.of({
          plugin: this,
          arg: DD
        }))
      }
      static define(DD, zD) {
        const {
          eventHandlers: wD,
          eventObservers: pD,
          provide: sD,
          BD: KD
        } = zD || {};
        return new Fz(vz++, DD, wD, pD, (DD => {
          let zD = [];
          return KD && zD.push(Dw.of((zD => {
            let wD = zD.plugin(DD);
            return wD ? KD(wD) : jD.none
          }))), sD && zD.push(sD(DD)), zD
        }))
      }
      static fromClass(DD, zD) {
        return Fz.define(((zD, wD) => new DD(zD, wD)), zD)
      }
    }
    class Yz {
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
            } catch (zD) {
              if (az(DD.state, zD, "CodeMirror plugin crashed"), this.value.destroy) try {
                this.value.destroy()
              } catch (wD) {}
              this.deactivate()
            }
          }
        } else if (this.spec) try {
          this.value = this.spec.plugin.create(DD, this.spec.arg)
        } catch (zD) {
          az(DD.state, zD, "CodeMirror plugin crashed"), this.deactivate()
        }
        return this
      }
      destroy(DD) {
        var zD;
        if (null === (zD = this.value) || void 0 === zD ? void 0 : zD.destroy) try {
          this.value.destroy()
        } catch (wD) {
          az(DD.state, wD, "CodeMirror plugin crashed")
        }
      }
      deactivate() {
        this.spec = this.value = null
      }
    }
    const Hz = pD.n.define(),
      qz = pD.n.define(),
      Dw = pD.n.define(),
      zw = pD.n.define(),
      ww = pD.n.define(),
      pw = pD.n.define(),
      sw = pD.n.define();

    function Kw(DD, zD) {
      let wD = DD.state.facet(sw);
      if (!wD.length) return wD;
      let sD = wD.map((zD => zD instanceof Function ? zD(DD) : zD)),
        KD = [];
      return pD.z.spans(sD, zD.from, zD.to, {
        point() {},
        span(DD, wD, pD, sD) {
          let rD = DD - zD.from,
            LD = wD - zD.from,
            cD = KD;
          for (let KD = pD.length - 1; KD >= 0; KD--, sD--) {
            let DD, wD = pD[KD].spec.bidiIsolate;
            if (null == wD && (wD = xz(zD.text, rD, LD)), sD > 0 && cD.length && (DD = cD[cD.length - 1]).to == rD && DD.direction == wD) DD.to = LD, cD = DD.inner;
            else {
              let DD = {
                from: rD,
                to: LD,
                direction: wD,
                inner: []
              };
              cD.push(DD), cD = DD.inner
            }
          }
        }
      }), KD
    }
    const rw = pD.n.define();

    function Lw(DD) {
      let zD = 0,
        wD = 0,
        pD = 0,
        sD = 0;
      for (let KD of DD.state.facet(rw)) {
        let rD = KD(DD);
        rD && (null != rD.left && (zD = Math.max(zD, rD.left)), null != rD.right && (wD = Math.max(wD, rD.right)), null != rD.top && (pD = Math.max(pD, rD.top)), null != rD.bottom && (sD = Math.max(sD, rD.bottom)))
      }
      return {
        left: zD,
        right: wD,
        top: pD,
        bottom: sD
      }
    }
    const gw = pD.n.define();
    class Rw {
      constructor(DD, zD, wD, pD) {
        this.fromA = DD, this.toA = zD, this.fromB = wD, this.toB = pD
      }
      join(DD) {
        return new Rw(Math.min(this.fromA, DD.fromA), Math.max(this.toA, DD.toA), Math.min(this.fromB, DD.fromB), Math.max(this.toB, DD.toB))
      }
      addToSet(DD) {
        let zD = DD.length,
          wD = this;
        for (; zD > 0; zD--) {
          let pD = DD[zD - 1];
          if (!(pD.fromA > wD.toA)) {
            if (pD.toA < wD.fromA) break;
            wD = wD.join(pD), DD.splice(zD - 1, 1)
          }
        }
        return DD.splice(zD, 0, wD), DD
      }
      static extendWithRanges(DD, zD) {
        if (0 == zD.length) return DD;
        let wD = [];
        for (let pD = 0, sD = 0, KD = 0;;) {
          let rD = pD < DD.length ? DD[pD].fromB : 1e9,
            LD = sD < zD.length ? zD[sD] : 1e9,
            cD = Math.min(rD, LD);
          if (1e9 == cD) break;
          let gD = cD + KD,
            RD = cD,
            AD = gD;
          for (;;)
            if (sD < zD.length && zD[sD] <= RD) {
              let wD = zD[sD + 1];
              sD += 2, RD = Math.max(RD, wD);
              for (let zD = pD; zD < DD.length && DD[zD].fromB <= RD; zD++) KD = DD[zD].toA - DD[zD].toB;
              AD = Math.max(AD, wD + KD)
            } else {
              if (!(pD < DD.length && DD[pD].fromB <= RD)) break;
              {
                let zD = DD[pD++];
                RD = Math.max(RD, zD.toB), AD = Math.max(AD, zD.toA), KD = zD.toA - zD.toB
              }
            } wD.push(new Rw(gD, AD, cD, RD))
        }
        return wD
      }
    }
    class Aw {
      constructor(DD, zD, wD) {
        this.view = DD, this.state = zD, this.transactions = wD, this.flags = 0, this.startState = DD.state, this.changes = pD.ChangeSet.empty(this.startState.doc.length);
        for (let pD of wD) this.changes = this.changes.compose(pD.changes);
        let sD = [];
        this.changes.iterChangedRanges(((DD, zD, wD, pD) => sD.push(new Rw(DD, zD, wD, pD)))), this.changedRanges = sD
      }
      static create(DD, zD, wD) {
        return new Aw(DD, zD, wD)
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
    const Uw = [];
    class fw {
      constructor(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.dom = DD, this.length = zD, this.flags = wD, this.parent = null, DD.cmTile = this
      }
      get breakAfter() {
        return 1 & this.flags
      }
      get children() {
        return Uw
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
          DD && function(DD, zD) {
            for (let wD = DD.attributes.length - 1; wD >= 0; wD--) {
              let pD = DD.attributes[wD].name;
              null == zD[pD] && DD.removeAttribute(pD)
            }
            for (let wD in zD) {
              let pD = zD[wD];
              "style" == wD ? DD.style.cssText = pD : DD.getAttribute(wD) != pD && DD.setAttribute(wD, pD)
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
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.posAtStart;
        for (let wD of this.children) {
          if (wD == DD) return zD;
          zD += wD.length + wD.breakAfter
        }
        throw new RangeError("Invalid child in posBefore")
      }
      posAfter(DD) {
        return this.posBefore(DD) + DD.length
      }
      covers(DD) {
        return !0
      }
      coordsIn(DD, zD) {
        return null
      }
      domPosFor(DD, zD) {
        let wD = oD(this.dom),
          pD = this.length ? DD > 0 : zD > 0;
        return new cz(this.parent.dom, wD + (pD ? 1 : 0), 0 == DD || DD == this.length)
      }
      markDirty(DD) {
        this.flags &= -3, DD && (this.flags |= 4), this.parent && 2 & this.parent.flags && this.parent.markDirty(!1)
      }
      get overrideDOMText() {
        return null
      }
      get root() {
        for (let DD = this; DD; DD = DD.parent)
          if (DD instanceof Gw) return DD;
        return null
      }
      static get(DD) {
        return DD.cmTile
      }
    }
    class Iw extends fw {
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
        let zD, wD = this.dom,
          pD = null,
          sD = (null === DD || void 0 === DD ? void 0 : DD.node) == wD ? DD : null,
          KD = 0;
        for (let rD of this.children) {
          if (rD.sync(DD), KD += rD.length + rD.breakAfter, zD = pD ? pD.nextSibling : wD.firstChild, sD && zD != rD.dom && (sD.written = !0), rD.dom.parentNode == wD)
            for (; zD && zD != rD.dom;) zD = Bw(zD);
          else wD.insertBefore(rD.dom, zD);
          pD = rD.dom
        }
        for (zD = pD ? pD.nextSibling : wD.firstChild, sD && zD && (sD.written = !0); zD;) zD = Bw(zD);
        this.length = KD
      }
    }

    function Bw(DD) {
      let zD = DD.nextSibling;
      return DD.parentNode.removeChild(DD), zD
    }
    class Gw extends Iw {
      constructor(DD, zD) {
        super(zD), this.view = DD
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
          let zD = fw.get(DD);
          if (zD && this.owns(zD)) return zD;
          DD = DD.parentNode
        }
      }
      blockTiles(DD) {
        for (let zD = [], wD = this, pD = 0, sD = 0;;)
          if (pD == wD.children.length) {
            if (!zD.length) return;
            wD = wD.parent, wD.breakAfter && sD++, pD = zD.pop()
          } else {
            let KD = wD.children[pD++];
            if (KD instanceof hw) zD.push(pD), wD = KD, pD = 0;
            else {
              let zD = sD + KD.length,
                wD = DD(KD, sD);
              if (void 0 !== wD) return wD;
              sD = zD + KD.breakAfter
            }
          }
      }
      resolveBlock(DD, zD) {
        let wD, pD, sD = -1,
          KD = -1;
        if (this.blockTiles(((rD, LD) => {
            let cD = LD + rD.length;
            if (DD >= LD && DD <= cD) {
              if (rD.isWidget() && zD >= -1 && zD <= 1) {
                if (32 & rD.flags) return !0;
                16 & rD.flags && (wD = void 0)
              }(LD < DD || DD == cD && (zD < -1 ? rD.length : rD.covers(1))) && (!wD || !rD.isWidget() && wD.isWidget()) && (wD = rD, sD = DD - LD), (cD > DD || DD == LD && (zD > 1 ? rD.length : rD.covers(-1))) && (!pD || !rD.isWidget() && pD.isWidget()) && (pD = rD, KD = DD - LD)
            }
          })), !wD && !pD) throw new Error("No tile at position " + DD);
        return wD && zD < 0 || !pD ? {
          tile: wD,
          offset: sD
        } : {
          tile: pD,
          offset: KD
        }
      }
    }
    class hw extends Iw {
      constructor(DD, zD) {
        super(DD), this.wrapper = zD
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
      static of (DD, zD) {
        let wD = new hw(zD || document.createElement(DD.tagName), DD);
        return zD || (wD.flags |= 4), wD
      }
    }
    class nw extends Iw {
      constructor(DD, zD) {
        super(DD), this.attrs = zD
      }
      isLine() {
        return !0
      }
      static start(DD, zD, wD) {
        let pD = new nw(zD || document.createElement("div"), DD);
        return zD && wD || (pD.flags |= 4), pD
      }
      get domAttrs() {
        return this.attrs
      }
      resolveInline(DD, zD, wD) {
        let pD = null,
          sD = -1,
          KD = null,
          rD = -1;
        ! function DD(LD, cD) {
          for (let gD = 0, RD = 0; gD < LD.children.length && RD <= cD; gD++) {
            let AD = LD.children[gD],
              UD = RD + AD.length;
            UD >= cD && (AD.isComposite() ? DD(AD, cD - RD) : (!KD || KD.isHidden && (zD > 0 || wD && Mw(KD, AD))) && (UD > cD || 32 & AD.flags) ? (KD = AD, rD = cD - RD) : (RD < cD || 16 & AD.flags && !AD.isHidden) && (pD = AD, sD = cD - RD)), RD = UD
          }
        }(this, DD);
        let LD = (zD < 0 ? pD : KD) || pD || KD;
        return LD ? {
          tile: LD,
          offset: LD == pD ? sD : rD
        } : null
      }
      coordsIn(DD, zD) {
        let wD = this.resolveInline(DD, zD, !0);
        return wD ? wD.tile.coordsIn(Math.max(0, wD.offset), zD) : function(DD) {
          let zD = DD.dom.lastChild;
          if (!zD) return DD.dom.getBoundingClientRect();
          let wD = mD(zD);
          return wD[wD.length - 1] || null
        }(this)
      }
      domIn(DD, zD) {
        let wD = this.resolveInline(DD, zD);
        if (wD) {
          let {
            tile: DD,
            offset: pD
          } = wD;
          if (this.dom.contains(DD.dom)) return DD.isText() ? new cz(DD.dom, Math.min(DD.dom.nodeValue.length, pD)) : DD.domPosFor(pD, 16 & DD.flags ? 1 : 32 & DD.flags ? -1 : zD);
          let sD = wD.tile.parent,
            KD = !1;
          for (let zD of sD.children) {
            if (KD) return new cz(zD.dom, 0);
            zD == wD.tile && (KD = !0)
          }
        }
        return new cz(this.dom, 0)
      }
    }

    function Mw(DD, zD) {
      let wD = DD.coordsIn(0, 1),
        pD = zD.coordsIn(0, 1);
      return wD && pD && pD.top < wD.bottom
    }
    class Ow extends Iw {
      constructor(DD, zD) {
        super(DD), this.mark = zD
      }
      get domAttrs() {
        return this.mark.attrs
      }
      static of (DD, zD) {
        let wD = new Ow(zD || document.createElement(DD.tagName), DD);
        return zD || (wD.flags |= 4), wD
      }
    }
    class Jw extends fw {
      constructor(DD, zD) {
        super(DD, zD.length), this.text = zD
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
      coordsIn(DD, zD) {
        let wD = this.dom.nodeValue.length;
        DD > wD && (DD = wD);
        let pD = DD,
          sD = DD,
          KD = 0;
        0 == DD && zD < 0 || DD == wD && zD >= 0 ? QD.chrome || QD.gecko || (DD ? (pD--, KD = 1) : sD < wD && (sD++, KD = -1)) : zD < 0 ? pD-- : sD < wD && sD++;
        let rD = pz(this.dom, pD, sD).getClientRects();
        if (!rD.length) return null;
        let LD = rD[(KD ? KD < 0 : zD >= 0) ? 0 : rD.length - 1];
        return QD.safari && !KD && 0 == LD.width && (LD = Array.prototype.find.call(rD, (DD => DD.width)) || LD), KD ? tD(LD, KD < 0) : LD || null
      }
      static of (DD, zD) {
        let wD = new Jw(zD || document.createTextNode(DD), DD);
        return zD || (wD.flags |= 2), wD
      }
    }
    class Ew extends fw {
      constructor(DD, zD, wD, pD) {
        super(DD, zD, pD), this.widget = wD
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
      coordsIn(DD, zD) {
        return this.coordsInWidget(DD, zD, !1)
      }
      coordsInWidget(DD, zD, wD) {
        let pD = this.widget.coordsAt(this.dom, DD, zD);
        if (pD) return pD;
        if (wD) return tD(this.dom.getBoundingClientRect(), this.length ? 0 == DD : zD <= 0);
        {
          let zD = this.dom.getClientRects(),
            wD = null;
          if (!zD.length) return null;
          let pD = !!(16 & this.flags) || !(32 & this.flags) && DD > 0;
          for (let sD = pD ? zD.length - 1 : 0; wD = zD[sD], !(DD > 0 ? 0 == sD : sD == zD.length - 1 || wD.top < wD.bottom); sD += pD ? -1 : 1);
          return tD(wD, !pD)
        }
      }
      get overrideDOMText() {
        if (!this.length) return pD.K.empty;
        let {
          root: DD
        } = this;
        if (!DD) return pD.K.empty;
        let zD = this.posAtStart;
        return DD.view.state.doc.slice(zD, zD + this.length)
      }
      destroy() {
        super.destroy(), this.widget.destroy(this.dom)
      }
      static of (DD, zD, wD, pD, sD) {
        return sD || (sD = DD.toDOM(zD), DD.editable || (sD.contentEditable = "false")), new Ew(sD, wD, DD, pD)
      }
    }
    class Qw extends fw {
      constructor(DD) {
        let zD = document.createElement("img");
        zD.className = "cm-widgetBuffer", zD.setAttribute("aria-hidden", "true"), super(zD, 0, DD)
      }
      get isHidden() {
        return !0
      }
      get overrideDOMText() {
        return pD.K.empty
      }
      coordsIn(DD) {
        return this.dom.getBoundingClientRect()
      }
    }
    class Xw {
      constructor(DD) {
        this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = DD
      }
      advance(DD, zD, wD) {
        let {
          tile: pD,
          index: sD,
          beforeBreak: KD,
          parents: rD
        } = this;
        for (; DD || zD > 0;)
          if (pD.isComposite())
            if (KD) {
              if (!DD) break;
              wD && wD.break(), DD--, KD = !1
            } else if (sD == pD.children.length) {
          if (!DD && !rD.length) break;
          wD && wD.leave(pD), KD = !!pD.breakAfter, ({
            tile: pD,
            index: sD
          } = rD.pop()), sD++
        } else {
          let LD = pD.children[sD],
            cD = LD.breakAfter;
          !(zD > 0 ? LD.length <= DD : LD.length < DD) || wD && !1 === wD.skip(LD, 0, LD.length) && LD.isComposite ? (rD.push({
            tile: pD,
            index: sD
          }), pD = LD, sD = 0, wD && LD.isComposite() && wD.enter(LD)) : (KD = !!cD, sD++, DD -= LD.length)
        } else if (sD == pD.length) KD = !!pD.breakAfter, ({
          tile: pD,
          index: sD
        } = rD.pop()), sD++;
        else {
          if (!DD) break;
          {
            let zD = Math.min(DD, pD.length - sD);
            wD && wD.skip(pD, sD, sD + zD), DD -= zD, sD += zD
          }
        }
        return this.tile = pD, this.index = sD, this.beforeBreak = KD, this
      }
      get root() {
        return this.parents.length ? this.parents[0].tile : this.tile
      }
    }
    class Vw {
      constructor(DD, zD, wD, pD) {
        this.from = DD, this.to = zD, this.wrapper = wD, this.rank = pD
      }
    }
    class Pw {
      constructor(DD, zD, wD) {
        this.cache = DD, this.root = zD, this.blockWrappers = wD, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0
      }
      addText(DD, zD, wD, pD) {
        var sD;
        this.flushBuffer();
        let KD = this.ensureMarks(zD, wD),
          rD = KD.lastChild;
        if (rD && rD.isText() && !(8 & rD.flags) && rD.length + DD.length < 512) {
          this.cache.reused.set(rD, 2), (KD.children[KD.children.length - 1] = new Jw(rD.dom, rD.text + DD)).parent = KD
        } else KD.append(pD || Jw.of(DD, null === (sD = this.cache.find(Jw)) || void 0 === sD ? void 0 : sD.dom));
        this.pos += DD.length, this.afterWidget = null
      }
      addComposition(DD, zD) {
        let wD = this.curLine;
        wD.dom != zD.line.dom && (wD.setDOM(this.cache.reused.has(zD.line) ? Sw(zD.line.dom) : zD.line.dom), this.cache.reused.set(zD.line, 2));
        let pD = wD;
        for (let rD = zD.marks.length - 1; rD >= 0; rD--) {
          let DD = zD.marks[rD],
            wD = pD.lastChild;
          if (wD instanceof Ow && wD.mark.eq(DD.mark)) wD.dom != DD.dom && wD.setDOM(Sw(DD.dom)), pD = wD;
          else {
            if (this.cache.reused.get(DD)) {
              let zD = fw.get(DD.dom);
              zD && zD.setDOM(Sw(DD.dom))
            }
            let zD = Ow.of(DD.mark, DD.dom);
            pD.append(zD), pD = zD
          }
          this.cache.reused.set(DD, 2)
        }
        let sD = fw.get(DD.text);
        sD && this.cache.reused.set(sD, 2);
        let KD = new Jw(DD.text, DD.text.nodeValue);
        KD.flags |= 8, pD.append(KD)
      }
      addInlineWidget(DD, zD, wD) {
        let pD = this.afterWidget && 48 & DD.flags && (48 & this.afterWidget.flags) == (48 & DD.flags);
        pD || this.flushBuffer();
        let sD = this.ensureMarks(zD, wD);
        pD || 16 & DD.flags || sD.append(this.getBuffer(1)), sD.append(DD), this.pos += DD.length, this.afterWidget = DD
      }
      addMark(DD, zD, wD) {
        this.flushBuffer(), this.ensureMarks(zD, wD).append(DD), this.pos += DD.length, this.afterWidget = null
      }
      addBlockWidget(DD) {
        this.getBlockPos().append(DD), this.pos += DD.length, this.lastBlock = DD, this.endLine()
      }
      continueWidget(DD) {
        (this.afterWidget || this.lastBlock).length += DD, this.pos += DD
      }
      addLineStart(DD, zD) {
        var wD;
        DD || (DD = dw);
        let pD = nw.start(DD, zD || (null === (wD = this.cache.find(nw)) || void 0 === wD ? void 0 : wD.dom), !!zD);
        this.getBlockPos().append(this.lastBlock = this.curLine = pD)
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
      ensureMarks(DD, zD) {
        var wD;
        let pD = this.curLine;
        for (let sD = DD.length - 1; sD >= 0; sD--) {
          let KD, rD = DD[sD];
          if (zD > 0 && (KD = pD.lastChild) && KD instanceof Ow && KD.mark.eq(rD)) pD = KD, zD--;
          else {
            let DD = Ow.of(rD, null === (wD = this.cache.find(Ow, (DD => DD.mark.eq(rD)))) || void 0 === wD ? void 0 : wD.dom);
            pD.append(DD), pD = DD, zD = 0
          }
        }
        return pD
      }
      endLine() {
        if (this.curLine) {
          this.flushBuffer();
          let DD = this.curLine.lastChild;
          DD && jw(this.curLine, !1) && ("BR" == DD.dom.nodeName || !DD.isWidget() || QD.ios && jw(this.curLine, !0)) || this.curLine.append(this.cache.findWidget(lw, 0, 32) || new Ew(lw.toDOM(), 0, lw, 32)), this.curLine = this.afterWidget = null
        }
      }
      updateBlockWrappers() {
        this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
        for (let DD = this.wrappers.length - 1; DD >= 0; DD--) this.wrappers[DD].to < this.pos && this.wrappers.splice(DD, 1);
        for (let DD = this.blockWrappers; DD.value && DD.from <= this.pos; DD.next())
          if (DD.to >= this.pos) {
            let zD = new Vw(DD.from, DD.to, DD.value, DD.rank),
              wD = this.wrappers.length;
            for (; wD > 0 && (this.wrappers[wD - 1].rank - zD.rank || this.wrappers[wD - 1].to - zD.to) < 0;) wD--;
            this.wrappers.splice(wD, 0, zD)
          } this.wrapperPos = this.pos
      }
      getBlockPos() {
        var DD;
        this.updateBlockWrappers();
        let zD = this.root;
        for (let wD of this.wrappers) {
          let pD = zD.lastChild;
          if (wD.from < this.pos && pD instanceof hw && pD.wrapper.eq(wD.wrapper)) zD = pD;
          else {
            let pD = hw.of(wD.wrapper, null === (DD = this.cache.find(hw, (DD => DD.wrapper.eq(wD.wrapper)))) || void 0 === DD ? void 0 : DD.dom);
            zD.append(pD), zD = pD
          }
        }
        return zD
      }
      blockPosCovered() {
        let DD = this.lastBlock;
        return null != DD && !DD.breakAfter && (!DD.isWidget() || (160 & DD.flags) > 0)
      }
      getBuffer(DD) {
        let zD = 2 | (DD < 0 ? 16 : 32),
          wD = this.cache.find(Qw, void 0, 1);
        return wD && (wD.flags = zD), wD || new Qw(zD)
      }
      flushBuffer() {
        !this.afterWidget || 32 & this.afterWidget.flags || (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null)
      }
    }
    class Cw {
      constructor(DD) {
        this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = DD.iter()
      }
      skip(DD) {
        this.textOff + DD <= this.text.length ? this.textOff += DD : (this.skipCount += DD - (this.text.length - this.textOff), this.text = "", this.textOff = 0)
      }
      next(DD) {
        if (this.textOff == this.text.length) {
          let {
            value: zD,
            lineBreak: wD,
            done: pD
          } = this.cursor.next(this.skipCount);
          if (this.skipCount = 0, pD) throw new Error("Ran out of text content when drawing inline views");
          this.text = zD;
          let sD = this.textOff = Math.min(DD, zD.length);
          return wD ? null : zD.slice(0, sD)
        }
        let zD = Math.min(this.text.length, this.textOff + DD),
          wD = this.text.slice(this.textOff, zD);
        return this.textOff = zD, wD
      }
    }
    const xw = [Ew, nw, Jw, Ow, Qw, hw, Gw];
    for (let ir = 0; ir < xw.length; ir++) xw[ir].bucket = ir;
    class Tw {
      constructor(DD) {
        this.view = DD, this.buckets = xw.map((() => [])), this.index = xw.map((() => 0)), this.reused = new Map
      }
      add(DD) {
        let zD = DD.constructor.bucket,
          wD = this.buckets[zD];
        wD.length < 6 ? wD.push(DD) : wD[this.index[zD] = (this.index[zD] + 1) % 6] = DD
      }
      find(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          pD = DD.bucket,
          sD = this.buckets[pD],
          KD = this.index[pD];
        for (let rD = sD.length - 1; rD >= 0; rD--) {
          let DD = (rD + KD) % sD.length,
            LD = sD[DD];
          if ((!zD || zD(LD)) && !this.reused.has(LD)) return sD.splice(DD, 1), DD < KD && this.index[pD]--, this.reused.set(LD, wD), LD
        }
        return null
      }
      findWidget(DD, zD, wD) {
        let pD = this.buckets[0];
        if (pD.length)
          for (let sD = 0, KD = 0;; sD++) {
            if (sD == pD.length) {
              if (KD) return null;
              KD = 1, sD = 0
            }
            let rD = pD[sD];
            if (!this.reused.has(rD) && (0 == KD ? rD.widget.compare(DD) : rD.widget.constructor == DD.constructor && DD.updateDOM(rD.dom, this.view, rD.widget))) return pD.splice(sD, 1), sD < this.index[0] && this.index[0]--, rD.widget == DD && rD.length == zD && (497 & rD.flags) == wD ? (this.reused.set(rD, 1), rD) : (this.reused.set(rD, 2), new Ew(rD.dom, zD, DD, -498 & rD.flags | wD))
          }
      }
      reuse(DD) {
        return this.reused.set(DD, 1), DD
      }
      maybeReuse(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        if (!this.reused.has(DD)) return this.reused.set(DD, zD), DD.dom
      }
      clear() {
        for (let DD = 0; DD < this.buckets.length; DD++) this.buckets[DD].length = this.index[DD] = 0
      }
    }
    class bw {
      constructor(DD, zD, wD, sD, KD) {
        this.view = DD, this.BD = sD, this.disallowBlockEffectsFor = KD, this.openWidget = !1, this.openMarks = 0, this.cache = new Tw(DD), this.text = new Cw(DD.state.doc), this.builder = new Pw(this.cache, new Gw(DD, DD.contentDOM), pD.z.iter(wD)), this.cache.reused.set(zD, 2), this.old = new Xw(zD), this.reuseWalker = {
          skip: (DD, zD, wD) => {
            if (this.cache.add(DD), DD.isComposite()) return !1
          },
          enter: DD => this.cache.add(DD),
          leave: () => {},
          break: () => {}
        }
      }
      run(DD, zD) {
        let wD = zD && this.getCompositionContext(zD.text);
        for (let pD = 0, sD = 0, KD = 0;;) {
          let rD = KD < DD.length ? DD[KD++] : null,
            LD = rD ? rD.fromA : this.old.root.length;
          if (LD > pD) {
            let DD = LD - pD;
            this.preserve(DD, !KD, !rD), pD = LD, sD += DD
          }
          if (!rD) break;
          zD && rD.fromA <= zD.range.fromA && rD.toA >= zD.range.toA ? (this.forward(rD.fromA, zD.range.fromA, zD.range.fromA < zD.range.toA ? 1 : -1), this.emit(sD, zD.range.fromB), this.cache.clear(), this.builder.addComposition(zD, wD), this.text.skip(zD.range.toB - zD.range.fromB), this.forward(zD.range.fromA, rD.toA), this.emit(zD.range.toB, rD.toB)) : (this.forward(rD.fromA, rD.toA), this.emit(sD, rD.toB)), sD = rD.toB, pD = rD.toA
        }
        return this.builder.curLine && this.builder.endLine(), this.builder.root
      }
      preserve(DD, zD, wD) {
        let pD = function(DD) {
            let zD = [];
            for (let wD = DD.parents.length; wD > 1; wD--) {
              let pD = wD == DD.parents.length ? DD.tile : DD.parents[wD].tile;
              pD instanceof Ow && zD.push(pD.mark)
            }
            return zD
          }(this.old),
          sD = this.openMarks;
        this.old.advance(DD, wD ? 1 : -1, {
          skip: (DD, zD, wD) => {
            if (DD.isWidget())
              if (this.openWidget) this.builder.continueWidget(wD - zD);
              else {
                let KD = wD > 0 || zD < DD.length ? Ew.of(DD.widget, this.view, wD - zD, 496 & DD.flags, this.cache.maybeReuse(DD)) : this.cache.reuse(DD);
                256 & KD.flags ? (KD.flags &= -2, this.builder.addBlockWidget(KD)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(KD, pD, sD), sD = pD.length)
              }
            else if (DD.isText()) this.builder.ensureLine(null), zD || wD != DD.length || this.cache.reused.has(DD) ? (this.cache.add(DD), this.builder.addText(DD.text.slice(zD, wD), pD, sD)) : this.builder.addText(DD.text, pD, sD, this.cache.reuse(DD)), sD = pD.length;
            else if (DD.isLine()) DD.flags &= -2, this.cache.reused.set(DD, 1), this.builder.addLine(DD);
            else if (DD instanceof Qw) this.cache.add(DD);
            else {
              if (!(DD instanceof Ow)) return !1;
              this.builder.ensureLine(null), this.builder.addMark(DD, pD, sD), this.cache.reused.set(DD, 1), sD = pD.length
            }
            this.openWidget = !1
          },
          enter: DD => {
            DD.isLine() ? this.builder.addLineStart(DD.attrs, this.cache.maybeReuse(DD)) : (this.cache.add(DD), DD instanceof Ow && pD.unshift(DD.mark)), this.openWidget = !1
          },
          leave: DD => {
            DD.isLine() ? pD.length && (pD.length = sD = 0) : DD instanceof Ow && (pD.shift(), sD = Math.min(sD, pD.length))
          },
          break: () => {
            this.builder.addBreak(), this.openWidget = !1
          }
        }), this.text.skip(DD)
      }
      emit(DD, zD) {
        let wD = null,
          sD = this.builder,
          KD = 0,
          rD = pD.z.spans(this.BD, DD, zD, {
            point: (DD, zD, pD, rD, LD, cD) => {
              if (pD instanceof iD) {
                if (this.disallowBlockEffectsFor[cD]) {
                  if (pD.block) throw new RangeError("Block decorations may not be specified via plugins");
                  if (zD > this.view.state.doc.lineAt(DD).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins")
                }
                if (KD = rD.length, LD > rD.length) sD.continueWidget(zD - DD);
                else {
                  let KD = pD.widget || (pD.block ? iw.block : iw.inline),
                    cD = function(DD) {
                      let zD = DD.isReplace ? (DD.startSide < 0 ? 64 : 0) | (DD.endSide > 0 ? 128 : 0) : DD.startSide > 0 ? 32 : 16;
                      DD.block && (zD |= 256);
                      return zD
                    }(pD),
                    gD = this.cache.findWidget(KD, zD - DD, cD) || Ew.of(KD, this.view, zD - DD, cD);
                  pD.block ? (pD.startSide > 0 && sD.addLineStartIfNotCovered(wD), sD.addBlockWidget(gD)) : (sD.ensureLine(wD), sD.addInlineWidget(gD, rD, LD))
                }
                wD = null
              } else wD = function(DD, zD) {
                let wD = zD.spec.attributes,
                  pD = zD.spec.class;
                if (!wD && !pD) return DD;
                DD || (DD = {
                  class: "cm-line"
                });
                wD && XD(wD, DD);
                pD && (DD.class += " " + pD);
                return DD
              }(wD, pD);
              zD > DD && this.text.skip(zD - DD)
            },
            span: (DD, zD, pD, KD) => {
              for (let rD = DD; rD < zD;) {
                let LD = this.text.next(Math.min(512, zD - rD));
                null == LD ? (sD.addLineStartIfNotCovered(wD), sD.addBreak(), rD++) : (sD.ensureLine(wD), sD.addText(LD, pD, rD == DD ? KD : pD.length), rD += LD.length), wD = null
              }
            }
          });
        sD.addLineStartIfNotCovered(wD), this.openWidget = rD > KD, this.openMarks = rD
      }
      forward(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        zD - DD <= 10 ? this.old.advance(zD - DD, wD, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(zD - DD - 10, -1), this.old.advance(5, wD, this.reuseWalker))
      }
      getCompositionContext(DD) {
        let zD = [],
          wD = null;
        for (let pD = DD.parentNode;; pD = pD.parentNode) {
          let DD = fw.get(pD);
          if (pD == this.view.contentDOM) break;
          DD instanceof Ow ? zD.push(DD) : (null === DD || void 0 === DD ? void 0 : DD.isLine()) ? wD = DD : DD instanceof hw || ("DIV" != pD.nodeName || wD || pD == this.view.contentDOM ? wD || zD.push(Ow.of(new dD({
            tagName: pD.nodeName.toLowerCase(),
            attributes: xD(pD)
          }), pD)) : wD = new nw(pD, dw))
        }
        return {
          line: wD,
          marks: zD
        }
      }
    }

    function jw(DD, zD) {
      let wD = DD => {
        for (let pD of DD.children)
          if ((zD ? pD.isText() : pD.length) || wD(pD)) return !0;
        return !1
      };
      return wD(DD)
    }
    const dw = {
      class: "cm-line"
    };

    function Sw(DD) {
      let zD = fw.get(DD);
      return zD && zD.setDOM(DD.cloneNode()), DD
    }
    class iw extends TD {
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
    iw.inline = new iw("span"), iw.block = new iw("div");
    const lw = new class extends TD {
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
    class Ww {
      constructor(DD) {
        this.view = DD, this.BD = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = jD.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new Gw(DD, DD.contentDOM), this.updateInner([new Rw(0, 0, 0, DD.state.doc.length)], null)
      }
      update(DD) {
        var zD;
        let wD = DD.changedRanges;
        this.minWidth > 0 && wD.length && (wD.every((DD => {
          let {
            fromA: zD,
            toA: wD
          } = DD;
          return wD < this.minWidthFrom || zD > this.minWidthTo
        })) ? (this.minWidthFrom = DD.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = DD.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(DD);
        let sD = -1;
        this.view.inputState.composing >= 0 && !this.view.observer.editContext && ((null === (zD = this.domChanged) || void 0 === zD ? void 0 : zD.newSel) ? sD = this.domChanged.newSel.head : function(DD, zD) {
          let wD = !1;
          zD && DD.iterChangedRanges(((DD, pD) => {
            DD < zD.to && pD > zD.from && (wD = !0)
          }));
          return wD
        }(DD.changes, this.hasComposition) || DD.selectionSet || (sD = DD.state.selection.main.head));
        let KD = sD > -1 ? function(DD, zD, wD) {
          let pD = Zw(DD, wD);
          if (!pD) return null;
          let {
            node: sD,
            from: KD,
            to: rD
          } = pD, LD = sD.nodeValue;
          if (/[\n\r]/.test(LD)) return null;
          if (DD.state.doc.sliceString(pD.from, pD.to) != LD) return null;
          let cD = zD.invertedDesc;
          return {
            range: new Rw(cD.mapPos(KD), cD.mapPos(rD), KD, rD),
            text: sD
          }
        }(this.view, DD.changes, sD) : null;
        if (this.domChanged = null, this.hasComposition) {
          let {
            from: zD,
            to: pD
          } = this.hasComposition;
          wD = new Rw(zD, pD, DD.changes.mapPos(zD, -1), DD.changes.mapPos(pD, 1)).addToSet(wD.slice())
        }
        this.hasComposition = KD ? {
          from: KD.range.fromB,
          to: KD.range.toB
        } : null, (QD.ie || QD.chrome) && !KD && DD && DD.state.doc.lines != DD.startState.doc.lines && (this.forceSelection = !0);
        let rD = this.BD,
          LD = this.blockWrappers;
        this.updateDeco();
        let cD = function(DD, zD, wD) {
          let sD = new yw;
          return pD.z.compare(DD, zD, wD, sD), sD.changes
        }(rD, this.BD, DD.changes);
        cD.length && (wD = Rw.extendWithRanges(wD, cD));
        let gD = function(DD, zD, wD) {
          let sD = new kw;
          return pD.z.compare(DD, zD, wD, sD), sD.changes
        }(LD, this.blockWrappers, DD.changes);
        return gD.length && (wD = Rw.extendWithRanges(wD, gD)), KD && !wD.some((DD => DD.fromA <= KD.range.fromA && DD.toA >= KD.range.toA)) && (wD = KD.range.addToSet(wD.slice())), !(2 & this.tile.flags && 0 == wD.length) && (this.updateInner(wD, KD), DD.transactions.length && (this.lastUpdate = Date.now()), !0)
      }
      updateInner(DD, zD) {
        this.view.viewState.mustMeasureContent = !0;
        let {
          observer: wD
        } = this.view;
        wD.ignore((() => {
          if (zD || DD.length) {
            let wD = this.tile,
              pD = new bw(this.view, wD, this.blockWrappers, this.BD, this.dynamicDecorationMap);
            zD && fw.get(zD.text) && pD.cache.reused.set(fw.get(zD.text), 2), this.tile = pD.run(DD, zD), Nw(wD, pD.cache.reused)
          }
          this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
          let pD = QD.chrome || QD.ios ? {
            node: wD.selectionRange.focusNode,
            written: !1
          } : void 0;
          this.tile.sync(pD), !pD || !pD.written && wD.selectionRange.focusNode == pD.node && this.tile.dom.contains(pD.node) || (this.forceSelection = !0), this.tile.dom.style.height = ""
        }));
        let pD = [];
        if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
          for (let sD of this.tile.children) sD.isWidget() && sD.widget instanceof mw && pD.push(sD.dom);
        wD.updateGaps(pD)
      }
      updateEditContextFormatting(DD) {
        this.editContextFormatting = this.editContextFormatting.map(DD.changes);
        for (let zD of DD.transactions)
          for (let DD of zD.effects) DD.is(oz) && (this.editContextFormatting = DD.value)
      }
      updateSelection() {
        let DD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this.view.observer.selectionRange.focusNode || this.view.observer.readSelectionRange();
        let {
          dom: zD
        } = this.tile, wD = this.view.root.activeElement, pD = wD == zD, sD = !pD && !(this.view.state.facet(uz) || zD.tabIndex > -1) && kD(zD, this.view.observer.selectionRange) && !(wD && zD.contains(wD));
        if (!(pD || DD || sD)) return;
        let KD = this.forceSelection;
        this.forceSelection = !1;
        let rD, LD, cD = this.view.state.selection.main;
        if (cD.empty ? LD = rD = this.inlineDOMNearPos(cD.anchor, cD.assoc || 1) : (LD = this.inlineDOMNearPos(cD.head, cD.head == cD.from ? 1 : -1), rD = this.inlineDOMNearPos(cD.anchor, cD.anchor == cD.from ? 1 : -1)), QD.gecko && cD.empty && !this.hasComposition && (1 == (gD = rD).node.nodeType && gD.node.firstChild && (0 == gD.offset || "false" == gD.node.childNodes[gD.offset - 1].contentEditable) && (gD.offset == gD.node.childNodes.length || "false" == gD.node.childNodes[gD.offset].contentEditable))) {
          let DD = document.createTextNode("");
          this.view.observer.ignore((() => rD.node.insertBefore(DD, rD.node.childNodes[rD.offset] || null))), rD = LD = new cz(DD, 0), KD = !0
        }
        var gD;
        let RD = this.view.observer.selectionRange;
        !KD && RD.focusNode && (eD(rD.node, rD.offset, RD.anchorNode, RD.anchorOffset) && eD(LD.node, LD.offset, RD.focusNode, RD.focusOffset) || this.suppressWidgetCursorChange(RD, cD)) || (this.view.observer.ignore((() => {
          QD.android && QD.chrome && zD.contains(RD.focusNode) && function(DD, zD) {
            for (let wD = DD; wD && wD != zD; wD = wD.assignedSlot || wD.parentNode)
              if (1 == wD.nodeType && "false" == wD.contentEditable) return !0;
            return !1
          }(RD.focusNode, zD) && (zD.blur(), zD.focus({
            preventScroll: !0
          }));
          let DD = ZD(this.view.root);
          if (DD)
            if (cD.empty) {
              if (QD.gecko) {
                let DD = (pD = rD.node, KD = rD.offset, 1 != pD.nodeType ? 0 : (KD && "false" == pD.childNodes[KD - 1].contentEditable ? 1 : 0) | (KD < pD.childNodes.length && "false" == pD.childNodes[KD].contentEditable ? 2 : 0));
                if (DD && 3 != DD) {
                  let zD = (1 == DD ? rz : Lz)(rD.node, rD.offset);
                  zD && (rD = new cz(zD.node, zD.offset))
                }
              }
              DD.collapse(rD.node, rD.offset), null != cD.bidiLevel && void 0 !== DD.caretBidiLevel && (DD.caretBidiLevel = cD.bidiLevel)
            } else if (DD.extend) {
            DD.collapse(rD.node, rD.offset);
            try {
              DD.extend(LD.node, LD.offset)
            } catch (gD) {}
          } else {
            let zD = document.createRange();
            cD.anchor > cD.head && ([rD, LD] = [LD, rD]), zD.setEnd(LD.node, LD.offset), zD.setStart(rD.node, rD.offset), DD.removeAllRanges(), DD.addRange(zD)
          } else;
          var pD, KD;
          sD && this.view.root.activeElement == zD && (zD.blur(), wD && wD.focus())
        })), this.view.observer.setSelectionRange(rD, LD)), this.impreciseAnchor = rD.precise ? null : new cz(RD.anchorNode, RD.anchorOffset), this.impreciseHead = LD.precise ? null : new cz(RD.focusNode, RD.focusOffset)
      }
      suppressWidgetCursorChange(DD, zD) {
        return this.hasComposition && zD.empty && eD(DD.focusNode, DD.focusOffset, DD.anchorNode, DD.anchorOffset) && this.posFromDOM(DD.focusNode, DD.focusOffset) == zD.head
      }
      enforceCursorAssoc() {
        if (this.hasComposition) return;
        let {
          view: DD
        } = this, zD = DD.state.selection.main, wD = ZD(DD.root), {
          anchorNode: pD,
          anchorOffset: sD
        } = DD.observer.selectionRange;
        if (!wD || !zD.empty || !zD.assoc || !wD.modify) return;
        let KD = this.lineAt(zD.head, zD.assoc);
        if (!KD) return;
        let rD = KD.posAtStart;
        if (zD.head == rD || zD.head == rD + KD.length) return;
        let LD = this.coordsAt(zD.head, -1),
          cD = this.coordsAt(zD.head, 1);
        if (!LD || !cD || LD.bottom > cD.top) return;
        let gD = this.domAtPos(zD.head + zD.assoc, zD.assoc);
        wD.collapse(gD.node, gD.offset), wD.modify("move", zD.assoc < 0 ? "forward" : "backward", "lineboundary"), DD.observer.readSelectionRange();
        let RD = DD.observer.selectionRange;
        DD.docView.posFromDOM(RD.anchorNode, RD.anchorOffset) != zD.from && wD.collapse(pD, sD)
      }
      posFromDOM(DD, zD) {
        let wD = this.tile.nearest(DD);
        if (!wD) return 2 & this.tile.dom.compareDocumentPosition(DD) ? 0 : this.view.state.doc.length;
        let pD = wD.posAtStart;
        if (!wD.isComposite()) return wD.isText() ? DD == wD.dom ? pD + zD : pD + (zD ? wD.length : 0) : pD;
        {
          let sD;
          if (DD == wD.dom) sD = wD.dom.childNodes[zD];
          else {
            let pD = 0 == vD(DD) ? 0 : 0 == zD ? -1 : 1;
            for (;;) {
              let zD = DD.parentNode;
              if (zD == wD.dom) break;
              0 == pD && zD.firstChild != zD.lastChild && (pD = DD == zD.firstChild ? -1 : 1), DD = zD
            }
            sD = pD < 0 ? DD : DD.nextSibling
          }
          if (sD == wD.dom.firstChild) return pD;
          for (; sD && !fw.get(sD);) sD = sD.nextSibling;
          if (!sD) return pD + wD.length;
          for (let DD = 0, zD = pD;; DD++) {
            let pD = wD.children[DD];
            if (pD.dom == sD) return zD;
            zD += pD.length + pD.breakAfter
          }
        }
      }
      domAtPos(DD, zD) {
        let {
          tile: wD,
          offset: pD
        } = this.tile.resolveBlock(DD, zD);
        return wD.isWidget() ? wD.domPosFor(DD, zD) : wD.domIn(pD, zD)
      }
      inlineDOMNearPos(DD, zD) {
        let wD, pD, sD = -1,
          KD = !1,
          rD = -1,
          LD = !1;
        return this.tile.blockTiles(((zD, cD) => {
          if (zD.isWidget()) {
            if (32 & zD.flags && cD >= DD) return !0;
            16 & zD.flags && (KD = !0)
          } else {
            let gD = cD + zD.length;
            if (cD <= DD && (wD = zD, sD = DD - cD, KD = gD < DD), gD >= DD && !pD && (pD = zD, rD = DD - cD, LD = cD > DD), cD > DD && pD) return !0
          }
        })), wD || pD ? (KD && pD ? wD = null : LD && wD && (pD = null), wD && zD < 0 || !pD ? wD.domIn(sD, zD) : pD.domIn(rD, zD)) : this.domAtPos(DD, zD)
      }
      coordsAt(DD, zD) {
        let {
          tile: wD,
          offset: pD
        } = this.tile.resolveBlock(DD, zD);
        return wD.isWidget() ? wD.widget instanceof mw ? null : wD.coordsInWidget(pD, zD, !0) : wD.coordsIn(pD, zD)
      }
      lineAt(DD, zD) {
        let {
          tile: wD
        } = this.tile.resolveBlock(DD, zD);
        return wD.isLine() ? wD : null
      }
      coordsForChar(DD) {
        let {
          tile: zD,
          offset: wD
        } = this.tile.resolveBlock(DD, 1);
        if (!zD.isLine()) return null;
        return function DD(zD, wD) {
          if (zD.isComposite())
            for (let pD of zD.children) {
              if (pD.length >= wD) {
                let zD = DD(pD, wD);
                if (zD) return zD
              }
              if ((wD -= pD.length) < 0) break
            } else if (zD.isText() && wD < zD.length) {
              let DD = (0, pD._)(zD.text, wD);
              if (DD == wD) return null;
              let sD = pz(zD.dom, wD, DD).getClientRects();
              for (let zD = 0; zD < sD.length; zD++) {
                let DD = sD[zD];
                if (zD == sD.length - 1 || DD.top < DD.bottom && DD.left < DD.right) return DD
              }
            } return null
        }(zD, wD)
      }
      measureVisibleLineHeights(DD) {
        let zD = [],
          {
            from: wD,
            to: pD
          } = DD,
          sD = this.view.contentDOM.clientWidth,
          KD = sD > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
          rD = -1,
          LD = this.view.textDirection == gz.LTR,
          cD = 0,
          gD = (DD, RD, AD) => {
            for (let UD = 0; UD < DD.children.length && !(RD > pD); UD++) {
              let pD = DD.children[UD],
                fD = RD + pD.length,
                ID = pD.dom.getBoundingClientRect(),
                {
                  height: BD
                } = ID;
              if (AD && !UD && (cD += ID.top - AD.top), pD instanceof hw) fD > wD && gD(pD, RD, ID);
              else if (RD >= wD && (cD > 0 && zD.push(-cD), zD.push(BD + cD), cD = 0, KD)) {
                let DD = pD.dom.lastChild,
                  zD = DD ? mD(DD) : [];
                if (zD.length) {
                  let DD = zD[zD.length - 1],
                    wD = LD ? DD.right - ID.left : ID.right - DD.left;
                  wD > rD && (rD = wD, this.minWidth = sD, this.minWidthFrom = RD, this.minWidthTo = fD)
                }
              }
              AD && UD == DD.children.length - 1 && (cD += AD.bottom - ID.bottom), RD = fD + pD.breakAfter
            }
          };
        return gD(this.tile, 0, null), zD
      }
      textDirectionAt(DD) {
        let {
          tile: zD
        } = this.tile.resolveBlock(DD, 1);
        return "rtl" == getComputedStyle(zD.dom).direction ? gz.RTL : gz.LTR
      }
      measureTextSize() {
        let DD = this.tile.blockTiles((DD => {
          if (DD.isLine() && DD.children.length && DD.length <= 20) {
            let zD, wD = 0;
            for (let pD of DD.children) {
              if (!pD.isText() || /[^ -~]/.test(pD.text)) return;
              let DD = mD(pD.dom);
              if (1 != DD.length) return;
              wD += DD[0].width, zD = DD[0].height
            }
            if (wD) return {
              lineHeight: DD.dom.getBoundingClientRect().height,
              charWidth: wD / DD.length,
              textHeight: zD
            }
          }
        }));
        if (DD) return DD;
        let zD, wD, pD, sD = document.createElement("div");
        return sD.className = "cm-line", sD.style.width = "99999px", sD.style.position = "absolute", sD.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore((() => {
          this.tile.dom.appendChild(sD);
          let DD = mD(sD.firstChild)[0];
          zD = sD.getBoundingClientRect().height, wD = DD && DD.width ? DD.width / 27 : 7, pD = DD && DD.height ? DD.height : zD, sD.remove()
        })), {
          lineHeight: zD,
          charWidth: wD,
          textHeight: pD
        }
      }
      computeBlockGapDeco() {
        let DD = [],
          zD = this.view.viewState;
        for (let wD = 0, pD = 0;; pD++) {
          let sD = pD == zD.viewports.length ? null : zD.viewports[pD],
            KD = sD ? sD.from - 1 : this.view.state.doc.length;
          if (KD > wD) {
            let pD = (zD.lineBlockAt(KD).bottom - zD.lineBlockAt(wD).top) / this.view.scaleY;
            DD.push(jD.replace({
              widget: new mw(pD),
              block: !0,
              inclusive: !0,
              isBlockGap: !0
            }).range(wD, KD))
          }
          if (!sD) break;
          wD = sD.to + 1
        }
        return jD.set(DD)
      }
      updateDeco() {
        let DD = 1,
          zD = this.view.state.facet(Dw).map((zD => (this.dynamicDecorationMap[DD++] = "function" == typeof zD) ? zD(this.view) : zD)),
          wD = !1,
          sD = this.view.state.facet(ww).map(((DD, zD) => {
            let pD = "function" == typeof DD;
            return pD && (wD = !0), pD ? DD(this.view) : DD
          }));
        for (sD.length && (this.dynamicDecorationMap[DD++] = wD, zD.push(pD.z.join(sD))), this.BD = [this.editContextFormatting, ...zD, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; DD < this.BD.length;) this.dynamicDecorationMap[DD++] = !1;
        this.blockWrappers = this.view.state.facet(zw).map((DD => "function" == typeof DD ? DD(this.view) : DD))
      }
      scrollIntoView(DD) {
        var zD;
        if (DD.isSnapshot) {
          let zD = this.view.viewState.lineBlockAt(DD.range.head);
          return this.view.scrollDOM.scrollTop = zD.top - DD.yMargin, void(this.view.scrollDOM.scrollLeft = DD.xMargin)
        }
        for (let RD of this.view.state.facet(kz)) try {
          if (RD(this.view, DD.range, DD)) return !0
        } catch (gD) {
          az(this.view.state, gD, "scroll handler")
        }
        let wD, {
            range: pD
          } = DD,
          sD = this.coordsAt(pD.head, null !== (zD = pD.assoc) && void 0 !== zD ? zD : pD.empty ? 0 : pD.head > pD.anchor ? -1 : 1);
        if (!sD) return;
        !pD.empty && (wD = this.coordsAt(pD.anchor, pD.anchor > pD.head ? -1 : 1)) && (sD = {
          left: Math.min(sD.left, wD.left),
          top: Math.min(sD.top, wD.top),
          right: Math.max(sD.right, wD.right),
          bottom: Math.max(sD.bottom, wD.bottom)
        });
        let KD = Lw(this.view),
          rD = {
            left: sD.left - KD.left,
            top: sD.top - KD.top,
            right: sD.right + KD.right,
            bottom: sD.bottom + KD.bottom
          },
          {
            offsetWidth: LD,
            offsetHeight: cD
          } = this.view.scrollDOM;
        if (function(DD, zD, wD, pD, sD, KD, rD, LD) {
            let cD = DD.ownerDocument,
              gD = cD.defaultView || window;
            for (let RD = DD, AD = !1; RD && !AD;)
              if (1 == RD.nodeType) {
                let DD, UD = RD == cD.body,
                  fD = 1,
                  ID = 1;
                if (UD) DD = FD(gD);
                else {
                  if (/^(fixed|sticky)$/.test(getComputedStyle(RD).position) && (AD = !0), RD.scrollHeight <= RD.clientHeight && RD.scrollWidth <= RD.clientWidth) {
                    RD = RD.assignedSlot || RD.parentNode;
                    continue
                  }
                  let zD = RD.getBoundingClientRect();
                  ({
                    scaleX: fD,
                    scaleY: ID
                  } = YD(RD, zD)), DD = {
                    left: zD.left,
                    right: zD.left + RD.clientWidth * fD,
                    top: zD.top,
                    bottom: zD.top + RD.clientHeight * ID
                  }
                }
                let BD = 0,
                  GD = 0;
                if ("nearest" == sD) zD.top < DD.top + rD ? (GD = zD.top - (DD.top + rD), wD > 0 && zD.bottom > DD.bottom + GD && (GD = zD.bottom - DD.bottom + rD)) : zD.bottom > DD.bottom - rD && (GD = zD.bottom - DD.bottom + rD, wD < 0 && zD.top - GD < DD.top && (GD = zD.top - (DD.top + rD)));
                else {
                  let pD = zD.bottom - zD.top,
                    KD = DD.bottom - DD.top;
                  GD = ("center" == sD && pD <= KD ? zD.top + pD / 2 - KD / 2 : "start" == sD || "center" == sD && wD < 0 ? zD.top - rD : zD.bottom - KD + rD) - DD.top
                }
                if ("nearest" == pD ? zD.left < DD.left + KD ? (BD = zD.left - (DD.left + KD), wD > 0 && zD.right > DD.right + BD && (BD = zD.right - DD.right + KD)) : zD.right > DD.right - KD && (BD = zD.right - DD.right + KD, wD < 0 && zD.left < DD.left + BD && (BD = zD.left - (DD.left + KD))) : BD = ("center" == pD ? zD.left + (zD.right - zD.left) / 2 - (DD.right - DD.left) / 2 : "start" == pD == LD ? zD.left - KD : zD.right - (DD.right - DD.left) + KD) - DD.left, BD || GD)
                  if (UD) gD.scrollBy(BD, GD);
                  else {
                    let DD = 0,
                      wD = 0;
                    if (GD) {
                      let DD = RD.scrollTop;
                      RD.scrollTop += GD / ID, wD = (RD.scrollTop - DD) * ID
                    }
                    if (BD) {
                      let zD = RD.scrollLeft;
                      RD.scrollLeft += BD / fD, DD = (RD.scrollLeft - zD) * fD
                    }
                    zD = {
                      left: zD.left - DD,
                      top: zD.top - wD,
                      right: zD.right - DD,
                      bottom: zD.bottom - wD
                    }, DD && Math.abs(DD - BD) < 1 && (pD = "nearest"), wD && Math.abs(wD - GD) < 1 && (sD = "nearest")
                  } if (UD) break;
                (zD.top < DD.top || zD.bottom > DD.bottom || zD.left < DD.left || zD.right > DD.right) && (zD = {
                  left: Math.max(zD.left, DD.left),
                  right: Math.min(zD.right, DD.right),
                  top: Math.max(zD.top, DD.top),
                  bottom: Math.min(zD.bottom, DD.bottom)
                }), RD = RD.assignedSlot || RD.parentNode
              } else {
                if (11 != RD.nodeType) break;
                RD = RD.host
              }
          }(this.view.scrollDOM, rD, pD.head < pD.anchor ? -1 : 1, DD.x, DD.y, Math.max(Math.min(DD.xMargin, LD), -LD), Math.max(Math.min(DD.yMargin, cD), -cD), this.view.textDirection == gz.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (sD.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || sD.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
          let DD = this.view.docView.lineAt(pD.head, 1);
          DD && DD.dom.scrollIntoView({
            block: "nearest"
          })
        }
      }
      lineHasWidget(DD) {
        let zD = DD => DD.isWidget() || DD.children.some(zD);
        return zD(this.tile.resolveBlock(DD, 1).tile)
      }
      destroy() {
        Nw(this.tile)
      }
    }

    function Nw(DD, zD) {
      let wD = null === zD || void 0 === zD ? void 0 : zD.get(DD);
      if (1 != wD) {
        null == wD && DD.destroy();
        for (let wD of DD.children) Nw(wD, zD)
      }
    }

    function Zw(DD, zD) {
      let wD = DD.observer.selectionRange;
      if (!wD.focusNode) return null;
      let pD = rz(wD.focusNode, wD.focusOffset),
        sD = Lz(wD.focusNode, wD.focusOffset),
        KD = pD || sD;
      if (sD && pD && sD.node != pD.node) {
        let zD = fw.get(sD.node);
        if (!zD || zD.isText() && zD.text != sD.node.nodeValue) KD = sD;
        else if (DD.docView.lastCompositionAfterCursor) {
          let DD = fw.get(pD.node);
          !DD || DD.isText() && DD.text != pD.node.nodeValue || (KD = sD)
        }
      }
      if (DD.docView.lastCompositionAfterCursor = KD != pD, !KD) return null;
      let rD = zD - KD.offset;
      return {
        from: rD,
        to: rD + KD.node.nodeValue.length,
        node: KD.node
      }
    }
    let yw = class {
      constructor() {
        this.changes = []
      }
      compareRange(DD, zD) {
        WD(DD, zD, this.changes)
      }
      comparePoint(DD, zD) {
        WD(DD, zD, this.changes)
      }
      boundChange(DD) {
        WD(DD, DD, this.changes)
      }
    };
    class kw {
      constructor() {
        this.changes = []
      }
      compareRange(DD, zD) {
        WD(DD, zD, this.changes)
      }
      comparePoint() {}
      boundChange(DD) {
        WD(DD, DD, this.changes)
      }
    }
    class mw extends TD {
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

    function ew(DD, zD, wD) {
      let pD = DD.lineBlockAt(zD);
      if (Array.isArray(pD.type)) {
        let DD;
        for (let sD of pD.type) {
          if (sD.from > zD) break;
          if (!(sD.to < zD)) {
            if (sD.from < zD && sD.to > zD) return sD;
            DD && (sD.type != bD.Text || DD.type == sD.type && !(wD < 0 ? sD.from < zD : sD.to > zD)) || (DD = sD)
          }
        }
        return DD || pD
      }
      return pD
    }

    function ow(DD, zD, wD, pD) {
      let sD = DD.state.doc.lineAt(zD.head),
        KD = DD.bidiSpans(sD),
        rD = DD.textDirectionAt(sD.from);
      for (let LD = zD, cD = null;;) {
        let zD = Cz(sD, KD, rD, LD, wD),
          gD = Pz;
        if (!zD) {
          if (sD.number == (wD ? DD.state.doc.lines : 1)) return LD;
          gD = "\n", sD = DD.state.doc.line(sD.number + (wD ? 1 : -1)), KD = DD.bidiSpans(sD), zD = DD.visualLineSide(sD, !wD)
        }
        if (cD) {
          if (!cD(gD)) return LD
        } else {
          if (!pD) return zD;
          cD = pD(gD)
        }
        LD = zD
      }
    }

    function aw(DD, zD, wD) {
      for (;;) {
        let pD = 0;
        for (let sD of DD) sD.between(zD - 1, zD + 1, ((DD, sD, KD) => {
          if (zD > DD && zD < sD) {
            let KD = pD || wD || (zD - DD < sD - zD ? -1 : 1);
            zD = KD < 0 ? DD : sD, pD = KD
          }
        }));
        if (!pD) return zD
      }
    }

    function uw(DD, zD) {
      let wD = null;
      for (let sD = 0; sD < zD.rG.length; sD++) {
        let KD = zD.rG[sD],
          rD = null;
        if (KD.empty) {
          let zD = aw(DD, KD.from, 0);
          zD != KD.from && (rD = pD.j.cursor(zD, -1))
        } else {
          let zD = aw(DD, KD.from, -1),
            wD = aw(DD, KD.to, 1);
          zD == KD.from && wD == KD.to || (rD = pD.j.range(KD.from == KD.anchor ? zD : wD, KD.from == KD.head ? zD : wD))
        }
        rD && (wD || (wD = zD.rG.slice()), wD[sD] = rD)
      }
      return wD ? pD.j.create(wD, zD.mainIndex) : zD
    }

    function vw(DD, zD, wD) {
      let sD = aw(DD.state.facet(pw).map((zD => zD(DD))), wD.from, zD.head > wD.from ? -1 : 1);
      return sD == wD.from ? wD : pD.j.cursor(sD, sD < wD.from ? 1 : -1)
    }
    class tw {
      constructor(DD, zD) {
        this.pos = DD, this.assoc = zD
      }
    }

    function Fw(DD, zD, wD, sD) {
      let KD, rD = DD.contentDOM.getBoundingClientRect(),
        LD = rD.top + DD.viewState.paddingTop,
        {
          x: cD,
          y: gD
        } = zD,
        RD = gD - LD;
      for (;;) {
        if (RD < 0) return new tw(0, 1);
        if (RD > DD.viewState.docHeight) return new tw(DD.state.doc.length, -1);
        if (KD = DD.elementAtHeight(RD), null == sD) break;
        if (KD.type == bD.Text) {
          if (sD < 0 ? KD.to < DD.viewport.from : KD.from > DD.viewport.to) break;
          let zD = DD.docView.coordsAt(sD < 0 ? KD.from : KD.to, sD > 0 ? -1 : 1);
          if (zD && (sD < 0 ? zD.top <= RD + LD : zD.bottom >= RD + LD)) break
        }
        let zD = DD.viewState.heightOracle.textHeight / 2;
        RD = sD > 0 ? KD.bottom + zD : KD.top - zD
      }
      if (DD.viewport.from >= KD.to || DD.viewport.to <= KD.from) {
        if (wD) return null;
        if (KD.type == bD.Text) {
          let zD = function(DD, zD, wD, sD, KD) {
            let rD = Math.round((sD - zD.left) * DD.defaultCharacterWidth);
            if (DD.lineWrapping && wD.height > 1.5 * DD.defaultLineHeight) {
              let zD = DD.viewState.heightOracle.textHeight;
              rD += Math.floor((KD - wD.top - .5 * (DD.defaultLineHeight - zD)) / zD) * DD.viewState.heightOracle.lineLength
            }
            let LD = DD.state.sliceDoc(wD.from, wD.to);
            return wD.from + (0, pD.bb)(LD, rD, DD.state.tabSize)
          }(DD, rD, KD, cD, gD);
          return new tw(zD, zD == KD.from ? 1 : -1)
        }
      }
      if (KD.type != bD.Text) return RD < (KD.top + KD.bottom) / 2 ? new tw(KD.from, 1) : new tw(KD.to, -1);
      let AD = DD.docView.lineAt(KD.from, 2);
      return AD && AD.length == KD.length || (AD = DD.docView.lineAt(KD.from, -2)), new Yw(DD, cD, gD, DD.textDirectionAt(KD.from)).scanTile(AD, KD.from)
    }
    class Yw {
      constructor(DD, zD, wD, pD) {
        this.view = DD, this.x = zD, this.y = wD, this.baseDir = pD, this.line = null, this.spans = null
      }
      bidiSpansAt(DD) {
        return (!this.line || this.line.from > DD || this.line.to < DD) && (this.line = this.view.state.doc.lineAt(DD), this.spans = this.view.bidiSpans(this.line)), this
      }
      baseDirAt(DD, zD) {
        let {
          line: wD,
          spans: pD
        } = this.bidiSpansAt(DD);
        return pD[Mz.find(pD, DD - wD.from, -1, zD)].level == this.baseDir
      }
      dirAt(DD, zD) {
        let {
          line: wD,
          spans: pD
        } = this.bidiSpansAt(DD);
        return pD[Mz.find(pD, DD - wD.from, -1, zD)].dir
      }
      bidiIn(DD, zD) {
        let {
          spans: wD,
          line: pD
        } = this.bidiSpansAt(DD);
        return wD.length > 1 || wD.length && (wD[0].level != this.baseDir || wD[0].to + pD.from < zD)
      }
      scan(DD, zD) {
        let wD, pD, sD, KD = 0,
          rD = DD.length - 1,
          LD = new Set,
          cD = this.bidiIn(DD[0], DD[rD]),
          gD = -1,
          RD = 1e9;
        DD: for (; KD < rD;) {
          let AD = rD - KD,
            UD = KD + rD >> 1;
          zD: if (LD.has(UD)) {
            let DD = KD + Math.floor(Math.random() * AD);
            for (let zD = 0; zD < AD; zD++) {
              if (!LD.has(DD)) {
                UD = DD;
                break zD
              }
              DD++, DD == rD && (DD = KD)
            }
            break DD
          } LD.add(UD);
          let fD = zD(UD);
          if (fD)
            for (let zD = 0; zD < fD.length; zD++) {
              let LD = fD[zD],
                AD = 0;
              if (!(0 == LD.width && fD.length > 1)) {
                if (LD.bottom < this.y)(!wD || wD.bottom < LD.bottom) && (wD = LD), AD = 1;
                else if (LD.top > this.y)(!pD || pD.top > LD.top) && (pD = LD), AD = -1;
                else {
                  let DD = LD.left > this.x ? this.x - LD.left : LD.right < this.x ? this.x - LD.right : 0,
                    zD = Math.abs(DD);
                  zD < RD && (gD = UD, RD = zD, sD = LD), DD && (AD = DD < 0 == (this.baseDir == gz.LTR) ? -1 : 1)
                } - 1 != AD || cD && !this.baseDirAt(DD[UD], 1) ? 1 != AD || cD && !this.baseDirAt(DD[UD + 1], -1) || (KD = UD + 1) : rD = UD
              }
            }
        }
        if (!sD) {
          let sD = wD && (!pD || this.y - wD.bottom < pD.top - this.y) ? wD : pD;
          return this.y = (sD.top + sD.bottom) / 2, this.scan(DD, zD)
        }
        if (RD) {
          if (wD && wD.bottom > sD.top) return this.y = wD.bottom - 1, this.scan(DD, zD);
          if (pD && pD.top < sD.bottom) return this.y = pD.top + 1, this.scan(DD, zD)
        }
        let AD = (cD ? this.dirAt(DD[gD], 1) : this.baseDir) == gz.LTR;
        return {
          i: gD,
          after: this.x > (sD.left + sD.right) / 2 == AD
        }
      }
      scanText(DD, zD) {
        let wD = [];
        for (let KD = 0; KD < DD.length; KD = (0, pD._)(DD.text, KD)) wD.push(zD + KD);
        wD.push(zD + DD.length);
        let sD = this.scan(wD, (pD => {
          let sD = wD[pD] - zD,
            KD = wD[pD + 1] - zD;
          return pz(DD.dom, sD, KD).getClientRects()
        }));
        return sD.after ? new tw(wD[sD.i + 1], -1) : new tw(wD[sD.i], 1)
      }
      scanTile(DD, zD) {
        if (!DD.length) return new tw(zD, 1);
        if (1 == DD.children.length) {
          let wD = DD.children[0];
          if (wD.isText()) return this.scanText(wD, zD);
          if (wD.isComposite()) return this.scanTile(wD, zD)
        }
        let wD = [zD];
        for (let rD = 0, LD = zD; rD < DD.children.length; rD++) wD.push(LD += DD.children[rD].length);
        let pD = this.scan(wD, (zD => {
            let wD = DD.children[zD];
            return 48 & wD.flags ? null : (1 == wD.dom.nodeType ? wD.dom : pz(wD.dom, 0, wD.length)).getClientRects()
          })),
          sD = DD.children[pD.i],
          KD = wD[pD.i];
        return sD.isText() ? this.scanText(sD, KD) : sD.isComposite() ? this.scanTile(sD, KD) : pD.after ? new tw(wD[pD.i + 1], -1) : new tw(KD, 1)
      }
    }
    const Hw = "\uffff";
    class qw {
      constructor(DD, zD) {
        this.points = DD, this.view = zD, this.text = "", this.lineSeparator = zD.state.facet(pD.k.lineSeparator)
      }
      append(DD) {
        this.text += DD
      }
      lineBreak() {
        this.text += Hw
      }
      readRange(DD, zD) {
        if (!DD) return this;
        let wD = DD.parentNode;
        for (let pD = DD;;) {
          this.findPointBefore(wD, pD);
          let DD = this.text.length;
          this.readNode(pD);
          let sD = fw.get(pD),
            KD = pD.nextSibling;
          if (KD == zD) {
            (null === sD || void 0 === sD ? void 0 : sD.breakAfter) && !KD && wD != this.view.contentDOM && this.lineBreak();
            break
          }
          let rD = fw.get(KD);
          (sD && rD ? sD.breakAfter : (sD ? sD.breakAfter : aD(pD)) || aD(KD) && ("BR" != pD.nodeName || (null === sD || void 0 === sD ? void 0 : sD.isWidget())) && this.text.length > DD) && !zp(KD, zD) && this.lineBreak(), pD = KD
        }
        return this.findPointBefore(wD, zD), this
      }
      readTextNode(DD) {
        let zD = DD.nodeValue;
        for (let wD of this.points) wD.node == DD && (wD.pos = this.text.length + Math.min(wD.offset, zD.length));
        for (let wD = 0, pD = this.lineSeparator ? null : /\r\n?|\n/g;;) {
          let sD, KD = -1,
            rD = 1;
          if (this.lineSeparator ? (KD = zD.indexOf(this.lineSeparator, wD), rD = this.lineSeparator.length) : (sD = pD.exec(zD)) && (KD = sD.index, rD = sD[0].length), this.append(zD.slice(wD, KD < 0 ? zD.length : KD)), KD < 0) break;
          if (this.lineBreak(), rD > 1)
            for (let zD of this.points) zD.node == DD && zD.pos > this.text.length && (zD.pos -= rD - 1);
          wD = KD + rD
        }
      }
      readNode(DD) {
        let zD = fw.get(DD),
          wD = zD && zD.overrideDOMText;
        if (null != wD) {
          this.findPointInside(DD, wD.length);
          for (let DD = wD.iter(); !DD.next().done;) DD.lineBreak ? this.lineBreak() : this.append(DD.value)
        } else 3 == DD.nodeType ? this.readTextNode(DD) : "BR" == DD.nodeName ? DD.nextSibling && this.lineBreak() : 1 == DD.nodeType && this.readRange(DD.firstChild, null)
      }
      findPointBefore(DD, zD) {
        for (let wD of this.points) wD.node == DD && DD.childNodes[wD.offset] == zD && (wD.pos = this.text.length)
      }
      findPointInside(DD, zD) {
        for (let wD of this.points)(3 == DD.nodeType ? wD.node == DD : DD.contains(wD.node)) && (wD.pos = this.text.length + (Dp(DD, wD.node, wD.offset) ? zD : 0))
      }
    }

    function Dp(DD, zD, wD) {
      for (;;) {
        if (!zD || wD < vD(zD)) return !1;
        if (zD == DD) return !0;
        wD = oD(zD) + 1, zD = zD.parentNode
      }
    }

    function zp(DD, zD) {
      let wD;
      for (; DD != zD && DD; DD = DD.nextSibling) {
        let zD = fw.get(DD);
        if (!(null === zD || void 0 === zD ? void 0 : zD.isWidget())) return !1;
        zD && (wD || (wD = [])).push(zD)
      }
      if (wD)
        for (let pD of wD) {
          let DD = pD.overrideDOMText;
          if (null === DD || void 0 === DD ? void 0 : DD.length) return !1
        }
      return !0
    }
    class wp {
      constructor(DD, zD) {
        this.node = DD, this.offset = zD, this.pos = -1
      }
    }
    class pp {
      constructor(DD, zD, wD, sD) {
        this.typeOver = sD, this.bounds = null, this.text = "", this.domChanged = zD > -1;
        let {
          impreciseHead: KD,
          impreciseAnchor: rD
        } = DD.docView, LD = DD.state.selection;
        if (DD.state.readOnly && zD > -1) this.newSel = null;
        else if (zD > -1 && (this.bounds = sp(DD.docView.tile, zD, wD, 0))) {
          let zD = KD || rD ? [] : function(DD) {
              let zD = [];
              if (DD.root.activeElement != DD.contentDOM) return zD;
              let {
                anchorNode: wD,
                anchorOffset: pD,
                focusNode: sD,
                focusOffset: KD
              } = DD.observer.selectionRange;
              wD && (zD.push(new wp(wD, pD)), sD == wD && KD == pD || zD.push(new wp(sD, KD)));
              return zD
            }(DD),
            wD = new qw(zD, DD);
          wD.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = wD.text, this.newSel = function(DD, zD) {
            if (0 == DD.length) return null;
            let wD = DD[0].pos,
              sD = 2 == DD.length ? DD[1].pos : wD;
            return wD > -1 && sD > -1 ? pD.j.single(wD + zD, sD + zD) : null
          }(zD, this.bounds.from)
        } else {
          let zD = DD.observer.selectionRange,
            wD = KD && KD.node == zD.focusNode && KD.offset == zD.focusOffset || !yD(DD.contentDOM, zD.focusNode) ? LD.main.head : DD.docView.posFromDOM(zD.focusNode, zD.focusOffset),
            sD = rD && rD.node == zD.anchorNode && rD.offset == zD.anchorOffset || !yD(DD.contentDOM, zD.anchorNode) ? LD.main.anchor : DD.docView.posFromDOM(zD.anchorNode, zD.anchorOffset),
            cD = DD.viewport;
          if ((QD.ios || QD.chrome) && LD.main.empty && wD != sD && (cD.from > 0 || cD.to < DD.state.doc.length)) {
            let zD = Math.min(wD, sD),
              pD = Math.max(wD, sD),
              KD = cD.from - zD,
              rD = cD.to - pD;
            0 != KD && 1 != KD && 0 != zD || 0 != rD && -1 != rD && pD != DD.state.doc.length || (wD = 0, sD = DD.state.doc.length)
          }
          if (DD.inputState.composing > -1 && LD.rG.length > 1) this.newSel = LD.replaceRange(pD.j.range(sD, wD));
          else if (DD.lineWrapping && sD == wD && (!LD.main.empty || LD.main.head != wD) && DD.inputState.lastTouchTime > Date.now() - 100) {
            let zD = DD.coordsAtPos(wD, -1),
              sD = 0;
            zD && (sD = DD.inputState.lastTouchY <= zD.bottom ? -1 : 1), this.newSel = pD.j.create([pD.j.cursor(wD, sD)])
          } else this.newSel = pD.j.single(sD, wD)
        }
      }
    }

    function sp(DD, zD, wD, pD) {
      if (DD.isComposite()) {
        let sD = -1,
          KD = -1,
          rD = -1,
          LD = -1;
        for (let cD = 0, gD = pD, RD = pD; cD < DD.children.length; cD++) {
          let pD = DD.children[cD],
            AD = gD + pD.length;
          if (gD < zD && AD > wD) return sp(pD, zD, wD, gD);
          if (AD >= zD && -1 == sD && (sD = cD, KD = gD), gD > wD && pD.dom.parentNode == DD.dom) {
            rD = cD, LD = RD;
            break
          }
          RD = AD, gD = AD + pD.breakAfter
        }
        return {
          from: KD,
          to: LD < 0 ? pD + DD.length : LD,
          startDOM: (sD ? DD.children[sD - 1].dom.nextSibling : null) || DD.dom.firstChild,
          endDOM: rD < DD.children.length && rD >= 0 ? DD.children[rD].dom : null
        }
      }
      return DD.isText() ? {
        from: pD,
        to: pD + DD.length,
        startDOM: DD.dom,
        endDOM: DD.dom.nextSibling
      } : null
    }

    function Kp(DD, zD) {
      let wD, {
          newSel: sD
        } = zD,
        {
          state: KD
        } = DD,
        rD = KD.selection.main,
        LD = DD.inputState.lastKeyTime > Date.now() - 100 ? DD.inputState.lastKeyCode : -1;
      if (zD.bounds) {
        let {
          from: DD,
          to: sD
        } = zD.bounds, cD = rD.from, gD = null;
        (8 === LD || QD.android && zD.text.length < sD - DD) && (cD = rD.to, gD = "end");
        let RD, AD, UD = KD.doc.sliceString(DD, sD, Hw);
        !rD.empty && rD.from >= DD && rD.to <= sD && (zD.typeOver || UD != zD.text) && UD.slice(0, rD.from - DD) == zD.text.slice(0, rD.from - DD) && UD.slice(rD.to - DD) == zD.text.slice(RD = zD.text.length - (UD.length - (rD.to - DD))) ? wD = {
          from: rD.from,
          to: rD.to,
          insert: pD.K.of(zD.text.slice(rD.from - DD, RD).split(Hw))
        } : (AD = Lp(UD, zD.text, cD - DD, gD)) && (QD.chrome && 13 == LD && AD.toB == AD.from + 2 && zD.text.slice(AD.from, AD.toB) == Hw + Hw && AD.toB--, wD = {
          from: DD + AD.from,
          to: DD + AD.toA,
          insert: pD.K.of(zD.text.slice(AD.from, AD.toB).split(Hw))
        })
      } else sD && (!DD.hasFocus && KD.facet(uz) || cp(sD, rD)) && (sD = null);
      if (!wD && !sD) return !1;
      if ((QD.mac || QD.android) && wD && wD.from == wD.to && wD.from == rD.head - 1 && /^\. ?$/.test(wD.insert.toString()) && "off" == DD.contentDOM.getAttribute("autocorrect") ? (sD && 2 == wD.insert.length && (sD = pD.j.single(sD.main.anchor - 1, sD.main.head - 1)), wD = {
          from: wD.from,
          to: wD.to,
          insert: pD.K.of([wD.insert.toString().replace(".", " ")])
        }) : KD.doc.lineAt(rD.from).to < rD.to && DD.docView.lineHasWidget(rD.to) && DD.inputState.insertingTextAt > Date.now() - 50 ? wD = {
          from: rD.from,
          to: rD.to,
          insert: KD.toText(DD.inputState.insertingText)
        } : QD.chrome && wD && wD.from == wD.to && wD.from == rD.head && "\n " == wD.insert.toString() && DD.lineWrapping && (sD && (sD = pD.j.single(sD.main.anchor - 1, sD.main.head - 1)), wD = {
          from: rD.from,
          to: rD.to,
          insert: pD.K.of([" "])
        }), wD) return rp(DD, wD, sD, LD);
      if (sD && !cp(sD, rD)) {
        let zD = !1,
          wD = "select";
        return DD.inputState.lastSelectionTime > Date.now() - 50 && ("select" == DD.inputState.lastSelectionOrigin && (zD = !0), wD = DD.inputState.lastSelectionOrigin, "select.pointer" == wD && (sD = uw(KD.facet(pw).map((zD => zD(DD))), sD))), DD.dispatch({
          selection: sD,
          scrollIntoView: zD,
          userEvent: wD
        }), !0
      }
      return !1
    }

    function rp(DD, zD, wD) {
      let sD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
      if (QD.ios && DD.inputState.flushIOSKey(zD)) return !0;
      let KD = DD.state.selection.main;
      if (QD.android && (zD.to == KD.to && (zD.from == KD.from || zD.from == KD.from - 1 && " " == DD.state.sliceDoc(zD.from, KD.from)) && 1 == zD.insert.length && 2 == zD.insert.lines && sz(DD.contentDOM, "Enter", 13) || (zD.from == KD.from - 1 && zD.to == KD.to && 0 == zD.insert.length || 8 == sD && zD.insert.length < zD.to - zD.from && zD.to > KD.head) && sz(DD.contentDOM, "Backspace", 8) || zD.from == KD.from && zD.to == KD.to + 1 && 0 == zD.insert.length && sz(DD.contentDOM, "Delete", 46))) return !0;
      let rD, LD = zD.insert.toString();
      DD.inputState.composing >= 0 && DD.inputState.composing++;
      let cD = () => rD || (rD = function(DD, zD, wD) {
        let sD, KD = DD.state,
          rD = KD.selection.main,
          LD = -1;
        if (zD.from == zD.to && zD.from < rD.from || zD.from > rD.to) {
          let wD = zD.from < rD.from ? -1 : 1,
            pD = wD < 0 ? rD.from : rD.to,
            sD = aw(KD.facet(pw).map((zD => zD(DD))), pD, wD);
          zD.from == sD && (LD = sD)
        }
        if (LD > -1) sD = {
          changes: zD,
          selection: pD.j.cursor(zD.from + zD.insert.length, -1)
        };
        else if (zD.from >= rD.from && zD.to <= rD.to && zD.to - zD.from >= (rD.to - rD.from) / 3 && (!wD || wD.main.empty && wD.main.from == zD.from + zD.insert.length) && DD.inputState.composing < 0) {
          let wD = rD.from < zD.from ? KD.sliceDoc(rD.from, zD.from) : "",
            pD = rD.to > zD.to ? KD.sliceDoc(zD.to, rD.to) : "";
          sD = KD.replaceSelection(DD.state.toText(wD + zD.insert.sliceString(0, void 0, DD.state.lineBreak) + pD))
        } else {
          let LD = KD.changes(zD),
            cD = wD && wD.main.to <= LD.newLength ? wD.main : void 0;
          if (KD.selection.rG.length > 1 && (DD.inputState.composing >= 0 || DD.inputState.compositionPendingChange) && zD.to <= rD.to + 10 && zD.to >= rD.to - 10) {
            let gD, RD = DD.state.sliceDoc(zD.from, zD.to),
              AD = wD && Zw(DD, wD.main.head);
            if (AD) {
              let DD = zD.insert.length - (zD.to - zD.from);
              gD = {
                from: AD.from,
                to: AD.to - DD
              }
            } else gD = DD.state.doc.lineAt(rD.head);
            let UD = rD.to - zD.to;
            sD = KD.changeByRange((wD => {
              if (wD.from == rD.from && wD.to == rD.to) return {
                changes: LD,
                range: cD || wD.map(LD)
              };
              let sD = wD.to - UD,
                AD = sD - RD.length;
              if (DD.state.sliceDoc(AD, sD) != RD || sD >= gD.from && AD <= gD.to) return {
                range: wD
              };
              let fD = KD.changes({
                  from: AD,
                  to: sD,
                  insert: zD.insert
                }),
                ID = wD.to - rD.to;
              return {
                changes: fD,
                range: cD ? pD.j.range(Math.max(0, cD.anchor + ID), Math.max(0, cD.head + ID)) : wD.map(fD)
              }
            }))
          } else sD = {
            changes: LD,
            selection: cD && KD.selection.replaceRange(cD)
          }
        }
        let cD = "input.type";
        (DD.composing || DD.inputState.compositionPendingChange && DD.inputState.compositionEndedAt > Date.now() - 50) && (DD.inputState.compositionPendingChange = !1, cD += ".compose", DD.inputState.compositionFirstChange && (cD += ".start", DD.inputState.compositionFirstChange = !1));
        return KD.update(sD, {
          userEvent: cD,
          scrollIntoView: !0
        })
      }(DD, zD, wD));
      return DD.state.facet(iz).some((wD => wD(DD, zD.from, zD.to, LD, cD))) || DD.dispatch(cD()), !0
    }

    function Lp(DD, zD, wD, pD) {
      let sD = Math.min(DD.length, zD.length),
        KD = 0;
      for (; KD < sD && DD.charCodeAt(KD) == zD.charCodeAt(KD);) KD++;
      if (KD == sD && DD.length == zD.length) return null;
      let rD = DD.length,
        LD = zD.length;
      for (; rD > 0 && LD > 0 && DD.charCodeAt(rD - 1) == zD.charCodeAt(LD - 1);) rD--, LD--;
      if ("end" == pD) {
        wD -= rD + Math.max(0, KD - Math.min(rD, LD)) - KD
      }
      if (rD < KD && DD.length < zD.length) {
        KD -= wD <= KD && wD >= rD ? KD - wD : 0, LD = KD + (LD - rD), rD = KD
      } else if (LD < KD) {
        KD -= wD <= KD && wD >= LD ? KD - wD : 0, rD = KD + (rD - LD), LD = KD
      }
      return {
        from: KD,
        toA: rD,
        toB: LD
      }
    }

    function cp(DD, zD) {
      return zD.head == DD.main.head && zD.anchor == DD.main.anchor
    }
    class gp {
      setSelectionOrigin(DD) {
        this.lastSelectionOrigin = DD, this.lastSelectionTime = Date.now()
      }
      constructor(DD) {
        this.view = DD, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = DD.hasFocus, QD.safari && DD.contentDOM.addEventListener("input", (() => null)), QD.gecko && function(DD) {
          Sp.has(DD) || (Sp.add(DD), DD.addEventListener("copy", (() => {})), DD.addEventListener("cut", (() => {})))
        }(DD.contentDOM.ownerDocument)
      }
      handleEvent(DD) {
        (function(DD, zD) {
          if (!zD.bubbles) return !0;
          if (zD.defaultPrevented) return !1;
          for (let wD, pD = zD.target; pD != DD.contentDOM; pD = pD.parentNode)
            if (!pD || 11 == pD.nodeType || (wD = fw.get(pD)) && wD.isWidget() && !wD.isHidden && wD.widget.ignoreEvent(zD)) return !1;
          return !0
        })(this.view, DD) && !this.ignoreDuringComposition(DD) && ("keydown" == DD.type && this.keydown(DD) || (0 != this.view.updateState ? Promise.resolve().then((() => this.runHandlers(DD.type, DD))) : this.runHandlers(DD.type, DD)))
      }
      runHandlers(DD, zD) {
        let wD = this.handlers[DD];
        if (wD) {
          for (let DD of wD.observers) DD(this.view, zD);
          for (let DD of wD.handlers) {
            if (zD.defaultPrevented) break;
            if (DD(this.view, zD)) {
              zD.preventDefault();
              break
            }
          }
        }
      }
      ensureHandlers(DD) {
        let zD = Ap(DD),
          wD = this.handlers,
          pD = this.view.contentDOM;
        for (let sD in zD)
          if ("scroll" != sD) {
            let DD = !zD[sD].handlers.length,
              KD = wD[sD];
            KD && DD != !KD.handlers.length && (pD.removeEventListener(sD, this.handleEvent), KD = null), KD || pD.addEventListener(sD, this.handleEvent, {
              passive: DD
            })
          } for (let sD in wD) "scroll" == sD || zD[sD] || pD.removeEventListener(sD, this.handleEvent);
        this.handlers = zD
      }
      keydown(DD) {
        if (this.lastKeyCode = DD.keyCode, this.lastKeyTime = Date.now(), 9 == DD.keyCode && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return !0;
        if (this.tabFocusMode > 0 && 27 != DD.keyCode && Ip.indexOf(DD.keyCode) < 0 && (this.tabFocusMode = -1), QD.android && QD.chrome && !DD.synthetic && (13 == DD.keyCode || 8 == DD.keyCode)) return this.view.observer.delayAndroidKey(DD.key, DD.keyCode), !0;
        let zD;
        return !QD.ios || DD.synthetic || DD.altKey || DD.metaKey || DD.shiftKey || !((zD = Up.find((zD => zD.keyCode == DD.keyCode))) && !DD.ctrlKey || fp.indexOf(DD.key) > -1 && DD.ctrlKey) ? (229 != DD.keyCode && this.view.observer.forceFlush(), !1) : (this.pendingIOSKey = zD || DD, setTimeout((() => this.flushIOSKey()), 250), !0)
      }
      flushIOSKey(DD) {
        let zD = this.pendingIOSKey;
        return !!zD && (!("Enter" == zD.key && DD && DD.from < DD.to && /^\S+$/.test(DD.insert.toString())) && (this.pendingIOSKey = void 0, sz(this.view.contentDOM, zD.key, zD.keyCode, zD instanceof KeyboardEvent ? zD : void 0)))
      }
      ignoreDuringComposition(DD) {
        return !(!/^key/.test(DD.type) || DD.synthetic) && (this.composing > 0 || !!(QD.safari && !QD.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = !1, !0))
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

    function Rp(DD, zD) {
      return (wD, pD) => {
        try {
          return zD.call(DD, pD, wD)
        } catch (sD) {
          az(wD.state, sD)
        }
      }
    }

    function Ap(DD) {
      let zD = Object.create(null);

      function wD(DD) {
        return zD[DD] || (zD[DD] = {
          observers: [],
          handlers: []
        })
      }
      for (let pD of DD) {
        let DD = pD.spec,
          zD = DD && DD.plugin.domEventHandlers,
          sD = DD && DD.plugin.domEventObservers;
        if (zD)
          for (let KD in zD) {
            let DD = zD[KD];
            DD && wD(KD).handlers.push(Rp(pD.value, DD))
          }
        if (sD)
          for (let KD in sD) {
            let DD = sD[KD];
            DD && wD(KD).observers.push(Rp(pD.value, DD))
          }
      }
      for (let pD in hp) wD(pD).handlers.push(hp[pD]);
      for (let pD in np) wD(pD).observers.push(np[pD]);
      return zD
    }
    const Up = [{
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
      fp = "dthko",
      Ip = [16, 17, 18, 20, 91, 92, 224, 225];

    function Bp(DD) {
      return .7 * Math.max(0, DD) + 8
    }
    class Gp {
      constructor(DD, zD, wD, sD) {
        this.view = DD, this.startEvent = zD, this.style = wD, this.mustSelect = sD, this.scrollSpeed = {
          x: 0,
          y: 0
        }, this.scrolling = -1, this.lastEvent = zD, this.scrollParents = HD(DD.contentDOM), this.atoms = DD.state.facet(pw).map((zD => zD(DD)));
        let KD = DD.contentDOM.ownerDocument;
        KD.addEventListener("mousemove", this.move = this.move.bind(this)), KD.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = zD.shiftKey, this.multiple = DD.state.facet(pD.k.allowMultipleSelections) && function(DD, zD) {
          let wD = DD.state.facet(Tz);
          return wD.length ? wD[0](zD) : QD.mac ? zD.metaKey : zD.ctrlKey
        }(DD, zD), this.dragging = !(! function(DD, zD) {
          let {
            main: wD
          } = DD.state.selection;
          if (wD.empty) return !1;
          let pD = ZD(DD.root);
          if (!pD || 0 == pD.rangeCount) return !0;
          let sD = pD.getRangeAt(0).getClientRects();
          for (let KD = 0; KD < sD.length; KD++) {
            let DD = sD[KD];
            if (DD.left <= zD.clientX && DD.right >= zD.clientX && DD.top <= zD.clientY && DD.bottom >= zD.clientY) return !0
          }
          return !1
        }(DD, zD) || 1 != Cp(zD)) && null
      }
      start(DD) {
        !1 === this.dragging && this.select(DD)
      }
      move(DD) {
        if (0 == DD.buttons) return this.destroy();
        if (this.dragging || null == this.dragging && (zD = this.startEvent, wD = DD, Math.max(Math.abs(zD.clientX - wD.clientX), Math.abs(zD.clientY - wD.clientY)) < 10)) return;
        var zD, wD;
        this.select(this.lastEvent = DD);
        let pD = 0,
          sD = 0,
          KD = 0,
          rD = 0,
          LD = this.view.win.innerWidth,
          cD = this.view.win.innerHeight;
        this.scrollParents.x && ({
          left: KD,
          right: LD
        } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({
          top: rD,
          bottom: cD
        } = this.scrollParents.y.getBoundingClientRect());
        let gD = Lw(this.view);
        DD.clientX - gD.left <= KD + 6 ? pD = -Bp(KD - DD.clientX) : DD.clientX + gD.right >= LD - 6 && (pD = Bp(DD.clientX - LD)), DD.clientY - gD.top <= rD + 6 ? sD = -Bp(rD - DD.clientY) : DD.clientY + gD.bottom >= cD - 6 && (sD = Bp(DD.clientY - cD)), this.setScrollSpeed(pD, sD)
      }
      up(DD) {
        null == this.dragging && this.select(this.lastEvent), this.dragging || DD.preventDefault(), this.destroy()
      }
      destroy() {
        this.setScrollSpeed(0, 0);
        let DD = this.view.contentDOM.ownerDocument;
        DD.removeEventListener("mousemove", this.move), DD.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null
      }
      setScrollSpeed(DD, zD) {
        this.scrollSpeed = {
          x: DD,
          y: zD
        }, DD || zD ? this.scrolling < 0 && (this.scrolling = setInterval((() => this.scroll()), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1)
      }
      scroll() {
        let {
          x: DD,
          y: zD
        } = this.scrollSpeed;
        DD && this.scrollParents.x && (this.scrollParents.x.scrollLeft += DD, DD = 0), zD && this.scrollParents.y && (this.scrollParents.y.scrollTop += zD, zD = 0), (DD || zD) && this.view.win.scrollBy(DD, zD), !1 === this.dragging && this.select(this.lastEvent)
      }
      select(DD) {
        let {
          view: zD
        } = this, wD = uw(this.atoms, this.style.get(DD, this.extend, this.multiple));
        !this.mustSelect && wD.eq(zD.state.selection, !1 === this.dragging) || this.view.dispatch({
          selection: wD,
          userEvent: "select.pointer"
        }), this.mustSelect = !1
      }
      update(DD) {
        DD.transactions.some((DD => DD.isUserEvent("input.type"))) ? this.destroy() : this.style.update(DD) && setTimeout((() => this.select(this.lastEvent)), 20)
      }
    }
    const hp = Object.create(null),
      np = Object.create(null),
      Mp = QD.ie && QD.ie_version < 15 || QD.ios && QD.webkit_version < 604;

    function Op(DD, zD, wD) {
      for (let pD of DD.facet(zD)) wD = pD(wD, DD);
      return wD
    }

    function Jp(DD, zD) {
      zD = Op(DD.state, Wz, zD);
      let wD, {
          state: sD
        } = DD,
        KD = 1,
        rD = sD.toText(zD),
        LD = rD.lines == sD.selection.rG.length;
      if (null != Tp && sD.selection.rG.every((DD => DD.empty)) && Tp == rD.toString()) {
        let DD = -1;
        wD = sD.changeByRange((wD => {
          let cD = sD.doc.lineAt(wD.from);
          if (cD.from == DD) return {
            range: wD
          };
          DD = cD.from;
          let gD = sD.toText((LD ? rD.line(KD++).text : zD) + sD.lineBreak);
          return {
            changes: {
              from: cD.from,
              insert: gD
            },
            range: pD.j.cursor(wD.from + gD.length)
          }
        }))
      } else wD = LD ? sD.changeByRange((DD => {
        let zD = rD.line(KD++);
        return {
          changes: {
            from: DD.from,
            to: DD.to,
            insert: zD.text
          },
          range: pD.j.cursor(DD.from + zD.length)
        }
      })) : sD.replaceSelection(rD);
      DD.dispatch(wD, {
        userEvent: "input.paste",
        scrollIntoView: !0
      })
    }

    function Ep(DD, zD, wD, sD) {
      if (1 == sD) return pD.j.cursor(zD, wD);
      if (2 == sD) return function(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          sD = DD.charCategorizer(zD),
          KD = DD.doc.lineAt(zD),
          rD = zD - KD.from;
        if (0 == KD.length) return pD.j.cursor(zD);
        0 == rD ? wD = 1 : rD == KD.length && (wD = -1);
        let LD = rD,
          cD = rD;
        wD < 0 ? LD = (0, pD._)(KD.text, rD, !1) : cD = (0, pD._)(KD.text, rD);
        let gD = sD(KD.text.slice(LD, cD));
        for (; LD > 0;) {
          let DD = (0, pD._)(KD.text, LD, !1);
          if (sD(KD.text.slice(DD, LD)) != gD) break;
          LD = DD
        }
        for (; cD < KD.length;) {
          let DD = (0, pD._)(KD.text, cD);
          if (sD(KD.text.slice(cD, DD)) != gD) break;
          cD = DD
        }
        return pD.j.range(LD + KD.from, cD + KD.from)
      }(DD.state, zD, wD);
      {
        let sD = DD.docView.lineAt(zD, wD),
          KD = DD.state.doc.lineAt(sD ? sD.posAtEnd : zD),
          rD = sD ? sD.posAtStart : KD.from,
          LD = sD ? sD.posAtEnd : KD.to;
        return LD < DD.state.doc.length && LD == KD.to && LD++, pD.j.range(rD, LD)
      }
    }
    np.scroll = DD => {
      DD.inputState.lastScrollTop = DD.scrollDOM.scrollTop, DD.inputState.lastScrollLeft = DD.scrollDOM.scrollLeft
    }, np.wheel = np.mousewheel = DD => {
      DD.inputState.lastWheelEvent = Date.now()
    }, hp.keydown = (DD, zD) => (DD.inputState.setSelectionOrigin("select"), 27 == zD.keyCode && 0 != DD.inputState.tabFocusMode && (DD.inputState.tabFocusMode = Date.now() + 2e3), !1), np.touchstart = (DD, zD) => {
      let wD = DD.inputState,
        pD = zD.targetTouches[0];
      wD.lastTouchTime = Date.now(), pD && (wD.lastTouchX = pD.clientX, wD.lastTouchY = pD.clientY), wD.setSelectionOrigin("select.pointer")
    }, np.touchmove = DD => {
      DD.inputState.setSelectionOrigin("select.pointer")
    }, hp.mousedown = (DD, zD) => {
      if (DD.observer.flush(), DD.inputState.lastTouchTime > Date.now() - 2e3) return !1;
      let wD = null;
      for (let pD of DD.state.facet(jz))
        if (wD = pD(DD, zD), wD) break;
      if (wD || 0 != zD.button || (wD = function(DD, zD) {
          let wD = DD.posAndSideAtCoords({
              x: zD.clientX,
              y: zD.clientY
            }, !1),
            sD = Cp(zD),
            KD = DD.state.selection;
          return {
            update(DD) {
              DD.docChanged && (wD.pos = DD.changes.mapPos(wD.pos), KD = KD.map(DD.changes))
            },
            get(zD, rD, LD) {
              let cD, gD = DD.posAndSideAtCoords({
                  x: zD.clientX,
                  y: zD.clientY
                }, !1),
                RD = Ep(DD, gD.pos, gD.assoc, sD);
              if (wD.pos != gD.pos && !rD) {
                let zD = Ep(DD, wD.pos, wD.assoc, sD),
                  KD = Math.min(zD.from, RD.from),
                  rD = Math.max(zD.to, RD.to);
                RD = KD < RD.from ? pD.j.range(KD, rD, RD.assoc) : pD.j.range(rD, KD, RD.assoc)
              }
              return rD ? KD.replaceRange(KD.main.extend(RD.from, RD.to, RD.assoc)) : LD && 1 == sD && KD.rG.length > 1 && (cD = function(DD, zD) {
                for (let wD = 0; wD < DD.rG.length; wD++) {
                  let {
                    from: sD,
                    to: KD
                  } = DD.rG[wD];
                  if (sD <= zD && KD >= zD) return pD.j.create(DD.rG.slice(0, wD).concat(DD.rG.slice(wD + 1)), DD.mainIndex == wD ? 0 : DD.mainIndex - (DD.mainIndex > wD ? 1 : 0))
                }
                return null
              }(KD, gD.pos)) ? cD : LD ? KD.addRange(RD) : pD.j.create([RD])
            }
          }
        }(DD, zD)), wD) {
        let pD = !DD.hasFocus;
        DD.inputState.startMouseSelection(new Gp(DD, zD, wD, pD)), pD && DD.observer.ignore((() => {
          wz(DD.contentDOM);
          let zD = DD.root.activeElement;
          zD && !zD.contains(DD.contentDOM) && zD.blur()
        }));
        let sD = DD.inputState.mouseSelection;
        if (sD) return sD.start(zD), !1 === sD.dragging
      } else DD.inputState.setSelectionOrigin("select.pointer");
      return !1
    };
    const Qp = QD.ie && QD.ie_version <= 11;
    let Xp = null,
      Vp = 0,
      Pp = 0;

    function Cp(DD) {
      if (!Qp) return DD.detail;
      let zD = Xp,
        wD = Pp;
      return Xp = DD, Pp = Date.now(), Vp = !zD || wD > Date.now() - 400 && Math.abs(zD.clientX - DD.clientX) < 2 && Math.abs(zD.clientY - DD.clientY) < 2 ? (Vp + 1) % 3 : 1
    }

    function xp(DD, zD, wD, pD) {
      if (!(wD = Op(DD.state, Wz, wD))) return;
      let sD = DD.posAtCoords({
          x: zD.clientX,
          y: zD.clientY
        }, !1),
        {
          draggedContent: KD
        } = DD.inputState,
        rD = pD && KD && function(DD, zD) {
          let wD = DD.state.facet(bz);
          return wD.length ? wD[0](zD) : QD.mac ? !zD.altKey : !zD.ctrlKey
        }(DD, zD) ? {
          from: KD.from,
          to: KD.to
        } : null,
        LD = {
          from: sD,
          insert: wD
        },
        cD = DD.state.changes(rD ? [rD, LD] : LD);
      DD.focus(), DD.dispatch({
        changes: cD,
        selection: {
          anchor: cD.mapPos(sD, -1),
          head: cD.mapPos(sD, 1)
        },
        userEvent: rD ? "move.drop" : "input.drop"
      }), DD.inputState.draggedContent = null
    }
    hp.dragstart = (DD, zD) => {
      let {
        selection: {
          main: wD
        }
      } = DD.state;
      if (zD.target.draggable) {
        let sD = DD.docView.tile.nearest(zD.target);
        if (sD && sD.isWidget()) {
          let DD = sD.posAtStart,
            zD = DD + sD.length;
          (DD >= wD.to || zD <= wD.from) && (wD = pD.j.range(DD, zD))
        }
      }
      let {
        inputState: sD
      } = DD;
      return sD.mouseSelection && (sD.mouseSelection.dragging = !0), sD.draggedContent = wD, zD.dataTransfer && (zD.dataTransfer.setData("Text", Op(DD.state, Nz, DD.state.sliceDoc(wD.from, wD.to))), zD.dataTransfer.effectAllowed = "copyMove"), !1
    }, hp.dragend = DD => (DD.inputState.draggedContent = null, !1), hp.drop = (DD, zD) => {
      if (!zD.dataTransfer) return !1;
      if (DD.state.readOnly) return !0;
      let wD = zD.dataTransfer.files;
      if (wD && wD.length) {
        let pD = Array(wD.length),
          sD = 0,
          KD = () => {
            ++sD == wD.length && xp(DD, zD, pD.filter((DD => null != DD)).join(DD.state.lineBreak), !1)
          };
        for (let DD = 0; DD < wD.length; DD++) {
          let zD = new FileReader;
          zD.onerror = KD, zD.onload = () => {
            /[\x00-\x08\x0e-\x1f]{2}/.test(zD.result) || (pD[DD] = zD.result), KD()
          }, zD.readAsText(wD[DD])
        }
        return !0
      } {
        let wD = zD.dataTransfer.getData("Text");
        if (wD) return xp(DD, zD, wD, !0), !0
      }
      return !1
    }, hp.paste = (DD, zD) => {
      if (DD.state.readOnly) return !0;
      DD.observer.flush();
      let wD = Mp ? null : zD.clipboardData;
      return wD ? (Jp(DD, wD.getData("text/plain") || wD.getData("text/uri-list")), !0) : (function(DD) {
        let zD = DD.dom.parentNode;
        if (!zD) return;
        let wD = zD.appendChild(document.createElement("textarea"));
        wD.style.cssText = "position: fixed; left: -10000px; top: 10px", wD.focus(), setTimeout((() => {
          DD.focus(), wD.remove(), Jp(DD, wD.value)
        }), 50)
      }(DD), !1)
    };
    let Tp = null;
    hp.copy = hp.cut = (DD, zD) => {
      if (!kD(DD.contentDOM, DD.observer.selectionRange)) return !1;
      let {
        text: wD,
        rG: pD,
        linewise: sD
      } = function(DD) {
        let zD = [],
          wD = [],
          pD = !1;
        for (let sD of DD.selection.rG) sD.empty || (zD.push(DD.sliceDoc(sD.from, sD.to)), wD.push(sD));
        if (!zD.length) {
          let sD = -1;
          for (let {
              from: pD
            }
            of DD.selection.rG) {
            let KD = DD.doc.lineAt(pD);
            KD.number > sD && (zD.push(KD.text), wD.push({
              from: KD.from,
              to: Math.min(DD.doc.length, KD.to + 1)
            })), sD = KD.number
          }
          pD = !0
        }
        return {
          text: Op(DD, Nz, zD.join(DD.lineBreak)),
          rG: wD,
          linewise: pD
        }
      }(DD.state);
      if (!wD && !sD) return !1;
      Tp = sD ? wD : null, "cut" != zD.type || DD.state.readOnly || DD.dispatch({
        changes: pD,
        scrollIntoView: !0,
        userEvent: "delete.cut"
      });
      let KD = Mp ? null : zD.clipboardData;
      return KD ? (KD.clearData(), KD.setData("text/plain", wD), !0) : (function(DD, zD) {
        let wD = DD.dom.parentNode;
        if (!wD) return;
        let pD = wD.appendChild(document.createElement("textarea"));
        pD.style.cssText = "position: fixed; left: -10000px; top: 10px", pD.value = zD, pD.focus(), pD.selectionEnd = zD.length, pD.selectionStart = 0, setTimeout((() => {
          pD.remove(), DD.focus()
        }), 50)
      }(DD, wD), !1)
    };
    const bp = pD.c.define();

    function jp(DD, zD) {
      let wD = [];
      for (let pD of DD.facet(lz)) {
        let sD = pD(DD, zD);
        sD && wD.push(sD)
      }
      return wD.length ? DD.update({
        effects: wD,
        annotations: bp.of(!0)
      }) : null
    }

    function dp(DD) {
      setTimeout((() => {
        let zD = DD.hasFocus;
        if (zD != DD.inputState.notifiedFocused) {
          let wD = jp(DD.state, zD);
          wD ? DD.dispatch(wD) : DD.update([])
        }
      }), 10)
    }
    np.focus = DD => {
      DD.inputState.lastFocusTime = Date.now(), DD.scrollDOM.scrollTop || !DD.inputState.lastScrollTop && !DD.inputState.lastScrollLeft || (DD.scrollDOM.scrollTop = DD.inputState.lastScrollTop, DD.scrollDOM.scrollLeft = DD.inputState.lastScrollLeft), dp(DD)
    }, np.blur = DD => {
      DD.observer.clearSelectionRange(), dp(DD)
    }, np.compositionstart = np.compositionupdate = DD => {
      DD.observer.editContext || (null == DD.inputState.compositionFirstChange && (DD.inputState.compositionFirstChange = !0), DD.inputState.composing < 0 && (DD.inputState.composing = 0))
    }, np.compositionend = DD => {
      DD.observer.editContext || (DD.inputState.composing = -1, DD.inputState.compositionEndedAt = Date.now(), DD.inputState.compositionPendingKey = !0, DD.inputState.compositionPendingChange = DD.observer.pendingRecords().length > 0, DD.inputState.compositionFirstChange = null, QD.chrome && QD.android ? DD.observer.flushSoon() : DD.inputState.compositionPendingChange ? Promise.resolve().then((() => DD.observer.flush())) : setTimeout((() => {
        DD.inputState.composing < 0 && DD.docView.hasComposition && DD.update([])
      }), 50))
    }, np.contextmenu = DD => {
      DD.inputState.lastContextMenu = Date.now()
    }, hp.beforeinput = (DD, zD) => {
      var wD, pD;
      if ("insertText" != zD.inputType && "insertCompositionText" != zD.inputType || (DD.inputState.insertingText = zD.data, DD.inputState.insertingTextAt = Date.now()), "insertReplacementText" == zD.inputType && DD.observer.editContext) {
        let pD = null === (wD = zD.dataTransfer) || void 0 === wD ? void 0 : wD.getData("text/plain"),
          sD = zD.getTargetRanges();
        if (pD && sD.length) {
          let zD = sD[0],
            wD = DD.posAtDOM(zD.startContainer, zD.startOffset),
            KD = DD.posAtDOM(zD.endContainer, zD.endOffset);
          return rp(DD, {
            from: wD,
            to: KD,
            insert: DD.state.toText(pD)
          }, null), !0
        }
      }
      let sD;
      if (QD.chrome && QD.android && (sD = Up.find((DD => DD.inputType == zD.inputType))) && (DD.observer.delayAndroidKey(sD.key, sD.keyCode), "Backspace" == sD.key || "Delete" == sD.key)) {
        let zD = (null === (pD = window.visualViewport) || void 0 === pD ? void 0 : pD.height) || 0;
        setTimeout((() => {
          var wD;
          ((null === (wD = window.visualViewport) || void 0 === wD ? void 0 : wD.height) || 0) > zD + 10 && DD.hasFocus && (DD.contentDOM.blur(), DD.focus())
        }), 100)
      }
      return QD.ios && "deleteContentForward" == zD.inputType && DD.observer.flushSoon(), QD.safari && "insertText" == zD.inputType && DD.inputState.composing >= 0 && setTimeout((() => np.compositionend(DD, zD)), 20), !1
    };
    const Sp = new Set;
    const ip = ["pre-wrap", "normal", "pre-line", "break-spaces"];
    let lp = !1;

    function Wp() {
      lp = !1
    }
    class Np {
      constructor(DD) {
        this.lineWrapping = DD, this.doc = pD.K.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30
      }
      heightForGap(DD, zD) {
        let wD = this.doc.lineAt(zD).number - this.doc.lineAt(DD).number + 1;
        return this.lineWrapping && (wD += Math.max(0, Math.ceil((zD - DD - wD * this.lineLength * .5) / this.lineLength))), this.lineHeight * wD
      }
      heightForLine(DD) {
        if (!this.lineWrapping) return this.lineHeight;
        return (1 + Math.max(0, Math.ceil((DD - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight
      }
      setDoc(DD) {
        return this.doc = DD, this
      }
      mustRefreshForWrapping(DD) {
        return ip.indexOf(DD) > -1 != this.lineWrapping
      }
      mustRefreshForHeights(DD) {
        let zD = !1;
        for (let wD = 0; wD < DD.length; wD++) {
          let pD = DD[wD];
          pD < 0 ? wD++ : this.heightSamples[Math.floor(10 * pD)] || (zD = !0, this.heightSamples[Math.floor(10 * pD)] = !0)
        }
        return zD
      }
      refresh(DD, zD, wD, pD, sD, KD) {
        let rD = ip.indexOf(DD) > -1,
          LD = Math.abs(zD - this.lineHeight) > .3 || this.lineWrapping != rD || Math.abs(wD - this.charWidth) > .1;
        if (this.lineWrapping = rD, this.lineHeight = zD, this.charWidth = wD, this.textHeight = pD, this.lineLength = sD, LD) {
          this.heightSamples = {};
          for (let DD = 0; DD < KD.length; DD++) {
            let zD = KD[DD];
            zD < 0 ? DD++ : this.heightSamples[Math.floor(10 * zD)] = !0
          }
        }
        return LD
      }
    }
    class Zp {
      constructor(DD, zD) {
        this.from = DD, this.heights = zD, this.index = 0
      }
      get more() {
        return this.index < this.heights.length
      }
    }
    class yp {
      constructor(DD, zD, wD, pD, sD) {
        this.from = DD, this.length = zD, this.top = wD, this.height = pD, this._content = sD
      }
      get type() {
        return "number" == typeof this._content ? bD.Text : Array.isArray(this._content) ? this._content : this._content.type
      }
      get to() {
        return this.from + this.length
      }
      get bottom() {
        return this.top + this.height
      }
      get widget() {
        return this._content instanceof iD ? this._content.widget : null
      }
      get widgetLineBreaks() {
        return "number" == typeof this._content ? this._content : 0
      }
      join(DD) {
        let zD = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(DD._content) ? DD._content : [DD]);
        return new yp(this.from, this.length + DD.length, this.top, this.height + DD.height, zD)
      }
    }
    var kp = function(DD) {
      return DD[DD.ByPos = 0] = "ByPos", DD[DD.ByHeight = 1] = "ByHeight", DD[DD.ByPosNoHeight = 2] = "ByPosNoHeight", DD
    }(kp || (kp = {}));
    const mp = .001;
    class ep {
      constructor(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.length = DD, this.height = zD, this.flags = wD
      }
      get outdated() {
        return (2 & this.flags) > 0
      }
      set outdated(DD) {
        this.flags = (DD ? 2 : 0) | -3 & this.flags
      }
      setHeight(DD) {
        this.height != DD && (Math.abs(this.height - DD) > mp && (lp = !0), this.height = DD)
      }
      replace(DD, zD, wD) {
        return ep.of(wD)
      }
      decomposeLeft(DD, zD) {
        zD.push(this)
      }
      decomposeRight(DD, zD) {
        zD.push(this)
      }
      applyChanges(DD, zD, wD, pD) {
        let sD = this,
          KD = wD.doc;
        for (let rD = pD.length - 1; rD >= 0; rD--) {
          let {
            fromA: LD,
            toA: cD,
            fromB: gD,
            toB: RD
          } = pD[rD], AD = sD.lineAt(LD, kp.ByPosNoHeight, wD.setDoc(zD), 0, 0), UD = AD.to >= cD ? AD : sD.lineAt(cD, kp.ByPosNoHeight, wD, 0, 0);
          for (RD += UD.to - cD, cD = UD.to; rD > 0 && AD.from <= pD[rD - 1].toA;) LD = pD[rD - 1].fromA, gD = pD[rD - 1].fromB, rD--, LD < AD.from && (AD = sD.lineAt(LD, kp.ByPosNoHeight, wD, 0, 0));
          gD += AD.from - LD, LD = AD.from;
          let fD = qp.build(wD.setDoc(KD), DD, gD, RD);
          sD = op(sD, sD.replace(LD, cD, fD))
        }
        return sD.updateHeight(wD, 0)
      }
      static empty() {
        return new tp(0, 0, 0)
      }
      static of (DD) {
        if (1 == DD.length) return DD[0];
        let zD = 0,
          wD = DD.length,
          pD = 0,
          sD = 0;
        for (;;)
          if (zD == wD)
            if (pD > 2 * sD) {
              let sD = DD[zD - 1];
              sD.break ? DD.splice(--zD, 1, sD.left, null, sD.right) : DD.splice(--zD, 1, sD.left, sD.right), wD += 1 + sD.break, pD -= sD.size
            } else {
              if (!(sD > 2 * pD)) break;
              {
                let zD = DD[wD];
                zD.break ? DD.splice(wD, 1, zD.left, null, zD.right) : DD.splice(wD, 1, zD.left, zD.right), wD += 2 + zD.break, sD -= zD.size
              }
            }
        else if (pD < sD) {
          let wD = DD[zD++];
          wD && (pD += wD.size)
        } else {
          let zD = DD[--wD];
          zD && (sD += zD.size)
        }
        let KD = 0;
        return null == DD[zD - 1] ? (KD = 1, zD--) : null == DD[zD] && (KD = 1, wD++), new Yp(ep.of(DD.slice(0, zD)), KD, ep.of(DD.slice(wD)))
      }
    }

    function op(DD, zD) {
      return DD == zD ? DD : (DD.constructor != zD.constructor && (lp = !0), zD)
    }
    ep.prototype.size = 1;
    const ap = jD.replace({});
    class vp extends ep {
      constructor(DD, zD, wD) {
        super(DD, zD), this.deco = wD, this.spaceAbove = 0
      }
      mainBlock(DD, zD) {
        return new yp(zD, this.length, DD + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0)
      }
      blockAt(DD, zD, wD, pD) {
        return this.spaceAbove && DD < wD + this.spaceAbove ? new yp(pD, 0, wD, this.spaceAbove, ap) : this.mainBlock(wD, pD)
      }
      lineAt(DD, zD, wD, pD, sD) {
        let KD = this.mainBlock(pD, sD);
        return this.spaceAbove ? this.blockAt(0, wD, pD, sD).join(KD) : KD
      }
      forEachLine(DD, zD, wD, pD, sD, KD) {
        DD <= sD + this.length && zD >= sD && KD(this.lineAt(0, kp.ByPos, wD, pD, sD))
      }
      setMeasuredHeight(DD) {
        let zD = DD.heights[DD.index++];
        zD < 0 ? (this.spaceAbove = -zD, zD = DD.heights[DD.index++]) : this.spaceAbove = 0, this.setHeight(zD)
      }
      updateHeight(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wD = arguments.length > 3 ? arguments[3] : void 0;
        return wD && wD.from <= zD && wD.more && this.setMeasuredHeight(wD), this.outdated = !1, this
      }
      toString() {
        return `block(${this.length})`
      }
    }
    class tp extends vp {
      constructor(DD, zD, wD) {
        super(DD, zD, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = wD
      }
      mainBlock(DD, zD) {
        return new yp(zD, this.length, DD + this.spaceAbove, this.height - this.spaceAbove, this.breaks)
      }
      replace(DD, zD, wD) {
        let pD = wD[0];
        return 1 == wD.length && (pD instanceof tp || pD instanceof Fp && 4 & pD.flags) && Math.abs(this.length - pD.length) < 10 ? (pD instanceof Fp ? pD = new tp(pD.length, this.height, this.spaceAbove) : pD.height = this.height, this.outdated || (pD.outdated = !1), pD) : ep.of(wD)
      }
      updateHeight(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          pD = arguments.length > 3 ? arguments[3] : void 0;
        return pD && pD.from <= zD && pD.more ? this.setMeasuredHeight(pD) : (wD || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, DD.heightForLine(this.length - this.collapsed)) + this.breaks * DD.lineHeight)), this.outdated = !1, this
      }
      toString() {
        return `line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`
      }
    }
    class Fp extends ep {
      constructor(DD) {
        super(DD, 0)
      }
      heightMetrics(DD, zD) {
        let wD, pD = DD.doc.lineAt(zD).number,
          sD = DD.doc.lineAt(zD + this.length).number,
          KD = sD - pD + 1,
          rD = 0;
        if (DD.lineWrapping) {
          let zD = Math.min(this.height, DD.lineHeight * KD);
          wD = zD / KD, this.length > KD + 1 && (rD = (this.height - zD) / (this.length - KD - 1))
        } else wD = this.height / KD;
        return {
          firstLine: pD,
          lastLine: sD,
          perLine: wD,
          perChar: rD
        }
      }
      blockAt(DD, zD, wD, pD) {
        let {
          firstLine: sD,
          lastLine: KD,
          perLine: rD,
          perChar: LD
        } = this.heightMetrics(zD, pD);
        if (zD.lineWrapping) {
          let sD = pD + (DD < zD.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (DD - wD) / this.height)) * this.length)),
            KD = zD.doc.lineAt(sD),
            cD = rD + KD.length * LD,
            gD = Math.max(wD, DD - cD / 2);
          return new yp(KD.from, KD.length, gD, cD, 0)
        } {
          let pD = Math.max(0, Math.min(KD - sD, Math.floor((DD - wD) / rD))),
            {
              from: LD,
              length: cD
            } = zD.doc.line(sD + pD);
          return new yp(LD, cD, wD + rD * pD, rD, 0)
        }
      }
      lineAt(DD, zD, wD, pD, sD) {
        if (zD == kp.ByHeight) return this.blockAt(DD, wD, pD, sD);
        if (zD == kp.ByPosNoHeight) {
          let {
            from: zD,
            to: pD
          } = wD.doc.lineAt(DD);
          return new yp(zD, pD - zD, 0, 0, 0)
        }
        let {
          firstLine: KD,
          perLine: rD,
          perChar: LD
        } = this.heightMetrics(wD, sD), cD = wD.doc.lineAt(DD), gD = rD + cD.length * LD, RD = cD.number - KD, AD = pD + rD * RD + LD * (cD.from - sD - RD);
        return new yp(cD.from, cD.length, Math.max(pD, Math.min(AD, pD + this.height - gD)), gD, 0)
      }
      forEachLine(DD, zD, wD, pD, sD, KD) {
        DD = Math.max(DD, sD), zD = Math.min(zD, sD + this.length);
        let {
          firstLine: rD,
          perLine: LD,
          perChar: cD
        } = this.heightMetrics(wD, sD);
        for (let gD = DD, RD = pD; gD <= zD;) {
          let zD = wD.doc.lineAt(gD);
          if (gD == DD) {
            let wD = zD.number - rD;
            RD += LD * wD + cD * (DD - sD - wD)
          }
          let pD = LD + cD * zD.length;
          KD(new yp(zD.from, zD.length, RD, pD, 0)), RD += pD, gD = zD.to + 1
        }
      }
      replace(DD, zD, wD) {
        let pD = this.length - zD;
        if (pD > 0) {
          let DD = wD[wD.length - 1];
          DD instanceof Fp ? wD[wD.length - 1] = new Fp(DD.length + pD) : wD.push(null, new Fp(pD - 1))
        }
        if (DD > 0) {
          let zD = wD[0];
          zD instanceof Fp ? wD[0] = new Fp(DD + zD.length) : wD.unshift(new Fp(DD - 1), null)
        }
        return ep.of(wD)
      }
      decomposeLeft(DD, zD) {
        zD.push(new Fp(DD - 1), null)
      }
      decomposeRight(DD, zD) {
        zD.push(null, new Fp(this.length - DD - 1))
      }
      updateHeight(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          pD = arguments.length > 3 ? arguments[3] : void 0,
          sD = zD + this.length;
        if (pD && pD.from <= zD + this.length && pD.more) {
          let wD = [],
            KD = Math.max(zD, pD.from),
            rD = -1;
          for (pD.from > zD && wD.push(new Fp(pD.from - zD - 1).updateHeight(DD, zD)); KD <= sD && pD.more;) {
            let zD = DD.doc.lineAt(KD).length;
            wD.length && wD.push(null);
            let sD = pD.heights[pD.index++],
              LD = 0;
            sD < 0 && (LD = -sD, sD = pD.heights[pD.index++]), -1 == rD ? rD = sD : Math.abs(sD - rD) >= mp && (rD = -2);
            let cD = new tp(zD, sD, LD);
            cD.outdated = !1, wD.push(cD), KD += zD + 1
          }
          KD <= sD && wD.push(null, new Fp(sD - KD).updateHeight(DD, KD));
          let LD = ep.of(wD);
          return (rD < 0 || Math.abs(LD.height - this.height) >= mp || Math.abs(rD - this.heightMetrics(DD, zD).perLine) >= mp) && (lp = !0), op(this, LD)
        }
        return (wD || this.outdated) && (this.setHeight(DD.heightForGap(zD, zD + this.length)), this.outdated = !1), this
      }
      toString() {
        return `gap(${this.length})`
      }
    }
    class Yp extends ep {
      constructor(DD, zD, wD) {
        super(DD.length + zD + wD.length, DD.height + wD.height, zD | (DD.outdated || wD.outdated ? 2 : 0)), this.left = DD, this.right = wD, this.size = DD.size + wD.size
      }
      get break() {
        return 1 & this.flags
      }
      blockAt(DD, zD, wD, pD) {
        let sD = wD + this.left.height;
        return DD < sD ? this.left.blockAt(DD, zD, wD, pD) : this.right.blockAt(DD, zD, sD, pD + this.left.length + this.break)
      }
      lineAt(DD, zD, wD, pD, sD) {
        let KD = pD + this.left.height,
          rD = sD + this.left.length + this.break,
          LD = zD == kp.ByHeight ? DD < KD : DD < rD,
          cD = LD ? this.left.lineAt(DD, zD, wD, pD, sD) : this.right.lineAt(DD, zD, wD, KD, rD);
        if (this.break || (LD ? cD.to < rD : cD.from > rD)) return cD;
        let gD = zD == kp.ByPosNoHeight ? kp.ByPosNoHeight : kp.ByPos;
        return LD ? cD.join(this.right.lineAt(rD, gD, wD, KD, rD)) : this.left.lineAt(rD, gD, wD, pD, sD).join(cD)
      }
      forEachLine(DD, zD, wD, pD, sD, KD) {
        let rD = pD + this.left.height,
          LD = sD + this.left.length + this.break;
        if (this.break) DD < LD && this.left.forEachLine(DD, zD, wD, pD, sD, KD), zD >= LD && this.right.forEachLine(DD, zD, wD, rD, LD, KD);
        else {
          let cD = this.lineAt(LD, kp.ByPos, wD, pD, sD);
          DD < cD.from && this.left.forEachLine(DD, cD.from - 1, wD, pD, sD, KD), cD.to >= DD && cD.from <= zD && KD(cD), zD > cD.to && this.right.forEachLine(cD.to + 1, zD, wD, rD, LD, KD)
        }
      }
      replace(DD, zD, wD) {
        let pD = this.left.length + this.break;
        if (zD < pD) return this.balanced(this.left.replace(DD, zD, wD), this.right);
        if (DD > this.left.length) return this.balanced(this.left, this.right.replace(DD - pD, zD - pD, wD));
        let sD = [];
        DD > 0 && this.decomposeLeft(DD, sD);
        let KD = sD.length;
        for (let rD of wD) sD.push(rD);
        if (DD > 0 && Hp(sD, KD - 1), zD < this.length) {
          let DD = sD.length;
          this.decomposeRight(zD, sD), Hp(sD, DD)
        }
        return ep.of(sD)
      }
      decomposeLeft(DD, zD) {
        let wD = this.left.length;
        if (DD <= wD) return this.left.decomposeLeft(DD, zD);
        zD.push(this.left), this.break && (wD++, DD >= wD && zD.push(null)), DD > wD && this.right.decomposeLeft(DD - wD, zD)
      }
      decomposeRight(DD, zD) {
        let wD = this.left.length,
          pD = wD + this.break;
        if (DD >= pD) return this.right.decomposeRight(DD - pD, zD);
        DD < wD && this.left.decomposeRight(DD, zD), this.break && DD < pD && zD.push(null), zD.push(this.right)
      }
      balanced(DD, zD) {
        return DD.size > 2 * zD.size || zD.size > 2 * DD.size ? ep.of(this.break ? [DD, null, zD] : [DD, zD]) : (this.left = op(this.left, DD), this.right = op(this.right, zD), this.setHeight(DD.height + zD.height), this.outdated = DD.outdated || zD.outdated, this.size = DD.size + zD.size, this.length = DD.length + this.break+zD.length, this)
      }
      updateHeight(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          pD = arguments.length > 3 ? arguments[3] : void 0,
          {
            left: sD,
            right: KD
          } = this,
          rD = zD + sD.length + this.break,
          LD = null;
        return pD && pD.from <= zD + sD.length && pD.more ? LD = sD = sD.updateHeight(DD, zD, wD, pD) : sD.updateHeight(DD, zD, wD), pD && pD.from <= rD + KD.length && pD.more ? LD = KD = KD.updateHeight(DD, rD, wD, pD) : KD.updateHeight(DD, rD, wD), LD ? this.balanced(sD, KD) : (this.height = this.left.height + this.right.height, this.outdated = !1, this)
      }
      toString() {
        return this.left + (this.break ? " " : "-") + this.right
      }
    }

    function Hp(DD, zD) {
      let wD, pD;
      null == DD[zD] && (wD = DD[zD - 1]) instanceof Fp && (pD = DD[zD + 1]) instanceof Fp && DD.splice(zD - 1, 3, new Fp(wD.length + 1 + pD.length))
    }
    class qp {
      constructor(DD, zD) {
        this.pos = DD, this.oracle = zD, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = DD
      }
      get isCovered() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering
      }
      span(DD, zD) {
        if (this.lineStart > -1) {
          let DD = Math.min(zD, this.lineEnd),
            wD = this.nodes[this.nodes.length - 1];
          wD instanceof tp ? wD.length += DD - this.pos : (DD > this.pos || !this.isCovered) && this.nodes.push(new tp(DD - this.pos, -1, 0)), this.writtenTo = DD, zD > DD && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1)
        }
        this.pos = zD
      }
      point(DD, zD, wD) {
        if (DD < zD || wD.heightRelevant) {
          let pD = wD.widget ? wD.widget.estimatedHeight : 0,
            sD = wD.widget ? wD.widget.lineBreaks : 0;
          pD < 0 && (pD = this.oracle.lineHeight);
          let KD = zD - DD;
          wD.block ? this.MzD(new vp(KD, pD, wD)) : (KD || sD || pD >= 5) && this.addLineDeco(pD, sD, KD)
        } else zD > DD && this.span(DD, zD);
        this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
      }
      enterLine() {
        if (this.lineStart > -1) return;
        let {
          from: DD,
          to: zD
        } = this.oracle.doc.lineAt(this.pos);
        this.lineStart = DD, this.lineEnd = zD, this.writtenTo < DD && ((this.writtenTo < DD - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, DD - 1)), this.nodes.push(null)), this.pos > DD && this.nodes.push(new tp(this.pos - DD, -1, 0)), this.writtenTo = this.pos
      }
      blankContent(DD, zD) {
        let wD = new Fp(zD - DD);
        return this.oracle.doc.lineAt(DD).to == zD && (wD.flags |= 4), wD
      }
      ensureLine() {
        this.enterLine();
        let DD = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (DD instanceof tp) return DD;
        let zD = new tp(0, -1, 0);
        return this.nodes.push(zD), zD
      }
      MzD(DD) {
        this.enterLine();
        let zD = DD.deco;
        zD && zD.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(DD), this.writtenTo = this.pos = this.pos + DD.length, zD && zD.endSide > 0 && (this.covering = DD)
      }
      addLineDeco(DD, zD, wD) {
        let pD = this.ensureLine();
        pD.length += wD, pD.collapsed += wD, pD.widgetHeight = Math.max(pD.widgetHeight, DD), pD.breaks += zD, this.writtenTo = this.pos = this.pos + wD
      }
      finish(DD) {
        let zD = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
        !(this.lineStart > -1) || zD instanceof tp || this.isCovered ? (this.writtenTo < this.pos || null == zD) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new tp(0, -1, 0));
        let wD = DD;
        for (let pD of this.nodes) pD instanceof tp && pD.updateHeight(this.oracle, wD), wD += pD ? pD.length : 1;
        return this.nodes
      }
      static build(DD, zD, wD, sD) {
        let KD = new qp(wD, DD);
        return pD.z.spans(zD, wD, sD, KD, 0), KD.finish(wD)
      }
    }
    class Ds {
      constructor() {
        this.changes = []
      }
      compareRange() {}
      comparePoint(DD, zD, wD, pD) {
        (DD < zD || wD && wD.heightRelevant || pD && pD.heightRelevant) && WD(DD, zD, this.changes, 5)
      }
    }

    function zs(DD, zD) {
      let wD = DD.getBoundingClientRect(),
        pD = DD.ownerDocument,
        sD = pD.defaultView || window,
        KD = Math.max(0, wD.left),
        rD = Math.min(sD.innerWidth, wD.right),
        LD = Math.max(0, wD.top),
        cD = Math.min(sD.innerHeight, wD.bottom);
      for (let gD = DD.parentNode; gD && gD != pD.body;)
        if (1 == gD.nodeType) {
          let zD = gD,
            wD = window.getComputedStyle(zD);
          if ((zD.scrollHeight > zD.clientHeight || zD.scrollWidth > zD.clientWidth) && "visible" != wD.overflow) {
            let wD = zD.getBoundingClientRect();
            KD = Math.max(KD, wD.left), rD = Math.min(rD, wD.right), LD = Math.max(LD, wD.top), cD = Math.min(gD == DD.parentNode ? sD.innerHeight : cD, wD.bottom)
          }
          gD = "absolute" == wD.position || "fixed" == wD.position ? zD.offsetParent : zD.parentNode
        } else {
          if (11 != gD.nodeType) break;
          gD = gD.host
        } return {
        left: KD - wD.left,
        right: Math.max(KD, rD) - wD.left,
        top: LD - (wD.top + zD),
        bottom: Math.max(LD, cD) - (wD.top + zD)
      }
    }

    function ws(DD, zD) {
      let wD = DD.getBoundingClientRect();
      return {
        left: 0,
        right: wD.right - wD.left,
        top: zD,
        bottom: wD.bottom - (wD.top + zD)
      }
    }
    class ps {
      constructor(DD, zD, wD, pD) {
        this.from = DD, this.to = zD, this.size = wD, this.displaySize = pD
      }
      static same(DD, zD) {
        if (DD.length != zD.length) return !1;
        for (let wD = 0; wD < DD.length; wD++) {
          let pD = DD[wD],
            sD = zD[wD];
          if (pD.from != sD.from || pD.to != sD.to || pD.size != sD.size) return !1
        }
        return !0
      }
      draw(DD, zD) {
        return jD.replace({
          widget: new ss(this.displaySize * (zD ? DD.scaleY : DD.scaleX), zD)
        }).range(this.from, this.to)
      }
    }
    class ss extends TD {
      constructor(DD, zD) {
        super(), this.size = DD, this.vertical = zD
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
    class Ks {
      constructor(DD, zD) {
        this.view = DD, this.state = zD, this.pixelViewport = {
          left: 0,
          right: window.innerWidth,
          top: 0,
          bottom: 0
        }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = gs, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = gz.LTR, this.w6 = [], this.mustEnforceCursorAssoc = !1;
        let wD = zD.facet(qz).some((DD => "function" != typeof DD && "cm-lineWrapping" == DD.class));
        this.heightOracle = new Np(wD), this.stateDeco = Rs(zD), this.heightMap = ep.empty().applyChanges(this.stateDeco, pD.K.empty, this.heightOracle.setDoc(zD.doc), [new Rw(0, 0, 0, zD.doc.length)]);
        for (let pD = 0; pD < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); pD++);
        this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = jD.set(this.lineGaps.map((DD => DD.draw(this, !1)))), this.scrollParent = DD.scrollDOM, this.computeVisibleRanges()
      }
      updateForViewport() {
        let DD = [this.viewport],
          {
            main: zD
          } = this.state.selection;
        for (let wD = 0; wD <= 1; wD++) {
          let pD = wD ? zD.head : zD.anchor;
          if (!DD.some((DD => {
              let {
                from: zD,
                to: wD
              } = DD;
              return pD >= zD && pD <= wD
            }))) {
            let {
              from: zD,
              to: wD
            } = this.lineBlockAt(pD);
            DD.push(new rs(zD, wD))
          }
        }
        return this.viewports = DD.sort(((DD, zD) => DD.from - zD.from)), this.updateScaler()
      }
      updateScaler() {
        let DD = this.scaler;
        return this.scaler = this.heightMap.height <= 7e6 ? gs : new As(this.heightOracle, this.heightMap, this.viewports), DD.eq(this.scaler) ? 0 : 2
      }
      updateViewportLines() {
        this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (DD => {
          this.viewportLines.push(Us(DD, this.scaler))
        }))
      }
      update(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.state = DD.state;
        let wD = this.stateDeco;
        this.stateDeco = Rs(this.state);
        let sD = DD.changedRanges,
          KD = Rw.extendWithRanges(sD, function(DD, zD, wD) {
            let sD = new Ds;
            return pD.z.compare(DD, zD, wD, sD, 0), sD.changes
          }(wD, this.stateDeco, DD ? DD.changes : pD.ChangeSet.empty(this.state.doc.length))),
          rD = this.heightMap.height,
          LD = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
        Wp(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, DD.startState.doc, this.heightOracle.setDoc(this.state.doc), KD), (this.heightMap.height != rD || lp) && (DD.flags |= 2), LD ? (this.scrollAnchorPos = DD.changes.mapPos(LD.from, -1), this.scrollAnchorHeight = LD.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = rD);
        let cD = KD.length ? this.mapViewport(this.viewport, DD.changes) : this.viewport;
        (zD && (zD.range.head < cD.from || zD.range.head > cD.to) || !this.viewportIsAppropriate(cD)) && (cD = this.getViewport(0, zD));
        let gD = cD.from != this.viewport.from || cD.to != this.viewport.to;
        this.viewport = cD, DD.flags |= this.updateForViewport(), (gD || !DD.changes.empty || 2 & DD.flags) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, DD.changes))), DD.flags |= this.computeVisibleRanges(DD.changes), zD && (this.scrollTarget = zD), !this.mustEnforceCursorAssoc && (DD.selectionSet || DD.focusChanged) && DD.view.lineWrapping && DD.state.selection.main.empty && DD.state.selection.main.assoc && !DD.state.facet(yz) && (this.mustEnforceCursorAssoc = !0)
      }
      measure() {
        let {
          view: DD
        } = this, zD = DD.contentDOM, wD = window.getComputedStyle(zD), sD = this.heightOracle, KD = wD.whiteSpace;
        this.defaultTextDirection = "rtl" == wD.direction ? gz.RTL : gz.LTR;
        let rD = this.heightOracle.mustRefreshForWrapping(KD) || "refresh" === this.mustMeasureContent,
          LD = zD.getBoundingClientRect(),
          cD = rD || this.mustMeasureContent || this.contentDOMHeight != LD.height;
        this.contentDOMHeight = LD.height, this.mustMeasureContent = !1;
        let gD = 0,
          RD = 0;
        if (LD.width && LD.height) {
          let {
            scaleX: DD,
            scaleY: wD
          } = YD(zD, LD);
          (DD > .005 && Math.abs(this.scaleX - DD) > .005 || wD > .005 && Math.abs(this.scaleY - wD) > .005) && (this.scaleX = DD, this.scaleY = wD, gD |= 16, rD = cD = !0)
        }
        let AD = (parseInt(wD.paddingTop) || 0) * this.scaleY,
          UD = (parseInt(wD.paddingBottom) || 0) * this.scaleY;
        this.paddingTop == AD && this.paddingBottom == UD || (this.paddingTop = AD, this.paddingBottom = UD, gD |= 18), this.editorWidth != DD.scrollDOM.clientWidth && (sD.lineWrapping && (cD = !0), this.editorWidth = DD.scrollDOM.clientWidth, gD |= 16);
        let fD = HD(this.view.contentDOM, !1).y;
        fD != this.scrollParent && (this.scrollParent = fD, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
        let ID = this.getScrollOffset();
        this.scrollOffset != ID && (this.scrollAnchorHeight = -1, this.scrollOffset = ID), this.scrolledToBottom = Kz(this.scrollParent || DD.win);
        let BD = (this.printing ? ws : zs)(zD, this.paddingTop),
          GD = BD.top - this.pixelViewport.top,
          hD = BD.bottom - this.pixelViewport.bottom;
        this.pixelViewport = BD;
        let nD = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
        if (nD != this.inView && (this.inView = nD, nD && (cD = !0)), !this.inView && !this.scrollTarget && ! function(DD) {
            let zD = DD.getBoundingClientRect(),
              wD = DD.ownerDocument.defaultView || window;
            return zD.left < wD.innerWidth && zD.right > 0 && zD.top < wD.innerHeight && zD.bottom > 0
          }(DD.dom)) return 0;
        let MD = LD.width;
        if (this.contentDOMWidth == MD && this.editorHeight == DD.scrollDOM.clientHeight || (this.contentDOMWidth = LD.width, this.editorHeight = DD.scrollDOM.clientHeight, gD |= 16), cD) {
          let zD = DD.docView.measureVisibleLineHeights(this.viewport);
          if (sD.mustRefreshForHeights(zD) && (rD = !0), rD || sD.lineWrapping && Math.abs(MD - this.contentDOMWidth) > sD.charWidth) {
            let {
              lineHeight: wD,
              charWidth: pD,
              textHeight: LD
            } = DD.docView.measureTextSize();
            rD = wD > 0 && sD.refresh(KD, wD, pD, LD, Math.max(5, MD / pD), zD), rD && (DD.docView.minWidth = 0, gD |= 16)
          }
          GD > 0 && hD > 0 ? RD = Math.max(GD, hD) : GD < 0 && hD < 0 && (RD = Math.min(GD, hD)), Wp();
          for (let wD of this.viewports) {
            let KD = wD.from == this.viewport.from ? zD : DD.docView.measureVisibleLineHeights(wD);
            this.heightMap = (rD ? ep.empty().applyChanges(this.stateDeco, pD.K.empty, this.heightOracle, [new Rw(0, 0, 0, DD.state.doc.length)]) : this.heightMap).updateHeight(sD, 0, rD, new Zp(wD.from, KD))
          }
          lp && (gD |= 2)
        }
        let OD = !this.viewportIsAppropriate(this.viewport, RD) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
        return OD && (2 & gD && (gD |= this.updateScaler()), this.viewport = this.getViewport(RD, this.scrollTarget), gD |= this.updateForViewport()), (2 & gD || OD) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(rD ? [] : this.lineGaps, DD)), gD |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, DD.docView.enforceCursorAssoc()), gD
      }
      get visibleTop() {
        return this.scaler.fromDOM(this.pixelViewport.top)
      }
      get visibleBottom() {
        return this.scaler.fromDOM(this.pixelViewport.bottom)
      }
      getViewport(DD, zD) {
        let wD = .5 - Math.max(-.5, Math.min(.5, DD / 1e3 / 2)),
          pD = this.heightMap,
          sD = this.heightOracle,
          {
            visibleTop: KD,
            visibleBottom: rD
          } = this,
          LD = new rs(pD.lineAt(KD - 1e3 * wD, kp.ByHeight, sD, 0, 0).from, pD.lineAt(rD + 1e3 * (1 - wD), kp.ByHeight, sD, 0, 0).to);
        if (zD) {
          let {
            head: DD
          } = zD.range;
          if (DD < LD.from || DD > LD.to) {
            let wD, KD = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
              rD = pD.lineAt(DD, kp.ByPos, sD, 0, 0);
            wD = "center" == zD.y ? (rD.top + rD.bottom) / 2 - KD / 2 : "start" == zD.y || "nearest" == zD.y && DD < LD.from ? rD.top : rD.bottom - KD, LD = new rs(pD.lineAt(wD - 500, kp.ByHeight, sD, 0, 0).from, pD.lineAt(wD + KD + 500, kp.ByHeight, sD, 0, 0).to)
          }
        }
        return LD
      }
      mapViewport(DD, zD) {
        let wD = zD.mapPos(DD.from, -1),
          pD = zD.mapPos(DD.to, 1);
        return new rs(this.heightMap.lineAt(wD, kp.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(pD, kp.ByPos, this.heightOracle, 0, 0).to)
      }
      viewportIsAppropriate(DD) {
        let {
          from: zD,
          to: wD
        } = DD, pD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!this.inView) return !0;
        let {
          top: sD
        } = this.heightMap.lineAt(zD, kp.ByPos, this.heightOracle, 0, 0), {
          bottom: KD
        } = this.heightMap.lineAt(wD, kp.ByPos, this.heightOracle, 0, 0), {
          visibleTop: rD,
          visibleBottom: LD
        } = this;
        return (0 == zD || sD <= rD - Math.max(10, Math.min(-pD, 250))) && (wD == this.state.doc.length || KD >= LD + Math.max(10, Math.min(pD, 250))) && sD > rD - 2e3 && KD < LD + 2e3
      }
      mapLineGaps(DD, zD) {
        if (!DD.length || zD.empty) return DD;
        let wD = [];
        for (let pD of DD) zD.touchesRange(pD.from, pD.to) || wD.push(new ps(zD.mapPos(pD.from), zD.mapPos(pD.to), pD.size, pD.displaySize));
        return wD
      }
      ensureLineGaps(DD, zD) {
        let wD = this.heightOracle.lineWrapping,
          sD = wD ? 1e4 : 2e3,
          KD = sD >> 1,
          rD = sD << 1;
        if (this.defaultTextDirection != gz.LTR && !wD) return [];
        let LD = [],
          cD = (sD, rD, gD, RD) => {
            if (rD - sD < KD) return;
            let AD = this.state.selection.main,
              UD = [AD.from];
            AD.empty || UD.push(AD.to);
            for (let DD of UD)
              if (DD > sD && DD < rD) return cD(sD, DD - 10, gD, RD), void cD(DD + 10, rD, gD, RD);
            let fD = function(DD, zD) {
              for (let wD of DD)
                if (zD(wD)) return wD;
              return
            }(DD, (DD => DD.from >= gD.from && DD.to <= gD.to && Math.abs(DD.from - sD) < KD && Math.abs(DD.to - rD) < KD && !UD.some((zD => DD.from < zD && DD.to > zD))));
            if (!fD) {
              if (rD < gD.to && zD && wD && zD.w6.some((DD => DD.from <= rD && DD.to >= rD))) {
                let DD = zD.moveToLineBoundary(pD.j.cursor(rD), !1, !0).head;
                DD > sD && (rD = DD)
              }
              let DD = this.gapSize(gD, sD, rD, RD);
              fD = new ps(sD, rD, DD, wD || DD < 2e6 ? DD : 2e6)
            }
            LD.push(fD)
          },
          gD = zD => {
            if (zD.length < rD || zD.type != bD.Text) return;
            let KD = function(DD, zD, wD) {
              let sD = [],
                KD = DD,
                rD = 0;
              pD.z.spans(wD, DD, zD, {
                span() {},
                point(DD, zD) {
                  DD > KD && (sD.push({
                    from: KD,
                    to: DD
                  }), rD += DD - KD), KD = zD
                }
              }, 20), KD < zD && (sD.push({
                from: KD,
                to: zD
              }), rD += zD - KD);
              return {
                total: rD,
                rG: sD
              }
            }(zD.from, zD.to, this.stateDeco);
            if (KD.total < rD) return;
            let LD, gD, RD = this.scrollTarget ? this.scrollTarget.range.head : null;
            if (wD) {
              let DD, wD, pD = sD / this.heightOracle.lineLength * this.heightOracle.lineHeight;
              if (null != RD) {
                let sD = cs(KD, RD),
                  rD = ((this.visibleBottom - this.visibleTop) / 2 + pD) / zD.height;
                DD = sD - rD, wD = sD + rD
              } else DD = (this.visibleTop - zD.top - pD) / zD.height, wD = (this.visibleBottom - zD.top + pD) / zD.height;
              LD = Ls(KD, DD), gD = Ls(KD, wD)
            } else {
              let wD = KD.total * this.heightOracle.charWidth,
                pD = sD * this.heightOracle.charWidth,
                rD = 0;
              if (wD > 2e6)
                for (let sD of DD) sD.from >= zD.from && sD.from < zD.to && sD.size != sD.displaySize && sD.from * this.heightOracle.charWidth + rD < this.pixelViewport.left && (rD = sD.size - sD.displaySize);
              let cD, AD, UD = this.pixelViewport.left + rD,
                fD = this.pixelViewport.right + rD;
              if (null != RD) {
                let DD = cs(KD, RD),
                  zD = ((fD - UD) / 2 + pD) / wD;
                cD = DD - zD, AD = DD + zD
              } else cD = (UD - pD) / wD, AD = (fD + pD) / wD;
              LD = Ls(KD, cD), gD = Ls(KD, AD)
            }
            LD > zD.from && cD(zD.from, LD, zD, KD), gD < zD.to && cD(gD, zD.to, zD, KD)
          };
        for (let pD of this.viewportLines) Array.isArray(pD.type) ? pD.type.forEach(gD) : gD(pD);
        return LD
      }
      gapSize(DD, zD, wD, pD) {
        let sD = cs(pD, wD) - cs(pD, zD);
        return this.heightOracle.lineWrapping ? DD.height * sD : pD.total * this.heightOracle.charWidth * sD
      }
      updateLineGaps(DD) {
        ps.same(DD, this.lineGaps) || (this.lineGaps = DD, this.lineGapDeco = jD.set(DD.map((DD => DD.draw(this, this.heightOracle.lineWrapping)))))
      }
      computeVisibleRanges(DD) {
        let zD = this.stateDeco;
        this.lineGaps.length && (zD = zD.concat(this.lineGapDeco));
        let wD = [];
        pD.z.spans(zD, this.viewport.from, this.viewport.to, {
          span(DD, zD) {
            wD.push({
              from: DD,
              to: zD
            })
          },
          point() {}
        }, 20);
        let sD = 0;
        if (wD.length != this.w6.length) sD = 12;
        else
          for (let pD = 0; pD < wD.length && !(8 & sD); pD++) {
            let zD = this.w6[pD],
              KD = wD[pD];
            zD.from == KD.from && zD.to == KD.to || (sD |= 4, DD && DD.mapPos(zD.from, -1) == KD.from && DD.mapPos(zD.to, 1) == KD.to || (sD |= 8))
          }
        return this.w6 = wD, sD
      }
      lineBlockAt(DD) {
        return DD >= this.viewport.from && DD <= this.viewport.to && this.viewportLines.find((zD => zD.from <= DD && zD.to >= DD)) || Us(this.heightMap.lineAt(DD, kp.ByPos, this.heightOracle, 0, 0), this.scaler)
      }
      lineBlockAtHeight(DD) {
        return DD >= this.viewportLines[0].top && DD <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((zD => zD.top <= DD && zD.bottom >= DD)) || Us(this.heightMap.lineAt(this.scaler.fromDOM(DD), kp.ByHeight, this.heightOracle, 0, 0), this.scaler)
      }
      getScrollOffset() {
        return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY
      }
      scrollAnchorAt(DD) {
        let zD = this.lineBlockAtHeight(DD + 8);
        return zD.from >= this.viewport.from || this.viewportLines[0].top - DD > 200 ? zD : this.viewportLines[0]
      }
      elementAtHeight(DD) {
        return Us(this.heightMap.blockAt(this.scaler.fromDOM(DD), this.heightOracle, 0, 0), this.scaler)
      }
      get docHeight() {
        return this.scaler.toDOM(this.heightMap.height)
      }
      get contentHeight() {
        return this.docHeight + this.paddingTop + this.paddingBottom
      }
    }
    class rs {
      constructor(DD, zD) {
        this.from = DD, this.to = zD
      }
    }

    function Ls(DD, zD) {
      let {
        total: wD,
        rG: pD
      } = DD;
      if (zD <= 0) return pD[0].from;
      if (zD >= 1) return pD[pD.length - 1].to;
      let sD = Math.floor(wD * zD);
      for (let KD = 0;; KD++) {
        let {
          from: DD,
          to: zD
        } = pD[KD], wD = zD - DD;
        if (sD <= wD) return DD + sD;
        sD -= wD
      }
    }

    function cs(DD, zD) {
      let wD = 0;
      for (let {
          from: pD,
          to: sD
        }
        of DD.rG) {
        if (zD <= sD) {
          wD += zD - pD;
          break
        }
        wD += sD - pD
      }
      return wD / DD.total
    }
    const gs = {
      toDOM: DD => DD,
      fromDOM: DD => DD,
      scale: 1,
      eq(DD) {
        return DD == this
      }
    };

    function Rs(DD) {
      let zD = DD.facet(Dw).filter((DD => "function" != typeof DD)),
        wD = DD.facet(ww).filter((DD => "function" != typeof DD));
      return wD.length && zD.push(pD.z.join(wD)), zD
    }
    class As {
      constructor(DD, zD, wD) {
        let pD = 0,
          sD = 0,
          KD = 0;
        this.viewports = wD.map((wD => {
          let {
            from: sD,
            to: KD
          } = wD, rD = zD.lineAt(sD, kp.ByPos, DD, 0, 0).top, LD = zD.lineAt(KD, kp.ByPos, DD, 0, 0).bottom;
          return pD += LD - rD, {
            from: sD,
            to: KD,
            top: rD,
            bottom: LD,
            domTop: 0,
            domBottom: 0
          }
        })), this.scale = (7e6 - pD) / (zD.height - pD);
        for (let rD of this.viewports) rD.domTop = KD + (rD.top - sD) * this.scale, KD = rD.domBottom = rD.domTop + (rD.bottom - rD.top), sD = rD.bottom
      }
      toDOM(DD) {
        for (let zD = 0, wD = 0, pD = 0;; zD++) {
          let sD = zD < this.viewports.length ? this.viewports[zD] : null;
          if (!sD || DD < sD.top) return pD + (DD - wD) * this.scale;
          if (DD <= sD.bottom) return sD.domTop + (DD - sD.top);
          wD = sD.bottom, pD = sD.domBottom
        }
      }
      fromDOM(DD) {
        for (let zD = 0, wD = 0, pD = 0;; zD++) {
          let sD = zD < this.viewports.length ? this.viewports[zD] : null;
          if (!sD || DD < sD.domTop) return wD + (DD - pD) / this.scale;
          if (DD <= sD.domBottom) return sD.top + (DD - sD.domTop);
          wD = sD.bottom, pD = sD.domBottom
        }
      }
      eq(DD) {
        return DD instanceof As && (this.scale == DD.scale && this.viewports.length == DD.viewports.length && this.viewports.every(((zD, wD) => zD.from == DD.viewports[wD].from && zD.to == DD.viewports[wD].to)))
      }
    }

    function Us(DD, zD) {
      if (1 == zD.scale) return DD;
      let wD = zD.toDOM(DD.top),
        pD = zD.toDOM(DD.bottom);
      return new yp(DD.from, DD.length, wD, pD - wD, Array.isArray(DD._content) ? DD._content.map((DD => Us(DD, zD))) : DD._content)
    }
    const fs = pD.n.define({
        combine: DD => DD.join(" ")
      }),
      Is = pD.n.define({
        combine: DD => DD.indexOf(!0) > -1
      }),
      Bs = sD.b.newName(),
      Gs = sD.b.newName(),
      hs = sD.b.newName(),
      ns = {
        "&light": "." + Gs,
        "&dark": "." + hs
      };

    function Ms(DD, zD, wD) {
      return new sD.b(zD, {
        finish: zD => /&/.test(zD) ? zD.replace(/&\w*/, (zD => {
          if ("&" == zD) return DD;
          if (!wD || !wD[zD]) throw new RangeError(`Unsupported selector: ${zD}`);
          return wD[zD]
        })) : DD + " " + zD
      })
    }
    const Os = Ms("." + Bs, {
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
      }, ns),
      Es = {
        childList: !0,
        characterData: !0,
        subtree: !0,
        attributes: !0,
        characterDataOldValue: !0
      },
      Qs = QD.ie && QD.ie_version <= 11;
    class Xs {
      constructor(DD) {
        this.view = DD, this.active = !1, this.editContext = null, this.selectionRange = new qD, this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = DD.contentDOM, this.observer = new MutationObserver((zD => {
          for (let DD of zD) this.queue.push(DD);
          (QD.ie && QD.ie_version <= 11 || QD.ios && DD.composing) && zD.some((DD => "childList" == DD.type && DD.removedNodes.length || "characterData" == DD.type && DD.oldValue.length > DD.target.nodeValue.length)) ? this.flushSoon() : this.flush()
        })), !window.EditContext || !QD.android || !1 === DD.constructor.EDIT_CONTEXT || QD.chrome && QD.chrome_version < 126 || (this.editContext = new Cs(DD), DD.state.facet(uz) && (DD.contentDOM.editContext = this.editContext.editContext)), Qs && (this.onCharData = DD => {
          this.queue.push({
            target: DD.target,
            type: "characterData",
            oldValue: DD.prevValue
          }), this.flushSoon()
        }), this.onSelectionChange = this.onSelectionChange.bind(this), this.GJ = this.GJ.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver((() => {
          var DD;
          (null === (DD = this.view.docView) || void 0 === DD ? void 0 : DD.lastUpdate) < Date.now() - 75 && this.GJ()
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
      GJ() {
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
        if (this.gapIntersection && (DD.length != this.gaps.length || this.gaps.some(((zD, wD) => zD != DD[wD])))) {
          this.gapIntersection.disconnect();
          for (let zD of DD) this.gapIntersection.observe(zD);
          this.gaps = DD
        }
      }
      onSelectionChange(DD) {
        let zD = this.selectionChanged;
        if (!this.readSelectionRange() || this.delayedAndroidKey) return;
        let {
          view: wD
        } = this, pD = this.selectionRange;
        if (wD.state.facet(uz) ? wD.root.activeElement != this.dom : !kD(this.dom, pD)) return;
        let sD = pD.anchorNode && wD.docView.tile.nearest(pD.anchorNode);
        sD && sD.isWidget() && sD.widget.ignoreEvent(DD) ? zD || (this.selectionChanged = !1) : (QD.ie && QD.ie_version <= 11 || QD.android && QD.chrome) && !wD.state.selection.main.empty && pD.focusNode && eD(pD.focusNode, pD.focusOffset, pD.anchorNode, pD.anchorOffset) ? this.flushSoon() : this.flush(!1)
      }
      readSelectionRange() {
        let {
          view: DD
        } = this, zD = ZD(DD.root);
        if (!zD) return !1;
        let wD = QD.safari && 11 == DD.root.nodeType && DD.root.activeElement == this.dom && function(DD, zD) {
          if (zD.getComposedRanges) {
            let wD = zD.getComposedRanges(DD.root)[0];
            if (wD) return Ps(DD, wD)
          }
          let wD = null;

          function pD(DD) {
            DD.preventDefault(), DD.stopImmediatePropagation(), wD = DD.getTargetRanges()[0]
          }
          return DD.contentDOM.addEventListener("beforeinput", pD, !0), DD.dom.ownerDocument.execCommand("indent"), DD.contentDOM.removeEventListener("beforeinput", pD, !0), wD ? Ps(DD, wD) : null
        }(this.view, zD) || zD;
        if (!wD || this.selectionRange.eq(wD)) return !1;
        let pD = kD(this.dom, wD);
        return pD && !this.selectionChanged && DD.inputState.lastFocusTime > Date.now() - 200 && DD.inputState.lastTouchTime < Date.now() - 300 && function(DD, zD) {
          let wD = zD.focusNode,
            pD = zD.focusOffset;
          if (!wD || zD.anchorNode != wD || zD.anchorOffset != pD) return !1;
          for (pD = Math.min(pD, vD(wD));;)
            if (pD) {
              if (1 != wD.nodeType) return !1;
              let DD = wD.childNodes[pD - 1];
              "false" == DD.contentEditable ? pD-- : (wD = DD, pD = vD(wD))
            } else {
              if (wD == DD) return !0;
              pD = oD(wD), wD = wD.parentNode
            }
        }(this.dom, wD) ? (this.view.inputState.lastFocusTime = 0, DD.docView.updateSelection(), !1) : (this.selectionRange.setRange(wD), pD && (this.selectionChanged = !0), !0)
      }
      setSelectionRange(DD, zD) {
        this.selectionRange.set(DD.node, DD.offset, zD.node, zD.offset), this.selectionChanged = !1
      }
      clearSelectionRange() {
        this.selectionRange.set(null, 0, null, 0)
      }
      listenForScroll() {
        this.parentCheck = -1;
        let DD = 0,
          zD = null;
        for (let wD = this.dom; wD;)
          if (1 == wD.nodeType) !zD && DD < this.scrollTargets.length && this.scrollTargets[DD] == wD ? DD++ : zD || (zD = this.scrollTargets.slice(0, DD)), zD && zD.push(wD), wD = wD.assignedSlot || wD.parentNode;
          else {
            if (11 != wD.nodeType) break;
            wD = wD.host
          } if (DD < this.scrollTargets.length && !zD && (zD = this.scrollTargets.slice(0, DD)), zD) {
          for (let DD of this.scrollTargets) DD.removeEventListener("scroll", this.onScroll);
          for (let DD of this.scrollTargets = zD) DD.addEventListener("scroll", this.onScroll)
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
        this.active || (this.observer.observe(this.dom, Es), Qs && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0)
      }
      stop() {
        this.active && (this.active = !1, this.observer.disconnect(), Qs && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData))
      }
      clear() {
        this.processRecords(), this.queue.length = 0, this.selectionChanged = !1
      }
      delayAndroidKey(DD, zD) {
        var wD;
        if (!this.delayedAndroidKey) {
          let DD = () => {
            let DD = this.delayedAndroidKey;
            if (DD) {
              this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = DD.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && DD.force && sz(this.dom, DD.key, DD.keyCode)
            }
          };
          this.flushingAndroidKey = this.view.win.requestAnimationFrame(DD)
        }
        this.delayedAndroidKey && "Enter" != DD || (this.delayedAndroidKey = {
          key: DD,
          keyCode: zD,
          force: this.lastChange < Date.now() - 50 || !!(null === (wD = this.delayedAndroidKey) || void 0 === wD ? void 0 : wD.force)
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
        let zD = -1,
          wD = -1,
          pD = !1;
        for (let sD of DD) {
          let DD = this.readMutation(sD);
          DD && (DD.typeOver && (pD = !0), -1 == zD ? ({
            from: zD,
            to: wD
          } = DD) : (zD = Math.min(DD.from, zD), wD = Math.max(DD.to, wD)))
        }
        return {
          from: zD,
          to: wD,
          typeOver: pD
        }
      }
      readChange() {
        let {
          from: DD,
          to: zD,
          typeOver: wD
        } = this.processRecords(), pD = this.selectionChanged && kD(this.dom, this.selectionRange);
        if (DD < 0 && !pD) return null;
        DD > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
        let sD = new pp(this.view, DD, zD, wD);
        return this.view.docView.domChanged = {
          newSel: sD.newSel ? sD.newSel.main : null
        }, sD
      }
      flush() {
        let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
        DD && this.readSelectionRange();
        let zD = this.readChange();
        if (!zD) return this.view.requestMeasure(), !1;
        let wD = this.view.state,
          pD = Kp(this.view, zD);
        return this.view.state == wD && (zD.domChanged || zD.newSel && !cp(this.view.state.selection, zD.newSel.main)) && this.view.update([]), pD
      }
      readMutation(DD) {
        let zD = this.view.docView.tile.nearest(DD.target);
        if (!zD || zD.isWidget()) return null;
        if (zD.markDirty("attributes" == DD.type), "childList" == DD.type) {
          let wD = Vs(zD, DD.previousSibling || DD.target.previousSibling, -1),
            pD = Vs(zD, DD.nextSibling || DD.target.nextSibling, 1);
          return {
            from: wD ? zD.posAfter(wD) : zD.posAtStart,
            to: pD ? zD.posBefore(pD) : zD.posAtEnd,
            typeOver: !1
          }
        }
        return "characterData" == DD.type ? {
          from: zD.posAtStart,
          to: zD.posAtEnd,
          typeOver: DD.target.nodeValue == DD.oldValue
        } : null
      }
      setWindow(DD) {
        DD != this.win && (this.removeWindowListeners(this.win), this.win = DD, this.addWindowListeners(this.win))
      }
      addWindowListeners(DD) {
        DD.addEventListener("resize", this.GJ), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : DD.addEventListener("beforeprint", this.onPrint), DD.addEventListener("scroll", this.onScroll), DD.document.addEventListener("selectionchange", this.onSelectionChange)
      }
      removeWindowListeners(DD) {
        DD.removeEventListener("scroll", this.onScroll), DD.removeEventListener("resize", this.GJ), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : DD.removeEventListener("beforeprint", this.onPrint), DD.document.removeEventListener("selectionchange", this.onSelectionChange)
      }
      update(DD) {
        this.editContext && (this.editContext.update(DD), DD.startState.facet(uz) != DD.state.facet(uz) && (DD.view.contentDOM.editContext = DD.state.facet(uz) ? this.editContext.editContext : null))
      }
      destroy() {
        var DD, zD, wD;
        this.stop(), null === (DD = this.intersection) || void 0 === DD || DD.disconnect(), null === (zD = this.gapIntersection) || void 0 === zD || zD.disconnect(), null === (wD = this.resizeScroll) || void 0 === wD || wD.disconnect();
        for (let pD of this.scrollTargets) pD.removeEventListener("scroll", this.onScroll);
        this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy())
      }
    }

    function Vs(DD, zD, wD) {
      for (; zD;) {
        let pD = fw.get(zD);
        if (pD && pD.parent == DD) return pD;
        let sD = zD.parentNode;
        zD = sD != DD.dom ? sD : wD > 0 ? zD.nextSibling : zD.previousSibling
      }
      return null
    }

    function Ps(DD, zD) {
      let wD = zD.startContainer,
        pD = zD.startOffset,
        sD = zD.endContainer,
        KD = zD.endOffset,
        rD = DD.docView.domAtPos(DD.state.selection.main.anchor, 1);
      return eD(rD.node, rD.offset, sD, KD) && ([wD, pD, sD, KD] = [sD, KD, wD, pD]), {
        anchorNode: wD,
        anchorOffset: pD,
        focusNode: sD,
        focusOffset: KD
      }
    }
    class Cs {
      constructor(DD) {
        this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = Object.create(null), this.composing = null, this.resetRange(DD.state);
        let zD = this.editContext = new window.EditContext({
          text: DD.state.doc.sliceString(this.from, this.to),
          selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, DD.state.selection.main.anchor))),
          selectionEnd: this.toContextPos(DD.state.selection.main.head)
        });
        this.handlers.textupdate = wD => {
          let sD = DD.state.selection.main,
            {
              anchor: KD,
              head: rD
            } = sD,
            LD = this.toEditorPos(wD.updateRangeStart),
            cD = this.toEditorPos(wD.updateRangeEnd);
          DD.inputState.composing >= 0 && !this.composing && (this.composing = {
            contextBase: wD.updateRangeStart,
            editorBase: LD,
            drifted: !1
          });
          let gD = cD - LD > wD.text.length;
          LD == this.from && KD < this.from ? LD = KD : cD == this.to && KD > this.to && (cD = KD);
          let RD = Lp(DD.state.sliceDoc(LD, cD), wD.text, (gD ? sD.from : sD.to) - LD, gD ? "end" : null);
          if (!RD) {
            let zD = pD.j.single(this.toEditorPos(wD.selectionStart), this.toEditorPos(wD.selectionEnd));
            return void(cp(zD, sD) || DD.dispatch({
              selection: zD,
              userEvent: "select"
            }))
          }
          let AD = {
            from: RD.from + LD,
            to: RD.toA + LD,
            insert: pD.K.of(wD.text.slice(RD.from, RD.toB).split("\n"))
          };
          if ((QD.mac || QD.android) && AD.from == rD - 1 && /^\. ?$/.test(wD.text) && "off" == DD.contentDOM.getAttribute("autocorrect") && (AD = {
              from: LD,
              to: cD,
              insert: pD.K.of([wD.text.replace(".", " ")])
            }), this.pendingContextChange = AD, !DD.state.readOnly) {
            let zD = this.to - this.from + (AD.to - AD.from + AD.insert.length);
            rp(DD, AD, pD.j.single(this.toEditorPos(wD.selectionStart, zD), this.toEditorPos(wD.selectionEnd, zD)))
          }
          this.pendingContextChange && (this.revertPending(DD.state), this.setSelection(DD.state)), AD.from < AD.to && !AD.insert.length && DD.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(zD.text.slice(Math.max(0, wD.updateRangeStart - 1), Math.min(zD.text.length, wD.updateRangeStart + 1))) && this.handlers.compositionend(wD)
        }, this.handlers.characterboundsupdate = wD => {
          let pD = [],
            sD = null;
          for (let zD = this.toEditorPos(wD.rangeStart), KD = this.toEditorPos(wD.rangeEnd); zD < KD; zD++) {
            let wD = DD.coordsForChar(zD);
            sD = wD && new DOMRect(wD.left, wD.top, wD.right - wD.left, wD.bottom - wD.top) || sD || new DOMRect, pD.push(sD)
          }
          zD.updateCharacterBounds(wD.rangeStart, pD)
        }, this.handlers.textformatupdate = zD => {
          let wD = [];
          for (let DD of zD.getTextFormats()) {
            let zD = DD.underlineStyle,
              pD = DD.underlineThickness;
            if (!/none/i.test(zD) && !/none/i.test(pD)) {
              let sD = this.toEditorPos(DD.rangeStart),
                KD = this.toEditorPos(DD.rangeEnd);
              if (sD < KD) {
                let DD = `text-decoration: underline ${/^[a-z]/.test(zD)?zD+" ":"Dashed"==zD?"dashed ":"Squiggle"==zD?"wavy ":""}${/thin/i.test(pD)?1:2}px`;
                wD.push(jD.mark({
                  attributes: {
                    style: DD
                  }
                }).range(sD, KD))
              }
            }
          }
          DD.dispatch({
            effects: oz.of(jD.set(wD))
          })
        }, this.handlers.compositionstart = () => {
          DD.inputState.composing < 0 && (DD.inputState.composing = 0, DD.inputState.compositionFirstChange = !0)
        }, this.handlers.compositionend = () => {
          if (DD.inputState.composing = -1, DD.inputState.compositionFirstChange = null, this.composing) {
            let {
              drifted: zD
            } = this.composing;
            this.composing = null, zD && this.reset(DD.state)
          }
        };
        for (let wD in this.handlers) zD.addEventListener(wD, this.handlers[wD]);
        this.measureReq = {
          read: DD => {
            this.editContext.updateControlBounds(DD.contentDOM.getBoundingClientRect());
            let zD = ZD(DD.root);
            zD && zD.rangeCount && this.editContext.updateSelectionBounds(zD.getRangeAt(0).getBoundingClientRect())
          }
        }
      }
      applyEdits(DD) {
        let zD = 0,
          wD = !1,
          pD = this.pendingContextChange;
        return DD.changes.iterChanges(((sD, KD, rD, LD, cD) => {
          if (wD) return;
          let gD = cD.length - (KD - sD);
          if (pD && KD >= pD.to) {
            if (pD.from == sD && pD.to == KD && pD.insert.eq(cD)) return pD = this.pendingContextChange = null, zD += gD, void(this.to += gD);
            pD = null, this.revertPending(DD.state)
          }
          if (sD += zD, (KD += zD) <= this.from) this.from += gD, this.to += gD;
          else if (sD < this.to) {
            if (sD < this.from || KD > this.to || this.to - this.from + cD.length > 3e4) return void(wD = !0);
            this.editContext.updateText(this.toContextPos(sD), this.toContextPos(KD), cD.toString()), this.to += gD
          }
          zD += gD
        })), pD && !wD && this.revertPending(DD.state), !wD
      }
      update(DD) {
        let zD = this.pendingContextChange,
          wD = DD.startState.selection.main;
        this.composing && (this.composing.drifted || !DD.changes.touchesRange(wD.from, wD.to) && DD.transactions.some((DD => !DD.isUserEvent("input.type") && DD.changes.touchesRange(this.from, this.to)))) ? (this.composing.drifted = !0, this.composing.editorBase = DD.changes.mapPos(this.composing.editorBase)) : this.applyEdits(DD) && this.rangeIsValid(DD.state) ? (DD.docChanged || DD.selectionSet || zD) && this.setSelection(DD.state) : (this.pendingContextChange = null, this.reset(DD.state)), (DD.geometryChanged || DD.docChanged || DD.selectionSet) && DD.view.requestMeasure(this.measureReq)
      }
      resetRange(DD) {
        let {
          head: zD
        } = DD.selection.main;
        this.from = Math.max(0, zD - 1e4), this.to = Math.min(DD.doc.length, zD + 1e4)
      }
      reset(DD) {
        this.resetRange(DD), this.editContext.updateText(0, this.editContext.text.length, DD.doc.sliceString(this.from, this.to)), this.setSelection(DD)
      }
      revertPending(DD) {
        let zD = this.pendingContextChange;
        this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(zD.from), this.toContextPos(zD.from + zD.insert.length), DD.doc.sliceString(zD.from, zD.to))
      }
      setSelection(DD) {
        let {
          main: zD
        } = DD.selection, wD = this.toContextPos(Math.max(this.from, Math.min(this.to, zD.anchor))), pD = this.toContextPos(zD.head);
        this.editContext.selectionStart == wD && this.editContext.selectionEnd == pD || this.editContext.updateSelection(wD, pD)
      }
      rangeIsValid(DD) {
        let {
          head: zD
        } = DD.selection.main;
        return !(this.from > 0 && zD - this.from < 500 || this.to < DD.doc.length && this.to - zD < 500 || this.to - this.from > 3e4)
      }
      toEditorPos(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.to - this.from;
        DD = Math.min(DD, zD);
        let wD = this.composing;
        return wD && wD.drifted ? wD.editorBase + (DD - wD.contextBase) : DD + this.from
      }
      toContextPos(DD) {
        let zD = this.composing;
        return zD && zD.drifted ? zD.contextBase + (DD - zD.editorBase) : DD - this.from
      }
      destroy() {
        for (let DD in this.handlers) this.editContext.removeEventListener(DD, this.handlers[DD])
      }
    }
    class xs {
      get state() {
        return this.viewState.state
      }
      get viewport() {
        return this.viewState.viewport
      }
      get w6() {
        return this.viewState.w6
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
        var zD;
        this.plugins = [], this.pluginMap = new Map, this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), DD.parent && DD.parent.appendChild(this.dom);
        let {
          dispatch: wD
        } = DD;
        this.dispatchTransactions = DD.dispatchTransactions || wD && (DD => DD.forEach((DD => wD(DD, this)))) || (DD => this.update(DD)), this.dispatch = this.dispatch.bind(this), this._root = DD.root || function(DD) {
          for (; DD;) {
            if (DD && (9 == DD.nodeType || 11 == DD.nodeType && DD.host)) return DD;
            DD = DD.assignedSlot || DD.parentNode
          }
          return null
        }(DD.parent) || document, this.viewState = new Ks(this, DD.state || pD.k.create(DD)), DD.scrollTo && DD.scrollTo.is(ez) && (this.viewState.scrollTarget = DD.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(tz).map((DD => new Yz(DD)));
        for (let pD of this.plugins) pD.update(this);
        this.observer = new Xs(this), this.inputState = new gp(this), this.inputState.ensureHandlers(this.plugins), this.docView = new Ww(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), (null === (zD = document.fonts) || void 0 === zD ? void 0 : zD.ready) && document.fonts.ready.then((() => {
          this.viewState.mustMeasureContent = "refresh", this.requestMeasure()
        }))
      }
      dispatch() {
        for (var DD = arguments.length, zD = new Array(DD), wD = 0; wD < DD; wD++) zD[wD] = arguments[wD];
        let sD = 1 == zD.length && zD[0] instanceof pD.M ? zD : 1 == zD.length && Array.isArray(zD[0]) ? zD[0] : [this.state.update(...zD)];
        this.dispatchTransactions(sD, this)
      }
      update(DD) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        let zD, wD = !1,
          sD = !1,
          KD = this.state;
        for (let pD of DD) {
          if (pD.startState != KD) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
          KD = pD.state
        }
        if (this.destroyed) return void(this.viewState.state = KD);
        let rD = this.hasFocus,
          LD = 0,
          cD = null;
        DD.some((DD => DD.annotation(bp))) ? (this.inputState.notifiedFocused = rD, LD = 1) : rD != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = rD, cD = jp(KD, rD), cD || (LD = 1));
        let gD = this.observer.delayedAndroidKey,
          RD = null;
        if (gD ? (this.observer.clearDelayedAndroidKey(), RD = this.observer.readChange(), (RD && !this.state.doc.eq(KD.doc) || !this.state.selection.eq(KD.selection)) && (RD = null)) : this.observer.clear(), KD.facet(pD.k.phrases) != this.state.facet(pD.k.phrases)) return this.setState(KD);
        zD = Aw.create(this, KD, DD), zD.flags |= LD;
        let AD = this.viewState.scrollTarget;
        try {
          this.updateState = 2;
          for (let zD of DD) {
            if (AD && (AD = AD.map(zD.changes)), zD.scrollIntoView) {
              let {
                main: DD
              } = zD.state.selection, {
                x: wD,
                y: sD
              } = this.state.facet(xs.cursorScrollMargin);
              AD = new mz(DD.empty ? DD : pD.j.cursor(DD.head, DD.head > DD.anchor ? -1 : 1), "nearest", "nearest", sD, wD)
            }
            for (let DD of zD.effects) DD.is(ez) && (AD = DD.value.clip(this.state))
          }
          this.viewState.update(zD, AD), this.bidiCache = ds.update(this.bidiCache, zD.changes), zD.empty || (this.updatePlugins(zD), this.inputState.update(zD)), wD = this.docView.update(zD), this.state.facet(gw) != this.styleModules && this.mountStyles(), sD = this.updateAttrs(), this.showAnnouncements(DD), this.docView.updateSelection(wD, DD.some((DD => DD.isUserEvent("select.pointer"))))
        } finally {
          this.updateState = 0
        }
        if (zD.startState.facet(fs) != zD.state.facet(fs) && (this.viewState.mustMeasureContent = !0), (wD || sD || AD || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), wD && this.docViewUpdate(), !zD.empty)
          for (let pD of this.state.facet(Sz)) try {
            pD(zD)
          } catch (UD) {
            az(this.state, UD, "update listener")
          }(cD || RD) && Promise.resolve().then((() => {
            cD && this.state == cD.startState && this.dispatch(cD), RD && !Kp(this, RD) && gD.force && sz(this.contentDOM, gD.key, gD.keyCode)
          }))
      }
      setState(DD) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
        if (this.destroyed) return void(this.viewState.state = DD);
        this.updateState = 2;
        let zD = this.hasFocus;
        try {
          for (let DD of this.plugins) DD.destroy(this);
          this.viewState = new Ks(this, DD), this.plugins = DD.facet(tz).map((DD => new Yz(DD))), this.pluginMap.clear();
          for (let DD of this.plugins) DD.update(this);
          this.docView.destroy(), this.docView = new Ww(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = []
        } finally {
          this.updateState = 0
        }
        zD && this.focus(), this.requestMeasure()
      }
      updatePlugins(DD) {
        let zD = DD.startState.facet(tz),
          wD = DD.state.facet(tz);
        if (zD != wD) {
          let pD = [];
          for (let sD of wD) {
            let wD = zD.indexOf(sD);
            if (wD < 0) pD.push(new Yz(sD));
            else {
              let zD = this.plugins[wD];
              zD.mustUpdate = DD, pD.push(zD)
            }
          }
          for (let zD of this.plugins) zD.mustUpdate != DD && zD.destroy(this);
          this.plugins = pD, this.pluginMap.clear()
        } else
          for (let pD of this.plugins) pD.mustUpdate = DD;
        for (let pD = 0; pD < this.plugins.length; pD++) this.plugins[pD].update(this);
        zD != wD && this.inputState.ensureHandlers(this.plugins)
      }
      docViewUpdate() {
        for (let zD of this.plugins) {
          let wD = zD.value;
          if (wD && wD.docViewUpdate) try {
            wD.docViewUpdate(this)
          } catch (DD) {
            az(this.state, DD, "doc view update listener")
          }
        }
      }
      measure() {
        let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.destroyed) return;
        if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) return this.measureScheduled = -1, void this.requestMeasure();
        this.measureScheduled = 0, DD && this.observer.forceFlush();
        let zD = null,
          wD = this.viewState.scrollParent,
          pD = this.viewState.getScrollOffset(),
          {
            scrollAnchorPos: sD,
            scrollAnchorHeight: KD
          } = this.viewState;
        Math.abs(pD - this.viewState.scrollOffset) > 1 && (KD = -1), this.viewState.scrollAnchorHeight = -1;
        try {
          for (let DD = 0;; DD++) {
            if (KD < 0)
              if (Kz(wD || this.win)) sD = -1, KD = this.viewState.heightMap.height;
              else {
                let DD = this.viewState.scrollAnchorAt(pD);
                sD = DD.from, KD = DD.top
              } this.updateState = 1;
            let LD = this.viewState.measure();
            if (!LD && !this.measureRequests.length && null == this.viewState.scrollTarget) break;
            if (DD > 5) {
              console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
              break
            }
            let cD = [];
            4 & LD || ([this.measureRequests, cD] = [cD, this.measureRequests]);
            let gD = cD.map((DD => {
                try {
                  return DD.read(this)
                } catch (zD) {
                  return az(this.state, zD), bs
                }
              })),
              RD = Aw.create(this, this.state, []),
              AD = !1;
            RD.flags |= LD, zD ? zD.flags |= LD : zD = RD, this.updateState = 2, RD.empty || (this.updatePlugins(RD), this.inputState.update(RD), this.updateAttrs(), AD = this.docView.update(RD), AD && this.docViewUpdate());
            for (let DD = 0; DD < cD.length; DD++)
              if (gD[DD] != bs) try {
                let zD = cD[DD];
                zD.write && zD.write(gD[DD], this)
              } catch (rD) {
                az(this.state, rD)
              }
            if (AD && this.docView.updateSelection(!0), !RD.viewportChanged && 0 == this.measureRequests.length) {
              if (this.viewState.editorHeight) {
                if (this.viewState.scrollTarget) {
                  this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, KD = -1;
                  continue
                } {
                  let DD = ((sD < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(sD).top) - KD) / this.scaleY;
                  if ((DD > 1 || DD < -1) && (wD == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                    pD += DD, wD ? wD.scrollTop += DD : this.win.scrollBy(0, DD), KD = -1;
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
        if (zD && !zD.empty)
          for (let LD of this.state.facet(Sz)) LD(zD)
      }
      get themeClasses() {
        return Bs + " " + (this.state.facet(Is) ? hs : Gs) + " " + this.state.facet(fs)
      }
      updateAttrs() {
        let DD = Ss(this, Hz, {
            class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
          }),
          zD = {
            spellcheck: "false",
            autocorrect: "off",
            autocapitalize: "off",
            writingsuggestions: "false",
            translate: "no",
            contenteditable: this.state.facet(uz) ? "true" : "false",
            class: "cm-content",
            style: `${QD.tabSize}: ${this.state.tabSize}`,
            role: "textbox",
            "aria-multiline": "true"
          };
        this.state.readOnly && (zD["aria-readonly"] = "true"), Ss(this, qz, zD);
        let wD = this.observer.ignore((() => {
          let wD = CD(this.contentDOM, this.contentAttrs, zD),
            pD = CD(this.dom, this.editorAttrs, DD);
          return wD || pD
        }));
        return this.editorAttrs = DD, this.contentAttrs = zD, wD
      }
      showAnnouncements(DD) {
        let zD = !0;
        for (let wD of DD)
          for (let DD of wD.effects)
            if (DD.is(xs.announce)) {
              zD && (this.announceDOM.textContent = ""), zD = !1, this.announceDOM.appendChild(document.createElement("div")).textContent = DD.value
            }
      }
      mountStyles() {
        this.styleModules = this.state.facet(gw);
        let DD = this.state.facet(xs.cspNonce);
        sD.b.mount(this.root, this.styleModules.concat(Os).reverse(), DD ? {
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
            for (let zD = 0; zD < this.measureRequests.length; zD++)
              if (this.measureRequests[zD].key === DD.key) return void(this.measureRequests[zD] = DD);
          this.measureRequests.push(DD)
        }
      }
      plugin(DD) {
        let zD = this.pluginMap.get(DD);
        return (void 0 === zD || zD && zD.plugin != DD) && this.pluginMap.set(DD, zD = this.plugins.find((zD => zD.plugin == DD)) || null), zD && zD.update(this).value
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
      moveByChar(DD, zD, wD) {
        return vw(this, DD, ow(this, DD, zD, wD))
      }
      moveByGroup(DD, zD) {
        return vw(this, DD, ow(this, DD, zD, (zD => function(DD, zD, wD) {
          let sD = DD.state.charCategorizer(zD),
            KD = sD(wD);
          return DD => {
            let zD = sD(DD);
            return KD == pD.h.Space && (KD = zD), KD == zD
          }
        }(this, DD.head, zD))))
      }
      visualLineSide(DD, zD) {
        let wD = this.bidiSpans(DD),
          sD = this.textDirectionAt(DD.from),
          KD = wD[zD ? wD.length - 1 : 0];
        return pD.j.cursor(KD.side(zD, sD) + DD.from, KD.forward(!zD, sD) ? 1 : -1)
      }
      moveToLineBoundary(DD, zD) {
        return function(DD, zD, wD, sD) {
          let KD = ew(DD, zD.head, zD.assoc || -1),
            rD = sD && KD.type == bD.Text && (DD.lineWrapping || KD.widgetLineBreaks) ? DD.coordsAtPos(zD.assoc < 0 && zD.head > KD.from ? zD.head - 1 : zD.head) : null;
          if (rD) {
            let zD = DD.dom.getBoundingClientRect(),
              sD = DD.textDirectionAt(KD.from),
              LD = DD.posAtCoords({
                x: wD == (sD == gz.LTR) ? zD.right - 1 : zD.left + 1,
                y: (rD.top + rD.bottom) / 2
              });
            if (null != LD) return pD.j.cursor(LD, wD ? -1 : 1)
          }
          return pD.j.cursor(wD ? KD.to : KD.from, wD ? -1 : 1)
        }(this, DD, zD, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2])
      }
      moveVertically(DD, zD, wD) {
        return vw(this, DD, function(DD, zD, wD, sD) {
          let KD = zD.head,
            rD = wD ? 1 : -1;
          if (KD == (wD ? DD.state.doc.length : 0)) return pD.j.cursor(KD, zD.assoc);
          let LD, cD = zD.goalColumn,
            gD = DD.contentDOM.getBoundingClientRect(),
            RD = DD.coordsAtPos(KD, zD.assoc || ((zD.empty ? wD : zD.head == zD.from) ? 1 : -1)),
            AD = DD.documentTop;
          if (RD) null == cD && (cD = RD.left - gD.left), LD = rD < 0 ? RD.top : RD.bottom;
          else {
            let zD = DD.viewState.lineBlockAt(KD);
            null == cD && (cD = Math.min(gD.right - gD.left, DD.defaultCharacterWidth * (KD - zD.from))), LD = (rD < 0 ? zD.top : zD.bottom) + AD
          }
          let UD = gD.left + cD,
            fD = DD.viewState.heightOracle.textHeight >> 1,
            ID = null !== sD && void 0 !== sD ? sD : fD;
          for (let BD = 0;; BD += fD) {
            let zD = LD + (ID + BD) * rD,
              sD = Fw(DD, {
                x: UD,
                y: zD
              }, !1, rD);
            if (wD ? zD > gD.bottom : zD < gD.top) return pD.j.cursor(sD.pos, sD.assoc);
            let KD = DD.coordsAtPos(sD.pos, sD.assoc),
              RD = KD ? (KD.top + KD.bottom) / 2 : 0;
            if (!KD || (wD ? RD > LD : RD < LD)) return pD.j.cursor(sD.pos, sD.assoc, void 0, cD)
          }
        }(this, DD, zD, wD))
      }
      domAtPos(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return this.docView.domAtPos(DD, zD)
      }
      posAtDOM(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.docView.posFromDOM(DD, zD)
      }
      posAtCoords(DD) {
        let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this.readMeasured();
        let wD = Fw(this, DD, zD);
        return wD && wD.pos
      }
      posAndSideAtCoords(DD) {
        let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return this.readMeasured(), Fw(this, DD, zD)
      }
      coordsAtPos(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.readMeasured();
        let wD = this.docView.coordsAt(DD, zD);
        if (!wD || wD.left == wD.right) return wD;
        let pD = this.state.doc.lineAt(DD),
          sD = this.bidiSpans(pD);
        return tD(wD, sD[Mz.find(sD, DD - pD.from, -1, zD)].dir == gz.LTR == zD > 0)
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
        return !this.state.facet(Zz) || DD < this.viewport.from || DD > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(DD))
      }
      get lineWrapping() {
        return this.viewState.heightOracle.lineWrapping
      }
      bidiSpans(DD) {
        if (DD.length > Ts) return Vz(DD.length);
        let zD, wD = this.textDirectionAt(DD.from);
        for (let sD of this.bidiCache)
          if (sD.from == DD.from && sD.dir == wD && (sD.fresh || Oz(sD.isolates, zD = Kw(this, DD)))) return sD.order;
        zD || (zD = Kw(this, DD));
        let pD = Xz(DD.text, wD, zD);
        return this.bidiCache.push(new ds(DD.from, DD.to, wD, zD, !0, pD)), pD
      }
      get hasFocus() {
        var DD;
        return (this.dom.ownerDocument.hasFocus() || QD.safari && (null === (DD = this.inputState) || void 0 === DD ? void 0 : DD.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM
      }
      focus() {
        this.observer.ignore((() => {
          wz(this.contentDOM), this.docView.updateSelection()
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
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var wD, sD, KD, rD;
        return ez.of(new mz("number" == typeof DD ? pD.j.cursor(DD) : DD, null !== (wD = zD.y) && void 0 !== wD ? wD : "nearest", null !== (sD = zD.x) && void 0 !== sD ? sD : "nearest", null !== (KD = zD.yMargin) && void 0 !== KD ? KD : 5, null !== (rD = zD.xMargin) && void 0 !== rD ? rD : 5))
      }
      scrollSnapshot() {
        let {
          scrollTop: DD,
          scrollLeft: zD
        } = this.scrollDOM, wD = this.viewState.scrollAnchorAt(DD);
        return ez.of(new mz(pD.j.cursor(wD.from), "start", "start", wD.top - DD, zD, !0))
      }
      setTabFocusMode(DD) {
        null == DD ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof DD ? this.inputState.tabFocusMode = DD ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + DD)
      }
      static domEventHandlers(DD) {
        return Fz.define((() => ({})), {
          eventHandlers: DD
        })
      }
      static domEventObservers(DD) {
        return Fz.define((() => ({})), {
          eventObservers: DD
        })
      }
      static theme(DD, zD) {
        let wD = sD.b.newName(),
          pD = [fs.of(wD), gw.of(Ms(`.${wD}`, DD))];
        return zD && zD.dark && pD.push(Is.of(!0)), pD
      }
      static baseTheme(DD) {
        return pD.u.lowest(gw.of(Ms("." + Bs, DD, ns)))
      }
      static findFromDOM(DD) {
        var zD;
        let wD = DD.querySelector(".cm-content"),
          pD = wD && fw.get(wD) || fw.get(DD);
        return (null === (zD = null === pD || void 0 === pD ? void 0 : pD.root) || void 0 === zD ? void 0 : zD.view) || null
      }
    }
    xs.styleModule = gw, xs.inputHandler = iz, xs.clipboardInputFilter = Wz, xs.clipboardOutputFilter = Nz, xs.scrollHandler = kz, xs.focusChangeEffect = lz, xs.perLineTextDirection = Zz, xs.exceptionSink = dz, xs.updateListener = Sz, xs.editable = uz, xs.mouseSelectionStyle = jz, xs.dragMovesSelection = bz, xs.clickAddsSelectionRange = Tz, xs.BD = Dw, xs.blockWrappers = zw, xs.outerDecorations = ww, xs.atomicRanges = pw, xs.bidiIsolatedRanges = sw, xs.cursorScrollMargin = pD.n.define({
      combine: DD => {
        let zD = 5,
          wD = 5;
        for (let pD of DD) "number" == typeof pD ? zD = wD = pD : ({
          x: zD,
          y: wD
        } = pD);
        return {
          x: zD,
          y: wD
        }
      }
    }), xs.scrollMargins = rw, xs.darkTheme = Is, xs.cspNonce = pD.n.define({
      combine: DD => DD.length ? DD[0] : ""
    }), xs.contentAttributes = qz, xs.editorAttributes = Hz, xs.lineWrapping = xs.contentAttributes.of({
      class: "cm-lineWrapping"
    }), xs.announce = pD.E.define();
    const Ts = 4096,
      bs = {};
    class ds {
      constructor(DD, zD, wD, pD, sD, KD) {
        this.from = DD, this.to = zD, this.dir = wD, this.isolates = pD, this.fresh = sD, this.order = KD
      }
      static update(DD, zD) {
        if (zD.empty && !DD.some((DD => DD.fresh))) return DD;
        let wD = [],
          pD = DD.length ? DD[DD.length - 1].dir : gz.LTR;
        for (let sD = Math.max(0, DD.length - 10); sD < DD.length; sD++) {
          let KD = DD[sD];
          KD.dir != pD || zD.touchesRange(KD.from, KD.to) || wD.push(new ds(zD.mapPos(KD.from, 1), zD.mapPos(KD.to, -1), KD.dir, KD.isolates, !1, KD.order))
        }
        return wD
      }
    }

    function Ss(DD, zD, wD) {
      for (let pD = DD.state.facet(zD), sD = pD.length - 1; sD >= 0; sD--) {
        let zD = pD[sD],
          KD = "function" == typeof zD ? zD(DD) : zD;
        KD && XD(KD, wD)
      }
      return wD
    }
    const is = QD.mac ? "mac" : QD.windows ? "win" : QD.linux ? "linux" : "key";

    function ls(DD, zD, wD) {
      return zD.altKey && (DD = "Alt-" + DD), zD.ctrlKey && (DD = "Ctrl-" + DD), zD.metaKey && (DD = "Meta-" + DD), !1 !== wD && zD.shiftKey && (DD = "Shift-" + DD), DD
    }
    const Ws = pD.u.default(xs.domEventHandlers({
        keydown: (DD, zD) => as(ys(zD.state), DD, zD, "editor")
      })),
      Ns = pD.n.define({
        enables: Ws
      }),
      Zs = new WeakMap;

    function ys(DD) {
      let zD = DD.facet(Ns),
        wD = Zs.get(zD);
      return wD || Zs.set(zD, wD = function(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : is,
          wD = Object.create(null),
          pD = Object.create(null),
          sD = (DD, zD) => {
            let wD = pD[DD];
            if (null == wD) pD[DD] = zD;
            else if (wD != zD) throw new Error("Key binding " + DD + " is used both as a regular binding and as a multi-stroke prefix")
          },
          KD = (DD, pD, KD, rD, LD) => {
            var cD, gD;
            let RD = wD[DD] || (wD[DD] = Object.create(null)),
              AD = pD.split(/ (?!$)/).map((DD => function(DD, zD) {
                const wD = DD.split(/-(?!$)/);
                let pD, sD, KD, rD, LD = wD[wD.length - 1];
                "Space" == LD && (LD = " ");
                for (let cD = 0; cD < wD.length - 1; ++cD) {
                  const DD = wD[cD];
                  if (/^(cmd|meta|m)$/i.test(DD)) rD = !0;
                  else if (/^a(lt)?$/i.test(DD)) pD = !0;
                  else if (/^(c|ctrl|control)$/i.test(DD)) sD = !0;
                  else if (/^s(hift)?$/i.test(DD)) KD = !0;
                  else {
                    if (!/^mod$/i.test(DD)) throw new Error("Unrecognized modifier name: " + DD);
                    "mac" == zD ? rD = !0 : sD = !0
                  }
                }
                return pD && (LD = "Alt-" + LD), sD && (LD = "Ctrl-" + LD), rD && (LD = "Meta-" + LD), KD && (LD = "Shift-" + LD), LD
              }(DD, zD)));
            for (let zD = 1; zD < AD.length; zD++) {
              let wD = AD.slice(0, zD).join(" ");
              sD(wD, !0), RD[wD] || (RD[wD] = {
                preventDefault: !0,
                stopPropagation: !1,
                run: [zD => {
                  let pD = ms = {
                    view: zD,
                    prefix: wD,
                    scope: DD
                  };
                  return setTimeout((() => {
                    ms == pD && (ms = null)
                  }), es), !0
                }]
              })
            }
            let UD = AD.join(" ");
            sD(UD, !1);
            let fD = RD[UD] || (RD[UD] = {
              preventDefault: !1,
              stopPropagation: !1,
              run: (null === (gD = null === (cD = RD._any) || void 0 === cD ? void 0 : cD.run) || void 0 === gD ? void 0 : gD.slice()) || []
            });
            KD && fD.run.push(KD), rD && (fD.preventDefault = !0), LD && (fD.stopPropagation = !0)
          };
        for (let rD of DD) {
          let DD = rD.scope ? rD.scope.split(" ") : ["editor"];
          if (rD.any)
            for (let zD of DD) {
              let DD = wD[zD] || (wD[zD] = Object.create(null));
              DD._any || (DD._any = {
                preventDefault: !1,
                stopPropagation: !1,
                run: []
              });
              let {
                any: pD
              } = rD;
              for (let zD in DD) DD[zD].run.push((DD => pD(DD, os)))
            }
          let pD = rD[zD] || rD.key;
          if (pD)
            for (let zD of DD) KD(zD, pD, rD.run, rD.preventDefault, rD.stopPropagation), rD.shift && KD(zD, "Shift-" + pD, rD.shift, rD.preventDefault, rD.stopPropagation)
        }
        return wD
      }(zD.reduce(((DD, zD) => DD.concat(zD)), []))), wD
    }

    function ks(DD, zD, wD) {
      return as(ys(DD.state), zD, DD, wD)
    }
    let ms = null;
    const es = 4e3;
    let os = null;

    function as(DD, zD, wD, sD) {
      os = zD;
      let gD = function(DD) {
          var zD = !(LD && DD.metaKey && DD.shiftKey && !DD.ctrlKey && !DD.altKey || cD && DD.shiftKey && DD.key && 1 == DD.key.length || "Unidentified" == DD.key) && DD.key || (DD.shiftKey ? rD : KD)[DD.keyCode] || DD.key || "Unidentified";
          return "Esc" == zD && (zD = "Escape"), "Del" == zD && (zD = "Delete"), "Left" == zD && (zD = "ArrowLeft"), "Up" == zD && (zD = "ArrowUp"), "Right" == zD && (zD = "ArrowRight"), "Down" == zD && (zD = "ArrowDown"), zD
        }(zD),
        RD = (0, pD.P)(gD, 0),
        AD = (0, pD.T)(RD) == gD.length && " " != gD,
        UD = "",
        fD = !1,
        ID = !1,
        BD = !1;
      ms && ms.view == wD && ms.scope == sD && (UD = ms.prefix + " ", Ip.indexOf(zD.keyCode) < 0 && (ID = !0, ms = null));
      let GD, hD, nD = new Set,
        MD = DD => {
          if (DD) {
            for (let zD of DD.run)
              if (!nD.has(zD) && (nD.add(zD), zD(wD))) return DD.stopPropagation && (BD = !0), !0;
            DD.preventDefault && (DD.stopPropagation && (BD = !0), ID = !0)
          }
          return !1
        },
        OD = DD[sD];
      return OD && (MD(OD[UD + ls(gD, zD, !AD)]) ? fD = !0 : !AD || !(zD.altKey || zD.metaKey || zD.ctrlKey) || QD.windows && zD.ctrlKey && zD.altKey || QD.mac && zD.altKey && !zD.ctrlKey && !zD.metaKey || !(GD = KD[zD.keyCode]) || GD == gD ? AD && zD.shiftKey && MD(OD[UD + ls(gD, zD, !0)]) && (fD = !0) : (MD(OD[UD + ls(GD, zD, !0)]) || zD.shiftKey && (hD = rD[zD.keyCode]) != gD && hD != GD && MD(OD[UD + ls(hD, zD, !1)])) && (fD = !0), !fD && MD(OD._any) && (fD = !0)), ID && (fD = !0), fD && BD && zD.stopPropagation(), os = null, fD
    }
    class us {
      constructor(DD, zD, wD, pD, sD) {
        this.className = DD, this.left = zD, this.top = wD, this.width = pD, this.height = sD
      }
      draw() {
        let DD = document.createElement("div");
        return DD.className = this.className, this.adjust(DD), DD
      }
      update(DD, zD) {
        return zD.className == this.className && (this.adjust(DD), !0)
      }
      adjust(DD) {
        DD.style.left = this.left + "px", DD.style.top = this.top + "px", null != this.width && (DD.style.width = this.width + "px"), DD.style.height = this.height + "px"
      }
      eq(DD) {
        return this.left == DD.left && this.top == DD.top && this.width == DD.width && this.height == DD.height && this.className == DD.className
      }
      static forRange(DD, zD, wD) {
        if (wD.empty) {
          let pD = DD.coordsAtPos(wD.head, wD.assoc || 1);
          if (!pD) return [];
          let sD = vs(DD);
          return [new us(zD, pD.left - sD.left, pD.top - sD.top, null, pD.bottom - pD.top)]
        }
        return function(DD, zD, wD) {
          if (wD.to <= DD.viewport.from || wD.from >= DD.viewport.to) return [];
          let pD = Math.max(wD.from, DD.viewport.from),
            sD = Math.min(wD.to, DD.viewport.to),
            KD = DD.textDirection == gz.LTR,
            rD = DD.contentDOM,
            LD = rD.getBoundingClientRect(),
            cD = vs(DD),
            gD = rD.querySelector(".cm-line"),
            RD = gD && window.getComputedStyle(gD),
            AD = LD.left + (RD ? parseInt(RD.paddingLeft) + Math.min(0, parseInt(RD.textIndent)) : 0),
            UD = LD.right - (RD ? parseInt(RD.paddingRight) : 0),
            fD = ew(DD, pD, 1),
            ID = ew(DD, sD, -1),
            BD = fD.type == bD.Text ? fD : null,
            GD = ID.type == bD.Text ? ID : null;
          BD && (DD.lineWrapping || fD.widgetLineBreaks) && (BD = ts(DD, pD, 1, BD));
          GD && (DD.lineWrapping || ID.widgetLineBreaks) && (GD = ts(DD, sD, -1, GD));
          if (BD && GD && BD.from == GD.from && BD.to == GD.to) return nD(MD(wD.from, wD.to, BD));
          {
            let zD = BD ? MD(wD.from, null, BD) : OD(fD, !1),
              pD = GD ? MD(null, wD.to, GD) : OD(ID, !0),
              sD = [];
            return (BD || fD).to < (GD || ID).from - (BD && GD ? 1 : 0) || fD.widgetLineBreaks > 1 && zD.bottom + DD.defaultLineHeight / 2 < pD.top ? sD.push(hD(AD, zD.bottom, UD, pD.top)) : zD.bottom < pD.top && DD.elementAtHeight((zD.bottom + pD.top) / 2).type == bD.Text && (zD.bottom = pD.top = (zD.bottom + pD.top) / 2), nD(zD).concat(sD).concat(nD(pD))
          }

          function hD(DD, wD, pD, sD) {
            return new us(zD, DD - cD.left, wD - cD.top, Math.max(0, pD - DD), sD - wD)
          }

          function nD(DD) {
            let {
              top: zD,
              bottom: wD,
              horizontal: pD
            } = DD, sD = [];
            for (let KD = 0; KD < pD.length; KD += 2) sD.push(hD(pD[KD], zD, pD[KD + 1], wD));
            return sD
          }

          function MD(zD, wD, pD) {
            let sD = 1e9,
              rD = -1e9,
              LD = [];

            function cD(zD, wD, cD, gD, RD) {
              let fD = DD.coordsAtPos(zD, zD == pD.to ? -2 : 2),
                ID = DD.coordsAtPos(cD, cD == pD.from ? 2 : -2);
              fD && ID && (sD = Math.min(fD.top, ID.top, sD), rD = Math.max(fD.bottom, ID.bottom, rD), RD == gz.LTR ? LD.push(KD && wD ? AD : fD.left, KD && gD ? UD : ID.right) : LD.push(!KD && gD ? AD : ID.left, !KD && wD ? UD : fD.right))
            }
            let gD = null !== zD && void 0 !== zD ? zD : pD.from,
              RD = null !== wD && void 0 !== wD ? wD : pD.to;
            for (let KD of DD.w6)
              if (KD.to > gD && KD.from < RD)
                for (let pD = Math.max(KD.from, gD), sD = Math.min(KD.to, RD);;) {
                  let KD = DD.state.doc.lineAt(pD);
                  for (let rD of DD.bidiSpans(KD)) {
                    let DD = rD.from + KD.from,
                      LD = rD.to + KD.from;
                    if (DD >= sD) break;
                    LD > pD && cD(Math.max(DD, pD), null == zD && DD <= gD, Math.min(LD, sD), null == wD && LD >= RD, rD.dir)
                  }
                  if (pD = KD.to + 1, pD >= sD) break
                }
            return 0 == LD.length && cD(gD, null == zD, RD, null == wD, DD.textDirection), {
              top: sD,
              bottom: rD,
              horizontal: LD
            }
          }

          function OD(DD, zD) {
            let wD = LD.top + (zD ? DD.top : DD.bottom);
            return {
              top: wD,
              bottom: wD,
              horizontal: []
            }
          }
        }(DD, zD, wD)
      }
    }

    function vs(DD) {
      let zD = DD.scrollDOM.getBoundingClientRect();
      return {
        left: (DD.textDirection == gz.LTR ? zD.left : zD.right - DD.scrollDOM.clientWidth * DD.scaleX) - DD.scrollDOM.scrollLeft * DD.scaleX,
        top: zD.top - DD.scrollDOM.scrollTop * DD.scaleY
      }
    }

    function ts(DD, zD, wD, pD) {
      let sD = DD.coordsAtPos(zD, 2 * wD);
      if (!sD) return pD;
      let KD = DD.dom.getBoundingClientRect(),
        rD = (sD.top + sD.bottom) / 2,
        LD = DD.posAtCoords({
          x: KD.left + 1,
          y: rD
        }),
        cD = DD.posAtCoords({
          x: KD.right - 1,
          y: rD
        });
      return null == LD || null == cD ? pD : {
        from: Math.max(pD.from, Math.min(LD, cD)),
        to: Math.min(pD.to, Math.max(LD, cD))
      }
    }
    class Fs {
      constructor(DD, zD) {
        this.view = DD, this.layer = zD, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
          read: this.measure.bind(this),
          write: this.draw.bind(this)
        }, this.dom = DD.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), zD.above && this.dom.classList.add("cm-layer-above"), zD.class && this.dom.classList.add(zD.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(DD.state), DD.requestMeasure(this.measureReq), zD.mount && zD.mount(this.dom, DD)
      }
      update(DD) {
        DD.startState.facet(Ys) != DD.state.facet(Ys) && this.setOrder(DD.state), (this.layer.update(DD, this.dom) || DD.geometryChanged) && (this.scale(), DD.view.requestMeasure(this.measureReq))
      }
      docViewUpdate(DD) {
        !1 !== this.layer.updateOnDocViewUpdate && DD.requestMeasure(this.measureReq)
      }
      setOrder(DD) {
        let zD = 0,
          wD = DD.facet(Ys);
        for (; zD < wD.length && wD[zD] != this.layer;) zD++;
        this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - zD)
      }
      measure() {
        return this.layer.markers(this.view)
      }
      scale() {
        let {
          scaleX: DD,
          scaleY: zD
        } = this.view;
        DD == this.scaleX && zD == this.scaleY || (this.scaleX = DD, this.scaleY = zD, this.dom.style.transform = `scale(${1/DD}, ${1/zD})`)
      }
      draw(DD) {
        if (DD.length != this.drawn.length || DD.some(((DD, zD) => {
            return wD = DD, pD = this.drawn[zD], !(wD.constructor == pD.constructor && wD.eq(pD));
            var wD, pD
          }))) {
          let zD = this.dom.firstChild,
            wD = 0;
          for (let pD of DD) pD.update && zD && pD.constructor && this.drawn[wD].constructor && pD.update(zD, this.drawn[wD]) ? (zD = zD.nextSibling, wD++) : this.dom.insertBefore(pD.draw(), zD);
          for (; zD;) {
            let DD = zD.nextSibling;
            zD.remove(), zD = DD
          }
          this.drawn = DD, QD.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none")
        }
      }
      destroy() {
        this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove()
      }
    }
    const Ys = pD.n.define();

    function Hs(DD) {
      return [Fz.define((zD => new Fs(zD, DD))), Ys.of(DD)]
    }
    const qs = pD.n.define({
      combine: DD => (0, pD.W)(DD, {
        cursorBlinkRate: 1200,
        drawRangeCursor: !0,
        iosSelectionHandles: !0
      }, {
        cursorBlinkRate: (DD, zD) => Math.min(DD, zD),
        drawRangeCursor: (DD, zD) => DD || zD
      })
    });

    function DK() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [qs.of(DD), wK, sK, KK, yz.of(!0)]
    }

    function zK(DD) {
      return DD.startState.facet(qs) != DD.state.facet(qs)
    }
    const wK = Hs({
      above: !0,
      markers(DD) {
        let {
          state: zD
        } = DD, wD = zD.facet(qs), sD = [];
        for (let KD of zD.selection.rG) {
          let rD = KD == zD.selection.main;
          if (KD.empty || wD.drawRangeCursor && !(rD && QD.ios && wD.iosSelectionHandles)) {
            let zD = rD ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary",
              wD = KD.empty ? KD : pD.j.cursor(KD.head, KD.assoc);
            for (let pD of us.forRange(DD, zD, wD)) sD.push(pD)
          }
        }
        return sD
      },
      update(DD, zD) {
        DD.transactions.some((DD => DD.selection)) && (zD.style.animationName = "cm-blink" == zD.style.animationName ? "cm-blink2" : "cm-blink");
        let wD = zK(DD);
        return wD && pK(DD.state, zD), DD.docChanged || DD.selectionSet || wD
      },
      mount(DD, zD) {
        pK(zD.state, DD)
      },
      class: "cm-cursorLayer"
    });

    function pK(DD, zD) {
      zD.style.animationDuration = DD.facet(qs).cursorBlinkRate + "ms"
    }
    const sK = Hs({
        above: !1,
        markers(DD) {
          let zD = [],
            {
              main: wD,
              rG: sD
            } = DD.state.selection;
          for (let pD of sD)
            if (!pD.empty)
              for (let wD of us.forRange(DD, "cm-selectionBackground", pD)) zD.push(wD);
          if (QD.ios && !wD.empty && DD.state.facet(qs).iosSelectionHandles) {
            for (let sD of us.forRange(DD, "cm-selectionHandle cm-selectionHandle-start", pD.j.cursor(wD.from, 1))) zD.push(sD);
            for (let sD of us.forRange(DD, "cm-selectionHandle cm-selectionHandle-end", pD.j.cursor(wD.to, 1))) zD.push(sD)
          }
          return zD
        },
        update: (DD, zD) => DD.docChanged || DD.selectionSet || DD.viewportChanged || zK(DD),
        class: "cm-selectionLayer"
      }),
      KK = pD.u.highest(xs.theme({
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
      rK = pD.E.define({
        map: (DD, zD) => null == DD ? null : zD.mapPos(DD)
      }),
      LK = pD.G.define({
        create: () => null,
        update: (DD, zD) => (null != DD && (DD = zD.changes.mapPos(DD)), zD.effects.reduce(((DD, zD) => zD.is(rK) ? zD.value : DD), DD))
      }),
      cK = Fz.fromClass(class {
        constructor(DD) {
          this.view = DD, this.cursor = null, this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawCursor.bind(this)
          }
        }
        update(DD) {
          var zD;
          let wD = DD.state.field(LK);
          null == wD ? null != this.cursor && (null === (zD = this.cursor) || void 0 === zD || zD.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (DD.startState.field(LK) != wD || DD.docChanged || DD.geometryChanged) && this.view.requestMeasure(this.measureReq))
        }
        readPos() {
          let {
            view: DD
          } = this, zD = DD.state.field(LK), wD = null != zD && DD.coordsAtPos(zD);
          if (!wD) return null;
          let pD = DD.scrollDOM.getBoundingClientRect();
          return {
            left: wD.left - pD.left + DD.scrollDOM.scrollLeft * DD.scaleX,
            top: wD.top - pD.top + DD.scrollDOM.scrollTop * DD.scaleY,
            height: wD.bottom - wD.top
          }
        }
        drawCursor(DD) {
          if (this.cursor) {
            let {
              scaleX: zD,
              scaleY: wD
            } = this.view;
            DD ? (this.cursor.style.left = DD.left / zD + "px", this.cursor.style.top = DD.top / wD + "px", this.cursor.style.height = DD.height / wD + "px") : this.cursor.style.left = "-100000px"
          }
        }
        destroy() {
          this.cursor && this.cursor.remove()
        }
        setDropPos(DD) {
          this.view.state.field(LK) != DD && this.view.dispatch({
            effects: rK.of(DD)
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

    function gK() {
      return [LK, cK]
    }

    function RK(DD, zD, wD, pD, sD) {
      zD.lastIndex = 0;
      for (let KD, rD = DD.iterRange(wD, pD), LD = wD; !rD.next().done; LD += rD.value.length)
        if (!rD.lineBreak)
          for (; KD = zD.exec(rD.value);) sD(LD + KD.index, KD)
    }
    class AK {
      constructor(DD) {
        const {
          regexp: zD,
          decoration: wD,
          decorate: pD,
          boundary: sD,
          maxLength: KD = 1e3
        } = DD;
        if (!zD.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
        if (this.regexp = zD, pD) this.addMatch = (DD, zD, wD, sD) => pD(sD, wD, wD + DD[0].length, DD, zD);
        else if ("function" == typeof wD) this.addMatch = (DD, zD, pD, sD) => {
          let KD = wD(DD, zD, pD);
          KD && sD(pD, pD + DD[0].length, KD)
        };
        else {
          if (!wD) throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
          this.addMatch = (DD, zD, pD, sD) => sD(pD, pD + DD[0].length, wD)
        }
        this.boundary = sD, this.maxLength = KD
      }
      createDeco(DD) {
        let zD = new pD.v,
          wD = zD.add.bind(zD);
        for (let {
            from: pD,
            to: sD
          }
          of
          function(DD, zD) {
            let wD = DD.w6;
            if (1 == wD.length && wD[0].from == DD.viewport.from && wD[0].to == DD.viewport.to) return wD;
            let pD = [];
            for (let {
                from: sD,
                to: KD
              }
              of wD) sD = Math.max(DD.state.doc.lineAt(sD).from, sD - zD), KD = Math.min(DD.state.doc.lineAt(KD).to, KD + zD), pD.length && pD[pD.length - 1].to >= sD ? pD[pD.length - 1].to = KD : pD.push({
              from: sD,
              to: KD
            });
            return pD
          }(DD, this.maxLength)) RK(DD.state.doc, this.regexp, pD, sD, ((zD, pD) => this.addMatch(pD, DD, zD, wD)));
        return zD.finish()
      }
      updateDeco(DD, zD) {
        let wD = 1e9,
          pD = -1;
        return DD.docChanged && DD.changes.iterChanges(((zD, sD, KD, rD) => {
          rD >= DD.view.viewport.from && KD <= DD.view.viewport.to && (wD = Math.min(KD, wD), pD = Math.max(rD, pD))
        })), DD.viewportMoved || pD - wD > 1e3 ? this.createDeco(DD.view) : pD > -1 ? this.updateRange(DD.view, zD.map(DD.changes), wD, pD) : zD
      }
      updateRange(DD, zD, wD, pD) {
        for (let sD of DD.w6) {
          let KD = Math.max(sD.from, wD),
            rD = Math.min(sD.to, pD);
          if (rD >= KD) {
            let wD = DD.state.doc.lineAt(KD),
              pD = wD.to < rD ? DD.state.doc.lineAt(rD) : wD,
              LD = Math.max(sD.from, wD.from),
              cD = Math.min(sD.to, pD.to);
            if (this.boundary) {
              for (; KD > wD.from; KD--)
                if (this.boundary.test(wD.text[KD - 1 - wD.from])) {
                  LD = KD;
                  break
                } for (; rD < pD.to; rD++)
                if (this.boundary.test(pD.text[rD - pD.from])) {
                  cD = rD;
                  break
                }
            }
            let gD, RD = [],
              AD = (DD, zD, wD) => RD.push(wD.range(DD, zD));
            if (wD == pD)
              for (this.regexp.lastIndex = LD - wD.from;
                (gD = this.regexp.exec(wD.text)) && gD.index < cD - wD.from;) this.addMatch(gD, DD, gD.index + wD.from, AD);
            else RK(DD.state.doc, this.regexp, LD, cD, ((zD, wD) => this.addMatch(wD, DD, zD, AD)));
            zD = zD.update({
              filterFrom: LD,
              filterTo: cD,
              filter: (DD, zD) => DD < LD || zD > cD,
              add: RD
            })
          }
        }
        return zD
      }
    }
    const UK = null != /x/.unicode ? "gu" : "g",
      fK = new RegExp("[\0-\b\n-\x1f\x7f-\x9f\xad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]", UK),
      IK = {
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
    let BK = null;
    const GK = pD.n.define({
      combine(DD) {
        let zD = (0, pD.W)(DD, {
          render: null,
          specialChars: fK,
          addSpecialChars: null
        });
        return (zD.replaceTabs = ! function() {
          var DD;
          if (null == BK && "undefined" != typeof document && document.body) {
            let zD = document.body.style;
            BK = null != (null !== (DD = zD.tabSize) && void 0 !== DD ? DD : zD.MozTabSize)
          }
          return BK || !1
        }()) && (zD.specialChars = new RegExp("\t|" + zD.specialChars.source, UK)), zD.addSpecialChars && (zD.specialChars = new RegExp(zD.specialChars.source + "|" + zD.addSpecialChars.source, UK)), zD
      }
    });

    function hK() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [GK.of(DD), nK || (nK = Fz.fromClass(class {
        constructor(DD) {
          this.view = DD, this.BD = jD.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(DD.state.facet(GK)), this.BD = this.decorator.createDeco(DD)
        }
        makeDecorator(DD) {
          return new AK({
            regexp: DD.specialChars,
            decoration: (zD, wD, sD) => {
              let {
                doc: KD
              } = wD.state, rD = (0, pD.P)(zD[0], 0);
              if (9 == rD) {
                let DD = KD.lineAt(sD),
                  zD = wD.state.tabSize,
                  rD = (0, pD.Z)(DD.text, zD, sD - DD.from);
                return jD.replace({
                  widget: new OK((zD - rD % zD) * this.view.defaultCharacterWidth / this.view.scaleX)
                })
              }
              return this.decorationCache[rD] || (this.decorationCache[rD] = jD.replace({
                widget: new MK(DD, rD)
              }))
            },
            boundary: DD.replaceTabs ? void 0 : /[^]/
          })
        }
        update(DD) {
          let zD = DD.state.facet(GK);
          DD.startState.facet(GK) != zD ? (this.decorator = this.makeDecorator(zD), this.BD = this.decorator.createDeco(DD.view)) : this.BD = this.decorator.updateDeco(DD, this.BD)
        }
      }, {
        BD: DD => DD.BD
      }))]
    }
    let nK = null;
    class MK extends TD {
      constructor(DD, zD) {
        super(), this.options = DD, this.code = zD
      }
      eq(DD) {
        return DD.code == this.code
      }
      toDOM(DD) {
        let zD = function(DD) {
            return DD >= 32 ? "\u2022" : 10 == DD ? "\u2424" : String.fromCharCode(9216 + DD)
          }(this.code),
          wD = DD.state.phrase("Control character") + " " + (IK[this.code] || "0x" + this.code.toString(16)),
          pD = this.options.render && this.options.render(this.code, wD, zD);
        if (pD) return pD;
        let sD = document.createElement("span");
        return sD.textContent = zD, sD.title = wD, sD.setAttribute("aria-label", wD), sD.className = "cm-specialChar", sD
      }
      ignoreEvent() {
        return !1
      }
    }
    class OK extends TD {
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

    function JK() {
      return QK
    }
    const EK = jD.line({
        class: "cm-activeLine"
      }),
      QK = Fz.fromClass(class {
        constructor(DD) {
          this.BD = this.getDeco(DD)
        }
        update(DD) {
          (DD.docChanged || DD.selectionSet) && (this.BD = this.getDeco(DD.view))
        }
        getDeco(DD) {
          let zD = -1,
            wD = [];
          for (let pD of DD.state.selection.rG) {
            let sD = DD.lineBlockAt(pD.head);
            sD.from > zD && (wD.push(EK.range(sD.from)), zD = sD.from)
          }
          return jD.set(wD)
        }
      }, {
        BD: DD => DD.BD
      });
    class XK extends TD {
      constructor(DD) {
        super(), this.content = DD
      }
      toDOM(DD) {
        let zD = document.createElement("span");
        return zD.className = "cm-placeholder", zD.style.pointerEvents = "none", zD.appendChild("string" == typeof this.content ? document.createTextNode(this.content) : "function" == typeof this.content ? this.content(DD) : this.content.cloneNode(!0)), zD.setAttribute("aria-hidden", "true"), zD
      }
      coordsAt(DD) {
        let zD = DD.firstChild ? mD(DD.firstChild) : [];
        if (!zD.length) return null;
        let wD = window.getComputedStyle(DD.parentNode),
          pD = tD(zD[0], "rtl" != wD.direction),
          sD = parseInt(wD.lineHeight);
        return pD.bottom - pD.top > 1.5 * sD ? {
          left: pD.left,
          right: pD.right,
          top: pD.top,
          bottom: pD.top + sD
        } : pD
      }
      ignoreEvent() {
        return !1
      }
    }

    function VK(DD) {
      let zD = Fz.fromClass(class {
        constructor(zD) {
          this.view = zD, this.placeholder = DD ? jD.set([jD.widget({
            widget: new XK(DD),
            side: 1
          }).range(0)]) : jD.none
        }
        get BD() {
          return this.view.state.doc.length ? jD.none : this.placeholder
        }
      }, {
        BD: DD => DD.BD
      });
      return "string" == typeof DD ? [zD, xs.contentAttributes.of({
        "aria-placeholder": DD
      })] : zD
    }
    const PK = 2e3;

    function CK(DD, zD) {
      let wD = DD.posAtCoords({
          x: zD.clientX,
          y: zD.clientY
        }, !1),
        sD = DD.state.doc.lineAt(wD),
        KD = wD - sD.from,
        rD = KD > PK ? -1 : KD == sD.length ? function(DD, zD) {
          let wD = DD.coordsAtPos(DD.viewport.from);
          return wD ? Math.round(Math.abs((wD.left - zD) / DD.defaultCharacterWidth)) : -1
        }(DD, zD.clientX) : (0, pD.Z)(sD.text, DD.state.tabSize, wD - sD.from);
      return {
        line: sD.number,
        col: rD,
        off: KD
      }
    }

    function xK(DD, zD) {
      let wD = CK(DD, zD),
        sD = DD.state.selection;
      return wD ? {
        update(DD) {
          if (DD.docChanged) {
            let zD = DD.changes.mapPos(DD.startState.doc.line(wD.line).from),
              pD = DD.state.doc.lineAt(zD);
            wD = {
              line: pD.number,
              col: wD.col,
              off: Math.min(wD.off, pD.length)
            }, sD = sD.map(DD.changes)
          }
        },
        get(zD, KD, rD) {
          let LD = CK(DD, zD);
          if (!LD) return sD;
          let cD = function(DD, zD, wD) {
            let sD = Math.min(zD.line, wD.line),
              KD = Math.max(zD.line, wD.line),
              rD = [];
            if (zD.off > PK || wD.off > PK || zD.col < 0 || wD.col < 0) {
              let LD = Math.min(zD.off, wD.off),
                cD = Math.max(zD.off, wD.off);
              for (let zD = sD; zD <= KD; zD++) {
                let wD = DD.doc.line(zD);
                wD.length <= cD && rD.push(pD.j.range(wD.from + LD, wD.to + cD))
              }
            } else {
              let LD = Math.min(zD.col, wD.col),
                cD = Math.max(zD.col, wD.col);
              for (let zD = sD; zD <= KD; zD++) {
                let wD = DD.doc.line(zD),
                  sD = (0, pD.bb)(wD.text, LD, DD.tabSize, !0);
                if (sD < 0) rD.push(pD.j.cursor(wD.to));
                else {
                  let zD = (0, pD.bb)(wD.text, cD, DD.tabSize);
                  rD.push(pD.j.range(wD.from + sD, wD.from + zD))
                }
              }
            }
            return rD
          }(DD.state, wD, LD);
          return cD.length ? rD ? pD.j.create(cD.concat(sD.rG)) : pD.j.create(cD) : sD
        }
      } : null
    }

    function TK(DD) {
      let zD = (null === DD || void 0 === DD ? void 0 : DD.eventFilter) || (DD => DD.altKey && 0 == DD.button);
      return xs.mouseSelectionStyle.of(((DD, wD) => zD(wD) ? xK(DD, wD) : null))
    }
    const bK = {
        Alt: [18, DD => !!DD.altKey],
        Control: [17, DD => !!DD.ctrlKey],
        Shift: [16, DD => !!DD.shiftKey],
        Meta: [91, DD => !!DD.metaKey]
      },
      jK = {
        style: "cursor: crosshair"
      };

    function dK() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [zD, wD] = bK[DD.key || "Alt"],
        pD = Fz.fromClass(class {
          constructor(DD) {
            this.view = DD, this.isDown = !1
          }
          set(DD) {
            this.isDown != DD && (this.isDown = DD, this.view.update([]))
          }
        }, {
          eventObservers: {
            keydown(DD) {
              this.set(DD.keyCode == zD || wD(DD))
            },
            keyup(DD) {
              DD.keyCode != zD && wD(DD) || this.set(!1)
            },
            mousemove(DD) {
              this.set(wD(DD))
            }
          }
        });
      return [pD, xs.contentAttributes.of((DD => {
        var zD;
        return (null === (zD = DD.plugin(pD)) || void 0 === zD ? void 0 : zD.isDown) ? jK : null
      }))]
    }
    const SK = "-10000px";
    class iK {
      constructor(DD, zD, wD, pD) {
        this.facet = zD, this.createTooltipView = wD, this.removeTooltipView = pD, this.input = DD.state.facet(zD), this.tooltips = this.input.filter((DD => DD));
        let sD = null;
        this.tooltipViews = this.tooltips.map((DD => sD = wD(DD, sD)))
      }
      update(DD, zD) {
        var wD;
        let pD = DD.state.facet(this.facet),
          sD = pD.filter((DD => DD));
        if (pD === this.input) {
          for (let zD of this.tooltipViews) zD.update && zD.update(DD);
          return !1
        }
        let KD = [],
          rD = zD ? [] : null;
        for (let LD = 0; LD < sD.length; LD++) {
          let wD = sD[LD],
            pD = -1;
          if (wD) {
            for (let DD = 0; DD < this.tooltips.length; DD++) {
              let zD = this.tooltips[DD];
              zD && zD.create == wD.create && (pD = DD)
            }
            if (pD < 0) KD[LD] = this.createTooltipView(wD, LD ? KD[LD - 1] : null), rD && (rD[LD] = !!wD.above);
            else {
              let wD = KD[LD] = this.tooltipViews[pD];
              rD && (rD[LD] = zD[pD]), wD.update && wD.update(DD)
            }
          }
        }
        for (let LD of this.tooltipViews) KD.indexOf(LD) < 0 && (this.removeTooltipView(LD), null === (wD = LD.destroy) || void 0 === wD || wD.call(LD));
        return zD && (rD.forEach(((DD, wD) => zD[wD] = DD)), zD.length = rD.length), this.input = pD, this.tooltips = sD, this.tooltipViews = KD, !0
      }
    }

    function lK(DD) {
      let zD = DD.dom.ownerDocument.documentElement;
      return {
        top: 0,
        left: 0,
        bottom: zD.clientHeight,
        right: zD.clientWidth
      }
    }
    const WK = pD.n.define({
        combine: DD => {
          var zD, wD, pD;
          return {
            position: QD.ios ? "absolute" : (null === (zD = DD.find((DD => DD.position))) || void 0 === zD ? void 0 : zD.position) || "fixed",
            parent: (null === (wD = DD.find((DD => DD.parent))) || void 0 === wD ? void 0 : wD.parent) || null,
            tooltipSpace: (null === (pD = DD.find((DD => DD.tooltipSpace))) || void 0 === pD ? void 0 : pD.tooltipSpace) || lK
          }
        }
      }),
      NK = new WeakMap,
      ZK = Fz.fromClass(class {
        constructor(DD) {
          this.view = DD, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
          let zD = DD.state.facet(WK);
          this.position = zD.position, this.parent = zD.parent, this.classes = DD.themeClasses, this.createContainer(), this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this
          }, this.resizeObserver = "function" == typeof ResizeObserver ? new ResizeObserver((() => this.measureSoon())) : null, this.manager = new iK(DD, eK, ((DD, zD) => this.createTooltip(DD, zD)), (DD => {
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
          let zD = this.manager.update(DD, this.above);
          zD && this.observeIntersection();
          let wD = zD || DD.geometryChanged,
            pD = DD.state.facet(WK);
          if (pD.position != this.position && !this.madeAbsolute) {
            this.position = pD.position;
            for (let DD of this.manager.tooltipViews) DD.dom.style.position = this.position;
            wD = !0
          }
          if (pD.parent != this.parent) {
            this.parent && this.container.remove(), this.parent = pD.parent, this.createContainer();
            for (let DD of this.manager.tooltipViews) this.container.appendChild(DD.dom);
            wD = !0
          } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
          wD && this.maybeMeasure()
        }
        createTooltip(DD, zD) {
          let wD = DD.create(this.view),
            pD = zD ? zD.dom : null;
          if (wD.dom.classList.add("cm-tooltip"), DD.arrow && !wD.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
            let DD = document.createElement("div");
            DD.className = "cm-tooltip-arrow", wD.dom.appendChild(DD)
          }
          return wD.dom.style.position = this.position, wD.dom.style.top = SK, wD.dom.style.left = "0px", this.container.insertBefore(wD.dom, pD), wD.mount && wD.mount(this.view), this.resizeObserver && this.resizeObserver.observe(wD.dom), wD
        }
        destroy() {
          var DD, zD, wD;
          this.view.win.removeEventListener("resize", this.measureSoon);
          for (let pD of this.manager.tooltipViews) pD.dom.remove(), null === (DD = pD.destroy) || void 0 === DD || DD.call(pD);
          this.parent && this.container.remove(), null === (zD = this.resizeObserver) || void 0 === zD || zD.disconnect(), null === (wD = this.intersectionObserver) || void 0 === wD || wD.disconnect(), clearTimeout(this.measureTimeout)
        }
        readMeasure() {
          let DD = 1,
            zD = 1,
            wD = !1;
          if ("fixed" == this.position && this.manager.tooltipViews.length) {
            let {
              dom: DD
            } = this.manager.tooltipViews[0];
            if (QD.safari) {
              let zD = DD.getBoundingClientRect();
              wD = Math.abs(zD.top + 1e4) > 1 || Math.abs(zD.left) > 1
            } else wD = !!DD.offsetParent && DD.offsetParent != this.container.ownerDocument.body
          }
          if (wD || "absolute" == this.position)
            if (this.parent) {
              let wD = this.parent.getBoundingClientRect();
              wD.width && wD.height && (DD = wD.width / this.parent.offsetWidth, zD = wD.height / this.parent.offsetHeight)
            } else({
              scaleX: DD,
              scaleY: zD
            } = this.view.viewState);
          let pD = this.view.scrollDOM.getBoundingClientRect(),
            sD = Lw(this.view);
          return {
            visible: {
              left: pD.left + sD.left,
              top: pD.top + sD.top,
              right: pD.right - sD.right,
              bottom: pD.bottom - sD.bottom
            },
            parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
            pos: this.manager.tooltips.map(((DD, zD) => {
              let wD = this.manager.tooltipViews[zD];
              return wD.getCoords ? wD.getCoords(DD.pos) : this.view.coordsAtPos(DD.pos)
            })),
            size: this.manager.tooltipViews.map((DD => {
              let {
                dom: zD
              } = DD;
              return zD.getBoundingClientRect()
            })),
            space: this.view.state.facet(WK).tooltipSpace(this.view),
            scaleX: DD,
            scaleY: zD,
            makeAbsolute: wD
          }
        }
        writeMeasure(DD) {
          var zD;
          if (DD.makeAbsolute) {
            this.madeAbsolute = !0, this.position = "absolute";
            for (let DD of this.manager.tooltipViews) DD.dom.style.position = "absolute"
          }
          let {
            visible: wD,
            space: pD,
            scaleX: sD,
            scaleY: KD
          } = DD, rD = [];
          for (let LD = 0; LD < this.manager.tooltips.length; LD++) {
            let cD = this.manager.tooltips[LD],
              gD = this.manager.tooltipViews[LD],
              {
                dom: RD
              } = gD,
              AD = DD.pos[LD],
              UD = DD.size[LD];
            if (!AD || !1 !== cD.clip && (AD.bottom <= Math.max(wD.top, pD.top) || AD.top >= Math.min(wD.bottom, pD.bottom) || AD.right < Math.max(wD.left, pD.left) - .1 || AD.left > Math.min(wD.right, pD.right) + .1)) {
              RD.style.top = SK;
              continue
            }
            let fD = cD.arrow ? gD.dom.querySelector(".cm-tooltip-arrow") : null,
              ID = fD ? 7 : 0,
              BD = UD.right - UD.left,
              GD = null !== (zD = NK.get(gD)) && void 0 !== zD ? zD : UD.bottom - UD.top,
              hD = gD.offset || mK,
              nD = this.view.textDirection == gz.LTR,
              MD = UD.width > pD.right - pD.left ? nD ? pD.left : pD.right - UD.width : nD ? Math.max(pD.left, Math.min(AD.left - (fD ? 14 : 0) + hD.x, pD.right - BD)) : Math.min(Math.max(pD.left, AD.left - BD + (fD ? 14 : 0) - hD.x), pD.right - BD),
              OD = this.above[LD];
            !cD.strictSide && (OD ? AD.top - GD - ID - hD.y < pD.top : AD.bottom + GD + ID + hD.y > pD.bottom) && OD == pD.bottom - AD.bottom > AD.top - pD.top && (OD = this.above[LD] = !OD);
            let JD = (OD ? AD.top - pD.top : pD.bottom - AD.bottom) - ID;
            if (JD < GD && !1 !== gD.resize) {
              if (JD < this.view.defaultLineHeight) {
                RD.style.top = SK;
                continue
              }
              NK.set(gD, GD), RD.style.height = (GD = JD) / KD + "px"
            } else RD.style.height && (RD.style.height = "");
            let ED = OD ? AD.top - GD - ID - hD.y : AD.bottom + ID + hD.y,
              QD = MD + BD;
            if (!0 !== gD.overlap)
              for (let DD of rD) DD.left < QD && DD.right > MD && DD.top < ED + GD && DD.bottom > ED && (ED = OD ? DD.top - GD - 2 - ID : DD.bottom + ID + 2);
            if ("absolute" == this.position ? (RD.style.top = (ED - DD.parent.top) / KD + "px", yK(RD, (MD - DD.parent.left) / sD)) : (RD.style.top = ED / KD + "px", yK(RD, MD / sD)), fD) {
              let DD = AD.left + (nD ? hD.x : -hD.x) - (MD + 14 - 7);
              fD.style.left = DD / sD + "px"
            }!0 !== gD.overlap && rD.push({
              left: MD,
              top: ED,
              right: QD,
              bottom: ED + GD
            }), RD.classList.toggle("cm-tooltip-above", OD), RD.classList.toggle("cm-tooltip-below", !OD), gD.positioned && gD.positioned(DD.space)
          }
        }
        maybeMeasure() {
          if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
            for (let DD of this.manager.tooltipViews) DD.dom.style.top = SK
        }
      }, {
        eventObservers: {
          scroll() {
            this.maybeMeasure()
          }
        }
      });

    function yK(DD, zD) {
      let wD = parseInt(DD.style.left, 10);
      (isNaN(wD) || Math.abs(zD - wD) > 1) && (DD.style.left = zD + "px")
    }
    const kK = xs.baseTheme({
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
      mK = {
        x: 0,
        y: 0
      },
      eK = pD.n.define({
        enables: [ZK, kK]
      }),
      oK = pD.n.define({
        combine: DD => DD.reduce(((DD, zD) => DD.concat(zD)), [])
      });
    class aK {
      static create(DD) {
        return new aK(DD)
      }
      constructor(DD) {
        this.view = DD, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new iK(DD, oK, ((DD, zD) => this.createHostedView(DD, zD)), (DD => DD.dom.remove()))
      }
      createHostedView(DD, zD) {
        let wD = DD.create(this.view);
        return wD.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(wD.dom, zD ? zD.dom.nextSibling : this.dom.firstChild), this.mounted && wD.mount && wD.mount(this.view), wD
      }
      mount(DD) {
        for (let zD of this.manager.tooltipViews) zD.mount && zD.mount(DD);
        this.mounted = !0
      }
      positioned(DD) {
        for (let zD of this.manager.tooltipViews) zD.positioned && zD.positioned(DD)
      }
      update(DD) {
        this.manager.update(DD)
      }
      destroy() {
        var DD;
        for (let zD of this.manager.tooltipViews) null === (DD = zD.destroy) || void 0 === DD || DD.call(zD)
      }
      passProp(DD) {
        let zD;
        for (let wD of this.manager.tooltipViews) {
          let pD = wD[DD];
          if (void 0 !== pD)
            if (void 0 === zD) zD = pD;
            else if (zD !== pD) return
        }
        return zD
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
    const uK = eK.compute([oK], (DD => {
      let zD = DD.facet(oK);
      return 0 === zD.length ? null : {
        pos: Math.min(...zD.map((DD => DD.pos))),
        end: Math.max(...zD.map((DD => {
          var zD;
          return null !== (zD = DD.end) && void 0 !== zD ? zD : DD.pos
        }))),
        create: aK.create,
        above: zD[0].above,
        arrow: zD.some((DD => DD.arrow))
      }
    }));
    class vK {
      constructor(DD, zD, wD, pD, sD) {
        this.view = DD, this.source = zD, this.field = wD, this.setHover = pD, this.hoverTime = sD, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
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
          lastMove: zD
        } = this, wD = DD.docView.tile.nearest(zD.target);
        if (!wD) return;
        let pD, sD = 1;
        if (wD.isWidget()) pD = wD.posAtStart;
        else {
          if (pD = DD.posAtCoords(zD), null == pD) return;
          let wD = DD.coordsAtPos(pD);
          if (!wD || zD.y < wD.top || zD.y > wD.bottom || zD.x < wD.left - DD.defaultCharacterWidth || zD.x > wD.right + DD.defaultCharacterWidth) return;
          let KD = DD.bidiSpans(DD.state.doc.lineAt(pD)).find((DD => DD.from <= pD && DD.to >= pD)),
            rD = KD && KD.dir == gz.RTL ? -1 : 1;
          sD = zD.x < wD.left ? -rD : rD
        }
        let KD = this.source(DD, pD, sD);
        if (null === KD || void 0 === KD ? void 0 : KD.then) {
          let zD = this.pending = {
            pos: pD
          };
          KD.then((wD => {
            this.pending == zD && (this.pending = null, !wD || Array.isArray(wD) && !wD.length || DD.dispatch({
              effects: this.setHover.of(Array.isArray(wD) ? wD : [wD])
            }))
          }), (zD => az(DD.state, zD, "hover tooltip")))
        } else !KD || Array.isArray(KD) && !KD.length || DD.dispatch({
          effects: this.setHover.of(Array.isArray(KD) ? KD : [KD])
        })
      }
      get tooltip() {
        let DD = this.view.plugin(ZK),
          zD = DD ? DD.manager.tooltips.findIndex((DD => DD.create == aK.create)) : -1;
        return zD > -1 ? DD.manager.tooltipViews[zD] : null
      }
      mousemove(DD) {
        var zD, wD;
        this.lastMove = {
          x: DD.clientX,
          y: DD.clientY,
          target: DD.target,
          time: Date.now()
        }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
        let {
          active: pD,
          tooltip: sD
        } = this;
        if (pD.length && sD && ! function(DD, zD) {
            let wD, {
              left: pD,
              right: sD,
              top: KD,
              bottom: rD
            } = DD.getBoundingClientRect();
            if (wD = DD.querySelector(".cm-tooltip-arrow")) {
              let DD = wD.getBoundingClientRect();
              KD = Math.min(DD.top, KD), rD = Math.max(DD.bottom, rD)
            }
            return zD.clientX >= pD - tK && zD.clientX <= sD + tK && zD.clientY >= KD - tK && zD.clientY <= rD + tK
          }(sD.dom, DD) || this.pending) {
          let {
            pos: sD
          } = pD[0] || this.pending, KD = null !== (wD = null === (zD = pD[0]) || void 0 === zD ? void 0 : zD.end) && void 0 !== wD ? wD : sD;
          (sD == KD ? this.view.posAtCoords(this.lastMove) == sD : function(DD, zD, wD, pD, sD) {
            let KD = DD.scrollDOM.getBoundingClientRect(),
              rD = DD.documentTop + DD.documentPadding.top + DD.contentHeight;
            if (KD.left > pD || KD.right < pD || KD.top > sD || Math.min(KD.bottom, rD) < sD) return !1;
            let LD = DD.posAtCoords({
              x: pD,
              y: sD
            }, !1);
            return LD >= zD && LD <= wD
          }(this.view, sD, KD, DD.clientX, DD.clientY)) || (this.view.dispatch({
            effects: this.setHover.of([])
          }), this.pending = null)
        }
      }
      mouseleave(DD) {
        clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
        let {
          active: zD
        } = this;
        if (zD.length) {
          let {
            tooltip: zD
          } = this;
          zD && zD.dom.contains(DD.relatedTarget) ? this.watchTooltipLeave(zD.dom) : this.view.dispatch({
            effects: this.setHover.of([])
          })
        }
      }
      watchTooltipLeave(DD) {
        let zD = wD => {
          DD.removeEventListener("mouseleave", zD), this.active.length && !this.view.dom.contains(wD.relatedTarget) && this.view.dispatch({
            effects: this.setHover.of([])
          })
        };
        DD.addEventListener("mouseleave", zD)
      }
      destroy() {
        clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove)
      }
    }
    const tK = 4;

    function FK(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        wD = pD.E.define(),
        sD = pD.G.define({
          create: () => [],
          update(DD, sD) {
            if (DD.length && (zD.hideOnChange && (sD.docChanged || sD.selection) ? DD = [] : zD.hideOn && (DD = DD.filter((DD => !zD.hideOn(sD, DD)))), sD.docChanged)) {
              let zD = [];
              for (let wD of DD) {
                let DD = sD.changes.mapPos(wD.pos, -1, pD.q.TrackDel);
                if (null != DD) {
                  let pD = Object.assign(Object.create(null), wD);
                  pD.pos = DD, null != pD.end && (pD.end = sD.changes.mapPos(pD.end)), zD.push(pD)
                }
              }
              DD = zD
            }
            for (let zD of sD.effects) zD.is(wD) && (DD = zD.value), zD.is(HK) && (DD = []);
            return DD
          },
          provide: DD => oK.from(DD)
        });
      return {
        active: sD,
        extension: [sD, Fz.define((pD => new vK(pD, DD, sD, wD, zD.hoverTime || 300))), uK]
      }
    }

    function YK(DD, zD) {
      let wD = DD.plugin(ZK);
      if (!wD) return null;
      let pD = wD.manager.tooltips.indexOf(zD);
      return pD < 0 ? null : wD.manager.tooltipViews[pD]
    }
    const HK = pD.E.define();
    const qK = pD.n.define({
      combine(DD) {
        let zD, wD;
        for (let pD of DD) zD = zD || pD.topContainer, wD = wD || pD.bottomContainer;
        return {
          topContainer: zD,
          bottomContainer: wD
        }
      }
    });

    function Dr(DD, zD) {
      let wD = DD.plugin(zr),
        pD = wD ? wD.specs.indexOf(zD) : -1;
      return pD > -1 ? wD.panels[pD] : null
    }
    const zr = Fz.fromClass(class {
      constructor(DD) {
        this.input = DD.state.facet(sr), this.specs = this.input.filter((DD => DD)), this.panels = this.specs.map((zD => zD(DD)));
        let zD = DD.state.facet(qK);
        this.top = new wr(DD, !0, zD.topContainer), this.bottom = new wr(DD, !1, zD.bottomContainer), this.top.sync(this.panels.filter((DD => DD.top))), this.bottom.sync(this.panels.filter((DD => !DD.top)));
        for (let wD of this.panels) wD.dom.classList.add("cm-panel"), wD.mount && wD.mount()
      }
      update(DD) {
        let zD = DD.state.facet(qK);
        this.top.container != zD.topContainer && (this.top.sync([]), this.top = new wr(DD.view, !0, zD.topContainer)), this.bottom.container != zD.bottomContainer && (this.bottom.sync([]), this.bottom = new wr(DD.view, !1, zD.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
        let wD = DD.state.facet(sr);
        if (wD != this.input) {
          let zD = wD.filter((DD => DD)),
            pD = [],
            sD = [],
            KD = [],
            rD = [];
          for (let wD of zD) {
            let zD, LD = this.specs.indexOf(wD);
            LD < 0 ? (zD = wD(DD.view), rD.push(zD)) : (zD = this.panels[LD], zD.update && zD.update(DD)), pD.push(zD), (zD.top ? sD : KD).push(zD)
          }
          this.specs = zD, this.panels = pD, this.top.sync(sD), this.bottom.sync(KD);
          for (let DD of rD) DD.dom.classList.add("cm-panel"), DD.mount && DD.mount()
        } else
          for (let pD of this.panels) pD.update && pD.update(DD)
      }
      destroy() {
        this.top.sync([]), this.bottom.sync([])
      }
    }, {
      provide: DD => xs.scrollMargins.of((zD => {
        let wD = zD.plugin(DD);
        return wD && {
          top: wD.top.scrollMargin(),
          bottom: wD.bottom.scrollMargin()
        }
      }))
    });
    class wr {
      constructor(DD, zD, wD) {
        this.view = DD, this.top = zD, this.container = wD, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses()
      }
      sync(DD) {
        for (let zD of this.panels) zD.destroy && DD.indexOf(zD) < 0 && zD.destroy();
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
        for (let zD of this.panels)
          if (zD.dom.parentNode == this.dom) {
            for (; DD != zD.dom;) DD = pr(DD);
            DD = DD.nextSibling
          } else this.dom.insertBefore(zD.dom, DD);
        for (; DD;) DD = pr(DD)
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

    function pr(DD) {
      let zD = DD.nextSibling;
      return DD.remove(), zD
    }
    const sr = pD.n.define({
      enables: zr
    });

    function Kr(DD, zD) {
      let wD, sD = new Promise((DD => wD = DD)),
        KD = DD => function(DD, zD, wD) {
          let pD = zD.content ? zD.content(DD, (() => rD(null))) : null;
          if (!pD) {
            if (pD = (0, AD.d)("form"), zD.input) {
              let DD = (0, AD.d)("input", zD.input);
              /^(text|password|number|email|tel|url)$/.test(DD.type) && DD.classList.add("cm-textfield"), DD.name || (DD.name = "input"), pD.appendChild((0, AD.d)("label", (zD.label || "") + ": ", DD))
            } else pD.appendChild(document.createTextNode(zD.label || ""));
            pD.appendChild(document.createTextNode(" ")), pD.appendChild((0, AD.d)("button", {
              class: "cm-button",
              type: "submit"
            }, zD.submitLabel || "OK"))
          }
          let sD = "FORM" == pD.nodeName ? [pD] : pD.querySelectorAll("form");
          for (let LD = 0; LD < sD.length; LD++) {
            let DD = sD[LD];
            DD.addEventListener("keydown", (zD => {
              27 == zD.keyCode ? (zD.preventDefault(), rD(null)) : 13 == zD.keyCode && (zD.preventDefault(), rD(DD))
            })), DD.addEventListener("submit", (zD => {
              zD.preventDefault(), rD(DD)
            }))
          }
          let KD = (0, AD.d)("div", pD, (0, AD.d)("button", {
            onclick: () => rD(null),
            "aria-label": DD.state.phrase("close"),
            class: "cm-dialog-close",
            type: "button"
          }, ["\xd7"]));
          zD.class && (KD.className = zD.class);

          function rD(zD) {
            KD.contains(KD.ownerDocument.activeElement) && DD.focus(), wD(zD)
          }
          return KD.classList.add("cm-dialog"), {
            dom: KD,
            top: zD.top,
            mount: () => {
              if (zD.focus) {
                let DD;
                DD = "string" == typeof zD.focus ? pD.querySelector(zD.focus) : pD.querySelector("input") || pD.querySelector("button"), DD && "select" in DD ? DD.select() : DD && "focus" in DD && DD.focus()
              }
            }
          }
        }(DD, zD, wD);
      DD.state.field(rr, !1) ? DD.dispatch({
        effects: Lr.of(KD)
      }) : DD.dispatch({
        effects: pD.E.appendConfig.of(rr.init((() => [KD])))
      });
      let rD = cr.of(KD);
      return {
        close: rD,
        result: sD.then((zD => ((DD.win.queueMicrotask || (zD => DD.win.setTimeout(zD, 10)))((() => {
          DD.state.field(rr).indexOf(KD) > -1 && DD.dispatch({
            effects: rD
          })
        })), zD)))
      }
    }
    const rr = pD.G.define({
        create: () => [],
        update(DD, zD) {
          for (let wD of zD.effects) wD.is(Lr) ? DD = [wD.value].concat(DD) : wD.is(cr) && (DD = DD.filter((DD => DD != wD.value)));
          return DD
        },
        provide: DD => sr.computeN([DD], (zD => zD.field(DD)))
      }),
      Lr = pD.E.define(),
      cr = pD.E.define();
    class gr extends pD.C {
      compare(DD) {
        return this == DD || this.constructor == DD.constructor && this.eq(DD)
      }
      eq(DD) {
        return !1
      }
      destroy(DD) {}
    }
    gr.prototype.elementClass = "", gr.prototype.toDOM = void 0, gr.prototype.mapMode = pD.q.TrackBefore, gr.prototype.startSide = gr.prototype.endSide = -1, gr.prototype.point = !0;
    const Rr = pD.n.define(),
      Ar = pD.n.define(),
      Ur = {
        class: "",
        renderEmptyElements: !1,
        elementStyle: "",
        markers: () => pD.z.empty,
        lineMarker: () => null,
        widgetMarker: () => null,
        lineMarkerChange: null,
        initialSpacer: null,
        updateSpacer: null,
        domEventHandlers: {},
        side: "before"
      },
      fr = pD.n.define();

    function Ir(DD) {
      return [Gr(), fr.of({
        ...Ur,
        ...DD
      })]
    }
    const Br = pD.n.define({
      combine: DD => DD.some((DD => DD))
    });

    function Gr(DD) {
      let zD = [hr];
      return DD && !1 === DD.fixed && zD.push(Br.of(!0)), zD
    }
    const hr = Fz.fromClass(class {
      constructor(DD) {
        this.view = DD, this.domAfter = null, this.prevViewport = DD.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = DD.state.facet(fr).map((zD => new Jr(DD, zD))), this.fixed = !DD.state.facet(Br);
        for (let zD of this.gutters) "after" == zD.config.side ? this.getDOMAfter().appendChild(zD.dom) : this.dom.appendChild(zD.dom);
        this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), DD.scrollDOM.insertBefore(this.dom, DD.contentDOM)
      }
      getDOMAfter() {
        return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter
      }
      update(DD) {
        if (this.updateGutters(DD)) {
          let zD = this.prevViewport,
            wD = DD.view.viewport,
            pD = Math.min(zD.to, wD.to) - Math.max(zD.from, wD.from);
          this.syncGutters(pD < .8 * (wD.to - wD.from))
        }
        if (DD.geometryChanged) {
          let DD = this.view.contentHeight / this.view.scaleY + "px";
          this.dom.style.minHeight = DD, this.domAfter && (this.domAfter.style.minHeight = DD)
        }
        this.view.state.facet(Br) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = DD.view.viewport
      }
      syncGutters(DD) {
        let zD = this.dom.nextSibling;
        DD && (this.dom.remove(), this.domAfter && this.domAfter.remove());
        let wD = pD.z.iter(this.view.state.facet(Rr), this.view.viewport.from),
          sD = [],
          KD = this.gutters.map((DD => new Or(DD, this.view.viewport, -this.view.documentPadding.top)));
        for (let pD of this.view.viewportLineBlocks)
          if (sD.length && (sD = []), Array.isArray(pD.type)) {
            let DD = !0;
            for (let zD of pD.type)
              if (zD.type == bD.Text && DD) {
                Mr(wD, sD, zD.from);
                for (let DD of KD) DD.line(this.view, zD, sD);
                DD = !1
              } else if (zD.widget)
              for (let DD of KD) DD.widget(this.view, zD)
          } else if (pD.type == bD.Text) {
          Mr(wD, sD, pD.from);
          for (let DD of KD) DD.line(this.view, pD, sD)
        } else if (pD.widget)
          for (let DD of KD) DD.widget(this.view, pD);
        for (let pD of KD) pD.finish();
        DD && (this.view.scrollDOM.insertBefore(this.dom, zD), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter))
      }
      updateGutters(DD) {
        let zD = DD.startState.facet(fr),
          wD = DD.state.facet(fr),
          sD = DD.docChanged || DD.heightChanged || DD.viewportChanged || !pD.z.eq(DD.startState.facet(Rr), DD.state.facet(Rr), DD.view.viewport.from, DD.view.viewport.to);
        if (zD == wD)
          for (let pD of this.gutters) pD.update(DD) && (sD = !0);
        else {
          sD = !0;
          let pD = [];
          for (let sD of wD) {
            let wD = zD.indexOf(sD);
            wD < 0 ? pD.push(new Jr(this.view, sD)) : (this.gutters[wD].update(DD), pD.push(this.gutters[wD]))
          }
          for (let DD of this.gutters) DD.dom.remove(), pD.indexOf(DD) < 0 && DD.destroy();
          for (let DD of pD) "after" == DD.config.side ? this.getDOMAfter().appendChild(DD.dom) : this.dom.appendChild(DD.dom);
          this.gutters = pD
        }
        return sD
      }
      destroy() {
        for (let DD of this.gutters) DD.destroy();
        this.dom.remove(), this.domAfter && this.domAfter.remove()
      }
    }, {
      provide: DD => xs.scrollMargins.of((zD => {
        let wD = zD.plugin(DD);
        if (!wD || 0 == wD.gutters.length || !wD.fixed) return null;
        let pD = wD.dom.offsetWidth * zD.scaleX,
          sD = wD.domAfter ? wD.domAfter.offsetWidth * zD.scaleX : 0;
        return zD.textDirection == gz.LTR ? {
          left: pD,
          right: sD
        } : {
          right: pD,
          left: sD
        }
      }))
    });

    function nr(DD) {
      return Array.isArray(DD) ? DD : [DD]
    }

    function Mr(DD, zD, wD) {
      for (; DD.value && DD.from <= wD;) DD.from == wD && zD.push(DD.value), DD.next()
    }
    class Or {
      constructor(DD, zD, wD) {
        this.gutter = DD, this.height = wD, this.i = 0, this.cursor = pD.z.iter(DD.markers, zD.from)
      }
      addElement(DD, zD, wD) {
        let {
          gutter: pD
        } = this, sD = (zD.top - this.height) / DD.scaleY, KD = zD.height / DD.scaleY;
        if (this.i == pD.elements.length) {
          let zD = new Er(DD, KD, sD, wD);
          pD.elements.push(zD), pD.dom.appendChild(zD.dom)
        } else pD.elements[this.i].update(DD, KD, sD, wD);
        this.height = zD.bottom, this.i++
      }
      line(DD, zD, wD) {
        let pD = [];
        Mr(this.cursor, pD, zD.from), wD.length && (pD = pD.concat(wD));
        let sD = this.gutter.config.lineMarker(DD, zD, pD);
        sD && pD.unshift(sD);
        let KD = this.gutter;
        (0 != pD.length || KD.config.renderEmptyElements) && this.addElement(DD, zD, pD)
      }
      widget(DD, zD) {
        let wD = this.gutter.config.widgetMarker(DD, zD.widget, zD),
          pD = wD ? [wD] : null;
        for (let sD of DD.state.facet(Ar)) {
          let wD = sD(DD, zD.widget, zD);
          wD && (pD || (pD = [])).push(wD)
        }
        pD && this.addElement(DD, zD, pD)
      }
      finish() {
        let DD = this.gutter;
        for (; DD.elements.length > this.i;) {
          let zD = DD.elements.pop();
          DD.dom.removeChild(zD.dom), zD.destroy()
        }
      }
    }
    class Jr {
      constructor(DD, zD) {
        this.view = DD, this.config = zD, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
        for (let wD in zD.domEventHandlers) this.dom.addEventListener(wD, (pD => {
          let sD, KD = pD.target;
          if (KD != this.dom && this.dom.contains(KD)) {
            for (; KD.parentNode != this.dom;) KD = KD.parentNode;
            let DD = KD.getBoundingClientRect();
            sD = (DD.top + DD.bottom) / 2
          } else sD = pD.clientY;
          let rD = DD.lineBlockAtHeight(sD - DD.documentTop);
          zD.domEventHandlers[wD](DD, rD, pD) && pD.preventDefault()
        }));
        this.markers = nr(zD.markers(DD)), zD.initialSpacer && (this.spacer = new Er(DD, 0, 0, [zD.initialSpacer(DD)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none")
      }
      update(DD) {
        let zD = this.markers;
        if (this.markers = nr(this.config.markers(DD.view)), this.spacer && this.config.updateSpacer) {
          let zD = this.config.updateSpacer(this.spacer.markers[0], DD);
          zD != this.spacer.markers[0] && this.spacer.update(DD.view, 0, 0, [zD])
        }
        let wD = DD.view.viewport;
        return !pD.z.eq(this.markers, zD, wD.from, wD.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(DD)
      }
      destroy() {
        for (let DD of this.elements) DD.destroy()
      }
    }
    class Er {
      constructor(DD, zD, wD, pD) {
        this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(DD, zD, wD, pD)
      }
      update(DD, zD, wD, pD) {
        this.height != zD && (this.height = zD, this.dom.style.height = zD + "px"), this.above != wD && (this.dom.style.marginTop = (this.above = wD) ? wD + "px" : ""),
          function(DD, zD) {
            if (DD.length != zD.length) return !1;
            for (let wD = 0; wD < DD.length; wD++)
              if (!DD[wD].compare(zD[wD])) return !1;
            return !0
          }(this.markers, pD) || this.setMarkers(DD, pD)
      }
      setMarkers(DD, zD) {
        let wD = "cm-gutterElement",
          pD = this.dom.firstChild;
        for (let sD = 0, KD = 0;;) {
          let rD = KD,
            LD = sD < zD.length ? zD[sD++] : null,
            cD = !1;
          if (LD) {
            let DD = LD.elementClass;
            DD && (wD += " " + DD);
            for (let zD = KD; zD < this.markers.length; zD++)
              if (this.markers[zD].compare(LD)) {
                rD = zD, cD = !0;
                break
              }
          } else rD = this.markers.length;
          for (; KD < rD;) {
            let DD = this.markers[KD++];
            if (DD.toDOM) {
              DD.destroy(pD);
              let zD = pD.nextSibling;
              pD.remove(), pD = zD
            }
          }
          if (!LD) break;
          LD.toDOM && (cD ? pD = pD.nextSibling : this.dom.insertBefore(LD.toDOM(DD), pD)), cD && KD++
        }
        this.dom.className = wD, this.markers = zD
      }
      destroy() {
        this.setMarkers(null, [])
      }
    }
    const Qr = pD.n.define(),
      Xr = pD.n.define(),
      Vr = pD.n.define({
        combine: DD => (0, pD.W)(DD, {
          formatNumber: String,
          domEventHandlers: {}
        }, {
          domEventHandlers(DD, zD) {
            let wD = Object.assign({}, DD);
            for (let pD in zD) {
              let DD = wD[pD],
                sD = zD[pD];
              wD[pD] = DD ? (zD, wD, pD) => DD(zD, wD, pD) || sD(zD, wD, pD) : sD
            }
            return wD
          }
        })
      });
    class Pr extends gr {
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

    function Cr(DD, zD) {
      return DD.state.facet(Vr).formatNumber(zD, DD.state)
    }
    const xr = fr.compute([Vr], (DD => ({
      class: "cm-lineNumbers",
      renderEmptyElements: !1,
      markers: DD => DD.state.facet(Qr),
      lineMarker: (DD, zD, wD) => wD.some((DD => DD.toDOM)) ? null : new Pr(Cr(DD, DD.state.doc.lineAt(zD.from).number)),
      widgetMarker: (DD, zD, wD) => {
        for (let pD of DD.state.facet(Xr)) {
          let sD = pD(DD, zD, wD);
          if (sD) return sD
        }
        return null
      },
      lineMarkerChange: DD => DD.startState.facet(Vr) != DD.state.facet(Vr),
      initialSpacer: DD => new Pr(Cr(DD, br(DD.state.doc.lines))),
      updateSpacer(DD, zD) {
        let wD = Cr(zD.view, br(zD.view.state.doc.lines));
        return wD == DD.number ? DD : new Pr(wD)
      },
      domEventHandlers: DD.facet(Vr).domEventHandlers,
      side: "before"
    })));

    function Tr() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Vr.of(DD), Gr(), xr]
    }

    function br(DD) {
      let zD = 9;
      for (; zD < DD;) zD = 10 * zD + 9;
      return zD
    }
    const jr = new class extends gr {
        constructor() {
          super(...arguments), this.elementClass = "cm-activeLineGutter"
        }
      },
      dr = Rr.compute(["selection"], (DD => {
        let zD = [],
          wD = -1;
        for (let pD of DD.selection.rG) {
          let sD = DD.doc.lineAt(pD.head).from;
          sD > wD && (wD = sD, zD.push(jr.range(sD)))
        }
        return pD.z.of(zD)
      }));

    function Sr() {
      return dr
    }
  },
  41233: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => pD,
      f: () => fD,
      g: () => rD,
      h: () => RD,
      i: () => gD,
      m: () => dD,
      n: () => iD,
      q: () => SD,
      s: () => ID
    });
    const pD = 1024;
    let sD = 0;
    class KD {
      constructor(DD, zD) {
        this.from = DD, this.to = zD
      }
    }
    class rD {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.id = sD++, this.perNode = !!DD.perNode, this.deserialize = DD.deserialize || (() => {
          throw new Error("This node type doesn't define a deserialize function")
        }), this.combine = DD.combine || null
      }
      add(DD) {
        if (this.perNode) throw new RangeError("Can't add per-node props to node types");
        return "function" != typeof DD && (DD = gD.match(DD)), zD => {
          let wD = DD(zD);
          return void 0 === wD ? null : [this, wD]
        }
      }
    }
    rD.closedBy = new rD({
      deserialize: DD => DD.split(" ")
    }), rD.openedBy = new rD({
      deserialize: DD => DD.split(" ")
    }), rD.group = new rD({
      deserialize: DD => DD.split(" ")
    }), rD.isolate = new rD({
      deserialize: DD => {
        if (DD && "rtl" != DD && "ltr" != DD && "auto" != DD) throw new RangeError("Invalid value for isolate: " + DD);
        return DD || "auto"
      }
    }), rD.contextHash = new rD({
      perNode: !0
    }), rD.lookAhead = new rD({
      perNode: !0
    }), rD.mounted = new rD({
      perNode: !0
    });
    class LD {
      constructor(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this.tree = DD, this.overlay = zD, this.parser = wD, this.bracketed = pD
      }
      static get(DD) {
        return DD && DD.props && DD.props[rD.mounted.id]
      }
    }
    const cD = Object.create(null);
    class gD {
      constructor(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.name = DD, this.props = zD, this.id = wD, this.flags = pD
      }
      static define(DD) {
        let zD = DD.props && DD.props.length ? Object.create(null) : cD,
          wD = (DD.top ? 1 : 0) | (DD.skipped ? 2 : 0) | (DD.error ? 4 : 0) | (null == DD.name ? 8 : 0),
          pD = new gD(DD.name || "", zD, DD.id, wD);
        if (DD.props)
          for (let sD of DD.props)
            if (Array.isArray(sD) || (sD = sD(pD)), sD) {
              if (sD[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
              zD[sD[0].id] = sD[1]
            } return pD
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
          let zD = this.prop(rD.group);
          return !!zD && zD.indexOf(DD) > -1
        }
        return this.id == DD
      }
      static match(DD) {
        let zD = Object.create(null);
        for (let wD in DD)
          for (let pD of wD.split(" ")) zD[pD] = DD[wD];
        return DD => {
          for (let wD = DD.prop(rD.group), pD = -1; pD < (wD ? wD.length : 0); pD++) {
            let sD = zD[pD < 0 ? DD.name : wD[pD]];
            if (sD) return sD
          }
        }
      }
    }
    gD.none = new gD("", Object.create(null), 0, 8);
    class RD {
      constructor(DD) {
        this.types = DD;
        for (let zD = 0; zD < DD.length; zD++)
          if (DD[zD].id != zD) throw new RangeError("Node type ids should correspond to array positions when creating a node set")
      }
      extend() {
        let DD = [];
        for (var zD = arguments.length, wD = new Array(zD), pD = 0; pD < zD; pD++) wD[pD] = arguments[pD];
        for (let sD of this.types) {
          let zD = null;
          for (let DD of wD) {
            let wD = DD(sD);
            if (wD) {
              zD || (zD = Object.assign({}, sD.props));
              let DD = wD[1],
                pD = wD[0];
              pD.combine && pD.id in zD && (DD = pD.combine(zD[pD.id], DD)), zD[pD.id] = DD
            }
          }
          DD.push(zD ? new gD(sD.name, zD, sD.id, sD.flags) : sD)
        }
        return new RD(DD)
      }
    }
    const AD = new WeakMap,
      UD = new WeakMap;
    var fD;
    ! function(DD) {
      DD[DD.ExcludeBuffers = 1] = "ExcludeBuffers", DD[DD.IncludeAnonymous = 2] = "IncludeAnonymous", DD[DD.IgnoreMounts = 4] = "IgnoreMounts", DD[DD.IgnoreOverlays = 8] = "IgnoreOverlays", DD[DD.EnterBracketed = 16] = "EnterBracketed"
    }(fD || (fD = {}));
    class ID {
      constructor(DD, zD, wD, pD, sD) {
        if (this.type = DD, this.children = zD, this.positions = wD, this.length = pD, this.props = null, sD && sD.length) {
          this.props = Object.create(null);
          for (let [DD, zD] of sD) this.props["number" == typeof DD ? DD : DD.id] = zD
        }
      }
      toString() {
        let DD = LD.get(this);
        if (DD && !DD.overlay) return DD.tree.toString();
        let zD = "";
        for (let wD of this.children) {
          let DD = wD.toString();
          DD && (zD && (zD += ","), zD += DD)
        }
        return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (zD.length ? "(" + zD + ")" : "") : zD
      }
      cursor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return new CD(this.topNode, DD)
      }
      cursorAt(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wD = AD.get(this) || this.topNode,
          pD = new CD(wD);
        return pD.moveTo(DD, zD), AD.set(this, pD._tree), pD
      }
      get topNode() {
        return new OD(this, 0, 0, null)
      }
      resolve(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wD = nD(AD.get(this) || this.topNode, DD, zD, !1);
        return AD.set(this, wD), wD
      }
      resolveInner(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wD = nD(UD.get(this) || this.topNode, DD, zD, !0);
        return UD.set(this, wD), wD
      }
      resolveStack(DD) {
        return function(DD, zD, wD) {
          let pD = DD.resolveInner(zD, wD),
            sD = null;
          for (let KD = pD instanceof OD ? pD : pD.context.parent; KD; KD = KD.parent)
            if (KD.index < 0) {
              let DD = KD.parent;
              (sD || (sD = [pD])).push(DD.resolve(zD, wD)), KD = DD
            } else {
              let DD = LD.get(KD.tree);
              if (DD && DD.overlay && DD.overlay[0].from <= zD && DD.overlay[DD.overlay.length - 1].to >= zD) {
                let rD = new OD(DD.tree, DD.overlay[0].from + KD.from, -1, KD);
                (sD || (sD = [pD])).push(nD(rD, zD, wD, !1))
              }
            } return sD ? VD(sD) : pD
        }(this, DD, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
      }
      iterate(DD) {
        let {
          enter: zD,
          leave: wD,
          from: pD = 0,
          to: sD = this.length
        } = DD, KD = DD.mode || 0, rD = (KD & fD.IncludeAnonymous) > 0;
        for (let LD = this.cursor(KD | fD.IncludeAnonymous);;) {
          let DD = !1;
          if (LD.from <= sD && LD.to >= pD && (!rD && LD.type.isAnonymous || !1 !== zD(LD))) {
            if (LD.firstChild()) continue;
            DD = !0
          }
          for (; DD && wD && (rD || !LD.type.isAnonymous) && wD(LD), !LD.nextSibling();) {
            if (!LD.parent()) return;
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
          for (let zD in this.props) DD.push([+zD, this.props[zD]]);
        return DD
      }
      balance() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this.children.length <= 8 ? this : jD(gD.none, this.children, this.positions, 0, this.children.length, 0, this.length, ((DD, zD, wD) => new ID(this.type, DD, zD, wD, this.propValues)), DD.makeTree || ((DD, zD, wD) => new ID(gD.none, DD, zD, wD)))
      }
      static build(DD) {
        return function(DD) {
          var zD;
          let {
            buffer: wD,
            nodeSet: sD,
            maxBufferLength: KD = pD,
            reused: LD = [],
            minRepeatType: cD = sD.types.length
          } = DD, gD = Array.isArray(wD) ? new BD(wD, wD.length) : wD, RD = sD.types, AD = 0, UD = 0;

          function fD(DD, zD, wD, pD, rD, ID) {
            let {
              id: BD,
              start: QD,
              end: XD,
              size: VD
            } = gD, PD = UD, CD = AD;
            if (VD < 0) {
              if (gD.next(), -1 == VD) {
                let zD = LD[BD];
                return wD.push(zD), void pD.push(QD - DD)
              }
              if (-3 == VD) return void(AD = BD);
              if (-4 == VD) return void(UD = BD);
              throw new RangeError(`Unrecognized record size: ${VD}`)
            }
            let xD, TD, bD = RD[BD],
              dD = QD - DD;
            if (XD - QD <= KD && (TD = JD(gD.pos - zD, rD))) {
              let zD = new Uint16Array(TD.size - TD.skip),
                wD = gD.pos - TD.size,
                pD = zD.length;
              for (; gD.pos > wD;) pD = ED(TD.start, zD, pD);
              xD = new GD(zD, XD - TD.start, sD), dD = TD.start - DD
            } else {
              let DD = gD.pos - VD;
              gD.next();
              let zD = [],
                wD = [],
                pD = BD >= cD ? BD : -1,
                sD = 0,
                rD = XD;
              for (; gD.pos > DD;) pD >= 0 && gD.id == pD && gD.size >= 0 ? (gD.end <= rD - KD && (MD(zD, wD, QD, sD, gD.end, rD, pD, PD, CD), sD = zD.length, rD = gD.end), gD.next()) : ID > 2500 ? hD(QD, DD, zD, wD) : fD(QD, DD, zD, wD, pD, ID + 1);
              if (pD >= 0 && sD > 0 && sD < zD.length && MD(zD, wD, QD, sD, QD, rD, pD, PD, CD), zD.reverse(), wD.reverse(), pD > -1 && sD > 0) {
                let DD = nD(bD, CD);
                xD = jD(bD, zD, wD, 0, zD.length, 0, XD - QD, DD, DD)
              } else xD = OD(bD, zD, wD, XD - QD, PD - XD, CD)
            }
            wD.push(xD), pD.push(dD)
          }

          function hD(DD, zD, wD, pD) {
            let rD = [],
              LD = 0,
              cD = -1;
            for (; gD.pos > zD;) {
              let {
                id: DD,
                start: zD,
                end: wD,
                size: pD
              } = gD;
              if (pD > 4) gD.next();
              else {
                if (cD > -1 && zD < cD) break;
                cD < 0 && (cD = wD - KD), rD.push(DD, zD, wD), LD++, gD.next()
              }
            }
            if (LD) {
              let zD = new Uint16Array(4 * LD),
                KD = rD[rD.length - 2];
              for (let DD = rD.length - 3, wD = 0; DD >= 0; DD -= 3) zD[wD++] = rD[DD], zD[wD++] = rD[DD + 1] - KD, zD[wD++] = rD[DD + 2] - KD, zD[wD++] = wD;
              wD.push(new GD(zD, rD[2] - KD, sD)), pD.push(KD - DD)
            }
          }

          function nD(DD, zD) {
            return (wD, pD, sD) => {
              let KD, LD, cD = 0,
                gD = wD.length - 1;
              if (gD >= 0 && (KD = wD[gD]) instanceof ID) {
                if (!gD && KD.type == DD && KD.length == sD) return KD;
                (LD = KD.prop(rD.lookAhead)) && (cD = pD[gD] + KD.length + LD)
              }
              return OD(DD, wD, pD, sD, cD, zD)
            }
          }

          function MD(DD, zD, wD, pD, KD, rD, LD, cD, gD) {
            let RD = [],
              AD = [];
            for (; DD.length > pD;) RD.push(DD.pop()), AD.push(zD.pop() + wD - KD);
            DD.push(OD(sD.types[LD], RD, AD, rD - KD, cD - rD, gD)), zD.push(KD - wD)
          }

          function OD(DD, zD, wD, pD, sD, KD, LD) {
            if (KD) {
              let DD = [rD.contextHash, KD];
              LD = LD ? [DD].concat(LD) : [DD]
            }
            if (sD > 25) {
              let DD = [rD.lookAhead, sD];
              LD = LD ? [DD].concat(LD) : [DD]
            }
            return new ID(DD, zD, wD, pD, LD)
          }

          function JD(DD, zD) {
            let wD = gD.fork(),
              pD = 0,
              sD = 0,
              rD = 0,
              LD = wD.end - KD,
              RD = {
                size: 0,
                start: 0,
                skip: 0
              };
            DD: for (let KD = wD.pos - DD; wD.pos > KD;) {
              let DD = wD.size;
              if (wD.id == zD && DD >= 0) {
                RD.size = pD, RD.start = sD, RD.skip = rD, rD += 4, pD += 4, wD.next();
                continue
              }
              let gD = wD.pos - DD;
              if (DD < 0 || gD < KD || wD.start < LD) break;
              let AD = wD.id >= cD ? 4 : 0,
                UD = wD.start;
              for (wD.next(); wD.pos > gD;) {
                if (wD.size < 0) {
                  if (-3 != wD.size && -4 != wD.size) break DD;
                  AD += 4
                } else wD.id >= cD && (AD += 4);
                wD.next()
              }
              sD = UD, pD += DD, rD += AD
            }
            return (zD < 0 || pD == DD) && (RD.size = pD, RD.start = sD, RD.skip = rD), RD.size > 4 ? RD : void 0
          }

          function ED(DD, zD, wD) {
            let {
              id: pD,
              start: sD,
              end: KD,
              size: rD
            } = gD;
            if (gD.next(), rD >= 0 && pD < cD) {
              let LD = wD;
              if (rD > 4) {
                let pD = gD.pos - (rD - 4);
                for (; gD.pos > pD;) wD = ED(DD, zD, wD)
              }
              zD[--wD] = LD, zD[--wD] = KD - DD, zD[--wD] = sD - DD, zD[--wD] = pD
            } else - 3 == rD ? AD = pD : -4 == rD && (UD = pD);
            return wD
          }
          let QD = [],
            XD = [];
          for (; gD.pos > 0;) fD(DD.start || 0, DD.bufferStart || 0, QD, XD, -1, 0);
          let VD = null !== (zD = DD.length) && void 0 !== zD ? zD : QD.length ? XD[0] + QD[0].length : 0;
          return new ID(RD[DD.topID], QD.reverse(), XD.reverse(), VD)
        }(DD)
      }
    }
    ID.empty = new ID(gD.none, [], [], 0);
    class BD {
      constructor(DD, zD) {
        this.buffer = DD, this.index = zD
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
        return new BD(this.buffer, this.index)
      }
    }
    class GD {
      constructor(DD, zD, wD) {
        this.buffer = DD, this.length = zD, this.set = wD
      }
      get type() {
        return gD.none
      }
      toString() {
        let DD = [];
        for (let zD = 0; zD < this.buffer.length;) DD.push(this.childString(zD)), zD = this.buffer[zD + 3];
        return DD.join(",")
      }
      childString(DD) {
        let zD = this.buffer[DD],
          wD = this.buffer[DD + 3],
          pD = this.set.types[zD],
          sD = pD.name;
        if (/\W/.test(sD) && !pD.isError && (sD = JSON.stringify(sD)), wD == (DD += 4)) return sD;
        let KD = [];
        for (; DD < wD;) KD.push(this.childString(DD)), DD = this.buffer[DD + 3];
        return sD + "(" + KD.join(",") + ")"
      }
      findChild(DD, zD, wD, pD, sD) {
        let {
          buffer: KD
        } = this, rD = -1;
        for (let LD = DD; LD != zD && !(hD(sD, pD, KD[LD + 1], KD[LD + 2]) && (rD = LD, wD > 0)); LD = KD[LD + 3]);
        return rD
      }
      slice(DD, zD, wD) {
        let pD = this.buffer,
          sD = new Uint16Array(zD - DD),
          KD = 0;
        for (let rD = DD, LD = 0; rD < zD;) {
          sD[LD++] = pD[rD++], sD[LD++] = pD[rD++] - wD;
          let zD = sD[LD++] = pD[rD++] - wD;
          sD[LD++] = pD[rD++] - DD, KD = Math.max(KD, zD)
        }
        return new GD(sD, KD, this.set)
      }
    }

    function hD(DD, zD, wD, pD) {
      switch (DD) {
        case -2:
          return wD < zD;
        case -1:
          return pD >= zD && wD < zD;
        case 0:
          return wD < zD && pD > zD;
        case 1:
          return wD <= zD && pD > zD;
        case 2:
          return pD > zD;
        case 4:
          return !0
      }
    }

    function nD(DD, zD, wD, pD) {
      for (var sD; DD.from == DD.to || (wD < 1 ? DD.from >= zD : DD.from > zD) || (wD > -1 ? DD.to <= zD : DD.to < zD);) {
        let zD = !pD && DD instanceof OD && DD.index < 0 ? null : DD.parent;
        if (!zD) return DD;
        DD = zD
      }
      let KD = pD ? 0 : fD.IgnoreOverlays;
      if (pD)
        for (let rD = DD, LD = rD.parent; LD; rD = LD, LD = rD.parent) rD instanceof OD && rD.index < 0 && (null === (sD = LD.enter(zD, wD, KD)) || void 0 === sD ? void 0 : sD.from) != rD.from && (DD = LD);
      for (;;) {
        let pD = DD.enter(zD, wD, KD);
        if (!pD) return DD;
        DD = pD
      }
    }
    class MD {
      cursor() {
        return new CD(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)
      }
      getChild(DD) {
        let zD = JD(this, DD, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null);
        return zD.length ? zD[0] : null
      }
      getChildren(DD) {
        return JD(this, DD, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
      }
      resolve(DD) {
        return nD(this, DD, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !1)
      }
      resolveInner(DD) {
        return nD(this, DD, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !0)
      }
      matchContext(DD) {
        return ED(this.parent, DD)
      }
      enterUnfinishedNodesBefore(DD) {
        let zD = this.childBefore(DD),
          wD = this;
        for (; zD;) {
          let DD = zD.lastChild;
          if (!DD || DD.to != zD.to) break;
          DD.type.isError && DD.from == DD.to ? (wD = zD, zD = DD.prevSibling) : zD = DD
        }
        return wD
      }
      get node() {
        return this
      }
      get next() {
        return this.parent
      }
    }
    class OD extends MD {
      constructor(DD, zD, wD, pD) {
        super(), this._tree = DD, this.from = zD, this.index = wD, this._parent = pD
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
      nextChild(DD, zD, wD, pD) {
        let sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        for (let KD = this;;) {
          for (let {
              children: rD,
              positions: cD
            } = KD._tree, gD = zD > 0 ? rD.length : -1; DD != gD; DD += zD) {
            let gD, RD = rD[DD],
              AD = cD[DD] + KD.from;
            if (sD & fD.EnterBracketed && RD instanceof ID && (gD = LD.get(RD)) && !gD.overlay && gD.bracketed && wD >= AD && wD <= AD + RD.length || hD(pD, wD, AD, AD + RD.length))
              if (RD instanceof GD) {
                if (sD & fD.ExcludeBuffers) continue;
                let rD = RD.findChild(0, RD.buffer.length, zD, wD - AD, pD);
                if (rD > -1) return new XD(new QD(KD, RD, DD, AD), null, rD)
              } else if (sD & fD.IncludeAnonymous || !RD.type.isAnonymous || xD(RD)) {
              let rD;
              if (!(sD & fD.IgnoreMounts) && (rD = LD.get(RD)) && !rD.overlay) return new OD(rD.tree, AD, DD, KD);
              let cD = new OD(RD, AD, DD, KD);
              return sD & fD.IncludeAnonymous || !cD.type.isAnonymous ? cD : cD.nextChild(zD < 0 ? RD.children.length - 1 : 0, zD, wD, pD, sD)
            }
          }
          if (sD & fD.IncludeAnonymous || !KD.type.isAnonymous) return null;
          if (DD = KD.index >= 0 ? KD.index + zD : zD < 0 ? -1 : KD._parent._tree.children.length, KD = KD._parent, !KD) return null
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
      enter(DD, zD) {
        let wD, pD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (!(pD & fD.IgnoreOverlays) && (wD = LD.get(this._tree)) && wD.overlay) {
          let sD = DD - this.from,
            KD = pD & fD.EnterBracketed && wD.bracketed;
          for (let {
              from: DD,
              to: pD
            }
            of wD.overlay)
            if ((zD > 0 || KD ? DD <= sD : DD < sD) && (zD < 0 || KD ? pD >= sD : pD > sD)) return new OD(wD.tree, wD.overlay[0].from + this.from, -1, this)
        }
        return this.nextChild(0, 1, DD, zD, pD)
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

    function JD(DD, zD, wD, pD) {
      let sD = DD.cursor(),
        KD = [];
      if (!sD.firstChild()) return KD;
      if (null != wD)
        for (let rD = !1; !rD;)
          if (rD = sD.type.is(wD), !sD.nextSibling()) return KD;
      for (;;) {
        if (null != pD && sD.type.is(pD)) return KD;
        if (sD.type.is(zD) && KD.push(sD.node), !sD.nextSibling()) return null == pD ? KD : []
      }
    }

    function ED(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zD.length - 1;
      for (let pD = DD; wD >= 0; pD = pD.parent) {
        if (!pD) return !1;
        if (!pD.type.isAnonymous) {
          if (zD[wD] && zD[wD] != pD.name) return !1;
          wD--
        }
      }
      return !0
    }
    class QD {
      constructor(DD, zD, wD, pD) {
        this.parent = DD, this.buffer = zD, this.index = wD, this.start = pD
      }
    }
    class XD extends MD {
      get name() {
        return this.type.name
      }
      get from() {
        return this.context.start + this.context.buffer.buffer[this.index + 1]
      }
      get to() {
        return this.context.start + this.context.buffer.buffer[this.index + 2]
      }
      constructor(DD, zD, wD) {
        super(), this.context = DD, this._parent = zD, this.index = wD, this.type = DD.buffer.set.types[DD.buffer.buffer[wD]]
      }
      child(DD, zD, wD) {
        let {
          buffer: pD
        } = this.context, sD = pD.findChild(this.index + 4, pD.buffer[this.index + 3], DD, zD - this.context.start, wD);
        return sD < 0 ? null : new XD(this.context, this, sD)
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
      enter(DD, zD) {
        if ((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0) & fD.ExcludeBuffers) return null;
        let {
          buffer: wD
        } = this.context, pD = wD.findChild(this.index + 4, wD.buffer[this.index + 3], zD > 0 ? 1 : -1, DD - this.context.start, zD);
        return pD < 0 ? null : new XD(this.context, this, pD)
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
        } = this.context, zD = DD.buffer[this.index + 3];
        return zD < (this._parent ? DD.buffer[this._parent.index + 3] : DD.buffer.length) ? new XD(this.context, this._parent, zD) : this.externalSibling(1)
      }
      get prevSibling() {
        let {
          buffer: DD
        } = this.context, zD = this._parent ? this._parent.index + 4 : 0;
        return this.index == zD ? this.externalSibling(-1) : new XD(this.context, this._parent, DD.findChild(zD, this.index, -1, 0, 4))
      }
      get tree() {
        return null
      }
      toTree() {
        let DD = [],
          zD = [],
          {
            buffer: wD
          } = this.context,
          pD = this.index + 4,
          sD = wD.buffer[this.index + 3];
        if (sD > pD) {
          let KD = wD.buffer[this.index + 1];
          DD.push(wD.slice(pD, sD, KD)), zD.push(0)
        }
        return new ID(this.type, DD, zD, this.to - this.from)
      }
      toString() {
        return this.context.buffer.childString(this.index)
      }
    }

    function VD(DD) {
      if (!DD.length) return null;
      let zD = 0,
        wD = DD[0];
      for (let KD = 1; KD < DD.length; KD++) {
        let pD = DD[KD];
        (pD.from > wD.from || pD.to < wD.to) && (wD = pD, zD = KD)
      }
      let pD = wD instanceof OD && wD.index < 0 ? null : wD.parent,
        sD = DD.slice();
      return pD ? sD[zD] = pD : sD.splice(zD, 1), new PD(sD, wD)
    }
    class PD {
      constructor(DD, zD) {
        this.heads = DD, this.node = zD
      }
      get next() {
        return VD(this.heads)
      }
    }
    class CD {
      get name() {
        return this.type.name
      }
      constructor(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = zD & ~fD.EnterBracketed, DD instanceof OD) this.yieldNode(DD);
        else {
          this._tree = DD.context.parent, this.buffer = DD.context;
          for (let zD = DD._parent; zD; zD = zD._parent) this.stack.unshift(zD.index);
          this.bufferNode = DD, this.yieldBuf(DD.index)
        }
      }
      yieldNode(DD) {
        return !!DD && (this._tree = DD, this.type = DD.type, this.from = DD.from, this.to = DD.to, !0)
      }
      yieldBuf(DD, zD) {
        this.index = DD;
        let {
          start: wD,
          buffer: pD
        } = this.buffer;
        return this.type = zD || pD.set.types[pD.buffer[DD]], this.from = wD + pD.buffer[DD + 1], this.to = wD + pD.buffer[DD + 2], !0
      }
      yield(DD) {
        return !!DD && (DD instanceof OD ? (this.buffer = null, this.yieldNode(DD)) : (this.buffer = DD.context, this.yieldBuf(DD.index, DD.type)))
      }
      toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
      }
      enterChild(DD, zD, wD) {
        if (!this.buffer) return this.yield(this._tree.nextChild(DD < 0 ? this._tree._tree.children.length - 1 : 0, DD, zD, wD, this.mode));
        let {
          buffer: pD
        } = this.buffer, sD = pD.findChild(this.index + 4, pD.buffer[this.index + 3], DD, zD - this.buffer.start, wD);
        return !(sD < 0) && (this.stack.push(this.index), this.yieldBuf(sD))
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
      enter(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.mode;
        return this.buffer ? !(wD & fD.ExcludeBuffers) && this.enterChild(1, DD, zD) : this.yield(this._tree.enter(DD, zD, wD))
      }
      parent() {
        if (!this.buffer) return this.yieldNode(this.mode & fD.IncludeAnonymous ? this._tree._parent : this._tree.parent);
        if (this.stack.length) return this.yieldBuf(this.stack.pop());
        let DD = this.mode & fD.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        return this.buffer = null, this.yieldNode(DD)
      }
      sibling(DD) {
        if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + DD, DD, 0, 4, this.mode));
        let {
          buffer: zD
        } = this.buffer, wD = this.stack.length - 1;
        if (DD < 0) {
          let DD = wD < 0 ? 0 : this.stack[wD] + 4;
          if (this.index != DD) return this.yieldBuf(zD.findChild(DD, this.index, -1, 0, 4))
        } else {
          let DD = zD.buffer[this.index + 3];
          if (DD < (wD < 0 ? zD.buffer.length : zD.buffer[this.stack[wD] + 3])) return this.yieldBuf(DD)
        }
        return wD < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + DD, DD, 0, 4, this.mode))
      }
      nextSibling() {
        return this.sibling(1)
      }
      prevSibling() {
        return this.sibling(-1)
      }
      atLastNode(DD) {
        let zD, wD, {
          buffer: pD
        } = this;
        if (pD) {
          if (DD > 0) {
            if (this.index < pD.buffer.buffer.length) return !1
          } else
            for (let DD = 0; DD < this.index; DD++)
              if (pD.buffer.buffer[DD + 3] < this.index) return !1;
          ({
            index: zD,
            parent: wD
          } = pD)
        } else({
          index: zD,
          _parent: wD
        } = this._tree);
        for (; wD;
          ({
            index: zD,
            _parent: wD
          } = wD))
          if (zD > -1)
            for (let pD = zD + DD, sD = DD < 0 ? -1 : wD._tree.children.length; pD != sD; pD += DD) {
              let DD = wD._tree.children[pD];
              if (this.mode & fD.IncludeAnonymous || DD instanceof GD || !DD.type.isAnonymous || xD(DD)) return !1
            }
        return !0
      }
      move(DD, zD) {
        if (zD && this.enterChild(DD, 0, 4)) return !0;
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
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        for (;
          (this.from == this.to || (zD < 1 ? this.from >= DD : this.from > DD) || (zD > -1 ? this.to <= DD : this.to < DD)) && this.parent(););
        for (; this.enterChild(1, DD, zD););
        return this
      }
      get node() {
        if (!this.buffer) return this._tree;
        let DD = this.bufferNode,
          zD = null,
          wD = 0;
        if (DD && DD.context == this.buffer) DD: for (let pD = this.index, sD = this.stack.length; sD >= 0;) {
          for (let KD = DD; KD; KD = KD._parent)
            if (KD.index == pD) {
              if (pD == this.index) return KD;
              zD = KD, wD = sD + 1;
              break DD
            } pD = this.stack[--sD]
        }
        for (let pD = wD; pD < this.stack.length; pD++) zD = new XD(this.buffer, zD, this.stack[pD]);
        return this.bufferNode = new XD(this.buffer, zD, this.index)
      }
      get tree() {
        return this.buffer ? null : this._tree._tree
      }
      iterate(DD, zD) {
        for (let wD = 0;;) {
          let pD = !1;
          if (this.type.isAnonymous || !1 !== DD(this)) {
            if (this.firstChild()) {
              wD++;
              continue
            }
            this.type.isAnonymous || (pD = !0)
          }
          for (;;) {
            if (pD && zD && zD(this), pD = this.type.isAnonymous, !wD) return;
            if (this.nextSibling()) break;
            this.parent(), wD--, pD = !0
          }
        }
      }
      matchContext(DD) {
        if (!this.buffer) return ED(this.node.parent, DD);
        let {
          buffer: zD
        } = this.buffer, {
          types: wD
        } = zD.set;
        for (let pD = DD.length - 1, sD = this.stack.length - 1; pD >= 0; sD--) {
          if (sD < 0) return ED(this._tree, DD, pD);
          let KD = wD[zD.buffer[this.stack[sD]]];
          if (!KD.isAnonymous) {
            if (DD[pD] && DD[pD] != KD.name) return !1;
            pD--
          }
        }
        return !0
      }
    }

    function xD(DD) {
      return DD.children.some((DD => DD instanceof GD || !DD.type.isAnonymous || xD(DD)))
    }
    const TD = new WeakMap;

    function bD(DD, zD) {
      if (!DD.isAnonymous || zD instanceof GD || zD.type != DD) return 1;
      let wD = TD.get(zD);
      if (null == wD) {
        wD = 1;
        for (let pD of zD.children) {
          if (pD.type != DD || !(pD instanceof ID)) {
            wD = 1;
            break
          }
          wD += bD(DD, pD)
        }
        TD.set(zD, wD)
      }
      return wD
    }

    function jD(DD, zD, wD, pD, sD, KD, rD, LD, cD) {
      let gD = 0;
      for (let fD = pD; fD < sD; fD++) gD += bD(DD, zD[fD]);
      let RD = Math.ceil(1.5 * gD / 8),
        AD = [],
        UD = [];
      return function zD(wD, pD, sD, rD, LD) {
        for (let gD = sD; gD < rD;) {
          let sD = gD,
            fD = pD[gD],
            ID = bD(DD, wD[gD]);
          for (gD++; gD < rD; gD++) {
            let zD = bD(DD, wD[gD]);
            if (ID + zD >= RD) break;
            ID += zD
          }
          if (gD == sD + 1) {
            if (ID > RD) {
              let DD = wD[sD];
              zD(DD.children, DD.positions, 0, DD.children.length, pD[sD] + LD);
              continue
            }
            AD.push(wD[sD])
          } else {
            let zD = pD[gD - 1] + wD[gD - 1].length - fD;
            AD.push(jD(DD, wD, pD, sD, gD, fD, zD, null, cD))
          }
          UD.push(fD + LD - KD)
        }
      }(zD, wD, pD, sD, 0), (LD || cD)(AD, UD, rD)
    }
    class dD {
      constructor() {
        this.map = new WeakMap
      }
      setBuffer(DD, zD, wD) {
        let pD = this.map.get(DD);
        pD || this.map.set(DD, pD = new Map), pD.set(zD, wD)
      }
      getBuffer(DD, zD) {
        let wD = this.map.get(DD);
        return wD && wD.get(zD)
      }
      set(DD, zD) {
        DD instanceof XD ? this.setBuffer(DD.context.buffer, DD.index, zD) : DD instanceof OD && this.map.set(DD.tree, zD)
      }
      get(DD) {
        return DD instanceof XD ? this.getBuffer(DD.context.buffer, DD.index) : DD instanceof OD ? this.map.get(DD.tree) : void 0
      }
      cursorSet(DD, zD) {
        DD.buffer ? this.setBuffer(DD.buffer.buffer, DD.index, zD) : this.map.set(DD.tree, zD)
      }
      cursorGet(DD) {
        return DD.buffer ? this.getBuffer(DD.buffer.buffer, DD.index) : this.map.get(DD.tree)
      }
    }
    class SD {
      constructor(DD, zD, wD, pD) {
        let sD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          KD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.from = DD, this.to = zD, this.tree = wD, this.offset = pD, this.open = (sD ? 1 : 0) | (KD ? 2 : 0)
      }
      get openStart() {
        return (1 & this.open) > 0
      }
      get openEnd() {
        return (2 & this.open) > 0
      }
      static addTree(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          pD = [new SD(0, DD.length, DD, 0, !1, wD)];
        for (let sD of zD) sD.to > DD.length && pD.push(sD);
        return pD
      }
      static applyChanges(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
        if (!zD.length) return DD;
        let pD = [],
          sD = 1,
          KD = DD.length ? DD[0] : null;
        for (let rD = 0, LD = 0, cD = 0;; rD++) {
          let gD = rD < zD.length ? zD[rD] : null,
            RD = gD ? gD.fromA : 1e9;
          if (RD - LD >= wD)
            for (; KD && KD.from < RD;) {
              let zD = KD;
              if (LD >= zD.from || RD <= zD.to || cD) {
                let DD = Math.max(zD.from, LD) - cD,
                  wD = Math.min(zD.to, RD) - cD;
                zD = DD >= wD ? null : new SD(DD, wD, zD.tree, zD.offset + cD, rD > 0, !!gD)
              }
              if (zD && pD.push(zD), KD.to > RD) break;
              KD = sD < DD.length ? DD[sD++] : null
            }
          if (!gD) break;
          LD = gD.toA, cD = gD.toA - gD.toB
        }
        return pD
      }
    }
    class iD {
      startParse(DD, zD, wD) {
        return "string" == typeof DD && (DD = new lD(DD)), wD = wD ? wD.length ? wD.map((DD => new KD(DD.from, DD.to))) : [new KD(0, 0)] : [new KD(0, DD.length)], this.createParse(DD, zD || [], wD)
      }
      parse(DD, zD, wD) {
        let pD = this.startParse(DD, zD, wD);
        for (;;) {
          let DD = pD.advance();
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
      read(DD, zD) {
        return this.string.slice(DD, zD)
      }
    }
    new rD({
      perNode: !0
    })
  },
  41239: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => UD,
      g: () => cD,
      k: () => AD,
      n: () => TD
    });
    var pD = wD(41233);
    let sD = 0;
    class KD {
      constructor(DD, zD, wD, pD) {
        this.name = DD, this.set = zD, this.base = wD, this.modified = pD, this.id = sD++
      }
      toString() {
        let {
          name: DD
        } = this;
        for (let zD of this.modified) zD.name && (DD = `${zD.name}(${DD})`);
        return DD
      }
      static define(DD, zD) {
        let wD = "string" == typeof DD ? DD : "?";
        if (DD instanceof KD && (zD = DD), null === zD || void 0 === zD ? void 0 : zD.base) throw new Error("Can not derive from a modified tag");
        let pD = new KD(wD, [], null, []);
        if (pD.set.push(pD), zD)
          for (let sD of zD.set) pD.set.push(sD);
        return pD
      }
      static defineModifier(DD) {
        let zD = new LD(DD);
        return DD => DD.modified.indexOf(zD) > -1 ? DD : LD.get(DD.base || DD, DD.modified.concat(zD).sort(((DD, zD) => DD.id - zD.id)))
      }
    }
    let rD = 0;
    class LD {
      constructor(DD) {
        this.name = DD, this.instances = [], this.id = rD++
      }
      static get(DD, zD) {
        if (!zD.length) return DD;
        let wD = zD[0].instances.find((wD => {
          return wD.base == DD && (pD = zD, sD = wD.modified, pD.length == sD.length && pD.every(((DD, zD) => DD == sD[zD])));
          var pD, sD
        }));
        if (wD) return wD;
        let pD = [],
          sD = new KD(DD.name, pD, DD, zD);
        for (let KD of zD) KD.instances.push(sD);
        let rD = function(DD) {
          let zD = [
            []
          ];
          for (let wD = 0; wD < DD.length; wD++)
            for (let pD = 0, sD = zD.length; pD < sD; pD++) zD.push(zD[pD].concat(DD[wD]));
          return zD.sort(((DD, zD) => zD.length - DD.length))
        }(zD);
        for (let KD of DD.set)
          if (!KD.modified.length)
            for (let DD of rD) pD.push(LD.get(KD, DD));
        return sD
      }
    }

    function cD(DD) {
      let zD = Object.create(null);
      for (let wD in DD) {
        let pD = DD[wD];
        Array.isArray(pD) || (pD = [pD]);
        for (let DD of wD.split(" "))
          if (DD) {
            let wD = [],
              sD = 2,
              KD = DD;
            for (let zD = 0;;) {
              if ("..." == KD && zD > 0 && zD + 3 == DD.length) {
                sD = 1;
                break
              }
              let pD = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(KD);
              if (!pD) throw new RangeError("Invalid path: " + DD);
              if (wD.push("*" == pD[0] ? "" : '"' == pD[0][0] ? JSON.parse(pD[0]) : pD[0]), zD += pD[0].length, zD == DD.length) break;
              let rD = DD[zD++];
              if (zD == DD.length && "!" == rD) {
                sD = 0;
                break
              }
              if ("/" != rD) throw new RangeError("Invalid path: " + DD);
              KD = DD.slice(zD)
            }
            let rD = wD.length - 1,
              LD = wD[rD];
            if (!LD) throw new RangeError("Invalid path: " + DD);
            let cD = new RD(pD, sD, rD > 0 ? wD.slice(0, rD) : null);
            zD[LD] = cD.sort(zD[LD])
          }
      }
      return gD.add(zD)
    }
    const gD = new pD.g({
      combine(DD, zD) {
        let wD, pD, sD;
        for (; DD || zD;) {
          if (!DD || zD && DD.depth >= zD.depth ? (sD = zD, zD = zD.next) : (sD = DD, DD = DD.next), wD && wD.mode == sD.mode && !sD.context && !wD.context) continue;
          let KD = new RD(sD.tags, sD.mode, sD.context);
          wD ? wD.next = KD : pD = KD, wD = KD
        }
        return pD
      }
    });
    class RD {
      constructor(DD, zD, wD, pD) {
        this.tags = DD, this.mode = zD, this.context = wD, this.next = pD
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

    function AD(DD, zD) {
      let wD = Object.create(null);
      for (let KD of DD)
        if (Array.isArray(KD.tag))
          for (let DD of KD.tag) wD[DD.id] = KD.class;
        else wD[KD.tag.id] = KD.class;
      let {
        scope: pD,
        all: sD = null
      } = zD || {};
      return {
        style: DD => {
          let zD = sD;
          for (let pD of DD)
            for (let DD of pD.set) {
              let pD = wD[DD.id];
              if (pD) {
                zD = zD ? zD + " " + pD : pD;
                break
              }
            }
          return zD
        },
        scope: pD
      }
    }

    function UD(DD, zD, wD) {
      let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : DD.length,
        KD = new fD(pD, Array.isArray(zD) ? zD : [zD], wD);
      KD.highlightRange(DD.cursor(), pD, sD, "", KD.highlighters), KD.flush(sD)
    }
    RD.empty = new RD([], 2, null);
    class fD {
      constructor(DD, zD, wD) {
        this.at = DD, this.highlighters = zD, this.span = wD, this.class = ""
      }
      startSpan(DD, zD) {
        zD != this.class && (this.flush(DD), DD > this.at && (this.at = DD), this.class = zD)
      }
      flush(DD) {
        DD > this.at && this.class && this.span(this.at, DD, this.class)
      }
      highlightRange(DD, zD, wD, sD, KD) {
        let {
          type: rD,
          from: LD,
          to: cD
        } = DD;
        if (LD >= wD || cD <= zD) return;
        rD.isTop && (KD = this.highlighters.filter((DD => !DD.scope || DD.scope(rD))));
        let AD = sD,
          UD = function(DD) {
            let zD = DD.type.prop(gD);
            for (; zD && zD.context && !DD.matchContext(zD.context);) zD = zD.next;
            return zD || null
          }(DD) || RD.empty,
          fD = function(DD, zD) {
            let wD = null;
            for (let pD of DD) {
              let DD = pD.style(zD);
              DD && (wD = wD ? wD + " " + DD : DD)
            }
            return wD
          }(KD, UD.tags);
        if (fD && (AD && (AD += " "), AD += fD, 1 == UD.mode && (sD += (sD ? " " : "") + fD)), this.startSpan(Math.max(zD, LD), AD), UD.opaque) return;
        let ID = DD.tree && DD.tree.prop(pD.g.mounted);
        if (ID && ID.overlay) {
          let pD = DD.node.enter(ID.overlay[0].from + LD, 1),
            rD = this.highlighters.filter((DD => !DD.scope || DD.scope(ID.tree.type))),
            gD = DD.firstChild();
          for (let RD = 0, UD = LD;; RD++) {
            let fD = RD < ID.overlay.length ? ID.overlay[RD] : null,
              BD = fD ? fD.from + LD : cD,
              GD = Math.max(zD, UD),
              hD = Math.min(wD, BD);
            if (GD < hD && gD)
              for (; DD.from < hD && (this.highlightRange(DD, GD, hD, sD, KD), this.startSpan(Math.min(hD, DD.to), AD), !(DD.to >= BD) && DD.nextSibling()););
            if (!fD || BD > wD) break;
            UD = fD.to + LD, UD > zD && (this.highlightRange(pD.cursor(), Math.max(zD, fD.from + LD), Math.min(wD, UD), "", rD), this.startSpan(Math.min(wD, UD), AD))
          }
          gD && DD.parent()
        } else if (DD.firstChild()) {
          ID && (sD = "");
          do {
            if (!(DD.to <= zD)) {
              if (DD.from >= wD) break;
              this.highlightRange(DD, zD, wD, sD, KD), this.startSpan(Math.min(wD, DD.to), AD)
            }
          } while (DD.nextSibling());
          DD.parent()
        }
      }
    }
    const ID = KD.define,
      BD = ID(),
      GD = ID(),
      hD = ID(GD),
      nD = ID(GD),
      MD = ID(),
      OD = ID(MD),
      JD = ID(MD),
      ED = ID(),
      QD = ID(ED),
      XD = ID(),
      VD = ID(),
      PD = ID(),
      CD = ID(PD),
      xD = ID(),
      TD = {
        comment: BD,
        lineComment: ID(BD),
        blockComment: ID(BD),
        docComment: ID(BD),
        name: GD,
        variableName: ID(GD),
        typeName: hD,
        tagName: ID(hD),
        propertyName: nD,
        attributeName: ID(nD),
        className: ID(GD),
        labelName: ID(GD),
        namespace: ID(GD),
        macroName: ID(GD),
        literal: MD,
        string: OD,
        docString: ID(OD),
        character: ID(OD),
        attributeValue: ID(OD),
        number: JD,
        integer: ID(JD),
        float: ID(JD),
        bool: ID(MD),
        regexp: ID(MD),
        escape: ID(MD),
        color: ID(MD),
        url: ID(MD),
        keyword: XD,
        self: ID(XD),
        null: ID(XD),
        atom: ID(XD),
        unit: ID(XD),
        modifier: ID(XD),
        operatorKeyword: ID(XD),
        controlKeyword: ID(XD),
        definitionKeyword: ID(XD),
        moduleKeyword: ID(XD),
        operator: VD,
        derefOperator: ID(VD),
        arithmeticOperator: ID(VD),
        logicOperator: ID(VD),
        bitwiseOperator: ID(VD),
        compareOperator: ID(VD),
        updateOperator: ID(VD),
        definitionOperator: ID(VD),
        typeOperator: ID(VD),
        controlOperator: ID(VD),
        punctuation: PD,
        separator: ID(PD),
        bracket: CD,
        angleBracket: ID(CD),
        squareBracket: ID(CD),
        paren: ID(CD),
        brace: ID(CD),
        content: ED,
        heading: QD,
        heading1: ID(QD),
        heading2: ID(QD),
        heading3: ID(QD),
        heading4: ID(QD),
        heading5: ID(QD),
        heading6: ID(QD),
        contentSeparator: ID(ED),
        list: ID(ED),
        quote: ID(ED),
        emphasis: ID(ED),
        strong: ID(ED),
        link: ID(ED),
        monospace: ID(ED),
        strikethrough: ID(ED),
        inserted: ID(),
        deleted: ID(),
        changed: ID(),
        invalid: ID(),
        meta: xD,
        documentMeta: ID(xD),
        annotation: ID(xD),
        processingInstruction: ID(xD),
        definition: KD.defineModifier("definition"),
        constant: KD.defineModifier("constant"),
        function: KD.defineModifier("function"),
        standard: KD.defineModifier("standard"),
        local: KD.defineModifier("local"),
        special: KD.defineModifier("special")
      };
    for (let bD in TD) {
      let DD = TD[bD];
      DD instanceof KD && (DD.name = bD)
    }
    AD([{
      tag: TD.link,
      class: "tok-link"
    }, {
      tag: TD.heading,
      class: "tok-heading"
    }, {
      tag: TD.emphasis,
      class: "tok-emphasis"
    }, {
      tag: TD.strong,
      class: "tok-strong"
    }, {
      tag: TD.keyword,
      class: "tok-keyword"
    }, {
      tag: TD.atom,
      class: "tok-atom"
    }, {
      tag: TD.bool,
      class: "tok-bool"
    }, {
      tag: TD.url,
      class: "tok-url"
    }, {
      tag: TD.labelName,
      class: "tok-labelName"
    }, {
      tag: TD.inserted,
      class: "tok-inserted"
    }, {
      tag: TD.deleted,
      class: "tok-deleted"
    }, {
      tag: TD.literal,
      class: "tok-literal"
    }, {
      tag: TD.string,
      class: "tok-string"
    }, {
      tag: TD.number,
      class: "tok-number"
    }, {
      tag: [TD.regexp, TD.escape, TD.special(TD.string)],
      class: "tok-string2"
    }, {
      tag: TD.variableName,
      class: "tok-variableName"
    }, {
      tag: TD.local(TD.variableName),
      class: "tok-variableName tok-local"
    }, {
      tag: TD.definition(TD.variableName),
      class: "tok-variableName tok-definition"
    }, {
      tag: TD.special(TD.variableName),
      class: "tok-variableName2"
    }, {
      tag: TD.definition(TD.propertyName),
      class: "tok-propertyName tok-definition"
    }, {
      tag: TD.typeName,
      class: "tok-typeName"
    }, {
      tag: TD.namespace,
      class: "tok-namespace"
    }, {
      tag: TD.className,
      class: "tok-className"
    }, {
      tag: TD.macroName,
      class: "tok-macroName"
    }, {
      tag: TD.propertyName,
      class: "tok-propertyName"
    }, {
      tag: TD.operator,
      class: "tok-operator"
    }, {
      tag: TD.comment,
      class: "tok-comment"
    }, {
      tag: TD.meta,
      class: "tok-meta"
    }, {
      tag: TD.invalid,
      class: "tok-invalid"
    }, {
      tag: TD.punctuation,
      class: "tok-punctuation"
    }])
  },
  41248: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => LD.i,
      h: () => rD.u,
      j: () => rD.E,
      k: () => rD.G,
      l: () => LD.n,
      n: () => Xw,
      q: () => LD.Y,
      s: () => LD.sb
    });
    var pD = wD(1376),
      sD = wD(1371),
      KD = wD(58),
      rD = wD(41212),
      LD = wD(41217),
      cD = wD(41231),
      gD = wD(41233);

    function RD(DD, zD) {
      return wD => {
        let {
          state: pD,
          dispatch: sD
        } = wD;
        if (pD.readOnly) return !1;
        let KD = DD(zD, pD);
        return !!KD && (sD(pD.update(KD)), !0)
      }
    }
    const AD = RD(hD, 0),
      UD = RD(GD, 0),
      fD = RD(((DD, zD) => GD(DD, zD, function(DD) {
        let zD = [];
        for (let wD of DD.selection.rG) {
          let pD = DD.doc.lineAt(wD.from),
            sD = wD.to <= pD.to ? pD : DD.doc.lineAt(wD.to);
          sD.from > pD.from && sD.from == wD.to && (sD = wD.to == pD.to + 1 ? pD : DD.doc.lineAt(wD.to - 1));
          let KD = zD.length - 1;
          KD >= 0 && zD[KD].to > pD.from ? zD[KD].to = sD.to : zD.push({
            from: pD.from + /^\s*/.exec(pD.text)[0].length,
            to: sD.to
          })
        }
        return zD
      }(zD))), 0);

    function ID(DD, zD) {
      let wD = DD.languageDataAt("commentTokens", zD, 1);
      return wD.length ? wD[0] : {}
    }
    const BD = 50;

    function GD(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zD.selection.rG,
        pD = wD.map((DD => ID(zD, DD.from).block));
      if (!pD.every((DD => DD))) return null;
      let sD = wD.map(((DD, wD) => function(DD, zD, wD, pD) {
        let sD, KD, {
            open: rD,
            close: LD
          } = zD,
          cD = DD.sliceDoc(wD - BD, wD),
          gD = DD.sliceDoc(pD, pD + BD),
          RD = /\s*$/.exec(cD)[0].length,
          AD = /^\s*/.exec(gD)[0].length,
          UD = cD.length - RD;
        if (cD.slice(UD - rD.length, UD) == rD && gD.slice(AD, AD + LD.length) == LD) return {
          open: {
            pos: wD - RD,
            margin: RD && 1
          },
          close: {
            pos: pD + AD,
            margin: AD && 1
          }
        };
        pD - wD <= 2 * BD ? sD = KD = DD.sliceDoc(wD, pD) : (sD = DD.sliceDoc(wD, wD + BD), KD = DD.sliceDoc(pD - BD, pD));
        let fD = /^\s*/.exec(sD)[0].length,
          ID = /\s*$/.exec(KD)[0].length,
          GD = KD.length - ID - LD.length;
        return sD.slice(fD, fD + rD.length) == rD && KD.slice(GD, GD + LD.length) == LD ? {
          open: {
            pos: wD + fD + rD.length,
            margin: /\s/.test(sD.charAt(fD + rD.length)) ? 1 : 0
          },
          close: {
            pos: pD - ID - LD.length,
            margin: /\s/.test(KD.charAt(GD - 1)) ? 1 : 0
          }
        } : null
      }(zD, pD[wD], DD.from, DD.to)));
      if (2 != DD && !sD.every((DD => DD))) return {
        changes: zD.changes(wD.map(((DD, zD) => sD[zD] ? [] : [{
          from: DD.from,
          insert: pD[zD].open + " "
        }, {
          from: DD.to,
          insert: " " + pD[zD].close
        }])))
      };
      if (1 != DD && sD.some((DD => DD))) {
        let DD = [];
        for (let zD, wD = 0; wD < sD.length; wD++)
          if (zD = sD[wD]) {
            let sD = pD[wD],
              {
                open: KD,
                close: rD
              } = zD;
            DD.push({
              from: KD.pos - sD.open.length,
              to: KD.pos + KD.margin
            }, {
              from: rD.pos - rD.margin,
              to: rD.pos + sD.close.length
            })
          } return {
          changes: DD
        }
      }
      return null
    }

    function hD(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zD.selection.rG,
        pD = [],
        sD = -1;
      DD: for (let {
          from: KD,
          to: rD
        }
        of wD) {
        let DD, wD = pD.length,
          LD = 1e9;
        for (let cD = KD; cD <= rD;) {
          let wD = zD.doc.lineAt(cD);
          if (void 0 == DD && (DD = ID(zD, wD.from).line, !DD)) continue DD;
          if (wD.from > sD && (KD == rD || rD > wD.from)) {
            sD = wD.from;
            let zD = /^\s*/.exec(wD.text)[0].length,
              KD = zD == wD.length,
              rD = wD.text.slice(zD, zD + DD.length) == DD ? zD : -1;
            zD < wD.text.length && zD < LD && (LD = zD), pD.push({
              line: wD,
              comment: rD,
              token: DD,
              indent: zD,
              empty: KD,
              single: !1
            })
          }
          cD = wD.to + 1
        }
        if (LD < 1e9)
          for (let zD = wD; zD < pD.length; zD++) pD[zD].indent < pD[zD].line.text.length && (pD[zD].indent = LD);
        pD.length == wD + 1 && (pD[wD].single = !0)
      }
      if (2 != DD && pD.some((DD => DD.comment < 0 && (!DD.empty || DD.single)))) {
        let DD = [];
        for (let {
            line: zD,
            token: sD,
            indent: KD,
            empty: rD,
            single: LD
          }
          of pD) !LD && rD || DD.push({
          from: zD.from + KD,
          insert: sD + " "
        });
        let wD = zD.changes(DD);
        return {
          changes: wD,
          selection: zD.selection.map(wD, 1)
        }
      }
      if (1 != DD && pD.some((DD => DD.comment >= 0))) {
        let DD = [];
        for (let {
            line: zD,
            comment: wD,
            token: sD
          }
          of pD)
          if (wD >= 0) {
            let pD = zD.from + wD,
              KD = pD + sD.length;
            " " == zD.text[KD - zD.from] && KD++, DD.push({
              from: pD,
              to: KD
            })
          } return {
          changes: DD
        }
      }
      return null
    }
    const nD = rD.c.define(),
      MD = rD.c.define(),
      OD = rD.n.define(),
      JD = rD.n.define({
        combine: DD => (0, rD.W)(DD, {
          minDepth: 100,
          newGroupDelay: 500,
          joinToEvent: (DD, zD) => zD
        }, {
          minDepth: Math.max,
          newGroupDelay: Math.min,
          joinToEvent: (DD, zD) => (wD, pD) => DD(wD, pD) || zD(wD, pD)
        })
      }),
      ED = rD.G.define({
        create: () => ZD.empty,
        update(DD, zD) {
          let wD = zD.state.facet(JD),
            pD = zD.annotation(nD);
          if (pD) {
            let sD = xD.fromTransaction(zD, pD.selection),
              KD = pD.side,
              rD = 0 == KD ? DD.undone : DD.done;
            return rD = sD ? TD(rD, rD.length, wD.minDepth, sD) : SD(rD, zD.startState.selection), new ZD(0 == KD ? pD.rest : rD, 0 == KD ? rD : pD.rest)
          }
          let sD = zD.annotation(MD);
          if ("full" != sD && "before" != sD || (DD = DD.isolate()), !1 === zD.annotation(rD.M.addToHistory)) return zD.changes.empty ? DD : DD.addMapping(zD.changes.desc);
          let KD = xD.fromTransaction(zD),
            LD = zD.annotation(rD.M.time),
            cD = zD.annotation(rD.M.userEvent);
          return KD ? DD = DD.addChanges(KD, LD, cD, wD, zD) : zD.selection && (DD = DD.addSelection(zD.startState.selection, LD, cD, wD.newGroupDelay)), "full" != sD && "after" != sD || (DD = DD.isolate()), DD
        },
        toJSON: DD => ({
          done: DD.done.map((DD => DD.toJSON())),
          undone: DD.undone.map((DD => DD.toJSON()))
        }),
        fromJSON: DD => new ZD(DD.done.map(xD.fromJSON), DD.undone.map(xD.fromJSON))
      });

    function QD(DD, zD) {
      return function(wD) {
        let {
          state: pD,
          dispatch: sD
        } = wD;
        if (!zD && pD.readOnly) return !1;
        let KD = pD.field(ED, !1);
        if (!KD) return !1;
        let rD = KD.pop(DD, pD, zD);
        return !!rD && (sD(rD), !0)
      }
    }
    const XD = QD(0, !1),
      VD = QD(1, !1),
      PD = QD(0, !0),
      CD = QD(1, !0);
    class xD {
      constructor(DD, zD, wD, pD, sD) {
        this.changes = DD, this.effects = zD, this.mapped = wD, this.startSelection = pD, this.selectionsAfter = sD
      }
      setSelAfter(DD) {
        return new xD(this.changes, this.effects, this.mapped, this.startSelection, DD)
      }
      toJSON() {
        var DD, zD, wD;
        return {
          changes: null === (DD = this.changes) || void 0 === DD ? void 0 : DD.toJSON(),
          mapped: null === (zD = this.mapped) || void 0 === zD ? void 0 : zD.toJSON(),
          startSelection: null === (wD = this.startSelection) || void 0 === wD ? void 0 : wD.toJSON(),
          selectionsAfter: this.selectionsAfter.map((DD => DD.toJSON()))
        }
      }
      static fromJSON(DD) {
        return new xD(DD.changes && rD.ChangeSet.fromJSON(DD.changes), [], DD.mapped && rD.e.fromJSON(DD.mapped), DD.startSelection && rD.j.fromJSON(DD.startSelection), DD.selectionsAfter.map(rD.j.fromJSON))
      }
      static fromTransaction(DD, zD) {
        let wD = jD;
        for (let pD of DD.startState.facet(OD)) {
          let zD = pD(DD);
          zD.length && (wD = wD.concat(zD))
        }
        return !wD.length && DD.changes.empty ? null : new xD(DD.changes.invert(DD.startState.doc), wD, void 0, zD || DD.startState.selection, jD)
      }
      static selection(DD) {
        return new xD(void 0, jD, void 0, void 0, DD)
      }
    }

    function TD(DD, zD, wD, pD) {
      let sD = zD + 1 > wD + 20 ? zD - wD - 1 : 0,
        KD = DD.slice(sD, zD);
      return KD.push(pD), KD
    }

    function bD(DD, zD) {
      return DD.length ? zD.length ? DD.concat(zD) : DD : zD
    }
    const jD = [],
      dD = 200;

    function SD(DD, zD) {
      if (DD.length) {
        let wD = DD[DD.length - 1],
          pD = wD.selectionsAfter.slice(Math.max(0, wD.selectionsAfter.length - dD));
        return pD.length && pD[pD.length - 1].eq(zD) ? DD : (pD.push(zD), TD(DD, DD.length - 1, 1e9, wD.setSelAfter(pD)))
      }
      return [xD.selection([zD])]
    }

    function iD(DD) {
      let zD = DD[DD.length - 1],
        wD = DD.slice();
      return wD[DD.length - 1] = zD.setSelAfter(zD.selectionsAfter.slice(0, zD.selectionsAfter.length - 1)), wD
    }

    function lD(DD, zD) {
      if (!DD.length) return DD;
      let wD = DD.length,
        pD = jD;
      for (; wD;) {
        let sD = WD(DD[wD - 1], zD, pD);
        if (sD.changes && !sD.changes.empty || sD.effects.length) {
          let zD = DD.slice(0, wD);
          return zD[wD - 1] = sD, zD
        }
        zD = sD.mapped, wD--, pD = sD.selectionsAfter
      }
      return pD.length ? [xD.selection(pD)] : jD
    }

    function WD(DD, zD, wD) {
      let pD = bD(DD.selectionsAfter.length ? DD.selectionsAfter.map((DD => DD.map(zD))) : jD, wD);
      if (!DD.changes) return xD.selection(pD);
      let sD = DD.changes.map(zD),
        KD = zD.mapDesc(DD.changes, !0),
        LD = DD.mapped ? DD.mapped.composeDesc(KD) : KD;
      return new xD(sD, rD.E.mapEffects(DD.effects, zD), LD, DD.startSelection.map(KD), pD)
    }
    const ND = /^(input\.type|delete)($|\.)/;
    class ZD {
      constructor(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        this.done = DD, this.undone = zD, this.prevTime = wD, this.prevUserEvent = pD
      }
      isolate() {
        return this.prevTime ? new ZD(this.done, this.undone) : this
      }
      addChanges(DD, zD, wD, pD, sD) {
        let KD = this.done,
          LD = KD[KD.length - 1];
        return KD = LD && LD.changes && !LD.changes.empty && DD.changes && (!wD || ND.test(wD)) && (!LD.selectionsAfter.length && zD - this.prevTime < pD.newGroupDelay && pD.joinToEvent(sD, function(DD, zD) {
          let wD = [],
            pD = !1;
          return DD.iterChangedRanges(((DD, zD) => wD.push(DD, zD))), zD.iterChangedRanges(((DD, zD, sD, KD) => {
            for (let rD = 0; rD < wD.length;) {
              let DD = wD[rD++],
                zD = wD[rD++];
              KD >= DD && sD <= zD && (pD = !0)
            }
          })), pD
        }(LD.changes, DD.changes)) || "input.type.compose" == wD) ? TD(KD, KD.length - 1, pD.minDepth, new xD(DD.changes.compose(LD.changes), bD(rD.E.mapEffects(DD.effects, LD.changes), LD.effects), LD.mapped, LD.startSelection, jD)) : TD(KD, KD.length, pD.minDepth, DD), new ZD(KD, jD, zD, wD)
      }
      addSelection(DD, zD, wD, pD) {
        let sD = this.done.length ? this.done[this.done.length - 1].selectionsAfter : jD;
        return sD.length > 0 && zD - this.prevTime < pD && wD == this.prevUserEvent && wD && /^select($|\.)/.test(wD) && (KD = sD[sD.length - 1], rD = DD, KD.rG.length == rD.rG.length && 0 === KD.rG.filter(((DD, zD) => DD.empty != rD.rG[zD].empty)).length) ? this : new ZD(SD(this.done, DD), this.undone, zD, wD);
        var KD, rD
      }
      addMapping(DD) {
        return new ZD(lD(this.done, DD), lD(this.undone, DD), this.prevTime, this.prevUserEvent)
      }
      pop(DD, zD, wD) {
        let pD = 0 == DD ? this.done : this.undone;
        if (0 == pD.length) return null;
        let sD = pD[pD.length - 1],
          KD = sD.selectionsAfter[0] || (sD.startSelection ? sD.startSelection.map(sD.changes.invertedDesc, 1) : zD.selection);
        if (wD && sD.selectionsAfter.length) return zD.update({
          selection: sD.selectionsAfter[sD.selectionsAfter.length - 1],
          annotations: nD.of({
            side: DD,
            rest: iD(pD),
            selection: KD
          }),
          userEvent: 0 == DD ? "select.undo" : "select.redo",
          scrollIntoView: !0
        });
        if (sD.changes) {
          let wD = 1 == pD.length ? jD : pD.slice(0, pD.length - 1);
          return sD.mapped && (wD = lD(wD, sD.mapped)), zD.update({
            changes: sD.changes,
            selection: sD.startSelection,
            effects: sD.effects,
            annotations: nD.of({
              side: DD,
              rest: wD,
              selection: KD
            }),
            filter: !1,
            userEvent: 0 == DD ? "undo" : "redo",
            scrollIntoView: !0
          })
        }
        return null
      }
    }
    ZD.empty = new ZD(jD, jD);
    const yD = [{
      key: "Mod-z",
      run: XD,
      preventDefault: !0
    }, {
      key: "Mod-y",
      mac: "Mod-Shift-z",
      run: VD,
      preventDefault: !0
    }, {
      linux: "Ctrl-Shift-z",
      run: VD,
      preventDefault: !0
    }, {
      key: "Mod-u",
      run: PD,
      preventDefault: !0
    }, {
      key: "Alt-u",
      mac: "Mod-Shift-u",
      run: CD,
      preventDefault: !0
    }];

    function kD(DD, zD) {
      return rD.j.create(DD.rG.map(zD), DD.mainIndex)
    }

    function mD(DD, zD) {
      return DD.update({
        selection: zD,
        scrollIntoView: !0,
        userEvent: "select"
      })
    }

    function eD(DD, zD) {
      let {
        state: wD,
        dispatch: pD
      } = DD, sD = kD(wD.selection, zD);
      return !sD.eq(wD.selection, !0) && (pD(mD(wD, sD)), !0)
    }

    function oD(DD, zD) {
      return rD.j.cursor(zD ? DD.to : DD.from)
    }

    function aD(DD, zD) {
      return eD(DD, (wD => wD.empty ? DD.moveByChar(wD, zD) : oD(wD, zD)))
    }

    function uD(DD) {
      return DD.textDirectionAt(DD.state.selection.main.head) == LD.h.LTR
    }
    const vD = DD => aD(DD, !uD(DD)),
      tD = DD => aD(DD, uD(DD));

    function FD(DD, zD) {
      return eD(DD, (wD => wD.empty ? DD.moveByGroup(wD, zD) : oD(wD, zD)))
    }
    "undefined" != typeof Intl && Intl.Segmenter;

    function YD(DD, zD, wD) {
      if (zD.type.prop(wD)) return !0;
      let pD = zD.to - zD.from;
      return pD && (pD > 2 || /[^\s,.;:]/.test(DD.sliceDoc(zD.from, zD.to))) || zD.firstChild
    }

    function HD(DD, zD, wD) {
      let pD, sD, KD = (0, cD.jb)(DD).resolveInner(zD.head),
        LD = wD ? gD.g.closedBy : gD.g.openedBy;
      for (let rD = zD.head;;) {
        let zD = wD ? KD.childAfter(rD) : KD.childBefore(rD);
        if (!zD) break;
        YD(DD, zD, LD) ? KD = zD : rD = wD ? zD.to : zD.from
      }
      return sD = KD.type.prop(LD) && (pD = wD ? (0, cD.bb)(DD, KD.from, 1) : (0, cD.bb)(DD, KD.to, -1)) && pD.matched ? wD ? pD.end.to : pD.end.from : wD ? KD.to : KD.from, rD.j.cursor(sD, wD ? -1 : 1)
    }

    function qD(DD, zD) {
      return eD(DD, (wD => {
        if (!wD.empty) return oD(wD, zD);
        let pD = DD.moveVertically(wD, zD);
        return pD.head != wD.head ? pD : DD.moveToLineBoundary(wD, zD)
      }))
    }
    const Dz = DD => qD(DD, !1),
      zz = DD => qD(DD, !0);

    function wz(DD) {
      let zD, wD = DD.scrollDOM.clientHeight < DD.scrollDOM.scrollHeight - 2,
        pD = 0,
        sD = 0;
      if (wD) {
        for (let zD of DD.state.facet(LD.i.scrollMargins)) {
          let wD = zD(DD);
          (null === wD || void 0 === wD ? void 0 : wD.top) && (pD = Math.max(null === wD || void 0 === wD ? void 0 : wD.top, pD)), (null === wD || void 0 === wD ? void 0 : wD.bottom) && (sD = Math.max(null === wD || void 0 === wD ? void 0 : wD.bottom, sD))
        }
        zD = DD.scrollDOM.clientHeight - pD - sD
      } else zD = (DD.dom.ownerDocument.defaultView || window).innerHeight;
      return {
        marginTop: pD,
        marginBottom: sD,
        selfScroll: wD,
        height: Math.max(DD.defaultLineHeight, zD - 5)
      }
    }

    function pz(DD, zD) {
      let wD, pD = wz(DD),
        {
          state: sD
        } = DD,
        KD = kD(sD.selection, (wD => wD.empty ? DD.moveVertically(wD, zD, pD.height) : oD(wD, zD)));
      if (KD.eq(sD.selection)) return !1;
      if (pD.selfScroll) {
        let zD = DD.coordsAtPos(sD.selection.main.head),
          rD = DD.scrollDOM.getBoundingClientRect(),
          cD = rD.top + pD.marginTop,
          gD = rD.bottom - pD.marginBottom;
        zD && zD.top > cD && zD.bottom < gD && (wD = LD.i.scrollIntoView(KD.main.head, {
          y: "start",
          yMargin: zD.top - cD
        }))
      }
      return DD.dispatch(mD(sD, KD), {
        effects: wD
      }), !0
    }
    const sz = DD => pz(DD, !1),
      Kz = DD => pz(DD, !0);

    function rz(DD, zD, wD) {
      let pD = DD.lineBlockAt(zD.head),
        sD = DD.moveToLineBoundary(zD, wD);
      if (sD.head == zD.head && sD.head != (wD ? pD.to : pD.from) && (sD = DD.moveToLineBoundary(zD, wD, !1)), !wD && sD.head == pD.from && pD.length) {
        let wD = /^\s*/.exec(DD.state.sliceDoc(pD.from, Math.min(pD.from + 100, pD.to)))[0].length;
        wD && zD.head != pD.from + wD && (sD = rD.j.cursor(pD.from + wD))
      }
      return sD
    }

    function Lz(DD, zD, wD) {
      let pD = !1,
        sD = kD(DD.selection, (zD => {
          let sD = (0, cD.bb)(DD, zD.head, -1) || (0, cD.bb)(DD, zD.head, 1) || zD.head > 0 && (0, cD.bb)(DD, zD.head - 1, 1) || zD.head < DD.doc.length && (0, cD.bb)(DD, zD.head + 1, -1);
          if (!sD || !sD.end) return zD;
          pD = !0;
          let KD = sD.start.from == zD.head ? sD.end.to : sD.end.from;
          return wD ? rD.j.range(zD.anchor, KD) : rD.j.cursor(KD)
        }));
      return !!pD && (zD(mD(DD, sD)), !0)
    }

    function cz(DD, zD) {
      let wD = kD(DD.state.selection, (DD => {
        let wD = zD(DD);
        return rD.j.range(DD.anchor, wD.head, wD.goalColumn, wD.bidiLevel || void 0, wD.assoc)
      }));
      return !wD.eq(DD.state.selection) && (DD.dispatch(mD(DD.state, wD)), !0)
    }

    function gz(DD, zD) {
      return cz(DD, (wD => DD.moveByChar(wD, zD)))
    }
    const Rz = DD => gz(DD, !uD(DD)),
      Az = DD => gz(DD, uD(DD));

    function Uz(DD, zD) {
      return cz(DD, (wD => DD.moveByGroup(wD, zD)))
    }

    function fz(DD, zD) {
      return cz(DD, (wD => DD.moveVertically(wD, zD)))
    }
    const Iz = DD => fz(DD, !1),
      Bz = DD => fz(DD, !0);

    function Gz(DD, zD) {
      return cz(DD, (wD => DD.moveVertically(wD, zD, wz(DD).height)))
    }
    const hz = DD => Gz(DD, !1),
      nz = DD => Gz(DD, !0),
      Mz = DD => {
        let {
          state: zD,
          dispatch: wD
        } = DD;
        return wD(mD(zD, {
          anchor: 0
        })), !0
      },
      Oz = DD => {
        let {
          state: zD,
          dispatch: wD
        } = DD;
        return wD(mD(zD, {
          anchor: zD.doc.length
        })), !0
      },
      Jz = DD => {
        let {
          state: zD,
          dispatch: wD
        } = DD;
        return wD(mD(zD, {
          anchor: zD.selection.main.anchor,
          head: 0
        })), !0
      },
      Ez = DD => {
        let {
          state: zD,
          dispatch: wD
        } = DD;
        return wD(mD(zD, {
          anchor: zD.selection.main.anchor,
          head: zD.doc.length
        })), !0
      };

    function Qz(DD, zD) {
      let {
        state: wD
      } = DD, pD = wD.selection, sD = wD.selection.rG.slice();
      for (let KD of wD.selection.rG) {
        let pD = wD.doc.lineAt(KD.head);
        if (zD ? pD.to < DD.state.doc.length : pD.from > 0)
          for (let wD = KD;;) {
            let KD = DD.moveVertically(wD, zD);
            if (KD.head < pD.from || KD.head > pD.to) {
              sD.some((DD => DD.head == KD.head)) || sD.push(KD);
              break
            }
            if (KD.head == wD.head) break;
            wD = KD
          }
      }
      return sD.length != pD.rG.length && (DD.dispatch(mD(wD, rD.j.create(sD, sD.length - 1))), !0)
    }

    function Xz(DD, zD) {
      if (DD.state.readOnly) return !1;
      let wD = "delete.selection",
        {
          state: pD
        } = DD,
        sD = pD.changeByRange((pD => {
          let {
            from: sD,
            to: KD
          } = pD;
          if (sD == KD) {
            let rD = zD(pD);
            rD < sD ? (wD = "delete.backward", rD = Vz(DD, rD, !1)) : rD > sD && (wD = "delete.forward", rD = Vz(DD, rD, !0)), sD = Math.min(sD, rD), KD = Math.max(KD, rD)
          } else sD = Vz(DD, sD, !1), KD = Vz(DD, KD, !0);
          return sD == KD ? {
            range: pD
          } : {
            changes: {
              from: sD,
              to: KD
            },
            range: rD.j.cursor(sD, sD < pD.head ? -1 : 1)
          }
        }));
      return !sD.changes.empty && (DD.dispatch(pD.update(sD, {
        scrollIntoView: !0,
        userEvent: wD,
        effects: "delete.selection" == wD ? LD.i.announce.of(pD.phrase("Selection deleted")) : void 0
      })), !0)
    }

    function Vz(DD, zD, wD) {
      if (DD instanceof LD.i)
        for (let pD of DD.state.facet(LD.i.atomicRanges).map((zD => zD(DD)))) pD.between(zD, zD, ((DD, pD) => {
          DD < zD && pD > zD && (zD = wD ? pD : DD)
        }));
      return zD
    }
    const Pz = (DD, zD, wD) => Xz(DD, (pD => {
        let sD, KD, LD = pD.from,
          {
            state: gD
          } = DD,
          RD = gD.doc.lineAt(LD);
        if (wD && !zD && LD > RD.from && LD < RD.from + 200 && !/[^ \t]/.test(sD = RD.text.slice(0, LD - RD.from))) {
          if ("\t" == sD[sD.length - 1]) return LD - 1;
          let DD = (0, rD.Z)(sD, gD.tabSize) % (0, cD.T)(gD) || (0, cD.T)(gD);
          for (let zD = 0; zD < DD && " " == sD[sD.length - 1 - zD]; zD++) LD--;
          KD = LD
        } else KD = (0, rD._)(RD.text, LD - RD.from, zD, zD) + RD.from, KD == LD && RD.number != (zD ? gD.doc.lines : 1) ? KD += zD ? 1 : -1 : !zD && /[\ufe00-\ufe0f]/.test(RD.text.slice(KD - RD.from, LD - RD.from)) && (KD = (0, rD._)(RD.text, KD - RD.from, !1, !1) + RD.from);
        return KD
      })),
      Cz = DD => Pz(DD, !1, !0),
      xz = DD => Pz(DD, !0, !1),
      Tz = (DD, zD) => Xz(DD, (wD => {
        let pD = wD.head,
          {
            state: sD
          } = DD,
          KD = sD.doc.lineAt(pD),
          LD = sD.charCategorizer(pD);
        for (let DD = null;;) {
          if (pD == (zD ? KD.to : KD.from)) {
            pD == wD.head && KD.number != (zD ? sD.doc.lines : 1) && (pD += zD ? 1 : -1);
            break
          }
          let cD = (0, rD._)(KD.text, pD - KD.from, zD) + KD.from,
            gD = KD.text.slice(Math.min(pD, cD) - KD.from, Math.max(pD, cD) - KD.from),
            RD = LD(gD);
          if (null != DD && RD != DD) break;
          " " == gD && pD == wD.head || (DD = RD), pD = cD
        }
        return pD
      })),
      bz = DD => Tz(DD, !1);

    function jz(DD) {
      let zD = [],
        wD = -1;
      for (let pD of DD.selection.rG) {
        let sD = DD.doc.lineAt(pD.from),
          KD = DD.doc.lineAt(pD.to);
        if (pD.empty || pD.to != KD.from || (KD = DD.doc.lineAt(pD.to - 1)), wD >= sD.number) {
          let DD = zD[zD.length - 1];
          DD.to = KD.to, DD.rG.push(pD)
        } else zD.push({
          from: sD.from,
          to: KD.to,
          rG: [pD]
        });
        wD = KD.number + 1
      }
      return zD
    }

    function dz(DD, zD, wD) {
      if (DD.readOnly) return !1;
      let pD = [],
        sD = [];
      for (let KD of jz(DD)) {
        if (wD ? KD.to == DD.doc.length : 0 == KD.from) continue;
        let zD = DD.doc.lineAt(wD ? KD.to + 1 : KD.from - 1),
          LD = zD.length + 1;
        if (wD) {
          pD.push({
            from: KD.to,
            to: zD.to
          }, {
            from: KD.from,
            insert: zD.text + DD.lineBreak
          });
          for (let zD of KD.rG) sD.push(rD.j.range(Math.min(DD.doc.length, zD.anchor + LD), Math.min(DD.doc.length, zD.head + LD)))
        } else {
          pD.push({
            from: zD.from,
            to: KD.from
          }, {
            from: KD.to,
            insert: DD.lineBreak + zD.text
          });
          for (let DD of KD.rG) sD.push(rD.j.range(DD.anchor - LD, DD.head - LD))
        }
      }
      return !!pD.length && (zD(DD.update({
        changes: pD,
        scrollIntoView: !0,
        selection: rD.j.create(sD, DD.selection.mainIndex),
        userEvent: "move.line"
      })), !0)
    }

    function Sz(DD, zD, wD) {
      if (DD.readOnly) return !1;
      let pD = [];
      for (let KD of jz(DD)) wD ? pD.push({
        from: KD.from,
        insert: DD.doc.slice(KD.from, KD.to) + DD.lineBreak
      }) : pD.push({
        from: KD.to,
        insert: DD.lineBreak + DD.doc.slice(KD.from, KD.to)
      });
      let sD = DD.changes(pD);
      return zD(DD.update({
        changes: sD,
        selection: DD.selection.map(sD, wD ? 1 : -1),
        scrollIntoView: !0,
        userEvent: "input.copyline"
      })), !0
    }
    const iz = lz(!1);

    function lz(DD) {
      return zD => {
        let {
          state: wD,
          dispatch: pD
        } = zD;
        if (wD.readOnly) return !1;
        let sD = wD.changeByRange((zD => {
          let {
            from: pD,
            to: sD
          } = zD, KD = wD.doc.lineAt(pD), LD = !DD && pD == sD && function(DD, zD) {
            if (/\(\)|\[\]|\{\}/.test(DD.sliceDoc(zD - 1, zD + 1))) return {
              from: zD,
              to: zD
            };
            let wD, pD = (0, cD.jb)(DD).resolveInner(zD),
              sD = pD.childBefore(zD),
              KD = pD.childAfter(zD);
            return sD && KD && sD.to <= zD && KD.from >= zD && (wD = sD.type.prop(gD.g.closedBy)) && wD.indexOf(KD.name) > -1 && DD.doc.lineAt(sD.to).from == DD.doc.lineAt(KD.from).from && !/\S/.test(DD.sliceDoc(sD.to, KD.from)) ? {
              from: sD.to,
              to: KD.from
            } : null
          }(wD, pD);
          DD && (pD = sD = (sD <= KD.to ? KD : wD.doc.lineAt(sD)).to);
          let RD = new cD.i(wD, {
              simulateBreak: pD,
              simulateDoubleBreak: !!LD
            }),
            AD = (0, cD.X)(RD, pD);
          for (null == AD && (AD = (0, rD.Z)(/^\s*/.exec(wD.doc.lineAt(pD).text)[0], wD.tabSize)); sD < KD.to && /\s/.test(KD.text[sD - KD.from]);) sD++;
          LD ? ({
            from: pD,
            to: sD
          } = LD) : pD > KD.from && pD < KD.from + 100 && !/\S/.test(KD.text.slice(0, pD)) && (pD = KD.from);
          let UD = ["", (0, cD._)(wD, AD)];
          return LD && UD.push((0, cD._)(wD, RD.lineIndent(KD.from, -1))), {
            changes: {
              from: pD,
              to: sD,
              insert: rD.K.of(UD)
            },
            range: rD.j.cursor(pD + 1 + UD[1].length)
          }
        }));
        return pD(wD.update(sD, {
          scrollIntoView: !0,
          userEvent: "input"
        })), !0
      }
    }

    function Wz(DD, zD) {
      let wD = -1;
      return DD.changeByRange((pD => {
        let sD = [];
        for (let rD = pD.from; rD <= pD.to;) {
          let KD = DD.doc.lineAt(rD);
          KD.number > wD && (pD.empty || pD.to > KD.from) && (zD(KD, sD, pD), wD = KD.number), rD = KD.to + 1
        }
        let KD = DD.changes(sD);
        return {
          changes: sD,
          range: rD.j.range(KD.mapPos(pD.anchor, 1), KD.mapPos(pD.head, 1))
        }
      }))
    }
    const Nz = DD => {
        let {
          state: zD,
          dispatch: wD
        } = DD;
        return !zD.readOnly && (wD(zD.update(Wz(zD, ((DD, wD) => {
          wD.push({
            from: DD.from,
            insert: zD.facet(cD.ab)
          })
        })), {
          userEvent: "input.indent"
        })), !0)
      },
      Zz = DD => {
        let {
          state: zD,
          dispatch: wD
        } = DD;
        return !zD.readOnly && (wD(zD.update(Wz(zD, ((DD, wD) => {
          let pD = /^\s*/.exec(DD.text)[0];
          if (!pD) return;
          let sD = (0, rD.Z)(pD, zD.tabSize),
            KD = 0,
            LD = (0, cD._)(zD, Math.max(0, sD - (0, cD.T)(zD)));
          for (; KD < pD.length && KD < LD.length && pD.charCodeAt(KD) == LD.charCodeAt(KD);) KD++;
          wD.push({
            from: DD.from + KD,
            to: DD.from + pD.length,
            insert: LD.slice(KD)
          })
        })), {
          userEvent: "delete.dedent"
        })), !0)
      },
      yz = [{
        key: "Alt-ArrowLeft",
        mac: "Ctrl-ArrowLeft",
        run: DD => eD(DD, (zD => HD(DD.state, zD, !uD(DD)))),
        shift: DD => cz(DD, (zD => HD(DD.state, zD, !uD(DD))))
      }, {
        key: "Alt-ArrowRight",
        mac: "Ctrl-ArrowRight",
        run: DD => eD(DD, (zD => HD(DD.state, zD, uD(DD)))),
        shift: DD => cz(DD, (zD => HD(DD.state, zD, uD(DD))))
      }, {
        key: "Alt-ArrowUp",
        run: DD => {
          let {
            state: zD,
            dispatch: wD
          } = DD;
          return dz(zD, wD, !1)
        }
      }, {
        key: "Shift-Alt-ArrowUp",
        run: DD => {
          let {
            state: zD,
            dispatch: wD
          } = DD;
          return Sz(zD, wD, !1)
        }
      }, {
        key: "Alt-ArrowDown",
        run: DD => {
          let {
            state: zD,
            dispatch: wD
          } = DD;
          return dz(zD, wD, !0)
        }
      }, {
        key: "Shift-Alt-ArrowDown",
        run: DD => {
          let {
            state: zD,
            dispatch: wD
          } = DD;
          return Sz(zD, wD, !0)
        }
      }, {
        key: "Mod-Alt-ArrowUp",
        run: DD => Qz(DD, !1)
      }, {
        key: "Mod-Alt-ArrowDown",
        run: DD => Qz(DD, !0)
      }, {
        key: "Escape",
        run: DD => {
          let {
            state: zD,
            dispatch: wD
          } = DD, pD = zD.selection, sD = null;
          return pD.rG.length > 1 ? sD = rD.j.create([pD.main]) : pD.main.empty || (sD = rD.j.create([rD.j.cursor(pD.main.head)])), !!sD && (wD(mD(zD, sD)), !0)
        }
      }, {
        key: "Mod-Enter",
        run: lz(!0)
      }, {
        key: "Alt-l",
        mac: "Ctrl-l",
        run: DD => {
          let {
            state: zD,
            dispatch: wD
          } = DD, pD = jz(zD).map((DD => {
            let {
              from: wD,
              to: pD
            } = DD;
            return rD.j.range(wD, Math.min(pD + 1, zD.doc.length))
          }));
          return wD(zD.update({
            selection: rD.j.create(pD),
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Mod-i",
        run: DD => {
          let {
            state: zD,
            dispatch: wD
          } = DD, pD = kD(zD.selection, (DD => {
            let wD = (0, cD.jb)(zD),
              pD = wD.resolveStack(DD.from, 1);
            if (DD.empty) {
              let zD = wD.resolveStack(DD.from, -1);
              zD.node.from >= pD.node.from && zD.node.to <= pD.node.to && (pD = zD)
            }
            for (let zD = pD; zD; zD = zD.next) {
              let {
                node: wD
              } = zD;
              if ((wD.from < DD.from && wD.to >= DD.to || wD.to > DD.to && wD.from <= DD.from) && zD.next) return rD.j.range(wD.to, wD.from)
            }
            return DD
          }));
          return !pD.eq(zD.selection) && (wD(mD(zD, pD)), !0)
        },
        preventDefault: !0
      }, {
        key: "Mod-[",
        run: Zz
      }, {
        key: "Mod-]",
        run: Nz
      }, {
        key: "Mod-Alt-\\",
        run: DD => {
          let {
            state: zD,
            dispatch: wD
          } = DD;
          if (zD.readOnly) return !1;
          let pD = Object.create(null),
            sD = new cD.i(zD, {
              overrideIndentation: DD => {
                let zD = pD[DD];
                return null == zD ? -1 : zD
              }
            }),
            KD = Wz(zD, ((DD, wD, KD) => {
              let rD = (0, cD.X)(sD, DD.from);
              if (null == rD) return;
              /\S/.test(DD.text) || (rD = 0);
              let LD = /^\s*/.exec(DD.text)[0],
                gD = (0, cD._)(zD, rD);
              (LD != gD || KD.from < DD.from + LD.length) && (pD[DD.from] = rD, wD.push({
                from: DD.from,
                to: DD.from + LD.length,
                insert: gD
              }))
            }));
          return KD.changes.empty || wD(zD.update(KD, {
            userEvent: "indent"
          })), !0
        }
      }, {
        key: "Shift-Mod-k",
        run: DD => {
          if (DD.state.readOnly) return !1;
          let {
            state: zD
          } = DD, wD = zD.changes(jz(zD).map((DD => {
            let {
              from: wD,
              to: pD
            } = DD;
            return wD > 0 ? wD-- : pD < zD.doc.length && pD++, {
              from: wD,
              to: pD
            }
          }))), pD = kD(zD.selection, (zD => {
            let wD;
            if (DD.lineWrapping) {
              let pD = DD.lineBlockAt(zD.head),
                sD = DD.coordsAtPos(zD.head, zD.assoc || 1);
              sD && (wD = pD.bottom + DD.documentTop - sD.bottom + DD.defaultLineHeight / 2)
            }
            return DD.moveVertically(zD, !0, wD)
          })).map(wD);
          return DD.dispatch({
            changes: wD,
            selection: pD,
            scrollIntoView: !0,
            userEvent: "delete.line"
          }), !0
        }
      }, {
        key: "Shift-Mod-\\",
        run: DD => {
          let {
            state: zD,
            dispatch: wD
          } = DD;
          return Lz(zD, wD, !1)
        }
      }, {
        key: "Mod-/",
        run: DD => {
          let {
            state: zD
          } = DD, wD = zD.doc.lineAt(zD.selection.main.from), pD = ID(DD.state, wD.from);
          return pD.line ? AD(DD) : !!pD.block && fD(DD)
        }
      }, {
        key: "Alt-A",
        run: UD
      }, {
        key: "Ctrl-m",
        mac: "Shift-Alt-m",
        run: DD => (DD.setTabFocusMode(), !0)
      }].concat([{
        key: "ArrowLeft",
        run: vD,
        shift: Rz,
        preventDefault: !0
      }, {
        key: "Mod-ArrowLeft",
        mac: "Alt-ArrowLeft",
        run: DD => FD(DD, !uD(DD)),
        shift: DD => Uz(DD, !uD(DD)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowLeft",
        run: DD => eD(DD, (zD => rz(DD, zD, !uD(DD)))),
        shift: DD => cz(DD, (zD => rz(DD, zD, !uD(DD)))),
        preventDefault: !0
      }, {
        key: "ArrowRight",
        run: tD,
        shift: Az,
        preventDefault: !0
      }, {
        key: "Mod-ArrowRight",
        mac: "Alt-ArrowRight",
        run: DD => FD(DD, uD(DD)),
        shift: DD => Uz(DD, uD(DD)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowRight",
        run: DD => eD(DD, (zD => rz(DD, zD, uD(DD)))),
        shift: DD => cz(DD, (zD => rz(DD, zD, uD(DD)))),
        preventDefault: !0
      }, {
        key: "ArrowUp",
        run: Dz,
        shift: Iz,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowUp",
        run: Mz,
        shift: Jz
      }, {
        mac: "Ctrl-ArrowUp",
        run: sz,
        shift: hz
      }, {
        key: "ArrowDown",
        run: zz,
        shift: Bz,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowDown",
        run: Oz,
        shift: Ez
      }, {
        mac: "Ctrl-ArrowDown",
        run: Kz,
        shift: nz
      }, {
        key: "PageUp",
        run: sz,
        shift: hz
      }, {
        key: "PageDown",
        run: Kz,
        shift: nz
      }, {
        key: "Home",
        run: DD => eD(DD, (zD => rz(DD, zD, !1))),
        shift: DD => cz(DD, (zD => rz(DD, zD, !1))),
        preventDefault: !0
      }, {
        key: "Mod-Home",
        run: Mz,
        shift: Jz
      }, {
        key: "End",
        run: DD => eD(DD, (zD => rz(DD, zD, !0))),
        shift: DD => cz(DD, (zD => rz(DD, zD, !0))),
        preventDefault: !0
      }, {
        key: "Mod-End",
        run: Oz,
        shift: Ez
      }, {
        key: "Enter",
        run: iz,
        shift: iz
      }, {
        key: "Mod-a",
        run: DD => {
          let {
            state: zD,
            dispatch: wD
          } = DD;
          return wD(zD.update({
            selection: {
              anchor: 0,
              head: zD.doc.length
            },
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Backspace",
        run: Cz,
        shift: Cz,
        preventDefault: !0
      }, {
        key: "Delete",
        run: xz,
        preventDefault: !0
      }, {
        key: "Mod-Backspace",
        mac: "Alt-Backspace",
        run: bz,
        preventDefault: !0
      }, {
        key: "Mod-Delete",
        mac: "Alt-Delete",
        run: DD => Tz(DD, !0),
        preventDefault: !0
      }, {
        mac: "Mod-Backspace",
        run: DD => Xz(DD, (zD => {
          let wD = DD.moveToLineBoundary(zD, !1).head;
          return zD.head > wD ? wD : Math.max(0, zD.head - 1)
        })),
        preventDefault: !0
      }, {
        mac: "Mod-Delete",
        run: DD => Xz(DD, (zD => {
          let wD = DD.moveToLineBoundary(zD, !0).head;
          return zD.head < wD ? wD : Math.min(DD.state.doc.length, zD.head + 1)
        })),
        preventDefault: !0
      }].concat([{
        key: "Ctrl-b",
        run: vD,
        shift: Rz,
        preventDefault: !0
      }, {
        key: "Ctrl-f",
        run: tD,
        shift: Az
      }, {
        key: "Ctrl-p",
        run: Dz,
        shift: Iz
      }, {
        key: "Ctrl-n",
        run: zz,
        shift: Bz
      }, {
        key: "Ctrl-a",
        run: DD => eD(DD, (zD => rD.j.cursor(DD.lineBlockAt(zD.head).from, 1))),
        shift: DD => cz(DD, (zD => rD.j.cursor(DD.lineBlockAt(zD.head).from)))
      }, {
        key: "Ctrl-e",
        run: DD => eD(DD, (zD => rD.j.cursor(DD.lineBlockAt(zD.head).to, -1))),
        shift: DD => cz(DD, (zD => rD.j.cursor(DD.lineBlockAt(zD.head).to)))
      }, {
        key: "Ctrl-d",
        run: xz
      }, {
        key: "Ctrl-h",
        run: Cz
      }, {
        key: "Ctrl-k",
        run: DD => Xz(DD, (zD => {
          let wD = DD.lineBlockAt(zD.head).to;
          return zD.head < wD ? wD : Math.min(DD.state.doc.length, zD.head + 1)
        }))
      }, {
        key: "Ctrl-Alt-h",
        run: bz
      }, {
        key: "Ctrl-o",
        run: DD => {
          let {
            state: zD,
            dispatch: wD
          } = DD;
          if (zD.readOnly) return !1;
          let pD = zD.changeByRange((DD => ({
            changes: {
              from: DD.from,
              to: DD.to,
              insert: rD.K.of(["", ""])
            },
            range: rD.j.cursor(DD.from)
          })));
          return wD(zD.update(pD, {
            scrollIntoView: !0,
            userEvent: "input"
          })), !0
        }
      }, {
        key: "Ctrl-t",
        run: DD => {
          let {
            state: zD,
            dispatch: wD
          } = DD;
          if (zD.readOnly) return !1;
          let pD = zD.changeByRange((DD => {
            if (!DD.empty || 0 == DD.from || DD.from == zD.doc.length) return {
              range: DD
            };
            let wD = DD.from,
              pD = zD.doc.lineAt(wD),
              sD = wD == pD.from ? wD - 1 : (0, rD._)(pD.text, wD - pD.from, !1) + pD.from,
              KD = wD == pD.to ? wD + 1 : (0, rD._)(pD.text, wD - pD.from, !0) + pD.from;
            return {
              changes: {
                from: sD,
                to: KD,
                insert: zD.doc.slice(wD, KD).append(zD.doc.slice(sD, wD))
              },
              range: rD.j.cursor(KD)
            }
          }));
          return !pD.changes.empty && (wD(zD.update(pD, {
            scrollIntoView: !0,
            userEvent: "move.character"
          })), !0)
        }
      }, {
        key: "Ctrl-v",
        run: Kz
      }].map((DD => ({
        mac: DD.key,
        run: DD.run,
        shift: DD.shift
      }))))),
      kz = {
        key: "Tab",
        run: Nz,
        shift: Zz
      };
    var mz = wD(41256),
      ez = wD(41210),
      oz = wD(41261),
      az = function(DD) {
        void 0 === DD && (DD = {});
        var {
          crosshairCursor: zD = !1
        } = DD, wD = [];
        !1 !== DD.closeBracketsKeymap && (wD = wD.concat(ez.e)), !1 !== DD.defaultKeymap && (wD = wD.concat(yz)), !1 !== DD.searchKeymap && (wD = wD.concat(mz.i)), !1 !== DD.historyKeymap && (wD = wD.concat(yD)), !1 !== DD.foldKeymap && (wD = wD.concat(cD.L)), !1 !== DD.completionKeymap && (wD = wD.concat(ez.l)), !1 !== DD.lintKeymap && (wD = wD.concat(oz.b));
        var pD = [];
        return !1 !== DD.lineNumbers && pD.push((0, LD.bb)()), !1 !== DD.highlightActiveLineGutter && pD.push((0, LD.P)()), !1 !== DD.highlightSpecialChars && pD.push((0, LD.U)()), !1 !== DD.history && pD.push(function() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return [ED, JD.of(DD), LD.i.domEventHandlers({
            beforeinput(DD, zD) {
              let wD = "historyUndo" == DD.inputType ? XD : "historyRedo" == DD.inputType ? VD : null;
              return !!wD && (DD.preventDefault(), wD(zD))
            }
          })]
        }()), !1 !== DD.foldGutter && pD.push((0, cD.I)()), !1 !== DD.drawSelection && pD.push((0, LD.y)()), !1 !== DD.dropCursor && pD.push((0, LD.C)()), !1 !== DD.allowMultipleSelections && pD.push(rD.k.allowMultipleSelections.of(!0)), !1 !== DD.indentOnInput && pD.push((0, cD.Z)()), !1 !== DD.syntaxHighlighting && pD.push((0, cD.hb)(cD.x, {
          fallback: !0
        })), !1 !== DD.bracketMatching && pD.push((0, cD.q)()), !1 !== DD.closeBrackets && pD.push((0, ez.g)()), !1 !== DD.autocompletion && pD.push((0, ez.c)()), !1 !== DD.rectangularSelection && pD.push((0, LD.hb)()), !1 !== zD && pD.push((0, LD.v)()), !1 !== DD.highlightActiveLine && pD.push((0, LD.T)()), !1 !== DD.highlightSelectionMatches && pD.push((0, mz.e)()), DD.tabSize && "number" === typeof DD.tabSize && pD.push(cD.ab.of(" ".repeat(DD.tabSize))), pD.concat([LD.Z.of(wD.flat())]).filter(Boolean)
      },
      uz = wD(41239);
    const vz = "#e5c07b",
      tz = "#e06c75",
      Fz = "#56b6c2",
      Yz = "#ffffff",
      Hz = "#abb2bf",
      qz = "#7d8799",
      Dw = "#61afef",
      zw = "#98c379",
      ww = "#d19a66",
      pw = "#c678dd",
      sw = "#21252b",
      Kw = "#2c313a",
      rw = "#282c34",
      Lw = "#353a42",
      gw = "#3E4451",
      Rw = "#528bff",
      Aw = LD.i.theme({
        "&": {
          color: Hz,
          backgroundColor: rw
        },
        ".cm-content": {
          caretColor: Rw
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: Rw
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: gw
        },
        ".cm-panels": {
          backgroundColor: sw,
          color: Hz
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
          backgroundColor: rw,
          color: qz,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: Kw
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#ddd"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: Lw
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: Lw,
          borderBottomColor: Lw
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: Kw,
            color: Hz
          }
        }
      }, {
        dark: !0
      }),
      Uw = cD.e.define([{
        tag: uz.n.keyword,
        color: pw
      }, {
        tag: [uz.n.name, uz.n.deleted, uz.n.character, uz.n.propertyName, uz.n.macroName],
        color: tz
      }, {
        tag: [uz.n.function(uz.n.variableName), uz.n.labelName],
        color: Dw
      }, {
        tag: [uz.n.color, uz.n.constant(uz.n.name), uz.n.standard(uz.n.name)],
        color: ww
      }, {
        tag: [uz.n.definition(uz.n.name), uz.n.separator],
        color: Hz
      }, {
        tag: [uz.n.typeName, uz.n.className, uz.n.number, uz.n.changed, uz.n.annotation, uz.n.modifier, uz.n.self, uz.n.namespace],
        color: vz
      }, {
        tag: [uz.n.operator, uz.n.operatorKeyword, uz.n.url, uz.n.escape, uz.n.regexp, uz.n.link, uz.n.special(uz.n.string)],
        color: Fz
      }, {
        tag: [uz.n.meta, uz.n.comment],
        color: qz
      }, {
        tag: uz.n.strong,
        fontWeight: "bold"
      }, {
        tag: uz.n.emphasis,
        fontStyle: "italic"
      }, {
        tag: uz.n.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: uz.n.link,
        color: qz,
        textDecoration: "underline"
      }, {
        tag: uz.n.heading,
        fontWeight: "bold",
        color: tz
      }, {
        tag: [uz.n.atom, uz.n.bool, uz.n.special(uz.n.variableName)],
        color: ww
      }, {
        tag: [uz.n.processingInstruction, uz.n.string, uz.n.inserted],
        color: zw
      }, {
        tag: uz.n.invalid,
        color: Yz
      }]),
      fw = [Aw, (0, cD.hb)(Uw)];
    var Iw = LD.i.theme({
      "&": {
        backgroundColor: "#fff"
      }
    }, {
      dark: !1
    });
    class Bw {
      constructor(DD, zD) {
        this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = zD, this.timeoutMS = zD, this.callbacks.push(DD)
      }
      DU() {
        if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
          this.isTimeExhausted = !0;
          var DD = this.callbacks.slice();
          this.callbacks.length = 0, DD.forEach((DD => {
            try {
              DD()
            } catch (zD) {
              console.error("TimeoutLatch callback error:", zD)
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
    class Gw {
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
            DD.DU(), DD.isDone && this.remove(DD)
          }))
        }), 1))
      }
      stop() {
        null !== this.interval && (clearInterval(this.interval), this.interval = null)
      }
    }
    var hw = null,
      nw = rD.c.define(),
      Mw = [];

    function Ow(DD) {
      var {
        value: zD,
        selection: wD,
        onChange: pD,
        onStatistics: sD,
        onCreateEditor: cD,
        onUpdate: gD,
        extensions: RD = Mw,
        autoFocus: AD,
        theme: UD = "light",
        height: fD = null,
        minHeight: ID = null,
        maxHeight: BD = null,
        width: GD = null,
        minWidth: hD = null,
        maxWidth: nD = null,
        placeholder: MD = "",
        editable: OD = !0,
        readOnly: JD = !1,
        indentWithTab: ED = !0,
        basicSetup: QD = !0,
        root: XD,
        initialState: VD
      } = DD, [PD, CD] = (0, KD.useState)(), [xD, TD] = (0, KD.useState)(), [bD, jD] = (0, KD.useState)(), dD = (0, KD.useState)((() => ({
        current: null
      })))[0], SD = (0, KD.useState)((() => ({
        current: null
      })))[0], iD = LD.i.theme({
        "&": {
          height: fD,
          minHeight: ID,
          maxHeight: BD,
          width: GD,
          minWidth: hD,
          maxWidth: nD
        },
        "& .cm-scroller": {
          height: "100% !important"
        }
      }), lD = LD.i.updateListener.of((DD => {
        if (DD.docChanged && "function" === typeof pD && !DD.transactions.some((DD => DD.annotation(nw)))) {
          dD.current ? dD.current.reset() : (dD.current = new Bw((() => {
            if (SD.current) {
              var DD = SD.current;
              SD.current = null, DD()
            }
            dD.current = null
          }), 200), ("undefined" === typeof window ? new Gw : (hw || (hw = new Gw), hw)).add(dD.current));
          var zD = DD.state.doc.toString();
          pD(zD, DD)
        }
        sD && sD((DD => ({
          line: DD.state.doc.lineAt(DD.state.selection.main.from),
          lineCount: DD.state.doc.lines,
          lineBreak: DD.state.lineBreak,
          length: DD.state.doc.length,
          readOnly: DD.state.readOnly,
          tabSize: DD.state.tabSize,
          selection: DD.state.selection,
          selectionAsSingle: DD.state.selection.asSingle().main,
          rG: DD.state.selection.rG,
          selectionCode: DD.state.sliceDoc(DD.state.selection.main.from, DD.state.selection.main.to),
          selections: DD.state.selection.rG.map((zD => DD.state.sliceDoc(zD.from, zD.to))),
          selectedText: DD.state.selection.rG.some((DD => !DD.empty))
        }))(DD))
      })), WD = function(DD) {
        void 0 === DD && (DD = {});
        var {
          indentWithTab: zD = !0,
          editable: wD = !0,
          readOnly: pD = !1,
          theme: sD = "light",
          placeholder: KD = "",
          basicSetup: cD = !0
        } = DD, gD = [];
        switch (zD && gD.unshift(LD.Z.of([kz])), cD && ("boolean" === typeof cD ? gD.unshift(az()) : gD.unshift(az(cD))), KD && gD.unshift((0, LD.db)(KD)), sD) {
          case "light":
            gD.push(Iw);
            break;
          case "dark":
            gD.push(fw);
            break;
          case "none":
            break;
          default:
            gD.push(sD)
        }
        return !1 === wD && gD.push(LD.i.editable.of(!1)), pD && gD.push(rD.k.readOnly.of(!0)), [...gD]
      }({
        theme: UD,
        editable: OD,
        readOnly: JD,
        placeholder: MD,
        indentWithTab: ED,
        basicSetup: QD
      }), ND = [lD, iD, ...WD];
      return gD && "function" === typeof gD && ND.push(LD.i.updateListener.of(gD)), ND = ND.concat(RD), (0, KD.useLayoutEffect)((() => {
        if (PD && !bD) {
          var DD = {
              doc: zD,
              selection: wD,
              extensions: ND
            },
            pD = VD ? rD.k.fromJSON(VD.json, DD, VD.fields) : rD.k.create(DD);
          if (jD(pD), !xD) {
            var sD = new LD.i({
              state: pD,
              parent: PD,
              root: XD
            });
            TD(sD), cD && cD(sD, pD)
          }
        }
        return () => {
          xD && (jD(void 0), TD(void 0))
        }
      }), [PD, bD]), (0, KD.useEffect)((() => {
        DD.container && CD(DD.container)
      }), [DD.container]), (0, KD.useEffect)((() => () => {
        xD && (xD.destroy(), TD(void 0)), dD.current && (dD.current.cancel(), dD.current = null)
      }), [xD]), (0, KD.useEffect)((() => {
        AD && xD && xD.focus()
      }), [AD, xD]), (0, KD.useEffect)((() => {
        xD && xD.dispatch({
          effects: rD.E.reconfigure.of(ND)
        })
      }), [UD, RD, fD, ID, BD, GD, hD, nD, MD, OD, JD, ED, QD, pD, gD]), (0, KD.useEffect)((() => {
        if (void 0 !== zD) {
          var DD = xD ? xD.state.doc.toString() : "";
          if (xD && zD !== DD) {
            var wD = () => {
              xD && zD !== xD.state.doc.toString() && xD.dispatch({
                changes: {
                  from: 0,
                  to: xD.state.doc.toString().length,
                  insert: zD || ""
                },
                annotations: [nw.of(!0)]
              })
            };
            dD.current && !dD.current.isDone ? SD.current = wD : wD()
          }
        }
      }), [zD, xD]), {
        state: bD,
        setState: jD,
        view: xD,
        setView: TD,
        container: PD,
        setContainer: CD
      }
    }
    var Jw = wD(1096),
      Ew = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"],
      Qw = (0, KD.forwardRef)(((DD, zD) => {
        var {
          className: wD,
          value: rD = "",
          selection: LD,
          extensions: cD = [],
          onChange: gD,
          onStatistics: RD,
          onCreateEditor: AD,
          onUpdate: UD,
          autoFocus: fD,
          theme: ID = "light",
          height: BD,
          minHeight: GD,
          maxHeight: hD,
          width: nD,
          minWidth: MD,
          maxWidth: OD,
          basicSetup: JD,
          placeholder: ED,
          indentWithTab: QD,
          editable: XD,
          readOnly: VD,
          root: PD,
          initialState: CD
        } = DD, xD = (0, sD.d)(DD, Ew), TD = (0, KD.useRef)(null), {
          state: bD,
          view: jD,
          container: dD,
          setContainer: SD
        } = Ow({
          root: PD,
          value: rD,
          autoFocus: fD,
          theme: ID,
          height: BD,
          minHeight: GD,
          maxHeight: hD,
          width: nD,
          minWidth: MD,
          maxWidth: OD,
          basicSetup: JD,
          placeholder: ED,
          indentWithTab: QD,
          editable: XD,
          readOnly: VD,
          selection: LD,
          onChange: gD,
          onStatistics: RD,
          onCreateEditor: AD,
          onUpdate: UD,
          extensions: cD,
          initialState: CD
        });
        (0, KD.useImperativeHandle)(zD, (() => ({
          editor: TD.current,
          state: bD,
          view: jD
        })), [TD, dD, bD, jD]);
        var iD = (0, KD.useCallback)((DD => {
          TD.current = DD, SD(DD)
        }), [SD]);
        if ("string" !== typeof rD) throw new Error("value must be typeof string but got " + typeof rD);
        var lD = "string" === typeof ID ? "cm-theme-" + ID : "cm-theme";
        return (0, Jw.jsx)("div", (0, pD.d)({
          ref: iD,
          className: lD + (wD ? " " + wD : "")
        }, xD))
      }));
    Qw.displayName = "CodeMirror";
    const Xw = Qw
  },
  41228: (DD, zD, wD) => {
    function pD() {
      var DD = arguments[0];
      "string" == typeof DD && (DD = document.createElement(DD));
      var zD = 1,
        wD = arguments[1];
      if (wD && "object" == typeof wD && null == wD.nodeType && !Array.isArray(wD)) {
        for (var pD in wD)
          if (Object.prototype.hasOwnProperty.call(wD, pD)) {
            var KD = wD[pD];
            "string" == typeof KD ? DD.setAttribute(pD, KD) : null != KD && (DD[pD] = KD)
          } zD++
      }
      for (; zD < arguments.length; zD++) sD(DD, arguments[zD]);
      return DD
    }

    function sD(DD, zD) {
      if ("string" == typeof zD) DD.appendChild(document.createTextNode(zD));
      else if (null == zD);
      else if (null != zD.nodeType) DD.appendChild(zD);
      else {
        if (!Array.isArray(zD)) throw new RangeError("Unsupported child node: " + zD);
        for (var wD = 0; wD < zD.length; wD++) sD(DD, zD[wD])
      }
    }
    wD.d(zD, {
      d: () => pD
    })
  },
  41220: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => rD
    });
    const pD = "undefined" == typeof Symbol ? "__\u037c" : Symbol.for("\u037c"),
      sD = "undefined" == typeof Symbol ? "__styleSet" + Math.floor(1e8 * Math.random()) : Symbol("styleSet"),
      KD = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : {};
    class rD {
      constructor(DD, zD) {
        this.rules = [];
        let {
          finish: wD
        } = zD || {};

        function pD(DD) {
          return /^@/.test(DD) ? [DD] : DD.split(/,\s*/)
        }

        function sD(DD, zD, KD, rD) {
          let LD = [],
            cD = /^@(\w+)\b/.exec(DD[0]),
            gD = cD && "keyframes" == cD[1];
          if (cD && null == zD) return KD.push(DD[0] + ";");
          for (let wD in zD) {
            let rD = zD[wD];
            if (/&/.test(wD)) sD(wD.split(/,\s*/).map((zD => DD.map((DD => zD.replace(/&/, DD))))).reduce(((DD, zD) => DD.concat(zD))), rD, KD);
            else if (rD && "object" == typeof rD) {
              if (!cD) throw new RangeError("The value of a property (" + wD + ") should be a primitive value.");
              sD(pD(wD), rD, LD, gD)
            } else null != rD && LD.push(wD.replace(/_.*/, "").replace(/[A-Z]/g, (DD => "-" + DD.toLowerCase())) + ": " + rD + ";")
          }(LD.length || gD) && KD.push((!wD || cD || rD ? DD : DD.map(wD)).join(", ") + " {" + LD.join(" ") + "}")
        }
        for (let KD in DD) sD(pD(KD), DD[KD], this.rules)
      }
      getRules() {
        return this.rules.join("\n")
      }
      static newName() {
        let DD = KD[pD] || 1;
        return KD[pD] = DD + 1, "\u037c" + DD.toString(36)
      }
      static mount(DD, zD, wD) {
        let pD = DD[sD],
          KD = wD && wD.nonce;
        pD ? KD && pD.setNonce(KD) : pD = new cD(DD, KD), pD.mount(Array.isArray(zD) ? zD : [zD], DD)
      }
    }
    let LD = new Map;
    class cD {
      constructor(DD, zD) {
        let wD = DD.ownerDocument || DD,
          pD = wD.defaultView;
        if (!DD.head && DD.adoptedStyleSheets && pD.CSSStyleSheet) {
          let zD = LD.get(wD);
          if (zD) return DD[sD] = zD;
          this.sheet = new pD.CSSStyleSheet, LD.set(wD, this)
        } else this.styleTag = wD.createElement("style"), zD && this.styleTag.setAttribute("nonce", zD);
        this.modules = [], DD[sD] = this
      }
      mount(DD, zD) {
        let wD = this.sheet,
          pD = 0,
          sD = 0;
        for (let KD = 0; KD < DD.length; KD++) {
          let zD = DD[KD],
            rD = this.modules.indexOf(zD);
          if (rD < sD && rD > -1 && (this.modules.splice(rD, 1), sD--, rD = -1), -1 == rD) {
            if (this.modules.splice(sD++, 0, zD), wD)
              for (let DD = 0; DD < zD.rules.length; DD++) wD.insertRule(zD.rules[DD], pD++)
          } else {
            for (; sD < rD;) pD += this.modules[sD++].rules.length;
            pD += zD.rules.length, sD++
          }
        }
        if (wD) zD.adoptedStyleSheets.indexOf(this.sheet) < 0 && (zD.adoptedStyleSheets = [this.sheet, ...zD.adoptedStyleSheets]);
        else {
          let DD = "";
          for (let zD = 0; zD < this.modules.length; zD++) DD += this.modules[zD].getRules() + "\n";
          this.styleTag.textContent = DD;
          let wD = zD.head || zD;
          this.styleTag.parentNode != wD && wD.insertBefore(this.styleTag, wD.firstChild)
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