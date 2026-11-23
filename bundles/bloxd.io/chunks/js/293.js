export const id = 293;
export const ids = [293];
export const modules = {
  41122: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => Hz,
      g: () => iz,
      i: () => Gz,
      j: () => oC,
      m: () => Ez,
      p: () => qC,
      r: () => Nz
    });
    var QC = ZC(41125),
      wC = ZC(41128),
      bC = ZC(41142);
    class nC {
      constructor(CC, zC, ZC, QC) {
        this.state = CC, this.pos = zC, this.explicit = ZC, this.view = QC, this.abortListeners = [], this.abortOnDocChange = !1
      }
      tokenBefore(CC) {
        let zC = (0, bC.gb)(this.state).resolveInner(this.pos, -1);
        for (; zC && CC.indexOf(zC.name) < 0;) zC = zC.parent;
        return zC ? {
          from: zC.from,
          to: this.pos,
          text: this.state.sliceDoc(zC.from, this.pos),
          type: zC.type
        } : null
      }
      matchBefore(CC) {
        let zC = this.state.doc.lineAt(this.pos),
          ZC = Math.max(zC.from, this.pos - 250),
          QC = zC.text.slice(ZC - zC.from, this.pos - zC.from),
          wC = QC.search(NC(CC, !1));
        return wC < 0 ? null : {
          from: ZC + wC,
          to: this.pos,
          text: QC.slice(wC)
        }
      }
      get aborted() {
        return null == this.abortListeners
      }
      addEventListener(CC, zC, ZC) {
        "abort" == CC && this.abortListeners && (this.abortListeners.push(zC), ZC && ZC.onDocChange && (this.abortOnDocChange = !0))
      }
    }

    function fC(CC) {
      let zC = Object.keys(CC).join(""),
        ZC = /\w/.test(zC);
      return ZC && (zC = zC.replace(/\w/g, "")), `[${ZC?"\\w":""}${zC.replace(/[^\w\s]/g,"\\$&")}]`
    }

    function oC(CC) {
      let zC = CC.map((CC => "string" == typeof CC ? {
          label: CC
        } : CC)),
        [ZC, QC] = zC.every((CC => /^\w+$/.test(CC.label))) ? [/\w*$/, /\w+$/] : function(CC) {
          let zC = Object.create(null),
            ZC = Object.create(null);
          for (let {
              label: wC
            }
            of CC) {
            zC[wC[0]] = !0;
            for (let CC = 1; CC < wC.length; CC++) ZC[wC[CC]] = !0
          }
          let QC = fC(zC) + fC(ZC) + "*$";
          return [new RegExp("^" + QC), new RegExp(QC)]
        }(zC);
      return CC => {
        let wC = CC.matchBefore(QC);
        return wC || CC.explicit ? {
          from: wC ? wC.from : CC.pos,
          options: zC,
          validFor: ZC
        } : null
      }
    }

    function qC(CC, zC) {
      return ZC => {
        for (let zC = (0, bC.gb)(ZC.state).resolveInner(ZC.pos, -1); zC; zC = zC.parent) {
          if (CC.indexOf(zC.name) > -1) return null;
          if (zC.type.isTop) break
        }
        return zC(ZC)
      }
    }
    class FC {
      constructor(CC, zC, ZC, QC) {
        this.completion = CC, this.source = zC, this.match = ZC, this.score = QC
      }
    }

    function WC(CC) {
      return CC.selection.main.from
    }

    function NC(CC, zC) {
      var ZC;
      let {
        source: QC
      } = CC, wC = zC && "^" != QC[0], bC = "$" != QC[QC.length - 1];
      return wC || bC ? new RegExp(`${wC?"^":""}(?:${QC})${bC?"$":""}`, null !== (ZC = CC.flags) && void 0 !== ZC ? ZC : CC.ignoreCase ? "i" : "") : CC
    }
    const MC = QC.d.define();

    function gC(CC, zC, ZC, wC) {
      let {
        main: bC
      } = CC.selection, nC = ZC - bC.from, fC = wC - bC.from;
      return {
        ...CC.changeByRange((oC => {
          if (oC != bC && ZC != wC && CC.sliceDoc(oC.from + nC, oC.from + fC) != CC.sliceDoc(ZC, wC)) return {
            range: oC
          };
          let qC = CC.toText(zC);
          return {
            changes: {
              from: oC.from + nC,
              to: wC == bC.from ? oC.to : oC.from + fC,
              insert: qC
            },
            range: QC.i.cursor(oC.from + nC + qC.length)
          }
        })),
        scrollIntoView: !0,
        userEvent: "input.complete"
      }
    }
    const SC = new WeakMap;

    function pC(CC) {
      if (!Array.isArray(CC)) return CC;
      let zC = SC.get(CC);
      return zC || SC.set(CC, zC = oC(CC)), zC
    }
    const PC = QC.w.define(),
      GC = QC.w.define();
    class RC {
      constructor(CC) {
        this.pattern = CC, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
        for (let zC = 0; zC < CC.length;) {
          let ZC = (0, QC.I)(CC, zC),
            wC = (0, QC.M)(ZC);
          this.chars.push(ZC);
          let bC = CC.slice(zC, zC + wC),
            nC = bC.toUpperCase();
          this.folded.push((0, QC.I)(nC == bC ? bC.toLowerCase() : nC, 0)), zC += wC
        }
        this.astral = CC.length != this.chars.length
      }
      ret(CC, zC) {
        return this.score = CC, this.matched = zC, this
      }
      match(CC) {
        if (0 == this.pattern.length) return this.ret(-100, []);
        if (CC.length < this.pattern.length) return null;
        let {
          chars: zC,
          folded: ZC,
          any: wC,
          precise: bC,
          byWord: nC
        } = this;
        if (1 == zC.length) {
          let wC = (0, QC.I)(CC, 0),
            bC = (0, QC.M)(wC),
            nC = bC == CC.length ? 0 : -100;
          if (wC == zC[0]);
          else {
            if (wC != ZC[0]) return null;
            nC += -200
          }
          return this.ret(nC, [0, bC])
        }
        let fC = CC.indexOf(this.pattern);
        if (0 == fC) return this.ret(CC.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
        let oC = zC.length,
          qC = 0;
        if (fC < 0) {
          for (let bC = 0, nC = Math.min(CC.length, 200); bC < nC && qC < oC;) {
            let nC = (0, QC.I)(CC, bC);
            nC != zC[qC] && nC != ZC[qC] || (wC[qC++] = bC), bC += (0, QC.M)(nC)
          }
          if (qC < oC) return null
        }
        let FC = 0,
          WC = 0,
          NC = !1,
          MC = 0,
          gC = -1,
          SC = -1,
          pC = /[a-z]/.test(CC),
          PC = !0;
        for (let GC = 0, RC = Math.min(CC.length, 200), AC = 0; GC < RC && WC < oC;) {
          let wC = (0, QC.I)(CC, GC);
          fC < 0 && (FC < oC && wC == zC[FC] && (bC[FC++] = GC), MC < oC && (wC == zC[MC] || wC == ZC[MC] ? (0 == MC && (gC = GC), SC = GC + 1, MC++) : MC = 0));
          let qC, RC = wC < 255 ? wC >= 48 && wC <= 57 || wC >= 97 && wC <= 122 ? 2 : wC >= 65 && wC <= 90 ? 1 : 0 : (qC = (0, QC.$)(wC)) != qC.toLowerCase() ? 1 : qC != qC.toUpperCase() ? 2 : 0;
          (!GC || 1 == RC && pC || 0 == AC && 0 != RC) && (zC[WC] == wC || ZC[WC] == wC && (NC = !0) ? nC[WC++] = GC : nC.length && (PC = !1)), AC = RC, GC += (0, QC.M)(wC)
        }
        return WC == oC && 0 == nC[0] && PC ? this.result((NC ? -200 : 0) - 100, nC, CC) : MC == oC && 0 == gC ? this.ret(-200 - CC.length + (SC == CC.length ? 0 : -100), [0, SC]) : fC > -1 ? this.ret(-700 - CC.length, [fC, fC + this.pattern.length]) : MC == oC ? this.ret(-900 - CC.length, [gC, SC]) : WC == oC ? this.result((NC ? -200 : 0) - 100 - 700 + (PC ? 0 : -1100), nC, CC) : 2 == zC.length ? null : this.result((wC[0] ? -700 : 0) - 200 - 1100, wC, CC)
      }
      result(CC, zC, ZC) {
        let wC = [],
          bC = 0;
        for (let nC of zC) {
          let CC = nC + (this.astral ? (0, QC.M)((0, QC.I)(ZC, nC)) : 1);
          bC && wC[bC - 1] == nC ? wC[bC - 1] = CC : (wC[bC++] = nC, wC[bC++] = CC)
        }
        return this.ret(CC - ZC.length, wC)
      }
    }
    class AC {
      constructor(CC) {
        this.pattern = CC, this.matched = [], this.score = 0, this.folded = CC.toLowerCase()
      }
      match(CC) {
        if (CC.length < this.pattern.length) return null;
        let zC = CC.slice(0, this.pattern.length),
          ZC = zC == this.pattern ? 0 : zC.toLowerCase() == this.folded ? -200 : null;
        return null == ZC ? null : (this.matched = [0, zC.length], this.score = ZC + (CC.length == this.pattern.length ? 0 : -100), this)
      }
    }
    const xC = QC.n.define({
      combine: CC => (0, QC.P)(CC, {
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
        positionInfo: IC,
        filterStrict: !1,
        compareCompletions: (CC, zC) => (CC.sortText || CC.label).localeCompare(zC.sortText || zC.label),
        interactionDelay: 75,
        updateSyncTime: 100
      }, {
        defaultKeymap: (CC, zC) => CC && zC,
        closeOnBlur: (CC, zC) => CC && zC,
        icons: (CC, zC) => CC && zC,
        tooltipClass: (CC, zC) => ZC => JC(CC(ZC), zC(ZC)),
        optionClass: (CC, zC) => ZC => JC(CC(ZC), zC(ZC)),
        addToOptions: (CC, zC) => CC.concat(zC),
        filterStrict: (CC, zC) => CC || zC
      })
    });

    function JC(CC, zC) {
      return CC ? zC ? CC + " " + zC : CC : zC
    }

    function IC(CC, zC, ZC, QC, bC, nC) {
      let fC, oC, qC = CC.textDirection == wC.i.RTL,
        FC = qC,
        WC = !1,
        NC = "top",
        MC = zC.left - bC.left,
        gC = bC.right - zC.right,
        SC = QC.right - QC.left,
        pC = QC.bottom - QC.top;
      if (FC && MC < Math.min(SC, gC) ? FC = !1 : !FC && gC < Math.min(SC, MC) && (FC = !0), SC <= (FC ? MC : gC)) fC = Math.max(bC.top, Math.min(ZC.top, bC.bottom - pC)) - zC.top, oC = Math.min(400, FC ? MC : gC);
      else {
        WC = !0, oC = Math.min(400, (qC ? zC.right : bC.right - zC.left) - 30);
        let CC = bC.bottom - zC.bottom;
        CC >= pC || CC > zC.top ? fC = ZC.bottom - zC.top : (NC = "bottom", fC = zC.bottom - ZC.top)
      }
      return {
        style: `${NC}: ${fC/((zC.bottom-zC.top)/nC.offsetHeight)}px; max-width: ${oC/((zC.right-zC.left)/nC.offsetWidth)}px`,
        class: "cm-completionInfo-" + (WC ? qC ? "left-narrow" : "right-narrow" : FC ? "left" : "right")
      }
    }
    const iC = QC.w.define();

    function vC(CC, zC, ZC) {
      if (CC <= ZC) return {
        from: 0,
        to: CC
      };
      if (zC < 0 && (zC = 0), zC <= CC >> 1) {
        let CC = Math.floor(zC / ZC);
        return {
          from: CC * ZC,
          to: (CC + 1) * ZC
        }
      }
      let QC = Math.floor((CC - zC) / ZC);
      return {
        from: CC - (QC + 1) * ZC,
        to: CC - QC * ZC
      }
    }
    class eC {
      constructor(CC, zC, ZC) {
        this.view = CC, this.stateField = zC, this.applyCompletion = ZC, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
          read: () => this.measureInfo(),
          write: CC => this.placeInfo(CC),
          key: this
        }, this.space = null, this.currentClass = "";
        let QC = CC.state.field(zC),
          {
            options: wC,
            selected: bC
          } = QC.open,
          nC = CC.state.facet(xC);
        this.optionContent = function(CC) {
          let zC = CC.addToOptions.slice();
          return CC.icons && zC.push({
            render(CC) {
              let zC = document.createElement("div");
              return zC.classList.add("cm-completionIcon"), CC.type && zC.classList.add(...CC.type.split(/\s+/g).map((CC => "cm-completionIcon-" + CC))), zC.setAttribute("aria-hidden", "true"), zC
            },
            position: 20
          }), zC.push({
            render(CC, zC, ZC, QC) {
              let wC = document.createElement("span");
              wC.className = "cm-completionLabel";
              let bC = CC.displayLabel || CC.label,
                nC = 0;
              for (let fC = 0; fC < QC.length;) {
                let CC = QC[fC++],
                  zC = QC[fC++];
                CC > nC && wC.appendChild(document.createTextNode(bC.slice(nC, CC)));
                let ZC = wC.appendChild(document.createElement("span"));
                ZC.appendChild(document.createTextNode(bC.slice(CC, zC))), ZC.className = "cm-completionMatchedText", nC = zC
              }
              return nC < bC.length && wC.appendChild(document.createTextNode(bC.slice(nC))), wC
            },
            position: 50
          }, {
            render(CC) {
              if (!CC.detail) return null;
              let zC = document.createElement("span");
              return zC.className = "cm-completionDetail", zC.textContent = CC.detail, zC
            },
            position: 80
          }), zC.sort(((CC, zC) => CC.position - zC.position)).map((CC => CC.render))
        }(nC), this.optionClass = nC.optionClass, this.tooltipClass = nC.tooltipClass, this.range = vC(wC.length, bC, nC.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(CC.state), this.dom.addEventListener("mousedown", (ZC => {
          let {
            options: QC
          } = CC.state.field(zC).open;
          for (let zC, wC = ZC.target; wC && wC != this.dom; wC = wC.parentNode)
            if ("LI" == wC.nodeName && (zC = /-(\d+)$/.exec(wC.id)) && +zC[1] < QC.length) return this.applyCompletion(CC, QC[+zC[1]]), void ZC.preventDefault();
          if (ZC.target == this.list) {
            let zC = this.list.classList.contains("cm-completionListIncompleteTop") && ZC.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && ZC.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
            null != zC && (CC.dispatch({
              effects: iC.of(zC)
            }), ZC.preventDefault())
          }
        })), this.dom.addEventListener("focusout", (zC => {
          let ZC = CC.state.field(this.stateField, !1);
          ZC && ZC.tooltip && CC.state.facet(xC).closeOnBlur && zC.relatedTarget != CC.contentDOM && CC.dispatch({
            effects: GC.of(null)
          })
        })), this.showOptions(wC, QC.id)
      }
      mount() {
        this.updateSel()
      }
      showOptions(CC, zC) {
        this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(CC, zC, this.range)), this.list.addEventListener("scroll", (() => {
          this.info && this.view.requestMeasure(this.placeInfoReq)
        }))
      }
      update(CC) {
        var zC;
        let ZC = CC.state.field(this.stateField),
          QC = CC.startState.field(this.stateField);
        if (this.updateTooltipClass(CC.state), ZC != QC) {
          let {
            options: wC,
            selected: bC,
            disabled: nC
          } = ZC.open;
          QC.open && QC.open.options == wC || (this.range = vC(wC.length, bC, CC.state.facet(xC).maxRenderedOptions), this.showOptions(wC, ZC.id)), this.updateSel(), nC != (null === (zC = QC.open) || void 0 === zC ? void 0 : zC.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!nC)
        }
      }
      updateTooltipClass(CC) {
        let zC = this.tooltipClass(CC);
        if (zC != this.currentClass) {
          for (let CC of this.currentClass.split(" ")) CC && this.dom.classList.remove(CC);
          for (let CC of zC.split(" ")) CC && this.dom.classList.add(CC);
          this.currentClass = zC
        }
      }
      positioned(CC) {
        this.space = CC, this.info && this.view.requestMeasure(this.placeInfoReq)
      }
      updateSel() {
        let CC = this.view.state.field(this.stateField),
          zC = CC.open;
        (zC.selected > -1 && zC.selected < this.range.from || zC.selected >= this.range.to) && (this.range = vC(zC.options.length, zC.selected, this.view.state.facet(xC).maxRenderedOptions), this.showOptions(zC.options, CC.id));
        let ZC = this.updateSelectedOption(zC.selected);
        if (ZC) {
          this.destroyInfo();
          let {
            completion: QC
          } = zC.options[zC.selected], {
            info: bC
          } = QC;
          if (!bC) return;
          let nC = "string" === typeof bC ? document.createTextNode(bC) : bC(QC);
          if (!nC) return;
          "then" in nC ? nC.then((zC => {
            zC && this.view.state.field(this.stateField, !1) == CC && this.addInfoPane(zC, QC)
          })).catch((CC => (0, wC.Y)(this.view.state, CC, "completion info"))) : (this.addInfoPane(nC, QC), ZC.setAttribute("aria-describedby", this.info.id))
        }
      }
      addInfoPane(CC, zC) {
        this.destroyInfo();
        let ZC = this.info = document.createElement("div");
        if (ZC.className = "cm-tooltip cm-completionInfo", ZC.id = "cm-completionInfo-" + Math.floor(65535 * Math.random()).toString(16), null != CC.nodeType) ZC.appendChild(CC), this.infoDestroy = null;
        else {
          let {
            dom: zC,
            destroy: QC
          } = CC;
          ZC.appendChild(zC), this.infoDestroy = QC || null
        }
        this.dom.appendChild(ZC), this.view.requestMeasure(this.placeInfoReq)
      }
      updateSelectedOption(CC) {
        let zC = null;
        for (let ZC = this.list.firstChild, QC = this.range.from; ZC; ZC = ZC.nextSibling, QC++) "LI" == ZC.nodeName && ZC.id ? QC == CC ? ZC.hasAttribute("aria-selected") || (ZC.setAttribute("aria-selected", "true"), zC = ZC) : ZC.hasAttribute("aria-selected") && (ZC.removeAttribute("aria-selected"), ZC.removeAttribute("aria-describedby")) : QC--;
        return zC && function(CC, zC) {
          let ZC = CC.getBoundingClientRect(),
            QC = zC.getBoundingClientRect(),
            wC = ZC.height / CC.offsetHeight;
          QC.top < ZC.top ? CC.scrollTop -= (ZC.top - QC.top) / wC : QC.bottom > ZC.bottom && (CC.scrollTop += (QC.bottom - ZC.bottom) / wC)
        }(this.list, zC), zC
      }
      measureInfo() {
        let CC = this.dom.querySelector("[aria-selected]");
        if (!CC || !this.info) return null;
        let zC = this.dom.getBoundingClientRect(),
          ZC = this.info.getBoundingClientRect(),
          QC = CC.getBoundingClientRect(),
          wC = this.space;
        if (!wC) {
          let CC = this.dom.ownerDocument.documentElement;
          wC = {
            left: 0,
            top: 0,
            right: CC.clientWidth,
            bottom: CC.clientHeight
          }
        }
        return QC.top > Math.min(wC.bottom, zC.bottom) - 10 || QC.bottom < Math.max(wC.top, zC.top) + 10 ? null : this.view.state.facet(xC).positionInfo(this.view, zC, QC, ZC, wC, this.dom)
      }
      placeInfo(CC) {
        this.info && (CC ? (CC.style && (this.info.style.cssText = CC.style), this.info.className = "cm-tooltip cm-completionInfo " + (CC.class || "")) : this.info.style.cssText = "top: -1e6px")
      }
      createListBox(CC, zC, ZC) {
        const QC = document.createElement("ul");
        QC.id = zC, QC.setAttribute("role", "listbox"), QC.setAttribute("aria-expanded", "true"), QC.setAttribute("aria-label", this.view.state.phrase("Completions")), QC.addEventListener("mousedown", (CC => {
          CC.target == QC && CC.preventDefault()
        }));
        let wC = null;
        for (let bC = ZC.from; bC < ZC.to; bC++) {
          let {
            completion: nC,
            match: fC
          } = CC[bC], {
            section: oC
          } = nC;
          if (oC) {
            let CC = "string" == typeof oC ? oC : oC.name;
            if (CC != wC && (bC > ZC.from || 0 == ZC.from))
              if (wC = CC, "string" != typeof oC && oC.header) QC.appendChild(oC.header(oC));
              else {
                QC.appendChild(document.createElement("completion-section")).textContent = CC
              }
          }
          const qC = QC.appendChild(document.createElement("li"));
          qC.id = zC + "-" + bC, qC.setAttribute("role", "option");
          let FC = this.optionClass(nC);
          FC && (qC.className = FC);
          for (let CC of this.optionContent) {
            let zC = CC(nC, this.view.state, this.view, fC);
            zC && qC.appendChild(zC)
          }
        }
        return ZC.from && QC.classList.add("cm-completionListIncompleteTop"), ZC.to < CC.length && QC.classList.add("cm-completionListIncompleteBottom"), QC
      }
      destroyInfo() {
        this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
      }
      destroy() {
        this.destroyInfo()
      }
    }

    function hC(CC, zC) {
      return ZC => new eC(ZC, CC, zC)
    }

    function KC(CC) {
      return 100 * (CC.boost || 0) + (CC.apply ? 10 : 0) + (CC.info ? 5 : 0) + (CC.type ? 1 : 0)
    }
    class YC {
      constructor(CC, zC, ZC, QC, wC, bC) {
        this.options = CC, this.attrs = zC, this.tooltip = ZC, this.timestamp = QC, this.selected = wC, this.disabled = bC
      }
      setSelected(CC, zC) {
        return CC == this.selected || CC >= this.options.length ? this : new YC(this.options, EC(zC, CC), this.tooltip, this.timestamp, CC, this.disabled)
      }
      static build(CC, zC, ZC, QC, wC, bC) {
        if (QC && !bC && CC.some((CC => CC.isPending))) return QC.setDisabled();
        let nC = function(CC, zC) {
          let ZC = [],
            QC = null,
            wC = null,
            bC = CC => {
              ZC.push(CC);
              let {
                section: zC
              } = CC.completion;
              if (zC) {
                QC || (QC = []);
                let CC = "string" == typeof zC ? zC : zC.name;
                QC.some((zC => zC.name == CC)) || QC.push("string" == typeof zC ? {
                  name: CC
                } : zC)
              }
            },
            nC = zC.facet(xC);
          for (let WC of CC)
            if (WC.hasResult()) {
              let CC = WC.result.getMatch;
              if (!1 === WC.result.filter)
                for (let zC of WC.result.options) bC(new FC(zC, WC.source, CC ? CC(zC) : [], 1e9 - ZC.length));
              else {
                let ZC, QC = zC.sliceDoc(WC.from, WC.to),
                  fC = nC.filterStrict ? new AC(QC) : new RC(QC);
                for (let zC of WC.result.options)
                  if (ZC = fC.match(zC.label)) {
                    let QC = zC.displayLabel ? CC ? CC(zC, ZC.matched) : [] : ZC.matched,
                      nC = ZC.score + (zC.boost || 0);
                    if (bC(new FC(zC, WC.source, QC, nC)), "object" == typeof zC.section && "dynamic" === zC.section.rank) {
                      let {
                        name: CC
                      } = zC.section;
                      wC || (wC = Object.create(null)), wC[CC] = Math.max(nC, wC[CC] || -1e9)
                    }
                  }
              }
            } if (QC) {
            let CC = Object.create(null),
              zC = 0,
              bC = (CC, zC) => ("dynamic" === CC.rank && "dynamic" === zC.rank ? wC[zC.name] - wC[CC.name] : 0) || ("number" == typeof CC.rank ? CC.rank : 1e9) - ("number" == typeof zC.rank ? zC.rank : 1e9) || (CC.name < zC.name ? -1 : 1);
            for (let ZC of QC.sort(bC)) zC -= 1e5, CC[ZC.name] = zC;
            for (let QC of ZC) {
              let {
                section: zC
              } = QC.completion;
              zC && (QC.score += CC["string" == typeof zC ? zC : zC.name])
            }
          }
          let fC = [],
            oC = null,
            qC = nC.compareCompletions;
          for (let FC of ZC.sort(((CC, zC) => zC.score - CC.score || qC(CC.completion, zC.completion)))) {
            let CC = FC.completion;
            !oC || oC.label != CC.label || oC.detail != CC.detail || null != oC.type && null != CC.type && oC.type != CC.type || oC.apply != CC.apply || oC.boost != CC.boost ? fC.push(FC) : KC(FC.completion) > KC(oC) && (fC[fC.length - 1] = FC), oC = FC.completion
          }
          return fC
        }(CC, zC);
        if (!nC.length) return QC && CC.some((CC => CC.isPending)) ? QC.setDisabled() : null;
        let fC = zC.facet(xC).selectOnOpen ? 0 : -1;
        if (QC && QC.selected != fC && -1 != QC.selected) {
          let CC = QC.options[QC.selected].completion;
          for (let zC = 0; zC < nC.length; zC++)
            if (nC[zC].completion == CC) {
              fC = zC;
              break
            }
        }
        return new YC(nC, EC(ZC, fC), {
          pos: CC.reduce(((CC, zC) => zC.hasResult() ? Math.min(CC, zC.from) : CC), 1e8),
          create: aC,
          above: wC.aboveCursor
        }, QC ? QC.timestamp : Date.now(), fC, !1)
      }
      map(CC) {
        return new YC(this.options, this.attrs, {
          ...this.tooltip,
          pos: CC.mapPos(this.tooltip.pos)
        }, this.timestamp, this.selected, this.disabled)
      }
      setDisabled() {
        return new YC(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0)
      }
    }
    class dC {
      constructor(CC, zC, ZC) {
        this.active = CC, this.id = zC, this.open = ZC
      }
      static start() {
        return new dC(lC, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
      }
      update(CC) {
        let {
          state: zC
        } = CC, ZC = zC.facet(xC), QC = (ZC.override || zC.languageDataAt("autocomplete", WC(zC)).map(pC)).map((zC => (this.active.find((CC => CC.source == zC)) || new cC(zC, this.active.some((CC => 0 != CC.state)) ? 1 : 0)).update(CC, ZC)));
        QC.length == this.active.length && QC.every(((CC, zC) => CC == this.active[zC])) && (QC = this.active);
        let wC = this.open,
          bC = CC.effects.some((CC => CC.is(rC)));
        wC && CC.docChanged && (wC = wC.map(CC.changes)), CC.selection || QC.some((zC => zC.hasResult() && CC.changes.touchesRange(zC.from, zC.to))) || ! function(CC, zC) {
          if (CC == zC) return !0;
          for (let ZC = 0, QC = 0;;) {
            for (; ZC < CC.length && !CC[ZC].hasResult();) ZC++;
            for (; QC < zC.length && !zC[QC].hasResult();) QC++;
            let wC = ZC == CC.length,
              bC = QC == zC.length;
            if (wC || bC) return wC == bC;
            if (CC[ZC++].result != zC[QC++].result) return !1
          }
        }(QC, this.active) || bC ? wC = YC.build(QC, zC, this.id, wC, ZC, bC) : wC && wC.disabled && !QC.some((CC => CC.isPending)) && (wC = null), !wC && QC.every((CC => !CC.isPending)) && QC.some((CC => CC.hasResult())) && (QC = QC.map((CC => CC.hasResult() ? new cC(CC.source, 0) : CC)));
        for (let nC of CC.effects) nC.is(iC) && (wC = wC && wC.setSelected(nC.value, this.id));
        return QC == this.active && wC == this.open ? this : new dC(QC, this.id, wC)
      }
      get tooltip() {
        return this.open ? this.open.tooltip : null
      }
      get attrs() {
        return this.open ? this.open.attrs : this.active.length ? mC : HC
      }
    }
    const mC = {
        "aria-autocomplete": "list"
      },
      HC = {};

    function EC(CC, zC) {
      let ZC = {
        "aria-autocomplete": "list",
        "aria-haspopup": "listbox",
        "aria-controls": CC
      };
      return zC > -1 && (ZC["aria-activedescendant"] = CC + "-" + zC), ZC
    }
    const lC = [];

    function XC(CC, zC) {
      if (CC.isUserEvent("input.complete")) {
        let ZC = CC.annotation(MC);
        if (ZC && zC.activateOnCompletion(ZC)) return 12
      }
      let ZC = CC.isUserEvent("input.type");
      return ZC && zC.activateOnTyping ? 5 : ZC ? 1 : CC.isUserEvent("delete.backward") ? 2 : CC.selection ? 8 : CC.docChanged ? 16 : 0
    }
    class cC {
      constructor(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.source = CC, this.state = zC, this.explicit = ZC
      }
      hasResult() {
        return !1
      }
      get isPending() {
        return 1 == this.state
      }
      update(CC, zC) {
        let ZC = XC(CC, zC),
          QC = this;
        (8 & ZC || 16 & ZC && this.touches(CC)) && (QC = new cC(QC.source, 0)), 4 & ZC && 0 == QC.state && (QC = new cC(this.source, 1)), QC = QC.updateFor(CC, ZC);
        for (let wC of CC.effects)
          if (wC.is(PC)) QC = new cC(QC.source, 1, wC.value);
          else if (wC.is(GC)) QC = new cC(QC.source, 0);
        else if (wC.is(rC))
          for (let CC of wC.value) CC.source == QC.source && (QC = CC);
        return QC
      }
      updateFor(CC, zC) {
        return this.map(CC.changes)
      }
      map(CC) {
        return this
      }
      touches(CC) {
        return CC.changes.touchesRange(WC(CC.state))
      }
    }
    class uC extends cC {
      constructor(CC, zC, ZC, QC, wC, bC) {
        super(CC, 3, zC), this.limit = ZC, this.result = QC, this.from = wC, this.to = bC
      }
      hasResult() {
        return !0
      }
      updateFor(CC, zC) {
        var ZC;
        if (!(3 & zC)) return this.map(CC.changes);
        let QC = this.result;
        QC.map && !CC.changes.empty && (QC = QC.map(QC, CC.changes));
        let wC = CC.changes.mapPos(this.from),
          bC = CC.changes.mapPos(this.to, 1),
          fC = WC(CC.state);
        if (fC > bC || !QC || 2 & zC && (WC(CC.startState) == this.from || fC < this.limit)) return new cC(this.source, 4 & zC ? 1 : 0);
        let oC = CC.changes.mapPos(this.limit);
        return function(CC, zC, ZC, QC) {
          if (!CC) return !1;
          let wC = zC.sliceDoc(ZC, QC);
          return "function" == typeof CC ? CC(wC, ZC, QC, zC) : NC(CC, !0).test(wC)
        }(QC.validFor, CC.state, wC, bC) ? new uC(this.source, this.explicit, oC, QC, wC, bC) : QC.update && (QC = QC.update(QC, wC, bC, new nC(CC.state, fC, !1))) ? new uC(this.source, this.explicit, oC, QC, QC.from, null !== (ZC = QC.to) && void 0 !== ZC ? ZC : WC(CC.state)) : new cC(this.source, 1, this.explicit)
      }
      map(CC) {
        if (CC.empty) return this;
        return (this.result.map ? this.result.map(this.result, CC) : this.result) ? new uC(this.source, this.explicit, CC.mapPos(this.limit), this.result, CC.mapPos(this.from), CC.mapPos(this.to, 1)) : new cC(this.source, 0)
      }
      touches(CC) {
        return CC.changes.touchesRange(this.from, this.to)
      }
    }
    const rC = QC.w.define({
        map: (CC, zC) => CC.map((CC => CC.map(zC)))
      }),
      sC = QC.A.define({
        create: () => dC.start(),
        update: (CC, zC) => CC.update(zC),
        provide: CC => [wC.ib.from(CC, (CC => CC.tooltip)), wC.j.contentAttributes.from(CC, (CC => CC.attrs))]
      });

    function TC(CC, zC) {
      const ZC = zC.completion.apply || zC.completion.label;
      let QC = CC.state.field(sC).active.find((CC => CC.source == zC.source));
      return QC instanceof uC && ("string" == typeof ZC ? CC.dispatch({
        ...gC(CC.state, ZC, QC.from, QC.to),
        annotations: MC.of(zC.completion)
      }) : ZC(CC, zC.completion, QC.from, QC.to), !0)
    }
    const aC = hC(sC, TC);

    function tC(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option";
      return ZC => {
        let QC = ZC.state.field(sC, !1);
        if (!QC || !QC.open || QC.open.disabled || Date.now() - QC.open.timestamp < ZC.state.facet(xC).interactionDelay) return !1;
        let bC, nC = 1;
        "page" == zC && (bC = (0, wC.E)(ZC, QC.open.tooltip)) && (nC = Math.max(2, Math.floor(bC.dom.offsetHeight / bC.dom.querySelector("li").offsetHeight) - 1));
        let {
          length: fC
        } = QC.open.options, oC = QC.open.selected > -1 ? QC.open.selected + nC * (CC ? 1 : -1) : CC ? 0 : fC - 1;
        return oC < 0 ? oC = "page" == zC ? 0 : fC - 1 : oC >= fC && (oC = "page" == zC ? fC - 1 : 0), ZC.dispatch({
          effects: iC.of(oC)
        }), !0
      }
    }
    const DC = CC => !!CC.state.field(sC, !1) && (CC.dispatch({
      effects: PC.of(!0)
    }), !0);
    class jC {
      constructor(CC, zC) {
        this.active = CC, this.context = zC, this.time = Date.now(), this.updates = [], this.done = void 0
      }
    }
    const yC = wC.o.fromClass(class {
        constructor(CC) {
          this.view = CC, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
          for (let zC of CC.state.field(sC).active) zC.isPending && this.startQuery(zC)
        }
        update(CC) {
          let zC = CC.state.field(sC),
            ZC = CC.state.facet(xC);
          if (!CC.selectionSet && !CC.docChanged && CC.startState.field(sC) == zC) return;
          let QC = CC.transactions.some((CC => {
            let zC = XC(CC, ZC);
            return 8 & zC || (CC.selection || CC.docChanged) && !(3 & zC)
          }));
          for (let fC = 0; fC < this.running.length; fC++) {
            let zC = this.running[fC];
            if (QC || zC.context.abortOnDocChange && CC.docChanged || zC.updates.length + CC.transactions.length > 50 && Date.now() - zC.time > 1e3) {
              for (let CC of zC.context.abortListeners) try {
                CC()
              } catch (nC) {
                (0, wC.Y)(this.view.state, nC)
              }
              zC.context.abortListeners = null, this.running.splice(fC--, 1)
            } else zC.updates.push(...CC.transactions)
          }
          this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), CC.transactions.some((CC => CC.effects.some((CC => CC.is(PC))))) && (this.pendingStart = !0);
          let bC = this.pendingStart ? 50 : ZC.activateOnTypingDelay;
          if (this.debounceUpdate = zC.active.some((CC => CC.isPending && !this.running.some((zC => zC.active.source == CC.source)))) ? setTimeout((() => this.startUpdate()), bC) : -1, 0 != this.composing)
            for (let wC of CC.transactions) wC.isUserEvent("input.type") ? this.composing = 2 : 2 == this.composing && wC.selection && (this.composing = 3)
        }
        startUpdate() {
          this.debounceUpdate = -1, this.pendingStart = !1;
          let {
            state: CC
          } = this.view, zC = CC.field(sC);
          for (let ZC of zC.active) ZC.isPending && !this.running.some((CC => CC.active.source == ZC.source)) && this.startQuery(ZC);
          this.running.length && zC.open && zC.open.disabled && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(xC).updateSyncTime))
        }
        startQuery(CC) {
          let {
            state: zC
          } = this.view, ZC = WC(zC), QC = new nC(zC, ZC, CC.explicit, this.view), bC = new jC(CC, QC);
          this.running.push(bC), Promise.resolve(CC.source(QC)).then((CC => {
            bC.context.aborted || (bC.done = CC || null, this.scheduleAccept())
          }), (CC => {
            this.view.dispatch({
              effects: GC.of(null)
            }), (0, wC.Y)(this.view.state, CC)
          }))
        }
        scheduleAccept() {
          this.running.every((CC => void 0 !== CC.done)) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(xC).updateSyncTime))
        }
        accept() {
          var CC;
          this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
          let zC = [],
            ZC = this.view.state.facet(xC),
            QC = this.view.state.field(sC);
          for (let wC = 0; wC < this.running.length; wC++) {
            let bC = this.running[wC];
            if (void 0 === bC.done) continue;
            if (this.running.splice(wC--, 1), bC.done) {
              let QC = WC(bC.updates.length ? bC.updates[0].startState : this.view.state),
                wC = Math.min(QC, bC.done.from + (bC.active.explicit ? 0 : 1)),
                nC = new uC(bC.active.source, bC.active.explicit, wC, bC.done, bC.done.from, null !== (CC = bC.done.to) && void 0 !== CC ? CC : QC);
              for (let CC of bC.updates) nC = nC.update(CC, ZC);
              if (nC.hasResult()) {
                zC.push(nC);
                continue
              }
            }
            let nC = QC.active.find((CC => CC.source == bC.active.source));
            if (nC && nC.isPending)
              if (null == bC.done) {
                let CC = new cC(bC.active.source, 0);
                for (let zC of bC.updates) CC = CC.update(zC, ZC);
                CC.isPending || zC.push(CC)
              } else this.startQuery(nC)
          }(zC.length || QC.open && QC.open.disabled) && this.view.dispatch({
            effects: rC.of(zC)
          })
        }
      }, {
        eventHandlers: {
          blur(CC) {
            let zC = this.view.state.field(sC, !1);
            if (zC && zC.tooltip && this.view.state.facet(xC).closeOnBlur) {
              let ZC = zC.open && (0, wC.E)(this.view, zC.open.tooltip);
              ZC && ZC.dom.contains(CC.relatedTarget) || setTimeout((() => this.view.dispatch({
                effects: GC.of(null)
              })), 10)
            }
          },
          compositionstart() {
            this.composing = 1
          },
          compositionend() {
            3 == this.composing && setTimeout((() => this.view.dispatch({
              effects: PC.of(!1)
            })), 20), this.composing = 0
          }
        }
      }),
      LC = "object" == typeof navigator && /Win/.test(navigator.platform),
      UC = QC.r.highest(wC.j.domEventHandlers({
        keydown(CC, zC) {
          let ZC = zC.state.field(sC, !1);
          if (!ZC || !ZC.open || ZC.open.disabled || ZC.open.selected < 0 || CC.key.length > 1 || CC.ctrlKey && (!LC || !CC.altKey) || CC.metaKey) return !1;
          let QC = ZC.open.options[ZC.open.selected],
            wC = ZC.active.find((CC => CC.source == QC.source)),
            bC = QC.completion.commitCharacters || wC.result.commitCharacters;
          return bC && bC.indexOf(CC.key) > -1 && TC(zC, QC), !1
        }
      })),
      BC = wC.j.baseTheme({
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
    class OC {
      constructor(CC, zC, ZC, QC) {
        this.field = CC, this.line = zC, this.from = ZC, this.to = QC
      }
    }
    class kC {
      constructor(CC, zC, ZC) {
        this.field = CC, this.from = zC, this.to = ZC
      }
      map(CC) {
        let zC = CC.mapPos(this.from, -1, QC.o.TrackDel),
          ZC = CC.mapPos(this.to, 1, QC.o.TrackDel);
        return null == zC || null == ZC ? null : new kC(this.field, zC, ZC)
      }
    }
    class VC {
      constructor(CC, zC) {
        this.lines = CC, this.fieldPositions = zC
      }
      instantiate(CC, zC) {
        let ZC = [],
          QC = [zC],
          wC = CC.doc.lineAt(zC),
          nC = /^\s*/.exec(wC.text)[0];
        for (let oC of this.lines) {
          if (ZC.length) {
            let ZC = nC,
              wC = /^\t*/.exec(oC)[0].length;
            for (let zC = 0; zC < wC; zC++) ZC += CC.facet(bC.U);
            QC.push(zC + ZC.length - wC), oC = ZC + oC.slice(wC)
          }
          ZC.push(oC), zC += oC.length + 1
        }
        let fC = this.fieldPositions.map((CC => new kC(CC.field, QC[CC.line] + CC.from, QC[CC.line] + CC.to)));
        return {
          text: ZC,
          np: fC
        }
      }
      static parse(CC) {
        let zC, ZC = [],
          QC = [],
          wC = [];
        for (let bC of CC.split(/\r\n?|\n/)) {
          for (; zC = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(bC);) {
            let CC = zC[1] ? +zC[1] : null,
              nC = zC[2] || zC[3] || "",
              fC = -1,
              oC = nC.replace(/\\[{}]/g, (CC => CC[1]));
            for (let zC = 0; zC < ZC.length; zC++)(null != CC ? ZC[zC].seq == CC : oC && ZC[zC].name == oC) && (fC = zC);
            if (fC < 0) {
              let zC = 0;
              for (; zC < ZC.length && (null == CC || null != ZC[zC].seq && ZC[zC].seq < CC);) zC++;
              ZC.splice(zC, 0, {
                seq: CC,
                name: oC
              }), fC = zC;
              for (let CC of wC) CC.field >= fC && CC.field++
            }
            for (let ZC of wC)
              if (ZC.line == QC.length && ZC.from > zC.index) {
                let CC = zC[2] ? 3 + (zC[1] || "").length : 2;
                ZC.from -= CC, ZC.to -= CC
              } wC.push(new OC(fC, QC.length, zC.index, zC.index + oC.length)), bC = bC.slice(0, zC.index) + nC + bC.slice(zC.index + zC[0].length)
          }
          bC = bC.replace(/\\([{}])/g, ((CC, zC, ZC) => {
            for (let bC of wC) bC.line == QC.length && bC.from > ZC && (bC.from--, bC.to--);
            return zC
          })), QC.push(bC)
        }
        return new VC(QC, wC)
      }
    }
    let Cz = wC.e.widget({
        widget: new class extends wC.r {
          toDOM() {
            let CC = document.createElement("span");
            return CC.className = "cm-snippetFieldPosition", CC
          }
          ignoreEvent() {
            return !1
          }
        }
      }),
      zz = wC.e.mark({
        class: "cm-snippetField"
      });
    class Zz {
      constructor(CC, zC) {
        this.np = CC, this.active = zC, this.deco = wC.e.set(CC.map((CC => (CC.from == CC.to ? Cz : zz).range(CC.from, CC.to))), !0)
      }
      map(CC) {
        let zC = [];
        for (let ZC of this.np) {
          let QC = ZC.map(CC);
          if (!QC) return null;
          zC.push(QC)
        }
        return new Zz(zC, this.active)
      }
      selectionInsideField(CC) {
        return CC.np.every((CC => this.np.some((zC => zC.field == this.active && zC.from <= CC.from && zC.to >= CC.to))))
      }
    }
    const Qz = QC.w.define({
        map: (CC, zC) => CC && CC.map(zC)
      }),
      wz = QC.w.define(),
      bz = QC.A.define({
        create: () => null,
        update(CC, zC) {
          for (let ZC of zC.effects) {
            if (ZC.is(Qz)) return ZC.value;
            if (ZC.is(wz) && CC) return new Zz(CC.np, ZC.value)
          }
          return CC && zC.docChanged && (CC = CC.map(zC.changes)), CC && zC.selection && !CC.selectionInsideField(zC.selection) && (CC = null), CC
        },
        provide: CC => wC.j.gC.from(CC, (CC => CC ? CC.deco : wC.e.none))
      });

    function nz(CC, zC) {
      return QC.i.create(CC.filter((CC => CC.field == zC)).map((CC => QC.i.range(CC.from, CC.to))))
    }

    function fz(CC) {
      let zC = VC.parse(CC);
      return (CC, ZC, wC, bC) => {
        let {
          text: nC,
          np: fC
        } = zC.instantiate(CC.state, wC), {
          main: oC
        } = CC.state.selection, qC = {
          changes: {
            from: wC,
            to: bC == oC.from ? oC.to : bC,
            insert: QC.B.of(nC)
          },
          scrollIntoView: !0,
          annotations: ZC ? [MC.of(ZC), QC.F.userEvent.of("input.complete")] : void 0
        };
        if (fC.length && (qC.selection = nz(fC, 0)), fC.some((CC => CC.field > 0))) {
          let zC = new Zz(fC, 0),
            ZC = qC.effects = [Qz.of(zC)];
          void 0 === CC.state.field(bz, !1) && ZC.push(QC.w.appendConfig.of([bz, Wz, Mz, BC]))
        }
        CC.dispatch(CC.state.update(qC))
      }
    }

    function oz(CC) {
      return zC => {
        let {
          state: ZC,
          dispatch: QC
        } = zC, wC = ZC.field(bz, !1);
        if (!wC || CC < 0 && 0 == wC.active) return !1;
        let bC = wC.active + CC,
          nC = CC > 0 && !wC.np.some((zC => zC.field == bC + CC));
        return QC(ZC.update({
          selection: nz(wC.np, bC),
          effects: Qz.of(nC ? null : new Zz(wC.np, bC)),
          scrollIntoView: !0
        })), !0
      }
    }
    const qz = [{
        key: "Tab",
        run: oz(1),
        shift: oz(-1)
      }, {
        key: "Escape",
        run: CC => {
          let {
            state: zC,
            dispatch: ZC
          } = CC;
          return !!zC.field(bz, !1) && (ZC(zC.update({
            effects: Qz.of(null)
          })), !0)
        }
      }],
      Fz = QC.n.define({
        combine: CC => CC.length ? CC[0] : qz
      }),
      Wz = QC.r.highest(wC.R.compute([Fz], (CC => CC.facet(Fz))));

    function Nz(CC, zC) {
      return {
        ...zC,
        apply: fz(CC)
      }
    }
    const Mz = wC.j.domEventHandlers({
      mousedown(CC, zC) {
        let ZC, QC = zC.state.field(bz, !1);
        if (!QC || null == (ZC = zC.posAtCoords({
            x: CC.clientX,
            y: CC.clientY
          }))) return !1;
        let wC = QC.np.find((CC => CC.from <= ZC && CC.to >= ZC));
        return !(!wC || wC.field == QC.active) && (zC.dispatch({
          selection: nz(QC.np, wC.field),
          effects: Qz.of(QC.np.some((CC => CC.field > wC.field)) ? new Zz(QC.np, wC.field) : null),
          scrollIntoView: !0
        }), !0)
      }
    });
    const gz = {
        brackets: ["(", "[", "{", "'", '"'],
        before: ")]}:;>",
        stringPrefixes: []
      },
      Sz = QC.w.define({
        map(CC, zC) {
          let ZC = zC.mapPos(CC, -1, QC.o.TrackAfter);
          return null == ZC ? void 0 : ZC
        }
      }),
      pz = new class extends QC.v {};
    pz.startSide = 1, pz.endSide = -1;
    const Pz = QC.A.define({
      create: () => QC.u.empty,
      update(CC, zC) {
        if (CC = CC.map(zC.changes), zC.selection) {
          let ZC = zC.state.doc.lineAt(zC.selection.main.head);
          CC = CC.update({
            filter: CC => CC >= ZC.from && CC <= ZC.to
          })
        }
        for (let ZC of zC.effects) ZC.is(Sz) && (CC = CC.update({
          add: [pz.range(ZC.value, ZC.value + 1)]
        }));
        return CC
      }
    });

    function Gz() {
      return [Iz, Pz]
    }
    const Rz = "()[]{}<>\xab\xbb\xbb\xab\uff3b\uff3d\uff5b\uff5d";

    function Az(CC) {
      for (let zC = 0; zC < 16; zC += 2)
        if (Rz.charCodeAt(zC) == CC) return Rz.charAt(zC + 1);
      return (0, QC.$)(CC < 128 ? CC : CC + 1)
    }

    function xz(CC, zC) {
      return CC.languageDataAt("closeBrackets", zC)[0] || gz
    }
    const Jz = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      Iz = wC.j.inputHandler.of(((CC, zC, ZC, wC) => {
        if ((Jz ? CC.composing : CC.compositionStarted) || CC.state.readOnly) return !1;
        let bC = CC.state.selection.main;
        if (wC.length > 2 || 2 == wC.length && 1 == (0, QC.M)((0, QC.I)(wC, 0)) || zC != bC.from || ZC != bC.to) return !1;
        let nC = function(CC, zC) {
          let ZC = xz(CC, CC.selection.main.head),
            wC = ZC.brackets || gz.brackets;
          for (let bC of wC) {
            let nC = Az((0, QC.I)(bC, 0));
            if (zC == bC) return nC == bC ? Yz(CC, bC, wC.indexOf(bC + bC + bC) > -1, ZC) : hz(CC, bC, nC, ZC.before || gz.before);
            if (zC == nC && vz(CC, CC.selection.main.from)) return Kz(CC, bC, nC)
          }
          return null
        }(CC.state, wC);
        return !!nC && (CC.dispatch(nC), !0)
      })),
      iz = [{
        key: "Backspace",
        run: CC => {
          let {
            state: zC,
            dispatch: ZC
          } = CC;
          if (zC.readOnly) return !1;
          let wC = xz(zC, zC.selection.main.head).brackets || gz.brackets,
            bC = null,
            nC = zC.changeByRange((CC => {
              if (CC.empty) {
                let ZC = function(CC, zC) {
                  let ZC = CC.sliceString(zC - 2, zC);
                  return (0, QC.M)((0, QC.I)(ZC, 0)) == ZC.length ? ZC : ZC.slice(1)
                }(zC.doc, CC.head);
                for (let bC of wC)
                  if (bC == ZC && ez(zC.doc, CC.head) == Az((0, QC.I)(bC, 0))) return {
                    changes: {
                      from: CC.head - bC.length,
                      to: CC.head + bC.length
                    },
                    range: QC.i.cursor(CC.head - bC.length)
                  }
              }
              return {
                range: bC = CC
              }
            }));
          return bC || ZC(zC.update(nC, {
            scrollIntoView: !0,
            userEvent: "delete.backward"
          })), !bC
        }
      }];

    function vz(CC, zC) {
      let ZC = !1;
      return CC.field(Pz).between(0, CC.doc.length, (CC => {
        CC == zC && (ZC = !0)
      })), ZC
    }

    function ez(CC, zC) {
      let ZC = CC.sliceString(zC, zC + 2);
      return ZC.slice(0, (0, QC.M)((0, QC.I)(ZC, 0)))
    }

    function hz(CC, zC, ZC, wC) {
      let bC = null,
        nC = CC.changeByRange((nC => {
          if (!nC.empty) return {
            changes: [{
              insert: zC,
              from: nC.from
            }, {
              insert: ZC,
              from: nC.to
            }],
            effects: Sz.of(nC.to + zC.length),
            range: QC.i.range(nC.anchor + zC.length, nC.head + zC.length)
          };
          let fC = ez(CC.doc, nC.head);
          return !fC || /\s/.test(fC) || wC.indexOf(fC) > -1 ? {
            changes: {
              insert: zC + ZC,
              from: nC.head
            },
            effects: Sz.of(nC.head + zC.length),
            range: QC.i.cursor(nC.head + zC.length)
          } : {
            range: bC = nC
          }
        }));
      return bC ? null : CC.update(nC, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function Kz(CC, zC, ZC) {
      let wC = null,
        bC = CC.changeByRange((zC => zC.empty && ez(CC.doc, zC.head) == ZC ? {
          changes: {
            from: zC.head,
            to: zC.head + ZC.length,
            insert: ZC
          },
          range: QC.i.cursor(zC.head + ZC.length)
        } : wC = {
          range: zC
        }));
      return wC ? null : CC.update(bC, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function Yz(CC, zC, ZC, wC) {
      let nC = wC.stringPrefixes || gz.stringPrefixes,
        fC = null,
        oC = CC.changeByRange((wC => {
          if (!wC.empty) return {
            changes: [{
              insert: zC,
              from: wC.from
            }, {
              insert: zC,
              from: wC.to
            }],
            effects: Sz.of(wC.to + zC.length),
            range: QC.i.range(wC.anchor + zC.length, wC.head + zC.length)
          };
          let oC, qC = wC.head,
            FC = ez(CC.doc, qC);
          if (FC == zC) {
            if (dz(CC, qC)) return {
              changes: {
                insert: zC + zC,
                from: qC
              },
              effects: Sz.of(qC + zC.length),
              range: QC.i.cursor(qC + zC.length)
            };
            if (vz(CC, qC)) {
              let wC = ZC && CC.sliceDoc(qC, qC + 3 * zC.length) == zC + zC + zC ? zC + zC + zC : zC;
              return {
                changes: {
                  from: qC,
                  to: qC + wC.length,
                  insert: wC
                },
                range: QC.i.cursor(qC + wC.length)
              }
            }
          } else {
            if (ZC && CC.sliceDoc(qC - 2 * zC.length, qC) == zC + zC && (oC = mz(CC, qC - 2 * zC.length, nC)) > -1 && dz(CC, oC)) return {
              changes: {
                insert: zC + zC + zC + zC,
                from: qC
              },
              effects: Sz.of(qC + zC.length),
              range: QC.i.cursor(qC + zC.length)
            };
            if (CC.charCategorizer(qC)(FC) != QC.h.Word && mz(CC, qC, nC) > -1 && ! function(CC, zC, ZC, QC) {
                let wC = (0, bC.gb)(CC).resolveInner(zC, -1),
                  nC = QC.reduce(((CC, zC) => Math.max(CC, zC.length)), 0);
                for (let bC = 0; bC < 5; bC++) {
                  let bC = CC.sliceDoc(wC.from, Math.min(wC.to, wC.from + ZC.length + nC)),
                    fC = bC.indexOf(ZC);
                  if (!fC || fC > -1 && QC.indexOf(bC.slice(0, fC)) > -1) {
                    let zC = wC.firstChild;
                    for (; zC && zC.from == wC.from && zC.to - zC.from > ZC.length + fC;) {
                      if (CC.sliceDoc(zC.to - ZC.length, zC.to) == ZC) return !1;
                      zC = zC.firstChild
                    }
                    return !0
                  }
                  let oC = wC.to == zC && wC.parent;
                  if (!oC) break;
                  wC = oC
                }
                return !1
              }(CC, qC, zC, nC)) return {
              changes: {
                insert: zC + zC,
                from: qC
              },
              effects: Sz.of(qC + zC.length),
              range: QC.i.cursor(qC + zC.length)
            }
          }
          return {
            range: fC = wC
          }
        }));
      return fC ? null : CC.update(oC, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function dz(CC, zC) {
      let ZC = (0, bC.gb)(CC).resolveInner(zC + 1);
      return ZC.parent && ZC.from == zC
    }

    function mz(CC, zC, ZC) {
      let wC = CC.charCategorizer(zC);
      if (wC(CC.sliceDoc(zC - 1, zC)) != QC.h.Word) return zC;
      for (let bC of ZC) {
        let ZC = zC - bC.length;
        if (CC.sliceDoc(ZC, zC) == bC && wC(CC.sliceDoc(ZC - 1, ZC)) != QC.h.Word) return ZC
      }
      return -1
    }

    function Hz() {
      let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [UC, sC, xC.of(CC), yC, lz, BC]
    }
    const Ez = [{
        key: "Ctrl-Space",
        run: DC
      }, {
        mac: "Alt-`",
        run: DC
      }, {
        mac: "Alt-i",
        run: DC
      }, {
        key: "Escape",
        run: CC => {
          let zC = CC.state.field(sC, !1);
          return !(!zC || !zC.active.some((CC => 0 != CC.state))) && (CC.dispatch({
            effects: GC.of(null)
          }), !0)
        }
      }, {
        key: "ArrowDown",
        run: tC(!0)
      }, {
        key: "ArrowUp",
        run: tC(!1)
      }, {
        key: "PageDown",
        run: tC(!0, "page")
      }, {
        key: "PageUp",
        run: tC(!1, "page")
      }, {
        key: "Enter",
        run: CC => {
          let zC = CC.state.field(sC, !1);
          return !(CC.state.readOnly || !zC || !zC.open || zC.open.selected < 0 || zC.open.disabled || Date.now() - zC.open.timestamp < CC.state.facet(xC).interactionDelay) && TC(CC, zC.open.options[zC.open.selected])
        }
      }],
      lz = QC.r.highest(wC.R.computeN([xC], (CC => CC.facet(xC).defaultKeymap ? [Ez] : [])))
  },
  41252: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => qC,
      h: () => NC,
      k: () => FC,
      l: () => WC
    });
    var QC = ZC(41125);
    class wC {
      constructor(CC, zC, ZC, QC) {
        this.origin = CC, this.changes = zC, this.effects = ZC, this.clientID = QC
      }
    }
    class bC {
      constructor(CC, zC) {
        this.version = CC, this.unconfirmed = zC
      }
    }
    const nC = QC.n.define({
        combine(CC) {
          let zC = (0, QC.P)(CC, {
            startVersion: 0,
            clientID: null,
            sharedEffects: () => []
          }, {
            generatedID: CC => CC
          });
          return null == zC.clientID && (zC.clientID = CC.length && CC[0].generatedID || ""), zC
        }
      }),
      fC = QC.d.define(),
      oC = QC.A.define({
        create: CC => new bC(CC.facet(nC).startVersion, []),
        update(CC, zC) {
          let ZC = zC.annotation(fC);
          if (ZC) return ZC;
          let {
            sharedEffects: QC,
            clientID: oC
          } = zC.startState.facet(nC), qC = QC(zC);
          return qC.length || !zC.changes.empty ? new bC(CC.version, CC.unconfirmed.concat(new wC(zC, zC.changes, qC, oC))) : CC
        }
      });

    function qC() {
      let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [oC, nC.of(Object.assign({
        generatedID: Math.floor(1e9 * Math.random()).toString(36)
      }, CC))]
    }

    function FC(CC, zC) {
      let {
        version: ZC,
        unconfirmed: qC
      } = CC.field(oC), {
        clientID: FC
      } = CC.facet(nC);
      ZC += zC.length;
      let WC = [],
        NC = null,
        MC = 0;
      for (let wC of zC) {
        let CC = MC < qC.length ? qC[MC] : null;
        CC && CC.clientID == wC.clientID ? (NC && (NC = NC.map(CC.changes, !0)), WC = QC.w.mapEffects(WC, wC.changes), MC++) : (WC = QC.w.mapEffects(WC, wC.changes), wC.effects && (WC = WC.concat(wC.effects)), NC = NC ? NC.compose(wC.changes) : wC.changes)
      }
      if (MC && (qC = qC.slice(MC)), qC.length && (NC && (qC = qC.map((CC => {
          let zC = CC.changes.map(NC);
          return NC = NC.map(CC.changes, !0), new wC(CC.origin, zC, QC.w.mapEffects(CC.effects, NC), FC)
        }))), WC.length)) {
        let CC = qC.reduce(((CC, zC) => CC.compose(zC.changes)), QC.ChangeSet.empty(qC[0].changes.length));
        WC = QC.w.mapEffects(WC, CC)
      }
      return NC ? CC.update({
        changes: NC,
        effects: WC,
        annotations: [QC.F.addToHistory.of(!1), QC.F.remote.of(!0), fC.of(new bC(ZC, qC))],
        filter: !1
      }) : CC.update({
        annotations: [fC.of(new bC(ZC, qC))]
      })
    }

    function WC(CC) {
      return CC.field(oC).unconfirmed
    }

    function NC(CC) {
      return CC.field(oC).version
    }
  },
  41153: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => Sz
    });
    var QC = ZC(41144);
    class wC {
      constructor(CC, zC, ZC, QC, wC, bC, nC, fC, oC) {
        let qC = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          FC = arguments.length > 10 ? arguments[10] : void 0;
        this.p = CC, this.stack = zC, this.state = ZC, this.reducePos = QC, this.pos = wC, this.score = bC, this.buffer = nC, this.bufferBase = fC, this.curContext = oC, this.lookAhead = qC, this.parent = FC
      }
      toString() {
        return `[${this.stack.filter(((CC,zC)=>zC%3==0)).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`
      }
      static start(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          QC = CC.parser.context;
        return new wC(CC, [], zC, ZC, ZC, 0, [], 0, QC ? new bC(QC, QC.start) : null, 0, null)
      }
      get context() {
        return this.curContext ? this.curContext.context : null
      }
      pushState(CC, zC) {
        this.stack.push(this.state, zC, this.bufferBase + this.buffer.length), this.state = CC
      }
      reduce(CC) {
        var zC;
        let ZC = CC >> 19,
          QC = 65535 & CC,
          {
            parser: wC
          } = this.p,
          bC = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos),
          nC = wC.dynamicPrecedence(QC);
        if (nC && (this.score += nC), 0 == ZC) return this.pushState(wC.getGoto(this.state, QC, !0), this.reducePos), QC < wC.minRepeatTerm && this.storeNode(QC, this.reducePos, this.reducePos, bC ? 8 : 4, !0), void this.reduceContext(QC, this.reducePos);
        let fC = this.stack.length - 3 * (ZC - 1) - (262144 & CC ? 6 : 0),
          oC = fC ? this.stack[fC - 2] : this.p.np[0].from,
          qC = this.reducePos - oC;
        qC >= 2e3 && !(null === (zC = this.p.parser.nodeSet.types[QC]) || void 0 === zC ? void 0 : zC.isAnonymous) && (oC == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = qC) : this.p.lastBigReductionSize < qC && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = oC, this.p.lastBigReductionSize = qC));
        let FC = fC ? this.stack[fC - 1] : 0,
          WC = this.bufferBase + this.buffer.length - FC;
        if (QC < wC.minRepeatTerm || 131072 & CC) {
          let CC = wC.stateFlag(this.state, 1) ? this.pos : this.reducePos;
          this.storeNode(QC, oC, CC, WC + 4, !0)
        }
        if (262144 & CC) this.state = this.stack[fC];
        else {
          let CC = this.stack[fC - 3];
          this.state = wC.getGoto(CC, QC, !0)
        }
        for (; this.stack.length > fC;) this.stack.pop();
        this.reduceContext(QC, oC)
      }
      storeNode(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
          wC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (0 == CC && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
          let CC = this,
            QC = this.buffer.length;
          if (0 == QC && CC.parent && (QC = CC.bufferBase - CC.parent.bufferBase, CC = CC.parent), QC > 0 && 0 == CC.buffer[QC - 4] && CC.buffer[QC - 1] > -1) {
            if (zC == ZC) return;
            if (CC.buffer[QC - 2] >= zC) return void(CC.buffer[QC - 2] = ZC)
          }
        }
        if (wC && this.pos != ZC) {
          let wC = this.buffer.length;
          if (wC > 0 && (0 != this.buffer[wC - 4] || this.buffer[wC - 1] < 0)) {
            let CC = !1;
            for (let zC = wC; zC > 0 && this.buffer[zC - 2] > ZC; zC -= 4)
              if (this.buffer[zC - 1] >= 0) {
                CC = !0;
                break
              } if (CC)
              for (; wC > 0 && this.buffer[wC - 2] > ZC;) this.buffer[wC] = this.buffer[wC - 4], this.buffer[wC + 1] = this.buffer[wC - 3], this.buffer[wC + 2] = this.buffer[wC - 2], this.buffer[wC + 3] = this.buffer[wC - 1], wC -= 4, QC > 4 && (QC -= 4)
          }
          this.buffer[wC] = CC, this.buffer[wC + 1] = zC, this.buffer[wC + 2] = ZC, this.buffer[wC + 3] = QC
        } else this.buffer.push(CC, zC, ZC, QC)
      }
      shift(CC, zC, ZC, QC) {
        if (131072 & CC) this.pushState(65535 & CC, this.pos);
        else if (0 == (262144 & CC)) {
          let wC = CC,
            {
              parser: bC
            } = this.p;
          this.pos = QC;
          let nC = bC.stateFlag(wC, 1);
          !nC && (QC > ZC || zC <= bC.maxNode) && (this.reducePos = QC), this.pushState(wC, nC ? ZC : Math.min(ZC, this.reducePos)), this.shiftContext(zC, ZC), zC <= bC.maxNode && this.buffer.push(zC, ZC, QC, 4)
        } else this.pos = QC, this.shiftContext(zC, ZC), zC <= this.p.parser.maxNode && this.buffer.push(zC, ZC, QC, 4)
      }
      apply(CC, zC, ZC, QC) {
        65536 & CC ? this.reduce(CC) : this.shift(CC, zC, ZC, QC)
      }
      useNode(CC, zC) {
        let ZC = this.p.reused.length - 1;
        (ZC < 0 || this.p.reused[ZC] != CC) && (this.p.reused.push(CC), ZC++);
        let QC = this.pos;
        this.reducePos = this.pos = QC + CC.length, this.pushState(zC, QC), this.buffer.push(ZC, QC, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, CC, this, this.p.stream.reset(this.pos - CC.length)))
      }
      split() {
        let CC = this,
          zC = CC.buffer.length;
        for (; zC > 0 && CC.buffer[zC - 2] > CC.reducePos;) zC -= 4;
        let ZC = CC.buffer.slice(zC),
          QC = CC.bufferBase + zC;
        for (; CC && QC == CC.bufferBase;) CC = CC.parent;
        return new wC(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, ZC, QC, this.curContext, this.lookAhead, CC)
      }
      recoverByDelete(CC, zC) {
        let ZC = CC <= this.p.parser.maxNode;
        ZC && this.storeNode(CC, this.pos, zC, 4), this.storeNode(0, this.pos, zC, ZC ? 8 : 4), this.pos = this.reducePos = zC, this.score -= 190
      }
      canShift(CC) {
        for (let zC = new nC(this);;) {
          let ZC = this.p.parser.stateSlot(zC.state, 4) || this.p.parser.hasAction(zC.state, CC);
          if (0 == ZC) return !1;
          if (0 == (65536 & ZC)) return !0;
          zC.reduce(ZC)
        }
      }
      recoverByInsert(CC) {
        if (this.stack.length >= 300) return [];
        let zC = this.p.parser.nextStates(this.state);
        if (zC.length > 8 || this.stack.length >= 120) {
          let ZC = [];
          for (let QC, wC = 0; wC < zC.length; wC += 2)(QC = zC[wC + 1]) != this.state && this.p.parser.hasAction(QC, CC) && ZC.push(zC[wC], QC);
          if (this.stack.length < 120)
            for (let CC = 0; ZC.length < 8 && CC < zC.length; CC += 2) {
              let QC = zC[CC + 1];
              ZC.some(((CC, zC) => 1 & zC && CC == QC)) || ZC.push(zC[CC], QC)
            }
          zC = ZC
        }
        let ZC = [];
        for (let QC = 0; QC < zC.length && ZC.length < 4; QC += 2) {
          let CC = zC[QC + 1];
          if (CC == this.state) continue;
          let wC = this.split();
          wC.pushState(CC, this.pos), wC.storeNode(0, wC.pos, wC.pos, 4, !0), wC.shiftContext(zC[QC], this.pos), wC.reducePos = this.pos, wC.score -= 200, ZC.push(wC)
        }
        return ZC
      }
      forceReduce() {
        let {
          parser: CC
        } = this.p, zC = CC.stateSlot(this.state, 5);
        if (0 == (65536 & zC)) return !1;
        if (!CC.validAction(this.state, zC)) {
          let ZC = zC >> 19,
            QC = 65535 & zC,
            wC = this.stack.length - 3 * ZC;
          if (wC < 0 || CC.getGoto(this.stack[wC], QC, !1) < 0) {
            let CC = this.findForcedReduction();
            if (null == CC) return !1;
            zC = CC
          }
          this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100
        }
        return this.reducePos = this.pos, this.reduce(zC), !0
      }
      findForcedReduction() {
        let {
          parser: CC
        } = this.p, zC = [], ZC = (QC, wC) => {
          if (!zC.includes(QC)) return zC.push(QC), CC.allActions(QC, (zC => {
            if (393216 & zC);
            else if (65536 & zC) {
              let ZC = (zC >> 19) - wC;
              if (ZC > 1) {
                let QC = 65535 & zC,
                  wC = this.stack.length - 3 * ZC;
                if (wC >= 0 && CC.getGoto(this.stack[wC], QC, !1) >= 0) return ZC << 19 | 65536 | QC
              }
            } else {
              let CC = ZC(zC, wC + 1);
              if (null != CC) return CC
            }
          }))
        };
        return ZC(this.state, 0)
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
          parser: CC
        } = this.p;
        return 65535 == CC.data[CC.stateSlot(this.state, 1)] && !CC.stateSlot(this.state, 4)
      }
      restart() {
        this.storeNode(0, this.pos, this.pos, 4, !0), this.state = this.stack[0], this.stack.length = 0
      }
      sameState(CC) {
        if (this.state != CC.state || this.stack.length != CC.stack.length) return !1;
        for (let zC = 0; zC < this.stack.length; zC += 3)
          if (this.stack[zC] != CC.stack[zC]) return !1;
        return !0
      }
      get parser() {
        return this.p.parser
      }
      dialectEnabled(CC) {
        return this.p.parser.dialect.flags[CC]
      }
      shiftContext(CC, zC) {
        this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, CC, this, this.p.stream.reset(zC)))
      }
      reduceContext(CC, zC) {
        this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, CC, this, this.p.stream.reset(zC)))
      }
      emitContext() {
        let CC = this.buffer.length - 1;
        (CC < 0 || -3 != this.buffer[CC]) && this.buffer.push(this.curContext.hash, this.pos, this.pos, -3)
      }
      emitLookAhead() {
        let CC = this.buffer.length - 1;
        (CC < 0 || -4 != this.buffer[CC]) && this.buffer.push(this.lookAhead, this.pos, this.pos, -4)
      }
      updateContext(CC) {
        if (CC != this.curContext.context) {
          let zC = new bC(this.curContext.tracker, CC);
          zC.hash != this.curContext.hash && this.emitContext(), this.curContext = zC
        }
      }
      setLookAhead(CC) {
        return !(CC <= this.lookAhead) && (this.emitLookAhead(), this.lookAhead = CC, !0)
      }
      close() {
        this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead()
      }
    }
    class bC {
      constructor(CC, zC) {
        this.tracker = CC, this.context = zC, this.hash = CC.strict ? CC.hash(zC) : 0
      }
    }
    class nC {
      constructor(CC) {
        this.start = CC, this.state = CC.state, this.stack = CC.stack, this.base = this.stack.length
      }
      reduce(CC) {
        let zC = 65535 & CC,
          ZC = CC >> 19;
        0 == ZC ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= 3 * (ZC - 1);
        let QC = this.start.p.parser.getGoto(this.stack[this.base - 3], zC, !0);
        this.state = QC
      }
    }
    class fC {
      constructor(CC, zC, ZC) {
        this.stack = CC, this.pos = zC, this.index = ZC, this.buffer = CC.buffer, 0 == this.index && this.maybeNext()
      }
      static create(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : CC.bufferBase + CC.buffer.length;
        return new fC(CC, zC, zC - CC.bufferBase)
      }
      maybeNext() {
        let CC = this.stack.parent;
        null != CC && (this.index = this.stack.bufferBase - CC.bufferBase, this.stack = CC, this.buffer = CC.buffer)
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
        return new fC(this.stack, this.pos, this.index)
      }
    }

    function oC(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uint16Array;
      if ("string" != typeof CC) return CC;
      let ZC = null;
      for (let QC = 0, wC = 0; QC < CC.length;) {
        let bC = 0;
        for (;;) {
          let zC = CC.charCodeAt(QC++),
            ZC = !1;
          if (126 == zC) {
            bC = 65535;
            break
          }
          zC >= 92 && zC--, zC >= 34 && zC--;
          let wC = zC - 32;
          if (wC >= 46 && (wC -= 46, ZC = !0), bC += wC, ZC) break;
          bC *= 46
        }
        ZC ? ZC[wC++] = bC : ZC = new zC(bC)
      }
      return ZC
    }
    class qC {
      constructor() {
        this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0
      }
    }
    const FC = new qC;
    class WC {
      constructor(CC, zC) {
        this.input = CC, this.np = zC, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = FC, this.rangeIndex = 0, this.pos = this.chunkPos = zC[0].from, this.range = zC[0], this.end = zC[zC.length - 1].to, this.readNext()
      }
      resolveOffset(CC, zC) {
        let ZC = this.range,
          QC = this.rangeIndex,
          wC = this.pos + CC;
        for (; wC < ZC.from;) {
          if (!QC) return null;
          let CC = this.np[--QC];
          wC -= ZC.from - CC.to, ZC = CC
        }
        for (; zC < 0 ? wC > ZC.to : wC >= ZC.to;) {
          if (QC == this.np.length - 1) return null;
          let CC = this.np[++QC];
          wC += CC.from - ZC.to, ZC = CC
        }
        return wC
      }
      clipPos(CC) {
        if (CC >= this.range.from && CC < this.range.to) return CC;
        for (let zC of this.np)
          if (zC.to > CC) return Math.max(CC, zC.from);
        return this.end
      }
      peek(CC) {
        let zC, ZC, QC = this.chunkOff + CC;
        if (QC >= 0 && QC < this.chunk.length) zC = this.pos + CC, ZC = this.chunk.charCodeAt(QC);
        else {
          let QC = this.resolveOffset(CC, 1);
          if (null == QC) return -1;
          if (zC = QC, zC >= this.chunk2Pos && zC < this.chunk2Pos + this.chunk2.length) ZC = this.chunk2.charCodeAt(zC - this.chunk2Pos);
          else {
            let CC = this.rangeIndex,
              QC = this.range;
            for (; QC.to <= zC;) QC = this.np[++CC];
            this.chunk2 = this.input.chunk(this.chunk2Pos = zC), zC + this.chunk2.length > QC.to && (this.chunk2 = this.chunk2.slice(0, QC.to - zC)), ZC = this.chunk2.charCodeAt(0)
          }
        }
        return zC >= this.token.lookAhead && (this.token.lookAhead = zC + 1), ZC
      }
      acceptToken(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZC = zC ? this.resolveOffset(zC, -1) : this.pos;
        if (null == ZC || ZC < this.token.start) throw new RangeError("Token end out of bounds");
        this.token.value = CC, this.token.end = ZC
      }
      acceptTokenTo(CC, zC) {
        this.token.value = CC, this.token.end = zC
      }
      getChunk() {
        if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
          let {
            chunk: CC,
            chunkPos: zC
          } = this;
          this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = CC, this.chunk2Pos = zC, this.chunkOff = this.pos - this.chunkPos
        } else {
          this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
          let CC = this.input.chunk(this.pos),
            zC = this.pos + CC.length;
          this.chunk = zC > this.range.to ? CC.slice(0, this.range.to - this.pos) : CC, this.chunkPos = this.pos, this.chunkOff = 0
        }
      }
      readNext() {
        return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff)
      }
      advance() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        for (this.chunkOff += CC; this.pos + CC >= this.range.to;) {
          if (this.rangeIndex == this.np.length - 1) return this.setDone();
          CC -= this.range.to - this.pos, this.range = this.np[++this.rangeIndex], this.pos = this.range.from
        }
        return this.pos += CC, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext()
      }
      setDone() {
        return this.pos = this.chunkPos = this.end, this.range = this.np[this.rangeIndex = this.np.length - 1], this.chunk = "", this.next = -1
      }
      reset(CC, zC) {
        if (zC ? (this.token = zC, zC.start = CC, zC.lookAhead = CC + 1, zC.value = zC.extended = -1) : this.token = FC, this.pos != CC) {
          if (this.pos = CC, CC == this.end) return this.setDone(), this;
          for (; CC < this.range.from;) this.range = this.np[--this.rangeIndex];
          for (; CC >= this.range.to;) this.range = this.np[++this.rangeIndex];
          CC >= this.chunkPos && CC < this.chunkPos + this.chunk.length ? this.chunkOff = CC - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext()
        }
        return this
      }
      read(CC, zC) {
        if (CC >= this.chunkPos && zC <= this.chunkPos + this.chunk.length) return this.chunk.slice(CC - this.chunkPos, zC - this.chunkPos);
        if (CC >= this.chunk2Pos && zC <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(CC - this.chunk2Pos, zC - this.chunk2Pos);
        if (CC >= this.range.from && zC <= this.range.to) return this.input.read(CC, zC);
        let ZC = "";
        for (let QC of this.np) {
          if (QC.from >= zC) break;
          QC.to > CC && (ZC += this.input.read(Math.max(QC.from, CC), Math.min(QC.to, zC)))
        }
        return ZC
      }
    }
    class NC {
      constructor(CC, zC) {
        this.data = CC, this.id = zC
      }
      token(CC, zC) {
        let {
          parser: ZC
        } = zC.p;
        SC(this.data, CC, zC, this.id, ZC.data, ZC.tokenPrecTable)
      }
    }
    NC.prototype.contextual = NC.prototype.fallback = NC.prototype.extend = !1;
    class MC {
      constructor(CC, zC, ZC) {
        this.precTable = zC, this.elseToken = ZC, this.data = "string" == typeof CC ? oC(CC) : CC
      }
      token(CC, zC) {
        let ZC = CC.pos,
          QC = 0;
        for (;;) {
          let ZC = CC.next < 0,
            wC = CC.resolveOffset(1, 1);
          if (SC(this.data, CC, zC, 0, this.data, this.precTable), CC.token.value > -1) break;
          if (null == this.elseToken) return;
          if (ZC || QC++, null == wC) break;
          CC.reset(wC, CC.token)
        }
        QC && (CC.reset(ZC, CC.token), CC.acceptToken(this.elseToken, QC))
      }
    }
    MC.prototype.contextual = NC.prototype.fallback = NC.prototype.extend = !1;
    class gC {
      constructor(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.token = CC, this.contextual = !!zC.contextual, this.fallback = !!zC.fallback, this.extend = !!zC.extend
      }
    }

    function SC(CC, zC, ZC, QC, wC, bC) {
      let nC = 0,
        fC = 1 << QC,
        {
          dialect: oC
        } = ZC.p.parser;
      CC: for (; 0 != (fC & CC[nC]);) {
        let ZC = CC[nC + 1];
        for (let WC = nC + 3; WC < ZC; WC += 2)
          if ((CC[WC + 1] & fC) > 0) {
            let ZC = CC[WC];
            if (oC.allows(ZC) && (-1 == zC.token.value || zC.token.value == ZC || PC(ZC, zC.token.value, wC, bC))) {
              zC.acceptToken(ZC);
              break
            }
          } let QC = zC.next,
          qC = 0,
          FC = CC[nC + 2];
        if (!(zC.next < 0 && FC > qC && 65535 == CC[ZC + 3 * FC - 3])) {
          for (; qC < FC;) {
            let wC = qC + FC >> 1,
              bC = ZC + wC + (wC << 1),
              fC = CC[bC],
              oC = CC[bC + 1] || 65536;
            if (QC < fC) FC = wC;
            else {
              if (!(QC >= oC)) {
                nC = CC[bC + 2], zC.advance();
                continue CC
              }
              qC = wC + 1
            }
          }
          break
        }
        nC = CC[ZC + 3 * FC - 1]
      }
    }

    function pC(CC, zC, ZC) {
      for (let QC, wC = zC; 65535 != (QC = CC[wC]); wC++)
        if (QC == ZC) return wC - zC;
      return -1
    }

    function PC(CC, zC, ZC, QC) {
      let wC = pC(ZC, QC, zC);
      return wC < 0 || pC(ZC, QC, CC) < wC
    }
    const GC = "undefined" != typeof process && {
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
    let RC = null;

    function AC(CC, zC, ZC) {
      let wC = CC.cursor(QC.d.IncludeAnonymous);
      for (wC.moveTo(zC);;)
        if (!(ZC < 0 ? wC.childBefore(zC) : wC.childAfter(zC)))
          for (;;) {
            if ((ZC < 0 ? wC.to < zC : wC.from > zC) && !wC.type.isError) return ZC < 0 ? Math.max(0, Math.min(wC.to - 1, zC - 25)) : Math.min(CC.length, Math.max(wC.from + 1, zC + 25));
            if (ZC < 0 ? wC.prevSibling() : wC.nextSibling()) break;
            if (!wC.parent()) return ZC < 0 ? 0 : CC.length
          }
    }
    class xC {
      constructor(CC, zC) {
        this.fragments = CC, this.nodeSet = zC, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment()
      }
      nextFragment() {
        let CC = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
        if (CC) {
          for (this.safeFrom = CC.openStart ? AC(CC.tree, CC.from + CC.offset, 1) - CC.offset : CC.from, this.safeTo = CC.openEnd ? AC(CC.tree, CC.to + CC.offset, -1) - CC.offset : CC.to; this.trees.length;) this.trees.pop(), this.start.pop(), this.index.pop();
          this.trees.push(CC.tree), this.start.push(-CC.offset), this.index.push(0), this.nextStart = this.safeFrom
        } else this.nextStart = 1e9
      }
      nodeAt(CC) {
        if (CC < this.nextStart) return null;
        for (; this.fragment && this.safeTo <= CC;) this.nextFragment();
        if (!this.fragment) return null;
        for (;;) {
          let zC = this.trees.length - 1;
          if (zC < 0) return this.nextFragment(), null;
          let ZC = this.trees[zC],
            wC = this.index[zC];
          if (wC == ZC.children.length) {
            this.trees.pop(), this.start.pop(), this.index.pop();
            continue
          }
          let bC = ZC.children[wC],
            nC = this.start[zC] + ZC.positions[wC];
          if (nC > CC) return this.nextStart = nC, null;
          if (bC instanceof QC.u) {
            if (nC == CC) {
              if (nC < this.safeFrom) return null;
              let CC = nC + bC.length;
              if (CC <= this.safeTo) {
                let zC = bC.prop(QC.g.lookAhead);
                if (!zC || CC + zC < this.fragment.to) return bC
              }
            }
            this.index[zC]++, nC + bC.length >= Math.max(this.safeFrom, CC) && (this.trees.push(bC), this.start.push(nC), this.index.push(0))
          } else this.index[zC]++, this.nextStart = nC + bC.length
        }
      }
    }
    class JC {
      constructor(CC, zC) {
        this.stream = zC, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = CC.tokenizers.map((CC => new qC))
      }
      getActions(CC) {
        let zC = 0,
          ZC = null,
          {
            parser: QC
          } = CC.p,
          {
            tokenizers: wC
          } = QC,
          bC = QC.stateSlot(CC.state, 3),
          nC = CC.curContext ? CC.curContext.hash : 0,
          fC = 0;
        for (let oC = 0; oC < wC.length; oC++) {
          if (0 == (1 << oC & bC)) continue;
          let QC = wC[oC],
            qC = this.tokens[oC];
          if ((!ZC || QC.fallback) && ((QC.contextual || qC.start != CC.pos || qC.mask != bC || qC.context != nC) && (this.updateCachedToken(qC, QC, CC), qC.mask = bC, qC.context = nC), qC.lookAhead > qC.end + 25 && (fC = Math.max(qC.lookAhead, fC)), 0 != qC.value)) {
            let wC = zC;
            if (qC.extended > -1 && (zC = this.addActions(CC, qC.extended, qC.end, zC)), zC = this.addActions(CC, qC.value, qC.end, zC), !QC.extend && (ZC = qC, zC > wC)) break
          }
        }
        for (; this.actions.length > zC;) this.actions.pop();
        return fC && CC.setLookAhead(fC), ZC || CC.pos != this.stream.end || (ZC = new qC, ZC.value = CC.p.parser.eofTerm, ZC.start = ZC.end = CC.pos, zC = this.addActions(CC, ZC.value, ZC.end, zC)), this.mainToken = ZC, this.actions
      }
      getMainToken(CC) {
        if (this.mainToken) return this.mainToken;
        let zC = new qC,
          {
            pos: ZC,
            p: QC
          } = CC;
        return zC.start = ZC, zC.end = Math.min(ZC + 1, QC.stream.end), zC.value = ZC == QC.stream.end ? QC.parser.eofTerm : 0, zC
      }
      updateCachedToken(CC, zC, ZC) {
        let QC = this.stream.clipPos(ZC.pos);
        if (zC.token(this.stream.reset(QC, CC), ZC), CC.value > -1) {
          let {
            parser: zC
          } = ZC.p;
          for (let QC = 0; QC < zC.specialized.length; QC++)
            if (zC.specialized[QC] == CC.value) {
              let wC = zC.specializers[QC](this.stream.read(CC.start, CC.end), ZC);
              if (wC >= 0 && ZC.p.parser.dialect.allows(wC >> 1)) {
                0 == (1 & wC) ? CC.value = wC >> 1 : CC.extended = wC >> 1;
                break
              }
            }
        } else CC.value = 0, CC.end = this.stream.clipPos(QC + 1)
      }
      putAction(CC, zC, ZC, QC) {
        for (let wC = 0; wC < QC; wC += 3)
          if (this.actions[wC] == CC) return QC;
        return this.actions[QC++] = CC, this.actions[QC++] = zC, this.actions[QC++] = ZC, QC
      }
      addActions(CC, zC, ZC, QC) {
        let {
          state: wC
        } = CC, {
          parser: bC
        } = CC.p, {
          data: nC
        } = bC;
        for (let fC = 0; fC < 2; fC++)
          for (let CC = bC.stateSlot(wC, fC ? 2 : 1);; CC += 3) {
            if (65535 == nC[CC]) {
              if (1 != nC[CC + 1]) {
                0 == QC && 2 == nC[CC + 1] && (QC = this.putAction(KC(nC, CC + 2), zC, ZC, QC));
                break
              }
              CC = KC(nC, CC + 2)
            }
            nC[CC] == zC && (QC = this.putAction(KC(nC, CC + 1), zC, ZC, QC))
          }
        return QC
      }
    }
    class IC {
      constructor(CC, zC, ZC, QC) {
        this.parser = CC, this.input = zC, this.np = QC, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new WC(zC, QC), this.tokens = new JC(CC, this.stream), this.topTerm = CC.top[1];
        let {
          from: bC
        } = QC[0];
        this.stacks = [wC.start(this, CC.top[0], bC)], this.fragments = ZC.length && this.stream.end - bC > 4 * CC.bufferLength ? new xC(ZC, CC.nodeSet) : null
      }
      get parsedPos() {
        return this.minStackPos
      }
      advance() {
        let CC, zC, ZC = this.stacks,
          QC = this.minStackPos,
          wC = this.stacks = [];
        if (this.bigReductionCount > 300 && 1 == ZC.length) {
          let [CC] = ZC;
          for (; CC.forceReduce() && CC.stack.length && CC.stack[CC.stack.length - 2] >= this.lastBigReductionStart;);
          this.bigReductionCount = this.lastBigReductionSize = 0
        }
        for (let bC = 0; bC < ZC.length; bC++) {
          let nC = ZC[bC];
          for (;;) {
            if (this.tokens.mainToken = null, nC.pos > QC) wC.push(nC);
            else {
              if (this.advanceStack(nC, wC, ZC)) continue;
              {
                CC || (CC = [], zC = []), CC.push(nC);
                let ZC = this.tokens.getMainToken(nC);
                zC.push(ZC.value, ZC.end)
              }
            }
            break
          }
        }
        if (!wC.length) {
          let zC = CC && function(CC) {
            let zC = null;
            for (let ZC of CC) {
              let CC = ZC.p.stoppedAt;
              (ZC.pos == ZC.p.stream.end || null != CC && ZC.pos > CC) && ZC.p.parser.stateFlag(ZC.state, 2) && (!zC || zC.score < ZC.score) && (zC = ZC)
            }
            return zC
          }(CC);
          if (zC) return GC && console.log("Finish with " + this.stackID(zC)), this.stackToTree(zC);
          if (this.parser.strict) throw GC && CC && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + QC);
          this.recovering || (this.recovering = 5)
        }
        if (this.recovering && CC) {
          let ZC = null != this.stoppedAt && CC[0].pos > this.stoppedAt ? CC[0] : this.runRecovery(CC, zC, wC);
          if (ZC) return GC && console.log("Force-finish " + this.stackID(ZC)), this.stackToTree(ZC.forceAll())
        }
        if (this.recovering) {
          let CC = 1 == this.recovering ? 1 : 3 * this.recovering;
          if (wC.length > CC)
            for (wC.sort(((CC, zC) => zC.score - CC.score)); wC.length > CC;) wC.pop();
          wC.some((CC => CC.reducePos > QC)) && this.recovering--
        } else if (wC.length > 1) {
          CC: for (let CC = 0; CC < wC.length - 1; CC++) {
            let zC = wC[CC];
            for (let ZC = CC + 1; ZC < wC.length; ZC++) {
              let QC = wC[ZC];
              if (zC.sameState(QC) || zC.buffer.length > 500 && QC.buffer.length > 500) {
                if (!((zC.score - QC.score || zC.buffer.length - QC.buffer.length) > 0)) {
                  wC.splice(CC--, 1);
                  continue CC
                }
                wC.splice(ZC--, 1)
              }
            }
          }
          wC.length > 12 && (wC.sort(((CC, zC) => zC.score - CC.score)), wC.splice(12, wC.length - 12))
        }
        this.minStackPos = wC[0].pos;
        for (let bC = 1; bC < wC.length; bC++) wC[bC].pos < this.minStackPos && (this.minStackPos = wC[bC].pos);
        return null
      }
      stopAt(CC) {
        if (null != this.stoppedAt && this.stoppedAt < CC) throw new RangeError("Can't move stoppedAt forward");
        this.stoppedAt = CC
      }
      advanceStack(CC, zC, ZC) {
        let wC = CC.pos,
          {
            parser: bC
          } = this,
          nC = GC ? this.stackID(CC) + " -> " : "";
        if (null != this.stoppedAt && wC > this.stoppedAt) return CC.forceReduce() ? CC : null;
        if (this.fragments) {
          let zC = CC.curContext && CC.curContext.tracker.strict,
            ZC = zC ? CC.curContext.hash : 0;
          for (let fC = this.fragments.nodeAt(wC); fC;) {
            let wC = this.parser.nodeSet.types[fC.type.id] == fC.type ? bC.getGoto(CC.state, fC.type.id) : -1;
            if (wC > -1 && fC.length && (!zC || (fC.prop(QC.g.contextHash) || 0) == ZC)) return CC.useNode(fC, wC), GC && console.log(nC + this.stackID(CC) + ` (via reuse of ${bC.getName(fC.type.id)})`), !0;
            if (!(fC instanceof QC.u) || 0 == fC.children.length || fC.positions[0] > 0) break;
            let oC = fC.children[0];
            if (!(oC instanceof QC.u && 0 == fC.positions[0])) break;
            fC = oC
          }
        }
        let fC = bC.stateSlot(CC.state, 4);
        if (fC > 0) return CC.reduce(fC), GC && console.log(nC + this.stackID(CC) + ` (via always-reduce ${bC.getName(65535&fC)})`), !0;
        if (CC.stack.length >= 8400)
          for (; CC.stack.length > 6e3 && CC.forceReduce(););
        let oC = this.tokens.getActions(CC);
        for (let QC = 0; QC < oC.length;) {
          let fC = oC[QC++],
            qC = oC[QC++],
            FC = oC[QC++],
            WC = QC == oC.length || !ZC,
            NC = WC ? CC : CC.split(),
            MC = this.tokens.mainToken;
          if (NC.apply(fC, qC, MC ? MC.start : NC.pos, FC), GC && console.log(nC + this.stackID(NC) + ` (via ${0==(65536&fC)?"shift":`reduce of ${bC.getName(65535&fC)}`} for ${bC.getName(qC)} @ ${wC}${NC==CC?"":", split"})`), WC) return !0;
          NC.pos > wC ? zC.push(NC) : ZC.push(NC)
        }
        return !1
      }
      advanceFully(CC, zC) {
        let ZC = CC.pos;
        for (;;) {
          if (!this.advanceStack(CC, null, null)) return !1;
          if (CC.pos > ZC) return iC(CC, zC), !0
        }
      }
      runRecovery(CC, zC, ZC) {
        let QC = null,
          wC = !1;
        for (let bC = 0; bC < CC.length; bC++) {
          let nC = CC[bC],
            fC = zC[bC << 1],
            oC = zC[1 + (bC << 1)],
            qC = GC ? this.stackID(nC) + " -> " : "";
          if (nC.deadEnd) {
            if (wC) continue;
            if (wC = !0, nC.restart(), GC && console.log(qC + this.stackID(nC) + " (restarted)"), this.advanceFully(nC, ZC)) continue
          }
          let FC = nC.split(),
            WC = qC;
          for (let CC = 0; CC < 10 && FC.forceReduce(); CC++) {
            if (GC && console.log(WC + this.stackID(FC) + " (via force-reduce)"), this.advanceFully(FC, ZC)) break;
            GC && (WC = this.stackID(FC) + " -> ")
          }
          for (let CC of nC.recoverByInsert(fC)) GC && console.log(qC + this.stackID(CC) + " (via recover-insert)"), this.advanceFully(CC, ZC);
          this.stream.end > nC.pos ? (oC == nC.pos && (oC++, fC = 0), nC.recoverByDelete(fC, oC), GC && console.log(qC + this.stackID(nC) + ` (via recover-delete ${this.parser.getName(fC)})`), iC(nC, ZC)) : (!QC || QC.score < FC.score) && (QC = FC)
        }
        return QC
      }
      stackToTree(CC) {
        return CC.close(), QC.u.build({
          buffer: fC.create(CC),
          nodeSet: this.parser.nodeSet,
          topID: this.topTerm,
          maxBufferLength: this.parser.bufferLength,
          reused: this.reused,
          start: this.np[0].from,
          length: CC.pos - this.np[0].from,
          minRepeatType: this.parser.minRepeatTerm
        })
      }
      stackID(CC) {
        let zC = (RC || (RC = new WeakMap)).get(CC);
        return zC || RC.set(CC, zC = String.fromCodePoint(this.nextStackID++)), zC + CC
      }
    }

    function iC(CC, zC) {
      for (let ZC = 0; ZC < zC.length; ZC++) {
        let QC = zC[ZC];
        if (QC.pos == CC.pos && QC.sameState(CC)) return void(zC[ZC].score < CC.score && (zC[ZC] = CC))
      }
      zC.push(CC)
    }
    class vC {
      constructor(CC, zC, ZC) {
        this.source = CC, this.flags = zC, this.disabled = ZC
      }
      allows(CC) {
        return !this.disabled || 0 == this.disabled[CC]
      }
    }
    const eC = CC => CC;
    class hC extends QC.n {
      constructor(CC) {
        if (super(), this.wrappers = [], 14 != CC.version) throw new RangeError(`Parser version (${CC.version}) doesn't match runtime version (14)`);
        let zC = CC.nodeNames.split(" ");
        this.minRepeatTerm = zC.length;
        for (let QC = 0; QC < CC.repeatNodeCount; QC++) zC.push("");
        let ZC = Object.keys(CC.topRules).map((zC => CC.topRules[zC][1])),
          wC = [];
        for (let QC = 0; QC < zC.length; QC++) wC.push([]);

        function bC(CC, zC, ZC) {
          wC[CC].push([zC, zC.deserialize(String(ZC))])
        }
        if (CC.nodeProps)
          for (let fC of CC.nodeProps) {
            let CC = fC[0];
            "string" == typeof CC && (CC = QC.g[CC]);
            for (let zC = 1; zC < fC.length;) {
              let ZC = fC[zC++];
              if (ZC >= 0) bC(ZC, CC, fC[zC++]);
              else {
                let QC = fC[zC + -ZC];
                for (let wC = -ZC; wC > 0; wC--) bC(fC[zC++], CC, QC);
                zC++
              }
            }
          }
        this.nodeSet = new QC.j(zC.map(((zC, bC) => QC.k.define({
          name: bC >= this.minRepeatTerm ? void 0 : zC,
          id: bC,
          props: wC[bC],
          top: ZC.indexOf(bC) > -1,
          error: 0 == bC,
          skipped: CC.skippedNodes && CC.skippedNodes.indexOf(bC) > -1
        })))), CC.propSources && (this.nodeSet = this.nodeSet.extend(...CC.propSources)), this.strict = !1, this.bufferLength = QC.b;
        let nC = oC(CC.tokenData);
        this.context = CC.context, this.specializerSpecs = CC.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
        for (let QC = 0; QC < this.specializerSpecs.length; QC++) this.specialized[QC] = this.specializerSpecs[QC].term;
        this.specializers = this.specializerSpecs.map(YC), this.states = oC(CC.states, Uint32Array), this.data = oC(CC.stateData), this.goto = oC(CC.goto), this.maxTerm = CC.maxTerm, this.tokenizers = CC.tokenizers.map((CC => "number" == typeof CC ? new NC(nC, CC) : CC)), this.topRules = CC.topRules, this.dialects = CC.dialects || {}, this.dynamicPrecedences = CC.dynamicPrecedences || null, this.tokenPrecTable = CC.tokenPrec, this.termNames = CC.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]]
      }
      createParse(CC, zC, ZC) {
        let QC = new IC(this, CC, zC, ZC);
        for (let wC of this.wrappers) QC = wC(QC, CC, zC, ZC);
        return QC
      }
      getGoto(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          QC = this.goto;
        if (zC >= QC[0]) return -1;
        for (let wC = QC[zC + 1];;) {
          let zC = QC[wC++],
            bC = 1 & zC,
            nC = QC[wC++];
          if (bC && ZC) return nC;
          for (let ZC = wC + (zC >> 1); wC < ZC; wC++)
            if (QC[wC] == CC) return nC;
          if (bC) return -1
        }
      }
      hasAction(CC, zC) {
        let ZC = this.data;
        for (let QC = 0; QC < 2; QC++)
          for (let wC, bC = this.stateSlot(CC, QC ? 2 : 1);; bC += 3) {
            if (65535 == (wC = ZC[bC])) {
              if (1 != ZC[bC + 1]) {
                if (2 == ZC[bC + 1]) return KC(ZC, bC + 2);
                break
              }
              wC = ZC[bC = KC(ZC, bC + 2)]
            }
            if (wC == zC || 0 == wC) return KC(ZC, bC + 1)
          }
        return 0
      }
      stateSlot(CC, zC) {
        return this.states[6 * CC + zC]
      }
      stateFlag(CC, zC) {
        return (this.stateSlot(CC, 0) & zC) > 0
      }
      validAction(CC, zC) {
        return !!this.allActions(CC, (CC => CC == zC || null))
      }
      allActions(CC, zC) {
        let ZC = this.stateSlot(CC, 4),
          QC = ZC ? zC(ZC) : void 0;
        for (let wC = this.stateSlot(CC, 1); null == QC; wC += 3) {
          if (65535 == this.data[wC]) {
            if (1 != this.data[wC + 1]) break;
            wC = KC(this.data, wC + 2)
          }
          QC = zC(KC(this.data, wC + 1))
        }
        return QC
      }
      nextStates(CC) {
        let zC = [];
        for (let ZC = this.stateSlot(CC, 1);; ZC += 3) {
          if (65535 == this.data[ZC]) {
            if (1 != this.data[ZC + 1]) break;
            ZC = KC(this.data, ZC + 2)
          }
          if (0 == (1 & this.data[ZC + 2])) {
            let CC = this.data[ZC + 1];
            zC.some(((zC, ZC) => 1 & ZC && zC == CC)) || zC.push(this.data[ZC], CC)
          }
        }
        return zC
      }
      configure(CC) {
        let zC = Object.assign(Object.create(hC.prototype), this);
        if (CC.props && (zC.nodeSet = this.nodeSet.extend(...CC.props)), CC.top) {
          let ZC = this.topRules[CC.top];
          if (!ZC) throw new RangeError(`Invalid top rule name ${CC.top}`);
          zC.top = ZC
        }
        return CC.tokenizers && (zC.tokenizers = this.tokenizers.map((zC => {
          let ZC = CC.tokenizers.find((CC => CC.from == zC));
          return ZC ? ZC.to : zC
        }))), CC.specializers && (zC.specializers = this.specializers.slice(), zC.specializerSpecs = this.specializerSpecs.map(((ZC, QC) => {
          let wC = CC.specializers.find((CC => CC.from == ZC.external));
          if (!wC) return ZC;
          let bC = Object.assign(Object.assign({}, ZC), {
            external: wC.to
          });
          return zC.specializers[QC] = YC(bC), bC
        }))), CC.contextTracker && (zC.context = CC.contextTracker), CC.dialect && (zC.dialect = this.parseDialect(CC.dialect)), null != CC.strict && (zC.strict = CC.strict), CC.wrap && (zC.wrappers = zC.wrappers.concat(CC.wrap)), null != CC.bufferLength && (zC.bufferLength = CC.bufferLength), zC
      }
      hasWrappers() {
        return this.wrappers.length > 0
      }
      getName(CC) {
        return this.termNames ? this.termNames[CC] : String(CC <= this.maxNode && this.nodeSet.types[CC].name || CC)
      }
      get eofTerm() {
        return this.maxNode + 1
      }
      get topNode() {
        return this.nodeSet.types[this.top[1]]
      }
      dynamicPrecedence(CC) {
        let zC = this.dynamicPrecedences;
        return null == zC ? 0 : zC[CC] || 0
      }
      parseDialect(CC) {
        let zC = Object.keys(this.dialects),
          ZC = zC.map((() => !1));
        if (CC)
          for (let wC of CC.split(" ")) {
            let CC = zC.indexOf(wC);
            CC >= 0 && (ZC[CC] = !0)
          }
        let QC = null;
        for (let wC = 0; wC < zC.length; wC++)
          if (!ZC[wC])
            for (let CC, ZC = this.dialects[zC[wC]]; 65535 != (CC = this.data[ZC++]);)(QC || (QC = new Uint8Array(this.maxTerm + 1)))[CC] = 1;
        return new vC(CC, ZC, QC)
      }
      static deserialize(CC) {
        return new hC(CC)
      }
    }

    function KC(CC, zC) {
      return CC[zC] | CC[zC + 1] << 16
    }

    function YC(CC) {
      if (CC.external) {
        let zC = CC.extend ? 1 : 0;
        return (ZC, QC) => CC.external(ZC, QC) << 1 | zC
      }
      return CC.get
    }
    var dC = ZC(41150);
    const mC = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288],
      HC = new class {
        constructor(CC) {
          this.start = CC.start, this.shift = CC.shift || eC, this.reduce = CC.reduce || eC, this.reuse = CC.reuse || eC, this.hash = CC.hash || (() => 0), this.strict = !1 !== CC.strict
        }
      }({
        start: !1,
        shift: (CC, zC) => 5 == zC || 6 == zC || 320 == zC ? CC : 321 == zC,
        strict: !1
      }),
      EC = new gC(((CC, zC) => {
        let {
          next: ZC
        } = CC;
        (125 == ZC || -1 == ZC || zC.context) && CC.acceptToken(318)
      }), {
        contextual: !0,
        fallback: !0
      }),
      lC = new gC(((CC, zC) => {
        let ZC, {
          next: QC
        } = CC;
        mC.indexOf(QC) > -1 || (47 != QC || 47 != (ZC = CC.peek(1)) && 42 != ZC) && (125 == QC || 59 == QC || -1 == QC || zC.context || CC.acceptToken(316))
      }), {
        contextual: !0
      }),
      XC = new gC(((CC, zC) => {
        91 != CC.next || zC.context || CC.acceptToken(317)
      }), {
        contextual: !0
      }),
      cC = new gC(((CC, zC) => {
        let {
          next: ZC
        } = CC;
        if (43 == ZC || 45 == ZC) {
          if (CC.advance(), ZC == CC.next) {
            CC.advance();
            let ZC = !zC.context && zC.canShift(1);
            CC.acceptToken(ZC ? 1 : 2)
          }
        } else 63 == ZC && 46 == CC.peek(1) && (CC.advance(), CC.advance(), (CC.next < 48 || CC.next > 57) && CC.acceptToken(3))
      }), {
        contextual: !0
      });

    function uC(CC, zC) {
      return CC >= 65 && CC <= 90 || CC >= 97 && CC <= 122 || 95 == CC || CC >= 192 || !zC && CC >= 48 && CC <= 57
    }
    const rC = new gC(((CC, zC) => {
        if (60 != CC.next || !zC.dialectEnabled(0)) return;
        if (CC.advance(), 47 == CC.next) return;
        let ZC = 0;
        for (; mC.indexOf(CC.next) > -1;) CC.advance(), ZC++;
        if (uC(CC.next, !0)) {
          for (CC.advance(), ZC++; uC(CC.next, !1);) CC.advance(), ZC++;
          for (; mC.indexOf(CC.next) > -1;) CC.advance(), ZC++;
          if (44 == CC.next) return;
          for (let zC = 0;; zC++) {
            if (7 == zC) {
              if (!uC(CC.next, !0)) return;
              break
            }
            if (CC.next != "extends".charCodeAt(zC)) break;
            CC.advance(), ZC++
          }
        }
        CC.acceptToken(4, -ZC)
      })),
      sC = (0, dC.c)({
        "get set async static": dC.i.modifier,
        "for while do if else switch try catch finally return throw break continue default case defer": dC.i.controlKeyword,
        "in of await yield void typeof delete instanceof as satisfies": dC.i.operatorKeyword,
        "let var const using function class extends": dC.i.definitionKeyword,
        "import export from": dC.i.moduleKeyword,
        "with debugger new": dC.i.keyword,
        TemplateString: dC.i.special(dC.i.string),
        super: dC.i.atom,
        BooleanLiteral: dC.i.bool,
        this: dC.i.self,
        null: dC.i.null,
        Star: dC.i.modifier,
        VariableName: dC.i.variableName,
        "CallExpression/VariableName TaggedTemplateExpression/VariableName": dC.i.function(dC.i.variableName),
        VariableDefinition: dC.i.definition(dC.i.variableName),
        Label: dC.i.labelName,
        PropertyName: dC.i.propertyName,
        PrivatePropertyName: dC.i.special(dC.i.propertyName),
        "CallExpression/MemberExpression/PropertyName": dC.i.function(dC.i.propertyName),
        "FunctionDeclaration/VariableDefinition": dC.i.function(dC.i.definition(dC.i.variableName)),
        "ClassDeclaration/VariableDefinition": dC.i.definition(dC.i.className),
        "NewExpression/VariableName": dC.i.className,
        PropertyDefinition: dC.i.definition(dC.i.propertyName),
        PrivatePropertyDefinition: dC.i.definition(dC.i.special(dC.i.propertyName)),
        UpdateOp: dC.i.updateOperator,
        "LineComment Hashbang": dC.i.lineComment,
        BlockComment: dC.i.blockComment,
        Number: dC.i.number,
        String: dC.i.string,
        Escape: dC.i.escape,
        ArithOp: dC.i.arithmeticOperator,
        LogicOp: dC.i.logicOperator,
        BitOp: dC.i.bitwiseOperator,
        CompareOp: dC.i.compareOperator,
        RegExp: dC.i.regexp,
        Equals: dC.i.definitionOperator,
        Arrow: dC.i.function(dC.i.punctuation),
        ": Spread": dC.i.punctuation,
        "( )": dC.i.paren,
        "[ ]": dC.i.squareBracket,
        "{ }": dC.i.brace,
        "InterpolationStart InterpolationEnd": dC.i.special(dC.i.brace),
        ".": dC.i.derefOperator,
        ", ;": dC.i.separator,
        "@": dC.i.meta,
        TypeName: dC.i.typeName,
        TypeDefinition: dC.i.definition(dC.i.typeName),
        "type enum interface implements namespace module declare": dC.i.definitionKeyword,
        "abstract global Privacy readonly override": dC.i.modifier,
        "is keyof unique infer asserts": dC.i.operatorKeyword,
        JSXAttributeValue: dC.i.attributeValue,
        JSXText: dC.i.content,
        "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": dC.i.angleBracket,
        "JSXIdentifier JSXNameSpacedName": dC.i.tagName,
        "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": dC.i.attributeName,
        "JSXBuiltin/JSXIdentifier": dC.i.standard(dC.i.tagName)
      }),
      TC = {
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
      aC = {
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
      tC = {
        __proto__: null,
        "<": 193
      },
      DC = hC.deserialize({
        version: 14,
        states: "$F|Q%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Il'#IlO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JrO6[Q!0MxO'#JsO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO9XQMhO'#F|O9`Q`O'#F{OOQ!0Lf'#Js'#JsOOQ!0Lb'#Jr'#JrO9eQ`O'#GwOOQ['#K_'#K_O9pQ`O'#IYO9uQ!0LrO'#IZOOQ['#J`'#J`OOQ['#I_'#I_Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GsO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EyO;hQMhO'#FeO;xQ`O'#GsOOQO'#K`'#K`O;}Q`O'#K`O<]Q`O'#G{O<]Q`O'#G|O<]Q`O'#HOO9kQ`O'#HRO=SQ`O'#HUO>kQ`O'#CeO>{Q`O'#HcO?TQ`O'#HiO?TQ`O'#HkO`QlO'#HmO?TQ`O'#HoO?TQ`O'#HrO?YQ`O'#HxO?_Q!0LsO'#IOO%[QlO'#IQO?jQ!0LsO'#ISO?uQ!0LsO'#IUO9uQ!0LrO'#IWO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jv'#JvO%[QlO'#JvOOQO'#Jy'#JyOOQO'#Ih'#IhOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J}'#J}OC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jx'#JxODlQpO'#JyOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CD})CD}OOOO'#I`'#I`OFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ia'#IaOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Ic'#IcOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IdOGyQ`O'#JtOIxQ!fO'#JtO+}QlO'#JtOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KTOKPQ`O'#KSOKPQ`O'#KSOKXQ`O,5;^OK^Q`O'#KROOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KQONtQ`O'#KPO9eQ`O'#KPO! YQ`O'#KPO! bQ`O,5;]O! gQ`O'#KPO!#lQ!fO'#JsOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#Jz'#JzOOQO-E<j-E<jO9kQ`O,5=_O!$rQ`O,5=_O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;dO!(|QpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)[QlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IpO!+_Q!0LrO,5<iO%[QlO,5;eO!&zQMhO,5;eO!+|QMhO,5;eO!-nQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-uQ,UO'#FjO!.rQ,UO'#KXO!.^Q,UO'#KXO!.yQ,UO'#KXOOQO'#KX'#KXO!/_Q,UO,5<SOOOW,5<`,5<`O!/pQlO'#FvOOOW'#Io'#IoO7VO7dO,5<QO!/wQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<eO!1pQ`O,5<hO!3YQ(CWO'#GXO!3jQ`O'#GYO!3oQ`O'#GYO!5_Q(CWO'#G^O!6dQpO'#GbOOQO'#Gn'#GnO!,TQMhO'#GmOOQO'#Gp'#GpO!,TQMhO'#GoO!7VQ$IUO'#JlOOQ!0Lh'#Jl'#JlO!7aQ`O'#JkO!7oQ`O'#JjO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<eO1SQ`O'#DZO!,TQMhO'#GPO!,TQMhO'#GRO!8gQ`O'#GTO!8lQ`O'#GUO!3oQ`O'#G[O!,TQMhO'#GaO<]Q`O'#JkO!8qQ`O'#EqO!9`Q`O,5<gOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KR'#KRO!:iQ!0LrO'#KaO9uQ!0LrO,5=cO`QlO,5>tOOQ['#Jh'#JhOOQ[,5>u,5>uOOQ[-E<]-E<]O!<hQ!0MxO,5:bO!:]QpO,5:`O!?RQ!0MxO,5:jO%[QlO,5:jO!AiQ!0MxO,5:lOOQO,5@z,5@zO!BYQMhO,5=_O!BhQ!0LrO'#JiO9`Q`O'#JiO!ByQ!0LrO,59ZO!CUQpO,59ZO!C^QMhO,59ZO:dQMhO,59ZO!CiQ`O,5;ZO!CqQ`O'#HbO!DVQ`O'#KdO%[QlO,5;}O!:]QpO,5<PO!D_Q`O,5=zO!DdQ`O,5=zO!DiQ`O,5=zO!DwQ`O,5=zO9uQ!0LrO,5=zO<]Q`O,5=jOOQO'#Cy'#CyO!EOQpO,5=gO!EWQMhO,5=hO!EcQ`O,5=jO!EhQ!bO,5=mO!EpQ`O'#K`O?YQ`O'#HWO9kQ`O'#HYO!EuQ`O'#HYO:dQMhO'#H[O!EzQ`O'#H[OOQ[,5=p,5=pO!FPQ`O'#H]O!FbQ`O'#CoO!FgQ`O,59PO!FqQ`O,59PO!HvQlO,59POOQ[,59P,59PO!IWQ!0LrO,59PO%[QlO,59PO!KcQlO'#HeOOQ['#Hf'#HfOOQ['#Hg'#HgO`QlO,5=}O!KyQ`O,5=}O`QlO,5>TO`QlO,5>VO!LOQ`O,5>XO`QlO,5>ZO!LTQ`O,5>^O!LYQlO,5>dOOQ[,5>j,5>jO%[QlO,5>jO9uQ!0LrO,5>lOOQ[,5>n,5>nO#!dQ`O,5>nOOQ[,5>p,5>pO#!dQ`O,5>pOOQ[,5>r,5>rO##QQpO'#D_O%[QlO'#JvO##sQpO'#JvO##}QpO'#DmO#$`QpO'#DmO#&qQlO'#DmO#&xQ`O'#JuO#'QQ`O,5:WO#'VQ`O'#EtO#'eQ`O'#KUO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CUQpO,5;YO!C^QMhO,5;YO:dQMhO,5;YO#(`Q`O,5@bO#(eQ07dO,5:sOOQO-E<f-E<fO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!ByQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CUQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I^'#I^P#+RO&2DjO,58|POOO,58|,58|OOOO-E<^-E<^OOQ!0Lh1G.p1G.pOOOO-E<_-E<_OOOO,59},59}O#+^Q!bO,59}OOOO-E<a-E<aOOQ!0Lf1G/g1G/gO#+cQ!fO,5?OO+}QlO,5?OOOQO,5?U,5?UO#+mQlO'#IdOOQO-E<b-E<bO#+zQ`O,5@`O#,SQ!fO,5@`O#,ZQ`O,5@nOOQ!0Lf1G/m1G/mO%[QlO,5@oO#,cQ`O'#IjOOQO-E<h-E<hO#,ZQ`O,5@nOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@lO#,wQ!0LrO,5@lO#-YQ!0LrO,5@lO#-aQ`O,5@kO9eQ`O,5@kO#-iQ`O,5@kO#-wQ`O'#ImO#-aQ`O,5@kOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2yO9kQ`O1G2yOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0rQ!0MzO'#JlO!$wQlO1G0uO#2}Q!fO'#JwO%[QlO'#JwO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#3^Q`O1G1OO#5rQ!0MxO1G1PO#5yQ!0MxO1G1PO#8aQ!0MxO1G1PO#8hQ!0MxO1G1PO#;OQ!0MxO1G1PO#=fQ!0MxO1G1PO#=mQ!0MxO1G1PO#=tQ!0MxO1G1PO#@[Q!0MxO1G1PO#@cQ!0MxO1G1PO#BpQ?MtO'#CiO#DkQ?MtO1G1`O#DrQ?MtO'#JsO#EVQ!0MxO,5?[OOQ!0Lb-E<n-E<nO#GdQ!0MxO1G1PO#HaQ!0MzO1G1POOQ!0Lf1G1P1G1PO#IdQMjO'#J|O#InQ`O,5:xO#IsQ!0MxO1G1cO#JgQ,UO,5<WO#JoQ,UO,5<XO#JwQ,UO'#FoO#K`Q`O'#FnOOQO'#KY'#KYOOQO'#In'#InO#KeQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#KvQ?MtO'#JrO#LQQ`O,5<bO!)[QlO,5<bOOOW-E<m-E<mOOQ!0Lf1G1l1G1lO#LVQpO'#KXOOQ!0Lf,5<d,5<dO#L_QpO,5<dO#LdQMhO'#DTOOOO'#Ib'#IbO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8lQ`O'#IrO#LvQ`O,5<zOOQ!0Lh,5<w,5<wO!,TQMhO'#IuO#MdQMjO,5=XO!,TQMhO'#IwO#NVQMjO,5=ZO!&zQMhO,5=]OOQO1G2S1G2SO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GbO$!dQ!dO,5<sO$!kQ`O'#K[O9eQ`O'#K[O$!yQ`O,5<uO$#aQ!dO'#C{O!,TQMhO,5<tO$#kQ`O'#GZO$$PQ`O,5<tO$$UQ!dO'#GWO$$cQ!dO'#K]O$$mQ`O'#K]O!&zQMhO'#K]O$$rQ`O,5<xO$$wQlO'#JvO$%RQpO'#GcO#$`QpO'#GcO$%dQ`O'#GgO!3oQ`O'#GkO$%iQ!0LrO'#ItO$%tQpO,5<|OOQ!0Lp,5<|,5<|O$%{QpO'#GcO$&YQpO'#GdO$&kQpO'#GdO$&pQMjO,5=XO$'QQMjO,5=ZOOQ!0Lh,5=^,5=^O!,TQMhO,5@VO!,TQMhO,5@VO$'bQ`O'#IyO$'vQ`O,5@UO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@VO$)TQ$IYO,59uOOQ!0Lh'#Jp'#JpO$)vQMjO,5<kO$*iQMjO,5<mO@zQ`O,5<oOOQ!0Lh,5<p,5<pO$*sQ`O,5<vO$*xQMjO,5<{O$+YQ`O'#KPO!$wQlO1G2RO$+_Q`O1G2RO9eQ`O'#KSO9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I{O$+dQ!0LrO,5@{OOQ[1G2}1G2}OOQ[1G4`1G4`OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-fQ!0MxO1G0UOOQ[1G2y1G2yO!&zQMhO1G2yO%[QlO1G2yO#.tQ`O1G2yO$/jQMhO'#EkOOQ!0Lb,5@T,5@TO$/wQ!0LrO,5@TOOQ[1G.u1G.uO!ByQ!0LrO1G.uO!CUQpO1G.uO!C^QMhO1G.uO$0YQ`O1G0uO$0_Q`O'#CiO$0jQ`O'#KeO$0rQ`O,5=|O$0wQ`O'#KeO$0|Q`O'#KeO$1[Q`O'#JRO$1jQ`O,5AOO$1rQ!fO1G1iOOQ!0Lf1G1k1G1kO9kQ`O1G3fO@zQ`O1G3fO$1yQ`O1G3fO$2OQ`O1G3fO!DiQ`O1G3fO9uQ!0LrO1G3fOOQ[1G3f1G3fO!EcQ`O1G3UO!&zQMhO1G3RO$2TQ`O1G3ROOQ[1G3S1G3SO!&zQMhO1G3SO$2YQ`O1G3SO$2bQpO'#HQOOQ[1G3U1G3UO!6_QpO'#I}O!EhQ!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$2jQMhO,5=tO9kQ`O,5=tO$%dQ`O,5=vO9`Q`O,5=vO!CUQpO,5=vO!C^QMhO,5=vO:dQMhO,5=vO$2xQ`O'#KcO$3TQ`O,5=wOOQ[1G.k1G.kO$3YQ!0LrO1G.kO@zQ`O1G.kO$3eQ`O1G.kO9uQ!0LrO1G.kO$5mQ!fO,5AQO$5zQ`O,5AQO9eQ`O,5AQO$6VQlO,5>PO$6^Q`O,5>POOQ[1G3i1G3iO`QlO1G3iOOQ[1G3o1G3oOOQ[1G3q1G3qO?TQ`O1G3sO$6cQlO1G3uO$:gQlO'#HtOOQ[1G3x1G3xO$:tQ`O'#HzO?YQ`O'#H|OOQ[1G4O1G4OO$:|QlO1G4OO9uQ!0LrO1G4UOOQ[1G4W1G4WOOQ!0Lb'#G_'#G_O9uQ!0LrO1G4YO9uQ!0LrO1G4[O$?TQ`O,5@bO!)[QlO,5;`O9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CUQpO,5:XO$?YQ?MtO,5:XOOQO,5;`,5;`O$?dQpO'#IeO$?zQ`O,5@aOOQ!0Lf1G/r1G/rO$@SQpO'#IkO$@^Q`O,5@pOOQ!0Lb1G0y1G0yO#$`QpO,5:XOOQO'#Ig'#IgO$@fQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CUQpO1G0tO!C^QMhO1G0tOOQ!0Lb1G5|1G5|O!ByQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@mQ!0LrO1G0mO$@xQ!0LrO1G0mO!CUQpO1G0^ODWQpO1G0^O$AWQ!0LrO1G0mOOQO1G0^1G0^O$AlQ!0MxO1G0mPOOO-E<[-E<[POOO1G.h1G.hOOOO1G/i1G/iO$AvQ!bO,5<iO$BOQ!fO1G4jOOQO1G4p1G4pO%[QlO,5?OO$BYQ`O1G5zO$BbQ`O1G6YO$BjQ!fO1G6ZO9eQ`O,5?UO$BtQ!0MxO1G6WO%[QlO1G6WO$CUQ!0LrO1G6WO$CgQ`O1G6VO$CgQ`O1G6VO9eQ`O1G6VO$CoQ`O,5?XO9eQ`O,5?XOOQO,5?X,5?XO$DTQ`O,5?XO$+YQ`O,5?XOOQO-E<k-E<kOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(e7+(eO!&zQMhO7+(eO%[QlO7+(eO$DcQ`O7+(eO$DnQMhO7+(eO$D|Q!0MzO,5=XO$GXQ!0MzO,5=ZO$IdQ!0MzO,5=XO$KuQ!0MzO,5=ZO$NWQ!0MzO,59uO%!]Q!0MzO,5<kO%$hQ!0MzO,5<mO%&sQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%)UQ!0MxO7+&aO%)xQlO'#IfO%*VQ`O,5@cO%*_Q!fO,5@cOOQ!0Lf1G0P1G0PO%*iQ`O7+&jOOQ!0Lf7+&j7+&jO%*nQ?MtO,5:fO%[QlO7+&zO%*xQ?MtO,5:bO%+VQ?MtO,5:jO%+aQ?MtO,5:lO%+kQMhO'#IiO%+uQ`O,5@hOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%+}Q!jO,5<ZO!)[QlO,5<YOOQO-E<l-E<lOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%,YQ`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%,_Q!dO,59oOOOO-E<`-E<`OOQ!0Lh1G/X1G/XO%,fQ!0MxO7+'kOOQ!0Lh,5?^,5?^O%-YQMhO1G2fP%-aQ`O'#IrPOQ!0Lh-E<p-E<pO%-}QMjO,5?aOOQ!0Lh-E<s-E<sO%.pQMjO,5?cOOQ!0Lh-E<u-E<uO%.zQ!dO1G2wO%/RQ!dO'#CrO%/iQMhO'#KSO$$wQlO'#JvOOQ!0Lh1G2_1G2_O%/sQ`O'#IqO%0[Q`O,5@vO%0[Q`O,5@vO%0dQ`O,5@vO%0oQ`O,5@vOOQO1G2a1G2aO%0}QMjO1G2`O$+YQ`O'#K[O!,TQMhO1G2`O%1_Q(CWO'#IsO%1lQ`O,5@wO!&zQMhO,5@wO%1tQ!dO,5@wOOQ!0Lh1G2d1G2dO%4UQ!fO'#CiO%4`Q`O,5=POOQ!0Lb,5<},5<}O%4hQpO,5<}OOQ!0Lb,5=O,5=OOCwQ`O,5<}O%4sQpO,5<}OOQ!0Lb,5=R,5=RO$+YQ`O,5=VOOQO,5?`,5?`OOQO-E<r-E<rOOQ!0Lp1G2h1G2hO#$`QpO,5<}O$$wQlO,5=PO%5RQ`O,5=OO%5^QpO,5=OO!,TQMhO'#IuO%6WQMjO1G2sO!,TQMhO'#IwO%6yQMjO1G2uO%7TQMjO1G5qO%7_QMjO1G5qOOQO,5?e,5?eOOQO-E<w-E<wOOQO1G.{1G.{O!,TQMhO1G5qO!,TQMhO1G5qO!:]QpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%7lQ`O1G2ZO!,TQMhO1G2bO%7qQ!0MxO7+'mOOQ!0Lf7+'m7+'mO!$wQlO7+'mO%8eQ`O,5;`OOQ!0Lb,5?g,5?gOOQ!0Lb-E<y-E<yO%8jQ!dO'#K^O#(ZQ`O7+(eO4UQ!fO7+(eO$DfQ`O7+(eO%8tQ!0MvO'#CiO%9XQ!0MvO,5=SO%9lQ`O,5=SO%9tQ`O,5=SOOQ!0Lb1G5o1G5oOOQ[7+$a7+$aO!ByQ!0LrO7+$aO!CUQpO7+$aO!$wQlO7+&aO%9yQ`O'#JQO%:bQ`O,5APOOQO1G3h1G3hO9kQ`O,5APO%:bQ`O,5APO%:jQ`O,5APOOQO,5?m,5?mOOQO-E=P-E=POOQ!0Lf7+'T7+'TO%:oQ`O7+)QO9uQ!0LrO7+)QO9kQ`O7+)QO@zQ`O7+)QO%:tQ`O7+)QOOQ[7+)Q7+)QOOQ[7+(p7+(pO%:yQ!0MvO7+(mO!&zQMhO7+(mO!E^Q`O7+(nOOQ[7+(n7+(nO!&zQMhO7+(nO%;TQ`O'#KbO%;`Q`O,5=lOOQO,5?i,5?iOOQO-E<{-E<{OOQ[7+(s7+(sO%<rQpO'#HZOOQ[1G3`1G3`O!&zQMhO1G3`O%[QlO1G3`O%<yQ`O1G3`O%=UQMhO1G3`O9uQ!0LrO1G3bO$%dQ`O1G3bO9`Q`O1G3bO!CUQpO1G3bO!C^QMhO1G3bO%=dQ`O'#JPO%=xQ`O,5@}O%>QQpO,5@}OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>]Q`O7+$VO%[QlO1G6lO%[QlO1G6mO%>bQ!0LrO1G6lO%>lQlO1G3kO%>sQ`O1G3kO%>xQlO1G3kOOQ[7+)T7+)TO9uQ!0LrO7+)_O`QlO7+)aOOQ['#Kh'#KhOOQ['#JS'#JSO%?PQlO,5>`OOQ[,5>`,5>`O%[QlO'#HuO%?^Q`O'#HwOOQ[,5>f,5>fO9eQ`O,5>fOOQ[,5>h,5>hOOQ[7+)j7+)jOOQ[7+)p7+)pOOQ[7+)t7+)tOOQ[7+)v7+)vO%?cQpO1G5|O%?}Q?MtO1G0zO%@XQ`O1G0zOOQO1G/s1G/sO%@dQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?V,5?VOOQO-E<i-E<iO!CUQpO1G/sOOQO-E<e-E<eOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CUQpO7+&`OOQO7+%x7+%xO$AlQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@nQ!0LrO7+&XO!ByQ!0LrO7+%xO!CUQpO7+%xO%@yQ!0LrO7+&XO%AXQ!0MxO7++rO%[QlO7++rO%AiQ`O7++qO%AiQ`O7++qOOQO1G4s1G4sO9eQ`O1G4sO%AqQ`O1G4sOOQS7+%}7+%}O#(ZQ`O<<LPO4UQ!fO<<LPO%BPQ`O<<LPOOQ[<<LP<<LPO!&zQMhO<<LPO%[QlO<<LPO%BXQ`O<<LPO%BdQ!0MzO,5?aO%DoQ!0MzO,5?cO%FzQ!0MzO1G2`O%I]Q!0MzO1G2sO%KhQ!0MzO1G2uO%MsQ!fO,5?QO%[QlO,5?QOOQO-E<d-E<dO%M}Q`O1G5}OOQ!0Lf<<JU<<JUO%NVQ?MtO1G0uO&!^Q?MtO1G1PO&!eQ?MtO1G1PO&$fQ?MtO1G1PO&$mQ?MtO1G1PO&&nQ?MtO1G1PO&(oQ?MtO1G1PO&(vQ?MtO1G1PO&(}Q?MtO1G1PO&+OQ?MtO1G1PO&+VQ?MtO1G1PO&+^Q!0MxO<<JfO&-UQ?MtO1G1PO&.RQ?MvO1G1PO&/UQ?MvO'#JlO&1[Q?MtO1G1cO&1iQ?MtO1G0UO&1sQMjO,5?TOOQO-E<g-E<gO!)[QlO'#FqOOQO'#KZ'#KZOOQO1G1u1G1uO&1}Q`O1G1tO&2SQ?MtO,5?[OOOW7+'h7+'hOOOO1G/Z1G/ZO&2^Q!dO1G4xOOQ!0Lh7+(Q7+(QP!&zQMhO,5?^O!,TQMhO7+(cO&2eQ`O,5?]O9eQ`O,5?]O$+YQ`O,5?]OOQO-E<o-E<oO&2sQ`O1G6bO&2sQ`O1G6bO&2{Q`O1G6bO&3WQMjO7+'zO&3hQ!dO,5?_O&3rQ`O,5?_O!&zQMhO,5?_OOQO-E<q-E<qO&3wQ!dO1G6cO&4RQ`O1G6cO&4ZQ`O1G2kO!&zQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%4hQpO1G2iO!CUQpO1G2iOCwQ`O1G2iOOQ!0Lb1G2q1G2qO&4`QpO1G2iO&4nQ`O1G2kO$+YQ`O1G2jOCwQ`O1G2jO$$wQlO1G2kO&4vQ`O1G2jO&5jQMjO,5?aOOQ!0Lh-E<t-E<tO&6]QMjO,5?cOOQ!0Lh-E<v-E<vO!,TQMhO7++]O&6gQMjO7++]O&6qQMjO7++]OOQ!0Lh1G/c1G/cO&7OQ`O1G/cOOQ!0Lh7+'u7+'uO&7TQMjO7+'|O&7eQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&8XQ`O1G0zO!&zQMhO'#IzO&8^Q`O,5@xO&:`Q!fO<<LPO!&zQMhO1G2nO&:gQ!0LrO1G2nOOQ[<<G{<<G{O!ByQ!0LrO<<G{O&:xQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?l,5?lO&;lQ`O,5?lO&;qQ`O,5?lOOQO-E=O-E=OO&<PQ`O1G6kO&<PQ`O1G6kO9kQ`O1G6kO@zQ`O<<LlOOQ[<<Ll<<LlO&<XQ`O<<LlO9uQ!0LrO<<LlO9kQ`O<<LlOOQ[<<LX<<LXO%:yQ!0MvO<<LXOOQ[<<LY<<LYO!E^Q`O<<LYO&<^QpO'#I|O&<iQ`O,5@|O!)[QlO,5@|OOQ[1G3W1G3WOOQO'#JO'#JOO9uQ!0LrO'#JOO&<qQpO,5=uOOQ[,5=u,5=uO&<xQpO'#EgO&=PQpO'#GeO&=UQ`O7+(zO&=ZQ`O7+(zOOQ[7+(z7+(zO!&zQMhO7+(zO%[QlO7+(zO&=cQ`O7+(zOOQ[7+(|7+(|O9uQ!0LrO7+(|O$%dQ`O7+(|O9`Q`O7+(|O!CUQpO7+(|O&=nQ`O,5?kOOQO-E<}-E<}OOQO'#H^'#H^O&=yQ`O1G6iO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>RQ`O7+,WO&>WQ`O7+,XO%[QlO7+,WO%[QlO7+,XOOQ[7+)V7+)VO&>]Q`O7+)VO&>bQlO7+)VO&>iQ`O7+)VOOQ[<<Ly<<LyOOQ[<<L{<<L{OOQ[-E=Q-E=QOOQ[1G3z1G3zO&>nQ`O,5>aOOQ[,5>c,5>cO&>sQ`O1G4QO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&>xQ?MtO1G6ZO?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AlQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!ByQ!0LrO<<IdO&?SQ!0LrO<<IsO&?_Q!0MxO<= ^O&?oQ`O<= ]OOQO7+*_7+*_O9eQ`O7+*_OOQ[ANAkANAkO&?wQ!fOANAkO!&zQMhOANAkO#(ZQ`OANAkO4UQ!fOANAkO&@OQ`OANAkO%[QlOANAkO&@WQ!0MzO7+'zO&BiQ!0MzO,5?aO&DtQ!0MzO,5?cO&GPQ!0MzO7+'|O&IbQ!fO1G4lO&IlQ?MtO7+&aO&KpQ?MvO,5=XO&MwQ?MvO,5=ZO&NXQ?MvO,5=XO&NiQ?MvO,5=ZO&NyQ?MvO,59uO'#PQ?MvO,5<kO'%SQ?MvO,5<mO''hQ?MvO,5<{O')^Q?MtO7+'kO')kQ?MtO7+'mO')xQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*d7+*dO')}QMjO<<K}OOQO1G4w1G4wO'*UQ`O1G4wO'*aQ`O1G4wO'*oQ`O7++|O'*oQ`O7++|O!&zQMhO1G4yO'*wQ!dO1G4yO'+RQ`O7++}O'+ZQ`O7+(VO'+fQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!CUQpO7+(TOCwQ`O7+(TO'+pQ`O7+(VO!&zQMhO7+(VO$+YQ`O7+(UO'+uQ`O7+(VOCwQ`O7+(UO'+}QMjO<<NwO!,TQMhO<<NwOOQ!0Lh7+$}7+$}O',XQ!dO,5?fOOQO-E<x-E<xO',cQ!0MvO7+(YO!&zQMhO7+(YOOQ[AN=gAN=gO9kQ`O1G5WOOQO1G5W1G5WO',sQ`O1G5WO',xQ`O7+,VO',xQ`O7+,VO9uQ!0LrOANBWO@zQ`OANBWOOQ[ANBWANBWO'-QQ`OANBWOOQ[ANAsANAsOOQ[ANAtANAtO'-VQ`O,5?hOOQO-E<z-E<zO'-bQ?MtO1G6hOOQO,5?j,5?jOOQO-E<|-E<|OOQ[1G3a1G3aO'-lQ`O,5=POOQ[<<Lf<<LfO!&zQMhO<<LfO&=UQ`O<<LfO'-qQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9uQ!0LrO<<LhO$%dQ`O<<LhO9`Q`O<<LhO'-yQpO1G5VO'.UQ`O7+,TOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= r<= rOOQ[<= s<= sO'.^Q`O<= rO'.cQ`O<= sOOQ[<<Lq<<LqO'.hQ`O<<LqO'.mQlO<<LqOOQ[1G3{1G3{O?YQ`O7+)lO'.tQ`O<<JQO'/PQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AlQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<My<<MyOOQ[G27VG27VO!&zQMhOG27VO#(ZQ`OG27VO'/ZQ!fOG27VO4UQ!fOG27VO'/bQ`OG27VO'/jQ?MtO<<JfO'/wQ?MvO1G2`O'1mQ?MvO,5?aO'3pQ?MvO,5?cO'5sQ?MvO1G2sO'7vQ?MvO1G2uO'9yQ?MtO<<KXO':WQ?MtO<<I{OOQO1G1w1G1wO!,TQMhOANAiOOQO7+*c7+*cO':eQ`O7+*cO':pQ`O<= hO':xQ!dO7+*eOOQ!0Lb<<Kq<<KqO$+YQ`O<<KqOCwQ`O<<KqO';SQ`O<<KqO!&zQMhO<<KqOOQ!0Lb<<Ko<<KoO!CUQpO<<KoO';_Q!dO<<KqOOQ!0Lb<<Kp<<KpO';iQ`O<<KqO!&zQMhO<<KqO$+YQ`O<<KpO';nQMjOANDcO';xQ!0MvO<<KtOOQO7+*r7+*rO9kQ`O7+*rO'<YQ`O<= qOOQ[G27rG27rO9uQ!0LrOG27rO@zQ`OG27rO!)[QlO1G5SO'<bQ`O7+,SO'<jQ`O1G2kO&=UQ`OANBQOOQ[ANBQANBQO!&zQMhOANBQO'<oQ`OANBQOOQ[ANBSANBSO9uQ!0LrOANBSO$%dQ`OANBSOOQO'#H_'#H_OOQO7+*q7+*qOOQ[G22wG22wOOQ[ANE^ANE^OOQ[ANE_ANE_OOQ[ANB]ANB]O'<wQ`OANB]OOQ[<<MW<<MWO!)[QlOAN?lOOQOG24yG24yO$AlQ!0MxOG24yO#(ZQ`OLD,qOOQ[LD,qLD,qO!&zQMhOLD,qO'<|Q!fOLD,qO'=TQ?MvO7+'zO'>yQ?MvO,5?aO'@|Q?MvO,5?cO'CPQ?MvO7+'|O'DuQMjOG27TOOQO<<M}<<M}OOQ!0LbANA]ANA]O$+YQ`OANA]OCwQ`OANA]O'EVQ!dOANA]OOQ!0LbANAZANAZO'E^Q`OANA]O!&zQMhOANA]O'EiQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N^<<N^OOQ[LD-^LD-^O9uQ!0LrOLD-^O'EsQ?MtO7+*nOOQO'#Gf'#GfOOQ[G27lG27lO&=UQ`OG27lO!&zQMhOG27lOOQ[G27nG27nO9uQ!0LrOG27nOOQ[G27wG27wO'E}Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#(ZQ`O!$(!]O!&zQMhO!$(!]O'FXQ!0MzOG27TOOQ!0LbG26wG26wO$+YQ`OG26wO'HjQ`OG26wOCwQ`OG26wO'HuQ!dOG26wO!&zQMhOG26wOOQ[!$(!x!$(!xOOQ[LD-WLD-WO&=UQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#(ZQ`O!)9EwOOQ!0LbLD,cLD,cO$+YQ`OLD,cOCwQ`OLD,cO'H|Q`OLD,cO'IXQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'I`Q?MvOG27TOOQ!0Lb!$( }!$( }O$+YQ`O!$( }OCwQ`O!$( }O'KUQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$+YQ`O!)9EiOCwQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$+YQ`O!.K;TOOQ!0Lb!4/0o!4/0oO!)[QlO'#DzO1PQ`O'#EXO'KaQ!fO'#JrO'KhQ!L^O'#DvO'KoQlO'#EOO'KvQ!fO'#CiO'N^Q!fO'#CiO!)[QlO'#EQO'NnQlO,5;ZO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO'#IpO(!qQ`O,5<iO!)[QlO,5;eO(!yQMhO,5;eO($dQMhO,5;eO!)[QlO,5;wO!&zQMhO'#GmO(!yQMhO'#GmO!&zQMhO'#GoO(!yQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GPO(!yQMhO'#GPO!&zQMhO'#GRO(!yQMhO'#GRO!&zQMhO'#GaO(!yQMhO'#GaO!)[QlO,5:jO($kQpO'#D_O($uQpO'#JvO!)[QlO,5@oO'NnQlO1G0uO(%PQ?MtO'#CiO!)[QlO1G2PO!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO(%ZQ!dO'#CrO!&zQMhO,5<tO(!yQMhO,5<tO'NnQlO1G2RO!)[QlO7+&zO!&zQMhO1G2`O(!yQMhO1G2`O!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO!&zQMhO1G2bO(!yQMhO1G2bO'NnQlO7+'mO'NnQlO7+&aO!&zQMhOANAiO(!yQMhOANAiO(%nQ`O'#EoO(%sQ`O'#EoO(%{Q`O'#F]O(&QQ`O'#EyO(&VQ`O'#KTO(&bQ`O'#KRO(&mQ`O,5;ZO(&rQMjO,5<eO(&yQ`O'#GYO('OQ`O'#GYO('TQ`O,5<eO(']Q`O,5<gO('eQ`O,5;ZO('mQ?MtO1G1`O('tQ`O,5<tO('yQ`O,5<tO((OQ`O,5<vO((TQ`O,5<vO((YQ`O1G2RO((_Q`O1G0uO((dQMjO<<K}O((kQMjO<<K}O((rQMhO'#F|O9`Q`O'#F{OAuQ`O'#EnO!)[QlO,5;tO!3oQ`O'#GYO!3oQ`O'#GYO!3oQ`O'#G[O!3oQ`O'#G[O!,TQMhO7+(cO!,TQMhO7+(cO%.zQ!dO1G2wO%.zQ!dO1G2wO!&zQMhO,5=]O!&zQMhO,5=]",
        stateData: "()x~O'|OS'}OSTOS(ORQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&W!WO&^!XO&`!YO&b!ZO&d![O&g!]O&m!^O&s!_O&u!`O&w!aO&y!bO&{!cO(TSO(VTO(YUO(aVO(o[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O(O!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'z]X(a]X(r]X(y]X(z]X~O!g%RX~P(qO_!}O(V#PO(W!}O(X#PO~O_#QO(X#PO(Y#PO(Z#QO~Ox#SO!U#TO(b#TO(c#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T<ZO(VTO(YUO(aVO(o[O~O![#ZO!]#WO!Y(hP!Y(vP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(VTO(YUO(aVO(o[O~Op#mO![#iO!|]O#i#lO#j#iO(T<[O!k(sP~P.iO!l#oO(T#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa(fX'z(fX'w(fX!k(fX!Y(fX!_(fX%i(fX!g(fX~P1qO#S$dO#`$eO$Q$eOP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX!_(gX%i(gX~Oa(gX'z(gX'w(gX!Y(gX!k(gXv(gX!g(gX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T$sO(VTO(YUO(a$uO(y$}O(z%POg(^P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(T%gO~O!g%mO~Oa%nO'z%nO~O!Q%rO~P%[O(U!lO~P%[O%n%vO~P%[Oh%VO!l%eO(T%gO(U!lO~Oe%}O!l%eO(T%gO~Oj$RO~O!_&PO(T%gO(U!lO(VTO(YUO`)WP~O!Q&SO!l&RO%j&VO&T&WO~P;SO!x#sO~O%s&YO!S)SX!_)SX(T)SX~O(T&ZO~Ol!PO!u&`O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&eOe&dO!x&bO%h&cO%{&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&kO#`&nO%j&iO(U!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'x&{O'z%nO~Oa%nO'x'OO'z%nO~Oa%nO'x'QO'z%nO~O'w]X!Y]Xv]X!k]X&[]X!_]X%i]X!g]X~P(qO!b'_O!c'WO!d'WO(U!lO(VTO(YUO~Os'UO!S'TO!['XO(e'SO!^(iP!^(xP~P@nOn'bO!_'`O(T%gO~Oe'gO!l%eO(T%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<VO#T!pO#U!pO#W!pO#X!pO(U!lO(VTO(YUO(e!mO(o!sO~O!b'mO!c'lO!d'lO#V!pO#['nO#]'nO~PBYOa%nOh%VO!g#vO!l%eO'z%nO(r'pO~O!p'tO#`'rO~PChOs!nO!S!oO(VTO(YUO(e!mO(o!sO~O!_XOs(mX!S(mX!b(mX!c(mX!d(mX!|(mX#T(mX#U(mX#V(mX#W(mX#X(mX#[(mX#](mX(U(mX(V(mX(Y(mX(e(mX(o(mX~O!c'lO!d'lO(U!lO~PDWO(P'xO(Q'xO(R'zO~O_!}O(V'|O(W!}O(X'|O~O_#QO(X'|O(Y'|O(Z#QO~Ov(OO~P%[Ox#SO!U#TO(b#TO(c(RO~O![(TO!Y'WX!Y'^X!]'WX!]'^X~P+}O!](VO!Y(hX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](VO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~O!Y(hX~PHRO!Y([O~O!Y(uX!](uX!g(uX!k(uX(r(uX~O#`(uX#k#dX!^(uX~PJUO#`(]O!Y(wX!](wX~O!](^O!Y(vX~O!Y(aO~O#`$eO~PJUO!^(bO~P`OR#zO!Q#yO!S#{O!l#xO(aVOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(r!na(y!na(z!na~Oa!na'z!na'w!na!Y!na!k!nav!na!_!na%i!na!g!na~PKlO!k(cO~O!g#vO#`(dO(r'pO!](tXa(tX'z(tX~O!k(tX~PNXO!S%hO!_%iO!|]O#i(iO#j(hO(T%gO~O!](jO!k(sX~O!k(lO~O!S%hO!_%iO#j(hO(T%gO~OP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~O!g#vO!k(gX~P! uOR(nO!Q(mO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(T!{a~P!#vO!x(rO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~O#k(xO~O![(zO!k(kP~P%[O(e(|O(o[O~O!S)OO!l#xO(e(|O(o[O~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]$_Oa$qa'z$qa'w$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)dO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Og(pP~P!,TO!Q)iO!g)hO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)hO!_({X$Z({X$]({X$_({X$f({X~O!Q)iO~P!.^O!Q)iO!_({X$Z({X$]({X$_({X$f({X~O!_)kO$Z)oO$])jO$_)jO$f)pO~O![)sO~P!)[O$]$hO$_$gO$f)wO~On$zX!Q$zX#S$zX'y$zX(y$zX(z$zX~OgmXg$zXnmX!]mX#`mX~P!0SOx)yO(b)zO(c)|O~On*VO!Q*OO'y*PO(y$}O(z%PO~Og)}O~P!1WOg*WO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S*YO!_*ZO!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op*`O![*^O(T*XO!k)OP~P!1uO#k*aO~O!l*bO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T*dO(VTO(YUO(a$uO(y$}O(z%PO~O![*gO!Y)PP~P!3tOr*sOs!nO!S*iO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO(e!mO~O!^*pO~P!5iO#S$dOn(`X!Q(`X'y(`X(y(`X(z(`X!](`X#`(`X~Og(`X$O(`X~P!6kOn*xO#`*wOg(_X!](_X~O!]*yOg(^X~Oj%dOk%dOl%dO(T&ZOg(^P~Os*|O~Og)}O(T&ZO~O!l+SO~O(T(vO~Op+WO!S%hO![#iO!_%iO!|]O#i#lO#j#iO(T%gO!k(sP~O!g#vO#k+XO~O!S%hO![+ZO!](^O!_%iO(T%gO!Y(vP~Os'[O!S+]O![+[O(VTO(YUO(e(|O~O!^(xP~P!9|O!]+^Oa)TX'z)TX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa!ja!]!ja'z!ja'w!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:tOR#zO!Q#yO!S#{O!l#xO(aVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(r!ra(y!ra(z!ra~Oa!ra'z!ra'w!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!=[OR#zO!Q#yO!S#{O!l#xO(aVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(r!ta(y!ta(z!ta~Oa!ta'z!ta'w!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?rOh%VOn+gO!_'`O%i+fO~O!g+iOa(]X!_(]X'z(]X!](]X~Oa%nO!_XO'z%nO~Oh%VO!l%eO~Oh%VO!l%eO(T%gO~O!g#vO#k(xO~Ob+tO%j+uO(T+qO(VTO(YUO!^)XP~O!]+vO`)WX~O[+zO~O`+{O~O!_&PO(T%gO(U!lO`)WP~O%j,OO~P;SOh%VO#`,SO~Oh%VOn,VO!_$|O~O!_,XO~O!Q,ZO!_XO~O%n%vO~O!x,`O~Oe,eO~Ob,fO(T#nO(VTO(YUO!^)VP~Oe%}O~O%j!QO(T&ZO~P=gO[,kO`,jO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(VTO(YUO(aVO(o[O~O!_!eO!u!gO$W!kO(T!dO~P!FyO`,jOa%nO'z%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa,pOl!OO!uwO%l!OO%m!OO%n!OO~P!IcO!l&oO~O&^,vO~O!_,xO~O&o,zO&q,{OP&laQ&laS&laY&laa&lad&lae&lal&lap&lar&las&lat&laz&la|&la!O&la!S&la!W&la!X&la!_&la!i&la!l&la!o&la!p&la!q&la!s&la!u&la!x&la!|&la$W&la$n&la%h&la%j&la%l&la%m&la%n&la%q&la%s&la%v&la%w&la%y&la&W&la&^&la&`&la&b&la&d&la&g&la&m&la&s&la&u&la&w&la&y&la&{&la'w&la(T&la(V&la(Y&la(a&la(o&la!^&la&e&lab&la&j&la~O(T-QO~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P#!iO!g-VO#`-UOh(jX!]#hX!^#hX!g(jX!l(jX~O!](jX!^(jX~P##[Oh%VO!g-XO!l%eO!]!aX!^!aX~Os!nO!S!oO(VTO(YUO(e!mO~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(VTO(YUO(aVO(o[O~O(T=QO~P#$qO!]-]O!^(iX~O!^-_O~O!g-VO#`-UO!]#hX!^#hX~O!]-`O!^(xX~O!^-bO~O!c-cO!d-cO(U!lO~P#$`O!^-fO~P'_On-iO!_'`O~O!Y-nO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(U!{a(V!{a(Y!{a(e!{a(o!{a~P!#vO!p-sO#`-qO~PChO!c-uO!d-uO(U!lO~PDWOa%nO#`-qO'z%nO~Oa%nO!g#vO#`-qO'z%nO~Oa%nO!g#vO!p-sO#`-qO'z%nO(r'pO~O(P'xO(Q'xO(R-zO~Ov-{O~O!Y'Wa!]'Wa~P!:tO![.PO!Y'WX!]'WX~P%[O!](VO!Y(ha~O!Y(ha~PHRO!](^O!Y(va~O!S%hO![.TO!_%iO(T%gO!Y'^X!]'^X~O#`.VO!](ta!k(taa(ta'z(ta~O!g#vO~P#,wO!](jO!k(sa~O!S%hO!_%iO#j.ZO(T%gO~Op.`O!S%hO![.]O!_%iO!|]O#i._O#j.]O(T%gO!]'aX!k'aX~OR.dO!l#xO~Oh%VOn.gO!_'`O%i.fO~Oa#ci!]#ci'z#ci'w#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:tOn>]O!Q*OO'y*PO(y$}O(z%PO~O#k#_aa#_a#`#_a'z#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#k(`XP(`XR(`X[(`Xa(`Xj(`Xr(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X'z(`X(a(`X(r(`X!k(`X!Y(`X'w(`Xv(`X!_(`X%i(`X!g(`X~P!6kO!].tO!k(kX~P!:tO!k.wO~O!Y.yO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#3cO#n$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#6QO#r$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(aVOa#mi!]#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(aVO(z#}Oa#mi!]#mi#z#mi#{#mi'z#mi(r#mi(y#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#;VO#x#mi~P#;VO#v$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(aVO(y#|O(z#}Oa#mi!]#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#={O#z$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X!]]X!^]X~O$O]X~P#@jOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO#z<gO#{<hO(aVO(r$YO(y#|O(z#}O~O$O.{O~P#BwO#S$dO#`<nO$Q<nO$O(gX!^(gX~P! uOa'da!]'da'z'da'w'da!k'da!Y'dav'da!_'da%i'da!g'da~P!:tO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO(y#mi(z#mi~P#EyOn>]O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P#EyO!]/POg(pX~P!1WOg/RO~Oa$Pi!]$Pi'z$Pi'w$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:tO$]/SO$_/SO~O$]/TO$_/TO~O!g)hO#`/UO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/VO~O!_)kO$Z/XO$])jO$_)jO$f/YO~O!]<iO!^(fX~P#BwO!^/ZO~O!g)hO$f({X~O$f/]O~Ov/^O~P!&zOx)yO(b)zO(c/aO~O!S/dO~O(y$}On%aa!Q%aa'y%aa(z%aa!]%aa#`%aa~Og%aa$O%aa~P#L{O(z%POn%ca!Q%ca'y%ca(y%ca!]%ca#`%ca~Og%ca$O%ca~P#MnO!]fX!gfX!kfX!k$zX(rfX~P!0SOp%WO![/mO!](^O(T/lO!Y(vP!Y)PP~P!1uOr*sO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO~Os<}O!S/nO![+[O!^*pO(e<|O!^(xP~P$ [O!k/oO~P#/sO!]/pO!g#vO(r'pO!k)OX~O!k/uO~OnoX!QoX'yoX(yoX(zoX~O!g#vO!koX~P$#OOp/wO!S%hO![*^O!_%iO(T%gO!k)OP~O#k/xO~O!Y$zX!]$zX!g%RX~P!0SO!]/yO!Y)PX~P#/sO!g/{O~O!Y/}O~OpkO(T0OO~P.iOh%VOr0TO!g#vO!l%eO(r'pO~O!g+iO~Oa%nO!]0XO'z%nO~O!^0ZO~P!5iO!c0[O!d0[O(U!lO~P#$`Os!nO!S0]O(VTO(YUO(e!mO~O#[0_O~Og%aa!]%aa#`%aa$O%aa~P!1WOg%ca!]%ca#`%ca$O%ca~P!1WOj%dOk%dOl%dO(T&ZOg'mX!]'mX~O!]*yOg(^a~Og0hO~On0jO#`0iOg(_a!](_a~OR0kO!Q0kO!S0lO#S$dOn}a'y}a(y}a(z}a!]}a#`}a~Og}a$O}a~P$(cO!Q*OO'y*POn$sa(y$sa(z$sa!]$sa#`$sa~Og$sa$O$sa~P$)_O!Q*OO'y*POn$ua(y$ua(z$ua!]$ua#`$ua~Og$ua$O$ua~P$*QO#k0oO~Og%Ta!]%Ta#`%Ta$O%Ta~P!1WO!g#vO~O#k0rO~O!]+^Oa)Ta'z)Ta~OR#zO!Q#yO!S#{O!l#xO(aVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(r!ri(y!ri(z!ri~Oa!ri'z!ri'w!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$+oOh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op0{O%]0|O(T0zO~P$.VO!g+iOa(]a!_(]a'z(]a!](]a~O#k1SO~O[]X!]fX!^fX~O!]1TO!^)XX~O!^1VO~O[1WO~Ob1YO(T+qO(VTO(YUO~O!_&PO(T%gO`'uX!]'uX~O!]+vO`)Wa~O!k1]O~P!:tO[1`O~O`1aO~O#`1fO~On1iO!_$|O~O(e(|O!^)UP~Oh%VOn1rO!_1oO%i1qO~O[1|O!]1zO!^)VX~O!^1}O~O`2POa%nO'z%nO~O(T#nO(VTO(YUO~O#S$dO#`$eO$Q$eOP(gXR(gX[(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~Oj2SO&[2TOa(gX~P$3pOj2SO#`$eO&[2TO~Oa2VO~P%[Oa2XO~O&e2[OP&ciQ&ciS&ciY&cia&cid&cie&cil&cip&cir&cis&cit&ciz&ci|&ci!O&ci!S&ci!W&ci!X&ci!_&ci!i&ci!l&ci!o&ci!p&ci!q&ci!s&ci!u&ci!x&ci!|&ci$W&ci$n&ci%h&ci%j&ci%l&ci%m&ci%n&ci%q&ci%s&ci%v&ci%w&ci%y&ci&W&ci&^&ci&`&ci&b&ci&d&ci&g&ci&m&ci&s&ci&u&ci&w&ci&y&ci&{&ci'w&ci(T&ci(V&ci(Y&ci(a&ci(o&ci!^&cib&ci&j&ci~Ob2bO!^2`O&j2aO~P`O!_XO!l2dO~O&q,{OP&liQ&liS&liY&lia&lid&lie&lil&lip&lir&lis&lit&liz&li|&li!O&li!S&li!W&li!X&li!_&li!i&li!l&li!o&li!p&li!q&li!s&li!u&li!x&li!|&li$W&li$n&li%h&li%j&li%l&li%m&li%n&li%q&li%s&li%v&li%w&li%y&li&W&li&^&li&`&li&b&li&d&li&g&li&m&li&s&li&u&li&w&li&y&li&{&li'w&li(T&li(V&li(Y&li(a&li(o&li!^&li&e&lib&li&j&li~O!Y2jO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2pO(e!mO!]'XX!^'XX~P@nO!]-]O!^(ia~O!]'_X!^'_X~P!9|O!]-`O!^(xa~O!^2wO~P'_Oa%nO#`3QO'z%nO~Oa%nO!g#vO#`3QO'z%nO~Oa%nO!g#vO!p3UO#`3QO'z%nO(r'pO~Oa%nO'z%nO~P!:tO!]$_Ov$qa~O!Y'Wi!]'Wi~P!:tO!](VO!Y(hi~O!](^O!Y(vi~O!Y(wi!](wi~P!:tO!](ti!k(tia(ti'z(ti~P!:tO#`3WO!](ti!k(tia(ti'z(ti~O!](jO!k(si~O!S%hO!_%iO!|]O#i3]O#j3[O(T%gO~O!S%hO!_%iO#j3[O(T%gO~On3dO!_'`O%i3cO~Oh%VOn3dO!_'`O%i3cO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aav%aa!_%aa%i%aa!g%aa~P#L{O#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%cav%ca!_%ca%i%ca!g%ca~P#MnO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/sO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/sO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'z}a(a}a(r}a!k}a!Y}a'w}av}a!_}a%i}a!g}a~P$(cO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'z$sa(a$sa(r$sa!k$sa!Y$sa'w$sav$sa!_$sa%i$sa!g$sa~P$)_O#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'z$ua(a$ua(r$ua!k$ua!Y$ua'w$uav$ua!_$ua%i$ua!g$ua~P$*QO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'z%Ta(a%Ta(r%Ta!k%Ta!Y%Ta'w%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/sOa#cq!]#cq'z#cq'w#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:tO![3lO!]'YX!k'YX~P%[O!].tO!k(ka~O!].tO!k(ka~P!:tO!Y3oO~O$O!na!^!na~PKlO$O!ja!]!ja!^!ja~P#BwO$O!ra!^!ra~P!=[O$O!ta!^!ta~P!?rOg']X!]']X~P!,TO!]/POg(pa~OSfO!_4TO$d4UO~O!^4YO~Ov4ZO~P#/sOa$mq!]$mq'z$mq'w$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:tO!Y4]O~P!&zO!S4^O~O!Q*OO'y*PO(z%POn'ia(y'ia!]'ia#`'ia~Og'ia$O'ia~P%-fO!Q*OO'y*POn'ka(y'ka(z'ka!]'ka#`'ka~Og'ka$O'ka~P%.XO(r$YO~P#/sO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!0SOp%WO(T=WO~P!1uOp4bO!S%hO![4aO!_%iO(T%gO!]'eX!k'eX~O!]/pO!k)Oa~O!]/pO!g#vO!k)Oa~O!]/pO!g#vO(r'pO!k)Oa~Og$|i!]$|i#`$|i$O$|i~P!1WO![4jO!Y'gX!]'gX~P!3tO!]/yO!Y)Pa~O!]/yO!Y)Pa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~Oj%YX!g%YX~P%2OOj4oO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4tO!l%eO(r'pO~Or4yO!g#vO(r'pO~Os!nO!S4zO(VTO(YUO(e!mO~O(y$}On%ai!Q%ai'y%ai(z%ai!]%ai#`%ai~Og%ai$O%ai~P%5oO(z%POn%ci!Q%ci'y%ci(y%ci!]%ci#`%ci~Og%ci$O%ci~P%6bOg(_i!](_i~P!1WO#`5QOg(_i!](_i~P!1WO!k5VO~Oa$oq!]$oq'z$oq'w$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:tO!Y5ZO~O!]5[O!_)QX~P#/sOa$zX!_$zX%^]X'z$zX!]$zX~P!0SO%^5_OaoX!_oX'zoX!]oX~P$#OOp5`O(T#nO~O%^5_O~Ob5fO%j5gO(T+qO(VTO(YUO!]'tX!^'tX~O!]1TO!^)Xa~O[5kO~O`5lO~O[5pO~Oa%nO'z%nO~P#/sO!]5uO#`5wO!^)UX~O!^5xO~Or6OOs!nO!S*iO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!pO#W!pO#X!pO#[5}O#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O!^5|O~P%;eOn6TO!_1oO%i6SO~Oh%VOn6TO!_1oO%i6SO~Ob6[O(T#nO(VTO(YUO!]'sX!^'sX~O!]1zO!^)Va~O(VTO(YUO(e6^O~O`6bO~Oj6eO&[6fO~PNXO!k6gO~P%[Oa6iO~Oa6iO~P%[Ob2bO!^6nO&j2aO~P`O!g6pO~O!g6rOh(ji!](ji!^(ji!g(ji!l(jir(ji(r(ji~O!]#hi!^#hi~P#BwO#`6sO!]#hi!^#hi~O!]!ai!^!ai~P#BwOa%nO#`6|O'z%nO~Oa%nO!g#vO#`6|O'z%nO~O!](tq!k(tqa(tq'z(tq~P!:tO!](jO!k(sq~O!S%hO!_%iO#j7TO(T%gO~O!_'`O%i7WO~On7[O!_'`O%i7WO~O#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'z'ia(a'ia(r'ia!k'ia!Y'ia'w'iav'ia!_'ia%i'ia!g'ia~P%-fO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'z'ka(a'ka(r'ka!k'ka!Y'ka'w'kav'ka!_'ka%i'ka!g'ka~P%.XO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'z$|i(a$|i(r$|i!k$|i!Y$|i'w$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/sO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'z%ai(a%ai(r%ai!k%ai!Y%ai'w%aiv%ai!_%ai%i%ai!g%ai~P%5oO#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'z%ci(a%ci(r%ci!k%ci!Y%ci'w%civ%ci!_%ci%i%ci!g%ci~P%6bO!]'Ya!k'Ya~P!:tO!].tO!k(ki~O$O#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#n#mi~P%NdO#n<_O~P%NdOP$[OR#zOr<kO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#r#mi~P&!lO#r<aO~P&!lOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO(aVO#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#v#mi~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO(aVO(z#}O#z#mi#{#mi$O#mi(r#mi(y#mi!]#mi!^#mi~O#x<eO~P&&uO#x#mi~P&&uO#v<cO~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO(aVO(y#|O(z#}O#{#mi$O#mi(r#mi!]#mi!^#mi~O#z#mi~P&)UO#z<gO~P&)UOa#|y!]#|y'z#|y'w#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:tO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO(y#mi(z#mi~P&,QOn>^O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P&,QO#S$dOP(`XR(`X[(`Xj(`Xn(`Xr(`X!Q(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X$O(`X'y(`X(a(`X(r(`X(y(`X(z(`X!](`X!^(`X~O$O$Pi!]$Pi!^$Pi~P#BwO$O!ri!^!ri~P$+oOg']a!]']a~P!1WO!^7nO~O!]'da!^'da~P#BwO!Y7oO~P#/sO!g#vO(r'pO!]'ea!k'ea~O!]/pO!k)Oi~O!]/pO!g#vO!k)Oi~Og$|q!]$|q#`$|q$O$|q~P!1WO!Y'ga!]'ga~P#/sO!g7vO~O!]/yO!Y)Pi~P#/sO!]/yO!Y)Pi~O!Y7yO~Oh%VOr8OO!l%eO(r'pO~Oj8QO!g#vO~Or8TO!g#vO(r'pO~O!Q*OO'y*PO(z%POn'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P&5RO!Q*OO'y*POn'la(y'la(z'la!]'la#`'la~Og'la$O'la~P&5tOg(_q!](_q~P!1WO#`8VOg(_q!](_q~P!1WO!Y8WO~Og%Oq!]%Oq#`%Oq$O%Oq~P!1WOa$oy!]$oy'z$oy'w$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:tO!g6rO~O!]5[O!_)Qa~O!_'`OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(a$Ta(r$Ta(y$Ta(z$Ta~O%i7WO~P&8fO%^8[Oa%[i!_%[i'z%[i!]%[i~Oa#cy!]#cy'z#cy'w#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:tO[8^O~Ob8`O(T+qO(VTO(YUO~O!]1TO!^)Xi~O`8dO~O(e(|O!]'pX!^'pX~O!]5uO!^)Ua~O!^8nO~P%;eO(o!sO~P$&YO#[8oO~O!_1oO~O!_1oO%i8qO~On8tO!_1oO%i8qO~O[8yO!]'sa!^'sa~O!]1zO!^)Vi~O!k8}O~O!k9OO~O!k9RO~O!k9RO~P%[Oa9TO~O!g9UO~O!k9VO~O!](wi!^(wi~P#BwOa%nO#`9_O'z%nO~O!](ty!k(tya(ty'z(ty~P!:tO!](jO!k(sy~O%i9bO~P&8fO!_'`O%i9bO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'z$|q(a$|q(r$|q!k$|q!Y$|q'w$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/sO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'z'ja(a'ja(r'ja!k'ja!Y'ja'w'jav'ja!_'ja%i'ja!g'ja~P&5RO#k'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la'z'la(a'la(r'la!k'la!Y'la'w'lav'la!_'la%i'la!g'la~P&5tO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'z%Oq(a%Oq(r%Oq!k%Oq!Y%Oq'w%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/sO!]'Yi!k'Yi~P!:tO$O#cq!]#cq!^#cq~P#BwO(y$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(a%aa(r%aa!]%aa!^%aa~On%aa!Q%aa'y%aa(z%aa~P&IyO(z%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(a%ca(r%ca!]%ca!^%ca~On%ca!Q%ca'y%ca(y%ca~P&LQOn>^O!Q*OO'y*PO(z%PO~P&IyOn>^O!Q*OO'y*PO(y$}O~P&LQOR0kO!Q0kO!S0lO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'y}a(a}a(r}a(y}a(z}a!]}a!^}a~O!Q*OO'y*POP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(a$sa(r$sa(y$sa(z$sa!]$sa!^$sa~O!Q*OO'y*POP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(a$ua(r$ua(y$ua(z$ua!]$ua!^$ua~On>^O!Q*OO'y*PO(y$}O(z%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(a%Ta(r%Ta!]%Ta!^%Ta~P''VO$O$mq!]$mq!^$mq~P#BwO$O$oq!]$oq!^$oq~P#BwO!^9oO~O$O9pO~P!1WO!g#vO!]'ei!k'ei~O!g#vO(r'pO!]'ei!k'ei~O!]/pO!k)Oq~O!Y'gi!]'gi~P#/sO!]/yO!Y)Pq~Or9wO!g#vO(r'pO~O[9yO!Y9xO~P#/sO!Y9xO~Oj:PO!g#vO~Og(_y!](_y~P!1WO!]'na!_'na~P#/sOa%[q!_%[q'z%[q!]%[q~P#/sO[:UO~O!]1TO!^)Xq~O`:YO~O#`:ZO!]'pa!^'pa~O!]5uO!^)Ui~P#BwO!S:]O~O!_1oO%i:`O~O(VTO(YUO(e:eO~O!]1zO!^)Vq~O!k:hO~O!k:iO~O!k:jO~O!k:jO~P%[O#`:mO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%i:rO~P&8fO!_'`O%i:rO~O$O#|y!]#|y!^#|y~P#BwOP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(a$|i(r$|i!]$|i!^$|i~P''VO!Q*OO'y*PO(z%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(a'ia(r'ia(y'ia!]'ia!^'ia~O!Q*OO'y*POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(a'ka(r'ka(y'ka(z'ka!]'ka!^'ka~O(y$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'y%ai(a%ai(r%ai(z%ai!]%ai!^%ai~O(z%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'y%ci(a%ci(r%ci(y%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#BwO$O#cy!]#cy!^#cy~P#BwO!g#vO!]'eq!k'eq~O!]/pO!k)Oy~O!Y'gq!]'gq~P#/sOr:|O!g#vO(r'pO~O[;QO!Y;PO~P#/sO!Y;PO~Og(_!R!](_!R~P!1WOa%[y!_%[y'z%[y!]%[y~P#/sO!]1TO!^)Xy~O!]5uO!^)Uq~O(T;XO~O!_1oO%i;[O~O!k;_O~O%i;dO~P&8fOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(a$|q(r$|q!]$|q!^$|q~P''VO!Q*OO'y*PO(z%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(a'ja(r'ja(y'ja!]'ja!^'ja~O!Q*OO'y*POP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la$O'la(a'la(r'la(y'la(z'la!]'la!^'la~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(a%Oq(r%Oq!]%Oq!^%Oq~P''VOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!1WO!Y;hO~P#/sOr;iO!g#vO(r'pO~O[;kO!Y;hO~P#/sO!]'pq!^'pq~P#BwO!]#h!Z!^#h!Z~P#BwO#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'z%e!Z(a%e!Z(r%e!Z!k%e!Z!Y%e!Z'w%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/sOr;tO!g#vO(r'pO~O!Y;uO~P#/sOr;|O!g#vO(r'pO~O!Y;}O~P#/sOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(a%e!Z(r%e!Z!]%e!Z!^%e!Z~P''VOr<QO!g#vO(r'pO~Ov(fX~P1qO!Q%rO~P!)[O(U!lO~P!)[O!YfX!]fX#`fX~P%2OOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~O!gfX!k]X!kfX(rfX~P'LTOP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_XO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]<iO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<tO!S${O!_$|O!i>WO!l$xO#j<zO$W%`O$t<vO$v<xO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Ol)dO~P(!yOr!eX(r!eX~P#!iOr(jX(r(jX~P##[O!^]X!^fX~P'LTO!YfX!Y$zX!]fX!]$zX#`fX~P!0SO#k<^O~O!g#vO#k<^O~O#`<nO~Oj<bO~O#`=OO!](wX!^(wX~O#`<nO!](uX!^(uX~O#k=PO~Og=RO~P!1WO#k=XO~O#k=YO~Og=RO(T&ZO~O!g#vO#k=ZO~O!g#vO#k=PO~O$O=[O~P#BwO#k=]O~O#k=^O~O#k=cO~O#k=dO~O#k=eO~O#k=fO~O$O=gO~P!1WO$O=hO~P!1WOl=sO~P7eOk#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~(OT#o!X'|(U#ps#n#qr!Q'}$]'}(T$_(e~",
        goto: "$9Y)]PPPPPP)^PP)aP)rP+W/]PPPP6mPP7TPP=QPPP@tPA^PA^PPPA^PCfPA^PA^PA^PCjPCoPD^PIWPPPI[PPPPI[L_PPPLeMVPI[PI[PP! eI[PPPI[PI[P!#lI[P!'S!(X!(bP!)U!)Y!)U!,gPPPPPPP!-W!(XPP!-h!/YP!2iI[I[!2n!5z!:h!:h!>gPPP!>oI[PPPPPPPPP!BOP!C]PPI[!DnPI[PI[I[I[I[I[PI[!FQP!I[P!LbP!Lf!Lp!Lt!LtP!IXP!Lx!LxP#!OP#!SI[PI[#!Y#%_CjA^PA^PA^A^P#&lA^A^#)OA^#+vA^#.SA^A^#.r#1W#1W#1]#1f#1W#1qPP#1WPA^#2ZA^#6YA^A^6mPPP#:_PPP#:x#:xP#:xP#;`#:xPP#;fP#;]P#;]#;y#;]#<e#<k#<n)aP#<q)aP#<z#<z#<zP)aP)aP)aP)aPP)aP#=Q#=TP#=T)aP#=XP#=[P)aP)aP)aP)aP)aP)a)aPP#=b#=h#=s#=y#>P#>V#>]#>k#>q#>{#?R#?]#?c#?s#?y#@k#@}#AT#AZ#Ai#BO#Cs#DR#DY#Et#FS#Gt#HS#HY#H`#Hf#Hp#Hv#H|#IW#Ij#IpPPPPPPPPPPP#IvPPPPPPP#Jk#Mx$ b$ i$ qPPP$']P$'f$*_$0x$0{$1O$1}$2Q$2X$2aP$2g$2jP$3W$3[$4S$5b$5g$5}PP$6S$6Y$6^$6a$6e$6i$7e$7|$8e$8i$8l$8o$8y$8|$9Q$9UR!|RoqOXst!Z#d%m&r&t&u&w,s,x2[2_Y!vQ'`-e1o5{Q%tvQ%|yQ&T|Q&j!VS'W!e-]Q'f!iS'l!r!yU*k$|*Z*oQ+o%}S+|&V&WQ,d&dQ-c'_Q-m'gQ-u'mQ0[*qQ1b,OQ1y,eR<{<Y%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_S#q]<V!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU+P%]<s<tQ+t&PQ,f&gQ,m&oQ0x+gQ0}+iQ1Y+uQ2R,kQ3`.gQ5`0|Q5f1TQ6[1zQ7Y3dQ8`5gR9e7['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S!S!nQ!r!v!y!z$|'W'_'`'l'm'n*k*o*q*r-]-c-e-u0[0_1o5{5}%[$ti#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q&X|Q'U!eS'[%i-`Q+t&PQ,P&WQ,f&gQ0n+SQ1Y+uQ1_+{Q2Q,jQ2R,kQ5f1TQ5o1aQ6[1zQ6_1|Q6`2PQ8`5gQ8c5lQ8|6bQ:X8dQ:f8yQ;V:YR<}*ZrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R,h&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'b'r(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>R>S[#]WZ#W#Z'X(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ%wxQ%{yW&Q|&V&W,OQ&_!TQ'c!hQ'e!iQ(q#sS+n%|%}Q+r&PQ,_&bQ,c&dS-l'f'gQ.i(rQ1R+oQ1X+uQ1Z+vQ1^+zQ1t,`S1x,d,eQ2|-mQ5e1TQ5i1WQ5n1`Q6Z1yQ8_5gQ8b5kQ8f5pQ:T8^R;T:U!U$zi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y!^%yy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{Q+h%wQ,T&[Q,W&]Q,b&dQ.h(qQ1s,_U1w,c,d,eQ3e.iQ6U1tS6Y1x1yQ8x6Z#f>T#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o>U<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hW%Ti%V*y>PS&[!Q&iQ&]!RQ&^!SU*}%[%d=sR,R&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^T)z$u){V+P%]<s<tW'[!e%i*Z-`S(}#y#zQ+c%rQ+y&SS.b(m(nQ1j,XQ5T0kR8i5u'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S$i$^c#Y#e%q%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.|.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ'Y!eR2q-]!W!nQ!e!r!v!y!z$|'W'_'`'l'm'n*Z*k*o*q*r-]-c-e-u0[0_1o5{5}R1l,ZnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&y!^Q'v!xS(s#u<^Q+l%zQ,]&_Q,^&aQ-j'dQ-w'oS.r(x=PS0q+X=ZQ1P+mQ1n,[Q2c,zQ2e,{Q2m-WQ2z-kQ2}-oS5Y0r=eQ5a1QS5d1S=fQ6t2oQ6x2{Q6}3SQ8]5bQ9Y6vQ9Z6yQ9^7OR:l9V$d$]c#Y#e%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vS(o#p'iQ)P#zS+b%q.|S.c(n(pR3^.d'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS#q]<VQ&t!XQ&u!YQ&w![Q&x!]R2Z,vQ'a!hQ+e%wQ-h'cS.e(q+hQ2x-gW3b.h.i0w0yQ6w2yW7U3_3a3e5^U9a7V7X7ZU:q9c9d9fS;b:p:sQ;p;cR;x;qU!wQ'`-eT5y1o5{!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(j,s,x.[2[2_]!pQ!r'`-e1o5{T#q]<V%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S(}#y#zS.b(m(n!s=l$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU$fd)_,mS(p#p'iU*v%R(w4OU0m+O.n7gQ5^0xQ7V3`Q9d7YR:s9em!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}Q't!uS(f#g2US-s'k'wQ/s*]Q0R*jQ3U-vQ4f/tQ4r0TQ4s0UQ4x0^Q7r4`S7}4t4vS8R4y4{Q9r7sQ9v7yQ9{8OQ:Q8TS:{9w9xS;g:|;PS;s;h;iS;{;t;uS<P;|;}R<S<QQ#wbQ's!uS(e#g2US(g#m+WQ+Y%fQ+j%xQ+p&OU-r'k't'wQ.W(fU/r*]*`/wQ0S*jQ0V*lQ1O+kQ1u,aS3R-s-vQ3Z.`S4e/s/tQ4n0PS4q0R0^Q4u0WQ6W1vQ7P3US7q4`4bQ7u4fU7|4r4x4{Q8P4wQ8v6XS9q7r7sQ9u7yQ9}8RQ:O8SQ:c8wQ:y9rS:z9v9xQ;S:QQ;^:dS;f:{;PS;r;g;hS;z;s;uS<O;{;}Q<R<PQ<T<SQ=o=jQ={=tR=|=uV!wQ'`-e%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S#wz!j!r=i$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=o>R%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Q%fj!^%xy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{S&Oz!jQ+k%yQ,a&dW1v,b,c,d,eU6X1w1x1yS8w6Y6ZQ:d8x!r=j$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ=t>QR=u>R%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Y#bWZ#W#Z(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ,n&o!p=k$Z$n)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=n'XU']!e%i*ZR2s-`%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ,m&oQ0x+gQ3`.gQ7Y3dR9e7[!b$Tc#Y%q(S(Y(t(y)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!P<d)^)q-Z.|2k2n3p3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!f$Vc#Y%q(S(Y(t(y)W)X)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!T<f)^)q-Z.|2k2n3p3v3w3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!^$Zc#Y%q(S(Y(t(y)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<WQ4_/kz>S)^)q-Z.|2k2n3p4P4X6u7b7k7l8k9X9g9m9n;W;`=vQ>X>ZR>Y>['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS$oh$pR4U/U'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$kf$qQ$ifS)j$l)nR)v$qT$jf$qT)l$l)n'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$oh$pQ$rhR)u$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_!s>Q$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'b)O)s*i+]+g,p,s,x-i.g/V/n0]0l1r2S2T2V2X2[2_2a3d4T4z6T6e6f6i7[8t9T!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^Q+T%aQ/c*Oo4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!U$yi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>YQ*c$zU*l$|*Z*oQ+U%bQ0W*m#f=q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n=r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hQ=w>TQ=x>UQ=y>VR=z>W!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hnoOXst!Z#d%m&r&t&u&w,s,x2[2_S*f${*YQ-R'OQ-S'QR4i/y%[%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q,U&]Q1h,WQ5s1gR8h5tV*n$|*Z*oU*n$|*Z*oT5z1o5{S0P*i/nQ4w0]T8S4z:]Q+j%xQ0V*lQ1O+kQ1u,aQ6W1vQ8v6XQ:c8wR;^:d!U%Oi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Yx*R$v)e*S*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>OS0`*t0a#f<o#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<p<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!d=S(u)c*[*e.j.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[`=T3}7c7f7j9h:t:w;yS=_.l3iT=`7e9k!U%Qi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y|*T$v)e*U*t+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>OS0b*u0c#f<q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!h=U(u)c*[*e.k.l.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[d=V3}7d7e7j9h9i:t:u:w;yS=a.m3jT=b7f9lrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q&f!UR,p&ornOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R&f!UQ,Y&^R1d,RsnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q1p,_S6R1s1tU8p6P6Q6US:_8r8sS;Y:^:aQ;m;ZR;w;nQ&m!VR,i&iR6_1|R:f8yW&Q|&V&W,OR1Z+vQ&r!WR,s&sR,y&xT2],x2_R,}&yQ,|&yR2f,}Q'y!{R-y'ySsOtQ#dXT%ps#dQ#OTR'{#OQ#RUR'}#RQ){$uR/`){Q#UVR(Q#UQ#XWU(W#X(X.QQ(X#YR.Q(YQ-^'YR2r-^Q.u(yS3m.u3nR3n.vQ-e'`R2v-eY!rQ'`-e1o5{R'j!rQ/Q)eR4S/QU#_W%h*YU(_#_(`.RQ(`#`R.R(ZQ-a']R2t-at`OXst!V!Z#d%m&i&k&r&t&u&w,s,x2[2_S#hZ%eU#r`#h.[R.[(jQ(k#jQ.X(gW.a(k.X3X7RQ3X.YR7R3YQ)n$lR/W)nQ$phR)t$pQ$`cU)a$`-|<jQ-|<WR<j)qQ/q*]W4c/q4d7t9sU4d/r/s/tS7t4e4fR9s7u$e*Q$v(u)c)e*[*e*t*u+Q+R+V.l.m.o.p.q/_/g/i/k/v/|0d0e0v1e3f3g3h3}4R4[4g4h4l4|5O5R5S5W5r7]7^7_7`7e7f7h7i7j7p7w7z8U8X8Z9h9i9j9t9|:R:S:t:u:v:w:x:};R;e;j;v;y=p=}>O>Z>[Q/z*eU4k/z4m7xQ4m/|R7x4lS*o$|*ZR0Y*ox*S$v)e*t*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>O!d.j(u)c*[*e.l.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/h*S.j7ca7c3}7e7f7j9h:t:w;yQ0a*tQ3i.lU4}0a3i9kR9k7e|*U$v)e*t*u+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>O!h.k(u)c*[*e.l.m.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/j*U.k7de7d3}7e7f7j9h9i:t:u:w;yQ0c*uQ3j.mU5P0c3j9lR9l7fQ*z%UR0g*zQ5]0vR8Y5]Q+_%kR0u+_Q5v1jS8j5v:[R:[8kQ,[&_R1m,[Q5{1oR8m5{Q1{,fS6]1{8zR8z6_Q1U+rW5h1U5j8a:VQ5j1XQ8a5iR:V8bQ+w&QR1[+wQ2_,xR6m2_YrOXst#dQ&v!ZQ+a%mQ,r&rQ,t&tQ,u&uQ,w&wQ2Y,sS2],x2_R6l2[Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'q!uQ+`%lQ+l%zQ,Q&XQ,h&mQ-P&|W-p'k's't'wQ-w'oQ0X*nQ1P+mQ1c,PS2O,i,lQ2g-OQ2h-RQ2i-SQ2}-oW3P-r-s-v-xQ5a1QQ5m1_Q5q1eQ6V1uQ6a2QQ6k2ZU6z3O3R3UQ6}3SQ8]5bQ8e5oQ8g5rQ8l5zQ8u6WQ8{6`S9[6{7PQ9^7OQ:W8cQ:b8vQ:g8|Q:n9]Q;U:XQ;]:cQ;a:oQ;l;VR;o;^Q%zyQ'd!iQ'o!uU+m%{%|%}Q-W'VU-k'e'f'gS-o'k'uQ0Q*jS1Q+n+oQ2o-YS2{-l-mQ3S-tS4p0R0UQ5b1RQ6v2uQ6y2|Q7O3TU7{4r4s4vQ9z7}R;O9{S$wi>PR*{%VU%Ui%V>PR0f*yQ$viS(u#v+iS)c$b$cQ)e$dQ*[$xS*e${*YQ*t%OQ*u%QQ+Q%^Q+R%_Q+V%cQ.l<oQ.m<qQ.o<uQ.p<wQ.q<yQ/_)yQ/g*RQ/i*TQ/k*VQ/v*aS/|*g/mQ0d*wQ0e*xl0v+f,V.f1i1q3c6S7W8q9b:`:r;[;dQ1e,SQ3f=SQ3g=UQ3h=XS3}<l<mQ4R/PS4[/d4^Q4g/xQ4h/yQ4l/{Q4|0`Q5O0bQ5R0iQ5S0jQ5W0oQ5r1fQ7]=]Q7^=_Q7_=aQ7`=cQ7e<pQ7f<rQ7h<vQ7i<xQ7j<zQ7p4_Q7w4jQ7z4oQ8U5QQ8X5[Q8Z5_Q9h=YQ9i=TQ9j=VQ9t7vQ9|8QQ:R8VQ:S8[Q:t=^Q:u=`Q:v=bQ:w=dQ:x9pQ:}9yQ;R:PQ;e=gQ;j;QQ;v;kQ;y=hQ=p>PQ=}>XQ>O>YQ>Z>]R>[>^Q+O%]Q.n<sR7g<tnpOXst!Z#d%m&r&t&u&w,s,x2[2_Q!fPS#fZ#oQ&|!`W'h!o*i0]4zQ(P#SQ)Q#{Q)r$nS,l&k&nQ,q&oQ-O&{S-T'T/nQ-g'bQ.x)OQ/[)sQ0s+]Q0y+gQ2W,pQ2y-iQ3a.gQ4W/VQ5U0lQ6Q1rQ6c2SQ6d2TQ6h2VQ6j2XQ6o2aQ7Z3dQ7m4TQ8s6TQ9P6eQ9Q6fQ9S6iQ9f7[Q:a8tR:k9T#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'b)O*i+]+g,p,s,x-i.g/n0]0l1r2S2T2V2X2[2_2a3d4z6T6e6f6i7[8t9TQ#YWQ#eYQ%quQ%svS%uw!gS(S#W(VQ(Y#ZQ(t#uQ(y#xQ)R$OQ)S$PQ)T$QQ)U$RQ)V$SQ)W$TQ)X$UQ)Y$VQ)Z$WQ)[$XQ)^$ZQ)`$_Q)b$aQ)g$eW)q$n)s/V4TQ+d%tQ+x&RS-Z'X2pQ-x'rS-}(T.PQ.S(]Q.U(dQ.s(xQ.v(zQ.z<UQ.|<XQ.}<YQ/O<]Q/b)}Q0p+XQ2k-UQ2n-XQ3O-qQ3V.VQ3k.tQ3p<^Q3q<_Q3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{.{Q3|<kQ4P<nQ4Q<{Q4X<iQ5X0rQ5c1SQ6u=OQ6{3QQ7Q3WQ7a3lQ7b=PQ7k=RQ7l=ZQ8k5wQ9X6sQ9]6|Q9g=[Q9m=eQ9n=fQ:o9_Q;W:ZQ;`:mQ<W#SR=v>SR#[WR'Z!el!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}S'V!e-]U*j$|*Z*oS-Y'W'_S0U*k*qQ0^*rQ2u-cQ4v0[R4{0_R({#xQ!fQT-d'`-e]!qQ!r'`-e1o5{Q#p]R'i<VR)f$dY!uQ'`-e1o5{Q'k!rS'u!v!yS'w!z5}S-t'l'mQ-v'nR3T-uT#kZ%eS#jZ%eS%km,oU(g#h#i#lS.Y(h(iQ.^(jQ0t+^Q3Y.ZU3Z.[.]._S7S3[3]R9`7Td#^W#W#Z%h(T(^*Y+Z.T/mr#gZm#h#i#l%e(h(i(j+^.Z.[.]._3[3]7TS*]$x*bQ/t*^Q2U,oQ2l-VQ4`/pQ6q2dQ7s4aQ9W6rT=m'X+[V#aW%h*YU#`W%h*YS(U#W(^U(Z#Z+Z/mS-['X+[T.O(T.TV'^!e%i*ZQ$lfR)x$qT)m$l)nR4V/UT*_$x*bT*h${*YQ0w+fQ1g,VQ3_.fQ5t1iQ6P1qQ7X3cQ8r6SQ9c7WQ:^8qQ:p9bQ;Z:`Q;c:rQ;n;[R;q;dnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&l!VR,h&itmOXst!U!V!Z#d%m&i&r&t&u&w,s,x2[2_R,o&oT%lm,oR1k,XR,g&gQ&U|S+}&V&WR1^,OR+s&PT&p!W&sT&q!W&sT2^,x2_",
        nodeNames: "\u26a0 ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
        maxTerm: 380,
        context: HC,
        nodeProps: [
          ["isolate", -8, 5, 6, 14, 37, 39, 51, 53, 55, ""],
          ["group", -26, 9, 17, 19, 68, 207, 211, 215, 216, 218, 221, 224, 234, 237, 243, 245, 247, 249, 252, 258, 264, 266, 268, 270, 272, 274, 275, "Statement", -34, 13, 14, 32, 35, 36, 42, 51, 54, 55, 57, 62, 70, 72, 76, 80, 82, 84, 85, 110, 111, 120, 121, 136, 139, 141, 142, 143, 144, 145, 147, 148, 167, 169, 171, "Expression", -23, 31, 33, 37, 41, 43, 45, 173, 175, 177, 178, 180, 181, 182, 184, 185, 186, 188, 189, 190, 201, 203, 205, 206, "Type", -3, 88, 103, 109, "ClassItem"],
          ["openedBy", 23, "<", 38, "InterpolationStart", 56, "[", 60, "{", 73, "(", 160, "JSXStartCloseTag"],
          ["closedBy", -2, 24, 168, ">", 40, "InterpolationEnd", 50, "]", 61, "}", 74, ")", 165, "JSXEndTag"]
        ],
        propSources: [sC],
        skippedNodes: [0, 5, 6, 278],
        repeatNodeCount: 37,
        tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
        tokenizers: [lC, XC, cC, rC, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, EC, new MC("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340), new MC("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)],
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
          get: CC => TC[CC] || -1
        }, {
          term: 343,
          get: CC => aC[CC] || -1
        }, {
          term: 95,
          get: CC => tC[CC] || -1
        }],
        tokenPrec: 15201
      });
    var jC = ZC(41142),
      yC = ZC(41125),
      LC = ZC(41128),
      UC = ZC(41122);
    const BC = [(0, UC.r)("function ${name}(${params}) {\n\t${}\n}", {
        label: "function",
        detail: "definition",
        type: "keyword"
      }), (0, UC.r)("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}", {
        label: "for",
        detail: "loop",
        type: "keyword"
      }), (0, UC.r)("for (let ${name} of ${collection}) {\n\t${}\n}", {
        label: "for",
        detail: "of loop",
        type: "keyword"
      }), (0, UC.r)("do {\n\t${}\n} while (${})", {
        label: "do",
        detail: "loop",
        type: "keyword"
      }), (0, UC.r)("while (${}) {\n\t${}\n}", {
        label: "while",
        detail: "loop",
        type: "keyword"
      }), (0, UC.r)("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
        label: "try",
        detail: "/ catch block",
        type: "keyword"
      }), (0, UC.r)("if (${}) {\n\t${}\n}", {
        label: "if",
        detail: "block",
        type: "keyword"
      }), (0, UC.r)("if (${}) {\n\t${}\n} else {\n\t${}\n}", {
        label: "if",
        detail: "/ else block",
        type: "keyword"
      }), (0, UC.r)("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
        label: "class",
        detail: "definition",
        type: "keyword"
      }), (0, UC.r)('import {${names}} from "${module}"\n${}', {
        label: "import",
        detail: "named",
        type: "keyword"
      }), (0, UC.r)('import ${name} from "${module}"\n${}', {
        label: "import",
        detail: "default",
        type: "keyword"
      })],
      OC = BC.concat([(0, UC.r)("interface ${name} {\n\t${}\n}", {
        label: "interface",
        detail: "definition",
        type: "keyword"
      }), (0, UC.r)("type ${name} = ${type}", {
        label: "type",
        detail: "definition",
        type: "keyword"
      }), (0, UC.r)("enum ${name} {\n\t${}\n}", {
        label: "enum",
        detail: "definition",
        type: "keyword"
      })]),
      kC = new QC.m,
      VC = new Set(["Script", "Block", "FunctionExpression", "FunctionDeclaration", "ArrowFunction", "MethodDeclaration", "ForStatement"]);

    function Cz(CC) {
      return (zC, ZC) => {
        let QC = zC.node.getChild("VariableDefinition");
        return QC && ZC(QC, CC), !0
      }
    }
    const zz = ["FunctionDeclaration"],
      Zz = {
        FunctionDeclaration: Cz("function"),
        ClassDeclaration: Cz("class"),
        ClassExpression: () => !0,
        EnumDeclaration: Cz("constant"),
        TypeAliasDeclaration: Cz("type"),
        NamespaceDeclaration: Cz("namespace"),
        VariableDefinition(CC, zC) {
          CC.matchContext(zz) || zC(CC, "variable")
        },
        TypeDefinition(CC, zC) {
          zC(CC, "type")
        },
        __proto__: null
      };

    function Qz(CC, zC) {
      let ZC = kC.get(zC);
      if (ZC) return ZC;
      let wC = [],
        bC = !0;

      function nC(zC, ZC) {
        let QC = CC.sliceString(zC.from, zC.to);
        wC.push({
          label: QC,
          type: ZC
        })
      }
      return zC.cursor(QC.d.IncludeAnonymous).iterate((zC => {
        if (bC) bC = !1;
        else if (zC.name) {
          let CC = Zz[zC.name];
          if (CC && CC(zC, nC) || VC.has(zC.name)) return !1
        } else if (zC.to - zC.from > 8192) {
          for (let ZC of Qz(CC, zC.node)) wC.push(ZC);
          return !1
        }
      })), kC.set(zC, wC), wC
    }
    const wz = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
      bz = ["TemplateString", "String", "RegExp", "LineComment", "BlockComment", "VariableDefinition", "TypeDefinition", "Label", "PropertyDefinition", "PropertyName", "PrivatePropertyDefinition", "PrivatePropertyName", "JSXText", "JSXAttributeValue", "JSXOpenTag", "JSXCloseTag", "JSXSelfClosingTag", ".", "?."];

    function nz(CC) {
      let zC = (0, jC.gb)(CC.state).resolveInner(CC.pos, -1);
      if (bz.indexOf(zC.name) > -1) return null;
      let ZC = "VariableName" == zC.name || zC.to - zC.from < 20 && wz.test(CC.state.sliceDoc(zC.from, zC.to));
      if (!ZC && !CC.explicit) return null;
      let QC = [];
      for (let wC = zC; wC; wC = wC.parent) VC.has(wC.name) && (QC = QC.concat(Qz(CC.state.doc, wC)));
      return {
        options: QC,
        from: ZC ? zC.from : CC.pos,
        validFor: wz
      }
    }
    const fz = jC.e.define({
        name: "javascript",
        parser: DC.configure({
          props: [jC.O.add({
            IfStatement: (0, jC.l)({
              except: /^\s*({|else\b)/
            }),
            TryStatement: (0, jC.l)({
              except: /^\s*({|catch\b|finally\b)/
            }),
            LabeledStatement: jC.u,
            SwitchBody: CC => {
              let zC = CC.textAfter,
                ZC = /^\s*\}/.test(zC),
                QC = /^\s*(case|default)\b/.test(zC);
              return CC.baseIndent + (ZC ? 0 : QC ? 1 : 2) * CC.unit
            },
            Block: (0, jC.s)({
              closing: "}"
            }),
            ArrowFunction: CC => CC.baseIndent + CC.unit,
            "TemplateString BlockComment": () => null,
            "Statement Property": (0, jC.l)({
              except: /^\s*{/
            }),
            JSXElement(CC) {
              let zC = /^\s*<\//.test(CC.textAfter);
              return CC.lineIndent(CC.node.from) + (zC ? 0 : CC.unit)
            },
            JSXEscape(CC) {
              let zC = /\s*\}/.test(CC.textAfter);
              return CC.lineIndent(CC.node.from) + (zC ? 0 : CC.unit)
            },
            "JSXOpenTag JSXSelfClosingTag": CC => CC.column(CC.node.from) + CC.unit
          }), jC.F.add({
            "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": jC.y,
            BlockComment: CC => ({
              from: CC.from + 2,
              to: CC.to - 2
            }),
            JSXElement(CC) {
              let zC = CC.firstChild;
              if (!zC || "JSXSelfClosingTag" == zC.name) return null;
              let ZC = CC.lastChild;
              return {
                from: zC.to,
                to: ZC.type.isError ? CC.to : ZC.from
              }
            },
            "JSXSelfClosingTag JSXOpenTag"(CC) {
              var zC;
              let ZC = null === (zC = CC.firstChild) || void 0 === zC ? void 0 : zC.nextSibling,
                QC = CC.lastChild;
              return !ZC || ZC.type.isError ? null : {
                from: ZC.to,
                to: QC.type.isError ? CC.to : QC.from
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
      oz = {
        test: CC => /^JSX/.test(CC.name),
        facet: (0, jC.q)({
          commentTokens: {
            block: {
              open: "{/*",
              close: "*/}"
            }
          }
        })
      },
      qz = fz.configure({
        dialect: "ts"
      }, "typescript"),
      Fz = fz.configure({
        dialect: "jsx",
        props: [jC._.add((CC => CC.isTop ? [oz] : void 0))]
      }),
      Wz = fz.configure({
        dialect: "jsx ts",
        props: [jC._.add((CC => CC.isTop ? [oz] : void 0))]
      }, "typescript");
    let Nz = CC => ({
      label: CC,
      type: "keyword"
    });
    const Mz = "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(Nz),
      gz = Mz.concat(["declare", "implements", "private", "protected", "public"].map(Nz));

    function Sz() {
      let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        zC = CC.jsx ? CC.typescript ? Wz : Fz : CC.typescript ? qz : fz,
        ZC = CC.typescript ? OC.concat(gz) : BC.concat(Mz);
      return new jC.h(zC, [fz.data.of({
        autocomplete: (0, UC.p)(bz, (0, UC.j)(ZC))
      }), fz.data.of({
        autocomplete: nz
      }), CC.jsx ? Gz : []])
    }

    function pz(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : CC.length;
      for (let QC = null === zC || void 0 === zC ? void 0 : zC.firstChild; QC; QC = QC.nextSibling)
        if ("JSXIdentifier" == QC.name || "JSXBuiltin" == QC.name || "JSXNamespacedName" == QC.name || "JSXMemberExpression" == QC.name) return CC.sliceString(QC.from, Math.min(QC.to, ZC));
      return ""
    }
    const Pz = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      Gz = LC.j.inputHandler.of(((CC, zC, ZC, QC, wC) => {
        if ((Pz ? CC.composing : CC.compositionStarted) || CC.state.readOnly || zC != ZC || ">" != QC && "/" != QC || !fz.isActiveAt(CC.state, zC, -1)) return !1;
        let bC = wC(),
          {
            state: nC
          } = bC,
          fC = nC.changeByRange((CC => {
            var zC;
            let ZC, {
                head: wC
              } = CC,
              bC = (0, jC.gb)(nC).resolveInner(wC - 1, -1);
            if ("JSXStartTag" == bC.name && (bC = bC.parent), nC.doc.sliceString(wC - 1, wC) != QC || "JSXAttributeValue" == bC.name && bC.to > wC);
            else {
              if (">" == QC && "JSXFragmentTag" == bC.name) return {
                range: CC,
                changes: {
                  from: wC,
                  insert: "</>"
                }
              };
              if ("/" == QC && "JSXStartCloseTag" == bC.name) {
                let CC = bC.parent,
                  QC = CC.parent;
                if (QC && CC.from == wC - 2 && ((ZC = pz(nC.doc, QC.firstChild, wC)) || "JSXFragmentTag" == (null === (zC = QC.firstChild) || void 0 === zC ? void 0 : zC.name))) {
                  let CC = `${ZC}>`;
                  return {
                    range: yC.i.cursor(wC + CC.length, -1),
                    changes: {
                      from: wC,
                      insert: CC
                    }
                  }
                }
              } else if (">" == QC) {
                let zC = function(CC) {
                  for (;;) {
                    if ("JSXOpenTag" == CC.name || "JSXSelfClosingTag" == CC.name || "JSXFragmentTag" == CC.name) return CC;
                    if ("JSXEscape" == CC.name || !CC.parent) return null;
                    CC = CC.parent
                  }
                }(bC);
                if (zC && "JSXOpenTag" == zC.name && !/^\/?>|^<\//.test(nC.doc.sliceString(wC, wC + 2)) && (ZC = pz(nC.doc, zC, wC))) return {
                  range: CC,
                  changes: {
                    from: wC,
                    insert: `</${ZC}>`
                  }
                }
              }
            }
            return {
              range: CC
            }
          }));
        return !fC.changes.empty && (CC.dispatch([bC, nC.update(fC, {
          userEvent: "input.complete",
          scrollIntoView: !0
        })]), !0)
      }))
  },
  41142: (CC, zC, ZC) => {
    ZC.d(zC, {
      C: () => qz,
      F: () => UC,
      G: () => PC,
      H: () => dC,
      K: () => HC,
      O: () => lC,
      P: () => yC,
      T: () => mC,
      U: () => YC,
      X: () => az,
      _: () => WC,
      b: () => Az,
      c: () => EC,
      cb: () => iz,
      e: () => gC,
      fb: () => pC,
      gb: () => SC,
      h: () => hC,
      i: () => uz,
      l: () => DC,
      n: () => hz,
      q: () => FC,
      s: () => TC,
      u: () => tC,
      w: () => Gz,
      y: () => BC
    });
    var QC, wC = ZC(41144),
      bC = ZC(41125),
      nC = ZC(41128),
      fC = ZC(41150),
      oC = ZC(41134);
    const qC = new wC.g;

    function FC(CC) {
      return bC.n.define({
        combine: CC ? zC => zC.concat(CC) : void 0
      })
    }
    const WC = new wC.g;
    class NC {
      constructor(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this.data = CC, this.name = QC, bC.l.prototype.hasOwnProperty("tree") || Object.defineProperty(bC.l.prototype, "tree", {
          get() {
            return SC(this)
          }
        }), this.parser = zC, this.extension = [eC.of(this), bC.l.languageData.of(((CC, zC, ZC) => {
          let QC = MC(CC, zC, ZC),
            wC = QC.type.prop(qC);
          if (!wC) return [];
          let bC = CC.facet(wC),
            nC = QC.type.prop(WC);
          if (nC) {
            let wC = QC.resolve(zC - QC.from, ZC);
            for (let zC of nC)
              if (zC.test(wC, CC)) {
                let ZC = CC.facet(zC.facet);
                return "replace" == zC.type ? ZC : ZC.concat(bC)
              }
          }
          return bC
        }))].concat(ZC)
      }
      isActiveAt(CC, zC) {
        return MC(CC, zC, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1).type.prop(qC) == this.data
      }
      findRegions(CC) {
        let zC = CC.facet(eC);
        if ((null === zC || void 0 === zC ? void 0 : zC.data) == this.data) return [{
          from: 0,
          to: CC.doc.length
        }];
        if (!zC || !zC.allowsNesting) return [];
        let ZC = [],
          QC = (CC, zC) => {
            if (CC.prop(qC) == this.data) return void ZC.push({
              from: zC,
              to: zC + CC.length
            });
            let bC = CC.prop(wC.g.mounted);
            if (bC) {
              if (bC.tree.prop(qC) == this.data) {
                if (bC.overlay)
                  for (let CC of bC.overlay) ZC.push({
                    from: CC.from + zC,
                    to: CC.to + zC
                  });
                else ZC.push({
                  from: zC,
                  to: zC + CC.length
                });
                return
              }
              if (bC.overlay) {
                let CC = ZC.length;
                if (QC(bC.tree, bC.overlay[0].from + zC), ZC.length > CC) return
              }
            }
            for (let ZC = 0; ZC < CC.children.length; ZC++) {
              let bC = CC.children[ZC];
              bC instanceof wC.u && QC(bC, CC.positions[ZC] + zC)
            }
          };
        return QC(SC(CC), 0), ZC
      }
      get allowsNesting() {
        return !0
      }
    }

    function MC(CC, zC, ZC) {
      let QC = CC.facet(eC),
        bC = SC(CC).topNode;
      if (!QC || QC.allowsNesting)
        for (let nC = bC; nC; nC = nC.enter(zC, ZC, wC.d.ExcludeBuffers | wC.d.EnterBracketed)) nC.type.isTop && (bC = nC);
      return bC
    }
    NC.setState = bC.w.define();
    class gC extends NC {
      constructor(CC, zC, ZC) {
        super(CC, zC, [], ZC), this.parser = zC
      }
      static define(CC) {
        let zC = FC(CC.languageData);
        return new gC(zC, CC.parser.configure({
          props: [qC.add((CC => CC.isTop ? zC : void 0))]
        }), CC.name)
      }
      configure(CC, zC) {
        return new gC(this.data, this.parser.configure(CC), zC || this.name)
      }
      get allowsNesting() {
        return this.parser.hasWrappers()
      }
    }

    function SC(CC) {
      let zC = CC.field(NC.state, !1);
      return zC ? zC.tree : wC.u.empty
    }

    function pC(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : CC.doc.length;
      var ZC;
      return (null === (ZC = CC.field(NC.state, !1)) || void 0 === ZC ? void 0 : ZC.context.isDone(zC)) || !1
    }

    function PC(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : CC.viewport.to,
        ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        QC = function(CC, zC) {
          let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
          var QC;
          let wC = null === (QC = CC.field(NC.state, !1)) || void 0 === QC ? void 0 : QC.context;
          if (!wC) return null;
          let bC = wC.viewport;
          wC.updateViewport({
            from: 0,
            to: zC
          });
          let nC = wC.isDone(zC) || wC.work(ZC, zC) ? wC.tree : null;
          return wC.updateViewport(bC), nC
        }(CC.state, zC, ZC);
      return QC != SC(CC.state) && CC.dispatch({}), !!QC
    }
    class GC {
      constructor(CC) {
        this.doc = CC, this.cursorPos = 0, this.string = "", this.cursor = CC.iter()
      }
      get length() {
        return this.doc.length
      }
      syncTo(CC) {
        return this.string = this.cursor.next(CC - this.cursorPos).value, this.cursorPos = CC + this.string.length, this.cursorPos - this.string.length
      }
      chunk(CC) {
        return this.syncTo(CC), this.string
      }
      get lineChunks() {
        return !0
      }
      read(CC, zC) {
        let ZC = this.cursorPos - this.string.length;
        return CC < ZC || zC >= this.cursorPos ? this.doc.sliceString(CC, zC) : this.string.slice(CC - ZC, zC - ZC)
      }
    }
    let RC = null;
    class AC {
      constructor(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          QC = arguments.length > 3 ? arguments[3] : void 0,
          wC = arguments.length > 4 ? arguments[4] : void 0,
          bC = arguments.length > 5 ? arguments[5] : void 0,
          nC = arguments.length > 6 ? arguments[6] : void 0,
          fC = arguments.length > 7 ? arguments[7] : void 0;
        this.parser = CC, this.state = zC, this.fragments = ZC, this.tree = QC, this.treeLen = wC, this.viewport = bC, this.skipped = nC, this.scheduleOn = fC, this.parse = null, this.tempSkipped = []
      }
      static create(CC, zC, ZC) {
        return new AC(CC, zC, [], wC.u.empty, 0, ZC, [], null)
      }
      startParse() {
        return this.parser.startParse(new GC(this.state.doc), this.fragments)
      }
      work(CC, zC) {
        return null != zC && zC >= this.state.doc.length && (zC = void 0), this.tree != wC.u.empty && this.isDone(null !== zC && void 0 !== zC ? zC : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext((() => {
          var ZC;
          if ("number" == typeof CC) {
            let zC = Date.now() + CC;
            CC = () => Date.now() > zC
          }
          for (this.parse || (this.parse = this.startParse()), null != zC && (null == this.parse.stoppedAt || this.parse.stoppedAt > zC) && zC < this.state.doc.length && this.parse.stopAt(zC);;) {
            let QC = this.parse.advance();
            if (QC) {
              if (this.fragments = this.withoutTempSkipped(wC.r.addTree(QC, this.fragments, null != this.parse.stoppedAt)), this.treeLen = null !== (ZC = this.parse.stoppedAt) && void 0 !== ZC ? ZC : this.state.doc.length, this.tree = QC, this.parse = null, !(this.treeLen < (null !== zC && void 0 !== zC ? zC : this.state.doc.length))) return !0;
              this.parse = this.startParse()
            }
            if (CC()) return !1
          }
        }))
      }
      takeTree() {
        let CC, zC;
        this.parse && (CC = this.parse.parsedPos) >= this.treeLen && ((null == this.parse.stoppedAt || this.parse.stoppedAt > CC) && this.parse.stopAt(CC), this.withContext((() => {
          for (; !(zC = this.parse.advance()););
        })), this.treeLen = CC, this.tree = zC, this.fragments = this.withoutTempSkipped(wC.r.addTree(this.tree, this.fragments, !0)), this.parse = null)
      }
      withContext(CC) {
        let zC = RC;
        RC = this;
        try {
          return CC()
        } finally {
          RC = zC
        }
      }
      withoutTempSkipped(CC) {
        for (let zC; zC = this.tempSkipped.pop();) CC = xC(CC, zC.from, zC.to);
        return CC
      }
      changes(CC, zC) {
        let {
          fragments: ZC,
          tree: QC,
          treeLen: bC,
          viewport: nC,
          skipped: fC
        } = this;
        if (this.takeTree(), !CC.empty) {
          let zC = [];
          if (CC.iterChangedRanges(((CC, ZC, QC, wC) => zC.push({
              fromA: CC,
              toA: ZC,
              fromB: QC,
              toB: wC
            }))), ZC = wC.r.applyChanges(ZC, zC), QC = wC.u.empty, bC = 0, nC = {
              from: CC.mapPos(nC.from, -1),
              to: CC.mapPos(nC.to, 1)
            }, this.skipped.length) {
            fC = [];
            for (let zC of this.skipped) {
              let ZC = CC.mapPos(zC.from, 1),
                QC = CC.mapPos(zC.to, -1);
              ZC < QC && fC.push({
                from: ZC,
                to: QC
              })
            }
          }
        }
        return new AC(this.parser, zC, ZC, QC, bC, nC, fC, this.scheduleOn)
      }
      updateViewport(CC) {
        if (this.viewport.from == CC.from && this.viewport.to == CC.to) return !1;
        this.viewport = CC;
        let zC = this.skipped.length;
        for (let ZC = 0; ZC < this.skipped.length; ZC++) {
          let {
            from: zC,
            to: QC
          } = this.skipped[ZC];
          zC < CC.to && QC > CC.from && (this.fragments = xC(this.fragments, zC, QC), this.skipped.splice(ZC--, 1))
        }
        return !(this.skipped.length >= zC) && (this.reset(), !0)
      }
      reset() {
        this.parse && (this.takeTree(), this.parse = null)
      }
      skipUntilInView(CC, zC) {
        this.skipped.push({
          from: CC,
          to: zC
        })
      }
      static getSkippingParser(CC) {
        return new class extends wC.n {
          createParse(zC, ZC, QC) {
            let bC = QC[0].from,
              nC = QC[QC.length - 1].to;
            return {
              parsedPos: bC,
              advance() {
                let zC = RC;
                if (zC) {
                  for (let CC of QC) zC.tempSkipped.push(CC);
                  CC && (zC.scheduleOn = zC.scheduleOn ? Promise.all([zC.scheduleOn, CC]) : CC)
                }
                return this.parsedPos = nC, new wC.u(wC.k.none, [], [], nC - bC)
              },
              stoppedAt: null,
              stopAt() {}
            }
          }
        }
      }
      isDone(CC) {
        CC = Math.min(CC, this.state.doc.length);
        let zC = this.fragments;
        return this.treeLen >= CC && zC.length && 0 == zC[0].from && zC[0].to >= CC
      }
      static get() {
        return RC
      }
    }

    function xC(CC, zC, ZC) {
      return wC.r.applyChanges(CC, [{
        fromA: zC,
        toA: ZC,
        fromB: zC,
        toB: ZC
      }])
    }
    class JC {
      constructor(CC) {
        this.context = CC, this.tree = CC.tree
      }
      apply(CC) {
        if (!CC.docChanged && this.tree == this.context.tree) return this;
        let zC = this.context.changes(CC.changes, CC.state),
          ZC = this.context.treeLen == CC.startState.doc.length ? void 0 : Math.max(CC.changes.mapPos(this.context.treeLen), zC.viewport.to);
        return zC.work(20, ZC) || zC.takeTree(), new JC(zC)
      }
      static init(CC) {
        let zC = Math.min(3e3, CC.doc.length),
          ZC = AC.create(CC.facet(eC).parser, CC, {
            from: 0,
            to: zC
          });
        return ZC.work(20, zC) || ZC.takeTree(), new JC(ZC)
      }
    }
    NC.state = bC.A.define({
      create: JC.init,
      update(CC, zC) {
        for (let ZC of zC.effects)
          if (ZC.is(NC.setState)) return ZC.value;
        return zC.startState.facet(eC) != zC.state.facet(eC) ? JC.init(zC.state) : CC.apply(zC)
      }
    });
    let IC = CC => {
      let zC = setTimeout((() => CC()), 500);
      return () => clearTimeout(zC)
    };
    "undefined" != typeof requestIdleCallback && (IC = CC => {
      let zC = -1,
        ZC = setTimeout((() => {
          zC = requestIdleCallback(CC, {
            timeout: 400
          })
        }), 100);
      return () => zC < 0 ? clearTimeout(ZC) : cancelIdleCallback(zC)
    });
    const iC = "undefined" != typeof navigator && (null === (QC = navigator.scheduling) || void 0 === QC ? void 0 : QC.isInputPending) ? () => navigator.scheduling.isInputPending() : null,
      vC = nC.o.fromClass(class {
        constructor(CC) {
          this.view = CC, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork()
        }
        update(CC) {
          let zC = this.view.state.field(NC.state).context;
          (zC.updateViewport(CC.view.viewport) || this.view.viewport.to > zC.treeLen) && this.scheduleWork(), (CC.docChanged || CC.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(zC)
        }
        scheduleWork() {
          if (this.working) return;
          let {
            state: CC
          } = this.view, zC = CC.field(NC.state);
          zC.tree == zC.context.tree && zC.context.isDone(CC.doc.length) || (this.working = IC(this.work))
        }
        work(CC) {
          this.working = null;
          let zC = Date.now();
          if (this.chunkEnd < zC && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = zC + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
          let {
            state: ZC,
            viewport: {
              to: QC
            }
          } = this.view, wC = ZC.field(NC.state);
          if (wC.tree == wC.context.tree && wC.context.isDone(QC + 1e5)) return;
          let bC = Date.now() + Math.min(this.chunkBudget, 100, CC && !iC ? Math.max(25, CC.timeRemaining() - 5) : 1e9),
            nC = wC.context.treeLen < QC && ZC.doc.length > QC + 1e3,
            fC = wC.context.work((() => iC && iC() || Date.now() > bC), QC + (nC ? 0 : 1e5));
          this.chunkBudget -= Date.now() - zC, (fC || this.chunkBudget <= 0) && (wC.context.takeTree(), this.view.dispatch({
            effects: NC.setState.of(new JC(wC.context))
          })), this.chunkBudget > 0 && (!fC || nC) && this.scheduleWork(), this.checkAsyncSchedule(wC.context)
        }
        checkAsyncSchedule(CC) {
          CC.scheduleOn && (this.workScheduled++, CC.scheduleOn.then((() => this.scheduleWork())).catch((CC => (0, nC.Y)(this.view.state, CC))).then((() => this.workScheduled--)), CC.scheduleOn = null)
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
      eC = bC.n.define({
        combine: CC => CC.length ? CC[0] : null,
        enables: CC => [NC.state, vC, nC.j.contentAttributes.compute([CC], (zC => {
          let ZC = zC.facet(CC);
          return ZC && ZC.name ? {
            "data-language": ZC.name
          } : {}
        }))]
      });
    class hC {
      constructor(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        this.language = CC, this.support = zC, this.extension = [CC, zC]
      }
    }
    const KC = bC.n.define(),
      YC = bC.n.define({
        combine: CC => {
          if (!CC.length) return "  ";
          let zC = CC[0];
          if (!zC || /\S/.test(zC) || Array.from(zC).some((CC => CC != zC[0]))) throw new Error("Invalid indent unit: " + JSON.stringify(CC[0]));
          return zC
        }
      });

    function dC(CC) {
      let zC = CC.facet(YC);
      return 9 == zC.charCodeAt(0) ? CC.tabSize * zC.length : zC.length
    }

    function mC(CC, zC) {
      let ZC = "",
        QC = CC.tabSize,
        wC = CC.facet(YC)[0];
      if ("\t" == wC) {
        for (; zC >= QC;) ZC += "\t", zC -= QC;
        wC = " "
      }
      for (let bC = 0; bC < zC; bC++) ZC += wC;
      return ZC
    }

    function HC(CC, zC) {
      CC instanceof bC.l && (CC = new EC(CC));
      for (let QC of CC.state.facet(KC)) {
        let ZC = QC(CC, zC);
        if (void 0 !== ZC) return ZC
      }
      let ZC = SC(CC.state);
      return ZC.length >= zC ? function(CC, zC, ZC) {
        let QC = zC.resolveStack(ZC),
          wC = zC.resolveInner(ZC, -1).resolve(ZC, 0).enterUnfinishedNodesBefore(ZC);
        if (wC != QC.node) {
          let CC = [];
          for (let zC = wC; zC && !(zC.from < QC.node.from || zC.to > QC.node.to || zC.from == QC.node.from && zC.type == QC.node.type); zC = zC.parent) CC.push(zC);
          for (let zC = CC.length - 1; zC >= 0; zC--) QC = {
            node: CC[zC],
            next: QC
          }
        }
        return XC(QC, CC, ZC)
      }(CC, ZC, zC) : null
    }
    class EC {
      constructor(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.state = CC, this.options = zC, this.unit = dC(CC)
      }
      lineAt(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ZC = this.state.doc.lineAt(CC),
          {
            simulateBreak: QC,
            simulateDoubleBreak: wC
          } = this.options;
        return null != QC && QC >= ZC.from && QC <= ZC.to ? wC && QC == CC ? {
          text: "",
          from: CC
        } : (zC < 0 ? QC < CC : QC <= CC) ? {
          text: ZC.text.slice(QC - ZC.from),
          from: QC
        } : {
          text: ZC.text.slice(0, QC - ZC.from),
          from: ZC.from
        } : ZC
      }
      textAfterPos(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (this.options.simulateDoubleBreak && CC == this.options.simulateBreak) return "";
        let {
          text: ZC,
          from: QC
        } = this.lineAt(CC, zC);
        return ZC.slice(CC - QC, Math.min(ZC.length, CC + 100 - QC))
      }
      column(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: ZC,
            from: QC
          } = this.lineAt(CC, zC),
          wC = this.countColumn(ZC, CC - QC),
          bC = this.options.overrideIndentation ? this.options.overrideIndentation(QC) : -1;
        return bC > -1 && (wC += bC - this.countColumn(ZC, ZC.search(/\S|$/))), wC
      }
      countColumn(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : CC.length;
        return (0, bC.S)(CC, this.state.tabSize, zC)
      }
      lineIndent(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: ZC,
            from: QC
          } = this.lineAt(CC, zC),
          wC = this.options.overrideIndentation;
        if (wC) {
          let CC = wC(QC);
          if (CC > -1) return CC
        }
        return this.countColumn(ZC, ZC.search(/\S|$/))
      }
      get simulatedBreak() {
        return this.options.simulateBreak || null
      }
    }
    const lC = new wC.g;

    function XC(CC, zC, ZC) {
      for (let QC = CC; QC; QC = QC.next) {
        let CC = cC(QC.node);
        if (CC) return CC(rC.create(zC, ZC, QC))
      }
      return 0
    }

    function cC(CC) {
      let zC = CC.type.prop(lC);
      if (zC) return zC;
      let ZC, QC = CC.firstChild;
      if (QC && (ZC = QC.type.prop(wC.g.closedBy))) {
        let zC = CC.lastChild,
          QC = zC && ZC.indexOf(zC.name) > -1;
        return CC => aC(CC, !0, 1, void 0, QC && ! function(CC) {
          return CC.pos == CC.options.simulateBreak && CC.options.simulateDoubleBreak
        }(CC) ? zC.from : void 0)
      }
      return null == CC.parent ? uC : null
    }

    function uC() {
      return 0
    }
    class rC extends EC {
      constructor(CC, zC, ZC) {
        super(CC.state, CC.options), this.base = CC, this.pos = zC, this.context = ZC
      }
      get node() {
        return this.context.node
      }
      static create(CC, zC, ZC) {
        return new rC(CC, zC, ZC)
      }
      get textAfter() {
        return this.textAfterPos(this.pos)
      }
      get baseIndent() {
        return this.baseIndentFor(this.node)
      }
      baseIndentFor(CC) {
        let zC = this.state.doc.lineAt(CC.from);
        for (;;) {
          let ZC = CC.resolve(zC.from);
          for (; ZC.parent && ZC.parent.from == ZC.from;) ZC = ZC.parent;
          if (sC(ZC, CC)) break;
          zC = this.state.doc.lineAt(ZC.from)
        }
        return this.lineIndent(zC.from)
      }
      continue () {
        return XC(this.context.next, this.base, this.pos)
      }
    }

    function sC(CC, zC) {
      for (let ZC = zC; ZC; ZC = ZC.parent)
        if (CC == ZC) return !0;
      return !1
    }

    function TC(CC) {
      let {
        closing: zC,
        align: ZC = !0,
        units: QC = 1
      } = CC;
      return CC => aC(CC, ZC, QC, zC)
    }

    function aC(CC, zC, ZC, QC, wC) {
      let bC = CC.textAfter,
        nC = bC.match(/^\s*/)[0].length,
        fC = QC && bC.slice(nC, nC + QC.length) == QC || wC == CC.pos + nC,
        oC = zC ? function(CC) {
          let zC = CC.node,
            ZC = zC.childAfter(zC.from),
            QC = zC.lastChild;
          if (!ZC) return null;
          let wC = CC.options.simulateBreak,
            bC = CC.state.doc.lineAt(ZC.from),
            nC = null == wC || wC <= bC.from ? bC.to : Math.min(bC.to, wC);
          for (let fC = ZC.to;;) {
            let CC = zC.childAfter(fC);
            if (!CC || CC == QC) return null;
            if (!CC.type.isSkipped) {
              if (CC.from >= nC) return null;
              let zC = /^ */.exec(bC.text.slice(ZC.to - bC.from))[0].length;
              return {
                from: ZC.from,
                to: ZC.to + zC
              }
            }
            fC = CC.to
          }
        }(CC) : null;
      return oC ? fC ? CC.column(oC.from) : CC.column(oC.to) : CC.baseIndent + (fC ? 0 : CC.unit * ZC)
    }
    const tC = CC => CC.baseIndent;

    function DC() {
      let {
        except: CC,
        units: zC = 1
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return ZC => {
        let QC = CC && CC.test(ZC.textAfter);
        return ZC.baseIndent + (QC ? 0 : zC * ZC.unit)
      }
    }
    const jC = 200;

    function yC() {
      return bC.l.transactionFilter.of((CC => {
        if (!CC.docChanged || !CC.isUserEvent("input.type") && !CC.isUserEvent("input.complete")) return CC;
        let zC = CC.startState.languageDataAt("indentOnInput", CC.startState.selection.main.head);
        if (!zC.length) return CC;
        let ZC = CC.newDoc,
          {
            head: QC
          } = CC.newSelection.main,
          wC = ZC.lineAt(QC);
        if (QC > wC.from + jC) return CC;
        let bC = ZC.sliceString(wC.from, QC);
        if (!zC.some((CC => CC.test(bC)))) return CC;
        let {
          state: nC
        } = CC, fC = -1, oC = [];
        for (let {
            head: qC
          }
          of nC.selection.np) {
          let CC = nC.doc.lineAt(qC);
          if (CC.from == fC) continue;
          fC = CC.from;
          let zC = HC(nC, CC.from);
          if (null == zC) continue;
          let ZC = /^\s*/.exec(CC.text)[0],
            QC = mC(nC, zC);
          ZC != QC && oC.push({
            from: CC.from,
            to: CC.from + ZC.length,
            insert: QC
          })
        }
        return oC.length ? [CC, {
          changes: oC,
          sequential: !0
        }] : CC
      }))
    }
    const LC = bC.n.define(),
      UC = new wC.g;

    function BC(CC) {
      let zC = CC.firstChild,
        ZC = CC.lastChild;
      return zC && zC.to < ZC.from ? {
        from: zC.to,
        to: ZC.type.isError ? CC.to : ZC.from
      } : null
    }

    function OC(CC) {
      let zC = CC.lastChild;
      return zC && zC.to == CC.to && zC.type.isError
    }

    function kC(CC, zC, ZC) {
      for (let QC of CC.facet(LC)) {
        let wC = QC(CC, zC, ZC);
        if (wC) return wC
      }
      return function(CC, zC, ZC) {
        let QC = SC(CC);
        if (QC.length < ZC) return null;
        let wC = null;
        for (let bC = QC.resolveStack(ZC, 1); bC; bC = bC.next) {
          let nC = bC.node;
          if (nC.to <= ZC || nC.from > ZC) continue;
          if (wC && nC.from < zC) break;
          let fC = nC.type.prop(UC);
          if (fC && (nC.to < QC.length - 50 || QC.length == CC.doc.length || !OC(nC))) {
            let QC = fC(nC, CC);
            QC && QC.from <= ZC && QC.from >= zC && QC.to > ZC && (wC = QC)
          }
        }
        return wC
      }(CC, zC, ZC)
    }

    function VC(CC, zC) {
      let ZC = zC.mapPos(CC.from, 1),
        QC = zC.mapPos(CC.to, -1);
      return ZC >= QC ? void 0 : {
        from: ZC,
        to: QC
      }
    }
    const Cz = bC.w.define({
        map: VC
      }),
      zz = bC.w.define({
        map: VC
      });

    function Zz(CC) {
      let zC = [];
      for (let {
          head: ZC
        }
        of CC.state.selection.np) zC.some((CC => CC.from <= ZC && CC.to >= ZC)) || zC.push(CC.lineBlockAt(ZC));
      return zC
    }
    const Qz = bC.A.define({
      create: () => nC.e.none,
      update(CC, zC) {
        zC.isUserEvent("delete") && zC.changes.iterChangedRanges(((zC, ZC) => CC = wz(CC, zC, ZC))), CC = CC.map(zC.changes);
        for (let ZC of zC.effects)
          if (ZC.is(Cz) && !nz(CC, ZC.value.from, ZC.value.to)) {
            let {
              preparePlaceholder: QC
            } = zC.state.facet(Wz), wC = QC ? nC.e.replace({
              widget: new Sz(QC(zC.state, ZC.value))
            }) : gz;
            CC = CC.update({
              add: [wC.range(ZC.value.from, ZC.value.to)]
            })
          } else ZC.is(zz) && (CC = CC.update({
            filter: (CC, zC) => ZC.value.from != CC || ZC.value.to != zC,
            filterFrom: ZC.value.from,
            filterTo: ZC.value.to
          }));
        return zC.selection && (CC = wz(CC, zC.selection.main.head)), CC
      },
      provide: CC => nC.j.gC.from(CC),
      toJSON(CC, zC) {
        let ZC = [];
        return CC.between(0, zC.doc.length, ((CC, zC) => {
          ZC.push(CC, zC)
        })), ZC
      },
      fromJSON(CC) {
        if (!Array.isArray(CC) || CC.length % 2) throw new RangeError("Invalid JSON for fold state");
        let zC = [];
        for (let ZC = 0; ZC < CC.length;) {
          let QC = CC[ZC++],
            wC = CC[ZC++];
          if ("number" != typeof QC || "number" != typeof wC) throw new RangeError("Invalid JSON for fold state");
          zC.push(gz.range(QC, wC))
        }
        return nC.e.set(zC, !0)
      }
    });

    function wz(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zC,
        QC = !1;
      return CC.between(zC, ZC, ((CC, wC) => {
        CC < ZC && wC > zC && (QC = !0)
      })), QC ? CC.update({
        filterFrom: zC,
        filterTo: ZC,
        filter: (CC, QC) => CC >= ZC || QC <= zC
      }) : CC
    }

    function bz(CC, zC, ZC) {
      var QC;
      let wC = null;
      return null === (QC = CC.field(Qz, !1)) || void 0 === QC || QC.between(zC, ZC, ((CC, zC) => {
        (!wC || wC.from > CC) && (wC = {
          from: CC,
          to: zC
        })
      })), wC
    }

    function nz(CC, zC, ZC) {
      let QC = !1;
      return CC.between(zC, zC, ((CC, wC) => {
        CC == zC && wC == ZC && (QC = !0)
      })), QC
    }

    function fz(CC, zC) {
      return CC.field(Qz, !1) ? zC : zC.concat(bC.w.appendConfig.of(Nz()))
    }

    function oz(CC, zC) {
      let ZC = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        QC = CC.state.doc.lineAt(zC.from).number,
        wC = CC.state.doc.lineAt(zC.to).number;
      return nC.j.announce.of(`${CC.state.phrase(ZC?"Folded lines":"Unfolded lines")} ${QC} ${CC.state.phrase("to")} ${wC}.`)
    }
    const qz = [{
        key: "Ctrl-Shift-[",
        mac: "Cmd-Alt-[",
        run: CC => {
          for (let zC of Zz(CC)) {
            let ZC = kC(CC.state, zC.from, zC.to);
            if (ZC) return CC.dispatch({
              effects: fz(CC.state, [Cz.of(ZC), oz(CC, ZC)])
            }), !0
          }
          return !1
        }
      }, {
        key: "Ctrl-Shift-]",
        mac: "Cmd-Alt-]",
        run: CC => {
          if (!CC.state.field(Qz, !1)) return !1;
          let zC = [];
          for (let ZC of Zz(CC)) {
            let QC = bz(CC.state, ZC.from, ZC.to);
            QC && zC.push(zz.of(QC), oz(CC, QC, !1))
          }
          return zC.length && CC.dispatch({
            effects: zC
          }), zC.length > 0
        }
      }, {
        key: "Ctrl-Alt-[",
        run: CC => {
          let {
            state: zC
          } = CC, ZC = [];
          for (let QC = 0; QC < zC.doc.length;) {
            let wC = CC.lineBlockAt(QC),
              bC = kC(zC, wC.from, wC.to);
            bC && ZC.push(Cz.of(bC)), QC = (bC ? CC.lineBlockAt(bC.to) : wC).to + 1
          }
          return ZC.length && CC.dispatch({
            effects: fz(CC.state, ZC)
          }), !!ZC.length
        }
      }, {
        key: "Ctrl-Alt-]",
        run: CC => {
          let zC = CC.state.field(Qz, !1);
          if (!zC || !zC.size) return !1;
          let ZC = [];
          return zC.between(0, CC.state.doc.length, ((CC, zC) => {
            ZC.push(zz.of({
              from: CC,
              to: zC
            }))
          })), CC.dispatch({
            effects: ZC
          }), !0
        }
      }],
      Fz = {
        placeholderDOM: null,
        preparePlaceholder: null,
        placeholderText: "\u2026"
      },
      Wz = bC.n.define({
        combine: CC => (0, bC.P)(CC, Fz)
      });

    function Nz(CC) {
      let zC = [Qz, Rz];
      return CC && zC.push(Wz.of(CC)), zC
    }

    function Mz(CC, zC) {
      let {
        state: ZC
      } = CC, QC = ZC.facet(Wz), wC = zC => {
        let ZC = CC.lineBlockAt(CC.posAtDOM(zC.target)),
          QC = bz(CC.state, ZC.from, ZC.to);
        QC && CC.dispatch({
          effects: zz.of(QC)
        }), zC.preventDefault()
      };
      if (QC.placeholderDOM) return QC.placeholderDOM(CC, wC, zC);
      let bC = document.createElement("span");
      return bC.textContent = QC.placeholderText, bC.setAttribute("aria-label", ZC.phrase("folded code")), bC.title = ZC.phrase("unfold"), bC.className = "cm-foldPlaceholder", bC.onclick = wC, bC
    }
    const gz = nC.e.replace({
      widget: new class extends nC.r {
        toDOM(CC) {
          return Mz(CC, null)
        }
      }
    });
    class Sz extends nC.r {
      constructor(CC) {
        super(), this.value = CC
      }
      eq(CC) {
        return this.value == CC.value
      }
      toDOM(CC) {
        return Mz(CC, this.value)
      }
    }
    const pz = {
      openText: "\u2304",
      closedText: "\u203a",
      markerDOM: null,
      domEventHandlers: {},
      foldingChanged: () => !1
    };
    class Pz extends nC.k {
      constructor(CC, zC) {
        super(), this.config = CC, this.open = zC
      }
      eq(CC) {
        return this.config == CC.config && this.open == CC.open
      }
      toDOM(CC) {
        if (this.config.markerDOM) return this.config.markerDOM(this.open);
        let zC = document.createElement("span");
        return zC.textContent = this.open ? this.config.openText : this.config.closedText, zC.title = CC.state.phrase(this.open ? "Fold line" : "Unfold line"), zC
      }
    }

    function Gz() {
      let CC = {
          ...pz,
          ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        },
        zC = new Pz(CC, !0),
        ZC = new Pz(CC, !1),
        QC = nC.o.fromClass(class {
          constructor(CC) {
            this.from = CC.viewport.from, this.markers = this.buildMarkers(CC)
          }
          update(zC) {
            (zC.docChanged || zC.viewportChanged || zC.startState.facet(eC) != zC.state.facet(eC) || zC.startState.field(Qz, !1) != zC.state.field(Qz, !1) || SC(zC.startState) != SC(zC.state) || CC.foldingChanged(zC)) && (this.markers = this.buildMarkers(zC.view))
          }
          buildMarkers(CC) {
            let QC = new bC.s;
            for (let wC of CC.viewportLineBlocks) {
              let bC = bz(CC.state, wC.from, wC.to) ? ZC : kC(CC.state, wC.from, wC.to) ? zC : null;
              bC && QC.add(wC.from, wC.from, bC)
            }
            return QC.finish()
          }
        }),
        {
          domEventHandlers: wC
        } = CC;
      return [QC, (0, nC.I)({
        class: "cm-foldGutter",
        markers(CC) {
          var zC;
          return (null === (zC = CC.plugin(QC)) || void 0 === zC ? void 0 : zC.markers) || bC.u.empty
        },
        initialSpacer: () => new Pz(CC, !1),
        domEventHandlers: {
          ...wC,
          click: (CC, zC, ZC) => {
            if (wC.click && wC.click(CC, zC, ZC)) return !0;
            let QC = bz(CC.state, zC.from, zC.to);
            if (QC) return CC.dispatch({
              effects: zz.of(QC)
            }), !0;
            let bC = kC(CC.state, zC.from, zC.to);
            return !!bC && (CC.dispatch({
              effects: Cz.of(bC)
            }), !0)
          }
        }
      }), Nz()]
    }
    const Rz = nC.j.baseTheme({
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
    class Az {
      constructor(CC, zC) {
        let ZC;

        function QC(CC) {
          let zC = oC.e.newName();
          return (ZC || (ZC = Object.create(null)))["." + zC] = CC, zC
        }
        this.specs = CC;
        const wC = "string" == typeof zC.all ? zC.all : zC.all ? QC(zC.all) : void 0,
          bC = zC.scope;
        this.scope = bC instanceof NC ? CC => CC.prop(qC) == bC.data : bC ? CC => CC == bC : void 0, this.style = (0, fC.g)(CC.map((CC => ({
          tag: CC.tag,
          class: CC.class || QC(Object.assign({}, CC, {
            tag: null
          }))
        }))), {
          all: wC
        }).style, this.module = ZC ? new oC.e(ZC) : null, this.themeType = zC.themeType
      }
      static define(CC, zC) {
        return new Az(CC, zC || {})
      }
    }
    const xz = bC.n.define(),
      Jz = bC.n.define({
        combine: CC => CC.length ? [CC[0]] : null
      });

    function Iz(CC) {
      let zC = CC.facet(xz);
      return zC.length ? zC : CC.facet(Jz)
    }

    function iz(CC, zC) {
      let ZC, QC = [ez];
      return CC instanceof Az && (CC.module && QC.push(nC.j.styleModule.of(CC.module)), ZC = CC.themeType), (null === zC || void 0 === zC ? void 0 : zC.fallback) ? QC.push(Jz.of(CC)) : ZC ? QC.push(xz.computeN([nC.j.darkTheme], (zC => zC.facet(nC.j.darkTheme) == ("dark" == ZC) ? [CC] : []))) : QC.push(xz.of(CC)), QC
    }
    class vz {
      constructor(CC) {
        this.markCache = Object.create(null), this.tree = SC(CC.state), this.gC = this.buildDeco(CC, Iz(CC.state)), this.decoratedTo = CC.viewport.to
      }
      update(CC) {
        let zC = SC(CC.state),
          ZC = Iz(CC.state),
          QC = ZC != Iz(CC.startState),
          {
            viewport: wC
          } = CC.view,
          bC = CC.changes.mapPos(this.decoratedTo, 1);
        zC.length < wC.to && !QC && zC.type == this.tree.type && bC >= wC.to ? (this.gC = this.gC.map(CC.changes), this.decoratedTo = bC) : (zC != this.tree || CC.viewportChanged || QC) && (this.tree = zC, this.gC = this.buildDeco(CC.view, ZC), this.decoratedTo = wC.to)
      }
      buildDeco(CC, zC) {
        if (!zC || !this.tree.length) return nC.e.none;
        let ZC = new bC.s;
        for (let {
            from: QC,
            to: wC
          }
          of CC.Y_)(0, fC.b)(this.tree, zC, ((CC, zC, QC) => {
          ZC.add(CC, zC, this.markCache[QC] || (this.markCache[QC] = nC.e.mark({
            class: QC
          })))
        }), QC, wC);
        return ZC.finish()
      }
    }
    const ez = bC.r.high(nC.o.fromClass(vz, {
        gC: CC => CC.gC
      })),
      hz = Az.define([{
        tag: fC.i.meta,
        color: "#404740"
      }, {
        tag: fC.i.link,
        textDecoration: "underline"
      }, {
        tag: fC.i.heading,
        textDecoration: "underline",
        fontWeight: "bold"
      }, {
        tag: fC.i.emphasis,
        fontStyle: "italic"
      }, {
        tag: fC.i.strong,
        fontWeight: "bold"
      }, {
        tag: fC.i.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: fC.i.keyword,
        color: "#708"
      }, {
        tag: [fC.i.atom, fC.i.bool, fC.i.url, fC.i.contentSeparator, fC.i.labelName],
        color: "#219"
      }, {
        tag: [fC.i.literal, fC.i.inserted],
        color: "#164"
      }, {
        tag: [fC.i.string, fC.i.deleted],
        color: "#a11"
      }, {
        tag: [fC.i.regexp, fC.i.escape, fC.i.special(fC.i.string)],
        color: "#e40"
      }, {
        tag: fC.i.definition(fC.i.variableName),
        color: "#00f"
      }, {
        tag: fC.i.local(fC.i.variableName),
        color: "#30a"
      }, {
        tag: [fC.i.typeName, fC.i.namespace],
        color: "#085"
      }, {
        tag: fC.i.className,
        color: "#167"
      }, {
        tag: [fC.i.special(fC.i.variableName), fC.i.macroName],
        color: "#256"
      }, {
        tag: fC.i.definition(fC.i.propertyName),
        color: "#00c"
      }, {
        tag: fC.i.comment,
        color: "#940"
      }, {
        tag: fC.i.invalid,
        color: "#f00"
      }]),
      Kz = nC.j.baseTheme({
        "&.cm-focused .cm-matchingBracket": {
          backgroundColor: "#328c8252"
        },
        "&.cm-focused .cm-nonmatchingBracket": {
          backgroundColor: "#bb555544"
        }
      }),
      Yz = 1e4,
      dz = "()[]{}",
      mz = bC.n.define({
        combine: CC => (0, bC.P)(CC, {
          afterCursor: !0,
          brackets: dz,
          maxScanDistance: Yz,
          renderMatch: lz
        })
      }),
      Hz = nC.e.mark({
        class: "cm-matchingBracket"
      }),
      Ez = nC.e.mark({
        class: "cm-nonmatchingBracket"
      });

    function lz(CC) {
      let zC = [],
        ZC = CC.matched ? Hz : Ez;
      return zC.push(ZC.range(CC.start.from, CC.start.to)), CC.end && zC.push(ZC.range(CC.end.from, CC.end.to)), zC
    }

    function Xz(CC) {
      let zC = [],
        ZC = CC.facet(mz);
      for (let QC of CC.selection.np) {
        if (!QC.empty) continue;
        let wC = az(CC, QC.head, -1, ZC) || QC.head > 0 && az(CC, QC.head - 1, 1, ZC) || ZC.afterCursor && (az(CC, QC.head, 1, ZC) || QC.head < CC.doc.length && az(CC, QC.head + 1, -1, ZC));
        wC && (zC = zC.concat(ZC.renderMatch(wC, CC)))
      }
      return nC.e.set(zC, !0)
    }
    const cz = [nC.o.fromClass(class {
      constructor(CC) {
        this.paused = !1, this.gC = Xz(CC.state)
      }
      update(CC) {
        (CC.docChanged || CC.selectionSet || this.paused) && (CC.view.composing ? (this.gC = this.gC.map(CC.changes), this.paused = !0) : (this.gC = Xz(CC.state), this.paused = !1))
      }
    }, {
      gC: CC => CC.gC
    }), Kz];

    function uz() {
      let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [mz.of(CC), cz]
    }
    const rz = new wC.g;

    function sz(CC, zC, ZC) {
      let QC = CC.prop(zC < 0 ? wC.g.openedBy : wC.g.closedBy);
      if (QC) return QC;
      if (1 == CC.name.length) {
        let QC = ZC.indexOf(CC.name);
        if (QC > -1 && QC % 2 == (zC < 0 ? 1 : 0)) return [ZC[QC + zC]]
      }
      return null
    }

    function Tz(CC) {
      let zC = CC.type.prop(rz);
      return zC ? zC(CC.node) : CC
    }

    function az(CC, zC, ZC) {
      let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        wC = QC.maxScanDistance || Yz,
        bC = QC.brackets || dz,
        nC = SC(CC),
        fC = nC.resolveInner(zC, ZC);
      for (let oC = fC; oC; oC = oC.parent) {
        let QC = sz(oC.type, ZC, bC);
        if (QC && oC.from < oC.to) {
          let wC = Tz(oC);
          if (wC && (ZC > 0 ? zC >= wC.from && zC < wC.to : zC > wC.from && zC <= wC.to)) return tz(CC, zC, ZC, oC, wC, QC, bC)
        }
      }
      return function(CC, zC, ZC, QC, wC, bC, nC) {
        if (ZC < 0 ? !zC : zC == CC.doc.length) return null;
        let fC = ZC < 0 ? CC.sliceDoc(zC - 1, zC) : CC.sliceDoc(zC, zC + 1),
          oC = nC.indexOf(fC);
        if (oC < 0 || oC % 2 == 0 != ZC > 0) return null;
        let qC = {
            from: ZC < 0 ? zC - 1 : zC,
            to: ZC > 0 ? zC + 1 : zC
          },
          FC = CC.doc.iterRange(zC, ZC > 0 ? CC.doc.length : 0),
          WC = 0;
        for (let NC = 0; !FC.next().done && NC <= bC;) {
          let CC = FC.value;
          ZC < 0 && (NC += CC.length);
          let bC = zC + NC * ZC;
          for (let zC = ZC > 0 ? 0 : CC.length - 1, fC = ZC > 0 ? CC.length : -1; zC != fC; zC += ZC) {
            let fC = nC.indexOf(CC[zC]);
            if (!(fC < 0 || QC.resolveInner(bC + zC, 1).type != wC))
              if (fC % 2 == 0 == ZC > 0) WC++;
              else {
                if (1 == WC) return {
                  start: qC,
                  end: {
                    from: bC + zC,
                    to: bC + zC + 1
                  },
                  matched: fC >> 1 == oC >> 1
                };
                WC--
              }
          }
          ZC > 0 && (NC += CC.length)
        }
        return FC.done ? {
          start: qC,
          matched: !1
        } : null
      }(CC, zC, ZC, nC, fC.type, wC, bC)
    }

    function tz(CC, zC, ZC, QC, wC, bC, nC) {
      let fC = QC.parent,
        oC = {
          from: wC.from,
          to: wC.to
        },
        qC = 0,
        FC = null === fC || void 0 === fC ? void 0 : fC.cursor();
      if (FC && (ZC < 0 ? FC.childBefore(QC.from) : FC.childAfter(QC.to)))
        do {
          if (ZC < 0 ? FC.to <= QC.from : FC.from >= QC.to) {
            if (0 == qC && bC.indexOf(FC.type.name) > -1 && FC.from < FC.to) {
              let CC = Tz(FC);
              return {
                start: oC,
                end: CC ? {
                  from: CC.from,
                  to: CC.to
                } : void 0,
                matched: !0
              }
            }
            if (sz(FC.type, ZC, nC)) qC++;
            else if (sz(FC.type, -ZC, nC)) {
              if (0 == qC) {
                let CC = Tz(FC);
                return {
                  start: oC,
                  end: CC && CC.from < CC.to ? {
                    from: CC.from,
                    to: CC.to
                  } : void 0,
                  matched: !1
                }
              }
              qC--
            }
          }
        } while (ZC < 0 ? FC.prevSibling() : FC.nextSibling());
      return {
        start: oC,
        matched: !1
      }
    }
    const Dz = Object.create(null),
      jz = [wC.k.none],
      yz = [],
      Lz = Object.create(null),
      Uz = Object.create(null);
    for (let [kz, Vz] of [
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
      ]) Uz[kz] = Oz(Dz, Vz);

    function Bz(CC, zC) {
      yz.indexOf(CC) > -1 || (yz.push(CC), console.warn(zC))
    }

    function Oz(CC, zC) {
      let ZC = [];
      for (let wC of zC.split(" ")) {
        let zC = [];
        for (let ZC of wC.split(".")) {
          let QC = CC[ZC] || fC.i[ZC];
          QC ? "function" == typeof QC ? zC.length ? zC = zC.map(QC) : Bz(ZC, `Modifier ${ZC} used at start of tag`) : zC.length ? Bz(ZC, `Tag ${ZC} used as modifier`) : zC = Array.isArray(QC) ? QC : [QC] : Bz(ZC, `Unknown highlighting tag ${ZC}`)
        }
        for (let CC of zC) ZC.push(CC)
      }
      if (!ZC.length) return 0;
      let QC = zC.replace(/ /g, "_"),
        bC = QC + " " + ZC.map((CC => CC.id)),
        nC = Lz[bC];
      if (nC) return nC.id;
      let oC = Lz[bC] = wC.k.define({
        id: jz.length,
        name: QC,
        props: [(0, fC.c)({
          [QC]: ZC
        })]
      });
      return jz.push(oC), oC.id
    }
    nC.i.RTL, nC.i.LTR
  },
  41169: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => RC,
      d: () => IC
    });
    var QC = ZC(41128),
      wC = ZC(41125),
      bC = ZC(41139);
    class nC {
      constructor(CC, zC, ZC) {
        this.from = CC, this.to = zC, this.diagnostic = ZC
      }
    }
    class fC {
      constructor(CC, zC, ZC) {
        this.diagnostics = CC, this.panel = zC, this.selected = ZC
      }
      static init(CC, zC, ZC) {
        let bC = ZC.facet(xC).markerFilter;
        bC && (CC = bC(CC, ZC));
        let nC = CC.slice().sort(((CC, zC) => CC.from - zC.from || CC.to - zC.to)),
          qC = new wC.s,
          FC = [],
          WC = 0,
          NC = ZC.doc.iter(),
          MC = 0,
          gC = ZC.doc.length;
        for (let wC = 0;;) {
          let CC, zC, ZC = wC == nC.length ? null : nC[wC];
          if (!ZC && !FC.length) break;
          if (FC.length) CC = WC, zC = FC.reduce(((CC, zC) => Math.min(CC, zC.to)), ZC && ZC.from > CC ? ZC.from : 1e8);
          else {
            if (CC = ZC.from, CC > gC) break;
            zC = ZC.to, FC.push(ZC), wC++
          }
          for (; wC < nC.length;) {
            let ZC = nC[wC];
            if (ZC.from != CC || !(ZC.to > ZC.from || ZC.to == CC)) {
              zC = Math.min(ZC.from, zC);
              break
            }
            FC.push(ZC), wC++, zC = Math.min(ZC.to, zC)
          }
          zC = Math.min(zC, gC);
          let bC = !1;
          if (FC.some((ZC => ZC.from == CC && (ZC.to == zC || zC == gC))) && (bC = CC == zC, !bC && zC - CC < 10)) {
            let ZC = CC - (MC + NC.value.length);
            ZC > 0 && (NC.next(ZC), MC = CC);
            for (let QC = CC;;) {
              if (QC >= zC) {
                bC = !0;
                break
              }
              if (!NC.lineBreak && MC + NC.value.length > QC) break;
              QC = MC + NC.value.length, MC += NC.value.length, NC.next()
            }
          }
          let fC = EC(FC);
          if (bC) qC.add(CC, CC, QC.e.widget({
            widget: new eC(fC),
            diagnostics: FC.slice()
          }));
          else {
            let ZC = FC.reduce(((CC, zC) => zC.markClass ? CC + " " + zC.markClass : CC), "");
            qC.add(CC, zC, QC.e.mark({
              class: "cm-lintRange cm-lintRange-" + fC + ZC,
              diagnostics: FC.slice(),
              inclusiveEnd: FC.some((CC => CC.to > zC))
            }))
          }
          if (WC = zC, WC == gC) break;
          for (let QC = 0; QC < FC.length; QC++) FC[QC].to <= WC && FC.splice(QC--, 1)
        }
        let SC = qC.finish();
        return new fC(SC, zC, oC(SC))
      }
    }

    function oC(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        QC = null;
      return CC.between(ZC, 1e9, ((CC, ZC, wC) => {
        let {
          spec: bC
        } = wC;
        if (!(zC && bC.diagnostics.indexOf(zC) < 0))
          if (QC) {
            if (bC.diagnostics.indexOf(QC.diagnostic) < 0) return !1;
            QC = new nC(QC.from, ZC, QC.diagnostic)
          } else QC = new nC(CC, ZC, zC || bC.diagnostics[0])
      })), QC
    }

    function qC(CC, zC) {
      let ZC = zC.pos,
        QC = zC.end || ZC,
        wC = CC.state.facet(xC).hideOn(CC, ZC, QC);
      if (null != wC) return wC;
      let bC = CC.startState.doc.lineAt(zC.pos);
      return !(!CC.effects.some((CC => CC.is(WC))) && !CC.changes.touchesRange(bC.from, Math.max(bC.to, QC)))
    }

    function FC(CC, zC) {
      return CC.field(gC, !1) ? zC : zC.concat(wC.w.appendConfig.of(lC))
    }
    const WC = wC.w.define(),
      NC = wC.w.define(),
      MC = wC.w.define(),
      gC = wC.A.define({
        create: () => new fC(QC.e.none, null, null),
        update(CC, zC) {
          if (zC.docChanged && CC.diagnostics.size) {
            let ZC = CC.diagnostics.map(zC.changes),
              QC = null,
              wC = CC.panel;
            if (CC.selected) {
              let wC = zC.changes.mapPos(CC.selected.from, 1);
              QC = oC(ZC, CC.selected.diagnostic, wC) || oC(ZC, null, wC)
            }!ZC.size && wC && zC.state.facet(xC).autoPanel && (wC = null), CC = new fC(ZC, wC, QC)
          }
          for (let ZC of zC.effects)
            if (ZC.is(WC)) {
              let QC = zC.state.facet(xC).autoPanel ? ZC.value.length ? KC.open : null : CC.panel;
              CC = fC.init(ZC.value, QC, zC.state)
            } else ZC.is(NC) ? CC = new fC(CC.diagnostics, ZC.value ? KC.open : null, CC.selected) : ZC.is(MC) && (CC = new fC(CC.diagnostics, CC.panel, ZC.value));
          return CC
        },
        provide: CC => [QC.gb.from(CC, (CC => CC.panel)), QC.j.gC.from(CC, (CC => CC.diagnostics))]
      });
    const SC = QC.e.mark({
      class: "cm-lintRange cm-lintRange-active"
    });

    function pC(CC, zC, ZC) {
      let QC, {
          diagnostics: wC
        } = CC.state.field(gC),
        bC = -1,
        nC = -1;
      wC.between(zC - (ZC < 0 ? 1 : 0), zC + (ZC > 0 ? 1 : 0), ((CC, wC, fC) => {
        let {
          spec: oC
        } = fC;
        if (zC >= CC && zC <= wC && (CC == wC || (zC > CC || ZC > 0) && (zC < wC || ZC < 0))) return QC = oC.diagnostics, bC = CC, nC = wC, !1
      }));
      let fC = CC.state.facet(xC).tooltipFilter;
      return QC && fC && (QC = fC(QC, CC.state)), QC ? {
        pos: bC,
        end: nC,
        above: CC.state.doc.lineAt(bC).to < nC,
        create: () => ({
          dom: PC(CC, QC)
        })
      } : null
    }

    function PC(CC, zC) {
      return (0, bC.b)("ul", {
        class: "cm-tooltip-lint"
      }, zC.map((zC => vC(CC, zC, !1))))
    }
    const GC = CC => {
        let zC = CC.state.field(gC, !1);
        return !(!zC || !zC.panel) && (CC.dispatch({
          effects: NC.of(!1)
        }), !0)
      },
      RC = [{
        key: "Mod-Shift-m",
        run: CC => {
          let zC = CC.state.field(gC, !1);
          zC && zC.panel || CC.dispatch({
            effects: FC(CC.state, [NC.of(!0)])
          });
          let ZC = (0, QC.A)(CC, KC.open);
          return ZC && ZC.dom.querySelector(".cm-panel-lint ul").focus(), !0
        },
        preventDefault: !0
      }, {
        key: "F8",
        run: CC => {
          let zC = CC.state.field(gC, !1);
          if (!zC) return !1;
          let ZC = CC.state.selection.main,
            QC = oC(zC.diagnostics, null, ZC.to + 1);
          return !(!QC && (QC = oC(zC.diagnostics, null, 0), !QC || QC.from == ZC.from && QC.to == ZC.to)) && (CC.dispatch({
            selection: {
              anchor: QC.from,
              head: QC.to
            },
            scrollIntoView: !0
          }), !0)
        }
      }],
      AC = QC.o.fromClass(class {
        constructor(CC) {
          this.view = CC, this.timeout = -1, this.set = !0;
          let {
            delay: zC
          } = CC.state.facet(xC);
          this.lintTime = Date.now() + zC, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, zC)
        }
        run() {
          clearTimeout(this.timeout);
          let CC = Date.now();
          if (CC < this.lintTime - 10) this.timeout = setTimeout(this.run, this.lintTime - CC);
          else {
            this.set = !1;
            let {
              state: CC
            } = this.view, {
              sources: zC
            } = CC.facet(xC);
            zC.length && function(CC, zC, ZC) {
              let QC = [],
                wC = -1;
              for (let bC of CC) bC.then((ZC => {
                QC.push(ZC), clearTimeout(wC), QC.length == CC.length ? zC(QC) : wC = setTimeout((() => zC(QC)), 200)
              }), ZC)
            }(zC.map((CC => Promise.resolve(CC(this.view)))), (zC => {
              this.view.state.doc == CC.doc && this.view.dispatch(function(CC, zC) {
                return {
                  effects: FC(CC, [WC.of(zC)])
                }
              }(this.view.state, zC.reduce(((CC, zC) => CC.concat(zC)))))
            }), (CC => {
              (0, QC.Y)(this.view.state, CC)
            }))
          }
        }
        update(CC) {
          let zC = CC.state.facet(xC);
          (CC.docChanged || zC != CC.startState.facet(xC) || zC.needsRefresh && zC.needsRefresh(CC)) && (this.lintTime = Date.now() + zC.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, zC.delay)))
        }
        force() {
          this.set && (this.lintTime = Date.now(), this.run())
        }
        destroy() {
          clearTimeout(this.timeout)
        }
      });
    const xC = wC.n.define({
      combine: CC => ({
        sources: CC.map((CC => CC.source)).filter((CC => null != CC)),
        ...(0, wC.P)(CC.map((CC => CC.config)), {
          delay: 750,
          markerFilter: null,
          tooltipFilter: null,
          needsRefresh: null,
          hideOn: () => null
        }, {
          delay: Math.max,
          markerFilter: JC,
          tooltipFilter: JC,
          needsRefresh: (CC, zC) => CC ? zC ? ZC => CC(ZC) || zC(ZC) : CC : zC,
          hideOn: (CC, zC) => CC ? zC ? (ZC, QC, wC) => CC(ZC, QC, wC) || zC(ZC, QC, wC) : CC : zC,
          autoPanel: (CC, zC) => CC || zC
        })
      })
    });

    function JC(CC, zC) {
      return CC ? zC ? (ZC, QC) => zC(CC(ZC, QC), QC) : CC : zC
    }

    function IC(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return [xC.of({
        source: CC,
        config: zC
      }), AC, lC]
    }

    function iC(CC) {
      let zC = [];
      if (CC) CC: for (let {
          name: ZC
        }
        of CC) {
        for (let CC = 0; CC < ZC.length; CC++) {
          let QC = ZC[CC];
          if (/[a-zA-Z]/.test(QC) && !zC.some((CC => CC.toLowerCase() == QC.toLowerCase()))) {
            zC.push(QC);
            continue CC
          }
        }
        zC.push("")
      }
      return zC
    }

    function vC(CC, zC, ZC) {
      var QC;
      let wC = ZC ? iC(zC.actions) : [];
      return (0, bC.b)("li", {
        class: "cm-diagnostic cm-diagnostic-" + zC.severity
      }, (0, bC.b)("span", {
        class: "cm-diagnosticText"
      }, zC.renderMessage ? zC.renderMessage(CC) : zC.message), null === (QC = zC.actions) || void 0 === QC ? void 0 : QC.map(((ZC, QC) => {
        let nC = !1,
          fC = QC => {
            if (QC.preventDefault(), nC) return;
            nC = !0;
            let wC = oC(CC.state.field(gC).diagnostics, zC);
            wC && ZC.apply(CC, wC.from, wC.to)
          },
          {
            name: qC
          } = ZC,
          FC = wC[QC] ? qC.indexOf(wC[QC]) : -1,
          WC = FC < 0 ? qC : [qC.slice(0, FC), (0, bC.b)("u", qC.slice(FC, FC + 1)), qC.slice(FC + 1)],
          NC = ZC.markClass ? " " + ZC.markClass : "";
        return (0, bC.b)("button", {
          type: "button",
          class: "cm-diagnosticAction" + NC,
          onclick: fC,
          onmousedown: fC,
          "aria-label": ` Action: ${qC}${FC<0?"":` (access key "${wC[QC]})"`}.`
        }, WC)
      })), zC.source && (0, bC.b)("div", {
        class: "cm-diagnosticSource"
      }, zC.source))
    }
    class eC extends QC.r {
      constructor(CC) {
        super(), this.sev = CC
      }
      eq(CC) {
        return CC.sev == this.sev
      }
      toDOM() {
        return (0, bC.b)("span", {
          class: "cm-lintPoint cm-lintPoint-" + this.sev
        })
      }
    }
    class hC {
      constructor(CC, zC) {
        this.diagnostic = zC, this.id = "item_" + Math.floor(4294967295 * Math.random()).toString(16), this.dom = vC(CC, zC, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option")
      }
    }
    class KC {
      constructor(CC) {
        this.view = CC, this.items = [];
        this.list = (0, bC.b)("ul", {
          tabIndex: 0,
          role: "listbox",
          "aria-label": this.view.state.phrase("Diagnostics"),
          onkeydown: zC => {
            if (!(zC.ctrlKey || zC.altKey || zC.metaKey)) {
              if (27 == zC.keyCode) GC(this.view), this.view.focus();
              else if (38 == zC.keyCode || 33 == zC.keyCode) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
              else if (40 == zC.keyCode || 34 == zC.keyCode) this.moveSelection((this.selectedIndex + 1) % this.items.length);
              else if (36 == zC.keyCode) this.moveSelection(0);
              else if (35 == zC.keyCode) this.moveSelection(this.items.length - 1);
              else if (13 == zC.keyCode) this.view.focus();
              else {
                if (!(zC.keyCode >= 65 && zC.keyCode <= 90 && this.selectedIndex >= 0)) return;
                {
                  let {
                    diagnostic: ZC
                  } = this.items[this.selectedIndex], QC = iC(ZC.actions);
                  for (let wC = 0; wC < QC.length; wC++)
                    if (QC[wC].toUpperCase().charCodeAt(0) == zC.keyCode) {
                      let zC = oC(this.view.state.field(gC).diagnostics, ZC);
                      zC && ZC.actions[wC].apply(CC, zC.from, zC.to)
                    }
                }
              }
              zC.preventDefault()
            }
          },
          onclick: CC => {
            for (let zC = 0; zC < this.items.length; zC++) this.items[zC].dom.contains(CC.target) && this.moveSelection(zC)
          }
        }), this.dom = (0, bC.b)("div", {
          class: "cm-panel-lint"
        }, this.list, (0, bC.b)("button", {
          type: "button",
          name: "close",
          "aria-label": this.view.state.phrase("close"),
          onclick: () => GC(this.view)
        }, "\xd7")), this.update()
      }
      get selectedIndex() {
        let CC = this.view.state.field(gC).selected;
        if (!CC) return -1;
        for (let zC = 0; zC < this.items.length; zC++)
          if (this.items[zC].diagnostic == CC.diagnostic) return zC;
        return -1
      }
      update() {
        let {
          diagnostics: CC,
          selected: zC
        } = this.view.state.field(gC), ZC = 0, QC = !1, wC = null, bC = new Set;
        for (CC.between(0, this.view.state.doc.length, ((CC, nC, fC) => {
            let {
              spec: oC
            } = fC;
            for (let qC of oC.diagnostics) {
              if (bC.has(qC)) continue;
              bC.add(qC);
              let CC, nC = -1;
              for (let zC = ZC; zC < this.items.length; zC++)
                if (this.items[zC].diagnostic == qC) {
                  nC = zC;
                  break
                } nC < 0 ? (CC = new hC(this.view, qC), this.items.splice(ZC, 0, CC), QC = !0) : (CC = this.items[nC], nC > ZC && (this.items.splice(ZC, nC - ZC), QC = !0)), zC && CC.diagnostic == zC.diagnostic ? CC.dom.hasAttribute("aria-selected") || (CC.dom.setAttribute("aria-selected", "true"), wC = CC) : CC.dom.hasAttribute("aria-selected") && CC.dom.removeAttribute("aria-selected"), ZC++
            }
          })); ZC < this.items.length && !(1 == this.items.length && this.items[0].diagnostic.from < 0);) QC = !0, this.items.pop();
        0 == this.items.length && (this.items.push(new hC(this.view, {
          from: -1,
          to: -1,
          severity: "info",
          message: this.view.state.phrase("No diagnostics")
        })), QC = !0), wC ? (this.list.setAttribute("aria-activedescendant", wC.id), this.view.requestMeasure({
          key: this,
          read: () => ({
            sel: wC.dom.getBoundingClientRect(),
            panel: this.list.getBoundingClientRect()
          }),
          write: CC => {
            let {
              sel: zC,
              panel: ZC
            } = CC, QC = ZC.height / this.list.offsetHeight;
            zC.top < ZC.top ? this.list.scrollTop -= (ZC.top - zC.top) / QC : zC.bottom > ZC.bottom && (this.list.scrollTop += (zC.bottom - ZC.bottom) / QC)
          }
        })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), QC && this.sync()
      }
      sync() {
        let CC = this.list.firstChild;

        function zC() {
          let zC = CC;
          CC = zC.nextSibling, zC.remove()
        }
        for (let ZC of this.items)
          if (ZC.dom.parentNode == this.list) {
            for (; CC != ZC.dom;) zC();
            CC = ZC.dom.nextSibling
          } else this.list.insertBefore(ZC.dom, CC);
        for (; CC;) zC()
      }
      moveSelection(CC) {
        if (this.selectedIndex < 0) return;
        let zC = oC(this.view.state.field(gC).diagnostics, this.items[CC].diagnostic);
        zC && this.view.dispatch({
          selection: {
            anchor: zC.from,
            head: zC.to
          },
          scrollIntoView: !0,
          effects: MC.of(zC)
        })
      }
      static open(CC) {
        return new KC(CC)
      }
    }

    function YC(CC) {
      return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${arguments.length>1&&void 0!==arguments[1]?arguments[1]:'viewBox="0 0 40 40"'}>${encodeURIComponent(CC)}</svg>')`
    }

    function dC(CC) {
      return YC(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${CC}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"')
    }
    const mC = QC.j.baseTheme({
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
        backgroundImage: dC("#d11")
      },
      ".cm-lintRange-warning": {
        backgroundImage: dC("orange")
      },
      ".cm-lintRange-info": {
        backgroundImage: dC("#999")
      },
      ".cm-lintRange-hint": {
        backgroundImage: dC("#66d")
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

    function HC(CC) {
      return "error" == CC ? 4 : "warning" == CC ? 3 : "info" == CC ? 2 : 1
    }

    function EC(CC) {
      let zC = "hint",
        ZC = 1;
      for (let QC of CC) {
        let CC = HC(QC.severity);
        CC > ZC && (ZC = CC, zC = QC.severity)
      }
      return zC
    }
    QC.k;
    const lC = [gC, QC.j.gC.compute([gC], (CC => {
      let {
        selected: zC,
        panel: ZC
      } = CC.field(gC);
      return zC && ZC && zC.from != zC.to ? QC.e.set([SC.range(zC.from, zC.to)]) : QC.e.none
    })), (0, QC.Q)(pC, {
      hideOn: qC
    }), mC]
  },
  41165: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => kC,
      i: () => PC,
      l: () => VC
    });
    var QC = ZC(41128),
      wC = ZC(41125),
      bC = ZC(41139);
    const nC = "function" == typeof String.prototype.normalize ? CC => CC.normalize("NFKD") : CC => CC;
    class fC {
      constructor(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : CC.length,
          wC = arguments.length > 4 ? arguments[4] : void 0,
          bC = arguments.length > 5 ? arguments[5] : void 0;
        this.test = bC, this.value = {
          from: 0,
          to: 0
        }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = CC.iterRange(ZC, QC), this.bufferStart = ZC, this.normalize = wC ? CC => wC(nC(CC)) : nC, this.query = this.normalize(zC)
      }
      peek() {
        if (this.bufferPos == this.buffer.length) {
          if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
          this.bufferPos = 0, this.buffer = this.iter.value
        }
        return (0, wC.I)(this.buffer, this.bufferPos)
      }
      next() {
        for (; this.matches.length;) this.matches.pop();
        return this.nextOverlapping()
      }
      nextOverlapping() {
        for (;;) {
          let CC = this.peek();
          if (CC < 0) return this.done = !0, this;
          let zC = (0, wC.$)(CC),
            ZC = this.bufferStart + this.bufferPos;
          this.bufferPos += (0, wC.M)(CC);
          let QC = this.normalize(zC);
          if (QC.length)
            for (let wC = 0, bC = ZC;; wC++) {
              let CC = QC.charCodeAt(wC),
                nC = this.match(CC, bC, this.bufferPos + this.bufferStart);
              if (wC == QC.length - 1) {
                if (nC) return this.value = nC, this;
                break
              }
              bC == ZC && wC < zC.length && zC.charCodeAt(wC) == CC && bC++
            }
        }
      }
      match(CC, zC, ZC) {
        let QC = null;
        for (let wC = 0; wC < this.matches.length; wC += 2) {
          let zC = this.matches[wC],
            bC = !1;
          this.query.charCodeAt(zC) == CC && (zC == this.query.length - 1 ? QC = {
            from: this.matches[wC + 1],
            to: ZC
          } : (this.matches[wC]++, bC = !0)), bC || (this.matches.splice(wC, 2), wC -= 2)
        }
        return this.query.charCodeAt(0) == CC && (1 == this.query.length ? QC = {
          from: zC,
          to: ZC
        } : this.matches.push(1, zC)), QC && this.test && !this.test(QC.from, QC.to, this.buffer, this.bufferStart) && (QC = null), QC
      }
    }
    "undefined" != typeof Symbol && (fC.prototype[Symbol.iterator] = function() {
      return this
    });
    const oC = {
        from: -1,
        to: -1,
        match: /.*/.exec("")
      },
      qC = "gm" + (null == /x/.unicode ? "" : "u");
    class FC {
      constructor(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : CC.length;
        if (this.text = CC, this.to = wC, this.curLine = "", this.done = !1, this.value = oC, /\\[sWDnr]|\n|\r|\[\^/.test(zC)) return new MC(CC, zC, ZC, QC, wC);
        this.re = new RegExp(zC, qC + ((null === ZC || void 0 === ZC ? void 0 : ZC.ignoreCase) ? "i" : "")), this.test = null === ZC || void 0 === ZC ? void 0 : ZC.test, this.iter = CC.iter();
        let bC = CC.lineAt(QC);
        this.curLineStart = bC.from, this.matchPos = gC(CC, QC), this.getLine(this.curLineStart)
      }
      getLine(CC) {
        this.iter.next(CC), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next())
      }
      nextLine() {
        this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0)
      }
      next() {
        for (let CC = this.matchPos - this.curLineStart;;) {
          this.re.lastIndex = CC;
          let zC = this.matchPos <= this.to && this.re.exec(this.curLine);
          if (zC) {
            let ZC = this.curLineStart + zC.index,
              QC = ZC + zC[0].length;
            if (this.matchPos = gC(this.text, QC + (ZC == QC ? 1 : 0)), ZC == this.curLineStart + this.curLine.length && this.nextLine(), (ZC < QC || ZC > this.value.to) && (!this.test || this.test(ZC, QC, zC))) return this.value = {
              from: ZC,
              to: QC,
              match: zC
            }, this;
            CC = this.matchPos - this.curLineStart
          } else {
            if (!(this.curLineStart + this.curLine.length < this.to)) return this.done = !0, this;
            this.nextLine(), CC = 0
          }
        }
      }
    }
    const WC = new WeakMap;
    class NC {
      constructor(CC, zC) {
        this.from = CC, this.text = zC
      }
      get to() {
        return this.from + this.text.length
      }
      static get(CC, zC, ZC) {
        let QC = WC.get(CC);
        if (!QC || QC.from >= ZC || QC.to <= zC) {
          let QC = new NC(zC, CC.sliceString(zC, ZC));
          return WC.set(CC, QC), QC
        }
        if (QC.from == zC && QC.to == ZC) return QC;
        let {
          text: wC,
          from: bC
        } = QC;
        return bC > zC && (wC = CC.sliceString(zC, bC) + wC, bC = zC), QC.to < ZC && (wC += CC.sliceString(QC.to, ZC)), WC.set(CC, new NC(bC, wC)), new NC(zC, wC.slice(zC - bC, ZC - bC))
      }
    }
    class MC {
      constructor(CC, zC, ZC, QC, wC) {
        this.text = CC, this.to = wC, this.done = !1, this.value = oC, this.matchPos = gC(CC, QC), this.re = new RegExp(zC, qC + ((null === ZC || void 0 === ZC ? void 0 : ZC.ignoreCase) ? "i" : "")), this.test = null === ZC || void 0 === ZC ? void 0 : ZC.test, this.flat = NC.get(CC, QC, this.chunkEnd(QC + 5e3))
      }
      chunkEnd(CC) {
        return CC >= this.to ? this.to : this.text.lineAt(CC).to
      }
      next() {
        for (;;) {
          let CC = this.re.lastIndex = this.matchPos - this.flat.from,
            zC = this.re.exec(this.flat.text);
          if (zC && !zC[0] && zC.index == CC && (this.re.lastIndex = CC + 1, zC = this.re.exec(this.flat.text)), zC) {
            let CC = this.flat.from + zC.index,
              ZC = CC + zC[0].length;
            if ((this.flat.to >= this.to || zC.index + zC[0].length <= this.flat.text.length - 10) && (!this.test || this.test(CC, ZC, zC))) return this.value = {
              from: CC,
              to: ZC,
              match: zC
            }, this.matchPos = gC(this.text, ZC + (CC == ZC ? 1 : 0)), this
          }
          if (this.flat.to == this.to) return this.done = !0, this;
          this.flat = NC.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + 2 * this.flat.text.length))
        }
      }
    }

    function gC(CC, zC) {
      if (zC >= CC.length) return zC;
      let ZC, QC = CC.lineAt(zC);
      for (; zC < QC.to && (ZC = QC.text.charCodeAt(zC - QC.from)) >= 56320 && ZC < 57344;) zC++;
      return zC
    }
    "undefined" != typeof Symbol && (FC.prototype[Symbol.iterator] = MC.prototype[Symbol.iterator] = function() {
      return this
    });
    const SC = {
        highlightWordAroundCursor: !1,
        minSelectionLength: 1,
        maxMatches: 100,
        wholeWords: !1
      },
      pC = wC.n.define({
        combine: CC => (0, wC.P)(CC, SC, {
          highlightWordAroundCursor: (CC, zC) => CC || zC,
          minSelectionLength: Math.min,
          maxMatches: Math.min
        })
      });

    function PC(CC) {
      let zC = [JC, xC];
      return CC && zC.push(pC.of(CC)), zC
    }
    const GC = QC.e.mark({
        class: "cm-selectionMatch"
      }),
      RC = QC.e.mark({
        class: "cm-selectionMatch cm-selectionMatch-main"
      });

    function AC(CC, zC, ZC, QC) {
      return (0 == ZC || CC(zC.sliceDoc(ZC - 1, ZC)) != wC.h.Word) && (QC == zC.doc.length || CC(zC.sliceDoc(QC, QC + 1)) != wC.h.Word)
    }
    const xC = QC.o.fromClass(class {
        constructor(CC) {
          this.gC = this.getDeco(CC)
        }
        update(CC) {
          (CC.selectionSet || CC.docChanged || CC.viewportChanged) && (this.gC = this.getDeco(CC.view))
        }
        getDeco(CC) {
          let zC = CC.state.facet(pC),
            {
              state: ZC
            } = CC,
            bC = ZC.selection;
          if (bC.np.length > 1) return QC.e.none;
          let nC, oC = bC.main,
            qC = null;
          if (oC.empty) {
            if (!zC.highlightWordAroundCursor) return QC.e.none;
            let CC = ZC.wordAt(oC.head);
            if (!CC) return QC.e.none;
            qC = ZC.charCategorizer(oC.head), nC = ZC.sliceDoc(CC.from, CC.to)
          } else {
            let CC = oC.to - oC.from;
            if (CC < zC.minSelectionLength || CC > 200) return QC.e.none;
            if (zC.wholeWords) {
              if (nC = ZC.sliceDoc(oC.from, oC.to), qC = ZC.charCategorizer(oC.head), !AC(qC, ZC, oC.from, oC.to) || ! function(CC, zC, ZC, QC) {
                  return CC(zC.sliceDoc(ZC, ZC + 1)) == wC.h.Word && CC(zC.sliceDoc(QC - 1, QC)) == wC.h.Word
                }(qC, ZC, oC.from, oC.to)) return QC.e.none
            } else if (nC = ZC.sliceDoc(oC.from, oC.to), !nC) return QC.e.none
          }
          let FC = [];
          for (let wC of CC.Y_) {
            let CC = new fC(ZC.doc, nC, wC.from, wC.to);
            for (; !CC.next().done;) {
              let {
                from: wC,
                to: bC
              } = CC.value;
              if ((!qC || AC(qC, ZC, wC, bC)) && (oC.empty && wC <= oC.from && bC >= oC.to ? FC.push(RC.range(wC, bC)) : (wC >= oC.to || bC <= oC.from) && FC.push(GC.range(wC, bC)), FC.length > zC.maxMatches)) return QC.e.none
            }
          }
          return QC.e.set(FC)
        }
      }, {
        gC: CC => CC.gC
      }),
      JC = QC.j.baseTheme({
        ".cm-selectionMatch": {
          backgroundColor: "#99ff7780"
        },
        ".cm-searchMatch .cm-selectionMatch": {
          backgroundColor: "transparent"
        }
      });
    const IC = wC.n.define({
      combine: CC => (0, wC.P)(CC, {
        top: !1,
        caseSensitive: !1,
        literal: !1,
        regexp: !1,
        wholeWord: !1,
        createPanel: CC => new Cz(CC),
        scrollToMatch: CC => QC.j.scrollIntoView(CC)
      })
    });
    class iC {
      constructor(CC) {
        this.search = CC.search, this.caseSensitive = !!CC.caseSensitive, this.literal = !!CC.literal, this.regexp = !!CC.regexp, this.replace = CC.replace || "", this.valid = !!this.search && (!this.regexp || function(CC) {
          try {
            return new RegExp(CC, qC), !0
          } catch (zC) {
            return !1
          }
        }(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!CC.wholeWord, this.test = CC.test
      }
      unquote(CC) {
        return this.literal ? CC : CC.replace(/\\([nrt\\])/g, ((CC, zC) => "n" == zC ? "\n" : "r" == zC ? "\r" : "t" == zC ? "\t" : "\\"))
      }
      eq(CC) {
        return this.search == CC.search && this.replace == CC.replace && this.caseSensitive == CC.caseSensitive && this.regexp == CC.regexp && this.wholeWord == CC.wholeWord && this.test == CC.test
      }
      create() {
        return this.regexp ? new mC(this) : new hC(this)
      }
      getCursor(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZC = arguments.length > 2 ? arguments[2] : void 0,
          QC = CC.doc ? CC : wC.l.create({
            doc: CC
          });
        return null == ZC && (ZC = QC.doc.length), this.regexp ? KC(this, QC, zC, ZC) : eC(this, QC, zC, ZC)
      }
    }
    class vC {
      constructor(CC) {
        this.spec = CC
      }
    }

    function eC(CC, zC, ZC, QC) {
      let bC;
      var nC, oC;
      return CC.wholeWord && (nC = zC.doc, oC = zC.charCategorizer(zC.selection.main.head), bC = (CC, zC, ZC, QC) => ((QC > CC || QC + ZC.length < zC) && (QC = Math.max(0, CC - 2), ZC = nC.sliceString(QC, Math.min(nC.length, zC + 2))), (oC(YC(ZC, CC - QC)) != wC.h.Word || oC(dC(ZC, CC - QC)) != wC.h.Word) && (oC(dC(ZC, zC - QC)) != wC.h.Word || oC(YC(ZC, zC - QC)) != wC.h.Word))), CC.test && (bC = function(CC, zC, ZC) {
        return (QC, wC, bC, nC) => {
          if (ZC && !ZC(QC, wC, bC, nC)) return !1;
          let fC = QC >= nC && wC <= nC + bC.length ? bC.slice(QC - nC, wC - nC) : zC.doc.sliceString(QC, wC);
          return CC(fC, zC, QC, wC)
        }
      }(CC.test, zC, bC)), new fC(zC.doc, CC.unquoted, ZC, QC, CC.caseSensitive ? void 0 : CC => CC.toLowerCase(), bC)
    }
    class hC extends vC {
      constructor(CC) {
        super(CC)
      }
      nextMatch(CC, zC, ZC) {
        let QC = eC(this.spec, CC, ZC, CC.doc.length).nextOverlapping();
        if (QC.done) {
          let ZC = Math.min(CC.doc.length, zC + this.spec.unquoted.length);
          QC = eC(this.spec, CC, 0, ZC).nextOverlapping()
        }
        return QC.done || QC.value.from == zC && QC.value.to == ZC ? null : QC.value
      }
      prevMatchInRange(CC, zC, ZC) {
        for (let QC = ZC;;) {
          let ZC = Math.max(zC, QC - 1e4 - this.spec.unquoted.length),
            wC = eC(this.spec, CC, ZC, QC),
            bC = null;
          for (; !wC.nextOverlapping().done;) bC = wC.value;
          if (bC) return bC;
          if (ZC == zC) return null;
          QC -= 1e4
        }
      }
      prevMatch(CC, zC, ZC) {
        let QC = this.prevMatchInRange(CC, 0, zC);
        return QC || (QC = this.prevMatchInRange(CC, Math.max(0, ZC - this.spec.unquoted.length), CC.doc.length)), !QC || QC.from == zC && QC.to == ZC ? null : QC
      }
      getReplacement(CC) {
        return this.spec.unquote(this.spec.replace)
      }
      matchAll(CC, zC) {
        let ZC = eC(this.spec, CC, 0, CC.doc.length),
          QC = [];
        for (; !ZC.next().done;) {
          if (QC.length >= zC) return null;
          QC.push(ZC.value)
        }
        return QC
      }
      highlight(CC, zC, ZC, QC) {
        let wC = eC(this.spec, CC, Math.max(0, zC - this.spec.unquoted.length), Math.min(ZC + this.spec.unquoted.length, CC.doc.length));
        for (; !wC.next().done;) QC(wC.value.from, wC.value.to)
      }
    }

    function KC(CC, zC, ZC, QC) {
      let bC;
      var nC;
      return CC.wholeWord && (nC = zC.charCategorizer(zC.selection.main.head), bC = (CC, zC, ZC) => !ZC[0].length || (nC(YC(ZC.input, ZC.index)) != wC.h.Word || nC(dC(ZC.input, ZC.index)) != wC.h.Word) && (nC(dC(ZC.input, ZC.index + ZC[0].length)) != wC.h.Word || nC(YC(ZC.input, ZC.index + ZC[0].length)) != wC.h.Word)), CC.test && (bC = function(CC, zC, ZC) {
        return (QC, wC, bC) => (!ZC || ZC(QC, wC, bC)) && CC(bC[0], zC, QC, wC)
      }(CC.test, zC, bC)), new FC(zC.doc, CC.search, {
        ignoreCase: !CC.caseSensitive,
        test: bC
      }, ZC, QC)
    }

    function YC(CC, zC) {
      return CC.slice((0, wC.V)(CC, zC, !1), zC)
    }

    function dC(CC, zC) {
      return CC.slice(zC, (0, wC.V)(CC, zC))
    }
    class mC extends vC {
      nextMatch(CC, zC, ZC) {
        let QC = KC(this.spec, CC, ZC, CC.doc.length).next();
        return QC.done && (QC = KC(this.spec, CC, 0, zC).next()), QC.done ? null : QC.value
      }
      prevMatchInRange(CC, zC, ZC) {
        for (let QC = 1;; QC++) {
          let wC = Math.max(zC, ZC - 1e4 * QC),
            bC = KC(this.spec, CC, wC, ZC),
            nC = null;
          for (; !bC.next().done;) nC = bC.value;
          if (nC && (wC == zC || nC.from > wC + 10)) return nC;
          if (wC == zC) return null
        }
      }
      prevMatch(CC, zC, ZC) {
        return this.prevMatchInRange(CC, 0, zC) || this.prevMatchInRange(CC, ZC, CC.doc.length)
      }
      getReplacement(CC) {
        return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, ((zC, ZC) => {
          if ("&" == ZC) return CC.match[0];
          if ("$" == ZC) return "$";
          for (let QC = ZC.length; QC > 0; QC--) {
            let zC = +ZC.slice(0, QC);
            if (zC > 0 && zC < CC.match.length) return CC.match[zC] + ZC.slice(QC)
          }
          return zC
        }))
      }
      matchAll(CC, zC) {
        let ZC = KC(this.spec, CC, 0, CC.doc.length),
          QC = [];
        for (; !ZC.next().done;) {
          if (QC.length >= zC) return null;
          QC.push(ZC.value)
        }
        return QC
      }
      highlight(CC, zC, ZC, QC) {
        let wC = KC(this.spec, CC, Math.max(0, zC - 250), Math.min(ZC + 250, CC.doc.length));
        for (; !wC.next().done;) QC(wC.value.from, wC.value.to)
      }
    }
    const HC = wC.w.define(),
      EC = wC.w.define(),
      lC = wC.A.define({
        create: CC => new XC(LC(CC).create(), null),
        update(CC, zC) {
          for (let ZC of zC.effects) ZC.is(HC) ? CC = new XC(ZC.value.create(), CC.panel) : ZC.is(EC) && (CC = new XC(CC.query, ZC.value ? yC : null));
          return CC
        },
        provide: CC => QC.gb.from(CC, (CC => CC.panel))
      });
    class XC {
      constructor(CC, zC) {
        this.query = CC, this.panel = zC
      }
    }
    const cC = QC.e.mark({
        class: "cm-searchMatch"
      }),
      uC = QC.e.mark({
        class: "cm-searchMatch cm-searchMatch-selected"
      }),
      rC = QC.o.fromClass(class {
        constructor(CC) {
          this.view = CC, this.gC = this.highlight(CC.state.field(lC))
        }
        update(CC) {
          let zC = CC.state.field(lC);
          (zC != CC.startState.field(lC) || CC.docChanged || CC.selectionSet || CC.viewportChanged) && (this.gC = this.highlight(zC))
        }
        highlight(CC) {
          let {
            query: zC,
            panel: ZC
          } = CC;
          if (!ZC || !zC.spec.valid) return QC.e.none;
          let {
            view: bC
          } = this, nC = new wC.s;
          for (let QC = 0, wC = bC.Y_, fC = wC.length; QC < fC; QC++) {
            let {
              from: CC,
              to: ZC
            } = wC[QC];
            for (; QC < fC - 1 && ZC > wC[QC + 1].from - 500;) ZC = wC[++QC].to;
            zC.highlight(bC.state, CC, ZC, ((CC, zC) => {
              let ZC = bC.state.selection.np.some((ZC => ZC.from == CC && ZC.to == zC));
              nC.add(CC, zC, ZC ? uC : cC)
            }))
          }
          return nC.finish()
        }
      }, {
        gC: CC => CC.gC
      });

    function sC(CC) {
      return zC => {
        let ZC = zC.state.field(lC, !1);
        return ZC && ZC.query.spec.valid ? CC(zC, ZC) : OC(zC)
      }
    }
    const TC = sC(((CC, zC) => {
        let {
          query: ZC
        } = zC, {
          to: QC
        } = CC.state.selection.main, bC = ZC.nextMatch(CC.state, QC, QC);
        if (!bC) return !1;
        let nC = wC.i.single(bC.from, bC.to),
          fC = CC.state.facet(IC);
        return CC.dispatch({
          selection: nC,
          effects: [wz(CC, bC), fC.scrollToMatch(nC.main, CC)],
          userEvent: "select.search"
        }), BC(CC), !0
      })),
      aC = sC(((CC, zC) => {
        let {
          query: ZC
        } = zC, {
          state: QC
        } = CC, {
          from: bC
        } = QC.selection.main, nC = ZC.prevMatch(QC, bC, bC);
        if (!nC) return !1;
        let fC = wC.i.single(nC.from, nC.to),
          oC = CC.state.facet(IC);
        return CC.dispatch({
          selection: fC,
          effects: [wz(CC, nC), oC.scrollToMatch(fC.main, CC)],
          userEvent: "select.search"
        }), BC(CC), !0
      })),
      tC = sC(((CC, zC) => {
        let {
          query: ZC
        } = zC, QC = ZC.matchAll(CC.state, 1e3);
        return !(!QC || !QC.length) && (CC.dispatch({
          selection: wC.i.create(QC.map((CC => wC.i.range(CC.from, CC.to)))),
          userEvent: "select.search.matches"
        }), !0)
      })),
      DC = sC(((CC, zC) => {
        let {
          query: ZC
        } = zC, {
          state: bC
        } = CC, {
          from: nC,
          to: fC
        } = bC.selection.main;
        if (bC.readOnly) return !1;
        let oC = ZC.nextMatch(bC, nC, nC);
        if (!oC) return !1;
        let qC, FC, WC = oC,
          NC = [],
          MC = [];
        WC.from == nC && WC.to == fC && (FC = bC.toText(ZC.getReplacement(WC)), NC.push({
          from: WC.from,
          to: WC.to,
          insert: FC
        }), WC = ZC.nextMatch(bC, WC.from, WC.to), MC.push(QC.j.announce.of(bC.phrase("replaced match on line $", bC.doc.lineAt(nC).number) + ".")));
        let gC = CC.state.changes(NC);
        return WC && (qC = wC.i.single(WC.from, WC.to).map(gC), MC.push(wz(CC, WC)), MC.push(bC.facet(IC).scrollToMatch(qC.main, CC))), CC.dispatch({
          changes: gC,
          selection: qC,
          effects: MC,
          userEvent: "input.replace"
        }), !0
      })),
      jC = sC(((CC, zC) => {
        let {
          query: ZC
        } = zC;
        if (CC.state.readOnly) return !1;
        let wC = ZC.matchAll(CC.state, 1e9).map((CC => {
          let {
            from: zC,
            to: QC
          } = CC;
          return {
            from: zC,
            to: QC,
            insert: ZC.getReplacement(CC)
          }
        }));
        if (!wC.length) return !1;
        let bC = CC.state.phrase("replaced $ matches", wC.length) + ".";
        return CC.dispatch({
          changes: wC,
          effects: QC.j.announce.of(bC),
          userEvent: "input.replace.all"
        }), !0
      }));

    function yC(CC) {
      return CC.state.facet(IC).createPanel(CC)
    }

    function LC(CC, zC) {
      var ZC, QC, wC, bC, nC;
      let fC = CC.selection.main,
        oC = fC.empty || fC.to > fC.from + 100 ? "" : CC.sliceDoc(fC.from, fC.to);
      if (zC && !oC) return zC;
      let qC = CC.facet(IC);
      return new iC({
        search: (null !== (ZC = null === zC || void 0 === zC ? void 0 : zC.literal) && void 0 !== ZC ? ZC : qC.literal) ? oC : oC.replace(/\n/g, "\\n"),
        caseSensitive: null !== (QC = null === zC || void 0 === zC ? void 0 : zC.caseSensitive) && void 0 !== QC ? QC : qC.caseSensitive,
        literal: null !== (wC = null === zC || void 0 === zC ? void 0 : zC.literal) && void 0 !== wC ? wC : qC.literal,
        regexp: null !== (bC = null === zC || void 0 === zC ? void 0 : zC.regexp) && void 0 !== bC ? bC : qC.regexp,
        wholeWord: null !== (nC = null === zC || void 0 === zC ? void 0 : zC.wholeWord) && void 0 !== nC ? nC : qC.wholeWord
      })
    }

    function UC(CC) {
      let zC = (0, QC.A)(CC, yC);
      return zC && zC.dom.querySelector("[main-field]")
    }

    function BC(CC) {
      let zC = UC(CC);
      zC && zC == CC.root.activeElement && zC.select()
    }
    const OC = CC => {
        let zC = CC.state.field(lC, !1);
        if (zC && zC.panel) {
          let ZC = UC(CC);
          if (ZC && ZC != CC.root.activeElement) {
            let QC = LC(CC.state, zC.query.spec);
            QC.valid && CC.dispatch({
              effects: HC.of(QC)
            }), ZC.focus(), ZC.select()
          }
        } else CC.dispatch({
          effects: [EC.of(!0), zC ? HC.of(LC(CC.state, zC.query.spec)) : wC.w.appendConfig.of(nz)]
        });
        return !0
      },
      kC = CC => {
        let zC = CC.state.field(lC, !1);
        if (!zC || !zC.panel) return !1;
        let ZC = (0, QC.A)(CC, yC);
        return ZC && ZC.dom.contains(CC.root.activeElement) && CC.focus(), CC.dispatch({
          effects: EC.of(!1)
        }), !0
      },
      VC = [{
        key: "Mod-f",
        run: OC,
        scope: "editor search-panel"
      }, {
        key: "F3",
        run: TC,
        shift: aC,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Mod-g",
        run: TC,
        shift: aC,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Escape",
        run: kC,
        scope: "editor search-panel"
      }, {
        key: "Mod-Shift-l",
        run: CC => {
          let {
            state: zC,
            dispatch: ZC
          } = CC, QC = zC.selection;
          if (QC.np.length > 1 || QC.main.empty) return !1;
          let {
            from: bC,
            to: nC
          } = QC.main, oC = [], qC = 0;
          for (let FC = new fC(zC.doc, zC.sliceDoc(bC, nC)); !FC.next().done;) {
            if (oC.length > 1e3) return !1;
            FC.value.from == bC && (qC = oC.length), oC.push(wC.i.range(FC.value.from, FC.value.to))
          }
          return ZC(zC.update({
            selection: wC.i.create(oC, qC),
            userEvent: "select.search.matches"
          })), !0
        }
      }, {
        key: "Mod-Alt-g",
        run: CC => {
          let {
            state: zC
          } = CC, ZC = String(zC.doc.lineAt(CC.state.selection.main.head).number), {
            close: bC,
            result: nC
          } = (0, QC.fb)(CC, {
            label: zC.phrase("Go to line"),
            input: {
              type: "text",
              name: "line",
              value: ZC
            },
            focus: !0,
            submitLabel: zC.phrase("go")
          });
          return nC.then((ZC => {
            let nC = ZC && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(ZC.elements.line.value);
            if (!nC) return void CC.dispatch({
              effects: bC
            });
            let fC = zC.doc.lineAt(zC.selection.main.head),
              [, oC, qC, FC, WC] = nC,
              NC = FC ? +FC.slice(1) : 0,
              MC = qC ? +qC : fC.number;
            if (qC && WC) {
              let CC = MC / 100;
              oC && (CC = CC * ("-" == oC ? -1 : 1) + fC.number / zC.doc.lines), MC = Math.round(zC.doc.lines * CC)
            } else qC && oC && (MC = MC * ("-" == oC ? -1 : 1) + fC.number);
            let gC = zC.doc.line(Math.max(1, Math.min(zC.doc.lines, MC))),
              SC = wC.i.cursor(gC.from + Math.max(0, Math.min(NC, gC.length)));
            CC.dispatch({
              effects: [bC, QC.j.scrollIntoView(SC.from, {
                y: "center"
              })],
              selection: SC
            })
          })), !0
        }
      }, {
        key: "Mod-d",
        run: CC => {
          let {
            state: zC,
            dispatch: ZC
          } = CC, {
            np: bC
          } = zC.selection;
          if (bC.some((CC => CC.from === CC.to))) return (CC => {
            let {
              state: zC,
              dispatch: ZC
            } = CC, {
              selection: QC
            } = zC, bC = wC.i.create(QC.np.map((CC => zC.wordAt(CC.head) || wC.i.cursor(CC.head))), QC.mainIndex);
            return !bC.eq(QC) && (ZC(zC.update({
              selection: bC
            })), !0)
          })({
            state: zC,
            dispatch: ZC
          });
          let nC = zC.sliceDoc(bC[0].from, bC[0].to);
          if (zC.selection.np.some((CC => zC.sliceDoc(CC.from, CC.to) != nC))) return !1;
          let oC = function(CC, zC) {
            let {
              main: ZC,
              np: QC
            } = CC.selection, wC = CC.wordAt(ZC.head), bC = wC && wC.from == ZC.from && wC.to == ZC.to;
            for (let nC = !1, oC = new fC(CC.doc, zC, QC[QC.length - 1].to);;) {
              if (oC.next(), !oC.done) {
                if (nC && QC.some((CC => CC.from == oC.value.from))) continue;
                if (bC) {
                  let zC = CC.wordAt(oC.value.from);
                  if (!zC || zC.from != oC.value.from || zC.to != oC.value.to) continue
                }
                return oC.value
              }
              if (nC) return null;
              oC = new fC(CC.doc, zC, 0, Math.max(0, QC[QC.length - 1].from - 1)), nC = !0
            }
          }(zC, nC);
          return !!oC && (ZC(zC.update({
            selection: zC.selection.addRange(wC.i.range(oC.from, oC.to), !1),
            effects: QC.j.scrollIntoView(oC.to)
          })), !0)
        },
        preventDefault: !0
      }];
    class Cz {
      constructor(CC) {
        this.view = CC;
        let zC = this.query = CC.state.field(lC).query.spec;

        function ZC(CC, zC, ZC) {
          return (0, bC.b)("button", {
            class: "cm-button",
            name: CC,
            onclick: zC,
            type: "button"
          }, ZC)
        }
        this.commit = this.commit.bind(this), this.searchField = (0, bC.b)("input", {
          value: zC.search,
          placeholder: zz(CC, "Find"),
          "aria-label": zz(CC, "Find"),
          class: "cm-textfield",
          name: "search",
          form: "",
          "main-field": "true",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.replaceField = (0, bC.b)("input", {
          value: zC.replace,
          placeholder: zz(CC, "Replace"),
          "aria-label": zz(CC, "Replace"),
          class: "cm-textfield",
          name: "replace",
          form: "",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.caseField = (0, bC.b)("input", {
          type: "checkbox",
          name: "case",
          form: "",
          checked: zC.caseSensitive,
          onchange: this.commit
        }), this.reField = (0, bC.b)("input", {
          type: "checkbox",
          name: "re",
          form: "",
          checked: zC.regexp,
          onchange: this.commit
        }), this.wordField = (0, bC.b)("input", {
          type: "checkbox",
          name: "word",
          form: "",
          checked: zC.wholeWord,
          onchange: this.commit
        }), this.dom = (0, bC.b)("div", {
          onkeydown: CC => this.keydown(CC),
          class: "cm-search"
        }, [this.searchField, ZC("next", (() => TC(CC)), [zz(CC, "next")]), ZC("prev", (() => aC(CC)), [zz(CC, "previous")]), ZC("select", (() => tC(CC)), [zz(CC, "all")]), (0, bC.b)("label", null, [this.caseField, zz(CC, "match case")]), (0, bC.b)("label", null, [this.reField, zz(CC, "regexp")]), (0, bC.b)("label", null, [this.wordField, zz(CC, "by word")]), ...CC.state.readOnly ? [] : [(0, bC.b)("br"), this.replaceField, ZC("replace", (() => DC(CC)), [zz(CC, "replace")]), ZC("replaceAll", (() => jC(CC)), [zz(CC, "replace all")])], (0, bC.b)("button", {
          name: "close",
          onclick: () => kC(CC),
          "aria-label": zz(CC, "close"),
          type: "button"
        }, ["\xd7"])])
      }
      commit() {
        let CC = new iC({
          search: this.searchField.value,
          caseSensitive: this.caseField.checked,
          regexp: this.reField.checked,
          wholeWord: this.wordField.checked,
          replace: this.replaceField.value
        });
        CC.eq(this.query) || (this.query = CC, this.view.dispatch({
          effects: HC.of(CC)
        }))
      }
      keydown(CC) {
        (0, QC.db)(this.view, CC, "search-panel") ? CC.preventDefault(): 13 == CC.keyCode && CC.target == this.searchField ? (CC.preventDefault(), (CC.shiftKey ? aC : TC)(this.view)) : 13 == CC.keyCode && CC.target == this.replaceField && (CC.preventDefault(), DC(this.view))
      }
      update(CC) {
        for (let zC of CC.transactions)
          for (let CC of zC.effects) CC.is(HC) && !CC.value.eq(this.query) && this.setQuery(CC.value)
      }
      setQuery(CC) {
        this.query = CC, this.searchField.value = CC.search, this.replaceField.value = CC.replace, this.caseField.checked = CC.caseSensitive, this.reField.checked = CC.regexp, this.wordField.checked = CC.wholeWord
      }
      mount() {
        this.searchField.select()
      }
      get pos() {
        return 80
      }
      get top() {
        return this.view.state.facet(IC).top
      }
    }

    function zz(CC, zC) {
      return CC.state.phrase(zC)
    }
    const Zz = 30,
      Qz = /[\s\.,:;?!]/;

    function wz(CC, zC) {
      let {
        from: ZC,
        to: wC
      } = zC, bC = CC.state.doc.lineAt(ZC), nC = CC.state.doc.lineAt(wC).to, fC = Math.max(bC.from, ZC - Zz), oC = Math.min(nC, wC + Zz), qC = CC.state.sliceDoc(fC, oC);
      if (fC != bC.from)
        for (let QC = 0; QC < Zz; QC++)
          if (!Qz.test(qC[QC + 1]) && Qz.test(qC[QC])) {
            qC = qC.slice(QC);
            break
          } if (oC != nC)
        for (let QC = qC.length - 1; QC > qC.length - Zz; QC--)
          if (!Qz.test(qC[QC - 1]) && Qz.test(qC[QC])) {
            qC = qC.slice(0, QC);
            break
          } return QC.j.announce.of(`${CC.state.phrase("current match")}. ${qC} ${CC.state.phrase("on line")} ${bC.number}.`)
    }
    const bz = QC.j.baseTheme({
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
      nz = [lC, wC.r.low(rC), bz]
  },
  41128: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => mC,
      i: () => qz,
      j: () => vw,
      k: () => nn,
      o: () => Bz,
      r: () => YC,
      t: () => Yb,
      w: () => Ow,
      y: () => nb,
      A: () => Ob,
      E: () => Lb,
      I: () => Nn,
      M: () => Gb,
      J: () => Hn,
      O: () => gb,
      Q: () => yb,
      R: () => Ew,
      V: () => Kn,
      Y: () => jz,
      $: () => Jb,
      cb: () => eb,
      db: () => uw,
      fb: () => Zn,
      gb: () => zn,
      ib: () => sb
    });
    for (var QC = ZC(41125), wC = ZC(41134), bC = {
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
      }, nC = {
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
      }, fC = "undefined" != typeof navigator && /Mac/.test(navigator.platform), oC = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), qC = 0; qC < 10; qC++) bC[48 + qC] = bC[96 + qC] = String(qC);
    for (qC = 1; qC <= 24; qC++) bC[qC + 111] = "F" + qC;
    for (qC = 65; qC <= 90; qC++) bC[qC] = String.fromCharCode(qC + 32), nC[qC] = String.fromCharCode(qC);
    for (var FC in bC) nC.hasOwnProperty(FC) || (nC[FC] = bC[FC]);
    var WC = ZC(41139);
    let NC = "undefined" != typeof navigator ? navigator : {
        userAgent: "",
        vendor: "",
        platform: ""
      },
      MC = "undefined" != typeof document ? document : {
        documentElement: {
          style: {}
        }
      };
    const gC = /Edge\/(\d+)/.exec(NC.userAgent),
      SC = /MSIE \d/.test(NC.userAgent),
      pC = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(NC.userAgent),
      PC = !!(SC || pC || gC),
      GC = !PC && /gecko\/(\d+)/i.test(NC.userAgent),
      RC = !PC && /Chrome\/(\d+)/.exec(NC.userAgent),
      AC = "webkitFontSmoothing" in MC.documentElement.style,
      xC = !PC && /Apple Computer/.test(NC.vendor),
      JC = xC && (/Mobile\/\w+/.test(NC.userAgent) || NC.maxTouchPoints > 2);
    var IC = {
      mac: JC || /Mac/.test(NC.platform),
      windows: /Win/.test(NC.platform),
      linux: /Linux|X11/.test(NC.platform),
      ie: PC,
      ie_version: SC ? MC.documentMode || 6 : pC ? +pC[1] : gC ? +gC[1] : 0,
      gecko: GC,
      gecko_version: GC ? +(/Firefox\/(\d+)/.exec(NC.userAgent) || [0, 0])[1] : 0,
      chrome: !!RC,
      chrome_version: RC ? +RC[1] : 0,
      ios: JC,
      android: /Android\b/.test(NC.userAgent),
      webkit: AC,
      webkit_version: AC ? +(/\bAppleWebKit\/(\d+)/.exec(NC.userAgent) || [0, 0])[1] : 0,
      safari: xC,
      safari_version: xC ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(NC.userAgent) || [0, 0])[1] : 0,
      tabSize: null != MC.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size"
    };

    function iC(CC, zC) {
      for (let ZC in CC) "class" == ZC && zC.class ? zC.class += " " + CC.class : "style" == ZC && zC.style ? zC.style += ";" + CC.style : zC[ZC] = CC[ZC];
      return zC
    }
    const vC = Object.create(null);

    function eC(CC, zC, ZC) {
      if (CC == zC) return !0;
      CC || (CC = vC), zC || (zC = vC);
      let QC = Object.keys(CC),
        wC = Object.keys(zC);
      if (QC.length - (ZC && QC.indexOf(ZC) > -1 ? 1 : 0) != wC.length - (ZC && wC.indexOf(ZC) > -1 ? 1 : 0)) return !1;
      for (let bC of QC)
        if (bC != ZC && (-1 == wC.indexOf(bC) || CC[bC] !== zC[bC])) return !1;
      return !0
    }

    function hC(CC, zC, ZC) {
      let QC = !1;
      if (zC)
        for (let wC in zC) ZC && wC in ZC || (QC = !0, "style" == wC ? CC.style.cssText = "" : CC.removeAttribute(wC));
      if (ZC)
        for (let wC in ZC) zC && zC[wC] == ZC[wC] || (QC = !0, "style" == wC ? CC.style.cssText = ZC[wC] : CC.setAttribute(wC, ZC[wC]));
      return QC
    }

    function KC(CC) {
      let zC = Object.create(null);
      for (let ZC = 0; ZC < CC.attributes.length; ZC++) {
        let QC = CC.attributes[ZC];
        zC[QC.name] = QC.value
      }
      return zC
    }
    class YC {
      eq(CC) {
        return !1
      }
      updateDOM(CC, zC, ZC) {
        return !1
      }
      compare(CC) {
        return this == CC || this.constructor == CC.constructor && this.eq(CC)
      }
      get estimatedHeight() {
        return -1
      }
      get lineBreaks() {
        return 0
      }
      ignoreEvent(CC) {
        return !0
      }
      coordsAt(CC, zC, ZC) {
        return null
      }
      get isHidden() {
        return !1
      }
      get editable() {
        return !1
      }
      destroy(CC) {}
    }
    var dC = function(CC) {
      return CC[CC.Text = 0] = "Text", CC[CC.WidgetBefore = 1] = "WidgetBefore", CC[CC.WidgetAfter = 2] = "WidgetAfter", CC[CC.WidgetRange = 3] = "WidgetRange", CC
    }(dC || (dC = {}));
    class mC extends QC.v {
      constructor(CC, zC, ZC, QC) {
        super(), this.startSide = CC, this.endSide = zC, this.widget = ZC, this.spec = QC
      }
      get heightRelevant() {
        return !1
      }
      static mark(CC) {
        return new HC(CC)
      }
      static widget(CC) {
        let zC = Math.max(-1e4, Math.min(1e4, CC.side || 0)),
          ZC = !!CC.block;
        return zC += ZC && !CC.inlineOrder ? zC > 0 ? 3e8 : -4e8 : zC > 0 ? 1e8 : -1e8, new lC(CC, zC, zC, ZC, CC.widget || null, !1)
      }
      static replace(CC) {
        let zC, ZC, QC = !!CC.block;
        if (CC.isBlockGap) zC = -5e8, ZC = 4e8;
        else {
          let {
            start: wC,
            end: bC
          } = XC(CC, QC);
          zC = (wC ? QC ? -3e8 : -1 : 5e8) - 1, ZC = 1 + (bC ? QC ? 2e8 : 1 : -6e8)
        }
        return new lC(CC, zC, ZC, QC, CC.widget || null, !0)
      }
      static line(CC) {
        return new EC(CC)
      }
      static set(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return QC.u.of(CC, zC)
      }
      hasHeight() {
        return !!this.widget && this.widget.estimatedHeight > -1
      }
    }
    mC.none = QC.u.empty;
    class HC extends mC {
      constructor(CC) {
        let {
          start: zC,
          end: ZC
        } = XC(CC);
        super(zC ? -1 : 5e8, ZC ? 1 : -6e8, null, CC), this.tagName = CC.tagName || "span", this.attrs = CC.class && CC.attributes ? iC(CC.attributes, {
          class: CC.class
        }) : CC.class ? {
          class: CC.class
        } : CC.attributes || vC
      }
      eq(CC) {
        return this == CC || CC instanceof HC && this.tagName == CC.tagName && eC(this.attrs, CC.attrs)
      }
      range(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : CC;
        if (CC >= zC) throw new RangeError("Mark decorations may not be empty");
        return super.range(CC, zC)
      }
    }
    HC.prototype.point = !1;
    class EC extends mC {
      constructor(CC) {
        super(-2e8, -2e8, null, CC)
      }
      eq(CC) {
        return CC instanceof EC && this.spec.class == CC.spec.class && eC(this.spec.attributes, CC.spec.attributes)
      }
      range(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : CC;
        if (zC != CC) throw new RangeError("Line decoration ranges must be zero-length");
        return super.range(CC, zC)
      }
    }
    EC.prototype.mapMode = QC.o.TrackBefore, EC.prototype.point = !0;
    class lC extends mC {
      constructor(CC, zC, ZC, wC, bC, nC) {
        super(zC, ZC, bC, CC), this.block = wC, this.isReplace = nC, this.mapMode = wC ? zC <= 0 ? QC.o.TrackBefore : QC.o.TrackAfter : QC.o.TrackDel
      }
      get type() {
        return this.startSide != this.endSide ? dC.WidgetRange : this.startSide <= 0 ? dC.WidgetBefore : dC.WidgetAfter
      }
      get heightRelevant() {
        return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0)
      }
      eq(CC) {
        return CC instanceof lC && (zC = this.widget, ZC = CC.widget, zC == ZC || !!(zC && ZC && zC.compare(ZC))) && this.block == CC.block && this.startSide == CC.startSide && this.endSide == CC.endSide;
        var zC, ZC
      }
      range(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : CC;
        if (this.isReplace && (CC > zC || CC == zC && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && zC != CC) throw new RangeError("Widget decorations can only have zero-length ranges");
        return super.range(CC, zC)
      }
    }

    function XC(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          inclusiveStart: ZC,
          inclusiveEnd: QC
        } = CC;
      return null == ZC && (ZC = CC.inclusive), null == QC && (QC = CC.inclusive), {
        start: null !== ZC && void 0 !== ZC ? ZC : zC,
        end: null !== QC && void 0 !== QC ? QC : zC
      }
    }

    function cC(CC, zC, ZC) {
      let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        wC = ZC.length - 1;
      wC >= 0 && ZC[wC] + QC >= CC ? ZC[wC] = Math.max(ZC[wC], zC) : ZC.push(CC, zC)
    }
    lC.prototype.point = !0;
    class uC extends QC.v {
      constructor(CC, zC) {
        super(), this.tagName = CC, this.attributes = zC
      }
      eq(CC) {
        return CC == this || CC instanceof uC && this.tagName == CC.tagName && eC(this.attributes, CC.attributes)
      }
      static create(CC) {
        return new uC(CC.tagName, CC.attributes || vC)
      }
      static set(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return QC.u.of(CC, zC)
      }
    }

    function rC(CC) {
      let zC;
      return zC = 11 == CC.nodeType ? CC.getSelection ? CC : CC.ownerDocument : CC, zC.getSelection()
    }

    function sC(CC, zC) {
      return !!zC && (CC == zC || CC.contains(1 != zC.nodeType ? zC.parentNode : zC))
    }

    function TC(CC, zC) {
      if (!zC.anchorNode) return !1;
      try {
        return sC(CC, zC.anchorNode)
      } catch (ZC) {
        return !1
      }
    }

    function aC(CC) {
      return 3 == CC.nodeType ? Qz(CC, 0, CC.nodeValue.length).getClientRects() : 1 == CC.nodeType ? CC.getClientRects() : []
    }

    function tC(CC, zC, ZC, QC) {
      return !!ZC && (yC(CC, zC, ZC, QC, -1) || yC(CC, zC, ZC, QC, 1))
    }

    function DC(CC) {
      for (var zC = 0;; zC++)
        if (!(CC = CC.previousSibling)) return zC
    }

    function jC(CC) {
      return 1 == CC.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(CC.nodeName)
    }

    function yC(CC, zC, ZC, QC, wC) {
      for (;;) {
        if (CC == ZC && zC == QC) return !0;
        if (zC == (wC < 0 ? 0 : LC(CC))) {
          if ("DIV" == CC.nodeName) return !1;
          let ZC = CC.parentNode;
          if (!ZC || 1 != ZC.nodeType) return !1;
          zC = DC(CC) + (wC < 0 ? 0 : 1), CC = ZC
        } else {
          if (1 != CC.nodeType) return !1;
          if (1 == (CC = CC.childNodes[zC + (wC < 0 ? -1 : 0)]).nodeType && "false" == CC.contentEditable) return !1;
          zC = wC < 0 ? LC(CC) : 0
        }
      }
    }

    function LC(CC) {
      return 3 == CC.nodeType ? CC.nodeValue.length : CC.childNodes.length
    }

    function UC(CC, zC) {
      let ZC = zC ? CC.left : CC.right;
      return {
        left: ZC,
        right: ZC,
        top: CC.top,
        bottom: CC.bottom
      }
    }

    function BC(CC) {
      let zC = CC.visualViewport;
      return zC ? {
        left: 0,
        right: zC.width,
        top: 0,
        bottom: zC.height
      } : {
        left: 0,
        right: CC.innerWidth,
        top: 0,
        bottom: CC.innerHeight
      }
    }

    function OC(CC, zC) {
      let ZC = zC.width / CC.offsetWidth,
        QC = zC.height / CC.offsetHeight;
      return (ZC > .995 && ZC < 1.005 || !isFinite(ZC) || Math.abs(zC.width - CC.offsetWidth) < 1) && (ZC = 1), (QC > .995 && QC < 1.005 || !isFinite(QC) || Math.abs(zC.height - CC.offsetHeight) < 1) && (QC = 1), {
        scaleX: ZC,
        scaleY: QC
      }
    }

    function kC(CC) {
      let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        ZC = CC.ownerDocument,
        QC = null,
        wC = null;
      for (let bC = CC.parentNode; bC && (bC != ZC.body && (zC && !QC || !wC));)
        if (1 == bC.nodeType) !wC && bC.scrollHeight > bC.clientHeight && (wC = bC), zC && !QC && bC.scrollWidth > bC.clientWidth && (QC = bC), bC = bC.assignedSlot || bC.parentNode;
        else {
          if (11 != bC.nodeType) break;
          bC = bC.host
        } return {
        x: QC,
        y: wC
      }
    }
    uC.prototype.startSide = uC.prototype.endSide = -1;
    class VC {
      constructor() {
        this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
      }
      eq(CC) {
        return this.anchorNode == CC.anchorNode && this.anchorOffset == CC.anchorOffset && this.focusNode == CC.focusNode && this.focusOffset == CC.focusOffset
      }
      setRange(CC) {
        let {
          anchorNode: zC,
          focusNode: ZC
        } = CC;
        this.set(zC, Math.min(CC.anchorOffset, zC ? LC(zC) : 0), ZC, Math.min(CC.focusOffset, ZC ? LC(ZC) : 0))
      }
      set(CC, zC, ZC, QC) {
        this.anchorNode = CC, this.anchorOffset = zC, this.focusNode = ZC, this.focusOffset = QC
      }
    }
    let Cz, zz = null;

    function Zz(CC) {
      if (CC.setActive) return CC.setActive();
      if (zz) return CC.focus(zz);
      let zC = [];
      for (let ZC = CC; ZC && (zC.push(ZC, ZC.scrollTop, ZC.scrollLeft), ZC != ZC.ownerDocument); ZC = ZC.parentNode);
      if (CC.focus(null == zz ? {
          get preventScroll() {
            return zz = {
              preventScroll: !0
            }, !0
          }
        } : void 0), !zz) {
        zz = !1;
        for (let CC = 0; CC < zC.length;) {
          let ZC = zC[CC++],
            QC = zC[CC++],
            wC = zC[CC++];
          ZC.scrollTop != QC && (ZC.scrollTop = QC), ZC.scrollLeft != wC && (ZC.scrollLeft = wC)
        }
      }
    }

    function Qz(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zC,
        QC = Cz || (Cz = document.createRange());
      return QC.setEnd(CC, ZC), QC.setStart(CC, zC), QC
    }

    function wz(CC, zC, ZC, QC) {
      let wC = {
        key: zC,
        code: zC,
        keyCode: ZC,
        which: ZC,
        cancelable: !0
      };
      QC && ({
        altKey: wC.altKey,
        ctrlKey: wC.ctrlKey,
        shiftKey: wC.shiftKey,
        metaKey: wC.metaKey
      } = QC);
      let bC = new KeyboardEvent("keydown", wC);
      bC.synthetic = !0, CC.dispatchEvent(bC);
      let nC = new KeyboardEvent("keyup", wC);
      return nC.synthetic = !0, CC.dispatchEvent(nC), bC.defaultPrevented || nC.defaultPrevented
    }

    function bz(CC) {
      return CC instanceof Window ? CC.pageYOffset > Math.max(0, CC.document.documentElement.scrollHeight - CC.innerHeight - 4) : CC.scrollTop > Math.max(1, CC.scrollHeight - CC.clientHeight - 4)
    }

    function nz(CC, zC) {
      for (let ZC = CC, QC = zC;;) {
        if (3 == ZC.nodeType && QC > 0) return {
          node: ZC,
          offset: QC
        };
        if (1 == ZC.nodeType && QC > 0) {
          if ("false" == ZC.contentEditable) return null;
          ZC = ZC.childNodes[QC - 1], QC = LC(ZC)
        } else {
          if (!ZC.parentNode || jC(ZC)) return null;
          QC = DC(ZC), ZC = ZC.parentNode
        }
      }
    }

    function fz(CC, zC) {
      for (let ZC = CC, QC = zC;;) {
        if (3 == ZC.nodeType && QC < ZC.nodeValue.length) return {
          node: ZC,
          offset: QC
        };
        if (1 == ZC.nodeType && QC < ZC.childNodes.length) {
          if ("false" == ZC.contentEditable) return null;
          ZC = ZC.childNodes[QC], QC = 0
        } else {
          if (!ZC.parentNode || jC(ZC)) return null;
          QC = DC(ZC) + 1, ZC = ZC.parentNode
        }
      }
    }
    IC.safari && IC.safari_version >= 26 && (zz = !1);
    class oz {
      constructor(CC, zC) {
        let ZC = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.node = CC, this.offset = zC, this.precise = ZC
      }
      static before(CC, zC) {
        return new oz(CC.parentNode, DC(CC), zC)
      }
      static after(CC, zC) {
        return new oz(CC.parentNode, DC(CC) + 1, zC)
      }
    }
    var qz = function(CC) {
      return CC[CC.LTR = 0] = "LTR", CC[CC.RTL = 1] = "RTL", CC
    }(qz || (qz = {}));
    const Fz = qz.LTR,
      Wz = qz.RTL;

    function Nz(CC) {
      let zC = [];
      for (let ZC = 0; ZC < CC.length; ZC++) zC.push(1 << +CC[ZC]);
      return zC
    }
    const Mz = Nz("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),
      gz = Nz("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),
      Sz = Object.create(null),
      pz = [];
    for (let En of ["()", "[]", "{}"]) {
      let CC = En.charCodeAt(0),
        zC = En.charCodeAt(1);
      Sz[CC] = zC, Sz[zC] = -CC
    }

    function Pz(CC) {
      return CC <= 247 ? Mz[CC] : 1424 <= CC && CC <= 1524 ? 2 : 1536 <= CC && CC <= 1785 ? gz[CC - 1536] : 1774 <= CC && CC <= 2220 ? 4 : 8192 <= CC && CC <= 8204 ? 256 : 64336 <= CC && CC <= 65023 ? 4 : 1
    }
    const Gz = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
    class Rz {
      get dir() {
        return this.level % 2 ? Wz : Fz
      }
      constructor(CC, zC, ZC) {
        this.from = CC, this.to = zC, this.level = ZC
      }
      side(CC, zC) {
        return this.dir == zC == CC ? this.to : this.from
      }
      forward(CC, zC) {
        return CC == (this.dir == zC)
      }
      static find(CC, zC, ZC, QC) {
        let wC = -1;
        for (let bC = 0; bC < CC.length; bC++) {
          let nC = CC[bC];
          if (nC.from <= zC && nC.to >= zC) {
            if (nC.level == ZC) return bC;
            (wC < 0 || (0 != QC ? QC < 0 ? nC.from < zC : nC.to > zC : CC[wC].level > nC.level)) && (wC = bC)
          }
        }
        if (wC < 0) throw new RangeError("Index out of range");
        return wC
      }
    }

    function Az(CC, zC) {
      if (CC.length != zC.length) return !1;
      for (let ZC = 0; ZC < CC.length; ZC++) {
        let QC = CC[ZC],
          wC = zC[ZC];
        if (QC.from != wC.from || QC.to != wC.to || QC.direction != wC.direction || !Az(QC.inner, wC.inner)) return !1
      }
      return !0
    }
    const xz = [];

    function Jz(CC, zC, ZC, QC, wC, bC, nC) {
      let fC = QC % 2 ? 2 : 1;
      if (QC % 2 == wC % 2)
        for (let oC = zC, qC = 0; oC < ZC;) {
          let zC = !0,
            FC = !1;
          if (qC == bC.length || oC < bC[qC].from) {
            let CC = xz[oC];
            CC != fC && (zC = !1, FC = 16 == CC)
          }
          let WC = zC || 1 != fC ? null : [],
            NC = zC ? QC : QC + 1,
            MC = oC;
          CC: for (;;)
            if (qC < bC.length && MC == bC[qC].from) {
              if (FC) break CC;
              let gC = bC[qC];
              if (!zC)
                for (let CC = gC.to, zC = qC + 1;;) {
                  if (CC == ZC) break CC;
                  if (!(zC < bC.length && bC[zC].from == CC)) {
                    if (xz[CC] == fC) break CC;
                    break
                  }
                  CC = bC[zC++].to
                }
              if (qC++, WC) WC.push(gC);
              else {
                gC.from > oC && nC.push(new Rz(oC, gC.from, NC)), Iz(CC, gC.direction == Fz != !(NC % 2) ? QC + 1 : QC, wC, gC.inner, gC.from, gC.to, nC), oC = gC.to
              }
              MC = gC.to
            } else {
              if (MC == ZC || (zC ? xz[MC] != fC : xz[MC] == fC)) break;
              MC++
            } WC ? Jz(CC, oC, MC, QC + 1, wC, WC, nC) : oC < MC && nC.push(new Rz(oC, MC, NC)), oC = MC
        } else
          for (let oC = ZC, qC = bC.length; oC > zC;) {
            let ZC = !0,
              FC = !1;
            if (!qC || oC > bC[qC - 1].to) {
              let CC = xz[oC - 1];
              CC != fC && (ZC = !1, FC = 16 == CC)
            }
            let WC = ZC || 1 != fC ? null : [],
              NC = ZC ? QC : QC + 1,
              MC = oC;
            CC: for (;;)
              if (qC && MC == bC[qC - 1].to) {
                if (FC) break CC;
                let gC = bC[--qC];
                if (!ZC)
                  for (let CC = gC.from, ZC = qC;;) {
                    if (CC == zC) break CC;
                    if (!ZC || bC[ZC - 1].to != CC) {
                      if (xz[CC - 1] == fC) break CC;
                      break
                    }
                    CC = bC[--ZC].from
                  }
                if (WC) WC.push(gC);
                else {
                  gC.to < oC && nC.push(new Rz(gC.to, oC, NC)), Iz(CC, gC.direction == Fz != !(NC % 2) ? QC + 1 : QC, wC, gC.inner, gC.from, gC.to, nC), oC = gC.from
                }
                MC = gC.from
              } else {
                if (MC == zC || (ZC ? xz[MC - 1] != fC : xz[MC - 1] == fC)) break;
                MC--
              } WC ? Jz(CC, MC, oC, QC + 1, wC, WC, nC) : MC < oC && nC.push(new Rz(MC, oC, NC)), oC = MC
          }
    }

    function Iz(CC, zC, ZC, QC, wC, bC, nC) {
      let fC = zC % 2 ? 2 : 1;
      ! function(CC, zC, ZC, QC, wC) {
        for (let bC = 0; bC <= QC.length; bC++) {
          let nC = bC ? QC[bC - 1].to : zC,
            fC = bC < QC.length ? QC[bC].from : ZC,
            oC = bC ? 256 : wC;
          for (let zC = nC, ZC = oC, QC = oC; zC < fC; zC++) {
            let wC = Pz(CC.charCodeAt(zC));
            512 == wC ? wC = ZC : 8 == wC && 4 == QC && (wC = 16), xz[zC] = 4 == wC ? 2 : wC, 7 & wC && (QC = wC), ZC = wC
          }
          for (let CC = nC, zC = oC, QC = oC; CC < fC; CC++) {
            let wC = xz[CC];
            if (128 == wC) CC < fC - 1 && zC == xz[CC + 1] && 24 & zC ? wC = xz[CC] = zC : xz[CC] = 256;
            else if (64 == wC) {
              let wC = CC + 1;
              for (; wC < fC && 64 == xz[wC];) wC++;
              let bC = CC && 8 == zC || wC < ZC && 8 == xz[wC] ? 1 == QC ? 1 : 8 : 256;
              for (let zC = CC; zC < wC; zC++) xz[zC] = bC;
              CC = wC - 1
            } else 8 == wC && 1 == QC && (xz[CC] = 1);
            zC = wC, 7 & wC && (QC = wC)
          }
        }
      }(CC, wC, bC, QC, fC),
      function(CC, zC, ZC, QC, wC) {
        let bC = 1 == wC ? 2 : 1;
        for (let nC = 0, fC = 0, oC = 0; nC <= QC.length; nC++) {
          let qC = nC ? QC[nC - 1].to : zC,
            FC = nC < QC.length ? QC[nC].from : ZC;
          for (let zC, ZC, QC, nC = qC; nC < FC; nC++)
            if (ZC = Sz[zC = CC.charCodeAt(nC)])
              if (ZC < 0) {
                for (let CC = fC - 3; CC >= 0; CC -= 3)
                  if (pz[CC + 1] == -ZC) {
                    let zC = pz[CC + 2],
                      ZC = 2 & zC ? wC : 4 & zC ? 1 & zC ? bC : wC : 0;
                    ZC && (xz[nC] = xz[pz[CC]] = ZC), fC = CC;
                    break
                  }
              } else {
                if (189 == pz.length) break;
                pz[fC++] = nC, pz[fC++] = zC, pz[fC++] = oC
              }
          else if (2 == (QC = xz[nC]) || 1 == QC) {
            let CC = QC == wC;
            oC = CC ? 0 : 1;
            for (let zC = fC - 3; zC >= 0; zC -= 3) {
              let ZC = pz[zC + 2];
              if (2 & ZC) break;
              if (CC) pz[zC + 2] |= 2;
              else {
                if (4 & ZC) break;
                pz[zC + 2] |= 4
              }
            }
          }
        }
      }(CC, wC, bC, QC, fC),
      function(CC, zC, ZC, QC) {
        for (let wC = 0, bC = QC; wC <= ZC.length; wC++) {
          let nC = wC ? ZC[wC - 1].to : CC,
            fC = wC < ZC.length ? ZC[wC].from : zC;
          for (let oC = nC; oC < fC;) {
            let nC = xz[oC];
            if (256 == nC) {
              let nC = oC + 1;
              for (;;)
                if (nC == fC) {
                  if (wC == ZC.length) break;
                  nC = ZC[wC++].to, fC = wC < ZC.length ? ZC[wC].from : zC
                } else {
                  if (256 != xz[nC]) break;
                  nC++
                } let qC = 1 == bC,
                FC = qC == (1 == (nC < zC ? xz[nC] : QC)) ? qC ? 1 : 2 : QC;
              for (let zC = nC, QC = wC, bC = QC ? ZC[QC - 1].to : CC; zC > oC;) zC == bC && (zC = ZC[--QC].from, bC = QC ? ZC[QC - 1].to : CC), xz[--zC] = FC;
              oC = nC
            } else bC = nC, oC++
          }
        }
      }(wC, bC, QC, fC), Jz(CC, wC, bC, zC, ZC, QC, nC)
    }

    function iz(CC, zC, ZC) {
      if (!CC) return [new Rz(0, 0, zC == Wz ? 1 : 0)];
      if (zC == Fz && !ZC.length && !Gz.test(CC)) return vz(CC.length);
      if (ZC.length)
        for (; CC.length > xz.length;) xz[xz.length] = 256;
      let QC = [],
        wC = zC == Fz ? 0 : 1;
      return Iz(CC, wC, wC, ZC, 0, CC.length, QC), QC
    }

    function vz(CC) {
      return [new Rz(0, CC, 0)]
    }
    let ez = "";

    function hz(CC, zC, ZC, wC, bC) {
      var nC;
      let fC = wC.head - CC.from,
        oC = Rz.find(zC, fC, null !== (nC = wC.bidiLevel) && void 0 !== nC ? nC : -1, wC.assoc),
        qC = zC[oC],
        FC = qC.side(bC, ZC);
      if (fC == FC) {
        let CC = oC += bC ? 1 : -1;
        if (CC < 0 || CC >= zC.length) return null;
        qC = zC[oC = CC], fC = qC.side(!bC, ZC), FC = qC.side(bC, ZC)
      }
      let WC = (0, QC.V)(CC.text, fC, qC.forward(bC, ZC));
      (WC < qC.from || WC > qC.to) && (WC = FC), ez = CC.text.slice(Math.min(fC, WC), Math.max(fC, WC));
      let NC = oC == (bC ? zC.length - 1 : 0) ? null : zC[oC + (bC ? 1 : -1)];
      return NC && WC == FC && NC.level + (bC ? 0 : 1) < qC.level ? QC.i.cursor(NC.side(!bC, ZC) + CC.from, NC.forward(bC, ZC) ? 1 : -1, NC.level) : QC.i.cursor(WC + CC.from, qC.forward(bC, ZC) ? -1 : 1, qC.level)
    }

    function Kz(CC, zC, ZC) {
      for (let QC = zC; QC < ZC; QC++) {
        let zC = Pz(CC.charCodeAt(QC));
        if (1 == zC) return Fz;
        if (2 == zC || 4 == zC) return Wz
      }
      return Fz
    }
    const Yz = QC.n.define(),
      dz = QC.n.define(),
      mz = QC.n.define(),
      Hz = QC.n.define(),
      Ez = QC.n.define(),
      lz = QC.n.define(),
      Xz = QC.n.define(),
      cz = QC.n.define(),
      uz = QC.n.define(),
      rz = QC.n.define({
        combine: CC => CC.some((CC => CC))
      }),
      sz = QC.n.define({
        combine: CC => CC.some((CC => CC))
      }),
      Tz = QC.n.define();
    class az {
      constructor(CC, zC, ZC, QC, wC) {
        let bC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.range = CC, this.y = zC, this.x = ZC, this.yMargin = QC, this.xMargin = wC, this.isSnapshot = bC
      }
      map(CC) {
        return CC.empty ? this : new az(this.range.map(CC), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
      clip(CC) {
        return this.range.to <= CC.doc.length ? this : new az(QC.i.cursor(CC.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
    }
    const tz = QC.w.define({
        map: (CC, zC) => CC.map(zC)
      }),
      Dz = QC.w.define();

    function jz(CC, zC, ZC) {
      let QC = CC.facet(Hz);
      QC.length ? QC[0](zC) : window.onerror && window.onerror(String(zC), ZC, void 0, void 0, zC) || (ZC ? console.error(ZC + ":", zC) : console.error(zC))
    }
    const yz = QC.n.define({
      combine: CC => !CC.length || CC[0]
    });
    let Lz = 0;
    const Uz = QC.n.define({
      combine: CC => CC.filter(((zC, ZC) => {
        for (let QC = 0; QC < ZC; QC++)
          if (CC[QC].plugin == zC.plugin) return !1;
        return !0
      }))
    });
    class Bz {
      constructor(CC, zC, ZC, QC, wC) {
        this.id = CC, this.create = zC, this.domEventHandlers = ZC, this.domEventObservers = QC, this.baseExtensions = wC(this), this.extension = this.baseExtensions.concat(Uz.of({
          plugin: this,
          arg: void 0
        }))
      }
      of(CC) {
        return this.baseExtensions.concat(Uz.of({
          plugin: this,
          arg: CC
        }))
      }
      static define(CC, zC) {
        const {
          eventHandlers: ZC,
          eventObservers: QC,
          provide: wC,
          gC: bC
        } = zC || {};
        return new Bz(Lz++, CC, ZC, QC, (CC => {
          let zC = [];
          return bC && zC.push(CZ.of((zC => {
            let ZC = zC.plugin(CC);
            return ZC ? bC(ZC) : mC.none
          }))), wC && zC.push(wC(CC)), zC
        }))
      }
      static fromClass(CC, zC) {
        return Bz.define(((zC, ZC) => new CC(zC, ZC)), zC)
      }
    }
    class Oz {
      constructor(CC) {
        this.spec = CC, this.mustUpdate = null, this.value = null
      }
      get plugin() {
        return this.spec && this.spec.plugin
      }
      update(CC) {
        if (this.value) {
          if (this.mustUpdate) {
            let CC = this.mustUpdate;
            if (this.mustUpdate = null, this.value.update) try {
              this.value.update(CC)
            } catch (zC) {
              if (jz(CC.state, zC, "CodeMirror plugin crashed"), this.value.destroy) try {
                this.value.destroy()
              } catch (ZC) {}
              this.deactivate()
            }
          }
        } else if (this.spec) try {
          this.value = this.spec.plugin.create(CC, this.spec.arg)
        } catch (zC) {
          jz(CC.state, zC, "CodeMirror plugin crashed"), this.deactivate()
        }
        return this
      }
      destroy(CC) {
        var zC;
        if (null === (zC = this.value) || void 0 === zC ? void 0 : zC.destroy) try {
          this.value.destroy()
        } catch (ZC) {
          jz(CC.state, ZC, "CodeMirror plugin crashed")
        }
      }
      deactivate() {
        this.spec = this.value = null
      }
    }
    const kz = QC.n.define(),
      Vz = QC.n.define(),
      CZ = QC.n.define(),
      zZ = QC.n.define(),
      ZZ = QC.n.define(),
      QZ = QC.n.define(),
      wZ = QC.n.define();

    function bZ(CC, zC) {
      let ZC = CC.state.facet(wZ);
      if (!ZC.length) return ZC;
      let wC = ZC.map((zC => zC instanceof Function ? zC(CC) : zC)),
        bC = [];
      return QC.u.spans(wC, zC.from, zC.to, {
        point() {},
        span(CC, ZC, QC, wC) {
          let nC = CC - zC.from,
            fC = ZC - zC.from,
            oC = bC;
          for (let bC = QC.length - 1; bC >= 0; bC--, wC--) {
            let CC, ZC = QC[bC].spec.bidiIsolate;
            if (null == ZC && (ZC = Kz(zC.text, nC, fC)), wC > 0 && oC.length && (CC = oC[oC.length - 1]).to == nC && CC.direction == ZC) CC.to = fC, oC = CC.inner;
            else {
              let CC = {
                from: nC,
                to: fC,
                direction: ZC,
                inner: []
              };
              oC.push(CC), oC = CC.inner
            }
          }
        }
      }), bC
    }
    const nZ = QC.n.define();

    function fZ(CC) {
      let zC = 0,
        ZC = 0,
        QC = 0,
        wC = 0;
      for (let bC of CC.state.facet(nZ)) {
        let nC = bC(CC);
        nC && (null != nC.left && (zC = Math.max(zC, nC.left)), null != nC.right && (ZC = Math.max(ZC, nC.right)), null != nC.top && (QC = Math.max(QC, nC.top)), null != nC.bottom && (wC = Math.max(wC, nC.bottom)))
      }
      return {
        left: zC,
        right: ZC,
        top: QC,
        bottom: wC
      }
    }
    const oZ = QC.n.define();
    class qZ {
      constructor(CC, zC, ZC, QC) {
        this.fromA = CC, this.toA = zC, this.fromB = ZC, this.toB = QC
      }
      join(CC) {
        return new qZ(Math.min(this.fromA, CC.fromA), Math.max(this.toA, CC.toA), Math.min(this.fromB, CC.fromB), Math.max(this.toB, CC.toB))
      }
      addToSet(CC) {
        let zC = CC.length,
          ZC = this;
        for (; zC > 0; zC--) {
          let QC = CC[zC - 1];
          if (!(QC.fromA > ZC.toA)) {
            if (QC.toA < ZC.fromA) break;
            ZC = ZC.join(QC), CC.splice(zC - 1, 1)
          }
        }
        return CC.splice(zC, 0, ZC), CC
      }
      static extendWithRanges(CC, zC) {
        if (0 == zC.length) return CC;
        let ZC = [];
        for (let QC = 0, wC = 0, bC = 0;;) {
          let nC = QC < CC.length ? CC[QC].fromB : 1e9,
            fC = wC < zC.length ? zC[wC] : 1e9,
            oC = Math.min(nC, fC);
          if (1e9 == oC) break;
          let qC = oC + bC,
            FC = oC,
            WC = qC;
          for (;;)
            if (wC < zC.length && zC[wC] <= FC) {
              let ZC = zC[wC + 1];
              wC += 2, FC = Math.max(FC, ZC);
              for (let zC = QC; zC < CC.length && CC[zC].fromB <= FC; zC++) bC = CC[zC].toA - CC[zC].toB;
              WC = Math.max(WC, ZC + bC)
            } else {
              if (!(QC < CC.length && CC[QC].fromB <= FC)) break;
              {
                let zC = CC[QC++];
                FC = Math.max(FC, zC.toB), WC = Math.max(WC, zC.toA), bC = zC.toA - zC.toB
              }
            } ZC.push(new qZ(qC, WC, oC, FC))
        }
        return ZC
      }
    }
    class FZ {
      constructor(CC, zC, ZC) {
        this.view = CC, this.state = zC, this.transactions = ZC, this.flags = 0, this.startState = CC.state, this.changes = QC.ChangeSet.empty(this.startState.doc.length);
        for (let QC of ZC) this.changes = this.changes.compose(QC.changes);
        let wC = [];
        this.changes.iterChangedRanges(((CC, zC, ZC, QC) => wC.push(new qZ(CC, zC, ZC, QC)))), this.changedRanges = wC
      }
      static create(CC, zC, ZC) {
        return new FZ(CC, zC, ZC)
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
        return this.transactions.some((CC => CC.selection))
      }
      get empty() {
        return 0 == this.flags && 0 == this.transactions.length
      }
    }
    const WZ = [];
    class NZ {
      constructor(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.dom = CC, this.length = zC, this.flags = ZC, this.parent = null, CC.cmTile = this
      }
      get breakAfter() {
        return 1 & this.flags
      }
      get children() {
        return WZ
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
      sync(CC) {
        if (this.flags |= 2, 4 & this.flags) {
          this.flags &= -5;
          let CC = this.domAttrs;
          CC && function(CC, zC) {
            for (let ZC = CC.attributes.length - 1; ZC >= 0; ZC--) {
              let QC = CC.attributes[ZC].name;
              null == zC[QC] && CC.removeAttribute(QC)
            }
            for (let ZC in zC) {
              let QC = zC[ZC];
              "style" == ZC ? CC.style.cssText = QC : CC.getAttribute(ZC) != QC && CC.setAttribute(ZC, QC)
            }
          }(this.dom, CC)
        }
      }
      toString() {
        return this.constructor.name + (this.children.length ? `(${this.children})` : "") + (this.breakAfter ? "#" : "")
      }
      destroy() {
        this.parent = null
      }
      setDOM(CC) {
        this.dom = CC, CC.cmTile = this
      }
      get posAtStart() {
        return this.parent ? this.parent.posBefore(this) : 0
      }
      get posAtEnd() {
        return this.posAtStart + this.length
      }
      posBefore(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.posAtStart;
        for (let ZC of this.children) {
          if (ZC == CC) return zC;
          zC += ZC.length + ZC.breakAfter
        }
        throw new RangeError("Invalid child in posBefore")
      }
      posAfter(CC) {
        return this.posBefore(CC) + CC.length
      }
      covers(CC) {
        return !0
      }
      coordsIn(CC, zC) {
        return null
      }
      domPosFor(CC, zC) {
        let ZC = DC(this.dom),
          QC = this.length ? CC > 0 : zC > 0;
        return new oz(this.parent.dom, ZC + (QC ? 1 : 0), 0 == CC || CC == this.length)
      }
      markDirty(CC) {
        this.flags &= -3, CC && (this.flags |= 4), this.parent && 2 & this.parent.flags && this.parent.markDirty(!1)
      }
      get overrideDOMText() {
        return null
      }
      get root() {
        for (let CC = this; CC; CC = CC.parent)
          if (CC instanceof SZ) return CC;
        return null
      }
      static get(CC) {
        return CC.cmTile
      }
    }
    class MZ extends NZ {
      constructor(CC) {
        super(CC, 0), this._children = []
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
      append(CC) {
        this.children.push(CC), CC.parent = this
      }
      sync(CC) {
        if (2 & this.flags) return;
        super.sync(CC);
        let zC, ZC = this.dom,
          QC = null,
          wC = (null === CC || void 0 === CC ? void 0 : CC.node) == ZC ? CC : null,
          bC = 0;
        for (let nC of this.children) {
          if (nC.sync(CC), bC += nC.length + nC.breakAfter, zC = QC ? QC.nextSibling : ZC.firstChild, wC && zC != nC.dom && (wC.written = !0), nC.dom.parentNode == ZC)
            for (; zC && zC != nC.dom;) zC = gZ(zC);
          else ZC.insertBefore(nC.dom, zC);
          QC = nC.dom
        }
        for (zC = QC ? QC.nextSibling : ZC.firstChild, wC && zC && (wC.written = !0); zC;) zC = gZ(zC);
        this.length = bC
      }
    }

    function gZ(CC) {
      let zC = CC.nextSibling;
      return CC.parentNode.removeChild(CC), zC
    }
    class SZ extends MZ {
      constructor(CC, zC) {
        super(zC), this.view = CC
      }
      owns(CC) {
        for (; CC; CC = CC.parent)
          if (CC == this) return !0;
        return !1
      }
      isBlock() {
        return !0
      }
      nearest(CC) {
        for (;;) {
          if (!CC) return null;
          let zC = NZ.get(CC);
          if (zC && this.owns(zC)) return zC;
          CC = CC.parentNode
        }
      }
      blockTiles(CC) {
        for (let zC = [], ZC = this, QC = 0, wC = 0;;)
          if (QC == ZC.children.length) {
            if (!zC.length) return;
            ZC = ZC.parent, ZC.breakAfter && wC++, QC = zC.pop()
          } else {
            let bC = ZC.children[QC++];
            if (bC instanceof pZ) zC.push(QC), ZC = bC, QC = 0;
            else {
              let zC = wC + bC.length,
                ZC = CC(bC, wC);
              if (void 0 !== ZC) return ZC;
              wC = zC + bC.breakAfter
            }
          }
      }
      resolveBlock(CC, zC) {
        let ZC, QC, wC = -1,
          bC = -1;
        if (this.blockTiles(((nC, fC) => {
            let oC = fC + nC.length;
            if (CC >= fC && CC <= oC) {
              if (nC.isWidget() && zC >= -1 && zC <= 1) {
                if (32 & nC.flags) return !0;
                16 & nC.flags && (ZC = void 0)
              }(fC < CC || CC == oC && (zC < -1 ? nC.length : nC.covers(1))) && (!ZC || !nC.isWidget() && ZC.isWidget()) && (ZC = nC, wC = CC - fC), (oC > CC || CC == fC && (zC > 1 ? nC.length : nC.covers(-1))) && (!QC || !nC.isWidget() && QC.isWidget()) && (QC = nC, bC = CC - fC)
            }
          })), !ZC && !QC) throw new Error("No tile at position " + CC);
        return ZC && zC < 0 || !QC ? {
          tile: ZC,
          offset: wC
        } : {
          tile: QC,
          offset: bC
        }
      }
    }
    class pZ extends MZ {
      constructor(CC, zC) {
        super(CC), this.wrapper = zC
      }
      isBlock() {
        return !0
      }
      covers(CC) {
        return !!this.children.length && (CC < 0 ? this.children[0].covers(-1) : this.lastChild.covers(1))
      }
      get domAttrs() {
        return this.wrapper.attributes
      }
      static of (CC, zC) {
        let ZC = new pZ(zC || document.createElement(CC.tagName), CC);
        return zC || (ZC.flags |= 4), ZC
      }
    }
    class PZ extends MZ {
      constructor(CC, zC) {
        super(CC), this.attrs = zC
      }
      isLine() {
        return !0
      }
      static start(CC, zC, ZC) {
        let QC = new PZ(zC || document.createElement("div"), CC);
        return zC && ZC || (QC.flags |= 4), QC
      }
      get domAttrs() {
        return this.attrs
      }
      resolveInline(CC, zC, ZC) {
        let QC = null,
          wC = -1,
          bC = null,
          nC = -1;
        ! function CC(fC, oC) {
          for (let qC = 0, FC = 0; qC < fC.children.length && FC <= oC; qC++) {
            let WC = fC.children[qC],
              NC = FC + WC.length;
            NC >= oC && (WC.isComposite() ? CC(WC, oC - FC) : (!bC || bC.isHidden && (zC > 0 || ZC && GZ(bC, WC))) && (NC > oC || 32 & WC.flags) ? (bC = WC, nC = oC - FC) : (FC < oC || 16 & WC.flags && !WC.isHidden) && (QC = WC, wC = oC - FC)), FC = NC
          }
        }(this, CC);
        let fC = (zC < 0 ? QC : bC) || QC || bC;
        return fC ? {
          tile: fC,
          offset: fC == QC ? wC : nC
        } : null
      }
      coordsIn(CC, zC) {
        let ZC = this.resolveInline(CC, zC, !0);
        return ZC ? ZC.tile.coordsIn(Math.max(0, ZC.offset), zC) : function(CC) {
          let zC = CC.dom.lastChild;
          if (!zC) return CC.dom.getBoundingClientRect();
          let ZC = aC(zC);
          return ZC[ZC.length - 1] || null
        }(this)
      }
      domIn(CC, zC) {
        let ZC = this.resolveInline(CC, zC);
        if (ZC) {
          let {
            tile: CC,
            offset: QC
          } = ZC;
          if (this.dom.contains(CC.dom)) return CC.isText() ? new oz(CC.dom, Math.min(CC.dom.nodeValue.length, QC)) : CC.domPosFor(QC, 16 & CC.flags ? 1 : 32 & CC.flags ? -1 : zC);
          let wC = ZC.tile.parent,
            bC = !1;
          for (let zC of wC.children) {
            if (bC) return new oz(zC.dom, 0);
            zC == ZC.tile && (bC = !0)
          }
        }
        return new oz(this.dom, 0)
      }
    }

    function GZ(CC, zC) {
      let ZC = CC.coordsIn(0, 1),
        QC = zC.coordsIn(0, 1);
      return ZC && QC && QC.top < ZC.bottom
    }
    class RZ extends MZ {
      constructor(CC, zC) {
        super(CC), this.mark = zC
      }
      get domAttrs() {
        return this.mark.attrs
      }
      static of (CC, zC) {
        let ZC = new RZ(zC || document.createElement(CC.tagName), CC);
        return zC || (ZC.flags |= 4), ZC
      }
    }
    class AZ extends NZ {
      constructor(CC, zC) {
        super(CC, zC.length), this.text = zC
      }
      sync(CC) {
        2 & this.flags || (super.sync(CC), this.dom.nodeValue != this.text && (CC && CC.node == this.dom && (CC.written = !0), this.dom.nodeValue = this.text))
      }
      isText() {
        return !0
      }
      toString() {
        return JSON.stringify(this.text)
      }
      coordsIn(CC, zC) {
        let ZC = this.dom.nodeValue.length;
        CC > ZC && (CC = ZC);
        let QC = CC,
          wC = CC,
          bC = 0;
        0 == CC && zC < 0 || CC == ZC && zC >= 0 ? IC.chrome || IC.gecko || (CC ? (QC--, bC = 1) : wC < ZC && (wC++, bC = -1)) : zC < 0 ? QC-- : wC < ZC && wC++;
        let nC = Qz(this.dom, QC, wC).getClientRects();
        if (!nC.length) return null;
        let fC = nC[(bC ? bC < 0 : zC >= 0) ? 0 : nC.length - 1];
        return IC.safari && !bC && 0 == fC.width && (fC = Array.prototype.find.call(nC, (CC => CC.width)) || fC), bC ? UC(fC, bC < 0) : fC || null
      }
      static of (CC, zC) {
        let ZC = new AZ(zC || document.createTextNode(CC), CC);
        return zC || (ZC.flags |= 2), ZC
      }
    }
    class xZ extends NZ {
      constructor(CC, zC, ZC, QC) {
        super(CC, zC, QC), this.widget = ZC
      }
      isWidget() {
        return !0
      }
      get isHidden() {
        return this.widget.isHidden
      }
      covers(CC) {
        return !(48 & this.flags) && (this.flags & (CC < 0 ? 64 : 128)) > 0
      }
      coordsIn(CC, zC) {
        return this.coordsInWidget(CC, zC, !1)
      }
      coordsInWidget(CC, zC, ZC) {
        let QC = this.widget.coordsAt(this.dom, CC, zC);
        if (QC) return QC;
        if (ZC) return UC(this.dom.getBoundingClientRect(), this.length ? 0 == CC : zC <= 0);
        {
          let zC = this.dom.getClientRects(),
            ZC = null;
          if (!zC.length) return null;
          let QC = !!(16 & this.flags) || !(32 & this.flags) && CC > 0;
          for (let wC = QC ? zC.length - 1 : 0; ZC = zC[wC], !(CC > 0 ? 0 == wC : wC == zC.length - 1 || ZC.top < ZC.bottom); wC += QC ? -1 : 1);
          return UC(ZC, !QC)
        }
      }
      get overrideDOMText() {
        if (!this.length) return QC.B.empty;
        let {
          root: CC
        } = this;
        if (!CC) return QC.B.empty;
        let zC = this.posAtStart;
        return CC.view.state.doc.slice(zC, zC + this.length)
      }
      destroy() {
        super.destroy(), this.widget.destroy(this.dom)
      }
      static of (CC, zC, ZC, QC, wC) {
        return wC || (wC = CC.toDOM(zC), CC.editable || (wC.contentEditable = "false")), new xZ(wC, ZC, CC, QC)
      }
    }
    class JZ extends NZ {
      constructor(CC) {
        let zC = document.createElement("img");
        zC.className = "cm-widgetBuffer", zC.setAttribute("aria-hidden", "true"), super(zC, 0, CC)
      }
      get isHidden() {
        return !0
      }
      get overrideDOMText() {
        return QC.B.empty
      }
      coordsIn(CC) {
        return this.dom.getBoundingClientRect()
      }
    }
    class IZ {
      constructor(CC) {
        this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = CC
      }
      advance(CC, zC, ZC) {
        let {
          tile: QC,
          index: wC,
          beforeBreak: bC,
          parents: nC
        } = this;
        for (; CC || zC > 0;)
          if (QC.isComposite())
            if (bC) {
              if (!CC) break;
              ZC && ZC.break(), CC--, bC = !1
            } else if (wC == QC.children.length) {
          if (!CC && !nC.length) break;
          ZC && ZC.leave(QC), bC = !!QC.breakAfter, ({
            tile: QC,
            index: wC
          } = nC.pop()), wC++
        } else {
          let fC = QC.children[wC],
            oC = fC.breakAfter;
          !(zC > 0 ? fC.length <= CC : fC.length < CC) || ZC && !1 === ZC.skip(fC, 0, fC.length) && fC.isComposite ? (nC.push({
            tile: QC,
            index: wC
          }), QC = fC, wC = 0, ZC && fC.isComposite() && ZC.enter(fC)) : (bC = !!oC, wC++, CC -= fC.length)
        } else if (wC == QC.length) bC = !!QC.breakAfter, ({
          tile: QC,
          index: wC
        } = nC.pop()), wC++;
        else {
          if (!CC) break;
          {
            let zC = Math.min(CC, QC.length - wC);
            ZC && ZC.skip(QC, wC, wC + zC), CC -= zC, wC += zC
          }
        }
        return this.tile = QC, this.index = wC, this.beforeBreak = bC, this
      }
      get root() {
        return this.parents.length ? this.parents[0].tile : this.tile
      }
    }
    class iZ {
      constructor(CC, zC, ZC, QC) {
        this.from = CC, this.to = zC, this.wrapper = ZC, this.rank = QC
      }
    }
    class vZ {
      constructor(CC, zC, ZC) {
        this.cache = CC, this.root = zC, this.blockWrappers = ZC, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0
      }
      addText(CC, zC, ZC, QC) {
        var wC;
        this.flushBuffer();
        let bC = this.ensureMarks(zC, ZC),
          nC = bC.lastChild;
        if (nC && nC.isText() && !(8 & nC.flags) && nC.length + CC.length < 512) {
          this.cache.reused.set(nC, 2), (bC.children[bC.children.length - 1] = new AZ(nC.dom, nC.text + CC)).parent = bC
        } else bC.append(QC || AZ.of(CC, null === (wC = this.cache.find(AZ)) || void 0 === wC ? void 0 : wC.dom));
        this.pos += CC.length, this.afterWidget = null
      }
      addComposition(CC, zC) {
        let ZC = this.curLine;
        ZC.dom != zC.line.dom && (ZC.setDOM(this.cache.reused.has(zC.line) ? HZ(zC.line.dom) : zC.line.dom), this.cache.reused.set(zC.line, 2));
        let QC = ZC;
        for (let nC = zC.marks.length - 1; nC >= 0; nC--) {
          let CC = zC.marks[nC],
            ZC = QC.lastChild;
          if (ZC instanceof RZ && ZC.mark.eq(CC.mark)) ZC.dom != CC.dom && ZC.setDOM(HZ(CC.dom)), QC = ZC;
          else {
            if (this.cache.reused.get(CC)) {
              let zC = NZ.get(CC.dom);
              zC && zC.setDOM(HZ(CC.dom))
            }
            let zC = RZ.of(CC.mark, CC.dom);
            QC.append(zC), QC = zC
          }
          this.cache.reused.set(CC, 2)
        }
        let wC = NZ.get(CC.text);
        wC && this.cache.reused.set(wC, 2);
        let bC = new AZ(CC.text, CC.text.nodeValue);
        bC.flags |= 8, QC.append(bC)
      }
      addInlineWidget(CC, zC, ZC) {
        let QC = this.afterWidget && 48 & CC.flags && (48 & this.afterWidget.flags) == (48 & CC.flags);
        QC || this.flushBuffer();
        let wC = this.ensureMarks(zC, ZC);
        QC || 16 & CC.flags || wC.append(this.getBuffer(1)), wC.append(CC), this.pos += CC.length, this.afterWidget = CC
      }
      addMark(CC, zC, ZC) {
        this.flushBuffer(), this.ensureMarks(zC, ZC).append(CC), this.pos += CC.length, this.afterWidget = null
      }
      addBlockWidget(CC) {
        this.getBlockPos().append(CC), this.pos += CC.length, this.lastBlock = CC, this.endLine()
      }
      continueWidget(CC) {
        (this.afterWidget || this.lastBlock).length += CC, this.pos += CC
      }
      addLineStart(CC, zC) {
        var ZC;
        CC || (CC = mZ);
        let QC = PZ.start(CC, zC || (null === (ZC = this.cache.find(PZ)) || void 0 === ZC ? void 0 : ZC.dom), !!zC);
        this.getBlockPos().append(this.lastBlock = this.curLine = QC)
      }
      addLine(CC) {
        this.getBlockPos().append(CC), this.pos += CC.length, this.lastBlock = CC, this.endLine()
      }
      addBreak() {
        this.lastBlock.flags |= 1, this.endLine(), this.pos++
      }
      addLineStartIfNotCovered(CC) {
        this.blockPosCovered() || this.addLineStart(CC)
      }
      ensureLine(CC) {
        this.curLine || this.addLineStart(CC)
      }
      ensureMarks(CC, zC) {
        var ZC;
        let QC = this.curLine;
        for (let wC = CC.length - 1; wC >= 0; wC--) {
          let bC, nC = CC[wC];
          if (zC > 0 && (bC = QC.lastChild) && bC instanceof RZ && bC.mark.eq(nC)) QC = bC, zC--;
          else {
            let CC = RZ.of(nC, null === (ZC = this.cache.find(RZ, (CC => CC.mark.eq(nC)))) || void 0 === ZC ? void 0 : ZC.dom);
            QC.append(CC), QC = CC, zC = 0
          }
        }
        return QC
      }
      endLine() {
        if (this.curLine) {
          this.flushBuffer();
          let CC = this.curLine.lastChild;
          CC && dZ(this.curLine, !1) && ("BR" == CC.dom.nodeName || !CC.isWidget() || IC.ios && dZ(this.curLine, !0)) || this.curLine.append(this.cache.findWidget(lZ, 0, 32) || new xZ(lZ.toDOM(), 0, lZ, 32)), this.curLine = this.afterWidget = null
        }
      }
      updateBlockWrappers() {
        this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
        for (let CC = this.wrappers.length - 1; CC >= 0; CC--) this.wrappers[CC].to < this.pos && this.wrappers.splice(CC, 1);
        for (let CC = this.blockWrappers; CC.value && CC.from <= this.pos; CC.next())
          if (CC.to >= this.pos) {
            let zC = new iZ(CC.from, CC.to, CC.value, CC.rank),
              ZC = this.wrappers.length;
            for (; ZC > 0 && (this.wrappers[ZC - 1].rank - zC.rank || this.wrappers[ZC - 1].to - zC.to) < 0;) ZC--;
            this.wrappers.splice(ZC, 0, zC)
          } this.wrapperPos = this.pos
      }
      getBlockPos() {
        var CC;
        this.updateBlockWrappers();
        let zC = this.root;
        for (let ZC of this.wrappers) {
          let QC = zC.lastChild;
          if (ZC.from < this.pos && QC instanceof pZ && QC.wrapper.eq(ZC.wrapper)) zC = QC;
          else {
            let QC = pZ.of(ZC.wrapper, null === (CC = this.cache.find(pZ, (CC => CC.wrapper.eq(ZC.wrapper)))) || void 0 === CC ? void 0 : CC.dom);
            zC.append(QC), zC = QC
          }
        }
        return zC
      }
      blockPosCovered() {
        let CC = this.lastBlock;
        return null != CC && !CC.breakAfter && (!CC.isWidget() || (160 & CC.flags) > 0)
      }
      getBuffer(CC) {
        let zC = 2 | (CC < 0 ? 16 : 32),
          ZC = this.cache.find(JZ, void 0, 1);
        return ZC && (ZC.flags = zC), ZC || new JZ(zC)
      }
      flushBuffer() {
        !this.afterWidget || 32 & this.afterWidget.flags || (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null)
      }
    }
    class eZ {
      constructor(CC) {
        this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = CC.iter()
      }
      skip(CC) {
        this.textOff + CC <= this.text.length ? this.textOff += CC : (this.skipCount += CC - (this.text.length - this.textOff), this.text = "", this.textOff = 0)
      }
      next(CC) {
        if (this.textOff == this.text.length) {
          let {
            value: zC,
            lineBreak: ZC,
            done: QC
          } = this.cursor.next(this.skipCount);
          if (this.skipCount = 0, QC) throw new Error("Ran out of text content when drawing inline views");
          this.text = zC;
          let wC = this.textOff = Math.min(CC, zC.length);
          return ZC ? null : zC.slice(0, wC)
        }
        let zC = Math.min(this.text.length, this.textOff + CC),
          ZC = this.text.slice(this.textOff, zC);
        return this.textOff = zC, ZC
      }
    }
    const hZ = [xZ, PZ, AZ, RZ, JZ, pZ, SZ];
    for (let En = 0; En < hZ.length; En++) hZ[En].bucket = En;
    class KZ {
      constructor(CC) {
        this.view = CC, this.buckets = hZ.map((() => [])), this.index = hZ.map((() => 0)), this.reused = new Map
      }
      add(CC) {
        let zC = CC.constructor.bucket,
          ZC = this.buckets[zC];
        ZC.length < 6 ? ZC.push(CC) : ZC[this.index[zC] = (this.index[zC] + 1) % 6] = CC
      }
      find(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          QC = CC.bucket,
          wC = this.buckets[QC],
          bC = this.index[QC];
        for (let nC = wC.length - 1; nC >= 0; nC--) {
          let CC = (nC + bC) % wC.length,
            fC = wC[CC];
          if ((!zC || zC(fC)) && !this.reused.has(fC)) return wC.splice(CC, 1), CC < bC && this.index[QC]--, this.reused.set(fC, ZC), fC
        }
        return null
      }
      findWidget(CC, zC, ZC) {
        let QC = this.buckets[0];
        if (QC.length)
          for (let wC = 0, bC = 0;; wC++) {
            if (wC == QC.length) {
              if (bC) return null;
              bC = 1, wC = 0
            }
            let nC = QC[wC];
            if (!this.reused.has(nC) && (0 == bC ? nC.widget.compare(CC) : nC.widget.constructor == CC.constructor && CC.updateDOM(nC.dom, this.view, nC.widget))) return QC.splice(wC, 1), wC < this.index[0] && this.index[0]--, nC.widget == CC && nC.length == zC && (497 & nC.flags) == ZC ? (this.reused.set(nC, 1), nC) : (this.reused.set(nC, 2), new xZ(nC.dom, zC, CC, -498 & nC.flags | ZC))
          }
      }
      reuse(CC) {
        return this.reused.set(CC, 1), CC
      }
      maybeReuse(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        if (!this.reused.has(CC)) return this.reused.set(CC, zC), CC.dom
      }
      clear() {
        for (let CC = 0; CC < this.buckets.length; CC++) this.buckets[CC].length = this.index[CC] = 0
      }
    }
    class YZ {
      constructor(CC, zC, ZC, wC, bC) {
        this.view = CC, this.gC = wC, this.disallowBlockEffectsFor = bC, this.openWidget = !1, this.openMarks = 0, this.cache = new KZ(CC), this.text = new eZ(CC.state.doc), this.builder = new vZ(this.cache, new SZ(CC, CC.contentDOM), QC.u.iter(ZC)), this.cache.reused.set(zC, 2), this.old = new IZ(zC), this.reuseWalker = {
          skip: (CC, zC, ZC) => {
            if (this.cache.add(CC), CC.isComposite()) return !1
          },
          enter: CC => this.cache.add(CC),
          leave: () => {},
          break: () => {}
        }
      }
      run(CC, zC) {
        let ZC = zC && this.getCompositionContext(zC.text);
        for (let QC = 0, wC = 0, bC = 0;;) {
          let nC = bC < CC.length ? CC[bC++] : null,
            fC = nC ? nC.fromA : this.old.root.length;
          if (fC > QC) {
            let CC = fC - QC;
            this.preserve(CC, !bC, !nC), QC = fC, wC += CC
          }
          if (!nC) break;
          zC && nC.fromA <= zC.range.fromA && nC.toA >= zC.range.toA ? (this.forward(nC.fromA, zC.range.fromA, zC.range.fromA < zC.range.toA ? 1 : -1), this.emit(wC, zC.range.fromB), this.cache.clear(), this.builder.addComposition(zC, ZC), this.text.skip(zC.range.toB - zC.range.fromB), this.forward(zC.range.fromA, nC.toA), this.emit(zC.range.toB, nC.toB)) : (this.forward(nC.fromA, nC.toA), this.emit(wC, nC.toB)), wC = nC.toB, QC = nC.toA
        }
        return this.builder.curLine && this.builder.endLine(), this.builder.root
      }
      preserve(CC, zC, ZC) {
        let QC = function(CC) {
            let zC = [];
            for (let ZC = CC.parents.length; ZC > 1; ZC--) {
              let QC = ZC == CC.parents.length ? CC.tile : CC.parents[ZC].tile;
              QC instanceof RZ && zC.push(QC.mark)
            }
            return zC
          }(this.old),
          wC = this.openMarks;
        this.old.advance(CC, ZC ? 1 : -1, {
          skip: (CC, zC, ZC) => {
            if (CC.isWidget())
              if (this.openWidget) this.builder.continueWidget(ZC - zC);
              else {
                let bC = ZC > 0 || zC < CC.length ? xZ.of(CC.widget, this.view, ZC - zC, 496 & CC.flags, this.cache.maybeReuse(CC)) : this.cache.reuse(CC);
                256 & bC.flags ? (bC.flags &= -2, this.builder.addBlockWidget(bC)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(bC, QC, wC), wC = QC.length)
              }
            else if (CC.isText()) this.builder.ensureLine(null), zC || ZC != CC.length || this.cache.reused.has(CC) ? (this.cache.add(CC), this.builder.addText(CC.text.slice(zC, ZC), QC, wC)) : this.builder.addText(CC.text, QC, wC, this.cache.reuse(CC)), wC = QC.length;
            else if (CC.isLine()) CC.flags &= -2, this.cache.reused.set(CC, 1), this.builder.addLine(CC);
            else if (CC instanceof JZ) this.cache.add(CC);
            else {
              if (!(CC instanceof RZ)) return !1;
              this.builder.ensureLine(null), this.builder.addMark(CC, QC, wC), this.cache.reused.set(CC, 1), wC = QC.length
            }
            this.openWidget = !1
          },
          enter: CC => {
            CC.isLine() ? this.builder.addLineStart(CC.attrs, this.cache.maybeReuse(CC)) : (this.cache.add(CC), CC instanceof RZ && QC.unshift(CC.mark)), this.openWidget = !1
          },
          leave: CC => {
            CC.isLine() ? QC.length && (QC.length = wC = 0) : CC instanceof RZ && (QC.shift(), wC = Math.min(wC, QC.length))
          },
          break: () => {
            this.builder.addBreak(), this.openWidget = !1
          }
        }), this.text.skip(CC)
      }
      emit(CC, zC) {
        let ZC = null,
          wC = this.builder,
          bC = 0,
          nC = QC.u.spans(this.gC, CC, zC, {
            point: (CC, zC, QC, nC, fC, oC) => {
              if (QC instanceof lC) {
                if (this.disallowBlockEffectsFor[oC]) {
                  if (QC.block) throw new RangeError("Block decorations may not be specified via plugins");
                  if (zC > this.view.state.doc.lineAt(CC).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins")
                }
                if (bC = nC.length, fC > nC.length) wC.continueWidget(zC - CC);
                else {
                  let bC = QC.widget || (QC.block ? EZ.block : EZ.inline),
                    oC = function(CC) {
                      let zC = CC.isReplace ? (CC.startSide < 0 ? 64 : 0) | (CC.endSide > 0 ? 128 : 0) : CC.startSide > 0 ? 32 : 16;
                      CC.block && (zC |= 256);
                      return zC
                    }(QC),
                    qC = this.cache.findWidget(bC, zC - CC, oC) || xZ.of(bC, this.view, zC - CC, oC);
                  QC.block ? (QC.startSide > 0 && wC.addLineStartIfNotCovered(ZC), wC.addBlockWidget(qC)) : (wC.ensureLine(ZC), wC.addInlineWidget(qC, nC, fC))
                }
                ZC = null
              } else ZC = function(CC, zC) {
                let ZC = zC.spec.attributes,
                  QC = zC.spec.class;
                if (!ZC && !QC) return CC;
                CC || (CC = {
                  class: "cm-line"
                });
                ZC && iC(ZC, CC);
                QC && (CC.class += " " + QC);
                return CC
              }(ZC, QC);
              zC > CC && this.text.skip(zC - CC)
            },
            span: (CC, zC, QC, bC) => {
              for (let nC = CC; nC < zC;) {
                let fC = this.text.next(Math.min(512, zC - nC));
                null == fC ? (wC.addLineStartIfNotCovered(ZC), wC.addBreak(), nC++) : (wC.ensureLine(ZC), wC.addText(fC, QC, nC == CC ? bC : QC.length), nC += fC.length), ZC = null
              }
            }
          });
        wC.addLineStartIfNotCovered(ZC), this.openWidget = nC > bC, this.openMarks = nC
      }
      forward(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        zC - CC <= 10 ? this.old.advance(zC - CC, ZC, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(zC - CC - 10, -1), this.old.advance(5, ZC, this.reuseWalker))
      }
      getCompositionContext(CC) {
        let zC = [],
          ZC = null;
        for (let QC = CC.parentNode;; QC = QC.parentNode) {
          let CC = NZ.get(QC);
          if (QC == this.view.contentDOM) break;
          CC instanceof RZ ? zC.push(CC) : (null === CC || void 0 === CC ? void 0 : CC.isLine()) ? ZC = CC : CC instanceof pZ || ("DIV" != QC.nodeName || ZC || QC == this.view.contentDOM ? ZC || zC.push(RZ.of(new HC({
            tagName: QC.nodeName.toLowerCase(),
            attributes: KC(QC)
          }), QC)) : ZC = new PZ(QC, mZ))
        }
        return {
          line: ZC,
          marks: zC
        }
      }
    }

    function dZ(CC, zC) {
      let ZC = CC => {
        for (let QC of CC.children)
          if ((zC ? QC.isText() : QC.length) || ZC(QC)) return !0;
        return !1
      };
      return ZC(CC)
    }
    const mZ = {
      class: "cm-line"
    };

    function HZ(CC) {
      let zC = NZ.get(CC);
      return zC && zC.setDOM(CC.cloneNode()), CC
    }
    class EZ extends YC {
      constructor(CC) {
        super(), this.tag = CC
      }
      eq(CC) {
        return CC.tag == this.tag
      }
      toDOM() {
        return document.createElement(this.tag)
      }
      updateDOM(CC) {
        return CC.nodeName.toLowerCase() == this.tag
      }
      get isHidden() {
        return !0
      }
    }
    EZ.inline = new EZ("span"), EZ.block = new EZ("div");
    const lZ = new class extends YC {
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
    class XZ {
      constructor(CC) {
        this.view = CC, this.gC = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = mC.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new SZ(CC, CC.contentDOM), this.updateInner([new qZ(0, 0, 0, CC.state.doc.length)], null)
      }
      update(CC) {
        var zC;
        let ZC = CC.changedRanges;
        this.minWidth > 0 && ZC.length && (ZC.every((CC => {
          let {
            fromA: zC,
            toA: ZC
          } = CC;
          return ZC < this.minWidthFrom || zC > this.minWidthTo
        })) ? (this.minWidthFrom = CC.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = CC.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(CC);
        let wC = -1;
        this.view.inputState.composing >= 0 && !this.view.observer.editContext && ((null === (zC = this.domChanged) || void 0 === zC ? void 0 : zC.newSel) ? wC = this.domChanged.newSel.head : function(CC, zC) {
          let ZC = !1;
          zC && CC.iterChangedRanges(((CC, QC) => {
            CC < zC.to && QC > zC.from && (ZC = !0)
          }));
          return ZC
        }(CC.changes, this.hasComposition) || CC.selectionSet || (wC = CC.state.selection.main.head));
        let bC = wC > -1 ? function(CC, zC, ZC) {
          let QC = uZ(CC, ZC);
          if (!QC) return null;
          let {
            node: wC,
            from: bC,
            to: nC
          } = QC, fC = wC.nodeValue;
          if (/[\n\r]/.test(fC)) return null;
          if (CC.state.doc.sliceString(QC.from, QC.to) != fC) return null;
          let oC = zC.invertedDesc;
          return {
            range: new qZ(oC.mapPos(bC), oC.mapPos(nC), bC, nC),
            text: wC
          }
        }(this.view, CC.changes, wC) : null;
        if (this.domChanged = null, this.hasComposition) {
          let {
            from: zC,
            to: QC
          } = this.hasComposition;
          ZC = new qZ(zC, QC, CC.changes.mapPos(zC, -1), CC.changes.mapPos(QC, 1)).addToSet(ZC.slice())
        }
        this.hasComposition = bC ? {
          from: bC.range.fromB,
          to: bC.range.toB
        } : null, (IC.ie || IC.chrome) && !bC && CC && CC.state.doc.lines != CC.startState.doc.lines && (this.forceSelection = !0);
        let nC = this.gC,
          fC = this.blockWrappers;
        this.updateDeco();
        let oC = function(CC, zC, ZC) {
          let wC = new rZ;
          return QC.u.compare(CC, zC, ZC, wC), wC.changes
        }(nC, this.gC, CC.changes);
        oC.length && (ZC = qZ.extendWithRanges(ZC, oC));
        let qC = function(CC, zC, ZC) {
          let wC = new sZ;
          return QC.u.compare(CC, zC, ZC, wC), wC.changes
        }(fC, this.blockWrappers, CC.changes);
        return qC.length && (ZC = qZ.extendWithRanges(ZC, qC)), bC && !ZC.some((CC => CC.fromA <= bC.range.fromA && CC.toA >= bC.range.toA)) && (ZC = bC.range.addToSet(ZC.slice())), !(2 & this.tile.flags && 0 == ZC.length) && (this.updateInner(ZC, bC), CC.transactions.length && (this.lastUpdate = Date.now()), !0)
      }
      updateInner(CC, zC) {
        this.view.viewState.mustMeasureContent = !0;
        let {
          observer: ZC
        } = this.view;
        ZC.ignore((() => {
          if (zC || CC.length) {
            let ZC = this.tile,
              QC = new YZ(this.view, ZC, this.blockWrappers, this.gC, this.dynamicDecorationMap);
            zC && NZ.get(zC.text) && QC.cache.reused.set(NZ.get(zC.text), 2), this.tile = QC.run(CC, zC), cZ(ZC, QC.cache.reused)
          }
          this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
          let QC = IC.chrome || IC.ios ? {
            node: ZC.selectionRange.focusNode,
            written: !1
          } : void 0;
          this.tile.sync(QC), !QC || !QC.written && ZC.selectionRange.focusNode == QC.node && this.tile.dom.contains(QC.node) || (this.forceSelection = !0), this.tile.dom.style.height = ""
        }));
        let QC = [];
        if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
          for (let wC of this.tile.children) wC.isWidget() && wC.widget instanceof TZ && QC.push(wC.dom);
        ZC.updateGaps(QC)
      }
      updateEditContextFormatting(CC) {
        this.editContextFormatting = this.editContextFormatting.map(CC.changes);
        for (let zC of CC.transactions)
          for (let CC of zC.effects) CC.is(Dz) && (this.editContextFormatting = CC.value)
      }
      updateSelection() {
        let CC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this.view.observer.selectionRange.focusNode || this.view.observer.readSelectionRange();
        let {
          dom: zC
        } = this.tile, ZC = this.view.root.activeElement, QC = ZC == zC, wC = !QC && !(this.view.state.facet(yz) || zC.tabIndex > -1) && TC(zC, this.view.observer.selectionRange) && !(ZC && zC.contains(ZC));
        if (!(QC || CC || wC)) return;
        let bC = this.forceSelection;
        this.forceSelection = !1;
        let nC, fC, oC = this.view.state.selection.main;
        if (oC.empty ? fC = nC = this.inlineDOMNearPos(oC.anchor, oC.assoc || 1) : (fC = this.inlineDOMNearPos(oC.head, oC.head == oC.from ? 1 : -1), nC = this.inlineDOMNearPos(oC.anchor, oC.anchor == oC.from ? 1 : -1)), IC.gecko && oC.empty && !this.hasComposition && (1 == (qC = nC).node.nodeType && qC.node.firstChild && (0 == qC.offset || "false" == qC.node.childNodes[qC.offset - 1].contentEditable) && (qC.offset == qC.node.childNodes.length || "false" == qC.node.childNodes[qC.offset].contentEditable))) {
          let CC = document.createTextNode("");
          this.view.observer.ignore((() => nC.node.insertBefore(CC, nC.node.childNodes[nC.offset] || null))), nC = fC = new oz(CC, 0), bC = !0
        }
        var qC;
        let FC = this.view.observer.selectionRange;
        !bC && FC.focusNode && (tC(nC.node, nC.offset, FC.anchorNode, FC.anchorOffset) && tC(fC.node, fC.offset, FC.focusNode, FC.focusOffset) || this.suppressWidgetCursorChange(FC, oC)) || (this.view.observer.ignore((() => {
          IC.android && IC.chrome && zC.contains(FC.focusNode) && function(CC, zC) {
            for (let ZC = CC; ZC && ZC != zC; ZC = ZC.assignedSlot || ZC.parentNode)
              if (1 == ZC.nodeType && "false" == ZC.contentEditable) return !0;
            return !1
          }(FC.focusNode, zC) && (zC.blur(), zC.focus({
            preventScroll: !0
          }));
          let CC = rC(this.view.root);
          if (CC)
            if (oC.empty) {
              if (IC.gecko) {
                let CC = (QC = nC.node, bC = nC.offset, 1 != QC.nodeType ? 0 : (bC && "false" == QC.childNodes[bC - 1].contentEditable ? 1 : 0) | (bC < QC.childNodes.length && "false" == QC.childNodes[bC].contentEditable ? 2 : 0));
                if (CC && 3 != CC) {
                  let zC = (1 == CC ? nz : fz)(nC.node, nC.offset);
                  zC && (nC = new oz(zC.node, zC.offset))
                }
              }
              CC.collapse(nC.node, nC.offset), null != oC.bidiLevel && void 0 !== CC.caretBidiLevel && (CC.caretBidiLevel = oC.bidiLevel)
            } else if (CC.extend) {
            CC.collapse(nC.node, nC.offset);
            try {
              CC.extend(fC.node, fC.offset)
            } catch (qC) {}
          } else {
            let zC = document.createRange();
            oC.anchor > oC.head && ([nC, fC] = [fC, nC]), zC.setEnd(fC.node, fC.offset), zC.setStart(nC.node, nC.offset), CC.removeAllRanges(), CC.addRange(zC)
          } else;
          var QC, bC;
          wC && this.view.root.activeElement == zC && (zC.blur(), ZC && ZC.focus())
        })), this.view.observer.setSelectionRange(nC, fC)), this.impreciseAnchor = nC.precise ? null : new oz(FC.anchorNode, FC.anchorOffset), this.impreciseHead = fC.precise ? null : new oz(FC.focusNode, FC.focusOffset)
      }
      suppressWidgetCursorChange(CC, zC) {
        return this.hasComposition && zC.empty && tC(CC.focusNode, CC.focusOffset, CC.anchorNode, CC.anchorOffset) && this.posFromDOM(CC.focusNode, CC.focusOffset) == zC.head
      }
      enforceCursorAssoc() {
        if (this.hasComposition) return;
        let {
          view: CC
        } = this, zC = CC.state.selection.main, ZC = rC(CC.root), {
          anchorNode: QC,
          anchorOffset: wC
        } = CC.observer.selectionRange;
        if (!ZC || !zC.empty || !zC.assoc || !ZC.modify) return;
        let bC = this.lineAt(zC.head, zC.assoc);
        if (!bC) return;
        let nC = bC.posAtStart;
        if (zC.head == nC || zC.head == nC + bC.length) return;
        let fC = this.coordsAt(zC.head, -1),
          oC = this.coordsAt(zC.head, 1);
        if (!fC || !oC || fC.bottom > oC.top) return;
        let qC = this.domAtPos(zC.head + zC.assoc, zC.assoc);
        ZC.collapse(qC.node, qC.offset), ZC.modify("move", zC.assoc < 0 ? "forward" : "backward", "lineboundary"), CC.observer.readSelectionRange();
        let FC = CC.observer.selectionRange;
        CC.docView.posFromDOM(FC.anchorNode, FC.anchorOffset) != zC.from && ZC.collapse(QC, wC)
      }
      posFromDOM(CC, zC) {
        let ZC = this.tile.nearest(CC);
        if (!ZC) return 2 & this.tile.dom.compareDocumentPosition(CC) ? 0 : this.view.state.doc.length;
        let QC = ZC.posAtStart;
        if (!ZC.isComposite()) return ZC.isText() ? CC == ZC.dom ? QC + zC : QC + (zC ? ZC.length : 0) : QC;
        {
          let wC;
          if (CC == ZC.dom) wC = ZC.dom.childNodes[zC];
          else {
            let QC = 0 == LC(CC) ? 0 : 0 == zC ? -1 : 1;
            for (;;) {
              let zC = CC.parentNode;
              if (zC == ZC.dom) break;
              0 == QC && zC.firstChild != zC.lastChild && (QC = CC == zC.firstChild ? -1 : 1), CC = zC
            }
            wC = QC < 0 ? CC : CC.nextSibling
          }
          if (wC == ZC.dom.firstChild) return QC;
          for (; wC && !NZ.get(wC);) wC = wC.nextSibling;
          if (!wC) return QC + ZC.length;
          for (let CC = 0, zC = QC;; CC++) {
            let QC = ZC.children[CC];
            if (QC.dom == wC) return zC;
            zC += QC.length + QC.breakAfter
          }
        }
      }
      domAtPos(CC, zC) {
        let {
          tile: ZC,
          offset: QC
        } = this.tile.resolveBlock(CC, zC);
        return ZC.isWidget() ? ZC.domPosFor(CC, zC) : ZC.domIn(QC, zC)
      }
      inlineDOMNearPos(CC, zC) {
        let ZC, QC, wC = -1,
          bC = !1,
          nC = -1,
          fC = !1;
        return this.tile.blockTiles(((zC, oC) => {
          if (zC.isWidget()) {
            if (32 & zC.flags && oC >= CC) return !0;
            16 & zC.flags && (bC = !0)
          } else {
            let qC = oC + zC.length;
            if (oC <= CC && (ZC = zC, wC = CC - oC, bC = qC < CC), qC >= CC && !QC && (QC = zC, nC = CC - oC, fC = oC > CC), oC > CC && QC) return !0
          }
        })), ZC || QC ? (bC && QC ? ZC = null : fC && ZC && (QC = null), ZC && zC < 0 || !QC ? ZC.domIn(wC, zC) : QC.domIn(nC, zC)) : this.domAtPos(CC, zC)
      }
      coordsAt(CC, zC) {
        let {
          tile: ZC,
          offset: QC
        } = this.tile.resolveBlock(CC, zC);
        return ZC.isWidget() ? ZC.widget instanceof TZ ? null : ZC.coordsInWidget(QC, zC, !0) : ZC.coordsIn(QC, zC)
      }
      lineAt(CC, zC) {
        let {
          tile: ZC
        } = this.tile.resolveBlock(CC, zC);
        return ZC.isLine() ? ZC : null
      }
      coordsForChar(CC) {
        let {
          tile: zC,
          offset: ZC
        } = this.tile.resolveBlock(CC, 1);
        if (!zC.isLine()) return null;
        return function CC(zC, ZC) {
          if (zC.isComposite())
            for (let QC of zC.children) {
              if (QC.length >= ZC) {
                let zC = CC(QC, ZC);
                if (zC) return zC
              }
              if ((ZC -= QC.length) < 0) break
            } else if (zC.isText() && ZC < zC.length) {
              let CC = (0, QC.V)(zC.text, ZC);
              if (CC == ZC) return null;
              let wC = Qz(zC.dom, ZC, CC).getClientRects();
              for (let zC = 0; zC < wC.length; zC++) {
                let CC = wC[zC];
                if (zC == wC.length - 1 || CC.top < CC.bottom && CC.left < CC.right) return CC
              }
            } return null
        }(zC, ZC)
      }
      measureVisibleLineHeights(CC) {
        let zC = [],
          {
            from: ZC,
            to: QC
          } = CC,
          wC = this.view.contentDOM.clientWidth,
          bC = wC > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
          nC = -1,
          fC = this.view.textDirection == qz.LTR,
          oC = 0,
          qC = (CC, FC, WC) => {
            for (let NC = 0; NC < CC.children.length && !(FC > QC); NC++) {
              let QC = CC.children[NC],
                MC = FC + QC.length,
                gC = QC.dom.getBoundingClientRect(),
                {
                  height: SC
                } = gC;
              if (WC && !NC && (oC += gC.top - WC.top), QC instanceof pZ) MC > ZC && qC(QC, FC, gC);
              else if (FC >= ZC && (oC > 0 && zC.push(-oC), zC.push(SC + oC), oC = 0, bC)) {
                let CC = QC.dom.lastChild,
                  zC = CC ? aC(CC) : [];
                if (zC.length) {
                  let CC = zC[zC.length - 1],
                    ZC = fC ? CC.right - gC.left : gC.right - CC.left;
                  ZC > nC && (nC = ZC, this.minWidth = wC, this.minWidthFrom = FC, this.minWidthTo = MC)
                }
              }
              WC && NC == CC.children.length - 1 && (oC += WC.bottom - gC.bottom), FC = MC + QC.breakAfter
            }
          };
        return qC(this.tile, 0, null), zC
      }
      textDirectionAt(CC) {
        let {
          tile: zC
        } = this.tile.resolveBlock(CC, 1);
        return "rtl" == getComputedStyle(zC.dom).direction ? qz.RTL : qz.LTR
      }
      measureTextSize() {
        let CC = this.tile.blockTiles((CC => {
          if (CC.isLine() && CC.children.length && CC.length <= 20) {
            let zC, ZC = 0;
            for (let QC of CC.children) {
              if (!QC.isText() || /[^ -~]/.test(QC.text)) return;
              let CC = aC(QC.dom);
              if (1 != CC.length) return;
              ZC += CC[0].width, zC = CC[0].height
            }
            if (ZC) return {
              lineHeight: CC.dom.getBoundingClientRect().height,
              charWidth: ZC / CC.length,
              textHeight: zC
            }
          }
        }));
        if (CC) return CC;
        let zC, ZC, QC, wC = document.createElement("div");
        return wC.className = "cm-line", wC.style.width = "99999px", wC.style.position = "absolute", wC.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore((() => {
          this.tile.dom.appendChild(wC);
          let CC = aC(wC.firstChild)[0];
          zC = wC.getBoundingClientRect().height, ZC = CC && CC.width ? CC.width / 27 : 7, QC = CC && CC.height ? CC.height : zC, wC.remove()
        })), {
          lineHeight: zC,
          charWidth: ZC,
          textHeight: QC
        }
      }
      computeBlockGapDeco() {
        let CC = [],
          zC = this.view.viewState;
        for (let ZC = 0, QC = 0;; QC++) {
          let wC = QC == zC.viewports.length ? null : zC.viewports[QC],
            bC = wC ? wC.from - 1 : this.view.state.doc.length;
          if (bC > ZC) {
            let QC = (zC.lineBlockAt(bC).bottom - zC.lineBlockAt(ZC).top) / this.view.scaleY;
            CC.push(mC.replace({
              widget: new TZ(QC),
              block: !0,
              inclusive: !0,
              isBlockGap: !0
            }).range(ZC, bC))
          }
          if (!wC) break;
          ZC = wC.to + 1
        }
        return mC.set(CC)
      }
      updateDeco() {
        let CC = 1,
          zC = this.view.state.facet(CZ).map((zC => (this.dynamicDecorationMap[CC++] = "function" == typeof zC) ? zC(this.view) : zC)),
          ZC = !1,
          wC = this.view.state.facet(ZZ).map(((CC, zC) => {
            let QC = "function" == typeof CC;
            return QC && (ZC = !0), QC ? CC(this.view) : CC
          }));
        for (wC.length && (this.dynamicDecorationMap[CC++] = ZC, zC.push(QC.u.join(wC))), this.gC = [this.editContextFormatting, ...zC, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; CC < this.gC.length;) this.dynamicDecorationMap[CC++] = !1;
        this.blockWrappers = this.view.state.facet(zZ).map((CC => "function" == typeof CC ? CC(this.view) : CC))
      }
      scrollIntoView(CC) {
        var zC;
        if (CC.isSnapshot) {
          let zC = this.view.viewState.lineBlockAt(CC.range.head);
          return this.view.scrollDOM.scrollTop = zC.top - CC.yMargin, void(this.view.scrollDOM.scrollLeft = CC.xMargin)
        }
        for (let FC of this.view.state.facet(Tz)) try {
          if (FC(this.view, CC.range, CC)) return !0
        } catch (qC) {
          jz(this.view.state, qC, "scroll handler")
        }
        let ZC, {
            range: QC
          } = CC,
          wC = this.coordsAt(QC.head, null !== (zC = QC.assoc) && void 0 !== zC ? zC : QC.empty ? 0 : QC.head > QC.anchor ? -1 : 1);
        if (!wC) return;
        !QC.empty && (ZC = this.coordsAt(QC.anchor, QC.anchor > QC.head ? -1 : 1)) && (wC = {
          left: Math.min(wC.left, ZC.left),
          top: Math.min(wC.top, ZC.top),
          right: Math.max(wC.right, ZC.right),
          bottom: Math.max(wC.bottom, ZC.bottom)
        });
        let bC = fZ(this.view),
          nC = {
            left: wC.left - bC.left,
            top: wC.top - bC.top,
            right: wC.right + bC.right,
            bottom: wC.bottom + bC.bottom
          },
          {
            offsetWidth: fC,
            offsetHeight: oC
          } = this.view.scrollDOM;
        if (function(CC, zC, ZC, QC, wC, bC, nC, fC) {
            let oC = CC.ownerDocument,
              qC = oC.defaultView || window;
            for (let FC = CC, WC = !1; FC && !WC;)
              if (1 == FC.nodeType) {
                let CC, NC = FC == oC.body,
                  MC = 1,
                  gC = 1;
                if (NC) CC = BC(qC);
                else {
                  if (/^(fixed|sticky)$/.test(getComputedStyle(FC).position) && (WC = !0), FC.scrollHeight <= FC.clientHeight && FC.scrollWidth <= FC.clientWidth) {
                    FC = FC.assignedSlot || FC.parentNode;
                    continue
                  }
                  let zC = FC.getBoundingClientRect();
                  ({
                    scaleX: MC,
                    scaleY: gC
                  } = OC(FC, zC)), CC = {
                    left: zC.left,
                    right: zC.left + FC.clientWidth * MC,
                    top: zC.top,
                    bottom: zC.top + FC.clientHeight * gC
                  }
                }
                let SC = 0,
                  pC = 0;
                if ("nearest" == wC) zC.top < CC.top + nC ? (pC = zC.top - (CC.top + nC), ZC > 0 && zC.bottom > CC.bottom + pC && (pC = zC.bottom - CC.bottom + nC)) : zC.bottom > CC.bottom - nC && (pC = zC.bottom - CC.bottom + nC, ZC < 0 && zC.top - pC < CC.top && (pC = zC.top - (CC.top + nC)));
                else {
                  let QC = zC.bottom - zC.top,
                    bC = CC.bottom - CC.top;
                  pC = ("center" == wC && QC <= bC ? zC.top + QC / 2 - bC / 2 : "start" == wC || "center" == wC && ZC < 0 ? zC.top - nC : zC.bottom - bC + nC) - CC.top
                }
                if ("nearest" == QC ? zC.left < CC.left + bC ? (SC = zC.left - (CC.left + bC), ZC > 0 && zC.right > CC.right + SC && (SC = zC.right - CC.right + bC)) : zC.right > CC.right - bC && (SC = zC.right - CC.right + bC, ZC < 0 && zC.left < CC.left + SC && (SC = zC.left - (CC.left + bC))) : SC = ("center" == QC ? zC.left + (zC.right - zC.left) / 2 - (CC.right - CC.left) / 2 : "start" == QC == fC ? zC.left - bC : zC.right - (CC.right - CC.left) + bC) - CC.left, SC || pC)
                  if (NC) qC.scrollBy(SC, pC);
                  else {
                    let CC = 0,
                      ZC = 0;
                    if (pC) {
                      let CC = FC.scrollTop;
                      FC.scrollTop += pC / gC, ZC = (FC.scrollTop - CC) * gC
                    }
                    if (SC) {
                      let zC = FC.scrollLeft;
                      FC.scrollLeft += SC / MC, CC = (FC.scrollLeft - zC) * MC
                    }
                    zC = {
                      left: zC.left - CC,
                      top: zC.top - ZC,
                      right: zC.right - CC,
                      bottom: zC.bottom - ZC
                    }, CC && Math.abs(CC - SC) < 1 && (QC = "nearest"), ZC && Math.abs(ZC - pC) < 1 && (wC = "nearest")
                  } if (NC) break;
                (zC.top < CC.top || zC.bottom > CC.bottom || zC.left < CC.left || zC.right > CC.right) && (zC = {
                  left: Math.max(zC.left, CC.left),
                  right: Math.min(zC.right, CC.right),
                  top: Math.max(zC.top, CC.top),
                  bottom: Math.min(zC.bottom, CC.bottom)
                }), FC = FC.assignedSlot || FC.parentNode
              } else {
                if (11 != FC.nodeType) break;
                FC = FC.host
              }
          }(this.view.scrollDOM, nC, QC.head < QC.anchor ? -1 : 1, CC.x, CC.y, Math.max(Math.min(CC.xMargin, fC), -fC), Math.max(Math.min(CC.yMargin, oC), -oC), this.view.textDirection == qz.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (wC.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || wC.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
          let CC = this.view.docView.lineAt(QC.head, 1);
          CC && CC.dom.scrollIntoView({
            block: "nearest"
          })
        }
      }
      lineHasWidget(CC) {
        let zC = CC => CC.isWidget() || CC.children.some(zC);
        return zC(this.tile.resolveBlock(CC, 1).tile)
      }
      destroy() {
        cZ(this.tile)
      }
    }

    function cZ(CC, zC) {
      let ZC = null === zC || void 0 === zC ? void 0 : zC.get(CC);
      if (1 != ZC) {
        null == ZC && CC.destroy();
        for (let ZC of CC.children) cZ(ZC, zC)
      }
    }

    function uZ(CC, zC) {
      let ZC = CC.observer.selectionRange;
      if (!ZC.focusNode) return null;
      let QC = nz(ZC.focusNode, ZC.focusOffset),
        wC = fz(ZC.focusNode, ZC.focusOffset),
        bC = QC || wC;
      if (wC && QC && wC.node != QC.node) {
        let zC = NZ.get(wC.node);
        if (!zC || zC.isText() && zC.text != wC.node.nodeValue) bC = wC;
        else if (CC.docView.lastCompositionAfterCursor) {
          let CC = NZ.get(QC.node);
          !CC || CC.isText() && CC.text != QC.node.nodeValue || (bC = wC)
        }
      }
      if (CC.docView.lastCompositionAfterCursor = bC != QC, !bC) return null;
      let nC = zC - bC.offset;
      return {
        from: nC,
        to: nC + bC.node.nodeValue.length,
        node: bC.node
      }
    }
    let rZ = class {
      constructor() {
        this.changes = []
      }
      compareRange(CC, zC) {
        cC(CC, zC, this.changes)
      }
      comparePoint(CC, zC) {
        cC(CC, zC, this.changes)
      }
      boundChange(CC) {
        cC(CC, CC, this.changes)
      }
    };
    class sZ {
      constructor() {
        this.changes = []
      }
      compareRange(CC, zC) {
        cC(CC, zC, this.changes)
      }
      comparePoint() {}
      boundChange(CC) {
        cC(CC, CC, this.changes)
      }
    }
    class TZ extends YC {
      constructor(CC) {
        super(), this.height = CC
      }
      toDOM() {
        let CC = document.createElement("div");
        return CC.className = "cm-gap", this.updateDOM(CC), CC
      }
      eq(CC) {
        return CC.height == this.height
      }
      updateDOM(CC) {
        return CC.style.height = this.height + "px", !0
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

    function aZ(CC, zC, ZC) {
      let QC = CC.lineBlockAt(zC);
      if (Array.isArray(QC.type)) {
        let CC;
        for (let wC of QC.type) {
          if (wC.from > zC) break;
          if (!(wC.to < zC)) {
            if (wC.from < zC && wC.to > zC) return wC;
            CC && (wC.type != dC.Text || CC.type == wC.type && !(ZC < 0 ? wC.from < zC : wC.to > zC)) || (CC = wC)
          }
        }
        return CC || QC
      }
      return QC
    }

    function tZ(CC, zC, ZC, QC) {
      let wC = CC.state.doc.lineAt(zC.head),
        bC = CC.bidiSpans(wC),
        nC = CC.textDirectionAt(wC.from);
      for (let fC = zC, oC = null;;) {
        let zC = hz(wC, bC, nC, fC, ZC),
          qC = ez;
        if (!zC) {
          if (wC.number == (ZC ? CC.state.doc.lines : 1)) return fC;
          qC = "\n", wC = CC.state.doc.line(wC.number + (ZC ? 1 : -1)), bC = CC.bidiSpans(wC), zC = CC.visualLineSide(wC, !ZC)
        }
        if (oC) {
          if (!oC(qC)) return fC
        } else {
          if (!QC) return zC;
          oC = QC(qC)
        }
        fC = zC
      }
    }

    function DZ(CC, zC, ZC) {
      for (;;) {
        let QC = 0;
        for (let wC of CC) wC.between(zC - 1, zC + 1, ((CC, wC, bC) => {
          if (zC > CC && zC < wC) {
            let bC = QC || ZC || (zC - CC < wC - zC ? -1 : 1);
            zC = bC < 0 ? CC : wC, QC = bC
          }
        }));
        if (!QC) return zC
      }
    }

    function jZ(CC, zC) {
      let ZC = null;
      for (let wC = 0; wC < zC.np.length; wC++) {
        let bC = zC.np[wC],
          nC = null;
        if (bC.empty) {
          let zC = DZ(CC, bC.from, 0);
          zC != bC.from && (nC = QC.i.cursor(zC, -1))
        } else {
          let zC = DZ(CC, bC.from, -1),
            ZC = DZ(CC, bC.to, 1);
          zC == bC.from && ZC == bC.to || (nC = QC.i.range(bC.from == bC.anchor ? zC : ZC, bC.from == bC.head ? zC : ZC))
        }
        nC && (ZC || (ZC = zC.np.slice()), ZC[wC] = nC)
      }
      return ZC ? QC.i.create(ZC, zC.mainIndex) : zC
    }

    function yZ(CC, zC, ZC) {
      let wC = DZ(CC.state.facet(QZ).map((zC => zC(CC))), ZC.from, zC.head > ZC.from ? -1 : 1);
      return wC == ZC.from ? ZC : QC.i.cursor(wC, wC < ZC.from ? 1 : -1)
    }
    class LZ {
      constructor(CC, zC) {
        this.pos = CC, this.assoc = zC
      }
    }

    function UZ(CC, zC, ZC, wC) {
      let bC, nC = CC.contentDOM.getBoundingClientRect(),
        fC = nC.top + CC.viewState.paddingTop,
        {
          x: oC,
          y: qC
        } = zC,
        FC = qC - fC;
      for (;;) {
        if (FC < 0) return new LZ(0, 1);
        if (FC > CC.viewState.docHeight) return new LZ(CC.state.doc.length, -1);
        if (bC = CC.elementAtHeight(FC), null == wC) break;
        if (bC.type == dC.Text) {
          if (wC < 0 ? bC.to < CC.viewport.from : bC.from > CC.viewport.to) break;
          let zC = CC.docView.coordsAt(wC < 0 ? bC.from : bC.to, wC > 0 ? -1 : 1);
          if (zC && (wC < 0 ? zC.top <= FC + fC : zC.bottom >= FC + fC)) break
        }
        let zC = CC.viewState.heightOracle.textHeight / 2;
        FC = wC > 0 ? bC.bottom + zC : bC.top - zC
      }
      if (CC.viewport.from >= bC.to || CC.viewport.to <= bC.from) {
        if (ZC) return null;
        if (bC.type == dC.Text) {
          let zC = function(CC, zC, ZC, wC, bC) {
            let nC = Math.round((wC - zC.left) * CC.defaultCharacterWidth);
            if (CC.lineWrapping && ZC.height > 1.5 * CC.defaultLineHeight) {
              let zC = CC.viewState.heightOracle.textHeight;
              nC += Math.floor((bC - ZC.top - .5 * (CC.defaultLineHeight - zC)) / zC) * CC.viewState.heightOracle.lineLength
            }
            let fC = CC.state.sliceDoc(ZC.from, ZC.to);
            return ZC.from + (0, QC.Y)(fC, nC, CC.state.tabSize)
          }(CC, nC, bC, oC, qC);
          return new LZ(zC, zC == bC.from ? 1 : -1)
        }
      }
      if (bC.type != dC.Text) return FC < (bC.top + bC.bottom) / 2 ? new LZ(bC.from, 1) : new LZ(bC.to, -1);
      let WC = CC.docView.lineAt(bC.from, 2);
      return WC && WC.length == bC.length || (WC = CC.docView.lineAt(bC.from, -2)), new BZ(CC, oC, qC, CC.textDirectionAt(bC.from)).scanTile(WC, bC.from)
    }
    class BZ {
      constructor(CC, zC, ZC, QC) {
        this.view = CC, this.x = zC, this.y = ZC, this.baseDir = QC, this.line = null, this.spans = null
      }
      bidiSpansAt(CC) {
        return (!this.line || this.line.from > CC || this.line.to < CC) && (this.line = this.view.state.doc.lineAt(CC), this.spans = this.view.bidiSpans(this.line)), this
      }
      baseDirAt(CC, zC) {
        let {
          line: ZC,
          spans: QC
        } = this.bidiSpansAt(CC);
        return QC[Rz.find(QC, CC - ZC.from, -1, zC)].level == this.baseDir
      }
      dirAt(CC, zC) {
        let {
          line: ZC,
          spans: QC
        } = this.bidiSpansAt(CC);
        return QC[Rz.find(QC, CC - ZC.from, -1, zC)].dir
      }
      bidiIn(CC, zC) {
        let {
          spans: ZC,
          line: QC
        } = this.bidiSpansAt(CC);
        return ZC.length > 1 || ZC.length && (ZC[0].level != this.baseDir || ZC[0].to + QC.from < zC)
      }
      scan(CC, zC) {
        let ZC, QC, wC, bC = 0,
          nC = CC.length - 1,
          fC = new Set,
          oC = this.bidiIn(CC[0], CC[nC]),
          qC = -1,
          FC = 1e9;
        CC: for (; bC < nC;) {
          let WC = nC - bC,
            NC = bC + nC >> 1;
          zC: if (fC.has(NC)) {
            let CC = bC + Math.floor(Math.random() * WC);
            for (let zC = 0; zC < WC; zC++) {
              if (!fC.has(CC)) {
                NC = CC;
                break zC
              }
              CC++, CC == nC && (CC = bC)
            }
            break CC
          } fC.add(NC);
          let MC = zC(NC);
          if (MC)
            for (let zC = 0; zC < MC.length; zC++) {
              let fC = MC[zC],
                WC = 0;
              if (!(0 == fC.width && MC.length > 1)) {
                if (fC.bottom < this.y)(!ZC || ZC.bottom < fC.bottom) && (ZC = fC), WC = 1;
                else if (fC.top > this.y)(!QC || QC.top > fC.top) && (QC = fC), WC = -1;
                else {
                  let CC = fC.left > this.x ? this.x - fC.left : fC.right < this.x ? this.x - fC.right : 0,
                    zC = Math.abs(CC);
                  zC < FC && (qC = NC, FC = zC, wC = fC), CC && (WC = CC < 0 == (this.baseDir == qz.LTR) ? -1 : 1)
                } - 1 != WC || oC && !this.baseDirAt(CC[NC], 1) ? 1 != WC || oC && !this.baseDirAt(CC[NC + 1], -1) || (bC = NC + 1) : nC = NC
              }
            }
        }
        if (!wC) {
          let wC = ZC && (!QC || this.y - ZC.bottom < QC.top - this.y) ? ZC : QC;
          return this.y = (wC.top + wC.bottom) / 2, this.scan(CC, zC)
        }
        if (FC) {
          if (ZC && ZC.bottom > wC.top) return this.y = ZC.bottom - 1, this.scan(CC, zC);
          if (QC && QC.top < wC.bottom) return this.y = QC.top + 1, this.scan(CC, zC)
        }
        let WC = (oC ? this.dirAt(CC[qC], 1) : this.baseDir) == qz.LTR;
        return {
          i: qC,
          after: this.x > (wC.left + wC.right) / 2 == WC
        }
      }
      scanText(CC, zC) {
        let ZC = [];
        for (let bC = 0; bC < CC.length; bC = (0, QC.V)(CC.text, bC)) ZC.push(zC + bC);
        ZC.push(zC + CC.length);
        let wC = this.scan(ZC, (QC => {
          let wC = ZC[QC] - zC,
            bC = ZC[QC + 1] - zC;
          return Qz(CC.dom, wC, bC).getClientRects()
        }));
        return wC.after ? new LZ(ZC[wC.i + 1], -1) : new LZ(ZC[wC.i], 1)
      }
      scanTile(CC, zC) {
        if (!CC.length) return new LZ(zC, 1);
        if (1 == CC.children.length) {
          let ZC = CC.children[0];
          if (ZC.isText()) return this.scanText(ZC, zC);
          if (ZC.isComposite()) return this.scanTile(ZC, zC)
        }
        let ZC = [zC];
        for (let nC = 0, fC = zC; nC < CC.children.length; nC++) ZC.push(fC += CC.children[nC].length);
        let QC = this.scan(ZC, (zC => {
            let ZC = CC.children[zC];
            return 48 & ZC.flags ? null : (1 == ZC.dom.nodeType ? ZC.dom : Qz(ZC.dom, 0, ZC.length)).getClientRects()
          })),
          wC = CC.children[QC.i],
          bC = ZC[QC.i];
        return wC.isText() ? this.scanText(wC, bC) : wC.isComposite() ? this.scanTile(wC, bC) : QC.after ? new LZ(ZC[QC.i + 1], -1) : new LZ(bC, 1)
      }
    }
    const OZ = "\uffff";
    class kZ {
      constructor(CC, zC) {
        this.points = CC, this.view = zC, this.text = "", this.lineSeparator = zC.state.facet(QC.l.lineSeparator)
      }
      append(CC) {
        this.text += CC
      }
      lineBreak() {
        this.text += OZ
      }
      readRange(CC, zC) {
        if (!CC) return this;
        let ZC = CC.parentNode;
        for (let QC = CC;;) {
          this.findPointBefore(ZC, QC);
          let CC = this.text.length;
          this.readNode(QC);
          let wC = NZ.get(QC),
            bC = QC.nextSibling;
          if (bC == zC) {
            (null === wC || void 0 === wC ? void 0 : wC.breakAfter) && !bC && ZC != this.view.contentDOM && this.lineBreak();
            break
          }
          let nC = NZ.get(bC);
          (wC && nC ? wC.breakAfter : (wC ? wC.breakAfter : jC(QC)) || jC(bC) && ("BR" != QC.nodeName || (null === wC || void 0 === wC ? void 0 : wC.isWidget())) && this.text.length > CC) && !CQ(bC, zC) && this.lineBreak(), QC = bC
        }
        return this.findPointBefore(ZC, zC), this
      }
      readTextNode(CC) {
        let zC = CC.nodeValue;
        for (let ZC of this.points) ZC.node == CC && (ZC.pos = this.text.length + Math.min(ZC.offset, zC.length));
        for (let ZC = 0, QC = this.lineSeparator ? null : /\r\n?|\n/g;;) {
          let wC, bC = -1,
            nC = 1;
          if (this.lineSeparator ? (bC = zC.indexOf(this.lineSeparator, ZC), nC = this.lineSeparator.length) : (wC = QC.exec(zC)) && (bC = wC.index, nC = wC[0].length), this.append(zC.slice(ZC, bC < 0 ? zC.length : bC)), bC < 0) break;
          if (this.lineBreak(), nC > 1)
            for (let zC of this.points) zC.node == CC && zC.pos > this.text.length && (zC.pos -= nC - 1);
          ZC = bC + nC
        }
      }
      readNode(CC) {
        let zC = NZ.get(CC),
          ZC = zC && zC.overrideDOMText;
        if (null != ZC) {
          this.findPointInside(CC, ZC.length);
          for (let CC = ZC.iter(); !CC.next().done;) CC.lineBreak ? this.lineBreak() : this.append(CC.value)
        } else 3 == CC.nodeType ? this.readTextNode(CC) : "BR" == CC.nodeName ? CC.nextSibling && this.lineBreak() : 1 == CC.nodeType && this.readRange(CC.firstChild, null)
      }
      findPointBefore(CC, zC) {
        for (let ZC of this.points) ZC.node == CC && CC.childNodes[ZC.offset] == zC && (ZC.pos = this.text.length)
      }
      findPointInside(CC, zC) {
        for (let ZC of this.points)(3 == CC.nodeType ? ZC.node == CC : CC.contains(ZC.node)) && (ZC.pos = this.text.length + (VZ(CC, ZC.node, ZC.offset) ? zC : 0))
      }
    }

    function VZ(CC, zC, ZC) {
      for (;;) {
        if (!zC || ZC < LC(zC)) return !1;
        if (zC == CC) return !0;
        ZC = DC(zC) + 1, zC = zC.parentNode
      }
    }

    function CQ(CC, zC) {
      let ZC;
      for (; CC != zC && CC; CC = CC.nextSibling) {
        let zC = NZ.get(CC);
        if (!(null === zC || void 0 === zC ? void 0 : zC.isWidget())) return !1;
        zC && (ZC || (ZC = [])).push(zC)
      }
      if (ZC)
        for (let QC of ZC) {
          let CC = QC.overrideDOMText;
          if (null === CC || void 0 === CC ? void 0 : CC.length) return !1
        }
      return !0
    }
    class zQ {
      constructor(CC, zC) {
        this.node = CC, this.offset = zC, this.pos = -1
      }
    }
    class ZQ {
      constructor(CC, zC, ZC, wC) {
        this.typeOver = wC, this.bounds = null, this.text = "", this.domChanged = zC > -1;
        let {
          impreciseHead: bC,
          impreciseAnchor: nC
        } = CC.docView, fC = CC.state.selection;
        if (CC.state.readOnly && zC > -1) this.newSel = null;
        else if (zC > -1 && (this.bounds = QQ(CC.docView.tile, zC, ZC, 0))) {
          let zC = bC || nC ? [] : function(CC) {
              let zC = [];
              if (CC.root.activeElement != CC.contentDOM) return zC;
              let {
                anchorNode: ZC,
                anchorOffset: QC,
                focusNode: wC,
                focusOffset: bC
              } = CC.observer.selectionRange;
              ZC && (zC.push(new zQ(ZC, QC)), wC == ZC && bC == QC || zC.push(new zQ(wC, bC)));
              return zC
            }(CC),
            ZC = new kZ(zC, CC);
          ZC.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = ZC.text, this.newSel = function(CC, zC) {
            if (0 == CC.length) return null;
            let ZC = CC[0].pos,
              wC = 2 == CC.length ? CC[1].pos : ZC;
            return ZC > -1 && wC > -1 ? QC.i.single(ZC + zC, wC + zC) : null
          }(zC, this.bounds.from)
        } else {
          let zC = CC.observer.selectionRange,
            ZC = bC && bC.node == zC.focusNode && bC.offset == zC.focusOffset || !sC(CC.contentDOM, zC.focusNode) ? fC.main.head : CC.docView.posFromDOM(zC.focusNode, zC.focusOffset),
            wC = nC && nC.node == zC.anchorNode && nC.offset == zC.anchorOffset || !sC(CC.contentDOM, zC.anchorNode) ? fC.main.anchor : CC.docView.posFromDOM(zC.anchorNode, zC.anchorOffset),
            oC = CC.viewport;
          if ((IC.ios || IC.chrome) && fC.main.empty && ZC != wC && (oC.from > 0 || oC.to < CC.state.doc.length)) {
            let zC = Math.min(ZC, wC),
              QC = Math.max(ZC, wC),
              bC = oC.from - zC,
              nC = oC.to - QC;
            0 != bC && 1 != bC && 0 != zC || 0 != nC && -1 != nC && QC != CC.state.doc.length || (ZC = 0, wC = CC.state.doc.length)
          }
          if (CC.inputState.composing > -1 && fC.np.length > 1) this.newSel = fC.replaceRange(QC.i.range(wC, ZC));
          else if (CC.lineWrapping && wC == ZC && (!fC.main.empty || fC.main.head != ZC) && CC.inputState.lastTouchTime > Date.now() - 100) {
            let zC = CC.coordsAtPos(ZC, -1),
              wC = 0;
            zC && (wC = CC.inputState.lastTouchY <= zC.bottom ? -1 : 1), this.newSel = QC.i.create([QC.i.cursor(ZC, wC)])
          } else this.newSel = QC.i.single(wC, ZC)
        }
      }
    }

    function QQ(CC, zC, ZC, QC) {
      if (CC.isComposite()) {
        let wC = -1,
          bC = -1,
          nC = -1,
          fC = -1;
        for (let oC = 0, qC = QC, FC = QC; oC < CC.children.length; oC++) {
          let QC = CC.children[oC],
            WC = qC + QC.length;
          if (qC < zC && WC > ZC) return QQ(QC, zC, ZC, qC);
          if (WC >= zC && -1 == wC && (wC = oC, bC = qC), qC > ZC && QC.dom.parentNode == CC.dom) {
            nC = oC, fC = FC;
            break
          }
          FC = WC, qC = WC + QC.breakAfter
        }
        return {
          from: bC,
          to: fC < 0 ? QC + CC.length : fC,
          startDOM: (wC ? CC.children[wC - 1].dom.nextSibling : null) || CC.dom.firstChild,
          endDOM: nC < CC.children.length && nC >= 0 ? CC.children[nC].dom : null
        }
      }
      return CC.isText() ? {
        from: QC,
        to: QC + CC.length,
        startDOM: CC.dom,
        endDOM: CC.dom.nextSibling
      } : null
    }

    function wQ(CC, zC) {
      let ZC, {
          newSel: wC
        } = zC,
        {
          state: bC
        } = CC,
        nC = bC.selection.main,
        fC = CC.inputState.lastKeyTime > Date.now() - 100 ? CC.inputState.lastKeyCode : -1;
      if (zC.bounds) {
        let {
          from: CC,
          to: wC
        } = zC.bounds, oC = nC.from, qC = null;
        (8 === fC || IC.android && zC.text.length < wC - CC) && (oC = nC.to, qC = "end");
        let FC, WC, NC = bC.doc.sliceString(CC, wC, OZ);
        !nC.empty && nC.from >= CC && nC.to <= wC && (zC.typeOver || NC != zC.text) && NC.slice(0, nC.from - CC) == zC.text.slice(0, nC.from - CC) && NC.slice(nC.to - CC) == zC.text.slice(FC = zC.text.length - (NC.length - (nC.to - CC))) ? ZC = {
          from: nC.from,
          to: nC.to,
          insert: QC.B.of(zC.text.slice(nC.from - CC, FC).split(OZ))
        } : (WC = nQ(NC, zC.text, oC - CC, qC)) && (IC.chrome && 13 == fC && WC.toB == WC.from + 2 && zC.text.slice(WC.from, WC.toB) == OZ + OZ && WC.toB--, ZC = {
          from: CC + WC.from,
          to: CC + WC.toA,
          insert: QC.B.of(zC.text.slice(WC.from, WC.toB).split(OZ))
        })
      } else wC && (!CC.hasFocus && bC.facet(yz) || fQ(wC, nC)) && (wC = null);
      if (!ZC && !wC) return !1;
      if ((IC.mac || IC.android) && ZC && ZC.from == ZC.to && ZC.from == nC.head - 1 && /^\. ?$/.test(ZC.insert.toString()) && "off" == CC.contentDOM.getAttribute("autocorrect") ? (wC && 2 == ZC.insert.length && (wC = QC.i.single(wC.main.anchor - 1, wC.main.head - 1)), ZC = {
          from: ZC.from,
          to: ZC.to,
          insert: QC.B.of([ZC.insert.toString().replace(".", " ")])
        }) : bC.doc.lineAt(nC.from).to < nC.to && CC.docView.lineHasWidget(nC.to) && CC.inputState.insertingTextAt > Date.now() - 50 ? ZC = {
          from: nC.from,
          to: nC.to,
          insert: bC.toText(CC.inputState.insertingText)
        } : IC.chrome && ZC && ZC.from == ZC.to && ZC.from == nC.head && "\n " == ZC.insert.toString() && CC.lineWrapping && (wC && (wC = QC.i.single(wC.main.anchor - 1, wC.main.head - 1)), ZC = {
          from: nC.from,
          to: nC.to,
          insert: QC.B.of([" "])
        }), ZC) return bQ(CC, ZC, wC, fC);
      if (wC && !fQ(wC, nC)) {
        let zC = !1,
          ZC = "select";
        return CC.inputState.lastSelectionTime > Date.now() - 50 && ("select" == CC.inputState.lastSelectionOrigin && (zC = !0), ZC = CC.inputState.lastSelectionOrigin, "select.pointer" == ZC && (wC = jZ(bC.facet(QZ).map((zC => zC(CC))), wC))), CC.dispatch({
          selection: wC,
          scrollIntoView: zC,
          userEvent: ZC
        }), !0
      }
      return !1
    }

    function bQ(CC, zC, ZC) {
      let wC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
      if (IC.ios && CC.inputState.flushIOSKey(zC)) return !0;
      let bC = CC.state.selection.main;
      if (IC.android && (zC.to == bC.to && (zC.from == bC.from || zC.from == bC.from - 1 && " " == CC.state.sliceDoc(zC.from, bC.from)) && 1 == zC.insert.length && 2 == zC.insert.lines && wz(CC.contentDOM, "Enter", 13) || (zC.from == bC.from - 1 && zC.to == bC.to && 0 == zC.insert.length || 8 == wC && zC.insert.length < zC.to - zC.from && zC.to > bC.head) && wz(CC.contentDOM, "Backspace", 8) || zC.from == bC.from && zC.to == bC.to + 1 && 0 == zC.insert.length && wz(CC.contentDOM, "Delete", 46))) return !0;
      let nC, fC = zC.insert.toString();
      CC.inputState.composing >= 0 && CC.inputState.composing++;
      let oC = () => nC || (nC = function(CC, zC, ZC) {
        let wC, bC = CC.state,
          nC = bC.selection.main,
          fC = -1;
        if (zC.from == zC.to && zC.from < nC.from || zC.from > nC.to) {
          let ZC = zC.from < nC.from ? -1 : 1,
            QC = ZC < 0 ? nC.from : nC.to,
            wC = DZ(bC.facet(QZ).map((zC => zC(CC))), QC, ZC);
          zC.from == wC && (fC = wC)
        }
        if (fC > -1) wC = {
          changes: zC,
          selection: QC.i.cursor(zC.from + zC.insert.length, -1)
        };
        else if (zC.from >= nC.from && zC.to <= nC.to && zC.to - zC.from >= (nC.to - nC.from) / 3 && (!ZC || ZC.main.empty && ZC.main.from == zC.from + zC.insert.length) && CC.inputState.composing < 0) {
          let ZC = nC.from < zC.from ? bC.sliceDoc(nC.from, zC.from) : "",
            QC = nC.to > zC.to ? bC.sliceDoc(zC.to, nC.to) : "";
          wC = bC.replaceSelection(CC.state.toText(ZC + zC.insert.sliceString(0, void 0, CC.state.lineBreak) + QC))
        } else {
          let fC = bC.changes(zC),
            oC = ZC && ZC.main.to <= fC.newLength ? ZC.main : void 0;
          if (bC.selection.np.length > 1 && (CC.inputState.composing >= 0 || CC.inputState.compositionPendingChange) && zC.to <= nC.to + 10 && zC.to >= nC.to - 10) {
            let qC, FC = CC.state.sliceDoc(zC.from, zC.to),
              WC = ZC && uZ(CC, ZC.main.head);
            if (WC) {
              let CC = zC.insert.length - (zC.to - zC.from);
              qC = {
                from: WC.from,
                to: WC.to - CC
              }
            } else qC = CC.state.doc.lineAt(nC.head);
            let NC = nC.to - zC.to;
            wC = bC.changeByRange((ZC => {
              if (ZC.from == nC.from && ZC.to == nC.to) return {
                changes: fC,
                range: oC || ZC.map(fC)
              };
              let wC = ZC.to - NC,
                WC = wC - FC.length;
              if (CC.state.sliceDoc(WC, wC) != FC || wC >= qC.from && WC <= qC.to) return {
                range: ZC
              };
              let MC = bC.changes({
                  from: WC,
                  to: wC,
                  insert: zC.insert
                }),
                gC = ZC.to - nC.to;
              return {
                changes: MC,
                range: oC ? QC.i.range(Math.max(0, oC.anchor + gC), Math.max(0, oC.head + gC)) : ZC.map(MC)
              }
            }))
          } else wC = {
            changes: fC,
            selection: oC && bC.selection.replaceRange(oC)
          }
        }
        let oC = "input.type";
        (CC.composing || CC.inputState.compositionPendingChange && CC.inputState.compositionEndedAt > Date.now() - 50) && (CC.inputState.compositionPendingChange = !1, oC += ".compose", CC.inputState.compositionFirstChange && (oC += ".start", CC.inputState.compositionFirstChange = !1));
        return bC.update(wC, {
          userEvent: oC,
          scrollIntoView: !0
        })
      }(CC, zC, ZC));
      return CC.state.facet(lz).some((ZC => ZC(CC, zC.from, zC.to, fC, oC))) || CC.dispatch(oC()), !0
    }

    function nQ(CC, zC, ZC, QC) {
      let wC = Math.min(CC.length, zC.length),
        bC = 0;
      for (; bC < wC && CC.charCodeAt(bC) == zC.charCodeAt(bC);) bC++;
      if (bC == wC && CC.length == zC.length) return null;
      let nC = CC.length,
        fC = zC.length;
      for (; nC > 0 && fC > 0 && CC.charCodeAt(nC - 1) == zC.charCodeAt(fC - 1);) nC--, fC--;
      if ("end" == QC) {
        ZC -= nC + Math.max(0, bC - Math.min(nC, fC)) - bC
      }
      if (nC < bC && CC.length < zC.length) {
        bC -= ZC <= bC && ZC >= nC ? bC - ZC : 0, fC = bC + (fC - nC), nC = bC
      } else if (fC < bC) {
        bC -= ZC <= bC && ZC >= fC ? bC - ZC : 0, nC = bC + (nC - fC), fC = bC
      }
      return {
        from: bC,
        toA: nC,
        toB: fC
      }
    }

    function fQ(CC, zC) {
      return zC.head == CC.main.head && zC.anchor == CC.main.anchor
    }
    class oQ {
      setSelectionOrigin(CC) {
        this.lastSelectionOrigin = CC, this.lastSelectionTime = Date.now()
      }
      constructor(CC) {
        this.view = CC, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = CC.hasFocus, IC.safari && CC.contentDOM.addEventListener("input", (() => null)), IC.gecko && function(CC) {
          HQ.has(CC) || (HQ.add(CC), CC.addEventListener("copy", (() => {})), CC.addEventListener("cut", (() => {})))
        }(CC.contentDOM.ownerDocument)
      }
      handleEvent(CC) {
        (function(CC, zC) {
          if (!zC.bubbles) return !0;
          if (zC.defaultPrevented) return !1;
          for (let ZC, QC = zC.target; QC != CC.contentDOM; QC = QC.parentNode)
            if (!QC || 11 == QC.nodeType || (ZC = NZ.get(QC)) && ZC.isWidget() && !ZC.isHidden && ZC.widget.ignoreEvent(zC)) return !1;
          return !0
        })(this.view, CC) && !this.ignoreDuringComposition(CC) && ("keydown" == CC.type && this.keydown(CC) || (0 != this.view.updateState ? Promise.resolve().then((() => this.runHandlers(CC.type, CC))) : this.runHandlers(CC.type, CC)))
      }
      runHandlers(CC, zC) {
        let ZC = this.handlers[CC];
        if (ZC) {
          for (let CC of ZC.observers) CC(this.view, zC);
          for (let CC of ZC.handlers) {
            if (zC.defaultPrevented) break;
            if (CC(this.view, zC)) {
              zC.preventDefault();
              break
            }
          }
        }
      }
      ensureHandlers(CC) {
        let zC = FQ(CC),
          ZC = this.handlers,
          QC = this.view.contentDOM;
        for (let wC in zC)
          if ("scroll" != wC) {
            let CC = !zC[wC].handlers.length,
              bC = ZC[wC];
            bC && CC != !bC.handlers.length && (QC.removeEventListener(wC, this.handleEvent), bC = null), bC || QC.addEventListener(wC, this.handleEvent, {
              passive: CC
            })
          } for (let wC in ZC) "scroll" == wC || zC[wC] || QC.removeEventListener(wC, this.handleEvent);
        this.handlers = zC
      }
      keydown(CC) {
        if (this.lastKeyCode = CC.keyCode, this.lastKeyTime = Date.now(), 9 == CC.keyCode && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return !0;
        if (this.tabFocusMode > 0 && 27 != CC.keyCode && MQ.indexOf(CC.keyCode) < 0 && (this.tabFocusMode = -1), IC.android && IC.chrome && !CC.synthetic && (13 == CC.keyCode || 8 == CC.keyCode)) return this.view.observer.delayAndroidKey(CC.key, CC.keyCode), !0;
        let zC;
        return !IC.ios || CC.synthetic || CC.altKey || CC.metaKey || CC.shiftKey || !((zC = WQ.find((zC => zC.keyCode == CC.keyCode))) && !CC.ctrlKey || NQ.indexOf(CC.key) > -1 && CC.ctrlKey) ? (229 != CC.keyCode && this.view.observer.forceFlush(), !1) : (this.pendingIOSKey = zC || CC, setTimeout((() => this.flushIOSKey()), 250), !0)
      }
      flushIOSKey(CC) {
        let zC = this.pendingIOSKey;
        return !!zC && (!("Enter" == zC.key && CC && CC.from < CC.to && /^\S+$/.test(CC.insert.toString())) && (this.pendingIOSKey = void 0, wz(this.view.contentDOM, zC.key, zC.keyCode, zC instanceof KeyboardEvent ? zC : void 0)))
      }
      ignoreDuringComposition(CC) {
        return !(!/^key/.test(CC.type) || CC.synthetic) && (this.composing > 0 || !!(IC.safari && !IC.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = !1, !0))
      }
      startMouseSelection(CC) {
        this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = CC
      }
      update(CC) {
        this.view.observer.update(CC), this.mouseSelection && this.mouseSelection.update(CC), this.draggedContent && CC.docChanged && (this.draggedContent = this.draggedContent.map(CC.changes)), CC.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0)
      }
      destroy() {
        this.mouseSelection && this.mouseSelection.destroy()
      }
    }

    function qQ(CC, zC) {
      return (ZC, QC) => {
        try {
          return zC.call(CC, QC, ZC)
        } catch (wC) {
          jz(ZC.state, wC)
        }
      }
    }

    function FQ(CC) {
      let zC = Object.create(null);

      function ZC(CC) {
        return zC[CC] || (zC[CC] = {
          observers: [],
          handlers: []
        })
      }
      for (let QC of CC) {
        let CC = QC.spec,
          zC = CC && CC.plugin.domEventHandlers,
          wC = CC && CC.plugin.domEventObservers;
        if (zC)
          for (let bC in zC) {
            let CC = zC[bC];
            CC && ZC(bC).handlers.push(qQ(QC.value, CC))
          }
        if (wC)
          for (let bC in wC) {
            let CC = wC[bC];
            CC && ZC(bC).observers.push(qQ(QC.value, CC))
          }
      }
      for (let QC in pQ) ZC(QC).handlers.push(pQ[QC]);
      for (let QC in PQ) ZC(QC).observers.push(PQ[QC]);
      return zC
    }
    const WQ = [{
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
      NQ = "dthko",
      MQ = [16, 17, 18, 20, 91, 92, 224, 225];

    function gQ(CC) {
      return .7 * Math.max(0, CC) + 8
    }
    class SQ {
      constructor(CC, zC, ZC, wC) {
        this.view = CC, this.startEvent = zC, this.style = ZC, this.mustSelect = wC, this.scrollSpeed = {
          x: 0,
          y: 0
        }, this.scrolling = -1, this.lastEvent = zC, this.scrollParents = kC(CC.contentDOM), this.atoms = CC.state.facet(QZ).map((zC => zC(CC)));
        let bC = CC.contentDOM.ownerDocument;
        bC.addEventListener("mousemove", this.move = this.move.bind(this)), bC.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = zC.shiftKey, this.multiple = CC.state.facet(QC.l.allowMultipleSelections) && function(CC, zC) {
          let ZC = CC.state.facet(Yz);
          return ZC.length ? ZC[0](zC) : IC.mac ? zC.metaKey : zC.ctrlKey
        }(CC, zC), this.dragging = !(! function(CC, zC) {
          let {
            main: ZC
          } = CC.state.selection;
          if (ZC.empty) return !1;
          let QC = rC(CC.root);
          if (!QC || 0 == QC.rangeCount) return !0;
          let wC = QC.getRangeAt(0).getClientRects();
          for (let bC = 0; bC < wC.length; bC++) {
            let CC = wC[bC];
            if (CC.left <= zC.clientX && CC.right >= zC.clientX && CC.top <= zC.clientY && CC.bottom >= zC.clientY) return !0
          }
          return !1
        }(CC, zC) || 1 != eQ(zC)) && null
      }
      start(CC) {
        !1 === this.dragging && this.select(CC)
      }
      move(CC) {
        if (0 == CC.buttons) return this.destroy();
        if (this.dragging || null == this.dragging && (zC = this.startEvent, ZC = CC, Math.max(Math.abs(zC.clientX - ZC.clientX), Math.abs(zC.clientY - ZC.clientY)) < 10)) return;
        var zC, ZC;
        this.select(this.lastEvent = CC);
        let QC = 0,
          wC = 0,
          bC = 0,
          nC = 0,
          fC = this.view.win.innerWidth,
          oC = this.view.win.innerHeight;
        this.scrollParents.x && ({
          left: bC,
          right: fC
        } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({
          top: nC,
          bottom: oC
        } = this.scrollParents.y.getBoundingClientRect());
        let qC = fZ(this.view);
        CC.clientX - qC.left <= bC + 6 ? QC = -gQ(bC - CC.clientX) : CC.clientX + qC.right >= fC - 6 && (QC = gQ(CC.clientX - fC)), CC.clientY - qC.top <= nC + 6 ? wC = -gQ(nC - CC.clientY) : CC.clientY + qC.bottom >= oC - 6 && (wC = gQ(CC.clientY - oC)), this.setScrollSpeed(QC, wC)
      }
      up(CC) {
        null == this.dragging && this.select(this.lastEvent), this.dragging || CC.preventDefault(), this.destroy()
      }
      destroy() {
        this.setScrollSpeed(0, 0);
        let CC = this.view.contentDOM.ownerDocument;
        CC.removeEventListener("mousemove", this.move), CC.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null
      }
      setScrollSpeed(CC, zC) {
        this.scrollSpeed = {
          x: CC,
          y: zC
        }, CC || zC ? this.scrolling < 0 && (this.scrolling = setInterval((() => this.scroll()), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1)
      }
      scroll() {
        let {
          x: CC,
          y: zC
        } = this.scrollSpeed;
        CC && this.scrollParents.x && (this.scrollParents.x.scrollLeft += CC, CC = 0), zC && this.scrollParents.y && (this.scrollParents.y.scrollTop += zC, zC = 0), (CC || zC) && this.view.win.scrollBy(CC, zC), !1 === this.dragging && this.select(this.lastEvent)
      }
      select(CC) {
        let {
          view: zC
        } = this, ZC = jZ(this.atoms, this.style.get(CC, this.extend, this.multiple));
        !this.mustSelect && ZC.eq(zC.state.selection, !1 === this.dragging) || this.view.dispatch({
          selection: ZC,
          userEvent: "select.pointer"
        }), this.mustSelect = !1
      }
      update(CC) {
        CC.transactions.some((CC => CC.isUserEvent("input.type"))) ? this.destroy() : this.style.update(CC) && setTimeout((() => this.select(this.lastEvent)), 20)
      }
    }
    const pQ = Object.create(null),
      PQ = Object.create(null),
      GQ = IC.ie && IC.ie_version < 15 || IC.ios && IC.webkit_version < 604;

    function RQ(CC, zC, ZC) {
      for (let QC of CC.facet(zC)) ZC = QC(ZC, CC);
      return ZC
    }

    function AQ(CC, zC) {
      zC = RQ(CC.state, cz, zC);
      let ZC, {
          state: wC
        } = CC,
        bC = 1,
        nC = wC.toText(zC),
        fC = nC.lines == wC.selection.np.length;
      if (null != KQ && wC.selection.np.every((CC => CC.empty)) && KQ == nC.toString()) {
        let CC = -1;
        ZC = wC.changeByRange((ZC => {
          let oC = wC.doc.lineAt(ZC.from);
          if (oC.from == CC) return {
            range: ZC
          };
          CC = oC.from;
          let qC = wC.toText((fC ? nC.line(bC++).text : zC) + wC.lineBreak);
          return {
            changes: {
              from: oC.from,
              insert: qC
            },
            range: QC.i.cursor(ZC.from + qC.length)
          }
        }))
      } else ZC = fC ? wC.changeByRange((CC => {
        let zC = nC.line(bC++);
        return {
          changes: {
            from: CC.from,
            to: CC.to,
            insert: zC.text
          },
          range: QC.i.cursor(CC.from + zC.length)
        }
      })) : wC.replaceSelection(nC);
      CC.dispatch(ZC, {
        userEvent: "input.paste",
        scrollIntoView: !0
      })
    }

    function xQ(CC, zC, ZC, wC) {
      if (1 == wC) return QC.i.cursor(zC, ZC);
      if (2 == wC) return function(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          wC = CC.charCategorizer(zC),
          bC = CC.doc.lineAt(zC),
          nC = zC - bC.from;
        if (0 == bC.length) return QC.i.cursor(zC);
        0 == nC ? ZC = 1 : nC == bC.length && (ZC = -1);
        let fC = nC,
          oC = nC;
        ZC < 0 ? fC = (0, QC.V)(bC.text, nC, !1) : oC = (0, QC.V)(bC.text, nC);
        let qC = wC(bC.text.slice(fC, oC));
        for (; fC > 0;) {
          let CC = (0, QC.V)(bC.text, fC, !1);
          if (wC(bC.text.slice(CC, fC)) != qC) break;
          fC = CC
        }
        for (; oC < bC.length;) {
          let CC = (0, QC.V)(bC.text, oC);
          if (wC(bC.text.slice(oC, CC)) != qC) break;
          oC = CC
        }
        return QC.i.range(fC + bC.from, oC + bC.from)
      }(CC.state, zC, ZC);
      {
        let wC = CC.docView.lineAt(zC, ZC),
          bC = CC.state.doc.lineAt(wC ? wC.posAtEnd : zC),
          nC = wC ? wC.posAtStart : bC.from,
          fC = wC ? wC.posAtEnd : bC.to;
        return fC < CC.state.doc.length && fC == bC.to && fC++, QC.i.range(nC, fC)
      }
    }
    PQ.scroll = CC => {
      CC.inputState.lastScrollTop = CC.scrollDOM.scrollTop, CC.inputState.lastScrollLeft = CC.scrollDOM.scrollLeft
    }, PQ.wheel = PQ.mousewheel = CC => {
      CC.inputState.lastWheelEvent = Date.now()
    }, pQ.keydown = (CC, zC) => (CC.inputState.setSelectionOrigin("select"), 27 == zC.keyCode && 0 != CC.inputState.tabFocusMode && (CC.inputState.tabFocusMode = Date.now() + 2e3), !1), PQ.touchstart = (CC, zC) => {
      let ZC = CC.inputState,
        QC = zC.targetTouches[0];
      ZC.lastTouchTime = Date.now(), QC && (ZC.lastTouchX = QC.clientX, ZC.lastTouchY = QC.clientY), ZC.setSelectionOrigin("select.pointer")
    }, PQ.touchmove = CC => {
      CC.inputState.setSelectionOrigin("select.pointer")
    }, pQ.mousedown = (CC, zC) => {
      if (CC.observer.flush(), CC.inputState.lastTouchTime > Date.now() - 2e3) return !1;
      let ZC = null;
      for (let QC of CC.state.facet(mz))
        if (ZC = QC(CC, zC), ZC) break;
      if (ZC || 0 != zC.button || (ZC = function(CC, zC) {
          let ZC = CC.posAndSideAtCoords({
              x: zC.clientX,
              y: zC.clientY
            }, !1),
            wC = eQ(zC),
            bC = CC.state.selection;
          return {
            update(CC) {
              CC.docChanged && (ZC.pos = CC.changes.mapPos(ZC.pos), bC = bC.map(CC.changes))
            },
            get(zC, nC, fC) {
              let oC, qC = CC.posAndSideAtCoords({
                  x: zC.clientX,
                  y: zC.clientY
                }, !1),
                FC = xQ(CC, qC.pos, qC.assoc, wC);
              if (ZC.pos != qC.pos && !nC) {
                let zC = xQ(CC, ZC.pos, ZC.assoc, wC),
                  bC = Math.min(zC.from, FC.from),
                  nC = Math.max(zC.to, FC.to);
                FC = bC < FC.from ? QC.i.range(bC, nC, FC.assoc) : QC.i.range(nC, bC, FC.assoc)
              }
              return nC ? bC.replaceRange(bC.main.extend(FC.from, FC.to, FC.assoc)) : fC && 1 == wC && bC.np.length > 1 && (oC = function(CC, zC) {
                for (let ZC = 0; ZC < CC.np.length; ZC++) {
                  let {
                    from: wC,
                    to: bC
                  } = CC.np[ZC];
                  if (wC <= zC && bC >= zC) return QC.i.create(CC.np.slice(0, ZC).concat(CC.np.slice(ZC + 1)), CC.mainIndex == ZC ? 0 : CC.mainIndex - (CC.mainIndex > ZC ? 1 : 0))
                }
                return null
              }(bC, qC.pos)) ? oC : fC ? bC.addRange(FC) : QC.i.create([FC])
            }
          }
        }(CC, zC)), ZC) {
        let QC = !CC.hasFocus;
        CC.inputState.startMouseSelection(new SQ(CC, zC, ZC, QC)), QC && CC.observer.ignore((() => {
          Zz(CC.contentDOM);
          let zC = CC.root.activeElement;
          zC && !zC.contains(CC.contentDOM) && zC.blur()
        }));
        let wC = CC.inputState.mouseSelection;
        if (wC) return wC.start(zC), !1 === wC.dragging
      } else CC.inputState.setSelectionOrigin("select.pointer");
      return !1
    };
    const JQ = IC.ie && IC.ie_version <= 11;
    let IQ = null,
      iQ = 0,
      vQ = 0;

    function eQ(CC) {
      if (!JQ) return CC.detail;
      let zC = IQ,
        ZC = vQ;
      return IQ = CC, vQ = Date.now(), iQ = !zC || ZC > Date.now() - 400 && Math.abs(zC.clientX - CC.clientX) < 2 && Math.abs(zC.clientY - CC.clientY) < 2 ? (iQ + 1) % 3 : 1
    }

    function hQ(CC, zC, ZC, QC) {
      if (!(ZC = RQ(CC.state, cz, ZC))) return;
      let wC = CC.posAtCoords({
          x: zC.clientX,
          y: zC.clientY
        }, !1),
        {
          draggedContent: bC
        } = CC.inputState,
        nC = QC && bC && function(CC, zC) {
          let ZC = CC.state.facet(dz);
          return ZC.length ? ZC[0](zC) : IC.mac ? !zC.altKey : !zC.ctrlKey
        }(CC, zC) ? {
          from: bC.from,
          to: bC.to
        } : null,
        fC = {
          from: wC,
          insert: ZC
        },
        oC = CC.state.changes(nC ? [nC, fC] : fC);
      CC.focus(), CC.dispatch({
        changes: oC,
        selection: {
          anchor: oC.mapPos(wC, -1),
          head: oC.mapPos(wC, 1)
        },
        userEvent: nC ? "move.drop" : "input.drop"
      }), CC.inputState.draggedContent = null
    }
    pQ.dragstart = (CC, zC) => {
      let {
        selection: {
          main: ZC
        }
      } = CC.state;
      if (zC.target.draggable) {
        let wC = CC.docView.tile.nearest(zC.target);
        if (wC && wC.isWidget()) {
          let CC = wC.posAtStart,
            zC = CC + wC.length;
          (CC >= ZC.to || zC <= ZC.from) && (ZC = QC.i.range(CC, zC))
        }
      }
      let {
        inputState: wC
      } = CC;
      return wC.mouseSelection && (wC.mouseSelection.dragging = !0), wC.draggedContent = ZC, zC.dataTransfer && (zC.dataTransfer.setData("Text", RQ(CC.state, uz, CC.state.sliceDoc(ZC.from, ZC.to))), zC.dataTransfer.effectAllowed = "copyMove"), !1
    }, pQ.dragend = CC => (CC.inputState.draggedContent = null, !1), pQ.drop = (CC, zC) => {
      if (!zC.dataTransfer) return !1;
      if (CC.state.readOnly) return !0;
      let ZC = zC.dataTransfer.files;
      if (ZC && ZC.length) {
        let QC = Array(ZC.length),
          wC = 0,
          bC = () => {
            ++wC == ZC.length && hQ(CC, zC, QC.filter((CC => null != CC)).join(CC.state.lineBreak), !1)
          };
        for (let CC = 0; CC < ZC.length; CC++) {
          let zC = new FileReader;
          zC.onerror = bC, zC.onload = () => {
            /[\x00-\x08\x0e-\x1f]{2}/.test(zC.result) || (QC[CC] = zC.result), bC()
          }, zC.readAsText(ZC[CC])
        }
        return !0
      } {
        let ZC = zC.dataTransfer.getData("Text");
        if (ZC) return hQ(CC, zC, ZC, !0), !0
      }
      return !1
    }, pQ.paste = (CC, zC) => {
      if (CC.state.readOnly) return !0;
      CC.observer.flush();
      let ZC = GQ ? null : zC.clipboardData;
      return ZC ? (AQ(CC, ZC.getData("text/plain") || ZC.getData("text/uri-list")), !0) : (function(CC) {
        let zC = CC.dom.parentNode;
        if (!zC) return;
        let ZC = zC.appendChild(document.createElement("textarea"));
        ZC.style.cssText = "position: fixed; left: -10000px; top: 10px", ZC.focus(), setTimeout((() => {
          CC.focus(), ZC.remove(), AQ(CC, ZC.value)
        }), 50)
      }(CC), !1)
    };
    let KQ = null;
    pQ.copy = pQ.cut = (CC, zC) => {
      if (!TC(CC.contentDOM, CC.observer.selectionRange)) return !1;
      let {
        text: ZC,
        np: QC,
        linewise: wC
      } = function(CC) {
        let zC = [],
          ZC = [],
          QC = !1;
        for (let wC of CC.selection.np) wC.empty || (zC.push(CC.sliceDoc(wC.from, wC.to)), ZC.push(wC));
        if (!zC.length) {
          let wC = -1;
          for (let {
              from: QC
            }
            of CC.selection.np) {
            let bC = CC.doc.lineAt(QC);
            bC.number > wC && (zC.push(bC.text), ZC.push({
              from: bC.from,
              to: Math.min(CC.doc.length, bC.to + 1)
            })), wC = bC.number
          }
          QC = !0
        }
        return {
          text: RQ(CC, uz, zC.join(CC.lineBreak)),
          np: ZC,
          linewise: QC
        }
      }(CC.state);
      if (!ZC && !wC) return !1;
      KQ = wC ? ZC : null, "cut" != zC.type || CC.state.readOnly || CC.dispatch({
        changes: QC,
        scrollIntoView: !0,
        userEvent: "delete.cut"
      });
      let bC = GQ ? null : zC.clipboardData;
      return bC ? (bC.clearData(), bC.setData("text/plain", ZC), !0) : (function(CC, zC) {
        let ZC = CC.dom.parentNode;
        if (!ZC) return;
        let QC = ZC.appendChild(document.createElement("textarea"));
        QC.style.cssText = "position: fixed; left: -10000px; top: 10px", QC.value = zC, QC.focus(), QC.selectionEnd = zC.length, QC.selectionStart = 0, setTimeout((() => {
          QC.remove(), CC.focus()
        }), 50)
      }(CC, ZC), !1)
    };
    const YQ = QC.d.define();

    function dQ(CC, zC) {
      let ZC = [];
      for (let QC of CC.facet(Xz)) {
        let wC = QC(CC, zC);
        wC && ZC.push(wC)
      }
      return ZC.length ? CC.update({
        effects: ZC,
        annotations: YQ.of(!0)
      }) : null
    }

    function mQ(CC) {
      setTimeout((() => {
        let zC = CC.hasFocus;
        if (zC != CC.inputState.notifiedFocused) {
          let ZC = dQ(CC.state, zC);
          ZC ? CC.dispatch(ZC) : CC.update([])
        }
      }), 10)
    }
    PQ.focus = CC => {
      CC.inputState.lastFocusTime = Date.now(), CC.scrollDOM.scrollTop || !CC.inputState.lastScrollTop && !CC.inputState.lastScrollLeft || (CC.scrollDOM.scrollTop = CC.inputState.lastScrollTop, CC.scrollDOM.scrollLeft = CC.inputState.lastScrollLeft), mQ(CC)
    }, PQ.blur = CC => {
      CC.observer.clearSelectionRange(), mQ(CC)
    }, PQ.compositionstart = PQ.compositionupdate = CC => {
      CC.observer.editContext || (null == CC.inputState.compositionFirstChange && (CC.inputState.compositionFirstChange = !0), CC.inputState.composing < 0 && (CC.inputState.composing = 0))
    }, PQ.compositionend = CC => {
      CC.observer.editContext || (CC.inputState.composing = -1, CC.inputState.compositionEndedAt = Date.now(), CC.inputState.compositionPendingKey = !0, CC.inputState.compositionPendingChange = CC.observer.pendingRecords().length > 0, CC.inputState.compositionFirstChange = null, IC.chrome && IC.android ? CC.observer.flushSoon() : CC.inputState.compositionPendingChange ? Promise.resolve().then((() => CC.observer.flush())) : setTimeout((() => {
        CC.inputState.composing < 0 && CC.docView.hasComposition && CC.update([])
      }), 50))
    }, PQ.contextmenu = CC => {
      CC.inputState.lastContextMenu = Date.now()
    }, pQ.beforeinput = (CC, zC) => {
      var ZC, QC;
      if ("insertText" != zC.inputType && "insertCompositionText" != zC.inputType || (CC.inputState.insertingText = zC.data, CC.inputState.insertingTextAt = Date.now()), "insertReplacementText" == zC.inputType && CC.observer.editContext) {
        let QC = null === (ZC = zC.dataTransfer) || void 0 === ZC ? void 0 : ZC.getData("text/plain"),
          wC = zC.getTargetRanges();
        if (QC && wC.length) {
          let zC = wC[0],
            ZC = CC.posAtDOM(zC.startContainer, zC.startOffset),
            bC = CC.posAtDOM(zC.endContainer, zC.endOffset);
          return bQ(CC, {
            from: ZC,
            to: bC,
            insert: CC.state.toText(QC)
          }, null), !0
        }
      }
      let wC;
      if (IC.chrome && IC.android && (wC = WQ.find((CC => CC.inputType == zC.inputType))) && (CC.observer.delayAndroidKey(wC.key, wC.keyCode), "Backspace" == wC.key || "Delete" == wC.key)) {
        let zC = (null === (QC = window.visualViewport) || void 0 === QC ? void 0 : QC.height) || 0;
        setTimeout((() => {
          var ZC;
          ((null === (ZC = window.visualViewport) || void 0 === ZC ? void 0 : ZC.height) || 0) > zC + 10 && CC.hasFocus && (CC.contentDOM.blur(), CC.focus())
        }), 100)
      }
      return IC.ios && "deleteContentForward" == zC.inputType && CC.observer.flushSoon(), IC.safari && "insertText" == zC.inputType && CC.inputState.composing >= 0 && setTimeout((() => PQ.compositionend(CC, zC)), 20), !1
    };
    const HQ = new Set;
    const EQ = ["pre-wrap", "normal", "pre-line", "break-spaces"];
    let lQ = !1;

    function XQ() {
      lQ = !1
    }
    class cQ {
      constructor(CC) {
        this.lineWrapping = CC, this.doc = QC.B.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30
      }
      heightForGap(CC, zC) {
        let ZC = this.doc.lineAt(zC).number - this.doc.lineAt(CC).number + 1;
        return this.lineWrapping && (ZC += Math.max(0, Math.ceil((zC - CC - ZC * this.lineLength * .5) / this.lineLength))), this.lineHeight * ZC
      }
      heightForLine(CC) {
        if (!this.lineWrapping) return this.lineHeight;
        return (1 + Math.max(0, Math.ceil((CC - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight
      }
      setDoc(CC) {
        return this.doc = CC, this
      }
      mustRefreshForWrapping(CC) {
        return EQ.indexOf(CC) > -1 != this.lineWrapping
      }
      mustRefreshForHeights(CC) {
        let zC = !1;
        for (let ZC = 0; ZC < CC.length; ZC++) {
          let QC = CC[ZC];
          QC < 0 ? ZC++ : this.heightSamples[Math.floor(10 * QC)] || (zC = !0, this.heightSamples[Math.floor(10 * QC)] = !0)
        }
        return zC
      }
      refresh(CC, zC, ZC, QC, wC, bC) {
        let nC = EQ.indexOf(CC) > -1,
          fC = Math.abs(zC - this.lineHeight) > .3 || this.lineWrapping != nC || Math.abs(ZC - this.charWidth) > .1;
        if (this.lineWrapping = nC, this.lineHeight = zC, this.charWidth = ZC, this.textHeight = QC, this.lineLength = wC, fC) {
          this.heightSamples = {};
          for (let CC = 0; CC < bC.length; CC++) {
            let zC = bC[CC];
            zC < 0 ? CC++ : this.heightSamples[Math.floor(10 * zC)] = !0
          }
        }
        return fC
      }
    }
    class uQ {
      constructor(CC, zC) {
        this.from = CC, this.heights = zC, this.index = 0
      }
      get more() {
        return this.index < this.heights.length
      }
    }
    class rQ {
      constructor(CC, zC, ZC, QC, wC) {
        this.from = CC, this.length = zC, this.top = ZC, this.height = QC, this._content = wC
      }
      get type() {
        return "number" == typeof this._content ? dC.Text : Array.isArray(this._content) ? this._content : this._content.type
      }
      get to() {
        return this.from + this.length
      }
      get bottom() {
        return this.top + this.height
      }
      get widget() {
        return this._content instanceof lC ? this._content.widget : null
      }
      get widgetLineBreaks() {
        return "number" == typeof this._content ? this._content : 0
      }
      join(CC) {
        let zC = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(CC._content) ? CC._content : [CC]);
        return new rQ(this.from, this.length + CC.length, this.top, this.height + CC.height, zC)
      }
    }
    var sQ = function(CC) {
      return CC[CC.ByPos = 0] = "ByPos", CC[CC.ByHeight = 1] = "ByHeight", CC[CC.ByPosNoHeight = 2] = "ByPosNoHeight", CC
    }(sQ || (sQ = {}));
    const TQ = .001;
    class aQ {
      constructor(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.length = CC, this.height = zC, this.flags = ZC
      }
      get outdated() {
        return (2 & this.flags) > 0
      }
      set outdated(CC) {
        this.flags = (CC ? 2 : 0) | -3 & this.flags
      }
      setHeight(CC) {
        this.height != CC && (Math.abs(this.height - CC) > TQ && (lQ = !0), this.height = CC)
      }
      replace(CC, zC, ZC) {
        return aQ.of(ZC)
      }
      decomposeLeft(CC, zC) {
        zC.push(this)
      }
      decomposeRight(CC, zC) {
        zC.push(this)
      }
      applyChanges(CC, zC, ZC, QC) {
        let wC = this,
          bC = ZC.doc;
        for (let nC = QC.length - 1; nC >= 0; nC--) {
          let {
            fromA: fC,
            toA: oC,
            fromB: qC,
            toB: FC
          } = QC[nC], WC = wC.lineAt(fC, sQ.ByPosNoHeight, ZC.setDoc(zC), 0, 0), NC = WC.to >= oC ? WC : wC.lineAt(oC, sQ.ByPosNoHeight, ZC, 0, 0);
          for (FC += NC.to - oC, oC = NC.to; nC > 0 && WC.from <= QC[nC - 1].toA;) fC = QC[nC - 1].fromA, qC = QC[nC - 1].fromB, nC--, fC < WC.from && (WC = wC.lineAt(fC, sQ.ByPosNoHeight, ZC, 0, 0));
          qC += WC.from - fC, fC = WC.from;
          let MC = OQ.build(ZC.setDoc(bC), CC, qC, FC);
          wC = tQ(wC, wC.replace(fC, oC, MC))
        }
        return wC.updateHeight(ZC, 0)
      }
      static empty() {
        return new yQ(0, 0, 0)
      }
      static of (CC) {
        if (1 == CC.length) return CC[0];
        let zC = 0,
          ZC = CC.length,
          QC = 0,
          wC = 0;
        for (;;)
          if (zC == ZC)
            if (QC > 2 * wC) {
              let wC = CC[zC - 1];
              wC.break ? CC.splice(--zC, 1, wC.left, null, wC.right) : CC.splice(--zC, 1, wC.left, wC.right), ZC += 1 + wC.break, QC -= wC.size
            } else {
              if (!(wC > 2 * QC)) break;
              {
                let zC = CC[ZC];
                zC.break ? CC.splice(ZC, 1, zC.left, null, zC.right) : CC.splice(ZC, 1, zC.left, zC.right), ZC += 2 + zC.break, wC -= zC.size
              }
            }
        else if (QC < wC) {
          let ZC = CC[zC++];
          ZC && (QC += ZC.size)
        } else {
          let zC = CC[--ZC];
          zC && (wC += zC.size)
        }
        let bC = 0;
        return null == CC[zC - 1] ? (bC = 1, zC--) : null == CC[zC] && (bC = 1, ZC++), new UQ(aQ.of(CC.slice(0, zC)), bC, aQ.of(CC.slice(ZC)))
      }
    }

    function tQ(CC, zC) {
      return CC == zC ? CC : (CC.constructor != zC.constructor && (lQ = !0), zC)
    }
    aQ.prototype.size = 1;
    const DQ = mC.replace({});
    class jQ extends aQ {
      constructor(CC, zC, ZC) {
        super(CC, zC), this.deco = ZC, this.spaceAbove = 0
      }
      mainBlock(CC, zC) {
        return new rQ(zC, this.length, CC + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0)
      }
      blockAt(CC, zC, ZC, QC) {
        return this.spaceAbove && CC < ZC + this.spaceAbove ? new rQ(QC, 0, ZC, this.spaceAbove, DQ) : this.mainBlock(ZC, QC)
      }
      lineAt(CC, zC, ZC, QC, wC) {
        let bC = this.mainBlock(QC, wC);
        return this.spaceAbove ? this.blockAt(0, ZC, QC, wC).join(bC) : bC
      }
      forEachLine(CC, zC, ZC, QC, wC, bC) {
        CC <= wC + this.length && zC >= wC && bC(this.lineAt(0, sQ.ByPos, ZC, QC, wC))
      }
      setMeasuredHeight(CC) {
        let zC = CC.heights[CC.index++];
        zC < 0 ? (this.spaceAbove = -zC, zC = CC.heights[CC.index++]) : this.spaceAbove = 0, this.setHeight(zC)
      }
      updateHeight(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZC = arguments.length > 3 ? arguments[3] : void 0;
        return ZC && ZC.from <= zC && ZC.more && this.setMeasuredHeight(ZC), this.outdated = !1, this
      }
      toString() {
        return `block(${this.length})`
      }
    }
    class yQ extends jQ {
      constructor(CC, zC, ZC) {
        super(CC, zC, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = ZC
      }
      mainBlock(CC, zC) {
        return new rQ(zC, this.length, CC + this.spaceAbove, this.height - this.spaceAbove, this.breaks)
      }
      replace(CC, zC, ZC) {
        let QC = ZC[0];
        return 1 == ZC.length && (QC instanceof yQ || QC instanceof LQ && 4 & QC.flags) && Math.abs(this.length - QC.length) < 10 ? (QC instanceof LQ ? QC = new yQ(QC.length, this.height, this.spaceAbove) : QC.height = this.height, this.outdated || (QC.outdated = !1), QC) : aQ.of(ZC)
      }
      updateHeight(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          QC = arguments.length > 3 ? arguments[3] : void 0;
        return QC && QC.from <= zC && QC.more ? this.setMeasuredHeight(QC) : (ZC || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, CC.heightForLine(this.length - this.collapsed)) + this.breaks * CC.lineHeight)), this.outdated = !1, this
      }
      toString() {
        return `line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`
      }
    }
    class LQ extends aQ {
      constructor(CC) {
        super(CC, 0)
      }
      heightMetrics(CC, zC) {
        let ZC, QC = CC.doc.lineAt(zC).number,
          wC = CC.doc.lineAt(zC + this.length).number,
          bC = wC - QC + 1,
          nC = 0;
        if (CC.lineWrapping) {
          let zC = Math.min(this.height, CC.lineHeight * bC);
          ZC = zC / bC, this.length > bC + 1 && (nC = (this.height - zC) / (this.length - bC - 1))
        } else ZC = this.height / bC;
        return {
          firstLine: QC,
          lastLine: wC,
          perLine: ZC,
          perChar: nC
        }
      }
      blockAt(CC, zC, ZC, QC) {
        let {
          firstLine: wC,
          lastLine: bC,
          perLine: nC,
          perChar: fC
        } = this.heightMetrics(zC, QC);
        if (zC.lineWrapping) {
          let wC = QC + (CC < zC.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (CC - ZC) / this.height)) * this.length)),
            bC = zC.doc.lineAt(wC),
            oC = nC + bC.length * fC,
            qC = Math.max(ZC, CC - oC / 2);
          return new rQ(bC.from, bC.length, qC, oC, 0)
        } {
          let QC = Math.max(0, Math.min(bC - wC, Math.floor((CC - ZC) / nC))),
            {
              from: fC,
              length: oC
            } = zC.doc.line(wC + QC);
          return new rQ(fC, oC, ZC + nC * QC, nC, 0)
        }
      }
      lineAt(CC, zC, ZC, QC, wC) {
        if (zC == sQ.ByHeight) return this.blockAt(CC, ZC, QC, wC);
        if (zC == sQ.ByPosNoHeight) {
          let {
            from: zC,
            to: QC
          } = ZC.doc.lineAt(CC);
          return new rQ(zC, QC - zC, 0, 0, 0)
        }
        let {
          firstLine: bC,
          perLine: nC,
          perChar: fC
        } = this.heightMetrics(ZC, wC), oC = ZC.doc.lineAt(CC), qC = nC + oC.length * fC, FC = oC.number - bC, WC = QC + nC * FC + fC * (oC.from - wC - FC);
        return new rQ(oC.from, oC.length, Math.max(QC, Math.min(WC, QC + this.height - qC)), qC, 0)
      }
      forEachLine(CC, zC, ZC, QC, wC, bC) {
        CC = Math.max(CC, wC), zC = Math.min(zC, wC + this.length);
        let {
          firstLine: nC,
          perLine: fC,
          perChar: oC
        } = this.heightMetrics(ZC, wC);
        for (let qC = CC, FC = QC; qC <= zC;) {
          let zC = ZC.doc.lineAt(qC);
          if (qC == CC) {
            let ZC = zC.number - nC;
            FC += fC * ZC + oC * (CC - wC - ZC)
          }
          let QC = fC + oC * zC.length;
          bC(new rQ(zC.from, zC.length, FC, QC, 0)), FC += QC, qC = zC.to + 1
        }
      }
      replace(CC, zC, ZC) {
        let QC = this.length - zC;
        if (QC > 0) {
          let CC = ZC[ZC.length - 1];
          CC instanceof LQ ? ZC[ZC.length - 1] = new LQ(CC.length + QC) : ZC.push(null, new LQ(QC - 1))
        }
        if (CC > 0) {
          let zC = ZC[0];
          zC instanceof LQ ? ZC[0] = new LQ(CC + zC.length) : ZC.unshift(new LQ(CC - 1), null)
        }
        return aQ.of(ZC)
      }
      decomposeLeft(CC, zC) {
        zC.push(new LQ(CC - 1), null)
      }
      decomposeRight(CC, zC) {
        zC.push(null, new LQ(this.length - CC - 1))
      }
      updateHeight(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          QC = arguments.length > 3 ? arguments[3] : void 0,
          wC = zC + this.length;
        if (QC && QC.from <= zC + this.length && QC.more) {
          let ZC = [],
            bC = Math.max(zC, QC.from),
            nC = -1;
          for (QC.from > zC && ZC.push(new LQ(QC.from - zC - 1).updateHeight(CC, zC)); bC <= wC && QC.more;) {
            let zC = CC.doc.lineAt(bC).length;
            ZC.length && ZC.push(null);
            let wC = QC.heights[QC.index++],
              fC = 0;
            wC < 0 && (fC = -wC, wC = QC.heights[QC.index++]), -1 == nC ? nC = wC : Math.abs(wC - nC) >= TQ && (nC = -2);
            let oC = new yQ(zC, wC, fC);
            oC.outdated = !1, ZC.push(oC), bC += zC + 1
          }
          bC <= wC && ZC.push(null, new LQ(wC - bC).updateHeight(CC, bC));
          let fC = aQ.of(ZC);
          return (nC < 0 || Math.abs(fC.height - this.height) >= TQ || Math.abs(nC - this.heightMetrics(CC, zC).perLine) >= TQ) && (lQ = !0), tQ(this, fC)
        }
        return (ZC || this.outdated) && (this.setHeight(CC.heightForGap(zC, zC + this.length)), this.outdated = !1), this
      }
      toString() {
        return `gap(${this.length})`
      }
    }
    class UQ extends aQ {
      constructor(CC, zC, ZC) {
        super(CC.length + zC + ZC.length, CC.height + ZC.height, zC | (CC.outdated || ZC.outdated ? 2 : 0)), this.left = CC, this.right = ZC, this.size = CC.size + ZC.size
      }
      get break() {
        return 1 & this.flags
      }
      blockAt(CC, zC, ZC, QC) {
        let wC = ZC + this.left.height;
        return CC < wC ? this.left.blockAt(CC, zC, ZC, QC) : this.right.blockAt(CC, zC, wC, QC + this.left.length + this.break)
      }
      lineAt(CC, zC, ZC, QC, wC) {
        let bC = QC + this.left.height,
          nC = wC + this.left.length + this.break,
          fC = zC == sQ.ByHeight ? CC < bC : CC < nC,
          oC = fC ? this.left.lineAt(CC, zC, ZC, QC, wC) : this.right.lineAt(CC, zC, ZC, bC, nC);
        if (this.break || (fC ? oC.to < nC : oC.from > nC)) return oC;
        let qC = zC == sQ.ByPosNoHeight ? sQ.ByPosNoHeight : sQ.ByPos;
        return fC ? oC.join(this.right.lineAt(nC, qC, ZC, bC, nC)) : this.left.lineAt(nC, qC, ZC, QC, wC).join(oC)
      }
      forEachLine(CC, zC, ZC, QC, wC, bC) {
        let nC = QC + this.left.height,
          fC = wC + this.left.length + this.break;
        if (this.break) CC < fC && this.left.forEachLine(CC, zC, ZC, QC, wC, bC), zC >= fC && this.right.forEachLine(CC, zC, ZC, nC, fC, bC);
        else {
          let oC = this.lineAt(fC, sQ.ByPos, ZC, QC, wC);
          CC < oC.from && this.left.forEachLine(CC, oC.from - 1, ZC, QC, wC, bC), oC.to >= CC && oC.from <= zC && bC(oC), zC > oC.to && this.right.forEachLine(oC.to + 1, zC, ZC, nC, fC, bC)
        }
      }
      replace(CC, zC, ZC) {
        let QC = this.left.length + this.break;
        if (zC < QC) return this.balanced(this.left.replace(CC, zC, ZC), this.right);
        if (CC > this.left.length) return this.balanced(this.left, this.right.replace(CC - QC, zC - QC, ZC));
        let wC = [];
        CC > 0 && this.decomposeLeft(CC, wC);
        let bC = wC.length;
        for (let nC of ZC) wC.push(nC);
        if (CC > 0 && BQ(wC, bC - 1), zC < this.length) {
          let CC = wC.length;
          this.decomposeRight(zC, wC), BQ(wC, CC)
        }
        return aQ.of(wC)
      }
      decomposeLeft(CC, zC) {
        let ZC = this.left.length;
        if (CC <= ZC) return this.left.decomposeLeft(CC, zC);
        zC.push(this.left), this.break && (ZC++, CC >= ZC && zC.push(null)), CC > ZC && this.right.decomposeLeft(CC - ZC, zC)
      }
      decomposeRight(CC, zC) {
        let ZC = this.left.length,
          QC = ZC + this.break;
        if (CC >= QC) return this.right.decomposeRight(CC - QC, zC);
        CC < ZC && this.left.decomposeRight(CC, zC), this.break && CC < QC && zC.push(null), zC.push(this.right)
      }
      balanced(CC, zC) {
        return CC.size > 2 * zC.size || zC.size > 2 * CC.size ? aQ.of(this.break ? [CC, null, zC] : [CC, zC]) : (this.left = tQ(this.left, CC), this.right = tQ(this.right, zC), this.setHeight(CC.height + zC.height), this.outdated = CC.outdated || zC.outdated, this.size = CC.size + zC.size, this.length = CC.length + this.break+zC.length, this)
      }
      updateHeight(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          QC = arguments.length > 3 ? arguments[3] : void 0,
          {
            left: wC,
            right: bC
          } = this,
          nC = zC + wC.length + this.break,
          fC = null;
        return QC && QC.from <= zC + wC.length && QC.more ? fC = wC = wC.updateHeight(CC, zC, ZC, QC) : wC.updateHeight(CC, zC, ZC), QC && QC.from <= nC + bC.length && QC.more ? fC = bC = bC.updateHeight(CC, nC, ZC, QC) : bC.updateHeight(CC, nC, ZC), fC ? this.balanced(wC, bC) : (this.height = this.left.height + this.right.height, this.outdated = !1, this)
      }
      toString() {
        return this.left + (this.break ? " " : "-") + this.right
      }
    }

    function BQ(CC, zC) {
      let ZC, QC;
      null == CC[zC] && (ZC = CC[zC - 1]) instanceof LQ && (QC = CC[zC + 1]) instanceof LQ && CC.splice(zC - 1, 3, new LQ(ZC.length + 1 + QC.length))
    }
    class OQ {
      constructor(CC, zC) {
        this.pos = CC, this.oracle = zC, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = CC
      }
      get isCovered() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering
      }
      span(CC, zC) {
        if (this.lineStart > -1) {
          let CC = Math.min(zC, this.lineEnd),
            ZC = this.nodes[this.nodes.length - 1];
          ZC instanceof yQ ? ZC.length += CC - this.pos : (CC > this.pos || !this.isCovered) && this.nodes.push(new yQ(CC - this.pos, -1, 0)), this.writtenTo = CC, zC > CC && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1)
        }
        this.pos = zC
      }
      point(CC, zC, ZC) {
        if (CC < zC || ZC.heightRelevant) {
          let QC = ZC.widget ? ZC.widget.estimatedHeight : 0,
            wC = ZC.widget ? ZC.widget.lineBreaks : 0;
          QC < 0 && (QC = this.oracle.lineHeight);
          let bC = zC - CC;
          ZC.block ? this.ZzC(new jQ(bC, QC, ZC)) : (bC || wC || QC >= 5) && this.addLineDeco(QC, wC, bC)
        } else zC > CC && this.span(CC, zC);
        this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
      }
      enterLine() {
        if (this.lineStart > -1) return;
        let {
          from: CC,
          to: zC
        } = this.oracle.doc.lineAt(this.pos);
        this.lineStart = CC, this.lineEnd = zC, this.writtenTo < CC && ((this.writtenTo < CC - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, CC - 1)), this.nodes.push(null)), this.pos > CC && this.nodes.push(new yQ(this.pos - CC, -1, 0)), this.writtenTo = this.pos
      }
      blankContent(CC, zC) {
        let ZC = new LQ(zC - CC);
        return this.oracle.doc.lineAt(CC).to == zC && (ZC.flags |= 4), ZC
      }
      ensureLine() {
        this.enterLine();
        let CC = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (CC instanceof yQ) return CC;
        let zC = new yQ(0, -1, 0);
        return this.nodes.push(zC), zC
      }
      ZzC(CC) {
        this.enterLine();
        let zC = CC.deco;
        zC && zC.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(CC), this.writtenTo = this.pos = this.pos + CC.length, zC && zC.endSide > 0 && (this.covering = CC)
      }
      addLineDeco(CC, zC, ZC) {
        let QC = this.ensureLine();
        QC.length += ZC, QC.collapsed += ZC, QC.widgetHeight = Math.max(QC.widgetHeight, CC), QC.breaks += zC, this.writtenTo = this.pos = this.pos + ZC
      }
      finish(CC) {
        let zC = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
        !(this.lineStart > -1) || zC instanceof yQ || this.isCovered ? (this.writtenTo < this.pos || null == zC) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new yQ(0, -1, 0));
        let ZC = CC;
        for (let QC of this.nodes) QC instanceof yQ && QC.updateHeight(this.oracle, ZC), ZC += QC ? QC.length : 1;
        return this.nodes
      }
      static build(CC, zC, ZC, wC) {
        let bC = new OQ(ZC, CC);
        return QC.u.spans(zC, ZC, wC, bC, 0), bC.finish(ZC)
      }
    }
    class kQ {
      constructor() {
        this.changes = []
      }
      compareRange() {}
      comparePoint(CC, zC, ZC, QC) {
        (CC < zC || ZC && ZC.heightRelevant || QC && QC.heightRelevant) && cC(CC, zC, this.changes, 5)
      }
    }

    function VQ(CC, zC) {
      let ZC = CC.getBoundingClientRect(),
        QC = CC.ownerDocument,
        wC = QC.defaultView || window,
        bC = Math.max(0, ZC.left),
        nC = Math.min(wC.innerWidth, ZC.right),
        fC = Math.max(0, ZC.top),
        oC = Math.min(wC.innerHeight, ZC.bottom);
      for (let qC = CC.parentNode; qC && qC != QC.body;)
        if (1 == qC.nodeType) {
          let zC = qC,
            ZC = window.getComputedStyle(zC);
          if ((zC.scrollHeight > zC.clientHeight || zC.scrollWidth > zC.clientWidth) && "visible" != ZC.overflow) {
            let ZC = zC.getBoundingClientRect();
            bC = Math.max(bC, ZC.left), nC = Math.min(nC, ZC.right), fC = Math.max(fC, ZC.top), oC = Math.min(qC == CC.parentNode ? wC.innerHeight : oC, ZC.bottom)
          }
          qC = "absolute" == ZC.position || "fixed" == ZC.position ? zC.offsetParent : zC.parentNode
        } else {
          if (11 != qC.nodeType) break;
          qC = qC.host
        } return {
        left: bC - ZC.left,
        right: Math.max(bC, nC) - ZC.left,
        top: fC - (ZC.top + zC),
        bottom: Math.max(fC, oC) - (ZC.top + zC)
      }
    }

    function Cw(CC, zC) {
      let ZC = CC.getBoundingClientRect();
      return {
        left: 0,
        right: ZC.right - ZC.left,
        top: zC,
        bottom: ZC.bottom - (ZC.top + zC)
      }
    }
    class zw {
      constructor(CC, zC, ZC, QC) {
        this.from = CC, this.to = zC, this.size = ZC, this.displaySize = QC
      }
      static same(CC, zC) {
        if (CC.length != zC.length) return !1;
        for (let ZC = 0; ZC < CC.length; ZC++) {
          let QC = CC[ZC],
            wC = zC[ZC];
          if (QC.from != wC.from || QC.to != wC.to || QC.size != wC.size) return !1
        }
        return !0
      }
      draw(CC, zC) {
        return mC.replace({
          widget: new Zw(this.displaySize * (zC ? CC.scaleY : CC.scaleX), zC)
        }).range(this.from, this.to)
      }
    }
    class Zw extends YC {
      constructor(CC, zC) {
        super(), this.size = CC, this.vertical = zC
      }
      eq(CC) {
        return CC.size == this.size && CC.vertical == this.vertical
      }
      toDOM() {
        let CC = document.createElement("div");
        return this.vertical ? CC.style.height = this.size + "px" : (CC.style.width = this.size + "px", CC.style.height = "2px", CC.style.display = "inline-block"), CC
      }
      get estimatedHeight() {
        return this.vertical ? this.size : -1
      }
    }
    class Qw {
      constructor(CC, zC) {
        this.view = CC, this.state = zC, this.pixelViewport = {
          left: 0,
          right: window.innerWidth,
          top: 0,
          bottom: 0
        }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = fw, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = qz.LTR, this.Y_ = [], this.mustEnforceCursorAssoc = !1;
        let ZC = zC.facet(Vz).some((CC => "function" != typeof CC && "cm-lineWrapping" == CC.class));
        this.heightOracle = new cQ(ZC), this.stateDeco = ow(zC), this.heightMap = aQ.empty().applyChanges(this.stateDeco, QC.B.empty, this.heightOracle.setDoc(zC.doc), [new qZ(0, 0, 0, zC.doc.length)]);
        for (let QC = 0; QC < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); QC++);
        this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = mC.set(this.lineGaps.map((CC => CC.draw(this, !1)))), this.scrollParent = CC.scrollDOM, this.computeVisibleRanges()
      }
      updateForViewport() {
        let CC = [this.viewport],
          {
            main: zC
          } = this.state.selection;
        for (let ZC = 0; ZC <= 1; ZC++) {
          let QC = ZC ? zC.head : zC.anchor;
          if (!CC.some((CC => {
              let {
                from: zC,
                to: ZC
              } = CC;
              return QC >= zC && QC <= ZC
            }))) {
            let {
              from: zC,
              to: ZC
            } = this.lineBlockAt(QC);
            CC.push(new ww(zC, ZC))
          }
        }
        return this.viewports = CC.sort(((CC, zC) => CC.from - zC.from)), this.updateScaler()
      }
      updateScaler() {
        let CC = this.scaler;
        return this.scaler = this.heightMap.height <= 7e6 ? fw : new qw(this.heightOracle, this.heightMap, this.viewports), CC.eq(this.scaler) ? 0 : 2
      }
      updateViewportLines() {
        this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (CC => {
          this.viewportLines.push(Fw(CC, this.scaler))
        }))
      }
      update(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.state = CC.state;
        let ZC = this.stateDeco;
        this.stateDeco = ow(this.state);
        let wC = CC.changedRanges,
          bC = qZ.extendWithRanges(wC, function(CC, zC, ZC) {
            let wC = new kQ;
            return QC.u.compare(CC, zC, ZC, wC, 0), wC.changes
          }(ZC, this.stateDeco, CC ? CC.changes : QC.ChangeSet.empty(this.state.doc.length))),
          nC = this.heightMap.height,
          fC = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
        XQ(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, CC.startState.doc, this.heightOracle.setDoc(this.state.doc), bC), (this.heightMap.height != nC || lQ) && (CC.flags |= 2), fC ? (this.scrollAnchorPos = CC.changes.mapPos(fC.from, -1), this.scrollAnchorHeight = fC.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = nC);
        let oC = bC.length ? this.mapViewport(this.viewport, CC.changes) : this.viewport;
        (zC && (zC.range.head < oC.from || zC.range.head > oC.to) || !this.viewportIsAppropriate(oC)) && (oC = this.getViewport(0, zC));
        let qC = oC.from != this.viewport.from || oC.to != this.viewport.to;
        this.viewport = oC, CC.flags |= this.updateForViewport(), (qC || !CC.changes.empty || 2 & CC.flags) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, CC.changes))), CC.flags |= this.computeVisibleRanges(CC.changes), zC && (this.scrollTarget = zC), !this.mustEnforceCursorAssoc && (CC.selectionSet || CC.focusChanged) && CC.view.lineWrapping && CC.state.selection.main.empty && CC.state.selection.main.assoc && !CC.state.facet(sz) && (this.mustEnforceCursorAssoc = !0)
      }
      measure() {
        let {
          view: CC
        } = this, zC = CC.contentDOM, ZC = window.getComputedStyle(zC), wC = this.heightOracle, bC = ZC.whiteSpace;
        this.defaultTextDirection = "rtl" == ZC.direction ? qz.RTL : qz.LTR;
        let nC = this.heightOracle.mustRefreshForWrapping(bC) || "refresh" === this.mustMeasureContent,
          fC = zC.getBoundingClientRect(),
          oC = nC || this.mustMeasureContent || this.contentDOMHeight != fC.height;
        this.contentDOMHeight = fC.height, this.mustMeasureContent = !1;
        let qC = 0,
          FC = 0;
        if (fC.width && fC.height) {
          let {
            scaleX: CC,
            scaleY: ZC
          } = OC(zC, fC);
          (CC > .005 && Math.abs(this.scaleX - CC) > .005 || ZC > .005 && Math.abs(this.scaleY - ZC) > .005) && (this.scaleX = CC, this.scaleY = ZC, qC |= 16, nC = oC = !0)
        }
        let WC = (parseInt(ZC.paddingTop) || 0) * this.scaleY,
          NC = (parseInt(ZC.paddingBottom) || 0) * this.scaleY;
        this.paddingTop == WC && this.paddingBottom == NC || (this.paddingTop = WC, this.paddingBottom = NC, qC |= 18), this.editorWidth != CC.scrollDOM.clientWidth && (wC.lineWrapping && (oC = !0), this.editorWidth = CC.scrollDOM.clientWidth, qC |= 16);
        let MC = kC(this.view.contentDOM, !1).y;
        MC != this.scrollParent && (this.scrollParent = MC, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
        let gC = this.getScrollOffset();
        this.scrollOffset != gC && (this.scrollAnchorHeight = -1, this.scrollOffset = gC), this.scrolledToBottom = bz(this.scrollParent || CC.win);
        let SC = (this.printing ? Cw : VQ)(zC, this.paddingTop),
          pC = SC.top - this.pixelViewport.top,
          PC = SC.bottom - this.pixelViewport.bottom;
        this.pixelViewport = SC;
        let GC = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
        if (GC != this.inView && (this.inView = GC, GC && (oC = !0)), !this.inView && !this.scrollTarget && ! function(CC) {
            let zC = CC.getBoundingClientRect(),
              ZC = CC.ownerDocument.defaultView || window;
            return zC.left < ZC.innerWidth && zC.right > 0 && zC.top < ZC.innerHeight && zC.bottom > 0
          }(CC.dom)) return 0;
        let RC = fC.width;
        if (this.contentDOMWidth == RC && this.editorHeight == CC.scrollDOM.clientHeight || (this.contentDOMWidth = fC.width, this.editorHeight = CC.scrollDOM.clientHeight, qC |= 16), oC) {
          let zC = CC.docView.measureVisibleLineHeights(this.viewport);
          if (wC.mustRefreshForHeights(zC) && (nC = !0), nC || wC.lineWrapping && Math.abs(RC - this.contentDOMWidth) > wC.charWidth) {
            let {
              lineHeight: ZC,
              charWidth: QC,
              textHeight: fC
            } = CC.docView.measureTextSize();
            nC = ZC > 0 && wC.refresh(bC, ZC, QC, fC, Math.max(5, RC / QC), zC), nC && (CC.docView.minWidth = 0, qC |= 16)
          }
          pC > 0 && PC > 0 ? FC = Math.max(pC, PC) : pC < 0 && PC < 0 && (FC = Math.min(pC, PC)), XQ();
          for (let ZC of this.viewports) {
            let bC = ZC.from == this.viewport.from ? zC : CC.docView.measureVisibleLineHeights(ZC);
            this.heightMap = (nC ? aQ.empty().applyChanges(this.stateDeco, QC.B.empty, this.heightOracle, [new qZ(0, 0, 0, CC.state.doc.length)]) : this.heightMap).updateHeight(wC, 0, nC, new uQ(ZC.from, bC))
          }
          lQ && (qC |= 2)
        }
        let AC = !this.viewportIsAppropriate(this.viewport, FC) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
        return AC && (2 & qC && (qC |= this.updateScaler()), this.viewport = this.getViewport(FC, this.scrollTarget), qC |= this.updateForViewport()), (2 & qC || AC) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(nC ? [] : this.lineGaps, CC)), qC |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, CC.docView.enforceCursorAssoc()), qC
      }
      get visibleTop() {
        return this.scaler.fromDOM(this.pixelViewport.top)
      }
      get visibleBottom() {
        return this.scaler.fromDOM(this.pixelViewport.bottom)
      }
      getViewport(CC, zC) {
        let ZC = .5 - Math.max(-.5, Math.min(.5, CC / 1e3 / 2)),
          QC = this.heightMap,
          wC = this.heightOracle,
          {
            visibleTop: bC,
            visibleBottom: nC
          } = this,
          fC = new ww(QC.lineAt(bC - 1e3 * ZC, sQ.ByHeight, wC, 0, 0).from, QC.lineAt(nC + 1e3 * (1 - ZC), sQ.ByHeight, wC, 0, 0).to);
        if (zC) {
          let {
            head: CC
          } = zC.range;
          if (CC < fC.from || CC > fC.to) {
            let ZC, bC = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
              nC = QC.lineAt(CC, sQ.ByPos, wC, 0, 0);
            ZC = "center" == zC.y ? (nC.top + nC.bottom) / 2 - bC / 2 : "start" == zC.y || "nearest" == zC.y && CC < fC.from ? nC.top : nC.bottom - bC, fC = new ww(QC.lineAt(ZC - 500, sQ.ByHeight, wC, 0, 0).from, QC.lineAt(ZC + bC + 500, sQ.ByHeight, wC, 0, 0).to)
          }
        }
        return fC
      }
      mapViewport(CC, zC) {
        let ZC = zC.mapPos(CC.from, -1),
          QC = zC.mapPos(CC.to, 1);
        return new ww(this.heightMap.lineAt(ZC, sQ.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(QC, sQ.ByPos, this.heightOracle, 0, 0).to)
      }
      viewportIsAppropriate(CC) {
        let {
          from: zC,
          to: ZC
        } = CC, QC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!this.inView) return !0;
        let {
          top: wC
        } = this.heightMap.lineAt(zC, sQ.ByPos, this.heightOracle, 0, 0), {
          bottom: bC
        } = this.heightMap.lineAt(ZC, sQ.ByPos, this.heightOracle, 0, 0), {
          visibleTop: nC,
          visibleBottom: fC
        } = this;
        return (0 == zC || wC <= nC - Math.max(10, Math.min(-QC, 250))) && (ZC == this.state.doc.length || bC >= fC + Math.max(10, Math.min(QC, 250))) && wC > nC - 2e3 && bC < fC + 2e3
      }
      mapLineGaps(CC, zC) {
        if (!CC.length || zC.empty) return CC;
        let ZC = [];
        for (let QC of CC) zC.touchesRange(QC.from, QC.to) || ZC.push(new zw(zC.mapPos(QC.from), zC.mapPos(QC.to), QC.size, QC.displaySize));
        return ZC
      }
      ensureLineGaps(CC, zC) {
        let ZC = this.heightOracle.lineWrapping,
          wC = ZC ? 1e4 : 2e3,
          bC = wC >> 1,
          nC = wC << 1;
        if (this.defaultTextDirection != qz.LTR && !ZC) return [];
        let fC = [],
          oC = (wC, nC, qC, FC) => {
            if (nC - wC < bC) return;
            let WC = this.state.selection.main,
              NC = [WC.from];
            WC.empty || NC.push(WC.to);
            for (let CC of NC)
              if (CC > wC && CC < nC) return oC(wC, CC - 10, qC, FC), void oC(CC + 10, nC, qC, FC);
            let MC = function(CC, zC) {
              for (let ZC of CC)
                if (zC(ZC)) return ZC;
              return
            }(CC, (CC => CC.from >= qC.from && CC.to <= qC.to && Math.abs(CC.from - wC) < bC && Math.abs(CC.to - nC) < bC && !NC.some((zC => CC.from < zC && CC.to > zC))));
            if (!MC) {
              if (nC < qC.to && zC && ZC && zC.Y_.some((CC => CC.from <= nC && CC.to >= nC))) {
                let CC = zC.moveToLineBoundary(QC.i.cursor(nC), !1, !0).head;
                CC > wC && (nC = CC)
              }
              let CC = this.gapSize(qC, wC, nC, FC);
              MC = new zw(wC, nC, CC, ZC || CC < 2e6 ? CC : 2e6)
            }
            fC.push(MC)
          },
          qC = zC => {
            if (zC.length < nC || zC.type != dC.Text) return;
            let bC = function(CC, zC, ZC) {
              let wC = [],
                bC = CC,
                nC = 0;
              QC.u.spans(ZC, CC, zC, {
                span() {},
                point(CC, zC) {
                  CC > bC && (wC.push({
                    from: bC,
                    to: CC
                  }), nC += CC - bC), bC = zC
                }
              }, 20), bC < zC && (wC.push({
                from: bC,
                to: zC
              }), nC += zC - bC);
              return {
                total: nC,
                np: wC
              }
            }(zC.from, zC.to, this.stateDeco);
            if (bC.total < nC) return;
            let fC, qC, FC = this.scrollTarget ? this.scrollTarget.range.head : null;
            if (ZC) {
              let CC, ZC, QC = wC / this.heightOracle.lineLength * this.heightOracle.lineHeight;
              if (null != FC) {
                let wC = nw(bC, FC),
                  nC = ((this.visibleBottom - this.visibleTop) / 2 + QC) / zC.height;
                CC = wC - nC, ZC = wC + nC
              } else CC = (this.visibleTop - zC.top - QC) / zC.height, ZC = (this.visibleBottom - zC.top + QC) / zC.height;
              fC = bw(bC, CC), qC = bw(bC, ZC)
            } else {
              let ZC = bC.total * this.heightOracle.charWidth,
                QC = wC * this.heightOracle.charWidth,
                nC = 0;
              if (ZC > 2e6)
                for (let wC of CC) wC.from >= zC.from && wC.from < zC.to && wC.size != wC.displaySize && wC.from * this.heightOracle.charWidth + nC < this.pixelViewport.left && (nC = wC.size - wC.displaySize);
              let oC, WC, NC = this.pixelViewport.left + nC,
                MC = this.pixelViewport.right + nC;
              if (null != FC) {
                let CC = nw(bC, FC),
                  zC = ((MC - NC) / 2 + QC) / ZC;
                oC = CC - zC, WC = CC + zC
              } else oC = (NC - QC) / ZC, WC = (MC + QC) / ZC;
              fC = bw(bC, oC), qC = bw(bC, WC)
            }
            fC > zC.from && oC(zC.from, fC, zC, bC), qC < zC.to && oC(qC, zC.to, zC, bC)
          };
        for (let QC of this.viewportLines) Array.isArray(QC.type) ? QC.type.forEach(qC) : qC(QC);
        return fC
      }
      gapSize(CC, zC, ZC, QC) {
        let wC = nw(QC, ZC) - nw(QC, zC);
        return this.heightOracle.lineWrapping ? CC.height * wC : QC.total * this.heightOracle.charWidth * wC
      }
      updateLineGaps(CC) {
        zw.same(CC, this.lineGaps) || (this.lineGaps = CC, this.lineGapDeco = mC.set(CC.map((CC => CC.draw(this, this.heightOracle.lineWrapping)))))
      }
      computeVisibleRanges(CC) {
        let zC = this.stateDeco;
        this.lineGaps.length && (zC = zC.concat(this.lineGapDeco));
        let ZC = [];
        QC.u.spans(zC, this.viewport.from, this.viewport.to, {
          span(CC, zC) {
            ZC.push({
              from: CC,
              to: zC
            })
          },
          point() {}
        }, 20);
        let wC = 0;
        if (ZC.length != this.Y_.length) wC = 12;
        else
          for (let QC = 0; QC < ZC.length && !(8 & wC); QC++) {
            let zC = this.Y_[QC],
              bC = ZC[QC];
            zC.from == bC.from && zC.to == bC.to || (wC |= 4, CC && CC.mapPos(zC.from, -1) == bC.from && CC.mapPos(zC.to, 1) == bC.to || (wC |= 8))
          }
        return this.Y_ = ZC, wC
      }
      lineBlockAt(CC) {
        return CC >= this.viewport.from && CC <= this.viewport.to && this.viewportLines.find((zC => zC.from <= CC && zC.to >= CC)) || Fw(this.heightMap.lineAt(CC, sQ.ByPos, this.heightOracle, 0, 0), this.scaler)
      }
      lineBlockAtHeight(CC) {
        return CC >= this.viewportLines[0].top && CC <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((zC => zC.top <= CC && zC.bottom >= CC)) || Fw(this.heightMap.lineAt(this.scaler.fromDOM(CC), sQ.ByHeight, this.heightOracle, 0, 0), this.scaler)
      }
      getScrollOffset() {
        return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY
      }
      scrollAnchorAt(CC) {
        let zC = this.lineBlockAtHeight(CC + 8);
        return zC.from >= this.viewport.from || this.viewportLines[0].top - CC > 200 ? zC : this.viewportLines[0]
      }
      elementAtHeight(CC) {
        return Fw(this.heightMap.blockAt(this.scaler.fromDOM(CC), this.heightOracle, 0, 0), this.scaler)
      }
      get docHeight() {
        return this.scaler.toDOM(this.heightMap.height)
      }
      get contentHeight() {
        return this.docHeight + this.paddingTop + this.paddingBottom
      }
    }
    class ww {
      constructor(CC, zC) {
        this.from = CC, this.to = zC
      }
    }

    function bw(CC, zC) {
      let {
        total: ZC,
        np: QC
      } = CC;
      if (zC <= 0) return QC[0].from;
      if (zC >= 1) return QC[QC.length - 1].to;
      let wC = Math.floor(ZC * zC);
      for (let bC = 0;; bC++) {
        let {
          from: CC,
          to: zC
        } = QC[bC], ZC = zC - CC;
        if (wC <= ZC) return CC + wC;
        wC -= ZC
      }
    }

    function nw(CC, zC) {
      let ZC = 0;
      for (let {
          from: QC,
          to: wC
        }
        of CC.np) {
        if (zC <= wC) {
          ZC += zC - QC;
          break
        }
        ZC += wC - QC
      }
      return ZC / CC.total
    }
    const fw = {
      toDOM: CC => CC,
      fromDOM: CC => CC,
      scale: 1,
      eq(CC) {
        return CC == this
      }
    };

    function ow(CC) {
      let zC = CC.facet(CZ).filter((CC => "function" != typeof CC)),
        ZC = CC.facet(ZZ).filter((CC => "function" != typeof CC));
      return ZC.length && zC.push(QC.u.join(ZC)), zC
    }
    class qw {
      constructor(CC, zC, ZC) {
        let QC = 0,
          wC = 0,
          bC = 0;
        this.viewports = ZC.map((ZC => {
          let {
            from: wC,
            to: bC
          } = ZC, nC = zC.lineAt(wC, sQ.ByPos, CC, 0, 0).top, fC = zC.lineAt(bC, sQ.ByPos, CC, 0, 0).bottom;
          return QC += fC - nC, {
            from: wC,
            to: bC,
            top: nC,
            bottom: fC,
            domTop: 0,
            domBottom: 0
          }
        })), this.scale = (7e6 - QC) / (zC.height - QC);
        for (let nC of this.viewports) nC.domTop = bC + (nC.top - wC) * this.scale, bC = nC.domBottom = nC.domTop + (nC.bottom - nC.top), wC = nC.bottom
      }
      toDOM(CC) {
        for (let zC = 0, ZC = 0, QC = 0;; zC++) {
          let wC = zC < this.viewports.length ? this.viewports[zC] : null;
          if (!wC || CC < wC.top) return QC + (CC - ZC) * this.scale;
          if (CC <= wC.bottom) return wC.domTop + (CC - wC.top);
          ZC = wC.bottom, QC = wC.domBottom
        }
      }
      fromDOM(CC) {
        for (let zC = 0, ZC = 0, QC = 0;; zC++) {
          let wC = zC < this.viewports.length ? this.viewports[zC] : null;
          if (!wC || CC < wC.domTop) return ZC + (CC - QC) / this.scale;
          if (CC <= wC.domBottom) return wC.top + (CC - wC.domTop);
          ZC = wC.bottom, QC = wC.domBottom
        }
      }
      eq(CC) {
        return CC instanceof qw && (this.scale == CC.scale && this.viewports.length == CC.viewports.length && this.viewports.every(((zC, ZC) => zC.from == CC.viewports[ZC].from && zC.to == CC.viewports[ZC].to)))
      }
    }

    function Fw(CC, zC) {
      if (1 == zC.scale) return CC;
      let ZC = zC.toDOM(CC.top),
        QC = zC.toDOM(CC.bottom);
      return new rQ(CC.from, CC.length, ZC, QC - ZC, Array.isArray(CC._content) ? CC._content.map((CC => Fw(CC, zC))) : CC._content)
    }
    const Ww = QC.n.define({
        combine: CC => CC.join(" ")
      }),
      Nw = QC.n.define({
        combine: CC => CC.indexOf(!0) > -1
      }),
      Mw = wC.e.newName(),
      gw = wC.e.newName(),
      Sw = wC.e.newName(),
      pw = {
        "&light": "." + gw,
        "&dark": "." + Sw
      };

    function Pw(CC, zC, ZC) {
      return new wC.e(zC, {
        finish: zC => /&/.test(zC) ? zC.replace(/&\w*/, (zC => {
          if ("&" == zC) return CC;
          if (!ZC || !ZC[zC]) throw new RangeError(`Unsupported selector: ${zC}`);
          return ZC[zC]
        })) : CC + " " + zC
      })
    }
    const Gw = Pw("." + Mw, {
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
      }, pw),
      Rw = {
        childList: !0,
        characterData: !0,
        subtree: !0,
        attributes: !0,
        characterDataOldValue: !0
      },
      Aw = IC.ie && IC.ie_version <= 11;
    class xw {
      constructor(CC) {
        this.view = CC, this.active = !1, this.editContext = null, this.selectionRange = new VC, this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = CC.contentDOM, this.observer = new MutationObserver((zC => {
          for (let CC of zC) this.queue.push(CC);
          (IC.ie && IC.ie_version <= 11 || IC.ios && CC.composing) && zC.some((CC => "childList" == CC.type && CC.removedNodes.length || "characterData" == CC.type && CC.oldValue.length > CC.target.nodeValue.length)) ? this.flushSoon() : this.flush()
        })), !window.EditContext || !IC.android || !1 === CC.constructor.EDIT_CONTEXT || IC.chrome && IC.chrome_version < 126 || (this.editContext = new iw(CC), CC.state.facet(yz) && (CC.contentDOM.editContext = this.editContext.editContext)), Aw && (this.onCharData = CC => {
          this.queue.push({
            target: CC.target,
            type: "characterData",
            oldValue: CC.prevValue
          }), this.flushSoon()
        }), this.onSelectionChange = this.onSelectionChange.bind(this), this.mG = this.mG.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver((() => {
          var CC;
          (null === (CC = this.view.docView) || void 0 === CC ? void 0 : CC.lastUpdate) < Date.now() - 75 && this.mG()
        })), this.resizeScroll.observe(CC.scrollDOM)), this.addWindowListeners(this.win = CC.win), this.start(), "function" == typeof IntersectionObserver && (this.intersection = new IntersectionObserver((CC => {
          this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), CC.length > 0 && CC[CC.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")))
        }), {
          threshold: [0, .001]
        }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((CC => {
          CC.length > 0 && CC[CC.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"))
        }), {})), this.listenForScroll(), this.readSelectionRange()
      }
      onScrollChanged(CC) {
        this.view.inputState.runHandlers("scroll", CC), this.intersecting && this.view.measure()
      }
      onScroll(CC) {
        this.intersecting && this.flush(!1), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(CC)
      }
      mG() {
        this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout((() => {
          this.resizeTimeout = -1, this.view.requestMeasure()
        }), 50))
      }
      onPrint(CC) {
        ("change" != CC.type && CC.type || CC.matches) && (this.view.viewState.printing = !0, this.view.measure(), setTimeout((() => {
          this.view.viewState.printing = !1, this.view.requestMeasure()
        }), 500))
      }
      updateGaps(CC) {
        if (this.gapIntersection && (CC.length != this.gaps.length || this.gaps.some(((zC, ZC) => zC != CC[ZC])))) {
          this.gapIntersection.disconnect();
          for (let zC of CC) this.gapIntersection.observe(zC);
          this.gaps = CC
        }
      }
      onSelectionChange(CC) {
        let zC = this.selectionChanged;
        if (!this.readSelectionRange() || this.delayedAndroidKey) return;
        let {
          view: ZC
        } = this, QC = this.selectionRange;
        if (ZC.state.facet(yz) ? ZC.root.activeElement != this.dom : !TC(this.dom, QC)) return;
        let wC = QC.anchorNode && ZC.docView.tile.nearest(QC.anchorNode);
        wC && wC.isWidget() && wC.widget.ignoreEvent(CC) ? zC || (this.selectionChanged = !1) : (IC.ie && IC.ie_version <= 11 || IC.android && IC.chrome) && !ZC.state.selection.main.empty && QC.focusNode && tC(QC.focusNode, QC.focusOffset, QC.anchorNode, QC.anchorOffset) ? this.flushSoon() : this.flush(!1)
      }
      readSelectionRange() {
        let {
          view: CC
        } = this, zC = rC(CC.root);
        if (!zC) return !1;
        let ZC = IC.safari && 11 == CC.root.nodeType && CC.root.activeElement == this.dom && function(CC, zC) {
          if (zC.getComposedRanges) {
            let ZC = zC.getComposedRanges(CC.root)[0];
            if (ZC) return Iw(CC, ZC)
          }
          let ZC = null;

          function QC(CC) {
            CC.preventDefault(), CC.stopImmediatePropagation(), ZC = CC.getTargetRanges()[0]
          }
          return CC.contentDOM.addEventListener("beforeinput", QC, !0), CC.dom.ownerDocument.execCommand("indent"), CC.contentDOM.removeEventListener("beforeinput", QC, !0), ZC ? Iw(CC, ZC) : null
        }(this.view, zC) || zC;
        if (!ZC || this.selectionRange.eq(ZC)) return !1;
        let QC = TC(this.dom, ZC);
        return QC && !this.selectionChanged && CC.inputState.lastFocusTime > Date.now() - 200 && CC.inputState.lastTouchTime < Date.now() - 300 && function(CC, zC) {
          let ZC = zC.focusNode,
            QC = zC.focusOffset;
          if (!ZC || zC.anchorNode != ZC || zC.anchorOffset != QC) return !1;
          for (QC = Math.min(QC, LC(ZC));;)
            if (QC) {
              if (1 != ZC.nodeType) return !1;
              let CC = ZC.childNodes[QC - 1];
              "false" == CC.contentEditable ? QC-- : (ZC = CC, QC = LC(ZC))
            } else {
              if (ZC == CC) return !0;
              QC = DC(ZC), ZC = ZC.parentNode
            }
        }(this.dom, ZC) ? (this.view.inputState.lastFocusTime = 0, CC.docView.updateSelection(), !1) : (this.selectionRange.setRange(ZC), QC && (this.selectionChanged = !0), !0)
      }
      setSelectionRange(CC, zC) {
        this.selectionRange.set(CC.node, CC.offset, zC.node, zC.offset), this.selectionChanged = !1
      }
      clearSelectionRange() {
        this.selectionRange.set(null, 0, null, 0)
      }
      listenForScroll() {
        this.parentCheck = -1;
        let CC = 0,
          zC = null;
        for (let ZC = this.dom; ZC;)
          if (1 == ZC.nodeType) !zC && CC < this.scrollTargets.length && this.scrollTargets[CC] == ZC ? CC++ : zC || (zC = this.scrollTargets.slice(0, CC)), zC && zC.push(ZC), ZC = ZC.assignedSlot || ZC.parentNode;
          else {
            if (11 != ZC.nodeType) break;
            ZC = ZC.host
          } if (CC < this.scrollTargets.length && !zC && (zC = this.scrollTargets.slice(0, CC)), zC) {
          for (let CC of this.scrollTargets) CC.removeEventListener("scroll", this.onScroll);
          for (let CC of this.scrollTargets = zC) CC.addEventListener("scroll", this.onScroll)
        }
      }
      ignore(CC) {
        if (!this.active) return CC();
        try {
          return this.stop(), CC()
        } finally {
          this.start(), this.clear()
        }
      }
      start() {
        this.active || (this.observer.observe(this.dom, Rw), Aw && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0)
      }
      stop() {
        this.active && (this.active = !1, this.observer.disconnect(), Aw && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData))
      }
      clear() {
        this.processRecords(), this.queue.length = 0, this.selectionChanged = !1
      }
      delayAndroidKey(CC, zC) {
        var ZC;
        if (!this.delayedAndroidKey) {
          let CC = () => {
            let CC = this.delayedAndroidKey;
            if (CC) {
              this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = CC.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && CC.force && wz(this.dom, CC.key, CC.keyCode)
            }
          };
          this.flushingAndroidKey = this.view.win.requestAnimationFrame(CC)
        }
        this.delayedAndroidKey && "Enter" != CC || (this.delayedAndroidKey = {
          key: CC,
          keyCode: zC,
          force: this.lastChange < Date.now() - 50 || !!(null === (ZC = this.delayedAndroidKey) || void 0 === ZC ? void 0 : ZC.force)
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
        for (let CC of this.observer.takeRecords()) this.queue.push(CC);
        return this.queue
      }
      processRecords() {
        let CC = this.pendingRecords();
        CC.length && (this.queue = []);
        let zC = -1,
          ZC = -1,
          QC = !1;
        for (let wC of CC) {
          let CC = this.readMutation(wC);
          CC && (CC.typeOver && (QC = !0), -1 == zC ? ({
            from: zC,
            to: ZC
          } = CC) : (zC = Math.min(CC.from, zC), ZC = Math.max(CC.to, ZC)))
        }
        return {
          from: zC,
          to: ZC,
          typeOver: QC
        }
      }
      readChange() {
        let {
          from: CC,
          to: zC,
          typeOver: ZC
        } = this.processRecords(), QC = this.selectionChanged && TC(this.dom, this.selectionRange);
        if (CC < 0 && !QC) return null;
        CC > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
        let wC = new ZQ(this.view, CC, zC, ZC);
        return this.view.docView.domChanged = {
          newSel: wC.newSel ? wC.newSel.main : null
        }, wC
      }
      flush() {
        let CC = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
        CC && this.readSelectionRange();
        let zC = this.readChange();
        if (!zC) return this.view.requestMeasure(), !1;
        let ZC = this.view.state,
          QC = wQ(this.view, zC);
        return this.view.state == ZC && (zC.domChanged || zC.newSel && !fQ(this.view.state.selection, zC.newSel.main)) && this.view.update([]), QC
      }
      readMutation(CC) {
        let zC = this.view.docView.tile.nearest(CC.target);
        if (!zC || zC.isWidget()) return null;
        if (zC.markDirty("attributes" == CC.type), "childList" == CC.type) {
          let ZC = Jw(zC, CC.previousSibling || CC.target.previousSibling, -1),
            QC = Jw(zC, CC.nextSibling || CC.target.nextSibling, 1);
          return {
            from: ZC ? zC.posAfter(ZC) : zC.posAtStart,
            to: QC ? zC.posBefore(QC) : zC.posAtEnd,
            typeOver: !1
          }
        }
        return "characterData" == CC.type ? {
          from: zC.posAtStart,
          to: zC.posAtEnd,
          typeOver: CC.target.nodeValue == CC.oldValue
        } : null
      }
      setWindow(CC) {
        CC != this.win && (this.removeWindowListeners(this.win), this.win = CC, this.addWindowListeners(this.win))
      }
      addWindowListeners(CC) {
        CC.addEventListener("resize", this.mG), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : CC.addEventListener("beforeprint", this.onPrint), CC.addEventListener("scroll", this.onScroll), CC.document.addEventListener("selectionchange", this.onSelectionChange)
      }
      removeWindowListeners(CC) {
        CC.removeEventListener("scroll", this.onScroll), CC.removeEventListener("resize", this.mG), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : CC.removeEventListener("beforeprint", this.onPrint), CC.document.removeEventListener("selectionchange", this.onSelectionChange)
      }
      update(CC) {
        this.editContext && (this.editContext.update(CC), CC.startState.facet(yz) != CC.state.facet(yz) && (CC.view.contentDOM.editContext = CC.state.facet(yz) ? this.editContext.editContext : null))
      }
      destroy() {
        var CC, zC, ZC;
        this.stop(), null === (CC = this.intersection) || void 0 === CC || CC.disconnect(), null === (zC = this.gapIntersection) || void 0 === zC || zC.disconnect(), null === (ZC = this.resizeScroll) || void 0 === ZC || ZC.disconnect();
        for (let QC of this.scrollTargets) QC.removeEventListener("scroll", this.onScroll);
        this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy())
      }
    }

    function Jw(CC, zC, ZC) {
      for (; zC;) {
        let QC = NZ.get(zC);
        if (QC && QC.parent == CC) return QC;
        let wC = zC.parentNode;
        zC = wC != CC.dom ? wC : ZC > 0 ? zC.nextSibling : zC.previousSibling
      }
      return null
    }

    function Iw(CC, zC) {
      let ZC = zC.startContainer,
        QC = zC.startOffset,
        wC = zC.endContainer,
        bC = zC.endOffset,
        nC = CC.docView.domAtPos(CC.state.selection.main.anchor, 1);
      return tC(nC.node, nC.offset, wC, bC) && ([ZC, QC, wC, bC] = [wC, bC, ZC, QC]), {
        anchorNode: ZC,
        anchorOffset: QC,
        focusNode: wC,
        focusOffset: bC
      }
    }
    class iw {
      constructor(CC) {
        this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = Object.create(null), this.composing = null, this.resetRange(CC.state);
        let zC = this.editContext = new window.EditContext({
          text: CC.state.doc.sliceString(this.from, this.to),
          selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, CC.state.selection.main.anchor))),
          selectionEnd: this.toContextPos(CC.state.selection.main.head)
        });
        this.handlers.textupdate = ZC => {
          let wC = CC.state.selection.main,
            {
              anchor: bC,
              head: nC
            } = wC,
            fC = this.toEditorPos(ZC.updateRangeStart),
            oC = this.toEditorPos(ZC.updateRangeEnd);
          CC.inputState.composing >= 0 && !this.composing && (this.composing = {
            contextBase: ZC.updateRangeStart,
            editorBase: fC,
            drifted: !1
          });
          let qC = oC - fC > ZC.text.length;
          fC == this.from && bC < this.from ? fC = bC : oC == this.to && bC > this.to && (oC = bC);
          let FC = nQ(CC.state.sliceDoc(fC, oC), ZC.text, (qC ? wC.from : wC.to) - fC, qC ? "end" : null);
          if (!FC) {
            let zC = QC.i.single(this.toEditorPos(ZC.selectionStart), this.toEditorPos(ZC.selectionEnd));
            return void(fQ(zC, wC) || CC.dispatch({
              selection: zC,
              userEvent: "select"
            }))
          }
          let WC = {
            from: FC.from + fC,
            to: FC.toA + fC,
            insert: QC.B.of(ZC.text.slice(FC.from, FC.toB).split("\n"))
          };
          if ((IC.mac || IC.android) && WC.from == nC - 1 && /^\. ?$/.test(ZC.text) && "off" == CC.contentDOM.getAttribute("autocorrect") && (WC = {
              from: fC,
              to: oC,
              insert: QC.B.of([ZC.text.replace(".", " ")])
            }), this.pendingContextChange = WC, !CC.state.readOnly) {
            let zC = this.to - this.from + (WC.to - WC.from + WC.insert.length);
            bQ(CC, WC, QC.i.single(this.toEditorPos(ZC.selectionStart, zC), this.toEditorPos(ZC.selectionEnd, zC)))
          }
          this.pendingContextChange && (this.revertPending(CC.state), this.setSelection(CC.state)), WC.from < WC.to && !WC.insert.length && CC.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(zC.text.slice(Math.max(0, ZC.updateRangeStart - 1), Math.min(zC.text.length, ZC.updateRangeStart + 1))) && this.handlers.compositionend(ZC)
        }, this.handlers.characterboundsupdate = ZC => {
          let QC = [],
            wC = null;
          for (let zC = this.toEditorPos(ZC.rangeStart), bC = this.toEditorPos(ZC.rangeEnd); zC < bC; zC++) {
            let ZC = CC.coordsForChar(zC);
            wC = ZC && new DOMRect(ZC.left, ZC.top, ZC.right - ZC.left, ZC.bottom - ZC.top) || wC || new DOMRect, QC.push(wC)
          }
          zC.updateCharacterBounds(ZC.rangeStart, QC)
        }, this.handlers.textformatupdate = zC => {
          let ZC = [];
          for (let CC of zC.getTextFormats()) {
            let zC = CC.underlineStyle,
              QC = CC.underlineThickness;
            if (!/none/i.test(zC) && !/none/i.test(QC)) {
              let wC = this.toEditorPos(CC.rangeStart),
                bC = this.toEditorPos(CC.rangeEnd);
              if (wC < bC) {
                let CC = `text-decoration: underline ${/^[a-z]/.test(zC)?zC+" ":"Dashed"==zC?"dashed ":"Squiggle"==zC?"wavy ":""}${/thin/i.test(QC)?1:2}px`;
                ZC.push(mC.mark({
                  attributes: {
                    style: CC
                  }
                }).range(wC, bC))
              }
            }
          }
          CC.dispatch({
            effects: Dz.of(mC.set(ZC))
          })
        }, this.handlers.compositionstart = () => {
          CC.inputState.composing < 0 && (CC.inputState.composing = 0, CC.inputState.compositionFirstChange = !0)
        }, this.handlers.compositionend = () => {
          if (CC.inputState.composing = -1, CC.inputState.compositionFirstChange = null, this.composing) {
            let {
              drifted: zC
            } = this.composing;
            this.composing = null, zC && this.reset(CC.state)
          }
        };
        for (let ZC in this.handlers) zC.addEventListener(ZC, this.handlers[ZC]);
        this.measureReq = {
          read: CC => {
            this.editContext.updateControlBounds(CC.contentDOM.getBoundingClientRect());
            let zC = rC(CC.root);
            zC && zC.rangeCount && this.editContext.updateSelectionBounds(zC.getRangeAt(0).getBoundingClientRect())
          }
        }
      }
      applyEdits(CC) {
        let zC = 0,
          ZC = !1,
          QC = this.pendingContextChange;
        return CC.changes.iterChanges(((wC, bC, nC, fC, oC) => {
          if (ZC) return;
          let qC = oC.length - (bC - wC);
          if (QC && bC >= QC.to) {
            if (QC.from == wC && QC.to == bC && QC.insert.eq(oC)) return QC = this.pendingContextChange = null, zC += qC, void(this.to += qC);
            QC = null, this.revertPending(CC.state)
          }
          if (wC += zC, (bC += zC) <= this.from) this.from += qC, this.to += qC;
          else if (wC < this.to) {
            if (wC < this.from || bC > this.to || this.to - this.from + oC.length > 3e4) return void(ZC = !0);
            this.editContext.updateText(this.toContextPos(wC), this.toContextPos(bC), oC.toString()), this.to += qC
          }
          zC += qC
        })), QC && !ZC && this.revertPending(CC.state), !ZC
      }
      update(CC) {
        let zC = this.pendingContextChange,
          ZC = CC.startState.selection.main;
        this.composing && (this.composing.drifted || !CC.changes.touchesRange(ZC.from, ZC.to) && CC.transactions.some((CC => !CC.isUserEvent("input.type") && CC.changes.touchesRange(this.from, this.to)))) ? (this.composing.drifted = !0, this.composing.editorBase = CC.changes.mapPos(this.composing.editorBase)) : this.applyEdits(CC) && this.rangeIsValid(CC.state) ? (CC.docChanged || CC.selectionSet || zC) && this.setSelection(CC.state) : (this.pendingContextChange = null, this.reset(CC.state)), (CC.geometryChanged || CC.docChanged || CC.selectionSet) && CC.view.requestMeasure(this.measureReq)
      }
      resetRange(CC) {
        let {
          head: zC
        } = CC.selection.main;
        this.from = Math.max(0, zC - 1e4), this.to = Math.min(CC.doc.length, zC + 1e4)
      }
      reset(CC) {
        this.resetRange(CC), this.editContext.updateText(0, this.editContext.text.length, CC.doc.sliceString(this.from, this.to)), this.setSelection(CC)
      }
      revertPending(CC) {
        let zC = this.pendingContextChange;
        this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(zC.from), this.toContextPos(zC.from + zC.insert.length), CC.doc.sliceString(zC.from, zC.to))
      }
      setSelection(CC) {
        let {
          main: zC
        } = CC.selection, ZC = this.toContextPos(Math.max(this.from, Math.min(this.to, zC.anchor))), QC = this.toContextPos(zC.head);
        this.editContext.selectionStart == ZC && this.editContext.selectionEnd == QC || this.editContext.updateSelection(ZC, QC)
      }
      rangeIsValid(CC) {
        let {
          head: zC
        } = CC.selection.main;
        return !(this.from > 0 && zC - this.from < 500 || this.to < CC.doc.length && this.to - zC < 500 || this.to - this.from > 3e4)
      }
      toEditorPos(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.to - this.from;
        CC = Math.min(CC, zC);
        let ZC = this.composing;
        return ZC && ZC.drifted ? ZC.editorBase + (CC - ZC.contextBase) : CC + this.from
      }
      toContextPos(CC) {
        let zC = this.composing;
        return zC && zC.drifted ? zC.contextBase + (CC - zC.editorBase) : CC - this.from
      }
      destroy() {
        for (let CC in this.handlers) this.editContext.removeEventListener(CC, this.handlers[CC])
      }
    }
    class vw {
      get state() {
        return this.viewState.state
      }
      get viewport() {
        return this.viewState.viewport
      }
      get Y_() {
        return this.viewState.Y_
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
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var zC;
        this.plugins = [], this.pluginMap = new Map, this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), CC.parent && CC.parent.appendChild(this.dom);
        let {
          dispatch: ZC
        } = CC;
        this.dispatchTransactions = CC.dispatchTransactions || ZC && (CC => CC.forEach((CC => ZC(CC, this)))) || (CC => this.update(CC)), this.dispatch = this.dispatch.bind(this), this._root = CC.root || function(CC) {
          for (; CC;) {
            if (CC && (9 == CC.nodeType || 11 == CC.nodeType && CC.host)) return CC;
            CC = CC.assignedSlot || CC.parentNode
          }
          return null
        }(CC.parent) || document, this.viewState = new Qw(this, CC.state || QC.l.create(CC)), CC.scrollTo && CC.scrollTo.is(tz) && (this.viewState.scrollTarget = CC.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(Uz).map((CC => new Oz(CC)));
        for (let QC of this.plugins) QC.update(this);
        this.observer = new xw(this), this.inputState = new oQ(this), this.inputState.ensureHandlers(this.plugins), this.docView = new XZ(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), (null === (zC = document.fonts) || void 0 === zC ? void 0 : zC.ready) && document.fonts.ready.then((() => {
          this.viewState.mustMeasureContent = "refresh", this.requestMeasure()
        }))
      }
      dispatch() {
        for (var CC = arguments.length, zC = new Array(CC), ZC = 0; ZC < CC; ZC++) zC[ZC] = arguments[ZC];
        let wC = 1 == zC.length && zC[0] instanceof QC.F ? zC : 1 == zC.length && Array.isArray(zC[0]) ? zC[0] : [this.state.update(...zC)];
        this.dispatchTransactions(wC, this)
      }
      update(CC) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        let zC, ZC = !1,
          wC = !1,
          bC = this.state;
        for (let QC of CC) {
          if (QC.startState != bC) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
          bC = QC.state
        }
        if (this.destroyed) return void(this.viewState.state = bC);
        let nC = this.hasFocus,
          fC = 0,
          oC = null;
        CC.some((CC => CC.annotation(YQ))) ? (this.inputState.notifiedFocused = nC, fC = 1) : nC != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = nC, oC = dQ(bC, nC), oC || (fC = 1));
        let qC = this.observer.delayedAndroidKey,
          FC = null;
        if (qC ? (this.observer.clearDelayedAndroidKey(), FC = this.observer.readChange(), (FC && !this.state.doc.eq(bC.doc) || !this.state.selection.eq(bC.selection)) && (FC = null)) : this.observer.clear(), bC.facet(QC.l.phrases) != this.state.facet(QC.l.phrases)) return this.setState(bC);
        zC = FZ.create(this, bC, CC), zC.flags |= fC;
        let WC = this.viewState.scrollTarget;
        try {
          this.updateState = 2;
          for (let zC of CC) {
            if (WC && (WC = WC.map(zC.changes)), zC.scrollIntoView) {
              let {
                main: CC
              } = zC.state.selection, {
                x: ZC,
                y: wC
              } = this.state.facet(vw.cursorScrollMargin);
              WC = new az(CC.empty ? CC : QC.i.cursor(CC.head, CC.head > CC.anchor ? -1 : 1), "nearest", "nearest", wC, ZC)
            }
            for (let CC of zC.effects) CC.is(tz) && (WC = CC.value.clip(this.state))
          }
          this.viewState.update(zC, WC), this.bidiCache = Kw.update(this.bidiCache, zC.changes), zC.empty || (this.updatePlugins(zC), this.inputState.update(zC)), ZC = this.docView.update(zC), this.state.facet(oZ) != this.styleModules && this.mountStyles(), wC = this.updateAttrs(), this.showAnnouncements(CC), this.docView.updateSelection(ZC, CC.some((CC => CC.isUserEvent("select.pointer"))))
        } finally {
          this.updateState = 0
        }
        if (zC.startState.facet(Ww) != zC.state.facet(Ww) && (this.viewState.mustMeasureContent = !0), (ZC || wC || WC || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), ZC && this.docViewUpdate(), !zC.empty)
          for (let QC of this.state.facet(Ez)) try {
            QC(zC)
          } catch (NC) {
            jz(this.state, NC, "update listener")
          }(oC || FC) && Promise.resolve().then((() => {
            oC && this.state == oC.startState && this.dispatch(oC), FC && !wQ(this, FC) && qC.force && wz(this.contentDOM, qC.key, qC.keyCode)
          }))
      }
      setState(CC) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
        if (this.destroyed) return void(this.viewState.state = CC);
        this.updateState = 2;
        let zC = this.hasFocus;
        try {
          for (let CC of this.plugins) CC.destroy(this);
          this.viewState = new Qw(this, CC), this.plugins = CC.facet(Uz).map((CC => new Oz(CC))), this.pluginMap.clear();
          for (let CC of this.plugins) CC.update(this);
          this.docView.destroy(), this.docView = new XZ(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = []
        } finally {
          this.updateState = 0
        }
        zC && this.focus(), this.requestMeasure()
      }
      updatePlugins(CC) {
        let zC = CC.startState.facet(Uz),
          ZC = CC.state.facet(Uz);
        if (zC != ZC) {
          let QC = [];
          for (let wC of ZC) {
            let ZC = zC.indexOf(wC);
            if (ZC < 0) QC.push(new Oz(wC));
            else {
              let zC = this.plugins[ZC];
              zC.mustUpdate = CC, QC.push(zC)
            }
          }
          for (let zC of this.plugins) zC.mustUpdate != CC && zC.destroy(this);
          this.plugins = QC, this.pluginMap.clear()
        } else
          for (let QC of this.plugins) QC.mustUpdate = CC;
        for (let QC = 0; QC < this.plugins.length; QC++) this.plugins[QC].update(this);
        zC != ZC && this.inputState.ensureHandlers(this.plugins)
      }
      docViewUpdate() {
        for (let zC of this.plugins) {
          let ZC = zC.value;
          if (ZC && ZC.docViewUpdate) try {
            ZC.docViewUpdate(this)
          } catch (CC) {
            jz(this.state, CC, "doc view update listener")
          }
        }
      }
      measure() {
        let CC = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.destroyed) return;
        if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) return this.measureScheduled = -1, void this.requestMeasure();
        this.measureScheduled = 0, CC && this.observer.forceFlush();
        let zC = null,
          ZC = this.viewState.scrollParent,
          QC = this.viewState.getScrollOffset(),
          {
            scrollAnchorPos: wC,
            scrollAnchorHeight: bC
          } = this.viewState;
        Math.abs(QC - this.viewState.scrollOffset) > 1 && (bC = -1), this.viewState.scrollAnchorHeight = -1;
        try {
          for (let CC = 0;; CC++) {
            if (bC < 0)
              if (bz(ZC || this.win)) wC = -1, bC = this.viewState.heightMap.height;
              else {
                let CC = this.viewState.scrollAnchorAt(QC);
                wC = CC.from, bC = CC.top
              } this.updateState = 1;
            let fC = this.viewState.measure();
            if (!fC && !this.measureRequests.length && null == this.viewState.scrollTarget) break;
            if (CC > 5) {
              console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
              break
            }
            let oC = [];
            4 & fC || ([this.measureRequests, oC] = [oC, this.measureRequests]);
            let qC = oC.map((CC => {
                try {
                  return CC.read(this)
                } catch (zC) {
                  return jz(this.state, zC), hw
                }
              })),
              FC = FZ.create(this, this.state, []),
              WC = !1;
            FC.flags |= fC, zC ? zC.flags |= fC : zC = FC, this.updateState = 2, FC.empty || (this.updatePlugins(FC), this.inputState.update(FC), this.updateAttrs(), WC = this.docView.update(FC), WC && this.docViewUpdate());
            for (let CC = 0; CC < oC.length; CC++)
              if (qC[CC] != hw) try {
                let zC = oC[CC];
                zC.write && zC.write(qC[CC], this)
              } catch (nC) {
                jz(this.state, nC)
              }
            if (WC && this.docView.updateSelection(!0), !FC.viewportChanged && 0 == this.measureRequests.length) {
              if (this.viewState.editorHeight) {
                if (this.viewState.scrollTarget) {
                  this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, bC = -1;
                  continue
                } {
                  let CC = ((wC < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(wC).top) - bC) / this.scaleY;
                  if ((CC > 1 || CC < -1) && (ZC == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                    QC += CC, ZC ? ZC.scrollTop += CC : this.win.scrollBy(0, CC), bC = -1;
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
        if (zC && !zC.empty)
          for (let fC of this.state.facet(Ez)) fC(zC)
      }
      get themeClasses() {
        return Mw + " " + (this.state.facet(Nw) ? Sw : gw) + " " + this.state.facet(Ww)
      }
      updateAttrs() {
        let CC = Yw(this, kz, {
            class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
          }),
          zC = {
            spellcheck: "false",
            autocorrect: "off",
            autocapitalize: "off",
            writingsuggestions: "false",
            translate: "no",
            contenteditable: this.state.facet(yz) ? "true" : "false",
            class: "cm-content",
            style: `${IC.tabSize}: ${this.state.tabSize}`,
            role: "textbox",
            "aria-multiline": "true"
          };
        this.state.readOnly && (zC["aria-readonly"] = "true"), Yw(this, Vz, zC);
        let ZC = this.observer.ignore((() => {
          let ZC = hC(this.contentDOM, this.contentAttrs, zC),
            QC = hC(this.dom, this.editorAttrs, CC);
          return ZC || QC
        }));
        return this.editorAttrs = CC, this.contentAttrs = zC, ZC
      }
      showAnnouncements(CC) {
        let zC = !0;
        for (let ZC of CC)
          for (let CC of ZC.effects)
            if (CC.is(vw.announce)) {
              zC && (this.announceDOM.textContent = ""), zC = !1, this.announceDOM.appendChild(document.createElement("div")).textContent = CC.value
            }
      }
      mountStyles() {
        this.styleModules = this.state.facet(oZ);
        let CC = this.state.facet(vw.cspNonce);
        wC.e.mount(this.root, this.styleModules.concat(Gw).reverse(), CC ? {
          nonce: CC
        } : void 0)
      }
      readMeasured() {
        if (2 == this.updateState) throw new Error("Reading the editor layout isn't allowed during an update");
        0 == this.updateState && this.measureScheduled > -1 && this.measure(!1)
      }
      requestMeasure(CC) {
        if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame((() => this.measure()))), CC) {
          if (this.measureRequests.indexOf(CC) > -1) return;
          if (null != CC.key)
            for (let zC = 0; zC < this.measureRequests.length; zC++)
              if (this.measureRequests[zC].key === CC.key) return void(this.measureRequests[zC] = CC);
          this.measureRequests.push(CC)
        }
      }
      plugin(CC) {
        let zC = this.pluginMap.get(CC);
        return (void 0 === zC || zC && zC.plugin != CC) && this.pluginMap.set(CC, zC = this.plugins.find((zC => zC.plugin == CC)) || null), zC && zC.update(this).value
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
      elementAtHeight(CC) {
        return this.readMeasured(), this.viewState.elementAtHeight(CC)
      }
      lineBlockAtHeight(CC) {
        return this.readMeasured(), this.viewState.lineBlockAtHeight(CC)
      }
      get viewportLineBlocks() {
        return this.viewState.viewportLines
      }
      lineBlockAt(CC) {
        return this.viewState.lineBlockAt(CC)
      }
      get contentHeight() {
        return this.viewState.contentHeight
      }
      moveByChar(CC, zC, ZC) {
        return yZ(this, CC, tZ(this, CC, zC, ZC))
      }
      moveByGroup(CC, zC) {
        return yZ(this, CC, tZ(this, CC, zC, (zC => function(CC, zC, ZC) {
          let wC = CC.state.charCategorizer(zC),
            bC = wC(ZC);
          return CC => {
            let zC = wC(CC);
            return bC == QC.h.Space && (bC = zC), bC == zC
          }
        }(this, CC.head, zC))))
      }
      visualLineSide(CC, zC) {
        let ZC = this.bidiSpans(CC),
          wC = this.textDirectionAt(CC.from),
          bC = ZC[zC ? ZC.length - 1 : 0];
        return QC.i.cursor(bC.side(zC, wC) + CC.from, bC.forward(!zC, wC) ? 1 : -1)
      }
      moveToLineBoundary(CC, zC) {
        return function(CC, zC, ZC, wC) {
          let bC = aZ(CC, zC.head, zC.assoc || -1),
            nC = wC && bC.type == dC.Text && (CC.lineWrapping || bC.widgetLineBreaks) ? CC.coordsAtPos(zC.assoc < 0 && zC.head > bC.from ? zC.head - 1 : zC.head) : null;
          if (nC) {
            let zC = CC.dom.getBoundingClientRect(),
              wC = CC.textDirectionAt(bC.from),
              fC = CC.posAtCoords({
                x: ZC == (wC == qz.LTR) ? zC.right - 1 : zC.left + 1,
                y: (nC.top + nC.bottom) / 2
              });
            if (null != fC) return QC.i.cursor(fC, ZC ? -1 : 1)
          }
          return QC.i.cursor(ZC ? bC.to : bC.from, ZC ? -1 : 1)
        }(this, CC, zC, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2])
      }
      moveVertically(CC, zC, ZC) {
        return yZ(this, CC, function(CC, zC, ZC, wC) {
          let bC = zC.head,
            nC = ZC ? 1 : -1;
          if (bC == (ZC ? CC.state.doc.length : 0)) return QC.i.cursor(bC, zC.assoc);
          let fC, oC = zC.goalColumn,
            qC = CC.contentDOM.getBoundingClientRect(),
            FC = CC.coordsAtPos(bC, zC.assoc || ((zC.empty ? ZC : zC.head == zC.from) ? 1 : -1)),
            WC = CC.documentTop;
          if (FC) null == oC && (oC = FC.left - qC.left), fC = nC < 0 ? FC.top : FC.bottom;
          else {
            let zC = CC.viewState.lineBlockAt(bC);
            null == oC && (oC = Math.min(qC.right - qC.left, CC.defaultCharacterWidth * (bC - zC.from))), fC = (nC < 0 ? zC.top : zC.bottom) + WC
          }
          let NC = qC.left + oC,
            MC = CC.viewState.heightOracle.textHeight >> 1,
            gC = null !== wC && void 0 !== wC ? wC : MC;
          for (let SC = 0;; SC += MC) {
            let zC = fC + (gC + SC) * nC,
              wC = UZ(CC, {
                x: NC,
                y: zC
              }, !1, nC);
            if (ZC ? zC > qC.bottom : zC < qC.top) return QC.i.cursor(wC.pos, wC.assoc);
            let bC = CC.coordsAtPos(wC.pos, wC.assoc),
              FC = bC ? (bC.top + bC.bottom) / 2 : 0;
            if (!bC || (ZC ? FC > fC : FC < fC)) return QC.i.cursor(wC.pos, wC.assoc, void 0, oC)
          }
        }(this, CC, zC, ZC))
      }
      domAtPos(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return this.docView.domAtPos(CC, zC)
      }
      posAtDOM(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.docView.posFromDOM(CC, zC)
      }
      posAtCoords(CC) {
        let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this.readMeasured();
        let ZC = UZ(this, CC, zC);
        return ZC && ZC.pos
      }
      posAndSideAtCoords(CC) {
        let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return this.readMeasured(), UZ(this, CC, zC)
      }
      coordsAtPos(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.readMeasured();
        let ZC = this.docView.coordsAt(CC, zC);
        if (!ZC || ZC.left == ZC.right) return ZC;
        let QC = this.state.doc.lineAt(CC),
          wC = this.bidiSpans(QC);
        return UC(ZC, wC[Rz.find(wC, CC - QC.from, -1, zC)].dir == qz.LTR == zC > 0)
      }
      coordsForChar(CC) {
        return this.readMeasured(), this.docView.coordsForChar(CC)
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
      textDirectionAt(CC) {
        return !this.state.facet(rz) || CC < this.viewport.from || CC > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(CC))
      }
      get lineWrapping() {
        return this.viewState.heightOracle.lineWrapping
      }
      bidiSpans(CC) {
        if (CC.length > ew) return vz(CC.length);
        let zC, ZC = this.textDirectionAt(CC.from);
        for (let wC of this.bidiCache)
          if (wC.from == CC.from && wC.dir == ZC && (wC.fresh || Az(wC.isolates, zC = bZ(this, CC)))) return wC.order;
        zC || (zC = bZ(this, CC));
        let QC = iz(CC.text, ZC, zC);
        return this.bidiCache.push(new Kw(CC.from, CC.to, ZC, zC, !0, QC)), QC
      }
      get hasFocus() {
        var CC;
        return (this.dom.ownerDocument.hasFocus() || IC.safari && (null === (CC = this.inputState) || void 0 === CC ? void 0 : CC.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM
      }
      focus() {
        this.observer.ignore((() => {
          Zz(this.contentDOM), this.docView.updateSelection()
        }))
      }
      setRoot(CC) {
        this._root != CC && (this._root = CC, this.observer.setWindow((9 == CC.nodeType ? CC : CC.ownerDocument).defaultView || window), this.mountStyles())
      }
      destroy() {
        this.root.activeElement == this.contentDOM && this.contentDOM.blur();
        for (let CC of this.plugins) CC.destroy(this);
        this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0
      }
      static scrollIntoView(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var ZC, wC, bC, nC;
        return tz.of(new az("number" == typeof CC ? QC.i.cursor(CC) : CC, null !== (ZC = zC.y) && void 0 !== ZC ? ZC : "nearest", null !== (wC = zC.x) && void 0 !== wC ? wC : "nearest", null !== (bC = zC.yMargin) && void 0 !== bC ? bC : 5, null !== (nC = zC.xMargin) && void 0 !== nC ? nC : 5))
      }
      scrollSnapshot() {
        let {
          scrollTop: CC,
          scrollLeft: zC
        } = this.scrollDOM, ZC = this.viewState.scrollAnchorAt(CC);
        return tz.of(new az(QC.i.cursor(ZC.from), "start", "start", ZC.top - CC, zC, !0))
      }
      setTabFocusMode(CC) {
        null == CC ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof CC ? this.inputState.tabFocusMode = CC ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + CC)
      }
      static domEventHandlers(CC) {
        return Bz.define((() => ({})), {
          eventHandlers: CC
        })
      }
      static domEventObservers(CC) {
        return Bz.define((() => ({})), {
          eventObservers: CC
        })
      }
      static theme(CC, zC) {
        let ZC = wC.e.newName(),
          QC = [Ww.of(ZC), oZ.of(Pw(`.${ZC}`, CC))];
        return zC && zC.dark && QC.push(Nw.of(!0)), QC
      }
      static baseTheme(CC) {
        return QC.r.lowest(oZ.of(Pw("." + Mw, CC, pw)))
      }
      static findFromDOM(CC) {
        var zC;
        let ZC = CC.querySelector(".cm-content"),
          QC = ZC && NZ.get(ZC) || NZ.get(CC);
        return (null === (zC = null === QC || void 0 === QC ? void 0 : QC.root) || void 0 === zC ? void 0 : zC.view) || null
      }
    }
    vw.styleModule = oZ, vw.inputHandler = lz, vw.clipboardInputFilter = cz, vw.clipboardOutputFilter = uz, vw.scrollHandler = Tz, vw.focusChangeEffect = Xz, vw.perLineTextDirection = rz, vw.exceptionSink = Hz, vw.updateListener = Ez, vw.editable = yz, vw.mouseSelectionStyle = mz, vw.dragMovesSelection = dz, vw.clickAddsSelectionRange = Yz, vw.gC = CZ, vw.blockWrappers = zZ, vw.outerDecorations = ZZ, vw.atomicRanges = QZ, vw.bidiIsolatedRanges = wZ, vw.cursorScrollMargin = QC.n.define({
      combine: CC => {
        let zC = 5,
          ZC = 5;
        for (let QC of CC) "number" == typeof QC ? zC = ZC = QC : ({
          x: zC,
          y: ZC
        } = QC);
        return {
          x: zC,
          y: ZC
        }
      }
    }), vw.scrollMargins = nZ, vw.darkTheme = Nw, vw.cspNonce = QC.n.define({
      combine: CC => CC.length ? CC[0] : ""
    }), vw.contentAttributes = Vz, vw.editorAttributes = kz, vw.lineWrapping = vw.contentAttributes.of({
      class: "cm-lineWrapping"
    }), vw.announce = QC.w.define();
    const ew = 4096,
      hw = {};
    class Kw {
      constructor(CC, zC, ZC, QC, wC, bC) {
        this.from = CC, this.to = zC, this.dir = ZC, this.isolates = QC, this.fresh = wC, this.order = bC
      }
      static update(CC, zC) {
        if (zC.empty && !CC.some((CC => CC.fresh))) return CC;
        let ZC = [],
          QC = CC.length ? CC[CC.length - 1].dir : qz.LTR;
        for (let wC = Math.max(0, CC.length - 10); wC < CC.length; wC++) {
          let bC = CC[wC];
          bC.dir != QC || zC.touchesRange(bC.from, bC.to) || ZC.push(new Kw(zC.mapPos(bC.from, 1), zC.mapPos(bC.to, -1), bC.dir, bC.isolates, !1, bC.order))
        }
        return ZC
      }
    }

    function Yw(CC, zC, ZC) {
      for (let QC = CC.state.facet(zC), wC = QC.length - 1; wC >= 0; wC--) {
        let zC = QC[wC],
          bC = "function" == typeof zC ? zC(CC) : zC;
        bC && iC(bC, ZC)
      }
      return ZC
    }
    const dw = IC.mac ? "mac" : IC.windows ? "win" : IC.linux ? "linux" : "key";

    function mw(CC, zC, ZC) {
      return zC.altKey && (CC = "Alt-" + CC), zC.ctrlKey && (CC = "Ctrl-" + CC), zC.metaKey && (CC = "Meta-" + CC), !1 !== ZC && zC.shiftKey && (CC = "Shift-" + CC), CC
    }
    const Hw = QC.r.default(vw.domEventHandlers({
        keydown: (CC, zC) => aw(Xw(zC.state), CC, zC, "editor")
      })),
      Ew = QC.n.define({
        enables: Hw
      }),
      lw = new WeakMap;

    function Xw(CC) {
      let zC = CC.facet(Ew),
        ZC = lw.get(zC);
      return ZC || lw.set(zC, ZC = function(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dw,
          ZC = Object.create(null),
          QC = Object.create(null),
          wC = (CC, zC) => {
            let ZC = QC[CC];
            if (null == ZC) QC[CC] = zC;
            else if (ZC != zC) throw new Error("Key binding " + CC + " is used both as a regular binding and as a multi-stroke prefix")
          },
          bC = (CC, QC, bC, nC, fC) => {
            var oC, qC;
            let FC = ZC[CC] || (ZC[CC] = Object.create(null)),
              WC = QC.split(/ (?!$)/).map((CC => function(CC, zC) {
                const ZC = CC.split(/-(?!$)/);
                let QC, wC, bC, nC, fC = ZC[ZC.length - 1];
                "Space" == fC && (fC = " ");
                for (let oC = 0; oC < ZC.length - 1; ++oC) {
                  const CC = ZC[oC];
                  if (/^(cmd|meta|m)$/i.test(CC)) nC = !0;
                  else if (/^a(lt)?$/i.test(CC)) QC = !0;
                  else if (/^(c|ctrl|control)$/i.test(CC)) wC = !0;
                  else if (/^s(hift)?$/i.test(CC)) bC = !0;
                  else {
                    if (!/^mod$/i.test(CC)) throw new Error("Unrecognized modifier name: " + CC);
                    "mac" == zC ? nC = !0 : wC = !0
                  }
                }
                return QC && (fC = "Alt-" + fC), wC && (fC = "Ctrl-" + fC), nC && (fC = "Meta-" + fC), bC && (fC = "Shift-" + fC), fC
              }(CC, zC)));
            for (let zC = 1; zC < WC.length; zC++) {
              let ZC = WC.slice(0, zC).join(" ");
              wC(ZC, !0), FC[ZC] || (FC[ZC] = {
                preventDefault: !0,
                stopPropagation: !1,
                run: [zC => {
                  let QC = rw = {
                    view: zC,
                    prefix: ZC,
                    scope: CC
                  };
                  return setTimeout((() => {
                    rw == QC && (rw = null)
                  }), sw), !0
                }]
              })
            }
            let NC = WC.join(" ");
            wC(NC, !1);
            let MC = FC[NC] || (FC[NC] = {
              preventDefault: !1,
              stopPropagation: !1,
              run: (null === (qC = null === (oC = FC._any) || void 0 === oC ? void 0 : oC.run) || void 0 === qC ? void 0 : qC.slice()) || []
            });
            bC && MC.run.push(bC), nC && (MC.preventDefault = !0), fC && (MC.stopPropagation = !0)
          };
        for (let nC of CC) {
          let CC = nC.scope ? nC.scope.split(" ") : ["editor"];
          if (nC.any)
            for (let zC of CC) {
              let CC = ZC[zC] || (ZC[zC] = Object.create(null));
              CC._any || (CC._any = {
                preventDefault: !1,
                stopPropagation: !1,
                run: []
              });
              let {
                any: QC
              } = nC;
              for (let zC in CC) CC[zC].run.push((CC => QC(CC, Tw)))
            }
          let QC = nC[zC] || nC.key;
          if (QC)
            for (let zC of CC) bC(zC, QC, nC.run, nC.preventDefault, nC.stopPropagation), nC.shift && bC(zC, "Shift-" + QC, nC.shift, nC.preventDefault, nC.stopPropagation)
        }
        return ZC
      }(zC.reduce(((CC, zC) => CC.concat(zC)), []))), ZC
    }

    function uw(CC, zC, ZC) {
      return aw(Xw(CC.state), zC, CC, ZC)
    }
    let rw = null;
    const sw = 4e3;
    let Tw = null;

    function aw(CC, zC, ZC, wC) {
      Tw = zC;
      let qC = function(CC) {
          var zC = !(fC && CC.metaKey && CC.shiftKey && !CC.ctrlKey && !CC.altKey || oC && CC.shiftKey && CC.key && 1 == CC.key.length || "Unidentified" == CC.key) && CC.key || (CC.shiftKey ? nC : bC)[CC.keyCode] || CC.key || "Unidentified";
          return "Esc" == zC && (zC = "Escape"), "Del" == zC && (zC = "Delete"), "Left" == zC && (zC = "ArrowLeft"), "Up" == zC && (zC = "ArrowUp"), "Right" == zC && (zC = "ArrowRight"), "Down" == zC && (zC = "ArrowDown"), zC
        }(zC),
        FC = (0, QC.I)(qC, 0),
        WC = (0, QC.M)(FC) == qC.length && " " != qC,
        NC = "",
        MC = !1,
        gC = !1,
        SC = !1;
      rw && rw.view == ZC && rw.scope == wC && (NC = rw.prefix + " ", MQ.indexOf(zC.keyCode) < 0 && (gC = !0, rw = null));
      let pC, PC, GC = new Set,
        RC = CC => {
          if (CC) {
            for (let zC of CC.run)
              if (!GC.has(zC) && (GC.add(zC), zC(ZC))) return CC.stopPropagation && (SC = !0), !0;
            CC.preventDefault && (CC.stopPropagation && (SC = !0), gC = !0)
          }
          return !1
        },
        AC = CC[wC];
      return AC && (RC(AC[NC + mw(qC, zC, !WC)]) ? MC = !0 : !WC || !(zC.altKey || zC.metaKey || zC.ctrlKey) || IC.windows && zC.ctrlKey && zC.altKey || IC.mac && zC.altKey && !zC.ctrlKey && !zC.metaKey || !(pC = bC[zC.keyCode]) || pC == qC ? WC && zC.shiftKey && RC(AC[NC + mw(qC, zC, !0)]) && (MC = !0) : (RC(AC[NC + mw(pC, zC, !0)]) || zC.shiftKey && (PC = nC[zC.keyCode]) != qC && PC != pC && RC(AC[NC + mw(PC, zC, !1)])) && (MC = !0), !MC && RC(AC._any) && (MC = !0)), gC && (MC = !0), MC && SC && zC.stopPropagation(), Tw = null, MC
    }
    class tw {
      constructor(CC, zC, ZC, QC, wC) {
        this.className = CC, this.left = zC, this.top = ZC, this.width = QC, this.height = wC
      }
      draw() {
        let CC = document.createElement("div");
        return CC.className = this.className, this.adjust(CC), CC
      }
      update(CC, zC) {
        return zC.className == this.className && (this.adjust(CC), !0)
      }
      adjust(CC) {
        CC.style.left = this.left + "px", CC.style.top = this.top + "px", null != this.width && (CC.style.width = this.width + "px"), CC.style.height = this.height + "px"
      }
      eq(CC) {
        return this.left == CC.left && this.top == CC.top && this.width == CC.width && this.height == CC.height && this.className == CC.className
      }
      static forRange(CC, zC, ZC) {
        if (ZC.empty) {
          let QC = CC.coordsAtPos(ZC.head, ZC.assoc || 1);
          if (!QC) return [];
          let wC = Dw(CC);
          return [new tw(zC, QC.left - wC.left, QC.top - wC.top, null, QC.bottom - QC.top)]
        }
        return function(CC, zC, ZC) {
          if (ZC.to <= CC.viewport.from || ZC.from >= CC.viewport.to) return [];
          let QC = Math.max(ZC.from, CC.viewport.from),
            wC = Math.min(ZC.to, CC.viewport.to),
            bC = CC.textDirection == qz.LTR,
            nC = CC.contentDOM,
            fC = nC.getBoundingClientRect(),
            oC = Dw(CC),
            qC = nC.querySelector(".cm-line"),
            FC = qC && window.getComputedStyle(qC),
            WC = fC.left + (FC ? parseInt(FC.paddingLeft) + Math.min(0, parseInt(FC.textIndent)) : 0),
            NC = fC.right - (FC ? parseInt(FC.paddingRight) : 0),
            MC = aZ(CC, QC, 1),
            gC = aZ(CC, wC, -1),
            SC = MC.type == dC.Text ? MC : null,
            pC = gC.type == dC.Text ? gC : null;
          SC && (CC.lineWrapping || MC.widgetLineBreaks) && (SC = jw(CC, QC, 1, SC));
          pC && (CC.lineWrapping || gC.widgetLineBreaks) && (pC = jw(CC, wC, -1, pC));
          if (SC && pC && SC.from == pC.from && SC.to == pC.to) return GC(RC(ZC.from, ZC.to, SC));
          {
            let zC = SC ? RC(ZC.from, null, SC) : AC(MC, !1),
              QC = pC ? RC(null, ZC.to, pC) : AC(gC, !0),
              wC = [];
            return (SC || MC).to < (pC || gC).from - (SC && pC ? 1 : 0) || MC.widgetLineBreaks > 1 && zC.bottom + CC.defaultLineHeight / 2 < QC.top ? wC.push(PC(WC, zC.bottom, NC, QC.top)) : zC.bottom < QC.top && CC.elementAtHeight((zC.bottom + QC.top) / 2).type == dC.Text && (zC.bottom = QC.top = (zC.bottom + QC.top) / 2), GC(zC).concat(wC).concat(GC(QC))
          }

          function PC(CC, ZC, QC, wC) {
            return new tw(zC, CC - oC.left, ZC - oC.top, Math.max(0, QC - CC), wC - ZC)
          }

          function GC(CC) {
            let {
              top: zC,
              bottom: ZC,
              horizontal: QC
            } = CC, wC = [];
            for (let bC = 0; bC < QC.length; bC += 2) wC.push(PC(QC[bC], zC, QC[bC + 1], ZC));
            return wC
          }

          function RC(zC, ZC, QC) {
            let wC = 1e9,
              nC = -1e9,
              fC = [];

            function oC(zC, ZC, oC, qC, FC) {
              let MC = CC.coordsAtPos(zC, zC == QC.to ? -2 : 2),
                gC = CC.coordsAtPos(oC, oC == QC.from ? 2 : -2);
              MC && gC && (wC = Math.min(MC.top, gC.top, wC), nC = Math.max(MC.bottom, gC.bottom, nC), FC == qz.LTR ? fC.push(bC && ZC ? WC : MC.left, bC && qC ? NC : gC.right) : fC.push(!bC && qC ? WC : gC.left, !bC && ZC ? NC : MC.right))
            }
            let qC = null !== zC && void 0 !== zC ? zC : QC.from,
              FC = null !== ZC && void 0 !== ZC ? ZC : QC.to;
            for (let bC of CC.Y_)
              if (bC.to > qC && bC.from < FC)
                for (let QC = Math.max(bC.from, qC), wC = Math.min(bC.to, FC);;) {
                  let bC = CC.state.doc.lineAt(QC);
                  for (let nC of CC.bidiSpans(bC)) {
                    let CC = nC.from + bC.from,
                      fC = nC.to + bC.from;
                    if (CC >= wC) break;
                    fC > QC && oC(Math.max(CC, QC), null == zC && CC <= qC, Math.min(fC, wC), null == ZC && fC >= FC, nC.dir)
                  }
                  if (QC = bC.to + 1, QC >= wC) break
                }
            return 0 == fC.length && oC(qC, null == zC, FC, null == ZC, CC.textDirection), {
              top: wC,
              bottom: nC,
              horizontal: fC
            }
          }

          function AC(CC, zC) {
            let ZC = fC.top + (zC ? CC.top : CC.bottom);
            return {
              top: ZC,
              bottom: ZC,
              horizontal: []
            }
          }
        }(CC, zC, ZC)
      }
    }

    function Dw(CC) {
      let zC = CC.scrollDOM.getBoundingClientRect();
      return {
        left: (CC.textDirection == qz.LTR ? zC.left : zC.right - CC.scrollDOM.clientWidth * CC.scaleX) - CC.scrollDOM.scrollLeft * CC.scaleX,
        top: zC.top - CC.scrollDOM.scrollTop * CC.scaleY
      }
    }

    function jw(CC, zC, ZC, QC) {
      let wC = CC.coordsAtPos(zC, 2 * ZC);
      if (!wC) return QC;
      let bC = CC.dom.getBoundingClientRect(),
        nC = (wC.top + wC.bottom) / 2,
        fC = CC.posAtCoords({
          x: bC.left + 1,
          y: nC
        }),
        oC = CC.posAtCoords({
          x: bC.right - 1,
          y: nC
        });
      return null == fC || null == oC ? QC : {
        from: Math.max(QC.from, Math.min(fC, oC)),
        to: Math.min(QC.to, Math.max(fC, oC))
      }
    }
    class yw {
      constructor(CC, zC) {
        this.view = CC, this.layer = zC, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
          read: this.measure.bind(this),
          write: this.draw.bind(this)
        }, this.dom = CC.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), zC.above && this.dom.classList.add("cm-layer-above"), zC.class && this.dom.classList.add(zC.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(CC.state), CC.requestMeasure(this.measureReq), zC.mount && zC.mount(this.dom, CC)
      }
      update(CC) {
        CC.startState.facet(Lw) != CC.state.facet(Lw) && this.setOrder(CC.state), (this.layer.update(CC, this.dom) || CC.geometryChanged) && (this.scale(), CC.view.requestMeasure(this.measureReq))
      }
      docViewUpdate(CC) {
        !1 !== this.layer.updateOnDocViewUpdate && CC.requestMeasure(this.measureReq)
      }
      setOrder(CC) {
        let zC = 0,
          ZC = CC.facet(Lw);
        for (; zC < ZC.length && ZC[zC] != this.layer;) zC++;
        this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - zC)
      }
      measure() {
        return this.layer.markers(this.view)
      }
      scale() {
        let {
          scaleX: CC,
          scaleY: zC
        } = this.view;
        CC == this.scaleX && zC == this.scaleY || (this.scaleX = CC, this.scaleY = zC, this.dom.style.transform = `scale(${1/CC}, ${1/zC})`)
      }
      draw(CC) {
        if (CC.length != this.drawn.length || CC.some(((CC, zC) => {
            return ZC = CC, QC = this.drawn[zC], !(ZC.constructor == QC.constructor && ZC.eq(QC));
            var ZC, QC
          }))) {
          let zC = this.dom.firstChild,
            ZC = 0;
          for (let QC of CC) QC.update && zC && QC.constructor && this.drawn[ZC].constructor && QC.update(zC, this.drawn[ZC]) ? (zC = zC.nextSibling, ZC++) : this.dom.insertBefore(QC.draw(), zC);
          for (; zC;) {
            let CC = zC.nextSibling;
            zC.remove(), zC = CC
          }
          this.drawn = CC, IC.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none")
        }
      }
      destroy() {
        this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove()
      }
    }
    const Lw = QC.n.define();

    function Uw(CC) {
      return [Bz.define((zC => new yw(zC, CC))), Lw.of(CC)]
    }
    const Bw = QC.n.define({
      combine: CC => (0, QC.P)(CC, {
        cursorBlinkRate: 1200,
        drawRangeCursor: !0,
        iosSelectionHandles: !0
      }, {
        cursorBlinkRate: (CC, zC) => Math.min(CC, zC),
        drawRangeCursor: (CC, zC) => CC || zC
      })
    });

    function Ow() {
      let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Bw.of(CC), Vw, zb, Zb, sz.of(!0)]
    }

    function kw(CC) {
      return CC.startState.facet(Bw) != CC.state.facet(Bw)
    }
    const Vw = Uw({
      above: !0,
      markers(CC) {
        let {
          state: zC
        } = CC, ZC = zC.facet(Bw), wC = [];
        for (let bC of zC.selection.np) {
          let nC = bC == zC.selection.main;
          if (bC.empty || ZC.drawRangeCursor && !(nC && IC.ios && ZC.iosSelectionHandles)) {
            let zC = nC ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary",
              ZC = bC.empty ? bC : QC.i.cursor(bC.head, bC.assoc);
            for (let QC of tw.forRange(CC, zC, ZC)) wC.push(QC)
          }
        }
        return wC
      },
      update(CC, zC) {
        CC.transactions.some((CC => CC.selection)) && (zC.style.animationName = "cm-blink" == zC.style.animationName ? "cm-blink2" : "cm-blink");
        let ZC = kw(CC);
        return ZC && Cb(CC.state, zC), CC.docChanged || CC.selectionSet || ZC
      },
      mount(CC, zC) {
        Cb(zC.state, CC)
      },
      class: "cm-cursorLayer"
    });

    function Cb(CC, zC) {
      zC.style.animationDuration = CC.facet(Bw).cursorBlinkRate + "ms"
    }
    const zb = Uw({
        above: !1,
        markers(CC) {
          let zC = [],
            {
              main: ZC,
              np: wC
            } = CC.state.selection;
          for (let QC of wC)
            if (!QC.empty)
              for (let ZC of tw.forRange(CC, "cm-selectionBackground", QC)) zC.push(ZC);
          if (IC.ios && !ZC.empty && CC.state.facet(Bw).iosSelectionHandles) {
            for (let wC of tw.forRange(CC, "cm-selectionHandle cm-selectionHandle-start", QC.i.cursor(ZC.from, 1))) zC.push(wC);
            for (let wC of tw.forRange(CC, "cm-selectionHandle cm-selectionHandle-end", QC.i.cursor(ZC.to, 1))) zC.push(wC)
          }
          return zC
        },
        update: (CC, zC) => CC.docChanged || CC.selectionSet || CC.viewportChanged || kw(CC),
        class: "cm-selectionLayer"
      }),
      Zb = QC.r.highest(vw.theme({
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
      Qb = QC.w.define({
        map: (CC, zC) => null == CC ? null : zC.mapPos(CC)
      }),
      wb = QC.A.define({
        create: () => null,
        update: (CC, zC) => (null != CC && (CC = zC.changes.mapPos(CC)), zC.effects.reduce(((CC, zC) => zC.is(Qb) ? zC.value : CC), CC))
      }),
      bb = Bz.fromClass(class {
        constructor(CC) {
          this.view = CC, this.cursor = null, this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawCursor.bind(this)
          }
        }
        update(CC) {
          var zC;
          let ZC = CC.state.field(wb);
          null == ZC ? null != this.cursor && (null === (zC = this.cursor) || void 0 === zC || zC.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (CC.startState.field(wb) != ZC || CC.docChanged || CC.geometryChanged) && this.view.requestMeasure(this.measureReq))
        }
        readPos() {
          let {
            view: CC
          } = this, zC = CC.state.field(wb), ZC = null != zC && CC.coordsAtPos(zC);
          if (!ZC) return null;
          let QC = CC.scrollDOM.getBoundingClientRect();
          return {
            left: ZC.left - QC.left + CC.scrollDOM.scrollLeft * CC.scaleX,
            top: ZC.top - QC.top + CC.scrollDOM.scrollTop * CC.scaleY,
            height: ZC.bottom - ZC.top
          }
        }
        drawCursor(CC) {
          if (this.cursor) {
            let {
              scaleX: zC,
              scaleY: ZC
            } = this.view;
            CC ? (this.cursor.style.left = CC.left / zC + "px", this.cursor.style.top = CC.top / ZC + "px", this.cursor.style.height = CC.height / ZC + "px") : this.cursor.style.left = "-100000px"
          }
        }
        destroy() {
          this.cursor && this.cursor.remove()
        }
        setDropPos(CC) {
          this.view.state.field(wb) != CC && this.view.dispatch({
            effects: Qb.of(CC)
          })
        }
      }, {
        eventObservers: {
          dragover(CC) {
            this.setDropPos(this.view.posAtCoords({
              x: CC.clientX,
              y: CC.clientY
            }))
          },
          dragleave(CC) {
            CC.target != this.view.contentDOM && this.view.contentDOM.contains(CC.relatedTarget) || this.setDropPos(null)
          },
          dragend() {
            this.setDropPos(null)
          },
          drop() {
            this.setDropPos(null)
          }
        }
      });

    function nb() {
      return [wb, bb]
    }

    function fb(CC, zC, ZC, QC, wC) {
      zC.lastIndex = 0;
      for (let bC, nC = CC.iterRange(ZC, QC), fC = ZC; !nC.next().done; fC += nC.value.length)
        if (!nC.lineBreak)
          for (; bC = zC.exec(nC.value);) wC(fC + bC.index, bC)
    }
    class ob {
      constructor(CC) {
        const {
          regexp: zC,
          decoration: ZC,
          decorate: QC,
          boundary: wC,
          maxLength: bC = 1e3
        } = CC;
        if (!zC.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
        if (this.regexp = zC, QC) this.addMatch = (CC, zC, ZC, wC) => QC(wC, ZC, ZC + CC[0].length, CC, zC);
        else if ("function" == typeof ZC) this.addMatch = (CC, zC, QC, wC) => {
          let bC = ZC(CC, zC, QC);
          bC && wC(QC, QC + CC[0].length, bC)
        };
        else {
          if (!ZC) throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
          this.addMatch = (CC, zC, QC, wC) => wC(QC, QC + CC[0].length, ZC)
        }
        this.boundary = wC, this.maxLength = bC
      }
      createDeco(CC) {
        let zC = new QC.s,
          ZC = zC.add.bind(zC);
        for (let {
            from: QC,
            to: wC
          }
          of
          function(CC, zC) {
            let ZC = CC.Y_;
            if (1 == ZC.length && ZC[0].from == CC.viewport.from && ZC[0].to == CC.viewport.to) return ZC;
            let QC = [];
            for (let {
                from: wC,
                to: bC
              }
              of ZC) wC = Math.max(CC.state.doc.lineAt(wC).from, wC - zC), bC = Math.min(CC.state.doc.lineAt(bC).to, bC + zC), QC.length && QC[QC.length - 1].to >= wC ? QC[QC.length - 1].to = bC : QC.push({
              from: wC,
              to: bC
            });
            return QC
          }(CC, this.maxLength)) fb(CC.state.doc, this.regexp, QC, wC, ((zC, QC) => this.addMatch(QC, CC, zC, ZC)));
        return zC.finish()
      }
      updateDeco(CC, zC) {
        let ZC = 1e9,
          QC = -1;
        return CC.docChanged && CC.changes.iterChanges(((zC, wC, bC, nC) => {
          nC >= CC.view.viewport.from && bC <= CC.view.viewport.to && (ZC = Math.min(bC, ZC), QC = Math.max(nC, QC))
        })), CC.viewportMoved || QC - ZC > 1e3 ? this.createDeco(CC.view) : QC > -1 ? this.updateRange(CC.view, zC.map(CC.changes), ZC, QC) : zC
      }
      updateRange(CC, zC, ZC, QC) {
        for (let wC of CC.Y_) {
          let bC = Math.max(wC.from, ZC),
            nC = Math.min(wC.to, QC);
          if (nC >= bC) {
            let ZC = CC.state.doc.lineAt(bC),
              QC = ZC.to < nC ? CC.state.doc.lineAt(nC) : ZC,
              fC = Math.max(wC.from, ZC.from),
              oC = Math.min(wC.to, QC.to);
            if (this.boundary) {
              for (; bC > ZC.from; bC--)
                if (this.boundary.test(ZC.text[bC - 1 - ZC.from])) {
                  fC = bC;
                  break
                } for (; nC < QC.to; nC++)
                if (this.boundary.test(QC.text[nC - QC.from])) {
                  oC = nC;
                  break
                }
            }
            let qC, FC = [],
              WC = (CC, zC, ZC) => FC.push(ZC.range(CC, zC));
            if (ZC == QC)
              for (this.regexp.lastIndex = fC - ZC.from;
                (qC = this.regexp.exec(ZC.text)) && qC.index < oC - ZC.from;) this.addMatch(qC, CC, qC.index + ZC.from, WC);
            else fb(CC.state.doc, this.regexp, fC, oC, ((zC, ZC) => this.addMatch(ZC, CC, zC, WC)));
            zC = zC.update({
              filterFrom: fC,
              filterTo: oC,
              filter: (CC, zC) => CC < fC || zC > oC,
              add: FC
            })
          }
        }
        return zC
      }
    }
    const qb = null != /x/.unicode ? "gu" : "g",
      Fb = new RegExp("[\0-\b\n-\x1f\x7f-\x9f\xad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]", qb),
      Wb = {
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
    let Nb = null;
    const Mb = QC.n.define({
      combine(CC) {
        let zC = (0, QC.P)(CC, {
          render: null,
          specialChars: Fb,
          addSpecialChars: null
        });
        return (zC.replaceTabs = ! function() {
          var CC;
          if (null == Nb && "undefined" != typeof document && document.body) {
            let zC = document.body.style;
            Nb = null != (null !== (CC = zC.tabSize) && void 0 !== CC ? CC : zC.MozTabSize)
          }
          return Nb || !1
        }()) && (zC.specialChars = new RegExp("\t|" + zC.specialChars.source, qb)), zC.addSpecialChars && (zC.specialChars = new RegExp(zC.specialChars.source + "|" + zC.addSpecialChars.source, qb)), zC
      }
    });

    function gb() {
      let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Mb.of(CC), Sb || (Sb = Bz.fromClass(class {
        constructor(CC) {
          this.view = CC, this.gC = mC.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(CC.state.facet(Mb)), this.gC = this.decorator.createDeco(CC)
        }
        makeDecorator(CC) {
          return new ob({
            regexp: CC.specialChars,
            decoration: (zC, ZC, wC) => {
              let {
                doc: bC
              } = ZC.state, nC = (0, QC.I)(zC[0], 0);
              if (9 == nC) {
                let CC = bC.lineAt(wC),
                  zC = ZC.state.tabSize,
                  nC = (0, QC.S)(CC.text, zC, wC - CC.from);
                return mC.replace({
                  widget: new Pb((zC - nC % zC) * this.view.defaultCharacterWidth / this.view.scaleX)
                })
              }
              return this.decorationCache[nC] || (this.decorationCache[nC] = mC.replace({
                widget: new pb(CC, nC)
              }))
            },
            boundary: CC.replaceTabs ? void 0 : /[^]/
          })
        }
        update(CC) {
          let zC = CC.state.facet(Mb);
          CC.startState.facet(Mb) != zC ? (this.decorator = this.makeDecorator(zC), this.gC = this.decorator.createDeco(CC.view)) : this.gC = this.decorator.updateDeco(CC, this.gC)
        }
      }, {
        gC: CC => CC.gC
      }))]
    }
    let Sb = null;
    class pb extends YC {
      constructor(CC, zC) {
        super(), this.options = CC, this.code = zC
      }
      eq(CC) {
        return CC.code == this.code
      }
      toDOM(CC) {
        let zC = function(CC) {
            return CC >= 32 ? "\u2022" : 10 == CC ? "\u2424" : String.fromCharCode(9216 + CC)
          }(this.code),
          ZC = CC.state.phrase("Control character") + " " + (Wb[this.code] || "0x" + this.code.toString(16)),
          QC = this.options.render && this.options.render(this.code, ZC, zC);
        if (QC) return QC;
        let wC = document.createElement("span");
        return wC.textContent = zC, wC.title = ZC, wC.setAttribute("aria-label", ZC), wC.className = "cm-specialChar", wC
      }
      ignoreEvent() {
        return !1
      }
    }
    class Pb extends YC {
      constructor(CC) {
        super(), this.width = CC
      }
      eq(CC) {
        return CC.width == this.width
      }
      toDOM() {
        let CC = document.createElement("span");
        return CC.textContent = "\t", CC.className = "cm-tab", CC.style.width = this.width + "px", CC
      }
      ignoreEvent() {
        return !1
      }
    }

    function Gb() {
      return Ab
    }
    const Rb = mC.line({
        class: "cm-activeLine"
      }),
      Ab = Bz.fromClass(class {
        constructor(CC) {
          this.gC = this.getDeco(CC)
        }
        update(CC) {
          (CC.docChanged || CC.selectionSet) && (this.gC = this.getDeco(CC.view))
        }
        getDeco(CC) {
          let zC = -1,
            ZC = [];
          for (let QC of CC.state.selection.np) {
            let wC = CC.lineBlockAt(QC.head);
            wC.from > zC && (ZC.push(Rb.range(wC.from)), zC = wC.from)
          }
          return mC.set(ZC)
        }
      }, {
        gC: CC => CC.gC
      });
    class xb extends YC {
      constructor(CC) {
        super(), this.content = CC
      }
      toDOM(CC) {
        let zC = document.createElement("span");
        return zC.className = "cm-placeholder", zC.style.pointerEvents = "none", zC.appendChild("string" == typeof this.content ? document.createTextNode(this.content) : "function" == typeof this.content ? this.content(CC) : this.content.cloneNode(!0)), zC.setAttribute("aria-hidden", "true"), zC
      }
      coordsAt(CC) {
        let zC = CC.firstChild ? aC(CC.firstChild) : [];
        if (!zC.length) return null;
        let ZC = window.getComputedStyle(CC.parentNode),
          QC = UC(zC[0], "rtl" != ZC.direction),
          wC = parseInt(ZC.lineHeight);
        return QC.bottom - QC.top > 1.5 * wC ? {
          left: QC.left,
          right: QC.right,
          top: QC.top,
          bottom: QC.top + wC
        } : QC
      }
      ignoreEvent() {
        return !1
      }
    }

    function Jb(CC) {
      let zC = Bz.fromClass(class {
        constructor(zC) {
          this.view = zC, this.placeholder = CC ? mC.set([mC.widget({
            widget: new xb(CC),
            side: 1
          }).range(0)]) : mC.none
        }
        get gC() {
          return this.view.state.doc.length ? mC.none : this.placeholder
        }
      }, {
        gC: CC => CC.gC
      });
      return "string" == typeof CC ? [zC, vw.contentAttributes.of({
        "aria-placeholder": CC
      })] : zC
    }
    const Ib = 2e3;

    function ib(CC, zC) {
      let ZC = CC.posAtCoords({
          x: zC.clientX,
          y: zC.clientY
        }, !1),
        wC = CC.state.doc.lineAt(ZC),
        bC = ZC - wC.from,
        nC = bC > Ib ? -1 : bC == wC.length ? function(CC, zC) {
          let ZC = CC.coordsAtPos(CC.viewport.from);
          return ZC ? Math.round(Math.abs((ZC.left - zC) / CC.defaultCharacterWidth)) : -1
        }(CC, zC.clientX) : (0, QC.S)(wC.text, CC.state.tabSize, ZC - wC.from);
      return {
        line: wC.number,
        col: nC,
        off: bC
      }
    }

    function vb(CC, zC) {
      let ZC = ib(CC, zC),
        wC = CC.state.selection;
      return ZC ? {
        update(CC) {
          if (CC.docChanged) {
            let zC = CC.changes.mapPos(CC.startState.doc.line(ZC.line).from),
              QC = CC.state.doc.lineAt(zC);
            ZC = {
              line: QC.number,
              col: ZC.col,
              off: Math.min(ZC.off, QC.length)
            }, wC = wC.map(CC.changes)
          }
        },
        get(zC, bC, nC) {
          let fC = ib(CC, zC);
          if (!fC) return wC;
          let oC = function(CC, zC, ZC) {
            let wC = Math.min(zC.line, ZC.line),
              bC = Math.max(zC.line, ZC.line),
              nC = [];
            if (zC.off > Ib || ZC.off > Ib || zC.col < 0 || ZC.col < 0) {
              let fC = Math.min(zC.off, ZC.off),
                oC = Math.max(zC.off, ZC.off);
              for (let zC = wC; zC <= bC; zC++) {
                let ZC = CC.doc.line(zC);
                ZC.length <= oC && nC.push(QC.i.range(ZC.from + fC, ZC.to + oC))
              }
            } else {
              let fC = Math.min(zC.col, ZC.col),
                oC = Math.max(zC.col, ZC.col);
              for (let zC = wC; zC <= bC; zC++) {
                let ZC = CC.doc.line(zC),
                  wC = (0, QC.Y)(ZC.text, fC, CC.tabSize, !0);
                if (wC < 0) nC.push(QC.i.cursor(ZC.to));
                else {
                  let zC = (0, QC.Y)(ZC.text, oC, CC.tabSize);
                  nC.push(QC.i.range(ZC.from + wC, ZC.from + zC))
                }
              }
            }
            return nC
          }(CC.state, ZC, fC);
          return oC.length ? nC ? QC.i.create(oC.concat(wC.np)) : QC.i.create(oC) : wC
        }
      } : null
    }

    function eb(CC) {
      let zC = (null === CC || void 0 === CC ? void 0 : CC.eventFilter) || (CC => CC.altKey && 0 == CC.button);
      return vw.mouseSelectionStyle.of(((CC, ZC) => zC(ZC) ? vb(CC, ZC) : null))
    }
    const hb = {
        Alt: [18, CC => !!CC.altKey],
        Control: [17, CC => !!CC.ctrlKey],
        Shift: [16, CC => !!CC.shiftKey],
        Meta: [91, CC => !!CC.metaKey]
      },
      Kb = {
        style: "cursor: crosshair"
      };

    function Yb() {
      let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [zC, ZC] = hb[CC.key || "Alt"],
        QC = Bz.fromClass(class {
          constructor(CC) {
            this.view = CC, this.isDown = !1
          }
          set(CC) {
            this.isDown != CC && (this.isDown = CC, this.view.update([]))
          }
        }, {
          eventObservers: {
            keydown(CC) {
              this.set(CC.keyCode == zC || ZC(CC))
            },
            keyup(CC) {
              CC.keyCode != zC && ZC(CC) || this.set(!1)
            },
            mousemove(CC) {
              this.set(ZC(CC))
            }
          }
        });
      return [QC, vw.contentAttributes.of((CC => {
        var zC;
        return (null === (zC = CC.plugin(QC)) || void 0 === zC ? void 0 : zC.isDown) ? Kb : null
      }))]
    }
    const db = "-10000px";
    class mb {
      constructor(CC, zC, ZC, QC) {
        this.facet = zC, this.createTooltipView = ZC, this.removeTooltipView = QC, this.input = CC.state.facet(zC), this.tooltips = this.input.filter((CC => CC));
        let wC = null;
        this.tooltipViews = this.tooltips.map((CC => wC = ZC(CC, wC)))
      }
      update(CC, zC) {
        var ZC;
        let QC = CC.state.facet(this.facet),
          wC = QC.filter((CC => CC));
        if (QC === this.input) {
          for (let zC of this.tooltipViews) zC.update && zC.update(CC);
          return !1
        }
        let bC = [],
          nC = zC ? [] : null;
        for (let fC = 0; fC < wC.length; fC++) {
          let ZC = wC[fC],
            QC = -1;
          if (ZC) {
            for (let CC = 0; CC < this.tooltips.length; CC++) {
              let zC = this.tooltips[CC];
              zC && zC.create == ZC.create && (QC = CC)
            }
            if (QC < 0) bC[fC] = this.createTooltipView(ZC, fC ? bC[fC - 1] : null), nC && (nC[fC] = !!ZC.above);
            else {
              let ZC = bC[fC] = this.tooltipViews[QC];
              nC && (nC[fC] = zC[QC]), ZC.update && ZC.update(CC)
            }
          }
        }
        for (let fC of this.tooltipViews) bC.indexOf(fC) < 0 && (this.removeTooltipView(fC), null === (ZC = fC.destroy) || void 0 === ZC || ZC.call(fC));
        return zC && (nC.forEach(((CC, ZC) => zC[ZC] = CC)), zC.length = nC.length), this.input = QC, this.tooltips = wC, this.tooltipViews = bC, !0
      }
    }

    function Hb(CC) {
      let zC = CC.dom.ownerDocument.documentElement;
      return {
        top: 0,
        left: 0,
        bottom: zC.clientHeight,
        right: zC.clientWidth
      }
    }
    const Eb = QC.n.define({
        combine: CC => {
          var zC, ZC, QC;
          return {
            position: IC.ios ? "absolute" : (null === (zC = CC.find((CC => CC.position))) || void 0 === zC ? void 0 : zC.position) || "fixed",
            parent: (null === (ZC = CC.find((CC => CC.parent))) || void 0 === ZC ? void 0 : ZC.parent) || null,
            tooltipSpace: (null === (QC = CC.find((CC => CC.tooltipSpace))) || void 0 === QC ? void 0 : QC.tooltipSpace) || Hb
          }
        }
      }),
      lb = new WeakMap,
      Xb = Bz.fromClass(class {
        constructor(CC) {
          this.view = CC, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
          let zC = CC.state.facet(Eb);
          this.position = zC.position, this.parent = zC.parent, this.classes = CC.themeClasses, this.createContainer(), this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this
          }, this.resizeObserver = "function" == typeof ResizeObserver ? new ResizeObserver((() => this.measureSoon())) : null, this.manager = new mb(CC, sb, ((CC, zC) => this.createTooltip(CC, zC)), (CC => {
            this.resizeObserver && this.resizeObserver.unobserve(CC.dom), CC.dom.remove()
          })), this.above = this.manager.tooltips.map((CC => !!CC.above)), this.intersectionObserver = "function" == typeof IntersectionObserver ? new IntersectionObserver((CC => {
            Date.now() > this.lastTransaction - 50 && CC.length > 0 && CC[CC.length - 1].intersectionRatio < 1 && this.measureSoon()
          }), {
            threshold: [1]
          }) : null, this.observeIntersection(), CC.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure()
        }
        createContainer() {
          this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom
        }
        observeIntersection() {
          if (this.intersectionObserver) {
            this.intersectionObserver.disconnect();
            for (let CC of this.manager.tooltipViews) this.intersectionObserver.observe(CC.dom)
          }
        }
        measureSoon() {
          this.measureTimeout < 0 && (this.measureTimeout = setTimeout((() => {
            this.measureTimeout = -1, this.maybeMeasure()
          }), 50))
        }
        update(CC) {
          CC.transactions.length && (this.lastTransaction = Date.now());
          let zC = this.manager.update(CC, this.above);
          zC && this.observeIntersection();
          let ZC = zC || CC.geometryChanged,
            QC = CC.state.facet(Eb);
          if (QC.position != this.position && !this.madeAbsolute) {
            this.position = QC.position;
            for (let CC of this.manager.tooltipViews) CC.dom.style.position = this.position;
            ZC = !0
          }
          if (QC.parent != this.parent) {
            this.parent && this.container.remove(), this.parent = QC.parent, this.createContainer();
            for (let CC of this.manager.tooltipViews) this.container.appendChild(CC.dom);
            ZC = !0
          } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
          ZC && this.maybeMeasure()
        }
        createTooltip(CC, zC) {
          let ZC = CC.create(this.view),
            QC = zC ? zC.dom : null;
          if (ZC.dom.classList.add("cm-tooltip"), CC.arrow && !ZC.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
            let CC = document.createElement("div");
            CC.className = "cm-tooltip-arrow", ZC.dom.appendChild(CC)
          }
          return ZC.dom.style.position = this.position, ZC.dom.style.top = db, ZC.dom.style.left = "0px", this.container.insertBefore(ZC.dom, QC), ZC.mount && ZC.mount(this.view), this.resizeObserver && this.resizeObserver.observe(ZC.dom), ZC
        }
        destroy() {
          var CC, zC, ZC;
          this.view.win.removeEventListener("resize", this.measureSoon);
          for (let QC of this.manager.tooltipViews) QC.dom.remove(), null === (CC = QC.destroy) || void 0 === CC || CC.call(QC);
          this.parent && this.container.remove(), null === (zC = this.resizeObserver) || void 0 === zC || zC.disconnect(), null === (ZC = this.intersectionObserver) || void 0 === ZC || ZC.disconnect(), clearTimeout(this.measureTimeout)
        }
        readMeasure() {
          let CC = 1,
            zC = 1,
            ZC = !1;
          if ("fixed" == this.position && this.manager.tooltipViews.length) {
            let {
              dom: CC
            } = this.manager.tooltipViews[0];
            if (IC.safari) {
              let zC = CC.getBoundingClientRect();
              ZC = Math.abs(zC.top + 1e4) > 1 || Math.abs(zC.left) > 1
            } else ZC = !!CC.offsetParent && CC.offsetParent != this.container.ownerDocument.body
          }
          if (ZC || "absolute" == this.position)
            if (this.parent) {
              let ZC = this.parent.getBoundingClientRect();
              ZC.width && ZC.height && (CC = ZC.width / this.parent.offsetWidth, zC = ZC.height / this.parent.offsetHeight)
            } else({
              scaleX: CC,
              scaleY: zC
            } = this.view.viewState);
          let QC = this.view.scrollDOM.getBoundingClientRect(),
            wC = fZ(this.view);
          return {
            visible: {
              left: QC.left + wC.left,
              top: QC.top + wC.top,
              right: QC.right - wC.right,
              bottom: QC.bottom - wC.bottom
            },
            parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
            pos: this.manager.tooltips.map(((CC, zC) => {
              let ZC = this.manager.tooltipViews[zC];
              return ZC.getCoords ? ZC.getCoords(CC.pos) : this.view.coordsAtPos(CC.pos)
            })),
            size: this.manager.tooltipViews.map((CC => {
              let {
                dom: zC
              } = CC;
              return zC.getBoundingClientRect()
            })),
            space: this.view.state.facet(Eb).tooltipSpace(this.view),
            scaleX: CC,
            scaleY: zC,
            makeAbsolute: ZC
          }
        }
        writeMeasure(CC) {
          var zC;
          if (CC.makeAbsolute) {
            this.madeAbsolute = !0, this.position = "absolute";
            for (let CC of this.manager.tooltipViews) CC.dom.style.position = "absolute"
          }
          let {
            visible: ZC,
            space: QC,
            scaleX: wC,
            scaleY: bC
          } = CC, nC = [];
          for (let fC = 0; fC < this.manager.tooltips.length; fC++) {
            let oC = this.manager.tooltips[fC],
              qC = this.manager.tooltipViews[fC],
              {
                dom: FC
              } = qC,
              WC = CC.pos[fC],
              NC = CC.size[fC];
            if (!WC || !1 !== oC.clip && (WC.bottom <= Math.max(ZC.top, QC.top) || WC.top >= Math.min(ZC.bottom, QC.bottom) || WC.right < Math.max(ZC.left, QC.left) - .1 || WC.left > Math.min(ZC.right, QC.right) + .1)) {
              FC.style.top = db;
              continue
            }
            let MC = oC.arrow ? qC.dom.querySelector(".cm-tooltip-arrow") : null,
              gC = MC ? 7 : 0,
              SC = NC.right - NC.left,
              pC = null !== (zC = lb.get(qC)) && void 0 !== zC ? zC : NC.bottom - NC.top,
              PC = qC.offset || rb,
              GC = this.view.textDirection == qz.LTR,
              RC = NC.width > QC.right - QC.left ? GC ? QC.left : QC.right - NC.width : GC ? Math.max(QC.left, Math.min(WC.left - (MC ? 14 : 0) + PC.x, QC.right - SC)) : Math.min(Math.max(QC.left, WC.left - SC + (MC ? 14 : 0) - PC.x), QC.right - SC),
              AC = this.above[fC];
            !oC.strictSide && (AC ? WC.top - pC - gC - PC.y < QC.top : WC.bottom + pC + gC + PC.y > QC.bottom) && AC == QC.bottom - WC.bottom > WC.top - QC.top && (AC = this.above[fC] = !AC);
            let xC = (AC ? WC.top - QC.top : QC.bottom - WC.bottom) - gC;
            if (xC < pC && !1 !== qC.resize) {
              if (xC < this.view.defaultLineHeight) {
                FC.style.top = db;
                continue
              }
              lb.set(qC, pC), FC.style.height = (pC = xC) / bC + "px"
            } else FC.style.height && (FC.style.height = "");
            let JC = AC ? WC.top - pC - gC - PC.y : WC.bottom + gC + PC.y,
              IC = RC + SC;
            if (!0 !== qC.overlap)
              for (let CC of nC) CC.left < IC && CC.right > RC && CC.top < JC + pC && CC.bottom > JC && (JC = AC ? CC.top - pC - 2 - gC : CC.bottom + gC + 2);
            if ("absolute" == this.position ? (FC.style.top = (JC - CC.parent.top) / bC + "px", cb(FC, (RC - CC.parent.left) / wC)) : (FC.style.top = JC / bC + "px", cb(FC, RC / wC)), MC) {
              let CC = WC.left + (GC ? PC.x : -PC.x) - (RC + 14 - 7);
              MC.style.left = CC / wC + "px"
            }!0 !== qC.overlap && nC.push({
              left: RC,
              top: JC,
              right: IC,
              bottom: JC + pC
            }), FC.classList.toggle("cm-tooltip-above", AC), FC.classList.toggle("cm-tooltip-below", !AC), qC.positioned && qC.positioned(CC.space)
          }
        }
        maybeMeasure() {
          if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
            for (let CC of this.manager.tooltipViews) CC.dom.style.top = db
        }
      }, {
        eventObservers: {
          scroll() {
            this.maybeMeasure()
          }
        }
      });

    function cb(CC, zC) {
      let ZC = parseInt(CC.style.left, 10);
      (isNaN(ZC) || Math.abs(zC - ZC) > 1) && (CC.style.left = zC + "px")
    }
    const ub = vw.baseTheme({
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
      rb = {
        x: 0,
        y: 0
      },
      sb = QC.n.define({
        enables: [Xb, ub]
      }),
      Tb = QC.n.define({
        combine: CC => CC.reduce(((CC, zC) => CC.concat(zC)), [])
      });
    class ab {
      static create(CC) {
        return new ab(CC)
      }
      constructor(CC) {
        this.view = CC, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new mb(CC, Tb, ((CC, zC) => this.createHostedView(CC, zC)), (CC => CC.dom.remove()))
      }
      createHostedView(CC, zC) {
        let ZC = CC.create(this.view);
        return ZC.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(ZC.dom, zC ? zC.dom.nextSibling : this.dom.firstChild), this.mounted && ZC.mount && ZC.mount(this.view), ZC
      }
      mount(CC) {
        for (let zC of this.manager.tooltipViews) zC.mount && zC.mount(CC);
        this.mounted = !0
      }
      positioned(CC) {
        for (let zC of this.manager.tooltipViews) zC.positioned && zC.positioned(CC)
      }
      update(CC) {
        this.manager.update(CC)
      }
      destroy() {
        var CC;
        for (let zC of this.manager.tooltipViews) null === (CC = zC.destroy) || void 0 === CC || CC.call(zC)
      }
      passProp(CC) {
        let zC;
        for (let ZC of this.manager.tooltipViews) {
          let QC = ZC[CC];
          if (void 0 !== QC)
            if (void 0 === zC) zC = QC;
            else if (zC !== QC) return
        }
        return zC
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
    const tb = sb.compute([Tb], (CC => {
      let zC = CC.facet(Tb);
      return 0 === zC.length ? null : {
        pos: Math.min(...zC.map((CC => CC.pos))),
        end: Math.max(...zC.map((CC => {
          var zC;
          return null !== (zC = CC.end) && void 0 !== zC ? zC : CC.pos
        }))),
        create: ab.create,
        above: zC[0].above,
        arrow: zC.some((CC => CC.arrow))
      }
    }));
    class Db {
      constructor(CC, zC, ZC, QC, wC) {
        this.view = CC, this.source = zC, this.field = ZC, this.setHover = QC, this.hoverTime = wC, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
          x: 0,
          y: 0,
          target: CC.dom,
          time: 0
        }, this.checkHover = this.checkHover.bind(this), CC.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), CC.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this))
      }
      update() {
        this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout((() => this.startHover()), 20))
      }
      get active() {
        return this.view.state.field(this.field)
      }
      checkHover() {
        if (this.hoverTimeout = -1, this.active.length) return;
        let CC = Date.now() - this.lastMove.time;
        CC < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - CC) : this.startHover()
      }
      startHover() {
        clearTimeout(this.restartTimeout);
        let {
          view: CC,
          lastMove: zC
        } = this, ZC = CC.docView.tile.nearest(zC.target);
        if (!ZC) return;
        let QC, wC = 1;
        if (ZC.isWidget()) QC = ZC.posAtStart;
        else {
          if (QC = CC.posAtCoords(zC), null == QC) return;
          let ZC = CC.coordsAtPos(QC);
          if (!ZC || zC.y < ZC.top || zC.y > ZC.bottom || zC.x < ZC.left - CC.defaultCharacterWidth || zC.x > ZC.right + CC.defaultCharacterWidth) return;
          let bC = CC.bidiSpans(CC.state.doc.lineAt(QC)).find((CC => CC.from <= QC && CC.to >= QC)),
            nC = bC && bC.dir == qz.RTL ? -1 : 1;
          wC = zC.x < ZC.left ? -nC : nC
        }
        let bC = this.source(CC, QC, wC);
        if (null === bC || void 0 === bC ? void 0 : bC.then) {
          let zC = this.pending = {
            pos: QC
          };
          bC.then((ZC => {
            this.pending == zC && (this.pending = null, !ZC || Array.isArray(ZC) && !ZC.length || CC.dispatch({
              effects: this.setHover.of(Array.isArray(ZC) ? ZC : [ZC])
            }))
          }), (zC => jz(CC.state, zC, "hover tooltip")))
        } else !bC || Array.isArray(bC) && !bC.length || CC.dispatch({
          effects: this.setHover.of(Array.isArray(bC) ? bC : [bC])
        })
      }
      get tooltip() {
        let CC = this.view.plugin(Xb),
          zC = CC ? CC.manager.tooltips.findIndex((CC => CC.create == ab.create)) : -1;
        return zC > -1 ? CC.manager.tooltipViews[zC] : null
      }
      mousemove(CC) {
        var zC, ZC;
        this.lastMove = {
          x: CC.clientX,
          y: CC.clientY,
          target: CC.target,
          time: Date.now()
        }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
        let {
          active: QC,
          tooltip: wC
        } = this;
        if (QC.length && wC && ! function(CC, zC) {
            let ZC, {
              left: QC,
              right: wC,
              top: bC,
              bottom: nC
            } = CC.getBoundingClientRect();
            if (ZC = CC.querySelector(".cm-tooltip-arrow")) {
              let CC = ZC.getBoundingClientRect();
              bC = Math.min(CC.top, bC), nC = Math.max(CC.bottom, nC)
            }
            return zC.clientX >= QC - jb && zC.clientX <= wC + jb && zC.clientY >= bC - jb && zC.clientY <= nC + jb
          }(wC.dom, CC) || this.pending) {
          let {
            pos: wC
          } = QC[0] || this.pending, bC = null !== (ZC = null === (zC = QC[0]) || void 0 === zC ? void 0 : zC.end) && void 0 !== ZC ? ZC : wC;
          (wC == bC ? this.view.posAtCoords(this.lastMove) == wC : function(CC, zC, ZC, QC, wC) {
            let bC = CC.scrollDOM.getBoundingClientRect(),
              nC = CC.documentTop + CC.documentPadding.top + CC.contentHeight;
            if (bC.left > QC || bC.right < QC || bC.top > wC || Math.min(bC.bottom, nC) < wC) return !1;
            let fC = CC.posAtCoords({
              x: QC,
              y: wC
            }, !1);
            return fC >= zC && fC <= ZC
          }(this.view, wC, bC, CC.clientX, CC.clientY)) || (this.view.dispatch({
            effects: this.setHover.of([])
          }), this.pending = null)
        }
      }
      mouseleave(CC) {
        clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
        let {
          active: zC
        } = this;
        if (zC.length) {
          let {
            tooltip: zC
          } = this;
          zC && zC.dom.contains(CC.relatedTarget) ? this.watchTooltipLeave(zC.dom) : this.view.dispatch({
            effects: this.setHover.of([])
          })
        }
      }
      watchTooltipLeave(CC) {
        let zC = ZC => {
          CC.removeEventListener("mouseleave", zC), this.active.length && !this.view.dom.contains(ZC.relatedTarget) && this.view.dispatch({
            effects: this.setHover.of([])
          })
        };
        CC.addEventListener("mouseleave", zC)
      }
      destroy() {
        clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove)
      }
    }
    const jb = 4;

    function yb(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        ZC = QC.w.define(),
        wC = QC.A.define({
          create: () => [],
          update(CC, wC) {
            if (CC.length && (zC.hideOnChange && (wC.docChanged || wC.selection) ? CC = [] : zC.hideOn && (CC = CC.filter((CC => !zC.hideOn(wC, CC)))), wC.docChanged)) {
              let zC = [];
              for (let ZC of CC) {
                let CC = wC.changes.mapPos(ZC.pos, -1, QC.o.TrackDel);
                if (null != CC) {
                  let QC = Object.assign(Object.create(null), ZC);
                  QC.pos = CC, null != QC.end && (QC.end = wC.changes.mapPos(QC.end)), zC.push(QC)
                }
              }
              CC = zC
            }
            for (let zC of wC.effects) zC.is(ZC) && (CC = zC.value), zC.is(Ub) && (CC = []);
            return CC
          },
          provide: CC => Tb.from(CC)
        });
      return {
        active: wC,
        extension: [wC, Bz.define((QC => new Db(QC, CC, wC, ZC, zC.hoverTime || 300))), tb]
      }
    }

    function Lb(CC, zC) {
      let ZC = CC.plugin(Xb);
      if (!ZC) return null;
      let QC = ZC.manager.tooltips.indexOf(zC);
      return QC < 0 ? null : ZC.manager.tooltipViews[QC]
    }
    const Ub = QC.w.define();
    const Bb = QC.n.define({
      combine(CC) {
        let zC, ZC;
        for (let QC of CC) zC = zC || QC.topContainer, ZC = ZC || QC.bottomContainer;
        return {
          topContainer: zC,
          bottomContainer: ZC
        }
      }
    });

    function Ob(CC, zC) {
      let ZC = CC.plugin(kb),
        QC = ZC ? ZC.specs.indexOf(zC) : -1;
      return QC > -1 ? ZC.panels[QC] : null
    }
    const kb = Bz.fromClass(class {
      constructor(CC) {
        this.input = CC.state.facet(zn), this.specs = this.input.filter((CC => CC)), this.panels = this.specs.map((zC => zC(CC)));
        let zC = CC.state.facet(Bb);
        this.top = new Vb(CC, !0, zC.topContainer), this.bottom = new Vb(CC, !1, zC.bottomContainer), this.top.sync(this.panels.filter((CC => CC.top))), this.bottom.sync(this.panels.filter((CC => !CC.top)));
        for (let ZC of this.panels) ZC.dom.classList.add("cm-panel"), ZC.mount && ZC.mount()
      }
      update(CC) {
        let zC = CC.state.facet(Bb);
        this.top.container != zC.topContainer && (this.top.sync([]), this.top = new Vb(CC.view, !0, zC.topContainer)), this.bottom.container != zC.bottomContainer && (this.bottom.sync([]), this.bottom = new Vb(CC.view, !1, zC.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
        let ZC = CC.state.facet(zn);
        if (ZC != this.input) {
          let zC = ZC.filter((CC => CC)),
            QC = [],
            wC = [],
            bC = [],
            nC = [];
          for (let ZC of zC) {
            let zC, fC = this.specs.indexOf(ZC);
            fC < 0 ? (zC = ZC(CC.view), nC.push(zC)) : (zC = this.panels[fC], zC.update && zC.update(CC)), QC.push(zC), (zC.top ? wC : bC).push(zC)
          }
          this.specs = zC, this.panels = QC, this.top.sync(wC), this.bottom.sync(bC);
          for (let CC of nC) CC.dom.classList.add("cm-panel"), CC.mount && CC.mount()
        } else
          for (let QC of this.panels) QC.update && QC.update(CC)
      }
      destroy() {
        this.top.sync([]), this.bottom.sync([])
      }
    }, {
      provide: CC => vw.scrollMargins.of((zC => {
        let ZC = zC.plugin(CC);
        return ZC && {
          top: ZC.top.scrollMargin(),
          bottom: ZC.bottom.scrollMargin()
        }
      }))
    });
    class Vb {
      constructor(CC, zC, ZC) {
        this.view = CC, this.top = zC, this.container = ZC, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses()
      }
      sync(CC) {
        for (let zC of this.panels) zC.destroy && CC.indexOf(zC) < 0 && zC.destroy();
        this.panels = CC, this.syncDOM()
      }
      syncDOM() {
        if (0 == this.panels.length) return void(this.dom && (this.dom.remove(), this.dom = void 0));
        if (!this.dom) {
          this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
          let CC = this.container || this.view.dom;
          CC.insertBefore(this.dom, this.top ? CC.firstChild : null)
        }
        let CC = this.dom.firstChild;
        for (let zC of this.panels)
          if (zC.dom.parentNode == this.dom) {
            for (; CC != zC.dom;) CC = Cn(CC);
            CC = CC.nextSibling
          } else this.dom.insertBefore(zC.dom, CC);
        for (; CC;) CC = Cn(CC)
      }
      scrollMargin() {
        return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top)
      }
      syncClasses() {
        if (this.container && this.classes != this.view.themeClasses) {
          for (let CC of this.classes.split(" ")) CC && this.container.classList.remove(CC);
          for (let CC of (this.classes = this.view.themeClasses).split(" ")) CC && this.container.classList.add(CC)
        }
      }
    }

    function Cn(CC) {
      let zC = CC.nextSibling;
      return CC.remove(), zC
    }
    const zn = QC.n.define({
      enables: kb
    });

    function Zn(CC, zC) {
      let ZC, wC = new Promise((CC => ZC = CC)),
        bC = CC => function(CC, zC, ZC) {
          let QC = zC.content ? zC.content(CC, (() => nC(null))) : null;
          if (!QC) {
            if (QC = (0, WC.b)("form"), zC.input) {
              let CC = (0, WC.b)("input", zC.input);
              /^(text|password|number|email|tel|url)$/.test(CC.type) && CC.classList.add("cm-textfield"), CC.name || (CC.name = "input"), QC.appendChild((0, WC.b)("label", (zC.label || "") + ": ", CC))
            } else QC.appendChild(document.createTextNode(zC.label || ""));
            QC.appendChild(document.createTextNode(" ")), QC.appendChild((0, WC.b)("button", {
              class: "cm-button",
              type: "submit"
            }, zC.submitLabel || "OK"))
          }
          let wC = "FORM" == QC.nodeName ? [QC] : QC.querySelectorAll("form");
          for (let fC = 0; fC < wC.length; fC++) {
            let CC = wC[fC];
            CC.addEventListener("keydown", (zC => {
              27 == zC.keyCode ? (zC.preventDefault(), nC(null)) : 13 == zC.keyCode && (zC.preventDefault(), nC(CC))
            })), CC.addEventListener("submit", (zC => {
              zC.preventDefault(), nC(CC)
            }))
          }
          let bC = (0, WC.b)("div", QC, (0, WC.b)("button", {
            onclick: () => nC(null),
            "aria-label": CC.state.phrase("close"),
            class: "cm-dialog-close",
            type: "button"
          }, ["\xd7"]));
          zC.class && (bC.className = zC.class);

          function nC(zC) {
            bC.contains(bC.ownerDocument.activeElement) && CC.focus(), ZC(zC)
          }
          return bC.classList.add("cm-dialog"), {
            dom: bC,
            top: zC.top,
            mount: () => {
              if (zC.focus) {
                let CC;
                CC = "string" == typeof zC.focus ? QC.querySelector(zC.focus) : QC.querySelector("input") || QC.querySelector("button"), CC && "select" in CC ? CC.select() : CC && "focus" in CC && CC.focus()
              }
            }
          }
        }(CC, zC, ZC);
      CC.state.field(Qn, !1) ? CC.dispatch({
        effects: wn.of(bC)
      }) : CC.dispatch({
        effects: QC.w.appendConfig.of(Qn.init((() => [bC])))
      });
      let nC = bn.of(bC);
      return {
        close: nC,
        result: wC.then((zC => ((CC.win.queueMicrotask || (zC => CC.win.setTimeout(zC, 10)))((() => {
          CC.state.field(Qn).indexOf(bC) > -1 && CC.dispatch({
            effects: nC
          })
        })), zC)))
      }
    }
    const Qn = QC.A.define({
        create: () => [],
        update(CC, zC) {
          for (let ZC of zC.effects) ZC.is(wn) ? CC = [ZC.value].concat(CC) : ZC.is(bn) && (CC = CC.filter((CC => CC != ZC.value)));
          return CC
        },
        provide: CC => zn.computeN([CC], (zC => zC.field(CC)))
      }),
      wn = QC.w.define(),
      bn = QC.w.define();
    class nn extends QC.v {
      compare(CC) {
        return this == CC || this.constructor == CC.constructor && this.eq(CC)
      }
      eq(CC) {
        return !1
      }
      destroy(CC) {}
    }
    nn.prototype.elementClass = "", nn.prototype.toDOM = void 0, nn.prototype.mapMode = QC.o.TrackBefore, nn.prototype.startSide = nn.prototype.endSide = -1, nn.prototype.point = !0;
    const fn = QC.n.define(),
      qn = QC.n.define(),
      Fn = {
        class: "",
        renderEmptyElements: !1,
        elementStyle: "",
        markers: () => QC.u.empty,
        lineMarker: () => null,
        widgetMarker: () => null,
        lineMarkerChange: null,
        initialSpacer: null,
        updateSpacer: null,
        domEventHandlers: {},
        side: "before"
      },
      Wn = QC.n.define();

    function Nn(CC) {
      return [gn(), Wn.of({
        ...Fn,
        ...CC
      })]
    }
    const Mn = QC.n.define({
      combine: CC => CC.some((CC => CC))
    });

    function gn(CC) {
      let zC = [Sn];
      return CC && !1 === CC.fixed && zC.push(Mn.of(!0)), zC
    }
    const Sn = Bz.fromClass(class {
      constructor(CC) {
        this.view = CC, this.domAfter = null, this.prevViewport = CC.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = CC.state.facet(Wn).map((zC => new Rn(CC, zC))), this.fixed = !CC.state.facet(Mn);
        for (let zC of this.gutters) "after" == zC.config.side ? this.getDOMAfter().appendChild(zC.dom) : this.dom.appendChild(zC.dom);
        this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), CC.scrollDOM.insertBefore(this.dom, CC.contentDOM)
      }
      getDOMAfter() {
        return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter
      }
      update(CC) {
        if (this.updateGutters(CC)) {
          let zC = this.prevViewport,
            ZC = CC.view.viewport,
            QC = Math.min(zC.to, ZC.to) - Math.max(zC.from, ZC.from);
          this.syncGutters(QC < .8 * (ZC.to - ZC.from))
        }
        if (CC.geometryChanged) {
          let CC = this.view.contentHeight / this.view.scaleY + "px";
          this.dom.style.minHeight = CC, this.domAfter && (this.domAfter.style.minHeight = CC)
        }
        this.view.state.facet(Mn) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = CC.view.viewport
      }
      syncGutters(CC) {
        let zC = this.dom.nextSibling;
        CC && (this.dom.remove(), this.domAfter && this.domAfter.remove());
        let ZC = QC.u.iter(this.view.state.facet(fn), this.view.viewport.from),
          wC = [],
          bC = this.gutters.map((CC => new Gn(CC, this.view.viewport, -this.view.documentPadding.top)));
        for (let QC of this.view.viewportLineBlocks)
          if (wC.length && (wC = []), Array.isArray(QC.type)) {
            let CC = !0;
            for (let zC of QC.type)
              if (zC.type == dC.Text && CC) {
                Pn(ZC, wC, zC.from);
                for (let CC of bC) CC.line(this.view, zC, wC);
                CC = !1
              } else if (zC.widget)
              for (let CC of bC) CC.widget(this.view, zC)
          } else if (QC.type == dC.Text) {
          Pn(ZC, wC, QC.from);
          for (let CC of bC) CC.line(this.view, QC, wC)
        } else if (QC.widget)
          for (let CC of bC) CC.widget(this.view, QC);
        for (let QC of bC) QC.finish();
        CC && (this.view.scrollDOM.insertBefore(this.dom, zC), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter))
      }
      updateGutters(CC) {
        let zC = CC.startState.facet(Wn),
          ZC = CC.state.facet(Wn),
          wC = CC.docChanged || CC.heightChanged || CC.viewportChanged || !QC.u.eq(CC.startState.facet(fn), CC.state.facet(fn), CC.view.viewport.from, CC.view.viewport.to);
        if (zC == ZC)
          for (let QC of this.gutters) QC.update(CC) && (wC = !0);
        else {
          wC = !0;
          let QC = [];
          for (let wC of ZC) {
            let ZC = zC.indexOf(wC);
            ZC < 0 ? QC.push(new Rn(this.view, wC)) : (this.gutters[ZC].update(CC), QC.push(this.gutters[ZC]))
          }
          for (let CC of this.gutters) CC.dom.remove(), QC.indexOf(CC) < 0 && CC.destroy();
          for (let CC of QC) "after" == CC.config.side ? this.getDOMAfter().appendChild(CC.dom) : this.dom.appendChild(CC.dom);
          this.gutters = QC
        }
        return wC
      }
      destroy() {
        for (let CC of this.gutters) CC.destroy();
        this.dom.remove(), this.domAfter && this.domAfter.remove()
      }
    }, {
      provide: CC => vw.scrollMargins.of((zC => {
        let ZC = zC.plugin(CC);
        if (!ZC || 0 == ZC.gutters.length || !ZC.fixed) return null;
        let QC = ZC.dom.offsetWidth * zC.scaleX,
          wC = ZC.domAfter ? ZC.domAfter.offsetWidth * zC.scaleX : 0;
        return zC.textDirection == qz.LTR ? {
          left: QC,
          right: wC
        } : {
          right: QC,
          left: wC
        }
      }))
    });

    function pn(CC) {
      return Array.isArray(CC) ? CC : [CC]
    }

    function Pn(CC, zC, ZC) {
      for (; CC.value && CC.from <= ZC;) CC.from == ZC && zC.push(CC.value), CC.next()
    }
    class Gn {
      constructor(CC, zC, ZC) {
        this.gutter = CC, this.height = ZC, this.i = 0, this.cursor = QC.u.iter(CC.markers, zC.from)
      }
      addElement(CC, zC, ZC) {
        let {
          gutter: QC
        } = this, wC = (zC.top - this.height) / CC.scaleY, bC = zC.height / CC.scaleY;
        if (this.i == QC.elements.length) {
          let zC = new An(CC, bC, wC, ZC);
          QC.elements.push(zC), QC.dom.appendChild(zC.dom)
        } else QC.elements[this.i].update(CC, bC, wC, ZC);
        this.height = zC.bottom, this.i++
      }
      line(CC, zC, ZC) {
        let QC = [];
        Pn(this.cursor, QC, zC.from), ZC.length && (QC = QC.concat(ZC));
        let wC = this.gutter.config.lineMarker(CC, zC, QC);
        wC && QC.unshift(wC);
        let bC = this.gutter;
        (0 != QC.length || bC.config.renderEmptyElements) && this.addElement(CC, zC, QC)
      }
      widget(CC, zC) {
        let ZC = this.gutter.config.widgetMarker(CC, zC.widget, zC),
          QC = ZC ? [ZC] : null;
        for (let wC of CC.state.facet(qn)) {
          let ZC = wC(CC, zC.widget, zC);
          ZC && (QC || (QC = [])).push(ZC)
        }
        QC && this.addElement(CC, zC, QC)
      }
      finish() {
        let CC = this.gutter;
        for (; CC.elements.length > this.i;) {
          let zC = CC.elements.pop();
          CC.dom.removeChild(zC.dom), zC.destroy()
        }
      }
    }
    class Rn {
      constructor(CC, zC) {
        this.view = CC, this.config = zC, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
        for (let ZC in zC.domEventHandlers) this.dom.addEventListener(ZC, (QC => {
          let wC, bC = QC.target;
          if (bC != this.dom && this.dom.contains(bC)) {
            for (; bC.parentNode != this.dom;) bC = bC.parentNode;
            let CC = bC.getBoundingClientRect();
            wC = (CC.top + CC.bottom) / 2
          } else wC = QC.clientY;
          let nC = CC.lineBlockAtHeight(wC - CC.documentTop);
          zC.domEventHandlers[ZC](CC, nC, QC) && QC.preventDefault()
        }));
        this.markers = pn(zC.markers(CC)), zC.initialSpacer && (this.spacer = new An(CC, 0, 0, [zC.initialSpacer(CC)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none")
      }
      update(CC) {
        let zC = this.markers;
        if (this.markers = pn(this.config.markers(CC.view)), this.spacer && this.config.updateSpacer) {
          let zC = this.config.updateSpacer(this.spacer.markers[0], CC);
          zC != this.spacer.markers[0] && this.spacer.update(CC.view, 0, 0, [zC])
        }
        let ZC = CC.view.viewport;
        return !QC.u.eq(this.markers, zC, ZC.from, ZC.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(CC)
      }
      destroy() {
        for (let CC of this.elements) CC.destroy()
      }
    }
    class An {
      constructor(CC, zC, ZC, QC) {
        this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(CC, zC, ZC, QC)
      }
      update(CC, zC, ZC, QC) {
        this.height != zC && (this.height = zC, this.dom.style.height = zC + "px"), this.above != ZC && (this.dom.style.marginTop = (this.above = ZC) ? ZC + "px" : ""),
          function(CC, zC) {
            if (CC.length != zC.length) return !1;
            for (let ZC = 0; ZC < CC.length; ZC++)
              if (!CC[ZC].compare(zC[ZC])) return !1;
            return !0
          }(this.markers, QC) || this.setMarkers(CC, QC)
      }
      setMarkers(CC, zC) {
        let ZC = "cm-gutterElement",
          QC = this.dom.firstChild;
        for (let wC = 0, bC = 0;;) {
          let nC = bC,
            fC = wC < zC.length ? zC[wC++] : null,
            oC = !1;
          if (fC) {
            let CC = fC.elementClass;
            CC && (ZC += " " + CC);
            for (let zC = bC; zC < this.markers.length; zC++)
              if (this.markers[zC].compare(fC)) {
                nC = zC, oC = !0;
                break
              }
          } else nC = this.markers.length;
          for (; bC < nC;) {
            let CC = this.markers[bC++];
            if (CC.toDOM) {
              CC.destroy(QC);
              let zC = QC.nextSibling;
              QC.remove(), QC = zC
            }
          }
          if (!fC) break;
          fC.toDOM && (oC ? QC = QC.nextSibling : this.dom.insertBefore(fC.toDOM(CC), QC)), oC && bC++
        }
        this.dom.className = ZC, this.markers = zC
      }
      destroy() {
        this.setMarkers(null, [])
      }
    }
    const xn = QC.n.define(),
      Jn = QC.n.define(),
      In = QC.n.define({
        combine: CC => (0, QC.P)(CC, {
          formatNumber: String,
          domEventHandlers: {}
        }, {
          domEventHandlers(CC, zC) {
            let ZC = Object.assign({}, CC);
            for (let QC in zC) {
              let CC = ZC[QC],
                wC = zC[QC];
              ZC[QC] = CC ? (zC, ZC, QC) => CC(zC, ZC, QC) || wC(zC, ZC, QC) : wC
            }
            return ZC
          }
        })
      });
    class vn extends nn {
      constructor(CC) {
        super(), this.number = CC
      }
      eq(CC) {
        return this.number == CC.number
      }
      toDOM() {
        return document.createTextNode(this.number)
      }
    }

    function en(CC, zC) {
      return CC.state.facet(In).formatNumber(zC, CC.state)
    }
    const hn = Wn.compute([In], (CC => ({
      class: "cm-lineNumbers",
      renderEmptyElements: !1,
      markers: CC => CC.state.facet(xn),
      lineMarker: (CC, zC, ZC) => ZC.some((CC => CC.toDOM)) ? null : new vn(en(CC, CC.state.doc.lineAt(zC.from).number)),
      widgetMarker: (CC, zC, ZC) => {
        for (let QC of CC.state.facet(Jn)) {
          let wC = QC(CC, zC, ZC);
          if (wC) return wC
        }
        return null
      },
      lineMarkerChange: CC => CC.startState.facet(In) != CC.state.facet(In),
      initialSpacer: CC => new vn(en(CC, Yn(CC.state.doc.lines))),
      updateSpacer(CC, zC) {
        let ZC = en(zC.view, Yn(zC.view.state.doc.lines));
        return ZC == CC.number ? CC : new vn(ZC)
      },
      domEventHandlers: CC.facet(In).domEventHandlers,
      side: "before"
    })));

    function Kn() {
      let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [In.of(CC), gn(), hn]
    }

    function Yn(CC) {
      let zC = 9;
      for (; zC < CC;) zC = 10 * zC + 9;
      return zC
    }
    const dn = new class extends nn {
        constructor() {
          super(...arguments), this.elementClass = "cm-activeLineGutter"
        }
      },
      mn = fn.compute(["selection"], (CC => {
        let zC = [],
          ZC = -1;
        for (let QC of CC.selection.np) {
          let wC = CC.doc.lineAt(QC.head).from;
          wC > ZC && (ZC = wC, zC.push(dn.range(wC)))
        }
        return QC.u.of(zC)
      }));

    function Hn() {
      return mn
    }
  },
  41144: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => QC,
      d: () => MC,
      g: () => nC,
      j: () => FC,
      k: () => qC,
      m: () => HC,
      n: () => lC,
      r: () => EC,
      u: () => gC
    });
    const QC = 1024;
    let wC = 0;
    class bC {
      constructor(CC, zC) {
        this.from = CC, this.to = zC
      }
    }
    class nC {
      constructor() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.id = wC++, this.perNode = !!CC.perNode, this.deserialize = CC.deserialize || (() => {
          throw new Error("This node type doesn't define a deserialize function")
        }), this.combine = CC.combine || null
      }
      add(CC) {
        if (this.perNode) throw new RangeError("Can't add per-node props to node types");
        return "function" != typeof CC && (CC = qC.match(CC)), zC => {
          let ZC = CC(zC);
          return void 0 === ZC ? null : [this, ZC]
        }
      }
    }
    nC.closedBy = new nC({
      deserialize: CC => CC.split(" ")
    }), nC.openedBy = new nC({
      deserialize: CC => CC.split(" ")
    }), nC.group = new nC({
      deserialize: CC => CC.split(" ")
    }), nC.isolate = new nC({
      deserialize: CC => {
        if (CC && "rtl" != CC && "ltr" != CC && "auto" != CC) throw new RangeError("Invalid value for isolate: " + CC);
        return CC || "auto"
      }
    }), nC.contextHash = new nC({
      perNode: !0
    }), nC.lookAhead = new nC({
      perNode: !0
    }), nC.mounted = new nC({
      perNode: !0
    });
    class fC {
      constructor(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this.tree = CC, this.overlay = zC, this.parser = ZC, this.bracketed = QC
      }
      static get(CC) {
        return CC && CC.props && CC.props[nC.mounted.id]
      }
    }
    const oC = Object.create(null);
    class qC {
      constructor(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.name = CC, this.props = zC, this.id = ZC, this.flags = QC
      }
      static define(CC) {
        let zC = CC.props && CC.props.length ? Object.create(null) : oC,
          ZC = (CC.top ? 1 : 0) | (CC.skipped ? 2 : 0) | (CC.error ? 4 : 0) | (null == CC.name ? 8 : 0),
          QC = new qC(CC.name || "", zC, CC.id, ZC);
        if (CC.props)
          for (let wC of CC.props)
            if (Array.isArray(wC) || (wC = wC(QC)), wC) {
              if (wC[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
              zC[wC[0].id] = wC[1]
            } return QC
      }
      prop(CC) {
        return this.props[CC.id]
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
      is(CC) {
        if ("string" == typeof CC) {
          if (this.name == CC) return !0;
          let zC = this.prop(nC.group);
          return !!zC && zC.indexOf(CC) > -1
        }
        return this.id == CC
      }
      static match(CC) {
        let zC = Object.create(null);
        for (let ZC in CC)
          for (let QC of ZC.split(" ")) zC[QC] = CC[ZC];
        return CC => {
          for (let ZC = CC.prop(nC.group), QC = -1; QC < (ZC ? ZC.length : 0); QC++) {
            let wC = zC[QC < 0 ? CC.name : ZC[QC]];
            if (wC) return wC
          }
        }
      }
    }
    qC.none = new qC("", Object.create(null), 0, 8);
    class FC {
      constructor(CC) {
        this.types = CC;
        for (let zC = 0; zC < CC.length; zC++)
          if (CC[zC].id != zC) throw new RangeError("Node type ids should correspond to array positions when creating a node set")
      }
      extend() {
        let CC = [];
        for (var zC = arguments.length, ZC = new Array(zC), QC = 0; QC < zC; QC++) ZC[QC] = arguments[QC];
        for (let wC of this.types) {
          let zC = null;
          for (let CC of ZC) {
            let ZC = CC(wC);
            if (ZC) {
              zC || (zC = Object.assign({}, wC.props));
              let CC = ZC[1],
                QC = ZC[0];
              QC.combine && QC.id in zC && (CC = QC.combine(zC[QC.id], CC)), zC[QC.id] = CC
            }
          }
          CC.push(zC ? new qC(wC.name, zC, wC.id, wC.flags) : wC)
        }
        return new FC(CC)
      }
    }
    const WC = new WeakMap,
      NC = new WeakMap;
    var MC;
    ! function(CC) {
      CC[CC.ExcludeBuffers = 1] = "ExcludeBuffers", CC[CC.IncludeAnonymous = 2] = "IncludeAnonymous", CC[CC.IgnoreMounts = 4] = "IgnoreMounts", CC[CC.IgnoreOverlays = 8] = "IgnoreOverlays", CC[CC.EnterBracketed = 16] = "EnterBracketed"
    }(MC || (MC = {}));
    class gC {
      constructor(CC, zC, ZC, QC, wC) {
        if (this.type = CC, this.children = zC, this.positions = ZC, this.length = QC, this.props = null, wC && wC.length) {
          this.props = Object.create(null);
          for (let [CC, zC] of wC) this.props["number" == typeof CC ? CC : CC.id] = zC
        }
      }
      toString() {
        let CC = fC.get(this);
        if (CC && !CC.overlay) return CC.tree.toString();
        let zC = "";
        for (let ZC of this.children) {
          let CC = ZC.toString();
          CC && (zC && (zC += ","), zC += CC)
        }
        return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (zC.length ? "(" + zC + ")" : "") : zC
      }
      cursor() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return new hC(this.topNode, CC)
      }
      cursorAt(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZC = WC.get(this) || this.topNode,
          QC = new hC(ZC);
        return QC.moveTo(CC, zC), WC.set(this, QC._tree), QC
      }
      get topNode() {
        return new AC(this, 0, 0, null)
      }
      resolve(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZC = GC(WC.get(this) || this.topNode, CC, zC, !1);
        return WC.set(this, ZC), ZC
      }
      resolveInner(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZC = GC(NC.get(this) || this.topNode, CC, zC, !0);
        return NC.set(this, ZC), ZC
      }
      resolveStack(CC) {
        return function(CC, zC, ZC) {
          let QC = CC.resolveInner(zC, ZC),
            wC = null;
          for (let bC = QC instanceof AC ? QC : QC.context.parent; bC; bC = bC.parent)
            if (bC.index < 0) {
              let CC = bC.parent;
              (wC || (wC = [QC])).push(CC.resolve(zC, ZC)), bC = CC
            } else {
              let CC = fC.get(bC.tree);
              if (CC && CC.overlay && CC.overlay[0].from <= zC && CC.overlay[CC.overlay.length - 1].to >= zC) {
                let nC = new AC(CC.tree, CC.overlay[0].from + bC.from, -1, bC);
                (wC || (wC = [QC])).push(GC(nC, zC, ZC, !1))
              }
            } return wC ? vC(wC) : QC
        }(this, CC, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
      }
      iterate(CC) {
        let {
          enter: zC,
          leave: ZC,
          from: QC = 0,
          to: wC = this.length
        } = CC, bC = CC.mode || 0, nC = (bC & MC.IncludeAnonymous) > 0;
        for (let fC = this.cursor(bC | MC.IncludeAnonymous);;) {
          let CC = !1;
          if (fC.from <= wC && fC.to >= QC && (!nC && fC.type.isAnonymous || !1 !== zC(fC))) {
            if (fC.firstChild()) continue;
            CC = !0
          }
          for (; CC && ZC && (nC || !fC.type.isAnonymous) && ZC(fC), !fC.nextSibling();) {
            if (!fC.parent()) return;
            CC = !0
          }
        }
      }
      prop(CC) {
        return CC.perNode ? this.props ? this.props[CC.id] : void 0 : this.type.prop(CC)
      }
      get propValues() {
        let CC = [];
        if (this.props)
          for (let zC in this.props) CC.push([+zC, this.props[zC]]);
        return CC
      }
      balance() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this.children.length <= 8 ? this : mC(qC.none, this.children, this.positions, 0, this.children.length, 0, this.length, ((CC, zC, ZC) => new gC(this.type, CC, zC, ZC, this.propValues)), CC.makeTree || ((CC, zC, ZC) => new gC(qC.none, CC, zC, ZC)))
      }
      static build(CC) {
        return function(CC) {
          var zC;
          let {
            buffer: ZC,
            nodeSet: wC,
            maxBufferLength: bC = QC,
            reused: fC = [],
            minRepeatType: oC = wC.types.length
          } = CC, qC = Array.isArray(ZC) ? new SC(ZC, ZC.length) : ZC, FC = wC.types, WC = 0, NC = 0;

          function MC(CC, zC, ZC, QC, nC, gC) {
            let {
              id: SC,
              start: IC,
              end: iC,
              size: vC
            } = qC, eC = NC, hC = WC;
            if (vC < 0) {
              if (qC.next(), -1 == vC) {
                let zC = fC[SC];
                return ZC.push(zC), void QC.push(IC - CC)
              }
              if (-3 == vC) return void(WC = SC);
              if (-4 == vC) return void(NC = SC);
              throw new RangeError(`Unrecognized record size: ${vC}`)
            }
            let KC, YC, dC = FC[SC],
              HC = IC - CC;
            if (iC - IC <= bC && (YC = xC(qC.pos - zC, nC))) {
              let zC = new Uint16Array(YC.size - YC.skip),
                ZC = qC.pos - YC.size,
                QC = zC.length;
              for (; qC.pos > ZC;) QC = JC(YC.start, zC, QC);
              KC = new pC(zC, iC - YC.start, wC), HC = YC.start - CC
            } else {
              let CC = qC.pos - vC;
              qC.next();
              let zC = [],
                ZC = [],
                QC = SC >= oC ? SC : -1,
                wC = 0,
                nC = iC;
              for (; qC.pos > CC;) QC >= 0 && qC.id == QC && qC.size >= 0 ? (qC.end <= nC - bC && (RC(zC, ZC, IC, wC, qC.end, nC, QC, eC, hC), wC = zC.length, nC = qC.end), qC.next()) : gC > 2500 ? PC(IC, CC, zC, ZC) : MC(IC, CC, zC, ZC, QC, gC + 1);
              if (QC >= 0 && wC > 0 && wC < zC.length && RC(zC, ZC, IC, wC, IC, nC, QC, eC, hC), zC.reverse(), ZC.reverse(), QC > -1 && wC > 0) {
                let CC = GC(dC, hC);
                KC = mC(dC, zC, ZC, 0, zC.length, 0, iC - IC, CC, CC)
              } else KC = AC(dC, zC, ZC, iC - IC, eC - iC, hC)
            }
            ZC.push(KC), QC.push(HC)
          }

          function PC(CC, zC, ZC, QC) {
            let nC = [],
              fC = 0,
              oC = -1;
            for (; qC.pos > zC;) {
              let {
                id: CC,
                start: zC,
                end: ZC,
                size: QC
              } = qC;
              if (QC > 4) qC.next();
              else {
                if (oC > -1 && zC < oC) break;
                oC < 0 && (oC = ZC - bC), nC.push(CC, zC, ZC), fC++, qC.next()
              }
            }
            if (fC) {
              let zC = new Uint16Array(4 * fC),
                bC = nC[nC.length - 2];
              for (let CC = nC.length - 3, ZC = 0; CC >= 0; CC -= 3) zC[ZC++] = nC[CC], zC[ZC++] = nC[CC + 1] - bC, zC[ZC++] = nC[CC + 2] - bC, zC[ZC++] = ZC;
              ZC.push(new pC(zC, nC[2] - bC, wC)), QC.push(bC - CC)
            }
          }

          function GC(CC, zC) {
            return (ZC, QC, wC) => {
              let bC, fC, oC = 0,
                qC = ZC.length - 1;
              if (qC >= 0 && (bC = ZC[qC]) instanceof gC) {
                if (!qC && bC.type == CC && bC.length == wC) return bC;
                (fC = bC.prop(nC.lookAhead)) && (oC = QC[qC] + bC.length + fC)
              }
              return AC(CC, ZC, QC, wC, oC, zC)
            }
          }

          function RC(CC, zC, ZC, QC, bC, nC, fC, oC, qC) {
            let FC = [],
              WC = [];
            for (; CC.length > QC;) FC.push(CC.pop()), WC.push(zC.pop() + ZC - bC);
            CC.push(AC(wC.types[fC], FC, WC, nC - bC, oC - nC, qC)), zC.push(bC - ZC)
          }

          function AC(CC, zC, ZC, QC, wC, bC, fC) {
            if (bC) {
              let CC = [nC.contextHash, bC];
              fC = fC ? [CC].concat(fC) : [CC]
            }
            if (wC > 25) {
              let CC = [nC.lookAhead, wC];
              fC = fC ? [CC].concat(fC) : [CC]
            }
            return new gC(CC, zC, ZC, QC, fC)
          }

          function xC(CC, zC) {
            let ZC = qC.fork(),
              QC = 0,
              wC = 0,
              nC = 0,
              fC = ZC.end - bC,
              FC = {
                size: 0,
                start: 0,
                skip: 0
              };
            CC: for (let bC = ZC.pos - CC; ZC.pos > bC;) {
              let CC = ZC.size;
              if (ZC.id == zC && CC >= 0) {
                FC.size = QC, FC.start = wC, FC.skip = nC, nC += 4, QC += 4, ZC.next();
                continue
              }
              let qC = ZC.pos - CC;
              if (CC < 0 || qC < bC || ZC.start < fC) break;
              let WC = ZC.id >= oC ? 4 : 0,
                NC = ZC.start;
              for (ZC.next(); ZC.pos > qC;) {
                if (ZC.size < 0) {
                  if (-3 != ZC.size && -4 != ZC.size) break CC;
                  WC += 4
                } else ZC.id >= oC && (WC += 4);
                ZC.next()
              }
              wC = NC, QC += CC, nC += WC
            }
            return (zC < 0 || QC == CC) && (FC.size = QC, FC.start = wC, FC.skip = nC), FC.size > 4 ? FC : void 0
          }

          function JC(CC, zC, ZC) {
            let {
              id: QC,
              start: wC,
              end: bC,
              size: nC
            } = qC;
            if (qC.next(), nC >= 0 && QC < oC) {
              let fC = ZC;
              if (nC > 4) {
                let QC = qC.pos - (nC - 4);
                for (; qC.pos > QC;) ZC = JC(CC, zC, ZC)
              }
              zC[--ZC] = fC, zC[--ZC] = bC - CC, zC[--ZC] = wC - CC, zC[--ZC] = QC
            } else - 3 == nC ? WC = QC : -4 == nC && (NC = QC);
            return ZC
          }
          let IC = [],
            iC = [];
          for (; qC.pos > 0;) MC(CC.start || 0, CC.bufferStart || 0, IC, iC, -1, 0);
          let vC = null !== (zC = CC.length) && void 0 !== zC ? zC : IC.length ? iC[0] + IC[0].length : 0;
          return new gC(FC[CC.topID], IC.reverse(), iC.reverse(), vC)
        }(CC)
      }
    }
    gC.empty = new gC(qC.none, [], [], 0);
    class SC {
      constructor(CC, zC) {
        this.buffer = CC, this.index = zC
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
        return new SC(this.buffer, this.index)
      }
    }
    class pC {
      constructor(CC, zC, ZC) {
        this.buffer = CC, this.length = zC, this.set = ZC
      }
      get type() {
        return qC.none
      }
      toString() {
        let CC = [];
        for (let zC = 0; zC < this.buffer.length;) CC.push(this.childString(zC)), zC = this.buffer[zC + 3];
        return CC.join(",")
      }
      childString(CC) {
        let zC = this.buffer[CC],
          ZC = this.buffer[CC + 3],
          QC = this.set.types[zC],
          wC = QC.name;
        if (/\W/.test(wC) && !QC.isError && (wC = JSON.stringify(wC)), ZC == (CC += 4)) return wC;
        let bC = [];
        for (; CC < ZC;) bC.push(this.childString(CC)), CC = this.buffer[CC + 3];
        return wC + "(" + bC.join(",") + ")"
      }
      findChild(CC, zC, ZC, QC, wC) {
        let {
          buffer: bC
        } = this, nC = -1;
        for (let fC = CC; fC != zC && !(PC(wC, QC, bC[fC + 1], bC[fC + 2]) && (nC = fC, ZC > 0)); fC = bC[fC + 3]);
        return nC
      }
      slice(CC, zC, ZC) {
        let QC = this.buffer,
          wC = new Uint16Array(zC - CC),
          bC = 0;
        for (let nC = CC, fC = 0; nC < zC;) {
          wC[fC++] = QC[nC++], wC[fC++] = QC[nC++] - ZC;
          let zC = wC[fC++] = QC[nC++] - ZC;
          wC[fC++] = QC[nC++] - CC, bC = Math.max(bC, zC)
        }
        return new pC(wC, bC, this.set)
      }
    }

    function PC(CC, zC, ZC, QC) {
      switch (CC) {
        case -2:
          return ZC < zC;
        case -1:
          return QC >= zC && ZC < zC;
        case 0:
          return ZC < zC && QC > zC;
        case 1:
          return ZC <= zC && QC > zC;
        case 2:
          return QC > zC;
        case 4:
          return !0
      }
    }

    function GC(CC, zC, ZC, QC) {
      for (var wC; CC.from == CC.to || (ZC < 1 ? CC.from >= zC : CC.from > zC) || (ZC > -1 ? CC.to <= zC : CC.to < zC);) {
        let zC = !QC && CC instanceof AC && CC.index < 0 ? null : CC.parent;
        if (!zC) return CC;
        CC = zC
      }
      let bC = QC ? 0 : MC.IgnoreOverlays;
      if (QC)
        for (let nC = CC, fC = nC.parent; fC; nC = fC, fC = nC.parent) nC instanceof AC && nC.index < 0 && (null === (wC = fC.enter(zC, ZC, bC)) || void 0 === wC ? void 0 : wC.from) != nC.from && (CC = fC);
      for (;;) {
        let QC = CC.enter(zC, ZC, bC);
        if (!QC) return CC;
        CC = QC
      }
    }
    class RC {
      cursor() {
        return new hC(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)
      }
      getChild(CC) {
        let zC = xC(this, CC, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null);
        return zC.length ? zC[0] : null
      }
      getChildren(CC) {
        return xC(this, CC, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
      }
      resolve(CC) {
        return GC(this, CC, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !1)
      }
      resolveInner(CC) {
        return GC(this, CC, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !0)
      }
      matchContext(CC) {
        return JC(this.parent, CC)
      }
      enterUnfinishedNodesBefore(CC) {
        let zC = this.childBefore(CC),
          ZC = this;
        for (; zC;) {
          let CC = zC.lastChild;
          if (!CC || CC.to != zC.to) break;
          CC.type.isError && CC.from == CC.to ? (ZC = zC, zC = CC.prevSibling) : zC = CC
        }
        return ZC
      }
      get node() {
        return this
      }
      get next() {
        return this.parent
      }
    }
    class AC extends RC {
      constructor(CC, zC, ZC, QC) {
        super(), this._tree = CC, this.from = zC, this.index = ZC, this._parent = QC
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
      nextChild(CC, zC, ZC, QC) {
        let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        for (let bC = this;;) {
          for (let {
              children: nC,
              positions: oC
            } = bC._tree, qC = zC > 0 ? nC.length : -1; CC != qC; CC += zC) {
            let qC, FC = nC[CC],
              WC = oC[CC] + bC.from;
            if (wC & MC.EnterBracketed && FC instanceof gC && (qC = fC.get(FC)) && !qC.overlay && qC.bracketed && ZC >= WC && ZC <= WC + FC.length || PC(QC, ZC, WC, WC + FC.length))
              if (FC instanceof pC) {
                if (wC & MC.ExcludeBuffers) continue;
                let nC = FC.findChild(0, FC.buffer.length, zC, ZC - WC, QC);
                if (nC > -1) return new iC(new IC(bC, FC, CC, WC), null, nC)
              } else if (wC & MC.IncludeAnonymous || !FC.type.isAnonymous || KC(FC)) {
              let nC;
              if (!(wC & MC.IgnoreMounts) && (nC = fC.get(FC)) && !nC.overlay) return new AC(nC.tree, WC, CC, bC);
              let oC = new AC(FC, WC, CC, bC);
              return wC & MC.IncludeAnonymous || !oC.type.isAnonymous ? oC : oC.nextChild(zC < 0 ? FC.children.length - 1 : 0, zC, ZC, QC, wC)
            }
          }
          if (wC & MC.IncludeAnonymous || !bC.type.isAnonymous) return null;
          if (CC = bC.index >= 0 ? bC.index + zC : zC < 0 ? -1 : bC._parent._tree.children.length, bC = bC._parent, !bC) return null
        }
      }
      get firstChild() {
        return this.nextChild(0, 1, 0, 4)
      }
      get lastChild() {
        return this.nextChild(this._tree.children.length - 1, -1, 0, 4)
      }
      childAfter(CC) {
        return this.nextChild(0, 1, CC, 2)
      }
      childBefore(CC) {
        return this.nextChild(this._tree.children.length - 1, -1, CC, -2)
      }
      prop(CC) {
        return this._tree.prop(CC)
      }
      enter(CC, zC) {
        let ZC, QC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (!(QC & MC.IgnoreOverlays) && (ZC = fC.get(this._tree)) && ZC.overlay) {
          let wC = CC - this.from,
            bC = QC & MC.EnterBracketed && ZC.bracketed;
          for (let {
              from: CC,
              to: QC
            }
            of ZC.overlay)
            if ((zC > 0 || bC ? CC <= wC : CC < wC) && (zC < 0 || bC ? QC >= wC : QC > wC)) return new AC(ZC.tree, ZC.overlay[0].from + this.from, -1, this)
        }
        return this.nextChild(0, 1, CC, zC, QC)
      }
      nextSignificantParent() {
        let CC = this;
        for (; CC.type.isAnonymous && CC._parent;) CC = CC._parent;
        return CC
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

    function xC(CC, zC, ZC, QC) {
      let wC = CC.cursor(),
        bC = [];
      if (!wC.firstChild()) return bC;
      if (null != ZC)
        for (let nC = !1; !nC;)
          if (nC = wC.type.is(ZC), !wC.nextSibling()) return bC;
      for (;;) {
        if (null != QC && wC.type.is(QC)) return bC;
        if (wC.type.is(zC) && bC.push(wC.node), !wC.nextSibling()) return null == QC ? bC : []
      }
    }

    function JC(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zC.length - 1;
      for (let QC = CC; ZC >= 0; QC = QC.parent) {
        if (!QC) return !1;
        if (!QC.type.isAnonymous) {
          if (zC[ZC] && zC[ZC] != QC.name) return !1;
          ZC--
        }
      }
      return !0
    }
    class IC {
      constructor(CC, zC, ZC, QC) {
        this.parent = CC, this.buffer = zC, this.index = ZC, this.start = QC
      }
    }
    class iC extends RC {
      get name() {
        return this.type.name
      }
      get from() {
        return this.context.start + this.context.buffer.buffer[this.index + 1]
      }
      get to() {
        return this.context.start + this.context.buffer.buffer[this.index + 2]
      }
      constructor(CC, zC, ZC) {
        super(), this.context = CC, this._parent = zC, this.index = ZC, this.type = CC.buffer.set.types[CC.buffer.buffer[ZC]]
      }
      child(CC, zC, ZC) {
        let {
          buffer: QC
        } = this.context, wC = QC.findChild(this.index + 4, QC.buffer[this.index + 3], CC, zC - this.context.start, ZC);
        return wC < 0 ? null : new iC(this.context, this, wC)
      }
      get firstChild() {
        return this.child(1, 0, 4)
      }
      get lastChild() {
        return this.child(-1, 0, 4)
      }
      childAfter(CC) {
        return this.child(1, CC, 2)
      }
      childBefore(CC) {
        return this.child(-1, CC, -2)
      }
      prop(CC) {
        return this.type.prop(CC)
      }
      enter(CC, zC) {
        if ((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0) & MC.ExcludeBuffers) return null;
        let {
          buffer: ZC
        } = this.context, QC = ZC.findChild(this.index + 4, ZC.buffer[this.index + 3], zC > 0 ? 1 : -1, CC - this.context.start, zC);
        return QC < 0 ? null : new iC(this.context, this, QC)
      }
      get parent() {
        return this._parent || this.context.parent.nextSignificantParent()
      }
      externalSibling(CC) {
        return this._parent ? null : this.context.parent.nextChild(this.context.index + CC, CC, 0, 4)
      }
      get nextSibling() {
        let {
          buffer: CC
        } = this.context, zC = CC.buffer[this.index + 3];
        return zC < (this._parent ? CC.buffer[this._parent.index + 3] : CC.buffer.length) ? new iC(this.context, this._parent, zC) : this.externalSibling(1)
      }
      get prevSibling() {
        let {
          buffer: CC
        } = this.context, zC = this._parent ? this._parent.index + 4 : 0;
        return this.index == zC ? this.externalSibling(-1) : new iC(this.context, this._parent, CC.findChild(zC, this.index, -1, 0, 4))
      }
      get tree() {
        return null
      }
      toTree() {
        let CC = [],
          zC = [],
          {
            buffer: ZC
          } = this.context,
          QC = this.index + 4,
          wC = ZC.buffer[this.index + 3];
        if (wC > QC) {
          let bC = ZC.buffer[this.index + 1];
          CC.push(ZC.slice(QC, wC, bC)), zC.push(0)
        }
        return new gC(this.type, CC, zC, this.to - this.from)
      }
      toString() {
        return this.context.buffer.childString(this.index)
      }
    }

    function vC(CC) {
      if (!CC.length) return null;
      let zC = 0,
        ZC = CC[0];
      for (let bC = 1; bC < CC.length; bC++) {
        let QC = CC[bC];
        (QC.from > ZC.from || QC.to < ZC.to) && (ZC = QC, zC = bC)
      }
      let QC = ZC instanceof AC && ZC.index < 0 ? null : ZC.parent,
        wC = CC.slice();
      return QC ? wC[zC] = QC : wC.splice(zC, 1), new eC(wC, ZC)
    }
    class eC {
      constructor(CC, zC) {
        this.heads = CC, this.node = zC
      }
      get next() {
        return vC(this.heads)
      }
    }
    class hC {
      get name() {
        return this.type.name
      }
      constructor(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = zC & ~MC.EnterBracketed, CC instanceof AC) this.yieldNode(CC);
        else {
          this._tree = CC.context.parent, this.buffer = CC.context;
          for (let zC = CC._parent; zC; zC = zC._parent) this.stack.unshift(zC.index);
          this.bufferNode = CC, this.yieldBuf(CC.index)
        }
      }
      yieldNode(CC) {
        return !!CC && (this._tree = CC, this.type = CC.type, this.from = CC.from, this.to = CC.to, !0)
      }
      yieldBuf(CC, zC) {
        this.index = CC;
        let {
          start: ZC,
          buffer: QC
        } = this.buffer;
        return this.type = zC || QC.set.types[QC.buffer[CC]], this.from = ZC + QC.buffer[CC + 1], this.to = ZC + QC.buffer[CC + 2], !0
      }
      yield(CC) {
        return !!CC && (CC instanceof AC ? (this.buffer = null, this.yieldNode(CC)) : (this.buffer = CC.context, this.yieldBuf(CC.index, CC.type)))
      }
      toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
      }
      enterChild(CC, zC, ZC) {
        if (!this.buffer) return this.yield(this._tree.nextChild(CC < 0 ? this._tree._tree.children.length - 1 : 0, CC, zC, ZC, this.mode));
        let {
          buffer: QC
        } = this.buffer, wC = QC.findChild(this.index + 4, QC.buffer[this.index + 3], CC, zC - this.buffer.start, ZC);
        return !(wC < 0) && (this.stack.push(this.index), this.yieldBuf(wC))
      }
      firstChild() {
        return this.enterChild(1, 0, 4)
      }
      lastChild() {
        return this.enterChild(-1, 0, 4)
      }
      childAfter(CC) {
        return this.enterChild(1, CC, 2)
      }
      childBefore(CC) {
        return this.enterChild(-1, CC, -2)
      }
      enter(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.mode;
        return this.buffer ? !(ZC & MC.ExcludeBuffers) && this.enterChild(1, CC, zC) : this.yield(this._tree.enter(CC, zC, ZC))
      }
      parent() {
        if (!this.buffer) return this.yieldNode(this.mode & MC.IncludeAnonymous ? this._tree._parent : this._tree.parent);
        if (this.stack.length) return this.yieldBuf(this.stack.pop());
        let CC = this.mode & MC.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        return this.buffer = null, this.yieldNode(CC)
      }
      sibling(CC) {
        if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + CC, CC, 0, 4, this.mode));
        let {
          buffer: zC
        } = this.buffer, ZC = this.stack.length - 1;
        if (CC < 0) {
          let CC = ZC < 0 ? 0 : this.stack[ZC] + 4;
          if (this.index != CC) return this.yieldBuf(zC.findChild(CC, this.index, -1, 0, 4))
        } else {
          let CC = zC.buffer[this.index + 3];
          if (CC < (ZC < 0 ? zC.buffer.length : zC.buffer[this.stack[ZC] + 3])) return this.yieldBuf(CC)
        }
        return ZC < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + CC, CC, 0, 4, this.mode))
      }
      nextSibling() {
        return this.sibling(1)
      }
      prevSibling() {
        return this.sibling(-1)
      }
      atLastNode(CC) {
        let zC, ZC, {
          buffer: QC
        } = this;
        if (QC) {
          if (CC > 0) {
            if (this.index < QC.buffer.buffer.length) return !1
          } else
            for (let CC = 0; CC < this.index; CC++)
              if (QC.buffer.buffer[CC + 3] < this.index) return !1;
          ({
            index: zC,
            parent: ZC
          } = QC)
        } else({
          index: zC,
          _parent: ZC
        } = this._tree);
        for (; ZC;
          ({
            index: zC,
            _parent: ZC
          } = ZC))
          if (zC > -1)
            for (let QC = zC + CC, wC = CC < 0 ? -1 : ZC._tree.children.length; QC != wC; QC += CC) {
              let CC = ZC._tree.children[QC];
              if (this.mode & MC.IncludeAnonymous || CC instanceof pC || !CC.type.isAnonymous || KC(CC)) return !1
            }
        return !0
      }
      move(CC, zC) {
        if (zC && this.enterChild(CC, 0, 4)) return !0;
        for (;;) {
          if (this.sibling(CC)) return !0;
          if (this.atLastNode(CC) || !this.parent()) return !1
        }
      }
      next() {
        let CC = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(1, CC)
      }
      prev() {
        let CC = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(-1, CC)
      }
      moveTo(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        for (;
          (this.from == this.to || (zC < 1 ? this.from >= CC : this.from > CC) || (zC > -1 ? this.to <= CC : this.to < CC)) && this.parent(););
        for (; this.enterChild(1, CC, zC););
        return this
      }
      get node() {
        if (!this.buffer) return this._tree;
        let CC = this.bufferNode,
          zC = null,
          ZC = 0;
        if (CC && CC.context == this.buffer) CC: for (let QC = this.index, wC = this.stack.length; wC >= 0;) {
          for (let bC = CC; bC; bC = bC._parent)
            if (bC.index == QC) {
              if (QC == this.index) return bC;
              zC = bC, ZC = wC + 1;
              break CC
            } QC = this.stack[--wC]
        }
        for (let QC = ZC; QC < this.stack.length; QC++) zC = new iC(this.buffer, zC, this.stack[QC]);
        return this.bufferNode = new iC(this.buffer, zC, this.index)
      }
      get tree() {
        return this.buffer ? null : this._tree._tree
      }
      iterate(CC, zC) {
        for (let ZC = 0;;) {
          let QC = !1;
          if (this.type.isAnonymous || !1 !== CC(this)) {
            if (this.firstChild()) {
              ZC++;
              continue
            }
            this.type.isAnonymous || (QC = !0)
          }
          for (;;) {
            if (QC && zC && zC(this), QC = this.type.isAnonymous, !ZC) return;
            if (this.nextSibling()) break;
            this.parent(), ZC--, QC = !0
          }
        }
      }
      matchContext(CC) {
        if (!this.buffer) return JC(this.node.parent, CC);
        let {
          buffer: zC
        } = this.buffer, {
          types: ZC
        } = zC.set;
        for (let QC = CC.length - 1, wC = this.stack.length - 1; QC >= 0; wC--) {
          if (wC < 0) return JC(this._tree, CC, QC);
          let bC = ZC[zC.buffer[this.stack[wC]]];
          if (!bC.isAnonymous) {
            if (CC[QC] && CC[QC] != bC.name) return !1;
            QC--
          }
        }
        return !0
      }
    }

    function KC(CC) {
      return CC.children.some((CC => CC instanceof pC || !CC.type.isAnonymous || KC(CC)))
    }
    const YC = new WeakMap;

    function dC(CC, zC) {
      if (!CC.isAnonymous || zC instanceof pC || zC.type != CC) return 1;
      let ZC = YC.get(zC);
      if (null == ZC) {
        ZC = 1;
        for (let QC of zC.children) {
          if (QC.type != CC || !(QC instanceof gC)) {
            ZC = 1;
            break
          }
          ZC += dC(CC, QC)
        }
        YC.set(zC, ZC)
      }
      return ZC
    }

    function mC(CC, zC, ZC, QC, wC, bC, nC, fC, oC) {
      let qC = 0;
      for (let MC = QC; MC < wC; MC++) qC += dC(CC, zC[MC]);
      let FC = Math.ceil(1.5 * qC / 8),
        WC = [],
        NC = [];
      return function zC(ZC, QC, wC, nC, fC) {
        for (let qC = wC; qC < nC;) {
          let wC = qC,
            MC = QC[qC],
            gC = dC(CC, ZC[qC]);
          for (qC++; qC < nC; qC++) {
            let zC = dC(CC, ZC[qC]);
            if (gC + zC >= FC) break;
            gC += zC
          }
          if (qC == wC + 1) {
            if (gC > FC) {
              let CC = ZC[wC];
              zC(CC.children, CC.positions, 0, CC.children.length, QC[wC] + fC);
              continue
            }
            WC.push(ZC[wC])
          } else {
            let zC = QC[qC - 1] + ZC[qC - 1].length - MC;
            WC.push(mC(CC, ZC, QC, wC, qC, MC, zC, null, oC))
          }
          NC.push(MC + fC - bC)
        }
      }(zC, ZC, QC, wC, 0), (fC || oC)(WC, NC, nC)
    }
    class HC {
      constructor() {
        this.map = new WeakMap
      }
      setBuffer(CC, zC, ZC) {
        let QC = this.map.get(CC);
        QC || this.map.set(CC, QC = new Map), QC.set(zC, ZC)
      }
      getBuffer(CC, zC) {
        let ZC = this.map.get(CC);
        return ZC && ZC.get(zC)
      }
      set(CC, zC) {
        CC instanceof iC ? this.setBuffer(CC.context.buffer, CC.index, zC) : CC instanceof AC && this.map.set(CC.tree, zC)
      }
      get(CC) {
        return CC instanceof iC ? this.getBuffer(CC.context.buffer, CC.index) : CC instanceof AC ? this.map.get(CC.tree) : void 0
      }
      cursorSet(CC, zC) {
        CC.buffer ? this.setBuffer(CC.buffer.buffer, CC.index, zC) : this.map.set(CC.tree, zC)
      }
      cursorGet(CC) {
        return CC.buffer ? this.getBuffer(CC.buffer.buffer, CC.index) : this.map.get(CC.tree)
      }
    }
    class EC {
      constructor(CC, zC, ZC, QC) {
        let wC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          bC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.from = CC, this.to = zC, this.tree = ZC, this.offset = QC, this.open = (wC ? 1 : 0) | (bC ? 2 : 0)
      }
      get openStart() {
        return (1 & this.open) > 0
      }
      get openEnd() {
        return (2 & this.open) > 0
      }
      static addTree(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          QC = [new EC(0, CC.length, CC, 0, !1, ZC)];
        for (let wC of zC) wC.to > CC.length && QC.push(wC);
        return QC
      }
      static applyChanges(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
        if (!zC.length) return CC;
        let QC = [],
          wC = 1,
          bC = CC.length ? CC[0] : null;
        for (let nC = 0, fC = 0, oC = 0;; nC++) {
          let qC = nC < zC.length ? zC[nC] : null,
            FC = qC ? qC.fromA : 1e9;
          if (FC - fC >= ZC)
            for (; bC && bC.from < FC;) {
              let zC = bC;
              if (fC >= zC.from || FC <= zC.to || oC) {
                let CC = Math.max(zC.from, fC) - oC,
                  ZC = Math.min(zC.to, FC) - oC;
                zC = CC >= ZC ? null : new EC(CC, ZC, zC.tree, zC.offset + oC, nC > 0, !!qC)
              }
              if (zC && QC.push(zC), bC.to > FC) break;
              bC = wC < CC.length ? CC[wC++] : null
            }
          if (!qC) break;
          fC = qC.toA, oC = qC.toA - qC.toB
        }
        return QC
      }
    }
    class lC {
      startParse(CC, zC, ZC) {
        return "string" == typeof CC && (CC = new XC(CC)), ZC = ZC ? ZC.length ? ZC.map((CC => new bC(CC.from, CC.to))) : [new bC(0, 0)] : [new bC(0, CC.length)], this.createParse(CC, zC || [], ZC)
      }
      parse(CC, zC, ZC) {
        let QC = this.startParse(CC, zC, ZC);
        for (;;) {
          let CC = QC.advance();
          if (CC) return CC
        }
      }
    }
    class XC {
      constructor(CC) {
        this.string = CC
      }
      get length() {
        return this.string.length
      }
      chunk(CC) {
        return this.string.slice(CC)
      }
      get lineChunks() {
        return !1
      }
      read(CC, zC) {
        return this.string.slice(CC, zC)
      }
    }
    new nC({
      perNode: !0
    })
  },
  41150: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => NC,
      c: () => oC,
      g: () => WC,
      i: () => YC
    });
    var QC = ZC(41144);
    let wC = 0;
    class bC {
      constructor(CC, zC, ZC, QC) {
        this.name = CC, this.set = zC, this.base = ZC, this.modified = QC, this.id = wC++
      }
      toString() {
        let {
          name: CC
        } = this;
        for (let zC of this.modified) zC.name && (CC = `${zC.name}(${CC})`);
        return CC
      }
      static define(CC, zC) {
        let ZC = "string" == typeof CC ? CC : "?";
        if (CC instanceof bC && (zC = CC), null === zC || void 0 === zC ? void 0 : zC.base) throw new Error("Can not derive from a modified tag");
        let QC = new bC(ZC, [], null, []);
        if (QC.set.push(QC), zC)
          for (let wC of zC.set) QC.set.push(wC);
        return QC
      }
      static defineModifier(CC) {
        let zC = new fC(CC);
        return CC => CC.modified.indexOf(zC) > -1 ? CC : fC.get(CC.base || CC, CC.modified.concat(zC).sort(((CC, zC) => CC.id - zC.id)))
      }
    }
    let nC = 0;
    class fC {
      constructor(CC) {
        this.name = CC, this.instances = [], this.id = nC++
      }
      static get(CC, zC) {
        if (!zC.length) return CC;
        let ZC = zC[0].instances.find((ZC => {
          return ZC.base == CC && (QC = zC, wC = ZC.modified, QC.length == wC.length && QC.every(((CC, zC) => CC == wC[zC])));
          var QC, wC
        }));
        if (ZC) return ZC;
        let QC = [],
          wC = new bC(CC.name, QC, CC, zC);
        for (let bC of zC) bC.instances.push(wC);
        let nC = function(CC) {
          let zC = [
            []
          ];
          for (let ZC = 0; ZC < CC.length; ZC++)
            for (let QC = 0, wC = zC.length; QC < wC; QC++) zC.push(zC[QC].concat(CC[ZC]));
          return zC.sort(((CC, zC) => zC.length - CC.length))
        }(zC);
        for (let bC of CC.set)
          if (!bC.modified.length)
            for (let CC of nC) QC.push(fC.get(bC, CC));
        return wC
      }
    }

    function oC(CC) {
      let zC = Object.create(null);
      for (let ZC in CC) {
        let QC = CC[ZC];
        Array.isArray(QC) || (QC = [QC]);
        for (let CC of ZC.split(" "))
          if (CC) {
            let ZC = [],
              wC = 2,
              bC = CC;
            for (let zC = 0;;) {
              if ("..." == bC && zC > 0 && zC + 3 == CC.length) {
                wC = 1;
                break
              }
              let QC = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(bC);
              if (!QC) throw new RangeError("Invalid path: " + CC);
              if (ZC.push("*" == QC[0] ? "" : '"' == QC[0][0] ? JSON.parse(QC[0]) : QC[0]), zC += QC[0].length, zC == CC.length) break;
              let nC = CC[zC++];
              if (zC == CC.length && "!" == nC) {
                wC = 0;
                break
              }
              if ("/" != nC) throw new RangeError("Invalid path: " + CC);
              bC = CC.slice(zC)
            }
            let nC = ZC.length - 1,
              fC = ZC[nC];
            if (!fC) throw new RangeError("Invalid path: " + CC);
            let oC = new FC(QC, wC, nC > 0 ? ZC.slice(0, nC) : null);
            zC[fC] = oC.sort(zC[fC])
          }
      }
      return qC.add(zC)
    }
    const qC = new QC.g({
      combine(CC, zC) {
        let ZC, QC, wC;
        for (; CC || zC;) {
          if (!CC || zC && CC.depth >= zC.depth ? (wC = zC, zC = zC.next) : (wC = CC, CC = CC.next), ZC && ZC.mode == wC.mode && !wC.context && !ZC.context) continue;
          let bC = new FC(wC.tags, wC.mode, wC.context);
          ZC ? ZC.next = bC : QC = bC, ZC = bC
        }
        return QC
      }
    });
    class FC {
      constructor(CC, zC, ZC, QC) {
        this.tags = CC, this.mode = zC, this.context = ZC, this.next = QC
      }
      get opaque() {
        return 0 == this.mode
      }
      get inherit() {
        return 1 == this.mode
      }
      sort(CC) {
        return !CC || CC.depth < this.depth ? (this.next = CC, this) : (CC.next = this.sort(CC.next), CC)
      }
      get depth() {
        return this.context ? this.context.length : 0
      }
    }

    function WC(CC, zC) {
      let ZC = Object.create(null);
      for (let bC of CC)
        if (Array.isArray(bC.tag))
          for (let CC of bC.tag) ZC[CC.id] = bC.class;
        else ZC[bC.tag.id] = bC.class;
      let {
        scope: QC,
        all: wC = null
      } = zC || {};
      return {
        style: CC => {
          let zC = wC;
          for (let QC of CC)
            for (let CC of QC.set) {
              let QC = ZC[CC.id];
              if (QC) {
                zC = zC ? zC + " " + QC : QC;
                break
              }
            }
          return zC
        },
        scope: QC
      }
    }

    function NC(CC, zC, ZC) {
      let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : CC.length,
        bC = new MC(QC, Array.isArray(zC) ? zC : [zC], ZC);
      bC.highlightRange(CC.cursor(), QC, wC, "", bC.highlighters), bC.flush(wC)
    }
    FC.empty = new FC([], 2, null);
    class MC {
      constructor(CC, zC, ZC) {
        this.at = CC, this.highlighters = zC, this.span = ZC, this.class = ""
      }
      startSpan(CC, zC) {
        zC != this.class && (this.flush(CC), CC > this.at && (this.at = CC), this.class = zC)
      }
      flush(CC) {
        CC > this.at && this.class && this.span(this.at, CC, this.class)
      }
      highlightRange(CC, zC, ZC, wC, bC) {
        let {
          type: nC,
          from: fC,
          to: oC
        } = CC;
        if (fC >= ZC || oC <= zC) return;
        nC.isTop && (bC = this.highlighters.filter((CC => !CC.scope || CC.scope(nC))));
        let WC = wC,
          NC = function(CC) {
            let zC = CC.type.prop(qC);
            for (; zC && zC.context && !CC.matchContext(zC.context);) zC = zC.next;
            return zC || null
          }(CC) || FC.empty,
          MC = function(CC, zC) {
            let ZC = null;
            for (let QC of CC) {
              let CC = QC.style(zC);
              CC && (ZC = ZC ? ZC + " " + CC : CC)
            }
            return ZC
          }(bC, NC.tags);
        if (MC && (WC && (WC += " "), WC += MC, 1 == NC.mode && (wC += (wC ? " " : "") + MC)), this.startSpan(Math.max(zC, fC), WC), NC.opaque) return;
        let gC = CC.tree && CC.tree.prop(QC.g.mounted);
        if (gC && gC.overlay) {
          let QC = CC.node.enter(gC.overlay[0].from + fC, 1),
            nC = this.highlighters.filter((CC => !CC.scope || CC.scope(gC.tree.type))),
            qC = CC.firstChild();
          for (let FC = 0, NC = fC;; FC++) {
            let MC = FC < gC.overlay.length ? gC.overlay[FC] : null,
              SC = MC ? MC.from + fC : oC,
              pC = Math.max(zC, NC),
              PC = Math.min(ZC, SC);
            if (pC < PC && qC)
              for (; CC.from < PC && (this.highlightRange(CC, pC, PC, wC, bC), this.startSpan(Math.min(PC, CC.to), WC), !(CC.to >= SC) && CC.nextSibling()););
            if (!MC || SC > ZC) break;
            NC = MC.to + fC, NC > zC && (this.highlightRange(QC.cursor(), Math.max(zC, MC.from + fC), Math.min(ZC, NC), "", nC), this.startSpan(Math.min(ZC, NC), WC))
          }
          qC && CC.parent()
        } else if (CC.firstChild()) {
          gC && (wC = "");
          do {
            if (!(CC.to <= zC)) {
              if (CC.from >= ZC) break;
              this.highlightRange(CC, zC, ZC, wC, bC), this.startSpan(Math.min(ZC, CC.to), WC)
            }
          } while (CC.nextSibling());
          CC.parent()
        }
      }
    }
    const gC = bC.define,
      SC = gC(),
      pC = gC(),
      PC = gC(pC),
      GC = gC(pC),
      RC = gC(),
      AC = gC(RC),
      xC = gC(RC),
      JC = gC(),
      IC = gC(JC),
      iC = gC(),
      vC = gC(),
      eC = gC(),
      hC = gC(eC),
      KC = gC(),
      YC = {
        comment: SC,
        lineComment: gC(SC),
        blockComment: gC(SC),
        docComment: gC(SC),
        name: pC,
        variableName: gC(pC),
        typeName: PC,
        tagName: gC(PC),
        propertyName: GC,
        attributeName: gC(GC),
        className: gC(pC),
        labelName: gC(pC),
        namespace: gC(pC),
        macroName: gC(pC),
        literal: RC,
        string: AC,
        docString: gC(AC),
        character: gC(AC),
        attributeValue: gC(AC),
        number: xC,
        integer: gC(xC),
        float: gC(xC),
        bool: gC(RC),
        regexp: gC(RC),
        escape: gC(RC),
        color: gC(RC),
        url: gC(RC),
        keyword: iC,
        self: gC(iC),
        null: gC(iC),
        atom: gC(iC),
        unit: gC(iC),
        modifier: gC(iC),
        operatorKeyword: gC(iC),
        controlKeyword: gC(iC),
        definitionKeyword: gC(iC),
        moduleKeyword: gC(iC),
        operator: vC,
        derefOperator: gC(vC),
        arithmeticOperator: gC(vC),
        logicOperator: gC(vC),
        bitwiseOperator: gC(vC),
        compareOperator: gC(vC),
        updateOperator: gC(vC),
        definitionOperator: gC(vC),
        typeOperator: gC(vC),
        controlOperator: gC(vC),
        punctuation: eC,
        separator: gC(eC),
        bracket: hC,
        angleBracket: gC(hC),
        squareBracket: gC(hC),
        paren: gC(hC),
        brace: gC(hC),
        content: JC,
        heading: IC,
        heading1: gC(IC),
        heading2: gC(IC),
        heading3: gC(IC),
        heading4: gC(IC),
        heading5: gC(IC),
        heading6: gC(IC),
        contentSeparator: gC(JC),
        list: gC(JC),
        quote: gC(JC),
        emphasis: gC(JC),
        strong: gC(JC),
        link: gC(JC),
        monospace: gC(JC),
        strikethrough: gC(JC),
        inserted: gC(),
        deleted: gC(),
        changed: gC(),
        invalid: gC(),
        meta: KC,
        documentMeta: gC(KC),
        annotation: gC(KC),
        processingInstruction: gC(KC),
        definition: bC.defineModifier("definition"),
        constant: bC.defineModifier("constant"),
        function: bC.defineModifier("function"),
        standard: bC.defineModifier("standard"),
        local: bC.defineModifier("local"),
        special: bC.defineModifier("special")
      };
    for (let dC in YC) {
      let CC = YC[dC];
      CC instanceof bC && (CC.name = dC)
    }
    WC([{
      tag: YC.link,
      class: "tok-link"
    }, {
      tag: YC.heading,
      class: "tok-heading"
    }, {
      tag: YC.emphasis,
      class: "tok-emphasis"
    }, {
      tag: YC.strong,
      class: "tok-strong"
    }, {
      tag: YC.keyword,
      class: "tok-keyword"
    }, {
      tag: YC.atom,
      class: "tok-atom"
    }, {
      tag: YC.bool,
      class: "tok-bool"
    }, {
      tag: YC.url,
      class: "tok-url"
    }, {
      tag: YC.labelName,
      class: "tok-labelName"
    }, {
      tag: YC.inserted,
      class: "tok-inserted"
    }, {
      tag: YC.deleted,
      class: "tok-deleted"
    }, {
      tag: YC.literal,
      class: "tok-literal"
    }, {
      tag: YC.string,
      class: "tok-string"
    }, {
      tag: YC.number,
      class: "tok-number"
    }, {
      tag: [YC.regexp, YC.escape, YC.special(YC.string)],
      class: "tok-string2"
    }, {
      tag: YC.variableName,
      class: "tok-variableName"
    }, {
      tag: YC.local(YC.variableName),
      class: "tok-variableName tok-local"
    }, {
      tag: YC.definition(YC.variableName),
      class: "tok-variableName tok-definition"
    }, {
      tag: YC.special(YC.variableName),
      class: "tok-variableName2"
    }, {
      tag: YC.definition(YC.propertyName),
      class: "tok-propertyName tok-definition"
    }, {
      tag: YC.typeName,
      class: "tok-typeName"
    }, {
      tag: YC.namespace,
      class: "tok-namespace"
    }, {
      tag: YC.className,
      class: "tok-className"
    }, {
      tag: YC.macroName,
      class: "tok-macroName"
    }, {
      tag: YC.propertyName,
      class: "tok-propertyName"
    }, {
      tag: YC.operator,
      class: "tok-operator"
    }, {
      tag: YC.comment,
      class: "tok-comment"
    }, {
      tag: YC.meta,
      class: "tok-meta"
    }, {
      tag: YC.invalid,
      class: "tok-invalid"
    }, {
      tag: YC.punctuation,
      class: "tok-punctuation"
    }])
  },
  41158: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => fC.j,
      g: () => nC.r,
      i: () => nC.w,
      k: () => nC.A,
      m: () => fC.o,
      q: () => IZ,
      s: () => fC.Q,
      t: () => fC.ib
    });
    var QC = ZC(1336),
      wC = ZC(1332),
      bC = ZC(48),
      nC = ZC(41125),
      fC = ZC(41128),
      oC = ZC(41142),
      qC = ZC(41144);

    function FC(CC, zC) {
      return ZC => {
        let {
          state: QC,
          dispatch: wC
        } = ZC;
        if (QC.readOnly) return !1;
        let bC = CC(zC, QC);
        return !!bC && (wC(QC.update(bC)), !0)
      }
    }
    const WC = FC(PC, 0),
      NC = FC(pC, 0),
      MC = FC(((CC, zC) => pC(CC, zC, function(CC) {
        let zC = [];
        for (let ZC of CC.selection.np) {
          let QC = CC.doc.lineAt(ZC.from),
            wC = ZC.to <= QC.to ? QC : CC.doc.lineAt(ZC.to);
          wC.from > QC.from && wC.from == ZC.to && (wC = ZC.to == QC.to + 1 ? QC : CC.doc.lineAt(ZC.to - 1));
          let bC = zC.length - 1;
          bC >= 0 && zC[bC].to > QC.from ? zC[bC].to = wC.to : zC.push({
            from: QC.from + /^\s*/.exec(QC.text)[0].length,
            to: wC.to
          })
        }
        return zC
      }(zC))), 0);

    function gC(CC, zC) {
      let ZC = CC.languageDataAt("commentTokens", zC, 1);
      return ZC.length ? ZC[0] : {}
    }
    const SC = 50;

    function pC(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zC.selection.np,
        QC = ZC.map((CC => gC(zC, CC.from).block));
      if (!QC.every((CC => CC))) return null;
      let wC = ZC.map(((CC, ZC) => function(CC, zC, ZC, QC) {
        let wC, bC, {
            open: nC,
            close: fC
          } = zC,
          oC = CC.sliceDoc(ZC - SC, ZC),
          qC = CC.sliceDoc(QC, QC + SC),
          FC = /\s*$/.exec(oC)[0].length,
          WC = /^\s*/.exec(qC)[0].length,
          NC = oC.length - FC;
        if (oC.slice(NC - nC.length, NC) == nC && qC.slice(WC, WC + fC.length) == fC) return {
          open: {
            pos: ZC - FC,
            margin: FC && 1
          },
          close: {
            pos: QC + WC,
            margin: WC && 1
          }
        };
        QC - ZC <= 2 * SC ? wC = bC = CC.sliceDoc(ZC, QC) : (wC = CC.sliceDoc(ZC, ZC + SC), bC = CC.sliceDoc(QC - SC, QC));
        let MC = /^\s*/.exec(wC)[0].length,
          gC = /\s*$/.exec(bC)[0].length,
          pC = bC.length - gC - fC.length;
        return wC.slice(MC, MC + nC.length) == nC && bC.slice(pC, pC + fC.length) == fC ? {
          open: {
            pos: ZC + MC + nC.length,
            margin: /\s/.test(wC.charAt(MC + nC.length)) ? 1 : 0
          },
          close: {
            pos: QC - gC - fC.length,
            margin: /\s/.test(bC.charAt(pC - 1)) ? 1 : 0
          }
        } : null
      }(zC, QC[ZC], CC.from, CC.to)));
      if (2 != CC && !wC.every((CC => CC))) return {
        changes: zC.changes(ZC.map(((CC, zC) => wC[zC] ? [] : [{
          from: CC.from,
          insert: QC[zC].open + " "
        }, {
          from: CC.to,
          insert: " " + QC[zC].close
        }])))
      };
      if (1 != CC && wC.some((CC => CC))) {
        let CC = [];
        for (let zC, ZC = 0; ZC < wC.length; ZC++)
          if (zC = wC[ZC]) {
            let wC = QC[ZC],
              {
                open: bC,
                close: nC
              } = zC;
            CC.push({
              from: bC.pos - wC.open.length,
              to: bC.pos + bC.margin
            }, {
              from: nC.pos - nC.margin,
              to: nC.pos + wC.close.length
            })
          } return {
          changes: CC
        }
      }
      return null
    }

    function PC(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zC.selection.np,
        QC = [],
        wC = -1;
      CC: for (let {
          from: bC,
          to: nC
        }
        of ZC) {
        let CC, ZC = QC.length,
          fC = 1e9;
        for (let oC = bC; oC <= nC;) {
          let ZC = zC.doc.lineAt(oC);
          if (void 0 == CC && (CC = gC(zC, ZC.from).line, !CC)) continue CC;
          if (ZC.from > wC && (bC == nC || nC > ZC.from)) {
            wC = ZC.from;
            let zC = /^\s*/.exec(ZC.text)[0].length,
              bC = zC == ZC.length,
              nC = ZC.text.slice(zC, zC + CC.length) == CC ? zC : -1;
            zC < ZC.text.length && zC < fC && (fC = zC), QC.push({
              line: ZC,
              comment: nC,
              token: CC,
              indent: zC,
              empty: bC,
              single: !1
            })
          }
          oC = ZC.to + 1
        }
        if (fC < 1e9)
          for (let zC = ZC; zC < QC.length; zC++) QC[zC].indent < QC[zC].line.text.length && (QC[zC].indent = fC);
        QC.length == ZC + 1 && (QC[ZC].single = !0)
      }
      if (2 != CC && QC.some((CC => CC.comment < 0 && (!CC.empty || CC.single)))) {
        let CC = [];
        for (let {
            line: zC,
            token: wC,
            indent: bC,
            empty: nC,
            single: fC
          }
          of QC) !fC && nC || CC.push({
          from: zC.from + bC,
          insert: wC + " "
        });
        let ZC = zC.changes(CC);
        return {
          changes: ZC,
          selection: zC.selection.map(ZC, 1)
        }
      }
      if (1 != CC && QC.some((CC => CC.comment >= 0))) {
        let CC = [];
        for (let {
            line: zC,
            comment: ZC,
            token: wC
          }
          of QC)
          if (ZC >= 0) {
            let QC = zC.from + ZC,
              bC = QC + wC.length;
            " " == zC.text[bC - zC.from] && bC++, CC.push({
              from: QC,
              to: bC
            })
          } return {
          changes: CC
        }
      }
      return null
    }
    const GC = nC.d.define(),
      RC = nC.d.define(),
      AC = nC.n.define(),
      xC = nC.n.define({
        combine: CC => (0, nC.P)(CC, {
          minDepth: 100,
          newGroupDelay: 500,
          joinToEvent: (CC, zC) => zC
        }, {
          minDepth: Math.max,
          newGroupDelay: Math.min,
          joinToEvent: (CC, zC) => (ZC, QC) => CC(ZC, QC) || zC(ZC, QC)
        })
      }),
      JC = nC.A.define({
        create: () => rC.empty,
        update(CC, zC) {
          let ZC = zC.state.facet(xC),
            QC = zC.annotation(GC);
          if (QC) {
            let wC = KC.fromTransaction(zC, QC.selection),
              bC = QC.side,
              nC = 0 == bC ? CC.undone : CC.done;
            return nC = wC ? YC(nC, nC.length, ZC.minDepth, wC) : EC(nC, zC.startState.selection), new rC(0 == bC ? QC.rest : nC, 0 == bC ? nC : QC.rest)
          }
          let wC = zC.annotation(RC);
          if ("full" != wC && "before" != wC || (CC = CC.isolate()), !1 === zC.annotation(nC.F.addToHistory)) return zC.changes.empty ? CC : CC.addMapping(zC.changes.desc);
          let bC = KC.fromTransaction(zC),
            fC = zC.annotation(nC.F.time),
            oC = zC.annotation(nC.F.userEvent);
          return bC ? CC = CC.addChanges(bC, fC, oC, ZC, zC) : zC.selection && (CC = CC.addSelection(zC.startState.selection, fC, oC, ZC.newGroupDelay)), "full" != wC && "after" != wC || (CC = CC.isolate()), CC
        },
        toJSON: CC => ({
          done: CC.done.map((CC => CC.toJSON())),
          undone: CC.undone.map((CC => CC.toJSON()))
        }),
        fromJSON: CC => new rC(CC.done.map(KC.fromJSON), CC.undone.map(KC.fromJSON))
      });

    function IC(CC, zC) {
      return function(ZC) {
        let {
          state: QC,
          dispatch: wC
        } = ZC;
        if (!zC && QC.readOnly) return !1;
        let bC = QC.field(JC, !1);
        if (!bC) return !1;
        let nC = bC.pop(CC, QC, zC);
        return !!nC && (wC(nC), !0)
      }
    }
    const iC = IC(0, !1),
      vC = IC(1, !1),
      eC = IC(0, !0),
      hC = IC(1, !0);
    class KC {
      constructor(CC, zC, ZC, QC, wC) {
        this.changes = CC, this.effects = zC, this.mapped = ZC, this.startSelection = QC, this.selectionsAfter = wC
      }
      setSelAfter(CC) {
        return new KC(this.changes, this.effects, this.mapped, this.startSelection, CC)
      }
      toJSON() {
        var CC, zC, ZC;
        return {
          changes: null === (CC = this.changes) || void 0 === CC ? void 0 : CC.toJSON(),
          mapped: null === (zC = this.mapped) || void 0 === zC ? void 0 : zC.toJSON(),
          startSelection: null === (ZC = this.startSelection) || void 0 === ZC ? void 0 : ZC.toJSON(),
          selectionsAfter: this.selectionsAfter.map((CC => CC.toJSON()))
        }
      }
      static fromJSON(CC) {
        return new KC(CC.changes && nC.ChangeSet.fromJSON(CC.changes), [], CC.mapped && nC.e.fromJSON(CC.mapped), CC.startSelection && nC.i.fromJSON(CC.startSelection), CC.selectionsAfter.map(nC.i.fromJSON))
      }
      static fromTransaction(CC, zC) {
        let ZC = mC;
        for (let QC of CC.startState.facet(AC)) {
          let zC = QC(CC);
          zC.length && (ZC = ZC.concat(zC))
        }
        return !ZC.length && CC.changes.empty ? null : new KC(CC.changes.invert(CC.startState.doc), ZC, void 0, zC || CC.startState.selection, mC)
      }
      static selection(CC) {
        return new KC(void 0, mC, void 0, void 0, CC)
      }
    }

    function YC(CC, zC, ZC, QC) {
      let wC = zC + 1 > ZC + 20 ? zC - ZC - 1 : 0,
        bC = CC.slice(wC, zC);
      return bC.push(QC), bC
    }

    function dC(CC, zC) {
      return CC.length ? zC.length ? CC.concat(zC) : CC : zC
    }
    const mC = [],
      HC = 200;

    function EC(CC, zC) {
      if (CC.length) {
        let ZC = CC[CC.length - 1],
          QC = ZC.selectionsAfter.slice(Math.max(0, ZC.selectionsAfter.length - HC));
        return QC.length && QC[QC.length - 1].eq(zC) ? CC : (QC.push(zC), YC(CC, CC.length - 1, 1e9, ZC.setSelAfter(QC)))
      }
      return [KC.selection([zC])]
    }

    function lC(CC) {
      let zC = CC[CC.length - 1],
        ZC = CC.slice();
      return ZC[CC.length - 1] = zC.setSelAfter(zC.selectionsAfter.slice(0, zC.selectionsAfter.length - 1)), ZC
    }

    function XC(CC, zC) {
      if (!CC.length) return CC;
      let ZC = CC.length,
        QC = mC;
      for (; ZC;) {
        let wC = cC(CC[ZC - 1], zC, QC);
        if (wC.changes && !wC.changes.empty || wC.effects.length) {
          let zC = CC.slice(0, ZC);
          return zC[ZC - 1] = wC, zC
        }
        zC = wC.mapped, ZC--, QC = wC.selectionsAfter
      }
      return QC.length ? [KC.selection(QC)] : mC
    }

    function cC(CC, zC, ZC) {
      let QC = dC(CC.selectionsAfter.length ? CC.selectionsAfter.map((CC => CC.map(zC))) : mC, ZC);
      if (!CC.changes) return KC.selection(QC);
      let wC = CC.changes.map(zC),
        bC = zC.mapDesc(CC.changes, !0),
        fC = CC.mapped ? CC.mapped.composeDesc(bC) : bC;
      return new KC(wC, nC.w.mapEffects(CC.effects, zC), fC, CC.startSelection.map(bC), QC)
    }
    const uC = /^(input\.type|delete)($|\.)/;
    class rC {
      constructor(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        this.done = CC, this.undone = zC, this.prevTime = ZC, this.prevUserEvent = QC
      }
      isolate() {
        return this.prevTime ? new rC(this.done, this.undone) : this
      }
      addChanges(CC, zC, ZC, QC, wC) {
        let bC = this.done,
          fC = bC[bC.length - 1];
        return bC = fC && fC.changes && !fC.changes.empty && CC.changes && (!ZC || uC.test(ZC)) && (!fC.selectionsAfter.length && zC - this.prevTime < QC.newGroupDelay && QC.joinToEvent(wC, function(CC, zC) {
          let ZC = [],
            QC = !1;
          return CC.iterChangedRanges(((CC, zC) => ZC.push(CC, zC))), zC.iterChangedRanges(((CC, zC, wC, bC) => {
            for (let nC = 0; nC < ZC.length;) {
              let CC = ZC[nC++],
                zC = ZC[nC++];
              bC >= CC && wC <= zC && (QC = !0)
            }
          })), QC
        }(fC.changes, CC.changes)) || "input.type.compose" == ZC) ? YC(bC, bC.length - 1, QC.minDepth, new KC(CC.changes.compose(fC.changes), dC(nC.w.mapEffects(CC.effects, fC.changes), fC.effects), fC.mapped, fC.startSelection, mC)) : YC(bC, bC.length, QC.minDepth, CC), new rC(bC, mC, zC, ZC)
      }
      addSelection(CC, zC, ZC, QC) {
        let wC = this.done.length ? this.done[this.done.length - 1].selectionsAfter : mC;
        return wC.length > 0 && zC - this.prevTime < QC && ZC == this.prevUserEvent && ZC && /^select($|\.)/.test(ZC) && (bC = wC[wC.length - 1], nC = CC, bC.np.length == nC.np.length && 0 === bC.np.filter(((CC, zC) => CC.empty != nC.np[zC].empty)).length) ? this : new rC(EC(this.done, CC), this.undone, zC, ZC);
        var bC, nC
      }
      addMapping(CC) {
        return new rC(XC(this.done, CC), XC(this.undone, CC), this.prevTime, this.prevUserEvent)
      }
      pop(CC, zC, ZC) {
        let QC = 0 == CC ? this.done : this.undone;
        if (0 == QC.length) return null;
        let wC = QC[QC.length - 1],
          bC = wC.selectionsAfter[0] || (wC.startSelection ? wC.startSelection.map(wC.changes.invertedDesc, 1) : zC.selection);
        if (ZC && wC.selectionsAfter.length) return zC.update({
          selection: wC.selectionsAfter[wC.selectionsAfter.length - 1],
          annotations: GC.of({
            side: CC,
            rest: lC(QC),
            selection: bC
          }),
          userEvent: 0 == CC ? "select.undo" : "select.redo",
          scrollIntoView: !0
        });
        if (wC.changes) {
          let ZC = 1 == QC.length ? mC : QC.slice(0, QC.length - 1);
          return wC.mapped && (ZC = XC(ZC, wC.mapped)), zC.update({
            changes: wC.changes,
            selection: wC.startSelection,
            effects: wC.effects,
            annotations: GC.of({
              side: CC,
              rest: ZC,
              selection: bC
            }),
            filter: !1,
            userEvent: 0 == CC ? "undo" : "redo",
            scrollIntoView: !0
          })
        }
        return null
      }
    }
    rC.empty = new rC(mC, mC);
    const sC = [{
      key: "Mod-z",
      run: iC,
      preventDefault: !0
    }, {
      key: "Mod-y",
      mac: "Mod-Shift-z",
      run: vC,
      preventDefault: !0
    }, {
      linux: "Ctrl-Shift-z",
      run: vC,
      preventDefault: !0
    }, {
      key: "Mod-u",
      run: eC,
      preventDefault: !0
    }, {
      key: "Alt-u",
      mac: "Mod-Shift-u",
      run: hC,
      preventDefault: !0
    }];

    function TC(CC, zC) {
      return nC.i.create(CC.np.map(zC), CC.mainIndex)
    }

    function aC(CC, zC) {
      return CC.update({
        selection: zC,
        scrollIntoView: !0,
        userEvent: "select"
      })
    }

    function tC(CC, zC) {
      let {
        state: ZC,
        dispatch: QC
      } = CC, wC = TC(ZC.selection, zC);
      return !wC.eq(ZC.selection, !0) && (QC(aC(ZC, wC)), !0)
    }

    function DC(CC, zC) {
      return nC.i.cursor(zC ? CC.to : CC.from)
    }

    function jC(CC, zC) {
      return tC(CC, (ZC => ZC.empty ? CC.moveByChar(ZC, zC) : DC(ZC, zC)))
    }

    function yC(CC) {
      return CC.textDirectionAt(CC.state.selection.main.head) == fC.i.LTR
    }
    const LC = CC => jC(CC, !yC(CC)),
      UC = CC => jC(CC, yC(CC));

    function BC(CC, zC) {
      return tC(CC, (ZC => ZC.empty ? CC.moveByGroup(ZC, zC) : DC(ZC, zC)))
    }
    "undefined" != typeof Intl && Intl.Segmenter;

    function OC(CC, zC, ZC) {
      if (zC.type.prop(ZC)) return !0;
      let QC = zC.to - zC.from;
      return QC && (QC > 2 || /[^\s,.;:]/.test(CC.sliceDoc(zC.from, zC.to))) || zC.firstChild
    }

    function kC(CC, zC, ZC) {
      let QC, wC, bC = (0, oC.gb)(CC).resolveInner(zC.head),
        fC = ZC ? qC.g.closedBy : qC.g.openedBy;
      for (let nC = zC.head;;) {
        let zC = ZC ? bC.childAfter(nC) : bC.childBefore(nC);
        if (!zC) break;
        OC(CC, zC, fC) ? bC = zC : nC = ZC ? zC.to : zC.from
      }
      return wC = bC.type.prop(fC) && (QC = ZC ? (0, oC.X)(CC, bC.from, 1) : (0, oC.X)(CC, bC.to, -1)) && QC.matched ? ZC ? QC.end.to : QC.end.from : ZC ? bC.to : bC.from, nC.i.cursor(wC, ZC ? -1 : 1)
    }

    function VC(CC, zC) {
      return tC(CC, (ZC => {
        if (!ZC.empty) return DC(ZC, zC);
        let QC = CC.moveVertically(ZC, zC);
        return QC.head != ZC.head ? QC : CC.moveToLineBoundary(ZC, zC)
      }))
    }
    const Cz = CC => VC(CC, !1),
      zz = CC => VC(CC, !0);

    function Zz(CC) {
      let zC, ZC = CC.scrollDOM.clientHeight < CC.scrollDOM.scrollHeight - 2,
        QC = 0,
        wC = 0;
      if (ZC) {
        for (let zC of CC.state.facet(fC.j.scrollMargins)) {
          let ZC = zC(CC);
          (null === ZC || void 0 === ZC ? void 0 : ZC.top) && (QC = Math.max(null === ZC || void 0 === ZC ? void 0 : ZC.top, QC)), (null === ZC || void 0 === ZC ? void 0 : ZC.bottom) && (wC = Math.max(null === ZC || void 0 === ZC ? void 0 : ZC.bottom, wC))
        }
        zC = CC.scrollDOM.clientHeight - QC - wC
      } else zC = (CC.dom.ownerDocument.defaultView || window).innerHeight;
      return {
        marginTop: QC,
        marginBottom: wC,
        selfScroll: ZC,
        height: Math.max(CC.defaultLineHeight, zC - 5)
      }
    }

    function Qz(CC, zC) {
      let ZC, QC = Zz(CC),
        {
          state: wC
        } = CC,
        bC = TC(wC.selection, (ZC => ZC.empty ? CC.moveVertically(ZC, zC, QC.height) : DC(ZC, zC)));
      if (bC.eq(wC.selection)) return !1;
      if (QC.selfScroll) {
        let zC = CC.coordsAtPos(wC.selection.main.head),
          nC = CC.scrollDOM.getBoundingClientRect(),
          oC = nC.top + QC.marginTop,
          qC = nC.bottom - QC.marginBottom;
        zC && zC.top > oC && zC.bottom < qC && (ZC = fC.j.scrollIntoView(bC.main.head, {
          y: "start",
          yMargin: zC.top - oC
        }))
      }
      return CC.dispatch(aC(wC, bC), {
        effects: ZC
      }), !0
    }
    const wz = CC => Qz(CC, !1),
      bz = CC => Qz(CC, !0);

    function nz(CC, zC, ZC) {
      let QC = CC.lineBlockAt(zC.head),
        wC = CC.moveToLineBoundary(zC, ZC);
      if (wC.head == zC.head && wC.head != (ZC ? QC.to : QC.from) && (wC = CC.moveToLineBoundary(zC, ZC, !1)), !ZC && wC.head == QC.from && QC.length) {
        let ZC = /^\s*/.exec(CC.state.sliceDoc(QC.from, Math.min(QC.from + 100, QC.to)))[0].length;
        ZC && zC.head != QC.from + ZC && (wC = nC.i.cursor(QC.from + ZC))
      }
      return wC
    }

    function fz(CC, zC, ZC) {
      let QC = !1,
        wC = TC(CC.selection, (zC => {
          let wC = (0, oC.X)(CC, zC.head, -1) || (0, oC.X)(CC, zC.head, 1) || zC.head > 0 && (0, oC.X)(CC, zC.head - 1, 1) || zC.head < CC.doc.length && (0, oC.X)(CC, zC.head + 1, -1);
          if (!wC || !wC.end) return zC;
          QC = !0;
          let bC = wC.start.from == zC.head ? wC.end.to : wC.end.from;
          return ZC ? nC.i.range(zC.anchor, bC) : nC.i.cursor(bC)
        }));
      return !!QC && (zC(aC(CC, wC)), !0)
    }

    function oz(CC, zC) {
      let ZC = TC(CC.state.selection, (CC => {
        let ZC = zC(CC);
        return nC.i.range(CC.anchor, ZC.head, ZC.goalColumn, ZC.bidiLevel || void 0, ZC.assoc)
      }));
      return !ZC.eq(CC.state.selection) && (CC.dispatch(aC(CC.state, ZC)), !0)
    }

    function qz(CC, zC) {
      return oz(CC, (ZC => CC.moveByChar(ZC, zC)))
    }
    const Fz = CC => qz(CC, !yC(CC)),
      Wz = CC => qz(CC, yC(CC));

    function Nz(CC, zC) {
      return oz(CC, (ZC => CC.moveByGroup(ZC, zC)))
    }

    function Mz(CC, zC) {
      return oz(CC, (ZC => CC.moveVertically(ZC, zC)))
    }
    const gz = CC => Mz(CC, !1),
      Sz = CC => Mz(CC, !0);

    function pz(CC, zC) {
      return oz(CC, (ZC => CC.moveVertically(ZC, zC, Zz(CC).height)))
    }
    const Pz = CC => pz(CC, !1),
      Gz = CC => pz(CC, !0),
      Rz = CC => {
        let {
          state: zC,
          dispatch: ZC
        } = CC;
        return ZC(aC(zC, {
          anchor: 0
        })), !0
      },
      Az = CC => {
        let {
          state: zC,
          dispatch: ZC
        } = CC;
        return ZC(aC(zC, {
          anchor: zC.doc.length
        })), !0
      },
      xz = CC => {
        let {
          state: zC,
          dispatch: ZC
        } = CC;
        return ZC(aC(zC, {
          anchor: zC.selection.main.anchor,
          head: 0
        })), !0
      },
      Jz = CC => {
        let {
          state: zC,
          dispatch: ZC
        } = CC;
        return ZC(aC(zC, {
          anchor: zC.selection.main.anchor,
          head: zC.doc.length
        })), !0
      };

    function Iz(CC, zC) {
      let {
        state: ZC
      } = CC, QC = ZC.selection, wC = ZC.selection.np.slice();
      for (let bC of ZC.selection.np) {
        let QC = ZC.doc.lineAt(bC.head);
        if (zC ? QC.to < CC.state.doc.length : QC.from > 0)
          for (let ZC = bC;;) {
            let bC = CC.moveVertically(ZC, zC);
            if (bC.head < QC.from || bC.head > QC.to) {
              wC.some((CC => CC.head == bC.head)) || wC.push(bC);
              break
            }
            if (bC.head == ZC.head) break;
            ZC = bC
          }
      }
      return wC.length != QC.np.length && (CC.dispatch(aC(ZC, nC.i.create(wC, wC.length - 1))), !0)
    }

    function iz(CC, zC) {
      if (CC.state.readOnly) return !1;
      let ZC = "delete.selection",
        {
          state: QC
        } = CC,
        wC = QC.changeByRange((QC => {
          let {
            from: wC,
            to: bC
          } = QC;
          if (wC == bC) {
            let nC = zC(QC);
            nC < wC ? (ZC = "delete.backward", nC = vz(CC, nC, !1)) : nC > wC && (ZC = "delete.forward", nC = vz(CC, nC, !0)), wC = Math.min(wC, nC), bC = Math.max(bC, nC)
          } else wC = vz(CC, wC, !1), bC = vz(CC, bC, !0);
          return wC == bC ? {
            range: QC
          } : {
            changes: {
              from: wC,
              to: bC
            },
            range: nC.i.cursor(wC, wC < QC.head ? -1 : 1)
          }
        }));
      return !wC.changes.empty && (CC.dispatch(QC.update(wC, {
        scrollIntoView: !0,
        userEvent: ZC,
        effects: "delete.selection" == ZC ? fC.j.announce.of(QC.phrase("Selection deleted")) : void 0
      })), !0)
    }

    function vz(CC, zC, ZC) {
      if (CC instanceof fC.j)
        for (let QC of CC.state.facet(fC.j.atomicRanges).map((zC => zC(CC)))) QC.between(zC, zC, ((CC, QC) => {
          CC < zC && QC > zC && (zC = ZC ? QC : CC)
        }));
      return zC
    }
    const ez = (CC, zC, ZC) => iz(CC, (QC => {
        let wC, bC, fC = QC.from,
          {
            state: qC
          } = CC,
          FC = qC.doc.lineAt(fC);
        if (ZC && !zC && fC > FC.from && fC < FC.from + 200 && !/[^ \t]/.test(wC = FC.text.slice(0, fC - FC.from))) {
          if ("\t" == wC[wC.length - 1]) return fC - 1;
          let CC = (0, nC.S)(wC, qC.tabSize) % (0, oC.H)(qC) || (0, oC.H)(qC);
          for (let zC = 0; zC < CC && " " == wC[wC.length - 1 - zC]; zC++) fC--;
          bC = fC
        } else bC = (0, nC.V)(FC.text, fC - FC.from, zC, zC) + FC.from, bC == fC && FC.number != (zC ? qC.doc.lines : 1) ? bC += zC ? 1 : -1 : !zC && /[\ufe00-\ufe0f]/.test(FC.text.slice(bC - FC.from, fC - FC.from)) && (bC = (0, nC.V)(FC.text, bC - FC.from, !1, !1) + FC.from);
        return bC
      })),
      hz = CC => ez(CC, !1, !0),
      Kz = CC => ez(CC, !0, !1),
      Yz = (CC, zC) => iz(CC, (ZC => {
        let QC = ZC.head,
          {
            state: wC
          } = CC,
          bC = wC.doc.lineAt(QC),
          fC = wC.charCategorizer(QC);
        for (let CC = null;;) {
          if (QC == (zC ? bC.to : bC.from)) {
            QC == ZC.head && bC.number != (zC ? wC.doc.lines : 1) && (QC += zC ? 1 : -1);
            break
          }
          let oC = (0, nC.V)(bC.text, QC - bC.from, zC) + bC.from,
            qC = bC.text.slice(Math.min(QC, oC) - bC.from, Math.max(QC, oC) - bC.from),
            FC = fC(qC);
          if (null != CC && FC != CC) break;
          " " == qC && QC == ZC.head || (CC = FC), QC = oC
        }
        return QC
      })),
      dz = CC => Yz(CC, !1);

    function mz(CC) {
      let zC = [],
        ZC = -1;
      for (let QC of CC.selection.np) {
        let wC = CC.doc.lineAt(QC.from),
          bC = CC.doc.lineAt(QC.to);
        if (QC.empty || QC.to != bC.from || (bC = CC.doc.lineAt(QC.to - 1)), ZC >= wC.number) {
          let CC = zC[zC.length - 1];
          CC.to = bC.to, CC.np.push(QC)
        } else zC.push({
          from: wC.from,
          to: bC.to,
          np: [QC]
        });
        ZC = bC.number + 1
      }
      return zC
    }

    function Hz(CC, zC, ZC) {
      if (CC.readOnly) return !1;
      let QC = [],
        wC = [];
      for (let bC of mz(CC)) {
        if (ZC ? bC.to == CC.doc.length : 0 == bC.from) continue;
        let zC = CC.doc.lineAt(ZC ? bC.to + 1 : bC.from - 1),
          fC = zC.length + 1;
        if (ZC) {
          QC.push({
            from: bC.to,
            to: zC.to
          }, {
            from: bC.from,
            insert: zC.text + CC.lineBreak
          });
          for (let zC of bC.np) wC.push(nC.i.range(Math.min(CC.doc.length, zC.anchor + fC), Math.min(CC.doc.length, zC.head + fC)))
        } else {
          QC.push({
            from: zC.from,
            to: bC.from
          }, {
            from: bC.to,
            insert: CC.lineBreak + zC.text
          });
          for (let CC of bC.np) wC.push(nC.i.range(CC.anchor - fC, CC.head - fC))
        }
      }
      return !!QC.length && (zC(CC.update({
        changes: QC,
        scrollIntoView: !0,
        selection: nC.i.create(wC, CC.selection.mainIndex),
        userEvent: "move.line"
      })), !0)
    }

    function Ez(CC, zC, ZC) {
      if (CC.readOnly) return !1;
      let QC = [];
      for (let bC of mz(CC)) ZC ? QC.push({
        from: bC.from,
        insert: CC.doc.slice(bC.from, bC.to) + CC.lineBreak
      }) : QC.push({
        from: bC.to,
        insert: CC.lineBreak + CC.doc.slice(bC.from, bC.to)
      });
      let wC = CC.changes(QC);
      return zC(CC.update({
        changes: wC,
        selection: CC.selection.map(wC, ZC ? 1 : -1),
        scrollIntoView: !0,
        userEvent: "input.copyline"
      })), !0
    }
    const lz = Xz(!1);

    function Xz(CC) {
      return zC => {
        let {
          state: ZC,
          dispatch: QC
        } = zC;
        if (ZC.readOnly) return !1;
        let wC = ZC.changeByRange((zC => {
          let {
            from: QC,
            to: wC
          } = zC, bC = ZC.doc.lineAt(QC), fC = !CC && QC == wC && function(CC, zC) {
            if (/\(\)|\[\]|\{\}/.test(CC.sliceDoc(zC - 1, zC + 1))) return {
              from: zC,
              to: zC
            };
            let ZC, QC = (0, oC.gb)(CC).resolveInner(zC),
              wC = QC.childBefore(zC),
              bC = QC.childAfter(zC);
            return wC && bC && wC.to <= zC && bC.from >= zC && (ZC = wC.type.prop(qC.g.closedBy)) && ZC.indexOf(bC.name) > -1 && CC.doc.lineAt(wC.to).from == CC.doc.lineAt(bC.from).from && !/\S/.test(CC.sliceDoc(wC.to, bC.from)) ? {
              from: wC.to,
              to: bC.from
            } : null
          }(ZC, QC);
          CC && (QC = wC = (wC <= bC.to ? bC : ZC.doc.lineAt(wC)).to);
          let FC = new oC.c(ZC, {
              simulateBreak: QC,
              simulateDoubleBreak: !!fC
            }),
            WC = (0, oC.K)(FC, QC);
          for (null == WC && (WC = (0, nC.S)(/^\s*/.exec(ZC.doc.lineAt(QC).text)[0], ZC.tabSize)); wC < bC.to && /\s/.test(bC.text[wC - bC.from]);) wC++;
          fC ? ({
            from: QC,
            to: wC
          } = fC) : QC > bC.from && QC < bC.from + 100 && !/\S/.test(bC.text.slice(0, QC)) && (QC = bC.from);
          let NC = ["", (0, oC.T)(ZC, WC)];
          return fC && NC.push((0, oC.T)(ZC, FC.lineIndent(bC.from, -1))), {
            changes: {
              from: QC,
              to: wC,
              insert: nC.B.of(NC)
            },
            range: nC.i.cursor(QC + 1 + NC[1].length)
          }
        }));
        return QC(ZC.update(wC, {
          scrollIntoView: !0,
          userEvent: "input"
        })), !0
      }
    }

    function cz(CC, zC) {
      let ZC = -1;
      return CC.changeByRange((QC => {
        let wC = [];
        for (let nC = QC.from; nC <= QC.to;) {
          let bC = CC.doc.lineAt(nC);
          bC.number > ZC && (QC.empty || QC.to > bC.from) && (zC(bC, wC, QC), ZC = bC.number), nC = bC.to + 1
        }
        let bC = CC.changes(wC);
        return {
          changes: wC,
          range: nC.i.range(bC.mapPos(QC.anchor, 1), bC.mapPos(QC.head, 1))
        }
      }))
    }
    const uz = CC => {
        let {
          state: zC,
          dispatch: ZC
        } = CC;
        return !zC.readOnly && (ZC(zC.update(cz(zC, ((CC, ZC) => {
          ZC.push({
            from: CC.from,
            insert: zC.facet(oC.U)
          })
        })), {
          userEvent: "input.indent"
        })), !0)
      },
      rz = CC => {
        let {
          state: zC,
          dispatch: ZC
        } = CC;
        return !zC.readOnly && (ZC(zC.update(cz(zC, ((CC, ZC) => {
          let QC = /^\s*/.exec(CC.text)[0];
          if (!QC) return;
          let wC = (0, nC.S)(QC, zC.tabSize),
            bC = 0,
            fC = (0, oC.T)(zC, Math.max(0, wC - (0, oC.H)(zC)));
          for (; bC < QC.length && bC < fC.length && QC.charCodeAt(bC) == fC.charCodeAt(bC);) bC++;
          ZC.push({
            from: CC.from + bC,
            to: CC.from + QC.length,
            insert: fC.slice(bC)
          })
        })), {
          userEvent: "delete.dedent"
        })), !0)
      },
      sz = [{
        key: "Alt-ArrowLeft",
        mac: "Ctrl-ArrowLeft",
        run: CC => tC(CC, (zC => kC(CC.state, zC, !yC(CC)))),
        shift: CC => oz(CC, (zC => kC(CC.state, zC, !yC(CC))))
      }, {
        key: "Alt-ArrowRight",
        mac: "Ctrl-ArrowRight",
        run: CC => tC(CC, (zC => kC(CC.state, zC, yC(CC)))),
        shift: CC => oz(CC, (zC => kC(CC.state, zC, yC(CC))))
      }, {
        key: "Alt-ArrowUp",
        run: CC => {
          let {
            state: zC,
            dispatch: ZC
          } = CC;
          return Hz(zC, ZC, !1)
        }
      }, {
        key: "Shift-Alt-ArrowUp",
        run: CC => {
          let {
            state: zC,
            dispatch: ZC
          } = CC;
          return Ez(zC, ZC, !1)
        }
      }, {
        key: "Alt-ArrowDown",
        run: CC => {
          let {
            state: zC,
            dispatch: ZC
          } = CC;
          return Hz(zC, ZC, !0)
        }
      }, {
        key: "Shift-Alt-ArrowDown",
        run: CC => {
          let {
            state: zC,
            dispatch: ZC
          } = CC;
          return Ez(zC, ZC, !0)
        }
      }, {
        key: "Mod-Alt-ArrowUp",
        run: CC => Iz(CC, !1)
      }, {
        key: "Mod-Alt-ArrowDown",
        run: CC => Iz(CC, !0)
      }, {
        key: "Escape",
        run: CC => {
          let {
            state: zC,
            dispatch: ZC
          } = CC, QC = zC.selection, wC = null;
          return QC.np.length > 1 ? wC = nC.i.create([QC.main]) : QC.main.empty || (wC = nC.i.create([nC.i.cursor(QC.main.head)])), !!wC && (ZC(aC(zC, wC)), !0)
        }
      }, {
        key: "Mod-Enter",
        run: Xz(!0)
      }, {
        key: "Alt-l",
        mac: "Ctrl-l",
        run: CC => {
          let {
            state: zC,
            dispatch: ZC
          } = CC, QC = mz(zC).map((CC => {
            let {
              from: ZC,
              to: QC
            } = CC;
            return nC.i.range(ZC, Math.min(QC + 1, zC.doc.length))
          }));
          return ZC(zC.update({
            selection: nC.i.create(QC),
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Mod-i",
        run: CC => {
          let {
            state: zC,
            dispatch: ZC
          } = CC, QC = TC(zC.selection, (CC => {
            let ZC = (0, oC.gb)(zC),
              QC = ZC.resolveStack(CC.from, 1);
            if (CC.empty) {
              let zC = ZC.resolveStack(CC.from, -1);
              zC.node.from >= QC.node.from && zC.node.to <= QC.node.to && (QC = zC)
            }
            for (let zC = QC; zC; zC = zC.next) {
              let {
                node: ZC
              } = zC;
              if ((ZC.from < CC.from && ZC.to >= CC.to || ZC.to > CC.to && ZC.from <= CC.from) && zC.next) return nC.i.range(ZC.to, ZC.from)
            }
            return CC
          }));
          return !QC.eq(zC.selection) && (ZC(aC(zC, QC)), !0)
        },
        preventDefault: !0
      }, {
        key: "Mod-[",
        run: rz
      }, {
        key: "Mod-]",
        run: uz
      }, {
        key: "Mod-Alt-\\",
        run: CC => {
          let {
            state: zC,
            dispatch: ZC
          } = CC;
          if (zC.readOnly) return !1;
          let QC = Object.create(null),
            wC = new oC.c(zC, {
              overrideIndentation: CC => {
                let zC = QC[CC];
                return null == zC ? -1 : zC
              }
            }),
            bC = cz(zC, ((CC, ZC, bC) => {
              let nC = (0, oC.K)(wC, CC.from);
              if (null == nC) return;
              /\S/.test(CC.text) || (nC = 0);
              let fC = /^\s*/.exec(CC.text)[0],
                qC = (0, oC.T)(zC, nC);
              (fC != qC || bC.from < CC.from + fC.length) && (QC[CC.from] = nC, ZC.push({
                from: CC.from,
                to: CC.from + fC.length,
                insert: qC
              }))
            }));
          return bC.changes.empty || ZC(zC.update(bC, {
            userEvent: "indent"
          })), !0
        }
      }, {
        key: "Shift-Mod-k",
        run: CC => {
          if (CC.state.readOnly) return !1;
          let {
            state: zC
          } = CC, ZC = zC.changes(mz(zC).map((CC => {
            let {
              from: ZC,
              to: QC
            } = CC;
            return ZC > 0 ? ZC-- : QC < zC.doc.length && QC++, {
              from: ZC,
              to: QC
            }
          }))), QC = TC(zC.selection, (zC => {
            let ZC;
            if (CC.lineWrapping) {
              let QC = CC.lineBlockAt(zC.head),
                wC = CC.coordsAtPos(zC.head, zC.assoc || 1);
              wC && (ZC = QC.bottom + CC.documentTop - wC.bottom + CC.defaultLineHeight / 2)
            }
            return CC.moveVertically(zC, !0, ZC)
          })).map(ZC);
          return CC.dispatch({
            changes: ZC,
            selection: QC,
            scrollIntoView: !0,
            userEvent: "delete.line"
          }), !0
        }
      }, {
        key: "Shift-Mod-\\",
        run: CC => {
          let {
            state: zC,
            dispatch: ZC
          } = CC;
          return fz(zC, ZC, !1)
        }
      }, {
        key: "Mod-/",
        run: CC => {
          let {
            state: zC
          } = CC, ZC = zC.doc.lineAt(zC.selection.main.from), QC = gC(CC.state, ZC.from);
          return QC.line ? WC(CC) : !!QC.block && MC(CC)
        }
      }, {
        key: "Alt-A",
        run: NC
      }, {
        key: "Ctrl-m",
        mac: "Shift-Alt-m",
        run: CC => (CC.setTabFocusMode(), !0)
      }].concat([{
        key: "ArrowLeft",
        run: LC,
        shift: Fz,
        preventDefault: !0
      }, {
        key: "Mod-ArrowLeft",
        mac: "Alt-ArrowLeft",
        run: CC => BC(CC, !yC(CC)),
        shift: CC => Nz(CC, !yC(CC)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowLeft",
        run: CC => tC(CC, (zC => nz(CC, zC, !yC(CC)))),
        shift: CC => oz(CC, (zC => nz(CC, zC, !yC(CC)))),
        preventDefault: !0
      }, {
        key: "ArrowRight",
        run: UC,
        shift: Wz,
        preventDefault: !0
      }, {
        key: "Mod-ArrowRight",
        mac: "Alt-ArrowRight",
        run: CC => BC(CC, yC(CC)),
        shift: CC => Nz(CC, yC(CC)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowRight",
        run: CC => tC(CC, (zC => nz(CC, zC, yC(CC)))),
        shift: CC => oz(CC, (zC => nz(CC, zC, yC(CC)))),
        preventDefault: !0
      }, {
        key: "ArrowUp",
        run: Cz,
        shift: gz,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowUp",
        run: Rz,
        shift: xz
      }, {
        mac: "Ctrl-ArrowUp",
        run: wz,
        shift: Pz
      }, {
        key: "ArrowDown",
        run: zz,
        shift: Sz,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowDown",
        run: Az,
        shift: Jz
      }, {
        mac: "Ctrl-ArrowDown",
        run: bz,
        shift: Gz
      }, {
        key: "PageUp",
        run: wz,
        shift: Pz
      }, {
        key: "PageDown",
        run: bz,
        shift: Gz
      }, {
        key: "Home",
        run: CC => tC(CC, (zC => nz(CC, zC, !1))),
        shift: CC => oz(CC, (zC => nz(CC, zC, !1))),
        preventDefault: !0
      }, {
        key: "Mod-Home",
        run: Rz,
        shift: xz
      }, {
        key: "End",
        run: CC => tC(CC, (zC => nz(CC, zC, !0))),
        shift: CC => oz(CC, (zC => nz(CC, zC, !0))),
        preventDefault: !0
      }, {
        key: "Mod-End",
        run: Az,
        shift: Jz
      }, {
        key: "Enter",
        run: lz,
        shift: lz
      }, {
        key: "Mod-a",
        run: CC => {
          let {
            state: zC,
            dispatch: ZC
          } = CC;
          return ZC(zC.update({
            selection: {
              anchor: 0,
              head: zC.doc.length
            },
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Backspace",
        run: hz,
        shift: hz,
        preventDefault: !0
      }, {
        key: "Delete",
        run: Kz,
        preventDefault: !0
      }, {
        key: "Mod-Backspace",
        mac: "Alt-Backspace",
        run: dz,
        preventDefault: !0
      }, {
        key: "Mod-Delete",
        mac: "Alt-Delete",
        run: CC => Yz(CC, !0),
        preventDefault: !0
      }, {
        mac: "Mod-Backspace",
        run: CC => iz(CC, (zC => {
          let ZC = CC.moveToLineBoundary(zC, !1).head;
          return zC.head > ZC ? ZC : Math.max(0, zC.head - 1)
        })),
        preventDefault: !0
      }, {
        mac: "Mod-Delete",
        run: CC => iz(CC, (zC => {
          let ZC = CC.moveToLineBoundary(zC, !0).head;
          return zC.head < ZC ? ZC : Math.min(CC.state.doc.length, zC.head + 1)
        })),
        preventDefault: !0
      }].concat([{
        key: "Ctrl-b",
        run: LC,
        shift: Fz,
        preventDefault: !0
      }, {
        key: "Ctrl-f",
        run: UC,
        shift: Wz
      }, {
        key: "Ctrl-p",
        run: Cz,
        shift: gz
      }, {
        key: "Ctrl-n",
        run: zz,
        shift: Sz
      }, {
        key: "Ctrl-a",
        run: CC => tC(CC, (zC => nC.i.cursor(CC.lineBlockAt(zC.head).from, 1))),
        shift: CC => oz(CC, (zC => nC.i.cursor(CC.lineBlockAt(zC.head).from)))
      }, {
        key: "Ctrl-e",
        run: CC => tC(CC, (zC => nC.i.cursor(CC.lineBlockAt(zC.head).to, -1))),
        shift: CC => oz(CC, (zC => nC.i.cursor(CC.lineBlockAt(zC.head).to)))
      }, {
        key: "Ctrl-d",
        run: Kz
      }, {
        key: "Ctrl-h",
        run: hz
      }, {
        key: "Ctrl-k",
        run: CC => iz(CC, (zC => {
          let ZC = CC.lineBlockAt(zC.head).to;
          return zC.head < ZC ? ZC : Math.min(CC.state.doc.length, zC.head + 1)
        }))
      }, {
        key: "Ctrl-Alt-h",
        run: dz
      }, {
        key: "Ctrl-o",
        run: CC => {
          let {
            state: zC,
            dispatch: ZC
          } = CC;
          if (zC.readOnly) return !1;
          let QC = zC.changeByRange((CC => ({
            changes: {
              from: CC.from,
              to: CC.to,
              insert: nC.B.of(["", ""])
            },
            range: nC.i.cursor(CC.from)
          })));
          return ZC(zC.update(QC, {
            scrollIntoView: !0,
            userEvent: "input"
          })), !0
        }
      }, {
        key: "Ctrl-t",
        run: CC => {
          let {
            state: zC,
            dispatch: ZC
          } = CC;
          if (zC.readOnly) return !1;
          let QC = zC.changeByRange((CC => {
            if (!CC.empty || 0 == CC.from || CC.from == zC.doc.length) return {
              range: CC
            };
            let ZC = CC.from,
              QC = zC.doc.lineAt(ZC),
              wC = ZC == QC.from ? ZC - 1 : (0, nC.V)(QC.text, ZC - QC.from, !1) + QC.from,
              bC = ZC == QC.to ? ZC + 1 : (0, nC.V)(QC.text, ZC - QC.from, !0) + QC.from;
            return {
              changes: {
                from: wC,
                to: bC,
                insert: zC.doc.slice(ZC, bC).append(zC.doc.slice(wC, ZC))
              },
              range: nC.i.cursor(bC)
            }
          }));
          return !QC.changes.empty && (ZC(zC.update(QC, {
            scrollIntoView: !0,
            userEvent: "move.character"
          })), !0)
        }
      }, {
        key: "Ctrl-v",
        run: bz
      }].map((CC => ({
        mac: CC.key,
        run: CC.run,
        shift: CC.shift
      }))))),
      Tz = {
        key: "Tab",
        run: uz,
        shift: rz
      };
    var az = ZC(41165),
      tz = ZC(41122),
      Dz = ZC(41169),
      jz = function(CC) {
        void 0 === CC && (CC = {});
        var {
          crosshairCursor: zC = !1
        } = CC, ZC = [];
        !1 !== CC.closeBracketsKeymap && (ZC = ZC.concat(tz.g)), !1 !== CC.defaultKeymap && (ZC = ZC.concat(sz)), !1 !== CC.searchKeymap && (ZC = ZC.concat(az.l)), !1 !== CC.historyKeymap && (ZC = ZC.concat(sC)), !1 !== CC.foldKeymap && (ZC = ZC.concat(oC.C)), !1 !== CC.completionKeymap && (ZC = ZC.concat(tz.m)), !1 !== CC.lintKeymap && (ZC = ZC.concat(Dz.b));
        var QC = [];
        return !1 !== CC.lineNumbers && QC.push((0, fC.V)()), !1 !== CC.highlightActiveLineGutter && QC.push((0, fC.J)()), !1 !== CC.highlightSpecialChars && QC.push((0, fC.O)()), !1 !== CC.history && QC.push(function() {
          let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return [JC, xC.of(CC), fC.j.domEventHandlers({
            beforeinput(CC, zC) {
              let ZC = "historyUndo" == CC.inputType ? iC : "historyRedo" == CC.inputType ? vC : null;
              return !!ZC && (CC.preventDefault(), ZC(zC))
            }
          })]
        }()), !1 !== CC.foldGutter && QC.push((0, oC.w)()), !1 !== CC.drawSelection && QC.push((0, fC.w)()), !1 !== CC.dropCursor && QC.push((0, fC.y)()), !1 !== CC.allowMultipleSelections && QC.push(nC.l.allowMultipleSelections.of(!0)), !1 !== CC.indentOnInput && QC.push((0, oC.P)()), !1 !== CC.syntaxHighlighting && QC.push((0, oC.cb)(oC.n, {
          fallback: !0
        })), !1 !== CC.bracketMatching && QC.push((0, oC.i)()), !1 !== CC.closeBrackets && QC.push((0, tz.i)()), !1 !== CC.autocompletion && QC.push((0, tz.e)()), !1 !== CC.rectangularSelection && QC.push((0, fC.cb)()), !1 !== zC && QC.push((0, fC.t)()), !1 !== CC.highlightActiveLine && QC.push((0, fC.M)()), !1 !== CC.highlightSelectionMatches && QC.push((0, az.i)()), CC.tabSize && "number" === typeof CC.tabSize && QC.push(oC.U.of(" ".repeat(CC.tabSize))), QC.concat([fC.R.of(ZC.flat())]).filter(Boolean)
      },
      yz = ZC(41150);
    const Lz = "#e5c07b",
      Uz = "#e06c75",
      Bz = "#56b6c2",
      Oz = "#ffffff",
      kz = "#abb2bf",
      Vz = "#7d8799",
      CZ = "#61afef",
      zZ = "#98c379",
      ZZ = "#d19a66",
      QZ = "#c678dd",
      wZ = "#21252b",
      bZ = "#2c313a",
      nZ = "#282c34",
      fZ = "#353a42",
      oZ = "#3E4451",
      qZ = "#528bff",
      FZ = fC.j.theme({
        "&": {
          color: kz,
          backgroundColor: nZ
        },
        ".cm-content": {
          caretColor: qZ
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: qZ
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: oZ
        },
        ".cm-panels": {
          backgroundColor: wZ,
          color: kz
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
          backgroundColor: nZ,
          color: Vz,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: bZ
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#ddd"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: fZ
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: fZ,
          borderBottomColor: fZ
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: bZ,
            color: kz
          }
        }
      }, {
        dark: !0
      }),
      WZ = oC.b.define([{
        tag: yz.i.keyword,
        color: QZ
      }, {
        tag: [yz.i.name, yz.i.deleted, yz.i.character, yz.i.propertyName, yz.i.macroName],
        color: Uz
      }, {
        tag: [yz.i.function(yz.i.variableName), yz.i.labelName],
        color: CZ
      }, {
        tag: [yz.i.color, yz.i.constant(yz.i.name), yz.i.standard(yz.i.name)],
        color: ZZ
      }, {
        tag: [yz.i.definition(yz.i.name), yz.i.separator],
        color: kz
      }, {
        tag: [yz.i.typeName, yz.i.className, yz.i.number, yz.i.changed, yz.i.annotation, yz.i.modifier, yz.i.self, yz.i.namespace],
        color: Lz
      }, {
        tag: [yz.i.operator, yz.i.operatorKeyword, yz.i.url, yz.i.escape, yz.i.regexp, yz.i.link, yz.i.special(yz.i.string)],
        color: Bz
      }, {
        tag: [yz.i.meta, yz.i.comment],
        color: Vz
      }, {
        tag: yz.i.strong,
        fontWeight: "bold"
      }, {
        tag: yz.i.emphasis,
        fontStyle: "italic"
      }, {
        tag: yz.i.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: yz.i.link,
        color: Vz,
        textDecoration: "underline"
      }, {
        tag: yz.i.heading,
        fontWeight: "bold",
        color: Uz
      }, {
        tag: [yz.i.atom, yz.i.bool, yz.i.special(yz.i.variableName)],
        color: ZZ
      }, {
        tag: [yz.i.processingInstruction, yz.i.string, yz.i.inserted],
        color: zZ
      }, {
        tag: yz.i.invalid,
        color: Oz
      }]),
      NZ = [FZ, (0, oC.cb)(WZ)];
    var MZ = fC.j.theme({
      "&": {
        backgroundColor: "#fff"
      }
    }, {
      dark: !1
    });
    class gZ {
      constructor(CC, zC) {
        this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = zC, this.timeoutMS = zC, this.callbacks.push(CC)
      }
      ZN() {
        if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
          this.isTimeExhausted = !0;
          var CC = this.callbacks.slice();
          this.callbacks.length = 0, CC.forEach((CC => {
            try {
              CC()
            } catch (zC) {
              console.error("TimeoutLatch callback error:", zC)
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
    class SZ {
      constructor() {
        this.interval = null, this.latches = new Set
      }
      add(CC) {
        this.latches.add(CC), this.start()
      }
      remove(CC) {
        this.latches.delete(CC), 0 === this.latches.size && this.stop()
      }
      start() {
        null === this.interval && (this.interval = setInterval((() => {
          this.latches.forEach((CC => {
            CC.ZN(), CC.isDone && this.remove(CC)
          }))
        }), 1))
      }
      stop() {
        null !== this.interval && (clearInterval(this.interval), this.interval = null)
      }
    }
    var pZ = null,
      PZ = nC.d.define(),
      GZ = [];

    function RZ(CC) {
      var {
        value: zC,
        selection: ZC,
        onChange: QC,
        onStatistics: wC,
        onCreateEditor: oC,
        onUpdate: qC,
        extensions: FC = GZ,
        autoFocus: WC,
        theme: NC = "light",
        height: MC = null,
        minHeight: gC = null,
        maxHeight: SC = null,
        width: pC = null,
        minWidth: PC = null,
        maxWidth: GC = null,
        placeholder: RC = "",
        editable: AC = !0,
        readOnly: xC = !1,
        indentWithTab: JC = !0,
        basicSetup: IC = !0,
        root: iC,
        initialState: vC
      } = CC, [eC, hC] = (0, bC.useState)(), [KC, YC] = (0, bC.useState)(), [dC, mC] = (0, bC.useState)(), HC = (0, bC.useState)((() => ({
        current: null
      })))[0], EC = (0, bC.useState)((() => ({
        current: null
      })))[0], lC = fC.j.theme({
        "&": {
          height: MC,
          minHeight: gC,
          maxHeight: SC,
          width: pC,
          minWidth: PC,
          maxWidth: GC
        },
        "& .cm-scroller": {
          height: "100% !important"
        }
      }), XC = fC.j.updateListener.of((CC => {
        if (CC.docChanged && "function" === typeof QC && !CC.transactions.some((CC => CC.annotation(PZ)))) {
          HC.current ? HC.current.reset() : (HC.current = new gZ((() => {
            if (EC.current) {
              var CC = EC.current;
              EC.current = null, CC()
            }
            HC.current = null
          }), 200), ("undefined" === typeof window ? new SZ : (pZ || (pZ = new SZ), pZ)).add(HC.current));
          var zC = CC.state.doc.toString();
          QC(zC, CC)
        }
        wC && wC((CC => ({
          line: CC.state.doc.lineAt(CC.state.selection.main.from),
          lineCount: CC.state.doc.lines,
          lineBreak: CC.state.lineBreak,
          length: CC.state.doc.length,
          readOnly: CC.state.readOnly,
          tabSize: CC.state.tabSize,
          selection: CC.state.selection,
          selectionAsSingle: CC.state.selection.asSingle().main,
          np: CC.state.selection.np,
          selectionCode: CC.state.sliceDoc(CC.state.selection.main.from, CC.state.selection.main.to),
          selections: CC.state.selection.np.map((zC => CC.state.sliceDoc(zC.from, zC.to))),
          selectedText: CC.state.selection.np.some((CC => !CC.empty))
        }))(CC))
      })), cC = function(CC) {
        void 0 === CC && (CC = {});
        var {
          indentWithTab: zC = !0,
          editable: ZC = !0,
          readOnly: QC = !1,
          theme: wC = "light",
          placeholder: bC = "",
          basicSetup: oC = !0
        } = CC, qC = [];
        switch (zC && qC.unshift(fC.R.of([Tz])), oC && ("boolean" === typeof oC ? qC.unshift(jz()) : qC.unshift(jz(oC))), bC && qC.unshift((0, fC.$)(bC)), wC) {
          case "light":
            qC.push(MZ);
            break;
          case "dark":
            qC.push(NZ);
            break;
          case "none":
            break;
          default:
            qC.push(wC)
        }
        return !1 === ZC && qC.push(fC.j.editable.of(!1)), QC && qC.push(nC.l.readOnly.of(!0)), [...qC]
      }({
        theme: NC,
        editable: AC,
        readOnly: xC,
        placeholder: RC,
        indentWithTab: JC,
        basicSetup: IC
      }), uC = [XC, lC, ...cC];
      return qC && "function" === typeof qC && uC.push(fC.j.updateListener.of(qC)), uC = uC.concat(FC), (0, bC.useLayoutEffect)((() => {
        if (eC && !dC) {
          var CC = {
              doc: zC,
              selection: ZC,
              extensions: uC
            },
            QC = vC ? nC.l.fromJSON(vC.json, CC, vC.fields) : nC.l.create(CC);
          if (mC(QC), !KC) {
            var wC = new fC.j({
              state: QC,
              parent: eC,
              root: iC
            });
            YC(wC), oC && oC(wC, QC)
          }
        }
        return () => {
          KC && (mC(void 0), YC(void 0))
        }
      }), [eC, dC]), (0, bC.useEffect)((() => {
        CC.container && hC(CC.container)
      }), [CC.container]), (0, bC.useEffect)((() => () => {
        KC && (KC.destroy(), YC(void 0)), HC.current && (HC.current.cancel(), HC.current = null)
      }), [KC]), (0, bC.useEffect)((() => {
        WC && KC && KC.focus()
      }), [WC, KC]), (0, bC.useEffect)((() => {
        KC && KC.dispatch({
          effects: nC.w.reconfigure.of(uC)
        })
      }), [NC, FC, MC, gC, SC, pC, PC, GC, RC, AC, xC, JC, IC, QC, qC]), (0, bC.useEffect)((() => {
        if (void 0 !== zC) {
          var CC = KC ? KC.state.doc.toString() : "";
          if (KC && zC !== CC) {
            var ZC = () => {
              KC && zC !== KC.state.doc.toString() && KC.dispatch({
                changes: {
                  from: 0,
                  to: KC.state.doc.toString().length,
                  insert: zC || ""
                },
                annotations: [PZ.of(!0)]
              })
            };
            HC.current && !HC.current.isDone ? EC.current = ZC : ZC()
          }
        }
      }), [zC, KC]), {
        state: dC,
        setState: mC,
        view: KC,
        setView: YC,
        container: eC,
        setContainer: hC
      }
    }
    var AZ = ZC(1056),
      xZ = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"],
      JZ = (0, bC.forwardRef)(((CC, zC) => {
        var {
          className: ZC,
          value: nC = "",
          selection: fC,
          extensions: oC = [],
          onChange: qC,
          onStatistics: FC,
          onCreateEditor: WC,
          onUpdate: NC,
          autoFocus: MC,
          theme: gC = "light",
          height: SC,
          minHeight: pC,
          maxHeight: PC,
          width: GC,
          minWidth: RC,
          maxWidth: AC,
          basicSetup: xC,
          placeholder: JC,
          indentWithTab: IC,
          editable: iC,
          readOnly: vC,
          root: eC,
          initialState: hC
        } = CC, KC = (0, wC.e)(CC, xZ), YC = (0, bC.useRef)(null), {
          state: dC,
          view: mC,
          container: HC,
          setContainer: EC
        } = RZ({
          root: eC,
          value: nC,
          autoFocus: MC,
          theme: gC,
          height: SC,
          minHeight: pC,
          maxHeight: PC,
          width: GC,
          minWidth: RC,
          maxWidth: AC,
          basicSetup: xC,
          placeholder: JC,
          indentWithTab: IC,
          editable: iC,
          readOnly: vC,
          selection: fC,
          onChange: qC,
          onStatistics: FC,
          onCreateEditor: WC,
          onUpdate: NC,
          extensions: oC,
          initialState: hC
        });
        (0, bC.useImperativeHandle)(zC, (() => ({
          editor: YC.current,
          state: dC,
          view: mC
        })), [YC, HC, dC, mC]);
        var lC = (0, bC.useCallback)((CC => {
          YC.current = CC, EC(CC)
        }), [EC]);
        if ("string" !== typeof nC) throw new Error("value must be typeof string but got " + typeof nC);
        var XC = "string" === typeof gC ? "cm-theme-" + gC : "cm-theme";
        return (0, AZ.jsx)("div", (0, QC.e)({
          ref: lC,
          className: XC + (ZC ? " " + ZC : "")
        }, KC))
      }));
    JZ.displayName = "CodeMirror";
    const IZ = JZ
  },
  41139: (CC, zC, ZC) => {
    function QC() {
      var CC = arguments[0];
      "string" == typeof CC && (CC = document.createElement(CC));
      var zC = 1,
        ZC = arguments[1];
      if (ZC && "object" == typeof ZC && null == ZC.nodeType && !Array.isArray(ZC)) {
        for (var QC in ZC)
          if (Object.prototype.hasOwnProperty.call(ZC, QC)) {
            var bC = ZC[QC];
            "string" == typeof bC ? CC.setAttribute(QC, bC) : null != bC && (CC[QC] = bC)
          } zC++
      }
      for (; zC < arguments.length; zC++) wC(CC, arguments[zC]);
      return CC
    }

    function wC(CC, zC) {
      if ("string" == typeof zC) CC.appendChild(document.createTextNode(zC));
      else if (null == zC);
      else if (null != zC.nodeType) CC.appendChild(zC);
      else {
        if (!Array.isArray(zC)) throw new RangeError("Unsupported child node: " + zC);
        for (var ZC = 0; ZC < zC.length; ZC++) wC(CC, zC[ZC])
      }
    }
    ZC.d(zC, {
      b: () => QC
    })
  },
  41134: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => nC
    });
    const QC = "undefined" == typeof Symbol ? "__\u037c" : Symbol.for("\u037c"),
      wC = "undefined" == typeof Symbol ? "__styleSet" + Math.floor(1e8 * Math.random()) : Symbol("styleSet"),
      bC = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : {};
    class nC {
      constructor(CC, zC) {
        this.rules = [];
        let {
          finish: ZC
        } = zC || {};

        function QC(CC) {
          return /^@/.test(CC) ? [CC] : CC.split(/,\s*/)
        }

        function wC(CC, zC, bC, nC) {
          let fC = [],
            oC = /^@(\w+)\b/.exec(CC[0]),
            qC = oC && "keyframes" == oC[1];
          if (oC && null == zC) return bC.push(CC[0] + ";");
          for (let ZC in zC) {
            let nC = zC[ZC];
            if (/&/.test(ZC)) wC(ZC.split(/,\s*/).map((zC => CC.map((CC => zC.replace(/&/, CC))))).reduce(((CC, zC) => CC.concat(zC))), nC, bC);
            else if (nC && "object" == typeof nC) {
              if (!oC) throw new RangeError("The value of a property (" + ZC + ") should be a primitive value.");
              wC(QC(ZC), nC, fC, qC)
            } else null != nC && fC.push(ZC.replace(/_.*/, "").replace(/[A-Z]/g, (CC => "-" + CC.toLowerCase())) + ": " + nC + ";")
          }(fC.length || qC) && bC.push((!ZC || oC || nC ? CC : CC.map(ZC)).join(", ") + " {" + fC.join(" ") + "}")
        }
        for (let bC in CC) wC(QC(bC), CC[bC], this.rules)
      }
      getRules() {
        return this.rules.join("\n")
      }
      static newName() {
        let CC = bC[QC] || 1;
        return bC[QC] = CC + 1, "\u037c" + CC.toString(36)
      }
      static mount(CC, zC, ZC) {
        let QC = CC[wC],
          bC = ZC && ZC.nonce;
        QC ? bC && QC.setNonce(bC) : QC = new oC(CC, bC), QC.mount(Array.isArray(zC) ? zC : [zC], CC)
      }
    }
    let fC = new Map;
    class oC {
      constructor(CC, zC) {
        let ZC = CC.ownerDocument || CC,
          QC = ZC.defaultView;
        if (!CC.head && CC.adoptedStyleSheets && QC.CSSStyleSheet) {
          let zC = fC.get(ZC);
          if (zC) return CC[wC] = zC;
          this.sheet = new QC.CSSStyleSheet, fC.set(ZC, this)
        } else this.styleTag = ZC.createElement("style"), zC && this.styleTag.setAttribute("nonce", zC);
        this.modules = [], CC[wC] = this
      }
      mount(CC, zC) {
        let ZC = this.sheet,
          QC = 0,
          wC = 0;
        for (let bC = 0; bC < CC.length; bC++) {
          let zC = CC[bC],
            nC = this.modules.indexOf(zC);
          if (nC < wC && nC > -1 && (this.modules.splice(nC, 1), wC--, nC = -1), -1 == nC) {
            if (this.modules.splice(wC++, 0, zC), ZC)
              for (let CC = 0; CC < zC.rules.length; CC++) ZC.insertRule(zC.rules[CC], QC++)
          } else {
            for (; wC < nC;) QC += this.modules[wC++].rules.length;
            QC += zC.rules.length, wC++
          }
        }
        if (ZC) zC.adoptedStyleSheets.indexOf(this.sheet) < 0 && (zC.adoptedStyleSheets = [this.sheet, ...zC.adoptedStyleSheets]);
        else {
          let CC = "";
          for (let zC = 0; zC < this.modules.length; zC++) CC += this.modules[zC].getRules() + "\n";
          this.styleTag.textContent = CC;
          let ZC = zC.head || zC;
          this.styleTag.parentNode != ZC && ZC.insertBefore(this.styleTag, ZC.firstChild)
        }
      }
      setNonce(CC) {
        this.styleTag && this.styleTag.getAttribute("nonce") != CC && this.styleTag.setAttribute("nonce", CC)
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);