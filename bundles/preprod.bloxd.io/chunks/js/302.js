export const id = 302;
export const ids = [302];
export const modules = {
  41545: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => RW,
      d: () => dW,
      f: () => DW,
      i: () => FQ,
      l: () => EW,
      n: () => PQ,
      p: () => rW
    });
    var wQ = XQ(41550),
      qQ = XQ(41555),
      TQ = XQ(41566);
    class zQ {
      constructor(QQ, WQ, XQ, wQ) {
        this.state = QQ, this.pos = WQ, this.explicit = XQ, this.view = wQ, this.abortListeners = [], this.abortOnDocChange = !1
      }
      tokenBefore(QQ) {
        let WQ = (0, TQ.fb)(this.state).resolveInner(this.pos, -1);
        for (; WQ && QQ.indexOf(WQ.name) < 0;) WQ = WQ.parent;
        return WQ ? {
          from: WQ.from,
          to: this.pos,
          text: this.state.sliceDoc(WQ.from, this.pos),
          type: WQ.type
        } : null
      }
      matchBefore(QQ) {
        let WQ = this.state.doc.lineAt(this.pos),
          XQ = Math.max(WQ.from, this.pos - 250),
          wQ = WQ.text.slice(XQ - WQ.from, this.pos - WQ.from),
          qQ = wQ.search(rQ(QQ, !1));
        return qQ < 0 ? null : {
          from: XQ + qQ,
          to: this.pos,
          text: wQ.slice(qQ)
        }
      }
      get aborted() {
        return null == this.abortListeners
      }
      addEventListener(QQ, WQ, XQ) {
        "abort" == QQ && this.abortListeners && (this.abortListeners.push(WQ), XQ && XQ.onDocChange && (this.abortOnDocChange = !0))
      }
    }

    function sQ(QQ) {
      let WQ = Object.keys(QQ).join(""),
        XQ = /\w/.test(WQ);
      return XQ && (WQ = WQ.replace(/\w/g, "")), `[${XQ?"\\w":""}${WQ.replace(/[^\w\s]/g,"\\$&")}]`
    }

    function FQ(QQ) {
      let WQ = QQ.map((QQ => "string" == typeof QQ ? {
          label: QQ
        } : QQ)),
        [XQ, wQ] = WQ.every((QQ => /^\w+$/.test(QQ.label))) ? [/\w*$/, /\w+$/] : function(QQ) {
          let WQ = Object.create(null),
            XQ = Object.create(null);
          for (let {
              label: qQ
            }
            of QQ) {
            WQ[qQ[0]] = !0;
            for (let QQ = 1; QQ < qQ.length; QQ++) XQ[qQ[QQ]] = !0
          }
          let wQ = sQ(WQ) + sQ(XQ) + "*$";
          return [new RegExp("^" + wQ), new RegExp(wQ)]
        }(WQ);
      return QQ => {
        let qQ = QQ.matchBefore(wQ);
        return qQ || QQ.explicit ? {
          from: qQ ? qQ.from : QQ.pos,
          options: WQ,
          validFor: XQ
        } : null
      }
    }

    function PQ(QQ, WQ) {
      return XQ => {
        for (let WQ = (0, TQ.fb)(XQ.state).resolveInner(XQ.pos, -1); WQ; WQ = WQ.parent) {
          if (QQ.indexOf(WQ.name) > -1) return null;
          if (WQ.type.isTop) break
        }
        return WQ(XQ)
      }
    }
    class gQ {
      constructor(QQ, WQ, XQ, wQ) {
        this.completion = QQ, this.source = WQ, this.match = XQ, this.score = wQ
      }
    }

    function JQ(QQ) {
      return QQ.selection.main.from
    }

    function rQ(QQ, WQ) {
      var XQ;
      let {
        source: wQ
      } = QQ, qQ = WQ && "^" != wQ[0], TQ = "$" != wQ[wQ.length - 1];
      return qQ || TQ ? new RegExp(`${qQ?"^":""}(?:${wQ})${TQ?"$":""}`, null !== (XQ = QQ.flags) && void 0 !== XQ ? XQ : QQ.ignoreCase ? "i" : "") : QQ
    }
    const IQ = wQ.b.define();

    function jQ(QQ, WQ, XQ, qQ) {
      let {
        main: TQ
      } = QQ.selection, zQ = XQ - TQ.from, sQ = qQ - TQ.from;
      return {
        ...QQ.changeByRange((FQ => {
          if (FQ != TQ && XQ != qQ && QQ.sliceDoc(FQ.from + zQ, FQ.from + sQ) != QQ.sliceDoc(XQ, qQ)) return {
            range: FQ
          };
          let PQ = QQ.toText(WQ);
          return {
            changes: {
              from: FQ.from + zQ,
              to: qQ == TQ.from ? FQ.to : FQ.from + sQ,
              insert: PQ
            },
            range: wQ.k.cursor(FQ.from + zQ + PQ.length)
          }
        })),
        scrollIntoView: !0,
        userEvent: "input.complete"
      }
    }
    const BQ = new WeakMap;

    function yQ(QQ) {
      if (!Array.isArray(QQ)) return QQ;
      let WQ = BQ.get(QQ);
      return WQ || BQ.set(QQ, WQ = FQ(QQ)), WQ
    }
    const VQ = wQ.G.define(),
      DQ = wQ.G.define();
    class pQ {
      constructor(QQ) {
        this.pattern = QQ, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
        for (let WQ = 0; WQ < QQ.length;) {
          let XQ = (0, wQ.P)(QQ, WQ),
            qQ = (0, wQ.Q)(XQ);
          this.chars.push(XQ);
          let TQ = QQ.slice(WQ, WQ + qQ),
            zQ = TQ.toUpperCase();
          this.folded.push((0, wQ.P)(zQ == TQ ? TQ.toLowerCase() : zQ, 0)), WQ += qQ
        }
        this.astral = QQ.length != this.chars.length
      }
      ret(QQ, WQ) {
        return this.score = QQ, this.matched = WQ, this
      }
      match(QQ) {
        if (0 == this.pattern.length) return this.ret(-100, []);
        if (QQ.length < this.pattern.length) return null;
        let {
          chars: WQ,
          folded: XQ,
          any: qQ,
          precise: TQ,
          byWord: zQ
        } = this;
        if (1 == WQ.length) {
          let qQ = (0, wQ.P)(QQ, 0),
            TQ = (0, wQ.Q)(qQ),
            zQ = TQ == QQ.length ? 0 : -100;
          if (qQ == WQ[0]);
          else {
            if (qQ != XQ[0]) return null;
            zQ += -200
          }
          return this.ret(zQ, [0, TQ])
        }
        let sQ = QQ.indexOf(this.pattern);
        if (0 == sQ) return this.ret(QQ.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
        let FQ = WQ.length,
          PQ = 0;
        if (sQ < 0) {
          for (let TQ = 0, zQ = Math.min(QQ.length, 200); TQ < zQ && PQ < FQ;) {
            let zQ = (0, wQ.P)(QQ, TQ);
            zQ != WQ[PQ] && zQ != XQ[PQ] || (qQ[PQ++] = TQ), TQ += (0, wQ.Q)(zQ)
          }
          if (PQ < FQ) return null
        }
        let gQ = 0,
          JQ = 0,
          rQ = !1,
          IQ = 0,
          jQ = -1,
          BQ = -1,
          yQ = /[a-z]/.test(QQ),
          VQ = !0;
        for (let DQ = 0, pQ = Math.min(QQ.length, 200), GQ = 0; DQ < pQ && JQ < FQ;) {
          let qQ = (0, wQ.P)(QQ, DQ);
          sQ < 0 && (gQ < FQ && qQ == WQ[gQ] && (TQ[gQ++] = DQ), IQ < FQ && (qQ == WQ[IQ] || qQ == XQ[IQ] ? (0 == IQ && (jQ = DQ), BQ = DQ + 1, IQ++) : IQ = 0));
          let PQ, pQ = qQ < 255 ? qQ >= 48 && qQ <= 57 || qQ >= 97 && qQ <= 122 ? 2 : qQ >= 65 && qQ <= 90 ? 1 : 0 : (PQ = (0, wQ.Z)(qQ)) != PQ.toLowerCase() ? 1 : PQ != PQ.toUpperCase() ? 2 : 0;
          (!DQ || 1 == pQ && yQ || 0 == GQ && 0 != pQ) && (WQ[JQ] == qQ || XQ[JQ] == qQ && (rQ = !0) ? zQ[JQ++] = DQ : zQ.length && (VQ = !1)), GQ = pQ, DQ += (0, wQ.Q)(qQ)
        }
        return JQ == FQ && 0 == zQ[0] && VQ ? this.result((rQ ? -200 : 0) - 100, zQ, QQ) : IQ == FQ && 0 == jQ ? this.ret(-200 - QQ.length + (BQ == QQ.length ? 0 : -100), [0, BQ]) : sQ > -1 ? this.ret(-700 - QQ.length, [sQ, sQ + this.pattern.length]) : IQ == FQ ? this.ret(-900 - QQ.length, [jQ, BQ]) : JQ == FQ ? this.result((rQ ? -200 : 0) - 100 - 700 + (VQ ? 0 : -1100), zQ, QQ) : 2 == WQ.length ? null : this.result((qQ[0] ? -700 : 0) - 200 - 1100, qQ, QQ)
      }
      result(QQ, WQ, XQ) {
        let qQ = [],
          TQ = 0;
        for (let zQ of WQ) {
          let QQ = zQ + (this.astral ? (0, wQ.Q)((0, wQ.P)(XQ, zQ)) : 1);
          TQ && qQ[TQ - 1] == zQ ? qQ[TQ - 1] = QQ : (qQ[TQ++] = zQ, qQ[TQ++] = QQ)
        }
        return this.ret(QQ - XQ.length, qQ)
      }
    }
    class GQ {
      constructor(QQ) {
        this.pattern = QQ, this.matched = [], this.score = 0, this.folded = QQ.toLowerCase()
      }
      match(QQ) {
        if (QQ.length < this.pattern.length) return null;
        let WQ = QQ.slice(0, this.pattern.length),
          XQ = WQ == this.pattern ? 0 : WQ.toLowerCase() == this.folded ? -200 : null;
        return null == XQ ? null : (this.matched = [0, WQ.length], this.score = XQ + (QQ.length == this.pattern.length ? 0 : -100), this)
      }
    }
    const UQ = wQ.o.define({
      combine: QQ => (0, wQ.U)(QQ, {
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
        positionInfo: vQ,
        filterStrict: !1,
        compareCompletions: (QQ, WQ) => (QQ.sortText || QQ.label).localeCompare(WQ.sortText || WQ.label),
        interactionDelay: 75,
        updateSyncTime: 100
      }, {
        defaultKeymap: (QQ, WQ) => QQ && WQ,
        closeOnBlur: (QQ, WQ) => QQ && WQ,
        icons: (QQ, WQ) => QQ && WQ,
        tooltipClass: (QQ, WQ) => XQ => bQ(QQ(XQ), WQ(XQ)),
        optionClass: (QQ, WQ) => XQ => bQ(QQ(XQ), WQ(XQ)),
        addToOptions: (QQ, WQ) => QQ.concat(WQ),
        filterStrict: (QQ, WQ) => QQ || WQ
      })
    });

    function bQ(QQ, WQ) {
      return QQ ? WQ ? QQ + " " + WQ : QQ : WQ
    }

    function vQ(QQ, WQ, XQ, wQ, TQ, zQ) {
      let sQ, FQ, PQ = QQ.textDirection == qQ.i.RTL,
        gQ = PQ,
        JQ = !1,
        rQ = "top",
        IQ = WQ.left - TQ.left,
        jQ = TQ.right - WQ.right,
        BQ = wQ.right - wQ.left,
        yQ = wQ.bottom - wQ.top;
      if (gQ && IQ < Math.min(BQ, jQ) ? gQ = !1 : !gQ && jQ < Math.min(BQ, IQ) && (gQ = !0), BQ <= (gQ ? IQ : jQ)) sQ = Math.max(TQ.top, Math.min(XQ.top, TQ.bottom - yQ)) - WQ.top, FQ = Math.min(400, gQ ? IQ : jQ);
      else {
        JQ = !0, FQ = Math.min(400, (PQ ? WQ.right : TQ.right - WQ.left) - 30);
        let QQ = TQ.bottom - WQ.bottom;
        QQ >= yQ || QQ > WQ.top ? sQ = XQ.bottom - WQ.top : (rQ = "bottom", sQ = WQ.bottom - XQ.top)
      }
      return {
        style: `${rQ}: ${sQ/((WQ.bottom-WQ.top)/zQ.offsetHeight)}px; max-width: ${FQ/((WQ.right-WQ.left)/zQ.offsetWidth)}px`,
        class: "cm-completionInfo-" + (JQ ? PQ ? "left-narrow" : "right-narrow" : gQ ? "left" : "right")
      }
    }
    const dQ = wQ.G.define();

    function HQ(QQ, WQ, XQ) {
      if (QQ <= XQ) return {
        from: 0,
        to: QQ
      };
      if (WQ < 0 && (WQ = 0), WQ <= QQ >> 1) {
        let QQ = Math.floor(WQ / XQ);
        return {
          from: QQ * XQ,
          to: (QQ + 1) * XQ
        }
      }
      let wQ = Math.floor((QQ - WQ) / XQ);
      return {
        from: QQ - (wQ + 1) * XQ,
        to: QQ - wQ * XQ
      }
    }
    class aQ {
      constructor(QQ, WQ, XQ) {
        this.view = QQ, this.stateField = WQ, this.applyCompletion = XQ, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
          read: () => this.measureInfo(),
          write: QQ => this.placeInfo(QQ),
          key: this
        }, this.space = null, this.currentClass = "";
        let wQ = QQ.state.field(WQ),
          {
            options: qQ,
            selected: TQ
          } = wQ.open,
          zQ = QQ.state.facet(UQ);
        this.optionContent = function(QQ) {
          let WQ = QQ.addToOptions.slice();
          return QQ.icons && WQ.push({
            render(QQ) {
              let WQ = document.createElement("div");
              return WQ.classList.add("cm-completionIcon"), QQ.type && WQ.classList.add(...QQ.type.split(/\s+/g).map((QQ => "cm-completionIcon-" + QQ))), WQ.setAttribute("aria-hidden", "true"), WQ
            },
            position: 20
          }), WQ.push({
            render(QQ, WQ, XQ, wQ) {
              let qQ = document.createElement("span");
              qQ.className = "cm-completionLabel";
              let TQ = QQ.displayLabel || QQ.label,
                zQ = 0;
              for (let sQ = 0; sQ < wQ.length;) {
                let QQ = wQ[sQ++],
                  WQ = wQ[sQ++];
                QQ > zQ && qQ.appendChild(document.createTextNode(TQ.slice(zQ, QQ)));
                let XQ = qQ.appendChild(document.createElement("span"));
                XQ.appendChild(document.createTextNode(TQ.slice(QQ, WQ))), XQ.className = "cm-completionMatchedText", zQ = WQ
              }
              return zQ < TQ.length && qQ.appendChild(document.createTextNode(TQ.slice(zQ))), qQ
            },
            position: 50
          }, {
            render(QQ) {
              if (!QQ.detail) return null;
              let WQ = document.createElement("span");
              return WQ.className = "cm-completionDetail", WQ.textContent = QQ.detail, WQ
            },
            position: 80
          }), WQ.sort(((QQ, WQ) => QQ.position - WQ.position)).map((QQ => QQ.render))
        }(zQ), this.optionClass = zQ.optionClass, this.tooltipClass = zQ.tooltipClass, this.range = HQ(qQ.length, TQ, zQ.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(QQ.state), this.dom.addEventListener("mousedown", (XQ => {
          let {
            options: wQ
          } = QQ.state.field(WQ).open;
          for (let WQ, qQ = XQ.target; qQ && qQ != this.dom; qQ = qQ.parentNode)
            if ("LI" == qQ.nodeName && (WQ = /-(\d+)$/.exec(qQ.id)) && +WQ[1] < wQ.length) return this.applyCompletion(QQ, wQ[+WQ[1]]), void XQ.preventDefault();
          if (XQ.target == this.list) {
            let WQ = this.list.classList.contains("cm-completionListIncompleteTop") && XQ.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && XQ.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
            null != WQ && (QQ.dispatch({
              effects: dQ.of(WQ)
            }), XQ.preventDefault())
          }
        })), this.dom.addEventListener("focusout", (WQ => {
          let XQ = QQ.state.field(this.stateField, !1);
          XQ && XQ.tooltip && QQ.state.facet(UQ).closeOnBlur && WQ.relatedTarget != QQ.contentDOM && QQ.dispatch({
            effects: DQ.of(null)
          })
        })), this.showOptions(qQ, wQ.id)
      }
      mount() {
        this.updateSel()
      }
      showOptions(QQ, WQ) {
        this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(QQ, WQ, this.range)), this.list.addEventListener("scroll", (() => {
          this.info && this.view.requestMeasure(this.placeInfoReq)
        }))
      }
      update(QQ) {
        var WQ;
        let XQ = QQ.state.field(this.stateField),
          wQ = QQ.startState.field(this.stateField);
        if (this.updateTooltipClass(QQ.state), XQ != wQ) {
          let {
            options: qQ,
            selected: TQ,
            disabled: zQ
          } = XQ.open;
          wQ.open && wQ.open.options == qQ || (this.range = HQ(qQ.length, TQ, QQ.state.facet(UQ).maxRenderedOptions), this.showOptions(qQ, XQ.id)), this.updateSel(), zQ != (null === (WQ = wQ.open) || void 0 === WQ ? void 0 : WQ.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!zQ)
        }
      }
      updateTooltipClass(QQ) {
        let WQ = this.tooltipClass(QQ);
        if (WQ != this.currentClass) {
          for (let QQ of this.currentClass.split(" ")) QQ && this.dom.classList.remove(QQ);
          for (let QQ of WQ.split(" ")) QQ && this.dom.classList.add(QQ);
          this.currentClass = WQ
        }
      }
      positioned(QQ) {
        this.space = QQ, this.info && this.view.requestMeasure(this.placeInfoReq)
      }
      updateSel() {
        let QQ = this.view.state.field(this.stateField),
          WQ = QQ.open;
        (WQ.selected > -1 && WQ.selected < this.range.from || WQ.selected >= this.range.to) && (this.range = HQ(WQ.options.length, WQ.selected, this.view.state.facet(UQ).maxRenderedOptions), this.showOptions(WQ.options, QQ.id));
        let XQ = this.updateSelectedOption(WQ.selected);
        if (XQ) {
          this.destroyInfo();
          let {
            completion: wQ
          } = WQ.options[WQ.selected], {
            info: TQ
          } = wQ;
          if (!TQ) return;
          let zQ = "string" === typeof TQ ? document.createTextNode(TQ) : TQ(wQ);
          if (!zQ) return;
          "then" in zQ ? zQ.then((WQ => {
            WQ && this.view.state.field(this.stateField, !1) == QQ && this.addInfoPane(WQ, wQ)
          })).catch((QQ => (0, qQ.eb)(this.view.state, QQ, "completion info"))) : (this.addInfoPane(zQ, wQ), XQ.setAttribute("aria-describedby", this.info.id))
        }
      }
      addInfoPane(QQ, WQ) {
        this.destroyInfo();
        let XQ = this.info = document.createElement("div");
        if (XQ.className = "cm-tooltip cm-completionInfo", XQ.id = "cm-completionInfo-" + Math.floor(65535 * Math.random()).toString(16), null != QQ.nodeType) XQ.appendChild(QQ), this.infoDestroy = null;
        else {
          let {
            dom: WQ,
            destroy: wQ
          } = QQ;
          XQ.appendChild(WQ), this.infoDestroy = wQ || null
        }
        this.dom.appendChild(XQ), this.view.requestMeasure(this.placeInfoReq)
      }
      updateSelectedOption(QQ) {
        let WQ = null;
        for (let XQ = this.list.firstChild, wQ = this.range.from; XQ; XQ = XQ.nextSibling, wQ++) "LI" == XQ.nodeName && XQ.id ? wQ == QQ ? XQ.hasAttribute("aria-selected") || (XQ.setAttribute("aria-selected", "true"), WQ = XQ) : XQ.hasAttribute("aria-selected") && (XQ.removeAttribute("aria-selected"), XQ.removeAttribute("aria-describedby")) : wQ--;
        return WQ && function(QQ, WQ) {
          let XQ = QQ.getBoundingClientRect(),
            wQ = WQ.getBoundingClientRect(),
            qQ = XQ.height / QQ.offsetHeight;
          wQ.top < XQ.top ? QQ.scrollTop -= (XQ.top - wQ.top) / qQ : wQ.bottom > XQ.bottom && (QQ.scrollTop += (wQ.bottom - XQ.bottom) / qQ)
        }(this.list, WQ), WQ
      }
      measureInfo() {
        let QQ = this.dom.querySelector("[aria-selected]");
        if (!QQ || !this.info) return null;
        let WQ = this.dom.getBoundingClientRect(),
          XQ = this.info.getBoundingClientRect(),
          wQ = QQ.getBoundingClientRect(),
          qQ = this.space;
        if (!qQ) {
          let QQ = this.dom.ownerDocument.documentElement;
          qQ = {
            left: 0,
            top: 0,
            right: QQ.clientWidth,
            bottom: QQ.clientHeight
          }
        }
        return wQ.top > Math.min(qQ.bottom, WQ.bottom) - 10 || wQ.bottom < Math.max(qQ.top, WQ.top) + 10 ? null : this.view.state.facet(UQ).positionInfo(this.view, WQ, wQ, XQ, qQ, this.dom)
      }
      placeInfo(QQ) {
        this.info && (QQ ? (QQ.style && (this.info.style.cssText = QQ.style), this.info.className = "cm-tooltip cm-completionInfo " + (QQ.class || "")) : this.info.style.cssText = "top: -1e6px")
      }
      createListBox(QQ, WQ, XQ) {
        const wQ = document.createElement("ul");
        wQ.id = WQ, wQ.setAttribute("role", "listbox"), wQ.setAttribute("aria-expanded", "true"), wQ.setAttribute("aria-label", this.view.state.phrase("Completions")), wQ.addEventListener("mousedown", (QQ => {
          QQ.target == wQ && QQ.preventDefault()
        }));
        let qQ = null;
        for (let TQ = XQ.from; TQ < XQ.to; TQ++) {
          let {
            completion: zQ,
            match: sQ
          } = QQ[TQ], {
            section: FQ
          } = zQ;
          if (FQ) {
            let QQ = "string" == typeof FQ ? FQ : FQ.name;
            if (QQ != qQ && (TQ > XQ.from || 0 == XQ.from))
              if (qQ = QQ, "string" != typeof FQ && FQ.header) wQ.appendChild(FQ.header(FQ));
              else {
                wQ.appendChild(document.createElement("completion-section")).textContent = QQ
              }
          }
          const PQ = wQ.appendChild(document.createElement("li"));
          PQ.id = WQ + "-" + TQ, PQ.setAttribute("role", "option");
          let gQ = this.optionClass(zQ);
          gQ && (PQ.className = gQ);
          for (let QQ of this.optionContent) {
            let WQ = QQ(zQ, this.view.state, this.view, sQ);
            WQ && PQ.appendChild(WQ)
          }
        }
        return XQ.from && wQ.classList.add("cm-completionListIncompleteTop"), XQ.to < QQ.length && wQ.classList.add("cm-completionListIncompleteBottom"), wQ
      }
      destroyInfo() {
        this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
      }
      destroy() {
        this.destroyInfo()
      }
    }

    function lQ(QQ, WQ) {
      return XQ => new aQ(XQ, QQ, WQ)
    }

    function hQ(QQ) {
      return 100 * (QQ.boost || 0) + (QQ.apply ? 10 : 0) + (QQ.info ? 5 : 0) + (QQ.type ? 1 : 0)
    }
    class iQ {
      constructor(QQ, WQ, XQ, wQ, qQ, TQ) {
        this.options = QQ, this.attrs = WQ, this.tooltip = XQ, this.timestamp = wQ, this.selected = qQ, this.disabled = TQ
      }
      setSelected(QQ, WQ) {
        return QQ == this.selected || QQ >= this.options.length ? this : new iQ(this.options, EQ(WQ, QQ), this.tooltip, this.timestamp, QQ, this.disabled)
      }
      static build(QQ, WQ, XQ, wQ, qQ, TQ) {
        if (wQ && !TQ && QQ.some((QQ => QQ.isPending))) return wQ.setDisabled();
        let zQ = function(QQ, WQ) {
          let XQ = [],
            wQ = null,
            qQ = null,
            TQ = QQ => {
              XQ.push(QQ);
              let {
                section: WQ
              } = QQ.completion;
              if (WQ) {
                wQ || (wQ = []);
                let QQ = "string" == typeof WQ ? WQ : WQ.name;
                wQ.some((WQ => WQ.name == QQ)) || wQ.push("string" == typeof WQ ? {
                  name: QQ
                } : WQ)
              }
            },
            zQ = WQ.facet(UQ);
          for (let JQ of QQ)
            if (JQ.hasResult()) {
              let QQ = JQ.result.getMatch;
              if (!1 === JQ.result.filter)
                for (let WQ of JQ.result.options) TQ(new gQ(WQ, JQ.source, QQ ? QQ(WQ) : [], 1e9 - XQ.length));
              else {
                let XQ, wQ = WQ.sliceDoc(JQ.from, JQ.to),
                  sQ = zQ.filterStrict ? new GQ(wQ) : new pQ(wQ);
                for (let WQ of JQ.result.options)
                  if (XQ = sQ.match(WQ.label)) {
                    let wQ = WQ.displayLabel ? QQ ? QQ(WQ, XQ.matched) : [] : XQ.matched,
                      zQ = XQ.score + (WQ.boost || 0);
                    if (TQ(new gQ(WQ, JQ.source, wQ, zQ)), "object" == typeof WQ.section && "dynamic" === WQ.section.rank) {
                      let {
                        name: QQ
                      } = WQ.section;
                      qQ || (qQ = Object.create(null)), qQ[QQ] = Math.max(zQ, qQ[QQ] || -1e9)
                    }
                  }
              }
            } if (wQ) {
            let QQ = Object.create(null),
              WQ = 0,
              TQ = (QQ, WQ) => ("dynamic" === QQ.rank && "dynamic" === WQ.rank ? qQ[WQ.name] - qQ[QQ.name] : 0) || ("number" == typeof QQ.rank ? QQ.rank : 1e9) - ("number" == typeof WQ.rank ? WQ.rank : 1e9) || (QQ.name < WQ.name ? -1 : 1);
            for (let XQ of wQ.sort(TQ)) WQ -= 1e5, QQ[XQ.name] = WQ;
            for (let wQ of XQ) {
              let {
                section: WQ
              } = wQ.completion;
              WQ && (wQ.score += QQ["string" == typeof WQ ? WQ : WQ.name])
            }
          }
          let sQ = [],
            FQ = null,
            PQ = zQ.compareCompletions;
          for (let gQ of XQ.sort(((QQ, WQ) => WQ.score - QQ.score || PQ(QQ.completion, WQ.completion)))) {
            let QQ = gQ.completion;
            !FQ || FQ.label != QQ.label || FQ.detail != QQ.detail || null != FQ.type && null != QQ.type && FQ.type != QQ.type || FQ.apply != QQ.apply || FQ.boost != QQ.boost ? sQ.push(gQ) : hQ(gQ.completion) > hQ(FQ) && (sQ[sQ.length - 1] = gQ), FQ = gQ.completion
          }
          return sQ
        }(QQ, WQ);
        if (!zQ.length) return wQ && QQ.some((QQ => QQ.isPending)) ? wQ.setDisabled() : null;
        let sQ = WQ.facet(UQ).selectOnOpen ? 0 : -1;
        if (wQ && wQ.selected != sQ && -1 != wQ.selected) {
          let QQ = wQ.options[wQ.selected].completion;
          for (let WQ = 0; WQ < zQ.length; WQ++)
            if (zQ[WQ].completion == QQ) {
              sQ = WQ;
              break
            }
        }
        return new iQ(zQ, EQ(XQ, sQ), {
          pos: QQ.reduce(((QQ, WQ) => WQ.hasResult() ? Math.min(QQ, WQ.from) : QQ), 1e8),
          create: oQ,
          above: qQ.aboveCursor
        }, wQ ? wQ.timestamp : Date.now(), sQ, !1)
      }
      map(QQ) {
        return new iQ(this.options, this.attrs, {
          ...this.tooltip,
          pos: QQ.mapPos(this.tooltip.pos)
        }, this.timestamp, this.selected, this.disabled)
      }
      setDisabled() {
        return new iQ(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0)
      }
    }
    class cQ {
      constructor(QQ, WQ, XQ) {
        this.active = QQ, this.id = WQ, this.open = XQ
      }
      static start() {
        return new cQ(CQ, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
      }
      update(QQ) {
        let {
          state: WQ
        } = QQ, XQ = WQ.facet(UQ), wQ = (XQ.override || WQ.languageDataAt("autocomplete", JQ(WQ)).map(yQ)).map((WQ => (this.active.find((QQ => QQ.source == WQ)) || new LQ(WQ, this.active.some((QQ => 0 != QQ.state)) ? 1 : 0)).update(QQ, XQ)));
        wQ.length == this.active.length && wQ.every(((QQ, WQ) => QQ == this.active[WQ])) && (wQ = this.active);
        let qQ = this.open,
          TQ = QQ.effects.some((QQ => QQ.is(fQ)));
        qQ && QQ.docChanged && (qQ = qQ.map(QQ.changes)), QQ.selection || wQ.some((WQ => WQ.hasResult() && QQ.changes.touchesRange(WQ.from, WQ.to))) || ! function(QQ, WQ) {
          if (QQ == WQ) return !0;
          for (let XQ = 0, wQ = 0;;) {
            for (; XQ < QQ.length && !QQ[XQ].hasResult();) XQ++;
            for (; wQ < WQ.length && !WQ[wQ].hasResult();) wQ++;
            let qQ = XQ == QQ.length,
              TQ = wQ == WQ.length;
            if (qQ || TQ) return qQ == TQ;
            if (QQ[XQ++].result != WQ[wQ++].result) return !1
          }
        }(wQ, this.active) || TQ ? qQ = iQ.build(wQ, WQ, this.id, qQ, XQ, TQ) : qQ && qQ.disabled && !wQ.some((QQ => QQ.isPending)) && (qQ = null), !qQ && wQ.every((QQ => !QQ.isPending)) && wQ.some((QQ => QQ.hasResult())) && (wQ = wQ.map((QQ => QQ.hasResult() ? new LQ(QQ.source, 0) : QQ)));
        for (let zQ of QQ.effects) zQ.is(dQ) && (qQ = qQ && qQ.setSelected(zQ.value, this.id));
        return wQ == this.active && qQ == this.open ? this : new cQ(wQ, this.id, qQ)
      }
      get tooltip() {
        return this.open ? this.open.tooltip : null
      }
      get attrs() {
        return this.open ? this.open.attrs : this.active.length ? AQ : RQ
      }
    }
    const AQ = {
        "aria-autocomplete": "list"
      },
      RQ = {};

    function EQ(QQ, WQ) {
      let XQ = {
        "aria-autocomplete": "list",
        "aria-haspopup": "listbox",
        "aria-controls": QQ
      };
      return WQ > -1 && (XQ["aria-activedescendant"] = QQ + "-" + WQ), XQ
    }
    const CQ = [];

    function uQ(QQ, WQ) {
      if (QQ.isUserEvent("input.complete")) {
        let XQ = QQ.annotation(IQ);
        if (XQ && WQ.activateOnCompletion(XQ)) return 12
      }
      let XQ = QQ.isUserEvent("input.type");
      return XQ && WQ.activateOnTyping ? 5 : XQ ? 1 : QQ.isUserEvent("delete.backward") ? 2 : QQ.selection ? 8 : QQ.docChanged ? 16 : 0
    }
    class LQ {
      constructor(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.source = QQ, this.state = WQ, this.explicit = XQ
      }
      hasResult() {
        return !1
      }
      get isPending() {
        return 1 == this.state
      }
      update(QQ, WQ) {
        let XQ = uQ(QQ, WQ),
          wQ = this;
        (8 & XQ || 16 & XQ && this.touches(QQ)) && (wQ = new LQ(wQ.source, 0)), 4 & XQ && 0 == wQ.state && (wQ = new LQ(this.source, 1)), wQ = wQ.updateFor(QQ, XQ);
        for (let qQ of QQ.effects)
          if (qQ.is(VQ)) wQ = new LQ(wQ.source, 1, qQ.value);
          else if (qQ.is(DQ)) wQ = new LQ(wQ.source, 0);
        else if (qQ.is(fQ))
          for (let QQ of qQ.value) QQ.source == wQ.source && (wQ = QQ);
        return wQ
      }
      updateFor(QQ, WQ) {
        return this.map(QQ.changes)
      }
      map(QQ) {
        return this
      }
      touches(QQ) {
        return QQ.changes.touchesRange(JQ(QQ.state))
      }
    }
    class kQ extends LQ {
      constructor(QQ, WQ, XQ, wQ, qQ, TQ) {
        super(QQ, 3, WQ), this.limit = XQ, this.result = wQ, this.from = qQ, this.to = TQ
      }
      hasResult() {
        return !0
      }
      updateFor(QQ, WQ) {
        var XQ;
        if (!(3 & WQ)) return this.map(QQ.changes);
        let wQ = this.result;
        wQ.map && !QQ.changes.empty && (wQ = wQ.map(wQ, QQ.changes));
        let qQ = QQ.changes.mapPos(this.from),
          TQ = QQ.changes.mapPos(this.to, 1),
          sQ = JQ(QQ.state);
        if (sQ > TQ || !wQ || 2 & WQ && (JQ(QQ.startState) == this.from || sQ < this.limit)) return new LQ(this.source, 4 & WQ ? 1 : 0);
        let FQ = QQ.changes.mapPos(this.limit);
        return function(QQ, WQ, XQ, wQ) {
          if (!QQ) return !1;
          let qQ = WQ.sliceDoc(XQ, wQ);
          return "function" == typeof QQ ? QQ(qQ, XQ, wQ, WQ) : rQ(QQ, !0).test(qQ)
        }(wQ.validFor, QQ.state, qQ, TQ) ? new kQ(this.source, this.explicit, FQ, wQ, qQ, TQ) : wQ.update && (wQ = wQ.update(wQ, qQ, TQ, new zQ(QQ.state, sQ, !1))) ? new kQ(this.source, this.explicit, FQ, wQ, wQ.from, null !== (XQ = wQ.to) && void 0 !== XQ ? XQ : JQ(QQ.state)) : new LQ(this.source, 1, this.explicit)
      }
      map(QQ) {
        if (QQ.empty) return this;
        return (this.result.map ? this.result.map(this.result, QQ) : this.result) ? new kQ(this.source, this.explicit, QQ.mapPos(this.limit), this.result, QQ.mapPos(this.from), QQ.mapPos(this.to, 1)) : new LQ(this.source, 0)
      }
      touches(QQ) {
        return QQ.changes.touchesRange(this.from, this.to)
      }
    }
    const fQ = wQ.G.define({
        map: (QQ, WQ) => QQ.map((QQ => QQ.map(WQ)))
      }),
      SQ = wQ.I.define({
        create: () => cQ.start(),
        update: (QQ, WQ) => QQ.update(WQ),
        provide: QQ => [qQ.qb.from(QQ, (QQ => QQ.tooltip)), qQ.k.contentAttributes.from(QQ, (QQ => QQ.attrs))]
      });

    function tQ(QQ, WQ) {
      const XQ = WQ.completion.apply || WQ.completion.label;
      let wQ = QQ.state.field(SQ).active.find((QQ => QQ.source == WQ.source));
      return wQ instanceof kQ && ("string" == typeof XQ ? QQ.dispatch({
        ...jQ(QQ.state, XQ, wQ.from, wQ.to),
        annotations: IQ.of(WQ.completion)
      }) : XQ(QQ, WQ.completion, wQ.from, wQ.to), !0)
    }
    const oQ = lQ(SQ, tQ);

    function eQ(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option";
      return XQ => {
        let wQ = XQ.state.field(SQ, !1);
        if (!wQ || !wQ.open || wQ.open.disabled || Date.now() - wQ.open.timestamp < XQ.state.facet(UQ).interactionDelay) return !1;
        let TQ, zQ = 1;
        "page" == WQ && (TQ = (0, qQ.L)(XQ, wQ.open.tooltip)) && (zQ = Math.max(2, Math.floor(TQ.dom.offsetHeight / TQ.dom.querySelector("li").offsetHeight) - 1));
        let {
          length: sQ
        } = wQ.open.options, FQ = wQ.open.selected > -1 ? wQ.open.selected + zQ * (QQ ? 1 : -1) : QQ ? 0 : sQ - 1;
        return FQ < 0 ? FQ = "page" == WQ ? 0 : sQ - 1 : FQ >= sQ && (FQ = "page" == WQ ? sQ - 1 : 0), XQ.dispatch({
          effects: dQ.of(FQ)
        }), !0
      }
    }
    const nQ = QQ => !!QQ.state.field(SQ, !1) && (QQ.dispatch({
      effects: VQ.of(!0)
    }), !0);
    class xQ {
      constructor(QQ, WQ) {
        this.active = QQ, this.context = WQ, this.time = Date.now(), this.updates = [], this.done = void 0
      }
    }
    const YQ = qQ.q.fromClass(class {
        constructor(QQ) {
          this.view = QQ, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
          for (let WQ of QQ.state.field(SQ).active) WQ.isPending && this.startQuery(WQ)
        }
        update(QQ) {
          let WQ = QQ.state.field(SQ),
            XQ = QQ.state.facet(UQ);
          if (!QQ.selectionSet && !QQ.docChanged && QQ.startState.field(SQ) == WQ) return;
          let wQ = QQ.transactions.some((QQ => {
            let WQ = uQ(QQ, XQ);
            return 8 & WQ || (QQ.selection || QQ.docChanged) && !(3 & WQ)
          }));
          for (let sQ = 0; sQ < this.running.length; sQ++) {
            let WQ = this.running[sQ];
            if (wQ || WQ.context.abortOnDocChange && QQ.docChanged || WQ.updates.length + QQ.transactions.length > 50 && Date.now() - WQ.time > 1e3) {
              for (let QQ of WQ.context.abortListeners) try {
                QQ()
              } catch (zQ) {
                (0, qQ.eb)(this.view.state, zQ)
              }
              WQ.context.abortListeners = null, this.running.splice(sQ--, 1)
            } else WQ.updates.push(...QQ.transactions)
          }
          this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), QQ.transactions.some((QQ => QQ.effects.some((QQ => QQ.is(VQ))))) && (this.pendingStart = !0);
          let TQ = this.pendingStart ? 50 : XQ.activateOnTypingDelay;
          if (this.debounceUpdate = WQ.active.some((QQ => QQ.isPending && !this.running.some((WQ => WQ.active.source == QQ.source)))) ? setTimeout((() => this.startUpdate()), TQ) : -1, 0 != this.composing)
            for (let qQ of QQ.transactions) qQ.isUserEvent("input.type") ? this.composing = 2 : 2 == this.composing && qQ.selection && (this.composing = 3)
        }
        startUpdate() {
          this.debounceUpdate = -1, this.pendingStart = !1;
          let {
            state: QQ
          } = this.view, WQ = QQ.field(SQ);
          for (let XQ of WQ.active) XQ.isPending && !this.running.some((QQ => QQ.active.source == XQ.source)) && this.startQuery(XQ);
          this.running.length && WQ.open && WQ.open.disabled && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(UQ).updateSyncTime))
        }
        startQuery(QQ) {
          let {
            state: WQ
          } = this.view, XQ = JQ(WQ), wQ = new zQ(WQ, XQ, QQ.explicit, this.view), TQ = new xQ(QQ, wQ);
          this.running.push(TQ), Promise.resolve(QQ.source(wQ)).then((QQ => {
            TQ.context.aborted || (TQ.done = QQ || null, this.scheduleAccept())
          }), (QQ => {
            this.view.dispatch({
              effects: DQ.of(null)
            }), (0, qQ.eb)(this.view.state, QQ)
          }))
        }
        scheduleAccept() {
          this.running.every((QQ => void 0 !== QQ.done)) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(UQ).updateSyncTime))
        }
        accept() {
          var QQ;
          this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
          let WQ = [],
            XQ = this.view.state.facet(UQ),
            wQ = this.view.state.field(SQ);
          for (let qQ = 0; qQ < this.running.length; qQ++) {
            let TQ = this.running[qQ];
            if (void 0 === TQ.done) continue;
            if (this.running.splice(qQ--, 1), TQ.done) {
              let wQ = JQ(TQ.updates.length ? TQ.updates[0].startState : this.view.state),
                qQ = Math.min(wQ, TQ.done.from + (TQ.active.explicit ? 0 : 1)),
                zQ = new kQ(TQ.active.source, TQ.active.explicit, qQ, TQ.done, TQ.done.from, null !== (QQ = TQ.done.to) && void 0 !== QQ ? QQ : wQ);
              for (let QQ of TQ.updates) zQ = zQ.update(QQ, XQ);
              if (zQ.hasResult()) {
                WQ.push(zQ);
                continue
              }
            }
            let zQ = wQ.active.find((QQ => QQ.source == TQ.active.source));
            if (zQ && zQ.isPending)
              if (null == TQ.done) {
                let QQ = new LQ(TQ.active.source, 0);
                for (let WQ of TQ.updates) QQ = QQ.update(WQ, XQ);
                QQ.isPending || WQ.push(QQ)
              } else this.startQuery(zQ)
          }(WQ.length || wQ.open && wQ.open.disabled) && this.view.dispatch({
            effects: fQ.of(WQ)
          })
        }
      }, {
        eventHandlers: {
          blur(QQ) {
            let WQ = this.view.state.field(SQ, !1);
            if (WQ && WQ.tooltip && this.view.state.facet(UQ).closeOnBlur) {
              let XQ = WQ.open && (0, qQ.L)(this.view, WQ.open.tooltip);
              XQ && XQ.dom.contains(QQ.relatedTarget) || setTimeout((() => this.view.dispatch({
                effects: DQ.of(null)
              })), 10)
            }
          },
          compositionstart() {
            this.composing = 1
          },
          compositionend() {
            3 == this.composing && setTimeout((() => this.view.dispatch({
              effects: VQ.of(!1)
            })), 20), this.composing = 0
          }
        }
      }),
      NQ = "object" == typeof navigator && /Win/.test(navigator.platform),
      ZQ = wQ.t.highest(qQ.k.domEventHandlers({
        keydown(QQ, WQ) {
          let XQ = WQ.state.field(SQ, !1);
          if (!XQ || !XQ.open || XQ.open.disabled || XQ.open.selected < 0 || QQ.key.length > 1 || QQ.ctrlKey && (!NQ || !QQ.altKey) || QQ.metaKey) return !1;
          let wQ = XQ.open.options[XQ.open.selected],
            qQ = XQ.active.find((QQ => QQ.source == wQ.source)),
            TQ = wQ.completion.commitCharacters || qQ.result.commitCharacters;
          return TQ && TQ.indexOf(QQ.key) > -1 && tQ(WQ, wQ), !1
        }
      })),
      OQ = qQ.k.baseTheme({
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
    class KQ {
      constructor(QQ, WQ, XQ, wQ) {
        this.field = QQ, this.line = WQ, this.from = XQ, this.to = wQ
      }
    }
    class mQ {
      constructor(QQ, WQ, XQ) {
        this.field = QQ, this.from = WQ, this.to = XQ
      }
      map(QQ) {
        let WQ = QQ.mapPos(this.from, -1, wQ.s.TrackDel),
          XQ = QQ.mapPos(this.to, 1, wQ.s.TrackDel);
        return null == WQ || null == XQ ? null : new mQ(this.field, WQ, XQ)
      }
    }
    class MQ {
      constructor(QQ, WQ) {
        this.lines = QQ, this.fieldPositions = WQ
      }
      instantiate(QQ, WQ) {
        let XQ = [],
          wQ = [WQ],
          qQ = QQ.doc.lineAt(WQ),
          zQ = /^\s*/.exec(qQ.text)[0];
        for (let FQ of this.lines) {
          if (XQ.length) {
            let XQ = zQ,
              qQ = /^\t*/.exec(FQ)[0].length;
            for (let WQ = 0; WQ < qQ; WQ++) XQ += QQ.facet(TQ.V);
            wQ.push(WQ + XQ.length - qQ), FQ = XQ + FQ.slice(qQ)
          }
          XQ.push(FQ), WQ += FQ.length + 1
        }
        let sQ = this.fieldPositions.map((QQ => new mQ(QQ.field, wQ[QQ.line] + QQ.from, wQ[QQ.line] + QQ.to)));
        return {
          text: XQ,
          Qy: sQ
        }
      }
      static parse(QQ) {
        let WQ, XQ = [],
          wQ = [],
          qQ = [];
        for (let TQ of QQ.split(/\r\n?|\n/)) {
          for (; WQ = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(TQ);) {
            let QQ = WQ[1] ? +WQ[1] : null,
              zQ = WQ[2] || WQ[3] || "",
              sQ = -1,
              FQ = zQ.replace(/\\[{}]/g, (QQ => QQ[1]));
            for (let WQ = 0; WQ < XQ.length; WQ++)(null != QQ ? XQ[WQ].seq == QQ : FQ && XQ[WQ].name == FQ) && (sQ = WQ);
            if (sQ < 0) {
              let WQ = 0;
              for (; WQ < XQ.length && (null == QQ || null != XQ[WQ].seq && XQ[WQ].seq < QQ);) WQ++;
              XQ.splice(WQ, 0, {
                seq: QQ,
                name: FQ
              }), sQ = WQ;
              for (let QQ of qQ) QQ.field >= sQ && QQ.field++
            }
            for (let XQ of qQ)
              if (XQ.line == wQ.length && XQ.from > WQ.index) {
                let QQ = WQ[2] ? 3 + (WQ[1] || "").length : 2;
                XQ.from -= QQ, XQ.to -= QQ
              } qQ.push(new KQ(sQ, wQ.length, WQ.index, WQ.index + FQ.length)), TQ = TQ.slice(0, WQ.index) + zQ + TQ.slice(WQ.index + WQ[0].length)
          }
          TQ = TQ.replace(/\\([{}])/g, ((QQ, WQ, XQ) => {
            for (let TQ of qQ) TQ.line == wQ.length && TQ.from > XQ && (TQ.from--, TQ.to--);
            return WQ
          })), wQ.push(TQ)
        }
        return new MQ(wQ, qQ)
      }
    }
    let QW = qQ.e.widget({
        widget: new class extends qQ.u {
          toDOM() {
            let QQ = document.createElement("span");
            return QQ.className = "cm-snippetFieldPosition", QQ
          }
          ignoreEvent() {
            return !1
          }
        }
      }),
      WW = qQ.e.mark({
        class: "cm-snippetField"
      });
    class XW {
      constructor(QQ, WQ) {
        this.Qy = QQ, this.active = WQ, this.deco = qQ.e.set(QQ.map((QQ => (QQ.from == QQ.to ? QW : WW).range(QQ.from, QQ.to))), !0)
      }
      map(QQ) {
        let WQ = [];
        for (let XQ of this.Qy) {
          let wQ = XQ.map(QQ);
          if (!wQ) return null;
          WQ.push(wQ)
        }
        return new XW(WQ, this.active)
      }
      selectionInsideField(QQ) {
        return QQ.Qy.every((QQ => this.Qy.some((WQ => WQ.field == this.active && WQ.from <= QQ.from && WQ.to >= QQ.to))))
      }
    }
    const wW = wQ.G.define({
        map: (QQ, WQ) => QQ && QQ.map(WQ)
      }),
      qW = wQ.G.define(),
      TW = wQ.I.define({
        create: () => null,
        update(QQ, WQ) {
          for (let XQ of WQ.effects) {
            if (XQ.is(wW)) return XQ.value;
            if (XQ.is(qW) && QQ) return new XW(QQ.Qy, XQ.value)
          }
          return QQ && WQ.docChanged && (QQ = QQ.map(WQ.changes)), QQ && WQ.selection && !QQ.selectionInsideField(WQ.selection) && (QQ = null), QQ
        },
        provide: QQ => qQ.k.Tw.from(QQ, (QQ => QQ ? QQ.deco : qQ.e.none))
      });

    function zW(QQ, WQ) {
      return wQ.k.create(QQ.filter((QQ => QQ.field == WQ)).map((QQ => wQ.k.range(QQ.from, QQ.to))))
    }

    function sW(QQ) {
      let WQ = MQ.parse(QQ);
      return (QQ, XQ, qQ, TQ) => {
        let {
          text: zQ,
          Qy: sQ
        } = WQ.instantiate(QQ.state, qQ), {
          main: FQ
        } = QQ.state.selection, PQ = {
          changes: {
            from: qQ,
            to: TQ == FQ.from ? FQ.to : TQ,
            insert: wQ.M.of(zQ)
          },
          scrollIntoView: !0,
          annotations: XQ ? [IQ.of(XQ), wQ.O.userEvent.of("input.complete")] : void 0
        };
        if (sQ.length && (PQ.selection = zW(sQ, 0)), sQ.some((QQ => QQ.field > 0))) {
          let WQ = new XW(sQ, 0),
            XQ = PQ.effects = [wW.of(WQ)];
          void 0 === QQ.state.field(TW, !1) && XQ.push(wQ.G.appendConfig.of([TW, JW, IW, OQ]))
        }
        QQ.dispatch(QQ.state.update(PQ))
      }
    }

    function FW(QQ) {
      return WQ => {
        let {
          state: XQ,
          dispatch: wQ
        } = WQ, qQ = XQ.field(TW, !1);
        if (!qQ || QQ < 0 && 0 == qQ.active) return !1;
        let TQ = qQ.active + QQ,
          zQ = QQ > 0 && !qQ.Qy.some((WQ => WQ.field == TQ + QQ));
        return wQ(XQ.update({
          selection: zW(qQ.Qy, TQ),
          effects: wW.of(zQ ? null : new XW(qQ.Qy, TQ)),
          scrollIntoView: !0
        })), !0
      }
    }
    const PW = [{
        key: "Tab",
        run: FW(1),
        shift: FW(-1)
      }, {
        key: "Escape",
        run: QQ => {
          let {
            state: WQ,
            dispatch: XQ
          } = QQ;
          return !!WQ.field(TW, !1) && (XQ(WQ.update({
            effects: wW.of(null)
          })), !0)
        }
      }],
      gW = wQ.o.define({
        combine: QQ => QQ.length ? QQ[0] : PW
      }),
      JW = wQ.t.highest(qQ.$.compute([gW], (QQ => QQ.facet(gW))));

    function rW(QQ, WQ) {
      return {
        ...WQ,
        apply: sW(QQ)
      }
    }
    const IW = qQ.k.domEventHandlers({
      mousedown(QQ, WQ) {
        let XQ, wQ = WQ.state.field(TW, !1);
        if (!wQ || null == (XQ = WQ.posAtCoords({
            x: QQ.clientX,
            y: QQ.clientY
          }))) return !1;
        let qQ = wQ.Qy.find((QQ => QQ.from <= XQ && QQ.to >= XQ));
        return !(!qQ || qQ.field == wQ.active) && (WQ.dispatch({
          selection: zW(wQ.Qy, qQ.field),
          effects: wW.of(wQ.Qy.some((QQ => QQ.field > qQ.field)) ? new XW(wQ.Qy, qQ.field) : null),
          scrollIntoView: !0
        }), !0)
      }
    });
    const jW = {
        brackets: ["(", "[", "{", "'", '"'],
        before: ")]}:;>",
        stringPrefixes: []
      },
      BW = wQ.G.define({
        map(QQ, WQ) {
          let XQ = WQ.mapPos(QQ, -1, wQ.s.TrackAfter);
          return null == XQ ? void 0 : XQ
        }
      }),
      yW = new class extends wQ.C {};
    yW.startSide = 1, yW.endSide = -1;
    const VW = wQ.I.define({
      create: () => wQ.A.empty,
      update(QQ, WQ) {
        if (QQ = QQ.map(WQ.changes), WQ.selection) {
          let XQ = WQ.state.doc.lineAt(WQ.selection.main.head);
          QQ = QQ.update({
            filter: QQ => QQ >= XQ.from && QQ <= XQ.to
          })
        }
        for (let XQ of WQ.effects) XQ.is(BW) && (QQ = QQ.update({
          add: [yW.range(XQ.value, XQ.value + 1)]
        }));
        return QQ
      }
    });

    function DW() {
      return [vW, VW]
    }
    const pW = "()[]{}<>\xab\xbb\xbb\xab\uff3b\uff3d\uff5b\uff5d";

    function GW(QQ) {
      for (let WQ = 0; WQ < 16; WQ += 2)
        if (pW.charCodeAt(WQ) == QQ) return pW.charAt(WQ + 1);
      return (0, wQ.Z)(QQ < 128 ? QQ : QQ + 1)
    }

    function UW(QQ, WQ) {
      return QQ.languageDataAt("closeBrackets", WQ)[0] || jW
    }
    const bW = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      vW = qQ.k.inputHandler.of(((QQ, WQ, XQ, qQ) => {
        if ((bW ? QQ.composing : QQ.compositionStarted) || QQ.state.readOnly) return !1;
        let TQ = QQ.state.selection.main;
        if (qQ.length > 2 || 2 == qQ.length && 1 == (0, wQ.Q)((0, wQ.P)(qQ, 0)) || WQ != TQ.from || XQ != TQ.to) return !1;
        let zQ = function(QQ, WQ) {
          let XQ = UW(QQ, QQ.selection.main.head),
            qQ = XQ.brackets || jW.brackets;
          for (let TQ of qQ) {
            let zQ = GW((0, wQ.P)(TQ, 0));
            if (WQ == TQ) return zQ == TQ ? iW(QQ, TQ, qQ.indexOf(TQ + TQ + TQ) > -1, XQ) : lW(QQ, TQ, zQ, XQ.before || jW.before);
            if (WQ == zQ && HW(QQ, QQ.selection.main.from)) return hW(QQ, TQ, zQ)
          }
          return null
        }(QQ.state, qQ);
        return !!zQ && (QQ.dispatch(zQ), !0)
      })),
      dW = [{
        key: "Backspace",
        run: QQ => {
          let {
            state: WQ,
            dispatch: XQ
          } = QQ;
          if (WQ.readOnly) return !1;
          let qQ = UW(WQ, WQ.selection.main.head).brackets || jW.brackets,
            TQ = null,
            zQ = WQ.changeByRange((QQ => {
              if (QQ.empty) {
                let XQ = function(QQ, WQ) {
                  let XQ = QQ.sliceString(WQ - 2, WQ);
                  return (0, wQ.Q)((0, wQ.P)(XQ, 0)) == XQ.length ? XQ : XQ.slice(1)
                }(WQ.doc, QQ.head);
                for (let TQ of qQ)
                  if (TQ == XQ && aW(WQ.doc, QQ.head) == GW((0, wQ.P)(TQ, 0))) return {
                    changes: {
                      from: QQ.head - TQ.length,
                      to: QQ.head + TQ.length
                    },
                    range: wQ.k.cursor(QQ.head - TQ.length)
                  }
              }
              return {
                range: TQ = QQ
              }
            }));
          return TQ || XQ(WQ.update(zQ, {
            scrollIntoView: !0,
            userEvent: "delete.backward"
          })), !TQ
        }
      }];

    function HW(QQ, WQ) {
      let XQ = !1;
      return QQ.field(VW).between(0, QQ.doc.length, (QQ => {
        QQ == WQ && (XQ = !0)
      })), XQ
    }

    function aW(QQ, WQ) {
      let XQ = QQ.sliceString(WQ, WQ + 2);
      return XQ.slice(0, (0, wQ.Q)((0, wQ.P)(XQ, 0)))
    }

    function lW(QQ, WQ, XQ, qQ) {
      let TQ = null,
        zQ = QQ.changeByRange((zQ => {
          if (!zQ.empty) return {
            changes: [{
              insert: WQ,
              from: zQ.from
            }, {
              insert: XQ,
              from: zQ.to
            }],
            effects: BW.of(zQ.to + WQ.length),
            range: wQ.k.range(zQ.anchor + WQ.length, zQ.head + WQ.length)
          };
          let sQ = aW(QQ.doc, zQ.head);
          return !sQ || /\s/.test(sQ) || qQ.indexOf(sQ) > -1 ? {
            changes: {
              insert: WQ + XQ,
              from: zQ.head
            },
            effects: BW.of(zQ.head + WQ.length),
            range: wQ.k.cursor(zQ.head + WQ.length)
          } : {
            range: TQ = zQ
          }
        }));
      return TQ ? null : QQ.update(zQ, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function hW(QQ, WQ, XQ) {
      let qQ = null,
        TQ = QQ.changeByRange((WQ => WQ.empty && aW(QQ.doc, WQ.head) == XQ ? {
          changes: {
            from: WQ.head,
            to: WQ.head + XQ.length,
            insert: XQ
          },
          range: wQ.k.cursor(WQ.head + XQ.length)
        } : qQ = {
          range: WQ
        }));
      return qQ ? null : QQ.update(TQ, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function iW(QQ, WQ, XQ, qQ) {
      let zQ = qQ.stringPrefixes || jW.stringPrefixes,
        sQ = null,
        FQ = QQ.changeByRange((qQ => {
          if (!qQ.empty) return {
            changes: [{
              insert: WQ,
              from: qQ.from
            }, {
              insert: WQ,
              from: qQ.to
            }],
            effects: BW.of(qQ.to + WQ.length),
            range: wQ.k.range(qQ.anchor + WQ.length, qQ.head + WQ.length)
          };
          let FQ, PQ = qQ.head,
            gQ = aW(QQ.doc, PQ);
          if (gQ == WQ) {
            if (cW(QQ, PQ)) return {
              changes: {
                insert: WQ + WQ,
                from: PQ
              },
              effects: BW.of(PQ + WQ.length),
              range: wQ.k.cursor(PQ + WQ.length)
            };
            if (HW(QQ, PQ)) {
              let qQ = XQ && QQ.sliceDoc(PQ, PQ + 3 * WQ.length) == WQ + WQ + WQ ? WQ + WQ + WQ : WQ;
              return {
                changes: {
                  from: PQ,
                  to: PQ + qQ.length,
                  insert: qQ
                },
                range: wQ.k.cursor(PQ + qQ.length)
              }
            }
          } else {
            if (XQ && QQ.sliceDoc(PQ - 2 * WQ.length, PQ) == WQ + WQ && (FQ = AW(QQ, PQ - 2 * WQ.length, zQ)) > -1 && cW(QQ, FQ)) return {
              changes: {
                insert: WQ + WQ + WQ + WQ,
                from: PQ
              },
              effects: BW.of(PQ + WQ.length),
              range: wQ.k.cursor(PQ + WQ.length)
            };
            if (QQ.charCategorizer(PQ)(gQ) != wQ.g.Word && AW(QQ, PQ, zQ) > -1 && ! function(QQ, WQ, XQ, wQ) {
                let qQ = (0, TQ.fb)(QQ).resolveInner(WQ, -1),
                  zQ = wQ.reduce(((QQ, WQ) => Math.max(QQ, WQ.length)), 0);
                for (let TQ = 0; TQ < 5; TQ++) {
                  let TQ = QQ.sliceDoc(qQ.from, Math.min(qQ.to, qQ.from + XQ.length + zQ)),
                    sQ = TQ.indexOf(XQ);
                  if (!sQ || sQ > -1 && wQ.indexOf(TQ.slice(0, sQ)) > -1) {
                    let WQ = qQ.firstChild;
                    for (; WQ && WQ.from == qQ.from && WQ.to - WQ.from > XQ.length + sQ;) {
                      if (QQ.sliceDoc(WQ.to - XQ.length, WQ.to) == XQ) return !1;
                      WQ = WQ.firstChild
                    }
                    return !0
                  }
                  let FQ = qQ.to == WQ && qQ.parent;
                  if (!FQ) break;
                  qQ = FQ
                }
                return !1
              }(QQ, PQ, WQ, zQ)) return {
              changes: {
                insert: WQ + WQ,
                from: PQ
              },
              effects: BW.of(PQ + WQ.length),
              range: wQ.k.cursor(PQ + WQ.length)
            }
          }
          return {
            range: sQ = qQ
          }
        }));
      return sQ ? null : QQ.update(FQ, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function cW(QQ, WQ) {
      let XQ = (0, TQ.fb)(QQ).resolveInner(WQ + 1);
      return XQ.parent && XQ.from == WQ
    }

    function AW(QQ, WQ, XQ) {
      let qQ = QQ.charCategorizer(WQ);
      if (qQ(QQ.sliceDoc(WQ - 1, WQ)) != wQ.g.Word) return WQ;
      for (let TQ of XQ) {
        let XQ = WQ - TQ.length;
        if (QQ.sliceDoc(XQ, WQ) == TQ && qQ(QQ.sliceDoc(XQ - 1, XQ)) != wQ.g.Word) return XQ
      }
      return -1
    }

    function RW() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [ZQ, SQ, UQ.of(QQ), YQ, CW, OQ]
    }
    const EW = [{
        key: "Ctrl-Space",
        run: nQ
      }, {
        mac: "Alt-`",
        run: nQ
      }, {
        mac: "Alt-i",
        run: nQ
      }, {
        key: "Escape",
        run: QQ => {
          let WQ = QQ.state.field(SQ, !1);
          return !(!WQ || !WQ.active.some((QQ => 0 != QQ.state))) && (QQ.dispatch({
            effects: DQ.of(null)
          }), !0)
        }
      }, {
        key: "ArrowDown",
        run: eQ(!0)
      }, {
        key: "ArrowUp",
        run: eQ(!1)
      }, {
        key: "PageDown",
        run: eQ(!0, "page")
      }, {
        key: "PageUp",
        run: eQ(!1, "page")
      }, {
        key: "Enter",
        run: QQ => {
          let WQ = QQ.state.field(SQ, !1);
          return !(QQ.state.readOnly || !WQ || !WQ.open || WQ.open.selected < 0 || WQ.open.disabled || Date.now() - WQ.open.timestamp < QQ.state.facet(UQ).interactionDelay) && tQ(QQ, WQ.open.options[WQ.open.selected])
        }
      }],
      CW = wQ.t.highest(qQ.$.computeN([UQ], (QQ => QQ.facet(UQ).defaultKeymap ? [EW] : [])))
  },
  41685: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => PQ,
      d: () => rQ,
      e: () => gQ,
      i: () => JQ
    });
    var wQ = XQ(41550);
    class qQ {
      constructor(QQ, WQ, XQ, wQ) {
        this.origin = QQ, this.changes = WQ, this.effects = XQ, this.clientID = wQ
      }
    }
    class TQ {
      constructor(QQ, WQ) {
        this.version = QQ, this.unconfirmed = WQ
      }
    }
    const zQ = wQ.o.define({
        combine(QQ) {
          let WQ = (0, wQ.U)(QQ, {
            startVersion: 0,
            clientID: null,
            sharedEffects: () => []
          }, {
            generatedID: QQ => QQ
          });
          return null == WQ.clientID && (WQ.clientID = QQ.length && QQ[0].generatedID || ""), WQ
        }
      }),
      sQ = wQ.b.define(),
      FQ = wQ.I.define({
        create: QQ => new TQ(QQ.facet(zQ).startVersion, []),
        update(QQ, WQ) {
          let XQ = WQ.annotation(sQ);
          if (XQ) return XQ;
          let {
            sharedEffects: wQ,
            clientID: FQ
          } = WQ.startState.facet(zQ), PQ = wQ(WQ);
          return PQ.length || !WQ.changes.empty ? new TQ(QQ.version, QQ.unconfirmed.concat(new qQ(WQ, WQ.changes, PQ, FQ))) : QQ
        }
      });

    function PQ() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [FQ, zQ.of(Object.assign({
        generatedID: Math.floor(1e9 * Math.random()).toString(36)
      }, QQ))]
    }

    function gQ(QQ, WQ) {
      let {
        version: XQ,
        unconfirmed: PQ
      } = QQ.field(FQ), {
        clientID: gQ
      } = QQ.facet(zQ);
      XQ += WQ.length;
      let JQ = [],
        rQ = null,
        IQ = 0;
      for (let qQ of WQ) {
        let QQ = IQ < PQ.length ? PQ[IQ] : null;
        QQ && QQ.clientID == qQ.clientID ? (rQ && (rQ = rQ.map(QQ.changes, !0)), JQ = wQ.G.mapEffects(JQ, qQ.changes), IQ++) : (JQ = wQ.G.mapEffects(JQ, qQ.changes), qQ.effects && (JQ = JQ.concat(qQ.effects)), rQ = rQ ? rQ.compose(qQ.changes) : qQ.changes)
      }
      if (IQ && (PQ = PQ.slice(IQ)), PQ.length && (rQ && (PQ = PQ.map((QQ => {
          let WQ = QQ.changes.map(rQ);
          return rQ = rQ.map(QQ.changes, !0), new qQ(QQ.origin, WQ, wQ.G.mapEffects(QQ.effects, rQ), gQ)
        }))), JQ.length)) {
        let QQ = PQ.reduce(((QQ, WQ) => QQ.compose(WQ.changes)), wQ.ChangeSet.empty(PQ[0].changes.length));
        JQ = wQ.G.mapEffects(JQ, QQ)
      }
      return rQ ? QQ.update({
        changes: rQ,
        effects: JQ,
        annotations: [wQ.O.addToHistory.of(!1), wQ.O.remote.of(!0), sQ.of(new TQ(XQ, PQ))],
        filter: !1
      }) : QQ.update({
        annotations: [sQ.of(new TQ(XQ, PQ))]
      })
    }

    function JQ(QQ) {
      return QQ.field(FQ).unconfirmed
    }

    function rQ(QQ) {
      return QQ.field(FQ).version
    }
  },
  41577: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => BW
    });
    var wQ = XQ(41568);
    class qQ {
      constructor(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ) {
        let PQ = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          gQ = arguments.length > 10 ? arguments[10] : void 0;
        this.p = QQ, this.stack = WQ, this.state = XQ, this.reducePos = wQ, this.pos = qQ, this.score = TQ, this.buffer = zQ, this.bufferBase = sQ, this.curContext = FQ, this.lookAhead = PQ, this.parent = gQ
      }
      toString() {
        return `[${this.stack.filter(((QQ,WQ)=>WQ%3==0)).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`
      }
      static start(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          wQ = QQ.parser.context;
        return new qQ(QQ, [], WQ, XQ, XQ, 0, [], 0, wQ ? new TQ(wQ, wQ.start) : null, 0, null)
      }
      get context() {
        return this.curContext ? this.curContext.context : null
      }
      pushState(QQ, WQ) {
        this.stack.push(this.state, WQ, this.bufferBase + this.buffer.length), this.state = QQ
      }
      reduce(QQ) {
        var WQ;
        let XQ = QQ >> 19,
          wQ = 65535 & QQ,
          {
            parser: qQ
          } = this.p,
          TQ = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos),
          zQ = qQ.dynamicPrecedence(wQ);
        if (zQ && (this.score += zQ), 0 == XQ) return this.pushState(qQ.getGoto(this.state, wQ, !0), this.reducePos), wQ < qQ.minRepeatTerm && this.storeNode(wQ, this.reducePos, this.reducePos, TQ ? 8 : 4, !0), void this.reduceContext(wQ, this.reducePos);
        let sQ = this.stack.length - 3 * (XQ - 1) - (262144 & QQ ? 6 : 0),
          FQ = sQ ? this.stack[sQ - 2] : this.p.Qy[0].from,
          PQ = this.reducePos - FQ;
        PQ >= 2e3 && !(null === (WQ = this.p.parser.nodeSet.types[wQ]) || void 0 === WQ ? void 0 : WQ.isAnonymous) && (FQ == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = PQ) : this.p.lastBigReductionSize < PQ && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = FQ, this.p.lastBigReductionSize = PQ));
        let gQ = sQ ? this.stack[sQ - 1] : 0,
          JQ = this.bufferBase + this.buffer.length - gQ;
        if (wQ < qQ.minRepeatTerm || 131072 & QQ) {
          let QQ = qQ.stateFlag(this.state, 1) ? this.pos : this.reducePos;
          this.storeNode(wQ, FQ, QQ, JQ + 4, !0)
        }
        if (262144 & QQ) this.state = this.stack[sQ];
        else {
          let QQ = this.stack[sQ - 3];
          this.state = qQ.getGoto(QQ, wQ, !0)
        }
        for (; this.stack.length > sQ;) this.stack.pop();
        this.reduceContext(wQ, FQ)
      }
      storeNode(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
          qQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (0 == QQ && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
          let QQ = this,
            wQ = this.buffer.length;
          if (0 == wQ && QQ.parent && (wQ = QQ.bufferBase - QQ.parent.bufferBase, QQ = QQ.parent), wQ > 0 && 0 == QQ.buffer[wQ - 4] && QQ.buffer[wQ - 1] > -1) {
            if (WQ == XQ) return;
            if (QQ.buffer[wQ - 2] >= WQ) return void(QQ.buffer[wQ - 2] = XQ)
          }
        }
        if (qQ && this.pos != XQ) {
          let qQ = this.buffer.length;
          if (qQ > 0 && (0 != this.buffer[qQ - 4] || this.buffer[qQ - 1] < 0)) {
            let QQ = !1;
            for (let WQ = qQ; WQ > 0 && this.buffer[WQ - 2] > XQ; WQ -= 4)
              if (this.buffer[WQ - 1] >= 0) {
                QQ = !0;
                break
              } if (QQ)
              for (; qQ > 0 && this.buffer[qQ - 2] > XQ;) this.buffer[qQ] = this.buffer[qQ - 4], this.buffer[qQ + 1] = this.buffer[qQ - 3], this.buffer[qQ + 2] = this.buffer[qQ - 2], this.buffer[qQ + 3] = this.buffer[qQ - 1], qQ -= 4, wQ > 4 && (wQ -= 4)
          }
          this.buffer[qQ] = QQ, this.buffer[qQ + 1] = WQ, this.buffer[qQ + 2] = XQ, this.buffer[qQ + 3] = wQ
        } else this.buffer.push(QQ, WQ, XQ, wQ)
      }
      shift(QQ, WQ, XQ, wQ) {
        if (131072 & QQ) this.pushState(65535 & QQ, this.pos);
        else if (0 == (262144 & QQ)) {
          let qQ = QQ,
            {
              parser: TQ
            } = this.p;
          this.pos = wQ;
          let zQ = TQ.stateFlag(qQ, 1);
          !zQ && (wQ > XQ || WQ <= TQ.maxNode) && (this.reducePos = wQ), this.pushState(qQ, zQ ? XQ : Math.min(XQ, this.reducePos)), this.shiftContext(WQ, XQ), WQ <= TQ.maxNode && this.buffer.push(WQ, XQ, wQ, 4)
        } else this.pos = wQ, this.shiftContext(WQ, XQ), WQ <= this.p.parser.maxNode && this.buffer.push(WQ, XQ, wQ, 4)
      }
      apply(QQ, WQ, XQ, wQ) {
        65536 & QQ ? this.reduce(QQ) : this.shift(QQ, WQ, XQ, wQ)
      }
      useNode(QQ, WQ) {
        let XQ = this.p.reused.length - 1;
        (XQ < 0 || this.p.reused[XQ] != QQ) && (this.p.reused.push(QQ), XQ++);
        let wQ = this.pos;
        this.reducePos = this.pos = wQ + QQ.length, this.pushState(WQ, wQ), this.buffer.push(XQ, wQ, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, QQ, this, this.p.stream.reset(this.pos - QQ.length)))
      }
      split() {
        let QQ = this,
          WQ = QQ.buffer.length;
        for (; WQ > 0 && QQ.buffer[WQ - 2] > QQ.reducePos;) WQ -= 4;
        let XQ = QQ.buffer.slice(WQ),
          wQ = QQ.bufferBase + WQ;
        for (; QQ && wQ == QQ.bufferBase;) QQ = QQ.parent;
        return new qQ(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, XQ, wQ, this.curContext, this.lookAhead, QQ)
      }
      recoverByDelete(QQ, WQ) {
        let XQ = QQ <= this.p.parser.maxNode;
        XQ && this.storeNode(QQ, this.pos, WQ, 4), this.storeNode(0, this.pos, WQ, XQ ? 8 : 4), this.pos = this.reducePos = WQ, this.score -= 190
      }
      canShift(QQ) {
        for (let WQ = new zQ(this);;) {
          let XQ = this.p.parser.stateSlot(WQ.state, 4) || this.p.parser.hasAction(WQ.state, QQ);
          if (0 == XQ) return !1;
          if (0 == (65536 & XQ)) return !0;
          WQ.reduce(XQ)
        }
      }
      recoverByInsert(QQ) {
        if (this.stack.length >= 300) return [];
        let WQ = this.p.parser.nextStates(this.state);
        if (WQ.length > 8 || this.stack.length >= 120) {
          let XQ = [];
          for (let wQ, qQ = 0; qQ < WQ.length; qQ += 2)(wQ = WQ[qQ + 1]) != this.state && this.p.parser.hasAction(wQ, QQ) && XQ.push(WQ[qQ], wQ);
          if (this.stack.length < 120)
            for (let QQ = 0; XQ.length < 8 && QQ < WQ.length; QQ += 2) {
              let wQ = WQ[QQ + 1];
              XQ.some(((QQ, WQ) => 1 & WQ && QQ == wQ)) || XQ.push(WQ[QQ], wQ)
            }
          WQ = XQ
        }
        let XQ = [];
        for (let wQ = 0; wQ < WQ.length && XQ.length < 4; wQ += 2) {
          let QQ = WQ[wQ + 1];
          if (QQ == this.state) continue;
          let qQ = this.split();
          qQ.pushState(QQ, this.pos), qQ.storeNode(0, qQ.pos, qQ.pos, 4, !0), qQ.shiftContext(WQ[wQ], this.pos), qQ.reducePos = this.pos, qQ.score -= 200, XQ.push(qQ)
        }
        return XQ
      }
      forceReduce() {
        let {
          parser: QQ
        } = this.p, WQ = QQ.stateSlot(this.state, 5);
        if (0 == (65536 & WQ)) return !1;
        if (!QQ.validAction(this.state, WQ)) {
          let XQ = WQ >> 19,
            wQ = 65535 & WQ,
            qQ = this.stack.length - 3 * XQ;
          if (qQ < 0 || QQ.getGoto(this.stack[qQ], wQ, !1) < 0) {
            let QQ = this.findForcedReduction();
            if (null == QQ) return !1;
            WQ = QQ
          }
          this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100
        }
        return this.reducePos = this.pos, this.reduce(WQ), !0
      }
      findForcedReduction() {
        let {
          parser: QQ
        } = this.p, WQ = [], XQ = (wQ, qQ) => {
          if (!WQ.includes(wQ)) return WQ.push(wQ), QQ.allActions(wQ, (WQ => {
            if (393216 & WQ);
            else if (65536 & WQ) {
              let XQ = (WQ >> 19) - qQ;
              if (XQ > 1) {
                let wQ = 65535 & WQ,
                  qQ = this.stack.length - 3 * XQ;
                if (qQ >= 0 && QQ.getGoto(this.stack[qQ], wQ, !1) >= 0) return XQ << 19 | 65536 | wQ
              }
            } else {
              let QQ = XQ(WQ, qQ + 1);
              if (null != QQ) return QQ
            }
          }))
        };
        return XQ(this.state, 0)
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
          parser: QQ
        } = this.p;
        return 65535 == QQ.data[QQ.stateSlot(this.state, 1)] && !QQ.stateSlot(this.state, 4)
      }
      restart() {
        this.storeNode(0, this.pos, this.pos, 4, !0), this.state = this.stack[0], this.stack.length = 0
      }
      sameState(QQ) {
        if (this.state != QQ.state || this.stack.length != QQ.stack.length) return !1;
        for (let WQ = 0; WQ < this.stack.length; WQ += 3)
          if (this.stack[WQ] != QQ.stack[WQ]) return !1;
        return !0
      }
      get parser() {
        return this.p.parser
      }
      dialectEnabled(QQ) {
        return this.p.parser.dialect.flags[QQ]
      }
      shiftContext(QQ, WQ) {
        this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, QQ, this, this.p.stream.reset(WQ)))
      }
      reduceContext(QQ, WQ) {
        this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, QQ, this, this.p.stream.reset(WQ)))
      }
      emitContext() {
        let QQ = this.buffer.length - 1;
        (QQ < 0 || -3 != this.buffer[QQ]) && this.buffer.push(this.curContext.hash, this.pos, this.pos, -3)
      }
      emitLookAhead() {
        let QQ = this.buffer.length - 1;
        (QQ < 0 || -4 != this.buffer[QQ]) && this.buffer.push(this.lookAhead, this.pos, this.pos, -4)
      }
      updateContext(QQ) {
        if (QQ != this.curContext.context) {
          let WQ = new TQ(this.curContext.tracker, QQ);
          WQ.hash != this.curContext.hash && this.emitContext(), this.curContext = WQ
        }
      }
      setLookAhead(QQ) {
        return !(QQ <= this.lookAhead) && (this.emitLookAhead(), this.lookAhead = QQ, !0)
      }
      close() {
        this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead()
      }
    }
    class TQ {
      constructor(QQ, WQ) {
        this.tracker = QQ, this.context = WQ, this.hash = QQ.strict ? QQ.hash(WQ) : 0
      }
    }
    class zQ {
      constructor(QQ) {
        this.start = QQ, this.state = QQ.state, this.stack = QQ.stack, this.base = this.stack.length
      }
      reduce(QQ) {
        let WQ = 65535 & QQ,
          XQ = QQ >> 19;
        0 == XQ ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= 3 * (XQ - 1);
        let wQ = this.start.p.parser.getGoto(this.stack[this.base - 3], WQ, !0);
        this.state = wQ
      }
    }
    class sQ {
      constructor(QQ, WQ, XQ) {
        this.stack = QQ, this.pos = WQ, this.index = XQ, this.buffer = QQ.buffer, 0 == this.index && this.maybeNext()
      }
      static create(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QQ.bufferBase + QQ.buffer.length;
        return new sQ(QQ, WQ, WQ - QQ.bufferBase)
      }
      maybeNext() {
        let QQ = this.stack.parent;
        null != QQ && (this.index = this.stack.bufferBase - QQ.bufferBase, this.stack = QQ, this.buffer = QQ.buffer)
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
        return new sQ(this.stack, this.pos, this.index)
      }
    }

    function FQ(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uint16Array;
      if ("string" != typeof QQ) return QQ;
      let XQ = null;
      for (let wQ = 0, qQ = 0; wQ < QQ.length;) {
        let TQ = 0;
        for (;;) {
          let WQ = QQ.charCodeAt(wQ++),
            XQ = !1;
          if (126 == WQ) {
            TQ = 65535;
            break
          }
          WQ >= 92 && WQ--, WQ >= 34 && WQ--;
          let qQ = WQ - 32;
          if (qQ >= 46 && (qQ -= 46, XQ = !0), TQ += qQ, XQ) break;
          TQ *= 46
        }
        XQ ? XQ[qQ++] = TQ : XQ = new WQ(TQ)
      }
      return XQ
    }
    class PQ {
      constructor() {
        this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0
      }
    }
    const gQ = new PQ;
    class JQ {
      constructor(QQ, WQ) {
        this.input = QQ, this.Qy = WQ, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = gQ, this.rangeIndex = 0, this.pos = this.chunkPos = WQ[0].from, this.range = WQ[0], this.end = WQ[WQ.length - 1].to, this.readNext()
      }
      resolveOffset(QQ, WQ) {
        let XQ = this.range,
          wQ = this.rangeIndex,
          qQ = this.pos + QQ;
        for (; qQ < XQ.from;) {
          if (!wQ) return null;
          let QQ = this.Qy[--wQ];
          qQ -= XQ.from - QQ.to, XQ = QQ
        }
        for (; WQ < 0 ? qQ > XQ.to : qQ >= XQ.to;) {
          if (wQ == this.Qy.length - 1) return null;
          let QQ = this.Qy[++wQ];
          qQ += QQ.from - XQ.to, XQ = QQ
        }
        return qQ
      }
      clipPos(QQ) {
        if (QQ >= this.range.from && QQ < this.range.to) return QQ;
        for (let WQ of this.Qy)
          if (WQ.to > QQ) return Math.max(QQ, WQ.from);
        return this.end
      }
      peek(QQ) {
        let WQ, XQ, wQ = this.chunkOff + QQ;
        if (wQ >= 0 && wQ < this.chunk.length) WQ = this.pos + QQ, XQ = this.chunk.charCodeAt(wQ);
        else {
          let wQ = this.resolveOffset(QQ, 1);
          if (null == wQ) return -1;
          if (WQ = wQ, WQ >= this.chunk2Pos && WQ < this.chunk2Pos + this.chunk2.length) XQ = this.chunk2.charCodeAt(WQ - this.chunk2Pos);
          else {
            let QQ = this.rangeIndex,
              wQ = this.range;
            for (; wQ.to <= WQ;) wQ = this.Qy[++QQ];
            this.chunk2 = this.input.chunk(this.chunk2Pos = WQ), WQ + this.chunk2.length > wQ.to && (this.chunk2 = this.chunk2.slice(0, wQ.to - WQ)), XQ = this.chunk2.charCodeAt(0)
          }
        }
        return WQ >= this.token.lookAhead && (this.token.lookAhead = WQ + 1), XQ
      }
      acceptToken(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          XQ = WQ ? this.resolveOffset(WQ, -1) : this.pos;
        if (null == XQ || XQ < this.token.start) throw new RangeError("Token end out of bounds");
        this.token.value = QQ, this.token.end = XQ
      }
      acceptTokenTo(QQ, WQ) {
        this.token.value = QQ, this.token.end = WQ
      }
      getChunk() {
        if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
          let {
            chunk: QQ,
            chunkPos: WQ
          } = this;
          this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = QQ, this.chunk2Pos = WQ, this.chunkOff = this.pos - this.chunkPos
        } else {
          this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
          let QQ = this.input.chunk(this.pos),
            WQ = this.pos + QQ.length;
          this.chunk = WQ > this.range.to ? QQ.slice(0, this.range.to - this.pos) : QQ, this.chunkPos = this.pos, this.chunkOff = 0
        }
      }
      readNext() {
        return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff)
      }
      advance() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        for (this.chunkOff += QQ; this.pos + QQ >= this.range.to;) {
          if (this.rangeIndex == this.Qy.length - 1) return this.setDone();
          QQ -= this.range.to - this.pos, this.range = this.Qy[++this.rangeIndex], this.pos = this.range.from
        }
        return this.pos += QQ, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext()
      }
      setDone() {
        return this.pos = this.chunkPos = this.end, this.range = this.Qy[this.rangeIndex = this.Qy.length - 1], this.chunk = "", this.next = -1
      }
      reset(QQ, WQ) {
        if (WQ ? (this.token = WQ, WQ.start = QQ, WQ.lookAhead = QQ + 1, WQ.value = WQ.extended = -1) : this.token = gQ, this.pos != QQ) {
          if (this.pos = QQ, QQ == this.end) return this.setDone(), this;
          for (; QQ < this.range.from;) this.range = this.Qy[--this.rangeIndex];
          for (; QQ >= this.range.to;) this.range = this.Qy[++this.rangeIndex];
          QQ >= this.chunkPos && QQ < this.chunkPos + this.chunk.length ? this.chunkOff = QQ - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext()
        }
        return this
      }
      read(QQ, WQ) {
        if (QQ >= this.chunkPos && WQ <= this.chunkPos + this.chunk.length) return this.chunk.slice(QQ - this.chunkPos, WQ - this.chunkPos);
        if (QQ >= this.chunk2Pos && WQ <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(QQ - this.chunk2Pos, WQ - this.chunk2Pos);
        if (QQ >= this.range.from && WQ <= this.range.to) return this.input.read(QQ, WQ);
        let XQ = "";
        for (let wQ of this.Qy) {
          if (wQ.from >= WQ) break;
          wQ.to > QQ && (XQ += this.input.read(Math.max(wQ.from, QQ), Math.min(wQ.to, WQ)))
        }
        return XQ
      }
    }
    class rQ {
      constructor(QQ, WQ) {
        this.data = QQ, this.id = WQ
      }
      token(QQ, WQ) {
        let {
          parser: XQ
        } = WQ.p;
        BQ(this.data, QQ, WQ, this.id, XQ.data, XQ.tokenPrecTable)
      }
    }
    rQ.prototype.contextual = rQ.prototype.fallback = rQ.prototype.extend = !1;
    class IQ {
      constructor(QQ, WQ, XQ) {
        this.precTable = WQ, this.elseToken = XQ, this.data = "string" == typeof QQ ? FQ(QQ) : QQ
      }
      token(QQ, WQ) {
        let XQ = QQ.pos,
          wQ = 0;
        for (;;) {
          let XQ = QQ.next < 0,
            qQ = QQ.resolveOffset(1, 1);
          if (BQ(this.data, QQ, WQ, 0, this.data, this.precTable), QQ.token.value > -1) break;
          if (null == this.elseToken) return;
          if (XQ || wQ++, null == qQ) break;
          QQ.reset(qQ, QQ.token)
        }
        wQ && (QQ.reset(XQ, QQ.token), QQ.acceptToken(this.elseToken, wQ))
      }
    }
    IQ.prototype.contextual = rQ.prototype.fallback = rQ.prototype.extend = !1;
    class jQ {
      constructor(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.token = QQ, this.contextual = !!WQ.contextual, this.fallback = !!WQ.fallback, this.extend = !!WQ.extend
      }
    }

    function BQ(QQ, WQ, XQ, wQ, qQ, TQ) {
      let zQ = 0,
        sQ = 1 << wQ,
        {
          dialect: FQ
        } = XQ.p.parser;
      QQ: for (; 0 != (sQ & QQ[zQ]);) {
        let XQ = QQ[zQ + 1];
        for (let JQ = zQ + 3; JQ < XQ; JQ += 2)
          if ((QQ[JQ + 1] & sQ) > 0) {
            let XQ = QQ[JQ];
            if (FQ.allows(XQ) && (-1 == WQ.token.value || WQ.token.value == XQ || VQ(XQ, WQ.token.value, qQ, TQ))) {
              WQ.acceptToken(XQ);
              break
            }
          } let wQ = WQ.next,
          PQ = 0,
          gQ = QQ[zQ + 2];
        if (!(WQ.next < 0 && gQ > PQ && 65535 == QQ[XQ + 3 * gQ - 3])) {
          for (; PQ < gQ;) {
            let qQ = PQ + gQ >> 1,
              TQ = XQ + qQ + (qQ << 1),
              sQ = QQ[TQ],
              FQ = QQ[TQ + 1] || 65536;
            if (wQ < sQ) gQ = qQ;
            else {
              if (!(wQ >= FQ)) {
                zQ = QQ[TQ + 2], WQ.advance();
                continue QQ
              }
              PQ = qQ + 1
            }
          }
          break
        }
        zQ = QQ[XQ + 3 * gQ - 1]
      }
    }

    function yQ(QQ, WQ, XQ) {
      for (let wQ, qQ = WQ; 65535 != (wQ = QQ[qQ]); qQ++)
        if (wQ == XQ) return qQ - WQ;
      return -1
    }

    function VQ(QQ, WQ, XQ, wQ) {
      let qQ = yQ(XQ, wQ, WQ);
      return qQ < 0 || yQ(XQ, wQ, QQ) < qQ
    }
    const DQ = "undefined" != typeof process && {
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
    let pQ = null;

    function GQ(QQ, WQ, XQ) {
      let qQ = QQ.cursor(wQ.g.IncludeAnonymous);
      for (qQ.moveTo(WQ);;)
        if (!(XQ < 0 ? qQ.childBefore(WQ) : qQ.childAfter(WQ)))
          for (;;) {
            if ((XQ < 0 ? qQ.to < WQ : qQ.from > WQ) && !qQ.type.isError) return XQ < 0 ? Math.max(0, Math.min(qQ.to - 1, WQ - 25)) : Math.min(QQ.length, Math.max(qQ.from + 1, WQ + 25));
            if (XQ < 0 ? qQ.prevSibling() : qQ.nextSibling()) break;
            if (!qQ.parent()) return XQ < 0 ? 0 : QQ.length
          }
    }
    class UQ {
      constructor(QQ, WQ) {
        this.fragments = QQ, this.nodeSet = WQ, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment()
      }
      nextFragment() {
        let QQ = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
        if (QQ) {
          for (this.safeFrom = QQ.openStart ? GQ(QQ.tree, QQ.from + QQ.offset, 1) - QQ.offset : QQ.from, this.safeTo = QQ.openEnd ? GQ(QQ.tree, QQ.to + QQ.offset, -1) - QQ.offset : QQ.to; this.trees.length;) this.trees.pop(), this.start.pop(), this.index.pop();
          this.trees.push(QQ.tree), this.start.push(-QQ.offset), this.index.push(0), this.nextStart = this.safeFrom
        } else this.nextStart = 1e9
      }
      nodeAt(QQ) {
        if (QQ < this.nextStart) return null;
        for (; this.fragment && this.safeTo <= QQ;) this.nextFragment();
        if (!this.fragment) return null;
        for (;;) {
          let WQ = this.trees.length - 1;
          if (WQ < 0) return this.nextFragment(), null;
          let XQ = this.trees[WQ],
            qQ = this.index[WQ];
          if (qQ == XQ.children.length) {
            this.trees.pop(), this.start.pop(), this.index.pop();
            continue
          }
          let TQ = XQ.children[qQ],
            zQ = this.start[WQ] + XQ.positions[qQ];
          if (zQ > QQ) return this.nextStart = zQ, null;
          if (TQ instanceof wQ.x) {
            if (zQ == QQ) {
              if (zQ < this.safeFrom) return null;
              let QQ = zQ + TQ.length;
              if (QQ <= this.safeTo) {
                let WQ = TQ.prop(wQ.k.lookAhead);
                if (!WQ || QQ + WQ < this.fragment.to) return TQ
              }
            }
            this.index[WQ]++, zQ + TQ.length >= Math.max(this.safeFrom, QQ) && (this.trees.push(TQ), this.start.push(zQ), this.index.push(0))
          } else this.index[WQ]++, this.nextStart = zQ + TQ.length
        }
      }
    }
    class bQ {
      constructor(QQ, WQ) {
        this.stream = WQ, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = QQ.tokenizers.map((QQ => new PQ))
      }
      getActions(QQ) {
        let WQ = 0,
          XQ = null,
          {
            parser: wQ
          } = QQ.p,
          {
            tokenizers: qQ
          } = wQ,
          TQ = wQ.stateSlot(QQ.state, 3),
          zQ = QQ.curContext ? QQ.curContext.hash : 0,
          sQ = 0;
        for (let FQ = 0; FQ < qQ.length; FQ++) {
          if (0 == (1 << FQ & TQ)) continue;
          let wQ = qQ[FQ],
            PQ = this.tokens[FQ];
          if ((!XQ || wQ.fallback) && ((wQ.contextual || PQ.start != QQ.pos || PQ.mask != TQ || PQ.context != zQ) && (this.updateCachedToken(PQ, wQ, QQ), PQ.mask = TQ, PQ.context = zQ), PQ.lookAhead > PQ.end + 25 && (sQ = Math.max(PQ.lookAhead, sQ)), 0 != PQ.value)) {
            let qQ = WQ;
            if (PQ.extended > -1 && (WQ = this.addActions(QQ, PQ.extended, PQ.end, WQ)), WQ = this.addActions(QQ, PQ.value, PQ.end, WQ), !wQ.extend && (XQ = PQ, WQ > qQ)) break
          }
        }
        for (; this.actions.length > WQ;) this.actions.pop();
        return sQ && QQ.setLookAhead(sQ), XQ || QQ.pos != this.stream.end || (XQ = new PQ, XQ.value = QQ.p.parser.eofTerm, XQ.start = XQ.end = QQ.pos, WQ = this.addActions(QQ, XQ.value, XQ.end, WQ)), this.mainToken = XQ, this.actions
      }
      getMainToken(QQ) {
        if (this.mainToken) return this.mainToken;
        let WQ = new PQ,
          {
            pos: XQ,
            p: wQ
          } = QQ;
        return WQ.start = XQ, WQ.end = Math.min(XQ + 1, wQ.stream.end), WQ.value = XQ == wQ.stream.end ? wQ.parser.eofTerm : 0, WQ
      }
      updateCachedToken(QQ, WQ, XQ) {
        let wQ = this.stream.clipPos(XQ.pos);
        if (WQ.token(this.stream.reset(wQ, QQ), XQ), QQ.value > -1) {
          let {
            parser: WQ
          } = XQ.p;
          for (let wQ = 0; wQ < WQ.specialized.length; wQ++)
            if (WQ.specialized[wQ] == QQ.value) {
              let qQ = WQ.specializers[wQ](this.stream.read(QQ.start, QQ.end), XQ);
              if (qQ >= 0 && XQ.p.parser.dialect.allows(qQ >> 1)) {
                0 == (1 & qQ) ? QQ.value = qQ >> 1 : QQ.extended = qQ >> 1;
                break
              }
            }
        } else QQ.value = 0, QQ.end = this.stream.clipPos(wQ + 1)
      }
      putAction(QQ, WQ, XQ, wQ) {
        for (let qQ = 0; qQ < wQ; qQ += 3)
          if (this.actions[qQ] == QQ) return wQ;
        return this.actions[wQ++] = QQ, this.actions[wQ++] = WQ, this.actions[wQ++] = XQ, wQ
      }
      addActions(QQ, WQ, XQ, wQ) {
        let {
          state: qQ
        } = QQ, {
          parser: TQ
        } = QQ.p, {
          data: zQ
        } = TQ;
        for (let sQ = 0; sQ < 2; sQ++)
          for (let QQ = TQ.stateSlot(qQ, sQ ? 2 : 1);; QQ += 3) {
            if (65535 == zQ[QQ]) {
              if (1 != zQ[QQ + 1]) {
                0 == wQ && 2 == zQ[QQ + 1] && (wQ = this.putAction(hQ(zQ, QQ + 2), WQ, XQ, wQ));
                break
              }
              QQ = hQ(zQ, QQ + 2)
            }
            zQ[QQ] == WQ && (wQ = this.putAction(hQ(zQ, QQ + 1), WQ, XQ, wQ))
          }
        return wQ
      }
    }
    class vQ {
      constructor(QQ, WQ, XQ, wQ) {
        this.parser = QQ, this.input = WQ, this.Qy = wQ, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new JQ(WQ, wQ), this.tokens = new bQ(QQ, this.stream), this.topTerm = QQ.top[1];
        let {
          from: TQ
        } = wQ[0];
        this.stacks = [qQ.start(this, QQ.top[0], TQ)], this.fragments = XQ.length && this.stream.end - TQ > 4 * QQ.bufferLength ? new UQ(XQ, QQ.nodeSet) : null
      }
      get parsedPos() {
        return this.minStackPos
      }
      advance() {
        let QQ, WQ, XQ = this.stacks,
          wQ = this.minStackPos,
          qQ = this.stacks = [];
        if (this.bigReductionCount > 300 && 1 == XQ.length) {
          let [QQ] = XQ;
          for (; QQ.forceReduce() && QQ.stack.length && QQ.stack[QQ.stack.length - 2] >= this.lastBigReductionStart;);
          this.bigReductionCount = this.lastBigReductionSize = 0
        }
        for (let TQ = 0; TQ < XQ.length; TQ++) {
          let zQ = XQ[TQ];
          for (;;) {
            if (this.tokens.mainToken = null, zQ.pos > wQ) qQ.push(zQ);
            else {
              if (this.advanceStack(zQ, qQ, XQ)) continue;
              {
                QQ || (QQ = [], WQ = []), QQ.push(zQ);
                let XQ = this.tokens.getMainToken(zQ);
                WQ.push(XQ.value, XQ.end)
              }
            }
            break
          }
        }
        if (!qQ.length) {
          let WQ = QQ && function(QQ) {
            let WQ = null;
            for (let XQ of QQ) {
              let QQ = XQ.p.stoppedAt;
              (XQ.pos == XQ.p.stream.end || null != QQ && XQ.pos > QQ) && XQ.p.parser.stateFlag(XQ.state, 2) && (!WQ || WQ.score < XQ.score) && (WQ = XQ)
            }
            return WQ
          }(QQ);
          if (WQ) return DQ && console.log("Finish with " + this.stackID(WQ)), this.stackToTree(WQ);
          if (this.parser.strict) throw DQ && QQ && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + wQ);
          this.recovering || (this.recovering = 5)
        }
        if (this.recovering && QQ) {
          let XQ = null != this.stoppedAt && QQ[0].pos > this.stoppedAt ? QQ[0] : this.runRecovery(QQ, WQ, qQ);
          if (XQ) return DQ && console.log("Force-finish " + this.stackID(XQ)), this.stackToTree(XQ.forceAll())
        }
        if (this.recovering) {
          let QQ = 1 == this.recovering ? 1 : 3 * this.recovering;
          if (qQ.length > QQ)
            for (qQ.sort(((QQ, WQ) => WQ.score - QQ.score)); qQ.length > QQ;) qQ.pop();
          qQ.some((QQ => QQ.reducePos > wQ)) && this.recovering--
        } else if (qQ.length > 1) {
          QQ: for (let QQ = 0; QQ < qQ.length - 1; QQ++) {
            let WQ = qQ[QQ];
            for (let XQ = QQ + 1; XQ < qQ.length; XQ++) {
              let wQ = qQ[XQ];
              if (WQ.sameState(wQ) || WQ.buffer.length > 500 && wQ.buffer.length > 500) {
                if (!((WQ.score - wQ.score || WQ.buffer.length - wQ.buffer.length) > 0)) {
                  qQ.splice(QQ--, 1);
                  continue QQ
                }
                qQ.splice(XQ--, 1)
              }
            }
          }
          qQ.length > 12 && (qQ.sort(((QQ, WQ) => WQ.score - QQ.score)), qQ.splice(12, qQ.length - 12))
        }
        this.minStackPos = qQ[0].pos;
        for (let TQ = 1; TQ < qQ.length; TQ++) qQ[TQ].pos < this.minStackPos && (this.minStackPos = qQ[TQ].pos);
        return null
      }
      stopAt(QQ) {
        if (null != this.stoppedAt && this.stoppedAt < QQ) throw new RangeError("Can't move stoppedAt forward");
        this.stoppedAt = QQ
      }
      advanceStack(QQ, WQ, XQ) {
        let qQ = QQ.pos,
          {
            parser: TQ
          } = this,
          zQ = DQ ? this.stackID(QQ) + " -> " : "";
        if (null != this.stoppedAt && qQ > this.stoppedAt) return QQ.forceReduce() ? QQ : null;
        if (this.fragments) {
          let WQ = QQ.curContext && QQ.curContext.tracker.strict,
            XQ = WQ ? QQ.curContext.hash : 0;
          for (let sQ = this.fragments.nodeAt(qQ); sQ;) {
            let qQ = this.parser.nodeSet.types[sQ.type.id] == sQ.type ? TQ.getGoto(QQ.state, sQ.type.id) : -1;
            if (qQ > -1 && sQ.length && (!WQ || (sQ.prop(wQ.k.contextHash) || 0) == XQ)) return QQ.useNode(sQ, qQ), DQ && console.log(zQ + this.stackID(QQ) + ` (via reuse of ${TQ.getName(sQ.type.id)})`), !0;
            if (!(sQ instanceof wQ.x) || 0 == sQ.children.length || sQ.positions[0] > 0) break;
            let FQ = sQ.children[0];
            if (!(FQ instanceof wQ.x && 0 == sQ.positions[0])) break;
            sQ = FQ
          }
        }
        let sQ = TQ.stateSlot(QQ.state, 4);
        if (sQ > 0) return QQ.reduce(sQ), DQ && console.log(zQ + this.stackID(QQ) + ` (via always-reduce ${TQ.getName(65535&sQ)})`), !0;
        if (QQ.stack.length >= 8400)
          for (; QQ.stack.length > 6e3 && QQ.forceReduce(););
        let FQ = this.tokens.getActions(QQ);
        for (let wQ = 0; wQ < FQ.length;) {
          let sQ = FQ[wQ++],
            PQ = FQ[wQ++],
            gQ = FQ[wQ++],
            JQ = wQ == FQ.length || !XQ,
            rQ = JQ ? QQ : QQ.split(),
            IQ = this.tokens.mainToken;
          if (rQ.apply(sQ, PQ, IQ ? IQ.start : rQ.pos, gQ), DQ && console.log(zQ + this.stackID(rQ) + ` (via ${0==(65536&sQ)?"shift":`reduce of ${TQ.getName(65535&sQ)}`} for ${TQ.getName(PQ)} @ ${qQ}${rQ==QQ?"":", split"})`), JQ) return !0;
          rQ.pos > qQ ? WQ.push(rQ) : XQ.push(rQ)
        }
        return !1
      }
      advanceFully(QQ, WQ) {
        let XQ = QQ.pos;
        for (;;) {
          if (!this.advanceStack(QQ, null, null)) return !1;
          if (QQ.pos > XQ) return dQ(QQ, WQ), !0
        }
      }
      runRecovery(QQ, WQ, XQ) {
        let wQ = null,
          qQ = !1;
        for (let TQ = 0; TQ < QQ.length; TQ++) {
          let zQ = QQ[TQ],
            sQ = WQ[TQ << 1],
            FQ = WQ[1 + (TQ << 1)],
            PQ = DQ ? this.stackID(zQ) + " -> " : "";
          if (zQ.deadEnd) {
            if (qQ) continue;
            if (qQ = !0, zQ.restart(), DQ && console.log(PQ + this.stackID(zQ) + " (restarted)"), this.advanceFully(zQ, XQ)) continue
          }
          let gQ = zQ.split(),
            JQ = PQ;
          for (let QQ = 0; QQ < 10 && gQ.forceReduce(); QQ++) {
            if (DQ && console.log(JQ + this.stackID(gQ) + " (via force-reduce)"), this.advanceFully(gQ, XQ)) break;
            DQ && (JQ = this.stackID(gQ) + " -> ")
          }
          for (let QQ of zQ.recoverByInsert(sQ)) DQ && console.log(PQ + this.stackID(QQ) + " (via recover-insert)"), this.advanceFully(QQ, XQ);
          this.stream.end > zQ.pos ? (FQ == zQ.pos && (FQ++, sQ = 0), zQ.recoverByDelete(sQ, FQ), DQ && console.log(PQ + this.stackID(zQ) + ` (via recover-delete ${this.parser.getName(sQ)})`), dQ(zQ, XQ)) : (!wQ || wQ.score < gQ.score) && (wQ = gQ)
        }
        return wQ
      }
      stackToTree(QQ) {
        return QQ.close(), wQ.x.build({
          buffer: sQ.create(QQ),
          nodeSet: this.parser.nodeSet,
          topID: this.topTerm,
          maxBufferLength: this.parser.bufferLength,
          reused: this.reused,
          start: this.Qy[0].from,
          length: QQ.pos - this.Qy[0].from,
          minRepeatType: this.parser.minRepeatTerm
        })
      }
      stackID(QQ) {
        let WQ = (pQ || (pQ = new WeakMap)).get(QQ);
        return WQ || pQ.set(QQ, WQ = String.fromCodePoint(this.nextStackID++)), WQ + QQ
      }
    }

    function dQ(QQ, WQ) {
      for (let XQ = 0; XQ < WQ.length; XQ++) {
        let wQ = WQ[XQ];
        if (wQ.pos == QQ.pos && wQ.sameState(QQ)) return void(WQ[XQ].score < QQ.score && (WQ[XQ] = QQ))
      }
      WQ.push(QQ)
    }
    class HQ {
      constructor(QQ, WQ, XQ) {
        this.source = QQ, this.flags = WQ, this.disabled = XQ
      }
      allows(QQ) {
        return !this.disabled || 0 == this.disabled[QQ]
      }
    }
    const aQ = QQ => QQ;
    class lQ extends wQ.v {
      constructor(QQ) {
        if (super(), this.wrappers = [], 14 != QQ.version) throw new RangeError(`Parser version (${QQ.version}) doesn't match runtime version (14)`);
        let WQ = QQ.nodeNames.split(" ");
        this.minRepeatTerm = WQ.length;
        for (let wQ = 0; wQ < QQ.repeatNodeCount; wQ++) WQ.push("");
        let XQ = Object.keys(QQ.topRules).map((WQ => QQ.topRules[WQ][1])),
          qQ = [];
        for (let wQ = 0; wQ < WQ.length; wQ++) qQ.push([]);

        function TQ(QQ, WQ, XQ) {
          qQ[QQ].push([WQ, WQ.deserialize(String(XQ))])
        }
        if (QQ.nodeProps)
          for (let sQ of QQ.nodeProps) {
            let QQ = sQ[0];
            "string" == typeof QQ && (QQ = wQ.k[QQ]);
            for (let WQ = 1; WQ < sQ.length;) {
              let XQ = sQ[WQ++];
              if (XQ >= 0) TQ(XQ, QQ, sQ[WQ++]);
              else {
                let wQ = sQ[WQ + -XQ];
                for (let qQ = -XQ; qQ > 0; qQ--) TQ(sQ[WQ++], QQ, wQ);
                WQ++
              }
            }
          }
        this.nodeSet = new wQ.o(WQ.map(((WQ, TQ) => wQ.p.define({
          name: TQ >= this.minRepeatTerm ? void 0 : WQ,
          id: TQ,
          props: qQ[TQ],
          top: XQ.indexOf(TQ) > -1,
          error: 0 == TQ,
          skipped: QQ.skippedNodes && QQ.skippedNodes.indexOf(TQ) > -1
        })))), QQ.propSources && (this.nodeSet = this.nodeSet.extend(...QQ.propSources)), this.strict = !1, this.bufferLength = wQ.d;
        let zQ = FQ(QQ.tokenData);
        this.context = QQ.context, this.specializerSpecs = QQ.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
        for (let wQ = 0; wQ < this.specializerSpecs.length; wQ++) this.specialized[wQ] = this.specializerSpecs[wQ].term;
        this.specializers = this.specializerSpecs.map(iQ), this.states = FQ(QQ.states, Uint32Array), this.data = FQ(QQ.stateData), this.goto = FQ(QQ.goto), this.maxTerm = QQ.maxTerm, this.tokenizers = QQ.tokenizers.map((QQ => "number" == typeof QQ ? new rQ(zQ, QQ) : QQ)), this.topRules = QQ.topRules, this.dialects = QQ.dialects || {}, this.dynamicPrecedences = QQ.dynamicPrecedences || null, this.tokenPrecTable = QQ.tokenPrec, this.termNames = QQ.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]]
      }
      createParse(QQ, WQ, XQ) {
        let wQ = new vQ(this, QQ, WQ, XQ);
        for (let qQ of this.wrappers) wQ = qQ(wQ, QQ, WQ, XQ);
        return wQ
      }
      getGoto(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wQ = this.goto;
        if (WQ >= wQ[0]) return -1;
        for (let qQ = wQ[WQ + 1];;) {
          let WQ = wQ[qQ++],
            TQ = 1 & WQ,
            zQ = wQ[qQ++];
          if (TQ && XQ) return zQ;
          for (let XQ = qQ + (WQ >> 1); qQ < XQ; qQ++)
            if (wQ[qQ] == QQ) return zQ;
          if (TQ) return -1
        }
      }
      hasAction(QQ, WQ) {
        let XQ = this.data;
        for (let wQ = 0; wQ < 2; wQ++)
          for (let qQ, TQ = this.stateSlot(QQ, wQ ? 2 : 1);; TQ += 3) {
            if (65535 == (qQ = XQ[TQ])) {
              if (1 != XQ[TQ + 1]) {
                if (2 == XQ[TQ + 1]) return hQ(XQ, TQ + 2);
                break
              }
              qQ = XQ[TQ = hQ(XQ, TQ + 2)]
            }
            if (qQ == WQ || 0 == qQ) return hQ(XQ, TQ + 1)
          }
        return 0
      }
      stateSlot(QQ, WQ) {
        return this.states[6 * QQ + WQ]
      }
      stateFlag(QQ, WQ) {
        return (this.stateSlot(QQ, 0) & WQ) > 0
      }
      validAction(QQ, WQ) {
        return !!this.allActions(QQ, (QQ => QQ == WQ || null))
      }
      allActions(QQ, WQ) {
        let XQ = this.stateSlot(QQ, 4),
          wQ = XQ ? WQ(XQ) : void 0;
        for (let qQ = this.stateSlot(QQ, 1); null == wQ; qQ += 3) {
          if (65535 == this.data[qQ]) {
            if (1 != this.data[qQ + 1]) break;
            qQ = hQ(this.data, qQ + 2)
          }
          wQ = WQ(hQ(this.data, qQ + 1))
        }
        return wQ
      }
      nextStates(QQ) {
        let WQ = [];
        for (let XQ = this.stateSlot(QQ, 1);; XQ += 3) {
          if (65535 == this.data[XQ]) {
            if (1 != this.data[XQ + 1]) break;
            XQ = hQ(this.data, XQ + 2)
          }
          if (0 == (1 & this.data[XQ + 2])) {
            let QQ = this.data[XQ + 1];
            WQ.some(((WQ, XQ) => 1 & XQ && WQ == QQ)) || WQ.push(this.data[XQ], QQ)
          }
        }
        return WQ
      }
      configure(QQ) {
        let WQ = Object.assign(Object.create(lQ.prototype), this);
        if (QQ.props && (WQ.nodeSet = this.nodeSet.extend(...QQ.props)), QQ.top) {
          let XQ = this.topRules[QQ.top];
          if (!XQ) throw new RangeError(`Invalid top rule name ${QQ.top}`);
          WQ.top = XQ
        }
        return QQ.tokenizers && (WQ.tokenizers = this.tokenizers.map((WQ => {
          let XQ = QQ.tokenizers.find((QQ => QQ.from == WQ));
          return XQ ? XQ.to : WQ
        }))), QQ.specializers && (WQ.specializers = this.specializers.slice(), WQ.specializerSpecs = this.specializerSpecs.map(((XQ, wQ) => {
          let qQ = QQ.specializers.find((QQ => QQ.from == XQ.external));
          if (!qQ) return XQ;
          let TQ = Object.assign(Object.assign({}, XQ), {
            external: qQ.to
          });
          return WQ.specializers[wQ] = iQ(TQ), TQ
        }))), QQ.contextTracker && (WQ.context = QQ.contextTracker), QQ.dialect && (WQ.dialect = this.parseDialect(QQ.dialect)), null != QQ.strict && (WQ.strict = QQ.strict), QQ.wrap && (WQ.wrappers = WQ.wrappers.concat(QQ.wrap)), null != QQ.bufferLength && (WQ.bufferLength = QQ.bufferLength), WQ
      }
      hasWrappers() {
        return this.wrappers.length > 0
      }
      getName(QQ) {
        return this.termNames ? this.termNames[QQ] : String(QQ <= this.maxNode && this.nodeSet.types[QQ].name || QQ)
      }
      get eofTerm() {
        return this.maxNode + 1
      }
      get topNode() {
        return this.nodeSet.types[this.top[1]]
      }
      dynamicPrecedence(QQ) {
        let WQ = this.dynamicPrecedences;
        return null == WQ ? 0 : WQ[QQ] || 0
      }
      parseDialect(QQ) {
        let WQ = Object.keys(this.dialects),
          XQ = WQ.map((() => !1));
        if (QQ)
          for (let qQ of QQ.split(" ")) {
            let QQ = WQ.indexOf(qQ);
            QQ >= 0 && (XQ[QQ] = !0)
          }
        let wQ = null;
        for (let qQ = 0; qQ < WQ.length; qQ++)
          if (!XQ[qQ])
            for (let QQ, XQ = this.dialects[WQ[qQ]]; 65535 != (QQ = this.data[XQ++]);)(wQ || (wQ = new Uint8Array(this.maxTerm + 1)))[QQ] = 1;
        return new HQ(QQ, XQ, wQ)
      }
      static deserialize(QQ) {
        return new lQ(QQ)
      }
    }

    function hQ(QQ, WQ) {
      return QQ[WQ] | QQ[WQ + 1] << 16
    }

    function iQ(QQ) {
      if (QQ.external) {
        let WQ = QQ.extend ? 1 : 0;
        return (XQ, wQ) => QQ.external(XQ, wQ) << 1 | WQ
      }
      return QQ.get
    }
    var cQ = XQ(41575);
    const AQ = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288],
      RQ = new class {
        constructor(QQ) {
          this.start = QQ.start, this.shift = QQ.shift || aQ, this.reduce = QQ.reduce || aQ, this.reuse = QQ.reuse || aQ, this.hash = QQ.hash || (() => 0), this.strict = !1 !== QQ.strict
        }
      }({
        start: !1,
        shift: (QQ, WQ) => 5 == WQ || 6 == WQ || 320 == WQ ? QQ : 321 == WQ,
        strict: !1
      }),
      EQ = new jQ(((QQ, WQ) => {
        let {
          next: XQ
        } = QQ;
        (125 == XQ || -1 == XQ || WQ.context) && QQ.acceptToken(318)
      }), {
        contextual: !0,
        fallback: !0
      }),
      CQ = new jQ(((QQ, WQ) => {
        let XQ, {
          next: wQ
        } = QQ;
        AQ.indexOf(wQ) > -1 || (47 != wQ || 47 != (XQ = QQ.peek(1)) && 42 != XQ) && (125 == wQ || 59 == wQ || -1 == wQ || WQ.context || QQ.acceptToken(316))
      }), {
        contextual: !0
      }),
      uQ = new jQ(((QQ, WQ) => {
        91 != QQ.next || WQ.context || QQ.acceptToken(317)
      }), {
        contextual: !0
      }),
      LQ = new jQ(((QQ, WQ) => {
        let {
          next: XQ
        } = QQ;
        if (43 == XQ || 45 == XQ) {
          if (QQ.advance(), XQ == QQ.next) {
            QQ.advance();
            let XQ = !WQ.context && WQ.canShift(1);
            QQ.acceptToken(XQ ? 1 : 2)
          }
        } else 63 == XQ && 46 == QQ.peek(1) && (QQ.advance(), QQ.advance(), (QQ.next < 48 || QQ.next > 57) && QQ.acceptToken(3))
      }), {
        contextual: !0
      });

    function kQ(QQ, WQ) {
      return QQ >= 65 && QQ <= 90 || QQ >= 97 && QQ <= 122 || 95 == QQ || QQ >= 192 || !WQ && QQ >= 48 && QQ <= 57
    }
    const fQ = new jQ(((QQ, WQ) => {
        if (60 != QQ.next || !WQ.dialectEnabled(0)) return;
        if (QQ.advance(), 47 == QQ.next) return;
        let XQ = 0;
        for (; AQ.indexOf(QQ.next) > -1;) QQ.advance(), XQ++;
        if (kQ(QQ.next, !0)) {
          for (QQ.advance(), XQ++; kQ(QQ.next, !1);) QQ.advance(), XQ++;
          for (; AQ.indexOf(QQ.next) > -1;) QQ.advance(), XQ++;
          if (44 == QQ.next) return;
          for (let WQ = 0;; WQ++) {
            if (7 == WQ) {
              if (!kQ(QQ.next, !0)) return;
              break
            }
            if (QQ.next != "extends".charCodeAt(WQ)) break;
            QQ.advance(), XQ++
          }
        }
        QQ.acceptToken(4, -XQ)
      })),
      SQ = (0, cQ.f)({
        "get set async static": cQ.h.modifier,
        "for while do if else switch try catch finally return throw break continue default case defer": cQ.h.controlKeyword,
        "in of await yield void typeof delete instanceof as satisfies": cQ.h.operatorKeyword,
        "let var const using function class extends": cQ.h.definitionKeyword,
        "import export from": cQ.h.moduleKeyword,
        "with debugger new": cQ.h.keyword,
        TemplateString: cQ.h.special(cQ.h.string),
        super: cQ.h.atom,
        BooleanLiteral: cQ.h.bool,
        this: cQ.h.self,
        null: cQ.h.null,
        Star: cQ.h.modifier,
        VariableName: cQ.h.variableName,
        "CallExpression/VariableName TaggedTemplateExpression/VariableName": cQ.h.function(cQ.h.variableName),
        VariableDefinition: cQ.h.definition(cQ.h.variableName),
        Label: cQ.h.labelName,
        PropertyName: cQ.h.propertyName,
        PrivatePropertyName: cQ.h.special(cQ.h.propertyName),
        "CallExpression/MemberExpression/PropertyName": cQ.h.function(cQ.h.propertyName),
        "FunctionDeclaration/VariableDefinition": cQ.h.function(cQ.h.definition(cQ.h.variableName)),
        "ClassDeclaration/VariableDefinition": cQ.h.definition(cQ.h.className),
        "NewExpression/VariableName": cQ.h.className,
        PropertyDefinition: cQ.h.definition(cQ.h.propertyName),
        PrivatePropertyDefinition: cQ.h.definition(cQ.h.special(cQ.h.propertyName)),
        UpdateOp: cQ.h.updateOperator,
        "LineComment Hashbang": cQ.h.lineComment,
        BlockComment: cQ.h.blockComment,
        Number: cQ.h.number,
        String: cQ.h.string,
        Escape: cQ.h.escape,
        ArithOp: cQ.h.arithmeticOperator,
        LogicOp: cQ.h.logicOperator,
        BitOp: cQ.h.bitwiseOperator,
        CompareOp: cQ.h.compareOperator,
        RegExp: cQ.h.regexp,
        Equals: cQ.h.definitionOperator,
        Arrow: cQ.h.function(cQ.h.punctuation),
        ": Spread": cQ.h.punctuation,
        "( )": cQ.h.paren,
        "[ ]": cQ.h.squareBracket,
        "{ }": cQ.h.brace,
        "InterpolationStart InterpolationEnd": cQ.h.special(cQ.h.brace),
        ".": cQ.h.derefOperator,
        ", ;": cQ.h.separator,
        "@": cQ.h.meta,
        TypeName: cQ.h.typeName,
        TypeDefinition: cQ.h.definition(cQ.h.typeName),
        "type enum interface implements namespace module declare": cQ.h.definitionKeyword,
        "abstract global Privacy readonly override": cQ.h.modifier,
        "is keyof unique infer asserts": cQ.h.operatorKeyword,
        JSXAttributeValue: cQ.h.attributeValue,
        JSXText: cQ.h.content,
        "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": cQ.h.angleBracket,
        "JSXIdentifier JSXNameSpacedName": cQ.h.tagName,
        "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": cQ.h.attributeName,
        "JSXBuiltin/JSXIdentifier": cQ.h.standard(cQ.h.tagName)
      }),
      tQ = {
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
      oQ = {
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
      eQ = {
        __proto__: null,
        "<": 193
      },
      nQ = lQ.deserialize({
        version: 14,
        states: "$F|Q%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Il'#IlO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JrO6[Q!0MxO'#JsO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO9XQMhO'#F|O9`Q`O'#F{OOQ!0Lf'#Js'#JsOOQ!0Lb'#Jr'#JrO9eQ`O'#GwOOQ['#K_'#K_O9pQ`O'#IYO9uQ!0LrO'#IZOOQ['#J`'#J`OOQ['#I_'#I_Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GsO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EyO;hQMhO'#FeO;xQ`O'#GsOOQO'#K`'#K`O;}Q`O'#K`O<]Q`O'#G{O<]Q`O'#G|O<]Q`O'#HOO9kQ`O'#HRO=SQ`O'#HUO>kQ`O'#CeO>{Q`O'#HcO?TQ`O'#HiO?TQ`O'#HkO`QlO'#HmO?TQ`O'#HoO?TQ`O'#HrO?YQ`O'#HxO?_Q!0LsO'#IOO%[QlO'#IQO?jQ!0LsO'#ISO?uQ!0LsO'#IUO9uQ!0LrO'#IWO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jv'#JvO%[QlO'#JvOOQO'#Jy'#JyOOQO'#Ih'#IhOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J}'#J}OC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jx'#JxODlQpO'#JyOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CD})CD}OOOO'#I`'#I`OFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ia'#IaOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Ic'#IcOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IdOGyQ`O'#JtOIxQ!fO'#JtO+}QlO'#JtOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KTOKPQ`O'#KSOKPQ`O'#KSOKXQ`O,5;^OK^Q`O'#KROOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KQONtQ`O'#KPO9eQ`O'#KPO! YQ`O'#KPO! bQ`O,5;]O! gQ`O'#KPO!#lQ!fO'#JsOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#Jz'#JzOOQO-E<j-E<jO9kQ`O,5=_O!$rQ`O,5=_O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;dO!(|QpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)[QlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IpO!+_Q!0LrO,5<iO%[QlO,5;eO!&zQMhO,5;eO!+|QMhO,5;eO!-nQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-uQ,UO'#FjO!.rQ,UO'#KXO!.^Q,UO'#KXO!.yQ,UO'#KXOOQO'#KX'#KXO!/_Q,UO,5<SOOOW,5<`,5<`O!/pQlO'#FvOOOW'#Io'#IoO7VO7dO,5<QO!/wQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<eO!1pQ`O,5<hO!3YQ(CWO'#GXO!3jQ`O'#GYO!3oQ`O'#GYO!5_Q(CWO'#G^O!6dQpO'#GbOOQO'#Gn'#GnO!,TQMhO'#GmOOQO'#Gp'#GpO!,TQMhO'#GoO!7VQ$IUO'#JlOOQ!0Lh'#Jl'#JlO!7aQ`O'#JkO!7oQ`O'#JjO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<eO1SQ`O'#DZO!,TQMhO'#GPO!,TQMhO'#GRO!8gQ`O'#GTO!8lQ`O'#GUO!3oQ`O'#G[O!,TQMhO'#GaO<]Q`O'#JkO!8qQ`O'#EqO!9`Q`O,5<gOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KR'#KRO!:iQ!0LrO'#KaO9uQ!0LrO,5=cO`QlO,5>tOOQ['#Jh'#JhOOQ[,5>u,5>uOOQ[-E<]-E<]O!<hQ!0MxO,5:bO!:]QpO,5:`O!?RQ!0MxO,5:jO%[QlO,5:jO!AiQ!0MxO,5:lOOQO,5@z,5@zO!BYQMhO,5=_O!BhQ!0LrO'#JiO9`Q`O'#JiO!ByQ!0LrO,59ZO!CUQpO,59ZO!C^QMhO,59ZO:dQMhO,59ZO!CiQ`O,5;ZO!CqQ`O'#HbO!DVQ`O'#KdO%[QlO,5;}O!:]QpO,5<PO!D_Q`O,5=zO!DdQ`O,5=zO!DiQ`O,5=zO!DwQ`O,5=zO9uQ!0LrO,5=zO<]Q`O,5=jOOQO'#Cy'#CyO!EOQpO,5=gO!EWQMhO,5=hO!EcQ`O,5=jO!EhQ!bO,5=mO!EpQ`O'#K`O?YQ`O'#HWO9kQ`O'#HYO!EuQ`O'#HYO:dQMhO'#H[O!EzQ`O'#H[OOQ[,5=p,5=pO!FPQ`O'#H]O!FbQ`O'#CoO!FgQ`O,59PO!FqQ`O,59PO!HvQlO,59POOQ[,59P,59PO!IWQ!0LrO,59PO%[QlO,59PO!KcQlO'#HeOOQ['#Hf'#HfOOQ['#Hg'#HgO`QlO,5=}O!KyQ`O,5=}O`QlO,5>TO`QlO,5>VO!LOQ`O,5>XO`QlO,5>ZO!LTQ`O,5>^O!LYQlO,5>dOOQ[,5>j,5>jO%[QlO,5>jO9uQ!0LrO,5>lOOQ[,5>n,5>nO#!dQ`O,5>nOOQ[,5>p,5>pO#!dQ`O,5>pOOQ[,5>r,5>rO##QQpO'#D_O%[QlO'#JvO##sQpO'#JvO##}QpO'#DmO#$`QpO'#DmO#&qQlO'#DmO#&xQ`O'#JuO#'QQ`O,5:WO#'VQ`O'#EtO#'eQ`O'#KUO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CUQpO,5;YO!C^QMhO,5;YO:dQMhO,5;YO#(`Q`O,5@bO#(eQ07dO,5:sOOQO-E<f-E<fO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!ByQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CUQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I^'#I^P#+RO&2DjO,58|POOO,58|,58|OOOO-E<^-E<^OOQ!0Lh1G.p1G.pOOOO-E<_-E<_OOOO,59},59}O#+^Q!bO,59}OOOO-E<a-E<aOOQ!0Lf1G/g1G/gO#+cQ!fO,5?OO+}QlO,5?OOOQO,5?U,5?UO#+mQlO'#IdOOQO-E<b-E<bO#+zQ`O,5@`O#,SQ!fO,5@`O#,ZQ`O,5@nOOQ!0Lf1G/m1G/mO%[QlO,5@oO#,cQ`O'#IjOOQO-E<h-E<hO#,ZQ`O,5@nOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@lO#,wQ!0LrO,5@lO#-YQ!0LrO,5@lO#-aQ`O,5@kO9eQ`O,5@kO#-iQ`O,5@kO#-wQ`O'#ImO#-aQ`O,5@kOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2yO9kQ`O1G2yOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0rQ!0MzO'#JlO!$wQlO1G0uO#2}Q!fO'#JwO%[QlO'#JwO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#3^Q`O1G1OO#5rQ!0MxO1G1PO#5yQ!0MxO1G1PO#8aQ!0MxO1G1PO#8hQ!0MxO1G1PO#;OQ!0MxO1G1PO#=fQ!0MxO1G1PO#=mQ!0MxO1G1PO#=tQ!0MxO1G1PO#@[Q!0MxO1G1PO#@cQ!0MxO1G1PO#BpQ?MtO'#CiO#DkQ?MtO1G1`O#DrQ?MtO'#JsO#EVQ!0MxO,5?[OOQ!0Lb-E<n-E<nO#GdQ!0MxO1G1PO#HaQ!0MzO1G1POOQ!0Lf1G1P1G1PO#IdQMjO'#J|O#InQ`O,5:xO#IsQ!0MxO1G1cO#JgQ,UO,5<WO#JoQ,UO,5<XO#JwQ,UO'#FoO#K`Q`O'#FnOOQO'#KY'#KYOOQO'#In'#InO#KeQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#KvQ?MtO'#JrO#LQQ`O,5<bO!)[QlO,5<bOOOW-E<m-E<mOOQ!0Lf1G1l1G1lO#LVQpO'#KXOOQ!0Lf,5<d,5<dO#L_QpO,5<dO#LdQMhO'#DTOOOO'#Ib'#IbO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8lQ`O'#IrO#LvQ`O,5<zOOQ!0Lh,5<w,5<wO!,TQMhO'#IuO#MdQMjO,5=XO!,TQMhO'#IwO#NVQMjO,5=ZO!&zQMhO,5=]OOQO1G2S1G2SO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GbO$!dQ!dO,5<sO$!kQ`O'#K[O9eQ`O'#K[O$!yQ`O,5<uO$#aQ!dO'#C{O!,TQMhO,5<tO$#kQ`O'#GZO$$PQ`O,5<tO$$UQ!dO'#GWO$$cQ!dO'#K]O$$mQ`O'#K]O!&zQMhO'#K]O$$rQ`O,5<xO$$wQlO'#JvO$%RQpO'#GcO#$`QpO'#GcO$%dQ`O'#GgO!3oQ`O'#GkO$%iQ!0LrO'#ItO$%tQpO,5<|OOQ!0Lp,5<|,5<|O$%{QpO'#GcO$&YQpO'#GdO$&kQpO'#GdO$&pQMjO,5=XO$'QQMjO,5=ZOOQ!0Lh,5=^,5=^O!,TQMhO,5@VO!,TQMhO,5@VO$'bQ`O'#IyO$'vQ`O,5@UO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@VO$)TQ$IYO,59uOOQ!0Lh'#Jp'#JpO$)vQMjO,5<kO$*iQMjO,5<mO@zQ`O,5<oOOQ!0Lh,5<p,5<pO$*sQ`O,5<vO$*xQMjO,5<{O$+YQ`O'#KPO!$wQlO1G2RO$+_Q`O1G2RO9eQ`O'#KSO9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I{O$+dQ!0LrO,5@{OOQ[1G2}1G2}OOQ[1G4`1G4`OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-fQ!0MxO1G0UOOQ[1G2y1G2yO!&zQMhO1G2yO%[QlO1G2yO#.tQ`O1G2yO$/jQMhO'#EkOOQ!0Lb,5@T,5@TO$/wQ!0LrO,5@TOOQ[1G.u1G.uO!ByQ!0LrO1G.uO!CUQpO1G.uO!C^QMhO1G.uO$0YQ`O1G0uO$0_Q`O'#CiO$0jQ`O'#KeO$0rQ`O,5=|O$0wQ`O'#KeO$0|Q`O'#KeO$1[Q`O'#JRO$1jQ`O,5AOO$1rQ!fO1G1iOOQ!0Lf1G1k1G1kO9kQ`O1G3fO@zQ`O1G3fO$1yQ`O1G3fO$2OQ`O1G3fO!DiQ`O1G3fO9uQ!0LrO1G3fOOQ[1G3f1G3fO!EcQ`O1G3UO!&zQMhO1G3RO$2TQ`O1G3ROOQ[1G3S1G3SO!&zQMhO1G3SO$2YQ`O1G3SO$2bQpO'#HQOOQ[1G3U1G3UO!6_QpO'#I}O!EhQ!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$2jQMhO,5=tO9kQ`O,5=tO$%dQ`O,5=vO9`Q`O,5=vO!CUQpO,5=vO!C^QMhO,5=vO:dQMhO,5=vO$2xQ`O'#KcO$3TQ`O,5=wOOQ[1G.k1G.kO$3YQ!0LrO1G.kO@zQ`O1G.kO$3eQ`O1G.kO9uQ!0LrO1G.kO$5mQ!fO,5AQO$5zQ`O,5AQO9eQ`O,5AQO$6VQlO,5>PO$6^Q`O,5>POOQ[1G3i1G3iO`QlO1G3iOOQ[1G3o1G3oOOQ[1G3q1G3qO?TQ`O1G3sO$6cQlO1G3uO$:gQlO'#HtOOQ[1G3x1G3xO$:tQ`O'#HzO?YQ`O'#H|OOQ[1G4O1G4OO$:|QlO1G4OO9uQ!0LrO1G4UOOQ[1G4W1G4WOOQ!0Lb'#G_'#G_O9uQ!0LrO1G4YO9uQ!0LrO1G4[O$?TQ`O,5@bO!)[QlO,5;`O9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CUQpO,5:XO$?YQ?MtO,5:XOOQO,5;`,5;`O$?dQpO'#IeO$?zQ`O,5@aOOQ!0Lf1G/r1G/rO$@SQpO'#IkO$@^Q`O,5@pOOQ!0Lb1G0y1G0yO#$`QpO,5:XOOQO'#Ig'#IgO$@fQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CUQpO1G0tO!C^QMhO1G0tOOQ!0Lb1G5|1G5|O!ByQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@mQ!0LrO1G0mO$@xQ!0LrO1G0mO!CUQpO1G0^ODWQpO1G0^O$AWQ!0LrO1G0mOOQO1G0^1G0^O$AlQ!0MxO1G0mPOOO-E<[-E<[POOO1G.h1G.hOOOO1G/i1G/iO$AvQ!bO,5<iO$BOQ!fO1G4jOOQO1G4p1G4pO%[QlO,5?OO$BYQ`O1G5zO$BbQ`O1G6YO$BjQ!fO1G6ZO9eQ`O,5?UO$BtQ!0MxO1G6WO%[QlO1G6WO$CUQ!0LrO1G6WO$CgQ`O1G6VO$CgQ`O1G6VO9eQ`O1G6VO$CoQ`O,5?XO9eQ`O,5?XOOQO,5?X,5?XO$DTQ`O,5?XO$+YQ`O,5?XOOQO-E<k-E<kOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(e7+(eO!&zQMhO7+(eO%[QlO7+(eO$DcQ`O7+(eO$DnQMhO7+(eO$D|Q!0MzO,5=XO$GXQ!0MzO,5=ZO$IdQ!0MzO,5=XO$KuQ!0MzO,5=ZO$NWQ!0MzO,59uO%!]Q!0MzO,5<kO%$hQ!0MzO,5<mO%&sQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%)UQ!0MxO7+&aO%)xQlO'#IfO%*VQ`O,5@cO%*_Q!fO,5@cOOQ!0Lf1G0P1G0PO%*iQ`O7+&jOOQ!0Lf7+&j7+&jO%*nQ?MtO,5:fO%[QlO7+&zO%*xQ?MtO,5:bO%+VQ?MtO,5:jO%+aQ?MtO,5:lO%+kQMhO'#IiO%+uQ`O,5@hOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%+}Q!jO,5<ZO!)[QlO,5<YOOQO-E<l-E<lOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%,YQ`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%,_Q!dO,59oOOOO-E<`-E<`OOQ!0Lh1G/X1G/XO%,fQ!0MxO7+'kOOQ!0Lh,5?^,5?^O%-YQMhO1G2fP%-aQ`O'#IrPOQ!0Lh-E<p-E<pO%-}QMjO,5?aOOQ!0Lh-E<s-E<sO%.pQMjO,5?cOOQ!0Lh-E<u-E<uO%.zQ!dO1G2wO%/RQ!dO'#CrO%/iQMhO'#KSO$$wQlO'#JvOOQ!0Lh1G2_1G2_O%/sQ`O'#IqO%0[Q`O,5@vO%0[Q`O,5@vO%0dQ`O,5@vO%0oQ`O,5@vOOQO1G2a1G2aO%0}QMjO1G2`O$+YQ`O'#K[O!,TQMhO1G2`O%1_Q(CWO'#IsO%1lQ`O,5@wO!&zQMhO,5@wO%1tQ!dO,5@wOOQ!0Lh1G2d1G2dO%4UQ!fO'#CiO%4`Q`O,5=POOQ!0Lb,5<},5<}O%4hQpO,5<}OOQ!0Lb,5=O,5=OOCwQ`O,5<}O%4sQpO,5<}OOQ!0Lb,5=R,5=RO$+YQ`O,5=VOOQO,5?`,5?`OOQO-E<r-E<rOOQ!0Lp1G2h1G2hO#$`QpO,5<}O$$wQlO,5=PO%5RQ`O,5=OO%5^QpO,5=OO!,TQMhO'#IuO%6WQMjO1G2sO!,TQMhO'#IwO%6yQMjO1G2uO%7TQMjO1G5qO%7_QMjO1G5qOOQO,5?e,5?eOOQO-E<w-E<wOOQO1G.{1G.{O!,TQMhO1G5qO!,TQMhO1G5qO!:]QpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%7lQ`O1G2ZO!,TQMhO1G2bO%7qQ!0MxO7+'mOOQ!0Lf7+'m7+'mO!$wQlO7+'mO%8eQ`O,5;`OOQ!0Lb,5?g,5?gOOQ!0Lb-E<y-E<yO%8jQ!dO'#K^O#(ZQ`O7+(eO4UQ!fO7+(eO$DfQ`O7+(eO%8tQ!0MvO'#CiO%9XQ!0MvO,5=SO%9lQ`O,5=SO%9tQ`O,5=SOOQ!0Lb1G5o1G5oOOQ[7+$a7+$aO!ByQ!0LrO7+$aO!CUQpO7+$aO!$wQlO7+&aO%9yQ`O'#JQO%:bQ`O,5APOOQO1G3h1G3hO9kQ`O,5APO%:bQ`O,5APO%:jQ`O,5APOOQO,5?m,5?mOOQO-E=P-E=POOQ!0Lf7+'T7+'TO%:oQ`O7+)QO9uQ!0LrO7+)QO9kQ`O7+)QO@zQ`O7+)QO%:tQ`O7+)QOOQ[7+)Q7+)QOOQ[7+(p7+(pO%:yQ!0MvO7+(mO!&zQMhO7+(mO!E^Q`O7+(nOOQ[7+(n7+(nO!&zQMhO7+(nO%;TQ`O'#KbO%;`Q`O,5=lOOQO,5?i,5?iOOQO-E<{-E<{OOQ[7+(s7+(sO%<rQpO'#HZOOQ[1G3`1G3`O!&zQMhO1G3`O%[QlO1G3`O%<yQ`O1G3`O%=UQMhO1G3`O9uQ!0LrO1G3bO$%dQ`O1G3bO9`Q`O1G3bO!CUQpO1G3bO!C^QMhO1G3bO%=dQ`O'#JPO%=xQ`O,5@}O%>QQpO,5@}OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>]Q`O7+$VO%[QlO1G6lO%[QlO1G6mO%>bQ!0LrO1G6lO%>lQlO1G3kO%>sQ`O1G3kO%>xQlO1G3kOOQ[7+)T7+)TO9uQ!0LrO7+)_O`QlO7+)aOOQ['#Kh'#KhOOQ['#JS'#JSO%?PQlO,5>`OOQ[,5>`,5>`O%[QlO'#HuO%?^Q`O'#HwOOQ[,5>f,5>fO9eQ`O,5>fOOQ[,5>h,5>hOOQ[7+)j7+)jOOQ[7+)p7+)pOOQ[7+)t7+)tOOQ[7+)v7+)vO%?cQpO1G5|O%?}Q?MtO1G0zO%@XQ`O1G0zOOQO1G/s1G/sO%@dQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?V,5?VOOQO-E<i-E<iO!CUQpO1G/sOOQO-E<e-E<eOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CUQpO7+&`OOQO7+%x7+%xO$AlQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@nQ!0LrO7+&XO!ByQ!0LrO7+%xO!CUQpO7+%xO%@yQ!0LrO7+&XO%AXQ!0MxO7++rO%[QlO7++rO%AiQ`O7++qO%AiQ`O7++qOOQO1G4s1G4sO9eQ`O1G4sO%AqQ`O1G4sOOQS7+%}7+%}O#(ZQ`O<<LPO4UQ!fO<<LPO%BPQ`O<<LPOOQ[<<LP<<LPO!&zQMhO<<LPO%[QlO<<LPO%BXQ`O<<LPO%BdQ!0MzO,5?aO%DoQ!0MzO,5?cO%FzQ!0MzO1G2`O%I]Q!0MzO1G2sO%KhQ!0MzO1G2uO%MsQ!fO,5?QO%[QlO,5?QOOQO-E<d-E<dO%M}Q`O1G5}OOQ!0Lf<<JU<<JUO%NVQ?MtO1G0uO&!^Q?MtO1G1PO&!eQ?MtO1G1PO&$fQ?MtO1G1PO&$mQ?MtO1G1PO&&nQ?MtO1G1PO&(oQ?MtO1G1PO&(vQ?MtO1G1PO&(}Q?MtO1G1PO&+OQ?MtO1G1PO&+VQ?MtO1G1PO&+^Q!0MxO<<JfO&-UQ?MtO1G1PO&.RQ?MvO1G1PO&/UQ?MvO'#JlO&1[Q?MtO1G1cO&1iQ?MtO1G0UO&1sQMjO,5?TOOQO-E<g-E<gO!)[QlO'#FqOOQO'#KZ'#KZOOQO1G1u1G1uO&1}Q`O1G1tO&2SQ?MtO,5?[OOOW7+'h7+'hOOOO1G/Z1G/ZO&2^Q!dO1G4xOOQ!0Lh7+(Q7+(QP!&zQMhO,5?^O!,TQMhO7+(cO&2eQ`O,5?]O9eQ`O,5?]O$+YQ`O,5?]OOQO-E<o-E<oO&2sQ`O1G6bO&2sQ`O1G6bO&2{Q`O1G6bO&3WQMjO7+'zO&3hQ!dO,5?_O&3rQ`O,5?_O!&zQMhO,5?_OOQO-E<q-E<qO&3wQ!dO1G6cO&4RQ`O1G6cO&4ZQ`O1G2kO!&zQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%4hQpO1G2iO!CUQpO1G2iOCwQ`O1G2iOOQ!0Lb1G2q1G2qO&4`QpO1G2iO&4nQ`O1G2kO$+YQ`O1G2jOCwQ`O1G2jO$$wQlO1G2kO&4vQ`O1G2jO&5jQMjO,5?aOOQ!0Lh-E<t-E<tO&6]QMjO,5?cOOQ!0Lh-E<v-E<vO!,TQMhO7++]O&6gQMjO7++]O&6qQMjO7++]OOQ!0Lh1G/c1G/cO&7OQ`O1G/cOOQ!0Lh7+'u7+'uO&7TQMjO7+'|O&7eQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&8XQ`O1G0zO!&zQMhO'#IzO&8^Q`O,5@xO&:`Q!fO<<LPO!&zQMhO1G2nO&:gQ!0LrO1G2nOOQ[<<G{<<G{O!ByQ!0LrO<<G{O&:xQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?l,5?lO&;lQ`O,5?lO&;qQ`O,5?lOOQO-E=O-E=OO&<PQ`O1G6kO&<PQ`O1G6kO9kQ`O1G6kO@zQ`O<<LlOOQ[<<Ll<<LlO&<XQ`O<<LlO9uQ!0LrO<<LlO9kQ`O<<LlOOQ[<<LX<<LXO%:yQ!0MvO<<LXOOQ[<<LY<<LYO!E^Q`O<<LYO&<^QpO'#I|O&<iQ`O,5@|O!)[QlO,5@|OOQ[1G3W1G3WOOQO'#JO'#JOO9uQ!0LrO'#JOO&<qQpO,5=uOOQ[,5=u,5=uO&<xQpO'#EgO&=PQpO'#GeO&=UQ`O7+(zO&=ZQ`O7+(zOOQ[7+(z7+(zO!&zQMhO7+(zO%[QlO7+(zO&=cQ`O7+(zOOQ[7+(|7+(|O9uQ!0LrO7+(|O$%dQ`O7+(|O9`Q`O7+(|O!CUQpO7+(|O&=nQ`O,5?kOOQO-E<}-E<}OOQO'#H^'#H^O&=yQ`O1G6iO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>RQ`O7+,WO&>WQ`O7+,XO%[QlO7+,WO%[QlO7+,XOOQ[7+)V7+)VO&>]Q`O7+)VO&>bQlO7+)VO&>iQ`O7+)VOOQ[<<Ly<<LyOOQ[<<L{<<L{OOQ[-E=Q-E=QOOQ[1G3z1G3zO&>nQ`O,5>aOOQ[,5>c,5>cO&>sQ`O1G4QO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&>xQ?MtO1G6ZO?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AlQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!ByQ!0LrO<<IdO&?SQ!0LrO<<IsO&?_Q!0MxO<= ^O&?oQ`O<= ]OOQO7+*_7+*_O9eQ`O7+*_OOQ[ANAkANAkO&?wQ!fOANAkO!&zQMhOANAkO#(ZQ`OANAkO4UQ!fOANAkO&@OQ`OANAkO%[QlOANAkO&@WQ!0MzO7+'zO&BiQ!0MzO,5?aO&DtQ!0MzO,5?cO&GPQ!0MzO7+'|O&IbQ!fO1G4lO&IlQ?MtO7+&aO&KpQ?MvO,5=XO&MwQ?MvO,5=ZO&NXQ?MvO,5=XO&NiQ?MvO,5=ZO&NyQ?MvO,59uO'#PQ?MvO,5<kO'%SQ?MvO,5<mO''hQ?MvO,5<{O')^Q?MtO7+'kO')kQ?MtO7+'mO')xQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*d7+*dO')}QMjO<<K}OOQO1G4w1G4wO'*UQ`O1G4wO'*aQ`O1G4wO'*oQ`O7++|O'*oQ`O7++|O!&zQMhO1G4yO'*wQ!dO1G4yO'+RQ`O7++}O'+ZQ`O7+(VO'+fQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!CUQpO7+(TOCwQ`O7+(TO'+pQ`O7+(VO!&zQMhO7+(VO$+YQ`O7+(UO'+uQ`O7+(VOCwQ`O7+(UO'+}QMjO<<NwO!,TQMhO<<NwOOQ!0Lh7+$}7+$}O',XQ!dO,5?fOOQO-E<x-E<xO',cQ!0MvO7+(YO!&zQMhO7+(YOOQ[AN=gAN=gO9kQ`O1G5WOOQO1G5W1G5WO',sQ`O1G5WO',xQ`O7+,VO',xQ`O7+,VO9uQ!0LrOANBWO@zQ`OANBWOOQ[ANBWANBWO'-QQ`OANBWOOQ[ANAsANAsOOQ[ANAtANAtO'-VQ`O,5?hOOQO-E<z-E<zO'-bQ?MtO1G6hOOQO,5?j,5?jOOQO-E<|-E<|OOQ[1G3a1G3aO'-lQ`O,5=POOQ[<<Lf<<LfO!&zQMhO<<LfO&=UQ`O<<LfO'-qQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9uQ!0LrO<<LhO$%dQ`O<<LhO9`Q`O<<LhO'-yQpO1G5VO'.UQ`O7+,TOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= r<= rOOQ[<= s<= sO'.^Q`O<= rO'.cQ`O<= sOOQ[<<Lq<<LqO'.hQ`O<<LqO'.mQlO<<LqOOQ[1G3{1G3{O?YQ`O7+)lO'.tQ`O<<JQO'/PQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AlQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<My<<MyOOQ[G27VG27VO!&zQMhOG27VO#(ZQ`OG27VO'/ZQ!fOG27VO4UQ!fOG27VO'/bQ`OG27VO'/jQ?MtO<<JfO'/wQ?MvO1G2`O'1mQ?MvO,5?aO'3pQ?MvO,5?cO'5sQ?MvO1G2sO'7vQ?MvO1G2uO'9yQ?MtO<<KXO':WQ?MtO<<I{OOQO1G1w1G1wO!,TQMhOANAiOOQO7+*c7+*cO':eQ`O7+*cO':pQ`O<= hO':xQ!dO7+*eOOQ!0Lb<<Kq<<KqO$+YQ`O<<KqOCwQ`O<<KqO';SQ`O<<KqO!&zQMhO<<KqOOQ!0Lb<<Ko<<KoO!CUQpO<<KoO';_Q!dO<<KqOOQ!0Lb<<Kp<<KpO';iQ`O<<KqO!&zQMhO<<KqO$+YQ`O<<KpO';nQMjOANDcO';xQ!0MvO<<KtOOQO7+*r7+*rO9kQ`O7+*rO'<YQ`O<= qOOQ[G27rG27rO9uQ!0LrOG27rO@zQ`OG27rO!)[QlO1G5SO'<bQ`O7+,SO'<jQ`O1G2kO&=UQ`OANBQOOQ[ANBQANBQO!&zQMhOANBQO'<oQ`OANBQOOQ[ANBSANBSO9uQ!0LrOANBSO$%dQ`OANBSOOQO'#H_'#H_OOQO7+*q7+*qOOQ[G22wG22wOOQ[ANE^ANE^OOQ[ANE_ANE_OOQ[ANB]ANB]O'<wQ`OANB]OOQ[<<MW<<MWO!)[QlOAN?lOOQOG24yG24yO$AlQ!0MxOG24yO#(ZQ`OLD,qOOQ[LD,qLD,qO!&zQMhOLD,qO'<|Q!fOLD,qO'=TQ?MvO7+'zO'>yQ?MvO,5?aO'@|Q?MvO,5?cO'CPQ?MvO7+'|O'DuQMjOG27TOOQO<<M}<<M}OOQ!0LbANA]ANA]O$+YQ`OANA]OCwQ`OANA]O'EVQ!dOANA]OOQ!0LbANAZANAZO'E^Q`OANA]O!&zQMhOANA]O'EiQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N^<<N^OOQ[LD-^LD-^O9uQ!0LrOLD-^O'EsQ?MtO7+*nOOQO'#Gf'#GfOOQ[G27lG27lO&=UQ`OG27lO!&zQMhOG27lOOQ[G27nG27nO9uQ!0LrOG27nOOQ[G27wG27wO'E}Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#(ZQ`O!$(!]O!&zQMhO!$(!]O'FXQ!0MzOG27TOOQ!0LbG26wG26wO$+YQ`OG26wO'HjQ`OG26wOCwQ`OG26wO'HuQ!dOG26wO!&zQMhOG26wOOQ[!$(!x!$(!xOOQ[LD-WLD-WO&=UQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#(ZQ`O!)9EwOOQ!0LbLD,cLD,cO$+YQ`OLD,cOCwQ`OLD,cO'H|Q`OLD,cO'IXQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'I`Q?MvOG27TOOQ!0Lb!$( }!$( }O$+YQ`O!$( }OCwQ`O!$( }O'KUQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$+YQ`O!)9EiOCwQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$+YQ`O!.K;TOOQ!0Lb!4/0o!4/0oO!)[QlO'#DzO1PQ`O'#EXO'KaQ!fO'#JrO'KhQ!L^O'#DvO'KoQlO'#EOO'KvQ!fO'#CiO'N^Q!fO'#CiO!)[QlO'#EQO'NnQlO,5;ZO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO'#IpO(!qQ`O,5<iO!)[QlO,5;eO(!yQMhO,5;eO($dQMhO,5;eO!)[QlO,5;wO!&zQMhO'#GmO(!yQMhO'#GmO!&zQMhO'#GoO(!yQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GPO(!yQMhO'#GPO!&zQMhO'#GRO(!yQMhO'#GRO!&zQMhO'#GaO(!yQMhO'#GaO!)[QlO,5:jO($kQpO'#D_O($uQpO'#JvO!)[QlO,5@oO'NnQlO1G0uO(%PQ?MtO'#CiO!)[QlO1G2PO!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO(%ZQ!dO'#CrO!&zQMhO,5<tO(!yQMhO,5<tO'NnQlO1G2RO!)[QlO7+&zO!&zQMhO1G2`O(!yQMhO1G2`O!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO!&zQMhO1G2bO(!yQMhO1G2bO'NnQlO7+'mO'NnQlO7+&aO!&zQMhOANAiO(!yQMhOANAiO(%nQ`O'#EoO(%sQ`O'#EoO(%{Q`O'#F]O(&QQ`O'#EyO(&VQ`O'#KTO(&bQ`O'#KRO(&mQ`O,5;ZO(&rQMjO,5<eO(&yQ`O'#GYO('OQ`O'#GYO('TQ`O,5<eO(']Q`O,5<gO('eQ`O,5;ZO('mQ?MtO1G1`O('tQ`O,5<tO('yQ`O,5<tO((OQ`O,5<vO((TQ`O,5<vO((YQ`O1G2RO((_Q`O1G0uO((dQMjO<<K}O((kQMjO<<K}O((rQMhO'#F|O9`Q`O'#F{OAuQ`O'#EnO!)[QlO,5;tO!3oQ`O'#GYO!3oQ`O'#GYO!3oQ`O'#G[O!3oQ`O'#G[O!,TQMhO7+(cO!,TQMhO7+(cO%.zQ!dO1G2wO%.zQ!dO1G2wO!&zQMhO,5=]O!&zQMhO,5=]",
        stateData: "()x~O'|OS'}OSTOS(ORQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&W!WO&^!XO&`!YO&b!ZO&d![O&g!]O&m!^O&s!_O&u!`O&w!aO&y!bO&{!cO(TSO(VTO(YUO(aVO(o[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O(O!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'z]X(a]X(r]X(y]X(z]X~O!g%RX~P(qO_!}O(V#PO(W!}O(X#PO~O_#QO(X#PO(Y#PO(Z#QO~Ox#SO!U#TO(b#TO(c#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T<ZO(VTO(YUO(aVO(o[O~O![#ZO!]#WO!Y(hP!Y(vP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(VTO(YUO(aVO(o[O~Op#mO![#iO!|]O#i#lO#j#iO(T<[O!k(sP~P.iO!l#oO(T#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa(fX'z(fX'w(fX!k(fX!Y(fX!_(fX%i(fX!g(fX~P1qO#S$dO#`$eO$Q$eOP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX!_(gX%i(gX~Oa(gX'z(gX'w(gX!Y(gX!k(gXv(gX!g(gX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T$sO(VTO(YUO(a$uO(y$}O(z%POg(^P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(T%gO~O!g%mO~Oa%nO'z%nO~O!Q%rO~P%[O(U!lO~P%[O%n%vO~P%[Oh%VO!l%eO(T%gO(U!lO~Oe%}O!l%eO(T%gO~Oj$RO~O!_&PO(T%gO(U!lO(VTO(YUO`)WP~O!Q&SO!l&RO%j&VO&T&WO~P;SO!x#sO~O%s&YO!S)SX!_)SX(T)SX~O(T&ZO~Ol!PO!u&`O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&eOe&dO!x&bO%h&cO%{&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&kO#`&nO%j&iO(U!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'x&{O'z%nO~Oa%nO'x'OO'z%nO~Oa%nO'x'QO'z%nO~O'w]X!Y]Xv]X!k]X&[]X!_]X%i]X!g]X~P(qO!b'_O!c'WO!d'WO(U!lO(VTO(YUO~Os'UO!S'TO!['XO(e'SO!^(iP!^(xP~P@nOn'bO!_'`O(T%gO~Oe'gO!l%eO(T%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<VO#T!pO#U!pO#W!pO#X!pO(U!lO(VTO(YUO(e!mO(o!sO~O!b'mO!c'lO!d'lO#V!pO#['nO#]'nO~PBYOa%nOh%VO!g#vO!l%eO'z%nO(r'pO~O!p'tO#`'rO~PChOs!nO!S!oO(VTO(YUO(e!mO(o!sO~O!_XOs(mX!S(mX!b(mX!c(mX!d(mX!|(mX#T(mX#U(mX#V(mX#W(mX#X(mX#[(mX#](mX(U(mX(V(mX(Y(mX(e(mX(o(mX~O!c'lO!d'lO(U!lO~PDWO(P'xO(Q'xO(R'zO~O_!}O(V'|O(W!}O(X'|O~O_#QO(X'|O(Y'|O(Z#QO~Ov(OO~P%[Ox#SO!U#TO(b#TO(c(RO~O![(TO!Y'WX!Y'^X!]'WX!]'^X~P+}O!](VO!Y(hX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](VO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~O!Y(hX~PHRO!Y([O~O!Y(uX!](uX!g(uX!k(uX(r(uX~O#`(uX#k#dX!^(uX~PJUO#`(]O!Y(wX!](wX~O!](^O!Y(vX~O!Y(aO~O#`$eO~PJUO!^(bO~P`OR#zO!Q#yO!S#{O!l#xO(aVOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(r!na(y!na(z!na~Oa!na'z!na'w!na!Y!na!k!nav!na!_!na%i!na!g!na~PKlO!k(cO~O!g#vO#`(dO(r'pO!](tXa(tX'z(tX~O!k(tX~PNXO!S%hO!_%iO!|]O#i(iO#j(hO(T%gO~O!](jO!k(sX~O!k(lO~O!S%hO!_%iO#j(hO(T%gO~OP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~O!g#vO!k(gX~P! uOR(nO!Q(mO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(T!{a~P!#vO!x(rO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~O#k(xO~O![(zO!k(kP~P%[O(e(|O(o[O~O!S)OO!l#xO(e(|O(o[O~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]$_Oa$qa'z$qa'w$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)dO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Og(pP~P!,TO!Q)iO!g)hO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)hO!_({X$Z({X$]({X$_({X$f({X~O!Q)iO~P!.^O!Q)iO!_({X$Z({X$]({X$_({X$f({X~O!_)kO$Z)oO$])jO$_)jO$f)pO~O![)sO~P!)[O$]$hO$_$gO$f)wO~On$zX!Q$zX#S$zX'y$zX(y$zX(z$zX~OgmXg$zXnmX!]mX#`mX~P!0SOx)yO(b)zO(c)|O~On*VO!Q*OO'y*PO(y$}O(z%PO~Og)}O~P!1WOg*WO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S*YO!_*ZO!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op*`O![*^O(T*XO!k)OP~P!1uO#k*aO~O!l*bO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T*dO(VTO(YUO(a$uO(y$}O(z%PO~O![*gO!Y)PP~P!3tOr*sOs!nO!S*iO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO(e!mO~O!^*pO~P!5iO#S$dOn(`X!Q(`X'y(`X(y(`X(z(`X!](`X#`(`X~Og(`X$O(`X~P!6kOn*xO#`*wOg(_X!](_X~O!]*yOg(^X~Oj%dOk%dOl%dO(T&ZOg(^P~Os*|O~Og)}O(T&ZO~O!l+SO~O(T(vO~Op+WO!S%hO![#iO!_%iO!|]O#i#lO#j#iO(T%gO!k(sP~O!g#vO#k+XO~O!S%hO![+ZO!](^O!_%iO(T%gO!Y(vP~Os'[O!S+]O![+[O(VTO(YUO(e(|O~O!^(xP~P!9|O!]+^Oa)TX'z)TX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa!ja!]!ja'z!ja'w!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:tOR#zO!Q#yO!S#{O!l#xO(aVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(r!ra(y!ra(z!ra~Oa!ra'z!ra'w!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!=[OR#zO!Q#yO!S#{O!l#xO(aVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(r!ta(y!ta(z!ta~Oa!ta'z!ta'w!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?rOh%VOn+gO!_'`O%i+fO~O!g+iOa(]X!_(]X'z(]X!](]X~Oa%nO!_XO'z%nO~Oh%VO!l%eO~Oh%VO!l%eO(T%gO~O!g#vO#k(xO~Ob+tO%j+uO(T+qO(VTO(YUO!^)XP~O!]+vO`)WX~O[+zO~O`+{O~O!_&PO(T%gO(U!lO`)WP~O%j,OO~P;SOh%VO#`,SO~Oh%VOn,VO!_$|O~O!_,XO~O!Q,ZO!_XO~O%n%vO~O!x,`O~Oe,eO~Ob,fO(T#nO(VTO(YUO!^)VP~Oe%}O~O%j!QO(T&ZO~P=gO[,kO`,jO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(VTO(YUO(aVO(o[O~O!_!eO!u!gO$W!kO(T!dO~P!FyO`,jOa%nO'z%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa,pOl!OO!uwO%l!OO%m!OO%n!OO~P!IcO!l&oO~O&^,vO~O!_,xO~O&o,zO&q,{OP&laQ&laS&laY&laa&lad&lae&lal&lap&lar&las&lat&laz&la|&la!O&la!S&la!W&la!X&la!_&la!i&la!l&la!o&la!p&la!q&la!s&la!u&la!x&la!|&la$W&la$n&la%h&la%j&la%l&la%m&la%n&la%q&la%s&la%v&la%w&la%y&la&W&la&^&la&`&la&b&la&d&la&g&la&m&la&s&la&u&la&w&la&y&la&{&la'w&la(T&la(V&la(Y&la(a&la(o&la!^&la&e&lab&la&j&la~O(T-QO~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P#!iO!g-VO#`-UOh(jX!]#hX!^#hX!g(jX!l(jX~O!](jX!^(jX~P##[Oh%VO!g-XO!l%eO!]!aX!^!aX~Os!nO!S!oO(VTO(YUO(e!mO~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(VTO(YUO(aVO(o[O~O(T=QO~P#$qO!]-]O!^(iX~O!^-_O~O!g-VO#`-UO!]#hX!^#hX~O!]-`O!^(xX~O!^-bO~O!c-cO!d-cO(U!lO~P#$`O!^-fO~P'_On-iO!_'`O~O!Y-nO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(U!{a(V!{a(Y!{a(e!{a(o!{a~P!#vO!p-sO#`-qO~PChO!c-uO!d-uO(U!lO~PDWOa%nO#`-qO'z%nO~Oa%nO!g#vO#`-qO'z%nO~Oa%nO!g#vO!p-sO#`-qO'z%nO(r'pO~O(P'xO(Q'xO(R-zO~Ov-{O~O!Y'Wa!]'Wa~P!:tO![.PO!Y'WX!]'WX~P%[O!](VO!Y(ha~O!Y(ha~PHRO!](^O!Y(va~O!S%hO![.TO!_%iO(T%gO!Y'^X!]'^X~O#`.VO!](ta!k(taa(ta'z(ta~O!g#vO~P#,wO!](jO!k(sa~O!S%hO!_%iO#j.ZO(T%gO~Op.`O!S%hO![.]O!_%iO!|]O#i._O#j.]O(T%gO!]'aX!k'aX~OR.dO!l#xO~Oh%VOn.gO!_'`O%i.fO~Oa#ci!]#ci'z#ci'w#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:tOn>]O!Q*OO'y*PO(y$}O(z%PO~O#k#_aa#_a#`#_a'z#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#k(`XP(`XR(`X[(`Xa(`Xj(`Xr(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X'z(`X(a(`X(r(`X!k(`X!Y(`X'w(`Xv(`X!_(`X%i(`X!g(`X~P!6kO!].tO!k(kX~P!:tO!k.wO~O!Y.yO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#3cO#n$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#6QO#r$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(aVOa#mi!]#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(aVO(z#}Oa#mi!]#mi#z#mi#{#mi'z#mi(r#mi(y#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#;VO#x#mi~P#;VO#v$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(aVO(y#|O(z#}Oa#mi!]#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#={O#z$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X!]]X!^]X~O$O]X~P#@jOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO#z<gO#{<hO(aVO(r$YO(y#|O(z#}O~O$O.{O~P#BwO#S$dO#`<nO$Q<nO$O(gX!^(gX~P! uOa'da!]'da'z'da'w'da!k'da!Y'dav'da!_'da%i'da!g'da~P!:tO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO(y#mi(z#mi~P#EyOn>]O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P#EyO!]/POg(pX~P!1WOg/RO~Oa$Pi!]$Pi'z$Pi'w$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:tO$]/SO$_/SO~O$]/TO$_/TO~O!g)hO#`/UO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/VO~O!_)kO$Z/XO$])jO$_)jO$f/YO~O!]<iO!^(fX~P#BwO!^/ZO~O!g)hO$f({X~O$f/]O~Ov/^O~P!&zOx)yO(b)zO(c/aO~O!S/dO~O(y$}On%aa!Q%aa'y%aa(z%aa!]%aa#`%aa~Og%aa$O%aa~P#L{O(z%POn%ca!Q%ca'y%ca(y%ca!]%ca#`%ca~Og%ca$O%ca~P#MnO!]fX!gfX!kfX!k$zX(rfX~P!0SOp%WO![/mO!](^O(T/lO!Y(vP!Y)PP~P!1uOr*sO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO~Os<}O!S/nO![+[O!^*pO(e<|O!^(xP~P$ [O!k/oO~P#/sO!]/pO!g#vO(r'pO!k)OX~O!k/uO~OnoX!QoX'yoX(yoX(zoX~O!g#vO!koX~P$#OOp/wO!S%hO![*^O!_%iO(T%gO!k)OP~O#k/xO~O!Y$zX!]$zX!g%RX~P!0SO!]/yO!Y)PX~P#/sO!g/{O~O!Y/}O~OpkO(T0OO~P.iOh%VOr0TO!g#vO!l%eO(r'pO~O!g+iO~Oa%nO!]0XO'z%nO~O!^0ZO~P!5iO!c0[O!d0[O(U!lO~P#$`Os!nO!S0]O(VTO(YUO(e!mO~O#[0_O~Og%aa!]%aa#`%aa$O%aa~P!1WOg%ca!]%ca#`%ca$O%ca~P!1WOj%dOk%dOl%dO(T&ZOg'mX!]'mX~O!]*yOg(^a~Og0hO~On0jO#`0iOg(_a!](_a~OR0kO!Q0kO!S0lO#S$dOn}a'y}a(y}a(z}a!]}a#`}a~Og}a$O}a~P$(cO!Q*OO'y*POn$sa(y$sa(z$sa!]$sa#`$sa~Og$sa$O$sa~P$)_O!Q*OO'y*POn$ua(y$ua(z$ua!]$ua#`$ua~Og$ua$O$ua~P$*QO#k0oO~Og%Ta!]%Ta#`%Ta$O%Ta~P!1WO!g#vO~O#k0rO~O!]+^Oa)Ta'z)Ta~OR#zO!Q#yO!S#{O!l#xO(aVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(r!ri(y!ri(z!ri~Oa!ri'z!ri'w!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$+oOh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op0{O%]0|O(T0zO~P$.VO!g+iOa(]a!_(]a'z(]a!](]a~O#k1SO~O[]X!]fX!^fX~O!]1TO!^)XX~O!^1VO~O[1WO~Ob1YO(T+qO(VTO(YUO~O!_&PO(T%gO`'uX!]'uX~O!]+vO`)Wa~O!k1]O~P!:tO[1`O~O`1aO~O#`1fO~On1iO!_$|O~O(e(|O!^)UP~Oh%VOn1rO!_1oO%i1qO~O[1|O!]1zO!^)VX~O!^1}O~O`2POa%nO'z%nO~O(T#nO(VTO(YUO~O#S$dO#`$eO$Q$eOP(gXR(gX[(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~Oj2SO&[2TOa(gX~P$3pOj2SO#`$eO&[2TO~Oa2VO~P%[Oa2XO~O&e2[OP&ciQ&ciS&ciY&cia&cid&cie&cil&cip&cir&cis&cit&ciz&ci|&ci!O&ci!S&ci!W&ci!X&ci!_&ci!i&ci!l&ci!o&ci!p&ci!q&ci!s&ci!u&ci!x&ci!|&ci$W&ci$n&ci%h&ci%j&ci%l&ci%m&ci%n&ci%q&ci%s&ci%v&ci%w&ci%y&ci&W&ci&^&ci&`&ci&b&ci&d&ci&g&ci&m&ci&s&ci&u&ci&w&ci&y&ci&{&ci'w&ci(T&ci(V&ci(Y&ci(a&ci(o&ci!^&cib&ci&j&ci~Ob2bO!^2`O&j2aO~P`O!_XO!l2dO~O&q,{OP&liQ&liS&liY&lia&lid&lie&lil&lip&lir&lis&lit&liz&li|&li!O&li!S&li!W&li!X&li!_&li!i&li!l&li!o&li!p&li!q&li!s&li!u&li!x&li!|&li$W&li$n&li%h&li%j&li%l&li%m&li%n&li%q&li%s&li%v&li%w&li%y&li&W&li&^&li&`&li&b&li&d&li&g&li&m&li&s&li&u&li&w&li&y&li&{&li'w&li(T&li(V&li(Y&li(a&li(o&li!^&li&e&lib&li&j&li~O!Y2jO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2pO(e!mO!]'XX!^'XX~P@nO!]-]O!^(ia~O!]'_X!^'_X~P!9|O!]-`O!^(xa~O!^2wO~P'_Oa%nO#`3QO'z%nO~Oa%nO!g#vO#`3QO'z%nO~Oa%nO!g#vO!p3UO#`3QO'z%nO(r'pO~Oa%nO'z%nO~P!:tO!]$_Ov$qa~O!Y'Wi!]'Wi~P!:tO!](VO!Y(hi~O!](^O!Y(vi~O!Y(wi!](wi~P!:tO!](ti!k(tia(ti'z(ti~P!:tO#`3WO!](ti!k(tia(ti'z(ti~O!](jO!k(si~O!S%hO!_%iO!|]O#i3]O#j3[O(T%gO~O!S%hO!_%iO#j3[O(T%gO~On3dO!_'`O%i3cO~Oh%VOn3dO!_'`O%i3cO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aav%aa!_%aa%i%aa!g%aa~P#L{O#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%cav%ca!_%ca%i%ca!g%ca~P#MnO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/sO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/sO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'z}a(a}a(r}a!k}a!Y}a'w}av}a!_}a%i}a!g}a~P$(cO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'z$sa(a$sa(r$sa!k$sa!Y$sa'w$sav$sa!_$sa%i$sa!g$sa~P$)_O#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'z$ua(a$ua(r$ua!k$ua!Y$ua'w$uav$ua!_$ua%i$ua!g$ua~P$*QO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'z%Ta(a%Ta(r%Ta!k%Ta!Y%Ta'w%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/sOa#cq!]#cq'z#cq'w#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:tO![3lO!]'YX!k'YX~P%[O!].tO!k(ka~O!].tO!k(ka~P!:tO!Y3oO~O$O!na!^!na~PKlO$O!ja!]!ja!^!ja~P#BwO$O!ra!^!ra~P!=[O$O!ta!^!ta~P!?rOg']X!]']X~P!,TO!]/POg(pa~OSfO!_4TO$d4UO~O!^4YO~Ov4ZO~P#/sOa$mq!]$mq'z$mq'w$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:tO!Y4]O~P!&zO!S4^O~O!Q*OO'y*PO(z%POn'ia(y'ia!]'ia#`'ia~Og'ia$O'ia~P%-fO!Q*OO'y*POn'ka(y'ka(z'ka!]'ka#`'ka~Og'ka$O'ka~P%.XO(r$YO~P#/sO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!0SOp%WO(T=WO~P!1uOp4bO!S%hO![4aO!_%iO(T%gO!]'eX!k'eX~O!]/pO!k)Oa~O!]/pO!g#vO!k)Oa~O!]/pO!g#vO(r'pO!k)Oa~Og$|i!]$|i#`$|i$O$|i~P!1WO![4jO!Y'gX!]'gX~P!3tO!]/yO!Y)Pa~O!]/yO!Y)Pa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~Oj%YX!g%YX~P%2OOj4oO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4tO!l%eO(r'pO~Or4yO!g#vO(r'pO~Os!nO!S4zO(VTO(YUO(e!mO~O(y$}On%ai!Q%ai'y%ai(z%ai!]%ai#`%ai~Og%ai$O%ai~P%5oO(z%POn%ci!Q%ci'y%ci(y%ci!]%ci#`%ci~Og%ci$O%ci~P%6bOg(_i!](_i~P!1WO#`5QOg(_i!](_i~P!1WO!k5VO~Oa$oq!]$oq'z$oq'w$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:tO!Y5ZO~O!]5[O!_)QX~P#/sOa$zX!_$zX%^]X'z$zX!]$zX~P!0SO%^5_OaoX!_oX'zoX!]oX~P$#OOp5`O(T#nO~O%^5_O~Ob5fO%j5gO(T+qO(VTO(YUO!]'tX!^'tX~O!]1TO!^)Xa~O[5kO~O`5lO~O[5pO~Oa%nO'z%nO~P#/sO!]5uO#`5wO!^)UX~O!^5xO~Or6OOs!nO!S*iO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!pO#W!pO#X!pO#[5}O#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O!^5|O~P%;eOn6TO!_1oO%i6SO~Oh%VOn6TO!_1oO%i6SO~Ob6[O(T#nO(VTO(YUO!]'sX!^'sX~O!]1zO!^)Va~O(VTO(YUO(e6^O~O`6bO~Oj6eO&[6fO~PNXO!k6gO~P%[Oa6iO~Oa6iO~P%[Ob2bO!^6nO&j2aO~P`O!g6pO~O!g6rOh(ji!](ji!^(ji!g(ji!l(jir(ji(r(ji~O!]#hi!^#hi~P#BwO#`6sO!]#hi!^#hi~O!]!ai!^!ai~P#BwOa%nO#`6|O'z%nO~Oa%nO!g#vO#`6|O'z%nO~O!](tq!k(tqa(tq'z(tq~P!:tO!](jO!k(sq~O!S%hO!_%iO#j7TO(T%gO~O!_'`O%i7WO~On7[O!_'`O%i7WO~O#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'z'ia(a'ia(r'ia!k'ia!Y'ia'w'iav'ia!_'ia%i'ia!g'ia~P%-fO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'z'ka(a'ka(r'ka!k'ka!Y'ka'w'kav'ka!_'ka%i'ka!g'ka~P%.XO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'z$|i(a$|i(r$|i!k$|i!Y$|i'w$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/sO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'z%ai(a%ai(r%ai!k%ai!Y%ai'w%aiv%ai!_%ai%i%ai!g%ai~P%5oO#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'z%ci(a%ci(r%ci!k%ci!Y%ci'w%civ%ci!_%ci%i%ci!g%ci~P%6bO!]'Ya!k'Ya~P!:tO!].tO!k(ki~O$O#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#n#mi~P%NdO#n<_O~P%NdOP$[OR#zOr<kO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#r#mi~P&!lO#r<aO~P&!lOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO(aVO#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#v#mi~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO(aVO(z#}O#z#mi#{#mi$O#mi(r#mi(y#mi!]#mi!^#mi~O#x<eO~P&&uO#x#mi~P&&uO#v<cO~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO(aVO(y#|O(z#}O#{#mi$O#mi(r#mi!]#mi!^#mi~O#z#mi~P&)UO#z<gO~P&)UOa#|y!]#|y'z#|y'w#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:tO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO(y#mi(z#mi~P&,QOn>^O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P&,QO#S$dOP(`XR(`X[(`Xj(`Xn(`Xr(`X!Q(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X$O(`X'y(`X(a(`X(r(`X(y(`X(z(`X!](`X!^(`X~O$O$Pi!]$Pi!^$Pi~P#BwO$O!ri!^!ri~P$+oOg']a!]']a~P!1WO!^7nO~O!]'da!^'da~P#BwO!Y7oO~P#/sO!g#vO(r'pO!]'ea!k'ea~O!]/pO!k)Oi~O!]/pO!g#vO!k)Oi~Og$|q!]$|q#`$|q$O$|q~P!1WO!Y'ga!]'ga~P#/sO!g7vO~O!]/yO!Y)Pi~P#/sO!]/yO!Y)Pi~O!Y7yO~Oh%VOr8OO!l%eO(r'pO~Oj8QO!g#vO~Or8TO!g#vO(r'pO~O!Q*OO'y*PO(z%POn'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P&5RO!Q*OO'y*POn'la(y'la(z'la!]'la#`'la~Og'la$O'la~P&5tOg(_q!](_q~P!1WO#`8VOg(_q!](_q~P!1WO!Y8WO~Og%Oq!]%Oq#`%Oq$O%Oq~P!1WOa$oy!]$oy'z$oy'w$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:tO!g6rO~O!]5[O!_)Qa~O!_'`OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(a$Ta(r$Ta(y$Ta(z$Ta~O%i7WO~P&8fO%^8[Oa%[i!_%[i'z%[i!]%[i~Oa#cy!]#cy'z#cy'w#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:tO[8^O~Ob8`O(T+qO(VTO(YUO~O!]1TO!^)Xi~O`8dO~O(e(|O!]'pX!^'pX~O!]5uO!^)Ua~O!^8nO~P%;eO(o!sO~P$&YO#[8oO~O!_1oO~O!_1oO%i8qO~On8tO!_1oO%i8qO~O[8yO!]'sa!^'sa~O!]1zO!^)Vi~O!k8}O~O!k9OO~O!k9RO~O!k9RO~P%[Oa9TO~O!g9UO~O!k9VO~O!](wi!^(wi~P#BwOa%nO#`9_O'z%nO~O!](ty!k(tya(ty'z(ty~P!:tO!](jO!k(sy~O%i9bO~P&8fO!_'`O%i9bO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'z$|q(a$|q(r$|q!k$|q!Y$|q'w$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/sO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'z'ja(a'ja(r'ja!k'ja!Y'ja'w'jav'ja!_'ja%i'ja!g'ja~P&5RO#k'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la'z'la(a'la(r'la!k'la!Y'la'w'lav'la!_'la%i'la!g'la~P&5tO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'z%Oq(a%Oq(r%Oq!k%Oq!Y%Oq'w%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/sO!]'Yi!k'Yi~P!:tO$O#cq!]#cq!^#cq~P#BwO(y$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(a%aa(r%aa!]%aa!^%aa~On%aa!Q%aa'y%aa(z%aa~P&IyO(z%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(a%ca(r%ca!]%ca!^%ca~On%ca!Q%ca'y%ca(y%ca~P&LQOn>^O!Q*OO'y*PO(z%PO~P&IyOn>^O!Q*OO'y*PO(y$}O~P&LQOR0kO!Q0kO!S0lO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'y}a(a}a(r}a(y}a(z}a!]}a!^}a~O!Q*OO'y*POP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(a$sa(r$sa(y$sa(z$sa!]$sa!^$sa~O!Q*OO'y*POP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(a$ua(r$ua(y$ua(z$ua!]$ua!^$ua~On>^O!Q*OO'y*PO(y$}O(z%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(a%Ta(r%Ta!]%Ta!^%Ta~P''VO$O$mq!]$mq!^$mq~P#BwO$O$oq!]$oq!^$oq~P#BwO!^9oO~O$O9pO~P!1WO!g#vO!]'ei!k'ei~O!g#vO(r'pO!]'ei!k'ei~O!]/pO!k)Oq~O!Y'gi!]'gi~P#/sO!]/yO!Y)Pq~Or9wO!g#vO(r'pO~O[9yO!Y9xO~P#/sO!Y9xO~Oj:PO!g#vO~Og(_y!](_y~P!1WO!]'na!_'na~P#/sOa%[q!_%[q'z%[q!]%[q~P#/sO[:UO~O!]1TO!^)Xq~O`:YO~O#`:ZO!]'pa!^'pa~O!]5uO!^)Ui~P#BwO!S:]O~O!_1oO%i:`O~O(VTO(YUO(e:eO~O!]1zO!^)Vq~O!k:hO~O!k:iO~O!k:jO~O!k:jO~P%[O#`:mO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%i:rO~P&8fO!_'`O%i:rO~O$O#|y!]#|y!^#|y~P#BwOP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(a$|i(r$|i!]$|i!^$|i~P''VO!Q*OO'y*PO(z%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(a'ia(r'ia(y'ia!]'ia!^'ia~O!Q*OO'y*POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(a'ka(r'ka(y'ka(z'ka!]'ka!^'ka~O(y$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'y%ai(a%ai(r%ai(z%ai!]%ai!^%ai~O(z%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'y%ci(a%ci(r%ci(y%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#BwO$O#cy!]#cy!^#cy~P#BwO!g#vO!]'eq!k'eq~O!]/pO!k)Oy~O!Y'gq!]'gq~P#/sOr:|O!g#vO(r'pO~O[;QO!Y;PO~P#/sO!Y;PO~Og(_!R!](_!R~P!1WOa%[y!_%[y'z%[y!]%[y~P#/sO!]1TO!^)Xy~O!]5uO!^)Uq~O(T;XO~O!_1oO%i;[O~O!k;_O~O%i;dO~P&8fOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(a$|q(r$|q!]$|q!^$|q~P''VO!Q*OO'y*PO(z%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(a'ja(r'ja(y'ja!]'ja!^'ja~O!Q*OO'y*POP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la$O'la(a'la(r'la(y'la(z'la!]'la!^'la~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(a%Oq(r%Oq!]%Oq!^%Oq~P''VOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!1WO!Y;hO~P#/sOr;iO!g#vO(r'pO~O[;kO!Y;hO~P#/sO!]'pq!^'pq~P#BwO!]#h!Z!^#h!Z~P#BwO#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'z%e!Z(a%e!Z(r%e!Z!k%e!Z!Y%e!Z'w%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/sOr;tO!g#vO(r'pO~O!Y;uO~P#/sOr;|O!g#vO(r'pO~O!Y;}O~P#/sOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(a%e!Z(r%e!Z!]%e!Z!^%e!Z~P''VOr<QO!g#vO(r'pO~Ov(fX~P1qO!Q%rO~P!)[O(U!lO~P!)[O!YfX!]fX#`fX~P%2OOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~O!gfX!k]X!kfX(rfX~P'LTOP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_XO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]<iO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<tO!S${O!_$|O!i>WO!l$xO#j<zO$W%`O$t<vO$v<xO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Ol)dO~P(!yOr!eX(r!eX~P#!iOr(jX(r(jX~P##[O!^]X!^fX~P'LTO!YfX!Y$zX!]fX!]$zX#`fX~P!0SO#k<^O~O!g#vO#k<^O~O#`<nO~Oj<bO~O#`=OO!](wX!^(wX~O#`<nO!](uX!^(uX~O#k=PO~Og=RO~P!1WO#k=XO~O#k=YO~Og=RO(T&ZO~O!g#vO#k=ZO~O!g#vO#k=PO~O$O=[O~P#BwO#k=]O~O#k=^O~O#k=cO~O#k=dO~O#k=eO~O#k=fO~O$O=gO~P!1WO$O=hO~P!1WOl=sO~P7eOk#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~(OT#o!X'|(U#ps#n#qr!Q'}$]'}(T$_(e~",
        goto: "$9Y)]PPPPPP)^PP)aP)rP+W/]PPPP6mPP7TPP=QPPP@tPA^PA^PPPA^PCfPA^PA^PA^PCjPCoPD^PIWPPPI[PPPPI[L_PPPLeMVPI[PI[PP! eI[PPPI[PI[P!#lI[P!'S!(X!(bP!)U!)Y!)U!,gPPPPPPP!-W!(XPP!-h!/YP!2iI[I[!2n!5z!:h!:h!>gPPP!>oI[PPPPPPPPP!BOP!C]PPI[!DnPI[PI[I[I[I[I[PI[!FQP!I[P!LbP!Lf!Lp!Lt!LtP!IXP!Lx!LxP#!OP#!SI[PI[#!Y#%_CjA^PA^PA^A^P#&lA^A^#)OA^#+vA^#.SA^A^#.r#1W#1W#1]#1f#1W#1qPP#1WPA^#2ZA^#6YA^A^6mPPP#:_PPP#:x#:xP#:xP#;`#:xPP#;fP#;]P#;]#;y#;]#<e#<k#<n)aP#<q)aP#<z#<z#<zP)aP)aP)aP)aPP)aP#=Q#=TP#=T)aP#=XP#=[P)aP)aP)aP)aP)aP)a)aPP#=b#=h#=s#=y#>P#>V#>]#>k#>q#>{#?R#?]#?c#?s#?y#@k#@}#AT#AZ#Ai#BO#Cs#DR#DY#Et#FS#Gt#HS#HY#H`#Hf#Hp#Hv#H|#IW#Ij#IpPPPPPPPPPPP#IvPPPPPPP#Jk#Mx$ b$ i$ qPPP$']P$'f$*_$0x$0{$1O$1}$2Q$2X$2aP$2g$2jP$3W$3[$4S$5b$5g$5}PP$6S$6Y$6^$6a$6e$6i$7e$7|$8e$8i$8l$8o$8y$8|$9Q$9UR!|RoqOXst!Z#d%m&r&t&u&w,s,x2[2_Y!vQ'`-e1o5{Q%tvQ%|yQ&T|Q&j!VS'W!e-]Q'f!iS'l!r!yU*k$|*Z*oQ+o%}S+|&V&WQ,d&dQ-c'_Q-m'gQ-u'mQ0[*qQ1b,OQ1y,eR<{<Y%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_S#q]<V!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU+P%]<s<tQ+t&PQ,f&gQ,m&oQ0x+gQ0}+iQ1Y+uQ2R,kQ3`.gQ5`0|Q5f1TQ6[1zQ7Y3dQ8`5gR9e7['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S!S!nQ!r!v!y!z$|'W'_'`'l'm'n*k*o*q*r-]-c-e-u0[0_1o5{5}%[$ti#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q&X|Q'U!eS'[%i-`Q+t&PQ,P&WQ,f&gQ0n+SQ1Y+uQ1_+{Q2Q,jQ2R,kQ5f1TQ5o1aQ6[1zQ6_1|Q6`2PQ8`5gQ8c5lQ8|6bQ:X8dQ:f8yQ;V:YR<}*ZrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R,h&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'b'r(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>R>S[#]WZ#W#Z'X(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ%wxQ%{yW&Q|&V&W,OQ&_!TQ'c!hQ'e!iQ(q#sS+n%|%}Q+r&PQ,_&bQ,c&dS-l'f'gQ.i(rQ1R+oQ1X+uQ1Z+vQ1^+zQ1t,`S1x,d,eQ2|-mQ5e1TQ5i1WQ5n1`Q6Z1yQ8_5gQ8b5kQ8f5pQ:T8^R;T:U!U$zi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y!^%yy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{Q+h%wQ,T&[Q,W&]Q,b&dQ.h(qQ1s,_U1w,c,d,eQ3e.iQ6U1tS6Y1x1yQ8x6Z#f>T#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o>U<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hW%Ti%V*y>PS&[!Q&iQ&]!RQ&^!SU*}%[%d=sR,R&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^T)z$u){V+P%]<s<tW'[!e%i*Z-`S(}#y#zQ+c%rQ+y&SS.b(m(nQ1j,XQ5T0kR8i5u'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S$i$^c#Y#e%q%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.|.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ'Y!eR2q-]!W!nQ!e!r!v!y!z$|'W'_'`'l'm'n*Z*k*o*q*r-]-c-e-u0[0_1o5{5}R1l,ZnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&y!^Q'v!xS(s#u<^Q+l%zQ,]&_Q,^&aQ-j'dQ-w'oS.r(x=PS0q+X=ZQ1P+mQ1n,[Q2c,zQ2e,{Q2m-WQ2z-kQ2}-oS5Y0r=eQ5a1QS5d1S=fQ6t2oQ6x2{Q6}3SQ8]5bQ9Y6vQ9Z6yQ9^7OR:l9V$d$]c#Y#e%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vS(o#p'iQ)P#zS+b%q.|S.c(n(pR3^.d'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS#q]<VQ&t!XQ&u!YQ&w![Q&x!]R2Z,vQ'a!hQ+e%wQ-h'cS.e(q+hQ2x-gW3b.h.i0w0yQ6w2yW7U3_3a3e5^U9a7V7X7ZU:q9c9d9fS;b:p:sQ;p;cR;x;qU!wQ'`-eT5y1o5{!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(j,s,x.[2[2_]!pQ!r'`-e1o5{T#q]<V%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S(}#y#zS.b(m(n!s=l$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU$fd)_,mS(p#p'iU*v%R(w4OU0m+O.n7gQ5^0xQ7V3`Q9d7YR:s9em!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}Q't!uS(f#g2US-s'k'wQ/s*]Q0R*jQ3U-vQ4f/tQ4r0TQ4s0UQ4x0^Q7r4`S7}4t4vS8R4y4{Q9r7sQ9v7yQ9{8OQ:Q8TS:{9w9xS;g:|;PS;s;h;iS;{;t;uS<P;|;}R<S<QQ#wbQ's!uS(e#g2US(g#m+WQ+Y%fQ+j%xQ+p&OU-r'k't'wQ.W(fU/r*]*`/wQ0S*jQ0V*lQ1O+kQ1u,aS3R-s-vQ3Z.`S4e/s/tQ4n0PS4q0R0^Q4u0WQ6W1vQ7P3US7q4`4bQ7u4fU7|4r4x4{Q8P4wQ8v6XS9q7r7sQ9u7yQ9}8RQ:O8SQ:c8wQ:y9rS:z9v9xQ;S:QQ;^:dS;f:{;PS;r;g;hS;z;s;uS<O;{;}Q<R<PQ<T<SQ=o=jQ={=tR=|=uV!wQ'`-e%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S#wz!j!r=i$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=o>R%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Q%fj!^%xy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{S&Oz!jQ+k%yQ,a&dW1v,b,c,d,eU6X1w1x1yS8w6Y6ZQ:d8x!r=j$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ=t>QR=u>R%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Y#bWZ#W#Z(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ,n&o!p=k$Z$n)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=n'XU']!e%i*ZR2s-`%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ,m&oQ0x+gQ3`.gQ7Y3dR9e7[!b$Tc#Y%q(S(Y(t(y)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!P<d)^)q-Z.|2k2n3p3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!f$Vc#Y%q(S(Y(t(y)W)X)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!T<f)^)q-Z.|2k2n3p3v3w3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!^$Zc#Y%q(S(Y(t(y)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<WQ4_/kz>S)^)q-Z.|2k2n3p4P4X6u7b7k7l8k9X9g9m9n;W;`=vQ>X>ZR>Y>['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS$oh$pR4U/U'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$kf$qQ$ifS)j$l)nR)v$qT$jf$qT)l$l)n'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$oh$pQ$rhR)u$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_!s>Q$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'b)O)s*i+]+g,p,s,x-i.g/V/n0]0l1r2S2T2V2X2[2_2a3d4T4z6T6e6f6i7[8t9T!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^Q+T%aQ/c*Oo4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!U$yi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>YQ*c$zU*l$|*Z*oQ+U%bQ0W*m#f=q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n=r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hQ=w>TQ=x>UQ=y>VR=z>W!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hnoOXst!Z#d%m&r&t&u&w,s,x2[2_S*f${*YQ-R'OQ-S'QR4i/y%[%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q,U&]Q1h,WQ5s1gR8h5tV*n$|*Z*oU*n$|*Z*oT5z1o5{S0P*i/nQ4w0]T8S4z:]Q+j%xQ0V*lQ1O+kQ1u,aQ6W1vQ8v6XQ:c8wR;^:d!U%Oi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Yx*R$v)e*S*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>OS0`*t0a#f<o#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<p<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!d=S(u)c*[*e.j.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[`=T3}7c7f7j9h:t:w;yS=_.l3iT=`7e9k!U%Qi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y|*T$v)e*U*t+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>OS0b*u0c#f<q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!h=U(u)c*[*e.k.l.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[d=V3}7d7e7j9h9i:t:u:w;yS=a.m3jT=b7f9lrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q&f!UR,p&ornOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R&f!UQ,Y&^R1d,RsnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q1p,_S6R1s1tU8p6P6Q6US:_8r8sS;Y:^:aQ;m;ZR;w;nQ&m!VR,i&iR6_1|R:f8yW&Q|&V&W,OR1Z+vQ&r!WR,s&sR,y&xT2],x2_R,}&yQ,|&yR2f,}Q'y!{R-y'ySsOtQ#dXT%ps#dQ#OTR'{#OQ#RUR'}#RQ){$uR/`){Q#UVR(Q#UQ#XWU(W#X(X.QQ(X#YR.Q(YQ-^'YR2r-^Q.u(yS3m.u3nR3n.vQ-e'`R2v-eY!rQ'`-e1o5{R'j!rQ/Q)eR4S/QU#_W%h*YU(_#_(`.RQ(`#`R.R(ZQ-a']R2t-at`OXst!V!Z#d%m&i&k&r&t&u&w,s,x2[2_S#hZ%eU#r`#h.[R.[(jQ(k#jQ.X(gW.a(k.X3X7RQ3X.YR7R3YQ)n$lR/W)nQ$phR)t$pQ$`cU)a$`-|<jQ-|<WR<j)qQ/q*]W4c/q4d7t9sU4d/r/s/tS7t4e4fR9s7u$e*Q$v(u)c)e*[*e*t*u+Q+R+V.l.m.o.p.q/_/g/i/k/v/|0d0e0v1e3f3g3h3}4R4[4g4h4l4|5O5R5S5W5r7]7^7_7`7e7f7h7i7j7p7w7z8U8X8Z9h9i9j9t9|:R:S:t:u:v:w:x:};R;e;j;v;y=p=}>O>Z>[Q/z*eU4k/z4m7xQ4m/|R7x4lS*o$|*ZR0Y*ox*S$v)e*t*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>O!d.j(u)c*[*e.l.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/h*S.j7ca7c3}7e7f7j9h:t:w;yQ0a*tQ3i.lU4}0a3i9kR9k7e|*U$v)e*t*u+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>O!h.k(u)c*[*e.l.m.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/j*U.k7de7d3}7e7f7j9h9i:t:u:w;yQ0c*uQ3j.mU5P0c3j9lR9l7fQ*z%UR0g*zQ5]0vR8Y5]Q+_%kR0u+_Q5v1jS8j5v:[R:[8kQ,[&_R1m,[Q5{1oR8m5{Q1{,fS6]1{8zR8z6_Q1U+rW5h1U5j8a:VQ5j1XQ8a5iR:V8bQ+w&QR1[+wQ2_,xR6m2_YrOXst#dQ&v!ZQ+a%mQ,r&rQ,t&tQ,u&uQ,w&wQ2Y,sS2],x2_R6l2[Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'q!uQ+`%lQ+l%zQ,Q&XQ,h&mQ-P&|W-p'k's't'wQ-w'oQ0X*nQ1P+mQ1c,PS2O,i,lQ2g-OQ2h-RQ2i-SQ2}-oW3P-r-s-v-xQ5a1QQ5m1_Q5q1eQ6V1uQ6a2QQ6k2ZU6z3O3R3UQ6}3SQ8]5bQ8e5oQ8g5rQ8l5zQ8u6WQ8{6`S9[6{7PQ9^7OQ:W8cQ:b8vQ:g8|Q:n9]Q;U:XQ;]:cQ;a:oQ;l;VR;o;^Q%zyQ'd!iQ'o!uU+m%{%|%}Q-W'VU-k'e'f'gS-o'k'uQ0Q*jS1Q+n+oQ2o-YS2{-l-mQ3S-tS4p0R0UQ5b1RQ6v2uQ6y2|Q7O3TU7{4r4s4vQ9z7}R;O9{S$wi>PR*{%VU%Ui%V>PR0f*yQ$viS(u#v+iS)c$b$cQ)e$dQ*[$xS*e${*YQ*t%OQ*u%QQ+Q%^Q+R%_Q+V%cQ.l<oQ.m<qQ.o<uQ.p<wQ.q<yQ/_)yQ/g*RQ/i*TQ/k*VQ/v*aS/|*g/mQ0d*wQ0e*xl0v+f,V.f1i1q3c6S7W8q9b:`:r;[;dQ1e,SQ3f=SQ3g=UQ3h=XS3}<l<mQ4R/PS4[/d4^Q4g/xQ4h/yQ4l/{Q4|0`Q5O0bQ5R0iQ5S0jQ5W0oQ5r1fQ7]=]Q7^=_Q7_=aQ7`=cQ7e<pQ7f<rQ7h<vQ7i<xQ7j<zQ7p4_Q7w4jQ7z4oQ8U5QQ8X5[Q8Z5_Q9h=YQ9i=TQ9j=VQ9t7vQ9|8QQ:R8VQ:S8[Q:t=^Q:u=`Q:v=bQ:w=dQ:x9pQ:}9yQ;R:PQ;e=gQ;j;QQ;v;kQ;y=hQ=p>PQ=}>XQ>O>YQ>Z>]R>[>^Q+O%]Q.n<sR7g<tnpOXst!Z#d%m&r&t&u&w,s,x2[2_Q!fPS#fZ#oQ&|!`W'h!o*i0]4zQ(P#SQ)Q#{Q)r$nS,l&k&nQ,q&oQ-O&{S-T'T/nQ-g'bQ.x)OQ/[)sQ0s+]Q0y+gQ2W,pQ2y-iQ3a.gQ4W/VQ5U0lQ6Q1rQ6c2SQ6d2TQ6h2VQ6j2XQ6o2aQ7Z3dQ7m4TQ8s6TQ9P6eQ9Q6fQ9S6iQ9f7[Q:a8tR:k9T#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'b)O*i+]+g,p,s,x-i.g/n0]0l1r2S2T2V2X2[2_2a3d4z6T6e6f6i7[8t9TQ#YWQ#eYQ%quQ%svS%uw!gS(S#W(VQ(Y#ZQ(t#uQ(y#xQ)R$OQ)S$PQ)T$QQ)U$RQ)V$SQ)W$TQ)X$UQ)Y$VQ)Z$WQ)[$XQ)^$ZQ)`$_Q)b$aQ)g$eW)q$n)s/V4TQ+d%tQ+x&RS-Z'X2pQ-x'rS-}(T.PQ.S(]Q.U(dQ.s(xQ.v(zQ.z<UQ.|<XQ.}<YQ/O<]Q/b)}Q0p+XQ2k-UQ2n-XQ3O-qQ3V.VQ3k.tQ3p<^Q3q<_Q3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{.{Q3|<kQ4P<nQ4Q<{Q4X<iQ5X0rQ5c1SQ6u=OQ6{3QQ7Q3WQ7a3lQ7b=PQ7k=RQ7l=ZQ8k5wQ9X6sQ9]6|Q9g=[Q9m=eQ9n=fQ:o9_Q;W:ZQ;`:mQ<W#SR=v>SR#[WR'Z!el!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}S'V!e-]U*j$|*Z*oS-Y'W'_S0U*k*qQ0^*rQ2u-cQ4v0[R4{0_R({#xQ!fQT-d'`-e]!qQ!r'`-e1o5{Q#p]R'i<VR)f$dY!uQ'`-e1o5{Q'k!rS'u!v!yS'w!z5}S-t'l'mQ-v'nR3T-uT#kZ%eS#jZ%eS%km,oU(g#h#i#lS.Y(h(iQ.^(jQ0t+^Q3Y.ZU3Z.[.]._S7S3[3]R9`7Td#^W#W#Z%h(T(^*Y+Z.T/mr#gZm#h#i#l%e(h(i(j+^.Z.[.]._3[3]7TS*]$x*bQ/t*^Q2U,oQ2l-VQ4`/pQ6q2dQ7s4aQ9W6rT=m'X+[V#aW%h*YU#`W%h*YS(U#W(^U(Z#Z+Z/mS-['X+[T.O(T.TV'^!e%i*ZQ$lfR)x$qT)m$l)nR4V/UT*_$x*bT*h${*YQ0w+fQ1g,VQ3_.fQ5t1iQ6P1qQ7X3cQ8r6SQ9c7WQ:^8qQ:p9bQ;Z:`Q;c:rQ;n;[R;q;dnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&l!VR,h&itmOXst!U!V!Z#d%m&i&r&t&u&w,s,x2[2_R,o&oT%lm,oR1k,XR,g&gQ&U|S+}&V&WR1^,OR+s&PT&p!W&sT&q!W&sT2^,x2_",
        nodeNames: "\u26a0 ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
        maxTerm: 380,
        context: RQ,
        nodeProps: [
          ["isolate", -8, 5, 6, 14, 37, 39, 51, 53, 55, ""],
          ["group", -26, 9, 17, 19, 68, 207, 211, 215, 216, 218, 221, 224, 234, 237, 243, 245, 247, 249, 252, 258, 264, 266, 268, 270, 272, 274, 275, "Statement", -34, 13, 14, 32, 35, 36, 42, 51, 54, 55, 57, 62, 70, 72, 76, 80, 82, 84, 85, 110, 111, 120, 121, 136, 139, 141, 142, 143, 144, 145, 147, 148, 167, 169, 171, "Expression", -23, 31, 33, 37, 41, 43, 45, 173, 175, 177, 178, 180, 181, 182, 184, 185, 186, 188, 189, 190, 201, 203, 205, 206, "Type", -3, 88, 103, 109, "ClassItem"],
          ["openedBy", 23, "<", 38, "InterpolationStart", 56, "[", 60, "{", 73, "(", 160, "JSXStartCloseTag"],
          ["closedBy", -2, 24, 168, ">", 40, "InterpolationEnd", 50, "]", 61, "}", 74, ")", 165, "JSXEndTag"]
        ],
        propSources: [SQ],
        skippedNodes: [0, 5, 6, 278],
        repeatNodeCount: 37,
        tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
        tokenizers: [CQ, uQ, LQ, fQ, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, EQ, new IQ("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340), new IQ("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)],
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
          get: QQ => tQ[QQ] || -1
        }, {
          term: 343,
          get: QQ => oQ[QQ] || -1
        }, {
          term: 95,
          get: QQ => eQ[QQ] || -1
        }],
        tokenPrec: 15201
      });
    var xQ = XQ(41566),
      YQ = XQ(41550),
      NQ = XQ(41555),
      ZQ = XQ(41545);
    const OQ = [(0, ZQ.p)("function ${name}(${params}) {\n\t${}\n}", {
        label: "function",
        detail: "definition",
        type: "keyword"
      }), (0, ZQ.p)("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}", {
        label: "for",
        detail: "loop",
        type: "keyword"
      }), (0, ZQ.p)("for (let ${name} of ${collection}) {\n\t${}\n}", {
        label: "for",
        detail: "of loop",
        type: "keyword"
      }), (0, ZQ.p)("do {\n\t${}\n} while (${})", {
        label: "do",
        detail: "loop",
        type: "keyword"
      }), (0, ZQ.p)("while (${}) {\n\t${}\n}", {
        label: "while",
        detail: "loop",
        type: "keyword"
      }), (0, ZQ.p)("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
        label: "try",
        detail: "/ catch block",
        type: "keyword"
      }), (0, ZQ.p)("if (${}) {\n\t${}\n}", {
        label: "if",
        detail: "block",
        type: "keyword"
      }), (0, ZQ.p)("if (${}) {\n\t${}\n} else {\n\t${}\n}", {
        label: "if",
        detail: "/ else block",
        type: "keyword"
      }), (0, ZQ.p)("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
        label: "class",
        detail: "definition",
        type: "keyword"
      }), (0, ZQ.p)('import {${names}} from "${module}"\n${}', {
        label: "import",
        detail: "named",
        type: "keyword"
      }), (0, ZQ.p)('import ${name} from "${module}"\n${}', {
        label: "import",
        detail: "default",
        type: "keyword"
      })],
      KQ = OQ.concat([(0, ZQ.p)("interface ${name} {\n\t${}\n}", {
        label: "interface",
        detail: "definition",
        type: "keyword"
      }), (0, ZQ.p)("type ${name} = ${type}", {
        label: "type",
        detail: "definition",
        type: "keyword"
      }), (0, ZQ.p)("enum ${name} {\n\t${}\n}", {
        label: "enum",
        detail: "definition",
        type: "keyword"
      })]),
      mQ = new wQ.s,
      MQ = new Set(["Script", "Block", "FunctionExpression", "FunctionDeclaration", "ArrowFunction", "MethodDeclaration", "ForStatement"]);

    function QW(QQ) {
      return (WQ, XQ) => {
        let wQ = WQ.node.getChild("VariableDefinition");
        return wQ && XQ(wQ, QQ), !0
      }
    }
    const WW = ["FunctionDeclaration"],
      XW = {
        FunctionDeclaration: QW("function"),
        ClassDeclaration: QW("class"),
        ClassExpression: () => !0,
        EnumDeclaration: QW("constant"),
        TypeAliasDeclaration: QW("type"),
        NamespaceDeclaration: QW("namespace"),
        VariableDefinition(QQ, WQ) {
          QQ.matchContext(WW) || WQ(QQ, "variable")
        },
        TypeDefinition(QQ, WQ) {
          WQ(QQ, "type")
        },
        __proto__: null
      };

    function wW(QQ, WQ) {
      let XQ = mQ.get(WQ);
      if (XQ) return XQ;
      let qQ = [],
        TQ = !0;

      function zQ(WQ, XQ) {
        let wQ = QQ.sliceString(WQ.from, WQ.to);
        qQ.push({
          label: wQ,
          type: XQ
        })
      }
      return WQ.cursor(wQ.g.IncludeAnonymous).iterate((WQ => {
        if (TQ) TQ = !1;
        else if (WQ.name) {
          let QQ = XW[WQ.name];
          if (QQ && QQ(WQ, zQ) || MQ.has(WQ.name)) return !1
        } else if (WQ.to - WQ.from > 8192) {
          for (let XQ of wW(QQ, WQ.node)) qQ.push(XQ);
          return !1
        }
      })), mQ.set(WQ, qQ), qQ
    }
    const qW = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
      TW = ["TemplateString", "String", "RegExp", "LineComment", "BlockComment", "VariableDefinition", "TypeDefinition", "Label", "PropertyDefinition", "PropertyName", "PrivatePropertyDefinition", "PrivatePropertyName", "JSXText", "JSXAttributeValue", "JSXOpenTag", "JSXCloseTag", "JSXSelfClosingTag", ".", "?."];

    function zW(QQ) {
      let WQ = (0, xQ.fb)(QQ.state).resolveInner(QQ.pos, -1);
      if (TW.indexOf(WQ.name) > -1) return null;
      let XQ = "VariableName" == WQ.name || WQ.to - WQ.from < 20 && qW.test(QQ.state.sliceDoc(WQ.from, WQ.to));
      if (!XQ && !QQ.explicit) return null;
      let wQ = [];
      for (let qQ = WQ; qQ; qQ = qQ.parent) MQ.has(qQ.name) && (wQ = wQ.concat(wW(QQ.state.doc, qQ)));
      return {
        options: wQ,
        from: XQ ? WQ.from : QQ.pos,
        validFor: qW
      }
    }
    const sW = xQ.g.define({
        name: "javascript",
        parser: nQ.configure({
          props: [xQ.O.add({
            IfStatement: (0, xQ.j)({
              except: /^\s*({|else\b)/
            }),
            TryStatement: (0, xQ.j)({
              except: /^\s*({|catch\b|finally\b)/
            }),
            LabeledStatement: xQ.z,
            SwitchBody: QQ => {
              let WQ = QQ.textAfter,
                XQ = /^\s*\}/.test(WQ),
                wQ = /^\s*(case|default)\b/.test(WQ);
              return QQ.baseIndent + (XQ ? 0 : wQ ? 1 : 2) * QQ.unit
            },
            Block: (0, xQ.v)({
              closing: "}"
            }),
            ArrowFunction: QQ => QQ.baseIndent + QQ.unit,
            "TemplateString BlockComment": () => null,
            "Statement Property": (0, xQ.j)({
              except: /^\s*{/
            }),
            JSXElement(QQ) {
              let WQ = /^\s*<\//.test(QQ.textAfter);
              return QQ.lineIndent(QQ.node.from) + (WQ ? 0 : QQ.unit)
            },
            JSXEscape(QQ) {
              let WQ = /\s*\}/.test(QQ.textAfter);
              return QQ.lineIndent(QQ.node.from) + (WQ ? 0 : QQ.unit)
            },
            "JSXOpenTag JSXSelfClosingTag": QQ => QQ.column(QQ.node.from) + QQ.unit
          }), xQ.F.add({
            "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": xQ.D,
            BlockComment: QQ => ({
              from: QQ.from + 2,
              to: QQ.to - 2
            }),
            JSXElement(QQ) {
              let WQ = QQ.firstChild;
              if (!WQ || "JSXSelfClosingTag" == WQ.name) return null;
              let XQ = QQ.lastChild;
              return {
                from: WQ.to,
                to: XQ.type.isError ? QQ.to : XQ.from
              }
            },
            "JSXSelfClosingTag JSXOpenTag"(QQ) {
              var WQ;
              let XQ = null === (WQ = QQ.firstChild) || void 0 === WQ ? void 0 : WQ.nextSibling,
                wQ = QQ.lastChild;
              return !XQ || XQ.type.isError ? null : {
                from: XQ.to,
                to: wQ.type.isError ? QQ.to : wQ.from
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
      FW = {
        test: QQ => /^JSX/.test(QQ.name),
        facet: (0, xQ.r)({
          commentTokens: {
            block: {
              open: "{/*",
              close: "*/}"
            }
          }
        })
      },
      PW = sW.configure({
        dialect: "ts"
      }, "typescript"),
      gW = sW.configure({
        dialect: "jsx",
        props: [xQ.$.add((QQ => QQ.isTop ? [FW] : void 0))]
      }),
      JW = sW.configure({
        dialect: "jsx ts",
        props: [xQ.$.add((QQ => QQ.isTop ? [FW] : void 0))]
      }, "typescript");
    let rW = QQ => ({
      label: QQ,
      type: "keyword"
    });
    const IW = "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(rW),
      jW = IW.concat(["declare", "implements", "private", "protected", "public"].map(rW));

    function BW() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        WQ = QQ.jsx ? QQ.typescript ? JW : gW : QQ.typescript ? PW : sW,
        XQ = QQ.typescript ? KQ.concat(jW) : OQ.concat(IW);
      return new xQ.h(WQ, [sW.data.of({
        autocomplete: (0, ZQ.n)(TW, (0, ZQ.i)(XQ))
      }), sW.data.of({
        autocomplete: zW
      }), QQ.jsx ? DW : []])
    }

    function yW(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : QQ.length;
      for (let wQ = null === WQ || void 0 === WQ ? void 0 : WQ.firstChild; wQ; wQ = wQ.nextSibling)
        if ("JSXIdentifier" == wQ.name || "JSXBuiltin" == wQ.name || "JSXNamespacedName" == wQ.name || "JSXMemberExpression" == wQ.name) return QQ.sliceString(wQ.from, Math.min(wQ.to, XQ));
      return ""
    }
    const VW = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      DW = NQ.k.inputHandler.of(((QQ, WQ, XQ, wQ, qQ) => {
        if ((VW ? QQ.composing : QQ.compositionStarted) || QQ.state.readOnly || WQ != XQ || ">" != wQ && "/" != wQ || !sW.isActiveAt(QQ.state, WQ, -1)) return !1;
        let TQ = qQ(),
          {
            state: zQ
          } = TQ,
          sQ = zQ.changeByRange((QQ => {
            var WQ;
            let XQ, {
                head: qQ
              } = QQ,
              TQ = (0, xQ.fb)(zQ).resolveInner(qQ - 1, -1);
            if ("JSXStartTag" == TQ.name && (TQ = TQ.parent), zQ.doc.sliceString(qQ - 1, qQ) != wQ || "JSXAttributeValue" == TQ.name && TQ.to > qQ);
            else {
              if (">" == wQ && "JSXFragmentTag" == TQ.name) return {
                range: QQ,
                changes: {
                  from: qQ,
                  insert: "</>"
                }
              };
              if ("/" == wQ && "JSXStartCloseTag" == TQ.name) {
                let QQ = TQ.parent,
                  wQ = QQ.parent;
                if (wQ && QQ.from == qQ - 2 && ((XQ = yW(zQ.doc, wQ.firstChild, qQ)) || "JSXFragmentTag" == (null === (WQ = wQ.firstChild) || void 0 === WQ ? void 0 : WQ.name))) {
                  let QQ = `${XQ}>`;
                  return {
                    range: YQ.k.cursor(qQ + QQ.length, -1),
                    changes: {
                      from: qQ,
                      insert: QQ
                    }
                  }
                }
              } else if (">" == wQ) {
                let WQ = function(QQ) {
                  for (;;) {
                    if ("JSXOpenTag" == QQ.name || "JSXSelfClosingTag" == QQ.name || "JSXFragmentTag" == QQ.name) return QQ;
                    if ("JSXEscape" == QQ.name || !QQ.parent) return null;
                    QQ = QQ.parent
                  }
                }(TQ);
                if (WQ && "JSXOpenTag" == WQ.name && !/^\/?>|^<\//.test(zQ.doc.sliceString(qQ, qQ + 2)) && (XQ = yW(zQ.doc, WQ, qQ))) return {
                  range: QQ,
                  changes: {
                    from: qQ,
                    insert: `</${XQ}>`
                  }
                }
              }
            }
            return {
              range: QQ
            }
          }));
        return !sQ.changes.empty && (QQ.dispatch([TQ, zQ.update(sQ, {
          userEvent: "input.complete",
          scrollIntoView: !0
        })]), !0)
      }))
  },
  41566: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      $: () => JQ,
      C: () => DW,
      D: () => OQ,
      E: () => PW,
      F: () => ZQ,
      H: () => VQ,
      K: () => cQ,
      M: () => RQ,
      O: () => CQ,
      P: () => YQ,
      S: () => AQ,
      V: () => iQ,
      Y: () => oW,
      ab: () => dW,
      b: () => GW,
      bb: () => yQ,
      d: () => EQ,
      fb: () => BQ,
      g: () => jQ,
      h: () => lQ,
      i: () => kW,
      j: () => nQ,
      n: () => lW,
      r: () => gQ,
      v: () => tQ,
      z: () => eQ
    });
    var wQ, qQ = XQ(41568),
      TQ = XQ(41550),
      zQ = XQ(41555),
      sQ = XQ(41575),
      FQ = XQ(41558);
    const PQ = new qQ.k;

    function gQ(QQ) {
      return TQ.o.define({
        combine: QQ ? WQ => WQ.concat(QQ) : void 0
      })
    }
    const JQ = new qQ.k;
    class rQ {
      constructor(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this.data = QQ, this.name = wQ, TQ.l.prototype.hasOwnProperty("tree") || Object.defineProperty(TQ.l.prototype, "tree", {
          get() {
            return BQ(this)
          }
        }), this.parser = WQ, this.extension = [aQ.of(this), TQ.l.languageData.of(((QQ, WQ, XQ) => {
          let wQ = IQ(QQ, WQ, XQ),
            qQ = wQ.type.prop(PQ);
          if (!qQ) return [];
          let TQ = QQ.facet(qQ),
            zQ = wQ.type.prop(JQ);
          if (zQ) {
            let qQ = wQ.resolve(WQ - wQ.from, XQ);
            for (let WQ of zQ)
              if (WQ.test(qQ, QQ)) {
                let XQ = QQ.facet(WQ.facet);
                return "replace" == WQ.type ? XQ : XQ.concat(TQ)
              }
          }
          return TQ
        }))].concat(XQ)
      }
      isActiveAt(QQ, WQ) {
        return IQ(QQ, WQ, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1).type.prop(PQ) == this.data
      }
      findRegions(QQ) {
        let WQ = QQ.facet(aQ);
        if ((null === WQ || void 0 === WQ ? void 0 : WQ.data) == this.data) return [{
          from: 0,
          to: QQ.doc.length
        }];
        if (!WQ || !WQ.allowsNesting) return [];
        let XQ = [],
          wQ = (QQ, WQ) => {
            if (QQ.prop(PQ) == this.data) return void XQ.push({
              from: WQ,
              to: WQ + QQ.length
            });
            let TQ = QQ.prop(qQ.k.mounted);
            if (TQ) {
              if (TQ.tree.prop(PQ) == this.data) {
                if (TQ.overlay)
                  for (let QQ of TQ.overlay) XQ.push({
                    from: QQ.from + WQ,
                    to: QQ.to + WQ
                  });
                else XQ.push({
                  from: WQ,
                  to: WQ + QQ.length
                });
                return
              }
              if (TQ.overlay) {
                let QQ = XQ.length;
                if (wQ(TQ.tree, TQ.overlay[0].from + WQ), XQ.length > QQ) return
              }
            }
            for (let XQ = 0; XQ < QQ.children.length; XQ++) {
              let TQ = QQ.children[XQ];
              TQ instanceof qQ.x && wQ(TQ, QQ.positions[XQ] + WQ)
            }
          };
        return wQ(BQ(QQ), 0), XQ
      }
      get allowsNesting() {
        return !0
      }
    }

    function IQ(QQ, WQ, XQ) {
      let wQ = QQ.facet(aQ),
        TQ = BQ(QQ).topNode;
      if (!wQ || wQ.allowsNesting)
        for (let zQ = TQ; zQ; zQ = zQ.enter(WQ, XQ, qQ.g.ExcludeBuffers | qQ.g.EnterBracketed)) zQ.type.isTop && (TQ = zQ);
      return TQ
    }
    rQ.setState = TQ.G.define();
    class jQ extends rQ {
      constructor(QQ, WQ, XQ) {
        super(QQ, WQ, [], XQ), this.parser = WQ
      }
      static define(QQ) {
        let WQ = gQ(QQ.languageData);
        return new jQ(WQ, QQ.parser.configure({
          props: [PQ.add((QQ => QQ.isTop ? WQ : void 0))]
        }), QQ.name)
      }
      configure(QQ, WQ) {
        return new jQ(this.data, this.parser.configure(QQ), WQ || this.name)
      }
      get allowsNesting() {
        return this.parser.hasWrappers()
      }
    }

    function BQ(QQ) {
      let WQ = QQ.field(rQ.state, !1);
      return WQ ? WQ.tree : qQ.x.empty
    }

    function yQ(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QQ.doc.length;
      var XQ;
      return (null === (XQ = QQ.field(rQ.state, !1)) || void 0 === XQ ? void 0 : XQ.context.isDone(WQ)) || !1
    }

    function VQ(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QQ.viewport.to,
        XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        wQ = function(QQ, WQ) {
          let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
          var wQ;
          let qQ = null === (wQ = QQ.field(rQ.state, !1)) || void 0 === wQ ? void 0 : wQ.context;
          if (!qQ) return null;
          let TQ = qQ.viewport;
          qQ.updateViewport({
            from: 0,
            to: WQ
          });
          let zQ = qQ.isDone(WQ) || qQ.work(XQ, WQ) ? qQ.tree : null;
          return qQ.updateViewport(TQ), zQ
        }(QQ.state, WQ, XQ);
      return wQ != BQ(QQ.state) && QQ.dispatch({}), !!wQ
    }
    class DQ {
      constructor(QQ) {
        this.doc = QQ, this.cursorPos = 0, this.string = "", this.cursor = QQ.iter()
      }
      get length() {
        return this.doc.length
      }
      syncTo(QQ) {
        return this.string = this.cursor.next(QQ - this.cursorPos).value, this.cursorPos = QQ + this.string.length, this.cursorPos - this.string.length
      }
      chunk(QQ) {
        return this.syncTo(QQ), this.string
      }
      get lineChunks() {
        return !0
      }
      read(QQ, WQ) {
        let XQ = this.cursorPos - this.string.length;
        return QQ < XQ || WQ >= this.cursorPos ? this.doc.sliceString(QQ, WQ) : this.string.slice(QQ - XQ, WQ - XQ)
      }
    }
    let pQ = null;
    class GQ {
      constructor(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          wQ = arguments.length > 3 ? arguments[3] : void 0,
          qQ = arguments.length > 4 ? arguments[4] : void 0,
          TQ = arguments.length > 5 ? arguments[5] : void 0,
          zQ = arguments.length > 6 ? arguments[6] : void 0,
          sQ = arguments.length > 7 ? arguments[7] : void 0;
        this.parser = QQ, this.state = WQ, this.fragments = XQ, this.tree = wQ, this.treeLen = qQ, this.viewport = TQ, this.skipped = zQ, this.scheduleOn = sQ, this.parse = null, this.tempSkipped = []
      }
      static create(QQ, WQ, XQ) {
        return new GQ(QQ, WQ, [], qQ.x.empty, 0, XQ, [], null)
      }
      startParse() {
        return this.parser.startParse(new DQ(this.state.doc), this.fragments)
      }
      work(QQ, WQ) {
        return null != WQ && WQ >= this.state.doc.length && (WQ = void 0), this.tree != qQ.x.empty && this.isDone(null !== WQ && void 0 !== WQ ? WQ : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext((() => {
          var XQ;
          if ("number" == typeof QQ) {
            let WQ = Date.now() + QQ;
            QQ = () => Date.now() > WQ
          }
          for (this.parse || (this.parse = this.startParse()), null != WQ && (null == this.parse.stoppedAt || this.parse.stoppedAt > WQ) && WQ < this.state.doc.length && this.parse.stopAt(WQ);;) {
            let wQ = this.parse.advance();
            if (wQ) {
              if (this.fragments = this.withoutTempSkipped(qQ.w.addTree(wQ, this.fragments, null != this.parse.stoppedAt)), this.treeLen = null !== (XQ = this.parse.stoppedAt) && void 0 !== XQ ? XQ : this.state.doc.length, this.tree = wQ, this.parse = null, !(this.treeLen < (null !== WQ && void 0 !== WQ ? WQ : this.state.doc.length))) return !0;
              this.parse = this.startParse()
            }
            if (QQ()) return !1
          }
        }))
      }
      takeTree() {
        let QQ, WQ;
        this.parse && (QQ = this.parse.parsedPos) >= this.treeLen && ((null == this.parse.stoppedAt || this.parse.stoppedAt > QQ) && this.parse.stopAt(QQ), this.withContext((() => {
          for (; !(WQ = this.parse.advance()););
        })), this.treeLen = QQ, this.tree = WQ, this.fragments = this.withoutTempSkipped(qQ.w.addTree(this.tree, this.fragments, !0)), this.parse = null)
      }
      withContext(QQ) {
        let WQ = pQ;
        pQ = this;
        try {
          return QQ()
        } finally {
          pQ = WQ
        }
      }
      withoutTempSkipped(QQ) {
        for (let WQ; WQ = this.tempSkipped.pop();) QQ = UQ(QQ, WQ.from, WQ.to);
        return QQ
      }
      changes(QQ, WQ) {
        let {
          fragments: XQ,
          tree: wQ,
          treeLen: TQ,
          viewport: zQ,
          skipped: sQ
        } = this;
        if (this.takeTree(), !QQ.empty) {
          let WQ = [];
          if (QQ.iterChangedRanges(((QQ, XQ, wQ, qQ) => WQ.push({
              fromA: QQ,
              toA: XQ,
              fromB: wQ,
              toB: qQ
            }))), XQ = qQ.w.applyChanges(XQ, WQ), wQ = qQ.x.empty, TQ = 0, zQ = {
              from: QQ.mapPos(zQ.from, -1),
              to: QQ.mapPos(zQ.to, 1)
            }, this.skipped.length) {
            sQ = [];
            for (let WQ of this.skipped) {
              let XQ = QQ.mapPos(WQ.from, 1),
                wQ = QQ.mapPos(WQ.to, -1);
              XQ < wQ && sQ.push({
                from: XQ,
                to: wQ
              })
            }
          }
        }
        return new GQ(this.parser, WQ, XQ, wQ, TQ, zQ, sQ, this.scheduleOn)
      }
      updateViewport(QQ) {
        if (this.viewport.from == QQ.from && this.viewport.to == QQ.to) return !1;
        this.viewport = QQ;
        let WQ = this.skipped.length;
        for (let XQ = 0; XQ < this.skipped.length; XQ++) {
          let {
            from: WQ,
            to: wQ
          } = this.skipped[XQ];
          WQ < QQ.to && wQ > QQ.from && (this.fragments = UQ(this.fragments, WQ, wQ), this.skipped.splice(XQ--, 1))
        }
        return !(this.skipped.length >= WQ) && (this.reset(), !0)
      }
      reset() {
        this.parse && (this.takeTree(), this.parse = null)
      }
      skipUntilInView(QQ, WQ) {
        this.skipped.push({
          from: QQ,
          to: WQ
        })
      }
      static getSkippingParser(QQ) {
        return new class extends qQ.v {
          createParse(WQ, XQ, wQ) {
            let TQ = wQ[0].from,
              zQ = wQ[wQ.length - 1].to;
            return {
              parsedPos: TQ,
              advance() {
                let WQ = pQ;
                if (WQ) {
                  for (let QQ of wQ) WQ.tempSkipped.push(QQ);
                  QQ && (WQ.scheduleOn = WQ.scheduleOn ? Promise.all([WQ.scheduleOn, QQ]) : QQ)
                }
                return this.parsedPos = zQ, new qQ.x(qQ.p.none, [], [], zQ - TQ)
              },
              stoppedAt: null,
              stopAt() {}
            }
          }
        }
      }
      isDone(QQ) {
        QQ = Math.min(QQ, this.state.doc.length);
        let WQ = this.fragments;
        return this.treeLen >= QQ && WQ.length && 0 == WQ[0].from && WQ[0].to >= QQ
      }
      static get() {
        return pQ
      }
    }

    function UQ(QQ, WQ, XQ) {
      return qQ.w.applyChanges(QQ, [{
        fromA: WQ,
        toA: XQ,
        fromB: WQ,
        toB: XQ
      }])
    }
    class bQ {
      constructor(QQ) {
        this.context = QQ, this.tree = QQ.tree
      }
      apply(QQ) {
        if (!QQ.docChanged && this.tree == this.context.tree) return this;
        let WQ = this.context.changes(QQ.changes, QQ.state),
          XQ = this.context.treeLen == QQ.startState.doc.length ? void 0 : Math.max(QQ.changes.mapPos(this.context.treeLen), WQ.viewport.to);
        return WQ.work(20, XQ) || WQ.takeTree(), new bQ(WQ)
      }
      static init(QQ) {
        let WQ = Math.min(3e3, QQ.doc.length),
          XQ = GQ.create(QQ.facet(aQ).parser, QQ, {
            from: 0,
            to: WQ
          });
        return XQ.work(20, WQ) || XQ.takeTree(), new bQ(XQ)
      }
    }
    rQ.state = TQ.I.define({
      create: bQ.init,
      update(QQ, WQ) {
        for (let XQ of WQ.effects)
          if (XQ.is(rQ.setState)) return XQ.value;
        return WQ.startState.facet(aQ) != WQ.state.facet(aQ) ? bQ.init(WQ.state) : QQ.apply(WQ)
      }
    });
    let vQ = QQ => {
      let WQ = setTimeout((() => QQ()), 500);
      return () => clearTimeout(WQ)
    };
    "undefined" != typeof requestIdleCallback && (vQ = QQ => {
      let WQ = -1,
        XQ = setTimeout((() => {
          WQ = requestIdleCallback(QQ, {
            timeout: 400
          })
        }), 100);
      return () => WQ < 0 ? clearTimeout(XQ) : cancelIdleCallback(WQ)
    });
    const dQ = "undefined" != typeof navigator && (null === (wQ = navigator.scheduling) || void 0 === wQ ? void 0 : wQ.isInputPending) ? () => navigator.scheduling.isInputPending() : null,
      HQ = zQ.q.fromClass(class {
        constructor(QQ) {
          this.view = QQ, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork()
        }
        update(QQ) {
          let WQ = this.view.state.field(rQ.state).context;
          (WQ.updateViewport(QQ.view.viewport) || this.view.viewport.to > WQ.treeLen) && this.scheduleWork(), (QQ.docChanged || QQ.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(WQ)
        }
        scheduleWork() {
          if (this.working) return;
          let {
            state: QQ
          } = this.view, WQ = QQ.field(rQ.state);
          WQ.tree == WQ.context.tree && WQ.context.isDone(QQ.doc.length) || (this.working = vQ(this.work))
        }
        work(QQ) {
          this.working = null;
          let WQ = Date.now();
          if (this.chunkEnd < WQ && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = WQ + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
          let {
            state: XQ,
            viewport: {
              to: wQ
            }
          } = this.view, qQ = XQ.field(rQ.state);
          if (qQ.tree == qQ.context.tree && qQ.context.isDone(wQ + 1e5)) return;
          let TQ = Date.now() + Math.min(this.chunkBudget, 100, QQ && !dQ ? Math.max(25, QQ.timeRemaining() - 5) : 1e9),
            zQ = qQ.context.treeLen < wQ && XQ.doc.length > wQ + 1e3,
            sQ = qQ.context.work((() => dQ && dQ() || Date.now() > TQ), wQ + (zQ ? 0 : 1e5));
          this.chunkBudget -= Date.now() - WQ, (sQ || this.chunkBudget <= 0) && (qQ.context.takeTree(), this.view.dispatch({
            effects: rQ.setState.of(new bQ(qQ.context))
          })), this.chunkBudget > 0 && (!sQ || zQ) && this.scheduleWork(), this.checkAsyncSchedule(qQ.context)
        }
        checkAsyncSchedule(QQ) {
          QQ.scheduleOn && (this.workScheduled++, QQ.scheduleOn.then((() => this.scheduleWork())).catch((QQ => (0, zQ.eb)(this.view.state, QQ))).then((() => this.workScheduled--)), QQ.scheduleOn = null)
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
      aQ = TQ.o.define({
        combine: QQ => QQ.length ? QQ[0] : null,
        enables: QQ => [rQ.state, HQ, zQ.k.contentAttributes.compute([QQ], (WQ => {
          let XQ = WQ.facet(QQ);
          return XQ && XQ.name ? {
            "data-language": XQ.name
          } : {}
        }))]
      });
    class lQ {
      constructor(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        this.language = QQ, this.support = WQ, this.extension = [QQ, WQ]
      }
    }
    const hQ = TQ.o.define(),
      iQ = TQ.o.define({
        combine: QQ => {
          if (!QQ.length) return "  ";
          let WQ = QQ[0];
          if (!WQ || /\S/.test(WQ) || Array.from(WQ).some((QQ => QQ != WQ[0]))) throw new Error("Invalid indent unit: " + JSON.stringify(QQ[0]));
          return WQ
        }
      });

    function cQ(QQ) {
      let WQ = QQ.facet(iQ);
      return 9 == WQ.charCodeAt(0) ? QQ.tabSize * WQ.length : WQ.length
    }

    function AQ(QQ, WQ) {
      let XQ = "",
        wQ = QQ.tabSize,
        qQ = QQ.facet(iQ)[0];
      if ("\t" == qQ) {
        for (; WQ >= wQ;) XQ += "\t", WQ -= wQ;
        qQ = " "
      }
      for (let TQ = 0; TQ < WQ; TQ++) XQ += qQ;
      return XQ
    }

    function RQ(QQ, WQ) {
      QQ instanceof TQ.l && (QQ = new EQ(QQ));
      for (let wQ of QQ.state.facet(hQ)) {
        let XQ = wQ(QQ, WQ);
        if (void 0 !== XQ) return XQ
      }
      let XQ = BQ(QQ.state);
      return XQ.length >= WQ ? function(QQ, WQ, XQ) {
        let wQ = WQ.resolveStack(XQ),
          qQ = WQ.resolveInner(XQ, -1).resolve(XQ, 0).enterUnfinishedNodesBefore(XQ);
        if (qQ != wQ.node) {
          let QQ = [];
          for (let WQ = qQ; WQ && !(WQ.from < wQ.node.from || WQ.to > wQ.node.to || WQ.from == wQ.node.from && WQ.type == wQ.node.type); WQ = WQ.parent) QQ.push(WQ);
          for (let WQ = QQ.length - 1; WQ >= 0; WQ--) wQ = {
            node: QQ[WQ],
            next: wQ
          }
        }
        return uQ(wQ, QQ, XQ)
      }(QQ, XQ, WQ) : null
    }
    class EQ {
      constructor(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.state = QQ, this.options = WQ, this.unit = cQ(QQ)
      }
      lineAt(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          XQ = this.state.doc.lineAt(QQ),
          {
            simulateBreak: wQ,
            simulateDoubleBreak: qQ
          } = this.options;
        return null != wQ && wQ >= XQ.from && wQ <= XQ.to ? qQ && wQ == QQ ? {
          text: "",
          from: QQ
        } : (WQ < 0 ? wQ < QQ : wQ <= QQ) ? {
          text: XQ.text.slice(wQ - XQ.from),
          from: wQ
        } : {
          text: XQ.text.slice(0, wQ - XQ.from),
          from: XQ.from
        } : XQ
      }
      textAfterPos(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (this.options.simulateDoubleBreak && QQ == this.options.simulateBreak) return "";
        let {
          text: XQ,
          from: wQ
        } = this.lineAt(QQ, WQ);
        return XQ.slice(QQ - wQ, Math.min(XQ.length, QQ + 100 - wQ))
      }
      column(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: XQ,
            from: wQ
          } = this.lineAt(QQ, WQ),
          qQ = this.countColumn(XQ, QQ - wQ),
          TQ = this.options.overrideIndentation ? this.options.overrideIndentation(wQ) : -1;
        return TQ > -1 && (qQ += TQ - this.countColumn(XQ, XQ.search(/\S|$/))), qQ
      }
      countColumn(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QQ.length;
        return (0, TQ.V)(QQ, this.state.tabSize, WQ)
      }
      lineIndent(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: XQ,
            from: wQ
          } = this.lineAt(QQ, WQ),
          qQ = this.options.overrideIndentation;
        if (qQ) {
          let QQ = qQ(wQ);
          if (QQ > -1) return QQ
        }
        return this.countColumn(XQ, XQ.search(/\S|$/))
      }
      get simulatedBreak() {
        return this.options.simulateBreak || null
      }
    }
    const CQ = new qQ.k;

    function uQ(QQ, WQ, XQ) {
      for (let wQ = QQ; wQ; wQ = wQ.next) {
        let QQ = LQ(wQ.node);
        if (QQ) return QQ(fQ.create(WQ, XQ, wQ))
      }
      return 0
    }

    function LQ(QQ) {
      let WQ = QQ.type.prop(CQ);
      if (WQ) return WQ;
      let XQ, wQ = QQ.firstChild;
      if (wQ && (XQ = wQ.type.prop(qQ.k.closedBy))) {
        let WQ = QQ.lastChild,
          wQ = WQ && XQ.indexOf(WQ.name) > -1;
        return QQ => oQ(QQ, !0, 1, void 0, wQ && ! function(QQ) {
          return QQ.pos == QQ.options.simulateBreak && QQ.options.simulateDoubleBreak
        }(QQ) ? WQ.from : void 0)
      }
      return null == QQ.parent ? kQ : null
    }

    function kQ() {
      return 0
    }
    class fQ extends EQ {
      constructor(QQ, WQ, XQ) {
        super(QQ.state, QQ.options), this.base = QQ, this.pos = WQ, this.context = XQ
      }
      get node() {
        return this.context.node
      }
      static create(QQ, WQ, XQ) {
        return new fQ(QQ, WQ, XQ)
      }
      get textAfter() {
        return this.textAfterPos(this.pos)
      }
      get baseIndent() {
        return this.baseIndentFor(this.node)
      }
      baseIndentFor(QQ) {
        let WQ = this.state.doc.lineAt(QQ.from);
        for (;;) {
          let XQ = QQ.resolve(WQ.from);
          for (; XQ.parent && XQ.parent.from == XQ.from;) XQ = XQ.parent;
          if (SQ(XQ, QQ)) break;
          WQ = this.state.doc.lineAt(XQ.from)
        }
        return this.lineIndent(WQ.from)
      }
      continue () {
        return uQ(this.context.next, this.base, this.pos)
      }
    }

    function SQ(QQ, WQ) {
      for (let XQ = WQ; XQ; XQ = XQ.parent)
        if (QQ == XQ) return !0;
      return !1
    }

    function tQ(QQ) {
      let {
        closing: WQ,
        align: XQ = !0,
        units: wQ = 1
      } = QQ;
      return QQ => oQ(QQ, XQ, wQ, WQ)
    }

    function oQ(QQ, WQ, XQ, wQ, qQ) {
      let TQ = QQ.textAfter,
        zQ = TQ.match(/^\s*/)[0].length,
        sQ = wQ && TQ.slice(zQ, zQ + wQ.length) == wQ || qQ == QQ.pos + zQ,
        FQ = WQ ? function(QQ) {
          let WQ = QQ.node,
            XQ = WQ.childAfter(WQ.from),
            wQ = WQ.lastChild;
          if (!XQ) return null;
          let qQ = QQ.options.simulateBreak,
            TQ = QQ.state.doc.lineAt(XQ.from),
            zQ = null == qQ || qQ <= TQ.from ? TQ.to : Math.min(TQ.to, qQ);
          for (let sQ = XQ.to;;) {
            let QQ = WQ.childAfter(sQ);
            if (!QQ || QQ == wQ) return null;
            if (!QQ.type.isSkipped) {
              if (QQ.from >= zQ) return null;
              let WQ = /^ */.exec(TQ.text.slice(XQ.to - TQ.from))[0].length;
              return {
                from: XQ.from,
                to: XQ.to + WQ
              }
            }
            sQ = QQ.to
          }
        }(QQ) : null;
      return FQ ? sQ ? QQ.column(FQ.from) : QQ.column(FQ.to) : QQ.baseIndent + (sQ ? 0 : QQ.unit * XQ)
    }
    const eQ = QQ => QQ.baseIndent;

    function nQ() {
      let {
        except: QQ,
        units: WQ = 1
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return XQ => {
        let wQ = QQ && QQ.test(XQ.textAfter);
        return XQ.baseIndent + (wQ ? 0 : WQ * XQ.unit)
      }
    }
    const xQ = 200;

    function YQ() {
      return TQ.l.transactionFilter.of((QQ => {
        if (!QQ.docChanged || !QQ.isUserEvent("input.type") && !QQ.isUserEvent("input.complete")) return QQ;
        let WQ = QQ.startState.languageDataAt("indentOnInput", QQ.startState.selection.main.head);
        if (!WQ.length) return QQ;
        let XQ = QQ.newDoc,
          {
            head: wQ
          } = QQ.newSelection.main,
          qQ = XQ.lineAt(wQ);
        if (wQ > qQ.from + xQ) return QQ;
        let TQ = XQ.sliceString(qQ.from, wQ);
        if (!WQ.some((QQ => QQ.test(TQ)))) return QQ;
        let {
          state: zQ
        } = QQ, sQ = -1, FQ = [];
        for (let {
            head: PQ
          }
          of zQ.selection.Qy) {
          let QQ = zQ.doc.lineAt(PQ);
          if (QQ.from == sQ) continue;
          sQ = QQ.from;
          let WQ = RQ(zQ, QQ.from);
          if (null == WQ) continue;
          let XQ = /^\s*/.exec(QQ.text)[0],
            wQ = AQ(zQ, WQ);
          XQ != wQ && FQ.push({
            from: QQ.from,
            to: QQ.from + XQ.length,
            insert: wQ
          })
        }
        return FQ.length ? [QQ, {
          changes: FQ,
          sequential: !0
        }] : QQ
      }))
    }
    const NQ = TQ.o.define(),
      ZQ = new qQ.k;

    function OQ(QQ) {
      let WQ = QQ.firstChild,
        XQ = QQ.lastChild;
      return WQ && WQ.to < XQ.from ? {
        from: WQ.to,
        to: XQ.type.isError ? QQ.to : XQ.from
      } : null
    }

    function KQ(QQ) {
      let WQ = QQ.lastChild;
      return WQ && WQ.to == QQ.to && WQ.type.isError
    }

    function mQ(QQ, WQ, XQ) {
      for (let wQ of QQ.facet(NQ)) {
        let qQ = wQ(QQ, WQ, XQ);
        if (qQ) return qQ
      }
      return function(QQ, WQ, XQ) {
        let wQ = BQ(QQ);
        if (wQ.length < XQ) return null;
        let qQ = null;
        for (let TQ = wQ.resolveStack(XQ, 1); TQ; TQ = TQ.next) {
          let zQ = TQ.node;
          if (zQ.to <= XQ || zQ.from > XQ) continue;
          if (qQ && zQ.from < WQ) break;
          let sQ = zQ.type.prop(ZQ);
          if (sQ && (zQ.to < wQ.length - 50 || wQ.length == QQ.doc.length || !KQ(zQ))) {
            let wQ = sQ(zQ, QQ);
            wQ && wQ.from <= XQ && wQ.from >= WQ && wQ.to > XQ && (qQ = wQ)
          }
        }
        return qQ
      }(QQ, WQ, XQ)
    }

    function MQ(QQ, WQ) {
      let XQ = WQ.mapPos(QQ.from, 1),
        wQ = WQ.mapPos(QQ.to, -1);
      return XQ >= wQ ? void 0 : {
        from: XQ,
        to: wQ
      }
    }
    const QW = TQ.G.define({
        map: MQ
      }),
      WW = TQ.G.define({
        map: MQ
      });

    function XW(QQ) {
      let WQ = [];
      for (let {
          head: XQ
        }
        of QQ.state.selection.Qy) WQ.some((QQ => QQ.from <= XQ && QQ.to >= XQ)) || WQ.push(QQ.lineBlockAt(XQ));
      return WQ
    }
    const wW = TQ.I.define({
      create: () => zQ.e.none,
      update(QQ, WQ) {
        WQ.isUserEvent("delete") && WQ.changes.iterChangedRanges(((WQ, XQ) => QQ = qW(QQ, WQ, XQ))), QQ = QQ.map(WQ.changes);
        for (let XQ of WQ.effects)
          if (XQ.is(QW) && !zW(QQ, XQ.value.from, XQ.value.to)) {
            let {
              preparePlaceholder: wQ
            } = WQ.state.facet(JW), qQ = wQ ? zQ.e.replace({
              widget: new BW(wQ(WQ.state, XQ.value))
            }) : jW;
            QQ = QQ.update({
              add: [qQ.range(XQ.value.from, XQ.value.to)]
            })
          } else XQ.is(WW) && (QQ = QQ.update({
            filter: (QQ, WQ) => XQ.value.from != QQ || XQ.value.to != WQ,
            filterFrom: XQ.value.from,
            filterTo: XQ.value.to
          }));
        return WQ.selection && (QQ = qW(QQ, WQ.selection.main.head)), QQ
      },
      provide: QQ => zQ.k.Tw.from(QQ),
      toJSON(QQ, WQ) {
        let XQ = [];
        return QQ.between(0, WQ.doc.length, ((QQ, WQ) => {
          XQ.push(QQ, WQ)
        })), XQ
      },
      fromJSON(QQ) {
        if (!Array.isArray(QQ) || QQ.length % 2) throw new RangeError("Invalid JSON for fold state");
        let WQ = [];
        for (let XQ = 0; XQ < QQ.length;) {
          let wQ = QQ[XQ++],
            qQ = QQ[XQ++];
          if ("number" != typeof wQ || "number" != typeof qQ) throw new RangeError("Invalid JSON for fold state");
          WQ.push(jW.range(wQ, qQ))
        }
        return zQ.e.set(WQ, !0)
      }
    });

    function qW(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : WQ,
        wQ = !1;
      return QQ.between(WQ, XQ, ((QQ, qQ) => {
        QQ < XQ && qQ > WQ && (wQ = !0)
      })), wQ ? QQ.update({
        filterFrom: WQ,
        filterTo: XQ,
        filter: (QQ, wQ) => QQ >= XQ || wQ <= WQ
      }) : QQ
    }

    function TW(QQ, WQ, XQ) {
      var wQ;
      let qQ = null;
      return null === (wQ = QQ.field(wW, !1)) || void 0 === wQ || wQ.between(WQ, XQ, ((QQ, WQ) => {
        (!qQ || qQ.from > QQ) && (qQ = {
          from: QQ,
          to: WQ
        })
      })), qQ
    }

    function zW(QQ, WQ, XQ) {
      let wQ = !1;
      return QQ.between(WQ, WQ, ((QQ, qQ) => {
        QQ == WQ && qQ == XQ && (wQ = !0)
      })), wQ
    }

    function sW(QQ, WQ) {
      return QQ.field(wW, !1) ? WQ : WQ.concat(TQ.G.appendConfig.of(rW()))
    }

    function FW(QQ, WQ) {
      let XQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        wQ = QQ.state.doc.lineAt(WQ.from).number,
        qQ = QQ.state.doc.lineAt(WQ.to).number;
      return zQ.k.announce.of(`${QQ.state.phrase(XQ?"Folded lines":"Unfolded lines")} ${wQ} ${QQ.state.phrase("to")} ${qQ}.`)
    }
    const PW = [{
        key: "Ctrl-Shift-[",
        mac: "Cmd-Alt-[",
        run: QQ => {
          for (let WQ of XW(QQ)) {
            let XQ = mQ(QQ.state, WQ.from, WQ.to);
            if (XQ) return QQ.dispatch({
              effects: sW(QQ.state, [QW.of(XQ), FW(QQ, XQ)])
            }), !0
          }
          return !1
        }
      }, {
        key: "Ctrl-Shift-]",
        mac: "Cmd-Alt-]",
        run: QQ => {
          if (!QQ.state.field(wW, !1)) return !1;
          let WQ = [];
          for (let XQ of XW(QQ)) {
            let wQ = TW(QQ.state, XQ.from, XQ.to);
            wQ && WQ.push(WW.of(wQ), FW(QQ, wQ, !1))
          }
          return WQ.length && QQ.dispatch({
            effects: WQ
          }), WQ.length > 0
        }
      }, {
        key: "Ctrl-Alt-[",
        run: QQ => {
          let {
            state: WQ
          } = QQ, XQ = [];
          for (let wQ = 0; wQ < WQ.doc.length;) {
            let qQ = QQ.lineBlockAt(wQ),
              TQ = mQ(WQ, qQ.from, qQ.to);
            TQ && XQ.push(QW.of(TQ)), wQ = (TQ ? QQ.lineBlockAt(TQ.to) : qQ).to + 1
          }
          return XQ.length && QQ.dispatch({
            effects: sW(QQ.state, XQ)
          }), !!XQ.length
        }
      }, {
        key: "Ctrl-Alt-]",
        run: QQ => {
          let WQ = QQ.state.field(wW, !1);
          if (!WQ || !WQ.size) return !1;
          let XQ = [];
          return WQ.between(0, QQ.state.doc.length, ((QQ, WQ) => {
            XQ.push(WW.of({
              from: QQ,
              to: WQ
            }))
          })), QQ.dispatch({
            effects: XQ
          }), !0
        }
      }],
      gW = {
        placeholderDOM: null,
        preparePlaceholder: null,
        placeholderText: "\u2026"
      },
      JW = TQ.o.define({
        combine: QQ => (0, TQ.U)(QQ, gW)
      });

    function rW(QQ) {
      let WQ = [wW, pW];
      return QQ && WQ.push(JW.of(QQ)), WQ
    }

    function IW(QQ, WQ) {
      let {
        state: XQ
      } = QQ, wQ = XQ.facet(JW), qQ = WQ => {
        let XQ = QQ.lineBlockAt(QQ.posAtDOM(WQ.target)),
          wQ = TW(QQ.state, XQ.from, XQ.to);
        wQ && QQ.dispatch({
          effects: WW.of(wQ)
        }), WQ.preventDefault()
      };
      if (wQ.placeholderDOM) return wQ.placeholderDOM(QQ, qQ, WQ);
      let TQ = document.createElement("span");
      return TQ.textContent = wQ.placeholderText, TQ.setAttribute("aria-label", XQ.phrase("folded code")), TQ.title = XQ.phrase("unfold"), TQ.className = "cm-foldPlaceholder", TQ.onclick = qQ, TQ
    }
    const jW = zQ.e.replace({
      widget: new class extends zQ.u {
        toDOM(QQ) {
          return IW(QQ, null)
        }
      }
    });
    class BW extends zQ.u {
      constructor(QQ) {
        super(), this.value = QQ
      }
      eq(QQ) {
        return this.value == QQ.value
      }
      toDOM(QQ) {
        return IW(QQ, this.value)
      }
    }
    const yW = {
      openText: "\u2304",
      closedText: "\u203a",
      markerDOM: null,
      domEventHandlers: {},
      foldingChanged: () => !1
    };
    class VW extends zQ.n {
      constructor(QQ, WQ) {
        super(), this.config = QQ, this.open = WQ
      }
      eq(QQ) {
        return this.config == QQ.config && this.open == QQ.open
      }
      toDOM(QQ) {
        if (this.config.markerDOM) return this.config.markerDOM(this.open);
        let WQ = document.createElement("span");
        return WQ.textContent = this.open ? this.config.openText : this.config.closedText, WQ.title = QQ.state.phrase(this.open ? "Fold line" : "Unfold line"), WQ
      }
    }

    function DW() {
      let QQ = {
          ...yW,
          ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        },
        WQ = new VW(QQ, !0),
        XQ = new VW(QQ, !1),
        wQ = zQ.q.fromClass(class {
          constructor(QQ) {
            this.from = QQ.viewport.from, this.markers = this.buildMarkers(QQ)
          }
          update(WQ) {
            (WQ.docChanged || WQ.viewportChanged || WQ.startState.facet(aQ) != WQ.state.facet(aQ) || WQ.startState.field(wW, !1) != WQ.state.field(wW, !1) || BQ(WQ.startState) != BQ(WQ.state) || QQ.foldingChanged(WQ)) && (this.markers = this.buildMarkers(WQ.view))
          }
          buildMarkers(QQ) {
            let wQ = new TQ.x;
            for (let qQ of QQ.viewportLineBlocks) {
              let TQ = TW(QQ.state, qQ.from, qQ.to) ? XQ : mQ(QQ.state, qQ.from, qQ.to) ? WQ : null;
              TQ && wQ.add(qQ.from, qQ.from, TQ)
            }
            return wQ.finish()
          }
        }),
        {
          domEventHandlers: qQ
        } = QQ;
      return [wQ, (0, zQ.P)({
        class: "cm-foldGutter",
        markers(QQ) {
          var WQ;
          return (null === (WQ = QQ.plugin(wQ)) || void 0 === WQ ? void 0 : WQ.markers) || TQ.A.empty
        },
        initialSpacer: () => new VW(QQ, !1),
        domEventHandlers: {
          ...qQ,
          click: (QQ, WQ, XQ) => {
            if (qQ.click && qQ.click(QQ, WQ, XQ)) return !0;
            let wQ = TW(QQ.state, WQ.from, WQ.to);
            if (wQ) return QQ.dispatch({
              effects: WW.of(wQ)
            }), !0;
            let TQ = mQ(QQ.state, WQ.from, WQ.to);
            return !!TQ && (QQ.dispatch({
              effects: QW.of(TQ)
            }), !0)
          }
        }
      }), rW()]
    }
    const pW = zQ.k.baseTheme({
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
    class GW {
      constructor(QQ, WQ) {
        let XQ;

        function wQ(QQ) {
          let WQ = FQ.b.newName();
          return (XQ || (XQ = Object.create(null)))["." + WQ] = QQ, WQ
        }
        this.specs = QQ;
        const qQ = "string" == typeof WQ.all ? WQ.all : WQ.all ? wQ(WQ.all) : void 0,
          TQ = WQ.scope;
        this.scope = TQ instanceof rQ ? QQ => QQ.prop(PQ) == TQ.data : TQ ? QQ => QQ == TQ : void 0, this.style = (0, sQ.g)(QQ.map((QQ => ({
          tag: QQ.tag,
          class: QQ.class || wQ(Object.assign({}, QQ, {
            tag: null
          }))
        }))), {
          all: qQ
        }).style, this.module = XQ ? new FQ.b(XQ) : null, this.themeType = WQ.themeType
      }
      static define(QQ, WQ) {
        return new GW(QQ, WQ || {})
      }
    }
    const UW = TQ.o.define(),
      bW = TQ.o.define({
        combine: QQ => QQ.length ? [QQ[0]] : null
      });

    function vW(QQ) {
      let WQ = QQ.facet(UW);
      return WQ.length ? WQ : QQ.facet(bW)
    }

    function dW(QQ, WQ) {
      let XQ, wQ = [aW];
      return QQ instanceof GW && (QQ.module && wQ.push(zQ.k.styleModule.of(QQ.module)), XQ = QQ.themeType), (null === WQ || void 0 === WQ ? void 0 : WQ.fallback) ? wQ.push(bW.of(QQ)) : XQ ? wQ.push(UW.computeN([zQ.k.darkTheme], (WQ => WQ.facet(zQ.k.darkTheme) == ("dark" == XQ) ? [QQ] : []))) : wQ.push(UW.of(QQ)), wQ
    }
    class HW {
      constructor(QQ) {
        this.markCache = Object.create(null), this.tree = BQ(QQ.state), this.Tw = this.buildDeco(QQ, vW(QQ.state)), this.decoratedTo = QQ.viewport.to
      }
      update(QQ) {
        let WQ = BQ(QQ.state),
          XQ = vW(QQ.state),
          wQ = XQ != vW(QQ.startState),
          {
            viewport: qQ
          } = QQ.view,
          TQ = QQ.changes.mapPos(this.decoratedTo, 1);
        WQ.length < qQ.to && !wQ && WQ.type == this.tree.type && TQ >= qQ.to ? (this.Tw = this.Tw.map(QQ.changes), this.decoratedTo = TQ) : (WQ != this.tree || QQ.viewportChanged || wQ) && (this.tree = WQ, this.Tw = this.buildDeco(QQ.view, XQ), this.decoratedTo = qQ.to)
      }
      buildDeco(QQ, WQ) {
        if (!WQ || !this.tree.length) return zQ.e.none;
        let XQ = new TQ.x;
        for (let {
            from: wQ,
            to: qQ
          }
          of QQ.t5)(0, sQ.d)(this.tree, WQ, ((QQ, WQ, wQ) => {
          XQ.add(QQ, WQ, this.markCache[wQ] || (this.markCache[wQ] = zQ.e.mark({
            class: wQ
          })))
        }), wQ, qQ);
        return XQ.finish()
      }
    }
    const aW = TQ.t.high(zQ.q.fromClass(HW, {
        Tw: QQ => QQ.Tw
      })),
      lW = GW.define([{
        tag: sQ.h.meta,
        color: "#404740"
      }, {
        tag: sQ.h.link,
        textDecoration: "underline"
      }, {
        tag: sQ.h.heading,
        textDecoration: "underline",
        fontWeight: "bold"
      }, {
        tag: sQ.h.emphasis,
        fontStyle: "italic"
      }, {
        tag: sQ.h.strong,
        fontWeight: "bold"
      }, {
        tag: sQ.h.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: sQ.h.keyword,
        color: "#708"
      }, {
        tag: [sQ.h.atom, sQ.h.bool, sQ.h.url, sQ.h.contentSeparator, sQ.h.labelName],
        color: "#219"
      }, {
        tag: [sQ.h.literal, sQ.h.inserted],
        color: "#164"
      }, {
        tag: [sQ.h.string, sQ.h.deleted],
        color: "#a11"
      }, {
        tag: [sQ.h.regexp, sQ.h.escape, sQ.h.special(sQ.h.string)],
        color: "#e40"
      }, {
        tag: sQ.h.definition(sQ.h.variableName),
        color: "#00f"
      }, {
        tag: sQ.h.local(sQ.h.variableName),
        color: "#30a"
      }, {
        tag: [sQ.h.typeName, sQ.h.namespace],
        color: "#085"
      }, {
        tag: sQ.h.className,
        color: "#167"
      }, {
        tag: [sQ.h.special(sQ.h.variableName), sQ.h.macroName],
        color: "#256"
      }, {
        tag: sQ.h.definition(sQ.h.propertyName),
        color: "#00c"
      }, {
        tag: sQ.h.comment,
        color: "#940"
      }, {
        tag: sQ.h.invalid,
        color: "#f00"
      }]),
      hW = zQ.k.baseTheme({
        "&.cm-focused .cm-matchingBracket": {
          backgroundColor: "#328c8252"
        },
        "&.cm-focused .cm-nonmatchingBracket": {
          backgroundColor: "#bb555544"
        }
      }),
      iW = 1e4,
      cW = "()[]{}",
      AW = TQ.o.define({
        combine: QQ => (0, TQ.U)(QQ, {
          afterCursor: !0,
          brackets: cW,
          maxScanDistance: iW,
          renderMatch: CW
        })
      }),
      RW = zQ.e.mark({
        class: "cm-matchingBracket"
      }),
      EW = zQ.e.mark({
        class: "cm-nonmatchingBracket"
      });

    function CW(QQ) {
      let WQ = [],
        XQ = QQ.matched ? RW : EW;
      return WQ.push(XQ.range(QQ.start.from, QQ.start.to)), QQ.end && WQ.push(XQ.range(QQ.end.from, QQ.end.to)), WQ
    }

    function uW(QQ) {
      let WQ = [],
        XQ = QQ.facet(AW);
      for (let wQ of QQ.selection.Qy) {
        if (!wQ.empty) continue;
        let qQ = oW(QQ, wQ.head, -1, XQ) || wQ.head > 0 && oW(QQ, wQ.head - 1, 1, XQ) || XQ.afterCursor && (oW(QQ, wQ.head, 1, XQ) || wQ.head < QQ.doc.length && oW(QQ, wQ.head + 1, -1, XQ));
        qQ && (WQ = WQ.concat(XQ.renderMatch(qQ, QQ)))
      }
      return zQ.e.set(WQ, !0)
    }
    const LW = [zQ.q.fromClass(class {
      constructor(QQ) {
        this.paused = !1, this.Tw = uW(QQ.state)
      }
      update(QQ) {
        (QQ.docChanged || QQ.selectionSet || this.paused) && (QQ.view.composing ? (this.Tw = this.Tw.map(QQ.changes), this.paused = !0) : (this.Tw = uW(QQ.state), this.paused = !1))
      }
    }, {
      Tw: QQ => QQ.Tw
    }), hW];

    function kW() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [AW.of(QQ), LW]
    }
    const fW = new qQ.k;

    function SW(QQ, WQ, XQ) {
      let wQ = QQ.prop(WQ < 0 ? qQ.k.openedBy : qQ.k.closedBy);
      if (wQ) return wQ;
      if (1 == QQ.name.length) {
        let wQ = XQ.indexOf(QQ.name);
        if (wQ > -1 && wQ % 2 == (WQ < 0 ? 1 : 0)) return [XQ[wQ + WQ]]
      }
      return null
    }

    function tW(QQ) {
      let WQ = QQ.type.prop(fW);
      return WQ ? WQ(QQ.node) : QQ
    }

    function oW(QQ, WQ, XQ) {
      let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        qQ = wQ.maxScanDistance || iW,
        TQ = wQ.brackets || cW,
        zQ = BQ(QQ),
        sQ = zQ.resolveInner(WQ, XQ);
      for (let FQ = sQ; FQ; FQ = FQ.parent) {
        let wQ = SW(FQ.type, XQ, TQ);
        if (wQ && FQ.from < FQ.to) {
          let qQ = tW(FQ);
          if (qQ && (XQ > 0 ? WQ >= qQ.from && WQ < qQ.to : WQ > qQ.from && WQ <= qQ.to)) return eW(QQ, WQ, XQ, FQ, qQ, wQ, TQ)
        }
      }
      return function(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
        if (XQ < 0 ? !WQ : WQ == QQ.doc.length) return null;
        let sQ = XQ < 0 ? QQ.sliceDoc(WQ - 1, WQ) : QQ.sliceDoc(WQ, WQ + 1),
          FQ = zQ.indexOf(sQ);
        if (FQ < 0 || FQ % 2 == 0 != XQ > 0) return null;
        let PQ = {
            from: XQ < 0 ? WQ - 1 : WQ,
            to: XQ > 0 ? WQ + 1 : WQ
          },
          gQ = QQ.doc.iterRange(WQ, XQ > 0 ? QQ.doc.length : 0),
          JQ = 0;
        for (let rQ = 0; !gQ.next().done && rQ <= TQ;) {
          let QQ = gQ.value;
          XQ < 0 && (rQ += QQ.length);
          let TQ = WQ + rQ * XQ;
          for (let WQ = XQ > 0 ? 0 : QQ.length - 1, sQ = XQ > 0 ? QQ.length : -1; WQ != sQ; WQ += XQ) {
            let sQ = zQ.indexOf(QQ[WQ]);
            if (!(sQ < 0 || wQ.resolveInner(TQ + WQ, 1).type != qQ))
              if (sQ % 2 == 0 == XQ > 0) JQ++;
              else {
                if (1 == JQ) return {
                  start: PQ,
                  end: {
                    from: TQ + WQ,
                    to: TQ + WQ + 1
                  },
                  matched: sQ >> 1 == FQ >> 1
                };
                JQ--
              }
          }
          XQ > 0 && (rQ += QQ.length)
        }
        return gQ.done ? {
          start: PQ,
          matched: !1
        } : null
      }(QQ, WQ, XQ, zQ, sQ.type, qQ, TQ)
    }

    function eW(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
      let sQ = wQ.parent,
        FQ = {
          from: qQ.from,
          to: qQ.to
        },
        PQ = 0,
        gQ = null === sQ || void 0 === sQ ? void 0 : sQ.cursor();
      if (gQ && (XQ < 0 ? gQ.childBefore(wQ.from) : gQ.childAfter(wQ.to)))
        do {
          if (XQ < 0 ? gQ.to <= wQ.from : gQ.from >= wQ.to) {
            if (0 == PQ && TQ.indexOf(gQ.type.name) > -1 && gQ.from < gQ.to) {
              let QQ = tW(gQ);
              return {
                start: FQ,
                end: QQ ? {
                  from: QQ.from,
                  to: QQ.to
                } : void 0,
                matched: !0
              }
            }
            if (SW(gQ.type, XQ, zQ)) PQ++;
            else if (SW(gQ.type, -XQ, zQ)) {
              if (0 == PQ) {
                let QQ = tW(gQ);
                return {
                  start: FQ,
                  end: QQ && QQ.from < QQ.to ? {
                    from: QQ.from,
                    to: QQ.to
                  } : void 0,
                  matched: !1
                }
              }
              PQ--
            }
          }
        } while (XQ < 0 ? gQ.prevSibling() : gQ.nextSibling());
      return {
        start: FQ,
        matched: !1
      }
    }
    const nW = Object.create(null),
      xW = [qQ.p.none],
      YW = [],
      NW = Object.create(null),
      ZW = Object.create(null);
    for (let [mW, MW] of [
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
      ]) ZW[mW] = KW(nW, MW);

    function OW(QQ, WQ) {
      YW.indexOf(QQ) > -1 || (YW.push(QQ), console.warn(WQ))
    }

    function KW(QQ, WQ) {
      let XQ = [];
      for (let qQ of WQ.split(" ")) {
        let WQ = [];
        for (let XQ of qQ.split(".")) {
          let wQ = QQ[XQ] || sQ.h[XQ];
          wQ ? "function" == typeof wQ ? WQ.length ? WQ = WQ.map(wQ) : OW(XQ, `Modifier ${XQ} used at start of tag`) : WQ.length ? OW(XQ, `Tag ${XQ} used as modifier`) : WQ = Array.isArray(wQ) ? wQ : [wQ] : OW(XQ, `Unknown highlighting tag ${XQ}`)
        }
        for (let QQ of WQ) XQ.push(QQ)
      }
      if (!XQ.length) return 0;
      let wQ = WQ.replace(/ /g, "_"),
        TQ = wQ + " " + XQ.map((QQ => QQ.id)),
        zQ = NW[TQ];
      if (zQ) return zQ.id;
      let FQ = NW[TQ] = qQ.p.define({
        id: xW.length,
        name: wQ,
        props: [(0, sQ.f)({
          [wQ]: XQ
        })]
      });
      return xW.push(FQ), FQ.id
    }
    zQ.i.RTL, zQ.i.LTR
  },
  41598: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => pQ,
      h: () => vQ
    });
    var wQ = XQ(41555),
      qQ = XQ(41550),
      TQ = XQ(41560);
    class zQ {
      constructor(QQ, WQ, XQ) {
        this.from = QQ, this.to = WQ, this.diagnostic = XQ
      }
    }
    class sQ {
      constructor(QQ, WQ, XQ) {
        this.diagnostics = QQ, this.panel = WQ, this.selected = XQ
      }
      static init(QQ, WQ, XQ) {
        let TQ = XQ.facet(UQ).markerFilter;
        TQ && (QQ = TQ(QQ, XQ));
        let zQ = QQ.slice().sort(((QQ, WQ) => QQ.from - WQ.from || QQ.to - WQ.to)),
          PQ = new qQ.x,
          gQ = [],
          JQ = 0,
          rQ = XQ.doc.iter(),
          IQ = 0,
          jQ = XQ.doc.length;
        for (let qQ = 0;;) {
          let QQ, WQ, XQ = qQ == zQ.length ? null : zQ[qQ];
          if (!XQ && !gQ.length) break;
          if (gQ.length) QQ = JQ, WQ = gQ.reduce(((QQ, WQ) => Math.min(QQ, WQ.to)), XQ && XQ.from > QQ ? XQ.from : 1e8);
          else {
            if (QQ = XQ.from, QQ > jQ) break;
            WQ = XQ.to, gQ.push(XQ), qQ++
          }
          for (; qQ < zQ.length;) {
            let XQ = zQ[qQ];
            if (XQ.from != QQ || !(XQ.to > XQ.from || XQ.to == QQ)) {
              WQ = Math.min(XQ.from, WQ);
              break
            }
            gQ.push(XQ), qQ++, WQ = Math.min(XQ.to, WQ)
          }
          WQ = Math.min(WQ, jQ);
          let TQ = !1;
          if (gQ.some((XQ => XQ.from == QQ && (XQ.to == WQ || WQ == jQ))) && (TQ = QQ == WQ, !TQ && WQ - QQ < 10)) {
            let XQ = QQ - (IQ + rQ.value.length);
            XQ > 0 && (rQ.next(XQ), IQ = QQ);
            for (let wQ = QQ;;) {
              if (wQ >= WQ) {
                TQ = !0;
                break
              }
              if (!rQ.lineBreak && IQ + rQ.value.length > wQ) break;
              wQ = IQ + rQ.value.length, IQ += rQ.value.length, rQ.next()
            }
          }
          let sQ = EQ(gQ);
          if (TQ) PQ.add(QQ, QQ, wQ.e.widget({
            widget: new aQ(sQ),
            diagnostics: gQ.slice()
          }));
          else {
            let XQ = gQ.reduce(((QQ, WQ) => WQ.markClass ? QQ + " " + WQ.markClass : QQ), "");
            PQ.add(QQ, WQ, wQ.e.mark({
              class: "cm-lintRange cm-lintRange-" + sQ + XQ,
              diagnostics: gQ.slice(),
              inclusiveEnd: gQ.some((QQ => QQ.to > WQ))
            }))
          }
          if (JQ = WQ, JQ == jQ) break;
          for (let wQ = 0; wQ < gQ.length; wQ++) gQ[wQ].to <= JQ && gQ.splice(wQ--, 1)
        }
        let BQ = PQ.finish();
        return new sQ(BQ, WQ, FQ(BQ))
      }
    }

    function FQ(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        wQ = null;
      return QQ.between(XQ, 1e9, ((QQ, XQ, qQ) => {
        let {
          spec: TQ
        } = qQ;
        if (!(WQ && TQ.diagnostics.indexOf(WQ) < 0))
          if (wQ) {
            if (TQ.diagnostics.indexOf(wQ.diagnostic) < 0) return !1;
            wQ = new zQ(wQ.from, XQ, wQ.diagnostic)
          } else wQ = new zQ(QQ, XQ, WQ || TQ.diagnostics[0])
      })), wQ
    }

    function PQ(QQ, WQ) {
      let XQ = WQ.pos,
        wQ = WQ.end || XQ,
        qQ = QQ.state.facet(UQ).hideOn(QQ, XQ, wQ);
      if (null != qQ) return qQ;
      let TQ = QQ.startState.doc.lineAt(WQ.pos);
      return !(!QQ.effects.some((QQ => QQ.is(JQ))) && !QQ.changes.touchesRange(TQ.from, Math.max(TQ.to, wQ)))
    }

    function gQ(QQ, WQ) {
      return QQ.field(jQ, !1) ? WQ : WQ.concat(qQ.G.appendConfig.of(CQ))
    }
    const JQ = qQ.G.define(),
      rQ = qQ.G.define(),
      IQ = qQ.G.define(),
      jQ = qQ.I.define({
        create: () => new sQ(wQ.e.none, null, null),
        update(QQ, WQ) {
          if (WQ.docChanged && QQ.diagnostics.size) {
            let XQ = QQ.diagnostics.map(WQ.changes),
              wQ = null,
              qQ = QQ.panel;
            if (QQ.selected) {
              let qQ = WQ.changes.mapPos(QQ.selected.from, 1);
              wQ = FQ(XQ, QQ.selected.diagnostic, qQ) || FQ(XQ, null, qQ)
            }!XQ.size && qQ && WQ.state.facet(UQ).autoPanel && (qQ = null), QQ = new sQ(XQ, qQ, wQ)
          }
          for (let XQ of WQ.effects)
            if (XQ.is(JQ)) {
              let wQ = WQ.state.facet(UQ).autoPanel ? XQ.value.length ? hQ.open : null : QQ.panel;
              QQ = sQ.init(XQ.value, wQ, WQ.state)
            } else XQ.is(rQ) ? QQ = new sQ(QQ.diagnostics, XQ.value ? hQ.open : null, QQ.selected) : XQ.is(IQ) && (QQ = new sQ(QQ.diagnostics, QQ.panel, XQ.value));
          return QQ
        },
        provide: QQ => [wQ.ob.from(QQ, (QQ => QQ.panel)), wQ.k.Tw.from(QQ, (QQ => QQ.diagnostics))]
      });
    const BQ = wQ.e.mark({
      class: "cm-lintRange cm-lintRange-active"
    });

    function yQ(QQ, WQ, XQ) {
      let wQ, {
          diagnostics: qQ
        } = QQ.state.field(jQ),
        TQ = -1,
        zQ = -1;
      qQ.between(WQ - (XQ < 0 ? 1 : 0), WQ + (XQ > 0 ? 1 : 0), ((QQ, qQ, sQ) => {
        let {
          spec: FQ
        } = sQ;
        if (WQ >= QQ && WQ <= qQ && (QQ == qQ || (WQ > QQ || XQ > 0) && (WQ < qQ || XQ < 0))) return wQ = FQ.diagnostics, TQ = QQ, zQ = qQ, !1
      }));
      let sQ = QQ.state.facet(UQ).tooltipFilter;
      return wQ && sQ && (wQ = sQ(wQ, QQ.state)), wQ ? {
        pos: TQ,
        end: zQ,
        above: QQ.state.doc.lineAt(TQ).to < zQ,
        create: () => ({
          dom: VQ(QQ, wQ)
        })
      } : null
    }

    function VQ(QQ, WQ) {
      return (0, TQ.b)("ul", {
        class: "cm-tooltip-lint"
      }, WQ.map((WQ => HQ(QQ, WQ, !1))))
    }
    const DQ = QQ => {
        let WQ = QQ.state.field(jQ, !1);
        return !(!WQ || !WQ.panel) && (QQ.dispatch({
          effects: rQ.of(!1)
        }), !0)
      },
      pQ = [{
        key: "Mod-Shift-m",
        run: QQ => {
          let WQ = QQ.state.field(jQ, !1);
          WQ && WQ.panel || QQ.dispatch({
            effects: gQ(QQ.state, [rQ.of(!0)])
          });
          let XQ = (0, wQ.H)(QQ, hQ.open);
          return XQ && XQ.dom.querySelector(".cm-panel-lint ul").focus(), !0
        },
        preventDefault: !0
      }, {
        key: "F8",
        run: QQ => {
          let WQ = QQ.state.field(jQ, !1);
          if (!WQ) return !1;
          let XQ = QQ.state.selection.main,
            wQ = FQ(WQ.diagnostics, null, XQ.to + 1);
          return !(!wQ && (wQ = FQ(WQ.diagnostics, null, 0), !wQ || wQ.from == XQ.from && wQ.to == XQ.to)) && (QQ.dispatch({
            selection: {
              anchor: wQ.from,
              head: wQ.to
            },
            scrollIntoView: !0
          }), !0)
        }
      }],
      GQ = wQ.q.fromClass(class {
        constructor(QQ) {
          this.view = QQ, this.timeout = -1, this.set = !0;
          let {
            delay: WQ
          } = QQ.state.facet(UQ);
          this.lintTime = Date.now() + WQ, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, WQ)
        }
        run() {
          clearTimeout(this.timeout);
          let QQ = Date.now();
          if (QQ < this.lintTime - 10) this.timeout = setTimeout(this.run, this.lintTime - QQ);
          else {
            this.set = !1;
            let {
              state: QQ
            } = this.view, {
              sources: WQ
            } = QQ.facet(UQ);
            WQ.length && function(QQ, WQ, XQ) {
              let wQ = [],
                qQ = -1;
              for (let TQ of QQ) TQ.then((XQ => {
                wQ.push(XQ), clearTimeout(qQ), wQ.length == QQ.length ? WQ(wQ) : qQ = setTimeout((() => WQ(wQ)), 200)
              }), XQ)
            }(WQ.map((QQ => Promise.resolve(QQ(this.view)))), (WQ => {
              this.view.state.doc == QQ.doc && this.view.dispatch(function(QQ, WQ) {
                return {
                  effects: gQ(QQ, [JQ.of(WQ)])
                }
              }(this.view.state, WQ.reduce(((QQ, WQ) => QQ.concat(WQ)))))
            }), (QQ => {
              (0, wQ.eb)(this.view.state, QQ)
            }))
          }
        }
        update(QQ) {
          let WQ = QQ.state.facet(UQ);
          (QQ.docChanged || WQ != QQ.startState.facet(UQ) || WQ.needsRefresh && WQ.needsRefresh(QQ)) && (this.lintTime = Date.now() + WQ.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, WQ.delay)))
        }
        force() {
          this.set && (this.lintTime = Date.now(), this.run())
        }
        destroy() {
          clearTimeout(this.timeout)
        }
      });
    const UQ = qQ.o.define({
      combine: QQ => ({
        sources: QQ.map((QQ => QQ.source)).filter((QQ => null != QQ)),
        ...(0, qQ.U)(QQ.map((QQ => QQ.config)), {
          delay: 750,
          markerFilter: null,
          tooltipFilter: null,
          needsRefresh: null,
          hideOn: () => null
        }, {
          delay: Math.max,
          markerFilter: bQ,
          tooltipFilter: bQ,
          needsRefresh: (QQ, WQ) => QQ ? WQ ? XQ => QQ(XQ) || WQ(XQ) : QQ : WQ,
          hideOn: (QQ, WQ) => QQ ? WQ ? (XQ, wQ, qQ) => QQ(XQ, wQ, qQ) || WQ(XQ, wQ, qQ) : QQ : WQ,
          autoPanel: (QQ, WQ) => QQ || WQ
        })
      })
    });

    function bQ(QQ, WQ) {
      return QQ ? WQ ? (XQ, wQ) => WQ(QQ(XQ, wQ), wQ) : QQ : WQ
    }

    function vQ(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return [UQ.of({
        source: QQ,
        config: WQ
      }), GQ, CQ]
    }

    function dQ(QQ) {
      let WQ = [];
      if (QQ) QQ: for (let {
          name: XQ
        }
        of QQ) {
        for (let QQ = 0; QQ < XQ.length; QQ++) {
          let wQ = XQ[QQ];
          if (/[a-zA-Z]/.test(wQ) && !WQ.some((QQ => QQ.toLowerCase() == wQ.toLowerCase()))) {
            WQ.push(wQ);
            continue QQ
          }
        }
        WQ.push("")
      }
      return WQ
    }

    function HQ(QQ, WQ, XQ) {
      var wQ;
      let qQ = XQ ? dQ(WQ.actions) : [];
      return (0, TQ.b)("li", {
        class: "cm-diagnostic cm-diagnostic-" + WQ.severity
      }, (0, TQ.b)("span", {
        class: "cm-diagnosticText"
      }, WQ.renderMessage ? WQ.renderMessage(QQ) : WQ.message), null === (wQ = WQ.actions) || void 0 === wQ ? void 0 : wQ.map(((XQ, wQ) => {
        let zQ = !1,
          sQ = wQ => {
            if (wQ.preventDefault(), zQ) return;
            zQ = !0;
            let qQ = FQ(QQ.state.field(jQ).diagnostics, WQ);
            qQ && XQ.apply(QQ, qQ.from, qQ.to)
          },
          {
            name: PQ
          } = XQ,
          gQ = qQ[wQ] ? PQ.indexOf(qQ[wQ]) : -1,
          JQ = gQ < 0 ? PQ : [PQ.slice(0, gQ), (0, TQ.b)("u", PQ.slice(gQ, gQ + 1)), PQ.slice(gQ + 1)],
          rQ = XQ.markClass ? " " + XQ.markClass : "";
        return (0, TQ.b)("button", {
          type: "button",
          class: "cm-diagnosticAction" + rQ,
          onclick: sQ,
          onmousedown: sQ,
          "aria-label": ` Action: ${PQ}${gQ<0?"":` (access key "${qQ[wQ]})"`}.`
        }, JQ)
      })), WQ.source && (0, TQ.b)("div", {
        class: "cm-diagnosticSource"
      }, WQ.source))
    }
    class aQ extends wQ.u {
      constructor(QQ) {
        super(), this.sev = QQ
      }
      eq(QQ) {
        return QQ.sev == this.sev
      }
      toDOM() {
        return (0, TQ.b)("span", {
          class: "cm-lintPoint cm-lintPoint-" + this.sev
        })
      }
    }
    class lQ {
      constructor(QQ, WQ) {
        this.diagnostic = WQ, this.id = "item_" + Math.floor(4294967295 * Math.random()).toString(16), this.dom = HQ(QQ, WQ, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option")
      }
    }
    class hQ {
      constructor(QQ) {
        this.view = QQ, this.items = [];
        this.list = (0, TQ.b)("ul", {
          tabIndex: 0,
          role: "listbox",
          "aria-label": this.view.state.phrase("Diagnostics"),
          onkeydown: WQ => {
            if (!(WQ.ctrlKey || WQ.altKey || WQ.metaKey)) {
              if (27 == WQ.keyCode) DQ(this.view), this.view.focus();
              else if (38 == WQ.keyCode || 33 == WQ.keyCode) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
              else if (40 == WQ.keyCode || 34 == WQ.keyCode) this.moveSelection((this.selectedIndex + 1) % this.items.length);
              else if (36 == WQ.keyCode) this.moveSelection(0);
              else if (35 == WQ.keyCode) this.moveSelection(this.items.length - 1);
              else if (13 == WQ.keyCode) this.view.focus();
              else {
                if (!(WQ.keyCode >= 65 && WQ.keyCode <= 90 && this.selectedIndex >= 0)) return;
                {
                  let {
                    diagnostic: XQ
                  } = this.items[this.selectedIndex], wQ = dQ(XQ.actions);
                  for (let qQ = 0; qQ < wQ.length; qQ++)
                    if (wQ[qQ].toUpperCase().charCodeAt(0) == WQ.keyCode) {
                      let WQ = FQ(this.view.state.field(jQ).diagnostics, XQ);
                      WQ && XQ.actions[qQ].apply(QQ, WQ.from, WQ.to)
                    }
                }
              }
              WQ.preventDefault()
            }
          },
          onclick: QQ => {
            for (let WQ = 0; WQ < this.items.length; WQ++) this.items[WQ].dom.contains(QQ.target) && this.moveSelection(WQ)
          }
        }), this.dom = (0, TQ.b)("div", {
          class: "cm-panel-lint"
        }, this.list, (0, TQ.b)("button", {
          type: "button",
          name: "close",
          "aria-label": this.view.state.phrase("close"),
          onclick: () => DQ(this.view)
        }, "\xd7")), this.update()
      }
      get selectedIndex() {
        let QQ = this.view.state.field(jQ).selected;
        if (!QQ) return -1;
        for (let WQ = 0; WQ < this.items.length; WQ++)
          if (this.items[WQ].diagnostic == QQ.diagnostic) return WQ;
        return -1
      }
      update() {
        let {
          diagnostics: QQ,
          selected: WQ
        } = this.view.state.field(jQ), XQ = 0, wQ = !1, qQ = null, TQ = new Set;
        for (QQ.between(0, this.view.state.doc.length, ((QQ, zQ, sQ) => {
            let {
              spec: FQ
            } = sQ;
            for (let PQ of FQ.diagnostics) {
              if (TQ.has(PQ)) continue;
              TQ.add(PQ);
              let QQ, zQ = -1;
              for (let WQ = XQ; WQ < this.items.length; WQ++)
                if (this.items[WQ].diagnostic == PQ) {
                  zQ = WQ;
                  break
                } zQ < 0 ? (QQ = new lQ(this.view, PQ), this.items.splice(XQ, 0, QQ), wQ = !0) : (QQ = this.items[zQ], zQ > XQ && (this.items.splice(XQ, zQ - XQ), wQ = !0)), WQ && QQ.diagnostic == WQ.diagnostic ? QQ.dom.hasAttribute("aria-selected") || (QQ.dom.setAttribute("aria-selected", "true"), qQ = QQ) : QQ.dom.hasAttribute("aria-selected") && QQ.dom.removeAttribute("aria-selected"), XQ++
            }
          })); XQ < this.items.length && !(1 == this.items.length && this.items[0].diagnostic.from < 0);) wQ = !0, this.items.pop();
        0 == this.items.length && (this.items.push(new lQ(this.view, {
          from: -1,
          to: -1,
          severity: "info",
          message: this.view.state.phrase("No diagnostics")
        })), wQ = !0), qQ ? (this.list.setAttribute("aria-activedescendant", qQ.id), this.view.requestMeasure({
          key: this,
          read: () => ({
            sel: qQ.dom.getBoundingClientRect(),
            panel: this.list.getBoundingClientRect()
          }),
          write: QQ => {
            let {
              sel: WQ,
              panel: XQ
            } = QQ, wQ = XQ.height / this.list.offsetHeight;
            WQ.top < XQ.top ? this.list.scrollTop -= (XQ.top - WQ.top) / wQ : WQ.bottom > XQ.bottom && (this.list.scrollTop += (WQ.bottom - XQ.bottom) / wQ)
          }
        })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), wQ && this.sync()
      }
      sync() {
        let QQ = this.list.firstChild;

        function WQ() {
          let WQ = QQ;
          QQ = WQ.nextSibling, WQ.remove()
        }
        for (let XQ of this.items)
          if (XQ.dom.parentNode == this.list) {
            for (; QQ != XQ.dom;) WQ();
            QQ = XQ.dom.nextSibling
          } else this.list.insertBefore(XQ.dom, QQ);
        for (; QQ;) WQ()
      }
      moveSelection(QQ) {
        if (this.selectedIndex < 0) return;
        let WQ = FQ(this.view.state.field(jQ).diagnostics, this.items[QQ].diagnostic);
        WQ && this.view.dispatch({
          selection: {
            anchor: WQ.from,
            head: WQ.to
          },
          scrollIntoView: !0,
          effects: IQ.of(WQ)
        })
      }
      static open(QQ) {
        return new hQ(QQ)
      }
    }

    function iQ(QQ) {
      return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${arguments.length>1&&void 0!==arguments[1]?arguments[1]:'viewBox="0 0 40 40"'}>${encodeURIComponent(QQ)}</svg>')`
    }

    function cQ(QQ) {
      return iQ(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${QQ}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"')
    }
    const AQ = wQ.k.baseTheme({
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
        backgroundImage: cQ("#d11")
      },
      ".cm-lintRange-warning": {
        backgroundImage: cQ("orange")
      },
      ".cm-lintRange-info": {
        backgroundImage: cQ("#999")
      },
      ".cm-lintRange-hint": {
        backgroundImage: cQ("#66d")
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

    function RQ(QQ) {
      return "error" == QQ ? 4 : "warning" == QQ ? 3 : "info" == QQ ? 2 : 1
    }

    function EQ(QQ) {
      let WQ = "hint",
        XQ = 1;
      for (let wQ of QQ) {
        let QQ = RQ(wQ.severity);
        QQ > XQ && (XQ = QQ, WQ = wQ.severity)
      }
      return WQ
    }
    wQ.n;
    const CQ = [jQ, wQ.k.Tw.compute([jQ], (QQ => {
      let {
        selected: WQ,
        panel: XQ
      } = QQ.field(jQ);
      return WQ && XQ && WQ.from != WQ.to ? wQ.e.set([BQ.range(WQ.from, WQ.to)]) : wQ.e.none
    })), (0, wQ._)(yQ, {
      hideOn: PQ
    }), AQ]
  },
  41592: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => mQ,
      f: () => VQ,
      g: () => MQ
    });
    var wQ = XQ(41555),
      qQ = XQ(41550),
      TQ = XQ(41560);
    const zQ = "function" == typeof String.prototype.normalize ? QQ => QQ.normalize("NFKD") : QQ => QQ;
    class sQ {
      constructor(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : QQ.length,
          qQ = arguments.length > 4 ? arguments[4] : void 0,
          TQ = arguments.length > 5 ? arguments[5] : void 0;
        this.test = TQ, this.value = {
          from: 0,
          to: 0
        }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = QQ.iterRange(XQ, wQ), this.bufferStart = XQ, this.normalize = qQ ? QQ => qQ(zQ(QQ)) : zQ, this.query = this.normalize(WQ)
      }
      peek() {
        if (this.bufferPos == this.buffer.length) {
          if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
          this.bufferPos = 0, this.buffer = this.iter.value
        }
        return (0, qQ.P)(this.buffer, this.bufferPos)
      }
      next() {
        for (; this.matches.length;) this.matches.pop();
        return this.nextOverlapping()
      }
      nextOverlapping() {
        for (;;) {
          let QQ = this.peek();
          if (QQ < 0) return this.done = !0, this;
          let WQ = (0, qQ.Z)(QQ),
            XQ = this.bufferStart + this.bufferPos;
          this.bufferPos += (0, qQ.Q)(QQ);
          let wQ = this.normalize(WQ);
          if (wQ.length)
            for (let qQ = 0, TQ = XQ;; qQ++) {
              let QQ = wQ.charCodeAt(qQ),
                zQ = this.match(QQ, TQ, this.bufferPos + this.bufferStart);
              if (qQ == wQ.length - 1) {
                if (zQ) return this.value = zQ, this;
                break
              }
              TQ == XQ && qQ < WQ.length && WQ.charCodeAt(qQ) == QQ && TQ++
            }
        }
      }
      match(QQ, WQ, XQ) {
        let wQ = null;
        for (let qQ = 0; qQ < this.matches.length; qQ += 2) {
          let WQ = this.matches[qQ],
            TQ = !1;
          this.query.charCodeAt(WQ) == QQ && (WQ == this.query.length - 1 ? wQ = {
            from: this.matches[qQ + 1],
            to: XQ
          } : (this.matches[qQ]++, TQ = !0)), TQ || (this.matches.splice(qQ, 2), qQ -= 2)
        }
        return this.query.charCodeAt(0) == QQ && (1 == this.query.length ? wQ = {
          from: WQ,
          to: XQ
        } : this.matches.push(1, WQ)), wQ && this.test && !this.test(wQ.from, wQ.to, this.buffer, this.bufferStart) && (wQ = null), wQ
      }
    }
    "undefined" != typeof Symbol && (sQ.prototype[Symbol.iterator] = function() {
      return this
    });
    const FQ = {
        from: -1,
        to: -1,
        match: /.*/.exec("")
      },
      PQ = "gm" + (null == /x/.unicode ? "" : "u");
    class gQ {
      constructor(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : QQ.length;
        if (this.text = QQ, this.to = qQ, this.curLine = "", this.done = !1, this.value = FQ, /\\[sWDnr]|\n|\r|\[\^/.test(WQ)) return new IQ(QQ, WQ, XQ, wQ, qQ);
        this.re = new RegExp(WQ, PQ + ((null === XQ || void 0 === XQ ? void 0 : XQ.ignoreCase) ? "i" : "")), this.test = null === XQ || void 0 === XQ ? void 0 : XQ.test, this.iter = QQ.iter();
        let TQ = QQ.lineAt(wQ);
        this.curLineStart = TQ.from, this.matchPos = jQ(QQ, wQ), this.getLine(this.curLineStart)
      }
      getLine(QQ) {
        this.iter.next(QQ), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next())
      }
      nextLine() {
        this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0)
      }
      next() {
        for (let QQ = this.matchPos - this.curLineStart;;) {
          this.re.lastIndex = QQ;
          let WQ = this.matchPos <= this.to && this.re.exec(this.curLine);
          if (WQ) {
            let XQ = this.curLineStart + WQ.index,
              wQ = XQ + WQ[0].length;
            if (this.matchPos = jQ(this.text, wQ + (XQ == wQ ? 1 : 0)), XQ == this.curLineStart + this.curLine.length && this.nextLine(), (XQ < wQ || XQ > this.value.to) && (!this.test || this.test(XQ, wQ, WQ))) return this.value = {
              from: XQ,
              to: wQ,
              match: WQ
            }, this;
            QQ = this.matchPos - this.curLineStart
          } else {
            if (!(this.curLineStart + this.curLine.length < this.to)) return this.done = !0, this;
            this.nextLine(), QQ = 0
          }
        }
      }
    }
    const JQ = new WeakMap;
    class rQ {
      constructor(QQ, WQ) {
        this.from = QQ, this.text = WQ
      }
      get to() {
        return this.from + this.text.length
      }
      static get(QQ, WQ, XQ) {
        let wQ = JQ.get(QQ);
        if (!wQ || wQ.from >= XQ || wQ.to <= WQ) {
          let wQ = new rQ(WQ, QQ.sliceString(WQ, XQ));
          return JQ.set(QQ, wQ), wQ
        }
        if (wQ.from == WQ && wQ.to == XQ) return wQ;
        let {
          text: qQ,
          from: TQ
        } = wQ;
        return TQ > WQ && (qQ = QQ.sliceString(WQ, TQ) + qQ, TQ = WQ), wQ.to < XQ && (qQ += QQ.sliceString(wQ.to, XQ)), JQ.set(QQ, new rQ(TQ, qQ)), new rQ(WQ, qQ.slice(WQ - TQ, XQ - TQ))
      }
    }
    class IQ {
      constructor(QQ, WQ, XQ, wQ, qQ) {
        this.text = QQ, this.to = qQ, this.done = !1, this.value = FQ, this.matchPos = jQ(QQ, wQ), this.re = new RegExp(WQ, PQ + ((null === XQ || void 0 === XQ ? void 0 : XQ.ignoreCase) ? "i" : "")), this.test = null === XQ || void 0 === XQ ? void 0 : XQ.test, this.flat = rQ.get(QQ, wQ, this.chunkEnd(wQ + 5e3))
      }
      chunkEnd(QQ) {
        return QQ >= this.to ? this.to : this.text.lineAt(QQ).to
      }
      next() {
        for (;;) {
          let QQ = this.re.lastIndex = this.matchPos - this.flat.from,
            WQ = this.re.exec(this.flat.text);
          if (WQ && !WQ[0] && WQ.index == QQ && (this.re.lastIndex = QQ + 1, WQ = this.re.exec(this.flat.text)), WQ) {
            let QQ = this.flat.from + WQ.index,
              XQ = QQ + WQ[0].length;
            if ((this.flat.to >= this.to || WQ.index + WQ[0].length <= this.flat.text.length - 10) && (!this.test || this.test(QQ, XQ, WQ))) return this.value = {
              from: QQ,
              to: XQ,
              match: WQ
            }, this.matchPos = jQ(this.text, XQ + (QQ == XQ ? 1 : 0)), this
          }
          if (this.flat.to == this.to) return this.done = !0, this;
          this.flat = rQ.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + 2 * this.flat.text.length))
        }
      }
    }

    function jQ(QQ, WQ) {
      if (WQ >= QQ.length) return WQ;
      let XQ, wQ = QQ.lineAt(WQ);
      for (; WQ < wQ.to && (XQ = wQ.text.charCodeAt(WQ - wQ.from)) >= 56320 && XQ < 57344;) WQ++;
      return WQ
    }
    "undefined" != typeof Symbol && (gQ.prototype[Symbol.iterator] = IQ.prototype[Symbol.iterator] = function() {
      return this
    });
    const BQ = {
        highlightWordAroundCursor: !1,
        minSelectionLength: 1,
        maxMatches: 100,
        wholeWords: !1
      },
      yQ = qQ.o.define({
        combine: QQ => (0, qQ.U)(QQ, BQ, {
          highlightWordAroundCursor: (QQ, WQ) => QQ || WQ,
          minSelectionLength: Math.min,
          maxMatches: Math.min
        })
      });

    function VQ(QQ) {
      let WQ = [bQ, UQ];
      return QQ && WQ.push(yQ.of(QQ)), WQ
    }
    const DQ = wQ.e.mark({
        class: "cm-selectionMatch"
      }),
      pQ = wQ.e.mark({
        class: "cm-selectionMatch cm-selectionMatch-main"
      });

    function GQ(QQ, WQ, XQ, wQ) {
      return (0 == XQ || QQ(WQ.sliceDoc(XQ - 1, XQ)) != qQ.g.Word) && (wQ == WQ.doc.length || QQ(WQ.sliceDoc(wQ, wQ + 1)) != qQ.g.Word)
    }
    const UQ = wQ.q.fromClass(class {
        constructor(QQ) {
          this.Tw = this.getDeco(QQ)
        }
        update(QQ) {
          (QQ.selectionSet || QQ.docChanged || QQ.viewportChanged) && (this.Tw = this.getDeco(QQ.view))
        }
        getDeco(QQ) {
          let WQ = QQ.state.facet(yQ),
            {
              state: XQ
            } = QQ,
            TQ = XQ.selection;
          if (TQ.Qy.length > 1) return wQ.e.none;
          let zQ, FQ = TQ.main,
            PQ = null;
          if (FQ.empty) {
            if (!WQ.highlightWordAroundCursor) return wQ.e.none;
            let QQ = XQ.wordAt(FQ.head);
            if (!QQ) return wQ.e.none;
            PQ = XQ.charCategorizer(FQ.head), zQ = XQ.sliceDoc(QQ.from, QQ.to)
          } else {
            let QQ = FQ.to - FQ.from;
            if (QQ < WQ.minSelectionLength || QQ > 200) return wQ.e.none;
            if (WQ.wholeWords) {
              if (zQ = XQ.sliceDoc(FQ.from, FQ.to), PQ = XQ.charCategorizer(FQ.head), !GQ(PQ, XQ, FQ.from, FQ.to) || ! function(QQ, WQ, XQ, wQ) {
                  return QQ(WQ.sliceDoc(XQ, XQ + 1)) == qQ.g.Word && QQ(WQ.sliceDoc(wQ - 1, wQ)) == qQ.g.Word
                }(PQ, XQ, FQ.from, FQ.to)) return wQ.e.none
            } else if (zQ = XQ.sliceDoc(FQ.from, FQ.to), !zQ) return wQ.e.none
          }
          let gQ = [];
          for (let qQ of QQ.t5) {
            let QQ = new sQ(XQ.doc, zQ, qQ.from, qQ.to);
            for (; !QQ.next().done;) {
              let {
                from: qQ,
                to: TQ
              } = QQ.value;
              if ((!PQ || GQ(PQ, XQ, qQ, TQ)) && (FQ.empty && qQ <= FQ.from && TQ >= FQ.to ? gQ.push(pQ.range(qQ, TQ)) : (qQ >= FQ.to || TQ <= FQ.from) && gQ.push(DQ.range(qQ, TQ)), gQ.length > WQ.maxMatches)) return wQ.e.none
            }
          }
          return wQ.e.set(gQ)
        }
      }, {
        Tw: QQ => QQ.Tw
      }),
      bQ = wQ.k.baseTheme({
        ".cm-selectionMatch": {
          backgroundColor: "#99ff7780"
        },
        ".cm-searchMatch .cm-selectionMatch": {
          backgroundColor: "transparent"
        }
      });
    const vQ = qQ.o.define({
      combine: QQ => (0, qQ.U)(QQ, {
        top: !1,
        caseSensitive: !1,
        literal: !1,
        regexp: !1,
        wholeWord: !1,
        createPanel: QQ => new QW(QQ),
        scrollToMatch: QQ => wQ.k.scrollIntoView(QQ)
      })
    });
    class dQ {
      constructor(QQ) {
        this.search = QQ.search, this.caseSensitive = !!QQ.caseSensitive, this.literal = !!QQ.literal, this.regexp = !!QQ.regexp, this.replace = QQ.replace || "", this.valid = !!this.search && (!this.regexp || function(QQ) {
          try {
            return new RegExp(QQ, PQ), !0
          } catch (WQ) {
            return !1
          }
        }(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!QQ.wholeWord, this.test = QQ.test
      }
      unquote(QQ) {
        return this.literal ? QQ : QQ.replace(/\\([nrt\\])/g, ((QQ, WQ) => "n" == WQ ? "\n" : "r" == WQ ? "\r" : "t" == WQ ? "\t" : "\\"))
      }
      eq(QQ) {
        return this.search == QQ.search && this.replace == QQ.replace && this.caseSensitive == QQ.caseSensitive && this.regexp == QQ.regexp && this.wholeWord == QQ.wholeWord && this.test == QQ.test
      }
      create() {
        return this.regexp ? new AQ(this) : new lQ(this)
      }
      getCursor(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          XQ = arguments.length > 2 ? arguments[2] : void 0,
          wQ = QQ.doc ? QQ : qQ.l.create({
            doc: QQ
          });
        return null == XQ && (XQ = wQ.doc.length), this.regexp ? hQ(this, wQ, WQ, XQ) : aQ(this, wQ, WQ, XQ)
      }
    }
    class HQ {
      constructor(QQ) {
        this.spec = QQ
      }
    }

    function aQ(QQ, WQ, XQ, wQ) {
      let TQ;
      var zQ, FQ;
      return QQ.wholeWord && (zQ = WQ.doc, FQ = WQ.charCategorizer(WQ.selection.main.head), TQ = (QQ, WQ, XQ, wQ) => ((wQ > QQ || wQ + XQ.length < WQ) && (wQ = Math.max(0, QQ - 2), XQ = zQ.sliceString(wQ, Math.min(zQ.length, WQ + 2))), (FQ(iQ(XQ, QQ - wQ)) != qQ.g.Word || FQ(cQ(XQ, QQ - wQ)) != qQ.g.Word) && (FQ(cQ(XQ, WQ - wQ)) != qQ.g.Word || FQ(iQ(XQ, WQ - wQ)) != qQ.g.Word))), QQ.test && (TQ = function(QQ, WQ, XQ) {
        return (wQ, qQ, TQ, zQ) => {
          if (XQ && !XQ(wQ, qQ, TQ, zQ)) return !1;
          let sQ = wQ >= zQ && qQ <= zQ + TQ.length ? TQ.slice(wQ - zQ, qQ - zQ) : WQ.doc.sliceString(wQ, qQ);
          return QQ(sQ, WQ, wQ, qQ)
        }
      }(QQ.test, WQ, TQ)), new sQ(WQ.doc, QQ.unquoted, XQ, wQ, QQ.caseSensitive ? void 0 : QQ => QQ.toLowerCase(), TQ)
    }
    class lQ extends HQ {
      constructor(QQ) {
        super(QQ)
      }
      nextMatch(QQ, WQ, XQ) {
        let wQ = aQ(this.spec, QQ, XQ, QQ.doc.length).nextOverlapping();
        if (wQ.done) {
          let XQ = Math.min(QQ.doc.length, WQ + this.spec.unquoted.length);
          wQ = aQ(this.spec, QQ, 0, XQ).nextOverlapping()
        }
        return wQ.done || wQ.value.from == WQ && wQ.value.to == XQ ? null : wQ.value
      }
      prevMatchInRange(QQ, WQ, XQ) {
        for (let wQ = XQ;;) {
          let XQ = Math.max(WQ, wQ - 1e4 - this.spec.unquoted.length),
            qQ = aQ(this.spec, QQ, XQ, wQ),
            TQ = null;
          for (; !qQ.nextOverlapping().done;) TQ = qQ.value;
          if (TQ) return TQ;
          if (XQ == WQ) return null;
          wQ -= 1e4
        }
      }
      prevMatch(QQ, WQ, XQ) {
        let wQ = this.prevMatchInRange(QQ, 0, WQ);
        return wQ || (wQ = this.prevMatchInRange(QQ, Math.max(0, XQ - this.spec.unquoted.length), QQ.doc.length)), !wQ || wQ.from == WQ && wQ.to == XQ ? null : wQ
      }
      getReplacement(QQ) {
        return this.spec.unquote(this.spec.replace)
      }
      matchAll(QQ, WQ) {
        let XQ = aQ(this.spec, QQ, 0, QQ.doc.length),
          wQ = [];
        for (; !XQ.next().done;) {
          if (wQ.length >= WQ) return null;
          wQ.push(XQ.value)
        }
        return wQ
      }
      highlight(QQ, WQ, XQ, wQ) {
        let qQ = aQ(this.spec, QQ, Math.max(0, WQ - this.spec.unquoted.length), Math.min(XQ + this.spec.unquoted.length, QQ.doc.length));
        for (; !qQ.next().done;) wQ(qQ.value.from, qQ.value.to)
      }
    }

    function hQ(QQ, WQ, XQ, wQ) {
      let TQ;
      var zQ;
      return QQ.wholeWord && (zQ = WQ.charCategorizer(WQ.selection.main.head), TQ = (QQ, WQ, XQ) => !XQ[0].length || (zQ(iQ(XQ.input, XQ.index)) != qQ.g.Word || zQ(cQ(XQ.input, XQ.index)) != qQ.g.Word) && (zQ(cQ(XQ.input, XQ.index + XQ[0].length)) != qQ.g.Word || zQ(iQ(XQ.input, XQ.index + XQ[0].length)) != qQ.g.Word)), QQ.test && (TQ = function(QQ, WQ, XQ) {
        return (wQ, qQ, TQ) => (!XQ || XQ(wQ, qQ, TQ)) && QQ(TQ[0], WQ, wQ, qQ)
      }(QQ.test, WQ, TQ)), new gQ(WQ.doc, QQ.search, {
        ignoreCase: !QQ.caseSensitive,
        test: TQ
      }, XQ, wQ)
    }

    function iQ(QQ, WQ) {
      return QQ.slice((0, qQ.W)(QQ, WQ, !1), WQ)
    }

    function cQ(QQ, WQ) {
      return QQ.slice(WQ, (0, qQ.W)(QQ, WQ))
    }
    class AQ extends HQ {
      nextMatch(QQ, WQ, XQ) {
        let wQ = hQ(this.spec, QQ, XQ, QQ.doc.length).next();
        return wQ.done && (wQ = hQ(this.spec, QQ, 0, WQ).next()), wQ.done ? null : wQ.value
      }
      prevMatchInRange(QQ, WQ, XQ) {
        for (let wQ = 1;; wQ++) {
          let qQ = Math.max(WQ, XQ - 1e4 * wQ),
            TQ = hQ(this.spec, QQ, qQ, XQ),
            zQ = null;
          for (; !TQ.next().done;) zQ = TQ.value;
          if (zQ && (qQ == WQ || zQ.from > qQ + 10)) return zQ;
          if (qQ == WQ) return null
        }
      }
      prevMatch(QQ, WQ, XQ) {
        return this.prevMatchInRange(QQ, 0, WQ) || this.prevMatchInRange(QQ, XQ, QQ.doc.length)
      }
      getReplacement(QQ) {
        return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, ((WQ, XQ) => {
          if ("&" == XQ) return QQ.match[0];
          if ("$" == XQ) return "$";
          for (let wQ = XQ.length; wQ > 0; wQ--) {
            let WQ = +XQ.slice(0, wQ);
            if (WQ > 0 && WQ < QQ.match.length) return QQ.match[WQ] + XQ.slice(wQ)
          }
          return WQ
        }))
      }
      matchAll(QQ, WQ) {
        let XQ = hQ(this.spec, QQ, 0, QQ.doc.length),
          wQ = [];
        for (; !XQ.next().done;) {
          if (wQ.length >= WQ) return null;
          wQ.push(XQ.value)
        }
        return wQ
      }
      highlight(QQ, WQ, XQ, wQ) {
        let qQ = hQ(this.spec, QQ, Math.max(0, WQ - 250), Math.min(XQ + 250, QQ.doc.length));
        for (; !qQ.next().done;) wQ(qQ.value.from, qQ.value.to)
      }
    }
    const RQ = qQ.G.define(),
      EQ = qQ.G.define(),
      CQ = qQ.I.define({
        create: QQ => new uQ(NQ(QQ).create(), null),
        update(QQ, WQ) {
          for (let XQ of WQ.effects) XQ.is(RQ) ? QQ = new uQ(XQ.value.create(), QQ.panel) : XQ.is(EQ) && (QQ = new uQ(QQ.query, XQ.value ? YQ : null));
          return QQ
        },
        provide: QQ => wQ.ob.from(QQ, (QQ => QQ.panel))
      });
    class uQ {
      constructor(QQ, WQ) {
        this.query = QQ, this.panel = WQ
      }
    }
    const LQ = wQ.e.mark({
        class: "cm-searchMatch"
      }),
      kQ = wQ.e.mark({
        class: "cm-searchMatch cm-searchMatch-selected"
      }),
      fQ = wQ.q.fromClass(class {
        constructor(QQ) {
          this.view = QQ, this.Tw = this.highlight(QQ.state.field(CQ))
        }
        update(QQ) {
          let WQ = QQ.state.field(CQ);
          (WQ != QQ.startState.field(CQ) || QQ.docChanged || QQ.selectionSet || QQ.viewportChanged) && (this.Tw = this.highlight(WQ))
        }
        highlight(QQ) {
          let {
            query: WQ,
            panel: XQ
          } = QQ;
          if (!XQ || !WQ.spec.valid) return wQ.e.none;
          let {
            view: TQ
          } = this, zQ = new qQ.x;
          for (let wQ = 0, qQ = TQ.t5, sQ = qQ.length; wQ < sQ; wQ++) {
            let {
              from: QQ,
              to: XQ
            } = qQ[wQ];
            for (; wQ < sQ - 1 && XQ > qQ[wQ + 1].from - 500;) XQ = qQ[++wQ].to;
            WQ.highlight(TQ.state, QQ, XQ, ((QQ, WQ) => {
              let XQ = TQ.state.selection.Qy.some((XQ => XQ.from == QQ && XQ.to == WQ));
              zQ.add(QQ, WQ, XQ ? kQ : LQ)
            }))
          }
          return zQ.finish()
        }
      }, {
        Tw: QQ => QQ.Tw
      });

    function SQ(QQ) {
      return WQ => {
        let XQ = WQ.state.field(CQ, !1);
        return XQ && XQ.query.spec.valid ? QQ(WQ, XQ) : KQ(WQ)
      }
    }
    const tQ = SQ(((QQ, WQ) => {
        let {
          query: XQ
        } = WQ, {
          to: wQ
        } = QQ.state.selection.main, TQ = XQ.nextMatch(QQ.state, wQ, wQ);
        if (!TQ) return !1;
        let zQ = qQ.k.single(TQ.from, TQ.to),
          sQ = QQ.state.facet(vQ);
        return QQ.dispatch({
          selection: zQ,
          effects: [qW(QQ, TQ), sQ.scrollToMatch(zQ.main, QQ)],
          userEvent: "select.search"
        }), OQ(QQ), !0
      })),
      oQ = SQ(((QQ, WQ) => {
        let {
          query: XQ
        } = WQ, {
          state: wQ
        } = QQ, {
          from: TQ
        } = wQ.selection.main, zQ = XQ.prevMatch(wQ, TQ, TQ);
        if (!zQ) return !1;
        let sQ = qQ.k.single(zQ.from, zQ.to),
          FQ = QQ.state.facet(vQ);
        return QQ.dispatch({
          selection: sQ,
          effects: [qW(QQ, zQ), FQ.scrollToMatch(sQ.main, QQ)],
          userEvent: "select.search"
        }), OQ(QQ), !0
      })),
      eQ = SQ(((QQ, WQ) => {
        let {
          query: XQ
        } = WQ, wQ = XQ.matchAll(QQ.state, 1e3);
        return !(!wQ || !wQ.length) && (QQ.dispatch({
          selection: qQ.k.create(wQ.map((QQ => qQ.k.range(QQ.from, QQ.to)))),
          userEvent: "select.search.matches"
        }), !0)
      })),
      nQ = SQ(((QQ, WQ) => {
        let {
          query: XQ
        } = WQ, {
          state: TQ
        } = QQ, {
          from: zQ,
          to: sQ
        } = TQ.selection.main;
        if (TQ.readOnly) return !1;
        let FQ = XQ.nextMatch(TQ, zQ, zQ);
        if (!FQ) return !1;
        let PQ, gQ, JQ = FQ,
          rQ = [],
          IQ = [];
        JQ.from == zQ && JQ.to == sQ && (gQ = TQ.toText(XQ.getReplacement(JQ)), rQ.push({
          from: JQ.from,
          to: JQ.to,
          insert: gQ
        }), JQ = XQ.nextMatch(TQ, JQ.from, JQ.to), IQ.push(wQ.k.announce.of(TQ.phrase("replaced match on line $", TQ.doc.lineAt(zQ).number) + ".")));
        let jQ = QQ.state.changes(rQ);
        return JQ && (PQ = qQ.k.single(JQ.from, JQ.to).map(jQ), IQ.push(qW(QQ, JQ)), IQ.push(TQ.facet(vQ).scrollToMatch(PQ.main, QQ))), QQ.dispatch({
          changes: jQ,
          selection: PQ,
          effects: IQ,
          userEvent: "input.replace"
        }), !0
      })),
      xQ = SQ(((QQ, WQ) => {
        let {
          query: XQ
        } = WQ;
        if (QQ.state.readOnly) return !1;
        let qQ = XQ.matchAll(QQ.state, 1e9).map((QQ => {
          let {
            from: WQ,
            to: wQ
          } = QQ;
          return {
            from: WQ,
            to: wQ,
            insert: XQ.getReplacement(QQ)
          }
        }));
        if (!qQ.length) return !1;
        let TQ = QQ.state.phrase("replaced $ matches", qQ.length) + ".";
        return QQ.dispatch({
          changes: qQ,
          effects: wQ.k.announce.of(TQ),
          userEvent: "input.replace.all"
        }), !0
      }));

    function YQ(QQ) {
      return QQ.state.facet(vQ).createPanel(QQ)
    }

    function NQ(QQ, WQ) {
      var XQ, wQ, qQ, TQ, zQ;
      let sQ = QQ.selection.main,
        FQ = sQ.empty || sQ.to > sQ.from + 100 ? "" : QQ.sliceDoc(sQ.from, sQ.to);
      if (WQ && !FQ) return WQ;
      let PQ = QQ.facet(vQ);
      return new dQ({
        search: (null !== (XQ = null === WQ || void 0 === WQ ? void 0 : WQ.literal) && void 0 !== XQ ? XQ : PQ.literal) ? FQ : FQ.replace(/\n/g, "\\n"),
        caseSensitive: null !== (wQ = null === WQ || void 0 === WQ ? void 0 : WQ.caseSensitive) && void 0 !== wQ ? wQ : PQ.caseSensitive,
        literal: null !== (qQ = null === WQ || void 0 === WQ ? void 0 : WQ.literal) && void 0 !== qQ ? qQ : PQ.literal,
        regexp: null !== (TQ = null === WQ || void 0 === WQ ? void 0 : WQ.regexp) && void 0 !== TQ ? TQ : PQ.regexp,
        wholeWord: null !== (zQ = null === WQ || void 0 === WQ ? void 0 : WQ.wholeWord) && void 0 !== zQ ? zQ : PQ.wholeWord
      })
    }

    function ZQ(QQ) {
      let WQ = (0, wQ.H)(QQ, YQ);
      return WQ && WQ.dom.querySelector("[main-field]")
    }

    function OQ(QQ) {
      let WQ = ZQ(QQ);
      WQ && WQ == QQ.root.activeElement && WQ.select()
    }
    const KQ = QQ => {
        let WQ = QQ.state.field(CQ, !1);
        if (WQ && WQ.panel) {
          let XQ = ZQ(QQ);
          if (XQ && XQ != QQ.root.activeElement) {
            let wQ = NQ(QQ.state, WQ.query.spec);
            wQ.valid && QQ.dispatch({
              effects: RQ.of(wQ)
            }), XQ.focus(), XQ.select()
          }
        } else QQ.dispatch({
          effects: [EQ.of(!0), WQ ? RQ.of(NQ(QQ.state, WQ.query.spec)) : qQ.G.appendConfig.of(zW)]
        });
        return !0
      },
      mQ = QQ => {
        let WQ = QQ.state.field(CQ, !1);
        if (!WQ || !WQ.panel) return !1;
        let XQ = (0, wQ.H)(QQ, YQ);
        return XQ && XQ.dom.contains(QQ.root.activeElement) && QQ.focus(), QQ.dispatch({
          effects: EQ.of(!1)
        }), !0
      },
      MQ = [{
        key: "Mod-f",
        run: KQ,
        scope: "editor search-panel"
      }, {
        key: "F3",
        run: tQ,
        shift: oQ,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Mod-g",
        run: tQ,
        shift: oQ,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Escape",
        run: mQ,
        scope: "editor search-panel"
      }, {
        key: "Mod-Shift-l",
        run: QQ => {
          let {
            state: WQ,
            dispatch: XQ
          } = QQ, wQ = WQ.selection;
          if (wQ.Qy.length > 1 || wQ.main.empty) return !1;
          let {
            from: TQ,
            to: zQ
          } = wQ.main, FQ = [], PQ = 0;
          for (let gQ = new sQ(WQ.doc, WQ.sliceDoc(TQ, zQ)); !gQ.next().done;) {
            if (FQ.length > 1e3) return !1;
            gQ.value.from == TQ && (PQ = FQ.length), FQ.push(qQ.k.range(gQ.value.from, gQ.value.to))
          }
          return XQ(WQ.update({
            selection: qQ.k.create(FQ, PQ),
            userEvent: "select.search.matches"
          })), !0
        }
      }, {
        key: "Mod-Alt-g",
        run: QQ => {
          let {
            state: WQ
          } = QQ, XQ = String(WQ.doc.lineAt(QQ.state.selection.main.head).number), {
            close: TQ,
            result: zQ
          } = (0, wQ.mb)(QQ, {
            label: WQ.phrase("Go to line"),
            input: {
              type: "text",
              name: "line",
              value: XQ
            },
            focus: !0,
            submitLabel: WQ.phrase("go")
          });
          return zQ.then((XQ => {
            let zQ = XQ && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(XQ.elements.line.value);
            if (!zQ) return void QQ.dispatch({
              effects: TQ
            });
            let sQ = WQ.doc.lineAt(WQ.selection.main.head),
              [, FQ, PQ, gQ, JQ] = zQ,
              rQ = gQ ? +gQ.slice(1) : 0,
              IQ = PQ ? +PQ : sQ.number;
            if (PQ && JQ) {
              let QQ = IQ / 100;
              FQ && (QQ = QQ * ("-" == FQ ? -1 : 1) + sQ.number / WQ.doc.lines), IQ = Math.round(WQ.doc.lines * QQ)
            } else PQ && FQ && (IQ = IQ * ("-" == FQ ? -1 : 1) + sQ.number);
            let jQ = WQ.doc.line(Math.max(1, Math.min(WQ.doc.lines, IQ))),
              BQ = qQ.k.cursor(jQ.from + Math.max(0, Math.min(rQ, jQ.length)));
            QQ.dispatch({
              effects: [TQ, wQ.k.scrollIntoView(BQ.from, {
                y: "center"
              })],
              selection: BQ
            })
          })), !0
        }
      }, {
        key: "Mod-d",
        run: QQ => {
          let {
            state: WQ,
            dispatch: XQ
          } = QQ, {
            Qy: TQ
          } = WQ.selection;
          if (TQ.some((QQ => QQ.from === QQ.to))) return (QQ => {
            let {
              state: WQ,
              dispatch: XQ
            } = QQ, {
              selection: wQ
            } = WQ, TQ = qQ.k.create(wQ.Qy.map((QQ => WQ.wordAt(QQ.head) || qQ.k.cursor(QQ.head))), wQ.mainIndex);
            return !TQ.eq(wQ) && (XQ(WQ.update({
              selection: TQ
            })), !0)
          })({
            state: WQ,
            dispatch: XQ
          });
          let zQ = WQ.sliceDoc(TQ[0].from, TQ[0].to);
          if (WQ.selection.Qy.some((QQ => WQ.sliceDoc(QQ.from, QQ.to) != zQ))) return !1;
          let FQ = function(QQ, WQ) {
            let {
              main: XQ,
              Qy: wQ
            } = QQ.selection, qQ = QQ.wordAt(XQ.head), TQ = qQ && qQ.from == XQ.from && qQ.to == XQ.to;
            for (let zQ = !1, FQ = new sQ(QQ.doc, WQ, wQ[wQ.length - 1].to);;) {
              if (FQ.next(), !FQ.done) {
                if (zQ && wQ.some((QQ => QQ.from == FQ.value.from))) continue;
                if (TQ) {
                  let WQ = QQ.wordAt(FQ.value.from);
                  if (!WQ || WQ.from != FQ.value.from || WQ.to != FQ.value.to) continue
                }
                return FQ.value
              }
              if (zQ) return null;
              FQ = new sQ(QQ.doc, WQ, 0, Math.max(0, wQ[wQ.length - 1].from - 1)), zQ = !0
            }
          }(WQ, zQ);
          return !!FQ && (XQ(WQ.update({
            selection: WQ.selection.addRange(qQ.k.range(FQ.from, FQ.to), !1),
            effects: wQ.k.scrollIntoView(FQ.to)
          })), !0)
        },
        preventDefault: !0
      }];
    class QW {
      constructor(QQ) {
        this.view = QQ;
        let WQ = this.query = QQ.state.field(CQ).query.spec;

        function XQ(QQ, WQ, XQ) {
          return (0, TQ.b)("button", {
            class: "cm-button",
            name: QQ,
            onclick: WQ,
            type: "button"
          }, XQ)
        }
        this.commit = this.commit.bind(this), this.searchField = (0, TQ.b)("input", {
          value: WQ.search,
          placeholder: WW(QQ, "Find"),
          "aria-label": WW(QQ, "Find"),
          class: "cm-textfield",
          name: "search",
          form: "",
          "main-field": "true",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.replaceField = (0, TQ.b)("input", {
          value: WQ.replace,
          placeholder: WW(QQ, "Replace"),
          "aria-label": WW(QQ, "Replace"),
          class: "cm-textfield",
          name: "replace",
          form: "",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.caseField = (0, TQ.b)("input", {
          type: "checkbox",
          name: "case",
          form: "",
          checked: WQ.caseSensitive,
          onchange: this.commit
        }), this.reField = (0, TQ.b)("input", {
          type: "checkbox",
          name: "re",
          form: "",
          checked: WQ.regexp,
          onchange: this.commit
        }), this.wordField = (0, TQ.b)("input", {
          type: "checkbox",
          name: "word",
          form: "",
          checked: WQ.wholeWord,
          onchange: this.commit
        }), this.dom = (0, TQ.b)("div", {
          onkeydown: QQ => this.keydown(QQ),
          class: "cm-search"
        }, [this.searchField, XQ("next", (() => tQ(QQ)), [WW(QQ, "next")]), XQ("prev", (() => oQ(QQ)), [WW(QQ, "previous")]), XQ("select", (() => eQ(QQ)), [WW(QQ, "all")]), (0, TQ.b)("label", null, [this.caseField, WW(QQ, "match case")]), (0, TQ.b)("label", null, [this.reField, WW(QQ, "regexp")]), (0, TQ.b)("label", null, [this.wordField, WW(QQ, "by word")]), ...QQ.state.readOnly ? [] : [(0, TQ.b)("br"), this.replaceField, XQ("replace", (() => nQ(QQ)), [WW(QQ, "replace")]), XQ("replaceAll", (() => xQ(QQ)), [WW(QQ, "replace all")])], (0, TQ.b)("button", {
          name: "close",
          onclick: () => mQ(QQ),
          "aria-label": WW(QQ, "close"),
          type: "button"
        }, ["\xd7"])])
      }
      commit() {
        let QQ = new dQ({
          search: this.searchField.value,
          caseSensitive: this.caseField.checked,
          regexp: this.reField.checked,
          wholeWord: this.wordField.checked,
          replace: this.replaceField.value
        });
        QQ.eq(this.query) || (this.query = QQ, this.view.dispatch({
          effects: RQ.of(QQ)
        }))
      }
      keydown(QQ) {
        (0, wQ.jb)(this.view, QQ, "search-panel") ? QQ.preventDefault(): 13 == QQ.keyCode && QQ.target == this.searchField ? (QQ.preventDefault(), (QQ.shiftKey ? oQ : tQ)(this.view)) : 13 == QQ.keyCode && QQ.target == this.replaceField && (QQ.preventDefault(), nQ(this.view))
      }
      update(QQ) {
        for (let WQ of QQ.transactions)
          for (let QQ of WQ.effects) QQ.is(RQ) && !QQ.value.eq(this.query) && this.setQuery(QQ.value)
      }
      setQuery(QQ) {
        this.query = QQ, this.searchField.value = QQ.search, this.replaceField.value = QQ.replace, this.caseField.checked = QQ.caseSensitive, this.reField.checked = QQ.regexp, this.wordField.checked = QQ.wholeWord
      }
      mount() {
        this.searchField.select()
      }
      get pos() {
        return 80
      }
      get top() {
        return this.view.state.facet(vQ).top
      }
    }

    function WW(QQ, WQ) {
      return QQ.state.phrase(WQ)
    }
    const XW = 30,
      wW = /[\s\.,:;?!]/;

    function qW(QQ, WQ) {
      let {
        from: XQ,
        to: qQ
      } = WQ, TQ = QQ.state.doc.lineAt(XQ), zQ = QQ.state.doc.lineAt(qQ).to, sQ = Math.max(TQ.from, XQ - XW), FQ = Math.min(zQ, qQ + XW), PQ = QQ.state.sliceDoc(sQ, FQ);
      if (sQ != TQ.from)
        for (let wQ = 0; wQ < XW; wQ++)
          if (!wW.test(PQ[wQ + 1]) && wW.test(PQ[wQ])) {
            PQ = PQ.slice(wQ);
            break
          } if (FQ != zQ)
        for (let wQ = PQ.length - 1; wQ > PQ.length - XW; wQ--)
          if (!wW.test(PQ[wQ - 1]) && wW.test(PQ[wQ])) {
            PQ = PQ.slice(0, wQ);
            break
          } return wQ.k.announce.of(`${QQ.state.phrase("current match")}. ${PQ} ${QQ.state.phrase("on line")} ${TQ.number}.`)
    }
    const TW = wQ.k.baseTheme({
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
      zW = [CQ, qQ.t.low(fQ), TW]
  },
  41555: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => AQ,
      i: () => PW,
      k: () => aq,
      n: () => zz,
      q: () => OW,
      u: () => iQ,
      x: () => iT,
      B: () => Kq,
      F: () => zT,
      H: () => KT,
      L: () => NT,
      P: () => Jz,
      U: () => DT,
      Q: () => cz,
      Y: () => jT,
      _: () => YT,
      $: () => Cq,
      bb: () => az,
      eb: () => xW,
      fb: () => bT,
      gb: () => aT,
      jb: () => kq,
      mb: () => Xz,
      ob: () => Wz,
      qb: () => ST
    });
    for (var wQ = XQ(41550), qQ = XQ(41558), TQ = {
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
      }, zQ = {
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
      }, sQ = "undefined" != typeof navigator && /Mac/.test(navigator.platform), FQ = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), PQ = 0; PQ < 10; PQ++) TQ[48 + PQ] = TQ[96 + PQ] = String(PQ);
    for (PQ = 1; PQ <= 24; PQ++) TQ[PQ + 111] = "F" + PQ;
    for (PQ = 65; PQ <= 90; PQ++) TQ[PQ] = String.fromCharCode(PQ + 32), zQ[PQ] = String.fromCharCode(PQ);
    for (var gQ in TQ) zQ.hasOwnProperty(gQ) || (zQ[gQ] = TQ[gQ]);
    var JQ = XQ(41560);
    let rQ = "undefined" != typeof navigator ? navigator : {
        userAgent: "",
        vendor: "",
        platform: ""
      },
      IQ = "undefined" != typeof document ? document : {
        documentElement: {
          style: {}
        }
      };
    const jQ = /Edge\/(\d+)/.exec(rQ.userAgent),
      BQ = /MSIE \d/.test(rQ.userAgent),
      yQ = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(rQ.userAgent),
      VQ = !!(BQ || yQ || jQ),
      DQ = !VQ && /gecko\/(\d+)/i.test(rQ.userAgent),
      pQ = !VQ && /Chrome\/(\d+)/.exec(rQ.userAgent),
      GQ = "webkitFontSmoothing" in IQ.documentElement.style,
      UQ = !VQ && /Apple Computer/.test(rQ.vendor),
      bQ = UQ && (/Mobile\/\w+/.test(rQ.userAgent) || rQ.maxTouchPoints > 2);
    var vQ = {
      mac: bQ || /Mac/.test(rQ.platform),
      windows: /Win/.test(rQ.platform),
      linux: /Linux|X11/.test(rQ.platform),
      ie: VQ,
      ie_version: BQ ? IQ.documentMode || 6 : yQ ? +yQ[1] : jQ ? +jQ[1] : 0,
      gecko: DQ,
      gecko_version: DQ ? +(/Firefox\/(\d+)/.exec(rQ.userAgent) || [0, 0])[1] : 0,
      chrome: !!pQ,
      chrome_version: pQ ? +pQ[1] : 0,
      ios: bQ,
      android: /Android\b/.test(rQ.userAgent),
      webkit: GQ,
      webkit_version: GQ ? +(/\bAppleWebKit\/(\d+)/.exec(rQ.userAgent) || [0, 0])[1] : 0,
      safari: UQ,
      safari_version: UQ ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(rQ.userAgent) || [0, 0])[1] : 0,
      tabSize: null != IQ.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size"
    };

    function dQ(QQ, WQ) {
      for (let XQ in QQ) "class" == XQ && WQ.class ? WQ.class += " " + QQ.class : "style" == XQ && WQ.style ? WQ.style += ";" + QQ.style : WQ[XQ] = QQ[XQ];
      return WQ
    }
    const HQ = Object.create(null);

    function aQ(QQ, WQ, XQ) {
      if (QQ == WQ) return !0;
      QQ || (QQ = HQ), WQ || (WQ = HQ);
      let wQ = Object.keys(QQ),
        qQ = Object.keys(WQ);
      if (wQ.length - (XQ && wQ.indexOf(XQ) > -1 ? 1 : 0) != qQ.length - (XQ && qQ.indexOf(XQ) > -1 ? 1 : 0)) return !1;
      for (let TQ of wQ)
        if (TQ != XQ && (-1 == qQ.indexOf(TQ) || QQ[TQ] !== WQ[TQ])) return !1;
      return !0
    }

    function lQ(QQ, WQ, XQ) {
      let wQ = !1;
      if (WQ)
        for (let qQ in WQ) XQ && qQ in XQ || (wQ = !0, "style" == qQ ? QQ.style.cssText = "" : QQ.removeAttribute(qQ));
      if (XQ)
        for (let qQ in XQ) WQ && WQ[qQ] == XQ[qQ] || (wQ = !0, "style" == qQ ? QQ.style.cssText = XQ[qQ] : QQ.setAttribute(qQ, XQ[qQ]));
      return wQ
    }

    function hQ(QQ) {
      let WQ = Object.create(null);
      for (let XQ = 0; XQ < QQ.attributes.length; XQ++) {
        let wQ = QQ.attributes[XQ];
        WQ[wQ.name] = wQ.value
      }
      return WQ
    }
    class iQ {
      eq(QQ) {
        return !1
      }
      updateDOM(QQ, WQ, XQ) {
        return !1
      }
      compare(QQ) {
        return this == QQ || this.constructor == QQ.constructor && this.eq(QQ)
      }
      get estimatedHeight() {
        return -1
      }
      get lineBreaks() {
        return 0
      }
      ignoreEvent(QQ) {
        return !0
      }
      coordsAt(QQ, WQ, XQ) {
        return null
      }
      get isHidden() {
        return !1
      }
      get editable() {
        return !1
      }
      destroy(QQ) {}
    }
    var cQ = function(QQ) {
      return QQ[QQ.Text = 0] = "Text", QQ[QQ.WidgetBefore = 1] = "WidgetBefore", QQ[QQ.WidgetAfter = 2] = "WidgetAfter", QQ[QQ.WidgetRange = 3] = "WidgetRange", QQ
    }(cQ || (cQ = {}));
    class AQ extends wQ.C {
      constructor(QQ, WQ, XQ, wQ) {
        super(), this.startSide = QQ, this.endSide = WQ, this.widget = XQ, this.spec = wQ
      }
      get heightRelevant() {
        return !1
      }
      static mark(QQ) {
        return new RQ(QQ)
      }
      static widget(QQ) {
        let WQ = Math.max(-1e4, Math.min(1e4, QQ.side || 0)),
          XQ = !!QQ.block;
        return WQ += XQ && !QQ.inlineOrder ? WQ > 0 ? 3e8 : -4e8 : WQ > 0 ? 1e8 : -1e8, new CQ(QQ, WQ, WQ, XQ, QQ.widget || null, !1)
      }
      static replace(QQ) {
        let WQ, XQ, wQ = !!QQ.block;
        if (QQ.isBlockGap) WQ = -5e8, XQ = 4e8;
        else {
          let {
            start: qQ,
            end: TQ
          } = uQ(QQ, wQ);
          WQ = (qQ ? wQ ? -3e8 : -1 : 5e8) - 1, XQ = 1 + (TQ ? wQ ? 2e8 : 1 : -6e8)
        }
        return new CQ(QQ, WQ, XQ, wQ, QQ.widget || null, !0)
      }
      static line(QQ) {
        return new EQ(QQ)
      }
      static set(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return wQ.A.of(QQ, WQ)
      }
      hasHeight() {
        return !!this.widget && this.widget.estimatedHeight > -1
      }
    }
    AQ.none = wQ.A.empty;
    class RQ extends AQ {
      constructor(QQ) {
        let {
          start: WQ,
          end: XQ
        } = uQ(QQ);
        super(WQ ? -1 : 5e8, XQ ? 1 : -6e8, null, QQ), this.tagName = QQ.tagName || "span", this.attrs = QQ.class && QQ.attributes ? dQ(QQ.attributes, {
          class: QQ.class
        }) : QQ.class ? {
          class: QQ.class
        } : QQ.attributes || HQ
      }
      eq(QQ) {
        return this == QQ || QQ instanceof RQ && this.tagName == QQ.tagName && aQ(this.attrs, QQ.attrs)
      }
      range(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QQ;
        if (QQ >= WQ) throw new RangeError("Mark decorations may not be empty");
        return super.range(QQ, WQ)
      }
    }
    RQ.prototype.point = !1;
    class EQ extends AQ {
      constructor(QQ) {
        super(-2e8, -2e8, null, QQ)
      }
      eq(QQ) {
        return QQ instanceof EQ && this.spec.class == QQ.spec.class && aQ(this.spec.attributes, QQ.spec.attributes)
      }
      range(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QQ;
        if (WQ != QQ) throw new RangeError("Line decoration ranges must be zero-length");
        return super.range(QQ, WQ)
      }
    }
    EQ.prototype.mapMode = wQ.s.TrackBefore, EQ.prototype.point = !0;
    class CQ extends AQ {
      constructor(QQ, WQ, XQ, qQ, TQ, zQ) {
        super(WQ, XQ, TQ, QQ), this.block = qQ, this.isReplace = zQ, this.mapMode = qQ ? WQ <= 0 ? wQ.s.TrackBefore : wQ.s.TrackAfter : wQ.s.TrackDel
      }
      get type() {
        return this.startSide != this.endSide ? cQ.WidgetRange : this.startSide <= 0 ? cQ.WidgetBefore : cQ.WidgetAfter
      }
      get heightRelevant() {
        return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0)
      }
      eq(QQ) {
        return QQ instanceof CQ && (WQ = this.widget, XQ = QQ.widget, WQ == XQ || !!(WQ && XQ && WQ.compare(XQ))) && this.block == QQ.block && this.startSide == QQ.startSide && this.endSide == QQ.endSide;
        var WQ, XQ
      }
      range(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QQ;
        if (this.isReplace && (QQ > WQ || QQ == WQ && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && WQ != QQ) throw new RangeError("Widget decorations can only have zero-length ranges");
        return super.range(QQ, WQ)
      }
    }

    function uQ(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          inclusiveStart: XQ,
          inclusiveEnd: wQ
        } = QQ;
      return null == XQ && (XQ = QQ.inclusive), null == wQ && (wQ = QQ.inclusive), {
        start: null !== XQ && void 0 !== XQ ? XQ : WQ,
        end: null !== wQ && void 0 !== wQ ? wQ : WQ
      }
    }

    function LQ(QQ, WQ, XQ) {
      let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        qQ = XQ.length - 1;
      qQ >= 0 && XQ[qQ] + wQ >= QQ ? XQ[qQ] = Math.max(XQ[qQ], WQ) : XQ.push(QQ, WQ)
    }
    CQ.prototype.point = !0;
    class kQ extends wQ.C {
      constructor(QQ, WQ) {
        super(), this.tagName = QQ, this.attributes = WQ
      }
      eq(QQ) {
        return QQ == this || QQ instanceof kQ && this.tagName == QQ.tagName && aQ(this.attributes, QQ.attributes)
      }
      static create(QQ) {
        return new kQ(QQ.tagName, QQ.attributes || HQ)
      }
      static set(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return wQ.A.of(QQ, WQ)
      }
    }

    function fQ(QQ) {
      let WQ;
      return WQ = 11 == QQ.nodeType ? QQ.getSelection ? QQ : QQ.ownerDocument : QQ, WQ.getSelection()
    }

    function SQ(QQ, WQ) {
      return !!WQ && (QQ == WQ || QQ.contains(1 != WQ.nodeType ? WQ.parentNode : WQ))
    }

    function tQ(QQ, WQ) {
      if (!WQ.anchorNode) return !1;
      try {
        return SQ(QQ, WQ.anchorNode)
      } catch (XQ) {
        return !1
      }
    }

    function oQ(QQ) {
      return 3 == QQ.nodeType ? wW(QQ, 0, QQ.nodeValue.length).getClientRects() : 1 == QQ.nodeType ? QQ.getClientRects() : []
    }

    function eQ(QQ, WQ, XQ, wQ) {
      return !!XQ && (YQ(QQ, WQ, XQ, wQ, -1) || YQ(QQ, WQ, XQ, wQ, 1))
    }

    function nQ(QQ) {
      for (var WQ = 0;; WQ++)
        if (!(QQ = QQ.previousSibling)) return WQ
    }

    function xQ(QQ) {
      return 1 == QQ.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(QQ.nodeName)
    }

    function YQ(QQ, WQ, XQ, wQ, qQ) {
      for (;;) {
        if (QQ == XQ && WQ == wQ) return !0;
        if (WQ == (qQ < 0 ? 0 : NQ(QQ))) {
          if ("DIV" == QQ.nodeName) return !1;
          let XQ = QQ.parentNode;
          if (!XQ || 1 != XQ.nodeType) return !1;
          WQ = nQ(QQ) + (qQ < 0 ? 0 : 1), QQ = XQ
        } else {
          if (1 != QQ.nodeType) return !1;
          if (1 == (QQ = QQ.childNodes[WQ + (qQ < 0 ? -1 : 0)]).nodeType && "false" == QQ.contentEditable) return !1;
          WQ = qQ < 0 ? NQ(QQ) : 0
        }
      }
    }

    function NQ(QQ) {
      return 3 == QQ.nodeType ? QQ.nodeValue.length : QQ.childNodes.length
    }

    function ZQ(QQ, WQ) {
      let XQ = WQ ? QQ.left : QQ.right;
      return {
        left: XQ,
        right: XQ,
        top: QQ.top,
        bottom: QQ.bottom
      }
    }

    function OQ(QQ) {
      let WQ = QQ.visualViewport;
      return WQ ? {
        left: 0,
        right: WQ.width,
        top: 0,
        bottom: WQ.height
      } : {
        left: 0,
        right: QQ.innerWidth,
        top: 0,
        bottom: QQ.innerHeight
      }
    }

    function KQ(QQ, WQ) {
      let XQ = WQ.width / QQ.offsetWidth,
        wQ = WQ.height / QQ.offsetHeight;
      return (XQ > .995 && XQ < 1.005 || !isFinite(XQ) || Math.abs(WQ.width - QQ.offsetWidth) < 1) && (XQ = 1), (wQ > .995 && wQ < 1.005 || !isFinite(wQ) || Math.abs(WQ.height - QQ.offsetHeight) < 1) && (wQ = 1), {
        scaleX: XQ,
        scaleY: wQ
      }
    }

    function mQ(QQ) {
      let WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        XQ = QQ.ownerDocument,
        wQ = null,
        qQ = null;
      for (let TQ = QQ.parentNode; TQ && (TQ != XQ.body && (WQ && !wQ || !qQ));)
        if (1 == TQ.nodeType) !qQ && TQ.scrollHeight > TQ.clientHeight && (qQ = TQ), WQ && !wQ && TQ.scrollWidth > TQ.clientWidth && (wQ = TQ), TQ = TQ.assignedSlot || TQ.parentNode;
        else {
          if (11 != TQ.nodeType) break;
          TQ = TQ.host
        } return {
        x: wQ,
        y: qQ
      }
    }
    kQ.prototype.startSide = kQ.prototype.endSide = -1;
    class MQ {
      constructor() {
        this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
      }
      eq(QQ) {
        return this.anchorNode == QQ.anchorNode && this.anchorOffset == QQ.anchorOffset && this.focusNode == QQ.focusNode && this.focusOffset == QQ.focusOffset
      }
      setRange(QQ) {
        let {
          anchorNode: WQ,
          focusNode: XQ
        } = QQ;
        this.set(WQ, Math.min(QQ.anchorOffset, WQ ? NQ(WQ) : 0), XQ, Math.min(QQ.focusOffset, XQ ? NQ(XQ) : 0))
      }
      set(QQ, WQ, XQ, wQ) {
        this.anchorNode = QQ, this.anchorOffset = WQ, this.focusNode = XQ, this.focusOffset = wQ
      }
    }
    let QW, WW = null;

    function XW(QQ) {
      if (QQ.setActive) return QQ.setActive();
      if (WW) return QQ.focus(WW);
      let WQ = [];
      for (let XQ = QQ; XQ && (WQ.push(XQ, XQ.scrollTop, XQ.scrollLeft), XQ != XQ.ownerDocument); XQ = XQ.parentNode);
      if (QQ.focus(null == WW ? {
          get preventScroll() {
            return WW = {
              preventScroll: !0
            }, !0
          }
        } : void 0), !WW) {
        WW = !1;
        for (let QQ = 0; QQ < WQ.length;) {
          let XQ = WQ[QQ++],
            wQ = WQ[QQ++],
            qQ = WQ[QQ++];
          XQ.scrollTop != wQ && (XQ.scrollTop = wQ), XQ.scrollLeft != qQ && (XQ.scrollLeft = qQ)
        }
      }
    }

    function wW(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : WQ,
        wQ = QW || (QW = document.createRange());
      return wQ.setEnd(QQ, XQ), wQ.setStart(QQ, WQ), wQ
    }

    function qW(QQ, WQ, XQ, wQ) {
      let qQ = {
        key: WQ,
        code: WQ,
        keyCode: XQ,
        which: XQ,
        cancelable: !0
      };
      wQ && ({
        altKey: qQ.altKey,
        ctrlKey: qQ.ctrlKey,
        shiftKey: qQ.shiftKey,
        metaKey: qQ.metaKey
      } = wQ);
      let TQ = new KeyboardEvent("keydown", qQ);
      TQ.synthetic = !0, QQ.dispatchEvent(TQ);
      let zQ = new KeyboardEvent("keyup", qQ);
      return zQ.synthetic = !0, QQ.dispatchEvent(zQ), TQ.defaultPrevented || zQ.defaultPrevented
    }

    function TW(QQ) {
      return QQ instanceof Window ? QQ.pageYOffset > Math.max(0, QQ.document.documentElement.scrollHeight - QQ.innerHeight - 4) : QQ.scrollTop > Math.max(1, QQ.scrollHeight - QQ.clientHeight - 4)
    }

    function zW(QQ, WQ) {
      for (let XQ = QQ, wQ = WQ;;) {
        if (3 == XQ.nodeType && wQ > 0) return {
          node: XQ,
          offset: wQ
        };
        if (1 == XQ.nodeType && wQ > 0) {
          if ("false" == XQ.contentEditable) return null;
          XQ = XQ.childNodes[wQ - 1], wQ = NQ(XQ)
        } else {
          if (!XQ.parentNode || xQ(XQ)) return null;
          wQ = nQ(XQ), XQ = XQ.parentNode
        }
      }
    }

    function sW(QQ, WQ) {
      for (let XQ = QQ, wQ = WQ;;) {
        if (3 == XQ.nodeType && wQ < XQ.nodeValue.length) return {
          node: XQ,
          offset: wQ
        };
        if (1 == XQ.nodeType && wQ < XQ.childNodes.length) {
          if ("false" == XQ.contentEditable) return null;
          XQ = XQ.childNodes[wQ], wQ = 0
        } else {
          if (!XQ.parentNode || xQ(XQ)) return null;
          wQ = nQ(XQ) + 1, XQ = XQ.parentNode
        }
      }
    }
    vQ.safari && vQ.safari_version >= 26 && (WW = !1);
    class FW {
      constructor(QQ, WQ) {
        let XQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.node = QQ, this.offset = WQ, this.precise = XQ
      }
      static before(QQ, WQ) {
        return new FW(QQ.parentNode, nQ(QQ), WQ)
      }
      static after(QQ, WQ) {
        return new FW(QQ.parentNode, nQ(QQ) + 1, WQ)
      }
    }
    var PW = function(QQ) {
      return QQ[QQ.LTR = 0] = "LTR", QQ[QQ.RTL = 1] = "RTL", QQ
    }(PW || (PW = {}));
    const gW = PW.LTR,
      JW = PW.RTL;

    function rW(QQ) {
      let WQ = [];
      for (let XQ = 0; XQ < QQ.length; XQ++) WQ.push(1 << +QQ[XQ]);
      return WQ
    }
    const IW = rW("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),
      jW = rW("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),
      BW = Object.create(null),
      yW = [];
    for (let Az of ["()", "[]", "{}"]) {
      let QQ = Az.charCodeAt(0),
        WQ = Az.charCodeAt(1);
      BW[QQ] = WQ, BW[WQ] = -QQ
    }

    function VW(QQ) {
      return QQ <= 247 ? IW[QQ] : 1424 <= QQ && QQ <= 1524 ? 2 : 1536 <= QQ && QQ <= 1785 ? jW[QQ - 1536] : 1774 <= QQ && QQ <= 2220 ? 4 : 8192 <= QQ && QQ <= 8204 ? 256 : 64336 <= QQ && QQ <= 65023 ? 4 : 1
    }
    const DW = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
    class pW {
      get dir() {
        return this.level % 2 ? JW : gW
      }
      constructor(QQ, WQ, XQ) {
        this.from = QQ, this.to = WQ, this.level = XQ
      }
      side(QQ, WQ) {
        return this.dir == WQ == QQ ? this.to : this.from
      }
      forward(QQ, WQ) {
        return QQ == (this.dir == WQ)
      }
      static find(QQ, WQ, XQ, wQ) {
        let qQ = -1;
        for (let TQ = 0; TQ < QQ.length; TQ++) {
          let zQ = QQ[TQ];
          if (zQ.from <= WQ && zQ.to >= WQ) {
            if (zQ.level == XQ) return TQ;
            (qQ < 0 || (0 != wQ ? wQ < 0 ? zQ.from < WQ : zQ.to > WQ : QQ[qQ].level > zQ.level)) && (qQ = TQ)
          }
        }
        if (qQ < 0) throw new RangeError("Index out of range");
        return qQ
      }
    }

    function GW(QQ, WQ) {
      if (QQ.length != WQ.length) return !1;
      for (let XQ = 0; XQ < QQ.length; XQ++) {
        let wQ = QQ[XQ],
          qQ = WQ[XQ];
        if (wQ.from != qQ.from || wQ.to != qQ.to || wQ.direction != qQ.direction || !GW(wQ.inner, qQ.inner)) return !1
      }
      return !0
    }
    const UW = [];

    function bW(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
      let sQ = wQ % 2 ? 2 : 1;
      if (wQ % 2 == qQ % 2)
        for (let FQ = WQ, PQ = 0; FQ < XQ;) {
          let WQ = !0,
            gQ = !1;
          if (PQ == TQ.length || FQ < TQ[PQ].from) {
            let QQ = UW[FQ];
            QQ != sQ && (WQ = !1, gQ = 16 == QQ)
          }
          let JQ = WQ || 1 != sQ ? null : [],
            rQ = WQ ? wQ : wQ + 1,
            IQ = FQ;
          QQ: for (;;)
            if (PQ < TQ.length && IQ == TQ[PQ].from) {
              if (gQ) break QQ;
              let jQ = TQ[PQ];
              if (!WQ)
                for (let QQ = jQ.to, WQ = PQ + 1;;) {
                  if (QQ == XQ) break QQ;
                  if (!(WQ < TQ.length && TQ[WQ].from == QQ)) {
                    if (UW[QQ] == sQ) break QQ;
                    break
                  }
                  QQ = TQ[WQ++].to
                }
              if (PQ++, JQ) JQ.push(jQ);
              else {
                jQ.from > FQ && zQ.push(new pW(FQ, jQ.from, rQ)), vW(QQ, jQ.direction == gW != !(rQ % 2) ? wQ + 1 : wQ, qQ, jQ.inner, jQ.from, jQ.to, zQ), FQ = jQ.to
              }
              IQ = jQ.to
            } else {
              if (IQ == XQ || (WQ ? UW[IQ] != sQ : UW[IQ] == sQ)) break;
              IQ++
            } JQ ? bW(QQ, FQ, IQ, wQ + 1, qQ, JQ, zQ) : FQ < IQ && zQ.push(new pW(FQ, IQ, rQ)), FQ = IQ
        } else
          for (let FQ = XQ, PQ = TQ.length; FQ > WQ;) {
            let XQ = !0,
              gQ = !1;
            if (!PQ || FQ > TQ[PQ - 1].to) {
              let QQ = UW[FQ - 1];
              QQ != sQ && (XQ = !1, gQ = 16 == QQ)
            }
            let JQ = XQ || 1 != sQ ? null : [],
              rQ = XQ ? wQ : wQ + 1,
              IQ = FQ;
            QQ: for (;;)
              if (PQ && IQ == TQ[PQ - 1].to) {
                if (gQ) break QQ;
                let jQ = TQ[--PQ];
                if (!XQ)
                  for (let QQ = jQ.from, XQ = PQ;;) {
                    if (QQ == WQ) break QQ;
                    if (!XQ || TQ[XQ - 1].to != QQ) {
                      if (UW[QQ - 1] == sQ) break QQ;
                      break
                    }
                    QQ = TQ[--XQ].from
                  }
                if (JQ) JQ.push(jQ);
                else {
                  jQ.to < FQ && zQ.push(new pW(jQ.to, FQ, rQ)), vW(QQ, jQ.direction == gW != !(rQ % 2) ? wQ + 1 : wQ, qQ, jQ.inner, jQ.from, jQ.to, zQ), FQ = jQ.from
                }
                IQ = jQ.from
              } else {
                if (IQ == WQ || (XQ ? UW[IQ - 1] != sQ : UW[IQ - 1] == sQ)) break;
                IQ--
              } JQ ? bW(QQ, IQ, FQ, wQ + 1, qQ, JQ, zQ) : IQ < FQ && zQ.push(new pW(IQ, FQ, rQ)), FQ = IQ
          }
    }

    function vW(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
      let sQ = WQ % 2 ? 2 : 1;
      ! function(QQ, WQ, XQ, wQ, qQ) {
        for (let TQ = 0; TQ <= wQ.length; TQ++) {
          let zQ = TQ ? wQ[TQ - 1].to : WQ,
            sQ = TQ < wQ.length ? wQ[TQ].from : XQ,
            FQ = TQ ? 256 : qQ;
          for (let WQ = zQ, XQ = FQ, wQ = FQ; WQ < sQ; WQ++) {
            let qQ = VW(QQ.charCodeAt(WQ));
            512 == qQ ? qQ = XQ : 8 == qQ && 4 == wQ && (qQ = 16), UW[WQ] = 4 == qQ ? 2 : qQ, 7 & qQ && (wQ = qQ), XQ = qQ
          }
          for (let QQ = zQ, WQ = FQ, wQ = FQ; QQ < sQ; QQ++) {
            let qQ = UW[QQ];
            if (128 == qQ) QQ < sQ - 1 && WQ == UW[QQ + 1] && 24 & WQ ? qQ = UW[QQ] = WQ : UW[QQ] = 256;
            else if (64 == qQ) {
              let qQ = QQ + 1;
              for (; qQ < sQ && 64 == UW[qQ];) qQ++;
              let TQ = QQ && 8 == WQ || qQ < XQ && 8 == UW[qQ] ? 1 == wQ ? 1 : 8 : 256;
              for (let WQ = QQ; WQ < qQ; WQ++) UW[WQ] = TQ;
              QQ = qQ - 1
            } else 8 == qQ && 1 == wQ && (UW[QQ] = 1);
            WQ = qQ, 7 & qQ && (wQ = qQ)
          }
        }
      }(QQ, qQ, TQ, wQ, sQ),
      function(QQ, WQ, XQ, wQ, qQ) {
        let TQ = 1 == qQ ? 2 : 1;
        for (let zQ = 0, sQ = 0, FQ = 0; zQ <= wQ.length; zQ++) {
          let PQ = zQ ? wQ[zQ - 1].to : WQ,
            gQ = zQ < wQ.length ? wQ[zQ].from : XQ;
          for (let WQ, XQ, wQ, zQ = PQ; zQ < gQ; zQ++)
            if (XQ = BW[WQ = QQ.charCodeAt(zQ)])
              if (XQ < 0) {
                for (let QQ = sQ - 3; QQ >= 0; QQ -= 3)
                  if (yW[QQ + 1] == -XQ) {
                    let WQ = yW[QQ + 2],
                      XQ = 2 & WQ ? qQ : 4 & WQ ? 1 & WQ ? TQ : qQ : 0;
                    XQ && (UW[zQ] = UW[yW[QQ]] = XQ), sQ = QQ;
                    break
                  }
              } else {
                if (189 == yW.length) break;
                yW[sQ++] = zQ, yW[sQ++] = WQ, yW[sQ++] = FQ
              }
          else if (2 == (wQ = UW[zQ]) || 1 == wQ) {
            let QQ = wQ == qQ;
            FQ = QQ ? 0 : 1;
            for (let WQ = sQ - 3; WQ >= 0; WQ -= 3) {
              let XQ = yW[WQ + 2];
              if (2 & XQ) break;
              if (QQ) yW[WQ + 2] |= 2;
              else {
                if (4 & XQ) break;
                yW[WQ + 2] |= 4
              }
            }
          }
        }
      }(QQ, qQ, TQ, wQ, sQ),
      function(QQ, WQ, XQ, wQ) {
        for (let qQ = 0, TQ = wQ; qQ <= XQ.length; qQ++) {
          let zQ = qQ ? XQ[qQ - 1].to : QQ,
            sQ = qQ < XQ.length ? XQ[qQ].from : WQ;
          for (let FQ = zQ; FQ < sQ;) {
            let zQ = UW[FQ];
            if (256 == zQ) {
              let zQ = FQ + 1;
              for (;;)
                if (zQ == sQ) {
                  if (qQ == XQ.length) break;
                  zQ = XQ[qQ++].to, sQ = qQ < XQ.length ? XQ[qQ].from : WQ
                } else {
                  if (256 != UW[zQ]) break;
                  zQ++
                } let PQ = 1 == TQ,
                gQ = PQ == (1 == (zQ < WQ ? UW[zQ] : wQ)) ? PQ ? 1 : 2 : wQ;
              for (let WQ = zQ, wQ = qQ, TQ = wQ ? XQ[wQ - 1].to : QQ; WQ > FQ;) WQ == TQ && (WQ = XQ[--wQ].from, TQ = wQ ? XQ[wQ - 1].to : QQ), UW[--WQ] = gQ;
              FQ = zQ
            } else TQ = zQ, FQ++
          }
        }
      }(qQ, TQ, wQ, sQ), bW(QQ, qQ, TQ, WQ, XQ, wQ, zQ)
    }

    function dW(QQ, WQ, XQ) {
      if (!QQ) return [new pW(0, 0, WQ == JW ? 1 : 0)];
      if (WQ == gW && !XQ.length && !DW.test(QQ)) return HW(QQ.length);
      if (XQ.length)
        for (; QQ.length > UW.length;) UW[UW.length] = 256;
      let wQ = [],
        qQ = WQ == gW ? 0 : 1;
      return vW(QQ, qQ, qQ, XQ, 0, QQ.length, wQ), wQ
    }

    function HW(QQ) {
      return [new pW(0, QQ, 0)]
    }
    let aW = "";

    function lW(QQ, WQ, XQ, qQ, TQ) {
      var zQ;
      let sQ = qQ.head - QQ.from,
        FQ = pW.find(WQ, sQ, null !== (zQ = qQ.bidiLevel) && void 0 !== zQ ? zQ : -1, qQ.assoc),
        PQ = WQ[FQ],
        gQ = PQ.side(TQ, XQ);
      if (sQ == gQ) {
        let QQ = FQ += TQ ? 1 : -1;
        if (QQ < 0 || QQ >= WQ.length) return null;
        PQ = WQ[FQ = QQ], sQ = PQ.side(!TQ, XQ), gQ = PQ.side(TQ, XQ)
      }
      let JQ = (0, wQ.W)(QQ.text, sQ, PQ.forward(TQ, XQ));
      (JQ < PQ.from || JQ > PQ.to) && (JQ = gQ), aW = QQ.text.slice(Math.min(sQ, JQ), Math.max(sQ, JQ));
      let rQ = FQ == (TQ ? WQ.length - 1 : 0) ? null : WQ[FQ + (TQ ? 1 : -1)];
      return rQ && JQ == gQ && rQ.level + (TQ ? 0 : 1) < PQ.level ? wQ.k.cursor(rQ.side(!TQ, XQ) + QQ.from, rQ.forward(TQ, XQ) ? 1 : -1, rQ.level) : wQ.k.cursor(JQ + QQ.from, PQ.forward(TQ, XQ) ? -1 : 1, PQ.level)
    }

    function hW(QQ, WQ, XQ) {
      for (let wQ = WQ; wQ < XQ; wQ++) {
        let WQ = VW(QQ.charCodeAt(wQ));
        if (1 == WQ) return gW;
        if (2 == WQ || 4 == WQ) return JW
      }
      return gW
    }
    const iW = wQ.o.define(),
      cW = wQ.o.define(),
      AW = wQ.o.define(),
      RW = wQ.o.define(),
      EW = wQ.o.define(),
      CW = wQ.o.define(),
      uW = wQ.o.define(),
      LW = wQ.o.define(),
      kW = wQ.o.define(),
      fW = wQ.o.define({
        combine: QQ => QQ.some((QQ => QQ))
      }),
      SW = wQ.o.define({
        combine: QQ => QQ.some((QQ => QQ))
      }),
      tW = wQ.o.define();
    class oW {
      constructor(QQ, WQ, XQ, wQ, qQ) {
        let TQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.range = QQ, this.y = WQ, this.x = XQ, this.yMargin = wQ, this.xMargin = qQ, this.isSnapshot = TQ
      }
      map(QQ) {
        return QQ.empty ? this : new oW(this.range.map(QQ), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
      clip(QQ) {
        return this.range.to <= QQ.doc.length ? this : new oW(wQ.k.cursor(QQ.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
    }
    const eW = wQ.G.define({
        map: (QQ, WQ) => QQ.map(WQ)
      }),
      nW = wQ.G.define();

    function xW(QQ, WQ, XQ) {
      let wQ = QQ.facet(RW);
      wQ.length ? wQ[0](WQ) : window.onerror && window.onerror(String(WQ), XQ, void 0, void 0, WQ) || (XQ ? console.error(XQ + ":", WQ) : console.error(WQ))
    }
    const YW = wQ.o.define({
      combine: QQ => !QQ.length || QQ[0]
    });
    let NW = 0;
    const ZW = wQ.o.define({
      combine: QQ => QQ.filter(((WQ, XQ) => {
        for (let wQ = 0; wQ < XQ; wQ++)
          if (QQ[wQ].plugin == WQ.plugin) return !1;
        return !0
      }))
    });
    class OW {
      constructor(QQ, WQ, XQ, wQ, qQ) {
        this.id = QQ, this.create = WQ, this.domEventHandlers = XQ, this.domEventObservers = wQ, this.baseExtensions = qQ(this), this.extension = this.baseExtensions.concat(ZW.of({
          plugin: this,
          arg: void 0
        }))
      }
      of(QQ) {
        return this.baseExtensions.concat(ZW.of({
          plugin: this,
          arg: QQ
        }))
      }
      static define(QQ, WQ) {
        const {
          eventHandlers: XQ,
          eventObservers: wQ,
          provide: qQ,
          Tw: TQ
        } = WQ || {};
        return new OW(NW++, QQ, XQ, wQ, (QQ => {
          let WQ = [];
          return TQ && WQ.push(QX.of((WQ => {
            let XQ = WQ.plugin(QQ);
            return XQ ? TQ(XQ) : AQ.none
          }))), qQ && WQ.push(qQ(QQ)), WQ
        }))
      }
      static fromClass(QQ, WQ) {
        return OW.define(((WQ, XQ) => new QQ(WQ, XQ)), WQ)
      }
    }
    class KW {
      constructor(QQ) {
        this.spec = QQ, this.mustUpdate = null, this.value = null
      }
      get plugin() {
        return this.spec && this.spec.plugin
      }
      update(QQ) {
        if (this.value) {
          if (this.mustUpdate) {
            let QQ = this.mustUpdate;
            if (this.mustUpdate = null, this.value.update) try {
              this.value.update(QQ)
            } catch (WQ) {
              if (xW(QQ.state, WQ, "CodeMirror plugin crashed"), this.value.destroy) try {
                this.value.destroy()
              } catch (XQ) {}
              this.deactivate()
            }
          }
        } else if (this.spec) try {
          this.value = this.spec.plugin.create(QQ, this.spec.arg)
        } catch (WQ) {
          xW(QQ.state, WQ, "CodeMirror plugin crashed"), this.deactivate()
        }
        return this
      }
      destroy(QQ) {
        var WQ;
        if (null === (WQ = this.value) || void 0 === WQ ? void 0 : WQ.destroy) try {
          this.value.destroy()
        } catch (XQ) {
          xW(QQ.state, XQ, "CodeMirror plugin crashed")
        }
      }
      deactivate() {
        this.spec = this.value = null
      }
    }
    const mW = wQ.o.define(),
      MW = wQ.o.define(),
      QX = wQ.o.define(),
      WX = wQ.o.define(),
      XX = wQ.o.define(),
      wX = wQ.o.define(),
      qX = wQ.o.define();

    function TX(QQ, WQ) {
      let XQ = QQ.state.facet(qX);
      if (!XQ.length) return XQ;
      let qQ = XQ.map((WQ => WQ instanceof Function ? WQ(QQ) : WQ)),
        TQ = [];
      return wQ.A.spans(qQ, WQ.from, WQ.to, {
        point() {},
        span(QQ, XQ, wQ, qQ) {
          let zQ = QQ - WQ.from,
            sQ = XQ - WQ.from,
            FQ = TQ;
          for (let TQ = wQ.length - 1; TQ >= 0; TQ--, qQ--) {
            let QQ, XQ = wQ[TQ].spec.bidiIsolate;
            if (null == XQ && (XQ = hW(WQ.text, zQ, sQ)), qQ > 0 && FQ.length && (QQ = FQ[FQ.length - 1]).to == zQ && QQ.direction == XQ) QQ.to = sQ, FQ = QQ.inner;
            else {
              let QQ = {
                from: zQ,
                to: sQ,
                direction: XQ,
                inner: []
              };
              FQ.push(QQ), FQ = QQ.inner
            }
          }
        }
      }), TQ
    }
    const zX = wQ.o.define();

    function sX(QQ) {
      let WQ = 0,
        XQ = 0,
        wQ = 0,
        qQ = 0;
      for (let TQ of QQ.state.facet(zX)) {
        let zQ = TQ(QQ);
        zQ && (null != zQ.left && (WQ = Math.max(WQ, zQ.left)), null != zQ.right && (XQ = Math.max(XQ, zQ.right)), null != zQ.top && (wQ = Math.max(wQ, zQ.top)), null != zQ.bottom && (qQ = Math.max(qQ, zQ.bottom)))
      }
      return {
        left: WQ,
        right: XQ,
        top: wQ,
        bottom: qQ
      }
    }
    const FX = wQ.o.define();
    class PX {
      constructor(QQ, WQ, XQ, wQ) {
        this.fromA = QQ, this.toA = WQ, this.fromB = XQ, this.toB = wQ
      }
      join(QQ) {
        return new PX(Math.min(this.fromA, QQ.fromA), Math.max(this.toA, QQ.toA), Math.min(this.fromB, QQ.fromB), Math.max(this.toB, QQ.toB))
      }
      addToSet(QQ) {
        let WQ = QQ.length,
          XQ = this;
        for (; WQ > 0; WQ--) {
          let wQ = QQ[WQ - 1];
          if (!(wQ.fromA > XQ.toA)) {
            if (wQ.toA < XQ.fromA) break;
            XQ = XQ.join(wQ), QQ.splice(WQ - 1, 1)
          }
        }
        return QQ.splice(WQ, 0, XQ), QQ
      }
      static extendWithRanges(QQ, WQ) {
        if (0 == WQ.length) return QQ;
        let XQ = [];
        for (let wQ = 0, qQ = 0, TQ = 0;;) {
          let zQ = wQ < QQ.length ? QQ[wQ].fromB : 1e9,
            sQ = qQ < WQ.length ? WQ[qQ] : 1e9,
            FQ = Math.min(zQ, sQ);
          if (1e9 == FQ) break;
          let PQ = FQ + TQ,
            gQ = FQ,
            JQ = PQ;
          for (;;)
            if (qQ < WQ.length && WQ[qQ] <= gQ) {
              let XQ = WQ[qQ + 1];
              qQ += 2, gQ = Math.max(gQ, XQ);
              for (let WQ = wQ; WQ < QQ.length && QQ[WQ].fromB <= gQ; WQ++) TQ = QQ[WQ].toA - QQ[WQ].toB;
              JQ = Math.max(JQ, XQ + TQ)
            } else {
              if (!(wQ < QQ.length && QQ[wQ].fromB <= gQ)) break;
              {
                let WQ = QQ[wQ++];
                gQ = Math.max(gQ, WQ.toB), JQ = Math.max(JQ, WQ.toA), TQ = WQ.toA - WQ.toB
              }
            } XQ.push(new PX(PQ, JQ, FQ, gQ))
        }
        return XQ
      }
    }
    class gX {
      constructor(QQ, WQ, XQ) {
        this.view = QQ, this.state = WQ, this.transactions = XQ, this.flags = 0, this.startState = QQ.state, this.changes = wQ.ChangeSet.empty(this.startState.doc.length);
        for (let wQ of XQ) this.changes = this.changes.compose(wQ.changes);
        let qQ = [];
        this.changes.iterChangedRanges(((QQ, WQ, XQ, wQ) => qQ.push(new PX(QQ, WQ, XQ, wQ)))), this.changedRanges = qQ
      }
      static create(QQ, WQ, XQ) {
        return new gX(QQ, WQ, XQ)
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
        return this.transactions.some((QQ => QQ.selection))
      }
      get empty() {
        return 0 == this.flags && 0 == this.transactions.length
      }
    }
    const JX = [];
    class rX {
      constructor(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.dom = QQ, this.length = WQ, this.flags = XQ, this.parent = null, QQ.cmTile = this
      }
      get breakAfter() {
        return 1 & this.flags
      }
      get children() {
        return JX
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
      sync(QQ) {
        if (this.flags |= 2, 4 & this.flags) {
          this.flags &= -5;
          let QQ = this.domAttrs;
          QQ && function(QQ, WQ) {
            for (let XQ = QQ.attributes.length - 1; XQ >= 0; XQ--) {
              let wQ = QQ.attributes[XQ].name;
              null == WQ[wQ] && QQ.removeAttribute(wQ)
            }
            for (let XQ in WQ) {
              let wQ = WQ[XQ];
              "style" == XQ ? QQ.style.cssText = wQ : QQ.getAttribute(XQ) != wQ && QQ.setAttribute(XQ, wQ)
            }
          }(this.dom, QQ)
        }
      }
      toString() {
        return this.constructor.name + (this.children.length ? `(${this.children})` : "") + (this.breakAfter ? "#" : "")
      }
      destroy() {
        this.parent = null
      }
      setDOM(QQ) {
        this.dom = QQ, QQ.cmTile = this
      }
      get posAtStart() {
        return this.parent ? this.parent.posBefore(this) : 0
      }
      get posAtEnd() {
        return this.posAtStart + this.length
      }
      posBefore(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.posAtStart;
        for (let XQ of this.children) {
          if (XQ == QQ) return WQ;
          WQ += XQ.length + XQ.breakAfter
        }
        throw new RangeError("Invalid child in posBefore")
      }
      posAfter(QQ) {
        return this.posBefore(QQ) + QQ.length
      }
      covers(QQ) {
        return !0
      }
      coordsIn(QQ, WQ) {
        return null
      }
      domPosFor(QQ, WQ) {
        let XQ = nQ(this.dom),
          wQ = this.length ? QQ > 0 : WQ > 0;
        return new FW(this.parent.dom, XQ + (wQ ? 1 : 0), 0 == QQ || QQ == this.length)
      }
      markDirty(QQ) {
        this.flags &= -3, QQ && (this.flags |= 4), this.parent && 2 & this.parent.flags && this.parent.markDirty(!1)
      }
      get overrideDOMText() {
        return null
      }
      get root() {
        for (let QQ = this; QQ; QQ = QQ.parent)
          if (QQ instanceof BX) return QQ;
        return null
      }
      static get(QQ) {
        return QQ.cmTile
      }
    }
    class IX extends rX {
      constructor(QQ) {
        super(QQ, 0), this._children = []
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
      append(QQ) {
        this.children.push(QQ), QQ.parent = this
      }
      sync(QQ) {
        if (2 & this.flags) return;
        super.sync(QQ);
        let WQ, XQ = this.dom,
          wQ = null,
          qQ = (null === QQ || void 0 === QQ ? void 0 : QQ.node) == XQ ? QQ : null,
          TQ = 0;
        for (let zQ of this.children) {
          if (zQ.sync(QQ), TQ += zQ.length + zQ.breakAfter, WQ = wQ ? wQ.nextSibling : XQ.firstChild, qQ && WQ != zQ.dom && (qQ.written = !0), zQ.dom.parentNode == XQ)
            for (; WQ && WQ != zQ.dom;) WQ = jX(WQ);
          else XQ.insertBefore(zQ.dom, WQ);
          wQ = zQ.dom
        }
        for (WQ = wQ ? wQ.nextSibling : XQ.firstChild, qQ && WQ && (qQ.written = !0); WQ;) WQ = jX(WQ);
        this.length = TQ
      }
    }

    function jX(QQ) {
      let WQ = QQ.nextSibling;
      return QQ.parentNode.removeChild(QQ), WQ
    }
    class BX extends IX {
      constructor(QQ, WQ) {
        super(WQ), this.view = QQ
      }
      owns(QQ) {
        for (; QQ; QQ = QQ.parent)
          if (QQ == this) return !0;
        return !1
      }
      isBlock() {
        return !0
      }
      nearest(QQ) {
        for (;;) {
          if (!QQ) return null;
          let WQ = rX.get(QQ);
          if (WQ && this.owns(WQ)) return WQ;
          QQ = QQ.parentNode
        }
      }
      blockTiles(QQ) {
        for (let WQ = [], XQ = this, wQ = 0, qQ = 0;;)
          if (wQ == XQ.children.length) {
            if (!WQ.length) return;
            XQ = XQ.parent, XQ.breakAfter && qQ++, wQ = WQ.pop()
          } else {
            let TQ = XQ.children[wQ++];
            if (TQ instanceof yX) WQ.push(wQ), XQ = TQ, wQ = 0;
            else {
              let WQ = qQ + TQ.length,
                XQ = QQ(TQ, qQ);
              if (void 0 !== XQ) return XQ;
              qQ = WQ + TQ.breakAfter
            }
          }
      }
      resolveBlock(QQ, WQ) {
        let XQ, wQ, qQ = -1,
          TQ = -1;
        if (this.blockTiles(((zQ, sQ) => {
            let FQ = sQ + zQ.length;
            if (QQ >= sQ && QQ <= FQ) {
              if (zQ.isWidget() && WQ >= -1 && WQ <= 1) {
                if (32 & zQ.flags) return !0;
                16 & zQ.flags && (XQ = void 0)
              }(sQ < QQ || QQ == FQ && (WQ < -1 ? zQ.length : zQ.covers(1))) && (!XQ || !zQ.isWidget() && XQ.isWidget()) && (XQ = zQ, qQ = QQ - sQ), (FQ > QQ || QQ == sQ && (WQ > 1 ? zQ.length : zQ.covers(-1))) && (!wQ || !zQ.isWidget() && wQ.isWidget()) && (wQ = zQ, TQ = QQ - sQ)
            }
          })), !XQ && !wQ) throw new Error("No tile at position " + QQ);
        return XQ && WQ < 0 || !wQ ? {
          tile: XQ,
          offset: qQ
        } : {
          tile: wQ,
          offset: TQ
        }
      }
    }
    class yX extends IX {
      constructor(QQ, WQ) {
        super(QQ), this.wrapper = WQ
      }
      isBlock() {
        return !0
      }
      covers(QQ) {
        return !!this.children.length && (QQ < 0 ? this.children[0].covers(-1) : this.lastChild.covers(1))
      }
      get domAttrs() {
        return this.wrapper.attributes
      }
      static of (QQ, WQ) {
        let XQ = new yX(WQ || document.createElement(QQ.tagName), QQ);
        return WQ || (XQ.flags |= 4), XQ
      }
    }
    class VX extends IX {
      constructor(QQ, WQ) {
        super(QQ), this.attrs = WQ
      }
      isLine() {
        return !0
      }
      static start(QQ, WQ, XQ) {
        let wQ = new VX(WQ || document.createElement("div"), QQ);
        return WQ && XQ || (wQ.flags |= 4), wQ
      }
      get domAttrs() {
        return this.attrs
      }
      resolveInline(QQ, WQ, XQ) {
        let wQ = null,
          qQ = -1,
          TQ = null,
          zQ = -1;
        ! function QQ(sQ, FQ) {
          for (let PQ = 0, gQ = 0; PQ < sQ.children.length && gQ <= FQ; PQ++) {
            let JQ = sQ.children[PQ],
              rQ = gQ + JQ.length;
            rQ >= FQ && (JQ.isComposite() ? QQ(JQ, FQ - gQ) : (!TQ || TQ.isHidden && (WQ > 0 || XQ && DX(TQ, JQ))) && (rQ > FQ || 32 & JQ.flags) ? (TQ = JQ, zQ = FQ - gQ) : (gQ < FQ || 16 & JQ.flags && !JQ.isHidden) && (wQ = JQ, qQ = FQ - gQ)), gQ = rQ
          }
        }(this, QQ);
        let sQ = (WQ < 0 ? wQ : TQ) || wQ || TQ;
        return sQ ? {
          tile: sQ,
          offset: sQ == wQ ? qQ : zQ
        } : null
      }
      coordsIn(QQ, WQ) {
        let XQ = this.resolveInline(QQ, WQ, !0);
        return XQ ? XQ.tile.coordsIn(Math.max(0, XQ.offset), WQ) : function(QQ) {
          let WQ = QQ.dom.lastChild;
          if (!WQ) return QQ.dom.getBoundingClientRect();
          let XQ = oQ(WQ);
          return XQ[XQ.length - 1] || null
        }(this)
      }
      domIn(QQ, WQ) {
        let XQ = this.resolveInline(QQ, WQ);
        if (XQ) {
          let {
            tile: QQ,
            offset: wQ
          } = XQ;
          if (this.dom.contains(QQ.dom)) return QQ.isText() ? new FW(QQ.dom, Math.min(QQ.dom.nodeValue.length, wQ)) : QQ.domPosFor(wQ, 16 & QQ.flags ? 1 : 32 & QQ.flags ? -1 : WQ);
          let qQ = XQ.tile.parent,
            TQ = !1;
          for (let WQ of qQ.children) {
            if (TQ) return new FW(WQ.dom, 0);
            WQ == XQ.tile && (TQ = !0)
          }
        }
        return new FW(this.dom, 0)
      }
    }

    function DX(QQ, WQ) {
      let XQ = QQ.coordsIn(0, 1),
        wQ = WQ.coordsIn(0, 1);
      return XQ && wQ && wQ.top < XQ.bottom
    }
    class pX extends IX {
      constructor(QQ, WQ) {
        super(QQ), this.mark = WQ
      }
      get domAttrs() {
        return this.mark.attrs
      }
      static of (QQ, WQ) {
        let XQ = new pX(WQ || document.createElement(QQ.tagName), QQ);
        return WQ || (XQ.flags |= 4), XQ
      }
    }
    class GX extends rX {
      constructor(QQ, WQ) {
        super(QQ, WQ.length), this.text = WQ
      }
      sync(QQ) {
        2 & this.flags || (super.sync(QQ), this.dom.nodeValue != this.text && (QQ && QQ.node == this.dom && (QQ.written = !0), this.dom.nodeValue = this.text))
      }
      isText() {
        return !0
      }
      toString() {
        return JSON.stringify(this.text)
      }
      coordsIn(QQ, WQ) {
        let XQ = this.dom.nodeValue.length;
        QQ > XQ && (QQ = XQ);
        let wQ = QQ,
          qQ = QQ,
          TQ = 0;
        0 == QQ && WQ < 0 || QQ == XQ && WQ >= 0 ? vQ.chrome || vQ.gecko || (QQ ? (wQ--, TQ = 1) : qQ < XQ && (qQ++, TQ = -1)) : WQ < 0 ? wQ-- : qQ < XQ && qQ++;
        let zQ = wW(this.dom, wQ, qQ).getClientRects();
        if (!zQ.length) return null;
        let sQ = zQ[(TQ ? TQ < 0 : WQ >= 0) ? 0 : zQ.length - 1];
        return vQ.safari && !TQ && 0 == sQ.width && (sQ = Array.prototype.find.call(zQ, (QQ => QQ.width)) || sQ), TQ ? ZQ(sQ, TQ < 0) : sQ || null
      }
      static of (QQ, WQ) {
        let XQ = new GX(WQ || document.createTextNode(QQ), QQ);
        return WQ || (XQ.flags |= 2), XQ
      }
    }
    class UX extends rX {
      constructor(QQ, WQ, XQ, wQ) {
        super(QQ, WQ, wQ), this.widget = XQ
      }
      isWidget() {
        return !0
      }
      get isHidden() {
        return this.widget.isHidden
      }
      covers(QQ) {
        return !(48 & this.flags) && (this.flags & (QQ < 0 ? 64 : 128)) > 0
      }
      coordsIn(QQ, WQ) {
        return this.coordsInWidget(QQ, WQ, !1)
      }
      coordsInWidget(QQ, WQ, XQ) {
        let wQ = this.widget.coordsAt(this.dom, QQ, WQ);
        if (wQ) return wQ;
        if (XQ) return ZQ(this.dom.getBoundingClientRect(), this.length ? 0 == QQ : WQ <= 0);
        {
          let WQ = this.dom.getClientRects(),
            XQ = null;
          if (!WQ.length) return null;
          let wQ = !!(16 & this.flags) || !(32 & this.flags) && QQ > 0;
          for (let qQ = wQ ? WQ.length - 1 : 0; XQ = WQ[qQ], !(QQ > 0 ? 0 == qQ : qQ == WQ.length - 1 || XQ.top < XQ.bottom); qQ += wQ ? -1 : 1);
          return ZQ(XQ, !wQ)
        }
      }
      get overrideDOMText() {
        if (!this.length) return wQ.M.empty;
        let {
          root: QQ
        } = this;
        if (!QQ) return wQ.M.empty;
        let WQ = this.posAtStart;
        return QQ.view.state.doc.slice(WQ, WQ + this.length)
      }
      destroy() {
        super.destroy(), this.widget.destroy(this.dom)
      }
      static of (QQ, WQ, XQ, wQ, qQ) {
        return qQ || (qQ = QQ.toDOM(WQ), QQ.editable || (qQ.contentEditable = "false")), new UX(qQ, XQ, QQ, wQ)
      }
    }
    class bX extends rX {
      constructor(QQ) {
        let WQ = document.createElement("img");
        WQ.className = "cm-widgetBuffer", WQ.setAttribute("aria-hidden", "true"), super(WQ, 0, QQ)
      }
      get isHidden() {
        return !0
      }
      get overrideDOMText() {
        return wQ.M.empty
      }
      coordsIn(QQ) {
        return this.dom.getBoundingClientRect()
      }
    }
    class vX {
      constructor(QQ) {
        this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = QQ
      }
      advance(QQ, WQ, XQ) {
        let {
          tile: wQ,
          index: qQ,
          beforeBreak: TQ,
          parents: zQ
        } = this;
        for (; QQ || WQ > 0;)
          if (wQ.isComposite())
            if (TQ) {
              if (!QQ) break;
              XQ && XQ.break(), QQ--, TQ = !1
            } else if (qQ == wQ.children.length) {
          if (!QQ && !zQ.length) break;
          XQ && XQ.leave(wQ), TQ = !!wQ.breakAfter, ({
            tile: wQ,
            index: qQ
          } = zQ.pop()), qQ++
        } else {
          let sQ = wQ.children[qQ],
            FQ = sQ.breakAfter;
          !(WQ > 0 ? sQ.length <= QQ : sQ.length < QQ) || XQ && !1 === XQ.skip(sQ, 0, sQ.length) && sQ.isComposite ? (zQ.push({
            tile: wQ,
            index: qQ
          }), wQ = sQ, qQ = 0, XQ && sQ.isComposite() && XQ.enter(sQ)) : (TQ = !!FQ, qQ++, QQ -= sQ.length)
        } else if (qQ == wQ.length) TQ = !!wQ.breakAfter, ({
          tile: wQ,
          index: qQ
        } = zQ.pop()), qQ++;
        else {
          if (!QQ) break;
          {
            let WQ = Math.min(QQ, wQ.length - qQ);
            XQ && XQ.skip(wQ, qQ, qQ + WQ), QQ -= WQ, qQ += WQ
          }
        }
        return this.tile = wQ, this.index = qQ, this.beforeBreak = TQ, this
      }
      get root() {
        return this.parents.length ? this.parents[0].tile : this.tile
      }
    }
    class dX {
      constructor(QQ, WQ, XQ, wQ) {
        this.from = QQ, this.to = WQ, this.wrapper = XQ, this.rank = wQ
      }
    }
    class HX {
      constructor(QQ, WQ, XQ) {
        this.cache = QQ, this.root = WQ, this.blockWrappers = XQ, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0
      }
      addText(QQ, WQ, XQ, wQ) {
        var qQ;
        this.flushBuffer();
        let TQ = this.ensureMarks(WQ, XQ),
          zQ = TQ.lastChild;
        if (zQ && zQ.isText() && !(8 & zQ.flags) && zQ.length + QQ.length < 512) {
          this.cache.reused.set(zQ, 2), (TQ.children[TQ.children.length - 1] = new GX(zQ.dom, zQ.text + QQ)).parent = TQ
        } else TQ.append(wQ || GX.of(QQ, null === (qQ = this.cache.find(GX)) || void 0 === qQ ? void 0 : qQ.dom));
        this.pos += QQ.length, this.afterWidget = null
      }
      addComposition(QQ, WQ) {
        let XQ = this.curLine;
        XQ.dom != WQ.line.dom && (XQ.setDOM(this.cache.reused.has(WQ.line) ? RX(WQ.line.dom) : WQ.line.dom), this.cache.reused.set(WQ.line, 2));
        let wQ = XQ;
        for (let zQ = WQ.marks.length - 1; zQ >= 0; zQ--) {
          let QQ = WQ.marks[zQ],
            XQ = wQ.lastChild;
          if (XQ instanceof pX && XQ.mark.eq(QQ.mark)) XQ.dom != QQ.dom && XQ.setDOM(RX(QQ.dom)), wQ = XQ;
          else {
            if (this.cache.reused.get(QQ)) {
              let WQ = rX.get(QQ.dom);
              WQ && WQ.setDOM(RX(QQ.dom))
            }
            let WQ = pX.of(QQ.mark, QQ.dom);
            wQ.append(WQ), wQ = WQ
          }
          this.cache.reused.set(QQ, 2)
        }
        let qQ = rX.get(QQ.text);
        qQ && this.cache.reused.set(qQ, 2);
        let TQ = new GX(QQ.text, QQ.text.nodeValue);
        TQ.flags |= 8, wQ.append(TQ)
      }
      addInlineWidget(QQ, WQ, XQ) {
        let wQ = this.afterWidget && 48 & QQ.flags && (48 & this.afterWidget.flags) == (48 & QQ.flags);
        wQ || this.flushBuffer();
        let qQ = this.ensureMarks(WQ, XQ);
        wQ || 16 & QQ.flags || qQ.append(this.getBuffer(1)), qQ.append(QQ), this.pos += QQ.length, this.afterWidget = QQ
      }
      addMark(QQ, WQ, XQ) {
        this.flushBuffer(), this.ensureMarks(WQ, XQ).append(QQ), this.pos += QQ.length, this.afterWidget = null
      }
      addBlockWidget(QQ) {
        this.getBlockPos().append(QQ), this.pos += QQ.length, this.lastBlock = QQ, this.endLine()
      }
      continueWidget(QQ) {
        (this.afterWidget || this.lastBlock).length += QQ, this.pos += QQ
      }
      addLineStart(QQ, WQ) {
        var XQ;
        QQ || (QQ = AX);
        let wQ = VX.start(QQ, WQ || (null === (XQ = this.cache.find(VX)) || void 0 === XQ ? void 0 : XQ.dom), !!WQ);
        this.getBlockPos().append(this.lastBlock = this.curLine = wQ)
      }
      addLine(QQ) {
        this.getBlockPos().append(QQ), this.pos += QQ.length, this.lastBlock = QQ, this.endLine()
      }
      addBreak() {
        this.lastBlock.flags |= 1, this.endLine(), this.pos++
      }
      addLineStartIfNotCovered(QQ) {
        this.blockPosCovered() || this.addLineStart(QQ)
      }
      ensureLine(QQ) {
        this.curLine || this.addLineStart(QQ)
      }
      ensureMarks(QQ, WQ) {
        var XQ;
        let wQ = this.curLine;
        for (let qQ = QQ.length - 1; qQ >= 0; qQ--) {
          let TQ, zQ = QQ[qQ];
          if (WQ > 0 && (TQ = wQ.lastChild) && TQ instanceof pX && TQ.mark.eq(zQ)) wQ = TQ, WQ--;
          else {
            let QQ = pX.of(zQ, null === (XQ = this.cache.find(pX, (QQ => QQ.mark.eq(zQ)))) || void 0 === XQ ? void 0 : XQ.dom);
            wQ.append(QQ), wQ = QQ, WQ = 0
          }
        }
        return wQ
      }
      endLine() {
        if (this.curLine) {
          this.flushBuffer();
          let QQ = this.curLine.lastChild;
          QQ && cX(this.curLine, !1) && ("BR" == QQ.dom.nodeName || !QQ.isWidget() || vQ.ios && cX(this.curLine, !0)) || this.curLine.append(this.cache.findWidget(CX, 0, 32) || new UX(CX.toDOM(), 0, CX, 32)), this.curLine = this.afterWidget = null
        }
      }
      updateBlockWrappers() {
        this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
        for (let QQ = this.wrappers.length - 1; QQ >= 0; QQ--) this.wrappers[QQ].to < this.pos && this.wrappers.splice(QQ, 1);
        for (let QQ = this.blockWrappers; QQ.value && QQ.from <= this.pos; QQ.next())
          if (QQ.to >= this.pos) {
            let WQ = new dX(QQ.from, QQ.to, QQ.value, QQ.rank),
              XQ = this.wrappers.length;
            for (; XQ > 0 && (this.wrappers[XQ - 1].rank - WQ.rank || this.wrappers[XQ - 1].to - WQ.to) < 0;) XQ--;
            this.wrappers.splice(XQ, 0, WQ)
          } this.wrapperPos = this.pos
      }
      getBlockPos() {
        var QQ;
        this.updateBlockWrappers();
        let WQ = this.root;
        for (let XQ of this.wrappers) {
          let wQ = WQ.lastChild;
          if (XQ.from < this.pos && wQ instanceof yX && wQ.wrapper.eq(XQ.wrapper)) WQ = wQ;
          else {
            let wQ = yX.of(XQ.wrapper, null === (QQ = this.cache.find(yX, (QQ => QQ.wrapper.eq(XQ.wrapper)))) || void 0 === QQ ? void 0 : QQ.dom);
            WQ.append(wQ), WQ = wQ
          }
        }
        return WQ
      }
      blockPosCovered() {
        let QQ = this.lastBlock;
        return null != QQ && !QQ.breakAfter && (!QQ.isWidget() || (160 & QQ.flags) > 0)
      }
      getBuffer(QQ) {
        let WQ = 2 | (QQ < 0 ? 16 : 32),
          XQ = this.cache.find(bX, void 0, 1);
        return XQ && (XQ.flags = WQ), XQ || new bX(WQ)
      }
      flushBuffer() {
        !this.afterWidget || 32 & this.afterWidget.flags || (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null)
      }
    }
    class aX {
      constructor(QQ) {
        this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = QQ.iter()
      }
      skip(QQ) {
        this.textOff + QQ <= this.text.length ? this.textOff += QQ : (this.skipCount += QQ - (this.text.length - this.textOff), this.text = "", this.textOff = 0)
      }
      next(QQ) {
        if (this.textOff == this.text.length) {
          let {
            value: WQ,
            lineBreak: XQ,
            done: wQ
          } = this.cursor.next(this.skipCount);
          if (this.skipCount = 0, wQ) throw new Error("Ran out of text content when drawing inline views");
          this.text = WQ;
          let qQ = this.textOff = Math.min(QQ, WQ.length);
          return XQ ? null : WQ.slice(0, qQ)
        }
        let WQ = Math.min(this.text.length, this.textOff + QQ),
          XQ = this.text.slice(this.textOff, WQ);
        return this.textOff = WQ, XQ
      }
    }
    const lX = [UX, VX, GX, pX, bX, yX, BX];
    for (let Az = 0; Az < lX.length; Az++) lX[Az].bucket = Az;
    class hX {
      constructor(QQ) {
        this.view = QQ, this.buckets = lX.map((() => [])), this.index = lX.map((() => 0)), this.reused = new Map
      }
      add(QQ) {
        let WQ = QQ.constructor.bucket,
          XQ = this.buckets[WQ];
        XQ.length < 6 ? XQ.push(QQ) : XQ[this.index[WQ] = (this.index[WQ] + 1) % 6] = QQ
      }
      find(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          wQ = QQ.bucket,
          qQ = this.buckets[wQ],
          TQ = this.index[wQ];
        for (let zQ = qQ.length - 1; zQ >= 0; zQ--) {
          let QQ = (zQ + TQ) % qQ.length,
            sQ = qQ[QQ];
          if ((!WQ || WQ(sQ)) && !this.reused.has(sQ)) return qQ.splice(QQ, 1), QQ < TQ && this.index[wQ]--, this.reused.set(sQ, XQ), sQ
        }
        return null
      }
      findWidget(QQ, WQ, XQ) {
        let wQ = this.buckets[0];
        if (wQ.length)
          for (let qQ = 0, TQ = 0;; qQ++) {
            if (qQ == wQ.length) {
              if (TQ) return null;
              TQ = 1, qQ = 0
            }
            let zQ = wQ[qQ];
            if (!this.reused.has(zQ) && (0 == TQ ? zQ.widget.compare(QQ) : zQ.widget.constructor == QQ.constructor && QQ.updateDOM(zQ.dom, this.view, zQ.widget))) return wQ.splice(qQ, 1), qQ < this.index[0] && this.index[0]--, zQ.widget == QQ && zQ.length == WQ && (497 & zQ.flags) == XQ ? (this.reused.set(zQ, 1), zQ) : (this.reused.set(zQ, 2), new UX(zQ.dom, WQ, QQ, -498 & zQ.flags | XQ))
          }
      }
      reuse(QQ) {
        return this.reused.set(QQ, 1), QQ
      }
      maybeReuse(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        if (!this.reused.has(QQ)) return this.reused.set(QQ, WQ), QQ.dom
      }
      clear() {
        for (let QQ = 0; QQ < this.buckets.length; QQ++) this.buckets[QQ].length = this.index[QQ] = 0
      }
    }
    class iX {
      constructor(QQ, WQ, XQ, qQ, TQ) {
        this.view = QQ, this.Tw = qQ, this.disallowBlockEffectsFor = TQ, this.openWidget = !1, this.openMarks = 0, this.cache = new hX(QQ), this.text = new aX(QQ.state.doc), this.builder = new HX(this.cache, new BX(QQ, QQ.contentDOM), wQ.A.iter(XQ)), this.cache.reused.set(WQ, 2), this.old = new vX(WQ), this.reuseWalker = {
          skip: (QQ, WQ, XQ) => {
            if (this.cache.add(QQ), QQ.isComposite()) return !1
          },
          enter: QQ => this.cache.add(QQ),
          leave: () => {},
          break: () => {}
        }
      }
      run(QQ, WQ) {
        let XQ = WQ && this.getCompositionContext(WQ.text);
        for (let wQ = 0, qQ = 0, TQ = 0;;) {
          let zQ = TQ < QQ.length ? QQ[TQ++] : null,
            sQ = zQ ? zQ.fromA : this.old.root.length;
          if (sQ > wQ) {
            let QQ = sQ - wQ;
            this.preserve(QQ, !TQ, !zQ), wQ = sQ, qQ += QQ
          }
          if (!zQ) break;
          WQ && zQ.fromA <= WQ.range.fromA && zQ.toA >= WQ.range.toA ? (this.forward(zQ.fromA, WQ.range.fromA, WQ.range.fromA < WQ.range.toA ? 1 : -1), this.emit(qQ, WQ.range.fromB), this.cache.clear(), this.builder.addComposition(WQ, XQ), this.text.skip(WQ.range.toB - WQ.range.fromB), this.forward(WQ.range.fromA, zQ.toA), this.emit(WQ.range.toB, zQ.toB)) : (this.forward(zQ.fromA, zQ.toA), this.emit(qQ, zQ.toB)), qQ = zQ.toB, wQ = zQ.toA
        }
        return this.builder.curLine && this.builder.endLine(), this.builder.root
      }
      preserve(QQ, WQ, XQ) {
        let wQ = function(QQ) {
            let WQ = [];
            for (let XQ = QQ.parents.length; XQ > 1; XQ--) {
              let wQ = XQ == QQ.parents.length ? QQ.tile : QQ.parents[XQ].tile;
              wQ instanceof pX && WQ.push(wQ.mark)
            }
            return WQ
          }(this.old),
          qQ = this.openMarks;
        this.old.advance(QQ, XQ ? 1 : -1, {
          skip: (QQ, WQ, XQ) => {
            if (QQ.isWidget())
              if (this.openWidget) this.builder.continueWidget(XQ - WQ);
              else {
                let TQ = XQ > 0 || WQ < QQ.length ? UX.of(QQ.widget, this.view, XQ - WQ, 496 & QQ.flags, this.cache.maybeReuse(QQ)) : this.cache.reuse(QQ);
                256 & TQ.flags ? (TQ.flags &= -2, this.builder.addBlockWidget(TQ)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(TQ, wQ, qQ), qQ = wQ.length)
              }
            else if (QQ.isText()) this.builder.ensureLine(null), WQ || XQ != QQ.length || this.cache.reused.has(QQ) ? (this.cache.add(QQ), this.builder.addText(QQ.text.slice(WQ, XQ), wQ, qQ)) : this.builder.addText(QQ.text, wQ, qQ, this.cache.reuse(QQ)), qQ = wQ.length;
            else if (QQ.isLine()) QQ.flags &= -2, this.cache.reused.set(QQ, 1), this.builder.addLine(QQ);
            else if (QQ instanceof bX) this.cache.add(QQ);
            else {
              if (!(QQ instanceof pX)) return !1;
              this.builder.ensureLine(null), this.builder.addMark(QQ, wQ, qQ), this.cache.reused.set(QQ, 1), qQ = wQ.length
            }
            this.openWidget = !1
          },
          enter: QQ => {
            QQ.isLine() ? this.builder.addLineStart(QQ.attrs, this.cache.maybeReuse(QQ)) : (this.cache.add(QQ), QQ instanceof pX && wQ.unshift(QQ.mark)), this.openWidget = !1
          },
          leave: QQ => {
            QQ.isLine() ? wQ.length && (wQ.length = qQ = 0) : QQ instanceof pX && (wQ.shift(), qQ = Math.min(qQ, wQ.length))
          },
          break: () => {
            this.builder.addBreak(), this.openWidget = !1
          }
        }), this.text.skip(QQ)
      }
      emit(QQ, WQ) {
        let XQ = null,
          qQ = this.builder,
          TQ = 0,
          zQ = wQ.A.spans(this.Tw, QQ, WQ, {
            point: (QQ, WQ, wQ, zQ, sQ, FQ) => {
              if (wQ instanceof CQ) {
                if (this.disallowBlockEffectsFor[FQ]) {
                  if (wQ.block) throw new RangeError("Block decorations may not be specified via plugins");
                  if (WQ > this.view.state.doc.lineAt(QQ).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins")
                }
                if (TQ = zQ.length, sQ > zQ.length) qQ.continueWidget(WQ - QQ);
                else {
                  let TQ = wQ.widget || (wQ.block ? EX.block : EX.inline),
                    FQ = function(QQ) {
                      let WQ = QQ.isReplace ? (QQ.startSide < 0 ? 64 : 0) | (QQ.endSide > 0 ? 128 : 0) : QQ.startSide > 0 ? 32 : 16;
                      QQ.block && (WQ |= 256);
                      return WQ
                    }(wQ),
                    PQ = this.cache.findWidget(TQ, WQ - QQ, FQ) || UX.of(TQ, this.view, WQ - QQ, FQ);
                  wQ.block ? (wQ.startSide > 0 && qQ.addLineStartIfNotCovered(XQ), qQ.addBlockWidget(PQ)) : (qQ.ensureLine(XQ), qQ.addInlineWidget(PQ, zQ, sQ))
                }
                XQ = null
              } else XQ = function(QQ, WQ) {
                let XQ = WQ.spec.attributes,
                  wQ = WQ.spec.class;
                if (!XQ && !wQ) return QQ;
                QQ || (QQ = {
                  class: "cm-line"
                });
                XQ && dQ(XQ, QQ);
                wQ && (QQ.class += " " + wQ);
                return QQ
              }(XQ, wQ);
              WQ > QQ && this.text.skip(WQ - QQ)
            },
            span: (QQ, WQ, wQ, TQ) => {
              for (let zQ = QQ; zQ < WQ;) {
                let sQ = this.text.next(Math.min(512, WQ - zQ));
                null == sQ ? (qQ.addLineStartIfNotCovered(XQ), qQ.addBreak(), zQ++) : (qQ.ensureLine(XQ), qQ.addText(sQ, wQ, zQ == QQ ? TQ : wQ.length), zQ += sQ.length), XQ = null
              }
            }
          });
        qQ.addLineStartIfNotCovered(XQ), this.openWidget = zQ > TQ, this.openMarks = zQ
      }
      forward(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        WQ - QQ <= 10 ? this.old.advance(WQ - QQ, XQ, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(WQ - QQ - 10, -1), this.old.advance(5, XQ, this.reuseWalker))
      }
      getCompositionContext(QQ) {
        let WQ = [],
          XQ = null;
        for (let wQ = QQ.parentNode;; wQ = wQ.parentNode) {
          let QQ = rX.get(wQ);
          if (wQ == this.view.contentDOM) break;
          QQ instanceof pX ? WQ.push(QQ) : (null === QQ || void 0 === QQ ? void 0 : QQ.isLine()) ? XQ = QQ : QQ instanceof yX || ("DIV" != wQ.nodeName || XQ || wQ == this.view.contentDOM ? XQ || WQ.push(pX.of(new RQ({
            tagName: wQ.nodeName.toLowerCase(),
            attributes: hQ(wQ)
          }), wQ)) : XQ = new VX(wQ, AX))
        }
        return {
          line: XQ,
          marks: WQ
        }
      }
    }

    function cX(QQ, WQ) {
      let XQ = QQ => {
        for (let wQ of QQ.children)
          if ((WQ ? wQ.isText() : wQ.length) || XQ(wQ)) return !0;
        return !1
      };
      return XQ(QQ)
    }
    const AX = {
      class: "cm-line"
    };

    function RX(QQ) {
      let WQ = rX.get(QQ);
      return WQ && WQ.setDOM(QQ.cloneNode()), QQ
    }
    class EX extends iQ {
      constructor(QQ) {
        super(), this.tag = QQ
      }
      eq(QQ) {
        return QQ.tag == this.tag
      }
      toDOM() {
        return document.createElement(this.tag)
      }
      updateDOM(QQ) {
        return QQ.nodeName.toLowerCase() == this.tag
      }
      get isHidden() {
        return !0
      }
    }
    EX.inline = new EX("span"), EX.block = new EX("div");
    const CX = new class extends iQ {
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
    class uX {
      constructor(QQ) {
        this.view = QQ, this.Tw = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = AQ.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new BX(QQ, QQ.contentDOM), this.updateInner([new PX(0, 0, 0, QQ.state.doc.length)], null)
      }
      update(QQ) {
        var WQ;
        let XQ = QQ.changedRanges;
        this.minWidth > 0 && XQ.length && (XQ.every((QQ => {
          let {
            fromA: WQ,
            toA: XQ
          } = QQ;
          return XQ < this.minWidthFrom || WQ > this.minWidthTo
        })) ? (this.minWidthFrom = QQ.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = QQ.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(QQ);
        let qQ = -1;
        this.view.inputState.composing >= 0 && !this.view.observer.editContext && ((null === (WQ = this.domChanged) || void 0 === WQ ? void 0 : WQ.newSel) ? qQ = this.domChanged.newSel.head : function(QQ, WQ) {
          let XQ = !1;
          WQ && QQ.iterChangedRanges(((QQ, wQ) => {
            QQ < WQ.to && wQ > WQ.from && (XQ = !0)
          }));
          return XQ
        }(QQ.changes, this.hasComposition) || QQ.selectionSet || (qQ = QQ.state.selection.main.head));
        let TQ = qQ > -1 ? function(QQ, WQ, XQ) {
          let wQ = kX(QQ, XQ);
          if (!wQ) return null;
          let {
            node: qQ,
            from: TQ,
            to: zQ
          } = wQ, sQ = qQ.nodeValue;
          if (/[\n\r]/.test(sQ)) return null;
          if (QQ.state.doc.sliceString(wQ.from, wQ.to) != sQ) return null;
          let FQ = WQ.invertedDesc;
          return {
            range: new PX(FQ.mapPos(TQ), FQ.mapPos(zQ), TQ, zQ),
            text: qQ
          }
        }(this.view, QQ.changes, qQ) : null;
        if (this.domChanged = null, this.hasComposition) {
          let {
            from: WQ,
            to: wQ
          } = this.hasComposition;
          XQ = new PX(WQ, wQ, QQ.changes.mapPos(WQ, -1), QQ.changes.mapPos(wQ, 1)).addToSet(XQ.slice())
        }
        this.hasComposition = TQ ? {
          from: TQ.range.fromB,
          to: TQ.range.toB
        } : null, (vQ.ie || vQ.chrome) && !TQ && QQ && QQ.state.doc.lines != QQ.startState.doc.lines && (this.forceSelection = !0);
        let zQ = this.Tw,
          sQ = this.blockWrappers;
        this.updateDeco();
        let FQ = function(QQ, WQ, XQ) {
          let qQ = new fX;
          return wQ.A.compare(QQ, WQ, XQ, qQ), qQ.changes
        }(zQ, this.Tw, QQ.changes);
        FQ.length && (XQ = PX.extendWithRanges(XQ, FQ));
        let PQ = function(QQ, WQ, XQ) {
          let qQ = new SX;
          return wQ.A.compare(QQ, WQ, XQ, qQ), qQ.changes
        }(sQ, this.blockWrappers, QQ.changes);
        return PQ.length && (XQ = PX.extendWithRanges(XQ, PQ)), TQ && !XQ.some((QQ => QQ.fromA <= TQ.range.fromA && QQ.toA >= TQ.range.toA)) && (XQ = TQ.range.addToSet(XQ.slice())), !(2 & this.tile.flags && 0 == XQ.length) && (this.updateInner(XQ, TQ), QQ.transactions.length && (this.lastUpdate = Date.now()), !0)
      }
      updateInner(QQ, WQ) {
        this.view.viewState.mustMeasureContent = !0;
        let {
          observer: XQ
        } = this.view;
        XQ.ignore((() => {
          if (WQ || QQ.length) {
            let XQ = this.tile,
              wQ = new iX(this.view, XQ, this.blockWrappers, this.Tw, this.dynamicDecorationMap);
            WQ && rX.get(WQ.text) && wQ.cache.reused.set(rX.get(WQ.text), 2), this.tile = wQ.run(QQ, WQ), LX(XQ, wQ.cache.reused)
          }
          this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
          let wQ = vQ.chrome || vQ.ios ? {
            node: XQ.selectionRange.focusNode,
            written: !1
          } : void 0;
          this.tile.sync(wQ), !wQ || !wQ.written && XQ.selectionRange.focusNode == wQ.node && this.tile.dom.contains(wQ.node) || (this.forceSelection = !0), this.tile.dom.style.height = ""
        }));
        let wQ = [];
        if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
          for (let qQ of this.tile.children) qQ.isWidget() && qQ.widget instanceof tX && wQ.push(qQ.dom);
        XQ.updateGaps(wQ)
      }
      updateEditContextFormatting(QQ) {
        this.editContextFormatting = this.editContextFormatting.map(QQ.changes);
        for (let WQ of QQ.transactions)
          for (let QQ of WQ.effects) QQ.is(nW) && (this.editContextFormatting = QQ.value)
      }
      updateSelection() {
        let QQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this.view.observer.selectionRange.focusNode || this.view.observer.readSelectionRange();
        let {
          dom: WQ
        } = this.tile, XQ = this.view.root.activeElement, wQ = XQ == WQ, qQ = !wQ && !(this.view.state.facet(YW) || WQ.tabIndex > -1) && tQ(WQ, this.view.observer.selectionRange) && !(XQ && WQ.contains(XQ));
        if (!(wQ || QQ || qQ)) return;
        let TQ = this.forceSelection;
        this.forceSelection = !1;
        let zQ, sQ, FQ = this.view.state.selection.main;
        if (FQ.empty ? sQ = zQ = this.inlineDOMNearPos(FQ.anchor, FQ.assoc || 1) : (sQ = this.inlineDOMNearPos(FQ.head, FQ.head == FQ.from ? 1 : -1), zQ = this.inlineDOMNearPos(FQ.anchor, FQ.anchor == FQ.from ? 1 : -1)), vQ.gecko && FQ.empty && !this.hasComposition && (1 == (PQ = zQ).node.nodeType && PQ.node.firstChild && (0 == PQ.offset || "false" == PQ.node.childNodes[PQ.offset - 1].contentEditable) && (PQ.offset == PQ.node.childNodes.length || "false" == PQ.node.childNodes[PQ.offset].contentEditable))) {
          let QQ = document.createTextNode("");
          this.view.observer.ignore((() => zQ.node.insertBefore(QQ, zQ.node.childNodes[zQ.offset] || null))), zQ = sQ = new FW(QQ, 0), TQ = !0
        }
        var PQ;
        let gQ = this.view.observer.selectionRange;
        !TQ && gQ.focusNode && (eQ(zQ.node, zQ.offset, gQ.anchorNode, gQ.anchorOffset) && eQ(sQ.node, sQ.offset, gQ.focusNode, gQ.focusOffset) || this.suppressWidgetCursorChange(gQ, FQ)) || (this.view.observer.ignore((() => {
          vQ.android && vQ.chrome && WQ.contains(gQ.focusNode) && function(QQ, WQ) {
            for (let XQ = QQ; XQ && XQ != WQ; XQ = XQ.assignedSlot || XQ.parentNode)
              if (1 == XQ.nodeType && "false" == XQ.contentEditable) return !0;
            return !1
          }(gQ.focusNode, WQ) && (WQ.blur(), WQ.focus({
            preventScroll: !0
          }));
          let QQ = fQ(this.view.root);
          if (QQ)
            if (FQ.empty) {
              if (vQ.gecko) {
                let QQ = (wQ = zQ.node, TQ = zQ.offset, 1 != wQ.nodeType ? 0 : (TQ && "false" == wQ.childNodes[TQ - 1].contentEditable ? 1 : 0) | (TQ < wQ.childNodes.length && "false" == wQ.childNodes[TQ].contentEditable ? 2 : 0));
                if (QQ && 3 != QQ) {
                  let WQ = (1 == QQ ? zW : sW)(zQ.node, zQ.offset);
                  WQ && (zQ = new FW(WQ.node, WQ.offset))
                }
              }
              QQ.collapse(zQ.node, zQ.offset), null != FQ.bidiLevel && void 0 !== QQ.caretBidiLevel && (QQ.caretBidiLevel = FQ.bidiLevel)
            } else if (QQ.extend) {
            QQ.collapse(zQ.node, zQ.offset);
            try {
              QQ.extend(sQ.node, sQ.offset)
            } catch (PQ) {}
          } else {
            let WQ = document.createRange();
            FQ.anchor > FQ.head && ([zQ, sQ] = [sQ, zQ]), WQ.setEnd(sQ.node, sQ.offset), WQ.setStart(zQ.node, zQ.offset), QQ.removeAllRanges(), QQ.addRange(WQ)
          } else;
          var wQ, TQ;
          qQ && this.view.root.activeElement == WQ && (WQ.blur(), XQ && XQ.focus())
        })), this.view.observer.setSelectionRange(zQ, sQ)), this.impreciseAnchor = zQ.precise ? null : new FW(gQ.anchorNode, gQ.anchorOffset), this.impreciseHead = sQ.precise ? null : new FW(gQ.focusNode, gQ.focusOffset)
      }
      suppressWidgetCursorChange(QQ, WQ) {
        return this.hasComposition && WQ.empty && eQ(QQ.focusNode, QQ.focusOffset, QQ.anchorNode, QQ.anchorOffset) && this.posFromDOM(QQ.focusNode, QQ.focusOffset) == WQ.head
      }
      enforceCursorAssoc() {
        if (this.hasComposition) return;
        let {
          view: QQ
        } = this, WQ = QQ.state.selection.main, XQ = fQ(QQ.root), {
          anchorNode: wQ,
          anchorOffset: qQ
        } = QQ.observer.selectionRange;
        if (!XQ || !WQ.empty || !WQ.assoc || !XQ.modify) return;
        let TQ = this.lineAt(WQ.head, WQ.assoc);
        if (!TQ) return;
        let zQ = TQ.posAtStart;
        if (WQ.head == zQ || WQ.head == zQ + TQ.length) return;
        let sQ = this.coordsAt(WQ.head, -1),
          FQ = this.coordsAt(WQ.head, 1);
        if (!sQ || !FQ || sQ.bottom > FQ.top) return;
        let PQ = this.domAtPos(WQ.head + WQ.assoc, WQ.assoc);
        XQ.collapse(PQ.node, PQ.offset), XQ.modify("move", WQ.assoc < 0 ? "forward" : "backward", "lineboundary"), QQ.observer.readSelectionRange();
        let gQ = QQ.observer.selectionRange;
        QQ.docView.posFromDOM(gQ.anchorNode, gQ.anchorOffset) != WQ.from && XQ.collapse(wQ, qQ)
      }
      posFromDOM(QQ, WQ) {
        let XQ = this.tile.nearest(QQ);
        if (!XQ) return 2 & this.tile.dom.compareDocumentPosition(QQ) ? 0 : this.view.state.doc.length;
        let wQ = XQ.posAtStart;
        if (!XQ.isComposite()) return XQ.isText() ? QQ == XQ.dom ? wQ + WQ : wQ + (WQ ? XQ.length : 0) : wQ;
        {
          let qQ;
          if (QQ == XQ.dom) qQ = XQ.dom.childNodes[WQ];
          else {
            let wQ = 0 == NQ(QQ) ? 0 : 0 == WQ ? -1 : 1;
            for (;;) {
              let WQ = QQ.parentNode;
              if (WQ == XQ.dom) break;
              0 == wQ && WQ.firstChild != WQ.lastChild && (wQ = QQ == WQ.firstChild ? -1 : 1), QQ = WQ
            }
            qQ = wQ < 0 ? QQ : QQ.nextSibling
          }
          if (qQ == XQ.dom.firstChild) return wQ;
          for (; qQ && !rX.get(qQ);) qQ = qQ.nextSibling;
          if (!qQ) return wQ + XQ.length;
          for (let QQ = 0, WQ = wQ;; QQ++) {
            let wQ = XQ.children[QQ];
            if (wQ.dom == qQ) return WQ;
            WQ += wQ.length + wQ.breakAfter
          }
        }
      }
      domAtPos(QQ, WQ) {
        let {
          tile: XQ,
          offset: wQ
        } = this.tile.resolveBlock(QQ, WQ);
        return XQ.isWidget() ? XQ.domPosFor(QQ, WQ) : XQ.domIn(wQ, WQ)
      }
      inlineDOMNearPos(QQ, WQ) {
        let XQ, wQ, qQ = -1,
          TQ = !1,
          zQ = -1,
          sQ = !1;
        return this.tile.blockTiles(((WQ, FQ) => {
          if (WQ.isWidget()) {
            if (32 & WQ.flags && FQ >= QQ) return !0;
            16 & WQ.flags && (TQ = !0)
          } else {
            let PQ = FQ + WQ.length;
            if (FQ <= QQ && (XQ = WQ, qQ = QQ - FQ, TQ = PQ < QQ), PQ >= QQ && !wQ && (wQ = WQ, zQ = QQ - FQ, sQ = FQ > QQ), FQ > QQ && wQ) return !0
          }
        })), XQ || wQ ? (TQ && wQ ? XQ = null : sQ && XQ && (wQ = null), XQ && WQ < 0 || !wQ ? XQ.domIn(qQ, WQ) : wQ.domIn(zQ, WQ)) : this.domAtPos(QQ, WQ)
      }
      coordsAt(QQ, WQ) {
        let {
          tile: XQ,
          offset: wQ
        } = this.tile.resolveBlock(QQ, WQ);
        return XQ.isWidget() ? XQ.widget instanceof tX ? null : XQ.coordsInWidget(wQ, WQ, !0) : XQ.coordsIn(wQ, WQ)
      }
      lineAt(QQ, WQ) {
        let {
          tile: XQ
        } = this.tile.resolveBlock(QQ, WQ);
        return XQ.isLine() ? XQ : null
      }
      coordsForChar(QQ) {
        let {
          tile: WQ,
          offset: XQ
        } = this.tile.resolveBlock(QQ, 1);
        if (!WQ.isLine()) return null;
        return function QQ(WQ, XQ) {
          if (WQ.isComposite())
            for (let wQ of WQ.children) {
              if (wQ.length >= XQ) {
                let WQ = QQ(wQ, XQ);
                if (WQ) return WQ
              }
              if ((XQ -= wQ.length) < 0) break
            } else if (WQ.isText() && XQ < WQ.length) {
              let QQ = (0, wQ.W)(WQ.text, XQ);
              if (QQ == XQ) return null;
              let qQ = wW(WQ.dom, XQ, QQ).getClientRects();
              for (let WQ = 0; WQ < qQ.length; WQ++) {
                let QQ = qQ[WQ];
                if (WQ == qQ.length - 1 || QQ.top < QQ.bottom && QQ.left < QQ.right) return QQ
              }
            } return null
        }(WQ, XQ)
      }
      measureVisibleLineHeights(QQ) {
        let WQ = [],
          {
            from: XQ,
            to: wQ
          } = QQ,
          qQ = this.view.contentDOM.clientWidth,
          TQ = qQ > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
          zQ = -1,
          sQ = this.view.textDirection == PW.LTR,
          FQ = 0,
          PQ = (QQ, gQ, JQ) => {
            for (let rQ = 0; rQ < QQ.children.length && !(gQ > wQ); rQ++) {
              let wQ = QQ.children[rQ],
                IQ = gQ + wQ.length,
                jQ = wQ.dom.getBoundingClientRect(),
                {
                  height: BQ
                } = jQ;
              if (JQ && !rQ && (FQ += jQ.top - JQ.top), wQ instanceof yX) IQ > XQ && PQ(wQ, gQ, jQ);
              else if (gQ >= XQ && (FQ > 0 && WQ.push(-FQ), WQ.push(BQ + FQ), FQ = 0, TQ)) {
                let QQ = wQ.dom.lastChild,
                  WQ = QQ ? oQ(QQ) : [];
                if (WQ.length) {
                  let QQ = WQ[WQ.length - 1],
                    XQ = sQ ? QQ.right - jQ.left : jQ.right - QQ.left;
                  XQ > zQ && (zQ = XQ, this.minWidth = qQ, this.minWidthFrom = gQ, this.minWidthTo = IQ)
                }
              }
              JQ && rQ == QQ.children.length - 1 && (FQ += JQ.bottom - jQ.bottom), gQ = IQ + wQ.breakAfter
            }
          };
        return PQ(this.tile, 0, null), WQ
      }
      textDirectionAt(QQ) {
        let {
          tile: WQ
        } = this.tile.resolveBlock(QQ, 1);
        return "rtl" == getComputedStyle(WQ.dom).direction ? PW.RTL : PW.LTR
      }
      measureTextSize() {
        let QQ = this.tile.blockTiles((QQ => {
          if (QQ.isLine() && QQ.children.length && QQ.length <= 20) {
            let WQ, XQ = 0;
            for (let wQ of QQ.children) {
              if (!wQ.isText() || /[^ -~]/.test(wQ.text)) return;
              let QQ = oQ(wQ.dom);
              if (1 != QQ.length) return;
              XQ += QQ[0].width, WQ = QQ[0].height
            }
            if (XQ) return {
              lineHeight: QQ.dom.getBoundingClientRect().height,
              charWidth: XQ / QQ.length,
              textHeight: WQ
            }
          }
        }));
        if (QQ) return QQ;
        let WQ, XQ, wQ, qQ = document.createElement("div");
        return qQ.className = "cm-line", qQ.style.width = "99999px", qQ.style.position = "absolute", qQ.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore((() => {
          this.tile.dom.appendChild(qQ);
          let QQ = oQ(qQ.firstChild)[0];
          WQ = qQ.getBoundingClientRect().height, XQ = QQ && QQ.width ? QQ.width / 27 : 7, wQ = QQ && QQ.height ? QQ.height : WQ, qQ.remove()
        })), {
          lineHeight: WQ,
          charWidth: XQ,
          textHeight: wQ
        }
      }
      computeBlockGapDeco() {
        let QQ = [],
          WQ = this.view.viewState;
        for (let XQ = 0, wQ = 0;; wQ++) {
          let qQ = wQ == WQ.viewports.length ? null : WQ.viewports[wQ],
            TQ = qQ ? qQ.from - 1 : this.view.state.doc.length;
          if (TQ > XQ) {
            let wQ = (WQ.lineBlockAt(TQ).bottom - WQ.lineBlockAt(XQ).top) / this.view.scaleY;
            QQ.push(AQ.replace({
              widget: new tX(wQ),
              block: !0,
              inclusive: !0,
              isBlockGap: !0
            }).range(XQ, TQ))
          }
          if (!qQ) break;
          XQ = qQ.to + 1
        }
        return AQ.set(QQ)
      }
      updateDeco() {
        let QQ = 1,
          WQ = this.view.state.facet(QX).map((WQ => (this.dynamicDecorationMap[QQ++] = "function" == typeof WQ) ? WQ(this.view) : WQ)),
          XQ = !1,
          qQ = this.view.state.facet(XX).map(((QQ, WQ) => {
            let wQ = "function" == typeof QQ;
            return wQ && (XQ = !0), wQ ? QQ(this.view) : QQ
          }));
        for (qQ.length && (this.dynamicDecorationMap[QQ++] = XQ, WQ.push(wQ.A.join(qQ))), this.Tw = [this.editContextFormatting, ...WQ, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; QQ < this.Tw.length;) this.dynamicDecorationMap[QQ++] = !1;
        this.blockWrappers = this.view.state.facet(WX).map((QQ => "function" == typeof QQ ? QQ(this.view) : QQ))
      }
      scrollIntoView(QQ) {
        var WQ;
        if (QQ.isSnapshot) {
          let WQ = this.view.viewState.lineBlockAt(QQ.range.head);
          return this.view.scrollDOM.scrollTop = WQ.top - QQ.yMargin, void(this.view.scrollDOM.scrollLeft = QQ.xMargin)
        }
        for (let gQ of this.view.state.facet(tW)) try {
          if (gQ(this.view, QQ.range, QQ)) return !0
        } catch (PQ) {
          xW(this.view.state, PQ, "scroll handler")
        }
        let XQ, {
            range: wQ
          } = QQ,
          qQ = this.coordsAt(wQ.head, null !== (WQ = wQ.assoc) && void 0 !== WQ ? WQ : wQ.empty ? 0 : wQ.head > wQ.anchor ? -1 : 1);
        if (!qQ) return;
        !wQ.empty && (XQ = this.coordsAt(wQ.anchor, wQ.anchor > wQ.head ? -1 : 1)) && (qQ = {
          left: Math.min(qQ.left, XQ.left),
          top: Math.min(qQ.top, XQ.top),
          right: Math.max(qQ.right, XQ.right),
          bottom: Math.max(qQ.bottom, XQ.bottom)
        });
        let TQ = sX(this.view),
          zQ = {
            left: qQ.left - TQ.left,
            top: qQ.top - TQ.top,
            right: qQ.right + TQ.right,
            bottom: qQ.bottom + TQ.bottom
          },
          {
            offsetWidth: sQ,
            offsetHeight: FQ
          } = this.view.scrollDOM;
        if (function(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ) {
            let FQ = QQ.ownerDocument,
              PQ = FQ.defaultView || window;
            for (let gQ = QQ, JQ = !1; gQ && !JQ;)
              if (1 == gQ.nodeType) {
                let QQ, rQ = gQ == FQ.body,
                  IQ = 1,
                  jQ = 1;
                if (rQ) QQ = OQ(PQ);
                else {
                  if (/^(fixed|sticky)$/.test(getComputedStyle(gQ).position) && (JQ = !0), gQ.scrollHeight <= gQ.clientHeight && gQ.scrollWidth <= gQ.clientWidth) {
                    gQ = gQ.assignedSlot || gQ.parentNode;
                    continue
                  }
                  let WQ = gQ.getBoundingClientRect();
                  ({
                    scaleX: IQ,
                    scaleY: jQ
                  } = KQ(gQ, WQ)), QQ = {
                    left: WQ.left,
                    right: WQ.left + gQ.clientWidth * IQ,
                    top: WQ.top,
                    bottom: WQ.top + gQ.clientHeight * jQ
                  }
                }
                let BQ = 0,
                  yQ = 0;
                if ("nearest" == qQ) WQ.top < QQ.top + zQ ? (yQ = WQ.top - (QQ.top + zQ), XQ > 0 && WQ.bottom > QQ.bottom + yQ && (yQ = WQ.bottom - QQ.bottom + zQ)) : WQ.bottom > QQ.bottom - zQ && (yQ = WQ.bottom - QQ.bottom + zQ, XQ < 0 && WQ.top - yQ < QQ.top && (yQ = WQ.top - (QQ.top + zQ)));
                else {
                  let wQ = WQ.bottom - WQ.top,
                    TQ = QQ.bottom - QQ.top;
                  yQ = ("center" == qQ && wQ <= TQ ? WQ.top + wQ / 2 - TQ / 2 : "start" == qQ || "center" == qQ && XQ < 0 ? WQ.top - zQ : WQ.bottom - TQ + zQ) - QQ.top
                }
                if ("nearest" == wQ ? WQ.left < QQ.left + TQ ? (BQ = WQ.left - (QQ.left + TQ), XQ > 0 && WQ.right > QQ.right + BQ && (BQ = WQ.right - QQ.right + TQ)) : WQ.right > QQ.right - TQ && (BQ = WQ.right - QQ.right + TQ, XQ < 0 && WQ.left < QQ.left + BQ && (BQ = WQ.left - (QQ.left + TQ))) : BQ = ("center" == wQ ? WQ.left + (WQ.right - WQ.left) / 2 - (QQ.right - QQ.left) / 2 : "start" == wQ == sQ ? WQ.left - TQ : WQ.right - (QQ.right - QQ.left) + TQ) - QQ.left, BQ || yQ)
                  if (rQ) PQ.scrollBy(BQ, yQ);
                  else {
                    let QQ = 0,
                      XQ = 0;
                    if (yQ) {
                      let QQ = gQ.scrollTop;
                      gQ.scrollTop += yQ / jQ, XQ = (gQ.scrollTop - QQ) * jQ
                    }
                    if (BQ) {
                      let WQ = gQ.scrollLeft;
                      gQ.scrollLeft += BQ / IQ, QQ = (gQ.scrollLeft - WQ) * IQ
                    }
                    WQ = {
                      left: WQ.left - QQ,
                      top: WQ.top - XQ,
                      right: WQ.right - QQ,
                      bottom: WQ.bottom - XQ
                    }, QQ && Math.abs(QQ - BQ) < 1 && (wQ = "nearest"), XQ && Math.abs(XQ - yQ) < 1 && (qQ = "nearest")
                  } if (rQ) break;
                (WQ.top < QQ.top || WQ.bottom > QQ.bottom || WQ.left < QQ.left || WQ.right > QQ.right) && (WQ = {
                  left: Math.max(WQ.left, QQ.left),
                  right: Math.min(WQ.right, QQ.right),
                  top: Math.max(WQ.top, QQ.top),
                  bottom: Math.min(WQ.bottom, QQ.bottom)
                }), gQ = gQ.assignedSlot || gQ.parentNode
              } else {
                if (11 != gQ.nodeType) break;
                gQ = gQ.host
              }
          }(this.view.scrollDOM, zQ, wQ.head < wQ.anchor ? -1 : 1, QQ.x, QQ.y, Math.max(Math.min(QQ.xMargin, sQ), -sQ), Math.max(Math.min(QQ.yMargin, FQ), -FQ), this.view.textDirection == PW.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (qQ.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || qQ.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
          let QQ = this.view.docView.lineAt(wQ.head, 1);
          QQ && QQ.dom.scrollIntoView({
            block: "nearest"
          })
        }
      }
      lineHasWidget(QQ) {
        let WQ = QQ => QQ.isWidget() || QQ.children.some(WQ);
        return WQ(this.tile.resolveBlock(QQ, 1).tile)
      }
      destroy() {
        LX(this.tile)
      }
    }

    function LX(QQ, WQ) {
      let XQ = null === WQ || void 0 === WQ ? void 0 : WQ.get(QQ);
      if (1 != XQ) {
        null == XQ && QQ.destroy();
        for (let XQ of QQ.children) LX(XQ, WQ)
      }
    }

    function kX(QQ, WQ) {
      let XQ = QQ.observer.selectionRange;
      if (!XQ.focusNode) return null;
      let wQ = zW(XQ.focusNode, XQ.focusOffset),
        qQ = sW(XQ.focusNode, XQ.focusOffset),
        TQ = wQ || qQ;
      if (qQ && wQ && qQ.node != wQ.node) {
        let WQ = rX.get(qQ.node);
        if (!WQ || WQ.isText() && WQ.text != qQ.node.nodeValue) TQ = qQ;
        else if (QQ.docView.lastCompositionAfterCursor) {
          let QQ = rX.get(wQ.node);
          !QQ || QQ.isText() && QQ.text != wQ.node.nodeValue || (TQ = qQ)
        }
      }
      if (QQ.docView.lastCompositionAfterCursor = TQ != wQ, !TQ) return null;
      let zQ = WQ - TQ.offset;
      return {
        from: zQ,
        to: zQ + TQ.node.nodeValue.length,
        node: TQ.node
      }
    }
    let fX = class {
      constructor() {
        this.changes = []
      }
      compareRange(QQ, WQ) {
        LQ(QQ, WQ, this.changes)
      }
      comparePoint(QQ, WQ) {
        LQ(QQ, WQ, this.changes)
      }
      boundChange(QQ) {
        LQ(QQ, QQ, this.changes)
      }
    };
    class SX {
      constructor() {
        this.changes = []
      }
      compareRange(QQ, WQ) {
        LQ(QQ, WQ, this.changes)
      }
      comparePoint() {}
      boundChange(QQ) {
        LQ(QQ, QQ, this.changes)
      }
    }
    class tX extends iQ {
      constructor(QQ) {
        super(), this.height = QQ
      }
      toDOM() {
        let QQ = document.createElement("div");
        return QQ.className = "cm-gap", this.updateDOM(QQ), QQ
      }
      eq(QQ) {
        return QQ.height == this.height
      }
      updateDOM(QQ) {
        return QQ.style.height = this.height + "px", !0
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

    function oX(QQ, WQ, XQ) {
      let wQ = QQ.lineBlockAt(WQ);
      if (Array.isArray(wQ.type)) {
        let QQ;
        for (let qQ of wQ.type) {
          if (qQ.from > WQ) break;
          if (!(qQ.to < WQ)) {
            if (qQ.from < WQ && qQ.to > WQ) return qQ;
            QQ && (qQ.type != cQ.Text || QQ.type == qQ.type && !(XQ < 0 ? qQ.from < WQ : qQ.to > WQ)) || (QQ = qQ)
          }
        }
        return QQ || wQ
      }
      return wQ
    }

    function eX(QQ, WQ, XQ, wQ) {
      let qQ = QQ.state.doc.lineAt(WQ.head),
        TQ = QQ.bidiSpans(qQ),
        zQ = QQ.textDirectionAt(qQ.from);
      for (let sQ = WQ, FQ = null;;) {
        let WQ = lW(qQ, TQ, zQ, sQ, XQ),
          PQ = aW;
        if (!WQ) {
          if (qQ.number == (XQ ? QQ.state.doc.lines : 1)) return sQ;
          PQ = "\n", qQ = QQ.state.doc.line(qQ.number + (XQ ? 1 : -1)), TQ = QQ.bidiSpans(qQ), WQ = QQ.visualLineSide(qQ, !XQ)
        }
        if (FQ) {
          if (!FQ(PQ)) return sQ
        } else {
          if (!wQ) return WQ;
          FQ = wQ(PQ)
        }
        sQ = WQ
      }
    }

    function nX(QQ, WQ, XQ) {
      for (;;) {
        let wQ = 0;
        for (let qQ of QQ) qQ.between(WQ - 1, WQ + 1, ((QQ, qQ, TQ) => {
          if (WQ > QQ && WQ < qQ) {
            let TQ = wQ || XQ || (WQ - QQ < qQ - WQ ? -1 : 1);
            WQ = TQ < 0 ? QQ : qQ, wQ = TQ
          }
        }));
        if (!wQ) return WQ
      }
    }

    function xX(QQ, WQ) {
      let XQ = null;
      for (let qQ = 0; qQ < WQ.Qy.length; qQ++) {
        let TQ = WQ.Qy[qQ],
          zQ = null;
        if (TQ.empty) {
          let WQ = nX(QQ, TQ.from, 0);
          WQ != TQ.from && (zQ = wQ.k.cursor(WQ, -1))
        } else {
          let WQ = nX(QQ, TQ.from, -1),
            XQ = nX(QQ, TQ.to, 1);
          WQ == TQ.from && XQ == TQ.to || (zQ = wQ.k.range(TQ.from == TQ.anchor ? WQ : XQ, TQ.from == TQ.head ? WQ : XQ))
        }
        zQ && (XQ || (XQ = WQ.Qy.slice()), XQ[qQ] = zQ)
      }
      return XQ ? wQ.k.create(XQ, WQ.mainIndex) : WQ
    }

    function YX(QQ, WQ, XQ) {
      let qQ = nX(QQ.state.facet(wX).map((WQ => WQ(QQ))), XQ.from, WQ.head > XQ.from ? -1 : 1);
      return qQ == XQ.from ? XQ : wQ.k.cursor(qQ, qQ < XQ.from ? 1 : -1)
    }
    class NX {
      constructor(QQ, WQ) {
        this.pos = QQ, this.assoc = WQ
      }
    }

    function ZX(QQ, WQ, XQ, qQ) {
      let TQ, zQ = QQ.contentDOM.getBoundingClientRect(),
        sQ = zQ.top + QQ.viewState.paddingTop,
        {
          x: FQ,
          y: PQ
        } = WQ,
        gQ = PQ - sQ;
      for (;;) {
        if (gQ < 0) return new NX(0, 1);
        if (gQ > QQ.viewState.docHeight) return new NX(QQ.state.doc.length, -1);
        if (TQ = QQ.elementAtHeight(gQ), null == qQ) break;
        if (TQ.type == cQ.Text) {
          if (qQ < 0 ? TQ.to < QQ.viewport.from : TQ.from > QQ.viewport.to) break;
          let WQ = QQ.docView.coordsAt(qQ < 0 ? TQ.from : TQ.to, qQ > 0 ? -1 : 1);
          if (WQ && (qQ < 0 ? WQ.top <= gQ + sQ : WQ.bottom >= gQ + sQ)) break
        }
        let WQ = QQ.viewState.heightOracle.textHeight / 2;
        gQ = qQ > 0 ? TQ.bottom + WQ : TQ.top - WQ
      }
      if (QQ.viewport.from >= TQ.to || QQ.viewport.to <= TQ.from) {
        if (XQ) return null;
        if (TQ.type == cQ.Text) {
          let WQ = function(QQ, WQ, XQ, qQ, TQ) {
            let zQ = Math.round((qQ - WQ.left) * QQ.defaultCharacterWidth);
            if (QQ.lineWrapping && XQ.height > 1.5 * QQ.defaultLineHeight) {
              let WQ = QQ.viewState.heightOracle.textHeight;
              zQ += Math.floor((TQ - XQ.top - .5 * (QQ.defaultLineHeight - WQ)) / WQ) * QQ.viewState.heightOracle.lineLength
            }
            let sQ = QQ.state.sliceDoc(XQ.from, XQ.to);
            return XQ.from + (0, wQ.X)(sQ, zQ, QQ.state.tabSize)
          }(QQ, zQ, TQ, FQ, PQ);
          return new NX(WQ, WQ == TQ.from ? 1 : -1)
        }
      }
      if (TQ.type != cQ.Text) return gQ < (TQ.top + TQ.bottom) / 2 ? new NX(TQ.from, 1) : new NX(TQ.to, -1);
      let JQ = QQ.docView.lineAt(TQ.from, 2);
      return JQ && JQ.length == TQ.length || (JQ = QQ.docView.lineAt(TQ.from, -2)), new OX(QQ, FQ, PQ, QQ.textDirectionAt(TQ.from)).scanTile(JQ, TQ.from)
    }
    class OX {
      constructor(QQ, WQ, XQ, wQ) {
        this.view = QQ, this.x = WQ, this.y = XQ, this.baseDir = wQ, this.line = null, this.spans = null
      }
      bidiSpansAt(QQ) {
        return (!this.line || this.line.from > QQ || this.line.to < QQ) && (this.line = this.view.state.doc.lineAt(QQ), this.spans = this.view.bidiSpans(this.line)), this
      }
      baseDirAt(QQ, WQ) {
        let {
          line: XQ,
          spans: wQ
        } = this.bidiSpansAt(QQ);
        return wQ[pW.find(wQ, QQ - XQ.from, -1, WQ)].level == this.baseDir
      }
      dirAt(QQ, WQ) {
        let {
          line: XQ,
          spans: wQ
        } = this.bidiSpansAt(QQ);
        return wQ[pW.find(wQ, QQ - XQ.from, -1, WQ)].dir
      }
      bidiIn(QQ, WQ) {
        let {
          spans: XQ,
          line: wQ
        } = this.bidiSpansAt(QQ);
        return XQ.length > 1 || XQ.length && (XQ[0].level != this.baseDir || XQ[0].to + wQ.from < WQ)
      }
      scan(QQ, WQ) {
        let XQ, wQ, qQ, TQ = 0,
          zQ = QQ.length - 1,
          sQ = new Set,
          FQ = this.bidiIn(QQ[0], QQ[zQ]),
          PQ = -1,
          gQ = 1e9;
        QQ: for (; TQ < zQ;) {
          let JQ = zQ - TQ,
            rQ = TQ + zQ >> 1;
          WQ: if (sQ.has(rQ)) {
            let QQ = TQ + Math.floor(Math.random() * JQ);
            for (let WQ = 0; WQ < JQ; WQ++) {
              if (!sQ.has(QQ)) {
                rQ = QQ;
                break WQ
              }
              QQ++, QQ == zQ && (QQ = TQ)
            }
            break QQ
          } sQ.add(rQ);
          let IQ = WQ(rQ);
          if (IQ)
            for (let WQ = 0; WQ < IQ.length; WQ++) {
              let sQ = IQ[WQ],
                JQ = 0;
              if (!(0 == sQ.width && IQ.length > 1)) {
                if (sQ.bottom < this.y)(!XQ || XQ.bottom < sQ.bottom) && (XQ = sQ), JQ = 1;
                else if (sQ.top > this.y)(!wQ || wQ.top > sQ.top) && (wQ = sQ), JQ = -1;
                else {
                  let QQ = sQ.left > this.x ? this.x - sQ.left : sQ.right < this.x ? this.x - sQ.right : 0,
                    WQ = Math.abs(QQ);
                  WQ < gQ && (PQ = rQ, gQ = WQ, qQ = sQ), QQ && (JQ = QQ < 0 == (this.baseDir == PW.LTR) ? -1 : 1)
                } - 1 != JQ || FQ && !this.baseDirAt(QQ[rQ], 1) ? 1 != JQ || FQ && !this.baseDirAt(QQ[rQ + 1], -1) || (TQ = rQ + 1) : zQ = rQ
              }
            }
        }
        if (!qQ) {
          let qQ = XQ && (!wQ || this.y - XQ.bottom < wQ.top - this.y) ? XQ : wQ;
          return this.y = (qQ.top + qQ.bottom) / 2, this.scan(QQ, WQ)
        }
        if (gQ) {
          if (XQ && XQ.bottom > qQ.top) return this.y = XQ.bottom - 1, this.scan(QQ, WQ);
          if (wQ && wQ.top < qQ.bottom) return this.y = wQ.top + 1, this.scan(QQ, WQ)
        }
        let JQ = (FQ ? this.dirAt(QQ[PQ], 1) : this.baseDir) == PW.LTR;
        return {
          i: PQ,
          after: this.x > (qQ.left + qQ.right) / 2 == JQ
        }
      }
      scanText(QQ, WQ) {
        let XQ = [];
        for (let TQ = 0; TQ < QQ.length; TQ = (0, wQ.W)(QQ.text, TQ)) XQ.push(WQ + TQ);
        XQ.push(WQ + QQ.length);
        let qQ = this.scan(XQ, (wQ => {
          let qQ = XQ[wQ] - WQ,
            TQ = XQ[wQ + 1] - WQ;
          return wW(QQ.dom, qQ, TQ).getClientRects()
        }));
        return qQ.after ? new NX(XQ[qQ.i + 1], -1) : new NX(XQ[qQ.i], 1)
      }
      scanTile(QQ, WQ) {
        if (!QQ.length) return new NX(WQ, 1);
        if (1 == QQ.children.length) {
          let XQ = QQ.children[0];
          if (XQ.isText()) return this.scanText(XQ, WQ);
          if (XQ.isComposite()) return this.scanTile(XQ, WQ)
        }
        let XQ = [WQ];
        for (let zQ = 0, sQ = WQ; zQ < QQ.children.length; zQ++) XQ.push(sQ += QQ.children[zQ].length);
        let wQ = this.scan(XQ, (WQ => {
            let XQ = QQ.children[WQ];
            return 48 & XQ.flags ? null : (1 == XQ.dom.nodeType ? XQ.dom : wW(XQ.dom, 0, XQ.length)).getClientRects()
          })),
          qQ = QQ.children[wQ.i],
          TQ = XQ[wQ.i];
        return qQ.isText() ? this.scanText(qQ, TQ) : qQ.isComposite() ? this.scanTile(qQ, TQ) : wQ.after ? new NX(XQ[wQ.i + 1], -1) : new NX(TQ, 1)
      }
    }
    const KX = "\uffff";
    class mX {
      constructor(QQ, WQ) {
        this.points = QQ, this.view = WQ, this.text = "", this.lineSeparator = WQ.state.facet(wQ.l.lineSeparator)
      }
      append(QQ) {
        this.text += QQ
      }
      lineBreak() {
        this.text += KX
      }
      readRange(QQ, WQ) {
        if (!QQ) return this;
        let XQ = QQ.parentNode;
        for (let wQ = QQ;;) {
          this.findPointBefore(XQ, wQ);
          let QQ = this.text.length;
          this.readNode(wQ);
          let qQ = rX.get(wQ),
            TQ = wQ.nextSibling;
          if (TQ == WQ) {
            (null === qQ || void 0 === qQ ? void 0 : qQ.breakAfter) && !TQ && XQ != this.view.contentDOM && this.lineBreak();
            break
          }
          let zQ = rX.get(TQ);
          (qQ && zQ ? qQ.breakAfter : (qQ ? qQ.breakAfter : xQ(wQ)) || xQ(TQ) && ("BR" != wQ.nodeName || (null === qQ || void 0 === qQ ? void 0 : qQ.isWidget())) && this.text.length > QQ) && !Qw(TQ, WQ) && this.lineBreak(), wQ = TQ
        }
        return this.findPointBefore(XQ, WQ), this
      }
      readTextNode(QQ) {
        let WQ = QQ.nodeValue;
        for (let XQ of this.points) XQ.node == QQ && (XQ.pos = this.text.length + Math.min(XQ.offset, WQ.length));
        for (let XQ = 0, wQ = this.lineSeparator ? null : /\r\n?|\n/g;;) {
          let qQ, TQ = -1,
            zQ = 1;
          if (this.lineSeparator ? (TQ = WQ.indexOf(this.lineSeparator, XQ), zQ = this.lineSeparator.length) : (qQ = wQ.exec(WQ)) && (TQ = qQ.index, zQ = qQ[0].length), this.append(WQ.slice(XQ, TQ < 0 ? WQ.length : TQ)), TQ < 0) break;
          if (this.lineBreak(), zQ > 1)
            for (let WQ of this.points) WQ.node == QQ && WQ.pos > this.text.length && (WQ.pos -= zQ - 1);
          XQ = TQ + zQ
        }
      }
      readNode(QQ) {
        let WQ = rX.get(QQ),
          XQ = WQ && WQ.overrideDOMText;
        if (null != XQ) {
          this.findPointInside(QQ, XQ.length);
          for (let QQ = XQ.iter(); !QQ.next().done;) QQ.lineBreak ? this.lineBreak() : this.append(QQ.value)
        } else 3 == QQ.nodeType ? this.readTextNode(QQ) : "BR" == QQ.nodeName ? QQ.nextSibling && this.lineBreak() : 1 == QQ.nodeType && this.readRange(QQ.firstChild, null)
      }
      findPointBefore(QQ, WQ) {
        for (let XQ of this.points) XQ.node == QQ && QQ.childNodes[XQ.offset] == WQ && (XQ.pos = this.text.length)
      }
      findPointInside(QQ, WQ) {
        for (let XQ of this.points)(3 == QQ.nodeType ? XQ.node == QQ : QQ.contains(XQ.node)) && (XQ.pos = this.text.length + (MX(QQ, XQ.node, XQ.offset) ? WQ : 0))
      }
    }

    function MX(QQ, WQ, XQ) {
      for (;;) {
        if (!WQ || XQ < NQ(WQ)) return !1;
        if (WQ == QQ) return !0;
        XQ = nQ(WQ) + 1, WQ = WQ.parentNode
      }
    }

    function Qw(QQ, WQ) {
      let XQ;
      for (; QQ != WQ && QQ; QQ = QQ.nextSibling) {
        let WQ = rX.get(QQ);
        if (!(null === WQ || void 0 === WQ ? void 0 : WQ.isWidget())) return !1;
        WQ && (XQ || (XQ = [])).push(WQ)
      }
      if (XQ)
        for (let wQ of XQ) {
          let QQ = wQ.overrideDOMText;
          if (null === QQ || void 0 === QQ ? void 0 : QQ.length) return !1
        }
      return !0
    }
    class Ww {
      constructor(QQ, WQ) {
        this.node = QQ, this.offset = WQ, this.pos = -1
      }
    }
    class Xw {
      constructor(QQ, WQ, XQ, qQ) {
        this.typeOver = qQ, this.bounds = null, this.text = "", this.domChanged = WQ > -1;
        let {
          impreciseHead: TQ,
          impreciseAnchor: zQ
        } = QQ.docView, sQ = QQ.state.selection;
        if (QQ.state.readOnly && WQ > -1) this.newSel = null;
        else if (WQ > -1 && (this.bounds = ww(QQ.docView.tile, WQ, XQ, 0))) {
          let WQ = TQ || zQ ? [] : function(QQ) {
              let WQ = [];
              if (QQ.root.activeElement != QQ.contentDOM) return WQ;
              let {
                anchorNode: XQ,
                anchorOffset: wQ,
                focusNode: qQ,
                focusOffset: TQ
              } = QQ.observer.selectionRange;
              XQ && (WQ.push(new Ww(XQ, wQ)), qQ == XQ && TQ == wQ || WQ.push(new Ww(qQ, TQ)));
              return WQ
            }(QQ),
            XQ = new mX(WQ, QQ);
          XQ.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = XQ.text, this.newSel = function(QQ, WQ) {
            if (0 == QQ.length) return null;
            let XQ = QQ[0].pos,
              qQ = 2 == QQ.length ? QQ[1].pos : XQ;
            return XQ > -1 && qQ > -1 ? wQ.k.single(XQ + WQ, qQ + WQ) : null
          }(WQ, this.bounds.from)
        } else {
          let WQ = QQ.observer.selectionRange,
            XQ = TQ && TQ.node == WQ.focusNode && TQ.offset == WQ.focusOffset || !SQ(QQ.contentDOM, WQ.focusNode) ? sQ.main.head : QQ.docView.posFromDOM(WQ.focusNode, WQ.focusOffset),
            qQ = zQ && zQ.node == WQ.anchorNode && zQ.offset == WQ.anchorOffset || !SQ(QQ.contentDOM, WQ.anchorNode) ? sQ.main.anchor : QQ.docView.posFromDOM(WQ.anchorNode, WQ.anchorOffset),
            FQ = QQ.viewport;
          if ((vQ.ios || vQ.chrome) && sQ.main.empty && XQ != qQ && (FQ.from > 0 || FQ.to < QQ.state.doc.length)) {
            let WQ = Math.min(XQ, qQ),
              wQ = Math.max(XQ, qQ),
              TQ = FQ.from - WQ,
              zQ = FQ.to - wQ;
            0 != TQ && 1 != TQ && 0 != WQ || 0 != zQ && -1 != zQ && wQ != QQ.state.doc.length || (XQ = 0, qQ = QQ.state.doc.length)
          }
          if (QQ.inputState.composing > -1 && sQ.Qy.length > 1) this.newSel = sQ.replaceRange(wQ.k.range(qQ, XQ));
          else if (QQ.lineWrapping && qQ == XQ && (!sQ.main.empty || sQ.main.head != XQ) && QQ.inputState.lastTouchTime > Date.now() - 100) {
            let WQ = QQ.coordsAtPos(XQ, -1),
              qQ = 0;
            WQ && (qQ = QQ.inputState.lastTouchY <= WQ.bottom ? -1 : 1), this.newSel = wQ.k.create([wQ.k.cursor(XQ, qQ)])
          } else this.newSel = wQ.k.single(qQ, XQ)
        }
      }
    }

    function ww(QQ, WQ, XQ, wQ) {
      if (QQ.isComposite()) {
        let qQ = -1,
          TQ = -1,
          zQ = -1,
          sQ = -1;
        for (let FQ = 0, PQ = wQ, gQ = wQ; FQ < QQ.children.length; FQ++) {
          let wQ = QQ.children[FQ],
            JQ = PQ + wQ.length;
          if (PQ < WQ && JQ > XQ) return ww(wQ, WQ, XQ, PQ);
          if (JQ >= WQ && -1 == qQ && (qQ = FQ, TQ = PQ), PQ > XQ && wQ.dom.parentNode == QQ.dom) {
            zQ = FQ, sQ = gQ;
            break
          }
          gQ = JQ, PQ = JQ + wQ.breakAfter
        }
        return {
          from: TQ,
          to: sQ < 0 ? wQ + QQ.length : sQ,
          startDOM: (qQ ? QQ.children[qQ - 1].dom.nextSibling : null) || QQ.dom.firstChild,
          endDOM: zQ < QQ.children.length && zQ >= 0 ? QQ.children[zQ].dom : null
        }
      }
      return QQ.isText() ? {
        from: wQ,
        to: wQ + QQ.length,
        startDOM: QQ.dom,
        endDOM: QQ.dom.nextSibling
      } : null
    }

    function qw(QQ, WQ) {
      let XQ, {
          newSel: qQ
        } = WQ,
        {
          state: TQ
        } = QQ,
        zQ = TQ.selection.main,
        sQ = QQ.inputState.lastKeyTime > Date.now() - 100 ? QQ.inputState.lastKeyCode : -1;
      if (WQ.bounds) {
        let {
          from: QQ,
          to: qQ
        } = WQ.bounds, FQ = zQ.from, PQ = null;
        (8 === sQ || vQ.android && WQ.text.length < qQ - QQ) && (FQ = zQ.to, PQ = "end");
        let gQ, JQ, rQ = TQ.doc.sliceString(QQ, qQ, KX);
        !zQ.empty && zQ.from >= QQ && zQ.to <= qQ && (WQ.typeOver || rQ != WQ.text) && rQ.slice(0, zQ.from - QQ) == WQ.text.slice(0, zQ.from - QQ) && rQ.slice(zQ.to - QQ) == WQ.text.slice(gQ = WQ.text.length - (rQ.length - (zQ.to - QQ))) ? XQ = {
          from: zQ.from,
          to: zQ.to,
          insert: wQ.M.of(WQ.text.slice(zQ.from - QQ, gQ).split(KX))
        } : (JQ = zw(rQ, WQ.text, FQ - QQ, PQ)) && (vQ.chrome && 13 == sQ && JQ.toB == JQ.from + 2 && WQ.text.slice(JQ.from, JQ.toB) == KX + KX && JQ.toB--, XQ = {
          from: QQ + JQ.from,
          to: QQ + JQ.toA,
          insert: wQ.M.of(WQ.text.slice(JQ.from, JQ.toB).split(KX))
        })
      } else qQ && (!QQ.hasFocus && TQ.facet(YW) || sw(qQ, zQ)) && (qQ = null);
      if (!XQ && !qQ) return !1;
      if ((vQ.mac || vQ.android) && XQ && XQ.from == XQ.to && XQ.from == zQ.head - 1 && /^\. ?$/.test(XQ.insert.toString()) && "off" == QQ.contentDOM.getAttribute("autocorrect") ? (qQ && 2 == XQ.insert.length && (qQ = wQ.k.single(qQ.main.anchor - 1, qQ.main.head - 1)), XQ = {
          from: XQ.from,
          to: XQ.to,
          insert: wQ.M.of([XQ.insert.toString().replace(".", " ")])
        }) : TQ.doc.lineAt(zQ.from).to < zQ.to && QQ.docView.lineHasWidget(zQ.to) && QQ.inputState.insertingTextAt > Date.now() - 50 ? XQ = {
          from: zQ.from,
          to: zQ.to,
          insert: TQ.toText(QQ.inputState.insertingText)
        } : vQ.chrome && XQ && XQ.from == XQ.to && XQ.from == zQ.head && "\n " == XQ.insert.toString() && QQ.lineWrapping && (qQ && (qQ = wQ.k.single(qQ.main.anchor - 1, qQ.main.head - 1)), XQ = {
          from: zQ.from,
          to: zQ.to,
          insert: wQ.M.of([" "])
        }), XQ) return Tw(QQ, XQ, qQ, sQ);
      if (qQ && !sw(qQ, zQ)) {
        let WQ = !1,
          XQ = "select";
        return QQ.inputState.lastSelectionTime > Date.now() - 50 && ("select" == QQ.inputState.lastSelectionOrigin && (WQ = !0), XQ = QQ.inputState.lastSelectionOrigin, "select.pointer" == XQ && (qQ = xX(TQ.facet(wX).map((WQ => WQ(QQ))), qQ))), QQ.dispatch({
          selection: qQ,
          scrollIntoView: WQ,
          userEvent: XQ
        }), !0
      }
      return !1
    }

    function Tw(QQ, WQ, XQ) {
      let qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
      if (vQ.ios && QQ.inputState.flushIOSKey(WQ)) return !0;
      let TQ = QQ.state.selection.main;
      if (vQ.android && (WQ.to == TQ.to && (WQ.from == TQ.from || WQ.from == TQ.from - 1 && " " == QQ.state.sliceDoc(WQ.from, TQ.from)) && 1 == WQ.insert.length && 2 == WQ.insert.lines && qW(QQ.contentDOM, "Enter", 13) || (WQ.from == TQ.from - 1 && WQ.to == TQ.to && 0 == WQ.insert.length || 8 == qQ && WQ.insert.length < WQ.to - WQ.from && WQ.to > TQ.head) && qW(QQ.contentDOM, "Backspace", 8) || WQ.from == TQ.from && WQ.to == TQ.to + 1 && 0 == WQ.insert.length && qW(QQ.contentDOM, "Delete", 46))) return !0;
      let zQ, sQ = WQ.insert.toString();
      QQ.inputState.composing >= 0 && QQ.inputState.composing++;
      let FQ = () => zQ || (zQ = function(QQ, WQ, XQ) {
        let qQ, TQ = QQ.state,
          zQ = TQ.selection.main,
          sQ = -1;
        if (WQ.from == WQ.to && WQ.from < zQ.from || WQ.from > zQ.to) {
          let XQ = WQ.from < zQ.from ? -1 : 1,
            wQ = XQ < 0 ? zQ.from : zQ.to,
            qQ = nX(TQ.facet(wX).map((WQ => WQ(QQ))), wQ, XQ);
          WQ.from == qQ && (sQ = qQ)
        }
        if (sQ > -1) qQ = {
          changes: WQ,
          selection: wQ.k.cursor(WQ.from + WQ.insert.length, -1)
        };
        else if (WQ.from >= zQ.from && WQ.to <= zQ.to && WQ.to - WQ.from >= (zQ.to - zQ.from) / 3 && (!XQ || XQ.main.empty && XQ.main.from == WQ.from + WQ.insert.length) && QQ.inputState.composing < 0) {
          let XQ = zQ.from < WQ.from ? TQ.sliceDoc(zQ.from, WQ.from) : "",
            wQ = zQ.to > WQ.to ? TQ.sliceDoc(WQ.to, zQ.to) : "";
          qQ = TQ.replaceSelection(QQ.state.toText(XQ + WQ.insert.sliceString(0, void 0, QQ.state.lineBreak) + wQ))
        } else {
          let sQ = TQ.changes(WQ),
            FQ = XQ && XQ.main.to <= sQ.newLength ? XQ.main : void 0;
          if (TQ.selection.Qy.length > 1 && (QQ.inputState.composing >= 0 || QQ.inputState.compositionPendingChange) && WQ.to <= zQ.to + 10 && WQ.to >= zQ.to - 10) {
            let PQ, gQ = QQ.state.sliceDoc(WQ.from, WQ.to),
              JQ = XQ && kX(QQ, XQ.main.head);
            if (JQ) {
              let QQ = WQ.insert.length - (WQ.to - WQ.from);
              PQ = {
                from: JQ.from,
                to: JQ.to - QQ
              }
            } else PQ = QQ.state.doc.lineAt(zQ.head);
            let rQ = zQ.to - WQ.to;
            qQ = TQ.changeByRange((XQ => {
              if (XQ.from == zQ.from && XQ.to == zQ.to) return {
                changes: sQ,
                range: FQ || XQ.map(sQ)
              };
              let qQ = XQ.to - rQ,
                JQ = qQ - gQ.length;
              if (QQ.state.sliceDoc(JQ, qQ) != gQ || qQ >= PQ.from && JQ <= PQ.to) return {
                range: XQ
              };
              let IQ = TQ.changes({
                  from: JQ,
                  to: qQ,
                  insert: WQ.insert
                }),
                jQ = XQ.to - zQ.to;
              return {
                changes: IQ,
                range: FQ ? wQ.k.range(Math.max(0, FQ.anchor + jQ), Math.max(0, FQ.head + jQ)) : XQ.map(IQ)
              }
            }))
          } else qQ = {
            changes: sQ,
            selection: FQ && TQ.selection.replaceRange(FQ)
          }
        }
        let FQ = "input.type";
        (QQ.composing || QQ.inputState.compositionPendingChange && QQ.inputState.compositionEndedAt > Date.now() - 50) && (QQ.inputState.compositionPendingChange = !1, FQ += ".compose", QQ.inputState.compositionFirstChange && (FQ += ".start", QQ.inputState.compositionFirstChange = !1));
        return TQ.update(qQ, {
          userEvent: FQ,
          scrollIntoView: !0
        })
      }(QQ, WQ, XQ));
      return QQ.state.facet(CW).some((XQ => XQ(QQ, WQ.from, WQ.to, sQ, FQ))) || QQ.dispatch(FQ()), !0
    }

    function zw(QQ, WQ, XQ, wQ) {
      let qQ = Math.min(QQ.length, WQ.length),
        TQ = 0;
      for (; TQ < qQ && QQ.charCodeAt(TQ) == WQ.charCodeAt(TQ);) TQ++;
      if (TQ == qQ && QQ.length == WQ.length) return null;
      let zQ = QQ.length,
        sQ = WQ.length;
      for (; zQ > 0 && sQ > 0 && QQ.charCodeAt(zQ - 1) == WQ.charCodeAt(sQ - 1);) zQ--, sQ--;
      if ("end" == wQ) {
        XQ -= zQ + Math.max(0, TQ - Math.min(zQ, sQ)) - TQ
      }
      if (zQ < TQ && QQ.length < WQ.length) {
        TQ -= XQ <= TQ && XQ >= zQ ? TQ - XQ : 0, sQ = TQ + (sQ - zQ), zQ = TQ
      } else if (sQ < TQ) {
        TQ -= XQ <= TQ && XQ >= sQ ? TQ - XQ : 0, zQ = TQ + (zQ - sQ), sQ = TQ
      }
      return {
        from: TQ,
        toA: zQ,
        toB: sQ
      }
    }

    function sw(QQ, WQ) {
      return WQ.head == QQ.main.head && WQ.anchor == QQ.main.anchor
    }
    class Fw {
      setSelectionOrigin(QQ) {
        this.lastSelectionOrigin = QQ, this.lastSelectionTime = Date.now()
      }
      constructor(QQ) {
        this.view = QQ, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = QQ.hasFocus, vQ.safari && QQ.contentDOM.addEventListener("input", (() => null)), vQ.gecko && function(QQ) {
          Ew.has(QQ) || (Ew.add(QQ), QQ.addEventListener("copy", (() => {})), QQ.addEventListener("cut", (() => {})))
        }(QQ.contentDOM.ownerDocument)
      }
      handleEvent(QQ) {
        (function(QQ, WQ) {
          if (!WQ.bubbles) return !0;
          if (WQ.defaultPrevented) return !1;
          for (let XQ, wQ = WQ.target; wQ != QQ.contentDOM; wQ = wQ.parentNode)
            if (!wQ || 11 == wQ.nodeType || (XQ = rX.get(wQ)) && XQ.isWidget() && !XQ.isHidden && XQ.widget.ignoreEvent(WQ)) return !1;
          return !0
        })(this.view, QQ) && !this.ignoreDuringComposition(QQ) && ("keydown" == QQ.type && this.keydown(QQ) || (0 != this.view.updateState ? Promise.resolve().then((() => this.runHandlers(QQ.type, QQ))) : this.runHandlers(QQ.type, QQ)))
      }
      runHandlers(QQ, WQ) {
        let XQ = this.handlers[QQ];
        if (XQ) {
          for (let QQ of XQ.observers) QQ(this.view, WQ);
          for (let QQ of XQ.handlers) {
            if (WQ.defaultPrevented) break;
            if (QQ(this.view, WQ)) {
              WQ.preventDefault();
              break
            }
          }
        }
      }
      ensureHandlers(QQ) {
        let WQ = gw(QQ),
          XQ = this.handlers,
          wQ = this.view.contentDOM;
        for (let qQ in WQ)
          if ("scroll" != qQ) {
            let QQ = !WQ[qQ].handlers.length,
              TQ = XQ[qQ];
            TQ && QQ != !TQ.handlers.length && (wQ.removeEventListener(qQ, this.handleEvent), TQ = null), TQ || wQ.addEventListener(qQ, this.handleEvent, {
              passive: QQ
            })
          } for (let qQ in XQ) "scroll" == qQ || WQ[qQ] || wQ.removeEventListener(qQ, this.handleEvent);
        this.handlers = WQ
      }
      keydown(QQ) {
        if (this.lastKeyCode = QQ.keyCode, this.lastKeyTime = Date.now(), 9 == QQ.keyCode && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return !0;
        if (this.tabFocusMode > 0 && 27 != QQ.keyCode && Iw.indexOf(QQ.keyCode) < 0 && (this.tabFocusMode = -1), vQ.android && vQ.chrome && !QQ.synthetic && (13 == QQ.keyCode || 8 == QQ.keyCode)) return this.view.observer.delayAndroidKey(QQ.key, QQ.keyCode), !0;
        let WQ;
        return !vQ.ios || QQ.synthetic || QQ.altKey || QQ.metaKey || QQ.shiftKey || !((WQ = Jw.find((WQ => WQ.keyCode == QQ.keyCode))) && !QQ.ctrlKey || rw.indexOf(QQ.key) > -1 && QQ.ctrlKey) ? (229 != QQ.keyCode && this.view.observer.forceFlush(), !1) : (this.pendingIOSKey = WQ || QQ, setTimeout((() => this.flushIOSKey()), 250), !0)
      }
      flushIOSKey(QQ) {
        let WQ = this.pendingIOSKey;
        return !!WQ && (!("Enter" == WQ.key && QQ && QQ.from < QQ.to && /^\S+$/.test(QQ.insert.toString())) && (this.pendingIOSKey = void 0, qW(this.view.contentDOM, WQ.key, WQ.keyCode, WQ instanceof KeyboardEvent ? WQ : void 0)))
      }
      ignoreDuringComposition(QQ) {
        return !(!/^key/.test(QQ.type) || QQ.synthetic) && (this.composing > 0 || !!(vQ.safari && !vQ.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = !1, !0))
      }
      startMouseSelection(QQ) {
        this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = QQ
      }
      update(QQ) {
        this.view.observer.update(QQ), this.mouseSelection && this.mouseSelection.update(QQ), this.draggedContent && QQ.docChanged && (this.draggedContent = this.draggedContent.map(QQ.changes)), QQ.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0)
      }
      destroy() {
        this.mouseSelection && this.mouseSelection.destroy()
      }
    }

    function Pw(QQ, WQ) {
      return (XQ, wQ) => {
        try {
          return WQ.call(QQ, wQ, XQ)
        } catch (qQ) {
          xW(XQ.state, qQ)
        }
      }
    }

    function gw(QQ) {
      let WQ = Object.create(null);

      function XQ(QQ) {
        return WQ[QQ] || (WQ[QQ] = {
          observers: [],
          handlers: []
        })
      }
      for (let wQ of QQ) {
        let QQ = wQ.spec,
          WQ = QQ && QQ.plugin.domEventHandlers,
          qQ = QQ && QQ.plugin.domEventObservers;
        if (WQ)
          for (let TQ in WQ) {
            let QQ = WQ[TQ];
            QQ && XQ(TQ).handlers.push(Pw(wQ.value, QQ))
          }
        if (qQ)
          for (let TQ in qQ) {
            let QQ = qQ[TQ];
            QQ && XQ(TQ).observers.push(Pw(wQ.value, QQ))
          }
      }
      for (let wQ in yw) XQ(wQ).handlers.push(yw[wQ]);
      for (let wQ in Vw) XQ(wQ).observers.push(Vw[wQ]);
      return WQ
    }
    const Jw = [{
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
      rw = "dthko",
      Iw = [16, 17, 18, 20, 91, 92, 224, 225];

    function jw(QQ) {
      return .7 * Math.max(0, QQ) + 8
    }
    class Bw {
      constructor(QQ, WQ, XQ, qQ) {
        this.view = QQ, this.startEvent = WQ, this.style = XQ, this.mustSelect = qQ, this.scrollSpeed = {
          x: 0,
          y: 0
        }, this.scrolling = -1, this.lastEvent = WQ, this.scrollParents = mQ(QQ.contentDOM), this.atoms = QQ.state.facet(wX).map((WQ => WQ(QQ)));
        let TQ = QQ.contentDOM.ownerDocument;
        TQ.addEventListener("mousemove", this.move = this.move.bind(this)), TQ.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = WQ.shiftKey, this.multiple = QQ.state.facet(wQ.l.allowMultipleSelections) && function(QQ, WQ) {
          let XQ = QQ.state.facet(iW);
          return XQ.length ? XQ[0](WQ) : vQ.mac ? WQ.metaKey : WQ.ctrlKey
        }(QQ, WQ), this.dragging = !(! function(QQ, WQ) {
          let {
            main: XQ
          } = QQ.state.selection;
          if (XQ.empty) return !1;
          let wQ = fQ(QQ.root);
          if (!wQ || 0 == wQ.rangeCount) return !0;
          let qQ = wQ.getRangeAt(0).getClientRects();
          for (let TQ = 0; TQ < qQ.length; TQ++) {
            let QQ = qQ[TQ];
            if (QQ.left <= WQ.clientX && QQ.right >= WQ.clientX && QQ.top <= WQ.clientY && QQ.bottom >= WQ.clientY) return !0
          }
          return !1
        }(QQ, WQ) || 1 != aw(WQ)) && null
      }
      start(QQ) {
        !1 === this.dragging && this.select(QQ)
      }
      move(QQ) {
        if (0 == QQ.buttons) return this.destroy();
        if (this.dragging || null == this.dragging && (WQ = this.startEvent, XQ = QQ, Math.max(Math.abs(WQ.clientX - XQ.clientX), Math.abs(WQ.clientY - XQ.clientY)) < 10)) return;
        var WQ, XQ;
        this.select(this.lastEvent = QQ);
        let wQ = 0,
          qQ = 0,
          TQ = 0,
          zQ = 0,
          sQ = this.view.win.innerWidth,
          FQ = this.view.win.innerHeight;
        this.scrollParents.x && ({
          left: TQ,
          right: sQ
        } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({
          top: zQ,
          bottom: FQ
        } = this.scrollParents.y.getBoundingClientRect());
        let PQ = sX(this.view);
        QQ.clientX - PQ.left <= TQ + 6 ? wQ = -jw(TQ - QQ.clientX) : QQ.clientX + PQ.right >= sQ - 6 && (wQ = jw(QQ.clientX - sQ)), QQ.clientY - PQ.top <= zQ + 6 ? qQ = -jw(zQ - QQ.clientY) : QQ.clientY + PQ.bottom >= FQ - 6 && (qQ = jw(QQ.clientY - FQ)), this.setScrollSpeed(wQ, qQ)
      }
      up(QQ) {
        null == this.dragging && this.select(this.lastEvent), this.dragging || QQ.preventDefault(), this.destroy()
      }
      destroy() {
        this.setScrollSpeed(0, 0);
        let QQ = this.view.contentDOM.ownerDocument;
        QQ.removeEventListener("mousemove", this.move), QQ.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null
      }
      setScrollSpeed(QQ, WQ) {
        this.scrollSpeed = {
          x: QQ,
          y: WQ
        }, QQ || WQ ? this.scrolling < 0 && (this.scrolling = setInterval((() => this.scroll()), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1)
      }
      scroll() {
        let {
          x: QQ,
          y: WQ
        } = this.scrollSpeed;
        QQ && this.scrollParents.x && (this.scrollParents.x.scrollLeft += QQ, QQ = 0), WQ && this.scrollParents.y && (this.scrollParents.y.scrollTop += WQ, WQ = 0), (QQ || WQ) && this.view.win.scrollBy(QQ, WQ), !1 === this.dragging && this.select(this.lastEvent)
      }
      select(QQ) {
        let {
          view: WQ
        } = this, XQ = xX(this.atoms, this.style.get(QQ, this.extend, this.multiple));
        !this.mustSelect && XQ.eq(WQ.state.selection, !1 === this.dragging) || this.view.dispatch({
          selection: XQ,
          userEvent: "select.pointer"
        }), this.mustSelect = !1
      }
      update(QQ) {
        QQ.transactions.some((QQ => QQ.isUserEvent("input.type"))) ? this.destroy() : this.style.update(QQ) && setTimeout((() => this.select(this.lastEvent)), 20)
      }
    }
    const yw = Object.create(null),
      Vw = Object.create(null),
      Dw = vQ.ie && vQ.ie_version < 15 || vQ.ios && vQ.webkit_version < 604;

    function pw(QQ, WQ, XQ) {
      for (let wQ of QQ.facet(WQ)) XQ = wQ(XQ, QQ);
      return XQ
    }

    function Gw(QQ, WQ) {
      WQ = pw(QQ.state, LW, WQ);
      let XQ, {
          state: qQ
        } = QQ,
        TQ = 1,
        zQ = qQ.toText(WQ),
        sQ = zQ.lines == qQ.selection.Qy.length;
      if (null != hw && qQ.selection.Qy.every((QQ => QQ.empty)) && hw == zQ.toString()) {
        let QQ = -1;
        XQ = qQ.changeByRange((XQ => {
          let FQ = qQ.doc.lineAt(XQ.from);
          if (FQ.from == QQ) return {
            range: XQ
          };
          QQ = FQ.from;
          let PQ = qQ.toText((sQ ? zQ.line(TQ++).text : WQ) + qQ.lineBreak);
          return {
            changes: {
              from: FQ.from,
              insert: PQ
            },
            range: wQ.k.cursor(XQ.from + PQ.length)
          }
        }))
      } else XQ = sQ ? qQ.changeByRange((QQ => {
        let WQ = zQ.line(TQ++);
        return {
          changes: {
            from: QQ.from,
            to: QQ.to,
            insert: WQ.text
          },
          range: wQ.k.cursor(QQ.from + WQ.length)
        }
      })) : qQ.replaceSelection(zQ);
      QQ.dispatch(XQ, {
        userEvent: "input.paste",
        scrollIntoView: !0
      })
    }

    function Uw(QQ, WQ, XQ, qQ) {
      if (1 == qQ) return wQ.k.cursor(WQ, XQ);
      if (2 == qQ) return function(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          qQ = QQ.charCategorizer(WQ),
          TQ = QQ.doc.lineAt(WQ),
          zQ = WQ - TQ.from;
        if (0 == TQ.length) return wQ.k.cursor(WQ);
        0 == zQ ? XQ = 1 : zQ == TQ.length && (XQ = -1);
        let sQ = zQ,
          FQ = zQ;
        XQ < 0 ? sQ = (0, wQ.W)(TQ.text, zQ, !1) : FQ = (0, wQ.W)(TQ.text, zQ);
        let PQ = qQ(TQ.text.slice(sQ, FQ));
        for (; sQ > 0;) {
          let QQ = (0, wQ.W)(TQ.text, sQ, !1);
          if (qQ(TQ.text.slice(QQ, sQ)) != PQ) break;
          sQ = QQ
        }
        for (; FQ < TQ.length;) {
          let QQ = (0, wQ.W)(TQ.text, FQ);
          if (qQ(TQ.text.slice(FQ, QQ)) != PQ) break;
          FQ = QQ
        }
        return wQ.k.range(sQ + TQ.from, FQ + TQ.from)
      }(QQ.state, WQ, XQ);
      {
        let qQ = QQ.docView.lineAt(WQ, XQ),
          TQ = QQ.state.doc.lineAt(qQ ? qQ.posAtEnd : WQ),
          zQ = qQ ? qQ.posAtStart : TQ.from,
          sQ = qQ ? qQ.posAtEnd : TQ.to;
        return sQ < QQ.state.doc.length && sQ == TQ.to && sQ++, wQ.k.range(zQ, sQ)
      }
    }
    Vw.scroll = QQ => {
      QQ.inputState.lastScrollTop = QQ.scrollDOM.scrollTop, QQ.inputState.lastScrollLeft = QQ.scrollDOM.scrollLeft
    }, Vw.wheel = Vw.mousewheel = QQ => {
      QQ.inputState.lastWheelEvent = Date.now()
    }, yw.keydown = (QQ, WQ) => (QQ.inputState.setSelectionOrigin("select"), 27 == WQ.keyCode && 0 != QQ.inputState.tabFocusMode && (QQ.inputState.tabFocusMode = Date.now() + 2e3), !1), Vw.touchstart = (QQ, WQ) => {
      let XQ = QQ.inputState,
        wQ = WQ.targetTouches[0];
      XQ.lastTouchTime = Date.now(), wQ && (XQ.lastTouchX = wQ.clientX, XQ.lastTouchY = wQ.clientY), XQ.setSelectionOrigin("select.pointer")
    }, Vw.touchmove = QQ => {
      QQ.inputState.setSelectionOrigin("select.pointer")
    }, yw.mousedown = (QQ, WQ) => {
      if (QQ.observer.flush(), QQ.inputState.lastTouchTime > Date.now() - 2e3) return !1;
      let XQ = null;
      for (let wQ of QQ.state.facet(AW))
        if (XQ = wQ(QQ, WQ), XQ) break;
      if (XQ || 0 != WQ.button || (XQ = function(QQ, WQ) {
          let XQ = QQ.posAndSideAtCoords({
              x: WQ.clientX,
              y: WQ.clientY
            }, !1),
            qQ = aw(WQ),
            TQ = QQ.state.selection;
          return {
            update(QQ) {
              QQ.docChanged && (XQ.pos = QQ.changes.mapPos(XQ.pos), TQ = TQ.map(QQ.changes))
            },
            get(WQ, zQ, sQ) {
              let FQ, PQ = QQ.posAndSideAtCoords({
                  x: WQ.clientX,
                  y: WQ.clientY
                }, !1),
                gQ = Uw(QQ, PQ.pos, PQ.assoc, qQ);
              if (XQ.pos != PQ.pos && !zQ) {
                let WQ = Uw(QQ, XQ.pos, XQ.assoc, qQ),
                  TQ = Math.min(WQ.from, gQ.from),
                  zQ = Math.max(WQ.to, gQ.to);
                gQ = TQ < gQ.from ? wQ.k.range(TQ, zQ, gQ.assoc) : wQ.k.range(zQ, TQ, gQ.assoc)
              }
              return zQ ? TQ.replaceRange(TQ.main.extend(gQ.from, gQ.to, gQ.assoc)) : sQ && 1 == qQ && TQ.Qy.length > 1 && (FQ = function(QQ, WQ) {
                for (let XQ = 0; XQ < QQ.Qy.length; XQ++) {
                  let {
                    from: qQ,
                    to: TQ
                  } = QQ.Qy[XQ];
                  if (qQ <= WQ && TQ >= WQ) return wQ.k.create(QQ.Qy.slice(0, XQ).concat(QQ.Qy.slice(XQ + 1)), QQ.mainIndex == XQ ? 0 : QQ.mainIndex - (QQ.mainIndex > XQ ? 1 : 0))
                }
                return null
              }(TQ, PQ.pos)) ? FQ : sQ ? TQ.addRange(gQ) : wQ.k.create([gQ])
            }
          }
        }(QQ, WQ)), XQ) {
        let wQ = !QQ.hasFocus;
        QQ.inputState.startMouseSelection(new Bw(QQ, WQ, XQ, wQ)), wQ && QQ.observer.ignore((() => {
          XW(QQ.contentDOM);
          let WQ = QQ.root.activeElement;
          WQ && !WQ.contains(QQ.contentDOM) && WQ.blur()
        }));
        let qQ = QQ.inputState.mouseSelection;
        if (qQ) return qQ.start(WQ), !1 === qQ.dragging
      } else QQ.inputState.setSelectionOrigin("select.pointer");
      return !1
    };
    const bw = vQ.ie && vQ.ie_version <= 11;
    let vw = null,
      dw = 0,
      Hw = 0;

    function aw(QQ) {
      if (!bw) return QQ.detail;
      let WQ = vw,
        XQ = Hw;
      return vw = QQ, Hw = Date.now(), dw = !WQ || XQ > Date.now() - 400 && Math.abs(WQ.clientX - QQ.clientX) < 2 && Math.abs(WQ.clientY - QQ.clientY) < 2 ? (dw + 1) % 3 : 1
    }

    function lw(QQ, WQ, XQ, wQ) {
      if (!(XQ = pw(QQ.state, LW, XQ))) return;
      let qQ = QQ.posAtCoords({
          x: WQ.clientX,
          y: WQ.clientY
        }, !1),
        {
          draggedContent: TQ
        } = QQ.inputState,
        zQ = wQ && TQ && function(QQ, WQ) {
          let XQ = QQ.state.facet(cW);
          return XQ.length ? XQ[0](WQ) : vQ.mac ? !WQ.altKey : !WQ.ctrlKey
        }(QQ, WQ) ? {
          from: TQ.from,
          to: TQ.to
        } : null,
        sQ = {
          from: qQ,
          insert: XQ
        },
        FQ = QQ.state.changes(zQ ? [zQ, sQ] : sQ);
      QQ.focus(), QQ.dispatch({
        changes: FQ,
        selection: {
          anchor: FQ.mapPos(qQ, -1),
          head: FQ.mapPos(qQ, 1)
        },
        userEvent: zQ ? "move.drop" : "input.drop"
      }), QQ.inputState.draggedContent = null
    }
    yw.dragstart = (QQ, WQ) => {
      let {
        selection: {
          main: XQ
        }
      } = QQ.state;
      if (WQ.target.draggable) {
        let qQ = QQ.docView.tile.nearest(WQ.target);
        if (qQ && qQ.isWidget()) {
          let QQ = qQ.posAtStart,
            WQ = QQ + qQ.length;
          (QQ >= XQ.to || WQ <= XQ.from) && (XQ = wQ.k.range(QQ, WQ))
        }
      }
      let {
        inputState: qQ
      } = QQ;
      return qQ.mouseSelection && (qQ.mouseSelection.dragging = !0), qQ.draggedContent = XQ, WQ.dataTransfer && (WQ.dataTransfer.setData("Text", pw(QQ.state, kW, QQ.state.sliceDoc(XQ.from, XQ.to))), WQ.dataTransfer.effectAllowed = "copyMove"), !1
    }, yw.dragend = QQ => (QQ.inputState.draggedContent = null, !1), yw.drop = (QQ, WQ) => {
      if (!WQ.dataTransfer) return !1;
      if (QQ.state.readOnly) return !0;
      let XQ = WQ.dataTransfer.files;
      if (XQ && XQ.length) {
        let wQ = Array(XQ.length),
          qQ = 0,
          TQ = () => {
            ++qQ == XQ.length && lw(QQ, WQ, wQ.filter((QQ => null != QQ)).join(QQ.state.lineBreak), !1)
          };
        for (let QQ = 0; QQ < XQ.length; QQ++) {
          let WQ = new FileReader;
          WQ.onerror = TQ, WQ.onload = () => {
            /[\x00-\x08\x0e-\x1f]{2}/.test(WQ.result) || (wQ[QQ] = WQ.result), TQ()
          }, WQ.readAsText(XQ[QQ])
        }
        return !0
      } {
        let XQ = WQ.dataTransfer.getData("Text");
        if (XQ) return lw(QQ, WQ, XQ, !0), !0
      }
      return !1
    }, yw.paste = (QQ, WQ) => {
      if (QQ.state.readOnly) return !0;
      QQ.observer.flush();
      let XQ = Dw ? null : WQ.clipboardData;
      return XQ ? (Gw(QQ, XQ.getData("text/plain") || XQ.getData("text/uri-list")), !0) : (function(QQ) {
        let WQ = QQ.dom.parentNode;
        if (!WQ) return;
        let XQ = WQ.appendChild(document.createElement("textarea"));
        XQ.style.cssText = "position: fixed; left: -10000px; top: 10px", XQ.focus(), setTimeout((() => {
          QQ.focus(), XQ.remove(), Gw(QQ, XQ.value)
        }), 50)
      }(QQ), !1)
    };
    let hw = null;
    yw.copy = yw.cut = (QQ, WQ) => {
      if (!tQ(QQ.contentDOM, QQ.observer.selectionRange)) return !1;
      let {
        text: XQ,
        Qy: wQ,
        linewise: qQ
      } = function(QQ) {
        let WQ = [],
          XQ = [],
          wQ = !1;
        for (let qQ of QQ.selection.Qy) qQ.empty || (WQ.push(QQ.sliceDoc(qQ.from, qQ.to)), XQ.push(qQ));
        if (!WQ.length) {
          let qQ = -1;
          for (let {
              from: wQ
            }
            of QQ.selection.Qy) {
            let TQ = QQ.doc.lineAt(wQ);
            TQ.number > qQ && (WQ.push(TQ.text), XQ.push({
              from: TQ.from,
              to: Math.min(QQ.doc.length, TQ.to + 1)
            })), qQ = TQ.number
          }
          wQ = !0
        }
        return {
          text: pw(QQ, kW, WQ.join(QQ.lineBreak)),
          Qy: XQ,
          linewise: wQ
        }
      }(QQ.state);
      if (!XQ && !qQ) return !1;
      hw = qQ ? XQ : null, "cut" != WQ.type || QQ.state.readOnly || QQ.dispatch({
        changes: wQ,
        scrollIntoView: !0,
        userEvent: "delete.cut"
      });
      let TQ = Dw ? null : WQ.clipboardData;
      return TQ ? (TQ.clearData(), TQ.setData("text/plain", XQ), !0) : (function(QQ, WQ) {
        let XQ = QQ.dom.parentNode;
        if (!XQ) return;
        let wQ = XQ.appendChild(document.createElement("textarea"));
        wQ.style.cssText = "position: fixed; left: -10000px; top: 10px", wQ.value = WQ, wQ.focus(), wQ.selectionEnd = WQ.length, wQ.selectionStart = 0, setTimeout((() => {
          wQ.remove(), QQ.focus()
        }), 50)
      }(QQ, XQ), !1)
    };
    const iw = wQ.b.define();

    function Aw(QQ, WQ) {
      let XQ = [];
      for (let wQ of QQ.facet(uW)) {
        let qQ = wQ(QQ, WQ);
        qQ && XQ.push(qQ)
      }
      return XQ.length ? QQ.update({
        effects: XQ,
        annotations: iw.of(!0)
      }) : null
    }

    function Rw(QQ) {
      setTimeout((() => {
        let WQ = QQ.hasFocus;
        if (WQ != QQ.inputState.notifiedFocused) {
          let XQ = Aw(QQ.state, WQ);
          XQ ? QQ.dispatch(XQ) : QQ.update([])
        }
      }), 10)
    }
    Vw.focus = QQ => {
      QQ.inputState.lastFocusTime = Date.now(), QQ.scrollDOM.scrollTop || !QQ.inputState.lastScrollTop && !QQ.inputState.lastScrollLeft || (QQ.scrollDOM.scrollTop = QQ.inputState.lastScrollTop, QQ.scrollDOM.scrollLeft = QQ.inputState.lastScrollLeft), Rw(QQ)
    }, Vw.blur = QQ => {
      QQ.observer.clearSelectionRange(), Rw(QQ)
    }, Vw.compositionstart = Vw.compositionupdate = QQ => {
      QQ.observer.editContext || (null == QQ.inputState.compositionFirstChange && (QQ.inputState.compositionFirstChange = !0), QQ.inputState.composing < 0 && (QQ.inputState.composing = 0))
    }, Vw.compositionend = QQ => {
      QQ.observer.editContext || (QQ.inputState.composing = -1, QQ.inputState.compositionEndedAt = Date.now(), QQ.inputState.compositionPendingKey = !0, QQ.inputState.compositionPendingChange = QQ.observer.pendingRecords().length > 0, QQ.inputState.compositionFirstChange = null, vQ.chrome && vQ.android ? QQ.observer.flushSoon() : QQ.inputState.compositionPendingChange ? Promise.resolve().then((() => QQ.observer.flush())) : setTimeout((() => {
        QQ.inputState.composing < 0 && QQ.docView.hasComposition && QQ.update([])
      }), 50))
    }, Vw.contextmenu = QQ => {
      QQ.inputState.lastContextMenu = Date.now()
    }, yw.beforeinput = (QQ, WQ) => {
      var XQ, wQ;
      if ("insertText" != WQ.inputType && "insertCompositionText" != WQ.inputType || (QQ.inputState.insertingText = WQ.data, QQ.inputState.insertingTextAt = Date.now()), "insertReplacementText" == WQ.inputType && QQ.observer.editContext) {
        let wQ = null === (XQ = WQ.dataTransfer) || void 0 === XQ ? void 0 : XQ.getData("text/plain"),
          qQ = WQ.getTargetRanges();
        if (wQ && qQ.length) {
          let WQ = qQ[0],
            XQ = QQ.posAtDOM(WQ.startContainer, WQ.startOffset),
            TQ = QQ.posAtDOM(WQ.endContainer, WQ.endOffset);
          return Tw(QQ, {
            from: XQ,
            to: TQ,
            insert: QQ.state.toText(wQ)
          }, null), !0
        }
      }
      let qQ;
      if (vQ.chrome && vQ.android && (qQ = Jw.find((QQ => QQ.inputType == WQ.inputType))) && (QQ.observer.delayAndroidKey(qQ.key, qQ.keyCode), "Backspace" == qQ.key || "Delete" == qQ.key)) {
        let WQ = (null === (wQ = window.visualViewport) || void 0 === wQ ? void 0 : wQ.height) || 0;
        setTimeout((() => {
          var XQ;
          ((null === (XQ = window.visualViewport) || void 0 === XQ ? void 0 : XQ.height) || 0) > WQ + 10 && QQ.hasFocus && (QQ.contentDOM.blur(), QQ.focus())
        }), 100)
      }
      return vQ.ios && "deleteContentForward" == WQ.inputType && QQ.observer.flushSoon(), vQ.safari && "insertText" == WQ.inputType && QQ.inputState.composing >= 0 && setTimeout((() => Vw.compositionend(QQ, WQ)), 20), !1
    };
    const Ew = new Set;
    const Cw = ["pre-wrap", "normal", "pre-line", "break-spaces"];
    let uw = !1;

    function Lw() {
      uw = !1
    }
    class kw {
      constructor(QQ) {
        this.lineWrapping = QQ, this.doc = wQ.M.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30
      }
      heightForGap(QQ, WQ) {
        let XQ = this.doc.lineAt(WQ).number - this.doc.lineAt(QQ).number + 1;
        return this.lineWrapping && (XQ += Math.max(0, Math.ceil((WQ - QQ - XQ * this.lineLength * .5) / this.lineLength))), this.lineHeight * XQ
      }
      heightForLine(QQ) {
        if (!this.lineWrapping) return this.lineHeight;
        return (1 + Math.max(0, Math.ceil((QQ - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight
      }
      setDoc(QQ) {
        return this.doc = QQ, this
      }
      mustRefreshForWrapping(QQ) {
        return Cw.indexOf(QQ) > -1 != this.lineWrapping
      }
      mustRefreshForHeights(QQ) {
        let WQ = !1;
        for (let XQ = 0; XQ < QQ.length; XQ++) {
          let wQ = QQ[XQ];
          wQ < 0 ? XQ++ : this.heightSamples[Math.floor(10 * wQ)] || (WQ = !0, this.heightSamples[Math.floor(10 * wQ)] = !0)
        }
        return WQ
      }
      refresh(QQ, WQ, XQ, wQ, qQ, TQ) {
        let zQ = Cw.indexOf(QQ) > -1,
          sQ = Math.abs(WQ - this.lineHeight) > .3 || this.lineWrapping != zQ || Math.abs(XQ - this.charWidth) > .1;
        if (this.lineWrapping = zQ, this.lineHeight = WQ, this.charWidth = XQ, this.textHeight = wQ, this.lineLength = qQ, sQ) {
          this.heightSamples = {};
          for (let QQ = 0; QQ < TQ.length; QQ++) {
            let WQ = TQ[QQ];
            WQ < 0 ? QQ++ : this.heightSamples[Math.floor(10 * WQ)] = !0
          }
        }
        return sQ
      }
    }
    class fw {
      constructor(QQ, WQ) {
        this.from = QQ, this.heights = WQ, this.index = 0
      }
      get more() {
        return this.index < this.heights.length
      }
    }
    class Sw {
      constructor(QQ, WQ, XQ, wQ, qQ) {
        this.from = QQ, this.length = WQ, this.top = XQ, this.height = wQ, this._content = qQ
      }
      get type() {
        return "number" == typeof this._content ? cQ.Text : Array.isArray(this._content) ? this._content : this._content.type
      }
      get to() {
        return this.from + this.length
      }
      get bottom() {
        return this.top + this.height
      }
      get widget() {
        return this._content instanceof CQ ? this._content.widget : null
      }
      get widgetLineBreaks() {
        return "number" == typeof this._content ? this._content : 0
      }
      join(QQ) {
        let WQ = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(QQ._content) ? QQ._content : [QQ]);
        return new Sw(this.from, this.length + QQ.length, this.top, this.height + QQ.height, WQ)
      }
    }
    var tw = function(QQ) {
      return QQ[QQ.ByPos = 0] = "ByPos", QQ[QQ.ByHeight = 1] = "ByHeight", QQ[QQ.ByPosNoHeight = 2] = "ByPosNoHeight", QQ
    }(tw || (tw = {}));
    const ow = .001;
    class ew {
      constructor(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.length = QQ, this.height = WQ, this.flags = XQ
      }
      get outdated() {
        return (2 & this.flags) > 0
      }
      set outdated(QQ) {
        this.flags = (QQ ? 2 : 0) | -3 & this.flags
      }
      setHeight(QQ) {
        this.height != QQ && (Math.abs(this.height - QQ) > ow && (uw = !0), this.height = QQ)
      }
      replace(QQ, WQ, XQ) {
        return ew.of(XQ)
      }
      decomposeLeft(QQ, WQ) {
        WQ.push(this)
      }
      decomposeRight(QQ, WQ) {
        WQ.push(this)
      }
      applyChanges(QQ, WQ, XQ, wQ) {
        let qQ = this,
          TQ = XQ.doc;
        for (let zQ = wQ.length - 1; zQ >= 0; zQ--) {
          let {
            fromA: sQ,
            toA: FQ,
            fromB: PQ,
            toB: gQ
          } = wQ[zQ], JQ = qQ.lineAt(sQ, tw.ByPosNoHeight, XQ.setDoc(WQ), 0, 0), rQ = JQ.to >= FQ ? JQ : qQ.lineAt(FQ, tw.ByPosNoHeight, XQ, 0, 0);
          for (gQ += rQ.to - FQ, FQ = rQ.to; zQ > 0 && JQ.from <= wQ[zQ - 1].toA;) sQ = wQ[zQ - 1].fromA, PQ = wQ[zQ - 1].fromB, zQ--, sQ < JQ.from && (JQ = qQ.lineAt(sQ, tw.ByPosNoHeight, XQ, 0, 0));
          PQ += JQ.from - sQ, sQ = JQ.from;
          let IQ = mw.build(XQ.setDoc(TQ), QQ, PQ, gQ);
          qQ = nw(qQ, qQ.replace(sQ, FQ, IQ))
        }
        return qQ.updateHeight(XQ, 0)
      }
      static empty() {
        return new Nw(0, 0, 0)
      }
      static of (QQ) {
        if (1 == QQ.length) return QQ[0];
        let WQ = 0,
          XQ = QQ.length,
          wQ = 0,
          qQ = 0;
        for (;;)
          if (WQ == XQ)
            if (wQ > 2 * qQ) {
              let qQ = QQ[WQ - 1];
              qQ.break ? QQ.splice(--WQ, 1, qQ.left, null, qQ.right) : QQ.splice(--WQ, 1, qQ.left, qQ.right), XQ += 1 + qQ.break, wQ -= qQ.size
            } else {
              if (!(qQ > 2 * wQ)) break;
              {
                let WQ = QQ[XQ];
                WQ.break ? QQ.splice(XQ, 1, WQ.left, null, WQ.right) : QQ.splice(XQ, 1, WQ.left, WQ.right), XQ += 2 + WQ.break, qQ -= WQ.size
              }
            }
        else if (wQ < qQ) {
          let XQ = QQ[WQ++];
          XQ && (wQ += XQ.size)
        } else {
          let WQ = QQ[--XQ];
          WQ && (qQ += WQ.size)
        }
        let TQ = 0;
        return null == QQ[WQ - 1] ? (TQ = 1, WQ--) : null == QQ[WQ] && (TQ = 1, XQ++), new Ow(ew.of(QQ.slice(0, WQ)), TQ, ew.of(QQ.slice(XQ)))
      }
    }

    function nw(QQ, WQ) {
      return QQ == WQ ? QQ : (QQ.constructor != WQ.constructor && (uw = !0), WQ)
    }
    ew.prototype.size = 1;
    const xw = AQ.replace({});
    class Yw extends ew {
      constructor(QQ, WQ, XQ) {
        super(QQ, WQ), this.deco = XQ, this.spaceAbove = 0
      }
      mainBlock(QQ, WQ) {
        return new Sw(WQ, this.length, QQ + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0)
      }
      blockAt(QQ, WQ, XQ, wQ) {
        return this.spaceAbove && QQ < XQ + this.spaceAbove ? new Sw(wQ, 0, XQ, this.spaceAbove, xw) : this.mainBlock(XQ, wQ)
      }
      lineAt(QQ, WQ, XQ, wQ, qQ) {
        let TQ = this.mainBlock(wQ, qQ);
        return this.spaceAbove ? this.blockAt(0, XQ, wQ, qQ).join(TQ) : TQ
      }
      forEachLine(QQ, WQ, XQ, wQ, qQ, TQ) {
        QQ <= qQ + this.length && WQ >= qQ && TQ(this.lineAt(0, tw.ByPos, XQ, wQ, qQ))
      }
      setMeasuredHeight(QQ) {
        let WQ = QQ.heights[QQ.index++];
        WQ < 0 ? (this.spaceAbove = -WQ, WQ = QQ.heights[QQ.index++]) : this.spaceAbove = 0, this.setHeight(WQ)
      }
      updateHeight(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          XQ = arguments.length > 3 ? arguments[3] : void 0;
        return XQ && XQ.from <= WQ && XQ.more && this.setMeasuredHeight(XQ), this.outdated = !1, this
      }
      toString() {
        return `block(${this.length})`
      }
    }
    class Nw extends Yw {
      constructor(QQ, WQ, XQ) {
        super(QQ, WQ, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = XQ
      }
      mainBlock(QQ, WQ) {
        return new Sw(WQ, this.length, QQ + this.spaceAbove, this.height - this.spaceAbove, this.breaks)
      }
      replace(QQ, WQ, XQ) {
        let wQ = XQ[0];
        return 1 == XQ.length && (wQ instanceof Nw || wQ instanceof Zw && 4 & wQ.flags) && Math.abs(this.length - wQ.length) < 10 ? (wQ instanceof Zw ? wQ = new Nw(wQ.length, this.height, this.spaceAbove) : wQ.height = this.height, this.outdated || (wQ.outdated = !1), wQ) : ew.of(XQ)
      }
      updateHeight(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wQ = arguments.length > 3 ? arguments[3] : void 0;
        return wQ && wQ.from <= WQ && wQ.more ? this.setMeasuredHeight(wQ) : (XQ || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, QQ.heightForLine(this.length - this.collapsed)) + this.breaks * QQ.lineHeight)), this.outdated = !1, this
      }
      toString() {
        return `line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`
      }
    }
    class Zw extends ew {
      constructor(QQ) {
        super(QQ, 0)
      }
      heightMetrics(QQ, WQ) {
        let XQ, wQ = QQ.doc.lineAt(WQ).number,
          qQ = QQ.doc.lineAt(WQ + this.length).number,
          TQ = qQ - wQ + 1,
          zQ = 0;
        if (QQ.lineWrapping) {
          let WQ = Math.min(this.height, QQ.lineHeight * TQ);
          XQ = WQ / TQ, this.length > TQ + 1 && (zQ = (this.height - WQ) / (this.length - TQ - 1))
        } else XQ = this.height / TQ;
        return {
          firstLine: wQ,
          lastLine: qQ,
          perLine: XQ,
          perChar: zQ
        }
      }
      blockAt(QQ, WQ, XQ, wQ) {
        let {
          firstLine: qQ,
          lastLine: TQ,
          perLine: zQ,
          perChar: sQ
        } = this.heightMetrics(WQ, wQ);
        if (WQ.lineWrapping) {
          let qQ = wQ + (QQ < WQ.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (QQ - XQ) / this.height)) * this.length)),
            TQ = WQ.doc.lineAt(qQ),
            FQ = zQ + TQ.length * sQ,
            PQ = Math.max(XQ, QQ - FQ / 2);
          return new Sw(TQ.from, TQ.length, PQ, FQ, 0)
        } {
          let wQ = Math.max(0, Math.min(TQ - qQ, Math.floor((QQ - XQ) / zQ))),
            {
              from: sQ,
              length: FQ
            } = WQ.doc.line(qQ + wQ);
          return new Sw(sQ, FQ, XQ + zQ * wQ, zQ, 0)
        }
      }
      lineAt(QQ, WQ, XQ, wQ, qQ) {
        if (WQ == tw.ByHeight) return this.blockAt(QQ, XQ, wQ, qQ);
        if (WQ == tw.ByPosNoHeight) {
          let {
            from: WQ,
            to: wQ
          } = XQ.doc.lineAt(QQ);
          return new Sw(WQ, wQ - WQ, 0, 0, 0)
        }
        let {
          firstLine: TQ,
          perLine: zQ,
          perChar: sQ
        } = this.heightMetrics(XQ, qQ), FQ = XQ.doc.lineAt(QQ), PQ = zQ + FQ.length * sQ, gQ = FQ.number - TQ, JQ = wQ + zQ * gQ + sQ * (FQ.from - qQ - gQ);
        return new Sw(FQ.from, FQ.length, Math.max(wQ, Math.min(JQ, wQ + this.height - PQ)), PQ, 0)
      }
      forEachLine(QQ, WQ, XQ, wQ, qQ, TQ) {
        QQ = Math.max(QQ, qQ), WQ = Math.min(WQ, qQ + this.length);
        let {
          firstLine: zQ,
          perLine: sQ,
          perChar: FQ
        } = this.heightMetrics(XQ, qQ);
        for (let PQ = QQ, gQ = wQ; PQ <= WQ;) {
          let WQ = XQ.doc.lineAt(PQ);
          if (PQ == QQ) {
            let XQ = WQ.number - zQ;
            gQ += sQ * XQ + FQ * (QQ - qQ - XQ)
          }
          let wQ = sQ + FQ * WQ.length;
          TQ(new Sw(WQ.from, WQ.length, gQ, wQ, 0)), gQ += wQ, PQ = WQ.to + 1
        }
      }
      replace(QQ, WQ, XQ) {
        let wQ = this.length - WQ;
        if (wQ > 0) {
          let QQ = XQ[XQ.length - 1];
          QQ instanceof Zw ? XQ[XQ.length - 1] = new Zw(QQ.length + wQ) : XQ.push(null, new Zw(wQ - 1))
        }
        if (QQ > 0) {
          let WQ = XQ[0];
          WQ instanceof Zw ? XQ[0] = new Zw(QQ + WQ.length) : XQ.unshift(new Zw(QQ - 1), null)
        }
        return ew.of(XQ)
      }
      decomposeLeft(QQ, WQ) {
        WQ.push(new Zw(QQ - 1), null)
      }
      decomposeRight(QQ, WQ) {
        WQ.push(null, new Zw(this.length - QQ - 1))
      }
      updateHeight(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wQ = arguments.length > 3 ? arguments[3] : void 0,
          qQ = WQ + this.length;
        if (wQ && wQ.from <= WQ + this.length && wQ.more) {
          let XQ = [],
            TQ = Math.max(WQ, wQ.from),
            zQ = -1;
          for (wQ.from > WQ && XQ.push(new Zw(wQ.from - WQ - 1).updateHeight(QQ, WQ)); TQ <= qQ && wQ.more;) {
            let WQ = QQ.doc.lineAt(TQ).length;
            XQ.length && XQ.push(null);
            let qQ = wQ.heights[wQ.index++],
              sQ = 0;
            qQ < 0 && (sQ = -qQ, qQ = wQ.heights[wQ.index++]), -1 == zQ ? zQ = qQ : Math.abs(qQ - zQ) >= ow && (zQ = -2);
            let FQ = new Nw(WQ, qQ, sQ);
            FQ.outdated = !1, XQ.push(FQ), TQ += WQ + 1
          }
          TQ <= qQ && XQ.push(null, new Zw(qQ - TQ).updateHeight(QQ, TQ));
          let sQ = ew.of(XQ);
          return (zQ < 0 || Math.abs(sQ.height - this.height) >= ow || Math.abs(zQ - this.heightMetrics(QQ, WQ).perLine) >= ow) && (uw = !0), nw(this, sQ)
        }
        return (XQ || this.outdated) && (this.setHeight(QQ.heightForGap(WQ, WQ + this.length)), this.outdated = !1), this
      }
      toString() {
        return `gap(${this.length})`
      }
    }
    class Ow extends ew {
      constructor(QQ, WQ, XQ) {
        super(QQ.length + WQ + XQ.length, QQ.height + XQ.height, WQ | (QQ.outdated || XQ.outdated ? 2 : 0)), this.left = QQ, this.right = XQ, this.size = QQ.size + XQ.size
      }
      get break() {
        return 1 & this.flags
      }
      blockAt(QQ, WQ, XQ, wQ) {
        let qQ = XQ + this.left.height;
        return QQ < qQ ? this.left.blockAt(QQ, WQ, XQ, wQ) : this.right.blockAt(QQ, WQ, qQ, wQ + this.left.length + this.break)
      }
      lineAt(QQ, WQ, XQ, wQ, qQ) {
        let TQ = wQ + this.left.height,
          zQ = qQ + this.left.length + this.break,
          sQ = WQ == tw.ByHeight ? QQ < TQ : QQ < zQ,
          FQ = sQ ? this.left.lineAt(QQ, WQ, XQ, wQ, qQ) : this.right.lineAt(QQ, WQ, XQ, TQ, zQ);
        if (this.break || (sQ ? FQ.to < zQ : FQ.from > zQ)) return FQ;
        let PQ = WQ == tw.ByPosNoHeight ? tw.ByPosNoHeight : tw.ByPos;
        return sQ ? FQ.join(this.right.lineAt(zQ, PQ, XQ, TQ, zQ)) : this.left.lineAt(zQ, PQ, XQ, wQ, qQ).join(FQ)
      }
      forEachLine(QQ, WQ, XQ, wQ, qQ, TQ) {
        let zQ = wQ + this.left.height,
          sQ = qQ + this.left.length + this.break;
        if (this.break) QQ < sQ && this.left.forEachLine(QQ, WQ, XQ, wQ, qQ, TQ), WQ >= sQ && this.right.forEachLine(QQ, WQ, XQ, zQ, sQ, TQ);
        else {
          let FQ = this.lineAt(sQ, tw.ByPos, XQ, wQ, qQ);
          QQ < FQ.from && this.left.forEachLine(QQ, FQ.from - 1, XQ, wQ, qQ, TQ), FQ.to >= QQ && FQ.from <= WQ && TQ(FQ), WQ > FQ.to && this.right.forEachLine(FQ.to + 1, WQ, XQ, zQ, sQ, TQ)
        }
      }
      replace(QQ, WQ, XQ) {
        let wQ = this.left.length + this.break;
        if (WQ < wQ) return this.balanced(this.left.replace(QQ, WQ, XQ), this.right);
        if (QQ > this.left.length) return this.balanced(this.left, this.right.replace(QQ - wQ, WQ - wQ, XQ));
        let qQ = [];
        QQ > 0 && this.decomposeLeft(QQ, qQ);
        let TQ = qQ.length;
        for (let zQ of XQ) qQ.push(zQ);
        if (QQ > 0 && Kw(qQ, TQ - 1), WQ < this.length) {
          let QQ = qQ.length;
          this.decomposeRight(WQ, qQ), Kw(qQ, QQ)
        }
        return ew.of(qQ)
      }
      decomposeLeft(QQ, WQ) {
        let XQ = this.left.length;
        if (QQ <= XQ) return this.left.decomposeLeft(QQ, WQ);
        WQ.push(this.left), this.break && (XQ++, QQ >= XQ && WQ.push(null)), QQ > XQ && this.right.decomposeLeft(QQ - XQ, WQ)
      }
      decomposeRight(QQ, WQ) {
        let XQ = this.left.length,
          wQ = XQ + this.break;
        if (QQ >= wQ) return this.right.decomposeRight(QQ - wQ, WQ);
        QQ < XQ && this.left.decomposeRight(QQ, WQ), this.break && QQ < wQ && WQ.push(null), WQ.push(this.right)
      }
      balanced(QQ, WQ) {
        return QQ.size > 2 * WQ.size || WQ.size > 2 * QQ.size ? ew.of(this.break ? [QQ, null, WQ] : [QQ, WQ]) : (this.left = nw(this.left, QQ), this.right = nw(this.right, WQ), this.setHeight(QQ.height + WQ.height), this.outdated = QQ.outdated || WQ.outdated, this.size = QQ.size + WQ.size, this.length = QQ.length + this.break+WQ.length, this)
      }
      updateHeight(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wQ = arguments.length > 3 ? arguments[3] : void 0,
          {
            left: qQ,
            right: TQ
          } = this,
          zQ = WQ + qQ.length + this.break,
          sQ = null;
        return wQ && wQ.from <= WQ + qQ.length && wQ.more ? sQ = qQ = qQ.updateHeight(QQ, WQ, XQ, wQ) : qQ.updateHeight(QQ, WQ, XQ), wQ && wQ.from <= zQ + TQ.length && wQ.more ? sQ = TQ = TQ.updateHeight(QQ, zQ, XQ, wQ) : TQ.updateHeight(QQ, zQ, XQ), sQ ? this.balanced(qQ, TQ) : (this.height = this.left.height + this.right.height, this.outdated = !1, this)
      }
      toString() {
        return this.left + (this.break ? " " : "-") + this.right
      }
    }

    function Kw(QQ, WQ) {
      let XQ, wQ;
      null == QQ[WQ] && (XQ = QQ[WQ - 1]) instanceof Zw && (wQ = QQ[WQ + 1]) instanceof Zw && QQ.splice(WQ - 1, 3, new Zw(XQ.length + 1 + wQ.length))
    }
    class mw {
      constructor(QQ, WQ) {
        this.pos = QQ, this.oracle = WQ, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = QQ
      }
      get isCovered() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering
      }
      span(QQ, WQ) {
        if (this.lineStart > -1) {
          let QQ = Math.min(WQ, this.lineEnd),
            XQ = this.nodes[this.nodes.length - 1];
          XQ instanceof Nw ? XQ.length += QQ - this.pos : (QQ > this.pos || !this.isCovered) && this.nodes.push(new Nw(QQ - this.pos, -1, 0)), this.writtenTo = QQ, WQ > QQ && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1)
        }
        this.pos = WQ
      }
      point(QQ, WQ, XQ) {
        if (QQ < WQ || XQ.heightRelevant) {
          let wQ = XQ.widget ? XQ.widget.estimatedHeight : 0,
            qQ = XQ.widget ? XQ.widget.lineBreaks : 0;
          wQ < 0 && (wQ = this.oracle.lineHeight);
          let TQ = WQ - QQ;
          XQ.block ? this.bWQ(new Yw(TQ, wQ, XQ)) : (TQ || qQ || wQ >= 5) && this.addLineDeco(wQ, qQ, TQ)
        } else WQ > QQ && this.span(QQ, WQ);
        this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
      }
      enterLine() {
        if (this.lineStart > -1) return;
        let {
          from: QQ,
          to: WQ
        } = this.oracle.doc.lineAt(this.pos);
        this.lineStart = QQ, this.lineEnd = WQ, this.writtenTo < QQ && ((this.writtenTo < QQ - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, QQ - 1)), this.nodes.push(null)), this.pos > QQ && this.nodes.push(new Nw(this.pos - QQ, -1, 0)), this.writtenTo = this.pos
      }
      blankContent(QQ, WQ) {
        let XQ = new Zw(WQ - QQ);
        return this.oracle.doc.lineAt(QQ).to == WQ && (XQ.flags |= 4), XQ
      }
      ensureLine() {
        this.enterLine();
        let QQ = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (QQ instanceof Nw) return QQ;
        let WQ = new Nw(0, -1, 0);
        return this.nodes.push(WQ), WQ
      }
      bWQ(QQ) {
        this.enterLine();
        let WQ = QQ.deco;
        WQ && WQ.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(QQ), this.writtenTo = this.pos = this.pos + QQ.length, WQ && WQ.endSide > 0 && (this.covering = QQ)
      }
      addLineDeco(QQ, WQ, XQ) {
        let wQ = this.ensureLine();
        wQ.length += XQ, wQ.collapsed += XQ, wQ.widgetHeight = Math.max(wQ.widgetHeight, QQ), wQ.breaks += WQ, this.writtenTo = this.pos = this.pos + XQ
      }
      finish(QQ) {
        let WQ = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
        !(this.lineStart > -1) || WQ instanceof Nw || this.isCovered ? (this.writtenTo < this.pos || null == WQ) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new Nw(0, -1, 0));
        let XQ = QQ;
        for (let wQ of this.nodes) wQ instanceof Nw && wQ.updateHeight(this.oracle, XQ), XQ += wQ ? wQ.length : 1;
        return this.nodes
      }
      static build(QQ, WQ, XQ, qQ) {
        let TQ = new mw(XQ, QQ);
        return wQ.A.spans(WQ, XQ, qQ, TQ, 0), TQ.finish(XQ)
      }
    }
    class Mw {
      constructor() {
        this.changes = []
      }
      compareRange() {}
      comparePoint(QQ, WQ, XQ, wQ) {
        (QQ < WQ || XQ && XQ.heightRelevant || wQ && wQ.heightRelevant) && LQ(QQ, WQ, this.changes, 5)
      }
    }

    function Qq(QQ, WQ) {
      let XQ = QQ.getBoundingClientRect(),
        wQ = QQ.ownerDocument,
        qQ = wQ.defaultView || window,
        TQ = Math.max(0, XQ.left),
        zQ = Math.min(qQ.innerWidth, XQ.right),
        sQ = Math.max(0, XQ.top),
        FQ = Math.min(qQ.innerHeight, XQ.bottom);
      for (let PQ = QQ.parentNode; PQ && PQ != wQ.body;)
        if (1 == PQ.nodeType) {
          let WQ = PQ,
            XQ = window.getComputedStyle(WQ);
          if ((WQ.scrollHeight > WQ.clientHeight || WQ.scrollWidth > WQ.clientWidth) && "visible" != XQ.overflow) {
            let XQ = WQ.getBoundingClientRect();
            TQ = Math.max(TQ, XQ.left), zQ = Math.min(zQ, XQ.right), sQ = Math.max(sQ, XQ.top), FQ = Math.min(PQ == QQ.parentNode ? qQ.innerHeight : FQ, XQ.bottom)
          }
          PQ = "absolute" == XQ.position || "fixed" == XQ.position ? WQ.offsetParent : WQ.parentNode
        } else {
          if (11 != PQ.nodeType) break;
          PQ = PQ.host
        } return {
        left: TQ - XQ.left,
        right: Math.max(TQ, zQ) - XQ.left,
        top: sQ - (XQ.top + WQ),
        bottom: Math.max(sQ, FQ) - (XQ.top + WQ)
      }
    }

    function Wq(QQ, WQ) {
      let XQ = QQ.getBoundingClientRect();
      return {
        left: 0,
        right: XQ.right - XQ.left,
        top: WQ,
        bottom: XQ.bottom - (XQ.top + WQ)
      }
    }
    class Xq {
      constructor(QQ, WQ, XQ, wQ) {
        this.from = QQ, this.to = WQ, this.size = XQ, this.displaySize = wQ
      }
      static same(QQ, WQ) {
        if (QQ.length != WQ.length) return !1;
        for (let XQ = 0; XQ < QQ.length; XQ++) {
          let wQ = QQ[XQ],
            qQ = WQ[XQ];
          if (wQ.from != qQ.from || wQ.to != qQ.to || wQ.size != qQ.size) return !1
        }
        return !0
      }
      draw(QQ, WQ) {
        return AQ.replace({
          widget: new wq(this.displaySize * (WQ ? QQ.scaleY : QQ.scaleX), WQ)
        }).range(this.from, this.to)
      }
    }
    class wq extends iQ {
      constructor(QQ, WQ) {
        super(), this.size = QQ, this.vertical = WQ
      }
      eq(QQ) {
        return QQ.size == this.size && QQ.vertical == this.vertical
      }
      toDOM() {
        let QQ = document.createElement("div");
        return this.vertical ? QQ.style.height = this.size + "px" : (QQ.style.width = this.size + "px", QQ.style.height = "2px", QQ.style.display = "inline-block"), QQ
      }
      get estimatedHeight() {
        return this.vertical ? this.size : -1
      }
    }
    class qq {
      constructor(QQ, WQ) {
        this.view = QQ, this.state = WQ, this.pixelViewport = {
          left: 0,
          right: window.innerWidth,
          top: 0,
          bottom: 0
        }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = Fq, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = PW.LTR, this.t5 = [], this.mustEnforceCursorAssoc = !1;
        let XQ = WQ.facet(MW).some((QQ => "function" != typeof QQ && "cm-lineWrapping" == QQ.class));
        this.heightOracle = new kw(XQ), this.stateDeco = Pq(WQ), this.heightMap = ew.empty().applyChanges(this.stateDeco, wQ.M.empty, this.heightOracle.setDoc(WQ.doc), [new PX(0, 0, 0, WQ.doc.length)]);
        for (let wQ = 0; wQ < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); wQ++);
        this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = AQ.set(this.lineGaps.map((QQ => QQ.draw(this, !1)))), this.scrollParent = QQ.scrollDOM, this.computeVisibleRanges()
      }
      updateForViewport() {
        let QQ = [this.viewport],
          {
            main: WQ
          } = this.state.selection;
        for (let XQ = 0; XQ <= 1; XQ++) {
          let wQ = XQ ? WQ.head : WQ.anchor;
          if (!QQ.some((QQ => {
              let {
                from: WQ,
                to: XQ
              } = QQ;
              return wQ >= WQ && wQ <= XQ
            }))) {
            let {
              from: WQ,
              to: XQ
            } = this.lineBlockAt(wQ);
            QQ.push(new Tq(WQ, XQ))
          }
        }
        return this.viewports = QQ.sort(((QQ, WQ) => QQ.from - WQ.from)), this.updateScaler()
      }
      updateScaler() {
        let QQ = this.scaler;
        return this.scaler = this.heightMap.height <= 7e6 ? Fq : new gq(this.heightOracle, this.heightMap, this.viewports), QQ.eq(this.scaler) ? 0 : 2
      }
      updateViewportLines() {
        this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (QQ => {
          this.viewportLines.push(Jq(QQ, this.scaler))
        }))
      }
      update(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.state = QQ.state;
        let XQ = this.stateDeco;
        this.stateDeco = Pq(this.state);
        let qQ = QQ.changedRanges,
          TQ = PX.extendWithRanges(qQ, function(QQ, WQ, XQ) {
            let qQ = new Mw;
            return wQ.A.compare(QQ, WQ, XQ, qQ, 0), qQ.changes
          }(XQ, this.stateDeco, QQ ? QQ.changes : wQ.ChangeSet.empty(this.state.doc.length))),
          zQ = this.heightMap.height,
          sQ = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
        Lw(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, QQ.startState.doc, this.heightOracle.setDoc(this.state.doc), TQ), (this.heightMap.height != zQ || uw) && (QQ.flags |= 2), sQ ? (this.scrollAnchorPos = QQ.changes.mapPos(sQ.from, -1), this.scrollAnchorHeight = sQ.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = zQ);
        let FQ = TQ.length ? this.mapViewport(this.viewport, QQ.changes) : this.viewport;
        (WQ && (WQ.range.head < FQ.from || WQ.range.head > FQ.to) || !this.viewportIsAppropriate(FQ)) && (FQ = this.getViewport(0, WQ));
        let PQ = FQ.from != this.viewport.from || FQ.to != this.viewport.to;
        this.viewport = FQ, QQ.flags |= this.updateForViewport(), (PQ || !QQ.changes.empty || 2 & QQ.flags) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, QQ.changes))), QQ.flags |= this.computeVisibleRanges(QQ.changes), WQ && (this.scrollTarget = WQ), !this.mustEnforceCursorAssoc && (QQ.selectionSet || QQ.focusChanged) && QQ.view.lineWrapping && QQ.state.selection.main.empty && QQ.state.selection.main.assoc && !QQ.state.facet(SW) && (this.mustEnforceCursorAssoc = !0)
      }
      measure() {
        let {
          view: QQ
        } = this, WQ = QQ.contentDOM, XQ = window.getComputedStyle(WQ), qQ = this.heightOracle, TQ = XQ.whiteSpace;
        this.defaultTextDirection = "rtl" == XQ.direction ? PW.RTL : PW.LTR;
        let zQ = this.heightOracle.mustRefreshForWrapping(TQ) || "refresh" === this.mustMeasureContent,
          sQ = WQ.getBoundingClientRect(),
          FQ = zQ || this.mustMeasureContent || this.contentDOMHeight != sQ.height;
        this.contentDOMHeight = sQ.height, this.mustMeasureContent = !1;
        let PQ = 0,
          gQ = 0;
        if (sQ.width && sQ.height) {
          let {
            scaleX: QQ,
            scaleY: XQ
          } = KQ(WQ, sQ);
          (QQ > .005 && Math.abs(this.scaleX - QQ) > .005 || XQ > .005 && Math.abs(this.scaleY - XQ) > .005) && (this.scaleX = QQ, this.scaleY = XQ, PQ |= 16, zQ = FQ = !0)
        }
        let JQ = (parseInt(XQ.paddingTop) || 0) * this.scaleY,
          rQ = (parseInt(XQ.paddingBottom) || 0) * this.scaleY;
        this.paddingTop == JQ && this.paddingBottom == rQ || (this.paddingTop = JQ, this.paddingBottom = rQ, PQ |= 18), this.editorWidth != QQ.scrollDOM.clientWidth && (qQ.lineWrapping && (FQ = !0), this.editorWidth = QQ.scrollDOM.clientWidth, PQ |= 16);
        let IQ = mQ(this.view.contentDOM, !1).y;
        IQ != this.scrollParent && (this.scrollParent = IQ, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
        let jQ = this.getScrollOffset();
        this.scrollOffset != jQ && (this.scrollAnchorHeight = -1, this.scrollOffset = jQ), this.scrolledToBottom = TW(this.scrollParent || QQ.win);
        let BQ = (this.printing ? Wq : Qq)(WQ, this.paddingTop),
          yQ = BQ.top - this.pixelViewport.top,
          VQ = BQ.bottom - this.pixelViewport.bottom;
        this.pixelViewport = BQ;
        let DQ = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
        if (DQ != this.inView && (this.inView = DQ, DQ && (FQ = !0)), !this.inView && !this.scrollTarget && ! function(QQ) {
            let WQ = QQ.getBoundingClientRect(),
              XQ = QQ.ownerDocument.defaultView || window;
            return WQ.left < XQ.innerWidth && WQ.right > 0 && WQ.top < XQ.innerHeight && WQ.bottom > 0
          }(QQ.dom)) return 0;
        let pQ = sQ.width;
        if (this.contentDOMWidth == pQ && this.editorHeight == QQ.scrollDOM.clientHeight || (this.contentDOMWidth = sQ.width, this.editorHeight = QQ.scrollDOM.clientHeight, PQ |= 16), FQ) {
          let WQ = QQ.docView.measureVisibleLineHeights(this.viewport);
          if (qQ.mustRefreshForHeights(WQ) && (zQ = !0), zQ || qQ.lineWrapping && Math.abs(pQ - this.contentDOMWidth) > qQ.charWidth) {
            let {
              lineHeight: XQ,
              charWidth: wQ,
              textHeight: sQ
            } = QQ.docView.measureTextSize();
            zQ = XQ > 0 && qQ.refresh(TQ, XQ, wQ, sQ, Math.max(5, pQ / wQ), WQ), zQ && (QQ.docView.minWidth = 0, PQ |= 16)
          }
          yQ > 0 && VQ > 0 ? gQ = Math.max(yQ, VQ) : yQ < 0 && VQ < 0 && (gQ = Math.min(yQ, VQ)), Lw();
          for (let XQ of this.viewports) {
            let TQ = XQ.from == this.viewport.from ? WQ : QQ.docView.measureVisibleLineHeights(XQ);
            this.heightMap = (zQ ? ew.empty().applyChanges(this.stateDeco, wQ.M.empty, this.heightOracle, [new PX(0, 0, 0, QQ.state.doc.length)]) : this.heightMap).updateHeight(qQ, 0, zQ, new fw(XQ.from, TQ))
          }
          uw && (PQ |= 2)
        }
        let GQ = !this.viewportIsAppropriate(this.viewport, gQ) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
        return GQ && (2 & PQ && (PQ |= this.updateScaler()), this.viewport = this.getViewport(gQ, this.scrollTarget), PQ |= this.updateForViewport()), (2 & PQ || GQ) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(zQ ? [] : this.lineGaps, QQ)), PQ |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, QQ.docView.enforceCursorAssoc()), PQ
      }
      get visibleTop() {
        return this.scaler.fromDOM(this.pixelViewport.top)
      }
      get visibleBottom() {
        return this.scaler.fromDOM(this.pixelViewport.bottom)
      }
      getViewport(QQ, WQ) {
        let XQ = .5 - Math.max(-.5, Math.min(.5, QQ / 1e3 / 2)),
          wQ = this.heightMap,
          qQ = this.heightOracle,
          {
            visibleTop: TQ,
            visibleBottom: zQ
          } = this,
          sQ = new Tq(wQ.lineAt(TQ - 1e3 * XQ, tw.ByHeight, qQ, 0, 0).from, wQ.lineAt(zQ + 1e3 * (1 - XQ), tw.ByHeight, qQ, 0, 0).to);
        if (WQ) {
          let {
            head: QQ
          } = WQ.range;
          if (QQ < sQ.from || QQ > sQ.to) {
            let XQ, TQ = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
              zQ = wQ.lineAt(QQ, tw.ByPos, qQ, 0, 0);
            XQ = "center" == WQ.y ? (zQ.top + zQ.bottom) / 2 - TQ / 2 : "start" == WQ.y || "nearest" == WQ.y && QQ < sQ.from ? zQ.top : zQ.bottom - TQ, sQ = new Tq(wQ.lineAt(XQ - 500, tw.ByHeight, qQ, 0, 0).from, wQ.lineAt(XQ + TQ + 500, tw.ByHeight, qQ, 0, 0).to)
          }
        }
        return sQ
      }
      mapViewport(QQ, WQ) {
        let XQ = WQ.mapPos(QQ.from, -1),
          wQ = WQ.mapPos(QQ.to, 1);
        return new Tq(this.heightMap.lineAt(XQ, tw.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(wQ, tw.ByPos, this.heightOracle, 0, 0).to)
      }
      viewportIsAppropriate(QQ) {
        let {
          from: WQ,
          to: XQ
        } = QQ, wQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!this.inView) return !0;
        let {
          top: qQ
        } = this.heightMap.lineAt(WQ, tw.ByPos, this.heightOracle, 0, 0), {
          bottom: TQ
        } = this.heightMap.lineAt(XQ, tw.ByPos, this.heightOracle, 0, 0), {
          visibleTop: zQ,
          visibleBottom: sQ
        } = this;
        return (0 == WQ || qQ <= zQ - Math.max(10, Math.min(-wQ, 250))) && (XQ == this.state.doc.length || TQ >= sQ + Math.max(10, Math.min(wQ, 250))) && qQ > zQ - 2e3 && TQ < sQ + 2e3
      }
      mapLineGaps(QQ, WQ) {
        if (!QQ.length || WQ.empty) return QQ;
        let XQ = [];
        for (let wQ of QQ) WQ.touchesRange(wQ.from, wQ.to) || XQ.push(new Xq(WQ.mapPos(wQ.from), WQ.mapPos(wQ.to), wQ.size, wQ.displaySize));
        return XQ
      }
      ensureLineGaps(QQ, WQ) {
        let XQ = this.heightOracle.lineWrapping,
          qQ = XQ ? 1e4 : 2e3,
          TQ = qQ >> 1,
          zQ = qQ << 1;
        if (this.defaultTextDirection != PW.LTR && !XQ) return [];
        let sQ = [],
          FQ = (qQ, zQ, PQ, gQ) => {
            if (zQ - qQ < TQ) return;
            let JQ = this.state.selection.main,
              rQ = [JQ.from];
            JQ.empty || rQ.push(JQ.to);
            for (let QQ of rQ)
              if (QQ > qQ && QQ < zQ) return FQ(qQ, QQ - 10, PQ, gQ), void FQ(QQ + 10, zQ, PQ, gQ);
            let IQ = function(QQ, WQ) {
              for (let XQ of QQ)
                if (WQ(XQ)) return XQ;
              return
            }(QQ, (QQ => QQ.from >= PQ.from && QQ.to <= PQ.to && Math.abs(QQ.from - qQ) < TQ && Math.abs(QQ.to - zQ) < TQ && !rQ.some((WQ => QQ.from < WQ && QQ.to > WQ))));
            if (!IQ) {
              if (zQ < PQ.to && WQ && XQ && WQ.t5.some((QQ => QQ.from <= zQ && QQ.to >= zQ))) {
                let QQ = WQ.moveToLineBoundary(wQ.k.cursor(zQ), !1, !0).head;
                QQ > qQ && (zQ = QQ)
              }
              let QQ = this.gapSize(PQ, qQ, zQ, gQ);
              IQ = new Xq(qQ, zQ, QQ, XQ || QQ < 2e6 ? QQ : 2e6)
            }
            sQ.push(IQ)
          },
          PQ = WQ => {
            if (WQ.length < zQ || WQ.type != cQ.Text) return;
            let TQ = function(QQ, WQ, XQ) {
              let qQ = [],
                TQ = QQ,
                zQ = 0;
              wQ.A.spans(XQ, QQ, WQ, {
                span() {},
                point(QQ, WQ) {
                  QQ > TQ && (qQ.push({
                    from: TQ,
                    to: QQ
                  }), zQ += QQ - TQ), TQ = WQ
                }
              }, 20), TQ < WQ && (qQ.push({
                from: TQ,
                to: WQ
              }), zQ += WQ - TQ);
              return {
                total: zQ,
                Qy: qQ
              }
            }(WQ.from, WQ.to, this.stateDeco);
            if (TQ.total < zQ) return;
            let sQ, PQ, gQ = this.scrollTarget ? this.scrollTarget.range.head : null;
            if (XQ) {
              let QQ, XQ, wQ = qQ / this.heightOracle.lineLength * this.heightOracle.lineHeight;
              if (null != gQ) {
                let qQ = sq(TQ, gQ),
                  zQ = ((this.visibleBottom - this.visibleTop) / 2 + wQ) / WQ.height;
                QQ = qQ - zQ, XQ = qQ + zQ
              } else QQ = (this.visibleTop - WQ.top - wQ) / WQ.height, XQ = (this.visibleBottom - WQ.top + wQ) / WQ.height;
              sQ = zq(TQ, QQ), PQ = zq(TQ, XQ)
            } else {
              let XQ = TQ.total * this.heightOracle.charWidth,
                wQ = qQ * this.heightOracle.charWidth,
                zQ = 0;
              if (XQ > 2e6)
                for (let qQ of QQ) qQ.from >= WQ.from && qQ.from < WQ.to && qQ.size != qQ.displaySize && qQ.from * this.heightOracle.charWidth + zQ < this.pixelViewport.left && (zQ = qQ.size - qQ.displaySize);
              let FQ, JQ, rQ = this.pixelViewport.left + zQ,
                IQ = this.pixelViewport.right + zQ;
              if (null != gQ) {
                let QQ = sq(TQ, gQ),
                  WQ = ((IQ - rQ) / 2 + wQ) / XQ;
                FQ = QQ - WQ, JQ = QQ + WQ
              } else FQ = (rQ - wQ) / XQ, JQ = (IQ + wQ) / XQ;
              sQ = zq(TQ, FQ), PQ = zq(TQ, JQ)
            }
            sQ > WQ.from && FQ(WQ.from, sQ, WQ, TQ), PQ < WQ.to && FQ(PQ, WQ.to, WQ, TQ)
          };
        for (let wQ of this.viewportLines) Array.isArray(wQ.type) ? wQ.type.forEach(PQ) : PQ(wQ);
        return sQ
      }
      gapSize(QQ, WQ, XQ, wQ) {
        let qQ = sq(wQ, XQ) - sq(wQ, WQ);
        return this.heightOracle.lineWrapping ? QQ.height * qQ : wQ.total * this.heightOracle.charWidth * qQ
      }
      updateLineGaps(QQ) {
        Xq.same(QQ, this.lineGaps) || (this.lineGaps = QQ, this.lineGapDeco = AQ.set(QQ.map((QQ => QQ.draw(this, this.heightOracle.lineWrapping)))))
      }
      computeVisibleRanges(QQ) {
        let WQ = this.stateDeco;
        this.lineGaps.length && (WQ = WQ.concat(this.lineGapDeco));
        let XQ = [];
        wQ.A.spans(WQ, this.viewport.from, this.viewport.to, {
          span(QQ, WQ) {
            XQ.push({
              from: QQ,
              to: WQ
            })
          },
          point() {}
        }, 20);
        let qQ = 0;
        if (XQ.length != this.t5.length) qQ = 12;
        else
          for (let wQ = 0; wQ < XQ.length && !(8 & qQ); wQ++) {
            let WQ = this.t5[wQ],
              TQ = XQ[wQ];
            WQ.from == TQ.from && WQ.to == TQ.to || (qQ |= 4, QQ && QQ.mapPos(WQ.from, -1) == TQ.from && QQ.mapPos(WQ.to, 1) == TQ.to || (qQ |= 8))
          }
        return this.t5 = XQ, qQ
      }
      lineBlockAt(QQ) {
        return QQ >= this.viewport.from && QQ <= this.viewport.to && this.viewportLines.find((WQ => WQ.from <= QQ && WQ.to >= QQ)) || Jq(this.heightMap.lineAt(QQ, tw.ByPos, this.heightOracle, 0, 0), this.scaler)
      }
      lineBlockAtHeight(QQ) {
        return QQ >= this.viewportLines[0].top && QQ <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((WQ => WQ.top <= QQ && WQ.bottom >= QQ)) || Jq(this.heightMap.lineAt(this.scaler.fromDOM(QQ), tw.ByHeight, this.heightOracle, 0, 0), this.scaler)
      }
      getScrollOffset() {
        return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY
      }
      scrollAnchorAt(QQ) {
        let WQ = this.lineBlockAtHeight(QQ + 8);
        return WQ.from >= this.viewport.from || this.viewportLines[0].top - QQ > 200 ? WQ : this.viewportLines[0]
      }
      elementAtHeight(QQ) {
        return Jq(this.heightMap.blockAt(this.scaler.fromDOM(QQ), this.heightOracle, 0, 0), this.scaler)
      }
      get docHeight() {
        return this.scaler.toDOM(this.heightMap.height)
      }
      get contentHeight() {
        return this.docHeight + this.paddingTop + this.paddingBottom
      }
    }
    class Tq {
      constructor(QQ, WQ) {
        this.from = QQ, this.to = WQ
      }
    }

    function zq(QQ, WQ) {
      let {
        total: XQ,
        Qy: wQ
      } = QQ;
      if (WQ <= 0) return wQ[0].from;
      if (WQ >= 1) return wQ[wQ.length - 1].to;
      let qQ = Math.floor(XQ * WQ);
      for (let TQ = 0;; TQ++) {
        let {
          from: QQ,
          to: WQ
        } = wQ[TQ], XQ = WQ - QQ;
        if (qQ <= XQ) return QQ + qQ;
        qQ -= XQ
      }
    }

    function sq(QQ, WQ) {
      let XQ = 0;
      for (let {
          from: wQ,
          to: qQ
        }
        of QQ.Qy) {
        if (WQ <= qQ) {
          XQ += WQ - wQ;
          break
        }
        XQ += qQ - wQ
      }
      return XQ / QQ.total
    }
    const Fq = {
      toDOM: QQ => QQ,
      fromDOM: QQ => QQ,
      scale: 1,
      eq(QQ) {
        return QQ == this
      }
    };

    function Pq(QQ) {
      let WQ = QQ.facet(QX).filter((QQ => "function" != typeof QQ)),
        XQ = QQ.facet(XX).filter((QQ => "function" != typeof QQ));
      return XQ.length && WQ.push(wQ.A.join(XQ)), WQ
    }
    class gq {
      constructor(QQ, WQ, XQ) {
        let wQ = 0,
          qQ = 0,
          TQ = 0;
        this.viewports = XQ.map((XQ => {
          let {
            from: qQ,
            to: TQ
          } = XQ, zQ = WQ.lineAt(qQ, tw.ByPos, QQ, 0, 0).top, sQ = WQ.lineAt(TQ, tw.ByPos, QQ, 0, 0).bottom;
          return wQ += sQ - zQ, {
            from: qQ,
            to: TQ,
            top: zQ,
            bottom: sQ,
            domTop: 0,
            domBottom: 0
          }
        })), this.scale = (7e6 - wQ) / (WQ.height - wQ);
        for (let zQ of this.viewports) zQ.domTop = TQ + (zQ.top - qQ) * this.scale, TQ = zQ.domBottom = zQ.domTop + (zQ.bottom - zQ.top), qQ = zQ.bottom
      }
      toDOM(QQ) {
        for (let WQ = 0, XQ = 0, wQ = 0;; WQ++) {
          let qQ = WQ < this.viewports.length ? this.viewports[WQ] : null;
          if (!qQ || QQ < qQ.top) return wQ + (QQ - XQ) * this.scale;
          if (QQ <= qQ.bottom) return qQ.domTop + (QQ - qQ.top);
          XQ = qQ.bottom, wQ = qQ.domBottom
        }
      }
      fromDOM(QQ) {
        for (let WQ = 0, XQ = 0, wQ = 0;; WQ++) {
          let qQ = WQ < this.viewports.length ? this.viewports[WQ] : null;
          if (!qQ || QQ < qQ.domTop) return XQ + (QQ - wQ) / this.scale;
          if (QQ <= qQ.domBottom) return qQ.top + (QQ - qQ.domTop);
          XQ = qQ.bottom, wQ = qQ.domBottom
        }
      }
      eq(QQ) {
        return QQ instanceof gq && (this.scale == QQ.scale && this.viewports.length == QQ.viewports.length && this.viewports.every(((WQ, XQ) => WQ.from == QQ.viewports[XQ].from && WQ.to == QQ.viewports[XQ].to)))
      }
    }

    function Jq(QQ, WQ) {
      if (1 == WQ.scale) return QQ;
      let XQ = WQ.toDOM(QQ.top),
        wQ = WQ.toDOM(QQ.bottom);
      return new Sw(QQ.from, QQ.length, XQ, wQ - XQ, Array.isArray(QQ._content) ? QQ._content.map((QQ => Jq(QQ, WQ))) : QQ._content)
    }
    const rq = wQ.o.define({
        combine: QQ => QQ.join(" ")
      }),
      Iq = wQ.o.define({
        combine: QQ => QQ.indexOf(!0) > -1
      }),
      jq = qQ.b.newName(),
      Bq = qQ.b.newName(),
      yq = qQ.b.newName(),
      Vq = {
        "&light": "." + Bq,
        "&dark": "." + yq
      };

    function Dq(QQ, WQ, XQ) {
      return new qQ.b(WQ, {
        finish: WQ => /&/.test(WQ) ? WQ.replace(/&\w*/, (WQ => {
          if ("&" == WQ) return QQ;
          if (!XQ || !XQ[WQ]) throw new RangeError(`Unsupported selector: ${WQ}`);
          return XQ[WQ]
        })) : QQ + " " + WQ
      })
    }
    const pq = Dq("." + jq, {
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
      }, Vq),
      Gq = {
        childList: !0,
        characterData: !0,
        subtree: !0,
        attributes: !0,
        characterDataOldValue: !0
      },
      Uq = vQ.ie && vQ.ie_version <= 11;
    class bq {
      constructor(QQ) {
        this.view = QQ, this.active = !1, this.editContext = null, this.selectionRange = new MQ, this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = QQ.contentDOM, this.observer = new MutationObserver((WQ => {
          for (let QQ of WQ) this.queue.push(QQ);
          (vQ.ie && vQ.ie_version <= 11 || vQ.ios && QQ.composing) && WQ.some((QQ => "childList" == QQ.type && QQ.removedNodes.length || "characterData" == QQ.type && QQ.oldValue.length > QQ.target.nodeValue.length)) ? this.flushSoon() : this.flush()
        })), !window.EditContext || !vQ.android || !1 === QQ.constructor.EDIT_CONTEXT || vQ.chrome && vQ.chrome_version < 126 || (this.editContext = new Hq(QQ), QQ.state.facet(YW) && (QQ.contentDOM.editContext = this.editContext.editContext)), Uq && (this.onCharData = QQ => {
          this.queue.push({
            target: QQ.target,
            type: "characterData",
            oldValue: QQ.prevValue
          }), this.flushSoon()
        }), this.onSelectionChange = this.onSelectionChange.bind(this), this.cV = this.cV.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver((() => {
          var QQ;
          (null === (QQ = this.view.docView) || void 0 === QQ ? void 0 : QQ.lastUpdate) < Date.now() - 75 && this.cV()
        })), this.resizeScroll.observe(QQ.scrollDOM)), this.addWindowListeners(this.win = QQ.win), this.start(), "function" == typeof IntersectionObserver && (this.intersection = new IntersectionObserver((QQ => {
          this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), QQ.length > 0 && QQ[QQ.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")))
        }), {
          threshold: [0, .001]
        }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((QQ => {
          QQ.length > 0 && QQ[QQ.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"))
        }), {})), this.listenForScroll(), this.readSelectionRange()
      }
      onScrollChanged(QQ) {
        this.view.inputState.runHandlers("scroll", QQ), this.intersecting && this.view.measure()
      }
      onScroll(QQ) {
        this.intersecting && this.flush(!1), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(QQ)
      }
      cV() {
        this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout((() => {
          this.resizeTimeout = -1, this.view.requestMeasure()
        }), 50))
      }
      onPrint(QQ) {
        ("change" != QQ.type && QQ.type || QQ.matches) && (this.view.viewState.printing = !0, this.view.measure(), setTimeout((() => {
          this.view.viewState.printing = !1, this.view.requestMeasure()
        }), 500))
      }
      updateGaps(QQ) {
        if (this.gapIntersection && (QQ.length != this.gaps.length || this.gaps.some(((WQ, XQ) => WQ != QQ[XQ])))) {
          this.gapIntersection.disconnect();
          for (let WQ of QQ) this.gapIntersection.observe(WQ);
          this.gaps = QQ
        }
      }
      onSelectionChange(QQ) {
        let WQ = this.selectionChanged;
        if (!this.readSelectionRange() || this.delayedAndroidKey) return;
        let {
          view: XQ
        } = this, wQ = this.selectionRange;
        if (XQ.state.facet(YW) ? XQ.root.activeElement != this.dom : !tQ(this.dom, wQ)) return;
        let qQ = wQ.anchorNode && XQ.docView.tile.nearest(wQ.anchorNode);
        qQ && qQ.isWidget() && qQ.widget.ignoreEvent(QQ) ? WQ || (this.selectionChanged = !1) : (vQ.ie && vQ.ie_version <= 11 || vQ.android && vQ.chrome) && !XQ.state.selection.main.empty && wQ.focusNode && eQ(wQ.focusNode, wQ.focusOffset, wQ.anchorNode, wQ.anchorOffset) ? this.flushSoon() : this.flush(!1)
      }
      readSelectionRange() {
        let {
          view: QQ
        } = this, WQ = fQ(QQ.root);
        if (!WQ) return !1;
        let XQ = vQ.safari && 11 == QQ.root.nodeType && QQ.root.activeElement == this.dom && function(QQ, WQ) {
          if (WQ.getComposedRanges) {
            let XQ = WQ.getComposedRanges(QQ.root)[0];
            if (XQ) return dq(QQ, XQ)
          }
          let XQ = null;

          function wQ(QQ) {
            QQ.preventDefault(), QQ.stopImmediatePropagation(), XQ = QQ.getTargetRanges()[0]
          }
          return QQ.contentDOM.addEventListener("beforeinput", wQ, !0), QQ.dom.ownerDocument.execCommand("indent"), QQ.contentDOM.removeEventListener("beforeinput", wQ, !0), XQ ? dq(QQ, XQ) : null
        }(this.view, WQ) || WQ;
        if (!XQ || this.selectionRange.eq(XQ)) return !1;
        let wQ = tQ(this.dom, XQ);
        return wQ && !this.selectionChanged && QQ.inputState.lastFocusTime > Date.now() - 200 && QQ.inputState.lastTouchTime < Date.now() - 300 && function(QQ, WQ) {
          let XQ = WQ.focusNode,
            wQ = WQ.focusOffset;
          if (!XQ || WQ.anchorNode != XQ || WQ.anchorOffset != wQ) return !1;
          for (wQ = Math.min(wQ, NQ(XQ));;)
            if (wQ) {
              if (1 != XQ.nodeType) return !1;
              let QQ = XQ.childNodes[wQ - 1];
              "false" == QQ.contentEditable ? wQ-- : (XQ = QQ, wQ = NQ(XQ))
            } else {
              if (XQ == QQ) return !0;
              wQ = nQ(XQ), XQ = XQ.parentNode
            }
        }(this.dom, XQ) ? (this.view.inputState.lastFocusTime = 0, QQ.docView.updateSelection(), !1) : (this.selectionRange.setRange(XQ), wQ && (this.selectionChanged = !0), !0)
      }
      setSelectionRange(QQ, WQ) {
        this.selectionRange.set(QQ.node, QQ.offset, WQ.node, WQ.offset), this.selectionChanged = !1
      }
      clearSelectionRange() {
        this.selectionRange.set(null, 0, null, 0)
      }
      listenForScroll() {
        this.parentCheck = -1;
        let QQ = 0,
          WQ = null;
        for (let XQ = this.dom; XQ;)
          if (1 == XQ.nodeType) !WQ && QQ < this.scrollTargets.length && this.scrollTargets[QQ] == XQ ? QQ++ : WQ || (WQ = this.scrollTargets.slice(0, QQ)), WQ && WQ.push(XQ), XQ = XQ.assignedSlot || XQ.parentNode;
          else {
            if (11 != XQ.nodeType) break;
            XQ = XQ.host
          } if (QQ < this.scrollTargets.length && !WQ && (WQ = this.scrollTargets.slice(0, QQ)), WQ) {
          for (let QQ of this.scrollTargets) QQ.removeEventListener("scroll", this.onScroll);
          for (let QQ of this.scrollTargets = WQ) QQ.addEventListener("scroll", this.onScroll)
        }
      }
      ignore(QQ) {
        if (!this.active) return QQ();
        try {
          return this.stop(), QQ()
        } finally {
          this.start(), this.clear()
        }
      }
      start() {
        this.active || (this.observer.observe(this.dom, Gq), Uq && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0)
      }
      stop() {
        this.active && (this.active = !1, this.observer.disconnect(), Uq && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData))
      }
      clear() {
        this.processRecords(), this.queue.length = 0, this.selectionChanged = !1
      }
      delayAndroidKey(QQ, WQ) {
        var XQ;
        if (!this.delayedAndroidKey) {
          let QQ = () => {
            let QQ = this.delayedAndroidKey;
            if (QQ) {
              this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = QQ.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && QQ.force && qW(this.dom, QQ.key, QQ.keyCode)
            }
          };
          this.flushingAndroidKey = this.view.win.requestAnimationFrame(QQ)
        }
        this.delayedAndroidKey && "Enter" != QQ || (this.delayedAndroidKey = {
          key: QQ,
          keyCode: WQ,
          force: this.lastChange < Date.now() - 50 || !!(null === (XQ = this.delayedAndroidKey) || void 0 === XQ ? void 0 : XQ.force)
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
        for (let QQ of this.observer.takeRecords()) this.queue.push(QQ);
        return this.queue
      }
      processRecords() {
        let QQ = this.pendingRecords();
        QQ.length && (this.queue = []);
        let WQ = -1,
          XQ = -1,
          wQ = !1;
        for (let qQ of QQ) {
          let QQ = this.readMutation(qQ);
          QQ && (QQ.typeOver && (wQ = !0), -1 == WQ ? ({
            from: WQ,
            to: XQ
          } = QQ) : (WQ = Math.min(QQ.from, WQ), XQ = Math.max(QQ.to, XQ)))
        }
        return {
          from: WQ,
          to: XQ,
          typeOver: wQ
        }
      }
      readChange() {
        let {
          from: QQ,
          to: WQ,
          typeOver: XQ
        } = this.processRecords(), wQ = this.selectionChanged && tQ(this.dom, this.selectionRange);
        if (QQ < 0 && !wQ) return null;
        QQ > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
        let qQ = new Xw(this.view, QQ, WQ, XQ);
        return this.view.docView.domChanged = {
          newSel: qQ.newSel ? qQ.newSel.main : null
        }, qQ
      }
      flush() {
        let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
        QQ && this.readSelectionRange();
        let WQ = this.readChange();
        if (!WQ) return this.view.requestMeasure(), !1;
        let XQ = this.view.state,
          wQ = qw(this.view, WQ);
        return this.view.state == XQ && (WQ.domChanged || WQ.newSel && !sw(this.view.state.selection, WQ.newSel.main)) && this.view.update([]), wQ
      }
      readMutation(QQ) {
        let WQ = this.view.docView.tile.nearest(QQ.target);
        if (!WQ || WQ.isWidget()) return null;
        if (WQ.markDirty("attributes" == QQ.type), "childList" == QQ.type) {
          let XQ = vq(WQ, QQ.previousSibling || QQ.target.previousSibling, -1),
            wQ = vq(WQ, QQ.nextSibling || QQ.target.nextSibling, 1);
          return {
            from: XQ ? WQ.posAfter(XQ) : WQ.posAtStart,
            to: wQ ? WQ.posBefore(wQ) : WQ.posAtEnd,
            typeOver: !1
          }
        }
        return "characterData" == QQ.type ? {
          from: WQ.posAtStart,
          to: WQ.posAtEnd,
          typeOver: QQ.target.nodeValue == QQ.oldValue
        } : null
      }
      setWindow(QQ) {
        QQ != this.win && (this.removeWindowListeners(this.win), this.win = QQ, this.addWindowListeners(this.win))
      }
      addWindowListeners(QQ) {
        QQ.addEventListener("resize", this.cV), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : QQ.addEventListener("beforeprint", this.onPrint), QQ.addEventListener("scroll", this.onScroll), QQ.document.addEventListener("selectionchange", this.onSelectionChange)
      }
      removeWindowListeners(QQ) {
        QQ.removeEventListener("scroll", this.onScroll), QQ.removeEventListener("resize", this.cV), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : QQ.removeEventListener("beforeprint", this.onPrint), QQ.document.removeEventListener("selectionchange", this.onSelectionChange)
      }
      update(QQ) {
        this.editContext && (this.editContext.update(QQ), QQ.startState.facet(YW) != QQ.state.facet(YW) && (QQ.view.contentDOM.editContext = QQ.state.facet(YW) ? this.editContext.editContext : null))
      }
      destroy() {
        var QQ, WQ, XQ;
        this.stop(), null === (QQ = this.intersection) || void 0 === QQ || QQ.disconnect(), null === (WQ = this.gapIntersection) || void 0 === WQ || WQ.disconnect(), null === (XQ = this.resizeScroll) || void 0 === XQ || XQ.disconnect();
        for (let wQ of this.scrollTargets) wQ.removeEventListener("scroll", this.onScroll);
        this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy())
      }
    }

    function vq(QQ, WQ, XQ) {
      for (; WQ;) {
        let wQ = rX.get(WQ);
        if (wQ && wQ.parent == QQ) return wQ;
        let qQ = WQ.parentNode;
        WQ = qQ != QQ.dom ? qQ : XQ > 0 ? WQ.nextSibling : WQ.previousSibling
      }
      return null
    }

    function dq(QQ, WQ) {
      let XQ = WQ.startContainer,
        wQ = WQ.startOffset,
        qQ = WQ.endContainer,
        TQ = WQ.endOffset,
        zQ = QQ.docView.domAtPos(QQ.state.selection.main.anchor, 1);
      return eQ(zQ.node, zQ.offset, qQ, TQ) && ([XQ, wQ, qQ, TQ] = [qQ, TQ, XQ, wQ]), {
        anchorNode: XQ,
        anchorOffset: wQ,
        focusNode: qQ,
        focusOffset: TQ
      }
    }
    class Hq {
      constructor(QQ) {
        this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = Object.create(null), this.composing = null, this.resetRange(QQ.state);
        let WQ = this.editContext = new window.EditContext({
          text: QQ.state.doc.sliceString(this.from, this.to),
          selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, QQ.state.selection.main.anchor))),
          selectionEnd: this.toContextPos(QQ.state.selection.main.head)
        });
        this.handlers.textupdate = XQ => {
          let qQ = QQ.state.selection.main,
            {
              anchor: TQ,
              head: zQ
            } = qQ,
            sQ = this.toEditorPos(XQ.updateRangeStart),
            FQ = this.toEditorPos(XQ.updateRangeEnd);
          QQ.inputState.composing >= 0 && !this.composing && (this.composing = {
            contextBase: XQ.updateRangeStart,
            editorBase: sQ,
            drifted: !1
          });
          let PQ = FQ - sQ > XQ.text.length;
          sQ == this.from && TQ < this.from ? sQ = TQ : FQ == this.to && TQ > this.to && (FQ = TQ);
          let gQ = zw(QQ.state.sliceDoc(sQ, FQ), XQ.text, (PQ ? qQ.from : qQ.to) - sQ, PQ ? "end" : null);
          if (!gQ) {
            let WQ = wQ.k.single(this.toEditorPos(XQ.selectionStart), this.toEditorPos(XQ.selectionEnd));
            return void(sw(WQ, qQ) || QQ.dispatch({
              selection: WQ,
              userEvent: "select"
            }))
          }
          let JQ = {
            from: gQ.from + sQ,
            to: gQ.toA + sQ,
            insert: wQ.M.of(XQ.text.slice(gQ.from, gQ.toB).split("\n"))
          };
          if ((vQ.mac || vQ.android) && JQ.from == zQ - 1 && /^\. ?$/.test(XQ.text) && "off" == QQ.contentDOM.getAttribute("autocorrect") && (JQ = {
              from: sQ,
              to: FQ,
              insert: wQ.M.of([XQ.text.replace(".", " ")])
            }), this.pendingContextChange = JQ, !QQ.state.readOnly) {
            let WQ = this.to - this.from + (JQ.to - JQ.from + JQ.insert.length);
            Tw(QQ, JQ, wQ.k.single(this.toEditorPos(XQ.selectionStart, WQ), this.toEditorPos(XQ.selectionEnd, WQ)))
          }
          this.pendingContextChange && (this.revertPending(QQ.state), this.setSelection(QQ.state)), JQ.from < JQ.to && !JQ.insert.length && QQ.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(WQ.text.slice(Math.max(0, XQ.updateRangeStart - 1), Math.min(WQ.text.length, XQ.updateRangeStart + 1))) && this.handlers.compositionend(XQ)
        }, this.handlers.characterboundsupdate = XQ => {
          let wQ = [],
            qQ = null;
          for (let WQ = this.toEditorPos(XQ.rangeStart), TQ = this.toEditorPos(XQ.rangeEnd); WQ < TQ; WQ++) {
            let XQ = QQ.coordsForChar(WQ);
            qQ = XQ && new DOMRect(XQ.left, XQ.top, XQ.right - XQ.left, XQ.bottom - XQ.top) || qQ || new DOMRect, wQ.push(qQ)
          }
          WQ.updateCharacterBounds(XQ.rangeStart, wQ)
        }, this.handlers.textformatupdate = WQ => {
          let XQ = [];
          for (let QQ of WQ.getTextFormats()) {
            let WQ = QQ.underlineStyle,
              wQ = QQ.underlineThickness;
            if (!/none/i.test(WQ) && !/none/i.test(wQ)) {
              let qQ = this.toEditorPos(QQ.rangeStart),
                TQ = this.toEditorPos(QQ.rangeEnd);
              if (qQ < TQ) {
                let QQ = `text-decoration: underline ${/^[a-z]/.test(WQ)?WQ+" ":"Dashed"==WQ?"dashed ":"Squiggle"==WQ?"wavy ":""}${/thin/i.test(wQ)?1:2}px`;
                XQ.push(AQ.mark({
                  attributes: {
                    style: QQ
                  }
                }).range(qQ, TQ))
              }
            }
          }
          QQ.dispatch({
            effects: nW.of(AQ.set(XQ))
          })
        }, this.handlers.compositionstart = () => {
          QQ.inputState.composing < 0 && (QQ.inputState.composing = 0, QQ.inputState.compositionFirstChange = !0)
        }, this.handlers.compositionend = () => {
          if (QQ.inputState.composing = -1, QQ.inputState.compositionFirstChange = null, this.composing) {
            let {
              drifted: WQ
            } = this.composing;
            this.composing = null, WQ && this.reset(QQ.state)
          }
        };
        for (let XQ in this.handlers) WQ.addEventListener(XQ, this.handlers[XQ]);
        this.measureReq = {
          read: QQ => {
            this.editContext.updateControlBounds(QQ.contentDOM.getBoundingClientRect());
            let WQ = fQ(QQ.root);
            WQ && WQ.rangeCount && this.editContext.updateSelectionBounds(WQ.getRangeAt(0).getBoundingClientRect())
          }
        }
      }
      applyEdits(QQ) {
        let WQ = 0,
          XQ = !1,
          wQ = this.pendingContextChange;
        return QQ.changes.iterChanges(((qQ, TQ, zQ, sQ, FQ) => {
          if (XQ) return;
          let PQ = FQ.length - (TQ - qQ);
          if (wQ && TQ >= wQ.to) {
            if (wQ.from == qQ && wQ.to == TQ && wQ.insert.eq(FQ)) return wQ = this.pendingContextChange = null, WQ += PQ, void(this.to += PQ);
            wQ = null, this.revertPending(QQ.state)
          }
          if (qQ += WQ, (TQ += WQ) <= this.from) this.from += PQ, this.to += PQ;
          else if (qQ < this.to) {
            if (qQ < this.from || TQ > this.to || this.to - this.from + FQ.length > 3e4) return void(XQ = !0);
            this.editContext.updateText(this.toContextPos(qQ), this.toContextPos(TQ), FQ.toString()), this.to += PQ
          }
          WQ += PQ
        })), wQ && !XQ && this.revertPending(QQ.state), !XQ
      }
      update(QQ) {
        let WQ = this.pendingContextChange,
          XQ = QQ.startState.selection.main;
        this.composing && (this.composing.drifted || !QQ.changes.touchesRange(XQ.from, XQ.to) && QQ.transactions.some((QQ => !QQ.isUserEvent("input.type") && QQ.changes.touchesRange(this.from, this.to)))) ? (this.composing.drifted = !0, this.composing.editorBase = QQ.changes.mapPos(this.composing.editorBase)) : this.applyEdits(QQ) && this.rangeIsValid(QQ.state) ? (QQ.docChanged || QQ.selectionSet || WQ) && this.setSelection(QQ.state) : (this.pendingContextChange = null, this.reset(QQ.state)), (QQ.geometryChanged || QQ.docChanged || QQ.selectionSet) && QQ.view.requestMeasure(this.measureReq)
      }
      resetRange(QQ) {
        let {
          head: WQ
        } = QQ.selection.main;
        this.from = Math.max(0, WQ - 1e4), this.to = Math.min(QQ.doc.length, WQ + 1e4)
      }
      reset(QQ) {
        this.resetRange(QQ), this.editContext.updateText(0, this.editContext.text.length, QQ.doc.sliceString(this.from, this.to)), this.setSelection(QQ)
      }
      revertPending(QQ) {
        let WQ = this.pendingContextChange;
        this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(WQ.from), this.toContextPos(WQ.from + WQ.insert.length), QQ.doc.sliceString(WQ.from, WQ.to))
      }
      setSelection(QQ) {
        let {
          main: WQ
        } = QQ.selection, XQ = this.toContextPos(Math.max(this.from, Math.min(this.to, WQ.anchor))), wQ = this.toContextPos(WQ.head);
        this.editContext.selectionStart == XQ && this.editContext.selectionEnd == wQ || this.editContext.updateSelection(XQ, wQ)
      }
      rangeIsValid(QQ) {
        let {
          head: WQ
        } = QQ.selection.main;
        return !(this.from > 0 && WQ - this.from < 500 || this.to < QQ.doc.length && this.to - WQ < 500 || this.to - this.from > 3e4)
      }
      toEditorPos(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.to - this.from;
        QQ = Math.min(QQ, WQ);
        let XQ = this.composing;
        return XQ && XQ.drifted ? XQ.editorBase + (QQ - XQ.contextBase) : QQ + this.from
      }
      toContextPos(QQ) {
        let WQ = this.composing;
        return WQ && WQ.drifted ? WQ.contextBase + (QQ - WQ.editorBase) : QQ - this.from
      }
      destroy() {
        for (let QQ in this.handlers) this.editContext.removeEventListener(QQ, this.handlers[QQ])
      }
    }
    class aq {
      get state() {
        return this.viewState.state
      }
      get viewport() {
        return this.viewState.viewport
      }
      get t5() {
        return this.viewState.t5
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
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var WQ;
        this.plugins = [], this.pluginMap = new Map, this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), QQ.parent && QQ.parent.appendChild(this.dom);
        let {
          dispatch: XQ
        } = QQ;
        this.dispatchTransactions = QQ.dispatchTransactions || XQ && (QQ => QQ.forEach((QQ => XQ(QQ, this)))) || (QQ => this.update(QQ)), this.dispatch = this.dispatch.bind(this), this._root = QQ.root || function(QQ) {
          for (; QQ;) {
            if (QQ && (9 == QQ.nodeType || 11 == QQ.nodeType && QQ.host)) return QQ;
            QQ = QQ.assignedSlot || QQ.parentNode
          }
          return null
        }(QQ.parent) || document, this.viewState = new qq(this, QQ.state || wQ.l.create(QQ)), QQ.scrollTo && QQ.scrollTo.is(eW) && (this.viewState.scrollTarget = QQ.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(ZW).map((QQ => new KW(QQ)));
        for (let wQ of this.plugins) wQ.update(this);
        this.observer = new bq(this), this.inputState = new Fw(this), this.inputState.ensureHandlers(this.plugins), this.docView = new uX(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), (null === (WQ = document.fonts) || void 0 === WQ ? void 0 : WQ.ready) && document.fonts.ready.then((() => {
          this.viewState.mustMeasureContent = "refresh", this.requestMeasure()
        }))
      }
      dispatch() {
        for (var QQ = arguments.length, WQ = new Array(QQ), XQ = 0; XQ < QQ; XQ++) WQ[XQ] = arguments[XQ];
        let qQ = 1 == WQ.length && WQ[0] instanceof wQ.O ? WQ : 1 == WQ.length && Array.isArray(WQ[0]) ? WQ[0] : [this.state.update(...WQ)];
        this.dispatchTransactions(qQ, this)
      }
      update(QQ) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        let WQ, XQ = !1,
          qQ = !1,
          TQ = this.state;
        for (let wQ of QQ) {
          if (wQ.startState != TQ) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
          TQ = wQ.state
        }
        if (this.destroyed) return void(this.viewState.state = TQ);
        let zQ = this.hasFocus,
          sQ = 0,
          FQ = null;
        QQ.some((QQ => QQ.annotation(iw))) ? (this.inputState.notifiedFocused = zQ, sQ = 1) : zQ != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = zQ, FQ = Aw(TQ, zQ), FQ || (sQ = 1));
        let PQ = this.observer.delayedAndroidKey,
          gQ = null;
        if (PQ ? (this.observer.clearDelayedAndroidKey(), gQ = this.observer.readChange(), (gQ && !this.state.doc.eq(TQ.doc) || !this.state.selection.eq(TQ.selection)) && (gQ = null)) : this.observer.clear(), TQ.facet(wQ.l.phrases) != this.state.facet(wQ.l.phrases)) return this.setState(TQ);
        WQ = gX.create(this, TQ, QQ), WQ.flags |= sQ;
        let JQ = this.viewState.scrollTarget;
        try {
          this.updateState = 2;
          for (let WQ of QQ) {
            if (JQ && (JQ = JQ.map(WQ.changes)), WQ.scrollIntoView) {
              let {
                main: QQ
              } = WQ.state.selection, {
                x: XQ,
                y: qQ
              } = this.state.facet(aq.cursorScrollMargin);
              JQ = new oW(QQ.empty ? QQ : wQ.k.cursor(QQ.head, QQ.head > QQ.anchor ? -1 : 1), "nearest", "nearest", qQ, XQ)
            }
            for (let QQ of WQ.effects) QQ.is(eW) && (JQ = QQ.value.clip(this.state))
          }
          this.viewState.update(WQ, JQ), this.bidiCache = iq.update(this.bidiCache, WQ.changes), WQ.empty || (this.updatePlugins(WQ), this.inputState.update(WQ)), XQ = this.docView.update(WQ), this.state.facet(FX) != this.styleModules && this.mountStyles(), qQ = this.updateAttrs(), this.showAnnouncements(QQ), this.docView.updateSelection(XQ, QQ.some((QQ => QQ.isUserEvent("select.pointer"))))
        } finally {
          this.updateState = 0
        }
        if (WQ.startState.facet(rq) != WQ.state.facet(rq) && (this.viewState.mustMeasureContent = !0), (XQ || qQ || JQ || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), XQ && this.docViewUpdate(), !WQ.empty)
          for (let wQ of this.state.facet(EW)) try {
            wQ(WQ)
          } catch (rQ) {
            xW(this.state, rQ, "update listener")
          }(FQ || gQ) && Promise.resolve().then((() => {
            FQ && this.state == FQ.startState && this.dispatch(FQ), gQ && !qw(this, gQ) && PQ.force && qW(this.contentDOM, PQ.key, PQ.keyCode)
          }))
      }
      setState(QQ) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
        if (this.destroyed) return void(this.viewState.state = QQ);
        this.updateState = 2;
        let WQ = this.hasFocus;
        try {
          for (let QQ of this.plugins) QQ.destroy(this);
          this.viewState = new qq(this, QQ), this.plugins = QQ.facet(ZW).map((QQ => new KW(QQ))), this.pluginMap.clear();
          for (let QQ of this.plugins) QQ.update(this);
          this.docView.destroy(), this.docView = new uX(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = []
        } finally {
          this.updateState = 0
        }
        WQ && this.focus(), this.requestMeasure()
      }
      updatePlugins(QQ) {
        let WQ = QQ.startState.facet(ZW),
          XQ = QQ.state.facet(ZW);
        if (WQ != XQ) {
          let wQ = [];
          for (let qQ of XQ) {
            let XQ = WQ.indexOf(qQ);
            if (XQ < 0) wQ.push(new KW(qQ));
            else {
              let WQ = this.plugins[XQ];
              WQ.mustUpdate = QQ, wQ.push(WQ)
            }
          }
          for (let WQ of this.plugins) WQ.mustUpdate != QQ && WQ.destroy(this);
          this.plugins = wQ, this.pluginMap.clear()
        } else
          for (let wQ of this.plugins) wQ.mustUpdate = QQ;
        for (let wQ = 0; wQ < this.plugins.length; wQ++) this.plugins[wQ].update(this);
        WQ != XQ && this.inputState.ensureHandlers(this.plugins)
      }
      docViewUpdate() {
        for (let WQ of this.plugins) {
          let XQ = WQ.value;
          if (XQ && XQ.docViewUpdate) try {
            XQ.docViewUpdate(this)
          } catch (QQ) {
            xW(this.state, QQ, "doc view update listener")
          }
        }
      }
      measure() {
        let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.destroyed) return;
        if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) return this.measureScheduled = -1, void this.requestMeasure();
        this.measureScheduled = 0, QQ && this.observer.forceFlush();
        let WQ = null,
          XQ = this.viewState.scrollParent,
          wQ = this.viewState.getScrollOffset(),
          {
            scrollAnchorPos: qQ,
            scrollAnchorHeight: TQ
          } = this.viewState;
        Math.abs(wQ - this.viewState.scrollOffset) > 1 && (TQ = -1), this.viewState.scrollAnchorHeight = -1;
        try {
          for (let QQ = 0;; QQ++) {
            if (TQ < 0)
              if (TW(XQ || this.win)) qQ = -1, TQ = this.viewState.heightMap.height;
              else {
                let QQ = this.viewState.scrollAnchorAt(wQ);
                qQ = QQ.from, TQ = QQ.top
              } this.updateState = 1;
            let sQ = this.viewState.measure();
            if (!sQ && !this.measureRequests.length && null == this.viewState.scrollTarget) break;
            if (QQ > 5) {
              console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
              break
            }
            let FQ = [];
            4 & sQ || ([this.measureRequests, FQ] = [FQ, this.measureRequests]);
            let PQ = FQ.map((QQ => {
                try {
                  return QQ.read(this)
                } catch (WQ) {
                  return xW(this.state, WQ), hq
                }
              })),
              gQ = gX.create(this, this.state, []),
              JQ = !1;
            gQ.flags |= sQ, WQ ? WQ.flags |= sQ : WQ = gQ, this.updateState = 2, gQ.empty || (this.updatePlugins(gQ), this.inputState.update(gQ), this.updateAttrs(), JQ = this.docView.update(gQ), JQ && this.docViewUpdate());
            for (let QQ = 0; QQ < FQ.length; QQ++)
              if (PQ[QQ] != hq) try {
                let WQ = FQ[QQ];
                WQ.write && WQ.write(PQ[QQ], this)
              } catch (zQ) {
                xW(this.state, zQ)
              }
            if (JQ && this.docView.updateSelection(!0), !gQ.viewportChanged && 0 == this.measureRequests.length) {
              if (this.viewState.editorHeight) {
                if (this.viewState.scrollTarget) {
                  this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, TQ = -1;
                  continue
                } {
                  let QQ = ((qQ < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(qQ).top) - TQ) / this.scaleY;
                  if ((QQ > 1 || QQ < -1) && (XQ == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                    wQ += QQ, XQ ? XQ.scrollTop += QQ : this.win.scrollBy(0, QQ), TQ = -1;
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
        if (WQ && !WQ.empty)
          for (let sQ of this.state.facet(EW)) sQ(WQ)
      }
      get themeClasses() {
        return jq + " " + (this.state.facet(Iq) ? yq : Bq) + " " + this.state.facet(rq)
      }
      updateAttrs() {
        let QQ = cq(this, mW, {
            class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
          }),
          WQ = {
            spellcheck: "false",
            autocorrect: "off",
            autocapitalize: "off",
            writingsuggestions: "false",
            translate: "no",
            contenteditable: this.state.facet(YW) ? "true" : "false",
            class: "cm-content",
            style: `${vQ.tabSize}: ${this.state.tabSize}`,
            role: "textbox",
            "aria-multiline": "true"
          };
        this.state.readOnly && (WQ["aria-readonly"] = "true"), cq(this, MW, WQ);
        let XQ = this.observer.ignore((() => {
          let XQ = lQ(this.contentDOM, this.contentAttrs, WQ),
            wQ = lQ(this.dom, this.editorAttrs, QQ);
          return XQ || wQ
        }));
        return this.editorAttrs = QQ, this.contentAttrs = WQ, XQ
      }
      showAnnouncements(QQ) {
        let WQ = !0;
        for (let XQ of QQ)
          for (let QQ of XQ.effects)
            if (QQ.is(aq.announce)) {
              WQ && (this.announceDOM.textContent = ""), WQ = !1, this.announceDOM.appendChild(document.createElement("div")).textContent = QQ.value
            }
      }
      mountStyles() {
        this.styleModules = this.state.facet(FX);
        let QQ = this.state.facet(aq.cspNonce);
        qQ.b.mount(this.root, this.styleModules.concat(pq).reverse(), QQ ? {
          nonce: QQ
        } : void 0)
      }
      readMeasured() {
        if (2 == this.updateState) throw new Error("Reading the editor layout isn't allowed during an update");
        0 == this.updateState && this.measureScheduled > -1 && this.measure(!1)
      }
      requestMeasure(QQ) {
        if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame((() => this.measure()))), QQ) {
          if (this.measureRequests.indexOf(QQ) > -1) return;
          if (null != QQ.key)
            for (let WQ = 0; WQ < this.measureRequests.length; WQ++)
              if (this.measureRequests[WQ].key === QQ.key) return void(this.measureRequests[WQ] = QQ);
          this.measureRequests.push(QQ)
        }
      }
      plugin(QQ) {
        let WQ = this.pluginMap.get(QQ);
        return (void 0 === WQ || WQ && WQ.plugin != QQ) && this.pluginMap.set(QQ, WQ = this.plugins.find((WQ => WQ.plugin == QQ)) || null), WQ && WQ.update(this).value
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
      elementAtHeight(QQ) {
        return this.readMeasured(), this.viewState.elementAtHeight(QQ)
      }
      lineBlockAtHeight(QQ) {
        return this.readMeasured(), this.viewState.lineBlockAtHeight(QQ)
      }
      get viewportLineBlocks() {
        return this.viewState.viewportLines
      }
      lineBlockAt(QQ) {
        return this.viewState.lineBlockAt(QQ)
      }
      get contentHeight() {
        return this.viewState.contentHeight
      }
      moveByChar(QQ, WQ, XQ) {
        return YX(this, QQ, eX(this, QQ, WQ, XQ))
      }
      moveByGroup(QQ, WQ) {
        return YX(this, QQ, eX(this, QQ, WQ, (WQ => function(QQ, WQ, XQ) {
          let qQ = QQ.state.charCategorizer(WQ),
            TQ = qQ(XQ);
          return QQ => {
            let WQ = qQ(QQ);
            return TQ == wQ.g.Space && (TQ = WQ), TQ == WQ
          }
        }(this, QQ.head, WQ))))
      }
      visualLineSide(QQ, WQ) {
        let XQ = this.bidiSpans(QQ),
          qQ = this.textDirectionAt(QQ.from),
          TQ = XQ[WQ ? XQ.length - 1 : 0];
        return wQ.k.cursor(TQ.side(WQ, qQ) + QQ.from, TQ.forward(!WQ, qQ) ? 1 : -1)
      }
      moveToLineBoundary(QQ, WQ) {
        return function(QQ, WQ, XQ, qQ) {
          let TQ = oX(QQ, WQ.head, WQ.assoc || -1),
            zQ = qQ && TQ.type == cQ.Text && (QQ.lineWrapping || TQ.widgetLineBreaks) ? QQ.coordsAtPos(WQ.assoc < 0 && WQ.head > TQ.from ? WQ.head - 1 : WQ.head) : null;
          if (zQ) {
            let WQ = QQ.dom.getBoundingClientRect(),
              qQ = QQ.textDirectionAt(TQ.from),
              sQ = QQ.posAtCoords({
                x: XQ == (qQ == PW.LTR) ? WQ.right - 1 : WQ.left + 1,
                y: (zQ.top + zQ.bottom) / 2
              });
            if (null != sQ) return wQ.k.cursor(sQ, XQ ? -1 : 1)
          }
          return wQ.k.cursor(XQ ? TQ.to : TQ.from, XQ ? -1 : 1)
        }(this, QQ, WQ, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2])
      }
      moveVertically(QQ, WQ, XQ) {
        return YX(this, QQ, function(QQ, WQ, XQ, qQ) {
          let TQ = WQ.head,
            zQ = XQ ? 1 : -1;
          if (TQ == (XQ ? QQ.state.doc.length : 0)) return wQ.k.cursor(TQ, WQ.assoc);
          let sQ, FQ = WQ.goalColumn,
            PQ = QQ.contentDOM.getBoundingClientRect(),
            gQ = QQ.coordsAtPos(TQ, WQ.assoc || ((WQ.empty ? XQ : WQ.head == WQ.from) ? 1 : -1)),
            JQ = QQ.documentTop;
          if (gQ) null == FQ && (FQ = gQ.left - PQ.left), sQ = zQ < 0 ? gQ.top : gQ.bottom;
          else {
            let WQ = QQ.viewState.lineBlockAt(TQ);
            null == FQ && (FQ = Math.min(PQ.right - PQ.left, QQ.defaultCharacterWidth * (TQ - WQ.from))), sQ = (zQ < 0 ? WQ.top : WQ.bottom) + JQ
          }
          let rQ = PQ.left + FQ,
            IQ = QQ.viewState.heightOracle.textHeight >> 1,
            jQ = null !== qQ && void 0 !== qQ ? qQ : IQ;
          for (let BQ = 0;; BQ += IQ) {
            let WQ = sQ + (jQ + BQ) * zQ,
              qQ = ZX(QQ, {
                x: rQ,
                y: WQ
              }, !1, zQ);
            if (XQ ? WQ > PQ.bottom : WQ < PQ.top) return wQ.k.cursor(qQ.pos, qQ.assoc);
            let TQ = QQ.coordsAtPos(qQ.pos, qQ.assoc),
              gQ = TQ ? (TQ.top + TQ.bottom) / 2 : 0;
            if (!TQ || (XQ ? gQ > sQ : gQ < sQ)) return wQ.k.cursor(qQ.pos, qQ.assoc, void 0, FQ)
          }
        }(this, QQ, WQ, XQ))
      }
      domAtPos(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return this.docView.domAtPos(QQ, WQ)
      }
      posAtDOM(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.docView.posFromDOM(QQ, WQ)
      }
      posAtCoords(QQ) {
        let WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this.readMeasured();
        let XQ = ZX(this, QQ, WQ);
        return XQ && XQ.pos
      }
      posAndSideAtCoords(QQ) {
        let WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return this.readMeasured(), ZX(this, QQ, WQ)
      }
      coordsAtPos(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.readMeasured();
        let XQ = this.docView.coordsAt(QQ, WQ);
        if (!XQ || XQ.left == XQ.right) return XQ;
        let wQ = this.state.doc.lineAt(QQ),
          qQ = this.bidiSpans(wQ);
        return ZQ(XQ, qQ[pW.find(qQ, QQ - wQ.from, -1, WQ)].dir == PW.LTR == WQ > 0)
      }
      coordsForChar(QQ) {
        return this.readMeasured(), this.docView.coordsForChar(QQ)
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
      textDirectionAt(QQ) {
        return !this.state.facet(fW) || QQ < this.viewport.from || QQ > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(QQ))
      }
      get lineWrapping() {
        return this.viewState.heightOracle.lineWrapping
      }
      bidiSpans(QQ) {
        if (QQ.length > lq) return HW(QQ.length);
        let WQ, XQ = this.textDirectionAt(QQ.from);
        for (let qQ of this.bidiCache)
          if (qQ.from == QQ.from && qQ.dir == XQ && (qQ.fresh || GW(qQ.isolates, WQ = TX(this, QQ)))) return qQ.order;
        WQ || (WQ = TX(this, QQ));
        let wQ = dW(QQ.text, XQ, WQ);
        return this.bidiCache.push(new iq(QQ.from, QQ.to, XQ, WQ, !0, wQ)), wQ
      }
      get hasFocus() {
        var QQ;
        return (this.dom.ownerDocument.hasFocus() || vQ.safari && (null === (QQ = this.inputState) || void 0 === QQ ? void 0 : QQ.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM
      }
      focus() {
        this.observer.ignore((() => {
          XW(this.contentDOM), this.docView.updateSelection()
        }))
      }
      setRoot(QQ) {
        this._root != QQ && (this._root = QQ, this.observer.setWindow((9 == QQ.nodeType ? QQ : QQ.ownerDocument).defaultView || window), this.mountStyles())
      }
      destroy() {
        this.root.activeElement == this.contentDOM && this.contentDOM.blur();
        for (let QQ of this.plugins) QQ.destroy(this);
        this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0
      }
      static scrollIntoView(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var XQ, qQ, TQ, zQ;
        return eW.of(new oW("number" == typeof QQ ? wQ.k.cursor(QQ) : QQ, null !== (XQ = WQ.y) && void 0 !== XQ ? XQ : "nearest", null !== (qQ = WQ.x) && void 0 !== qQ ? qQ : "nearest", null !== (TQ = WQ.yMargin) && void 0 !== TQ ? TQ : 5, null !== (zQ = WQ.xMargin) && void 0 !== zQ ? zQ : 5))
      }
      scrollSnapshot() {
        let {
          scrollTop: QQ,
          scrollLeft: WQ
        } = this.scrollDOM, XQ = this.viewState.scrollAnchorAt(QQ);
        return eW.of(new oW(wQ.k.cursor(XQ.from), "start", "start", XQ.top - QQ, WQ, !0))
      }
      setTabFocusMode(QQ) {
        null == QQ ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof QQ ? this.inputState.tabFocusMode = QQ ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + QQ)
      }
      static domEventHandlers(QQ) {
        return OW.define((() => ({})), {
          eventHandlers: QQ
        })
      }
      static domEventObservers(QQ) {
        return OW.define((() => ({})), {
          eventObservers: QQ
        })
      }
      static theme(QQ, WQ) {
        let XQ = qQ.b.newName(),
          wQ = [rq.of(XQ), FX.of(Dq(`.${XQ}`, QQ))];
        return WQ && WQ.dark && wQ.push(Iq.of(!0)), wQ
      }
      static baseTheme(QQ) {
        return wQ.t.lowest(FX.of(Dq("." + jq, QQ, Vq)))
      }
      static findFromDOM(QQ) {
        var WQ;
        let XQ = QQ.querySelector(".cm-content"),
          wQ = XQ && rX.get(XQ) || rX.get(QQ);
        return (null === (WQ = null === wQ || void 0 === wQ ? void 0 : wQ.root) || void 0 === WQ ? void 0 : WQ.view) || null
      }
    }
    aq.styleModule = FX, aq.inputHandler = CW, aq.clipboardInputFilter = LW, aq.clipboardOutputFilter = kW, aq.scrollHandler = tW, aq.focusChangeEffect = uW, aq.perLineTextDirection = fW, aq.exceptionSink = RW, aq.updateListener = EW, aq.editable = YW, aq.mouseSelectionStyle = AW, aq.dragMovesSelection = cW, aq.clickAddsSelectionRange = iW, aq.Tw = QX, aq.blockWrappers = WX, aq.outerDecorations = XX, aq.atomicRanges = wX, aq.bidiIsolatedRanges = qX, aq.cursorScrollMargin = wQ.o.define({
      combine: QQ => {
        let WQ = 5,
          XQ = 5;
        for (let wQ of QQ) "number" == typeof wQ ? WQ = XQ = wQ : ({
          x: WQ,
          y: XQ
        } = wQ);
        return {
          x: WQ,
          y: XQ
        }
      }
    }), aq.scrollMargins = zX, aq.darkTheme = Iq, aq.cspNonce = wQ.o.define({
      combine: QQ => QQ.length ? QQ[0] : ""
    }), aq.contentAttributes = MW, aq.editorAttributes = mW, aq.lineWrapping = aq.contentAttributes.of({
      class: "cm-lineWrapping"
    }), aq.announce = wQ.G.define();
    const lq = 4096,
      hq = {};
    class iq {
      constructor(QQ, WQ, XQ, wQ, qQ, TQ) {
        this.from = QQ, this.to = WQ, this.dir = XQ, this.isolates = wQ, this.fresh = qQ, this.order = TQ
      }
      static update(QQ, WQ) {
        if (WQ.empty && !QQ.some((QQ => QQ.fresh))) return QQ;
        let XQ = [],
          wQ = QQ.length ? QQ[QQ.length - 1].dir : PW.LTR;
        for (let qQ = Math.max(0, QQ.length - 10); qQ < QQ.length; qQ++) {
          let TQ = QQ[qQ];
          TQ.dir != wQ || WQ.touchesRange(TQ.from, TQ.to) || XQ.push(new iq(WQ.mapPos(TQ.from, 1), WQ.mapPos(TQ.to, -1), TQ.dir, TQ.isolates, !1, TQ.order))
        }
        return XQ
      }
    }

    function cq(QQ, WQ, XQ) {
      for (let wQ = QQ.state.facet(WQ), qQ = wQ.length - 1; qQ >= 0; qQ--) {
        let WQ = wQ[qQ],
          TQ = "function" == typeof WQ ? WQ(QQ) : WQ;
        TQ && dQ(TQ, XQ)
      }
      return XQ
    }
    const Aq = vQ.mac ? "mac" : vQ.windows ? "win" : vQ.linux ? "linux" : "key";

    function Rq(QQ, WQ, XQ) {
      return WQ.altKey && (QQ = "Alt-" + QQ), WQ.ctrlKey && (QQ = "Ctrl-" + QQ), WQ.metaKey && (QQ = "Meta-" + QQ), !1 !== XQ && WQ.shiftKey && (QQ = "Shift-" + QQ), QQ
    }
    const Eq = wQ.t.default(aq.domEventHandlers({
        keydown: (QQ, WQ) => oq(Lq(WQ.state), QQ, WQ, "editor")
      })),
      Cq = wQ.o.define({
        enables: Eq
      }),
      uq = new WeakMap;

    function Lq(QQ) {
      let WQ = QQ.facet(Cq),
        XQ = uq.get(WQ);
      return XQ || uq.set(WQ, XQ = function(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Aq,
          XQ = Object.create(null),
          wQ = Object.create(null),
          qQ = (QQ, WQ) => {
            let XQ = wQ[QQ];
            if (null == XQ) wQ[QQ] = WQ;
            else if (XQ != WQ) throw new Error("Key binding " + QQ + " is used both as a regular binding and as a multi-stroke prefix")
          },
          TQ = (QQ, wQ, TQ, zQ, sQ) => {
            var FQ, PQ;
            let gQ = XQ[QQ] || (XQ[QQ] = Object.create(null)),
              JQ = wQ.split(/ (?!$)/).map((QQ => function(QQ, WQ) {
                const XQ = QQ.split(/-(?!$)/);
                let wQ, qQ, TQ, zQ, sQ = XQ[XQ.length - 1];
                "Space" == sQ && (sQ = " ");
                for (let FQ = 0; FQ < XQ.length - 1; ++FQ) {
                  const QQ = XQ[FQ];
                  if (/^(cmd|meta|m)$/i.test(QQ)) zQ = !0;
                  else if (/^a(lt)?$/i.test(QQ)) wQ = !0;
                  else if (/^(c|ctrl|control)$/i.test(QQ)) qQ = !0;
                  else if (/^s(hift)?$/i.test(QQ)) TQ = !0;
                  else {
                    if (!/^mod$/i.test(QQ)) throw new Error("Unrecognized modifier name: " + QQ);
                    "mac" == WQ ? zQ = !0 : qQ = !0
                  }
                }
                return wQ && (sQ = "Alt-" + sQ), qQ && (sQ = "Ctrl-" + sQ), zQ && (sQ = "Meta-" + sQ), TQ && (sQ = "Shift-" + sQ), sQ
              }(QQ, WQ)));
            for (let WQ = 1; WQ < JQ.length; WQ++) {
              let XQ = JQ.slice(0, WQ).join(" ");
              qQ(XQ, !0), gQ[XQ] || (gQ[XQ] = {
                preventDefault: !0,
                stopPropagation: !1,
                run: [WQ => {
                  let wQ = fq = {
                    view: WQ,
                    prefix: XQ,
                    scope: QQ
                  };
                  return setTimeout((() => {
                    fq == wQ && (fq = null)
                  }), Sq), !0
                }]
              })
            }
            let rQ = JQ.join(" ");
            qQ(rQ, !1);
            let IQ = gQ[rQ] || (gQ[rQ] = {
              preventDefault: !1,
              stopPropagation: !1,
              run: (null === (PQ = null === (FQ = gQ._any) || void 0 === FQ ? void 0 : FQ.run) || void 0 === PQ ? void 0 : PQ.slice()) || []
            });
            TQ && IQ.run.push(TQ), zQ && (IQ.preventDefault = !0), sQ && (IQ.stopPropagation = !0)
          };
        for (let zQ of QQ) {
          let QQ = zQ.scope ? zQ.scope.split(" ") : ["editor"];
          if (zQ.any)
            for (let WQ of QQ) {
              let QQ = XQ[WQ] || (XQ[WQ] = Object.create(null));
              QQ._any || (QQ._any = {
                preventDefault: !1,
                stopPropagation: !1,
                run: []
              });
              let {
                any: wQ
              } = zQ;
              for (let WQ in QQ) QQ[WQ].run.push((QQ => wQ(QQ, tq)))
            }
          let wQ = zQ[WQ] || zQ.key;
          if (wQ)
            for (let WQ of QQ) TQ(WQ, wQ, zQ.run, zQ.preventDefault, zQ.stopPropagation), zQ.shift && TQ(WQ, "Shift-" + wQ, zQ.shift, zQ.preventDefault, zQ.stopPropagation)
        }
        return XQ
      }(WQ.reduce(((QQ, WQ) => QQ.concat(WQ)), []))), XQ
    }

    function kq(QQ, WQ, XQ) {
      return oq(Lq(QQ.state), WQ, QQ, XQ)
    }
    let fq = null;
    const Sq = 4e3;
    let tq = null;

    function oq(QQ, WQ, XQ, qQ) {
      tq = WQ;
      let PQ = function(QQ) {
          var WQ = !(sQ && QQ.metaKey && QQ.shiftKey && !QQ.ctrlKey && !QQ.altKey || FQ && QQ.shiftKey && QQ.key && 1 == QQ.key.length || "Unidentified" == QQ.key) && QQ.key || (QQ.shiftKey ? zQ : TQ)[QQ.keyCode] || QQ.key || "Unidentified";
          return "Esc" == WQ && (WQ = "Escape"), "Del" == WQ && (WQ = "Delete"), "Left" == WQ && (WQ = "ArrowLeft"), "Up" == WQ && (WQ = "ArrowUp"), "Right" == WQ && (WQ = "ArrowRight"), "Down" == WQ && (WQ = "ArrowDown"), WQ
        }(WQ),
        gQ = (0, wQ.P)(PQ, 0),
        JQ = (0, wQ.Q)(gQ) == PQ.length && " " != PQ,
        rQ = "",
        IQ = !1,
        jQ = !1,
        BQ = !1;
      fq && fq.view == XQ && fq.scope == qQ && (rQ = fq.prefix + " ", Iw.indexOf(WQ.keyCode) < 0 && (jQ = !0, fq = null));
      let yQ, VQ, DQ = new Set,
        pQ = QQ => {
          if (QQ) {
            for (let WQ of QQ.run)
              if (!DQ.has(WQ) && (DQ.add(WQ), WQ(XQ))) return QQ.stopPropagation && (BQ = !0), !0;
            QQ.preventDefault && (QQ.stopPropagation && (BQ = !0), jQ = !0)
          }
          return !1
        },
        GQ = QQ[qQ];
      return GQ && (pQ(GQ[rQ + Rq(PQ, WQ, !JQ)]) ? IQ = !0 : !JQ || !(WQ.altKey || WQ.metaKey || WQ.ctrlKey) || vQ.windows && WQ.ctrlKey && WQ.altKey || vQ.mac && WQ.altKey && !WQ.ctrlKey && !WQ.metaKey || !(yQ = TQ[WQ.keyCode]) || yQ == PQ ? JQ && WQ.shiftKey && pQ(GQ[rQ + Rq(PQ, WQ, !0)]) && (IQ = !0) : (pQ(GQ[rQ + Rq(yQ, WQ, !0)]) || WQ.shiftKey && (VQ = zQ[WQ.keyCode]) != PQ && VQ != yQ && pQ(GQ[rQ + Rq(VQ, WQ, !1)])) && (IQ = !0), !IQ && pQ(GQ._any) && (IQ = !0)), jQ && (IQ = !0), IQ && BQ && WQ.stopPropagation(), tq = null, IQ
    }
    class eq {
      constructor(QQ, WQ, XQ, wQ, qQ) {
        this.className = QQ, this.left = WQ, this.top = XQ, this.width = wQ, this.height = qQ
      }
      draw() {
        let QQ = document.createElement("div");
        return QQ.className = this.className, this.adjust(QQ), QQ
      }
      update(QQ, WQ) {
        return WQ.className == this.className && (this.adjust(QQ), !0)
      }
      adjust(QQ) {
        QQ.style.left = this.left + "px", QQ.style.top = this.top + "px", null != this.width && (QQ.style.width = this.width + "px"), QQ.style.height = this.height + "px"
      }
      eq(QQ) {
        return this.left == QQ.left && this.top == QQ.top && this.width == QQ.width && this.height == QQ.height && this.className == QQ.className
      }
      static forRange(QQ, WQ, XQ) {
        if (XQ.empty) {
          let wQ = QQ.coordsAtPos(XQ.head, XQ.assoc || 1);
          if (!wQ) return [];
          let qQ = nq(QQ);
          return [new eq(WQ, wQ.left - qQ.left, wQ.top - qQ.top, null, wQ.bottom - wQ.top)]
        }
        return function(QQ, WQ, XQ) {
          if (XQ.to <= QQ.viewport.from || XQ.from >= QQ.viewport.to) return [];
          let wQ = Math.max(XQ.from, QQ.viewport.from),
            qQ = Math.min(XQ.to, QQ.viewport.to),
            TQ = QQ.textDirection == PW.LTR,
            zQ = QQ.contentDOM,
            sQ = zQ.getBoundingClientRect(),
            FQ = nq(QQ),
            PQ = zQ.querySelector(".cm-line"),
            gQ = PQ && window.getComputedStyle(PQ),
            JQ = sQ.left + (gQ ? parseInt(gQ.paddingLeft) + Math.min(0, parseInt(gQ.textIndent)) : 0),
            rQ = sQ.right - (gQ ? parseInt(gQ.paddingRight) : 0),
            IQ = oX(QQ, wQ, 1),
            jQ = oX(QQ, qQ, -1),
            BQ = IQ.type == cQ.Text ? IQ : null,
            yQ = jQ.type == cQ.Text ? jQ : null;
          BQ && (QQ.lineWrapping || IQ.widgetLineBreaks) && (BQ = xq(QQ, wQ, 1, BQ));
          yQ && (QQ.lineWrapping || jQ.widgetLineBreaks) && (yQ = xq(QQ, qQ, -1, yQ));
          if (BQ && yQ && BQ.from == yQ.from && BQ.to == yQ.to) return DQ(pQ(XQ.from, XQ.to, BQ));
          {
            let WQ = BQ ? pQ(XQ.from, null, BQ) : GQ(IQ, !1),
              wQ = yQ ? pQ(null, XQ.to, yQ) : GQ(jQ, !0),
              qQ = [];
            return (BQ || IQ).to < (yQ || jQ).from - (BQ && yQ ? 1 : 0) || IQ.widgetLineBreaks > 1 && WQ.bottom + QQ.defaultLineHeight / 2 < wQ.top ? qQ.push(VQ(JQ, WQ.bottom, rQ, wQ.top)) : WQ.bottom < wQ.top && QQ.elementAtHeight((WQ.bottom + wQ.top) / 2).type == cQ.Text && (WQ.bottom = wQ.top = (WQ.bottom + wQ.top) / 2), DQ(WQ).concat(qQ).concat(DQ(wQ))
          }

          function VQ(QQ, XQ, wQ, qQ) {
            return new eq(WQ, QQ - FQ.left, XQ - FQ.top, Math.max(0, wQ - QQ), qQ - XQ)
          }

          function DQ(QQ) {
            let {
              top: WQ,
              bottom: XQ,
              horizontal: wQ
            } = QQ, qQ = [];
            for (let TQ = 0; TQ < wQ.length; TQ += 2) qQ.push(VQ(wQ[TQ], WQ, wQ[TQ + 1], XQ));
            return qQ
          }

          function pQ(WQ, XQ, wQ) {
            let qQ = 1e9,
              zQ = -1e9,
              sQ = [];

            function FQ(WQ, XQ, FQ, PQ, gQ) {
              let IQ = QQ.coordsAtPos(WQ, WQ == wQ.to ? -2 : 2),
                jQ = QQ.coordsAtPos(FQ, FQ == wQ.from ? 2 : -2);
              IQ && jQ && (qQ = Math.min(IQ.top, jQ.top, qQ), zQ = Math.max(IQ.bottom, jQ.bottom, zQ), gQ == PW.LTR ? sQ.push(TQ && XQ ? JQ : IQ.left, TQ && PQ ? rQ : jQ.right) : sQ.push(!TQ && PQ ? JQ : jQ.left, !TQ && XQ ? rQ : IQ.right))
            }
            let PQ = null !== WQ && void 0 !== WQ ? WQ : wQ.from,
              gQ = null !== XQ && void 0 !== XQ ? XQ : wQ.to;
            for (let TQ of QQ.t5)
              if (TQ.to > PQ && TQ.from < gQ)
                for (let wQ = Math.max(TQ.from, PQ), qQ = Math.min(TQ.to, gQ);;) {
                  let TQ = QQ.state.doc.lineAt(wQ);
                  for (let zQ of QQ.bidiSpans(TQ)) {
                    let QQ = zQ.from + TQ.from,
                      sQ = zQ.to + TQ.from;
                    if (QQ >= qQ) break;
                    sQ > wQ && FQ(Math.max(QQ, wQ), null == WQ && QQ <= PQ, Math.min(sQ, qQ), null == XQ && sQ >= gQ, zQ.dir)
                  }
                  if (wQ = TQ.to + 1, wQ >= qQ) break
                }
            return 0 == sQ.length && FQ(PQ, null == WQ, gQ, null == XQ, QQ.textDirection), {
              top: qQ,
              bottom: zQ,
              horizontal: sQ
            }
          }

          function GQ(QQ, WQ) {
            let XQ = sQ.top + (WQ ? QQ.top : QQ.bottom);
            return {
              top: XQ,
              bottom: XQ,
              horizontal: []
            }
          }
        }(QQ, WQ, XQ)
      }
    }

    function nq(QQ) {
      let WQ = QQ.scrollDOM.getBoundingClientRect();
      return {
        left: (QQ.textDirection == PW.LTR ? WQ.left : WQ.right - QQ.scrollDOM.clientWidth * QQ.scaleX) - QQ.scrollDOM.scrollLeft * QQ.scaleX,
        top: WQ.top - QQ.scrollDOM.scrollTop * QQ.scaleY
      }
    }

    function xq(QQ, WQ, XQ, wQ) {
      let qQ = QQ.coordsAtPos(WQ, 2 * XQ);
      if (!qQ) return wQ;
      let TQ = QQ.dom.getBoundingClientRect(),
        zQ = (qQ.top + qQ.bottom) / 2,
        sQ = QQ.posAtCoords({
          x: TQ.left + 1,
          y: zQ
        }),
        FQ = QQ.posAtCoords({
          x: TQ.right - 1,
          y: zQ
        });
      return null == sQ || null == FQ ? wQ : {
        from: Math.max(wQ.from, Math.min(sQ, FQ)),
        to: Math.min(wQ.to, Math.max(sQ, FQ))
      }
    }
    class Yq {
      constructor(QQ, WQ) {
        this.view = QQ, this.layer = WQ, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
          read: this.measure.bind(this),
          write: this.draw.bind(this)
        }, this.dom = QQ.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), WQ.above && this.dom.classList.add("cm-layer-above"), WQ.class && this.dom.classList.add(WQ.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(QQ.state), QQ.requestMeasure(this.measureReq), WQ.mount && WQ.mount(this.dom, QQ)
      }
      update(QQ) {
        QQ.startState.facet(Nq) != QQ.state.facet(Nq) && this.setOrder(QQ.state), (this.layer.update(QQ, this.dom) || QQ.geometryChanged) && (this.scale(), QQ.view.requestMeasure(this.measureReq))
      }
      docViewUpdate(QQ) {
        !1 !== this.layer.updateOnDocViewUpdate && QQ.requestMeasure(this.measureReq)
      }
      setOrder(QQ) {
        let WQ = 0,
          XQ = QQ.facet(Nq);
        for (; WQ < XQ.length && XQ[WQ] != this.layer;) WQ++;
        this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - WQ)
      }
      measure() {
        return this.layer.markers(this.view)
      }
      scale() {
        let {
          scaleX: QQ,
          scaleY: WQ
        } = this.view;
        QQ == this.scaleX && WQ == this.scaleY || (this.scaleX = QQ, this.scaleY = WQ, this.dom.style.transform = `scale(${1/QQ}, ${1/WQ})`)
      }
      draw(QQ) {
        if (QQ.length != this.drawn.length || QQ.some(((QQ, WQ) => {
            return XQ = QQ, wQ = this.drawn[WQ], !(XQ.constructor == wQ.constructor && XQ.eq(wQ));
            var XQ, wQ
          }))) {
          let WQ = this.dom.firstChild,
            XQ = 0;
          for (let wQ of QQ) wQ.update && WQ && wQ.constructor && this.drawn[XQ].constructor && wQ.update(WQ, this.drawn[XQ]) ? (WQ = WQ.nextSibling, XQ++) : this.dom.insertBefore(wQ.draw(), WQ);
          for (; WQ;) {
            let QQ = WQ.nextSibling;
            WQ.remove(), WQ = QQ
          }
          this.drawn = QQ, vQ.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none")
        }
      }
      destroy() {
        this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove()
      }
    }
    const Nq = wQ.o.define();

    function Zq(QQ) {
      return [OW.define((WQ => new Yq(WQ, QQ))), Nq.of(QQ)]
    }
    const Oq = wQ.o.define({
      combine: QQ => (0, wQ.U)(QQ, {
        cursorBlinkRate: 1200,
        drawRangeCursor: !0,
        iosSelectionHandles: !0
      }, {
        cursorBlinkRate: (QQ, WQ) => Math.min(QQ, WQ),
        drawRangeCursor: (QQ, WQ) => QQ || WQ
      })
    });

    function Kq() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Oq.of(QQ), Mq, WT, XT, SW.of(!0)]
    }

    function mq(QQ) {
      return QQ.startState.facet(Oq) != QQ.state.facet(Oq)
    }
    const Mq = Zq({
      above: !0,
      markers(QQ) {
        let {
          state: WQ
        } = QQ, XQ = WQ.facet(Oq), qQ = [];
        for (let TQ of WQ.selection.Qy) {
          let zQ = TQ == WQ.selection.main;
          if (TQ.empty || XQ.drawRangeCursor && !(zQ && vQ.ios && XQ.iosSelectionHandles)) {
            let WQ = zQ ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary",
              XQ = TQ.empty ? TQ : wQ.k.cursor(TQ.head, TQ.assoc);
            for (let wQ of eq.forRange(QQ, WQ, XQ)) qQ.push(wQ)
          }
        }
        return qQ
      },
      update(QQ, WQ) {
        QQ.transactions.some((QQ => QQ.selection)) && (WQ.style.animationName = "cm-blink" == WQ.style.animationName ? "cm-blink2" : "cm-blink");
        let XQ = mq(QQ);
        return XQ && QT(QQ.state, WQ), QQ.docChanged || QQ.selectionSet || XQ
      },
      mount(QQ, WQ) {
        QT(WQ.state, QQ)
      },
      class: "cm-cursorLayer"
    });

    function QT(QQ, WQ) {
      WQ.style.animationDuration = QQ.facet(Oq).cursorBlinkRate + "ms"
    }
    const WT = Zq({
        above: !1,
        markers(QQ) {
          let WQ = [],
            {
              main: XQ,
              Qy: qQ
            } = QQ.state.selection;
          for (let wQ of qQ)
            if (!wQ.empty)
              for (let XQ of eq.forRange(QQ, "cm-selectionBackground", wQ)) WQ.push(XQ);
          if (vQ.ios && !XQ.empty && QQ.state.facet(Oq).iosSelectionHandles) {
            for (let qQ of eq.forRange(QQ, "cm-selectionHandle cm-selectionHandle-start", wQ.k.cursor(XQ.from, 1))) WQ.push(qQ);
            for (let qQ of eq.forRange(QQ, "cm-selectionHandle cm-selectionHandle-end", wQ.k.cursor(XQ.to, 1))) WQ.push(qQ)
          }
          return WQ
        },
        update: (QQ, WQ) => QQ.docChanged || QQ.selectionSet || QQ.viewportChanged || mq(QQ),
        class: "cm-selectionLayer"
      }),
      XT = wQ.t.highest(aq.theme({
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
      wT = wQ.G.define({
        map: (QQ, WQ) => null == QQ ? null : WQ.mapPos(QQ)
      }),
      qT = wQ.I.define({
        create: () => null,
        update: (QQ, WQ) => (null != QQ && (QQ = WQ.changes.mapPos(QQ)), WQ.effects.reduce(((QQ, WQ) => WQ.is(wT) ? WQ.value : QQ), QQ))
      }),
      TT = OW.fromClass(class {
        constructor(QQ) {
          this.view = QQ, this.cursor = null, this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawCursor.bind(this)
          }
        }
        update(QQ) {
          var WQ;
          let XQ = QQ.state.field(qT);
          null == XQ ? null != this.cursor && (null === (WQ = this.cursor) || void 0 === WQ || WQ.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (QQ.startState.field(qT) != XQ || QQ.docChanged || QQ.geometryChanged) && this.view.requestMeasure(this.measureReq))
        }
        readPos() {
          let {
            view: QQ
          } = this, WQ = QQ.state.field(qT), XQ = null != WQ && QQ.coordsAtPos(WQ);
          if (!XQ) return null;
          let wQ = QQ.scrollDOM.getBoundingClientRect();
          return {
            left: XQ.left - wQ.left + QQ.scrollDOM.scrollLeft * QQ.scaleX,
            top: XQ.top - wQ.top + QQ.scrollDOM.scrollTop * QQ.scaleY,
            height: XQ.bottom - XQ.top
          }
        }
        drawCursor(QQ) {
          if (this.cursor) {
            let {
              scaleX: WQ,
              scaleY: XQ
            } = this.view;
            QQ ? (this.cursor.style.left = QQ.left / WQ + "px", this.cursor.style.top = QQ.top / XQ + "px", this.cursor.style.height = QQ.height / XQ + "px") : this.cursor.style.left = "-100000px"
          }
        }
        destroy() {
          this.cursor && this.cursor.remove()
        }
        setDropPos(QQ) {
          this.view.state.field(qT) != QQ && this.view.dispatch({
            effects: wT.of(QQ)
          })
        }
      }, {
        eventObservers: {
          dragover(QQ) {
            this.setDropPos(this.view.posAtCoords({
              x: QQ.clientX,
              y: QQ.clientY
            }))
          },
          dragleave(QQ) {
            QQ.target != this.view.contentDOM && this.view.contentDOM.contains(QQ.relatedTarget) || this.setDropPos(null)
          },
          dragend() {
            this.setDropPos(null)
          },
          drop() {
            this.setDropPos(null)
          }
        }
      });

    function zT() {
      return [qT, TT]
    }

    function sT(QQ, WQ, XQ, wQ, qQ) {
      WQ.lastIndex = 0;
      for (let TQ, zQ = QQ.iterRange(XQ, wQ), sQ = XQ; !zQ.next().done; sQ += zQ.value.length)
        if (!zQ.lineBreak)
          for (; TQ = WQ.exec(zQ.value);) qQ(sQ + TQ.index, TQ)
    }
    class FT {
      constructor(QQ) {
        const {
          regexp: WQ,
          decoration: XQ,
          decorate: wQ,
          boundary: qQ,
          maxLength: TQ = 1e3
        } = QQ;
        if (!WQ.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
        if (this.regexp = WQ, wQ) this.addMatch = (QQ, WQ, XQ, qQ) => wQ(qQ, XQ, XQ + QQ[0].length, QQ, WQ);
        else if ("function" == typeof XQ) this.addMatch = (QQ, WQ, wQ, qQ) => {
          let TQ = XQ(QQ, WQ, wQ);
          TQ && qQ(wQ, wQ + QQ[0].length, TQ)
        };
        else {
          if (!XQ) throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
          this.addMatch = (QQ, WQ, wQ, qQ) => qQ(wQ, wQ + QQ[0].length, XQ)
        }
        this.boundary = qQ, this.maxLength = TQ
      }
      createDeco(QQ) {
        let WQ = new wQ.x,
          XQ = WQ.add.bind(WQ);
        for (let {
            from: wQ,
            to: qQ
          }
          of
          function(QQ, WQ) {
            let XQ = QQ.t5;
            if (1 == XQ.length && XQ[0].from == QQ.viewport.from && XQ[0].to == QQ.viewport.to) return XQ;
            let wQ = [];
            for (let {
                from: qQ,
                to: TQ
              }
              of XQ) qQ = Math.max(QQ.state.doc.lineAt(qQ).from, qQ - WQ), TQ = Math.min(QQ.state.doc.lineAt(TQ).to, TQ + WQ), wQ.length && wQ[wQ.length - 1].to >= qQ ? wQ[wQ.length - 1].to = TQ : wQ.push({
              from: qQ,
              to: TQ
            });
            return wQ
          }(QQ, this.maxLength)) sT(QQ.state.doc, this.regexp, wQ, qQ, ((WQ, wQ) => this.addMatch(wQ, QQ, WQ, XQ)));
        return WQ.finish()
      }
      updateDeco(QQ, WQ) {
        let XQ = 1e9,
          wQ = -1;
        return QQ.docChanged && QQ.changes.iterChanges(((WQ, qQ, TQ, zQ) => {
          zQ >= QQ.view.viewport.from && TQ <= QQ.view.viewport.to && (XQ = Math.min(TQ, XQ), wQ = Math.max(zQ, wQ))
        })), QQ.viewportMoved || wQ - XQ > 1e3 ? this.createDeco(QQ.view) : wQ > -1 ? this.updateRange(QQ.view, WQ.map(QQ.changes), XQ, wQ) : WQ
      }
      updateRange(QQ, WQ, XQ, wQ) {
        for (let qQ of QQ.t5) {
          let TQ = Math.max(qQ.from, XQ),
            zQ = Math.min(qQ.to, wQ);
          if (zQ >= TQ) {
            let XQ = QQ.state.doc.lineAt(TQ),
              wQ = XQ.to < zQ ? QQ.state.doc.lineAt(zQ) : XQ,
              sQ = Math.max(qQ.from, XQ.from),
              FQ = Math.min(qQ.to, wQ.to);
            if (this.boundary) {
              for (; TQ > XQ.from; TQ--)
                if (this.boundary.test(XQ.text[TQ - 1 - XQ.from])) {
                  sQ = TQ;
                  break
                } for (; zQ < wQ.to; zQ++)
                if (this.boundary.test(wQ.text[zQ - wQ.from])) {
                  FQ = zQ;
                  break
                }
            }
            let PQ, gQ = [],
              JQ = (QQ, WQ, XQ) => gQ.push(XQ.range(QQ, WQ));
            if (XQ == wQ)
              for (this.regexp.lastIndex = sQ - XQ.from;
                (PQ = this.regexp.exec(XQ.text)) && PQ.index < FQ - XQ.from;) this.addMatch(PQ, QQ, PQ.index + XQ.from, JQ);
            else sT(QQ.state.doc, this.regexp, sQ, FQ, ((WQ, XQ) => this.addMatch(XQ, QQ, WQ, JQ)));
            WQ = WQ.update({
              filterFrom: sQ,
              filterTo: FQ,
              filter: (QQ, WQ) => QQ < sQ || WQ > FQ,
              add: gQ
            })
          }
        }
        return WQ
      }
    }
    const PT = null != /x/.unicode ? "gu" : "g",
      gT = new RegExp("[\0-\b\n-\x1f\x7f-\x9f\xad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]", PT),
      JT = {
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
    let rT = null;
    const IT = wQ.o.define({
      combine(QQ) {
        let WQ = (0, wQ.U)(QQ, {
          render: null,
          specialChars: gT,
          addSpecialChars: null
        });
        return (WQ.replaceTabs = ! function() {
          var QQ;
          if (null == rT && "undefined" != typeof document && document.body) {
            let WQ = document.body.style;
            rT = null != (null !== (QQ = WQ.tabSize) && void 0 !== QQ ? QQ : WQ.MozTabSize)
          }
          return rT || !1
        }()) && (WQ.specialChars = new RegExp("\t|" + WQ.specialChars.source, PT)), WQ.addSpecialChars && (WQ.specialChars = new RegExp(WQ.specialChars.source + "|" + WQ.addSpecialChars.source, PT)), WQ
      }
    });

    function jT() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [IT.of(QQ), BT || (BT = OW.fromClass(class {
        constructor(QQ) {
          this.view = QQ, this.Tw = AQ.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(QQ.state.facet(IT)), this.Tw = this.decorator.createDeco(QQ)
        }
        makeDecorator(QQ) {
          return new FT({
            regexp: QQ.specialChars,
            decoration: (WQ, XQ, qQ) => {
              let {
                doc: TQ
              } = XQ.state, zQ = (0, wQ.P)(WQ[0], 0);
              if (9 == zQ) {
                let QQ = TQ.lineAt(qQ),
                  WQ = XQ.state.tabSize,
                  zQ = (0, wQ.V)(QQ.text, WQ, qQ - QQ.from);
                return AQ.replace({
                  widget: new VT((WQ - zQ % WQ) * this.view.defaultCharacterWidth / this.view.scaleX)
                })
              }
              return this.decorationCache[zQ] || (this.decorationCache[zQ] = AQ.replace({
                widget: new yT(QQ, zQ)
              }))
            },
            boundary: QQ.replaceTabs ? void 0 : /[^]/
          })
        }
        update(QQ) {
          let WQ = QQ.state.facet(IT);
          QQ.startState.facet(IT) != WQ ? (this.decorator = this.makeDecorator(WQ), this.Tw = this.decorator.createDeco(QQ.view)) : this.Tw = this.decorator.updateDeco(QQ, this.Tw)
        }
      }, {
        Tw: QQ => QQ.Tw
      }))]
    }
    let BT = null;
    class yT extends iQ {
      constructor(QQ, WQ) {
        super(), this.options = QQ, this.code = WQ
      }
      eq(QQ) {
        return QQ.code == this.code
      }
      toDOM(QQ) {
        let WQ = function(QQ) {
            return QQ >= 32 ? "\u2022" : 10 == QQ ? "\u2424" : String.fromCharCode(9216 + QQ)
          }(this.code),
          XQ = QQ.state.phrase("Control character") + " " + (JT[this.code] || "0x" + this.code.toString(16)),
          wQ = this.options.render && this.options.render(this.code, XQ, WQ);
        if (wQ) return wQ;
        let qQ = document.createElement("span");
        return qQ.textContent = WQ, qQ.title = XQ, qQ.setAttribute("aria-label", XQ), qQ.className = "cm-specialChar", qQ
      }
      ignoreEvent() {
        return !1
      }
    }
    class VT extends iQ {
      constructor(QQ) {
        super(), this.width = QQ
      }
      eq(QQ) {
        return QQ.width == this.width
      }
      toDOM() {
        let QQ = document.createElement("span");
        return QQ.textContent = "\t", QQ.className = "cm-tab", QQ.style.width = this.width + "px", QQ
      }
      ignoreEvent() {
        return !1
      }
    }

    function DT() {
      return GT
    }
    const pT = AQ.line({
        class: "cm-activeLine"
      }),
      GT = OW.fromClass(class {
        constructor(QQ) {
          this.Tw = this.getDeco(QQ)
        }
        update(QQ) {
          (QQ.docChanged || QQ.selectionSet) && (this.Tw = this.getDeco(QQ.view))
        }
        getDeco(QQ) {
          let WQ = -1,
            XQ = [];
          for (let wQ of QQ.state.selection.Qy) {
            let qQ = QQ.lineBlockAt(wQ.head);
            qQ.from > WQ && (XQ.push(pT.range(qQ.from)), WQ = qQ.from)
          }
          return AQ.set(XQ)
        }
      }, {
        Tw: QQ => QQ.Tw
      });
    class UT extends iQ {
      constructor(QQ) {
        super(), this.content = QQ
      }
      toDOM(QQ) {
        let WQ = document.createElement("span");
        return WQ.className = "cm-placeholder", WQ.style.pointerEvents = "none", WQ.appendChild("string" == typeof this.content ? document.createTextNode(this.content) : "function" == typeof this.content ? this.content(QQ) : this.content.cloneNode(!0)), WQ.setAttribute("aria-hidden", "true"), WQ
      }
      coordsAt(QQ) {
        let WQ = QQ.firstChild ? oQ(QQ.firstChild) : [];
        if (!WQ.length) return null;
        let XQ = window.getComputedStyle(QQ.parentNode),
          wQ = ZQ(WQ[0], "rtl" != XQ.direction),
          qQ = parseInt(XQ.lineHeight);
        return wQ.bottom - wQ.top > 1.5 * qQ ? {
          left: wQ.left,
          right: wQ.right,
          top: wQ.top,
          bottom: wQ.top + qQ
        } : wQ
      }
      ignoreEvent() {
        return !1
      }
    }

    function bT(QQ) {
      let WQ = OW.fromClass(class {
        constructor(WQ) {
          this.view = WQ, this.placeholder = QQ ? AQ.set([AQ.widget({
            widget: new UT(QQ),
            side: 1
          }).range(0)]) : AQ.none
        }
        get Tw() {
          return this.view.state.doc.length ? AQ.none : this.placeholder
        }
      }, {
        Tw: QQ => QQ.Tw
      });
      return "string" == typeof QQ ? [WQ, aq.contentAttributes.of({
        "aria-placeholder": QQ
      })] : WQ
    }
    const vT = 2e3;

    function dT(QQ, WQ) {
      let XQ = QQ.posAtCoords({
          x: WQ.clientX,
          y: WQ.clientY
        }, !1),
        qQ = QQ.state.doc.lineAt(XQ),
        TQ = XQ - qQ.from,
        zQ = TQ > vT ? -1 : TQ == qQ.length ? function(QQ, WQ) {
          let XQ = QQ.coordsAtPos(QQ.viewport.from);
          return XQ ? Math.round(Math.abs((XQ.left - WQ) / QQ.defaultCharacterWidth)) : -1
        }(QQ, WQ.clientX) : (0, wQ.V)(qQ.text, QQ.state.tabSize, XQ - qQ.from);
      return {
        line: qQ.number,
        col: zQ,
        off: TQ
      }
    }

    function HT(QQ, WQ) {
      let XQ = dT(QQ, WQ),
        qQ = QQ.state.selection;
      return XQ ? {
        update(QQ) {
          if (QQ.docChanged) {
            let WQ = QQ.changes.mapPos(QQ.startState.doc.line(XQ.line).from),
              wQ = QQ.state.doc.lineAt(WQ);
            XQ = {
              line: wQ.number,
              col: XQ.col,
              off: Math.min(XQ.off, wQ.length)
            }, qQ = qQ.map(QQ.changes)
          }
        },
        get(WQ, TQ, zQ) {
          let sQ = dT(QQ, WQ);
          if (!sQ) return qQ;
          let FQ = function(QQ, WQ, XQ) {
            let qQ = Math.min(WQ.line, XQ.line),
              TQ = Math.max(WQ.line, XQ.line),
              zQ = [];
            if (WQ.off > vT || XQ.off > vT || WQ.col < 0 || XQ.col < 0) {
              let sQ = Math.min(WQ.off, XQ.off),
                FQ = Math.max(WQ.off, XQ.off);
              for (let WQ = qQ; WQ <= TQ; WQ++) {
                let XQ = QQ.doc.line(WQ);
                XQ.length <= FQ && zQ.push(wQ.k.range(XQ.from + sQ, XQ.to + FQ))
              }
            } else {
              let sQ = Math.min(WQ.col, XQ.col),
                FQ = Math.max(WQ.col, XQ.col);
              for (let WQ = qQ; WQ <= TQ; WQ++) {
                let XQ = QQ.doc.line(WQ),
                  qQ = (0, wQ.X)(XQ.text, sQ, QQ.tabSize, !0);
                if (qQ < 0) zQ.push(wQ.k.cursor(XQ.to));
                else {
                  let WQ = (0, wQ.X)(XQ.text, FQ, QQ.tabSize);
                  zQ.push(wQ.k.range(XQ.from + qQ, XQ.from + WQ))
                }
              }
            }
            return zQ
          }(QQ.state, XQ, sQ);
          return FQ.length ? zQ ? wQ.k.create(FQ.concat(qQ.Qy)) : wQ.k.create(FQ) : qQ
        }
      } : null
    }

    function aT(QQ) {
      let WQ = (null === QQ || void 0 === QQ ? void 0 : QQ.eventFilter) || (QQ => QQ.altKey && 0 == QQ.button);
      return aq.mouseSelectionStyle.of(((QQ, XQ) => WQ(XQ) ? HT(QQ, XQ) : null))
    }
    const lT = {
        Alt: [18, QQ => !!QQ.altKey],
        Control: [17, QQ => !!QQ.ctrlKey],
        Shift: [16, QQ => !!QQ.shiftKey],
        Meta: [91, QQ => !!QQ.metaKey]
      },
      hT = {
        style: "cursor: crosshair"
      };

    function iT() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [WQ, XQ] = lT[QQ.key || "Alt"],
        wQ = OW.fromClass(class {
          constructor(QQ) {
            this.view = QQ, this.isDown = !1
          }
          set(QQ) {
            this.isDown != QQ && (this.isDown = QQ, this.view.update([]))
          }
        }, {
          eventObservers: {
            keydown(QQ) {
              this.set(QQ.keyCode == WQ || XQ(QQ))
            },
            keyup(QQ) {
              QQ.keyCode != WQ && XQ(QQ) || this.set(!1)
            },
            mousemove(QQ) {
              this.set(XQ(QQ))
            }
          }
        });
      return [wQ, aq.contentAttributes.of((QQ => {
        var WQ;
        return (null === (WQ = QQ.plugin(wQ)) || void 0 === WQ ? void 0 : WQ.isDown) ? hT : null
      }))]
    }
    const cT = "-10000px";
    class AT {
      constructor(QQ, WQ, XQ, wQ) {
        this.facet = WQ, this.createTooltipView = XQ, this.removeTooltipView = wQ, this.input = QQ.state.facet(WQ), this.tooltips = this.input.filter((QQ => QQ));
        let qQ = null;
        this.tooltipViews = this.tooltips.map((QQ => qQ = XQ(QQ, qQ)))
      }
      update(QQ, WQ) {
        var XQ;
        let wQ = QQ.state.facet(this.facet),
          qQ = wQ.filter((QQ => QQ));
        if (wQ === this.input) {
          for (let WQ of this.tooltipViews) WQ.update && WQ.update(QQ);
          return !1
        }
        let TQ = [],
          zQ = WQ ? [] : null;
        for (let sQ = 0; sQ < qQ.length; sQ++) {
          let XQ = qQ[sQ],
            wQ = -1;
          if (XQ) {
            for (let QQ = 0; QQ < this.tooltips.length; QQ++) {
              let WQ = this.tooltips[QQ];
              WQ && WQ.create == XQ.create && (wQ = QQ)
            }
            if (wQ < 0) TQ[sQ] = this.createTooltipView(XQ, sQ ? TQ[sQ - 1] : null), zQ && (zQ[sQ] = !!XQ.above);
            else {
              let XQ = TQ[sQ] = this.tooltipViews[wQ];
              zQ && (zQ[sQ] = WQ[wQ]), XQ.update && XQ.update(QQ)
            }
          }
        }
        for (let sQ of this.tooltipViews) TQ.indexOf(sQ) < 0 && (this.removeTooltipView(sQ), null === (XQ = sQ.destroy) || void 0 === XQ || XQ.call(sQ));
        return WQ && (zQ.forEach(((QQ, XQ) => WQ[XQ] = QQ)), WQ.length = zQ.length), this.input = wQ, this.tooltips = qQ, this.tooltipViews = TQ, !0
      }
    }

    function RT(QQ) {
      let WQ = QQ.dom.ownerDocument.documentElement;
      return {
        top: 0,
        left: 0,
        bottom: WQ.clientHeight,
        right: WQ.clientWidth
      }
    }
    const ET = wQ.o.define({
        combine: QQ => {
          var WQ, XQ, wQ;
          return {
            position: vQ.ios ? "absolute" : (null === (WQ = QQ.find((QQ => QQ.position))) || void 0 === WQ ? void 0 : WQ.position) || "fixed",
            parent: (null === (XQ = QQ.find((QQ => QQ.parent))) || void 0 === XQ ? void 0 : XQ.parent) || null,
            tooltipSpace: (null === (wQ = QQ.find((QQ => QQ.tooltipSpace))) || void 0 === wQ ? void 0 : wQ.tooltipSpace) || RT
          }
        }
      }),
      CT = new WeakMap,
      uT = OW.fromClass(class {
        constructor(QQ) {
          this.view = QQ, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
          let WQ = QQ.state.facet(ET);
          this.position = WQ.position, this.parent = WQ.parent, this.classes = QQ.themeClasses, this.createContainer(), this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this
          }, this.resizeObserver = "function" == typeof ResizeObserver ? new ResizeObserver((() => this.measureSoon())) : null, this.manager = new AT(QQ, ST, ((QQ, WQ) => this.createTooltip(QQ, WQ)), (QQ => {
            this.resizeObserver && this.resizeObserver.unobserve(QQ.dom), QQ.dom.remove()
          })), this.above = this.manager.tooltips.map((QQ => !!QQ.above)), this.intersectionObserver = "function" == typeof IntersectionObserver ? new IntersectionObserver((QQ => {
            Date.now() > this.lastTransaction - 50 && QQ.length > 0 && QQ[QQ.length - 1].intersectionRatio < 1 && this.measureSoon()
          }), {
            threshold: [1]
          }) : null, this.observeIntersection(), QQ.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure()
        }
        createContainer() {
          this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom
        }
        observeIntersection() {
          if (this.intersectionObserver) {
            this.intersectionObserver.disconnect();
            for (let QQ of this.manager.tooltipViews) this.intersectionObserver.observe(QQ.dom)
          }
        }
        measureSoon() {
          this.measureTimeout < 0 && (this.measureTimeout = setTimeout((() => {
            this.measureTimeout = -1, this.maybeMeasure()
          }), 50))
        }
        update(QQ) {
          QQ.transactions.length && (this.lastTransaction = Date.now());
          let WQ = this.manager.update(QQ, this.above);
          WQ && this.observeIntersection();
          let XQ = WQ || QQ.geometryChanged,
            wQ = QQ.state.facet(ET);
          if (wQ.position != this.position && !this.madeAbsolute) {
            this.position = wQ.position;
            for (let QQ of this.manager.tooltipViews) QQ.dom.style.position = this.position;
            XQ = !0
          }
          if (wQ.parent != this.parent) {
            this.parent && this.container.remove(), this.parent = wQ.parent, this.createContainer();
            for (let QQ of this.manager.tooltipViews) this.container.appendChild(QQ.dom);
            XQ = !0
          } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
          XQ && this.maybeMeasure()
        }
        createTooltip(QQ, WQ) {
          let XQ = QQ.create(this.view),
            wQ = WQ ? WQ.dom : null;
          if (XQ.dom.classList.add("cm-tooltip"), QQ.arrow && !XQ.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
            let QQ = document.createElement("div");
            QQ.className = "cm-tooltip-arrow", XQ.dom.appendChild(QQ)
          }
          return XQ.dom.style.position = this.position, XQ.dom.style.top = cT, XQ.dom.style.left = "0px", this.container.insertBefore(XQ.dom, wQ), XQ.mount && XQ.mount(this.view), this.resizeObserver && this.resizeObserver.observe(XQ.dom), XQ
        }
        destroy() {
          var QQ, WQ, XQ;
          this.view.win.removeEventListener("resize", this.measureSoon);
          for (let wQ of this.manager.tooltipViews) wQ.dom.remove(), null === (QQ = wQ.destroy) || void 0 === QQ || QQ.call(wQ);
          this.parent && this.container.remove(), null === (WQ = this.resizeObserver) || void 0 === WQ || WQ.disconnect(), null === (XQ = this.intersectionObserver) || void 0 === XQ || XQ.disconnect(), clearTimeout(this.measureTimeout)
        }
        readMeasure() {
          let QQ = 1,
            WQ = 1,
            XQ = !1;
          if ("fixed" == this.position && this.manager.tooltipViews.length) {
            let {
              dom: QQ
            } = this.manager.tooltipViews[0];
            if (vQ.safari) {
              let WQ = QQ.getBoundingClientRect();
              XQ = Math.abs(WQ.top + 1e4) > 1 || Math.abs(WQ.left) > 1
            } else XQ = !!QQ.offsetParent && QQ.offsetParent != this.container.ownerDocument.body
          }
          if (XQ || "absolute" == this.position)
            if (this.parent) {
              let XQ = this.parent.getBoundingClientRect();
              XQ.width && XQ.height && (QQ = XQ.width / this.parent.offsetWidth, WQ = XQ.height / this.parent.offsetHeight)
            } else({
              scaleX: QQ,
              scaleY: WQ
            } = this.view.viewState);
          let wQ = this.view.scrollDOM.getBoundingClientRect(),
            qQ = sX(this.view);
          return {
            visible: {
              left: wQ.left + qQ.left,
              top: wQ.top + qQ.top,
              right: wQ.right - qQ.right,
              bottom: wQ.bottom - qQ.bottom
            },
            parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
            pos: this.manager.tooltips.map(((QQ, WQ) => {
              let XQ = this.manager.tooltipViews[WQ];
              return XQ.getCoords ? XQ.getCoords(QQ.pos) : this.view.coordsAtPos(QQ.pos)
            })),
            size: this.manager.tooltipViews.map((QQ => {
              let {
                dom: WQ
              } = QQ;
              return WQ.getBoundingClientRect()
            })),
            space: this.view.state.facet(ET).tooltipSpace(this.view),
            scaleX: QQ,
            scaleY: WQ,
            makeAbsolute: XQ
          }
        }
        writeMeasure(QQ) {
          var WQ;
          if (QQ.makeAbsolute) {
            this.madeAbsolute = !0, this.position = "absolute";
            for (let QQ of this.manager.tooltipViews) QQ.dom.style.position = "absolute"
          }
          let {
            visible: XQ,
            space: wQ,
            scaleX: qQ,
            scaleY: TQ
          } = QQ, zQ = [];
          for (let sQ = 0; sQ < this.manager.tooltips.length; sQ++) {
            let FQ = this.manager.tooltips[sQ],
              PQ = this.manager.tooltipViews[sQ],
              {
                dom: gQ
              } = PQ,
              JQ = QQ.pos[sQ],
              rQ = QQ.size[sQ];
            if (!JQ || !1 !== FQ.clip && (JQ.bottom <= Math.max(XQ.top, wQ.top) || JQ.top >= Math.min(XQ.bottom, wQ.bottom) || JQ.right < Math.max(XQ.left, wQ.left) - .1 || JQ.left > Math.min(XQ.right, wQ.right) + .1)) {
              gQ.style.top = cT;
              continue
            }
            let IQ = FQ.arrow ? PQ.dom.querySelector(".cm-tooltip-arrow") : null,
              jQ = IQ ? 7 : 0,
              BQ = rQ.right - rQ.left,
              yQ = null !== (WQ = CT.get(PQ)) && void 0 !== WQ ? WQ : rQ.bottom - rQ.top,
              VQ = PQ.offset || fT,
              DQ = this.view.textDirection == PW.LTR,
              pQ = rQ.width > wQ.right - wQ.left ? DQ ? wQ.left : wQ.right - rQ.width : DQ ? Math.max(wQ.left, Math.min(JQ.left - (IQ ? 14 : 0) + VQ.x, wQ.right - BQ)) : Math.min(Math.max(wQ.left, JQ.left - BQ + (IQ ? 14 : 0) - VQ.x), wQ.right - BQ),
              GQ = this.above[sQ];
            !FQ.strictSide && (GQ ? JQ.top - yQ - jQ - VQ.y < wQ.top : JQ.bottom + yQ + jQ + VQ.y > wQ.bottom) && GQ == wQ.bottom - JQ.bottom > JQ.top - wQ.top && (GQ = this.above[sQ] = !GQ);
            let UQ = (GQ ? JQ.top - wQ.top : wQ.bottom - JQ.bottom) - jQ;
            if (UQ < yQ && !1 !== PQ.resize) {
              if (UQ < this.view.defaultLineHeight) {
                gQ.style.top = cT;
                continue
              }
              CT.set(PQ, yQ), gQ.style.height = (yQ = UQ) / TQ + "px"
            } else gQ.style.height && (gQ.style.height = "");
            let bQ = GQ ? JQ.top - yQ - jQ - VQ.y : JQ.bottom + jQ + VQ.y,
              vQ = pQ + BQ;
            if (!0 !== PQ.overlap)
              for (let QQ of zQ) QQ.left < vQ && QQ.right > pQ && QQ.top < bQ + yQ && QQ.bottom > bQ && (bQ = GQ ? QQ.top - yQ - 2 - jQ : QQ.bottom + jQ + 2);
            if ("absolute" == this.position ? (gQ.style.top = (bQ - QQ.parent.top) / TQ + "px", LT(gQ, (pQ - QQ.parent.left) / qQ)) : (gQ.style.top = bQ / TQ + "px", LT(gQ, pQ / qQ)), IQ) {
              let QQ = JQ.left + (DQ ? VQ.x : -VQ.x) - (pQ + 14 - 7);
              IQ.style.left = QQ / qQ + "px"
            }!0 !== PQ.overlap && zQ.push({
              left: pQ,
              top: bQ,
              right: vQ,
              bottom: bQ + yQ
            }), gQ.classList.toggle("cm-tooltip-above", GQ), gQ.classList.toggle("cm-tooltip-below", !GQ), PQ.positioned && PQ.positioned(QQ.space)
          }
        }
        maybeMeasure() {
          if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
            for (let QQ of this.manager.tooltipViews) QQ.dom.style.top = cT
        }
      }, {
        eventObservers: {
          scroll() {
            this.maybeMeasure()
          }
        }
      });

    function LT(QQ, WQ) {
      let XQ = parseInt(QQ.style.left, 10);
      (isNaN(XQ) || Math.abs(WQ - XQ) > 1) && (QQ.style.left = WQ + "px")
    }
    const kT = aq.baseTheme({
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
      fT = {
        x: 0,
        y: 0
      },
      ST = wQ.o.define({
        enables: [uT, kT]
      }),
      tT = wQ.o.define({
        combine: QQ => QQ.reduce(((QQ, WQ) => QQ.concat(WQ)), [])
      });
    class oT {
      static create(QQ) {
        return new oT(QQ)
      }
      constructor(QQ) {
        this.view = QQ, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new AT(QQ, tT, ((QQ, WQ) => this.createHostedView(QQ, WQ)), (QQ => QQ.dom.remove()))
      }
      createHostedView(QQ, WQ) {
        let XQ = QQ.create(this.view);
        return XQ.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(XQ.dom, WQ ? WQ.dom.nextSibling : this.dom.firstChild), this.mounted && XQ.mount && XQ.mount(this.view), XQ
      }
      mount(QQ) {
        for (let WQ of this.manager.tooltipViews) WQ.mount && WQ.mount(QQ);
        this.mounted = !0
      }
      positioned(QQ) {
        for (let WQ of this.manager.tooltipViews) WQ.positioned && WQ.positioned(QQ)
      }
      update(QQ) {
        this.manager.update(QQ)
      }
      destroy() {
        var QQ;
        for (let WQ of this.manager.tooltipViews) null === (QQ = WQ.destroy) || void 0 === QQ || QQ.call(WQ)
      }
      passProp(QQ) {
        let WQ;
        for (let XQ of this.manager.tooltipViews) {
          let wQ = XQ[QQ];
          if (void 0 !== wQ)
            if (void 0 === WQ) WQ = wQ;
            else if (WQ !== wQ) return
        }
        return WQ
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
    const eT = ST.compute([tT], (QQ => {
      let WQ = QQ.facet(tT);
      return 0 === WQ.length ? null : {
        pos: Math.min(...WQ.map((QQ => QQ.pos))),
        end: Math.max(...WQ.map((QQ => {
          var WQ;
          return null !== (WQ = QQ.end) && void 0 !== WQ ? WQ : QQ.pos
        }))),
        create: oT.create,
        above: WQ[0].above,
        arrow: WQ.some((QQ => QQ.arrow))
      }
    }));
    class nT {
      constructor(QQ, WQ, XQ, wQ, qQ) {
        this.view = QQ, this.source = WQ, this.field = XQ, this.setHover = wQ, this.hoverTime = qQ, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
          x: 0,
          y: 0,
          target: QQ.dom,
          time: 0
        }, this.checkHover = this.checkHover.bind(this), QQ.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), QQ.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this))
      }
      update() {
        this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout((() => this.startHover()), 20))
      }
      get active() {
        return this.view.state.field(this.field)
      }
      checkHover() {
        if (this.hoverTimeout = -1, this.active.length) return;
        let QQ = Date.now() - this.lastMove.time;
        QQ < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - QQ) : this.startHover()
      }
      startHover() {
        clearTimeout(this.restartTimeout);
        let {
          view: QQ,
          lastMove: WQ
        } = this, XQ = QQ.docView.tile.nearest(WQ.target);
        if (!XQ) return;
        let wQ, qQ = 1;
        if (XQ.isWidget()) wQ = XQ.posAtStart;
        else {
          if (wQ = QQ.posAtCoords(WQ), null == wQ) return;
          let XQ = QQ.coordsAtPos(wQ);
          if (!XQ || WQ.y < XQ.top || WQ.y > XQ.bottom || WQ.x < XQ.left - QQ.defaultCharacterWidth || WQ.x > XQ.right + QQ.defaultCharacterWidth) return;
          let TQ = QQ.bidiSpans(QQ.state.doc.lineAt(wQ)).find((QQ => QQ.from <= wQ && QQ.to >= wQ)),
            zQ = TQ && TQ.dir == PW.RTL ? -1 : 1;
          qQ = WQ.x < XQ.left ? -zQ : zQ
        }
        let TQ = this.source(QQ, wQ, qQ);
        if (null === TQ || void 0 === TQ ? void 0 : TQ.then) {
          let WQ = this.pending = {
            pos: wQ
          };
          TQ.then((XQ => {
            this.pending == WQ && (this.pending = null, !XQ || Array.isArray(XQ) && !XQ.length || QQ.dispatch({
              effects: this.setHover.of(Array.isArray(XQ) ? XQ : [XQ])
            }))
          }), (WQ => xW(QQ.state, WQ, "hover tooltip")))
        } else !TQ || Array.isArray(TQ) && !TQ.length || QQ.dispatch({
          effects: this.setHover.of(Array.isArray(TQ) ? TQ : [TQ])
        })
      }
      get tooltip() {
        let QQ = this.view.plugin(uT),
          WQ = QQ ? QQ.manager.tooltips.findIndex((QQ => QQ.create == oT.create)) : -1;
        return WQ > -1 ? QQ.manager.tooltipViews[WQ] : null
      }
      mousemove(QQ) {
        var WQ, XQ;
        this.lastMove = {
          x: QQ.clientX,
          y: QQ.clientY,
          target: QQ.target,
          time: Date.now()
        }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
        let {
          active: wQ,
          tooltip: qQ
        } = this;
        if (wQ.length && qQ && ! function(QQ, WQ) {
            let XQ, {
              left: wQ,
              right: qQ,
              top: TQ,
              bottom: zQ
            } = QQ.getBoundingClientRect();
            if (XQ = QQ.querySelector(".cm-tooltip-arrow")) {
              let QQ = XQ.getBoundingClientRect();
              TQ = Math.min(QQ.top, TQ), zQ = Math.max(QQ.bottom, zQ)
            }
            return WQ.clientX >= wQ - xT && WQ.clientX <= qQ + xT && WQ.clientY >= TQ - xT && WQ.clientY <= zQ + xT
          }(qQ.dom, QQ) || this.pending) {
          let {
            pos: qQ
          } = wQ[0] || this.pending, TQ = null !== (XQ = null === (WQ = wQ[0]) || void 0 === WQ ? void 0 : WQ.end) && void 0 !== XQ ? XQ : qQ;
          (qQ == TQ ? this.view.posAtCoords(this.lastMove) == qQ : function(QQ, WQ, XQ, wQ, qQ) {
            let TQ = QQ.scrollDOM.getBoundingClientRect(),
              zQ = QQ.documentTop + QQ.documentPadding.top + QQ.contentHeight;
            if (TQ.left > wQ || TQ.right < wQ || TQ.top > qQ || Math.min(TQ.bottom, zQ) < qQ) return !1;
            let sQ = QQ.posAtCoords({
              x: wQ,
              y: qQ
            }, !1);
            return sQ >= WQ && sQ <= XQ
          }(this.view, qQ, TQ, QQ.clientX, QQ.clientY)) || (this.view.dispatch({
            effects: this.setHover.of([])
          }), this.pending = null)
        }
      }
      mouseleave(QQ) {
        clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
        let {
          active: WQ
        } = this;
        if (WQ.length) {
          let {
            tooltip: WQ
          } = this;
          WQ && WQ.dom.contains(QQ.relatedTarget) ? this.watchTooltipLeave(WQ.dom) : this.view.dispatch({
            effects: this.setHover.of([])
          })
        }
      }
      watchTooltipLeave(QQ) {
        let WQ = XQ => {
          QQ.removeEventListener("mouseleave", WQ), this.active.length && !this.view.dom.contains(XQ.relatedTarget) && this.view.dispatch({
            effects: this.setHover.of([])
          })
        };
        QQ.addEventListener("mouseleave", WQ)
      }
      destroy() {
        clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove)
      }
    }
    const xT = 4;

    function YT(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        XQ = wQ.G.define(),
        qQ = wQ.I.define({
          create: () => [],
          update(QQ, qQ) {
            if (QQ.length && (WQ.hideOnChange && (qQ.docChanged || qQ.selection) ? QQ = [] : WQ.hideOn && (QQ = QQ.filter((QQ => !WQ.hideOn(qQ, QQ)))), qQ.docChanged)) {
              let WQ = [];
              for (let XQ of QQ) {
                let QQ = qQ.changes.mapPos(XQ.pos, -1, wQ.s.TrackDel);
                if (null != QQ) {
                  let wQ = Object.assign(Object.create(null), XQ);
                  wQ.pos = QQ, null != wQ.end && (wQ.end = qQ.changes.mapPos(wQ.end)), WQ.push(wQ)
                }
              }
              QQ = WQ
            }
            for (let WQ of qQ.effects) WQ.is(XQ) && (QQ = WQ.value), WQ.is(ZT) && (QQ = []);
            return QQ
          },
          provide: QQ => tT.from(QQ)
        });
      return {
        active: qQ,
        extension: [qQ, OW.define((wQ => new nT(wQ, QQ, qQ, XQ, WQ.hoverTime || 300))), eT]
      }
    }

    function NT(QQ, WQ) {
      let XQ = QQ.plugin(uT);
      if (!XQ) return null;
      let wQ = XQ.manager.tooltips.indexOf(WQ);
      return wQ < 0 ? null : XQ.manager.tooltipViews[wQ]
    }
    const ZT = wQ.G.define();
    const OT = wQ.o.define({
      combine(QQ) {
        let WQ, XQ;
        for (let wQ of QQ) WQ = WQ || wQ.topContainer, XQ = XQ || wQ.bottomContainer;
        return {
          topContainer: WQ,
          bottomContainer: XQ
        }
      }
    });

    function KT(QQ, WQ) {
      let XQ = QQ.plugin(mT),
        wQ = XQ ? XQ.specs.indexOf(WQ) : -1;
      return wQ > -1 ? XQ.panels[wQ] : null
    }
    const mT = OW.fromClass(class {
      constructor(QQ) {
        this.input = QQ.state.facet(Wz), this.specs = this.input.filter((QQ => QQ)), this.panels = this.specs.map((WQ => WQ(QQ)));
        let WQ = QQ.state.facet(OT);
        this.top = new MT(QQ, !0, WQ.topContainer), this.bottom = new MT(QQ, !1, WQ.bottomContainer), this.top.sync(this.panels.filter((QQ => QQ.top))), this.bottom.sync(this.panels.filter((QQ => !QQ.top)));
        for (let XQ of this.panels) XQ.dom.classList.add("cm-panel"), XQ.mount && XQ.mount()
      }
      update(QQ) {
        let WQ = QQ.state.facet(OT);
        this.top.container != WQ.topContainer && (this.top.sync([]), this.top = new MT(QQ.view, !0, WQ.topContainer)), this.bottom.container != WQ.bottomContainer && (this.bottom.sync([]), this.bottom = new MT(QQ.view, !1, WQ.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
        let XQ = QQ.state.facet(Wz);
        if (XQ != this.input) {
          let WQ = XQ.filter((QQ => QQ)),
            wQ = [],
            qQ = [],
            TQ = [],
            zQ = [];
          for (let XQ of WQ) {
            let WQ, sQ = this.specs.indexOf(XQ);
            sQ < 0 ? (WQ = XQ(QQ.view), zQ.push(WQ)) : (WQ = this.panels[sQ], WQ.update && WQ.update(QQ)), wQ.push(WQ), (WQ.top ? qQ : TQ).push(WQ)
          }
          this.specs = WQ, this.panels = wQ, this.top.sync(qQ), this.bottom.sync(TQ);
          for (let QQ of zQ) QQ.dom.classList.add("cm-panel"), QQ.mount && QQ.mount()
        } else
          for (let wQ of this.panels) wQ.update && wQ.update(QQ)
      }
      destroy() {
        this.top.sync([]), this.bottom.sync([])
      }
    }, {
      provide: QQ => aq.scrollMargins.of((WQ => {
        let XQ = WQ.plugin(QQ);
        return XQ && {
          top: XQ.top.scrollMargin(),
          bottom: XQ.bottom.scrollMargin()
        }
      }))
    });
    class MT {
      constructor(QQ, WQ, XQ) {
        this.view = QQ, this.top = WQ, this.container = XQ, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses()
      }
      sync(QQ) {
        for (let WQ of this.panels) WQ.destroy && QQ.indexOf(WQ) < 0 && WQ.destroy();
        this.panels = QQ, this.syncDOM()
      }
      syncDOM() {
        if (0 == this.panels.length) return void(this.dom && (this.dom.remove(), this.dom = void 0));
        if (!this.dom) {
          this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
          let QQ = this.container || this.view.dom;
          QQ.insertBefore(this.dom, this.top ? QQ.firstChild : null)
        }
        let QQ = this.dom.firstChild;
        for (let WQ of this.panels)
          if (WQ.dom.parentNode == this.dom) {
            for (; QQ != WQ.dom;) QQ = Qz(QQ);
            QQ = QQ.nextSibling
          } else this.dom.insertBefore(WQ.dom, QQ);
        for (; QQ;) QQ = Qz(QQ)
      }
      scrollMargin() {
        return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top)
      }
      syncClasses() {
        if (this.container && this.classes != this.view.themeClasses) {
          for (let QQ of this.classes.split(" ")) QQ && this.container.classList.remove(QQ);
          for (let QQ of (this.classes = this.view.themeClasses).split(" ")) QQ && this.container.classList.add(QQ)
        }
      }
    }

    function Qz(QQ) {
      let WQ = QQ.nextSibling;
      return QQ.remove(), WQ
    }
    const Wz = wQ.o.define({
      enables: mT
    });

    function Xz(QQ, WQ) {
      let XQ, qQ = new Promise((QQ => XQ = QQ)),
        TQ = QQ => function(QQ, WQ, XQ) {
          let wQ = WQ.content ? WQ.content(QQ, (() => zQ(null))) : null;
          if (!wQ) {
            if (wQ = (0, JQ.b)("form"), WQ.input) {
              let QQ = (0, JQ.b)("input", WQ.input);
              /^(text|password|number|email|tel|url)$/.test(QQ.type) && QQ.classList.add("cm-textfield"), QQ.name || (QQ.name = "input"), wQ.appendChild((0, JQ.b)("label", (WQ.label || "") + ": ", QQ))
            } else wQ.appendChild(document.createTextNode(WQ.label || ""));
            wQ.appendChild(document.createTextNode(" ")), wQ.appendChild((0, JQ.b)("button", {
              class: "cm-button",
              type: "submit"
            }, WQ.submitLabel || "OK"))
          }
          let qQ = "FORM" == wQ.nodeName ? [wQ] : wQ.querySelectorAll("form");
          for (let sQ = 0; sQ < qQ.length; sQ++) {
            let QQ = qQ[sQ];
            QQ.addEventListener("keydown", (WQ => {
              27 == WQ.keyCode ? (WQ.preventDefault(), zQ(null)) : 13 == WQ.keyCode && (WQ.preventDefault(), zQ(QQ))
            })), QQ.addEventListener("submit", (WQ => {
              WQ.preventDefault(), zQ(QQ)
            }))
          }
          let TQ = (0, JQ.b)("div", wQ, (0, JQ.b)("button", {
            onclick: () => zQ(null),
            "aria-label": QQ.state.phrase("close"),
            class: "cm-dialog-close",
            type: "button"
          }, ["\xd7"]));
          WQ.class && (TQ.className = WQ.class);

          function zQ(WQ) {
            TQ.contains(TQ.ownerDocument.activeElement) && QQ.focus(), XQ(WQ)
          }
          return TQ.classList.add("cm-dialog"), {
            dom: TQ,
            top: WQ.top,
            mount: () => {
              if (WQ.focus) {
                let QQ;
                QQ = "string" == typeof WQ.focus ? wQ.querySelector(WQ.focus) : wQ.querySelector("input") || wQ.querySelector("button"), QQ && "select" in QQ ? QQ.select() : QQ && "focus" in QQ && QQ.focus()
              }
            }
          }
        }(QQ, WQ, XQ);
      QQ.state.field(wz, !1) ? QQ.dispatch({
        effects: qz.of(TQ)
      }) : QQ.dispatch({
        effects: wQ.G.appendConfig.of(wz.init((() => [TQ])))
      });
      let zQ = Tz.of(TQ);
      return {
        close: zQ,
        result: qQ.then((WQ => ((QQ.win.queueMicrotask || (WQ => QQ.win.setTimeout(WQ, 10)))((() => {
          QQ.state.field(wz).indexOf(TQ) > -1 && QQ.dispatch({
            effects: zQ
          })
        })), WQ)))
      }
    }
    const wz = wQ.I.define({
        create: () => [],
        update(QQ, WQ) {
          for (let XQ of WQ.effects) XQ.is(qz) ? QQ = [XQ.value].concat(QQ) : XQ.is(Tz) && (QQ = QQ.filter((QQ => QQ != XQ.value)));
          return QQ
        },
        provide: QQ => Wz.computeN([QQ], (WQ => WQ.field(QQ)))
      }),
      qz = wQ.G.define(),
      Tz = wQ.G.define();
    class zz extends wQ.C {
      compare(QQ) {
        return this == QQ || this.constructor == QQ.constructor && this.eq(QQ)
      }
      eq(QQ) {
        return !1
      }
      destroy(QQ) {}
    }
    zz.prototype.elementClass = "", zz.prototype.toDOM = void 0, zz.prototype.mapMode = wQ.s.TrackBefore, zz.prototype.startSide = zz.prototype.endSide = -1, zz.prototype.point = !0;
    const sz = wQ.o.define(),
      Fz = wQ.o.define(),
      Pz = {
        class: "",
        renderEmptyElements: !1,
        elementStyle: "",
        markers: () => wQ.A.empty,
        lineMarker: () => null,
        widgetMarker: () => null,
        lineMarkerChange: null,
        initialSpacer: null,
        updateSpacer: null,
        domEventHandlers: {},
        side: "before"
      },
      gz = wQ.o.define();

    function Jz(QQ) {
      return [Iz(), gz.of({
        ...Pz,
        ...QQ
      })]
    }
    const rz = wQ.o.define({
      combine: QQ => QQ.some((QQ => QQ))
    });

    function Iz(QQ) {
      let WQ = [jz];
      return QQ && !1 === QQ.fixed && WQ.push(rz.of(!0)), WQ
    }
    const jz = OW.fromClass(class {
      constructor(QQ) {
        this.view = QQ, this.domAfter = null, this.prevViewport = QQ.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = QQ.state.facet(gz).map((WQ => new Dz(QQ, WQ))), this.fixed = !QQ.state.facet(rz);
        for (let WQ of this.gutters) "after" == WQ.config.side ? this.getDOMAfter().appendChild(WQ.dom) : this.dom.appendChild(WQ.dom);
        this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), QQ.scrollDOM.insertBefore(this.dom, QQ.contentDOM)
      }
      getDOMAfter() {
        return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter
      }
      update(QQ) {
        if (this.updateGutters(QQ)) {
          let WQ = this.prevViewport,
            XQ = QQ.view.viewport,
            wQ = Math.min(WQ.to, XQ.to) - Math.max(WQ.from, XQ.from);
          this.syncGutters(wQ < .8 * (XQ.to - XQ.from))
        }
        if (QQ.geometryChanged) {
          let QQ = this.view.contentHeight / this.view.scaleY + "px";
          this.dom.style.minHeight = QQ, this.domAfter && (this.domAfter.style.minHeight = QQ)
        }
        this.view.state.facet(rz) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = QQ.view.viewport
      }
      syncGutters(QQ) {
        let WQ = this.dom.nextSibling;
        QQ && (this.dom.remove(), this.domAfter && this.domAfter.remove());
        let XQ = wQ.A.iter(this.view.state.facet(sz), this.view.viewport.from),
          qQ = [],
          TQ = this.gutters.map((QQ => new Vz(QQ, this.view.viewport, -this.view.documentPadding.top)));
        for (let wQ of this.view.viewportLineBlocks)
          if (qQ.length && (qQ = []), Array.isArray(wQ.type)) {
            let QQ = !0;
            for (let WQ of wQ.type)
              if (WQ.type == cQ.Text && QQ) {
                yz(XQ, qQ, WQ.from);
                for (let QQ of TQ) QQ.line(this.view, WQ, qQ);
                QQ = !1
              } else if (WQ.widget)
              for (let QQ of TQ) QQ.widget(this.view, WQ)
          } else if (wQ.type == cQ.Text) {
          yz(XQ, qQ, wQ.from);
          for (let QQ of TQ) QQ.line(this.view, wQ, qQ)
        } else if (wQ.widget)
          for (let QQ of TQ) QQ.widget(this.view, wQ);
        for (let wQ of TQ) wQ.finish();
        QQ && (this.view.scrollDOM.insertBefore(this.dom, WQ), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter))
      }
      updateGutters(QQ) {
        let WQ = QQ.startState.facet(gz),
          XQ = QQ.state.facet(gz),
          qQ = QQ.docChanged || QQ.heightChanged || QQ.viewportChanged || !wQ.A.eq(QQ.startState.facet(sz), QQ.state.facet(sz), QQ.view.viewport.from, QQ.view.viewport.to);
        if (WQ == XQ)
          for (let wQ of this.gutters) wQ.update(QQ) && (qQ = !0);
        else {
          qQ = !0;
          let wQ = [];
          for (let qQ of XQ) {
            let XQ = WQ.indexOf(qQ);
            XQ < 0 ? wQ.push(new Dz(this.view, qQ)) : (this.gutters[XQ].update(QQ), wQ.push(this.gutters[XQ]))
          }
          for (let QQ of this.gutters) QQ.dom.remove(), wQ.indexOf(QQ) < 0 && QQ.destroy();
          for (let QQ of wQ) "after" == QQ.config.side ? this.getDOMAfter().appendChild(QQ.dom) : this.dom.appendChild(QQ.dom);
          this.gutters = wQ
        }
        return qQ
      }
      destroy() {
        for (let QQ of this.gutters) QQ.destroy();
        this.dom.remove(), this.domAfter && this.domAfter.remove()
      }
    }, {
      provide: QQ => aq.scrollMargins.of((WQ => {
        let XQ = WQ.plugin(QQ);
        if (!XQ || 0 == XQ.gutters.length || !XQ.fixed) return null;
        let wQ = XQ.dom.offsetWidth * WQ.scaleX,
          qQ = XQ.domAfter ? XQ.domAfter.offsetWidth * WQ.scaleX : 0;
        return WQ.textDirection == PW.LTR ? {
          left: wQ,
          right: qQ
        } : {
          right: wQ,
          left: qQ
        }
      }))
    });

    function Bz(QQ) {
      return Array.isArray(QQ) ? QQ : [QQ]
    }

    function yz(QQ, WQ, XQ) {
      for (; QQ.value && QQ.from <= XQ;) QQ.from == XQ && WQ.push(QQ.value), QQ.next()
    }
    class Vz {
      constructor(QQ, WQ, XQ) {
        this.gutter = QQ, this.height = XQ, this.i = 0, this.cursor = wQ.A.iter(QQ.markers, WQ.from)
      }
      addElement(QQ, WQ, XQ) {
        let {
          gutter: wQ
        } = this, qQ = (WQ.top - this.height) / QQ.scaleY, TQ = WQ.height / QQ.scaleY;
        if (this.i == wQ.elements.length) {
          let WQ = new pz(QQ, TQ, qQ, XQ);
          wQ.elements.push(WQ), wQ.dom.appendChild(WQ.dom)
        } else wQ.elements[this.i].update(QQ, TQ, qQ, XQ);
        this.height = WQ.bottom, this.i++
      }
      line(QQ, WQ, XQ) {
        let wQ = [];
        yz(this.cursor, wQ, WQ.from), XQ.length && (wQ = wQ.concat(XQ));
        let qQ = this.gutter.config.lineMarker(QQ, WQ, wQ);
        qQ && wQ.unshift(qQ);
        let TQ = this.gutter;
        (0 != wQ.length || TQ.config.renderEmptyElements) && this.addElement(QQ, WQ, wQ)
      }
      widget(QQ, WQ) {
        let XQ = this.gutter.config.widgetMarker(QQ, WQ.widget, WQ),
          wQ = XQ ? [XQ] : null;
        for (let qQ of QQ.state.facet(Fz)) {
          let XQ = qQ(QQ, WQ.widget, WQ);
          XQ && (wQ || (wQ = [])).push(XQ)
        }
        wQ && this.addElement(QQ, WQ, wQ)
      }
      finish() {
        let QQ = this.gutter;
        for (; QQ.elements.length > this.i;) {
          let WQ = QQ.elements.pop();
          QQ.dom.removeChild(WQ.dom), WQ.destroy()
        }
      }
    }
    class Dz {
      constructor(QQ, WQ) {
        this.view = QQ, this.config = WQ, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
        for (let XQ in WQ.domEventHandlers) this.dom.addEventListener(XQ, (wQ => {
          let qQ, TQ = wQ.target;
          if (TQ != this.dom && this.dom.contains(TQ)) {
            for (; TQ.parentNode != this.dom;) TQ = TQ.parentNode;
            let QQ = TQ.getBoundingClientRect();
            qQ = (QQ.top + QQ.bottom) / 2
          } else qQ = wQ.clientY;
          let zQ = QQ.lineBlockAtHeight(qQ - QQ.documentTop);
          WQ.domEventHandlers[XQ](QQ, zQ, wQ) && wQ.preventDefault()
        }));
        this.markers = Bz(WQ.markers(QQ)), WQ.initialSpacer && (this.spacer = new pz(QQ, 0, 0, [WQ.initialSpacer(QQ)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none")
      }
      update(QQ) {
        let WQ = this.markers;
        if (this.markers = Bz(this.config.markers(QQ.view)), this.spacer && this.config.updateSpacer) {
          let WQ = this.config.updateSpacer(this.spacer.markers[0], QQ);
          WQ != this.spacer.markers[0] && this.spacer.update(QQ.view, 0, 0, [WQ])
        }
        let XQ = QQ.view.viewport;
        return !wQ.A.eq(this.markers, WQ, XQ.from, XQ.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(QQ)
      }
      destroy() {
        for (let QQ of this.elements) QQ.destroy()
      }
    }
    class pz {
      constructor(QQ, WQ, XQ, wQ) {
        this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(QQ, WQ, XQ, wQ)
      }
      update(QQ, WQ, XQ, wQ) {
        this.height != WQ && (this.height = WQ, this.dom.style.height = WQ + "px"), this.above != XQ && (this.dom.style.marginTop = (this.above = XQ) ? XQ + "px" : ""),
          function(QQ, WQ) {
            if (QQ.length != WQ.length) return !1;
            for (let XQ = 0; XQ < QQ.length; XQ++)
              if (!QQ[XQ].compare(WQ[XQ])) return !1;
            return !0
          }(this.markers, wQ) || this.setMarkers(QQ, wQ)
      }
      setMarkers(QQ, WQ) {
        let XQ = "cm-gutterElement",
          wQ = this.dom.firstChild;
        for (let qQ = 0, TQ = 0;;) {
          let zQ = TQ,
            sQ = qQ < WQ.length ? WQ[qQ++] : null,
            FQ = !1;
          if (sQ) {
            let QQ = sQ.elementClass;
            QQ && (XQ += " " + QQ);
            for (let WQ = TQ; WQ < this.markers.length; WQ++)
              if (this.markers[WQ].compare(sQ)) {
                zQ = WQ, FQ = !0;
                break
              }
          } else zQ = this.markers.length;
          for (; TQ < zQ;) {
            let QQ = this.markers[TQ++];
            if (QQ.toDOM) {
              QQ.destroy(wQ);
              let WQ = wQ.nextSibling;
              wQ.remove(), wQ = WQ
            }
          }
          if (!sQ) break;
          sQ.toDOM && (FQ ? wQ = wQ.nextSibling : this.dom.insertBefore(sQ.toDOM(QQ), wQ)), FQ && TQ++
        }
        this.dom.className = XQ, this.markers = WQ
      }
      destroy() {
        this.setMarkers(null, [])
      }
    }
    const Gz = wQ.o.define(),
      Uz = wQ.o.define(),
      bz = wQ.o.define({
        combine: QQ => (0, wQ.U)(QQ, {
          formatNumber: String,
          domEventHandlers: {}
        }, {
          domEventHandlers(QQ, WQ) {
            let XQ = Object.assign({}, QQ);
            for (let wQ in WQ) {
              let QQ = XQ[wQ],
                qQ = WQ[wQ];
              XQ[wQ] = QQ ? (WQ, XQ, wQ) => QQ(WQ, XQ, wQ) || qQ(WQ, XQ, wQ) : qQ
            }
            return XQ
          }
        })
      });
    class vz extends zz {
      constructor(QQ) {
        super(), this.number = QQ
      }
      eq(QQ) {
        return this.number == QQ.number
      }
      toDOM() {
        return document.createTextNode(this.number)
      }
    }

    function dz(QQ, WQ) {
      return QQ.state.facet(bz).formatNumber(WQ, QQ.state)
    }
    const Hz = gz.compute([bz], (QQ => ({
      class: "cm-lineNumbers",
      renderEmptyElements: !1,
      markers: QQ => QQ.state.facet(Gz),
      lineMarker: (QQ, WQ, XQ) => XQ.some((QQ => QQ.toDOM)) ? null : new vz(dz(QQ, QQ.state.doc.lineAt(WQ.from).number)),
      widgetMarker: (QQ, WQ, XQ) => {
        for (let wQ of QQ.state.facet(Uz)) {
          let qQ = wQ(QQ, WQ, XQ);
          if (qQ) return qQ
        }
        return null
      },
      lineMarkerChange: QQ => QQ.startState.facet(bz) != QQ.state.facet(bz),
      initialSpacer: QQ => new vz(dz(QQ, lz(QQ.state.doc.lines))),
      updateSpacer(QQ, WQ) {
        let XQ = dz(WQ.view, lz(WQ.view.state.doc.lines));
        return XQ == QQ.number ? QQ : new vz(XQ)
      },
      domEventHandlers: QQ.facet(bz).domEventHandlers,
      side: "before"
    })));

    function az() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [bz.of(QQ), Iz(), Hz]
    }

    function lz(QQ) {
      let WQ = 9;
      for (; WQ < QQ;) WQ = 10 * WQ + 9;
      return WQ
    }
    const hz = new class extends zz {
        constructor() {
          super(...arguments), this.elementClass = "cm-activeLineGutter"
        }
      },
      iz = sz.compute(["selection"], (QQ => {
        let WQ = [],
          XQ = -1;
        for (let wQ of QQ.selection.Qy) {
          let qQ = QQ.doc.lineAt(wQ.head).from;
          qQ > XQ && (XQ = qQ, WQ.push(hz.range(qQ)))
        }
        return wQ.A.of(WQ)
      }));

    function cz() {
      return iz
    }
  },
  41568: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => wQ,
      g: () => IQ,
      k: () => zQ,
      o: () => gQ,
      p: () => PQ,
      s: () => RQ,
      v: () => CQ,
      w: () => EQ,
      x: () => jQ
    });
    const wQ = 1024;
    let qQ = 0;
    class TQ {
      constructor(QQ, WQ) {
        this.from = QQ, this.to = WQ
      }
    }
    class zQ {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.id = qQ++, this.perNode = !!QQ.perNode, this.deserialize = QQ.deserialize || (() => {
          throw new Error("This node type doesn't define a deserialize function")
        }), this.combine = QQ.combine || null
      }
      add(QQ) {
        if (this.perNode) throw new RangeError("Can't add per-node props to node types");
        return "function" != typeof QQ && (QQ = PQ.match(QQ)), WQ => {
          let XQ = QQ(WQ);
          return void 0 === XQ ? null : [this, XQ]
        }
      }
    }
    zQ.closedBy = new zQ({
      deserialize: QQ => QQ.split(" ")
    }), zQ.openedBy = new zQ({
      deserialize: QQ => QQ.split(" ")
    }), zQ.group = new zQ({
      deserialize: QQ => QQ.split(" ")
    }), zQ.isolate = new zQ({
      deserialize: QQ => {
        if (QQ && "rtl" != QQ && "ltr" != QQ && "auto" != QQ) throw new RangeError("Invalid value for isolate: " + QQ);
        return QQ || "auto"
      }
    }), zQ.contextHash = new zQ({
      perNode: !0
    }), zQ.lookAhead = new zQ({
      perNode: !0
    }), zQ.mounted = new zQ({
      perNode: !0
    });
    class sQ {
      constructor(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this.tree = QQ, this.overlay = WQ, this.parser = XQ, this.bracketed = wQ
      }
      static get(QQ) {
        return QQ && QQ.props && QQ.props[zQ.mounted.id]
      }
    }
    const FQ = Object.create(null);
    class PQ {
      constructor(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.name = QQ, this.props = WQ, this.id = XQ, this.flags = wQ
      }
      static define(QQ) {
        let WQ = QQ.props && QQ.props.length ? Object.create(null) : FQ,
          XQ = (QQ.top ? 1 : 0) | (QQ.skipped ? 2 : 0) | (QQ.error ? 4 : 0) | (null == QQ.name ? 8 : 0),
          wQ = new PQ(QQ.name || "", WQ, QQ.id, XQ);
        if (QQ.props)
          for (let qQ of QQ.props)
            if (Array.isArray(qQ) || (qQ = qQ(wQ)), qQ) {
              if (qQ[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
              WQ[qQ[0].id] = qQ[1]
            } return wQ
      }
      prop(QQ) {
        return this.props[QQ.id]
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
      is(QQ) {
        if ("string" == typeof QQ) {
          if (this.name == QQ) return !0;
          let WQ = this.prop(zQ.group);
          return !!WQ && WQ.indexOf(QQ) > -1
        }
        return this.id == QQ
      }
      static match(QQ) {
        let WQ = Object.create(null);
        for (let XQ in QQ)
          for (let wQ of XQ.split(" ")) WQ[wQ] = QQ[XQ];
        return QQ => {
          for (let XQ = QQ.prop(zQ.group), wQ = -1; wQ < (XQ ? XQ.length : 0); wQ++) {
            let qQ = WQ[wQ < 0 ? QQ.name : XQ[wQ]];
            if (qQ) return qQ
          }
        }
      }
    }
    PQ.none = new PQ("", Object.create(null), 0, 8);
    class gQ {
      constructor(QQ) {
        this.types = QQ;
        for (let WQ = 0; WQ < QQ.length; WQ++)
          if (QQ[WQ].id != WQ) throw new RangeError("Node type ids should correspond to array positions when creating a node set")
      }
      extend() {
        let QQ = [];
        for (var WQ = arguments.length, XQ = new Array(WQ), wQ = 0; wQ < WQ; wQ++) XQ[wQ] = arguments[wQ];
        for (let qQ of this.types) {
          let WQ = null;
          for (let QQ of XQ) {
            let XQ = QQ(qQ);
            if (XQ) {
              WQ || (WQ = Object.assign({}, qQ.props));
              let QQ = XQ[1],
                wQ = XQ[0];
              wQ.combine && wQ.id in WQ && (QQ = wQ.combine(WQ[wQ.id], QQ)), WQ[wQ.id] = QQ
            }
          }
          QQ.push(WQ ? new PQ(qQ.name, WQ, qQ.id, qQ.flags) : qQ)
        }
        return new gQ(QQ)
      }
    }
    const JQ = new WeakMap,
      rQ = new WeakMap;
    var IQ;
    ! function(QQ) {
      QQ[QQ.ExcludeBuffers = 1] = "ExcludeBuffers", QQ[QQ.IncludeAnonymous = 2] = "IncludeAnonymous", QQ[QQ.IgnoreMounts = 4] = "IgnoreMounts", QQ[QQ.IgnoreOverlays = 8] = "IgnoreOverlays", QQ[QQ.EnterBracketed = 16] = "EnterBracketed"
    }(IQ || (IQ = {}));
    class jQ {
      constructor(QQ, WQ, XQ, wQ, qQ) {
        if (this.type = QQ, this.children = WQ, this.positions = XQ, this.length = wQ, this.props = null, qQ && qQ.length) {
          this.props = Object.create(null);
          for (let [QQ, WQ] of qQ) this.props["number" == typeof QQ ? QQ : QQ.id] = WQ
        }
      }
      toString() {
        let QQ = sQ.get(this);
        if (QQ && !QQ.overlay) return QQ.tree.toString();
        let WQ = "";
        for (let XQ of this.children) {
          let QQ = XQ.toString();
          QQ && (WQ && (WQ += ","), WQ += QQ)
        }
        return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (WQ.length ? "(" + WQ + ")" : "") : WQ
      }
      cursor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return new lQ(this.topNode, QQ)
      }
      cursorAt(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          XQ = JQ.get(this) || this.topNode,
          wQ = new lQ(XQ);
        return wQ.moveTo(QQ, WQ), JQ.set(this, wQ._tree), wQ
      }
      get topNode() {
        return new GQ(this, 0, 0, null)
      }
      resolve(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          XQ = DQ(JQ.get(this) || this.topNode, QQ, WQ, !1);
        return JQ.set(this, XQ), XQ
      }
      resolveInner(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          XQ = DQ(rQ.get(this) || this.topNode, QQ, WQ, !0);
        return rQ.set(this, XQ), XQ
      }
      resolveStack(QQ) {
        return function(QQ, WQ, XQ) {
          let wQ = QQ.resolveInner(WQ, XQ),
            qQ = null;
          for (let TQ = wQ instanceof GQ ? wQ : wQ.context.parent; TQ; TQ = TQ.parent)
            if (TQ.index < 0) {
              let QQ = TQ.parent;
              (qQ || (qQ = [wQ])).push(QQ.resolve(WQ, XQ)), TQ = QQ
            } else {
              let QQ = sQ.get(TQ.tree);
              if (QQ && QQ.overlay && QQ.overlay[0].from <= WQ && QQ.overlay[QQ.overlay.length - 1].to >= WQ) {
                let zQ = new GQ(QQ.tree, QQ.overlay[0].from + TQ.from, -1, TQ);
                (qQ || (qQ = [wQ])).push(DQ(zQ, WQ, XQ, !1))
              }
            } return qQ ? HQ(qQ) : wQ
        }(this, QQ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
      }
      iterate(QQ) {
        let {
          enter: WQ,
          leave: XQ,
          from: wQ = 0,
          to: qQ = this.length
        } = QQ, TQ = QQ.mode || 0, zQ = (TQ & IQ.IncludeAnonymous) > 0;
        for (let sQ = this.cursor(TQ | IQ.IncludeAnonymous);;) {
          let QQ = !1;
          if (sQ.from <= qQ && sQ.to >= wQ && (!zQ && sQ.type.isAnonymous || !1 !== WQ(sQ))) {
            if (sQ.firstChild()) continue;
            QQ = !0
          }
          for (; QQ && XQ && (zQ || !sQ.type.isAnonymous) && XQ(sQ), !sQ.nextSibling();) {
            if (!sQ.parent()) return;
            QQ = !0
          }
        }
      }
      prop(QQ) {
        return QQ.perNode ? this.props ? this.props[QQ.id] : void 0 : this.type.prop(QQ)
      }
      get propValues() {
        let QQ = [];
        if (this.props)
          for (let WQ in this.props) QQ.push([+WQ, this.props[WQ]]);
        return QQ
      }
      balance() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this.children.length <= 8 ? this : AQ(PQ.none, this.children, this.positions, 0, this.children.length, 0, this.length, ((QQ, WQ, XQ) => new jQ(this.type, QQ, WQ, XQ, this.propValues)), QQ.makeTree || ((QQ, WQ, XQ) => new jQ(PQ.none, QQ, WQ, XQ)))
      }
      static build(QQ) {
        return function(QQ) {
          var WQ;
          let {
            buffer: XQ,
            nodeSet: qQ,
            maxBufferLength: TQ = wQ,
            reused: sQ = [],
            minRepeatType: FQ = qQ.types.length
          } = QQ, PQ = Array.isArray(XQ) ? new BQ(XQ, XQ.length) : XQ, gQ = qQ.types, JQ = 0, rQ = 0;

          function IQ(QQ, WQ, XQ, wQ, zQ, jQ) {
            let {
              id: BQ,
              start: vQ,
              end: dQ,
              size: HQ
            } = PQ, aQ = rQ, lQ = JQ;
            if (HQ < 0) {
              if (PQ.next(), -1 == HQ) {
                let WQ = sQ[BQ];
                return XQ.push(WQ), void wQ.push(vQ - QQ)
              }
              if (-3 == HQ) return void(JQ = BQ);
              if (-4 == HQ) return void(rQ = BQ);
              throw new RangeError(`Unrecognized record size: ${HQ}`)
            }
            let hQ, iQ, cQ = gQ[BQ],
              RQ = vQ - QQ;
            if (dQ - vQ <= TQ && (iQ = UQ(PQ.pos - WQ, zQ))) {
              let WQ = new Uint16Array(iQ.size - iQ.skip),
                XQ = PQ.pos - iQ.size,
                wQ = WQ.length;
              for (; PQ.pos > XQ;) wQ = bQ(iQ.start, WQ, wQ);
              hQ = new yQ(WQ, dQ - iQ.start, qQ), RQ = iQ.start - QQ
            } else {
              let QQ = PQ.pos - HQ;
              PQ.next();
              let WQ = [],
                XQ = [],
                wQ = BQ >= FQ ? BQ : -1,
                qQ = 0,
                zQ = dQ;
              for (; PQ.pos > QQ;) wQ >= 0 && PQ.id == wQ && PQ.size >= 0 ? (PQ.end <= zQ - TQ && (pQ(WQ, XQ, vQ, qQ, PQ.end, zQ, wQ, aQ, lQ), qQ = WQ.length, zQ = PQ.end), PQ.next()) : jQ > 2500 ? VQ(vQ, QQ, WQ, XQ) : IQ(vQ, QQ, WQ, XQ, wQ, jQ + 1);
              if (wQ >= 0 && qQ > 0 && qQ < WQ.length && pQ(WQ, XQ, vQ, qQ, vQ, zQ, wQ, aQ, lQ), WQ.reverse(), XQ.reverse(), wQ > -1 && qQ > 0) {
                let QQ = DQ(cQ, lQ);
                hQ = AQ(cQ, WQ, XQ, 0, WQ.length, 0, dQ - vQ, QQ, QQ)
              } else hQ = GQ(cQ, WQ, XQ, dQ - vQ, aQ - dQ, lQ)
            }
            XQ.push(hQ), wQ.push(RQ)
          }

          function VQ(QQ, WQ, XQ, wQ) {
            let zQ = [],
              sQ = 0,
              FQ = -1;
            for (; PQ.pos > WQ;) {
              let {
                id: QQ,
                start: WQ,
                end: XQ,
                size: wQ
              } = PQ;
              if (wQ > 4) PQ.next();
              else {
                if (FQ > -1 && WQ < FQ) break;
                FQ < 0 && (FQ = XQ - TQ), zQ.push(QQ, WQ, XQ), sQ++, PQ.next()
              }
            }
            if (sQ) {
              let WQ = new Uint16Array(4 * sQ),
                TQ = zQ[zQ.length - 2];
              for (let QQ = zQ.length - 3, XQ = 0; QQ >= 0; QQ -= 3) WQ[XQ++] = zQ[QQ], WQ[XQ++] = zQ[QQ + 1] - TQ, WQ[XQ++] = zQ[QQ + 2] - TQ, WQ[XQ++] = XQ;
              XQ.push(new yQ(WQ, zQ[2] - TQ, qQ)), wQ.push(TQ - QQ)
            }
          }

          function DQ(QQ, WQ) {
            return (XQ, wQ, qQ) => {
              let TQ, sQ, FQ = 0,
                PQ = XQ.length - 1;
              if (PQ >= 0 && (TQ = XQ[PQ]) instanceof jQ) {
                if (!PQ && TQ.type == QQ && TQ.length == qQ) return TQ;
                (sQ = TQ.prop(zQ.lookAhead)) && (FQ = wQ[PQ] + TQ.length + sQ)
              }
              return GQ(QQ, XQ, wQ, qQ, FQ, WQ)
            }
          }

          function pQ(QQ, WQ, XQ, wQ, TQ, zQ, sQ, FQ, PQ) {
            let gQ = [],
              JQ = [];
            for (; QQ.length > wQ;) gQ.push(QQ.pop()), JQ.push(WQ.pop() + XQ - TQ);
            QQ.push(GQ(qQ.types[sQ], gQ, JQ, zQ - TQ, FQ - zQ, PQ)), WQ.push(TQ - XQ)
          }

          function GQ(QQ, WQ, XQ, wQ, qQ, TQ, sQ) {
            if (TQ) {
              let QQ = [zQ.contextHash, TQ];
              sQ = sQ ? [QQ].concat(sQ) : [QQ]
            }
            if (qQ > 25) {
              let QQ = [zQ.lookAhead, qQ];
              sQ = sQ ? [QQ].concat(sQ) : [QQ]
            }
            return new jQ(QQ, WQ, XQ, wQ, sQ)
          }

          function UQ(QQ, WQ) {
            let XQ = PQ.fork(),
              wQ = 0,
              qQ = 0,
              zQ = 0,
              sQ = XQ.end - TQ,
              gQ = {
                size: 0,
                start: 0,
                skip: 0
              };
            QQ: for (let TQ = XQ.pos - QQ; XQ.pos > TQ;) {
              let QQ = XQ.size;
              if (XQ.id == WQ && QQ >= 0) {
                gQ.size = wQ, gQ.start = qQ, gQ.skip = zQ, zQ += 4, wQ += 4, XQ.next();
                continue
              }
              let PQ = XQ.pos - QQ;
              if (QQ < 0 || PQ < TQ || XQ.start < sQ) break;
              let JQ = XQ.id >= FQ ? 4 : 0,
                rQ = XQ.start;
              for (XQ.next(); XQ.pos > PQ;) {
                if (XQ.size < 0) {
                  if (-3 != XQ.size && -4 != XQ.size) break QQ;
                  JQ += 4
                } else XQ.id >= FQ && (JQ += 4);
                XQ.next()
              }
              qQ = rQ, wQ += QQ, zQ += JQ
            }
            return (WQ < 0 || wQ == QQ) && (gQ.size = wQ, gQ.start = qQ, gQ.skip = zQ), gQ.size > 4 ? gQ : void 0
          }

          function bQ(QQ, WQ, XQ) {
            let {
              id: wQ,
              start: qQ,
              end: TQ,
              size: zQ
            } = PQ;
            if (PQ.next(), zQ >= 0 && wQ < FQ) {
              let sQ = XQ;
              if (zQ > 4) {
                let wQ = PQ.pos - (zQ - 4);
                for (; PQ.pos > wQ;) XQ = bQ(QQ, WQ, XQ)
              }
              WQ[--XQ] = sQ, WQ[--XQ] = TQ - QQ, WQ[--XQ] = qQ - QQ, WQ[--XQ] = wQ
            } else - 3 == zQ ? JQ = wQ : -4 == zQ && (rQ = wQ);
            return XQ
          }
          let vQ = [],
            dQ = [];
          for (; PQ.pos > 0;) IQ(QQ.start || 0, QQ.bufferStart || 0, vQ, dQ, -1, 0);
          let HQ = null !== (WQ = QQ.length) && void 0 !== WQ ? WQ : vQ.length ? dQ[0] + vQ[0].length : 0;
          return new jQ(gQ[QQ.topID], vQ.reverse(), dQ.reverse(), HQ)
        }(QQ)
      }
    }
    jQ.empty = new jQ(PQ.none, [], [], 0);
    class BQ {
      constructor(QQ, WQ) {
        this.buffer = QQ, this.index = WQ
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
        return new BQ(this.buffer, this.index)
      }
    }
    class yQ {
      constructor(QQ, WQ, XQ) {
        this.buffer = QQ, this.length = WQ, this.set = XQ
      }
      get type() {
        return PQ.none
      }
      toString() {
        let QQ = [];
        for (let WQ = 0; WQ < this.buffer.length;) QQ.push(this.childString(WQ)), WQ = this.buffer[WQ + 3];
        return QQ.join(",")
      }
      childString(QQ) {
        let WQ = this.buffer[QQ],
          XQ = this.buffer[QQ + 3],
          wQ = this.set.types[WQ],
          qQ = wQ.name;
        if (/\W/.test(qQ) && !wQ.isError && (qQ = JSON.stringify(qQ)), XQ == (QQ += 4)) return qQ;
        let TQ = [];
        for (; QQ < XQ;) TQ.push(this.childString(QQ)), QQ = this.buffer[QQ + 3];
        return qQ + "(" + TQ.join(",") + ")"
      }
      findChild(QQ, WQ, XQ, wQ, qQ) {
        let {
          buffer: TQ
        } = this, zQ = -1;
        for (let sQ = QQ; sQ != WQ && !(VQ(qQ, wQ, TQ[sQ + 1], TQ[sQ + 2]) && (zQ = sQ, XQ > 0)); sQ = TQ[sQ + 3]);
        return zQ
      }
      slice(QQ, WQ, XQ) {
        let wQ = this.buffer,
          qQ = new Uint16Array(WQ - QQ),
          TQ = 0;
        for (let zQ = QQ, sQ = 0; zQ < WQ;) {
          qQ[sQ++] = wQ[zQ++], qQ[sQ++] = wQ[zQ++] - XQ;
          let WQ = qQ[sQ++] = wQ[zQ++] - XQ;
          qQ[sQ++] = wQ[zQ++] - QQ, TQ = Math.max(TQ, WQ)
        }
        return new yQ(qQ, TQ, this.set)
      }
    }

    function VQ(QQ, WQ, XQ, wQ) {
      switch (QQ) {
        case -2:
          return XQ < WQ;
        case -1:
          return wQ >= WQ && XQ < WQ;
        case 0:
          return XQ < WQ && wQ > WQ;
        case 1:
          return XQ <= WQ && wQ > WQ;
        case 2:
          return wQ > WQ;
        case 4:
          return !0
      }
    }

    function DQ(QQ, WQ, XQ, wQ) {
      for (var qQ; QQ.from == QQ.to || (XQ < 1 ? QQ.from >= WQ : QQ.from > WQ) || (XQ > -1 ? QQ.to <= WQ : QQ.to < WQ);) {
        let WQ = !wQ && QQ instanceof GQ && QQ.index < 0 ? null : QQ.parent;
        if (!WQ) return QQ;
        QQ = WQ
      }
      let TQ = wQ ? 0 : IQ.IgnoreOverlays;
      if (wQ)
        for (let zQ = QQ, sQ = zQ.parent; sQ; zQ = sQ, sQ = zQ.parent) zQ instanceof GQ && zQ.index < 0 && (null === (qQ = sQ.enter(WQ, XQ, TQ)) || void 0 === qQ ? void 0 : qQ.from) != zQ.from && (QQ = sQ);
      for (;;) {
        let wQ = QQ.enter(WQ, XQ, TQ);
        if (!wQ) return QQ;
        QQ = wQ
      }
    }
    class pQ {
      cursor() {
        return new lQ(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)
      }
      getChild(QQ) {
        let WQ = UQ(this, QQ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null);
        return WQ.length ? WQ[0] : null
      }
      getChildren(QQ) {
        return UQ(this, QQ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
      }
      resolve(QQ) {
        return DQ(this, QQ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !1)
      }
      resolveInner(QQ) {
        return DQ(this, QQ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !0)
      }
      matchContext(QQ) {
        return bQ(this.parent, QQ)
      }
      enterUnfinishedNodesBefore(QQ) {
        let WQ = this.childBefore(QQ),
          XQ = this;
        for (; WQ;) {
          let QQ = WQ.lastChild;
          if (!QQ || QQ.to != WQ.to) break;
          QQ.type.isError && QQ.from == QQ.to ? (XQ = WQ, WQ = QQ.prevSibling) : WQ = QQ
        }
        return XQ
      }
      get node() {
        return this
      }
      get next() {
        return this.parent
      }
    }
    class GQ extends pQ {
      constructor(QQ, WQ, XQ, wQ) {
        super(), this._tree = QQ, this.from = WQ, this.index = XQ, this._parent = wQ
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
      nextChild(QQ, WQ, XQ, wQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        for (let TQ = this;;) {
          for (let {
              children: zQ,
              positions: FQ
            } = TQ._tree, PQ = WQ > 0 ? zQ.length : -1; QQ != PQ; QQ += WQ) {
            let PQ, gQ = zQ[QQ],
              JQ = FQ[QQ] + TQ.from;
            if (qQ & IQ.EnterBracketed && gQ instanceof jQ && (PQ = sQ.get(gQ)) && !PQ.overlay && PQ.bracketed && XQ >= JQ && XQ <= JQ + gQ.length || VQ(wQ, XQ, JQ, JQ + gQ.length))
              if (gQ instanceof yQ) {
                if (qQ & IQ.ExcludeBuffers) continue;
                let zQ = gQ.findChild(0, gQ.buffer.length, WQ, XQ - JQ, wQ);
                if (zQ > -1) return new dQ(new vQ(TQ, gQ, QQ, JQ), null, zQ)
              } else if (qQ & IQ.IncludeAnonymous || !gQ.type.isAnonymous || hQ(gQ)) {
              let zQ;
              if (!(qQ & IQ.IgnoreMounts) && (zQ = sQ.get(gQ)) && !zQ.overlay) return new GQ(zQ.tree, JQ, QQ, TQ);
              let FQ = new GQ(gQ, JQ, QQ, TQ);
              return qQ & IQ.IncludeAnonymous || !FQ.type.isAnonymous ? FQ : FQ.nextChild(WQ < 0 ? gQ.children.length - 1 : 0, WQ, XQ, wQ, qQ)
            }
          }
          if (qQ & IQ.IncludeAnonymous || !TQ.type.isAnonymous) return null;
          if (QQ = TQ.index >= 0 ? TQ.index + WQ : WQ < 0 ? -1 : TQ._parent._tree.children.length, TQ = TQ._parent, !TQ) return null
        }
      }
      get firstChild() {
        return this.nextChild(0, 1, 0, 4)
      }
      get lastChild() {
        return this.nextChild(this._tree.children.length - 1, -1, 0, 4)
      }
      childAfter(QQ) {
        return this.nextChild(0, 1, QQ, 2)
      }
      childBefore(QQ) {
        return this.nextChild(this._tree.children.length - 1, -1, QQ, -2)
      }
      prop(QQ) {
        return this._tree.prop(QQ)
      }
      enter(QQ, WQ) {
        let XQ, wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (!(wQ & IQ.IgnoreOverlays) && (XQ = sQ.get(this._tree)) && XQ.overlay) {
          let qQ = QQ - this.from,
            TQ = wQ & IQ.EnterBracketed && XQ.bracketed;
          for (let {
              from: QQ,
              to: wQ
            }
            of XQ.overlay)
            if ((WQ > 0 || TQ ? QQ <= qQ : QQ < qQ) && (WQ < 0 || TQ ? wQ >= qQ : wQ > qQ)) return new GQ(XQ.tree, XQ.overlay[0].from + this.from, -1, this)
        }
        return this.nextChild(0, 1, QQ, WQ, wQ)
      }
      nextSignificantParent() {
        let QQ = this;
        for (; QQ.type.isAnonymous && QQ._parent;) QQ = QQ._parent;
        return QQ
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

    function UQ(QQ, WQ, XQ, wQ) {
      let qQ = QQ.cursor(),
        TQ = [];
      if (!qQ.firstChild()) return TQ;
      if (null != XQ)
        for (let zQ = !1; !zQ;)
          if (zQ = qQ.type.is(XQ), !qQ.nextSibling()) return TQ;
      for (;;) {
        if (null != wQ && qQ.type.is(wQ)) return TQ;
        if (qQ.type.is(WQ) && TQ.push(qQ.node), !qQ.nextSibling()) return null == wQ ? TQ : []
      }
    }

    function bQ(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : WQ.length - 1;
      for (let wQ = QQ; XQ >= 0; wQ = wQ.parent) {
        if (!wQ) return !1;
        if (!wQ.type.isAnonymous) {
          if (WQ[XQ] && WQ[XQ] != wQ.name) return !1;
          XQ--
        }
      }
      return !0
    }
    class vQ {
      constructor(QQ, WQ, XQ, wQ) {
        this.parent = QQ, this.buffer = WQ, this.index = XQ, this.start = wQ
      }
    }
    class dQ extends pQ {
      get name() {
        return this.type.name
      }
      get from() {
        return this.context.start + this.context.buffer.buffer[this.index + 1]
      }
      get to() {
        return this.context.start + this.context.buffer.buffer[this.index + 2]
      }
      constructor(QQ, WQ, XQ) {
        super(), this.context = QQ, this._parent = WQ, this.index = XQ, this.type = QQ.buffer.set.types[QQ.buffer.buffer[XQ]]
      }
      child(QQ, WQ, XQ) {
        let {
          buffer: wQ
        } = this.context, qQ = wQ.findChild(this.index + 4, wQ.buffer[this.index + 3], QQ, WQ - this.context.start, XQ);
        return qQ < 0 ? null : new dQ(this.context, this, qQ)
      }
      get firstChild() {
        return this.child(1, 0, 4)
      }
      get lastChild() {
        return this.child(-1, 0, 4)
      }
      childAfter(QQ) {
        return this.child(1, QQ, 2)
      }
      childBefore(QQ) {
        return this.child(-1, QQ, -2)
      }
      prop(QQ) {
        return this.type.prop(QQ)
      }
      enter(QQ, WQ) {
        if ((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0) & IQ.ExcludeBuffers) return null;
        let {
          buffer: XQ
        } = this.context, wQ = XQ.findChild(this.index + 4, XQ.buffer[this.index + 3], WQ > 0 ? 1 : -1, QQ - this.context.start, WQ);
        return wQ < 0 ? null : new dQ(this.context, this, wQ)
      }
      get parent() {
        return this._parent || this.context.parent.nextSignificantParent()
      }
      externalSibling(QQ) {
        return this._parent ? null : this.context.parent.nextChild(this.context.index + QQ, QQ, 0, 4)
      }
      get nextSibling() {
        let {
          buffer: QQ
        } = this.context, WQ = QQ.buffer[this.index + 3];
        return WQ < (this._parent ? QQ.buffer[this._parent.index + 3] : QQ.buffer.length) ? new dQ(this.context, this._parent, WQ) : this.externalSibling(1)
      }
      get prevSibling() {
        let {
          buffer: QQ
        } = this.context, WQ = this._parent ? this._parent.index + 4 : 0;
        return this.index == WQ ? this.externalSibling(-1) : new dQ(this.context, this._parent, QQ.findChild(WQ, this.index, -1, 0, 4))
      }
      get tree() {
        return null
      }
      toTree() {
        let QQ = [],
          WQ = [],
          {
            buffer: XQ
          } = this.context,
          wQ = this.index + 4,
          qQ = XQ.buffer[this.index + 3];
        if (qQ > wQ) {
          let TQ = XQ.buffer[this.index + 1];
          QQ.push(XQ.slice(wQ, qQ, TQ)), WQ.push(0)
        }
        return new jQ(this.type, QQ, WQ, this.to - this.from)
      }
      toString() {
        return this.context.buffer.childString(this.index)
      }
    }

    function HQ(QQ) {
      if (!QQ.length) return null;
      let WQ = 0,
        XQ = QQ[0];
      for (let TQ = 1; TQ < QQ.length; TQ++) {
        let wQ = QQ[TQ];
        (wQ.from > XQ.from || wQ.to < XQ.to) && (XQ = wQ, WQ = TQ)
      }
      let wQ = XQ instanceof GQ && XQ.index < 0 ? null : XQ.parent,
        qQ = QQ.slice();
      return wQ ? qQ[WQ] = wQ : qQ.splice(WQ, 1), new aQ(qQ, XQ)
    }
    class aQ {
      constructor(QQ, WQ) {
        this.heads = QQ, this.node = WQ
      }
      get next() {
        return HQ(this.heads)
      }
    }
    class lQ {
      get name() {
        return this.type.name
      }
      constructor(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = WQ & ~IQ.EnterBracketed, QQ instanceof GQ) this.yieldNode(QQ);
        else {
          this._tree = QQ.context.parent, this.buffer = QQ.context;
          for (let WQ = QQ._parent; WQ; WQ = WQ._parent) this.stack.unshift(WQ.index);
          this.bufferNode = QQ, this.yieldBuf(QQ.index)
        }
      }
      yieldNode(QQ) {
        return !!QQ && (this._tree = QQ, this.type = QQ.type, this.from = QQ.from, this.to = QQ.to, !0)
      }
      yieldBuf(QQ, WQ) {
        this.index = QQ;
        let {
          start: XQ,
          buffer: wQ
        } = this.buffer;
        return this.type = WQ || wQ.set.types[wQ.buffer[QQ]], this.from = XQ + wQ.buffer[QQ + 1], this.to = XQ + wQ.buffer[QQ + 2], !0
      }
      yield(QQ) {
        return !!QQ && (QQ instanceof GQ ? (this.buffer = null, this.yieldNode(QQ)) : (this.buffer = QQ.context, this.yieldBuf(QQ.index, QQ.type)))
      }
      toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
      }
      enterChild(QQ, WQ, XQ) {
        if (!this.buffer) return this.yield(this._tree.nextChild(QQ < 0 ? this._tree._tree.children.length - 1 : 0, QQ, WQ, XQ, this.mode));
        let {
          buffer: wQ
        } = this.buffer, qQ = wQ.findChild(this.index + 4, wQ.buffer[this.index + 3], QQ, WQ - this.buffer.start, XQ);
        return !(qQ < 0) && (this.stack.push(this.index), this.yieldBuf(qQ))
      }
      firstChild() {
        return this.enterChild(1, 0, 4)
      }
      lastChild() {
        return this.enterChild(-1, 0, 4)
      }
      childAfter(QQ) {
        return this.enterChild(1, QQ, 2)
      }
      childBefore(QQ) {
        return this.enterChild(-1, QQ, -2)
      }
      enter(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.mode;
        return this.buffer ? !(XQ & IQ.ExcludeBuffers) && this.enterChild(1, QQ, WQ) : this.yield(this._tree.enter(QQ, WQ, XQ))
      }
      parent() {
        if (!this.buffer) return this.yieldNode(this.mode & IQ.IncludeAnonymous ? this._tree._parent : this._tree.parent);
        if (this.stack.length) return this.yieldBuf(this.stack.pop());
        let QQ = this.mode & IQ.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        return this.buffer = null, this.yieldNode(QQ)
      }
      sibling(QQ) {
        if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + QQ, QQ, 0, 4, this.mode));
        let {
          buffer: WQ
        } = this.buffer, XQ = this.stack.length - 1;
        if (QQ < 0) {
          let QQ = XQ < 0 ? 0 : this.stack[XQ] + 4;
          if (this.index != QQ) return this.yieldBuf(WQ.findChild(QQ, this.index, -1, 0, 4))
        } else {
          let QQ = WQ.buffer[this.index + 3];
          if (QQ < (XQ < 0 ? WQ.buffer.length : WQ.buffer[this.stack[XQ] + 3])) return this.yieldBuf(QQ)
        }
        return XQ < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + QQ, QQ, 0, 4, this.mode))
      }
      nextSibling() {
        return this.sibling(1)
      }
      prevSibling() {
        return this.sibling(-1)
      }
      atLastNode(QQ) {
        let WQ, XQ, {
          buffer: wQ
        } = this;
        if (wQ) {
          if (QQ > 0) {
            if (this.index < wQ.buffer.buffer.length) return !1
          } else
            for (let QQ = 0; QQ < this.index; QQ++)
              if (wQ.buffer.buffer[QQ + 3] < this.index) return !1;
          ({
            index: WQ,
            parent: XQ
          } = wQ)
        } else({
          index: WQ,
          _parent: XQ
        } = this._tree);
        for (; XQ;
          ({
            index: WQ,
            _parent: XQ
          } = XQ))
          if (WQ > -1)
            for (let wQ = WQ + QQ, qQ = QQ < 0 ? -1 : XQ._tree.children.length; wQ != qQ; wQ += QQ) {
              let QQ = XQ._tree.children[wQ];
              if (this.mode & IQ.IncludeAnonymous || QQ instanceof yQ || !QQ.type.isAnonymous || hQ(QQ)) return !1
            }
        return !0
      }
      move(QQ, WQ) {
        if (WQ && this.enterChild(QQ, 0, 4)) return !0;
        for (;;) {
          if (this.sibling(QQ)) return !0;
          if (this.atLastNode(QQ) || !this.parent()) return !1
        }
      }
      next() {
        let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(1, QQ)
      }
      prev() {
        let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(-1, QQ)
      }
      moveTo(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        for (;
          (this.from == this.to || (WQ < 1 ? this.from >= QQ : this.from > QQ) || (WQ > -1 ? this.to <= QQ : this.to < QQ)) && this.parent(););
        for (; this.enterChild(1, QQ, WQ););
        return this
      }
      get node() {
        if (!this.buffer) return this._tree;
        let QQ = this.bufferNode,
          WQ = null,
          XQ = 0;
        if (QQ && QQ.context == this.buffer) QQ: for (let wQ = this.index, qQ = this.stack.length; qQ >= 0;) {
          for (let TQ = QQ; TQ; TQ = TQ._parent)
            if (TQ.index == wQ) {
              if (wQ == this.index) return TQ;
              WQ = TQ, XQ = qQ + 1;
              break QQ
            } wQ = this.stack[--qQ]
        }
        for (let wQ = XQ; wQ < this.stack.length; wQ++) WQ = new dQ(this.buffer, WQ, this.stack[wQ]);
        return this.bufferNode = new dQ(this.buffer, WQ, this.index)
      }
      get tree() {
        return this.buffer ? null : this._tree._tree
      }
      iterate(QQ, WQ) {
        for (let XQ = 0;;) {
          let wQ = !1;
          if (this.type.isAnonymous || !1 !== QQ(this)) {
            if (this.firstChild()) {
              XQ++;
              continue
            }
            this.type.isAnonymous || (wQ = !0)
          }
          for (;;) {
            if (wQ && WQ && WQ(this), wQ = this.type.isAnonymous, !XQ) return;
            if (this.nextSibling()) break;
            this.parent(), XQ--, wQ = !0
          }
        }
      }
      matchContext(QQ) {
        if (!this.buffer) return bQ(this.node.parent, QQ);
        let {
          buffer: WQ
        } = this.buffer, {
          types: XQ
        } = WQ.set;
        for (let wQ = QQ.length - 1, qQ = this.stack.length - 1; wQ >= 0; qQ--) {
          if (qQ < 0) return bQ(this._tree, QQ, wQ);
          let TQ = XQ[WQ.buffer[this.stack[qQ]]];
          if (!TQ.isAnonymous) {
            if (QQ[wQ] && QQ[wQ] != TQ.name) return !1;
            wQ--
          }
        }
        return !0
      }
    }

    function hQ(QQ) {
      return QQ.children.some((QQ => QQ instanceof yQ || !QQ.type.isAnonymous || hQ(QQ)))
    }
    const iQ = new WeakMap;

    function cQ(QQ, WQ) {
      if (!QQ.isAnonymous || WQ instanceof yQ || WQ.type != QQ) return 1;
      let XQ = iQ.get(WQ);
      if (null == XQ) {
        XQ = 1;
        for (let wQ of WQ.children) {
          if (wQ.type != QQ || !(wQ instanceof jQ)) {
            XQ = 1;
            break
          }
          XQ += cQ(QQ, wQ)
        }
        iQ.set(WQ, XQ)
      }
      return XQ
    }

    function AQ(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ) {
      let PQ = 0;
      for (let IQ = wQ; IQ < qQ; IQ++) PQ += cQ(QQ, WQ[IQ]);
      let gQ = Math.ceil(1.5 * PQ / 8),
        JQ = [],
        rQ = [];
      return function WQ(XQ, wQ, qQ, zQ, sQ) {
        for (let PQ = qQ; PQ < zQ;) {
          let qQ = PQ,
            IQ = wQ[PQ],
            jQ = cQ(QQ, XQ[PQ]);
          for (PQ++; PQ < zQ; PQ++) {
            let WQ = cQ(QQ, XQ[PQ]);
            if (jQ + WQ >= gQ) break;
            jQ += WQ
          }
          if (PQ == qQ + 1) {
            if (jQ > gQ) {
              let QQ = XQ[qQ];
              WQ(QQ.children, QQ.positions, 0, QQ.children.length, wQ[qQ] + sQ);
              continue
            }
            JQ.push(XQ[qQ])
          } else {
            let WQ = wQ[PQ - 1] + XQ[PQ - 1].length - IQ;
            JQ.push(AQ(QQ, XQ, wQ, qQ, PQ, IQ, WQ, null, FQ))
          }
          rQ.push(IQ + sQ - TQ)
        }
      }(WQ, XQ, wQ, qQ, 0), (sQ || FQ)(JQ, rQ, zQ)
    }
    class RQ {
      constructor() {
        this.map = new WeakMap
      }
      setBuffer(QQ, WQ, XQ) {
        let wQ = this.map.get(QQ);
        wQ || this.map.set(QQ, wQ = new Map), wQ.set(WQ, XQ)
      }
      getBuffer(QQ, WQ) {
        let XQ = this.map.get(QQ);
        return XQ && XQ.get(WQ)
      }
      set(QQ, WQ) {
        QQ instanceof dQ ? this.setBuffer(QQ.context.buffer, QQ.index, WQ) : QQ instanceof GQ && this.map.set(QQ.tree, WQ)
      }
      get(QQ) {
        return QQ instanceof dQ ? this.getBuffer(QQ.context.buffer, QQ.index) : QQ instanceof GQ ? this.map.get(QQ.tree) : void 0
      }
      cursorSet(QQ, WQ) {
        QQ.buffer ? this.setBuffer(QQ.buffer.buffer, QQ.index, WQ) : this.map.set(QQ.tree, WQ)
      }
      cursorGet(QQ) {
        return QQ.buffer ? this.getBuffer(QQ.buffer.buffer, QQ.index) : this.map.get(QQ.tree)
      }
    }
    class EQ {
      constructor(QQ, WQ, XQ, wQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          TQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.from = QQ, this.to = WQ, this.tree = XQ, this.offset = wQ, this.open = (qQ ? 1 : 0) | (TQ ? 2 : 0)
      }
      get openStart() {
        return (1 & this.open) > 0
      }
      get openEnd() {
        return (2 & this.open) > 0
      }
      static addTree(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wQ = [new EQ(0, QQ.length, QQ, 0, !1, XQ)];
        for (let qQ of WQ) qQ.to > QQ.length && wQ.push(qQ);
        return wQ
      }
      static applyChanges(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
        if (!WQ.length) return QQ;
        let wQ = [],
          qQ = 1,
          TQ = QQ.length ? QQ[0] : null;
        for (let zQ = 0, sQ = 0, FQ = 0;; zQ++) {
          let PQ = zQ < WQ.length ? WQ[zQ] : null,
            gQ = PQ ? PQ.fromA : 1e9;
          if (gQ - sQ >= XQ)
            for (; TQ && TQ.from < gQ;) {
              let WQ = TQ;
              if (sQ >= WQ.from || gQ <= WQ.to || FQ) {
                let QQ = Math.max(WQ.from, sQ) - FQ,
                  XQ = Math.min(WQ.to, gQ) - FQ;
                WQ = QQ >= XQ ? null : new EQ(QQ, XQ, WQ.tree, WQ.offset + FQ, zQ > 0, !!PQ)
              }
              if (WQ && wQ.push(WQ), TQ.to > gQ) break;
              TQ = qQ < QQ.length ? QQ[qQ++] : null
            }
          if (!PQ) break;
          sQ = PQ.toA, FQ = PQ.toA - PQ.toB
        }
        return wQ
      }
    }
    class CQ {
      startParse(QQ, WQ, XQ) {
        return "string" == typeof QQ && (QQ = new uQ(QQ)), XQ = XQ ? XQ.length ? XQ.map((QQ => new TQ(QQ.from, QQ.to))) : [new TQ(0, 0)] : [new TQ(0, QQ.length)], this.createParse(QQ, WQ || [], XQ)
      }
      parse(QQ, WQ, XQ) {
        let wQ = this.startParse(QQ, WQ, XQ);
        for (;;) {
          let QQ = wQ.advance();
          if (QQ) return QQ
        }
      }
    }
    class uQ {
      constructor(QQ) {
        this.string = QQ
      }
      get length() {
        return this.string.length
      }
      chunk(QQ) {
        return this.string.slice(QQ)
      }
      get lineChunks() {
        return !1
      }
      read(QQ, WQ) {
        return this.string.slice(QQ, WQ)
      }
    }
    new zQ({
      perNode: !0
    })
  },
  41575: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => rQ,
      f: () => FQ,
      g: () => JQ,
      h: () => iQ
    });
    var wQ = XQ(41568);
    let qQ = 0;
    class TQ {
      constructor(QQ, WQ, XQ, wQ) {
        this.name = QQ, this.set = WQ, this.base = XQ, this.modified = wQ, this.id = qQ++
      }
      toString() {
        let {
          name: QQ
        } = this;
        for (let WQ of this.modified) WQ.name && (QQ = `${WQ.name}(${QQ})`);
        return QQ
      }
      static define(QQ, WQ) {
        let XQ = "string" == typeof QQ ? QQ : "?";
        if (QQ instanceof TQ && (WQ = QQ), null === WQ || void 0 === WQ ? void 0 : WQ.base) throw new Error("Can not derive from a modified tag");
        let wQ = new TQ(XQ, [], null, []);
        if (wQ.set.push(wQ), WQ)
          for (let qQ of WQ.set) wQ.set.push(qQ);
        return wQ
      }
      static defineModifier(QQ) {
        let WQ = new sQ(QQ);
        return QQ => QQ.modified.indexOf(WQ) > -1 ? QQ : sQ.get(QQ.base || QQ, QQ.modified.concat(WQ).sort(((QQ, WQ) => QQ.id - WQ.id)))
      }
    }
    let zQ = 0;
    class sQ {
      constructor(QQ) {
        this.name = QQ, this.instances = [], this.id = zQ++
      }
      static get(QQ, WQ) {
        if (!WQ.length) return QQ;
        let XQ = WQ[0].instances.find((XQ => {
          return XQ.base == QQ && (wQ = WQ, qQ = XQ.modified, wQ.length == qQ.length && wQ.every(((QQ, WQ) => QQ == qQ[WQ])));
          var wQ, qQ
        }));
        if (XQ) return XQ;
        let wQ = [],
          qQ = new TQ(QQ.name, wQ, QQ, WQ);
        for (let TQ of WQ) TQ.instances.push(qQ);
        let zQ = function(QQ) {
          let WQ = [
            []
          ];
          for (let XQ = 0; XQ < QQ.length; XQ++)
            for (let wQ = 0, qQ = WQ.length; wQ < qQ; wQ++) WQ.push(WQ[wQ].concat(QQ[XQ]));
          return WQ.sort(((QQ, WQ) => WQ.length - QQ.length))
        }(WQ);
        for (let TQ of QQ.set)
          if (!TQ.modified.length)
            for (let QQ of zQ) wQ.push(sQ.get(TQ, QQ));
        return qQ
      }
    }

    function FQ(QQ) {
      let WQ = Object.create(null);
      for (let XQ in QQ) {
        let wQ = QQ[XQ];
        Array.isArray(wQ) || (wQ = [wQ]);
        for (let QQ of XQ.split(" "))
          if (QQ) {
            let XQ = [],
              qQ = 2,
              TQ = QQ;
            for (let WQ = 0;;) {
              if ("..." == TQ && WQ > 0 && WQ + 3 == QQ.length) {
                qQ = 1;
                break
              }
              let wQ = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(TQ);
              if (!wQ) throw new RangeError("Invalid path: " + QQ);
              if (XQ.push("*" == wQ[0] ? "" : '"' == wQ[0][0] ? JSON.parse(wQ[0]) : wQ[0]), WQ += wQ[0].length, WQ == QQ.length) break;
              let zQ = QQ[WQ++];
              if (WQ == QQ.length && "!" == zQ) {
                qQ = 0;
                break
              }
              if ("/" != zQ) throw new RangeError("Invalid path: " + QQ);
              TQ = QQ.slice(WQ)
            }
            let zQ = XQ.length - 1,
              sQ = XQ[zQ];
            if (!sQ) throw new RangeError("Invalid path: " + QQ);
            let FQ = new gQ(wQ, qQ, zQ > 0 ? XQ.slice(0, zQ) : null);
            WQ[sQ] = FQ.sort(WQ[sQ])
          }
      }
      return PQ.add(WQ)
    }
    const PQ = new wQ.k({
      combine(QQ, WQ) {
        let XQ, wQ, qQ;
        for (; QQ || WQ;) {
          if (!QQ || WQ && QQ.depth >= WQ.depth ? (qQ = WQ, WQ = WQ.next) : (qQ = QQ, QQ = QQ.next), XQ && XQ.mode == qQ.mode && !qQ.context && !XQ.context) continue;
          let TQ = new gQ(qQ.tags, qQ.mode, qQ.context);
          XQ ? XQ.next = TQ : wQ = TQ, XQ = TQ
        }
        return wQ
      }
    });
    class gQ {
      constructor(QQ, WQ, XQ, wQ) {
        this.tags = QQ, this.mode = WQ, this.context = XQ, this.next = wQ
      }
      get opaque() {
        return 0 == this.mode
      }
      get inherit() {
        return 1 == this.mode
      }
      sort(QQ) {
        return !QQ || QQ.depth < this.depth ? (this.next = QQ, this) : (QQ.next = this.sort(QQ.next), QQ)
      }
      get depth() {
        return this.context ? this.context.length : 0
      }
    }

    function JQ(QQ, WQ) {
      let XQ = Object.create(null);
      for (let TQ of QQ)
        if (Array.isArray(TQ.tag))
          for (let QQ of TQ.tag) XQ[QQ.id] = TQ.class;
        else XQ[TQ.tag.id] = TQ.class;
      let {
        scope: wQ,
        all: qQ = null
      } = WQ || {};
      return {
        style: QQ => {
          let WQ = qQ;
          for (let wQ of QQ)
            for (let QQ of wQ.set) {
              let wQ = XQ[QQ.id];
              if (wQ) {
                WQ = WQ ? WQ + " " + wQ : wQ;
                break
              }
            }
          return WQ
        },
        scope: wQ
      }
    }

    function rQ(QQ, WQ, XQ) {
      let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : QQ.length,
        TQ = new IQ(wQ, Array.isArray(WQ) ? WQ : [WQ], XQ);
      TQ.highlightRange(QQ.cursor(), wQ, qQ, "", TQ.highlighters), TQ.flush(qQ)
    }
    gQ.empty = new gQ([], 2, null);
    class IQ {
      constructor(QQ, WQ, XQ) {
        this.at = QQ, this.highlighters = WQ, this.span = XQ, this.class = ""
      }
      startSpan(QQ, WQ) {
        WQ != this.class && (this.flush(QQ), QQ > this.at && (this.at = QQ), this.class = WQ)
      }
      flush(QQ) {
        QQ > this.at && this.class && this.span(this.at, QQ, this.class)
      }
      highlightRange(QQ, WQ, XQ, qQ, TQ) {
        let {
          type: zQ,
          from: sQ,
          to: FQ
        } = QQ;
        if (sQ >= XQ || FQ <= WQ) return;
        zQ.isTop && (TQ = this.highlighters.filter((QQ => !QQ.scope || QQ.scope(zQ))));
        let JQ = qQ,
          rQ = function(QQ) {
            let WQ = QQ.type.prop(PQ);
            for (; WQ && WQ.context && !QQ.matchContext(WQ.context);) WQ = WQ.next;
            return WQ || null
          }(QQ) || gQ.empty,
          IQ = function(QQ, WQ) {
            let XQ = null;
            for (let wQ of QQ) {
              let QQ = wQ.style(WQ);
              QQ && (XQ = XQ ? XQ + " " + QQ : QQ)
            }
            return XQ
          }(TQ, rQ.tags);
        if (IQ && (JQ && (JQ += " "), JQ += IQ, 1 == rQ.mode && (qQ += (qQ ? " " : "") + IQ)), this.startSpan(Math.max(WQ, sQ), JQ), rQ.opaque) return;
        let jQ = QQ.tree && QQ.tree.prop(wQ.k.mounted);
        if (jQ && jQ.overlay) {
          let wQ = QQ.node.enter(jQ.overlay[0].from + sQ, 1),
            zQ = this.highlighters.filter((QQ => !QQ.scope || QQ.scope(jQ.tree.type))),
            PQ = QQ.firstChild();
          for (let gQ = 0, rQ = sQ;; gQ++) {
            let IQ = gQ < jQ.overlay.length ? jQ.overlay[gQ] : null,
              BQ = IQ ? IQ.from + sQ : FQ,
              yQ = Math.max(WQ, rQ),
              VQ = Math.min(XQ, BQ);
            if (yQ < VQ && PQ)
              for (; QQ.from < VQ && (this.highlightRange(QQ, yQ, VQ, qQ, TQ), this.startSpan(Math.min(VQ, QQ.to), JQ), !(QQ.to >= BQ) && QQ.nextSibling()););
            if (!IQ || BQ > XQ) break;
            rQ = IQ.to + sQ, rQ > WQ && (this.highlightRange(wQ.cursor(), Math.max(WQ, IQ.from + sQ), Math.min(XQ, rQ), "", zQ), this.startSpan(Math.min(XQ, rQ), JQ))
          }
          PQ && QQ.parent()
        } else if (QQ.firstChild()) {
          jQ && (qQ = "");
          do {
            if (!(QQ.to <= WQ)) {
              if (QQ.from >= XQ) break;
              this.highlightRange(QQ, WQ, XQ, qQ, TQ), this.startSpan(Math.min(XQ, QQ.to), JQ)
            }
          } while (QQ.nextSibling());
          QQ.parent()
        }
      }
    }
    const jQ = TQ.define,
      BQ = jQ(),
      yQ = jQ(),
      VQ = jQ(yQ),
      DQ = jQ(yQ),
      pQ = jQ(),
      GQ = jQ(pQ),
      UQ = jQ(pQ),
      bQ = jQ(),
      vQ = jQ(bQ),
      dQ = jQ(),
      HQ = jQ(),
      aQ = jQ(),
      lQ = jQ(aQ),
      hQ = jQ(),
      iQ = {
        comment: BQ,
        lineComment: jQ(BQ),
        blockComment: jQ(BQ),
        docComment: jQ(BQ),
        name: yQ,
        variableName: jQ(yQ),
        typeName: VQ,
        tagName: jQ(VQ),
        propertyName: DQ,
        attributeName: jQ(DQ),
        className: jQ(yQ),
        labelName: jQ(yQ),
        namespace: jQ(yQ),
        macroName: jQ(yQ),
        literal: pQ,
        string: GQ,
        docString: jQ(GQ),
        character: jQ(GQ),
        attributeValue: jQ(GQ),
        number: UQ,
        integer: jQ(UQ),
        float: jQ(UQ),
        bool: jQ(pQ),
        regexp: jQ(pQ),
        escape: jQ(pQ),
        color: jQ(pQ),
        url: jQ(pQ),
        keyword: dQ,
        self: jQ(dQ),
        null: jQ(dQ),
        atom: jQ(dQ),
        unit: jQ(dQ),
        modifier: jQ(dQ),
        operatorKeyword: jQ(dQ),
        controlKeyword: jQ(dQ),
        definitionKeyword: jQ(dQ),
        moduleKeyword: jQ(dQ),
        operator: HQ,
        derefOperator: jQ(HQ),
        arithmeticOperator: jQ(HQ),
        logicOperator: jQ(HQ),
        bitwiseOperator: jQ(HQ),
        compareOperator: jQ(HQ),
        updateOperator: jQ(HQ),
        definitionOperator: jQ(HQ),
        typeOperator: jQ(HQ),
        controlOperator: jQ(HQ),
        punctuation: aQ,
        separator: jQ(aQ),
        bracket: lQ,
        angleBracket: jQ(lQ),
        squareBracket: jQ(lQ),
        paren: jQ(lQ),
        brace: jQ(lQ),
        content: bQ,
        heading: vQ,
        heading1: jQ(vQ),
        heading2: jQ(vQ),
        heading3: jQ(vQ),
        heading4: jQ(vQ),
        heading5: jQ(vQ),
        heading6: jQ(vQ),
        contentSeparator: jQ(bQ),
        list: jQ(bQ),
        quote: jQ(bQ),
        emphasis: jQ(bQ),
        strong: jQ(bQ),
        link: jQ(bQ),
        monospace: jQ(bQ),
        strikethrough: jQ(bQ),
        inserted: jQ(),
        deleted: jQ(),
        changed: jQ(),
        invalid: jQ(),
        meta: hQ,
        documentMeta: jQ(hQ),
        annotation: jQ(hQ),
        processingInstruction: jQ(hQ),
        definition: TQ.defineModifier("definition"),
        constant: TQ.defineModifier("constant"),
        function: TQ.defineModifier("function"),
        standard: TQ.defineModifier("standard"),
        local: TQ.defineModifier("local"),
        special: TQ.defineModifier("special")
      };
    for (let cQ in iQ) {
      let QQ = iQ[cQ];
      QQ instanceof TQ && (QQ.name = cQ)
    }
    JQ([{
      tag: iQ.link,
      class: "tok-link"
    }, {
      tag: iQ.heading,
      class: "tok-heading"
    }, {
      tag: iQ.emphasis,
      class: "tok-emphasis"
    }, {
      tag: iQ.strong,
      class: "tok-strong"
    }, {
      tag: iQ.keyword,
      class: "tok-keyword"
    }, {
      tag: iQ.atom,
      class: "tok-atom"
    }, {
      tag: iQ.bool,
      class: "tok-bool"
    }, {
      tag: iQ.url,
      class: "tok-url"
    }, {
      tag: iQ.labelName,
      class: "tok-labelName"
    }, {
      tag: iQ.inserted,
      class: "tok-inserted"
    }, {
      tag: iQ.deleted,
      class: "tok-deleted"
    }, {
      tag: iQ.literal,
      class: "tok-literal"
    }, {
      tag: iQ.string,
      class: "tok-string"
    }, {
      tag: iQ.number,
      class: "tok-number"
    }, {
      tag: [iQ.regexp, iQ.escape, iQ.special(iQ.string)],
      class: "tok-string2"
    }, {
      tag: iQ.variableName,
      class: "tok-variableName"
    }, {
      tag: iQ.local(iQ.variableName),
      class: "tok-variableName tok-local"
    }, {
      tag: iQ.definition(iQ.variableName),
      class: "tok-variableName tok-definition"
    }, {
      tag: iQ.special(iQ.variableName),
      class: "tok-variableName2"
    }, {
      tag: iQ.definition(iQ.propertyName),
      class: "tok-propertyName tok-definition"
    }, {
      tag: iQ.typeName,
      class: "tok-typeName"
    }, {
      tag: iQ.namespace,
      class: "tok-namespace"
    }, {
      tag: iQ.className,
      class: "tok-className"
    }, {
      tag: iQ.macroName,
      class: "tok-macroName"
    }, {
      tag: iQ.propertyName,
      class: "tok-propertyName"
    }, {
      tag: iQ.operator,
      class: "tok-operator"
    }, {
      tag: iQ.comment,
      class: "tok-comment"
    }, {
      tag: iQ.meta,
      class: "tok-meta"
    }, {
      tag: iQ.invalid,
      class: "tok-invalid"
    }, {
      tag: iQ.punctuation,
      class: "tok-punctuation"
    }])
  },
  41586: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => sQ.k,
      g: () => zQ.t,
      h: () => zQ.G,
      l: () => zQ.I,
      n: () => sQ.q,
      p: () => vX,
      q: () => sQ._,
      t: () => sQ.qb
    });
    var wQ = XQ(1439),
      qQ = XQ(1430),
      TQ = XQ(61),
      zQ = XQ(41550),
      sQ = XQ(41555),
      FQ = XQ(41566),
      PQ = XQ(41568);

    function gQ(QQ, WQ) {
      return XQ => {
        let {
          state: wQ,
          dispatch: qQ
        } = XQ;
        if (wQ.readOnly) return !1;
        let TQ = QQ(WQ, wQ);
        return !!TQ && (qQ(wQ.update(TQ)), !0)
      }
    }
    const JQ = gQ(VQ, 0),
      rQ = gQ(yQ, 0),
      IQ = gQ(((QQ, WQ) => yQ(QQ, WQ, function(QQ) {
        let WQ = [];
        for (let XQ of QQ.selection.Qy) {
          let wQ = QQ.doc.lineAt(XQ.from),
            qQ = XQ.to <= wQ.to ? wQ : QQ.doc.lineAt(XQ.to);
          qQ.from > wQ.from && qQ.from == XQ.to && (qQ = XQ.to == wQ.to + 1 ? wQ : QQ.doc.lineAt(XQ.to - 1));
          let TQ = WQ.length - 1;
          TQ >= 0 && WQ[TQ].to > wQ.from ? WQ[TQ].to = qQ.to : WQ.push({
            from: wQ.from + /^\s*/.exec(wQ.text)[0].length,
            to: qQ.to
          })
        }
        return WQ
      }(WQ))), 0);

    function jQ(QQ, WQ) {
      let XQ = QQ.languageDataAt("commentTokens", WQ, 1);
      return XQ.length ? XQ[0] : {}
    }
    const BQ = 50;

    function yQ(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : WQ.selection.Qy,
        wQ = XQ.map((QQ => jQ(WQ, QQ.from).block));
      if (!wQ.every((QQ => QQ))) return null;
      let qQ = XQ.map(((QQ, XQ) => function(QQ, WQ, XQ, wQ) {
        let qQ, TQ, {
            open: zQ,
            close: sQ
          } = WQ,
          FQ = QQ.sliceDoc(XQ - BQ, XQ),
          PQ = QQ.sliceDoc(wQ, wQ + BQ),
          gQ = /\s*$/.exec(FQ)[0].length,
          JQ = /^\s*/.exec(PQ)[0].length,
          rQ = FQ.length - gQ;
        if (FQ.slice(rQ - zQ.length, rQ) == zQ && PQ.slice(JQ, JQ + sQ.length) == sQ) return {
          open: {
            pos: XQ - gQ,
            margin: gQ && 1
          },
          close: {
            pos: wQ + JQ,
            margin: JQ && 1
          }
        };
        wQ - XQ <= 2 * BQ ? qQ = TQ = QQ.sliceDoc(XQ, wQ) : (qQ = QQ.sliceDoc(XQ, XQ + BQ), TQ = QQ.sliceDoc(wQ - BQ, wQ));
        let IQ = /^\s*/.exec(qQ)[0].length,
          jQ = /\s*$/.exec(TQ)[0].length,
          yQ = TQ.length - jQ - sQ.length;
        return qQ.slice(IQ, IQ + zQ.length) == zQ && TQ.slice(yQ, yQ + sQ.length) == sQ ? {
          open: {
            pos: XQ + IQ + zQ.length,
            margin: /\s/.test(qQ.charAt(IQ + zQ.length)) ? 1 : 0
          },
          close: {
            pos: wQ - jQ - sQ.length,
            margin: /\s/.test(TQ.charAt(yQ - 1)) ? 1 : 0
          }
        } : null
      }(WQ, wQ[XQ], QQ.from, QQ.to)));
      if (2 != QQ && !qQ.every((QQ => QQ))) return {
        changes: WQ.changes(XQ.map(((QQ, WQ) => qQ[WQ] ? [] : [{
          from: QQ.from,
          insert: wQ[WQ].open + " "
        }, {
          from: QQ.to,
          insert: " " + wQ[WQ].close
        }])))
      };
      if (1 != QQ && qQ.some((QQ => QQ))) {
        let QQ = [];
        for (let WQ, XQ = 0; XQ < qQ.length; XQ++)
          if (WQ = qQ[XQ]) {
            let qQ = wQ[XQ],
              {
                open: TQ,
                close: zQ
              } = WQ;
            QQ.push({
              from: TQ.pos - qQ.open.length,
              to: TQ.pos + TQ.margin
            }, {
              from: zQ.pos - zQ.margin,
              to: zQ.pos + qQ.close.length
            })
          } return {
          changes: QQ
        }
      }
      return null
    }

    function VQ(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : WQ.selection.Qy,
        wQ = [],
        qQ = -1;
      QQ: for (let {
          from: TQ,
          to: zQ
        }
        of XQ) {
        let QQ, XQ = wQ.length,
          sQ = 1e9;
        for (let FQ = TQ; FQ <= zQ;) {
          let XQ = WQ.doc.lineAt(FQ);
          if (void 0 == QQ && (QQ = jQ(WQ, XQ.from).line, !QQ)) continue QQ;
          if (XQ.from > qQ && (TQ == zQ || zQ > XQ.from)) {
            qQ = XQ.from;
            let WQ = /^\s*/.exec(XQ.text)[0].length,
              TQ = WQ == XQ.length,
              zQ = XQ.text.slice(WQ, WQ + QQ.length) == QQ ? WQ : -1;
            WQ < XQ.text.length && WQ < sQ && (sQ = WQ), wQ.push({
              line: XQ,
              comment: zQ,
              token: QQ,
              indent: WQ,
              empty: TQ,
              single: !1
            })
          }
          FQ = XQ.to + 1
        }
        if (sQ < 1e9)
          for (let WQ = XQ; WQ < wQ.length; WQ++) wQ[WQ].indent < wQ[WQ].line.text.length && (wQ[WQ].indent = sQ);
        wQ.length == XQ + 1 && (wQ[XQ].single = !0)
      }
      if (2 != QQ && wQ.some((QQ => QQ.comment < 0 && (!QQ.empty || QQ.single)))) {
        let QQ = [];
        for (let {
            line: WQ,
            token: qQ,
            indent: TQ,
            empty: zQ,
            single: sQ
          }
          of wQ) !sQ && zQ || QQ.push({
          from: WQ.from + TQ,
          insert: qQ + " "
        });
        let XQ = WQ.changes(QQ);
        return {
          changes: XQ,
          selection: WQ.selection.map(XQ, 1)
        }
      }
      if (1 != QQ && wQ.some((QQ => QQ.comment >= 0))) {
        let QQ = [];
        for (let {
            line: WQ,
            comment: XQ,
            token: qQ
          }
          of wQ)
          if (XQ >= 0) {
            let wQ = WQ.from + XQ,
              TQ = wQ + qQ.length;
            " " == WQ.text[TQ - WQ.from] && TQ++, QQ.push({
              from: wQ,
              to: TQ
            })
          } return {
          changes: QQ
        }
      }
      return null
    }
    const DQ = zQ.b.define(),
      pQ = zQ.b.define(),
      GQ = zQ.o.define(),
      UQ = zQ.o.define({
        combine: QQ => (0, zQ.U)(QQ, {
          minDepth: 100,
          newGroupDelay: 500,
          joinToEvent: (QQ, WQ) => WQ
        }, {
          minDepth: Math.max,
          newGroupDelay: Math.min,
          joinToEvent: (QQ, WQ) => (XQ, wQ) => QQ(XQ, wQ) || WQ(XQ, wQ)
        })
      }),
      bQ = zQ.I.define({
        create: () => fQ.empty,
        update(QQ, WQ) {
          let XQ = WQ.state.facet(UQ),
            wQ = WQ.annotation(DQ);
          if (wQ) {
            let qQ = hQ.fromTransaction(WQ, wQ.selection),
              TQ = wQ.side,
              zQ = 0 == TQ ? QQ.undone : QQ.done;
            return zQ = qQ ? iQ(zQ, zQ.length, XQ.minDepth, qQ) : EQ(zQ, WQ.startState.selection), new fQ(0 == TQ ? wQ.rest : zQ, 0 == TQ ? zQ : wQ.rest)
          }
          let qQ = WQ.annotation(pQ);
          if ("full" != qQ && "before" != qQ || (QQ = QQ.isolate()), !1 === WQ.annotation(zQ.O.addToHistory)) return WQ.changes.empty ? QQ : QQ.addMapping(WQ.changes.desc);
          let TQ = hQ.fromTransaction(WQ),
            sQ = WQ.annotation(zQ.O.time),
            FQ = WQ.annotation(zQ.O.userEvent);
          return TQ ? QQ = QQ.addChanges(TQ, sQ, FQ, XQ, WQ) : WQ.selection && (QQ = QQ.addSelection(WQ.startState.selection, sQ, FQ, XQ.newGroupDelay)), "full" != qQ && "after" != qQ || (QQ = QQ.isolate()), QQ
        },
        toJSON: QQ => ({
          done: QQ.done.map((QQ => QQ.toJSON())),
          undone: QQ.undone.map((QQ => QQ.toJSON()))
        }),
        fromJSON: QQ => new fQ(QQ.done.map(hQ.fromJSON), QQ.undone.map(hQ.fromJSON))
      });

    function vQ(QQ, WQ) {
      return function(XQ) {
        let {
          state: wQ,
          dispatch: qQ
        } = XQ;
        if (!WQ && wQ.readOnly) return !1;
        let TQ = wQ.field(bQ, !1);
        if (!TQ) return !1;
        let zQ = TQ.pop(QQ, wQ, WQ);
        return !!zQ && (qQ(zQ), !0)
      }
    }
    const dQ = vQ(0, !1),
      HQ = vQ(1, !1),
      aQ = vQ(0, !0),
      lQ = vQ(1, !0);
    class hQ {
      constructor(QQ, WQ, XQ, wQ, qQ) {
        this.changes = QQ, this.effects = WQ, this.mapped = XQ, this.startSelection = wQ, this.selectionsAfter = qQ
      }
      setSelAfter(QQ) {
        return new hQ(this.changes, this.effects, this.mapped, this.startSelection, QQ)
      }
      toJSON() {
        var QQ, WQ, XQ;
        return {
          changes: null === (QQ = this.changes) || void 0 === QQ ? void 0 : QQ.toJSON(),
          mapped: null === (WQ = this.mapped) || void 0 === WQ ? void 0 : WQ.toJSON(),
          startSelection: null === (XQ = this.startSelection) || void 0 === XQ ? void 0 : XQ.toJSON(),
          selectionsAfter: this.selectionsAfter.map((QQ => QQ.toJSON()))
        }
      }
      static fromJSON(QQ) {
        return new hQ(QQ.changes && zQ.ChangeSet.fromJSON(QQ.changes), [], QQ.mapped && zQ.d.fromJSON(QQ.mapped), QQ.startSelection && zQ.k.fromJSON(QQ.startSelection), QQ.selectionsAfter.map(zQ.k.fromJSON))
      }
      static fromTransaction(QQ, WQ) {
        let XQ = AQ;
        for (let wQ of QQ.startState.facet(GQ)) {
          let WQ = wQ(QQ);
          WQ.length && (XQ = XQ.concat(WQ))
        }
        return !XQ.length && QQ.changes.empty ? null : new hQ(QQ.changes.invert(QQ.startState.doc), XQ, void 0, WQ || QQ.startState.selection, AQ)
      }
      static selection(QQ) {
        return new hQ(void 0, AQ, void 0, void 0, QQ)
      }
    }

    function iQ(QQ, WQ, XQ, wQ) {
      let qQ = WQ + 1 > XQ + 20 ? WQ - XQ - 1 : 0,
        TQ = QQ.slice(qQ, WQ);
      return TQ.push(wQ), TQ
    }

    function cQ(QQ, WQ) {
      return QQ.length ? WQ.length ? QQ.concat(WQ) : QQ : WQ
    }
    const AQ = [],
      RQ = 200;

    function EQ(QQ, WQ) {
      if (QQ.length) {
        let XQ = QQ[QQ.length - 1],
          wQ = XQ.selectionsAfter.slice(Math.max(0, XQ.selectionsAfter.length - RQ));
        return wQ.length && wQ[wQ.length - 1].eq(WQ) ? QQ : (wQ.push(WQ), iQ(QQ, QQ.length - 1, 1e9, XQ.setSelAfter(wQ)))
      }
      return [hQ.selection([WQ])]
    }

    function CQ(QQ) {
      let WQ = QQ[QQ.length - 1],
        XQ = QQ.slice();
      return XQ[QQ.length - 1] = WQ.setSelAfter(WQ.selectionsAfter.slice(0, WQ.selectionsAfter.length - 1)), XQ
    }

    function uQ(QQ, WQ) {
      if (!QQ.length) return QQ;
      let XQ = QQ.length,
        wQ = AQ;
      for (; XQ;) {
        let qQ = LQ(QQ[XQ - 1], WQ, wQ);
        if (qQ.changes && !qQ.changes.empty || qQ.effects.length) {
          let WQ = QQ.slice(0, XQ);
          return WQ[XQ - 1] = qQ, WQ
        }
        WQ = qQ.mapped, XQ--, wQ = qQ.selectionsAfter
      }
      return wQ.length ? [hQ.selection(wQ)] : AQ
    }

    function LQ(QQ, WQ, XQ) {
      let wQ = cQ(QQ.selectionsAfter.length ? QQ.selectionsAfter.map((QQ => QQ.map(WQ))) : AQ, XQ);
      if (!QQ.changes) return hQ.selection(wQ);
      let qQ = QQ.changes.map(WQ),
        TQ = WQ.mapDesc(QQ.changes, !0),
        sQ = QQ.mapped ? QQ.mapped.composeDesc(TQ) : TQ;
      return new hQ(qQ, zQ.G.mapEffects(QQ.effects, WQ), sQ, QQ.startSelection.map(TQ), wQ)
    }
    const kQ = /^(input\.type|delete)($|\.)/;
    class fQ {
      constructor(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        this.done = QQ, this.undone = WQ, this.prevTime = XQ, this.prevUserEvent = wQ
      }
      isolate() {
        return this.prevTime ? new fQ(this.done, this.undone) : this
      }
      addChanges(QQ, WQ, XQ, wQ, qQ) {
        let TQ = this.done,
          sQ = TQ[TQ.length - 1];
        return TQ = sQ && sQ.changes && !sQ.changes.empty && QQ.changes && (!XQ || kQ.test(XQ)) && (!sQ.selectionsAfter.length && WQ - this.prevTime < wQ.newGroupDelay && wQ.joinToEvent(qQ, function(QQ, WQ) {
          let XQ = [],
            wQ = !1;
          return QQ.iterChangedRanges(((QQ, WQ) => XQ.push(QQ, WQ))), WQ.iterChangedRanges(((QQ, WQ, qQ, TQ) => {
            for (let zQ = 0; zQ < XQ.length;) {
              let QQ = XQ[zQ++],
                WQ = XQ[zQ++];
              TQ >= QQ && qQ <= WQ && (wQ = !0)
            }
          })), wQ
        }(sQ.changes, QQ.changes)) || "input.type.compose" == XQ) ? iQ(TQ, TQ.length - 1, wQ.minDepth, new hQ(QQ.changes.compose(sQ.changes), cQ(zQ.G.mapEffects(QQ.effects, sQ.changes), sQ.effects), sQ.mapped, sQ.startSelection, AQ)) : iQ(TQ, TQ.length, wQ.minDepth, QQ), new fQ(TQ, AQ, WQ, XQ)
      }
      addSelection(QQ, WQ, XQ, wQ) {
        let qQ = this.done.length ? this.done[this.done.length - 1].selectionsAfter : AQ;
        return qQ.length > 0 && WQ - this.prevTime < wQ && XQ == this.prevUserEvent && XQ && /^select($|\.)/.test(XQ) && (TQ = qQ[qQ.length - 1], zQ = QQ, TQ.Qy.length == zQ.Qy.length && 0 === TQ.Qy.filter(((QQ, WQ) => QQ.empty != zQ.Qy[WQ].empty)).length) ? this : new fQ(EQ(this.done, QQ), this.undone, WQ, XQ);
        var TQ, zQ
      }
      addMapping(QQ) {
        return new fQ(uQ(this.done, QQ), uQ(this.undone, QQ), this.prevTime, this.prevUserEvent)
      }
      pop(QQ, WQ, XQ) {
        let wQ = 0 == QQ ? this.done : this.undone;
        if (0 == wQ.length) return null;
        let qQ = wQ[wQ.length - 1],
          TQ = qQ.selectionsAfter[0] || (qQ.startSelection ? qQ.startSelection.map(qQ.changes.invertedDesc, 1) : WQ.selection);
        if (XQ && qQ.selectionsAfter.length) return WQ.update({
          selection: qQ.selectionsAfter[qQ.selectionsAfter.length - 1],
          annotations: DQ.of({
            side: QQ,
            rest: CQ(wQ),
            selection: TQ
          }),
          userEvent: 0 == QQ ? "select.undo" : "select.redo",
          scrollIntoView: !0
        });
        if (qQ.changes) {
          let XQ = 1 == wQ.length ? AQ : wQ.slice(0, wQ.length - 1);
          return qQ.mapped && (XQ = uQ(XQ, qQ.mapped)), WQ.update({
            changes: qQ.changes,
            selection: qQ.startSelection,
            effects: qQ.effects,
            annotations: DQ.of({
              side: QQ,
              rest: XQ,
              selection: TQ
            }),
            filter: !1,
            userEvent: 0 == QQ ? "undo" : "redo",
            scrollIntoView: !0
          })
        }
        return null
      }
    }
    fQ.empty = new fQ(AQ, AQ);
    const SQ = [{
      key: "Mod-z",
      run: dQ,
      preventDefault: !0
    }, {
      key: "Mod-y",
      mac: "Mod-Shift-z",
      run: HQ,
      preventDefault: !0
    }, {
      linux: "Ctrl-Shift-z",
      run: HQ,
      preventDefault: !0
    }, {
      key: "Mod-u",
      run: aQ,
      preventDefault: !0
    }, {
      key: "Alt-u",
      mac: "Mod-Shift-u",
      run: lQ,
      preventDefault: !0
    }];

    function tQ(QQ, WQ) {
      return zQ.k.create(QQ.Qy.map(WQ), QQ.mainIndex)
    }

    function oQ(QQ, WQ) {
      return QQ.update({
        selection: WQ,
        scrollIntoView: !0,
        userEvent: "select"
      })
    }

    function eQ(QQ, WQ) {
      let {
        state: XQ,
        dispatch: wQ
      } = QQ, qQ = tQ(XQ.selection, WQ);
      return !qQ.eq(XQ.selection, !0) && (wQ(oQ(XQ, qQ)), !0)
    }

    function nQ(QQ, WQ) {
      return zQ.k.cursor(WQ ? QQ.to : QQ.from)
    }

    function xQ(QQ, WQ) {
      return eQ(QQ, (XQ => XQ.empty ? QQ.moveByChar(XQ, WQ) : nQ(XQ, WQ)))
    }

    function YQ(QQ) {
      return QQ.textDirectionAt(QQ.state.selection.main.head) == sQ.i.LTR
    }
    const NQ = QQ => xQ(QQ, !YQ(QQ)),
      ZQ = QQ => xQ(QQ, YQ(QQ));

    function OQ(QQ, WQ) {
      return eQ(QQ, (XQ => XQ.empty ? QQ.moveByGroup(XQ, WQ) : nQ(XQ, WQ)))
    }
    "undefined" != typeof Intl && Intl.Segmenter;

    function KQ(QQ, WQ, XQ) {
      if (WQ.type.prop(XQ)) return !0;
      let wQ = WQ.to - WQ.from;
      return wQ && (wQ > 2 || /[^\s,.;:]/.test(QQ.sliceDoc(WQ.from, WQ.to))) || WQ.firstChild
    }

    function mQ(QQ, WQ, XQ) {
      let wQ, qQ, TQ = (0, FQ.fb)(QQ).resolveInner(WQ.head),
        sQ = XQ ? PQ.k.closedBy : PQ.k.openedBy;
      for (let zQ = WQ.head;;) {
        let WQ = XQ ? TQ.childAfter(zQ) : TQ.childBefore(zQ);
        if (!WQ) break;
        KQ(QQ, WQ, sQ) ? TQ = WQ : zQ = XQ ? WQ.to : WQ.from
      }
      return qQ = TQ.type.prop(sQ) && (wQ = XQ ? (0, FQ.Y)(QQ, TQ.from, 1) : (0, FQ.Y)(QQ, TQ.to, -1)) && wQ.matched ? XQ ? wQ.end.to : wQ.end.from : XQ ? TQ.to : TQ.from, zQ.k.cursor(qQ, XQ ? -1 : 1)
    }

    function MQ(QQ, WQ) {
      return eQ(QQ, (XQ => {
        if (!XQ.empty) return nQ(XQ, WQ);
        let wQ = QQ.moveVertically(XQ, WQ);
        return wQ.head != XQ.head ? wQ : QQ.moveToLineBoundary(XQ, WQ)
      }))
    }
    const QW = QQ => MQ(QQ, !1),
      WW = QQ => MQ(QQ, !0);

    function XW(QQ) {
      let WQ, XQ = QQ.scrollDOM.clientHeight < QQ.scrollDOM.scrollHeight - 2,
        wQ = 0,
        qQ = 0;
      if (XQ) {
        for (let WQ of QQ.state.facet(sQ.k.scrollMargins)) {
          let XQ = WQ(QQ);
          (null === XQ || void 0 === XQ ? void 0 : XQ.top) && (wQ = Math.max(null === XQ || void 0 === XQ ? void 0 : XQ.top, wQ)), (null === XQ || void 0 === XQ ? void 0 : XQ.bottom) && (qQ = Math.max(null === XQ || void 0 === XQ ? void 0 : XQ.bottom, qQ))
        }
        WQ = QQ.scrollDOM.clientHeight - wQ - qQ
      } else WQ = (QQ.dom.ownerDocument.defaultView || window).innerHeight;
      return {
        marginTop: wQ,
        marginBottom: qQ,
        selfScroll: XQ,
        height: Math.max(QQ.defaultLineHeight, WQ - 5)
      }
    }

    function wW(QQ, WQ) {
      let XQ, wQ = XW(QQ),
        {
          state: qQ
        } = QQ,
        TQ = tQ(qQ.selection, (XQ => XQ.empty ? QQ.moveVertically(XQ, WQ, wQ.height) : nQ(XQ, WQ)));
      if (TQ.eq(qQ.selection)) return !1;
      if (wQ.selfScroll) {
        let WQ = QQ.coordsAtPos(qQ.selection.main.head),
          zQ = QQ.scrollDOM.getBoundingClientRect(),
          FQ = zQ.top + wQ.marginTop,
          PQ = zQ.bottom - wQ.marginBottom;
        WQ && WQ.top > FQ && WQ.bottom < PQ && (XQ = sQ.k.scrollIntoView(TQ.main.head, {
          y: "start",
          yMargin: WQ.top - FQ
        }))
      }
      return QQ.dispatch(oQ(qQ, TQ), {
        effects: XQ
      }), !0
    }
    const qW = QQ => wW(QQ, !1),
      TW = QQ => wW(QQ, !0);

    function zW(QQ, WQ, XQ) {
      let wQ = QQ.lineBlockAt(WQ.head),
        qQ = QQ.moveToLineBoundary(WQ, XQ);
      if (qQ.head == WQ.head && qQ.head != (XQ ? wQ.to : wQ.from) && (qQ = QQ.moveToLineBoundary(WQ, XQ, !1)), !XQ && qQ.head == wQ.from && wQ.length) {
        let XQ = /^\s*/.exec(QQ.state.sliceDoc(wQ.from, Math.min(wQ.from + 100, wQ.to)))[0].length;
        XQ && WQ.head != wQ.from + XQ && (qQ = zQ.k.cursor(wQ.from + XQ))
      }
      return qQ
    }

    function sW(QQ, WQ, XQ) {
      let wQ = !1,
        qQ = tQ(QQ.selection, (WQ => {
          let qQ = (0, FQ.Y)(QQ, WQ.head, -1) || (0, FQ.Y)(QQ, WQ.head, 1) || WQ.head > 0 && (0, FQ.Y)(QQ, WQ.head - 1, 1) || WQ.head < QQ.doc.length && (0, FQ.Y)(QQ, WQ.head + 1, -1);
          if (!qQ || !qQ.end) return WQ;
          wQ = !0;
          let TQ = qQ.start.from == WQ.head ? qQ.end.to : qQ.end.from;
          return XQ ? zQ.k.range(WQ.anchor, TQ) : zQ.k.cursor(TQ)
        }));
      return !!wQ && (WQ(oQ(QQ, qQ)), !0)
    }

    function FW(QQ, WQ) {
      let XQ = tQ(QQ.state.selection, (QQ => {
        let XQ = WQ(QQ);
        return zQ.k.range(QQ.anchor, XQ.head, XQ.goalColumn, XQ.bidiLevel || void 0, XQ.assoc)
      }));
      return !XQ.eq(QQ.state.selection) && (QQ.dispatch(oQ(QQ.state, XQ)), !0)
    }

    function PW(QQ, WQ) {
      return FW(QQ, (XQ => QQ.moveByChar(XQ, WQ)))
    }
    const gW = QQ => PW(QQ, !YQ(QQ)),
      JW = QQ => PW(QQ, YQ(QQ));

    function rW(QQ, WQ) {
      return FW(QQ, (XQ => QQ.moveByGroup(XQ, WQ)))
    }

    function IW(QQ, WQ) {
      return FW(QQ, (XQ => QQ.moveVertically(XQ, WQ)))
    }
    const jW = QQ => IW(QQ, !1),
      BW = QQ => IW(QQ, !0);

    function yW(QQ, WQ) {
      return FW(QQ, (XQ => QQ.moveVertically(XQ, WQ, XW(QQ).height)))
    }
    const VW = QQ => yW(QQ, !1),
      DW = QQ => yW(QQ, !0),
      pW = QQ => {
        let {
          state: WQ,
          dispatch: XQ
        } = QQ;
        return XQ(oQ(WQ, {
          anchor: 0
        })), !0
      },
      GW = QQ => {
        let {
          state: WQ,
          dispatch: XQ
        } = QQ;
        return XQ(oQ(WQ, {
          anchor: WQ.doc.length
        })), !0
      },
      UW = QQ => {
        let {
          state: WQ,
          dispatch: XQ
        } = QQ;
        return XQ(oQ(WQ, {
          anchor: WQ.selection.main.anchor,
          head: 0
        })), !0
      },
      bW = QQ => {
        let {
          state: WQ,
          dispatch: XQ
        } = QQ;
        return XQ(oQ(WQ, {
          anchor: WQ.selection.main.anchor,
          head: WQ.doc.length
        })), !0
      };

    function vW(QQ, WQ) {
      let {
        state: XQ
      } = QQ, wQ = XQ.selection, qQ = XQ.selection.Qy.slice();
      for (let TQ of XQ.selection.Qy) {
        let wQ = XQ.doc.lineAt(TQ.head);
        if (WQ ? wQ.to < QQ.state.doc.length : wQ.from > 0)
          for (let XQ = TQ;;) {
            let TQ = QQ.moveVertically(XQ, WQ);
            if (TQ.head < wQ.from || TQ.head > wQ.to) {
              qQ.some((QQ => QQ.head == TQ.head)) || qQ.push(TQ);
              break
            }
            if (TQ.head == XQ.head) break;
            XQ = TQ
          }
      }
      return qQ.length != wQ.Qy.length && (QQ.dispatch(oQ(XQ, zQ.k.create(qQ, qQ.length - 1))), !0)
    }

    function dW(QQ, WQ) {
      if (QQ.state.readOnly) return !1;
      let XQ = "delete.selection",
        {
          state: wQ
        } = QQ,
        qQ = wQ.changeByRange((wQ => {
          let {
            from: qQ,
            to: TQ
          } = wQ;
          if (qQ == TQ) {
            let zQ = WQ(wQ);
            zQ < qQ ? (XQ = "delete.backward", zQ = HW(QQ, zQ, !1)) : zQ > qQ && (XQ = "delete.forward", zQ = HW(QQ, zQ, !0)), qQ = Math.min(qQ, zQ), TQ = Math.max(TQ, zQ)
          } else qQ = HW(QQ, qQ, !1), TQ = HW(QQ, TQ, !0);
          return qQ == TQ ? {
            range: wQ
          } : {
            changes: {
              from: qQ,
              to: TQ
            },
            range: zQ.k.cursor(qQ, qQ < wQ.head ? -1 : 1)
          }
        }));
      return !qQ.changes.empty && (QQ.dispatch(wQ.update(qQ, {
        scrollIntoView: !0,
        userEvent: XQ,
        effects: "delete.selection" == XQ ? sQ.k.announce.of(wQ.phrase("Selection deleted")) : void 0
      })), !0)
    }

    function HW(QQ, WQ, XQ) {
      if (QQ instanceof sQ.k)
        for (let wQ of QQ.state.facet(sQ.k.atomicRanges).map((WQ => WQ(QQ)))) wQ.between(WQ, WQ, ((QQ, wQ) => {
          QQ < WQ && wQ > WQ && (WQ = XQ ? wQ : QQ)
        }));
      return WQ
    }
    const aW = (QQ, WQ, XQ) => dW(QQ, (wQ => {
        let qQ, TQ, sQ = wQ.from,
          {
            state: PQ
          } = QQ,
          gQ = PQ.doc.lineAt(sQ);
        if (XQ && !WQ && sQ > gQ.from && sQ < gQ.from + 200 && !/[^ \t]/.test(qQ = gQ.text.slice(0, sQ - gQ.from))) {
          if ("\t" == qQ[qQ.length - 1]) return sQ - 1;
          let QQ = (0, zQ.V)(qQ, PQ.tabSize) % (0, FQ.K)(PQ) || (0, FQ.K)(PQ);
          for (let WQ = 0; WQ < QQ && " " == qQ[qQ.length - 1 - WQ]; WQ++) sQ--;
          TQ = sQ
        } else TQ = (0, zQ.W)(gQ.text, sQ - gQ.from, WQ, WQ) + gQ.from, TQ == sQ && gQ.number != (WQ ? PQ.doc.lines : 1) ? TQ += WQ ? 1 : -1 : !WQ && /[\ufe00-\ufe0f]/.test(gQ.text.slice(TQ - gQ.from, sQ - gQ.from)) && (TQ = (0, zQ.W)(gQ.text, TQ - gQ.from, !1, !1) + gQ.from);
        return TQ
      })),
      lW = QQ => aW(QQ, !1, !0),
      hW = QQ => aW(QQ, !0, !1),
      iW = (QQ, WQ) => dW(QQ, (XQ => {
        let wQ = XQ.head,
          {
            state: qQ
          } = QQ,
          TQ = qQ.doc.lineAt(wQ),
          sQ = qQ.charCategorizer(wQ);
        for (let QQ = null;;) {
          if (wQ == (WQ ? TQ.to : TQ.from)) {
            wQ == XQ.head && TQ.number != (WQ ? qQ.doc.lines : 1) && (wQ += WQ ? 1 : -1);
            break
          }
          let FQ = (0, zQ.W)(TQ.text, wQ - TQ.from, WQ) + TQ.from,
            PQ = TQ.text.slice(Math.min(wQ, FQ) - TQ.from, Math.max(wQ, FQ) - TQ.from),
            gQ = sQ(PQ);
          if (null != QQ && gQ != QQ) break;
          " " == PQ && wQ == XQ.head || (QQ = gQ), wQ = FQ
        }
        return wQ
      })),
      cW = QQ => iW(QQ, !1);

    function AW(QQ) {
      let WQ = [],
        XQ = -1;
      for (let wQ of QQ.selection.Qy) {
        let qQ = QQ.doc.lineAt(wQ.from),
          TQ = QQ.doc.lineAt(wQ.to);
        if (wQ.empty || wQ.to != TQ.from || (TQ = QQ.doc.lineAt(wQ.to - 1)), XQ >= qQ.number) {
          let QQ = WQ[WQ.length - 1];
          QQ.to = TQ.to, QQ.Qy.push(wQ)
        } else WQ.push({
          from: qQ.from,
          to: TQ.to,
          Qy: [wQ]
        });
        XQ = TQ.number + 1
      }
      return WQ
    }

    function RW(QQ, WQ, XQ) {
      if (QQ.readOnly) return !1;
      let wQ = [],
        qQ = [];
      for (let TQ of AW(QQ)) {
        if (XQ ? TQ.to == QQ.doc.length : 0 == TQ.from) continue;
        let WQ = QQ.doc.lineAt(XQ ? TQ.to + 1 : TQ.from - 1),
          sQ = WQ.length + 1;
        if (XQ) {
          wQ.push({
            from: TQ.to,
            to: WQ.to
          }, {
            from: TQ.from,
            insert: WQ.text + QQ.lineBreak
          });
          for (let WQ of TQ.Qy) qQ.push(zQ.k.range(Math.min(QQ.doc.length, WQ.anchor + sQ), Math.min(QQ.doc.length, WQ.head + sQ)))
        } else {
          wQ.push({
            from: WQ.from,
            to: TQ.from
          }, {
            from: TQ.to,
            insert: QQ.lineBreak + WQ.text
          });
          for (let QQ of TQ.Qy) qQ.push(zQ.k.range(QQ.anchor - sQ, QQ.head - sQ))
        }
      }
      return !!wQ.length && (WQ(QQ.update({
        changes: wQ,
        scrollIntoView: !0,
        selection: zQ.k.create(qQ, QQ.selection.mainIndex),
        userEvent: "move.line"
      })), !0)
    }

    function EW(QQ, WQ, XQ) {
      if (QQ.readOnly) return !1;
      let wQ = [];
      for (let TQ of AW(QQ)) XQ ? wQ.push({
        from: TQ.from,
        insert: QQ.doc.slice(TQ.from, TQ.to) + QQ.lineBreak
      }) : wQ.push({
        from: TQ.to,
        insert: QQ.lineBreak + QQ.doc.slice(TQ.from, TQ.to)
      });
      let qQ = QQ.changes(wQ);
      return WQ(QQ.update({
        changes: qQ,
        selection: QQ.selection.map(qQ, XQ ? 1 : -1),
        scrollIntoView: !0,
        userEvent: "input.copyline"
      })), !0
    }
    const CW = uW(!1);

    function uW(QQ) {
      return WQ => {
        let {
          state: XQ,
          dispatch: wQ
        } = WQ;
        if (XQ.readOnly) return !1;
        let qQ = XQ.changeByRange((WQ => {
          let {
            from: wQ,
            to: qQ
          } = WQ, TQ = XQ.doc.lineAt(wQ), sQ = !QQ && wQ == qQ && function(QQ, WQ) {
            if (/\(\)|\[\]|\{\}/.test(QQ.sliceDoc(WQ - 1, WQ + 1))) return {
              from: WQ,
              to: WQ
            };
            let XQ, wQ = (0, FQ.fb)(QQ).resolveInner(WQ),
              qQ = wQ.childBefore(WQ),
              TQ = wQ.childAfter(WQ);
            return qQ && TQ && qQ.to <= WQ && TQ.from >= WQ && (XQ = qQ.type.prop(PQ.k.closedBy)) && XQ.indexOf(TQ.name) > -1 && QQ.doc.lineAt(qQ.to).from == QQ.doc.lineAt(TQ.from).from && !/\S/.test(QQ.sliceDoc(qQ.to, TQ.from)) ? {
              from: qQ.to,
              to: TQ.from
            } : null
          }(XQ, wQ);
          QQ && (wQ = qQ = (qQ <= TQ.to ? TQ : XQ.doc.lineAt(qQ)).to);
          let gQ = new FQ.d(XQ, {
              simulateBreak: wQ,
              simulateDoubleBreak: !!sQ
            }),
            JQ = (0, FQ.M)(gQ, wQ);
          for (null == JQ && (JQ = (0, zQ.V)(/^\s*/.exec(XQ.doc.lineAt(wQ).text)[0], XQ.tabSize)); qQ < TQ.to && /\s/.test(TQ.text[qQ - TQ.from]);) qQ++;
          sQ ? ({
            from: wQ,
            to: qQ
          } = sQ) : wQ > TQ.from && wQ < TQ.from + 100 && !/\S/.test(TQ.text.slice(0, wQ)) && (wQ = TQ.from);
          let rQ = ["", (0, FQ.S)(XQ, JQ)];
          return sQ && rQ.push((0, FQ.S)(XQ, gQ.lineIndent(TQ.from, -1))), {
            changes: {
              from: wQ,
              to: qQ,
              insert: zQ.M.of(rQ)
            },
            range: zQ.k.cursor(wQ + 1 + rQ[1].length)
          }
        }));
        return wQ(XQ.update(qQ, {
          scrollIntoView: !0,
          userEvent: "input"
        })), !0
      }
    }

    function LW(QQ, WQ) {
      let XQ = -1;
      return QQ.changeByRange((wQ => {
        let qQ = [];
        for (let zQ = wQ.from; zQ <= wQ.to;) {
          let TQ = QQ.doc.lineAt(zQ);
          TQ.number > XQ && (wQ.empty || wQ.to > TQ.from) && (WQ(TQ, qQ, wQ), XQ = TQ.number), zQ = TQ.to + 1
        }
        let TQ = QQ.changes(qQ);
        return {
          changes: qQ,
          range: zQ.k.range(TQ.mapPos(wQ.anchor, 1), TQ.mapPos(wQ.head, 1))
        }
      }))
    }
    const kW = QQ => {
        let {
          state: WQ,
          dispatch: XQ
        } = QQ;
        return !WQ.readOnly && (XQ(WQ.update(LW(WQ, ((QQ, XQ) => {
          XQ.push({
            from: QQ.from,
            insert: WQ.facet(FQ.V)
          })
        })), {
          userEvent: "input.indent"
        })), !0)
      },
      fW = QQ => {
        let {
          state: WQ,
          dispatch: XQ
        } = QQ;
        return !WQ.readOnly && (XQ(WQ.update(LW(WQ, ((QQ, XQ) => {
          let wQ = /^\s*/.exec(QQ.text)[0];
          if (!wQ) return;
          let qQ = (0, zQ.V)(wQ, WQ.tabSize),
            TQ = 0,
            sQ = (0, FQ.S)(WQ, Math.max(0, qQ - (0, FQ.K)(WQ)));
          for (; TQ < wQ.length && TQ < sQ.length && wQ.charCodeAt(TQ) == sQ.charCodeAt(TQ);) TQ++;
          XQ.push({
            from: QQ.from + TQ,
            to: QQ.from + wQ.length,
            insert: sQ.slice(TQ)
          })
        })), {
          userEvent: "delete.dedent"
        })), !0)
      },
      SW = [{
        key: "Alt-ArrowLeft",
        mac: "Ctrl-ArrowLeft",
        run: QQ => eQ(QQ, (WQ => mQ(QQ.state, WQ, !YQ(QQ)))),
        shift: QQ => FW(QQ, (WQ => mQ(QQ.state, WQ, !YQ(QQ))))
      }, {
        key: "Alt-ArrowRight",
        mac: "Ctrl-ArrowRight",
        run: QQ => eQ(QQ, (WQ => mQ(QQ.state, WQ, YQ(QQ)))),
        shift: QQ => FW(QQ, (WQ => mQ(QQ.state, WQ, YQ(QQ))))
      }, {
        key: "Alt-ArrowUp",
        run: QQ => {
          let {
            state: WQ,
            dispatch: XQ
          } = QQ;
          return RW(WQ, XQ, !1)
        }
      }, {
        key: "Shift-Alt-ArrowUp",
        run: QQ => {
          let {
            state: WQ,
            dispatch: XQ
          } = QQ;
          return EW(WQ, XQ, !1)
        }
      }, {
        key: "Alt-ArrowDown",
        run: QQ => {
          let {
            state: WQ,
            dispatch: XQ
          } = QQ;
          return RW(WQ, XQ, !0)
        }
      }, {
        key: "Shift-Alt-ArrowDown",
        run: QQ => {
          let {
            state: WQ,
            dispatch: XQ
          } = QQ;
          return EW(WQ, XQ, !0)
        }
      }, {
        key: "Mod-Alt-ArrowUp",
        run: QQ => vW(QQ, !1)
      }, {
        key: "Mod-Alt-ArrowDown",
        run: QQ => vW(QQ, !0)
      }, {
        key: "Escape",
        run: QQ => {
          let {
            state: WQ,
            dispatch: XQ
          } = QQ, wQ = WQ.selection, qQ = null;
          return wQ.Qy.length > 1 ? qQ = zQ.k.create([wQ.main]) : wQ.main.empty || (qQ = zQ.k.create([zQ.k.cursor(wQ.main.head)])), !!qQ && (XQ(oQ(WQ, qQ)), !0)
        }
      }, {
        key: "Mod-Enter",
        run: uW(!0)
      }, {
        key: "Alt-l",
        mac: "Ctrl-l",
        run: QQ => {
          let {
            state: WQ,
            dispatch: XQ
          } = QQ, wQ = AW(WQ).map((QQ => {
            let {
              from: XQ,
              to: wQ
            } = QQ;
            return zQ.k.range(XQ, Math.min(wQ + 1, WQ.doc.length))
          }));
          return XQ(WQ.update({
            selection: zQ.k.create(wQ),
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Mod-i",
        run: QQ => {
          let {
            state: WQ,
            dispatch: XQ
          } = QQ, wQ = tQ(WQ.selection, (QQ => {
            let XQ = (0, FQ.fb)(WQ),
              wQ = XQ.resolveStack(QQ.from, 1);
            if (QQ.empty) {
              let WQ = XQ.resolveStack(QQ.from, -1);
              WQ.node.from >= wQ.node.from && WQ.node.to <= wQ.node.to && (wQ = WQ)
            }
            for (let WQ = wQ; WQ; WQ = WQ.next) {
              let {
                node: XQ
              } = WQ;
              if ((XQ.from < QQ.from && XQ.to >= QQ.to || XQ.to > QQ.to && XQ.from <= QQ.from) && WQ.next) return zQ.k.range(XQ.to, XQ.from)
            }
            return QQ
          }));
          return !wQ.eq(WQ.selection) && (XQ(oQ(WQ, wQ)), !0)
        },
        preventDefault: !0
      }, {
        key: "Mod-[",
        run: fW
      }, {
        key: "Mod-]",
        run: kW
      }, {
        key: "Mod-Alt-\\",
        run: QQ => {
          let {
            state: WQ,
            dispatch: XQ
          } = QQ;
          if (WQ.readOnly) return !1;
          let wQ = Object.create(null),
            qQ = new FQ.d(WQ, {
              overrideIndentation: QQ => {
                let WQ = wQ[QQ];
                return null == WQ ? -1 : WQ
              }
            }),
            TQ = LW(WQ, ((QQ, XQ, TQ) => {
              let zQ = (0, FQ.M)(qQ, QQ.from);
              if (null == zQ) return;
              /\S/.test(QQ.text) || (zQ = 0);
              let sQ = /^\s*/.exec(QQ.text)[0],
                PQ = (0, FQ.S)(WQ, zQ);
              (sQ != PQ || TQ.from < QQ.from + sQ.length) && (wQ[QQ.from] = zQ, XQ.push({
                from: QQ.from,
                to: QQ.from + sQ.length,
                insert: PQ
              }))
            }));
          return TQ.changes.empty || XQ(WQ.update(TQ, {
            userEvent: "indent"
          })), !0
        }
      }, {
        key: "Shift-Mod-k",
        run: QQ => {
          if (QQ.state.readOnly) return !1;
          let {
            state: WQ
          } = QQ, XQ = WQ.changes(AW(WQ).map((QQ => {
            let {
              from: XQ,
              to: wQ
            } = QQ;
            return XQ > 0 ? XQ-- : wQ < WQ.doc.length && wQ++, {
              from: XQ,
              to: wQ
            }
          }))), wQ = tQ(WQ.selection, (WQ => {
            let XQ;
            if (QQ.lineWrapping) {
              let wQ = QQ.lineBlockAt(WQ.head),
                qQ = QQ.coordsAtPos(WQ.head, WQ.assoc || 1);
              qQ && (XQ = wQ.bottom + QQ.documentTop - qQ.bottom + QQ.defaultLineHeight / 2)
            }
            return QQ.moveVertically(WQ, !0, XQ)
          })).map(XQ);
          return QQ.dispatch({
            changes: XQ,
            selection: wQ,
            scrollIntoView: !0,
            userEvent: "delete.line"
          }), !0
        }
      }, {
        key: "Shift-Mod-\\",
        run: QQ => {
          let {
            state: WQ,
            dispatch: XQ
          } = QQ;
          return sW(WQ, XQ, !1)
        }
      }, {
        key: "Mod-/",
        run: QQ => {
          let {
            state: WQ
          } = QQ, XQ = WQ.doc.lineAt(WQ.selection.main.from), wQ = jQ(QQ.state, XQ.from);
          return wQ.line ? JQ(QQ) : !!wQ.block && IQ(QQ)
        }
      }, {
        key: "Alt-A",
        run: rQ
      }, {
        key: "Ctrl-m",
        mac: "Shift-Alt-m",
        run: QQ => (QQ.setTabFocusMode(), !0)
      }].concat([{
        key: "ArrowLeft",
        run: NQ,
        shift: gW,
        preventDefault: !0
      }, {
        key: "Mod-ArrowLeft",
        mac: "Alt-ArrowLeft",
        run: QQ => OQ(QQ, !YQ(QQ)),
        shift: QQ => rW(QQ, !YQ(QQ)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowLeft",
        run: QQ => eQ(QQ, (WQ => zW(QQ, WQ, !YQ(QQ)))),
        shift: QQ => FW(QQ, (WQ => zW(QQ, WQ, !YQ(QQ)))),
        preventDefault: !0
      }, {
        key: "ArrowRight",
        run: ZQ,
        shift: JW,
        preventDefault: !0
      }, {
        key: "Mod-ArrowRight",
        mac: "Alt-ArrowRight",
        run: QQ => OQ(QQ, YQ(QQ)),
        shift: QQ => rW(QQ, YQ(QQ)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowRight",
        run: QQ => eQ(QQ, (WQ => zW(QQ, WQ, YQ(QQ)))),
        shift: QQ => FW(QQ, (WQ => zW(QQ, WQ, YQ(QQ)))),
        preventDefault: !0
      }, {
        key: "ArrowUp",
        run: QW,
        shift: jW,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowUp",
        run: pW,
        shift: UW
      }, {
        mac: "Ctrl-ArrowUp",
        run: qW,
        shift: VW
      }, {
        key: "ArrowDown",
        run: WW,
        shift: BW,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowDown",
        run: GW,
        shift: bW
      }, {
        mac: "Ctrl-ArrowDown",
        run: TW,
        shift: DW
      }, {
        key: "PageUp",
        run: qW,
        shift: VW
      }, {
        key: "PageDown",
        run: TW,
        shift: DW
      }, {
        key: "Home",
        run: QQ => eQ(QQ, (WQ => zW(QQ, WQ, !1))),
        shift: QQ => FW(QQ, (WQ => zW(QQ, WQ, !1))),
        preventDefault: !0
      }, {
        key: "Mod-Home",
        run: pW,
        shift: UW
      }, {
        key: "End",
        run: QQ => eQ(QQ, (WQ => zW(QQ, WQ, !0))),
        shift: QQ => FW(QQ, (WQ => zW(QQ, WQ, !0))),
        preventDefault: !0
      }, {
        key: "Mod-End",
        run: GW,
        shift: bW
      }, {
        key: "Enter",
        run: CW,
        shift: CW
      }, {
        key: "Mod-a",
        run: QQ => {
          let {
            state: WQ,
            dispatch: XQ
          } = QQ;
          return XQ(WQ.update({
            selection: {
              anchor: 0,
              head: WQ.doc.length
            },
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Backspace",
        run: lW,
        shift: lW,
        preventDefault: !0
      }, {
        key: "Delete",
        run: hW,
        preventDefault: !0
      }, {
        key: "Mod-Backspace",
        mac: "Alt-Backspace",
        run: cW,
        preventDefault: !0
      }, {
        key: "Mod-Delete",
        mac: "Alt-Delete",
        run: QQ => iW(QQ, !0),
        preventDefault: !0
      }, {
        mac: "Mod-Backspace",
        run: QQ => dW(QQ, (WQ => {
          let XQ = QQ.moveToLineBoundary(WQ, !1).head;
          return WQ.head > XQ ? XQ : Math.max(0, WQ.head - 1)
        })),
        preventDefault: !0
      }, {
        mac: "Mod-Delete",
        run: QQ => dW(QQ, (WQ => {
          let XQ = QQ.moveToLineBoundary(WQ, !0).head;
          return WQ.head < XQ ? XQ : Math.min(QQ.state.doc.length, WQ.head + 1)
        })),
        preventDefault: !0
      }].concat([{
        key: "Ctrl-b",
        run: NQ,
        shift: gW,
        preventDefault: !0
      }, {
        key: "Ctrl-f",
        run: ZQ,
        shift: JW
      }, {
        key: "Ctrl-p",
        run: QW,
        shift: jW
      }, {
        key: "Ctrl-n",
        run: WW,
        shift: BW
      }, {
        key: "Ctrl-a",
        run: QQ => eQ(QQ, (WQ => zQ.k.cursor(QQ.lineBlockAt(WQ.head).from, 1))),
        shift: QQ => FW(QQ, (WQ => zQ.k.cursor(QQ.lineBlockAt(WQ.head).from)))
      }, {
        key: "Ctrl-e",
        run: QQ => eQ(QQ, (WQ => zQ.k.cursor(QQ.lineBlockAt(WQ.head).to, -1))),
        shift: QQ => FW(QQ, (WQ => zQ.k.cursor(QQ.lineBlockAt(WQ.head).to)))
      }, {
        key: "Ctrl-d",
        run: hW
      }, {
        key: "Ctrl-h",
        run: lW
      }, {
        key: "Ctrl-k",
        run: QQ => dW(QQ, (WQ => {
          let XQ = QQ.lineBlockAt(WQ.head).to;
          return WQ.head < XQ ? XQ : Math.min(QQ.state.doc.length, WQ.head + 1)
        }))
      }, {
        key: "Ctrl-Alt-h",
        run: cW
      }, {
        key: "Ctrl-o",
        run: QQ => {
          let {
            state: WQ,
            dispatch: XQ
          } = QQ;
          if (WQ.readOnly) return !1;
          let wQ = WQ.changeByRange((QQ => ({
            changes: {
              from: QQ.from,
              to: QQ.to,
              insert: zQ.M.of(["", ""])
            },
            range: zQ.k.cursor(QQ.from)
          })));
          return XQ(WQ.update(wQ, {
            scrollIntoView: !0,
            userEvent: "input"
          })), !0
        }
      }, {
        key: "Ctrl-t",
        run: QQ => {
          let {
            state: WQ,
            dispatch: XQ
          } = QQ;
          if (WQ.readOnly) return !1;
          let wQ = WQ.changeByRange((QQ => {
            if (!QQ.empty || 0 == QQ.from || QQ.from == WQ.doc.length) return {
              range: QQ
            };
            let XQ = QQ.from,
              wQ = WQ.doc.lineAt(XQ),
              qQ = XQ == wQ.from ? XQ - 1 : (0, zQ.W)(wQ.text, XQ - wQ.from, !1) + wQ.from,
              TQ = XQ == wQ.to ? XQ + 1 : (0, zQ.W)(wQ.text, XQ - wQ.from, !0) + wQ.from;
            return {
              changes: {
                from: qQ,
                to: TQ,
                insert: WQ.doc.slice(XQ, TQ).append(WQ.doc.slice(qQ, XQ))
              },
              range: zQ.k.cursor(TQ)
            }
          }));
          return !wQ.changes.empty && (XQ(WQ.update(wQ, {
            scrollIntoView: !0,
            userEvent: "move.character"
          })), !0)
        }
      }, {
        key: "Ctrl-v",
        run: TW
      }].map((QQ => ({
        mac: QQ.key,
        run: QQ.run,
        shift: QQ.shift
      }))))),
      tW = {
        key: "Tab",
        run: kW,
        shift: fW
      };
    var oW = XQ(41592),
      eW = XQ(41545),
      nW = XQ(41598),
      xW = function(QQ) {
        void 0 === QQ && (QQ = {});
        var {
          crosshairCursor: WQ = !1
        } = QQ, XQ = [];
        !1 !== QQ.closeBracketsKeymap && (XQ = XQ.concat(eW.d)), !1 !== QQ.defaultKeymap && (XQ = XQ.concat(SW)), !1 !== QQ.searchKeymap && (XQ = XQ.concat(oW.g)), !1 !== QQ.historyKeymap && (XQ = XQ.concat(SQ)), !1 !== QQ.foldKeymap && (XQ = XQ.concat(FQ.E)), !1 !== QQ.completionKeymap && (XQ = XQ.concat(eW.l)), !1 !== QQ.lintKeymap && (XQ = XQ.concat(nW.e));
        var wQ = [];
        return !1 !== QQ.lineNumbers && wQ.push((0, sQ.bb)()), !1 !== QQ.highlightActiveLineGutter && wQ.push((0, sQ.Q)()), !1 !== QQ.highlightSpecialChars && wQ.push((0, sQ.Y)()), !1 !== QQ.history && wQ.push(function() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return [bQ, UQ.of(QQ), sQ.k.domEventHandlers({
            beforeinput(QQ, WQ) {
              let XQ = "historyUndo" == QQ.inputType ? dQ : "historyRedo" == QQ.inputType ? HQ : null;
              return !!XQ && (QQ.preventDefault(), XQ(WQ))
            }
          })]
        }()), !1 !== QQ.foldGutter && wQ.push((0, FQ.C)()), !1 !== QQ.drawSelection && wQ.push((0, sQ.B)()), !1 !== QQ.dropCursor && wQ.push((0, sQ.F)()), !1 !== QQ.allowMultipleSelections && wQ.push(zQ.l.allowMultipleSelections.of(!0)), !1 !== QQ.indentOnInput && wQ.push((0, FQ.P)()), !1 !== QQ.syntaxHighlighting && wQ.push((0, FQ.ab)(FQ.n, {
          fallback: !0
        })), !1 !== QQ.bracketMatching && wQ.push((0, FQ.i)()), !1 !== QQ.closeBrackets && wQ.push((0, eW.f)()), !1 !== QQ.autocompletion && wQ.push((0, eW.b)()), !1 !== QQ.rectangularSelection && wQ.push((0, sQ.gb)()), !1 !== WQ && wQ.push((0, sQ.x)()), !1 !== QQ.highlightActiveLine && wQ.push((0, sQ.U)()), !1 !== QQ.highlightSelectionMatches && wQ.push((0, oW.f)()), QQ.tabSize && "number" === typeof QQ.tabSize && wQ.push(FQ.V.of(" ".repeat(QQ.tabSize))), wQ.concat([sQ.$.of(XQ.flat())]).filter(Boolean)
      },
      YW = XQ(41575);
    const NW = "#e5c07b",
      ZW = "#e06c75",
      OW = "#56b6c2",
      KW = "#ffffff",
      mW = "#abb2bf",
      MW = "#7d8799",
      QX = "#61afef",
      WX = "#98c379",
      XX = "#d19a66",
      wX = "#c678dd",
      qX = "#21252b",
      TX = "#2c313a",
      zX = "#282c34",
      sX = "#353a42",
      FX = "#3E4451",
      PX = "#528bff",
      gX = sQ.k.theme({
        "&": {
          color: mW,
          backgroundColor: zX
        },
        ".cm-content": {
          caretColor: PX
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: PX
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: FX
        },
        ".cm-panels": {
          backgroundColor: qX,
          color: mW
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
          backgroundColor: zX,
          color: MW,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: TX
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#ddd"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: sX
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: sX,
          borderBottomColor: sX
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: TX,
            color: mW
          }
        }
      }, {
        dark: !0
      }),
      JX = FQ.b.define([{
        tag: YW.h.keyword,
        color: wX
      }, {
        tag: [YW.h.name, YW.h.deleted, YW.h.character, YW.h.propertyName, YW.h.macroName],
        color: ZW
      }, {
        tag: [YW.h.function(YW.h.variableName), YW.h.labelName],
        color: QX
      }, {
        tag: [YW.h.color, YW.h.constant(YW.h.name), YW.h.standard(YW.h.name)],
        color: XX
      }, {
        tag: [YW.h.definition(YW.h.name), YW.h.separator],
        color: mW
      }, {
        tag: [YW.h.typeName, YW.h.className, YW.h.number, YW.h.changed, YW.h.annotation, YW.h.modifier, YW.h.self, YW.h.namespace],
        color: NW
      }, {
        tag: [YW.h.operator, YW.h.operatorKeyword, YW.h.url, YW.h.escape, YW.h.regexp, YW.h.link, YW.h.special(YW.h.string)],
        color: OW
      }, {
        tag: [YW.h.meta, YW.h.comment],
        color: MW
      }, {
        tag: YW.h.strong,
        fontWeight: "bold"
      }, {
        tag: YW.h.emphasis,
        fontStyle: "italic"
      }, {
        tag: YW.h.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: YW.h.link,
        color: MW,
        textDecoration: "underline"
      }, {
        tag: YW.h.heading,
        fontWeight: "bold",
        color: ZW
      }, {
        tag: [YW.h.atom, YW.h.bool, YW.h.special(YW.h.variableName)],
        color: XX
      }, {
        tag: [YW.h.processingInstruction, YW.h.string, YW.h.inserted],
        color: WX
      }, {
        tag: YW.h.invalid,
        color: KW
      }]),
      rX = [gX, (0, FQ.ab)(JX)];
    var IX = sQ.k.theme({
      "&": {
        backgroundColor: "#fff"
      }
    }, {
      dark: !1
    });
    class jX {
      constructor(QQ, WQ) {
        this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = WQ, this.timeoutMS = WQ, this.callbacks.push(QQ)
      }
      fJ() {
        if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
          this.isTimeExhausted = !0;
          var QQ = this.callbacks.slice();
          this.callbacks.length = 0, QQ.forEach((QQ => {
            try {
              QQ()
            } catch (WQ) {
              console.error("TimeoutLatch callback error:", WQ)
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
    class BX {
      constructor() {
        this.interval = null, this.latches = new Set
      }
      add(QQ) {
        this.latches.add(QQ), this.start()
      }
      remove(QQ) {
        this.latches.delete(QQ), 0 === this.latches.size && this.stop()
      }
      start() {
        null === this.interval && (this.interval = setInterval((() => {
          this.latches.forEach((QQ => {
            QQ.fJ(), QQ.isDone && this.remove(QQ)
          }))
        }), 1))
      }
      stop() {
        null !== this.interval && (clearInterval(this.interval), this.interval = null)
      }
    }
    var yX = null,
      VX = zQ.b.define(),
      DX = [];

    function pX(QQ) {
      var {
        value: WQ,
        selection: XQ,
        onChange: wQ,
        onStatistics: qQ,
        onCreateEditor: FQ,
        onUpdate: PQ,
        extensions: gQ = DX,
        autoFocus: JQ,
        theme: rQ = "light",
        height: IQ = null,
        minHeight: jQ = null,
        maxHeight: BQ = null,
        width: yQ = null,
        minWidth: VQ = null,
        maxWidth: DQ = null,
        placeholder: pQ = "",
        editable: GQ = !0,
        readOnly: UQ = !1,
        indentWithTab: bQ = !0,
        basicSetup: vQ = !0,
        root: dQ,
        initialState: HQ
      } = QQ, [aQ, lQ] = (0, TQ.useState)(), [hQ, iQ] = (0, TQ.useState)(), [cQ, AQ] = (0, TQ.useState)(), RQ = (0, TQ.useState)((() => ({
        current: null
      })))[0], EQ = (0, TQ.useState)((() => ({
        current: null
      })))[0], CQ = sQ.k.theme({
        "&": {
          height: IQ,
          minHeight: jQ,
          maxHeight: BQ,
          width: yQ,
          minWidth: VQ,
          maxWidth: DQ
        },
        "& .cm-scroller": {
          height: "100% !important"
        }
      }), uQ = sQ.k.updateListener.of((QQ => {
        if (QQ.docChanged && "function" === typeof wQ && !QQ.transactions.some((QQ => QQ.annotation(VX)))) {
          RQ.current ? RQ.current.reset() : (RQ.current = new jX((() => {
            if (EQ.current) {
              var QQ = EQ.current;
              EQ.current = null, QQ()
            }
            RQ.current = null
          }), 200), ("undefined" === typeof window ? new BX : (yX || (yX = new BX), yX)).add(RQ.current));
          var WQ = QQ.state.doc.toString();
          wQ(WQ, QQ)
        }
        qQ && qQ((QQ => ({
          line: QQ.state.doc.lineAt(QQ.state.selection.main.from),
          lineCount: QQ.state.doc.lines,
          lineBreak: QQ.state.lineBreak,
          length: QQ.state.doc.length,
          readOnly: QQ.state.readOnly,
          tabSize: QQ.state.tabSize,
          selection: QQ.state.selection,
          selectionAsSingle: QQ.state.selection.asSingle().main,
          Qy: QQ.state.selection.Qy,
          selectionCode: QQ.state.sliceDoc(QQ.state.selection.main.from, QQ.state.selection.main.to),
          selections: QQ.state.selection.Qy.map((WQ => QQ.state.sliceDoc(WQ.from, WQ.to))),
          selectedText: QQ.state.selection.Qy.some((QQ => !QQ.empty))
        }))(QQ))
      })), LQ = function(QQ) {
        void 0 === QQ && (QQ = {});
        var {
          indentWithTab: WQ = !0,
          editable: XQ = !0,
          readOnly: wQ = !1,
          theme: qQ = "light",
          placeholder: TQ = "",
          basicSetup: FQ = !0
        } = QQ, PQ = [];
        switch (WQ && PQ.unshift(sQ.$.of([tW])), FQ && ("boolean" === typeof FQ ? PQ.unshift(xW()) : PQ.unshift(xW(FQ))), TQ && PQ.unshift((0, sQ.fb)(TQ)), qQ) {
          case "light":
            PQ.push(IX);
            break;
          case "dark":
            PQ.push(rX);
            break;
          case "none":
            break;
          default:
            PQ.push(qQ)
        }
        return !1 === XQ && PQ.push(sQ.k.editable.of(!1)), wQ && PQ.push(zQ.l.readOnly.of(!0)), [...PQ]
      }({
        theme: rQ,
        editable: GQ,
        readOnly: UQ,
        placeholder: pQ,
        indentWithTab: bQ,
        basicSetup: vQ
      }), kQ = [uQ, CQ, ...LQ];
      return PQ && "function" === typeof PQ && kQ.push(sQ.k.updateListener.of(PQ)), kQ = kQ.concat(gQ), (0, TQ.useLayoutEffect)((() => {
        if (aQ && !cQ) {
          var QQ = {
              doc: WQ,
              selection: XQ,
              extensions: kQ
            },
            wQ = HQ ? zQ.l.fromJSON(HQ.json, QQ, HQ.fields) : zQ.l.create(QQ);
          if (AQ(wQ), !hQ) {
            var qQ = new sQ.k({
              state: wQ,
              parent: aQ,
              root: dQ
            });
            iQ(qQ), FQ && FQ(qQ, wQ)
          }
        }
        return () => {
          hQ && (AQ(void 0), iQ(void 0))
        }
      }), [aQ, cQ]), (0, TQ.useEffect)((() => {
        QQ.container && lQ(QQ.container)
      }), [QQ.container]), (0, TQ.useEffect)((() => () => {
        hQ && (hQ.destroy(), iQ(void 0)), RQ.current && (RQ.current.cancel(), RQ.current = null)
      }), [hQ]), (0, TQ.useEffect)((() => {
        JQ && hQ && hQ.focus()
      }), [JQ, hQ]), (0, TQ.useEffect)((() => {
        hQ && hQ.dispatch({
          effects: zQ.G.reconfigure.of(kQ)
        })
      }), [rQ, gQ, IQ, jQ, BQ, yQ, VQ, DQ, pQ, GQ, UQ, bQ, vQ, wQ, PQ]), (0, TQ.useEffect)((() => {
        if (void 0 !== WQ) {
          var QQ = hQ ? hQ.state.doc.toString() : "";
          if (hQ && WQ !== QQ) {
            var XQ = () => {
              hQ && WQ !== hQ.state.doc.toString() && hQ.dispatch({
                changes: {
                  from: 0,
                  to: hQ.state.doc.toString().length,
                  insert: WQ || ""
                },
                annotations: [VX.of(!0)]
              })
            };
            RQ.current && !RQ.current.isDone ? EQ.current = XQ : XQ()
          }
        }
      }), [WQ, hQ]), {
        state: cQ,
        setState: AQ,
        view: hQ,
        setView: iQ,
        container: aQ,
        setContainer: lQ
      }
    }
    var GX = XQ(1145),
      UX = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"],
      bX = (0, TQ.forwardRef)(((QQ, WQ) => {
        var {
          className: XQ,
          value: zQ = "",
          selection: sQ,
          extensions: FQ = [],
          onChange: PQ,
          onStatistics: gQ,
          onCreateEditor: JQ,
          onUpdate: rQ,
          autoFocus: IQ,
          theme: jQ = "light",
          height: BQ,
          minHeight: yQ,
          maxHeight: VQ,
          width: DQ,
          minWidth: pQ,
          maxWidth: GQ,
          basicSetup: UQ,
          placeholder: bQ,
          indentWithTab: vQ,
          editable: dQ,
          readOnly: HQ,
          root: aQ,
          initialState: lQ
        } = QQ, hQ = (0, qQ.e)(QQ, UX), iQ = (0, TQ.useRef)(null), {
          state: cQ,
          view: AQ,
          container: RQ,
          setContainer: EQ
        } = pX({
          root: aQ,
          value: zQ,
          autoFocus: IQ,
          theme: jQ,
          height: BQ,
          minHeight: yQ,
          maxHeight: VQ,
          width: DQ,
          minWidth: pQ,
          maxWidth: GQ,
          basicSetup: UQ,
          placeholder: bQ,
          indentWithTab: vQ,
          editable: dQ,
          readOnly: HQ,
          selection: sQ,
          onChange: PQ,
          onStatistics: gQ,
          onCreateEditor: JQ,
          onUpdate: rQ,
          extensions: FQ,
          initialState: lQ
        });
        (0, TQ.useImperativeHandle)(WQ, (() => ({
          editor: iQ.current,
          state: cQ,
          view: AQ
        })), [iQ, RQ, cQ, AQ]);
        var CQ = (0, TQ.useCallback)((QQ => {
          iQ.current = QQ, EQ(QQ)
        }), [EQ]);
        if ("string" !== typeof zQ) throw new Error("value must be typeof string but got " + typeof zQ);
        var uQ = "string" === typeof jQ ? "cm-theme-" + jQ : "cm-theme";
        return (0, GX.jsx)("div", (0, wQ.c)({
          ref: CQ,
          className: uQ + (XQ ? " " + XQ : "")
        }, hQ))
      }));
    bX.displayName = "CodeMirror";
    const vX = bX
  },
  41560: (QQ, WQ, XQ) => {
    function wQ() {
      var QQ = arguments[0];
      "string" == typeof QQ && (QQ = document.createElement(QQ));
      var WQ = 1,
        XQ = arguments[1];
      if (XQ && "object" == typeof XQ && null == XQ.nodeType && !Array.isArray(XQ)) {
        for (var wQ in XQ)
          if (Object.prototype.hasOwnProperty.call(XQ, wQ)) {
            var TQ = XQ[wQ];
            "string" == typeof TQ ? QQ.setAttribute(wQ, TQ) : null != TQ && (QQ[wQ] = TQ)
          } WQ++
      }
      for (; WQ < arguments.length; WQ++) qQ(QQ, arguments[WQ]);
      return QQ
    }

    function qQ(QQ, WQ) {
      if ("string" == typeof WQ) QQ.appendChild(document.createTextNode(WQ));
      else if (null == WQ);
      else if (null != WQ.nodeType) QQ.appendChild(WQ);
      else {
        if (!Array.isArray(WQ)) throw new RangeError("Unsupported child node: " + WQ);
        for (var XQ = 0; XQ < WQ.length; XQ++) qQ(QQ, WQ[XQ])
      }
    }
    XQ.d(WQ, {
      b: () => wQ
    })
  },
  41558: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => zQ
    });
    const wQ = "undefined" == typeof Symbol ? "__\u037c" : Symbol.for("\u037c"),
      qQ = "undefined" == typeof Symbol ? "__styleSet" + Math.floor(1e8 * Math.random()) : Symbol("styleSet"),
      TQ = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : {};
    class zQ {
      constructor(QQ, WQ) {
        this.rules = [];
        let {
          finish: XQ
        } = WQ || {};

        function wQ(QQ) {
          return /^@/.test(QQ) ? [QQ] : QQ.split(/,\s*/)
        }

        function qQ(QQ, WQ, TQ, zQ) {
          let sQ = [],
            FQ = /^@(\w+)\b/.exec(QQ[0]),
            PQ = FQ && "keyframes" == FQ[1];
          if (FQ && null == WQ) return TQ.push(QQ[0] + ";");
          for (let XQ in WQ) {
            let zQ = WQ[XQ];
            if (/&/.test(XQ)) qQ(XQ.split(/,\s*/).map((WQ => QQ.map((QQ => WQ.replace(/&/, QQ))))).reduce(((QQ, WQ) => QQ.concat(WQ))), zQ, TQ);
            else if (zQ && "object" == typeof zQ) {
              if (!FQ) throw new RangeError("The value of a property (" + XQ + ") should be a primitive value.");
              qQ(wQ(XQ), zQ, sQ, PQ)
            } else null != zQ && sQ.push(XQ.replace(/_.*/, "").replace(/[A-Z]/g, (QQ => "-" + QQ.toLowerCase())) + ": " + zQ + ";")
          }(sQ.length || PQ) && TQ.push((!XQ || FQ || zQ ? QQ : QQ.map(XQ)).join(", ") + " {" + sQ.join(" ") + "}")
        }
        for (let TQ in QQ) qQ(wQ(TQ), QQ[TQ], this.rules)
      }
      getRules() {
        return this.rules.join("\n")
      }
      static newName() {
        let QQ = TQ[wQ] || 1;
        return TQ[wQ] = QQ + 1, "\u037c" + QQ.toString(36)
      }
      static mount(QQ, WQ, XQ) {
        let wQ = QQ[qQ],
          TQ = XQ && XQ.nonce;
        wQ ? TQ && wQ.setNonce(TQ) : wQ = new FQ(QQ, TQ), wQ.mount(Array.isArray(WQ) ? WQ : [WQ], QQ)
      }
    }
    let sQ = new Map;
    class FQ {
      constructor(QQ, WQ) {
        let XQ = QQ.ownerDocument || QQ,
          wQ = XQ.defaultView;
        if (!QQ.head && QQ.adoptedStyleSheets && wQ.CSSStyleSheet) {
          let WQ = sQ.get(XQ);
          if (WQ) return QQ[qQ] = WQ;
          this.sheet = new wQ.CSSStyleSheet, sQ.set(XQ, this)
        } else this.styleTag = XQ.createElement("style"), WQ && this.styleTag.setAttribute("nonce", WQ);
        this.modules = [], QQ[qQ] = this
      }
      mount(QQ, WQ) {
        let XQ = this.sheet,
          wQ = 0,
          qQ = 0;
        for (let TQ = 0; TQ < QQ.length; TQ++) {
          let WQ = QQ[TQ],
            zQ = this.modules.indexOf(WQ);
          if (zQ < qQ && zQ > -1 && (this.modules.splice(zQ, 1), qQ--, zQ = -1), -1 == zQ) {
            if (this.modules.splice(qQ++, 0, WQ), XQ)
              for (let QQ = 0; QQ < WQ.rules.length; QQ++) XQ.insertRule(WQ.rules[QQ], wQ++)
          } else {
            for (; qQ < zQ;) wQ += this.modules[qQ++].rules.length;
            wQ += WQ.rules.length, qQ++
          }
        }
        if (XQ) WQ.adoptedStyleSheets.indexOf(this.sheet) < 0 && (WQ.adoptedStyleSheets = [this.sheet, ...WQ.adoptedStyleSheets]);
        else {
          let QQ = "";
          for (let WQ = 0; WQ < this.modules.length; WQ++) QQ += this.modules[WQ].getRules() + "\n";
          this.styleTag.textContent = QQ;
          let XQ = WQ.head || WQ;
          this.styleTag.parentNode != XQ && XQ.insertBefore(this.styleTag, XQ.firstChild)
        }
      }
      setNonce(QQ) {
        this.styleTag && this.styleTag.getAttribute("nonce") != QQ && this.styleTag.setAttribute("nonce", QQ)
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);