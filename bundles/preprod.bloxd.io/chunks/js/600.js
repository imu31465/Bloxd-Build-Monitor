export const id = 600;
export const ids = [600];
export const modules = {
  44001: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => SX,
      g: () => WX,
      k: () => kX,
      o: () => oU,
      r: () => rX,
      s: () => DU,
      w: () => NX
    });
    var cU = zU(44009),
      yU = zU(44014),
      QU = zU(44029);
    class AU {
      constructor(UU, XU, zU, cU) {
        this.state = UU, this.pos = XU, this.explicit = zU, this.view = cU, this.abortListeners = [], this.abortOnDocChange = !1
      }
      tokenBefore(UU) {
        let XU = (0, QU.hb)(this.state).resolveInner(this.pos, -1);
        for (; XU && UU.indexOf(XU.name) < 0;) XU = XU.parent;
        return XU ? {
          from: XU.from,
          to: this.pos,
          text: this.state.sliceDoc(XU.from, this.pos),
          type: XU.type
        } : null
      }
      matchBefore(UU) {
        let XU = this.state.doc.lineAt(this.pos),
          zU = Math.max(XU.from, this.pos - 250),
          cU = XU.text.slice(zU - XU.from, this.pos - XU.from),
          yU = cU.search(NU(UU, !1));
        return yU < 0 ? null : {
          from: zU + yU,
          to: this.pos,
          text: cU.slice(yU)
        }
      }
      get aborted() {
        return null == this.abortListeners
      }
      addEventListener(UU, XU, zU) {
        "abort" == UU && this.abortListeners && (this.abortListeners.push(XU), zU && zU.onDocChange && (this.abortOnDocChange = !0))
      }
    }

    function FU(UU) {
      let XU = Object.keys(UU).join(""),
        zU = /\w/.test(XU);
      return zU && (XU = XU.replace(/\w/g, "")), `[${zU?"\\w":""}${XU.replace(/[^\w\s]/g,"\\$&")}]`
    }

    function oU(UU) {
      let XU = UU.map((UU => "string" == typeof UU ? {
          label: UU
        } : UU)),
        [zU, cU] = XU.every((UU => /^\w+$/.test(UU.label))) ? [/\w*$/, /\w+$/] : function(UU) {
          let XU = Object.create(null),
            zU = Object.create(null);
          for (let {
              label: yU
            }
            of UU) {
            XU[yU[0]] = !0;
            for (let UU = 1; UU < yU.length; UU++) zU[yU[UU]] = !0
          }
          let cU = FU(XU) + FU(zU) + "*$";
          return [new RegExp("^" + cU), new RegExp(cU)]
        }(XU);
      return UU => {
        let yU = UU.matchBefore(cU);
        return yU || UU.explicit ? {
          from: yU ? yU.from : UU.pos,
          options: XU,
          validFor: zU
        } : null
      }
    }

    function DU(UU, XU) {
      return zU => {
        for (let XU = (0, QU.hb)(zU.state).resolveInner(zU.pos, -1); XU; XU = XU.parent) {
          if (UU.indexOf(XU.name) > -1) return null;
          if (XU.type.isTop) break
        }
        return XU(zU)
      }
    }
    class EU {
      constructor(UU, XU, zU, cU) {
        this.completion = UU, this.source = XU, this.match = zU, this.score = cU
      }
    }

    function YU(UU) {
      return UU.selection.main.from
    }

    function NU(UU, XU) {
      var zU;
      let {
        source: cU
      } = UU, yU = XU && "^" != cU[0], QU = "$" != cU[cU.length - 1];
      return yU || QU ? new RegExp(`${yU?"^":""}(?:${cU})${QU?"$":""}`, null !== (zU = UU.flags) && void 0 !== zU ? zU : UU.ignoreCase ? "i" : "") : UU
    }
    const IU = cU.d.define();

    function pU(UU, XU, zU, yU) {
      let {
        main: QU
      } = UU.selection, AU = zU - QU.from, FU = yU - QU.from;
      return {
        ...UU.changeByRange((oU => {
          if (oU != QU && zU != yU && UU.sliceDoc(oU.from + AU, oU.from + FU) != UU.sliceDoc(zU, yU)) return {
            range: oU
          };
          let DU = UU.toText(XU);
          return {
            changes: {
              from: oU.from + AU,
              to: yU == QU.from ? oU.to : oU.from + FU,
              insert: DU
            },
            range: cU.k.cursor(oU.from + AU + DU.length)
          }
        })),
        scrollIntoView: !0,
        userEvent: "input.complete"
      }
    }
    const aU = new WeakMap;

    function tU(UU) {
      if (!Array.isArray(UU)) return UU;
      let XU = aU.get(UU);
      return XU || aU.set(UU, XU = oU(UU)), XU
    }
    const gU = cU.H.define(),
      kU = cU.H.define();
    class GU {
      constructor(UU) {
        this.pattern = UU, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
        for (let XU = 0; XU < UU.length;) {
          let zU = (0, cU.Q)(UU, XU),
            yU = (0, cU.R)(zU);
          this.chars.push(zU);
          let QU = UU.slice(XU, XU + yU),
            AU = QU.toUpperCase();
          this.folded.push((0, cU.Q)(AU == QU ? QU.toLowerCase() : AU, 0)), XU += yU
        }
        this.astral = UU.length != this.chars.length
      }
      ret(UU, XU) {
        return this.score = UU, this.matched = XU, this
      }
      match(UU) {
        if (0 == this.pattern.length) return this.ret(-100, []);
        if (UU.length < this.pattern.length) return null;
        let {
          chars: XU,
          folded: zU,
          any: yU,
          precise: QU,
          byWord: AU
        } = this;
        if (1 == XU.length) {
          let yU = (0, cU.Q)(UU, 0),
            QU = (0, cU.R)(yU),
            AU = QU == UU.length ? 0 : -100;
          if (yU == XU[0]);
          else {
            if (yU != zU[0]) return null;
            AU += -200
          }
          return this.ret(AU, [0, QU])
        }
        let FU = UU.indexOf(this.pattern);
        if (0 == FU) return this.ret(UU.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
        let oU = XU.length,
          DU = 0;
        if (FU < 0) {
          for (let QU = 0, AU = Math.min(UU.length, 200); QU < AU && DU < oU;) {
            let AU = (0, cU.Q)(UU, QU);
            AU != XU[DU] && AU != zU[DU] || (yU[DU++] = QU), QU += (0, cU.R)(AU)
          }
          if (DU < oU) return null
        }
        let EU = 0,
          YU = 0,
          NU = !1,
          IU = 0,
          pU = -1,
          aU = -1,
          tU = /[a-z]/.test(UU),
          gU = !0;
        for (let kU = 0, GU = Math.min(UU.length, 200), BU = 0; kU < GU && YU < oU;) {
          let yU = (0, cU.Q)(UU, kU);
          FU < 0 && (EU < oU && yU == XU[EU] && (QU[EU++] = kU), IU < oU && (yU == XU[IU] || yU == zU[IU] ? (0 == IU && (pU = kU), aU = kU + 1, IU++) : IU = 0));
          let DU, GU = yU < 255 ? yU >= 48 && yU <= 57 || yU >= 97 && yU <= 122 ? 2 : yU >= 65 && yU <= 90 ? 1 : 0 : (DU = (0, cU.eb)(yU)) != DU.toLowerCase() ? 1 : DU != DU.toUpperCase() ? 2 : 0;
          (!kU || 1 == GU && tU || 0 == BU && 0 != GU) && (XU[YU] == yU || zU[YU] == yU && (NU = !0) ? AU[YU++] = kU : AU.length && (gU = !1)), BU = GU, kU += (0, cU.R)(yU)
        }
        return YU == oU && 0 == AU[0] && gU ? this.result((NU ? -200 : 0) - 100, AU, UU) : IU == oU && 0 == pU ? this.ret(-200 - UU.length + (aU == UU.length ? 0 : -100), [0, aU]) : FU > -1 ? this.ret(-700 - UU.length, [FU, FU + this.pattern.length]) : IU == oU ? this.ret(-900 - UU.length, [pU, aU]) : YU == oU ? this.result((NU ? -200 : 0) - 100 - 700 + (gU ? 0 : -1100), AU, UU) : 2 == XU.length ? null : this.result((yU[0] ? -700 : 0) - 200 - 1100, yU, UU)
      }
      result(UU, XU, zU) {
        let yU = [],
          QU = 0;
        for (let AU of XU) {
          let UU = AU + (this.astral ? (0, cU.R)((0, cU.Q)(zU, AU)) : 1);
          QU && yU[QU - 1] == AU ? yU[QU - 1] = UU : (yU[QU++] = AU, yU[QU++] = UU)
        }
        return this.ret(UU - zU.length, yU)
      }
    }
    class BU {
      constructor(UU) {
        this.pattern = UU, this.matched = [], this.score = 0, this.folded = UU.toLowerCase()
      }
      match(UU) {
        if (UU.length < this.pattern.length) return null;
        let XU = UU.slice(0, this.pattern.length),
          zU = XU == this.pattern ? 0 : XU.toLowerCase() == this.folded ? -200 : null;
        return null == zU ? null : (this.matched = [0, XU.length], this.score = zU + (UU.length == this.pattern.length ? 0 : -100), this)
      }
    }
    const ZU = cU.r.define({
      combine: UU => (0, cU.V)(UU, {
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
        positionInfo: PU,
        filterStrict: !1,
        compareCompletions: (UU, XU) => (UU.sortText || UU.label).localeCompare(XU.sortText || XU.label),
        interactionDelay: 75,
        updateSyncTime: 100
      }, {
        defaultKeymap: (UU, XU) => UU && XU,
        closeOnBlur: (UU, XU) => UU && XU,
        icons: (UU, XU) => UU && XU,
        tooltipClass: (UU, XU) => zU => RU(UU(zU), XU(zU)),
        optionClass: (UU, XU) => zU => RU(UU(zU), XU(zU)),
        addToOptions: (UU, XU) => UU.concat(XU),
        filterStrict: (UU, XU) => UU || XU
      })
    });

    function RU(UU, XU) {
      return UU ? XU ? UU + " " + XU : UU : XU
    }

    function PU(UU, XU, zU, cU, QU, AU) {
      let FU, oU, DU = UU.textDirection == yU.e.RTL,
        EU = DU,
        YU = !1,
        NU = "top",
        IU = XU.left - QU.left,
        pU = QU.right - XU.right,
        aU = cU.right - cU.left,
        tU = cU.bottom - cU.top;
      if (EU && IU < Math.min(aU, pU) ? EU = !1 : !EU && pU < Math.min(aU, IU) && (EU = !0), aU <= (EU ? IU : pU)) FU = Math.max(QU.top, Math.min(zU.top, QU.bottom - tU)) - XU.top, oU = Math.min(400, EU ? IU : pU);
      else {
        YU = !0, oU = Math.min(400, (DU ? XU.right : QU.right - XU.left) - 30);
        let UU = QU.bottom - XU.bottom;
        UU >= tU || UU > XU.top ? FU = zU.bottom - XU.top : (NU = "bottom", FU = XU.bottom - zU.top)
      }
      return {
        style: `${NU}: ${FU/((XU.bottom-XU.top)/AU.offsetHeight)}px; max-width: ${oU/((XU.right-XU.left)/AU.offsetWidth)}px`,
        class: "cm-completionInfo-" + (YU ? DU ? "left-narrow" : "right-narrow" : EU ? "left" : "right")
      }
    }
    const WU = cU.H.define();

    function dU(UU, XU, zU) {
      if (UU <= zU) return {
        from: 0,
        to: UU
      };
      if (XU < 0 && (XU = 0), XU <= UU >> 1) {
        let UU = Math.floor(XU / zU);
        return {
          from: UU * zU,
          to: (UU + 1) * zU
        }
      }
      let cU = Math.floor((UU - XU) / zU);
      return {
        from: UU - (cU + 1) * zU,
        to: UU - cU * zU
      }
    }
    class LU {
      constructor(UU, XU, zU) {
        this.view = UU, this.stateField = XU, this.applyCompletion = zU, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
          read: () => this.measureInfo(),
          write: UU => this.placeInfo(UU),
          key: this
        }, this.space = null, this.currentClass = "";
        let cU = UU.state.field(XU),
          {
            options: yU,
            selected: QU
          } = cU.open,
          AU = UU.state.facet(ZU);
        this.optionContent = function(UU) {
          let XU = UU.addToOptions.slice();
          return UU.icons && XU.push({
            render(UU) {
              let XU = document.createElement("div");
              return XU.classList.add("cm-completionIcon"), UU.type && XU.classList.add(...UU.type.split(/\s+/g).map((UU => "cm-completionIcon-" + UU))), XU.setAttribute("aria-hidden", "true"), XU
            },
            position: 20
          }), XU.push({
            render(UU, XU, zU, cU) {
              let yU = document.createElement("span");
              yU.className = "cm-completionLabel";
              let QU = UU.displayLabel || UU.label,
                AU = 0;
              for (let FU = 0; FU < cU.length;) {
                let UU = cU[FU++],
                  XU = cU[FU++];
                UU > AU && yU.appendChild(document.createTextNode(QU.slice(AU, UU)));
                let zU = yU.appendChild(document.createElement("span"));
                zU.appendChild(document.createTextNode(QU.slice(UU, XU))), zU.className = "cm-completionMatchedText", AU = XU
              }
              return AU < QU.length && yU.appendChild(document.createTextNode(QU.slice(AU))), yU
            },
            position: 50
          }, {
            render(UU) {
              if (!UU.detail) return null;
              let XU = document.createElement("span");
              return XU.className = "cm-completionDetail", XU.textContent = UU.detail, XU
            },
            position: 80
          }), XU.sort(((UU, XU) => UU.position - XU.position)).map((UU => UU.render))
        }(AU), this.optionClass = AU.optionClass, this.tooltipClass = AU.tooltipClass, this.range = dU(yU.length, QU, AU.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(UU.state), this.dom.addEventListener("mousedown", (zU => {
          let {
            options: cU
          } = UU.state.field(XU).open;
          for (let XU, yU = zU.target; yU && yU != this.dom; yU = yU.parentNode)
            if ("LI" == yU.nodeName && (XU = /-(\d+)$/.exec(yU.id)) && +XU[1] < cU.length) return this.applyCompletion(UU, cU[+XU[1]]), void zU.preventDefault();
          if (zU.target == this.list) {
            let XU = this.list.classList.contains("cm-completionListIncompleteTop") && zU.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && zU.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
            null != XU && (UU.dispatch({
              effects: WU.of(XU)
            }), zU.preventDefault())
          }
        })), this.dom.addEventListener("focusout", (XU => {
          let zU = UU.state.field(this.stateField, !1);
          zU && zU.tooltip && UU.state.facet(ZU).closeOnBlur && XU.relatedTarget != UU.contentDOM && UU.dispatch({
            effects: kU.of(null)
          })
        })), this.showOptions(yU, cU.id)
      }
      mount() {
        this.updateSel()
      }
      showOptions(UU, XU) {
        this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(UU, XU, this.range)), this.list.addEventListener("scroll", (() => {
          this.info && this.view.requestMeasure(this.placeInfoReq)
        }))
      }
      update(UU) {
        var XU;
        let zU = UU.state.field(this.stateField),
          cU = UU.startState.field(this.stateField);
        if (this.updateTooltipClass(UU.state), zU != cU) {
          let {
            options: yU,
            selected: QU,
            disabled: AU
          } = zU.open;
          cU.open && cU.open.options == yU || (this.range = dU(yU.length, QU, UU.state.facet(ZU).maxRenderedOptions), this.showOptions(yU, zU.id)), this.updateSel(), AU != (null === (XU = cU.open) || void 0 === XU ? void 0 : XU.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!AU)
        }
      }
      updateTooltipClass(UU) {
        let XU = this.tooltipClass(UU);
        if (XU != this.currentClass) {
          for (let UU of this.currentClass.split(" ")) UU && this.dom.classList.remove(UU);
          for (let UU of XU.split(" ")) UU && this.dom.classList.add(UU);
          this.currentClass = XU
        }
      }
      positioned(UU) {
        this.space = UU, this.info && this.view.requestMeasure(this.placeInfoReq)
      }
      updateSel() {
        let UU = this.view.state.field(this.stateField),
          XU = UU.open;
        (XU.selected > -1 && XU.selected < this.range.from || XU.selected >= this.range.to) && (this.range = dU(XU.options.length, XU.selected, this.view.state.facet(ZU).maxRenderedOptions), this.showOptions(XU.options, UU.id));
        let zU = this.updateSelectedOption(XU.selected);
        if (zU) {
          this.destroyInfo();
          let {
            completion: cU
          } = XU.options[XU.selected], {
            info: QU
          } = cU;
          if (!QU) return;
          let AU = "string" === typeof QU ? document.createTextNode(QU) : QU(cU);
          if (!AU) return;
          "then" in AU ? AU.then((XU => {
            XU && this.view.state.field(this.stateField, !1) == UU && this.addInfoPane(XU, cU)
          })).catch((UU => (0, yU.V)(this.view.state, UU, "completion info"))) : (this.addInfoPane(AU, cU), zU.setAttribute("aria-describedby", this.info.id))
        }
      }
      addInfoPane(UU, XU) {
        this.destroyInfo();
        let zU = this.info = document.createElement("div");
        if (zU.className = "cm-tooltip cm-completionInfo", zU.id = "cm-completionInfo-" + Math.floor(65535 * Math.random()).toString(16), null != UU.nodeType) zU.appendChild(UU), this.infoDestroy = null;
        else {
          let {
            dom: XU,
            destroy: cU
          } = UU;
          zU.appendChild(XU), this.infoDestroy = cU || null
        }
        this.dom.appendChild(zU), this.view.requestMeasure(this.placeInfoReq)
      }
      updateSelectedOption(UU) {
        let XU = null;
        for (let zU = this.list.firstChild, cU = this.range.from; zU; zU = zU.nextSibling, cU++) "LI" == zU.nodeName && zU.id ? cU == UU ? zU.hasAttribute("aria-selected") || (zU.setAttribute("aria-selected", "true"), XU = zU) : zU.hasAttribute("aria-selected") && (zU.removeAttribute("aria-selected"), zU.removeAttribute("aria-describedby")) : cU--;
        return XU && function(UU, XU) {
          let zU = UU.getBoundingClientRect(),
            cU = XU.getBoundingClientRect(),
            yU = zU.height / UU.offsetHeight;
          cU.top < zU.top ? UU.scrollTop -= (zU.top - cU.top) / yU : cU.bottom > zU.bottom && (UU.scrollTop += (cU.bottom - zU.bottom) / yU)
        }(this.list, XU), XU
      }
      measureInfo() {
        let UU = this.dom.querySelector("[aria-selected]");
        if (!UU || !this.info) return null;
        let XU = this.dom.getBoundingClientRect(),
          zU = this.info.getBoundingClientRect(),
          cU = UU.getBoundingClientRect(),
          yU = this.space;
        if (!yU) {
          let UU = this.dom.ownerDocument.documentElement;
          yU = {
            left: 0,
            top: 0,
            right: UU.clientWidth,
            bottom: UU.clientHeight
          }
        }
        return cU.top > Math.min(yU.bottom, XU.bottom) - 10 || cU.bottom < Math.max(yU.top, XU.top) + 10 ? null : this.view.state.facet(ZU).positionInfo(this.view, XU, cU, zU, yU, this.dom)
      }
      placeInfo(UU) {
        this.info && (UU ? (UU.style && (this.info.style.cssText = UU.style), this.info.className = "cm-tooltip cm-completionInfo " + (UU.class || "")) : this.info.style.cssText = "top: -1e6px")
      }
      createListBox(UU, XU, zU) {
        const cU = document.createElement("ul");
        cU.id = XU, cU.setAttribute("role", "listbox"), cU.setAttribute("aria-expanded", "true"), cU.setAttribute("aria-label", this.view.state.phrase("Completions")), cU.addEventListener("mousedown", (UU => {
          UU.target == cU && UU.preventDefault()
        }));
        let yU = null;
        for (let QU = zU.from; QU < zU.to; QU++) {
          let {
            completion: AU,
            match: FU
          } = UU[QU], {
            section: oU
          } = AU;
          if (oU) {
            let UU = "string" == typeof oU ? oU : oU.name;
            if (UU != yU && (QU > zU.from || 0 == zU.from))
              if (yU = UU, "string" != typeof oU && oU.header) cU.appendChild(oU.header(oU));
              else {
                cU.appendChild(document.createElement("completion-section")).textContent = UU
              }
          }
          const DU = cU.appendChild(document.createElement("li"));
          DU.id = XU + "-" + QU, DU.setAttribute("role", "option");
          let EU = this.optionClass(AU);
          EU && (DU.className = EU);
          for (let UU of this.optionContent) {
            let XU = UU(AU, this.view.state, this.view, FU);
            XU && DU.appendChild(XU)
          }
        }
        return zU.from && cU.classList.add("cm-completionListIncompleteTop"), zU.to < UU.length && cU.classList.add("cm-completionListIncompleteBottom"), cU
      }
      destroyInfo() {
        this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
      }
      destroy() {
        this.destroyInfo()
      }
    }

    function eU(UU, XU) {
      return zU => new LU(zU, UU, XU)
    }

    function CU(UU) {
      return 100 * (UU.boost || 0) + (UU.apply ? 10 : 0) + (UU.info ? 5 : 0) + (UU.type ? 1 : 0)
    }
    class wU {
      constructor(UU, XU, zU, cU, yU, QU) {
        this.options = UU, this.attrs = XU, this.tooltip = zU, this.timestamp = cU, this.selected = yU, this.disabled = QU
      }
      setSelected(UU, XU) {
        return UU == this.selected || UU >= this.options.length ? this : new wU(this.options, rU(XU, UU), this.tooltip, this.timestamp, UU, this.disabled)
      }
      static build(UU, XU, zU, cU, yU, QU) {
        if (cU && !QU && UU.some((UU => UU.isPending))) return cU.setDisabled();
        let AU = function(UU, XU) {
          let zU = [],
            cU = null,
            yU = null,
            QU = UU => {
              zU.push(UU);
              let {
                section: XU
              } = UU.completion;
              if (XU) {
                cU || (cU = []);
                let UU = "string" == typeof XU ? XU : XU.name;
                cU.some((XU => XU.name == UU)) || cU.push("string" == typeof XU ? {
                  name: UU
                } : XU)
              }
            },
            AU = XU.facet(ZU);
          for (let YU of UU)
            if (YU.hasResult()) {
              let UU = YU.result.getMatch;
              if (!1 === YU.result.filter)
                for (let XU of YU.result.options) QU(new EU(XU, YU.source, UU ? UU(XU) : [], 1e9 - zU.length));
              else {
                let zU, cU = XU.sliceDoc(YU.from, YU.to),
                  FU = AU.filterStrict ? new BU(cU) : new GU(cU);
                for (let XU of YU.result.options)
                  if (zU = FU.match(XU.label)) {
                    let cU = XU.displayLabel ? UU ? UU(XU, zU.matched) : [] : zU.matched,
                      AU = zU.score + (XU.boost || 0);
                    if (QU(new EU(XU, YU.source, cU, AU)), "object" == typeof XU.section && "dynamic" === XU.section.rank) {
                      let {
                        name: UU
                      } = XU.section;
                      yU || (yU = Object.create(null)), yU[UU] = Math.max(AU, yU[UU] || -1e9)
                    }
                  }
              }
            } if (cU) {
            let UU = Object.create(null),
              XU = 0,
              QU = (UU, XU) => ("dynamic" === UU.rank && "dynamic" === XU.rank ? yU[XU.name] - yU[UU.name] : 0) || ("number" == typeof UU.rank ? UU.rank : 1e9) - ("number" == typeof XU.rank ? XU.rank : 1e9) || (UU.name < XU.name ? -1 : 1);
            for (let zU of cU.sort(QU)) XU -= 1e5, UU[zU.name] = XU;
            for (let cU of zU) {
              let {
                section: XU
              } = cU.completion;
              XU && (cU.score += UU["string" == typeof XU ? XU : XU.name])
            }
          }
          let FU = [],
            oU = null,
            DU = AU.compareCompletions;
          for (let EU of zU.sort(((UU, XU) => XU.score - UU.score || DU(UU.completion, XU.completion)))) {
            let UU = EU.completion;
            !oU || oU.label != UU.label || oU.detail != UU.detail || null != oU.type && null != UU.type && oU.type != UU.type || oU.apply != UU.apply || oU.boost != UU.boost ? FU.push(EU) : CU(EU.completion) > CU(oU) && (FU[FU.length - 1] = EU), oU = EU.completion
          }
          return FU
        }(UU, XU);
        if (!AU.length) return cU && UU.some((UU => UU.isPending)) ? cU.setDisabled() : null;
        let FU = XU.facet(ZU).selectOnOpen ? 0 : -1;
        if (cU && cU.selected != FU && -1 != cU.selected) {
          let UU = cU.options[cU.selected].completion;
          for (let XU = 0; XU < AU.length; XU++)
            if (AU[XU].completion == UU) {
              FU = XU;
              break
            }
        }
        return new wU(AU, rU(zU, FU), {
          pos: UU.reduce(((UU, XU) => XU.hasResult() ? Math.min(UU, XU.from) : UU), 1e8),
          create: sU,
          above: yU.aboveCursor
        }, cU ? cU.timestamp : Date.now(), FU, !1)
      }
      map(UU) {
        return new wU(this.options, this.attrs, {
          ...this.tooltip,
          pos: UU.mapPos(this.tooltip.pos)
        }, this.timestamp, this.selected, this.disabled)
      }
      setDisabled() {
        return new wU(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0)
      }
    }
    class qU {
      constructor(UU, XU, zU) {
        this.active = UU, this.id = XU, this.open = zU
      }
      static start() {
        return new qU(uU, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
      }
      update(UU) {
        let {
          state: XU
        } = UU, zU = XU.facet(ZU), cU = (zU.override || XU.languageDataAt("autocomplete", YU(XU)).map(tU)).map((XU => (this.active.find((UU => UU.source == XU)) || new iU(XU, this.active.some((UU => 0 != UU.state)) ? 1 : 0)).update(UU, zU)));
        cU.length == this.active.length && cU.every(((UU, XU) => UU == this.active[XU])) && (cU = this.active);
        let yU = this.open,
          QU = UU.effects.some((UU => UU.is(MU)));
        yU && UU.docChanged && (yU = yU.map(UU.changes)), UU.selection || cU.some((XU => XU.hasResult() && UU.changes.touchesRange(XU.from, XU.to))) || ! function(UU, XU) {
          if (UU == XU) return !0;
          for (let zU = 0, cU = 0;;) {
            for (; zU < UU.length && !UU[zU].hasResult();) zU++;
            for (; cU < XU.length && !XU[cU].hasResult();) cU++;
            let yU = zU == UU.length,
              QU = cU == XU.length;
            if (yU || QU) return yU == QU;
            if (UU[zU++].result != XU[cU++].result) return !1
          }
        }(cU, this.active) || QU ? yU = wU.build(cU, XU, this.id, yU, zU, QU) : yU && yU.disabled && !cU.some((UU => UU.isPending)) && (yU = null), !yU && cU.every((UU => !UU.isPending)) && cU.some((UU => UU.hasResult())) && (cU = cU.map((UU => UU.hasResult() ? new iU(UU.source, 0) : UU)));
        for (let AU of UU.effects) AU.is(WU) && (yU = yU && yU.setSelected(AU.value, this.id));
        return cU == this.active && yU == this.open ? this : new qU(cU, this.id, yU)
      }
      get tooltip() {
        return this.open ? this.open.tooltip : null
      }
      get attrs() {
        return this.open ? this.open.attrs : this.active.length ? OU : SU
      }
    }
    const OU = {
        "aria-autocomplete": "list"
      },
      SU = {};

    function rU(UU, XU) {
      let zU = {
        "aria-autocomplete": "list",
        "aria-haspopup": "listbox",
        "aria-controls": UU
      };
      return XU > -1 && (zU["aria-activedescendant"] = UU + "-" + XU), zU
    }
    const uU = [];

    function fU(UU, XU) {
      if (UU.isUserEvent("input.complete")) {
        let zU = UU.annotation(IU);
        if (zU && XU.activateOnCompletion(zU)) return 12
      }
      let zU = UU.isUserEvent("input.type");
      return zU && XU.activateOnTyping ? 5 : zU ? 1 : UU.isUserEvent("delete.backward") ? 2 : UU.selection ? 8 : UU.docChanged ? 16 : 0
    }
    class iU {
      constructor(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.source = UU, this.state = XU, this.explicit = zU
      }
      hasResult() {
        return !1
      }
      get isPending() {
        return 1 == this.state
      }
      update(UU, XU) {
        let zU = fU(UU, XU),
          cU = this;
        (8 & zU || 16 & zU && this.touches(UU)) && (cU = new iU(cU.source, 0)), 4 & zU && 0 == cU.state && (cU = new iU(this.source, 1)), cU = cU.updateFor(UU, zU);
        for (let yU of UU.effects)
          if (yU.is(gU)) cU = new iU(cU.source, 1, yU.value);
          else if (yU.is(kU)) cU = new iU(cU.source, 0);
        else if (yU.is(MU))
          for (let UU of yU.value) UU.source == cU.source && (cU = UU);
        return cU
      }
      updateFor(UU, XU) {
        return this.map(UU.changes)
      }
      map(UU) {
        return this
      }
      touches(UU) {
        return UU.changes.touchesRange(YU(UU.state))
      }
    }
    class HU extends iU {
      constructor(UU, XU, zU, cU, yU, QU) {
        super(UU, 3, XU), this.limit = zU, this.result = cU, this.from = yU, this.to = QU
      }
      hasResult() {
        return !0
      }
      updateFor(UU, XU) {
        var zU;
        if (!(3 & XU)) return this.map(UU.changes);
        let cU = this.result;
        cU.map && !UU.changes.empty && (cU = cU.map(cU, UU.changes));
        let yU = UU.changes.mapPos(this.from),
          QU = UU.changes.mapPos(this.to, 1),
          FU = YU(UU.state);
        if (FU > QU || !cU || 2 & XU && (YU(UU.startState) == this.from || FU < this.limit)) return new iU(this.source, 4 & XU ? 1 : 0);
        let oU = UU.changes.mapPos(this.limit);
        return function(UU, XU, zU, cU) {
          if (!UU) return !1;
          let yU = XU.sliceDoc(zU, cU);
          return "function" == typeof UU ? UU(yU, zU, cU, XU) : NU(UU, !0).test(yU)
        }(cU.validFor, UU.state, yU, QU) ? new HU(this.source, this.explicit, oU, cU, yU, QU) : cU.update && (cU = cU.update(cU, yU, QU, new AU(UU.state, FU, !1))) ? new HU(this.source, this.explicit, oU, cU, cU.from, null !== (zU = cU.to) && void 0 !== zU ? zU : YU(UU.state)) : new iU(this.source, 1, this.explicit)
      }
      map(UU) {
        if (UU.empty) return this;
        return (this.result.map ? this.result.map(this.result, UU) : this.result) ? new HU(this.source, this.explicit, UU.mapPos(this.limit), this.result, UU.mapPos(this.from), UU.mapPos(this.to, 1)) : new iU(this.source, 0)
      }
      touches(UU) {
        return UU.changes.touchesRange(this.from, this.to)
      }
    }
    const MU = cU.H.define({
        map: (UU, XU) => UU.map((UU => UU.map(XU)))
      }),
      vU = cU.L.define({
        create: () => qU.start(),
        update: (UU, XU) => UU.update(XU),
        provide: UU => [yU.gb.from(UU, (UU => UU.tooltip)), yU.h.contentAttributes.from(UU, (UU => UU.attrs))]
      });

    function VU(UU, XU) {
      const zU = XU.completion.apply || XU.completion.label;
      let cU = UU.state.field(vU).active.find((UU => UU.source == XU.source));
      return cU instanceof HU && ("string" == typeof zU ? UU.dispatch({
        ...pU(UU.state, zU, cU.from, cU.to),
        annotations: IU.of(XU.completion)
      }) : zU(UU, XU.completion, cU.from, cU.to), !0)
    }
    const sU = eU(vU, VU);

    function nU(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option";
      return zU => {
        let cU = zU.state.field(vU, !1);
        if (!cU || !cU.open || cU.open.disabled || Date.now() - cU.open.timestamp < zU.state.facet(ZU).interactionDelay) return !1;
        let QU, AU = 1;
        "page" == XU && (QU = (0, yU.B)(zU, cU.open.tooltip)) && (AU = Math.max(2, Math.floor(QU.dom.offsetHeight / QU.dom.querySelector("li").offsetHeight) - 1));
        let {
          length: FU
        } = cU.open.options, oU = cU.open.selected > -1 ? cU.open.selected + AU * (UU ? 1 : -1) : UU ? 0 : FU - 1;
        return oU < 0 ? oU = "page" == XU ? 0 : FU - 1 : oU >= FU && (oU = "page" == XU ? FU - 1 : 0), zU.dispatch({
          effects: WU.of(oU)
        }), !0
      }
    }
    const mU = UU => !!UU.state.field(vU, !1) && (UU.dispatch({
      effects: gU.of(!0)
    }), !0);
    class lU {
      constructor(UU, XU) {
        this.active = UU, this.context = XU, this.time = Date.now(), this.updates = [], this.done = void 0
      }
    }
    const xU = yU.n.fromClass(class {
        constructor(UU) {
          this.view = UU, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
          for (let XU of UU.state.field(vU).active) XU.isPending && this.startQuery(XU)
        }
        update(UU) {
          let XU = UU.state.field(vU),
            zU = UU.state.facet(ZU);
          if (!UU.selectionSet && !UU.docChanged && UU.startState.field(vU) == XU) return;
          let cU = UU.transactions.some((UU => {
            let XU = fU(UU, zU);
            return 8 & XU || (UU.selection || UU.docChanged) && !(3 & XU)
          }));
          for (let FU = 0; FU < this.running.length; FU++) {
            let XU = this.running[FU];
            if (cU || XU.context.abortOnDocChange && UU.docChanged || XU.updates.length + UU.transactions.length > 50 && Date.now() - XU.time > 1e3) {
              for (let UU of XU.context.abortListeners) try {
                UU()
              } catch (AU) {
                (0, yU.V)(this.view.state, AU)
              }
              XU.context.abortListeners = null, this.running.splice(FU--, 1)
            } else XU.updates.push(...UU.transactions)
          }
          this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), UU.transactions.some((UU => UU.effects.some((UU => UU.is(gU))))) && (this.pendingStart = !0);
          let QU = this.pendingStart ? 50 : zU.activateOnTypingDelay;
          if (this.debounceUpdate = XU.active.some((UU => UU.isPending && !this.running.some((XU => XU.active.source == UU.source)))) ? setTimeout((() => this.startUpdate()), QU) : -1, 0 != this.composing)
            for (let yU of UU.transactions) yU.isUserEvent("input.type") ? this.composing = 2 : 2 == this.composing && yU.selection && (this.composing = 3)
        }
        startUpdate() {
          this.debounceUpdate = -1, this.pendingStart = !1;
          let {
            state: UU
          } = this.view, XU = UU.field(vU);
          for (let zU of XU.active) zU.isPending && !this.running.some((UU => UU.active.source == zU.source)) && this.startQuery(zU);
          this.running.length && XU.open && XU.open.disabled && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(ZU).updateSyncTime))
        }
        startQuery(UU) {
          let {
            state: XU
          } = this.view, zU = YU(XU), cU = new AU(XU, zU, UU.explicit, this.view), QU = new lU(UU, cU);
          this.running.push(QU), Promise.resolve(UU.source(cU)).then((UU => {
            QU.context.aborted || (QU.done = UU || null, this.scheduleAccept())
          }), (UU => {
            this.view.dispatch({
              effects: kU.of(null)
            }), (0, yU.V)(this.view.state, UU)
          }))
        }
        scheduleAccept() {
          this.running.every((UU => void 0 !== UU.done)) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(ZU).updateSyncTime))
        }
        accept() {
          var UU;
          this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
          let XU = [],
            zU = this.view.state.facet(ZU),
            cU = this.view.state.field(vU);
          for (let yU = 0; yU < this.running.length; yU++) {
            let QU = this.running[yU];
            if (void 0 === QU.done) continue;
            if (this.running.splice(yU--, 1), QU.done) {
              let cU = YU(QU.updates.length ? QU.updates[0].startState : this.view.state),
                yU = Math.min(cU, QU.done.from + (QU.active.explicit ? 0 : 1)),
                AU = new HU(QU.active.source, QU.active.explicit, yU, QU.done, QU.done.from, null !== (UU = QU.done.to) && void 0 !== UU ? UU : cU);
              for (let UU of QU.updates) AU = AU.update(UU, zU);
              if (AU.hasResult()) {
                XU.push(AU);
                continue
              }
            }
            let AU = cU.active.find((UU => UU.source == QU.active.source));
            if (AU && AU.isPending)
              if (null == QU.done) {
                let UU = new iU(QU.active.source, 0);
                for (let XU of QU.updates) UU = UU.update(XU, zU);
                UU.isPending || XU.push(UU)
              } else this.startQuery(AU)
          }(XU.length || cU.open && cU.open.disabled) && this.view.dispatch({
            effects: MU.of(XU)
          })
        }
      }, {
        eventHandlers: {
          blur(UU) {
            let XU = this.view.state.field(vU, !1);
            if (XU && XU.tooltip && this.view.state.facet(ZU).closeOnBlur) {
              let zU = XU.open && (0, yU.B)(this.view, XU.open.tooltip);
              zU && zU.dom.contains(UU.relatedTarget) || setTimeout((() => this.view.dispatch({
                effects: kU.of(null)
              })), 10)
            }
          },
          compositionstart() {
            this.composing = 1
          },
          compositionend() {
            3 == this.composing && setTimeout((() => this.view.dispatch({
              effects: gU.of(!1)
            })), 20), this.composing = 0
          }
        }
      }),
      JU = "object" == typeof navigator && /Win/.test(navigator.platform),
      jU = cU.w.highest(yU.h.domEventHandlers({
        keydown(UU, XU) {
          let zU = XU.state.field(vU, !1);
          if (!zU || !zU.open || zU.open.disabled || zU.open.selected < 0 || UU.key.length > 1 || UU.ctrlKey && (!JU || !UU.altKey) || UU.metaKey) return !1;
          let cU = zU.open.options[zU.open.selected],
            yU = zU.active.find((UU => UU.source == cU.source)),
            QU = cU.completion.commitCharacters || yU.result.commitCharacters;
          return QU && QU.indexOf(UU.key) > -1 && VU(XU, cU), !1
        }
      })),
      KU = yU.h.baseTheme({
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
    class bU {
      constructor(UU, XU, zU, cU) {
        this.field = UU, this.line = XU, this.from = zU, this.to = cU
      }
    }
    class TU {
      constructor(UU, XU, zU) {
        this.field = UU, this.from = XU, this.to = zU
      }
      map(UU) {
        let XU = UU.mapPos(this.from, -1, cU.t.TrackDel),
          zU = UU.mapPos(this.to, 1, cU.t.TrackDel);
        return null == XU || null == zU ? null : new TU(this.field, XU, zU)
      }
    }
    class hU {
      constructor(UU, XU) {
        this.lines = UU, this.fieldPositions = XU
      }
      instantiate(UU, XU) {
        let zU = [],
          cU = [XU],
          yU = UU.doc.lineAt(XU),
          AU = /^\s*/.exec(yU.text)[0];
        for (let oU of this.lines) {
          if (zU.length) {
            let zU = AU,
              yU = /^\t*/.exec(oU)[0].length;
            for (let XU = 0; XU < yU; XU++) zU += UU.facet(QU.V);
            cU.push(XU + zU.length - yU), oU = zU + oU.slice(yU)
          }
          zU.push(oU), XU += oU.length + 1
        }
        let FU = this.fieldPositions.map((UU => new TU(UU.field, cU[UU.line] + UU.from, cU[UU.line] + UU.to)));
        return {
          text: zU,
          Qt: FU
        }
      }
      static parse(UU) {
        let XU, zU = [],
          cU = [],
          yU = [];
        for (let QU of UU.split(/\r\n?|\n/)) {
          for (; XU = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(QU);) {
            let UU = XU[1] ? +XU[1] : null,
              AU = XU[2] || XU[3] || "",
              FU = -1,
              oU = AU.replace(/\\[{}]/g, (UU => UU[1]));
            for (let XU = 0; XU < zU.length; XU++)(null != UU ? zU[XU].seq == UU : oU && zU[XU].name == oU) && (FU = XU);
            if (FU < 0) {
              let XU = 0;
              for (; XU < zU.length && (null == UU || null != zU[XU].seq && zU[XU].seq < UU);) XU++;
              zU.splice(XU, 0, {
                seq: UU,
                name: oU
              }), FU = XU;
              for (let UU of yU) UU.field >= FU && UU.field++
            }
            for (let zU of yU)
              if (zU.line == cU.length && zU.from > XU.index) {
                let UU = XU[2] ? 3 + (XU[1] || "").length : 2;
                zU.from -= UU, zU.to -= UU
              } yU.push(new bU(FU, cU.length, XU.index, XU.index + oU.length)), QU = QU.slice(0, XU.index) + AU + QU.slice(XU.index + XU[0].length)
          }
          QU = QU.replace(/\\([{}])/g, ((UU, XU, zU) => {
            for (let QU of yU) QU.line == cU.length && QU.from > zU && (QU.from--, QU.to--);
            return XU
          })), cU.push(QU)
        }
        return new hU(cU, yU)
      }
    }
    let UX = yU.c.widget({
        widget: new class extends yU.o {
          toDOM() {
            let UU = document.createElement("span");
            return UU.className = "cm-snippetFieldPosition", UU
          }
          ignoreEvent() {
            return !1
          }
        }
      }),
      XX = yU.c.mark({
        class: "cm-snippetField"
      });
    class zX {
      constructor(UU, XU) {
        this.Qt = UU, this.active = XU, this.deco = yU.c.set(UU.map((UU => (UU.from == UU.to ? UX : XX).range(UU.from, UU.to))), !0)
      }
      map(UU) {
        let XU = [];
        for (let zU of this.Qt) {
          let cU = zU.map(UU);
          if (!cU) return null;
          XU.push(cU)
        }
        return new zX(XU, this.active)
      }
      selectionInsideField(UU) {
        return UU.Qt.every((UU => this.Qt.some((XU => XU.field == this.active && XU.from <= UU.from && XU.to >= UU.to))))
      }
    }
    const cX = cU.H.define({
        map: (UU, XU) => UU && UU.map(XU)
      }),
      yX = cU.H.define(),
      QX = cU.L.define({
        create: () => null,
        update(UU, XU) {
          for (let zU of XU.effects) {
            if (zU.is(cX)) return zU.value;
            if (zU.is(yX) && UU) return new zX(UU.Qt, zU.value)
          }
          return UU && XU.docChanged && (UU = UU.map(XU.changes)), UU && XU.selection && !UU.selectionInsideField(XU.selection) && (UU = null), UU
        },
        provide: UU => yU.h.hy.from(UU, (UU => UU ? UU.deco : yU.c.none))
      });

    function AX(UU, XU) {
      return cU.k.create(UU.filter((UU => UU.field == XU)).map((UU => cU.k.range(UU.from, UU.to))))
    }

    function FX(UU) {
      let XU = hU.parse(UU);
      return (UU, zU, yU, QU) => {
        let {
          text: AU,
          Qt: FU
        } = XU.instantiate(UU.state, yU), {
          main: oU
        } = UU.state.selection, DU = {
          changes: {
            from: yU,
            to: QU == oU.from ? oU.to : QU,
            insert: cU.O.of(AU)
          },
          scrollIntoView: !0,
          annotations: zU ? [IU.of(zU), cU.P.userEvent.of("input.complete")] : void 0
        };
        if (FU.length && (DU.selection = AX(FU, 0)), FU.some((UU => UU.field > 0))) {
          let XU = new zX(FU, 0),
            zU = DU.effects = [cX.of(XU)];
          void 0 === UU.state.field(QX, !1) && zU.push(cU.H.appendConfig.of([QX, YX, IX, KU]))
        }
        UU.dispatch(UU.state.update(DU))
      }
    }

    function oX(UU) {
      return XU => {
        let {
          state: zU,
          dispatch: cU
        } = XU, yU = zU.field(QX, !1);
        if (!yU || UU < 0 && 0 == yU.active) return !1;
        let QU = yU.active + UU,
          AU = UU > 0 && !yU.Qt.some((XU => XU.field == QU + UU));
        return cU(zU.update({
          selection: AX(yU.Qt, QU),
          effects: cX.of(AU ? null : new zX(yU.Qt, QU)),
          scrollIntoView: !0
        })), !0
      }
    }
    const DX = [{
        key: "Tab",
        run: oX(1),
        shift: oX(-1)
      }, {
        key: "Escape",
        run: UU => {
          let {
            state: XU,
            dispatch: zU
          } = UU;
          return !!XU.field(QX, !1) && (zU(XU.update({
            effects: cX.of(null)
          })), !0)
        }
      }],
      EX = cU.r.define({
        combine: UU => UU.length ? UU[0] : DX
      }),
      YX = cU.w.highest(yU.Q.compute([EX], (UU => UU.facet(EX))));

    function NX(UU, XU) {
      return {
        ...XU,
        apply: FX(UU)
      }
    }
    const IX = yU.h.domEventHandlers({
      mousedown(UU, XU) {
        let zU, cU = XU.state.field(QX, !1);
        if (!cU || null == (zU = XU.posAtCoords({
            x: UU.clientX,
            y: UU.clientY
          }))) return !1;
        let yU = cU.Qt.find((UU => UU.from <= zU && UU.to >= zU));
        return !(!yU || yU.field == cU.active) && (XU.dispatch({
          selection: AX(cU.Qt, yU.field),
          effects: cX.of(cU.Qt.some((UU => UU.field > yU.field)) ? new zX(cU.Qt, yU.field) : null),
          scrollIntoView: !0
        }), !0)
      }
    });
    const pX = {
        brackets: ["(", "[", "{", "'", '"'],
        before: ")]}:;>",
        stringPrefixes: []
      },
      aX = cU.H.define({
        map(UU, XU) {
          let zU = XU.mapPos(UU, -1, cU.t.TrackAfter);
          return null == zU ? void 0 : zU
        }
      }),
      tX = new class extends cU.E {};
    tX.startSide = 1, tX.endSide = -1;
    const gX = cU.L.define({
      create: () => cU.D.empty,
      update(UU, XU) {
        if (UU = UU.map(XU.changes), XU.selection) {
          let zU = XU.state.doc.lineAt(XU.selection.main.head);
          UU = UU.update({
            filter: UU => UU >= zU.from && UU <= zU.to
          })
        }
        for (let zU of XU.effects) zU.is(aX) && (UU = UU.update({
          add: [tX.range(zU.value, zU.value + 1)]
        }));
        return UU
      }
    });

    function kX() {
      return [PX, gX]
    }
    const GX = "()[]{}<>\xab\xbb\xbb\xab\uff3b\uff3d\uff5b\uff5d";

    function BX(UU) {
      for (let XU = 0; XU < 16; XU += 2)
        if (GX.charCodeAt(XU) == UU) return GX.charAt(XU + 1);
      return (0, cU.eb)(UU < 128 ? UU : UU + 1)
    }

    function ZX(UU, XU) {
      return UU.languageDataAt("closeBrackets", XU)[0] || pX
    }
    const RX = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      PX = yU.h.inputHandler.of(((UU, XU, zU, yU) => {
        if ((RX ? UU.composing : UU.compositionStarted) || UU.state.readOnly) return !1;
        let QU = UU.state.selection.main;
        if (yU.length > 2 || 2 == yU.length && 1 == (0, cU.R)((0, cU.Q)(yU, 0)) || XU != QU.from || zU != QU.to) return !1;
        let AU = function(UU, XU) {
          let zU = ZX(UU, UU.selection.main.head),
            yU = zU.brackets || pX.brackets;
          for (let QU of yU) {
            let AU = BX((0, cU.Q)(QU, 0));
            if (XU == QU) return AU == QU ? wX(UU, QU, yU.indexOf(QU + QU + QU) > -1, zU) : eX(UU, QU, AU, zU.before || pX.before);
            if (XU == AU && dX(UU, UU.selection.main.from)) return CX(UU, QU, AU)
          }
          return null
        }(UU.state, yU);
        return !!AU && (UU.dispatch(AU), !0)
      })),
      WX = [{
        key: "Backspace",
        run: UU => {
          let {
            state: XU,
            dispatch: zU
          } = UU;
          if (XU.readOnly) return !1;
          let yU = ZX(XU, XU.selection.main.head).brackets || pX.brackets,
            QU = null,
            AU = XU.changeByRange((UU => {
              if (UU.empty) {
                let zU = function(UU, XU) {
                  let zU = UU.sliceString(XU - 2, XU);
                  return (0, cU.R)((0, cU.Q)(zU, 0)) == zU.length ? zU : zU.slice(1)
                }(XU.doc, UU.head);
                for (let QU of yU)
                  if (QU == zU && LX(XU.doc, UU.head) == BX((0, cU.Q)(QU, 0))) return {
                    changes: {
                      from: UU.head - QU.length,
                      to: UU.head + QU.length
                    },
                    range: cU.k.cursor(UU.head - QU.length)
                  }
              }
              return {
                range: QU = UU
              }
            }));
          return QU || zU(XU.update(AU, {
            scrollIntoView: !0,
            userEvent: "delete.backward"
          })), !QU
        }
      }];

    function dX(UU, XU) {
      let zU = !1;
      return UU.field(gX).between(0, UU.doc.length, (UU => {
        UU == XU && (zU = !0)
      })), zU
    }

    function LX(UU, XU) {
      let zU = UU.sliceString(XU, XU + 2);
      return zU.slice(0, (0, cU.R)((0, cU.Q)(zU, 0)))
    }

    function eX(UU, XU, zU, yU) {
      let QU = null,
        AU = UU.changeByRange((AU => {
          if (!AU.empty) return {
            changes: [{
              insert: XU,
              from: AU.from
            }, {
              insert: zU,
              from: AU.to
            }],
            effects: aX.of(AU.to + XU.length),
            range: cU.k.range(AU.anchor + XU.length, AU.head + XU.length)
          };
          let FU = LX(UU.doc, AU.head);
          return !FU || /\s/.test(FU) || yU.indexOf(FU) > -1 ? {
            changes: {
              insert: XU + zU,
              from: AU.head
            },
            effects: aX.of(AU.head + XU.length),
            range: cU.k.cursor(AU.head + XU.length)
          } : {
            range: QU = AU
          }
        }));
      return QU ? null : UU.update(AU, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function CX(UU, XU, zU) {
      let yU = null,
        QU = UU.changeByRange((XU => XU.empty && LX(UU.doc, XU.head) == zU ? {
          changes: {
            from: XU.head,
            to: XU.head + zU.length,
            insert: zU
          },
          range: cU.k.cursor(XU.head + zU.length)
        } : yU = {
          range: XU
        }));
      return yU ? null : UU.update(QU, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function wX(UU, XU, zU, yU) {
      let AU = yU.stringPrefixes || pX.stringPrefixes,
        FU = null,
        oU = UU.changeByRange((yU => {
          if (!yU.empty) return {
            changes: [{
              insert: XU,
              from: yU.from
            }, {
              insert: XU,
              from: yU.to
            }],
            effects: aX.of(yU.to + XU.length),
            range: cU.k.range(yU.anchor + XU.length, yU.head + XU.length)
          };
          let oU, DU = yU.head,
            EU = LX(UU.doc, DU);
          if (EU == XU) {
            if (qX(UU, DU)) return {
              changes: {
                insert: XU + XU,
                from: DU
              },
              effects: aX.of(DU + XU.length),
              range: cU.k.cursor(DU + XU.length)
            };
            if (dX(UU, DU)) {
              let yU = zU && UU.sliceDoc(DU, DU + 3 * XU.length) == XU + XU + XU ? XU + XU + XU : XU;
              return {
                changes: {
                  from: DU,
                  to: DU + yU.length,
                  insert: yU
                },
                range: cU.k.cursor(DU + yU.length)
              }
            }
          } else {
            if (zU && UU.sliceDoc(DU - 2 * XU.length, DU) == XU + XU && (oU = OX(UU, DU - 2 * XU.length, AU)) > -1 && qX(UU, oU)) return {
              changes: {
                insert: XU + XU + XU + XU,
                from: DU
              },
              effects: aX.of(DU + XU.length),
              range: cU.k.cursor(DU + XU.length)
            };
            if (UU.charCategorizer(DU)(EU) != cU.j.Word && OX(UU, DU, AU) > -1 && ! function(UU, XU, zU, cU) {
                let yU = (0, QU.hb)(UU).resolveInner(XU, -1),
                  AU = cU.reduce(((UU, XU) => Math.max(UU, XU.length)), 0);
                for (let QU = 0; QU < 5; QU++) {
                  let QU = UU.sliceDoc(yU.from, Math.min(yU.to, yU.from + zU.length + AU)),
                    FU = QU.indexOf(zU);
                  if (!FU || FU > -1 && cU.indexOf(QU.slice(0, FU)) > -1) {
                    let XU = yU.firstChild;
                    for (; XU && XU.from == yU.from && XU.to - XU.from > zU.length + FU;) {
                      if (UU.sliceDoc(XU.to - zU.length, XU.to) == zU) return !1;
                      XU = XU.firstChild
                    }
                    return !0
                  }
                  let oU = yU.to == XU && yU.parent;
                  if (!oU) break;
                  yU = oU
                }
                return !1
              }(UU, DU, XU, AU)) return {
              changes: {
                insert: XU + XU,
                from: DU
              },
              effects: aX.of(DU + XU.length),
              range: cU.k.cursor(DU + XU.length)
            }
          }
          return {
            range: FU = yU
          }
        }));
      return FU ? null : UU.update(oU, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function qX(UU, XU) {
      let zU = (0, QU.hb)(UU).resolveInner(XU + 1);
      return zU.parent && zU.from == XU
    }

    function OX(UU, XU, zU) {
      let yU = UU.charCategorizer(XU);
      if (yU(UU.sliceDoc(XU - 1, XU)) != cU.j.Word) return XU;
      for (let QU of zU) {
        let zU = XU - QU.length;
        if (UU.sliceDoc(zU, XU) == QU && yU(UU.sliceDoc(zU - 1, zU)) != cU.j.Word) return zU
      }
      return -1
    }

    function SX() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [jU, vU, ZU.of(UU), xU, uX, KU]
    }
    const rX = [{
        key: "Ctrl-Space",
        run: mU
      }, {
        mac: "Alt-`",
        run: mU
      }, {
        mac: "Alt-i",
        run: mU
      }, {
        key: "Escape",
        run: UU => {
          let XU = UU.state.field(vU, !1);
          return !(!XU || !XU.active.some((UU => 0 != UU.state))) && (UU.dispatch({
            effects: kU.of(null)
          }), !0)
        }
      }, {
        key: "ArrowDown",
        run: nU(!0)
      }, {
        key: "ArrowUp",
        run: nU(!1)
      }, {
        key: "PageDown",
        run: nU(!0, "page")
      }, {
        key: "PageUp",
        run: nU(!1, "page")
      }, {
        key: "Enter",
        run: UU => {
          let XU = UU.state.field(vU, !1);
          return !(UU.state.readOnly || !XU || !XU.open || XU.open.selected < 0 || XU.open.disabled || Date.now() - XU.open.timestamp < UU.state.facet(ZU).interactionDelay) && VU(UU, XU.open.options[XU.open.selected])
        }
      }],
      uX = cU.w.highest(yU.Q.computeN([ZU], (UU => UU.facet(ZU).defaultKeymap ? [rX] : [])))
  },
  44146: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => DU,
      f: () => NU,
      i: () => EU,
      m: () => YU
    });
    var cU = zU(44009);
    class yU {
      constructor(UU, XU, zU, cU) {
        this.origin = UU, this.changes = XU, this.effects = zU, this.clientID = cU
      }
    }
    class QU {
      constructor(UU, XU) {
        this.version = UU, this.unconfirmed = XU
      }
    }
    const AU = cU.r.define({
        combine(UU) {
          let XU = (0, cU.V)(UU, {
            startVersion: 0,
            clientID: null,
            sharedEffects: () => []
          }, {
            generatedID: UU => UU
          });
          return null == XU.clientID && (XU.clientID = UU.length && UU[0].generatedID || ""), XU
        }
      }),
      FU = cU.d.define(),
      oU = cU.L.define({
        create: UU => new QU(UU.facet(AU).startVersion, []),
        update(UU, XU) {
          let zU = XU.annotation(FU);
          if (zU) return zU;
          let {
            sharedEffects: cU,
            clientID: oU
          } = XU.startState.facet(AU), DU = cU(XU);
          return DU.length || !XU.changes.empty ? new QU(UU.version, UU.unconfirmed.concat(new yU(XU, XU.changes, DU, oU))) : UU
        }
      });

    function DU() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [oU, AU.of(Object.assign({
        generatedID: Math.floor(1e9 * Math.random()).toString(36)
      }, UU))]
    }

    function EU(UU, XU) {
      let {
        version: zU,
        unconfirmed: DU
      } = UU.field(oU), {
        clientID: EU
      } = UU.facet(AU);
      zU += XU.length;
      let YU = [],
        NU = null,
        IU = 0;
      for (let yU of XU) {
        let UU = IU < DU.length ? DU[IU] : null;
        UU && UU.clientID == yU.clientID ? (NU && (NU = NU.map(UU.changes, !0)), YU = cU.H.mapEffects(YU, yU.changes), IU++) : (YU = cU.H.mapEffects(YU, yU.changes), yU.effects && (YU = YU.concat(yU.effects)), NU = NU ? NU.compose(yU.changes) : yU.changes)
      }
      if (IU && (DU = DU.slice(IU)), DU.length && (NU && (DU = DU.map((UU => {
          let XU = UU.changes.map(NU);
          return NU = NU.map(UU.changes, !0), new yU(UU.origin, XU, cU.H.mapEffects(UU.effects, NU), EU)
        }))), YU.length)) {
        let UU = DU.reduce(((UU, XU) => UU.compose(XU.changes)), cU.ChangeSet.empty(DU[0].changes.length));
        YU = cU.H.mapEffects(YU, UU)
      }
      return NU ? UU.update({
        changes: NU,
        effects: YU,
        annotations: [cU.P.addToHistory.of(!1), cU.P.remote.of(!0), FU.of(new QU(zU, DU))],
        filter: !1
      }) : UU.update({
        annotations: [FU.of(new QU(zU, DU))]
      })
    }

    function YU(UU) {
      return UU.field(oU).unconfirmed
    }

    function NU(UU) {
      return UU.field(oU).version
    }
  },
  44049: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => aX
    });
    var cU = zU(44034);
    class yU {
      constructor(UU, XU, zU, cU, yU, QU, AU, FU, oU) {
        let DU = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          EU = arguments.length > 10 ? arguments[10] : void 0;
        this.p = UU, this.stack = XU, this.state = zU, this.reducePos = cU, this.pos = yU, this.score = QU, this.buffer = AU, this.bufferBase = FU, this.curContext = oU, this.lookAhead = DU, this.parent = EU
      }
      toString() {
        return `[${this.stack.filter(((UU,XU)=>XU%3==0)).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`
      }
      static start(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          cU = UU.parser.context;
        return new yU(UU, [], XU, zU, zU, 0, [], 0, cU ? new QU(cU, cU.start) : null, 0, null)
      }
      get context() {
        return this.curContext ? this.curContext.context : null
      }
      pushState(UU, XU) {
        this.stack.push(this.state, XU, this.bufferBase + this.buffer.length), this.state = UU
      }
      reduce(UU) {
        var XU;
        let zU = UU >> 19,
          cU = 65535 & UU,
          {
            parser: yU
          } = this.p,
          QU = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos),
          AU = yU.dynamicPrecedence(cU);
        if (AU && (this.score += AU), 0 == zU) return this.pushState(yU.getGoto(this.state, cU, !0), this.reducePos), cU < yU.minRepeatTerm && this.storeNode(cU, this.reducePos, this.reducePos, QU ? 8 : 4, !0), void this.reduceContext(cU, this.reducePos);
        let FU = this.stack.length - 3 * (zU - 1) - (262144 & UU ? 6 : 0),
          oU = FU ? this.stack[FU - 2] : this.p.Qt[0].from,
          DU = this.reducePos - oU;
        DU >= 2e3 && !(null === (XU = this.p.parser.nodeSet.types[cU]) || void 0 === XU ? void 0 : XU.isAnonymous) && (oU == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = DU) : this.p.lastBigReductionSize < DU && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = oU, this.p.lastBigReductionSize = DU));
        let EU = FU ? this.stack[FU - 1] : 0,
          YU = this.bufferBase + this.buffer.length - EU;
        if (cU < yU.minRepeatTerm || 131072 & UU) {
          let UU = yU.stateFlag(this.state, 1) ? this.pos : this.reducePos;
          this.storeNode(cU, oU, UU, YU + 4, !0)
        }
        if (262144 & UU) this.state = this.stack[FU];
        else {
          let UU = this.stack[FU - 3];
          this.state = yU.getGoto(UU, cU, !0)
        }
        for (; this.stack.length > FU;) this.stack.pop();
        this.reduceContext(cU, oU)
      }
      storeNode(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
          yU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (0 == UU && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
          let UU = this,
            cU = this.buffer.length;
          if (0 == cU && UU.parent && (cU = UU.bufferBase - UU.parent.bufferBase, UU = UU.parent), cU > 0 && 0 == UU.buffer[cU - 4] && UU.buffer[cU - 1] > -1) {
            if (XU == zU) return;
            if (UU.buffer[cU - 2] >= XU) return void(UU.buffer[cU - 2] = zU)
          }
        }
        if (yU && this.pos != zU) {
          let yU = this.buffer.length;
          if (yU > 0 && (0 != this.buffer[yU - 4] || this.buffer[yU - 1] < 0)) {
            let UU = !1;
            for (let XU = yU; XU > 0 && this.buffer[XU - 2] > zU; XU -= 4)
              if (this.buffer[XU - 1] >= 0) {
                UU = !0;
                break
              } if (UU)
              for (; yU > 0 && this.buffer[yU - 2] > zU;) this.buffer[yU] = this.buffer[yU - 4], this.buffer[yU + 1] = this.buffer[yU - 3], this.buffer[yU + 2] = this.buffer[yU - 2], this.buffer[yU + 3] = this.buffer[yU - 1], yU -= 4, cU > 4 && (cU -= 4)
          }
          this.buffer[yU] = UU, this.buffer[yU + 1] = XU, this.buffer[yU + 2] = zU, this.buffer[yU + 3] = cU
        } else this.buffer.push(UU, XU, zU, cU)
      }
      shift(UU, XU, zU, cU) {
        if (131072 & UU) this.pushState(65535 & UU, this.pos);
        else if (0 == (262144 & UU)) {
          let yU = UU,
            {
              parser: QU
            } = this.p;
          this.pos = cU;
          let AU = QU.stateFlag(yU, 1);
          !AU && (cU > zU || XU <= QU.maxNode) && (this.reducePos = cU), this.pushState(yU, AU ? zU : Math.min(zU, this.reducePos)), this.shiftContext(XU, zU), XU <= QU.maxNode && this.buffer.push(XU, zU, cU, 4)
        } else this.pos = cU, this.shiftContext(XU, zU), XU <= this.p.parser.maxNode && this.buffer.push(XU, zU, cU, 4)
      }
      apply(UU, XU, zU, cU) {
        65536 & UU ? this.reduce(UU) : this.shift(UU, XU, zU, cU)
      }
      useNode(UU, XU) {
        let zU = this.p.reused.length - 1;
        (zU < 0 || this.p.reused[zU] != UU) && (this.p.reused.push(UU), zU++);
        let cU = this.pos;
        this.reducePos = this.pos = cU + UU.length, this.pushState(XU, cU), this.buffer.push(zU, cU, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, UU, this, this.p.stream.reset(this.pos - UU.length)))
      }
      split() {
        let UU = this,
          XU = UU.buffer.length;
        for (; XU > 0 && UU.buffer[XU - 2] > UU.reducePos;) XU -= 4;
        let zU = UU.buffer.slice(XU),
          cU = UU.bufferBase + XU;
        for (; UU && cU == UU.bufferBase;) UU = UU.parent;
        return new yU(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, zU, cU, this.curContext, this.lookAhead, UU)
      }
      recoverByDelete(UU, XU) {
        let zU = UU <= this.p.parser.maxNode;
        zU && this.storeNode(UU, this.pos, XU, 4), this.storeNode(0, this.pos, XU, zU ? 8 : 4), this.pos = this.reducePos = XU, this.score -= 190
      }
      canShift(UU) {
        for (let XU = new AU(this);;) {
          let zU = this.p.parser.stateSlot(XU.state, 4) || this.p.parser.hasAction(XU.state, UU);
          if (0 == zU) return !1;
          if (0 == (65536 & zU)) return !0;
          XU.reduce(zU)
        }
      }
      recoverByInsert(UU) {
        if (this.stack.length >= 300) return [];
        let XU = this.p.parser.nextStates(this.state);
        if (XU.length > 8 || this.stack.length >= 120) {
          let zU = [];
          for (let cU, yU = 0; yU < XU.length; yU += 2)(cU = XU[yU + 1]) != this.state && this.p.parser.hasAction(cU, UU) && zU.push(XU[yU], cU);
          if (this.stack.length < 120)
            for (let UU = 0; zU.length < 8 && UU < XU.length; UU += 2) {
              let cU = XU[UU + 1];
              zU.some(((UU, XU) => 1 & XU && UU == cU)) || zU.push(XU[UU], cU)
            }
          XU = zU
        }
        let zU = [];
        for (let cU = 0; cU < XU.length && zU.length < 4; cU += 2) {
          let UU = XU[cU + 1];
          if (UU == this.state) continue;
          let yU = this.split();
          yU.pushState(UU, this.pos), yU.storeNode(0, yU.pos, yU.pos, 4, !0), yU.shiftContext(XU[cU], this.pos), yU.reducePos = this.pos, yU.score -= 200, zU.push(yU)
        }
        return zU
      }
      forceReduce() {
        let {
          parser: UU
        } = this.p, XU = UU.stateSlot(this.state, 5);
        if (0 == (65536 & XU)) return !1;
        if (!UU.validAction(this.state, XU)) {
          let zU = XU >> 19,
            cU = 65535 & XU,
            yU = this.stack.length - 3 * zU;
          if (yU < 0 || UU.getGoto(this.stack[yU], cU, !1) < 0) {
            let UU = this.findForcedReduction();
            if (null == UU) return !1;
            XU = UU
          }
          this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100
        }
        return this.reducePos = this.pos, this.reduce(XU), !0
      }
      findForcedReduction() {
        let {
          parser: UU
        } = this.p, XU = [], zU = (cU, yU) => {
          if (!XU.includes(cU)) return XU.push(cU), UU.allActions(cU, (XU => {
            if (393216 & XU);
            else if (65536 & XU) {
              let zU = (XU >> 19) - yU;
              if (zU > 1) {
                let cU = 65535 & XU,
                  yU = this.stack.length - 3 * zU;
                if (yU >= 0 && UU.getGoto(this.stack[yU], cU, !1) >= 0) return zU << 19 | 65536 | cU
              }
            } else {
              let UU = zU(XU, yU + 1);
              if (null != UU) return UU
            }
          }))
        };
        return zU(this.state, 0)
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
        for (let XU = 0; XU < this.stack.length; XU += 3)
          if (this.stack[XU] != UU.stack[XU]) return !1;
        return !0
      }
      get parser() {
        return this.p.parser
      }
      dialectEnabled(UU) {
        return this.p.parser.dialect.flags[UU]
      }
      shiftContext(UU, XU) {
        this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, UU, this, this.p.stream.reset(XU)))
      }
      reduceContext(UU, XU) {
        this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, UU, this, this.p.stream.reset(XU)))
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
          let XU = new QU(this.curContext.tracker, UU);
          XU.hash != this.curContext.hash && this.emitContext(), this.curContext = XU
        }
      }
      setLookAhead(UU) {
        return !(UU <= this.lookAhead) && (this.emitLookAhead(), this.lookAhead = UU, !0)
      }
      close() {
        this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead()
      }
    }
    class QU {
      constructor(UU, XU) {
        this.tracker = UU, this.context = XU, this.hash = UU.strict ? UU.hash(XU) : 0
      }
    }
    class AU {
      constructor(UU) {
        this.start = UU, this.state = UU.state, this.stack = UU.stack, this.base = this.stack.length
      }
      reduce(UU) {
        let XU = 65535 & UU,
          zU = UU >> 19;
        0 == zU ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= 3 * (zU - 1);
        let cU = this.start.p.parser.getGoto(this.stack[this.base - 3], XU, !0);
        this.state = cU
      }
    }
    class FU {
      constructor(UU, XU, zU) {
        this.stack = UU, this.pos = XU, this.index = zU, this.buffer = UU.buffer, 0 == this.index && this.maybeNext()
      }
      static create(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UU.bufferBase + UU.buffer.length;
        return new FU(UU, XU, XU - UU.bufferBase)
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
        return new FU(this.stack, this.pos, this.index)
      }
    }

    function oU(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uint16Array;
      if ("string" != typeof UU) return UU;
      let zU = null;
      for (let cU = 0, yU = 0; cU < UU.length;) {
        let QU = 0;
        for (;;) {
          let XU = UU.charCodeAt(cU++),
            zU = !1;
          if (126 == XU) {
            QU = 65535;
            break
          }
          XU >= 92 && XU--, XU >= 34 && XU--;
          let yU = XU - 32;
          if (yU >= 46 && (yU -= 46, zU = !0), QU += yU, zU) break;
          QU *= 46
        }
        zU ? zU[yU++] = QU : zU = new XU(QU)
      }
      return zU
    }
    class DU {
      constructor() {
        this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0
      }
    }
    const EU = new DU;
    class YU {
      constructor(UU, XU) {
        this.input = UU, this.Qt = XU, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = EU, this.rangeIndex = 0, this.pos = this.chunkPos = XU[0].from, this.range = XU[0], this.end = XU[XU.length - 1].to, this.readNext()
      }
      resolveOffset(UU, XU) {
        let zU = this.range,
          cU = this.rangeIndex,
          yU = this.pos + UU;
        for (; yU < zU.from;) {
          if (!cU) return null;
          let UU = this.Qt[--cU];
          yU -= zU.from - UU.to, zU = UU
        }
        for (; XU < 0 ? yU > zU.to : yU >= zU.to;) {
          if (cU == this.Qt.length - 1) return null;
          let UU = this.Qt[++cU];
          yU += UU.from - zU.to, zU = UU
        }
        return yU
      }
      clipPos(UU) {
        if (UU >= this.range.from && UU < this.range.to) return UU;
        for (let XU of this.Qt)
          if (XU.to > UU) return Math.max(UU, XU.from);
        return this.end
      }
      peek(UU) {
        let XU, zU, cU = this.chunkOff + UU;
        if (cU >= 0 && cU < this.chunk.length) XU = this.pos + UU, zU = this.chunk.charCodeAt(cU);
        else {
          let cU = this.resolveOffset(UU, 1);
          if (null == cU) return -1;
          if (XU = cU, XU >= this.chunk2Pos && XU < this.chunk2Pos + this.chunk2.length) zU = this.chunk2.charCodeAt(XU - this.chunk2Pos);
          else {
            let UU = this.rangeIndex,
              cU = this.range;
            for (; cU.to <= XU;) cU = this.Qt[++UU];
            this.chunk2 = this.input.chunk(this.chunk2Pos = XU), XU + this.chunk2.length > cU.to && (this.chunk2 = this.chunk2.slice(0, cU.to - XU)), zU = this.chunk2.charCodeAt(0)
          }
        }
        return XU >= this.token.lookAhead && (this.token.lookAhead = XU + 1), zU
      }
      acceptToken(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zU = XU ? this.resolveOffset(XU, -1) : this.pos;
        if (null == zU || zU < this.token.start) throw new RangeError("Token end out of bounds");
        this.token.value = UU, this.token.end = zU
      }
      acceptTokenTo(UU, XU) {
        this.token.value = UU, this.token.end = XU
      }
      getChunk() {
        if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
          let {
            chunk: UU,
            chunkPos: XU
          } = this;
          this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = UU, this.chunk2Pos = XU, this.chunkOff = this.pos - this.chunkPos
        } else {
          this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
          let UU = this.input.chunk(this.pos),
            XU = this.pos + UU.length;
          this.chunk = XU > this.range.to ? UU.slice(0, this.range.to - this.pos) : UU, this.chunkPos = this.pos, this.chunkOff = 0
        }
      }
      readNext() {
        return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff)
      }
      advance() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        for (this.chunkOff += UU; this.pos + UU >= this.range.to;) {
          if (this.rangeIndex == this.Qt.length - 1) return this.setDone();
          UU -= this.range.to - this.pos, this.range = this.Qt[++this.rangeIndex], this.pos = this.range.from
        }
        return this.pos += UU, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext()
      }
      setDone() {
        return this.pos = this.chunkPos = this.end, this.range = this.Qt[this.rangeIndex = this.Qt.length - 1], this.chunk = "", this.next = -1
      }
      reset(UU, XU) {
        if (XU ? (this.token = XU, XU.start = UU, XU.lookAhead = UU + 1, XU.value = XU.extended = -1) : this.token = EU, this.pos != UU) {
          if (this.pos = UU, UU == this.end) return this.setDone(), this;
          for (; UU < this.range.from;) this.range = this.Qt[--this.rangeIndex];
          for (; UU >= this.range.to;) this.range = this.Qt[++this.rangeIndex];
          UU >= this.chunkPos && UU < this.chunkPos + this.chunk.length ? this.chunkOff = UU - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext()
        }
        return this
      }
      read(UU, XU) {
        if (UU >= this.chunkPos && XU <= this.chunkPos + this.chunk.length) return this.chunk.slice(UU - this.chunkPos, XU - this.chunkPos);
        if (UU >= this.chunk2Pos && XU <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(UU - this.chunk2Pos, XU - this.chunk2Pos);
        if (UU >= this.range.from && XU <= this.range.to) return this.input.read(UU, XU);
        let zU = "";
        for (let cU of this.Qt) {
          if (cU.from >= XU) break;
          cU.to > UU && (zU += this.input.read(Math.max(cU.from, UU), Math.min(cU.to, XU)))
        }
        return zU
      }
    }
    class NU {
      constructor(UU, XU) {
        this.data = UU, this.id = XU
      }
      token(UU, XU) {
        let {
          parser: zU
        } = XU.p;
        aU(this.data, UU, XU, this.id, zU.data, zU.tokenPrecTable)
      }
    }
    NU.prototype.contextual = NU.prototype.fallback = NU.prototype.extend = !1;
    class IU {
      constructor(UU, XU, zU) {
        this.precTable = XU, this.elseToken = zU, this.data = "string" == typeof UU ? oU(UU) : UU
      }
      token(UU, XU) {
        let zU = UU.pos,
          cU = 0;
        for (;;) {
          let zU = UU.next < 0,
            yU = UU.resolveOffset(1, 1);
          if (aU(this.data, UU, XU, 0, this.data, this.precTable), UU.token.value > -1) break;
          if (null == this.elseToken) return;
          if (zU || cU++, null == yU) break;
          UU.reset(yU, UU.token)
        }
        cU && (UU.reset(zU, UU.token), UU.acceptToken(this.elseToken, cU))
      }
    }
    IU.prototype.contextual = NU.prototype.fallback = NU.prototype.extend = !1;
    class pU {
      constructor(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.token = UU, this.contextual = !!XU.contextual, this.fallback = !!XU.fallback, this.extend = !!XU.extend
      }
    }

    function aU(UU, XU, zU, cU, yU, QU) {
      let AU = 0,
        FU = 1 << cU,
        {
          dialect: oU
        } = zU.p.parser;
      UU: for (; 0 != (FU & UU[AU]);) {
        let zU = UU[AU + 1];
        for (let YU = AU + 3; YU < zU; YU += 2)
          if ((UU[YU + 1] & FU) > 0) {
            let zU = UU[YU];
            if (oU.allows(zU) && (-1 == XU.token.value || XU.token.value == zU || gU(zU, XU.token.value, yU, QU))) {
              XU.acceptToken(zU);
              break
            }
          } let cU = XU.next,
          DU = 0,
          EU = UU[AU + 2];
        if (!(XU.next < 0 && EU > DU && 65535 == UU[zU + 3 * EU - 3])) {
          for (; DU < EU;) {
            let yU = DU + EU >> 1,
              QU = zU + yU + (yU << 1),
              FU = UU[QU],
              oU = UU[QU + 1] || 65536;
            if (cU < FU) EU = yU;
            else {
              if (!(cU >= oU)) {
                AU = UU[QU + 2], XU.advance();
                continue UU
              }
              DU = yU + 1
            }
          }
          break
        }
        AU = UU[zU + 3 * EU - 1]
      }
    }

    function tU(UU, XU, zU) {
      for (let cU, yU = XU; 65535 != (cU = UU[yU]); yU++)
        if (cU == zU) return yU - XU;
      return -1
    }

    function gU(UU, XU, zU, cU) {
      let yU = tU(zU, cU, XU);
      return yU < 0 || tU(zU, cU, UU) < yU
    }
    const kU = "undefined" != typeof process && {
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
    let GU = null;

    function BU(UU, XU, zU) {
      let yU = UU.cursor(cU.i.IncludeAnonymous);
      for (yU.moveTo(XU);;)
        if (!(zU < 0 ? yU.childBefore(XU) : yU.childAfter(XU)))
          for (;;) {
            if ((zU < 0 ? yU.to < XU : yU.from > XU) && !yU.type.isError) return zU < 0 ? Math.max(0, Math.min(yU.to - 1, XU - 25)) : Math.min(UU.length, Math.max(yU.from + 1, XU + 25));
            if (zU < 0 ? yU.prevSibling() : yU.nextSibling()) break;
            if (!yU.parent()) return zU < 0 ? 0 : UU.length
          }
    }
    class ZU {
      constructor(UU, XU) {
        this.fragments = UU, this.nodeSet = XU, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment()
      }
      nextFragment() {
        let UU = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
        if (UU) {
          for (this.safeFrom = UU.openStart ? BU(UU.tree, UU.from + UU.offset, 1) - UU.offset : UU.from, this.safeTo = UU.openEnd ? BU(UU.tree, UU.to + UU.offset, -1) - UU.offset : UU.to; this.trees.length;) this.trees.pop(), this.start.pop(), this.index.pop();
          this.trees.push(UU.tree), this.start.push(-UU.offset), this.index.push(0), this.nextStart = this.safeFrom
        } else this.nextStart = 1e9
      }
      nodeAt(UU) {
        if (UU < this.nextStart) return null;
        for (; this.fragment && this.safeTo <= UU;) this.nextFragment();
        if (!this.fragment) return null;
        for (;;) {
          let XU = this.trees.length - 1;
          if (XU < 0) return this.nextFragment(), null;
          let zU = this.trees[XU],
            yU = this.index[XU];
          if (yU == zU.children.length) {
            this.trees.pop(), this.start.pop(), this.index.pop();
            continue
          }
          let QU = zU.children[yU],
            AU = this.start[XU] + zU.positions[yU];
          if (AU > UU) return this.nextStart = AU, null;
          if (QU instanceof cU.z) {
            if (AU == UU) {
              if (AU < this.safeFrom) return null;
              let UU = AU + QU.length;
              if (UU <= this.safeTo) {
                let XU = QU.prop(cU.j.lookAhead);
                if (!XU || UU + XU < this.fragment.to) return QU
              }
            }
            this.index[XU]++, AU + QU.length >= Math.max(this.safeFrom, UU) && (this.trees.push(QU), this.start.push(AU), this.index.push(0))
          } else this.index[XU]++, this.nextStart = AU + QU.length
        }
      }
    }
    class RU {
      constructor(UU, XU) {
        this.stream = XU, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = UU.tokenizers.map((UU => new DU))
      }
      getActions(UU) {
        let XU = 0,
          zU = null,
          {
            parser: cU
          } = UU.p,
          {
            tokenizers: yU
          } = cU,
          QU = cU.stateSlot(UU.state, 3),
          AU = UU.curContext ? UU.curContext.hash : 0,
          FU = 0;
        for (let oU = 0; oU < yU.length; oU++) {
          if (0 == (1 << oU & QU)) continue;
          let cU = yU[oU],
            DU = this.tokens[oU];
          if ((!zU || cU.fallback) && ((cU.contextual || DU.start != UU.pos || DU.mask != QU || DU.context != AU) && (this.updateCachedToken(DU, cU, UU), DU.mask = QU, DU.context = AU), DU.lookAhead > DU.end + 25 && (FU = Math.max(DU.lookAhead, FU)), 0 != DU.value)) {
            let yU = XU;
            if (DU.extended > -1 && (XU = this.addActions(UU, DU.extended, DU.end, XU)), XU = this.addActions(UU, DU.value, DU.end, XU), !cU.extend && (zU = DU, XU > yU)) break
          }
        }
        for (; this.actions.length > XU;) this.actions.pop();
        return FU && UU.setLookAhead(FU), zU || UU.pos != this.stream.end || (zU = new DU, zU.value = UU.p.parser.eofTerm, zU.start = zU.end = UU.pos, XU = this.addActions(UU, zU.value, zU.end, XU)), this.mainToken = zU, this.actions
      }
      getMainToken(UU) {
        if (this.mainToken) return this.mainToken;
        let XU = new DU,
          {
            pos: zU,
            p: cU
          } = UU;
        return XU.start = zU, XU.end = Math.min(zU + 1, cU.stream.end), XU.value = zU == cU.stream.end ? cU.parser.eofTerm : 0, XU
      }
      updateCachedToken(UU, XU, zU) {
        let cU = this.stream.clipPos(zU.pos);
        if (XU.token(this.stream.reset(cU, UU), zU), UU.value > -1) {
          let {
            parser: XU
          } = zU.p;
          for (let cU = 0; cU < XU.specialized.length; cU++)
            if (XU.specialized[cU] == UU.value) {
              let yU = XU.specializers[cU](this.stream.read(UU.start, UU.end), zU);
              if (yU >= 0 && zU.p.parser.dialect.allows(yU >> 1)) {
                0 == (1 & yU) ? UU.value = yU >> 1 : UU.extended = yU >> 1;
                break
              }
            }
        } else UU.value = 0, UU.end = this.stream.clipPos(cU + 1)
      }
      putAction(UU, XU, zU, cU) {
        for (let yU = 0; yU < cU; yU += 3)
          if (this.actions[yU] == UU) return cU;
        return this.actions[cU++] = UU, this.actions[cU++] = XU, this.actions[cU++] = zU, cU
      }
      addActions(UU, XU, zU, cU) {
        let {
          state: yU
        } = UU, {
          parser: QU
        } = UU.p, {
          data: AU
        } = QU;
        for (let FU = 0; FU < 2; FU++)
          for (let UU = QU.stateSlot(yU, FU ? 2 : 1);; UU += 3) {
            if (65535 == AU[UU]) {
              if (1 != AU[UU + 1]) {
                0 == cU && 2 == AU[UU + 1] && (cU = this.putAction(CU(AU, UU + 2), XU, zU, cU));
                break
              }
              UU = CU(AU, UU + 2)
            }
            AU[UU] == XU && (cU = this.putAction(CU(AU, UU + 1), XU, zU, cU))
          }
        return cU
      }
    }
    class PU {
      constructor(UU, XU, zU, cU) {
        this.parser = UU, this.input = XU, this.Qt = cU, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new YU(XU, cU), this.tokens = new RU(UU, this.stream), this.topTerm = UU.top[1];
        let {
          from: QU
        } = cU[0];
        this.stacks = [yU.start(this, UU.top[0], QU)], this.fragments = zU.length && this.stream.end - QU > 4 * UU.bufferLength ? new ZU(zU, UU.nodeSet) : null
      }
      get parsedPos() {
        return this.minStackPos
      }
      advance() {
        let UU, XU, zU = this.stacks,
          cU = this.minStackPos,
          yU = this.stacks = [];
        if (this.bigReductionCount > 300 && 1 == zU.length) {
          let [UU] = zU;
          for (; UU.forceReduce() && UU.stack.length && UU.stack[UU.stack.length - 2] >= this.lastBigReductionStart;);
          this.bigReductionCount = this.lastBigReductionSize = 0
        }
        for (let QU = 0; QU < zU.length; QU++) {
          let AU = zU[QU];
          for (;;) {
            if (this.tokens.mainToken = null, AU.pos > cU) yU.push(AU);
            else {
              if (this.advanceStack(AU, yU, zU)) continue;
              {
                UU || (UU = [], XU = []), UU.push(AU);
                let zU = this.tokens.getMainToken(AU);
                XU.push(zU.value, zU.end)
              }
            }
            break
          }
        }
        if (!yU.length) {
          let XU = UU && function(UU) {
            let XU = null;
            for (let zU of UU) {
              let UU = zU.p.stoppedAt;
              (zU.pos == zU.p.stream.end || null != UU && zU.pos > UU) && zU.p.parser.stateFlag(zU.state, 2) && (!XU || XU.score < zU.score) && (XU = zU)
            }
            return XU
          }(UU);
          if (XU) return kU && console.log("Finish with " + this.stackID(XU)), this.stackToTree(XU);
          if (this.parser.strict) throw kU && UU && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + cU);
          this.recovering || (this.recovering = 5)
        }
        if (this.recovering && UU) {
          let zU = null != this.stoppedAt && UU[0].pos > this.stoppedAt ? UU[0] : this.runRecovery(UU, XU, yU);
          if (zU) return kU && console.log("Force-finish " + this.stackID(zU)), this.stackToTree(zU.forceAll())
        }
        if (this.recovering) {
          let UU = 1 == this.recovering ? 1 : 3 * this.recovering;
          if (yU.length > UU)
            for (yU.sort(((UU, XU) => XU.score - UU.score)); yU.length > UU;) yU.pop();
          yU.some((UU => UU.reducePos > cU)) && this.recovering--
        } else if (yU.length > 1) {
          UU: for (let UU = 0; UU < yU.length - 1; UU++) {
            let XU = yU[UU];
            for (let zU = UU + 1; zU < yU.length; zU++) {
              let cU = yU[zU];
              if (XU.sameState(cU) || XU.buffer.length > 500 && cU.buffer.length > 500) {
                if (!((XU.score - cU.score || XU.buffer.length - cU.buffer.length) > 0)) {
                  yU.splice(UU--, 1);
                  continue UU
                }
                yU.splice(zU--, 1)
              }
            }
          }
          yU.length > 12 && (yU.sort(((UU, XU) => XU.score - UU.score)), yU.splice(12, yU.length - 12))
        }
        this.minStackPos = yU[0].pos;
        for (let QU = 1; QU < yU.length; QU++) yU[QU].pos < this.minStackPos && (this.minStackPos = yU[QU].pos);
        return null
      }
      stopAt(UU) {
        if (null != this.stoppedAt && this.stoppedAt < UU) throw new RangeError("Can't move stoppedAt forward");
        this.stoppedAt = UU
      }
      advanceStack(UU, XU, zU) {
        let yU = UU.pos,
          {
            parser: QU
          } = this,
          AU = kU ? this.stackID(UU) + " -> " : "";
        if (null != this.stoppedAt && yU > this.stoppedAt) return UU.forceReduce() ? UU : null;
        if (this.fragments) {
          let XU = UU.curContext && UU.curContext.tracker.strict,
            zU = XU ? UU.curContext.hash : 0;
          for (let FU = this.fragments.nodeAt(yU); FU;) {
            let yU = this.parser.nodeSet.types[FU.type.id] == FU.type ? QU.getGoto(UU.state, FU.type.id) : -1;
            if (yU > -1 && FU.length && (!XU || (FU.prop(cU.j.contextHash) || 0) == zU)) return UU.useNode(FU, yU), kU && console.log(AU + this.stackID(UU) + ` (via reuse of ${QU.getName(FU.type.id)})`), !0;
            if (!(FU instanceof cU.z) || 0 == FU.children.length || FU.positions[0] > 0) break;
            let oU = FU.children[0];
            if (!(oU instanceof cU.z && 0 == FU.positions[0])) break;
            FU = oU
          }
        }
        let FU = QU.stateSlot(UU.state, 4);
        if (FU > 0) return UU.reduce(FU), kU && console.log(AU + this.stackID(UU) + ` (via always-reduce ${QU.getName(65535&FU)})`), !0;
        if (UU.stack.length >= 8400)
          for (; UU.stack.length > 6e3 && UU.forceReduce(););
        let oU = this.tokens.getActions(UU);
        for (let cU = 0; cU < oU.length;) {
          let FU = oU[cU++],
            DU = oU[cU++],
            EU = oU[cU++],
            YU = cU == oU.length || !zU,
            NU = YU ? UU : UU.split(),
            IU = this.tokens.mainToken;
          if (NU.apply(FU, DU, IU ? IU.start : NU.pos, EU), kU && console.log(AU + this.stackID(NU) + ` (via ${0==(65536&FU)?"shift":`reduce of ${QU.getName(65535&FU)}`} for ${QU.getName(DU)} @ ${yU}${NU==UU?"":", split"})`), YU) return !0;
          NU.pos > yU ? XU.push(NU) : zU.push(NU)
        }
        return !1
      }
      advanceFully(UU, XU) {
        let zU = UU.pos;
        for (;;) {
          if (!this.advanceStack(UU, null, null)) return !1;
          if (UU.pos > zU) return WU(UU, XU), !0
        }
      }
      runRecovery(UU, XU, zU) {
        let cU = null,
          yU = !1;
        for (let QU = 0; QU < UU.length; QU++) {
          let AU = UU[QU],
            FU = XU[QU << 1],
            oU = XU[1 + (QU << 1)],
            DU = kU ? this.stackID(AU) + " -> " : "";
          if (AU.deadEnd) {
            if (yU) continue;
            if (yU = !0, AU.restart(), kU && console.log(DU + this.stackID(AU) + " (restarted)"), this.advanceFully(AU, zU)) continue
          }
          let EU = AU.split(),
            YU = DU;
          for (let UU = 0; UU < 10 && EU.forceReduce(); UU++) {
            if (kU && console.log(YU + this.stackID(EU) + " (via force-reduce)"), this.advanceFully(EU, zU)) break;
            kU && (YU = this.stackID(EU) + " -> ")
          }
          for (let UU of AU.recoverByInsert(FU)) kU && console.log(DU + this.stackID(UU) + " (via recover-insert)"), this.advanceFully(UU, zU);
          this.stream.end > AU.pos ? (oU == AU.pos && (oU++, FU = 0), AU.recoverByDelete(FU, oU), kU && console.log(DU + this.stackID(AU) + ` (via recover-delete ${this.parser.getName(FU)})`), WU(AU, zU)) : (!cU || cU.score < EU.score) && (cU = EU)
        }
        return cU
      }
      stackToTree(UU) {
        return UU.close(), cU.z.build({
          buffer: FU.create(UU),
          nodeSet: this.parser.nodeSet,
          topID: this.topTerm,
          maxBufferLength: this.parser.bufferLength,
          reused: this.reused,
          start: this.Qt[0].from,
          length: UU.pos - this.Qt[0].from,
          minRepeatType: this.parser.minRepeatTerm
        })
      }
      stackID(UU) {
        let XU = (GU || (GU = new WeakMap)).get(UU);
        return XU || GU.set(UU, XU = String.fromCodePoint(this.nextStackID++)), XU + UU
      }
    }

    function WU(UU, XU) {
      for (let zU = 0; zU < XU.length; zU++) {
        let cU = XU[zU];
        if (cU.pos == UU.pos && cU.sameState(UU)) return void(XU[zU].score < UU.score && (XU[zU] = UU))
      }
      XU.push(UU)
    }
    class dU {
      constructor(UU, XU, zU) {
        this.source = UU, this.flags = XU, this.disabled = zU
      }
      allows(UU) {
        return !this.disabled || 0 == this.disabled[UU]
      }
    }
    const LU = UU => UU;
    class eU extends cU.w {
      constructor(UU) {
        if (super(), this.wrappers = [], 14 != UU.version) throw new RangeError(`Parser version (${UU.version}) doesn't match runtime version (14)`);
        let XU = UU.nodeNames.split(" ");
        this.minRepeatTerm = XU.length;
        for (let cU = 0; cU < UU.repeatNodeCount; cU++) XU.push("");
        let zU = Object.keys(UU.topRules).map((XU => UU.topRules[XU][1])),
          yU = [];
        for (let cU = 0; cU < XU.length; cU++) yU.push([]);

        function QU(UU, XU, zU) {
          yU[UU].push([XU, XU.deserialize(String(zU))])
        }
        if (UU.nodeProps)
          for (let FU of UU.nodeProps) {
            let UU = FU[0];
            "string" == typeof UU && (UU = cU.j[UU]);
            for (let XU = 1; XU < FU.length;) {
              let zU = FU[XU++];
              if (zU >= 0) QU(zU, UU, FU[XU++]);
              else {
                let cU = FU[XU + -zU];
                for (let yU = -zU; yU > 0; yU--) QU(FU[XU++], UU, cU);
                XU++
              }
            }
          }
        this.nodeSet = new cU.n(XU.map(((XU, QU) => cU.p.define({
          name: QU >= this.minRepeatTerm ? void 0 : XU,
          id: QU,
          props: yU[QU],
          top: zU.indexOf(QU) > -1,
          error: 0 == QU,
          skipped: UU.skippedNodes && UU.skippedNodes.indexOf(QU) > -1
        })))), UU.propSources && (this.nodeSet = this.nodeSet.extend(...UU.propSources)), this.strict = !1, this.bufferLength = cU.e;
        let AU = oU(UU.tokenData);
        this.context = UU.context, this.specializerSpecs = UU.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
        for (let cU = 0; cU < this.specializerSpecs.length; cU++) this.specialized[cU] = this.specializerSpecs[cU].term;
        this.specializers = this.specializerSpecs.map(wU), this.states = oU(UU.states, Uint32Array), this.data = oU(UU.stateData), this.goto = oU(UU.goto), this.maxTerm = UU.maxTerm, this.tokenizers = UU.tokenizers.map((UU => "number" == typeof UU ? new NU(AU, UU) : UU)), this.topRules = UU.topRules, this.dialects = UU.dialects || {}, this.dynamicPrecedences = UU.dynamicPrecedences || null, this.tokenPrecTable = UU.tokenPrec, this.termNames = UU.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]]
      }
      createParse(UU, XU, zU) {
        let cU = new PU(this, UU, XU, zU);
        for (let yU of this.wrappers) cU = yU(cU, UU, XU, zU);
        return cU
      }
      getGoto(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          cU = this.goto;
        if (XU >= cU[0]) return -1;
        for (let yU = cU[XU + 1];;) {
          let XU = cU[yU++],
            QU = 1 & XU,
            AU = cU[yU++];
          if (QU && zU) return AU;
          for (let zU = yU + (XU >> 1); yU < zU; yU++)
            if (cU[yU] == UU) return AU;
          if (QU) return -1
        }
      }
      hasAction(UU, XU) {
        let zU = this.data;
        for (let cU = 0; cU < 2; cU++)
          for (let yU, QU = this.stateSlot(UU, cU ? 2 : 1);; QU += 3) {
            if (65535 == (yU = zU[QU])) {
              if (1 != zU[QU + 1]) {
                if (2 == zU[QU + 1]) return CU(zU, QU + 2);
                break
              }
              yU = zU[QU = CU(zU, QU + 2)]
            }
            if (yU == XU || 0 == yU) return CU(zU, QU + 1)
          }
        return 0
      }
      stateSlot(UU, XU) {
        return this.states[6 * UU + XU]
      }
      stateFlag(UU, XU) {
        return (this.stateSlot(UU, 0) & XU) > 0
      }
      validAction(UU, XU) {
        return !!this.allActions(UU, (UU => UU == XU || null))
      }
      allActions(UU, XU) {
        let zU = this.stateSlot(UU, 4),
          cU = zU ? XU(zU) : void 0;
        for (let yU = this.stateSlot(UU, 1); null == cU; yU += 3) {
          if (65535 == this.data[yU]) {
            if (1 != this.data[yU + 1]) break;
            yU = CU(this.data, yU + 2)
          }
          cU = XU(CU(this.data, yU + 1))
        }
        return cU
      }
      nextStates(UU) {
        let XU = [];
        for (let zU = this.stateSlot(UU, 1);; zU += 3) {
          if (65535 == this.data[zU]) {
            if (1 != this.data[zU + 1]) break;
            zU = CU(this.data, zU + 2)
          }
          if (0 == (1 & this.data[zU + 2])) {
            let UU = this.data[zU + 1];
            XU.some(((XU, zU) => 1 & zU && XU == UU)) || XU.push(this.data[zU], UU)
          }
        }
        return XU
      }
      configure(UU) {
        let XU = Object.assign(Object.create(eU.prototype), this);
        if (UU.props && (XU.nodeSet = this.nodeSet.extend(...UU.props)), UU.top) {
          let zU = this.topRules[UU.top];
          if (!zU) throw new RangeError(`Invalid top rule name ${UU.top}`);
          XU.top = zU
        }
        return UU.tokenizers && (XU.tokenizers = this.tokenizers.map((XU => {
          let zU = UU.tokenizers.find((UU => UU.from == XU));
          return zU ? zU.to : XU
        }))), UU.specializers && (XU.specializers = this.specializers.slice(), XU.specializerSpecs = this.specializerSpecs.map(((zU, cU) => {
          let yU = UU.specializers.find((UU => UU.from == zU.external));
          if (!yU) return zU;
          let QU = Object.assign(Object.assign({}, zU), {
            external: yU.to
          });
          return XU.specializers[cU] = wU(QU), QU
        }))), UU.contextTracker && (XU.context = UU.contextTracker), UU.dialect && (XU.dialect = this.parseDialect(UU.dialect)), null != UU.strict && (XU.strict = UU.strict), UU.wrap && (XU.wrappers = XU.wrappers.concat(UU.wrap)), null != UU.bufferLength && (XU.bufferLength = UU.bufferLength), XU
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
        let XU = this.dynamicPrecedences;
        return null == XU ? 0 : XU[UU] || 0
      }
      parseDialect(UU) {
        let XU = Object.keys(this.dialects),
          zU = XU.map((() => !1));
        if (UU)
          for (let yU of UU.split(" ")) {
            let UU = XU.indexOf(yU);
            UU >= 0 && (zU[UU] = !0)
          }
        let cU = null;
        for (let yU = 0; yU < XU.length; yU++)
          if (!zU[yU])
            for (let UU, zU = this.dialects[XU[yU]]; 65535 != (UU = this.data[zU++]);)(cU || (cU = new Uint8Array(this.maxTerm + 1)))[UU] = 1;
        return new dU(UU, zU, cU)
      }
      static deserialize(UU) {
        return new eU(UU)
      }
    }

    function CU(UU, XU) {
      return UU[XU] | UU[XU + 1] << 16
    }

    function wU(UU) {
      if (UU.external) {
        let XU = UU.extend ? 1 : 0;
        return (zU, cU) => UU.external(zU, cU) << 1 | XU
      }
      return UU.get
    }
    var qU = zU(44040);
    const OU = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288],
      SU = new class {
        constructor(UU) {
          this.start = UU.start, this.shift = UU.shift || LU, this.reduce = UU.reduce || LU, this.reuse = UU.reuse || LU, this.hash = UU.hash || (() => 0), this.strict = !1 !== UU.strict
        }
      }({
        start: !1,
        shift: (UU, XU) => 5 == XU || 6 == XU || 320 == XU ? UU : 321 == XU,
        strict: !1
      }),
      rU = new pU(((UU, XU) => {
        let {
          next: zU
        } = UU;
        (125 == zU || -1 == zU || XU.context) && UU.acceptToken(318)
      }), {
        contextual: !0,
        fallback: !0
      }),
      uU = new pU(((UU, XU) => {
        let zU, {
          next: cU
        } = UU;
        OU.indexOf(cU) > -1 || (47 != cU || 47 != (zU = UU.peek(1)) && 42 != zU) && (125 == cU || 59 == cU || -1 == cU || XU.context || UU.acceptToken(316))
      }), {
        contextual: !0
      }),
      fU = new pU(((UU, XU) => {
        91 != UU.next || XU.context || UU.acceptToken(317)
      }), {
        contextual: !0
      }),
      iU = new pU(((UU, XU) => {
        let {
          next: zU
        } = UU;
        if (43 == zU || 45 == zU) {
          if (UU.advance(), zU == UU.next) {
            UU.advance();
            let zU = !XU.context && XU.canShift(1);
            UU.acceptToken(zU ? 1 : 2)
          }
        } else 63 == zU && 46 == UU.peek(1) && (UU.advance(), UU.advance(), (UU.next < 48 || UU.next > 57) && UU.acceptToken(3))
      }), {
        contextual: !0
      });

    function HU(UU, XU) {
      return UU >= 65 && UU <= 90 || UU >= 97 && UU <= 122 || 95 == UU || UU >= 192 || !XU && UU >= 48 && UU <= 57
    }
    const MU = new pU(((UU, XU) => {
        if (60 != UU.next || !XU.dialectEnabled(0)) return;
        if (UU.advance(), 47 == UU.next) return;
        let zU = 0;
        for (; OU.indexOf(UU.next) > -1;) UU.advance(), zU++;
        if (HU(UU.next, !0)) {
          for (UU.advance(), zU++; HU(UU.next, !1);) UU.advance(), zU++;
          for (; OU.indexOf(UU.next) > -1;) UU.advance(), zU++;
          if (44 == UU.next) return;
          for (let XU = 0;; XU++) {
            if (7 == XU) {
              if (!HU(UU.next, !0)) return;
              break
            }
            if (UU.next != "extends".charCodeAt(XU)) break;
            UU.advance(), zU++
          }
        }
        UU.acceptToken(4, -zU)
      })),
      vU = (0, qU.e)({
        "get set async static": qU.k.modifier,
        "for while do if else switch try catch finally return throw break continue default case defer": qU.k.controlKeyword,
        "in of await yield void typeof delete instanceof as satisfies": qU.k.operatorKeyword,
        "let var const using function class extends": qU.k.definitionKeyword,
        "import export from": qU.k.moduleKeyword,
        "with debugger new": qU.k.keyword,
        TemplateString: qU.k.special(qU.k.string),
        super: qU.k.atom,
        BooleanLiteral: qU.k.bool,
        this: qU.k.self,
        null: qU.k.null,
        Star: qU.k.modifier,
        VariableName: qU.k.variableName,
        "CallExpression/VariableName TaggedTemplateExpression/VariableName": qU.k.function(qU.k.variableName),
        VariableDefinition: qU.k.definition(qU.k.variableName),
        Label: qU.k.labelName,
        PropertyName: qU.k.propertyName,
        PrivatePropertyName: qU.k.special(qU.k.propertyName),
        "CallExpression/MemberExpression/PropertyName": qU.k.function(qU.k.propertyName),
        "FunctionDeclaration/VariableDefinition": qU.k.function(qU.k.definition(qU.k.variableName)),
        "ClassDeclaration/VariableDefinition": qU.k.definition(qU.k.className),
        "NewExpression/VariableName": qU.k.className,
        PropertyDefinition: qU.k.definition(qU.k.propertyName),
        PrivatePropertyDefinition: qU.k.definition(qU.k.special(qU.k.propertyName)),
        UpdateOp: qU.k.updateOperator,
        "LineComment Hashbang": qU.k.lineComment,
        BlockComment: qU.k.blockComment,
        Number: qU.k.number,
        String: qU.k.string,
        Escape: qU.k.escape,
        ArithOp: qU.k.arithmeticOperator,
        LogicOp: qU.k.logicOperator,
        BitOp: qU.k.bitwiseOperator,
        CompareOp: qU.k.compareOperator,
        RegExp: qU.k.regexp,
        Equals: qU.k.definitionOperator,
        Arrow: qU.k.function(qU.k.punctuation),
        ": Spread": qU.k.punctuation,
        "( )": qU.k.paren,
        "[ ]": qU.k.squareBracket,
        "{ }": qU.k.brace,
        "InterpolationStart InterpolationEnd": qU.k.special(qU.k.brace),
        ".": qU.k.derefOperator,
        ", ;": qU.k.separator,
        "@": qU.k.meta,
        TypeName: qU.k.typeName,
        TypeDefinition: qU.k.definition(qU.k.typeName),
        "type enum interface implements namespace module declare": qU.k.definitionKeyword,
        "abstract global Privacy readonly override": qU.k.modifier,
        "is keyof unique infer asserts": qU.k.operatorKeyword,
        JSXAttributeValue: qU.k.attributeValue,
        JSXText: qU.k.content,
        "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": qU.k.angleBracket,
        "JSXIdentifier JSXNameSpacedName": qU.k.tagName,
        "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": qU.k.attributeName,
        "JSXBuiltin/JSXIdentifier": qU.k.standard(qU.k.tagName)
      }),
      VU = {
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
      sU = {
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
      nU = {
        __proto__: null,
        "<": 193
      },
      mU = eU.deserialize({
        version: 14,
        states: "$F|Q%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Il'#IlO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JrO6[Q!0MxO'#JsO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO9XQMhO'#F|O9`Q`O'#F{OOQ!0Lf'#Js'#JsOOQ!0Lb'#Jr'#JrO9eQ`O'#GwOOQ['#K_'#K_O9pQ`O'#IYO9uQ!0LrO'#IZOOQ['#J`'#J`OOQ['#I_'#I_Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GsO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EyO;hQMhO'#FeO;xQ`O'#GsOOQO'#K`'#K`O;}Q`O'#K`O<]Q`O'#G{O<]Q`O'#G|O<]Q`O'#HOO9kQ`O'#HRO=SQ`O'#HUO>kQ`O'#CeO>{Q`O'#HcO?TQ`O'#HiO?TQ`O'#HkO`QlO'#HmO?TQ`O'#HoO?TQ`O'#HrO?YQ`O'#HxO?_Q!0LsO'#IOO%[QlO'#IQO?jQ!0LsO'#ISO?uQ!0LsO'#IUO9uQ!0LrO'#IWO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jv'#JvO%[QlO'#JvOOQO'#Jy'#JyOOQO'#Ih'#IhOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J}'#J}OC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jx'#JxODlQpO'#JyOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CD})CD}OOOO'#I`'#I`OFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ia'#IaOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Ic'#IcOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IdOGyQ`O'#JtOIxQ!fO'#JtO+}QlO'#JtOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KTOKPQ`O'#KSOKPQ`O'#KSOKXQ`O,5;^OK^Q`O'#KROOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KQONtQ`O'#KPO9eQ`O'#KPO! YQ`O'#KPO! bQ`O,5;]O! gQ`O'#KPO!#lQ!fO'#JsOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#Jz'#JzOOQO-E<j-E<jO9kQ`O,5=_O!$rQ`O,5=_O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;dO!(|QpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)[QlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IpO!+_Q!0LrO,5<iO%[QlO,5;eO!&zQMhO,5;eO!+|QMhO,5;eO!-nQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-uQ,UO'#FjO!.rQ,UO'#KXO!.^Q,UO'#KXO!.yQ,UO'#KXOOQO'#KX'#KXO!/_Q,UO,5<SOOOW,5<`,5<`O!/pQlO'#FvOOOW'#Io'#IoO7VO7dO,5<QO!/wQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<eO!1pQ`O,5<hO!3YQ(CWO'#GXO!3jQ`O'#GYO!3oQ`O'#GYO!5_Q(CWO'#G^O!6dQpO'#GbOOQO'#Gn'#GnO!,TQMhO'#GmOOQO'#Gp'#GpO!,TQMhO'#GoO!7VQ$IUO'#JlOOQ!0Lh'#Jl'#JlO!7aQ`O'#JkO!7oQ`O'#JjO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<eO1SQ`O'#DZO!,TQMhO'#GPO!,TQMhO'#GRO!8gQ`O'#GTO!8lQ`O'#GUO!3oQ`O'#G[O!,TQMhO'#GaO<]Q`O'#JkO!8qQ`O'#EqO!9`Q`O,5<gOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KR'#KRO!:iQ!0LrO'#KaO9uQ!0LrO,5=cO`QlO,5>tOOQ['#Jh'#JhOOQ[,5>u,5>uOOQ[-E<]-E<]O!<hQ!0MxO,5:bO!:]QpO,5:`O!?RQ!0MxO,5:jO%[QlO,5:jO!AiQ!0MxO,5:lOOQO,5@z,5@zO!BYQMhO,5=_O!BhQ!0LrO'#JiO9`Q`O'#JiO!ByQ!0LrO,59ZO!CUQpO,59ZO!C^QMhO,59ZO:dQMhO,59ZO!CiQ`O,5;ZO!CqQ`O'#HbO!DVQ`O'#KdO%[QlO,5;}O!:]QpO,5<PO!D_Q`O,5=zO!DdQ`O,5=zO!DiQ`O,5=zO!DwQ`O,5=zO9uQ!0LrO,5=zO<]Q`O,5=jOOQO'#Cy'#CyO!EOQpO,5=gO!EWQMhO,5=hO!EcQ`O,5=jO!EhQ!bO,5=mO!EpQ`O'#K`O?YQ`O'#HWO9kQ`O'#HYO!EuQ`O'#HYO:dQMhO'#H[O!EzQ`O'#H[OOQ[,5=p,5=pO!FPQ`O'#H]O!FbQ`O'#CoO!FgQ`O,59PO!FqQ`O,59PO!HvQlO,59POOQ[,59P,59PO!IWQ!0LrO,59PO%[QlO,59PO!KcQlO'#HeOOQ['#Hf'#HfOOQ['#Hg'#HgO`QlO,5=}O!KyQ`O,5=}O`QlO,5>TO`QlO,5>VO!LOQ`O,5>XO`QlO,5>ZO!LTQ`O,5>^O!LYQlO,5>dOOQ[,5>j,5>jO%[QlO,5>jO9uQ!0LrO,5>lOOQ[,5>n,5>nO#!dQ`O,5>nOOQ[,5>p,5>pO#!dQ`O,5>pOOQ[,5>r,5>rO##QQpO'#D_O%[QlO'#JvO##sQpO'#JvO##}QpO'#DmO#$`QpO'#DmO#&qQlO'#DmO#&xQ`O'#JuO#'QQ`O,5:WO#'VQ`O'#EtO#'eQ`O'#KUO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CUQpO,5;YO!C^QMhO,5;YO:dQMhO,5;YO#(`Q`O,5@bO#(eQ07dO,5:sOOQO-E<f-E<fO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!ByQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CUQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I^'#I^P#+RO&2DjO,58|POOO,58|,58|OOOO-E<^-E<^OOQ!0Lh1G.p1G.pOOOO-E<_-E<_OOOO,59},59}O#+^Q!bO,59}OOOO-E<a-E<aOOQ!0Lf1G/g1G/gO#+cQ!fO,5?OO+}QlO,5?OOOQO,5?U,5?UO#+mQlO'#IdOOQO-E<b-E<bO#+zQ`O,5@`O#,SQ!fO,5@`O#,ZQ`O,5@nOOQ!0Lf1G/m1G/mO%[QlO,5@oO#,cQ`O'#IjOOQO-E<h-E<hO#,ZQ`O,5@nOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@lO#,wQ!0LrO,5@lO#-YQ!0LrO,5@lO#-aQ`O,5@kO9eQ`O,5@kO#-iQ`O,5@kO#-wQ`O'#ImO#-aQ`O,5@kOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2yO9kQ`O1G2yOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0rQ!0MzO'#JlO!$wQlO1G0uO#2}Q!fO'#JwO%[QlO'#JwO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#3^Q`O1G1OO#5rQ!0MxO1G1PO#5yQ!0MxO1G1PO#8aQ!0MxO1G1PO#8hQ!0MxO1G1PO#;OQ!0MxO1G1PO#=fQ!0MxO1G1PO#=mQ!0MxO1G1PO#=tQ!0MxO1G1PO#@[Q!0MxO1G1PO#@cQ!0MxO1G1PO#BpQ?MtO'#CiO#DkQ?MtO1G1`O#DrQ?MtO'#JsO#EVQ!0MxO,5?[OOQ!0Lb-E<n-E<nO#GdQ!0MxO1G1PO#HaQ!0MzO1G1POOQ!0Lf1G1P1G1PO#IdQMjO'#J|O#InQ`O,5:xO#IsQ!0MxO1G1cO#JgQ,UO,5<WO#JoQ,UO,5<XO#JwQ,UO'#FoO#K`Q`O'#FnOOQO'#KY'#KYOOQO'#In'#InO#KeQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#KvQ?MtO'#JrO#LQQ`O,5<bO!)[QlO,5<bOOOW-E<m-E<mOOQ!0Lf1G1l1G1lO#LVQpO'#KXOOQ!0Lf,5<d,5<dO#L_QpO,5<dO#LdQMhO'#DTOOOO'#Ib'#IbO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8lQ`O'#IrO#LvQ`O,5<zOOQ!0Lh,5<w,5<wO!,TQMhO'#IuO#MdQMjO,5=XO!,TQMhO'#IwO#NVQMjO,5=ZO!&zQMhO,5=]OOQO1G2S1G2SO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GbO$!dQ!dO,5<sO$!kQ`O'#K[O9eQ`O'#K[O$!yQ`O,5<uO$#aQ!dO'#C{O!,TQMhO,5<tO$#kQ`O'#GZO$$PQ`O,5<tO$$UQ!dO'#GWO$$cQ!dO'#K]O$$mQ`O'#K]O!&zQMhO'#K]O$$rQ`O,5<xO$$wQlO'#JvO$%RQpO'#GcO#$`QpO'#GcO$%dQ`O'#GgO!3oQ`O'#GkO$%iQ!0LrO'#ItO$%tQpO,5<|OOQ!0Lp,5<|,5<|O$%{QpO'#GcO$&YQpO'#GdO$&kQpO'#GdO$&pQMjO,5=XO$'QQMjO,5=ZOOQ!0Lh,5=^,5=^O!,TQMhO,5@VO!,TQMhO,5@VO$'bQ`O'#IyO$'vQ`O,5@UO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@VO$)TQ$IYO,59uOOQ!0Lh'#Jp'#JpO$)vQMjO,5<kO$*iQMjO,5<mO@zQ`O,5<oOOQ!0Lh,5<p,5<pO$*sQ`O,5<vO$*xQMjO,5<{O$+YQ`O'#KPO!$wQlO1G2RO$+_Q`O1G2RO9eQ`O'#KSO9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I{O$+dQ!0LrO,5@{OOQ[1G2}1G2}OOQ[1G4`1G4`OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-fQ!0MxO1G0UOOQ[1G2y1G2yO!&zQMhO1G2yO%[QlO1G2yO#.tQ`O1G2yO$/jQMhO'#EkOOQ!0Lb,5@T,5@TO$/wQ!0LrO,5@TOOQ[1G.u1G.uO!ByQ!0LrO1G.uO!CUQpO1G.uO!C^QMhO1G.uO$0YQ`O1G0uO$0_Q`O'#CiO$0jQ`O'#KeO$0rQ`O,5=|O$0wQ`O'#KeO$0|Q`O'#KeO$1[Q`O'#JRO$1jQ`O,5AOO$1rQ!fO1G1iOOQ!0Lf1G1k1G1kO9kQ`O1G3fO@zQ`O1G3fO$1yQ`O1G3fO$2OQ`O1G3fO!DiQ`O1G3fO9uQ!0LrO1G3fOOQ[1G3f1G3fO!EcQ`O1G3UO!&zQMhO1G3RO$2TQ`O1G3ROOQ[1G3S1G3SO!&zQMhO1G3SO$2YQ`O1G3SO$2bQpO'#HQOOQ[1G3U1G3UO!6_QpO'#I}O!EhQ!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$2jQMhO,5=tO9kQ`O,5=tO$%dQ`O,5=vO9`Q`O,5=vO!CUQpO,5=vO!C^QMhO,5=vO:dQMhO,5=vO$2xQ`O'#KcO$3TQ`O,5=wOOQ[1G.k1G.kO$3YQ!0LrO1G.kO@zQ`O1G.kO$3eQ`O1G.kO9uQ!0LrO1G.kO$5mQ!fO,5AQO$5zQ`O,5AQO9eQ`O,5AQO$6VQlO,5>PO$6^Q`O,5>POOQ[1G3i1G3iO`QlO1G3iOOQ[1G3o1G3oOOQ[1G3q1G3qO?TQ`O1G3sO$6cQlO1G3uO$:gQlO'#HtOOQ[1G3x1G3xO$:tQ`O'#HzO?YQ`O'#H|OOQ[1G4O1G4OO$:|QlO1G4OO9uQ!0LrO1G4UOOQ[1G4W1G4WOOQ!0Lb'#G_'#G_O9uQ!0LrO1G4YO9uQ!0LrO1G4[O$?TQ`O,5@bO!)[QlO,5;`O9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CUQpO,5:XO$?YQ?MtO,5:XOOQO,5;`,5;`O$?dQpO'#IeO$?zQ`O,5@aOOQ!0Lf1G/r1G/rO$@SQpO'#IkO$@^Q`O,5@pOOQ!0Lb1G0y1G0yO#$`QpO,5:XOOQO'#Ig'#IgO$@fQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CUQpO1G0tO!C^QMhO1G0tOOQ!0Lb1G5|1G5|O!ByQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@mQ!0LrO1G0mO$@xQ!0LrO1G0mO!CUQpO1G0^ODWQpO1G0^O$AWQ!0LrO1G0mOOQO1G0^1G0^O$AlQ!0MxO1G0mPOOO-E<[-E<[POOO1G.h1G.hOOOO1G/i1G/iO$AvQ!bO,5<iO$BOQ!fO1G4jOOQO1G4p1G4pO%[QlO,5?OO$BYQ`O1G5zO$BbQ`O1G6YO$BjQ!fO1G6ZO9eQ`O,5?UO$BtQ!0MxO1G6WO%[QlO1G6WO$CUQ!0LrO1G6WO$CgQ`O1G6VO$CgQ`O1G6VO9eQ`O1G6VO$CoQ`O,5?XO9eQ`O,5?XOOQO,5?X,5?XO$DTQ`O,5?XO$+YQ`O,5?XOOQO-E<k-E<kOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(e7+(eO!&zQMhO7+(eO%[QlO7+(eO$DcQ`O7+(eO$DnQMhO7+(eO$D|Q!0MzO,5=XO$GXQ!0MzO,5=ZO$IdQ!0MzO,5=XO$KuQ!0MzO,5=ZO$NWQ!0MzO,59uO%!]Q!0MzO,5<kO%$hQ!0MzO,5<mO%&sQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%)UQ!0MxO7+&aO%)xQlO'#IfO%*VQ`O,5@cO%*_Q!fO,5@cOOQ!0Lf1G0P1G0PO%*iQ`O7+&jOOQ!0Lf7+&j7+&jO%*nQ?MtO,5:fO%[QlO7+&zO%*xQ?MtO,5:bO%+VQ?MtO,5:jO%+aQ?MtO,5:lO%+kQMhO'#IiO%+uQ`O,5@hOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%+}Q!jO,5<ZO!)[QlO,5<YOOQO-E<l-E<lOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%,YQ`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%,_Q!dO,59oOOOO-E<`-E<`OOQ!0Lh1G/X1G/XO%,fQ!0MxO7+'kOOQ!0Lh,5?^,5?^O%-YQMhO1G2fP%-aQ`O'#IrPOQ!0Lh-E<p-E<pO%-}QMjO,5?aOOQ!0Lh-E<s-E<sO%.pQMjO,5?cOOQ!0Lh-E<u-E<uO%.zQ!dO1G2wO%/RQ!dO'#CrO%/iQMhO'#KSO$$wQlO'#JvOOQ!0Lh1G2_1G2_O%/sQ`O'#IqO%0[Q`O,5@vO%0[Q`O,5@vO%0dQ`O,5@vO%0oQ`O,5@vOOQO1G2a1G2aO%0}QMjO1G2`O$+YQ`O'#K[O!,TQMhO1G2`O%1_Q(CWO'#IsO%1lQ`O,5@wO!&zQMhO,5@wO%1tQ!dO,5@wOOQ!0Lh1G2d1G2dO%4UQ!fO'#CiO%4`Q`O,5=POOQ!0Lb,5<},5<}O%4hQpO,5<}OOQ!0Lb,5=O,5=OOCwQ`O,5<}O%4sQpO,5<}OOQ!0Lb,5=R,5=RO$+YQ`O,5=VOOQO,5?`,5?`OOQO-E<r-E<rOOQ!0Lp1G2h1G2hO#$`QpO,5<}O$$wQlO,5=PO%5RQ`O,5=OO%5^QpO,5=OO!,TQMhO'#IuO%6WQMjO1G2sO!,TQMhO'#IwO%6yQMjO1G2uO%7TQMjO1G5qO%7_QMjO1G5qOOQO,5?e,5?eOOQO-E<w-E<wOOQO1G.{1G.{O!,TQMhO1G5qO!,TQMhO1G5qO!:]QpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%7lQ`O1G2ZO!,TQMhO1G2bO%7qQ!0MxO7+'mOOQ!0Lf7+'m7+'mO!$wQlO7+'mO%8eQ`O,5;`OOQ!0Lb,5?g,5?gOOQ!0Lb-E<y-E<yO%8jQ!dO'#K^O#(ZQ`O7+(eO4UQ!fO7+(eO$DfQ`O7+(eO%8tQ!0MvO'#CiO%9XQ!0MvO,5=SO%9lQ`O,5=SO%9tQ`O,5=SOOQ!0Lb1G5o1G5oOOQ[7+$a7+$aO!ByQ!0LrO7+$aO!CUQpO7+$aO!$wQlO7+&aO%9yQ`O'#JQO%:bQ`O,5APOOQO1G3h1G3hO9kQ`O,5APO%:bQ`O,5APO%:jQ`O,5APOOQO,5?m,5?mOOQO-E=P-E=POOQ!0Lf7+'T7+'TO%:oQ`O7+)QO9uQ!0LrO7+)QO9kQ`O7+)QO@zQ`O7+)QO%:tQ`O7+)QOOQ[7+)Q7+)QOOQ[7+(p7+(pO%:yQ!0MvO7+(mO!&zQMhO7+(mO!E^Q`O7+(nOOQ[7+(n7+(nO!&zQMhO7+(nO%;TQ`O'#KbO%;`Q`O,5=lOOQO,5?i,5?iOOQO-E<{-E<{OOQ[7+(s7+(sO%<rQpO'#HZOOQ[1G3`1G3`O!&zQMhO1G3`O%[QlO1G3`O%<yQ`O1G3`O%=UQMhO1G3`O9uQ!0LrO1G3bO$%dQ`O1G3bO9`Q`O1G3bO!CUQpO1G3bO!C^QMhO1G3bO%=dQ`O'#JPO%=xQ`O,5@}O%>QQpO,5@}OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>]Q`O7+$VO%[QlO1G6lO%[QlO1G6mO%>bQ!0LrO1G6lO%>lQlO1G3kO%>sQ`O1G3kO%>xQlO1G3kOOQ[7+)T7+)TO9uQ!0LrO7+)_O`QlO7+)aOOQ['#Kh'#KhOOQ['#JS'#JSO%?PQlO,5>`OOQ[,5>`,5>`O%[QlO'#HuO%?^Q`O'#HwOOQ[,5>f,5>fO9eQ`O,5>fOOQ[,5>h,5>hOOQ[7+)j7+)jOOQ[7+)p7+)pOOQ[7+)t7+)tOOQ[7+)v7+)vO%?cQpO1G5|O%?}Q?MtO1G0zO%@XQ`O1G0zOOQO1G/s1G/sO%@dQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?V,5?VOOQO-E<i-E<iO!CUQpO1G/sOOQO-E<e-E<eOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CUQpO7+&`OOQO7+%x7+%xO$AlQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@nQ!0LrO7+&XO!ByQ!0LrO7+%xO!CUQpO7+%xO%@yQ!0LrO7+&XO%AXQ!0MxO7++rO%[QlO7++rO%AiQ`O7++qO%AiQ`O7++qOOQO1G4s1G4sO9eQ`O1G4sO%AqQ`O1G4sOOQS7+%}7+%}O#(ZQ`O<<LPO4UQ!fO<<LPO%BPQ`O<<LPOOQ[<<LP<<LPO!&zQMhO<<LPO%[QlO<<LPO%BXQ`O<<LPO%BdQ!0MzO,5?aO%DoQ!0MzO,5?cO%FzQ!0MzO1G2`O%I]Q!0MzO1G2sO%KhQ!0MzO1G2uO%MsQ!fO,5?QO%[QlO,5?QOOQO-E<d-E<dO%M}Q`O1G5}OOQ!0Lf<<JU<<JUO%NVQ?MtO1G0uO&!^Q?MtO1G1PO&!eQ?MtO1G1PO&$fQ?MtO1G1PO&$mQ?MtO1G1PO&&nQ?MtO1G1PO&(oQ?MtO1G1PO&(vQ?MtO1G1PO&(}Q?MtO1G1PO&+OQ?MtO1G1PO&+VQ?MtO1G1PO&+^Q!0MxO<<JfO&-UQ?MtO1G1PO&.RQ?MvO1G1PO&/UQ?MvO'#JlO&1[Q?MtO1G1cO&1iQ?MtO1G0UO&1sQMjO,5?TOOQO-E<g-E<gO!)[QlO'#FqOOQO'#KZ'#KZOOQO1G1u1G1uO&1}Q`O1G1tO&2SQ?MtO,5?[OOOW7+'h7+'hOOOO1G/Z1G/ZO&2^Q!dO1G4xOOQ!0Lh7+(Q7+(QP!&zQMhO,5?^O!,TQMhO7+(cO&2eQ`O,5?]O9eQ`O,5?]O$+YQ`O,5?]OOQO-E<o-E<oO&2sQ`O1G6bO&2sQ`O1G6bO&2{Q`O1G6bO&3WQMjO7+'zO&3hQ!dO,5?_O&3rQ`O,5?_O!&zQMhO,5?_OOQO-E<q-E<qO&3wQ!dO1G6cO&4RQ`O1G6cO&4ZQ`O1G2kO!&zQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%4hQpO1G2iO!CUQpO1G2iOCwQ`O1G2iOOQ!0Lb1G2q1G2qO&4`QpO1G2iO&4nQ`O1G2kO$+YQ`O1G2jOCwQ`O1G2jO$$wQlO1G2kO&4vQ`O1G2jO&5jQMjO,5?aOOQ!0Lh-E<t-E<tO&6]QMjO,5?cOOQ!0Lh-E<v-E<vO!,TQMhO7++]O&6gQMjO7++]O&6qQMjO7++]OOQ!0Lh1G/c1G/cO&7OQ`O1G/cOOQ!0Lh7+'u7+'uO&7TQMjO7+'|O&7eQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&8XQ`O1G0zO!&zQMhO'#IzO&8^Q`O,5@xO&:`Q!fO<<LPO!&zQMhO1G2nO&:gQ!0LrO1G2nOOQ[<<G{<<G{O!ByQ!0LrO<<G{O&:xQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?l,5?lO&;lQ`O,5?lO&;qQ`O,5?lOOQO-E=O-E=OO&<PQ`O1G6kO&<PQ`O1G6kO9kQ`O1G6kO@zQ`O<<LlOOQ[<<Ll<<LlO&<XQ`O<<LlO9uQ!0LrO<<LlO9kQ`O<<LlOOQ[<<LX<<LXO%:yQ!0MvO<<LXOOQ[<<LY<<LYO!E^Q`O<<LYO&<^QpO'#I|O&<iQ`O,5@|O!)[QlO,5@|OOQ[1G3W1G3WOOQO'#JO'#JOO9uQ!0LrO'#JOO&<qQpO,5=uOOQ[,5=u,5=uO&<xQpO'#EgO&=PQpO'#GeO&=UQ`O7+(zO&=ZQ`O7+(zOOQ[7+(z7+(zO!&zQMhO7+(zO%[QlO7+(zO&=cQ`O7+(zOOQ[7+(|7+(|O9uQ!0LrO7+(|O$%dQ`O7+(|O9`Q`O7+(|O!CUQpO7+(|O&=nQ`O,5?kOOQO-E<}-E<}OOQO'#H^'#H^O&=yQ`O1G6iO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>RQ`O7+,WO&>WQ`O7+,XO%[QlO7+,WO%[QlO7+,XOOQ[7+)V7+)VO&>]Q`O7+)VO&>bQlO7+)VO&>iQ`O7+)VOOQ[<<Ly<<LyOOQ[<<L{<<L{OOQ[-E=Q-E=QOOQ[1G3z1G3zO&>nQ`O,5>aOOQ[,5>c,5>cO&>sQ`O1G4QO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&>xQ?MtO1G6ZO?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AlQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!ByQ!0LrO<<IdO&?SQ!0LrO<<IsO&?_Q!0MxO<= ^O&?oQ`O<= ]OOQO7+*_7+*_O9eQ`O7+*_OOQ[ANAkANAkO&?wQ!fOANAkO!&zQMhOANAkO#(ZQ`OANAkO4UQ!fOANAkO&@OQ`OANAkO%[QlOANAkO&@WQ!0MzO7+'zO&BiQ!0MzO,5?aO&DtQ!0MzO,5?cO&GPQ!0MzO7+'|O&IbQ!fO1G4lO&IlQ?MtO7+&aO&KpQ?MvO,5=XO&MwQ?MvO,5=ZO&NXQ?MvO,5=XO&NiQ?MvO,5=ZO&NyQ?MvO,59uO'#PQ?MvO,5<kO'%SQ?MvO,5<mO''hQ?MvO,5<{O')^Q?MtO7+'kO')kQ?MtO7+'mO')xQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*d7+*dO')}QMjO<<K}OOQO1G4w1G4wO'*UQ`O1G4wO'*aQ`O1G4wO'*oQ`O7++|O'*oQ`O7++|O!&zQMhO1G4yO'*wQ!dO1G4yO'+RQ`O7++}O'+ZQ`O7+(VO'+fQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!CUQpO7+(TOCwQ`O7+(TO'+pQ`O7+(VO!&zQMhO7+(VO$+YQ`O7+(UO'+uQ`O7+(VOCwQ`O7+(UO'+}QMjO<<NwO!,TQMhO<<NwOOQ!0Lh7+$}7+$}O',XQ!dO,5?fOOQO-E<x-E<xO',cQ!0MvO7+(YO!&zQMhO7+(YOOQ[AN=gAN=gO9kQ`O1G5WOOQO1G5W1G5WO',sQ`O1G5WO',xQ`O7+,VO',xQ`O7+,VO9uQ!0LrOANBWO@zQ`OANBWOOQ[ANBWANBWO'-QQ`OANBWOOQ[ANAsANAsOOQ[ANAtANAtO'-VQ`O,5?hOOQO-E<z-E<zO'-bQ?MtO1G6hOOQO,5?j,5?jOOQO-E<|-E<|OOQ[1G3a1G3aO'-lQ`O,5=POOQ[<<Lf<<LfO!&zQMhO<<LfO&=UQ`O<<LfO'-qQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9uQ!0LrO<<LhO$%dQ`O<<LhO9`Q`O<<LhO'-yQpO1G5VO'.UQ`O7+,TOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= r<= rOOQ[<= s<= sO'.^Q`O<= rO'.cQ`O<= sOOQ[<<Lq<<LqO'.hQ`O<<LqO'.mQlO<<LqOOQ[1G3{1G3{O?YQ`O7+)lO'.tQ`O<<JQO'/PQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AlQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<My<<MyOOQ[G27VG27VO!&zQMhOG27VO#(ZQ`OG27VO'/ZQ!fOG27VO4UQ!fOG27VO'/bQ`OG27VO'/jQ?MtO<<JfO'/wQ?MvO1G2`O'1mQ?MvO,5?aO'3pQ?MvO,5?cO'5sQ?MvO1G2sO'7vQ?MvO1G2uO'9yQ?MtO<<KXO':WQ?MtO<<I{OOQO1G1w1G1wO!,TQMhOANAiOOQO7+*c7+*cO':eQ`O7+*cO':pQ`O<= hO':xQ!dO7+*eOOQ!0Lb<<Kq<<KqO$+YQ`O<<KqOCwQ`O<<KqO';SQ`O<<KqO!&zQMhO<<KqOOQ!0Lb<<Ko<<KoO!CUQpO<<KoO';_Q!dO<<KqOOQ!0Lb<<Kp<<KpO';iQ`O<<KqO!&zQMhO<<KqO$+YQ`O<<KpO';nQMjOANDcO';xQ!0MvO<<KtOOQO7+*r7+*rO9kQ`O7+*rO'<YQ`O<= qOOQ[G27rG27rO9uQ!0LrOG27rO@zQ`OG27rO!)[QlO1G5SO'<bQ`O7+,SO'<jQ`O1G2kO&=UQ`OANBQOOQ[ANBQANBQO!&zQMhOANBQO'<oQ`OANBQOOQ[ANBSANBSO9uQ!0LrOANBSO$%dQ`OANBSOOQO'#H_'#H_OOQO7+*q7+*qOOQ[G22wG22wOOQ[ANE^ANE^OOQ[ANE_ANE_OOQ[ANB]ANB]O'<wQ`OANB]OOQ[<<MW<<MWO!)[QlOAN?lOOQOG24yG24yO$AlQ!0MxOG24yO#(ZQ`OLD,qOOQ[LD,qLD,qO!&zQMhOLD,qO'<|Q!fOLD,qO'=TQ?MvO7+'zO'>yQ?MvO,5?aO'@|Q?MvO,5?cO'CPQ?MvO7+'|O'DuQMjOG27TOOQO<<M}<<M}OOQ!0LbANA]ANA]O$+YQ`OANA]OCwQ`OANA]O'EVQ!dOANA]OOQ!0LbANAZANAZO'E^Q`OANA]O!&zQMhOANA]O'EiQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N^<<N^OOQ[LD-^LD-^O9uQ!0LrOLD-^O'EsQ?MtO7+*nOOQO'#Gf'#GfOOQ[G27lG27lO&=UQ`OG27lO!&zQMhOG27lOOQ[G27nG27nO9uQ!0LrOG27nOOQ[G27wG27wO'E}Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#(ZQ`O!$(!]O!&zQMhO!$(!]O'FXQ!0MzOG27TOOQ!0LbG26wG26wO$+YQ`OG26wO'HjQ`OG26wOCwQ`OG26wO'HuQ!dOG26wO!&zQMhOG26wOOQ[!$(!x!$(!xOOQ[LD-WLD-WO&=UQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#(ZQ`O!)9EwOOQ!0LbLD,cLD,cO$+YQ`OLD,cOCwQ`OLD,cO'H|Q`OLD,cO'IXQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'I`Q?MvOG27TOOQ!0Lb!$( }!$( }O$+YQ`O!$( }OCwQ`O!$( }O'KUQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$+YQ`O!)9EiOCwQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$+YQ`O!.K;TOOQ!0Lb!4/0o!4/0oO!)[QlO'#DzO1PQ`O'#EXO'KaQ!fO'#JrO'KhQ!L^O'#DvO'KoQlO'#EOO'KvQ!fO'#CiO'N^Q!fO'#CiO!)[QlO'#EQO'NnQlO,5;ZO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO'#IpO(!qQ`O,5<iO!)[QlO,5;eO(!yQMhO,5;eO($dQMhO,5;eO!)[QlO,5;wO!&zQMhO'#GmO(!yQMhO'#GmO!&zQMhO'#GoO(!yQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GPO(!yQMhO'#GPO!&zQMhO'#GRO(!yQMhO'#GRO!&zQMhO'#GaO(!yQMhO'#GaO!)[QlO,5:jO($kQpO'#D_O($uQpO'#JvO!)[QlO,5@oO'NnQlO1G0uO(%PQ?MtO'#CiO!)[QlO1G2PO!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO(%ZQ!dO'#CrO!&zQMhO,5<tO(!yQMhO,5<tO'NnQlO1G2RO!)[QlO7+&zO!&zQMhO1G2`O(!yQMhO1G2`O!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO!&zQMhO1G2bO(!yQMhO1G2bO'NnQlO7+'mO'NnQlO7+&aO!&zQMhOANAiO(!yQMhOANAiO(%nQ`O'#EoO(%sQ`O'#EoO(%{Q`O'#F]O(&QQ`O'#EyO(&VQ`O'#KTO(&bQ`O'#KRO(&mQ`O,5;ZO(&rQMjO,5<eO(&yQ`O'#GYO('OQ`O'#GYO('TQ`O,5<eO(']Q`O,5<gO('eQ`O,5;ZO('mQ?MtO1G1`O('tQ`O,5<tO('yQ`O,5<tO((OQ`O,5<vO((TQ`O,5<vO((YQ`O1G2RO((_Q`O1G0uO((dQMjO<<K}O((kQMjO<<K}O((rQMhO'#F|O9`Q`O'#F{OAuQ`O'#EnO!)[QlO,5;tO!3oQ`O'#GYO!3oQ`O'#GYO!3oQ`O'#G[O!3oQ`O'#G[O!,TQMhO7+(cO!,TQMhO7+(cO%.zQ!dO1G2wO%.zQ!dO1G2wO!&zQMhO,5=]O!&zQMhO,5=]",
        stateData: "()x~O'|OS'}OSTOS(ORQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&W!WO&^!XO&`!YO&b!ZO&d![O&g!]O&m!^O&s!_O&u!`O&w!aO&y!bO&{!cO(TSO(VTO(YUO(aVO(o[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O(O!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'z]X(a]X(r]X(y]X(z]X~O!g%RX~P(qO_!}O(V#PO(W!}O(X#PO~O_#QO(X#PO(Y#PO(Z#QO~Ox#SO!U#TO(b#TO(c#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T<ZO(VTO(YUO(aVO(o[O~O![#ZO!]#WO!Y(hP!Y(vP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(VTO(YUO(aVO(o[O~Op#mO![#iO!|]O#i#lO#j#iO(T<[O!k(sP~P.iO!l#oO(T#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa(fX'z(fX'w(fX!k(fX!Y(fX!_(fX%i(fX!g(fX~P1qO#S$dO#`$eO$Q$eOP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX!_(gX%i(gX~Oa(gX'z(gX'w(gX!Y(gX!k(gXv(gX!g(gX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T$sO(VTO(YUO(a$uO(y$}O(z%POg(^P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(T%gO~O!g%mO~Oa%nO'z%nO~O!Q%rO~P%[O(U!lO~P%[O%n%vO~P%[Oh%VO!l%eO(T%gO(U!lO~Oe%}O!l%eO(T%gO~Oj$RO~O!_&PO(T%gO(U!lO(VTO(YUO`)WP~O!Q&SO!l&RO%j&VO&T&WO~P;SO!x#sO~O%s&YO!S)SX!_)SX(T)SX~O(T&ZO~Ol!PO!u&`O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&eOe&dO!x&bO%h&cO%{&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&kO#`&nO%j&iO(U!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'x&{O'z%nO~Oa%nO'x'OO'z%nO~Oa%nO'x'QO'z%nO~O'w]X!Y]Xv]X!k]X&[]X!_]X%i]X!g]X~P(qO!b'_O!c'WO!d'WO(U!lO(VTO(YUO~Os'UO!S'TO!['XO(e'SO!^(iP!^(xP~P@nOn'bO!_'`O(T%gO~Oe'gO!l%eO(T%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<VO#T!pO#U!pO#W!pO#X!pO(U!lO(VTO(YUO(e!mO(o!sO~O!b'mO!c'lO!d'lO#V!pO#['nO#]'nO~PBYOa%nOh%VO!g#vO!l%eO'z%nO(r'pO~O!p'tO#`'rO~PChOs!nO!S!oO(VTO(YUO(e!mO(o!sO~O!_XOs(mX!S(mX!b(mX!c(mX!d(mX!|(mX#T(mX#U(mX#V(mX#W(mX#X(mX#[(mX#](mX(U(mX(V(mX(Y(mX(e(mX(o(mX~O!c'lO!d'lO(U!lO~PDWO(P'xO(Q'xO(R'zO~O_!}O(V'|O(W!}O(X'|O~O_#QO(X'|O(Y'|O(Z#QO~Ov(OO~P%[Ox#SO!U#TO(b#TO(c(RO~O![(TO!Y'WX!Y'^X!]'WX!]'^X~P+}O!](VO!Y(hX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](VO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~O!Y(hX~PHRO!Y([O~O!Y(uX!](uX!g(uX!k(uX(r(uX~O#`(uX#k#dX!^(uX~PJUO#`(]O!Y(wX!](wX~O!](^O!Y(vX~O!Y(aO~O#`$eO~PJUO!^(bO~P`OR#zO!Q#yO!S#{O!l#xO(aVOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(r!na(y!na(z!na~Oa!na'z!na'w!na!Y!na!k!nav!na!_!na%i!na!g!na~PKlO!k(cO~O!g#vO#`(dO(r'pO!](tXa(tX'z(tX~O!k(tX~PNXO!S%hO!_%iO!|]O#i(iO#j(hO(T%gO~O!](jO!k(sX~O!k(lO~O!S%hO!_%iO#j(hO(T%gO~OP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~O!g#vO!k(gX~P! uOR(nO!Q(mO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(T!{a~P!#vO!x(rO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~O#k(xO~O![(zO!k(kP~P%[O(e(|O(o[O~O!S)OO!l#xO(e(|O(o[O~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]$_Oa$qa'z$qa'w$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)dO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Og(pP~P!,TO!Q)iO!g)hO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)hO!_({X$Z({X$]({X$_({X$f({X~O!Q)iO~P!.^O!Q)iO!_({X$Z({X$]({X$_({X$f({X~O!_)kO$Z)oO$])jO$_)jO$f)pO~O![)sO~P!)[O$]$hO$_$gO$f)wO~On$zX!Q$zX#S$zX'y$zX(y$zX(z$zX~OgmXg$zXnmX!]mX#`mX~P!0SOx)yO(b)zO(c)|O~On*VO!Q*OO'y*PO(y$}O(z%PO~Og)}O~P!1WOg*WO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S*YO!_*ZO!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op*`O![*^O(T*XO!k)OP~P!1uO#k*aO~O!l*bO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T*dO(VTO(YUO(a$uO(y$}O(z%PO~O![*gO!Y)PP~P!3tOr*sOs!nO!S*iO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO(e!mO~O!^*pO~P!5iO#S$dOn(`X!Q(`X'y(`X(y(`X(z(`X!](`X#`(`X~Og(`X$O(`X~P!6kOn*xO#`*wOg(_X!](_X~O!]*yOg(^X~Oj%dOk%dOl%dO(T&ZOg(^P~Os*|O~Og)}O(T&ZO~O!l+SO~O(T(vO~Op+WO!S%hO![#iO!_%iO!|]O#i#lO#j#iO(T%gO!k(sP~O!g#vO#k+XO~O!S%hO![+ZO!](^O!_%iO(T%gO!Y(vP~Os'[O!S+]O![+[O(VTO(YUO(e(|O~O!^(xP~P!9|O!]+^Oa)TX'z)TX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa!ja!]!ja'z!ja'w!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:tOR#zO!Q#yO!S#{O!l#xO(aVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(r!ra(y!ra(z!ra~Oa!ra'z!ra'w!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!=[OR#zO!Q#yO!S#{O!l#xO(aVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(r!ta(y!ta(z!ta~Oa!ta'z!ta'w!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?rOh%VOn+gO!_'`O%i+fO~O!g+iOa(]X!_(]X'z(]X!](]X~Oa%nO!_XO'z%nO~Oh%VO!l%eO~Oh%VO!l%eO(T%gO~O!g#vO#k(xO~Ob+tO%j+uO(T+qO(VTO(YUO!^)XP~O!]+vO`)WX~O[+zO~O`+{O~O!_&PO(T%gO(U!lO`)WP~O%j,OO~P;SOh%VO#`,SO~Oh%VOn,VO!_$|O~O!_,XO~O!Q,ZO!_XO~O%n%vO~O!x,`O~Oe,eO~Ob,fO(T#nO(VTO(YUO!^)VP~Oe%}O~O%j!QO(T&ZO~P=gO[,kO`,jO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(VTO(YUO(aVO(o[O~O!_!eO!u!gO$W!kO(T!dO~P!FyO`,jOa%nO'z%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa,pOl!OO!uwO%l!OO%m!OO%n!OO~P!IcO!l&oO~O&^,vO~O!_,xO~O&o,zO&q,{OP&laQ&laS&laY&laa&lad&lae&lal&lap&lar&las&lat&laz&la|&la!O&la!S&la!W&la!X&la!_&la!i&la!l&la!o&la!p&la!q&la!s&la!u&la!x&la!|&la$W&la$n&la%h&la%j&la%l&la%m&la%n&la%q&la%s&la%v&la%w&la%y&la&W&la&^&la&`&la&b&la&d&la&g&la&m&la&s&la&u&la&w&la&y&la&{&la'w&la(T&la(V&la(Y&la(a&la(o&la!^&la&e&lab&la&j&la~O(T-QO~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P#!iO!g-VO#`-UOh(jX!]#hX!^#hX!g(jX!l(jX~O!](jX!^(jX~P##[Oh%VO!g-XO!l%eO!]!aX!^!aX~Os!nO!S!oO(VTO(YUO(e!mO~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(VTO(YUO(aVO(o[O~O(T=QO~P#$qO!]-]O!^(iX~O!^-_O~O!g-VO#`-UO!]#hX!^#hX~O!]-`O!^(xX~O!^-bO~O!c-cO!d-cO(U!lO~P#$`O!^-fO~P'_On-iO!_'`O~O!Y-nO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(U!{a(V!{a(Y!{a(e!{a(o!{a~P!#vO!p-sO#`-qO~PChO!c-uO!d-uO(U!lO~PDWOa%nO#`-qO'z%nO~Oa%nO!g#vO#`-qO'z%nO~Oa%nO!g#vO!p-sO#`-qO'z%nO(r'pO~O(P'xO(Q'xO(R-zO~Ov-{O~O!Y'Wa!]'Wa~P!:tO![.PO!Y'WX!]'WX~P%[O!](VO!Y(ha~O!Y(ha~PHRO!](^O!Y(va~O!S%hO![.TO!_%iO(T%gO!Y'^X!]'^X~O#`.VO!](ta!k(taa(ta'z(ta~O!g#vO~P#,wO!](jO!k(sa~O!S%hO!_%iO#j.ZO(T%gO~Op.`O!S%hO![.]O!_%iO!|]O#i._O#j.]O(T%gO!]'aX!k'aX~OR.dO!l#xO~Oh%VOn.gO!_'`O%i.fO~Oa#ci!]#ci'z#ci'w#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:tOn>]O!Q*OO'y*PO(y$}O(z%PO~O#k#_aa#_a#`#_a'z#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#k(`XP(`XR(`X[(`Xa(`Xj(`Xr(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X'z(`X(a(`X(r(`X!k(`X!Y(`X'w(`Xv(`X!_(`X%i(`X!g(`X~P!6kO!].tO!k(kX~P!:tO!k.wO~O!Y.yO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#3cO#n$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#6QO#r$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(aVOa#mi!]#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(aVO(z#}Oa#mi!]#mi#z#mi#{#mi'z#mi(r#mi(y#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#;VO#x#mi~P#;VO#v$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(aVO(y#|O(z#}Oa#mi!]#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#={O#z$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X!]]X!^]X~O$O]X~P#@jOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO#z<gO#{<hO(aVO(r$YO(y#|O(z#}O~O$O.{O~P#BwO#S$dO#`<nO$Q<nO$O(gX!^(gX~P! uOa'da!]'da'z'da'w'da!k'da!Y'dav'da!_'da%i'da!g'da~P!:tO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO(y#mi(z#mi~P#EyOn>]O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P#EyO!]/POg(pX~P!1WOg/RO~Oa$Pi!]$Pi'z$Pi'w$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:tO$]/SO$_/SO~O$]/TO$_/TO~O!g)hO#`/UO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/VO~O!_)kO$Z/XO$])jO$_)jO$f/YO~O!]<iO!^(fX~P#BwO!^/ZO~O!g)hO$f({X~O$f/]O~Ov/^O~P!&zOx)yO(b)zO(c/aO~O!S/dO~O(y$}On%aa!Q%aa'y%aa(z%aa!]%aa#`%aa~Og%aa$O%aa~P#L{O(z%POn%ca!Q%ca'y%ca(y%ca!]%ca#`%ca~Og%ca$O%ca~P#MnO!]fX!gfX!kfX!k$zX(rfX~P!0SOp%WO![/mO!](^O(T/lO!Y(vP!Y)PP~P!1uOr*sO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO~Os<}O!S/nO![+[O!^*pO(e<|O!^(xP~P$ [O!k/oO~P#/sO!]/pO!g#vO(r'pO!k)OX~O!k/uO~OnoX!QoX'yoX(yoX(zoX~O!g#vO!koX~P$#OOp/wO!S%hO![*^O!_%iO(T%gO!k)OP~O#k/xO~O!Y$zX!]$zX!g%RX~P!0SO!]/yO!Y)PX~P#/sO!g/{O~O!Y/}O~OpkO(T0OO~P.iOh%VOr0TO!g#vO!l%eO(r'pO~O!g+iO~Oa%nO!]0XO'z%nO~O!^0ZO~P!5iO!c0[O!d0[O(U!lO~P#$`Os!nO!S0]O(VTO(YUO(e!mO~O#[0_O~Og%aa!]%aa#`%aa$O%aa~P!1WOg%ca!]%ca#`%ca$O%ca~P!1WOj%dOk%dOl%dO(T&ZOg'mX!]'mX~O!]*yOg(^a~Og0hO~On0jO#`0iOg(_a!](_a~OR0kO!Q0kO!S0lO#S$dOn}a'y}a(y}a(z}a!]}a#`}a~Og}a$O}a~P$(cO!Q*OO'y*POn$sa(y$sa(z$sa!]$sa#`$sa~Og$sa$O$sa~P$)_O!Q*OO'y*POn$ua(y$ua(z$ua!]$ua#`$ua~Og$ua$O$ua~P$*QO#k0oO~Og%Ta!]%Ta#`%Ta$O%Ta~P!1WO!g#vO~O#k0rO~O!]+^Oa)Ta'z)Ta~OR#zO!Q#yO!S#{O!l#xO(aVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(r!ri(y!ri(z!ri~Oa!ri'z!ri'w!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$+oOh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op0{O%]0|O(T0zO~P$.VO!g+iOa(]a!_(]a'z(]a!](]a~O#k1SO~O[]X!]fX!^fX~O!]1TO!^)XX~O!^1VO~O[1WO~Ob1YO(T+qO(VTO(YUO~O!_&PO(T%gO`'uX!]'uX~O!]+vO`)Wa~O!k1]O~P!:tO[1`O~O`1aO~O#`1fO~On1iO!_$|O~O(e(|O!^)UP~Oh%VOn1rO!_1oO%i1qO~O[1|O!]1zO!^)VX~O!^1}O~O`2POa%nO'z%nO~O(T#nO(VTO(YUO~O#S$dO#`$eO$Q$eOP(gXR(gX[(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~Oj2SO&[2TOa(gX~P$3pOj2SO#`$eO&[2TO~Oa2VO~P%[Oa2XO~O&e2[OP&ciQ&ciS&ciY&cia&cid&cie&cil&cip&cir&cis&cit&ciz&ci|&ci!O&ci!S&ci!W&ci!X&ci!_&ci!i&ci!l&ci!o&ci!p&ci!q&ci!s&ci!u&ci!x&ci!|&ci$W&ci$n&ci%h&ci%j&ci%l&ci%m&ci%n&ci%q&ci%s&ci%v&ci%w&ci%y&ci&W&ci&^&ci&`&ci&b&ci&d&ci&g&ci&m&ci&s&ci&u&ci&w&ci&y&ci&{&ci'w&ci(T&ci(V&ci(Y&ci(a&ci(o&ci!^&cib&ci&j&ci~Ob2bO!^2`O&j2aO~P`O!_XO!l2dO~O&q,{OP&liQ&liS&liY&lia&lid&lie&lil&lip&lir&lis&lit&liz&li|&li!O&li!S&li!W&li!X&li!_&li!i&li!l&li!o&li!p&li!q&li!s&li!u&li!x&li!|&li$W&li$n&li%h&li%j&li%l&li%m&li%n&li%q&li%s&li%v&li%w&li%y&li&W&li&^&li&`&li&b&li&d&li&g&li&m&li&s&li&u&li&w&li&y&li&{&li'w&li(T&li(V&li(Y&li(a&li(o&li!^&li&e&lib&li&j&li~O!Y2jO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2pO(e!mO!]'XX!^'XX~P@nO!]-]O!^(ia~O!]'_X!^'_X~P!9|O!]-`O!^(xa~O!^2wO~P'_Oa%nO#`3QO'z%nO~Oa%nO!g#vO#`3QO'z%nO~Oa%nO!g#vO!p3UO#`3QO'z%nO(r'pO~Oa%nO'z%nO~P!:tO!]$_Ov$qa~O!Y'Wi!]'Wi~P!:tO!](VO!Y(hi~O!](^O!Y(vi~O!Y(wi!](wi~P!:tO!](ti!k(tia(ti'z(ti~P!:tO#`3WO!](ti!k(tia(ti'z(ti~O!](jO!k(si~O!S%hO!_%iO!|]O#i3]O#j3[O(T%gO~O!S%hO!_%iO#j3[O(T%gO~On3dO!_'`O%i3cO~Oh%VOn3dO!_'`O%i3cO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aav%aa!_%aa%i%aa!g%aa~P#L{O#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%cav%ca!_%ca%i%ca!g%ca~P#MnO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/sO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/sO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'z}a(a}a(r}a!k}a!Y}a'w}av}a!_}a%i}a!g}a~P$(cO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'z$sa(a$sa(r$sa!k$sa!Y$sa'w$sav$sa!_$sa%i$sa!g$sa~P$)_O#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'z$ua(a$ua(r$ua!k$ua!Y$ua'w$uav$ua!_$ua%i$ua!g$ua~P$*QO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'z%Ta(a%Ta(r%Ta!k%Ta!Y%Ta'w%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/sOa#cq!]#cq'z#cq'w#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:tO![3lO!]'YX!k'YX~P%[O!].tO!k(ka~O!].tO!k(ka~P!:tO!Y3oO~O$O!na!^!na~PKlO$O!ja!]!ja!^!ja~P#BwO$O!ra!^!ra~P!=[O$O!ta!^!ta~P!?rOg']X!]']X~P!,TO!]/POg(pa~OSfO!_4TO$d4UO~O!^4YO~Ov4ZO~P#/sOa$mq!]$mq'z$mq'w$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:tO!Y4]O~P!&zO!S4^O~O!Q*OO'y*PO(z%POn'ia(y'ia!]'ia#`'ia~Og'ia$O'ia~P%-fO!Q*OO'y*POn'ka(y'ka(z'ka!]'ka#`'ka~Og'ka$O'ka~P%.XO(r$YO~P#/sO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!0SOp%WO(T=WO~P!1uOp4bO!S%hO![4aO!_%iO(T%gO!]'eX!k'eX~O!]/pO!k)Oa~O!]/pO!g#vO!k)Oa~O!]/pO!g#vO(r'pO!k)Oa~Og$|i!]$|i#`$|i$O$|i~P!1WO![4jO!Y'gX!]'gX~P!3tO!]/yO!Y)Pa~O!]/yO!Y)Pa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~Oj%YX!g%YX~P%2OOj4oO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4tO!l%eO(r'pO~Or4yO!g#vO(r'pO~Os!nO!S4zO(VTO(YUO(e!mO~O(y$}On%ai!Q%ai'y%ai(z%ai!]%ai#`%ai~Og%ai$O%ai~P%5oO(z%POn%ci!Q%ci'y%ci(y%ci!]%ci#`%ci~Og%ci$O%ci~P%6bOg(_i!](_i~P!1WO#`5QOg(_i!](_i~P!1WO!k5VO~Oa$oq!]$oq'z$oq'w$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:tO!Y5ZO~O!]5[O!_)QX~P#/sOa$zX!_$zX%^]X'z$zX!]$zX~P!0SO%^5_OaoX!_oX'zoX!]oX~P$#OOp5`O(T#nO~O%^5_O~Ob5fO%j5gO(T+qO(VTO(YUO!]'tX!^'tX~O!]1TO!^)Xa~O[5kO~O`5lO~O[5pO~Oa%nO'z%nO~P#/sO!]5uO#`5wO!^)UX~O!^5xO~Or6OOs!nO!S*iO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!pO#W!pO#X!pO#[5}O#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O!^5|O~P%;eOn6TO!_1oO%i6SO~Oh%VOn6TO!_1oO%i6SO~Ob6[O(T#nO(VTO(YUO!]'sX!^'sX~O!]1zO!^)Va~O(VTO(YUO(e6^O~O`6bO~Oj6eO&[6fO~PNXO!k6gO~P%[Oa6iO~Oa6iO~P%[Ob2bO!^6nO&j2aO~P`O!g6pO~O!g6rOh(ji!](ji!^(ji!g(ji!l(jir(ji(r(ji~O!]#hi!^#hi~P#BwO#`6sO!]#hi!^#hi~O!]!ai!^!ai~P#BwOa%nO#`6|O'z%nO~Oa%nO!g#vO#`6|O'z%nO~O!](tq!k(tqa(tq'z(tq~P!:tO!](jO!k(sq~O!S%hO!_%iO#j7TO(T%gO~O!_'`O%i7WO~On7[O!_'`O%i7WO~O#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'z'ia(a'ia(r'ia!k'ia!Y'ia'w'iav'ia!_'ia%i'ia!g'ia~P%-fO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'z'ka(a'ka(r'ka!k'ka!Y'ka'w'kav'ka!_'ka%i'ka!g'ka~P%.XO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'z$|i(a$|i(r$|i!k$|i!Y$|i'w$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/sO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'z%ai(a%ai(r%ai!k%ai!Y%ai'w%aiv%ai!_%ai%i%ai!g%ai~P%5oO#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'z%ci(a%ci(r%ci!k%ci!Y%ci'w%civ%ci!_%ci%i%ci!g%ci~P%6bO!]'Ya!k'Ya~P!:tO!].tO!k(ki~O$O#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#n#mi~P%NdO#n<_O~P%NdOP$[OR#zOr<kO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#r#mi~P&!lO#r<aO~P&!lOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO(aVO#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#v#mi~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO(aVO(z#}O#z#mi#{#mi$O#mi(r#mi(y#mi!]#mi!^#mi~O#x<eO~P&&uO#x#mi~P&&uO#v<cO~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO(aVO(y#|O(z#}O#{#mi$O#mi(r#mi!]#mi!^#mi~O#z#mi~P&)UO#z<gO~P&)UOa#|y!]#|y'z#|y'w#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:tO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO(y#mi(z#mi~P&,QOn>^O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P&,QO#S$dOP(`XR(`X[(`Xj(`Xn(`Xr(`X!Q(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X$O(`X'y(`X(a(`X(r(`X(y(`X(z(`X!](`X!^(`X~O$O$Pi!]$Pi!^$Pi~P#BwO$O!ri!^!ri~P$+oOg']a!]']a~P!1WO!^7nO~O!]'da!^'da~P#BwO!Y7oO~P#/sO!g#vO(r'pO!]'ea!k'ea~O!]/pO!k)Oi~O!]/pO!g#vO!k)Oi~Og$|q!]$|q#`$|q$O$|q~P!1WO!Y'ga!]'ga~P#/sO!g7vO~O!]/yO!Y)Pi~P#/sO!]/yO!Y)Pi~O!Y7yO~Oh%VOr8OO!l%eO(r'pO~Oj8QO!g#vO~Or8TO!g#vO(r'pO~O!Q*OO'y*PO(z%POn'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P&5RO!Q*OO'y*POn'la(y'la(z'la!]'la#`'la~Og'la$O'la~P&5tOg(_q!](_q~P!1WO#`8VOg(_q!](_q~P!1WO!Y8WO~Og%Oq!]%Oq#`%Oq$O%Oq~P!1WOa$oy!]$oy'z$oy'w$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:tO!g6rO~O!]5[O!_)Qa~O!_'`OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(a$Ta(r$Ta(y$Ta(z$Ta~O%i7WO~P&8fO%^8[Oa%[i!_%[i'z%[i!]%[i~Oa#cy!]#cy'z#cy'w#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:tO[8^O~Ob8`O(T+qO(VTO(YUO~O!]1TO!^)Xi~O`8dO~O(e(|O!]'pX!^'pX~O!]5uO!^)Ua~O!^8nO~P%;eO(o!sO~P$&YO#[8oO~O!_1oO~O!_1oO%i8qO~On8tO!_1oO%i8qO~O[8yO!]'sa!^'sa~O!]1zO!^)Vi~O!k8}O~O!k9OO~O!k9RO~O!k9RO~P%[Oa9TO~O!g9UO~O!k9VO~O!](wi!^(wi~P#BwOa%nO#`9_O'z%nO~O!](ty!k(tya(ty'z(ty~P!:tO!](jO!k(sy~O%i9bO~P&8fO!_'`O%i9bO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'z$|q(a$|q(r$|q!k$|q!Y$|q'w$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/sO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'z'ja(a'ja(r'ja!k'ja!Y'ja'w'jav'ja!_'ja%i'ja!g'ja~P&5RO#k'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la'z'la(a'la(r'la!k'la!Y'la'w'lav'la!_'la%i'la!g'la~P&5tO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'z%Oq(a%Oq(r%Oq!k%Oq!Y%Oq'w%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/sO!]'Yi!k'Yi~P!:tO$O#cq!]#cq!^#cq~P#BwO(y$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(a%aa(r%aa!]%aa!^%aa~On%aa!Q%aa'y%aa(z%aa~P&IyO(z%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(a%ca(r%ca!]%ca!^%ca~On%ca!Q%ca'y%ca(y%ca~P&LQOn>^O!Q*OO'y*PO(z%PO~P&IyOn>^O!Q*OO'y*PO(y$}O~P&LQOR0kO!Q0kO!S0lO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'y}a(a}a(r}a(y}a(z}a!]}a!^}a~O!Q*OO'y*POP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(a$sa(r$sa(y$sa(z$sa!]$sa!^$sa~O!Q*OO'y*POP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(a$ua(r$ua(y$ua(z$ua!]$ua!^$ua~On>^O!Q*OO'y*PO(y$}O(z%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(a%Ta(r%Ta!]%Ta!^%Ta~P''VO$O$mq!]$mq!^$mq~P#BwO$O$oq!]$oq!^$oq~P#BwO!^9oO~O$O9pO~P!1WO!g#vO!]'ei!k'ei~O!g#vO(r'pO!]'ei!k'ei~O!]/pO!k)Oq~O!Y'gi!]'gi~P#/sO!]/yO!Y)Pq~Or9wO!g#vO(r'pO~O[9yO!Y9xO~P#/sO!Y9xO~Oj:PO!g#vO~Og(_y!](_y~P!1WO!]'na!_'na~P#/sOa%[q!_%[q'z%[q!]%[q~P#/sO[:UO~O!]1TO!^)Xq~O`:YO~O#`:ZO!]'pa!^'pa~O!]5uO!^)Ui~P#BwO!S:]O~O!_1oO%i:`O~O(VTO(YUO(e:eO~O!]1zO!^)Vq~O!k:hO~O!k:iO~O!k:jO~O!k:jO~P%[O#`:mO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%i:rO~P&8fO!_'`O%i:rO~O$O#|y!]#|y!^#|y~P#BwOP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(a$|i(r$|i!]$|i!^$|i~P''VO!Q*OO'y*PO(z%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(a'ia(r'ia(y'ia!]'ia!^'ia~O!Q*OO'y*POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(a'ka(r'ka(y'ka(z'ka!]'ka!^'ka~O(y$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'y%ai(a%ai(r%ai(z%ai!]%ai!^%ai~O(z%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'y%ci(a%ci(r%ci(y%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#BwO$O#cy!]#cy!^#cy~P#BwO!g#vO!]'eq!k'eq~O!]/pO!k)Oy~O!Y'gq!]'gq~P#/sOr:|O!g#vO(r'pO~O[;QO!Y;PO~P#/sO!Y;PO~Og(_!R!](_!R~P!1WOa%[y!_%[y'z%[y!]%[y~P#/sO!]1TO!^)Xy~O!]5uO!^)Uq~O(T;XO~O!_1oO%i;[O~O!k;_O~O%i;dO~P&8fOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(a$|q(r$|q!]$|q!^$|q~P''VO!Q*OO'y*PO(z%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(a'ja(r'ja(y'ja!]'ja!^'ja~O!Q*OO'y*POP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la$O'la(a'la(r'la(y'la(z'la!]'la!^'la~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(a%Oq(r%Oq!]%Oq!^%Oq~P''VOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!1WO!Y;hO~P#/sOr;iO!g#vO(r'pO~O[;kO!Y;hO~P#/sO!]'pq!^'pq~P#BwO!]#h!Z!^#h!Z~P#BwO#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'z%e!Z(a%e!Z(r%e!Z!k%e!Z!Y%e!Z'w%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/sOr;tO!g#vO(r'pO~O!Y;uO~P#/sOr;|O!g#vO(r'pO~O!Y;}O~P#/sOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(a%e!Z(r%e!Z!]%e!Z!^%e!Z~P''VOr<QO!g#vO(r'pO~Ov(fX~P1qO!Q%rO~P!)[O(U!lO~P!)[O!YfX!]fX#`fX~P%2OOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~O!gfX!k]X!kfX(rfX~P'LTOP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_XO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]<iO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<tO!S${O!_$|O!i>WO!l$xO#j<zO$W%`O$t<vO$v<xO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Ol)dO~P(!yOr!eX(r!eX~P#!iOr(jX(r(jX~P##[O!^]X!^fX~P'LTO!YfX!Y$zX!]fX!]$zX#`fX~P!0SO#k<^O~O!g#vO#k<^O~O#`<nO~Oj<bO~O#`=OO!](wX!^(wX~O#`<nO!](uX!^(uX~O#k=PO~Og=RO~P!1WO#k=XO~O#k=YO~Og=RO(T&ZO~O!g#vO#k=ZO~O!g#vO#k=PO~O$O=[O~P#BwO#k=]O~O#k=^O~O#k=cO~O#k=dO~O#k=eO~O#k=fO~O$O=gO~P!1WO$O=hO~P!1WOl=sO~P7eOk#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~(OT#o!X'|(U#ps#n#qr!Q'}$]'}(T$_(e~",
        goto: "$9Y)]PPPPPP)^PP)aP)rP+W/]PPPP6mPP7TPP=QPPP@tPA^PA^PPPA^PCfPA^PA^PA^PCjPCoPD^PIWPPPI[PPPPI[L_PPPLeMVPI[PI[PP! eI[PPPI[PI[P!#lI[P!'S!(X!(bP!)U!)Y!)U!,gPPPPPPP!-W!(XPP!-h!/YP!2iI[I[!2n!5z!:h!:h!>gPPP!>oI[PPPPPPPPP!BOP!C]PPI[!DnPI[PI[I[I[I[I[PI[!FQP!I[P!LbP!Lf!Lp!Lt!LtP!IXP!Lx!LxP#!OP#!SI[PI[#!Y#%_CjA^PA^PA^A^P#&lA^A^#)OA^#+vA^#.SA^A^#.r#1W#1W#1]#1f#1W#1qPP#1WPA^#2ZA^#6YA^A^6mPPP#:_PPP#:x#:xP#:xP#;`#:xPP#;fP#;]P#;]#;y#;]#<e#<k#<n)aP#<q)aP#<z#<z#<zP)aP)aP)aP)aPP)aP#=Q#=TP#=T)aP#=XP#=[P)aP)aP)aP)aP)aP)a)aPP#=b#=h#=s#=y#>P#>V#>]#>k#>q#>{#?R#?]#?c#?s#?y#@k#@}#AT#AZ#Ai#BO#Cs#DR#DY#Et#FS#Gt#HS#HY#H`#Hf#Hp#Hv#H|#IW#Ij#IpPPPPPPPPPPP#IvPPPPPPP#Jk#Mx$ b$ i$ qPPP$']P$'f$*_$0x$0{$1O$1}$2Q$2X$2aP$2g$2jP$3W$3[$4S$5b$5g$5}PP$6S$6Y$6^$6a$6e$6i$7e$7|$8e$8i$8l$8o$8y$8|$9Q$9UR!|RoqOXst!Z#d%m&r&t&u&w,s,x2[2_Y!vQ'`-e1o5{Q%tvQ%|yQ&T|Q&j!VS'W!e-]Q'f!iS'l!r!yU*k$|*Z*oQ+o%}S+|&V&WQ,d&dQ-c'_Q-m'gQ-u'mQ0[*qQ1b,OQ1y,eR<{<Y%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_S#q]<V!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU+P%]<s<tQ+t&PQ,f&gQ,m&oQ0x+gQ0}+iQ1Y+uQ2R,kQ3`.gQ5`0|Q5f1TQ6[1zQ7Y3dQ8`5gR9e7['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S!S!nQ!r!v!y!z$|'W'_'`'l'm'n*k*o*q*r-]-c-e-u0[0_1o5{5}%[$ti#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q&X|Q'U!eS'[%i-`Q+t&PQ,P&WQ,f&gQ0n+SQ1Y+uQ1_+{Q2Q,jQ2R,kQ5f1TQ5o1aQ6[1zQ6_1|Q6`2PQ8`5gQ8c5lQ8|6bQ:X8dQ:f8yQ;V:YR<}*ZrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R,h&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'b'r(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>R>S[#]WZ#W#Z'X(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ%wxQ%{yW&Q|&V&W,OQ&_!TQ'c!hQ'e!iQ(q#sS+n%|%}Q+r&PQ,_&bQ,c&dS-l'f'gQ.i(rQ1R+oQ1X+uQ1Z+vQ1^+zQ1t,`S1x,d,eQ2|-mQ5e1TQ5i1WQ5n1`Q6Z1yQ8_5gQ8b5kQ8f5pQ:T8^R;T:U!U$zi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y!^%yy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{Q+h%wQ,T&[Q,W&]Q,b&dQ.h(qQ1s,_U1w,c,d,eQ3e.iQ6U1tS6Y1x1yQ8x6Z#f>T#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o>U<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hW%Ti%V*y>PS&[!Q&iQ&]!RQ&^!SU*}%[%d=sR,R&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^T)z$u){V+P%]<s<tW'[!e%i*Z-`S(}#y#zQ+c%rQ+y&SS.b(m(nQ1j,XQ5T0kR8i5u'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S$i$^c#Y#e%q%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.|.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ'Y!eR2q-]!W!nQ!e!r!v!y!z$|'W'_'`'l'm'n*Z*k*o*q*r-]-c-e-u0[0_1o5{5}R1l,ZnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&y!^Q'v!xS(s#u<^Q+l%zQ,]&_Q,^&aQ-j'dQ-w'oS.r(x=PS0q+X=ZQ1P+mQ1n,[Q2c,zQ2e,{Q2m-WQ2z-kQ2}-oS5Y0r=eQ5a1QS5d1S=fQ6t2oQ6x2{Q6}3SQ8]5bQ9Y6vQ9Z6yQ9^7OR:l9V$d$]c#Y#e%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vS(o#p'iQ)P#zS+b%q.|S.c(n(pR3^.d'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS#q]<VQ&t!XQ&u!YQ&w![Q&x!]R2Z,vQ'a!hQ+e%wQ-h'cS.e(q+hQ2x-gW3b.h.i0w0yQ6w2yW7U3_3a3e5^U9a7V7X7ZU:q9c9d9fS;b:p:sQ;p;cR;x;qU!wQ'`-eT5y1o5{!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(j,s,x.[2[2_]!pQ!r'`-e1o5{T#q]<V%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S(}#y#zS.b(m(n!s=l$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU$fd)_,mS(p#p'iU*v%R(w4OU0m+O.n7gQ5^0xQ7V3`Q9d7YR:s9em!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}Q't!uS(f#g2US-s'k'wQ/s*]Q0R*jQ3U-vQ4f/tQ4r0TQ4s0UQ4x0^Q7r4`S7}4t4vS8R4y4{Q9r7sQ9v7yQ9{8OQ:Q8TS:{9w9xS;g:|;PS;s;h;iS;{;t;uS<P;|;}R<S<QQ#wbQ's!uS(e#g2US(g#m+WQ+Y%fQ+j%xQ+p&OU-r'k't'wQ.W(fU/r*]*`/wQ0S*jQ0V*lQ1O+kQ1u,aS3R-s-vQ3Z.`S4e/s/tQ4n0PS4q0R0^Q4u0WQ6W1vQ7P3US7q4`4bQ7u4fU7|4r4x4{Q8P4wQ8v6XS9q7r7sQ9u7yQ9}8RQ:O8SQ:c8wQ:y9rS:z9v9xQ;S:QQ;^:dS;f:{;PS;r;g;hS;z;s;uS<O;{;}Q<R<PQ<T<SQ=o=jQ={=tR=|=uV!wQ'`-e%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S#wz!j!r=i$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=o>R%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Q%fj!^%xy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{S&Oz!jQ+k%yQ,a&dW1v,b,c,d,eU6X1w1x1yS8w6Y6ZQ:d8x!r=j$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ=t>QR=u>R%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Y#bWZ#W#Z(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ,n&o!p=k$Z$n)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=n'XU']!e%i*ZR2s-`%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ,m&oQ0x+gQ3`.gQ7Y3dR9e7[!b$Tc#Y%q(S(Y(t(y)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!P<d)^)q-Z.|2k2n3p3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!f$Vc#Y%q(S(Y(t(y)W)X)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!T<f)^)q-Z.|2k2n3p3v3w3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!^$Zc#Y%q(S(Y(t(y)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<WQ4_/kz>S)^)q-Z.|2k2n3p4P4X6u7b7k7l8k9X9g9m9n;W;`=vQ>X>ZR>Y>['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS$oh$pR4U/U'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$kf$qQ$ifS)j$l)nR)v$qT$jf$qT)l$l)n'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$oh$pQ$rhR)u$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_!s>Q$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'b)O)s*i+]+g,p,s,x-i.g/V/n0]0l1r2S2T2V2X2[2_2a3d4T4z6T6e6f6i7[8t9T!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^Q+T%aQ/c*Oo4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!U$yi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>YQ*c$zU*l$|*Z*oQ+U%bQ0W*m#f=q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n=r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hQ=w>TQ=x>UQ=y>VR=z>W!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hnoOXst!Z#d%m&r&t&u&w,s,x2[2_S*f${*YQ-R'OQ-S'QR4i/y%[%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q,U&]Q1h,WQ5s1gR8h5tV*n$|*Z*oU*n$|*Z*oT5z1o5{S0P*i/nQ4w0]T8S4z:]Q+j%xQ0V*lQ1O+kQ1u,aQ6W1vQ8v6XQ:c8wR;^:d!U%Oi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Yx*R$v)e*S*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>OS0`*t0a#f<o#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<p<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!d=S(u)c*[*e.j.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[`=T3}7c7f7j9h:t:w;yS=_.l3iT=`7e9k!U%Qi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y|*T$v)e*U*t+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>OS0b*u0c#f<q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!h=U(u)c*[*e.k.l.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[d=V3}7d7e7j9h9i:t:u:w;yS=a.m3jT=b7f9lrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q&f!UR,p&ornOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R&f!UQ,Y&^R1d,RsnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q1p,_S6R1s1tU8p6P6Q6US:_8r8sS;Y:^:aQ;m;ZR;w;nQ&m!VR,i&iR6_1|R:f8yW&Q|&V&W,OR1Z+vQ&r!WR,s&sR,y&xT2],x2_R,}&yQ,|&yR2f,}Q'y!{R-y'ySsOtQ#dXT%ps#dQ#OTR'{#OQ#RUR'}#RQ){$uR/`){Q#UVR(Q#UQ#XWU(W#X(X.QQ(X#YR.Q(YQ-^'YR2r-^Q.u(yS3m.u3nR3n.vQ-e'`R2v-eY!rQ'`-e1o5{R'j!rQ/Q)eR4S/QU#_W%h*YU(_#_(`.RQ(`#`R.R(ZQ-a']R2t-at`OXst!V!Z#d%m&i&k&r&t&u&w,s,x2[2_S#hZ%eU#r`#h.[R.[(jQ(k#jQ.X(gW.a(k.X3X7RQ3X.YR7R3YQ)n$lR/W)nQ$phR)t$pQ$`cU)a$`-|<jQ-|<WR<j)qQ/q*]W4c/q4d7t9sU4d/r/s/tS7t4e4fR9s7u$e*Q$v(u)c)e*[*e*t*u+Q+R+V.l.m.o.p.q/_/g/i/k/v/|0d0e0v1e3f3g3h3}4R4[4g4h4l4|5O5R5S5W5r7]7^7_7`7e7f7h7i7j7p7w7z8U8X8Z9h9i9j9t9|:R:S:t:u:v:w:x:};R;e;j;v;y=p=}>O>Z>[Q/z*eU4k/z4m7xQ4m/|R7x4lS*o$|*ZR0Y*ox*S$v)e*t*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>O!d.j(u)c*[*e.l.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/h*S.j7ca7c3}7e7f7j9h:t:w;yQ0a*tQ3i.lU4}0a3i9kR9k7e|*U$v)e*t*u+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>O!h.k(u)c*[*e.l.m.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/j*U.k7de7d3}7e7f7j9h9i:t:u:w;yQ0c*uQ3j.mU5P0c3j9lR9l7fQ*z%UR0g*zQ5]0vR8Y5]Q+_%kR0u+_Q5v1jS8j5v:[R:[8kQ,[&_R1m,[Q5{1oR8m5{Q1{,fS6]1{8zR8z6_Q1U+rW5h1U5j8a:VQ5j1XQ8a5iR:V8bQ+w&QR1[+wQ2_,xR6m2_YrOXst#dQ&v!ZQ+a%mQ,r&rQ,t&tQ,u&uQ,w&wQ2Y,sS2],x2_R6l2[Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'q!uQ+`%lQ+l%zQ,Q&XQ,h&mQ-P&|W-p'k's't'wQ-w'oQ0X*nQ1P+mQ1c,PS2O,i,lQ2g-OQ2h-RQ2i-SQ2}-oW3P-r-s-v-xQ5a1QQ5m1_Q5q1eQ6V1uQ6a2QQ6k2ZU6z3O3R3UQ6}3SQ8]5bQ8e5oQ8g5rQ8l5zQ8u6WQ8{6`S9[6{7PQ9^7OQ:W8cQ:b8vQ:g8|Q:n9]Q;U:XQ;]:cQ;a:oQ;l;VR;o;^Q%zyQ'd!iQ'o!uU+m%{%|%}Q-W'VU-k'e'f'gS-o'k'uQ0Q*jS1Q+n+oQ2o-YS2{-l-mQ3S-tS4p0R0UQ5b1RQ6v2uQ6y2|Q7O3TU7{4r4s4vQ9z7}R;O9{S$wi>PR*{%VU%Ui%V>PR0f*yQ$viS(u#v+iS)c$b$cQ)e$dQ*[$xS*e${*YQ*t%OQ*u%QQ+Q%^Q+R%_Q+V%cQ.l<oQ.m<qQ.o<uQ.p<wQ.q<yQ/_)yQ/g*RQ/i*TQ/k*VQ/v*aS/|*g/mQ0d*wQ0e*xl0v+f,V.f1i1q3c6S7W8q9b:`:r;[;dQ1e,SQ3f=SQ3g=UQ3h=XS3}<l<mQ4R/PS4[/d4^Q4g/xQ4h/yQ4l/{Q4|0`Q5O0bQ5R0iQ5S0jQ5W0oQ5r1fQ7]=]Q7^=_Q7_=aQ7`=cQ7e<pQ7f<rQ7h<vQ7i<xQ7j<zQ7p4_Q7w4jQ7z4oQ8U5QQ8X5[Q8Z5_Q9h=YQ9i=TQ9j=VQ9t7vQ9|8QQ:R8VQ:S8[Q:t=^Q:u=`Q:v=bQ:w=dQ:x9pQ:}9yQ;R:PQ;e=gQ;j;QQ;v;kQ;y=hQ=p>PQ=}>XQ>O>YQ>Z>]R>[>^Q+O%]Q.n<sR7g<tnpOXst!Z#d%m&r&t&u&w,s,x2[2_Q!fPS#fZ#oQ&|!`W'h!o*i0]4zQ(P#SQ)Q#{Q)r$nS,l&k&nQ,q&oQ-O&{S-T'T/nQ-g'bQ.x)OQ/[)sQ0s+]Q0y+gQ2W,pQ2y-iQ3a.gQ4W/VQ5U0lQ6Q1rQ6c2SQ6d2TQ6h2VQ6j2XQ6o2aQ7Z3dQ7m4TQ8s6TQ9P6eQ9Q6fQ9S6iQ9f7[Q:a8tR:k9T#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'b)O*i+]+g,p,s,x-i.g/n0]0l1r2S2T2V2X2[2_2a3d4z6T6e6f6i7[8t9TQ#YWQ#eYQ%quQ%svS%uw!gS(S#W(VQ(Y#ZQ(t#uQ(y#xQ)R$OQ)S$PQ)T$QQ)U$RQ)V$SQ)W$TQ)X$UQ)Y$VQ)Z$WQ)[$XQ)^$ZQ)`$_Q)b$aQ)g$eW)q$n)s/V4TQ+d%tQ+x&RS-Z'X2pQ-x'rS-}(T.PQ.S(]Q.U(dQ.s(xQ.v(zQ.z<UQ.|<XQ.}<YQ/O<]Q/b)}Q0p+XQ2k-UQ2n-XQ3O-qQ3V.VQ3k.tQ3p<^Q3q<_Q3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{.{Q3|<kQ4P<nQ4Q<{Q4X<iQ5X0rQ5c1SQ6u=OQ6{3QQ7Q3WQ7a3lQ7b=PQ7k=RQ7l=ZQ8k5wQ9X6sQ9]6|Q9g=[Q9m=eQ9n=fQ:o9_Q;W:ZQ;`:mQ<W#SR=v>SR#[WR'Z!el!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}S'V!e-]U*j$|*Z*oS-Y'W'_S0U*k*qQ0^*rQ2u-cQ4v0[R4{0_R({#xQ!fQT-d'`-e]!qQ!r'`-e1o5{Q#p]R'i<VR)f$dY!uQ'`-e1o5{Q'k!rS'u!v!yS'w!z5}S-t'l'mQ-v'nR3T-uT#kZ%eS#jZ%eS%km,oU(g#h#i#lS.Y(h(iQ.^(jQ0t+^Q3Y.ZU3Z.[.]._S7S3[3]R9`7Td#^W#W#Z%h(T(^*Y+Z.T/mr#gZm#h#i#l%e(h(i(j+^.Z.[.]._3[3]7TS*]$x*bQ/t*^Q2U,oQ2l-VQ4`/pQ6q2dQ7s4aQ9W6rT=m'X+[V#aW%h*YU#`W%h*YS(U#W(^U(Z#Z+Z/mS-['X+[T.O(T.TV'^!e%i*ZQ$lfR)x$qT)m$l)nR4V/UT*_$x*bT*h${*YQ0w+fQ1g,VQ3_.fQ5t1iQ6P1qQ7X3cQ8r6SQ9c7WQ:^8qQ:p9bQ;Z:`Q;c:rQ;n;[R;q;dnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&l!VR,h&itmOXst!U!V!Z#d%m&i&r&t&u&w,s,x2[2_R,o&oT%lm,oR1k,XR,g&gQ&U|S+}&V&WR1^,OR+s&PT&p!W&sT&q!W&sT2^,x2_",
        nodeNames: "\u26a0 ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
        maxTerm: 380,
        context: SU,
        nodeProps: [
          ["isolate", -8, 5, 6, 14, 37, 39, 51, 53, 55, ""],
          ["group", -26, 9, 17, 19, 68, 207, 211, 215, 216, 218, 221, 224, 234, 237, 243, 245, 247, 249, 252, 258, 264, 266, 268, 270, 272, 274, 275, "Statement", -34, 13, 14, 32, 35, 36, 42, 51, 54, 55, 57, 62, 70, 72, 76, 80, 82, 84, 85, 110, 111, 120, 121, 136, 139, 141, 142, 143, 144, 145, 147, 148, 167, 169, 171, "Expression", -23, 31, 33, 37, 41, 43, 45, 173, 175, 177, 178, 180, 181, 182, 184, 185, 186, 188, 189, 190, 201, 203, 205, 206, "Type", -3, 88, 103, 109, "ClassItem"],
          ["openedBy", 23, "<", 38, "InterpolationStart", 56, "[", 60, "{", 73, "(", 160, "JSXStartCloseTag"],
          ["closedBy", -2, 24, 168, ">", 40, "InterpolationEnd", 50, "]", 61, "}", 74, ")", 165, "JSXEndTag"]
        ],
        propSources: [vU],
        skippedNodes: [0, 5, 6, 278],
        repeatNodeCount: 37,
        tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
        tokenizers: [uU, fU, iU, MU, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, rU, new IU("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340), new IU("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)],
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
          get: UU => VU[UU] || -1
        }, {
          term: 343,
          get: UU => sU[UU] || -1
        }, {
          term: 95,
          get: UU => nU[UU] || -1
        }],
        tokenPrec: 15201
      });
    var lU = zU(44029),
      xU = zU(44009),
      JU = zU(44014),
      jU = zU(44001);
    const KU = [(0, jU.w)("function ${name}(${params}) {\n\t${}\n}", {
        label: "function",
        detail: "definition",
        type: "keyword"
      }), (0, jU.w)("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}", {
        label: "for",
        detail: "loop",
        type: "keyword"
      }), (0, jU.w)("for (let ${name} of ${collection}) {\n\t${}\n}", {
        label: "for",
        detail: "of loop",
        type: "keyword"
      }), (0, jU.w)("do {\n\t${}\n} while (${})", {
        label: "do",
        detail: "loop",
        type: "keyword"
      }), (0, jU.w)("while (${}) {\n\t${}\n}", {
        label: "while",
        detail: "loop",
        type: "keyword"
      }), (0, jU.w)("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
        label: "try",
        detail: "/ catch block",
        type: "keyword"
      }), (0, jU.w)("if (${}) {\n\t${}\n}", {
        label: "if",
        detail: "block",
        type: "keyword"
      }), (0, jU.w)("if (${}) {\n\t${}\n} else {\n\t${}\n}", {
        label: "if",
        detail: "/ else block",
        type: "keyword"
      }), (0, jU.w)("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
        label: "class",
        detail: "definition",
        type: "keyword"
      }), (0, jU.w)('import {${names}} from "${module}"\n${}', {
        label: "import",
        detail: "named",
        type: "keyword"
      }), (0, jU.w)('import ${name} from "${module}"\n${}', {
        label: "import",
        detail: "default",
        type: "keyword"
      })],
      bU = KU.concat([(0, jU.w)("interface ${name} {\n\t${}\n}", {
        label: "interface",
        detail: "definition",
        type: "keyword"
      }), (0, jU.w)("type ${name} = ${type}", {
        label: "type",
        detail: "definition",
        type: "keyword"
      }), (0, jU.w)("enum ${name} {\n\t${}\n}", {
        label: "enum",
        detail: "definition",
        type: "keyword"
      })]),
      TU = new cU.t,
      hU = new Set(["Script", "Block", "FunctionExpression", "FunctionDeclaration", "ArrowFunction", "MethodDeclaration", "ForStatement"]);

    function UX(UU) {
      return (XU, zU) => {
        let cU = XU.node.getChild("VariableDefinition");
        return cU && zU(cU, UU), !0
      }
    }
    const XX = ["FunctionDeclaration"],
      zX = {
        FunctionDeclaration: UX("function"),
        ClassDeclaration: UX("class"),
        ClassExpression: () => !0,
        EnumDeclaration: UX("constant"),
        TypeAliasDeclaration: UX("type"),
        NamespaceDeclaration: UX("namespace"),
        VariableDefinition(UU, XU) {
          UU.matchContext(XX) || XU(UU, "variable")
        },
        TypeDefinition(UU, XU) {
          XU(UU, "type")
        },
        __proto__: null
      };

    function cX(UU, XU) {
      let zU = TU.get(XU);
      if (zU) return zU;
      let yU = [],
        QU = !0;

      function AU(XU, zU) {
        let cU = UU.sliceString(XU.from, XU.to);
        yU.push({
          label: cU,
          type: zU
        })
      }
      return XU.cursor(cU.i.IncludeAnonymous).iterate((XU => {
        if (QU) QU = !1;
        else if (XU.name) {
          let UU = zX[XU.name];
          if (UU && UU(XU, AU) || hU.has(XU.name)) return !1
        } else if (XU.to - XU.from > 8192) {
          for (let zU of cX(UU, XU.node)) yU.push(zU);
          return !1
        }
      })), TU.set(XU, yU), yU
    }
    const yX = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
      QX = ["TemplateString", "String", "RegExp", "LineComment", "BlockComment", "VariableDefinition", "TypeDefinition", "Label", "PropertyDefinition", "PropertyName", "PrivatePropertyDefinition", "PrivatePropertyName", "JSXText", "JSXAttributeValue", "JSXOpenTag", "JSXCloseTag", "JSXSelfClosingTag", ".", "?."];

    function AX(UU) {
      let XU = (0, lU.hb)(UU.state).resolveInner(UU.pos, -1);
      if (QX.indexOf(XU.name) > -1) return null;
      let zU = "VariableName" == XU.name || XU.to - XU.from < 20 && yX.test(UU.state.sliceDoc(XU.from, XU.to));
      if (!zU && !UU.explicit) return null;
      let cU = [];
      for (let yU = XU; yU; yU = yU.parent) hU.has(yU.name) && (cU = cU.concat(cX(UU.state.doc, yU)));
      return {
        options: cU,
        from: zU ? XU.from : UU.pos,
        validFor: yX
      }
    }
    const FX = lU.j.define({
        name: "javascript",
        parser: mU.configure({
          props: [lU.R.add({
            IfStatement: (0, lU.o)({
              except: /^\s*({|else\b)/
            }),
            TryStatement: (0, lU.o)({
              except: /^\s*({|catch\b|finally\b)/
            }),
            LabeledStatement: lU.x,
            SwitchBody: UU => {
              let XU = UU.textAfter,
                zU = /^\s*\}/.test(XU),
                cU = /^\s*(case|default)\b/.test(XU);
              return UU.baseIndent + (zU ? 0 : cU ? 1 : 2) * UU.unit
            },
            Block: (0, lU.w)({
              closing: "}"
            }),
            ArrowFunction: UU => UU.baseIndent + UU.unit,
            "TemplateString BlockComment": () => null,
            "Statement Property": (0, lU.o)({
              except: /^\s*{/
            }),
            JSXElement(UU) {
              let XU = /^\s*<\//.test(UU.textAfter);
              return UU.lineIndent(UU.node.from) + (XU ? 0 : UU.unit)
            },
            JSXEscape(UU) {
              let XU = /\s*\}/.test(UU.textAfter);
              return UU.lineIndent(UU.node.from) + (XU ? 0 : UU.unit)
            },
            "JSXOpenTag JSXSelfClosingTag": UU => UU.column(UU.node.from) + UU.unit
          }), lU.E.add({
            "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": lU.B,
            BlockComment: UU => ({
              from: UU.from + 2,
              to: UU.to - 2
            }),
            JSXElement(UU) {
              let XU = UU.firstChild;
              if (!XU || "JSXSelfClosingTag" == XU.name) return null;
              let zU = UU.lastChild;
              return {
                from: XU.to,
                to: zU.type.isError ? UU.to : zU.from
              }
            },
            "JSXSelfClosingTag JSXOpenTag"(UU) {
              var XU;
              let zU = null === (XU = UU.firstChild) || void 0 === XU ? void 0 : XU.nextSibling,
                cU = UU.lastChild;
              return !zU || zU.type.isError ? null : {
                from: zU.to,
                to: cU.type.isError ? UU.to : cU.from
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
      oX = {
        test: UU => /^JSX/.test(UU.name),
        facet: (0, lU.t)({
          commentTokens: {
            block: {
              open: "{/*",
              close: "*/}"
            }
          }
        })
      },
      DX = FX.configure({
        dialect: "ts"
      }, "typescript"),
      EX = FX.configure({
        dialect: "jsx",
        props: [lU.$.add((UU => UU.isTop ? [oX] : void 0))]
      }),
      YX = FX.configure({
        dialect: "jsx ts",
        props: [lU.$.add((UU => UU.isTop ? [oX] : void 0))]
      }, "typescript");
    let NX = UU => ({
      label: UU,
      type: "keyword"
    });
    const IX = "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(NX),
      pX = IX.concat(["declare", "implements", "private", "protected", "public"].map(NX));

    function aX() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        XU = UU.jsx ? UU.typescript ? YX : EX : UU.typescript ? DX : FX,
        zU = UU.typescript ? bU.concat(pX) : KU.concat(IX);
      return new lU.k(XU, [FX.data.of({
        autocomplete: (0, jU.s)(QX, (0, jU.o)(zU))
      }), FX.data.of({
        autocomplete: AX
      }), UU.jsx ? kX : []])
    }

    function tX(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : UU.length;
      for (let cU = null === XU || void 0 === XU ? void 0 : XU.firstChild; cU; cU = cU.nextSibling)
        if ("JSXIdentifier" == cU.name || "JSXBuiltin" == cU.name || "JSXNamespacedName" == cU.name || "JSXMemberExpression" == cU.name) return UU.sliceString(cU.from, Math.min(cU.to, zU));
      return ""
    }
    const gX = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      kX = JU.h.inputHandler.of(((UU, XU, zU, cU, yU) => {
        if ((gX ? UU.composing : UU.compositionStarted) || UU.state.readOnly || XU != zU || ">" != cU && "/" != cU || !FX.isActiveAt(UU.state, XU, -1)) return !1;
        let QU = yU(),
          {
            state: AU
          } = QU,
          FU = AU.changeByRange((UU => {
            var XU;
            let zU, {
                head: yU
              } = UU,
              QU = (0, lU.hb)(AU).resolveInner(yU - 1, -1);
            if ("JSXStartTag" == QU.name && (QU = QU.parent), AU.doc.sliceString(yU - 1, yU) != cU || "JSXAttributeValue" == QU.name && QU.to > yU);
            else {
              if (">" == cU && "JSXFragmentTag" == QU.name) return {
                range: UU,
                changes: {
                  from: yU,
                  insert: "</>"
                }
              };
              if ("/" == cU && "JSXStartCloseTag" == QU.name) {
                let UU = QU.parent,
                  cU = UU.parent;
                if (cU && UU.from == yU - 2 && ((zU = tX(AU.doc, cU.firstChild, yU)) || "JSXFragmentTag" == (null === (XU = cU.firstChild) || void 0 === XU ? void 0 : XU.name))) {
                  let UU = `${zU}>`;
                  return {
                    range: xU.k.cursor(yU + UU.length, -1),
                    changes: {
                      from: yU,
                      insert: UU
                    }
                  }
                }
              } else if (">" == cU) {
                let XU = function(UU) {
                  for (;;) {
                    if ("JSXOpenTag" == UU.name || "JSXSelfClosingTag" == UU.name || "JSXFragmentTag" == UU.name) return UU;
                    if ("JSXEscape" == UU.name || !UU.parent) return null;
                    UU = UU.parent
                  }
                }(QU);
                if (XU && "JSXOpenTag" == XU.name && !/^\/?>|^<\//.test(AU.doc.sliceString(yU, yU + 2)) && (zU = tX(AU.doc, XU, yU))) return {
                  range: UU,
                  changes: {
                    from: yU,
                    insert: `</${zU}>`
                  }
                }
              }
            }
            return {
              range: UU
            }
          }));
        return !FU.changes.empty && (UU.dispatch([QU, AU.update(FU, {
          userEvent: "input.complete",
          scrollIntoView: !0
        })]), !0)
      }))
  },
  44029: (UU, XU, zU) => {
    zU.d(XU, {
      $: () => YU,
      B: () => KU,
      C: () => DX,
      E: () => jU,
      H: () => gU,
      L: () => qU,
      P: () => SU,
      R: () => uU,
      S: () => xU,
      T: () => OU,
      V: () => wU,
      X: () => sX,
      cb: () => WX,
      db: () => tU,
      e: () => BX,
      f: () => rU,
      hb: () => aU,
      j: () => pU,
      k: () => eU,
      n: () => HX,
      o: () => mU,
      r: () => eX,
      t: () => EU,
      w: () => VU,
      x: () => nU,
      z: () => kX
    });
    var cU, yU = zU(44034),
      QU = zU(44009),
      AU = zU(44014),
      FU = zU(44040),
      oU = zU(44019);
    const DU = new yU.j;

    function EU(UU) {
      return QU.r.define({
        combine: UU ? XU => XU.concat(UU) : void 0
      })
    }
    const YU = new yU.j;
    class NU {
      constructor(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this.data = UU, this.name = cU, QU.n.prototype.hasOwnProperty("tree") || Object.defineProperty(QU.n.prototype, "tree", {
          get() {
            return aU(this)
          }
        }), this.parser = XU, this.extension = [LU.of(this), QU.n.languageData.of(((UU, XU, zU) => {
          let cU = IU(UU, XU, zU),
            yU = cU.type.prop(DU);
          if (!yU) return [];
          let QU = UU.facet(yU),
            AU = cU.type.prop(YU);
          if (AU) {
            let yU = cU.resolve(XU - cU.from, zU);
            for (let XU of AU)
              if (XU.test(yU, UU)) {
                let zU = UU.facet(XU.facet);
                return "replace" == XU.type ? zU : zU.concat(QU)
              }
          }
          return QU
        }))].concat(zU)
      }
      isActiveAt(UU, XU) {
        return IU(UU, XU, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1).type.prop(DU) == this.data
      }
      findRegions(UU) {
        let XU = UU.facet(LU);
        if ((null === XU || void 0 === XU ? void 0 : XU.data) == this.data) return [{
          from: 0,
          to: UU.doc.length
        }];
        if (!XU || !XU.allowsNesting) return [];
        let zU = [],
          cU = (UU, XU) => {
            if (UU.prop(DU) == this.data) return void zU.push({
              from: XU,
              to: XU + UU.length
            });
            let QU = UU.prop(yU.j.mounted);
            if (QU) {
              if (QU.tree.prop(DU) == this.data) {
                if (QU.overlay)
                  for (let UU of QU.overlay) zU.push({
                    from: UU.from + XU,
                    to: UU.to + XU
                  });
                else zU.push({
                  from: XU,
                  to: XU + UU.length
                });
                return
              }
              if (QU.overlay) {
                let UU = zU.length;
                if (cU(QU.tree, QU.overlay[0].from + XU), zU.length > UU) return
              }
            }
            for (let zU = 0; zU < UU.children.length; zU++) {
              let QU = UU.children[zU];
              QU instanceof yU.z && cU(QU, UU.positions[zU] + XU)
            }
          };
        return cU(aU(UU), 0), zU
      }
      get allowsNesting() {
        return !0
      }
    }

    function IU(UU, XU, zU) {
      let cU = UU.facet(LU),
        QU = aU(UU).topNode;
      if (!cU || cU.allowsNesting)
        for (let AU = QU; AU; AU = AU.enter(XU, zU, yU.i.ExcludeBuffers | yU.i.EnterBracketed)) AU.type.isTop && (QU = AU);
      return QU
    }
    NU.setState = QU.H.define();
    class pU extends NU {
      constructor(UU, XU, zU) {
        super(UU, XU, [], zU), this.parser = XU
      }
      static define(UU) {
        let XU = EU(UU.languageData);
        return new pU(XU, UU.parser.configure({
          props: [DU.add((UU => UU.isTop ? XU : void 0))]
        }), UU.name)
      }
      configure(UU, XU) {
        return new pU(this.data, this.parser.configure(UU), XU || this.name)
      }
      get allowsNesting() {
        return this.parser.hasWrappers()
      }
    }

    function aU(UU) {
      let XU = UU.field(NU.state, !1);
      return XU ? XU.tree : yU.z.empty
    }

    function tU(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UU.doc.length;
      var zU;
      return (null === (zU = UU.field(NU.state, !1)) || void 0 === zU ? void 0 : zU.context.isDone(XU)) || !1
    }

    function gU(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UU.viewport.to,
        zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        cU = function(UU, XU) {
          let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
          var cU;
          let yU = null === (cU = UU.field(NU.state, !1)) || void 0 === cU ? void 0 : cU.context;
          if (!yU) return null;
          let QU = yU.viewport;
          yU.updateViewport({
            from: 0,
            to: XU
          });
          let AU = yU.isDone(XU) || yU.work(zU, XU) ? yU.tree : null;
          return yU.updateViewport(QU), AU
        }(UU.state, XU, zU);
      return cU != aU(UU.state) && UU.dispatch({}), !!cU
    }
    class kU {
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
      read(UU, XU) {
        let zU = this.cursorPos - this.string.length;
        return UU < zU || XU >= this.cursorPos ? this.doc.sliceString(UU, XU) : this.string.slice(UU - zU, XU - zU)
      }
    }
    let GU = null;
    class BU {
      constructor(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          cU = arguments.length > 3 ? arguments[3] : void 0,
          yU = arguments.length > 4 ? arguments[4] : void 0,
          QU = arguments.length > 5 ? arguments[5] : void 0,
          AU = arguments.length > 6 ? arguments[6] : void 0,
          FU = arguments.length > 7 ? arguments[7] : void 0;
        this.parser = UU, this.state = XU, this.fragments = zU, this.tree = cU, this.treeLen = yU, this.viewport = QU, this.skipped = AU, this.scheduleOn = FU, this.parse = null, this.tempSkipped = []
      }
      static create(UU, XU, zU) {
        return new BU(UU, XU, [], yU.z.empty, 0, zU, [], null)
      }
      startParse() {
        return this.parser.startParse(new kU(this.state.doc), this.fragments)
      }
      work(UU, XU) {
        return null != XU && XU >= this.state.doc.length && (XU = void 0), this.tree != yU.z.empty && this.isDone(null !== XU && void 0 !== XU ? XU : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext((() => {
          var zU;
          if ("number" == typeof UU) {
            let XU = Date.now() + UU;
            UU = () => Date.now() > XU
          }
          for (this.parse || (this.parse = this.startParse()), null != XU && (null == this.parse.stoppedAt || this.parse.stoppedAt > XU) && XU < this.state.doc.length && this.parse.stopAt(XU);;) {
            let cU = this.parse.advance();
            if (cU) {
              if (this.fragments = this.withoutTempSkipped(yU.x.addTree(cU, this.fragments, null != this.parse.stoppedAt)), this.treeLen = null !== (zU = this.parse.stoppedAt) && void 0 !== zU ? zU : this.state.doc.length, this.tree = cU, this.parse = null, !(this.treeLen < (null !== XU && void 0 !== XU ? XU : this.state.doc.length))) return !0;
              this.parse = this.startParse()
            }
            if (UU()) return !1
          }
        }))
      }
      takeTree() {
        let UU, XU;
        this.parse && (UU = this.parse.parsedPos) >= this.treeLen && ((null == this.parse.stoppedAt || this.parse.stoppedAt > UU) && this.parse.stopAt(UU), this.withContext((() => {
          for (; !(XU = this.parse.advance()););
        })), this.treeLen = UU, this.tree = XU, this.fragments = this.withoutTempSkipped(yU.x.addTree(this.tree, this.fragments, !0)), this.parse = null)
      }
      withContext(UU) {
        let XU = GU;
        GU = this;
        try {
          return UU()
        } finally {
          GU = XU
        }
      }
      withoutTempSkipped(UU) {
        for (let XU; XU = this.tempSkipped.pop();) UU = ZU(UU, XU.from, XU.to);
        return UU
      }
      changes(UU, XU) {
        let {
          fragments: zU,
          tree: cU,
          treeLen: QU,
          viewport: AU,
          skipped: FU
        } = this;
        if (this.takeTree(), !UU.empty) {
          let XU = [];
          if (UU.iterChangedRanges(((UU, zU, cU, yU) => XU.push({
              fromA: UU,
              toA: zU,
              fromB: cU,
              toB: yU
            }))), zU = yU.x.applyChanges(zU, XU), cU = yU.z.empty, QU = 0, AU = {
              from: UU.mapPos(AU.from, -1),
              to: UU.mapPos(AU.to, 1)
            }, this.skipped.length) {
            FU = [];
            for (let XU of this.skipped) {
              let zU = UU.mapPos(XU.from, 1),
                cU = UU.mapPos(XU.to, -1);
              zU < cU && FU.push({
                from: zU,
                to: cU
              })
            }
          }
        }
        return new BU(this.parser, XU, zU, cU, QU, AU, FU, this.scheduleOn)
      }
      updateViewport(UU) {
        if (this.viewport.from == UU.from && this.viewport.to == UU.to) return !1;
        this.viewport = UU;
        let XU = this.skipped.length;
        for (let zU = 0; zU < this.skipped.length; zU++) {
          let {
            from: XU,
            to: cU
          } = this.skipped[zU];
          XU < UU.to && cU > UU.from && (this.fragments = ZU(this.fragments, XU, cU), this.skipped.splice(zU--, 1))
        }
        return !(this.skipped.length >= XU) && (this.reset(), !0)
      }
      reset() {
        this.parse && (this.takeTree(), this.parse = null)
      }
      skipUntilInView(UU, XU) {
        this.skipped.push({
          from: UU,
          to: XU
        })
      }
      static getSkippingParser(UU) {
        return new class extends yU.w {
          createParse(XU, zU, cU) {
            let QU = cU[0].from,
              AU = cU[cU.length - 1].to;
            return {
              parsedPos: QU,
              advance() {
                let XU = GU;
                if (XU) {
                  for (let UU of cU) XU.tempSkipped.push(UU);
                  UU && (XU.scheduleOn = XU.scheduleOn ? Promise.all([XU.scheduleOn, UU]) : UU)
                }
                return this.parsedPos = AU, new yU.z(yU.p.none, [], [], AU - QU)
              },
              stoppedAt: null,
              stopAt() {}
            }
          }
        }
      }
      isDone(UU) {
        UU = Math.min(UU, this.state.doc.length);
        let XU = this.fragments;
        return this.treeLen >= UU && XU.length && 0 == XU[0].from && XU[0].to >= UU
      }
      static get() {
        return GU
      }
    }

    function ZU(UU, XU, zU) {
      return yU.x.applyChanges(UU, [{
        fromA: XU,
        toA: zU,
        fromB: XU,
        toB: zU
      }])
    }
    class RU {
      constructor(UU) {
        this.context = UU, this.tree = UU.tree
      }
      apply(UU) {
        if (!UU.docChanged && this.tree == this.context.tree) return this;
        let XU = this.context.changes(UU.changes, UU.state),
          zU = this.context.treeLen == UU.startState.doc.length ? void 0 : Math.max(UU.changes.mapPos(this.context.treeLen), XU.viewport.to);
        return XU.work(20, zU) || XU.takeTree(), new RU(XU)
      }
      static init(UU) {
        let XU = Math.min(3e3, UU.doc.length),
          zU = BU.create(UU.facet(LU).parser, UU, {
            from: 0,
            to: XU
          });
        return zU.work(20, XU) || zU.takeTree(), new RU(zU)
      }
    }
    NU.state = QU.L.define({
      create: RU.init,
      update(UU, XU) {
        for (let zU of XU.effects)
          if (zU.is(NU.setState)) return zU.value;
        return XU.startState.facet(LU) != XU.state.facet(LU) ? RU.init(XU.state) : UU.apply(XU)
      }
    });
    let PU = UU => {
      let XU = setTimeout((() => UU()), 500);
      return () => clearTimeout(XU)
    };
    "undefined" != typeof requestIdleCallback && (PU = UU => {
      let XU = -1,
        zU = setTimeout((() => {
          XU = requestIdleCallback(UU, {
            timeout: 400
          })
        }), 100);
      return () => XU < 0 ? clearTimeout(zU) : cancelIdleCallback(XU)
    });
    const WU = "undefined" != typeof navigator && (null === (cU = navigator.scheduling) || void 0 === cU ? void 0 : cU.isInputPending) ? () => navigator.scheduling.isInputPending() : null,
      dU = AU.n.fromClass(class {
        constructor(UU) {
          this.view = UU, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork()
        }
        update(UU) {
          let XU = this.view.state.field(NU.state).context;
          (XU.updateViewport(UU.view.viewport) || this.view.viewport.to > XU.treeLen) && this.scheduleWork(), (UU.docChanged || UU.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(XU)
        }
        scheduleWork() {
          if (this.working) return;
          let {
            state: UU
          } = this.view, XU = UU.field(NU.state);
          XU.tree == XU.context.tree && XU.context.isDone(UU.doc.length) || (this.working = PU(this.work))
        }
        work(UU) {
          this.working = null;
          let XU = Date.now();
          if (this.chunkEnd < XU && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = XU + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
          let {
            state: zU,
            viewport: {
              to: cU
            }
          } = this.view, yU = zU.field(NU.state);
          if (yU.tree == yU.context.tree && yU.context.isDone(cU + 1e5)) return;
          let QU = Date.now() + Math.min(this.chunkBudget, 100, UU && !WU ? Math.max(25, UU.timeRemaining() - 5) : 1e9),
            AU = yU.context.treeLen < cU && zU.doc.length > cU + 1e3,
            FU = yU.context.work((() => WU && WU() || Date.now() > QU), cU + (AU ? 0 : 1e5));
          this.chunkBudget -= Date.now() - XU, (FU || this.chunkBudget <= 0) && (yU.context.takeTree(), this.view.dispatch({
            effects: NU.setState.of(new RU(yU.context))
          })), this.chunkBudget > 0 && (!FU || AU) && this.scheduleWork(), this.checkAsyncSchedule(yU.context)
        }
        checkAsyncSchedule(UU) {
          UU.scheduleOn && (this.workScheduled++, UU.scheduleOn.then((() => this.scheduleWork())).catch((UU => (0, AU.V)(this.view.state, UU))).then((() => this.workScheduled--)), UU.scheduleOn = null)
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
      LU = QU.r.define({
        combine: UU => UU.length ? UU[0] : null,
        enables: UU => [NU.state, dU, AU.h.contentAttributes.compute([UU], (XU => {
          let zU = XU.facet(UU);
          return zU && zU.name ? {
            "data-language": zU.name
          } : {}
        }))]
      });
    class eU {
      constructor(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        this.language = UU, this.support = XU, this.extension = [UU, XU]
      }
    }
    const CU = QU.r.define(),
      wU = QU.r.define({
        combine: UU => {
          if (!UU.length) return "  ";
          let XU = UU[0];
          if (!XU || /\S/.test(XU) || Array.from(XU).some((UU => UU != XU[0]))) throw new Error("Invalid indent unit: " + JSON.stringify(UU[0]));
          return XU
        }
      });

    function qU(UU) {
      let XU = UU.facet(wU);
      return 9 == XU.charCodeAt(0) ? UU.tabSize * XU.length : XU.length
    }

    function OU(UU, XU) {
      let zU = "",
        cU = UU.tabSize,
        yU = UU.facet(wU)[0];
      if ("\t" == yU) {
        for (; XU >= cU;) zU += "\t", XU -= cU;
        yU = " "
      }
      for (let QU = 0; QU < XU; QU++) zU += yU;
      return zU
    }

    function SU(UU, XU) {
      UU instanceof QU.n && (UU = new rU(UU));
      for (let cU of UU.state.facet(CU)) {
        let zU = cU(UU, XU);
        if (void 0 !== zU) return zU
      }
      let zU = aU(UU.state);
      return zU.length >= XU ? function(UU, XU, zU) {
        let cU = XU.resolveStack(zU),
          yU = XU.resolveInner(zU, -1).resolve(zU, 0).enterUnfinishedNodesBefore(zU);
        if (yU != cU.node) {
          let UU = [];
          for (let XU = yU; XU && !(XU.from < cU.node.from || XU.to > cU.node.to || XU.from == cU.node.from && XU.type == cU.node.type); XU = XU.parent) UU.push(XU);
          for (let XU = UU.length - 1; XU >= 0; XU--) cU = {
            node: UU[XU],
            next: cU
          }
        }
        return fU(cU, UU, zU)
      }(UU, zU, XU) : null
    }
    class rU {
      constructor(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.state = UU, this.options = XU, this.unit = qU(UU)
      }
      lineAt(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          zU = this.state.doc.lineAt(UU),
          {
            simulateBreak: cU,
            simulateDoubleBreak: yU
          } = this.options;
        return null != cU && cU >= zU.from && cU <= zU.to ? yU && cU == UU ? {
          text: "",
          from: UU
        } : (XU < 0 ? cU < UU : cU <= UU) ? {
          text: zU.text.slice(cU - zU.from),
          from: cU
        } : {
          text: zU.text.slice(0, cU - zU.from),
          from: zU.from
        } : zU
      }
      textAfterPos(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (this.options.simulateDoubleBreak && UU == this.options.simulateBreak) return "";
        let {
          text: zU,
          from: cU
        } = this.lineAt(UU, XU);
        return zU.slice(UU - cU, Math.min(zU.length, UU + 100 - cU))
      }
      column(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: zU,
            from: cU
          } = this.lineAt(UU, XU),
          yU = this.countColumn(zU, UU - cU),
          QU = this.options.overrideIndentation ? this.options.overrideIndentation(cU) : -1;
        return QU > -1 && (yU += QU - this.countColumn(zU, zU.search(/\S|$/))), yU
      }
      countColumn(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UU.length;
        return (0, QU.X)(UU, this.state.tabSize, XU)
      }
      lineIndent(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: zU,
            from: cU
          } = this.lineAt(UU, XU),
          yU = this.options.overrideIndentation;
        if (yU) {
          let UU = yU(cU);
          if (UU > -1) return UU
        }
        return this.countColumn(zU, zU.search(/\S|$/))
      }
      get simulatedBreak() {
        return this.options.simulateBreak || null
      }
    }
    const uU = new yU.j;

    function fU(UU, XU, zU) {
      for (let cU = UU; cU; cU = cU.next) {
        let UU = iU(cU.node);
        if (UU) return UU(MU.create(XU, zU, cU))
      }
      return 0
    }

    function iU(UU) {
      let XU = UU.type.prop(uU);
      if (XU) return XU;
      let zU, cU = UU.firstChild;
      if (cU && (zU = cU.type.prop(yU.j.closedBy))) {
        let XU = UU.lastChild,
          cU = XU && zU.indexOf(XU.name) > -1;
        return UU => sU(UU, !0, 1, void 0, cU && ! function(UU) {
          return UU.pos == UU.options.simulateBreak && UU.options.simulateDoubleBreak
        }(UU) ? XU.from : void 0)
      }
      return null == UU.parent ? HU : null
    }

    function HU() {
      return 0
    }
    class MU extends rU {
      constructor(UU, XU, zU) {
        super(UU.state, UU.options), this.base = UU, this.pos = XU, this.context = zU
      }
      get node() {
        return this.context.node
      }
      static create(UU, XU, zU) {
        return new MU(UU, XU, zU)
      }
      get textAfter() {
        return this.textAfterPos(this.pos)
      }
      get baseIndent() {
        return this.baseIndentFor(this.node)
      }
      baseIndentFor(UU) {
        let XU = this.state.doc.lineAt(UU.from);
        for (;;) {
          let zU = UU.resolve(XU.from);
          for (; zU.parent && zU.parent.from == zU.from;) zU = zU.parent;
          if (vU(zU, UU)) break;
          XU = this.state.doc.lineAt(zU.from)
        }
        return this.lineIndent(XU.from)
      }
      continue () {
        return fU(this.context.next, this.base, this.pos)
      }
    }

    function vU(UU, XU) {
      for (let zU = XU; zU; zU = zU.parent)
        if (UU == zU) return !0;
      return !1
    }

    function VU(UU) {
      let {
        closing: XU,
        align: zU = !0,
        units: cU = 1
      } = UU;
      return UU => sU(UU, zU, cU, XU)
    }

    function sU(UU, XU, zU, cU, yU) {
      let QU = UU.textAfter,
        AU = QU.match(/^\s*/)[0].length,
        FU = cU && QU.slice(AU, AU + cU.length) == cU || yU == UU.pos + AU,
        oU = XU ? function(UU) {
          let XU = UU.node,
            zU = XU.childAfter(XU.from),
            cU = XU.lastChild;
          if (!zU) return null;
          let yU = UU.options.simulateBreak,
            QU = UU.state.doc.lineAt(zU.from),
            AU = null == yU || yU <= QU.from ? QU.to : Math.min(QU.to, yU);
          for (let FU = zU.to;;) {
            let UU = XU.childAfter(FU);
            if (!UU || UU == cU) return null;
            if (!UU.type.isSkipped) {
              if (UU.from >= AU) return null;
              let XU = /^ */.exec(QU.text.slice(zU.to - QU.from))[0].length;
              return {
                from: zU.from,
                to: zU.to + XU
              }
            }
            FU = UU.to
          }
        }(UU) : null;
      return oU ? FU ? UU.column(oU.from) : UU.column(oU.to) : UU.baseIndent + (FU ? 0 : UU.unit * zU)
    }
    const nU = UU => UU.baseIndent;

    function mU() {
      let {
        except: UU,
        units: XU = 1
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return zU => {
        let cU = UU && UU.test(zU.textAfter);
        return zU.baseIndent + (cU ? 0 : XU * zU.unit)
      }
    }
    const lU = 200;

    function xU() {
      return QU.n.transactionFilter.of((UU => {
        if (!UU.docChanged || !UU.isUserEvent("input.type") && !UU.isUserEvent("input.complete")) return UU;
        let XU = UU.startState.languageDataAt("indentOnInput", UU.startState.selection.main.head);
        if (!XU.length) return UU;
        let zU = UU.newDoc,
          {
            head: cU
          } = UU.newSelection.main,
          yU = zU.lineAt(cU);
        if (cU > yU.from + lU) return UU;
        let QU = zU.sliceString(yU.from, cU);
        if (!XU.some((UU => UU.test(QU)))) return UU;
        let {
          state: AU
        } = UU, FU = -1, oU = [];
        for (let {
            head: DU
          }
          of AU.selection.Qt) {
          let UU = AU.doc.lineAt(DU);
          if (UU.from == FU) continue;
          FU = UU.from;
          let XU = SU(AU, UU.from);
          if (null == XU) continue;
          let zU = /^\s*/.exec(UU.text)[0],
            cU = OU(AU, XU);
          zU != cU && oU.push({
            from: UU.from,
            to: UU.from + zU.length,
            insert: cU
          })
        }
        return oU.length ? [UU, {
          changes: oU,
          sequential: !0
        }] : UU
      }))
    }
    const JU = QU.r.define(),
      jU = new yU.j;

    function KU(UU) {
      let XU = UU.firstChild,
        zU = UU.lastChild;
      return XU && XU.to < zU.from ? {
        from: XU.to,
        to: zU.type.isError ? UU.to : zU.from
      } : null
    }

    function bU(UU) {
      let XU = UU.lastChild;
      return XU && XU.to == UU.to && XU.type.isError
    }

    function TU(UU, XU, zU) {
      for (let cU of UU.facet(JU)) {
        let yU = cU(UU, XU, zU);
        if (yU) return yU
      }
      return function(UU, XU, zU) {
        let cU = aU(UU);
        if (cU.length < zU) return null;
        let yU = null;
        for (let QU = cU.resolveStack(zU, 1); QU; QU = QU.next) {
          let AU = QU.node;
          if (AU.to <= zU || AU.from > zU) continue;
          if (yU && AU.from < XU) break;
          let FU = AU.type.prop(jU);
          if (FU && (AU.to < cU.length - 50 || cU.length == UU.doc.length || !bU(AU))) {
            let cU = FU(AU, UU);
            cU && cU.from <= zU && cU.from >= XU && cU.to > zU && (yU = cU)
          }
        }
        return yU
      }(UU, XU, zU)
    }

    function hU(UU, XU) {
      let zU = XU.mapPos(UU.from, 1),
        cU = XU.mapPos(UU.to, -1);
      return zU >= cU ? void 0 : {
        from: zU,
        to: cU
      }
    }
    const UX = QU.H.define({
        map: hU
      }),
      XX = QU.H.define({
        map: hU
      });

    function zX(UU) {
      let XU = [];
      for (let {
          head: zU
        }
        of UU.state.selection.Qt) XU.some((UU => UU.from <= zU && UU.to >= zU)) || XU.push(UU.lineBlockAt(zU));
      return XU
    }
    const cX = QU.L.define({
      create: () => AU.c.none,
      update(UU, XU) {
        XU.isUserEvent("delete") && XU.changes.iterChangedRanges(((XU, zU) => UU = yX(UU, XU, zU))), UU = UU.map(XU.changes);
        for (let zU of XU.effects)
          if (zU.is(UX) && !AX(UU, zU.value.from, zU.value.to)) {
            let {
              preparePlaceholder: cU
            } = XU.state.facet(YX), yU = cU ? AU.c.replace({
              widget: new aX(cU(XU.state, zU.value))
            }) : pX;
            UU = UU.update({
              add: [yU.range(zU.value.from, zU.value.to)]
            })
          } else zU.is(XX) && (UU = UU.update({
            filter: (UU, XU) => zU.value.from != UU || zU.value.to != XU,
            filterFrom: zU.value.from,
            filterTo: zU.value.to
          }));
        return XU.selection && (UU = yX(UU, XU.selection.main.head)), UU
      },
      provide: UU => AU.h.hy.from(UU),
      toJSON(UU, XU) {
        let zU = [];
        return UU.between(0, XU.doc.length, ((UU, XU) => {
          zU.push(UU, XU)
        })), zU
      },
      fromJSON(UU) {
        if (!Array.isArray(UU) || UU.length % 2) throw new RangeError("Invalid JSON for fold state");
        let XU = [];
        for (let zU = 0; zU < UU.length;) {
          let cU = UU[zU++],
            yU = UU[zU++];
          if ("number" != typeof cU || "number" != typeof yU) throw new RangeError("Invalid JSON for fold state");
          XU.push(pX.range(cU, yU))
        }
        return AU.c.set(XU, !0)
      }
    });

    function yX(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : XU,
        cU = !1;
      return UU.between(XU, zU, ((UU, yU) => {
        UU < zU && yU > XU && (cU = !0)
      })), cU ? UU.update({
        filterFrom: XU,
        filterTo: zU,
        filter: (UU, cU) => UU >= zU || cU <= XU
      }) : UU
    }

    function QX(UU, XU, zU) {
      var cU;
      let yU = null;
      return null === (cU = UU.field(cX, !1)) || void 0 === cU || cU.between(XU, zU, ((UU, XU) => {
        (!yU || yU.from > UU) && (yU = {
          from: UU,
          to: XU
        })
      })), yU
    }

    function AX(UU, XU, zU) {
      let cU = !1;
      return UU.between(XU, XU, ((UU, yU) => {
        UU == XU && yU == zU && (cU = !0)
      })), cU
    }

    function FX(UU, XU) {
      return UU.field(cX, !1) ? XU : XU.concat(QU.H.appendConfig.of(NX()))
    }

    function oX(UU, XU) {
      let zU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        cU = UU.state.doc.lineAt(XU.from).number,
        yU = UU.state.doc.lineAt(XU.to).number;
      return AU.h.announce.of(`${UU.state.phrase(zU?"Folded lines":"Unfolded lines")} ${cU} ${UU.state.phrase("to")} ${yU}.`)
    }
    const DX = [{
        key: "Ctrl-Shift-[",
        mac: "Cmd-Alt-[",
        run: UU => {
          for (let XU of zX(UU)) {
            let zU = TU(UU.state, XU.from, XU.to);
            if (zU) return UU.dispatch({
              effects: FX(UU.state, [UX.of(zU), oX(UU, zU)])
            }), !0
          }
          return !1
        }
      }, {
        key: "Ctrl-Shift-]",
        mac: "Cmd-Alt-]",
        run: UU => {
          if (!UU.state.field(cX, !1)) return !1;
          let XU = [];
          for (let zU of zX(UU)) {
            let cU = QX(UU.state, zU.from, zU.to);
            cU && XU.push(XX.of(cU), oX(UU, cU, !1))
          }
          return XU.length && UU.dispatch({
            effects: XU
          }), XU.length > 0
        }
      }, {
        key: "Ctrl-Alt-[",
        run: UU => {
          let {
            state: XU
          } = UU, zU = [];
          for (let cU = 0; cU < XU.doc.length;) {
            let yU = UU.lineBlockAt(cU),
              QU = TU(XU, yU.from, yU.to);
            QU && zU.push(UX.of(QU)), cU = (QU ? UU.lineBlockAt(QU.to) : yU).to + 1
          }
          return zU.length && UU.dispatch({
            effects: FX(UU.state, zU)
          }), !!zU.length
        }
      }, {
        key: "Ctrl-Alt-]",
        run: UU => {
          let XU = UU.state.field(cX, !1);
          if (!XU || !XU.size) return !1;
          let zU = [];
          return XU.between(0, UU.state.doc.length, ((UU, XU) => {
            zU.push(XX.of({
              from: UU,
              to: XU
            }))
          })), UU.dispatch({
            effects: zU
          }), !0
        }
      }],
      EX = {
        placeholderDOM: null,
        preparePlaceholder: null,
        placeholderText: "\u2026"
      },
      YX = QU.r.define({
        combine: UU => (0, QU.V)(UU, EX)
      });

    function NX(UU) {
      let XU = [cX, GX];
      return UU && XU.push(YX.of(UU)), XU
    }

    function IX(UU, XU) {
      let {
        state: zU
      } = UU, cU = zU.facet(YX), yU = XU => {
        let zU = UU.lineBlockAt(UU.posAtDOM(XU.target)),
          cU = QX(UU.state, zU.from, zU.to);
        cU && UU.dispatch({
          effects: XX.of(cU)
        }), XU.preventDefault()
      };
      if (cU.placeholderDOM) return cU.placeholderDOM(UU, yU, XU);
      let QU = document.createElement("span");
      return QU.textContent = cU.placeholderText, QU.setAttribute("aria-label", zU.phrase("folded code")), QU.title = zU.phrase("unfold"), QU.className = "cm-foldPlaceholder", QU.onclick = yU, QU
    }
    const pX = AU.c.replace({
      widget: new class extends AU.o {
        toDOM(UU) {
          return IX(UU, null)
        }
      }
    });
    class aX extends AU.o {
      constructor(UU) {
        super(), this.value = UU
      }
      eq(UU) {
        return this.value == UU.value
      }
      toDOM(UU) {
        return IX(UU, this.value)
      }
    }
    const tX = {
      openText: "\u2304",
      closedText: "\u203a",
      markerDOM: null,
      domEventHandlers: {},
      foldingChanged: () => !1
    };
    class gX extends AU.j {
      constructor(UU, XU) {
        super(), this.config = UU, this.open = XU
      }
      eq(UU) {
        return this.config == UU.config && this.open == UU.open
      }
      toDOM(UU) {
        if (this.config.markerDOM) return this.config.markerDOM(this.open);
        let XU = document.createElement("span");
        return XU.textContent = this.open ? this.config.openText : this.config.closedText, XU.title = UU.state.phrase(this.open ? "Fold line" : "Unfold line"), XU
      }
    }

    function kX() {
      let UU = {
          ...tX,
          ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        },
        XU = new gX(UU, !0),
        zU = new gX(UU, !1),
        cU = AU.n.fromClass(class {
          constructor(UU) {
            this.from = UU.viewport.from, this.markers = this.buildMarkers(UU)
          }
          update(XU) {
            (XU.docChanged || XU.viewportChanged || XU.startState.facet(LU) != XU.state.facet(LU) || XU.startState.field(cX, !1) != XU.state.field(cX, !1) || aU(XU.startState) != aU(XU.state) || UU.foldingChanged(XU)) && (this.markers = this.buildMarkers(XU.view))
          }
          buildMarkers(UU) {
            let cU = new QU.z;
            for (let yU of UU.viewportLineBlocks) {
              let QU = QX(UU.state, yU.from, yU.to) ? zU : TU(UU.state, yU.from, yU.to) ? XU : null;
              QU && cU.add(yU.from, yU.from, QU)
            }
            return cU.finish()
          }
        }),
        {
          domEventHandlers: yU
        } = UU;
      return [cU, (0, AU.E)({
        class: "cm-foldGutter",
        markers(UU) {
          var XU;
          return (null === (XU = UU.plugin(cU)) || void 0 === XU ? void 0 : XU.markers) || QU.D.empty
        },
        initialSpacer: () => new gX(UU, !1),
        domEventHandlers: {
          ...yU,
          click: (UU, XU, zU) => {
            if (yU.click && yU.click(UU, XU, zU)) return !0;
            let cU = QX(UU.state, XU.from, XU.to);
            if (cU) return UU.dispatch({
              effects: XX.of(cU)
            }), !0;
            let QU = TU(UU.state, XU.from, XU.to);
            return !!QU && (UU.dispatch({
              effects: UX.of(QU)
            }), !0)
          }
        }
      }), NX()]
    }
    const GX = AU.h.baseTheme({
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
    class BX {
      constructor(UU, XU) {
        let zU;

        function cU(UU) {
          let XU = oU.e.newName();
          return (zU || (zU = Object.create(null)))["." + XU] = UU, XU
        }
        this.specs = UU;
        const yU = "string" == typeof XU.all ? XU.all : XU.all ? cU(XU.all) : void 0,
          QU = XU.scope;
        this.scope = QU instanceof NU ? UU => UU.prop(DU) == QU.data : QU ? UU => UU == QU : void 0, this.style = (0, FU.i)(UU.map((UU => ({
          tag: UU.tag,
          class: UU.class || cU(Object.assign({}, UU, {
            tag: null
          }))
        }))), {
          all: yU
        }).style, this.module = zU ? new oU.e(zU) : null, this.themeType = XU.themeType
      }
      static define(UU, XU) {
        return new BX(UU, XU || {})
      }
    }
    const ZX = QU.r.define(),
      RX = QU.r.define({
        combine: UU => UU.length ? [UU[0]] : null
      });

    function PX(UU) {
      let XU = UU.facet(ZX);
      return XU.length ? XU : UU.facet(RX)
    }

    function WX(UU, XU) {
      let zU, cU = [LX];
      return UU instanceof BX && (UU.module && cU.push(AU.h.styleModule.of(UU.module)), zU = UU.themeType), (null === XU || void 0 === XU ? void 0 : XU.fallback) ? cU.push(RX.of(UU)) : zU ? cU.push(ZX.computeN([AU.h.darkTheme], (XU => XU.facet(AU.h.darkTheme) == ("dark" == zU) ? [UU] : []))) : cU.push(ZX.of(UU)), cU
    }
    class dX {
      constructor(UU) {
        this.markCache = Object.create(null), this.tree = aU(UU.state), this.hy = this.buildDeco(UU, PX(UU.state)), this.decoratedTo = UU.viewport.to
      }
      update(UU) {
        let XU = aU(UU.state),
          zU = PX(UU.state),
          cU = zU != PX(UU.startState),
          {
            viewport: yU
          } = UU.view,
          QU = UU.changes.mapPos(this.decoratedTo, 1);
        XU.length < yU.to && !cU && XU.type == this.tree.type && QU >= yU.to ? (this.hy = this.hy.map(UU.changes), this.decoratedTo = QU) : (XU != this.tree || UU.viewportChanged || cU) && (this.tree = XU, this.hy = this.buildDeco(UU.view, zU), this.decoratedTo = yU.to)
      }
      buildDeco(UU, XU) {
        if (!XU || !this.tree.length) return AU.c.none;
        let zU = new QU.z;
        for (let {
            from: cU,
            to: yU
          }
          of UU.rUU)(0, FU.c)(this.tree, XU, ((UU, XU, cU) => {
          zU.add(UU, XU, this.markCache[cU] || (this.markCache[cU] = AU.c.mark({
            class: cU
          })))
        }), cU, yU);
        return zU.finish()
      }
    }
    const LX = QU.w.high(AU.n.fromClass(dX, {
        hy: UU => UU.hy
      })),
      eX = BX.define([{
        tag: FU.k.meta,
        color: "#404740"
      }, {
        tag: FU.k.link,
        textDecoration: "underline"
      }, {
        tag: FU.k.heading,
        textDecoration: "underline",
        fontWeight: "bold"
      }, {
        tag: FU.k.emphasis,
        fontStyle: "italic"
      }, {
        tag: FU.k.strong,
        fontWeight: "bold"
      }, {
        tag: FU.k.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: FU.k.keyword,
        color: "#708"
      }, {
        tag: [FU.k.atom, FU.k.bool, FU.k.url, FU.k.contentSeparator, FU.k.labelName],
        color: "#219"
      }, {
        tag: [FU.k.literal, FU.k.inserted],
        color: "#164"
      }, {
        tag: [FU.k.string, FU.k.deleted],
        color: "#a11"
      }, {
        tag: [FU.k.regexp, FU.k.escape, FU.k.special(FU.k.string)],
        color: "#e40"
      }, {
        tag: FU.k.definition(FU.k.variableName),
        color: "#00f"
      }, {
        tag: FU.k.local(FU.k.variableName),
        color: "#30a"
      }, {
        tag: [FU.k.typeName, FU.k.namespace],
        color: "#085"
      }, {
        tag: FU.k.className,
        color: "#167"
      }, {
        tag: [FU.k.special(FU.k.variableName), FU.k.macroName],
        color: "#256"
      }, {
        tag: FU.k.definition(FU.k.propertyName),
        color: "#00c"
      }, {
        tag: FU.k.comment,
        color: "#940"
      }, {
        tag: FU.k.invalid,
        color: "#f00"
      }]),
      CX = AU.h.baseTheme({
        "&.cm-focused .cm-matchingBracket": {
          backgroundColor: "#328c8252"
        },
        "&.cm-focused .cm-nonmatchingBracket": {
          backgroundColor: "#bb555544"
        }
      }),
      wX = 1e4,
      qX = "()[]{}",
      OX = QU.r.define({
        combine: UU => (0, QU.V)(UU, {
          afterCursor: !0,
          brackets: qX,
          maxScanDistance: wX,
          renderMatch: uX
        })
      }),
      SX = AU.c.mark({
        class: "cm-matchingBracket"
      }),
      rX = AU.c.mark({
        class: "cm-nonmatchingBracket"
      });

    function uX(UU) {
      let XU = [],
        zU = UU.matched ? SX : rX;
      return XU.push(zU.range(UU.start.from, UU.start.to)), UU.end && XU.push(zU.range(UU.end.from, UU.end.to)), XU
    }

    function fX(UU) {
      let XU = [],
        zU = UU.facet(OX);
      for (let cU of UU.selection.Qt) {
        if (!cU.empty) continue;
        let yU = sX(UU, cU.head, -1, zU) || cU.head > 0 && sX(UU, cU.head - 1, 1, zU) || zU.afterCursor && (sX(UU, cU.head, 1, zU) || cU.head < UU.doc.length && sX(UU, cU.head + 1, -1, zU));
        yU && (XU = XU.concat(zU.renderMatch(yU, UU)))
      }
      return AU.c.set(XU, !0)
    }
    const iX = [AU.n.fromClass(class {
      constructor(UU) {
        this.paused = !1, this.hy = fX(UU.state)
      }
      update(UU) {
        (UU.docChanged || UU.selectionSet || this.paused) && (UU.view.composing ? (this.hy = this.hy.map(UU.changes), this.paused = !0) : (this.hy = fX(UU.state), this.paused = !1))
      }
    }, {
      hy: UU => UU.hy
    }), CX];

    function HX() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [OX.of(UU), iX]
    }
    const MX = new yU.j;

    function vX(UU, XU, zU) {
      let cU = UU.prop(XU < 0 ? yU.j.openedBy : yU.j.closedBy);
      if (cU) return cU;
      if (1 == UU.name.length) {
        let cU = zU.indexOf(UU.name);
        if (cU > -1 && cU % 2 == (XU < 0 ? 1 : 0)) return [zU[cU + XU]]
      }
      return null
    }

    function VX(UU) {
      let XU = UU.type.prop(MX);
      return XU ? XU(UU.node) : UU
    }

    function sX(UU, XU, zU) {
      let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        yU = cU.maxScanDistance || wX,
        QU = cU.brackets || qX,
        AU = aU(UU),
        FU = AU.resolveInner(XU, zU);
      for (let oU = FU; oU; oU = oU.parent) {
        let cU = vX(oU.type, zU, QU);
        if (cU && oU.from < oU.to) {
          let yU = VX(oU);
          if (yU && (zU > 0 ? XU >= yU.from && XU < yU.to : XU > yU.from && XU <= yU.to)) return nX(UU, XU, zU, oU, yU, cU, QU)
        }
      }
      return function(UU, XU, zU, cU, yU, QU, AU) {
        if (zU < 0 ? !XU : XU == UU.doc.length) return null;
        let FU = zU < 0 ? UU.sliceDoc(XU - 1, XU) : UU.sliceDoc(XU, XU + 1),
          oU = AU.indexOf(FU);
        if (oU < 0 || oU % 2 == 0 != zU > 0) return null;
        let DU = {
            from: zU < 0 ? XU - 1 : XU,
            to: zU > 0 ? XU + 1 : XU
          },
          EU = UU.doc.iterRange(XU, zU > 0 ? UU.doc.length : 0),
          YU = 0;
        for (let NU = 0; !EU.next().done && NU <= QU;) {
          let UU = EU.value;
          zU < 0 && (NU += UU.length);
          let QU = XU + NU * zU;
          for (let XU = zU > 0 ? 0 : UU.length - 1, FU = zU > 0 ? UU.length : -1; XU != FU; XU += zU) {
            let FU = AU.indexOf(UU[XU]);
            if (!(FU < 0 || cU.resolveInner(QU + XU, 1).type != yU))
              if (FU % 2 == 0 == zU > 0) YU++;
              else {
                if (1 == YU) return {
                  start: DU,
                  end: {
                    from: QU + XU,
                    to: QU + XU + 1
                  },
                  matched: FU >> 1 == oU >> 1
                };
                YU--
              }
          }
          zU > 0 && (NU += UU.length)
        }
        return EU.done ? {
          start: DU,
          matched: !1
        } : null
      }(UU, XU, zU, AU, FU.type, yU, QU)
    }

    function nX(UU, XU, zU, cU, yU, QU, AU) {
      let FU = cU.parent,
        oU = {
          from: yU.from,
          to: yU.to
        },
        DU = 0,
        EU = null === FU || void 0 === FU ? void 0 : FU.cursor();
      if (EU && (zU < 0 ? EU.childBefore(cU.from) : EU.childAfter(cU.to)))
        do {
          if (zU < 0 ? EU.to <= cU.from : EU.from >= cU.to) {
            if (0 == DU && QU.indexOf(EU.type.name) > -1 && EU.from < EU.to) {
              let UU = VX(EU);
              return {
                start: oU,
                end: UU ? {
                  from: UU.from,
                  to: UU.to
                } : void 0,
                matched: !0
              }
            }
            if (vX(EU.type, zU, AU)) DU++;
            else if (vX(EU.type, -zU, AU)) {
              if (0 == DU) {
                let UU = VX(EU);
                return {
                  start: oU,
                  end: UU && UU.from < UU.to ? {
                    from: UU.from,
                    to: UU.to
                  } : void 0,
                  matched: !1
                }
              }
              DU--
            }
          }
        } while (zU < 0 ? EU.prevSibling() : EU.nextSibling());
      return {
        start: oU,
        matched: !1
      }
    }
    const mX = Object.create(null),
      lX = [yU.p.none],
      xX = [],
      JX = Object.create(null),
      jX = Object.create(null);
    for (let [TX, hX] of [
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
      ]) jX[TX] = bX(mX, hX);

    function KX(UU, XU) {
      xX.indexOf(UU) > -1 || (xX.push(UU), console.warn(XU))
    }

    function bX(UU, XU) {
      let zU = [];
      for (let yU of XU.split(" ")) {
        let XU = [];
        for (let zU of yU.split(".")) {
          let cU = UU[zU] || FU.k[zU];
          cU ? "function" == typeof cU ? XU.length ? XU = XU.map(cU) : KX(zU, `Modifier ${zU} used at start of tag`) : XU.length ? KX(zU, `Tag ${zU} used as modifier`) : XU = Array.isArray(cU) ? cU : [cU] : KX(zU, `Unknown highlighting tag ${zU}`)
        }
        for (let UU of XU) zU.push(UU)
      }
      if (!zU.length) return 0;
      let cU = XU.replace(/ /g, "_"),
        QU = cU + " " + zU.map((UU => UU.id)),
        AU = JX[QU];
      if (AU) return AU.id;
      let oU = JX[QU] = yU.p.define({
        id: lX.length,
        name: cU,
        props: [(0, FU.e)({
          [cU]: zU
        })]
      });
      return lX.push(oU), oU.id
    }
    AU.e.RTL, AU.e.LTR
  },
  44068: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => GU,
      d: () => PU
    });
    var cU = zU(44014),
      yU = zU(44009),
      QU = zU(44025);
    class AU {
      constructor(UU, XU, zU) {
        this.from = UU, this.to = XU, this.diagnostic = zU
      }
    }
    class FU {
      constructor(UU, XU, zU) {
        this.diagnostics = UU, this.panel = XU, this.selected = zU
      }
      static init(UU, XU, zU) {
        let QU = zU.facet(ZU).markerFilter;
        QU && (UU = QU(UU, zU));
        let AU = UU.slice().sort(((UU, XU) => UU.from - XU.from || UU.to - XU.to)),
          DU = new yU.z,
          EU = [],
          YU = 0,
          NU = zU.doc.iter(),
          IU = 0,
          pU = zU.doc.length;
        for (let yU = 0;;) {
          let UU, XU, zU = yU == AU.length ? null : AU[yU];
          if (!zU && !EU.length) break;
          if (EU.length) UU = YU, XU = EU.reduce(((UU, XU) => Math.min(UU, XU.to)), zU && zU.from > UU ? zU.from : 1e8);
          else {
            if (UU = zU.from, UU > pU) break;
            XU = zU.to, EU.push(zU), yU++
          }
          for (; yU < AU.length;) {
            let zU = AU[yU];
            if (zU.from != UU || !(zU.to > zU.from || zU.to == UU)) {
              XU = Math.min(zU.from, XU);
              break
            }
            EU.push(zU), yU++, XU = Math.min(zU.to, XU)
          }
          XU = Math.min(XU, pU);
          let QU = !1;
          if (EU.some((zU => zU.from == UU && (zU.to == XU || XU == pU))) && (QU = UU == XU, !QU && XU - UU < 10)) {
            let zU = UU - (IU + NU.value.length);
            zU > 0 && (NU.next(zU), IU = UU);
            for (let cU = UU;;) {
              if (cU >= XU) {
                QU = !0;
                break
              }
              if (!NU.lineBreak && IU + NU.value.length > cU) break;
              cU = IU + NU.value.length, IU += NU.value.length, NU.next()
            }
          }
          let FU = rU(EU);
          if (QU) DU.add(UU, UU, cU.c.widget({
            widget: new LU(FU),
            diagnostics: EU.slice()
          }));
          else {
            let zU = EU.reduce(((UU, XU) => XU.markClass ? UU + " " + XU.markClass : UU), "");
            DU.add(UU, XU, cU.c.mark({
              class: "cm-lintRange cm-lintRange-" + FU + zU,
              diagnostics: EU.slice(),
              inclusiveEnd: EU.some((UU => UU.to > XU))
            }))
          }
          if (YU = XU, YU == pU) break;
          for (let cU = 0; cU < EU.length; cU++) EU[cU].to <= YU && EU.splice(cU--, 1)
        }
        let aU = DU.finish();
        return new FU(aU, XU, oU(aU))
      }
    }

    function oU(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        cU = null;
      return UU.between(zU, 1e9, ((UU, zU, yU) => {
        let {
          spec: QU
        } = yU;
        if (!(XU && QU.diagnostics.indexOf(XU) < 0))
          if (cU) {
            if (QU.diagnostics.indexOf(cU.diagnostic) < 0) return !1;
            cU = new AU(cU.from, zU, cU.diagnostic)
          } else cU = new AU(UU, zU, XU || QU.diagnostics[0])
      })), cU
    }

    function DU(UU, XU) {
      let zU = XU.pos,
        cU = XU.end || zU,
        yU = UU.state.facet(ZU).hideOn(UU, zU, cU);
      if (null != yU) return yU;
      let QU = UU.startState.doc.lineAt(XU.pos);
      return !(!UU.effects.some((UU => UU.is(YU))) && !UU.changes.touchesRange(QU.from, Math.max(QU.to, cU)))
    }

    function EU(UU, XU) {
      return UU.field(pU, !1) ? XU : XU.concat(yU.H.appendConfig.of(uU))
    }
    const YU = yU.H.define(),
      NU = yU.H.define(),
      IU = yU.H.define(),
      pU = yU.L.define({
        create: () => new FU(cU.c.none, null, null),
        update(UU, XU) {
          if (XU.docChanged && UU.diagnostics.size) {
            let zU = UU.diagnostics.map(XU.changes),
              cU = null,
              yU = UU.panel;
            if (UU.selected) {
              let yU = XU.changes.mapPos(UU.selected.from, 1);
              cU = oU(zU, UU.selected.diagnostic, yU) || oU(zU, null, yU)
            }!zU.size && yU && XU.state.facet(ZU).autoPanel && (yU = null), UU = new FU(zU, yU, cU)
          }
          for (let zU of XU.effects)
            if (zU.is(YU)) {
              let cU = XU.state.facet(ZU).autoPanel ? zU.value.length ? CU.open : null : UU.panel;
              UU = FU.init(zU.value, cU, XU.state)
            } else zU.is(NU) ? UU = new FU(UU.diagnostics, zU.value ? CU.open : null, UU.selected) : zU.is(IU) && (UU = new FU(UU.diagnostics, UU.panel, zU.value));
          return UU
        },
        provide: UU => [cU.cb.from(UU, (UU => UU.panel)), cU.h.hy.from(UU, (UU => UU.diagnostics))]
      });
    const aU = cU.c.mark({
      class: "cm-lintRange cm-lintRange-active"
    });

    function tU(UU, XU, zU) {
      let cU, {
          diagnostics: yU
        } = UU.state.field(pU),
        QU = -1,
        AU = -1;
      yU.between(XU - (zU < 0 ? 1 : 0), XU + (zU > 0 ? 1 : 0), ((UU, yU, FU) => {
        let {
          spec: oU
        } = FU;
        if (XU >= UU && XU <= yU && (UU == yU || (XU > UU || zU > 0) && (XU < yU || zU < 0))) return cU = oU.diagnostics, QU = UU, AU = yU, !1
      }));
      let FU = UU.state.facet(ZU).tooltipFilter;
      return cU && FU && (cU = FU(cU, UU.state)), cU ? {
        pos: QU,
        end: AU,
        above: UU.state.doc.lineAt(QU).to < AU,
        create: () => ({
          dom: gU(UU, cU)
        })
      } : null
    }

    function gU(UU, XU) {
      return (0, QU.b)("ul", {
        class: "cm-tooltip-lint"
      }, XU.map((XU => dU(UU, XU, !1))))
    }
    const kU = UU => {
        let XU = UU.state.field(pU, !1);
        return !(!XU || !XU.panel) && (UU.dispatch({
          effects: NU.of(!1)
        }), !0)
      },
      GU = [{
        key: "Mod-Shift-m",
        run: UU => {
          let XU = UU.state.field(pU, !1);
          XU && XU.panel || UU.dispatch({
            effects: EU(UU.state, [NU.of(!0)])
          });
          let zU = (0, cU.x)(UU, CU.open);
          return zU && zU.dom.querySelector(".cm-panel-lint ul").focus(), !0
        },
        preventDefault: !0
      }, {
        key: "F8",
        run: UU => {
          let XU = UU.state.field(pU, !1);
          if (!XU) return !1;
          let zU = UU.state.selection.main,
            cU = oU(XU.diagnostics, null, zU.to + 1);
          return !(!cU && (cU = oU(XU.diagnostics, null, 0), !cU || cU.from == zU.from && cU.to == zU.to)) && (UU.dispatch({
            selection: {
              anchor: cU.from,
              head: cU.to
            },
            scrollIntoView: !0
          }), !0)
        }
      }],
      BU = cU.n.fromClass(class {
        constructor(UU) {
          this.view = UU, this.timeout = -1, this.set = !0;
          let {
            delay: XU
          } = UU.state.facet(ZU);
          this.lintTime = Date.now() + XU, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, XU)
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
              sources: XU
            } = UU.facet(ZU);
            XU.length && function(UU, XU, zU) {
              let cU = [],
                yU = -1;
              for (let QU of UU) QU.then((zU => {
                cU.push(zU), clearTimeout(yU), cU.length == UU.length ? XU(cU) : yU = setTimeout((() => XU(cU)), 200)
              }), zU)
            }(XU.map((UU => Promise.resolve(UU(this.view)))), (XU => {
              this.view.state.doc == UU.doc && this.view.dispatch(function(UU, XU) {
                return {
                  effects: EU(UU, [YU.of(XU)])
                }
              }(this.view.state, XU.reduce(((UU, XU) => UU.concat(XU)))))
            }), (UU => {
              (0, cU.V)(this.view.state, UU)
            }))
          }
        }
        update(UU) {
          let XU = UU.state.facet(ZU);
          (UU.docChanged || XU != UU.startState.facet(ZU) || XU.needsRefresh && XU.needsRefresh(UU)) && (this.lintTime = Date.now() + XU.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, XU.delay)))
        }
        force() {
          this.set && (this.lintTime = Date.now(), this.run())
        }
        destroy() {
          clearTimeout(this.timeout)
        }
      });
    const ZU = yU.r.define({
      combine: UU => ({
        sources: UU.map((UU => UU.source)).filter((UU => null != UU)),
        ...(0, yU.V)(UU.map((UU => UU.config)), {
          delay: 750,
          markerFilter: null,
          tooltipFilter: null,
          needsRefresh: null,
          hideOn: () => null
        }, {
          delay: Math.max,
          markerFilter: RU,
          tooltipFilter: RU,
          needsRefresh: (UU, XU) => UU ? XU ? zU => UU(zU) || XU(zU) : UU : XU,
          hideOn: (UU, XU) => UU ? XU ? (zU, cU, yU) => UU(zU, cU, yU) || XU(zU, cU, yU) : UU : XU,
          autoPanel: (UU, XU) => UU || XU
        })
      })
    });

    function RU(UU, XU) {
      return UU ? XU ? (zU, cU) => XU(UU(zU, cU), cU) : UU : XU
    }

    function PU(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return [ZU.of({
        source: UU,
        config: XU
      }), BU, uU]
    }

    function WU(UU) {
      let XU = [];
      if (UU) UU: for (let {
          name: zU
        }
        of UU) {
        for (let UU = 0; UU < zU.length; UU++) {
          let cU = zU[UU];
          if (/[a-zA-Z]/.test(cU) && !XU.some((UU => UU.toLowerCase() == cU.toLowerCase()))) {
            XU.push(cU);
            continue UU
          }
        }
        XU.push("")
      }
      return XU
    }

    function dU(UU, XU, zU) {
      var cU;
      let yU = zU ? WU(XU.actions) : [];
      return (0, QU.b)("li", {
        class: "cm-diagnostic cm-diagnostic-" + XU.severity
      }, (0, QU.b)("span", {
        class: "cm-diagnosticText"
      }, XU.renderMessage ? XU.renderMessage(UU) : XU.message), null === (cU = XU.actions) || void 0 === cU ? void 0 : cU.map(((zU, cU) => {
        let AU = !1,
          FU = cU => {
            if (cU.preventDefault(), AU) return;
            AU = !0;
            let yU = oU(UU.state.field(pU).diagnostics, XU);
            yU && zU.apply(UU, yU.from, yU.to)
          },
          {
            name: DU
          } = zU,
          EU = yU[cU] ? DU.indexOf(yU[cU]) : -1,
          YU = EU < 0 ? DU : [DU.slice(0, EU), (0, QU.b)("u", DU.slice(EU, EU + 1)), DU.slice(EU + 1)],
          NU = zU.markClass ? " " + zU.markClass : "";
        return (0, QU.b)("button", {
          type: "button",
          class: "cm-diagnosticAction" + NU,
          onclick: FU,
          onmousedown: FU,
          "aria-label": ` Action: ${DU}${EU<0?"":` (access key "${yU[cU]})"`}.`
        }, YU)
      })), XU.source && (0, QU.b)("div", {
        class: "cm-diagnosticSource"
      }, XU.source))
    }
    class LU extends cU.o {
      constructor(UU) {
        super(), this.sev = UU
      }
      eq(UU) {
        return UU.sev == this.sev
      }
      toDOM() {
        return (0, QU.b)("span", {
          class: "cm-lintPoint cm-lintPoint-" + this.sev
        })
      }
    }
    class eU {
      constructor(UU, XU) {
        this.diagnostic = XU, this.id = "item_" + Math.floor(4294967295 * Math.random()).toString(16), this.dom = dU(UU, XU, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option")
      }
    }
    class CU {
      constructor(UU) {
        this.view = UU, this.items = [];
        this.list = (0, QU.b)("ul", {
          tabIndex: 0,
          role: "listbox",
          "aria-label": this.view.state.phrase("Diagnostics"),
          onkeydown: XU => {
            if (!(XU.ctrlKey || XU.altKey || XU.metaKey)) {
              if (27 == XU.keyCode) kU(this.view), this.view.focus();
              else if (38 == XU.keyCode || 33 == XU.keyCode) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
              else if (40 == XU.keyCode || 34 == XU.keyCode) this.moveSelection((this.selectedIndex + 1) % this.items.length);
              else if (36 == XU.keyCode) this.moveSelection(0);
              else if (35 == XU.keyCode) this.moveSelection(this.items.length - 1);
              else if (13 == XU.keyCode) this.view.focus();
              else {
                if (!(XU.keyCode >= 65 && XU.keyCode <= 90 && this.selectedIndex >= 0)) return;
                {
                  let {
                    diagnostic: zU
                  } = this.items[this.selectedIndex], cU = WU(zU.actions);
                  for (let yU = 0; yU < cU.length; yU++)
                    if (cU[yU].toUpperCase().charCodeAt(0) == XU.keyCode) {
                      let XU = oU(this.view.state.field(pU).diagnostics, zU);
                      XU && zU.actions[yU].apply(UU, XU.from, XU.to)
                    }
                }
              }
              XU.preventDefault()
            }
          },
          onclick: UU => {
            for (let XU = 0; XU < this.items.length; XU++) this.items[XU].dom.contains(UU.target) && this.moveSelection(XU)
          }
        }), this.dom = (0, QU.b)("div", {
          class: "cm-panel-lint"
        }, this.list, (0, QU.b)("button", {
          type: "button",
          name: "close",
          "aria-label": this.view.state.phrase("close"),
          onclick: () => kU(this.view)
        }, "\xd7")), this.update()
      }
      get selectedIndex() {
        let UU = this.view.state.field(pU).selected;
        if (!UU) return -1;
        for (let XU = 0; XU < this.items.length; XU++)
          if (this.items[XU].diagnostic == UU.diagnostic) return XU;
        return -1
      }
      update() {
        let {
          diagnostics: UU,
          selected: XU
        } = this.view.state.field(pU), zU = 0, cU = !1, yU = null, QU = new Set;
        for (UU.between(0, this.view.state.doc.length, ((UU, AU, FU) => {
            let {
              spec: oU
            } = FU;
            for (let DU of oU.diagnostics) {
              if (QU.has(DU)) continue;
              QU.add(DU);
              let UU, AU = -1;
              for (let XU = zU; XU < this.items.length; XU++)
                if (this.items[XU].diagnostic == DU) {
                  AU = XU;
                  break
                } AU < 0 ? (UU = new eU(this.view, DU), this.items.splice(zU, 0, UU), cU = !0) : (UU = this.items[AU], AU > zU && (this.items.splice(zU, AU - zU), cU = !0)), XU && UU.diagnostic == XU.diagnostic ? UU.dom.hasAttribute("aria-selected") || (UU.dom.setAttribute("aria-selected", "true"), yU = UU) : UU.dom.hasAttribute("aria-selected") && UU.dom.removeAttribute("aria-selected"), zU++
            }
          })); zU < this.items.length && !(1 == this.items.length && this.items[0].diagnostic.from < 0);) cU = !0, this.items.pop();
        0 == this.items.length && (this.items.push(new eU(this.view, {
          from: -1,
          to: -1,
          severity: "info",
          message: this.view.state.phrase("No diagnostics")
        })), cU = !0), yU ? (this.list.setAttribute("aria-activedescendant", yU.id), this.view.requestMeasure({
          key: this,
          read: () => ({
            sel: yU.dom.getBoundingClientRect(),
            panel: this.list.getBoundingClientRect()
          }),
          write: UU => {
            let {
              sel: XU,
              panel: zU
            } = UU, cU = zU.height / this.list.offsetHeight;
            XU.top < zU.top ? this.list.scrollTop -= (zU.top - XU.top) / cU : XU.bottom > zU.bottom && (this.list.scrollTop += (XU.bottom - zU.bottom) / cU)
          }
        })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), cU && this.sync()
      }
      sync() {
        let UU = this.list.firstChild;

        function XU() {
          let XU = UU;
          UU = XU.nextSibling, XU.remove()
        }
        for (let zU of this.items)
          if (zU.dom.parentNode == this.list) {
            for (; UU != zU.dom;) XU();
            UU = zU.dom.nextSibling
          } else this.list.insertBefore(zU.dom, UU);
        for (; UU;) XU()
      }
      moveSelection(UU) {
        if (this.selectedIndex < 0) return;
        let XU = oU(this.view.state.field(pU).diagnostics, this.items[UU].diagnostic);
        XU && this.view.dispatch({
          selection: {
            anchor: XU.from,
            head: XU.to
          },
          scrollIntoView: !0,
          effects: IU.of(XU)
        })
      }
      static open(UU) {
        return new CU(UU)
      }
    }

    function wU(UU) {
      return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${arguments.length>1&&void 0!==arguments[1]?arguments[1]:'viewBox="0 0 40 40"'}>${encodeURIComponent(UU)}</svg>')`
    }

    function qU(UU) {
      return wU(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${UU}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"')
    }
    const OU = cU.h.baseTheme({
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
        backgroundImage: qU("#d11")
      },
      ".cm-lintRange-warning": {
        backgroundImage: qU("orange")
      },
      ".cm-lintRange-info": {
        backgroundImage: qU("#999")
      },
      ".cm-lintRange-hint": {
        backgroundImage: qU("#66d")
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

    function SU(UU) {
      return "error" == UU ? 4 : "warning" == UU ? 3 : "info" == UU ? 2 : 1
    }

    function rU(UU) {
      let XU = "hint",
        zU = 1;
      for (let cU of UU) {
        let UU = SU(cU.severity);
        UU > zU && (zU = UU, XU = cU.severity)
      }
      return XU
    }
    cU.j;
    const uU = [pU, cU.h.hy.compute([pU], (UU => {
      let {
        selected: XU,
        panel: zU
      } = UU.field(pU);
      return XU && zU && XU.from != XU.to ? cU.c.set([aU.range(XU.from, XU.to)]) : cU.c.none
    })), (0, cU.P)(tU, {
      hideOn: DU
    }), OU]
  },
  44063: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => TU,
      e: () => gU,
      h: () => hU
    });
    var cU = zU(44014),
      yU = zU(44009),
      QU = zU(44025);
    const AU = "function" == typeof String.prototype.normalize ? UU => UU.normalize("NFKD") : UU => UU;
    class FU {
      constructor(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : UU.length,
          yU = arguments.length > 4 ? arguments[4] : void 0,
          QU = arguments.length > 5 ? arguments[5] : void 0;
        this.test = QU, this.value = {
          from: 0,
          to: 0
        }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = UU.iterRange(zU, cU), this.bufferStart = zU, this.normalize = yU ? UU => yU(AU(UU)) : AU, this.query = this.normalize(XU)
      }
      peek() {
        if (this.bufferPos == this.buffer.length) {
          if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
          this.bufferPos = 0, this.buffer = this.iter.value
        }
        return (0, yU.Q)(this.buffer, this.bufferPos)
      }
      next() {
        for (; this.matches.length;) this.matches.pop();
        return this.nextOverlapping()
      }
      nextOverlapping() {
        for (;;) {
          let UU = this.peek();
          if (UU < 0) return this.done = !0, this;
          let XU = (0, yU.eb)(UU),
            zU = this.bufferStart + this.bufferPos;
          this.bufferPos += (0, yU.R)(UU);
          let cU = this.normalize(XU);
          if (cU.length)
            for (let yU = 0, QU = zU;; yU++) {
              let UU = cU.charCodeAt(yU),
                AU = this.match(UU, QU, this.bufferPos + this.bufferStart);
              if (yU == cU.length - 1) {
                if (AU) return this.value = AU, this;
                break
              }
              QU == zU && yU < XU.length && XU.charCodeAt(yU) == UU && QU++
            }
        }
      }
      match(UU, XU, zU) {
        let cU = null;
        for (let yU = 0; yU < this.matches.length; yU += 2) {
          let XU = this.matches[yU],
            QU = !1;
          this.query.charCodeAt(XU) == UU && (XU == this.query.length - 1 ? cU = {
            from: this.matches[yU + 1],
            to: zU
          } : (this.matches[yU]++, QU = !0)), QU || (this.matches.splice(yU, 2), yU -= 2)
        }
        return this.query.charCodeAt(0) == UU && (1 == this.query.length ? cU = {
          from: XU,
          to: zU
        } : this.matches.push(1, XU)), cU && this.test && !this.test(cU.from, cU.to, this.buffer, this.bufferStart) && (cU = null), cU
      }
    }
    "undefined" != typeof Symbol && (FU.prototype[Symbol.iterator] = function() {
      return this
    });
    const oU = {
        from: -1,
        to: -1,
        match: /.*/.exec("")
      },
      DU = "gm" + (null == /x/.unicode ? "" : "u");
    class EU {
      constructor(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : UU.length;
        if (this.text = UU, this.to = yU, this.curLine = "", this.done = !1, this.value = oU, /\\[sWDnr]|\n|\r|\[\^/.test(XU)) return new IU(UU, XU, zU, cU, yU);
        this.re = new RegExp(XU, DU + ((null === zU || void 0 === zU ? void 0 : zU.ignoreCase) ? "i" : "")), this.test = null === zU || void 0 === zU ? void 0 : zU.test, this.iter = UU.iter();
        let QU = UU.lineAt(cU);
        this.curLineStart = QU.from, this.matchPos = pU(UU, cU), this.getLine(this.curLineStart)
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
          let XU = this.matchPos <= this.to && this.re.exec(this.curLine);
          if (XU) {
            let zU = this.curLineStart + XU.index,
              cU = zU + XU[0].length;
            if (this.matchPos = pU(this.text, cU + (zU == cU ? 1 : 0)), zU == this.curLineStart + this.curLine.length && this.nextLine(), (zU < cU || zU > this.value.to) && (!this.test || this.test(zU, cU, XU))) return this.value = {
              from: zU,
              to: cU,
              match: XU
            }, this;
            UU = this.matchPos - this.curLineStart
          } else {
            if (!(this.curLineStart + this.curLine.length < this.to)) return this.done = !0, this;
            this.nextLine(), UU = 0
          }
        }
      }
    }
    const YU = new WeakMap;
    class NU {
      constructor(UU, XU) {
        this.from = UU, this.text = XU
      }
      get to() {
        return this.from + this.text.length
      }
      static get(UU, XU, zU) {
        let cU = YU.get(UU);
        if (!cU || cU.from >= zU || cU.to <= XU) {
          let cU = new NU(XU, UU.sliceString(XU, zU));
          return YU.set(UU, cU), cU
        }
        if (cU.from == XU && cU.to == zU) return cU;
        let {
          text: yU,
          from: QU
        } = cU;
        return QU > XU && (yU = UU.sliceString(XU, QU) + yU, QU = XU), cU.to < zU && (yU += UU.sliceString(cU.to, zU)), YU.set(UU, new NU(QU, yU)), new NU(XU, yU.slice(XU - QU, zU - QU))
      }
    }
    class IU {
      constructor(UU, XU, zU, cU, yU) {
        this.text = UU, this.to = yU, this.done = !1, this.value = oU, this.matchPos = pU(UU, cU), this.re = new RegExp(XU, DU + ((null === zU || void 0 === zU ? void 0 : zU.ignoreCase) ? "i" : "")), this.test = null === zU || void 0 === zU ? void 0 : zU.test, this.flat = NU.get(UU, cU, this.chunkEnd(cU + 5e3))
      }
      chunkEnd(UU) {
        return UU >= this.to ? this.to : this.text.lineAt(UU).to
      }
      next() {
        for (;;) {
          let UU = this.re.lastIndex = this.matchPos - this.flat.from,
            XU = this.re.exec(this.flat.text);
          if (XU && !XU[0] && XU.index == UU && (this.re.lastIndex = UU + 1, XU = this.re.exec(this.flat.text)), XU) {
            let UU = this.flat.from + XU.index,
              zU = UU + XU[0].length;
            if ((this.flat.to >= this.to || XU.index + XU[0].length <= this.flat.text.length - 10) && (!this.test || this.test(UU, zU, XU))) return this.value = {
              from: UU,
              to: zU,
              match: XU
            }, this.matchPos = pU(this.text, zU + (UU == zU ? 1 : 0)), this
          }
          if (this.flat.to == this.to) return this.done = !0, this;
          this.flat = NU.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + 2 * this.flat.text.length))
        }
      }
    }

    function pU(UU, XU) {
      if (XU >= UU.length) return XU;
      let zU, cU = UU.lineAt(XU);
      for (; XU < cU.to && (zU = cU.text.charCodeAt(XU - cU.from)) >= 56320 && zU < 57344;) XU++;
      return XU
    }
    "undefined" != typeof Symbol && (EU.prototype[Symbol.iterator] = IU.prototype[Symbol.iterator] = function() {
      return this
    });
    const aU = {
        highlightWordAroundCursor: !1,
        minSelectionLength: 1,
        maxMatches: 100,
        wholeWords: !1
      },
      tU = yU.r.define({
        combine: UU => (0, yU.V)(UU, aU, {
          highlightWordAroundCursor: (UU, XU) => UU || XU,
          minSelectionLength: Math.min,
          maxMatches: Math.min
        })
      });

    function gU(UU) {
      let XU = [RU, ZU];
      return UU && XU.push(tU.of(UU)), XU
    }
    const kU = cU.c.mark({
        class: "cm-selectionMatch"
      }),
      GU = cU.c.mark({
        class: "cm-selectionMatch cm-selectionMatch-main"
      });

    function BU(UU, XU, zU, cU) {
      return (0 == zU || UU(XU.sliceDoc(zU - 1, zU)) != yU.j.Word) && (cU == XU.doc.length || UU(XU.sliceDoc(cU, cU + 1)) != yU.j.Word)
    }
    const ZU = cU.n.fromClass(class {
        constructor(UU) {
          this.hy = this.getDeco(UU)
        }
        update(UU) {
          (UU.selectionSet || UU.docChanged || UU.viewportChanged) && (this.hy = this.getDeco(UU.view))
        }
        getDeco(UU) {
          let XU = UU.state.facet(tU),
            {
              state: zU
            } = UU,
            QU = zU.selection;
          if (QU.Qt.length > 1) return cU.c.none;
          let AU, oU = QU.main,
            DU = null;
          if (oU.empty) {
            if (!XU.highlightWordAroundCursor) return cU.c.none;
            let UU = zU.wordAt(oU.head);
            if (!UU) return cU.c.none;
            DU = zU.charCategorizer(oU.head), AU = zU.sliceDoc(UU.from, UU.to)
          } else {
            let UU = oU.to - oU.from;
            if (UU < XU.minSelectionLength || UU > 200) return cU.c.none;
            if (XU.wholeWords) {
              if (AU = zU.sliceDoc(oU.from, oU.to), DU = zU.charCategorizer(oU.head), !BU(DU, zU, oU.from, oU.to) || ! function(UU, XU, zU, cU) {
                  return UU(XU.sliceDoc(zU, zU + 1)) == yU.j.Word && UU(XU.sliceDoc(cU - 1, cU)) == yU.j.Word
                }(DU, zU, oU.from, oU.to)) return cU.c.none
            } else if (AU = zU.sliceDoc(oU.from, oU.to), !AU) return cU.c.none
          }
          let EU = [];
          for (let yU of UU.rUU) {
            let UU = new FU(zU.doc, AU, yU.from, yU.to);
            for (; !UU.next().done;) {
              let {
                from: yU,
                to: QU
              } = UU.value;
              if ((!DU || BU(DU, zU, yU, QU)) && (oU.empty && yU <= oU.from && QU >= oU.to ? EU.push(GU.range(yU, QU)) : (yU >= oU.to || QU <= oU.from) && EU.push(kU.range(yU, QU)), EU.length > XU.maxMatches)) return cU.c.none
            }
          }
          return cU.c.set(EU)
        }
      }, {
        hy: UU => UU.hy
      }),
      RU = cU.h.baseTheme({
        ".cm-selectionMatch": {
          backgroundColor: "#99ff7780"
        },
        ".cm-searchMatch .cm-selectionMatch": {
          backgroundColor: "transparent"
        }
      });
    const PU = yU.r.define({
      combine: UU => (0, yU.V)(UU, {
        top: !1,
        caseSensitive: !1,
        literal: !1,
        regexp: !1,
        wholeWord: !1,
        createPanel: UU => new UX(UU),
        scrollToMatch: UU => cU.h.scrollIntoView(UU)
      })
    });
    class WU {
      constructor(UU) {
        this.search = UU.search, this.caseSensitive = !!UU.caseSensitive, this.literal = !!UU.literal, this.regexp = !!UU.regexp, this.replace = UU.replace || "", this.valid = !!this.search && (!this.regexp || function(UU) {
          try {
            return new RegExp(UU, DU), !0
          } catch (XU) {
            return !1
          }
        }(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!UU.wholeWord, this.test = UU.test
      }
      unquote(UU) {
        return this.literal ? UU : UU.replace(/\\([nrt\\])/g, ((UU, XU) => "n" == XU ? "\n" : "r" == XU ? "\r" : "t" == XU ? "\t" : "\\"))
      }
      eq(UU) {
        return this.search == UU.search && this.replace == UU.replace && this.caseSensitive == UU.caseSensitive && this.regexp == UU.regexp && this.wholeWord == UU.wholeWord && this.test == UU.test
      }
      create() {
        return this.regexp ? new OU(this) : new eU(this)
      }
      getCursor(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zU = arguments.length > 2 ? arguments[2] : void 0,
          cU = UU.doc ? UU : yU.n.create({
            doc: UU
          });
        return null == zU && (zU = cU.doc.length), this.regexp ? CU(this, cU, XU, zU) : LU(this, cU, XU, zU)
      }
    }
    class dU {
      constructor(UU) {
        this.spec = UU
      }
    }

    function LU(UU, XU, zU, cU) {
      let QU;
      var AU, oU;
      return UU.wholeWord && (AU = XU.doc, oU = XU.charCategorizer(XU.selection.main.head), QU = (UU, XU, zU, cU) => ((cU > UU || cU + zU.length < XU) && (cU = Math.max(0, UU - 2), zU = AU.sliceString(cU, Math.min(AU.length, XU + 2))), (oU(wU(zU, UU - cU)) != yU.j.Word || oU(qU(zU, UU - cU)) != yU.j.Word) && (oU(qU(zU, XU - cU)) != yU.j.Word || oU(wU(zU, XU - cU)) != yU.j.Word))), UU.test && (QU = function(UU, XU, zU) {
        return (cU, yU, QU, AU) => {
          if (zU && !zU(cU, yU, QU, AU)) return !1;
          let FU = cU >= AU && yU <= AU + QU.length ? QU.slice(cU - AU, yU - AU) : XU.doc.sliceString(cU, yU);
          return UU(FU, XU, cU, yU)
        }
      }(UU.test, XU, QU)), new FU(XU.doc, UU.unquoted, zU, cU, UU.caseSensitive ? void 0 : UU => UU.toLowerCase(), QU)
    }
    class eU extends dU {
      constructor(UU) {
        super(UU)
      }
      nextMatch(UU, XU, zU) {
        let cU = LU(this.spec, UU, zU, UU.doc.length).nextOverlapping();
        if (cU.done) {
          let zU = Math.min(UU.doc.length, XU + this.spec.unquoted.length);
          cU = LU(this.spec, UU, 0, zU).nextOverlapping()
        }
        return cU.done || cU.value.from == XU && cU.value.to == zU ? null : cU.value
      }
      prevMatchInRange(UU, XU, zU) {
        for (let cU = zU;;) {
          let zU = Math.max(XU, cU - 1e4 - this.spec.unquoted.length),
            yU = LU(this.spec, UU, zU, cU),
            QU = null;
          for (; !yU.nextOverlapping().done;) QU = yU.value;
          if (QU) return QU;
          if (zU == XU) return null;
          cU -= 1e4
        }
      }
      prevMatch(UU, XU, zU) {
        let cU = this.prevMatchInRange(UU, 0, XU);
        return cU || (cU = this.prevMatchInRange(UU, Math.max(0, zU - this.spec.unquoted.length), UU.doc.length)), !cU || cU.from == XU && cU.to == zU ? null : cU
      }
      getReplacement(UU) {
        return this.spec.unquote(this.spec.replace)
      }
      matchAll(UU, XU) {
        let zU = LU(this.spec, UU, 0, UU.doc.length),
          cU = [];
        for (; !zU.next().done;) {
          if (cU.length >= XU) return null;
          cU.push(zU.value)
        }
        return cU
      }
      highlight(UU, XU, zU, cU) {
        let yU = LU(this.spec, UU, Math.max(0, XU - this.spec.unquoted.length), Math.min(zU + this.spec.unquoted.length, UU.doc.length));
        for (; !yU.next().done;) cU(yU.value.from, yU.value.to)
      }
    }

    function CU(UU, XU, zU, cU) {
      let QU;
      var AU;
      return UU.wholeWord && (AU = XU.charCategorizer(XU.selection.main.head), QU = (UU, XU, zU) => !zU[0].length || (AU(wU(zU.input, zU.index)) != yU.j.Word || AU(qU(zU.input, zU.index)) != yU.j.Word) && (AU(qU(zU.input, zU.index + zU[0].length)) != yU.j.Word || AU(wU(zU.input, zU.index + zU[0].length)) != yU.j.Word)), UU.test && (QU = function(UU, XU, zU) {
        return (cU, yU, QU) => (!zU || zU(cU, yU, QU)) && UU(QU[0], XU, cU, yU)
      }(UU.test, XU, QU)), new EU(XU.doc, UU.search, {
        ignoreCase: !UU.caseSensitive,
        test: QU
      }, zU, cU)
    }

    function wU(UU, XU) {
      return UU.slice((0, yU._)(UU, XU, !1), XU)
    }

    function qU(UU, XU) {
      return UU.slice(XU, (0, yU._)(UU, XU))
    }
    class OU extends dU {
      nextMatch(UU, XU, zU) {
        let cU = CU(this.spec, UU, zU, UU.doc.length).next();
        return cU.done && (cU = CU(this.spec, UU, 0, XU).next()), cU.done ? null : cU.value
      }
      prevMatchInRange(UU, XU, zU) {
        for (let cU = 1;; cU++) {
          let yU = Math.max(XU, zU - 1e4 * cU),
            QU = CU(this.spec, UU, yU, zU),
            AU = null;
          for (; !QU.next().done;) AU = QU.value;
          if (AU && (yU == XU || AU.from > yU + 10)) return AU;
          if (yU == XU) return null
        }
      }
      prevMatch(UU, XU, zU) {
        return this.prevMatchInRange(UU, 0, XU) || this.prevMatchInRange(UU, zU, UU.doc.length)
      }
      getReplacement(UU) {
        return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, ((XU, zU) => {
          if ("&" == zU) return UU.match[0];
          if ("$" == zU) return "$";
          for (let cU = zU.length; cU > 0; cU--) {
            let XU = +zU.slice(0, cU);
            if (XU > 0 && XU < UU.match.length) return UU.match[XU] + zU.slice(cU)
          }
          return XU
        }))
      }
      matchAll(UU, XU) {
        let zU = CU(this.spec, UU, 0, UU.doc.length),
          cU = [];
        for (; !zU.next().done;) {
          if (cU.length >= XU) return null;
          cU.push(zU.value)
        }
        return cU
      }
      highlight(UU, XU, zU, cU) {
        let yU = CU(this.spec, UU, Math.max(0, XU - 250), Math.min(zU + 250, UU.doc.length));
        for (; !yU.next().done;) cU(yU.value.from, yU.value.to)
      }
    }
    const SU = yU.H.define(),
      rU = yU.H.define(),
      uU = yU.L.define({
        create: UU => new fU(JU(UU).create(), null),
        update(UU, XU) {
          for (let zU of XU.effects) zU.is(SU) ? UU = new fU(zU.value.create(), UU.panel) : zU.is(rU) && (UU = new fU(UU.query, zU.value ? xU : null));
          return UU
        },
        provide: UU => cU.cb.from(UU, (UU => UU.panel))
      });
    class fU {
      constructor(UU, XU) {
        this.query = UU, this.panel = XU
      }
    }
    const iU = cU.c.mark({
        class: "cm-searchMatch"
      }),
      HU = cU.c.mark({
        class: "cm-searchMatch cm-searchMatch-selected"
      }),
      MU = cU.n.fromClass(class {
        constructor(UU) {
          this.view = UU, this.hy = this.highlight(UU.state.field(uU))
        }
        update(UU) {
          let XU = UU.state.field(uU);
          (XU != UU.startState.field(uU) || UU.docChanged || UU.selectionSet || UU.viewportChanged) && (this.hy = this.highlight(XU))
        }
        highlight(UU) {
          let {
            query: XU,
            panel: zU
          } = UU;
          if (!zU || !XU.spec.valid) return cU.c.none;
          let {
            view: QU
          } = this, AU = new yU.z;
          for (let cU = 0, yU = QU.rUU, FU = yU.length; cU < FU; cU++) {
            let {
              from: UU,
              to: zU
            } = yU[cU];
            for (; cU < FU - 1 && zU > yU[cU + 1].from - 500;) zU = yU[++cU].to;
            XU.highlight(QU.state, UU, zU, ((UU, XU) => {
              let zU = QU.state.selection.Qt.some((zU => zU.from == UU && zU.to == XU));
              AU.add(UU, XU, zU ? HU : iU)
            }))
          }
          return AU.finish()
        }
      }, {
        hy: UU => UU.hy
      });

    function vU(UU) {
      return XU => {
        let zU = XU.state.field(uU, !1);
        return zU && zU.query.spec.valid ? UU(XU, zU) : bU(XU)
      }
    }
    const VU = vU(((UU, XU) => {
        let {
          query: zU
        } = XU, {
          to: cU
        } = UU.state.selection.main, QU = zU.nextMatch(UU.state, cU, cU);
        if (!QU) return !1;
        let AU = yU.k.single(QU.from, QU.to),
          FU = UU.state.facet(PU);
        return UU.dispatch({
          selection: AU,
          effects: [yX(UU, QU), FU.scrollToMatch(AU.main, UU)],
          userEvent: "select.search"
        }), KU(UU), !0
      })),
      sU = vU(((UU, XU) => {
        let {
          query: zU
        } = XU, {
          state: cU
        } = UU, {
          from: QU
        } = cU.selection.main, AU = zU.prevMatch(cU, QU, QU);
        if (!AU) return !1;
        let FU = yU.k.single(AU.from, AU.to),
          oU = UU.state.facet(PU);
        return UU.dispatch({
          selection: FU,
          effects: [yX(UU, AU), oU.scrollToMatch(FU.main, UU)],
          userEvent: "select.search"
        }), KU(UU), !0
      })),
      nU = vU(((UU, XU) => {
        let {
          query: zU
        } = XU, cU = zU.matchAll(UU.state, 1e3);
        return !(!cU || !cU.length) && (UU.dispatch({
          selection: yU.k.create(cU.map((UU => yU.k.range(UU.from, UU.to)))),
          userEvent: "select.search.matches"
        }), !0)
      })),
      mU = vU(((UU, XU) => {
        let {
          query: zU
        } = XU, {
          state: QU
        } = UU, {
          from: AU,
          to: FU
        } = QU.selection.main;
        if (QU.readOnly) return !1;
        let oU = zU.nextMatch(QU, AU, AU);
        if (!oU) return !1;
        let DU, EU, YU = oU,
          NU = [],
          IU = [];
        YU.from == AU && YU.to == FU && (EU = QU.toText(zU.getReplacement(YU)), NU.push({
          from: YU.from,
          to: YU.to,
          insert: EU
        }), YU = zU.nextMatch(QU, YU.from, YU.to), IU.push(cU.h.announce.of(QU.phrase("replaced match on line $", QU.doc.lineAt(AU).number) + ".")));
        let pU = UU.state.changes(NU);
        return YU && (DU = yU.k.single(YU.from, YU.to).map(pU), IU.push(yX(UU, YU)), IU.push(QU.facet(PU).scrollToMatch(DU.main, UU))), UU.dispatch({
          changes: pU,
          selection: DU,
          effects: IU,
          userEvent: "input.replace"
        }), !0
      })),
      lU = vU(((UU, XU) => {
        let {
          query: zU
        } = XU;
        if (UU.state.readOnly) return !1;
        let yU = zU.matchAll(UU.state, 1e9).map((UU => {
          let {
            from: XU,
            to: cU
          } = UU;
          return {
            from: XU,
            to: cU,
            insert: zU.getReplacement(UU)
          }
        }));
        if (!yU.length) return !1;
        let QU = UU.state.phrase("replaced $ matches", yU.length) + ".";
        return UU.dispatch({
          changes: yU,
          effects: cU.h.announce.of(QU),
          userEvent: "input.replace.all"
        }), !0
      }));

    function xU(UU) {
      return UU.state.facet(PU).createPanel(UU)
    }

    function JU(UU, XU) {
      var zU, cU, yU, QU, AU;
      let FU = UU.selection.main,
        oU = FU.empty || FU.to > FU.from + 100 ? "" : UU.sliceDoc(FU.from, FU.to);
      if (XU && !oU) return XU;
      let DU = UU.facet(PU);
      return new WU({
        search: (null !== (zU = null === XU || void 0 === XU ? void 0 : XU.literal) && void 0 !== zU ? zU : DU.literal) ? oU : oU.replace(/\n/g, "\\n"),
        caseSensitive: null !== (cU = null === XU || void 0 === XU ? void 0 : XU.caseSensitive) && void 0 !== cU ? cU : DU.caseSensitive,
        literal: null !== (yU = null === XU || void 0 === XU ? void 0 : XU.literal) && void 0 !== yU ? yU : DU.literal,
        regexp: null !== (QU = null === XU || void 0 === XU ? void 0 : XU.regexp) && void 0 !== QU ? QU : DU.regexp,
        wholeWord: null !== (AU = null === XU || void 0 === XU ? void 0 : XU.wholeWord) && void 0 !== AU ? AU : DU.wholeWord
      })
    }

    function jU(UU) {
      let XU = (0, cU.x)(UU, xU);
      return XU && XU.dom.querySelector("[main-field]")
    }

    function KU(UU) {
      let XU = jU(UU);
      XU && XU == UU.root.activeElement && XU.select()
    }
    const bU = UU => {
        let XU = UU.state.field(uU, !1);
        if (XU && XU.panel) {
          let zU = jU(UU);
          if (zU && zU != UU.root.activeElement) {
            let cU = JU(UU.state, XU.query.spec);
            cU.valid && UU.dispatch({
              effects: SU.of(cU)
            }), zU.focus(), zU.select()
          }
        } else UU.dispatch({
          effects: [rU.of(!0), XU ? SU.of(JU(UU.state, XU.query.spec)) : yU.H.appendConfig.of(AX)]
        });
        return !0
      },
      TU = UU => {
        let XU = UU.state.field(uU, !1);
        if (!XU || !XU.panel) return !1;
        let zU = (0, cU.x)(UU, xU);
        return zU && zU.dom.contains(UU.root.activeElement) && UU.focus(), UU.dispatch({
          effects: rU.of(!1)
        }), !0
      },
      hU = [{
        key: "Mod-f",
        run: bU,
        scope: "editor search-panel"
      }, {
        key: "F3",
        run: VU,
        shift: sU,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Mod-g",
        run: VU,
        shift: sU,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Escape",
        run: TU,
        scope: "editor search-panel"
      }, {
        key: "Mod-Shift-l",
        run: UU => {
          let {
            state: XU,
            dispatch: zU
          } = UU, cU = XU.selection;
          if (cU.Qt.length > 1 || cU.main.empty) return !1;
          let {
            from: QU,
            to: AU
          } = cU.main, oU = [], DU = 0;
          for (let EU = new FU(XU.doc, XU.sliceDoc(QU, AU)); !EU.next().done;) {
            if (oU.length > 1e3) return !1;
            EU.value.from == QU && (DU = oU.length), oU.push(yU.k.range(EU.value.from, EU.value.to))
          }
          return zU(XU.update({
            selection: yU.k.create(oU, DU),
            userEvent: "select.search.matches"
          })), !0
        }
      }, {
        key: "Mod-Alt-g",
        run: UU => {
          let {
            state: XU
          } = UU, zU = String(XU.doc.lineAt(UU.state.selection.main.head).number), {
            close: QU,
            result: AU
          } = (0, cU.bb)(UU, {
            label: XU.phrase("Go to line"),
            input: {
              type: "text",
              name: "line",
              value: zU
            },
            focus: !0,
            submitLabel: XU.phrase("go")
          });
          return AU.then((zU => {
            let AU = zU && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(zU.elements.line.value);
            if (!AU) return void UU.dispatch({
              effects: QU
            });
            let FU = XU.doc.lineAt(XU.selection.main.head),
              [, oU, DU, EU, YU] = AU,
              NU = EU ? +EU.slice(1) : 0,
              IU = DU ? +DU : FU.number;
            if (DU && YU) {
              let UU = IU / 100;
              oU && (UU = UU * ("-" == oU ? -1 : 1) + FU.number / XU.doc.lines), IU = Math.round(XU.doc.lines * UU)
            } else DU && oU && (IU = IU * ("-" == oU ? -1 : 1) + FU.number);
            let pU = XU.doc.line(Math.max(1, Math.min(XU.doc.lines, IU))),
              aU = yU.k.cursor(pU.from + Math.max(0, Math.min(NU, pU.length)));
            UU.dispatch({
              effects: [QU, cU.h.scrollIntoView(aU.from, {
                y: "center"
              })],
              selection: aU
            })
          })), !0
        }
      }, {
        key: "Mod-d",
        run: UU => {
          let {
            state: XU,
            dispatch: zU
          } = UU, {
            Qt: QU
          } = XU.selection;
          if (QU.some((UU => UU.from === UU.to))) return (UU => {
            let {
              state: XU,
              dispatch: zU
            } = UU, {
              selection: cU
            } = XU, QU = yU.k.create(cU.Qt.map((UU => XU.wordAt(UU.head) || yU.k.cursor(UU.head))), cU.mainIndex);
            return !QU.eq(cU) && (zU(XU.update({
              selection: QU
            })), !0)
          })({
            state: XU,
            dispatch: zU
          });
          let AU = XU.sliceDoc(QU[0].from, QU[0].to);
          if (XU.selection.Qt.some((UU => XU.sliceDoc(UU.from, UU.to) != AU))) return !1;
          let oU = function(UU, XU) {
            let {
              main: zU,
              Qt: cU
            } = UU.selection, yU = UU.wordAt(zU.head), QU = yU && yU.from == zU.from && yU.to == zU.to;
            for (let AU = !1, oU = new FU(UU.doc, XU, cU[cU.length - 1].to);;) {
              if (oU.next(), !oU.done) {
                if (AU && cU.some((UU => UU.from == oU.value.from))) continue;
                if (QU) {
                  let XU = UU.wordAt(oU.value.from);
                  if (!XU || XU.from != oU.value.from || XU.to != oU.value.to) continue
                }
                return oU.value
              }
              if (AU) return null;
              oU = new FU(UU.doc, XU, 0, Math.max(0, cU[cU.length - 1].from - 1)), AU = !0
            }
          }(XU, AU);
          return !!oU && (zU(XU.update({
            selection: XU.selection.addRange(yU.k.range(oU.from, oU.to), !1),
            effects: cU.h.scrollIntoView(oU.to)
          })), !0)
        },
        preventDefault: !0
      }];
    class UX {
      constructor(UU) {
        this.view = UU;
        let XU = this.query = UU.state.field(uU).query.spec;

        function zU(UU, XU, zU) {
          return (0, QU.b)("button", {
            class: "cm-button",
            name: UU,
            onclick: XU,
            type: "button"
          }, zU)
        }
        this.commit = this.commit.bind(this), this.searchField = (0, QU.b)("input", {
          value: XU.search,
          placeholder: XX(UU, "Find"),
          "aria-label": XX(UU, "Find"),
          class: "cm-textfield",
          name: "search",
          form: "",
          "main-field": "true",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.replaceField = (0, QU.b)("input", {
          value: XU.replace,
          placeholder: XX(UU, "Replace"),
          "aria-label": XX(UU, "Replace"),
          class: "cm-textfield",
          name: "replace",
          form: "",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.caseField = (0, QU.b)("input", {
          type: "checkbox",
          name: "case",
          form: "",
          checked: XU.caseSensitive,
          onchange: this.commit
        }), this.reField = (0, QU.b)("input", {
          type: "checkbox",
          name: "re",
          form: "",
          checked: XU.regexp,
          onchange: this.commit
        }), this.wordField = (0, QU.b)("input", {
          type: "checkbox",
          name: "word",
          form: "",
          checked: XU.wholeWord,
          onchange: this.commit
        }), this.dom = (0, QU.b)("div", {
          onkeydown: UU => this.keydown(UU),
          class: "cm-search"
        }, [this.searchField, zU("next", (() => VU(UU)), [XX(UU, "next")]), zU("prev", (() => sU(UU)), [XX(UU, "previous")]), zU("select", (() => nU(UU)), [XX(UU, "all")]), (0, QU.b)("label", null, [this.caseField, XX(UU, "match case")]), (0, QU.b)("label", null, [this.reField, XX(UU, "regexp")]), (0, QU.b)("label", null, [this.wordField, XX(UU, "by word")]), ...UU.state.readOnly ? [] : [(0, QU.b)("br"), this.replaceField, zU("replace", (() => mU(UU)), [XX(UU, "replace")]), zU("replaceAll", (() => lU(UU)), [XX(UU, "replace all")])], (0, QU.b)("button", {
          name: "close",
          onclick: () => TU(UU),
          "aria-label": XX(UU, "close"),
          type: "button"
        }, ["\xd7"])])
      }
      commit() {
        let UU = new WU({
          search: this.searchField.value,
          caseSensitive: this.caseField.checked,
          regexp: this.reField.checked,
          wholeWord: this.wordField.checked,
          replace: this.replaceField.value
        });
        UU.eq(this.query) || (this.query = UU, this.view.dispatch({
          effects: SU.of(UU)
        }))
      }
      keydown(UU) {
        (0, cU._)(this.view, UU, "search-panel") ? UU.preventDefault(): 13 == UU.keyCode && UU.target == this.searchField ? (UU.preventDefault(), (UU.shiftKey ? sU : VU)(this.view)) : 13 == UU.keyCode && UU.target == this.replaceField && (UU.preventDefault(), mU(this.view))
      }
      update(UU) {
        for (let XU of UU.transactions)
          for (let UU of XU.effects) UU.is(SU) && !UU.value.eq(this.query) && this.setQuery(UU.value)
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
        return this.view.state.facet(PU).top
      }
    }

    function XX(UU, XU) {
      return UU.state.phrase(XU)
    }
    const zX = 30,
      cX = /[\s\.,:;?!]/;

    function yX(UU, XU) {
      let {
        from: zU,
        to: yU
      } = XU, QU = UU.state.doc.lineAt(zU), AU = UU.state.doc.lineAt(yU).to, FU = Math.max(QU.from, zU - zX), oU = Math.min(AU, yU + zX), DU = UU.state.sliceDoc(FU, oU);
      if (FU != QU.from)
        for (let cU = 0; cU < zX; cU++)
          if (!cX.test(DU[cU + 1]) && cX.test(DU[cU])) {
            DU = DU.slice(cU);
            break
          } if (oU != AU)
        for (let cU = DU.length - 1; cU > DU.length - zX; cU--)
          if (!cX.test(DU[cU - 1]) && cX.test(DU[cU])) {
            DU = DU.slice(0, cU);
            break
          } return cU.h.announce.of(`${UU.state.phrase("current match")}. ${DU} ${UU.state.phrase("on line")} ${QU.number}.`)
    }
    const QX = cU.h.baseTheme({
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
      AX = [uU, yU.w.low(MU), QX]
  },
  44014: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => OU,
      e: () => DX,
      h: () => dy,
      j: () => QA,
      n: () => KX,
      o: () => wU,
      p: () => CQ,
      r: () => Ky,
      v: () => QQ,
      x: () => KQ,
      B: () => xQ,
      E: () => EA,
      K: () => gQ,
      I: () => wA,
      M: () => IQ,
      P: () => lQ,
      Q: () => ry,
      R: () => dA,
      V: () => lX,
      X: () => ZQ,
      Y: () => dQ,
      _: () => iy,
      bb: () => XA,
      cb: () => UA,
      gb: () => MQ
    });
    for (var cU = zU(44009), yU = zU(44019), QU = {
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
      }, AU = {
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
      }, FU = "undefined" != typeof navigator && /Mac/.test(navigator.platform), oU = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), DU = 0; DU < 10; DU++) QU[48 + DU] = QU[96 + DU] = String(DU);
    for (DU = 1; DU <= 24; DU++) QU[DU + 111] = "F" + DU;
    for (DU = 65; DU <= 90; DU++) QU[DU] = String.fromCharCode(DU + 32), AU[DU] = String.fromCharCode(DU);
    for (var EU in QU) AU.hasOwnProperty(EU) || (AU[EU] = QU[EU]);
    var YU = zU(44025);
    let NU = "undefined" != typeof navigator ? navigator : {
        userAgent: "",
        vendor: "",
        platform: ""
      },
      IU = "undefined" != typeof document ? document : {
        documentElement: {
          style: {}
        }
      };
    const pU = /Edge\/(\d+)/.exec(NU.userAgent),
      aU = /MSIE \d/.test(NU.userAgent),
      tU = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(NU.userAgent),
      gU = !!(aU || tU || pU),
      kU = !gU && /gecko\/(\d+)/i.test(NU.userAgent),
      GU = !gU && /Chrome\/(\d+)/.exec(NU.userAgent),
      BU = "webkitFontSmoothing" in IU.documentElement.style,
      ZU = !gU && /Apple Computer/.test(NU.vendor),
      RU = ZU && (/Mobile\/\w+/.test(NU.userAgent) || NU.maxTouchPoints > 2);
    var PU = {
      mac: RU || /Mac/.test(NU.platform),
      windows: /Win/.test(NU.platform),
      linux: /Linux|X11/.test(NU.platform),
      ie: gU,
      ie_version: aU ? IU.documentMode || 6 : tU ? +tU[1] : pU ? +pU[1] : 0,
      gecko: kU,
      gecko_version: kU ? +(/Firefox\/(\d+)/.exec(NU.userAgent) || [0, 0])[1] : 0,
      chrome: !!GU,
      chrome_version: GU ? +GU[1] : 0,
      ios: RU,
      android: /Android\b/.test(NU.userAgent),
      webkit: BU,
      webkit_version: BU ? +(/\bAppleWebKit\/(\d+)/.exec(NU.userAgent) || [0, 0])[1] : 0,
      safari: ZU,
      safari_version: ZU ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(NU.userAgent) || [0, 0])[1] : 0,
      tabSize: null != IU.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size"
    };

    function WU(UU, XU) {
      for (let zU in UU) "class" == zU && XU.class ? XU.class += " " + UU.class : "style" == zU && XU.style ? XU.style += ";" + UU.style : XU[zU] = UU[zU];
      return XU
    }
    const dU = Object.create(null);

    function LU(UU, XU, zU) {
      if (UU == XU) return !0;
      UU || (UU = dU), XU || (XU = dU);
      let cU = Object.keys(UU),
        yU = Object.keys(XU);
      if (cU.length - (zU && cU.indexOf(zU) > -1 ? 1 : 0) != yU.length - (zU && yU.indexOf(zU) > -1 ? 1 : 0)) return !1;
      for (let QU of cU)
        if (QU != zU && (-1 == yU.indexOf(QU) || UU[QU] !== XU[QU])) return !1;
      return !0
    }

    function eU(UU, XU, zU) {
      let cU = !1;
      if (XU)
        for (let yU in XU) zU && yU in zU || (cU = !0, "style" == yU ? UU.style.cssText = "" : UU.removeAttribute(yU));
      if (zU)
        for (let yU in zU) XU && XU[yU] == zU[yU] || (cU = !0, "style" == yU ? UU.style.cssText = zU[yU] : UU.setAttribute(yU, zU[yU]));
      return cU
    }

    function CU(UU) {
      let XU = Object.create(null);
      for (let zU = 0; zU < UU.attributes.length; zU++) {
        let cU = UU.attributes[zU];
        XU[cU.name] = cU.value
      }
      return XU
    }
    class wU {
      eq(UU) {
        return !1
      }
      updateDOM(UU, XU, zU) {
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
      coordsAt(UU, XU, zU) {
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
    var qU = function(UU) {
      return UU[UU.Text = 0] = "Text", UU[UU.WidgetBefore = 1] = "WidgetBefore", UU[UU.WidgetAfter = 2] = "WidgetAfter", UU[UU.WidgetRange = 3] = "WidgetRange", UU
    }(qU || (qU = {}));
    class OU extends cU.E {
      constructor(UU, XU, zU, cU) {
        super(), this.startSide = UU, this.endSide = XU, this.widget = zU, this.spec = cU
      }
      get heightRelevant() {
        return !1
      }
      static mark(UU) {
        return new SU(UU)
      }
      static widget(UU) {
        let XU = Math.max(-1e4, Math.min(1e4, UU.side || 0)),
          zU = !!UU.block;
        return XU += zU && !UU.inlineOrder ? XU > 0 ? 3e8 : -4e8 : XU > 0 ? 1e8 : -1e8, new uU(UU, XU, XU, zU, UU.widget || null, !1)
      }
      static replace(UU) {
        let XU, zU, cU = !!UU.block;
        if (UU.isBlockGap) XU = -5e8, zU = 4e8;
        else {
          let {
            start: yU,
            end: QU
          } = fU(UU, cU);
          XU = (yU ? cU ? -3e8 : -1 : 5e8) - 1, zU = 1 + (QU ? cU ? 2e8 : 1 : -6e8)
        }
        return new uU(UU, XU, zU, cU, UU.widget || null, !0)
      }
      static line(UU) {
        return new rU(UU)
      }
      static set(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return cU.D.of(UU, XU)
      }
      hasHeight() {
        return !!this.widget && this.widget.estimatedHeight > -1
      }
    }
    OU.none = cU.D.empty;
    class SU extends OU {
      constructor(UU) {
        let {
          start: XU,
          end: zU
        } = fU(UU);
        super(XU ? -1 : 5e8, zU ? 1 : -6e8, null, UU), this.tagName = UU.tagName || "span", this.attrs = UU.class && UU.attributes ? WU(UU.attributes, {
          class: UU.class
        }) : UU.class ? {
          class: UU.class
        } : UU.attributes || dU
      }
      eq(UU) {
        return this == UU || UU instanceof SU && this.tagName == UU.tagName && LU(this.attrs, UU.attrs)
      }
      range(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UU;
        if (UU >= XU) throw new RangeError("Mark decorations may not be empty");
        return super.range(UU, XU)
      }
    }
    SU.prototype.point = !1;
    class rU extends OU {
      constructor(UU) {
        super(-2e8, -2e8, null, UU)
      }
      eq(UU) {
        return UU instanceof rU && this.spec.class == UU.spec.class && LU(this.spec.attributes, UU.spec.attributes)
      }
      range(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UU;
        if (XU != UU) throw new RangeError("Line decoration ranges must be zero-length");
        return super.range(UU, XU)
      }
    }
    rU.prototype.mapMode = cU.t.TrackBefore, rU.prototype.point = !0;
    class uU extends OU {
      constructor(UU, XU, zU, yU, QU, AU) {
        super(XU, zU, QU, UU), this.block = yU, this.isReplace = AU, this.mapMode = yU ? XU <= 0 ? cU.t.TrackBefore : cU.t.TrackAfter : cU.t.TrackDel
      }
      get type() {
        return this.startSide != this.endSide ? qU.WidgetRange : this.startSide <= 0 ? qU.WidgetBefore : qU.WidgetAfter
      }
      get heightRelevant() {
        return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0)
      }
      eq(UU) {
        return UU instanceof uU && (XU = this.widget, zU = UU.widget, XU == zU || !!(XU && zU && XU.compare(zU))) && this.block == UU.block && this.startSide == UU.startSide && this.endSide == UU.endSide;
        var XU, zU
      }
      range(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UU;
        if (this.isReplace && (UU > XU || UU == XU && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && XU != UU) throw new RangeError("Widget decorations can only have zero-length ranges");
        return super.range(UU, XU)
      }
    }

    function fU(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          inclusiveStart: zU,
          inclusiveEnd: cU
        } = UU;
      return null == zU && (zU = UU.inclusive), null == cU && (cU = UU.inclusive), {
        start: null !== zU && void 0 !== zU ? zU : XU,
        end: null !== cU && void 0 !== cU ? cU : XU
      }
    }

    function iU(UU, XU, zU) {
      let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        yU = zU.length - 1;
      yU >= 0 && zU[yU] + cU >= UU ? zU[yU] = Math.max(zU[yU], XU) : zU.push(UU, XU)
    }
    uU.prototype.point = !0;
    class HU extends cU.E {
      constructor(UU, XU) {
        super(), this.tagName = UU, this.attributes = XU
      }
      eq(UU) {
        return UU == this || UU instanceof HU && this.tagName == UU.tagName && LU(this.attributes, UU.attributes)
      }
      static create(UU) {
        return new HU(UU.tagName, UU.attributes || dU)
      }
      static set(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return cU.D.of(UU, XU)
      }
    }

    function MU(UU) {
      let XU;
      return XU = 11 == UU.nodeType ? UU.getSelection ? UU : UU.ownerDocument : UU, XU.getSelection()
    }

    function vU(UU, XU) {
      return !!XU && (UU == XU || UU.contains(1 != XU.nodeType ? XU.parentNode : XU))
    }

    function VU(UU, XU) {
      if (!XU.anchorNode) return !1;
      try {
        return vU(UU, XU.anchorNode)
      } catch (zU) {
        return !1
      }
    }

    function sU(UU) {
      return 3 == UU.nodeType ? cX(UU, 0, UU.nodeValue.length).getClientRects() : 1 == UU.nodeType ? UU.getClientRects() : []
    }

    function nU(UU, XU, zU, cU) {
      return !!zU && (xU(UU, XU, zU, cU, -1) || xU(UU, XU, zU, cU, 1))
    }

    function mU(UU) {
      for (var XU = 0;; XU++)
        if (!(UU = UU.previousSibling)) return XU
    }

    function lU(UU) {
      return 1 == UU.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(UU.nodeName)
    }

    function xU(UU, XU, zU, cU, yU) {
      for (;;) {
        if (UU == zU && XU == cU) return !0;
        if (XU == (yU < 0 ? 0 : JU(UU))) {
          if ("DIV" == UU.nodeName) return !1;
          let zU = UU.parentNode;
          if (!zU || 1 != zU.nodeType) return !1;
          XU = mU(UU) + (yU < 0 ? 0 : 1), UU = zU
        } else {
          if (1 != UU.nodeType) return !1;
          if (1 == (UU = UU.childNodes[XU + (yU < 0 ? -1 : 0)]).nodeType && "false" == UU.contentEditable) return !1;
          XU = yU < 0 ? JU(UU) : 0
        }
      }
    }

    function JU(UU) {
      return 3 == UU.nodeType ? UU.nodeValue.length : UU.childNodes.length
    }

    function jU(UU, XU) {
      let zU = XU ? UU.left : UU.right;
      return {
        left: zU,
        right: zU,
        top: UU.top,
        bottom: UU.bottom
      }
    }

    function KU(UU) {
      let XU = UU.visualViewport;
      return XU ? {
        left: 0,
        right: XU.width,
        top: 0,
        bottom: XU.height
      } : {
        left: 0,
        right: UU.innerWidth,
        top: 0,
        bottom: UU.innerHeight
      }
    }

    function bU(UU, XU) {
      let zU = XU.width / UU.offsetWidth,
        cU = XU.height / UU.offsetHeight;
      return (zU > .995 && zU < 1.005 || !isFinite(zU) || Math.abs(XU.width - UU.offsetWidth) < 1) && (zU = 1), (cU > .995 && cU < 1.005 || !isFinite(cU) || Math.abs(XU.height - UU.offsetHeight) < 1) && (cU = 1), {
        scaleX: zU,
        scaleY: cU
      }
    }

    function TU(UU) {
      let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        zU = UU.ownerDocument,
        cU = null,
        yU = null;
      for (let QU = UU.parentNode; QU && (QU != zU.body && (XU && !cU || !yU));)
        if (1 == QU.nodeType) !yU && QU.scrollHeight > QU.clientHeight && (yU = QU), XU && !cU && QU.scrollWidth > QU.clientWidth && (cU = QU), QU = QU.assignedSlot || QU.parentNode;
        else {
          if (11 != QU.nodeType) break;
          QU = QU.host
        } return {
        x: cU,
        y: yU
      }
    }
    HU.prototype.startSide = HU.prototype.endSide = -1;
    class hU {
      constructor() {
        this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
      }
      eq(UU) {
        return this.anchorNode == UU.anchorNode && this.anchorOffset == UU.anchorOffset && this.focusNode == UU.focusNode && this.focusOffset == UU.focusOffset
      }
      setRange(UU) {
        let {
          anchorNode: XU,
          focusNode: zU
        } = UU;
        this.set(XU, Math.min(UU.anchorOffset, XU ? JU(XU) : 0), zU, Math.min(UU.focusOffset, zU ? JU(zU) : 0))
      }
      set(UU, XU, zU, cU) {
        this.anchorNode = UU, this.anchorOffset = XU, this.focusNode = zU, this.focusOffset = cU
      }
    }
    let UX, XX = null;

    function zX(UU) {
      if (UU.setActive) return UU.setActive();
      if (XX) return UU.focus(XX);
      let XU = [];
      for (let zU = UU; zU && (XU.push(zU, zU.scrollTop, zU.scrollLeft), zU != zU.ownerDocument); zU = zU.parentNode);
      if (UU.focus(null == XX ? {
          get preventScroll() {
            return XX = {
              preventScroll: !0
            }, !0
          }
        } : void 0), !XX) {
        XX = !1;
        for (let UU = 0; UU < XU.length;) {
          let zU = XU[UU++],
            cU = XU[UU++],
            yU = XU[UU++];
          zU.scrollTop != cU && (zU.scrollTop = cU), zU.scrollLeft != yU && (zU.scrollLeft = yU)
        }
      }
    }

    function cX(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : XU,
        cU = UX || (UX = document.createRange());
      return cU.setEnd(UU, zU), cU.setStart(UU, XU), cU
    }

    function yX(UU, XU, zU, cU) {
      let yU = {
        key: XU,
        code: XU,
        keyCode: zU,
        which: zU,
        cancelable: !0
      };
      cU && ({
        altKey: yU.altKey,
        ctrlKey: yU.ctrlKey,
        shiftKey: yU.shiftKey,
        metaKey: yU.metaKey
      } = cU);
      let QU = new KeyboardEvent("keydown", yU);
      QU.synthetic = !0, UU.dispatchEvent(QU);
      let AU = new KeyboardEvent("keyup", yU);
      return AU.synthetic = !0, UU.dispatchEvent(AU), QU.defaultPrevented || AU.defaultPrevented
    }

    function QX(UU) {
      return UU instanceof Window ? UU.pageYOffset > Math.max(0, UU.document.documentElement.scrollHeight - UU.innerHeight - 4) : UU.scrollTop > Math.max(1, UU.scrollHeight - UU.clientHeight - 4)
    }

    function AX(UU, XU) {
      for (let zU = UU, cU = XU;;) {
        if (3 == zU.nodeType && cU > 0) return {
          node: zU,
          offset: cU
        };
        if (1 == zU.nodeType && cU > 0) {
          if ("false" == zU.contentEditable) return null;
          zU = zU.childNodes[cU - 1], cU = JU(zU)
        } else {
          if (!zU.parentNode || lU(zU)) return null;
          cU = mU(zU), zU = zU.parentNode
        }
      }
    }

    function FX(UU, XU) {
      for (let zU = UU, cU = XU;;) {
        if (3 == zU.nodeType && cU < zU.nodeValue.length) return {
          node: zU,
          offset: cU
        };
        if (1 == zU.nodeType && cU < zU.childNodes.length) {
          if ("false" == zU.contentEditable) return null;
          zU = zU.childNodes[cU], cU = 0
        } else {
          if (!zU.parentNode || lU(zU)) return null;
          cU = mU(zU) + 1, zU = zU.parentNode
        }
      }
    }
    PU.safari && PU.safari_version >= 26 && (XX = !1);
    class oX {
      constructor(UU, XU) {
        let zU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.node = UU, this.offset = XU, this.precise = zU
      }
      static before(UU, XU) {
        return new oX(UU.parentNode, mU(UU), XU)
      }
      static after(UU, XU) {
        return new oX(UU.parentNode, mU(UU) + 1, XU)
      }
    }
    var DX = function(UU) {
      return UU[UU.LTR = 0] = "LTR", UU[UU.RTL = 1] = "RTL", UU
    }(DX || (DX = {}));
    const EX = DX.LTR,
      YX = DX.RTL;

    function NX(UU) {
      let XU = [];
      for (let zU = 0; zU < UU.length; zU++) XU.push(1 << +UU[zU]);
      return XU
    }
    const IX = NX("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),
      pX = NX("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),
      aX = Object.create(null),
      tX = [];
    for (let qA of ["()", "[]", "{}"]) {
      let UU = qA.charCodeAt(0),
        XU = qA.charCodeAt(1);
      aX[UU] = XU, aX[XU] = -UU
    }

    function gX(UU) {
      return UU <= 247 ? IX[UU] : 1424 <= UU && UU <= 1524 ? 2 : 1536 <= UU && UU <= 1785 ? pX[UU - 1536] : 1774 <= UU && UU <= 2220 ? 4 : 8192 <= UU && UU <= 8204 ? 256 : 64336 <= UU && UU <= 65023 ? 4 : 1
    }
    const kX = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
    class GX {
      get dir() {
        return this.level % 2 ? YX : EX
      }
      constructor(UU, XU, zU) {
        this.from = UU, this.to = XU, this.level = zU
      }
      side(UU, XU) {
        return this.dir == XU == UU ? this.to : this.from
      }
      forward(UU, XU) {
        return UU == (this.dir == XU)
      }
      static find(UU, XU, zU, cU) {
        let yU = -1;
        for (let QU = 0; QU < UU.length; QU++) {
          let AU = UU[QU];
          if (AU.from <= XU && AU.to >= XU) {
            if (AU.level == zU) return QU;
            (yU < 0 || (0 != cU ? cU < 0 ? AU.from < XU : AU.to > XU : UU[yU].level > AU.level)) && (yU = QU)
          }
        }
        if (yU < 0) throw new RangeError("Index out of range");
        return yU
      }
    }

    function BX(UU, XU) {
      if (UU.length != XU.length) return !1;
      for (let zU = 0; zU < UU.length; zU++) {
        let cU = UU[zU],
          yU = XU[zU];
        if (cU.from != yU.from || cU.to != yU.to || cU.direction != yU.direction || !BX(cU.inner, yU.inner)) return !1
      }
      return !0
    }
    const ZX = [];

    function RX(UU, XU, zU, cU, yU, QU, AU) {
      let FU = cU % 2 ? 2 : 1;
      if (cU % 2 == yU % 2)
        for (let oU = XU, DU = 0; oU < zU;) {
          let XU = !0,
            EU = !1;
          if (DU == QU.length || oU < QU[DU].from) {
            let UU = ZX[oU];
            UU != FU && (XU = !1, EU = 16 == UU)
          }
          let YU = XU || 1 != FU ? null : [],
            NU = XU ? cU : cU + 1,
            IU = oU;
          UU: for (;;)
            if (DU < QU.length && IU == QU[DU].from) {
              if (EU) break UU;
              let pU = QU[DU];
              if (!XU)
                for (let UU = pU.to, XU = DU + 1;;) {
                  if (UU == zU) break UU;
                  if (!(XU < QU.length && QU[XU].from == UU)) {
                    if (ZX[UU] == FU) break UU;
                    break
                  }
                  UU = QU[XU++].to
                }
              if (DU++, YU) YU.push(pU);
              else {
                pU.from > oU && AU.push(new GX(oU, pU.from, NU)), PX(UU, pU.direction == EX != !(NU % 2) ? cU + 1 : cU, yU, pU.inner, pU.from, pU.to, AU), oU = pU.to
              }
              IU = pU.to
            } else {
              if (IU == zU || (XU ? ZX[IU] != FU : ZX[IU] == FU)) break;
              IU++
            } YU ? RX(UU, oU, IU, cU + 1, yU, YU, AU) : oU < IU && AU.push(new GX(oU, IU, NU)), oU = IU
        } else
          for (let oU = zU, DU = QU.length; oU > XU;) {
            let zU = !0,
              EU = !1;
            if (!DU || oU > QU[DU - 1].to) {
              let UU = ZX[oU - 1];
              UU != FU && (zU = !1, EU = 16 == UU)
            }
            let YU = zU || 1 != FU ? null : [],
              NU = zU ? cU : cU + 1,
              IU = oU;
            UU: for (;;)
              if (DU && IU == QU[DU - 1].to) {
                if (EU) break UU;
                let pU = QU[--DU];
                if (!zU)
                  for (let UU = pU.from, zU = DU;;) {
                    if (UU == XU) break UU;
                    if (!zU || QU[zU - 1].to != UU) {
                      if (ZX[UU - 1] == FU) break UU;
                      break
                    }
                    UU = QU[--zU].from
                  }
                if (YU) YU.push(pU);
                else {
                  pU.to < oU && AU.push(new GX(pU.to, oU, NU)), PX(UU, pU.direction == EX != !(NU % 2) ? cU + 1 : cU, yU, pU.inner, pU.from, pU.to, AU), oU = pU.from
                }
                IU = pU.from
              } else {
                if (IU == XU || (zU ? ZX[IU - 1] != FU : ZX[IU - 1] == FU)) break;
                IU--
              } YU ? RX(UU, IU, oU, cU + 1, yU, YU, AU) : IU < oU && AU.push(new GX(IU, oU, NU)), oU = IU
          }
    }

    function PX(UU, XU, zU, cU, yU, QU, AU) {
      let FU = XU % 2 ? 2 : 1;
      ! function(UU, XU, zU, cU, yU) {
        for (let QU = 0; QU <= cU.length; QU++) {
          let AU = QU ? cU[QU - 1].to : XU,
            FU = QU < cU.length ? cU[QU].from : zU,
            oU = QU ? 256 : yU;
          for (let XU = AU, zU = oU, cU = oU; XU < FU; XU++) {
            let yU = gX(UU.charCodeAt(XU));
            512 == yU ? yU = zU : 8 == yU && 4 == cU && (yU = 16), ZX[XU] = 4 == yU ? 2 : yU, 7 & yU && (cU = yU), zU = yU
          }
          for (let UU = AU, XU = oU, cU = oU; UU < FU; UU++) {
            let yU = ZX[UU];
            if (128 == yU) UU < FU - 1 && XU == ZX[UU + 1] && 24 & XU ? yU = ZX[UU] = XU : ZX[UU] = 256;
            else if (64 == yU) {
              let yU = UU + 1;
              for (; yU < FU && 64 == ZX[yU];) yU++;
              let QU = UU && 8 == XU || yU < zU && 8 == ZX[yU] ? 1 == cU ? 1 : 8 : 256;
              for (let XU = UU; XU < yU; XU++) ZX[XU] = QU;
              UU = yU - 1
            } else 8 == yU && 1 == cU && (ZX[UU] = 1);
            XU = yU, 7 & yU && (cU = yU)
          }
        }
      }(UU, yU, QU, cU, FU),
      function(UU, XU, zU, cU, yU) {
        let QU = 1 == yU ? 2 : 1;
        for (let AU = 0, FU = 0, oU = 0; AU <= cU.length; AU++) {
          let DU = AU ? cU[AU - 1].to : XU,
            EU = AU < cU.length ? cU[AU].from : zU;
          for (let XU, zU, cU, AU = DU; AU < EU; AU++)
            if (zU = aX[XU = UU.charCodeAt(AU)])
              if (zU < 0) {
                for (let UU = FU - 3; UU >= 0; UU -= 3)
                  if (tX[UU + 1] == -zU) {
                    let XU = tX[UU + 2],
                      zU = 2 & XU ? yU : 4 & XU ? 1 & XU ? QU : yU : 0;
                    zU && (ZX[AU] = ZX[tX[UU]] = zU), FU = UU;
                    break
                  }
              } else {
                if (189 == tX.length) break;
                tX[FU++] = AU, tX[FU++] = XU, tX[FU++] = oU
              }
          else if (2 == (cU = ZX[AU]) || 1 == cU) {
            let UU = cU == yU;
            oU = UU ? 0 : 1;
            for (let XU = FU - 3; XU >= 0; XU -= 3) {
              let zU = tX[XU + 2];
              if (2 & zU) break;
              if (UU) tX[XU + 2] |= 2;
              else {
                if (4 & zU) break;
                tX[XU + 2] |= 4
              }
            }
          }
        }
      }(UU, yU, QU, cU, FU),
      function(UU, XU, zU, cU) {
        for (let yU = 0, QU = cU; yU <= zU.length; yU++) {
          let AU = yU ? zU[yU - 1].to : UU,
            FU = yU < zU.length ? zU[yU].from : XU;
          for (let oU = AU; oU < FU;) {
            let AU = ZX[oU];
            if (256 == AU) {
              let AU = oU + 1;
              for (;;)
                if (AU == FU) {
                  if (yU == zU.length) break;
                  AU = zU[yU++].to, FU = yU < zU.length ? zU[yU].from : XU
                } else {
                  if (256 != ZX[AU]) break;
                  AU++
                } let DU = 1 == QU,
                EU = DU == (1 == (AU < XU ? ZX[AU] : cU)) ? DU ? 1 : 2 : cU;
              for (let XU = AU, cU = yU, QU = cU ? zU[cU - 1].to : UU; XU > oU;) XU == QU && (XU = zU[--cU].from, QU = cU ? zU[cU - 1].to : UU), ZX[--XU] = EU;
              oU = AU
            } else QU = AU, oU++
          }
        }
      }(yU, QU, cU, FU), RX(UU, yU, QU, XU, zU, cU, AU)
    }

    function WX(UU, XU, zU) {
      if (!UU) return [new GX(0, 0, XU == YX ? 1 : 0)];
      if (XU == EX && !zU.length && !kX.test(UU)) return dX(UU.length);
      if (zU.length)
        for (; UU.length > ZX.length;) ZX[ZX.length] = 256;
      let cU = [],
        yU = XU == EX ? 0 : 1;
      return PX(UU, yU, yU, zU, 0, UU.length, cU), cU
    }

    function dX(UU) {
      return [new GX(0, UU, 0)]
    }
    let LX = "";

    function eX(UU, XU, zU, yU, QU) {
      var AU;
      let FU = yU.head - UU.from,
        oU = GX.find(XU, FU, null !== (AU = yU.bidiLevel) && void 0 !== AU ? AU : -1, yU.assoc),
        DU = XU[oU],
        EU = DU.side(QU, zU);
      if (FU == EU) {
        let UU = oU += QU ? 1 : -1;
        if (UU < 0 || UU >= XU.length) return null;
        DU = XU[oU = UU], FU = DU.side(!QU, zU), EU = DU.side(QU, zU)
      }
      let YU = (0, cU._)(UU.text, FU, DU.forward(QU, zU));
      (YU < DU.from || YU > DU.to) && (YU = EU), LX = UU.text.slice(Math.min(FU, YU), Math.max(FU, YU));
      let NU = oU == (QU ? XU.length - 1 : 0) ? null : XU[oU + (QU ? 1 : -1)];
      return NU && YU == EU && NU.level + (QU ? 0 : 1) < DU.level ? cU.k.cursor(NU.side(!QU, zU) + UU.from, NU.forward(QU, zU) ? 1 : -1, NU.level) : cU.k.cursor(YU + UU.from, DU.forward(QU, zU) ? -1 : 1, DU.level)
    }

    function CX(UU, XU, zU) {
      for (let cU = XU; cU < zU; cU++) {
        let XU = gX(UU.charCodeAt(cU));
        if (1 == XU) return EX;
        if (2 == XU || 4 == XU) return YX
      }
      return EX
    }
    const wX = cU.r.define(),
      qX = cU.r.define(),
      OX = cU.r.define(),
      SX = cU.r.define(),
      rX = cU.r.define(),
      uX = cU.r.define(),
      fX = cU.r.define(),
      iX = cU.r.define(),
      HX = cU.r.define(),
      MX = cU.r.define({
        combine: UU => UU.some((UU => UU))
      }),
      vX = cU.r.define({
        combine: UU => UU.some((UU => UU))
      }),
      VX = cU.r.define();
    class sX {
      constructor(UU, XU, zU, cU, yU) {
        let QU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.range = UU, this.y = XU, this.x = zU, this.yMargin = cU, this.xMargin = yU, this.isSnapshot = QU
      }
      map(UU) {
        return UU.empty ? this : new sX(this.range.map(UU), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
      clip(UU) {
        return this.range.to <= UU.doc.length ? this : new sX(cU.k.cursor(UU.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
    }
    const nX = cU.H.define({
        map: (UU, XU) => UU.map(XU)
      }),
      mX = cU.H.define();

    function lX(UU, XU, zU) {
      let cU = UU.facet(SX);
      cU.length ? cU[0](XU) : window.onerror && window.onerror(String(XU), zU, void 0, void 0, XU) || (zU ? console.error(zU + ":", XU) : console.error(XU))
    }
    const xX = cU.r.define({
      combine: UU => !UU.length || UU[0]
    });
    let JX = 0;
    const jX = cU.r.define({
      combine: UU => UU.filter(((XU, zU) => {
        for (let cU = 0; cU < zU; cU++)
          if (UU[cU].plugin == XU.plugin) return !1;
        return !0
      }))
    });
    class KX {
      constructor(UU, XU, zU, cU, yU) {
        this.id = UU, this.create = XU, this.domEventHandlers = zU, this.domEventObservers = cU, this.baseExtensions = yU(this), this.extension = this.baseExtensions.concat(jX.of({
          plugin: this,
          arg: void 0
        }))
      }
      of(UU) {
        return this.baseExtensions.concat(jX.of({
          plugin: this,
          arg: UU
        }))
      }
      static define(UU, XU) {
        const {
          eventHandlers: zU,
          eventObservers: cU,
          provide: yU,
          hy: QU
        } = XU || {};
        return new KX(JX++, UU, zU, cU, (UU => {
          let XU = [];
          return QU && XU.push(Uz.of((XU => {
            let zU = XU.plugin(UU);
            return zU ? QU(zU) : OU.none
          }))), yU && XU.push(yU(UU)), XU
        }))
      }
      static fromClass(UU, XU) {
        return KX.define(((XU, zU) => new UU(XU, zU)), XU)
      }
    }
    class bX {
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
            } catch (XU) {
              if (lX(UU.state, XU, "CodeMirror plugin crashed"), this.value.destroy) try {
                this.value.destroy()
              } catch (zU) {}
              this.deactivate()
            }
          }
        } else if (this.spec) try {
          this.value = this.spec.plugin.create(UU, this.spec.arg)
        } catch (XU) {
          lX(UU.state, XU, "CodeMirror plugin crashed"), this.deactivate()
        }
        return this
      }
      destroy(UU) {
        var XU;
        if (null === (XU = this.value) || void 0 === XU ? void 0 : XU.destroy) try {
          this.value.destroy()
        } catch (zU) {
          lX(UU.state, zU, "CodeMirror plugin crashed")
        }
      }
      deactivate() {
        this.spec = this.value = null
      }
    }
    const TX = cU.r.define(),
      hX = cU.r.define(),
      Uz = cU.r.define(),
      Xz = cU.r.define(),
      zz = cU.r.define(),
      cz = cU.r.define(),
      yz = cU.r.define();

    function Qz(UU, XU) {
      let zU = UU.state.facet(yz);
      if (!zU.length) return zU;
      let yU = zU.map((XU => XU instanceof Function ? XU(UU) : XU)),
        QU = [];
      return cU.D.spans(yU, XU.from, XU.to, {
        point() {},
        span(UU, zU, cU, yU) {
          let AU = UU - XU.from,
            FU = zU - XU.from,
            oU = QU;
          for (let QU = cU.length - 1; QU >= 0; QU--, yU--) {
            let UU, zU = cU[QU].spec.bidiIsolate;
            if (null == zU && (zU = CX(XU.text, AU, FU)), yU > 0 && oU.length && (UU = oU[oU.length - 1]).to == AU && UU.direction == zU) UU.to = FU, oU = UU.inner;
            else {
              let UU = {
                from: AU,
                to: FU,
                direction: zU,
                inner: []
              };
              oU.push(UU), oU = UU.inner
            }
          }
        }
      }), QU
    }
    const Az = cU.r.define();

    function Fz(UU) {
      let XU = 0,
        zU = 0,
        cU = 0,
        yU = 0;
      for (let QU of UU.state.facet(Az)) {
        let AU = QU(UU);
        AU && (null != AU.left && (XU = Math.max(XU, AU.left)), null != AU.right && (zU = Math.max(zU, AU.right)), null != AU.top && (cU = Math.max(cU, AU.top)), null != AU.bottom && (yU = Math.max(yU, AU.bottom)))
      }
      return {
        left: XU,
        right: zU,
        top: cU,
        bottom: yU
      }
    }
    const oz = cU.r.define();
    class Dz {
      constructor(UU, XU, zU, cU) {
        this.fromA = UU, this.toA = XU, this.fromB = zU, this.toB = cU
      }
      join(UU) {
        return new Dz(Math.min(this.fromA, UU.fromA), Math.max(this.toA, UU.toA), Math.min(this.fromB, UU.fromB), Math.max(this.toB, UU.toB))
      }
      addToSet(UU) {
        let XU = UU.length,
          zU = this;
        for (; XU > 0; XU--) {
          let cU = UU[XU - 1];
          if (!(cU.fromA > zU.toA)) {
            if (cU.toA < zU.fromA) break;
            zU = zU.join(cU), UU.splice(XU - 1, 1)
          }
        }
        return UU.splice(XU, 0, zU), UU
      }
      static extendWithRanges(UU, XU) {
        if (0 == XU.length) return UU;
        let zU = [];
        for (let cU = 0, yU = 0, QU = 0;;) {
          let AU = cU < UU.length ? UU[cU].fromB : 1e9,
            FU = yU < XU.length ? XU[yU] : 1e9,
            oU = Math.min(AU, FU);
          if (1e9 == oU) break;
          let DU = oU + QU,
            EU = oU,
            YU = DU;
          for (;;)
            if (yU < XU.length && XU[yU] <= EU) {
              let zU = XU[yU + 1];
              yU += 2, EU = Math.max(EU, zU);
              for (let XU = cU; XU < UU.length && UU[XU].fromB <= EU; XU++) QU = UU[XU].toA - UU[XU].toB;
              YU = Math.max(YU, zU + QU)
            } else {
              if (!(cU < UU.length && UU[cU].fromB <= EU)) break;
              {
                let XU = UU[cU++];
                EU = Math.max(EU, XU.toB), YU = Math.max(YU, XU.toA), QU = XU.toA - XU.toB
              }
            } zU.push(new Dz(DU, YU, oU, EU))
        }
        return zU
      }
    }
    class Ez {
      constructor(UU, XU, zU) {
        this.view = UU, this.state = XU, this.transactions = zU, this.flags = 0, this.startState = UU.state, this.changes = cU.ChangeSet.empty(this.startState.doc.length);
        for (let cU of zU) this.changes = this.changes.compose(cU.changes);
        let yU = [];
        this.changes.iterChangedRanges(((UU, XU, zU, cU) => yU.push(new Dz(UU, XU, zU, cU)))), this.changedRanges = yU
      }
      static create(UU, XU, zU) {
        return new Ez(UU, XU, zU)
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
    const Yz = [];
    class Nz {
      constructor(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.dom = UU, this.length = XU, this.flags = zU, this.parent = null, UU.cmTile = this
      }
      get breakAfter() {
        return 1 & this.flags
      }
      get children() {
        return Yz
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
          UU && function(UU, XU) {
            for (let zU = UU.attributes.length - 1; zU >= 0; zU--) {
              let cU = UU.attributes[zU].name;
              null == XU[cU] && UU.removeAttribute(cU)
            }
            for (let zU in XU) {
              let cU = XU[zU];
              "style" == zU ? UU.style.cssText = cU : UU.getAttribute(zU) != cU && UU.setAttribute(zU, cU)
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
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.posAtStart;
        for (let zU of this.children) {
          if (zU == UU) return XU;
          XU += zU.length + zU.breakAfter
        }
        throw new RangeError("Invalid child in posBefore")
      }
      posAfter(UU) {
        return this.posBefore(UU) + UU.length
      }
      covers(UU) {
        return !0
      }
      coordsIn(UU, XU) {
        return null
      }
      domPosFor(UU, XU) {
        let zU = mU(this.dom),
          cU = this.length ? UU > 0 : XU > 0;
        return new oX(this.parent.dom, zU + (cU ? 1 : 0), 0 == UU || UU == this.length)
      }
      markDirty(UU) {
        this.flags &= -3, UU && (this.flags |= 4), this.parent && 2 & this.parent.flags && this.parent.markDirty(!1)
      }
      get overrideDOMText() {
        return null
      }
      get root() {
        for (let UU = this; UU; UU = UU.parent)
          if (UU instanceof az) return UU;
        return null
      }
      static get(UU) {
        return UU.cmTile
      }
    }
    class Iz extends Nz {
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
        let XU, zU = this.dom,
          cU = null,
          yU = (null === UU || void 0 === UU ? void 0 : UU.node) == zU ? UU : null,
          QU = 0;
        for (let AU of this.children) {
          if (AU.sync(UU), QU += AU.length + AU.breakAfter, XU = cU ? cU.nextSibling : zU.firstChild, yU && XU != AU.dom && (yU.written = !0), AU.dom.parentNode == zU)
            for (; XU && XU != AU.dom;) XU = pz(XU);
          else zU.insertBefore(AU.dom, XU);
          cU = AU.dom
        }
        for (XU = cU ? cU.nextSibling : zU.firstChild, yU && XU && (yU.written = !0); XU;) XU = pz(XU);
        this.length = QU
      }
    }

    function pz(UU) {
      let XU = UU.nextSibling;
      return UU.parentNode.removeChild(UU), XU
    }
    class az extends Iz {
      constructor(UU, XU) {
        super(XU), this.view = UU
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
          let XU = Nz.get(UU);
          if (XU && this.owns(XU)) return XU;
          UU = UU.parentNode
        }
      }
      blockTiles(UU) {
        for (let XU = [], zU = this, cU = 0, yU = 0;;)
          if (cU == zU.children.length) {
            if (!XU.length) return;
            zU = zU.parent, zU.breakAfter && yU++, cU = XU.pop()
          } else {
            let QU = zU.children[cU++];
            if (QU instanceof tz) XU.push(cU), zU = QU, cU = 0;
            else {
              let XU = yU + QU.length,
                zU = UU(QU, yU);
              if (void 0 !== zU) return zU;
              yU = XU + QU.breakAfter
            }
          }
      }
      resolveBlock(UU, XU) {
        let zU, cU, yU = -1,
          QU = -1;
        if (this.blockTiles(((AU, FU) => {
            let oU = FU + AU.length;
            if (UU >= FU && UU <= oU) {
              if (AU.isWidget() && XU >= -1 && XU <= 1) {
                if (32 & AU.flags) return !0;
                16 & AU.flags && (zU = void 0)
              }(FU < UU || UU == oU && (XU < -1 ? AU.length : AU.covers(1))) && (!zU || !AU.isWidget() && zU.isWidget()) && (zU = AU, yU = UU - FU), (oU > UU || UU == FU && (XU > 1 ? AU.length : AU.covers(-1))) && (!cU || !AU.isWidget() && cU.isWidget()) && (cU = AU, QU = UU - FU)
            }
          })), !zU && !cU) throw new Error("No tile at position " + UU);
        return zU && XU < 0 || !cU ? {
          tile: zU,
          offset: yU
        } : {
          tile: cU,
          offset: QU
        }
      }
    }
    class tz extends Iz {
      constructor(UU, XU) {
        super(UU), this.wrapper = XU
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
      static of (UU, XU) {
        let zU = new tz(XU || document.createElement(UU.tagName), UU);
        return XU || (zU.flags |= 4), zU
      }
    }
    class gz extends Iz {
      constructor(UU, XU) {
        super(UU), this.attrs = XU
      }
      isLine() {
        return !0
      }
      static start(UU, XU, zU) {
        let cU = new gz(XU || document.createElement("div"), UU);
        return XU && zU || (cU.flags |= 4), cU
      }
      get domAttrs() {
        return this.attrs
      }
      resolveInline(UU, XU, zU) {
        let cU = null,
          yU = -1,
          QU = null,
          AU = -1;
        ! function UU(FU, oU) {
          for (let DU = 0, EU = 0; DU < FU.children.length && EU <= oU; DU++) {
            let YU = FU.children[DU],
              NU = EU + YU.length;
            NU >= oU && (YU.isComposite() ? UU(YU, oU - EU) : (!QU || QU.isHidden && (XU > 0 || zU && kz(QU, YU))) && (NU > oU || 32 & YU.flags) ? (QU = YU, AU = oU - EU) : (EU < oU || 16 & YU.flags && !YU.isHidden) && (cU = YU, yU = oU - EU)), EU = NU
          }
        }(this, UU);
        let FU = (XU < 0 ? cU : QU) || cU || QU;
        return FU ? {
          tile: FU,
          offset: FU == cU ? yU : AU
        } : null
      }
      coordsIn(UU, XU) {
        let zU = this.resolveInline(UU, XU, !0);
        return zU ? zU.tile.coordsIn(Math.max(0, zU.offset), XU) : function(UU) {
          let XU = UU.dom.lastChild;
          if (!XU) return UU.dom.getBoundingClientRect();
          let zU = sU(XU);
          return zU[zU.length - 1] || null
        }(this)
      }
      domIn(UU, XU) {
        let zU = this.resolveInline(UU, XU);
        if (zU) {
          let {
            tile: UU,
            offset: cU
          } = zU;
          if (this.dom.contains(UU.dom)) return UU.isText() ? new oX(UU.dom, Math.min(UU.dom.nodeValue.length, cU)) : UU.domPosFor(cU, 16 & UU.flags ? 1 : 32 & UU.flags ? -1 : XU);
          let yU = zU.tile.parent,
            QU = !1;
          for (let XU of yU.children) {
            if (QU) return new oX(XU.dom, 0);
            XU == zU.tile && (QU = !0)
          }
        }
        return new oX(this.dom, 0)
      }
    }

    function kz(UU, XU) {
      let zU = UU.coordsIn(0, 1),
        cU = XU.coordsIn(0, 1);
      return zU && cU && cU.top < zU.bottom
    }
    class Gz extends Iz {
      constructor(UU, XU) {
        super(UU), this.mark = XU
      }
      get domAttrs() {
        return this.mark.attrs
      }
      static of (UU, XU) {
        let zU = new Gz(XU || document.createElement(UU.tagName), UU);
        return XU || (zU.flags |= 4), zU
      }
    }
    class Bz extends Nz {
      constructor(UU, XU) {
        super(UU, XU.length), this.text = XU
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
      coordsIn(UU, XU) {
        let zU = this.dom.nodeValue.length;
        UU > zU && (UU = zU);
        let cU = UU,
          yU = UU,
          QU = 0;
        0 == UU && XU < 0 || UU == zU && XU >= 0 ? PU.chrome || PU.gecko || (UU ? (cU--, QU = 1) : yU < zU && (yU++, QU = -1)) : XU < 0 ? cU-- : yU < zU && yU++;
        let AU = cX(this.dom, cU, yU).getClientRects();
        if (!AU.length) return null;
        let FU = AU[(QU ? QU < 0 : XU >= 0) ? 0 : AU.length - 1];
        return PU.safari && !QU && 0 == FU.width && (FU = Array.prototype.find.call(AU, (UU => UU.width)) || FU), QU ? jU(FU, QU < 0) : FU || null
      }
      static of (UU, XU) {
        let zU = new Bz(XU || document.createTextNode(UU), UU);
        return XU || (zU.flags |= 2), zU
      }
    }
    class Zz extends Nz {
      constructor(UU, XU, zU, cU) {
        super(UU, XU, cU), this.widget = zU
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
      coordsIn(UU, XU) {
        return this.coordsInWidget(UU, XU, !1)
      }
      coordsInWidget(UU, XU, zU) {
        let cU = this.widget.coordsAt(this.dom, UU, XU);
        if (cU) return cU;
        if (zU) return jU(this.dom.getBoundingClientRect(), this.length ? 0 == UU : XU <= 0);
        {
          let XU = this.dom.getClientRects(),
            zU = null;
          if (!XU.length) return null;
          let cU = !!(16 & this.flags) || !(32 & this.flags) && UU > 0;
          for (let yU = cU ? XU.length - 1 : 0; zU = XU[yU], !(UU > 0 ? 0 == yU : yU == XU.length - 1 || zU.top < zU.bottom); yU += cU ? -1 : 1);
          return jU(zU, !cU)
        }
      }
      get overrideDOMText() {
        if (!this.length) return cU.O.empty;
        let {
          root: UU
        } = this;
        if (!UU) return cU.O.empty;
        let XU = this.posAtStart;
        return UU.view.state.doc.slice(XU, XU + this.length)
      }
      destroy() {
        super.destroy(), this.widget.destroy(this.dom)
      }
      static of (UU, XU, zU, cU, yU) {
        return yU || (yU = UU.toDOM(XU), UU.editable || (yU.contentEditable = "false")), new Zz(yU, zU, UU, cU)
      }
    }
    class Rz extends Nz {
      constructor(UU) {
        let XU = document.createElement("img");
        XU.className = "cm-widgetBuffer", XU.setAttribute("aria-hidden", "true"), super(XU, 0, UU)
      }
      get isHidden() {
        return !0
      }
      get overrideDOMText() {
        return cU.O.empty
      }
      coordsIn(UU) {
        return this.dom.getBoundingClientRect()
      }
    }
    class Pz {
      constructor(UU) {
        this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = UU
      }
      advance(UU, XU, zU) {
        let {
          tile: cU,
          index: yU,
          beforeBreak: QU,
          parents: AU
        } = this;
        for (; UU || XU > 0;)
          if (cU.isComposite())
            if (QU) {
              if (!UU) break;
              zU && zU.break(), UU--, QU = !1
            } else if (yU == cU.children.length) {
          if (!UU && !AU.length) break;
          zU && zU.leave(cU), QU = !!cU.breakAfter, ({
            tile: cU,
            index: yU
          } = AU.pop()), yU++
        } else {
          let FU = cU.children[yU],
            oU = FU.breakAfter;
          !(XU > 0 ? FU.length <= UU : FU.length < UU) || zU && !1 === zU.skip(FU, 0, FU.length) && FU.isComposite ? (AU.push({
            tile: cU,
            index: yU
          }), cU = FU, yU = 0, zU && FU.isComposite() && zU.enter(FU)) : (QU = !!oU, yU++, UU -= FU.length)
        } else if (yU == cU.length) QU = !!cU.breakAfter, ({
          tile: cU,
          index: yU
        } = AU.pop()), yU++;
        else {
          if (!UU) break;
          {
            let XU = Math.min(UU, cU.length - yU);
            zU && zU.skip(cU, yU, yU + XU), UU -= XU, yU += XU
          }
        }
        return this.tile = cU, this.index = yU, this.beforeBreak = QU, this
      }
      get root() {
        return this.parents.length ? this.parents[0].tile : this.tile
      }
    }
    class Wz {
      constructor(UU, XU, zU, cU) {
        this.from = UU, this.to = XU, this.wrapper = zU, this.rank = cU
      }
    }
    class dz {
      constructor(UU, XU, zU) {
        this.cache = UU, this.root = XU, this.blockWrappers = zU, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0
      }
      addText(UU, XU, zU, cU) {
        var yU;
        this.flushBuffer();
        let QU = this.ensureMarks(XU, zU),
          AU = QU.lastChild;
        if (AU && AU.isText() && !(8 & AU.flags) && AU.length + UU.length < 512) {
          this.cache.reused.set(AU, 2), (QU.children[QU.children.length - 1] = new Bz(AU.dom, AU.text + UU)).parent = QU
        } else QU.append(cU || Bz.of(UU, null === (yU = this.cache.find(Bz)) || void 0 === yU ? void 0 : yU.dom));
        this.pos += UU.length, this.afterWidget = null
      }
      addComposition(UU, XU) {
        let zU = this.curLine;
        zU.dom != XU.line.dom && (zU.setDOM(this.cache.reused.has(XU.line) ? Sz(XU.line.dom) : XU.line.dom), this.cache.reused.set(XU.line, 2));
        let cU = zU;
        for (let AU = XU.marks.length - 1; AU >= 0; AU--) {
          let UU = XU.marks[AU],
            zU = cU.lastChild;
          if (zU instanceof Gz && zU.mark.eq(UU.mark)) zU.dom != UU.dom && zU.setDOM(Sz(UU.dom)), cU = zU;
          else {
            if (this.cache.reused.get(UU)) {
              let XU = Nz.get(UU.dom);
              XU && XU.setDOM(Sz(UU.dom))
            }
            let XU = Gz.of(UU.mark, UU.dom);
            cU.append(XU), cU = XU
          }
          this.cache.reused.set(UU, 2)
        }
        let yU = Nz.get(UU.text);
        yU && this.cache.reused.set(yU, 2);
        let QU = new Bz(UU.text, UU.text.nodeValue);
        QU.flags |= 8, cU.append(QU)
      }
      addInlineWidget(UU, XU, zU) {
        let cU = this.afterWidget && 48 & UU.flags && (48 & this.afterWidget.flags) == (48 & UU.flags);
        cU || this.flushBuffer();
        let yU = this.ensureMarks(XU, zU);
        cU || 16 & UU.flags || yU.append(this.getBuffer(1)), yU.append(UU), this.pos += UU.length, this.afterWidget = UU
      }
      addMark(UU, XU, zU) {
        this.flushBuffer(), this.ensureMarks(XU, zU).append(UU), this.pos += UU.length, this.afterWidget = null
      }
      addBlockWidget(UU) {
        this.getBlockPos().append(UU), this.pos += UU.length, this.lastBlock = UU, this.endLine()
      }
      continueWidget(UU) {
        (this.afterWidget || this.lastBlock).length += UU, this.pos += UU
      }
      addLineStart(UU, XU) {
        var zU;
        UU || (UU = Oz);
        let cU = gz.start(UU, XU || (null === (zU = this.cache.find(gz)) || void 0 === zU ? void 0 : zU.dom), !!XU);
        this.getBlockPos().append(this.lastBlock = this.curLine = cU)
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
      ensureMarks(UU, XU) {
        var zU;
        let cU = this.curLine;
        for (let yU = UU.length - 1; yU >= 0; yU--) {
          let QU, AU = UU[yU];
          if (XU > 0 && (QU = cU.lastChild) && QU instanceof Gz && QU.mark.eq(AU)) cU = QU, XU--;
          else {
            let UU = Gz.of(AU, null === (zU = this.cache.find(Gz, (UU => UU.mark.eq(AU)))) || void 0 === zU ? void 0 : zU.dom);
            cU.append(UU), cU = UU, XU = 0
          }
        }
        return cU
      }
      endLine() {
        if (this.curLine) {
          this.flushBuffer();
          let UU = this.curLine.lastChild;
          UU && qz(this.curLine, !1) && ("BR" == UU.dom.nodeName || !UU.isWidget() || PU.ios && qz(this.curLine, !0)) || this.curLine.append(this.cache.findWidget(uz, 0, 32) || new Zz(uz.toDOM(), 0, uz, 32)), this.curLine = this.afterWidget = null
        }
      }
      updateBlockWrappers() {
        this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
        for (let UU = this.wrappers.length - 1; UU >= 0; UU--) this.wrappers[UU].to < this.pos && this.wrappers.splice(UU, 1);
        for (let UU = this.blockWrappers; UU.value && UU.from <= this.pos; UU.next())
          if (UU.to >= this.pos) {
            let XU = new Wz(UU.from, UU.to, UU.value, UU.rank),
              zU = this.wrappers.length;
            for (; zU > 0 && (this.wrappers[zU - 1].rank - XU.rank || this.wrappers[zU - 1].to - XU.to) < 0;) zU--;
            this.wrappers.splice(zU, 0, XU)
          } this.wrapperPos = this.pos
      }
      getBlockPos() {
        var UU;
        this.updateBlockWrappers();
        let XU = this.root;
        for (let zU of this.wrappers) {
          let cU = XU.lastChild;
          if (zU.from < this.pos && cU instanceof tz && cU.wrapper.eq(zU.wrapper)) XU = cU;
          else {
            let cU = tz.of(zU.wrapper, null === (UU = this.cache.find(tz, (UU => UU.wrapper.eq(zU.wrapper)))) || void 0 === UU ? void 0 : UU.dom);
            XU.append(cU), XU = cU
          }
        }
        return XU
      }
      blockPosCovered() {
        let UU = this.lastBlock;
        return null != UU && !UU.breakAfter && (!UU.isWidget() || (160 & UU.flags) > 0)
      }
      getBuffer(UU) {
        let XU = 2 | (UU < 0 ? 16 : 32),
          zU = this.cache.find(Rz, void 0, 1);
        return zU && (zU.flags = XU), zU || new Rz(XU)
      }
      flushBuffer() {
        !this.afterWidget || 32 & this.afterWidget.flags || (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null)
      }
    }
    class Lz {
      constructor(UU) {
        this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = UU.iter()
      }
      skip(UU) {
        this.textOff + UU <= this.text.length ? this.textOff += UU : (this.skipCount += UU - (this.text.length - this.textOff), this.text = "", this.textOff = 0)
      }
      next(UU) {
        if (this.textOff == this.text.length) {
          let {
            value: XU,
            lineBreak: zU,
            done: cU
          } = this.cursor.next(this.skipCount);
          if (this.skipCount = 0, cU) throw new Error("Ran out of text content when drawing inline views");
          this.text = XU;
          let yU = this.textOff = Math.min(UU, XU.length);
          return zU ? null : XU.slice(0, yU)
        }
        let XU = Math.min(this.text.length, this.textOff + UU),
          zU = this.text.slice(this.textOff, XU);
        return this.textOff = XU, zU
      }
    }
    const ez = [Zz, gz, Bz, Gz, Rz, tz, az];
    for (let qA = 0; qA < ez.length; qA++) ez[qA].bucket = qA;
    class Cz {
      constructor(UU) {
        this.view = UU, this.buckets = ez.map((() => [])), this.index = ez.map((() => 0)), this.reused = new Map
      }
      add(UU) {
        let XU = UU.constructor.bucket,
          zU = this.buckets[XU];
        zU.length < 6 ? zU.push(UU) : zU[this.index[XU] = (this.index[XU] + 1) % 6] = UU
      }
      find(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          cU = UU.bucket,
          yU = this.buckets[cU],
          QU = this.index[cU];
        for (let AU = yU.length - 1; AU >= 0; AU--) {
          let UU = (AU + QU) % yU.length,
            FU = yU[UU];
          if ((!XU || XU(FU)) && !this.reused.has(FU)) return yU.splice(UU, 1), UU < QU && this.index[cU]--, this.reused.set(FU, zU), FU
        }
        return null
      }
      findWidget(UU, XU, zU) {
        let cU = this.buckets[0];
        if (cU.length)
          for (let yU = 0, QU = 0;; yU++) {
            if (yU == cU.length) {
              if (QU) return null;
              QU = 1, yU = 0
            }
            let AU = cU[yU];
            if (!this.reused.has(AU) && (0 == QU ? AU.widget.compare(UU) : AU.widget.constructor == UU.constructor && UU.updateDOM(AU.dom, this.view, AU.widget))) return cU.splice(yU, 1), yU < this.index[0] && this.index[0]--, AU.widget == UU && AU.length == XU && (497 & AU.flags) == zU ? (this.reused.set(AU, 1), AU) : (this.reused.set(AU, 2), new Zz(AU.dom, XU, UU, -498 & AU.flags | zU))
          }
      }
      reuse(UU) {
        return this.reused.set(UU, 1), UU
      }
      maybeReuse(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        if (!this.reused.has(UU)) return this.reused.set(UU, XU), UU.dom
      }
      clear() {
        for (let UU = 0; UU < this.buckets.length; UU++) this.buckets[UU].length = this.index[UU] = 0
      }
    }
    class wz {
      constructor(UU, XU, zU, yU, QU) {
        this.view = UU, this.hy = yU, this.disallowBlockEffectsFor = QU, this.openWidget = !1, this.openMarks = 0, this.cache = new Cz(UU), this.text = new Lz(UU.state.doc), this.builder = new dz(this.cache, new az(UU, UU.contentDOM), cU.D.iter(zU)), this.cache.reused.set(XU, 2), this.old = new Pz(XU), this.reuseWalker = {
          skip: (UU, XU, zU) => {
            if (this.cache.add(UU), UU.isComposite()) return !1
          },
          enter: UU => this.cache.add(UU),
          leave: () => {},
          break: () => {}
        }
      }
      run(UU, XU) {
        let zU = XU && this.getCompositionContext(XU.text);
        for (let cU = 0, yU = 0, QU = 0;;) {
          let AU = QU < UU.length ? UU[QU++] : null,
            FU = AU ? AU.fromA : this.old.root.length;
          if (FU > cU) {
            let UU = FU - cU;
            this.preserve(UU, !QU, !AU), cU = FU, yU += UU
          }
          if (!AU) break;
          XU && AU.fromA <= XU.range.fromA && AU.toA >= XU.range.toA ? (this.forward(AU.fromA, XU.range.fromA, XU.range.fromA < XU.range.toA ? 1 : -1), this.emit(yU, XU.range.fromB), this.cache.clear(), this.builder.addComposition(XU, zU), this.text.skip(XU.range.toB - XU.range.fromB), this.forward(XU.range.fromA, AU.toA), this.emit(XU.range.toB, AU.toB)) : (this.forward(AU.fromA, AU.toA), this.emit(yU, AU.toB)), yU = AU.toB, cU = AU.toA
        }
        return this.builder.curLine && this.builder.endLine(), this.builder.root
      }
      preserve(UU, XU, zU) {
        let cU = function(UU) {
            let XU = [];
            for (let zU = UU.parents.length; zU > 1; zU--) {
              let cU = zU == UU.parents.length ? UU.tile : UU.parents[zU].tile;
              cU instanceof Gz && XU.push(cU.mark)
            }
            return XU
          }(this.old),
          yU = this.openMarks;
        this.old.advance(UU, zU ? 1 : -1, {
          skip: (UU, XU, zU) => {
            if (UU.isWidget())
              if (this.openWidget) this.builder.continueWidget(zU - XU);
              else {
                let QU = zU > 0 || XU < UU.length ? Zz.of(UU.widget, this.view, zU - XU, 496 & UU.flags, this.cache.maybeReuse(UU)) : this.cache.reuse(UU);
                256 & QU.flags ? (QU.flags &= -2, this.builder.addBlockWidget(QU)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(QU, cU, yU), yU = cU.length)
              }
            else if (UU.isText()) this.builder.ensureLine(null), XU || zU != UU.length || this.cache.reused.has(UU) ? (this.cache.add(UU), this.builder.addText(UU.text.slice(XU, zU), cU, yU)) : this.builder.addText(UU.text, cU, yU, this.cache.reuse(UU)), yU = cU.length;
            else if (UU.isLine()) UU.flags &= -2, this.cache.reused.set(UU, 1), this.builder.addLine(UU);
            else if (UU instanceof Rz) this.cache.add(UU);
            else {
              if (!(UU instanceof Gz)) return !1;
              this.builder.ensureLine(null), this.builder.addMark(UU, cU, yU), this.cache.reused.set(UU, 1), yU = cU.length
            }
            this.openWidget = !1
          },
          enter: UU => {
            UU.isLine() ? this.builder.addLineStart(UU.attrs, this.cache.maybeReuse(UU)) : (this.cache.add(UU), UU instanceof Gz && cU.unshift(UU.mark)), this.openWidget = !1
          },
          leave: UU => {
            UU.isLine() ? cU.length && (cU.length = yU = 0) : UU instanceof Gz && (cU.shift(), yU = Math.min(yU, cU.length))
          },
          break: () => {
            this.builder.addBreak(), this.openWidget = !1
          }
        }), this.text.skip(UU)
      }
      emit(UU, XU) {
        let zU = null,
          yU = this.builder,
          QU = 0,
          AU = cU.D.spans(this.hy, UU, XU, {
            point: (UU, XU, cU, AU, FU, oU) => {
              if (cU instanceof uU) {
                if (this.disallowBlockEffectsFor[oU]) {
                  if (cU.block) throw new RangeError("Block decorations may not be specified via plugins");
                  if (XU > this.view.state.doc.lineAt(UU).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins")
                }
                if (QU = AU.length, FU > AU.length) yU.continueWidget(XU - UU);
                else {
                  let QU = cU.widget || (cU.block ? rz.block : rz.inline),
                    oU = function(UU) {
                      let XU = UU.isReplace ? (UU.startSide < 0 ? 64 : 0) | (UU.endSide > 0 ? 128 : 0) : UU.startSide > 0 ? 32 : 16;
                      UU.block && (XU |= 256);
                      return XU
                    }(cU),
                    DU = this.cache.findWidget(QU, XU - UU, oU) || Zz.of(QU, this.view, XU - UU, oU);
                  cU.block ? (cU.startSide > 0 && yU.addLineStartIfNotCovered(zU), yU.addBlockWidget(DU)) : (yU.ensureLine(zU), yU.addInlineWidget(DU, AU, FU))
                }
                zU = null
              } else zU = function(UU, XU) {
                let zU = XU.spec.attributes,
                  cU = XU.spec.class;
                if (!zU && !cU) return UU;
                UU || (UU = {
                  class: "cm-line"
                });
                zU && WU(zU, UU);
                cU && (UU.class += " " + cU);
                return UU
              }(zU, cU);
              XU > UU && this.text.skip(XU - UU)
            },
            span: (UU, XU, cU, QU) => {
              for (let AU = UU; AU < XU;) {
                let FU = this.text.next(Math.min(512, XU - AU));
                null == FU ? (yU.addLineStartIfNotCovered(zU), yU.addBreak(), AU++) : (yU.ensureLine(zU), yU.addText(FU, cU, AU == UU ? QU : cU.length), AU += FU.length), zU = null
              }
            }
          });
        yU.addLineStartIfNotCovered(zU), this.openWidget = AU > QU, this.openMarks = AU
      }
      forward(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        XU - UU <= 10 ? this.old.advance(XU - UU, zU, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(XU - UU - 10, -1), this.old.advance(5, zU, this.reuseWalker))
      }
      getCompositionContext(UU) {
        let XU = [],
          zU = null;
        for (let cU = UU.parentNode;; cU = cU.parentNode) {
          let UU = Nz.get(cU);
          if (cU == this.view.contentDOM) break;
          UU instanceof Gz ? XU.push(UU) : (null === UU || void 0 === UU ? void 0 : UU.isLine()) ? zU = UU : UU instanceof tz || ("DIV" != cU.nodeName || zU || cU == this.view.contentDOM ? zU || XU.push(Gz.of(new SU({
            tagName: cU.nodeName.toLowerCase(),
            attributes: CU(cU)
          }), cU)) : zU = new gz(cU, Oz))
        }
        return {
          line: zU,
          marks: XU
        }
      }
    }

    function qz(UU, XU) {
      let zU = UU => {
        for (let cU of UU.children)
          if ((XU ? cU.isText() : cU.length) || zU(cU)) return !0;
        return !1
      };
      return zU(UU)
    }
    const Oz = {
      class: "cm-line"
    };

    function Sz(UU) {
      let XU = Nz.get(UU);
      return XU && XU.setDOM(UU.cloneNode()), UU
    }
    class rz extends wU {
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
    rz.inline = new rz("span"), rz.block = new rz("div");
    const uz = new class extends wU {
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
    class fz {
      constructor(UU) {
        this.view = UU, this.hy = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = OU.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new az(UU, UU.contentDOM), this.updateInner([new Dz(0, 0, 0, UU.state.doc.length)], null)
      }
      update(UU) {
        var XU;
        let zU = UU.changedRanges;
        this.minWidth > 0 && zU.length && (zU.every((UU => {
          let {
            fromA: XU,
            toA: zU
          } = UU;
          return zU < this.minWidthFrom || XU > this.minWidthTo
        })) ? (this.minWidthFrom = UU.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = UU.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(UU);
        let yU = -1;
        this.view.inputState.composing >= 0 && !this.view.observer.editContext && ((null === (XU = this.domChanged) || void 0 === XU ? void 0 : XU.newSel) ? yU = this.domChanged.newSel.head : function(UU, XU) {
          let zU = !1;
          XU && UU.iterChangedRanges(((UU, cU) => {
            UU < XU.to && cU > XU.from && (zU = !0)
          }));
          return zU
        }(UU.changes, this.hasComposition) || UU.selectionSet || (yU = UU.state.selection.main.head));
        let QU = yU > -1 ? function(UU, XU, zU) {
          let cU = Hz(UU, zU);
          if (!cU) return null;
          let {
            node: yU,
            from: QU,
            to: AU
          } = cU, FU = yU.nodeValue;
          if (/[\n\r]/.test(FU)) return null;
          if (UU.state.doc.sliceString(cU.from, cU.to) != FU) return null;
          let oU = XU.invertedDesc;
          return {
            range: new Dz(oU.mapPos(QU), oU.mapPos(AU), QU, AU),
            text: yU
          }
        }(this.view, UU.changes, yU) : null;
        if (this.domChanged = null, this.hasComposition) {
          let {
            from: XU,
            to: cU
          } = this.hasComposition;
          zU = new Dz(XU, cU, UU.changes.mapPos(XU, -1), UU.changes.mapPos(cU, 1)).addToSet(zU.slice())
        }
        this.hasComposition = QU ? {
          from: QU.range.fromB,
          to: QU.range.toB
        } : null, (PU.ie || PU.chrome) && !QU && UU && UU.state.doc.lines != UU.startState.doc.lines && (this.forceSelection = !0);
        let AU = this.hy,
          FU = this.blockWrappers;
        this.updateDeco();
        let oU = function(UU, XU, zU) {
          let yU = new Mz;
          return cU.D.compare(UU, XU, zU, yU), yU.changes
        }(AU, this.hy, UU.changes);
        oU.length && (zU = Dz.extendWithRanges(zU, oU));
        let DU = function(UU, XU, zU) {
          let yU = new vz;
          return cU.D.compare(UU, XU, zU, yU), yU.changes
        }(FU, this.blockWrappers, UU.changes);
        return DU.length && (zU = Dz.extendWithRanges(zU, DU)), QU && !zU.some((UU => UU.fromA <= QU.range.fromA && UU.toA >= QU.range.toA)) && (zU = QU.range.addToSet(zU.slice())), !(2 & this.tile.flags && 0 == zU.length) && (this.updateInner(zU, QU), UU.transactions.length && (this.lastUpdate = Date.now()), !0)
      }
      updateInner(UU, XU) {
        this.view.viewState.mustMeasureContent = !0;
        let {
          observer: zU
        } = this.view;
        zU.ignore((() => {
          if (XU || UU.length) {
            let zU = this.tile,
              cU = new wz(this.view, zU, this.blockWrappers, this.hy, this.dynamicDecorationMap);
            XU && Nz.get(XU.text) && cU.cache.reused.set(Nz.get(XU.text), 2), this.tile = cU.run(UU, XU), iz(zU, cU.cache.reused)
          }
          this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
          let cU = PU.chrome || PU.ios ? {
            node: zU.selectionRange.focusNode,
            written: !1
          } : void 0;
          this.tile.sync(cU), !cU || !cU.written && zU.selectionRange.focusNode == cU.node && this.tile.dom.contains(cU.node) || (this.forceSelection = !0), this.tile.dom.style.height = ""
        }));
        let cU = [];
        if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
          for (let yU of this.tile.children) yU.isWidget() && yU.widget instanceof Vz && cU.push(yU.dom);
        zU.updateGaps(cU)
      }
      updateEditContextFormatting(UU) {
        this.editContextFormatting = this.editContextFormatting.map(UU.changes);
        for (let XU of UU.transactions)
          for (let UU of XU.effects) UU.is(mX) && (this.editContextFormatting = UU.value)
      }
      updateSelection() {
        let UU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this.view.observer.selectionRange.focusNode || this.view.observer.readSelectionRange();
        let {
          dom: XU
        } = this.tile, zU = this.view.root.activeElement, cU = zU == XU, yU = !cU && !(this.view.state.facet(xX) || XU.tabIndex > -1) && VU(XU, this.view.observer.selectionRange) && !(zU && XU.contains(zU));
        if (!(cU || UU || yU)) return;
        let QU = this.forceSelection;
        this.forceSelection = !1;
        let AU, FU, oU = this.view.state.selection.main;
        if (oU.empty ? FU = AU = this.inlineDOMNearPos(oU.anchor, oU.assoc || 1) : (FU = this.inlineDOMNearPos(oU.head, oU.head == oU.from ? 1 : -1), AU = this.inlineDOMNearPos(oU.anchor, oU.anchor == oU.from ? 1 : -1)), PU.gecko && oU.empty && !this.hasComposition && (1 == (DU = AU).node.nodeType && DU.node.firstChild && (0 == DU.offset || "false" == DU.node.childNodes[DU.offset - 1].contentEditable) && (DU.offset == DU.node.childNodes.length || "false" == DU.node.childNodes[DU.offset].contentEditable))) {
          let UU = document.createTextNode("");
          this.view.observer.ignore((() => AU.node.insertBefore(UU, AU.node.childNodes[AU.offset] || null))), AU = FU = new oX(UU, 0), QU = !0
        }
        var DU;
        let EU = this.view.observer.selectionRange;
        !QU && EU.focusNode && (nU(AU.node, AU.offset, EU.anchorNode, EU.anchorOffset) && nU(FU.node, FU.offset, EU.focusNode, EU.focusOffset) || this.suppressWidgetCursorChange(EU, oU)) || (this.view.observer.ignore((() => {
          PU.android && PU.chrome && XU.contains(EU.focusNode) && function(UU, XU) {
            for (let zU = UU; zU && zU != XU; zU = zU.assignedSlot || zU.parentNode)
              if (1 == zU.nodeType && "false" == zU.contentEditable) return !0;
            return !1
          }(EU.focusNode, XU) && (XU.blur(), XU.focus({
            preventScroll: !0
          }));
          let UU = MU(this.view.root);
          if (UU)
            if (oU.empty) {
              if (PU.gecko) {
                let UU = (cU = AU.node, QU = AU.offset, 1 != cU.nodeType ? 0 : (QU && "false" == cU.childNodes[QU - 1].contentEditable ? 1 : 0) | (QU < cU.childNodes.length && "false" == cU.childNodes[QU].contentEditable ? 2 : 0));
                if (UU && 3 != UU) {
                  let XU = (1 == UU ? AX : FX)(AU.node, AU.offset);
                  XU && (AU = new oX(XU.node, XU.offset))
                }
              }
              UU.collapse(AU.node, AU.offset), null != oU.bidiLevel && void 0 !== UU.caretBidiLevel && (UU.caretBidiLevel = oU.bidiLevel)
            } else if (UU.extend) {
            UU.collapse(AU.node, AU.offset);
            try {
              UU.extend(FU.node, FU.offset)
            } catch (DU) {}
          } else {
            let XU = document.createRange();
            oU.anchor > oU.head && ([AU, FU] = [FU, AU]), XU.setEnd(FU.node, FU.offset), XU.setStart(AU.node, AU.offset), UU.removeAllRanges(), UU.addRange(XU)
          } else;
          var cU, QU;
          yU && this.view.root.activeElement == XU && (XU.blur(), zU && zU.focus())
        })), this.view.observer.setSelectionRange(AU, FU)), this.impreciseAnchor = AU.precise ? null : new oX(EU.anchorNode, EU.anchorOffset), this.impreciseHead = FU.precise ? null : new oX(EU.focusNode, EU.focusOffset)
      }
      suppressWidgetCursorChange(UU, XU) {
        return this.hasComposition && XU.empty && nU(UU.focusNode, UU.focusOffset, UU.anchorNode, UU.anchorOffset) && this.posFromDOM(UU.focusNode, UU.focusOffset) == XU.head
      }
      enforceCursorAssoc() {
        if (this.hasComposition) return;
        let {
          view: UU
        } = this, XU = UU.state.selection.main, zU = MU(UU.root), {
          anchorNode: cU,
          anchorOffset: yU
        } = UU.observer.selectionRange;
        if (!zU || !XU.empty || !XU.assoc || !zU.modify) return;
        let QU = this.lineAt(XU.head, XU.assoc);
        if (!QU) return;
        let AU = QU.posAtStart;
        if (XU.head == AU || XU.head == AU + QU.length) return;
        let FU = this.coordsAt(XU.head, -1),
          oU = this.coordsAt(XU.head, 1);
        if (!FU || !oU || FU.bottom > oU.top) return;
        let DU = this.domAtPos(XU.head + XU.assoc, XU.assoc);
        zU.collapse(DU.node, DU.offset), zU.modify("move", XU.assoc < 0 ? "forward" : "backward", "lineboundary"), UU.observer.readSelectionRange();
        let EU = UU.observer.selectionRange;
        UU.docView.posFromDOM(EU.anchorNode, EU.anchorOffset) != XU.from && zU.collapse(cU, yU)
      }
      posFromDOM(UU, XU) {
        let zU = this.tile.nearest(UU);
        if (!zU) return 2 & this.tile.dom.compareDocumentPosition(UU) ? 0 : this.view.state.doc.length;
        let cU = zU.posAtStart;
        if (!zU.isComposite()) return zU.isText() ? UU == zU.dom ? cU + XU : cU + (XU ? zU.length : 0) : cU;
        {
          let yU;
          if (UU == zU.dom) yU = zU.dom.childNodes[XU];
          else {
            let cU = 0 == JU(UU) ? 0 : 0 == XU ? -1 : 1;
            for (;;) {
              let XU = UU.parentNode;
              if (XU == zU.dom) break;
              0 == cU && XU.firstChild != XU.lastChild && (cU = UU == XU.firstChild ? -1 : 1), UU = XU
            }
            yU = cU < 0 ? UU : UU.nextSibling
          }
          if (yU == zU.dom.firstChild) return cU;
          for (; yU && !Nz.get(yU);) yU = yU.nextSibling;
          if (!yU) return cU + zU.length;
          for (let UU = 0, XU = cU;; UU++) {
            let cU = zU.children[UU];
            if (cU.dom == yU) return XU;
            XU += cU.length + cU.breakAfter
          }
        }
      }
      domAtPos(UU, XU) {
        let {
          tile: zU,
          offset: cU
        } = this.tile.resolveBlock(UU, XU);
        return zU.isWidget() ? zU.domPosFor(UU, XU) : zU.domIn(cU, XU)
      }
      inlineDOMNearPos(UU, XU) {
        let zU, cU, yU = -1,
          QU = !1,
          AU = -1,
          FU = !1;
        return this.tile.blockTiles(((XU, oU) => {
          if (XU.isWidget()) {
            if (32 & XU.flags && oU >= UU) return !0;
            16 & XU.flags && (QU = !0)
          } else {
            let DU = oU + XU.length;
            if (oU <= UU && (zU = XU, yU = UU - oU, QU = DU < UU), DU >= UU && !cU && (cU = XU, AU = UU - oU, FU = oU > UU), oU > UU && cU) return !0
          }
        })), zU || cU ? (QU && cU ? zU = null : FU && zU && (cU = null), zU && XU < 0 || !cU ? zU.domIn(yU, XU) : cU.domIn(AU, XU)) : this.domAtPos(UU, XU)
      }
      coordsAt(UU, XU) {
        let {
          tile: zU,
          offset: cU
        } = this.tile.resolveBlock(UU, XU);
        return zU.isWidget() ? zU.widget instanceof Vz ? null : zU.coordsInWidget(cU, XU, !0) : zU.coordsIn(cU, XU)
      }
      lineAt(UU, XU) {
        let {
          tile: zU
        } = this.tile.resolveBlock(UU, XU);
        return zU.isLine() ? zU : null
      }
      coordsForChar(UU) {
        let {
          tile: XU,
          offset: zU
        } = this.tile.resolveBlock(UU, 1);
        if (!XU.isLine()) return null;
        return function UU(XU, zU) {
          if (XU.isComposite())
            for (let cU of XU.children) {
              if (cU.length >= zU) {
                let XU = UU(cU, zU);
                if (XU) return XU
              }
              if ((zU -= cU.length) < 0) break
            } else if (XU.isText() && zU < XU.length) {
              let UU = (0, cU._)(XU.text, zU);
              if (UU == zU) return null;
              let yU = cX(XU.dom, zU, UU).getClientRects();
              for (let XU = 0; XU < yU.length; XU++) {
                let UU = yU[XU];
                if (XU == yU.length - 1 || UU.top < UU.bottom && UU.left < UU.right) return UU
              }
            } return null
        }(XU, zU)
      }
      measureVisibleLineHeights(UU) {
        let XU = [],
          {
            from: zU,
            to: cU
          } = UU,
          yU = this.view.contentDOM.clientWidth,
          QU = yU > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
          AU = -1,
          FU = this.view.textDirection == DX.LTR,
          oU = 0,
          DU = (UU, EU, YU) => {
            for (let NU = 0; NU < UU.children.length && !(EU > cU); NU++) {
              let cU = UU.children[NU],
                IU = EU + cU.length,
                pU = cU.dom.getBoundingClientRect(),
                {
                  height: aU
                } = pU;
              if (YU && !NU && (oU += pU.top - YU.top), cU instanceof tz) IU > zU && DU(cU, EU, pU);
              else if (EU >= zU && (oU > 0 && XU.push(-oU), XU.push(aU + oU), oU = 0, QU)) {
                let UU = cU.dom.lastChild,
                  XU = UU ? sU(UU) : [];
                if (XU.length) {
                  let UU = XU[XU.length - 1],
                    zU = FU ? UU.right - pU.left : pU.right - UU.left;
                  zU > AU && (AU = zU, this.minWidth = yU, this.minWidthFrom = EU, this.minWidthTo = IU)
                }
              }
              YU && NU == UU.children.length - 1 && (oU += YU.bottom - pU.bottom), EU = IU + cU.breakAfter
            }
          };
        return DU(this.tile, 0, null), XU
      }
      textDirectionAt(UU) {
        let {
          tile: XU
        } = this.tile.resolveBlock(UU, 1);
        return "rtl" == getComputedStyle(XU.dom).direction ? DX.RTL : DX.LTR
      }
      measureTextSize() {
        let UU = this.tile.blockTiles((UU => {
          if (UU.isLine() && UU.children.length && UU.length <= 20) {
            let XU, zU = 0;
            for (let cU of UU.children) {
              if (!cU.isText() || /[^ -~]/.test(cU.text)) return;
              let UU = sU(cU.dom);
              if (1 != UU.length) return;
              zU += UU[0].width, XU = UU[0].height
            }
            if (zU) return {
              lineHeight: UU.dom.getBoundingClientRect().height,
              charWidth: zU / UU.length,
              textHeight: XU
            }
          }
        }));
        if (UU) return UU;
        let XU, zU, cU, yU = document.createElement("div");
        return yU.className = "cm-line", yU.style.width = "99999px", yU.style.position = "absolute", yU.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore((() => {
          this.tile.dom.appendChild(yU);
          let UU = sU(yU.firstChild)[0];
          XU = yU.getBoundingClientRect().height, zU = UU && UU.width ? UU.width / 27 : 7, cU = UU && UU.height ? UU.height : XU, yU.remove()
        })), {
          lineHeight: XU,
          charWidth: zU,
          textHeight: cU
        }
      }
      computeBlockGapDeco() {
        let UU = [],
          XU = this.view.viewState;
        for (let zU = 0, cU = 0;; cU++) {
          let yU = cU == XU.viewports.length ? null : XU.viewports[cU],
            QU = yU ? yU.from - 1 : this.view.state.doc.length;
          if (QU > zU) {
            let cU = (XU.lineBlockAt(QU).bottom - XU.lineBlockAt(zU).top) / this.view.scaleY;
            UU.push(OU.replace({
              widget: new Vz(cU),
              block: !0,
              inclusive: !0,
              isBlockGap: !0
            }).range(zU, QU))
          }
          if (!yU) break;
          zU = yU.to + 1
        }
        return OU.set(UU)
      }
      updateDeco() {
        let UU = 1,
          XU = this.view.state.facet(Uz).map((XU => (this.dynamicDecorationMap[UU++] = "function" == typeof XU) ? XU(this.view) : XU)),
          zU = !1,
          yU = this.view.state.facet(zz).map(((UU, XU) => {
            let cU = "function" == typeof UU;
            return cU && (zU = !0), cU ? UU(this.view) : UU
          }));
        for (yU.length && (this.dynamicDecorationMap[UU++] = zU, XU.push(cU.D.join(yU))), this.hy = [this.editContextFormatting, ...XU, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; UU < this.hy.length;) this.dynamicDecorationMap[UU++] = !1;
        this.blockWrappers = this.view.state.facet(Xz).map((UU => "function" == typeof UU ? UU(this.view) : UU))
      }
      scrollIntoView(UU) {
        var XU;
        if (UU.isSnapshot) {
          let XU = this.view.viewState.lineBlockAt(UU.range.head);
          return this.view.scrollDOM.scrollTop = XU.top - UU.yMargin, void(this.view.scrollDOM.scrollLeft = UU.xMargin)
        }
        for (let EU of this.view.state.facet(VX)) try {
          if (EU(this.view, UU.range, UU)) return !0
        } catch (DU) {
          lX(this.view.state, DU, "scroll handler")
        }
        let zU, {
            range: cU
          } = UU,
          yU = this.coordsAt(cU.head, null !== (XU = cU.assoc) && void 0 !== XU ? XU : cU.empty ? 0 : cU.head > cU.anchor ? -1 : 1);
        if (!yU) return;
        !cU.empty && (zU = this.coordsAt(cU.anchor, cU.anchor > cU.head ? -1 : 1)) && (yU = {
          left: Math.min(yU.left, zU.left),
          top: Math.min(yU.top, zU.top),
          right: Math.max(yU.right, zU.right),
          bottom: Math.max(yU.bottom, zU.bottom)
        });
        let QU = Fz(this.view),
          AU = {
            left: yU.left - QU.left,
            top: yU.top - QU.top,
            right: yU.right + QU.right,
            bottom: yU.bottom + QU.bottom
          },
          {
            offsetWidth: FU,
            offsetHeight: oU
          } = this.view.scrollDOM;
        if (function(UU, XU, zU, cU, yU, QU, AU, FU) {
            let oU = UU.ownerDocument,
              DU = oU.defaultView || window;
            for (let EU = UU, YU = !1; EU && !YU;)
              if (1 == EU.nodeType) {
                let UU, NU = EU == oU.body,
                  IU = 1,
                  pU = 1;
                if (NU) UU = KU(DU);
                else {
                  if (/^(fixed|sticky)$/.test(getComputedStyle(EU).position) && (YU = !0), EU.scrollHeight <= EU.clientHeight && EU.scrollWidth <= EU.clientWidth) {
                    EU = EU.assignedSlot || EU.parentNode;
                    continue
                  }
                  let XU = EU.getBoundingClientRect();
                  ({
                    scaleX: IU,
                    scaleY: pU
                  } = bU(EU, XU)), UU = {
                    left: XU.left,
                    right: XU.left + EU.clientWidth * IU,
                    top: XU.top,
                    bottom: XU.top + EU.clientHeight * pU
                  }
                }
                let aU = 0,
                  tU = 0;
                if ("nearest" == yU) XU.top < UU.top + AU ? (tU = XU.top - (UU.top + AU), zU > 0 && XU.bottom > UU.bottom + tU && (tU = XU.bottom - UU.bottom + AU)) : XU.bottom > UU.bottom - AU && (tU = XU.bottom - UU.bottom + AU, zU < 0 && XU.top - tU < UU.top && (tU = XU.top - (UU.top + AU)));
                else {
                  let cU = XU.bottom - XU.top,
                    QU = UU.bottom - UU.top;
                  tU = ("center" == yU && cU <= QU ? XU.top + cU / 2 - QU / 2 : "start" == yU || "center" == yU && zU < 0 ? XU.top - AU : XU.bottom - QU + AU) - UU.top
                }
                if ("nearest" == cU ? XU.left < UU.left + QU ? (aU = XU.left - (UU.left + QU), zU > 0 && XU.right > UU.right + aU && (aU = XU.right - UU.right + QU)) : XU.right > UU.right - QU && (aU = XU.right - UU.right + QU, zU < 0 && XU.left < UU.left + aU && (aU = XU.left - (UU.left + QU))) : aU = ("center" == cU ? XU.left + (XU.right - XU.left) / 2 - (UU.right - UU.left) / 2 : "start" == cU == FU ? XU.left - QU : XU.right - (UU.right - UU.left) + QU) - UU.left, aU || tU)
                  if (NU) DU.scrollBy(aU, tU);
                  else {
                    let UU = 0,
                      zU = 0;
                    if (tU) {
                      let UU = EU.scrollTop;
                      EU.scrollTop += tU / pU, zU = (EU.scrollTop - UU) * pU
                    }
                    if (aU) {
                      let XU = EU.scrollLeft;
                      EU.scrollLeft += aU / IU, UU = (EU.scrollLeft - XU) * IU
                    }
                    XU = {
                      left: XU.left - UU,
                      top: XU.top - zU,
                      right: XU.right - UU,
                      bottom: XU.bottom - zU
                    }, UU && Math.abs(UU - aU) < 1 && (cU = "nearest"), zU && Math.abs(zU - tU) < 1 && (yU = "nearest")
                  } if (NU) break;
                (XU.top < UU.top || XU.bottom > UU.bottom || XU.left < UU.left || XU.right > UU.right) && (XU = {
                  left: Math.max(XU.left, UU.left),
                  right: Math.min(XU.right, UU.right),
                  top: Math.max(XU.top, UU.top),
                  bottom: Math.min(XU.bottom, UU.bottom)
                }), EU = EU.assignedSlot || EU.parentNode
              } else {
                if (11 != EU.nodeType) break;
                EU = EU.host
              }
          }(this.view.scrollDOM, AU, cU.head < cU.anchor ? -1 : 1, UU.x, UU.y, Math.max(Math.min(UU.xMargin, FU), -FU), Math.max(Math.min(UU.yMargin, oU), -oU), this.view.textDirection == DX.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (yU.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || yU.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
          let UU = this.view.docView.lineAt(cU.head, 1);
          UU && UU.dom.scrollIntoView({
            block: "nearest"
          })
        }
      }
      lineHasWidget(UU) {
        let XU = UU => UU.isWidget() || UU.children.some(XU);
        return XU(this.tile.resolveBlock(UU, 1).tile)
      }
      destroy() {
        iz(this.tile)
      }
    }

    function iz(UU, XU) {
      let zU = null === XU || void 0 === XU ? void 0 : XU.get(UU);
      if (1 != zU) {
        null == zU && UU.destroy();
        for (let zU of UU.children) iz(zU, XU)
      }
    }

    function Hz(UU, XU) {
      let zU = UU.observer.selectionRange;
      if (!zU.focusNode) return null;
      let cU = AX(zU.focusNode, zU.focusOffset),
        yU = FX(zU.focusNode, zU.focusOffset),
        QU = cU || yU;
      if (yU && cU && yU.node != cU.node) {
        let XU = Nz.get(yU.node);
        if (!XU || XU.isText() && XU.text != yU.node.nodeValue) QU = yU;
        else if (UU.docView.lastCompositionAfterCursor) {
          let UU = Nz.get(cU.node);
          !UU || UU.isText() && UU.text != cU.node.nodeValue || (QU = yU)
        }
      }
      if (UU.docView.lastCompositionAfterCursor = QU != cU, !QU) return null;
      let AU = XU - QU.offset;
      return {
        from: AU,
        to: AU + QU.node.nodeValue.length,
        node: QU.node
      }
    }
    let Mz = class {
      constructor() {
        this.changes = []
      }
      compareRange(UU, XU) {
        iU(UU, XU, this.changes)
      }
      comparePoint(UU, XU) {
        iU(UU, XU, this.changes)
      }
      boundChange(UU) {
        iU(UU, UU, this.changes)
      }
    };
    class vz {
      constructor() {
        this.changes = []
      }
      compareRange(UU, XU) {
        iU(UU, XU, this.changes)
      }
      comparePoint() {}
      boundChange(UU) {
        iU(UU, UU, this.changes)
      }
    }
    class Vz extends wU {
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

    function sz(UU, XU, zU) {
      let cU = UU.lineBlockAt(XU);
      if (Array.isArray(cU.type)) {
        let UU;
        for (let yU of cU.type) {
          if (yU.from > XU) break;
          if (!(yU.to < XU)) {
            if (yU.from < XU && yU.to > XU) return yU;
            UU && (yU.type != qU.Text || UU.type == yU.type && !(zU < 0 ? yU.from < XU : yU.to > XU)) || (UU = yU)
          }
        }
        return UU || cU
      }
      return cU
    }

    function nz(UU, XU, zU, cU) {
      let yU = UU.state.doc.lineAt(XU.head),
        QU = UU.bidiSpans(yU),
        AU = UU.textDirectionAt(yU.from);
      for (let FU = XU, oU = null;;) {
        let XU = eX(yU, QU, AU, FU, zU),
          DU = LX;
        if (!XU) {
          if (yU.number == (zU ? UU.state.doc.lines : 1)) return FU;
          DU = "\n", yU = UU.state.doc.line(yU.number + (zU ? 1 : -1)), QU = UU.bidiSpans(yU), XU = UU.visualLineSide(yU, !zU)
        }
        if (oU) {
          if (!oU(DU)) return FU
        } else {
          if (!cU) return XU;
          oU = cU(DU)
        }
        FU = XU
      }
    }

    function mz(UU, XU, zU) {
      for (;;) {
        let cU = 0;
        for (let yU of UU) yU.between(XU - 1, XU + 1, ((UU, yU, QU) => {
          if (XU > UU && XU < yU) {
            let QU = cU || zU || (XU - UU < yU - XU ? -1 : 1);
            XU = QU < 0 ? UU : yU, cU = QU
          }
        }));
        if (!cU) return XU
      }
    }

    function lz(UU, XU) {
      let zU = null;
      for (let yU = 0; yU < XU.Qt.length; yU++) {
        let QU = XU.Qt[yU],
          AU = null;
        if (QU.empty) {
          let XU = mz(UU, QU.from, 0);
          XU != QU.from && (AU = cU.k.cursor(XU, -1))
        } else {
          let XU = mz(UU, QU.from, -1),
            zU = mz(UU, QU.to, 1);
          XU == QU.from && zU == QU.to || (AU = cU.k.range(QU.from == QU.anchor ? XU : zU, QU.from == QU.head ? XU : zU))
        }
        AU && (zU || (zU = XU.Qt.slice()), zU[yU] = AU)
      }
      return zU ? cU.k.create(zU, XU.mainIndex) : XU
    }

    function xz(UU, XU, zU) {
      let yU = mz(UU.state.facet(cz).map((XU => XU(UU))), zU.from, XU.head > zU.from ? -1 : 1);
      return yU == zU.from ? zU : cU.k.cursor(yU, yU < zU.from ? 1 : -1)
    }
    class Jz {
      constructor(UU, XU) {
        this.pos = UU, this.assoc = XU
      }
    }

    function jz(UU, XU, zU, yU) {
      let QU, AU = UU.contentDOM.getBoundingClientRect(),
        FU = AU.top + UU.viewState.paddingTop,
        {
          x: oU,
          y: DU
        } = XU,
        EU = DU - FU;
      for (;;) {
        if (EU < 0) return new Jz(0, 1);
        if (EU > UU.viewState.docHeight) return new Jz(UU.state.doc.length, -1);
        if (QU = UU.elementAtHeight(EU), null == yU) break;
        if (QU.type == qU.Text) {
          if (yU < 0 ? QU.to < UU.viewport.from : QU.from > UU.viewport.to) break;
          let XU = UU.docView.coordsAt(yU < 0 ? QU.from : QU.to, yU > 0 ? -1 : 1);
          if (XU && (yU < 0 ? XU.top <= EU + FU : XU.bottom >= EU + FU)) break
        }
        let XU = UU.viewState.heightOracle.textHeight / 2;
        EU = yU > 0 ? QU.bottom + XU : QU.top - XU
      }
      if (UU.viewport.from >= QU.to || UU.viewport.to <= QU.from) {
        if (zU) return null;
        if (QU.type == qU.Text) {
          let XU = function(UU, XU, zU, yU, QU) {
            let AU = Math.round((yU - XU.left) * UU.defaultCharacterWidth);
            if (UU.lineWrapping && zU.height > 1.5 * UU.defaultLineHeight) {
              let XU = UU.viewState.heightOracle.textHeight;
              AU += Math.floor((QU - zU.top - .5 * (UU.defaultLineHeight - XU)) / XU) * UU.viewState.heightOracle.lineLength
            }
            let FU = UU.state.sliceDoc(zU.from, zU.to);
            return zU.from + (0, cU.cb)(FU, AU, UU.state.tabSize)
          }(UU, AU, QU, oU, DU);
          return new Jz(XU, XU == QU.from ? 1 : -1)
        }
      }
      if (QU.type != qU.Text) return EU < (QU.top + QU.bottom) / 2 ? new Jz(QU.from, 1) : new Jz(QU.to, -1);
      let YU = UU.docView.lineAt(QU.from, 2);
      return YU && YU.length == QU.length || (YU = UU.docView.lineAt(QU.from, -2)), new Kz(UU, oU, DU, UU.textDirectionAt(QU.from)).scanTile(YU, QU.from)
    }
    class Kz {
      constructor(UU, XU, zU, cU) {
        this.view = UU, this.x = XU, this.y = zU, this.baseDir = cU, this.line = null, this.spans = null
      }
      bidiSpansAt(UU) {
        return (!this.line || this.line.from > UU || this.line.to < UU) && (this.line = this.view.state.doc.lineAt(UU), this.spans = this.view.bidiSpans(this.line)), this
      }
      baseDirAt(UU, XU) {
        let {
          line: zU,
          spans: cU
        } = this.bidiSpansAt(UU);
        return cU[GX.find(cU, UU - zU.from, -1, XU)].level == this.baseDir
      }
      dirAt(UU, XU) {
        let {
          line: zU,
          spans: cU
        } = this.bidiSpansAt(UU);
        return cU[GX.find(cU, UU - zU.from, -1, XU)].dir
      }
      bidiIn(UU, XU) {
        let {
          spans: zU,
          line: cU
        } = this.bidiSpansAt(UU);
        return zU.length > 1 || zU.length && (zU[0].level != this.baseDir || zU[0].to + cU.from < XU)
      }
      scan(UU, XU) {
        let zU, cU, yU, QU = 0,
          AU = UU.length - 1,
          FU = new Set,
          oU = this.bidiIn(UU[0], UU[AU]),
          DU = -1,
          EU = 1e9;
        UU: for (; QU < AU;) {
          let YU = AU - QU,
            NU = QU + AU >> 1;
          XU: if (FU.has(NU)) {
            let UU = QU + Math.floor(Math.random() * YU);
            for (let XU = 0; XU < YU; XU++) {
              if (!FU.has(UU)) {
                NU = UU;
                break XU
              }
              UU++, UU == AU && (UU = QU)
            }
            break UU
          } FU.add(NU);
          let IU = XU(NU);
          if (IU)
            for (let XU = 0; XU < IU.length; XU++) {
              let FU = IU[XU],
                YU = 0;
              if (!(0 == FU.width && IU.length > 1)) {
                if (FU.bottom < this.y)(!zU || zU.bottom < FU.bottom) && (zU = FU), YU = 1;
                else if (FU.top > this.y)(!cU || cU.top > FU.top) && (cU = FU), YU = -1;
                else {
                  let UU = FU.left > this.x ? this.x - FU.left : FU.right < this.x ? this.x - FU.right : 0,
                    XU = Math.abs(UU);
                  XU < EU && (DU = NU, EU = XU, yU = FU), UU && (YU = UU < 0 == (this.baseDir == DX.LTR) ? -1 : 1)
                } - 1 != YU || oU && !this.baseDirAt(UU[NU], 1) ? 1 != YU || oU && !this.baseDirAt(UU[NU + 1], -1) || (QU = NU + 1) : AU = NU
              }
            }
        }
        if (!yU) {
          let yU = zU && (!cU || this.y - zU.bottom < cU.top - this.y) ? zU : cU;
          return this.y = (yU.top + yU.bottom) / 2, this.scan(UU, XU)
        }
        if (EU) {
          if (zU && zU.bottom > yU.top) return this.y = zU.bottom - 1, this.scan(UU, XU);
          if (cU && cU.top < yU.bottom) return this.y = cU.top + 1, this.scan(UU, XU)
        }
        let YU = (oU ? this.dirAt(UU[DU], 1) : this.baseDir) == DX.LTR;
        return {
          i: DU,
          after: this.x > (yU.left + yU.right) / 2 == YU
        }
      }
      scanText(UU, XU) {
        let zU = [];
        for (let QU = 0; QU < UU.length; QU = (0, cU._)(UU.text, QU)) zU.push(XU + QU);
        zU.push(XU + UU.length);
        let yU = this.scan(zU, (cU => {
          let yU = zU[cU] - XU,
            QU = zU[cU + 1] - XU;
          return cX(UU.dom, yU, QU).getClientRects()
        }));
        return yU.after ? new Jz(zU[yU.i + 1], -1) : new Jz(zU[yU.i], 1)
      }
      scanTile(UU, XU) {
        if (!UU.length) return new Jz(XU, 1);
        if (1 == UU.children.length) {
          let zU = UU.children[0];
          if (zU.isText()) return this.scanText(zU, XU);
          if (zU.isComposite()) return this.scanTile(zU, XU)
        }
        let zU = [XU];
        for (let AU = 0, FU = XU; AU < UU.children.length; AU++) zU.push(FU += UU.children[AU].length);
        let cU = this.scan(zU, (XU => {
            let zU = UU.children[XU];
            return 48 & zU.flags ? null : (1 == zU.dom.nodeType ? zU.dom : cX(zU.dom, 0, zU.length)).getClientRects()
          })),
          yU = UU.children[cU.i],
          QU = zU[cU.i];
        return yU.isText() ? this.scanText(yU, QU) : yU.isComposite() ? this.scanTile(yU, QU) : cU.after ? new Jz(zU[cU.i + 1], -1) : new Jz(QU, 1)
      }
    }
    const bz = "\uffff";
    class Tz {
      constructor(UU, XU) {
        this.points = UU, this.view = XU, this.text = "", this.lineSeparator = XU.state.facet(cU.n.lineSeparator)
      }
      append(UU) {
        this.text += UU
      }
      lineBreak() {
        this.text += bz
      }
      readRange(UU, XU) {
        if (!UU) return this;
        let zU = UU.parentNode;
        for (let cU = UU;;) {
          this.findPointBefore(zU, cU);
          let UU = this.text.length;
          this.readNode(cU);
          let yU = Nz.get(cU),
            QU = cU.nextSibling;
          if (QU == XU) {
            (null === yU || void 0 === yU ? void 0 : yU.breakAfter) && !QU && zU != this.view.contentDOM && this.lineBreak();
            break
          }
          let AU = Nz.get(QU);
          (yU && AU ? yU.breakAfter : (yU ? yU.breakAfter : lU(cU)) || lU(QU) && ("BR" != cU.nodeName || (null === yU || void 0 === yU ? void 0 : yU.isWidget())) && this.text.length > UU) && !Uc(QU, XU) && this.lineBreak(), cU = QU
        }
        return this.findPointBefore(zU, XU), this
      }
      readTextNode(UU) {
        let XU = UU.nodeValue;
        for (let zU of this.points) zU.node == UU && (zU.pos = this.text.length + Math.min(zU.offset, XU.length));
        for (let zU = 0, cU = this.lineSeparator ? null : /\r\n?|\n/g;;) {
          let yU, QU = -1,
            AU = 1;
          if (this.lineSeparator ? (QU = XU.indexOf(this.lineSeparator, zU), AU = this.lineSeparator.length) : (yU = cU.exec(XU)) && (QU = yU.index, AU = yU[0].length), this.append(XU.slice(zU, QU < 0 ? XU.length : QU)), QU < 0) break;
          if (this.lineBreak(), AU > 1)
            for (let XU of this.points) XU.node == UU && XU.pos > this.text.length && (XU.pos -= AU - 1);
          zU = QU + AU
        }
      }
      readNode(UU) {
        let XU = Nz.get(UU),
          zU = XU && XU.overrideDOMText;
        if (null != zU) {
          this.findPointInside(UU, zU.length);
          for (let UU = zU.iter(); !UU.next().done;) UU.lineBreak ? this.lineBreak() : this.append(UU.value)
        } else 3 == UU.nodeType ? this.readTextNode(UU) : "BR" == UU.nodeName ? UU.nextSibling && this.lineBreak() : 1 == UU.nodeType && this.readRange(UU.firstChild, null)
      }
      findPointBefore(UU, XU) {
        for (let zU of this.points) zU.node == UU && UU.childNodes[zU.offset] == XU && (zU.pos = this.text.length)
      }
      findPointInside(UU, XU) {
        for (let zU of this.points)(3 == UU.nodeType ? zU.node == UU : UU.contains(zU.node)) && (zU.pos = this.text.length + (hz(UU, zU.node, zU.offset) ? XU : 0))
      }
    }

    function hz(UU, XU, zU) {
      for (;;) {
        if (!XU || zU < JU(XU)) return !1;
        if (XU == UU) return !0;
        zU = mU(XU) + 1, XU = XU.parentNode
      }
    }

    function Uc(UU, XU) {
      let zU;
      for (; UU != XU && UU; UU = UU.nextSibling) {
        let XU = Nz.get(UU);
        if (!(null === XU || void 0 === XU ? void 0 : XU.isWidget())) return !1;
        XU && (zU || (zU = [])).push(XU)
      }
      if (zU)
        for (let cU of zU) {
          let UU = cU.overrideDOMText;
          if (null === UU || void 0 === UU ? void 0 : UU.length) return !1
        }
      return !0
    }
    class Xc {
      constructor(UU, XU) {
        this.node = UU, this.offset = XU, this.pos = -1
      }
    }
    class zc {
      constructor(UU, XU, zU, yU) {
        this.typeOver = yU, this.bounds = null, this.text = "", this.domChanged = XU > -1;
        let {
          impreciseHead: QU,
          impreciseAnchor: AU
        } = UU.docView, FU = UU.state.selection;
        if (UU.state.readOnly && XU > -1) this.newSel = null;
        else if (XU > -1 && (this.bounds = cc(UU.docView.tile, XU, zU, 0))) {
          let XU = QU || AU ? [] : function(UU) {
              let XU = [];
              if (UU.root.activeElement != UU.contentDOM) return XU;
              let {
                anchorNode: zU,
                anchorOffset: cU,
                focusNode: yU,
                focusOffset: QU
              } = UU.observer.selectionRange;
              zU && (XU.push(new Xc(zU, cU)), yU == zU && QU == cU || XU.push(new Xc(yU, QU)));
              return XU
            }(UU),
            zU = new Tz(XU, UU);
          zU.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = zU.text, this.newSel = function(UU, XU) {
            if (0 == UU.length) return null;
            let zU = UU[0].pos,
              yU = 2 == UU.length ? UU[1].pos : zU;
            return zU > -1 && yU > -1 ? cU.k.single(zU + XU, yU + XU) : null
          }(XU, this.bounds.from)
        } else {
          let XU = UU.observer.selectionRange,
            zU = QU && QU.node == XU.focusNode && QU.offset == XU.focusOffset || !vU(UU.contentDOM, XU.focusNode) ? FU.main.head : UU.docView.posFromDOM(XU.focusNode, XU.focusOffset),
            yU = AU && AU.node == XU.anchorNode && AU.offset == XU.anchorOffset || !vU(UU.contentDOM, XU.anchorNode) ? FU.main.anchor : UU.docView.posFromDOM(XU.anchorNode, XU.anchorOffset),
            oU = UU.viewport;
          if ((PU.ios || PU.chrome) && FU.main.empty && zU != yU && (oU.from > 0 || oU.to < UU.state.doc.length)) {
            let XU = Math.min(zU, yU),
              cU = Math.max(zU, yU),
              QU = oU.from - XU,
              AU = oU.to - cU;
            0 != QU && 1 != QU && 0 != XU || 0 != AU && -1 != AU && cU != UU.state.doc.length || (zU = 0, yU = UU.state.doc.length)
          }
          if (UU.inputState.composing > -1 && FU.Qt.length > 1) this.newSel = FU.replaceRange(cU.k.range(yU, zU));
          else if (UU.lineWrapping && yU == zU && (!FU.main.empty || FU.main.head != zU) && UU.inputState.lastTouchTime > Date.now() - 100) {
            let XU = UU.coordsAtPos(zU, -1),
              yU = 0;
            XU && (yU = UU.inputState.lastTouchY <= XU.bottom ? -1 : 1), this.newSel = cU.k.create([cU.k.cursor(zU, yU)])
          } else this.newSel = cU.k.single(yU, zU)
        }
      }
    }

    function cc(UU, XU, zU, cU) {
      if (UU.isComposite()) {
        let yU = -1,
          QU = -1,
          AU = -1,
          FU = -1;
        for (let oU = 0, DU = cU, EU = cU; oU < UU.children.length; oU++) {
          let cU = UU.children[oU],
            YU = DU + cU.length;
          if (DU < XU && YU > zU) return cc(cU, XU, zU, DU);
          if (YU >= XU && -1 == yU && (yU = oU, QU = DU), DU > zU && cU.dom.parentNode == UU.dom) {
            AU = oU, FU = EU;
            break
          }
          EU = YU, DU = YU + cU.breakAfter
        }
        return {
          from: QU,
          to: FU < 0 ? cU + UU.length : FU,
          startDOM: (yU ? UU.children[yU - 1].dom.nextSibling : null) || UU.dom.firstChild,
          endDOM: AU < UU.children.length && AU >= 0 ? UU.children[AU].dom : null
        }
      }
      return UU.isText() ? {
        from: cU,
        to: cU + UU.length,
        startDOM: UU.dom,
        endDOM: UU.dom.nextSibling
      } : null
    }

    function yc(UU, XU) {
      let zU, {
          newSel: yU
        } = XU,
        {
          state: QU
        } = UU,
        AU = QU.selection.main,
        FU = UU.inputState.lastKeyTime > Date.now() - 100 ? UU.inputState.lastKeyCode : -1;
      if (XU.bounds) {
        let {
          from: UU,
          to: yU
        } = XU.bounds, oU = AU.from, DU = null;
        (8 === FU || PU.android && XU.text.length < yU - UU) && (oU = AU.to, DU = "end");
        let EU, YU, NU = QU.doc.sliceString(UU, yU, bz);
        !AU.empty && AU.from >= UU && AU.to <= yU && (XU.typeOver || NU != XU.text) && NU.slice(0, AU.from - UU) == XU.text.slice(0, AU.from - UU) && NU.slice(AU.to - UU) == XU.text.slice(EU = XU.text.length - (NU.length - (AU.to - UU))) ? zU = {
          from: AU.from,
          to: AU.to,
          insert: cU.O.of(XU.text.slice(AU.from - UU, EU).split(bz))
        } : (YU = Ac(NU, XU.text, oU - UU, DU)) && (PU.chrome && 13 == FU && YU.toB == YU.from + 2 && XU.text.slice(YU.from, YU.toB) == bz + bz && YU.toB--, zU = {
          from: UU + YU.from,
          to: UU + YU.toA,
          insert: cU.O.of(XU.text.slice(YU.from, YU.toB).split(bz))
        })
      } else yU && (!UU.hasFocus && QU.facet(xX) || Fc(yU, AU)) && (yU = null);
      if (!zU && !yU) return !1;
      if ((PU.mac || PU.android) && zU && zU.from == zU.to && zU.from == AU.head - 1 && /^\. ?$/.test(zU.insert.toString()) && "off" == UU.contentDOM.getAttribute("autocorrect") ? (yU && 2 == zU.insert.length && (yU = cU.k.single(yU.main.anchor - 1, yU.main.head - 1)), zU = {
          from: zU.from,
          to: zU.to,
          insert: cU.O.of([zU.insert.toString().replace(".", " ")])
        }) : QU.doc.lineAt(AU.from).to < AU.to && UU.docView.lineHasWidget(AU.to) && UU.inputState.insertingTextAt > Date.now() - 50 ? zU = {
          from: AU.from,
          to: AU.to,
          insert: QU.toText(UU.inputState.insertingText)
        } : PU.chrome && zU && zU.from == zU.to && zU.from == AU.head && "\n " == zU.insert.toString() && UU.lineWrapping && (yU && (yU = cU.k.single(yU.main.anchor - 1, yU.main.head - 1)), zU = {
          from: AU.from,
          to: AU.to,
          insert: cU.O.of([" "])
        }), zU) return Qc(UU, zU, yU, FU);
      if (yU && !Fc(yU, AU)) {
        let XU = !1,
          zU = "select";
        return UU.inputState.lastSelectionTime > Date.now() - 50 && ("select" == UU.inputState.lastSelectionOrigin && (XU = !0), zU = UU.inputState.lastSelectionOrigin, "select.pointer" == zU && (yU = lz(QU.facet(cz).map((XU => XU(UU))), yU))), UU.dispatch({
          selection: yU,
          scrollIntoView: XU,
          userEvent: zU
        }), !0
      }
      return !1
    }

    function Qc(UU, XU, zU) {
      let yU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
      if (PU.ios && UU.inputState.flushIOSKey(XU)) return !0;
      let QU = UU.state.selection.main;
      if (PU.android && (XU.to == QU.to && (XU.from == QU.from || XU.from == QU.from - 1 && " " == UU.state.sliceDoc(XU.from, QU.from)) && 1 == XU.insert.length && 2 == XU.insert.lines && yX(UU.contentDOM, "Enter", 13) || (XU.from == QU.from - 1 && XU.to == QU.to && 0 == XU.insert.length || 8 == yU && XU.insert.length < XU.to - XU.from && XU.to > QU.head) && yX(UU.contentDOM, "Backspace", 8) || XU.from == QU.from && XU.to == QU.to + 1 && 0 == XU.insert.length && yX(UU.contentDOM, "Delete", 46))) return !0;
      let AU, FU = XU.insert.toString();
      UU.inputState.composing >= 0 && UU.inputState.composing++;
      let oU = () => AU || (AU = function(UU, XU, zU) {
        let yU, QU = UU.state,
          AU = QU.selection.main,
          FU = -1;
        if (XU.from == XU.to && XU.from < AU.from || XU.from > AU.to) {
          let zU = XU.from < AU.from ? -1 : 1,
            cU = zU < 0 ? AU.from : AU.to,
            yU = mz(QU.facet(cz).map((XU => XU(UU))), cU, zU);
          XU.from == yU && (FU = yU)
        }
        if (FU > -1) yU = {
          changes: XU,
          selection: cU.k.cursor(XU.from + XU.insert.length, -1)
        };
        else if (XU.from >= AU.from && XU.to <= AU.to && XU.to - XU.from >= (AU.to - AU.from) / 3 && (!zU || zU.main.empty && zU.main.from == XU.from + XU.insert.length) && UU.inputState.composing < 0) {
          let zU = AU.from < XU.from ? QU.sliceDoc(AU.from, XU.from) : "",
            cU = AU.to > XU.to ? QU.sliceDoc(XU.to, AU.to) : "";
          yU = QU.replaceSelection(UU.state.toText(zU + XU.insert.sliceString(0, void 0, UU.state.lineBreak) + cU))
        } else {
          let FU = QU.changes(XU),
            oU = zU && zU.main.to <= FU.newLength ? zU.main : void 0;
          if (QU.selection.Qt.length > 1 && (UU.inputState.composing >= 0 || UU.inputState.compositionPendingChange) && XU.to <= AU.to + 10 && XU.to >= AU.to - 10) {
            let DU, EU = UU.state.sliceDoc(XU.from, XU.to),
              YU = zU && Hz(UU, zU.main.head);
            if (YU) {
              let UU = XU.insert.length - (XU.to - XU.from);
              DU = {
                from: YU.from,
                to: YU.to - UU
              }
            } else DU = UU.state.doc.lineAt(AU.head);
            let NU = AU.to - XU.to;
            yU = QU.changeByRange((zU => {
              if (zU.from == AU.from && zU.to == AU.to) return {
                changes: FU,
                range: oU || zU.map(FU)
              };
              let yU = zU.to - NU,
                YU = yU - EU.length;
              if (UU.state.sliceDoc(YU, yU) != EU || yU >= DU.from && YU <= DU.to) return {
                range: zU
              };
              let IU = QU.changes({
                  from: YU,
                  to: yU,
                  insert: XU.insert
                }),
                pU = zU.to - AU.to;
              return {
                changes: IU,
                range: oU ? cU.k.range(Math.max(0, oU.anchor + pU), Math.max(0, oU.head + pU)) : zU.map(IU)
              }
            }))
          } else yU = {
            changes: FU,
            selection: oU && QU.selection.replaceRange(oU)
          }
        }
        let oU = "input.type";
        (UU.composing || UU.inputState.compositionPendingChange && UU.inputState.compositionEndedAt > Date.now() - 50) && (UU.inputState.compositionPendingChange = !1, oU += ".compose", UU.inputState.compositionFirstChange && (oU += ".start", UU.inputState.compositionFirstChange = !1));
        return QU.update(yU, {
          userEvent: oU,
          scrollIntoView: !0
        })
      }(UU, XU, zU));
      return UU.state.facet(uX).some((zU => zU(UU, XU.from, XU.to, FU, oU))) || UU.dispatch(oU()), !0
    }

    function Ac(UU, XU, zU, cU) {
      let yU = Math.min(UU.length, XU.length),
        QU = 0;
      for (; QU < yU && UU.charCodeAt(QU) == XU.charCodeAt(QU);) QU++;
      if (QU == yU && UU.length == XU.length) return null;
      let AU = UU.length,
        FU = XU.length;
      for (; AU > 0 && FU > 0 && UU.charCodeAt(AU - 1) == XU.charCodeAt(FU - 1);) AU--, FU--;
      if ("end" == cU) {
        zU -= AU + Math.max(0, QU - Math.min(AU, FU)) - QU
      }
      if (AU < QU && UU.length < XU.length) {
        QU -= zU <= QU && zU >= AU ? QU - zU : 0, FU = QU + (FU - AU), AU = QU
      } else if (FU < QU) {
        QU -= zU <= QU && zU >= FU ? QU - zU : 0, AU = QU + (AU - FU), FU = QU
      }
      return {
        from: QU,
        toA: AU,
        toB: FU
      }
    }

    function Fc(UU, XU) {
      return XU.head == UU.main.head && XU.anchor == UU.main.anchor
    }
    class oc {
      setSelectionOrigin(UU) {
        this.lastSelectionOrigin = UU, this.lastSelectionTime = Date.now()
      }
      constructor(UU) {
        this.view = UU, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = UU.hasFocus, PU.safari && UU.contentDOM.addEventListener("input", (() => null)), PU.gecko && function(UU) {
          Sc.has(UU) || (Sc.add(UU), UU.addEventListener("copy", (() => {})), UU.addEventListener("cut", (() => {})))
        }(UU.contentDOM.ownerDocument)
      }
      handleEvent(UU) {
        (function(UU, XU) {
          if (!XU.bubbles) return !0;
          if (XU.defaultPrevented) return !1;
          for (let zU, cU = XU.target; cU != UU.contentDOM; cU = cU.parentNode)
            if (!cU || 11 == cU.nodeType || (zU = Nz.get(cU)) && zU.isWidget() && !zU.isHidden && zU.widget.ignoreEvent(XU)) return !1;
          return !0
        })(this.view, UU) && !this.ignoreDuringComposition(UU) && ("keydown" == UU.type && this.keydown(UU) || (0 != this.view.updateState ? Promise.resolve().then((() => this.runHandlers(UU.type, UU))) : this.runHandlers(UU.type, UU)))
      }
      runHandlers(UU, XU) {
        let zU = this.handlers[UU];
        if (zU) {
          for (let UU of zU.observers) UU(this.view, XU);
          for (let UU of zU.handlers) {
            if (XU.defaultPrevented) break;
            if (UU(this.view, XU)) {
              XU.preventDefault();
              break
            }
          }
        }
      }
      ensureHandlers(UU) {
        let XU = Ec(UU),
          zU = this.handlers,
          cU = this.view.contentDOM;
        for (let yU in XU)
          if ("scroll" != yU) {
            let UU = !XU[yU].handlers.length,
              QU = zU[yU];
            QU && UU != !QU.handlers.length && (cU.removeEventListener(yU, this.handleEvent), QU = null), QU || cU.addEventListener(yU, this.handleEvent, {
              passive: UU
            })
          } for (let yU in zU) "scroll" == yU || XU[yU] || cU.removeEventListener(yU, this.handleEvent);
        this.handlers = XU
      }
      keydown(UU) {
        if (this.lastKeyCode = UU.keyCode, this.lastKeyTime = Date.now(), 9 == UU.keyCode && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return !0;
        if (this.tabFocusMode > 0 && 27 != UU.keyCode && Ic.indexOf(UU.keyCode) < 0 && (this.tabFocusMode = -1), PU.android && PU.chrome && !UU.synthetic && (13 == UU.keyCode || 8 == UU.keyCode)) return this.view.observer.delayAndroidKey(UU.key, UU.keyCode), !0;
        let XU;
        return !PU.ios || UU.synthetic || UU.altKey || UU.metaKey || UU.shiftKey || !((XU = Yc.find((XU => XU.keyCode == UU.keyCode))) && !UU.ctrlKey || Nc.indexOf(UU.key) > -1 && UU.ctrlKey) ? (229 != UU.keyCode && this.view.observer.forceFlush(), !1) : (this.pendingIOSKey = XU || UU, setTimeout((() => this.flushIOSKey()), 250), !0)
      }
      flushIOSKey(UU) {
        let XU = this.pendingIOSKey;
        return !!XU && (!("Enter" == XU.key && UU && UU.from < UU.to && /^\S+$/.test(UU.insert.toString())) && (this.pendingIOSKey = void 0, yX(this.view.contentDOM, XU.key, XU.keyCode, XU instanceof KeyboardEvent ? XU : void 0)))
      }
      ignoreDuringComposition(UU) {
        return !(!/^key/.test(UU.type) || UU.synthetic) && (this.composing > 0 || !!(PU.safari && !PU.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = !1, !0))
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

    function Dc(UU, XU) {
      return (zU, cU) => {
        try {
          return XU.call(UU, cU, zU)
        } catch (yU) {
          lX(zU.state, yU)
        }
      }
    }

    function Ec(UU) {
      let XU = Object.create(null);

      function zU(UU) {
        return XU[UU] || (XU[UU] = {
          observers: [],
          handlers: []
        })
      }
      for (let cU of UU) {
        let UU = cU.spec,
          XU = UU && UU.plugin.domEventHandlers,
          yU = UU && UU.plugin.domEventObservers;
        if (XU)
          for (let QU in XU) {
            let UU = XU[QU];
            UU && zU(QU).handlers.push(Dc(cU.value, UU))
          }
        if (yU)
          for (let QU in yU) {
            let UU = yU[QU];
            UU && zU(QU).observers.push(Dc(cU.value, UU))
          }
      }
      for (let cU in tc) zU(cU).handlers.push(tc[cU]);
      for (let cU in gc) zU(cU).observers.push(gc[cU]);
      return XU
    }
    const Yc = [{
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
      Nc = "dthko",
      Ic = [16, 17, 18, 20, 91, 92, 224, 225];

    function pc(UU) {
      return .7 * Math.max(0, UU) + 8
    }
    class ac {
      constructor(UU, XU, zU, yU) {
        this.view = UU, this.startEvent = XU, this.style = zU, this.mustSelect = yU, this.scrollSpeed = {
          x: 0,
          y: 0
        }, this.scrolling = -1, this.lastEvent = XU, this.scrollParents = TU(UU.contentDOM), this.atoms = UU.state.facet(cz).map((XU => XU(UU)));
        let QU = UU.contentDOM.ownerDocument;
        QU.addEventListener("mousemove", this.move = this.move.bind(this)), QU.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = XU.shiftKey, this.multiple = UU.state.facet(cU.n.allowMultipleSelections) && function(UU, XU) {
          let zU = UU.state.facet(wX);
          return zU.length ? zU[0](XU) : PU.mac ? XU.metaKey : XU.ctrlKey
        }(UU, XU), this.dragging = !(! function(UU, XU) {
          let {
            main: zU
          } = UU.state.selection;
          if (zU.empty) return !1;
          let cU = MU(UU.root);
          if (!cU || 0 == cU.rangeCount) return !0;
          let yU = cU.getRangeAt(0).getClientRects();
          for (let QU = 0; QU < yU.length; QU++) {
            let UU = yU[QU];
            if (UU.left <= XU.clientX && UU.right >= XU.clientX && UU.top <= XU.clientY && UU.bottom >= XU.clientY) return !0
          }
          return !1
        }(UU, XU) || 1 != Lc(XU)) && null
      }
      start(UU) {
        !1 === this.dragging && this.select(UU)
      }
      move(UU) {
        if (0 == UU.buttons) return this.destroy();
        if (this.dragging || null == this.dragging && (XU = this.startEvent, zU = UU, Math.max(Math.abs(XU.clientX - zU.clientX), Math.abs(XU.clientY - zU.clientY)) < 10)) return;
        var XU, zU;
        this.select(this.lastEvent = UU);
        let cU = 0,
          yU = 0,
          QU = 0,
          AU = 0,
          FU = this.view.win.innerWidth,
          oU = this.view.win.innerHeight;
        this.scrollParents.x && ({
          left: QU,
          right: FU
        } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({
          top: AU,
          bottom: oU
        } = this.scrollParents.y.getBoundingClientRect());
        let DU = Fz(this.view);
        UU.clientX - DU.left <= QU + 6 ? cU = -pc(QU - UU.clientX) : UU.clientX + DU.right >= FU - 6 && (cU = pc(UU.clientX - FU)), UU.clientY - DU.top <= AU + 6 ? yU = -pc(AU - UU.clientY) : UU.clientY + DU.bottom >= oU - 6 && (yU = pc(UU.clientY - oU)), this.setScrollSpeed(cU, yU)
      }
      up(UU) {
        null == this.dragging && this.select(this.lastEvent), this.dragging || UU.preventDefault(), this.destroy()
      }
      destroy() {
        this.setScrollSpeed(0, 0);
        let UU = this.view.contentDOM.ownerDocument;
        UU.removeEventListener("mousemove", this.move), UU.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null
      }
      setScrollSpeed(UU, XU) {
        this.scrollSpeed = {
          x: UU,
          y: XU
        }, UU || XU ? this.scrolling < 0 && (this.scrolling = setInterval((() => this.scroll()), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1)
      }
      scroll() {
        let {
          x: UU,
          y: XU
        } = this.scrollSpeed;
        UU && this.scrollParents.x && (this.scrollParents.x.scrollLeft += UU, UU = 0), XU && this.scrollParents.y && (this.scrollParents.y.scrollTop += XU, XU = 0), (UU || XU) && this.view.win.scrollBy(UU, XU), !1 === this.dragging && this.select(this.lastEvent)
      }
      select(UU) {
        let {
          view: XU
        } = this, zU = lz(this.atoms, this.style.get(UU, this.extend, this.multiple));
        !this.mustSelect && zU.eq(XU.state.selection, !1 === this.dragging) || this.view.dispatch({
          selection: zU,
          userEvent: "select.pointer"
        }), this.mustSelect = !1
      }
      update(UU) {
        UU.transactions.some((UU => UU.isUserEvent("input.type"))) ? this.destroy() : this.style.update(UU) && setTimeout((() => this.select(this.lastEvent)), 20)
      }
    }
    const tc = Object.create(null),
      gc = Object.create(null),
      kc = PU.ie && PU.ie_version < 15 || PU.ios && PU.webkit_version < 604;

    function Gc(UU, XU, zU) {
      for (let cU of UU.facet(XU)) zU = cU(zU, UU);
      return zU
    }

    function Bc(UU, XU) {
      XU = Gc(UU.state, iX, XU);
      let zU, {
          state: yU
        } = UU,
        QU = 1,
        AU = yU.toText(XU),
        FU = AU.lines == yU.selection.Qt.length;
      if (null != Cc && yU.selection.Qt.every((UU => UU.empty)) && Cc == AU.toString()) {
        let UU = -1;
        zU = yU.changeByRange((zU => {
          let oU = yU.doc.lineAt(zU.from);
          if (oU.from == UU) return {
            range: zU
          };
          UU = oU.from;
          let DU = yU.toText((FU ? AU.line(QU++).text : XU) + yU.lineBreak);
          return {
            changes: {
              from: oU.from,
              insert: DU
            },
            range: cU.k.cursor(zU.from + DU.length)
          }
        }))
      } else zU = FU ? yU.changeByRange((UU => {
        let XU = AU.line(QU++);
        return {
          changes: {
            from: UU.from,
            to: UU.to,
            insert: XU.text
          },
          range: cU.k.cursor(UU.from + XU.length)
        }
      })) : yU.replaceSelection(AU);
      UU.dispatch(zU, {
        userEvent: "input.paste",
        scrollIntoView: !0
      })
    }

    function Zc(UU, XU, zU, yU) {
      if (1 == yU) return cU.k.cursor(XU, zU);
      if (2 == yU) return function(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          yU = UU.charCategorizer(XU),
          QU = UU.doc.lineAt(XU),
          AU = XU - QU.from;
        if (0 == QU.length) return cU.k.cursor(XU);
        0 == AU ? zU = 1 : AU == QU.length && (zU = -1);
        let FU = AU,
          oU = AU;
        zU < 0 ? FU = (0, cU._)(QU.text, AU, !1) : oU = (0, cU._)(QU.text, AU);
        let DU = yU(QU.text.slice(FU, oU));
        for (; FU > 0;) {
          let UU = (0, cU._)(QU.text, FU, !1);
          if (yU(QU.text.slice(UU, FU)) != DU) break;
          FU = UU
        }
        for (; oU < QU.length;) {
          let UU = (0, cU._)(QU.text, oU);
          if (yU(QU.text.slice(oU, UU)) != DU) break;
          oU = UU
        }
        return cU.k.range(FU + QU.from, oU + QU.from)
      }(UU.state, XU, zU);
      {
        let yU = UU.docView.lineAt(XU, zU),
          QU = UU.state.doc.lineAt(yU ? yU.posAtEnd : XU),
          AU = yU ? yU.posAtStart : QU.from,
          FU = yU ? yU.posAtEnd : QU.to;
        return FU < UU.state.doc.length && FU == QU.to && FU++, cU.k.range(AU, FU)
      }
    }
    gc.scroll = UU => {
      UU.inputState.lastScrollTop = UU.scrollDOM.scrollTop, UU.inputState.lastScrollLeft = UU.scrollDOM.scrollLeft
    }, gc.wheel = gc.mousewheel = UU => {
      UU.inputState.lastWheelEvent = Date.now()
    }, tc.keydown = (UU, XU) => (UU.inputState.setSelectionOrigin("select"), 27 == XU.keyCode && 0 != UU.inputState.tabFocusMode && (UU.inputState.tabFocusMode = Date.now() + 2e3), !1), gc.touchstart = (UU, XU) => {
      let zU = UU.inputState,
        cU = XU.targetTouches[0];
      zU.lastTouchTime = Date.now(), cU && (zU.lastTouchX = cU.clientX, zU.lastTouchY = cU.clientY), zU.setSelectionOrigin("select.pointer")
    }, gc.touchmove = UU => {
      UU.inputState.setSelectionOrigin("select.pointer")
    }, tc.mousedown = (UU, XU) => {
      if (UU.observer.flush(), UU.inputState.lastTouchTime > Date.now() - 2e3) return !1;
      let zU = null;
      for (let cU of UU.state.facet(OX))
        if (zU = cU(UU, XU), zU) break;
      if (zU || 0 != XU.button || (zU = function(UU, XU) {
          let zU = UU.posAndSideAtCoords({
              x: XU.clientX,
              y: XU.clientY
            }, !1),
            yU = Lc(XU),
            QU = UU.state.selection;
          return {
            update(UU) {
              UU.docChanged && (zU.pos = UU.changes.mapPos(zU.pos), QU = QU.map(UU.changes))
            },
            get(XU, AU, FU) {
              let oU, DU = UU.posAndSideAtCoords({
                  x: XU.clientX,
                  y: XU.clientY
                }, !1),
                EU = Zc(UU, DU.pos, DU.assoc, yU);
              if (zU.pos != DU.pos && !AU) {
                let XU = Zc(UU, zU.pos, zU.assoc, yU),
                  QU = Math.min(XU.from, EU.from),
                  AU = Math.max(XU.to, EU.to);
                EU = QU < EU.from ? cU.k.range(QU, AU, EU.assoc) : cU.k.range(AU, QU, EU.assoc)
              }
              return AU ? QU.replaceRange(QU.main.extend(EU.from, EU.to, EU.assoc)) : FU && 1 == yU && QU.Qt.length > 1 && (oU = function(UU, XU) {
                for (let zU = 0; zU < UU.Qt.length; zU++) {
                  let {
                    from: yU,
                    to: QU
                  } = UU.Qt[zU];
                  if (yU <= XU && QU >= XU) return cU.k.create(UU.Qt.slice(0, zU).concat(UU.Qt.slice(zU + 1)), UU.mainIndex == zU ? 0 : UU.mainIndex - (UU.mainIndex > zU ? 1 : 0))
                }
                return null
              }(QU, DU.pos)) ? oU : FU ? QU.addRange(EU) : cU.k.create([EU])
            }
          }
        }(UU, XU)), zU) {
        let cU = !UU.hasFocus;
        UU.inputState.startMouseSelection(new ac(UU, XU, zU, cU)), cU && UU.observer.ignore((() => {
          zX(UU.contentDOM);
          let XU = UU.root.activeElement;
          XU && !XU.contains(UU.contentDOM) && XU.blur()
        }));
        let yU = UU.inputState.mouseSelection;
        if (yU) return yU.start(XU), !1 === yU.dragging
      } else UU.inputState.setSelectionOrigin("select.pointer");
      return !1
    };
    const Rc = PU.ie && PU.ie_version <= 11;
    let Pc = null,
      Wc = 0,
      dc = 0;

    function Lc(UU) {
      if (!Rc) return UU.detail;
      let XU = Pc,
        zU = dc;
      return Pc = UU, dc = Date.now(), Wc = !XU || zU > Date.now() - 400 && Math.abs(XU.clientX - UU.clientX) < 2 && Math.abs(XU.clientY - UU.clientY) < 2 ? (Wc + 1) % 3 : 1
    }

    function ec(UU, XU, zU, cU) {
      if (!(zU = Gc(UU.state, iX, zU))) return;
      let yU = UU.posAtCoords({
          x: XU.clientX,
          y: XU.clientY
        }, !1),
        {
          draggedContent: QU
        } = UU.inputState,
        AU = cU && QU && function(UU, XU) {
          let zU = UU.state.facet(qX);
          return zU.length ? zU[0](XU) : PU.mac ? !XU.altKey : !XU.ctrlKey
        }(UU, XU) ? {
          from: QU.from,
          to: QU.to
        } : null,
        FU = {
          from: yU,
          insert: zU
        },
        oU = UU.state.changes(AU ? [AU, FU] : FU);
      UU.focus(), UU.dispatch({
        changes: oU,
        selection: {
          anchor: oU.mapPos(yU, -1),
          head: oU.mapPos(yU, 1)
        },
        userEvent: AU ? "move.drop" : "input.drop"
      }), UU.inputState.draggedContent = null
    }
    tc.dragstart = (UU, XU) => {
      let {
        selection: {
          main: zU
        }
      } = UU.state;
      if (XU.target.draggable) {
        let yU = UU.docView.tile.nearest(XU.target);
        if (yU && yU.isWidget()) {
          let UU = yU.posAtStart,
            XU = UU + yU.length;
          (UU >= zU.to || XU <= zU.from) && (zU = cU.k.range(UU, XU))
        }
      }
      let {
        inputState: yU
      } = UU;
      return yU.mouseSelection && (yU.mouseSelection.dragging = !0), yU.draggedContent = zU, XU.dataTransfer && (XU.dataTransfer.setData("Text", Gc(UU.state, HX, UU.state.sliceDoc(zU.from, zU.to))), XU.dataTransfer.effectAllowed = "copyMove"), !1
    }, tc.dragend = UU => (UU.inputState.draggedContent = null, !1), tc.drop = (UU, XU) => {
      if (!XU.dataTransfer) return !1;
      if (UU.state.readOnly) return !0;
      let zU = XU.dataTransfer.files;
      if (zU && zU.length) {
        let cU = Array(zU.length),
          yU = 0,
          QU = () => {
            ++yU == zU.length && ec(UU, XU, cU.filter((UU => null != UU)).join(UU.state.lineBreak), !1)
          };
        for (let UU = 0; UU < zU.length; UU++) {
          let XU = new FileReader;
          XU.onerror = QU, XU.onload = () => {
            /[\x00-\x08\x0e-\x1f]{2}/.test(XU.result) || (cU[UU] = XU.result), QU()
          }, XU.readAsText(zU[UU])
        }
        return !0
      } {
        let zU = XU.dataTransfer.getData("Text");
        if (zU) return ec(UU, XU, zU, !0), !0
      }
      return !1
    }, tc.paste = (UU, XU) => {
      if (UU.state.readOnly) return !0;
      UU.observer.flush();
      let zU = kc ? null : XU.clipboardData;
      return zU ? (Bc(UU, zU.getData("text/plain") || zU.getData("text/uri-list")), !0) : (function(UU) {
        let XU = UU.dom.parentNode;
        if (!XU) return;
        let zU = XU.appendChild(document.createElement("textarea"));
        zU.style.cssText = "position: fixed; left: -10000px; top: 10px", zU.focus(), setTimeout((() => {
          UU.focus(), zU.remove(), Bc(UU, zU.value)
        }), 50)
      }(UU), !1)
    };
    let Cc = null;
    tc.copy = tc.cut = (UU, XU) => {
      if (!VU(UU.contentDOM, UU.observer.selectionRange)) return !1;
      let {
        text: zU,
        Qt: cU,
        linewise: yU
      } = function(UU) {
        let XU = [],
          zU = [],
          cU = !1;
        for (let yU of UU.selection.Qt) yU.empty || (XU.push(UU.sliceDoc(yU.from, yU.to)), zU.push(yU));
        if (!XU.length) {
          let yU = -1;
          for (let {
              from: cU
            }
            of UU.selection.Qt) {
            let QU = UU.doc.lineAt(cU);
            QU.number > yU && (XU.push(QU.text), zU.push({
              from: QU.from,
              to: Math.min(UU.doc.length, QU.to + 1)
            })), yU = QU.number
          }
          cU = !0
        }
        return {
          text: Gc(UU, HX, XU.join(UU.lineBreak)),
          Qt: zU,
          linewise: cU
        }
      }(UU.state);
      if (!zU && !yU) return !1;
      Cc = yU ? zU : null, "cut" != XU.type || UU.state.readOnly || UU.dispatch({
        changes: cU,
        scrollIntoView: !0,
        userEvent: "delete.cut"
      });
      let QU = kc ? null : XU.clipboardData;
      return QU ? (QU.clearData(), QU.setData("text/plain", zU), !0) : (function(UU, XU) {
        let zU = UU.dom.parentNode;
        if (!zU) return;
        let cU = zU.appendChild(document.createElement("textarea"));
        cU.style.cssText = "position: fixed; left: -10000px; top: 10px", cU.value = XU, cU.focus(), cU.selectionEnd = XU.length, cU.selectionStart = 0, setTimeout((() => {
          cU.remove(), UU.focus()
        }), 50)
      }(UU, zU), !1)
    };
    const wc = cU.d.define();

    function qc(UU, XU) {
      let zU = [];
      for (let cU of UU.facet(fX)) {
        let yU = cU(UU, XU);
        yU && zU.push(yU)
      }
      return zU.length ? UU.update({
        effects: zU,
        annotations: wc.of(!0)
      }) : null
    }

    function Oc(UU) {
      setTimeout((() => {
        let XU = UU.hasFocus;
        if (XU != UU.inputState.notifiedFocused) {
          let zU = qc(UU.state, XU);
          zU ? UU.dispatch(zU) : UU.update([])
        }
      }), 10)
    }
    gc.focus = UU => {
      UU.inputState.lastFocusTime = Date.now(), UU.scrollDOM.scrollTop || !UU.inputState.lastScrollTop && !UU.inputState.lastScrollLeft || (UU.scrollDOM.scrollTop = UU.inputState.lastScrollTop, UU.scrollDOM.scrollLeft = UU.inputState.lastScrollLeft), Oc(UU)
    }, gc.blur = UU => {
      UU.observer.clearSelectionRange(), Oc(UU)
    }, gc.compositionstart = gc.compositionupdate = UU => {
      UU.observer.editContext || (null == UU.inputState.compositionFirstChange && (UU.inputState.compositionFirstChange = !0), UU.inputState.composing < 0 && (UU.inputState.composing = 0))
    }, gc.compositionend = UU => {
      UU.observer.editContext || (UU.inputState.composing = -1, UU.inputState.compositionEndedAt = Date.now(), UU.inputState.compositionPendingKey = !0, UU.inputState.compositionPendingChange = UU.observer.pendingRecords().length > 0, UU.inputState.compositionFirstChange = null, PU.chrome && PU.android ? UU.observer.flushSoon() : UU.inputState.compositionPendingChange ? Promise.resolve().then((() => UU.observer.flush())) : setTimeout((() => {
        UU.inputState.composing < 0 && UU.docView.hasComposition && UU.update([])
      }), 50))
    }, gc.contextmenu = UU => {
      UU.inputState.lastContextMenu = Date.now()
    }, tc.beforeinput = (UU, XU) => {
      var zU, cU;
      if ("insertText" != XU.inputType && "insertCompositionText" != XU.inputType || (UU.inputState.insertingText = XU.data, UU.inputState.insertingTextAt = Date.now()), "insertReplacementText" == XU.inputType && UU.observer.editContext) {
        let cU = null === (zU = XU.dataTransfer) || void 0 === zU ? void 0 : zU.getData("text/plain"),
          yU = XU.getTargetRanges();
        if (cU && yU.length) {
          let XU = yU[0],
            zU = UU.posAtDOM(XU.startContainer, XU.startOffset),
            QU = UU.posAtDOM(XU.endContainer, XU.endOffset);
          return Qc(UU, {
            from: zU,
            to: QU,
            insert: UU.state.toText(cU)
          }, null), !0
        }
      }
      let yU;
      if (PU.chrome && PU.android && (yU = Yc.find((UU => UU.inputType == XU.inputType))) && (UU.observer.delayAndroidKey(yU.key, yU.keyCode), "Backspace" == yU.key || "Delete" == yU.key)) {
        let XU = (null === (cU = window.visualViewport) || void 0 === cU ? void 0 : cU.height) || 0;
        setTimeout((() => {
          var zU;
          ((null === (zU = window.visualViewport) || void 0 === zU ? void 0 : zU.height) || 0) > XU + 10 && UU.hasFocus && (UU.contentDOM.blur(), UU.focus())
        }), 100)
      }
      return PU.ios && "deleteContentForward" == XU.inputType && UU.observer.flushSoon(), PU.safari && "insertText" == XU.inputType && UU.inputState.composing >= 0 && setTimeout((() => gc.compositionend(UU, XU)), 20), !1
    };
    const Sc = new Set;
    const rc = ["pre-wrap", "normal", "pre-line", "break-spaces"];
    let uc = !1;

    function fc() {
      uc = !1
    }
    class ic {
      constructor(UU) {
        this.lineWrapping = UU, this.doc = cU.O.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30
      }
      heightForGap(UU, XU) {
        let zU = this.doc.lineAt(XU).number - this.doc.lineAt(UU).number + 1;
        return this.lineWrapping && (zU += Math.max(0, Math.ceil((XU - UU - zU * this.lineLength * .5) / this.lineLength))), this.lineHeight * zU
      }
      heightForLine(UU) {
        if (!this.lineWrapping) return this.lineHeight;
        return (1 + Math.max(0, Math.ceil((UU - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight
      }
      setDoc(UU) {
        return this.doc = UU, this
      }
      mustRefreshForWrapping(UU) {
        return rc.indexOf(UU) > -1 != this.lineWrapping
      }
      mustRefreshForHeights(UU) {
        let XU = !1;
        for (let zU = 0; zU < UU.length; zU++) {
          let cU = UU[zU];
          cU < 0 ? zU++ : this.heightSamples[Math.floor(10 * cU)] || (XU = !0, this.heightSamples[Math.floor(10 * cU)] = !0)
        }
        return XU
      }
      refresh(UU, XU, zU, cU, yU, QU) {
        let AU = rc.indexOf(UU) > -1,
          FU = Math.abs(XU - this.lineHeight) > .3 || this.lineWrapping != AU || Math.abs(zU - this.charWidth) > .1;
        if (this.lineWrapping = AU, this.lineHeight = XU, this.charWidth = zU, this.textHeight = cU, this.lineLength = yU, FU) {
          this.heightSamples = {};
          for (let UU = 0; UU < QU.length; UU++) {
            let XU = QU[UU];
            XU < 0 ? UU++ : this.heightSamples[Math.floor(10 * XU)] = !0
          }
        }
        return FU
      }
    }
    class Hc {
      constructor(UU, XU) {
        this.from = UU, this.heights = XU, this.index = 0
      }
      get more() {
        return this.index < this.heights.length
      }
    }
    class Mc {
      constructor(UU, XU, zU, cU, yU) {
        this.from = UU, this.length = XU, this.top = zU, this.height = cU, this._content = yU
      }
      get type() {
        return "number" == typeof this._content ? qU.Text : Array.isArray(this._content) ? this._content : this._content.type
      }
      get to() {
        return this.from + this.length
      }
      get bottom() {
        return this.top + this.height
      }
      get widget() {
        return this._content instanceof uU ? this._content.widget : null
      }
      get widgetLineBreaks() {
        return "number" == typeof this._content ? this._content : 0
      }
      join(UU) {
        let XU = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(UU._content) ? UU._content : [UU]);
        return new Mc(this.from, this.length + UU.length, this.top, this.height + UU.height, XU)
      }
    }
    var vc = function(UU) {
      return UU[UU.ByPos = 0] = "ByPos", UU[UU.ByHeight = 1] = "ByHeight", UU[UU.ByPosNoHeight = 2] = "ByPosNoHeight", UU
    }(vc || (vc = {}));
    const Vc = .001;
    class sc {
      constructor(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.length = UU, this.height = XU, this.flags = zU
      }
      get outdated() {
        return (2 & this.flags) > 0
      }
      set outdated(UU) {
        this.flags = (UU ? 2 : 0) | -3 & this.flags
      }
      setHeight(UU) {
        this.height != UU && (Math.abs(this.height - UU) > Vc && (uc = !0), this.height = UU)
      }
      replace(UU, XU, zU) {
        return sc.of(zU)
      }
      decomposeLeft(UU, XU) {
        XU.push(this)
      }
      decomposeRight(UU, XU) {
        XU.push(this)
      }
      applyChanges(UU, XU, zU, cU) {
        let yU = this,
          QU = zU.doc;
        for (let AU = cU.length - 1; AU >= 0; AU--) {
          let {
            fromA: FU,
            toA: oU,
            fromB: DU,
            toB: EU
          } = cU[AU], YU = yU.lineAt(FU, vc.ByPosNoHeight, zU.setDoc(XU), 0, 0), NU = YU.to >= oU ? YU : yU.lineAt(oU, vc.ByPosNoHeight, zU, 0, 0);
          for (EU += NU.to - oU, oU = NU.to; AU > 0 && YU.from <= cU[AU - 1].toA;) FU = cU[AU - 1].fromA, DU = cU[AU - 1].fromB, AU--, FU < YU.from && (YU = yU.lineAt(FU, vc.ByPosNoHeight, zU, 0, 0));
          DU += YU.from - FU, FU = YU.from;
          let IU = bc.build(zU.setDoc(QU), UU, DU, EU);
          yU = nc(yU, yU.replace(FU, oU, IU))
        }
        return yU.updateHeight(zU, 0)
      }
      static empty() {
        return new xc(0, 0, 0)
      }
      static of (UU) {
        if (1 == UU.length) return UU[0];
        let XU = 0,
          zU = UU.length,
          cU = 0,
          yU = 0;
        for (;;)
          if (XU == zU)
            if (cU > 2 * yU) {
              let yU = UU[XU - 1];
              yU.break ? UU.splice(--XU, 1, yU.left, null, yU.right) : UU.splice(--XU, 1, yU.left, yU.right), zU += 1 + yU.break, cU -= yU.size
            } else {
              if (!(yU > 2 * cU)) break;
              {
                let XU = UU[zU];
                XU.break ? UU.splice(zU, 1, XU.left, null, XU.right) : UU.splice(zU, 1, XU.left, XU.right), zU += 2 + XU.break, yU -= XU.size
              }
            }
        else if (cU < yU) {
          let zU = UU[XU++];
          zU && (cU += zU.size)
        } else {
          let XU = UU[--zU];
          XU && (yU += XU.size)
        }
        let QU = 0;
        return null == UU[XU - 1] ? (QU = 1, XU--) : null == UU[XU] && (QU = 1, zU++), new jc(sc.of(UU.slice(0, XU)), QU, sc.of(UU.slice(zU)))
      }
    }

    function nc(UU, XU) {
      return UU == XU ? UU : (UU.constructor != XU.constructor && (uc = !0), XU)
    }
    sc.prototype.size = 1;
    const mc = OU.replace({});
    class lc extends sc {
      constructor(UU, XU, zU) {
        super(UU, XU), this.deco = zU, this.spaceAbove = 0
      }
      mainBlock(UU, XU) {
        return new Mc(XU, this.length, UU + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0)
      }
      blockAt(UU, XU, zU, cU) {
        return this.spaceAbove && UU < zU + this.spaceAbove ? new Mc(cU, 0, zU, this.spaceAbove, mc) : this.mainBlock(zU, cU)
      }
      lineAt(UU, XU, zU, cU, yU) {
        let QU = this.mainBlock(cU, yU);
        return this.spaceAbove ? this.blockAt(0, zU, cU, yU).join(QU) : QU
      }
      forEachLine(UU, XU, zU, cU, yU, QU) {
        UU <= yU + this.length && XU >= yU && QU(this.lineAt(0, vc.ByPos, zU, cU, yU))
      }
      setMeasuredHeight(UU) {
        let XU = UU.heights[UU.index++];
        XU < 0 ? (this.spaceAbove = -XU, XU = UU.heights[UU.index++]) : this.spaceAbove = 0, this.setHeight(XU)
      }
      updateHeight(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zU = arguments.length > 3 ? arguments[3] : void 0;
        return zU && zU.from <= XU && zU.more && this.setMeasuredHeight(zU), this.outdated = !1, this
      }
      toString() {
        return `block(${this.length})`
      }
    }
    class xc extends lc {
      constructor(UU, XU, zU) {
        super(UU, XU, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = zU
      }
      mainBlock(UU, XU) {
        return new Mc(XU, this.length, UU + this.spaceAbove, this.height - this.spaceAbove, this.breaks)
      }
      replace(UU, XU, zU) {
        let cU = zU[0];
        return 1 == zU.length && (cU instanceof xc || cU instanceof Jc && 4 & cU.flags) && Math.abs(this.length - cU.length) < 10 ? (cU instanceof Jc ? cU = new xc(cU.length, this.height, this.spaceAbove) : cU.height = this.height, this.outdated || (cU.outdated = !1), cU) : sc.of(zU)
      }
      updateHeight(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          cU = arguments.length > 3 ? arguments[3] : void 0;
        return cU && cU.from <= XU && cU.more ? this.setMeasuredHeight(cU) : (zU || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, UU.heightForLine(this.length - this.collapsed)) + this.breaks * UU.lineHeight)), this.outdated = !1, this
      }
      toString() {
        return `line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`
      }
    }
    class Jc extends sc {
      constructor(UU) {
        super(UU, 0)
      }
      heightMetrics(UU, XU) {
        let zU, cU = UU.doc.lineAt(XU).number,
          yU = UU.doc.lineAt(XU + this.length).number,
          QU = yU - cU + 1,
          AU = 0;
        if (UU.lineWrapping) {
          let XU = Math.min(this.height, UU.lineHeight * QU);
          zU = XU / QU, this.length > QU + 1 && (AU = (this.height - XU) / (this.length - QU - 1))
        } else zU = this.height / QU;
        return {
          firstLine: cU,
          lastLine: yU,
          perLine: zU,
          perChar: AU
        }
      }
      blockAt(UU, XU, zU, cU) {
        let {
          firstLine: yU,
          lastLine: QU,
          perLine: AU,
          perChar: FU
        } = this.heightMetrics(XU, cU);
        if (XU.lineWrapping) {
          let yU = cU + (UU < XU.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (UU - zU) / this.height)) * this.length)),
            QU = XU.doc.lineAt(yU),
            oU = AU + QU.length * FU,
            DU = Math.max(zU, UU - oU / 2);
          return new Mc(QU.from, QU.length, DU, oU, 0)
        } {
          let cU = Math.max(0, Math.min(QU - yU, Math.floor((UU - zU) / AU))),
            {
              from: FU,
              length: oU
            } = XU.doc.line(yU + cU);
          return new Mc(FU, oU, zU + AU * cU, AU, 0)
        }
      }
      lineAt(UU, XU, zU, cU, yU) {
        if (XU == vc.ByHeight) return this.blockAt(UU, zU, cU, yU);
        if (XU == vc.ByPosNoHeight) {
          let {
            from: XU,
            to: cU
          } = zU.doc.lineAt(UU);
          return new Mc(XU, cU - XU, 0, 0, 0)
        }
        let {
          firstLine: QU,
          perLine: AU,
          perChar: FU
        } = this.heightMetrics(zU, yU), oU = zU.doc.lineAt(UU), DU = AU + oU.length * FU, EU = oU.number - QU, YU = cU + AU * EU + FU * (oU.from - yU - EU);
        return new Mc(oU.from, oU.length, Math.max(cU, Math.min(YU, cU + this.height - DU)), DU, 0)
      }
      forEachLine(UU, XU, zU, cU, yU, QU) {
        UU = Math.max(UU, yU), XU = Math.min(XU, yU + this.length);
        let {
          firstLine: AU,
          perLine: FU,
          perChar: oU
        } = this.heightMetrics(zU, yU);
        for (let DU = UU, EU = cU; DU <= XU;) {
          let XU = zU.doc.lineAt(DU);
          if (DU == UU) {
            let zU = XU.number - AU;
            EU += FU * zU + oU * (UU - yU - zU)
          }
          let cU = FU + oU * XU.length;
          QU(new Mc(XU.from, XU.length, EU, cU, 0)), EU += cU, DU = XU.to + 1
        }
      }
      replace(UU, XU, zU) {
        let cU = this.length - XU;
        if (cU > 0) {
          let UU = zU[zU.length - 1];
          UU instanceof Jc ? zU[zU.length - 1] = new Jc(UU.length + cU) : zU.push(null, new Jc(cU - 1))
        }
        if (UU > 0) {
          let XU = zU[0];
          XU instanceof Jc ? zU[0] = new Jc(UU + XU.length) : zU.unshift(new Jc(UU - 1), null)
        }
        return sc.of(zU)
      }
      decomposeLeft(UU, XU) {
        XU.push(new Jc(UU - 1), null)
      }
      decomposeRight(UU, XU) {
        XU.push(null, new Jc(this.length - UU - 1))
      }
      updateHeight(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          cU = arguments.length > 3 ? arguments[3] : void 0,
          yU = XU + this.length;
        if (cU && cU.from <= XU + this.length && cU.more) {
          let zU = [],
            QU = Math.max(XU, cU.from),
            AU = -1;
          for (cU.from > XU && zU.push(new Jc(cU.from - XU - 1).updateHeight(UU, XU)); QU <= yU && cU.more;) {
            let XU = UU.doc.lineAt(QU).length;
            zU.length && zU.push(null);
            let yU = cU.heights[cU.index++],
              FU = 0;
            yU < 0 && (FU = -yU, yU = cU.heights[cU.index++]), -1 == AU ? AU = yU : Math.abs(yU - AU) >= Vc && (AU = -2);
            let oU = new xc(XU, yU, FU);
            oU.outdated = !1, zU.push(oU), QU += XU + 1
          }
          QU <= yU && zU.push(null, new Jc(yU - QU).updateHeight(UU, QU));
          let FU = sc.of(zU);
          return (AU < 0 || Math.abs(FU.height - this.height) >= Vc || Math.abs(AU - this.heightMetrics(UU, XU).perLine) >= Vc) && (uc = !0), nc(this, FU)
        }
        return (zU || this.outdated) && (this.setHeight(UU.heightForGap(XU, XU + this.length)), this.outdated = !1), this
      }
      toString() {
        return `gap(${this.length})`
      }
    }
    class jc extends sc {
      constructor(UU, XU, zU) {
        super(UU.length + XU + zU.length, UU.height + zU.height, XU | (UU.outdated || zU.outdated ? 2 : 0)), this.left = UU, this.right = zU, this.size = UU.size + zU.size
      }
      get break() {
        return 1 & this.flags
      }
      blockAt(UU, XU, zU, cU) {
        let yU = zU + this.left.height;
        return UU < yU ? this.left.blockAt(UU, XU, zU, cU) : this.right.blockAt(UU, XU, yU, cU + this.left.length + this.break)
      }
      lineAt(UU, XU, zU, cU, yU) {
        let QU = cU + this.left.height,
          AU = yU + this.left.length + this.break,
          FU = XU == vc.ByHeight ? UU < QU : UU < AU,
          oU = FU ? this.left.lineAt(UU, XU, zU, cU, yU) : this.right.lineAt(UU, XU, zU, QU, AU);
        if (this.break || (FU ? oU.to < AU : oU.from > AU)) return oU;
        let DU = XU == vc.ByPosNoHeight ? vc.ByPosNoHeight : vc.ByPos;
        return FU ? oU.join(this.right.lineAt(AU, DU, zU, QU, AU)) : this.left.lineAt(AU, DU, zU, cU, yU).join(oU)
      }
      forEachLine(UU, XU, zU, cU, yU, QU) {
        let AU = cU + this.left.height,
          FU = yU + this.left.length + this.break;
        if (this.break) UU < FU && this.left.forEachLine(UU, XU, zU, cU, yU, QU), XU >= FU && this.right.forEachLine(UU, XU, zU, AU, FU, QU);
        else {
          let oU = this.lineAt(FU, vc.ByPos, zU, cU, yU);
          UU < oU.from && this.left.forEachLine(UU, oU.from - 1, zU, cU, yU, QU), oU.to >= UU && oU.from <= XU && QU(oU), XU > oU.to && this.right.forEachLine(oU.to + 1, XU, zU, AU, FU, QU)
        }
      }
      replace(UU, XU, zU) {
        let cU = this.left.length + this.break;
        if (XU < cU) return this.balanced(this.left.replace(UU, XU, zU), this.right);
        if (UU > this.left.length) return this.balanced(this.left, this.right.replace(UU - cU, XU - cU, zU));
        let yU = [];
        UU > 0 && this.decomposeLeft(UU, yU);
        let QU = yU.length;
        for (let AU of zU) yU.push(AU);
        if (UU > 0 && Kc(yU, QU - 1), XU < this.length) {
          let UU = yU.length;
          this.decomposeRight(XU, yU), Kc(yU, UU)
        }
        return sc.of(yU)
      }
      decomposeLeft(UU, XU) {
        let zU = this.left.length;
        if (UU <= zU) return this.left.decomposeLeft(UU, XU);
        XU.push(this.left), this.break && (zU++, UU >= zU && XU.push(null)), UU > zU && this.right.decomposeLeft(UU - zU, XU)
      }
      decomposeRight(UU, XU) {
        let zU = this.left.length,
          cU = zU + this.break;
        if (UU >= cU) return this.right.decomposeRight(UU - cU, XU);
        UU < zU && this.left.decomposeRight(UU, XU), this.break && UU < cU && XU.push(null), XU.push(this.right)
      }
      balanced(UU, XU) {
        return UU.size > 2 * XU.size || XU.size > 2 * UU.size ? sc.of(this.break ? [UU, null, XU] : [UU, XU]) : (this.left = nc(this.left, UU), this.right = nc(this.right, XU), this.setHeight(UU.height + XU.height), this.outdated = UU.outdated || XU.outdated, this.size = UU.size + XU.size, this.length = UU.length + this.break+XU.length, this)
      }
      updateHeight(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          cU = arguments.length > 3 ? arguments[3] : void 0,
          {
            left: yU,
            right: QU
          } = this,
          AU = XU + yU.length + this.break,
          FU = null;
        return cU && cU.from <= XU + yU.length && cU.more ? FU = yU = yU.updateHeight(UU, XU, zU, cU) : yU.updateHeight(UU, XU, zU), cU && cU.from <= AU + QU.length && cU.more ? FU = QU = QU.updateHeight(UU, AU, zU, cU) : QU.updateHeight(UU, AU, zU), FU ? this.balanced(yU, QU) : (this.height = this.left.height + this.right.height, this.outdated = !1, this)
      }
      toString() {
        return this.left + (this.break ? " " : "-") + this.right
      }
    }

    function Kc(UU, XU) {
      let zU, cU;
      null == UU[XU] && (zU = UU[XU - 1]) instanceof Jc && (cU = UU[XU + 1]) instanceof Jc && UU.splice(XU - 1, 3, new Jc(zU.length + 1 + cU.length))
    }
    class bc {
      constructor(UU, XU) {
        this.pos = UU, this.oracle = XU, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = UU
      }
      get isCovered() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering
      }
      span(UU, XU) {
        if (this.lineStart > -1) {
          let UU = Math.min(XU, this.lineEnd),
            zU = this.nodes[this.nodes.length - 1];
          zU instanceof xc ? zU.length += UU - this.pos : (UU > this.pos || !this.isCovered) && this.nodes.push(new xc(UU - this.pos, -1, 0)), this.writtenTo = UU, XU > UU && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1)
        }
        this.pos = XU
      }
      point(UU, XU, zU) {
        if (UU < XU || zU.heightRelevant) {
          let cU = zU.widget ? zU.widget.estimatedHeight : 0,
            yU = zU.widget ? zU.widget.lineBreaks : 0;
          cU < 0 && (cU = this.oracle.lineHeight);
          let QU = XU - UU;
          zU.block ? this.QzU(new lc(QU, cU, zU)) : (QU || yU || cU >= 5) && this.addLineDeco(cU, yU, QU)
        } else XU > UU && this.span(UU, XU);
        this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
      }
      enterLine() {
        if (this.lineStart > -1) return;
        let {
          from: UU,
          to: XU
        } = this.oracle.doc.lineAt(this.pos);
        this.lineStart = UU, this.lineEnd = XU, this.writtenTo < UU && ((this.writtenTo < UU - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, UU - 1)), this.nodes.push(null)), this.pos > UU && this.nodes.push(new xc(this.pos - UU, -1, 0)), this.writtenTo = this.pos
      }
      blankContent(UU, XU) {
        let zU = new Jc(XU - UU);
        return this.oracle.doc.lineAt(UU).to == XU && (zU.flags |= 4), zU
      }
      ensureLine() {
        this.enterLine();
        let UU = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (UU instanceof xc) return UU;
        let XU = new xc(0, -1, 0);
        return this.nodes.push(XU), XU
      }
      QzU(UU) {
        this.enterLine();
        let XU = UU.deco;
        XU && XU.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(UU), this.writtenTo = this.pos = this.pos + UU.length, XU && XU.endSide > 0 && (this.covering = UU)
      }
      addLineDeco(UU, XU, zU) {
        let cU = this.ensureLine();
        cU.length += zU, cU.collapsed += zU, cU.widgetHeight = Math.max(cU.widgetHeight, UU), cU.breaks += XU, this.writtenTo = this.pos = this.pos + zU
      }
      finish(UU) {
        let XU = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
        !(this.lineStart > -1) || XU instanceof xc || this.isCovered ? (this.writtenTo < this.pos || null == XU) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new xc(0, -1, 0));
        let zU = UU;
        for (let cU of this.nodes) cU instanceof xc && cU.updateHeight(this.oracle, zU), zU += cU ? cU.length : 1;
        return this.nodes
      }
      static build(UU, XU, zU, yU) {
        let QU = new bc(zU, UU);
        return cU.D.spans(XU, zU, yU, QU, 0), QU.finish(zU)
      }
    }
    class Tc {
      constructor() {
        this.changes = []
      }
      compareRange() {}
      comparePoint(UU, XU, zU, cU) {
        (UU < XU || zU && zU.heightRelevant || cU && cU.heightRelevant) && iU(UU, XU, this.changes, 5)
      }
    }

    function hc(UU, XU) {
      let zU = UU.getBoundingClientRect(),
        cU = UU.ownerDocument,
        yU = cU.defaultView || window,
        QU = Math.max(0, zU.left),
        AU = Math.min(yU.innerWidth, zU.right),
        FU = Math.max(0, zU.top),
        oU = Math.min(yU.innerHeight, zU.bottom);
      for (let DU = UU.parentNode; DU && DU != cU.body;)
        if (1 == DU.nodeType) {
          let XU = DU,
            zU = window.getComputedStyle(XU);
          if ((XU.scrollHeight > XU.clientHeight || XU.scrollWidth > XU.clientWidth) && "visible" != zU.overflow) {
            let zU = XU.getBoundingClientRect();
            QU = Math.max(QU, zU.left), AU = Math.min(AU, zU.right), FU = Math.max(FU, zU.top), oU = Math.min(DU == UU.parentNode ? yU.innerHeight : oU, zU.bottom)
          }
          DU = "absolute" == zU.position || "fixed" == zU.position ? XU.offsetParent : XU.parentNode
        } else {
          if (11 != DU.nodeType) break;
          DU = DU.host
        } return {
        left: QU - zU.left,
        right: Math.max(QU, AU) - zU.left,
        top: FU - (zU.top + XU),
        bottom: Math.max(FU, oU) - (zU.top + XU)
      }
    }

    function Uy(UU, XU) {
      let zU = UU.getBoundingClientRect();
      return {
        left: 0,
        right: zU.right - zU.left,
        top: XU,
        bottom: zU.bottom - (zU.top + XU)
      }
    }
    class Xy {
      constructor(UU, XU, zU, cU) {
        this.from = UU, this.to = XU, this.size = zU, this.displaySize = cU
      }
      static same(UU, XU) {
        if (UU.length != XU.length) return !1;
        for (let zU = 0; zU < UU.length; zU++) {
          let cU = UU[zU],
            yU = XU[zU];
          if (cU.from != yU.from || cU.to != yU.to || cU.size != yU.size) return !1
        }
        return !0
      }
      draw(UU, XU) {
        return OU.replace({
          widget: new zy(this.displaySize * (XU ? UU.scaleY : UU.scaleX), XU)
        }).range(this.from, this.to)
      }
    }
    class zy extends wU {
      constructor(UU, XU) {
        super(), this.size = UU, this.vertical = XU
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
    class cy {
      constructor(UU, XU) {
        this.view = UU, this.state = XU, this.pixelViewport = {
          left: 0,
          right: window.innerWidth,
          top: 0,
          bottom: 0
        }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = Fy, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = DX.LTR, this.rUU = [], this.mustEnforceCursorAssoc = !1;
        let zU = XU.facet(hX).some((UU => "function" != typeof UU && "cm-lineWrapping" == UU.class));
        this.heightOracle = new ic(zU), this.stateDeco = oy(XU), this.heightMap = sc.empty().applyChanges(this.stateDeco, cU.O.empty, this.heightOracle.setDoc(XU.doc), [new Dz(0, 0, 0, XU.doc.length)]);
        for (let cU = 0; cU < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); cU++);
        this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = OU.set(this.lineGaps.map((UU => UU.draw(this, !1)))), this.scrollParent = UU.scrollDOM, this.computeVisibleRanges()
      }
      updateForViewport() {
        let UU = [this.viewport],
          {
            main: XU
          } = this.state.selection;
        for (let zU = 0; zU <= 1; zU++) {
          let cU = zU ? XU.head : XU.anchor;
          if (!UU.some((UU => {
              let {
                from: XU,
                to: zU
              } = UU;
              return cU >= XU && cU <= zU
            }))) {
            let {
              from: XU,
              to: zU
            } = this.lineBlockAt(cU);
            UU.push(new yy(XU, zU))
          }
        }
        return this.viewports = UU.sort(((UU, XU) => UU.from - XU.from)), this.updateScaler()
      }
      updateScaler() {
        let UU = this.scaler;
        return this.scaler = this.heightMap.height <= 7e6 ? Fy : new Dy(this.heightOracle, this.heightMap, this.viewports), UU.eq(this.scaler) ? 0 : 2
      }
      updateViewportLines() {
        this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (UU => {
          this.viewportLines.push(Ey(UU, this.scaler))
        }))
      }
      update(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.state = UU.state;
        let zU = this.stateDeco;
        this.stateDeco = oy(this.state);
        let yU = UU.changedRanges,
          QU = Dz.extendWithRanges(yU, function(UU, XU, zU) {
            let yU = new Tc;
            return cU.D.compare(UU, XU, zU, yU, 0), yU.changes
          }(zU, this.stateDeco, UU ? UU.changes : cU.ChangeSet.empty(this.state.doc.length))),
          AU = this.heightMap.height,
          FU = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
        fc(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, UU.startState.doc, this.heightOracle.setDoc(this.state.doc), QU), (this.heightMap.height != AU || uc) && (UU.flags |= 2), FU ? (this.scrollAnchorPos = UU.changes.mapPos(FU.from, -1), this.scrollAnchorHeight = FU.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = AU);
        let oU = QU.length ? this.mapViewport(this.viewport, UU.changes) : this.viewport;
        (XU && (XU.range.head < oU.from || XU.range.head > oU.to) || !this.viewportIsAppropriate(oU)) && (oU = this.getViewport(0, XU));
        let DU = oU.from != this.viewport.from || oU.to != this.viewport.to;
        this.viewport = oU, UU.flags |= this.updateForViewport(), (DU || !UU.changes.empty || 2 & UU.flags) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, UU.changes))), UU.flags |= this.computeVisibleRanges(UU.changes), XU && (this.scrollTarget = XU), !this.mustEnforceCursorAssoc && (UU.selectionSet || UU.focusChanged) && UU.view.lineWrapping && UU.state.selection.main.empty && UU.state.selection.main.assoc && !UU.state.facet(vX) && (this.mustEnforceCursorAssoc = !0)
      }
      measure() {
        let {
          view: UU
        } = this, XU = UU.contentDOM, zU = window.getComputedStyle(XU), yU = this.heightOracle, QU = zU.whiteSpace;
        this.defaultTextDirection = "rtl" == zU.direction ? DX.RTL : DX.LTR;
        let AU = this.heightOracle.mustRefreshForWrapping(QU) || "refresh" === this.mustMeasureContent,
          FU = XU.getBoundingClientRect(),
          oU = AU || this.mustMeasureContent || this.contentDOMHeight != FU.height;
        this.contentDOMHeight = FU.height, this.mustMeasureContent = !1;
        let DU = 0,
          EU = 0;
        if (FU.width && FU.height) {
          let {
            scaleX: UU,
            scaleY: zU
          } = bU(XU, FU);
          (UU > .005 && Math.abs(this.scaleX - UU) > .005 || zU > .005 && Math.abs(this.scaleY - zU) > .005) && (this.scaleX = UU, this.scaleY = zU, DU |= 16, AU = oU = !0)
        }
        let YU = (parseInt(zU.paddingTop) || 0) * this.scaleY,
          NU = (parseInt(zU.paddingBottom) || 0) * this.scaleY;
        this.paddingTop == YU && this.paddingBottom == NU || (this.paddingTop = YU, this.paddingBottom = NU, DU |= 18), this.editorWidth != UU.scrollDOM.clientWidth && (yU.lineWrapping && (oU = !0), this.editorWidth = UU.scrollDOM.clientWidth, DU |= 16);
        let IU = TU(this.view.contentDOM, !1).y;
        IU != this.scrollParent && (this.scrollParent = IU, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
        let pU = this.getScrollOffset();
        this.scrollOffset != pU && (this.scrollAnchorHeight = -1, this.scrollOffset = pU), this.scrolledToBottom = QX(this.scrollParent || UU.win);
        let aU = (this.printing ? Uy : hc)(XU, this.paddingTop),
          tU = aU.top - this.pixelViewport.top,
          gU = aU.bottom - this.pixelViewport.bottom;
        this.pixelViewport = aU;
        let kU = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
        if (kU != this.inView && (this.inView = kU, kU && (oU = !0)), !this.inView && !this.scrollTarget && ! function(UU) {
            let XU = UU.getBoundingClientRect(),
              zU = UU.ownerDocument.defaultView || window;
            return XU.left < zU.innerWidth && XU.right > 0 && XU.top < zU.innerHeight && XU.bottom > 0
          }(UU.dom)) return 0;
        let GU = FU.width;
        if (this.contentDOMWidth == GU && this.editorHeight == UU.scrollDOM.clientHeight || (this.contentDOMWidth = FU.width, this.editorHeight = UU.scrollDOM.clientHeight, DU |= 16), oU) {
          let XU = UU.docView.measureVisibleLineHeights(this.viewport);
          if (yU.mustRefreshForHeights(XU) && (AU = !0), AU || yU.lineWrapping && Math.abs(GU - this.contentDOMWidth) > yU.charWidth) {
            let {
              lineHeight: zU,
              charWidth: cU,
              textHeight: FU
            } = UU.docView.measureTextSize();
            AU = zU > 0 && yU.refresh(QU, zU, cU, FU, Math.max(5, GU / cU), XU), AU && (UU.docView.minWidth = 0, DU |= 16)
          }
          tU > 0 && gU > 0 ? EU = Math.max(tU, gU) : tU < 0 && gU < 0 && (EU = Math.min(tU, gU)), fc();
          for (let zU of this.viewports) {
            let QU = zU.from == this.viewport.from ? XU : UU.docView.measureVisibleLineHeights(zU);
            this.heightMap = (AU ? sc.empty().applyChanges(this.stateDeco, cU.O.empty, this.heightOracle, [new Dz(0, 0, 0, UU.state.doc.length)]) : this.heightMap).updateHeight(yU, 0, AU, new Hc(zU.from, QU))
          }
          uc && (DU |= 2)
        }
        let BU = !this.viewportIsAppropriate(this.viewport, EU) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
        return BU && (2 & DU && (DU |= this.updateScaler()), this.viewport = this.getViewport(EU, this.scrollTarget), DU |= this.updateForViewport()), (2 & DU || BU) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(AU ? [] : this.lineGaps, UU)), DU |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, UU.docView.enforceCursorAssoc()), DU
      }
      get visibleTop() {
        return this.scaler.fromDOM(this.pixelViewport.top)
      }
      get visibleBottom() {
        return this.scaler.fromDOM(this.pixelViewport.bottom)
      }
      getViewport(UU, XU) {
        let zU = .5 - Math.max(-.5, Math.min(.5, UU / 1e3 / 2)),
          cU = this.heightMap,
          yU = this.heightOracle,
          {
            visibleTop: QU,
            visibleBottom: AU
          } = this,
          FU = new yy(cU.lineAt(QU - 1e3 * zU, vc.ByHeight, yU, 0, 0).from, cU.lineAt(AU + 1e3 * (1 - zU), vc.ByHeight, yU, 0, 0).to);
        if (XU) {
          let {
            head: UU
          } = XU.range;
          if (UU < FU.from || UU > FU.to) {
            let zU, QU = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
              AU = cU.lineAt(UU, vc.ByPos, yU, 0, 0);
            zU = "center" == XU.y ? (AU.top + AU.bottom) / 2 - QU / 2 : "start" == XU.y || "nearest" == XU.y && UU < FU.from ? AU.top : AU.bottom - QU, FU = new yy(cU.lineAt(zU - 500, vc.ByHeight, yU, 0, 0).from, cU.lineAt(zU + QU + 500, vc.ByHeight, yU, 0, 0).to)
          }
        }
        return FU
      }
      mapViewport(UU, XU) {
        let zU = XU.mapPos(UU.from, -1),
          cU = XU.mapPos(UU.to, 1);
        return new yy(this.heightMap.lineAt(zU, vc.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(cU, vc.ByPos, this.heightOracle, 0, 0).to)
      }
      viewportIsAppropriate(UU) {
        let {
          from: XU,
          to: zU
        } = UU, cU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!this.inView) return !0;
        let {
          top: yU
        } = this.heightMap.lineAt(XU, vc.ByPos, this.heightOracle, 0, 0), {
          bottom: QU
        } = this.heightMap.lineAt(zU, vc.ByPos, this.heightOracle, 0, 0), {
          visibleTop: AU,
          visibleBottom: FU
        } = this;
        return (0 == XU || yU <= AU - Math.max(10, Math.min(-cU, 250))) && (zU == this.state.doc.length || QU >= FU + Math.max(10, Math.min(cU, 250))) && yU > AU - 2e3 && QU < FU + 2e3
      }
      mapLineGaps(UU, XU) {
        if (!UU.length || XU.empty) return UU;
        let zU = [];
        for (let cU of UU) XU.touchesRange(cU.from, cU.to) || zU.push(new Xy(XU.mapPos(cU.from), XU.mapPos(cU.to), cU.size, cU.displaySize));
        return zU
      }
      ensureLineGaps(UU, XU) {
        let zU = this.heightOracle.lineWrapping,
          yU = zU ? 1e4 : 2e3,
          QU = yU >> 1,
          AU = yU << 1;
        if (this.defaultTextDirection != DX.LTR && !zU) return [];
        let FU = [],
          oU = (yU, AU, DU, EU) => {
            if (AU - yU < QU) return;
            let YU = this.state.selection.main,
              NU = [YU.from];
            YU.empty || NU.push(YU.to);
            for (let UU of NU)
              if (UU > yU && UU < AU) return oU(yU, UU - 10, DU, EU), void oU(UU + 10, AU, DU, EU);
            let IU = function(UU, XU) {
              for (let zU of UU)
                if (XU(zU)) return zU;
              return
            }(UU, (UU => UU.from >= DU.from && UU.to <= DU.to && Math.abs(UU.from - yU) < QU && Math.abs(UU.to - AU) < QU && !NU.some((XU => UU.from < XU && UU.to > XU))));
            if (!IU) {
              if (AU < DU.to && XU && zU && XU.rUU.some((UU => UU.from <= AU && UU.to >= AU))) {
                let UU = XU.moveToLineBoundary(cU.k.cursor(AU), !1, !0).head;
                UU > yU && (AU = UU)
              }
              let UU = this.gapSize(DU, yU, AU, EU);
              IU = new Xy(yU, AU, UU, zU || UU < 2e6 ? UU : 2e6)
            }
            FU.push(IU)
          },
          DU = XU => {
            if (XU.length < AU || XU.type != qU.Text) return;
            let QU = function(UU, XU, zU) {
              let yU = [],
                QU = UU,
                AU = 0;
              cU.D.spans(zU, UU, XU, {
                span() {},
                point(UU, XU) {
                  UU > QU && (yU.push({
                    from: QU,
                    to: UU
                  }), AU += UU - QU), QU = XU
                }
              }, 20), QU < XU && (yU.push({
                from: QU,
                to: XU
              }), AU += XU - QU);
              return {
                total: AU,
                Qt: yU
              }
            }(XU.from, XU.to, this.stateDeco);
            if (QU.total < AU) return;
            let FU, DU, EU = this.scrollTarget ? this.scrollTarget.range.head : null;
            if (zU) {
              let UU, zU, cU = yU / this.heightOracle.lineLength * this.heightOracle.lineHeight;
              if (null != EU) {
                let yU = Ay(QU, EU),
                  AU = ((this.visibleBottom - this.visibleTop) / 2 + cU) / XU.height;
                UU = yU - AU, zU = yU + AU
              } else UU = (this.visibleTop - XU.top - cU) / XU.height, zU = (this.visibleBottom - XU.top + cU) / XU.height;
              FU = Qy(QU, UU), DU = Qy(QU, zU)
            } else {
              let zU = QU.total * this.heightOracle.charWidth,
                cU = yU * this.heightOracle.charWidth,
                AU = 0;
              if (zU > 2e6)
                for (let yU of UU) yU.from >= XU.from && yU.from < XU.to && yU.size != yU.displaySize && yU.from * this.heightOracle.charWidth + AU < this.pixelViewport.left && (AU = yU.size - yU.displaySize);
              let oU, YU, NU = this.pixelViewport.left + AU,
                IU = this.pixelViewport.right + AU;
              if (null != EU) {
                let UU = Ay(QU, EU),
                  XU = ((IU - NU) / 2 + cU) / zU;
                oU = UU - XU, YU = UU + XU
              } else oU = (NU - cU) / zU, YU = (IU + cU) / zU;
              FU = Qy(QU, oU), DU = Qy(QU, YU)
            }
            FU > XU.from && oU(XU.from, FU, XU, QU), DU < XU.to && oU(DU, XU.to, XU, QU)
          };
        for (let cU of this.viewportLines) Array.isArray(cU.type) ? cU.type.forEach(DU) : DU(cU);
        return FU
      }
      gapSize(UU, XU, zU, cU) {
        let yU = Ay(cU, zU) - Ay(cU, XU);
        return this.heightOracle.lineWrapping ? UU.height * yU : cU.total * this.heightOracle.charWidth * yU
      }
      updateLineGaps(UU) {
        Xy.same(UU, this.lineGaps) || (this.lineGaps = UU, this.lineGapDeco = OU.set(UU.map((UU => UU.draw(this, this.heightOracle.lineWrapping)))))
      }
      computeVisibleRanges(UU) {
        let XU = this.stateDeco;
        this.lineGaps.length && (XU = XU.concat(this.lineGapDeco));
        let zU = [];
        cU.D.spans(XU, this.viewport.from, this.viewport.to, {
          span(UU, XU) {
            zU.push({
              from: UU,
              to: XU
            })
          },
          point() {}
        }, 20);
        let yU = 0;
        if (zU.length != this.rUU.length) yU = 12;
        else
          for (let cU = 0; cU < zU.length && !(8 & yU); cU++) {
            let XU = this.rUU[cU],
              QU = zU[cU];
            XU.from == QU.from && XU.to == QU.to || (yU |= 4, UU && UU.mapPos(XU.from, -1) == QU.from && UU.mapPos(XU.to, 1) == QU.to || (yU |= 8))
          }
        return this.rUU = zU, yU
      }
      lineBlockAt(UU) {
        return UU >= this.viewport.from && UU <= this.viewport.to && this.viewportLines.find((XU => XU.from <= UU && XU.to >= UU)) || Ey(this.heightMap.lineAt(UU, vc.ByPos, this.heightOracle, 0, 0), this.scaler)
      }
      lineBlockAtHeight(UU) {
        return UU >= this.viewportLines[0].top && UU <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((XU => XU.top <= UU && XU.bottom >= UU)) || Ey(this.heightMap.lineAt(this.scaler.fromDOM(UU), vc.ByHeight, this.heightOracle, 0, 0), this.scaler)
      }
      getScrollOffset() {
        return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY
      }
      scrollAnchorAt(UU) {
        let XU = this.lineBlockAtHeight(UU + 8);
        return XU.from >= this.viewport.from || this.viewportLines[0].top - UU > 200 ? XU : this.viewportLines[0]
      }
      elementAtHeight(UU) {
        return Ey(this.heightMap.blockAt(this.scaler.fromDOM(UU), this.heightOracle, 0, 0), this.scaler)
      }
      get docHeight() {
        return this.scaler.toDOM(this.heightMap.height)
      }
      get contentHeight() {
        return this.docHeight + this.paddingTop + this.paddingBottom
      }
    }
    class yy {
      constructor(UU, XU) {
        this.from = UU, this.to = XU
      }
    }

    function Qy(UU, XU) {
      let {
        total: zU,
        Qt: cU
      } = UU;
      if (XU <= 0) return cU[0].from;
      if (XU >= 1) return cU[cU.length - 1].to;
      let yU = Math.floor(zU * XU);
      for (let QU = 0;; QU++) {
        let {
          from: UU,
          to: XU
        } = cU[QU], zU = XU - UU;
        if (yU <= zU) return UU + yU;
        yU -= zU
      }
    }

    function Ay(UU, XU) {
      let zU = 0;
      for (let {
          from: cU,
          to: yU
        }
        of UU.Qt) {
        if (XU <= yU) {
          zU += XU - cU;
          break
        }
        zU += yU - cU
      }
      return zU / UU.total
    }
    const Fy = {
      toDOM: UU => UU,
      fromDOM: UU => UU,
      scale: 1,
      eq(UU) {
        return UU == this
      }
    };

    function oy(UU) {
      let XU = UU.facet(Uz).filter((UU => "function" != typeof UU)),
        zU = UU.facet(zz).filter((UU => "function" != typeof UU));
      return zU.length && XU.push(cU.D.join(zU)), XU
    }
    class Dy {
      constructor(UU, XU, zU) {
        let cU = 0,
          yU = 0,
          QU = 0;
        this.viewports = zU.map((zU => {
          let {
            from: yU,
            to: QU
          } = zU, AU = XU.lineAt(yU, vc.ByPos, UU, 0, 0).top, FU = XU.lineAt(QU, vc.ByPos, UU, 0, 0).bottom;
          return cU += FU - AU, {
            from: yU,
            to: QU,
            top: AU,
            bottom: FU,
            domTop: 0,
            domBottom: 0
          }
        })), this.scale = (7e6 - cU) / (XU.height - cU);
        for (let AU of this.viewports) AU.domTop = QU + (AU.top - yU) * this.scale, QU = AU.domBottom = AU.domTop + (AU.bottom - AU.top), yU = AU.bottom
      }
      toDOM(UU) {
        for (let XU = 0, zU = 0, cU = 0;; XU++) {
          let yU = XU < this.viewports.length ? this.viewports[XU] : null;
          if (!yU || UU < yU.top) return cU + (UU - zU) * this.scale;
          if (UU <= yU.bottom) return yU.domTop + (UU - yU.top);
          zU = yU.bottom, cU = yU.domBottom
        }
      }
      fromDOM(UU) {
        for (let XU = 0, zU = 0, cU = 0;; XU++) {
          let yU = XU < this.viewports.length ? this.viewports[XU] : null;
          if (!yU || UU < yU.domTop) return zU + (UU - cU) / this.scale;
          if (UU <= yU.domBottom) return yU.top + (UU - yU.domTop);
          zU = yU.bottom, cU = yU.domBottom
        }
      }
      eq(UU) {
        return UU instanceof Dy && (this.scale == UU.scale && this.viewports.length == UU.viewports.length && this.viewports.every(((XU, zU) => XU.from == UU.viewports[zU].from && XU.to == UU.viewports[zU].to)))
      }
    }

    function Ey(UU, XU) {
      if (1 == XU.scale) return UU;
      let zU = XU.toDOM(UU.top),
        cU = XU.toDOM(UU.bottom);
      return new Mc(UU.from, UU.length, zU, cU - zU, Array.isArray(UU._content) ? UU._content.map((UU => Ey(UU, XU))) : UU._content)
    }
    const Yy = cU.r.define({
        combine: UU => UU.join(" ")
      }),
      Ny = cU.r.define({
        combine: UU => UU.indexOf(!0) > -1
      }),
      Iy = yU.e.newName(),
      py = yU.e.newName(),
      ay = yU.e.newName(),
      ty = {
        "&light": "." + py,
        "&dark": "." + ay
      };

    function gy(UU, XU, zU) {
      return new yU.e(XU, {
        finish: XU => /&/.test(XU) ? XU.replace(/&\w*/, (XU => {
          if ("&" == XU) return UU;
          if (!zU || !zU[XU]) throw new RangeError(`Unsupported selector: ${XU}`);
          return zU[XU]
        })) : UU + " " + XU
      })
    }
    const ky = gy("." + Iy, {
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
      }, ty),
      Gy = {
        childList: !0,
        characterData: !0,
        subtree: !0,
        attributes: !0,
        characterDataOldValue: !0
      },
      By = PU.ie && PU.ie_version <= 11;
    class Zy {
      constructor(UU) {
        this.view = UU, this.active = !1, this.editContext = null, this.selectionRange = new hU, this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = UU.contentDOM, this.observer = new MutationObserver((XU => {
          for (let UU of XU) this.queue.push(UU);
          (PU.ie && PU.ie_version <= 11 || PU.ios && UU.composing) && XU.some((UU => "childList" == UU.type && UU.removedNodes.length || "characterData" == UU.type && UU.oldValue.length > UU.target.nodeValue.length)) ? this.flushSoon() : this.flush()
        })), !window.EditContext || !PU.android || !1 === UU.constructor.EDIT_CONTEXT || PU.chrome && PU.chrome_version < 126 || (this.editContext = new Wy(UU), UU.state.facet(xX) && (UU.contentDOM.editContext = this.editContext.editContext)), By && (this.onCharData = UU => {
          this.queue.push({
            target: UU.target,
            type: "characterData",
            oldValue: UU.prevValue
          }), this.flushSoon()
        }), this.onSelectionChange = this.onSelectionChange.bind(this), this.QG = this.QG.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver((() => {
          var UU;
          (null === (UU = this.view.docView) || void 0 === UU ? void 0 : UU.lastUpdate) < Date.now() - 75 && this.QG()
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
      QG() {
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
        if (this.gapIntersection && (UU.length != this.gaps.length || this.gaps.some(((XU, zU) => XU != UU[zU])))) {
          this.gapIntersection.disconnect();
          for (let XU of UU) this.gapIntersection.observe(XU);
          this.gaps = UU
        }
      }
      onSelectionChange(UU) {
        let XU = this.selectionChanged;
        if (!this.readSelectionRange() || this.delayedAndroidKey) return;
        let {
          view: zU
        } = this, cU = this.selectionRange;
        if (zU.state.facet(xX) ? zU.root.activeElement != this.dom : !VU(this.dom, cU)) return;
        let yU = cU.anchorNode && zU.docView.tile.nearest(cU.anchorNode);
        yU && yU.isWidget() && yU.widget.ignoreEvent(UU) ? XU || (this.selectionChanged = !1) : (PU.ie && PU.ie_version <= 11 || PU.android && PU.chrome) && !zU.state.selection.main.empty && cU.focusNode && nU(cU.focusNode, cU.focusOffset, cU.anchorNode, cU.anchorOffset) ? this.flushSoon() : this.flush(!1)
      }
      readSelectionRange() {
        let {
          view: UU
        } = this, XU = MU(UU.root);
        if (!XU) return !1;
        let zU = PU.safari && 11 == UU.root.nodeType && UU.root.activeElement == this.dom && function(UU, XU) {
          if (XU.getComposedRanges) {
            let zU = XU.getComposedRanges(UU.root)[0];
            if (zU) return Py(UU, zU)
          }
          let zU = null;

          function cU(UU) {
            UU.preventDefault(), UU.stopImmediatePropagation(), zU = UU.getTargetRanges()[0]
          }
          return UU.contentDOM.addEventListener("beforeinput", cU, !0), UU.dom.ownerDocument.execCommand("indent"), UU.contentDOM.removeEventListener("beforeinput", cU, !0), zU ? Py(UU, zU) : null
        }(this.view, XU) || XU;
        if (!zU || this.selectionRange.eq(zU)) return !1;
        let cU = VU(this.dom, zU);
        return cU && !this.selectionChanged && UU.inputState.lastFocusTime > Date.now() - 200 && UU.inputState.lastTouchTime < Date.now() - 300 && function(UU, XU) {
          let zU = XU.focusNode,
            cU = XU.focusOffset;
          if (!zU || XU.anchorNode != zU || XU.anchorOffset != cU) return !1;
          for (cU = Math.min(cU, JU(zU));;)
            if (cU) {
              if (1 != zU.nodeType) return !1;
              let UU = zU.childNodes[cU - 1];
              "false" == UU.contentEditable ? cU-- : (zU = UU, cU = JU(zU))
            } else {
              if (zU == UU) return !0;
              cU = mU(zU), zU = zU.parentNode
            }
        }(this.dom, zU) ? (this.view.inputState.lastFocusTime = 0, UU.docView.updateSelection(), !1) : (this.selectionRange.setRange(zU), cU && (this.selectionChanged = !0), !0)
      }
      setSelectionRange(UU, XU) {
        this.selectionRange.set(UU.node, UU.offset, XU.node, XU.offset), this.selectionChanged = !1
      }
      clearSelectionRange() {
        this.selectionRange.set(null, 0, null, 0)
      }
      listenForScroll() {
        this.parentCheck = -1;
        let UU = 0,
          XU = null;
        for (let zU = this.dom; zU;)
          if (1 == zU.nodeType) !XU && UU < this.scrollTargets.length && this.scrollTargets[UU] == zU ? UU++ : XU || (XU = this.scrollTargets.slice(0, UU)), XU && XU.push(zU), zU = zU.assignedSlot || zU.parentNode;
          else {
            if (11 != zU.nodeType) break;
            zU = zU.host
          } if (UU < this.scrollTargets.length && !XU && (XU = this.scrollTargets.slice(0, UU)), XU) {
          for (let UU of this.scrollTargets) UU.removeEventListener("scroll", this.onScroll);
          for (let UU of this.scrollTargets = XU) UU.addEventListener("scroll", this.onScroll)
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
        this.active || (this.observer.observe(this.dom, Gy), By && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0)
      }
      stop() {
        this.active && (this.active = !1, this.observer.disconnect(), By && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData))
      }
      clear() {
        this.processRecords(), this.queue.length = 0, this.selectionChanged = !1
      }
      delayAndroidKey(UU, XU) {
        var zU;
        if (!this.delayedAndroidKey) {
          let UU = () => {
            let UU = this.delayedAndroidKey;
            if (UU) {
              this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = UU.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && UU.force && yX(this.dom, UU.key, UU.keyCode)
            }
          };
          this.flushingAndroidKey = this.view.win.requestAnimationFrame(UU)
        }
        this.delayedAndroidKey && "Enter" != UU || (this.delayedAndroidKey = {
          key: UU,
          keyCode: XU,
          force: this.lastChange < Date.now() - 50 || !!(null === (zU = this.delayedAndroidKey) || void 0 === zU ? void 0 : zU.force)
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
        let XU = -1,
          zU = -1,
          cU = !1;
        for (let yU of UU) {
          let UU = this.readMutation(yU);
          UU && (UU.typeOver && (cU = !0), -1 == XU ? ({
            from: XU,
            to: zU
          } = UU) : (XU = Math.min(UU.from, XU), zU = Math.max(UU.to, zU)))
        }
        return {
          from: XU,
          to: zU,
          typeOver: cU
        }
      }
      readChange() {
        let {
          from: UU,
          to: XU,
          typeOver: zU
        } = this.processRecords(), cU = this.selectionChanged && VU(this.dom, this.selectionRange);
        if (UU < 0 && !cU) return null;
        UU > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
        let yU = new zc(this.view, UU, XU, zU);
        return this.view.docView.domChanged = {
          newSel: yU.newSel ? yU.newSel.main : null
        }, yU
      }
      flush() {
        let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
        UU && this.readSelectionRange();
        let XU = this.readChange();
        if (!XU) return this.view.requestMeasure(), !1;
        let zU = this.view.state,
          cU = yc(this.view, XU);
        return this.view.state == zU && (XU.domChanged || XU.newSel && !Fc(this.view.state.selection, XU.newSel.main)) && this.view.update([]), cU
      }
      readMutation(UU) {
        let XU = this.view.docView.tile.nearest(UU.target);
        if (!XU || XU.isWidget()) return null;
        if (XU.markDirty("attributes" == UU.type), "childList" == UU.type) {
          let zU = Ry(XU, UU.previousSibling || UU.target.previousSibling, -1),
            cU = Ry(XU, UU.nextSibling || UU.target.nextSibling, 1);
          return {
            from: zU ? XU.posAfter(zU) : XU.posAtStart,
            to: cU ? XU.posBefore(cU) : XU.posAtEnd,
            typeOver: !1
          }
        }
        return "characterData" == UU.type ? {
          from: XU.posAtStart,
          to: XU.posAtEnd,
          typeOver: UU.target.nodeValue == UU.oldValue
        } : null
      }
      setWindow(UU) {
        UU != this.win && (this.removeWindowListeners(this.win), this.win = UU, this.addWindowListeners(this.win))
      }
      addWindowListeners(UU) {
        UU.addEventListener("resize", this.QG), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : UU.addEventListener("beforeprint", this.onPrint), UU.addEventListener("scroll", this.onScroll), UU.document.addEventListener("selectionchange", this.onSelectionChange)
      }
      removeWindowListeners(UU) {
        UU.removeEventListener("scroll", this.onScroll), UU.removeEventListener("resize", this.QG), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : UU.removeEventListener("beforeprint", this.onPrint), UU.document.removeEventListener("selectionchange", this.onSelectionChange)
      }
      update(UU) {
        this.editContext && (this.editContext.update(UU), UU.startState.facet(xX) != UU.state.facet(xX) && (UU.view.contentDOM.editContext = UU.state.facet(xX) ? this.editContext.editContext : null))
      }
      destroy() {
        var UU, XU, zU;
        this.stop(), null === (UU = this.intersection) || void 0 === UU || UU.disconnect(), null === (XU = this.gapIntersection) || void 0 === XU || XU.disconnect(), null === (zU = this.resizeScroll) || void 0 === zU || zU.disconnect();
        for (let cU of this.scrollTargets) cU.removeEventListener("scroll", this.onScroll);
        this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy())
      }
    }

    function Ry(UU, XU, zU) {
      for (; XU;) {
        let cU = Nz.get(XU);
        if (cU && cU.parent == UU) return cU;
        let yU = XU.parentNode;
        XU = yU != UU.dom ? yU : zU > 0 ? XU.nextSibling : XU.previousSibling
      }
      return null
    }

    function Py(UU, XU) {
      let zU = XU.startContainer,
        cU = XU.startOffset,
        yU = XU.endContainer,
        QU = XU.endOffset,
        AU = UU.docView.domAtPos(UU.state.selection.main.anchor, 1);
      return nU(AU.node, AU.offset, yU, QU) && ([zU, cU, yU, QU] = [yU, QU, zU, cU]), {
        anchorNode: zU,
        anchorOffset: cU,
        focusNode: yU,
        focusOffset: QU
      }
    }
    class Wy {
      constructor(UU) {
        this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = Object.create(null), this.composing = null, this.resetRange(UU.state);
        let XU = this.editContext = new window.EditContext({
          text: UU.state.doc.sliceString(this.from, this.to),
          selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, UU.state.selection.main.anchor))),
          selectionEnd: this.toContextPos(UU.state.selection.main.head)
        });
        this.handlers.textupdate = zU => {
          let yU = UU.state.selection.main,
            {
              anchor: QU,
              head: AU
            } = yU,
            FU = this.toEditorPos(zU.updateRangeStart),
            oU = this.toEditorPos(zU.updateRangeEnd);
          UU.inputState.composing >= 0 && !this.composing && (this.composing = {
            contextBase: zU.updateRangeStart,
            editorBase: FU,
            drifted: !1
          });
          let DU = oU - FU > zU.text.length;
          FU == this.from && QU < this.from ? FU = QU : oU == this.to && QU > this.to && (oU = QU);
          let EU = Ac(UU.state.sliceDoc(FU, oU), zU.text, (DU ? yU.from : yU.to) - FU, DU ? "end" : null);
          if (!EU) {
            let XU = cU.k.single(this.toEditorPos(zU.selectionStart), this.toEditorPos(zU.selectionEnd));
            return void(Fc(XU, yU) || UU.dispatch({
              selection: XU,
              userEvent: "select"
            }))
          }
          let YU = {
            from: EU.from + FU,
            to: EU.toA + FU,
            insert: cU.O.of(zU.text.slice(EU.from, EU.toB).split("\n"))
          };
          if ((PU.mac || PU.android) && YU.from == AU - 1 && /^\. ?$/.test(zU.text) && "off" == UU.contentDOM.getAttribute("autocorrect") && (YU = {
              from: FU,
              to: oU,
              insert: cU.O.of([zU.text.replace(".", " ")])
            }), this.pendingContextChange = YU, !UU.state.readOnly) {
            let XU = this.to - this.from + (YU.to - YU.from + YU.insert.length);
            Qc(UU, YU, cU.k.single(this.toEditorPos(zU.selectionStart, XU), this.toEditorPos(zU.selectionEnd, XU)))
          }
          this.pendingContextChange && (this.revertPending(UU.state), this.setSelection(UU.state)), YU.from < YU.to && !YU.insert.length && UU.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(XU.text.slice(Math.max(0, zU.updateRangeStart - 1), Math.min(XU.text.length, zU.updateRangeStart + 1))) && this.handlers.compositionend(zU)
        }, this.handlers.characterboundsupdate = zU => {
          let cU = [],
            yU = null;
          for (let XU = this.toEditorPos(zU.rangeStart), QU = this.toEditorPos(zU.rangeEnd); XU < QU; XU++) {
            let zU = UU.coordsForChar(XU);
            yU = zU && new DOMRect(zU.left, zU.top, zU.right - zU.left, zU.bottom - zU.top) || yU || new DOMRect, cU.push(yU)
          }
          XU.updateCharacterBounds(zU.rangeStart, cU)
        }, this.handlers.textformatupdate = XU => {
          let zU = [];
          for (let UU of XU.getTextFormats()) {
            let XU = UU.underlineStyle,
              cU = UU.underlineThickness;
            if (!/none/i.test(XU) && !/none/i.test(cU)) {
              let yU = this.toEditorPos(UU.rangeStart),
                QU = this.toEditorPos(UU.rangeEnd);
              if (yU < QU) {
                let UU = `text-decoration: underline ${/^[a-z]/.test(XU)?XU+" ":"Dashed"==XU?"dashed ":"Squiggle"==XU?"wavy ":""}${/thin/i.test(cU)?1:2}px`;
                zU.push(OU.mark({
                  attributes: {
                    style: UU
                  }
                }).range(yU, QU))
              }
            }
          }
          UU.dispatch({
            effects: mX.of(OU.set(zU))
          })
        }, this.handlers.compositionstart = () => {
          UU.inputState.composing < 0 && (UU.inputState.composing = 0, UU.inputState.compositionFirstChange = !0)
        }, this.handlers.compositionend = () => {
          if (UU.inputState.composing = -1, UU.inputState.compositionFirstChange = null, this.composing) {
            let {
              drifted: XU
            } = this.composing;
            this.composing = null, XU && this.reset(UU.state)
          }
        };
        for (let zU in this.handlers) XU.addEventListener(zU, this.handlers[zU]);
        this.measureReq = {
          read: UU => {
            this.editContext.updateControlBounds(UU.contentDOM.getBoundingClientRect());
            let XU = MU(UU.root);
            XU && XU.rangeCount && this.editContext.updateSelectionBounds(XU.getRangeAt(0).getBoundingClientRect())
          }
        }
      }
      applyEdits(UU) {
        let XU = 0,
          zU = !1,
          cU = this.pendingContextChange;
        return UU.changes.iterChanges(((yU, QU, AU, FU, oU) => {
          if (zU) return;
          let DU = oU.length - (QU - yU);
          if (cU && QU >= cU.to) {
            if (cU.from == yU && cU.to == QU && cU.insert.eq(oU)) return cU = this.pendingContextChange = null, XU += DU, void(this.to += DU);
            cU = null, this.revertPending(UU.state)
          }
          if (yU += XU, (QU += XU) <= this.from) this.from += DU, this.to += DU;
          else if (yU < this.to) {
            if (yU < this.from || QU > this.to || this.to - this.from + oU.length > 3e4) return void(zU = !0);
            this.editContext.updateText(this.toContextPos(yU), this.toContextPos(QU), oU.toString()), this.to += DU
          }
          XU += DU
        })), cU && !zU && this.revertPending(UU.state), !zU
      }
      update(UU) {
        let XU = this.pendingContextChange,
          zU = UU.startState.selection.main;
        this.composing && (this.composing.drifted || !UU.changes.touchesRange(zU.from, zU.to) && UU.transactions.some((UU => !UU.isUserEvent("input.type") && UU.changes.touchesRange(this.from, this.to)))) ? (this.composing.drifted = !0, this.composing.editorBase = UU.changes.mapPos(this.composing.editorBase)) : this.applyEdits(UU) && this.rangeIsValid(UU.state) ? (UU.docChanged || UU.selectionSet || XU) && this.setSelection(UU.state) : (this.pendingContextChange = null, this.reset(UU.state)), (UU.geometryChanged || UU.docChanged || UU.selectionSet) && UU.view.requestMeasure(this.measureReq)
      }
      resetRange(UU) {
        let {
          head: XU
        } = UU.selection.main;
        this.from = Math.max(0, XU - 1e4), this.to = Math.min(UU.doc.length, XU + 1e4)
      }
      reset(UU) {
        this.resetRange(UU), this.editContext.updateText(0, this.editContext.text.length, UU.doc.sliceString(this.from, this.to)), this.setSelection(UU)
      }
      revertPending(UU) {
        let XU = this.pendingContextChange;
        this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(XU.from), this.toContextPos(XU.from + XU.insert.length), UU.doc.sliceString(XU.from, XU.to))
      }
      setSelection(UU) {
        let {
          main: XU
        } = UU.selection, zU = this.toContextPos(Math.max(this.from, Math.min(this.to, XU.anchor))), cU = this.toContextPos(XU.head);
        this.editContext.selectionStart == zU && this.editContext.selectionEnd == cU || this.editContext.updateSelection(zU, cU)
      }
      rangeIsValid(UU) {
        let {
          head: XU
        } = UU.selection.main;
        return !(this.from > 0 && XU - this.from < 500 || this.to < UU.doc.length && this.to - XU < 500 || this.to - this.from > 3e4)
      }
      toEditorPos(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.to - this.from;
        UU = Math.min(UU, XU);
        let zU = this.composing;
        return zU && zU.drifted ? zU.editorBase + (UU - zU.contextBase) : UU + this.from
      }
      toContextPos(UU) {
        let XU = this.composing;
        return XU && XU.drifted ? XU.contextBase + (UU - XU.editorBase) : UU - this.from
      }
      destroy() {
        for (let UU in this.handlers) this.editContext.removeEventListener(UU, this.handlers[UU])
      }
    }
    class dy {
      get state() {
        return this.viewState.state
      }
      get viewport() {
        return this.viewState.viewport
      }
      get rUU() {
        return this.viewState.rUU
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
        var XU;
        this.plugins = [], this.pluginMap = new Map, this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), UU.parent && UU.parent.appendChild(this.dom);
        let {
          dispatch: zU
        } = UU;
        this.dispatchTransactions = UU.dispatchTransactions || zU && (UU => UU.forEach((UU => zU(UU, this)))) || (UU => this.update(UU)), this.dispatch = this.dispatch.bind(this), this._root = UU.root || function(UU) {
          for (; UU;) {
            if (UU && (9 == UU.nodeType || 11 == UU.nodeType && UU.host)) return UU;
            UU = UU.assignedSlot || UU.parentNode
          }
          return null
        }(UU.parent) || document, this.viewState = new cy(this, UU.state || cU.n.create(UU)), UU.scrollTo && UU.scrollTo.is(nX) && (this.viewState.scrollTarget = UU.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(jX).map((UU => new bX(UU)));
        for (let cU of this.plugins) cU.update(this);
        this.observer = new Zy(this), this.inputState = new oc(this), this.inputState.ensureHandlers(this.plugins), this.docView = new fz(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), (null === (XU = document.fonts) || void 0 === XU ? void 0 : XU.ready) && document.fonts.ready.then((() => {
          this.viewState.mustMeasureContent = "refresh", this.requestMeasure()
        }))
      }
      dispatch() {
        for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
        let yU = 1 == XU.length && XU[0] instanceof cU.P ? XU : 1 == XU.length && Array.isArray(XU[0]) ? XU[0] : [this.state.update(...XU)];
        this.dispatchTransactions(yU, this)
      }
      update(UU) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        let XU, zU = !1,
          yU = !1,
          QU = this.state;
        for (let cU of UU) {
          if (cU.startState != QU) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
          QU = cU.state
        }
        if (this.destroyed) return void(this.viewState.state = QU);
        let AU = this.hasFocus,
          FU = 0,
          oU = null;
        UU.some((UU => UU.annotation(wc))) ? (this.inputState.notifiedFocused = AU, FU = 1) : AU != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = AU, oU = qc(QU, AU), oU || (FU = 1));
        let DU = this.observer.delayedAndroidKey,
          EU = null;
        if (DU ? (this.observer.clearDelayedAndroidKey(), EU = this.observer.readChange(), (EU && !this.state.doc.eq(QU.doc) || !this.state.selection.eq(QU.selection)) && (EU = null)) : this.observer.clear(), QU.facet(cU.n.phrases) != this.state.facet(cU.n.phrases)) return this.setState(QU);
        XU = Ez.create(this, QU, UU), XU.flags |= FU;
        let YU = this.viewState.scrollTarget;
        try {
          this.updateState = 2;
          for (let XU of UU) {
            if (YU && (YU = YU.map(XU.changes)), XU.scrollIntoView) {
              let {
                main: UU
              } = XU.state.selection, {
                x: zU,
                y: yU
              } = this.state.facet(dy.cursorScrollMargin);
              YU = new sX(UU.empty ? UU : cU.k.cursor(UU.head, UU.head > UU.anchor ? -1 : 1), "nearest", "nearest", yU, zU)
            }
            for (let UU of XU.effects) UU.is(nX) && (YU = UU.value.clip(this.state))
          }
          this.viewState.update(XU, YU), this.bidiCache = Cy.update(this.bidiCache, XU.changes), XU.empty || (this.updatePlugins(XU), this.inputState.update(XU)), zU = this.docView.update(XU), this.state.facet(oz) != this.styleModules && this.mountStyles(), yU = this.updateAttrs(), this.showAnnouncements(UU), this.docView.updateSelection(zU, UU.some((UU => UU.isUserEvent("select.pointer"))))
        } finally {
          this.updateState = 0
        }
        if (XU.startState.facet(Yy) != XU.state.facet(Yy) && (this.viewState.mustMeasureContent = !0), (zU || yU || YU || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), zU && this.docViewUpdate(), !XU.empty)
          for (let cU of this.state.facet(rX)) try {
            cU(XU)
          } catch (NU) {
            lX(this.state, NU, "update listener")
          }(oU || EU) && Promise.resolve().then((() => {
            oU && this.state == oU.startState && this.dispatch(oU), EU && !yc(this, EU) && DU.force && yX(this.contentDOM, DU.key, DU.keyCode)
          }))
      }
      setState(UU) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
        if (this.destroyed) return void(this.viewState.state = UU);
        this.updateState = 2;
        let XU = this.hasFocus;
        try {
          for (let UU of this.plugins) UU.destroy(this);
          this.viewState = new cy(this, UU), this.plugins = UU.facet(jX).map((UU => new bX(UU))), this.pluginMap.clear();
          for (let UU of this.plugins) UU.update(this);
          this.docView.destroy(), this.docView = new fz(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = []
        } finally {
          this.updateState = 0
        }
        XU && this.focus(), this.requestMeasure()
      }
      updatePlugins(UU) {
        let XU = UU.startState.facet(jX),
          zU = UU.state.facet(jX);
        if (XU != zU) {
          let cU = [];
          for (let yU of zU) {
            let zU = XU.indexOf(yU);
            if (zU < 0) cU.push(new bX(yU));
            else {
              let XU = this.plugins[zU];
              XU.mustUpdate = UU, cU.push(XU)
            }
          }
          for (let XU of this.plugins) XU.mustUpdate != UU && XU.destroy(this);
          this.plugins = cU, this.pluginMap.clear()
        } else
          for (let cU of this.plugins) cU.mustUpdate = UU;
        for (let cU = 0; cU < this.plugins.length; cU++) this.plugins[cU].update(this);
        XU != zU && this.inputState.ensureHandlers(this.plugins)
      }
      docViewUpdate() {
        for (let XU of this.plugins) {
          let zU = XU.value;
          if (zU && zU.docViewUpdate) try {
            zU.docViewUpdate(this)
          } catch (UU) {
            lX(this.state, UU, "doc view update listener")
          }
        }
      }
      measure() {
        let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.destroyed) return;
        if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) return this.measureScheduled = -1, void this.requestMeasure();
        this.measureScheduled = 0, UU && this.observer.forceFlush();
        let XU = null,
          zU = this.viewState.scrollParent,
          cU = this.viewState.getScrollOffset(),
          {
            scrollAnchorPos: yU,
            scrollAnchorHeight: QU
          } = this.viewState;
        Math.abs(cU - this.viewState.scrollOffset) > 1 && (QU = -1), this.viewState.scrollAnchorHeight = -1;
        try {
          for (let UU = 0;; UU++) {
            if (QU < 0)
              if (QX(zU || this.win)) yU = -1, QU = this.viewState.heightMap.height;
              else {
                let UU = this.viewState.scrollAnchorAt(cU);
                yU = UU.from, QU = UU.top
              } this.updateState = 1;
            let FU = this.viewState.measure();
            if (!FU && !this.measureRequests.length && null == this.viewState.scrollTarget) break;
            if (UU > 5) {
              console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
              break
            }
            let oU = [];
            4 & FU || ([this.measureRequests, oU] = [oU, this.measureRequests]);
            let DU = oU.map((UU => {
                try {
                  return UU.read(this)
                } catch (XU) {
                  return lX(this.state, XU), ey
                }
              })),
              EU = Ez.create(this, this.state, []),
              YU = !1;
            EU.flags |= FU, XU ? XU.flags |= FU : XU = EU, this.updateState = 2, EU.empty || (this.updatePlugins(EU), this.inputState.update(EU), this.updateAttrs(), YU = this.docView.update(EU), YU && this.docViewUpdate());
            for (let UU = 0; UU < oU.length; UU++)
              if (DU[UU] != ey) try {
                let XU = oU[UU];
                XU.write && XU.write(DU[UU], this)
              } catch (AU) {
                lX(this.state, AU)
              }
            if (YU && this.docView.updateSelection(!0), !EU.viewportChanged && 0 == this.measureRequests.length) {
              if (this.viewState.editorHeight) {
                if (this.viewState.scrollTarget) {
                  this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, QU = -1;
                  continue
                } {
                  let UU = ((yU < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(yU).top) - QU) / this.scaleY;
                  if ((UU > 1 || UU < -1) && (zU == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                    cU += UU, zU ? zU.scrollTop += UU : this.win.scrollBy(0, UU), QU = -1;
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
        if (XU && !XU.empty)
          for (let FU of this.state.facet(rX)) FU(XU)
      }
      get themeClasses() {
        return Iy + " " + (this.state.facet(Ny) ? ay : py) + " " + this.state.facet(Yy)
      }
      updateAttrs() {
        let UU = wy(this, TX, {
            class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
          }),
          XU = {
            spellcheck: "false",
            autocorrect: "off",
            autocapitalize: "off",
            writingsuggestions: "false",
            translate: "no",
            contenteditable: this.state.facet(xX) ? "true" : "false",
            class: "cm-content",
            style: `${PU.tabSize}: ${this.state.tabSize}`,
            role: "textbox",
            "aria-multiline": "true"
          };
        this.state.readOnly && (XU["aria-readonly"] = "true"), wy(this, hX, XU);
        let zU = this.observer.ignore((() => {
          let zU = eU(this.contentDOM, this.contentAttrs, XU),
            cU = eU(this.dom, this.editorAttrs, UU);
          return zU || cU
        }));
        return this.editorAttrs = UU, this.contentAttrs = XU, zU
      }
      showAnnouncements(UU) {
        let XU = !0;
        for (let zU of UU)
          for (let UU of zU.effects)
            if (UU.is(dy.announce)) {
              XU && (this.announceDOM.textContent = ""), XU = !1, this.announceDOM.appendChild(document.createElement("div")).textContent = UU.value
            }
      }
      mountStyles() {
        this.styleModules = this.state.facet(oz);
        let UU = this.state.facet(dy.cspNonce);
        yU.e.mount(this.root, this.styleModules.concat(ky).reverse(), UU ? {
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
            for (let XU = 0; XU < this.measureRequests.length; XU++)
              if (this.measureRequests[XU].key === UU.key) return void(this.measureRequests[XU] = UU);
          this.measureRequests.push(UU)
        }
      }
      plugin(UU) {
        let XU = this.pluginMap.get(UU);
        return (void 0 === XU || XU && XU.plugin != UU) && this.pluginMap.set(UU, XU = this.plugins.find((XU => XU.plugin == UU)) || null), XU && XU.update(this).value
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
      moveByChar(UU, XU, zU) {
        return xz(this, UU, nz(this, UU, XU, zU))
      }
      moveByGroup(UU, XU) {
        return xz(this, UU, nz(this, UU, XU, (XU => function(UU, XU, zU) {
          let yU = UU.state.charCategorizer(XU),
            QU = yU(zU);
          return UU => {
            let XU = yU(UU);
            return QU == cU.j.Space && (QU = XU), QU == XU
          }
        }(this, UU.head, XU))))
      }
      visualLineSide(UU, XU) {
        let zU = this.bidiSpans(UU),
          yU = this.textDirectionAt(UU.from),
          QU = zU[XU ? zU.length - 1 : 0];
        return cU.k.cursor(QU.side(XU, yU) + UU.from, QU.forward(!XU, yU) ? 1 : -1)
      }
      moveToLineBoundary(UU, XU) {
        return function(UU, XU, zU, yU) {
          let QU = sz(UU, XU.head, XU.assoc || -1),
            AU = yU && QU.type == qU.Text && (UU.lineWrapping || QU.widgetLineBreaks) ? UU.coordsAtPos(XU.assoc < 0 && XU.head > QU.from ? XU.head - 1 : XU.head) : null;
          if (AU) {
            let XU = UU.dom.getBoundingClientRect(),
              yU = UU.textDirectionAt(QU.from),
              FU = UU.posAtCoords({
                x: zU == (yU == DX.LTR) ? XU.right - 1 : XU.left + 1,
                y: (AU.top + AU.bottom) / 2
              });
            if (null != FU) return cU.k.cursor(FU, zU ? -1 : 1)
          }
          return cU.k.cursor(zU ? QU.to : QU.from, zU ? -1 : 1)
        }(this, UU, XU, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2])
      }
      moveVertically(UU, XU, zU) {
        return xz(this, UU, function(UU, XU, zU, yU) {
          let QU = XU.head,
            AU = zU ? 1 : -1;
          if (QU == (zU ? UU.state.doc.length : 0)) return cU.k.cursor(QU, XU.assoc);
          let FU, oU = XU.goalColumn,
            DU = UU.contentDOM.getBoundingClientRect(),
            EU = UU.coordsAtPos(QU, XU.assoc || ((XU.empty ? zU : XU.head == XU.from) ? 1 : -1)),
            YU = UU.documentTop;
          if (EU) null == oU && (oU = EU.left - DU.left), FU = AU < 0 ? EU.top : EU.bottom;
          else {
            let XU = UU.viewState.lineBlockAt(QU);
            null == oU && (oU = Math.min(DU.right - DU.left, UU.defaultCharacterWidth * (QU - XU.from))), FU = (AU < 0 ? XU.top : XU.bottom) + YU
          }
          let NU = DU.left + oU,
            IU = UU.viewState.heightOracle.textHeight >> 1,
            pU = null !== yU && void 0 !== yU ? yU : IU;
          for (let aU = 0;; aU += IU) {
            let XU = FU + (pU + aU) * AU,
              yU = jz(UU, {
                x: NU,
                y: XU
              }, !1, AU);
            if (zU ? XU > DU.bottom : XU < DU.top) return cU.k.cursor(yU.pos, yU.assoc);
            let QU = UU.coordsAtPos(yU.pos, yU.assoc),
              EU = QU ? (QU.top + QU.bottom) / 2 : 0;
            if (!QU || (zU ? EU > FU : EU < FU)) return cU.k.cursor(yU.pos, yU.assoc, void 0, oU)
          }
        }(this, UU, XU, zU))
      }
      domAtPos(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return this.docView.domAtPos(UU, XU)
      }
      posAtDOM(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.docView.posFromDOM(UU, XU)
      }
      posAtCoords(UU) {
        let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this.readMeasured();
        let zU = jz(this, UU, XU);
        return zU && zU.pos
      }
      posAndSideAtCoords(UU) {
        let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return this.readMeasured(), jz(this, UU, XU)
      }
      coordsAtPos(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.readMeasured();
        let zU = this.docView.coordsAt(UU, XU);
        if (!zU || zU.left == zU.right) return zU;
        let cU = this.state.doc.lineAt(UU),
          yU = this.bidiSpans(cU);
        return jU(zU, yU[GX.find(yU, UU - cU.from, -1, XU)].dir == DX.LTR == XU > 0)
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
        return !this.state.facet(MX) || UU < this.viewport.from || UU > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(UU))
      }
      get lineWrapping() {
        return this.viewState.heightOracle.lineWrapping
      }
      bidiSpans(UU) {
        if (UU.length > Ly) return dX(UU.length);
        let XU, zU = this.textDirectionAt(UU.from);
        for (let yU of this.bidiCache)
          if (yU.from == UU.from && yU.dir == zU && (yU.fresh || BX(yU.isolates, XU = Qz(this, UU)))) return yU.order;
        XU || (XU = Qz(this, UU));
        let cU = WX(UU.text, zU, XU);
        return this.bidiCache.push(new Cy(UU.from, UU.to, zU, XU, !0, cU)), cU
      }
      get hasFocus() {
        var UU;
        return (this.dom.ownerDocument.hasFocus() || PU.safari && (null === (UU = this.inputState) || void 0 === UU ? void 0 : UU.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM
      }
      focus() {
        this.observer.ignore((() => {
          zX(this.contentDOM), this.docView.updateSelection()
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
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var zU, yU, QU, AU;
        return nX.of(new sX("number" == typeof UU ? cU.k.cursor(UU) : UU, null !== (zU = XU.y) && void 0 !== zU ? zU : "nearest", null !== (yU = XU.x) && void 0 !== yU ? yU : "nearest", null !== (QU = XU.yMargin) && void 0 !== QU ? QU : 5, null !== (AU = XU.xMargin) && void 0 !== AU ? AU : 5))
      }
      scrollSnapshot() {
        let {
          scrollTop: UU,
          scrollLeft: XU
        } = this.scrollDOM, zU = this.viewState.scrollAnchorAt(UU);
        return nX.of(new sX(cU.k.cursor(zU.from), "start", "start", zU.top - UU, XU, !0))
      }
      setTabFocusMode(UU) {
        null == UU ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof UU ? this.inputState.tabFocusMode = UU ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + UU)
      }
      static domEventHandlers(UU) {
        return KX.define((() => ({})), {
          eventHandlers: UU
        })
      }
      static domEventObservers(UU) {
        return KX.define((() => ({})), {
          eventObservers: UU
        })
      }
      static theme(UU, XU) {
        let zU = yU.e.newName(),
          cU = [Yy.of(zU), oz.of(gy(`.${zU}`, UU))];
        return XU && XU.dark && cU.push(Ny.of(!0)), cU
      }
      static baseTheme(UU) {
        return cU.w.lowest(oz.of(gy("." + Iy, UU, ty)))
      }
      static findFromDOM(UU) {
        var XU;
        let zU = UU.querySelector(".cm-content"),
          cU = zU && Nz.get(zU) || Nz.get(UU);
        return (null === (XU = null === cU || void 0 === cU ? void 0 : cU.root) || void 0 === XU ? void 0 : XU.view) || null
      }
    }
    dy.styleModule = oz, dy.inputHandler = uX, dy.clipboardInputFilter = iX, dy.clipboardOutputFilter = HX, dy.scrollHandler = VX, dy.focusChangeEffect = fX, dy.perLineTextDirection = MX, dy.exceptionSink = SX, dy.updateListener = rX, dy.editable = xX, dy.mouseSelectionStyle = OX, dy.dragMovesSelection = qX, dy.clickAddsSelectionRange = wX, dy.hy = Uz, dy.blockWrappers = Xz, dy.outerDecorations = zz, dy.atomicRanges = cz, dy.bidiIsolatedRanges = yz, dy.cursorScrollMargin = cU.r.define({
      combine: UU => {
        let XU = 5,
          zU = 5;
        for (let cU of UU) "number" == typeof cU ? XU = zU = cU : ({
          x: XU,
          y: zU
        } = cU);
        return {
          x: XU,
          y: zU
        }
      }
    }), dy.scrollMargins = Az, dy.darkTheme = Ny, dy.cspNonce = cU.r.define({
      combine: UU => UU.length ? UU[0] : ""
    }), dy.contentAttributes = hX, dy.editorAttributes = TX, dy.lineWrapping = dy.contentAttributes.of({
      class: "cm-lineWrapping"
    }), dy.announce = cU.H.define();
    const Ly = 4096,
      ey = {};
    class Cy {
      constructor(UU, XU, zU, cU, yU, QU) {
        this.from = UU, this.to = XU, this.dir = zU, this.isolates = cU, this.fresh = yU, this.order = QU
      }
      static update(UU, XU) {
        if (XU.empty && !UU.some((UU => UU.fresh))) return UU;
        let zU = [],
          cU = UU.length ? UU[UU.length - 1].dir : DX.LTR;
        for (let yU = Math.max(0, UU.length - 10); yU < UU.length; yU++) {
          let QU = UU[yU];
          QU.dir != cU || XU.touchesRange(QU.from, QU.to) || zU.push(new Cy(XU.mapPos(QU.from, 1), XU.mapPos(QU.to, -1), QU.dir, QU.isolates, !1, QU.order))
        }
        return zU
      }
    }

    function wy(UU, XU, zU) {
      for (let cU = UU.state.facet(XU), yU = cU.length - 1; yU >= 0; yU--) {
        let XU = cU[yU],
          QU = "function" == typeof XU ? XU(UU) : XU;
        QU && WU(QU, zU)
      }
      return zU
    }
    const qy = PU.mac ? "mac" : PU.windows ? "win" : PU.linux ? "linux" : "key";

    function Oy(UU, XU, zU) {
      return XU.altKey && (UU = "Alt-" + UU), XU.ctrlKey && (UU = "Ctrl-" + UU), XU.metaKey && (UU = "Meta-" + UU), !1 !== zU && XU.shiftKey && (UU = "Shift-" + UU), UU
    }
    const Sy = cU.w.default(dy.domEventHandlers({
        keydown: (UU, XU) => Vy(fy(XU.state), UU, XU, "editor")
      })),
      ry = cU.r.define({
        enables: Sy
      }),
      uy = new WeakMap;

    function fy(UU) {
      let XU = UU.facet(ry),
        zU = uy.get(XU);
      return zU || uy.set(XU, zU = function(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qy,
          zU = Object.create(null),
          cU = Object.create(null),
          yU = (UU, XU) => {
            let zU = cU[UU];
            if (null == zU) cU[UU] = XU;
            else if (zU != XU) throw new Error("Key binding " + UU + " is used both as a regular binding and as a multi-stroke prefix")
          },
          QU = (UU, cU, QU, AU, FU) => {
            var oU, DU;
            let EU = zU[UU] || (zU[UU] = Object.create(null)),
              YU = cU.split(/ (?!$)/).map((UU => function(UU, XU) {
                const zU = UU.split(/-(?!$)/);
                let cU, yU, QU, AU, FU = zU[zU.length - 1];
                "Space" == FU && (FU = " ");
                for (let oU = 0; oU < zU.length - 1; ++oU) {
                  const UU = zU[oU];
                  if (/^(cmd|meta|m)$/i.test(UU)) AU = !0;
                  else if (/^a(lt)?$/i.test(UU)) cU = !0;
                  else if (/^(c|ctrl|control)$/i.test(UU)) yU = !0;
                  else if (/^s(hift)?$/i.test(UU)) QU = !0;
                  else {
                    if (!/^mod$/i.test(UU)) throw new Error("Unrecognized modifier name: " + UU);
                    "mac" == XU ? AU = !0 : yU = !0
                  }
                }
                return cU && (FU = "Alt-" + FU), yU && (FU = "Ctrl-" + FU), AU && (FU = "Meta-" + FU), QU && (FU = "Shift-" + FU), FU
              }(UU, XU)));
            for (let XU = 1; XU < YU.length; XU++) {
              let zU = YU.slice(0, XU).join(" ");
              yU(zU, !0), EU[zU] || (EU[zU] = {
                preventDefault: !0,
                stopPropagation: !1,
                run: [XU => {
                  let cU = Hy = {
                    view: XU,
                    prefix: zU,
                    scope: UU
                  };
                  return setTimeout((() => {
                    Hy == cU && (Hy = null)
                  }), My), !0
                }]
              })
            }
            let NU = YU.join(" ");
            yU(NU, !1);
            let IU = EU[NU] || (EU[NU] = {
              preventDefault: !1,
              stopPropagation: !1,
              run: (null === (DU = null === (oU = EU._any) || void 0 === oU ? void 0 : oU.run) || void 0 === DU ? void 0 : DU.slice()) || []
            });
            QU && IU.run.push(QU), AU && (IU.preventDefault = !0), FU && (IU.stopPropagation = !0)
          };
        for (let AU of UU) {
          let UU = AU.scope ? AU.scope.split(" ") : ["editor"];
          if (AU.any)
            for (let XU of UU) {
              let UU = zU[XU] || (zU[XU] = Object.create(null));
              UU._any || (UU._any = {
                preventDefault: !1,
                stopPropagation: !1,
                run: []
              });
              let {
                any: cU
              } = AU;
              for (let XU in UU) UU[XU].run.push((UU => cU(UU, vy)))
            }
          let cU = AU[XU] || AU.key;
          if (cU)
            for (let XU of UU) QU(XU, cU, AU.run, AU.preventDefault, AU.stopPropagation), AU.shift && QU(XU, "Shift-" + cU, AU.shift, AU.preventDefault, AU.stopPropagation)
        }
        return zU
      }(XU.reduce(((UU, XU) => UU.concat(XU)), []))), zU
    }

    function iy(UU, XU, zU) {
      return Vy(fy(UU.state), XU, UU, zU)
    }
    let Hy = null;
    const My = 4e3;
    let vy = null;

    function Vy(UU, XU, zU, yU) {
      vy = XU;
      let DU = function(UU) {
          var XU = !(FU && UU.metaKey && UU.shiftKey && !UU.ctrlKey && !UU.altKey || oU && UU.shiftKey && UU.key && 1 == UU.key.length || "Unidentified" == UU.key) && UU.key || (UU.shiftKey ? AU : QU)[UU.keyCode] || UU.key || "Unidentified";
          return "Esc" == XU && (XU = "Escape"), "Del" == XU && (XU = "Delete"), "Left" == XU && (XU = "ArrowLeft"), "Up" == XU && (XU = "ArrowUp"), "Right" == XU && (XU = "ArrowRight"), "Down" == XU && (XU = "ArrowDown"), XU
        }(XU),
        EU = (0, cU.Q)(DU, 0),
        YU = (0, cU.R)(EU) == DU.length && " " != DU,
        NU = "",
        IU = !1,
        pU = !1,
        aU = !1;
      Hy && Hy.view == zU && Hy.scope == yU && (NU = Hy.prefix + " ", Ic.indexOf(XU.keyCode) < 0 && (pU = !0, Hy = null));
      let tU, gU, kU = new Set,
        GU = UU => {
          if (UU) {
            for (let XU of UU.run)
              if (!kU.has(XU) && (kU.add(XU), XU(zU))) return UU.stopPropagation && (aU = !0), !0;
            UU.preventDefault && (UU.stopPropagation && (aU = !0), pU = !0)
          }
          return !1
        },
        BU = UU[yU];
      return BU && (GU(BU[NU + Oy(DU, XU, !YU)]) ? IU = !0 : !YU || !(XU.altKey || XU.metaKey || XU.ctrlKey) || PU.windows && XU.ctrlKey && XU.altKey || PU.mac && XU.altKey && !XU.ctrlKey && !XU.metaKey || !(tU = QU[XU.keyCode]) || tU == DU ? YU && XU.shiftKey && GU(BU[NU + Oy(DU, XU, !0)]) && (IU = !0) : (GU(BU[NU + Oy(tU, XU, !0)]) || XU.shiftKey && (gU = AU[XU.keyCode]) != DU && gU != tU && GU(BU[NU + Oy(gU, XU, !1)])) && (IU = !0), !IU && GU(BU._any) && (IU = !0)), pU && (IU = !0), IU && aU && XU.stopPropagation(), vy = null, IU
    }
    class sy {
      constructor(UU, XU, zU, cU, yU) {
        this.className = UU, this.left = XU, this.top = zU, this.width = cU, this.height = yU
      }
      draw() {
        let UU = document.createElement("div");
        return UU.className = this.className, this.adjust(UU), UU
      }
      update(UU, XU) {
        return XU.className == this.className && (this.adjust(UU), !0)
      }
      adjust(UU) {
        UU.style.left = this.left + "px", UU.style.top = this.top + "px", null != this.width && (UU.style.width = this.width + "px"), UU.style.height = this.height + "px"
      }
      eq(UU) {
        return this.left == UU.left && this.top == UU.top && this.width == UU.width && this.height == UU.height && this.className == UU.className
      }
      static forRange(UU, XU, zU) {
        if (zU.empty) {
          let cU = UU.coordsAtPos(zU.head, zU.assoc || 1);
          if (!cU) return [];
          let yU = ny(UU);
          return [new sy(XU, cU.left - yU.left, cU.top - yU.top, null, cU.bottom - cU.top)]
        }
        return function(UU, XU, zU) {
          if (zU.to <= UU.viewport.from || zU.from >= UU.viewport.to) return [];
          let cU = Math.max(zU.from, UU.viewport.from),
            yU = Math.min(zU.to, UU.viewport.to),
            QU = UU.textDirection == DX.LTR,
            AU = UU.contentDOM,
            FU = AU.getBoundingClientRect(),
            oU = ny(UU),
            DU = AU.querySelector(".cm-line"),
            EU = DU && window.getComputedStyle(DU),
            YU = FU.left + (EU ? parseInt(EU.paddingLeft) + Math.min(0, parseInt(EU.textIndent)) : 0),
            NU = FU.right - (EU ? parseInt(EU.paddingRight) : 0),
            IU = sz(UU, cU, 1),
            pU = sz(UU, yU, -1),
            aU = IU.type == qU.Text ? IU : null,
            tU = pU.type == qU.Text ? pU : null;
          aU && (UU.lineWrapping || IU.widgetLineBreaks) && (aU = my(UU, cU, 1, aU));
          tU && (UU.lineWrapping || pU.widgetLineBreaks) && (tU = my(UU, yU, -1, tU));
          if (aU && tU && aU.from == tU.from && aU.to == tU.to) return kU(GU(zU.from, zU.to, aU));
          {
            let XU = aU ? GU(zU.from, null, aU) : BU(IU, !1),
              cU = tU ? GU(null, zU.to, tU) : BU(pU, !0),
              yU = [];
            return (aU || IU).to < (tU || pU).from - (aU && tU ? 1 : 0) || IU.widgetLineBreaks > 1 && XU.bottom + UU.defaultLineHeight / 2 < cU.top ? yU.push(gU(YU, XU.bottom, NU, cU.top)) : XU.bottom < cU.top && UU.elementAtHeight((XU.bottom + cU.top) / 2).type == qU.Text && (XU.bottom = cU.top = (XU.bottom + cU.top) / 2), kU(XU).concat(yU).concat(kU(cU))
          }

          function gU(UU, zU, cU, yU) {
            return new sy(XU, UU - oU.left, zU - oU.top, Math.max(0, cU - UU), yU - zU)
          }

          function kU(UU) {
            let {
              top: XU,
              bottom: zU,
              horizontal: cU
            } = UU, yU = [];
            for (let QU = 0; QU < cU.length; QU += 2) yU.push(gU(cU[QU], XU, cU[QU + 1], zU));
            return yU
          }

          function GU(XU, zU, cU) {
            let yU = 1e9,
              AU = -1e9,
              FU = [];

            function oU(XU, zU, oU, DU, EU) {
              let IU = UU.coordsAtPos(XU, XU == cU.to ? -2 : 2),
                pU = UU.coordsAtPos(oU, oU == cU.from ? 2 : -2);
              IU && pU && (yU = Math.min(IU.top, pU.top, yU), AU = Math.max(IU.bottom, pU.bottom, AU), EU == DX.LTR ? FU.push(QU && zU ? YU : IU.left, QU && DU ? NU : pU.right) : FU.push(!QU && DU ? YU : pU.left, !QU && zU ? NU : IU.right))
            }
            let DU = null !== XU && void 0 !== XU ? XU : cU.from,
              EU = null !== zU && void 0 !== zU ? zU : cU.to;
            for (let QU of UU.rUU)
              if (QU.to > DU && QU.from < EU)
                for (let cU = Math.max(QU.from, DU), yU = Math.min(QU.to, EU);;) {
                  let QU = UU.state.doc.lineAt(cU);
                  for (let AU of UU.bidiSpans(QU)) {
                    let UU = AU.from + QU.from,
                      FU = AU.to + QU.from;
                    if (UU >= yU) break;
                    FU > cU && oU(Math.max(UU, cU), null == XU && UU <= DU, Math.min(FU, yU), null == zU && FU >= EU, AU.dir)
                  }
                  if (cU = QU.to + 1, cU >= yU) break
                }
            return 0 == FU.length && oU(DU, null == XU, EU, null == zU, UU.textDirection), {
              top: yU,
              bottom: AU,
              horizontal: FU
            }
          }

          function BU(UU, XU) {
            let zU = FU.top + (XU ? UU.top : UU.bottom);
            return {
              top: zU,
              bottom: zU,
              horizontal: []
            }
          }
        }(UU, XU, zU)
      }
    }

    function ny(UU) {
      let XU = UU.scrollDOM.getBoundingClientRect();
      return {
        left: (UU.textDirection == DX.LTR ? XU.left : XU.right - UU.scrollDOM.clientWidth * UU.scaleX) - UU.scrollDOM.scrollLeft * UU.scaleX,
        top: XU.top - UU.scrollDOM.scrollTop * UU.scaleY
      }
    }

    function my(UU, XU, zU, cU) {
      let yU = UU.coordsAtPos(XU, 2 * zU);
      if (!yU) return cU;
      let QU = UU.dom.getBoundingClientRect(),
        AU = (yU.top + yU.bottom) / 2,
        FU = UU.posAtCoords({
          x: QU.left + 1,
          y: AU
        }),
        oU = UU.posAtCoords({
          x: QU.right - 1,
          y: AU
        });
      return null == FU || null == oU ? cU : {
        from: Math.max(cU.from, Math.min(FU, oU)),
        to: Math.min(cU.to, Math.max(FU, oU))
      }
    }
    class ly {
      constructor(UU, XU) {
        this.view = UU, this.layer = XU, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
          read: this.measure.bind(this),
          write: this.draw.bind(this)
        }, this.dom = UU.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), XU.above && this.dom.classList.add("cm-layer-above"), XU.class && this.dom.classList.add(XU.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(UU.state), UU.requestMeasure(this.measureReq), XU.mount && XU.mount(this.dom, UU)
      }
      update(UU) {
        UU.startState.facet(xy) != UU.state.facet(xy) && this.setOrder(UU.state), (this.layer.update(UU, this.dom) || UU.geometryChanged) && (this.scale(), UU.view.requestMeasure(this.measureReq))
      }
      docViewUpdate(UU) {
        !1 !== this.layer.updateOnDocViewUpdate && UU.requestMeasure(this.measureReq)
      }
      setOrder(UU) {
        let XU = 0,
          zU = UU.facet(xy);
        for (; XU < zU.length && zU[XU] != this.layer;) XU++;
        this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - XU)
      }
      measure() {
        return this.layer.markers(this.view)
      }
      scale() {
        let {
          scaleX: UU,
          scaleY: XU
        } = this.view;
        UU == this.scaleX && XU == this.scaleY || (this.scaleX = UU, this.scaleY = XU, this.dom.style.transform = `scale(${1/UU}, ${1/XU})`)
      }
      draw(UU) {
        if (UU.length != this.drawn.length || UU.some(((UU, XU) => {
            return zU = UU, cU = this.drawn[XU], !(zU.constructor == cU.constructor && zU.eq(cU));
            var zU, cU
          }))) {
          let XU = this.dom.firstChild,
            zU = 0;
          for (let cU of UU) cU.update && XU && cU.constructor && this.drawn[zU].constructor && cU.update(XU, this.drawn[zU]) ? (XU = XU.nextSibling, zU++) : this.dom.insertBefore(cU.draw(), XU);
          for (; XU;) {
            let UU = XU.nextSibling;
            XU.remove(), XU = UU
          }
          this.drawn = UU, PU.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none")
        }
      }
      destroy() {
        this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove()
      }
    }
    const xy = cU.r.define();

    function Jy(UU) {
      return [KX.define((XU => new ly(XU, UU))), xy.of(UU)]
    }
    const jy = cU.r.define({
      combine: UU => (0, cU.V)(UU, {
        cursorBlinkRate: 1200,
        drawRangeCursor: !0,
        iosSelectionHandles: !0
      }, {
        cursorBlinkRate: (UU, XU) => Math.min(UU, XU),
        drawRangeCursor: (UU, XU) => UU || XU
      })
    });

    function Ky() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [jy.of(UU), Ty, UQ, XQ, vX.of(!0)]
    }

    function by(UU) {
      return UU.startState.facet(jy) != UU.state.facet(jy)
    }
    const Ty = Jy({
      above: !0,
      markers(UU) {
        let {
          state: XU
        } = UU, zU = XU.facet(jy), yU = [];
        for (let QU of XU.selection.Qt) {
          let AU = QU == XU.selection.main;
          if (QU.empty || zU.drawRangeCursor && !(AU && PU.ios && zU.iosSelectionHandles)) {
            let XU = AU ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary",
              zU = QU.empty ? QU : cU.k.cursor(QU.head, QU.assoc);
            for (let cU of sy.forRange(UU, XU, zU)) yU.push(cU)
          }
        }
        return yU
      },
      update(UU, XU) {
        UU.transactions.some((UU => UU.selection)) && (XU.style.animationName = "cm-blink" == XU.style.animationName ? "cm-blink2" : "cm-blink");
        let zU = by(UU);
        return zU && hy(UU.state, XU), UU.docChanged || UU.selectionSet || zU
      },
      mount(UU, XU) {
        hy(XU.state, UU)
      },
      class: "cm-cursorLayer"
    });

    function hy(UU, XU) {
      XU.style.animationDuration = UU.facet(jy).cursorBlinkRate + "ms"
    }
    const UQ = Jy({
        above: !1,
        markers(UU) {
          let XU = [],
            {
              main: zU,
              Qt: yU
            } = UU.state.selection;
          for (let cU of yU)
            if (!cU.empty)
              for (let zU of sy.forRange(UU, "cm-selectionBackground", cU)) XU.push(zU);
          if (PU.ios && !zU.empty && UU.state.facet(jy).iosSelectionHandles) {
            for (let yU of sy.forRange(UU, "cm-selectionHandle cm-selectionHandle-start", cU.k.cursor(zU.from, 1))) XU.push(yU);
            for (let yU of sy.forRange(UU, "cm-selectionHandle cm-selectionHandle-end", cU.k.cursor(zU.to, 1))) XU.push(yU)
          }
          return XU
        },
        update: (UU, XU) => UU.docChanged || UU.selectionSet || UU.viewportChanged || by(UU),
        class: "cm-selectionLayer"
      }),
      XQ = cU.w.highest(dy.theme({
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
      zQ = cU.H.define({
        map: (UU, XU) => null == UU ? null : XU.mapPos(UU)
      }),
      cQ = cU.L.define({
        create: () => null,
        update: (UU, XU) => (null != UU && (UU = XU.changes.mapPos(UU)), XU.effects.reduce(((UU, XU) => XU.is(zQ) ? XU.value : UU), UU))
      }),
      yQ = KX.fromClass(class {
        constructor(UU) {
          this.view = UU, this.cursor = null, this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawCursor.bind(this)
          }
        }
        update(UU) {
          var XU;
          let zU = UU.state.field(cQ);
          null == zU ? null != this.cursor && (null === (XU = this.cursor) || void 0 === XU || XU.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (UU.startState.field(cQ) != zU || UU.docChanged || UU.geometryChanged) && this.view.requestMeasure(this.measureReq))
        }
        readPos() {
          let {
            view: UU
          } = this, XU = UU.state.field(cQ), zU = null != XU && UU.coordsAtPos(XU);
          if (!zU) return null;
          let cU = UU.scrollDOM.getBoundingClientRect();
          return {
            left: zU.left - cU.left + UU.scrollDOM.scrollLeft * UU.scaleX,
            top: zU.top - cU.top + UU.scrollDOM.scrollTop * UU.scaleY,
            height: zU.bottom - zU.top
          }
        }
        drawCursor(UU) {
          if (this.cursor) {
            let {
              scaleX: XU,
              scaleY: zU
            } = this.view;
            UU ? (this.cursor.style.left = UU.left / XU + "px", this.cursor.style.top = UU.top / zU + "px", this.cursor.style.height = UU.height / zU + "px") : this.cursor.style.left = "-100000px"
          }
        }
        destroy() {
          this.cursor && this.cursor.remove()
        }
        setDropPos(UU) {
          this.view.state.field(cQ) != UU && this.view.dispatch({
            effects: zQ.of(UU)
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

    function QQ() {
      return [cQ, yQ]
    }

    function AQ(UU, XU, zU, cU, yU) {
      XU.lastIndex = 0;
      for (let QU, AU = UU.iterRange(zU, cU), FU = zU; !AU.next().done; FU += AU.value.length)
        if (!AU.lineBreak)
          for (; QU = XU.exec(AU.value);) yU(FU + QU.index, QU)
    }
    class FQ {
      constructor(UU) {
        const {
          regexp: XU,
          decoration: zU,
          decorate: cU,
          boundary: yU,
          maxLength: QU = 1e3
        } = UU;
        if (!XU.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
        if (this.regexp = XU, cU) this.addMatch = (UU, XU, zU, yU) => cU(yU, zU, zU + UU[0].length, UU, XU);
        else if ("function" == typeof zU) this.addMatch = (UU, XU, cU, yU) => {
          let QU = zU(UU, XU, cU);
          QU && yU(cU, cU + UU[0].length, QU)
        };
        else {
          if (!zU) throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
          this.addMatch = (UU, XU, cU, yU) => yU(cU, cU + UU[0].length, zU)
        }
        this.boundary = yU, this.maxLength = QU
      }
      createDeco(UU) {
        let XU = new cU.z,
          zU = XU.add.bind(XU);
        for (let {
            from: cU,
            to: yU
          }
          of
          function(UU, XU) {
            let zU = UU.rUU;
            if (1 == zU.length && zU[0].from == UU.viewport.from && zU[0].to == UU.viewport.to) return zU;
            let cU = [];
            for (let {
                from: yU,
                to: QU
              }
              of zU) yU = Math.max(UU.state.doc.lineAt(yU).from, yU - XU), QU = Math.min(UU.state.doc.lineAt(QU).to, QU + XU), cU.length && cU[cU.length - 1].to >= yU ? cU[cU.length - 1].to = QU : cU.push({
              from: yU,
              to: QU
            });
            return cU
          }(UU, this.maxLength)) AQ(UU.state.doc, this.regexp, cU, yU, ((XU, cU) => this.addMatch(cU, UU, XU, zU)));
        return XU.finish()
      }
      updateDeco(UU, XU) {
        let zU = 1e9,
          cU = -1;
        return UU.docChanged && UU.changes.iterChanges(((XU, yU, QU, AU) => {
          AU >= UU.view.viewport.from && QU <= UU.view.viewport.to && (zU = Math.min(QU, zU), cU = Math.max(AU, cU))
        })), UU.viewportMoved || cU - zU > 1e3 ? this.createDeco(UU.view) : cU > -1 ? this.updateRange(UU.view, XU.map(UU.changes), zU, cU) : XU
      }
      updateRange(UU, XU, zU, cU) {
        for (let yU of UU.rUU) {
          let QU = Math.max(yU.from, zU),
            AU = Math.min(yU.to, cU);
          if (AU >= QU) {
            let zU = UU.state.doc.lineAt(QU),
              cU = zU.to < AU ? UU.state.doc.lineAt(AU) : zU,
              FU = Math.max(yU.from, zU.from),
              oU = Math.min(yU.to, cU.to);
            if (this.boundary) {
              for (; QU > zU.from; QU--)
                if (this.boundary.test(zU.text[QU - 1 - zU.from])) {
                  FU = QU;
                  break
                } for (; AU < cU.to; AU++)
                if (this.boundary.test(cU.text[AU - cU.from])) {
                  oU = AU;
                  break
                }
            }
            let DU, EU = [],
              YU = (UU, XU, zU) => EU.push(zU.range(UU, XU));
            if (zU == cU)
              for (this.regexp.lastIndex = FU - zU.from;
                (DU = this.regexp.exec(zU.text)) && DU.index < oU - zU.from;) this.addMatch(DU, UU, DU.index + zU.from, YU);
            else AQ(UU.state.doc, this.regexp, FU, oU, ((XU, zU) => this.addMatch(zU, UU, XU, YU)));
            XU = XU.update({
              filterFrom: FU,
              filterTo: oU,
              filter: (UU, XU) => UU < FU || XU > oU,
              add: EU
            })
          }
        }
        return XU
      }
    }
    const oQ = null != /x/.unicode ? "gu" : "g",
      DQ = new RegExp("[\0-\b\n-\x1f\x7f-\x9f\xad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]", oQ),
      EQ = {
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
    let YQ = null;
    const NQ = cU.r.define({
      combine(UU) {
        let XU = (0, cU.V)(UU, {
          render: null,
          specialChars: DQ,
          addSpecialChars: null
        });
        return (XU.replaceTabs = ! function() {
          var UU;
          if (null == YQ && "undefined" != typeof document && document.body) {
            let XU = document.body.style;
            YQ = null != (null !== (UU = XU.tabSize) && void 0 !== UU ? UU : XU.MozTabSize)
          }
          return YQ || !1
        }()) && (XU.specialChars = new RegExp("\t|" + XU.specialChars.source, oQ)), XU.addSpecialChars && (XU.specialChars = new RegExp(XU.specialChars.source + "|" + XU.addSpecialChars.source, oQ)), XU
      }
    });

    function IQ() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [NQ.of(UU), pQ || (pQ = KX.fromClass(class {
        constructor(UU) {
          this.view = UU, this.hy = OU.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(UU.state.facet(NQ)), this.hy = this.decorator.createDeco(UU)
        }
        makeDecorator(UU) {
          return new FQ({
            regexp: UU.specialChars,
            decoration: (XU, zU, yU) => {
              let {
                doc: QU
              } = zU.state, AU = (0, cU.Q)(XU[0], 0);
              if (9 == AU) {
                let UU = QU.lineAt(yU),
                  XU = zU.state.tabSize,
                  AU = (0, cU.X)(UU.text, XU, yU - UU.from);
                return OU.replace({
                  widget: new tQ((XU - AU % XU) * this.view.defaultCharacterWidth / this.view.scaleX)
                })
              }
              return this.decorationCache[AU] || (this.decorationCache[AU] = OU.replace({
                widget: new aQ(UU, AU)
              }))
            },
            boundary: UU.replaceTabs ? void 0 : /[^]/
          })
        }
        update(UU) {
          let XU = UU.state.facet(NQ);
          UU.startState.facet(NQ) != XU ? (this.decorator = this.makeDecorator(XU), this.hy = this.decorator.createDeco(UU.view)) : this.hy = this.decorator.updateDeco(UU, this.hy)
        }
      }, {
        hy: UU => UU.hy
      }))]
    }
    let pQ = null;
    class aQ extends wU {
      constructor(UU, XU) {
        super(), this.options = UU, this.code = XU
      }
      eq(UU) {
        return UU.code == this.code
      }
      toDOM(UU) {
        let XU = function(UU) {
            return UU >= 32 ? "\u2022" : 10 == UU ? "\u2424" : String.fromCharCode(9216 + UU)
          }(this.code),
          zU = UU.state.phrase("Control character") + " " + (EQ[this.code] || "0x" + this.code.toString(16)),
          cU = this.options.render && this.options.render(this.code, zU, XU);
        if (cU) return cU;
        let yU = document.createElement("span");
        return yU.textContent = XU, yU.title = zU, yU.setAttribute("aria-label", zU), yU.className = "cm-specialChar", yU
      }
      ignoreEvent() {
        return !1
      }
    }
    class tQ extends wU {
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

    function gQ() {
      return GQ
    }
    const kQ = OU.line({
        class: "cm-activeLine"
      }),
      GQ = KX.fromClass(class {
        constructor(UU) {
          this.hy = this.getDeco(UU)
        }
        update(UU) {
          (UU.docChanged || UU.selectionSet) && (this.hy = this.getDeco(UU.view))
        }
        getDeco(UU) {
          let XU = -1,
            zU = [];
          for (let cU of UU.state.selection.Qt) {
            let yU = UU.lineBlockAt(cU.head);
            yU.from > XU && (zU.push(kQ.range(yU.from)), XU = yU.from)
          }
          return OU.set(zU)
        }
      }, {
        hy: UU => UU.hy
      });
    class BQ extends wU {
      constructor(UU) {
        super(), this.content = UU
      }
      toDOM(UU) {
        let XU = document.createElement("span");
        return XU.className = "cm-placeholder", XU.style.pointerEvents = "none", XU.appendChild("string" == typeof this.content ? document.createTextNode(this.content) : "function" == typeof this.content ? this.content(UU) : this.content.cloneNode(!0)), XU.setAttribute("aria-hidden", "true"), XU
      }
      coordsAt(UU) {
        let XU = UU.firstChild ? sU(UU.firstChild) : [];
        if (!XU.length) return null;
        let zU = window.getComputedStyle(UU.parentNode),
          cU = jU(XU[0], "rtl" != zU.direction),
          yU = parseInt(zU.lineHeight);
        return cU.bottom - cU.top > 1.5 * yU ? {
          left: cU.left,
          right: cU.right,
          top: cU.top,
          bottom: cU.top + yU
        } : cU
      }
      ignoreEvent() {
        return !1
      }
    }

    function ZQ(UU) {
      let XU = KX.fromClass(class {
        constructor(XU) {
          this.view = XU, this.placeholder = UU ? OU.set([OU.widget({
            widget: new BQ(UU),
            side: 1
          }).range(0)]) : OU.none
        }
        get hy() {
          return this.view.state.doc.length ? OU.none : this.placeholder
        }
      }, {
        hy: UU => UU.hy
      });
      return "string" == typeof UU ? [XU, dy.contentAttributes.of({
        "aria-placeholder": UU
      })] : XU
    }
    const RQ = 2e3;

    function PQ(UU, XU) {
      let zU = UU.posAtCoords({
          x: XU.clientX,
          y: XU.clientY
        }, !1),
        yU = UU.state.doc.lineAt(zU),
        QU = zU - yU.from,
        AU = QU > RQ ? -1 : QU == yU.length ? function(UU, XU) {
          let zU = UU.coordsAtPos(UU.viewport.from);
          return zU ? Math.round(Math.abs((zU.left - XU) / UU.defaultCharacterWidth)) : -1
        }(UU, XU.clientX) : (0, cU.X)(yU.text, UU.state.tabSize, zU - yU.from);
      return {
        line: yU.number,
        col: AU,
        off: QU
      }
    }

    function WQ(UU, XU) {
      let zU = PQ(UU, XU),
        yU = UU.state.selection;
      return zU ? {
        update(UU) {
          if (UU.docChanged) {
            let XU = UU.changes.mapPos(UU.startState.doc.line(zU.line).from),
              cU = UU.state.doc.lineAt(XU);
            zU = {
              line: cU.number,
              col: zU.col,
              off: Math.min(zU.off, cU.length)
            }, yU = yU.map(UU.changes)
          }
        },
        get(XU, QU, AU) {
          let FU = PQ(UU, XU);
          if (!FU) return yU;
          let oU = function(UU, XU, zU) {
            let yU = Math.min(XU.line, zU.line),
              QU = Math.max(XU.line, zU.line),
              AU = [];
            if (XU.off > RQ || zU.off > RQ || XU.col < 0 || zU.col < 0) {
              let FU = Math.min(XU.off, zU.off),
                oU = Math.max(XU.off, zU.off);
              for (let XU = yU; XU <= QU; XU++) {
                let zU = UU.doc.line(XU);
                zU.length <= oU && AU.push(cU.k.range(zU.from + FU, zU.to + oU))
              }
            } else {
              let FU = Math.min(XU.col, zU.col),
                oU = Math.max(XU.col, zU.col);
              for (let XU = yU; XU <= QU; XU++) {
                let zU = UU.doc.line(XU),
                  yU = (0, cU.cb)(zU.text, FU, UU.tabSize, !0);
                if (yU < 0) AU.push(cU.k.cursor(zU.to));
                else {
                  let XU = (0, cU.cb)(zU.text, oU, UU.tabSize);
                  AU.push(cU.k.range(zU.from + yU, zU.from + XU))
                }
              }
            }
            return AU
          }(UU.state, zU, FU);
          return oU.length ? AU ? cU.k.create(oU.concat(yU.Qt)) : cU.k.create(oU) : yU
        }
      } : null
    }

    function dQ(UU) {
      let XU = (null === UU || void 0 === UU ? void 0 : UU.eventFilter) || (UU => UU.altKey && 0 == UU.button);
      return dy.mouseSelectionStyle.of(((UU, zU) => XU(zU) ? WQ(UU, zU) : null))
    }
    const LQ = {
        Alt: [18, UU => !!UU.altKey],
        Control: [17, UU => !!UU.ctrlKey],
        Shift: [16, UU => !!UU.shiftKey],
        Meta: [91, UU => !!UU.metaKey]
      },
      eQ = {
        style: "cursor: crosshair"
      };

    function CQ() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [XU, zU] = LQ[UU.key || "Alt"],
        cU = KX.fromClass(class {
          constructor(UU) {
            this.view = UU, this.isDown = !1
          }
          set(UU) {
            this.isDown != UU && (this.isDown = UU, this.view.update([]))
          }
        }, {
          eventObservers: {
            keydown(UU) {
              this.set(UU.keyCode == XU || zU(UU))
            },
            keyup(UU) {
              UU.keyCode != XU && zU(UU) || this.set(!1)
            },
            mousemove(UU) {
              this.set(zU(UU))
            }
          }
        });
      return [cU, dy.contentAttributes.of((UU => {
        var XU;
        return (null === (XU = UU.plugin(cU)) || void 0 === XU ? void 0 : XU.isDown) ? eQ : null
      }))]
    }
    const wQ = "-10000px";
    class qQ {
      constructor(UU, XU, zU, cU) {
        this.facet = XU, this.createTooltipView = zU, this.removeTooltipView = cU, this.input = UU.state.facet(XU), this.tooltips = this.input.filter((UU => UU));
        let yU = null;
        this.tooltipViews = this.tooltips.map((UU => yU = zU(UU, yU)))
      }
      update(UU, XU) {
        var zU;
        let cU = UU.state.facet(this.facet),
          yU = cU.filter((UU => UU));
        if (cU === this.input) {
          for (let XU of this.tooltipViews) XU.update && XU.update(UU);
          return !1
        }
        let QU = [],
          AU = XU ? [] : null;
        for (let FU = 0; FU < yU.length; FU++) {
          let zU = yU[FU],
            cU = -1;
          if (zU) {
            for (let UU = 0; UU < this.tooltips.length; UU++) {
              let XU = this.tooltips[UU];
              XU && XU.create == zU.create && (cU = UU)
            }
            if (cU < 0) QU[FU] = this.createTooltipView(zU, FU ? QU[FU - 1] : null), AU && (AU[FU] = !!zU.above);
            else {
              let zU = QU[FU] = this.tooltipViews[cU];
              AU && (AU[FU] = XU[cU]), zU.update && zU.update(UU)
            }
          }
        }
        for (let FU of this.tooltipViews) QU.indexOf(FU) < 0 && (this.removeTooltipView(FU), null === (zU = FU.destroy) || void 0 === zU || zU.call(FU));
        return XU && (AU.forEach(((UU, zU) => XU[zU] = UU)), XU.length = AU.length), this.input = cU, this.tooltips = yU, this.tooltipViews = QU, !0
      }
    }

    function OQ(UU) {
      let XU = UU.dom.ownerDocument.documentElement;
      return {
        top: 0,
        left: 0,
        bottom: XU.clientHeight,
        right: XU.clientWidth
      }
    }
    const SQ = cU.r.define({
        combine: UU => {
          var XU, zU, cU;
          return {
            position: PU.ios ? "absolute" : (null === (XU = UU.find((UU => UU.position))) || void 0 === XU ? void 0 : XU.position) || "fixed",
            parent: (null === (zU = UU.find((UU => UU.parent))) || void 0 === zU ? void 0 : zU.parent) || null,
            tooltipSpace: (null === (cU = UU.find((UU => UU.tooltipSpace))) || void 0 === cU ? void 0 : cU.tooltipSpace) || OQ
          }
        }
      }),
      rQ = new WeakMap,
      uQ = KX.fromClass(class {
        constructor(UU) {
          this.view = UU, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
          let XU = UU.state.facet(SQ);
          this.position = XU.position, this.parent = XU.parent, this.classes = UU.themeClasses, this.createContainer(), this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this
          }, this.resizeObserver = "function" == typeof ResizeObserver ? new ResizeObserver((() => this.measureSoon())) : null, this.manager = new qQ(UU, MQ, ((UU, XU) => this.createTooltip(UU, XU)), (UU => {
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
          let XU = this.manager.update(UU, this.above);
          XU && this.observeIntersection();
          let zU = XU || UU.geometryChanged,
            cU = UU.state.facet(SQ);
          if (cU.position != this.position && !this.madeAbsolute) {
            this.position = cU.position;
            for (let UU of this.manager.tooltipViews) UU.dom.style.position = this.position;
            zU = !0
          }
          if (cU.parent != this.parent) {
            this.parent && this.container.remove(), this.parent = cU.parent, this.createContainer();
            for (let UU of this.manager.tooltipViews) this.container.appendChild(UU.dom);
            zU = !0
          } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
          zU && this.maybeMeasure()
        }
        createTooltip(UU, XU) {
          let zU = UU.create(this.view),
            cU = XU ? XU.dom : null;
          if (zU.dom.classList.add("cm-tooltip"), UU.arrow && !zU.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
            let UU = document.createElement("div");
            UU.className = "cm-tooltip-arrow", zU.dom.appendChild(UU)
          }
          return zU.dom.style.position = this.position, zU.dom.style.top = wQ, zU.dom.style.left = "0px", this.container.insertBefore(zU.dom, cU), zU.mount && zU.mount(this.view), this.resizeObserver && this.resizeObserver.observe(zU.dom), zU
        }
        destroy() {
          var UU, XU, zU;
          this.view.win.removeEventListener("resize", this.measureSoon);
          for (let cU of this.manager.tooltipViews) cU.dom.remove(), null === (UU = cU.destroy) || void 0 === UU || UU.call(cU);
          this.parent && this.container.remove(), null === (XU = this.resizeObserver) || void 0 === XU || XU.disconnect(), null === (zU = this.intersectionObserver) || void 0 === zU || zU.disconnect(), clearTimeout(this.measureTimeout)
        }
        readMeasure() {
          let UU = 1,
            XU = 1,
            zU = !1;
          if ("fixed" == this.position && this.manager.tooltipViews.length) {
            let {
              dom: UU
            } = this.manager.tooltipViews[0];
            if (PU.safari) {
              let XU = UU.getBoundingClientRect();
              zU = Math.abs(XU.top + 1e4) > 1 || Math.abs(XU.left) > 1
            } else zU = !!UU.offsetParent && UU.offsetParent != this.container.ownerDocument.body
          }
          if (zU || "absolute" == this.position)
            if (this.parent) {
              let zU = this.parent.getBoundingClientRect();
              zU.width && zU.height && (UU = zU.width / this.parent.offsetWidth, XU = zU.height / this.parent.offsetHeight)
            } else({
              scaleX: UU,
              scaleY: XU
            } = this.view.viewState);
          let cU = this.view.scrollDOM.getBoundingClientRect(),
            yU = Fz(this.view);
          return {
            visible: {
              left: cU.left + yU.left,
              top: cU.top + yU.top,
              right: cU.right - yU.right,
              bottom: cU.bottom - yU.bottom
            },
            parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
            pos: this.manager.tooltips.map(((UU, XU) => {
              let zU = this.manager.tooltipViews[XU];
              return zU.getCoords ? zU.getCoords(UU.pos) : this.view.coordsAtPos(UU.pos)
            })),
            size: this.manager.tooltipViews.map((UU => {
              let {
                dom: XU
              } = UU;
              return XU.getBoundingClientRect()
            })),
            space: this.view.state.facet(SQ).tooltipSpace(this.view),
            scaleX: UU,
            scaleY: XU,
            makeAbsolute: zU
          }
        }
        writeMeasure(UU) {
          var XU;
          if (UU.makeAbsolute) {
            this.madeAbsolute = !0, this.position = "absolute";
            for (let UU of this.manager.tooltipViews) UU.dom.style.position = "absolute"
          }
          let {
            visible: zU,
            space: cU,
            scaleX: yU,
            scaleY: QU
          } = UU, AU = [];
          for (let FU = 0; FU < this.manager.tooltips.length; FU++) {
            let oU = this.manager.tooltips[FU],
              DU = this.manager.tooltipViews[FU],
              {
                dom: EU
              } = DU,
              YU = UU.pos[FU],
              NU = UU.size[FU];
            if (!YU || !1 !== oU.clip && (YU.bottom <= Math.max(zU.top, cU.top) || YU.top >= Math.min(zU.bottom, cU.bottom) || YU.right < Math.max(zU.left, cU.left) - .1 || YU.left > Math.min(zU.right, cU.right) + .1)) {
              EU.style.top = wQ;
              continue
            }
            let IU = oU.arrow ? DU.dom.querySelector(".cm-tooltip-arrow") : null,
              pU = IU ? 7 : 0,
              aU = NU.right - NU.left,
              tU = null !== (XU = rQ.get(DU)) && void 0 !== XU ? XU : NU.bottom - NU.top,
              gU = DU.offset || HQ,
              kU = this.view.textDirection == DX.LTR,
              GU = NU.width > cU.right - cU.left ? kU ? cU.left : cU.right - NU.width : kU ? Math.max(cU.left, Math.min(YU.left - (IU ? 14 : 0) + gU.x, cU.right - aU)) : Math.min(Math.max(cU.left, YU.left - aU + (IU ? 14 : 0) - gU.x), cU.right - aU),
              BU = this.above[FU];
            !oU.strictSide && (BU ? YU.top - tU - pU - gU.y < cU.top : YU.bottom + tU + pU + gU.y > cU.bottom) && BU == cU.bottom - YU.bottom > YU.top - cU.top && (BU = this.above[FU] = !BU);
            let ZU = (BU ? YU.top - cU.top : cU.bottom - YU.bottom) - pU;
            if (ZU < tU && !1 !== DU.resize) {
              if (ZU < this.view.defaultLineHeight) {
                EU.style.top = wQ;
                continue
              }
              rQ.set(DU, tU), EU.style.height = (tU = ZU) / QU + "px"
            } else EU.style.height && (EU.style.height = "");
            let RU = BU ? YU.top - tU - pU - gU.y : YU.bottom + pU + gU.y,
              PU = GU + aU;
            if (!0 !== DU.overlap)
              for (let UU of AU) UU.left < PU && UU.right > GU && UU.top < RU + tU && UU.bottom > RU && (RU = BU ? UU.top - tU - 2 - pU : UU.bottom + pU + 2);
            if ("absolute" == this.position ? (EU.style.top = (RU - UU.parent.top) / QU + "px", fQ(EU, (GU - UU.parent.left) / yU)) : (EU.style.top = RU / QU + "px", fQ(EU, GU / yU)), IU) {
              let UU = YU.left + (kU ? gU.x : -gU.x) - (GU + 14 - 7);
              IU.style.left = UU / yU + "px"
            }!0 !== DU.overlap && AU.push({
              left: GU,
              top: RU,
              right: PU,
              bottom: RU + tU
            }), EU.classList.toggle("cm-tooltip-above", BU), EU.classList.toggle("cm-tooltip-below", !BU), DU.positioned && DU.positioned(UU.space)
          }
        }
        maybeMeasure() {
          if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
            for (let UU of this.manager.tooltipViews) UU.dom.style.top = wQ
        }
      }, {
        eventObservers: {
          scroll() {
            this.maybeMeasure()
          }
        }
      });

    function fQ(UU, XU) {
      let zU = parseInt(UU.style.left, 10);
      (isNaN(zU) || Math.abs(XU - zU) > 1) && (UU.style.left = XU + "px")
    }
    const iQ = dy.baseTheme({
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
      HQ = {
        x: 0,
        y: 0
      },
      MQ = cU.r.define({
        enables: [uQ, iQ]
      }),
      vQ = cU.r.define({
        combine: UU => UU.reduce(((UU, XU) => UU.concat(XU)), [])
      });
    class VQ {
      static create(UU) {
        return new VQ(UU)
      }
      constructor(UU) {
        this.view = UU, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new qQ(UU, vQ, ((UU, XU) => this.createHostedView(UU, XU)), (UU => UU.dom.remove()))
      }
      createHostedView(UU, XU) {
        let zU = UU.create(this.view);
        return zU.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(zU.dom, XU ? XU.dom.nextSibling : this.dom.firstChild), this.mounted && zU.mount && zU.mount(this.view), zU
      }
      mount(UU) {
        for (let XU of this.manager.tooltipViews) XU.mount && XU.mount(UU);
        this.mounted = !0
      }
      positioned(UU) {
        for (let XU of this.manager.tooltipViews) XU.positioned && XU.positioned(UU)
      }
      update(UU) {
        this.manager.update(UU)
      }
      destroy() {
        var UU;
        for (let XU of this.manager.tooltipViews) null === (UU = XU.destroy) || void 0 === UU || UU.call(XU)
      }
      passProp(UU) {
        let XU;
        for (let zU of this.manager.tooltipViews) {
          let cU = zU[UU];
          if (void 0 !== cU)
            if (void 0 === XU) XU = cU;
            else if (XU !== cU) return
        }
        return XU
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
    const sQ = MQ.compute([vQ], (UU => {
      let XU = UU.facet(vQ);
      return 0 === XU.length ? null : {
        pos: Math.min(...XU.map((UU => UU.pos))),
        end: Math.max(...XU.map((UU => {
          var XU;
          return null !== (XU = UU.end) && void 0 !== XU ? XU : UU.pos
        }))),
        create: VQ.create,
        above: XU[0].above,
        arrow: XU.some((UU => UU.arrow))
      }
    }));
    class nQ {
      constructor(UU, XU, zU, cU, yU) {
        this.view = UU, this.source = XU, this.field = zU, this.setHover = cU, this.hoverTime = yU, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
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
          lastMove: XU
        } = this, zU = UU.docView.tile.nearest(XU.target);
        if (!zU) return;
        let cU, yU = 1;
        if (zU.isWidget()) cU = zU.posAtStart;
        else {
          if (cU = UU.posAtCoords(XU), null == cU) return;
          let zU = UU.coordsAtPos(cU);
          if (!zU || XU.y < zU.top || XU.y > zU.bottom || XU.x < zU.left - UU.defaultCharacterWidth || XU.x > zU.right + UU.defaultCharacterWidth) return;
          let QU = UU.bidiSpans(UU.state.doc.lineAt(cU)).find((UU => UU.from <= cU && UU.to >= cU)),
            AU = QU && QU.dir == DX.RTL ? -1 : 1;
          yU = XU.x < zU.left ? -AU : AU
        }
        let QU = this.source(UU, cU, yU);
        if (null === QU || void 0 === QU ? void 0 : QU.then) {
          let XU = this.pending = {
            pos: cU
          };
          QU.then((zU => {
            this.pending == XU && (this.pending = null, !zU || Array.isArray(zU) && !zU.length || UU.dispatch({
              effects: this.setHover.of(Array.isArray(zU) ? zU : [zU])
            }))
          }), (XU => lX(UU.state, XU, "hover tooltip")))
        } else !QU || Array.isArray(QU) && !QU.length || UU.dispatch({
          effects: this.setHover.of(Array.isArray(QU) ? QU : [QU])
        })
      }
      get tooltip() {
        let UU = this.view.plugin(uQ),
          XU = UU ? UU.manager.tooltips.findIndex((UU => UU.create == VQ.create)) : -1;
        return XU > -1 ? UU.manager.tooltipViews[XU] : null
      }
      mousemove(UU) {
        var XU, zU;
        this.lastMove = {
          x: UU.clientX,
          y: UU.clientY,
          target: UU.target,
          time: Date.now()
        }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
        let {
          active: cU,
          tooltip: yU
        } = this;
        if (cU.length && yU && ! function(UU, XU) {
            let zU, {
              left: cU,
              right: yU,
              top: QU,
              bottom: AU
            } = UU.getBoundingClientRect();
            if (zU = UU.querySelector(".cm-tooltip-arrow")) {
              let UU = zU.getBoundingClientRect();
              QU = Math.min(UU.top, QU), AU = Math.max(UU.bottom, AU)
            }
            return XU.clientX >= cU - mQ && XU.clientX <= yU + mQ && XU.clientY >= QU - mQ && XU.clientY <= AU + mQ
          }(yU.dom, UU) || this.pending) {
          let {
            pos: yU
          } = cU[0] || this.pending, QU = null !== (zU = null === (XU = cU[0]) || void 0 === XU ? void 0 : XU.end) && void 0 !== zU ? zU : yU;
          (yU == QU ? this.view.posAtCoords(this.lastMove) == yU : function(UU, XU, zU, cU, yU) {
            let QU = UU.scrollDOM.getBoundingClientRect(),
              AU = UU.documentTop + UU.documentPadding.top + UU.contentHeight;
            if (QU.left > cU || QU.right < cU || QU.top > yU || Math.min(QU.bottom, AU) < yU) return !1;
            let FU = UU.posAtCoords({
              x: cU,
              y: yU
            }, !1);
            return FU >= XU && FU <= zU
          }(this.view, yU, QU, UU.clientX, UU.clientY)) || (this.view.dispatch({
            effects: this.setHover.of([])
          }), this.pending = null)
        }
      }
      mouseleave(UU) {
        clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
        let {
          active: XU
        } = this;
        if (XU.length) {
          let {
            tooltip: XU
          } = this;
          XU && XU.dom.contains(UU.relatedTarget) ? this.watchTooltipLeave(XU.dom) : this.view.dispatch({
            effects: this.setHover.of([])
          })
        }
      }
      watchTooltipLeave(UU) {
        let XU = zU => {
          UU.removeEventListener("mouseleave", XU), this.active.length && !this.view.dom.contains(zU.relatedTarget) && this.view.dispatch({
            effects: this.setHover.of([])
          })
        };
        UU.addEventListener("mouseleave", XU)
      }
      destroy() {
        clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove)
      }
    }
    const mQ = 4;

    function lQ(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        zU = cU.H.define(),
        yU = cU.L.define({
          create: () => [],
          update(UU, yU) {
            if (UU.length && (XU.hideOnChange && (yU.docChanged || yU.selection) ? UU = [] : XU.hideOn && (UU = UU.filter((UU => !XU.hideOn(yU, UU)))), yU.docChanged)) {
              let XU = [];
              for (let zU of UU) {
                let UU = yU.changes.mapPos(zU.pos, -1, cU.t.TrackDel);
                if (null != UU) {
                  let cU = Object.assign(Object.create(null), zU);
                  cU.pos = UU, null != cU.end && (cU.end = yU.changes.mapPos(cU.end)), XU.push(cU)
                }
              }
              UU = XU
            }
            for (let XU of yU.effects) XU.is(zU) && (UU = XU.value), XU.is(JQ) && (UU = []);
            return UU
          },
          provide: UU => vQ.from(UU)
        });
      return {
        active: yU,
        extension: [yU, KX.define((cU => new nQ(cU, UU, yU, zU, XU.hoverTime || 300))), sQ]
      }
    }

    function xQ(UU, XU) {
      let zU = UU.plugin(uQ);
      if (!zU) return null;
      let cU = zU.manager.tooltips.indexOf(XU);
      return cU < 0 ? null : zU.manager.tooltipViews[cU]
    }
    const JQ = cU.H.define();
    const jQ = cU.r.define({
      combine(UU) {
        let XU, zU;
        for (let cU of UU) XU = XU || cU.topContainer, zU = zU || cU.bottomContainer;
        return {
          topContainer: XU,
          bottomContainer: zU
        }
      }
    });

    function KQ(UU, XU) {
      let zU = UU.plugin(bQ),
        cU = zU ? zU.specs.indexOf(XU) : -1;
      return cU > -1 ? zU.panels[cU] : null
    }
    const bQ = KX.fromClass(class {
      constructor(UU) {
        this.input = UU.state.facet(UA), this.specs = this.input.filter((UU => UU)), this.panels = this.specs.map((XU => XU(UU)));
        let XU = UU.state.facet(jQ);
        this.top = new TQ(UU, !0, XU.topContainer), this.bottom = new TQ(UU, !1, XU.bottomContainer), this.top.sync(this.panels.filter((UU => UU.top))), this.bottom.sync(this.panels.filter((UU => !UU.top)));
        for (let zU of this.panels) zU.dom.classList.add("cm-panel"), zU.mount && zU.mount()
      }
      update(UU) {
        let XU = UU.state.facet(jQ);
        this.top.container != XU.topContainer && (this.top.sync([]), this.top = new TQ(UU.view, !0, XU.topContainer)), this.bottom.container != XU.bottomContainer && (this.bottom.sync([]), this.bottom = new TQ(UU.view, !1, XU.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
        let zU = UU.state.facet(UA);
        if (zU != this.input) {
          let XU = zU.filter((UU => UU)),
            cU = [],
            yU = [],
            QU = [],
            AU = [];
          for (let zU of XU) {
            let XU, FU = this.specs.indexOf(zU);
            FU < 0 ? (XU = zU(UU.view), AU.push(XU)) : (XU = this.panels[FU], XU.update && XU.update(UU)), cU.push(XU), (XU.top ? yU : QU).push(XU)
          }
          this.specs = XU, this.panels = cU, this.top.sync(yU), this.bottom.sync(QU);
          for (let UU of AU) UU.dom.classList.add("cm-panel"), UU.mount && UU.mount()
        } else
          for (let cU of this.panels) cU.update && cU.update(UU)
      }
      destroy() {
        this.top.sync([]), this.bottom.sync([])
      }
    }, {
      provide: UU => dy.scrollMargins.of((XU => {
        let zU = XU.plugin(UU);
        return zU && {
          top: zU.top.scrollMargin(),
          bottom: zU.bottom.scrollMargin()
        }
      }))
    });
    class TQ {
      constructor(UU, XU, zU) {
        this.view = UU, this.top = XU, this.container = zU, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses()
      }
      sync(UU) {
        for (let XU of this.panels) XU.destroy && UU.indexOf(XU) < 0 && XU.destroy();
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
        for (let XU of this.panels)
          if (XU.dom.parentNode == this.dom) {
            for (; UU != XU.dom;) UU = hQ(UU);
            UU = UU.nextSibling
          } else this.dom.insertBefore(XU.dom, UU);
        for (; UU;) UU = hQ(UU)
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

    function hQ(UU) {
      let XU = UU.nextSibling;
      return UU.remove(), XU
    }
    const UA = cU.r.define({
      enables: bQ
    });

    function XA(UU, XU) {
      let zU, yU = new Promise((UU => zU = UU)),
        QU = UU => function(UU, XU, zU) {
          let cU = XU.content ? XU.content(UU, (() => AU(null))) : null;
          if (!cU) {
            if (cU = (0, YU.b)("form"), XU.input) {
              let UU = (0, YU.b)("input", XU.input);
              /^(text|password|number|email|tel|url)$/.test(UU.type) && UU.classList.add("cm-textfield"), UU.name || (UU.name = "input"), cU.appendChild((0, YU.b)("label", (XU.label || "") + ": ", UU))
            } else cU.appendChild(document.createTextNode(XU.label || ""));
            cU.appendChild(document.createTextNode(" ")), cU.appendChild((0, YU.b)("button", {
              class: "cm-button",
              type: "submit"
            }, XU.submitLabel || "OK"))
          }
          let yU = "FORM" == cU.nodeName ? [cU] : cU.querySelectorAll("form");
          for (let FU = 0; FU < yU.length; FU++) {
            let UU = yU[FU];
            UU.addEventListener("keydown", (XU => {
              27 == XU.keyCode ? (XU.preventDefault(), AU(null)) : 13 == XU.keyCode && (XU.preventDefault(), AU(UU))
            })), UU.addEventListener("submit", (XU => {
              XU.preventDefault(), AU(UU)
            }))
          }
          let QU = (0, YU.b)("div", cU, (0, YU.b)("button", {
            onclick: () => AU(null),
            "aria-label": UU.state.phrase("close"),
            class: "cm-dialog-close",
            type: "button"
          }, ["\xd7"]));
          XU.class && (QU.className = XU.class);

          function AU(XU) {
            QU.contains(QU.ownerDocument.activeElement) && UU.focus(), zU(XU)
          }
          return QU.classList.add("cm-dialog"), {
            dom: QU,
            top: XU.top,
            mount: () => {
              if (XU.focus) {
                let UU;
                UU = "string" == typeof XU.focus ? cU.querySelector(XU.focus) : cU.querySelector("input") || cU.querySelector("button"), UU && "select" in UU ? UU.select() : UU && "focus" in UU && UU.focus()
              }
            }
          }
        }(UU, XU, zU);
      UU.state.field(zA, !1) ? UU.dispatch({
        effects: cA.of(QU)
      }) : UU.dispatch({
        effects: cU.H.appendConfig.of(zA.init((() => [QU])))
      });
      let AU = yA.of(QU);
      return {
        close: AU,
        result: yU.then((XU => ((UU.win.queueMicrotask || (XU => UU.win.setTimeout(XU, 10)))((() => {
          UU.state.field(zA).indexOf(QU) > -1 && UU.dispatch({
            effects: AU
          })
        })), XU)))
      }
    }
    const zA = cU.L.define({
        create: () => [],
        update(UU, XU) {
          for (let zU of XU.effects) zU.is(cA) ? UU = [zU.value].concat(UU) : zU.is(yA) && (UU = UU.filter((UU => UU != zU.value)));
          return UU
        },
        provide: UU => UA.computeN([UU], (XU => XU.field(UU)))
      }),
      cA = cU.H.define(),
      yA = cU.H.define();
    class QA extends cU.E {
      compare(UU) {
        return this == UU || this.constructor == UU.constructor && this.eq(UU)
      }
      eq(UU) {
        return !1
      }
      destroy(UU) {}
    }
    QA.prototype.elementClass = "", QA.prototype.toDOM = void 0, QA.prototype.mapMode = cU.t.TrackBefore, QA.prototype.startSide = QA.prototype.endSide = -1, QA.prototype.point = !0;
    const AA = cU.r.define(),
      FA = cU.r.define(),
      oA = {
        class: "",
        renderEmptyElements: !1,
        elementStyle: "",
        markers: () => cU.D.empty,
        lineMarker: () => null,
        widgetMarker: () => null,
        lineMarkerChange: null,
        initialSpacer: null,
        updateSpacer: null,
        domEventHandlers: {},
        side: "before"
      },
      DA = cU.r.define();

    function EA(UU) {
      return [NA(), DA.of({
        ...oA,
        ...UU
      })]
    }
    const YA = cU.r.define({
      combine: UU => UU.some((UU => UU))
    });

    function NA(UU) {
      let XU = [IA];
      return UU && !1 === UU.fixed && XU.push(YA.of(!0)), XU
    }
    const IA = KX.fromClass(class {
      constructor(UU) {
        this.view = UU, this.domAfter = null, this.prevViewport = UU.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = UU.state.facet(DA).map((XU => new gA(UU, XU))), this.fixed = !UU.state.facet(YA);
        for (let XU of this.gutters) "after" == XU.config.side ? this.getDOMAfter().appendChild(XU.dom) : this.dom.appendChild(XU.dom);
        this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), UU.scrollDOM.insertBefore(this.dom, UU.contentDOM)
      }
      getDOMAfter() {
        return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter
      }
      update(UU) {
        if (this.updateGutters(UU)) {
          let XU = this.prevViewport,
            zU = UU.view.viewport,
            cU = Math.min(XU.to, zU.to) - Math.max(XU.from, zU.from);
          this.syncGutters(cU < .8 * (zU.to - zU.from))
        }
        if (UU.geometryChanged) {
          let UU = this.view.contentHeight / this.view.scaleY + "px";
          this.dom.style.minHeight = UU, this.domAfter && (this.domAfter.style.minHeight = UU)
        }
        this.view.state.facet(YA) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = UU.view.viewport
      }
      syncGutters(UU) {
        let XU = this.dom.nextSibling;
        UU && (this.dom.remove(), this.domAfter && this.domAfter.remove());
        let zU = cU.D.iter(this.view.state.facet(AA), this.view.viewport.from),
          yU = [],
          QU = this.gutters.map((UU => new tA(UU, this.view.viewport, -this.view.documentPadding.top)));
        for (let cU of this.view.viewportLineBlocks)
          if (yU.length && (yU = []), Array.isArray(cU.type)) {
            let UU = !0;
            for (let XU of cU.type)
              if (XU.type == qU.Text && UU) {
                aA(zU, yU, XU.from);
                for (let UU of QU) UU.line(this.view, XU, yU);
                UU = !1
              } else if (XU.widget)
              for (let UU of QU) UU.widget(this.view, XU)
          } else if (cU.type == qU.Text) {
          aA(zU, yU, cU.from);
          for (let UU of QU) UU.line(this.view, cU, yU)
        } else if (cU.widget)
          for (let UU of QU) UU.widget(this.view, cU);
        for (let cU of QU) cU.finish();
        UU && (this.view.scrollDOM.insertBefore(this.dom, XU), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter))
      }
      updateGutters(UU) {
        let XU = UU.startState.facet(DA),
          zU = UU.state.facet(DA),
          yU = UU.docChanged || UU.heightChanged || UU.viewportChanged || !cU.D.eq(UU.startState.facet(AA), UU.state.facet(AA), UU.view.viewport.from, UU.view.viewport.to);
        if (XU == zU)
          for (let cU of this.gutters) cU.update(UU) && (yU = !0);
        else {
          yU = !0;
          let cU = [];
          for (let yU of zU) {
            let zU = XU.indexOf(yU);
            zU < 0 ? cU.push(new gA(this.view, yU)) : (this.gutters[zU].update(UU), cU.push(this.gutters[zU]))
          }
          for (let UU of this.gutters) UU.dom.remove(), cU.indexOf(UU) < 0 && UU.destroy();
          for (let UU of cU) "after" == UU.config.side ? this.getDOMAfter().appendChild(UU.dom) : this.dom.appendChild(UU.dom);
          this.gutters = cU
        }
        return yU
      }
      destroy() {
        for (let UU of this.gutters) UU.destroy();
        this.dom.remove(), this.domAfter && this.domAfter.remove()
      }
    }, {
      provide: UU => dy.scrollMargins.of((XU => {
        let zU = XU.plugin(UU);
        if (!zU || 0 == zU.gutters.length || !zU.fixed) return null;
        let cU = zU.dom.offsetWidth * XU.scaleX,
          yU = zU.domAfter ? zU.domAfter.offsetWidth * XU.scaleX : 0;
        return XU.textDirection == DX.LTR ? {
          left: cU,
          right: yU
        } : {
          right: cU,
          left: yU
        }
      }))
    });

    function pA(UU) {
      return Array.isArray(UU) ? UU : [UU]
    }

    function aA(UU, XU, zU) {
      for (; UU.value && UU.from <= zU;) UU.from == zU && XU.push(UU.value), UU.next()
    }
    class tA {
      constructor(UU, XU, zU) {
        this.gutter = UU, this.height = zU, this.i = 0, this.cursor = cU.D.iter(UU.markers, XU.from)
      }
      addElement(UU, XU, zU) {
        let {
          gutter: cU
        } = this, yU = (XU.top - this.height) / UU.scaleY, QU = XU.height / UU.scaleY;
        if (this.i == cU.elements.length) {
          let XU = new kA(UU, QU, yU, zU);
          cU.elements.push(XU), cU.dom.appendChild(XU.dom)
        } else cU.elements[this.i].update(UU, QU, yU, zU);
        this.height = XU.bottom, this.i++
      }
      line(UU, XU, zU) {
        let cU = [];
        aA(this.cursor, cU, XU.from), zU.length && (cU = cU.concat(zU));
        let yU = this.gutter.config.lineMarker(UU, XU, cU);
        yU && cU.unshift(yU);
        let QU = this.gutter;
        (0 != cU.length || QU.config.renderEmptyElements) && this.addElement(UU, XU, cU)
      }
      widget(UU, XU) {
        let zU = this.gutter.config.widgetMarker(UU, XU.widget, XU),
          cU = zU ? [zU] : null;
        for (let yU of UU.state.facet(FA)) {
          let zU = yU(UU, XU.widget, XU);
          zU && (cU || (cU = [])).push(zU)
        }
        cU && this.addElement(UU, XU, cU)
      }
      finish() {
        let UU = this.gutter;
        for (; UU.elements.length > this.i;) {
          let XU = UU.elements.pop();
          UU.dom.removeChild(XU.dom), XU.destroy()
        }
      }
    }
    class gA {
      constructor(UU, XU) {
        this.view = UU, this.config = XU, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
        for (let zU in XU.domEventHandlers) this.dom.addEventListener(zU, (cU => {
          let yU, QU = cU.target;
          if (QU != this.dom && this.dom.contains(QU)) {
            for (; QU.parentNode != this.dom;) QU = QU.parentNode;
            let UU = QU.getBoundingClientRect();
            yU = (UU.top + UU.bottom) / 2
          } else yU = cU.clientY;
          let AU = UU.lineBlockAtHeight(yU - UU.documentTop);
          XU.domEventHandlers[zU](UU, AU, cU) && cU.preventDefault()
        }));
        this.markers = pA(XU.markers(UU)), XU.initialSpacer && (this.spacer = new kA(UU, 0, 0, [XU.initialSpacer(UU)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none")
      }
      update(UU) {
        let XU = this.markers;
        if (this.markers = pA(this.config.markers(UU.view)), this.spacer && this.config.updateSpacer) {
          let XU = this.config.updateSpacer(this.spacer.markers[0], UU);
          XU != this.spacer.markers[0] && this.spacer.update(UU.view, 0, 0, [XU])
        }
        let zU = UU.view.viewport;
        return !cU.D.eq(this.markers, XU, zU.from, zU.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(UU)
      }
      destroy() {
        for (let UU of this.elements) UU.destroy()
      }
    }
    class kA {
      constructor(UU, XU, zU, cU) {
        this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(UU, XU, zU, cU)
      }
      update(UU, XU, zU, cU) {
        this.height != XU && (this.height = XU, this.dom.style.height = XU + "px"), this.above != zU && (this.dom.style.marginTop = (this.above = zU) ? zU + "px" : ""),
          function(UU, XU) {
            if (UU.length != XU.length) return !1;
            for (let zU = 0; zU < UU.length; zU++)
              if (!UU[zU].compare(XU[zU])) return !1;
            return !0
          }(this.markers, cU) || this.setMarkers(UU, cU)
      }
      setMarkers(UU, XU) {
        let zU = "cm-gutterElement",
          cU = this.dom.firstChild;
        for (let yU = 0, QU = 0;;) {
          let AU = QU,
            FU = yU < XU.length ? XU[yU++] : null,
            oU = !1;
          if (FU) {
            let UU = FU.elementClass;
            UU && (zU += " " + UU);
            for (let XU = QU; XU < this.markers.length; XU++)
              if (this.markers[XU].compare(FU)) {
                AU = XU, oU = !0;
                break
              }
          } else AU = this.markers.length;
          for (; QU < AU;) {
            let UU = this.markers[QU++];
            if (UU.toDOM) {
              UU.destroy(cU);
              let XU = cU.nextSibling;
              cU.remove(), cU = XU
            }
          }
          if (!FU) break;
          FU.toDOM && (oU ? cU = cU.nextSibling : this.dom.insertBefore(FU.toDOM(UU), cU)), oU && QU++
        }
        this.dom.className = zU, this.markers = XU
      }
      destroy() {
        this.setMarkers(null, [])
      }
    }
    const GA = cU.r.define(),
      BA = cU.r.define(),
      ZA = cU.r.define({
        combine: UU => (0, cU.V)(UU, {
          formatNumber: String,
          domEventHandlers: {}
        }, {
          domEventHandlers(UU, XU) {
            let zU = Object.assign({}, UU);
            for (let cU in XU) {
              let UU = zU[cU],
                yU = XU[cU];
              zU[cU] = UU ? (XU, zU, cU) => UU(XU, zU, cU) || yU(XU, zU, cU) : yU
            }
            return zU
          }
        })
      });
    class RA extends QA {
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

    function PA(UU, XU) {
      return UU.state.facet(ZA).formatNumber(XU, UU.state)
    }
    const WA = DA.compute([ZA], (UU => ({
      class: "cm-lineNumbers",
      renderEmptyElements: !1,
      markers: UU => UU.state.facet(GA),
      lineMarker: (UU, XU, zU) => zU.some((UU => UU.toDOM)) ? null : new RA(PA(UU, UU.state.doc.lineAt(XU.from).number)),
      widgetMarker: (UU, XU, zU) => {
        for (let cU of UU.state.facet(BA)) {
          let yU = cU(UU, XU, zU);
          if (yU) return yU
        }
        return null
      },
      lineMarkerChange: UU => UU.startState.facet(ZA) != UU.state.facet(ZA),
      initialSpacer: UU => new RA(PA(UU, LA(UU.state.doc.lines))),
      updateSpacer(UU, XU) {
        let zU = PA(XU.view, LA(XU.view.state.doc.lines));
        return zU == UU.number ? UU : new RA(zU)
      },
      domEventHandlers: UU.facet(ZA).domEventHandlers,
      side: "before"
    })));

    function dA() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [ZA.of(UU), NA(), WA]
    }

    function LA(UU) {
      let XU = 9;
      for (; XU < UU;) XU = 10 * XU + 9;
      return XU
    }
    const eA = new class extends QA {
        constructor() {
          super(...arguments), this.elementClass = "cm-activeLineGutter"
        }
      },
      CA = AA.compute(["selection"], (UU => {
        let XU = [],
          zU = -1;
        for (let cU of UU.selection.Qt) {
          let yU = UU.doc.lineAt(cU.head).from;
          yU > zU && (zU = yU, XU.push(eA.range(yU)))
        }
        return cU.D.of(XU)
      }));

    function wA() {
      return CA
    }
  },
  44034: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => cU,
      i: () => IU,
      j: () => AU,
      n: () => EU,
      p: () => DU,
      t: () => SU,
      w: () => uU,
      x: () => rU,
      z: () => pU
    });
    const cU = 1024;
    let yU = 0;
    class QU {
      constructor(UU, XU) {
        this.from = UU, this.to = XU
      }
    }
    class AU {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.id = yU++, this.perNode = !!UU.perNode, this.deserialize = UU.deserialize || (() => {
          throw new Error("This node type doesn't define a deserialize function")
        }), this.combine = UU.combine || null
      }
      add(UU) {
        if (this.perNode) throw new RangeError("Can't add per-node props to node types");
        return "function" != typeof UU && (UU = DU.match(UU)), XU => {
          let zU = UU(XU);
          return void 0 === zU ? null : [this, zU]
        }
      }
    }
    AU.closedBy = new AU({
      deserialize: UU => UU.split(" ")
    }), AU.openedBy = new AU({
      deserialize: UU => UU.split(" ")
    }), AU.group = new AU({
      deserialize: UU => UU.split(" ")
    }), AU.isolate = new AU({
      deserialize: UU => {
        if (UU && "rtl" != UU && "ltr" != UU && "auto" != UU) throw new RangeError("Invalid value for isolate: " + UU);
        return UU || "auto"
      }
    }), AU.contextHash = new AU({
      perNode: !0
    }), AU.lookAhead = new AU({
      perNode: !0
    }), AU.mounted = new AU({
      perNode: !0
    });
    class FU {
      constructor(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this.tree = UU, this.overlay = XU, this.parser = zU, this.bracketed = cU
      }
      static get(UU) {
        return UU && UU.props && UU.props[AU.mounted.id]
      }
    }
    const oU = Object.create(null);
    class DU {
      constructor(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.name = UU, this.props = XU, this.id = zU, this.flags = cU
      }
      static define(UU) {
        let XU = UU.props && UU.props.length ? Object.create(null) : oU,
          zU = (UU.top ? 1 : 0) | (UU.skipped ? 2 : 0) | (UU.error ? 4 : 0) | (null == UU.name ? 8 : 0),
          cU = new DU(UU.name || "", XU, UU.id, zU);
        if (UU.props)
          for (let yU of UU.props)
            if (Array.isArray(yU) || (yU = yU(cU)), yU) {
              if (yU[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
              XU[yU[0].id] = yU[1]
            } return cU
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
          let XU = this.prop(AU.group);
          return !!XU && XU.indexOf(UU) > -1
        }
        return this.id == UU
      }
      static match(UU) {
        let XU = Object.create(null);
        for (let zU in UU)
          for (let cU of zU.split(" ")) XU[cU] = UU[zU];
        return UU => {
          for (let zU = UU.prop(AU.group), cU = -1; cU < (zU ? zU.length : 0); cU++) {
            let yU = XU[cU < 0 ? UU.name : zU[cU]];
            if (yU) return yU
          }
        }
      }
    }
    DU.none = new DU("", Object.create(null), 0, 8);
    class EU {
      constructor(UU) {
        this.types = UU;
        for (let XU = 0; XU < UU.length; XU++)
          if (UU[XU].id != XU) throw new RangeError("Node type ids should correspond to array positions when creating a node set")
      }
      extend() {
        let UU = [];
        for (var XU = arguments.length, zU = new Array(XU), cU = 0; cU < XU; cU++) zU[cU] = arguments[cU];
        for (let yU of this.types) {
          let XU = null;
          for (let UU of zU) {
            let zU = UU(yU);
            if (zU) {
              XU || (XU = Object.assign({}, yU.props));
              let UU = zU[1],
                cU = zU[0];
              cU.combine && cU.id in XU && (UU = cU.combine(XU[cU.id], UU)), XU[cU.id] = UU
            }
          }
          UU.push(XU ? new DU(yU.name, XU, yU.id, yU.flags) : yU)
        }
        return new EU(UU)
      }
    }
    const YU = new WeakMap,
      NU = new WeakMap;
    var IU;
    ! function(UU) {
      UU[UU.ExcludeBuffers = 1] = "ExcludeBuffers", UU[UU.IncludeAnonymous = 2] = "IncludeAnonymous", UU[UU.IgnoreMounts = 4] = "IgnoreMounts", UU[UU.IgnoreOverlays = 8] = "IgnoreOverlays", UU[UU.EnterBracketed = 16] = "EnterBracketed"
    }(IU || (IU = {}));
    class pU {
      constructor(UU, XU, zU, cU, yU) {
        if (this.type = UU, this.children = XU, this.positions = zU, this.length = cU, this.props = null, yU && yU.length) {
          this.props = Object.create(null);
          for (let [UU, XU] of yU) this.props["number" == typeof UU ? UU : UU.id] = XU
        }
      }
      toString() {
        let UU = FU.get(this);
        if (UU && !UU.overlay) return UU.tree.toString();
        let XU = "";
        for (let zU of this.children) {
          let UU = zU.toString();
          UU && (XU && (XU += ","), XU += UU)
        }
        return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (XU.length ? "(" + XU + ")" : "") : XU
      }
      cursor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return new eU(this.topNode, UU)
      }
      cursorAt(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zU = YU.get(this) || this.topNode,
          cU = new eU(zU);
        return cU.moveTo(UU, XU), YU.set(this, cU._tree), cU
      }
      get topNode() {
        return new BU(this, 0, 0, null)
      }
      resolve(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zU = kU(YU.get(this) || this.topNode, UU, XU, !1);
        return YU.set(this, zU), zU
      }
      resolveInner(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zU = kU(NU.get(this) || this.topNode, UU, XU, !0);
        return NU.set(this, zU), zU
      }
      resolveStack(UU) {
        return function(UU, XU, zU) {
          let cU = UU.resolveInner(XU, zU),
            yU = null;
          for (let QU = cU instanceof BU ? cU : cU.context.parent; QU; QU = QU.parent)
            if (QU.index < 0) {
              let UU = QU.parent;
              (yU || (yU = [cU])).push(UU.resolve(XU, zU)), QU = UU
            } else {
              let UU = FU.get(QU.tree);
              if (UU && UU.overlay && UU.overlay[0].from <= XU && UU.overlay[UU.overlay.length - 1].to >= XU) {
                let AU = new BU(UU.tree, UU.overlay[0].from + QU.from, -1, QU);
                (yU || (yU = [cU])).push(kU(AU, XU, zU, !1))
              }
            } return yU ? dU(yU) : cU
        }(this, UU, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
      }
      iterate(UU) {
        let {
          enter: XU,
          leave: zU,
          from: cU = 0,
          to: yU = this.length
        } = UU, QU = UU.mode || 0, AU = (QU & IU.IncludeAnonymous) > 0;
        for (let FU = this.cursor(QU | IU.IncludeAnonymous);;) {
          let UU = !1;
          if (FU.from <= yU && FU.to >= cU && (!AU && FU.type.isAnonymous || !1 !== XU(FU))) {
            if (FU.firstChild()) continue;
            UU = !0
          }
          for (; UU && zU && (AU || !FU.type.isAnonymous) && zU(FU), !FU.nextSibling();) {
            if (!FU.parent()) return;
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
          for (let XU in this.props) UU.push([+XU, this.props[XU]]);
        return UU
      }
      balance() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this.children.length <= 8 ? this : OU(DU.none, this.children, this.positions, 0, this.children.length, 0, this.length, ((UU, XU, zU) => new pU(this.type, UU, XU, zU, this.propValues)), UU.makeTree || ((UU, XU, zU) => new pU(DU.none, UU, XU, zU)))
      }
      static build(UU) {
        return function(UU) {
          var XU;
          let {
            buffer: zU,
            nodeSet: yU,
            maxBufferLength: QU = cU,
            reused: FU = [],
            minRepeatType: oU = yU.types.length
          } = UU, DU = Array.isArray(zU) ? new aU(zU, zU.length) : zU, EU = yU.types, YU = 0, NU = 0;

          function IU(UU, XU, zU, cU, AU, pU) {
            let {
              id: aU,
              start: PU,
              end: WU,
              size: dU
            } = DU, LU = NU, eU = YU;
            if (dU < 0) {
              if (DU.next(), -1 == dU) {
                let XU = FU[aU];
                return zU.push(XU), void cU.push(PU - UU)
              }
              if (-3 == dU) return void(YU = aU);
              if (-4 == dU) return void(NU = aU);
              throw new RangeError(`Unrecognized record size: ${dU}`)
            }
            let CU, wU, qU = EU[aU],
              SU = PU - UU;
            if (WU - PU <= QU && (wU = ZU(DU.pos - XU, AU))) {
              let XU = new Uint16Array(wU.size - wU.skip),
                zU = DU.pos - wU.size,
                cU = XU.length;
              for (; DU.pos > zU;) cU = RU(wU.start, XU, cU);
              CU = new tU(XU, WU - wU.start, yU), SU = wU.start - UU
            } else {
              let UU = DU.pos - dU;
              DU.next();
              let XU = [],
                zU = [],
                cU = aU >= oU ? aU : -1,
                yU = 0,
                AU = WU;
              for (; DU.pos > UU;) cU >= 0 && DU.id == cU && DU.size >= 0 ? (DU.end <= AU - QU && (GU(XU, zU, PU, yU, DU.end, AU, cU, LU, eU), yU = XU.length, AU = DU.end), DU.next()) : pU > 2500 ? gU(PU, UU, XU, zU) : IU(PU, UU, XU, zU, cU, pU + 1);
              if (cU >= 0 && yU > 0 && yU < XU.length && GU(XU, zU, PU, yU, PU, AU, cU, LU, eU), XU.reverse(), zU.reverse(), cU > -1 && yU > 0) {
                let UU = kU(qU, eU);
                CU = OU(qU, XU, zU, 0, XU.length, 0, WU - PU, UU, UU)
              } else CU = BU(qU, XU, zU, WU - PU, LU - WU, eU)
            }
            zU.push(CU), cU.push(SU)
          }

          function gU(UU, XU, zU, cU) {
            let AU = [],
              FU = 0,
              oU = -1;
            for (; DU.pos > XU;) {
              let {
                id: UU,
                start: XU,
                end: zU,
                size: cU
              } = DU;
              if (cU > 4) DU.next();
              else {
                if (oU > -1 && XU < oU) break;
                oU < 0 && (oU = zU - QU), AU.push(UU, XU, zU), FU++, DU.next()
              }
            }
            if (FU) {
              let XU = new Uint16Array(4 * FU),
                QU = AU[AU.length - 2];
              for (let UU = AU.length - 3, zU = 0; UU >= 0; UU -= 3) XU[zU++] = AU[UU], XU[zU++] = AU[UU + 1] - QU, XU[zU++] = AU[UU + 2] - QU, XU[zU++] = zU;
              zU.push(new tU(XU, AU[2] - QU, yU)), cU.push(QU - UU)
            }
          }

          function kU(UU, XU) {
            return (zU, cU, yU) => {
              let QU, FU, oU = 0,
                DU = zU.length - 1;
              if (DU >= 0 && (QU = zU[DU]) instanceof pU) {
                if (!DU && QU.type == UU && QU.length == yU) return QU;
                (FU = QU.prop(AU.lookAhead)) && (oU = cU[DU] + QU.length + FU)
              }
              return BU(UU, zU, cU, yU, oU, XU)
            }
          }

          function GU(UU, XU, zU, cU, QU, AU, FU, oU, DU) {
            let EU = [],
              YU = [];
            for (; UU.length > cU;) EU.push(UU.pop()), YU.push(XU.pop() + zU - QU);
            UU.push(BU(yU.types[FU], EU, YU, AU - QU, oU - AU, DU)), XU.push(QU - zU)
          }

          function BU(UU, XU, zU, cU, yU, QU, FU) {
            if (QU) {
              let UU = [AU.contextHash, QU];
              FU = FU ? [UU].concat(FU) : [UU]
            }
            if (yU > 25) {
              let UU = [AU.lookAhead, yU];
              FU = FU ? [UU].concat(FU) : [UU]
            }
            return new pU(UU, XU, zU, cU, FU)
          }

          function ZU(UU, XU) {
            let zU = DU.fork(),
              cU = 0,
              yU = 0,
              AU = 0,
              FU = zU.end - QU,
              EU = {
                size: 0,
                start: 0,
                skip: 0
              };
            UU: for (let QU = zU.pos - UU; zU.pos > QU;) {
              let UU = zU.size;
              if (zU.id == XU && UU >= 0) {
                EU.size = cU, EU.start = yU, EU.skip = AU, AU += 4, cU += 4, zU.next();
                continue
              }
              let DU = zU.pos - UU;
              if (UU < 0 || DU < QU || zU.start < FU) break;
              let YU = zU.id >= oU ? 4 : 0,
                NU = zU.start;
              for (zU.next(); zU.pos > DU;) {
                if (zU.size < 0) {
                  if (-3 != zU.size && -4 != zU.size) break UU;
                  YU += 4
                } else zU.id >= oU && (YU += 4);
                zU.next()
              }
              yU = NU, cU += UU, AU += YU
            }
            return (XU < 0 || cU == UU) && (EU.size = cU, EU.start = yU, EU.skip = AU), EU.size > 4 ? EU : void 0
          }

          function RU(UU, XU, zU) {
            let {
              id: cU,
              start: yU,
              end: QU,
              size: AU
            } = DU;
            if (DU.next(), AU >= 0 && cU < oU) {
              let FU = zU;
              if (AU > 4) {
                let cU = DU.pos - (AU - 4);
                for (; DU.pos > cU;) zU = RU(UU, XU, zU)
              }
              XU[--zU] = FU, XU[--zU] = QU - UU, XU[--zU] = yU - UU, XU[--zU] = cU
            } else - 3 == AU ? YU = cU : -4 == AU && (NU = cU);
            return zU
          }
          let PU = [],
            WU = [];
          for (; DU.pos > 0;) IU(UU.start || 0, UU.bufferStart || 0, PU, WU, -1, 0);
          let dU = null !== (XU = UU.length) && void 0 !== XU ? XU : PU.length ? WU[0] + PU[0].length : 0;
          return new pU(EU[UU.topID], PU.reverse(), WU.reverse(), dU)
        }(UU)
      }
    }
    pU.empty = new pU(DU.none, [], [], 0);
    class aU {
      constructor(UU, XU) {
        this.buffer = UU, this.index = XU
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
        return new aU(this.buffer, this.index)
      }
    }
    class tU {
      constructor(UU, XU, zU) {
        this.buffer = UU, this.length = XU, this.set = zU
      }
      get type() {
        return DU.none
      }
      toString() {
        let UU = [];
        for (let XU = 0; XU < this.buffer.length;) UU.push(this.childString(XU)), XU = this.buffer[XU + 3];
        return UU.join(",")
      }
      childString(UU) {
        let XU = this.buffer[UU],
          zU = this.buffer[UU + 3],
          cU = this.set.types[XU],
          yU = cU.name;
        if (/\W/.test(yU) && !cU.isError && (yU = JSON.stringify(yU)), zU == (UU += 4)) return yU;
        let QU = [];
        for (; UU < zU;) QU.push(this.childString(UU)), UU = this.buffer[UU + 3];
        return yU + "(" + QU.join(",") + ")"
      }
      findChild(UU, XU, zU, cU, yU) {
        let {
          buffer: QU
        } = this, AU = -1;
        for (let FU = UU; FU != XU && !(gU(yU, cU, QU[FU + 1], QU[FU + 2]) && (AU = FU, zU > 0)); FU = QU[FU + 3]);
        return AU
      }
      slice(UU, XU, zU) {
        let cU = this.buffer,
          yU = new Uint16Array(XU - UU),
          QU = 0;
        for (let AU = UU, FU = 0; AU < XU;) {
          yU[FU++] = cU[AU++], yU[FU++] = cU[AU++] - zU;
          let XU = yU[FU++] = cU[AU++] - zU;
          yU[FU++] = cU[AU++] - UU, QU = Math.max(QU, XU)
        }
        return new tU(yU, QU, this.set)
      }
    }

    function gU(UU, XU, zU, cU) {
      switch (UU) {
        case -2:
          return zU < XU;
        case -1:
          return cU >= XU && zU < XU;
        case 0:
          return zU < XU && cU > XU;
        case 1:
          return zU <= XU && cU > XU;
        case 2:
          return cU > XU;
        case 4:
          return !0
      }
    }

    function kU(UU, XU, zU, cU) {
      for (var yU; UU.from == UU.to || (zU < 1 ? UU.from >= XU : UU.from > XU) || (zU > -1 ? UU.to <= XU : UU.to < XU);) {
        let XU = !cU && UU instanceof BU && UU.index < 0 ? null : UU.parent;
        if (!XU) return UU;
        UU = XU
      }
      let QU = cU ? 0 : IU.IgnoreOverlays;
      if (cU)
        for (let AU = UU, FU = AU.parent; FU; AU = FU, FU = AU.parent) AU instanceof BU && AU.index < 0 && (null === (yU = FU.enter(XU, zU, QU)) || void 0 === yU ? void 0 : yU.from) != AU.from && (UU = FU);
      for (;;) {
        let cU = UU.enter(XU, zU, QU);
        if (!cU) return UU;
        UU = cU
      }
    }
    class GU {
      cursor() {
        return new eU(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)
      }
      getChild(UU) {
        let XU = ZU(this, UU, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null);
        return XU.length ? XU[0] : null
      }
      getChildren(UU) {
        return ZU(this, UU, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
      }
      resolve(UU) {
        return kU(this, UU, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !1)
      }
      resolveInner(UU) {
        return kU(this, UU, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !0)
      }
      matchContext(UU) {
        return RU(this.parent, UU)
      }
      enterUnfinishedNodesBefore(UU) {
        let XU = this.childBefore(UU),
          zU = this;
        for (; XU;) {
          let UU = XU.lastChild;
          if (!UU || UU.to != XU.to) break;
          UU.type.isError && UU.from == UU.to ? (zU = XU, XU = UU.prevSibling) : XU = UU
        }
        return zU
      }
      get node() {
        return this
      }
      get next() {
        return this.parent
      }
    }
    class BU extends GU {
      constructor(UU, XU, zU, cU) {
        super(), this._tree = UU, this.from = XU, this.index = zU, this._parent = cU
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
      nextChild(UU, XU, zU, cU) {
        let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        for (let QU = this;;) {
          for (let {
              children: AU,
              positions: oU
            } = QU._tree, DU = XU > 0 ? AU.length : -1; UU != DU; UU += XU) {
            let DU, EU = AU[UU],
              YU = oU[UU] + QU.from;
            if (yU & IU.EnterBracketed && EU instanceof pU && (DU = FU.get(EU)) && !DU.overlay && DU.bracketed && zU >= YU && zU <= YU + EU.length || gU(cU, zU, YU, YU + EU.length))
              if (EU instanceof tU) {
                if (yU & IU.ExcludeBuffers) continue;
                let AU = EU.findChild(0, EU.buffer.length, XU, zU - YU, cU);
                if (AU > -1) return new WU(new PU(QU, EU, UU, YU), null, AU)
              } else if (yU & IU.IncludeAnonymous || !EU.type.isAnonymous || CU(EU)) {
              let AU;
              if (!(yU & IU.IgnoreMounts) && (AU = FU.get(EU)) && !AU.overlay) return new BU(AU.tree, YU, UU, QU);
              let oU = new BU(EU, YU, UU, QU);
              return yU & IU.IncludeAnonymous || !oU.type.isAnonymous ? oU : oU.nextChild(XU < 0 ? EU.children.length - 1 : 0, XU, zU, cU, yU)
            }
          }
          if (yU & IU.IncludeAnonymous || !QU.type.isAnonymous) return null;
          if (UU = QU.index >= 0 ? QU.index + XU : XU < 0 ? -1 : QU._parent._tree.children.length, QU = QU._parent, !QU) return null
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
      enter(UU, XU) {
        let zU, cU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (!(cU & IU.IgnoreOverlays) && (zU = FU.get(this._tree)) && zU.overlay) {
          let yU = UU - this.from,
            QU = cU & IU.EnterBracketed && zU.bracketed;
          for (let {
              from: UU,
              to: cU
            }
            of zU.overlay)
            if ((XU > 0 || QU ? UU <= yU : UU < yU) && (XU < 0 || QU ? cU >= yU : cU > yU)) return new BU(zU.tree, zU.overlay[0].from + this.from, -1, this)
        }
        return this.nextChild(0, 1, UU, XU, cU)
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

    function ZU(UU, XU, zU, cU) {
      let yU = UU.cursor(),
        QU = [];
      if (!yU.firstChild()) return QU;
      if (null != zU)
        for (let AU = !1; !AU;)
          if (AU = yU.type.is(zU), !yU.nextSibling()) return QU;
      for (;;) {
        if (null != cU && yU.type.is(cU)) return QU;
        if (yU.type.is(XU) && QU.push(yU.node), !yU.nextSibling()) return null == cU ? QU : []
      }
    }

    function RU(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : XU.length - 1;
      for (let cU = UU; zU >= 0; cU = cU.parent) {
        if (!cU) return !1;
        if (!cU.type.isAnonymous) {
          if (XU[zU] && XU[zU] != cU.name) return !1;
          zU--
        }
      }
      return !0
    }
    class PU {
      constructor(UU, XU, zU, cU) {
        this.parent = UU, this.buffer = XU, this.index = zU, this.start = cU
      }
    }
    class WU extends GU {
      get name() {
        return this.type.name
      }
      get from() {
        return this.context.start + this.context.buffer.buffer[this.index + 1]
      }
      get to() {
        return this.context.start + this.context.buffer.buffer[this.index + 2]
      }
      constructor(UU, XU, zU) {
        super(), this.context = UU, this._parent = XU, this.index = zU, this.type = UU.buffer.set.types[UU.buffer.buffer[zU]]
      }
      child(UU, XU, zU) {
        let {
          buffer: cU
        } = this.context, yU = cU.findChild(this.index + 4, cU.buffer[this.index + 3], UU, XU - this.context.start, zU);
        return yU < 0 ? null : new WU(this.context, this, yU)
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
      enter(UU, XU) {
        if ((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0) & IU.ExcludeBuffers) return null;
        let {
          buffer: zU
        } = this.context, cU = zU.findChild(this.index + 4, zU.buffer[this.index + 3], XU > 0 ? 1 : -1, UU - this.context.start, XU);
        return cU < 0 ? null : new WU(this.context, this, cU)
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
        } = this.context, XU = UU.buffer[this.index + 3];
        return XU < (this._parent ? UU.buffer[this._parent.index + 3] : UU.buffer.length) ? new WU(this.context, this._parent, XU) : this.externalSibling(1)
      }
      get prevSibling() {
        let {
          buffer: UU
        } = this.context, XU = this._parent ? this._parent.index + 4 : 0;
        return this.index == XU ? this.externalSibling(-1) : new WU(this.context, this._parent, UU.findChild(XU, this.index, -1, 0, 4))
      }
      get tree() {
        return null
      }
      toTree() {
        let UU = [],
          XU = [],
          {
            buffer: zU
          } = this.context,
          cU = this.index + 4,
          yU = zU.buffer[this.index + 3];
        if (yU > cU) {
          let QU = zU.buffer[this.index + 1];
          UU.push(zU.slice(cU, yU, QU)), XU.push(0)
        }
        return new pU(this.type, UU, XU, this.to - this.from)
      }
      toString() {
        return this.context.buffer.childString(this.index)
      }
    }

    function dU(UU) {
      if (!UU.length) return null;
      let XU = 0,
        zU = UU[0];
      for (let QU = 1; QU < UU.length; QU++) {
        let cU = UU[QU];
        (cU.from > zU.from || cU.to < zU.to) && (zU = cU, XU = QU)
      }
      let cU = zU instanceof BU && zU.index < 0 ? null : zU.parent,
        yU = UU.slice();
      return cU ? yU[XU] = cU : yU.splice(XU, 1), new LU(yU, zU)
    }
    class LU {
      constructor(UU, XU) {
        this.heads = UU, this.node = XU
      }
      get next() {
        return dU(this.heads)
      }
    }
    class eU {
      get name() {
        return this.type.name
      }
      constructor(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = XU & ~IU.EnterBracketed, UU instanceof BU) this.yieldNode(UU);
        else {
          this._tree = UU.context.parent, this.buffer = UU.context;
          for (let XU = UU._parent; XU; XU = XU._parent) this.stack.unshift(XU.index);
          this.bufferNode = UU, this.yieldBuf(UU.index)
        }
      }
      yieldNode(UU) {
        return !!UU && (this._tree = UU, this.type = UU.type, this.from = UU.from, this.to = UU.to, !0)
      }
      yieldBuf(UU, XU) {
        this.index = UU;
        let {
          start: zU,
          buffer: cU
        } = this.buffer;
        return this.type = XU || cU.set.types[cU.buffer[UU]], this.from = zU + cU.buffer[UU + 1], this.to = zU + cU.buffer[UU + 2], !0
      }
      yield(UU) {
        return !!UU && (UU instanceof BU ? (this.buffer = null, this.yieldNode(UU)) : (this.buffer = UU.context, this.yieldBuf(UU.index, UU.type)))
      }
      toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
      }
      enterChild(UU, XU, zU) {
        if (!this.buffer) return this.yield(this._tree.nextChild(UU < 0 ? this._tree._tree.children.length - 1 : 0, UU, XU, zU, this.mode));
        let {
          buffer: cU
        } = this.buffer, yU = cU.findChild(this.index + 4, cU.buffer[this.index + 3], UU, XU - this.buffer.start, zU);
        return !(yU < 0) && (this.stack.push(this.index), this.yieldBuf(yU))
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
      enter(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.mode;
        return this.buffer ? !(zU & IU.ExcludeBuffers) && this.enterChild(1, UU, XU) : this.yield(this._tree.enter(UU, XU, zU))
      }
      parent() {
        if (!this.buffer) return this.yieldNode(this.mode & IU.IncludeAnonymous ? this._tree._parent : this._tree.parent);
        if (this.stack.length) return this.yieldBuf(this.stack.pop());
        let UU = this.mode & IU.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        return this.buffer = null, this.yieldNode(UU)
      }
      sibling(UU) {
        if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + UU, UU, 0, 4, this.mode));
        let {
          buffer: XU
        } = this.buffer, zU = this.stack.length - 1;
        if (UU < 0) {
          let UU = zU < 0 ? 0 : this.stack[zU] + 4;
          if (this.index != UU) return this.yieldBuf(XU.findChild(UU, this.index, -1, 0, 4))
        } else {
          let UU = XU.buffer[this.index + 3];
          if (UU < (zU < 0 ? XU.buffer.length : XU.buffer[this.stack[zU] + 3])) return this.yieldBuf(UU)
        }
        return zU < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + UU, UU, 0, 4, this.mode))
      }
      nextSibling() {
        return this.sibling(1)
      }
      prevSibling() {
        return this.sibling(-1)
      }
      atLastNode(UU) {
        let XU, zU, {
          buffer: cU
        } = this;
        if (cU) {
          if (UU > 0) {
            if (this.index < cU.buffer.buffer.length) return !1
          } else
            for (let UU = 0; UU < this.index; UU++)
              if (cU.buffer.buffer[UU + 3] < this.index) return !1;
          ({
            index: XU,
            parent: zU
          } = cU)
        } else({
          index: XU,
          _parent: zU
        } = this._tree);
        for (; zU;
          ({
            index: XU,
            _parent: zU
          } = zU))
          if (XU > -1)
            for (let cU = XU + UU, yU = UU < 0 ? -1 : zU._tree.children.length; cU != yU; cU += UU) {
              let UU = zU._tree.children[cU];
              if (this.mode & IU.IncludeAnonymous || UU instanceof tU || !UU.type.isAnonymous || CU(UU)) return !1
            }
        return !0
      }
      move(UU, XU) {
        if (XU && this.enterChild(UU, 0, 4)) return !0;
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
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        for (;
          (this.from == this.to || (XU < 1 ? this.from >= UU : this.from > UU) || (XU > -1 ? this.to <= UU : this.to < UU)) && this.parent(););
        for (; this.enterChild(1, UU, XU););
        return this
      }
      get node() {
        if (!this.buffer) return this._tree;
        let UU = this.bufferNode,
          XU = null,
          zU = 0;
        if (UU && UU.context == this.buffer) UU: for (let cU = this.index, yU = this.stack.length; yU >= 0;) {
          for (let QU = UU; QU; QU = QU._parent)
            if (QU.index == cU) {
              if (cU == this.index) return QU;
              XU = QU, zU = yU + 1;
              break UU
            } cU = this.stack[--yU]
        }
        for (let cU = zU; cU < this.stack.length; cU++) XU = new WU(this.buffer, XU, this.stack[cU]);
        return this.bufferNode = new WU(this.buffer, XU, this.index)
      }
      get tree() {
        return this.buffer ? null : this._tree._tree
      }
      iterate(UU, XU) {
        for (let zU = 0;;) {
          let cU = !1;
          if (this.type.isAnonymous || !1 !== UU(this)) {
            if (this.firstChild()) {
              zU++;
              continue
            }
            this.type.isAnonymous || (cU = !0)
          }
          for (;;) {
            if (cU && XU && XU(this), cU = this.type.isAnonymous, !zU) return;
            if (this.nextSibling()) break;
            this.parent(), zU--, cU = !0
          }
        }
      }
      matchContext(UU) {
        if (!this.buffer) return RU(this.node.parent, UU);
        let {
          buffer: XU
        } = this.buffer, {
          types: zU
        } = XU.set;
        for (let cU = UU.length - 1, yU = this.stack.length - 1; cU >= 0; yU--) {
          if (yU < 0) return RU(this._tree, UU, cU);
          let QU = zU[XU.buffer[this.stack[yU]]];
          if (!QU.isAnonymous) {
            if (UU[cU] && UU[cU] != QU.name) return !1;
            cU--
          }
        }
        return !0
      }
    }

    function CU(UU) {
      return UU.children.some((UU => UU instanceof tU || !UU.type.isAnonymous || CU(UU)))
    }
    const wU = new WeakMap;

    function qU(UU, XU) {
      if (!UU.isAnonymous || XU instanceof tU || XU.type != UU) return 1;
      let zU = wU.get(XU);
      if (null == zU) {
        zU = 1;
        for (let cU of XU.children) {
          if (cU.type != UU || !(cU instanceof pU)) {
            zU = 1;
            break
          }
          zU += qU(UU, cU)
        }
        wU.set(XU, zU)
      }
      return zU
    }

    function OU(UU, XU, zU, cU, yU, QU, AU, FU, oU) {
      let DU = 0;
      for (let IU = cU; IU < yU; IU++) DU += qU(UU, XU[IU]);
      let EU = Math.ceil(1.5 * DU / 8),
        YU = [],
        NU = [];
      return function XU(zU, cU, yU, AU, FU) {
        for (let DU = yU; DU < AU;) {
          let yU = DU,
            IU = cU[DU],
            pU = qU(UU, zU[DU]);
          for (DU++; DU < AU; DU++) {
            let XU = qU(UU, zU[DU]);
            if (pU + XU >= EU) break;
            pU += XU
          }
          if (DU == yU + 1) {
            if (pU > EU) {
              let UU = zU[yU];
              XU(UU.children, UU.positions, 0, UU.children.length, cU[yU] + FU);
              continue
            }
            YU.push(zU[yU])
          } else {
            let XU = cU[DU - 1] + zU[DU - 1].length - IU;
            YU.push(OU(UU, zU, cU, yU, DU, IU, XU, null, oU))
          }
          NU.push(IU + FU - QU)
        }
      }(XU, zU, cU, yU, 0), (FU || oU)(YU, NU, AU)
    }
    class SU {
      constructor() {
        this.map = new WeakMap
      }
      setBuffer(UU, XU, zU) {
        let cU = this.map.get(UU);
        cU || this.map.set(UU, cU = new Map), cU.set(XU, zU)
      }
      getBuffer(UU, XU) {
        let zU = this.map.get(UU);
        return zU && zU.get(XU)
      }
      set(UU, XU) {
        UU instanceof WU ? this.setBuffer(UU.context.buffer, UU.index, XU) : UU instanceof BU && this.map.set(UU.tree, XU)
      }
      get(UU) {
        return UU instanceof WU ? this.getBuffer(UU.context.buffer, UU.index) : UU instanceof BU ? this.map.get(UU.tree) : void 0
      }
      cursorSet(UU, XU) {
        UU.buffer ? this.setBuffer(UU.buffer.buffer, UU.index, XU) : this.map.set(UU.tree, XU)
      }
      cursorGet(UU) {
        return UU.buffer ? this.getBuffer(UU.buffer.buffer, UU.index) : this.map.get(UU.tree)
      }
    }
    class rU {
      constructor(UU, XU, zU, cU) {
        let yU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          QU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.from = UU, this.to = XU, this.tree = zU, this.offset = cU, this.open = (yU ? 1 : 0) | (QU ? 2 : 0)
      }
      get openStart() {
        return (1 & this.open) > 0
      }
      get openEnd() {
        return (2 & this.open) > 0
      }
      static addTree(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          cU = [new rU(0, UU.length, UU, 0, !1, zU)];
        for (let yU of XU) yU.to > UU.length && cU.push(yU);
        return cU
      }
      static applyChanges(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
        if (!XU.length) return UU;
        let cU = [],
          yU = 1,
          QU = UU.length ? UU[0] : null;
        for (let AU = 0, FU = 0, oU = 0;; AU++) {
          let DU = AU < XU.length ? XU[AU] : null,
            EU = DU ? DU.fromA : 1e9;
          if (EU - FU >= zU)
            for (; QU && QU.from < EU;) {
              let XU = QU;
              if (FU >= XU.from || EU <= XU.to || oU) {
                let UU = Math.max(XU.from, FU) - oU,
                  zU = Math.min(XU.to, EU) - oU;
                XU = UU >= zU ? null : new rU(UU, zU, XU.tree, XU.offset + oU, AU > 0, !!DU)
              }
              if (XU && cU.push(XU), QU.to > EU) break;
              QU = yU < UU.length ? UU[yU++] : null
            }
          if (!DU) break;
          FU = DU.toA, oU = DU.toA - DU.toB
        }
        return cU
      }
    }
    class uU {
      startParse(UU, XU, zU) {
        return "string" == typeof UU && (UU = new fU(UU)), zU = zU ? zU.length ? zU.map((UU => new QU(UU.from, UU.to))) : [new QU(0, 0)] : [new QU(0, UU.length)], this.createParse(UU, XU || [], zU)
      }
      parse(UU, XU, zU) {
        let cU = this.startParse(UU, XU, zU);
        for (;;) {
          let UU = cU.advance();
          if (UU) return UU
        }
      }
    }
    class fU {
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
      read(UU, XU) {
        return this.string.slice(UU, XU)
      }
    }
    new AU({
      perNode: !0
    })
  },
  44040: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => NU,
      e: () => oU,
      i: () => YU,
      k: () => wU
    });
    var cU = zU(44034);
    let yU = 0;
    class QU {
      constructor(UU, XU, zU, cU) {
        this.name = UU, this.set = XU, this.base = zU, this.modified = cU, this.id = yU++
      }
      toString() {
        let {
          name: UU
        } = this;
        for (let XU of this.modified) XU.name && (UU = `${XU.name}(${UU})`);
        return UU
      }
      static define(UU, XU) {
        let zU = "string" == typeof UU ? UU : "?";
        if (UU instanceof QU && (XU = UU), null === XU || void 0 === XU ? void 0 : XU.base) throw new Error("Can not derive from a modified tag");
        let cU = new QU(zU, [], null, []);
        if (cU.set.push(cU), XU)
          for (let yU of XU.set) cU.set.push(yU);
        return cU
      }
      static defineModifier(UU) {
        let XU = new FU(UU);
        return UU => UU.modified.indexOf(XU) > -1 ? UU : FU.get(UU.base || UU, UU.modified.concat(XU).sort(((UU, XU) => UU.id - XU.id)))
      }
    }
    let AU = 0;
    class FU {
      constructor(UU) {
        this.name = UU, this.instances = [], this.id = AU++
      }
      static get(UU, XU) {
        if (!XU.length) return UU;
        let zU = XU[0].instances.find((zU => {
          return zU.base == UU && (cU = XU, yU = zU.modified, cU.length == yU.length && cU.every(((UU, XU) => UU == yU[XU])));
          var cU, yU
        }));
        if (zU) return zU;
        let cU = [],
          yU = new QU(UU.name, cU, UU, XU);
        for (let QU of XU) QU.instances.push(yU);
        let AU = function(UU) {
          let XU = [
            []
          ];
          for (let zU = 0; zU < UU.length; zU++)
            for (let cU = 0, yU = XU.length; cU < yU; cU++) XU.push(XU[cU].concat(UU[zU]));
          return XU.sort(((UU, XU) => XU.length - UU.length))
        }(XU);
        for (let QU of UU.set)
          if (!QU.modified.length)
            for (let UU of AU) cU.push(FU.get(QU, UU));
        return yU
      }
    }

    function oU(UU) {
      let XU = Object.create(null);
      for (let zU in UU) {
        let cU = UU[zU];
        Array.isArray(cU) || (cU = [cU]);
        for (let UU of zU.split(" "))
          if (UU) {
            let zU = [],
              yU = 2,
              QU = UU;
            for (let XU = 0;;) {
              if ("..." == QU && XU > 0 && XU + 3 == UU.length) {
                yU = 1;
                break
              }
              let cU = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(QU);
              if (!cU) throw new RangeError("Invalid path: " + UU);
              if (zU.push("*" == cU[0] ? "" : '"' == cU[0][0] ? JSON.parse(cU[0]) : cU[0]), XU += cU[0].length, XU == UU.length) break;
              let AU = UU[XU++];
              if (XU == UU.length && "!" == AU) {
                yU = 0;
                break
              }
              if ("/" != AU) throw new RangeError("Invalid path: " + UU);
              QU = UU.slice(XU)
            }
            let AU = zU.length - 1,
              FU = zU[AU];
            if (!FU) throw new RangeError("Invalid path: " + UU);
            let oU = new EU(cU, yU, AU > 0 ? zU.slice(0, AU) : null);
            XU[FU] = oU.sort(XU[FU])
          }
      }
      return DU.add(XU)
    }
    const DU = new cU.j({
      combine(UU, XU) {
        let zU, cU, yU;
        for (; UU || XU;) {
          if (!UU || XU && UU.depth >= XU.depth ? (yU = XU, XU = XU.next) : (yU = UU, UU = UU.next), zU && zU.mode == yU.mode && !yU.context && !zU.context) continue;
          let QU = new EU(yU.tags, yU.mode, yU.context);
          zU ? zU.next = QU : cU = QU, zU = QU
        }
        return cU
      }
    });
    class EU {
      constructor(UU, XU, zU, cU) {
        this.tags = UU, this.mode = XU, this.context = zU, this.next = cU
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

    function YU(UU, XU) {
      let zU = Object.create(null);
      for (let QU of UU)
        if (Array.isArray(QU.tag))
          for (let UU of QU.tag) zU[UU.id] = QU.class;
        else zU[QU.tag.id] = QU.class;
      let {
        scope: cU,
        all: yU = null
      } = XU || {};
      return {
        style: UU => {
          let XU = yU;
          for (let cU of UU)
            for (let UU of cU.set) {
              let cU = zU[UU.id];
              if (cU) {
                XU = XU ? XU + " " + cU : cU;
                break
              }
            }
          return XU
        },
        scope: cU
      }
    }

    function NU(UU, XU, zU) {
      let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : UU.length,
        QU = new IU(cU, Array.isArray(XU) ? XU : [XU], zU);
      QU.highlightRange(UU.cursor(), cU, yU, "", QU.highlighters), QU.flush(yU)
    }
    EU.empty = new EU([], 2, null);
    class IU {
      constructor(UU, XU, zU) {
        this.at = UU, this.highlighters = XU, this.span = zU, this.class = ""
      }
      startSpan(UU, XU) {
        XU != this.class && (this.flush(UU), UU > this.at && (this.at = UU), this.class = XU)
      }
      flush(UU) {
        UU > this.at && this.class && this.span(this.at, UU, this.class)
      }
      highlightRange(UU, XU, zU, yU, QU) {
        let {
          type: AU,
          from: FU,
          to: oU
        } = UU;
        if (FU >= zU || oU <= XU) return;
        AU.isTop && (QU = this.highlighters.filter((UU => !UU.scope || UU.scope(AU))));
        let YU = yU,
          NU = function(UU) {
            let XU = UU.type.prop(DU);
            for (; XU && XU.context && !UU.matchContext(XU.context);) XU = XU.next;
            return XU || null
          }(UU) || EU.empty,
          IU = function(UU, XU) {
            let zU = null;
            for (let cU of UU) {
              let UU = cU.style(XU);
              UU && (zU = zU ? zU + " " + UU : UU)
            }
            return zU
          }(QU, NU.tags);
        if (IU && (YU && (YU += " "), YU += IU, 1 == NU.mode && (yU += (yU ? " " : "") + IU)), this.startSpan(Math.max(XU, FU), YU), NU.opaque) return;
        let pU = UU.tree && UU.tree.prop(cU.j.mounted);
        if (pU && pU.overlay) {
          let cU = UU.node.enter(pU.overlay[0].from + FU, 1),
            AU = this.highlighters.filter((UU => !UU.scope || UU.scope(pU.tree.type))),
            DU = UU.firstChild();
          for (let EU = 0, NU = FU;; EU++) {
            let IU = EU < pU.overlay.length ? pU.overlay[EU] : null,
              aU = IU ? IU.from + FU : oU,
              tU = Math.max(XU, NU),
              gU = Math.min(zU, aU);
            if (tU < gU && DU)
              for (; UU.from < gU && (this.highlightRange(UU, tU, gU, yU, QU), this.startSpan(Math.min(gU, UU.to), YU), !(UU.to >= aU) && UU.nextSibling()););
            if (!IU || aU > zU) break;
            NU = IU.to + FU, NU > XU && (this.highlightRange(cU.cursor(), Math.max(XU, IU.from + FU), Math.min(zU, NU), "", AU), this.startSpan(Math.min(zU, NU), YU))
          }
          DU && UU.parent()
        } else if (UU.firstChild()) {
          pU && (yU = "");
          do {
            if (!(UU.to <= XU)) {
              if (UU.from >= zU) break;
              this.highlightRange(UU, XU, zU, yU, QU), this.startSpan(Math.min(zU, UU.to), YU)
            }
          } while (UU.nextSibling());
          UU.parent()
        }
      }
    }
    const pU = QU.define,
      aU = pU(),
      tU = pU(),
      gU = pU(tU),
      kU = pU(tU),
      GU = pU(),
      BU = pU(GU),
      ZU = pU(GU),
      RU = pU(),
      PU = pU(RU),
      WU = pU(),
      dU = pU(),
      LU = pU(),
      eU = pU(LU),
      CU = pU(),
      wU = {
        comment: aU,
        lineComment: pU(aU),
        blockComment: pU(aU),
        docComment: pU(aU),
        name: tU,
        variableName: pU(tU),
        typeName: gU,
        tagName: pU(gU),
        propertyName: kU,
        attributeName: pU(kU),
        className: pU(tU),
        labelName: pU(tU),
        namespace: pU(tU),
        macroName: pU(tU),
        literal: GU,
        string: BU,
        docString: pU(BU),
        character: pU(BU),
        attributeValue: pU(BU),
        number: ZU,
        integer: pU(ZU),
        float: pU(ZU),
        bool: pU(GU),
        regexp: pU(GU),
        escape: pU(GU),
        color: pU(GU),
        url: pU(GU),
        keyword: WU,
        self: pU(WU),
        null: pU(WU),
        atom: pU(WU),
        unit: pU(WU),
        modifier: pU(WU),
        operatorKeyword: pU(WU),
        controlKeyword: pU(WU),
        definitionKeyword: pU(WU),
        moduleKeyword: pU(WU),
        operator: dU,
        derefOperator: pU(dU),
        arithmeticOperator: pU(dU),
        logicOperator: pU(dU),
        bitwiseOperator: pU(dU),
        compareOperator: pU(dU),
        updateOperator: pU(dU),
        definitionOperator: pU(dU),
        typeOperator: pU(dU),
        controlOperator: pU(dU),
        punctuation: LU,
        separator: pU(LU),
        bracket: eU,
        angleBracket: pU(eU),
        squareBracket: pU(eU),
        paren: pU(eU),
        brace: pU(eU),
        content: RU,
        heading: PU,
        heading1: pU(PU),
        heading2: pU(PU),
        heading3: pU(PU),
        heading4: pU(PU),
        heading5: pU(PU),
        heading6: pU(PU),
        contentSeparator: pU(RU),
        list: pU(RU),
        quote: pU(RU),
        emphasis: pU(RU),
        strong: pU(RU),
        link: pU(RU),
        monospace: pU(RU),
        strikethrough: pU(RU),
        inserted: pU(),
        deleted: pU(),
        changed: pU(),
        invalid: pU(),
        meta: CU,
        documentMeta: pU(CU),
        annotation: pU(CU),
        processingInstruction: pU(CU),
        definition: QU.defineModifier("definition"),
        constant: QU.defineModifier("constant"),
        function: QU.defineModifier("function"),
        standard: QU.defineModifier("standard"),
        local: QU.defineModifier("local"),
        special: QU.defineModifier("special")
      };
    for (let qU in wU) {
      let UU = wU[qU];
      UU instanceof QU && (UU.name = qU)
    }
    YU([{
      tag: wU.link,
      class: "tok-link"
    }, {
      tag: wU.heading,
      class: "tok-heading"
    }, {
      tag: wU.emphasis,
      class: "tok-emphasis"
    }, {
      tag: wU.strong,
      class: "tok-strong"
    }, {
      tag: wU.keyword,
      class: "tok-keyword"
    }, {
      tag: wU.atom,
      class: "tok-atom"
    }, {
      tag: wU.bool,
      class: "tok-bool"
    }, {
      tag: wU.url,
      class: "tok-url"
    }, {
      tag: wU.labelName,
      class: "tok-labelName"
    }, {
      tag: wU.inserted,
      class: "tok-inserted"
    }, {
      tag: wU.deleted,
      class: "tok-deleted"
    }, {
      tag: wU.literal,
      class: "tok-literal"
    }, {
      tag: wU.string,
      class: "tok-string"
    }, {
      tag: wU.number,
      class: "tok-number"
    }, {
      tag: [wU.regexp, wU.escape, wU.special(wU.string)],
      class: "tok-string2"
    }, {
      tag: wU.variableName,
      class: "tok-variableName"
    }, {
      tag: wU.local(wU.variableName),
      class: "tok-variableName tok-local"
    }, {
      tag: wU.definition(wU.variableName),
      class: "tok-variableName tok-definition"
    }, {
      tag: wU.special(wU.variableName),
      class: "tok-variableName2"
    }, {
      tag: wU.definition(wU.propertyName),
      class: "tok-propertyName tok-definition"
    }, {
      tag: wU.typeName,
      class: "tok-typeName"
    }, {
      tag: wU.namespace,
      class: "tok-namespace"
    }, {
      tag: wU.className,
      class: "tok-className"
    }, {
      tag: wU.macroName,
      class: "tok-macroName"
    }, {
      tag: wU.propertyName,
      class: "tok-propertyName"
    }, {
      tag: wU.operator,
      class: "tok-operator"
    }, {
      tag: wU.comment,
      class: "tok-comment"
    }, {
      tag: wU.meta,
      class: "tok-meta"
    }, {
      tag: wU.invalid,
      class: "tok-invalid"
    }, {
      tag: wU.punctuation,
      class: "tok-punctuation"
    }])
  },
  44058: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => FU.h,
      e: () => AU.w,
      g: () => AU.H,
      j: () => AU.L,
      m: () => FU.n,
      n: () => Pz,
      o: () => FU.P,
      p: () => FU.gb
    });
    var cU = zU(1434),
      yU = zU(1429),
      QU = zU(61),
      AU = zU(44009),
      FU = zU(44014),
      oU = zU(44029),
      DU = zU(44034);

    function EU(UU, XU) {
      return zU => {
        let {
          state: cU,
          dispatch: yU
        } = zU;
        if (cU.readOnly) return !1;
        let QU = UU(XU, cU);
        return !!QU && (yU(cU.update(QU)), !0)
      }
    }
    const YU = EU(gU, 0),
      NU = EU(tU, 0),
      IU = EU(((UU, XU) => tU(UU, XU, function(UU) {
        let XU = [];
        for (let zU of UU.selection.Qt) {
          let cU = UU.doc.lineAt(zU.from),
            yU = zU.to <= cU.to ? cU : UU.doc.lineAt(zU.to);
          yU.from > cU.from && yU.from == zU.to && (yU = zU.to == cU.to + 1 ? cU : UU.doc.lineAt(zU.to - 1));
          let QU = XU.length - 1;
          QU >= 0 && XU[QU].to > cU.from ? XU[QU].to = yU.to : XU.push({
            from: cU.from + /^\s*/.exec(cU.text)[0].length,
            to: yU.to
          })
        }
        return XU
      }(XU))), 0);

    function pU(UU, XU) {
      let zU = UU.languageDataAt("commentTokens", XU, 1);
      return zU.length ? zU[0] : {}
    }
    const aU = 50;

    function tU(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : XU.selection.Qt,
        cU = zU.map((UU => pU(XU, UU.from).block));
      if (!cU.every((UU => UU))) return null;
      let yU = zU.map(((UU, zU) => function(UU, XU, zU, cU) {
        let yU, QU, {
            open: AU,
            close: FU
          } = XU,
          oU = UU.sliceDoc(zU - aU, zU),
          DU = UU.sliceDoc(cU, cU + aU),
          EU = /\s*$/.exec(oU)[0].length,
          YU = /^\s*/.exec(DU)[0].length,
          NU = oU.length - EU;
        if (oU.slice(NU - AU.length, NU) == AU && DU.slice(YU, YU + FU.length) == FU) return {
          open: {
            pos: zU - EU,
            margin: EU && 1
          },
          close: {
            pos: cU + YU,
            margin: YU && 1
          }
        };
        cU - zU <= 2 * aU ? yU = QU = UU.sliceDoc(zU, cU) : (yU = UU.sliceDoc(zU, zU + aU), QU = UU.sliceDoc(cU - aU, cU));
        let IU = /^\s*/.exec(yU)[0].length,
          pU = /\s*$/.exec(QU)[0].length,
          tU = QU.length - pU - FU.length;
        return yU.slice(IU, IU + AU.length) == AU && QU.slice(tU, tU + FU.length) == FU ? {
          open: {
            pos: zU + IU + AU.length,
            margin: /\s/.test(yU.charAt(IU + AU.length)) ? 1 : 0
          },
          close: {
            pos: cU - pU - FU.length,
            margin: /\s/.test(QU.charAt(tU - 1)) ? 1 : 0
          }
        } : null
      }(XU, cU[zU], UU.from, UU.to)));
      if (2 != UU && !yU.every((UU => UU))) return {
        changes: XU.changes(zU.map(((UU, XU) => yU[XU] ? [] : [{
          from: UU.from,
          insert: cU[XU].open + " "
        }, {
          from: UU.to,
          insert: " " + cU[XU].close
        }])))
      };
      if (1 != UU && yU.some((UU => UU))) {
        let UU = [];
        for (let XU, zU = 0; zU < yU.length; zU++)
          if (XU = yU[zU]) {
            let yU = cU[zU],
              {
                open: QU,
                close: AU
              } = XU;
            UU.push({
              from: QU.pos - yU.open.length,
              to: QU.pos + QU.margin
            }, {
              from: AU.pos - AU.margin,
              to: AU.pos + yU.close.length
            })
          } return {
          changes: UU
        }
      }
      return null
    }

    function gU(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : XU.selection.Qt,
        cU = [],
        yU = -1;
      UU: for (let {
          from: QU,
          to: AU
        }
        of zU) {
        let UU, zU = cU.length,
          FU = 1e9;
        for (let oU = QU; oU <= AU;) {
          let zU = XU.doc.lineAt(oU);
          if (void 0 == UU && (UU = pU(XU, zU.from).line, !UU)) continue UU;
          if (zU.from > yU && (QU == AU || AU > zU.from)) {
            yU = zU.from;
            let XU = /^\s*/.exec(zU.text)[0].length,
              QU = XU == zU.length,
              AU = zU.text.slice(XU, XU + UU.length) == UU ? XU : -1;
            XU < zU.text.length && XU < FU && (FU = XU), cU.push({
              line: zU,
              comment: AU,
              token: UU,
              indent: XU,
              empty: QU,
              single: !1
            })
          }
          oU = zU.to + 1
        }
        if (FU < 1e9)
          for (let XU = zU; XU < cU.length; XU++) cU[XU].indent < cU[XU].line.text.length && (cU[XU].indent = FU);
        cU.length == zU + 1 && (cU[zU].single = !0)
      }
      if (2 != UU && cU.some((UU => UU.comment < 0 && (!UU.empty || UU.single)))) {
        let UU = [];
        for (let {
            line: XU,
            token: yU,
            indent: QU,
            empty: AU,
            single: FU
          }
          of cU) !FU && AU || UU.push({
          from: XU.from + QU,
          insert: yU + " "
        });
        let zU = XU.changes(UU);
        return {
          changes: zU,
          selection: XU.selection.map(zU, 1)
        }
      }
      if (1 != UU && cU.some((UU => UU.comment >= 0))) {
        let UU = [];
        for (let {
            line: XU,
            comment: zU,
            token: yU
          }
          of cU)
          if (zU >= 0) {
            let cU = XU.from + zU,
              QU = cU + yU.length;
            " " == XU.text[QU - XU.from] && QU++, UU.push({
              from: cU,
              to: QU
            })
          } return {
          changes: UU
        }
      }
      return null
    }
    const kU = AU.d.define(),
      GU = AU.d.define(),
      BU = AU.r.define(),
      ZU = AU.r.define({
        combine: UU => (0, AU.V)(UU, {
          minDepth: 100,
          newGroupDelay: 500,
          joinToEvent: (UU, XU) => XU
        }, {
          minDepth: Math.max,
          newGroupDelay: Math.min,
          joinToEvent: (UU, XU) => (zU, cU) => UU(zU, cU) || XU(zU, cU)
        })
      }),
      RU = AU.L.define({
        create: () => MU.empty,
        update(UU, XU) {
          let zU = XU.state.facet(ZU),
            cU = XU.annotation(kU);
          if (cU) {
            let yU = CU.fromTransaction(XU, cU.selection),
              QU = cU.side,
              AU = 0 == QU ? UU.undone : UU.done;
            return AU = yU ? wU(AU, AU.length, zU.minDepth, yU) : rU(AU, XU.startState.selection), new MU(0 == QU ? cU.rest : AU, 0 == QU ? AU : cU.rest)
          }
          let yU = XU.annotation(GU);
          if ("full" != yU && "before" != yU || (UU = UU.isolate()), !1 === XU.annotation(AU.P.addToHistory)) return XU.changes.empty ? UU : UU.addMapping(XU.changes.desc);
          let QU = CU.fromTransaction(XU),
            FU = XU.annotation(AU.P.time),
            oU = XU.annotation(AU.P.userEvent);
          return QU ? UU = UU.addChanges(QU, FU, oU, zU, XU) : XU.selection && (UU = UU.addSelection(XU.startState.selection, FU, oU, zU.newGroupDelay)), "full" != yU && "after" != yU || (UU = UU.isolate()), UU
        },
        toJSON: UU => ({
          done: UU.done.map((UU => UU.toJSON())),
          undone: UU.undone.map((UU => UU.toJSON()))
        }),
        fromJSON: UU => new MU(UU.done.map(CU.fromJSON), UU.undone.map(CU.fromJSON))
      });

    function PU(UU, XU) {
      return function(zU) {
        let {
          state: cU,
          dispatch: yU
        } = zU;
        if (!XU && cU.readOnly) return !1;
        let QU = cU.field(RU, !1);
        if (!QU) return !1;
        let AU = QU.pop(UU, cU, XU);
        return !!AU && (yU(AU), !0)
      }
    }
    const WU = PU(0, !1),
      dU = PU(1, !1),
      LU = PU(0, !0),
      eU = PU(1, !0);
    class CU {
      constructor(UU, XU, zU, cU, yU) {
        this.changes = UU, this.effects = XU, this.mapped = zU, this.startSelection = cU, this.selectionsAfter = yU
      }
      setSelAfter(UU) {
        return new CU(this.changes, this.effects, this.mapped, this.startSelection, UU)
      }
      toJSON() {
        var UU, XU, zU;
        return {
          changes: null === (UU = this.changes) || void 0 === UU ? void 0 : UU.toJSON(),
          mapped: null === (XU = this.mapped) || void 0 === XU ? void 0 : XU.toJSON(),
          startSelection: null === (zU = this.startSelection) || void 0 === zU ? void 0 : zU.toJSON(),
          selectionsAfter: this.selectionsAfter.map((UU => UU.toJSON()))
        }
      }
      static fromJSON(UU) {
        return new CU(UU.changes && AU.ChangeSet.fromJSON(UU.changes), [], UU.mapped && AU.h.fromJSON(UU.mapped), UU.startSelection && AU.k.fromJSON(UU.startSelection), UU.selectionsAfter.map(AU.k.fromJSON))
      }
      static fromTransaction(UU, XU) {
        let zU = OU;
        for (let cU of UU.startState.facet(BU)) {
          let XU = cU(UU);
          XU.length && (zU = zU.concat(XU))
        }
        return !zU.length && UU.changes.empty ? null : new CU(UU.changes.invert(UU.startState.doc), zU, void 0, XU || UU.startState.selection, OU)
      }
      static selection(UU) {
        return new CU(void 0, OU, void 0, void 0, UU)
      }
    }

    function wU(UU, XU, zU, cU) {
      let yU = XU + 1 > zU + 20 ? XU - zU - 1 : 0,
        QU = UU.slice(yU, XU);
      return QU.push(cU), QU
    }

    function qU(UU, XU) {
      return UU.length ? XU.length ? UU.concat(XU) : UU : XU
    }
    const OU = [],
      SU = 200;

    function rU(UU, XU) {
      if (UU.length) {
        let zU = UU[UU.length - 1],
          cU = zU.selectionsAfter.slice(Math.max(0, zU.selectionsAfter.length - SU));
        return cU.length && cU[cU.length - 1].eq(XU) ? UU : (cU.push(XU), wU(UU, UU.length - 1, 1e9, zU.setSelAfter(cU)))
      }
      return [CU.selection([XU])]
    }

    function uU(UU) {
      let XU = UU[UU.length - 1],
        zU = UU.slice();
      return zU[UU.length - 1] = XU.setSelAfter(XU.selectionsAfter.slice(0, XU.selectionsAfter.length - 1)), zU
    }

    function fU(UU, XU) {
      if (!UU.length) return UU;
      let zU = UU.length,
        cU = OU;
      for (; zU;) {
        let yU = iU(UU[zU - 1], XU, cU);
        if (yU.changes && !yU.changes.empty || yU.effects.length) {
          let XU = UU.slice(0, zU);
          return XU[zU - 1] = yU, XU
        }
        XU = yU.mapped, zU--, cU = yU.selectionsAfter
      }
      return cU.length ? [CU.selection(cU)] : OU
    }

    function iU(UU, XU, zU) {
      let cU = qU(UU.selectionsAfter.length ? UU.selectionsAfter.map((UU => UU.map(XU))) : OU, zU);
      if (!UU.changes) return CU.selection(cU);
      let yU = UU.changes.map(XU),
        QU = XU.mapDesc(UU.changes, !0),
        FU = UU.mapped ? UU.mapped.composeDesc(QU) : QU;
      return new CU(yU, AU.H.mapEffects(UU.effects, XU), FU, UU.startSelection.map(QU), cU)
    }
    const HU = /^(input\.type|delete)($|\.)/;
    class MU {
      constructor(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        this.done = UU, this.undone = XU, this.prevTime = zU, this.prevUserEvent = cU
      }
      isolate() {
        return this.prevTime ? new MU(this.done, this.undone) : this
      }
      addChanges(UU, XU, zU, cU, yU) {
        let QU = this.done,
          FU = QU[QU.length - 1];
        return QU = FU && FU.changes && !FU.changes.empty && UU.changes && (!zU || HU.test(zU)) && (!FU.selectionsAfter.length && XU - this.prevTime < cU.newGroupDelay && cU.joinToEvent(yU, function(UU, XU) {
          let zU = [],
            cU = !1;
          return UU.iterChangedRanges(((UU, XU) => zU.push(UU, XU))), XU.iterChangedRanges(((UU, XU, yU, QU) => {
            for (let AU = 0; AU < zU.length;) {
              let UU = zU[AU++],
                XU = zU[AU++];
              QU >= UU && yU <= XU && (cU = !0)
            }
          })), cU
        }(FU.changes, UU.changes)) || "input.type.compose" == zU) ? wU(QU, QU.length - 1, cU.minDepth, new CU(UU.changes.compose(FU.changes), qU(AU.H.mapEffects(UU.effects, FU.changes), FU.effects), FU.mapped, FU.startSelection, OU)) : wU(QU, QU.length, cU.minDepth, UU), new MU(QU, OU, XU, zU)
      }
      addSelection(UU, XU, zU, cU) {
        let yU = this.done.length ? this.done[this.done.length - 1].selectionsAfter : OU;
        return yU.length > 0 && XU - this.prevTime < cU && zU == this.prevUserEvent && zU && /^select($|\.)/.test(zU) && (QU = yU[yU.length - 1], AU = UU, QU.Qt.length == AU.Qt.length && 0 === QU.Qt.filter(((UU, XU) => UU.empty != AU.Qt[XU].empty)).length) ? this : new MU(rU(this.done, UU), this.undone, XU, zU);
        var QU, AU
      }
      addMapping(UU) {
        return new MU(fU(this.done, UU), fU(this.undone, UU), this.prevTime, this.prevUserEvent)
      }
      pop(UU, XU, zU) {
        let cU = 0 == UU ? this.done : this.undone;
        if (0 == cU.length) return null;
        let yU = cU[cU.length - 1],
          QU = yU.selectionsAfter[0] || (yU.startSelection ? yU.startSelection.map(yU.changes.invertedDesc, 1) : XU.selection);
        if (zU && yU.selectionsAfter.length) return XU.update({
          selection: yU.selectionsAfter[yU.selectionsAfter.length - 1],
          annotations: kU.of({
            side: UU,
            rest: uU(cU),
            selection: QU
          }),
          userEvent: 0 == UU ? "select.undo" : "select.redo",
          scrollIntoView: !0
        });
        if (yU.changes) {
          let zU = 1 == cU.length ? OU : cU.slice(0, cU.length - 1);
          return yU.mapped && (zU = fU(zU, yU.mapped)), XU.update({
            changes: yU.changes,
            selection: yU.startSelection,
            effects: yU.effects,
            annotations: kU.of({
              side: UU,
              rest: zU,
              selection: QU
            }),
            filter: !1,
            userEvent: 0 == UU ? "undo" : "redo",
            scrollIntoView: !0
          })
        }
        return null
      }
    }
    MU.empty = new MU(OU, OU);
    const vU = [{
      key: "Mod-z",
      run: WU,
      preventDefault: !0
    }, {
      key: "Mod-y",
      mac: "Mod-Shift-z",
      run: dU,
      preventDefault: !0
    }, {
      linux: "Ctrl-Shift-z",
      run: dU,
      preventDefault: !0
    }, {
      key: "Mod-u",
      run: LU,
      preventDefault: !0
    }, {
      key: "Alt-u",
      mac: "Mod-Shift-u",
      run: eU,
      preventDefault: !0
    }];

    function VU(UU, XU) {
      return AU.k.create(UU.Qt.map(XU), UU.mainIndex)
    }

    function sU(UU, XU) {
      return UU.update({
        selection: XU,
        scrollIntoView: !0,
        userEvent: "select"
      })
    }

    function nU(UU, XU) {
      let {
        state: zU,
        dispatch: cU
      } = UU, yU = VU(zU.selection, XU);
      return !yU.eq(zU.selection, !0) && (cU(sU(zU, yU)), !0)
    }

    function mU(UU, XU) {
      return AU.k.cursor(XU ? UU.to : UU.from)
    }

    function lU(UU, XU) {
      return nU(UU, (zU => zU.empty ? UU.moveByChar(zU, XU) : mU(zU, XU)))
    }

    function xU(UU) {
      return UU.textDirectionAt(UU.state.selection.main.head) == FU.e.LTR
    }
    const JU = UU => lU(UU, !xU(UU)),
      jU = UU => lU(UU, xU(UU));

    function KU(UU, XU) {
      return nU(UU, (zU => zU.empty ? UU.moveByGroup(zU, XU) : mU(zU, XU)))
    }
    "undefined" != typeof Intl && Intl.Segmenter;

    function bU(UU, XU, zU) {
      if (XU.type.prop(zU)) return !0;
      let cU = XU.to - XU.from;
      return cU && (cU > 2 || /[^\s,.;:]/.test(UU.sliceDoc(XU.from, XU.to))) || XU.firstChild
    }

    function TU(UU, XU, zU) {
      let cU, yU, QU = (0, oU.hb)(UU).resolveInner(XU.head),
        FU = zU ? DU.j.closedBy : DU.j.openedBy;
      for (let AU = XU.head;;) {
        let XU = zU ? QU.childAfter(AU) : QU.childBefore(AU);
        if (!XU) break;
        bU(UU, XU, FU) ? QU = XU : AU = zU ? XU.to : XU.from
      }
      return yU = QU.type.prop(FU) && (cU = zU ? (0, oU.X)(UU, QU.from, 1) : (0, oU.X)(UU, QU.to, -1)) && cU.matched ? zU ? cU.end.to : cU.end.from : zU ? QU.to : QU.from, AU.k.cursor(yU, zU ? -1 : 1)
    }

    function hU(UU, XU) {
      return nU(UU, (zU => {
        if (!zU.empty) return mU(zU, XU);
        let cU = UU.moveVertically(zU, XU);
        return cU.head != zU.head ? cU : UU.moveToLineBoundary(zU, XU)
      }))
    }
    const UX = UU => hU(UU, !1),
      XX = UU => hU(UU, !0);

    function zX(UU) {
      let XU, zU = UU.scrollDOM.clientHeight < UU.scrollDOM.scrollHeight - 2,
        cU = 0,
        yU = 0;
      if (zU) {
        for (let XU of UU.state.facet(FU.h.scrollMargins)) {
          let zU = XU(UU);
          (null === zU || void 0 === zU ? void 0 : zU.top) && (cU = Math.max(null === zU || void 0 === zU ? void 0 : zU.top, cU)), (null === zU || void 0 === zU ? void 0 : zU.bottom) && (yU = Math.max(null === zU || void 0 === zU ? void 0 : zU.bottom, yU))
        }
        XU = UU.scrollDOM.clientHeight - cU - yU
      } else XU = (UU.dom.ownerDocument.defaultView || window).innerHeight;
      return {
        marginTop: cU,
        marginBottom: yU,
        selfScroll: zU,
        height: Math.max(UU.defaultLineHeight, XU - 5)
      }
    }

    function cX(UU, XU) {
      let zU, cU = zX(UU),
        {
          state: yU
        } = UU,
        QU = VU(yU.selection, (zU => zU.empty ? UU.moveVertically(zU, XU, cU.height) : mU(zU, XU)));
      if (QU.eq(yU.selection)) return !1;
      if (cU.selfScroll) {
        let XU = UU.coordsAtPos(yU.selection.main.head),
          AU = UU.scrollDOM.getBoundingClientRect(),
          oU = AU.top + cU.marginTop,
          DU = AU.bottom - cU.marginBottom;
        XU && XU.top > oU && XU.bottom < DU && (zU = FU.h.scrollIntoView(QU.main.head, {
          y: "start",
          yMargin: XU.top - oU
        }))
      }
      return UU.dispatch(sU(yU, QU), {
        effects: zU
      }), !0
    }
    const yX = UU => cX(UU, !1),
      QX = UU => cX(UU, !0);

    function AX(UU, XU, zU) {
      let cU = UU.lineBlockAt(XU.head),
        yU = UU.moveToLineBoundary(XU, zU);
      if (yU.head == XU.head && yU.head != (zU ? cU.to : cU.from) && (yU = UU.moveToLineBoundary(XU, zU, !1)), !zU && yU.head == cU.from && cU.length) {
        let zU = /^\s*/.exec(UU.state.sliceDoc(cU.from, Math.min(cU.from + 100, cU.to)))[0].length;
        zU && XU.head != cU.from + zU && (yU = AU.k.cursor(cU.from + zU))
      }
      return yU
    }

    function FX(UU, XU, zU) {
      let cU = !1,
        yU = VU(UU.selection, (XU => {
          let yU = (0, oU.X)(UU, XU.head, -1) || (0, oU.X)(UU, XU.head, 1) || XU.head > 0 && (0, oU.X)(UU, XU.head - 1, 1) || XU.head < UU.doc.length && (0, oU.X)(UU, XU.head + 1, -1);
          if (!yU || !yU.end) return XU;
          cU = !0;
          let QU = yU.start.from == XU.head ? yU.end.to : yU.end.from;
          return zU ? AU.k.range(XU.anchor, QU) : AU.k.cursor(QU)
        }));
      return !!cU && (XU(sU(UU, yU)), !0)
    }

    function oX(UU, XU) {
      let zU = VU(UU.state.selection, (UU => {
        let zU = XU(UU);
        return AU.k.range(UU.anchor, zU.head, zU.goalColumn, zU.bidiLevel || void 0, zU.assoc)
      }));
      return !zU.eq(UU.state.selection) && (UU.dispatch(sU(UU.state, zU)), !0)
    }

    function DX(UU, XU) {
      return oX(UU, (zU => UU.moveByChar(zU, XU)))
    }
    const EX = UU => DX(UU, !xU(UU)),
      YX = UU => DX(UU, xU(UU));

    function NX(UU, XU) {
      return oX(UU, (zU => UU.moveByGroup(zU, XU)))
    }

    function IX(UU, XU) {
      return oX(UU, (zU => UU.moveVertically(zU, XU)))
    }
    const pX = UU => IX(UU, !1),
      aX = UU => IX(UU, !0);

    function tX(UU, XU) {
      return oX(UU, (zU => UU.moveVertically(zU, XU, zX(UU).height)))
    }
    const gX = UU => tX(UU, !1),
      kX = UU => tX(UU, !0),
      GX = UU => {
        let {
          state: XU,
          dispatch: zU
        } = UU;
        return zU(sU(XU, {
          anchor: 0
        })), !0
      },
      BX = UU => {
        let {
          state: XU,
          dispatch: zU
        } = UU;
        return zU(sU(XU, {
          anchor: XU.doc.length
        })), !0
      },
      ZX = UU => {
        let {
          state: XU,
          dispatch: zU
        } = UU;
        return zU(sU(XU, {
          anchor: XU.selection.main.anchor,
          head: 0
        })), !0
      },
      RX = UU => {
        let {
          state: XU,
          dispatch: zU
        } = UU;
        return zU(sU(XU, {
          anchor: XU.selection.main.anchor,
          head: XU.doc.length
        })), !0
      };

    function PX(UU, XU) {
      let {
        state: zU
      } = UU, cU = zU.selection, yU = zU.selection.Qt.slice();
      for (let QU of zU.selection.Qt) {
        let cU = zU.doc.lineAt(QU.head);
        if (XU ? cU.to < UU.state.doc.length : cU.from > 0)
          for (let zU = QU;;) {
            let QU = UU.moveVertically(zU, XU);
            if (QU.head < cU.from || QU.head > cU.to) {
              yU.some((UU => UU.head == QU.head)) || yU.push(QU);
              break
            }
            if (QU.head == zU.head) break;
            zU = QU
          }
      }
      return yU.length != cU.Qt.length && (UU.dispatch(sU(zU, AU.k.create(yU, yU.length - 1))), !0)
    }

    function WX(UU, XU) {
      if (UU.state.readOnly) return !1;
      let zU = "delete.selection",
        {
          state: cU
        } = UU,
        yU = cU.changeByRange((cU => {
          let {
            from: yU,
            to: QU
          } = cU;
          if (yU == QU) {
            let AU = XU(cU);
            AU < yU ? (zU = "delete.backward", AU = dX(UU, AU, !1)) : AU > yU && (zU = "delete.forward", AU = dX(UU, AU, !0)), yU = Math.min(yU, AU), QU = Math.max(QU, AU)
          } else yU = dX(UU, yU, !1), QU = dX(UU, QU, !0);
          return yU == QU ? {
            range: cU
          } : {
            changes: {
              from: yU,
              to: QU
            },
            range: AU.k.cursor(yU, yU < cU.head ? -1 : 1)
          }
        }));
      return !yU.changes.empty && (UU.dispatch(cU.update(yU, {
        scrollIntoView: !0,
        userEvent: zU,
        effects: "delete.selection" == zU ? FU.h.announce.of(cU.phrase("Selection deleted")) : void 0
      })), !0)
    }

    function dX(UU, XU, zU) {
      if (UU instanceof FU.h)
        for (let cU of UU.state.facet(FU.h.atomicRanges).map((XU => XU(UU)))) cU.between(XU, XU, ((UU, cU) => {
          UU < XU && cU > XU && (XU = zU ? cU : UU)
        }));
      return XU
    }
    const LX = (UU, XU, zU) => WX(UU, (cU => {
        let yU, QU, FU = cU.from,
          {
            state: DU
          } = UU,
          EU = DU.doc.lineAt(FU);
        if (zU && !XU && FU > EU.from && FU < EU.from + 200 && !/[^ \t]/.test(yU = EU.text.slice(0, FU - EU.from))) {
          if ("\t" == yU[yU.length - 1]) return FU - 1;
          let UU = (0, AU.X)(yU, DU.tabSize) % (0, oU.L)(DU) || (0, oU.L)(DU);
          for (let XU = 0; XU < UU && " " == yU[yU.length - 1 - XU]; XU++) FU--;
          QU = FU
        } else QU = (0, AU._)(EU.text, FU - EU.from, XU, XU) + EU.from, QU == FU && EU.number != (XU ? DU.doc.lines : 1) ? QU += XU ? 1 : -1 : !XU && /[\ufe00-\ufe0f]/.test(EU.text.slice(QU - EU.from, FU - EU.from)) && (QU = (0, AU._)(EU.text, QU - EU.from, !1, !1) + EU.from);
        return QU
      })),
      eX = UU => LX(UU, !1, !0),
      CX = UU => LX(UU, !0, !1),
      wX = (UU, XU) => WX(UU, (zU => {
        let cU = zU.head,
          {
            state: yU
          } = UU,
          QU = yU.doc.lineAt(cU),
          FU = yU.charCategorizer(cU);
        for (let UU = null;;) {
          if (cU == (XU ? QU.to : QU.from)) {
            cU == zU.head && QU.number != (XU ? yU.doc.lines : 1) && (cU += XU ? 1 : -1);
            break
          }
          let oU = (0, AU._)(QU.text, cU - QU.from, XU) + QU.from,
            DU = QU.text.slice(Math.min(cU, oU) - QU.from, Math.max(cU, oU) - QU.from),
            EU = FU(DU);
          if (null != UU && EU != UU) break;
          " " == DU && cU == zU.head || (UU = EU), cU = oU
        }
        return cU
      })),
      qX = UU => wX(UU, !1);

    function OX(UU) {
      let XU = [],
        zU = -1;
      for (let cU of UU.selection.Qt) {
        let yU = UU.doc.lineAt(cU.from),
          QU = UU.doc.lineAt(cU.to);
        if (cU.empty || cU.to != QU.from || (QU = UU.doc.lineAt(cU.to - 1)), zU >= yU.number) {
          let UU = XU[XU.length - 1];
          UU.to = QU.to, UU.Qt.push(cU)
        } else XU.push({
          from: yU.from,
          to: QU.to,
          Qt: [cU]
        });
        zU = QU.number + 1
      }
      return XU
    }

    function SX(UU, XU, zU) {
      if (UU.readOnly) return !1;
      let cU = [],
        yU = [];
      for (let QU of OX(UU)) {
        if (zU ? QU.to == UU.doc.length : 0 == QU.from) continue;
        let XU = UU.doc.lineAt(zU ? QU.to + 1 : QU.from - 1),
          FU = XU.length + 1;
        if (zU) {
          cU.push({
            from: QU.to,
            to: XU.to
          }, {
            from: QU.from,
            insert: XU.text + UU.lineBreak
          });
          for (let XU of QU.Qt) yU.push(AU.k.range(Math.min(UU.doc.length, XU.anchor + FU), Math.min(UU.doc.length, XU.head + FU)))
        } else {
          cU.push({
            from: XU.from,
            to: QU.from
          }, {
            from: QU.to,
            insert: UU.lineBreak + XU.text
          });
          for (let UU of QU.Qt) yU.push(AU.k.range(UU.anchor - FU, UU.head - FU))
        }
      }
      return !!cU.length && (XU(UU.update({
        changes: cU,
        scrollIntoView: !0,
        selection: AU.k.create(yU, UU.selection.mainIndex),
        userEvent: "move.line"
      })), !0)
    }

    function rX(UU, XU, zU) {
      if (UU.readOnly) return !1;
      let cU = [];
      for (let QU of OX(UU)) zU ? cU.push({
        from: QU.from,
        insert: UU.doc.slice(QU.from, QU.to) + UU.lineBreak
      }) : cU.push({
        from: QU.to,
        insert: UU.lineBreak + UU.doc.slice(QU.from, QU.to)
      });
      let yU = UU.changes(cU);
      return XU(UU.update({
        changes: yU,
        selection: UU.selection.map(yU, zU ? 1 : -1),
        scrollIntoView: !0,
        userEvent: "input.copyline"
      })), !0
    }
    const uX = fX(!1);

    function fX(UU) {
      return XU => {
        let {
          state: zU,
          dispatch: cU
        } = XU;
        if (zU.readOnly) return !1;
        let yU = zU.changeByRange((XU => {
          let {
            from: cU,
            to: yU
          } = XU, QU = zU.doc.lineAt(cU), FU = !UU && cU == yU && function(UU, XU) {
            if (/\(\)|\[\]|\{\}/.test(UU.sliceDoc(XU - 1, XU + 1))) return {
              from: XU,
              to: XU
            };
            let zU, cU = (0, oU.hb)(UU).resolveInner(XU),
              yU = cU.childBefore(XU),
              QU = cU.childAfter(XU);
            return yU && QU && yU.to <= XU && QU.from >= XU && (zU = yU.type.prop(DU.j.closedBy)) && zU.indexOf(QU.name) > -1 && UU.doc.lineAt(yU.to).from == UU.doc.lineAt(QU.from).from && !/\S/.test(UU.sliceDoc(yU.to, QU.from)) ? {
              from: yU.to,
              to: QU.from
            } : null
          }(zU, cU);
          UU && (cU = yU = (yU <= QU.to ? QU : zU.doc.lineAt(yU)).to);
          let EU = new oU.f(zU, {
              simulateBreak: cU,
              simulateDoubleBreak: !!FU
            }),
            YU = (0, oU.P)(EU, cU);
          for (null == YU && (YU = (0, AU.X)(/^\s*/.exec(zU.doc.lineAt(cU).text)[0], zU.tabSize)); yU < QU.to && /\s/.test(QU.text[yU - QU.from]);) yU++;
          FU ? ({
            from: cU,
            to: yU
          } = FU) : cU > QU.from && cU < QU.from + 100 && !/\S/.test(QU.text.slice(0, cU)) && (cU = QU.from);
          let NU = ["", (0, oU.T)(zU, YU)];
          return FU && NU.push((0, oU.T)(zU, EU.lineIndent(QU.from, -1))), {
            changes: {
              from: cU,
              to: yU,
              insert: AU.O.of(NU)
            },
            range: AU.k.cursor(cU + 1 + NU[1].length)
          }
        }));
        return cU(zU.update(yU, {
          scrollIntoView: !0,
          userEvent: "input"
        })), !0
      }
    }

    function iX(UU, XU) {
      let zU = -1;
      return UU.changeByRange((cU => {
        let yU = [];
        for (let AU = cU.from; AU <= cU.to;) {
          let QU = UU.doc.lineAt(AU);
          QU.number > zU && (cU.empty || cU.to > QU.from) && (XU(QU, yU, cU), zU = QU.number), AU = QU.to + 1
        }
        let QU = UU.changes(yU);
        return {
          changes: yU,
          range: AU.k.range(QU.mapPos(cU.anchor, 1), QU.mapPos(cU.head, 1))
        }
      }))
    }
    const HX = UU => {
        let {
          state: XU,
          dispatch: zU
        } = UU;
        return !XU.readOnly && (zU(XU.update(iX(XU, ((UU, zU) => {
          zU.push({
            from: UU.from,
            insert: XU.facet(oU.V)
          })
        })), {
          userEvent: "input.indent"
        })), !0)
      },
      MX = UU => {
        let {
          state: XU,
          dispatch: zU
        } = UU;
        return !XU.readOnly && (zU(XU.update(iX(XU, ((UU, zU) => {
          let cU = /^\s*/.exec(UU.text)[0];
          if (!cU) return;
          let yU = (0, AU.X)(cU, XU.tabSize),
            QU = 0,
            FU = (0, oU.T)(XU, Math.max(0, yU - (0, oU.L)(XU)));
          for (; QU < cU.length && QU < FU.length && cU.charCodeAt(QU) == FU.charCodeAt(QU);) QU++;
          zU.push({
            from: UU.from + QU,
            to: UU.from + cU.length,
            insert: FU.slice(QU)
          })
        })), {
          userEvent: "delete.dedent"
        })), !0)
      },
      vX = [{
        key: "Alt-ArrowLeft",
        mac: "Ctrl-ArrowLeft",
        run: UU => nU(UU, (XU => TU(UU.state, XU, !xU(UU)))),
        shift: UU => oX(UU, (XU => TU(UU.state, XU, !xU(UU))))
      }, {
        key: "Alt-ArrowRight",
        mac: "Ctrl-ArrowRight",
        run: UU => nU(UU, (XU => TU(UU.state, XU, xU(UU)))),
        shift: UU => oX(UU, (XU => TU(UU.state, XU, xU(UU))))
      }, {
        key: "Alt-ArrowUp",
        run: UU => {
          let {
            state: XU,
            dispatch: zU
          } = UU;
          return SX(XU, zU, !1)
        }
      }, {
        key: "Shift-Alt-ArrowUp",
        run: UU => {
          let {
            state: XU,
            dispatch: zU
          } = UU;
          return rX(XU, zU, !1)
        }
      }, {
        key: "Alt-ArrowDown",
        run: UU => {
          let {
            state: XU,
            dispatch: zU
          } = UU;
          return SX(XU, zU, !0)
        }
      }, {
        key: "Shift-Alt-ArrowDown",
        run: UU => {
          let {
            state: XU,
            dispatch: zU
          } = UU;
          return rX(XU, zU, !0)
        }
      }, {
        key: "Mod-Alt-ArrowUp",
        run: UU => PX(UU, !1)
      }, {
        key: "Mod-Alt-ArrowDown",
        run: UU => PX(UU, !0)
      }, {
        key: "Escape",
        run: UU => {
          let {
            state: XU,
            dispatch: zU
          } = UU, cU = XU.selection, yU = null;
          return cU.Qt.length > 1 ? yU = AU.k.create([cU.main]) : cU.main.empty || (yU = AU.k.create([AU.k.cursor(cU.main.head)])), !!yU && (zU(sU(XU, yU)), !0)
        }
      }, {
        key: "Mod-Enter",
        run: fX(!0)
      }, {
        key: "Alt-l",
        mac: "Ctrl-l",
        run: UU => {
          let {
            state: XU,
            dispatch: zU
          } = UU, cU = OX(XU).map((UU => {
            let {
              from: zU,
              to: cU
            } = UU;
            return AU.k.range(zU, Math.min(cU + 1, XU.doc.length))
          }));
          return zU(XU.update({
            selection: AU.k.create(cU),
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Mod-i",
        run: UU => {
          let {
            state: XU,
            dispatch: zU
          } = UU, cU = VU(XU.selection, (UU => {
            let zU = (0, oU.hb)(XU),
              cU = zU.resolveStack(UU.from, 1);
            if (UU.empty) {
              let XU = zU.resolveStack(UU.from, -1);
              XU.node.from >= cU.node.from && XU.node.to <= cU.node.to && (cU = XU)
            }
            for (let XU = cU; XU; XU = XU.next) {
              let {
                node: zU
              } = XU;
              if ((zU.from < UU.from && zU.to >= UU.to || zU.to > UU.to && zU.from <= UU.from) && XU.next) return AU.k.range(zU.to, zU.from)
            }
            return UU
          }));
          return !cU.eq(XU.selection) && (zU(sU(XU, cU)), !0)
        },
        preventDefault: !0
      }, {
        key: "Mod-[",
        run: MX
      }, {
        key: "Mod-]",
        run: HX
      }, {
        key: "Mod-Alt-\\",
        run: UU => {
          let {
            state: XU,
            dispatch: zU
          } = UU;
          if (XU.readOnly) return !1;
          let cU = Object.create(null),
            yU = new oU.f(XU, {
              overrideIndentation: UU => {
                let XU = cU[UU];
                return null == XU ? -1 : XU
              }
            }),
            QU = iX(XU, ((UU, zU, QU) => {
              let AU = (0, oU.P)(yU, UU.from);
              if (null == AU) return;
              /\S/.test(UU.text) || (AU = 0);
              let FU = /^\s*/.exec(UU.text)[0],
                DU = (0, oU.T)(XU, AU);
              (FU != DU || QU.from < UU.from + FU.length) && (cU[UU.from] = AU, zU.push({
                from: UU.from,
                to: UU.from + FU.length,
                insert: DU
              }))
            }));
          return QU.changes.empty || zU(XU.update(QU, {
            userEvent: "indent"
          })), !0
        }
      }, {
        key: "Shift-Mod-k",
        run: UU => {
          if (UU.state.readOnly) return !1;
          let {
            state: XU
          } = UU, zU = XU.changes(OX(XU).map((UU => {
            let {
              from: zU,
              to: cU
            } = UU;
            return zU > 0 ? zU-- : cU < XU.doc.length && cU++, {
              from: zU,
              to: cU
            }
          }))), cU = VU(XU.selection, (XU => {
            let zU;
            if (UU.lineWrapping) {
              let cU = UU.lineBlockAt(XU.head),
                yU = UU.coordsAtPos(XU.head, XU.assoc || 1);
              yU && (zU = cU.bottom + UU.documentTop - yU.bottom + UU.defaultLineHeight / 2)
            }
            return UU.moveVertically(XU, !0, zU)
          })).map(zU);
          return UU.dispatch({
            changes: zU,
            selection: cU,
            scrollIntoView: !0,
            userEvent: "delete.line"
          }), !0
        }
      }, {
        key: "Shift-Mod-\\",
        run: UU => {
          let {
            state: XU,
            dispatch: zU
          } = UU;
          return FX(XU, zU, !1)
        }
      }, {
        key: "Mod-/",
        run: UU => {
          let {
            state: XU
          } = UU, zU = XU.doc.lineAt(XU.selection.main.from), cU = pU(UU.state, zU.from);
          return cU.line ? YU(UU) : !!cU.block && IU(UU)
        }
      }, {
        key: "Alt-A",
        run: NU
      }, {
        key: "Ctrl-m",
        mac: "Shift-Alt-m",
        run: UU => (UU.setTabFocusMode(), !0)
      }].concat([{
        key: "ArrowLeft",
        run: JU,
        shift: EX,
        preventDefault: !0
      }, {
        key: "Mod-ArrowLeft",
        mac: "Alt-ArrowLeft",
        run: UU => KU(UU, !xU(UU)),
        shift: UU => NX(UU, !xU(UU)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowLeft",
        run: UU => nU(UU, (XU => AX(UU, XU, !xU(UU)))),
        shift: UU => oX(UU, (XU => AX(UU, XU, !xU(UU)))),
        preventDefault: !0
      }, {
        key: "ArrowRight",
        run: jU,
        shift: YX,
        preventDefault: !0
      }, {
        key: "Mod-ArrowRight",
        mac: "Alt-ArrowRight",
        run: UU => KU(UU, xU(UU)),
        shift: UU => NX(UU, xU(UU)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowRight",
        run: UU => nU(UU, (XU => AX(UU, XU, xU(UU)))),
        shift: UU => oX(UU, (XU => AX(UU, XU, xU(UU)))),
        preventDefault: !0
      }, {
        key: "ArrowUp",
        run: UX,
        shift: pX,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowUp",
        run: GX,
        shift: ZX
      }, {
        mac: "Ctrl-ArrowUp",
        run: yX,
        shift: gX
      }, {
        key: "ArrowDown",
        run: XX,
        shift: aX,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowDown",
        run: BX,
        shift: RX
      }, {
        mac: "Ctrl-ArrowDown",
        run: QX,
        shift: kX
      }, {
        key: "PageUp",
        run: yX,
        shift: gX
      }, {
        key: "PageDown",
        run: QX,
        shift: kX
      }, {
        key: "Home",
        run: UU => nU(UU, (XU => AX(UU, XU, !1))),
        shift: UU => oX(UU, (XU => AX(UU, XU, !1))),
        preventDefault: !0
      }, {
        key: "Mod-Home",
        run: GX,
        shift: ZX
      }, {
        key: "End",
        run: UU => nU(UU, (XU => AX(UU, XU, !0))),
        shift: UU => oX(UU, (XU => AX(UU, XU, !0))),
        preventDefault: !0
      }, {
        key: "Mod-End",
        run: BX,
        shift: RX
      }, {
        key: "Enter",
        run: uX,
        shift: uX
      }, {
        key: "Mod-a",
        run: UU => {
          let {
            state: XU,
            dispatch: zU
          } = UU;
          return zU(XU.update({
            selection: {
              anchor: 0,
              head: XU.doc.length
            },
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Backspace",
        run: eX,
        shift: eX,
        preventDefault: !0
      }, {
        key: "Delete",
        run: CX,
        preventDefault: !0
      }, {
        key: "Mod-Backspace",
        mac: "Alt-Backspace",
        run: qX,
        preventDefault: !0
      }, {
        key: "Mod-Delete",
        mac: "Alt-Delete",
        run: UU => wX(UU, !0),
        preventDefault: !0
      }, {
        mac: "Mod-Backspace",
        run: UU => WX(UU, (XU => {
          let zU = UU.moveToLineBoundary(XU, !1).head;
          return XU.head > zU ? zU : Math.max(0, XU.head - 1)
        })),
        preventDefault: !0
      }, {
        mac: "Mod-Delete",
        run: UU => WX(UU, (XU => {
          let zU = UU.moveToLineBoundary(XU, !0).head;
          return XU.head < zU ? zU : Math.min(UU.state.doc.length, XU.head + 1)
        })),
        preventDefault: !0
      }].concat([{
        key: "Ctrl-b",
        run: JU,
        shift: EX,
        preventDefault: !0
      }, {
        key: "Ctrl-f",
        run: jU,
        shift: YX
      }, {
        key: "Ctrl-p",
        run: UX,
        shift: pX
      }, {
        key: "Ctrl-n",
        run: XX,
        shift: aX
      }, {
        key: "Ctrl-a",
        run: UU => nU(UU, (XU => AU.k.cursor(UU.lineBlockAt(XU.head).from, 1))),
        shift: UU => oX(UU, (XU => AU.k.cursor(UU.lineBlockAt(XU.head).from)))
      }, {
        key: "Ctrl-e",
        run: UU => nU(UU, (XU => AU.k.cursor(UU.lineBlockAt(XU.head).to, -1))),
        shift: UU => oX(UU, (XU => AU.k.cursor(UU.lineBlockAt(XU.head).to)))
      }, {
        key: "Ctrl-d",
        run: CX
      }, {
        key: "Ctrl-h",
        run: eX
      }, {
        key: "Ctrl-k",
        run: UU => WX(UU, (XU => {
          let zU = UU.lineBlockAt(XU.head).to;
          return XU.head < zU ? zU : Math.min(UU.state.doc.length, XU.head + 1)
        }))
      }, {
        key: "Ctrl-Alt-h",
        run: qX
      }, {
        key: "Ctrl-o",
        run: UU => {
          let {
            state: XU,
            dispatch: zU
          } = UU;
          if (XU.readOnly) return !1;
          let cU = XU.changeByRange((UU => ({
            changes: {
              from: UU.from,
              to: UU.to,
              insert: AU.O.of(["", ""])
            },
            range: AU.k.cursor(UU.from)
          })));
          return zU(XU.update(cU, {
            scrollIntoView: !0,
            userEvent: "input"
          })), !0
        }
      }, {
        key: "Ctrl-t",
        run: UU => {
          let {
            state: XU,
            dispatch: zU
          } = UU;
          if (XU.readOnly) return !1;
          let cU = XU.changeByRange((UU => {
            if (!UU.empty || 0 == UU.from || UU.from == XU.doc.length) return {
              range: UU
            };
            let zU = UU.from,
              cU = XU.doc.lineAt(zU),
              yU = zU == cU.from ? zU - 1 : (0, AU._)(cU.text, zU - cU.from, !1) + cU.from,
              QU = zU == cU.to ? zU + 1 : (0, AU._)(cU.text, zU - cU.from, !0) + cU.from;
            return {
              changes: {
                from: yU,
                to: QU,
                insert: XU.doc.slice(zU, QU).append(XU.doc.slice(yU, zU))
              },
              range: AU.k.cursor(QU)
            }
          }));
          return !cU.changes.empty && (zU(XU.update(cU, {
            scrollIntoView: !0,
            userEvent: "move.character"
          })), !0)
        }
      }, {
        key: "Ctrl-v",
        run: QX
      }].map((UU => ({
        mac: UU.key,
        run: UU.run,
        shift: UU.shift
      }))))),
      VX = {
        key: "Tab",
        run: HX,
        shift: MX
      };
    var sX = zU(44063),
      nX = zU(44001),
      mX = zU(44068),
      lX = function(UU) {
        void 0 === UU && (UU = {});
        var {
          crosshairCursor: XU = !1
        } = UU, zU = [];
        !1 !== UU.closeBracketsKeymap && (zU = zU.concat(nX.g)), !1 !== UU.defaultKeymap && (zU = zU.concat(vX)), !1 !== UU.searchKeymap && (zU = zU.concat(sX.h)), !1 !== UU.historyKeymap && (zU = zU.concat(vU)), !1 !== UU.foldKeymap && (zU = zU.concat(oU.C)), !1 !== UU.completionKeymap && (zU = zU.concat(nX.r)), !1 !== UU.lintKeymap && (zU = zU.concat(mX.b));
        var cU = [];
        return !1 !== UU.lineNumbers && cU.push((0, FU.R)()), !1 !== UU.highlightActiveLineGutter && cU.push((0, FU.I)()), !1 !== UU.highlightSpecialChars && cU.push((0, FU.M)()), !1 !== UU.history && cU.push(function() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return [RU, ZU.of(UU), FU.h.domEventHandlers({
            beforeinput(UU, XU) {
              let zU = "historyUndo" == UU.inputType ? WU : "historyRedo" == UU.inputType ? dU : null;
              return !!zU && (UU.preventDefault(), zU(XU))
            }
          })]
        }()), !1 !== UU.foldGutter && cU.push((0, oU.z)()), !1 !== UU.drawSelection && cU.push((0, FU.r)()), !1 !== UU.dropCursor && cU.push((0, FU.v)()), !1 !== UU.allowMultipleSelections && cU.push(AU.n.allowMultipleSelections.of(!0)), !1 !== UU.indentOnInput && cU.push((0, oU.S)()), !1 !== UU.syntaxHighlighting && cU.push((0, oU.cb)(oU.r, {
          fallback: !0
        })), !1 !== UU.bracketMatching && cU.push((0, oU.n)()), !1 !== UU.closeBrackets && cU.push((0, nX.k)()), !1 !== UU.autocompletion && cU.push((0, nX.d)()), !1 !== UU.rectangularSelection && cU.push((0, FU.Y)()), !1 !== XU && cU.push((0, FU.p)()), !1 !== UU.highlightActiveLine && cU.push((0, FU.K)()), !1 !== UU.highlightSelectionMatches && cU.push((0, sX.e)()), UU.tabSize && "number" === typeof UU.tabSize && cU.push(oU.V.of(" ".repeat(UU.tabSize))), cU.concat([FU.Q.of(zU.flat())]).filter(Boolean)
      },
      xX = zU(44040);
    const JX = "#e5c07b",
      jX = "#e06c75",
      KX = "#56b6c2",
      bX = "#ffffff",
      TX = "#abb2bf",
      hX = "#7d8799",
      Uz = "#61afef",
      Xz = "#98c379",
      zz = "#d19a66",
      cz = "#c678dd",
      yz = "#21252b",
      Qz = "#2c313a",
      Az = "#282c34",
      Fz = "#353a42",
      oz = "#3E4451",
      Dz = "#528bff",
      Ez = FU.h.theme({
        "&": {
          color: TX,
          backgroundColor: Az
        },
        ".cm-content": {
          caretColor: Dz
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: Dz
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: oz
        },
        ".cm-panels": {
          backgroundColor: yz,
          color: TX
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
          backgroundColor: Az,
          color: hX,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: Qz
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#ddd"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: Fz
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: Fz,
          borderBottomColor: Fz
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: Qz,
            color: TX
          }
        }
      }, {
        dark: !0
      }),
      Yz = oU.e.define([{
        tag: xX.k.keyword,
        color: cz
      }, {
        tag: [xX.k.name, xX.k.deleted, xX.k.character, xX.k.propertyName, xX.k.macroName],
        color: jX
      }, {
        tag: [xX.k.function(xX.k.variableName), xX.k.labelName],
        color: Uz
      }, {
        tag: [xX.k.color, xX.k.constant(xX.k.name), xX.k.standard(xX.k.name)],
        color: zz
      }, {
        tag: [xX.k.definition(xX.k.name), xX.k.separator],
        color: TX
      }, {
        tag: [xX.k.typeName, xX.k.className, xX.k.number, xX.k.changed, xX.k.annotation, xX.k.modifier, xX.k.self, xX.k.namespace],
        color: JX
      }, {
        tag: [xX.k.operator, xX.k.operatorKeyword, xX.k.url, xX.k.escape, xX.k.regexp, xX.k.link, xX.k.special(xX.k.string)],
        color: KX
      }, {
        tag: [xX.k.meta, xX.k.comment],
        color: hX
      }, {
        tag: xX.k.strong,
        fontWeight: "bold"
      }, {
        tag: xX.k.emphasis,
        fontStyle: "italic"
      }, {
        tag: xX.k.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: xX.k.link,
        color: hX,
        textDecoration: "underline"
      }, {
        tag: xX.k.heading,
        fontWeight: "bold",
        color: jX
      }, {
        tag: [xX.k.atom, xX.k.bool, xX.k.special(xX.k.variableName)],
        color: zz
      }, {
        tag: [xX.k.processingInstruction, xX.k.string, xX.k.inserted],
        color: Xz
      }, {
        tag: xX.k.invalid,
        color: bX
      }]),
      Nz = [Ez, (0, oU.cb)(Yz)];
    var Iz = FU.h.theme({
      "&": {
        backgroundColor: "#fff"
      }
    }, {
      dark: !1
    });
    class pz {
      constructor(UU, XU) {
        this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = XU, this.timeoutMS = XU, this.callbacks.push(UU)
      }
      LY() {
        if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
          this.isTimeExhausted = !0;
          var UU = this.callbacks.slice();
          this.callbacks.length = 0, UU.forEach((UU => {
            try {
              UU()
            } catch (XU) {
              console.error("TimeoutLatch callback error:", XU)
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
    class az {
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
            UU.LY(), UU.isDone && this.remove(UU)
          }))
        }), 1))
      }
      stop() {
        null !== this.interval && (clearInterval(this.interval), this.interval = null)
      }
    }
    var tz = null,
      gz = AU.d.define(),
      kz = [];

    function Gz(UU) {
      var {
        value: XU,
        selection: zU,
        onChange: cU,
        onStatistics: yU,
        onCreateEditor: oU,
        onUpdate: DU,
        extensions: EU = kz,
        autoFocus: YU,
        theme: NU = "light",
        height: IU = null,
        minHeight: pU = null,
        maxHeight: aU = null,
        width: tU = null,
        minWidth: gU = null,
        maxWidth: kU = null,
        placeholder: GU = "",
        editable: BU = !0,
        readOnly: ZU = !1,
        indentWithTab: RU = !0,
        basicSetup: PU = !0,
        root: WU,
        initialState: dU
      } = UU, [LU, eU] = (0, QU.useState)(), [CU, wU] = (0, QU.useState)(), [qU, OU] = (0, QU.useState)(), SU = (0, QU.useState)((() => ({
        current: null
      })))[0], rU = (0, QU.useState)((() => ({
        current: null
      })))[0], uU = FU.h.theme({
        "&": {
          height: IU,
          minHeight: pU,
          maxHeight: aU,
          width: tU,
          minWidth: gU,
          maxWidth: kU
        },
        "& .cm-scroller": {
          height: "100% !important"
        }
      }), fU = FU.h.updateListener.of((UU => {
        if (UU.docChanged && "function" === typeof cU && !UU.transactions.some((UU => UU.annotation(gz)))) {
          SU.current ? SU.current.reset() : (SU.current = new pz((() => {
            if (rU.current) {
              var UU = rU.current;
              rU.current = null, UU()
            }
            SU.current = null
          }), 200), ("undefined" === typeof window ? new az : (tz || (tz = new az), tz)).add(SU.current));
          var XU = UU.state.doc.toString();
          cU(XU, UU)
        }
        yU && yU((UU => ({
          line: UU.state.doc.lineAt(UU.state.selection.main.from),
          lineCount: UU.state.doc.lines,
          lineBreak: UU.state.lineBreak,
          length: UU.state.doc.length,
          readOnly: UU.state.readOnly,
          tabSize: UU.state.tabSize,
          selection: UU.state.selection,
          selectionAsSingle: UU.state.selection.asSingle().main,
          Qt: UU.state.selection.Qt,
          selectionCode: UU.state.sliceDoc(UU.state.selection.main.from, UU.state.selection.main.to),
          selections: UU.state.selection.Qt.map((XU => UU.state.sliceDoc(XU.from, XU.to))),
          selectedText: UU.state.selection.Qt.some((UU => !UU.empty))
        }))(UU))
      })), iU = function(UU) {
        void 0 === UU && (UU = {});
        var {
          indentWithTab: XU = !0,
          editable: zU = !0,
          readOnly: cU = !1,
          theme: yU = "light",
          placeholder: QU = "",
          basicSetup: oU = !0
        } = UU, DU = [];
        switch (XU && DU.unshift(FU.Q.of([VX])), oU && ("boolean" === typeof oU ? DU.unshift(lX()) : DU.unshift(lX(oU))), QU && DU.unshift((0, FU.X)(QU)), yU) {
          case "light":
            DU.push(Iz);
            break;
          case "dark":
            DU.push(Nz);
            break;
          case "none":
            break;
          default:
            DU.push(yU)
        }
        return !1 === zU && DU.push(FU.h.editable.of(!1)), cU && DU.push(AU.n.readOnly.of(!0)), [...DU]
      }({
        theme: NU,
        editable: BU,
        readOnly: ZU,
        placeholder: GU,
        indentWithTab: RU,
        basicSetup: PU
      }), HU = [fU, uU, ...iU];
      return DU && "function" === typeof DU && HU.push(FU.h.updateListener.of(DU)), HU = HU.concat(EU), (0, QU.useLayoutEffect)((() => {
        if (LU && !qU) {
          var UU = {
              doc: XU,
              selection: zU,
              extensions: HU
            },
            cU = dU ? AU.n.fromJSON(dU.json, UU, dU.fields) : AU.n.create(UU);
          if (OU(cU), !CU) {
            var yU = new FU.h({
              state: cU,
              parent: LU,
              root: WU
            });
            wU(yU), oU && oU(yU, cU)
          }
        }
        return () => {
          CU && (OU(void 0), wU(void 0))
        }
      }), [LU, qU]), (0, QU.useEffect)((() => {
        UU.container && eU(UU.container)
      }), [UU.container]), (0, QU.useEffect)((() => () => {
        CU && (CU.destroy(), wU(void 0)), SU.current && (SU.current.cancel(), SU.current = null)
      }), [CU]), (0, QU.useEffect)((() => {
        YU && CU && CU.focus()
      }), [YU, CU]), (0, QU.useEffect)((() => {
        CU && CU.dispatch({
          effects: AU.H.reconfigure.of(HU)
        })
      }), [NU, EU, IU, pU, aU, tU, gU, kU, GU, BU, ZU, RU, PU, cU, DU]), (0, QU.useEffect)((() => {
        if (void 0 !== XU) {
          var UU = CU ? CU.state.doc.toString() : "";
          if (CU && XU !== UU) {
            var zU = () => {
              CU && XU !== CU.state.doc.toString() && CU.dispatch({
                changes: {
                  from: 0,
                  to: CU.state.doc.toString().length,
                  insert: XU || ""
                },
                annotations: [gz.of(!0)]
              })
            };
            SU.current && !SU.current.isDone ? rU.current = zU : zU()
          }
        }
      }), [XU, CU]), {
        state: qU,
        setState: OU,
        view: CU,
        setView: wU,
        container: LU,
        setContainer: eU
      }
    }
    var Bz = zU(1305),
      Zz = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"],
      Rz = (0, QU.forwardRef)(((UU, XU) => {
        var {
          className: zU,
          value: AU = "",
          selection: FU,
          extensions: oU = [],
          onChange: DU,
          onStatistics: EU,
          onCreateEditor: YU,
          onUpdate: NU,
          autoFocus: IU,
          theme: pU = "light",
          height: aU,
          minHeight: tU,
          maxHeight: gU,
          width: kU,
          minWidth: GU,
          maxWidth: BU,
          basicSetup: ZU,
          placeholder: RU,
          indentWithTab: PU,
          editable: WU,
          readOnly: dU,
          root: LU,
          initialState: eU
        } = UU, CU = (0, yU.d)(UU, Zz), wU = (0, QU.useRef)(null), {
          state: qU,
          view: OU,
          container: SU,
          setContainer: rU
        } = Gz({
          root: LU,
          value: AU,
          autoFocus: IU,
          theme: pU,
          height: aU,
          minHeight: tU,
          maxHeight: gU,
          width: kU,
          minWidth: GU,
          maxWidth: BU,
          basicSetup: ZU,
          placeholder: RU,
          indentWithTab: PU,
          editable: WU,
          readOnly: dU,
          selection: FU,
          onChange: DU,
          onStatistics: EU,
          onCreateEditor: YU,
          onUpdate: NU,
          extensions: oU,
          initialState: eU
        });
        (0, QU.useImperativeHandle)(XU, (() => ({
          editor: wU.current,
          state: qU,
          view: OU
        })), [wU, SU, qU, OU]);
        var uU = (0, QU.useCallback)((UU => {
          wU.current = UU, rU(UU)
        }), [rU]);
        if ("string" !== typeof AU) throw new Error("value must be typeof string but got " + typeof AU);
        var fU = "string" === typeof pU ? "cm-theme-" + pU : "cm-theme";
        return (0, Bz.jsx)("div", (0, cU.e)({
          ref: uU,
          className: fU + (zU ? " " + zU : "")
        }, CU))
      }));
    Rz.displayName = "CodeMirror";
    const Pz = Rz
  },
  44025: (UU, XU, zU) => {
    function cU() {
      var UU = arguments[0];
      "string" == typeof UU && (UU = document.createElement(UU));
      var XU = 1,
        zU = arguments[1];
      if (zU && "object" == typeof zU && null == zU.nodeType && !Array.isArray(zU)) {
        for (var cU in zU)
          if (Object.prototype.hasOwnProperty.call(zU, cU)) {
            var QU = zU[cU];
            "string" == typeof QU ? UU.setAttribute(cU, QU) : null != QU && (UU[cU] = QU)
          } XU++
      }
      for (; XU < arguments.length; XU++) yU(UU, arguments[XU]);
      return UU
    }

    function yU(UU, XU) {
      if ("string" == typeof XU) UU.appendChild(document.createTextNode(XU));
      else if (null == XU);
      else if (null != XU.nodeType) UU.appendChild(XU);
      else {
        if (!Array.isArray(XU)) throw new RangeError("Unsupported child node: " + XU);
        for (var zU = 0; zU < XU.length; zU++) yU(UU, XU[zU])
      }
    }
    zU.d(XU, {
      b: () => cU
    })
  },
  44019: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => AU
    });
    const cU = "undefined" == typeof Symbol ? "__\u037c" : Symbol.for("\u037c"),
      yU = "undefined" == typeof Symbol ? "__styleSet" + Math.floor(1e8 * Math.random()) : Symbol("styleSet"),
      QU = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : {};
    class AU {
      constructor(UU, XU) {
        this.rules = [];
        let {
          finish: zU
        } = XU || {};

        function cU(UU) {
          return /^@/.test(UU) ? [UU] : UU.split(/,\s*/)
        }

        function yU(UU, XU, QU, AU) {
          let FU = [],
            oU = /^@(\w+)\b/.exec(UU[0]),
            DU = oU && "keyframes" == oU[1];
          if (oU && null == XU) return QU.push(UU[0] + ";");
          for (let zU in XU) {
            let AU = XU[zU];
            if (/&/.test(zU)) yU(zU.split(/,\s*/).map((XU => UU.map((UU => XU.replace(/&/, UU))))).reduce(((UU, XU) => UU.concat(XU))), AU, QU);
            else if (AU && "object" == typeof AU) {
              if (!oU) throw new RangeError("The value of a property (" + zU + ") should be a primitive value.");
              yU(cU(zU), AU, FU, DU)
            } else null != AU && FU.push(zU.replace(/_.*/, "").replace(/[A-Z]/g, (UU => "-" + UU.toLowerCase())) + ": " + AU + ";")
          }(FU.length || DU) && QU.push((!zU || oU || AU ? UU : UU.map(zU)).join(", ") + " {" + FU.join(" ") + "}")
        }
        for (let QU in UU) yU(cU(QU), UU[QU], this.rules)
      }
      getRules() {
        return this.rules.join("\n")
      }
      static newName() {
        let UU = QU[cU] || 1;
        return QU[cU] = UU + 1, "\u037c" + UU.toString(36)
      }
      static mount(UU, XU, zU) {
        let cU = UU[yU],
          QU = zU && zU.nonce;
        cU ? QU && cU.setNonce(QU) : cU = new oU(UU, QU), cU.mount(Array.isArray(XU) ? XU : [XU], UU)
      }
    }
    let FU = new Map;
    class oU {
      constructor(UU, XU) {
        let zU = UU.ownerDocument || UU,
          cU = zU.defaultView;
        if (!UU.head && UU.adoptedStyleSheets && cU.CSSStyleSheet) {
          let XU = FU.get(zU);
          if (XU) return UU[yU] = XU;
          this.sheet = new cU.CSSStyleSheet, FU.set(zU, this)
        } else this.styleTag = zU.createElement("style"), XU && this.styleTag.setAttribute("nonce", XU);
        this.modules = [], UU[yU] = this
      }
      mount(UU, XU) {
        let zU = this.sheet,
          cU = 0,
          yU = 0;
        for (let QU = 0; QU < UU.length; QU++) {
          let XU = UU[QU],
            AU = this.modules.indexOf(XU);
          if (AU < yU && AU > -1 && (this.modules.splice(AU, 1), yU--, AU = -1), -1 == AU) {
            if (this.modules.splice(yU++, 0, XU), zU)
              for (let UU = 0; UU < XU.rules.length; UU++) zU.insertRule(XU.rules[UU], cU++)
          } else {
            for (; yU < AU;) cU += this.modules[yU++].rules.length;
            cU += XU.rules.length, yU++
          }
        }
        if (zU) XU.adoptedStyleSheets.indexOf(this.sheet) < 0 && (XU.adoptedStyleSheets = [this.sheet, ...XU.adoptedStyleSheets]);
        else {
          let UU = "";
          for (let XU = 0; XU < this.modules.length; XU++) UU += this.modules[XU].getRules() + "\n";
          this.styleTag.textContent = UU;
          let zU = XU.head || XU;
          this.styleTag.parentNode != zU && zU.insertBefore(this.styleTag, zU.firstChild)
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