export const id = 603;
export const ids = [603];
export const modules = {
  44228: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => ge,
      e: () => Ae,
      f: () => je,
      j: () => QV,
      m: () => De,
      n: () => nV,
      r: () => ve
    });
    var JV = xV(44232),
      YV = xV(44234),
      UV = xV(44252);
    class yV {
      constructor(VV, eV, xV, JV) {
        this.state = VV, this.pos = eV, this.explicit = xV, this.view = JV, this.abortListeners = [], this.abortOnDocChange = !1
      }
      tokenBefore(VV) {
        let eV = (0, UV.ob)(this.state).resolveInner(this.pos, -1);
        for (; eV && VV.indexOf(eV.name) < 0;) eV = eV.parent;
        return eV ? {
          from: eV.from,
          to: this.pos,
          text: this.state.sliceDoc(eV.from, this.pos),
          type: eV.type
        } : null
      }
      matchBefore(VV) {
        let eV = this.state.doc.lineAt(this.pos),
          xV = Math.max(eV.from, this.pos - 250),
          JV = eV.text.slice(xV - eV.from, this.pos - eV.from),
          YV = JV.search(vV(VV, !1));
        return YV < 0 ? null : {
          from: xV + YV,
          to: this.pos,
          text: JV.slice(YV)
        }
      }
      get aborted() {
        return null == this.abortListeners
      }
      addEventListener(VV, eV, xV) {
        "abort" == VV && this.abortListeners && (this.abortListeners.push(eV), xV && xV.onDocChange && (this.abortOnDocChange = !0))
      }
    }

    function pV(VV) {
      let eV = Object.keys(VV).join(""),
        xV = /\w/.test(eV);
      return xV && (eV = eV.replace(/\w/g, "")), `[${xV?"\\w":""}${eV.replace(/[^\w\s]/g,"\\$&")}]`
    }

    function QV(VV) {
      let eV = VV.map((VV => "string" == typeof VV ? {
          label: VV
        } : VV)),
        [xV, JV] = eV.every((VV => /^\w+$/.test(VV.label))) ? [/\w*$/, /\w+$/] : function(VV) {
          let eV = Object.create(null),
            xV = Object.create(null);
          for (let {
              label: YV
            }
            of VV) {
            eV[YV[0]] = !0;
            for (let VV = 1; VV < YV.length; VV++) xV[YV[VV]] = !0
          }
          let JV = pV(eV) + pV(xV) + "*$";
          return [new RegExp("^" + JV), new RegExp(JV)]
        }(eV);
      return VV => {
        let YV = VV.matchBefore(JV);
        return YV || VV.explicit ? {
          from: YV ? YV.from : VV.pos,
          options: eV,
          validFor: xV
        } : null
      }
    }

    function nV(VV, eV) {
      return xV => {
        for (let eV = (0, UV.ob)(xV.state).resolveInner(xV.pos, -1); eV; eV = eV.parent) {
          if (VV.indexOf(eV.name) > -1) return null;
          if (eV.type.isTop) break
        }
        return eV(xV)
      }
    }
    class wV {
      constructor(VV, eV, xV, JV) {
        this.completion = VV, this.source = eV, this.match = xV, this.score = JV
      }
    }

    function ZV(VV) {
      return VV.selection.main.from
    }

    function vV(VV, eV) {
      var xV;
      let {
        source: JV
      } = VV, YV = eV && "^" != JV[0], UV = "$" != JV[JV.length - 1];
      return YV || UV ? new RegExp(`${YV?"^":""}(?:${JV})${UV?"$":""}`, null !== (xV = VV.flags) && void 0 !== xV ? xV : VV.ignoreCase ? "i" : "") : VV
    }
    const rV = JV.e.define();

    function kV(VV, eV, xV, YV) {
      let {
        main: UV
      } = VV.selection, yV = xV - UV.from, pV = YV - UV.from;
      return {
        ...VV.changeByRange((QV => {
          if (QV != UV && xV != YV && VV.sliceDoc(QV.from + yV, QV.from + pV) != VV.sliceDoc(xV, YV)) return {
            range: QV
          };
          let nV = VV.toText(eV);
          return {
            changes: {
              from: QV.from + yV,
              to: YV == UV.from ? QV.to : QV.from + pV,
              insert: nV
            },
            range: JV.n.cursor(QV.from + yV + nV.length)
          }
        })),
        scrollIntoView: !0,
        userEvent: "input.complete"
      }
    }
    const bV = new WeakMap;

    function EV(VV) {
      if (!Array.isArray(VV)) return VV;
      let eV = bV.get(VV);
      return eV || bV.set(VV, eV = QV(VV)), eV
    }
    const BV = JV.C.define(),
      jV = JV.C.define();
    class qV {
      constructor(VV) {
        this.pattern = VV, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
        for (let eV = 0; eV < VV.length;) {
          let xV = (0, JV.N)(VV, eV),
            YV = (0, JV.R)(xV);
          this.chars.push(xV);
          let UV = VV.slice(eV, eV + YV),
            yV = UV.toUpperCase();
          this.folded.push((0, JV.N)(yV == UV ? UV.toLowerCase() : yV, 0)), eV += YV
        }
        this.astral = VV.length != this.chars.length
      }
      ret(VV, eV) {
        return this.score = VV, this.matched = eV, this
      }
      match(VV) {
        if (0 == this.pattern.length) return this.ret(-100, []);
        if (VV.length < this.pattern.length) return null;
        let {
          chars: eV,
          folded: xV,
          any: YV,
          precise: UV,
          byWord: yV
        } = this;
        if (1 == eV.length) {
          let YV = (0, JV.N)(VV, 0),
            UV = (0, JV.R)(YV),
            yV = UV == VV.length ? 0 : -100;
          if (YV == eV[0]);
          else {
            if (YV != xV[0]) return null;
            yV += -200
          }
          return this.ret(yV, [0, UV])
        }
        let pV = VV.indexOf(this.pattern);
        if (0 == pV) return this.ret(VV.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
        let QV = eV.length,
          nV = 0;
        if (pV < 0) {
          for (let UV = 0, yV = Math.min(VV.length, 200); UV < yV && nV < QV;) {
            let yV = (0, JV.N)(VV, UV);
            yV != eV[nV] && yV != xV[nV] || (YV[nV++] = UV), UV += (0, JV.R)(yV)
          }
          if (nV < QV) return null
        }
        let wV = 0,
          ZV = 0,
          vV = !1,
          rV = 0,
          kV = -1,
          bV = -1,
          EV = /[a-z]/.test(VV),
          BV = !0;
        for (let jV = 0, qV = Math.min(VV.length, 200), tV = 0; jV < qV && ZV < QV;) {
          let YV = (0, JV.N)(VV, jV);
          pV < 0 && (wV < QV && YV == eV[wV] && (UV[wV++] = jV), rV < QV && (YV == eV[rV] || YV == xV[rV] ? (0 == rV && (kV = jV), bV = jV + 1, rV++) : rV = 0));
          let nV, qV = YV < 255 ? YV >= 48 && YV <= 57 || YV >= 97 && YV <= 122 ? 2 : YV >= 65 && YV <= 90 ? 1 : 0 : (nV = (0, JV.db)(YV)) != nV.toLowerCase() ? 1 : nV != nV.toUpperCase() ? 2 : 0;
          (!jV || 1 == qV && EV || 0 == tV && 0 != qV) && (eV[ZV] == YV || xV[ZV] == YV && (vV = !0) ? yV[ZV++] = jV : yV.length && (BV = !1)), tV = qV, jV += (0, JV.R)(YV)
        }
        return ZV == QV && 0 == yV[0] && BV ? this.result((vV ? -200 : 0) - 100, yV, VV) : rV == QV && 0 == kV ? this.ret(-200 - VV.length + (bV == VV.length ? 0 : -100), [0, bV]) : pV > -1 ? this.ret(-700 - VV.length, [pV, pV + this.pattern.length]) : rV == QV ? this.ret(-900 - VV.length, [kV, bV]) : ZV == QV ? this.result((vV ? -200 : 0) - 100 - 700 + (BV ? 0 : -1100), yV, VV) : 2 == eV.length ? null : this.result((YV[0] ? -700 : 0) - 200 - 1100, YV, VV)
      }
      result(VV, eV, xV) {
        let YV = [],
          UV = 0;
        for (let yV of eV) {
          let VV = yV + (this.astral ? (0, JV.R)((0, JV.N)(xV, yV)) : 1);
          UV && YV[UV - 1] == yV ? YV[UV - 1] = VV : (YV[UV++] = yV, YV[UV++] = VV)
        }
        return this.ret(VV - xV.length, YV)
      }
    }
    class tV {
      constructor(VV) {
        this.pattern = VV, this.matched = [], this.score = 0, this.folded = VV.toLowerCase()
      }
      match(VV) {
        if (VV.length < this.pattern.length) return null;
        let eV = VV.slice(0, this.pattern.length),
          xV = eV == this.pattern ? 0 : eV.toLowerCase() == this.folded ? -200 : null;
        return null == xV ? null : (this.matched = [0, eV.length], this.score = xV + (VV.length == this.pattern.length ? 0 : -100), this)
      }
    }
    const FV = JV.r.define({
      combine: VV => (0, JV.T)(VV, {
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
        positionInfo: PV,
        filterStrict: !1,
        compareCompletions: (VV, eV) => (VV.sortText || VV.label).localeCompare(eV.sortText || eV.label),
        interactionDelay: 75,
        updateSyncTime: 100
      }, {
        defaultKeymap: (VV, eV) => VV && eV,
        closeOnBlur: (VV, eV) => VV && eV,
        icons: (VV, eV) => VV && eV,
        tooltipClass: (VV, eV) => xV => TV(VV(xV), eV(xV)),
        optionClass: (VV, eV) => xV => TV(VV(xV), eV(xV)),
        addToOptions: (VV, eV) => VV.concat(eV),
        filterStrict: (VV, eV) => VV || eV
      })
    });

    function TV(VV, eV) {
      return VV ? eV ? VV + " " + eV : VV : eV
    }

    function PV(VV, eV, xV, JV, UV, yV) {
      let pV, QV, nV = VV.textDirection == YV.c.RTL,
        wV = nV,
        ZV = !1,
        vV = "top",
        rV = eV.left - UV.left,
        kV = UV.right - eV.right,
        bV = JV.right - JV.left,
        EV = JV.bottom - JV.top;
      if (wV && rV < Math.min(bV, kV) ? wV = !1 : !wV && kV < Math.min(bV, rV) && (wV = !0), bV <= (wV ? rV : kV)) pV = Math.max(UV.top, Math.min(xV.top, UV.bottom - EV)) - eV.top, QV = Math.min(400, wV ? rV : kV);
      else {
        ZV = !0, QV = Math.min(400, (nV ? eV.right : UV.right - eV.left) - 30);
        let VV = UV.bottom - eV.bottom;
        VV >= EV || VV > eV.top ? pV = xV.bottom - eV.top : (vV = "bottom", pV = eV.bottom - xV.top)
      }
      return {
        style: `${vV}: ${pV/((eV.bottom-eV.top)/yV.offsetHeight)}px; max-width: ${QV/((eV.right-eV.left)/yV.offsetWidth)}px`,
        class: "cm-completionInfo-" + (ZV ? nV ? "left-narrow" : "right-narrow" : wV ? "left" : "right")
      }
    }
    const AV = JV.C.define();

    function NV(VV, eV, xV) {
      if (VV <= xV) return {
        from: 0,
        to: VV
      };
      if (eV < 0 && (eV = 0), eV <= VV >> 1) {
        let VV = Math.floor(eV / xV);
        return {
          from: VV * xV,
          to: (VV + 1) * xV
        }
      }
      let JV = Math.floor((VV - eV) / xV);
      return {
        from: VV - (JV + 1) * xV,
        to: VV - JV * xV
      }
    }
    class XV {
      constructor(VV, eV, xV) {
        this.view = VV, this.stateField = eV, this.applyCompletion = xV, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
          read: () => this.measureInfo(),
          write: VV => this.placeInfo(VV),
          key: this
        }, this.space = null, this.currentClass = "";
        let JV = VV.state.field(eV),
          {
            options: YV,
            selected: UV
          } = JV.open,
          yV = VV.state.facet(FV);
        this.optionContent = function(VV) {
          let eV = VV.addToOptions.slice();
          return VV.icons && eV.push({
            render(VV) {
              let eV = document.createElement("div");
              return eV.classList.add("cm-completionIcon"), VV.type && eV.classList.add(...VV.type.split(/\s+/g).map((VV => "cm-completionIcon-" + VV))), eV.setAttribute("aria-hidden", "true"), eV
            },
            position: 20
          }), eV.push({
            render(VV, eV, xV, JV) {
              let YV = document.createElement("span");
              YV.className = "cm-completionLabel";
              let UV = VV.displayLabel || VV.label,
                yV = 0;
              for (let pV = 0; pV < JV.length;) {
                let VV = JV[pV++],
                  eV = JV[pV++];
                VV > yV && YV.appendChild(document.createTextNode(UV.slice(yV, VV)));
                let xV = YV.appendChild(document.createElement("span"));
                xV.appendChild(document.createTextNode(UV.slice(VV, eV))), xV.className = "cm-completionMatchedText", yV = eV
              }
              return yV < UV.length && YV.appendChild(document.createTextNode(UV.slice(yV))), YV
            },
            position: 50
          }, {
            render(VV) {
              if (!VV.detail) return null;
              let eV = document.createElement("span");
              return eV.className = "cm-completionDetail", eV.textContent = VV.detail, eV
            },
            position: 80
          }), eV.sort(((VV, eV) => VV.position - eV.position)).map((VV => VV.render))
        }(yV), this.optionClass = yV.optionClass, this.tooltipClass = yV.tooltipClass, this.range = NV(YV.length, UV, yV.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(VV.state), this.dom.addEventListener("mousedown", (xV => {
          let {
            options: JV
          } = VV.state.field(eV).open;
          for (let eV, YV = xV.target; YV && YV != this.dom; YV = YV.parentNode)
            if ("LI" == YV.nodeName && (eV = /-(\d+)$/.exec(YV.id)) && +eV[1] < JV.length) return this.applyCompletion(VV, JV[+eV[1]]), void xV.preventDefault();
          if (xV.target == this.list) {
            let eV = this.list.classList.contains("cm-completionListIncompleteTop") && xV.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && xV.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
            null != eV && (VV.dispatch({
              effects: AV.of(eV)
            }), xV.preventDefault())
          }
        })), this.dom.addEventListener("focusout", (eV => {
          let xV = VV.state.field(this.stateField, !1);
          xV && xV.tooltip && VV.state.facet(FV).closeOnBlur && eV.relatedTarget != VV.contentDOM && VV.dispatch({
            effects: jV.of(null)
          })
        })), this.showOptions(YV, JV.id)
      }
      mount() {
        this.updateSel()
      }
      showOptions(VV, eV) {
        this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(VV, eV, this.range)), this.list.addEventListener("scroll", (() => {
          this.info && this.view.requestMeasure(this.placeInfoReq)
        }))
      }
      update(VV) {
        var eV;
        let xV = VV.state.field(this.stateField),
          JV = VV.startState.field(this.stateField);
        if (this.updateTooltipClass(VV.state), xV != JV) {
          let {
            options: YV,
            selected: UV,
            disabled: yV
          } = xV.open;
          JV.open && JV.open.options == YV || (this.range = NV(YV.length, UV, VV.state.facet(FV).maxRenderedOptions), this.showOptions(YV, xV.id)), this.updateSel(), yV != (null === (eV = JV.open) || void 0 === eV ? void 0 : eV.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!yV)
        }
      }
      updateTooltipClass(VV) {
        let eV = this.tooltipClass(VV);
        if (eV != this.currentClass) {
          for (let VV of this.currentClass.split(" ")) VV && this.dom.classList.remove(VV);
          for (let VV of eV.split(" ")) VV && this.dom.classList.add(VV);
          this.currentClass = eV
        }
      }
      positioned(VV) {
        this.space = VV, this.info && this.view.requestMeasure(this.placeInfoReq)
      }
      updateSel() {
        let VV = this.view.state.field(this.stateField),
          eV = VV.open;
        (eV.selected > -1 && eV.selected < this.range.from || eV.selected >= this.range.to) && (this.range = NV(eV.options.length, eV.selected, this.view.state.facet(FV).maxRenderedOptions), this.showOptions(eV.options, VV.id));
        let xV = this.updateSelectedOption(eV.selected);
        if (xV) {
          this.destroyInfo();
          let {
            completion: JV
          } = eV.options[eV.selected], {
            info: UV
          } = JV;
          if (!UV) return;
          let yV = "string" === typeof UV ? document.createTextNode(UV) : UV(JV);
          if (!yV) return;
          "then" in yV ? yV.then((eV => {
            eV && this.view.state.field(this.stateField, !1) == VV && this.addInfoPane(eV, JV)
          })).catch((VV => (0, YV.Y)(this.view.state, VV, "completion info"))) : (this.addInfoPane(yV, JV), xV.setAttribute("aria-describedby", this.info.id))
        }
      }
      addInfoPane(VV, eV) {
        this.destroyInfo();
        let xV = this.info = document.createElement("div");
        if (xV.className = "cm-tooltip cm-completionInfo", xV.id = "cm-completionInfo-" + Math.floor(65535 * Math.random()).toString(16), null != VV.nodeType) xV.appendChild(VV), this.infoDestroy = null;
        else {
          let {
            dom: eV,
            destroy: JV
          } = VV;
          xV.appendChild(eV), this.infoDestroy = JV || null
        }
        this.dom.appendChild(xV), this.view.requestMeasure(this.placeInfoReq)
      }
      updateSelectedOption(VV) {
        let eV = null;
        for (let xV = this.list.firstChild, JV = this.range.from; xV; xV = xV.nextSibling, JV++) "LI" == xV.nodeName && xV.id ? JV == VV ? xV.hasAttribute("aria-selected") || (xV.setAttribute("aria-selected", "true"), eV = xV) : xV.hasAttribute("aria-selected") && (xV.removeAttribute("aria-selected"), xV.removeAttribute("aria-describedby")) : JV--;
        return eV && function(VV, eV) {
          let xV = VV.getBoundingClientRect(),
            JV = eV.getBoundingClientRect(),
            YV = xV.height / VV.offsetHeight;
          JV.top < xV.top ? VV.scrollTop -= (xV.top - JV.top) / YV : JV.bottom > xV.bottom && (VV.scrollTop += (JV.bottom - xV.bottom) / YV)
        }(this.list, eV), eV
      }
      measureInfo() {
        let VV = this.dom.querySelector("[aria-selected]");
        if (!VV || !this.info) return null;
        let eV = this.dom.getBoundingClientRect(),
          xV = this.info.getBoundingClientRect(),
          JV = VV.getBoundingClientRect(),
          YV = this.space;
        if (!YV) {
          let VV = this.dom.ownerDocument.documentElement;
          YV = {
            left: 0,
            top: 0,
            right: VV.clientWidth,
            bottom: VV.clientHeight
          }
        }
        return JV.top > Math.min(YV.bottom, eV.bottom) - 10 || JV.bottom < Math.max(YV.top, eV.top) + 10 ? null : this.view.state.facet(FV).positionInfo(this.view, eV, JV, xV, YV, this.dom)
      }
      placeInfo(VV) {
        this.info && (VV ? (VV.style && (this.info.style.cssText = VV.style), this.info.className = "cm-tooltip cm-completionInfo " + (VV.class || "")) : this.info.style.cssText = "top: -1e6px")
      }
      createListBox(VV, eV, xV) {
        const JV = document.createElement("ul");
        JV.id = eV, JV.setAttribute("role", "listbox"), JV.setAttribute("aria-expanded", "true"), JV.setAttribute("aria-label", this.view.state.phrase("Completions")), JV.addEventListener("mousedown", (VV => {
          VV.target == JV && VV.preventDefault()
        }));
        let YV = null;
        for (let UV = xV.from; UV < xV.to; UV++) {
          let {
            completion: yV,
            match: pV
          } = VV[UV], {
            section: QV
          } = yV;
          if (QV) {
            let VV = "string" == typeof QV ? QV : QV.name;
            if (VV != YV && (UV > xV.from || 0 == xV.from))
              if (YV = VV, "string" != typeof QV && QV.header) JV.appendChild(QV.header(QV));
              else {
                JV.appendChild(document.createElement("completion-section")).textContent = VV
              }
          }
          const nV = JV.appendChild(document.createElement("li"));
          nV.id = eV + "-" + UV, nV.setAttribute("role", "option");
          let wV = this.optionClass(yV);
          wV && (nV.className = wV);
          for (let VV of this.optionContent) {
            let eV = VV(yV, this.view.state, this.view, pV);
            eV && nV.appendChild(eV)
          }
        }
        return xV.from && JV.classList.add("cm-completionListIncompleteTop"), xV.to < VV.length && JV.classList.add("cm-completionListIncompleteBottom"), JV
      }
      destroyInfo() {
        this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
      }
      destroy() {
        this.destroyInfo()
      }
    }

    function MV(VV, eV) {
      return xV => new XV(xV, VV, eV)
    }

    function zV(VV) {
      return 100 * (VV.boost || 0) + (VV.apply ? 10 : 0) + (VV.info ? 5 : 0) + (VV.type ? 1 : 0)
    }
    class GV {
      constructor(VV, eV, xV, JV, YV, UV) {
        this.options = VV, this.attrs = eV, this.tooltip = xV, this.timestamp = JV, this.selected = YV, this.disabled = UV
      }
      setSelected(VV, eV) {
        return VV == this.selected || VV >= this.options.length ? this : new GV(this.options, DV(eV, VV), this.tooltip, this.timestamp, VV, this.disabled)
      }
      static build(VV, eV, xV, JV, YV, UV) {
        if (JV && !UV && VV.some((VV => VV.isPending))) return JV.setDisabled();
        let yV = function(VV, eV) {
          let xV = [],
            JV = null,
            YV = null,
            UV = VV => {
              xV.push(VV);
              let {
                section: eV
              } = VV.completion;
              if (eV) {
                JV || (JV = []);
                let VV = "string" == typeof eV ? eV : eV.name;
                JV.some((eV => eV.name == VV)) || JV.push("string" == typeof eV ? {
                  name: VV
                } : eV)
              }
            },
            yV = eV.facet(FV);
          for (let ZV of VV)
            if (ZV.hasResult()) {
              let VV = ZV.result.getMatch;
              if (!1 === ZV.result.filter)
                for (let eV of ZV.result.options) UV(new wV(eV, ZV.source, VV ? VV(eV) : [], 1e9 - xV.length));
              else {
                let xV, JV = eV.sliceDoc(ZV.from, ZV.to),
                  pV = yV.filterStrict ? new tV(JV) : new qV(JV);
                for (let eV of ZV.result.options)
                  if (xV = pV.match(eV.label)) {
                    let JV = eV.displayLabel ? VV ? VV(eV, xV.matched) : [] : xV.matched,
                      yV = xV.score + (eV.boost || 0);
                    if (UV(new wV(eV, ZV.source, JV, yV)), "object" == typeof eV.section && "dynamic" === eV.section.rank) {
                      let {
                        name: VV
                      } = eV.section;
                      YV || (YV = Object.create(null)), YV[VV] = Math.max(yV, YV[VV] || -1e9)
                    }
                  }
              }
            } if (JV) {
            let VV = Object.create(null),
              eV = 0,
              UV = (VV, eV) => ("dynamic" === VV.rank && "dynamic" === eV.rank ? YV[eV.name] - YV[VV.name] : 0) || ("number" == typeof VV.rank ? VV.rank : 1e9) - ("number" == typeof eV.rank ? eV.rank : 1e9) || (VV.name < eV.name ? -1 : 1);
            for (let xV of JV.sort(UV)) eV -= 1e5, VV[xV.name] = eV;
            for (let JV of xV) {
              let {
                section: eV
              } = JV.completion;
              eV && (JV.score += VV["string" == typeof eV ? eV : eV.name])
            }
          }
          let pV = [],
            QV = null,
            nV = yV.compareCompletions;
          for (let wV of xV.sort(((VV, eV) => eV.score - VV.score || nV(VV.completion, eV.completion)))) {
            let VV = wV.completion;
            !QV || QV.label != VV.label || QV.detail != VV.detail || null != QV.type && null != VV.type && QV.type != VV.type || QV.apply != VV.apply || QV.boost != VV.boost ? pV.push(wV) : zV(wV.completion) > zV(QV) && (pV[pV.length - 1] = wV), QV = wV.completion
          }
          return pV
        }(VV, eV);
        if (!yV.length) return JV && VV.some((VV => VV.isPending)) ? JV.setDisabled() : null;
        let pV = eV.facet(FV).selectOnOpen ? 0 : -1;
        if (JV && JV.selected != pV && -1 != JV.selected) {
          let VV = JV.options[JV.selected].completion;
          for (let eV = 0; eV < yV.length; eV++)
            if (yV[eV].completion == VV) {
              pV = eV;
              break
            }
        }
        return new GV(yV, DV(xV, pV), {
          pos: VV.reduce(((VV, eV) => eV.hasResult() ? Math.min(VV, eV.from) : VV), 1e8),
          create: LV,
          above: YV.aboveCursor
        }, JV ? JV.timestamp : Date.now(), pV, !1)
      }
      map(VV) {
        return new GV(this.options, this.attrs, {
          ...this.tooltip,
          pos: VV.mapPos(this.tooltip.pos)
        }, this.timestamp, this.selected, this.disabled)
      }
      setDisabled() {
        return new GV(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0)
      }
    }
    class WV {
      constructor(VV, eV, xV) {
        this.active = VV, this.id = eV, this.open = xV
      }
      static start() {
        return new WV(iV, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
      }
      update(VV) {
        let {
          state: eV
        } = VV, xV = eV.facet(FV), JV = (xV.override || eV.languageDataAt("autocomplete", ZV(eV)).map(EV)).map((eV => (this.active.find((VV => VV.source == eV)) || new aV(eV, this.active.some((VV => 0 != VV.state)) ? 1 : 0)).update(VV, xV)));
        JV.length == this.active.length && JV.every(((VV, eV) => VV == this.active[eV])) && (JV = this.active);
        let YV = this.open,
          UV = VV.effects.some((VV => VV.is(cV)));
        YV && VV.docChanged && (YV = YV.map(VV.changes)), VV.selection || JV.some((eV => eV.hasResult() && VV.changes.touchesRange(eV.from, eV.to))) || ! function(VV, eV) {
          if (VV == eV) return !0;
          for (let xV = 0, JV = 0;;) {
            for (; xV < VV.length && !VV[xV].hasResult();) xV++;
            for (; JV < eV.length && !eV[JV].hasResult();) JV++;
            let YV = xV == VV.length,
              UV = JV == eV.length;
            if (YV || UV) return YV == UV;
            if (VV[xV++].result != eV[JV++].result) return !1
          }
        }(JV, this.active) || UV ? YV = GV.build(JV, eV, this.id, YV, xV, UV) : YV && YV.disabled && !JV.some((VV => VV.isPending)) && (YV = null), !YV && JV.every((VV => !VV.isPending)) && JV.some((VV => VV.hasResult())) && (JV = JV.map((VV => VV.hasResult() ? new aV(VV.source, 0) : VV)));
        for (let yV of VV.effects) yV.is(AV) && (YV = YV && YV.setSelected(yV.value, this.id));
        return JV == this.active && YV == this.open ? this : new WV(JV, this.id, YV)
      }
      get tooltip() {
        return this.open ? this.open.tooltip : null
      }
      get attrs() {
        return this.open ? this.open.attrs : this.active.length ? RV : gV
      }
    }
    const RV = {
        "aria-autocomplete": "list"
      },
      gV = {};

    function DV(VV, eV) {
      let xV = {
        "aria-autocomplete": "list",
        "aria-haspopup": "listbox",
        "aria-controls": VV
      };
      return eV > -1 && (xV["aria-activedescendant"] = VV + "-" + eV), xV
    }
    const iV = [];

    function CV(VV, eV) {
      if (VV.isUserEvent("input.complete")) {
        let xV = VV.annotation(rV);
        if (xV && eV.activateOnCompletion(xV)) return 12
      }
      let xV = VV.isUserEvent("input.type");
      return xV && eV.activateOnTyping ? 5 : xV ? 1 : VV.isUserEvent("delete.backward") ? 2 : VV.selection ? 8 : VV.docChanged ? 16 : 0
    }
    class aV {
      constructor(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.source = VV, this.state = eV, this.explicit = xV
      }
      hasResult() {
        return !1
      }
      get isPending() {
        return 1 == this.state
      }
      update(VV, eV) {
        let xV = CV(VV, eV),
          JV = this;
        (8 & xV || 16 & xV && this.touches(VV)) && (JV = new aV(JV.source, 0)), 4 & xV && 0 == JV.state && (JV = new aV(this.source, 1)), JV = JV.updateFor(VV, xV);
        for (let YV of VV.effects)
          if (YV.is(BV)) JV = new aV(JV.source, 1, YV.value);
          else if (YV.is(jV)) JV = new aV(JV.source, 0);
        else if (YV.is(cV))
          for (let VV of YV.value) VV.source == JV.source && (JV = VV);
        return JV
      }
      updateFor(VV, eV) {
        return this.map(VV.changes)
      }
      map(VV) {
        return this
      }
      touches(VV) {
        return VV.changes.touchesRange(ZV(VV.state))
      }
    }
    class oV extends aV {
      constructor(VV, eV, xV, JV, YV, UV) {
        super(VV, 3, eV), this.limit = xV, this.result = JV, this.from = YV, this.to = UV
      }
      hasResult() {
        return !0
      }
      updateFor(VV, eV) {
        var xV;
        if (!(3 & eV)) return this.map(VV.changes);
        let JV = this.result;
        JV.map && !VV.changes.empty && (JV = JV.map(JV, VV.changes));
        let YV = VV.changes.mapPos(this.from),
          UV = VV.changes.mapPos(this.to, 1),
          pV = ZV(VV.state);
        if (pV > UV || !JV || 2 & eV && (ZV(VV.startState) == this.from || pV < this.limit)) return new aV(this.source, 4 & eV ? 1 : 0);
        let QV = VV.changes.mapPos(this.limit);
        return function(VV, eV, xV, JV) {
          if (!VV) return !1;
          let YV = eV.sliceDoc(xV, JV);
          return "function" == typeof VV ? VV(YV, xV, JV, eV) : vV(VV, !0).test(YV)
        }(JV.validFor, VV.state, YV, UV) ? new oV(this.source, this.explicit, QV, JV, YV, UV) : JV.update && (JV = JV.update(JV, YV, UV, new yV(VV.state, pV, !1))) ? new oV(this.source, this.explicit, QV, JV, JV.from, null !== (xV = JV.to) && void 0 !== xV ? xV : ZV(VV.state)) : new aV(this.source, 1, this.explicit)
      }
      map(VV) {
        if (VV.empty) return this;
        return (this.result.map ? this.result.map(this.result, VV) : this.result) ? new oV(this.source, this.explicit, VV.mapPos(this.limit), this.result, VV.mapPos(this.from), VV.mapPos(this.to, 1)) : new aV(this.source, 0)
      }
      touches(VV) {
        return VV.changes.touchesRange(this.from, this.to)
      }
    }
    const cV = JV.C.define({
        map: (VV, eV) => VV.map((VV => VV.map(eV)))
      }),
      hV = JV.E.define({
        create: () => WV.start(),
        update: (VV, eV) => VV.update(eV),
        provide: VV => [YV.kb.from(VV, (VV => VV.tooltip)), YV.e.contentAttributes.from(VV, (VV => VV.attrs))]
      });

    function lV(VV, eV) {
      const xV = eV.completion.apply || eV.completion.label;
      let JV = VV.state.field(hV).active.find((VV => VV.source == eV.source));
      return JV instanceof oV && ("string" == typeof xV ? VV.dispatch({
        ...kV(VV.state, xV, JV.from, JV.to),
        annotations: rV.of(eV.completion)
      }) : xV(VV, eV.completion, JV.from, JV.to), !0)
    }
    const LV = MV(hV, lV);

    function fV(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option";
      return xV => {
        let JV = xV.state.field(hV, !1);
        if (!JV || !JV.open || JV.open.disabled || Date.now() - JV.open.timestamp < xV.state.facet(FV).interactionDelay) return !1;
        let UV, yV = 1;
        "page" == eV && (UV = (0, YV.A)(xV, JV.open.tooltip)) && (yV = Math.max(2, Math.floor(UV.dom.offsetHeight / UV.dom.querySelector("li").offsetHeight) - 1));
        let {
          length: pV
        } = JV.open.options, QV = JV.open.selected > -1 ? JV.open.selected + yV * (VV ? 1 : -1) : VV ? 0 : pV - 1;
        return QV < 0 ? QV = "page" == eV ? 0 : pV - 1 : QV >= pV && (QV = "page" == eV ? pV - 1 : 0), xV.dispatch({
          effects: AV.of(QV)
        }), !0
      }
    }
    const mV = VV => !!VV.state.field(hV, !1) && (VV.dispatch({
      effects: BV.of(!0)
    }), !0);
    class KV {
      constructor(VV, eV) {
        this.active = VV, this.context = eV, this.time = Date.now(), this.updates = [], this.done = void 0
      }
    }
    const HV = YV.j.fromClass(class {
        constructor(VV) {
          this.view = VV, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
          for (let eV of VV.state.field(hV).active) eV.isPending && this.startQuery(eV)
        }
        update(VV) {
          let eV = VV.state.field(hV),
            xV = VV.state.facet(FV);
          if (!VV.selectionSet && !VV.docChanged && VV.startState.field(hV) == eV) return;
          let JV = VV.transactions.some((VV => {
            let eV = CV(VV, xV);
            return 8 & eV || (VV.selection || VV.docChanged) && !(3 & eV)
          }));
          for (let pV = 0; pV < this.running.length; pV++) {
            let eV = this.running[pV];
            if (JV || eV.context.abortOnDocChange && VV.docChanged || eV.updates.length + VV.transactions.length > 50 && Date.now() - eV.time > 1e3) {
              for (let VV of eV.context.abortListeners) try {
                VV()
              } catch (yV) {
                (0, YV.Y)(this.view.state, yV)
              }
              eV.context.abortListeners = null, this.running.splice(pV--, 1)
            } else eV.updates.push(...VV.transactions)
          }
          this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), VV.transactions.some((VV => VV.effects.some((VV => VV.is(BV))))) && (this.pendingStart = !0);
          let UV = this.pendingStart ? 50 : xV.activateOnTypingDelay;
          if (this.debounceUpdate = eV.active.some((VV => VV.isPending && !this.running.some((eV => eV.active.source == VV.source)))) ? setTimeout((() => this.startUpdate()), UV) : -1, 0 != this.composing)
            for (let YV of VV.transactions) YV.isUserEvent("input.type") ? this.composing = 2 : 2 == this.composing && YV.selection && (this.composing = 3)
        }
        startUpdate() {
          this.debounceUpdate = -1, this.pendingStart = !1;
          let {
            state: VV
          } = this.view, eV = VV.field(hV);
          for (let xV of eV.active) xV.isPending && !this.running.some((VV => VV.active.source == xV.source)) && this.startQuery(xV);
          this.running.length && eV.open && eV.open.disabled && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(FV).updateSyncTime))
        }
        startQuery(VV) {
          let {
            state: eV
          } = this.view, xV = ZV(eV), JV = new yV(eV, xV, VV.explicit, this.view), UV = new KV(VV, JV);
          this.running.push(UV), Promise.resolve(VV.source(JV)).then((VV => {
            UV.context.aborted || (UV.done = VV || null, this.scheduleAccept())
          }), (VV => {
            this.view.dispatch({
              effects: jV.of(null)
            }), (0, YV.Y)(this.view.state, VV)
          }))
        }
        scheduleAccept() {
          this.running.every((VV => void 0 !== VV.done)) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(FV).updateSyncTime))
        }
        accept() {
          var VV;
          this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
          let eV = [],
            xV = this.view.state.facet(FV),
            JV = this.view.state.field(hV);
          for (let YV = 0; YV < this.running.length; YV++) {
            let UV = this.running[YV];
            if (void 0 === UV.done) continue;
            if (this.running.splice(YV--, 1), UV.done) {
              let JV = ZV(UV.updates.length ? UV.updates[0].startState : this.view.state),
                YV = Math.min(JV, UV.done.from + (UV.active.explicit ? 0 : 1)),
                yV = new oV(UV.active.source, UV.active.explicit, YV, UV.done, UV.done.from, null !== (VV = UV.done.to) && void 0 !== VV ? VV : JV);
              for (let VV of UV.updates) yV = yV.update(VV, xV);
              if (yV.hasResult()) {
                eV.push(yV);
                continue
              }
            }
            let yV = JV.active.find((VV => VV.source == UV.active.source));
            if (yV && yV.isPending)
              if (null == UV.done) {
                let VV = new aV(UV.active.source, 0);
                for (let eV of UV.updates) VV = VV.update(eV, xV);
                VV.isPending || eV.push(VV)
              } else this.startQuery(yV)
          }(eV.length || JV.open && JV.open.disabled) && this.view.dispatch({
            effects: cV.of(eV)
          })
        }
      }, {
        eventHandlers: {
          blur(VV) {
            let eV = this.view.state.field(hV, !1);
            if (eV && eV.tooltip && this.view.state.facet(FV).closeOnBlur) {
              let xV = eV.open && (0, YV.A)(this.view, eV.open.tooltip);
              xV && xV.dom.contains(VV.relatedTarget) || setTimeout((() => this.view.dispatch({
                effects: jV.of(null)
              })), 10)
            }
          },
          compositionstart() {
            this.composing = 1
          },
          compositionend() {
            3 == this.composing && setTimeout((() => this.view.dispatch({
              effects: BV.of(!1)
            })), 20), this.composing = 0
          }
        }
      }),
      uV = "object" == typeof navigator && /Win/.test(navigator.platform),
      sV = JV.u.highest(YV.e.domEventHandlers({
        keydown(VV, eV) {
          let xV = eV.state.field(hV, !1);
          if (!xV || !xV.open || xV.open.disabled || xV.open.selected < 0 || VV.key.length > 1 || VV.ctrlKey && (!uV || !VV.altKey) || VV.metaKey) return !1;
          let JV = xV.open.options[xV.open.selected],
            YV = xV.active.find((VV => VV.source == JV.source)),
            UV = JV.completion.commitCharacters || YV.result.commitCharacters;
          return UV && UV.indexOf(VV.key) > -1 && lV(eV, JV), !1
        }
      })),
      SV = YV.e.baseTheme({
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
    class IV {
      constructor(VV, eV, xV, JV) {
        this.field = VV, this.line = eV, this.from = xV, this.to = JV
      }
    }
    class dV {
      constructor(VV, eV, xV) {
        this.field = VV, this.from = eV, this.to = xV
      }
      map(VV) {
        let eV = VV.mapPos(this.from, -1, JV.t.TrackDel),
          xV = VV.mapPos(this.to, 1, JV.t.TrackDel);
        return null == eV || null == xV ? null : new dV(this.field, eV, xV)
      }
    }
    class OV {
      constructor(VV, eV) {
        this.lines = VV, this.fieldPositions = eV
      }
      instantiate(VV, eV) {
        let xV = [],
          JV = [eV],
          YV = VV.doc.lineAt(eV),
          yV = /^\s*/.exec(YV.text)[0];
        for (let QV of this.lines) {
          if (xV.length) {
            let xV = yV,
              YV = /^\t*/.exec(QV)[0].length;
            for (let eV = 0; eV < YV; eV++) xV += VV.facet(UV._);
            JV.push(eV + xV.length - YV), QV = xV + QV.slice(YV)
          }
          xV.push(QV), eV += QV.length + 1
        }
        let pV = this.fieldPositions.map((VV => new dV(VV.field, JV[VV.line] + VV.from, JV[VV.line] + VV.to)));
        return {
          text: xV,
          TE: pV
        }
      }
      static parse(VV) {
        let eV, xV = [],
          JV = [],
          YV = [];
        for (let UV of VV.split(/\r\n?|\n/)) {
          for (; eV = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(UV);) {
            let VV = eV[1] ? +eV[1] : null,
              yV = eV[2] || eV[3] || "",
              pV = -1,
              QV = yV.replace(/\\[{}]/g, (VV => VV[1]));
            for (let eV = 0; eV < xV.length; eV++)(null != VV ? xV[eV].seq == VV : QV && xV[eV].name == QV) && (pV = eV);
            if (pV < 0) {
              let eV = 0;
              for (; eV < xV.length && (null == VV || null != xV[eV].seq && xV[eV].seq < VV);) eV++;
              xV.splice(eV, 0, {
                seq: VV,
                name: QV
              }), pV = eV;
              for (let VV of YV) VV.field >= pV && VV.field++
            }
            for (let xV of YV)
              if (xV.line == JV.length && xV.from > eV.index) {
                let VV = eV[2] ? 3 + (eV[1] || "").length : 2;
                xV.from -= VV, xV.to -= VV
              } YV.push(new IV(pV, JV.length, eV.index, eV.index + QV.length)), UV = UV.slice(0, eV.index) + yV + UV.slice(eV.index + eV[0].length)
          }
          UV = UV.replace(/\\([{}])/g, ((VV, eV, xV) => {
            for (let UV of YV) UV.line == JV.length && UV.from > xV && (UV.from--, UV.to--);
            return eV
          })), JV.push(UV)
        }
        return new OV(JV, YV)
      }
    }
    let Ve = YV.b.widget({
        widget: new class extends YV.n {
          toDOM() {
            let VV = document.createElement("span");
            return VV.className = "cm-snippetFieldPosition", VV
          }
          ignoreEvent() {
            return !1
          }
        }
      }),
      ee = YV.b.mark({
        class: "cm-snippetField"
      });
    class xe {
      constructor(VV, eV) {
        this.TE = VV, this.active = eV, this.deco = YV.b.set(VV.map((VV => (VV.from == VV.to ? Ve : ee).range(VV.from, VV.to))), !0)
      }
      map(VV) {
        let eV = [];
        for (let xV of this.TE) {
          let JV = xV.map(VV);
          if (!JV) return null;
          eV.push(JV)
        }
        return new xe(eV, this.active)
      }
      selectionInsideField(VV) {
        return VV.TE.every((VV => this.TE.some((eV => eV.field == this.active && eV.from <= VV.from && eV.to >= VV.to))))
      }
    }
    const Je = JV.C.define({
        map: (VV, eV) => VV && VV.map(eV)
      }),
      Ye = JV.C.define(),
      Ue = JV.E.define({
        create: () => null,
        update(VV, eV) {
          for (let xV of eV.effects) {
            if (xV.is(Je)) return xV.value;
            if (xV.is(Ye) && VV) return new xe(VV.TE, xV.value)
          }
          return VV && eV.docChanged && (VV = VV.map(eV.changes)), VV && eV.selection && !VV.selectionInsideField(eV.selection) && (VV = null), VV
        },
        provide: VV => YV.e.JU.from(VV, (VV => VV ? VV.deco : YV.b.none))
      });

    function ye(VV, eV) {
      return JV.n.create(VV.filter((VV => VV.field == eV)).map((VV => JV.n.range(VV.from, VV.to))))
    }

    function pe(VV) {
      let eV = OV.parse(VV);
      return (VV, xV, YV, UV) => {
        let {
          text: yV,
          TE: pV
        } = eV.instantiate(VV.state, YV), {
          main: QV
        } = VV.state.selection, nV = {
          changes: {
            from: YV,
            to: UV == QV.from ? QV.to : UV,
            insert: JV.H.of(yV)
          },
          scrollIntoView: !0,
          annotations: xV ? [rV.of(xV), JV.J.userEvent.of("input.complete")] : void 0
        };
        if (pV.length && (nV.selection = ye(pV, 0)), pV.some((VV => VV.field > 0))) {
          let eV = new xe(pV, 0),
            xV = nV.effects = [Je.of(eV)];
          void 0 === VV.state.field(Ue, !1) && xV.push(JV.C.appendConfig.of([Ue, Ze, re, SV]))
        }
        VV.dispatch(VV.state.update(nV))
      }
    }

    function Qe(VV) {
      return eV => {
        let {
          state: xV,
          dispatch: JV
        } = eV, YV = xV.field(Ue, !1);
        if (!YV || VV < 0 && 0 == YV.active) return !1;
        let UV = YV.active + VV,
          yV = VV > 0 && !YV.TE.some((eV => eV.field == UV + VV));
        return JV(xV.update({
          selection: ye(YV.TE, UV),
          effects: Je.of(yV ? null : new xe(YV.TE, UV)),
          scrollIntoView: !0
        })), !0
      }
    }
    const ne = [{
        key: "Tab",
        run: Qe(1),
        shift: Qe(-1)
      }, {
        key: "Escape",
        run: VV => {
          let {
            state: eV,
            dispatch: xV
          } = VV;
          return !!eV.field(Ue, !1) && (xV(eV.update({
            effects: Je.of(null)
          })), !0)
        }
      }],
      we = JV.r.define({
        combine: VV => VV.length ? VV[0] : ne
      }),
      Ze = JV.u.highest(YV.Q.compute([we], (VV => VV.facet(we))));

    function ve(VV, eV) {
      return {
        ...eV,
        apply: pe(VV)
      }
    }
    const re = YV.e.domEventHandlers({
      mousedown(VV, eV) {
        let xV, JV = eV.state.field(Ue, !1);
        if (!JV || null == (xV = eV.posAtCoords({
            x: VV.clientX,
            y: VV.clientY
          }))) return !1;
        let YV = JV.TE.find((VV => VV.from <= xV && VV.to >= xV));
        return !(!YV || YV.field == JV.active) && (eV.dispatch({
          selection: ye(JV.TE, YV.field),
          effects: Je.of(JV.TE.some((VV => VV.field > YV.field)) ? new xe(JV.TE, YV.field) : null),
          scrollIntoView: !0
        }), !0)
      }
    });
    const ke = {
        brackets: ["(", "[", "{", "'", '"'],
        before: ")]}:;>",
        stringPrefixes: []
      },
      be = JV.C.define({
        map(VV, eV) {
          let xV = eV.mapPos(VV, -1, JV.t.TrackAfter);
          return null == xV ? void 0 : xV
        }
      }),
      Ee = new class extends JV.A {};
    Ee.startSide = 1, Ee.endSide = -1;
    const Be = JV.E.define({
      create: () => JV.x.empty,
      update(VV, eV) {
        if (VV = VV.map(eV.changes), eV.selection) {
          let xV = eV.state.doc.lineAt(eV.selection.main.head);
          VV = VV.update({
            filter: VV => VV >= xV.from && VV <= xV.to
          })
        }
        for (let xV of eV.effects) xV.is(be) && (VV = VV.update({
          add: [Ee.range(xV.value, xV.value + 1)]
        }));
        return VV
      }
    });

    function je() {
      return [Pe, Be]
    }
    const qe = "()[]{}<>\xab\xbb\xbb\xab\uff3b\uff3d\uff5b\uff5d";

    function te(VV) {
      for (let eV = 0; eV < 16; eV += 2)
        if (qe.charCodeAt(eV) == VV) return qe.charAt(eV + 1);
      return (0, JV.db)(VV < 128 ? VV : VV + 1)
    }

    function Fe(VV, eV) {
      return VV.languageDataAt("closeBrackets", eV)[0] || ke
    }
    const Te = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      Pe = YV.e.inputHandler.of(((VV, eV, xV, YV) => {
        if ((Te ? VV.composing : VV.compositionStarted) || VV.state.readOnly) return !1;
        let UV = VV.state.selection.main;
        if (YV.length > 2 || 2 == YV.length && 1 == (0, JV.R)((0, JV.N)(YV, 0)) || eV != UV.from || xV != UV.to) return !1;
        let yV = function(VV, eV) {
          let xV = Fe(VV, VV.selection.main.head),
            YV = xV.brackets || ke.brackets;
          for (let UV of YV) {
            let yV = te((0, JV.N)(UV, 0));
            if (eV == UV) return yV == UV ? Ge(VV, UV, YV.indexOf(UV + UV + UV) > -1, xV) : Me(VV, UV, yV, xV.before || ke.before);
            if (eV == yV && Ne(VV, VV.selection.main.from)) return ze(VV, UV, yV)
          }
          return null
        }(VV.state, YV);
        return !!yV && (VV.dispatch(yV), !0)
      })),
      Ae = [{
        key: "Backspace",
        run: VV => {
          let {
            state: eV,
            dispatch: xV
          } = VV;
          if (eV.readOnly) return !1;
          let YV = Fe(eV, eV.selection.main.head).brackets || ke.brackets,
            UV = null,
            yV = eV.changeByRange((VV => {
              if (VV.empty) {
                let xV = function(VV, eV) {
                  let xV = VV.sliceString(eV - 2, eV);
                  return (0, JV.R)((0, JV.N)(xV, 0)) == xV.length ? xV : xV.slice(1)
                }(eV.doc, VV.head);
                for (let UV of YV)
                  if (UV == xV && Xe(eV.doc, VV.head) == te((0, JV.N)(UV, 0))) return {
                    changes: {
                      from: VV.head - UV.length,
                      to: VV.head + UV.length
                    },
                    range: JV.n.cursor(VV.head - UV.length)
                  }
              }
              return {
                range: UV = VV
              }
            }));
          return UV || xV(eV.update(yV, {
            scrollIntoView: !0,
            userEvent: "delete.backward"
          })), !UV
        }
      }];

    function Ne(VV, eV) {
      let xV = !1;
      return VV.field(Be).between(0, VV.doc.length, (VV => {
        VV == eV && (xV = !0)
      })), xV
    }

    function Xe(VV, eV) {
      let xV = VV.sliceString(eV, eV + 2);
      return xV.slice(0, (0, JV.R)((0, JV.N)(xV, 0)))
    }

    function Me(VV, eV, xV, YV) {
      let UV = null,
        yV = VV.changeByRange((yV => {
          if (!yV.empty) return {
            changes: [{
              insert: eV,
              from: yV.from
            }, {
              insert: xV,
              from: yV.to
            }],
            effects: be.of(yV.to + eV.length),
            range: JV.n.range(yV.anchor + eV.length, yV.head + eV.length)
          };
          let pV = Xe(VV.doc, yV.head);
          return !pV || /\s/.test(pV) || YV.indexOf(pV) > -1 ? {
            changes: {
              insert: eV + xV,
              from: yV.head
            },
            effects: be.of(yV.head + eV.length),
            range: JV.n.cursor(yV.head + eV.length)
          } : {
            range: UV = yV
          }
        }));
      return UV ? null : VV.update(yV, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function ze(VV, eV, xV) {
      let YV = null,
        UV = VV.changeByRange((eV => eV.empty && Xe(VV.doc, eV.head) == xV ? {
          changes: {
            from: eV.head,
            to: eV.head + xV.length,
            insert: xV
          },
          range: JV.n.cursor(eV.head + xV.length)
        } : YV = {
          range: eV
        }));
      return YV ? null : VV.update(UV, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function Ge(VV, eV, xV, YV) {
      let yV = YV.stringPrefixes || ke.stringPrefixes,
        pV = null,
        QV = VV.changeByRange((YV => {
          if (!YV.empty) return {
            changes: [{
              insert: eV,
              from: YV.from
            }, {
              insert: eV,
              from: YV.to
            }],
            effects: be.of(YV.to + eV.length),
            range: JV.n.range(YV.anchor + eV.length, YV.head + eV.length)
          };
          let QV, nV = YV.head,
            wV = Xe(VV.doc, nV);
          if (wV == eV) {
            if (We(VV, nV)) return {
              changes: {
                insert: eV + eV,
                from: nV
              },
              effects: be.of(nV + eV.length),
              range: JV.n.cursor(nV + eV.length)
            };
            if (Ne(VV, nV)) {
              let YV = xV && VV.sliceDoc(nV, nV + 3 * eV.length) == eV + eV + eV ? eV + eV + eV : eV;
              return {
                changes: {
                  from: nV,
                  to: nV + YV.length,
                  insert: YV
                },
                range: JV.n.cursor(nV + YV.length)
              }
            }
          } else {
            if (xV && VV.sliceDoc(nV - 2 * eV.length, nV) == eV + eV && (QV = Re(VV, nV - 2 * eV.length, yV)) > -1 && We(VV, QV)) return {
              changes: {
                insert: eV + eV + eV + eV,
                from: nV
              },
              effects: be.of(nV + eV.length),
              range: JV.n.cursor(nV + eV.length)
            };
            if (VV.charCategorizer(nV)(wV) != JV.k.Word && Re(VV, nV, yV) > -1 && ! function(VV, eV, xV, JV) {
                let YV = (0, UV.ob)(VV).resolveInner(eV, -1),
                  yV = JV.reduce(((VV, eV) => Math.max(VV, eV.length)), 0);
                for (let UV = 0; UV < 5; UV++) {
                  let UV = VV.sliceDoc(YV.from, Math.min(YV.to, YV.from + xV.length + yV)),
                    pV = UV.indexOf(xV);
                  if (!pV || pV > -1 && JV.indexOf(UV.slice(0, pV)) > -1) {
                    let eV = YV.firstChild;
                    for (; eV && eV.from == YV.from && eV.to - eV.from > xV.length + pV;) {
                      if (VV.sliceDoc(eV.to - xV.length, eV.to) == xV) return !1;
                      eV = eV.firstChild
                    }
                    return !0
                  }
                  let QV = YV.to == eV && YV.parent;
                  if (!QV) break;
                  YV = QV
                }
                return !1
              }(VV, nV, eV, yV)) return {
              changes: {
                insert: eV + eV,
                from: nV
              },
              effects: be.of(nV + eV.length),
              range: JV.n.cursor(nV + eV.length)
            }
          }
          return {
            range: pV = YV
          }
        }));
      return pV ? null : VV.update(QV, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function We(VV, eV) {
      let xV = (0, UV.ob)(VV).resolveInner(eV + 1);
      return xV.parent && xV.from == eV
    }

    function Re(VV, eV, xV) {
      let YV = VV.charCategorizer(eV);
      if (YV(VV.sliceDoc(eV - 1, eV)) != JV.k.Word) return eV;
      for (let UV of xV) {
        let xV = eV - UV.length;
        if (VV.sliceDoc(xV, eV) == UV && YV(VV.sliceDoc(xV - 1, xV)) != JV.k.Word) return xV
      }
      return -1
    }

    function ge() {
      let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [sV, hV, FV.of(VV), HV, ie, SV]
    }
    const De = [{
        key: "Ctrl-Space",
        run: mV
      }, {
        mac: "Alt-`",
        run: mV
      }, {
        mac: "Alt-i",
        run: mV
      }, {
        key: "Escape",
        run: VV => {
          let eV = VV.state.field(hV, !1);
          return !(!eV || !eV.active.some((VV => 0 != VV.state))) && (VV.dispatch({
            effects: jV.of(null)
          }), !0)
        }
      }, {
        key: "ArrowDown",
        run: fV(!0)
      }, {
        key: "ArrowUp",
        run: fV(!1)
      }, {
        key: "PageDown",
        run: fV(!0, "page")
      }, {
        key: "PageUp",
        run: fV(!1, "page")
      }, {
        key: "Enter",
        run: VV => {
          let eV = VV.state.field(hV, !1);
          return !(VV.state.readOnly || !eV || !eV.open || eV.open.selected < 0 || eV.open.disabled || Date.now() - eV.open.timestamp < VV.state.facet(FV).interactionDelay) && lV(VV, eV.open.options[eV.open.selected])
        }
      }],
      ie = JV.u.highest(YV.Q.computeN([FV], (VV => VV.facet(FV).defaultKeymap ? [De] : [])))
  },
  44352: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => nV,
      g: () => vV,
      h: () => wV,
      l: () => ZV
    });
    var JV = xV(44232);
    class YV {
      constructor(VV, eV, xV, JV) {
        this.origin = VV, this.changes = eV, this.effects = xV, this.clientID = JV
      }
    }
    class UV {
      constructor(VV, eV) {
        this.version = VV, this.unconfirmed = eV
      }
    }
    const yV = JV.r.define({
        combine(VV) {
          let eV = (0, JV.T)(VV, {
            startVersion: 0,
            clientID: null,
            sharedEffects: () => []
          }, {
            generatedID: VV => VV
          });
          return null == eV.clientID && (eV.clientID = VV.length && VV[0].generatedID || ""), eV
        }
      }),
      pV = JV.e.define(),
      QV = JV.E.define({
        create: VV => new UV(VV.facet(yV).startVersion, []),
        update(VV, eV) {
          let xV = eV.annotation(pV);
          if (xV) return xV;
          let {
            sharedEffects: JV,
            clientID: QV
          } = eV.startState.facet(yV), nV = JV(eV);
          return nV.length || !eV.changes.empty ? new UV(VV.version, VV.unconfirmed.concat(new YV(eV, eV.changes, nV, QV))) : VV
        }
      });

    function nV() {
      let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [QV, yV.of(Object.assign({
        generatedID: Math.floor(1e9 * Math.random()).toString(36)
      }, VV))]
    }

    function wV(VV, eV) {
      let {
        version: xV,
        unconfirmed: nV
      } = VV.field(QV), {
        clientID: wV
      } = VV.facet(yV);
      xV += eV.length;
      let ZV = [],
        vV = null,
        rV = 0;
      for (let YV of eV) {
        let VV = rV < nV.length ? nV[rV] : null;
        VV && VV.clientID == YV.clientID ? (vV && (vV = vV.map(VV.changes, !0)), ZV = JV.C.mapEffects(ZV, YV.changes), rV++) : (ZV = JV.C.mapEffects(ZV, YV.changes), YV.effects && (ZV = ZV.concat(YV.effects)), vV = vV ? vV.compose(YV.changes) : YV.changes)
      }
      if (rV && (nV = nV.slice(rV)), nV.length && (vV && (nV = nV.map((VV => {
          let eV = VV.changes.map(vV);
          return vV = vV.map(VV.changes, !0), new YV(VV.origin, eV, JV.C.mapEffects(VV.effects, vV), wV)
        }))), ZV.length)) {
        let VV = nV.reduce(((VV, eV) => VV.compose(eV.changes)), JV.ChangeSet.empty(nV[0].changes.length));
        ZV = JV.C.mapEffects(ZV, VV)
      }
      return vV ? VV.update({
        changes: vV,
        effects: ZV,
        annotations: [JV.J.addToHistory.of(!1), JV.J.remote.of(!0), pV.of(new UV(xV, nV))],
        filter: !1
      }) : VV.update({
        annotations: [pV.of(new UV(xV, nV))]
      })
    }

    function ZV(VV) {
      return VV.field(QV).unconfirmed
    }

    function vV(VV) {
      return VV.field(QV).version
    }
  },
  44273: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => be
    });
    var JV = xV(44260);
    class YV {
      constructor(VV, eV, xV, JV, YV, UV, yV, pV, QV) {
        let nV = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          wV = arguments.length > 10 ? arguments[10] : void 0;
        this.p = VV, this.stack = eV, this.state = xV, this.reducePos = JV, this.pos = YV, this.score = UV, this.buffer = yV, this.bufferBase = pV, this.curContext = QV, this.lookAhead = nV, this.parent = wV
      }
      toString() {
        return `[${this.stack.filter(((VV,eV)=>eV%3==0)).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`
      }
      static start(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          JV = VV.parser.context;
        return new YV(VV, [], eV, xV, xV, 0, [], 0, JV ? new UV(JV, JV.start) : null, 0, null)
      }
      get context() {
        return this.curContext ? this.curContext.context : null
      }
      pushState(VV, eV) {
        this.stack.push(this.state, eV, this.bufferBase + this.buffer.length), this.state = VV
      }
      reduce(VV) {
        var eV;
        let xV = VV >> 19,
          JV = 65535 & VV,
          {
            parser: YV
          } = this.p,
          UV = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos),
          yV = YV.dynamicPrecedence(JV);
        if (yV && (this.score += yV), 0 == xV) return this.pushState(YV.getGoto(this.state, JV, !0), this.reducePos), JV < YV.minRepeatTerm && this.storeNode(JV, this.reducePos, this.reducePos, UV ? 8 : 4, !0), void this.reduceContext(JV, this.reducePos);
        let pV = this.stack.length - 3 * (xV - 1) - (262144 & VV ? 6 : 0),
          QV = pV ? this.stack[pV - 2] : this.p.TE[0].from,
          nV = this.reducePos - QV;
        nV >= 2e3 && !(null === (eV = this.p.parser.nodeSet.types[JV]) || void 0 === eV ? void 0 : eV.isAnonymous) && (QV == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = nV) : this.p.lastBigReductionSize < nV && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = QV, this.p.lastBigReductionSize = nV));
        let wV = pV ? this.stack[pV - 1] : 0,
          ZV = this.bufferBase + this.buffer.length - wV;
        if (JV < YV.minRepeatTerm || 131072 & VV) {
          let VV = YV.stateFlag(this.state, 1) ? this.pos : this.reducePos;
          this.storeNode(JV, QV, VV, ZV + 4, !0)
        }
        if (262144 & VV) this.state = this.stack[pV];
        else {
          let VV = this.stack[pV - 3];
          this.state = YV.getGoto(VV, JV, !0)
        }
        for (; this.stack.length > pV;) this.stack.pop();
        this.reduceContext(JV, QV)
      }
      storeNode(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
          YV = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (0 == VV && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
          let VV = this,
            JV = this.buffer.length;
          if (0 == JV && VV.parent && (JV = VV.bufferBase - VV.parent.bufferBase, VV = VV.parent), JV > 0 && 0 == VV.buffer[JV - 4] && VV.buffer[JV - 1] > -1) {
            if (eV == xV) return;
            if (VV.buffer[JV - 2] >= eV) return void(VV.buffer[JV - 2] = xV)
          }
        }
        if (YV && this.pos != xV) {
          let YV = this.buffer.length;
          if (YV > 0 && (0 != this.buffer[YV - 4] || this.buffer[YV - 1] < 0)) {
            let VV = !1;
            for (let eV = YV; eV > 0 && this.buffer[eV - 2] > xV; eV -= 4)
              if (this.buffer[eV - 1] >= 0) {
                VV = !0;
                break
              } if (VV)
              for (; YV > 0 && this.buffer[YV - 2] > xV;) this.buffer[YV] = this.buffer[YV - 4], this.buffer[YV + 1] = this.buffer[YV - 3], this.buffer[YV + 2] = this.buffer[YV - 2], this.buffer[YV + 3] = this.buffer[YV - 1], YV -= 4, JV > 4 && (JV -= 4)
          }
          this.buffer[YV] = VV, this.buffer[YV + 1] = eV, this.buffer[YV + 2] = xV, this.buffer[YV + 3] = JV
        } else this.buffer.push(VV, eV, xV, JV)
      }
      shift(VV, eV, xV, JV) {
        if (131072 & VV) this.pushState(65535 & VV, this.pos);
        else if (0 == (262144 & VV)) {
          let YV = VV,
            {
              parser: UV
            } = this.p;
          this.pos = JV;
          let yV = UV.stateFlag(YV, 1);
          !yV && (JV > xV || eV <= UV.maxNode) && (this.reducePos = JV), this.pushState(YV, yV ? xV : Math.min(xV, this.reducePos)), this.shiftContext(eV, xV), eV <= UV.maxNode && this.buffer.push(eV, xV, JV, 4)
        } else this.pos = JV, this.shiftContext(eV, xV), eV <= this.p.parser.maxNode && this.buffer.push(eV, xV, JV, 4)
      }
      apply(VV, eV, xV, JV) {
        65536 & VV ? this.reduce(VV) : this.shift(VV, eV, xV, JV)
      }
      useNode(VV, eV) {
        let xV = this.p.reused.length - 1;
        (xV < 0 || this.p.reused[xV] != VV) && (this.p.reused.push(VV), xV++);
        let JV = this.pos;
        this.reducePos = this.pos = JV + VV.length, this.pushState(eV, JV), this.buffer.push(xV, JV, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, VV, this, this.p.stream.reset(this.pos - VV.length)))
      }
      split() {
        let VV = this,
          eV = VV.buffer.length;
        for (; eV > 0 && VV.buffer[eV - 2] > VV.reducePos;) eV -= 4;
        let xV = VV.buffer.slice(eV),
          JV = VV.bufferBase + eV;
        for (; VV && JV == VV.bufferBase;) VV = VV.parent;
        return new YV(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, xV, JV, this.curContext, this.lookAhead, VV)
      }
      recoverByDelete(VV, eV) {
        let xV = VV <= this.p.parser.maxNode;
        xV && this.storeNode(VV, this.pos, eV, 4), this.storeNode(0, this.pos, eV, xV ? 8 : 4), this.pos = this.reducePos = eV, this.score -= 190
      }
      canShift(VV) {
        for (let eV = new yV(this);;) {
          let xV = this.p.parser.stateSlot(eV.state, 4) || this.p.parser.hasAction(eV.state, VV);
          if (0 == xV) return !1;
          if (0 == (65536 & xV)) return !0;
          eV.reduce(xV)
        }
      }
      recoverByInsert(VV) {
        if (this.stack.length >= 300) return [];
        let eV = this.p.parser.nextStates(this.state);
        if (eV.length > 8 || this.stack.length >= 120) {
          let xV = [];
          for (let JV, YV = 0; YV < eV.length; YV += 2)(JV = eV[YV + 1]) != this.state && this.p.parser.hasAction(JV, VV) && xV.push(eV[YV], JV);
          if (this.stack.length < 120)
            for (let VV = 0; xV.length < 8 && VV < eV.length; VV += 2) {
              let JV = eV[VV + 1];
              xV.some(((VV, eV) => 1 & eV && VV == JV)) || xV.push(eV[VV], JV)
            }
          eV = xV
        }
        let xV = [];
        for (let JV = 0; JV < eV.length && xV.length < 4; JV += 2) {
          let VV = eV[JV + 1];
          if (VV == this.state) continue;
          let YV = this.split();
          YV.pushState(VV, this.pos), YV.storeNode(0, YV.pos, YV.pos, 4, !0), YV.shiftContext(eV[JV], this.pos), YV.reducePos = this.pos, YV.score -= 200, xV.push(YV)
        }
        return xV
      }
      forceReduce() {
        let {
          parser: VV
        } = this.p, eV = VV.stateSlot(this.state, 5);
        if (0 == (65536 & eV)) return !1;
        if (!VV.validAction(this.state, eV)) {
          let xV = eV >> 19,
            JV = 65535 & eV,
            YV = this.stack.length - 3 * xV;
          if (YV < 0 || VV.getGoto(this.stack[YV], JV, !1) < 0) {
            let VV = this.findForcedReduction();
            if (null == VV) return !1;
            eV = VV
          }
          this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100
        }
        return this.reducePos = this.pos, this.reduce(eV), !0
      }
      findForcedReduction() {
        let {
          parser: VV
        } = this.p, eV = [], xV = (JV, YV) => {
          if (!eV.includes(JV)) return eV.push(JV), VV.allActions(JV, (eV => {
            if (393216 & eV);
            else if (65536 & eV) {
              let xV = (eV >> 19) - YV;
              if (xV > 1) {
                let JV = 65535 & eV,
                  YV = this.stack.length - 3 * xV;
                if (YV >= 0 && VV.getGoto(this.stack[YV], JV, !1) >= 0) return xV << 19 | 65536 | JV
              }
            } else {
              let VV = xV(eV, YV + 1);
              if (null != VV) return VV
            }
          }))
        };
        return xV(this.state, 0)
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
          parser: VV
        } = this.p;
        return 65535 == VV.data[VV.stateSlot(this.state, 1)] && !VV.stateSlot(this.state, 4)
      }
      restart() {
        this.storeNode(0, this.pos, this.pos, 4, !0), this.state = this.stack[0], this.stack.length = 0
      }
      sameState(VV) {
        if (this.state != VV.state || this.stack.length != VV.stack.length) return !1;
        for (let eV = 0; eV < this.stack.length; eV += 3)
          if (this.stack[eV] != VV.stack[eV]) return !1;
        return !0
      }
      get parser() {
        return this.p.parser
      }
      dialectEnabled(VV) {
        return this.p.parser.dialect.flags[VV]
      }
      shiftContext(VV, eV) {
        this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, VV, this, this.p.stream.reset(eV)))
      }
      reduceContext(VV, eV) {
        this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, VV, this, this.p.stream.reset(eV)))
      }
      emitContext() {
        let VV = this.buffer.length - 1;
        (VV < 0 || -3 != this.buffer[VV]) && this.buffer.push(this.curContext.hash, this.pos, this.pos, -3)
      }
      emitLookAhead() {
        let VV = this.buffer.length - 1;
        (VV < 0 || -4 != this.buffer[VV]) && this.buffer.push(this.lookAhead, this.pos, this.pos, -4)
      }
      updateContext(VV) {
        if (VV != this.curContext.context) {
          let eV = new UV(this.curContext.tracker, VV);
          eV.hash != this.curContext.hash && this.emitContext(), this.curContext = eV
        }
      }
      setLookAhead(VV) {
        return !(VV <= this.lookAhead) && (this.emitLookAhead(), this.lookAhead = VV, !0)
      }
      close() {
        this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead()
      }
    }
    class UV {
      constructor(VV, eV) {
        this.tracker = VV, this.context = eV, this.hash = VV.strict ? VV.hash(eV) : 0
      }
    }
    class yV {
      constructor(VV) {
        this.start = VV, this.state = VV.state, this.stack = VV.stack, this.base = this.stack.length
      }
      reduce(VV) {
        let eV = 65535 & VV,
          xV = VV >> 19;
        0 == xV ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= 3 * (xV - 1);
        let JV = this.start.p.parser.getGoto(this.stack[this.base - 3], eV, !0);
        this.state = JV
      }
    }
    class pV {
      constructor(VV, eV, xV) {
        this.stack = VV, this.pos = eV, this.index = xV, this.buffer = VV.buffer, 0 == this.index && this.maybeNext()
      }
      static create(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : VV.bufferBase + VV.buffer.length;
        return new pV(VV, eV, eV - VV.bufferBase)
      }
      maybeNext() {
        let VV = this.stack.parent;
        null != VV && (this.index = this.stack.bufferBase - VV.bufferBase, this.stack = VV, this.buffer = VV.buffer)
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
        return new pV(this.stack, this.pos, this.index)
      }
    }

    function QV(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uint16Array;
      if ("string" != typeof VV) return VV;
      let xV = null;
      for (let JV = 0, YV = 0; JV < VV.length;) {
        let UV = 0;
        for (;;) {
          let eV = VV.charCodeAt(JV++),
            xV = !1;
          if (126 == eV) {
            UV = 65535;
            break
          }
          eV >= 92 && eV--, eV >= 34 && eV--;
          let YV = eV - 32;
          if (YV >= 46 && (YV -= 46, xV = !0), UV += YV, xV) break;
          UV *= 46
        }
        xV ? xV[YV++] = UV : xV = new eV(UV)
      }
      return xV
    }
    class nV {
      constructor() {
        this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0
      }
    }
    const wV = new nV;
    class ZV {
      constructor(VV, eV) {
        this.input = VV, this.TE = eV, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = wV, this.rangeIndex = 0, this.pos = this.chunkPos = eV[0].from, this.range = eV[0], this.end = eV[eV.length - 1].to, this.readNext()
      }
      resolveOffset(VV, eV) {
        let xV = this.range,
          JV = this.rangeIndex,
          YV = this.pos + VV;
        for (; YV < xV.from;) {
          if (!JV) return null;
          let VV = this.TE[--JV];
          YV -= xV.from - VV.to, xV = VV
        }
        for (; eV < 0 ? YV > xV.to : YV >= xV.to;) {
          if (JV == this.TE.length - 1) return null;
          let VV = this.TE[++JV];
          YV += VV.from - xV.to, xV = VV
        }
        return YV
      }
      clipPos(VV) {
        if (VV >= this.range.from && VV < this.range.to) return VV;
        for (let eV of this.TE)
          if (eV.to > VV) return Math.max(VV, eV.from);
        return this.end
      }
      peek(VV) {
        let eV, xV, JV = this.chunkOff + VV;
        if (JV >= 0 && JV < this.chunk.length) eV = this.pos + VV, xV = this.chunk.charCodeAt(JV);
        else {
          let JV = this.resolveOffset(VV, 1);
          if (null == JV) return -1;
          if (eV = JV, eV >= this.chunk2Pos && eV < this.chunk2Pos + this.chunk2.length) xV = this.chunk2.charCodeAt(eV - this.chunk2Pos);
          else {
            let VV = this.rangeIndex,
              JV = this.range;
            for (; JV.to <= eV;) JV = this.TE[++VV];
            this.chunk2 = this.input.chunk(this.chunk2Pos = eV), eV + this.chunk2.length > JV.to && (this.chunk2 = this.chunk2.slice(0, JV.to - eV)), xV = this.chunk2.charCodeAt(0)
          }
        }
        return eV >= this.token.lookAhead && (this.token.lookAhead = eV + 1), xV
      }
      acceptToken(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          xV = eV ? this.resolveOffset(eV, -1) : this.pos;
        if (null == xV || xV < this.token.start) throw new RangeError("Token end out of bounds");
        this.token.value = VV, this.token.end = xV
      }
      acceptTokenTo(VV, eV) {
        this.token.value = VV, this.token.end = eV
      }
      getChunk() {
        if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
          let {
            chunk: VV,
            chunkPos: eV
          } = this;
          this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = VV, this.chunk2Pos = eV, this.chunkOff = this.pos - this.chunkPos
        } else {
          this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
          let VV = this.input.chunk(this.pos),
            eV = this.pos + VV.length;
          this.chunk = eV > this.range.to ? VV.slice(0, this.range.to - this.pos) : VV, this.chunkPos = this.pos, this.chunkOff = 0
        }
      }
      readNext() {
        return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff)
      }
      advance() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        for (this.chunkOff += VV; this.pos + VV >= this.range.to;) {
          if (this.rangeIndex == this.TE.length - 1) return this.setDone();
          VV -= this.range.to - this.pos, this.range = this.TE[++this.rangeIndex], this.pos = this.range.from
        }
        return this.pos += VV, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext()
      }
      setDone() {
        return this.pos = this.chunkPos = this.end, this.range = this.TE[this.rangeIndex = this.TE.length - 1], this.chunk = "", this.next = -1
      }
      reset(VV, eV) {
        if (eV ? (this.token = eV, eV.start = VV, eV.lookAhead = VV + 1, eV.value = eV.extended = -1) : this.token = wV, this.pos != VV) {
          if (this.pos = VV, VV == this.end) return this.setDone(), this;
          for (; VV < this.range.from;) this.range = this.TE[--this.rangeIndex];
          for (; VV >= this.range.to;) this.range = this.TE[++this.rangeIndex];
          VV >= this.chunkPos && VV < this.chunkPos + this.chunk.length ? this.chunkOff = VV - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext()
        }
        return this
      }
      read(VV, eV) {
        if (VV >= this.chunkPos && eV <= this.chunkPos + this.chunk.length) return this.chunk.slice(VV - this.chunkPos, eV - this.chunkPos);
        if (VV >= this.chunk2Pos && eV <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(VV - this.chunk2Pos, eV - this.chunk2Pos);
        if (VV >= this.range.from && eV <= this.range.to) return this.input.read(VV, eV);
        let xV = "";
        for (let JV of this.TE) {
          if (JV.from >= eV) break;
          JV.to > VV && (xV += this.input.read(Math.max(JV.from, VV), Math.min(JV.to, eV)))
        }
        return xV
      }
    }
    class vV {
      constructor(VV, eV) {
        this.data = VV, this.id = eV
      }
      token(VV, eV) {
        let {
          parser: xV
        } = eV.p;
        bV(this.data, VV, eV, this.id, xV.data, xV.tokenPrecTable)
      }
    }
    vV.prototype.contextual = vV.prototype.fallback = vV.prototype.extend = !1;
    class rV {
      constructor(VV, eV, xV) {
        this.precTable = eV, this.elseToken = xV, this.data = "string" == typeof VV ? QV(VV) : VV
      }
      token(VV, eV) {
        let xV = VV.pos,
          JV = 0;
        for (;;) {
          let xV = VV.next < 0,
            YV = VV.resolveOffset(1, 1);
          if (bV(this.data, VV, eV, 0, this.data, this.precTable), VV.token.value > -1) break;
          if (null == this.elseToken) return;
          if (xV || JV++, null == YV) break;
          VV.reset(YV, VV.token)
        }
        JV && (VV.reset(xV, VV.token), VV.acceptToken(this.elseToken, JV))
      }
    }
    rV.prototype.contextual = vV.prototype.fallback = vV.prototype.extend = !1;
    class kV {
      constructor(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.token = VV, this.contextual = !!eV.contextual, this.fallback = !!eV.fallback, this.extend = !!eV.extend
      }
    }

    function bV(VV, eV, xV, JV, YV, UV) {
      let yV = 0,
        pV = 1 << JV,
        {
          dialect: QV
        } = xV.p.parser;
      VV: for (; 0 != (pV & VV[yV]);) {
        let xV = VV[yV + 1];
        for (let ZV = yV + 3; ZV < xV; ZV += 2)
          if ((VV[ZV + 1] & pV) > 0) {
            let xV = VV[ZV];
            if (QV.allows(xV) && (-1 == eV.token.value || eV.token.value == xV || BV(xV, eV.token.value, YV, UV))) {
              eV.acceptToken(xV);
              break
            }
          } let JV = eV.next,
          nV = 0,
          wV = VV[yV + 2];
        if (!(eV.next < 0 && wV > nV && 65535 == VV[xV + 3 * wV - 3])) {
          for (; nV < wV;) {
            let YV = nV + wV >> 1,
              UV = xV + YV + (YV << 1),
              pV = VV[UV],
              QV = VV[UV + 1] || 65536;
            if (JV < pV) wV = YV;
            else {
              if (!(JV >= QV)) {
                yV = VV[UV + 2], eV.advance();
                continue VV
              }
              nV = YV + 1
            }
          }
          break
        }
        yV = VV[xV + 3 * wV - 1]
      }
    }

    function EV(VV, eV, xV) {
      for (let JV, YV = eV; 65535 != (JV = VV[YV]); YV++)
        if (JV == xV) return YV - eV;
      return -1
    }

    function BV(VV, eV, xV, JV) {
      let YV = EV(xV, JV, eV);
      return YV < 0 || EV(xV, JV, VV) < YV
    }
    const jV = "undefined" != typeof process && {
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
    let qV = null;

    function tV(VV, eV, xV) {
      let YV = VV.cursor(JV.f.IncludeAnonymous);
      for (YV.moveTo(eV);;)
        if (!(xV < 0 ? YV.childBefore(eV) : YV.childAfter(eV)))
          for (;;) {
            if ((xV < 0 ? YV.to < eV : YV.from > eV) && !YV.type.isError) return xV < 0 ? Math.max(0, Math.min(YV.to - 1, eV - 25)) : Math.min(VV.length, Math.max(YV.from + 1, eV + 25));
            if (xV < 0 ? YV.prevSibling() : YV.nextSibling()) break;
            if (!YV.parent()) return xV < 0 ? 0 : VV.length
          }
    }
    class FV {
      constructor(VV, eV) {
        this.fragments = VV, this.nodeSet = eV, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment()
      }
      nextFragment() {
        let VV = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
        if (VV) {
          for (this.safeFrom = VV.openStart ? tV(VV.tree, VV.from + VV.offset, 1) - VV.offset : VV.from, this.safeTo = VV.openEnd ? tV(VV.tree, VV.to + VV.offset, -1) - VV.offset : VV.to; this.trees.length;) this.trees.pop(), this.start.pop(), this.index.pop();
          this.trees.push(VV.tree), this.start.push(-VV.offset), this.index.push(0), this.nextStart = this.safeFrom
        } else this.nextStart = 1e9
      }
      nodeAt(VV) {
        if (VV < this.nextStart) return null;
        for (; this.fragment && this.safeTo <= VV;) this.nextFragment();
        if (!this.fragment) return null;
        for (;;) {
          let eV = this.trees.length - 1;
          if (eV < 0) return this.nextFragment(), null;
          let xV = this.trees[eV],
            YV = this.index[eV];
          if (YV == xV.children.length) {
            this.trees.pop(), this.start.pop(), this.index.pop();
            continue
          }
          let UV = xV.children[YV],
            yV = this.start[eV] + xV.positions[YV];
          if (yV > VV) return this.nextStart = yV, null;
          if (UV instanceof JV.x) {
            if (yV == VV) {
              if (yV < this.safeFrom) return null;
              let VV = yV + UV.length;
              if (VV <= this.safeTo) {
                let eV = UV.prop(JV.h.lookAhead);
                if (!eV || VV + eV < this.fragment.to) return UV
              }
            }
            this.index[eV]++, yV + UV.length >= Math.max(this.safeFrom, VV) && (this.trees.push(UV), this.start.push(yV), this.index.push(0))
          } else this.index[eV]++, this.nextStart = yV + UV.length
        }
      }
    }
    class TV {
      constructor(VV, eV) {
        this.stream = eV, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = VV.tokenizers.map((VV => new nV))
      }
      getActions(VV) {
        let eV = 0,
          xV = null,
          {
            parser: JV
          } = VV.p,
          {
            tokenizers: YV
          } = JV,
          UV = JV.stateSlot(VV.state, 3),
          yV = VV.curContext ? VV.curContext.hash : 0,
          pV = 0;
        for (let QV = 0; QV < YV.length; QV++) {
          if (0 == (1 << QV & UV)) continue;
          let JV = YV[QV],
            nV = this.tokens[QV];
          if ((!xV || JV.fallback) && ((JV.contextual || nV.start != VV.pos || nV.mask != UV || nV.context != yV) && (this.updateCachedToken(nV, JV, VV), nV.mask = UV, nV.context = yV), nV.lookAhead > nV.end + 25 && (pV = Math.max(nV.lookAhead, pV)), 0 != nV.value)) {
            let YV = eV;
            if (nV.extended > -1 && (eV = this.addActions(VV, nV.extended, nV.end, eV)), eV = this.addActions(VV, nV.value, nV.end, eV), !JV.extend && (xV = nV, eV > YV)) break
          }
        }
        for (; this.actions.length > eV;) this.actions.pop();
        return pV && VV.setLookAhead(pV), xV || VV.pos != this.stream.end || (xV = new nV, xV.value = VV.p.parser.eofTerm, xV.start = xV.end = VV.pos, eV = this.addActions(VV, xV.value, xV.end, eV)), this.mainToken = xV, this.actions
      }
      getMainToken(VV) {
        if (this.mainToken) return this.mainToken;
        let eV = new nV,
          {
            pos: xV,
            p: JV
          } = VV;
        return eV.start = xV, eV.end = Math.min(xV + 1, JV.stream.end), eV.value = xV == JV.stream.end ? JV.parser.eofTerm : 0, eV
      }
      updateCachedToken(VV, eV, xV) {
        let JV = this.stream.clipPos(xV.pos);
        if (eV.token(this.stream.reset(JV, VV), xV), VV.value > -1) {
          let {
            parser: eV
          } = xV.p;
          for (let JV = 0; JV < eV.specialized.length; JV++)
            if (eV.specialized[JV] == VV.value) {
              let YV = eV.specializers[JV](this.stream.read(VV.start, VV.end), xV);
              if (YV >= 0 && xV.p.parser.dialect.allows(YV >> 1)) {
                0 == (1 & YV) ? VV.value = YV >> 1 : VV.extended = YV >> 1;
                break
              }
            }
        } else VV.value = 0, VV.end = this.stream.clipPos(JV + 1)
      }
      putAction(VV, eV, xV, JV) {
        for (let YV = 0; YV < JV; YV += 3)
          if (this.actions[YV] == VV) return JV;
        return this.actions[JV++] = VV, this.actions[JV++] = eV, this.actions[JV++] = xV, JV
      }
      addActions(VV, eV, xV, JV) {
        let {
          state: YV
        } = VV, {
          parser: UV
        } = VV.p, {
          data: yV
        } = UV;
        for (let pV = 0; pV < 2; pV++)
          for (let VV = UV.stateSlot(YV, pV ? 2 : 1);; VV += 3) {
            if (65535 == yV[VV]) {
              if (1 != yV[VV + 1]) {
                0 == JV && 2 == yV[VV + 1] && (JV = this.putAction(zV(yV, VV + 2), eV, xV, JV));
                break
              }
              VV = zV(yV, VV + 2)
            }
            yV[VV] == eV && (JV = this.putAction(zV(yV, VV + 1), eV, xV, JV))
          }
        return JV
      }
    }
    class PV {
      constructor(VV, eV, xV, JV) {
        this.parser = VV, this.input = eV, this.TE = JV, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new ZV(eV, JV), this.tokens = new TV(VV, this.stream), this.topTerm = VV.top[1];
        let {
          from: UV
        } = JV[0];
        this.stacks = [YV.start(this, VV.top[0], UV)], this.fragments = xV.length && this.stream.end - UV > 4 * VV.bufferLength ? new FV(xV, VV.nodeSet) : null
      }
      get parsedPos() {
        return this.minStackPos
      }
      advance() {
        let VV, eV, xV = this.stacks,
          JV = this.minStackPos,
          YV = this.stacks = [];
        if (this.bigReductionCount > 300 && 1 == xV.length) {
          let [VV] = xV;
          for (; VV.forceReduce() && VV.stack.length && VV.stack[VV.stack.length - 2] >= this.lastBigReductionStart;);
          this.bigReductionCount = this.lastBigReductionSize = 0
        }
        for (let UV = 0; UV < xV.length; UV++) {
          let yV = xV[UV];
          for (;;) {
            if (this.tokens.mainToken = null, yV.pos > JV) YV.push(yV);
            else {
              if (this.advanceStack(yV, YV, xV)) continue;
              {
                VV || (VV = [], eV = []), VV.push(yV);
                let xV = this.tokens.getMainToken(yV);
                eV.push(xV.value, xV.end)
              }
            }
            break
          }
        }
        if (!YV.length) {
          let eV = VV && function(VV) {
            let eV = null;
            for (let xV of VV) {
              let VV = xV.p.stoppedAt;
              (xV.pos == xV.p.stream.end || null != VV && xV.pos > VV) && xV.p.parser.stateFlag(xV.state, 2) && (!eV || eV.score < xV.score) && (eV = xV)
            }
            return eV
          }(VV);
          if (eV) return jV && console.log("Finish with " + this.stackID(eV)), this.stackToTree(eV);
          if (this.parser.strict) throw jV && VV && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + JV);
          this.recovering || (this.recovering = 5)
        }
        if (this.recovering && VV) {
          let xV = null != this.stoppedAt && VV[0].pos > this.stoppedAt ? VV[0] : this.runRecovery(VV, eV, YV);
          if (xV) return jV && console.log("Force-finish " + this.stackID(xV)), this.stackToTree(xV.forceAll())
        }
        if (this.recovering) {
          let VV = 1 == this.recovering ? 1 : 3 * this.recovering;
          if (YV.length > VV)
            for (YV.sort(((VV, eV) => eV.score - VV.score)); YV.length > VV;) YV.pop();
          YV.some((VV => VV.reducePos > JV)) && this.recovering--
        } else if (YV.length > 1) {
          VV: for (let VV = 0; VV < YV.length - 1; VV++) {
            let eV = YV[VV];
            for (let xV = VV + 1; xV < YV.length; xV++) {
              let JV = YV[xV];
              if (eV.sameState(JV) || eV.buffer.length > 500 && JV.buffer.length > 500) {
                if (!((eV.score - JV.score || eV.buffer.length - JV.buffer.length) > 0)) {
                  YV.splice(VV--, 1);
                  continue VV
                }
                YV.splice(xV--, 1)
              }
            }
          }
          YV.length > 12 && (YV.sort(((VV, eV) => eV.score - VV.score)), YV.splice(12, YV.length - 12))
        }
        this.minStackPos = YV[0].pos;
        for (let UV = 1; UV < YV.length; UV++) YV[UV].pos < this.minStackPos && (this.minStackPos = YV[UV].pos);
        return null
      }
      stopAt(VV) {
        if (null != this.stoppedAt && this.stoppedAt < VV) throw new RangeError("Can't move stoppedAt forward");
        this.stoppedAt = VV
      }
      advanceStack(VV, eV, xV) {
        let YV = VV.pos,
          {
            parser: UV
          } = this,
          yV = jV ? this.stackID(VV) + " -> " : "";
        if (null != this.stoppedAt && YV > this.stoppedAt) return VV.forceReduce() ? VV : null;
        if (this.fragments) {
          let eV = VV.curContext && VV.curContext.tracker.strict,
            xV = eV ? VV.curContext.hash : 0;
          for (let pV = this.fragments.nodeAt(YV); pV;) {
            let YV = this.parser.nodeSet.types[pV.type.id] == pV.type ? UV.getGoto(VV.state, pV.type.id) : -1;
            if (YV > -1 && pV.length && (!eV || (pV.prop(JV.h.contextHash) || 0) == xV)) return VV.useNode(pV, YV), jV && console.log(yV + this.stackID(VV) + ` (via reuse of ${UV.getName(pV.type.id)})`), !0;
            if (!(pV instanceof JV.x) || 0 == pV.children.length || pV.positions[0] > 0) break;
            let QV = pV.children[0];
            if (!(QV instanceof JV.x && 0 == pV.positions[0])) break;
            pV = QV
          }
        }
        let pV = UV.stateSlot(VV.state, 4);
        if (pV > 0) return VV.reduce(pV), jV && console.log(yV + this.stackID(VV) + ` (via always-reduce ${UV.getName(65535&pV)})`), !0;
        if (VV.stack.length >= 8400)
          for (; VV.stack.length > 6e3 && VV.forceReduce(););
        let QV = this.tokens.getActions(VV);
        for (let JV = 0; JV < QV.length;) {
          let pV = QV[JV++],
            nV = QV[JV++],
            wV = QV[JV++],
            ZV = JV == QV.length || !xV,
            vV = ZV ? VV : VV.split(),
            rV = this.tokens.mainToken;
          if (vV.apply(pV, nV, rV ? rV.start : vV.pos, wV), jV && console.log(yV + this.stackID(vV) + ` (via ${0==(65536&pV)?"shift":`reduce of ${UV.getName(65535&pV)}`} for ${UV.getName(nV)} @ ${YV}${vV==VV?"":", split"})`), ZV) return !0;
          vV.pos > YV ? eV.push(vV) : xV.push(vV)
        }
        return !1
      }
      advanceFully(VV, eV) {
        let xV = VV.pos;
        for (;;) {
          if (!this.advanceStack(VV, null, null)) return !1;
          if (VV.pos > xV) return AV(VV, eV), !0
        }
      }
      runRecovery(VV, eV, xV) {
        let JV = null,
          YV = !1;
        for (let UV = 0; UV < VV.length; UV++) {
          let yV = VV[UV],
            pV = eV[UV << 1],
            QV = eV[1 + (UV << 1)],
            nV = jV ? this.stackID(yV) + " -> " : "";
          if (yV.deadEnd) {
            if (YV) continue;
            if (YV = !0, yV.restart(), jV && console.log(nV + this.stackID(yV) + " (restarted)"), this.advanceFully(yV, xV)) continue
          }
          let wV = yV.split(),
            ZV = nV;
          for (let VV = 0; VV < 10 && wV.forceReduce(); VV++) {
            if (jV && console.log(ZV + this.stackID(wV) + " (via force-reduce)"), this.advanceFully(wV, xV)) break;
            jV && (ZV = this.stackID(wV) + " -> ")
          }
          for (let VV of yV.recoverByInsert(pV)) jV && console.log(nV + this.stackID(VV) + " (via recover-insert)"), this.advanceFully(VV, xV);
          this.stream.end > yV.pos ? (QV == yV.pos && (QV++, pV = 0), yV.recoverByDelete(pV, QV), jV && console.log(nV + this.stackID(yV) + ` (via recover-delete ${this.parser.getName(pV)})`), AV(yV, xV)) : (!JV || JV.score < wV.score) && (JV = wV)
        }
        return JV
      }
      stackToTree(VV) {
        return VV.close(), JV.x.build({
          buffer: pV.create(VV),
          nodeSet: this.parser.nodeSet,
          topID: this.topTerm,
          maxBufferLength: this.parser.bufferLength,
          reused: this.reused,
          start: this.TE[0].from,
          length: VV.pos - this.TE[0].from,
          minRepeatType: this.parser.minRepeatTerm
        })
      }
      stackID(VV) {
        let eV = (qV || (qV = new WeakMap)).get(VV);
        return eV || qV.set(VV, eV = String.fromCodePoint(this.nextStackID++)), eV + VV
      }
    }

    function AV(VV, eV) {
      for (let xV = 0; xV < eV.length; xV++) {
        let JV = eV[xV];
        if (JV.pos == VV.pos && JV.sameState(VV)) return void(eV[xV].score < VV.score && (eV[xV] = VV))
      }
      eV.push(VV)
    }
    class NV {
      constructor(VV, eV, xV) {
        this.source = VV, this.flags = eV, this.disabled = xV
      }
      allows(VV) {
        return !this.disabled || 0 == this.disabled[VV]
      }
    }
    const XV = VV => VV;
    class MV extends JV.r {
      constructor(VV) {
        if (super(), this.wrappers = [], 14 != VV.version) throw new RangeError(`Parser version (${VV.version}) doesn't match runtime version (14)`);
        let eV = VV.nodeNames.split(" ");
        this.minRepeatTerm = eV.length;
        for (let JV = 0; JV < VV.repeatNodeCount; JV++) eV.push("");
        let xV = Object.keys(VV.topRules).map((eV => VV.topRules[eV][1])),
          YV = [];
        for (let JV = 0; JV < eV.length; JV++) YV.push([]);

        function UV(VV, eV, xV) {
          YV[VV].push([eV, eV.deserialize(String(xV))])
        }
        if (VV.nodeProps)
          for (let pV of VV.nodeProps) {
            let VV = pV[0];
            "string" == typeof VV && (VV = JV.h[VV]);
            for (let eV = 1; eV < pV.length;) {
              let xV = pV[eV++];
              if (xV >= 0) UV(xV, VV, pV[eV++]);
              else {
                let JV = pV[eV + -xV];
                for (let YV = -xV; YV > 0; YV--) UV(pV[eV++], VV, JV);
                eV++
              }
            }
          }
        this.nodeSet = new JV.k(eV.map(((eV, UV) => JV.m.define({
          name: UV >= this.minRepeatTerm ? void 0 : eV,
          id: UV,
          props: YV[UV],
          top: xV.indexOf(UV) > -1,
          error: 0 == UV,
          skipped: VV.skippedNodes && VV.skippedNodes.indexOf(UV) > -1
        })))), VV.propSources && (this.nodeSet = this.nodeSet.extend(...VV.propSources)), this.strict = !1, this.bufferLength = JV.e;
        let yV = QV(VV.tokenData);
        this.context = VV.context, this.specializerSpecs = VV.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
        for (let JV = 0; JV < this.specializerSpecs.length; JV++) this.specialized[JV] = this.specializerSpecs[JV].term;
        this.specializers = this.specializerSpecs.map(GV), this.states = QV(VV.states, Uint32Array), this.data = QV(VV.stateData), this.goto = QV(VV.goto), this.maxTerm = VV.maxTerm, this.tokenizers = VV.tokenizers.map((VV => "number" == typeof VV ? new vV(yV, VV) : VV)), this.topRules = VV.topRules, this.dialects = VV.dialects || {}, this.dynamicPrecedences = VV.dynamicPrecedences || null, this.tokenPrecTable = VV.tokenPrec, this.termNames = VV.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]]
      }
      createParse(VV, eV, xV) {
        let JV = new PV(this, VV, eV, xV);
        for (let YV of this.wrappers) JV = YV(JV, VV, eV, xV);
        return JV
      }
      getGoto(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          JV = this.goto;
        if (eV >= JV[0]) return -1;
        for (let YV = JV[eV + 1];;) {
          let eV = JV[YV++],
            UV = 1 & eV,
            yV = JV[YV++];
          if (UV && xV) return yV;
          for (let xV = YV + (eV >> 1); YV < xV; YV++)
            if (JV[YV] == VV) return yV;
          if (UV) return -1
        }
      }
      hasAction(VV, eV) {
        let xV = this.data;
        for (let JV = 0; JV < 2; JV++)
          for (let YV, UV = this.stateSlot(VV, JV ? 2 : 1);; UV += 3) {
            if (65535 == (YV = xV[UV])) {
              if (1 != xV[UV + 1]) {
                if (2 == xV[UV + 1]) return zV(xV, UV + 2);
                break
              }
              YV = xV[UV = zV(xV, UV + 2)]
            }
            if (YV == eV || 0 == YV) return zV(xV, UV + 1)
          }
        return 0
      }
      stateSlot(VV, eV) {
        return this.states[6 * VV + eV]
      }
      stateFlag(VV, eV) {
        return (this.stateSlot(VV, 0) & eV) > 0
      }
      validAction(VV, eV) {
        return !!this.allActions(VV, (VV => VV == eV || null))
      }
      allActions(VV, eV) {
        let xV = this.stateSlot(VV, 4),
          JV = xV ? eV(xV) : void 0;
        for (let YV = this.stateSlot(VV, 1); null == JV; YV += 3) {
          if (65535 == this.data[YV]) {
            if (1 != this.data[YV + 1]) break;
            YV = zV(this.data, YV + 2)
          }
          JV = eV(zV(this.data, YV + 1))
        }
        return JV
      }
      nextStates(VV) {
        let eV = [];
        for (let xV = this.stateSlot(VV, 1);; xV += 3) {
          if (65535 == this.data[xV]) {
            if (1 != this.data[xV + 1]) break;
            xV = zV(this.data, xV + 2)
          }
          if (0 == (1 & this.data[xV + 2])) {
            let VV = this.data[xV + 1];
            eV.some(((eV, xV) => 1 & xV && eV == VV)) || eV.push(this.data[xV], VV)
          }
        }
        return eV
      }
      configure(VV) {
        let eV = Object.assign(Object.create(MV.prototype), this);
        if (VV.props && (eV.nodeSet = this.nodeSet.extend(...VV.props)), VV.top) {
          let xV = this.topRules[VV.top];
          if (!xV) throw new RangeError(`Invalid top rule name ${VV.top}`);
          eV.top = xV
        }
        return VV.tokenizers && (eV.tokenizers = this.tokenizers.map((eV => {
          let xV = VV.tokenizers.find((VV => VV.from == eV));
          return xV ? xV.to : eV
        }))), VV.specializers && (eV.specializers = this.specializers.slice(), eV.specializerSpecs = this.specializerSpecs.map(((xV, JV) => {
          let YV = VV.specializers.find((VV => VV.from == xV.external));
          if (!YV) return xV;
          let UV = Object.assign(Object.assign({}, xV), {
            external: YV.to
          });
          return eV.specializers[JV] = GV(UV), UV
        }))), VV.contextTracker && (eV.context = VV.contextTracker), VV.dialect && (eV.dialect = this.parseDialect(VV.dialect)), null != VV.strict && (eV.strict = VV.strict), VV.wrap && (eV.wrappers = eV.wrappers.concat(VV.wrap)), null != VV.bufferLength && (eV.bufferLength = VV.bufferLength), eV
      }
      hasWrappers() {
        return this.wrappers.length > 0
      }
      getName(VV) {
        return this.termNames ? this.termNames[VV] : String(VV <= this.maxNode && this.nodeSet.types[VV].name || VV)
      }
      get eofTerm() {
        return this.maxNode + 1
      }
      get topNode() {
        return this.nodeSet.types[this.top[1]]
      }
      dynamicPrecedence(VV) {
        let eV = this.dynamicPrecedences;
        return null == eV ? 0 : eV[VV] || 0
      }
      parseDialect(VV) {
        let eV = Object.keys(this.dialects),
          xV = eV.map((() => !1));
        if (VV)
          for (let YV of VV.split(" ")) {
            let VV = eV.indexOf(YV);
            VV >= 0 && (xV[VV] = !0)
          }
        let JV = null;
        for (let YV = 0; YV < eV.length; YV++)
          if (!xV[YV])
            for (let VV, xV = this.dialects[eV[YV]]; 65535 != (VV = this.data[xV++]);)(JV || (JV = new Uint8Array(this.maxTerm + 1)))[VV] = 1;
        return new NV(VV, xV, JV)
      }
      static deserialize(VV) {
        return new MV(VV)
      }
    }

    function zV(VV, eV) {
      return VV[eV] | VV[eV + 1] << 16
    }

    function GV(VV) {
      if (VV.external) {
        let eV = VV.extend ? 1 : 0;
        return (xV, JV) => VV.external(xV, JV) << 1 | eV
      }
      return VV.get
    }
    var WV = xV(44267);
    const RV = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288],
      gV = new class {
        constructor(VV) {
          this.start = VV.start, this.shift = VV.shift || XV, this.reduce = VV.reduce || XV, this.reuse = VV.reuse || XV, this.hash = VV.hash || (() => 0), this.strict = !1 !== VV.strict
        }
      }({
        start: !1,
        shift: (VV, eV) => 5 == eV || 6 == eV || 320 == eV ? VV : 321 == eV,
        strict: !1
      }),
      DV = new kV(((VV, eV) => {
        let {
          next: xV
        } = VV;
        (125 == xV || -1 == xV || eV.context) && VV.acceptToken(318)
      }), {
        contextual: !0,
        fallback: !0
      }),
      iV = new kV(((VV, eV) => {
        let xV, {
          next: JV
        } = VV;
        RV.indexOf(JV) > -1 || (47 != JV || 47 != (xV = VV.peek(1)) && 42 != xV) && (125 == JV || 59 == JV || -1 == JV || eV.context || VV.acceptToken(316))
      }), {
        contextual: !0
      }),
      CV = new kV(((VV, eV) => {
        91 != VV.next || eV.context || VV.acceptToken(317)
      }), {
        contextual: !0
      }),
      aV = new kV(((VV, eV) => {
        let {
          next: xV
        } = VV;
        if (43 == xV || 45 == xV) {
          if (VV.advance(), xV == VV.next) {
            VV.advance();
            let xV = !eV.context && eV.canShift(1);
            VV.acceptToken(xV ? 1 : 2)
          }
        } else 63 == xV && 46 == VV.peek(1) && (VV.advance(), VV.advance(), (VV.next < 48 || VV.next > 57) && VV.acceptToken(3))
      }), {
        contextual: !0
      });

    function oV(VV, eV) {
      return VV >= 65 && VV <= 90 || VV >= 97 && VV <= 122 || 95 == VV || VV >= 192 || !eV && VV >= 48 && VV <= 57
    }
    const cV = new kV(((VV, eV) => {
        if (60 != VV.next || !eV.dialectEnabled(0)) return;
        if (VV.advance(), 47 == VV.next) return;
        let xV = 0;
        for (; RV.indexOf(VV.next) > -1;) VV.advance(), xV++;
        if (oV(VV.next, !0)) {
          for (VV.advance(), xV++; oV(VV.next, !1);) VV.advance(), xV++;
          for (; RV.indexOf(VV.next) > -1;) VV.advance(), xV++;
          if (44 == VV.next) return;
          for (let eV = 0;; eV++) {
            if (7 == eV) {
              if (!oV(VV.next, !0)) return;
              break
            }
            if (VV.next != "extends".charCodeAt(eV)) break;
            VV.advance(), xV++
          }
        }
        VV.acceptToken(4, -xV)
      })),
      hV = (0, WV.g)({
        "get set async static": WV.j.modifier,
        "for while do if else switch try catch finally return throw break continue default case defer": WV.j.controlKeyword,
        "in of await yield void typeof delete instanceof as satisfies": WV.j.operatorKeyword,
        "let var const using function class extends": WV.j.definitionKeyword,
        "import export from": WV.j.moduleKeyword,
        "with debugger new": WV.j.keyword,
        TemplateString: WV.j.special(WV.j.string),
        super: WV.j.atom,
        BooleanLiteral: WV.j.bool,
        this: WV.j.self,
        null: WV.j.null,
        Star: WV.j.modifier,
        VariableName: WV.j.variableName,
        "CallExpression/VariableName TaggedTemplateExpression/VariableName": WV.j.function(WV.j.variableName),
        VariableDefinition: WV.j.definition(WV.j.variableName),
        Label: WV.j.labelName,
        PropertyName: WV.j.propertyName,
        PrivatePropertyName: WV.j.special(WV.j.propertyName),
        "CallExpression/MemberExpression/PropertyName": WV.j.function(WV.j.propertyName),
        "FunctionDeclaration/VariableDefinition": WV.j.function(WV.j.definition(WV.j.variableName)),
        "ClassDeclaration/VariableDefinition": WV.j.definition(WV.j.className),
        "NewExpression/VariableName": WV.j.className,
        PropertyDefinition: WV.j.definition(WV.j.propertyName),
        PrivatePropertyDefinition: WV.j.definition(WV.j.special(WV.j.propertyName)),
        UpdateOp: WV.j.updateOperator,
        "LineComment Hashbang": WV.j.lineComment,
        BlockComment: WV.j.blockComment,
        Number: WV.j.number,
        String: WV.j.string,
        Escape: WV.j.escape,
        ArithOp: WV.j.arithmeticOperator,
        LogicOp: WV.j.logicOperator,
        BitOp: WV.j.bitwiseOperator,
        CompareOp: WV.j.compareOperator,
        RegExp: WV.j.regexp,
        Equals: WV.j.definitionOperator,
        Arrow: WV.j.function(WV.j.punctuation),
        ": Spread": WV.j.punctuation,
        "( )": WV.j.paren,
        "[ ]": WV.j.squareBracket,
        "{ }": WV.j.brace,
        "InterpolationStart InterpolationEnd": WV.j.special(WV.j.brace),
        ".": WV.j.derefOperator,
        ", ;": WV.j.separator,
        "@": WV.j.meta,
        TypeName: WV.j.typeName,
        TypeDefinition: WV.j.definition(WV.j.typeName),
        "type enum interface implements namespace module declare": WV.j.definitionKeyword,
        "abstract global Privacy readonly override": WV.j.modifier,
        "is keyof unique infer asserts": WV.j.operatorKeyword,
        JSXAttributeValue: WV.j.attributeValue,
        JSXText: WV.j.content,
        "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": WV.j.angleBracket,
        "JSXIdentifier JSXNameSpacedName": WV.j.tagName,
        "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": WV.j.attributeName,
        "JSXBuiltin/JSXIdentifier": WV.j.standard(WV.j.tagName)
      }),
      lV = {
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
      LV = {
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
      fV = {
        __proto__: null,
        "<": 193
      },
      mV = MV.deserialize({
        version: 14,
        states: "$F|Q%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Il'#IlO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JrO6[Q!0MxO'#JsO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO9XQMhO'#F|O9`Q`O'#F{OOQ!0Lf'#Js'#JsOOQ!0Lb'#Jr'#JrO9eQ`O'#GwOOQ['#K_'#K_O9pQ`O'#IYO9uQ!0LrO'#IZOOQ['#J`'#J`OOQ['#I_'#I_Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GsO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EyO;hQMhO'#FeO;xQ`O'#GsOOQO'#K`'#K`O;}Q`O'#K`O<]Q`O'#G{O<]Q`O'#G|O<]Q`O'#HOO9kQ`O'#HRO=SQ`O'#HUO>kQ`O'#CeO>{Q`O'#HcO?TQ`O'#HiO?TQ`O'#HkO`QlO'#HmO?TQ`O'#HoO?TQ`O'#HrO?YQ`O'#HxO?_Q!0LsO'#IOO%[QlO'#IQO?jQ!0LsO'#ISO?uQ!0LsO'#IUO9uQ!0LrO'#IWO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jv'#JvO%[QlO'#JvOOQO'#Jy'#JyOOQO'#Ih'#IhOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J}'#J}OC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jx'#JxODlQpO'#JyOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CD})CD}OOOO'#I`'#I`OFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ia'#IaOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Ic'#IcOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IdOGyQ`O'#JtOIxQ!fO'#JtO+}QlO'#JtOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KTOKPQ`O'#KSOKPQ`O'#KSOKXQ`O,5;^OK^Q`O'#KROOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KQONtQ`O'#KPO9eQ`O'#KPO! YQ`O'#KPO! bQ`O,5;]O! gQ`O'#KPO!#lQ!fO'#JsOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#Jz'#JzOOQO-E<j-E<jO9kQ`O,5=_O!$rQ`O,5=_O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;dO!(|QpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)[QlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IpO!+_Q!0LrO,5<iO%[QlO,5;eO!&zQMhO,5;eO!+|QMhO,5;eO!-nQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-uQ,UO'#FjO!.rQ,UO'#KXO!.^Q,UO'#KXO!.yQ,UO'#KXOOQO'#KX'#KXO!/_Q,UO,5<SOOOW,5<`,5<`O!/pQlO'#FvOOOW'#Io'#IoO7VO7dO,5<QO!/wQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<eO!1pQ`O,5<hO!3YQ(CWO'#GXO!3jQ`O'#GYO!3oQ`O'#GYO!5_Q(CWO'#G^O!6dQpO'#GbOOQO'#Gn'#GnO!,TQMhO'#GmOOQO'#Gp'#GpO!,TQMhO'#GoO!7VQ$IUO'#JlOOQ!0Lh'#Jl'#JlO!7aQ`O'#JkO!7oQ`O'#JjO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<eO1SQ`O'#DZO!,TQMhO'#GPO!,TQMhO'#GRO!8gQ`O'#GTO!8lQ`O'#GUO!3oQ`O'#G[O!,TQMhO'#GaO<]Q`O'#JkO!8qQ`O'#EqO!9`Q`O,5<gOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KR'#KRO!:iQ!0LrO'#KaO9uQ!0LrO,5=cO`QlO,5>tOOQ['#Jh'#JhOOQ[,5>u,5>uOOQ[-E<]-E<]O!<hQ!0MxO,5:bO!:]QpO,5:`O!?RQ!0MxO,5:jO%[QlO,5:jO!AiQ!0MxO,5:lOOQO,5@z,5@zO!BYQMhO,5=_O!BhQ!0LrO'#JiO9`Q`O'#JiO!ByQ!0LrO,59ZO!CUQpO,59ZO!C^QMhO,59ZO:dQMhO,59ZO!CiQ`O,5;ZO!CqQ`O'#HbO!DVQ`O'#KdO%[QlO,5;}O!:]QpO,5<PO!D_Q`O,5=zO!DdQ`O,5=zO!DiQ`O,5=zO!DwQ`O,5=zO9uQ!0LrO,5=zO<]Q`O,5=jOOQO'#Cy'#CyO!EOQpO,5=gO!EWQMhO,5=hO!EcQ`O,5=jO!EhQ!bO,5=mO!EpQ`O'#K`O?YQ`O'#HWO9kQ`O'#HYO!EuQ`O'#HYO:dQMhO'#H[O!EzQ`O'#H[OOQ[,5=p,5=pO!FPQ`O'#H]O!FbQ`O'#CoO!FgQ`O,59PO!FqQ`O,59PO!HvQlO,59POOQ[,59P,59PO!IWQ!0LrO,59PO%[QlO,59PO!KcQlO'#HeOOQ['#Hf'#HfOOQ['#Hg'#HgO`QlO,5=}O!KyQ`O,5=}O`QlO,5>TO`QlO,5>VO!LOQ`O,5>XO`QlO,5>ZO!LTQ`O,5>^O!LYQlO,5>dOOQ[,5>j,5>jO%[QlO,5>jO9uQ!0LrO,5>lOOQ[,5>n,5>nO#!dQ`O,5>nOOQ[,5>p,5>pO#!dQ`O,5>pOOQ[,5>r,5>rO##QQpO'#D_O%[QlO'#JvO##sQpO'#JvO##}QpO'#DmO#$`QpO'#DmO#&qQlO'#DmO#&xQ`O'#JuO#'QQ`O,5:WO#'VQ`O'#EtO#'eQ`O'#KUO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CUQpO,5;YO!C^QMhO,5;YO:dQMhO,5;YO#(`Q`O,5@bO#(eQ07dO,5:sOOQO-E<f-E<fO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!ByQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CUQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I^'#I^P#+RO&2DjO,58|POOO,58|,58|OOOO-E<^-E<^OOQ!0Lh1G.p1G.pOOOO-E<_-E<_OOOO,59},59}O#+^Q!bO,59}OOOO-E<a-E<aOOQ!0Lf1G/g1G/gO#+cQ!fO,5?OO+}QlO,5?OOOQO,5?U,5?UO#+mQlO'#IdOOQO-E<b-E<bO#+zQ`O,5@`O#,SQ!fO,5@`O#,ZQ`O,5@nOOQ!0Lf1G/m1G/mO%[QlO,5@oO#,cQ`O'#IjOOQO-E<h-E<hO#,ZQ`O,5@nOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@lO#,wQ!0LrO,5@lO#-YQ!0LrO,5@lO#-aQ`O,5@kO9eQ`O,5@kO#-iQ`O,5@kO#-wQ`O'#ImO#-aQ`O,5@kOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2yO9kQ`O1G2yOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0rQ!0MzO'#JlO!$wQlO1G0uO#2}Q!fO'#JwO%[QlO'#JwO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#3^Q`O1G1OO#5rQ!0MxO1G1PO#5yQ!0MxO1G1PO#8aQ!0MxO1G1PO#8hQ!0MxO1G1PO#;OQ!0MxO1G1PO#=fQ!0MxO1G1PO#=mQ!0MxO1G1PO#=tQ!0MxO1G1PO#@[Q!0MxO1G1PO#@cQ!0MxO1G1PO#BpQ?MtO'#CiO#DkQ?MtO1G1`O#DrQ?MtO'#JsO#EVQ!0MxO,5?[OOQ!0Lb-E<n-E<nO#GdQ!0MxO1G1PO#HaQ!0MzO1G1POOQ!0Lf1G1P1G1PO#IdQMjO'#J|O#InQ`O,5:xO#IsQ!0MxO1G1cO#JgQ,UO,5<WO#JoQ,UO,5<XO#JwQ,UO'#FoO#K`Q`O'#FnOOQO'#KY'#KYOOQO'#In'#InO#KeQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#KvQ?MtO'#JrO#LQQ`O,5<bO!)[QlO,5<bOOOW-E<m-E<mOOQ!0Lf1G1l1G1lO#LVQpO'#KXOOQ!0Lf,5<d,5<dO#L_QpO,5<dO#LdQMhO'#DTOOOO'#Ib'#IbO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8lQ`O'#IrO#LvQ`O,5<zOOQ!0Lh,5<w,5<wO!,TQMhO'#IuO#MdQMjO,5=XO!,TQMhO'#IwO#NVQMjO,5=ZO!&zQMhO,5=]OOQO1G2S1G2SO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GbO$!dQ!dO,5<sO$!kQ`O'#K[O9eQ`O'#K[O$!yQ`O,5<uO$#aQ!dO'#C{O!,TQMhO,5<tO$#kQ`O'#GZO$$PQ`O,5<tO$$UQ!dO'#GWO$$cQ!dO'#K]O$$mQ`O'#K]O!&zQMhO'#K]O$$rQ`O,5<xO$$wQlO'#JvO$%RQpO'#GcO#$`QpO'#GcO$%dQ`O'#GgO!3oQ`O'#GkO$%iQ!0LrO'#ItO$%tQpO,5<|OOQ!0Lp,5<|,5<|O$%{QpO'#GcO$&YQpO'#GdO$&kQpO'#GdO$&pQMjO,5=XO$'QQMjO,5=ZOOQ!0Lh,5=^,5=^O!,TQMhO,5@VO!,TQMhO,5@VO$'bQ`O'#IyO$'vQ`O,5@UO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@VO$)TQ$IYO,59uOOQ!0Lh'#Jp'#JpO$)vQMjO,5<kO$*iQMjO,5<mO@zQ`O,5<oOOQ!0Lh,5<p,5<pO$*sQ`O,5<vO$*xQMjO,5<{O$+YQ`O'#KPO!$wQlO1G2RO$+_Q`O1G2RO9eQ`O'#KSO9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I{O$+dQ!0LrO,5@{OOQ[1G2}1G2}OOQ[1G4`1G4`OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-fQ!0MxO1G0UOOQ[1G2y1G2yO!&zQMhO1G2yO%[QlO1G2yO#.tQ`O1G2yO$/jQMhO'#EkOOQ!0Lb,5@T,5@TO$/wQ!0LrO,5@TOOQ[1G.u1G.uO!ByQ!0LrO1G.uO!CUQpO1G.uO!C^QMhO1G.uO$0YQ`O1G0uO$0_Q`O'#CiO$0jQ`O'#KeO$0rQ`O,5=|O$0wQ`O'#KeO$0|Q`O'#KeO$1[Q`O'#JRO$1jQ`O,5AOO$1rQ!fO1G1iOOQ!0Lf1G1k1G1kO9kQ`O1G3fO@zQ`O1G3fO$1yQ`O1G3fO$2OQ`O1G3fO!DiQ`O1G3fO9uQ!0LrO1G3fOOQ[1G3f1G3fO!EcQ`O1G3UO!&zQMhO1G3RO$2TQ`O1G3ROOQ[1G3S1G3SO!&zQMhO1G3SO$2YQ`O1G3SO$2bQpO'#HQOOQ[1G3U1G3UO!6_QpO'#I}O!EhQ!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$2jQMhO,5=tO9kQ`O,5=tO$%dQ`O,5=vO9`Q`O,5=vO!CUQpO,5=vO!C^QMhO,5=vO:dQMhO,5=vO$2xQ`O'#KcO$3TQ`O,5=wOOQ[1G.k1G.kO$3YQ!0LrO1G.kO@zQ`O1G.kO$3eQ`O1G.kO9uQ!0LrO1G.kO$5mQ!fO,5AQO$5zQ`O,5AQO9eQ`O,5AQO$6VQlO,5>PO$6^Q`O,5>POOQ[1G3i1G3iO`QlO1G3iOOQ[1G3o1G3oOOQ[1G3q1G3qO?TQ`O1G3sO$6cQlO1G3uO$:gQlO'#HtOOQ[1G3x1G3xO$:tQ`O'#HzO?YQ`O'#H|OOQ[1G4O1G4OO$:|QlO1G4OO9uQ!0LrO1G4UOOQ[1G4W1G4WOOQ!0Lb'#G_'#G_O9uQ!0LrO1G4YO9uQ!0LrO1G4[O$?TQ`O,5@bO!)[QlO,5;`O9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CUQpO,5:XO$?YQ?MtO,5:XOOQO,5;`,5;`O$?dQpO'#IeO$?zQ`O,5@aOOQ!0Lf1G/r1G/rO$@SQpO'#IkO$@^Q`O,5@pOOQ!0Lb1G0y1G0yO#$`QpO,5:XOOQO'#Ig'#IgO$@fQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CUQpO1G0tO!C^QMhO1G0tOOQ!0Lb1G5|1G5|O!ByQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@mQ!0LrO1G0mO$@xQ!0LrO1G0mO!CUQpO1G0^ODWQpO1G0^O$AWQ!0LrO1G0mOOQO1G0^1G0^O$AlQ!0MxO1G0mPOOO-E<[-E<[POOO1G.h1G.hOOOO1G/i1G/iO$AvQ!bO,5<iO$BOQ!fO1G4jOOQO1G4p1G4pO%[QlO,5?OO$BYQ`O1G5zO$BbQ`O1G6YO$BjQ!fO1G6ZO9eQ`O,5?UO$BtQ!0MxO1G6WO%[QlO1G6WO$CUQ!0LrO1G6WO$CgQ`O1G6VO$CgQ`O1G6VO9eQ`O1G6VO$CoQ`O,5?XO9eQ`O,5?XOOQO,5?X,5?XO$DTQ`O,5?XO$+YQ`O,5?XOOQO-E<k-E<kOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(e7+(eO!&zQMhO7+(eO%[QlO7+(eO$DcQ`O7+(eO$DnQMhO7+(eO$D|Q!0MzO,5=XO$GXQ!0MzO,5=ZO$IdQ!0MzO,5=XO$KuQ!0MzO,5=ZO$NWQ!0MzO,59uO%!]Q!0MzO,5<kO%$hQ!0MzO,5<mO%&sQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%)UQ!0MxO7+&aO%)xQlO'#IfO%*VQ`O,5@cO%*_Q!fO,5@cOOQ!0Lf1G0P1G0PO%*iQ`O7+&jOOQ!0Lf7+&j7+&jO%*nQ?MtO,5:fO%[QlO7+&zO%*xQ?MtO,5:bO%+VQ?MtO,5:jO%+aQ?MtO,5:lO%+kQMhO'#IiO%+uQ`O,5@hOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%+}Q!jO,5<ZO!)[QlO,5<YOOQO-E<l-E<lOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%,YQ`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%,_Q!dO,59oOOOO-E<`-E<`OOQ!0Lh1G/X1G/XO%,fQ!0MxO7+'kOOQ!0Lh,5?^,5?^O%-YQMhO1G2fP%-aQ`O'#IrPOQ!0Lh-E<p-E<pO%-}QMjO,5?aOOQ!0Lh-E<s-E<sO%.pQMjO,5?cOOQ!0Lh-E<u-E<uO%.zQ!dO1G2wO%/RQ!dO'#CrO%/iQMhO'#KSO$$wQlO'#JvOOQ!0Lh1G2_1G2_O%/sQ`O'#IqO%0[Q`O,5@vO%0[Q`O,5@vO%0dQ`O,5@vO%0oQ`O,5@vOOQO1G2a1G2aO%0}QMjO1G2`O$+YQ`O'#K[O!,TQMhO1G2`O%1_Q(CWO'#IsO%1lQ`O,5@wO!&zQMhO,5@wO%1tQ!dO,5@wOOQ!0Lh1G2d1G2dO%4UQ!fO'#CiO%4`Q`O,5=POOQ!0Lb,5<},5<}O%4hQpO,5<}OOQ!0Lb,5=O,5=OOCwQ`O,5<}O%4sQpO,5<}OOQ!0Lb,5=R,5=RO$+YQ`O,5=VOOQO,5?`,5?`OOQO-E<r-E<rOOQ!0Lp1G2h1G2hO#$`QpO,5<}O$$wQlO,5=PO%5RQ`O,5=OO%5^QpO,5=OO!,TQMhO'#IuO%6WQMjO1G2sO!,TQMhO'#IwO%6yQMjO1G2uO%7TQMjO1G5qO%7_QMjO1G5qOOQO,5?e,5?eOOQO-E<w-E<wOOQO1G.{1G.{O!,TQMhO1G5qO!,TQMhO1G5qO!:]QpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%7lQ`O1G2ZO!,TQMhO1G2bO%7qQ!0MxO7+'mOOQ!0Lf7+'m7+'mO!$wQlO7+'mO%8eQ`O,5;`OOQ!0Lb,5?g,5?gOOQ!0Lb-E<y-E<yO%8jQ!dO'#K^O#(ZQ`O7+(eO4UQ!fO7+(eO$DfQ`O7+(eO%8tQ!0MvO'#CiO%9XQ!0MvO,5=SO%9lQ`O,5=SO%9tQ`O,5=SOOQ!0Lb1G5o1G5oOOQ[7+$a7+$aO!ByQ!0LrO7+$aO!CUQpO7+$aO!$wQlO7+&aO%9yQ`O'#JQO%:bQ`O,5APOOQO1G3h1G3hO9kQ`O,5APO%:bQ`O,5APO%:jQ`O,5APOOQO,5?m,5?mOOQO-E=P-E=POOQ!0Lf7+'T7+'TO%:oQ`O7+)QO9uQ!0LrO7+)QO9kQ`O7+)QO@zQ`O7+)QO%:tQ`O7+)QOOQ[7+)Q7+)QOOQ[7+(p7+(pO%:yQ!0MvO7+(mO!&zQMhO7+(mO!E^Q`O7+(nOOQ[7+(n7+(nO!&zQMhO7+(nO%;TQ`O'#KbO%;`Q`O,5=lOOQO,5?i,5?iOOQO-E<{-E<{OOQ[7+(s7+(sO%<rQpO'#HZOOQ[1G3`1G3`O!&zQMhO1G3`O%[QlO1G3`O%<yQ`O1G3`O%=UQMhO1G3`O9uQ!0LrO1G3bO$%dQ`O1G3bO9`Q`O1G3bO!CUQpO1G3bO!C^QMhO1G3bO%=dQ`O'#JPO%=xQ`O,5@}O%>QQpO,5@}OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>]Q`O7+$VO%[QlO1G6lO%[QlO1G6mO%>bQ!0LrO1G6lO%>lQlO1G3kO%>sQ`O1G3kO%>xQlO1G3kOOQ[7+)T7+)TO9uQ!0LrO7+)_O`QlO7+)aOOQ['#Kh'#KhOOQ['#JS'#JSO%?PQlO,5>`OOQ[,5>`,5>`O%[QlO'#HuO%?^Q`O'#HwOOQ[,5>f,5>fO9eQ`O,5>fOOQ[,5>h,5>hOOQ[7+)j7+)jOOQ[7+)p7+)pOOQ[7+)t7+)tOOQ[7+)v7+)vO%?cQpO1G5|O%?}Q?MtO1G0zO%@XQ`O1G0zOOQO1G/s1G/sO%@dQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?V,5?VOOQO-E<i-E<iO!CUQpO1G/sOOQO-E<e-E<eOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CUQpO7+&`OOQO7+%x7+%xO$AlQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@nQ!0LrO7+&XO!ByQ!0LrO7+%xO!CUQpO7+%xO%@yQ!0LrO7+&XO%AXQ!0MxO7++rO%[QlO7++rO%AiQ`O7++qO%AiQ`O7++qOOQO1G4s1G4sO9eQ`O1G4sO%AqQ`O1G4sOOQS7+%}7+%}O#(ZQ`O<<LPO4UQ!fO<<LPO%BPQ`O<<LPOOQ[<<LP<<LPO!&zQMhO<<LPO%[QlO<<LPO%BXQ`O<<LPO%BdQ!0MzO,5?aO%DoQ!0MzO,5?cO%FzQ!0MzO1G2`O%I]Q!0MzO1G2sO%KhQ!0MzO1G2uO%MsQ!fO,5?QO%[QlO,5?QOOQO-E<d-E<dO%M}Q`O1G5}OOQ!0Lf<<JU<<JUO%NVQ?MtO1G0uO&!^Q?MtO1G1PO&!eQ?MtO1G1PO&$fQ?MtO1G1PO&$mQ?MtO1G1PO&&nQ?MtO1G1PO&(oQ?MtO1G1PO&(vQ?MtO1G1PO&(}Q?MtO1G1PO&+OQ?MtO1G1PO&+VQ?MtO1G1PO&+^Q!0MxO<<JfO&-UQ?MtO1G1PO&.RQ?MvO1G1PO&/UQ?MvO'#JlO&1[Q?MtO1G1cO&1iQ?MtO1G0UO&1sQMjO,5?TOOQO-E<g-E<gO!)[QlO'#FqOOQO'#KZ'#KZOOQO1G1u1G1uO&1}Q`O1G1tO&2SQ?MtO,5?[OOOW7+'h7+'hOOOO1G/Z1G/ZO&2^Q!dO1G4xOOQ!0Lh7+(Q7+(QP!&zQMhO,5?^O!,TQMhO7+(cO&2eQ`O,5?]O9eQ`O,5?]O$+YQ`O,5?]OOQO-E<o-E<oO&2sQ`O1G6bO&2sQ`O1G6bO&2{Q`O1G6bO&3WQMjO7+'zO&3hQ!dO,5?_O&3rQ`O,5?_O!&zQMhO,5?_OOQO-E<q-E<qO&3wQ!dO1G6cO&4RQ`O1G6cO&4ZQ`O1G2kO!&zQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%4hQpO1G2iO!CUQpO1G2iOCwQ`O1G2iOOQ!0Lb1G2q1G2qO&4`QpO1G2iO&4nQ`O1G2kO$+YQ`O1G2jOCwQ`O1G2jO$$wQlO1G2kO&4vQ`O1G2jO&5jQMjO,5?aOOQ!0Lh-E<t-E<tO&6]QMjO,5?cOOQ!0Lh-E<v-E<vO!,TQMhO7++]O&6gQMjO7++]O&6qQMjO7++]OOQ!0Lh1G/c1G/cO&7OQ`O1G/cOOQ!0Lh7+'u7+'uO&7TQMjO7+'|O&7eQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&8XQ`O1G0zO!&zQMhO'#IzO&8^Q`O,5@xO&:`Q!fO<<LPO!&zQMhO1G2nO&:gQ!0LrO1G2nOOQ[<<G{<<G{O!ByQ!0LrO<<G{O&:xQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?l,5?lO&;lQ`O,5?lO&;qQ`O,5?lOOQO-E=O-E=OO&<PQ`O1G6kO&<PQ`O1G6kO9kQ`O1G6kO@zQ`O<<LlOOQ[<<Ll<<LlO&<XQ`O<<LlO9uQ!0LrO<<LlO9kQ`O<<LlOOQ[<<LX<<LXO%:yQ!0MvO<<LXOOQ[<<LY<<LYO!E^Q`O<<LYO&<^QpO'#I|O&<iQ`O,5@|O!)[QlO,5@|OOQ[1G3W1G3WOOQO'#JO'#JOO9uQ!0LrO'#JOO&<qQpO,5=uOOQ[,5=u,5=uO&<xQpO'#EgO&=PQpO'#GeO&=UQ`O7+(zO&=ZQ`O7+(zOOQ[7+(z7+(zO!&zQMhO7+(zO%[QlO7+(zO&=cQ`O7+(zOOQ[7+(|7+(|O9uQ!0LrO7+(|O$%dQ`O7+(|O9`Q`O7+(|O!CUQpO7+(|O&=nQ`O,5?kOOQO-E<}-E<}OOQO'#H^'#H^O&=yQ`O1G6iO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>RQ`O7+,WO&>WQ`O7+,XO%[QlO7+,WO%[QlO7+,XOOQ[7+)V7+)VO&>]Q`O7+)VO&>bQlO7+)VO&>iQ`O7+)VOOQ[<<Ly<<LyOOQ[<<L{<<L{OOQ[-E=Q-E=QOOQ[1G3z1G3zO&>nQ`O,5>aOOQ[,5>c,5>cO&>sQ`O1G4QO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&>xQ?MtO1G6ZO?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AlQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!ByQ!0LrO<<IdO&?SQ!0LrO<<IsO&?_Q!0MxO<= ^O&?oQ`O<= ]OOQO7+*_7+*_O9eQ`O7+*_OOQ[ANAkANAkO&?wQ!fOANAkO!&zQMhOANAkO#(ZQ`OANAkO4UQ!fOANAkO&@OQ`OANAkO%[QlOANAkO&@WQ!0MzO7+'zO&BiQ!0MzO,5?aO&DtQ!0MzO,5?cO&GPQ!0MzO7+'|O&IbQ!fO1G4lO&IlQ?MtO7+&aO&KpQ?MvO,5=XO&MwQ?MvO,5=ZO&NXQ?MvO,5=XO&NiQ?MvO,5=ZO&NyQ?MvO,59uO'#PQ?MvO,5<kO'%SQ?MvO,5<mO''hQ?MvO,5<{O')^Q?MtO7+'kO')kQ?MtO7+'mO')xQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*d7+*dO')}QMjO<<K}OOQO1G4w1G4wO'*UQ`O1G4wO'*aQ`O1G4wO'*oQ`O7++|O'*oQ`O7++|O!&zQMhO1G4yO'*wQ!dO1G4yO'+RQ`O7++}O'+ZQ`O7+(VO'+fQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!CUQpO7+(TOCwQ`O7+(TO'+pQ`O7+(VO!&zQMhO7+(VO$+YQ`O7+(UO'+uQ`O7+(VOCwQ`O7+(UO'+}QMjO<<NwO!,TQMhO<<NwOOQ!0Lh7+$}7+$}O',XQ!dO,5?fOOQO-E<x-E<xO',cQ!0MvO7+(YO!&zQMhO7+(YOOQ[AN=gAN=gO9kQ`O1G5WOOQO1G5W1G5WO',sQ`O1G5WO',xQ`O7+,VO',xQ`O7+,VO9uQ!0LrOANBWO@zQ`OANBWOOQ[ANBWANBWO'-QQ`OANBWOOQ[ANAsANAsOOQ[ANAtANAtO'-VQ`O,5?hOOQO-E<z-E<zO'-bQ?MtO1G6hOOQO,5?j,5?jOOQO-E<|-E<|OOQ[1G3a1G3aO'-lQ`O,5=POOQ[<<Lf<<LfO!&zQMhO<<LfO&=UQ`O<<LfO'-qQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9uQ!0LrO<<LhO$%dQ`O<<LhO9`Q`O<<LhO'-yQpO1G5VO'.UQ`O7+,TOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= r<= rOOQ[<= s<= sO'.^Q`O<= rO'.cQ`O<= sOOQ[<<Lq<<LqO'.hQ`O<<LqO'.mQlO<<LqOOQ[1G3{1G3{O?YQ`O7+)lO'.tQ`O<<JQO'/PQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AlQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<My<<MyOOQ[G27VG27VO!&zQMhOG27VO#(ZQ`OG27VO'/ZQ!fOG27VO4UQ!fOG27VO'/bQ`OG27VO'/jQ?MtO<<JfO'/wQ?MvO1G2`O'1mQ?MvO,5?aO'3pQ?MvO,5?cO'5sQ?MvO1G2sO'7vQ?MvO1G2uO'9yQ?MtO<<KXO':WQ?MtO<<I{OOQO1G1w1G1wO!,TQMhOANAiOOQO7+*c7+*cO':eQ`O7+*cO':pQ`O<= hO':xQ!dO7+*eOOQ!0Lb<<Kq<<KqO$+YQ`O<<KqOCwQ`O<<KqO';SQ`O<<KqO!&zQMhO<<KqOOQ!0Lb<<Ko<<KoO!CUQpO<<KoO';_Q!dO<<KqOOQ!0Lb<<Kp<<KpO';iQ`O<<KqO!&zQMhO<<KqO$+YQ`O<<KpO';nQMjOANDcO';xQ!0MvO<<KtOOQO7+*r7+*rO9kQ`O7+*rO'<YQ`O<= qOOQ[G27rG27rO9uQ!0LrOG27rO@zQ`OG27rO!)[QlO1G5SO'<bQ`O7+,SO'<jQ`O1G2kO&=UQ`OANBQOOQ[ANBQANBQO!&zQMhOANBQO'<oQ`OANBQOOQ[ANBSANBSO9uQ!0LrOANBSO$%dQ`OANBSOOQO'#H_'#H_OOQO7+*q7+*qOOQ[G22wG22wOOQ[ANE^ANE^OOQ[ANE_ANE_OOQ[ANB]ANB]O'<wQ`OANB]OOQ[<<MW<<MWO!)[QlOAN?lOOQOG24yG24yO$AlQ!0MxOG24yO#(ZQ`OLD,qOOQ[LD,qLD,qO!&zQMhOLD,qO'<|Q!fOLD,qO'=TQ?MvO7+'zO'>yQ?MvO,5?aO'@|Q?MvO,5?cO'CPQ?MvO7+'|O'DuQMjOG27TOOQO<<M}<<M}OOQ!0LbANA]ANA]O$+YQ`OANA]OCwQ`OANA]O'EVQ!dOANA]OOQ!0LbANAZANAZO'E^Q`OANA]O!&zQMhOANA]O'EiQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N^<<N^OOQ[LD-^LD-^O9uQ!0LrOLD-^O'EsQ?MtO7+*nOOQO'#Gf'#GfOOQ[G27lG27lO&=UQ`OG27lO!&zQMhOG27lOOQ[G27nG27nO9uQ!0LrOG27nOOQ[G27wG27wO'E}Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#(ZQ`O!$(!]O!&zQMhO!$(!]O'FXQ!0MzOG27TOOQ!0LbG26wG26wO$+YQ`OG26wO'HjQ`OG26wOCwQ`OG26wO'HuQ!dOG26wO!&zQMhOG26wOOQ[!$(!x!$(!xOOQ[LD-WLD-WO&=UQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#(ZQ`O!)9EwOOQ!0LbLD,cLD,cO$+YQ`OLD,cOCwQ`OLD,cO'H|Q`OLD,cO'IXQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'I`Q?MvOG27TOOQ!0Lb!$( }!$( }O$+YQ`O!$( }OCwQ`O!$( }O'KUQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$+YQ`O!)9EiOCwQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$+YQ`O!.K;TOOQ!0Lb!4/0o!4/0oO!)[QlO'#DzO1PQ`O'#EXO'KaQ!fO'#JrO'KhQ!L^O'#DvO'KoQlO'#EOO'KvQ!fO'#CiO'N^Q!fO'#CiO!)[QlO'#EQO'NnQlO,5;ZO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO'#IpO(!qQ`O,5<iO!)[QlO,5;eO(!yQMhO,5;eO($dQMhO,5;eO!)[QlO,5;wO!&zQMhO'#GmO(!yQMhO'#GmO!&zQMhO'#GoO(!yQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GPO(!yQMhO'#GPO!&zQMhO'#GRO(!yQMhO'#GRO!&zQMhO'#GaO(!yQMhO'#GaO!)[QlO,5:jO($kQpO'#D_O($uQpO'#JvO!)[QlO,5@oO'NnQlO1G0uO(%PQ?MtO'#CiO!)[QlO1G2PO!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO(%ZQ!dO'#CrO!&zQMhO,5<tO(!yQMhO,5<tO'NnQlO1G2RO!)[QlO7+&zO!&zQMhO1G2`O(!yQMhO1G2`O!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO!&zQMhO1G2bO(!yQMhO1G2bO'NnQlO7+'mO'NnQlO7+&aO!&zQMhOANAiO(!yQMhOANAiO(%nQ`O'#EoO(%sQ`O'#EoO(%{Q`O'#F]O(&QQ`O'#EyO(&VQ`O'#KTO(&bQ`O'#KRO(&mQ`O,5;ZO(&rQMjO,5<eO(&yQ`O'#GYO('OQ`O'#GYO('TQ`O,5<eO(']Q`O,5<gO('eQ`O,5;ZO('mQ?MtO1G1`O('tQ`O,5<tO('yQ`O,5<tO((OQ`O,5<vO((TQ`O,5<vO((YQ`O1G2RO((_Q`O1G0uO((dQMjO<<K}O((kQMjO<<K}O((rQMhO'#F|O9`Q`O'#F{OAuQ`O'#EnO!)[QlO,5;tO!3oQ`O'#GYO!3oQ`O'#GYO!3oQ`O'#G[O!3oQ`O'#G[O!,TQMhO7+(cO!,TQMhO7+(cO%.zQ!dO1G2wO%.zQ!dO1G2wO!&zQMhO,5=]O!&zQMhO,5=]",
        stateData: "()x~O'|OS'}OSTOS(ORQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&W!WO&^!XO&`!YO&b!ZO&d![O&g!]O&m!^O&s!_O&u!`O&w!aO&y!bO&{!cO(TSO(VTO(YUO(aVO(o[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O(O!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'z]X(a]X(r]X(y]X(z]X~O!g%RX~P(qO_!}O(V#PO(W!}O(X#PO~O_#QO(X#PO(Y#PO(Z#QO~Ox#SO!U#TO(b#TO(c#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T<ZO(VTO(YUO(aVO(o[O~O![#ZO!]#WO!Y(hP!Y(vP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(VTO(YUO(aVO(o[O~Op#mO![#iO!|]O#i#lO#j#iO(T<[O!k(sP~P.iO!l#oO(T#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa(fX'z(fX'w(fX!k(fX!Y(fX!_(fX%i(fX!g(fX~P1qO#S$dO#`$eO$Q$eOP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX!_(gX%i(gX~Oa(gX'z(gX'w(gX!Y(gX!k(gXv(gX!g(gX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T$sO(VTO(YUO(a$uO(y$}O(z%POg(^P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(T%gO~O!g%mO~Oa%nO'z%nO~O!Q%rO~P%[O(U!lO~P%[O%n%vO~P%[Oh%VO!l%eO(T%gO(U!lO~Oe%}O!l%eO(T%gO~Oj$RO~O!_&PO(T%gO(U!lO(VTO(YUO`)WP~O!Q&SO!l&RO%j&VO&T&WO~P;SO!x#sO~O%s&YO!S)SX!_)SX(T)SX~O(T&ZO~Ol!PO!u&`O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&eOe&dO!x&bO%h&cO%{&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&kO#`&nO%j&iO(U!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'x&{O'z%nO~Oa%nO'x'OO'z%nO~Oa%nO'x'QO'z%nO~O'w]X!Y]Xv]X!k]X&[]X!_]X%i]X!g]X~P(qO!b'_O!c'WO!d'WO(U!lO(VTO(YUO~Os'UO!S'TO!['XO(e'SO!^(iP!^(xP~P@nOn'bO!_'`O(T%gO~Oe'gO!l%eO(T%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<VO#T!pO#U!pO#W!pO#X!pO(U!lO(VTO(YUO(e!mO(o!sO~O!b'mO!c'lO!d'lO#V!pO#['nO#]'nO~PBYOa%nOh%VO!g#vO!l%eO'z%nO(r'pO~O!p'tO#`'rO~PChOs!nO!S!oO(VTO(YUO(e!mO(o!sO~O!_XOs(mX!S(mX!b(mX!c(mX!d(mX!|(mX#T(mX#U(mX#V(mX#W(mX#X(mX#[(mX#](mX(U(mX(V(mX(Y(mX(e(mX(o(mX~O!c'lO!d'lO(U!lO~PDWO(P'xO(Q'xO(R'zO~O_!}O(V'|O(W!}O(X'|O~O_#QO(X'|O(Y'|O(Z#QO~Ov(OO~P%[Ox#SO!U#TO(b#TO(c(RO~O![(TO!Y'WX!Y'^X!]'WX!]'^X~P+}O!](VO!Y(hX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](VO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~O!Y(hX~PHRO!Y([O~O!Y(uX!](uX!g(uX!k(uX(r(uX~O#`(uX#k#dX!^(uX~PJUO#`(]O!Y(wX!](wX~O!](^O!Y(vX~O!Y(aO~O#`$eO~PJUO!^(bO~P`OR#zO!Q#yO!S#{O!l#xO(aVOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(r!na(y!na(z!na~Oa!na'z!na'w!na!Y!na!k!nav!na!_!na%i!na!g!na~PKlO!k(cO~O!g#vO#`(dO(r'pO!](tXa(tX'z(tX~O!k(tX~PNXO!S%hO!_%iO!|]O#i(iO#j(hO(T%gO~O!](jO!k(sX~O!k(lO~O!S%hO!_%iO#j(hO(T%gO~OP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~O!g#vO!k(gX~P! uOR(nO!Q(mO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(T!{a~P!#vO!x(rO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~O#k(xO~O![(zO!k(kP~P%[O(e(|O(o[O~O!S)OO!l#xO(e(|O(o[O~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]$_Oa$qa'z$qa'w$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)dO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Og(pP~P!,TO!Q)iO!g)hO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)hO!_({X$Z({X$]({X$_({X$f({X~O!Q)iO~P!.^O!Q)iO!_({X$Z({X$]({X$_({X$f({X~O!_)kO$Z)oO$])jO$_)jO$f)pO~O![)sO~P!)[O$]$hO$_$gO$f)wO~On$zX!Q$zX#S$zX'y$zX(y$zX(z$zX~OgmXg$zXnmX!]mX#`mX~P!0SOx)yO(b)zO(c)|O~On*VO!Q*OO'y*PO(y$}O(z%PO~Og)}O~P!1WOg*WO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S*YO!_*ZO!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op*`O![*^O(T*XO!k)OP~P!1uO#k*aO~O!l*bO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T*dO(VTO(YUO(a$uO(y$}O(z%PO~O![*gO!Y)PP~P!3tOr*sOs!nO!S*iO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO(e!mO~O!^*pO~P!5iO#S$dOn(`X!Q(`X'y(`X(y(`X(z(`X!](`X#`(`X~Og(`X$O(`X~P!6kOn*xO#`*wOg(_X!](_X~O!]*yOg(^X~Oj%dOk%dOl%dO(T&ZOg(^P~Os*|O~Og)}O(T&ZO~O!l+SO~O(T(vO~Op+WO!S%hO![#iO!_%iO!|]O#i#lO#j#iO(T%gO!k(sP~O!g#vO#k+XO~O!S%hO![+ZO!](^O!_%iO(T%gO!Y(vP~Os'[O!S+]O![+[O(VTO(YUO(e(|O~O!^(xP~P!9|O!]+^Oa)TX'z)TX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa!ja!]!ja'z!ja'w!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:tOR#zO!Q#yO!S#{O!l#xO(aVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(r!ra(y!ra(z!ra~Oa!ra'z!ra'w!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!=[OR#zO!Q#yO!S#{O!l#xO(aVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(r!ta(y!ta(z!ta~Oa!ta'z!ta'w!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?rOh%VOn+gO!_'`O%i+fO~O!g+iOa(]X!_(]X'z(]X!](]X~Oa%nO!_XO'z%nO~Oh%VO!l%eO~Oh%VO!l%eO(T%gO~O!g#vO#k(xO~Ob+tO%j+uO(T+qO(VTO(YUO!^)XP~O!]+vO`)WX~O[+zO~O`+{O~O!_&PO(T%gO(U!lO`)WP~O%j,OO~P;SOh%VO#`,SO~Oh%VOn,VO!_$|O~O!_,XO~O!Q,ZO!_XO~O%n%vO~O!x,`O~Oe,eO~Ob,fO(T#nO(VTO(YUO!^)VP~Oe%}O~O%j!QO(T&ZO~P=gO[,kO`,jO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(VTO(YUO(aVO(o[O~O!_!eO!u!gO$W!kO(T!dO~P!FyO`,jOa%nO'z%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa,pOl!OO!uwO%l!OO%m!OO%n!OO~P!IcO!l&oO~O&^,vO~O!_,xO~O&o,zO&q,{OP&laQ&laS&laY&laa&lad&lae&lal&lap&lar&las&lat&laz&la|&la!O&la!S&la!W&la!X&la!_&la!i&la!l&la!o&la!p&la!q&la!s&la!u&la!x&la!|&la$W&la$n&la%h&la%j&la%l&la%m&la%n&la%q&la%s&la%v&la%w&la%y&la&W&la&^&la&`&la&b&la&d&la&g&la&m&la&s&la&u&la&w&la&y&la&{&la'w&la(T&la(V&la(Y&la(a&la(o&la!^&la&e&lab&la&j&la~O(T-QO~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P#!iO!g-VO#`-UOh(jX!]#hX!^#hX!g(jX!l(jX~O!](jX!^(jX~P##[Oh%VO!g-XO!l%eO!]!aX!^!aX~Os!nO!S!oO(VTO(YUO(e!mO~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(VTO(YUO(aVO(o[O~O(T=QO~P#$qO!]-]O!^(iX~O!^-_O~O!g-VO#`-UO!]#hX!^#hX~O!]-`O!^(xX~O!^-bO~O!c-cO!d-cO(U!lO~P#$`O!^-fO~P'_On-iO!_'`O~O!Y-nO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(U!{a(V!{a(Y!{a(e!{a(o!{a~P!#vO!p-sO#`-qO~PChO!c-uO!d-uO(U!lO~PDWOa%nO#`-qO'z%nO~Oa%nO!g#vO#`-qO'z%nO~Oa%nO!g#vO!p-sO#`-qO'z%nO(r'pO~O(P'xO(Q'xO(R-zO~Ov-{O~O!Y'Wa!]'Wa~P!:tO![.PO!Y'WX!]'WX~P%[O!](VO!Y(ha~O!Y(ha~PHRO!](^O!Y(va~O!S%hO![.TO!_%iO(T%gO!Y'^X!]'^X~O#`.VO!](ta!k(taa(ta'z(ta~O!g#vO~P#,wO!](jO!k(sa~O!S%hO!_%iO#j.ZO(T%gO~Op.`O!S%hO![.]O!_%iO!|]O#i._O#j.]O(T%gO!]'aX!k'aX~OR.dO!l#xO~Oh%VOn.gO!_'`O%i.fO~Oa#ci!]#ci'z#ci'w#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:tOn>]O!Q*OO'y*PO(y$}O(z%PO~O#k#_aa#_a#`#_a'z#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#k(`XP(`XR(`X[(`Xa(`Xj(`Xr(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X'z(`X(a(`X(r(`X!k(`X!Y(`X'w(`Xv(`X!_(`X%i(`X!g(`X~P!6kO!].tO!k(kX~P!:tO!k.wO~O!Y.yO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#3cO#n$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#6QO#r$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(aVOa#mi!]#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(aVO(z#}Oa#mi!]#mi#z#mi#{#mi'z#mi(r#mi(y#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#;VO#x#mi~P#;VO#v$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(aVO(y#|O(z#}Oa#mi!]#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#={O#z$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X!]]X!^]X~O$O]X~P#@jOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO#z<gO#{<hO(aVO(r$YO(y#|O(z#}O~O$O.{O~P#BwO#S$dO#`<nO$Q<nO$O(gX!^(gX~P! uOa'da!]'da'z'da'w'da!k'da!Y'dav'da!_'da%i'da!g'da~P!:tO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO(y#mi(z#mi~P#EyOn>]O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P#EyO!]/POg(pX~P!1WOg/RO~Oa$Pi!]$Pi'z$Pi'w$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:tO$]/SO$_/SO~O$]/TO$_/TO~O!g)hO#`/UO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/VO~O!_)kO$Z/XO$])jO$_)jO$f/YO~O!]<iO!^(fX~P#BwO!^/ZO~O!g)hO$f({X~O$f/]O~Ov/^O~P!&zOx)yO(b)zO(c/aO~O!S/dO~O(y$}On%aa!Q%aa'y%aa(z%aa!]%aa#`%aa~Og%aa$O%aa~P#L{O(z%POn%ca!Q%ca'y%ca(y%ca!]%ca#`%ca~Og%ca$O%ca~P#MnO!]fX!gfX!kfX!k$zX(rfX~P!0SOp%WO![/mO!](^O(T/lO!Y(vP!Y)PP~P!1uOr*sO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO~Os<}O!S/nO![+[O!^*pO(e<|O!^(xP~P$ [O!k/oO~P#/sO!]/pO!g#vO(r'pO!k)OX~O!k/uO~OnoX!QoX'yoX(yoX(zoX~O!g#vO!koX~P$#OOp/wO!S%hO![*^O!_%iO(T%gO!k)OP~O#k/xO~O!Y$zX!]$zX!g%RX~P!0SO!]/yO!Y)PX~P#/sO!g/{O~O!Y/}O~OpkO(T0OO~P.iOh%VOr0TO!g#vO!l%eO(r'pO~O!g+iO~Oa%nO!]0XO'z%nO~O!^0ZO~P!5iO!c0[O!d0[O(U!lO~P#$`Os!nO!S0]O(VTO(YUO(e!mO~O#[0_O~Og%aa!]%aa#`%aa$O%aa~P!1WOg%ca!]%ca#`%ca$O%ca~P!1WOj%dOk%dOl%dO(T&ZOg'mX!]'mX~O!]*yOg(^a~Og0hO~On0jO#`0iOg(_a!](_a~OR0kO!Q0kO!S0lO#S$dOn}a'y}a(y}a(z}a!]}a#`}a~Og}a$O}a~P$(cO!Q*OO'y*POn$sa(y$sa(z$sa!]$sa#`$sa~Og$sa$O$sa~P$)_O!Q*OO'y*POn$ua(y$ua(z$ua!]$ua#`$ua~Og$ua$O$ua~P$*QO#k0oO~Og%Ta!]%Ta#`%Ta$O%Ta~P!1WO!g#vO~O#k0rO~O!]+^Oa)Ta'z)Ta~OR#zO!Q#yO!S#{O!l#xO(aVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(r!ri(y!ri(z!ri~Oa!ri'z!ri'w!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$+oOh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op0{O%]0|O(T0zO~P$.VO!g+iOa(]a!_(]a'z(]a!](]a~O#k1SO~O[]X!]fX!^fX~O!]1TO!^)XX~O!^1VO~O[1WO~Ob1YO(T+qO(VTO(YUO~O!_&PO(T%gO`'uX!]'uX~O!]+vO`)Wa~O!k1]O~P!:tO[1`O~O`1aO~O#`1fO~On1iO!_$|O~O(e(|O!^)UP~Oh%VOn1rO!_1oO%i1qO~O[1|O!]1zO!^)VX~O!^1}O~O`2POa%nO'z%nO~O(T#nO(VTO(YUO~O#S$dO#`$eO$Q$eOP(gXR(gX[(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~Oj2SO&[2TOa(gX~P$3pOj2SO#`$eO&[2TO~Oa2VO~P%[Oa2XO~O&e2[OP&ciQ&ciS&ciY&cia&cid&cie&cil&cip&cir&cis&cit&ciz&ci|&ci!O&ci!S&ci!W&ci!X&ci!_&ci!i&ci!l&ci!o&ci!p&ci!q&ci!s&ci!u&ci!x&ci!|&ci$W&ci$n&ci%h&ci%j&ci%l&ci%m&ci%n&ci%q&ci%s&ci%v&ci%w&ci%y&ci&W&ci&^&ci&`&ci&b&ci&d&ci&g&ci&m&ci&s&ci&u&ci&w&ci&y&ci&{&ci'w&ci(T&ci(V&ci(Y&ci(a&ci(o&ci!^&cib&ci&j&ci~Ob2bO!^2`O&j2aO~P`O!_XO!l2dO~O&q,{OP&liQ&liS&liY&lia&lid&lie&lil&lip&lir&lis&lit&liz&li|&li!O&li!S&li!W&li!X&li!_&li!i&li!l&li!o&li!p&li!q&li!s&li!u&li!x&li!|&li$W&li$n&li%h&li%j&li%l&li%m&li%n&li%q&li%s&li%v&li%w&li%y&li&W&li&^&li&`&li&b&li&d&li&g&li&m&li&s&li&u&li&w&li&y&li&{&li'w&li(T&li(V&li(Y&li(a&li(o&li!^&li&e&lib&li&j&li~O!Y2jO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2pO(e!mO!]'XX!^'XX~P@nO!]-]O!^(ia~O!]'_X!^'_X~P!9|O!]-`O!^(xa~O!^2wO~P'_Oa%nO#`3QO'z%nO~Oa%nO!g#vO#`3QO'z%nO~Oa%nO!g#vO!p3UO#`3QO'z%nO(r'pO~Oa%nO'z%nO~P!:tO!]$_Ov$qa~O!Y'Wi!]'Wi~P!:tO!](VO!Y(hi~O!](^O!Y(vi~O!Y(wi!](wi~P!:tO!](ti!k(tia(ti'z(ti~P!:tO#`3WO!](ti!k(tia(ti'z(ti~O!](jO!k(si~O!S%hO!_%iO!|]O#i3]O#j3[O(T%gO~O!S%hO!_%iO#j3[O(T%gO~On3dO!_'`O%i3cO~Oh%VOn3dO!_'`O%i3cO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aav%aa!_%aa%i%aa!g%aa~P#L{O#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%cav%ca!_%ca%i%ca!g%ca~P#MnO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/sO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/sO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'z}a(a}a(r}a!k}a!Y}a'w}av}a!_}a%i}a!g}a~P$(cO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'z$sa(a$sa(r$sa!k$sa!Y$sa'w$sav$sa!_$sa%i$sa!g$sa~P$)_O#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'z$ua(a$ua(r$ua!k$ua!Y$ua'w$uav$ua!_$ua%i$ua!g$ua~P$*QO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'z%Ta(a%Ta(r%Ta!k%Ta!Y%Ta'w%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/sOa#cq!]#cq'z#cq'w#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:tO![3lO!]'YX!k'YX~P%[O!].tO!k(ka~O!].tO!k(ka~P!:tO!Y3oO~O$O!na!^!na~PKlO$O!ja!]!ja!^!ja~P#BwO$O!ra!^!ra~P!=[O$O!ta!^!ta~P!?rOg']X!]']X~P!,TO!]/POg(pa~OSfO!_4TO$d4UO~O!^4YO~Ov4ZO~P#/sOa$mq!]$mq'z$mq'w$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:tO!Y4]O~P!&zO!S4^O~O!Q*OO'y*PO(z%POn'ia(y'ia!]'ia#`'ia~Og'ia$O'ia~P%-fO!Q*OO'y*POn'ka(y'ka(z'ka!]'ka#`'ka~Og'ka$O'ka~P%.XO(r$YO~P#/sO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!0SOp%WO(T=WO~P!1uOp4bO!S%hO![4aO!_%iO(T%gO!]'eX!k'eX~O!]/pO!k)Oa~O!]/pO!g#vO!k)Oa~O!]/pO!g#vO(r'pO!k)Oa~Og$|i!]$|i#`$|i$O$|i~P!1WO![4jO!Y'gX!]'gX~P!3tO!]/yO!Y)Pa~O!]/yO!Y)Pa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~Oj%YX!g%YX~P%2OOj4oO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4tO!l%eO(r'pO~Or4yO!g#vO(r'pO~Os!nO!S4zO(VTO(YUO(e!mO~O(y$}On%ai!Q%ai'y%ai(z%ai!]%ai#`%ai~Og%ai$O%ai~P%5oO(z%POn%ci!Q%ci'y%ci(y%ci!]%ci#`%ci~Og%ci$O%ci~P%6bOg(_i!](_i~P!1WO#`5QOg(_i!](_i~P!1WO!k5VO~Oa$oq!]$oq'z$oq'w$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:tO!Y5ZO~O!]5[O!_)QX~P#/sOa$zX!_$zX%^]X'z$zX!]$zX~P!0SO%^5_OaoX!_oX'zoX!]oX~P$#OOp5`O(T#nO~O%^5_O~Ob5fO%j5gO(T+qO(VTO(YUO!]'tX!^'tX~O!]1TO!^)Xa~O[5kO~O`5lO~O[5pO~Oa%nO'z%nO~P#/sO!]5uO#`5wO!^)UX~O!^5xO~Or6OOs!nO!S*iO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!pO#W!pO#X!pO#[5}O#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O!^5|O~P%;eOn6TO!_1oO%i6SO~Oh%VOn6TO!_1oO%i6SO~Ob6[O(T#nO(VTO(YUO!]'sX!^'sX~O!]1zO!^)Va~O(VTO(YUO(e6^O~O`6bO~Oj6eO&[6fO~PNXO!k6gO~P%[Oa6iO~Oa6iO~P%[Ob2bO!^6nO&j2aO~P`O!g6pO~O!g6rOh(ji!](ji!^(ji!g(ji!l(jir(ji(r(ji~O!]#hi!^#hi~P#BwO#`6sO!]#hi!^#hi~O!]!ai!^!ai~P#BwOa%nO#`6|O'z%nO~Oa%nO!g#vO#`6|O'z%nO~O!](tq!k(tqa(tq'z(tq~P!:tO!](jO!k(sq~O!S%hO!_%iO#j7TO(T%gO~O!_'`O%i7WO~On7[O!_'`O%i7WO~O#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'z'ia(a'ia(r'ia!k'ia!Y'ia'w'iav'ia!_'ia%i'ia!g'ia~P%-fO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'z'ka(a'ka(r'ka!k'ka!Y'ka'w'kav'ka!_'ka%i'ka!g'ka~P%.XO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'z$|i(a$|i(r$|i!k$|i!Y$|i'w$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/sO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'z%ai(a%ai(r%ai!k%ai!Y%ai'w%aiv%ai!_%ai%i%ai!g%ai~P%5oO#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'z%ci(a%ci(r%ci!k%ci!Y%ci'w%civ%ci!_%ci%i%ci!g%ci~P%6bO!]'Ya!k'Ya~P!:tO!].tO!k(ki~O$O#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#n#mi~P%NdO#n<_O~P%NdOP$[OR#zOr<kO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#r#mi~P&!lO#r<aO~P&!lOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO(aVO#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#v#mi~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO(aVO(z#}O#z#mi#{#mi$O#mi(r#mi(y#mi!]#mi!^#mi~O#x<eO~P&&uO#x#mi~P&&uO#v<cO~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO(aVO(y#|O(z#}O#{#mi$O#mi(r#mi!]#mi!^#mi~O#z#mi~P&)UO#z<gO~P&)UOa#|y!]#|y'z#|y'w#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:tO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO(y#mi(z#mi~P&,QOn>^O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P&,QO#S$dOP(`XR(`X[(`Xj(`Xn(`Xr(`X!Q(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X$O(`X'y(`X(a(`X(r(`X(y(`X(z(`X!](`X!^(`X~O$O$Pi!]$Pi!^$Pi~P#BwO$O!ri!^!ri~P$+oOg']a!]']a~P!1WO!^7nO~O!]'da!^'da~P#BwO!Y7oO~P#/sO!g#vO(r'pO!]'ea!k'ea~O!]/pO!k)Oi~O!]/pO!g#vO!k)Oi~Og$|q!]$|q#`$|q$O$|q~P!1WO!Y'ga!]'ga~P#/sO!g7vO~O!]/yO!Y)Pi~P#/sO!]/yO!Y)Pi~O!Y7yO~Oh%VOr8OO!l%eO(r'pO~Oj8QO!g#vO~Or8TO!g#vO(r'pO~O!Q*OO'y*PO(z%POn'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P&5RO!Q*OO'y*POn'la(y'la(z'la!]'la#`'la~Og'la$O'la~P&5tOg(_q!](_q~P!1WO#`8VOg(_q!](_q~P!1WO!Y8WO~Og%Oq!]%Oq#`%Oq$O%Oq~P!1WOa$oy!]$oy'z$oy'w$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:tO!g6rO~O!]5[O!_)Qa~O!_'`OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(a$Ta(r$Ta(y$Ta(z$Ta~O%i7WO~P&8fO%^8[Oa%[i!_%[i'z%[i!]%[i~Oa#cy!]#cy'z#cy'w#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:tO[8^O~Ob8`O(T+qO(VTO(YUO~O!]1TO!^)Xi~O`8dO~O(e(|O!]'pX!^'pX~O!]5uO!^)Ua~O!^8nO~P%;eO(o!sO~P$&YO#[8oO~O!_1oO~O!_1oO%i8qO~On8tO!_1oO%i8qO~O[8yO!]'sa!^'sa~O!]1zO!^)Vi~O!k8}O~O!k9OO~O!k9RO~O!k9RO~P%[Oa9TO~O!g9UO~O!k9VO~O!](wi!^(wi~P#BwOa%nO#`9_O'z%nO~O!](ty!k(tya(ty'z(ty~P!:tO!](jO!k(sy~O%i9bO~P&8fO!_'`O%i9bO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'z$|q(a$|q(r$|q!k$|q!Y$|q'w$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/sO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'z'ja(a'ja(r'ja!k'ja!Y'ja'w'jav'ja!_'ja%i'ja!g'ja~P&5RO#k'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la'z'la(a'la(r'la!k'la!Y'la'w'lav'la!_'la%i'la!g'la~P&5tO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'z%Oq(a%Oq(r%Oq!k%Oq!Y%Oq'w%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/sO!]'Yi!k'Yi~P!:tO$O#cq!]#cq!^#cq~P#BwO(y$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(a%aa(r%aa!]%aa!^%aa~On%aa!Q%aa'y%aa(z%aa~P&IyO(z%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(a%ca(r%ca!]%ca!^%ca~On%ca!Q%ca'y%ca(y%ca~P&LQOn>^O!Q*OO'y*PO(z%PO~P&IyOn>^O!Q*OO'y*PO(y$}O~P&LQOR0kO!Q0kO!S0lO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'y}a(a}a(r}a(y}a(z}a!]}a!^}a~O!Q*OO'y*POP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(a$sa(r$sa(y$sa(z$sa!]$sa!^$sa~O!Q*OO'y*POP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(a$ua(r$ua(y$ua(z$ua!]$ua!^$ua~On>^O!Q*OO'y*PO(y$}O(z%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(a%Ta(r%Ta!]%Ta!^%Ta~P''VO$O$mq!]$mq!^$mq~P#BwO$O$oq!]$oq!^$oq~P#BwO!^9oO~O$O9pO~P!1WO!g#vO!]'ei!k'ei~O!g#vO(r'pO!]'ei!k'ei~O!]/pO!k)Oq~O!Y'gi!]'gi~P#/sO!]/yO!Y)Pq~Or9wO!g#vO(r'pO~O[9yO!Y9xO~P#/sO!Y9xO~Oj:PO!g#vO~Og(_y!](_y~P!1WO!]'na!_'na~P#/sOa%[q!_%[q'z%[q!]%[q~P#/sO[:UO~O!]1TO!^)Xq~O`:YO~O#`:ZO!]'pa!^'pa~O!]5uO!^)Ui~P#BwO!S:]O~O!_1oO%i:`O~O(VTO(YUO(e:eO~O!]1zO!^)Vq~O!k:hO~O!k:iO~O!k:jO~O!k:jO~P%[O#`:mO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%i:rO~P&8fO!_'`O%i:rO~O$O#|y!]#|y!^#|y~P#BwOP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(a$|i(r$|i!]$|i!^$|i~P''VO!Q*OO'y*PO(z%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(a'ia(r'ia(y'ia!]'ia!^'ia~O!Q*OO'y*POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(a'ka(r'ka(y'ka(z'ka!]'ka!^'ka~O(y$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'y%ai(a%ai(r%ai(z%ai!]%ai!^%ai~O(z%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'y%ci(a%ci(r%ci(y%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#BwO$O#cy!]#cy!^#cy~P#BwO!g#vO!]'eq!k'eq~O!]/pO!k)Oy~O!Y'gq!]'gq~P#/sOr:|O!g#vO(r'pO~O[;QO!Y;PO~P#/sO!Y;PO~Og(_!R!](_!R~P!1WOa%[y!_%[y'z%[y!]%[y~P#/sO!]1TO!^)Xy~O!]5uO!^)Uq~O(T;XO~O!_1oO%i;[O~O!k;_O~O%i;dO~P&8fOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(a$|q(r$|q!]$|q!^$|q~P''VO!Q*OO'y*PO(z%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(a'ja(r'ja(y'ja!]'ja!^'ja~O!Q*OO'y*POP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la$O'la(a'la(r'la(y'la(z'la!]'la!^'la~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(a%Oq(r%Oq!]%Oq!^%Oq~P''VOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!1WO!Y;hO~P#/sOr;iO!g#vO(r'pO~O[;kO!Y;hO~P#/sO!]'pq!^'pq~P#BwO!]#h!Z!^#h!Z~P#BwO#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'z%e!Z(a%e!Z(r%e!Z!k%e!Z!Y%e!Z'w%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/sOr;tO!g#vO(r'pO~O!Y;uO~P#/sOr;|O!g#vO(r'pO~O!Y;}O~P#/sOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(a%e!Z(r%e!Z!]%e!Z!^%e!Z~P''VOr<QO!g#vO(r'pO~Ov(fX~P1qO!Q%rO~P!)[O(U!lO~P!)[O!YfX!]fX#`fX~P%2OOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~O!gfX!k]X!kfX(rfX~P'LTOP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_XO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]<iO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<tO!S${O!_$|O!i>WO!l$xO#j<zO$W%`O$t<vO$v<xO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Ol)dO~P(!yOr!eX(r!eX~P#!iOr(jX(r(jX~P##[O!^]X!^fX~P'LTO!YfX!Y$zX!]fX!]$zX#`fX~P!0SO#k<^O~O!g#vO#k<^O~O#`<nO~Oj<bO~O#`=OO!](wX!^(wX~O#`<nO!](uX!^(uX~O#k=PO~Og=RO~P!1WO#k=XO~O#k=YO~Og=RO(T&ZO~O!g#vO#k=ZO~O!g#vO#k=PO~O$O=[O~P#BwO#k=]O~O#k=^O~O#k=cO~O#k=dO~O#k=eO~O#k=fO~O$O=gO~P!1WO$O=hO~P!1WOl=sO~P7eOk#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~(OT#o!X'|(U#ps#n#qr!Q'}$]'}(T$_(e~",
        goto: "$9Y)]PPPPPP)^PP)aP)rP+W/]PPPP6mPP7TPP=QPPP@tPA^PA^PPPA^PCfPA^PA^PA^PCjPCoPD^PIWPPPI[PPPPI[L_PPPLeMVPI[PI[PP! eI[PPPI[PI[P!#lI[P!'S!(X!(bP!)U!)Y!)U!,gPPPPPPP!-W!(XPP!-h!/YP!2iI[I[!2n!5z!:h!:h!>gPPP!>oI[PPPPPPPPP!BOP!C]PPI[!DnPI[PI[I[I[I[I[PI[!FQP!I[P!LbP!Lf!Lp!Lt!LtP!IXP!Lx!LxP#!OP#!SI[PI[#!Y#%_CjA^PA^PA^A^P#&lA^A^#)OA^#+vA^#.SA^A^#.r#1W#1W#1]#1f#1W#1qPP#1WPA^#2ZA^#6YA^A^6mPPP#:_PPP#:x#:xP#:xP#;`#:xPP#;fP#;]P#;]#;y#;]#<e#<k#<n)aP#<q)aP#<z#<z#<zP)aP)aP)aP)aPP)aP#=Q#=TP#=T)aP#=XP#=[P)aP)aP)aP)aP)aP)a)aPP#=b#=h#=s#=y#>P#>V#>]#>k#>q#>{#?R#?]#?c#?s#?y#@k#@}#AT#AZ#Ai#BO#Cs#DR#DY#Et#FS#Gt#HS#HY#H`#Hf#Hp#Hv#H|#IW#Ij#IpPPPPPPPPPPP#IvPPPPPPP#Jk#Mx$ b$ i$ qPPP$']P$'f$*_$0x$0{$1O$1}$2Q$2X$2aP$2g$2jP$3W$3[$4S$5b$5g$5}PP$6S$6Y$6^$6a$6e$6i$7e$7|$8e$8i$8l$8o$8y$8|$9Q$9UR!|RoqOXst!Z#d%m&r&t&u&w,s,x2[2_Y!vQ'`-e1o5{Q%tvQ%|yQ&T|Q&j!VS'W!e-]Q'f!iS'l!r!yU*k$|*Z*oQ+o%}S+|&V&WQ,d&dQ-c'_Q-m'gQ-u'mQ0[*qQ1b,OQ1y,eR<{<Y%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_S#q]<V!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU+P%]<s<tQ+t&PQ,f&gQ,m&oQ0x+gQ0}+iQ1Y+uQ2R,kQ3`.gQ5`0|Q5f1TQ6[1zQ7Y3dQ8`5gR9e7['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S!S!nQ!r!v!y!z$|'W'_'`'l'm'n*k*o*q*r-]-c-e-u0[0_1o5{5}%[$ti#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q&X|Q'U!eS'[%i-`Q+t&PQ,P&WQ,f&gQ0n+SQ1Y+uQ1_+{Q2Q,jQ2R,kQ5f1TQ5o1aQ6[1zQ6_1|Q6`2PQ8`5gQ8c5lQ8|6bQ:X8dQ:f8yQ;V:YR<}*ZrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R,h&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'b'r(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>R>S[#]WZ#W#Z'X(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ%wxQ%{yW&Q|&V&W,OQ&_!TQ'c!hQ'e!iQ(q#sS+n%|%}Q+r&PQ,_&bQ,c&dS-l'f'gQ.i(rQ1R+oQ1X+uQ1Z+vQ1^+zQ1t,`S1x,d,eQ2|-mQ5e1TQ5i1WQ5n1`Q6Z1yQ8_5gQ8b5kQ8f5pQ:T8^R;T:U!U$zi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y!^%yy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{Q+h%wQ,T&[Q,W&]Q,b&dQ.h(qQ1s,_U1w,c,d,eQ3e.iQ6U1tS6Y1x1yQ8x6Z#f>T#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o>U<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hW%Ti%V*y>PS&[!Q&iQ&]!RQ&^!SU*}%[%d=sR,R&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^T)z$u){V+P%]<s<tW'[!e%i*Z-`S(}#y#zQ+c%rQ+y&SS.b(m(nQ1j,XQ5T0kR8i5u'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S$i$^c#Y#e%q%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.|.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ'Y!eR2q-]!W!nQ!e!r!v!y!z$|'W'_'`'l'm'n*Z*k*o*q*r-]-c-e-u0[0_1o5{5}R1l,ZnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&y!^Q'v!xS(s#u<^Q+l%zQ,]&_Q,^&aQ-j'dQ-w'oS.r(x=PS0q+X=ZQ1P+mQ1n,[Q2c,zQ2e,{Q2m-WQ2z-kQ2}-oS5Y0r=eQ5a1QS5d1S=fQ6t2oQ6x2{Q6}3SQ8]5bQ9Y6vQ9Z6yQ9^7OR:l9V$d$]c#Y#e%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vS(o#p'iQ)P#zS+b%q.|S.c(n(pR3^.d'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS#q]<VQ&t!XQ&u!YQ&w![Q&x!]R2Z,vQ'a!hQ+e%wQ-h'cS.e(q+hQ2x-gW3b.h.i0w0yQ6w2yW7U3_3a3e5^U9a7V7X7ZU:q9c9d9fS;b:p:sQ;p;cR;x;qU!wQ'`-eT5y1o5{!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(j,s,x.[2[2_]!pQ!r'`-e1o5{T#q]<V%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S(}#y#zS.b(m(n!s=l$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU$fd)_,mS(p#p'iU*v%R(w4OU0m+O.n7gQ5^0xQ7V3`Q9d7YR:s9em!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}Q't!uS(f#g2US-s'k'wQ/s*]Q0R*jQ3U-vQ4f/tQ4r0TQ4s0UQ4x0^Q7r4`S7}4t4vS8R4y4{Q9r7sQ9v7yQ9{8OQ:Q8TS:{9w9xS;g:|;PS;s;h;iS;{;t;uS<P;|;}R<S<QQ#wbQ's!uS(e#g2US(g#m+WQ+Y%fQ+j%xQ+p&OU-r'k't'wQ.W(fU/r*]*`/wQ0S*jQ0V*lQ1O+kQ1u,aS3R-s-vQ3Z.`S4e/s/tQ4n0PS4q0R0^Q4u0WQ6W1vQ7P3US7q4`4bQ7u4fU7|4r4x4{Q8P4wQ8v6XS9q7r7sQ9u7yQ9}8RQ:O8SQ:c8wQ:y9rS:z9v9xQ;S:QQ;^:dS;f:{;PS;r;g;hS;z;s;uS<O;{;}Q<R<PQ<T<SQ=o=jQ={=tR=|=uV!wQ'`-e%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S#wz!j!r=i$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=o>R%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Q%fj!^%xy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{S&Oz!jQ+k%yQ,a&dW1v,b,c,d,eU6X1w1x1yS8w6Y6ZQ:d8x!r=j$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ=t>QR=u>R%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Y#bWZ#W#Z(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ,n&o!p=k$Z$n)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=n'XU']!e%i*ZR2s-`%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ,m&oQ0x+gQ3`.gQ7Y3dR9e7[!b$Tc#Y%q(S(Y(t(y)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!P<d)^)q-Z.|2k2n3p3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!f$Vc#Y%q(S(Y(t(y)W)X)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!T<f)^)q-Z.|2k2n3p3v3w3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!^$Zc#Y%q(S(Y(t(y)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<WQ4_/kz>S)^)q-Z.|2k2n3p4P4X6u7b7k7l8k9X9g9m9n;W;`=vQ>X>ZR>Y>['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS$oh$pR4U/U'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$kf$qQ$ifS)j$l)nR)v$qT$jf$qT)l$l)n'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$oh$pQ$rhR)u$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_!s>Q$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'b)O)s*i+]+g,p,s,x-i.g/V/n0]0l1r2S2T2V2X2[2_2a3d4T4z6T6e6f6i7[8t9T!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^Q+T%aQ/c*Oo4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!U$yi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>YQ*c$zU*l$|*Z*oQ+U%bQ0W*m#f=q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n=r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hQ=w>TQ=x>UQ=y>VR=z>W!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hnoOXst!Z#d%m&r&t&u&w,s,x2[2_S*f${*YQ-R'OQ-S'QR4i/y%[%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q,U&]Q1h,WQ5s1gR8h5tV*n$|*Z*oU*n$|*Z*oT5z1o5{S0P*i/nQ4w0]T8S4z:]Q+j%xQ0V*lQ1O+kQ1u,aQ6W1vQ8v6XQ:c8wR;^:d!U%Oi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Yx*R$v)e*S*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>OS0`*t0a#f<o#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<p<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!d=S(u)c*[*e.j.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[`=T3}7c7f7j9h:t:w;yS=_.l3iT=`7e9k!U%Qi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y|*T$v)e*U*t+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>OS0b*u0c#f<q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!h=U(u)c*[*e.k.l.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[d=V3}7d7e7j9h9i:t:u:w;yS=a.m3jT=b7f9lrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q&f!UR,p&ornOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R&f!UQ,Y&^R1d,RsnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q1p,_S6R1s1tU8p6P6Q6US:_8r8sS;Y:^:aQ;m;ZR;w;nQ&m!VR,i&iR6_1|R:f8yW&Q|&V&W,OR1Z+vQ&r!WR,s&sR,y&xT2],x2_R,}&yQ,|&yR2f,}Q'y!{R-y'ySsOtQ#dXT%ps#dQ#OTR'{#OQ#RUR'}#RQ){$uR/`){Q#UVR(Q#UQ#XWU(W#X(X.QQ(X#YR.Q(YQ-^'YR2r-^Q.u(yS3m.u3nR3n.vQ-e'`R2v-eY!rQ'`-e1o5{R'j!rQ/Q)eR4S/QU#_W%h*YU(_#_(`.RQ(`#`R.R(ZQ-a']R2t-at`OXst!V!Z#d%m&i&k&r&t&u&w,s,x2[2_S#hZ%eU#r`#h.[R.[(jQ(k#jQ.X(gW.a(k.X3X7RQ3X.YR7R3YQ)n$lR/W)nQ$phR)t$pQ$`cU)a$`-|<jQ-|<WR<j)qQ/q*]W4c/q4d7t9sU4d/r/s/tS7t4e4fR9s7u$e*Q$v(u)c)e*[*e*t*u+Q+R+V.l.m.o.p.q/_/g/i/k/v/|0d0e0v1e3f3g3h3}4R4[4g4h4l4|5O5R5S5W5r7]7^7_7`7e7f7h7i7j7p7w7z8U8X8Z9h9i9j9t9|:R:S:t:u:v:w:x:};R;e;j;v;y=p=}>O>Z>[Q/z*eU4k/z4m7xQ4m/|R7x4lS*o$|*ZR0Y*ox*S$v)e*t*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>O!d.j(u)c*[*e.l.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/h*S.j7ca7c3}7e7f7j9h:t:w;yQ0a*tQ3i.lU4}0a3i9kR9k7e|*U$v)e*t*u+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>O!h.k(u)c*[*e.l.m.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/j*U.k7de7d3}7e7f7j9h9i:t:u:w;yQ0c*uQ3j.mU5P0c3j9lR9l7fQ*z%UR0g*zQ5]0vR8Y5]Q+_%kR0u+_Q5v1jS8j5v:[R:[8kQ,[&_R1m,[Q5{1oR8m5{Q1{,fS6]1{8zR8z6_Q1U+rW5h1U5j8a:VQ5j1XQ8a5iR:V8bQ+w&QR1[+wQ2_,xR6m2_YrOXst#dQ&v!ZQ+a%mQ,r&rQ,t&tQ,u&uQ,w&wQ2Y,sS2],x2_R6l2[Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'q!uQ+`%lQ+l%zQ,Q&XQ,h&mQ-P&|W-p'k's't'wQ-w'oQ0X*nQ1P+mQ1c,PS2O,i,lQ2g-OQ2h-RQ2i-SQ2}-oW3P-r-s-v-xQ5a1QQ5m1_Q5q1eQ6V1uQ6a2QQ6k2ZU6z3O3R3UQ6}3SQ8]5bQ8e5oQ8g5rQ8l5zQ8u6WQ8{6`S9[6{7PQ9^7OQ:W8cQ:b8vQ:g8|Q:n9]Q;U:XQ;]:cQ;a:oQ;l;VR;o;^Q%zyQ'd!iQ'o!uU+m%{%|%}Q-W'VU-k'e'f'gS-o'k'uQ0Q*jS1Q+n+oQ2o-YS2{-l-mQ3S-tS4p0R0UQ5b1RQ6v2uQ6y2|Q7O3TU7{4r4s4vQ9z7}R;O9{S$wi>PR*{%VU%Ui%V>PR0f*yQ$viS(u#v+iS)c$b$cQ)e$dQ*[$xS*e${*YQ*t%OQ*u%QQ+Q%^Q+R%_Q+V%cQ.l<oQ.m<qQ.o<uQ.p<wQ.q<yQ/_)yQ/g*RQ/i*TQ/k*VQ/v*aS/|*g/mQ0d*wQ0e*xl0v+f,V.f1i1q3c6S7W8q9b:`:r;[;dQ1e,SQ3f=SQ3g=UQ3h=XS3}<l<mQ4R/PS4[/d4^Q4g/xQ4h/yQ4l/{Q4|0`Q5O0bQ5R0iQ5S0jQ5W0oQ5r1fQ7]=]Q7^=_Q7_=aQ7`=cQ7e<pQ7f<rQ7h<vQ7i<xQ7j<zQ7p4_Q7w4jQ7z4oQ8U5QQ8X5[Q8Z5_Q9h=YQ9i=TQ9j=VQ9t7vQ9|8QQ:R8VQ:S8[Q:t=^Q:u=`Q:v=bQ:w=dQ:x9pQ:}9yQ;R:PQ;e=gQ;j;QQ;v;kQ;y=hQ=p>PQ=}>XQ>O>YQ>Z>]R>[>^Q+O%]Q.n<sR7g<tnpOXst!Z#d%m&r&t&u&w,s,x2[2_Q!fPS#fZ#oQ&|!`W'h!o*i0]4zQ(P#SQ)Q#{Q)r$nS,l&k&nQ,q&oQ-O&{S-T'T/nQ-g'bQ.x)OQ/[)sQ0s+]Q0y+gQ2W,pQ2y-iQ3a.gQ4W/VQ5U0lQ6Q1rQ6c2SQ6d2TQ6h2VQ6j2XQ6o2aQ7Z3dQ7m4TQ8s6TQ9P6eQ9Q6fQ9S6iQ9f7[Q:a8tR:k9T#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'b)O*i+]+g,p,s,x-i.g/n0]0l1r2S2T2V2X2[2_2a3d4z6T6e6f6i7[8t9TQ#YWQ#eYQ%quQ%svS%uw!gS(S#W(VQ(Y#ZQ(t#uQ(y#xQ)R$OQ)S$PQ)T$QQ)U$RQ)V$SQ)W$TQ)X$UQ)Y$VQ)Z$WQ)[$XQ)^$ZQ)`$_Q)b$aQ)g$eW)q$n)s/V4TQ+d%tQ+x&RS-Z'X2pQ-x'rS-}(T.PQ.S(]Q.U(dQ.s(xQ.v(zQ.z<UQ.|<XQ.}<YQ/O<]Q/b)}Q0p+XQ2k-UQ2n-XQ3O-qQ3V.VQ3k.tQ3p<^Q3q<_Q3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{.{Q3|<kQ4P<nQ4Q<{Q4X<iQ5X0rQ5c1SQ6u=OQ6{3QQ7Q3WQ7a3lQ7b=PQ7k=RQ7l=ZQ8k5wQ9X6sQ9]6|Q9g=[Q9m=eQ9n=fQ:o9_Q;W:ZQ;`:mQ<W#SR=v>SR#[WR'Z!el!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}S'V!e-]U*j$|*Z*oS-Y'W'_S0U*k*qQ0^*rQ2u-cQ4v0[R4{0_R({#xQ!fQT-d'`-e]!qQ!r'`-e1o5{Q#p]R'i<VR)f$dY!uQ'`-e1o5{Q'k!rS'u!v!yS'w!z5}S-t'l'mQ-v'nR3T-uT#kZ%eS#jZ%eS%km,oU(g#h#i#lS.Y(h(iQ.^(jQ0t+^Q3Y.ZU3Z.[.]._S7S3[3]R9`7Td#^W#W#Z%h(T(^*Y+Z.T/mr#gZm#h#i#l%e(h(i(j+^.Z.[.]._3[3]7TS*]$x*bQ/t*^Q2U,oQ2l-VQ4`/pQ6q2dQ7s4aQ9W6rT=m'X+[V#aW%h*YU#`W%h*YS(U#W(^U(Z#Z+Z/mS-['X+[T.O(T.TV'^!e%i*ZQ$lfR)x$qT)m$l)nR4V/UT*_$x*bT*h${*YQ0w+fQ1g,VQ3_.fQ5t1iQ6P1qQ7X3cQ8r6SQ9c7WQ:^8qQ:p9bQ;Z:`Q;c:rQ;n;[R;q;dnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&l!VR,h&itmOXst!U!V!Z#d%m&i&r&t&u&w,s,x2[2_R,o&oT%lm,oR1k,XR,g&gQ&U|S+}&V&WR1^,OR+s&PT&p!W&sT&q!W&sT2^,x2_",
        nodeNames: "\u26a0 ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
        maxTerm: 380,
        context: gV,
        nodeProps: [
          ["isolate", -8, 5, 6, 14, 37, 39, 51, 53, 55, ""],
          ["group", -26, 9, 17, 19, 68, 207, 211, 215, 216, 218, 221, 224, 234, 237, 243, 245, 247, 249, 252, 258, 264, 266, 268, 270, 272, 274, 275, "Statement", -34, 13, 14, 32, 35, 36, 42, 51, 54, 55, 57, 62, 70, 72, 76, 80, 82, 84, 85, 110, 111, 120, 121, 136, 139, 141, 142, 143, 144, 145, 147, 148, 167, 169, 171, "Expression", -23, 31, 33, 37, 41, 43, 45, 173, 175, 177, 178, 180, 181, 182, 184, 185, 186, 188, 189, 190, 201, 203, 205, 206, "Type", -3, 88, 103, 109, "ClassItem"],
          ["openedBy", 23, "<", 38, "InterpolationStart", 56, "[", 60, "{", 73, "(", 160, "JSXStartCloseTag"],
          ["closedBy", -2, 24, 168, ">", 40, "InterpolationEnd", 50, "]", 61, "}", 74, ")", 165, "JSXEndTag"]
        ],
        propSources: [hV],
        skippedNodes: [0, 5, 6, 278],
        repeatNodeCount: 37,
        tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
        tokenizers: [iV, CV, aV, cV, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, DV, new rV("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340), new rV("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)],
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
          get: VV => lV[VV] || -1
        }, {
          term: 343,
          get: VV => LV[VV] || -1
        }, {
          term: 95,
          get: VV => fV[VV] || -1
        }],
        tokenPrec: 15201
      });
    var KV = xV(44252),
      HV = xV(44232),
      uV = xV(44234),
      sV = xV(44228);
    const SV = [(0, sV.r)("function ${name}(${params}) {\n\t${}\n}", {
        label: "function",
        detail: "definition",
        type: "keyword"
      }), (0, sV.r)("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}", {
        label: "for",
        detail: "loop",
        type: "keyword"
      }), (0, sV.r)("for (let ${name} of ${collection}) {\n\t${}\n}", {
        label: "for",
        detail: "of loop",
        type: "keyword"
      }), (0, sV.r)("do {\n\t${}\n} while (${})", {
        label: "do",
        detail: "loop",
        type: "keyword"
      }), (0, sV.r)("while (${}) {\n\t${}\n}", {
        label: "while",
        detail: "loop",
        type: "keyword"
      }), (0, sV.r)("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
        label: "try",
        detail: "/ catch block",
        type: "keyword"
      }), (0, sV.r)("if (${}) {\n\t${}\n}", {
        label: "if",
        detail: "block",
        type: "keyword"
      }), (0, sV.r)("if (${}) {\n\t${}\n} else {\n\t${}\n}", {
        label: "if",
        detail: "/ else block",
        type: "keyword"
      }), (0, sV.r)("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
        label: "class",
        detail: "definition",
        type: "keyword"
      }), (0, sV.r)('import {${names}} from "${module}"\n${}', {
        label: "import",
        detail: "named",
        type: "keyword"
      }), (0, sV.r)('import ${name} from "${module}"\n${}', {
        label: "import",
        detail: "default",
        type: "keyword"
      })],
      IV = SV.concat([(0, sV.r)("interface ${name} {\n\t${}\n}", {
        label: "interface",
        detail: "definition",
        type: "keyword"
      }), (0, sV.r)("type ${name} = ${type}", {
        label: "type",
        detail: "definition",
        type: "keyword"
      }), (0, sV.r)("enum ${name} {\n\t${}\n}", {
        label: "enum",
        detail: "definition",
        type: "keyword"
      })]),
      dV = new JV.q,
      OV = new Set(["Script", "Block", "FunctionExpression", "FunctionDeclaration", "ArrowFunction", "MethodDeclaration", "ForStatement"]);

    function Ve(VV) {
      return (eV, xV) => {
        let JV = eV.node.getChild("VariableDefinition");
        return JV && xV(JV, VV), !0
      }
    }
    const ee = ["FunctionDeclaration"],
      xe = {
        FunctionDeclaration: Ve("function"),
        ClassDeclaration: Ve("class"),
        ClassExpression: () => !0,
        EnumDeclaration: Ve("constant"),
        TypeAliasDeclaration: Ve("type"),
        NamespaceDeclaration: Ve("namespace"),
        VariableDefinition(VV, eV) {
          VV.matchContext(ee) || eV(VV, "variable")
        },
        TypeDefinition(VV, eV) {
          eV(VV, "type")
        },
        __proto__: null
      };

    function Je(VV, eV) {
      let xV = dV.get(eV);
      if (xV) return xV;
      let YV = [],
        UV = !0;

      function yV(eV, xV) {
        let JV = VV.sliceString(eV.from, eV.to);
        YV.push({
          label: JV,
          type: xV
        })
      }
      return eV.cursor(JV.f.IncludeAnonymous).iterate((eV => {
        if (UV) UV = !1;
        else if (eV.name) {
          let VV = xe[eV.name];
          if (VV && VV(eV, yV) || OV.has(eV.name)) return !1
        } else if (eV.to - eV.from > 8192) {
          for (let xV of Je(VV, eV.node)) YV.push(xV);
          return !1
        }
      })), dV.set(eV, YV), YV
    }
    const Ye = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
      Ue = ["TemplateString", "String", "RegExp", "LineComment", "BlockComment", "VariableDefinition", "TypeDefinition", "Label", "PropertyDefinition", "PropertyName", "PrivatePropertyDefinition", "PrivatePropertyName", "JSXText", "JSXAttributeValue", "JSXOpenTag", "JSXCloseTag", "JSXSelfClosingTag", ".", "?."];

    function ye(VV) {
      let eV = (0, KV.ob)(VV.state).resolveInner(VV.pos, -1);
      if (Ue.indexOf(eV.name) > -1) return null;
      let xV = "VariableName" == eV.name || eV.to - eV.from < 20 && Ye.test(VV.state.sliceDoc(eV.from, eV.to));
      if (!xV && !VV.explicit) return null;
      let JV = [];
      for (let YV = eV; YV; YV = YV.parent) OV.has(YV.name) && (JV = JV.concat(Je(VV.state.doc, YV)));
      return {
        options: JV,
        from: xV ? eV.from : VV.pos,
        validFor: Ye
      }
    }
    const pe = KV.j.define({
        name: "javascript",
        parser: mV.configure({
          props: [KV.W.add({
            IfStatement: (0, KV.r)({
              except: /^\s*({|else\b)/
            }),
            TryStatement: (0, KV.r)({
              except: /^\s*({|catch\b|finally\b)/
            }),
            LabeledStatement: KV.A,
            SwitchBody: VV => {
              let eV = VV.textAfter,
                xV = /^\s*\}/.test(eV),
                JV = /^\s*(case|default)\b/.test(eV);
              return VV.baseIndent + (xV ? 0 : JV ? 1 : 2) * VV.unit
            },
            Block: (0, KV.z)({
              closing: "}"
            }),
            ArrowFunction: VV => VV.baseIndent + VV.unit,
            "TemplateString BlockComment": () => null,
            "Statement Property": (0, KV.r)({
              except: /^\s*{/
            }),
            JSXElement(VV) {
              let eV = /^\s*<\//.test(VV.textAfter);
              return VV.lineIndent(VV.node.from) + (eV ? 0 : VV.unit)
            },
            JSXEscape(VV) {
              let eV = /\s*\}/.test(VV.textAfter);
              return VV.lineIndent(VV.node.from) + (eV ? 0 : VV.unit)
            },
            "JSXOpenTag JSXSelfClosingTag": VV => VV.column(VV.node.from) + VV.unit
          }), KV.L.add({
            "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": KV.H,
            BlockComment: VV => ({
              from: VV.from + 2,
              to: VV.to - 2
            }),
            JSXElement(VV) {
              let eV = VV.firstChild;
              if (!eV || "JSXSelfClosingTag" == eV.name) return null;
              let xV = VV.lastChild;
              return {
                from: eV.to,
                to: xV.type.isError ? VV.to : xV.from
              }
            },
            "JSXSelfClosingTag JSXOpenTag"(VV) {
              var eV;
              let xV = null === (eV = VV.firstChild) || void 0 === eV ? void 0 : eV.nextSibling,
                JV = VV.lastChild;
              return !xV || xV.type.isError ? null : {
                from: xV.to,
                to: JV.type.isError ? VV.to : JV.from
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
      Qe = {
        test: VV => /^JSX/.test(VV.name),
        facet: (0, KV.w)({
          commentTokens: {
            block: {
              open: "{/*",
              close: "*/}"
            }
          }
        })
      },
      ne = pe.configure({
        dialect: "ts"
      }, "typescript"),
      we = pe.configure({
        dialect: "jsx",
        props: [KV.db.add((VV => VV.isTop ? [Qe] : void 0))]
      }),
      Ze = pe.configure({
        dialect: "jsx ts",
        props: [KV.db.add((VV => VV.isTop ? [Qe] : void 0))]
      }, "typescript");
    let ve = VV => ({
      label: VV,
      type: "keyword"
    });
    const re = "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(ve),
      ke = re.concat(["declare", "implements", "private", "protected", "public"].map(ve));

    function be() {
      let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        eV = VV.jsx ? VV.typescript ? Ze : we : VV.typescript ? ne : pe,
        xV = VV.typescript ? IV.concat(ke) : SV.concat(re);
      return new KV.l(eV, [pe.data.of({
        autocomplete: (0, sV.n)(Ue, (0, sV.j)(xV))
      }), pe.data.of({
        autocomplete: ye
      }), VV.jsx ? je : []])
    }

    function Ee(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : VV.length;
      for (let JV = null === eV || void 0 === eV ? void 0 : eV.firstChild; JV; JV = JV.nextSibling)
        if ("JSXIdentifier" == JV.name || "JSXBuiltin" == JV.name || "JSXNamespacedName" == JV.name || "JSXMemberExpression" == JV.name) return VV.sliceString(JV.from, Math.min(JV.to, xV));
      return ""
    }
    const Be = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      je = uV.e.inputHandler.of(((VV, eV, xV, JV, YV) => {
        if ((Be ? VV.composing : VV.compositionStarted) || VV.state.readOnly || eV != xV || ">" != JV && "/" != JV || !pe.isActiveAt(VV.state, eV, -1)) return !1;
        let UV = YV(),
          {
            state: yV
          } = UV,
          pV = yV.changeByRange((VV => {
            var eV;
            let xV, {
                head: YV
              } = VV,
              UV = (0, KV.ob)(yV).resolveInner(YV - 1, -1);
            if ("JSXStartTag" == UV.name && (UV = UV.parent), yV.doc.sliceString(YV - 1, YV) != JV || "JSXAttributeValue" == UV.name && UV.to > YV);
            else {
              if (">" == JV && "JSXFragmentTag" == UV.name) return {
                range: VV,
                changes: {
                  from: YV,
                  insert: "</>"
                }
              };
              if ("/" == JV && "JSXStartCloseTag" == UV.name) {
                let VV = UV.parent,
                  JV = VV.parent;
                if (JV && VV.from == YV - 2 && ((xV = Ee(yV.doc, JV.firstChild, YV)) || "JSXFragmentTag" == (null === (eV = JV.firstChild) || void 0 === eV ? void 0 : eV.name))) {
                  let VV = `${xV}>`;
                  return {
                    range: HV.n.cursor(YV + VV.length, -1),
                    changes: {
                      from: YV,
                      insert: VV
                    }
                  }
                }
              } else if (">" == JV) {
                let eV = function(VV) {
                  for (;;) {
                    if ("JSXOpenTag" == VV.name || "JSXSelfClosingTag" == VV.name || "JSXFragmentTag" == VV.name) return VV;
                    if ("JSXEscape" == VV.name || !VV.parent) return null;
                    VV = VV.parent
                  }
                }(UV);
                if (eV && "JSXOpenTag" == eV.name && !/^\/?>|^<\//.test(yV.doc.sliceString(YV, YV + 2)) && (xV = Ee(yV.doc, eV, YV))) return {
                  range: VV,
                  changes: {
                    from: YV,
                    insert: `</${xV}>`
                  }
                }
              }
            }
            return {
              range: VV
            }
          }));
        return !pV.changes.empty && (VV.dispatch([UV, yV.update(pV, {
          userEvent: "input.complete",
          scrollIntoView: !0
        })]), !0)
      }))
  },
  44252: (VV, eV, xV) => {
    xV.d(eV, {
      A: () => fV,
      D: () => je,
      H: () => SV,
      K: () => ne,
      L: () => sV,
      N: () => BV,
      R: () => WV,
      S: () => gV,
      W: () => iV,
      X: () => HV,
      Y: () => RV,
      _: () => GV,
      ab: () => Le,
      d: () => te,
      db: () => ZV,
      f: () => DV,
      gb: () => Ae,
      j: () => kV,
      kb: () => EV,
      l: () => MV,
      o: () => oe,
      ob: () => bV,
      r: () => mV,
      t: () => Me,
      w: () => wV,
      z: () => lV
    });
    var JV, YV = xV(44260),
      UV = xV(44232),
      yV = xV(44234),
      pV = xV(44267),
      QV = xV(44237);
    const nV = new YV.h;

    function wV(VV) {
      return UV.r.define({
        combine: VV ? eV => eV.concat(VV) : void 0
      })
    }
    const ZV = new YV.h;
    class vV {
      constructor(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this.data = VV, this.name = JV, UV.q.prototype.hasOwnProperty("tree") || Object.defineProperty(UV.q.prototype, "tree", {
          get() {
            return bV(this)
          }
        }), this.parser = eV, this.extension = [XV.of(this), UV.q.languageData.of(((VV, eV, xV) => {
          let JV = rV(VV, eV, xV),
            YV = JV.type.prop(nV);
          if (!YV) return [];
          let UV = VV.facet(YV),
            yV = JV.type.prop(ZV);
          if (yV) {
            let YV = JV.resolve(eV - JV.from, xV);
            for (let eV of yV)
              if (eV.test(YV, VV)) {
                let xV = VV.facet(eV.facet);
                return "replace" == eV.type ? xV : xV.concat(UV)
              }
          }
          return UV
        }))].concat(xV)
      }
      isActiveAt(VV, eV) {
        return rV(VV, eV, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1).type.prop(nV) == this.data
      }
      findRegions(VV) {
        let eV = VV.facet(XV);
        if ((null === eV || void 0 === eV ? void 0 : eV.data) == this.data) return [{
          from: 0,
          to: VV.doc.length
        }];
        if (!eV || !eV.allowsNesting) return [];
        let xV = [],
          JV = (VV, eV) => {
            if (VV.prop(nV) == this.data) return void xV.push({
              from: eV,
              to: eV + VV.length
            });
            let UV = VV.prop(YV.h.mounted);
            if (UV) {
              if (UV.tree.prop(nV) == this.data) {
                if (UV.overlay)
                  for (let VV of UV.overlay) xV.push({
                    from: VV.from + eV,
                    to: VV.to + eV
                  });
                else xV.push({
                  from: eV,
                  to: eV + VV.length
                });
                return
              }
              if (UV.overlay) {
                let VV = xV.length;
                if (JV(UV.tree, UV.overlay[0].from + eV), xV.length > VV) return
              }
            }
            for (let xV = 0; xV < VV.children.length; xV++) {
              let UV = VV.children[xV];
              UV instanceof YV.x && JV(UV, VV.positions[xV] + eV)
            }
          };
        return JV(bV(VV), 0), xV
      }
      get allowsNesting() {
        return !0
      }
    }

    function rV(VV, eV, xV) {
      let JV = VV.facet(XV),
        UV = bV(VV).topNode;
      if (!JV || JV.allowsNesting)
        for (let yV = UV; yV; yV = yV.enter(eV, xV, YV.f.ExcludeBuffers | YV.f.EnterBracketed)) yV.type.isTop && (UV = yV);
      return UV
    }
    vV.setState = UV.C.define();
    class kV extends vV {
      constructor(VV, eV, xV) {
        super(VV, eV, [], xV), this.parser = eV
      }
      static define(VV) {
        let eV = wV(VV.languageData);
        return new kV(eV, VV.parser.configure({
          props: [nV.add((VV => VV.isTop ? eV : void 0))]
        }), VV.name)
      }
      configure(VV, eV) {
        return new kV(this.data, this.parser.configure(VV), eV || this.name)
      }
      get allowsNesting() {
        return this.parser.hasWrappers()
      }
    }

    function bV(VV) {
      let eV = VV.field(vV.state, !1);
      return eV ? eV.tree : YV.x.empty
    }

    function EV(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : VV.doc.length;
      var xV;
      return (null === (xV = VV.field(vV.state, !1)) || void 0 === xV ? void 0 : xV.context.isDone(eV)) || !1
    }

    function BV(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : VV.viewport.to,
        xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        JV = function(VV, eV) {
          let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
          var JV;
          let YV = null === (JV = VV.field(vV.state, !1)) || void 0 === JV ? void 0 : JV.context;
          if (!YV) return null;
          let UV = YV.viewport;
          YV.updateViewport({
            from: 0,
            to: eV
          });
          let yV = YV.isDone(eV) || YV.work(xV, eV) ? YV.tree : null;
          return YV.updateViewport(UV), yV
        }(VV.state, eV, xV);
      return JV != bV(VV.state) && VV.dispatch({}), !!JV
    }
    class jV {
      constructor(VV) {
        this.doc = VV, this.cursorPos = 0, this.string = "", this.cursor = VV.iter()
      }
      get length() {
        return this.doc.length
      }
      syncTo(VV) {
        return this.string = this.cursor.next(VV - this.cursorPos).value, this.cursorPos = VV + this.string.length, this.cursorPos - this.string.length
      }
      chunk(VV) {
        return this.syncTo(VV), this.string
      }
      get lineChunks() {
        return !0
      }
      read(VV, eV) {
        let xV = this.cursorPos - this.string.length;
        return VV < xV || eV >= this.cursorPos ? this.doc.sliceString(VV, eV) : this.string.slice(VV - xV, eV - xV)
      }
    }
    let qV = null;
    class tV {
      constructor(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          JV = arguments.length > 3 ? arguments[3] : void 0,
          YV = arguments.length > 4 ? arguments[4] : void 0,
          UV = arguments.length > 5 ? arguments[5] : void 0,
          yV = arguments.length > 6 ? arguments[6] : void 0,
          pV = arguments.length > 7 ? arguments[7] : void 0;
        this.parser = VV, this.state = eV, this.fragments = xV, this.tree = JV, this.treeLen = YV, this.viewport = UV, this.skipped = yV, this.scheduleOn = pV, this.parse = null, this.tempSkipped = []
      }
      static create(VV, eV, xV) {
        return new tV(VV, eV, [], YV.x.empty, 0, xV, [], null)
      }
      startParse() {
        return this.parser.startParse(new jV(this.state.doc), this.fragments)
      }
      work(VV, eV) {
        return null != eV && eV >= this.state.doc.length && (eV = void 0), this.tree != YV.x.empty && this.isDone(null !== eV && void 0 !== eV ? eV : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext((() => {
          var xV;
          if ("number" == typeof VV) {
            let eV = Date.now() + VV;
            VV = () => Date.now() > eV
          }
          for (this.parse || (this.parse = this.startParse()), null != eV && (null == this.parse.stoppedAt || this.parse.stoppedAt > eV) && eV < this.state.doc.length && this.parse.stopAt(eV);;) {
            let JV = this.parse.advance();
            if (JV) {
              if (this.fragments = this.withoutTempSkipped(YV.t.addTree(JV, this.fragments, null != this.parse.stoppedAt)), this.treeLen = null !== (xV = this.parse.stoppedAt) && void 0 !== xV ? xV : this.state.doc.length, this.tree = JV, this.parse = null, !(this.treeLen < (null !== eV && void 0 !== eV ? eV : this.state.doc.length))) return !0;
              this.parse = this.startParse()
            }
            if (VV()) return !1
          }
        }))
      }
      takeTree() {
        let VV, eV;
        this.parse && (VV = this.parse.parsedPos) >= this.treeLen && ((null == this.parse.stoppedAt || this.parse.stoppedAt > VV) && this.parse.stopAt(VV), this.withContext((() => {
          for (; !(eV = this.parse.advance()););
        })), this.treeLen = VV, this.tree = eV, this.fragments = this.withoutTempSkipped(YV.t.addTree(this.tree, this.fragments, !0)), this.parse = null)
      }
      withContext(VV) {
        let eV = qV;
        qV = this;
        try {
          return VV()
        } finally {
          qV = eV
        }
      }
      withoutTempSkipped(VV) {
        for (let eV; eV = this.tempSkipped.pop();) VV = FV(VV, eV.from, eV.to);
        return VV
      }
      changes(VV, eV) {
        let {
          fragments: xV,
          tree: JV,
          treeLen: UV,
          viewport: yV,
          skipped: pV
        } = this;
        if (this.takeTree(), !VV.empty) {
          let eV = [];
          if (VV.iterChangedRanges(((VV, xV, JV, YV) => eV.push({
              fromA: VV,
              toA: xV,
              fromB: JV,
              toB: YV
            }))), xV = YV.t.applyChanges(xV, eV), JV = YV.x.empty, UV = 0, yV = {
              from: VV.mapPos(yV.from, -1),
              to: VV.mapPos(yV.to, 1)
            }, this.skipped.length) {
            pV = [];
            for (let eV of this.skipped) {
              let xV = VV.mapPos(eV.from, 1),
                JV = VV.mapPos(eV.to, -1);
              xV < JV && pV.push({
                from: xV,
                to: JV
              })
            }
          }
        }
        return new tV(this.parser, eV, xV, JV, UV, yV, pV, this.scheduleOn)
      }
      updateViewport(VV) {
        if (this.viewport.from == VV.from && this.viewport.to == VV.to) return !1;
        this.viewport = VV;
        let eV = this.skipped.length;
        for (let xV = 0; xV < this.skipped.length; xV++) {
          let {
            from: eV,
            to: JV
          } = this.skipped[xV];
          eV < VV.to && JV > VV.from && (this.fragments = FV(this.fragments, eV, JV), this.skipped.splice(xV--, 1))
        }
        return !(this.skipped.length >= eV) && (this.reset(), !0)
      }
      reset() {
        this.parse && (this.takeTree(), this.parse = null)
      }
      skipUntilInView(VV, eV) {
        this.skipped.push({
          from: VV,
          to: eV
        })
      }
      static getSkippingParser(VV) {
        return new class extends YV.r {
          createParse(eV, xV, JV) {
            let UV = JV[0].from,
              yV = JV[JV.length - 1].to;
            return {
              parsedPos: UV,
              advance() {
                let eV = qV;
                if (eV) {
                  for (let VV of JV) eV.tempSkipped.push(VV);
                  VV && (eV.scheduleOn = eV.scheduleOn ? Promise.all([eV.scheduleOn, VV]) : VV)
                }
                return this.parsedPos = yV, new YV.x(YV.m.none, [], [], yV - UV)
              },
              stoppedAt: null,
              stopAt() {}
            }
          }
        }
      }
      isDone(VV) {
        VV = Math.min(VV, this.state.doc.length);
        let eV = this.fragments;
        return this.treeLen >= VV && eV.length && 0 == eV[0].from && eV[0].to >= VV
      }
      static get() {
        return qV
      }
    }

    function FV(VV, eV, xV) {
      return YV.t.applyChanges(VV, [{
        fromA: eV,
        toA: xV,
        fromB: eV,
        toB: xV
      }])
    }
    class TV {
      constructor(VV) {
        this.context = VV, this.tree = VV.tree
      }
      apply(VV) {
        if (!VV.docChanged && this.tree == this.context.tree) return this;
        let eV = this.context.changes(VV.changes, VV.state),
          xV = this.context.treeLen == VV.startState.doc.length ? void 0 : Math.max(VV.changes.mapPos(this.context.treeLen), eV.viewport.to);
        return eV.work(20, xV) || eV.takeTree(), new TV(eV)
      }
      static init(VV) {
        let eV = Math.min(3e3, VV.doc.length),
          xV = tV.create(VV.facet(XV).parser, VV, {
            from: 0,
            to: eV
          });
        return xV.work(20, eV) || xV.takeTree(), new TV(xV)
      }
    }
    vV.state = UV.E.define({
      create: TV.init,
      update(VV, eV) {
        for (let xV of eV.effects)
          if (xV.is(vV.setState)) return xV.value;
        return eV.startState.facet(XV) != eV.state.facet(XV) ? TV.init(eV.state) : VV.apply(eV)
      }
    });
    let PV = VV => {
      let eV = setTimeout((() => VV()), 500);
      return () => clearTimeout(eV)
    };
    "undefined" != typeof requestIdleCallback && (PV = VV => {
      let eV = -1,
        xV = setTimeout((() => {
          eV = requestIdleCallback(VV, {
            timeout: 400
          })
        }), 100);
      return () => eV < 0 ? clearTimeout(xV) : cancelIdleCallback(eV)
    });
    const AV = "undefined" != typeof navigator && (null === (JV = navigator.scheduling) || void 0 === JV ? void 0 : JV.isInputPending) ? () => navigator.scheduling.isInputPending() : null,
      NV = yV.j.fromClass(class {
        constructor(VV) {
          this.view = VV, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork()
        }
        update(VV) {
          let eV = this.view.state.field(vV.state).context;
          (eV.updateViewport(VV.view.viewport) || this.view.viewport.to > eV.treeLen) && this.scheduleWork(), (VV.docChanged || VV.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(eV)
        }
        scheduleWork() {
          if (this.working) return;
          let {
            state: VV
          } = this.view, eV = VV.field(vV.state);
          eV.tree == eV.context.tree && eV.context.isDone(VV.doc.length) || (this.working = PV(this.work))
        }
        work(VV) {
          this.working = null;
          let eV = Date.now();
          if (this.chunkEnd < eV && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = eV + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
          let {
            state: xV,
            viewport: {
              to: JV
            }
          } = this.view, YV = xV.field(vV.state);
          if (YV.tree == YV.context.tree && YV.context.isDone(JV + 1e5)) return;
          let UV = Date.now() + Math.min(this.chunkBudget, 100, VV && !AV ? Math.max(25, VV.timeRemaining() - 5) : 1e9),
            yV = YV.context.treeLen < JV && xV.doc.length > JV + 1e3,
            pV = YV.context.work((() => AV && AV() || Date.now() > UV), JV + (yV ? 0 : 1e5));
          this.chunkBudget -= Date.now() - eV, (pV || this.chunkBudget <= 0) && (YV.context.takeTree(), this.view.dispatch({
            effects: vV.setState.of(new TV(YV.context))
          })), this.chunkBudget > 0 && (!pV || yV) && this.scheduleWork(), this.checkAsyncSchedule(YV.context)
        }
        checkAsyncSchedule(VV) {
          VV.scheduleOn && (this.workScheduled++, VV.scheduleOn.then((() => this.scheduleWork())).catch((VV => (0, yV.Y)(this.view.state, VV))).then((() => this.workScheduled--)), VV.scheduleOn = null)
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
      XV = UV.r.define({
        combine: VV => VV.length ? VV[0] : null,
        enables: VV => [vV.state, NV, yV.e.contentAttributes.compute([VV], (eV => {
          let xV = eV.facet(VV);
          return xV && xV.name ? {
            "data-language": xV.name
          } : {}
        }))]
      });
    class MV {
      constructor(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        this.language = VV, this.support = eV, this.extension = [VV, eV]
      }
    }
    const zV = UV.r.define(),
      GV = UV.r.define({
        combine: VV => {
          if (!VV.length) return "  ";
          let eV = VV[0];
          if (!eV || /\S/.test(eV) || Array.from(eV).some((VV => VV != eV[0]))) throw new Error("Invalid indent unit: " + JSON.stringify(VV[0]));
          return eV
        }
      });

    function WV(VV) {
      let eV = VV.facet(GV);
      return 9 == eV.charCodeAt(0) ? VV.tabSize * eV.length : eV.length
    }

    function RV(VV, eV) {
      let xV = "",
        JV = VV.tabSize,
        YV = VV.facet(GV)[0];
      if ("\t" == YV) {
        for (; eV >= JV;) xV += "\t", eV -= JV;
        YV = " "
      }
      for (let UV = 0; UV < eV; UV++) xV += YV;
      return xV
    }

    function gV(VV, eV) {
      VV instanceof UV.q && (VV = new DV(VV));
      for (let JV of VV.state.facet(zV)) {
        let xV = JV(VV, eV);
        if (void 0 !== xV) return xV
      }
      let xV = bV(VV.state);
      return xV.length >= eV ? function(VV, eV, xV) {
        let JV = eV.resolveStack(xV),
          YV = eV.resolveInner(xV, -1).resolve(xV, 0).enterUnfinishedNodesBefore(xV);
        if (YV != JV.node) {
          let VV = [];
          for (let eV = YV; eV && !(eV.from < JV.node.from || eV.to > JV.node.to || eV.from == JV.node.from && eV.type == JV.node.type); eV = eV.parent) VV.push(eV);
          for (let eV = VV.length - 1; eV >= 0; eV--) JV = {
            node: VV[eV],
            next: JV
          }
        }
        return CV(JV, VV, xV)
      }(VV, xV, eV) : null
    }
    class DV {
      constructor(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.state = VV, this.options = eV, this.unit = WV(VV)
      }
      lineAt(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          xV = this.state.doc.lineAt(VV),
          {
            simulateBreak: JV,
            simulateDoubleBreak: YV
          } = this.options;
        return null != JV && JV >= xV.from && JV <= xV.to ? YV && JV == VV ? {
          text: "",
          from: VV
        } : (eV < 0 ? JV < VV : JV <= VV) ? {
          text: xV.text.slice(JV - xV.from),
          from: JV
        } : {
          text: xV.text.slice(0, JV - xV.from),
          from: xV.from
        } : xV
      }
      textAfterPos(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (this.options.simulateDoubleBreak && VV == this.options.simulateBreak) return "";
        let {
          text: xV,
          from: JV
        } = this.lineAt(VV, eV);
        return xV.slice(VV - JV, Math.min(xV.length, VV + 100 - JV))
      }
      column(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: xV,
            from: JV
          } = this.lineAt(VV, eV),
          YV = this.countColumn(xV, VV - JV),
          UV = this.options.overrideIndentation ? this.options.overrideIndentation(JV) : -1;
        return UV > -1 && (YV += UV - this.countColumn(xV, xV.search(/\S|$/))), YV
      }
      countColumn(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : VV.length;
        return (0, UV.W)(VV, this.state.tabSize, eV)
      }
      lineIndent(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: xV,
            from: JV
          } = this.lineAt(VV, eV),
          YV = this.options.overrideIndentation;
        if (YV) {
          let VV = YV(JV);
          if (VV > -1) return VV
        }
        return this.countColumn(xV, xV.search(/\S|$/))
      }
      get simulatedBreak() {
        return this.options.simulateBreak || null
      }
    }
    const iV = new YV.h;

    function CV(VV, eV, xV) {
      for (let JV = VV; JV; JV = JV.next) {
        let VV = aV(JV.node);
        if (VV) return VV(cV.create(eV, xV, JV))
      }
      return 0
    }

    function aV(VV) {
      let eV = VV.type.prop(iV);
      if (eV) return eV;
      let xV, JV = VV.firstChild;
      if (JV && (xV = JV.type.prop(YV.h.closedBy))) {
        let eV = VV.lastChild,
          JV = eV && xV.indexOf(eV.name) > -1;
        return VV => LV(VV, !0, 1, void 0, JV && ! function(VV) {
          return VV.pos == VV.options.simulateBreak && VV.options.simulateDoubleBreak
        }(VV) ? eV.from : void 0)
      }
      return null == VV.parent ? oV : null
    }

    function oV() {
      return 0
    }
    class cV extends DV {
      constructor(VV, eV, xV) {
        super(VV.state, VV.options), this.base = VV, this.pos = eV, this.context = xV
      }
      get node() {
        return this.context.node
      }
      static create(VV, eV, xV) {
        return new cV(VV, eV, xV)
      }
      get textAfter() {
        return this.textAfterPos(this.pos)
      }
      get baseIndent() {
        return this.baseIndentFor(this.node)
      }
      baseIndentFor(VV) {
        let eV = this.state.doc.lineAt(VV.from);
        for (;;) {
          let xV = VV.resolve(eV.from);
          for (; xV.parent && xV.parent.from == xV.from;) xV = xV.parent;
          if (hV(xV, VV)) break;
          eV = this.state.doc.lineAt(xV.from)
        }
        return this.lineIndent(eV.from)
      }
      continue () {
        return CV(this.context.next, this.base, this.pos)
      }
    }

    function hV(VV, eV) {
      for (let xV = eV; xV; xV = xV.parent)
        if (VV == xV) return !0;
      return !1
    }

    function lV(VV) {
      let {
        closing: eV,
        align: xV = !0,
        units: JV = 1
      } = VV;
      return VV => LV(VV, xV, JV, eV)
    }

    function LV(VV, eV, xV, JV, YV) {
      let UV = VV.textAfter,
        yV = UV.match(/^\s*/)[0].length,
        pV = JV && UV.slice(yV, yV + JV.length) == JV || YV == VV.pos + yV,
        QV = eV ? function(VV) {
          let eV = VV.node,
            xV = eV.childAfter(eV.from),
            JV = eV.lastChild;
          if (!xV) return null;
          let YV = VV.options.simulateBreak,
            UV = VV.state.doc.lineAt(xV.from),
            yV = null == YV || YV <= UV.from ? UV.to : Math.min(UV.to, YV);
          for (let pV = xV.to;;) {
            let VV = eV.childAfter(pV);
            if (!VV || VV == JV) return null;
            if (!VV.type.isSkipped) {
              if (VV.from >= yV) return null;
              let eV = /^ */.exec(UV.text.slice(xV.to - UV.from))[0].length;
              return {
                from: xV.from,
                to: xV.to + eV
              }
            }
            pV = VV.to
          }
        }(VV) : null;
      return QV ? pV ? VV.column(QV.from) : VV.column(QV.to) : VV.baseIndent + (pV ? 0 : VV.unit * xV)
    }
    const fV = VV => VV.baseIndent;

    function mV() {
      let {
        except: VV,
        units: eV = 1
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return xV => {
        let JV = VV && VV.test(xV.textAfter);
        return xV.baseIndent + (JV ? 0 : eV * xV.unit)
      }
    }
    const KV = 200;

    function HV() {
      return UV.q.transactionFilter.of((VV => {
        if (!VV.docChanged || !VV.isUserEvent("input.type") && !VV.isUserEvent("input.complete")) return VV;
        let eV = VV.startState.languageDataAt("indentOnInput", VV.startState.selection.main.head);
        if (!eV.length) return VV;
        let xV = VV.newDoc,
          {
            head: JV
          } = VV.newSelection.main,
          YV = xV.lineAt(JV);
        if (JV > YV.from + KV) return VV;
        let UV = xV.sliceString(YV.from, JV);
        if (!eV.some((VV => VV.test(UV)))) return VV;
        let {
          state: yV
        } = VV, pV = -1, QV = [];
        for (let {
            head: nV
          }
          of yV.selection.TE) {
          let VV = yV.doc.lineAt(nV);
          if (VV.from == pV) continue;
          pV = VV.from;
          let eV = gV(yV, VV.from);
          if (null == eV) continue;
          let xV = /^\s*/.exec(VV.text)[0],
            JV = RV(yV, eV);
          xV != JV && QV.push({
            from: VV.from,
            to: VV.from + xV.length,
            insert: JV
          })
        }
        return QV.length ? [VV, {
          changes: QV,
          sequential: !0
        }] : VV
      }))
    }
    const uV = UV.r.define(),
      sV = new YV.h;

    function SV(VV) {
      let eV = VV.firstChild,
        xV = VV.lastChild;
      return eV && eV.to < xV.from ? {
        from: eV.to,
        to: xV.type.isError ? VV.to : xV.from
      } : null
    }

    function IV(VV) {
      let eV = VV.lastChild;
      return eV && eV.to == VV.to && eV.type.isError
    }

    function dV(VV, eV, xV) {
      for (let JV of VV.facet(uV)) {
        let YV = JV(VV, eV, xV);
        if (YV) return YV
      }
      return function(VV, eV, xV) {
        let JV = bV(VV);
        if (JV.length < xV) return null;
        let YV = null;
        for (let UV = JV.resolveStack(xV, 1); UV; UV = UV.next) {
          let yV = UV.node;
          if (yV.to <= xV || yV.from > xV) continue;
          if (YV && yV.from < eV) break;
          let pV = yV.type.prop(sV);
          if (pV && (yV.to < JV.length - 50 || JV.length == VV.doc.length || !IV(yV))) {
            let JV = pV(yV, VV);
            JV && JV.from <= xV && JV.from >= eV && JV.to > xV && (YV = JV)
          }
        }
        return YV
      }(VV, eV, xV)
    }

    function OV(VV, eV) {
      let xV = eV.mapPos(VV.from, 1),
        JV = eV.mapPos(VV.to, -1);
      return xV >= JV ? void 0 : {
        from: xV,
        to: JV
      }
    }
    const Ve = UV.C.define({
        map: OV
      }),
      ee = UV.C.define({
        map: OV
      });

    function xe(VV) {
      let eV = [];
      for (let {
          head: xV
        }
        of VV.state.selection.TE) eV.some((VV => VV.from <= xV && VV.to >= xV)) || eV.push(VV.lineBlockAt(xV));
      return eV
    }
    const Je = UV.E.define({
      create: () => yV.b.none,
      update(VV, eV) {
        eV.isUserEvent("delete") && eV.changes.iterChangedRanges(((eV, xV) => VV = Ye(VV, eV, xV))), VV = VV.map(eV.changes);
        for (let xV of eV.effects)
          if (xV.is(Ve) && !ye(VV, xV.value.from, xV.value.to)) {
            let {
              preparePlaceholder: JV
            } = eV.state.facet(Ze), YV = JV ? yV.b.replace({
              widget: new be(JV(eV.state, xV.value))
            }) : ke;
            VV = VV.update({
              add: [YV.range(xV.value.from, xV.value.to)]
            })
          } else xV.is(ee) && (VV = VV.update({
            filter: (VV, eV) => xV.value.from != VV || xV.value.to != eV,
            filterFrom: xV.value.from,
            filterTo: xV.value.to
          }));
        return eV.selection && (VV = Ye(VV, eV.selection.main.head)), VV
      },
      provide: VV => yV.e.JU.from(VV),
      toJSON(VV, eV) {
        let xV = [];
        return VV.between(0, eV.doc.length, ((VV, eV) => {
          xV.push(VV, eV)
        })), xV
      },
      fromJSON(VV) {
        if (!Array.isArray(VV) || VV.length % 2) throw new RangeError("Invalid JSON for fold state");
        let eV = [];
        for (let xV = 0; xV < VV.length;) {
          let JV = VV[xV++],
            YV = VV[xV++];
          if ("number" != typeof JV || "number" != typeof YV) throw new RangeError("Invalid JSON for fold state");
          eV.push(ke.range(JV, YV))
        }
        return yV.b.set(eV, !0)
      }
    });

    function Ye(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : eV,
        JV = !1;
      return VV.between(eV, xV, ((VV, YV) => {
        VV < xV && YV > eV && (JV = !0)
      })), JV ? VV.update({
        filterFrom: eV,
        filterTo: xV,
        filter: (VV, JV) => VV >= xV || JV <= eV
      }) : VV
    }

    function Ue(VV, eV, xV) {
      var JV;
      let YV = null;
      return null === (JV = VV.field(Je, !1)) || void 0 === JV || JV.between(eV, xV, ((VV, eV) => {
        (!YV || YV.from > VV) && (YV = {
          from: VV,
          to: eV
        })
      })), YV
    }

    function ye(VV, eV, xV) {
      let JV = !1;
      return VV.between(eV, eV, ((VV, YV) => {
        VV == eV && YV == xV && (JV = !0)
      })), JV
    }

    function pe(VV, eV) {
      return VV.field(Je, !1) ? eV : eV.concat(UV.C.appendConfig.of(ve()))
    }

    function Qe(VV, eV) {
      let xV = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        JV = VV.state.doc.lineAt(eV.from).number,
        YV = VV.state.doc.lineAt(eV.to).number;
      return yV.e.announce.of(`${VV.state.phrase(xV?"Folded lines":"Unfolded lines")} ${JV} ${VV.state.phrase("to")} ${YV}.`)
    }
    const ne = [{
        key: "Ctrl-Shift-[",
        mac: "Cmd-Alt-[",
        run: VV => {
          for (let eV of xe(VV)) {
            let xV = dV(VV.state, eV.from, eV.to);
            if (xV) return VV.dispatch({
              effects: pe(VV.state, [Ve.of(xV), Qe(VV, xV)])
            }), !0
          }
          return !1
        }
      }, {
        key: "Ctrl-Shift-]",
        mac: "Cmd-Alt-]",
        run: VV => {
          if (!VV.state.field(Je, !1)) return !1;
          let eV = [];
          for (let xV of xe(VV)) {
            let JV = Ue(VV.state, xV.from, xV.to);
            JV && eV.push(ee.of(JV), Qe(VV, JV, !1))
          }
          return eV.length && VV.dispatch({
            effects: eV
          }), eV.length > 0
        }
      }, {
        key: "Ctrl-Alt-[",
        run: VV => {
          let {
            state: eV
          } = VV, xV = [];
          for (let JV = 0; JV < eV.doc.length;) {
            let YV = VV.lineBlockAt(JV),
              UV = dV(eV, YV.from, YV.to);
            UV && xV.push(Ve.of(UV)), JV = (UV ? VV.lineBlockAt(UV.to) : YV).to + 1
          }
          return xV.length && VV.dispatch({
            effects: pe(VV.state, xV)
          }), !!xV.length
        }
      }, {
        key: "Ctrl-Alt-]",
        run: VV => {
          let eV = VV.state.field(Je, !1);
          if (!eV || !eV.size) return !1;
          let xV = [];
          return eV.between(0, VV.state.doc.length, ((VV, eV) => {
            xV.push(ee.of({
              from: VV,
              to: eV
            }))
          })), VV.dispatch({
            effects: xV
          }), !0
        }
      }],
      we = {
        placeholderDOM: null,
        preparePlaceholder: null,
        placeholderText: "\u2026"
      },
      Ze = UV.r.define({
        combine: VV => (0, UV.T)(VV, we)
      });

    function ve(VV) {
      let eV = [Je, qe];
      return VV && eV.push(Ze.of(VV)), eV
    }

    function re(VV, eV) {
      let {
        state: xV
      } = VV, JV = xV.facet(Ze), YV = eV => {
        let xV = VV.lineBlockAt(VV.posAtDOM(eV.target)),
          JV = Ue(VV.state, xV.from, xV.to);
        JV && VV.dispatch({
          effects: ee.of(JV)
        }), eV.preventDefault()
      };
      if (JV.placeholderDOM) return JV.placeholderDOM(VV, YV, eV);
      let UV = document.createElement("span");
      return UV.textContent = JV.placeholderText, UV.setAttribute("aria-label", xV.phrase("folded code")), UV.title = xV.phrase("unfold"), UV.className = "cm-foldPlaceholder", UV.onclick = YV, UV
    }
    const ke = yV.b.replace({
      widget: new class extends yV.n {
        toDOM(VV) {
          return re(VV, null)
        }
      }
    });
    class be extends yV.n {
      constructor(VV) {
        super(), this.value = VV
      }
      eq(VV) {
        return this.value == VV.value
      }
      toDOM(VV) {
        return re(VV, this.value)
      }
    }
    const Ee = {
      openText: "\u2304",
      closedText: "\u203a",
      markerDOM: null,
      domEventHandlers: {},
      foldingChanged: () => !1
    };
    class Be extends yV.f {
      constructor(VV, eV) {
        super(), this.config = VV, this.open = eV
      }
      eq(VV) {
        return this.config == VV.config && this.open == VV.open
      }
      toDOM(VV) {
        if (this.config.markerDOM) return this.config.markerDOM(this.open);
        let eV = document.createElement("span");
        return eV.textContent = this.open ? this.config.openText : this.config.closedText, eV.title = VV.state.phrase(this.open ? "Fold line" : "Unfold line"), eV
      }
    }

    function je() {
      let VV = {
          ...Ee,
          ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        },
        eV = new Be(VV, !0),
        xV = new Be(VV, !1),
        JV = yV.j.fromClass(class {
          constructor(VV) {
            this.from = VV.viewport.from, this.markers = this.buildMarkers(VV)
          }
          update(eV) {
            (eV.docChanged || eV.viewportChanged || eV.startState.facet(XV) != eV.state.facet(XV) || eV.startState.field(Je, !1) != eV.state.field(Je, !1) || bV(eV.startState) != bV(eV.state) || VV.foldingChanged(eV)) && (this.markers = this.buildMarkers(eV.view))
          }
          buildMarkers(VV) {
            let JV = new UV.w;
            for (let YV of VV.viewportLineBlocks) {
              let UV = Ue(VV.state, YV.from, YV.to) ? xV : dV(VV.state, YV.from, YV.to) ? eV : null;
              UV && JV.add(YV.from, YV.from, UV)
            }
            return JV.finish()
          }
        }),
        {
          domEventHandlers: YV
        } = VV;
      return [JV, (0, yV.D)({
        class: "cm-foldGutter",
        markers(VV) {
          var eV;
          return (null === (eV = VV.plugin(JV)) || void 0 === eV ? void 0 : eV.markers) || UV.x.empty
        },
        initialSpacer: () => new Be(VV, !1),
        domEventHandlers: {
          ...YV,
          click: (VV, eV, xV) => {
            if (YV.click && YV.click(VV, eV, xV)) return !0;
            let JV = Ue(VV.state, eV.from, eV.to);
            if (JV) return VV.dispatch({
              effects: ee.of(JV)
            }), !0;
            let UV = dV(VV.state, eV.from, eV.to);
            return !!UV && (VV.dispatch({
              effects: Ve.of(UV)
            }), !0)
          }
        }
      }), ve()]
    }
    const qe = yV.e.baseTheme({
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
    class te {
      constructor(VV, eV) {
        let xV;

        function JV(VV) {
          let eV = QV.d.newName();
          return (xV || (xV = Object.create(null)))["." + eV] = VV, eV
        }
        this.specs = VV;
        const YV = "string" == typeof eV.all ? eV.all : eV.all ? JV(eV.all) : void 0,
          UV = eV.scope;
        this.scope = UV instanceof vV ? VV => VV.prop(nV) == UV.data : UV ? VV => VV == UV : void 0, this.style = (0, pV.i)(VV.map((VV => ({
          tag: VV.tag,
          class: VV.class || JV(Object.assign({}, VV, {
            tag: null
          }))
        }))), {
          all: YV
        }).style, this.module = xV ? new QV.d(xV) : null, this.themeType = eV.themeType
      }
      static define(VV, eV) {
        return new te(VV, eV || {})
      }
    }
    const Fe = UV.r.define(),
      Te = UV.r.define({
        combine: VV => VV.length ? [VV[0]] : null
      });

    function Pe(VV) {
      let eV = VV.facet(Fe);
      return eV.length ? eV : VV.facet(Te)
    }

    function Ae(VV, eV) {
      let xV, JV = [Xe];
      return VV instanceof te && (VV.module && JV.push(yV.e.styleModule.of(VV.module)), xV = VV.themeType), (null === eV || void 0 === eV ? void 0 : eV.fallback) ? JV.push(Te.of(VV)) : xV ? JV.push(Fe.computeN([yV.e.darkTheme], (eV => eV.facet(yV.e.darkTheme) == ("dark" == xV) ? [VV] : []))) : JV.push(Fe.of(VV)), JV
    }
    class Ne {
      constructor(VV) {
        this.markCache = Object.create(null), this.tree = bV(VV.state), this.JU = this.buildDeco(VV, Pe(VV.state)), this.decoratedTo = VV.viewport.to
      }
      update(VV) {
        let eV = bV(VV.state),
          xV = Pe(VV.state),
          JV = xV != Pe(VV.startState),
          {
            viewport: YV
          } = VV.view,
          UV = VV.changes.mapPos(this.decoratedTo, 1);
        eV.length < YV.to && !JV && eV.type == this.tree.type && UV >= YV.to ? (this.JU = this.JU.map(VV.changes), this.decoratedTo = UV) : (eV != this.tree || VV.viewportChanged || JV) && (this.tree = eV, this.JU = this.buildDeco(VV.view, xV), this.decoratedTo = YV.to)
      }
      buildDeco(VV, eV) {
        if (!eV || !this.tree.length) return yV.b.none;
        let xV = new UV.w;
        for (let {
            from: JV,
            to: YV
          }
          of VV.reV)(0, pV.c)(this.tree, eV, ((VV, eV, JV) => {
          xV.add(VV, eV, this.markCache[JV] || (this.markCache[JV] = yV.b.mark({
            class: JV
          })))
        }), JV, YV);
        return xV.finish()
      }
    }
    const Xe = UV.u.high(yV.j.fromClass(Ne, {
        JU: VV => VV.JU
      })),
      Me = te.define([{
        tag: pV.j.meta,
        color: "#404740"
      }, {
        tag: pV.j.link,
        textDecoration: "underline"
      }, {
        tag: pV.j.heading,
        textDecoration: "underline",
        fontWeight: "bold"
      }, {
        tag: pV.j.emphasis,
        fontStyle: "italic"
      }, {
        tag: pV.j.strong,
        fontWeight: "bold"
      }, {
        tag: pV.j.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: pV.j.keyword,
        color: "#708"
      }, {
        tag: [pV.j.atom, pV.j.bool, pV.j.url, pV.j.contentSeparator, pV.j.labelName],
        color: "#219"
      }, {
        tag: [pV.j.literal, pV.j.inserted],
        color: "#164"
      }, {
        tag: [pV.j.string, pV.j.deleted],
        color: "#a11"
      }, {
        tag: [pV.j.regexp, pV.j.escape, pV.j.special(pV.j.string)],
        color: "#e40"
      }, {
        tag: pV.j.definition(pV.j.variableName),
        color: "#00f"
      }, {
        tag: pV.j.local(pV.j.variableName),
        color: "#30a"
      }, {
        tag: [pV.j.typeName, pV.j.namespace],
        color: "#085"
      }, {
        tag: pV.j.className,
        color: "#167"
      }, {
        tag: [pV.j.special(pV.j.variableName), pV.j.macroName],
        color: "#256"
      }, {
        tag: pV.j.definition(pV.j.propertyName),
        color: "#00c"
      }, {
        tag: pV.j.comment,
        color: "#940"
      }, {
        tag: pV.j.invalid,
        color: "#f00"
      }]),
      ze = yV.e.baseTheme({
        "&.cm-focused .cm-matchingBracket": {
          backgroundColor: "#328c8252"
        },
        "&.cm-focused .cm-nonmatchingBracket": {
          backgroundColor: "#bb555544"
        }
      }),
      Ge = 1e4,
      We = "()[]{}",
      Re = UV.r.define({
        combine: VV => (0, UV.T)(VV, {
          afterCursor: !0,
          brackets: We,
          maxScanDistance: Ge,
          renderMatch: ie
        })
      }),
      ge = yV.b.mark({
        class: "cm-matchingBracket"
      }),
      De = yV.b.mark({
        class: "cm-nonmatchingBracket"
      });

    function ie(VV) {
      let eV = [],
        xV = VV.matched ? ge : De;
      return eV.push(xV.range(VV.start.from, VV.start.to)), VV.end && eV.push(xV.range(VV.end.from, VV.end.to)), eV
    }

    function Ce(VV) {
      let eV = [],
        xV = VV.facet(Re);
      for (let JV of VV.selection.TE) {
        if (!JV.empty) continue;
        let YV = Le(VV, JV.head, -1, xV) || JV.head > 0 && Le(VV, JV.head - 1, 1, xV) || xV.afterCursor && (Le(VV, JV.head, 1, xV) || JV.head < VV.doc.length && Le(VV, JV.head + 1, -1, xV));
        YV && (eV = eV.concat(xV.renderMatch(YV, VV)))
      }
      return yV.b.set(eV, !0)
    }
    const ae = [yV.j.fromClass(class {
      constructor(VV) {
        this.paused = !1, this.JU = Ce(VV.state)
      }
      update(VV) {
        (VV.docChanged || VV.selectionSet || this.paused) && (VV.view.composing ? (this.JU = this.JU.map(VV.changes), this.paused = !0) : (this.JU = Ce(VV.state), this.paused = !1))
      }
    }, {
      JU: VV => VV.JU
    }), ze];

    function oe() {
      let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Re.of(VV), ae]
    }
    const ce = new YV.h;

    function he(VV, eV, xV) {
      let JV = VV.prop(eV < 0 ? YV.h.openedBy : YV.h.closedBy);
      if (JV) return JV;
      if (1 == VV.name.length) {
        let JV = xV.indexOf(VV.name);
        if (JV > -1 && JV % 2 == (eV < 0 ? 1 : 0)) return [xV[JV + eV]]
      }
      return null
    }

    function le(VV) {
      let eV = VV.type.prop(ce);
      return eV ? eV(VV.node) : VV
    }

    function Le(VV, eV, xV) {
      let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        YV = JV.maxScanDistance || Ge,
        UV = JV.brackets || We,
        yV = bV(VV),
        pV = yV.resolveInner(eV, xV);
      for (let QV = pV; QV; QV = QV.parent) {
        let JV = he(QV.type, xV, UV);
        if (JV && QV.from < QV.to) {
          let YV = le(QV);
          if (YV && (xV > 0 ? eV >= YV.from && eV < YV.to : eV > YV.from && eV <= YV.to)) return fe(VV, eV, xV, QV, YV, JV, UV)
        }
      }
      return function(VV, eV, xV, JV, YV, UV, yV) {
        if (xV < 0 ? !eV : eV == VV.doc.length) return null;
        let pV = xV < 0 ? VV.sliceDoc(eV - 1, eV) : VV.sliceDoc(eV, eV + 1),
          QV = yV.indexOf(pV);
        if (QV < 0 || QV % 2 == 0 != xV > 0) return null;
        let nV = {
            from: xV < 0 ? eV - 1 : eV,
            to: xV > 0 ? eV + 1 : eV
          },
          wV = VV.doc.iterRange(eV, xV > 0 ? VV.doc.length : 0),
          ZV = 0;
        for (let vV = 0; !wV.next().done && vV <= UV;) {
          let VV = wV.value;
          xV < 0 && (vV += VV.length);
          let UV = eV + vV * xV;
          for (let eV = xV > 0 ? 0 : VV.length - 1, pV = xV > 0 ? VV.length : -1; eV != pV; eV += xV) {
            let pV = yV.indexOf(VV[eV]);
            if (!(pV < 0 || JV.resolveInner(UV + eV, 1).type != YV))
              if (pV % 2 == 0 == xV > 0) ZV++;
              else {
                if (1 == ZV) return {
                  start: nV,
                  end: {
                    from: UV + eV,
                    to: UV + eV + 1
                  },
                  matched: pV >> 1 == QV >> 1
                };
                ZV--
              }
          }
          xV > 0 && (vV += VV.length)
        }
        return wV.done ? {
          start: nV,
          matched: !1
        } : null
      }(VV, eV, xV, yV, pV.type, YV, UV)
    }

    function fe(VV, eV, xV, JV, YV, UV, yV) {
      let pV = JV.parent,
        QV = {
          from: YV.from,
          to: YV.to
        },
        nV = 0,
        wV = null === pV || void 0 === pV ? void 0 : pV.cursor();
      if (wV && (xV < 0 ? wV.childBefore(JV.from) : wV.childAfter(JV.to)))
        do {
          if (xV < 0 ? wV.to <= JV.from : wV.from >= JV.to) {
            if (0 == nV && UV.indexOf(wV.type.name) > -1 && wV.from < wV.to) {
              let VV = le(wV);
              return {
                start: QV,
                end: VV ? {
                  from: VV.from,
                  to: VV.to
                } : void 0,
                matched: !0
              }
            }
            if (he(wV.type, xV, yV)) nV++;
            else if (he(wV.type, -xV, yV)) {
              if (0 == nV) {
                let VV = le(wV);
                return {
                  start: QV,
                  end: VV && VV.from < VV.to ? {
                    from: VV.from,
                    to: VV.to
                  } : void 0,
                  matched: !1
                }
              }
              nV--
            }
          }
        } while (xV < 0 ? wV.prevSibling() : wV.nextSibling());
      return {
        start: QV,
        matched: !1
      }
    }
    const me = Object.create(null),
      Ke = [YV.m.none],
      He = [],
      ue = Object.create(null),
      se = Object.create(null);
    for (let [de, Oe] of [
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
      ]) se[de] = Ie(me, Oe);

    function Se(VV, eV) {
      He.indexOf(VV) > -1 || (He.push(VV), console.warn(eV))
    }

    function Ie(VV, eV) {
      let xV = [];
      for (let YV of eV.split(" ")) {
        let eV = [];
        for (let xV of YV.split(".")) {
          let JV = VV[xV] || pV.j[xV];
          JV ? "function" == typeof JV ? eV.length ? eV = eV.map(JV) : Se(xV, `Modifier ${xV} used at start of tag`) : eV.length ? Se(xV, `Tag ${xV} used as modifier`) : eV = Array.isArray(JV) ? JV : [JV] : Se(xV, `Unknown highlighting tag ${xV}`)
        }
        for (let VV of eV) xV.push(VV)
      }
      if (!xV.length) return 0;
      let JV = eV.replace(/ /g, "_"),
        UV = JV + " " + xV.map((VV => VV.id)),
        yV = ue[UV];
      if (yV) return yV.id;
      let QV = ue[UV] = YV.m.define({
        id: Ke.length,
        name: JV,
        props: [(0, pV.g)({
          [JV]: xV
        })]
      });
      return Ke.push(QV), QV.id
    }
    yV.c.RTL, yV.c.LTR
  },
  44288: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => qV,
      e: () => PV
    });
    var JV = xV(44234),
      YV = xV(44232),
      UV = xV(44243);
    class yV {
      constructor(VV, eV, xV) {
        this.from = VV, this.to = eV, this.diagnostic = xV
      }
    }
    class pV {
      constructor(VV, eV, xV) {
        this.diagnostics = VV, this.panel = eV, this.selected = xV
      }
      static init(VV, eV, xV) {
        let UV = xV.facet(FV).markerFilter;
        UV && (VV = UV(VV, xV));
        let yV = VV.slice().sort(((VV, eV) => VV.from - eV.from || VV.to - eV.to)),
          nV = new YV.w,
          wV = [],
          ZV = 0,
          vV = xV.doc.iter(),
          rV = 0,
          kV = xV.doc.length;
        for (let YV = 0;;) {
          let VV, eV, xV = YV == yV.length ? null : yV[YV];
          if (!xV && !wV.length) break;
          if (wV.length) VV = ZV, eV = wV.reduce(((VV, eV) => Math.min(VV, eV.to)), xV && xV.from > VV ? xV.from : 1e8);
          else {
            if (VV = xV.from, VV > kV) break;
            eV = xV.to, wV.push(xV), YV++
          }
          for (; YV < yV.length;) {
            let xV = yV[YV];
            if (xV.from != VV || !(xV.to > xV.from || xV.to == VV)) {
              eV = Math.min(xV.from, eV);
              break
            }
            wV.push(xV), YV++, eV = Math.min(xV.to, eV)
          }
          eV = Math.min(eV, kV);
          let UV = !1;
          if (wV.some((xV => xV.from == VV && (xV.to == eV || eV == kV))) && (UV = VV == eV, !UV && eV - VV < 10)) {
            let xV = VV - (rV + vV.value.length);
            xV > 0 && (vV.next(xV), rV = VV);
            for (let JV = VV;;) {
              if (JV >= eV) {
                UV = !0;
                break
              }
              if (!vV.lineBreak && rV + vV.value.length > JV) break;
              JV = rV + vV.value.length, rV += vV.value.length, vV.next()
            }
          }
          let pV = DV(wV);
          if (UV) nV.add(VV, VV, JV.b.widget({
            widget: new XV(pV),
            diagnostics: wV.slice()
          }));
          else {
            let xV = wV.reduce(((VV, eV) => eV.markClass ? VV + " " + eV.markClass : VV), "");
            nV.add(VV, eV, JV.b.mark({
              class: "cm-lintRange cm-lintRange-" + pV + xV,
              diagnostics: wV.slice(),
              inclusiveEnd: wV.some((VV => VV.to > eV))
            }))
          }
          if (ZV = eV, ZV == kV) break;
          for (let JV = 0; JV < wV.length; JV++) wV[JV].to <= ZV && wV.splice(JV--, 1)
        }
        let bV = nV.finish();
        return new pV(bV, eV, QV(bV))
      }
    }

    function QV(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        JV = null;
      return VV.between(xV, 1e9, ((VV, xV, YV) => {
        let {
          spec: UV
        } = YV;
        if (!(eV && UV.diagnostics.indexOf(eV) < 0))
          if (JV) {
            if (UV.diagnostics.indexOf(JV.diagnostic) < 0) return !1;
            JV = new yV(JV.from, xV, JV.diagnostic)
          } else JV = new yV(VV, xV, eV || UV.diagnostics[0])
      })), JV
    }

    function nV(VV, eV) {
      let xV = eV.pos,
        JV = eV.end || xV,
        YV = VV.state.facet(FV).hideOn(VV, xV, JV);
      if (null != YV) return YV;
      let UV = VV.startState.doc.lineAt(eV.pos);
      return !(!VV.effects.some((VV => VV.is(ZV))) && !VV.changes.touchesRange(UV.from, Math.max(UV.to, JV)))
    }

    function wV(VV, eV) {
      return VV.field(kV, !1) ? eV : eV.concat(YV.C.appendConfig.of(iV))
    }
    const ZV = YV.C.define(),
      vV = YV.C.define(),
      rV = YV.C.define(),
      kV = YV.E.define({
        create: () => new pV(JV.b.none, null, null),
        update(VV, eV) {
          if (eV.docChanged && VV.diagnostics.size) {
            let xV = VV.diagnostics.map(eV.changes),
              JV = null,
              YV = VV.panel;
            if (VV.selected) {
              let YV = eV.changes.mapPos(VV.selected.from, 1);
              JV = QV(xV, VV.selected.diagnostic, YV) || QV(xV, null, YV)
            }!xV.size && YV && eV.state.facet(FV).autoPanel && (YV = null), VV = new pV(xV, YV, JV)
          }
          for (let xV of eV.effects)
            if (xV.is(ZV)) {
              let JV = eV.state.facet(FV).autoPanel ? xV.value.length ? zV.open : null : VV.panel;
              VV = pV.init(xV.value, JV, eV.state)
            } else xV.is(vV) ? VV = new pV(VV.diagnostics, xV.value ? zV.open : null, VV.selected) : xV.is(rV) && (VV = new pV(VV.diagnostics, VV.panel, xV.value));
          return VV
        },
        provide: VV => [JV.jb.from(VV, (VV => VV.panel)), JV.e.JU.from(VV, (VV => VV.diagnostics))]
      });
    const bV = JV.b.mark({
      class: "cm-lintRange cm-lintRange-active"
    });

    function EV(VV, eV, xV) {
      let JV, {
          diagnostics: YV
        } = VV.state.field(kV),
        UV = -1,
        yV = -1;
      YV.between(eV - (xV < 0 ? 1 : 0), eV + (xV > 0 ? 1 : 0), ((VV, YV, pV) => {
        let {
          spec: QV
        } = pV;
        if (eV >= VV && eV <= YV && (VV == YV || (eV > VV || xV > 0) && (eV < YV || xV < 0))) return JV = QV.diagnostics, UV = VV, yV = YV, !1
      }));
      let pV = VV.state.facet(FV).tooltipFilter;
      return JV && pV && (JV = pV(JV, VV.state)), JV ? {
        pos: UV,
        end: yV,
        above: VV.state.doc.lineAt(UV).to < yV,
        create: () => ({
          dom: BV(VV, JV)
        })
      } : null
    }

    function BV(VV, eV) {
      return (0, UV.b)("ul", {
        class: "cm-tooltip-lint"
      }, eV.map((eV => NV(VV, eV, !1))))
    }
    const jV = VV => {
        let eV = VV.state.field(kV, !1);
        return !(!eV || !eV.panel) && (VV.dispatch({
          effects: vV.of(!1)
        }), !0)
      },
      qV = [{
        key: "Mod-Shift-m",
        run: VV => {
          let eV = VV.state.field(kV, !1);
          eV && eV.panel || VV.dispatch({
            effects: wV(VV.state, [vV.of(!0)])
          });
          let xV = (0, JV.z)(VV, zV.open);
          return xV && xV.dom.querySelector(".cm-panel-lint ul").focus(), !0
        },
        preventDefault: !0
      }, {
        key: "F8",
        run: VV => {
          let eV = VV.state.field(kV, !1);
          if (!eV) return !1;
          let xV = VV.state.selection.main,
            JV = QV(eV.diagnostics, null, xV.to + 1);
          return !(!JV && (JV = QV(eV.diagnostics, null, 0), !JV || JV.from == xV.from && JV.to == xV.to)) && (VV.dispatch({
            selection: {
              anchor: JV.from,
              head: JV.to
            },
            scrollIntoView: !0
          }), !0)
        }
      }],
      tV = JV.j.fromClass(class {
        constructor(VV) {
          this.view = VV, this.timeout = -1, this.set = !0;
          let {
            delay: eV
          } = VV.state.facet(FV);
          this.lintTime = Date.now() + eV, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, eV)
        }
        run() {
          clearTimeout(this.timeout);
          let VV = Date.now();
          if (VV < this.lintTime - 10) this.timeout = setTimeout(this.run, this.lintTime - VV);
          else {
            this.set = !1;
            let {
              state: VV
            } = this.view, {
              sources: eV
            } = VV.facet(FV);
            eV.length && function(VV, eV, xV) {
              let JV = [],
                YV = -1;
              for (let UV of VV) UV.then((xV => {
                JV.push(xV), clearTimeout(YV), JV.length == VV.length ? eV(JV) : YV = setTimeout((() => eV(JV)), 200)
              }), xV)
            }(eV.map((VV => Promise.resolve(VV(this.view)))), (eV => {
              this.view.state.doc == VV.doc && this.view.dispatch(function(VV, eV) {
                return {
                  effects: wV(VV, [ZV.of(eV)])
                }
              }(this.view.state, eV.reduce(((VV, eV) => VV.concat(eV)))))
            }), (VV => {
              (0, JV.Y)(this.view.state, VV)
            }))
          }
        }
        update(VV) {
          let eV = VV.state.facet(FV);
          (VV.docChanged || eV != VV.startState.facet(FV) || eV.needsRefresh && eV.needsRefresh(VV)) && (this.lintTime = Date.now() + eV.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, eV.delay)))
        }
        force() {
          this.set && (this.lintTime = Date.now(), this.run())
        }
        destroy() {
          clearTimeout(this.timeout)
        }
      });
    const FV = YV.r.define({
      combine: VV => ({
        sources: VV.map((VV => VV.source)).filter((VV => null != VV)),
        ...(0, YV.T)(VV.map((VV => VV.config)), {
          delay: 750,
          markerFilter: null,
          tooltipFilter: null,
          needsRefresh: null,
          hideOn: () => null
        }, {
          delay: Math.max,
          markerFilter: TV,
          tooltipFilter: TV,
          needsRefresh: (VV, eV) => VV ? eV ? xV => VV(xV) || eV(xV) : VV : eV,
          hideOn: (VV, eV) => VV ? eV ? (xV, JV, YV) => VV(xV, JV, YV) || eV(xV, JV, YV) : VV : eV,
          autoPanel: (VV, eV) => VV || eV
        })
      })
    });

    function TV(VV, eV) {
      return VV ? eV ? (xV, JV) => eV(VV(xV, JV), JV) : VV : eV
    }

    function PV(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return [FV.of({
        source: VV,
        config: eV
      }), tV, iV]
    }

    function AV(VV) {
      let eV = [];
      if (VV) VV: for (let {
          name: xV
        }
        of VV) {
        for (let VV = 0; VV < xV.length; VV++) {
          let JV = xV[VV];
          if (/[a-zA-Z]/.test(JV) && !eV.some((VV => VV.toLowerCase() == JV.toLowerCase()))) {
            eV.push(JV);
            continue VV
          }
        }
        eV.push("")
      }
      return eV
    }

    function NV(VV, eV, xV) {
      var JV;
      let YV = xV ? AV(eV.actions) : [];
      return (0, UV.b)("li", {
        class: "cm-diagnostic cm-diagnostic-" + eV.severity
      }, (0, UV.b)("span", {
        class: "cm-diagnosticText"
      }, eV.renderMessage ? eV.renderMessage(VV) : eV.message), null === (JV = eV.actions) || void 0 === JV ? void 0 : JV.map(((xV, JV) => {
        let yV = !1,
          pV = JV => {
            if (JV.preventDefault(), yV) return;
            yV = !0;
            let YV = QV(VV.state.field(kV).diagnostics, eV);
            YV && xV.apply(VV, YV.from, YV.to)
          },
          {
            name: nV
          } = xV,
          wV = YV[JV] ? nV.indexOf(YV[JV]) : -1,
          ZV = wV < 0 ? nV : [nV.slice(0, wV), (0, UV.b)("u", nV.slice(wV, wV + 1)), nV.slice(wV + 1)],
          vV = xV.markClass ? " " + xV.markClass : "";
        return (0, UV.b)("button", {
          type: "button",
          class: "cm-diagnosticAction" + vV,
          onclick: pV,
          onmousedown: pV,
          "aria-label": ` Action: ${nV}${wV<0?"":` (access key "${YV[JV]})"`}.`
        }, ZV)
      })), eV.source && (0, UV.b)("div", {
        class: "cm-diagnosticSource"
      }, eV.source))
    }
    class XV extends JV.n {
      constructor(VV) {
        super(), this.sev = VV
      }
      eq(VV) {
        return VV.sev == this.sev
      }
      toDOM() {
        return (0, UV.b)("span", {
          class: "cm-lintPoint cm-lintPoint-" + this.sev
        })
      }
    }
    class MV {
      constructor(VV, eV) {
        this.diagnostic = eV, this.id = "item_" + Math.floor(4294967295 * Math.random()).toString(16), this.dom = NV(VV, eV, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option")
      }
    }
    class zV {
      constructor(VV) {
        this.view = VV, this.items = [];
        this.list = (0, UV.b)("ul", {
          tabIndex: 0,
          role: "listbox",
          "aria-label": this.view.state.phrase("Diagnostics"),
          onkeydown: eV => {
            if (!(eV.ctrlKey || eV.altKey || eV.metaKey)) {
              if (27 == eV.keyCode) jV(this.view), this.view.focus();
              else if (38 == eV.keyCode || 33 == eV.keyCode) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
              else if (40 == eV.keyCode || 34 == eV.keyCode) this.moveSelection((this.selectedIndex + 1) % this.items.length);
              else if (36 == eV.keyCode) this.moveSelection(0);
              else if (35 == eV.keyCode) this.moveSelection(this.items.length - 1);
              else if (13 == eV.keyCode) this.view.focus();
              else {
                if (!(eV.keyCode >= 65 && eV.keyCode <= 90 && this.selectedIndex >= 0)) return;
                {
                  let {
                    diagnostic: xV
                  } = this.items[this.selectedIndex], JV = AV(xV.actions);
                  for (let YV = 0; YV < JV.length; YV++)
                    if (JV[YV].toUpperCase().charCodeAt(0) == eV.keyCode) {
                      let eV = QV(this.view.state.field(kV).diagnostics, xV);
                      eV && xV.actions[YV].apply(VV, eV.from, eV.to)
                    }
                }
              }
              eV.preventDefault()
            }
          },
          onclick: VV => {
            for (let eV = 0; eV < this.items.length; eV++) this.items[eV].dom.contains(VV.target) && this.moveSelection(eV)
          }
        }), this.dom = (0, UV.b)("div", {
          class: "cm-panel-lint"
        }, this.list, (0, UV.b)("button", {
          type: "button",
          name: "close",
          "aria-label": this.view.state.phrase("close"),
          onclick: () => jV(this.view)
        }, "\xd7")), this.update()
      }
      get selectedIndex() {
        let VV = this.view.state.field(kV).selected;
        if (!VV) return -1;
        for (let eV = 0; eV < this.items.length; eV++)
          if (this.items[eV].diagnostic == VV.diagnostic) return eV;
        return -1
      }
      update() {
        let {
          diagnostics: VV,
          selected: eV
        } = this.view.state.field(kV), xV = 0, JV = !1, YV = null, UV = new Set;
        for (VV.between(0, this.view.state.doc.length, ((VV, yV, pV) => {
            let {
              spec: QV
            } = pV;
            for (let nV of QV.diagnostics) {
              if (UV.has(nV)) continue;
              UV.add(nV);
              let VV, yV = -1;
              for (let eV = xV; eV < this.items.length; eV++)
                if (this.items[eV].diagnostic == nV) {
                  yV = eV;
                  break
                } yV < 0 ? (VV = new MV(this.view, nV), this.items.splice(xV, 0, VV), JV = !0) : (VV = this.items[yV], yV > xV && (this.items.splice(xV, yV - xV), JV = !0)), eV && VV.diagnostic == eV.diagnostic ? VV.dom.hasAttribute("aria-selected") || (VV.dom.setAttribute("aria-selected", "true"), YV = VV) : VV.dom.hasAttribute("aria-selected") && VV.dom.removeAttribute("aria-selected"), xV++
            }
          })); xV < this.items.length && !(1 == this.items.length && this.items[0].diagnostic.from < 0);) JV = !0, this.items.pop();
        0 == this.items.length && (this.items.push(new MV(this.view, {
          from: -1,
          to: -1,
          severity: "info",
          message: this.view.state.phrase("No diagnostics")
        })), JV = !0), YV ? (this.list.setAttribute("aria-activedescendant", YV.id), this.view.requestMeasure({
          key: this,
          read: () => ({
            sel: YV.dom.getBoundingClientRect(),
            panel: this.list.getBoundingClientRect()
          }),
          write: VV => {
            let {
              sel: eV,
              panel: xV
            } = VV, JV = xV.height / this.list.offsetHeight;
            eV.top < xV.top ? this.list.scrollTop -= (xV.top - eV.top) / JV : eV.bottom > xV.bottom && (this.list.scrollTop += (eV.bottom - xV.bottom) / JV)
          }
        })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), JV && this.sync()
      }
      sync() {
        let VV = this.list.firstChild;

        function eV() {
          let eV = VV;
          VV = eV.nextSibling, eV.remove()
        }
        for (let xV of this.items)
          if (xV.dom.parentNode == this.list) {
            for (; VV != xV.dom;) eV();
            VV = xV.dom.nextSibling
          } else this.list.insertBefore(xV.dom, VV);
        for (; VV;) eV()
      }
      moveSelection(VV) {
        if (this.selectedIndex < 0) return;
        let eV = QV(this.view.state.field(kV).diagnostics, this.items[VV].diagnostic);
        eV && this.view.dispatch({
          selection: {
            anchor: eV.from,
            head: eV.to
          },
          scrollIntoView: !0,
          effects: rV.of(eV)
        })
      }
      static open(VV) {
        return new zV(VV)
      }
    }

    function GV(VV) {
      return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${arguments.length>1&&void 0!==arguments[1]?arguments[1]:'viewBox="0 0 40 40"'}>${encodeURIComponent(VV)}</svg>')`
    }

    function WV(VV) {
      return GV(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${VV}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"')
    }
    const RV = JV.e.baseTheme({
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
        backgroundImage: WV("#d11")
      },
      ".cm-lintRange-warning": {
        backgroundImage: WV("orange")
      },
      ".cm-lintRange-info": {
        backgroundImage: WV("#999")
      },
      ".cm-lintRange-hint": {
        backgroundImage: WV("#66d")
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

    function gV(VV) {
      return "error" == VV ? 4 : "warning" == VV ? 3 : "info" == VV ? 2 : 1
    }

    function DV(VV) {
      let eV = "hint",
        xV = 1;
      for (let JV of VV) {
        let VV = gV(JV.severity);
        VV > xV && (xV = VV, eV = JV.severity)
      }
      return eV
    }
    JV.f;
    const iV = [kV, JV.e.JU.compute([kV], (VV => {
      let {
        selected: eV,
        panel: xV
      } = VV.field(kV);
      return eV && xV && eV.from != eV.to ? JV.b.set([bV.range(eV.from, eV.to)]) : JV.b.none
    })), (0, JV.O)(EV, {
      hideOn: nV
    }), RV]
  },
  44282: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => dV,
      g: () => BV,
      h: () => OV
    });
    var JV = xV(44234),
      YV = xV(44232),
      UV = xV(44243);
    const yV = "function" == typeof String.prototype.normalize ? VV => VV.normalize("NFKD") : VV => VV;
    class pV {
      constructor(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : VV.length,
          YV = arguments.length > 4 ? arguments[4] : void 0,
          UV = arguments.length > 5 ? arguments[5] : void 0;
        this.test = UV, this.value = {
          from: 0,
          to: 0
        }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = VV.iterRange(xV, JV), this.bufferStart = xV, this.normalize = YV ? VV => YV(yV(VV)) : yV, this.query = this.normalize(eV)
      }
      peek() {
        if (this.bufferPos == this.buffer.length) {
          if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
          this.bufferPos = 0, this.buffer = this.iter.value
        }
        return (0, YV.N)(this.buffer, this.bufferPos)
      }
      next() {
        for (; this.matches.length;) this.matches.pop();
        return this.nextOverlapping()
      }
      nextOverlapping() {
        for (;;) {
          let VV = this.peek();
          if (VV < 0) return this.done = !0, this;
          let eV = (0, YV.db)(VV),
            xV = this.bufferStart + this.bufferPos;
          this.bufferPos += (0, YV.R)(VV);
          let JV = this.normalize(eV);
          if (JV.length)
            for (let YV = 0, UV = xV;; YV++) {
              let VV = JV.charCodeAt(YV),
                yV = this.match(VV, UV, this.bufferPos + this.bufferStart);
              if (YV == JV.length - 1) {
                if (yV) return this.value = yV, this;
                break
              }
              UV == xV && YV < eV.length && eV.charCodeAt(YV) == VV && UV++
            }
        }
      }
      match(VV, eV, xV) {
        let JV = null;
        for (let YV = 0; YV < this.matches.length; YV += 2) {
          let eV = this.matches[YV],
            UV = !1;
          this.query.charCodeAt(eV) == VV && (eV == this.query.length - 1 ? JV = {
            from: this.matches[YV + 1],
            to: xV
          } : (this.matches[YV]++, UV = !0)), UV || (this.matches.splice(YV, 2), YV -= 2)
        }
        return this.query.charCodeAt(0) == VV && (1 == this.query.length ? JV = {
          from: eV,
          to: xV
        } : this.matches.push(1, eV)), JV && this.test && !this.test(JV.from, JV.to, this.buffer, this.bufferStart) && (JV = null), JV
      }
    }
    "undefined" != typeof Symbol && (pV.prototype[Symbol.iterator] = function() {
      return this
    });
    const QV = {
        from: -1,
        to: -1,
        match: /.*/.exec("")
      },
      nV = "gm" + (null == /x/.unicode ? "" : "u");
    class wV {
      constructor(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : VV.length;
        if (this.text = VV, this.to = YV, this.curLine = "", this.done = !1, this.value = QV, /\\[sWDnr]|\n|\r|\[\^/.test(eV)) return new rV(VV, eV, xV, JV, YV);
        this.re = new RegExp(eV, nV + ((null === xV || void 0 === xV ? void 0 : xV.ignoreCase) ? "i" : "")), this.test = null === xV || void 0 === xV ? void 0 : xV.test, this.iter = VV.iter();
        let UV = VV.lineAt(JV);
        this.curLineStart = UV.from, this.matchPos = kV(VV, JV), this.getLine(this.curLineStart)
      }
      getLine(VV) {
        this.iter.next(VV), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next())
      }
      nextLine() {
        this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0)
      }
      next() {
        for (let VV = this.matchPos - this.curLineStart;;) {
          this.re.lastIndex = VV;
          let eV = this.matchPos <= this.to && this.re.exec(this.curLine);
          if (eV) {
            let xV = this.curLineStart + eV.index,
              JV = xV + eV[0].length;
            if (this.matchPos = kV(this.text, JV + (xV == JV ? 1 : 0)), xV == this.curLineStart + this.curLine.length && this.nextLine(), (xV < JV || xV > this.value.to) && (!this.test || this.test(xV, JV, eV))) return this.value = {
              from: xV,
              to: JV,
              match: eV
            }, this;
            VV = this.matchPos - this.curLineStart
          } else {
            if (!(this.curLineStart + this.curLine.length < this.to)) return this.done = !0, this;
            this.nextLine(), VV = 0
          }
        }
      }
    }
    const ZV = new WeakMap;
    class vV {
      constructor(VV, eV) {
        this.from = VV, this.text = eV
      }
      get to() {
        return this.from + this.text.length
      }
      static get(VV, eV, xV) {
        let JV = ZV.get(VV);
        if (!JV || JV.from >= xV || JV.to <= eV) {
          let JV = new vV(eV, VV.sliceString(eV, xV));
          return ZV.set(VV, JV), JV
        }
        if (JV.from == eV && JV.to == xV) return JV;
        let {
          text: YV,
          from: UV
        } = JV;
        return UV > eV && (YV = VV.sliceString(eV, UV) + YV, UV = eV), JV.to < xV && (YV += VV.sliceString(JV.to, xV)), ZV.set(VV, new vV(UV, YV)), new vV(eV, YV.slice(eV - UV, xV - UV))
      }
    }
    class rV {
      constructor(VV, eV, xV, JV, YV) {
        this.text = VV, this.to = YV, this.done = !1, this.value = QV, this.matchPos = kV(VV, JV), this.re = new RegExp(eV, nV + ((null === xV || void 0 === xV ? void 0 : xV.ignoreCase) ? "i" : "")), this.test = null === xV || void 0 === xV ? void 0 : xV.test, this.flat = vV.get(VV, JV, this.chunkEnd(JV + 5e3))
      }
      chunkEnd(VV) {
        return VV >= this.to ? this.to : this.text.lineAt(VV).to
      }
      next() {
        for (;;) {
          let VV = this.re.lastIndex = this.matchPos - this.flat.from,
            eV = this.re.exec(this.flat.text);
          if (eV && !eV[0] && eV.index == VV && (this.re.lastIndex = VV + 1, eV = this.re.exec(this.flat.text)), eV) {
            let VV = this.flat.from + eV.index,
              xV = VV + eV[0].length;
            if ((this.flat.to >= this.to || eV.index + eV[0].length <= this.flat.text.length - 10) && (!this.test || this.test(VV, xV, eV))) return this.value = {
              from: VV,
              to: xV,
              match: eV
            }, this.matchPos = kV(this.text, xV + (VV == xV ? 1 : 0)), this
          }
          if (this.flat.to == this.to) return this.done = !0, this;
          this.flat = vV.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + 2 * this.flat.text.length))
        }
      }
    }

    function kV(VV, eV) {
      if (eV >= VV.length) return eV;
      let xV, JV = VV.lineAt(eV);
      for (; eV < JV.to && (xV = JV.text.charCodeAt(eV - JV.from)) >= 56320 && xV < 57344;) eV++;
      return eV
    }
    "undefined" != typeof Symbol && (wV.prototype[Symbol.iterator] = rV.prototype[Symbol.iterator] = function() {
      return this
    });
    const bV = {
        highlightWordAroundCursor: !1,
        minSelectionLength: 1,
        maxMatches: 100,
        wholeWords: !1
      },
      EV = YV.r.define({
        combine: VV => (0, YV.T)(VV, bV, {
          highlightWordAroundCursor: (VV, eV) => VV || eV,
          minSelectionLength: Math.min,
          maxMatches: Math.min
        })
      });

    function BV(VV) {
      let eV = [TV, FV];
      return VV && eV.push(EV.of(VV)), eV
    }
    const jV = JV.b.mark({
        class: "cm-selectionMatch"
      }),
      qV = JV.b.mark({
        class: "cm-selectionMatch cm-selectionMatch-main"
      });

    function tV(VV, eV, xV, JV) {
      return (0 == xV || VV(eV.sliceDoc(xV - 1, xV)) != YV.k.Word) && (JV == eV.doc.length || VV(eV.sliceDoc(JV, JV + 1)) != YV.k.Word)
    }
    const FV = JV.j.fromClass(class {
        constructor(VV) {
          this.JU = this.getDeco(VV)
        }
        update(VV) {
          (VV.selectionSet || VV.docChanged || VV.viewportChanged) && (this.JU = this.getDeco(VV.view))
        }
        getDeco(VV) {
          let eV = VV.state.facet(EV),
            {
              state: xV
            } = VV,
            UV = xV.selection;
          if (UV.TE.length > 1) return JV.b.none;
          let yV, QV = UV.main,
            nV = null;
          if (QV.empty) {
            if (!eV.highlightWordAroundCursor) return JV.b.none;
            let VV = xV.wordAt(QV.head);
            if (!VV) return JV.b.none;
            nV = xV.charCategorizer(QV.head), yV = xV.sliceDoc(VV.from, VV.to)
          } else {
            let VV = QV.to - QV.from;
            if (VV < eV.minSelectionLength || VV > 200) return JV.b.none;
            if (eV.wholeWords) {
              if (yV = xV.sliceDoc(QV.from, QV.to), nV = xV.charCategorizer(QV.head), !tV(nV, xV, QV.from, QV.to) || ! function(VV, eV, xV, JV) {
                  return VV(eV.sliceDoc(xV, xV + 1)) == YV.k.Word && VV(eV.sliceDoc(JV - 1, JV)) == YV.k.Word
                }(nV, xV, QV.from, QV.to)) return JV.b.none
            } else if (yV = xV.sliceDoc(QV.from, QV.to), !yV) return JV.b.none
          }
          let wV = [];
          for (let YV of VV.reV) {
            let VV = new pV(xV.doc, yV, YV.from, YV.to);
            for (; !VV.next().done;) {
              let {
                from: YV,
                to: UV
              } = VV.value;
              if ((!nV || tV(nV, xV, YV, UV)) && (QV.empty && YV <= QV.from && UV >= QV.to ? wV.push(qV.range(YV, UV)) : (YV >= QV.to || UV <= QV.from) && wV.push(jV.range(YV, UV)), wV.length > eV.maxMatches)) return JV.b.none
            }
          }
          return JV.b.set(wV)
        }
      }, {
        JU: VV => VV.JU
      }),
      TV = JV.e.baseTheme({
        ".cm-selectionMatch": {
          backgroundColor: "#99ff7780"
        },
        ".cm-searchMatch .cm-selectionMatch": {
          backgroundColor: "transparent"
        }
      });
    const PV = YV.r.define({
      combine: VV => (0, YV.T)(VV, {
        top: !1,
        caseSensitive: !1,
        literal: !1,
        regexp: !1,
        wholeWord: !1,
        createPanel: VV => new Ve(VV),
        scrollToMatch: VV => JV.e.scrollIntoView(VV)
      })
    });
    class AV {
      constructor(VV) {
        this.search = VV.search, this.caseSensitive = !!VV.caseSensitive, this.literal = !!VV.literal, this.regexp = !!VV.regexp, this.replace = VV.replace || "", this.valid = !!this.search && (!this.regexp || function(VV) {
          try {
            return new RegExp(VV, nV), !0
          } catch (eV) {
            return !1
          }
        }(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!VV.wholeWord, this.test = VV.test
      }
      unquote(VV) {
        return this.literal ? VV : VV.replace(/\\([nrt\\])/g, ((VV, eV) => "n" == eV ? "\n" : "r" == eV ? "\r" : "t" == eV ? "\t" : "\\"))
      }
      eq(VV) {
        return this.search == VV.search && this.replace == VV.replace && this.caseSensitive == VV.caseSensitive && this.regexp == VV.regexp && this.wholeWord == VV.wholeWord && this.test == VV.test
      }
      create() {
        return this.regexp ? new RV(this) : new MV(this)
      }
      getCursor(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          xV = arguments.length > 2 ? arguments[2] : void 0,
          JV = VV.doc ? VV : YV.q.create({
            doc: VV
          });
        return null == xV && (xV = JV.doc.length), this.regexp ? zV(this, JV, eV, xV) : XV(this, JV, eV, xV)
      }
    }
    class NV {
      constructor(VV) {
        this.spec = VV
      }
    }

    function XV(VV, eV, xV, JV) {
      let UV;
      var yV, QV;
      return VV.wholeWord && (yV = eV.doc, QV = eV.charCategorizer(eV.selection.main.head), UV = (VV, eV, xV, JV) => ((JV > VV || JV + xV.length < eV) && (JV = Math.max(0, VV - 2), xV = yV.sliceString(JV, Math.min(yV.length, eV + 2))), (QV(GV(xV, VV - JV)) != YV.k.Word || QV(WV(xV, VV - JV)) != YV.k.Word) && (QV(WV(xV, eV - JV)) != YV.k.Word || QV(GV(xV, eV - JV)) != YV.k.Word))), VV.test && (UV = function(VV, eV, xV) {
        return (JV, YV, UV, yV) => {
          if (xV && !xV(JV, YV, UV, yV)) return !1;
          let pV = JV >= yV && YV <= yV + UV.length ? UV.slice(JV - yV, YV - yV) : eV.doc.sliceString(JV, YV);
          return VV(pV, eV, JV, YV)
        }
      }(VV.test, eV, UV)), new pV(eV.doc, VV.unquoted, xV, JV, VV.caseSensitive ? void 0 : VV => VV.toLowerCase(), UV)
    }
    class MV extends NV {
      constructor(VV) {
        super(VV)
      }
      nextMatch(VV, eV, xV) {
        let JV = XV(this.spec, VV, xV, VV.doc.length).nextOverlapping();
        if (JV.done) {
          let xV = Math.min(VV.doc.length, eV + this.spec.unquoted.length);
          JV = XV(this.spec, VV, 0, xV).nextOverlapping()
        }
        return JV.done || JV.value.from == eV && JV.value.to == xV ? null : JV.value
      }
      prevMatchInRange(VV, eV, xV) {
        for (let JV = xV;;) {
          let xV = Math.max(eV, JV - 1e4 - this.spec.unquoted.length),
            YV = XV(this.spec, VV, xV, JV),
            UV = null;
          for (; !YV.nextOverlapping().done;) UV = YV.value;
          if (UV) return UV;
          if (xV == eV) return null;
          JV -= 1e4
        }
      }
      prevMatch(VV, eV, xV) {
        let JV = this.prevMatchInRange(VV, 0, eV);
        return JV || (JV = this.prevMatchInRange(VV, Math.max(0, xV - this.spec.unquoted.length), VV.doc.length)), !JV || JV.from == eV && JV.to == xV ? null : JV
      }
      getReplacement(VV) {
        return this.spec.unquote(this.spec.replace)
      }
      matchAll(VV, eV) {
        let xV = XV(this.spec, VV, 0, VV.doc.length),
          JV = [];
        for (; !xV.next().done;) {
          if (JV.length >= eV) return null;
          JV.push(xV.value)
        }
        return JV
      }
      highlight(VV, eV, xV, JV) {
        let YV = XV(this.spec, VV, Math.max(0, eV - this.spec.unquoted.length), Math.min(xV + this.spec.unquoted.length, VV.doc.length));
        for (; !YV.next().done;) JV(YV.value.from, YV.value.to)
      }
    }

    function zV(VV, eV, xV, JV) {
      let UV;
      var yV;
      return VV.wholeWord && (yV = eV.charCategorizer(eV.selection.main.head), UV = (VV, eV, xV) => !xV[0].length || (yV(GV(xV.input, xV.index)) != YV.k.Word || yV(WV(xV.input, xV.index)) != YV.k.Word) && (yV(WV(xV.input, xV.index + xV[0].length)) != YV.k.Word || yV(GV(xV.input, xV.index + xV[0].length)) != YV.k.Word)), VV.test && (UV = function(VV, eV, xV) {
        return (JV, YV, UV) => (!xV || xV(JV, YV, UV)) && VV(UV[0], eV, JV, YV)
      }(VV.test, eV, UV)), new wV(eV.doc, VV.search, {
        ignoreCase: !VV.caseSensitive,
        test: UV
      }, xV, JV)
    }

    function GV(VV, eV) {
      return VV.slice((0, YV.Z)(VV, eV, !1), eV)
    }

    function WV(VV, eV) {
      return VV.slice(eV, (0, YV.Z)(VV, eV))
    }
    class RV extends NV {
      nextMatch(VV, eV, xV) {
        let JV = zV(this.spec, VV, xV, VV.doc.length).next();
        return JV.done && (JV = zV(this.spec, VV, 0, eV).next()), JV.done ? null : JV.value
      }
      prevMatchInRange(VV, eV, xV) {
        for (let JV = 1;; JV++) {
          let YV = Math.max(eV, xV - 1e4 * JV),
            UV = zV(this.spec, VV, YV, xV),
            yV = null;
          for (; !UV.next().done;) yV = UV.value;
          if (yV && (YV == eV || yV.from > YV + 10)) return yV;
          if (YV == eV) return null
        }
      }
      prevMatch(VV, eV, xV) {
        return this.prevMatchInRange(VV, 0, eV) || this.prevMatchInRange(VV, xV, VV.doc.length)
      }
      getReplacement(VV) {
        return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, ((eV, xV) => {
          if ("&" == xV) return VV.match[0];
          if ("$" == xV) return "$";
          for (let JV = xV.length; JV > 0; JV--) {
            let eV = +xV.slice(0, JV);
            if (eV > 0 && eV < VV.match.length) return VV.match[eV] + xV.slice(JV)
          }
          return eV
        }))
      }
      matchAll(VV, eV) {
        let xV = zV(this.spec, VV, 0, VV.doc.length),
          JV = [];
        for (; !xV.next().done;) {
          if (JV.length >= eV) return null;
          JV.push(xV.value)
        }
        return JV
      }
      highlight(VV, eV, xV, JV) {
        let YV = zV(this.spec, VV, Math.max(0, eV - 250), Math.min(xV + 250, VV.doc.length));
        for (; !YV.next().done;) JV(YV.value.from, YV.value.to)
      }
    }
    const gV = YV.C.define(),
      DV = YV.C.define(),
      iV = YV.E.define({
        create: VV => new CV(uV(VV).create(), null),
        update(VV, eV) {
          for (let xV of eV.effects) xV.is(gV) ? VV = new CV(xV.value.create(), VV.panel) : xV.is(DV) && (VV = new CV(VV.query, xV.value ? HV : null));
          return VV
        },
        provide: VV => JV.jb.from(VV, (VV => VV.panel))
      });
    class CV {
      constructor(VV, eV) {
        this.query = VV, this.panel = eV
      }
    }
    const aV = JV.b.mark({
        class: "cm-searchMatch"
      }),
      oV = JV.b.mark({
        class: "cm-searchMatch cm-searchMatch-selected"
      }),
      cV = JV.j.fromClass(class {
        constructor(VV) {
          this.view = VV, this.JU = this.highlight(VV.state.field(iV))
        }
        update(VV) {
          let eV = VV.state.field(iV);
          (eV != VV.startState.field(iV) || VV.docChanged || VV.selectionSet || VV.viewportChanged) && (this.JU = this.highlight(eV))
        }
        highlight(VV) {
          let {
            query: eV,
            panel: xV
          } = VV;
          if (!xV || !eV.spec.valid) return JV.b.none;
          let {
            view: UV
          } = this, yV = new YV.w;
          for (let JV = 0, YV = UV.reV, pV = YV.length; JV < pV; JV++) {
            let {
              from: VV,
              to: xV
            } = YV[JV];
            for (; JV < pV - 1 && xV > YV[JV + 1].from - 500;) xV = YV[++JV].to;
            eV.highlight(UV.state, VV, xV, ((VV, eV) => {
              let xV = UV.state.selection.TE.some((xV => xV.from == VV && xV.to == eV));
              yV.add(VV, eV, xV ? oV : aV)
            }))
          }
          return yV.finish()
        }
      }, {
        JU: VV => VV.JU
      });

    function hV(VV) {
      return eV => {
        let xV = eV.state.field(iV, !1);
        return xV && xV.query.spec.valid ? VV(eV, xV) : IV(eV)
      }
    }
    const lV = hV(((VV, eV) => {
        let {
          query: xV
        } = eV, {
          to: JV
        } = VV.state.selection.main, UV = xV.nextMatch(VV.state, JV, JV);
        if (!UV) return !1;
        let yV = YV.n.single(UV.from, UV.to),
          pV = VV.state.facet(PV);
        return VV.dispatch({
          selection: yV,
          effects: [Ye(VV, UV), pV.scrollToMatch(yV.main, VV)],
          userEvent: "select.search"
        }), SV(VV), !0
      })),
      LV = hV(((VV, eV) => {
        let {
          query: xV
        } = eV, {
          state: JV
        } = VV, {
          from: UV
        } = JV.selection.main, yV = xV.prevMatch(JV, UV, UV);
        if (!yV) return !1;
        let pV = YV.n.single(yV.from, yV.to),
          QV = VV.state.facet(PV);
        return VV.dispatch({
          selection: pV,
          effects: [Ye(VV, yV), QV.scrollToMatch(pV.main, VV)],
          userEvent: "select.search"
        }), SV(VV), !0
      })),
      fV = hV(((VV, eV) => {
        let {
          query: xV
        } = eV, JV = xV.matchAll(VV.state, 1e3);
        return !(!JV || !JV.length) && (VV.dispatch({
          selection: YV.n.create(JV.map((VV => YV.n.range(VV.from, VV.to)))),
          userEvent: "select.search.matches"
        }), !0)
      })),
      mV = hV(((VV, eV) => {
        let {
          query: xV
        } = eV, {
          state: UV
        } = VV, {
          from: yV,
          to: pV
        } = UV.selection.main;
        if (UV.readOnly) return !1;
        let QV = xV.nextMatch(UV, yV, yV);
        if (!QV) return !1;
        let nV, wV, ZV = QV,
          vV = [],
          rV = [];
        ZV.from == yV && ZV.to == pV && (wV = UV.toText(xV.getReplacement(ZV)), vV.push({
          from: ZV.from,
          to: ZV.to,
          insert: wV
        }), ZV = xV.nextMatch(UV, ZV.from, ZV.to), rV.push(JV.e.announce.of(UV.phrase("replaced match on line $", UV.doc.lineAt(yV).number) + ".")));
        let kV = VV.state.changes(vV);
        return ZV && (nV = YV.n.single(ZV.from, ZV.to).map(kV), rV.push(Ye(VV, ZV)), rV.push(UV.facet(PV).scrollToMatch(nV.main, VV))), VV.dispatch({
          changes: kV,
          selection: nV,
          effects: rV,
          userEvent: "input.replace"
        }), !0
      })),
      KV = hV(((VV, eV) => {
        let {
          query: xV
        } = eV;
        if (VV.state.readOnly) return !1;
        let YV = xV.matchAll(VV.state, 1e9).map((VV => {
          let {
            from: eV,
            to: JV
          } = VV;
          return {
            from: eV,
            to: JV,
            insert: xV.getReplacement(VV)
          }
        }));
        if (!YV.length) return !1;
        let UV = VV.state.phrase("replaced $ matches", YV.length) + ".";
        return VV.dispatch({
          changes: YV,
          effects: JV.e.announce.of(UV),
          userEvent: "input.replace.all"
        }), !0
      }));

    function HV(VV) {
      return VV.state.facet(PV).createPanel(VV)
    }

    function uV(VV, eV) {
      var xV, JV, YV, UV, yV;
      let pV = VV.selection.main,
        QV = pV.empty || pV.to > pV.from + 100 ? "" : VV.sliceDoc(pV.from, pV.to);
      if (eV && !QV) return eV;
      let nV = VV.facet(PV);
      return new AV({
        search: (null !== (xV = null === eV || void 0 === eV ? void 0 : eV.literal) && void 0 !== xV ? xV : nV.literal) ? QV : QV.replace(/\n/g, "\\n"),
        caseSensitive: null !== (JV = null === eV || void 0 === eV ? void 0 : eV.caseSensitive) && void 0 !== JV ? JV : nV.caseSensitive,
        literal: null !== (YV = null === eV || void 0 === eV ? void 0 : eV.literal) && void 0 !== YV ? YV : nV.literal,
        regexp: null !== (UV = null === eV || void 0 === eV ? void 0 : eV.regexp) && void 0 !== UV ? UV : nV.regexp,
        wholeWord: null !== (yV = null === eV || void 0 === eV ? void 0 : eV.wholeWord) && void 0 !== yV ? yV : nV.wholeWord
      })
    }

    function sV(VV) {
      let eV = (0, JV.z)(VV, HV);
      return eV && eV.dom.querySelector("[main-field]")
    }

    function SV(VV) {
      let eV = sV(VV);
      eV && eV == VV.root.activeElement && eV.select()
    }
    const IV = VV => {
        let eV = VV.state.field(iV, !1);
        if (eV && eV.panel) {
          let xV = sV(VV);
          if (xV && xV != VV.root.activeElement) {
            let JV = uV(VV.state, eV.query.spec);
            JV.valid && VV.dispatch({
              effects: gV.of(JV)
            }), xV.focus(), xV.select()
          }
        } else VV.dispatch({
          effects: [DV.of(!0), eV ? gV.of(uV(VV.state, eV.query.spec)) : YV.C.appendConfig.of(ye)]
        });
        return !0
      },
      dV = VV => {
        let eV = VV.state.field(iV, !1);
        if (!eV || !eV.panel) return !1;
        let xV = (0, JV.z)(VV, HV);
        return xV && xV.dom.contains(VV.root.activeElement) && VV.focus(), VV.dispatch({
          effects: DV.of(!1)
        }), !0
      },
      OV = [{
        key: "Mod-f",
        run: IV,
        scope: "editor search-panel"
      }, {
        key: "F3",
        run: lV,
        shift: LV,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Mod-g",
        run: lV,
        shift: LV,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Escape",
        run: dV,
        scope: "editor search-panel"
      }, {
        key: "Mod-Shift-l",
        run: VV => {
          let {
            state: eV,
            dispatch: xV
          } = VV, JV = eV.selection;
          if (JV.TE.length > 1 || JV.main.empty) return !1;
          let {
            from: UV,
            to: yV
          } = JV.main, QV = [], nV = 0;
          for (let wV = new pV(eV.doc, eV.sliceDoc(UV, yV)); !wV.next().done;) {
            if (QV.length > 1e3) return !1;
            wV.value.from == UV && (nV = QV.length), QV.push(YV.n.range(wV.value.from, wV.value.to))
          }
          return xV(eV.update({
            selection: YV.n.create(QV, nV),
            userEvent: "select.search.matches"
          })), !0
        }
      }, {
        key: "Mod-Alt-g",
        run: VV => {
          let {
            state: eV
          } = VV, xV = String(eV.doc.lineAt(VV.state.selection.main.head).number), {
            close: UV,
            result: yV
          } = (0, JV.fb)(VV, {
            label: eV.phrase("Go to line"),
            input: {
              type: "text",
              name: "line",
              value: xV
            },
            focus: !0,
            submitLabel: eV.phrase("go")
          });
          return yV.then((xV => {
            let yV = xV && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(xV.elements.line.value);
            if (!yV) return void VV.dispatch({
              effects: UV
            });
            let pV = eV.doc.lineAt(eV.selection.main.head),
              [, QV, nV, wV, ZV] = yV,
              vV = wV ? +wV.slice(1) : 0,
              rV = nV ? +nV : pV.number;
            if (nV && ZV) {
              let VV = rV / 100;
              QV && (VV = VV * ("-" == QV ? -1 : 1) + pV.number / eV.doc.lines), rV = Math.round(eV.doc.lines * VV)
            } else nV && QV && (rV = rV * ("-" == QV ? -1 : 1) + pV.number);
            let kV = eV.doc.line(Math.max(1, Math.min(eV.doc.lines, rV))),
              bV = YV.n.cursor(kV.from + Math.max(0, Math.min(vV, kV.length)));
            VV.dispatch({
              effects: [UV, JV.e.scrollIntoView(bV.from, {
                y: "center"
              })],
              selection: bV
            })
          })), !0
        }
      }, {
        key: "Mod-d",
        run: VV => {
          let {
            state: eV,
            dispatch: xV
          } = VV, {
            TE: UV
          } = eV.selection;
          if (UV.some((VV => VV.from === VV.to))) return (VV => {
            let {
              state: eV,
              dispatch: xV
            } = VV, {
              selection: JV
            } = eV, UV = YV.n.create(JV.TE.map((VV => eV.wordAt(VV.head) || YV.n.cursor(VV.head))), JV.mainIndex);
            return !UV.eq(JV) && (xV(eV.update({
              selection: UV
            })), !0)
          })({
            state: eV,
            dispatch: xV
          });
          let yV = eV.sliceDoc(UV[0].from, UV[0].to);
          if (eV.selection.TE.some((VV => eV.sliceDoc(VV.from, VV.to) != yV))) return !1;
          let QV = function(VV, eV) {
            let {
              main: xV,
              TE: JV
            } = VV.selection, YV = VV.wordAt(xV.head), UV = YV && YV.from == xV.from && YV.to == xV.to;
            for (let yV = !1, QV = new pV(VV.doc, eV, JV[JV.length - 1].to);;) {
              if (QV.next(), !QV.done) {
                if (yV && JV.some((VV => VV.from == QV.value.from))) continue;
                if (UV) {
                  let eV = VV.wordAt(QV.value.from);
                  if (!eV || eV.from != QV.value.from || eV.to != QV.value.to) continue
                }
                return QV.value
              }
              if (yV) return null;
              QV = new pV(VV.doc, eV, 0, Math.max(0, JV[JV.length - 1].from - 1)), yV = !0
            }
          }(eV, yV);
          return !!QV && (xV(eV.update({
            selection: eV.selection.addRange(YV.n.range(QV.from, QV.to), !1),
            effects: JV.e.scrollIntoView(QV.to)
          })), !0)
        },
        preventDefault: !0
      }];
    class Ve {
      constructor(VV) {
        this.view = VV;
        let eV = this.query = VV.state.field(iV).query.spec;

        function xV(VV, eV, xV) {
          return (0, UV.b)("button", {
            class: "cm-button",
            name: VV,
            onclick: eV,
            type: "button"
          }, xV)
        }
        this.commit = this.commit.bind(this), this.searchField = (0, UV.b)("input", {
          value: eV.search,
          placeholder: ee(VV, "Find"),
          "aria-label": ee(VV, "Find"),
          class: "cm-textfield",
          name: "search",
          form: "",
          "main-field": "true",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.replaceField = (0, UV.b)("input", {
          value: eV.replace,
          placeholder: ee(VV, "Replace"),
          "aria-label": ee(VV, "Replace"),
          class: "cm-textfield",
          name: "replace",
          form: "",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.caseField = (0, UV.b)("input", {
          type: "checkbox",
          name: "case",
          form: "",
          checked: eV.caseSensitive,
          onchange: this.commit
        }), this.reField = (0, UV.b)("input", {
          type: "checkbox",
          name: "re",
          form: "",
          checked: eV.regexp,
          onchange: this.commit
        }), this.wordField = (0, UV.b)("input", {
          type: "checkbox",
          name: "word",
          form: "",
          checked: eV.wholeWord,
          onchange: this.commit
        }), this.dom = (0, UV.b)("div", {
          onkeydown: VV => this.keydown(VV),
          class: "cm-search"
        }, [this.searchField, xV("next", (() => lV(VV)), [ee(VV, "next")]), xV("prev", (() => LV(VV)), [ee(VV, "previous")]), xV("select", (() => fV(VV)), [ee(VV, "all")]), (0, UV.b)("label", null, [this.caseField, ee(VV, "match case")]), (0, UV.b)("label", null, [this.reField, ee(VV, "regexp")]), (0, UV.b)("label", null, [this.wordField, ee(VV, "by word")]), ...VV.state.readOnly ? [] : [(0, UV.b)("br"), this.replaceField, xV("replace", (() => mV(VV)), [ee(VV, "replace")]), xV("replaceAll", (() => KV(VV)), [ee(VV, "replace all")])], (0, UV.b)("button", {
          name: "close",
          onclick: () => dV(VV),
          "aria-label": ee(VV, "close"),
          type: "button"
        }, ["\xd7"])])
      }
      commit() {
        let VV = new AV({
          search: this.searchField.value,
          caseSensitive: this.caseField.checked,
          regexp: this.reField.checked,
          wholeWord: this.wordField.checked,
          replace: this.replaceField.value
        });
        VV.eq(this.query) || (this.query = VV, this.view.dispatch({
          effects: gV.of(VV)
        }))
      }
      keydown(VV) {
        (0, JV.db)(this.view, VV, "search-panel") ? VV.preventDefault(): 13 == VV.keyCode && VV.target == this.searchField ? (VV.preventDefault(), (VV.shiftKey ? LV : lV)(this.view)) : 13 == VV.keyCode && VV.target == this.replaceField && (VV.preventDefault(), mV(this.view))
      }
      update(VV) {
        for (let eV of VV.transactions)
          for (let VV of eV.effects) VV.is(gV) && !VV.value.eq(this.query) && this.setQuery(VV.value)
      }
      setQuery(VV) {
        this.query = VV, this.searchField.value = VV.search, this.replaceField.value = VV.replace, this.caseField.checked = VV.caseSensitive, this.reField.checked = VV.regexp, this.wordField.checked = VV.wholeWord
      }
      mount() {
        this.searchField.select()
      }
      get pos() {
        return 80
      }
      get top() {
        return this.view.state.facet(PV).top
      }
    }

    function ee(VV, eV) {
      return VV.state.phrase(eV)
    }
    const xe = 30,
      Je = /[\s\.,:;?!]/;

    function Ye(VV, eV) {
      let {
        from: xV,
        to: YV
      } = eV, UV = VV.state.doc.lineAt(xV), yV = VV.state.doc.lineAt(YV).to, pV = Math.max(UV.from, xV - xe), QV = Math.min(yV, YV + xe), nV = VV.state.sliceDoc(pV, QV);
      if (pV != UV.from)
        for (let JV = 0; JV < xe; JV++)
          if (!Je.test(nV[JV + 1]) && Je.test(nV[JV])) {
            nV = nV.slice(JV);
            break
          } if (QV != yV)
        for (let JV = nV.length - 1; JV > nV.length - xe; JV--)
          if (!Je.test(nV[JV - 1]) && Je.test(nV[JV])) {
            nV = nV.slice(0, JV);
            break
          } return JV.e.announce.of(`${VV.state.phrase("current match")}. ${nV} ${VV.state.phrase("on line")} ${UV.number}.`)
    }
    const Ue = JV.e.baseTheme({
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
      ye = [iV, YV.u.low(cV), Ue]
  },
  44234: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => RV,
      c: () => ne,
      e: () => NY,
      f: () => Uy,
      j: () => Se,
      n: () => GV,
      q: () => zU,
      u: () => SY,
      v: () => UU,
      z: () => SU,
      A: () => HU,
      D: () => wy,
      G: () => BU,
      E: () => Gy,
      K: () => rU,
      O: () => KU,
      Q: () => DY,
      U: () => Ny,
      Y: () => Ke,
      _: () => FU,
      bb: () => NU,
      db: () => aY,
      fb: () => ey,
      jb: () => Vy,
      kb: () => cU
    });
    for (var JV = xV(44232), YV = xV(44237), UV = {
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
      }, yV = {
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
      }, pV = "undefined" != typeof navigator && /Mac/.test(navigator.platform), QV = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), nV = 0; nV < 10; nV++) UV[48 + nV] = UV[96 + nV] = String(nV);
    for (nV = 1; nV <= 24; nV++) UV[nV + 111] = "F" + nV;
    for (nV = 65; nV <= 90; nV++) UV[nV] = String.fromCharCode(nV + 32), yV[nV] = String.fromCharCode(nV);
    for (var wV in UV) yV.hasOwnProperty(wV) || (yV[wV] = UV[wV]);
    var ZV = xV(44243);
    let vV = "undefined" != typeof navigator ? navigator : {
        userAgent: "",
        vendor: "",
        platform: ""
      },
      rV = "undefined" != typeof document ? document : {
        documentElement: {
          style: {}
        }
      };
    const kV = /Edge\/(\d+)/.exec(vV.userAgent),
      bV = /MSIE \d/.test(vV.userAgent),
      EV = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(vV.userAgent),
      BV = !!(bV || EV || kV),
      jV = !BV && /gecko\/(\d+)/i.test(vV.userAgent),
      qV = !BV && /Chrome\/(\d+)/.exec(vV.userAgent),
      tV = "webkitFontSmoothing" in rV.documentElement.style,
      FV = !BV && /Apple Computer/.test(vV.vendor),
      TV = FV && (/Mobile\/\w+/.test(vV.userAgent) || vV.maxTouchPoints > 2);
    var PV = {
      mac: TV || /Mac/.test(vV.platform),
      windows: /Win/.test(vV.platform),
      linux: /Linux|X11/.test(vV.platform),
      ie: BV,
      ie_version: bV ? rV.documentMode || 6 : EV ? +EV[1] : kV ? +kV[1] : 0,
      gecko: jV,
      gecko_version: jV ? +(/Firefox\/(\d+)/.exec(vV.userAgent) || [0, 0])[1] : 0,
      chrome: !!qV,
      chrome_version: qV ? +qV[1] : 0,
      ios: TV,
      android: /Android\b/.test(vV.userAgent),
      webkit: tV,
      webkit_version: tV ? +(/\bAppleWebKit\/(\d+)/.exec(vV.userAgent) || [0, 0])[1] : 0,
      safari: FV,
      safari_version: FV ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(vV.userAgent) || [0, 0])[1] : 0,
      tabSize: null != rV.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size"
    };

    function AV(VV, eV) {
      for (let xV in VV) "class" == xV && eV.class ? eV.class += " " + VV.class : "style" == xV && eV.style ? eV.style += ";" + VV.style : eV[xV] = VV[xV];
      return eV
    }
    const NV = Object.create(null);

    function XV(VV, eV, xV) {
      if (VV == eV) return !0;
      VV || (VV = NV), eV || (eV = NV);
      let JV = Object.keys(VV),
        YV = Object.keys(eV);
      if (JV.length - (xV && JV.indexOf(xV) > -1 ? 1 : 0) != YV.length - (xV && YV.indexOf(xV) > -1 ? 1 : 0)) return !1;
      for (let UV of JV)
        if (UV != xV && (-1 == YV.indexOf(UV) || VV[UV] !== eV[UV])) return !1;
      return !0
    }

    function MV(VV, eV, xV) {
      let JV = !1;
      if (eV)
        for (let YV in eV) xV && YV in xV || (JV = !0, "style" == YV ? VV.style.cssText = "" : VV.removeAttribute(YV));
      if (xV)
        for (let YV in xV) eV && eV[YV] == xV[YV] || (JV = !0, "style" == YV ? VV.style.cssText = xV[YV] : VV.setAttribute(YV, xV[YV]));
      return JV
    }

    function zV(VV) {
      let eV = Object.create(null);
      for (let xV = 0; xV < VV.attributes.length; xV++) {
        let JV = VV.attributes[xV];
        eV[JV.name] = JV.value
      }
      return eV
    }
    class GV {
      eq(VV) {
        return !1
      }
      updateDOM(VV, eV, xV) {
        return !1
      }
      compare(VV) {
        return this == VV || this.constructor == VV.constructor && this.eq(VV)
      }
      get estimatedHeight() {
        return -1
      }
      get lineBreaks() {
        return 0
      }
      ignoreEvent(VV) {
        return !0
      }
      coordsAt(VV, eV, xV) {
        return null
      }
      get isHidden() {
        return !1
      }
      get editable() {
        return !1
      }
      destroy(VV) {}
    }
    var WV = function(VV) {
      return VV[VV.Text = 0] = "Text", VV[VV.WidgetBefore = 1] = "WidgetBefore", VV[VV.WidgetAfter = 2] = "WidgetAfter", VV[VV.WidgetRange = 3] = "WidgetRange", VV
    }(WV || (WV = {}));
    class RV extends JV.A {
      constructor(VV, eV, xV, JV) {
        super(), this.startSide = VV, this.endSide = eV, this.widget = xV, this.spec = JV
      }
      get heightRelevant() {
        return !1
      }
      static mark(VV) {
        return new gV(VV)
      }
      static widget(VV) {
        let eV = Math.max(-1e4, Math.min(1e4, VV.side || 0)),
          xV = !!VV.block;
        return eV += xV && !VV.inlineOrder ? eV > 0 ? 3e8 : -4e8 : eV > 0 ? 1e8 : -1e8, new iV(VV, eV, eV, xV, VV.widget || null, !1)
      }
      static replace(VV) {
        let eV, xV, JV = !!VV.block;
        if (VV.isBlockGap) eV = -5e8, xV = 4e8;
        else {
          let {
            start: YV,
            end: UV
          } = CV(VV, JV);
          eV = (YV ? JV ? -3e8 : -1 : 5e8) - 1, xV = 1 + (UV ? JV ? 2e8 : 1 : -6e8)
        }
        return new iV(VV, eV, xV, JV, VV.widget || null, !0)
      }
      static line(VV) {
        return new DV(VV)
      }
      static set(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return JV.x.of(VV, eV)
      }
      hasHeight() {
        return !!this.widget && this.widget.estimatedHeight > -1
      }
    }
    RV.none = JV.x.empty;
    class gV extends RV {
      constructor(VV) {
        let {
          start: eV,
          end: xV
        } = CV(VV);
        super(eV ? -1 : 5e8, xV ? 1 : -6e8, null, VV), this.tagName = VV.tagName || "span", this.attrs = VV.class && VV.attributes ? AV(VV.attributes, {
          class: VV.class
        }) : VV.class ? {
          class: VV.class
        } : VV.attributes || NV
      }
      eq(VV) {
        return this == VV || VV instanceof gV && this.tagName == VV.tagName && XV(this.attrs, VV.attrs)
      }
      range(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : VV;
        if (VV >= eV) throw new RangeError("Mark decorations may not be empty");
        return super.range(VV, eV)
      }
    }
    gV.prototype.point = !1;
    class DV extends RV {
      constructor(VV) {
        super(-2e8, -2e8, null, VV)
      }
      eq(VV) {
        return VV instanceof DV && this.spec.class == VV.spec.class && XV(this.spec.attributes, VV.spec.attributes)
      }
      range(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : VV;
        if (eV != VV) throw new RangeError("Line decoration ranges must be zero-length");
        return super.range(VV, eV)
      }
    }
    DV.prototype.mapMode = JV.t.TrackBefore, DV.prototype.point = !0;
    class iV extends RV {
      constructor(VV, eV, xV, YV, UV, yV) {
        super(eV, xV, UV, VV), this.block = YV, this.isReplace = yV, this.mapMode = YV ? eV <= 0 ? JV.t.TrackBefore : JV.t.TrackAfter : JV.t.TrackDel
      }
      get type() {
        return this.startSide != this.endSide ? WV.WidgetRange : this.startSide <= 0 ? WV.WidgetBefore : WV.WidgetAfter
      }
      get heightRelevant() {
        return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0)
      }
      eq(VV) {
        return VV instanceof iV && (eV = this.widget, xV = VV.widget, eV == xV || !!(eV && xV && eV.compare(xV))) && this.block == VV.block && this.startSide == VV.startSide && this.endSide == VV.endSide;
        var eV, xV
      }
      range(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : VV;
        if (this.isReplace && (VV > eV || VV == eV && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && eV != VV) throw new RangeError("Widget decorations can only have zero-length ranges");
        return super.range(VV, eV)
      }
    }

    function CV(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          inclusiveStart: xV,
          inclusiveEnd: JV
        } = VV;
      return null == xV && (xV = VV.inclusive), null == JV && (JV = VV.inclusive), {
        start: null !== xV && void 0 !== xV ? xV : eV,
        end: null !== JV && void 0 !== JV ? JV : eV
      }
    }

    function aV(VV, eV, xV) {
      let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        YV = xV.length - 1;
      YV >= 0 && xV[YV] + JV >= VV ? xV[YV] = Math.max(xV[YV], eV) : xV.push(VV, eV)
    }
    iV.prototype.point = !0;
    class oV extends JV.A {
      constructor(VV, eV) {
        super(), this.tagName = VV, this.attributes = eV
      }
      eq(VV) {
        return VV == this || VV instanceof oV && this.tagName == VV.tagName && XV(this.attributes, VV.attributes)
      }
      static create(VV) {
        return new oV(VV.tagName, VV.attributes || NV)
      }
      static set(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return JV.x.of(VV, eV)
      }
    }

    function cV(VV) {
      let eV;
      return eV = 11 == VV.nodeType ? VV.getSelection ? VV : VV.ownerDocument : VV, eV.getSelection()
    }

    function hV(VV, eV) {
      return !!eV && (VV == eV || VV.contains(1 != eV.nodeType ? eV.parentNode : eV))
    }

    function lV(VV, eV) {
      if (!eV.anchorNode) return !1;
      try {
        return hV(VV, eV.anchorNode)
      } catch (xV) {
        return !1
      }
    }

    function LV(VV) {
      return 3 == VV.nodeType ? Je(VV, 0, VV.nodeValue.length).getClientRects() : 1 == VV.nodeType ? VV.getClientRects() : []
    }

    function fV(VV, eV, xV, JV) {
      return !!xV && (HV(VV, eV, xV, JV, -1) || HV(VV, eV, xV, JV, 1))
    }

    function mV(VV) {
      for (var eV = 0;; eV++)
        if (!(VV = VV.previousSibling)) return eV
    }

    function KV(VV) {
      return 1 == VV.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(VV.nodeName)
    }

    function HV(VV, eV, xV, JV, YV) {
      for (;;) {
        if (VV == xV && eV == JV) return !0;
        if (eV == (YV < 0 ? 0 : uV(VV))) {
          if ("DIV" == VV.nodeName) return !1;
          let xV = VV.parentNode;
          if (!xV || 1 != xV.nodeType) return !1;
          eV = mV(VV) + (YV < 0 ? 0 : 1), VV = xV
        } else {
          if (1 != VV.nodeType) return !1;
          if (1 == (VV = VV.childNodes[eV + (YV < 0 ? -1 : 0)]).nodeType && "false" == VV.contentEditable) return !1;
          eV = YV < 0 ? uV(VV) : 0
        }
      }
    }

    function uV(VV) {
      return 3 == VV.nodeType ? VV.nodeValue.length : VV.childNodes.length
    }

    function sV(VV, eV) {
      let xV = eV ? VV.left : VV.right;
      return {
        left: xV,
        right: xV,
        top: VV.top,
        bottom: VV.bottom
      }
    }

    function SV(VV) {
      let eV = VV.visualViewport;
      return eV ? {
        left: 0,
        right: eV.width,
        top: 0,
        bottom: eV.height
      } : {
        left: 0,
        right: VV.innerWidth,
        top: 0,
        bottom: VV.innerHeight
      }
    }

    function IV(VV, eV) {
      let xV = eV.width / VV.offsetWidth,
        JV = eV.height / VV.offsetHeight;
      return (xV > .995 && xV < 1.005 || !isFinite(xV) || Math.abs(eV.width - VV.offsetWidth) < 1) && (xV = 1), (JV > .995 && JV < 1.005 || !isFinite(JV) || Math.abs(eV.height - VV.offsetHeight) < 1) && (JV = 1), {
        scaleX: xV,
        scaleY: JV
      }
    }

    function dV(VV) {
      let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        xV = VV.ownerDocument,
        JV = null,
        YV = null;
      for (let UV = VV.parentNode; UV && (UV != xV.body && (eV && !JV || !YV));)
        if (1 == UV.nodeType) !YV && UV.scrollHeight > UV.clientHeight && (YV = UV), eV && !JV && UV.scrollWidth > UV.clientWidth && (JV = UV), UV = UV.assignedSlot || UV.parentNode;
        else {
          if (11 != UV.nodeType) break;
          UV = UV.host
        } return {
        x: JV,
        y: YV
      }
    }
    oV.prototype.startSide = oV.prototype.endSide = -1;
    class OV {
      constructor() {
        this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
      }
      eq(VV) {
        return this.anchorNode == VV.anchorNode && this.anchorOffset == VV.anchorOffset && this.focusNode == VV.focusNode && this.focusOffset == VV.focusOffset
      }
      setRange(VV) {
        let {
          anchorNode: eV,
          focusNode: xV
        } = VV;
        this.set(eV, Math.min(VV.anchorOffset, eV ? uV(eV) : 0), xV, Math.min(VV.focusOffset, xV ? uV(xV) : 0))
      }
      set(VV, eV, xV, JV) {
        this.anchorNode = VV, this.anchorOffset = eV, this.focusNode = xV, this.focusOffset = JV
      }
    }
    let Ve, ee = null;

    function xe(VV) {
      if (VV.setActive) return VV.setActive();
      if (ee) return VV.focus(ee);
      let eV = [];
      for (let xV = VV; xV && (eV.push(xV, xV.scrollTop, xV.scrollLeft), xV != xV.ownerDocument); xV = xV.parentNode);
      if (VV.focus(null == ee ? {
          get preventScroll() {
            return ee = {
              preventScroll: !0
            }, !0
          }
        } : void 0), !ee) {
        ee = !1;
        for (let VV = 0; VV < eV.length;) {
          let xV = eV[VV++],
            JV = eV[VV++],
            YV = eV[VV++];
          xV.scrollTop != JV && (xV.scrollTop = JV), xV.scrollLeft != YV && (xV.scrollLeft = YV)
        }
      }
    }

    function Je(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : eV,
        JV = Ve || (Ve = document.createRange());
      return JV.setEnd(VV, xV), JV.setStart(VV, eV), JV
    }

    function Ye(VV, eV, xV, JV) {
      let YV = {
        key: eV,
        code: eV,
        keyCode: xV,
        which: xV,
        cancelable: !0
      };
      JV && ({
        altKey: YV.altKey,
        ctrlKey: YV.ctrlKey,
        shiftKey: YV.shiftKey,
        metaKey: YV.metaKey
      } = JV);
      let UV = new KeyboardEvent("keydown", YV);
      UV.synthetic = !0, VV.dispatchEvent(UV);
      let yV = new KeyboardEvent("keyup", YV);
      return yV.synthetic = !0, VV.dispatchEvent(yV), UV.defaultPrevented || yV.defaultPrevented
    }

    function Ue(VV) {
      return VV instanceof Window ? VV.pageYOffset > Math.max(0, VV.document.documentElement.scrollHeight - VV.innerHeight - 4) : VV.scrollTop > Math.max(1, VV.scrollHeight - VV.clientHeight - 4)
    }

    function ye(VV, eV) {
      for (let xV = VV, JV = eV;;) {
        if (3 == xV.nodeType && JV > 0) return {
          node: xV,
          offset: JV
        };
        if (1 == xV.nodeType && JV > 0) {
          if ("false" == xV.contentEditable) return null;
          xV = xV.childNodes[JV - 1], JV = uV(xV)
        } else {
          if (!xV.parentNode || KV(xV)) return null;
          JV = mV(xV), xV = xV.parentNode
        }
      }
    }

    function pe(VV, eV) {
      for (let xV = VV, JV = eV;;) {
        if (3 == xV.nodeType && JV < xV.nodeValue.length) return {
          node: xV,
          offset: JV
        };
        if (1 == xV.nodeType && JV < xV.childNodes.length) {
          if ("false" == xV.contentEditable) return null;
          xV = xV.childNodes[JV], JV = 0
        } else {
          if (!xV.parentNode || KV(xV)) return null;
          JV = mV(xV) + 1, xV = xV.parentNode
        }
      }
    }
    PV.safari && PV.safari_version >= 26 && (ee = !1);
    class Qe {
      constructor(VV, eV) {
        let xV = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.node = VV, this.offset = eV, this.precise = xV
      }
      static before(VV, eV) {
        return new Qe(VV.parentNode, mV(VV), eV)
      }
      static after(VV, eV) {
        return new Qe(VV.parentNode, mV(VV) + 1, eV)
      }
    }
    var ne = function(VV) {
      return VV[VV.LTR = 0] = "LTR", VV[VV.RTL = 1] = "RTL", VV
    }(ne || (ne = {}));
    const we = ne.LTR,
      Ze = ne.RTL;

    function ve(VV) {
      let eV = [];
      for (let xV = 0; xV < VV.length; xV++) eV.push(1 << +VV[xV]);
      return eV
    }
    const re = ve("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),
      ke = ve("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),
      be = Object.create(null),
      Ee = [];
    for (let Wy of ["()", "[]", "{}"]) {
      let VV = Wy.charCodeAt(0),
        eV = Wy.charCodeAt(1);
      be[VV] = eV, be[eV] = -VV
    }

    function Be(VV) {
      return VV <= 247 ? re[VV] : 1424 <= VV && VV <= 1524 ? 2 : 1536 <= VV && VV <= 1785 ? ke[VV - 1536] : 1774 <= VV && VV <= 2220 ? 4 : 8192 <= VV && VV <= 8204 ? 256 : 64336 <= VV && VV <= 65023 ? 4 : 1
    }
    const je = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
    class qe {
      get dir() {
        return this.level % 2 ? Ze : we
      }
      constructor(VV, eV, xV) {
        this.from = VV, this.to = eV, this.level = xV
      }
      side(VV, eV) {
        return this.dir == eV == VV ? this.to : this.from
      }
      forward(VV, eV) {
        return VV == (this.dir == eV)
      }
      static find(VV, eV, xV, JV) {
        let YV = -1;
        for (let UV = 0; UV < VV.length; UV++) {
          let yV = VV[UV];
          if (yV.from <= eV && yV.to >= eV) {
            if (yV.level == xV) return UV;
            (YV < 0 || (0 != JV ? JV < 0 ? yV.from < eV : yV.to > eV : VV[YV].level > yV.level)) && (YV = UV)
          }
        }
        if (YV < 0) throw new RangeError("Index out of range");
        return YV
      }
    }

    function te(VV, eV) {
      if (VV.length != eV.length) return !1;
      for (let xV = 0; xV < VV.length; xV++) {
        let JV = VV[xV],
          YV = eV[xV];
        if (JV.from != YV.from || JV.to != YV.to || JV.direction != YV.direction || !te(JV.inner, YV.inner)) return !1
      }
      return !0
    }
    const Fe = [];

    function Te(VV, eV, xV, JV, YV, UV, yV) {
      let pV = JV % 2 ? 2 : 1;
      if (JV % 2 == YV % 2)
        for (let QV = eV, nV = 0; QV < xV;) {
          let eV = !0,
            wV = !1;
          if (nV == UV.length || QV < UV[nV].from) {
            let VV = Fe[QV];
            VV != pV && (eV = !1, wV = 16 == VV)
          }
          let ZV = eV || 1 != pV ? null : [],
            vV = eV ? JV : JV + 1,
            rV = QV;
          VV: for (;;)
            if (nV < UV.length && rV == UV[nV].from) {
              if (wV) break VV;
              let kV = UV[nV];
              if (!eV)
                for (let VV = kV.to, eV = nV + 1;;) {
                  if (VV == xV) break VV;
                  if (!(eV < UV.length && UV[eV].from == VV)) {
                    if (Fe[VV] == pV) break VV;
                    break
                  }
                  VV = UV[eV++].to
                }
              if (nV++, ZV) ZV.push(kV);
              else {
                kV.from > QV && yV.push(new qe(QV, kV.from, vV)), Pe(VV, kV.direction == we != !(vV % 2) ? JV + 1 : JV, YV, kV.inner, kV.from, kV.to, yV), QV = kV.to
              }
              rV = kV.to
            } else {
              if (rV == xV || (eV ? Fe[rV] != pV : Fe[rV] == pV)) break;
              rV++
            } ZV ? Te(VV, QV, rV, JV + 1, YV, ZV, yV) : QV < rV && yV.push(new qe(QV, rV, vV)), QV = rV
        } else
          for (let QV = xV, nV = UV.length; QV > eV;) {
            let xV = !0,
              wV = !1;
            if (!nV || QV > UV[nV - 1].to) {
              let VV = Fe[QV - 1];
              VV != pV && (xV = !1, wV = 16 == VV)
            }
            let ZV = xV || 1 != pV ? null : [],
              vV = xV ? JV : JV + 1,
              rV = QV;
            VV: for (;;)
              if (nV && rV == UV[nV - 1].to) {
                if (wV) break VV;
                let kV = UV[--nV];
                if (!xV)
                  for (let VV = kV.from, xV = nV;;) {
                    if (VV == eV) break VV;
                    if (!xV || UV[xV - 1].to != VV) {
                      if (Fe[VV - 1] == pV) break VV;
                      break
                    }
                    VV = UV[--xV].from
                  }
                if (ZV) ZV.push(kV);
                else {
                  kV.to < QV && yV.push(new qe(kV.to, QV, vV)), Pe(VV, kV.direction == we != !(vV % 2) ? JV + 1 : JV, YV, kV.inner, kV.from, kV.to, yV), QV = kV.from
                }
                rV = kV.from
              } else {
                if (rV == eV || (xV ? Fe[rV - 1] != pV : Fe[rV - 1] == pV)) break;
                rV--
              } ZV ? Te(VV, rV, QV, JV + 1, YV, ZV, yV) : rV < QV && yV.push(new qe(rV, QV, vV)), QV = rV
          }
    }

    function Pe(VV, eV, xV, JV, YV, UV, yV) {
      let pV = eV % 2 ? 2 : 1;
      ! function(VV, eV, xV, JV, YV) {
        for (let UV = 0; UV <= JV.length; UV++) {
          let yV = UV ? JV[UV - 1].to : eV,
            pV = UV < JV.length ? JV[UV].from : xV,
            QV = UV ? 256 : YV;
          for (let eV = yV, xV = QV, JV = QV; eV < pV; eV++) {
            let YV = Be(VV.charCodeAt(eV));
            512 == YV ? YV = xV : 8 == YV && 4 == JV && (YV = 16), Fe[eV] = 4 == YV ? 2 : YV, 7 & YV && (JV = YV), xV = YV
          }
          for (let VV = yV, eV = QV, JV = QV; VV < pV; VV++) {
            let YV = Fe[VV];
            if (128 == YV) VV < pV - 1 && eV == Fe[VV + 1] && 24 & eV ? YV = Fe[VV] = eV : Fe[VV] = 256;
            else if (64 == YV) {
              let YV = VV + 1;
              for (; YV < pV && 64 == Fe[YV];) YV++;
              let UV = VV && 8 == eV || YV < xV && 8 == Fe[YV] ? 1 == JV ? 1 : 8 : 256;
              for (let eV = VV; eV < YV; eV++) Fe[eV] = UV;
              VV = YV - 1
            } else 8 == YV && 1 == JV && (Fe[VV] = 1);
            eV = YV, 7 & YV && (JV = YV)
          }
        }
      }(VV, YV, UV, JV, pV),
      function(VV, eV, xV, JV, YV) {
        let UV = 1 == YV ? 2 : 1;
        for (let yV = 0, pV = 0, QV = 0; yV <= JV.length; yV++) {
          let nV = yV ? JV[yV - 1].to : eV,
            wV = yV < JV.length ? JV[yV].from : xV;
          for (let eV, xV, JV, yV = nV; yV < wV; yV++)
            if (xV = be[eV = VV.charCodeAt(yV)])
              if (xV < 0) {
                for (let VV = pV - 3; VV >= 0; VV -= 3)
                  if (Ee[VV + 1] == -xV) {
                    let eV = Ee[VV + 2],
                      xV = 2 & eV ? YV : 4 & eV ? 1 & eV ? UV : YV : 0;
                    xV && (Fe[yV] = Fe[Ee[VV]] = xV), pV = VV;
                    break
                  }
              } else {
                if (189 == Ee.length) break;
                Ee[pV++] = yV, Ee[pV++] = eV, Ee[pV++] = QV
              }
          else if (2 == (JV = Fe[yV]) || 1 == JV) {
            let VV = JV == YV;
            QV = VV ? 0 : 1;
            for (let eV = pV - 3; eV >= 0; eV -= 3) {
              let xV = Ee[eV + 2];
              if (2 & xV) break;
              if (VV) Ee[eV + 2] |= 2;
              else {
                if (4 & xV) break;
                Ee[eV + 2] |= 4
              }
            }
          }
        }
      }(VV, YV, UV, JV, pV),
      function(VV, eV, xV, JV) {
        for (let YV = 0, UV = JV; YV <= xV.length; YV++) {
          let yV = YV ? xV[YV - 1].to : VV,
            pV = YV < xV.length ? xV[YV].from : eV;
          for (let QV = yV; QV < pV;) {
            let yV = Fe[QV];
            if (256 == yV) {
              let yV = QV + 1;
              for (;;)
                if (yV == pV) {
                  if (YV == xV.length) break;
                  yV = xV[YV++].to, pV = YV < xV.length ? xV[YV].from : eV
                } else {
                  if (256 != Fe[yV]) break;
                  yV++
                } let nV = 1 == UV,
                wV = nV == (1 == (yV < eV ? Fe[yV] : JV)) ? nV ? 1 : 2 : JV;
              for (let eV = yV, JV = YV, UV = JV ? xV[JV - 1].to : VV; eV > QV;) eV == UV && (eV = xV[--JV].from, UV = JV ? xV[JV - 1].to : VV), Fe[--eV] = wV;
              QV = yV
            } else UV = yV, QV++
          }
        }
      }(YV, UV, JV, pV), Te(VV, YV, UV, eV, xV, JV, yV)
    }

    function Ae(VV, eV, xV) {
      if (!VV) return [new qe(0, 0, eV == Ze ? 1 : 0)];
      if (eV == we && !xV.length && !je.test(VV)) return Ne(VV.length);
      if (xV.length)
        for (; VV.length > Fe.length;) Fe[Fe.length] = 256;
      let JV = [],
        YV = eV == we ? 0 : 1;
      return Pe(VV, YV, YV, xV, 0, VV.length, JV), JV
    }

    function Ne(VV) {
      return [new qe(0, VV, 0)]
    }
    let Xe = "";

    function Me(VV, eV, xV, YV, UV) {
      var yV;
      let pV = YV.head - VV.from,
        QV = qe.find(eV, pV, null !== (yV = YV.bidiLevel) && void 0 !== yV ? yV : -1, YV.assoc),
        nV = eV[QV],
        wV = nV.side(UV, xV);
      if (pV == wV) {
        let VV = QV += UV ? 1 : -1;
        if (VV < 0 || VV >= eV.length) return null;
        nV = eV[QV = VV], pV = nV.side(!UV, xV), wV = nV.side(UV, xV)
      }
      let ZV = (0, JV.Z)(VV.text, pV, nV.forward(UV, xV));
      (ZV < nV.from || ZV > nV.to) && (ZV = wV), Xe = VV.text.slice(Math.min(pV, ZV), Math.max(pV, ZV));
      let vV = QV == (UV ? eV.length - 1 : 0) ? null : eV[QV + (UV ? 1 : -1)];
      return vV && ZV == wV && vV.level + (UV ? 0 : 1) < nV.level ? JV.n.cursor(vV.side(!UV, xV) + VV.from, vV.forward(UV, xV) ? 1 : -1, vV.level) : JV.n.cursor(ZV + VV.from, nV.forward(UV, xV) ? -1 : 1, nV.level)
    }

    function ze(VV, eV, xV) {
      for (let JV = eV; JV < xV; JV++) {
        let eV = Be(VV.charCodeAt(JV));
        if (1 == eV) return we;
        if (2 == eV || 4 == eV) return Ze
      }
      return we
    }
    const Ge = JV.r.define(),
      We = JV.r.define(),
      Re = JV.r.define(),
      ge = JV.r.define(),
      De = JV.r.define(),
      ie = JV.r.define(),
      Ce = JV.r.define(),
      ae = JV.r.define(),
      oe = JV.r.define(),
      ce = JV.r.define({
        combine: VV => VV.some((VV => VV))
      }),
      he = JV.r.define({
        combine: VV => VV.some((VV => VV))
      }),
      le = JV.r.define();
    class Le {
      constructor(VV, eV, xV, JV, YV) {
        let UV = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.range = VV, this.y = eV, this.x = xV, this.yMargin = JV, this.xMargin = YV, this.isSnapshot = UV
      }
      map(VV) {
        return VV.empty ? this : new Le(this.range.map(VV), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
      clip(VV) {
        return this.range.to <= VV.doc.length ? this : new Le(JV.n.cursor(VV.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
    }
    const fe = JV.C.define({
        map: (VV, eV) => VV.map(eV)
      }),
      me = JV.C.define();

    function Ke(VV, eV, xV) {
      let JV = VV.facet(ge);
      JV.length ? JV[0](eV) : window.onerror && window.onerror(String(eV), xV, void 0, void 0, eV) || (xV ? console.error(xV + ":", eV) : console.error(eV))
    }
    const He = JV.r.define({
      combine: VV => !VV.length || VV[0]
    });
    let ue = 0;
    const se = JV.r.define({
      combine: VV => VV.filter(((eV, xV) => {
        for (let JV = 0; JV < xV; JV++)
          if (VV[JV].plugin == eV.plugin) return !1;
        return !0
      }))
    });
    class Se {
      constructor(VV, eV, xV, JV, YV) {
        this.id = VV, this.create = eV, this.domEventHandlers = xV, this.domEventObservers = JV, this.baseExtensions = YV(this), this.extension = this.baseExtensions.concat(se.of({
          plugin: this,
          arg: void 0
        }))
      }
      of(VV) {
        return this.baseExtensions.concat(se.of({
          plugin: this,
          arg: VV
        }))
      }
      static define(VV, eV) {
        const {
          eventHandlers: xV,
          eventObservers: JV,
          provide: YV,
          JU: UV
        } = eV || {};
        return new Se(ue++, VV, xV, JV, (VV => {
          let eV = [];
          return UV && eV.push(Vx.of((eV => {
            let xV = eV.plugin(VV);
            return xV ? UV(xV) : RV.none
          }))), YV && eV.push(YV(VV)), eV
        }))
      }
      static fromClass(VV, eV) {
        return Se.define(((eV, xV) => new VV(eV, xV)), eV)
      }
    }
    class Ie {
      constructor(VV) {
        this.spec = VV, this.mustUpdate = null, this.value = null
      }
      get plugin() {
        return this.spec && this.spec.plugin
      }
      update(VV) {
        if (this.value) {
          if (this.mustUpdate) {
            let VV = this.mustUpdate;
            if (this.mustUpdate = null, this.value.update) try {
              this.value.update(VV)
            } catch (eV) {
              if (Ke(VV.state, eV, "CodeMirror plugin crashed"), this.value.destroy) try {
                this.value.destroy()
              } catch (xV) {}
              this.deactivate()
            }
          }
        } else if (this.spec) try {
          this.value = this.spec.plugin.create(VV, this.spec.arg)
        } catch (eV) {
          Ke(VV.state, eV, "CodeMirror plugin crashed"), this.deactivate()
        }
        return this
      }
      destroy(VV) {
        var eV;
        if (null === (eV = this.value) || void 0 === eV ? void 0 : eV.destroy) try {
          this.value.destroy()
        } catch (xV) {
          Ke(VV.state, xV, "CodeMirror plugin crashed")
        }
      }
      deactivate() {
        this.spec = this.value = null
      }
    }
    const de = JV.r.define(),
      Oe = JV.r.define(),
      Vx = JV.r.define(),
      ex = JV.r.define(),
      xx = JV.r.define(),
      Jx = JV.r.define(),
      Yx = JV.r.define();

    function Ux(VV, eV) {
      let xV = VV.state.facet(Yx);
      if (!xV.length) return xV;
      let YV = xV.map((eV => eV instanceof Function ? eV(VV) : eV)),
        UV = [];
      return JV.x.spans(YV, eV.from, eV.to, {
        point() {},
        span(VV, xV, JV, YV) {
          let yV = VV - eV.from,
            pV = xV - eV.from,
            QV = UV;
          for (let UV = JV.length - 1; UV >= 0; UV--, YV--) {
            let VV, xV = JV[UV].spec.bidiIsolate;
            if (null == xV && (xV = ze(eV.text, yV, pV)), YV > 0 && QV.length && (VV = QV[QV.length - 1]).to == yV && VV.direction == xV) VV.to = pV, QV = VV.inner;
            else {
              let VV = {
                from: yV,
                to: pV,
                direction: xV,
                inner: []
              };
              QV.push(VV), QV = VV.inner
            }
          }
        }
      }), UV
    }
    const yx = JV.r.define();

    function px(VV) {
      let eV = 0,
        xV = 0,
        JV = 0,
        YV = 0;
      for (let UV of VV.state.facet(yx)) {
        let yV = UV(VV);
        yV && (null != yV.left && (eV = Math.max(eV, yV.left)), null != yV.right && (xV = Math.max(xV, yV.right)), null != yV.top && (JV = Math.max(JV, yV.top)), null != yV.bottom && (YV = Math.max(YV, yV.bottom)))
      }
      return {
        left: eV,
        right: xV,
        top: JV,
        bottom: YV
      }
    }
    const Qx = JV.r.define();
    class nx {
      constructor(VV, eV, xV, JV) {
        this.fromA = VV, this.toA = eV, this.fromB = xV, this.toB = JV
      }
      join(VV) {
        return new nx(Math.min(this.fromA, VV.fromA), Math.max(this.toA, VV.toA), Math.min(this.fromB, VV.fromB), Math.max(this.toB, VV.toB))
      }
      addToSet(VV) {
        let eV = VV.length,
          xV = this;
        for (; eV > 0; eV--) {
          let JV = VV[eV - 1];
          if (!(JV.fromA > xV.toA)) {
            if (JV.toA < xV.fromA) break;
            xV = xV.join(JV), VV.splice(eV - 1, 1)
          }
        }
        return VV.splice(eV, 0, xV), VV
      }
      static extendWithRanges(VV, eV) {
        if (0 == eV.length) return VV;
        let xV = [];
        for (let JV = 0, YV = 0, UV = 0;;) {
          let yV = JV < VV.length ? VV[JV].fromB : 1e9,
            pV = YV < eV.length ? eV[YV] : 1e9,
            QV = Math.min(yV, pV);
          if (1e9 == QV) break;
          let nV = QV + UV,
            wV = QV,
            ZV = nV;
          for (;;)
            if (YV < eV.length && eV[YV] <= wV) {
              let xV = eV[YV + 1];
              YV += 2, wV = Math.max(wV, xV);
              for (let eV = JV; eV < VV.length && VV[eV].fromB <= wV; eV++) UV = VV[eV].toA - VV[eV].toB;
              ZV = Math.max(ZV, xV + UV)
            } else {
              if (!(JV < VV.length && VV[JV].fromB <= wV)) break;
              {
                let eV = VV[JV++];
                wV = Math.max(wV, eV.toB), ZV = Math.max(ZV, eV.toA), UV = eV.toA - eV.toB
              }
            } xV.push(new nx(nV, ZV, QV, wV))
        }
        return xV
      }
    }
    class wx {
      constructor(VV, eV, xV) {
        this.view = VV, this.state = eV, this.transactions = xV, this.flags = 0, this.startState = VV.state, this.changes = JV.ChangeSet.empty(this.startState.doc.length);
        for (let JV of xV) this.changes = this.changes.compose(JV.changes);
        let YV = [];
        this.changes.iterChangedRanges(((VV, eV, xV, JV) => YV.push(new nx(VV, eV, xV, JV)))), this.changedRanges = YV
      }
      static create(VV, eV, xV) {
        return new wx(VV, eV, xV)
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
        return this.transactions.some((VV => VV.selection))
      }
      get empty() {
        return 0 == this.flags && 0 == this.transactions.length
      }
    }
    const Zx = [];
    class vx {
      constructor(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.dom = VV, this.length = eV, this.flags = xV, this.parent = null, VV.cmTile = this
      }
      get breakAfter() {
        return 1 & this.flags
      }
      get children() {
        return Zx
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
      sync(VV) {
        if (this.flags |= 2, 4 & this.flags) {
          this.flags &= -5;
          let VV = this.domAttrs;
          VV && function(VV, eV) {
            for (let xV = VV.attributes.length - 1; xV >= 0; xV--) {
              let JV = VV.attributes[xV].name;
              null == eV[JV] && VV.removeAttribute(JV)
            }
            for (let xV in eV) {
              let JV = eV[xV];
              "style" == xV ? VV.style.cssText = JV : VV.getAttribute(xV) != JV && VV.setAttribute(xV, JV)
            }
          }(this.dom, VV)
        }
      }
      toString() {
        return this.constructor.name + (this.children.length ? `(${this.children})` : "") + (this.breakAfter ? "#" : "")
      }
      destroy() {
        this.parent = null
      }
      setDOM(VV) {
        this.dom = VV, VV.cmTile = this
      }
      get posAtStart() {
        return this.parent ? this.parent.posBefore(this) : 0
      }
      get posAtEnd() {
        return this.posAtStart + this.length
      }
      posBefore(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.posAtStart;
        for (let xV of this.children) {
          if (xV == VV) return eV;
          eV += xV.length + xV.breakAfter
        }
        throw new RangeError("Invalid child in posBefore")
      }
      posAfter(VV) {
        return this.posBefore(VV) + VV.length
      }
      covers(VV) {
        return !0
      }
      coordsIn(VV, eV) {
        return null
      }
      domPosFor(VV, eV) {
        let xV = mV(this.dom),
          JV = this.length ? VV > 0 : eV > 0;
        return new Qe(this.parent.dom, xV + (JV ? 1 : 0), 0 == VV || VV == this.length)
      }
      markDirty(VV) {
        this.flags &= -3, VV && (this.flags |= 4), this.parent && 2 & this.parent.flags && this.parent.markDirty(!1)
      }
      get overrideDOMText() {
        return null
      }
      get root() {
        for (let VV = this; VV; VV = VV.parent)
          if (VV instanceof bx) return VV;
        return null
      }
      static get(VV) {
        return VV.cmTile
      }
    }
    class rx extends vx {
      constructor(VV) {
        super(VV, 0), this._children = []
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
      append(VV) {
        this.children.push(VV), VV.parent = this
      }
      sync(VV) {
        if (2 & this.flags) return;
        super.sync(VV);
        let eV, xV = this.dom,
          JV = null,
          YV = (null === VV || void 0 === VV ? void 0 : VV.node) == xV ? VV : null,
          UV = 0;
        for (let yV of this.children) {
          if (yV.sync(VV), UV += yV.length + yV.breakAfter, eV = JV ? JV.nextSibling : xV.firstChild, YV && eV != yV.dom && (YV.written = !0), yV.dom.parentNode == xV)
            for (; eV && eV != yV.dom;) eV = kx(eV);
          else xV.insertBefore(yV.dom, eV);
          JV = yV.dom
        }
        for (eV = JV ? JV.nextSibling : xV.firstChild, YV && eV && (YV.written = !0); eV;) eV = kx(eV);
        this.length = UV
      }
    }

    function kx(VV) {
      let eV = VV.nextSibling;
      return VV.parentNode.removeChild(VV), eV
    }
    class bx extends rx {
      constructor(VV, eV) {
        super(eV), this.view = VV
      }
      owns(VV) {
        for (; VV; VV = VV.parent)
          if (VV == this) return !0;
        return !1
      }
      isBlock() {
        return !0
      }
      nearest(VV) {
        for (;;) {
          if (!VV) return null;
          let eV = vx.get(VV);
          if (eV && this.owns(eV)) return eV;
          VV = VV.parentNode
        }
      }
      blockTiles(VV) {
        for (let eV = [], xV = this, JV = 0, YV = 0;;)
          if (JV == xV.children.length) {
            if (!eV.length) return;
            xV = xV.parent, xV.breakAfter && YV++, JV = eV.pop()
          } else {
            let UV = xV.children[JV++];
            if (UV instanceof Ex) eV.push(JV), xV = UV, JV = 0;
            else {
              let eV = YV + UV.length,
                xV = VV(UV, YV);
              if (void 0 !== xV) return xV;
              YV = eV + UV.breakAfter
            }
          }
      }
      resolveBlock(VV, eV) {
        let xV, JV, YV = -1,
          UV = -1;
        if (this.blockTiles(((yV, pV) => {
            let QV = pV + yV.length;
            if (VV >= pV && VV <= QV) {
              if (yV.isWidget() && eV >= -1 && eV <= 1) {
                if (32 & yV.flags) return !0;
                16 & yV.flags && (xV = void 0)
              }(pV < VV || VV == QV && (eV < -1 ? yV.length : yV.covers(1))) && (!xV || !yV.isWidget() && xV.isWidget()) && (xV = yV, YV = VV - pV), (QV > VV || VV == pV && (eV > 1 ? yV.length : yV.covers(-1))) && (!JV || !yV.isWidget() && JV.isWidget()) && (JV = yV, UV = VV - pV)
            }
          })), !xV && !JV) throw new Error("No tile at position " + VV);
        return xV && eV < 0 || !JV ? {
          tile: xV,
          offset: YV
        } : {
          tile: JV,
          offset: UV
        }
      }
    }
    class Ex extends rx {
      constructor(VV, eV) {
        super(VV), this.wrapper = eV
      }
      isBlock() {
        return !0
      }
      covers(VV) {
        return !!this.children.length && (VV < 0 ? this.children[0].covers(-1) : this.lastChild.covers(1))
      }
      get domAttrs() {
        return this.wrapper.attributes
      }
      static of (VV, eV) {
        let xV = new Ex(eV || document.createElement(VV.tagName), VV);
        return eV || (xV.flags |= 4), xV
      }
    }
    class Bx extends rx {
      constructor(VV, eV) {
        super(VV), this.attrs = eV
      }
      isLine() {
        return !0
      }
      static start(VV, eV, xV) {
        let JV = new Bx(eV || document.createElement("div"), VV);
        return eV && xV || (JV.flags |= 4), JV
      }
      get domAttrs() {
        return this.attrs
      }
      resolveInline(VV, eV, xV) {
        let JV = null,
          YV = -1,
          UV = null,
          yV = -1;
        ! function VV(pV, QV) {
          for (let nV = 0, wV = 0; nV < pV.children.length && wV <= QV; nV++) {
            let ZV = pV.children[nV],
              vV = wV + ZV.length;
            vV >= QV && (ZV.isComposite() ? VV(ZV, QV - wV) : (!UV || UV.isHidden && (eV > 0 || xV && jx(UV, ZV))) && (vV > QV || 32 & ZV.flags) ? (UV = ZV, yV = QV - wV) : (wV < QV || 16 & ZV.flags && !ZV.isHidden) && (JV = ZV, YV = QV - wV)), wV = vV
          }
        }(this, VV);
        let pV = (eV < 0 ? JV : UV) || JV || UV;
        return pV ? {
          tile: pV,
          offset: pV == JV ? YV : yV
        } : null
      }
      coordsIn(VV, eV) {
        let xV = this.resolveInline(VV, eV, !0);
        return xV ? xV.tile.coordsIn(Math.max(0, xV.offset), eV) : function(VV) {
          let eV = VV.dom.lastChild;
          if (!eV) return VV.dom.getBoundingClientRect();
          let xV = LV(eV);
          return xV[xV.length - 1] || null
        }(this)
      }
      domIn(VV, eV) {
        let xV = this.resolveInline(VV, eV);
        if (xV) {
          let {
            tile: VV,
            offset: JV
          } = xV;
          if (this.dom.contains(VV.dom)) return VV.isText() ? new Qe(VV.dom, Math.min(VV.dom.nodeValue.length, JV)) : VV.domPosFor(JV, 16 & VV.flags ? 1 : 32 & VV.flags ? -1 : eV);
          let YV = xV.tile.parent,
            UV = !1;
          for (let eV of YV.children) {
            if (UV) return new Qe(eV.dom, 0);
            eV == xV.tile && (UV = !0)
          }
        }
        return new Qe(this.dom, 0)
      }
    }

    function jx(VV, eV) {
      let xV = VV.coordsIn(0, 1),
        JV = eV.coordsIn(0, 1);
      return xV && JV && JV.top < xV.bottom
    }
    class qx extends rx {
      constructor(VV, eV) {
        super(VV), this.mark = eV
      }
      get domAttrs() {
        return this.mark.attrs
      }
      static of (VV, eV) {
        let xV = new qx(eV || document.createElement(VV.tagName), VV);
        return eV || (xV.flags |= 4), xV
      }
    }
    class tx extends vx {
      constructor(VV, eV) {
        super(VV, eV.length), this.text = eV
      }
      sync(VV) {
        2 & this.flags || (super.sync(VV), this.dom.nodeValue != this.text && (VV && VV.node == this.dom && (VV.written = !0), this.dom.nodeValue = this.text))
      }
      isText() {
        return !0
      }
      toString() {
        return JSON.stringify(this.text)
      }
      coordsIn(VV, eV) {
        let xV = this.dom.nodeValue.length;
        VV > xV && (VV = xV);
        let JV = VV,
          YV = VV,
          UV = 0;
        0 == VV && eV < 0 || VV == xV && eV >= 0 ? PV.chrome || PV.gecko || (VV ? (JV--, UV = 1) : YV < xV && (YV++, UV = -1)) : eV < 0 ? JV-- : YV < xV && YV++;
        let yV = Je(this.dom, JV, YV).getClientRects();
        if (!yV.length) return null;
        let pV = yV[(UV ? UV < 0 : eV >= 0) ? 0 : yV.length - 1];
        return PV.safari && !UV && 0 == pV.width && (pV = Array.prototype.find.call(yV, (VV => VV.width)) || pV), UV ? sV(pV, UV < 0) : pV || null
      }
      static of (VV, eV) {
        let xV = new tx(eV || document.createTextNode(VV), VV);
        return eV || (xV.flags |= 2), xV
      }
    }
    class Fx extends vx {
      constructor(VV, eV, xV, JV) {
        super(VV, eV, JV), this.widget = xV
      }
      isWidget() {
        return !0
      }
      get isHidden() {
        return this.widget.isHidden
      }
      covers(VV) {
        return !(48 & this.flags) && (this.flags & (VV < 0 ? 64 : 128)) > 0
      }
      coordsIn(VV, eV) {
        return this.coordsInWidget(VV, eV, !1)
      }
      coordsInWidget(VV, eV, xV) {
        let JV = this.widget.coordsAt(this.dom, VV, eV);
        if (JV) return JV;
        if (xV) return sV(this.dom.getBoundingClientRect(), this.length ? 0 == VV : eV <= 0);
        {
          let eV = this.dom.getClientRects(),
            xV = null;
          if (!eV.length) return null;
          let JV = !!(16 & this.flags) || !(32 & this.flags) && VV > 0;
          for (let YV = JV ? eV.length - 1 : 0; xV = eV[YV], !(VV > 0 ? 0 == YV : YV == eV.length - 1 || xV.top < xV.bottom); YV += JV ? -1 : 1);
          return sV(xV, !JV)
        }
      }
      get overrideDOMText() {
        if (!this.length) return JV.H.empty;
        let {
          root: VV
        } = this;
        if (!VV) return JV.H.empty;
        let eV = this.posAtStart;
        return VV.view.state.doc.slice(eV, eV + this.length)
      }
      destroy() {
        super.destroy(), this.widget.destroy(this.dom)
      }
      static of (VV, eV, xV, JV, YV) {
        return YV || (YV = VV.toDOM(eV), VV.editable || (YV.contentEditable = "false")), new Fx(YV, xV, VV, JV)
      }
    }
    class Tx extends vx {
      constructor(VV) {
        let eV = document.createElement("img");
        eV.className = "cm-widgetBuffer", eV.setAttribute("aria-hidden", "true"), super(eV, 0, VV)
      }
      get isHidden() {
        return !0
      }
      get overrideDOMText() {
        return JV.H.empty
      }
      coordsIn(VV) {
        return this.dom.getBoundingClientRect()
      }
    }
    class Px {
      constructor(VV) {
        this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = VV
      }
      advance(VV, eV, xV) {
        let {
          tile: JV,
          index: YV,
          beforeBreak: UV,
          parents: yV
        } = this;
        for (; VV || eV > 0;)
          if (JV.isComposite())
            if (UV) {
              if (!VV) break;
              xV && xV.break(), VV--, UV = !1
            } else if (YV == JV.children.length) {
          if (!VV && !yV.length) break;
          xV && xV.leave(JV), UV = !!JV.breakAfter, ({
            tile: JV,
            index: YV
          } = yV.pop()), YV++
        } else {
          let pV = JV.children[YV],
            QV = pV.breakAfter;
          !(eV > 0 ? pV.length <= VV : pV.length < VV) || xV && !1 === xV.skip(pV, 0, pV.length) && pV.isComposite ? (yV.push({
            tile: JV,
            index: YV
          }), JV = pV, YV = 0, xV && pV.isComposite() && xV.enter(pV)) : (UV = !!QV, YV++, VV -= pV.length)
        } else if (YV == JV.length) UV = !!JV.breakAfter, ({
          tile: JV,
          index: YV
        } = yV.pop()), YV++;
        else {
          if (!VV) break;
          {
            let eV = Math.min(VV, JV.length - YV);
            xV && xV.skip(JV, YV, YV + eV), VV -= eV, YV += eV
          }
        }
        return this.tile = JV, this.index = YV, this.beforeBreak = UV, this
      }
      get root() {
        return this.parents.length ? this.parents[0].tile : this.tile
      }
    }
    class Ax {
      constructor(VV, eV, xV, JV) {
        this.from = VV, this.to = eV, this.wrapper = xV, this.rank = JV
      }
    }
    class Nx {
      constructor(VV, eV, xV) {
        this.cache = VV, this.root = eV, this.blockWrappers = xV, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0
      }
      addText(VV, eV, xV, JV) {
        var YV;
        this.flushBuffer();
        let UV = this.ensureMarks(eV, xV),
          yV = UV.lastChild;
        if (yV && yV.isText() && !(8 & yV.flags) && yV.length + VV.length < 512) {
          this.cache.reused.set(yV, 2), (UV.children[UV.children.length - 1] = new tx(yV.dom, yV.text + VV)).parent = UV
        } else UV.append(JV || tx.of(VV, null === (YV = this.cache.find(tx)) || void 0 === YV ? void 0 : YV.dom));
        this.pos += VV.length, this.afterWidget = null
      }
      addComposition(VV, eV) {
        let xV = this.curLine;
        xV.dom != eV.line.dom && (xV.setDOM(this.cache.reused.has(eV.line) ? gx(eV.line.dom) : eV.line.dom), this.cache.reused.set(eV.line, 2));
        let JV = xV;
        for (let yV = eV.marks.length - 1; yV >= 0; yV--) {
          let VV = eV.marks[yV],
            xV = JV.lastChild;
          if (xV instanceof qx && xV.mark.eq(VV.mark)) xV.dom != VV.dom && xV.setDOM(gx(VV.dom)), JV = xV;
          else {
            if (this.cache.reused.get(VV)) {
              let eV = vx.get(VV.dom);
              eV && eV.setDOM(gx(VV.dom))
            }
            let eV = qx.of(VV.mark, VV.dom);
            JV.append(eV), JV = eV
          }
          this.cache.reused.set(VV, 2)
        }
        let YV = vx.get(VV.text);
        YV && this.cache.reused.set(YV, 2);
        let UV = new tx(VV.text, VV.text.nodeValue);
        UV.flags |= 8, JV.append(UV)
      }
      addInlineWidget(VV, eV, xV) {
        let JV = this.afterWidget && 48 & VV.flags && (48 & this.afterWidget.flags) == (48 & VV.flags);
        JV || this.flushBuffer();
        let YV = this.ensureMarks(eV, xV);
        JV || 16 & VV.flags || YV.append(this.getBuffer(1)), YV.append(VV), this.pos += VV.length, this.afterWidget = VV
      }
      addMark(VV, eV, xV) {
        this.flushBuffer(), this.ensureMarks(eV, xV).append(VV), this.pos += VV.length, this.afterWidget = null
      }
      addBlockWidget(VV) {
        this.getBlockPos().append(VV), this.pos += VV.length, this.lastBlock = VV, this.endLine()
      }
      continueWidget(VV) {
        (this.afterWidget || this.lastBlock).length += VV, this.pos += VV
      }
      addLineStart(VV, eV) {
        var xV;
        VV || (VV = Rx);
        let JV = Bx.start(VV, eV || (null === (xV = this.cache.find(Bx)) || void 0 === xV ? void 0 : xV.dom), !!eV);
        this.getBlockPos().append(this.lastBlock = this.curLine = JV)
      }
      addLine(VV) {
        this.getBlockPos().append(VV), this.pos += VV.length, this.lastBlock = VV, this.endLine()
      }
      addBreak() {
        this.lastBlock.flags |= 1, this.endLine(), this.pos++
      }
      addLineStartIfNotCovered(VV) {
        this.blockPosCovered() || this.addLineStart(VV)
      }
      ensureLine(VV) {
        this.curLine || this.addLineStart(VV)
      }
      ensureMarks(VV, eV) {
        var xV;
        let JV = this.curLine;
        for (let YV = VV.length - 1; YV >= 0; YV--) {
          let UV, yV = VV[YV];
          if (eV > 0 && (UV = JV.lastChild) && UV instanceof qx && UV.mark.eq(yV)) JV = UV, eV--;
          else {
            let VV = qx.of(yV, null === (xV = this.cache.find(qx, (VV => VV.mark.eq(yV)))) || void 0 === xV ? void 0 : xV.dom);
            JV.append(VV), JV = VV, eV = 0
          }
        }
        return JV
      }
      endLine() {
        if (this.curLine) {
          this.flushBuffer();
          let VV = this.curLine.lastChild;
          VV && Wx(this.curLine, !1) && ("BR" == VV.dom.nodeName || !VV.isWidget() || PV.ios && Wx(this.curLine, !0)) || this.curLine.append(this.cache.findWidget(ix, 0, 32) || new Fx(ix.toDOM(), 0, ix, 32)), this.curLine = this.afterWidget = null
        }
      }
      updateBlockWrappers() {
        this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
        for (let VV = this.wrappers.length - 1; VV >= 0; VV--) this.wrappers[VV].to < this.pos && this.wrappers.splice(VV, 1);
        for (let VV = this.blockWrappers; VV.value && VV.from <= this.pos; VV.next())
          if (VV.to >= this.pos) {
            let eV = new Ax(VV.from, VV.to, VV.value, VV.rank),
              xV = this.wrappers.length;
            for (; xV > 0 && (this.wrappers[xV - 1].rank - eV.rank || this.wrappers[xV - 1].to - eV.to) < 0;) xV--;
            this.wrappers.splice(xV, 0, eV)
          } this.wrapperPos = this.pos
      }
      getBlockPos() {
        var VV;
        this.updateBlockWrappers();
        let eV = this.root;
        for (let xV of this.wrappers) {
          let JV = eV.lastChild;
          if (xV.from < this.pos && JV instanceof Ex && JV.wrapper.eq(xV.wrapper)) eV = JV;
          else {
            let JV = Ex.of(xV.wrapper, null === (VV = this.cache.find(Ex, (VV => VV.wrapper.eq(xV.wrapper)))) || void 0 === VV ? void 0 : VV.dom);
            eV.append(JV), eV = JV
          }
        }
        return eV
      }
      blockPosCovered() {
        let VV = this.lastBlock;
        return null != VV && !VV.breakAfter && (!VV.isWidget() || (160 & VV.flags) > 0)
      }
      getBuffer(VV) {
        let eV = 2 | (VV < 0 ? 16 : 32),
          xV = this.cache.find(Tx, void 0, 1);
        return xV && (xV.flags = eV), xV || new Tx(eV)
      }
      flushBuffer() {
        !this.afterWidget || 32 & this.afterWidget.flags || (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null)
      }
    }
    class Xx {
      constructor(VV) {
        this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = VV.iter()
      }
      skip(VV) {
        this.textOff + VV <= this.text.length ? this.textOff += VV : (this.skipCount += VV - (this.text.length - this.textOff), this.text = "", this.textOff = 0)
      }
      next(VV) {
        if (this.textOff == this.text.length) {
          let {
            value: eV,
            lineBreak: xV,
            done: JV
          } = this.cursor.next(this.skipCount);
          if (this.skipCount = 0, JV) throw new Error("Ran out of text content when drawing inline views");
          this.text = eV;
          let YV = this.textOff = Math.min(VV, eV.length);
          return xV ? null : eV.slice(0, YV)
        }
        let eV = Math.min(this.text.length, this.textOff + VV),
          xV = this.text.slice(this.textOff, eV);
        return this.textOff = eV, xV
      }
    }
    const Mx = [Fx, Bx, tx, qx, Tx, Ex, bx];
    for (let Wy = 0; Wy < Mx.length; Wy++) Mx[Wy].bucket = Wy;
    class zx {
      constructor(VV) {
        this.view = VV, this.buckets = Mx.map((() => [])), this.index = Mx.map((() => 0)), this.reused = new Map
      }
      add(VV) {
        let eV = VV.constructor.bucket,
          xV = this.buckets[eV];
        xV.length < 6 ? xV.push(VV) : xV[this.index[eV] = (this.index[eV] + 1) % 6] = VV
      }
      find(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          JV = VV.bucket,
          YV = this.buckets[JV],
          UV = this.index[JV];
        for (let yV = YV.length - 1; yV >= 0; yV--) {
          let VV = (yV + UV) % YV.length,
            pV = YV[VV];
          if ((!eV || eV(pV)) && !this.reused.has(pV)) return YV.splice(VV, 1), VV < UV && this.index[JV]--, this.reused.set(pV, xV), pV
        }
        return null
      }
      findWidget(VV, eV, xV) {
        let JV = this.buckets[0];
        if (JV.length)
          for (let YV = 0, UV = 0;; YV++) {
            if (YV == JV.length) {
              if (UV) return null;
              UV = 1, YV = 0
            }
            let yV = JV[YV];
            if (!this.reused.has(yV) && (0 == UV ? yV.widget.compare(VV) : yV.widget.constructor == VV.constructor && VV.updateDOM(yV.dom, this.view, yV.widget))) return JV.splice(YV, 1), YV < this.index[0] && this.index[0]--, yV.widget == VV && yV.length == eV && (497 & yV.flags) == xV ? (this.reused.set(yV, 1), yV) : (this.reused.set(yV, 2), new Fx(yV.dom, eV, VV, -498 & yV.flags | xV))
          }
      }
      reuse(VV) {
        return this.reused.set(VV, 1), VV
      }
      maybeReuse(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        if (!this.reused.has(VV)) return this.reused.set(VV, eV), VV.dom
      }
      clear() {
        for (let VV = 0; VV < this.buckets.length; VV++) this.buckets[VV].length = this.index[VV] = 0
      }
    }
    class Gx {
      constructor(VV, eV, xV, YV, UV) {
        this.view = VV, this.JU = YV, this.disallowBlockEffectsFor = UV, this.openWidget = !1, this.openMarks = 0, this.cache = new zx(VV), this.text = new Xx(VV.state.doc), this.builder = new Nx(this.cache, new bx(VV, VV.contentDOM), JV.x.iter(xV)), this.cache.reused.set(eV, 2), this.old = new Px(eV), this.reuseWalker = {
          skip: (VV, eV, xV) => {
            if (this.cache.add(VV), VV.isComposite()) return !1
          },
          enter: VV => this.cache.add(VV),
          leave: () => {},
          break: () => {}
        }
      }
      run(VV, eV) {
        let xV = eV && this.getCompositionContext(eV.text);
        for (let JV = 0, YV = 0, UV = 0;;) {
          let yV = UV < VV.length ? VV[UV++] : null,
            pV = yV ? yV.fromA : this.old.root.length;
          if (pV > JV) {
            let VV = pV - JV;
            this.preserve(VV, !UV, !yV), JV = pV, YV += VV
          }
          if (!yV) break;
          eV && yV.fromA <= eV.range.fromA && yV.toA >= eV.range.toA ? (this.forward(yV.fromA, eV.range.fromA, eV.range.fromA < eV.range.toA ? 1 : -1), this.emit(YV, eV.range.fromB), this.cache.clear(), this.builder.addComposition(eV, xV), this.text.skip(eV.range.toB - eV.range.fromB), this.forward(eV.range.fromA, yV.toA), this.emit(eV.range.toB, yV.toB)) : (this.forward(yV.fromA, yV.toA), this.emit(YV, yV.toB)), YV = yV.toB, JV = yV.toA
        }
        return this.builder.curLine && this.builder.endLine(), this.builder.root
      }
      preserve(VV, eV, xV) {
        let JV = function(VV) {
            let eV = [];
            for (let xV = VV.parents.length; xV > 1; xV--) {
              let JV = xV == VV.parents.length ? VV.tile : VV.parents[xV].tile;
              JV instanceof qx && eV.push(JV.mark)
            }
            return eV
          }(this.old),
          YV = this.openMarks;
        this.old.advance(VV, xV ? 1 : -1, {
          skip: (VV, eV, xV) => {
            if (VV.isWidget())
              if (this.openWidget) this.builder.continueWidget(xV - eV);
              else {
                let UV = xV > 0 || eV < VV.length ? Fx.of(VV.widget, this.view, xV - eV, 496 & VV.flags, this.cache.maybeReuse(VV)) : this.cache.reuse(VV);
                256 & UV.flags ? (UV.flags &= -2, this.builder.addBlockWidget(UV)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(UV, JV, YV), YV = JV.length)
              }
            else if (VV.isText()) this.builder.ensureLine(null), eV || xV != VV.length || this.cache.reused.has(VV) ? (this.cache.add(VV), this.builder.addText(VV.text.slice(eV, xV), JV, YV)) : this.builder.addText(VV.text, JV, YV, this.cache.reuse(VV)), YV = JV.length;
            else if (VV.isLine()) VV.flags &= -2, this.cache.reused.set(VV, 1), this.builder.addLine(VV);
            else if (VV instanceof Tx) this.cache.add(VV);
            else {
              if (!(VV instanceof qx)) return !1;
              this.builder.ensureLine(null), this.builder.addMark(VV, JV, YV), this.cache.reused.set(VV, 1), YV = JV.length
            }
            this.openWidget = !1
          },
          enter: VV => {
            VV.isLine() ? this.builder.addLineStart(VV.attrs, this.cache.maybeReuse(VV)) : (this.cache.add(VV), VV instanceof qx && JV.unshift(VV.mark)), this.openWidget = !1
          },
          leave: VV => {
            VV.isLine() ? JV.length && (JV.length = YV = 0) : VV instanceof qx && (JV.shift(), YV = Math.min(YV, JV.length))
          },
          break: () => {
            this.builder.addBreak(), this.openWidget = !1
          }
        }), this.text.skip(VV)
      }
      emit(VV, eV) {
        let xV = null,
          YV = this.builder,
          UV = 0,
          yV = JV.x.spans(this.JU, VV, eV, {
            point: (VV, eV, JV, yV, pV, QV) => {
              if (JV instanceof iV) {
                if (this.disallowBlockEffectsFor[QV]) {
                  if (JV.block) throw new RangeError("Block decorations may not be specified via plugins");
                  if (eV > this.view.state.doc.lineAt(VV).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins")
                }
                if (UV = yV.length, pV > yV.length) YV.continueWidget(eV - VV);
                else {
                  let UV = JV.widget || (JV.block ? Dx.block : Dx.inline),
                    QV = function(VV) {
                      let eV = VV.isReplace ? (VV.startSide < 0 ? 64 : 0) | (VV.endSide > 0 ? 128 : 0) : VV.startSide > 0 ? 32 : 16;
                      VV.block && (eV |= 256);
                      return eV
                    }(JV),
                    nV = this.cache.findWidget(UV, eV - VV, QV) || Fx.of(UV, this.view, eV - VV, QV);
                  JV.block ? (JV.startSide > 0 && YV.addLineStartIfNotCovered(xV), YV.addBlockWidget(nV)) : (YV.ensureLine(xV), YV.addInlineWidget(nV, yV, pV))
                }
                xV = null
              } else xV = function(VV, eV) {
                let xV = eV.spec.attributes,
                  JV = eV.spec.class;
                if (!xV && !JV) return VV;
                VV || (VV = {
                  class: "cm-line"
                });
                xV && AV(xV, VV);
                JV && (VV.class += " " + JV);
                return VV
              }(xV, JV);
              eV > VV && this.text.skip(eV - VV)
            },
            span: (VV, eV, JV, UV) => {
              for (let yV = VV; yV < eV;) {
                let pV = this.text.next(Math.min(512, eV - yV));
                null == pV ? (YV.addLineStartIfNotCovered(xV), YV.addBreak(), yV++) : (YV.ensureLine(xV), YV.addText(pV, JV, yV == VV ? UV : JV.length), yV += pV.length), xV = null
              }
            }
          });
        YV.addLineStartIfNotCovered(xV), this.openWidget = yV > UV, this.openMarks = yV
      }
      forward(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        eV - VV <= 10 ? this.old.advance(eV - VV, xV, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(eV - VV - 10, -1), this.old.advance(5, xV, this.reuseWalker))
      }
      getCompositionContext(VV) {
        let eV = [],
          xV = null;
        for (let JV = VV.parentNode;; JV = JV.parentNode) {
          let VV = vx.get(JV);
          if (JV == this.view.contentDOM) break;
          VV instanceof qx ? eV.push(VV) : (null === VV || void 0 === VV ? void 0 : VV.isLine()) ? xV = VV : VV instanceof Ex || ("DIV" != JV.nodeName || xV || JV == this.view.contentDOM ? xV || eV.push(qx.of(new gV({
            tagName: JV.nodeName.toLowerCase(),
            attributes: zV(JV)
          }), JV)) : xV = new Bx(JV, Rx))
        }
        return {
          line: xV,
          marks: eV
        }
      }
    }

    function Wx(VV, eV) {
      let xV = VV => {
        for (let JV of VV.children)
          if ((eV ? JV.isText() : JV.length) || xV(JV)) return !0;
        return !1
      };
      return xV(VV)
    }
    const Rx = {
      class: "cm-line"
    };

    function gx(VV) {
      let eV = vx.get(VV);
      return eV && eV.setDOM(VV.cloneNode()), VV
    }
    class Dx extends GV {
      constructor(VV) {
        super(), this.tag = VV
      }
      eq(VV) {
        return VV.tag == this.tag
      }
      toDOM() {
        return document.createElement(this.tag)
      }
      updateDOM(VV) {
        return VV.nodeName.toLowerCase() == this.tag
      }
      get isHidden() {
        return !0
      }
    }
    Dx.inline = new Dx("span"), Dx.block = new Dx("div");
    const ix = new class extends GV {
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
    class Cx {
      constructor(VV) {
        this.view = VV, this.JU = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = RV.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new bx(VV, VV.contentDOM), this.updateInner([new nx(0, 0, 0, VV.state.doc.length)], null)
      }
      update(VV) {
        var eV;
        let xV = VV.changedRanges;
        this.minWidth > 0 && xV.length && (xV.every((VV => {
          let {
            fromA: eV,
            toA: xV
          } = VV;
          return xV < this.minWidthFrom || eV > this.minWidthTo
        })) ? (this.minWidthFrom = VV.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = VV.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(VV);
        let YV = -1;
        this.view.inputState.composing >= 0 && !this.view.observer.editContext && ((null === (eV = this.domChanged) || void 0 === eV ? void 0 : eV.newSel) ? YV = this.domChanged.newSel.head : function(VV, eV) {
          let xV = !1;
          eV && VV.iterChangedRanges(((VV, JV) => {
            VV < eV.to && JV > eV.from && (xV = !0)
          }));
          return xV
        }(VV.changes, this.hasComposition) || VV.selectionSet || (YV = VV.state.selection.main.head));
        let UV = YV > -1 ? function(VV, eV, xV) {
          let JV = ox(VV, xV);
          if (!JV) return null;
          let {
            node: YV,
            from: UV,
            to: yV
          } = JV, pV = YV.nodeValue;
          if (/[\n\r]/.test(pV)) return null;
          if (VV.state.doc.sliceString(JV.from, JV.to) != pV) return null;
          let QV = eV.invertedDesc;
          return {
            range: new nx(QV.mapPos(UV), QV.mapPos(yV), UV, yV),
            text: YV
          }
        }(this.view, VV.changes, YV) : null;
        if (this.domChanged = null, this.hasComposition) {
          let {
            from: eV,
            to: JV
          } = this.hasComposition;
          xV = new nx(eV, JV, VV.changes.mapPos(eV, -1), VV.changes.mapPos(JV, 1)).addToSet(xV.slice())
        }
        this.hasComposition = UV ? {
          from: UV.range.fromB,
          to: UV.range.toB
        } : null, (PV.ie || PV.chrome) && !UV && VV && VV.state.doc.lines != VV.startState.doc.lines && (this.forceSelection = !0);
        let yV = this.JU,
          pV = this.blockWrappers;
        this.updateDeco();
        let QV = function(VV, eV, xV) {
          let YV = new cx;
          return JV.x.compare(VV, eV, xV, YV), YV.changes
        }(yV, this.JU, VV.changes);
        QV.length && (xV = nx.extendWithRanges(xV, QV));
        let nV = function(VV, eV, xV) {
          let YV = new hx;
          return JV.x.compare(VV, eV, xV, YV), YV.changes
        }(pV, this.blockWrappers, VV.changes);
        return nV.length && (xV = nx.extendWithRanges(xV, nV)), UV && !xV.some((VV => VV.fromA <= UV.range.fromA && VV.toA >= UV.range.toA)) && (xV = UV.range.addToSet(xV.slice())), !(2 & this.tile.flags && 0 == xV.length) && (this.updateInner(xV, UV), VV.transactions.length && (this.lastUpdate = Date.now()), !0)
      }
      updateInner(VV, eV) {
        this.view.viewState.mustMeasureContent = !0;
        let {
          observer: xV
        } = this.view;
        xV.ignore((() => {
          if (eV || VV.length) {
            let xV = this.tile,
              JV = new Gx(this.view, xV, this.blockWrappers, this.JU, this.dynamicDecorationMap);
            eV && vx.get(eV.text) && JV.cache.reused.set(vx.get(eV.text), 2), this.tile = JV.run(VV, eV), ax(xV, JV.cache.reused)
          }
          this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
          let JV = PV.chrome || PV.ios ? {
            node: xV.selectionRange.focusNode,
            written: !1
          } : void 0;
          this.tile.sync(JV), !JV || !JV.written && xV.selectionRange.focusNode == JV.node && this.tile.dom.contains(JV.node) || (this.forceSelection = !0), this.tile.dom.style.height = ""
        }));
        let JV = [];
        if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
          for (let YV of this.tile.children) YV.isWidget() && YV.widget instanceof lx && JV.push(YV.dom);
        xV.updateGaps(JV)
      }
      updateEditContextFormatting(VV) {
        this.editContextFormatting = this.editContextFormatting.map(VV.changes);
        for (let eV of VV.transactions)
          for (let VV of eV.effects) VV.is(me) && (this.editContextFormatting = VV.value)
      }
      updateSelection() {
        let VV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this.view.observer.selectionRange.focusNode || this.view.observer.readSelectionRange();
        let {
          dom: eV
        } = this.tile, xV = this.view.root.activeElement, JV = xV == eV, YV = !JV && !(this.view.state.facet(He) || eV.tabIndex > -1) && lV(eV, this.view.observer.selectionRange) && !(xV && eV.contains(xV));
        if (!(JV || VV || YV)) return;
        let UV = this.forceSelection;
        this.forceSelection = !1;
        let yV, pV, QV = this.view.state.selection.main;
        if (QV.empty ? pV = yV = this.inlineDOMNearPos(QV.anchor, QV.assoc || 1) : (pV = this.inlineDOMNearPos(QV.head, QV.head == QV.from ? 1 : -1), yV = this.inlineDOMNearPos(QV.anchor, QV.anchor == QV.from ? 1 : -1)), PV.gecko && QV.empty && !this.hasComposition && (1 == (nV = yV).node.nodeType && nV.node.firstChild && (0 == nV.offset || "false" == nV.node.childNodes[nV.offset - 1].contentEditable) && (nV.offset == nV.node.childNodes.length || "false" == nV.node.childNodes[nV.offset].contentEditable))) {
          let VV = document.createTextNode("");
          this.view.observer.ignore((() => yV.node.insertBefore(VV, yV.node.childNodes[yV.offset] || null))), yV = pV = new Qe(VV, 0), UV = !0
        }
        var nV;
        let wV = this.view.observer.selectionRange;
        !UV && wV.focusNode && (fV(yV.node, yV.offset, wV.anchorNode, wV.anchorOffset) && fV(pV.node, pV.offset, wV.focusNode, wV.focusOffset) || this.suppressWidgetCursorChange(wV, QV)) || (this.view.observer.ignore((() => {
          PV.android && PV.chrome && eV.contains(wV.focusNode) && function(VV, eV) {
            for (let xV = VV; xV && xV != eV; xV = xV.assignedSlot || xV.parentNode)
              if (1 == xV.nodeType && "false" == xV.contentEditable) return !0;
            return !1
          }(wV.focusNode, eV) && (eV.blur(), eV.focus({
            preventScroll: !0
          }));
          let VV = cV(this.view.root);
          if (VV)
            if (QV.empty) {
              if (PV.gecko) {
                let VV = (JV = yV.node, UV = yV.offset, 1 != JV.nodeType ? 0 : (UV && "false" == JV.childNodes[UV - 1].contentEditable ? 1 : 0) | (UV < JV.childNodes.length && "false" == JV.childNodes[UV].contentEditable ? 2 : 0));
                if (VV && 3 != VV) {
                  let eV = (1 == VV ? ye : pe)(yV.node, yV.offset);
                  eV && (yV = new Qe(eV.node, eV.offset))
                }
              }
              VV.collapse(yV.node, yV.offset), null != QV.bidiLevel && void 0 !== VV.caretBidiLevel && (VV.caretBidiLevel = QV.bidiLevel)
            } else if (VV.extend) {
            VV.collapse(yV.node, yV.offset);
            try {
              VV.extend(pV.node, pV.offset)
            } catch (nV) {}
          } else {
            let eV = document.createRange();
            QV.anchor > QV.head && ([yV, pV] = [pV, yV]), eV.setEnd(pV.node, pV.offset), eV.setStart(yV.node, yV.offset), VV.removeAllRanges(), VV.addRange(eV)
          } else;
          var JV, UV;
          YV && this.view.root.activeElement == eV && (eV.blur(), xV && xV.focus())
        })), this.view.observer.setSelectionRange(yV, pV)), this.impreciseAnchor = yV.precise ? null : new Qe(wV.anchorNode, wV.anchorOffset), this.impreciseHead = pV.precise ? null : new Qe(wV.focusNode, wV.focusOffset)
      }
      suppressWidgetCursorChange(VV, eV) {
        return this.hasComposition && eV.empty && fV(VV.focusNode, VV.focusOffset, VV.anchorNode, VV.anchorOffset) && this.posFromDOM(VV.focusNode, VV.focusOffset) == eV.head
      }
      enforceCursorAssoc() {
        if (this.hasComposition) return;
        let {
          view: VV
        } = this, eV = VV.state.selection.main, xV = cV(VV.root), {
          anchorNode: JV,
          anchorOffset: YV
        } = VV.observer.selectionRange;
        if (!xV || !eV.empty || !eV.assoc || !xV.modify) return;
        let UV = this.lineAt(eV.head, eV.assoc);
        if (!UV) return;
        let yV = UV.posAtStart;
        if (eV.head == yV || eV.head == yV + UV.length) return;
        let pV = this.coordsAt(eV.head, -1),
          QV = this.coordsAt(eV.head, 1);
        if (!pV || !QV || pV.bottom > QV.top) return;
        let nV = this.domAtPos(eV.head + eV.assoc, eV.assoc);
        xV.collapse(nV.node, nV.offset), xV.modify("move", eV.assoc < 0 ? "forward" : "backward", "lineboundary"), VV.observer.readSelectionRange();
        let wV = VV.observer.selectionRange;
        VV.docView.posFromDOM(wV.anchorNode, wV.anchorOffset) != eV.from && xV.collapse(JV, YV)
      }
      posFromDOM(VV, eV) {
        let xV = this.tile.nearest(VV);
        if (!xV) return 2 & this.tile.dom.compareDocumentPosition(VV) ? 0 : this.view.state.doc.length;
        let JV = xV.posAtStart;
        if (!xV.isComposite()) return xV.isText() ? VV == xV.dom ? JV + eV : JV + (eV ? xV.length : 0) : JV;
        {
          let YV;
          if (VV == xV.dom) YV = xV.dom.childNodes[eV];
          else {
            let JV = 0 == uV(VV) ? 0 : 0 == eV ? -1 : 1;
            for (;;) {
              let eV = VV.parentNode;
              if (eV == xV.dom) break;
              0 == JV && eV.firstChild != eV.lastChild && (JV = VV == eV.firstChild ? -1 : 1), VV = eV
            }
            YV = JV < 0 ? VV : VV.nextSibling
          }
          if (YV == xV.dom.firstChild) return JV;
          for (; YV && !vx.get(YV);) YV = YV.nextSibling;
          if (!YV) return JV + xV.length;
          for (let VV = 0, eV = JV;; VV++) {
            let JV = xV.children[VV];
            if (JV.dom == YV) return eV;
            eV += JV.length + JV.breakAfter
          }
        }
      }
      domAtPos(VV, eV) {
        let {
          tile: xV,
          offset: JV
        } = this.tile.resolveBlock(VV, eV);
        return xV.isWidget() ? xV.domPosFor(VV, eV) : xV.domIn(JV, eV)
      }
      inlineDOMNearPos(VV, eV) {
        let xV, JV, YV = -1,
          UV = !1,
          yV = -1,
          pV = !1;
        return this.tile.blockTiles(((eV, QV) => {
          if (eV.isWidget()) {
            if (32 & eV.flags && QV >= VV) return !0;
            16 & eV.flags && (UV = !0)
          } else {
            let nV = QV + eV.length;
            if (QV <= VV && (xV = eV, YV = VV - QV, UV = nV < VV), nV >= VV && !JV && (JV = eV, yV = VV - QV, pV = QV > VV), QV > VV && JV) return !0
          }
        })), xV || JV ? (UV && JV ? xV = null : pV && xV && (JV = null), xV && eV < 0 || !JV ? xV.domIn(YV, eV) : JV.domIn(yV, eV)) : this.domAtPos(VV, eV)
      }
      coordsAt(VV, eV) {
        let {
          tile: xV,
          offset: JV
        } = this.tile.resolveBlock(VV, eV);
        return xV.isWidget() ? xV.widget instanceof lx ? null : xV.coordsInWidget(JV, eV, !0) : xV.coordsIn(JV, eV)
      }
      lineAt(VV, eV) {
        let {
          tile: xV
        } = this.tile.resolveBlock(VV, eV);
        return xV.isLine() ? xV : null
      }
      coordsForChar(VV) {
        let {
          tile: eV,
          offset: xV
        } = this.tile.resolveBlock(VV, 1);
        if (!eV.isLine()) return null;
        return function VV(eV, xV) {
          if (eV.isComposite())
            for (let JV of eV.children) {
              if (JV.length >= xV) {
                let eV = VV(JV, xV);
                if (eV) return eV
              }
              if ((xV -= JV.length) < 0) break
            } else if (eV.isText() && xV < eV.length) {
              let VV = (0, JV.Z)(eV.text, xV);
              if (VV == xV) return null;
              let YV = Je(eV.dom, xV, VV).getClientRects();
              for (let eV = 0; eV < YV.length; eV++) {
                let VV = YV[eV];
                if (eV == YV.length - 1 || VV.top < VV.bottom && VV.left < VV.right) return VV
              }
            } return null
        }(eV, xV)
      }
      measureVisibleLineHeights(VV) {
        let eV = [],
          {
            from: xV,
            to: JV
          } = VV,
          YV = this.view.contentDOM.clientWidth,
          UV = YV > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
          yV = -1,
          pV = this.view.textDirection == ne.LTR,
          QV = 0,
          nV = (VV, wV, ZV) => {
            for (let vV = 0; vV < VV.children.length && !(wV > JV); vV++) {
              let JV = VV.children[vV],
                rV = wV + JV.length,
                kV = JV.dom.getBoundingClientRect(),
                {
                  height: bV
                } = kV;
              if (ZV && !vV && (QV += kV.top - ZV.top), JV instanceof Ex) rV > xV && nV(JV, wV, kV);
              else if (wV >= xV && (QV > 0 && eV.push(-QV), eV.push(bV + QV), QV = 0, UV)) {
                let VV = JV.dom.lastChild,
                  eV = VV ? LV(VV) : [];
                if (eV.length) {
                  let VV = eV[eV.length - 1],
                    xV = pV ? VV.right - kV.left : kV.right - VV.left;
                  xV > yV && (yV = xV, this.minWidth = YV, this.minWidthFrom = wV, this.minWidthTo = rV)
                }
              }
              ZV && vV == VV.children.length - 1 && (QV += ZV.bottom - kV.bottom), wV = rV + JV.breakAfter
            }
          };
        return nV(this.tile, 0, null), eV
      }
      textDirectionAt(VV) {
        let {
          tile: eV
        } = this.tile.resolveBlock(VV, 1);
        return "rtl" == getComputedStyle(eV.dom).direction ? ne.RTL : ne.LTR
      }
      measureTextSize() {
        let VV = this.tile.blockTiles((VV => {
          if (VV.isLine() && VV.children.length && VV.length <= 20) {
            let eV, xV = 0;
            for (let JV of VV.children) {
              if (!JV.isText() || /[^ -~]/.test(JV.text)) return;
              let VV = LV(JV.dom);
              if (1 != VV.length) return;
              xV += VV[0].width, eV = VV[0].height
            }
            if (xV) return {
              lineHeight: VV.dom.getBoundingClientRect().height,
              charWidth: xV / VV.length,
              textHeight: eV
            }
          }
        }));
        if (VV) return VV;
        let eV, xV, JV, YV = document.createElement("div");
        return YV.className = "cm-line", YV.style.width = "99999px", YV.style.position = "absolute", YV.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore((() => {
          this.tile.dom.appendChild(YV);
          let VV = LV(YV.firstChild)[0];
          eV = YV.getBoundingClientRect().height, xV = VV && VV.width ? VV.width / 27 : 7, JV = VV && VV.height ? VV.height : eV, YV.remove()
        })), {
          lineHeight: eV,
          charWidth: xV,
          textHeight: JV
        }
      }
      computeBlockGapDeco() {
        let VV = [],
          eV = this.view.viewState;
        for (let xV = 0, JV = 0;; JV++) {
          let YV = JV == eV.viewports.length ? null : eV.viewports[JV],
            UV = YV ? YV.from - 1 : this.view.state.doc.length;
          if (UV > xV) {
            let JV = (eV.lineBlockAt(UV).bottom - eV.lineBlockAt(xV).top) / this.view.scaleY;
            VV.push(RV.replace({
              widget: new lx(JV),
              block: !0,
              inclusive: !0,
              isBlockGap: !0
            }).range(xV, UV))
          }
          if (!YV) break;
          xV = YV.to + 1
        }
        return RV.set(VV)
      }
      updateDeco() {
        let VV = 1,
          eV = this.view.state.facet(Vx).map((eV => (this.dynamicDecorationMap[VV++] = "function" == typeof eV) ? eV(this.view) : eV)),
          xV = !1,
          YV = this.view.state.facet(xx).map(((VV, eV) => {
            let JV = "function" == typeof VV;
            return JV && (xV = !0), JV ? VV(this.view) : VV
          }));
        for (YV.length && (this.dynamicDecorationMap[VV++] = xV, eV.push(JV.x.join(YV))), this.JU = [this.editContextFormatting, ...eV, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; VV < this.JU.length;) this.dynamicDecorationMap[VV++] = !1;
        this.blockWrappers = this.view.state.facet(ex).map((VV => "function" == typeof VV ? VV(this.view) : VV))
      }
      scrollIntoView(VV) {
        var eV;
        if (VV.isSnapshot) {
          let eV = this.view.viewState.lineBlockAt(VV.range.head);
          return this.view.scrollDOM.scrollTop = eV.top - VV.yMargin, void(this.view.scrollDOM.scrollLeft = VV.xMargin)
        }
        for (let wV of this.view.state.facet(le)) try {
          if (wV(this.view, VV.range, VV)) return !0
        } catch (nV) {
          Ke(this.view.state, nV, "scroll handler")
        }
        let xV, {
            range: JV
          } = VV,
          YV = this.coordsAt(JV.head, null !== (eV = JV.assoc) && void 0 !== eV ? eV : JV.empty ? 0 : JV.head > JV.anchor ? -1 : 1);
        if (!YV) return;
        !JV.empty && (xV = this.coordsAt(JV.anchor, JV.anchor > JV.head ? -1 : 1)) && (YV = {
          left: Math.min(YV.left, xV.left),
          top: Math.min(YV.top, xV.top),
          right: Math.max(YV.right, xV.right),
          bottom: Math.max(YV.bottom, xV.bottom)
        });
        let UV = px(this.view),
          yV = {
            left: YV.left - UV.left,
            top: YV.top - UV.top,
            right: YV.right + UV.right,
            bottom: YV.bottom + UV.bottom
          },
          {
            offsetWidth: pV,
            offsetHeight: QV
          } = this.view.scrollDOM;
        if (function(VV, eV, xV, JV, YV, UV, yV, pV) {
            let QV = VV.ownerDocument,
              nV = QV.defaultView || window;
            for (let wV = VV, ZV = !1; wV && !ZV;)
              if (1 == wV.nodeType) {
                let VV, vV = wV == QV.body,
                  rV = 1,
                  kV = 1;
                if (vV) VV = SV(nV);
                else {
                  if (/^(fixed|sticky)$/.test(getComputedStyle(wV).position) && (ZV = !0), wV.scrollHeight <= wV.clientHeight && wV.scrollWidth <= wV.clientWidth) {
                    wV = wV.assignedSlot || wV.parentNode;
                    continue
                  }
                  let eV = wV.getBoundingClientRect();
                  ({
                    scaleX: rV,
                    scaleY: kV
                  } = IV(wV, eV)), VV = {
                    left: eV.left,
                    right: eV.left + wV.clientWidth * rV,
                    top: eV.top,
                    bottom: eV.top + wV.clientHeight * kV
                  }
                }
                let bV = 0,
                  EV = 0;
                if ("nearest" == YV) eV.top < VV.top + yV ? (EV = eV.top - (VV.top + yV), xV > 0 && eV.bottom > VV.bottom + EV && (EV = eV.bottom - VV.bottom + yV)) : eV.bottom > VV.bottom - yV && (EV = eV.bottom - VV.bottom + yV, xV < 0 && eV.top - EV < VV.top && (EV = eV.top - (VV.top + yV)));
                else {
                  let JV = eV.bottom - eV.top,
                    UV = VV.bottom - VV.top;
                  EV = ("center" == YV && JV <= UV ? eV.top + JV / 2 - UV / 2 : "start" == YV || "center" == YV && xV < 0 ? eV.top - yV : eV.bottom - UV + yV) - VV.top
                }
                if ("nearest" == JV ? eV.left < VV.left + UV ? (bV = eV.left - (VV.left + UV), xV > 0 && eV.right > VV.right + bV && (bV = eV.right - VV.right + UV)) : eV.right > VV.right - UV && (bV = eV.right - VV.right + UV, xV < 0 && eV.left < VV.left + bV && (bV = eV.left - (VV.left + UV))) : bV = ("center" == JV ? eV.left + (eV.right - eV.left) / 2 - (VV.right - VV.left) / 2 : "start" == JV == pV ? eV.left - UV : eV.right - (VV.right - VV.left) + UV) - VV.left, bV || EV)
                  if (vV) nV.scrollBy(bV, EV);
                  else {
                    let VV = 0,
                      xV = 0;
                    if (EV) {
                      let VV = wV.scrollTop;
                      wV.scrollTop += EV / kV, xV = (wV.scrollTop - VV) * kV
                    }
                    if (bV) {
                      let eV = wV.scrollLeft;
                      wV.scrollLeft += bV / rV, VV = (wV.scrollLeft - eV) * rV
                    }
                    eV = {
                      left: eV.left - VV,
                      top: eV.top - xV,
                      right: eV.right - VV,
                      bottom: eV.bottom - xV
                    }, VV && Math.abs(VV - bV) < 1 && (JV = "nearest"), xV && Math.abs(xV - EV) < 1 && (YV = "nearest")
                  } if (vV) break;
                (eV.top < VV.top || eV.bottom > VV.bottom || eV.left < VV.left || eV.right > VV.right) && (eV = {
                  left: Math.max(eV.left, VV.left),
                  right: Math.min(eV.right, VV.right),
                  top: Math.max(eV.top, VV.top),
                  bottom: Math.min(eV.bottom, VV.bottom)
                }), wV = wV.assignedSlot || wV.parentNode
              } else {
                if (11 != wV.nodeType) break;
                wV = wV.host
              }
          }(this.view.scrollDOM, yV, JV.head < JV.anchor ? -1 : 1, VV.x, VV.y, Math.max(Math.min(VV.xMargin, pV), -pV), Math.max(Math.min(VV.yMargin, QV), -QV), this.view.textDirection == ne.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (YV.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || YV.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
          let VV = this.view.docView.lineAt(JV.head, 1);
          VV && VV.dom.scrollIntoView({
            block: "nearest"
          })
        }
      }
      lineHasWidget(VV) {
        let eV = VV => VV.isWidget() || VV.children.some(eV);
        return eV(this.tile.resolveBlock(VV, 1).tile)
      }
      destroy() {
        ax(this.tile)
      }
    }

    function ax(VV, eV) {
      let xV = null === eV || void 0 === eV ? void 0 : eV.get(VV);
      if (1 != xV) {
        null == xV && VV.destroy();
        for (let xV of VV.children) ax(xV, eV)
      }
    }

    function ox(VV, eV) {
      let xV = VV.observer.selectionRange;
      if (!xV.focusNode) return null;
      let JV = ye(xV.focusNode, xV.focusOffset),
        YV = pe(xV.focusNode, xV.focusOffset),
        UV = JV || YV;
      if (YV && JV && YV.node != JV.node) {
        let eV = vx.get(YV.node);
        if (!eV || eV.isText() && eV.text != YV.node.nodeValue) UV = YV;
        else if (VV.docView.lastCompositionAfterCursor) {
          let VV = vx.get(JV.node);
          !VV || VV.isText() && VV.text != JV.node.nodeValue || (UV = YV)
        }
      }
      if (VV.docView.lastCompositionAfterCursor = UV != JV, !UV) return null;
      let yV = eV - UV.offset;
      return {
        from: yV,
        to: yV + UV.node.nodeValue.length,
        node: UV.node
      }
    }
    let cx = class {
      constructor() {
        this.changes = []
      }
      compareRange(VV, eV) {
        aV(VV, eV, this.changes)
      }
      comparePoint(VV, eV) {
        aV(VV, eV, this.changes)
      }
      boundChange(VV) {
        aV(VV, VV, this.changes)
      }
    };
    class hx {
      constructor() {
        this.changes = []
      }
      compareRange(VV, eV) {
        aV(VV, eV, this.changes)
      }
      comparePoint() {}
      boundChange(VV) {
        aV(VV, VV, this.changes)
      }
    }
    class lx extends GV {
      constructor(VV) {
        super(), this.height = VV
      }
      toDOM() {
        let VV = document.createElement("div");
        return VV.className = "cm-gap", this.updateDOM(VV), VV
      }
      eq(VV) {
        return VV.height == this.height
      }
      updateDOM(VV) {
        return VV.style.height = this.height + "px", !0
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

    function Lx(VV, eV, xV) {
      let JV = VV.lineBlockAt(eV);
      if (Array.isArray(JV.type)) {
        let VV;
        for (let YV of JV.type) {
          if (YV.from > eV) break;
          if (!(YV.to < eV)) {
            if (YV.from < eV && YV.to > eV) return YV;
            VV && (YV.type != WV.Text || VV.type == YV.type && !(xV < 0 ? YV.from < eV : YV.to > eV)) || (VV = YV)
          }
        }
        return VV || JV
      }
      return JV
    }

    function fx(VV, eV, xV, JV) {
      let YV = VV.state.doc.lineAt(eV.head),
        UV = VV.bidiSpans(YV),
        yV = VV.textDirectionAt(YV.from);
      for (let pV = eV, QV = null;;) {
        let eV = Me(YV, UV, yV, pV, xV),
          nV = Xe;
        if (!eV) {
          if (YV.number == (xV ? VV.state.doc.lines : 1)) return pV;
          nV = "\n", YV = VV.state.doc.line(YV.number + (xV ? 1 : -1)), UV = VV.bidiSpans(YV), eV = VV.visualLineSide(YV, !xV)
        }
        if (QV) {
          if (!QV(nV)) return pV
        } else {
          if (!JV) return eV;
          QV = JV(nV)
        }
        pV = eV
      }
    }

    function mx(VV, eV, xV) {
      for (;;) {
        let JV = 0;
        for (let YV of VV) YV.between(eV - 1, eV + 1, ((VV, YV, UV) => {
          if (eV > VV && eV < YV) {
            let UV = JV || xV || (eV - VV < YV - eV ? -1 : 1);
            eV = UV < 0 ? VV : YV, JV = UV
          }
        }));
        if (!JV) return eV
      }
    }

    function Kx(VV, eV) {
      let xV = null;
      for (let YV = 0; YV < eV.TE.length; YV++) {
        let UV = eV.TE[YV],
          yV = null;
        if (UV.empty) {
          let eV = mx(VV, UV.from, 0);
          eV != UV.from && (yV = JV.n.cursor(eV, -1))
        } else {
          let eV = mx(VV, UV.from, -1),
            xV = mx(VV, UV.to, 1);
          eV == UV.from && xV == UV.to || (yV = JV.n.range(UV.from == UV.anchor ? eV : xV, UV.from == UV.head ? eV : xV))
        }
        yV && (xV || (xV = eV.TE.slice()), xV[YV] = yV)
      }
      return xV ? JV.n.create(xV, eV.mainIndex) : eV
    }

    function Hx(VV, eV, xV) {
      let YV = mx(VV.state.facet(Jx).map((eV => eV(VV))), xV.from, eV.head > xV.from ? -1 : 1);
      return YV == xV.from ? xV : JV.n.cursor(YV, YV < xV.from ? 1 : -1)
    }
    class ux {
      constructor(VV, eV) {
        this.pos = VV, this.assoc = eV
      }
    }

    function sx(VV, eV, xV, YV) {
      let UV, yV = VV.contentDOM.getBoundingClientRect(),
        pV = yV.top + VV.viewState.paddingTop,
        {
          x: QV,
          y: nV
        } = eV,
        wV = nV - pV;
      for (;;) {
        if (wV < 0) return new ux(0, 1);
        if (wV > VV.viewState.docHeight) return new ux(VV.state.doc.length, -1);
        if (UV = VV.elementAtHeight(wV), null == YV) break;
        if (UV.type == WV.Text) {
          if (YV < 0 ? UV.to < VV.viewport.from : UV.from > VV.viewport.to) break;
          let eV = VV.docView.coordsAt(YV < 0 ? UV.from : UV.to, YV > 0 ? -1 : 1);
          if (eV && (YV < 0 ? eV.top <= wV + pV : eV.bottom >= wV + pV)) break
        }
        let eV = VV.viewState.heightOracle.textHeight / 2;
        wV = YV > 0 ? UV.bottom + eV : UV.top - eV
      }
      if (VV.viewport.from >= UV.to || VV.viewport.to <= UV.from) {
        if (xV) return null;
        if (UV.type == WV.Text) {
          let eV = function(VV, eV, xV, YV, UV) {
            let yV = Math.round((YV - eV.left) * VV.defaultCharacterWidth);
            if (VV.lineWrapping && xV.height > 1.5 * VV.defaultLineHeight) {
              let eV = VV.viewState.heightOracle.textHeight;
              yV += Math.floor((UV - xV.top - .5 * (VV.defaultLineHeight - eV)) / eV) * VV.viewState.heightOracle.lineLength
            }
            let pV = VV.state.sliceDoc(xV.from, xV.to);
            return xV.from + (0, JV.$)(pV, yV, VV.state.tabSize)
          }(VV, yV, UV, QV, nV);
          return new ux(eV, eV == UV.from ? 1 : -1)
        }
      }
      if (UV.type != WV.Text) return wV < (UV.top + UV.bottom) / 2 ? new ux(UV.from, 1) : new ux(UV.to, -1);
      let ZV = VV.docView.lineAt(UV.from, 2);
      return ZV && ZV.length == UV.length || (ZV = VV.docView.lineAt(UV.from, -2)), new Sx(VV, QV, nV, VV.textDirectionAt(UV.from)).scanTile(ZV, UV.from)
    }
    class Sx {
      constructor(VV, eV, xV, JV) {
        this.view = VV, this.x = eV, this.y = xV, this.baseDir = JV, this.line = null, this.spans = null
      }
      bidiSpansAt(VV) {
        return (!this.line || this.line.from > VV || this.line.to < VV) && (this.line = this.view.state.doc.lineAt(VV), this.spans = this.view.bidiSpans(this.line)), this
      }
      baseDirAt(VV, eV) {
        let {
          line: xV,
          spans: JV
        } = this.bidiSpansAt(VV);
        return JV[qe.find(JV, VV - xV.from, -1, eV)].level == this.baseDir
      }
      dirAt(VV, eV) {
        let {
          line: xV,
          spans: JV
        } = this.bidiSpansAt(VV);
        return JV[qe.find(JV, VV - xV.from, -1, eV)].dir
      }
      bidiIn(VV, eV) {
        let {
          spans: xV,
          line: JV
        } = this.bidiSpansAt(VV);
        return xV.length > 1 || xV.length && (xV[0].level != this.baseDir || xV[0].to + JV.from < eV)
      }
      scan(VV, eV) {
        let xV, JV, YV, UV = 0,
          yV = VV.length - 1,
          pV = new Set,
          QV = this.bidiIn(VV[0], VV[yV]),
          nV = -1,
          wV = 1e9;
        VV: for (; UV < yV;) {
          let ZV = yV - UV,
            vV = UV + yV >> 1;
          eV: if (pV.has(vV)) {
            let VV = UV + Math.floor(Math.random() * ZV);
            for (let eV = 0; eV < ZV; eV++) {
              if (!pV.has(VV)) {
                vV = VV;
                break eV
              }
              VV++, VV == yV && (VV = UV)
            }
            break VV
          } pV.add(vV);
          let rV = eV(vV);
          if (rV)
            for (let eV = 0; eV < rV.length; eV++) {
              let pV = rV[eV],
                ZV = 0;
              if (!(0 == pV.width && rV.length > 1)) {
                if (pV.bottom < this.y)(!xV || xV.bottom < pV.bottom) && (xV = pV), ZV = 1;
                else if (pV.top > this.y)(!JV || JV.top > pV.top) && (JV = pV), ZV = -1;
                else {
                  let VV = pV.left > this.x ? this.x - pV.left : pV.right < this.x ? this.x - pV.right : 0,
                    eV = Math.abs(VV);
                  eV < wV && (nV = vV, wV = eV, YV = pV), VV && (ZV = VV < 0 == (this.baseDir == ne.LTR) ? -1 : 1)
                } - 1 != ZV || QV && !this.baseDirAt(VV[vV], 1) ? 1 != ZV || QV && !this.baseDirAt(VV[vV + 1], -1) || (UV = vV + 1) : yV = vV
              }
            }
        }
        if (!YV) {
          let YV = xV && (!JV || this.y - xV.bottom < JV.top - this.y) ? xV : JV;
          return this.y = (YV.top + YV.bottom) / 2, this.scan(VV, eV)
        }
        if (wV) {
          if (xV && xV.bottom > YV.top) return this.y = xV.bottom - 1, this.scan(VV, eV);
          if (JV && JV.top < YV.bottom) return this.y = JV.top + 1, this.scan(VV, eV)
        }
        let ZV = (QV ? this.dirAt(VV[nV], 1) : this.baseDir) == ne.LTR;
        return {
          i: nV,
          after: this.x > (YV.left + YV.right) / 2 == ZV
        }
      }
      scanText(VV, eV) {
        let xV = [];
        for (let UV = 0; UV < VV.length; UV = (0, JV.Z)(VV.text, UV)) xV.push(eV + UV);
        xV.push(eV + VV.length);
        let YV = this.scan(xV, (JV => {
          let YV = xV[JV] - eV,
            UV = xV[JV + 1] - eV;
          return Je(VV.dom, YV, UV).getClientRects()
        }));
        return YV.after ? new ux(xV[YV.i + 1], -1) : new ux(xV[YV.i], 1)
      }
      scanTile(VV, eV) {
        if (!VV.length) return new ux(eV, 1);
        if (1 == VV.children.length) {
          let xV = VV.children[0];
          if (xV.isText()) return this.scanText(xV, eV);
          if (xV.isComposite()) return this.scanTile(xV, eV)
        }
        let xV = [eV];
        for (let yV = 0, pV = eV; yV < VV.children.length; yV++) xV.push(pV += VV.children[yV].length);
        let JV = this.scan(xV, (eV => {
            let xV = VV.children[eV];
            return 48 & xV.flags ? null : (1 == xV.dom.nodeType ? xV.dom : Je(xV.dom, 0, xV.length)).getClientRects()
          })),
          YV = VV.children[JV.i],
          UV = xV[JV.i];
        return YV.isText() ? this.scanText(YV, UV) : YV.isComposite() ? this.scanTile(YV, UV) : JV.after ? new ux(xV[JV.i + 1], -1) : new ux(UV, 1)
      }
    }
    const Ix = "\uffff";
    class dx {
      constructor(VV, eV) {
        this.points = VV, this.view = eV, this.text = "", this.lineSeparator = eV.state.facet(JV.q.lineSeparator)
      }
      append(VV) {
        this.text += VV
      }
      lineBreak() {
        this.text += Ix
      }
      readRange(VV, eV) {
        if (!VV) return this;
        let xV = VV.parentNode;
        for (let JV = VV;;) {
          this.findPointBefore(xV, JV);
          let VV = this.text.length;
          this.readNode(JV);
          let YV = vx.get(JV),
            UV = JV.nextSibling;
          if (UV == eV) {
            (null === YV || void 0 === YV ? void 0 : YV.breakAfter) && !UV && xV != this.view.contentDOM && this.lineBreak();
            break
          }
          let yV = vx.get(UV);
          (YV && yV ? YV.breakAfter : (YV ? YV.breakAfter : KV(JV)) || KV(UV) && ("BR" != JV.nodeName || (null === YV || void 0 === YV ? void 0 : YV.isWidget())) && this.text.length > VV) && !VJ(UV, eV) && this.lineBreak(), JV = UV
        }
        return this.findPointBefore(xV, eV), this
      }
      readTextNode(VV) {
        let eV = VV.nodeValue;
        for (let xV of this.points) xV.node == VV && (xV.pos = this.text.length + Math.min(xV.offset, eV.length));
        for (let xV = 0, JV = this.lineSeparator ? null : /\r\n?|\n/g;;) {
          let YV, UV = -1,
            yV = 1;
          if (this.lineSeparator ? (UV = eV.indexOf(this.lineSeparator, xV), yV = this.lineSeparator.length) : (YV = JV.exec(eV)) && (UV = YV.index, yV = YV[0].length), this.append(eV.slice(xV, UV < 0 ? eV.length : UV)), UV < 0) break;
          if (this.lineBreak(), yV > 1)
            for (let eV of this.points) eV.node == VV && eV.pos > this.text.length && (eV.pos -= yV - 1);
          xV = UV + yV
        }
      }
      readNode(VV) {
        let eV = vx.get(VV),
          xV = eV && eV.overrideDOMText;
        if (null != xV) {
          this.findPointInside(VV, xV.length);
          for (let VV = xV.iter(); !VV.next().done;) VV.lineBreak ? this.lineBreak() : this.append(VV.value)
        } else 3 == VV.nodeType ? this.readTextNode(VV) : "BR" == VV.nodeName ? VV.nextSibling && this.lineBreak() : 1 == VV.nodeType && this.readRange(VV.firstChild, null)
      }
      findPointBefore(VV, eV) {
        for (let xV of this.points) xV.node == VV && VV.childNodes[xV.offset] == eV && (xV.pos = this.text.length)
      }
      findPointInside(VV, eV) {
        for (let xV of this.points)(3 == VV.nodeType ? xV.node == VV : VV.contains(xV.node)) && (xV.pos = this.text.length + (Ox(VV, xV.node, xV.offset) ? eV : 0))
      }
    }

    function Ox(VV, eV, xV) {
      for (;;) {
        if (!eV || xV < uV(eV)) return !1;
        if (eV == VV) return !0;
        xV = mV(eV) + 1, eV = eV.parentNode
      }
    }

    function VJ(VV, eV) {
      let xV;
      for (; VV != eV && VV; VV = VV.nextSibling) {
        let eV = vx.get(VV);
        if (!(null === eV || void 0 === eV ? void 0 : eV.isWidget())) return !1;
        eV && (xV || (xV = [])).push(eV)
      }
      if (xV)
        for (let JV of xV) {
          let VV = JV.overrideDOMText;
          if (null === VV || void 0 === VV ? void 0 : VV.length) return !1
        }
      return !0
    }
    class eJ {
      constructor(VV, eV) {
        this.node = VV, this.offset = eV, this.pos = -1
      }
    }
    class xJ {
      constructor(VV, eV, xV, YV) {
        this.typeOver = YV, this.bounds = null, this.text = "", this.domChanged = eV > -1;
        let {
          impreciseHead: UV,
          impreciseAnchor: yV
        } = VV.docView, pV = VV.state.selection;
        if (VV.state.readOnly && eV > -1) this.newSel = null;
        else if (eV > -1 && (this.bounds = JJ(VV.docView.tile, eV, xV, 0))) {
          let eV = UV || yV ? [] : function(VV) {
              let eV = [];
              if (VV.root.activeElement != VV.contentDOM) return eV;
              let {
                anchorNode: xV,
                anchorOffset: JV,
                focusNode: YV,
                focusOffset: UV
              } = VV.observer.selectionRange;
              xV && (eV.push(new eJ(xV, JV)), YV == xV && UV == JV || eV.push(new eJ(YV, UV)));
              return eV
            }(VV),
            xV = new dx(eV, VV);
          xV.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = xV.text, this.newSel = function(VV, eV) {
            if (0 == VV.length) return null;
            let xV = VV[0].pos,
              YV = 2 == VV.length ? VV[1].pos : xV;
            return xV > -1 && YV > -1 ? JV.n.single(xV + eV, YV + eV) : null
          }(eV, this.bounds.from)
        } else {
          let eV = VV.observer.selectionRange,
            xV = UV && UV.node == eV.focusNode && UV.offset == eV.focusOffset || !hV(VV.contentDOM, eV.focusNode) ? pV.main.head : VV.docView.posFromDOM(eV.focusNode, eV.focusOffset),
            YV = yV && yV.node == eV.anchorNode && yV.offset == eV.anchorOffset || !hV(VV.contentDOM, eV.anchorNode) ? pV.main.anchor : VV.docView.posFromDOM(eV.anchorNode, eV.anchorOffset),
            QV = VV.viewport;
          if ((PV.ios || PV.chrome) && pV.main.empty && xV != YV && (QV.from > 0 || QV.to < VV.state.doc.length)) {
            let eV = Math.min(xV, YV),
              JV = Math.max(xV, YV),
              UV = QV.from - eV,
              yV = QV.to - JV;
            0 != UV && 1 != UV && 0 != eV || 0 != yV && -1 != yV && JV != VV.state.doc.length || (xV = 0, YV = VV.state.doc.length)
          }
          if (VV.inputState.composing > -1 && pV.TE.length > 1) this.newSel = pV.replaceRange(JV.n.range(YV, xV));
          else if (VV.lineWrapping && YV == xV && (!pV.main.empty || pV.main.head != xV) && VV.inputState.lastTouchTime > Date.now() - 100) {
            let eV = VV.coordsAtPos(xV, -1),
              YV = 0;
            eV && (YV = VV.inputState.lastTouchY <= eV.bottom ? -1 : 1), this.newSel = JV.n.create([JV.n.cursor(xV, YV)])
          } else this.newSel = JV.n.single(YV, xV)
        }
      }
    }

    function JJ(VV, eV, xV, JV) {
      if (VV.isComposite()) {
        let YV = -1,
          UV = -1,
          yV = -1,
          pV = -1;
        for (let QV = 0, nV = JV, wV = JV; QV < VV.children.length; QV++) {
          let JV = VV.children[QV],
            ZV = nV + JV.length;
          if (nV < eV && ZV > xV) return JJ(JV, eV, xV, nV);
          if (ZV >= eV && -1 == YV && (YV = QV, UV = nV), nV > xV && JV.dom.parentNode == VV.dom) {
            yV = QV, pV = wV;
            break
          }
          wV = ZV, nV = ZV + JV.breakAfter
        }
        return {
          from: UV,
          to: pV < 0 ? JV + VV.length : pV,
          startDOM: (YV ? VV.children[YV - 1].dom.nextSibling : null) || VV.dom.firstChild,
          endDOM: yV < VV.children.length && yV >= 0 ? VV.children[yV].dom : null
        }
      }
      return VV.isText() ? {
        from: JV,
        to: JV + VV.length,
        startDOM: VV.dom,
        endDOM: VV.dom.nextSibling
      } : null
    }

    function YJ(VV, eV) {
      let xV, {
          newSel: YV
        } = eV,
        {
          state: UV
        } = VV,
        yV = UV.selection.main,
        pV = VV.inputState.lastKeyTime > Date.now() - 100 ? VV.inputState.lastKeyCode : -1;
      if (eV.bounds) {
        let {
          from: VV,
          to: YV
        } = eV.bounds, QV = yV.from, nV = null;
        (8 === pV || PV.android && eV.text.length < YV - VV) && (QV = yV.to, nV = "end");
        let wV, ZV, vV = UV.doc.sliceString(VV, YV, Ix);
        !yV.empty && yV.from >= VV && yV.to <= YV && (eV.typeOver || vV != eV.text) && vV.slice(0, yV.from - VV) == eV.text.slice(0, yV.from - VV) && vV.slice(yV.to - VV) == eV.text.slice(wV = eV.text.length - (vV.length - (yV.to - VV))) ? xV = {
          from: yV.from,
          to: yV.to,
          insert: JV.H.of(eV.text.slice(yV.from - VV, wV).split(Ix))
        } : (ZV = yJ(vV, eV.text, QV - VV, nV)) && (PV.chrome && 13 == pV && ZV.toB == ZV.from + 2 && eV.text.slice(ZV.from, ZV.toB) == Ix + Ix && ZV.toB--, xV = {
          from: VV + ZV.from,
          to: VV + ZV.toA,
          insert: JV.H.of(eV.text.slice(ZV.from, ZV.toB).split(Ix))
        })
      } else YV && (!VV.hasFocus && UV.facet(He) || pJ(YV, yV)) && (YV = null);
      if (!xV && !YV) return !1;
      if ((PV.mac || PV.android) && xV && xV.from == xV.to && xV.from == yV.head - 1 && /^\. ?$/.test(xV.insert.toString()) && "off" == VV.contentDOM.getAttribute("autocorrect") ? (YV && 2 == xV.insert.length && (YV = JV.n.single(YV.main.anchor - 1, YV.main.head - 1)), xV = {
          from: xV.from,
          to: xV.to,
          insert: JV.H.of([xV.insert.toString().replace(".", " ")])
        }) : UV.doc.lineAt(yV.from).to < yV.to && VV.docView.lineHasWidget(yV.to) && VV.inputState.insertingTextAt > Date.now() - 50 ? xV = {
          from: yV.from,
          to: yV.to,
          insert: UV.toText(VV.inputState.insertingText)
        } : PV.chrome && xV && xV.from == xV.to && xV.from == yV.head && "\n " == xV.insert.toString() && VV.lineWrapping && (YV && (YV = JV.n.single(YV.main.anchor - 1, YV.main.head - 1)), xV = {
          from: yV.from,
          to: yV.to,
          insert: JV.H.of([" "])
        }), xV) return UJ(VV, xV, YV, pV);
      if (YV && !pJ(YV, yV)) {
        let eV = !1,
          xV = "select";
        return VV.inputState.lastSelectionTime > Date.now() - 50 && ("select" == VV.inputState.lastSelectionOrigin && (eV = !0), xV = VV.inputState.lastSelectionOrigin, "select.pointer" == xV && (YV = Kx(UV.facet(Jx).map((eV => eV(VV))), YV))), VV.dispatch({
          selection: YV,
          scrollIntoView: eV,
          userEvent: xV
        }), !0
      }
      return !1
    }

    function UJ(VV, eV, xV) {
      let YV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
      if (PV.ios && VV.inputState.flushIOSKey(eV)) return !0;
      let UV = VV.state.selection.main;
      if (PV.android && (eV.to == UV.to && (eV.from == UV.from || eV.from == UV.from - 1 && " " == VV.state.sliceDoc(eV.from, UV.from)) && 1 == eV.insert.length && 2 == eV.insert.lines && Ye(VV.contentDOM, "Enter", 13) || (eV.from == UV.from - 1 && eV.to == UV.to && 0 == eV.insert.length || 8 == YV && eV.insert.length < eV.to - eV.from && eV.to > UV.head) && Ye(VV.contentDOM, "Backspace", 8) || eV.from == UV.from && eV.to == UV.to + 1 && 0 == eV.insert.length && Ye(VV.contentDOM, "Delete", 46))) return !0;
      let yV, pV = eV.insert.toString();
      VV.inputState.composing >= 0 && VV.inputState.composing++;
      let QV = () => yV || (yV = function(VV, eV, xV) {
        let YV, UV = VV.state,
          yV = UV.selection.main,
          pV = -1;
        if (eV.from == eV.to && eV.from < yV.from || eV.from > yV.to) {
          let xV = eV.from < yV.from ? -1 : 1,
            JV = xV < 0 ? yV.from : yV.to,
            YV = mx(UV.facet(Jx).map((eV => eV(VV))), JV, xV);
          eV.from == YV && (pV = YV)
        }
        if (pV > -1) YV = {
          changes: eV,
          selection: JV.n.cursor(eV.from + eV.insert.length, -1)
        };
        else if (eV.from >= yV.from && eV.to <= yV.to && eV.to - eV.from >= (yV.to - yV.from) / 3 && (!xV || xV.main.empty && xV.main.from == eV.from + eV.insert.length) && VV.inputState.composing < 0) {
          let xV = yV.from < eV.from ? UV.sliceDoc(yV.from, eV.from) : "",
            JV = yV.to > eV.to ? UV.sliceDoc(eV.to, yV.to) : "";
          YV = UV.replaceSelection(VV.state.toText(xV + eV.insert.sliceString(0, void 0, VV.state.lineBreak) + JV))
        } else {
          let pV = UV.changes(eV),
            QV = xV && xV.main.to <= pV.newLength ? xV.main : void 0;
          if (UV.selection.TE.length > 1 && (VV.inputState.composing >= 0 || VV.inputState.compositionPendingChange) && eV.to <= yV.to + 10 && eV.to >= yV.to - 10) {
            let nV, wV = VV.state.sliceDoc(eV.from, eV.to),
              ZV = xV && ox(VV, xV.main.head);
            if (ZV) {
              let VV = eV.insert.length - (eV.to - eV.from);
              nV = {
                from: ZV.from,
                to: ZV.to - VV
              }
            } else nV = VV.state.doc.lineAt(yV.head);
            let vV = yV.to - eV.to;
            YV = UV.changeByRange((xV => {
              if (xV.from == yV.from && xV.to == yV.to) return {
                changes: pV,
                range: QV || xV.map(pV)
              };
              let YV = xV.to - vV,
                ZV = YV - wV.length;
              if (VV.state.sliceDoc(ZV, YV) != wV || YV >= nV.from && ZV <= nV.to) return {
                range: xV
              };
              let rV = UV.changes({
                  from: ZV,
                  to: YV,
                  insert: eV.insert
                }),
                kV = xV.to - yV.to;
              return {
                changes: rV,
                range: QV ? JV.n.range(Math.max(0, QV.anchor + kV), Math.max(0, QV.head + kV)) : xV.map(rV)
              }
            }))
          } else YV = {
            changes: pV,
            selection: QV && UV.selection.replaceRange(QV)
          }
        }
        let QV = "input.type";
        (VV.composing || VV.inputState.compositionPendingChange && VV.inputState.compositionEndedAt > Date.now() - 50) && (VV.inputState.compositionPendingChange = !1, QV += ".compose", VV.inputState.compositionFirstChange && (QV += ".start", VV.inputState.compositionFirstChange = !1));
        return UV.update(YV, {
          userEvent: QV,
          scrollIntoView: !0
        })
      }(VV, eV, xV));
      return VV.state.facet(ie).some((xV => xV(VV, eV.from, eV.to, pV, QV))) || VV.dispatch(QV()), !0
    }

    function yJ(VV, eV, xV, JV) {
      let YV = Math.min(VV.length, eV.length),
        UV = 0;
      for (; UV < YV && VV.charCodeAt(UV) == eV.charCodeAt(UV);) UV++;
      if (UV == YV && VV.length == eV.length) return null;
      let yV = VV.length,
        pV = eV.length;
      for (; yV > 0 && pV > 0 && VV.charCodeAt(yV - 1) == eV.charCodeAt(pV - 1);) yV--, pV--;
      if ("end" == JV) {
        xV -= yV + Math.max(0, UV - Math.min(yV, pV)) - UV
      }
      if (yV < UV && VV.length < eV.length) {
        UV -= xV <= UV && xV >= yV ? UV - xV : 0, pV = UV + (pV - yV), yV = UV
      } else if (pV < UV) {
        UV -= xV <= UV && xV >= pV ? UV - xV : 0, yV = UV + (yV - pV), pV = UV
      }
      return {
        from: UV,
        toA: yV,
        toB: pV
      }
    }

    function pJ(VV, eV) {
      return eV.head == VV.main.head && eV.anchor == VV.main.anchor
    }
    class QJ {
      setSelectionOrigin(VV) {
        this.lastSelectionOrigin = VV, this.lastSelectionTime = Date.now()
      }
      constructor(VV) {
        this.view = VV, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = VV.hasFocus, PV.safari && VV.contentDOM.addEventListener("input", (() => null)), PV.gecko && function(VV) {
          gJ.has(VV) || (gJ.add(VV), VV.addEventListener("copy", (() => {})), VV.addEventListener("cut", (() => {})))
        }(VV.contentDOM.ownerDocument)
      }
      handleEvent(VV) {
        (function(VV, eV) {
          if (!eV.bubbles) return !0;
          if (eV.defaultPrevented) return !1;
          for (let xV, JV = eV.target; JV != VV.contentDOM; JV = JV.parentNode)
            if (!JV || 11 == JV.nodeType || (xV = vx.get(JV)) && xV.isWidget() && !xV.isHidden && xV.widget.ignoreEvent(eV)) return !1;
          return !0
        })(this.view, VV) && !this.ignoreDuringComposition(VV) && ("keydown" == VV.type && this.keydown(VV) || (0 != this.view.updateState ? Promise.resolve().then((() => this.runHandlers(VV.type, VV))) : this.runHandlers(VV.type, VV)))
      }
      runHandlers(VV, eV) {
        let xV = this.handlers[VV];
        if (xV) {
          for (let VV of xV.observers) VV(this.view, eV);
          for (let VV of xV.handlers) {
            if (eV.defaultPrevented) break;
            if (VV(this.view, eV)) {
              eV.preventDefault();
              break
            }
          }
        }
      }
      ensureHandlers(VV) {
        let eV = wJ(VV),
          xV = this.handlers,
          JV = this.view.contentDOM;
        for (let YV in eV)
          if ("scroll" != YV) {
            let VV = !eV[YV].handlers.length,
              UV = xV[YV];
            UV && VV != !UV.handlers.length && (JV.removeEventListener(YV, this.handleEvent), UV = null), UV || JV.addEventListener(YV, this.handleEvent, {
              passive: VV
            })
          } for (let YV in xV) "scroll" == YV || eV[YV] || JV.removeEventListener(YV, this.handleEvent);
        this.handlers = eV
      }
      keydown(VV) {
        if (this.lastKeyCode = VV.keyCode, this.lastKeyTime = Date.now(), 9 == VV.keyCode && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return !0;
        if (this.tabFocusMode > 0 && 27 != VV.keyCode && rJ.indexOf(VV.keyCode) < 0 && (this.tabFocusMode = -1), PV.android && PV.chrome && !VV.synthetic && (13 == VV.keyCode || 8 == VV.keyCode)) return this.view.observer.delayAndroidKey(VV.key, VV.keyCode), !0;
        let eV;
        return !PV.ios || VV.synthetic || VV.altKey || VV.metaKey || VV.shiftKey || !((eV = ZJ.find((eV => eV.keyCode == VV.keyCode))) && !VV.ctrlKey || vJ.indexOf(VV.key) > -1 && VV.ctrlKey) ? (229 != VV.keyCode && this.view.observer.forceFlush(), !1) : (this.pendingIOSKey = eV || VV, setTimeout((() => this.flushIOSKey()), 250), !0)
      }
      flushIOSKey(VV) {
        let eV = this.pendingIOSKey;
        return !!eV && (!("Enter" == eV.key && VV && VV.from < VV.to && /^\S+$/.test(VV.insert.toString())) && (this.pendingIOSKey = void 0, Ye(this.view.contentDOM, eV.key, eV.keyCode, eV instanceof KeyboardEvent ? eV : void 0)))
      }
      ignoreDuringComposition(VV) {
        return !(!/^key/.test(VV.type) || VV.synthetic) && (this.composing > 0 || !!(PV.safari && !PV.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = !1, !0))
      }
      startMouseSelection(VV) {
        this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = VV
      }
      update(VV) {
        this.view.observer.update(VV), this.mouseSelection && this.mouseSelection.update(VV), this.draggedContent && VV.docChanged && (this.draggedContent = this.draggedContent.map(VV.changes)), VV.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0)
      }
      destroy() {
        this.mouseSelection && this.mouseSelection.destroy()
      }
    }

    function nJ(VV, eV) {
      return (xV, JV) => {
        try {
          return eV.call(VV, JV, xV)
        } catch (YV) {
          Ke(xV.state, YV)
        }
      }
    }

    function wJ(VV) {
      let eV = Object.create(null);

      function xV(VV) {
        return eV[VV] || (eV[VV] = {
          observers: [],
          handlers: []
        })
      }
      for (let JV of VV) {
        let VV = JV.spec,
          eV = VV && VV.plugin.domEventHandlers,
          YV = VV && VV.plugin.domEventObservers;
        if (eV)
          for (let UV in eV) {
            let VV = eV[UV];
            VV && xV(UV).handlers.push(nJ(JV.value, VV))
          }
        if (YV)
          for (let UV in YV) {
            let VV = YV[UV];
            VV && xV(UV).observers.push(nJ(JV.value, VV))
          }
      }
      for (let JV in EJ) xV(JV).handlers.push(EJ[JV]);
      for (let JV in BJ) xV(JV).observers.push(BJ[JV]);
      return eV
    }
    const ZJ = [{
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
      vJ = "dthko",
      rJ = [16, 17, 18, 20, 91, 92, 224, 225];

    function kJ(VV) {
      return .7 * Math.max(0, VV) + 8
    }
    class bJ {
      constructor(VV, eV, xV, YV) {
        this.view = VV, this.startEvent = eV, this.style = xV, this.mustSelect = YV, this.scrollSpeed = {
          x: 0,
          y: 0
        }, this.scrolling = -1, this.lastEvent = eV, this.scrollParents = dV(VV.contentDOM), this.atoms = VV.state.facet(Jx).map((eV => eV(VV)));
        let UV = VV.contentDOM.ownerDocument;
        UV.addEventListener("mousemove", this.move = this.move.bind(this)), UV.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = eV.shiftKey, this.multiple = VV.state.facet(JV.q.allowMultipleSelections) && function(VV, eV) {
          let xV = VV.state.facet(Ge);
          return xV.length ? xV[0](eV) : PV.mac ? eV.metaKey : eV.ctrlKey
        }(VV, eV), this.dragging = !(! function(VV, eV) {
          let {
            main: xV
          } = VV.state.selection;
          if (xV.empty) return !1;
          let JV = cV(VV.root);
          if (!JV || 0 == JV.rangeCount) return !0;
          let YV = JV.getRangeAt(0).getClientRects();
          for (let UV = 0; UV < YV.length; UV++) {
            let VV = YV[UV];
            if (VV.left <= eV.clientX && VV.right >= eV.clientX && VV.top <= eV.clientY && VV.bottom >= eV.clientY) return !0
          }
          return !1
        }(VV, eV) || 1 != XJ(eV)) && null
      }
      start(VV) {
        !1 === this.dragging && this.select(VV)
      }
      move(VV) {
        if (0 == VV.buttons) return this.destroy();
        if (this.dragging || null == this.dragging && (eV = this.startEvent, xV = VV, Math.max(Math.abs(eV.clientX - xV.clientX), Math.abs(eV.clientY - xV.clientY)) < 10)) return;
        var eV, xV;
        this.select(this.lastEvent = VV);
        let JV = 0,
          YV = 0,
          UV = 0,
          yV = 0,
          pV = this.view.win.innerWidth,
          QV = this.view.win.innerHeight;
        this.scrollParents.x && ({
          left: UV,
          right: pV
        } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({
          top: yV,
          bottom: QV
        } = this.scrollParents.y.getBoundingClientRect());
        let nV = px(this.view);
        VV.clientX - nV.left <= UV + 6 ? JV = -kJ(UV - VV.clientX) : VV.clientX + nV.right >= pV - 6 && (JV = kJ(VV.clientX - pV)), VV.clientY - nV.top <= yV + 6 ? YV = -kJ(yV - VV.clientY) : VV.clientY + nV.bottom >= QV - 6 && (YV = kJ(VV.clientY - QV)), this.setScrollSpeed(JV, YV)
      }
      up(VV) {
        null == this.dragging && this.select(this.lastEvent), this.dragging || VV.preventDefault(), this.destroy()
      }
      destroy() {
        this.setScrollSpeed(0, 0);
        let VV = this.view.contentDOM.ownerDocument;
        VV.removeEventListener("mousemove", this.move), VV.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null
      }
      setScrollSpeed(VV, eV) {
        this.scrollSpeed = {
          x: VV,
          y: eV
        }, VV || eV ? this.scrolling < 0 && (this.scrolling = setInterval((() => this.scroll()), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1)
      }
      scroll() {
        let {
          x: VV,
          y: eV
        } = this.scrollSpeed;
        VV && this.scrollParents.x && (this.scrollParents.x.scrollLeft += VV, VV = 0), eV && this.scrollParents.y && (this.scrollParents.y.scrollTop += eV, eV = 0), (VV || eV) && this.view.win.scrollBy(VV, eV), !1 === this.dragging && this.select(this.lastEvent)
      }
      select(VV) {
        let {
          view: eV
        } = this, xV = Kx(this.atoms, this.style.get(VV, this.extend, this.multiple));
        !this.mustSelect && xV.eq(eV.state.selection, !1 === this.dragging) || this.view.dispatch({
          selection: xV,
          userEvent: "select.pointer"
        }), this.mustSelect = !1
      }
      update(VV) {
        VV.transactions.some((VV => VV.isUserEvent("input.type"))) ? this.destroy() : this.style.update(VV) && setTimeout((() => this.select(this.lastEvent)), 20)
      }
    }
    const EJ = Object.create(null),
      BJ = Object.create(null),
      jJ = PV.ie && PV.ie_version < 15 || PV.ios && PV.webkit_version < 604;

    function qJ(VV, eV, xV) {
      for (let JV of VV.facet(eV)) xV = JV(xV, VV);
      return xV
    }

    function tJ(VV, eV) {
      eV = qJ(VV.state, ae, eV);
      let xV, {
          state: YV
        } = VV,
        UV = 1,
        yV = YV.toText(eV),
        pV = yV.lines == YV.selection.TE.length;
      if (null != zJ && YV.selection.TE.every((VV => VV.empty)) && zJ == yV.toString()) {
        let VV = -1;
        xV = YV.changeByRange((xV => {
          let QV = YV.doc.lineAt(xV.from);
          if (QV.from == VV) return {
            range: xV
          };
          VV = QV.from;
          let nV = YV.toText((pV ? yV.line(UV++).text : eV) + YV.lineBreak);
          return {
            changes: {
              from: QV.from,
              insert: nV
            },
            range: JV.n.cursor(xV.from + nV.length)
          }
        }))
      } else xV = pV ? YV.changeByRange((VV => {
        let eV = yV.line(UV++);
        return {
          changes: {
            from: VV.from,
            to: VV.to,
            insert: eV.text
          },
          range: JV.n.cursor(VV.from + eV.length)
        }
      })) : YV.replaceSelection(yV);
      VV.dispatch(xV, {
        userEvent: "input.paste",
        scrollIntoView: !0
      })
    }

    function FJ(VV, eV, xV, YV) {
      if (1 == YV) return JV.n.cursor(eV, xV);
      if (2 == YV) return function(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          YV = VV.charCategorizer(eV),
          UV = VV.doc.lineAt(eV),
          yV = eV - UV.from;
        if (0 == UV.length) return JV.n.cursor(eV);
        0 == yV ? xV = 1 : yV == UV.length && (xV = -1);
        let pV = yV,
          QV = yV;
        xV < 0 ? pV = (0, JV.Z)(UV.text, yV, !1) : QV = (0, JV.Z)(UV.text, yV);
        let nV = YV(UV.text.slice(pV, QV));
        for (; pV > 0;) {
          let VV = (0, JV.Z)(UV.text, pV, !1);
          if (YV(UV.text.slice(VV, pV)) != nV) break;
          pV = VV
        }
        for (; QV < UV.length;) {
          let VV = (0, JV.Z)(UV.text, QV);
          if (YV(UV.text.slice(QV, VV)) != nV) break;
          QV = VV
        }
        return JV.n.range(pV + UV.from, QV + UV.from)
      }(VV.state, eV, xV);
      {
        let YV = VV.docView.lineAt(eV, xV),
          UV = VV.state.doc.lineAt(YV ? YV.posAtEnd : eV),
          yV = YV ? YV.posAtStart : UV.from,
          pV = YV ? YV.posAtEnd : UV.to;
        return pV < VV.state.doc.length && pV == UV.to && pV++, JV.n.range(yV, pV)
      }
    }
    BJ.scroll = VV => {
      VV.inputState.lastScrollTop = VV.scrollDOM.scrollTop, VV.inputState.lastScrollLeft = VV.scrollDOM.scrollLeft
    }, BJ.wheel = BJ.mousewheel = VV => {
      VV.inputState.lastWheelEvent = Date.now()
    }, EJ.keydown = (VV, eV) => (VV.inputState.setSelectionOrigin("select"), 27 == eV.keyCode && 0 != VV.inputState.tabFocusMode && (VV.inputState.tabFocusMode = Date.now() + 2e3), !1), BJ.touchstart = (VV, eV) => {
      let xV = VV.inputState,
        JV = eV.targetTouches[0];
      xV.lastTouchTime = Date.now(), JV && (xV.lastTouchX = JV.clientX, xV.lastTouchY = JV.clientY), xV.setSelectionOrigin("select.pointer")
    }, BJ.touchmove = VV => {
      VV.inputState.setSelectionOrigin("select.pointer")
    }, EJ.mousedown = (VV, eV) => {
      if (VV.observer.flush(), VV.inputState.lastTouchTime > Date.now() - 2e3) return !1;
      let xV = null;
      for (let JV of VV.state.facet(Re))
        if (xV = JV(VV, eV), xV) break;
      if (xV || 0 != eV.button || (xV = function(VV, eV) {
          let xV = VV.posAndSideAtCoords({
              x: eV.clientX,
              y: eV.clientY
            }, !1),
            YV = XJ(eV),
            UV = VV.state.selection;
          return {
            update(VV) {
              VV.docChanged && (xV.pos = VV.changes.mapPos(xV.pos), UV = UV.map(VV.changes))
            },
            get(eV, yV, pV) {
              let QV, nV = VV.posAndSideAtCoords({
                  x: eV.clientX,
                  y: eV.clientY
                }, !1),
                wV = FJ(VV, nV.pos, nV.assoc, YV);
              if (xV.pos != nV.pos && !yV) {
                let eV = FJ(VV, xV.pos, xV.assoc, YV),
                  UV = Math.min(eV.from, wV.from),
                  yV = Math.max(eV.to, wV.to);
                wV = UV < wV.from ? JV.n.range(UV, yV, wV.assoc) : JV.n.range(yV, UV, wV.assoc)
              }
              return yV ? UV.replaceRange(UV.main.extend(wV.from, wV.to, wV.assoc)) : pV && 1 == YV && UV.TE.length > 1 && (QV = function(VV, eV) {
                for (let xV = 0; xV < VV.TE.length; xV++) {
                  let {
                    from: YV,
                    to: UV
                  } = VV.TE[xV];
                  if (YV <= eV && UV >= eV) return JV.n.create(VV.TE.slice(0, xV).concat(VV.TE.slice(xV + 1)), VV.mainIndex == xV ? 0 : VV.mainIndex - (VV.mainIndex > xV ? 1 : 0))
                }
                return null
              }(UV, nV.pos)) ? QV : pV ? UV.addRange(wV) : JV.n.create([wV])
            }
          }
        }(VV, eV)), xV) {
        let JV = !VV.hasFocus;
        VV.inputState.startMouseSelection(new bJ(VV, eV, xV, JV)), JV && VV.observer.ignore((() => {
          xe(VV.contentDOM);
          let eV = VV.root.activeElement;
          eV && !eV.contains(VV.contentDOM) && eV.blur()
        }));
        let YV = VV.inputState.mouseSelection;
        if (YV) return YV.start(eV), !1 === YV.dragging
      } else VV.inputState.setSelectionOrigin("select.pointer");
      return !1
    };
    const TJ = PV.ie && PV.ie_version <= 11;
    let PJ = null,
      AJ = 0,
      NJ = 0;

    function XJ(VV) {
      if (!TJ) return VV.detail;
      let eV = PJ,
        xV = NJ;
      return PJ = VV, NJ = Date.now(), AJ = !eV || xV > Date.now() - 400 && Math.abs(eV.clientX - VV.clientX) < 2 && Math.abs(eV.clientY - VV.clientY) < 2 ? (AJ + 1) % 3 : 1
    }

    function MJ(VV, eV, xV, JV) {
      if (!(xV = qJ(VV.state, ae, xV))) return;
      let YV = VV.posAtCoords({
          x: eV.clientX,
          y: eV.clientY
        }, !1),
        {
          draggedContent: UV
        } = VV.inputState,
        yV = JV && UV && function(VV, eV) {
          let xV = VV.state.facet(We);
          return xV.length ? xV[0](eV) : PV.mac ? !eV.altKey : !eV.ctrlKey
        }(VV, eV) ? {
          from: UV.from,
          to: UV.to
        } : null,
        pV = {
          from: YV,
          insert: xV
        },
        QV = VV.state.changes(yV ? [yV, pV] : pV);
      VV.focus(), VV.dispatch({
        changes: QV,
        selection: {
          anchor: QV.mapPos(YV, -1),
          head: QV.mapPos(YV, 1)
        },
        userEvent: yV ? "move.drop" : "input.drop"
      }), VV.inputState.draggedContent = null
    }
    EJ.dragstart = (VV, eV) => {
      let {
        selection: {
          main: xV
        }
      } = VV.state;
      if (eV.target.draggable) {
        let YV = VV.docView.tile.nearest(eV.target);
        if (YV && YV.isWidget()) {
          let VV = YV.posAtStart,
            eV = VV + YV.length;
          (VV >= xV.to || eV <= xV.from) && (xV = JV.n.range(VV, eV))
        }
      }
      let {
        inputState: YV
      } = VV;
      return YV.mouseSelection && (YV.mouseSelection.dragging = !0), YV.draggedContent = xV, eV.dataTransfer && (eV.dataTransfer.setData("Text", qJ(VV.state, oe, VV.state.sliceDoc(xV.from, xV.to))), eV.dataTransfer.effectAllowed = "copyMove"), !1
    }, EJ.dragend = VV => (VV.inputState.draggedContent = null, !1), EJ.drop = (VV, eV) => {
      if (!eV.dataTransfer) return !1;
      if (VV.state.readOnly) return !0;
      let xV = eV.dataTransfer.files;
      if (xV && xV.length) {
        let JV = Array(xV.length),
          YV = 0,
          UV = () => {
            ++YV == xV.length && MJ(VV, eV, JV.filter((VV => null != VV)).join(VV.state.lineBreak), !1)
          };
        for (let VV = 0; VV < xV.length; VV++) {
          let eV = new FileReader;
          eV.onerror = UV, eV.onload = () => {
            /[\x00-\x08\x0e-\x1f]{2}/.test(eV.result) || (JV[VV] = eV.result), UV()
          }, eV.readAsText(xV[VV])
        }
        return !0
      } {
        let xV = eV.dataTransfer.getData("Text");
        if (xV) return MJ(VV, eV, xV, !0), !0
      }
      return !1
    }, EJ.paste = (VV, eV) => {
      if (VV.state.readOnly) return !0;
      VV.observer.flush();
      let xV = jJ ? null : eV.clipboardData;
      return xV ? (tJ(VV, xV.getData("text/plain") || xV.getData("text/uri-list")), !0) : (function(VV) {
        let eV = VV.dom.parentNode;
        if (!eV) return;
        let xV = eV.appendChild(document.createElement("textarea"));
        xV.style.cssText = "position: fixed; left: -10000px; top: 10px", xV.focus(), setTimeout((() => {
          VV.focus(), xV.remove(), tJ(VV, xV.value)
        }), 50)
      }(VV), !1)
    };
    let zJ = null;
    EJ.copy = EJ.cut = (VV, eV) => {
      if (!lV(VV.contentDOM, VV.observer.selectionRange)) return !1;
      let {
        text: xV,
        TE: JV,
        linewise: YV
      } = function(VV) {
        let eV = [],
          xV = [],
          JV = !1;
        for (let YV of VV.selection.TE) YV.empty || (eV.push(VV.sliceDoc(YV.from, YV.to)), xV.push(YV));
        if (!eV.length) {
          let YV = -1;
          for (let {
              from: JV
            }
            of VV.selection.TE) {
            let UV = VV.doc.lineAt(JV);
            UV.number > YV && (eV.push(UV.text), xV.push({
              from: UV.from,
              to: Math.min(VV.doc.length, UV.to + 1)
            })), YV = UV.number
          }
          JV = !0
        }
        return {
          text: qJ(VV, oe, eV.join(VV.lineBreak)),
          TE: xV,
          linewise: JV
        }
      }(VV.state);
      if (!xV && !YV) return !1;
      zJ = YV ? xV : null, "cut" != eV.type || VV.state.readOnly || VV.dispatch({
        changes: JV,
        scrollIntoView: !0,
        userEvent: "delete.cut"
      });
      let UV = jJ ? null : eV.clipboardData;
      return UV ? (UV.clearData(), UV.setData("text/plain", xV), !0) : (function(VV, eV) {
        let xV = VV.dom.parentNode;
        if (!xV) return;
        let JV = xV.appendChild(document.createElement("textarea"));
        JV.style.cssText = "position: fixed; left: -10000px; top: 10px", JV.value = eV, JV.focus(), JV.selectionEnd = eV.length, JV.selectionStart = 0, setTimeout((() => {
          JV.remove(), VV.focus()
        }), 50)
      }(VV, xV), !1)
    };
    const GJ = JV.e.define();

    function WJ(VV, eV) {
      let xV = [];
      for (let JV of VV.facet(Ce)) {
        let YV = JV(VV, eV);
        YV && xV.push(YV)
      }
      return xV.length ? VV.update({
        effects: xV,
        annotations: GJ.of(!0)
      }) : null
    }

    function RJ(VV) {
      setTimeout((() => {
        let eV = VV.hasFocus;
        if (eV != VV.inputState.notifiedFocused) {
          let xV = WJ(VV.state, eV);
          xV ? VV.dispatch(xV) : VV.update([])
        }
      }), 10)
    }
    BJ.focus = VV => {
      VV.inputState.lastFocusTime = Date.now(), VV.scrollDOM.scrollTop || !VV.inputState.lastScrollTop && !VV.inputState.lastScrollLeft || (VV.scrollDOM.scrollTop = VV.inputState.lastScrollTop, VV.scrollDOM.scrollLeft = VV.inputState.lastScrollLeft), RJ(VV)
    }, BJ.blur = VV => {
      VV.observer.clearSelectionRange(), RJ(VV)
    }, BJ.compositionstart = BJ.compositionupdate = VV => {
      VV.observer.editContext || (null == VV.inputState.compositionFirstChange && (VV.inputState.compositionFirstChange = !0), VV.inputState.composing < 0 && (VV.inputState.composing = 0))
    }, BJ.compositionend = VV => {
      VV.observer.editContext || (VV.inputState.composing = -1, VV.inputState.compositionEndedAt = Date.now(), VV.inputState.compositionPendingKey = !0, VV.inputState.compositionPendingChange = VV.observer.pendingRecords().length > 0, VV.inputState.compositionFirstChange = null, PV.chrome && PV.android ? VV.observer.flushSoon() : VV.inputState.compositionPendingChange ? Promise.resolve().then((() => VV.observer.flush())) : setTimeout((() => {
        VV.inputState.composing < 0 && VV.docView.hasComposition && VV.update([])
      }), 50))
    }, BJ.contextmenu = VV => {
      VV.inputState.lastContextMenu = Date.now()
    }, EJ.beforeinput = (VV, eV) => {
      var xV, JV;
      if ("insertText" != eV.inputType && "insertCompositionText" != eV.inputType || (VV.inputState.insertingText = eV.data, VV.inputState.insertingTextAt = Date.now()), "insertReplacementText" == eV.inputType && VV.observer.editContext) {
        let JV = null === (xV = eV.dataTransfer) || void 0 === xV ? void 0 : xV.getData("text/plain"),
          YV = eV.getTargetRanges();
        if (JV && YV.length) {
          let eV = YV[0],
            xV = VV.posAtDOM(eV.startContainer, eV.startOffset),
            UV = VV.posAtDOM(eV.endContainer, eV.endOffset);
          return UJ(VV, {
            from: xV,
            to: UV,
            insert: VV.state.toText(JV)
          }, null), !0
        }
      }
      let YV;
      if (PV.chrome && PV.android && (YV = ZJ.find((VV => VV.inputType == eV.inputType))) && (VV.observer.delayAndroidKey(YV.key, YV.keyCode), "Backspace" == YV.key || "Delete" == YV.key)) {
        let eV = (null === (JV = window.visualViewport) || void 0 === JV ? void 0 : JV.height) || 0;
        setTimeout((() => {
          var xV;
          ((null === (xV = window.visualViewport) || void 0 === xV ? void 0 : xV.height) || 0) > eV + 10 && VV.hasFocus && (VV.contentDOM.blur(), VV.focus())
        }), 100)
      }
      return PV.ios && "deleteContentForward" == eV.inputType && VV.observer.flushSoon(), PV.safari && "insertText" == eV.inputType && VV.inputState.composing >= 0 && setTimeout((() => BJ.compositionend(VV, eV)), 20), !1
    };
    const gJ = new Set;
    const DJ = ["pre-wrap", "normal", "pre-line", "break-spaces"];
    let iJ = !1;

    function CJ() {
      iJ = !1
    }
    class aJ {
      constructor(VV) {
        this.lineWrapping = VV, this.doc = JV.H.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30
      }
      heightForGap(VV, eV) {
        let xV = this.doc.lineAt(eV).number - this.doc.lineAt(VV).number + 1;
        return this.lineWrapping && (xV += Math.max(0, Math.ceil((eV - VV - xV * this.lineLength * .5) / this.lineLength))), this.lineHeight * xV
      }
      heightForLine(VV) {
        if (!this.lineWrapping) return this.lineHeight;
        return (1 + Math.max(0, Math.ceil((VV - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight
      }
      setDoc(VV) {
        return this.doc = VV, this
      }
      mustRefreshForWrapping(VV) {
        return DJ.indexOf(VV) > -1 != this.lineWrapping
      }
      mustRefreshForHeights(VV) {
        let eV = !1;
        for (let xV = 0; xV < VV.length; xV++) {
          let JV = VV[xV];
          JV < 0 ? xV++ : this.heightSamples[Math.floor(10 * JV)] || (eV = !0, this.heightSamples[Math.floor(10 * JV)] = !0)
        }
        return eV
      }
      refresh(VV, eV, xV, JV, YV, UV) {
        let yV = DJ.indexOf(VV) > -1,
          pV = Math.abs(eV - this.lineHeight) > .3 || this.lineWrapping != yV || Math.abs(xV - this.charWidth) > .1;
        if (this.lineWrapping = yV, this.lineHeight = eV, this.charWidth = xV, this.textHeight = JV, this.lineLength = YV, pV) {
          this.heightSamples = {};
          for (let VV = 0; VV < UV.length; VV++) {
            let eV = UV[VV];
            eV < 0 ? VV++ : this.heightSamples[Math.floor(10 * eV)] = !0
          }
        }
        return pV
      }
    }
    class oJ {
      constructor(VV, eV) {
        this.from = VV, this.heights = eV, this.index = 0
      }
      get more() {
        return this.index < this.heights.length
      }
    }
    class cJ {
      constructor(VV, eV, xV, JV, YV) {
        this.from = VV, this.length = eV, this.top = xV, this.height = JV, this._content = YV
      }
      get type() {
        return "number" == typeof this._content ? WV.Text : Array.isArray(this._content) ? this._content : this._content.type
      }
      get to() {
        return this.from + this.length
      }
      get bottom() {
        return this.top + this.height
      }
      get widget() {
        return this._content instanceof iV ? this._content.widget : null
      }
      get widgetLineBreaks() {
        return "number" == typeof this._content ? this._content : 0
      }
      join(VV) {
        let eV = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(VV._content) ? VV._content : [VV]);
        return new cJ(this.from, this.length + VV.length, this.top, this.height + VV.height, eV)
      }
    }
    var hJ = function(VV) {
      return VV[VV.ByPos = 0] = "ByPos", VV[VV.ByHeight = 1] = "ByHeight", VV[VV.ByPosNoHeight = 2] = "ByPosNoHeight", VV
    }(hJ || (hJ = {}));
    const lJ = .001;
    class LJ {
      constructor(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.length = VV, this.height = eV, this.flags = xV
      }
      get outdated() {
        return (2 & this.flags) > 0
      }
      set outdated(VV) {
        this.flags = (VV ? 2 : 0) | -3 & this.flags
      }
      setHeight(VV) {
        this.height != VV && (Math.abs(this.height - VV) > lJ && (iJ = !0), this.height = VV)
      }
      replace(VV, eV, xV) {
        return LJ.of(xV)
      }
      decomposeLeft(VV, eV) {
        eV.push(this)
      }
      decomposeRight(VV, eV) {
        eV.push(this)
      }
      applyChanges(VV, eV, xV, JV) {
        let YV = this,
          UV = xV.doc;
        for (let yV = JV.length - 1; yV >= 0; yV--) {
          let {
            fromA: pV,
            toA: QV,
            fromB: nV,
            toB: wV
          } = JV[yV], ZV = YV.lineAt(pV, hJ.ByPosNoHeight, xV.setDoc(eV), 0, 0), vV = ZV.to >= QV ? ZV : YV.lineAt(QV, hJ.ByPosNoHeight, xV, 0, 0);
          for (wV += vV.to - QV, QV = vV.to; yV > 0 && ZV.from <= JV[yV - 1].toA;) pV = JV[yV - 1].fromA, nV = JV[yV - 1].fromB, yV--, pV < ZV.from && (ZV = YV.lineAt(pV, hJ.ByPosNoHeight, xV, 0, 0));
          nV += ZV.from - pV, pV = ZV.from;
          let rV = IJ.build(xV.setDoc(UV), VV, nV, wV);
          YV = fJ(YV, YV.replace(pV, QV, rV))
        }
        return YV.updateHeight(xV, 0)
      }
      static empty() {
        return new HJ(0, 0, 0)
      }
      static of (VV) {
        if (1 == VV.length) return VV[0];
        let eV = 0,
          xV = VV.length,
          JV = 0,
          YV = 0;
        for (;;)
          if (eV == xV)
            if (JV > 2 * YV) {
              let YV = VV[eV - 1];
              YV.break ? VV.splice(--eV, 1, YV.left, null, YV.right) : VV.splice(--eV, 1, YV.left, YV.right), xV += 1 + YV.break, JV -= YV.size
            } else {
              if (!(YV > 2 * JV)) break;
              {
                let eV = VV[xV];
                eV.break ? VV.splice(xV, 1, eV.left, null, eV.right) : VV.splice(xV, 1, eV.left, eV.right), xV += 2 + eV.break, YV -= eV.size
              }
            }
        else if (JV < YV) {
          let xV = VV[eV++];
          xV && (JV += xV.size)
        } else {
          let eV = VV[--xV];
          eV && (YV += eV.size)
        }
        let UV = 0;
        return null == VV[eV - 1] ? (UV = 1, eV--) : null == VV[eV] && (UV = 1, xV++), new sJ(LJ.of(VV.slice(0, eV)), UV, LJ.of(VV.slice(xV)))
      }
    }

    function fJ(VV, eV) {
      return VV == eV ? VV : (VV.constructor != eV.constructor && (iJ = !0), eV)
    }
    LJ.prototype.size = 1;
    const mJ = RV.replace({});
    class KJ extends LJ {
      constructor(VV, eV, xV) {
        super(VV, eV), this.deco = xV, this.spaceAbove = 0
      }
      mainBlock(VV, eV) {
        return new cJ(eV, this.length, VV + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0)
      }
      blockAt(VV, eV, xV, JV) {
        return this.spaceAbove && VV < xV + this.spaceAbove ? new cJ(JV, 0, xV, this.spaceAbove, mJ) : this.mainBlock(xV, JV)
      }
      lineAt(VV, eV, xV, JV, YV) {
        let UV = this.mainBlock(JV, YV);
        return this.spaceAbove ? this.blockAt(0, xV, JV, YV).join(UV) : UV
      }
      forEachLine(VV, eV, xV, JV, YV, UV) {
        VV <= YV + this.length && eV >= YV && UV(this.lineAt(0, hJ.ByPos, xV, JV, YV))
      }
      setMeasuredHeight(VV) {
        let eV = VV.heights[VV.index++];
        eV < 0 ? (this.spaceAbove = -eV, eV = VV.heights[VV.index++]) : this.spaceAbove = 0, this.setHeight(eV)
      }
      updateHeight(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          xV = arguments.length > 3 ? arguments[3] : void 0;
        return xV && xV.from <= eV && xV.more && this.setMeasuredHeight(xV), this.outdated = !1, this
      }
      toString() {
        return `block(${this.length})`
      }
    }
    class HJ extends KJ {
      constructor(VV, eV, xV) {
        super(VV, eV, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = xV
      }
      mainBlock(VV, eV) {
        return new cJ(eV, this.length, VV + this.spaceAbove, this.height - this.spaceAbove, this.breaks)
      }
      replace(VV, eV, xV) {
        let JV = xV[0];
        return 1 == xV.length && (JV instanceof HJ || JV instanceof uJ && 4 & JV.flags) && Math.abs(this.length - JV.length) < 10 ? (JV instanceof uJ ? JV = new HJ(JV.length, this.height, this.spaceAbove) : JV.height = this.height, this.outdated || (JV.outdated = !1), JV) : LJ.of(xV)
      }
      updateHeight(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          JV = arguments.length > 3 ? arguments[3] : void 0;
        return JV && JV.from <= eV && JV.more ? this.setMeasuredHeight(JV) : (xV || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, VV.heightForLine(this.length - this.collapsed)) + this.breaks * VV.lineHeight)), this.outdated = !1, this
      }
      toString() {
        return `line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`
      }
    }
    class uJ extends LJ {
      constructor(VV) {
        super(VV, 0)
      }
      heightMetrics(VV, eV) {
        let xV, JV = VV.doc.lineAt(eV).number,
          YV = VV.doc.lineAt(eV + this.length).number,
          UV = YV - JV + 1,
          yV = 0;
        if (VV.lineWrapping) {
          let eV = Math.min(this.height, VV.lineHeight * UV);
          xV = eV / UV, this.length > UV + 1 && (yV = (this.height - eV) / (this.length - UV - 1))
        } else xV = this.height / UV;
        return {
          firstLine: JV,
          lastLine: YV,
          perLine: xV,
          perChar: yV
        }
      }
      blockAt(VV, eV, xV, JV) {
        let {
          firstLine: YV,
          lastLine: UV,
          perLine: yV,
          perChar: pV
        } = this.heightMetrics(eV, JV);
        if (eV.lineWrapping) {
          let YV = JV + (VV < eV.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (VV - xV) / this.height)) * this.length)),
            UV = eV.doc.lineAt(YV),
            QV = yV + UV.length * pV,
            nV = Math.max(xV, VV - QV / 2);
          return new cJ(UV.from, UV.length, nV, QV, 0)
        } {
          let JV = Math.max(0, Math.min(UV - YV, Math.floor((VV - xV) / yV))),
            {
              from: pV,
              length: QV
            } = eV.doc.line(YV + JV);
          return new cJ(pV, QV, xV + yV * JV, yV, 0)
        }
      }
      lineAt(VV, eV, xV, JV, YV) {
        if (eV == hJ.ByHeight) return this.blockAt(VV, xV, JV, YV);
        if (eV == hJ.ByPosNoHeight) {
          let {
            from: eV,
            to: JV
          } = xV.doc.lineAt(VV);
          return new cJ(eV, JV - eV, 0, 0, 0)
        }
        let {
          firstLine: UV,
          perLine: yV,
          perChar: pV
        } = this.heightMetrics(xV, YV), QV = xV.doc.lineAt(VV), nV = yV + QV.length * pV, wV = QV.number - UV, ZV = JV + yV * wV + pV * (QV.from - YV - wV);
        return new cJ(QV.from, QV.length, Math.max(JV, Math.min(ZV, JV + this.height - nV)), nV, 0)
      }
      forEachLine(VV, eV, xV, JV, YV, UV) {
        VV = Math.max(VV, YV), eV = Math.min(eV, YV + this.length);
        let {
          firstLine: yV,
          perLine: pV,
          perChar: QV
        } = this.heightMetrics(xV, YV);
        for (let nV = VV, wV = JV; nV <= eV;) {
          let eV = xV.doc.lineAt(nV);
          if (nV == VV) {
            let xV = eV.number - yV;
            wV += pV * xV + QV * (VV - YV - xV)
          }
          let JV = pV + QV * eV.length;
          UV(new cJ(eV.from, eV.length, wV, JV, 0)), wV += JV, nV = eV.to + 1
        }
      }
      replace(VV, eV, xV) {
        let JV = this.length - eV;
        if (JV > 0) {
          let VV = xV[xV.length - 1];
          VV instanceof uJ ? xV[xV.length - 1] = new uJ(VV.length + JV) : xV.push(null, new uJ(JV - 1))
        }
        if (VV > 0) {
          let eV = xV[0];
          eV instanceof uJ ? xV[0] = new uJ(VV + eV.length) : xV.unshift(new uJ(VV - 1), null)
        }
        return LJ.of(xV)
      }
      decomposeLeft(VV, eV) {
        eV.push(new uJ(VV - 1), null)
      }
      decomposeRight(VV, eV) {
        eV.push(null, new uJ(this.length - VV - 1))
      }
      updateHeight(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          JV = arguments.length > 3 ? arguments[3] : void 0,
          YV = eV + this.length;
        if (JV && JV.from <= eV + this.length && JV.more) {
          let xV = [],
            UV = Math.max(eV, JV.from),
            yV = -1;
          for (JV.from > eV && xV.push(new uJ(JV.from - eV - 1).updateHeight(VV, eV)); UV <= YV && JV.more;) {
            let eV = VV.doc.lineAt(UV).length;
            xV.length && xV.push(null);
            let YV = JV.heights[JV.index++],
              pV = 0;
            YV < 0 && (pV = -YV, YV = JV.heights[JV.index++]), -1 == yV ? yV = YV : Math.abs(YV - yV) >= lJ && (yV = -2);
            let QV = new HJ(eV, YV, pV);
            QV.outdated = !1, xV.push(QV), UV += eV + 1
          }
          UV <= YV && xV.push(null, new uJ(YV - UV).updateHeight(VV, UV));
          let pV = LJ.of(xV);
          return (yV < 0 || Math.abs(pV.height - this.height) >= lJ || Math.abs(yV - this.heightMetrics(VV, eV).perLine) >= lJ) && (iJ = !0), fJ(this, pV)
        }
        return (xV || this.outdated) && (this.setHeight(VV.heightForGap(eV, eV + this.length)), this.outdated = !1), this
      }
      toString() {
        return `gap(${this.length})`
      }
    }
    class sJ extends LJ {
      constructor(VV, eV, xV) {
        super(VV.length + eV + xV.length, VV.height + xV.height, eV | (VV.outdated || xV.outdated ? 2 : 0)), this.left = VV, this.right = xV, this.size = VV.size + xV.size
      }
      get break() {
        return 1 & this.flags
      }
      blockAt(VV, eV, xV, JV) {
        let YV = xV + this.left.height;
        return VV < YV ? this.left.blockAt(VV, eV, xV, JV) : this.right.blockAt(VV, eV, YV, JV + this.left.length + this.break)
      }
      lineAt(VV, eV, xV, JV, YV) {
        let UV = JV + this.left.height,
          yV = YV + this.left.length + this.break,
          pV = eV == hJ.ByHeight ? VV < UV : VV < yV,
          QV = pV ? this.left.lineAt(VV, eV, xV, JV, YV) : this.right.lineAt(VV, eV, xV, UV, yV);
        if (this.break || (pV ? QV.to < yV : QV.from > yV)) return QV;
        let nV = eV == hJ.ByPosNoHeight ? hJ.ByPosNoHeight : hJ.ByPos;
        return pV ? QV.join(this.right.lineAt(yV, nV, xV, UV, yV)) : this.left.lineAt(yV, nV, xV, JV, YV).join(QV)
      }
      forEachLine(VV, eV, xV, JV, YV, UV) {
        let yV = JV + this.left.height,
          pV = YV + this.left.length + this.break;
        if (this.break) VV < pV && this.left.forEachLine(VV, eV, xV, JV, YV, UV), eV >= pV && this.right.forEachLine(VV, eV, xV, yV, pV, UV);
        else {
          let QV = this.lineAt(pV, hJ.ByPos, xV, JV, YV);
          VV < QV.from && this.left.forEachLine(VV, QV.from - 1, xV, JV, YV, UV), QV.to >= VV && QV.from <= eV && UV(QV), eV > QV.to && this.right.forEachLine(QV.to + 1, eV, xV, yV, pV, UV)
        }
      }
      replace(VV, eV, xV) {
        let JV = this.left.length + this.break;
        if (eV < JV) return this.balanced(this.left.replace(VV, eV, xV), this.right);
        if (VV > this.left.length) return this.balanced(this.left, this.right.replace(VV - JV, eV - JV, xV));
        let YV = [];
        VV > 0 && this.decomposeLeft(VV, YV);
        let UV = YV.length;
        for (let yV of xV) YV.push(yV);
        if (VV > 0 && SJ(YV, UV - 1), eV < this.length) {
          let VV = YV.length;
          this.decomposeRight(eV, YV), SJ(YV, VV)
        }
        return LJ.of(YV)
      }
      decomposeLeft(VV, eV) {
        let xV = this.left.length;
        if (VV <= xV) return this.left.decomposeLeft(VV, eV);
        eV.push(this.left), this.break && (xV++, VV >= xV && eV.push(null)), VV > xV && this.right.decomposeLeft(VV - xV, eV)
      }
      decomposeRight(VV, eV) {
        let xV = this.left.length,
          JV = xV + this.break;
        if (VV >= JV) return this.right.decomposeRight(VV - JV, eV);
        VV < xV && this.left.decomposeRight(VV, eV), this.break && VV < JV && eV.push(null), eV.push(this.right)
      }
      balanced(VV, eV) {
        return VV.size > 2 * eV.size || eV.size > 2 * VV.size ? LJ.of(this.break ? [VV, null, eV] : [VV, eV]) : (this.left = fJ(this.left, VV), this.right = fJ(this.right, eV), this.setHeight(VV.height + eV.height), this.outdated = VV.outdated || eV.outdated, this.size = VV.size + eV.size, this.length = VV.length + this.break+eV.length, this)
      }
      updateHeight(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          JV = arguments.length > 3 ? arguments[3] : void 0,
          {
            left: YV,
            right: UV
          } = this,
          yV = eV + YV.length + this.break,
          pV = null;
        return JV && JV.from <= eV + YV.length && JV.more ? pV = YV = YV.updateHeight(VV, eV, xV, JV) : YV.updateHeight(VV, eV, xV), JV && JV.from <= yV + UV.length && JV.more ? pV = UV = UV.updateHeight(VV, yV, xV, JV) : UV.updateHeight(VV, yV, xV), pV ? this.balanced(YV, UV) : (this.height = this.left.height + this.right.height, this.outdated = !1, this)
      }
      toString() {
        return this.left + (this.break ? " " : "-") + this.right
      }
    }

    function SJ(VV, eV) {
      let xV, JV;
      null == VV[eV] && (xV = VV[eV - 1]) instanceof uJ && (JV = VV[eV + 1]) instanceof uJ && VV.splice(eV - 1, 3, new uJ(xV.length + 1 + JV.length))
    }
    class IJ {
      constructor(VV, eV) {
        this.pos = VV, this.oracle = eV, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = VV
      }
      get isCovered() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering
      }
      span(VV, eV) {
        if (this.lineStart > -1) {
          let VV = Math.min(eV, this.lineEnd),
            xV = this.nodes[this.nodes.length - 1];
          xV instanceof HJ ? xV.length += VV - this.pos : (VV > this.pos || !this.isCovered) && this.nodes.push(new HJ(VV - this.pos, -1, 0)), this.writtenTo = VV, eV > VV && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1)
        }
        this.pos = eV
      }
      point(VV, eV, xV) {
        if (VV < eV || xV.heightRelevant) {
          let JV = xV.widget ? xV.widget.estimatedHeight : 0,
            YV = xV.widget ? xV.widget.lineBreaks : 0;
          JV < 0 && (JV = this.oracle.lineHeight);
          let UV = eV - VV;
          xV.block ? this.CxV(new KJ(UV, JV, xV)) : (UV || YV || JV >= 5) && this.addLineDeco(JV, YV, UV)
        } else eV > VV && this.span(VV, eV);
        this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
      }
      enterLine() {
        if (this.lineStart > -1) return;
        let {
          from: VV,
          to: eV
        } = this.oracle.doc.lineAt(this.pos);
        this.lineStart = VV, this.lineEnd = eV, this.writtenTo < VV && ((this.writtenTo < VV - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, VV - 1)), this.nodes.push(null)), this.pos > VV && this.nodes.push(new HJ(this.pos - VV, -1, 0)), this.writtenTo = this.pos
      }
      blankContent(VV, eV) {
        let xV = new uJ(eV - VV);
        return this.oracle.doc.lineAt(VV).to == eV && (xV.flags |= 4), xV
      }
      ensureLine() {
        this.enterLine();
        let VV = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (VV instanceof HJ) return VV;
        let eV = new HJ(0, -1, 0);
        return this.nodes.push(eV), eV
      }
      CxV(VV) {
        this.enterLine();
        let eV = VV.deco;
        eV && eV.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(VV), this.writtenTo = this.pos = this.pos + VV.length, eV && eV.endSide > 0 && (this.covering = VV)
      }
      addLineDeco(VV, eV, xV) {
        let JV = this.ensureLine();
        JV.length += xV, JV.collapsed += xV, JV.widgetHeight = Math.max(JV.widgetHeight, VV), JV.breaks += eV, this.writtenTo = this.pos = this.pos + xV
      }
      finish(VV) {
        let eV = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
        !(this.lineStart > -1) || eV instanceof HJ || this.isCovered ? (this.writtenTo < this.pos || null == eV) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new HJ(0, -1, 0));
        let xV = VV;
        for (let JV of this.nodes) JV instanceof HJ && JV.updateHeight(this.oracle, xV), xV += JV ? JV.length : 1;
        return this.nodes
      }
      static build(VV, eV, xV, YV) {
        let UV = new IJ(xV, VV);
        return JV.x.spans(eV, xV, YV, UV, 0), UV.finish(xV)
      }
    }
    class dJ {
      constructor() {
        this.changes = []
      }
      compareRange() {}
      comparePoint(VV, eV, xV, JV) {
        (VV < eV || xV && xV.heightRelevant || JV && JV.heightRelevant) && aV(VV, eV, this.changes, 5)
      }
    }

    function OJ(VV, eV) {
      let xV = VV.getBoundingClientRect(),
        JV = VV.ownerDocument,
        YV = JV.defaultView || window,
        UV = Math.max(0, xV.left),
        yV = Math.min(YV.innerWidth, xV.right),
        pV = Math.max(0, xV.top),
        QV = Math.min(YV.innerHeight, xV.bottom);
      for (let nV = VV.parentNode; nV && nV != JV.body;)
        if (1 == nV.nodeType) {
          let eV = nV,
            xV = window.getComputedStyle(eV);
          if ((eV.scrollHeight > eV.clientHeight || eV.scrollWidth > eV.clientWidth) && "visible" != xV.overflow) {
            let xV = eV.getBoundingClientRect();
            UV = Math.max(UV, xV.left), yV = Math.min(yV, xV.right), pV = Math.max(pV, xV.top), QV = Math.min(nV == VV.parentNode ? YV.innerHeight : QV, xV.bottom)
          }
          nV = "absolute" == xV.position || "fixed" == xV.position ? eV.offsetParent : eV.parentNode
        } else {
          if (11 != nV.nodeType) break;
          nV = nV.host
        } return {
        left: UV - xV.left,
        right: Math.max(UV, yV) - xV.left,
        top: pV - (xV.top + eV),
        bottom: Math.max(pV, QV) - (xV.top + eV)
      }
    }

    function VY(VV, eV) {
      let xV = VV.getBoundingClientRect();
      return {
        left: 0,
        right: xV.right - xV.left,
        top: eV,
        bottom: xV.bottom - (xV.top + eV)
      }
    }
    class eY {
      constructor(VV, eV, xV, JV) {
        this.from = VV, this.to = eV, this.size = xV, this.displaySize = JV
      }
      static same(VV, eV) {
        if (VV.length != eV.length) return !1;
        for (let xV = 0; xV < VV.length; xV++) {
          let JV = VV[xV],
            YV = eV[xV];
          if (JV.from != YV.from || JV.to != YV.to || JV.size != YV.size) return !1
        }
        return !0
      }
      draw(VV, eV) {
        return RV.replace({
          widget: new xY(this.displaySize * (eV ? VV.scaleY : VV.scaleX), eV)
        }).range(this.from, this.to)
      }
    }
    class xY extends GV {
      constructor(VV, eV) {
        super(), this.size = VV, this.vertical = eV
      }
      eq(VV) {
        return VV.size == this.size && VV.vertical == this.vertical
      }
      toDOM() {
        let VV = document.createElement("div");
        return this.vertical ? VV.style.height = this.size + "px" : (VV.style.width = this.size + "px", VV.style.height = "2px", VV.style.display = "inline-block"), VV
      }
      get estimatedHeight() {
        return this.vertical ? this.size : -1
      }
    }
    class JY {
      constructor(VV, eV) {
        this.view = VV, this.state = eV, this.pixelViewport = {
          left: 0,
          right: window.innerWidth,
          top: 0,
          bottom: 0
        }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = pY, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = ne.LTR, this.reV = [], this.mustEnforceCursorAssoc = !1;
        let xV = eV.facet(Oe).some((VV => "function" != typeof VV && "cm-lineWrapping" == VV.class));
        this.heightOracle = new aJ(xV), this.stateDeco = QY(eV), this.heightMap = LJ.empty().applyChanges(this.stateDeco, JV.H.empty, this.heightOracle.setDoc(eV.doc), [new nx(0, 0, 0, eV.doc.length)]);
        for (let JV = 0; JV < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); JV++);
        this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = RV.set(this.lineGaps.map((VV => VV.draw(this, !1)))), this.scrollParent = VV.scrollDOM, this.computeVisibleRanges()
      }
      updateForViewport() {
        let VV = [this.viewport],
          {
            main: eV
          } = this.state.selection;
        for (let xV = 0; xV <= 1; xV++) {
          let JV = xV ? eV.head : eV.anchor;
          if (!VV.some((VV => {
              let {
                from: eV,
                to: xV
              } = VV;
              return JV >= eV && JV <= xV
            }))) {
            let {
              from: eV,
              to: xV
            } = this.lineBlockAt(JV);
            VV.push(new YY(eV, xV))
          }
        }
        return this.viewports = VV.sort(((VV, eV) => VV.from - eV.from)), this.updateScaler()
      }
      updateScaler() {
        let VV = this.scaler;
        return this.scaler = this.heightMap.height <= 7e6 ? pY : new nY(this.heightOracle, this.heightMap, this.viewports), VV.eq(this.scaler) ? 0 : 2
      }
      updateViewportLines() {
        this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (VV => {
          this.viewportLines.push(wY(VV, this.scaler))
        }))
      }
      update(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.state = VV.state;
        let xV = this.stateDeco;
        this.stateDeco = QY(this.state);
        let YV = VV.changedRanges,
          UV = nx.extendWithRanges(YV, function(VV, eV, xV) {
            let YV = new dJ;
            return JV.x.compare(VV, eV, xV, YV, 0), YV.changes
          }(xV, this.stateDeco, VV ? VV.changes : JV.ChangeSet.empty(this.state.doc.length))),
          yV = this.heightMap.height,
          pV = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
        CJ(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, VV.startState.doc, this.heightOracle.setDoc(this.state.doc), UV), (this.heightMap.height != yV || iJ) && (VV.flags |= 2), pV ? (this.scrollAnchorPos = VV.changes.mapPos(pV.from, -1), this.scrollAnchorHeight = pV.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = yV);
        let QV = UV.length ? this.mapViewport(this.viewport, VV.changes) : this.viewport;
        (eV && (eV.range.head < QV.from || eV.range.head > QV.to) || !this.viewportIsAppropriate(QV)) && (QV = this.getViewport(0, eV));
        let nV = QV.from != this.viewport.from || QV.to != this.viewport.to;
        this.viewport = QV, VV.flags |= this.updateForViewport(), (nV || !VV.changes.empty || 2 & VV.flags) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, VV.changes))), VV.flags |= this.computeVisibleRanges(VV.changes), eV && (this.scrollTarget = eV), !this.mustEnforceCursorAssoc && (VV.selectionSet || VV.focusChanged) && VV.view.lineWrapping && VV.state.selection.main.empty && VV.state.selection.main.assoc && !VV.state.facet(he) && (this.mustEnforceCursorAssoc = !0)
      }
      measure() {
        let {
          view: VV
        } = this, eV = VV.contentDOM, xV = window.getComputedStyle(eV), YV = this.heightOracle, UV = xV.whiteSpace;
        this.defaultTextDirection = "rtl" == xV.direction ? ne.RTL : ne.LTR;
        let yV = this.heightOracle.mustRefreshForWrapping(UV) || "refresh" === this.mustMeasureContent,
          pV = eV.getBoundingClientRect(),
          QV = yV || this.mustMeasureContent || this.contentDOMHeight != pV.height;
        this.contentDOMHeight = pV.height, this.mustMeasureContent = !1;
        let nV = 0,
          wV = 0;
        if (pV.width && pV.height) {
          let {
            scaleX: VV,
            scaleY: xV
          } = IV(eV, pV);
          (VV > .005 && Math.abs(this.scaleX - VV) > .005 || xV > .005 && Math.abs(this.scaleY - xV) > .005) && (this.scaleX = VV, this.scaleY = xV, nV |= 16, yV = QV = !0)
        }
        let ZV = (parseInt(xV.paddingTop) || 0) * this.scaleY,
          vV = (parseInt(xV.paddingBottom) || 0) * this.scaleY;
        this.paddingTop == ZV && this.paddingBottom == vV || (this.paddingTop = ZV, this.paddingBottom = vV, nV |= 18), this.editorWidth != VV.scrollDOM.clientWidth && (YV.lineWrapping && (QV = !0), this.editorWidth = VV.scrollDOM.clientWidth, nV |= 16);
        let rV = dV(this.view.contentDOM, !1).y;
        rV != this.scrollParent && (this.scrollParent = rV, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
        let kV = this.getScrollOffset();
        this.scrollOffset != kV && (this.scrollAnchorHeight = -1, this.scrollOffset = kV), this.scrolledToBottom = Ue(this.scrollParent || VV.win);
        let bV = (this.printing ? VY : OJ)(eV, this.paddingTop),
          EV = bV.top - this.pixelViewport.top,
          BV = bV.bottom - this.pixelViewport.bottom;
        this.pixelViewport = bV;
        let jV = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
        if (jV != this.inView && (this.inView = jV, jV && (QV = !0)), !this.inView && !this.scrollTarget && ! function(VV) {
            let eV = VV.getBoundingClientRect(),
              xV = VV.ownerDocument.defaultView || window;
            return eV.left < xV.innerWidth && eV.right > 0 && eV.top < xV.innerHeight && eV.bottom > 0
          }(VV.dom)) return 0;
        let qV = pV.width;
        if (this.contentDOMWidth == qV && this.editorHeight == VV.scrollDOM.clientHeight || (this.contentDOMWidth = pV.width, this.editorHeight = VV.scrollDOM.clientHeight, nV |= 16), QV) {
          let eV = VV.docView.measureVisibleLineHeights(this.viewport);
          if (YV.mustRefreshForHeights(eV) && (yV = !0), yV || YV.lineWrapping && Math.abs(qV - this.contentDOMWidth) > YV.charWidth) {
            let {
              lineHeight: xV,
              charWidth: JV,
              textHeight: pV
            } = VV.docView.measureTextSize();
            yV = xV > 0 && YV.refresh(UV, xV, JV, pV, Math.max(5, qV / JV), eV), yV && (VV.docView.minWidth = 0, nV |= 16)
          }
          EV > 0 && BV > 0 ? wV = Math.max(EV, BV) : EV < 0 && BV < 0 && (wV = Math.min(EV, BV)), CJ();
          for (let xV of this.viewports) {
            let UV = xV.from == this.viewport.from ? eV : VV.docView.measureVisibleLineHeights(xV);
            this.heightMap = (yV ? LJ.empty().applyChanges(this.stateDeco, JV.H.empty, this.heightOracle, [new nx(0, 0, 0, VV.state.doc.length)]) : this.heightMap).updateHeight(YV, 0, yV, new oJ(xV.from, UV))
          }
          iJ && (nV |= 2)
        }
        let tV = !this.viewportIsAppropriate(this.viewport, wV) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
        return tV && (2 & nV && (nV |= this.updateScaler()), this.viewport = this.getViewport(wV, this.scrollTarget), nV |= this.updateForViewport()), (2 & nV || tV) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(yV ? [] : this.lineGaps, VV)), nV |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, VV.docView.enforceCursorAssoc()), nV
      }
      get visibleTop() {
        return this.scaler.fromDOM(this.pixelViewport.top)
      }
      get visibleBottom() {
        return this.scaler.fromDOM(this.pixelViewport.bottom)
      }
      getViewport(VV, eV) {
        let xV = .5 - Math.max(-.5, Math.min(.5, VV / 1e3 / 2)),
          JV = this.heightMap,
          YV = this.heightOracle,
          {
            visibleTop: UV,
            visibleBottom: yV
          } = this,
          pV = new YY(JV.lineAt(UV - 1e3 * xV, hJ.ByHeight, YV, 0, 0).from, JV.lineAt(yV + 1e3 * (1 - xV), hJ.ByHeight, YV, 0, 0).to);
        if (eV) {
          let {
            head: VV
          } = eV.range;
          if (VV < pV.from || VV > pV.to) {
            let xV, UV = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
              yV = JV.lineAt(VV, hJ.ByPos, YV, 0, 0);
            xV = "center" == eV.y ? (yV.top + yV.bottom) / 2 - UV / 2 : "start" == eV.y || "nearest" == eV.y && VV < pV.from ? yV.top : yV.bottom - UV, pV = new YY(JV.lineAt(xV - 500, hJ.ByHeight, YV, 0, 0).from, JV.lineAt(xV + UV + 500, hJ.ByHeight, YV, 0, 0).to)
          }
        }
        return pV
      }
      mapViewport(VV, eV) {
        let xV = eV.mapPos(VV.from, -1),
          JV = eV.mapPos(VV.to, 1);
        return new YY(this.heightMap.lineAt(xV, hJ.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(JV, hJ.ByPos, this.heightOracle, 0, 0).to)
      }
      viewportIsAppropriate(VV) {
        let {
          from: eV,
          to: xV
        } = VV, JV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!this.inView) return !0;
        let {
          top: YV
        } = this.heightMap.lineAt(eV, hJ.ByPos, this.heightOracle, 0, 0), {
          bottom: UV
        } = this.heightMap.lineAt(xV, hJ.ByPos, this.heightOracle, 0, 0), {
          visibleTop: yV,
          visibleBottom: pV
        } = this;
        return (0 == eV || YV <= yV - Math.max(10, Math.min(-JV, 250))) && (xV == this.state.doc.length || UV >= pV + Math.max(10, Math.min(JV, 250))) && YV > yV - 2e3 && UV < pV + 2e3
      }
      mapLineGaps(VV, eV) {
        if (!VV.length || eV.empty) return VV;
        let xV = [];
        for (let JV of VV) eV.touchesRange(JV.from, JV.to) || xV.push(new eY(eV.mapPos(JV.from), eV.mapPos(JV.to), JV.size, JV.displaySize));
        return xV
      }
      ensureLineGaps(VV, eV) {
        let xV = this.heightOracle.lineWrapping,
          YV = xV ? 1e4 : 2e3,
          UV = YV >> 1,
          yV = YV << 1;
        if (this.defaultTextDirection != ne.LTR && !xV) return [];
        let pV = [],
          QV = (YV, yV, nV, wV) => {
            if (yV - YV < UV) return;
            let ZV = this.state.selection.main,
              vV = [ZV.from];
            ZV.empty || vV.push(ZV.to);
            for (let VV of vV)
              if (VV > YV && VV < yV) return QV(YV, VV - 10, nV, wV), void QV(VV + 10, yV, nV, wV);
            let rV = function(VV, eV) {
              for (let xV of VV)
                if (eV(xV)) return xV;
              return
            }(VV, (VV => VV.from >= nV.from && VV.to <= nV.to && Math.abs(VV.from - YV) < UV && Math.abs(VV.to - yV) < UV && !vV.some((eV => VV.from < eV && VV.to > eV))));
            if (!rV) {
              if (yV < nV.to && eV && xV && eV.reV.some((VV => VV.from <= yV && VV.to >= yV))) {
                let VV = eV.moveToLineBoundary(JV.n.cursor(yV), !1, !0).head;
                VV > YV && (yV = VV)
              }
              let VV = this.gapSize(nV, YV, yV, wV);
              rV = new eY(YV, yV, VV, xV || VV < 2e6 ? VV : 2e6)
            }
            pV.push(rV)
          },
          nV = eV => {
            if (eV.length < yV || eV.type != WV.Text) return;
            let UV = function(VV, eV, xV) {
              let YV = [],
                UV = VV,
                yV = 0;
              JV.x.spans(xV, VV, eV, {
                span() {},
                point(VV, eV) {
                  VV > UV && (YV.push({
                    from: UV,
                    to: VV
                  }), yV += VV - UV), UV = eV
                }
              }, 20), UV < eV && (YV.push({
                from: UV,
                to: eV
              }), yV += eV - UV);
              return {
                total: yV,
                TE: YV
              }
            }(eV.from, eV.to, this.stateDeco);
            if (UV.total < yV) return;
            let pV, nV, wV = this.scrollTarget ? this.scrollTarget.range.head : null;
            if (xV) {
              let VV, xV, JV = YV / this.heightOracle.lineLength * this.heightOracle.lineHeight;
              if (null != wV) {
                let YV = yY(UV, wV),
                  yV = ((this.visibleBottom - this.visibleTop) / 2 + JV) / eV.height;
                VV = YV - yV, xV = YV + yV
              } else VV = (this.visibleTop - eV.top - JV) / eV.height, xV = (this.visibleBottom - eV.top + JV) / eV.height;
              pV = UY(UV, VV), nV = UY(UV, xV)
            } else {
              let xV = UV.total * this.heightOracle.charWidth,
                JV = YV * this.heightOracle.charWidth,
                yV = 0;
              if (xV > 2e6)
                for (let YV of VV) YV.from >= eV.from && YV.from < eV.to && YV.size != YV.displaySize && YV.from * this.heightOracle.charWidth + yV < this.pixelViewport.left && (yV = YV.size - YV.displaySize);
              let QV, ZV, vV = this.pixelViewport.left + yV,
                rV = this.pixelViewport.right + yV;
              if (null != wV) {
                let VV = yY(UV, wV),
                  eV = ((rV - vV) / 2 + JV) / xV;
                QV = VV - eV, ZV = VV + eV
              } else QV = (vV - JV) / xV, ZV = (rV + JV) / xV;
              pV = UY(UV, QV), nV = UY(UV, ZV)
            }
            pV > eV.from && QV(eV.from, pV, eV, UV), nV < eV.to && QV(nV, eV.to, eV, UV)
          };
        for (let JV of this.viewportLines) Array.isArray(JV.type) ? JV.type.forEach(nV) : nV(JV);
        return pV
      }
      gapSize(VV, eV, xV, JV) {
        let YV = yY(JV, xV) - yY(JV, eV);
        return this.heightOracle.lineWrapping ? VV.height * YV : JV.total * this.heightOracle.charWidth * YV
      }
      updateLineGaps(VV) {
        eY.same(VV, this.lineGaps) || (this.lineGaps = VV, this.lineGapDeco = RV.set(VV.map((VV => VV.draw(this, this.heightOracle.lineWrapping)))))
      }
      computeVisibleRanges(VV) {
        let eV = this.stateDeco;
        this.lineGaps.length && (eV = eV.concat(this.lineGapDeco));
        let xV = [];
        JV.x.spans(eV, this.viewport.from, this.viewport.to, {
          span(VV, eV) {
            xV.push({
              from: VV,
              to: eV
            })
          },
          point() {}
        }, 20);
        let YV = 0;
        if (xV.length != this.reV.length) YV = 12;
        else
          for (let JV = 0; JV < xV.length && !(8 & YV); JV++) {
            let eV = this.reV[JV],
              UV = xV[JV];
            eV.from == UV.from && eV.to == UV.to || (YV |= 4, VV && VV.mapPos(eV.from, -1) == UV.from && VV.mapPos(eV.to, 1) == UV.to || (YV |= 8))
          }
        return this.reV = xV, YV
      }
      lineBlockAt(VV) {
        return VV >= this.viewport.from && VV <= this.viewport.to && this.viewportLines.find((eV => eV.from <= VV && eV.to >= VV)) || wY(this.heightMap.lineAt(VV, hJ.ByPos, this.heightOracle, 0, 0), this.scaler)
      }
      lineBlockAtHeight(VV) {
        return VV >= this.viewportLines[0].top && VV <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((eV => eV.top <= VV && eV.bottom >= VV)) || wY(this.heightMap.lineAt(this.scaler.fromDOM(VV), hJ.ByHeight, this.heightOracle, 0, 0), this.scaler)
      }
      getScrollOffset() {
        return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY
      }
      scrollAnchorAt(VV) {
        let eV = this.lineBlockAtHeight(VV + 8);
        return eV.from >= this.viewport.from || this.viewportLines[0].top - VV > 200 ? eV : this.viewportLines[0]
      }
      elementAtHeight(VV) {
        return wY(this.heightMap.blockAt(this.scaler.fromDOM(VV), this.heightOracle, 0, 0), this.scaler)
      }
      get docHeight() {
        return this.scaler.toDOM(this.heightMap.height)
      }
      get contentHeight() {
        return this.docHeight + this.paddingTop + this.paddingBottom
      }
    }
    class YY {
      constructor(VV, eV) {
        this.from = VV, this.to = eV
      }
    }

    function UY(VV, eV) {
      let {
        total: xV,
        TE: JV
      } = VV;
      if (eV <= 0) return JV[0].from;
      if (eV >= 1) return JV[JV.length - 1].to;
      let YV = Math.floor(xV * eV);
      for (let UV = 0;; UV++) {
        let {
          from: VV,
          to: eV
        } = JV[UV], xV = eV - VV;
        if (YV <= xV) return VV + YV;
        YV -= xV
      }
    }

    function yY(VV, eV) {
      let xV = 0;
      for (let {
          from: JV,
          to: YV
        }
        of VV.TE) {
        if (eV <= YV) {
          xV += eV - JV;
          break
        }
        xV += YV - JV
      }
      return xV / VV.total
    }
    const pY = {
      toDOM: VV => VV,
      fromDOM: VV => VV,
      scale: 1,
      eq(VV) {
        return VV == this
      }
    };

    function QY(VV) {
      let eV = VV.facet(Vx).filter((VV => "function" != typeof VV)),
        xV = VV.facet(xx).filter((VV => "function" != typeof VV));
      return xV.length && eV.push(JV.x.join(xV)), eV
    }
    class nY {
      constructor(VV, eV, xV) {
        let JV = 0,
          YV = 0,
          UV = 0;
        this.viewports = xV.map((xV => {
          let {
            from: YV,
            to: UV
          } = xV, yV = eV.lineAt(YV, hJ.ByPos, VV, 0, 0).top, pV = eV.lineAt(UV, hJ.ByPos, VV, 0, 0).bottom;
          return JV += pV - yV, {
            from: YV,
            to: UV,
            top: yV,
            bottom: pV,
            domTop: 0,
            domBottom: 0
          }
        })), this.scale = (7e6 - JV) / (eV.height - JV);
        for (let yV of this.viewports) yV.domTop = UV + (yV.top - YV) * this.scale, UV = yV.domBottom = yV.domTop + (yV.bottom - yV.top), YV = yV.bottom
      }
      toDOM(VV) {
        for (let eV = 0, xV = 0, JV = 0;; eV++) {
          let YV = eV < this.viewports.length ? this.viewports[eV] : null;
          if (!YV || VV < YV.top) return JV + (VV - xV) * this.scale;
          if (VV <= YV.bottom) return YV.domTop + (VV - YV.top);
          xV = YV.bottom, JV = YV.domBottom
        }
      }
      fromDOM(VV) {
        for (let eV = 0, xV = 0, JV = 0;; eV++) {
          let YV = eV < this.viewports.length ? this.viewports[eV] : null;
          if (!YV || VV < YV.domTop) return xV + (VV - JV) / this.scale;
          if (VV <= YV.domBottom) return YV.top + (VV - YV.domTop);
          xV = YV.bottom, JV = YV.domBottom
        }
      }
      eq(VV) {
        return VV instanceof nY && (this.scale == VV.scale && this.viewports.length == VV.viewports.length && this.viewports.every(((eV, xV) => eV.from == VV.viewports[xV].from && eV.to == VV.viewports[xV].to)))
      }
    }

    function wY(VV, eV) {
      if (1 == eV.scale) return VV;
      let xV = eV.toDOM(VV.top),
        JV = eV.toDOM(VV.bottom);
      return new cJ(VV.from, VV.length, xV, JV - xV, Array.isArray(VV._content) ? VV._content.map((VV => wY(VV, eV))) : VV._content)
    }
    const ZY = JV.r.define({
        combine: VV => VV.join(" ")
      }),
      vY = JV.r.define({
        combine: VV => VV.indexOf(!0) > -1
      }),
      rY = YV.d.newName(),
      kY = YV.d.newName(),
      bY = YV.d.newName(),
      EY = {
        "&light": "." + kY,
        "&dark": "." + bY
      };

    function BY(VV, eV, xV) {
      return new YV.d(eV, {
        finish: eV => /&/.test(eV) ? eV.replace(/&\w*/, (eV => {
          if ("&" == eV) return VV;
          if (!xV || !xV[eV]) throw new RangeError(`Unsupported selector: ${eV}`);
          return xV[eV]
        })) : VV + " " + eV
      })
    }
    const jY = BY("." + rY, {
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
      }, EY),
      qY = {
        childList: !0,
        characterData: !0,
        subtree: !0,
        attributes: !0,
        characterDataOldValue: !0
      },
      tY = PV.ie && PV.ie_version <= 11;
    class FY {
      constructor(VV) {
        this.view = VV, this.active = !1, this.editContext = null, this.selectionRange = new OV, this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = VV.contentDOM, this.observer = new MutationObserver((eV => {
          for (let VV of eV) this.queue.push(VV);
          (PV.ie && PV.ie_version <= 11 || PV.ios && VV.composing) && eV.some((VV => "childList" == VV.type && VV.removedNodes.length || "characterData" == VV.type && VV.oldValue.length > VV.target.nodeValue.length)) ? this.flushSoon() : this.flush()
        })), !window.EditContext || !PV.android || !1 === VV.constructor.EDIT_CONTEXT || PV.chrome && PV.chrome_version < 126 || (this.editContext = new AY(VV), VV.state.facet(He) && (VV.contentDOM.editContext = this.editContext.editContext)), tY && (this.onCharData = VV => {
          this.queue.push({
            target: VV.target,
            type: "characterData",
            oldValue: VV.prevValue
          }), this.flushSoon()
        }), this.onSelectionChange = this.onSelectionChange.bind(this), this.hq = this.hq.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver((() => {
          var VV;
          (null === (VV = this.view.docView) || void 0 === VV ? void 0 : VV.lastUpdate) < Date.now() - 75 && this.hq()
        })), this.resizeScroll.observe(VV.scrollDOM)), this.addWindowListeners(this.win = VV.win), this.start(), "function" == typeof IntersectionObserver && (this.intersection = new IntersectionObserver((VV => {
          this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), VV.length > 0 && VV[VV.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")))
        }), {
          threshold: [0, .001]
        }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((VV => {
          VV.length > 0 && VV[VV.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"))
        }), {})), this.listenForScroll(), this.readSelectionRange()
      }
      onScrollChanged(VV) {
        this.view.inputState.runHandlers("scroll", VV), this.intersecting && this.view.measure()
      }
      onScroll(VV) {
        this.intersecting && this.flush(!1), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(VV)
      }
      hq() {
        this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout((() => {
          this.resizeTimeout = -1, this.view.requestMeasure()
        }), 50))
      }
      onPrint(VV) {
        ("change" != VV.type && VV.type || VV.matches) && (this.view.viewState.printing = !0, this.view.measure(), setTimeout((() => {
          this.view.viewState.printing = !1, this.view.requestMeasure()
        }), 500))
      }
      updateGaps(VV) {
        if (this.gapIntersection && (VV.length != this.gaps.length || this.gaps.some(((eV, xV) => eV != VV[xV])))) {
          this.gapIntersection.disconnect();
          for (let eV of VV) this.gapIntersection.observe(eV);
          this.gaps = VV
        }
      }
      onSelectionChange(VV) {
        let eV = this.selectionChanged;
        if (!this.readSelectionRange() || this.delayedAndroidKey) return;
        let {
          view: xV
        } = this, JV = this.selectionRange;
        if (xV.state.facet(He) ? xV.root.activeElement != this.dom : !lV(this.dom, JV)) return;
        let YV = JV.anchorNode && xV.docView.tile.nearest(JV.anchorNode);
        YV && YV.isWidget() && YV.widget.ignoreEvent(VV) ? eV || (this.selectionChanged = !1) : (PV.ie && PV.ie_version <= 11 || PV.android && PV.chrome) && !xV.state.selection.main.empty && JV.focusNode && fV(JV.focusNode, JV.focusOffset, JV.anchorNode, JV.anchorOffset) ? this.flushSoon() : this.flush(!1)
      }
      readSelectionRange() {
        let {
          view: VV
        } = this, eV = cV(VV.root);
        if (!eV) return !1;
        let xV = PV.safari && 11 == VV.root.nodeType && VV.root.activeElement == this.dom && function(VV, eV) {
          if (eV.getComposedRanges) {
            let xV = eV.getComposedRanges(VV.root)[0];
            if (xV) return PY(VV, xV)
          }
          let xV = null;

          function JV(VV) {
            VV.preventDefault(), VV.stopImmediatePropagation(), xV = VV.getTargetRanges()[0]
          }
          return VV.contentDOM.addEventListener("beforeinput", JV, !0), VV.dom.ownerDocument.execCommand("indent"), VV.contentDOM.removeEventListener("beforeinput", JV, !0), xV ? PY(VV, xV) : null
        }(this.view, eV) || eV;
        if (!xV || this.selectionRange.eq(xV)) return !1;
        let JV = lV(this.dom, xV);
        return JV && !this.selectionChanged && VV.inputState.lastFocusTime > Date.now() - 200 && VV.inputState.lastTouchTime < Date.now() - 300 && function(VV, eV) {
          let xV = eV.focusNode,
            JV = eV.focusOffset;
          if (!xV || eV.anchorNode != xV || eV.anchorOffset != JV) return !1;
          for (JV = Math.min(JV, uV(xV));;)
            if (JV) {
              if (1 != xV.nodeType) return !1;
              let VV = xV.childNodes[JV - 1];
              "false" == VV.contentEditable ? JV-- : (xV = VV, JV = uV(xV))
            } else {
              if (xV == VV) return !0;
              JV = mV(xV), xV = xV.parentNode
            }
        }(this.dom, xV) ? (this.view.inputState.lastFocusTime = 0, VV.docView.updateSelection(), !1) : (this.selectionRange.setRange(xV), JV && (this.selectionChanged = !0), !0)
      }
      setSelectionRange(VV, eV) {
        this.selectionRange.set(VV.node, VV.offset, eV.node, eV.offset), this.selectionChanged = !1
      }
      clearSelectionRange() {
        this.selectionRange.set(null, 0, null, 0)
      }
      listenForScroll() {
        this.parentCheck = -1;
        let VV = 0,
          eV = null;
        for (let xV = this.dom; xV;)
          if (1 == xV.nodeType) !eV && VV < this.scrollTargets.length && this.scrollTargets[VV] == xV ? VV++ : eV || (eV = this.scrollTargets.slice(0, VV)), eV && eV.push(xV), xV = xV.assignedSlot || xV.parentNode;
          else {
            if (11 != xV.nodeType) break;
            xV = xV.host
          } if (VV < this.scrollTargets.length && !eV && (eV = this.scrollTargets.slice(0, VV)), eV) {
          for (let VV of this.scrollTargets) VV.removeEventListener("scroll", this.onScroll);
          for (let VV of this.scrollTargets = eV) VV.addEventListener("scroll", this.onScroll)
        }
      }
      ignore(VV) {
        if (!this.active) return VV();
        try {
          return this.stop(), VV()
        } finally {
          this.start(), this.clear()
        }
      }
      start() {
        this.active || (this.observer.observe(this.dom, qY), tY && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0)
      }
      stop() {
        this.active && (this.active = !1, this.observer.disconnect(), tY && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData))
      }
      clear() {
        this.processRecords(), this.queue.length = 0, this.selectionChanged = !1
      }
      delayAndroidKey(VV, eV) {
        var xV;
        if (!this.delayedAndroidKey) {
          let VV = () => {
            let VV = this.delayedAndroidKey;
            if (VV) {
              this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = VV.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && VV.force && Ye(this.dom, VV.key, VV.keyCode)
            }
          };
          this.flushingAndroidKey = this.view.win.requestAnimationFrame(VV)
        }
        this.delayedAndroidKey && "Enter" != VV || (this.delayedAndroidKey = {
          key: VV,
          keyCode: eV,
          force: this.lastChange < Date.now() - 50 || !!(null === (xV = this.delayedAndroidKey) || void 0 === xV ? void 0 : xV.force)
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
        for (let VV of this.observer.takeRecords()) this.queue.push(VV);
        return this.queue
      }
      processRecords() {
        let VV = this.pendingRecords();
        VV.length && (this.queue = []);
        let eV = -1,
          xV = -1,
          JV = !1;
        for (let YV of VV) {
          let VV = this.readMutation(YV);
          VV && (VV.typeOver && (JV = !0), -1 == eV ? ({
            from: eV,
            to: xV
          } = VV) : (eV = Math.min(VV.from, eV), xV = Math.max(VV.to, xV)))
        }
        return {
          from: eV,
          to: xV,
          typeOver: JV
        }
      }
      readChange() {
        let {
          from: VV,
          to: eV,
          typeOver: xV
        } = this.processRecords(), JV = this.selectionChanged && lV(this.dom, this.selectionRange);
        if (VV < 0 && !JV) return null;
        VV > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
        let YV = new xJ(this.view, VV, eV, xV);
        return this.view.docView.domChanged = {
          newSel: YV.newSel ? YV.newSel.main : null
        }, YV
      }
      flush() {
        let VV = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
        VV && this.readSelectionRange();
        let eV = this.readChange();
        if (!eV) return this.view.requestMeasure(), !1;
        let xV = this.view.state,
          JV = YJ(this.view, eV);
        return this.view.state == xV && (eV.domChanged || eV.newSel && !pJ(this.view.state.selection, eV.newSel.main)) && this.view.update([]), JV
      }
      readMutation(VV) {
        let eV = this.view.docView.tile.nearest(VV.target);
        if (!eV || eV.isWidget()) return null;
        if (eV.markDirty("attributes" == VV.type), "childList" == VV.type) {
          let xV = TY(eV, VV.previousSibling || VV.target.previousSibling, -1),
            JV = TY(eV, VV.nextSibling || VV.target.nextSibling, 1);
          return {
            from: xV ? eV.posAfter(xV) : eV.posAtStart,
            to: JV ? eV.posBefore(JV) : eV.posAtEnd,
            typeOver: !1
          }
        }
        return "characterData" == VV.type ? {
          from: eV.posAtStart,
          to: eV.posAtEnd,
          typeOver: VV.target.nodeValue == VV.oldValue
        } : null
      }
      setWindow(VV) {
        VV != this.win && (this.removeWindowListeners(this.win), this.win = VV, this.addWindowListeners(this.win))
      }
      addWindowListeners(VV) {
        VV.addEventListener("resize", this.hq), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : VV.addEventListener("beforeprint", this.onPrint), VV.addEventListener("scroll", this.onScroll), VV.document.addEventListener("selectionchange", this.onSelectionChange)
      }
      removeWindowListeners(VV) {
        VV.removeEventListener("scroll", this.onScroll), VV.removeEventListener("resize", this.hq), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : VV.removeEventListener("beforeprint", this.onPrint), VV.document.removeEventListener("selectionchange", this.onSelectionChange)
      }
      update(VV) {
        this.editContext && (this.editContext.update(VV), VV.startState.facet(He) != VV.state.facet(He) && (VV.view.contentDOM.editContext = VV.state.facet(He) ? this.editContext.editContext : null))
      }
      destroy() {
        var VV, eV, xV;
        this.stop(), null === (VV = this.intersection) || void 0 === VV || VV.disconnect(), null === (eV = this.gapIntersection) || void 0 === eV || eV.disconnect(), null === (xV = this.resizeScroll) || void 0 === xV || xV.disconnect();
        for (let JV of this.scrollTargets) JV.removeEventListener("scroll", this.onScroll);
        this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy())
      }
    }

    function TY(VV, eV, xV) {
      for (; eV;) {
        let JV = vx.get(eV);
        if (JV && JV.parent == VV) return JV;
        let YV = eV.parentNode;
        eV = YV != VV.dom ? YV : xV > 0 ? eV.nextSibling : eV.previousSibling
      }
      return null
    }

    function PY(VV, eV) {
      let xV = eV.startContainer,
        JV = eV.startOffset,
        YV = eV.endContainer,
        UV = eV.endOffset,
        yV = VV.docView.domAtPos(VV.state.selection.main.anchor, 1);
      return fV(yV.node, yV.offset, YV, UV) && ([xV, JV, YV, UV] = [YV, UV, xV, JV]), {
        anchorNode: xV,
        anchorOffset: JV,
        focusNode: YV,
        focusOffset: UV
      }
    }
    class AY {
      constructor(VV) {
        this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = Object.create(null), this.composing = null, this.resetRange(VV.state);
        let eV = this.editContext = new window.EditContext({
          text: VV.state.doc.sliceString(this.from, this.to),
          selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, VV.state.selection.main.anchor))),
          selectionEnd: this.toContextPos(VV.state.selection.main.head)
        });
        this.handlers.textupdate = xV => {
          let YV = VV.state.selection.main,
            {
              anchor: UV,
              head: yV
            } = YV,
            pV = this.toEditorPos(xV.updateRangeStart),
            QV = this.toEditorPos(xV.updateRangeEnd);
          VV.inputState.composing >= 0 && !this.composing && (this.composing = {
            contextBase: xV.updateRangeStart,
            editorBase: pV,
            drifted: !1
          });
          let nV = QV - pV > xV.text.length;
          pV == this.from && UV < this.from ? pV = UV : QV == this.to && UV > this.to && (QV = UV);
          let wV = yJ(VV.state.sliceDoc(pV, QV), xV.text, (nV ? YV.from : YV.to) - pV, nV ? "end" : null);
          if (!wV) {
            let eV = JV.n.single(this.toEditorPos(xV.selectionStart), this.toEditorPos(xV.selectionEnd));
            return void(pJ(eV, YV) || VV.dispatch({
              selection: eV,
              userEvent: "select"
            }))
          }
          let ZV = {
            from: wV.from + pV,
            to: wV.toA + pV,
            insert: JV.H.of(xV.text.slice(wV.from, wV.toB).split("\n"))
          };
          if ((PV.mac || PV.android) && ZV.from == yV - 1 && /^\. ?$/.test(xV.text) && "off" == VV.contentDOM.getAttribute("autocorrect") && (ZV = {
              from: pV,
              to: QV,
              insert: JV.H.of([xV.text.replace(".", " ")])
            }), this.pendingContextChange = ZV, !VV.state.readOnly) {
            let eV = this.to - this.from + (ZV.to - ZV.from + ZV.insert.length);
            UJ(VV, ZV, JV.n.single(this.toEditorPos(xV.selectionStart, eV), this.toEditorPos(xV.selectionEnd, eV)))
          }
          this.pendingContextChange && (this.revertPending(VV.state), this.setSelection(VV.state)), ZV.from < ZV.to && !ZV.insert.length && VV.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(eV.text.slice(Math.max(0, xV.updateRangeStart - 1), Math.min(eV.text.length, xV.updateRangeStart + 1))) && this.handlers.compositionend(xV)
        }, this.handlers.characterboundsupdate = xV => {
          let JV = [],
            YV = null;
          for (let eV = this.toEditorPos(xV.rangeStart), UV = this.toEditorPos(xV.rangeEnd); eV < UV; eV++) {
            let xV = VV.coordsForChar(eV);
            YV = xV && new DOMRect(xV.left, xV.top, xV.right - xV.left, xV.bottom - xV.top) || YV || new DOMRect, JV.push(YV)
          }
          eV.updateCharacterBounds(xV.rangeStart, JV)
        }, this.handlers.textformatupdate = eV => {
          let xV = [];
          for (let VV of eV.getTextFormats()) {
            let eV = VV.underlineStyle,
              JV = VV.underlineThickness;
            if (!/none/i.test(eV) && !/none/i.test(JV)) {
              let YV = this.toEditorPos(VV.rangeStart),
                UV = this.toEditorPos(VV.rangeEnd);
              if (YV < UV) {
                let VV = `text-decoration: underline ${/^[a-z]/.test(eV)?eV+" ":"Dashed"==eV?"dashed ":"Squiggle"==eV?"wavy ":""}${/thin/i.test(JV)?1:2}px`;
                xV.push(RV.mark({
                  attributes: {
                    style: VV
                  }
                }).range(YV, UV))
              }
            }
          }
          VV.dispatch({
            effects: me.of(RV.set(xV))
          })
        }, this.handlers.compositionstart = () => {
          VV.inputState.composing < 0 && (VV.inputState.composing = 0, VV.inputState.compositionFirstChange = !0)
        }, this.handlers.compositionend = () => {
          if (VV.inputState.composing = -1, VV.inputState.compositionFirstChange = null, this.composing) {
            let {
              drifted: eV
            } = this.composing;
            this.composing = null, eV && this.reset(VV.state)
          }
        };
        for (let xV in this.handlers) eV.addEventListener(xV, this.handlers[xV]);
        this.measureReq = {
          read: VV => {
            this.editContext.updateControlBounds(VV.contentDOM.getBoundingClientRect());
            let eV = cV(VV.root);
            eV && eV.rangeCount && this.editContext.updateSelectionBounds(eV.getRangeAt(0).getBoundingClientRect())
          }
        }
      }
      applyEdits(VV) {
        let eV = 0,
          xV = !1,
          JV = this.pendingContextChange;
        return VV.changes.iterChanges(((YV, UV, yV, pV, QV) => {
          if (xV) return;
          let nV = QV.length - (UV - YV);
          if (JV && UV >= JV.to) {
            if (JV.from == YV && JV.to == UV && JV.insert.eq(QV)) return JV = this.pendingContextChange = null, eV += nV, void(this.to += nV);
            JV = null, this.revertPending(VV.state)
          }
          if (YV += eV, (UV += eV) <= this.from) this.from += nV, this.to += nV;
          else if (YV < this.to) {
            if (YV < this.from || UV > this.to || this.to - this.from + QV.length > 3e4) return void(xV = !0);
            this.editContext.updateText(this.toContextPos(YV), this.toContextPos(UV), QV.toString()), this.to += nV
          }
          eV += nV
        })), JV && !xV && this.revertPending(VV.state), !xV
      }
      update(VV) {
        let eV = this.pendingContextChange,
          xV = VV.startState.selection.main;
        this.composing && (this.composing.drifted || !VV.changes.touchesRange(xV.from, xV.to) && VV.transactions.some((VV => !VV.isUserEvent("input.type") && VV.changes.touchesRange(this.from, this.to)))) ? (this.composing.drifted = !0, this.composing.editorBase = VV.changes.mapPos(this.composing.editorBase)) : this.applyEdits(VV) && this.rangeIsValid(VV.state) ? (VV.docChanged || VV.selectionSet || eV) && this.setSelection(VV.state) : (this.pendingContextChange = null, this.reset(VV.state)), (VV.geometryChanged || VV.docChanged || VV.selectionSet) && VV.view.requestMeasure(this.measureReq)
      }
      resetRange(VV) {
        let {
          head: eV
        } = VV.selection.main;
        this.from = Math.max(0, eV - 1e4), this.to = Math.min(VV.doc.length, eV + 1e4)
      }
      reset(VV) {
        this.resetRange(VV), this.editContext.updateText(0, this.editContext.text.length, VV.doc.sliceString(this.from, this.to)), this.setSelection(VV)
      }
      revertPending(VV) {
        let eV = this.pendingContextChange;
        this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(eV.from), this.toContextPos(eV.from + eV.insert.length), VV.doc.sliceString(eV.from, eV.to))
      }
      setSelection(VV) {
        let {
          main: eV
        } = VV.selection, xV = this.toContextPos(Math.max(this.from, Math.min(this.to, eV.anchor))), JV = this.toContextPos(eV.head);
        this.editContext.selectionStart == xV && this.editContext.selectionEnd == JV || this.editContext.updateSelection(xV, JV)
      }
      rangeIsValid(VV) {
        let {
          head: eV
        } = VV.selection.main;
        return !(this.from > 0 && eV - this.from < 500 || this.to < VV.doc.length && this.to - eV < 500 || this.to - this.from > 3e4)
      }
      toEditorPos(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.to - this.from;
        VV = Math.min(VV, eV);
        let xV = this.composing;
        return xV && xV.drifted ? xV.editorBase + (VV - xV.contextBase) : VV + this.from
      }
      toContextPos(VV) {
        let eV = this.composing;
        return eV && eV.drifted ? eV.contextBase + (VV - eV.editorBase) : VV - this.from
      }
      destroy() {
        for (let VV in this.handlers) this.editContext.removeEventListener(VV, this.handlers[VV])
      }
    }
    class NY {
      get state() {
        return this.viewState.state
      }
      get viewport() {
        return this.viewState.viewport
      }
      get reV() {
        return this.viewState.reV
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
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var eV;
        this.plugins = [], this.pluginMap = new Map, this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), VV.parent && VV.parent.appendChild(this.dom);
        let {
          dispatch: xV
        } = VV;
        this.dispatchTransactions = VV.dispatchTransactions || xV && (VV => VV.forEach((VV => xV(VV, this)))) || (VV => this.update(VV)), this.dispatch = this.dispatch.bind(this), this._root = VV.root || function(VV) {
          for (; VV;) {
            if (VV && (9 == VV.nodeType || 11 == VV.nodeType && VV.host)) return VV;
            VV = VV.assignedSlot || VV.parentNode
          }
          return null
        }(VV.parent) || document, this.viewState = new JY(this, VV.state || JV.q.create(VV)), VV.scrollTo && VV.scrollTo.is(fe) && (this.viewState.scrollTarget = VV.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(se).map((VV => new Ie(VV)));
        for (let JV of this.plugins) JV.update(this);
        this.observer = new FY(this), this.inputState = new QJ(this), this.inputState.ensureHandlers(this.plugins), this.docView = new Cx(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), (null === (eV = document.fonts) || void 0 === eV ? void 0 : eV.ready) && document.fonts.ready.then((() => {
          this.viewState.mustMeasureContent = "refresh", this.requestMeasure()
        }))
      }
      dispatch() {
        for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
        let YV = 1 == eV.length && eV[0] instanceof JV.J ? eV : 1 == eV.length && Array.isArray(eV[0]) ? eV[0] : [this.state.update(...eV)];
        this.dispatchTransactions(YV, this)
      }
      update(VV) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        let eV, xV = !1,
          YV = !1,
          UV = this.state;
        for (let JV of VV) {
          if (JV.startState != UV) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
          UV = JV.state
        }
        if (this.destroyed) return void(this.viewState.state = UV);
        let yV = this.hasFocus,
          pV = 0,
          QV = null;
        VV.some((VV => VV.annotation(GJ))) ? (this.inputState.notifiedFocused = yV, pV = 1) : yV != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = yV, QV = WJ(UV, yV), QV || (pV = 1));
        let nV = this.observer.delayedAndroidKey,
          wV = null;
        if (nV ? (this.observer.clearDelayedAndroidKey(), wV = this.observer.readChange(), (wV && !this.state.doc.eq(UV.doc) || !this.state.selection.eq(UV.selection)) && (wV = null)) : this.observer.clear(), UV.facet(JV.q.phrases) != this.state.facet(JV.q.phrases)) return this.setState(UV);
        eV = wx.create(this, UV, VV), eV.flags |= pV;
        let ZV = this.viewState.scrollTarget;
        try {
          this.updateState = 2;
          for (let eV of VV) {
            if (ZV && (ZV = ZV.map(eV.changes)), eV.scrollIntoView) {
              let {
                main: VV
              } = eV.state.selection, {
                x: xV,
                y: YV
              } = this.state.facet(NY.cursorScrollMargin);
              ZV = new Le(VV.empty ? VV : JV.n.cursor(VV.head, VV.head > VV.anchor ? -1 : 1), "nearest", "nearest", YV, xV)
            }
            for (let VV of eV.effects) VV.is(fe) && (ZV = VV.value.clip(this.state))
          }
          this.viewState.update(eV, ZV), this.bidiCache = zY.update(this.bidiCache, eV.changes), eV.empty || (this.updatePlugins(eV), this.inputState.update(eV)), xV = this.docView.update(eV), this.state.facet(Qx) != this.styleModules && this.mountStyles(), YV = this.updateAttrs(), this.showAnnouncements(VV), this.docView.updateSelection(xV, VV.some((VV => VV.isUserEvent("select.pointer"))))
        } finally {
          this.updateState = 0
        }
        if (eV.startState.facet(ZY) != eV.state.facet(ZY) && (this.viewState.mustMeasureContent = !0), (xV || YV || ZV || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), xV && this.docViewUpdate(), !eV.empty)
          for (let JV of this.state.facet(De)) try {
            JV(eV)
          } catch (vV) {
            Ke(this.state, vV, "update listener")
          }(QV || wV) && Promise.resolve().then((() => {
            QV && this.state == QV.startState && this.dispatch(QV), wV && !YJ(this, wV) && nV.force && Ye(this.contentDOM, nV.key, nV.keyCode)
          }))
      }
      setState(VV) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
        if (this.destroyed) return void(this.viewState.state = VV);
        this.updateState = 2;
        let eV = this.hasFocus;
        try {
          for (let VV of this.plugins) VV.destroy(this);
          this.viewState = new JY(this, VV), this.plugins = VV.facet(se).map((VV => new Ie(VV))), this.pluginMap.clear();
          for (let VV of this.plugins) VV.update(this);
          this.docView.destroy(), this.docView = new Cx(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = []
        } finally {
          this.updateState = 0
        }
        eV && this.focus(), this.requestMeasure()
      }
      updatePlugins(VV) {
        let eV = VV.startState.facet(se),
          xV = VV.state.facet(se);
        if (eV != xV) {
          let JV = [];
          for (let YV of xV) {
            let xV = eV.indexOf(YV);
            if (xV < 0) JV.push(new Ie(YV));
            else {
              let eV = this.plugins[xV];
              eV.mustUpdate = VV, JV.push(eV)
            }
          }
          for (let eV of this.plugins) eV.mustUpdate != VV && eV.destroy(this);
          this.plugins = JV, this.pluginMap.clear()
        } else
          for (let JV of this.plugins) JV.mustUpdate = VV;
        for (let JV = 0; JV < this.plugins.length; JV++) this.plugins[JV].update(this);
        eV != xV && this.inputState.ensureHandlers(this.plugins)
      }
      docViewUpdate() {
        for (let eV of this.plugins) {
          let xV = eV.value;
          if (xV && xV.docViewUpdate) try {
            xV.docViewUpdate(this)
          } catch (VV) {
            Ke(this.state, VV, "doc view update listener")
          }
        }
      }
      measure() {
        let VV = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.destroyed) return;
        if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) return this.measureScheduled = -1, void this.requestMeasure();
        this.measureScheduled = 0, VV && this.observer.forceFlush();
        let eV = null,
          xV = this.viewState.scrollParent,
          JV = this.viewState.getScrollOffset(),
          {
            scrollAnchorPos: YV,
            scrollAnchorHeight: UV
          } = this.viewState;
        Math.abs(JV - this.viewState.scrollOffset) > 1 && (UV = -1), this.viewState.scrollAnchorHeight = -1;
        try {
          for (let VV = 0;; VV++) {
            if (UV < 0)
              if (Ue(xV || this.win)) YV = -1, UV = this.viewState.heightMap.height;
              else {
                let VV = this.viewState.scrollAnchorAt(JV);
                YV = VV.from, UV = VV.top
              } this.updateState = 1;
            let pV = this.viewState.measure();
            if (!pV && !this.measureRequests.length && null == this.viewState.scrollTarget) break;
            if (VV > 5) {
              console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
              break
            }
            let QV = [];
            4 & pV || ([this.measureRequests, QV] = [QV, this.measureRequests]);
            let nV = QV.map((VV => {
                try {
                  return VV.read(this)
                } catch (eV) {
                  return Ke(this.state, eV), MY
                }
              })),
              wV = wx.create(this, this.state, []),
              ZV = !1;
            wV.flags |= pV, eV ? eV.flags |= pV : eV = wV, this.updateState = 2, wV.empty || (this.updatePlugins(wV), this.inputState.update(wV), this.updateAttrs(), ZV = this.docView.update(wV), ZV && this.docViewUpdate());
            for (let VV = 0; VV < QV.length; VV++)
              if (nV[VV] != MY) try {
                let eV = QV[VV];
                eV.write && eV.write(nV[VV], this)
              } catch (yV) {
                Ke(this.state, yV)
              }
            if (ZV && this.docView.updateSelection(!0), !wV.viewportChanged && 0 == this.measureRequests.length) {
              if (this.viewState.editorHeight) {
                if (this.viewState.scrollTarget) {
                  this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, UV = -1;
                  continue
                } {
                  let VV = ((YV < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(YV).top) - UV) / this.scaleY;
                  if ((VV > 1 || VV < -1) && (xV == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                    JV += VV, xV ? xV.scrollTop += VV : this.win.scrollBy(0, VV), UV = -1;
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
        if (eV && !eV.empty)
          for (let pV of this.state.facet(De)) pV(eV)
      }
      get themeClasses() {
        return rY + " " + (this.state.facet(vY) ? bY : kY) + " " + this.state.facet(ZY)
      }
      updateAttrs() {
        let VV = GY(this, de, {
            class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
          }),
          eV = {
            spellcheck: "false",
            autocorrect: "off",
            autocapitalize: "off",
            writingsuggestions: "false",
            translate: "no",
            contenteditable: this.state.facet(He) ? "true" : "false",
            class: "cm-content",
            style: `${PV.tabSize}: ${this.state.tabSize}`,
            role: "textbox",
            "aria-multiline": "true"
          };
        this.state.readOnly && (eV["aria-readonly"] = "true"), GY(this, Oe, eV);
        let xV = this.observer.ignore((() => {
          let xV = MV(this.contentDOM, this.contentAttrs, eV),
            JV = MV(this.dom, this.editorAttrs, VV);
          return xV || JV
        }));
        return this.editorAttrs = VV, this.contentAttrs = eV, xV
      }
      showAnnouncements(VV) {
        let eV = !0;
        for (let xV of VV)
          for (let VV of xV.effects)
            if (VV.is(NY.announce)) {
              eV && (this.announceDOM.textContent = ""), eV = !1, this.announceDOM.appendChild(document.createElement("div")).textContent = VV.value
            }
      }
      mountStyles() {
        this.styleModules = this.state.facet(Qx);
        let VV = this.state.facet(NY.cspNonce);
        YV.d.mount(this.root, this.styleModules.concat(jY).reverse(), VV ? {
          nonce: VV
        } : void 0)
      }
      readMeasured() {
        if (2 == this.updateState) throw new Error("Reading the editor layout isn't allowed during an update");
        0 == this.updateState && this.measureScheduled > -1 && this.measure(!1)
      }
      requestMeasure(VV) {
        if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame((() => this.measure()))), VV) {
          if (this.measureRequests.indexOf(VV) > -1) return;
          if (null != VV.key)
            for (let eV = 0; eV < this.measureRequests.length; eV++)
              if (this.measureRequests[eV].key === VV.key) return void(this.measureRequests[eV] = VV);
          this.measureRequests.push(VV)
        }
      }
      plugin(VV) {
        let eV = this.pluginMap.get(VV);
        return (void 0 === eV || eV && eV.plugin != VV) && this.pluginMap.set(VV, eV = this.plugins.find((eV => eV.plugin == VV)) || null), eV && eV.update(this).value
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
      elementAtHeight(VV) {
        return this.readMeasured(), this.viewState.elementAtHeight(VV)
      }
      lineBlockAtHeight(VV) {
        return this.readMeasured(), this.viewState.lineBlockAtHeight(VV)
      }
      get viewportLineBlocks() {
        return this.viewState.viewportLines
      }
      lineBlockAt(VV) {
        return this.viewState.lineBlockAt(VV)
      }
      get contentHeight() {
        return this.viewState.contentHeight
      }
      moveByChar(VV, eV, xV) {
        return Hx(this, VV, fx(this, VV, eV, xV))
      }
      moveByGroup(VV, eV) {
        return Hx(this, VV, fx(this, VV, eV, (eV => function(VV, eV, xV) {
          let YV = VV.state.charCategorizer(eV),
            UV = YV(xV);
          return VV => {
            let eV = YV(VV);
            return UV == JV.k.Space && (UV = eV), UV == eV
          }
        }(this, VV.head, eV))))
      }
      visualLineSide(VV, eV) {
        let xV = this.bidiSpans(VV),
          YV = this.textDirectionAt(VV.from),
          UV = xV[eV ? xV.length - 1 : 0];
        return JV.n.cursor(UV.side(eV, YV) + VV.from, UV.forward(!eV, YV) ? 1 : -1)
      }
      moveToLineBoundary(VV, eV) {
        return function(VV, eV, xV, YV) {
          let UV = Lx(VV, eV.head, eV.assoc || -1),
            yV = YV && UV.type == WV.Text && (VV.lineWrapping || UV.widgetLineBreaks) ? VV.coordsAtPos(eV.assoc < 0 && eV.head > UV.from ? eV.head - 1 : eV.head) : null;
          if (yV) {
            let eV = VV.dom.getBoundingClientRect(),
              YV = VV.textDirectionAt(UV.from),
              pV = VV.posAtCoords({
                x: xV == (YV == ne.LTR) ? eV.right - 1 : eV.left + 1,
                y: (yV.top + yV.bottom) / 2
              });
            if (null != pV) return JV.n.cursor(pV, xV ? -1 : 1)
          }
          return JV.n.cursor(xV ? UV.to : UV.from, xV ? -1 : 1)
        }(this, VV, eV, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2])
      }
      moveVertically(VV, eV, xV) {
        return Hx(this, VV, function(VV, eV, xV, YV) {
          let UV = eV.head,
            yV = xV ? 1 : -1;
          if (UV == (xV ? VV.state.doc.length : 0)) return JV.n.cursor(UV, eV.assoc);
          let pV, QV = eV.goalColumn,
            nV = VV.contentDOM.getBoundingClientRect(),
            wV = VV.coordsAtPos(UV, eV.assoc || ((eV.empty ? xV : eV.head == eV.from) ? 1 : -1)),
            ZV = VV.documentTop;
          if (wV) null == QV && (QV = wV.left - nV.left), pV = yV < 0 ? wV.top : wV.bottom;
          else {
            let eV = VV.viewState.lineBlockAt(UV);
            null == QV && (QV = Math.min(nV.right - nV.left, VV.defaultCharacterWidth * (UV - eV.from))), pV = (yV < 0 ? eV.top : eV.bottom) + ZV
          }
          let vV = nV.left + QV,
            rV = VV.viewState.heightOracle.textHeight >> 1,
            kV = null !== YV && void 0 !== YV ? YV : rV;
          for (let bV = 0;; bV += rV) {
            let eV = pV + (kV + bV) * yV,
              YV = sx(VV, {
                x: vV,
                y: eV
              }, !1, yV);
            if (xV ? eV > nV.bottom : eV < nV.top) return JV.n.cursor(YV.pos, YV.assoc);
            let UV = VV.coordsAtPos(YV.pos, YV.assoc),
              wV = UV ? (UV.top + UV.bottom) / 2 : 0;
            if (!UV || (xV ? wV > pV : wV < pV)) return JV.n.cursor(YV.pos, YV.assoc, void 0, QV)
          }
        }(this, VV, eV, xV))
      }
      domAtPos(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return this.docView.domAtPos(VV, eV)
      }
      posAtDOM(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.docView.posFromDOM(VV, eV)
      }
      posAtCoords(VV) {
        let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this.readMeasured();
        let xV = sx(this, VV, eV);
        return xV && xV.pos
      }
      posAndSideAtCoords(VV) {
        let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return this.readMeasured(), sx(this, VV, eV)
      }
      coordsAtPos(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.readMeasured();
        let xV = this.docView.coordsAt(VV, eV);
        if (!xV || xV.left == xV.right) return xV;
        let JV = this.state.doc.lineAt(VV),
          YV = this.bidiSpans(JV);
        return sV(xV, YV[qe.find(YV, VV - JV.from, -1, eV)].dir == ne.LTR == eV > 0)
      }
      coordsForChar(VV) {
        return this.readMeasured(), this.docView.coordsForChar(VV)
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
      textDirectionAt(VV) {
        return !this.state.facet(ce) || VV < this.viewport.from || VV > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(VV))
      }
      get lineWrapping() {
        return this.viewState.heightOracle.lineWrapping
      }
      bidiSpans(VV) {
        if (VV.length > XY) return Ne(VV.length);
        let eV, xV = this.textDirectionAt(VV.from);
        for (let YV of this.bidiCache)
          if (YV.from == VV.from && YV.dir == xV && (YV.fresh || te(YV.isolates, eV = Ux(this, VV)))) return YV.order;
        eV || (eV = Ux(this, VV));
        let JV = Ae(VV.text, xV, eV);
        return this.bidiCache.push(new zY(VV.from, VV.to, xV, eV, !0, JV)), JV
      }
      get hasFocus() {
        var VV;
        return (this.dom.ownerDocument.hasFocus() || PV.safari && (null === (VV = this.inputState) || void 0 === VV ? void 0 : VV.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM
      }
      focus() {
        this.observer.ignore((() => {
          xe(this.contentDOM), this.docView.updateSelection()
        }))
      }
      setRoot(VV) {
        this._root != VV && (this._root = VV, this.observer.setWindow((9 == VV.nodeType ? VV : VV.ownerDocument).defaultView || window), this.mountStyles())
      }
      destroy() {
        this.root.activeElement == this.contentDOM && this.contentDOM.blur();
        for (let VV of this.plugins) VV.destroy(this);
        this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0
      }
      static scrollIntoView(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var xV, YV, UV, yV;
        return fe.of(new Le("number" == typeof VV ? JV.n.cursor(VV) : VV, null !== (xV = eV.y) && void 0 !== xV ? xV : "nearest", null !== (YV = eV.x) && void 0 !== YV ? YV : "nearest", null !== (UV = eV.yMargin) && void 0 !== UV ? UV : 5, null !== (yV = eV.xMargin) && void 0 !== yV ? yV : 5))
      }
      scrollSnapshot() {
        let {
          scrollTop: VV,
          scrollLeft: eV
        } = this.scrollDOM, xV = this.viewState.scrollAnchorAt(VV);
        return fe.of(new Le(JV.n.cursor(xV.from), "start", "start", xV.top - VV, eV, !0))
      }
      setTabFocusMode(VV) {
        null == VV ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof VV ? this.inputState.tabFocusMode = VV ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + VV)
      }
      static domEventHandlers(VV) {
        return Se.define((() => ({})), {
          eventHandlers: VV
        })
      }
      static domEventObservers(VV) {
        return Se.define((() => ({})), {
          eventObservers: VV
        })
      }
      static theme(VV, eV) {
        let xV = YV.d.newName(),
          JV = [ZY.of(xV), Qx.of(BY(`.${xV}`, VV))];
        return eV && eV.dark && JV.push(vY.of(!0)), JV
      }
      static baseTheme(VV) {
        return JV.u.lowest(Qx.of(BY("." + rY, VV, EY)))
      }
      static findFromDOM(VV) {
        var eV;
        let xV = VV.querySelector(".cm-content"),
          JV = xV && vx.get(xV) || vx.get(VV);
        return (null === (eV = null === JV || void 0 === JV ? void 0 : JV.root) || void 0 === eV ? void 0 : eV.view) || null
      }
    }
    NY.styleModule = Qx, NY.inputHandler = ie, NY.clipboardInputFilter = ae, NY.clipboardOutputFilter = oe, NY.scrollHandler = le, NY.focusChangeEffect = Ce, NY.perLineTextDirection = ce, NY.exceptionSink = ge, NY.updateListener = De, NY.editable = He, NY.mouseSelectionStyle = Re, NY.dragMovesSelection = We, NY.clickAddsSelectionRange = Ge, NY.JU = Vx, NY.blockWrappers = ex, NY.outerDecorations = xx, NY.atomicRanges = Jx, NY.bidiIsolatedRanges = Yx, NY.cursorScrollMargin = JV.r.define({
      combine: VV => {
        let eV = 5,
          xV = 5;
        for (let JV of VV) "number" == typeof JV ? eV = xV = JV : ({
          x: eV,
          y: xV
        } = JV);
        return {
          x: eV,
          y: xV
        }
      }
    }), NY.scrollMargins = yx, NY.darkTheme = vY, NY.cspNonce = JV.r.define({
      combine: VV => VV.length ? VV[0] : ""
    }), NY.contentAttributes = Oe, NY.editorAttributes = de, NY.lineWrapping = NY.contentAttributes.of({
      class: "cm-lineWrapping"
    }), NY.announce = JV.C.define();
    const XY = 4096,
      MY = {};
    class zY {
      constructor(VV, eV, xV, JV, YV, UV) {
        this.from = VV, this.to = eV, this.dir = xV, this.isolates = JV, this.fresh = YV, this.order = UV
      }
      static update(VV, eV) {
        if (eV.empty && !VV.some((VV => VV.fresh))) return VV;
        let xV = [],
          JV = VV.length ? VV[VV.length - 1].dir : ne.LTR;
        for (let YV = Math.max(0, VV.length - 10); YV < VV.length; YV++) {
          let UV = VV[YV];
          UV.dir != JV || eV.touchesRange(UV.from, UV.to) || xV.push(new zY(eV.mapPos(UV.from, 1), eV.mapPos(UV.to, -1), UV.dir, UV.isolates, !1, UV.order))
        }
        return xV
      }
    }

    function GY(VV, eV, xV) {
      for (let JV = VV.state.facet(eV), YV = JV.length - 1; YV >= 0; YV--) {
        let eV = JV[YV],
          UV = "function" == typeof eV ? eV(VV) : eV;
        UV && AV(UV, xV)
      }
      return xV
    }
    const WY = PV.mac ? "mac" : PV.windows ? "win" : PV.linux ? "linux" : "key";

    function RY(VV, eV, xV) {
      return eV.altKey && (VV = "Alt-" + VV), eV.ctrlKey && (VV = "Ctrl-" + VV), eV.metaKey && (VV = "Meta-" + VV), !1 !== xV && eV.shiftKey && (VV = "Shift-" + VV), VV
    }
    const gY = JV.u.default(NY.domEventHandlers({
        keydown: (VV, eV) => lY(CY(eV.state), VV, eV, "editor")
      })),
      DY = JV.r.define({
        enables: gY
      }),
      iY = new WeakMap;

    function CY(VV) {
      let eV = VV.facet(DY),
        xV = iY.get(eV);
      return xV || iY.set(eV, xV = function(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WY,
          xV = Object.create(null),
          JV = Object.create(null),
          YV = (VV, eV) => {
            let xV = JV[VV];
            if (null == xV) JV[VV] = eV;
            else if (xV != eV) throw new Error("Key binding " + VV + " is used both as a regular binding and as a multi-stroke prefix")
          },
          UV = (VV, JV, UV, yV, pV) => {
            var QV, nV;
            let wV = xV[VV] || (xV[VV] = Object.create(null)),
              ZV = JV.split(/ (?!$)/).map((VV => function(VV, eV) {
                const xV = VV.split(/-(?!$)/);
                let JV, YV, UV, yV, pV = xV[xV.length - 1];
                "Space" == pV && (pV = " ");
                for (let QV = 0; QV < xV.length - 1; ++QV) {
                  const VV = xV[QV];
                  if (/^(cmd|meta|m)$/i.test(VV)) yV = !0;
                  else if (/^a(lt)?$/i.test(VV)) JV = !0;
                  else if (/^(c|ctrl|control)$/i.test(VV)) YV = !0;
                  else if (/^s(hift)?$/i.test(VV)) UV = !0;
                  else {
                    if (!/^mod$/i.test(VV)) throw new Error("Unrecognized modifier name: " + VV);
                    "mac" == eV ? yV = !0 : YV = !0
                  }
                }
                return JV && (pV = "Alt-" + pV), YV && (pV = "Ctrl-" + pV), yV && (pV = "Meta-" + pV), UV && (pV = "Shift-" + pV), pV
              }(VV, eV)));
            for (let eV = 1; eV < ZV.length; eV++) {
              let xV = ZV.slice(0, eV).join(" ");
              YV(xV, !0), wV[xV] || (wV[xV] = {
                preventDefault: !0,
                stopPropagation: !1,
                run: [eV => {
                  let JV = oY = {
                    view: eV,
                    prefix: xV,
                    scope: VV
                  };
                  return setTimeout((() => {
                    oY == JV && (oY = null)
                  }), cY), !0
                }]
              })
            }
            let vV = ZV.join(" ");
            YV(vV, !1);
            let rV = wV[vV] || (wV[vV] = {
              preventDefault: !1,
              stopPropagation: !1,
              run: (null === (nV = null === (QV = wV._any) || void 0 === QV ? void 0 : QV.run) || void 0 === nV ? void 0 : nV.slice()) || []
            });
            UV && rV.run.push(UV), yV && (rV.preventDefault = !0), pV && (rV.stopPropagation = !0)
          };
        for (let yV of VV) {
          let VV = yV.scope ? yV.scope.split(" ") : ["editor"];
          if (yV.any)
            for (let eV of VV) {
              let VV = xV[eV] || (xV[eV] = Object.create(null));
              VV._any || (VV._any = {
                preventDefault: !1,
                stopPropagation: !1,
                run: []
              });
              let {
                any: JV
              } = yV;
              for (let eV in VV) VV[eV].run.push((VV => JV(VV, hY)))
            }
          let JV = yV[eV] || yV.key;
          if (JV)
            for (let eV of VV) UV(eV, JV, yV.run, yV.preventDefault, yV.stopPropagation), yV.shift && UV(eV, "Shift-" + JV, yV.shift, yV.preventDefault, yV.stopPropagation)
        }
        return xV
      }(eV.reduce(((VV, eV) => VV.concat(eV)), []))), xV
    }

    function aY(VV, eV, xV) {
      return lY(CY(VV.state), eV, VV, xV)
    }
    let oY = null;
    const cY = 4e3;
    let hY = null;

    function lY(VV, eV, xV, YV) {
      hY = eV;
      let nV = function(VV) {
          var eV = !(pV && VV.metaKey && VV.shiftKey && !VV.ctrlKey && !VV.altKey || QV && VV.shiftKey && VV.key && 1 == VV.key.length || "Unidentified" == VV.key) && VV.key || (VV.shiftKey ? yV : UV)[VV.keyCode] || VV.key || "Unidentified";
          return "Esc" == eV && (eV = "Escape"), "Del" == eV && (eV = "Delete"), "Left" == eV && (eV = "ArrowLeft"), "Up" == eV && (eV = "ArrowUp"), "Right" == eV && (eV = "ArrowRight"), "Down" == eV && (eV = "ArrowDown"), eV
        }(eV),
        wV = (0, JV.N)(nV, 0),
        ZV = (0, JV.R)(wV) == nV.length && " " != nV,
        vV = "",
        rV = !1,
        kV = !1,
        bV = !1;
      oY && oY.view == xV && oY.scope == YV && (vV = oY.prefix + " ", rJ.indexOf(eV.keyCode) < 0 && (kV = !0, oY = null));
      let EV, BV, jV = new Set,
        qV = VV => {
          if (VV) {
            for (let eV of VV.run)
              if (!jV.has(eV) && (jV.add(eV), eV(xV))) return VV.stopPropagation && (bV = !0), !0;
            VV.preventDefault && (VV.stopPropagation && (bV = !0), kV = !0)
          }
          return !1
        },
        tV = VV[YV];
      return tV && (qV(tV[vV + RY(nV, eV, !ZV)]) ? rV = !0 : !ZV || !(eV.altKey || eV.metaKey || eV.ctrlKey) || PV.windows && eV.ctrlKey && eV.altKey || PV.mac && eV.altKey && !eV.ctrlKey && !eV.metaKey || !(EV = UV[eV.keyCode]) || EV == nV ? ZV && eV.shiftKey && qV(tV[vV + RY(nV, eV, !0)]) && (rV = !0) : (qV(tV[vV + RY(EV, eV, !0)]) || eV.shiftKey && (BV = yV[eV.keyCode]) != nV && BV != EV && qV(tV[vV + RY(BV, eV, !1)])) && (rV = !0), !rV && qV(tV._any) && (rV = !0)), kV && (rV = !0), rV && bV && eV.stopPropagation(), hY = null, rV
    }
    class LY {
      constructor(VV, eV, xV, JV, YV) {
        this.className = VV, this.left = eV, this.top = xV, this.width = JV, this.height = YV
      }
      draw() {
        let VV = document.createElement("div");
        return VV.className = this.className, this.adjust(VV), VV
      }
      update(VV, eV) {
        return eV.className == this.className && (this.adjust(VV), !0)
      }
      adjust(VV) {
        VV.style.left = this.left + "px", VV.style.top = this.top + "px", null != this.width && (VV.style.width = this.width + "px"), VV.style.height = this.height + "px"
      }
      eq(VV) {
        return this.left == VV.left && this.top == VV.top && this.width == VV.width && this.height == VV.height && this.className == VV.className
      }
      static forRange(VV, eV, xV) {
        if (xV.empty) {
          let JV = VV.coordsAtPos(xV.head, xV.assoc || 1);
          if (!JV) return [];
          let YV = fY(VV);
          return [new LY(eV, JV.left - YV.left, JV.top - YV.top, null, JV.bottom - JV.top)]
        }
        return function(VV, eV, xV) {
          if (xV.to <= VV.viewport.from || xV.from >= VV.viewport.to) return [];
          let JV = Math.max(xV.from, VV.viewport.from),
            YV = Math.min(xV.to, VV.viewport.to),
            UV = VV.textDirection == ne.LTR,
            yV = VV.contentDOM,
            pV = yV.getBoundingClientRect(),
            QV = fY(VV),
            nV = yV.querySelector(".cm-line"),
            wV = nV && window.getComputedStyle(nV),
            ZV = pV.left + (wV ? parseInt(wV.paddingLeft) + Math.min(0, parseInt(wV.textIndent)) : 0),
            vV = pV.right - (wV ? parseInt(wV.paddingRight) : 0),
            rV = Lx(VV, JV, 1),
            kV = Lx(VV, YV, -1),
            bV = rV.type == WV.Text ? rV : null,
            EV = kV.type == WV.Text ? kV : null;
          bV && (VV.lineWrapping || rV.widgetLineBreaks) && (bV = mY(VV, JV, 1, bV));
          EV && (VV.lineWrapping || kV.widgetLineBreaks) && (EV = mY(VV, YV, -1, EV));
          if (bV && EV && bV.from == EV.from && bV.to == EV.to) return jV(qV(xV.from, xV.to, bV));
          {
            let eV = bV ? qV(xV.from, null, bV) : tV(rV, !1),
              JV = EV ? qV(null, xV.to, EV) : tV(kV, !0),
              YV = [];
            return (bV || rV).to < (EV || kV).from - (bV && EV ? 1 : 0) || rV.widgetLineBreaks > 1 && eV.bottom + VV.defaultLineHeight / 2 < JV.top ? YV.push(BV(ZV, eV.bottom, vV, JV.top)) : eV.bottom < JV.top && VV.elementAtHeight((eV.bottom + JV.top) / 2).type == WV.Text && (eV.bottom = JV.top = (eV.bottom + JV.top) / 2), jV(eV).concat(YV).concat(jV(JV))
          }

          function BV(VV, xV, JV, YV) {
            return new LY(eV, VV - QV.left, xV - QV.top, Math.max(0, JV - VV), YV - xV)
          }

          function jV(VV) {
            let {
              top: eV,
              bottom: xV,
              horizontal: JV
            } = VV, YV = [];
            for (let UV = 0; UV < JV.length; UV += 2) YV.push(BV(JV[UV], eV, JV[UV + 1], xV));
            return YV
          }

          function qV(eV, xV, JV) {
            let YV = 1e9,
              yV = -1e9,
              pV = [];

            function QV(eV, xV, QV, nV, wV) {
              let rV = VV.coordsAtPos(eV, eV == JV.to ? -2 : 2),
                kV = VV.coordsAtPos(QV, QV == JV.from ? 2 : -2);
              rV && kV && (YV = Math.min(rV.top, kV.top, YV), yV = Math.max(rV.bottom, kV.bottom, yV), wV == ne.LTR ? pV.push(UV && xV ? ZV : rV.left, UV && nV ? vV : kV.right) : pV.push(!UV && nV ? ZV : kV.left, !UV && xV ? vV : rV.right))
            }
            let nV = null !== eV && void 0 !== eV ? eV : JV.from,
              wV = null !== xV && void 0 !== xV ? xV : JV.to;
            for (let UV of VV.reV)
              if (UV.to > nV && UV.from < wV)
                for (let JV = Math.max(UV.from, nV), YV = Math.min(UV.to, wV);;) {
                  let UV = VV.state.doc.lineAt(JV);
                  for (let yV of VV.bidiSpans(UV)) {
                    let VV = yV.from + UV.from,
                      pV = yV.to + UV.from;
                    if (VV >= YV) break;
                    pV > JV && QV(Math.max(VV, JV), null == eV && VV <= nV, Math.min(pV, YV), null == xV && pV >= wV, yV.dir)
                  }
                  if (JV = UV.to + 1, JV >= YV) break
                }
            return 0 == pV.length && QV(nV, null == eV, wV, null == xV, VV.textDirection), {
              top: YV,
              bottom: yV,
              horizontal: pV
            }
          }

          function tV(VV, eV) {
            let xV = pV.top + (eV ? VV.top : VV.bottom);
            return {
              top: xV,
              bottom: xV,
              horizontal: []
            }
          }
        }(VV, eV, xV)
      }
    }

    function fY(VV) {
      let eV = VV.scrollDOM.getBoundingClientRect();
      return {
        left: (VV.textDirection == ne.LTR ? eV.left : eV.right - VV.scrollDOM.clientWidth * VV.scaleX) - VV.scrollDOM.scrollLeft * VV.scaleX,
        top: eV.top - VV.scrollDOM.scrollTop * VV.scaleY
      }
    }

    function mY(VV, eV, xV, JV) {
      let YV = VV.coordsAtPos(eV, 2 * xV);
      if (!YV) return JV;
      let UV = VV.dom.getBoundingClientRect(),
        yV = (YV.top + YV.bottom) / 2,
        pV = VV.posAtCoords({
          x: UV.left + 1,
          y: yV
        }),
        QV = VV.posAtCoords({
          x: UV.right - 1,
          y: yV
        });
      return null == pV || null == QV ? JV : {
        from: Math.max(JV.from, Math.min(pV, QV)),
        to: Math.min(JV.to, Math.max(pV, QV))
      }
    }
    class KY {
      constructor(VV, eV) {
        this.view = VV, this.layer = eV, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
          read: this.measure.bind(this),
          write: this.draw.bind(this)
        }, this.dom = VV.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), eV.above && this.dom.classList.add("cm-layer-above"), eV.class && this.dom.classList.add(eV.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(VV.state), VV.requestMeasure(this.measureReq), eV.mount && eV.mount(this.dom, VV)
      }
      update(VV) {
        VV.startState.facet(HY) != VV.state.facet(HY) && this.setOrder(VV.state), (this.layer.update(VV, this.dom) || VV.geometryChanged) && (this.scale(), VV.view.requestMeasure(this.measureReq))
      }
      docViewUpdate(VV) {
        !1 !== this.layer.updateOnDocViewUpdate && VV.requestMeasure(this.measureReq)
      }
      setOrder(VV) {
        let eV = 0,
          xV = VV.facet(HY);
        for (; eV < xV.length && xV[eV] != this.layer;) eV++;
        this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - eV)
      }
      measure() {
        return this.layer.markers(this.view)
      }
      scale() {
        let {
          scaleX: VV,
          scaleY: eV
        } = this.view;
        VV == this.scaleX && eV == this.scaleY || (this.scaleX = VV, this.scaleY = eV, this.dom.style.transform = `scale(${1/VV}, ${1/eV})`)
      }
      draw(VV) {
        if (VV.length != this.drawn.length || VV.some(((VV, eV) => {
            return xV = VV, JV = this.drawn[eV], !(xV.constructor == JV.constructor && xV.eq(JV));
            var xV, JV
          }))) {
          let eV = this.dom.firstChild,
            xV = 0;
          for (let JV of VV) JV.update && eV && JV.constructor && this.drawn[xV].constructor && JV.update(eV, this.drawn[xV]) ? (eV = eV.nextSibling, xV++) : this.dom.insertBefore(JV.draw(), eV);
          for (; eV;) {
            let VV = eV.nextSibling;
            eV.remove(), eV = VV
          }
          this.drawn = VV, PV.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none")
        }
      }
      destroy() {
        this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove()
      }
    }
    const HY = JV.r.define();

    function uY(VV) {
      return [Se.define((eV => new KY(eV, VV))), HY.of(VV)]
    }
    const sY = JV.r.define({
      combine: VV => (0, JV.T)(VV, {
        cursorBlinkRate: 1200,
        drawRangeCursor: !0,
        iosSelectionHandles: !0
      }, {
        cursorBlinkRate: (VV, eV) => Math.min(VV, eV),
        drawRangeCursor: (VV, eV) => VV || eV
      })
    });

    function SY() {
      let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [sY.of(VV), dY, VU, eU, he.of(!0)]
    }

    function IY(VV) {
      return VV.startState.facet(sY) != VV.state.facet(sY)
    }
    const dY = uY({
      above: !0,
      markers(VV) {
        let {
          state: eV
        } = VV, xV = eV.facet(sY), YV = [];
        for (let UV of eV.selection.TE) {
          let yV = UV == eV.selection.main;
          if (UV.empty || xV.drawRangeCursor && !(yV && PV.ios && xV.iosSelectionHandles)) {
            let eV = yV ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary",
              xV = UV.empty ? UV : JV.n.cursor(UV.head, UV.assoc);
            for (let JV of LY.forRange(VV, eV, xV)) YV.push(JV)
          }
        }
        return YV
      },
      update(VV, eV) {
        VV.transactions.some((VV => VV.selection)) && (eV.style.animationName = "cm-blink" == eV.style.animationName ? "cm-blink2" : "cm-blink");
        let xV = IY(VV);
        return xV && OY(VV.state, eV), VV.docChanged || VV.selectionSet || xV
      },
      mount(VV, eV) {
        OY(eV.state, VV)
      },
      class: "cm-cursorLayer"
    });

    function OY(VV, eV) {
      eV.style.animationDuration = VV.facet(sY).cursorBlinkRate + "ms"
    }
    const VU = uY({
        above: !1,
        markers(VV) {
          let eV = [],
            {
              main: xV,
              TE: YV
            } = VV.state.selection;
          for (let JV of YV)
            if (!JV.empty)
              for (let xV of LY.forRange(VV, "cm-selectionBackground", JV)) eV.push(xV);
          if (PV.ios && !xV.empty && VV.state.facet(sY).iosSelectionHandles) {
            for (let YV of LY.forRange(VV, "cm-selectionHandle cm-selectionHandle-start", JV.n.cursor(xV.from, 1))) eV.push(YV);
            for (let YV of LY.forRange(VV, "cm-selectionHandle cm-selectionHandle-end", JV.n.cursor(xV.to, 1))) eV.push(YV)
          }
          return eV
        },
        update: (VV, eV) => VV.docChanged || VV.selectionSet || VV.viewportChanged || IY(VV),
        class: "cm-selectionLayer"
      }),
      eU = JV.u.highest(NY.theme({
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
      xU = JV.C.define({
        map: (VV, eV) => null == VV ? null : eV.mapPos(VV)
      }),
      JU = JV.E.define({
        create: () => null,
        update: (VV, eV) => (null != VV && (VV = eV.changes.mapPos(VV)), eV.effects.reduce(((VV, eV) => eV.is(xU) ? eV.value : VV), VV))
      }),
      YU = Se.fromClass(class {
        constructor(VV) {
          this.view = VV, this.cursor = null, this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawCursor.bind(this)
          }
        }
        update(VV) {
          var eV;
          let xV = VV.state.field(JU);
          null == xV ? null != this.cursor && (null === (eV = this.cursor) || void 0 === eV || eV.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (VV.startState.field(JU) != xV || VV.docChanged || VV.geometryChanged) && this.view.requestMeasure(this.measureReq))
        }
        readPos() {
          let {
            view: VV
          } = this, eV = VV.state.field(JU), xV = null != eV && VV.coordsAtPos(eV);
          if (!xV) return null;
          let JV = VV.scrollDOM.getBoundingClientRect();
          return {
            left: xV.left - JV.left + VV.scrollDOM.scrollLeft * VV.scaleX,
            top: xV.top - JV.top + VV.scrollDOM.scrollTop * VV.scaleY,
            height: xV.bottom - xV.top
          }
        }
        drawCursor(VV) {
          if (this.cursor) {
            let {
              scaleX: eV,
              scaleY: xV
            } = this.view;
            VV ? (this.cursor.style.left = VV.left / eV + "px", this.cursor.style.top = VV.top / xV + "px", this.cursor.style.height = VV.height / xV + "px") : this.cursor.style.left = "-100000px"
          }
        }
        destroy() {
          this.cursor && this.cursor.remove()
        }
        setDropPos(VV) {
          this.view.state.field(JU) != VV && this.view.dispatch({
            effects: xU.of(VV)
          })
        }
      }, {
        eventObservers: {
          dragover(VV) {
            this.setDropPos(this.view.posAtCoords({
              x: VV.clientX,
              y: VV.clientY
            }))
          },
          dragleave(VV) {
            VV.target != this.view.contentDOM && this.view.contentDOM.contains(VV.relatedTarget) || this.setDropPos(null)
          },
          dragend() {
            this.setDropPos(null)
          },
          drop() {
            this.setDropPos(null)
          }
        }
      });

    function UU() {
      return [JU, YU]
    }

    function yU(VV, eV, xV, JV, YV) {
      eV.lastIndex = 0;
      for (let UV, yV = VV.iterRange(xV, JV), pV = xV; !yV.next().done; pV += yV.value.length)
        if (!yV.lineBreak)
          for (; UV = eV.exec(yV.value);) YV(pV + UV.index, UV)
    }
    class pU {
      constructor(VV) {
        const {
          regexp: eV,
          decoration: xV,
          decorate: JV,
          boundary: YV,
          maxLength: UV = 1e3
        } = VV;
        if (!eV.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
        if (this.regexp = eV, JV) this.addMatch = (VV, eV, xV, YV) => JV(YV, xV, xV + VV[0].length, VV, eV);
        else if ("function" == typeof xV) this.addMatch = (VV, eV, JV, YV) => {
          let UV = xV(VV, eV, JV);
          UV && YV(JV, JV + VV[0].length, UV)
        };
        else {
          if (!xV) throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
          this.addMatch = (VV, eV, JV, YV) => YV(JV, JV + VV[0].length, xV)
        }
        this.boundary = YV, this.maxLength = UV
      }
      createDeco(VV) {
        let eV = new JV.w,
          xV = eV.add.bind(eV);
        for (let {
            from: JV,
            to: YV
          }
          of
          function(VV, eV) {
            let xV = VV.reV;
            if (1 == xV.length && xV[0].from == VV.viewport.from && xV[0].to == VV.viewport.to) return xV;
            let JV = [];
            for (let {
                from: YV,
                to: UV
              }
              of xV) YV = Math.max(VV.state.doc.lineAt(YV).from, YV - eV), UV = Math.min(VV.state.doc.lineAt(UV).to, UV + eV), JV.length && JV[JV.length - 1].to >= YV ? JV[JV.length - 1].to = UV : JV.push({
              from: YV,
              to: UV
            });
            return JV
          }(VV, this.maxLength)) yU(VV.state.doc, this.regexp, JV, YV, ((eV, JV) => this.addMatch(JV, VV, eV, xV)));
        return eV.finish()
      }
      updateDeco(VV, eV) {
        let xV = 1e9,
          JV = -1;
        return VV.docChanged && VV.changes.iterChanges(((eV, YV, UV, yV) => {
          yV >= VV.view.viewport.from && UV <= VV.view.viewport.to && (xV = Math.min(UV, xV), JV = Math.max(yV, JV))
        })), VV.viewportMoved || JV - xV > 1e3 ? this.createDeco(VV.view) : JV > -1 ? this.updateRange(VV.view, eV.map(VV.changes), xV, JV) : eV
      }
      updateRange(VV, eV, xV, JV) {
        for (let YV of VV.reV) {
          let UV = Math.max(YV.from, xV),
            yV = Math.min(YV.to, JV);
          if (yV >= UV) {
            let xV = VV.state.doc.lineAt(UV),
              JV = xV.to < yV ? VV.state.doc.lineAt(yV) : xV,
              pV = Math.max(YV.from, xV.from),
              QV = Math.min(YV.to, JV.to);
            if (this.boundary) {
              for (; UV > xV.from; UV--)
                if (this.boundary.test(xV.text[UV - 1 - xV.from])) {
                  pV = UV;
                  break
                } for (; yV < JV.to; yV++)
                if (this.boundary.test(JV.text[yV - JV.from])) {
                  QV = yV;
                  break
                }
            }
            let nV, wV = [],
              ZV = (VV, eV, xV) => wV.push(xV.range(VV, eV));
            if (xV == JV)
              for (this.regexp.lastIndex = pV - xV.from;
                (nV = this.regexp.exec(xV.text)) && nV.index < QV - xV.from;) this.addMatch(nV, VV, nV.index + xV.from, ZV);
            else yU(VV.state.doc, this.regexp, pV, QV, ((eV, xV) => this.addMatch(xV, VV, eV, ZV)));
            eV = eV.update({
              filterFrom: pV,
              filterTo: QV,
              filter: (VV, eV) => VV < pV || eV > QV,
              add: wV
            })
          }
        }
        return eV
      }
    }
    const QU = null != /x/.unicode ? "gu" : "g",
      nU = new RegExp("[\0-\b\n-\x1f\x7f-\x9f\xad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]", QU),
      wU = {
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
    let ZU = null;
    const vU = JV.r.define({
      combine(VV) {
        let eV = (0, JV.T)(VV, {
          render: null,
          specialChars: nU,
          addSpecialChars: null
        });
        return (eV.replaceTabs = ! function() {
          var VV;
          if (null == ZU && "undefined" != typeof document && document.body) {
            let eV = document.body.style;
            ZU = null != (null !== (VV = eV.tabSize) && void 0 !== VV ? VV : eV.MozTabSize)
          }
          return ZU || !1
        }()) && (eV.specialChars = new RegExp("\t|" + eV.specialChars.source, QU)), eV.addSpecialChars && (eV.specialChars = new RegExp(eV.specialChars.source + "|" + eV.addSpecialChars.source, QU)), eV
      }
    });

    function rU() {
      let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [vU.of(VV), kU || (kU = Se.fromClass(class {
        constructor(VV) {
          this.view = VV, this.JU = RV.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(VV.state.facet(vU)), this.JU = this.decorator.createDeco(VV)
        }
        makeDecorator(VV) {
          return new pU({
            regexp: VV.specialChars,
            decoration: (eV, xV, YV) => {
              let {
                doc: UV
              } = xV.state, yV = (0, JV.N)(eV[0], 0);
              if (9 == yV) {
                let VV = UV.lineAt(YV),
                  eV = xV.state.tabSize,
                  yV = (0, JV.W)(VV.text, eV, YV - VV.from);
                return RV.replace({
                  widget: new EU((eV - yV % eV) * this.view.defaultCharacterWidth / this.view.scaleX)
                })
              }
              return this.decorationCache[yV] || (this.decorationCache[yV] = RV.replace({
                widget: new bU(VV, yV)
              }))
            },
            boundary: VV.replaceTabs ? void 0 : /[^]/
          })
        }
        update(VV) {
          let eV = VV.state.facet(vU);
          VV.startState.facet(vU) != eV ? (this.decorator = this.makeDecorator(eV), this.JU = this.decorator.createDeco(VV.view)) : this.JU = this.decorator.updateDeco(VV, this.JU)
        }
      }, {
        JU: VV => VV.JU
      }))]
    }
    let kU = null;
    class bU extends GV {
      constructor(VV, eV) {
        super(), this.options = VV, this.code = eV
      }
      eq(VV) {
        return VV.code == this.code
      }
      toDOM(VV) {
        let eV = function(VV) {
            return VV >= 32 ? "\u2022" : 10 == VV ? "\u2424" : String.fromCharCode(9216 + VV)
          }(this.code),
          xV = VV.state.phrase("Control character") + " " + (wU[this.code] || "0x" + this.code.toString(16)),
          JV = this.options.render && this.options.render(this.code, xV, eV);
        if (JV) return JV;
        let YV = document.createElement("span");
        return YV.textContent = eV, YV.title = xV, YV.setAttribute("aria-label", xV), YV.className = "cm-specialChar", YV
      }
      ignoreEvent() {
        return !1
      }
    }
    class EU extends GV {
      constructor(VV) {
        super(), this.width = VV
      }
      eq(VV) {
        return VV.width == this.width
      }
      toDOM() {
        let VV = document.createElement("span");
        return VV.textContent = "\t", VV.className = "cm-tab", VV.style.width = this.width + "px", VV
      }
      ignoreEvent() {
        return !1
      }
    }

    function BU() {
      return qU
    }
    const jU = RV.line({
        class: "cm-activeLine"
      }),
      qU = Se.fromClass(class {
        constructor(VV) {
          this.JU = this.getDeco(VV)
        }
        update(VV) {
          (VV.docChanged || VV.selectionSet) && (this.JU = this.getDeco(VV.view))
        }
        getDeco(VV) {
          let eV = -1,
            xV = [];
          for (let JV of VV.state.selection.TE) {
            let YV = VV.lineBlockAt(JV.head);
            YV.from > eV && (xV.push(jU.range(YV.from)), eV = YV.from)
          }
          return RV.set(xV)
        }
      }, {
        JU: VV => VV.JU
      });
    class tU extends GV {
      constructor(VV) {
        super(), this.content = VV
      }
      toDOM(VV) {
        let eV = document.createElement("span");
        return eV.className = "cm-placeholder", eV.style.pointerEvents = "none", eV.appendChild("string" == typeof this.content ? document.createTextNode(this.content) : "function" == typeof this.content ? this.content(VV) : this.content.cloneNode(!0)), eV.setAttribute("aria-hidden", "true"), eV
      }
      coordsAt(VV) {
        let eV = VV.firstChild ? LV(VV.firstChild) : [];
        if (!eV.length) return null;
        let xV = window.getComputedStyle(VV.parentNode),
          JV = sV(eV[0], "rtl" != xV.direction),
          YV = parseInt(xV.lineHeight);
        return JV.bottom - JV.top > 1.5 * YV ? {
          left: JV.left,
          right: JV.right,
          top: JV.top,
          bottom: JV.top + YV
        } : JV
      }
      ignoreEvent() {
        return !1
      }
    }

    function FU(VV) {
      let eV = Se.fromClass(class {
        constructor(eV) {
          this.view = eV, this.placeholder = VV ? RV.set([RV.widget({
            widget: new tU(VV),
            side: 1
          }).range(0)]) : RV.none
        }
        get JU() {
          return this.view.state.doc.length ? RV.none : this.placeholder
        }
      }, {
        JU: VV => VV.JU
      });
      return "string" == typeof VV ? [eV, NY.contentAttributes.of({
        "aria-placeholder": VV
      })] : eV
    }
    const TU = 2e3;

    function PU(VV, eV) {
      let xV = VV.posAtCoords({
          x: eV.clientX,
          y: eV.clientY
        }, !1),
        YV = VV.state.doc.lineAt(xV),
        UV = xV - YV.from,
        yV = UV > TU ? -1 : UV == YV.length ? function(VV, eV) {
          let xV = VV.coordsAtPos(VV.viewport.from);
          return xV ? Math.round(Math.abs((xV.left - eV) / VV.defaultCharacterWidth)) : -1
        }(VV, eV.clientX) : (0, JV.W)(YV.text, VV.state.tabSize, xV - YV.from);
      return {
        line: YV.number,
        col: yV,
        off: UV
      }
    }

    function AU(VV, eV) {
      let xV = PU(VV, eV),
        YV = VV.state.selection;
      return xV ? {
        update(VV) {
          if (VV.docChanged) {
            let eV = VV.changes.mapPos(VV.startState.doc.line(xV.line).from),
              JV = VV.state.doc.lineAt(eV);
            xV = {
              line: JV.number,
              col: xV.col,
              off: Math.min(xV.off, JV.length)
            }, YV = YV.map(VV.changes)
          }
        },
        get(eV, UV, yV) {
          let pV = PU(VV, eV);
          if (!pV) return YV;
          let QV = function(VV, eV, xV) {
            let YV = Math.min(eV.line, xV.line),
              UV = Math.max(eV.line, xV.line),
              yV = [];
            if (eV.off > TU || xV.off > TU || eV.col < 0 || xV.col < 0) {
              let pV = Math.min(eV.off, xV.off),
                QV = Math.max(eV.off, xV.off);
              for (let eV = YV; eV <= UV; eV++) {
                let xV = VV.doc.line(eV);
                xV.length <= QV && yV.push(JV.n.range(xV.from + pV, xV.to + QV))
              }
            } else {
              let pV = Math.min(eV.col, xV.col),
                QV = Math.max(eV.col, xV.col);
              for (let eV = YV; eV <= UV; eV++) {
                let xV = VV.doc.line(eV),
                  YV = (0, JV.$)(xV.text, pV, VV.tabSize, !0);
                if (YV < 0) yV.push(JV.n.cursor(xV.to));
                else {
                  let eV = (0, JV.$)(xV.text, QV, VV.tabSize);
                  yV.push(JV.n.range(xV.from + YV, xV.from + eV))
                }
              }
            }
            return yV
          }(VV.state, xV, pV);
          return QV.length ? yV ? JV.n.create(QV.concat(YV.TE)) : JV.n.create(QV) : YV
        }
      } : null
    }

    function NU(VV) {
      let eV = (null === VV || void 0 === VV ? void 0 : VV.eventFilter) || (VV => VV.altKey && 0 == VV.button);
      return NY.mouseSelectionStyle.of(((VV, xV) => eV(xV) ? AU(VV, xV) : null))
    }
    const XU = {
        Alt: [18, VV => !!VV.altKey],
        Control: [17, VV => !!VV.ctrlKey],
        Shift: [16, VV => !!VV.shiftKey],
        Meta: [91, VV => !!VV.metaKey]
      },
      MU = {
        style: "cursor: crosshair"
      };

    function zU() {
      let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [eV, xV] = XU[VV.key || "Alt"],
        JV = Se.fromClass(class {
          constructor(VV) {
            this.view = VV, this.isDown = !1
          }
          set(VV) {
            this.isDown != VV && (this.isDown = VV, this.view.update([]))
          }
        }, {
          eventObservers: {
            keydown(VV) {
              this.set(VV.keyCode == eV || xV(VV))
            },
            keyup(VV) {
              VV.keyCode != eV && xV(VV) || this.set(!1)
            },
            mousemove(VV) {
              this.set(xV(VV))
            }
          }
        });
      return [JV, NY.contentAttributes.of((VV => {
        var eV;
        return (null === (eV = VV.plugin(JV)) || void 0 === eV ? void 0 : eV.isDown) ? MU : null
      }))]
    }
    const GU = "-10000px";
    class WU {
      constructor(VV, eV, xV, JV) {
        this.facet = eV, this.createTooltipView = xV, this.removeTooltipView = JV, this.input = VV.state.facet(eV), this.tooltips = this.input.filter((VV => VV));
        let YV = null;
        this.tooltipViews = this.tooltips.map((VV => YV = xV(VV, YV)))
      }
      update(VV, eV) {
        var xV;
        let JV = VV.state.facet(this.facet),
          YV = JV.filter((VV => VV));
        if (JV === this.input) {
          for (let eV of this.tooltipViews) eV.update && eV.update(VV);
          return !1
        }
        let UV = [],
          yV = eV ? [] : null;
        for (let pV = 0; pV < YV.length; pV++) {
          let xV = YV[pV],
            JV = -1;
          if (xV) {
            for (let VV = 0; VV < this.tooltips.length; VV++) {
              let eV = this.tooltips[VV];
              eV && eV.create == xV.create && (JV = VV)
            }
            if (JV < 0) UV[pV] = this.createTooltipView(xV, pV ? UV[pV - 1] : null), yV && (yV[pV] = !!xV.above);
            else {
              let xV = UV[pV] = this.tooltipViews[JV];
              yV && (yV[pV] = eV[JV]), xV.update && xV.update(VV)
            }
          }
        }
        for (let pV of this.tooltipViews) UV.indexOf(pV) < 0 && (this.removeTooltipView(pV), null === (xV = pV.destroy) || void 0 === xV || xV.call(pV));
        return eV && (yV.forEach(((VV, xV) => eV[xV] = VV)), eV.length = yV.length), this.input = JV, this.tooltips = YV, this.tooltipViews = UV, !0
      }
    }

    function RU(VV) {
      let eV = VV.dom.ownerDocument.documentElement;
      return {
        top: 0,
        left: 0,
        bottom: eV.clientHeight,
        right: eV.clientWidth
      }
    }
    const gU = JV.r.define({
        combine: VV => {
          var eV, xV, JV;
          return {
            position: PV.ios ? "absolute" : (null === (eV = VV.find((VV => VV.position))) || void 0 === eV ? void 0 : eV.position) || "fixed",
            parent: (null === (xV = VV.find((VV => VV.parent))) || void 0 === xV ? void 0 : xV.parent) || null,
            tooltipSpace: (null === (JV = VV.find((VV => VV.tooltipSpace))) || void 0 === JV ? void 0 : JV.tooltipSpace) || RU
          }
        }
      }),
      DU = new WeakMap,
      iU = Se.fromClass(class {
        constructor(VV) {
          this.view = VV, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
          let eV = VV.state.facet(gU);
          this.position = eV.position, this.parent = eV.parent, this.classes = VV.themeClasses, this.createContainer(), this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this
          }, this.resizeObserver = "function" == typeof ResizeObserver ? new ResizeObserver((() => this.measureSoon())) : null, this.manager = new WU(VV, cU, ((VV, eV) => this.createTooltip(VV, eV)), (VV => {
            this.resizeObserver && this.resizeObserver.unobserve(VV.dom), VV.dom.remove()
          })), this.above = this.manager.tooltips.map((VV => !!VV.above)), this.intersectionObserver = "function" == typeof IntersectionObserver ? new IntersectionObserver((VV => {
            Date.now() > this.lastTransaction - 50 && VV.length > 0 && VV[VV.length - 1].intersectionRatio < 1 && this.measureSoon()
          }), {
            threshold: [1]
          }) : null, this.observeIntersection(), VV.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure()
        }
        createContainer() {
          this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom
        }
        observeIntersection() {
          if (this.intersectionObserver) {
            this.intersectionObserver.disconnect();
            for (let VV of this.manager.tooltipViews) this.intersectionObserver.observe(VV.dom)
          }
        }
        measureSoon() {
          this.measureTimeout < 0 && (this.measureTimeout = setTimeout((() => {
            this.measureTimeout = -1, this.maybeMeasure()
          }), 50))
        }
        update(VV) {
          VV.transactions.length && (this.lastTransaction = Date.now());
          let eV = this.manager.update(VV, this.above);
          eV && this.observeIntersection();
          let xV = eV || VV.geometryChanged,
            JV = VV.state.facet(gU);
          if (JV.position != this.position && !this.madeAbsolute) {
            this.position = JV.position;
            for (let VV of this.manager.tooltipViews) VV.dom.style.position = this.position;
            xV = !0
          }
          if (JV.parent != this.parent) {
            this.parent && this.container.remove(), this.parent = JV.parent, this.createContainer();
            for (let VV of this.manager.tooltipViews) this.container.appendChild(VV.dom);
            xV = !0
          } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
          xV && this.maybeMeasure()
        }
        createTooltip(VV, eV) {
          let xV = VV.create(this.view),
            JV = eV ? eV.dom : null;
          if (xV.dom.classList.add("cm-tooltip"), VV.arrow && !xV.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
            let VV = document.createElement("div");
            VV.className = "cm-tooltip-arrow", xV.dom.appendChild(VV)
          }
          return xV.dom.style.position = this.position, xV.dom.style.top = GU, xV.dom.style.left = "0px", this.container.insertBefore(xV.dom, JV), xV.mount && xV.mount(this.view), this.resizeObserver && this.resizeObserver.observe(xV.dom), xV
        }
        destroy() {
          var VV, eV, xV;
          this.view.win.removeEventListener("resize", this.measureSoon);
          for (let JV of this.manager.tooltipViews) JV.dom.remove(), null === (VV = JV.destroy) || void 0 === VV || VV.call(JV);
          this.parent && this.container.remove(), null === (eV = this.resizeObserver) || void 0 === eV || eV.disconnect(), null === (xV = this.intersectionObserver) || void 0 === xV || xV.disconnect(), clearTimeout(this.measureTimeout)
        }
        readMeasure() {
          let VV = 1,
            eV = 1,
            xV = !1;
          if ("fixed" == this.position && this.manager.tooltipViews.length) {
            let {
              dom: VV
            } = this.manager.tooltipViews[0];
            if (PV.safari) {
              let eV = VV.getBoundingClientRect();
              xV = Math.abs(eV.top + 1e4) > 1 || Math.abs(eV.left) > 1
            } else xV = !!VV.offsetParent && VV.offsetParent != this.container.ownerDocument.body
          }
          if (xV || "absolute" == this.position)
            if (this.parent) {
              let xV = this.parent.getBoundingClientRect();
              xV.width && xV.height && (VV = xV.width / this.parent.offsetWidth, eV = xV.height / this.parent.offsetHeight)
            } else({
              scaleX: VV,
              scaleY: eV
            } = this.view.viewState);
          let JV = this.view.scrollDOM.getBoundingClientRect(),
            YV = px(this.view);
          return {
            visible: {
              left: JV.left + YV.left,
              top: JV.top + YV.top,
              right: JV.right - YV.right,
              bottom: JV.bottom - YV.bottom
            },
            parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
            pos: this.manager.tooltips.map(((VV, eV) => {
              let xV = this.manager.tooltipViews[eV];
              return xV.getCoords ? xV.getCoords(VV.pos) : this.view.coordsAtPos(VV.pos)
            })),
            size: this.manager.tooltipViews.map((VV => {
              let {
                dom: eV
              } = VV;
              return eV.getBoundingClientRect()
            })),
            space: this.view.state.facet(gU).tooltipSpace(this.view),
            scaleX: VV,
            scaleY: eV,
            makeAbsolute: xV
          }
        }
        writeMeasure(VV) {
          var eV;
          if (VV.makeAbsolute) {
            this.madeAbsolute = !0, this.position = "absolute";
            for (let VV of this.manager.tooltipViews) VV.dom.style.position = "absolute"
          }
          let {
            visible: xV,
            space: JV,
            scaleX: YV,
            scaleY: UV
          } = VV, yV = [];
          for (let pV = 0; pV < this.manager.tooltips.length; pV++) {
            let QV = this.manager.tooltips[pV],
              nV = this.manager.tooltipViews[pV],
              {
                dom: wV
              } = nV,
              ZV = VV.pos[pV],
              vV = VV.size[pV];
            if (!ZV || !1 !== QV.clip && (ZV.bottom <= Math.max(xV.top, JV.top) || ZV.top >= Math.min(xV.bottom, JV.bottom) || ZV.right < Math.max(xV.left, JV.left) - .1 || ZV.left > Math.min(xV.right, JV.right) + .1)) {
              wV.style.top = GU;
              continue
            }
            let rV = QV.arrow ? nV.dom.querySelector(".cm-tooltip-arrow") : null,
              kV = rV ? 7 : 0,
              bV = vV.right - vV.left,
              EV = null !== (eV = DU.get(nV)) && void 0 !== eV ? eV : vV.bottom - vV.top,
              BV = nV.offset || oU,
              jV = this.view.textDirection == ne.LTR,
              qV = vV.width > JV.right - JV.left ? jV ? JV.left : JV.right - vV.width : jV ? Math.max(JV.left, Math.min(ZV.left - (rV ? 14 : 0) + BV.x, JV.right - bV)) : Math.min(Math.max(JV.left, ZV.left - bV + (rV ? 14 : 0) - BV.x), JV.right - bV),
              tV = this.above[pV];
            !QV.strictSide && (tV ? ZV.top - EV - kV - BV.y < JV.top : ZV.bottom + EV + kV + BV.y > JV.bottom) && tV == JV.bottom - ZV.bottom > ZV.top - JV.top && (tV = this.above[pV] = !tV);
            let FV = (tV ? ZV.top - JV.top : JV.bottom - ZV.bottom) - kV;
            if (FV < EV && !1 !== nV.resize) {
              if (FV < this.view.defaultLineHeight) {
                wV.style.top = GU;
                continue
              }
              DU.set(nV, EV), wV.style.height = (EV = FV) / UV + "px"
            } else wV.style.height && (wV.style.height = "");
            let TV = tV ? ZV.top - EV - kV - BV.y : ZV.bottom + kV + BV.y,
              PV = qV + bV;
            if (!0 !== nV.overlap)
              for (let VV of yV) VV.left < PV && VV.right > qV && VV.top < TV + EV && VV.bottom > TV && (TV = tV ? VV.top - EV - 2 - kV : VV.bottom + kV + 2);
            if ("absolute" == this.position ? (wV.style.top = (TV - VV.parent.top) / UV + "px", CU(wV, (qV - VV.parent.left) / YV)) : (wV.style.top = TV / UV + "px", CU(wV, qV / YV)), rV) {
              let VV = ZV.left + (jV ? BV.x : -BV.x) - (qV + 14 - 7);
              rV.style.left = VV / YV + "px"
            }!0 !== nV.overlap && yV.push({
              left: qV,
              top: TV,
              right: PV,
              bottom: TV + EV
            }), wV.classList.toggle("cm-tooltip-above", tV), wV.classList.toggle("cm-tooltip-below", !tV), nV.positioned && nV.positioned(VV.space)
          }
        }
        maybeMeasure() {
          if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
            for (let VV of this.manager.tooltipViews) VV.dom.style.top = GU
        }
      }, {
        eventObservers: {
          scroll() {
            this.maybeMeasure()
          }
        }
      });

    function CU(VV, eV) {
      let xV = parseInt(VV.style.left, 10);
      (isNaN(xV) || Math.abs(eV - xV) > 1) && (VV.style.left = eV + "px")
    }
    const aU = NY.baseTheme({
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
      oU = {
        x: 0,
        y: 0
      },
      cU = JV.r.define({
        enables: [iU, aU]
      }),
      hU = JV.r.define({
        combine: VV => VV.reduce(((VV, eV) => VV.concat(eV)), [])
      });
    class lU {
      static create(VV) {
        return new lU(VV)
      }
      constructor(VV) {
        this.view = VV, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new WU(VV, hU, ((VV, eV) => this.createHostedView(VV, eV)), (VV => VV.dom.remove()))
      }
      createHostedView(VV, eV) {
        let xV = VV.create(this.view);
        return xV.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(xV.dom, eV ? eV.dom.nextSibling : this.dom.firstChild), this.mounted && xV.mount && xV.mount(this.view), xV
      }
      mount(VV) {
        for (let eV of this.manager.tooltipViews) eV.mount && eV.mount(VV);
        this.mounted = !0
      }
      positioned(VV) {
        for (let eV of this.manager.tooltipViews) eV.positioned && eV.positioned(VV)
      }
      update(VV) {
        this.manager.update(VV)
      }
      destroy() {
        var VV;
        for (let eV of this.manager.tooltipViews) null === (VV = eV.destroy) || void 0 === VV || VV.call(eV)
      }
      passProp(VV) {
        let eV;
        for (let xV of this.manager.tooltipViews) {
          let JV = xV[VV];
          if (void 0 !== JV)
            if (void 0 === eV) eV = JV;
            else if (eV !== JV) return
        }
        return eV
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
    const LU = cU.compute([hU], (VV => {
      let eV = VV.facet(hU);
      return 0 === eV.length ? null : {
        pos: Math.min(...eV.map((VV => VV.pos))),
        end: Math.max(...eV.map((VV => {
          var eV;
          return null !== (eV = VV.end) && void 0 !== eV ? eV : VV.pos
        }))),
        create: lU.create,
        above: eV[0].above,
        arrow: eV.some((VV => VV.arrow))
      }
    }));
    class fU {
      constructor(VV, eV, xV, JV, YV) {
        this.view = VV, this.source = eV, this.field = xV, this.setHover = JV, this.hoverTime = YV, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
          x: 0,
          y: 0,
          target: VV.dom,
          time: 0
        }, this.checkHover = this.checkHover.bind(this), VV.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), VV.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this))
      }
      update() {
        this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout((() => this.startHover()), 20))
      }
      get active() {
        return this.view.state.field(this.field)
      }
      checkHover() {
        if (this.hoverTimeout = -1, this.active.length) return;
        let VV = Date.now() - this.lastMove.time;
        VV < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - VV) : this.startHover()
      }
      startHover() {
        clearTimeout(this.restartTimeout);
        let {
          view: VV,
          lastMove: eV
        } = this, xV = VV.docView.tile.nearest(eV.target);
        if (!xV) return;
        let JV, YV = 1;
        if (xV.isWidget()) JV = xV.posAtStart;
        else {
          if (JV = VV.posAtCoords(eV), null == JV) return;
          let xV = VV.coordsAtPos(JV);
          if (!xV || eV.y < xV.top || eV.y > xV.bottom || eV.x < xV.left - VV.defaultCharacterWidth || eV.x > xV.right + VV.defaultCharacterWidth) return;
          let UV = VV.bidiSpans(VV.state.doc.lineAt(JV)).find((VV => VV.from <= JV && VV.to >= JV)),
            yV = UV && UV.dir == ne.RTL ? -1 : 1;
          YV = eV.x < xV.left ? -yV : yV
        }
        let UV = this.source(VV, JV, YV);
        if (null === UV || void 0 === UV ? void 0 : UV.then) {
          let eV = this.pending = {
            pos: JV
          };
          UV.then((xV => {
            this.pending == eV && (this.pending = null, !xV || Array.isArray(xV) && !xV.length || VV.dispatch({
              effects: this.setHover.of(Array.isArray(xV) ? xV : [xV])
            }))
          }), (eV => Ke(VV.state, eV, "hover tooltip")))
        } else !UV || Array.isArray(UV) && !UV.length || VV.dispatch({
          effects: this.setHover.of(Array.isArray(UV) ? UV : [UV])
        })
      }
      get tooltip() {
        let VV = this.view.plugin(iU),
          eV = VV ? VV.manager.tooltips.findIndex((VV => VV.create == lU.create)) : -1;
        return eV > -1 ? VV.manager.tooltipViews[eV] : null
      }
      mousemove(VV) {
        var eV, xV;
        this.lastMove = {
          x: VV.clientX,
          y: VV.clientY,
          target: VV.target,
          time: Date.now()
        }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
        let {
          active: JV,
          tooltip: YV
        } = this;
        if (JV.length && YV && ! function(VV, eV) {
            let xV, {
              left: JV,
              right: YV,
              top: UV,
              bottom: yV
            } = VV.getBoundingClientRect();
            if (xV = VV.querySelector(".cm-tooltip-arrow")) {
              let VV = xV.getBoundingClientRect();
              UV = Math.min(VV.top, UV), yV = Math.max(VV.bottom, yV)
            }
            return eV.clientX >= JV - mU && eV.clientX <= YV + mU && eV.clientY >= UV - mU && eV.clientY <= yV + mU
          }(YV.dom, VV) || this.pending) {
          let {
            pos: YV
          } = JV[0] || this.pending, UV = null !== (xV = null === (eV = JV[0]) || void 0 === eV ? void 0 : eV.end) && void 0 !== xV ? xV : YV;
          (YV == UV ? this.view.posAtCoords(this.lastMove) == YV : function(VV, eV, xV, JV, YV) {
            let UV = VV.scrollDOM.getBoundingClientRect(),
              yV = VV.documentTop + VV.documentPadding.top + VV.contentHeight;
            if (UV.left > JV || UV.right < JV || UV.top > YV || Math.min(UV.bottom, yV) < YV) return !1;
            let pV = VV.posAtCoords({
              x: JV,
              y: YV
            }, !1);
            return pV >= eV && pV <= xV
          }(this.view, YV, UV, VV.clientX, VV.clientY)) || (this.view.dispatch({
            effects: this.setHover.of([])
          }), this.pending = null)
        }
      }
      mouseleave(VV) {
        clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
        let {
          active: eV
        } = this;
        if (eV.length) {
          let {
            tooltip: eV
          } = this;
          eV && eV.dom.contains(VV.relatedTarget) ? this.watchTooltipLeave(eV.dom) : this.view.dispatch({
            effects: this.setHover.of([])
          })
        }
      }
      watchTooltipLeave(VV) {
        let eV = xV => {
          VV.removeEventListener("mouseleave", eV), this.active.length && !this.view.dom.contains(xV.relatedTarget) && this.view.dispatch({
            effects: this.setHover.of([])
          })
        };
        VV.addEventListener("mouseleave", eV)
      }
      destroy() {
        clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove)
      }
    }
    const mU = 4;

    function KU(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        xV = JV.C.define(),
        YV = JV.E.define({
          create: () => [],
          update(VV, YV) {
            if (VV.length && (eV.hideOnChange && (YV.docChanged || YV.selection) ? VV = [] : eV.hideOn && (VV = VV.filter((VV => !eV.hideOn(YV, VV)))), YV.docChanged)) {
              let eV = [];
              for (let xV of VV) {
                let VV = YV.changes.mapPos(xV.pos, -1, JV.t.TrackDel);
                if (null != VV) {
                  let JV = Object.assign(Object.create(null), xV);
                  JV.pos = VV, null != JV.end && (JV.end = YV.changes.mapPos(JV.end)), eV.push(JV)
                }
              }
              VV = eV
            }
            for (let eV of YV.effects) eV.is(xV) && (VV = eV.value), eV.is(uU) && (VV = []);
            return VV
          },
          provide: VV => hU.from(VV)
        });
      return {
        active: YV,
        extension: [YV, Se.define((JV => new fU(JV, VV, YV, xV, eV.hoverTime || 300))), LU]
      }
    }

    function HU(VV, eV) {
      let xV = VV.plugin(iU);
      if (!xV) return null;
      let JV = xV.manager.tooltips.indexOf(eV);
      return JV < 0 ? null : xV.manager.tooltipViews[JV]
    }
    const uU = JV.C.define();
    const sU = JV.r.define({
      combine(VV) {
        let eV, xV;
        for (let JV of VV) eV = eV || JV.topContainer, xV = xV || JV.bottomContainer;
        return {
          topContainer: eV,
          bottomContainer: xV
        }
      }
    });

    function SU(VV, eV) {
      let xV = VV.plugin(IU),
        JV = xV ? xV.specs.indexOf(eV) : -1;
      return JV > -1 ? xV.panels[JV] : null
    }
    const IU = Se.fromClass(class {
      constructor(VV) {
        this.input = VV.state.facet(Vy), this.specs = this.input.filter((VV => VV)), this.panels = this.specs.map((eV => eV(VV)));
        let eV = VV.state.facet(sU);
        this.top = new dU(VV, !0, eV.topContainer), this.bottom = new dU(VV, !1, eV.bottomContainer), this.top.sync(this.panels.filter((VV => VV.top))), this.bottom.sync(this.panels.filter((VV => !VV.top)));
        for (let xV of this.panels) xV.dom.classList.add("cm-panel"), xV.mount && xV.mount()
      }
      update(VV) {
        let eV = VV.state.facet(sU);
        this.top.container != eV.topContainer && (this.top.sync([]), this.top = new dU(VV.view, !0, eV.topContainer)), this.bottom.container != eV.bottomContainer && (this.bottom.sync([]), this.bottom = new dU(VV.view, !1, eV.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
        let xV = VV.state.facet(Vy);
        if (xV != this.input) {
          let eV = xV.filter((VV => VV)),
            JV = [],
            YV = [],
            UV = [],
            yV = [];
          for (let xV of eV) {
            let eV, pV = this.specs.indexOf(xV);
            pV < 0 ? (eV = xV(VV.view), yV.push(eV)) : (eV = this.panels[pV], eV.update && eV.update(VV)), JV.push(eV), (eV.top ? YV : UV).push(eV)
          }
          this.specs = eV, this.panels = JV, this.top.sync(YV), this.bottom.sync(UV);
          for (let VV of yV) VV.dom.classList.add("cm-panel"), VV.mount && VV.mount()
        } else
          for (let JV of this.panels) JV.update && JV.update(VV)
      }
      destroy() {
        this.top.sync([]), this.bottom.sync([])
      }
    }, {
      provide: VV => NY.scrollMargins.of((eV => {
        let xV = eV.plugin(VV);
        return xV && {
          top: xV.top.scrollMargin(),
          bottom: xV.bottom.scrollMargin()
        }
      }))
    });
    class dU {
      constructor(VV, eV, xV) {
        this.view = VV, this.top = eV, this.container = xV, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses()
      }
      sync(VV) {
        for (let eV of this.panels) eV.destroy && VV.indexOf(eV) < 0 && eV.destroy();
        this.panels = VV, this.syncDOM()
      }
      syncDOM() {
        if (0 == this.panels.length) return void(this.dom && (this.dom.remove(), this.dom = void 0));
        if (!this.dom) {
          this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
          let VV = this.container || this.view.dom;
          VV.insertBefore(this.dom, this.top ? VV.firstChild : null)
        }
        let VV = this.dom.firstChild;
        for (let eV of this.panels)
          if (eV.dom.parentNode == this.dom) {
            for (; VV != eV.dom;) VV = OU(VV);
            VV = VV.nextSibling
          } else this.dom.insertBefore(eV.dom, VV);
        for (; VV;) VV = OU(VV)
      }
      scrollMargin() {
        return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top)
      }
      syncClasses() {
        if (this.container && this.classes != this.view.themeClasses) {
          for (let VV of this.classes.split(" ")) VV && this.container.classList.remove(VV);
          for (let VV of (this.classes = this.view.themeClasses).split(" ")) VV && this.container.classList.add(VV)
        }
      }
    }

    function OU(VV) {
      let eV = VV.nextSibling;
      return VV.remove(), eV
    }
    const Vy = JV.r.define({
      enables: IU
    });

    function ey(VV, eV) {
      let xV, YV = new Promise((VV => xV = VV)),
        UV = VV => function(VV, eV, xV) {
          let JV = eV.content ? eV.content(VV, (() => yV(null))) : null;
          if (!JV) {
            if (JV = (0, ZV.b)("form"), eV.input) {
              let VV = (0, ZV.b)("input", eV.input);
              /^(text|password|number|email|tel|url)$/.test(VV.type) && VV.classList.add("cm-textfield"), VV.name || (VV.name = "input"), JV.appendChild((0, ZV.b)("label", (eV.label || "") + ": ", VV))
            } else JV.appendChild(document.createTextNode(eV.label || ""));
            JV.appendChild(document.createTextNode(" ")), JV.appendChild((0, ZV.b)("button", {
              class: "cm-button",
              type: "submit"
            }, eV.submitLabel || "OK"))
          }
          let YV = "FORM" == JV.nodeName ? [JV] : JV.querySelectorAll("form");
          for (let pV = 0; pV < YV.length; pV++) {
            let VV = YV[pV];
            VV.addEventListener("keydown", (eV => {
              27 == eV.keyCode ? (eV.preventDefault(), yV(null)) : 13 == eV.keyCode && (eV.preventDefault(), yV(VV))
            })), VV.addEventListener("submit", (eV => {
              eV.preventDefault(), yV(VV)
            }))
          }
          let UV = (0, ZV.b)("div", JV, (0, ZV.b)("button", {
            onclick: () => yV(null),
            "aria-label": VV.state.phrase("close"),
            class: "cm-dialog-close",
            type: "button"
          }, ["\xd7"]));
          eV.class && (UV.className = eV.class);

          function yV(eV) {
            UV.contains(UV.ownerDocument.activeElement) && VV.focus(), xV(eV)
          }
          return UV.classList.add("cm-dialog"), {
            dom: UV,
            top: eV.top,
            mount: () => {
              if (eV.focus) {
                let VV;
                VV = "string" == typeof eV.focus ? JV.querySelector(eV.focus) : JV.querySelector("input") || JV.querySelector("button"), VV && "select" in VV ? VV.select() : VV && "focus" in VV && VV.focus()
              }
            }
          }
        }(VV, eV, xV);
      VV.state.field(xy, !1) ? VV.dispatch({
        effects: Jy.of(UV)
      }) : VV.dispatch({
        effects: JV.C.appendConfig.of(xy.init((() => [UV])))
      });
      let yV = Yy.of(UV);
      return {
        close: yV,
        result: YV.then((eV => ((VV.win.queueMicrotask || (eV => VV.win.setTimeout(eV, 10)))((() => {
          VV.state.field(xy).indexOf(UV) > -1 && VV.dispatch({
            effects: yV
          })
        })), eV)))
      }
    }
    const xy = JV.E.define({
        create: () => [],
        update(VV, eV) {
          for (let xV of eV.effects) xV.is(Jy) ? VV = [xV.value].concat(VV) : xV.is(Yy) && (VV = VV.filter((VV => VV != xV.value)));
          return VV
        },
        provide: VV => Vy.computeN([VV], (eV => eV.field(VV)))
      }),
      Jy = JV.C.define(),
      Yy = JV.C.define();
    class Uy extends JV.A {
      compare(VV) {
        return this == VV || this.constructor == VV.constructor && this.eq(VV)
      }
      eq(VV) {
        return !1
      }
      destroy(VV) {}
    }
    Uy.prototype.elementClass = "", Uy.prototype.toDOM = void 0, Uy.prototype.mapMode = JV.t.TrackBefore, Uy.prototype.startSide = Uy.prototype.endSide = -1, Uy.prototype.point = !0;
    const yy = JV.r.define(),
      py = JV.r.define(),
      Qy = {
        class: "",
        renderEmptyElements: !1,
        elementStyle: "",
        markers: () => JV.x.empty,
        lineMarker: () => null,
        widgetMarker: () => null,
        lineMarkerChange: null,
        initialSpacer: null,
        updateSpacer: null,
        domEventHandlers: {},
        side: "before"
      },
      ny = JV.r.define();

    function wy(VV) {
      return [vy(), ny.of({
        ...Qy,
        ...VV
      })]
    }
    const Zy = JV.r.define({
      combine: VV => VV.some((VV => VV))
    });

    function vy(VV) {
      let eV = [ry];
      return VV && !1 === VV.fixed && eV.push(Zy.of(!0)), eV
    }
    const ry = Se.fromClass(class {
      constructor(VV) {
        this.view = VV, this.domAfter = null, this.prevViewport = VV.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = VV.state.facet(ny).map((eV => new By(VV, eV))), this.fixed = !VV.state.facet(Zy);
        for (let eV of this.gutters) "after" == eV.config.side ? this.getDOMAfter().appendChild(eV.dom) : this.dom.appendChild(eV.dom);
        this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), VV.scrollDOM.insertBefore(this.dom, VV.contentDOM)
      }
      getDOMAfter() {
        return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter
      }
      update(VV) {
        if (this.updateGutters(VV)) {
          let eV = this.prevViewport,
            xV = VV.view.viewport,
            JV = Math.min(eV.to, xV.to) - Math.max(eV.from, xV.from);
          this.syncGutters(JV < .8 * (xV.to - xV.from))
        }
        if (VV.geometryChanged) {
          let VV = this.view.contentHeight / this.view.scaleY + "px";
          this.dom.style.minHeight = VV, this.domAfter && (this.domAfter.style.minHeight = VV)
        }
        this.view.state.facet(Zy) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = VV.view.viewport
      }
      syncGutters(VV) {
        let eV = this.dom.nextSibling;
        VV && (this.dom.remove(), this.domAfter && this.domAfter.remove());
        let xV = JV.x.iter(this.view.state.facet(yy), this.view.viewport.from),
          YV = [],
          UV = this.gutters.map((VV => new Ey(VV, this.view.viewport, -this.view.documentPadding.top)));
        for (let JV of this.view.viewportLineBlocks)
          if (YV.length && (YV = []), Array.isArray(JV.type)) {
            let VV = !0;
            for (let eV of JV.type)
              if (eV.type == WV.Text && VV) {
                by(xV, YV, eV.from);
                for (let VV of UV) VV.line(this.view, eV, YV);
                VV = !1
              } else if (eV.widget)
              for (let VV of UV) VV.widget(this.view, eV)
          } else if (JV.type == WV.Text) {
          by(xV, YV, JV.from);
          for (let VV of UV) VV.line(this.view, JV, YV)
        } else if (JV.widget)
          for (let VV of UV) VV.widget(this.view, JV);
        for (let JV of UV) JV.finish();
        VV && (this.view.scrollDOM.insertBefore(this.dom, eV), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter))
      }
      updateGutters(VV) {
        let eV = VV.startState.facet(ny),
          xV = VV.state.facet(ny),
          YV = VV.docChanged || VV.heightChanged || VV.viewportChanged || !JV.x.eq(VV.startState.facet(yy), VV.state.facet(yy), VV.view.viewport.from, VV.view.viewport.to);
        if (eV == xV)
          for (let JV of this.gutters) JV.update(VV) && (YV = !0);
        else {
          YV = !0;
          let JV = [];
          for (let YV of xV) {
            let xV = eV.indexOf(YV);
            xV < 0 ? JV.push(new By(this.view, YV)) : (this.gutters[xV].update(VV), JV.push(this.gutters[xV]))
          }
          for (let VV of this.gutters) VV.dom.remove(), JV.indexOf(VV) < 0 && VV.destroy();
          for (let VV of JV) "after" == VV.config.side ? this.getDOMAfter().appendChild(VV.dom) : this.dom.appendChild(VV.dom);
          this.gutters = JV
        }
        return YV
      }
      destroy() {
        for (let VV of this.gutters) VV.destroy();
        this.dom.remove(), this.domAfter && this.domAfter.remove()
      }
    }, {
      provide: VV => NY.scrollMargins.of((eV => {
        let xV = eV.plugin(VV);
        if (!xV || 0 == xV.gutters.length || !xV.fixed) return null;
        let JV = xV.dom.offsetWidth * eV.scaleX,
          YV = xV.domAfter ? xV.domAfter.offsetWidth * eV.scaleX : 0;
        return eV.textDirection == ne.LTR ? {
          left: JV,
          right: YV
        } : {
          right: JV,
          left: YV
        }
      }))
    });

    function ky(VV) {
      return Array.isArray(VV) ? VV : [VV]
    }

    function by(VV, eV, xV) {
      for (; VV.value && VV.from <= xV;) VV.from == xV && eV.push(VV.value), VV.next()
    }
    class Ey {
      constructor(VV, eV, xV) {
        this.gutter = VV, this.height = xV, this.i = 0, this.cursor = JV.x.iter(VV.markers, eV.from)
      }
      addElement(VV, eV, xV) {
        let {
          gutter: JV
        } = this, YV = (eV.top - this.height) / VV.scaleY, UV = eV.height / VV.scaleY;
        if (this.i == JV.elements.length) {
          let eV = new jy(VV, UV, YV, xV);
          JV.elements.push(eV), JV.dom.appendChild(eV.dom)
        } else JV.elements[this.i].update(VV, UV, YV, xV);
        this.height = eV.bottom, this.i++
      }
      line(VV, eV, xV) {
        let JV = [];
        by(this.cursor, JV, eV.from), xV.length && (JV = JV.concat(xV));
        let YV = this.gutter.config.lineMarker(VV, eV, JV);
        YV && JV.unshift(YV);
        let UV = this.gutter;
        (0 != JV.length || UV.config.renderEmptyElements) && this.addElement(VV, eV, JV)
      }
      widget(VV, eV) {
        let xV = this.gutter.config.widgetMarker(VV, eV.widget, eV),
          JV = xV ? [xV] : null;
        for (let YV of VV.state.facet(py)) {
          let xV = YV(VV, eV.widget, eV);
          xV && (JV || (JV = [])).push(xV)
        }
        JV && this.addElement(VV, eV, JV)
      }
      finish() {
        let VV = this.gutter;
        for (; VV.elements.length > this.i;) {
          let eV = VV.elements.pop();
          VV.dom.removeChild(eV.dom), eV.destroy()
        }
      }
    }
    class By {
      constructor(VV, eV) {
        this.view = VV, this.config = eV, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
        for (let xV in eV.domEventHandlers) this.dom.addEventListener(xV, (JV => {
          let YV, UV = JV.target;
          if (UV != this.dom && this.dom.contains(UV)) {
            for (; UV.parentNode != this.dom;) UV = UV.parentNode;
            let VV = UV.getBoundingClientRect();
            YV = (VV.top + VV.bottom) / 2
          } else YV = JV.clientY;
          let yV = VV.lineBlockAtHeight(YV - VV.documentTop);
          eV.domEventHandlers[xV](VV, yV, JV) && JV.preventDefault()
        }));
        this.markers = ky(eV.markers(VV)), eV.initialSpacer && (this.spacer = new jy(VV, 0, 0, [eV.initialSpacer(VV)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none")
      }
      update(VV) {
        let eV = this.markers;
        if (this.markers = ky(this.config.markers(VV.view)), this.spacer && this.config.updateSpacer) {
          let eV = this.config.updateSpacer(this.spacer.markers[0], VV);
          eV != this.spacer.markers[0] && this.spacer.update(VV.view, 0, 0, [eV])
        }
        let xV = VV.view.viewport;
        return !JV.x.eq(this.markers, eV, xV.from, xV.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(VV)
      }
      destroy() {
        for (let VV of this.elements) VV.destroy()
      }
    }
    class jy {
      constructor(VV, eV, xV, JV) {
        this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(VV, eV, xV, JV)
      }
      update(VV, eV, xV, JV) {
        this.height != eV && (this.height = eV, this.dom.style.height = eV + "px"), this.above != xV && (this.dom.style.marginTop = (this.above = xV) ? xV + "px" : ""),
          function(VV, eV) {
            if (VV.length != eV.length) return !1;
            for (let xV = 0; xV < VV.length; xV++)
              if (!VV[xV].compare(eV[xV])) return !1;
            return !0
          }(this.markers, JV) || this.setMarkers(VV, JV)
      }
      setMarkers(VV, eV) {
        let xV = "cm-gutterElement",
          JV = this.dom.firstChild;
        for (let YV = 0, UV = 0;;) {
          let yV = UV,
            pV = YV < eV.length ? eV[YV++] : null,
            QV = !1;
          if (pV) {
            let VV = pV.elementClass;
            VV && (xV += " " + VV);
            for (let eV = UV; eV < this.markers.length; eV++)
              if (this.markers[eV].compare(pV)) {
                yV = eV, QV = !0;
                break
              }
          } else yV = this.markers.length;
          for (; UV < yV;) {
            let VV = this.markers[UV++];
            if (VV.toDOM) {
              VV.destroy(JV);
              let eV = JV.nextSibling;
              JV.remove(), JV = eV
            }
          }
          if (!pV) break;
          pV.toDOM && (QV ? JV = JV.nextSibling : this.dom.insertBefore(pV.toDOM(VV), JV)), QV && UV++
        }
        this.dom.className = xV, this.markers = eV
      }
      destroy() {
        this.setMarkers(null, [])
      }
    }
    const qy = JV.r.define(),
      ty = JV.r.define(),
      Fy = JV.r.define({
        combine: VV => (0, JV.T)(VV, {
          formatNumber: String,
          domEventHandlers: {}
        }, {
          domEventHandlers(VV, eV) {
            let xV = Object.assign({}, VV);
            for (let JV in eV) {
              let VV = xV[JV],
                YV = eV[JV];
              xV[JV] = VV ? (eV, xV, JV) => VV(eV, xV, JV) || YV(eV, xV, JV) : YV
            }
            return xV
          }
        })
      });
    class Ty extends Uy {
      constructor(VV) {
        super(), this.number = VV
      }
      eq(VV) {
        return this.number == VV.number
      }
      toDOM() {
        return document.createTextNode(this.number)
      }
    }

    function Py(VV, eV) {
      return VV.state.facet(Fy).formatNumber(eV, VV.state)
    }
    const Ay = ny.compute([Fy], (VV => ({
      class: "cm-lineNumbers",
      renderEmptyElements: !1,
      markers: VV => VV.state.facet(qy),
      lineMarker: (VV, eV, xV) => xV.some((VV => VV.toDOM)) ? null : new Ty(Py(VV, VV.state.doc.lineAt(eV.from).number)),
      widgetMarker: (VV, eV, xV) => {
        for (let JV of VV.state.facet(ty)) {
          let YV = JV(VV, eV, xV);
          if (YV) return YV
        }
        return null
      },
      lineMarkerChange: VV => VV.startState.facet(Fy) != VV.state.facet(Fy),
      initialSpacer: VV => new Ty(Py(VV, Xy(VV.state.doc.lines))),
      updateSpacer(VV, eV) {
        let xV = Py(eV.view, Xy(eV.view.state.doc.lines));
        return xV == VV.number ? VV : new Ty(xV)
      },
      domEventHandlers: VV.facet(Fy).domEventHandlers,
      side: "before"
    })));

    function Ny() {
      let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Fy.of(VV), vy(), Ay]
    }

    function Xy(VV) {
      let eV = 9;
      for (; eV < VV;) eV = 10 * eV + 9;
      return eV
    }
    const My = new class extends Uy {
        constructor() {
          super(...arguments), this.elementClass = "cm-activeLineGutter"
        }
      },
      zy = yy.compute(["selection"], (VV => {
        let eV = [],
          xV = -1;
        for (let JV of VV.selection.TE) {
          let YV = VV.doc.lineAt(JV.head).from;
          YV > xV && (xV = YV, eV.push(My.range(YV)))
        }
        return JV.x.of(eV)
      }));

    function Gy() {
      return zy
    }
  },
  44260: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => JV,
      f: () => rV,
      h: () => yV,
      k: () => wV,
      m: () => nV,
      q: () => gV,
      r: () => iV,
      t: () => DV,
      x: () => kV
    });
    const JV = 1024;
    let YV = 0;
    class UV {
      constructor(VV, eV) {
        this.from = VV, this.to = eV
      }
    }
    class yV {
      constructor() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.id = YV++, this.perNode = !!VV.perNode, this.deserialize = VV.deserialize || (() => {
          throw new Error("This node type doesn't define a deserialize function")
        }), this.combine = VV.combine || null
      }
      add(VV) {
        if (this.perNode) throw new RangeError("Can't add per-node props to node types");
        return "function" != typeof VV && (VV = nV.match(VV)), eV => {
          let xV = VV(eV);
          return void 0 === xV ? null : [this, xV]
        }
      }
    }
    yV.closedBy = new yV({
      deserialize: VV => VV.split(" ")
    }), yV.openedBy = new yV({
      deserialize: VV => VV.split(" ")
    }), yV.group = new yV({
      deserialize: VV => VV.split(" ")
    }), yV.isolate = new yV({
      deserialize: VV => {
        if (VV && "rtl" != VV && "ltr" != VV && "auto" != VV) throw new RangeError("Invalid value for isolate: " + VV);
        return VV || "auto"
      }
    }), yV.contextHash = new yV({
      perNode: !0
    }), yV.lookAhead = new yV({
      perNode: !0
    }), yV.mounted = new yV({
      perNode: !0
    });
    class pV {
      constructor(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this.tree = VV, this.overlay = eV, this.parser = xV, this.bracketed = JV
      }
      static get(VV) {
        return VV && VV.props && VV.props[yV.mounted.id]
      }
    }
    const QV = Object.create(null);
    class nV {
      constructor(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.name = VV, this.props = eV, this.id = xV, this.flags = JV
      }
      static define(VV) {
        let eV = VV.props && VV.props.length ? Object.create(null) : QV,
          xV = (VV.top ? 1 : 0) | (VV.skipped ? 2 : 0) | (VV.error ? 4 : 0) | (null == VV.name ? 8 : 0),
          JV = new nV(VV.name || "", eV, VV.id, xV);
        if (VV.props)
          for (let YV of VV.props)
            if (Array.isArray(YV) || (YV = YV(JV)), YV) {
              if (YV[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
              eV[YV[0].id] = YV[1]
            } return JV
      }
      prop(VV) {
        return this.props[VV.id]
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
      is(VV) {
        if ("string" == typeof VV) {
          if (this.name == VV) return !0;
          let eV = this.prop(yV.group);
          return !!eV && eV.indexOf(VV) > -1
        }
        return this.id == VV
      }
      static match(VV) {
        let eV = Object.create(null);
        for (let xV in VV)
          for (let JV of xV.split(" ")) eV[JV] = VV[xV];
        return VV => {
          for (let xV = VV.prop(yV.group), JV = -1; JV < (xV ? xV.length : 0); JV++) {
            let YV = eV[JV < 0 ? VV.name : xV[JV]];
            if (YV) return YV
          }
        }
      }
    }
    nV.none = new nV("", Object.create(null), 0, 8);
    class wV {
      constructor(VV) {
        this.types = VV;
        for (let eV = 0; eV < VV.length; eV++)
          if (VV[eV].id != eV) throw new RangeError("Node type ids should correspond to array positions when creating a node set")
      }
      extend() {
        let VV = [];
        for (var eV = arguments.length, xV = new Array(eV), JV = 0; JV < eV; JV++) xV[JV] = arguments[JV];
        for (let YV of this.types) {
          let eV = null;
          for (let VV of xV) {
            let xV = VV(YV);
            if (xV) {
              eV || (eV = Object.assign({}, YV.props));
              let VV = xV[1],
                JV = xV[0];
              JV.combine && JV.id in eV && (VV = JV.combine(eV[JV.id], VV)), eV[JV.id] = VV
            }
          }
          VV.push(eV ? new nV(YV.name, eV, YV.id, YV.flags) : YV)
        }
        return new wV(VV)
      }
    }
    const ZV = new WeakMap,
      vV = new WeakMap;
    var rV;
    ! function(VV) {
      VV[VV.ExcludeBuffers = 1] = "ExcludeBuffers", VV[VV.IncludeAnonymous = 2] = "IncludeAnonymous", VV[VV.IgnoreMounts = 4] = "IgnoreMounts", VV[VV.IgnoreOverlays = 8] = "IgnoreOverlays", VV[VV.EnterBracketed = 16] = "EnterBracketed"
    }(rV || (rV = {}));
    class kV {
      constructor(VV, eV, xV, JV, YV) {
        if (this.type = VV, this.children = eV, this.positions = xV, this.length = JV, this.props = null, YV && YV.length) {
          this.props = Object.create(null);
          for (let [VV, eV] of YV) this.props["number" == typeof VV ? VV : VV.id] = eV
        }
      }
      toString() {
        let VV = pV.get(this);
        if (VV && !VV.overlay) return VV.tree.toString();
        let eV = "";
        for (let xV of this.children) {
          let VV = xV.toString();
          VV && (eV && (eV += ","), eV += VV)
        }
        return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (eV.length ? "(" + eV + ")" : "") : eV
      }
      cursor() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return new MV(this.topNode, VV)
      }
      cursorAt(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          xV = ZV.get(this) || this.topNode,
          JV = new MV(xV);
        return JV.moveTo(VV, eV), ZV.set(this, JV._tree), JV
      }
      get topNode() {
        return new tV(this, 0, 0, null)
      }
      resolve(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          xV = jV(ZV.get(this) || this.topNode, VV, eV, !1);
        return ZV.set(this, xV), xV
      }
      resolveInner(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          xV = jV(vV.get(this) || this.topNode, VV, eV, !0);
        return vV.set(this, xV), xV
      }
      resolveStack(VV) {
        return function(VV, eV, xV) {
          let JV = VV.resolveInner(eV, xV),
            YV = null;
          for (let UV = JV instanceof tV ? JV : JV.context.parent; UV; UV = UV.parent)
            if (UV.index < 0) {
              let VV = UV.parent;
              (YV || (YV = [JV])).push(VV.resolve(eV, xV)), UV = VV
            } else {
              let VV = pV.get(UV.tree);
              if (VV && VV.overlay && VV.overlay[0].from <= eV && VV.overlay[VV.overlay.length - 1].to >= eV) {
                let yV = new tV(VV.tree, VV.overlay[0].from + UV.from, -1, UV);
                (YV || (YV = [JV])).push(jV(yV, eV, xV, !1))
              }
            } return YV ? NV(YV) : JV
        }(this, VV, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
      }
      iterate(VV) {
        let {
          enter: eV,
          leave: xV,
          from: JV = 0,
          to: YV = this.length
        } = VV, UV = VV.mode || 0, yV = (UV & rV.IncludeAnonymous) > 0;
        for (let pV = this.cursor(UV | rV.IncludeAnonymous);;) {
          let VV = !1;
          if (pV.from <= YV && pV.to >= JV && (!yV && pV.type.isAnonymous || !1 !== eV(pV))) {
            if (pV.firstChild()) continue;
            VV = !0
          }
          for (; VV && xV && (yV || !pV.type.isAnonymous) && xV(pV), !pV.nextSibling();) {
            if (!pV.parent()) return;
            VV = !0
          }
        }
      }
      prop(VV) {
        return VV.perNode ? this.props ? this.props[VV.id] : void 0 : this.type.prop(VV)
      }
      get propValues() {
        let VV = [];
        if (this.props)
          for (let eV in this.props) VV.push([+eV, this.props[eV]]);
        return VV
      }
      balance() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this.children.length <= 8 ? this : RV(nV.none, this.children, this.positions, 0, this.children.length, 0, this.length, ((VV, eV, xV) => new kV(this.type, VV, eV, xV, this.propValues)), VV.makeTree || ((VV, eV, xV) => new kV(nV.none, VV, eV, xV)))
      }
      static build(VV) {
        return function(VV) {
          var eV;
          let {
            buffer: xV,
            nodeSet: YV,
            maxBufferLength: UV = JV,
            reused: pV = [],
            minRepeatType: QV = YV.types.length
          } = VV, nV = Array.isArray(xV) ? new bV(xV, xV.length) : xV, wV = YV.types, ZV = 0, vV = 0;

          function rV(VV, eV, xV, JV, yV, kV) {
            let {
              id: bV,
              start: PV,
              end: AV,
              size: NV
            } = nV, XV = vV, MV = ZV;
            if (NV < 0) {
              if (nV.next(), -1 == NV) {
                let eV = pV[bV];
                return xV.push(eV), void JV.push(PV - VV)
              }
              if (-3 == NV) return void(ZV = bV);
              if (-4 == NV) return void(vV = bV);
              throw new RangeError(`Unrecognized record size: ${NV}`)
            }
            let zV, GV, WV = wV[bV],
              gV = PV - VV;
            if (AV - PV <= UV && (GV = FV(nV.pos - eV, yV))) {
              let eV = new Uint16Array(GV.size - GV.skip),
                xV = nV.pos - GV.size,
                JV = eV.length;
              for (; nV.pos > xV;) JV = TV(GV.start, eV, JV);
              zV = new EV(eV, AV - GV.start, YV), gV = GV.start - VV
            } else {
              let VV = nV.pos - NV;
              nV.next();
              let eV = [],
                xV = [],
                JV = bV >= QV ? bV : -1,
                YV = 0,
                yV = AV;
              for (; nV.pos > VV;) JV >= 0 && nV.id == JV && nV.size >= 0 ? (nV.end <= yV - UV && (qV(eV, xV, PV, YV, nV.end, yV, JV, XV, MV), YV = eV.length, yV = nV.end), nV.next()) : kV > 2500 ? BV(PV, VV, eV, xV) : rV(PV, VV, eV, xV, JV, kV + 1);
              if (JV >= 0 && YV > 0 && YV < eV.length && qV(eV, xV, PV, YV, PV, yV, JV, XV, MV), eV.reverse(), xV.reverse(), JV > -1 && YV > 0) {
                let VV = jV(WV, MV);
                zV = RV(WV, eV, xV, 0, eV.length, 0, AV - PV, VV, VV)
              } else zV = tV(WV, eV, xV, AV - PV, XV - AV, MV)
            }
            xV.push(zV), JV.push(gV)
          }

          function BV(VV, eV, xV, JV) {
            let yV = [],
              pV = 0,
              QV = -1;
            for (; nV.pos > eV;) {
              let {
                id: VV,
                start: eV,
                end: xV,
                size: JV
              } = nV;
              if (JV > 4) nV.next();
              else {
                if (QV > -1 && eV < QV) break;
                QV < 0 && (QV = xV - UV), yV.push(VV, eV, xV), pV++, nV.next()
              }
            }
            if (pV) {
              let eV = new Uint16Array(4 * pV),
                UV = yV[yV.length - 2];
              for (let VV = yV.length - 3, xV = 0; VV >= 0; VV -= 3) eV[xV++] = yV[VV], eV[xV++] = yV[VV + 1] - UV, eV[xV++] = yV[VV + 2] - UV, eV[xV++] = xV;
              xV.push(new EV(eV, yV[2] - UV, YV)), JV.push(UV - VV)
            }
          }

          function jV(VV, eV) {
            return (xV, JV, YV) => {
              let UV, pV, QV = 0,
                nV = xV.length - 1;
              if (nV >= 0 && (UV = xV[nV]) instanceof kV) {
                if (!nV && UV.type == VV && UV.length == YV) return UV;
                (pV = UV.prop(yV.lookAhead)) && (QV = JV[nV] + UV.length + pV)
              }
              return tV(VV, xV, JV, YV, QV, eV)
            }
          }

          function qV(VV, eV, xV, JV, UV, yV, pV, QV, nV) {
            let wV = [],
              ZV = [];
            for (; VV.length > JV;) wV.push(VV.pop()), ZV.push(eV.pop() + xV - UV);
            VV.push(tV(YV.types[pV], wV, ZV, yV - UV, QV - yV, nV)), eV.push(UV - xV)
          }

          function tV(VV, eV, xV, JV, YV, UV, pV) {
            if (UV) {
              let VV = [yV.contextHash, UV];
              pV = pV ? [VV].concat(pV) : [VV]
            }
            if (YV > 25) {
              let VV = [yV.lookAhead, YV];
              pV = pV ? [VV].concat(pV) : [VV]
            }
            return new kV(VV, eV, xV, JV, pV)
          }

          function FV(VV, eV) {
            let xV = nV.fork(),
              JV = 0,
              YV = 0,
              yV = 0,
              pV = xV.end - UV,
              wV = {
                size: 0,
                start: 0,
                skip: 0
              };
            VV: for (let UV = xV.pos - VV; xV.pos > UV;) {
              let VV = xV.size;
              if (xV.id == eV && VV >= 0) {
                wV.size = JV, wV.start = YV, wV.skip = yV, yV += 4, JV += 4, xV.next();
                continue
              }
              let nV = xV.pos - VV;
              if (VV < 0 || nV < UV || xV.start < pV) break;
              let ZV = xV.id >= QV ? 4 : 0,
                vV = xV.start;
              for (xV.next(); xV.pos > nV;) {
                if (xV.size < 0) {
                  if (-3 != xV.size && -4 != xV.size) break VV;
                  ZV += 4
                } else xV.id >= QV && (ZV += 4);
                xV.next()
              }
              YV = vV, JV += VV, yV += ZV
            }
            return (eV < 0 || JV == VV) && (wV.size = JV, wV.start = YV, wV.skip = yV), wV.size > 4 ? wV : void 0
          }

          function TV(VV, eV, xV) {
            let {
              id: JV,
              start: YV,
              end: UV,
              size: yV
            } = nV;
            if (nV.next(), yV >= 0 && JV < QV) {
              let pV = xV;
              if (yV > 4) {
                let JV = nV.pos - (yV - 4);
                for (; nV.pos > JV;) xV = TV(VV, eV, xV)
              }
              eV[--xV] = pV, eV[--xV] = UV - VV, eV[--xV] = YV - VV, eV[--xV] = JV
            } else - 3 == yV ? ZV = JV : -4 == yV && (vV = JV);
            return xV
          }
          let PV = [],
            AV = [];
          for (; nV.pos > 0;) rV(VV.start || 0, VV.bufferStart || 0, PV, AV, -1, 0);
          let NV = null !== (eV = VV.length) && void 0 !== eV ? eV : PV.length ? AV[0] + PV[0].length : 0;
          return new kV(wV[VV.topID], PV.reverse(), AV.reverse(), NV)
        }(VV)
      }
    }
    kV.empty = new kV(nV.none, [], [], 0);
    class bV {
      constructor(VV, eV) {
        this.buffer = VV, this.index = eV
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
        return new bV(this.buffer, this.index)
      }
    }
    class EV {
      constructor(VV, eV, xV) {
        this.buffer = VV, this.length = eV, this.set = xV
      }
      get type() {
        return nV.none
      }
      toString() {
        let VV = [];
        for (let eV = 0; eV < this.buffer.length;) VV.push(this.childString(eV)), eV = this.buffer[eV + 3];
        return VV.join(",")
      }
      childString(VV) {
        let eV = this.buffer[VV],
          xV = this.buffer[VV + 3],
          JV = this.set.types[eV],
          YV = JV.name;
        if (/\W/.test(YV) && !JV.isError && (YV = JSON.stringify(YV)), xV == (VV += 4)) return YV;
        let UV = [];
        for (; VV < xV;) UV.push(this.childString(VV)), VV = this.buffer[VV + 3];
        return YV + "(" + UV.join(",") + ")"
      }
      findChild(VV, eV, xV, JV, YV) {
        let {
          buffer: UV
        } = this, yV = -1;
        for (let pV = VV; pV != eV && !(BV(YV, JV, UV[pV + 1], UV[pV + 2]) && (yV = pV, xV > 0)); pV = UV[pV + 3]);
        return yV
      }
      slice(VV, eV, xV) {
        let JV = this.buffer,
          YV = new Uint16Array(eV - VV),
          UV = 0;
        for (let yV = VV, pV = 0; yV < eV;) {
          YV[pV++] = JV[yV++], YV[pV++] = JV[yV++] - xV;
          let eV = YV[pV++] = JV[yV++] - xV;
          YV[pV++] = JV[yV++] - VV, UV = Math.max(UV, eV)
        }
        return new EV(YV, UV, this.set)
      }
    }

    function BV(VV, eV, xV, JV) {
      switch (VV) {
        case -2:
          return xV < eV;
        case -1:
          return JV >= eV && xV < eV;
        case 0:
          return xV < eV && JV > eV;
        case 1:
          return xV <= eV && JV > eV;
        case 2:
          return JV > eV;
        case 4:
          return !0
      }
    }

    function jV(VV, eV, xV, JV) {
      for (var YV; VV.from == VV.to || (xV < 1 ? VV.from >= eV : VV.from > eV) || (xV > -1 ? VV.to <= eV : VV.to < eV);) {
        let eV = !JV && VV instanceof tV && VV.index < 0 ? null : VV.parent;
        if (!eV) return VV;
        VV = eV
      }
      let UV = JV ? 0 : rV.IgnoreOverlays;
      if (JV)
        for (let yV = VV, pV = yV.parent; pV; yV = pV, pV = yV.parent) yV instanceof tV && yV.index < 0 && (null === (YV = pV.enter(eV, xV, UV)) || void 0 === YV ? void 0 : YV.from) != yV.from && (VV = pV);
      for (;;) {
        let JV = VV.enter(eV, xV, UV);
        if (!JV) return VV;
        VV = JV
      }
    }
    class qV {
      cursor() {
        return new MV(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)
      }
      getChild(VV) {
        let eV = FV(this, VV, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null);
        return eV.length ? eV[0] : null
      }
      getChildren(VV) {
        return FV(this, VV, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
      }
      resolve(VV) {
        return jV(this, VV, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !1)
      }
      resolveInner(VV) {
        return jV(this, VV, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !0)
      }
      matchContext(VV) {
        return TV(this.parent, VV)
      }
      enterUnfinishedNodesBefore(VV) {
        let eV = this.childBefore(VV),
          xV = this;
        for (; eV;) {
          let VV = eV.lastChild;
          if (!VV || VV.to != eV.to) break;
          VV.type.isError && VV.from == VV.to ? (xV = eV, eV = VV.prevSibling) : eV = VV
        }
        return xV
      }
      get node() {
        return this
      }
      get next() {
        return this.parent
      }
    }
    class tV extends qV {
      constructor(VV, eV, xV, JV) {
        super(), this._tree = VV, this.from = eV, this.index = xV, this._parent = JV
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
      nextChild(VV, eV, xV, JV) {
        let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        for (let UV = this;;) {
          for (let {
              children: yV,
              positions: QV
            } = UV._tree, nV = eV > 0 ? yV.length : -1; VV != nV; VV += eV) {
            let nV, wV = yV[VV],
              ZV = QV[VV] + UV.from;
            if (YV & rV.EnterBracketed && wV instanceof kV && (nV = pV.get(wV)) && !nV.overlay && nV.bracketed && xV >= ZV && xV <= ZV + wV.length || BV(JV, xV, ZV, ZV + wV.length))
              if (wV instanceof EV) {
                if (YV & rV.ExcludeBuffers) continue;
                let yV = wV.findChild(0, wV.buffer.length, eV, xV - ZV, JV);
                if (yV > -1) return new AV(new PV(UV, wV, VV, ZV), null, yV)
              } else if (YV & rV.IncludeAnonymous || !wV.type.isAnonymous || zV(wV)) {
              let yV;
              if (!(YV & rV.IgnoreMounts) && (yV = pV.get(wV)) && !yV.overlay) return new tV(yV.tree, ZV, VV, UV);
              let QV = new tV(wV, ZV, VV, UV);
              return YV & rV.IncludeAnonymous || !QV.type.isAnonymous ? QV : QV.nextChild(eV < 0 ? wV.children.length - 1 : 0, eV, xV, JV, YV)
            }
          }
          if (YV & rV.IncludeAnonymous || !UV.type.isAnonymous) return null;
          if (VV = UV.index >= 0 ? UV.index + eV : eV < 0 ? -1 : UV._parent._tree.children.length, UV = UV._parent, !UV) return null
        }
      }
      get firstChild() {
        return this.nextChild(0, 1, 0, 4)
      }
      get lastChild() {
        return this.nextChild(this._tree.children.length - 1, -1, 0, 4)
      }
      childAfter(VV) {
        return this.nextChild(0, 1, VV, 2)
      }
      childBefore(VV) {
        return this.nextChild(this._tree.children.length - 1, -1, VV, -2)
      }
      prop(VV) {
        return this._tree.prop(VV)
      }
      enter(VV, eV) {
        let xV, JV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (!(JV & rV.IgnoreOverlays) && (xV = pV.get(this._tree)) && xV.overlay) {
          let YV = VV - this.from,
            UV = JV & rV.EnterBracketed && xV.bracketed;
          for (let {
              from: VV,
              to: JV
            }
            of xV.overlay)
            if ((eV > 0 || UV ? VV <= YV : VV < YV) && (eV < 0 || UV ? JV >= YV : JV > YV)) return new tV(xV.tree, xV.overlay[0].from + this.from, -1, this)
        }
        return this.nextChild(0, 1, VV, eV, JV)
      }
      nextSignificantParent() {
        let VV = this;
        for (; VV.type.isAnonymous && VV._parent;) VV = VV._parent;
        return VV
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

    function FV(VV, eV, xV, JV) {
      let YV = VV.cursor(),
        UV = [];
      if (!YV.firstChild()) return UV;
      if (null != xV)
        for (let yV = !1; !yV;)
          if (yV = YV.type.is(xV), !YV.nextSibling()) return UV;
      for (;;) {
        if (null != JV && YV.type.is(JV)) return UV;
        if (YV.type.is(eV) && UV.push(YV.node), !YV.nextSibling()) return null == JV ? UV : []
      }
    }

    function TV(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : eV.length - 1;
      for (let JV = VV; xV >= 0; JV = JV.parent) {
        if (!JV) return !1;
        if (!JV.type.isAnonymous) {
          if (eV[xV] && eV[xV] != JV.name) return !1;
          xV--
        }
      }
      return !0
    }
    class PV {
      constructor(VV, eV, xV, JV) {
        this.parent = VV, this.buffer = eV, this.index = xV, this.start = JV
      }
    }
    class AV extends qV {
      get name() {
        return this.type.name
      }
      get from() {
        return this.context.start + this.context.buffer.buffer[this.index + 1]
      }
      get to() {
        return this.context.start + this.context.buffer.buffer[this.index + 2]
      }
      constructor(VV, eV, xV) {
        super(), this.context = VV, this._parent = eV, this.index = xV, this.type = VV.buffer.set.types[VV.buffer.buffer[xV]]
      }
      child(VV, eV, xV) {
        let {
          buffer: JV
        } = this.context, YV = JV.findChild(this.index + 4, JV.buffer[this.index + 3], VV, eV - this.context.start, xV);
        return YV < 0 ? null : new AV(this.context, this, YV)
      }
      get firstChild() {
        return this.child(1, 0, 4)
      }
      get lastChild() {
        return this.child(-1, 0, 4)
      }
      childAfter(VV) {
        return this.child(1, VV, 2)
      }
      childBefore(VV) {
        return this.child(-1, VV, -2)
      }
      prop(VV) {
        return this.type.prop(VV)
      }
      enter(VV, eV) {
        if ((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0) & rV.ExcludeBuffers) return null;
        let {
          buffer: xV
        } = this.context, JV = xV.findChild(this.index + 4, xV.buffer[this.index + 3], eV > 0 ? 1 : -1, VV - this.context.start, eV);
        return JV < 0 ? null : new AV(this.context, this, JV)
      }
      get parent() {
        return this._parent || this.context.parent.nextSignificantParent()
      }
      externalSibling(VV) {
        return this._parent ? null : this.context.parent.nextChild(this.context.index + VV, VV, 0, 4)
      }
      get nextSibling() {
        let {
          buffer: VV
        } = this.context, eV = VV.buffer[this.index + 3];
        return eV < (this._parent ? VV.buffer[this._parent.index + 3] : VV.buffer.length) ? new AV(this.context, this._parent, eV) : this.externalSibling(1)
      }
      get prevSibling() {
        let {
          buffer: VV
        } = this.context, eV = this._parent ? this._parent.index + 4 : 0;
        return this.index == eV ? this.externalSibling(-1) : new AV(this.context, this._parent, VV.findChild(eV, this.index, -1, 0, 4))
      }
      get tree() {
        return null
      }
      toTree() {
        let VV = [],
          eV = [],
          {
            buffer: xV
          } = this.context,
          JV = this.index + 4,
          YV = xV.buffer[this.index + 3];
        if (YV > JV) {
          let UV = xV.buffer[this.index + 1];
          VV.push(xV.slice(JV, YV, UV)), eV.push(0)
        }
        return new kV(this.type, VV, eV, this.to - this.from)
      }
      toString() {
        return this.context.buffer.childString(this.index)
      }
    }

    function NV(VV) {
      if (!VV.length) return null;
      let eV = 0,
        xV = VV[0];
      for (let UV = 1; UV < VV.length; UV++) {
        let JV = VV[UV];
        (JV.from > xV.from || JV.to < xV.to) && (xV = JV, eV = UV)
      }
      let JV = xV instanceof tV && xV.index < 0 ? null : xV.parent,
        YV = VV.slice();
      return JV ? YV[eV] = JV : YV.splice(eV, 1), new XV(YV, xV)
    }
    class XV {
      constructor(VV, eV) {
        this.heads = VV, this.node = eV
      }
      get next() {
        return NV(this.heads)
      }
    }
    class MV {
      get name() {
        return this.type.name
      }
      constructor(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = eV & ~rV.EnterBracketed, VV instanceof tV) this.yieldNode(VV);
        else {
          this._tree = VV.context.parent, this.buffer = VV.context;
          for (let eV = VV._parent; eV; eV = eV._parent) this.stack.unshift(eV.index);
          this.bufferNode = VV, this.yieldBuf(VV.index)
        }
      }
      yieldNode(VV) {
        return !!VV && (this._tree = VV, this.type = VV.type, this.from = VV.from, this.to = VV.to, !0)
      }
      yieldBuf(VV, eV) {
        this.index = VV;
        let {
          start: xV,
          buffer: JV
        } = this.buffer;
        return this.type = eV || JV.set.types[JV.buffer[VV]], this.from = xV + JV.buffer[VV + 1], this.to = xV + JV.buffer[VV + 2], !0
      }
      yield(VV) {
        return !!VV && (VV instanceof tV ? (this.buffer = null, this.yieldNode(VV)) : (this.buffer = VV.context, this.yieldBuf(VV.index, VV.type)))
      }
      toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
      }
      enterChild(VV, eV, xV) {
        if (!this.buffer) return this.yield(this._tree.nextChild(VV < 0 ? this._tree._tree.children.length - 1 : 0, VV, eV, xV, this.mode));
        let {
          buffer: JV
        } = this.buffer, YV = JV.findChild(this.index + 4, JV.buffer[this.index + 3], VV, eV - this.buffer.start, xV);
        return !(YV < 0) && (this.stack.push(this.index), this.yieldBuf(YV))
      }
      firstChild() {
        return this.enterChild(1, 0, 4)
      }
      lastChild() {
        return this.enterChild(-1, 0, 4)
      }
      childAfter(VV) {
        return this.enterChild(1, VV, 2)
      }
      childBefore(VV) {
        return this.enterChild(-1, VV, -2)
      }
      enter(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.mode;
        return this.buffer ? !(xV & rV.ExcludeBuffers) && this.enterChild(1, VV, eV) : this.yield(this._tree.enter(VV, eV, xV))
      }
      parent() {
        if (!this.buffer) return this.yieldNode(this.mode & rV.IncludeAnonymous ? this._tree._parent : this._tree.parent);
        if (this.stack.length) return this.yieldBuf(this.stack.pop());
        let VV = this.mode & rV.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        return this.buffer = null, this.yieldNode(VV)
      }
      sibling(VV) {
        if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + VV, VV, 0, 4, this.mode));
        let {
          buffer: eV
        } = this.buffer, xV = this.stack.length - 1;
        if (VV < 0) {
          let VV = xV < 0 ? 0 : this.stack[xV] + 4;
          if (this.index != VV) return this.yieldBuf(eV.findChild(VV, this.index, -1, 0, 4))
        } else {
          let VV = eV.buffer[this.index + 3];
          if (VV < (xV < 0 ? eV.buffer.length : eV.buffer[this.stack[xV] + 3])) return this.yieldBuf(VV)
        }
        return xV < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + VV, VV, 0, 4, this.mode))
      }
      nextSibling() {
        return this.sibling(1)
      }
      prevSibling() {
        return this.sibling(-1)
      }
      atLastNode(VV) {
        let eV, xV, {
          buffer: JV
        } = this;
        if (JV) {
          if (VV > 0) {
            if (this.index < JV.buffer.buffer.length) return !1
          } else
            for (let VV = 0; VV < this.index; VV++)
              if (JV.buffer.buffer[VV + 3] < this.index) return !1;
          ({
            index: eV,
            parent: xV
          } = JV)
        } else({
          index: eV,
          _parent: xV
        } = this._tree);
        for (; xV;
          ({
            index: eV,
            _parent: xV
          } = xV))
          if (eV > -1)
            for (let JV = eV + VV, YV = VV < 0 ? -1 : xV._tree.children.length; JV != YV; JV += VV) {
              let VV = xV._tree.children[JV];
              if (this.mode & rV.IncludeAnonymous || VV instanceof EV || !VV.type.isAnonymous || zV(VV)) return !1
            }
        return !0
      }
      move(VV, eV) {
        if (eV && this.enterChild(VV, 0, 4)) return !0;
        for (;;) {
          if (this.sibling(VV)) return !0;
          if (this.atLastNode(VV) || !this.parent()) return !1
        }
      }
      next() {
        let VV = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(1, VV)
      }
      prev() {
        let VV = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(-1, VV)
      }
      moveTo(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        for (;
          (this.from == this.to || (eV < 1 ? this.from >= VV : this.from > VV) || (eV > -1 ? this.to <= VV : this.to < VV)) && this.parent(););
        for (; this.enterChild(1, VV, eV););
        return this
      }
      get node() {
        if (!this.buffer) return this._tree;
        let VV = this.bufferNode,
          eV = null,
          xV = 0;
        if (VV && VV.context == this.buffer) VV: for (let JV = this.index, YV = this.stack.length; YV >= 0;) {
          for (let UV = VV; UV; UV = UV._parent)
            if (UV.index == JV) {
              if (JV == this.index) return UV;
              eV = UV, xV = YV + 1;
              break VV
            } JV = this.stack[--YV]
        }
        for (let JV = xV; JV < this.stack.length; JV++) eV = new AV(this.buffer, eV, this.stack[JV]);
        return this.bufferNode = new AV(this.buffer, eV, this.index)
      }
      get tree() {
        return this.buffer ? null : this._tree._tree
      }
      iterate(VV, eV) {
        for (let xV = 0;;) {
          let JV = !1;
          if (this.type.isAnonymous || !1 !== VV(this)) {
            if (this.firstChild()) {
              xV++;
              continue
            }
            this.type.isAnonymous || (JV = !0)
          }
          for (;;) {
            if (JV && eV && eV(this), JV = this.type.isAnonymous, !xV) return;
            if (this.nextSibling()) break;
            this.parent(), xV--, JV = !0
          }
        }
      }
      matchContext(VV) {
        if (!this.buffer) return TV(this.node.parent, VV);
        let {
          buffer: eV
        } = this.buffer, {
          types: xV
        } = eV.set;
        for (let JV = VV.length - 1, YV = this.stack.length - 1; JV >= 0; YV--) {
          if (YV < 0) return TV(this._tree, VV, JV);
          let UV = xV[eV.buffer[this.stack[YV]]];
          if (!UV.isAnonymous) {
            if (VV[JV] && VV[JV] != UV.name) return !1;
            JV--
          }
        }
        return !0
      }
    }

    function zV(VV) {
      return VV.children.some((VV => VV instanceof EV || !VV.type.isAnonymous || zV(VV)))
    }
    const GV = new WeakMap;

    function WV(VV, eV) {
      if (!VV.isAnonymous || eV instanceof EV || eV.type != VV) return 1;
      let xV = GV.get(eV);
      if (null == xV) {
        xV = 1;
        for (let JV of eV.children) {
          if (JV.type != VV || !(JV instanceof kV)) {
            xV = 1;
            break
          }
          xV += WV(VV, JV)
        }
        GV.set(eV, xV)
      }
      return xV
    }

    function RV(VV, eV, xV, JV, YV, UV, yV, pV, QV) {
      let nV = 0;
      for (let rV = JV; rV < YV; rV++) nV += WV(VV, eV[rV]);
      let wV = Math.ceil(1.5 * nV / 8),
        ZV = [],
        vV = [];
      return function eV(xV, JV, YV, yV, pV) {
        for (let nV = YV; nV < yV;) {
          let YV = nV,
            rV = JV[nV],
            kV = WV(VV, xV[nV]);
          for (nV++; nV < yV; nV++) {
            let eV = WV(VV, xV[nV]);
            if (kV + eV >= wV) break;
            kV += eV
          }
          if (nV == YV + 1) {
            if (kV > wV) {
              let VV = xV[YV];
              eV(VV.children, VV.positions, 0, VV.children.length, JV[YV] + pV);
              continue
            }
            ZV.push(xV[YV])
          } else {
            let eV = JV[nV - 1] + xV[nV - 1].length - rV;
            ZV.push(RV(VV, xV, JV, YV, nV, rV, eV, null, QV))
          }
          vV.push(rV + pV - UV)
        }
      }(eV, xV, JV, YV, 0), (pV || QV)(ZV, vV, yV)
    }
    class gV {
      constructor() {
        this.map = new WeakMap
      }
      setBuffer(VV, eV, xV) {
        let JV = this.map.get(VV);
        JV || this.map.set(VV, JV = new Map), JV.set(eV, xV)
      }
      getBuffer(VV, eV) {
        let xV = this.map.get(VV);
        return xV && xV.get(eV)
      }
      set(VV, eV) {
        VV instanceof AV ? this.setBuffer(VV.context.buffer, VV.index, eV) : VV instanceof tV && this.map.set(VV.tree, eV)
      }
      get(VV) {
        return VV instanceof AV ? this.getBuffer(VV.context.buffer, VV.index) : VV instanceof tV ? this.map.get(VV.tree) : void 0
      }
      cursorSet(VV, eV) {
        VV.buffer ? this.setBuffer(VV.buffer.buffer, VV.index, eV) : this.map.set(VV.tree, eV)
      }
      cursorGet(VV) {
        return VV.buffer ? this.getBuffer(VV.buffer.buffer, VV.index) : this.map.get(VV.tree)
      }
    }
    class DV {
      constructor(VV, eV, xV, JV) {
        let YV = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          UV = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.from = VV, this.to = eV, this.tree = xV, this.offset = JV, this.open = (YV ? 1 : 0) | (UV ? 2 : 0)
      }
      get openStart() {
        return (1 & this.open) > 0
      }
      get openEnd() {
        return (2 & this.open) > 0
      }
      static addTree(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          JV = [new DV(0, VV.length, VV, 0, !1, xV)];
        for (let YV of eV) YV.to > VV.length && JV.push(YV);
        return JV
      }
      static applyChanges(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
        if (!eV.length) return VV;
        let JV = [],
          YV = 1,
          UV = VV.length ? VV[0] : null;
        for (let yV = 0, pV = 0, QV = 0;; yV++) {
          let nV = yV < eV.length ? eV[yV] : null,
            wV = nV ? nV.fromA : 1e9;
          if (wV - pV >= xV)
            for (; UV && UV.from < wV;) {
              let eV = UV;
              if (pV >= eV.from || wV <= eV.to || QV) {
                let VV = Math.max(eV.from, pV) - QV,
                  xV = Math.min(eV.to, wV) - QV;
                eV = VV >= xV ? null : new DV(VV, xV, eV.tree, eV.offset + QV, yV > 0, !!nV)
              }
              if (eV && JV.push(eV), UV.to > wV) break;
              UV = YV < VV.length ? VV[YV++] : null
            }
          if (!nV) break;
          pV = nV.toA, QV = nV.toA - nV.toB
        }
        return JV
      }
    }
    class iV {
      startParse(VV, eV, xV) {
        return "string" == typeof VV && (VV = new CV(VV)), xV = xV ? xV.length ? xV.map((VV => new UV(VV.from, VV.to))) : [new UV(0, 0)] : [new UV(0, VV.length)], this.createParse(VV, eV || [], xV)
      }
      parse(VV, eV, xV) {
        let JV = this.startParse(VV, eV, xV);
        for (;;) {
          let VV = JV.advance();
          if (VV) return VV
        }
      }
    }
    class CV {
      constructor(VV) {
        this.string = VV
      }
      get length() {
        return this.string.length
      }
      chunk(VV) {
        return this.string.slice(VV)
      }
      get lineChunks() {
        return !1
      }
      read(VV, eV) {
        return this.string.slice(VV, eV)
      }
    }
    new yV({
      perNode: !0
    })
  },
  44267: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => vV,
      g: () => QV,
      i: () => ZV,
      j: () => GV
    });
    var JV = xV(44260);
    let YV = 0;
    class UV {
      constructor(VV, eV, xV, JV) {
        this.name = VV, this.set = eV, this.base = xV, this.modified = JV, this.id = YV++
      }
      toString() {
        let {
          name: VV
        } = this;
        for (let eV of this.modified) eV.name && (VV = `${eV.name}(${VV})`);
        return VV
      }
      static define(VV, eV) {
        let xV = "string" == typeof VV ? VV : "?";
        if (VV instanceof UV && (eV = VV), null === eV || void 0 === eV ? void 0 : eV.base) throw new Error("Can not derive from a modified tag");
        let JV = new UV(xV, [], null, []);
        if (JV.set.push(JV), eV)
          for (let YV of eV.set) JV.set.push(YV);
        return JV
      }
      static defineModifier(VV) {
        let eV = new pV(VV);
        return VV => VV.modified.indexOf(eV) > -1 ? VV : pV.get(VV.base || VV, VV.modified.concat(eV).sort(((VV, eV) => VV.id - eV.id)))
      }
    }
    let yV = 0;
    class pV {
      constructor(VV) {
        this.name = VV, this.instances = [], this.id = yV++
      }
      static get(VV, eV) {
        if (!eV.length) return VV;
        let xV = eV[0].instances.find((xV => {
          return xV.base == VV && (JV = eV, YV = xV.modified, JV.length == YV.length && JV.every(((VV, eV) => VV == YV[eV])));
          var JV, YV
        }));
        if (xV) return xV;
        let JV = [],
          YV = new UV(VV.name, JV, VV, eV);
        for (let UV of eV) UV.instances.push(YV);
        let yV = function(VV) {
          let eV = [
            []
          ];
          for (let xV = 0; xV < VV.length; xV++)
            for (let JV = 0, YV = eV.length; JV < YV; JV++) eV.push(eV[JV].concat(VV[xV]));
          return eV.sort(((VV, eV) => eV.length - VV.length))
        }(eV);
        for (let UV of VV.set)
          if (!UV.modified.length)
            for (let VV of yV) JV.push(pV.get(UV, VV));
        return YV
      }
    }

    function QV(VV) {
      let eV = Object.create(null);
      for (let xV in VV) {
        let JV = VV[xV];
        Array.isArray(JV) || (JV = [JV]);
        for (let VV of xV.split(" "))
          if (VV) {
            let xV = [],
              YV = 2,
              UV = VV;
            for (let eV = 0;;) {
              if ("..." == UV && eV > 0 && eV + 3 == VV.length) {
                YV = 1;
                break
              }
              let JV = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(UV);
              if (!JV) throw new RangeError("Invalid path: " + VV);
              if (xV.push("*" == JV[0] ? "" : '"' == JV[0][0] ? JSON.parse(JV[0]) : JV[0]), eV += JV[0].length, eV == VV.length) break;
              let yV = VV[eV++];
              if (eV == VV.length && "!" == yV) {
                YV = 0;
                break
              }
              if ("/" != yV) throw new RangeError("Invalid path: " + VV);
              UV = VV.slice(eV)
            }
            let yV = xV.length - 1,
              pV = xV[yV];
            if (!pV) throw new RangeError("Invalid path: " + VV);
            let QV = new wV(JV, YV, yV > 0 ? xV.slice(0, yV) : null);
            eV[pV] = QV.sort(eV[pV])
          }
      }
      return nV.add(eV)
    }
    const nV = new JV.h({
      combine(VV, eV) {
        let xV, JV, YV;
        for (; VV || eV;) {
          if (!VV || eV && VV.depth >= eV.depth ? (YV = eV, eV = eV.next) : (YV = VV, VV = VV.next), xV && xV.mode == YV.mode && !YV.context && !xV.context) continue;
          let UV = new wV(YV.tags, YV.mode, YV.context);
          xV ? xV.next = UV : JV = UV, xV = UV
        }
        return JV
      }
    });
    class wV {
      constructor(VV, eV, xV, JV) {
        this.tags = VV, this.mode = eV, this.context = xV, this.next = JV
      }
      get opaque() {
        return 0 == this.mode
      }
      get inherit() {
        return 1 == this.mode
      }
      sort(VV) {
        return !VV || VV.depth < this.depth ? (this.next = VV, this) : (VV.next = this.sort(VV.next), VV)
      }
      get depth() {
        return this.context ? this.context.length : 0
      }
    }

    function ZV(VV, eV) {
      let xV = Object.create(null);
      for (let UV of VV)
        if (Array.isArray(UV.tag))
          for (let VV of UV.tag) xV[VV.id] = UV.class;
        else xV[UV.tag.id] = UV.class;
      let {
        scope: JV,
        all: YV = null
      } = eV || {};
      return {
        style: VV => {
          let eV = YV;
          for (let JV of VV)
            for (let VV of JV.set) {
              let JV = xV[VV.id];
              if (JV) {
                eV = eV ? eV + " " + JV : JV;
                break
              }
            }
          return eV
        },
        scope: JV
      }
    }

    function vV(VV, eV, xV) {
      let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : VV.length,
        UV = new rV(JV, Array.isArray(eV) ? eV : [eV], xV);
      UV.highlightRange(VV.cursor(), JV, YV, "", UV.highlighters), UV.flush(YV)
    }
    wV.empty = new wV([], 2, null);
    class rV {
      constructor(VV, eV, xV) {
        this.at = VV, this.highlighters = eV, this.span = xV, this.class = ""
      }
      startSpan(VV, eV) {
        eV != this.class && (this.flush(VV), VV > this.at && (this.at = VV), this.class = eV)
      }
      flush(VV) {
        VV > this.at && this.class && this.span(this.at, VV, this.class)
      }
      highlightRange(VV, eV, xV, YV, UV) {
        let {
          type: yV,
          from: pV,
          to: QV
        } = VV;
        if (pV >= xV || QV <= eV) return;
        yV.isTop && (UV = this.highlighters.filter((VV => !VV.scope || VV.scope(yV))));
        let ZV = YV,
          vV = function(VV) {
            let eV = VV.type.prop(nV);
            for (; eV && eV.context && !VV.matchContext(eV.context);) eV = eV.next;
            return eV || null
          }(VV) || wV.empty,
          rV = function(VV, eV) {
            let xV = null;
            for (let JV of VV) {
              let VV = JV.style(eV);
              VV && (xV = xV ? xV + " " + VV : VV)
            }
            return xV
          }(UV, vV.tags);
        if (rV && (ZV && (ZV += " "), ZV += rV, 1 == vV.mode && (YV += (YV ? " " : "") + rV)), this.startSpan(Math.max(eV, pV), ZV), vV.opaque) return;
        let kV = VV.tree && VV.tree.prop(JV.h.mounted);
        if (kV && kV.overlay) {
          let JV = VV.node.enter(kV.overlay[0].from + pV, 1),
            yV = this.highlighters.filter((VV => !VV.scope || VV.scope(kV.tree.type))),
            nV = VV.firstChild();
          for (let wV = 0, vV = pV;; wV++) {
            let rV = wV < kV.overlay.length ? kV.overlay[wV] : null,
              bV = rV ? rV.from + pV : QV,
              EV = Math.max(eV, vV),
              BV = Math.min(xV, bV);
            if (EV < BV && nV)
              for (; VV.from < BV && (this.highlightRange(VV, EV, BV, YV, UV), this.startSpan(Math.min(BV, VV.to), ZV), !(VV.to >= bV) && VV.nextSibling()););
            if (!rV || bV > xV) break;
            vV = rV.to + pV, vV > eV && (this.highlightRange(JV.cursor(), Math.max(eV, rV.from + pV), Math.min(xV, vV), "", yV), this.startSpan(Math.min(xV, vV), ZV))
          }
          nV && VV.parent()
        } else if (VV.firstChild()) {
          kV && (YV = "");
          do {
            if (!(VV.to <= eV)) {
              if (VV.from >= xV) break;
              this.highlightRange(VV, eV, xV, YV, UV), this.startSpan(Math.min(xV, VV.to), ZV)
            }
          } while (VV.nextSibling());
          VV.parent()
        }
      }
    }
    const kV = UV.define,
      bV = kV(),
      EV = kV(),
      BV = kV(EV),
      jV = kV(EV),
      qV = kV(),
      tV = kV(qV),
      FV = kV(qV),
      TV = kV(),
      PV = kV(TV),
      AV = kV(),
      NV = kV(),
      XV = kV(),
      MV = kV(XV),
      zV = kV(),
      GV = {
        comment: bV,
        lineComment: kV(bV),
        blockComment: kV(bV),
        docComment: kV(bV),
        name: EV,
        variableName: kV(EV),
        typeName: BV,
        tagName: kV(BV),
        propertyName: jV,
        attributeName: kV(jV),
        className: kV(EV),
        labelName: kV(EV),
        namespace: kV(EV),
        macroName: kV(EV),
        literal: qV,
        string: tV,
        docString: kV(tV),
        character: kV(tV),
        attributeValue: kV(tV),
        number: FV,
        integer: kV(FV),
        float: kV(FV),
        bool: kV(qV),
        regexp: kV(qV),
        escape: kV(qV),
        color: kV(qV),
        url: kV(qV),
        keyword: AV,
        self: kV(AV),
        null: kV(AV),
        atom: kV(AV),
        unit: kV(AV),
        modifier: kV(AV),
        operatorKeyword: kV(AV),
        controlKeyword: kV(AV),
        definitionKeyword: kV(AV),
        moduleKeyword: kV(AV),
        operator: NV,
        derefOperator: kV(NV),
        arithmeticOperator: kV(NV),
        logicOperator: kV(NV),
        bitwiseOperator: kV(NV),
        compareOperator: kV(NV),
        updateOperator: kV(NV),
        definitionOperator: kV(NV),
        typeOperator: kV(NV),
        controlOperator: kV(NV),
        punctuation: XV,
        separator: kV(XV),
        bracket: MV,
        angleBracket: kV(MV),
        squareBracket: kV(MV),
        paren: kV(MV),
        brace: kV(MV),
        content: TV,
        heading: PV,
        heading1: kV(PV),
        heading2: kV(PV),
        heading3: kV(PV),
        heading4: kV(PV),
        heading5: kV(PV),
        heading6: kV(PV),
        contentSeparator: kV(TV),
        list: kV(TV),
        quote: kV(TV),
        emphasis: kV(TV),
        strong: kV(TV),
        link: kV(TV),
        monospace: kV(TV),
        strikethrough: kV(TV),
        inserted: kV(),
        deleted: kV(),
        changed: kV(),
        invalid: kV(),
        meta: zV,
        documentMeta: kV(zV),
        annotation: kV(zV),
        processingInstruction: kV(zV),
        definition: UV.defineModifier("definition"),
        constant: UV.defineModifier("constant"),
        function: UV.defineModifier("function"),
        standard: UV.defineModifier("standard"),
        local: UV.defineModifier("local"),
        special: UV.defineModifier("special")
      };
    for (let WV in GV) {
      let VV = GV[WV];
      VV instanceof UV && (VV.name = WV)
    }
    ZV([{
      tag: GV.link,
      class: "tok-link"
    }, {
      tag: GV.heading,
      class: "tok-heading"
    }, {
      tag: GV.emphasis,
      class: "tok-emphasis"
    }, {
      tag: GV.strong,
      class: "tok-strong"
    }, {
      tag: GV.keyword,
      class: "tok-keyword"
    }, {
      tag: GV.atom,
      class: "tok-atom"
    }, {
      tag: GV.bool,
      class: "tok-bool"
    }, {
      tag: GV.url,
      class: "tok-url"
    }, {
      tag: GV.labelName,
      class: "tok-labelName"
    }, {
      tag: GV.inserted,
      class: "tok-inserted"
    }, {
      tag: GV.deleted,
      class: "tok-deleted"
    }, {
      tag: GV.literal,
      class: "tok-literal"
    }, {
      tag: GV.string,
      class: "tok-string"
    }, {
      tag: GV.number,
      class: "tok-number"
    }, {
      tag: [GV.regexp, GV.escape, GV.special(GV.string)],
      class: "tok-string2"
    }, {
      tag: GV.variableName,
      class: "tok-variableName"
    }, {
      tag: GV.local(GV.variableName),
      class: "tok-variableName tok-local"
    }, {
      tag: GV.definition(GV.variableName),
      class: "tok-variableName tok-definition"
    }, {
      tag: GV.special(GV.variableName),
      class: "tok-variableName2"
    }, {
      tag: GV.definition(GV.propertyName),
      class: "tok-propertyName tok-definition"
    }, {
      tag: GV.typeName,
      class: "tok-typeName"
    }, {
      tag: GV.namespace,
      class: "tok-namespace"
    }, {
      tag: GV.className,
      class: "tok-className"
    }, {
      tag: GV.macroName,
      class: "tok-macroName"
    }, {
      tag: GV.propertyName,
      class: "tok-propertyName"
    }, {
      tag: GV.operator,
      class: "tok-operator"
    }, {
      tag: GV.comment,
      class: "tok-comment"
    }, {
      tag: GV.meta,
      class: "tok-meta"
    }, {
      tag: GV.invalid,
      class: "tok-invalid"
    }, {
      tag: GV.punctuation,
      class: "tok-punctuation"
    }])
  },
  44279: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => pV.e,
      f: () => yV.u,
      j: () => yV.C,
      m: () => yV.E,
      n: () => pV.j,
      o: () => Px,
      s: () => pV.O,
      w: () => pV.kb
    });
    var JV = xV(1460),
      YV = xV(1458),
      UV = xV(62),
      yV = xV(44232),
      pV = xV(44234),
      QV = xV(44252),
      nV = xV(44260);

    function wV(VV, eV) {
      return xV => {
        let {
          state: JV,
          dispatch: YV
        } = xV;
        if (JV.readOnly) return !1;
        let UV = VV(eV, JV);
        return !!UV && (YV(JV.update(UV)), !0)
      }
    }
    const ZV = wV(BV, 0),
      vV = wV(EV, 0),
      rV = wV(((VV, eV) => EV(VV, eV, function(VV) {
        let eV = [];
        for (let xV of VV.selection.TE) {
          let JV = VV.doc.lineAt(xV.from),
            YV = xV.to <= JV.to ? JV : VV.doc.lineAt(xV.to);
          YV.from > JV.from && YV.from == xV.to && (YV = xV.to == JV.to + 1 ? JV : VV.doc.lineAt(xV.to - 1));
          let UV = eV.length - 1;
          UV >= 0 && eV[UV].to > JV.from ? eV[UV].to = YV.to : eV.push({
            from: JV.from + /^\s*/.exec(JV.text)[0].length,
            to: YV.to
          })
        }
        return eV
      }(eV))), 0);

    function kV(VV, eV) {
      let xV = VV.languageDataAt("commentTokens", eV, 1);
      return xV.length ? xV[0] : {}
    }
    const bV = 50;

    function EV(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : eV.selection.TE,
        JV = xV.map((VV => kV(eV, VV.from).block));
      if (!JV.every((VV => VV))) return null;
      let YV = xV.map(((VV, xV) => function(VV, eV, xV, JV) {
        let YV, UV, {
            open: yV,
            close: pV
          } = eV,
          QV = VV.sliceDoc(xV - bV, xV),
          nV = VV.sliceDoc(JV, JV + bV),
          wV = /\s*$/.exec(QV)[0].length,
          ZV = /^\s*/.exec(nV)[0].length,
          vV = QV.length - wV;
        if (QV.slice(vV - yV.length, vV) == yV && nV.slice(ZV, ZV + pV.length) == pV) return {
          open: {
            pos: xV - wV,
            margin: wV && 1
          },
          close: {
            pos: JV + ZV,
            margin: ZV && 1
          }
        };
        JV - xV <= 2 * bV ? YV = UV = VV.sliceDoc(xV, JV) : (YV = VV.sliceDoc(xV, xV + bV), UV = VV.sliceDoc(JV - bV, JV));
        let rV = /^\s*/.exec(YV)[0].length,
          kV = /\s*$/.exec(UV)[0].length,
          EV = UV.length - kV - pV.length;
        return YV.slice(rV, rV + yV.length) == yV && UV.slice(EV, EV + pV.length) == pV ? {
          open: {
            pos: xV + rV + yV.length,
            margin: /\s/.test(YV.charAt(rV + yV.length)) ? 1 : 0
          },
          close: {
            pos: JV - kV - pV.length,
            margin: /\s/.test(UV.charAt(EV - 1)) ? 1 : 0
          }
        } : null
      }(eV, JV[xV], VV.from, VV.to)));
      if (2 != VV && !YV.every((VV => VV))) return {
        changes: eV.changes(xV.map(((VV, eV) => YV[eV] ? [] : [{
          from: VV.from,
          insert: JV[eV].open + " "
        }, {
          from: VV.to,
          insert: " " + JV[eV].close
        }])))
      };
      if (1 != VV && YV.some((VV => VV))) {
        let VV = [];
        for (let eV, xV = 0; xV < YV.length; xV++)
          if (eV = YV[xV]) {
            let YV = JV[xV],
              {
                open: UV,
                close: yV
              } = eV;
            VV.push({
              from: UV.pos - YV.open.length,
              to: UV.pos + UV.margin
            }, {
              from: yV.pos - yV.margin,
              to: yV.pos + YV.close.length
            })
          } return {
          changes: VV
        }
      }
      return null
    }

    function BV(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : eV.selection.TE,
        JV = [],
        YV = -1;
      VV: for (let {
          from: UV,
          to: yV
        }
        of xV) {
        let VV, xV = JV.length,
          pV = 1e9;
        for (let QV = UV; QV <= yV;) {
          let xV = eV.doc.lineAt(QV);
          if (void 0 == VV && (VV = kV(eV, xV.from).line, !VV)) continue VV;
          if (xV.from > YV && (UV == yV || yV > xV.from)) {
            YV = xV.from;
            let eV = /^\s*/.exec(xV.text)[0].length,
              UV = eV == xV.length,
              yV = xV.text.slice(eV, eV + VV.length) == VV ? eV : -1;
            eV < xV.text.length && eV < pV && (pV = eV), JV.push({
              line: xV,
              comment: yV,
              token: VV,
              indent: eV,
              empty: UV,
              single: !1
            })
          }
          QV = xV.to + 1
        }
        if (pV < 1e9)
          for (let eV = xV; eV < JV.length; eV++) JV[eV].indent < JV[eV].line.text.length && (JV[eV].indent = pV);
        JV.length == xV + 1 && (JV[xV].single = !0)
      }
      if (2 != VV && JV.some((VV => VV.comment < 0 && (!VV.empty || VV.single)))) {
        let VV = [];
        for (let {
            line: eV,
            token: YV,
            indent: UV,
            empty: yV,
            single: pV
          }
          of JV) !pV && yV || VV.push({
          from: eV.from + UV,
          insert: YV + " "
        });
        let xV = eV.changes(VV);
        return {
          changes: xV,
          selection: eV.selection.map(xV, 1)
        }
      }
      if (1 != VV && JV.some((VV => VV.comment >= 0))) {
        let VV = [];
        for (let {
            line: eV,
            comment: xV,
            token: YV
          }
          of JV)
          if (xV >= 0) {
            let JV = eV.from + xV,
              UV = JV + YV.length;
            " " == eV.text[UV - eV.from] && UV++, VV.push({
              from: JV,
              to: UV
            })
          } return {
          changes: VV
        }
      }
      return null
    }
    const jV = yV.e.define(),
      qV = yV.e.define(),
      tV = yV.r.define(),
      FV = yV.r.define({
        combine: VV => (0, yV.T)(VV, {
          minDepth: 100,
          newGroupDelay: 500,
          joinToEvent: (VV, eV) => eV
        }, {
          minDepth: Math.max,
          newGroupDelay: Math.min,
          joinToEvent: (VV, eV) => (xV, JV) => VV(xV, JV) || eV(xV, JV)
        })
      }),
      TV = yV.E.define({
        create: () => cV.empty,
        update(VV, eV) {
          let xV = eV.state.facet(FV),
            JV = eV.annotation(jV);
          if (JV) {
            let YV = zV.fromTransaction(eV, JV.selection),
              UV = JV.side,
              yV = 0 == UV ? VV.undone : VV.done;
            return yV = YV ? GV(yV, yV.length, xV.minDepth, YV) : DV(yV, eV.startState.selection), new cV(0 == UV ? JV.rest : yV, 0 == UV ? yV : JV.rest)
          }
          let YV = eV.annotation(qV);
          if ("full" != YV && "before" != YV || (VV = VV.isolate()), !1 === eV.annotation(yV.J.addToHistory)) return eV.changes.empty ? VV : VV.addMapping(eV.changes.desc);
          let UV = zV.fromTransaction(eV),
            pV = eV.annotation(yV.J.time),
            QV = eV.annotation(yV.J.userEvent);
          return UV ? VV = VV.addChanges(UV, pV, QV, xV, eV) : eV.selection && (VV = VV.addSelection(eV.startState.selection, pV, QV, xV.newGroupDelay)), "full" != YV && "after" != YV || (VV = VV.isolate()), VV
        },
        toJSON: VV => ({
          done: VV.done.map((VV => VV.toJSON())),
          undone: VV.undone.map((VV => VV.toJSON()))
        }),
        fromJSON: VV => new cV(VV.done.map(zV.fromJSON), VV.undone.map(zV.fromJSON))
      });

    function PV(VV, eV) {
      return function(xV) {
        let {
          state: JV,
          dispatch: YV
        } = xV;
        if (!eV && JV.readOnly) return !1;
        let UV = JV.field(TV, !1);
        if (!UV) return !1;
        let yV = UV.pop(VV, JV, eV);
        return !!yV && (YV(yV), !0)
      }
    }
    const AV = PV(0, !1),
      NV = PV(1, !1),
      XV = PV(0, !0),
      MV = PV(1, !0);
    class zV {
      constructor(VV, eV, xV, JV, YV) {
        this.changes = VV, this.effects = eV, this.mapped = xV, this.startSelection = JV, this.selectionsAfter = YV
      }
      setSelAfter(VV) {
        return new zV(this.changes, this.effects, this.mapped, this.startSelection, VV)
      }
      toJSON() {
        var VV, eV, xV;
        return {
          changes: null === (VV = this.changes) || void 0 === VV ? void 0 : VV.toJSON(),
          mapped: null === (eV = this.mapped) || void 0 === eV ? void 0 : eV.toJSON(),
          startSelection: null === (xV = this.startSelection) || void 0 === xV ? void 0 : xV.toJSON(),
          selectionsAfter: this.selectionsAfter.map((VV => VV.toJSON()))
        }
      }
      static fromJSON(VV) {
        return new zV(VV.changes && yV.ChangeSet.fromJSON(VV.changes), [], VV.mapped && yV.h.fromJSON(VV.mapped), VV.startSelection && yV.n.fromJSON(VV.startSelection), VV.selectionsAfter.map(yV.n.fromJSON))
      }
      static fromTransaction(VV, eV) {
        let xV = RV;
        for (let JV of VV.startState.facet(tV)) {
          let eV = JV(VV);
          eV.length && (xV = xV.concat(eV))
        }
        return !xV.length && VV.changes.empty ? null : new zV(VV.changes.invert(VV.startState.doc), xV, void 0, eV || VV.startState.selection, RV)
      }
      static selection(VV) {
        return new zV(void 0, RV, void 0, void 0, VV)
      }
    }

    function GV(VV, eV, xV, JV) {
      let YV = eV + 1 > xV + 20 ? eV - xV - 1 : 0,
        UV = VV.slice(YV, eV);
      return UV.push(JV), UV
    }

    function WV(VV, eV) {
      return VV.length ? eV.length ? VV.concat(eV) : VV : eV
    }
    const RV = [],
      gV = 200;

    function DV(VV, eV) {
      if (VV.length) {
        let xV = VV[VV.length - 1],
          JV = xV.selectionsAfter.slice(Math.max(0, xV.selectionsAfter.length - gV));
        return JV.length && JV[JV.length - 1].eq(eV) ? VV : (JV.push(eV), GV(VV, VV.length - 1, 1e9, xV.setSelAfter(JV)))
      }
      return [zV.selection([eV])]
    }

    function iV(VV) {
      let eV = VV[VV.length - 1],
        xV = VV.slice();
      return xV[VV.length - 1] = eV.setSelAfter(eV.selectionsAfter.slice(0, eV.selectionsAfter.length - 1)), xV
    }

    function CV(VV, eV) {
      if (!VV.length) return VV;
      let xV = VV.length,
        JV = RV;
      for (; xV;) {
        let YV = aV(VV[xV - 1], eV, JV);
        if (YV.changes && !YV.changes.empty || YV.effects.length) {
          let eV = VV.slice(0, xV);
          return eV[xV - 1] = YV, eV
        }
        eV = YV.mapped, xV--, JV = YV.selectionsAfter
      }
      return JV.length ? [zV.selection(JV)] : RV
    }

    function aV(VV, eV, xV) {
      let JV = WV(VV.selectionsAfter.length ? VV.selectionsAfter.map((VV => VV.map(eV))) : RV, xV);
      if (!VV.changes) return zV.selection(JV);
      let YV = VV.changes.map(eV),
        UV = eV.mapDesc(VV.changes, !0),
        pV = VV.mapped ? VV.mapped.composeDesc(UV) : UV;
      return new zV(YV, yV.C.mapEffects(VV.effects, eV), pV, VV.startSelection.map(UV), JV)
    }
    const oV = /^(input\.type|delete)($|\.)/;
    class cV {
      constructor(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        this.done = VV, this.undone = eV, this.prevTime = xV, this.prevUserEvent = JV
      }
      isolate() {
        return this.prevTime ? new cV(this.done, this.undone) : this
      }
      addChanges(VV, eV, xV, JV, YV) {
        let UV = this.done,
          pV = UV[UV.length - 1];
        return UV = pV && pV.changes && !pV.changes.empty && VV.changes && (!xV || oV.test(xV)) && (!pV.selectionsAfter.length && eV - this.prevTime < JV.newGroupDelay && JV.joinToEvent(YV, function(VV, eV) {
          let xV = [],
            JV = !1;
          return VV.iterChangedRanges(((VV, eV) => xV.push(VV, eV))), eV.iterChangedRanges(((VV, eV, YV, UV) => {
            for (let yV = 0; yV < xV.length;) {
              let VV = xV[yV++],
                eV = xV[yV++];
              UV >= VV && YV <= eV && (JV = !0)
            }
          })), JV
        }(pV.changes, VV.changes)) || "input.type.compose" == xV) ? GV(UV, UV.length - 1, JV.minDepth, new zV(VV.changes.compose(pV.changes), WV(yV.C.mapEffects(VV.effects, pV.changes), pV.effects), pV.mapped, pV.startSelection, RV)) : GV(UV, UV.length, JV.minDepth, VV), new cV(UV, RV, eV, xV)
      }
      addSelection(VV, eV, xV, JV) {
        let YV = this.done.length ? this.done[this.done.length - 1].selectionsAfter : RV;
        return YV.length > 0 && eV - this.prevTime < JV && xV == this.prevUserEvent && xV && /^select($|\.)/.test(xV) && (UV = YV[YV.length - 1], yV = VV, UV.TE.length == yV.TE.length && 0 === UV.TE.filter(((VV, eV) => VV.empty != yV.TE[eV].empty)).length) ? this : new cV(DV(this.done, VV), this.undone, eV, xV);
        var UV, yV
      }
      addMapping(VV) {
        return new cV(CV(this.done, VV), CV(this.undone, VV), this.prevTime, this.prevUserEvent)
      }
      pop(VV, eV, xV) {
        let JV = 0 == VV ? this.done : this.undone;
        if (0 == JV.length) return null;
        let YV = JV[JV.length - 1],
          UV = YV.selectionsAfter[0] || (YV.startSelection ? YV.startSelection.map(YV.changes.invertedDesc, 1) : eV.selection);
        if (xV && YV.selectionsAfter.length) return eV.update({
          selection: YV.selectionsAfter[YV.selectionsAfter.length - 1],
          annotations: jV.of({
            side: VV,
            rest: iV(JV),
            selection: UV
          }),
          userEvent: 0 == VV ? "select.undo" : "select.redo",
          scrollIntoView: !0
        });
        if (YV.changes) {
          let xV = 1 == JV.length ? RV : JV.slice(0, JV.length - 1);
          return YV.mapped && (xV = CV(xV, YV.mapped)), eV.update({
            changes: YV.changes,
            selection: YV.startSelection,
            effects: YV.effects,
            annotations: jV.of({
              side: VV,
              rest: xV,
              selection: UV
            }),
            filter: !1,
            userEvent: 0 == VV ? "undo" : "redo",
            scrollIntoView: !0
          })
        }
        return null
      }
    }
    cV.empty = new cV(RV, RV);
    const hV = [{
      key: "Mod-z",
      run: AV,
      preventDefault: !0
    }, {
      key: "Mod-y",
      mac: "Mod-Shift-z",
      run: NV,
      preventDefault: !0
    }, {
      linux: "Ctrl-Shift-z",
      run: NV,
      preventDefault: !0
    }, {
      key: "Mod-u",
      run: XV,
      preventDefault: !0
    }, {
      key: "Alt-u",
      mac: "Mod-Shift-u",
      run: MV,
      preventDefault: !0
    }];

    function lV(VV, eV) {
      return yV.n.create(VV.TE.map(eV), VV.mainIndex)
    }

    function LV(VV, eV) {
      return VV.update({
        selection: eV,
        scrollIntoView: !0,
        userEvent: "select"
      })
    }

    function fV(VV, eV) {
      let {
        state: xV,
        dispatch: JV
      } = VV, YV = lV(xV.selection, eV);
      return !YV.eq(xV.selection, !0) && (JV(LV(xV, YV)), !0)
    }

    function mV(VV, eV) {
      return yV.n.cursor(eV ? VV.to : VV.from)
    }

    function KV(VV, eV) {
      return fV(VV, (xV => xV.empty ? VV.moveByChar(xV, eV) : mV(xV, eV)))
    }

    function HV(VV) {
      return VV.textDirectionAt(VV.state.selection.main.head) == pV.c.LTR
    }
    const uV = VV => KV(VV, !HV(VV)),
      sV = VV => KV(VV, HV(VV));

    function SV(VV, eV) {
      return fV(VV, (xV => xV.empty ? VV.moveByGroup(xV, eV) : mV(xV, eV)))
    }
    "undefined" != typeof Intl && Intl.Segmenter;

    function IV(VV, eV, xV) {
      if (eV.type.prop(xV)) return !0;
      let JV = eV.to - eV.from;
      return JV && (JV > 2 || /[^\s,.;:]/.test(VV.sliceDoc(eV.from, eV.to))) || eV.firstChild
    }

    function dV(VV, eV, xV) {
      let JV, YV, UV = (0, QV.ob)(VV).resolveInner(eV.head),
        pV = xV ? nV.h.closedBy : nV.h.openedBy;
      for (let yV = eV.head;;) {
        let eV = xV ? UV.childAfter(yV) : UV.childBefore(yV);
        if (!eV) break;
        IV(VV, eV, pV) ? UV = eV : yV = xV ? eV.to : eV.from
      }
      return YV = UV.type.prop(pV) && (JV = xV ? (0, QV.ab)(VV, UV.from, 1) : (0, QV.ab)(VV, UV.to, -1)) && JV.matched ? xV ? JV.end.to : JV.end.from : xV ? UV.to : UV.from, yV.n.cursor(YV, xV ? -1 : 1)
    }

    function OV(VV, eV) {
      return fV(VV, (xV => {
        if (!xV.empty) return mV(xV, eV);
        let JV = VV.moveVertically(xV, eV);
        return JV.head != xV.head ? JV : VV.moveToLineBoundary(xV, eV)
      }))
    }
    const Ve = VV => OV(VV, !1),
      ee = VV => OV(VV, !0);

    function xe(VV) {
      let eV, xV = VV.scrollDOM.clientHeight < VV.scrollDOM.scrollHeight - 2,
        JV = 0,
        YV = 0;
      if (xV) {
        for (let eV of VV.state.facet(pV.e.scrollMargins)) {
          let xV = eV(VV);
          (null === xV || void 0 === xV ? void 0 : xV.top) && (JV = Math.max(null === xV || void 0 === xV ? void 0 : xV.top, JV)), (null === xV || void 0 === xV ? void 0 : xV.bottom) && (YV = Math.max(null === xV || void 0 === xV ? void 0 : xV.bottom, YV))
        }
        eV = VV.scrollDOM.clientHeight - JV - YV
      } else eV = (VV.dom.ownerDocument.defaultView || window).innerHeight;
      return {
        marginTop: JV,
        marginBottom: YV,
        selfScroll: xV,
        height: Math.max(VV.defaultLineHeight, eV - 5)
      }
    }

    function Je(VV, eV) {
      let xV, JV = xe(VV),
        {
          state: YV
        } = VV,
        UV = lV(YV.selection, (xV => xV.empty ? VV.moveVertically(xV, eV, JV.height) : mV(xV, eV)));
      if (UV.eq(YV.selection)) return !1;
      if (JV.selfScroll) {
        let eV = VV.coordsAtPos(YV.selection.main.head),
          yV = VV.scrollDOM.getBoundingClientRect(),
          QV = yV.top + JV.marginTop,
          nV = yV.bottom - JV.marginBottom;
        eV && eV.top > QV && eV.bottom < nV && (xV = pV.e.scrollIntoView(UV.main.head, {
          y: "start",
          yMargin: eV.top - QV
        }))
      }
      return VV.dispatch(LV(YV, UV), {
        effects: xV
      }), !0
    }
    const Ye = VV => Je(VV, !1),
      Ue = VV => Je(VV, !0);

    function ye(VV, eV, xV) {
      let JV = VV.lineBlockAt(eV.head),
        YV = VV.moveToLineBoundary(eV, xV);
      if (YV.head == eV.head && YV.head != (xV ? JV.to : JV.from) && (YV = VV.moveToLineBoundary(eV, xV, !1)), !xV && YV.head == JV.from && JV.length) {
        let xV = /^\s*/.exec(VV.state.sliceDoc(JV.from, Math.min(JV.from + 100, JV.to)))[0].length;
        xV && eV.head != JV.from + xV && (YV = yV.n.cursor(JV.from + xV))
      }
      return YV
    }

    function pe(VV, eV, xV) {
      let JV = !1,
        YV = lV(VV.selection, (eV => {
          let YV = (0, QV.ab)(VV, eV.head, -1) || (0, QV.ab)(VV, eV.head, 1) || eV.head > 0 && (0, QV.ab)(VV, eV.head - 1, 1) || eV.head < VV.doc.length && (0, QV.ab)(VV, eV.head + 1, -1);
          if (!YV || !YV.end) return eV;
          JV = !0;
          let UV = YV.start.from == eV.head ? YV.end.to : YV.end.from;
          return xV ? yV.n.range(eV.anchor, UV) : yV.n.cursor(UV)
        }));
      return !!JV && (eV(LV(VV, YV)), !0)
    }

    function Qe(VV, eV) {
      let xV = lV(VV.state.selection, (VV => {
        let xV = eV(VV);
        return yV.n.range(VV.anchor, xV.head, xV.goalColumn, xV.bidiLevel || void 0, xV.assoc)
      }));
      return !xV.eq(VV.state.selection) && (VV.dispatch(LV(VV.state, xV)), !0)
    }

    function ne(VV, eV) {
      return Qe(VV, (xV => VV.moveByChar(xV, eV)))
    }
    const we = VV => ne(VV, !HV(VV)),
      Ze = VV => ne(VV, HV(VV));

    function ve(VV, eV) {
      return Qe(VV, (xV => VV.moveByGroup(xV, eV)))
    }

    function re(VV, eV) {
      return Qe(VV, (xV => VV.moveVertically(xV, eV)))
    }
    const ke = VV => re(VV, !1),
      be = VV => re(VV, !0);

    function Ee(VV, eV) {
      return Qe(VV, (xV => VV.moveVertically(xV, eV, xe(VV).height)))
    }
    const Be = VV => Ee(VV, !1),
      je = VV => Ee(VV, !0),
      qe = VV => {
        let {
          state: eV,
          dispatch: xV
        } = VV;
        return xV(LV(eV, {
          anchor: 0
        })), !0
      },
      te = VV => {
        let {
          state: eV,
          dispatch: xV
        } = VV;
        return xV(LV(eV, {
          anchor: eV.doc.length
        })), !0
      },
      Fe = VV => {
        let {
          state: eV,
          dispatch: xV
        } = VV;
        return xV(LV(eV, {
          anchor: eV.selection.main.anchor,
          head: 0
        })), !0
      },
      Te = VV => {
        let {
          state: eV,
          dispatch: xV
        } = VV;
        return xV(LV(eV, {
          anchor: eV.selection.main.anchor,
          head: eV.doc.length
        })), !0
      };

    function Pe(VV, eV) {
      let {
        state: xV
      } = VV, JV = xV.selection, YV = xV.selection.TE.slice();
      for (let UV of xV.selection.TE) {
        let JV = xV.doc.lineAt(UV.head);
        if (eV ? JV.to < VV.state.doc.length : JV.from > 0)
          for (let xV = UV;;) {
            let UV = VV.moveVertically(xV, eV);
            if (UV.head < JV.from || UV.head > JV.to) {
              YV.some((VV => VV.head == UV.head)) || YV.push(UV);
              break
            }
            if (UV.head == xV.head) break;
            xV = UV
          }
      }
      return YV.length != JV.TE.length && (VV.dispatch(LV(xV, yV.n.create(YV, YV.length - 1))), !0)
    }

    function Ae(VV, eV) {
      if (VV.state.readOnly) return !1;
      let xV = "delete.selection",
        {
          state: JV
        } = VV,
        YV = JV.changeByRange((JV => {
          let {
            from: YV,
            to: UV
          } = JV;
          if (YV == UV) {
            let yV = eV(JV);
            yV < YV ? (xV = "delete.backward", yV = Ne(VV, yV, !1)) : yV > YV && (xV = "delete.forward", yV = Ne(VV, yV, !0)), YV = Math.min(YV, yV), UV = Math.max(UV, yV)
          } else YV = Ne(VV, YV, !1), UV = Ne(VV, UV, !0);
          return YV == UV ? {
            range: JV
          } : {
            changes: {
              from: YV,
              to: UV
            },
            range: yV.n.cursor(YV, YV < JV.head ? -1 : 1)
          }
        }));
      return !YV.changes.empty && (VV.dispatch(JV.update(YV, {
        scrollIntoView: !0,
        userEvent: xV,
        effects: "delete.selection" == xV ? pV.e.announce.of(JV.phrase("Selection deleted")) : void 0
      })), !0)
    }

    function Ne(VV, eV, xV) {
      if (VV instanceof pV.e)
        for (let JV of VV.state.facet(pV.e.atomicRanges).map((eV => eV(VV)))) JV.between(eV, eV, ((VV, JV) => {
          VV < eV && JV > eV && (eV = xV ? JV : VV)
        }));
      return eV
    }
    const Xe = (VV, eV, xV) => Ae(VV, (JV => {
        let YV, UV, pV = JV.from,
          {
            state: nV
          } = VV,
          wV = nV.doc.lineAt(pV);
        if (xV && !eV && pV > wV.from && pV < wV.from + 200 && !/[^ \t]/.test(YV = wV.text.slice(0, pV - wV.from))) {
          if ("\t" == YV[YV.length - 1]) return pV - 1;
          let VV = (0, yV.W)(YV, nV.tabSize) % (0, QV.R)(nV) || (0, QV.R)(nV);
          for (let eV = 0; eV < VV && " " == YV[YV.length - 1 - eV]; eV++) pV--;
          UV = pV
        } else UV = (0, yV.Z)(wV.text, pV - wV.from, eV, eV) + wV.from, UV == pV && wV.number != (eV ? nV.doc.lines : 1) ? UV += eV ? 1 : -1 : !eV && /[\ufe00-\ufe0f]/.test(wV.text.slice(UV - wV.from, pV - wV.from)) && (UV = (0, yV.Z)(wV.text, UV - wV.from, !1, !1) + wV.from);
        return UV
      })),
      Me = VV => Xe(VV, !1, !0),
      ze = VV => Xe(VV, !0, !1),
      Ge = (VV, eV) => Ae(VV, (xV => {
        let JV = xV.head,
          {
            state: YV
          } = VV,
          UV = YV.doc.lineAt(JV),
          pV = YV.charCategorizer(JV);
        for (let VV = null;;) {
          if (JV == (eV ? UV.to : UV.from)) {
            JV == xV.head && UV.number != (eV ? YV.doc.lines : 1) && (JV += eV ? 1 : -1);
            break
          }
          let QV = (0, yV.Z)(UV.text, JV - UV.from, eV) + UV.from,
            nV = UV.text.slice(Math.min(JV, QV) - UV.from, Math.max(JV, QV) - UV.from),
            wV = pV(nV);
          if (null != VV && wV != VV) break;
          " " == nV && JV == xV.head || (VV = wV), JV = QV
        }
        return JV
      })),
      We = VV => Ge(VV, !1);

    function Re(VV) {
      let eV = [],
        xV = -1;
      for (let JV of VV.selection.TE) {
        let YV = VV.doc.lineAt(JV.from),
          UV = VV.doc.lineAt(JV.to);
        if (JV.empty || JV.to != UV.from || (UV = VV.doc.lineAt(JV.to - 1)), xV >= YV.number) {
          let VV = eV[eV.length - 1];
          VV.to = UV.to, VV.TE.push(JV)
        } else eV.push({
          from: YV.from,
          to: UV.to,
          TE: [JV]
        });
        xV = UV.number + 1
      }
      return eV
    }

    function ge(VV, eV, xV) {
      if (VV.readOnly) return !1;
      let JV = [],
        YV = [];
      for (let UV of Re(VV)) {
        if (xV ? UV.to == VV.doc.length : 0 == UV.from) continue;
        let eV = VV.doc.lineAt(xV ? UV.to + 1 : UV.from - 1),
          pV = eV.length + 1;
        if (xV) {
          JV.push({
            from: UV.to,
            to: eV.to
          }, {
            from: UV.from,
            insert: eV.text + VV.lineBreak
          });
          for (let eV of UV.TE) YV.push(yV.n.range(Math.min(VV.doc.length, eV.anchor + pV), Math.min(VV.doc.length, eV.head + pV)))
        } else {
          JV.push({
            from: eV.from,
            to: UV.from
          }, {
            from: UV.to,
            insert: VV.lineBreak + eV.text
          });
          for (let VV of UV.TE) YV.push(yV.n.range(VV.anchor - pV, VV.head - pV))
        }
      }
      return !!JV.length && (eV(VV.update({
        changes: JV,
        scrollIntoView: !0,
        selection: yV.n.create(YV, VV.selection.mainIndex),
        userEvent: "move.line"
      })), !0)
    }

    function De(VV, eV, xV) {
      if (VV.readOnly) return !1;
      let JV = [];
      for (let UV of Re(VV)) xV ? JV.push({
        from: UV.from,
        insert: VV.doc.slice(UV.from, UV.to) + VV.lineBreak
      }) : JV.push({
        from: UV.to,
        insert: VV.lineBreak + VV.doc.slice(UV.from, UV.to)
      });
      let YV = VV.changes(JV);
      return eV(VV.update({
        changes: YV,
        selection: VV.selection.map(YV, xV ? 1 : -1),
        scrollIntoView: !0,
        userEvent: "input.copyline"
      })), !0
    }
    const ie = Ce(!1);

    function Ce(VV) {
      return eV => {
        let {
          state: xV,
          dispatch: JV
        } = eV;
        if (xV.readOnly) return !1;
        let YV = xV.changeByRange((eV => {
          let {
            from: JV,
            to: YV
          } = eV, UV = xV.doc.lineAt(JV), pV = !VV && JV == YV && function(VV, eV) {
            if (/\(\)|\[\]|\{\}/.test(VV.sliceDoc(eV - 1, eV + 1))) return {
              from: eV,
              to: eV
            };
            let xV, JV = (0, QV.ob)(VV).resolveInner(eV),
              YV = JV.childBefore(eV),
              UV = JV.childAfter(eV);
            return YV && UV && YV.to <= eV && UV.from >= eV && (xV = YV.type.prop(nV.h.closedBy)) && xV.indexOf(UV.name) > -1 && VV.doc.lineAt(YV.to).from == VV.doc.lineAt(UV.from).from && !/\S/.test(VV.sliceDoc(YV.to, UV.from)) ? {
              from: YV.to,
              to: UV.from
            } : null
          }(xV, JV);
          VV && (JV = YV = (YV <= UV.to ? UV : xV.doc.lineAt(YV)).to);
          let wV = new QV.f(xV, {
              simulateBreak: JV,
              simulateDoubleBreak: !!pV
            }),
            ZV = (0, QV.S)(wV, JV);
          for (null == ZV && (ZV = (0, yV.W)(/^\s*/.exec(xV.doc.lineAt(JV).text)[0], xV.tabSize)); YV < UV.to && /\s/.test(UV.text[YV - UV.from]);) YV++;
          pV ? ({
            from: JV,
            to: YV
          } = pV) : JV > UV.from && JV < UV.from + 100 && !/\S/.test(UV.text.slice(0, JV)) && (JV = UV.from);
          let vV = ["", (0, QV.Y)(xV, ZV)];
          return pV && vV.push((0, QV.Y)(xV, wV.lineIndent(UV.from, -1))), {
            changes: {
              from: JV,
              to: YV,
              insert: yV.H.of(vV)
            },
            range: yV.n.cursor(JV + 1 + vV[1].length)
          }
        }));
        return JV(xV.update(YV, {
          scrollIntoView: !0,
          userEvent: "input"
        })), !0
      }
    }

    function ae(VV, eV) {
      let xV = -1;
      return VV.changeByRange((JV => {
        let YV = [];
        for (let yV = JV.from; yV <= JV.to;) {
          let UV = VV.doc.lineAt(yV);
          UV.number > xV && (JV.empty || JV.to > UV.from) && (eV(UV, YV, JV), xV = UV.number), yV = UV.to + 1
        }
        let UV = VV.changes(YV);
        return {
          changes: YV,
          range: yV.n.range(UV.mapPos(JV.anchor, 1), UV.mapPos(JV.head, 1))
        }
      }))
    }
    const oe = VV => {
        let {
          state: eV,
          dispatch: xV
        } = VV;
        return !eV.readOnly && (xV(eV.update(ae(eV, ((VV, xV) => {
          xV.push({
            from: VV.from,
            insert: eV.facet(QV._)
          })
        })), {
          userEvent: "input.indent"
        })), !0)
      },
      ce = VV => {
        let {
          state: eV,
          dispatch: xV
        } = VV;
        return !eV.readOnly && (xV(eV.update(ae(eV, ((VV, xV) => {
          let JV = /^\s*/.exec(VV.text)[0];
          if (!JV) return;
          let YV = (0, yV.W)(JV, eV.tabSize),
            UV = 0,
            pV = (0, QV.Y)(eV, Math.max(0, YV - (0, QV.R)(eV)));
          for (; UV < JV.length && UV < pV.length && JV.charCodeAt(UV) == pV.charCodeAt(UV);) UV++;
          xV.push({
            from: VV.from + UV,
            to: VV.from + JV.length,
            insert: pV.slice(UV)
          })
        })), {
          userEvent: "delete.dedent"
        })), !0)
      },
      he = [{
        key: "Alt-ArrowLeft",
        mac: "Ctrl-ArrowLeft",
        run: VV => fV(VV, (eV => dV(VV.state, eV, !HV(VV)))),
        shift: VV => Qe(VV, (eV => dV(VV.state, eV, !HV(VV))))
      }, {
        key: "Alt-ArrowRight",
        mac: "Ctrl-ArrowRight",
        run: VV => fV(VV, (eV => dV(VV.state, eV, HV(VV)))),
        shift: VV => Qe(VV, (eV => dV(VV.state, eV, HV(VV))))
      }, {
        key: "Alt-ArrowUp",
        run: VV => {
          let {
            state: eV,
            dispatch: xV
          } = VV;
          return ge(eV, xV, !1)
        }
      }, {
        key: "Shift-Alt-ArrowUp",
        run: VV => {
          let {
            state: eV,
            dispatch: xV
          } = VV;
          return De(eV, xV, !1)
        }
      }, {
        key: "Alt-ArrowDown",
        run: VV => {
          let {
            state: eV,
            dispatch: xV
          } = VV;
          return ge(eV, xV, !0)
        }
      }, {
        key: "Shift-Alt-ArrowDown",
        run: VV => {
          let {
            state: eV,
            dispatch: xV
          } = VV;
          return De(eV, xV, !0)
        }
      }, {
        key: "Mod-Alt-ArrowUp",
        run: VV => Pe(VV, !1)
      }, {
        key: "Mod-Alt-ArrowDown",
        run: VV => Pe(VV, !0)
      }, {
        key: "Escape",
        run: VV => {
          let {
            state: eV,
            dispatch: xV
          } = VV, JV = eV.selection, YV = null;
          return JV.TE.length > 1 ? YV = yV.n.create([JV.main]) : JV.main.empty || (YV = yV.n.create([yV.n.cursor(JV.main.head)])), !!YV && (xV(LV(eV, YV)), !0)
        }
      }, {
        key: "Mod-Enter",
        run: Ce(!0)
      }, {
        key: "Alt-l",
        mac: "Ctrl-l",
        run: VV => {
          let {
            state: eV,
            dispatch: xV
          } = VV, JV = Re(eV).map((VV => {
            let {
              from: xV,
              to: JV
            } = VV;
            return yV.n.range(xV, Math.min(JV + 1, eV.doc.length))
          }));
          return xV(eV.update({
            selection: yV.n.create(JV),
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Mod-i",
        run: VV => {
          let {
            state: eV,
            dispatch: xV
          } = VV, JV = lV(eV.selection, (VV => {
            let xV = (0, QV.ob)(eV),
              JV = xV.resolveStack(VV.from, 1);
            if (VV.empty) {
              let eV = xV.resolveStack(VV.from, -1);
              eV.node.from >= JV.node.from && eV.node.to <= JV.node.to && (JV = eV)
            }
            for (let eV = JV; eV; eV = eV.next) {
              let {
                node: xV
              } = eV;
              if ((xV.from < VV.from && xV.to >= VV.to || xV.to > VV.to && xV.from <= VV.from) && eV.next) return yV.n.range(xV.to, xV.from)
            }
            return VV
          }));
          return !JV.eq(eV.selection) && (xV(LV(eV, JV)), !0)
        },
        preventDefault: !0
      }, {
        key: "Mod-[",
        run: ce
      }, {
        key: "Mod-]",
        run: oe
      }, {
        key: "Mod-Alt-\\",
        run: VV => {
          let {
            state: eV,
            dispatch: xV
          } = VV;
          if (eV.readOnly) return !1;
          let JV = Object.create(null),
            YV = new QV.f(eV, {
              overrideIndentation: VV => {
                let eV = JV[VV];
                return null == eV ? -1 : eV
              }
            }),
            UV = ae(eV, ((VV, xV, UV) => {
              let yV = (0, QV.S)(YV, VV.from);
              if (null == yV) return;
              /\S/.test(VV.text) || (yV = 0);
              let pV = /^\s*/.exec(VV.text)[0],
                nV = (0, QV.Y)(eV, yV);
              (pV != nV || UV.from < VV.from + pV.length) && (JV[VV.from] = yV, xV.push({
                from: VV.from,
                to: VV.from + pV.length,
                insert: nV
              }))
            }));
          return UV.changes.empty || xV(eV.update(UV, {
            userEvent: "indent"
          })), !0
        }
      }, {
        key: "Shift-Mod-k",
        run: VV => {
          if (VV.state.readOnly) return !1;
          let {
            state: eV
          } = VV, xV = eV.changes(Re(eV).map((VV => {
            let {
              from: xV,
              to: JV
            } = VV;
            return xV > 0 ? xV-- : JV < eV.doc.length && JV++, {
              from: xV,
              to: JV
            }
          }))), JV = lV(eV.selection, (eV => {
            let xV;
            if (VV.lineWrapping) {
              let JV = VV.lineBlockAt(eV.head),
                YV = VV.coordsAtPos(eV.head, eV.assoc || 1);
              YV && (xV = JV.bottom + VV.documentTop - YV.bottom + VV.defaultLineHeight / 2)
            }
            return VV.moveVertically(eV, !0, xV)
          })).map(xV);
          return VV.dispatch({
            changes: xV,
            selection: JV,
            scrollIntoView: !0,
            userEvent: "delete.line"
          }), !0
        }
      }, {
        key: "Shift-Mod-\\",
        run: VV => {
          let {
            state: eV,
            dispatch: xV
          } = VV;
          return pe(eV, xV, !1)
        }
      }, {
        key: "Mod-/",
        run: VV => {
          let {
            state: eV
          } = VV, xV = eV.doc.lineAt(eV.selection.main.from), JV = kV(VV.state, xV.from);
          return JV.line ? ZV(VV) : !!JV.block && rV(VV)
        }
      }, {
        key: "Alt-A",
        run: vV
      }, {
        key: "Ctrl-m",
        mac: "Shift-Alt-m",
        run: VV => (VV.setTabFocusMode(), !0)
      }].concat([{
        key: "ArrowLeft",
        run: uV,
        shift: we,
        preventDefault: !0
      }, {
        key: "Mod-ArrowLeft",
        mac: "Alt-ArrowLeft",
        run: VV => SV(VV, !HV(VV)),
        shift: VV => ve(VV, !HV(VV)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowLeft",
        run: VV => fV(VV, (eV => ye(VV, eV, !HV(VV)))),
        shift: VV => Qe(VV, (eV => ye(VV, eV, !HV(VV)))),
        preventDefault: !0
      }, {
        key: "ArrowRight",
        run: sV,
        shift: Ze,
        preventDefault: !0
      }, {
        key: "Mod-ArrowRight",
        mac: "Alt-ArrowRight",
        run: VV => SV(VV, HV(VV)),
        shift: VV => ve(VV, HV(VV)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowRight",
        run: VV => fV(VV, (eV => ye(VV, eV, HV(VV)))),
        shift: VV => Qe(VV, (eV => ye(VV, eV, HV(VV)))),
        preventDefault: !0
      }, {
        key: "ArrowUp",
        run: Ve,
        shift: ke,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowUp",
        run: qe,
        shift: Fe
      }, {
        mac: "Ctrl-ArrowUp",
        run: Ye,
        shift: Be
      }, {
        key: "ArrowDown",
        run: ee,
        shift: be,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowDown",
        run: te,
        shift: Te
      }, {
        mac: "Ctrl-ArrowDown",
        run: Ue,
        shift: je
      }, {
        key: "PageUp",
        run: Ye,
        shift: Be
      }, {
        key: "PageDown",
        run: Ue,
        shift: je
      }, {
        key: "Home",
        run: VV => fV(VV, (eV => ye(VV, eV, !1))),
        shift: VV => Qe(VV, (eV => ye(VV, eV, !1))),
        preventDefault: !0
      }, {
        key: "Mod-Home",
        run: qe,
        shift: Fe
      }, {
        key: "End",
        run: VV => fV(VV, (eV => ye(VV, eV, !0))),
        shift: VV => Qe(VV, (eV => ye(VV, eV, !0))),
        preventDefault: !0
      }, {
        key: "Mod-End",
        run: te,
        shift: Te
      }, {
        key: "Enter",
        run: ie,
        shift: ie
      }, {
        key: "Mod-a",
        run: VV => {
          let {
            state: eV,
            dispatch: xV
          } = VV;
          return xV(eV.update({
            selection: {
              anchor: 0,
              head: eV.doc.length
            },
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Backspace",
        run: Me,
        shift: Me,
        preventDefault: !0
      }, {
        key: "Delete",
        run: ze,
        preventDefault: !0
      }, {
        key: "Mod-Backspace",
        mac: "Alt-Backspace",
        run: We,
        preventDefault: !0
      }, {
        key: "Mod-Delete",
        mac: "Alt-Delete",
        run: VV => Ge(VV, !0),
        preventDefault: !0
      }, {
        mac: "Mod-Backspace",
        run: VV => Ae(VV, (eV => {
          let xV = VV.moveToLineBoundary(eV, !1).head;
          return eV.head > xV ? xV : Math.max(0, eV.head - 1)
        })),
        preventDefault: !0
      }, {
        mac: "Mod-Delete",
        run: VV => Ae(VV, (eV => {
          let xV = VV.moveToLineBoundary(eV, !0).head;
          return eV.head < xV ? xV : Math.min(VV.state.doc.length, eV.head + 1)
        })),
        preventDefault: !0
      }].concat([{
        key: "Ctrl-b",
        run: uV,
        shift: we,
        preventDefault: !0
      }, {
        key: "Ctrl-f",
        run: sV,
        shift: Ze
      }, {
        key: "Ctrl-p",
        run: Ve,
        shift: ke
      }, {
        key: "Ctrl-n",
        run: ee,
        shift: be
      }, {
        key: "Ctrl-a",
        run: VV => fV(VV, (eV => yV.n.cursor(VV.lineBlockAt(eV.head).from, 1))),
        shift: VV => Qe(VV, (eV => yV.n.cursor(VV.lineBlockAt(eV.head).from)))
      }, {
        key: "Ctrl-e",
        run: VV => fV(VV, (eV => yV.n.cursor(VV.lineBlockAt(eV.head).to, -1))),
        shift: VV => Qe(VV, (eV => yV.n.cursor(VV.lineBlockAt(eV.head).to)))
      }, {
        key: "Ctrl-d",
        run: ze
      }, {
        key: "Ctrl-h",
        run: Me
      }, {
        key: "Ctrl-k",
        run: VV => Ae(VV, (eV => {
          let xV = VV.lineBlockAt(eV.head).to;
          return eV.head < xV ? xV : Math.min(VV.state.doc.length, eV.head + 1)
        }))
      }, {
        key: "Ctrl-Alt-h",
        run: We
      }, {
        key: "Ctrl-o",
        run: VV => {
          let {
            state: eV,
            dispatch: xV
          } = VV;
          if (eV.readOnly) return !1;
          let JV = eV.changeByRange((VV => ({
            changes: {
              from: VV.from,
              to: VV.to,
              insert: yV.H.of(["", ""])
            },
            range: yV.n.cursor(VV.from)
          })));
          return xV(eV.update(JV, {
            scrollIntoView: !0,
            userEvent: "input"
          })), !0
        }
      }, {
        key: "Ctrl-t",
        run: VV => {
          let {
            state: eV,
            dispatch: xV
          } = VV;
          if (eV.readOnly) return !1;
          let JV = eV.changeByRange((VV => {
            if (!VV.empty || 0 == VV.from || VV.from == eV.doc.length) return {
              range: VV
            };
            let xV = VV.from,
              JV = eV.doc.lineAt(xV),
              YV = xV == JV.from ? xV - 1 : (0, yV.Z)(JV.text, xV - JV.from, !1) + JV.from,
              UV = xV == JV.to ? xV + 1 : (0, yV.Z)(JV.text, xV - JV.from, !0) + JV.from;
            return {
              changes: {
                from: YV,
                to: UV,
                insert: eV.doc.slice(xV, UV).append(eV.doc.slice(YV, xV))
              },
              range: yV.n.cursor(UV)
            }
          }));
          return !JV.changes.empty && (xV(eV.update(JV, {
            scrollIntoView: !0,
            userEvent: "move.character"
          })), !0)
        }
      }, {
        key: "Ctrl-v",
        run: Ue
      }].map((VV => ({
        mac: VV.key,
        run: VV.run,
        shift: VV.shift
      }))))),
      le = {
        key: "Tab",
        run: oe,
        shift: ce
      };
    var Le = xV(44282),
      fe = xV(44228),
      me = xV(44288),
      Ke = function(VV) {
        void 0 === VV && (VV = {});
        var {
          crosshairCursor: eV = !1
        } = VV, xV = [];
        !1 !== VV.closeBracketsKeymap && (xV = xV.concat(fe.e)), !1 !== VV.defaultKeymap && (xV = xV.concat(he)), !1 !== VV.searchKeymap && (xV = xV.concat(Le.h)), !1 !== VV.historyKeymap && (xV = xV.concat(hV)), !1 !== VV.foldKeymap && (xV = xV.concat(QV.K)), !1 !== VV.completionKeymap && (xV = xV.concat(fe.m)), !1 !== VV.lintKeymap && (xV = xV.concat(me.c));
        var JV = [];
        return !1 !== VV.lineNumbers && JV.push((0, pV.U)()), !1 !== VV.highlightActiveLineGutter && JV.push((0, pV.E)()), !1 !== VV.highlightSpecialChars && JV.push((0, pV.K)()), !1 !== VV.history && JV.push(function() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return [TV, FV.of(VV), pV.e.domEventHandlers({
            beforeinput(VV, eV) {
              let xV = "historyUndo" == VV.inputType ? AV : "historyRedo" == VV.inputType ? NV : null;
              return !!xV && (VV.preventDefault(), xV(eV))
            }
          })]
        }()), !1 !== VV.foldGutter && JV.push((0, QV.D)()), !1 !== VV.drawSelection && JV.push((0, pV.u)()), !1 !== VV.dropCursor && JV.push((0, pV.v)()), !1 !== VV.allowMultipleSelections && JV.push(yV.q.allowMultipleSelections.of(!0)), !1 !== VV.indentOnInput && JV.push((0, QV.X)()), !1 !== VV.syntaxHighlighting && JV.push((0, QV.gb)(QV.t, {
          fallback: !0
        })), !1 !== VV.bracketMatching && JV.push((0, QV.o)()), !1 !== VV.closeBrackets && JV.push((0, fe.f)()), !1 !== VV.autocompletion && JV.push((0, fe.b)()), !1 !== VV.rectangularSelection && JV.push((0, pV.bb)()), !1 !== eV && JV.push((0, pV.q)()), !1 !== VV.highlightActiveLine && JV.push((0, pV.G)()), !1 !== VV.highlightSelectionMatches && JV.push((0, Le.g)()), VV.tabSize && "number" === typeof VV.tabSize && JV.push(QV._.of(" ".repeat(VV.tabSize))), JV.concat([pV.Q.of(xV.flat())]).filter(Boolean)
      },
      He = xV(44267);
    const ue = "#e5c07b",
      se = "#e06c75",
      Se = "#56b6c2",
      Ie = "#ffffff",
      de = "#abb2bf",
      Oe = "#7d8799",
      Vx = "#61afef",
      ex = "#98c379",
      xx = "#d19a66",
      Jx = "#c678dd",
      Yx = "#21252b",
      Ux = "#2c313a",
      yx = "#282c34",
      px = "#353a42",
      Qx = "#3E4451",
      nx = "#528bff",
      wx = pV.e.theme({
        "&": {
          color: de,
          backgroundColor: yx
        },
        ".cm-content": {
          caretColor: nx
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: nx
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: Qx
        },
        ".cm-panels": {
          backgroundColor: Yx,
          color: de
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
          backgroundColor: yx,
          color: Oe,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: Ux
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#ddd"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: px
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: px,
          borderBottomColor: px
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: Ux,
            color: de
          }
        }
      }, {
        dark: !0
      }),
      Zx = QV.d.define([{
        tag: He.j.keyword,
        color: Jx
      }, {
        tag: [He.j.name, He.j.deleted, He.j.character, He.j.propertyName, He.j.macroName],
        color: se
      }, {
        tag: [He.j.function(He.j.variableName), He.j.labelName],
        color: Vx
      }, {
        tag: [He.j.color, He.j.constant(He.j.name), He.j.standard(He.j.name)],
        color: xx
      }, {
        tag: [He.j.definition(He.j.name), He.j.separator],
        color: de
      }, {
        tag: [He.j.typeName, He.j.className, He.j.number, He.j.changed, He.j.annotation, He.j.modifier, He.j.self, He.j.namespace],
        color: ue
      }, {
        tag: [He.j.operator, He.j.operatorKeyword, He.j.url, He.j.escape, He.j.regexp, He.j.link, He.j.special(He.j.string)],
        color: Se
      }, {
        tag: [He.j.meta, He.j.comment],
        color: Oe
      }, {
        tag: He.j.strong,
        fontWeight: "bold"
      }, {
        tag: He.j.emphasis,
        fontStyle: "italic"
      }, {
        tag: He.j.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: He.j.link,
        color: Oe,
        textDecoration: "underline"
      }, {
        tag: He.j.heading,
        fontWeight: "bold",
        color: se
      }, {
        tag: [He.j.atom, He.j.bool, He.j.special(He.j.variableName)],
        color: xx
      }, {
        tag: [He.j.processingInstruction, He.j.string, He.j.inserted],
        color: ex
      }, {
        tag: He.j.invalid,
        color: Ie
      }]),
      vx = [wx, (0, QV.gb)(Zx)];
    var rx = pV.e.theme({
      "&": {
        backgroundColor: "#fff"
      }
    }, {
      dark: !1
    });
    class kx {
      constructor(VV, eV) {
        this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = eV, this.timeoutMS = eV, this.callbacks.push(VV)
      }
      iZ() {
        if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
          this.isTimeExhausted = !0;
          var VV = this.callbacks.slice();
          this.callbacks.length = 0, VV.forEach((VV => {
            try {
              VV()
            } catch (eV) {
              console.error("TimeoutLatch callback error:", eV)
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
    class bx {
      constructor() {
        this.interval = null, this.latches = new Set
      }
      add(VV) {
        this.latches.add(VV), this.start()
      }
      remove(VV) {
        this.latches.delete(VV), 0 === this.latches.size && this.stop()
      }
      start() {
        null === this.interval && (this.interval = setInterval((() => {
          this.latches.forEach((VV => {
            VV.iZ(), VV.isDone && this.remove(VV)
          }))
        }), 1))
      }
      stop() {
        null !== this.interval && (clearInterval(this.interval), this.interval = null)
      }
    }
    var Ex = null,
      Bx = yV.e.define(),
      jx = [];

    function qx(VV) {
      var {
        value: eV,
        selection: xV,
        onChange: JV,
        onStatistics: YV,
        onCreateEditor: QV,
        onUpdate: nV,
        extensions: wV = jx,
        autoFocus: ZV,
        theme: vV = "light",
        height: rV = null,
        minHeight: kV = null,
        maxHeight: bV = null,
        width: EV = null,
        minWidth: BV = null,
        maxWidth: jV = null,
        placeholder: qV = "",
        editable: tV = !0,
        readOnly: FV = !1,
        indentWithTab: TV = !0,
        basicSetup: PV = !0,
        root: AV,
        initialState: NV
      } = VV, [XV, MV] = (0, UV.useState)(), [zV, GV] = (0, UV.useState)(), [WV, RV] = (0, UV.useState)(), gV = (0, UV.useState)((() => ({
        current: null
      })))[0], DV = (0, UV.useState)((() => ({
        current: null
      })))[0], iV = pV.e.theme({
        "&": {
          height: rV,
          minHeight: kV,
          maxHeight: bV,
          width: EV,
          minWidth: BV,
          maxWidth: jV
        },
        "& .cm-scroller": {
          height: "100% !important"
        }
      }), CV = pV.e.updateListener.of((VV => {
        if (VV.docChanged && "function" === typeof JV && !VV.transactions.some((VV => VV.annotation(Bx)))) {
          gV.current ? gV.current.reset() : (gV.current = new kx((() => {
            if (DV.current) {
              var VV = DV.current;
              DV.current = null, VV()
            }
            gV.current = null
          }), 200), ("undefined" === typeof window ? new bx : (Ex || (Ex = new bx), Ex)).add(gV.current));
          var eV = VV.state.doc.toString();
          JV(eV, VV)
        }
        YV && YV((VV => ({
          line: VV.state.doc.lineAt(VV.state.selection.main.from),
          lineCount: VV.state.doc.lines,
          lineBreak: VV.state.lineBreak,
          length: VV.state.doc.length,
          readOnly: VV.state.readOnly,
          tabSize: VV.state.tabSize,
          selection: VV.state.selection,
          selectionAsSingle: VV.state.selection.asSingle().main,
          TE: VV.state.selection.TE,
          selectionCode: VV.state.sliceDoc(VV.state.selection.main.from, VV.state.selection.main.to),
          selections: VV.state.selection.TE.map((eV => VV.state.sliceDoc(eV.from, eV.to))),
          selectedText: VV.state.selection.TE.some((VV => !VV.empty))
        }))(VV))
      })), aV = function(VV) {
        void 0 === VV && (VV = {});
        var {
          indentWithTab: eV = !0,
          editable: xV = !0,
          readOnly: JV = !1,
          theme: YV = "light",
          placeholder: UV = "",
          basicSetup: QV = !0
        } = VV, nV = [];
        switch (eV && nV.unshift(pV.Q.of([le])), QV && ("boolean" === typeof QV ? nV.unshift(Ke()) : nV.unshift(Ke(QV))), UV && nV.unshift((0, pV._)(UV)), YV) {
          case "light":
            nV.push(rx);
            break;
          case "dark":
            nV.push(vx);
            break;
          case "none":
            break;
          default:
            nV.push(YV)
        }
        return !1 === xV && nV.push(pV.e.editable.of(!1)), JV && nV.push(yV.q.readOnly.of(!0)), [...nV]
      }({
        theme: vV,
        editable: tV,
        readOnly: FV,
        placeholder: qV,
        indentWithTab: TV,
        basicSetup: PV
      }), oV = [CV, iV, ...aV];
      return nV && "function" === typeof nV && oV.push(pV.e.updateListener.of(nV)), oV = oV.concat(wV), (0, UV.useLayoutEffect)((() => {
        if (XV && !WV) {
          var VV = {
              doc: eV,
              selection: xV,
              extensions: oV
            },
            JV = NV ? yV.q.fromJSON(NV.json, VV, NV.fields) : yV.q.create(VV);
          if (RV(JV), !zV) {
            var YV = new pV.e({
              state: JV,
              parent: XV,
              root: AV
            });
            GV(YV), QV && QV(YV, JV)
          }
        }
        return () => {
          zV && (RV(void 0), GV(void 0))
        }
      }), [XV, WV]), (0, UV.useEffect)((() => {
        VV.container && MV(VV.container)
      }), [VV.container]), (0, UV.useEffect)((() => () => {
        zV && (zV.destroy(), GV(void 0)), gV.current && (gV.current.cancel(), gV.current = null)
      }), [zV]), (0, UV.useEffect)((() => {
        ZV && zV && zV.focus()
      }), [ZV, zV]), (0, UV.useEffect)((() => {
        zV && zV.dispatch({
          effects: yV.C.reconfigure.of(oV)
        })
      }), [vV, wV, rV, kV, bV, EV, BV, jV, qV, tV, FV, TV, PV, JV, nV]), (0, UV.useEffect)((() => {
        if (void 0 !== eV) {
          var VV = zV ? zV.state.doc.toString() : "";
          if (zV && eV !== VV) {
            var xV = () => {
              zV && eV !== zV.state.doc.toString() && zV.dispatch({
                changes: {
                  from: 0,
                  to: zV.state.doc.toString().length,
                  insert: eV || ""
                },
                annotations: [Bx.of(!0)]
              })
            };
            gV.current && !gV.current.isDone ? DV.current = xV : xV()
          }
        }
      }), [eV, zV]), {
        state: WV,
        setState: RV,
        view: zV,
        setView: GV,
        container: XV,
        setContainer: MV
      }
    }
    var tx = xV(1321),
      Fx = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"],
      Tx = (0, UV.forwardRef)(((VV, eV) => {
        var {
          className: xV,
          value: yV = "",
          selection: pV,
          extensions: QV = [],
          onChange: nV,
          onStatistics: wV,
          onCreateEditor: ZV,
          onUpdate: vV,
          autoFocus: rV,
          theme: kV = "light",
          height: bV,
          minHeight: EV,
          maxHeight: BV,
          width: jV,
          minWidth: qV,
          maxWidth: tV,
          basicSetup: FV,
          placeholder: TV,
          indentWithTab: PV,
          editable: AV,
          readOnly: NV,
          root: XV,
          initialState: MV
        } = VV, zV = (0, YV.b)(VV, Fx), GV = (0, UV.useRef)(null), {
          state: WV,
          view: RV,
          container: gV,
          setContainer: DV
        } = qx({
          root: XV,
          value: yV,
          autoFocus: rV,
          theme: kV,
          height: bV,
          minHeight: EV,
          maxHeight: BV,
          width: jV,
          minWidth: qV,
          maxWidth: tV,
          basicSetup: FV,
          placeholder: TV,
          indentWithTab: PV,
          editable: AV,
          readOnly: NV,
          selection: pV,
          onChange: nV,
          onStatistics: wV,
          onCreateEditor: ZV,
          onUpdate: vV,
          extensions: QV,
          initialState: MV
        });
        (0, UV.useImperativeHandle)(eV, (() => ({
          editor: GV.current,
          state: WV,
          view: RV
        })), [GV, gV, WV, RV]);
        var iV = (0, UV.useCallback)((VV => {
          GV.current = VV, DV(VV)
        }), [DV]);
        if ("string" !== typeof yV) throw new Error("value must be typeof string but got " + typeof yV);
        var CV = "string" === typeof kV ? "cm-theme-" + kV : "cm-theme";
        return (0, tx.jsx)("div", (0, JV.c)({
          ref: iV,
          className: CV + (xV ? " " + xV : "")
        }, zV))
      }));
    Tx.displayName = "CodeMirror";
    const Px = Tx
  },
  44243: (VV, eV, xV) => {
    function JV() {
      var VV = arguments[0];
      "string" == typeof VV && (VV = document.createElement(VV));
      var eV = 1,
        xV = arguments[1];
      if (xV && "object" == typeof xV && null == xV.nodeType && !Array.isArray(xV)) {
        for (var JV in xV)
          if (Object.prototype.hasOwnProperty.call(xV, JV)) {
            var UV = xV[JV];
            "string" == typeof UV ? VV.setAttribute(JV, UV) : null != UV && (VV[JV] = UV)
          } eV++
      }
      for (; eV < arguments.length; eV++) YV(VV, arguments[eV]);
      return VV
    }

    function YV(VV, eV) {
      if ("string" == typeof eV) VV.appendChild(document.createTextNode(eV));
      else if (null == eV);
      else if (null != eV.nodeType) VV.appendChild(eV);
      else {
        if (!Array.isArray(eV)) throw new RangeError("Unsupported child node: " + eV);
        for (var xV = 0; xV < eV.length; xV++) YV(VV, eV[xV])
      }
    }
    xV.d(eV, {
      b: () => JV
    })
  },
  44237: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => yV
    });
    const JV = "undefined" == typeof Symbol ? "__\u037c" : Symbol.for("\u037c"),
      YV = "undefined" == typeof Symbol ? "__styleSet" + Math.floor(1e8 * Math.random()) : Symbol("styleSet"),
      UV = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : {};
    class yV {
      constructor(VV, eV) {
        this.rules = [];
        let {
          finish: xV
        } = eV || {};

        function JV(VV) {
          return /^@/.test(VV) ? [VV] : VV.split(/,\s*/)
        }

        function YV(VV, eV, UV, yV) {
          let pV = [],
            QV = /^@(\w+)\b/.exec(VV[0]),
            nV = QV && "keyframes" == QV[1];
          if (QV && null == eV) return UV.push(VV[0] + ";");
          for (let xV in eV) {
            let yV = eV[xV];
            if (/&/.test(xV)) YV(xV.split(/,\s*/).map((eV => VV.map((VV => eV.replace(/&/, VV))))).reduce(((VV, eV) => VV.concat(eV))), yV, UV);
            else if (yV && "object" == typeof yV) {
              if (!QV) throw new RangeError("The value of a property (" + xV + ") should be a primitive value.");
              YV(JV(xV), yV, pV, nV)
            } else null != yV && pV.push(xV.replace(/_.*/, "").replace(/[A-Z]/g, (VV => "-" + VV.toLowerCase())) + ": " + yV + ";")
          }(pV.length || nV) && UV.push((!xV || QV || yV ? VV : VV.map(xV)).join(", ") + " {" + pV.join(" ") + "}")
        }
        for (let UV in VV) YV(JV(UV), VV[UV], this.rules)
      }
      getRules() {
        return this.rules.join("\n")
      }
      static newName() {
        let VV = UV[JV] || 1;
        return UV[JV] = VV + 1, "\u037c" + VV.toString(36)
      }
      static mount(VV, eV, xV) {
        let JV = VV[YV],
          UV = xV && xV.nonce;
        JV ? UV && JV.setNonce(UV) : JV = new QV(VV, UV), JV.mount(Array.isArray(eV) ? eV : [eV], VV)
      }
    }
    let pV = new Map;
    class QV {
      constructor(VV, eV) {
        let xV = VV.ownerDocument || VV,
          JV = xV.defaultView;
        if (!VV.head && VV.adoptedStyleSheets && JV.CSSStyleSheet) {
          let eV = pV.get(xV);
          if (eV) return VV[YV] = eV;
          this.sheet = new JV.CSSStyleSheet, pV.set(xV, this)
        } else this.styleTag = xV.createElement("style"), eV && this.styleTag.setAttribute("nonce", eV);
        this.modules = [], VV[YV] = this
      }
      mount(VV, eV) {
        let xV = this.sheet,
          JV = 0,
          YV = 0;
        for (let UV = 0; UV < VV.length; UV++) {
          let eV = VV[UV],
            yV = this.modules.indexOf(eV);
          if (yV < YV && yV > -1 && (this.modules.splice(yV, 1), YV--, yV = -1), -1 == yV) {
            if (this.modules.splice(YV++, 0, eV), xV)
              for (let VV = 0; VV < eV.rules.length; VV++) xV.insertRule(eV.rules[VV], JV++)
          } else {
            for (; YV < yV;) JV += this.modules[YV++].rules.length;
            JV += eV.rules.length, YV++
          }
        }
        if (xV) eV.adoptedStyleSheets.indexOf(this.sheet) < 0 && (eV.adoptedStyleSheets = [this.sheet, ...eV.adoptedStyleSheets]);
        else {
          let VV = "";
          for (let eV = 0; eV < this.modules.length; eV++) VV += this.modules[eV].getRules() + "\n";
          this.styleTag.textContent = VV;
          let xV = eV.head || eV;
          this.styleTag.parentNode != xV && xV.insertBefore(this.styleTag, xV.firstChild)
        }
      }
      setNonce(VV) {
        this.styleTag && this.styleTag.getAttribute("nonce") != VV && this.styleTag.setAttribute("nonce", VV)
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);