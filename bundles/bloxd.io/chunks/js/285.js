export const id = 285;
export const ids = [285];
export const modules = {
  40688: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => NF,
      g: () => iF,
      i: () => MF,
      m: () => vQ,
      o: () => TF,
      s: () => mQ,
      t: () => bF
    });
    var LQ = wQ(40695),
      qQ = wQ(40702),
      oQ = wQ(40718);
    class DQ {
      constructor(QQ, FQ, wQ, LQ) {
        this.state = QQ, this.pos = FQ, this.explicit = wQ, this.view = LQ, this.abortListeners = [], this.abortOnDocChange = !1
      }
      tokenBefore(QQ) {
        let FQ = (0, oQ.ob)(this.state).resolveInner(this.pos, -1);
        for (; FQ && QQ.indexOf(FQ.name) < 0;) FQ = FQ.parent;
        return FQ ? {
          from: FQ.from,
          to: this.pos,
          text: this.state.sliceDoc(FQ.from, this.pos),
          type: FQ.type
        } : null
      }
      matchBefore(QQ) {
        let FQ = this.state.doc.lineAt(this.pos),
          wQ = Math.max(FQ.from, this.pos - 250),
          LQ = FQ.text.slice(wQ - FQ.from, this.pos - FQ.from),
          qQ = LQ.search(bQ(QQ, !1));
        return qQ < 0 ? null : {
          from: wQ + qQ,
          to: this.pos,
          text: LQ.slice(qQ)
        }
      }
      get aborted() {
        return null == this.abortListeners
      }
      addEventListener(QQ, FQ, wQ) {
        "abort" == QQ && this.abortListeners && (this.abortListeners.push(FQ), wQ && wQ.onDocChange && (this.abortOnDocChange = !0))
      }
    }

    function kQ(QQ) {
      let FQ = Object.keys(QQ).join(""),
        wQ = /\w/.test(FQ);
      return wQ && (FQ = FQ.replace(/\w/g, "")), `[${wQ?"\\w":""}${FQ.replace(/[^\w\s]/g,"\\$&")}]`
    }

    function vQ(QQ) {
      let FQ = QQ.map((QQ => "string" == typeof QQ ? {
          label: QQ
        } : QQ)),
        [wQ, LQ] = FQ.every((QQ => /^\w+$/.test(QQ.label))) ? [/\w*$/, /\w+$/] : function(QQ) {
          let FQ = Object.create(null),
            wQ = Object.create(null);
          for (let {
              label: qQ
            }
            of QQ) {
            FQ[qQ[0]] = !0;
            for (let QQ = 1; QQ < qQ.length; QQ++) wQ[qQ[QQ]] = !0
          }
          let LQ = kQ(FQ) + kQ(wQ) + "*$";
          return [new RegExp("^" + LQ), new RegExp(LQ)]
        }(FQ);
      return QQ => {
        let qQ = QQ.matchBefore(LQ);
        return qQ || QQ.explicit ? {
          from: qQ ? qQ.from : QQ.pos,
          options: FQ,
          validFor: wQ
        } : null
      }
    }

    function mQ(QQ, FQ) {
      return wQ => {
        for (let FQ = (0, oQ.ob)(wQ.state).resolveInner(wQ.pos, -1); FQ; FQ = FQ.parent) {
          if (QQ.indexOf(FQ.name) > -1) return null;
          if (FQ.type.isTop) break
        }
        return FQ(wQ)
      }
    }
    class uQ {
      constructor(QQ, FQ, wQ, LQ) {
        this.completion = QQ, this.source = FQ, this.match = wQ, this.score = LQ
      }
    }

    function HQ(QQ) {
      return QQ.selection.main.from
    }

    function bQ(QQ, FQ) {
      var wQ;
      let {
        source: LQ
      } = QQ, qQ = FQ && "^" != LQ[0], oQ = "$" != LQ[LQ.length - 1];
      return qQ || oQ ? new RegExp(`${qQ?"^":""}(?:${LQ})${oQ?"$":""}`, null !== (wQ = QQ.flags) && void 0 !== wQ ? wQ : QQ.ignoreCase ? "i" : "") : QQ
    }
    const YQ = LQ.d.define();

    function xQ(QQ, FQ, wQ, qQ) {
      let {
        main: oQ
      } = QQ.selection, DQ = wQ - oQ.from, kQ = qQ - oQ.from;
      return {
        ...QQ.changeByRange((vQ => {
          if (vQ != oQ && wQ != qQ && QQ.sliceDoc(vQ.from + DQ, vQ.from + kQ) != QQ.sliceDoc(wQ, qQ)) return {
            range: vQ
          };
          let mQ = QQ.toText(FQ);
          return {
            changes: {
              from: vQ.from + DQ,
              to: qQ == oQ.from ? vQ.to : vQ.from + kQ,
              insert: mQ
            },
            range: LQ.j.cursor(vQ.from + DQ + mQ.length)
          }
        })),
        scrollIntoView: !0,
        userEvent: "input.complete"
      }
    }
    const AQ = new WeakMap;

    function tQ(QQ) {
      if (!Array.isArray(QQ)) return QQ;
      let FQ = AQ.get(QQ);
      return FQ || AQ.set(QQ, FQ = vQ(QQ)), FQ
    }
    const eQ = LQ.H.define(),
      MQ = LQ.H.define();
    class GQ {
      constructor(QQ) {
        this.pattern = QQ, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
        for (let FQ = 0; FQ < QQ.length;) {
          let wQ = (0, LQ.T)(QQ, FQ),
            qQ = (0, LQ.U)(wQ);
          this.chars.push(wQ);
          let oQ = QQ.slice(FQ, FQ + qQ),
            DQ = oQ.toUpperCase();
          this.folded.push((0, LQ.T)(DQ == oQ ? oQ.toLowerCase() : DQ, 0)), FQ += qQ
        }
        this.astral = QQ.length != this.chars.length
      }
      ret(QQ, FQ) {
        return this.score = QQ, this.matched = FQ, this
      }
      match(QQ) {
        if (0 == this.pattern.length) return this.ret(-100, []);
        if (QQ.length < this.pattern.length) return null;
        let {
          chars: FQ,
          folded: wQ,
          any: qQ,
          precise: oQ,
          byWord: DQ
        } = this;
        if (1 == FQ.length) {
          let qQ = (0, LQ.T)(QQ, 0),
            oQ = (0, LQ.U)(qQ),
            DQ = oQ == QQ.length ? 0 : -100;
          if (qQ == FQ[0]);
          else {
            if (qQ != wQ[0]) return null;
            DQ += -200
          }
          return this.ret(DQ, [0, oQ])
        }
        let kQ = QQ.indexOf(this.pattern);
        if (0 == kQ) return this.ret(QQ.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
        let vQ = FQ.length,
          mQ = 0;
        if (kQ < 0) {
          for (let oQ = 0, DQ = Math.min(QQ.length, 200); oQ < DQ && mQ < vQ;) {
            let DQ = (0, LQ.T)(QQ, oQ);
            DQ != FQ[mQ] && DQ != wQ[mQ] || (qQ[mQ++] = oQ), oQ += (0, LQ.U)(DQ)
          }
          if (mQ < vQ) return null
        }
        let uQ = 0,
          HQ = 0,
          bQ = !1,
          YQ = 0,
          xQ = -1,
          AQ = -1,
          tQ = /[a-z]/.test(QQ),
          eQ = !0;
        for (let MQ = 0, GQ = Math.min(QQ.length, 200), pQ = 0; MQ < GQ && HQ < vQ;) {
          let qQ = (0, LQ.T)(QQ, MQ);
          kQ < 0 && (uQ < vQ && qQ == FQ[uQ] && (oQ[uQ++] = MQ), YQ < vQ && (qQ == FQ[YQ] || qQ == wQ[YQ] ? (0 == YQ && (xQ = MQ), AQ = MQ + 1, YQ++) : YQ = 0));
          let mQ, GQ = qQ < 255 ? qQ >= 48 && qQ <= 57 || qQ >= 97 && qQ <= 122 ? 2 : qQ >= 65 && qQ <= 90 ? 1 : 0 : (mQ = (0, LQ.eb)(qQ)) != mQ.toLowerCase() ? 1 : mQ != mQ.toUpperCase() ? 2 : 0;
          (!MQ || 1 == GQ && tQ || 0 == pQ && 0 != GQ) && (FQ[HQ] == qQ || wQ[HQ] == qQ && (bQ = !0) ? DQ[HQ++] = MQ : DQ.length && (eQ = !1)), pQ = GQ, MQ += (0, LQ.U)(qQ)
        }
        return HQ == vQ && 0 == DQ[0] && eQ ? this.result((bQ ? -200 : 0) - 100, DQ, QQ) : YQ == vQ && 0 == xQ ? this.ret(-200 - QQ.length + (AQ == QQ.length ? 0 : -100), [0, AQ]) : kQ > -1 ? this.ret(-700 - QQ.length, [kQ, kQ + this.pattern.length]) : YQ == vQ ? this.ret(-900 - QQ.length, [xQ, AQ]) : HQ == vQ ? this.result((bQ ? -200 : 0) - 100 - 700 + (eQ ? 0 : -1100), DQ, QQ) : 2 == FQ.length ? null : this.result((qQ[0] ? -700 : 0) - 200 - 1100, qQ, QQ)
      }
      result(QQ, FQ, wQ) {
        let qQ = [],
          oQ = 0;
        for (let DQ of FQ) {
          let QQ = DQ + (this.astral ? (0, LQ.U)((0, LQ.T)(wQ, DQ)) : 1);
          oQ && qQ[oQ - 1] == DQ ? qQ[oQ - 1] = QQ : (qQ[oQ++] = DQ, qQ[oQ++] = QQ)
        }
        return this.ret(QQ - wQ.length, qQ)
      }
    }
    class pQ {
      constructor(QQ) {
        this.pattern = QQ, this.matched = [], this.score = 0, this.folded = QQ.toLowerCase()
      }
      match(QQ) {
        if (QQ.length < this.pattern.length) return null;
        let FQ = QQ.slice(0, this.pattern.length),
          wQ = FQ == this.pattern ? 0 : FQ.toLowerCase() == this.folded ? -200 : null;
        return null == wQ ? null : (this.matched = [0, FQ.length], this.score = wQ + (QQ.length == this.pattern.length ? 0 : -100), this)
      }
    }
    const cQ = LQ.r.define({
      combine: QQ => (0, LQ.W)(QQ, {
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
        positionInfo: SQ,
        filterStrict: !1,
        compareCompletions: (QQ, FQ) => (QQ.sortText || QQ.label).localeCompare(FQ.sortText || FQ.label),
        interactionDelay: 75,
        updateSyncTime: 100
      }, {
        defaultKeymap: (QQ, FQ) => QQ && FQ,
        closeOnBlur: (QQ, FQ) => QQ && FQ,
        icons: (QQ, FQ) => QQ && FQ,
        tooltipClass: (QQ, FQ) => wQ => CQ(QQ(wQ), FQ(wQ)),
        optionClass: (QQ, FQ) => wQ => CQ(QQ(wQ), FQ(wQ)),
        addToOptions: (QQ, FQ) => QQ.concat(FQ),
        filterStrict: (QQ, FQ) => QQ || FQ
      })
    });

    function CQ(QQ, FQ) {
      return QQ ? FQ ? QQ + " " + FQ : QQ : FQ
    }

    function SQ(QQ, FQ, wQ, LQ, oQ, DQ) {
      let kQ, vQ, mQ = QQ.textDirection == qQ.d.RTL,
        uQ = mQ,
        HQ = !1,
        bQ = "top",
        YQ = FQ.left - oQ.left,
        xQ = oQ.right - FQ.right,
        AQ = LQ.right - LQ.left,
        tQ = LQ.bottom - LQ.top;
      if (uQ && YQ < Math.min(AQ, xQ) ? uQ = !1 : !uQ && xQ < Math.min(AQ, YQ) && (uQ = !0), AQ <= (uQ ? YQ : xQ)) kQ = Math.max(oQ.top, Math.min(wQ.top, oQ.bottom - tQ)) - FQ.top, vQ = Math.min(400, uQ ? YQ : xQ);
      else {
        HQ = !0, vQ = Math.min(400, (mQ ? FQ.right : oQ.right - FQ.left) - 30);
        let QQ = oQ.bottom - FQ.bottom;
        QQ >= tQ || QQ > FQ.top ? kQ = wQ.bottom - FQ.top : (bQ = "bottom", kQ = FQ.bottom - wQ.top)
      }
      return {
        style: `${bQ}: ${kQ/((FQ.bottom-FQ.top)/DQ.offsetHeight)}px; max-width: ${vQ/((FQ.right-FQ.left)/DQ.offsetWidth)}px`,
        class: "cm-completionInfo-" + (HQ ? mQ ? "left-narrow" : "right-narrow" : uQ ? "left" : "right")
      }
    }
    const iQ = LQ.H.define();

    function WQ(QQ, FQ, wQ) {
      if (QQ <= wQ) return {
        from: 0,
        to: QQ
      };
      if (FQ < 0 && (FQ = 0), FQ <= QQ >> 1) {
        let QQ = Math.floor(FQ / wQ);
        return {
          from: QQ * wQ,
          to: (QQ + 1) * wQ
        }
      }
      let LQ = Math.floor((QQ - FQ) / wQ);
      return {
        from: QQ - (LQ + 1) * wQ,
        to: QQ - LQ * wQ
      }
    }
    class RQ {
      constructor(QQ, FQ, wQ) {
        this.view = QQ, this.stateField = FQ, this.applyCompletion = wQ, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
          read: () => this.measureInfo(),
          write: QQ => this.placeInfo(QQ),
          key: this
        }, this.space = null, this.currentClass = "";
        let LQ = QQ.state.field(FQ),
          {
            options: qQ,
            selected: oQ
          } = LQ.open,
          DQ = QQ.state.facet(cQ);
        this.optionContent = function(QQ) {
          let FQ = QQ.addToOptions.slice();
          return QQ.icons && FQ.push({
            render(QQ) {
              let FQ = document.createElement("div");
              return FQ.classList.add("cm-completionIcon"), QQ.type && FQ.classList.add(...QQ.type.split(/\s+/g).map((QQ => "cm-completionIcon-" + QQ))), FQ.setAttribute("aria-hidden", "true"), FQ
            },
            position: 20
          }), FQ.push({
            render(QQ, FQ, wQ, LQ) {
              let qQ = document.createElement("span");
              qQ.className = "cm-completionLabel";
              let oQ = QQ.displayLabel || QQ.label,
                DQ = 0;
              for (let kQ = 0; kQ < LQ.length;) {
                let QQ = LQ[kQ++],
                  FQ = LQ[kQ++];
                QQ > DQ && qQ.appendChild(document.createTextNode(oQ.slice(DQ, QQ)));
                let wQ = qQ.appendChild(document.createElement("span"));
                wQ.appendChild(document.createTextNode(oQ.slice(QQ, FQ))), wQ.className = "cm-completionMatchedText", DQ = FQ
              }
              return DQ < oQ.length && qQ.appendChild(document.createTextNode(oQ.slice(DQ))), qQ
            },
            position: 50
          }, {
            render(QQ) {
              if (!QQ.detail) return null;
              let FQ = document.createElement("span");
              return FQ.className = "cm-completionDetail", FQ.textContent = QQ.detail, FQ
            },
            position: 80
          }), FQ.sort(((QQ, FQ) => QQ.position - FQ.position)).map((QQ => QQ.render))
        }(DQ), this.optionClass = DQ.optionClass, this.tooltipClass = DQ.tooltipClass, this.range = WQ(qQ.length, oQ, DQ.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(QQ.state), this.dom.addEventListener("mousedown", (wQ => {
          let {
            options: LQ
          } = QQ.state.field(FQ).open;
          for (let FQ, qQ = wQ.target; qQ && qQ != this.dom; qQ = qQ.parentNode)
            if ("LI" == qQ.nodeName && (FQ = /-(\d+)$/.exec(qQ.id)) && +FQ[1] < LQ.length) return this.applyCompletion(QQ, LQ[+FQ[1]]), void wQ.preventDefault();
          if (wQ.target == this.list) {
            let FQ = this.list.classList.contains("cm-completionListIncompleteTop") && wQ.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && wQ.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
            null != FQ && (QQ.dispatch({
              effects: iQ.of(FQ)
            }), wQ.preventDefault())
          }
        })), this.dom.addEventListener("focusout", (FQ => {
          let wQ = QQ.state.field(this.stateField, !1);
          wQ && wQ.tooltip && QQ.state.facet(cQ).closeOnBlur && FQ.relatedTarget != QQ.contentDOM && QQ.dispatch({
            effects: MQ.of(null)
          })
        })), this.showOptions(qQ, LQ.id)
      }
      mount() {
        this.updateSel()
      }
      showOptions(QQ, FQ) {
        this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(QQ, FQ, this.range)), this.list.addEventListener("scroll", (() => {
          this.info && this.view.requestMeasure(this.placeInfoReq)
        }))
      }
      update(QQ) {
        var FQ;
        let wQ = QQ.state.field(this.stateField),
          LQ = QQ.startState.field(this.stateField);
        if (this.updateTooltipClass(QQ.state), wQ != LQ) {
          let {
            options: qQ,
            selected: oQ,
            disabled: DQ
          } = wQ.open;
          LQ.open && LQ.open.options == qQ || (this.range = WQ(qQ.length, oQ, QQ.state.facet(cQ).maxRenderedOptions), this.showOptions(qQ, wQ.id)), this.updateSel(), DQ != (null === (FQ = LQ.open) || void 0 === FQ ? void 0 : FQ.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!DQ)
        }
      }
      updateTooltipClass(QQ) {
        let FQ = this.tooltipClass(QQ);
        if (FQ != this.currentClass) {
          for (let QQ of this.currentClass.split(" ")) QQ && this.dom.classList.remove(QQ);
          for (let QQ of FQ.split(" ")) QQ && this.dom.classList.add(QQ);
          this.currentClass = FQ
        }
      }
      positioned(QQ) {
        this.space = QQ, this.info && this.view.requestMeasure(this.placeInfoReq)
      }
      updateSel() {
        let QQ = this.view.state.field(this.stateField),
          FQ = QQ.open;
        (FQ.selected > -1 && FQ.selected < this.range.from || FQ.selected >= this.range.to) && (this.range = WQ(FQ.options.length, FQ.selected, this.view.state.facet(cQ).maxRenderedOptions), this.showOptions(FQ.options, QQ.id));
        let wQ = this.updateSelectedOption(FQ.selected);
        if (wQ) {
          this.destroyInfo();
          let {
            completion: LQ
          } = FQ.options[FQ.selected], {
            info: oQ
          } = LQ;
          if (!oQ) return;
          let DQ = "string" === typeof oQ ? document.createTextNode(oQ) : oQ(LQ);
          if (!DQ) return;
          "then" in DQ ? DQ.then((FQ => {
            FQ && this.view.state.field(this.stateField, !1) == QQ && this.addInfoPane(FQ, LQ)
          })).catch((QQ => (0, qQ.V)(this.view.state, QQ, "completion info"))) : (this.addInfoPane(DQ, LQ), wQ.setAttribute("aria-describedby", this.info.id))
        }
      }
      addInfoPane(QQ, FQ) {
        this.destroyInfo();
        let wQ = this.info = document.createElement("div");
        if (wQ.className = "cm-tooltip cm-completionInfo", wQ.id = "cm-completionInfo-" + Math.floor(65535 * Math.random()).toString(16), null != QQ.nodeType) wQ.appendChild(QQ), this.infoDestroy = null;
        else {
          let {
            dom: FQ,
            destroy: LQ
          } = QQ;
          wQ.appendChild(FQ), this.infoDestroy = LQ || null
        }
        this.dom.appendChild(wQ), this.view.requestMeasure(this.placeInfoReq)
      }
      updateSelectedOption(QQ) {
        let FQ = null;
        for (let wQ = this.list.firstChild, LQ = this.range.from; wQ; wQ = wQ.nextSibling, LQ++) "LI" == wQ.nodeName && wQ.id ? LQ == QQ ? wQ.hasAttribute("aria-selected") || (wQ.setAttribute("aria-selected", "true"), FQ = wQ) : wQ.hasAttribute("aria-selected") && (wQ.removeAttribute("aria-selected"), wQ.removeAttribute("aria-describedby")) : LQ--;
        return FQ && function(QQ, FQ) {
          let wQ = QQ.getBoundingClientRect(),
            LQ = FQ.getBoundingClientRect(),
            qQ = wQ.height / QQ.offsetHeight;
          LQ.top < wQ.top ? QQ.scrollTop -= (wQ.top - LQ.top) / qQ : LQ.bottom > wQ.bottom && (QQ.scrollTop += (LQ.bottom - wQ.bottom) / qQ)
        }(this.list, FQ), FQ
      }
      measureInfo() {
        let QQ = this.dom.querySelector("[aria-selected]");
        if (!QQ || !this.info) return null;
        let FQ = this.dom.getBoundingClientRect(),
          wQ = this.info.getBoundingClientRect(),
          LQ = QQ.getBoundingClientRect(),
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
        return LQ.top > Math.min(qQ.bottom, FQ.bottom) - 10 || LQ.bottom < Math.max(qQ.top, FQ.top) + 10 ? null : this.view.state.facet(cQ).positionInfo(this.view, FQ, LQ, wQ, qQ, this.dom)
      }
      placeInfo(QQ) {
        this.info && (QQ ? (QQ.style && (this.info.style.cssText = QQ.style), this.info.className = "cm-tooltip cm-completionInfo " + (QQ.class || "")) : this.info.style.cssText = "top: -1e6px")
      }
      createListBox(QQ, FQ, wQ) {
        const LQ = document.createElement("ul");
        LQ.id = FQ, LQ.setAttribute("role", "listbox"), LQ.setAttribute("aria-expanded", "true"), LQ.setAttribute("aria-label", this.view.state.phrase("Completions")), LQ.addEventListener("mousedown", (QQ => {
          QQ.target == LQ && QQ.preventDefault()
        }));
        let qQ = null;
        for (let oQ = wQ.from; oQ < wQ.to; oQ++) {
          let {
            completion: DQ,
            match: kQ
          } = QQ[oQ], {
            section: vQ
          } = DQ;
          if (vQ) {
            let QQ = "string" == typeof vQ ? vQ : vQ.name;
            if (QQ != qQ && (oQ > wQ.from || 0 == wQ.from))
              if (qQ = QQ, "string" != typeof vQ && vQ.header) LQ.appendChild(vQ.header(vQ));
              else {
                LQ.appendChild(document.createElement("completion-section")).textContent = QQ
              }
          }
          const mQ = LQ.appendChild(document.createElement("li"));
          mQ.id = FQ + "-" + oQ, mQ.setAttribute("role", "option");
          let uQ = this.optionClass(DQ);
          uQ && (mQ.className = uQ);
          for (let QQ of this.optionContent) {
            let FQ = QQ(DQ, this.view.state, this.view, kQ);
            FQ && mQ.appendChild(FQ)
          }
        }
        return wQ.from && LQ.classList.add("cm-completionListIncompleteTop"), wQ.to < QQ.length && LQ.classList.add("cm-completionListIncompleteBottom"), LQ
      }
      destroyInfo() {
        this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
      }
      destroy() {
        this.destroyInfo()
      }
    }

    function OQ(QQ, FQ) {
      return wQ => new RQ(wQ, QQ, FQ)
    }

    function sQ(QQ) {
      return 100 * (QQ.boost || 0) + (QQ.apply ? 10 : 0) + (QQ.info ? 5 : 0) + (QQ.type ? 1 : 0)
    }
    class rQ {
      constructor(QQ, FQ, wQ, LQ, qQ, oQ) {
        this.options = QQ, this.attrs = FQ, this.tooltip = wQ, this.timestamp = LQ, this.selected = qQ, this.disabled = oQ
      }
      setSelected(QQ, FQ) {
        return QQ == this.selected || QQ >= this.options.length ? this : new rQ(this.options, TQ(FQ, QQ), this.tooltip, this.timestamp, QQ, this.disabled)
      }
      static build(QQ, FQ, wQ, LQ, qQ, oQ) {
        if (LQ && !oQ && QQ.some((QQ => QQ.isPending))) return LQ.setDisabled();
        let DQ = function(QQ, FQ) {
          let wQ = [],
            LQ = null,
            qQ = null,
            oQ = QQ => {
              wQ.push(QQ);
              let {
                section: FQ
              } = QQ.completion;
              if (FQ) {
                LQ || (LQ = []);
                let QQ = "string" == typeof FQ ? FQ : FQ.name;
                LQ.some((FQ => FQ.name == QQ)) || LQ.push("string" == typeof FQ ? {
                  name: QQ
                } : FQ)
              }
            },
            DQ = FQ.facet(cQ);
          for (let HQ of QQ)
            if (HQ.hasResult()) {
              let QQ = HQ.result.getMatch;
              if (!1 === HQ.result.filter)
                for (let FQ of HQ.result.options) oQ(new uQ(FQ, HQ.source, QQ ? QQ(FQ) : [], 1e9 - wQ.length));
              else {
                let wQ, LQ = FQ.sliceDoc(HQ.from, HQ.to),
                  kQ = DQ.filterStrict ? new pQ(LQ) : new GQ(LQ);
                for (let FQ of HQ.result.options)
                  if (wQ = kQ.match(FQ.label)) {
                    let LQ = FQ.displayLabel ? QQ ? QQ(FQ, wQ.matched) : [] : wQ.matched,
                      DQ = wQ.score + (FQ.boost || 0);
                    if (oQ(new uQ(FQ, HQ.source, LQ, DQ)), "object" == typeof FQ.section && "dynamic" === FQ.section.rank) {
                      let {
                        name: QQ
                      } = FQ.section;
                      qQ || (qQ = Object.create(null)), qQ[QQ] = Math.max(DQ, qQ[QQ] || -1e9)
                    }
                  }
              }
            } if (LQ) {
            let QQ = Object.create(null),
              FQ = 0,
              oQ = (QQ, FQ) => ("dynamic" === QQ.rank && "dynamic" === FQ.rank ? qQ[FQ.name] - qQ[QQ.name] : 0) || ("number" == typeof QQ.rank ? QQ.rank : 1e9) - ("number" == typeof FQ.rank ? FQ.rank : 1e9) || (QQ.name < FQ.name ? -1 : 1);
            for (let wQ of LQ.sort(oQ)) FQ -= 1e5, QQ[wQ.name] = FQ;
            for (let LQ of wQ) {
              let {
                section: FQ
              } = LQ.completion;
              FQ && (LQ.score += QQ["string" == typeof FQ ? FQ : FQ.name])
            }
          }
          let kQ = [],
            vQ = null,
            mQ = DQ.compareCompletions;
          for (let uQ of wQ.sort(((QQ, FQ) => FQ.score - QQ.score || mQ(QQ.completion, FQ.completion)))) {
            let QQ = uQ.completion;
            !vQ || vQ.label != QQ.label || vQ.detail != QQ.detail || null != vQ.type && null != QQ.type && vQ.type != QQ.type || vQ.apply != QQ.apply || vQ.boost != QQ.boost ? kQ.push(uQ) : sQ(uQ.completion) > sQ(vQ) && (kQ[kQ.length - 1] = uQ), vQ = uQ.completion
          }
          return kQ
        }(QQ, FQ);
        if (!DQ.length) return LQ && QQ.some((QQ => QQ.isPending)) ? LQ.setDisabled() : null;
        let kQ = FQ.facet(cQ).selectOnOpen ? 0 : -1;
        if (LQ && LQ.selected != kQ && -1 != LQ.selected) {
          let QQ = LQ.options[LQ.selected].completion;
          for (let FQ = 0; FQ < DQ.length; FQ++)
            if (DQ[FQ].completion == QQ) {
              kQ = FQ;
              break
            }
        }
        return new rQ(DQ, TQ(wQ, kQ), {
          pos: QQ.reduce(((QQ, FQ) => FQ.hasResult() ? Math.min(QQ, FQ.from) : QQ), 1e8),
          create: VQ,
          above: qQ.aboveCursor
        }, LQ ? LQ.timestamp : Date.now(), kQ, !1)
      }
      map(QQ) {
        return new rQ(this.options, this.attrs, {
          ...this.tooltip,
          pos: QQ.mapPos(this.tooltip.pos)
        }, this.timestamp, this.selected, this.disabled)
      }
      setDisabled() {
        return new rQ(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0)
      }
    }
    class IQ {
      constructor(QQ, FQ, wQ) {
        this.active = QQ, this.id = FQ, this.open = wQ
      }
      static start() {
        return new IQ(KQ, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
      }
      update(QQ) {
        let {
          state: FQ
        } = QQ, wQ = FQ.facet(cQ), LQ = (wQ.override || FQ.languageDataAt("autocomplete", HQ(FQ)).map(tQ)).map((FQ => (this.active.find((QQ => QQ.source == FQ)) || new lQ(FQ, this.active.some((QQ => 0 != QQ.state)) ? 1 : 0)).update(QQ, wQ)));
        LQ.length == this.active.length && LQ.every(((QQ, FQ) => QQ == this.active[FQ])) && (LQ = this.active);
        let qQ = this.open,
          oQ = QQ.effects.some((QQ => QQ.is(aQ)));
        qQ && QQ.docChanged && (qQ = qQ.map(QQ.changes)), QQ.selection || LQ.some((FQ => FQ.hasResult() && QQ.changes.touchesRange(FQ.from, FQ.to))) || ! function(QQ, FQ) {
          if (QQ == FQ) return !0;
          for (let wQ = 0, LQ = 0;;) {
            for (; wQ < QQ.length && !QQ[wQ].hasResult();) wQ++;
            for (; LQ < FQ.length && !FQ[LQ].hasResult();) LQ++;
            let qQ = wQ == QQ.length,
              oQ = LQ == FQ.length;
            if (qQ || oQ) return qQ == oQ;
            if (QQ[wQ++].result != FQ[LQ++].result) return !1
          }
        }(LQ, this.active) || oQ ? qQ = rQ.build(LQ, FQ, this.id, qQ, wQ, oQ) : qQ && qQ.disabled && !LQ.some((QQ => QQ.isPending)) && (qQ = null), !qQ && LQ.every((QQ => !QQ.isPending)) && LQ.some((QQ => QQ.hasResult())) && (LQ = LQ.map((QQ => QQ.hasResult() ? new lQ(QQ.source, 0) : QQ)));
        for (let DQ of QQ.effects) DQ.is(iQ) && (qQ = qQ && qQ.setSelected(DQ.value, this.id));
        return LQ == this.active && qQ == this.open ? this : new IQ(LQ, this.id, qQ)
      }
      get tooltip() {
        return this.open ? this.open.tooltip : null
      }
      get attrs() {
        return this.open ? this.open.attrs : this.active.length ? UQ : NQ
      }
    }
    const UQ = {
        "aria-autocomplete": "list"
      },
      NQ = {};

    function TQ(QQ, FQ) {
      let wQ = {
        "aria-autocomplete": "list",
        "aria-haspopup": "listbox",
        "aria-controls": QQ
      };
      return FQ > -1 && (wQ["aria-activedescendant"] = QQ + "-" + FQ), wQ
    }
    const KQ = [];

    function zQ(QQ, FQ) {
      if (QQ.isUserEvent("input.complete")) {
        let wQ = QQ.annotation(YQ);
        if (wQ && FQ.activateOnCompletion(wQ)) return 12
      }
      let wQ = QQ.isUserEvent("input.type");
      return wQ && FQ.activateOnTyping ? 5 : wQ ? 1 : QQ.isUserEvent("delete.backward") ? 2 : QQ.selection ? 8 : QQ.docChanged ? 16 : 0
    }
    class lQ {
      constructor(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.source = QQ, this.state = FQ, this.explicit = wQ
      }
      hasResult() {
        return !1
      }
      get isPending() {
        return 1 == this.state
      }
      update(QQ, FQ) {
        let wQ = zQ(QQ, FQ),
          LQ = this;
        (8 & wQ || 16 & wQ && this.touches(QQ)) && (LQ = new lQ(LQ.source, 0)), 4 & wQ && 0 == LQ.state && (LQ = new lQ(this.source, 1)), LQ = LQ.updateFor(QQ, wQ);
        for (let qQ of QQ.effects)
          if (qQ.is(eQ)) LQ = new lQ(LQ.source, 1, qQ.value);
          else if (qQ.is(MQ)) LQ = new lQ(LQ.source, 0);
        else if (qQ.is(aQ))
          for (let QQ of qQ.value) QQ.source == LQ.source && (LQ = QQ);
        return LQ
      }
      updateFor(QQ, FQ) {
        return this.map(QQ.changes)
      }
      map(QQ) {
        return this
      }
      touches(QQ) {
        return QQ.changes.touchesRange(HQ(QQ.state))
      }
    }
    class jQ extends lQ {
      constructor(QQ, FQ, wQ, LQ, qQ, oQ) {
        super(QQ, 3, FQ), this.limit = wQ, this.result = LQ, this.from = qQ, this.to = oQ
      }
      hasResult() {
        return !0
      }
      updateFor(QQ, FQ) {
        var wQ;
        if (!(3 & FQ)) return this.map(QQ.changes);
        let LQ = this.result;
        LQ.map && !QQ.changes.empty && (LQ = LQ.map(LQ, QQ.changes));
        let qQ = QQ.changes.mapPos(this.from),
          oQ = QQ.changes.mapPos(this.to, 1),
          kQ = HQ(QQ.state);
        if (kQ > oQ || !LQ || 2 & FQ && (HQ(QQ.startState) == this.from || kQ < this.limit)) return new lQ(this.source, 4 & FQ ? 1 : 0);
        let vQ = QQ.changes.mapPos(this.limit);
        return function(QQ, FQ, wQ, LQ) {
          if (!QQ) return !1;
          let qQ = FQ.sliceDoc(wQ, LQ);
          return "function" == typeof QQ ? QQ(qQ, wQ, LQ, FQ) : bQ(QQ, !0).test(qQ)
        }(LQ.validFor, QQ.state, qQ, oQ) ? new jQ(this.source, this.explicit, vQ, LQ, qQ, oQ) : LQ.update && (LQ = LQ.update(LQ, qQ, oQ, new DQ(QQ.state, kQ, !1))) ? new jQ(this.source, this.explicit, vQ, LQ, LQ.from, null !== (wQ = LQ.to) && void 0 !== wQ ? wQ : HQ(QQ.state)) : new lQ(this.source, 1, this.explicit)
      }
      map(QQ) {
        if (QQ.empty) return this;
        return (this.result.map ? this.result.map(this.result, QQ) : this.result) ? new jQ(this.source, this.explicit, QQ.mapPos(this.limit), this.result, QQ.mapPos(this.from), QQ.mapPos(this.to, 1)) : new lQ(this.source, 0)
      }
      touches(QQ) {
        return QQ.changes.touchesRange(this.from, this.to)
      }
    }
    const aQ = LQ.H.define({
        map: (QQ, FQ) => QQ.map((QQ => QQ.map(FQ)))
      }),
      XQ = LQ.L.define({
        create: () => IQ.start(),
        update: (QQ, FQ) => QQ.update(FQ),
        provide: QQ => [qQ.ib.from(QQ, (QQ => QQ.tooltip)), qQ.f.contentAttributes.from(QQ, (QQ => QQ.attrs))]
      });

    function fQ(QQ, FQ) {
      const wQ = FQ.completion.apply || FQ.completion.label;
      let LQ = QQ.state.field(XQ).active.find((QQ => QQ.source == FQ.source));
      return LQ instanceof jQ && ("string" == typeof wQ ? QQ.dispatch({
        ...xQ(QQ.state, wQ, LQ.from, LQ.to),
        annotations: YQ.of(FQ.completion)
      }) : wQ(QQ, FQ.completion, LQ.from, LQ.to), !0)
    }
    const VQ = OQ(XQ, fQ);

    function hQ(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option";
      return wQ => {
        let LQ = wQ.state.field(XQ, !1);
        if (!LQ || !LQ.open || LQ.open.disabled || Date.now() - LQ.open.timestamp < wQ.state.facet(cQ).interactionDelay) return !1;
        let oQ, DQ = 1;
        "page" == FQ && (oQ = (0, qQ.A)(wQ, LQ.open.tooltip)) && (DQ = Math.max(2, Math.floor(oQ.dom.offsetHeight / oQ.dom.querySelector("li").offsetHeight) - 1));
        let {
          length: kQ
        } = LQ.open.options, vQ = LQ.open.selected > -1 ? LQ.open.selected + DQ * (QQ ? 1 : -1) : QQ ? 0 : kQ - 1;
        return vQ < 0 ? vQ = "page" == FQ ? 0 : kQ - 1 : vQ >= kQ && (vQ = "page" == FQ ? kQ - 1 : 0), wQ.dispatch({
          effects: iQ.of(vQ)
        }), !0
      }
    }
    const JQ = QQ => !!QQ.state.field(XQ, !1) && (QQ.dispatch({
      effects: eQ.of(!0)
    }), !0);
    class EQ {
      constructor(QQ, FQ) {
        this.active = QQ, this.context = FQ, this.time = Date.now(), this.updates = [], this.done = void 0
      }
    }
    const nQ = qQ.h.fromClass(class {
        constructor(QQ) {
          this.view = QQ, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
          for (let FQ of QQ.state.field(XQ).active) FQ.isPending && this.startQuery(FQ)
        }
        update(QQ) {
          let FQ = QQ.state.field(XQ),
            wQ = QQ.state.facet(cQ);
          if (!QQ.selectionSet && !QQ.docChanged && QQ.startState.field(XQ) == FQ) return;
          let LQ = QQ.transactions.some((QQ => {
            let FQ = zQ(QQ, wQ);
            return 8 & FQ || (QQ.selection || QQ.docChanged) && !(3 & FQ)
          }));
          for (let kQ = 0; kQ < this.running.length; kQ++) {
            let FQ = this.running[kQ];
            if (LQ || FQ.context.abortOnDocChange && QQ.docChanged || FQ.updates.length + QQ.transactions.length > 50 && Date.now() - FQ.time > 1e3) {
              for (let QQ of FQ.context.abortListeners) try {
                QQ()
              } catch (DQ) {
                (0, qQ.V)(this.view.state, DQ)
              }
              FQ.context.abortListeners = null, this.running.splice(kQ--, 1)
            } else FQ.updates.push(...QQ.transactions)
          }
          this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), QQ.transactions.some((QQ => QQ.effects.some((QQ => QQ.is(eQ))))) && (this.pendingStart = !0);
          let oQ = this.pendingStart ? 50 : wQ.activateOnTypingDelay;
          if (this.debounceUpdate = FQ.active.some((QQ => QQ.isPending && !this.running.some((FQ => FQ.active.source == QQ.source)))) ? setTimeout((() => this.startUpdate()), oQ) : -1, 0 != this.composing)
            for (let qQ of QQ.transactions) qQ.isUserEvent("input.type") ? this.composing = 2 : 2 == this.composing && qQ.selection && (this.composing = 3)
        }
        startUpdate() {
          this.debounceUpdate = -1, this.pendingStart = !1;
          let {
            state: QQ
          } = this.view, FQ = QQ.field(XQ);
          for (let wQ of FQ.active) wQ.isPending && !this.running.some((QQ => QQ.active.source == wQ.source)) && this.startQuery(wQ);
          this.running.length && FQ.open && FQ.open.disabled && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(cQ).updateSyncTime))
        }
        startQuery(QQ) {
          let {
            state: FQ
          } = this.view, wQ = HQ(FQ), LQ = new DQ(FQ, wQ, QQ.explicit, this.view), oQ = new EQ(QQ, LQ);
          this.running.push(oQ), Promise.resolve(QQ.source(LQ)).then((QQ => {
            oQ.context.aborted || (oQ.done = QQ || null, this.scheduleAccept())
          }), (QQ => {
            this.view.dispatch({
              effects: MQ.of(null)
            }), (0, qQ.V)(this.view.state, QQ)
          }))
        }
        scheduleAccept() {
          this.running.every((QQ => void 0 !== QQ.done)) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(cQ).updateSyncTime))
        }
        accept() {
          var QQ;
          this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
          let FQ = [],
            wQ = this.view.state.facet(cQ),
            LQ = this.view.state.field(XQ);
          for (let qQ = 0; qQ < this.running.length; qQ++) {
            let oQ = this.running[qQ];
            if (void 0 === oQ.done) continue;
            if (this.running.splice(qQ--, 1), oQ.done) {
              let LQ = HQ(oQ.updates.length ? oQ.updates[0].startState : this.view.state),
                qQ = Math.min(LQ, oQ.done.from + (oQ.active.explicit ? 0 : 1)),
                DQ = new jQ(oQ.active.source, oQ.active.explicit, qQ, oQ.done, oQ.done.from, null !== (QQ = oQ.done.to) && void 0 !== QQ ? QQ : LQ);
              for (let QQ of oQ.updates) DQ = DQ.update(QQ, wQ);
              if (DQ.hasResult()) {
                FQ.push(DQ);
                continue
              }
            }
            let DQ = LQ.active.find((QQ => QQ.source == oQ.active.source));
            if (DQ && DQ.isPending)
              if (null == oQ.done) {
                let QQ = new lQ(oQ.active.source, 0);
                for (let FQ of oQ.updates) QQ = QQ.update(FQ, wQ);
                QQ.isPending || FQ.push(QQ)
              } else this.startQuery(DQ)
          }(FQ.length || LQ.open && LQ.open.disabled) && this.view.dispatch({
            effects: aQ.of(FQ)
          })
        }
      }, {
        eventHandlers: {
          blur(QQ) {
            let FQ = this.view.state.field(XQ, !1);
            if (FQ && FQ.tooltip && this.view.state.facet(cQ).closeOnBlur) {
              let wQ = FQ.open && (0, qQ.A)(this.view, FQ.open.tooltip);
              wQ && wQ.dom.contains(QQ.relatedTarget) || setTimeout((() => this.view.dispatch({
                effects: MQ.of(null)
              })), 10)
            }
          },
          compositionstart() {
            this.composing = 1
          },
          compositionend() {
            3 == this.composing && setTimeout((() => this.view.dispatch({
              effects: eQ.of(!1)
            })), 20), this.composing = 0
          }
        }
      }),
      gQ = "object" == typeof navigator && /Win/.test(navigator.platform),
      PQ = LQ.w.highest(qQ.f.domEventHandlers({
        keydown(QQ, FQ) {
          let wQ = FQ.state.field(XQ, !1);
          if (!wQ || !wQ.open || wQ.open.disabled || wQ.open.selected < 0 || QQ.key.length > 1 || QQ.ctrlKey && (!gQ || !QQ.altKey) || QQ.metaKey) return !1;
          let LQ = wQ.open.options[wQ.open.selected],
            qQ = wQ.active.find((QQ => QQ.source == LQ.source)),
            oQ = LQ.completion.commitCharacters || qQ.result.commitCharacters;
          return oQ && oQ.indexOf(QQ.key) > -1 && fQ(FQ, LQ), !1
        }
      })),
      ZQ = qQ.f.baseTheme({
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
    class yQ {
      constructor(QQ, FQ, wQ, LQ) {
        this.field = QQ, this.line = FQ, this.from = wQ, this.to = LQ
      }
    }
    class BQ {
      constructor(QQ, FQ, wQ) {
        this.field = QQ, this.from = FQ, this.to = wQ
      }
      map(QQ) {
        let FQ = QQ.mapPos(this.from, -1, LQ.t.TrackDel),
          wQ = QQ.mapPos(this.to, 1, LQ.t.TrackDel);
        return null == FQ || null == wQ ? null : new BQ(this.field, FQ, wQ)
      }
    }
    class dQ {
      constructor(QQ, FQ) {
        this.lines = QQ, this.fieldPositions = FQ
      }
      instantiate(QQ, FQ) {
        let wQ = [],
          LQ = [FQ],
          qQ = QQ.doc.lineAt(FQ),
          DQ = /^\s*/.exec(qQ.text)[0];
        for (let vQ of this.lines) {
          if (wQ.length) {
            let wQ = DQ,
              qQ = /^\t*/.exec(vQ)[0].length;
            for (let FQ = 0; FQ < qQ; FQ++) wQ += QQ.facet(oQ.$);
            LQ.push(FQ + wQ.length - qQ), vQ = wQ + vQ.slice(qQ)
          }
          wQ.push(vQ), FQ += vQ.length + 1
        }
        let kQ = this.fieldPositions.map((QQ => new BQ(QQ.field, LQ[QQ.line] + QQ.from, LQ[QQ.line] + QQ.to)));
        return {
          text: wQ,
          PA: kQ
        }
      }
      static parse(QQ) {
        let FQ, wQ = [],
          LQ = [],
          qQ = [];
        for (let oQ of QQ.split(/\r\n?|\n/)) {
          for (; FQ = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(oQ);) {
            let QQ = FQ[1] ? +FQ[1] : null,
              DQ = FQ[2] || FQ[3] || "",
              kQ = -1,
              vQ = DQ.replace(/\\[{}]/g, (QQ => QQ[1]));
            for (let FQ = 0; FQ < wQ.length; FQ++)(null != QQ ? wQ[FQ].seq == QQ : vQ && wQ[FQ].name == vQ) && (kQ = FQ);
            if (kQ < 0) {
              let FQ = 0;
              for (; FQ < wQ.length && (null == QQ || null != wQ[FQ].seq && wQ[FQ].seq < QQ);) FQ++;
              wQ.splice(FQ, 0, {
                seq: QQ,
                name: vQ
              }), kQ = FQ;
              for (let QQ of qQ) QQ.field >= kQ && QQ.field++
            }
            for (let wQ of qQ)
              if (wQ.line == LQ.length && wQ.from > FQ.index) {
                let QQ = FQ[2] ? 3 + (FQ[1] || "").length : 2;
                wQ.from -= QQ, wQ.to -= QQ
              } qQ.push(new yQ(kQ, LQ.length, FQ.index, FQ.index + vQ.length)), oQ = oQ.slice(0, FQ.index) + DQ + oQ.slice(FQ.index + FQ[0].length)
          }
          oQ = oQ.replace(/\\([{}])/g, ((QQ, FQ, wQ) => {
            for (let oQ of qQ) oQ.line == LQ.length && oQ.from > wQ && (oQ.from--, oQ.to--);
            return FQ
          })), LQ.push(oQ)
        }
        return new dQ(LQ, qQ)
      }
    }
    let QF = qQ.c.widget({
        widget: new class extends qQ.l {
          toDOM() {
            let QQ = document.createElement("span");
            return QQ.className = "cm-snippetFieldPosition", QQ
          }
          ignoreEvent() {
            return !1
          }
        }
      }),
      FF = qQ.c.mark({
        class: "cm-snippetField"
      });
    class wF {
      constructor(QQ, FQ) {
        this.PA = QQ, this.active = FQ, this.deco = qQ.c.set(QQ.map((QQ => (QQ.from == QQ.to ? QF : FF).range(QQ.from, QQ.to))), !0)
      }
      map(QQ) {
        let FQ = [];
        for (let wQ of this.PA) {
          let LQ = wQ.map(QQ);
          if (!LQ) return null;
          FQ.push(LQ)
        }
        return new wF(FQ, this.active)
      }
      selectionInsideField(QQ) {
        return QQ.PA.every((QQ => this.PA.some((FQ => FQ.field == this.active && FQ.from <= QQ.from && FQ.to >= QQ.to))))
      }
    }
    const LF = LQ.H.define({
        map: (QQ, FQ) => QQ && QQ.map(FQ)
      }),
      qF = LQ.H.define(),
      oF = LQ.L.define({
        create: () => null,
        update(QQ, FQ) {
          for (let wQ of FQ.effects) {
            if (wQ.is(LF)) return wQ.value;
            if (wQ.is(qF) && QQ) return new wF(QQ.PA, wQ.value)
          }
          return QQ && FQ.docChanged && (QQ = QQ.map(FQ.changes)), QQ && FQ.selection && !QQ.selectionInsideField(FQ.selection) && (QQ = null), QQ
        },
        provide: QQ => qQ.f.qo.from(QQ, (QQ => QQ ? QQ.deco : qQ.c.none))
      });

    function DF(QQ, FQ) {
      return LQ.j.create(QQ.filter((QQ => QQ.field == FQ)).map((QQ => LQ.j.range(QQ.from, QQ.to))))
    }

    function kF(QQ) {
      let FQ = dQ.parse(QQ);
      return (QQ, wQ, qQ, oQ) => {
        let {
          text: DQ,
          PA: kQ
        } = FQ.instantiate(QQ.state, qQ), {
          main: vQ
        } = QQ.state.selection, mQ = {
          changes: {
            from: qQ,
            to: oQ == vQ.from ? vQ.to : oQ,
            insert: LQ.P.of(DQ)
          },
          scrollIntoView: !0,
          annotations: wQ ? [YQ.of(wQ), LQ.S.userEvent.of("input.complete")] : void 0
        };
        if (kQ.length && (mQ.selection = DF(kQ, 0)), kQ.some((QQ => QQ.field > 0))) {
          let FQ = new wF(kQ, 0),
            wQ = mQ.effects = [LF.of(FQ)];
          void 0 === QQ.state.field(oF, !1) && wQ.push(LQ.H.appendConfig.of([oF, HF, YF, ZQ]))
        }
        QQ.dispatch(QQ.state.update(mQ))
      }
    }

    function vF(QQ) {
      return FQ => {
        let {
          state: wQ,
          dispatch: LQ
        } = FQ, qQ = wQ.field(oF, !1);
        if (!qQ || QQ < 0 && 0 == qQ.active) return !1;
        let oQ = qQ.active + QQ,
          DQ = QQ > 0 && !qQ.PA.some((FQ => FQ.field == oQ + QQ));
        return LQ(wQ.update({
          selection: DF(qQ.PA, oQ),
          effects: LF.of(DQ ? null : new wF(qQ.PA, oQ)),
          scrollIntoView: !0
        })), !0
      }
    }
    const mF = [{
        key: "Tab",
        run: vF(1),
        shift: vF(-1)
      }, {
        key: "Escape",
        run: QQ => {
          let {
            state: FQ,
            dispatch: wQ
          } = QQ;
          return !!FQ.field(oF, !1) && (wQ(FQ.update({
            effects: LF.of(null)
          })), !0)
        }
      }],
      uF = LQ.r.define({
        combine: QQ => QQ.length ? QQ[0] : mF
      }),
      HF = LQ.w.highest(qQ.O.compute([uF], (QQ => QQ.facet(uF))));

    function bF(QQ, FQ) {
      return {
        ...FQ,
        apply: kF(QQ)
      }
    }
    const YF = qQ.f.domEventHandlers({
      mousedown(QQ, FQ) {
        let wQ, LQ = FQ.state.field(oF, !1);
        if (!LQ || null == (wQ = FQ.posAtCoords({
            x: QQ.clientX,
            y: QQ.clientY
          }))) return !1;
        let qQ = LQ.PA.find((QQ => QQ.from <= wQ && QQ.to >= wQ));
        return !(!qQ || qQ.field == LQ.active) && (FQ.dispatch({
          selection: DF(LQ.PA, qQ.field),
          effects: LF.of(LQ.PA.some((QQ => QQ.field > qQ.field)) ? new wF(LQ.PA, qQ.field) : null),
          scrollIntoView: !0
        }), !0)
      }
    });
    const xF = {
        brackets: ["(", "[", "{", "'", '"'],
        before: ")]}:;>",
        stringPrefixes: []
      },
      AF = LQ.H.define({
        map(QQ, FQ) {
          let wQ = FQ.mapPos(QQ, -1, LQ.t.TrackAfter);
          return null == wQ ? void 0 : wQ
        }
      }),
      tF = new class extends LQ.D {};
    tF.startSide = 1, tF.endSide = -1;
    const eF = LQ.L.define({
      create: () => LQ.B.empty,
      update(QQ, FQ) {
        if (QQ = QQ.map(FQ.changes), FQ.selection) {
          let wQ = FQ.state.doc.lineAt(FQ.selection.main.head);
          QQ = QQ.update({
            filter: QQ => QQ >= wQ.from && QQ <= wQ.to
          })
        }
        for (let wQ of FQ.effects) wQ.is(AF) && (QQ = QQ.update({
          add: [tF.range(wQ.value, wQ.value + 1)]
        }));
        return QQ
      }
    });

    function MF() {
      return [SF, eF]
    }
    const GF = "()[]{}<>\xab\xbb\xbb\xab\uff3b\uff3d\uff5b\uff5d";

    function pF(QQ) {
      for (let FQ = 0; FQ < 16; FQ += 2)
        if (GF.charCodeAt(FQ) == QQ) return GF.charAt(FQ + 1);
      return (0, LQ.eb)(QQ < 128 ? QQ : QQ + 1)
    }

    function cF(QQ, FQ) {
      return QQ.languageDataAt("closeBrackets", FQ)[0] || xF
    }
    const CF = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      SF = qQ.f.inputHandler.of(((QQ, FQ, wQ, qQ) => {
        if ((CF ? QQ.composing : QQ.compositionStarted) || QQ.state.readOnly) return !1;
        let oQ = QQ.state.selection.main;
        if (qQ.length > 2 || 2 == qQ.length && 1 == (0, LQ.U)((0, LQ.T)(qQ, 0)) || FQ != oQ.from || wQ != oQ.to) return !1;
        let DQ = function(QQ, FQ) {
          let wQ = cF(QQ, QQ.selection.main.head),
            qQ = wQ.brackets || xF.brackets;
          for (let oQ of qQ) {
            let DQ = pF((0, LQ.T)(oQ, 0));
            if (FQ == oQ) return DQ == oQ ? rF(QQ, oQ, qQ.indexOf(oQ + oQ + oQ) > -1, wQ) : OF(QQ, oQ, DQ, wQ.before || xF.before);
            if (FQ == DQ && WF(QQ, QQ.selection.main.from)) return sF(QQ, oQ, DQ)
          }
          return null
        }(QQ.state, qQ);
        return !!DQ && (QQ.dispatch(DQ), !0)
      })),
      iF = [{
        key: "Backspace",
        run: QQ => {
          let {
            state: FQ,
            dispatch: wQ
          } = QQ;
          if (FQ.readOnly) return !1;
          let qQ = cF(FQ, FQ.selection.main.head).brackets || xF.brackets,
            oQ = null,
            DQ = FQ.changeByRange((QQ => {
              if (QQ.empty) {
                let wQ = function(QQ, FQ) {
                  let wQ = QQ.sliceString(FQ - 2, FQ);
                  return (0, LQ.U)((0, LQ.T)(wQ, 0)) == wQ.length ? wQ : wQ.slice(1)
                }(FQ.doc, QQ.head);
                for (let oQ of qQ)
                  if (oQ == wQ && RF(FQ.doc, QQ.head) == pF((0, LQ.T)(oQ, 0))) return {
                    changes: {
                      from: QQ.head - oQ.length,
                      to: QQ.head + oQ.length
                    },
                    range: LQ.j.cursor(QQ.head - oQ.length)
                  }
              }
              return {
                range: oQ = QQ
              }
            }));
          return oQ || wQ(FQ.update(DQ, {
            scrollIntoView: !0,
            userEvent: "delete.backward"
          })), !oQ
        }
      }];

    function WF(QQ, FQ) {
      let wQ = !1;
      return QQ.field(eF).between(0, QQ.doc.length, (QQ => {
        QQ == FQ && (wQ = !0)
      })), wQ
    }

    function RF(QQ, FQ) {
      let wQ = QQ.sliceString(FQ, FQ + 2);
      return wQ.slice(0, (0, LQ.U)((0, LQ.T)(wQ, 0)))
    }

    function OF(QQ, FQ, wQ, qQ) {
      let oQ = null,
        DQ = QQ.changeByRange((DQ => {
          if (!DQ.empty) return {
            changes: [{
              insert: FQ,
              from: DQ.from
            }, {
              insert: wQ,
              from: DQ.to
            }],
            effects: AF.of(DQ.to + FQ.length),
            range: LQ.j.range(DQ.anchor + FQ.length, DQ.head + FQ.length)
          };
          let kQ = RF(QQ.doc, DQ.head);
          return !kQ || /\s/.test(kQ) || qQ.indexOf(kQ) > -1 ? {
            changes: {
              insert: FQ + wQ,
              from: DQ.head
            },
            effects: AF.of(DQ.head + FQ.length),
            range: LQ.j.cursor(DQ.head + FQ.length)
          } : {
            range: oQ = DQ
          }
        }));
      return oQ ? null : QQ.update(DQ, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function sF(QQ, FQ, wQ) {
      let qQ = null,
        oQ = QQ.changeByRange((FQ => FQ.empty && RF(QQ.doc, FQ.head) == wQ ? {
          changes: {
            from: FQ.head,
            to: FQ.head + wQ.length,
            insert: wQ
          },
          range: LQ.j.cursor(FQ.head + wQ.length)
        } : qQ = {
          range: FQ
        }));
      return qQ ? null : QQ.update(oQ, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function rF(QQ, FQ, wQ, qQ) {
      let DQ = qQ.stringPrefixes || xF.stringPrefixes,
        kQ = null,
        vQ = QQ.changeByRange((qQ => {
          if (!qQ.empty) return {
            changes: [{
              insert: FQ,
              from: qQ.from
            }, {
              insert: FQ,
              from: qQ.to
            }],
            effects: AF.of(qQ.to + FQ.length),
            range: LQ.j.range(qQ.anchor + FQ.length, qQ.head + FQ.length)
          };
          let vQ, mQ = qQ.head,
            uQ = RF(QQ.doc, mQ);
          if (uQ == FQ) {
            if (IF(QQ, mQ)) return {
              changes: {
                insert: FQ + FQ,
                from: mQ
              },
              effects: AF.of(mQ + FQ.length),
              range: LQ.j.cursor(mQ + FQ.length)
            };
            if (WF(QQ, mQ)) {
              let qQ = wQ && QQ.sliceDoc(mQ, mQ + 3 * FQ.length) == FQ + FQ + FQ ? FQ + FQ + FQ : FQ;
              return {
                changes: {
                  from: mQ,
                  to: mQ + qQ.length,
                  insert: qQ
                },
                range: LQ.j.cursor(mQ + qQ.length)
              }
            }
          } else {
            if (wQ && QQ.sliceDoc(mQ - 2 * FQ.length, mQ) == FQ + FQ && (vQ = UF(QQ, mQ - 2 * FQ.length, DQ)) > -1 && IF(QQ, vQ)) return {
              changes: {
                insert: FQ + FQ + FQ + FQ,
                from: mQ
              },
              effects: AF.of(mQ + FQ.length),
              range: LQ.j.cursor(mQ + FQ.length)
            };
            if (QQ.charCategorizer(mQ)(uQ) != LQ.h.Word && UF(QQ, mQ, DQ) > -1 && ! function(QQ, FQ, wQ, LQ) {
                let qQ = (0, oQ.ob)(QQ).resolveInner(FQ, -1),
                  DQ = LQ.reduce(((QQ, FQ) => Math.max(QQ, FQ.length)), 0);
                for (let oQ = 0; oQ < 5; oQ++) {
                  let oQ = QQ.sliceDoc(qQ.from, Math.min(qQ.to, qQ.from + wQ.length + DQ)),
                    kQ = oQ.indexOf(wQ);
                  if (!kQ || kQ > -1 && LQ.indexOf(oQ.slice(0, kQ)) > -1) {
                    let FQ = qQ.firstChild;
                    for (; FQ && FQ.from == qQ.from && FQ.to - FQ.from > wQ.length + kQ;) {
                      if (QQ.sliceDoc(FQ.to - wQ.length, FQ.to) == wQ) return !1;
                      FQ = FQ.firstChild
                    }
                    return !0
                  }
                  let vQ = qQ.to == FQ && qQ.parent;
                  if (!vQ) break;
                  qQ = vQ
                }
                return !1
              }(QQ, mQ, FQ, DQ)) return {
              changes: {
                insert: FQ + FQ,
                from: mQ
              },
              effects: AF.of(mQ + FQ.length),
              range: LQ.j.cursor(mQ + FQ.length)
            }
          }
          return {
            range: kQ = qQ
          }
        }));
      return kQ ? null : QQ.update(vQ, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function IF(QQ, FQ) {
      let wQ = (0, oQ.ob)(QQ).resolveInner(FQ + 1);
      return wQ.parent && wQ.from == FQ
    }

    function UF(QQ, FQ, wQ) {
      let qQ = QQ.charCategorizer(FQ);
      if (qQ(QQ.sliceDoc(FQ - 1, FQ)) != LQ.h.Word) return FQ;
      for (let oQ of wQ) {
        let wQ = FQ - oQ.length;
        if (QQ.sliceDoc(wQ, FQ) == oQ && qQ(QQ.sliceDoc(wQ - 1, wQ)) != LQ.h.Word) return wQ
      }
      return -1
    }

    function NF() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [PQ, XQ, cQ.of(QQ), nQ, KF, ZQ]
    }
    const TF = [{
        key: "Ctrl-Space",
        run: JQ
      }, {
        mac: "Alt-`",
        run: JQ
      }, {
        mac: "Alt-i",
        run: JQ
      }, {
        key: "Escape",
        run: QQ => {
          let FQ = QQ.state.field(XQ, !1);
          return !(!FQ || !FQ.active.some((QQ => 0 != QQ.state))) && (QQ.dispatch({
            effects: MQ.of(null)
          }), !0)
        }
      }, {
        key: "ArrowDown",
        run: hQ(!0)
      }, {
        key: "ArrowUp",
        run: hQ(!1)
      }, {
        key: "PageDown",
        run: hQ(!0, "page")
      }, {
        key: "PageUp",
        run: hQ(!1, "page")
      }, {
        key: "Enter",
        run: QQ => {
          let FQ = QQ.state.field(XQ, !1);
          return !(QQ.state.readOnly || !FQ || !FQ.open || FQ.open.selected < 0 || FQ.open.disabled || Date.now() - FQ.open.timestamp < QQ.state.facet(cQ).interactionDelay) && fQ(QQ, FQ.open.options[FQ.open.selected])
        }
      }],
      KF = LQ.w.highest(qQ.O.computeN([cQ], (QQ => QQ.facet(cQ).defaultKeymap ? [TF] : [])))
  },
  40846: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => mQ,
      c: () => bQ,
      d: () => uQ,
      h: () => HQ
    });
    var LQ = wQ(40695);
    class qQ {
      constructor(QQ, FQ, wQ, LQ) {
        this.origin = QQ, this.changes = FQ, this.effects = wQ, this.clientID = LQ
      }
    }
    class oQ {
      constructor(QQ, FQ) {
        this.version = QQ, this.unconfirmed = FQ
      }
    }
    const DQ = LQ.r.define({
        combine(QQ) {
          let FQ = (0, LQ.W)(QQ, {
            startVersion: 0,
            clientID: null,
            sharedEffects: () => []
          }, {
            generatedID: QQ => QQ
          });
          return null == FQ.clientID && (FQ.clientID = QQ.length && QQ[0].generatedID || ""), FQ
        }
      }),
      kQ = LQ.d.define(),
      vQ = LQ.L.define({
        create: QQ => new oQ(QQ.facet(DQ).startVersion, []),
        update(QQ, FQ) {
          let wQ = FQ.annotation(kQ);
          if (wQ) return wQ;
          let {
            sharedEffects: LQ,
            clientID: vQ
          } = FQ.startState.facet(DQ), mQ = LQ(FQ);
          return mQ.length || !FQ.changes.empty ? new oQ(QQ.version, QQ.unconfirmed.concat(new qQ(FQ, FQ.changes, mQ, vQ))) : QQ
        }
      });

    function mQ() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [vQ, DQ.of(Object.assign({
        generatedID: Math.floor(1e9 * Math.random()).toString(36)
      }, QQ))]
    }

    function uQ(QQ, FQ) {
      let {
        version: wQ,
        unconfirmed: mQ
      } = QQ.field(vQ), {
        clientID: uQ
      } = QQ.facet(DQ);
      wQ += FQ.length;
      let HQ = [],
        bQ = null,
        YQ = 0;
      for (let qQ of FQ) {
        let QQ = YQ < mQ.length ? mQ[YQ] : null;
        QQ && QQ.clientID == qQ.clientID ? (bQ && (bQ = bQ.map(QQ.changes, !0)), HQ = LQ.H.mapEffects(HQ, qQ.changes), YQ++) : (HQ = LQ.H.mapEffects(HQ, qQ.changes), qQ.effects && (HQ = HQ.concat(qQ.effects)), bQ = bQ ? bQ.compose(qQ.changes) : qQ.changes)
      }
      if (YQ && (mQ = mQ.slice(YQ)), mQ.length && (bQ && (mQ = mQ.map((QQ => {
          let FQ = QQ.changes.map(bQ);
          return bQ = bQ.map(QQ.changes, !0), new qQ(QQ.origin, FQ, LQ.H.mapEffects(QQ.effects, bQ), uQ)
        }))), HQ.length)) {
        let QQ = mQ.reduce(((QQ, FQ) => QQ.compose(FQ.changes)), LQ.ChangeSet.empty(mQ[0].changes.length));
        HQ = LQ.H.mapEffects(HQ, QQ)
      }
      return bQ ? QQ.update({
        changes: bQ,
        effects: HQ,
        annotations: [LQ.S.addToHistory.of(!1), LQ.S.remote.of(!0), kQ.of(new oQ(wQ, mQ))],
        filter: !1
      }) : QQ.update({
        annotations: [kQ.of(new oQ(wQ, mQ))]
      })
    }

    function HQ(QQ) {
      return QQ.field(vQ).unconfirmed
    }

    function bQ(QQ) {
      return QQ.field(vQ).version
    }
  },
  40732: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => AF
    });
    var LQ = wQ(40723);
    class qQ {
      constructor(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ) {
        let mQ = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          uQ = arguments.length > 10 ? arguments[10] : void 0;
        this.p = QQ, this.stack = FQ, this.state = wQ, this.reducePos = LQ, this.pos = qQ, this.score = oQ, this.buffer = DQ, this.bufferBase = kQ, this.curContext = vQ, this.lookAhead = mQ, this.parent = uQ
      }
      toString() {
        return `[${this.stack.filter(((QQ,FQ)=>FQ%3==0)).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`
      }
      static start(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          LQ = QQ.parser.context;
        return new qQ(QQ, [], FQ, wQ, wQ, 0, [], 0, LQ ? new oQ(LQ, LQ.start) : null, 0, null)
      }
      get context() {
        return this.curContext ? this.curContext.context : null
      }
      pushState(QQ, FQ) {
        this.stack.push(this.state, FQ, this.bufferBase + this.buffer.length), this.state = QQ
      }
      reduce(QQ) {
        var FQ;
        let wQ = QQ >> 19,
          LQ = 65535 & QQ,
          {
            parser: qQ
          } = this.p,
          oQ = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos),
          DQ = qQ.dynamicPrecedence(LQ);
        if (DQ && (this.score += DQ), 0 == wQ) return this.pushState(qQ.getGoto(this.state, LQ, !0), this.reducePos), LQ < qQ.minRepeatTerm && this.storeNode(LQ, this.reducePos, this.reducePos, oQ ? 8 : 4, !0), void this.reduceContext(LQ, this.reducePos);
        let kQ = this.stack.length - 3 * (wQ - 1) - (262144 & QQ ? 6 : 0),
          vQ = kQ ? this.stack[kQ - 2] : this.p.PA[0].from,
          mQ = this.reducePos - vQ;
        mQ >= 2e3 && !(null === (FQ = this.p.parser.nodeSet.types[LQ]) || void 0 === FQ ? void 0 : FQ.isAnonymous) && (vQ == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = mQ) : this.p.lastBigReductionSize < mQ && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = vQ, this.p.lastBigReductionSize = mQ));
        let uQ = kQ ? this.stack[kQ - 1] : 0,
          HQ = this.bufferBase + this.buffer.length - uQ;
        if (LQ < qQ.minRepeatTerm || 131072 & QQ) {
          let QQ = qQ.stateFlag(this.state, 1) ? this.pos : this.reducePos;
          this.storeNode(LQ, vQ, QQ, HQ + 4, !0)
        }
        if (262144 & QQ) this.state = this.stack[kQ];
        else {
          let QQ = this.stack[kQ - 3];
          this.state = qQ.getGoto(QQ, LQ, !0)
        }
        for (; this.stack.length > kQ;) this.stack.pop();
        this.reduceContext(LQ, vQ)
      }
      storeNode(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
          qQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (0 == QQ && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
          let QQ = this,
            LQ = this.buffer.length;
          if (0 == LQ && QQ.parent && (LQ = QQ.bufferBase - QQ.parent.bufferBase, QQ = QQ.parent), LQ > 0 && 0 == QQ.buffer[LQ - 4] && QQ.buffer[LQ - 1] > -1) {
            if (FQ == wQ) return;
            if (QQ.buffer[LQ - 2] >= FQ) return void(QQ.buffer[LQ - 2] = wQ)
          }
        }
        if (qQ && this.pos != wQ) {
          let qQ = this.buffer.length;
          if (qQ > 0 && (0 != this.buffer[qQ - 4] || this.buffer[qQ - 1] < 0)) {
            let QQ = !1;
            for (let FQ = qQ; FQ > 0 && this.buffer[FQ - 2] > wQ; FQ -= 4)
              if (this.buffer[FQ - 1] >= 0) {
                QQ = !0;
                break
              } if (QQ)
              for (; qQ > 0 && this.buffer[qQ - 2] > wQ;) this.buffer[qQ] = this.buffer[qQ - 4], this.buffer[qQ + 1] = this.buffer[qQ - 3], this.buffer[qQ + 2] = this.buffer[qQ - 2], this.buffer[qQ + 3] = this.buffer[qQ - 1], qQ -= 4, LQ > 4 && (LQ -= 4)
          }
          this.buffer[qQ] = QQ, this.buffer[qQ + 1] = FQ, this.buffer[qQ + 2] = wQ, this.buffer[qQ + 3] = LQ
        } else this.buffer.push(QQ, FQ, wQ, LQ)
      }
      shift(QQ, FQ, wQ, LQ) {
        if (131072 & QQ) this.pushState(65535 & QQ, this.pos);
        else if (0 == (262144 & QQ)) {
          let qQ = QQ,
            {
              parser: oQ
            } = this.p;
          this.pos = LQ;
          let DQ = oQ.stateFlag(qQ, 1);
          !DQ && (LQ > wQ || FQ <= oQ.maxNode) && (this.reducePos = LQ), this.pushState(qQ, DQ ? wQ : Math.min(wQ, this.reducePos)), this.shiftContext(FQ, wQ), FQ <= oQ.maxNode && this.buffer.push(FQ, wQ, LQ, 4)
        } else this.pos = LQ, this.shiftContext(FQ, wQ), FQ <= this.p.parser.maxNode && this.buffer.push(FQ, wQ, LQ, 4)
      }
      apply(QQ, FQ, wQ, LQ) {
        65536 & QQ ? this.reduce(QQ) : this.shift(QQ, FQ, wQ, LQ)
      }
      useNode(QQ, FQ) {
        let wQ = this.p.reused.length - 1;
        (wQ < 0 || this.p.reused[wQ] != QQ) && (this.p.reused.push(QQ), wQ++);
        let LQ = this.pos;
        this.reducePos = this.pos = LQ + QQ.length, this.pushState(FQ, LQ), this.buffer.push(wQ, LQ, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, QQ, this, this.p.stream.reset(this.pos - QQ.length)))
      }
      split() {
        let QQ = this,
          FQ = QQ.buffer.length;
        for (; FQ > 0 && QQ.buffer[FQ - 2] > QQ.reducePos;) FQ -= 4;
        let wQ = QQ.buffer.slice(FQ),
          LQ = QQ.bufferBase + FQ;
        for (; QQ && LQ == QQ.bufferBase;) QQ = QQ.parent;
        return new qQ(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, wQ, LQ, this.curContext, this.lookAhead, QQ)
      }
      recoverByDelete(QQ, FQ) {
        let wQ = QQ <= this.p.parser.maxNode;
        wQ && this.storeNode(QQ, this.pos, FQ, 4), this.storeNode(0, this.pos, FQ, wQ ? 8 : 4), this.pos = this.reducePos = FQ, this.score -= 190
      }
      canShift(QQ) {
        for (let FQ = new DQ(this);;) {
          let wQ = this.p.parser.stateSlot(FQ.state, 4) || this.p.parser.hasAction(FQ.state, QQ);
          if (0 == wQ) return !1;
          if (0 == (65536 & wQ)) return !0;
          FQ.reduce(wQ)
        }
      }
      recoverByInsert(QQ) {
        if (this.stack.length >= 300) return [];
        let FQ = this.p.parser.nextStates(this.state);
        if (FQ.length > 8 || this.stack.length >= 120) {
          let wQ = [];
          for (let LQ, qQ = 0; qQ < FQ.length; qQ += 2)(LQ = FQ[qQ + 1]) != this.state && this.p.parser.hasAction(LQ, QQ) && wQ.push(FQ[qQ], LQ);
          if (this.stack.length < 120)
            for (let QQ = 0; wQ.length < 8 && QQ < FQ.length; QQ += 2) {
              let LQ = FQ[QQ + 1];
              wQ.some(((QQ, FQ) => 1 & FQ && QQ == LQ)) || wQ.push(FQ[QQ], LQ)
            }
          FQ = wQ
        }
        let wQ = [];
        for (let LQ = 0; LQ < FQ.length && wQ.length < 4; LQ += 2) {
          let QQ = FQ[LQ + 1];
          if (QQ == this.state) continue;
          let qQ = this.split();
          qQ.pushState(QQ, this.pos), qQ.storeNode(0, qQ.pos, qQ.pos, 4, !0), qQ.shiftContext(FQ[LQ], this.pos), qQ.reducePos = this.pos, qQ.score -= 200, wQ.push(qQ)
        }
        return wQ
      }
      forceReduce() {
        let {
          parser: QQ
        } = this.p, FQ = QQ.stateSlot(this.state, 5);
        if (0 == (65536 & FQ)) return !1;
        if (!QQ.validAction(this.state, FQ)) {
          let wQ = FQ >> 19,
            LQ = 65535 & FQ,
            qQ = this.stack.length - 3 * wQ;
          if (qQ < 0 || QQ.getGoto(this.stack[qQ], LQ, !1) < 0) {
            let QQ = this.findForcedReduction();
            if (null == QQ) return !1;
            FQ = QQ
          }
          this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100
        }
        return this.reducePos = this.pos, this.reduce(FQ), !0
      }
      findForcedReduction() {
        let {
          parser: QQ
        } = this.p, FQ = [], wQ = (LQ, qQ) => {
          if (!FQ.includes(LQ)) return FQ.push(LQ), QQ.allActions(LQ, (FQ => {
            if (393216 & FQ);
            else if (65536 & FQ) {
              let wQ = (FQ >> 19) - qQ;
              if (wQ > 1) {
                let LQ = 65535 & FQ,
                  qQ = this.stack.length - 3 * wQ;
                if (qQ >= 0 && QQ.getGoto(this.stack[qQ], LQ, !1) >= 0) return wQ << 19 | 65536 | LQ
              }
            } else {
              let QQ = wQ(FQ, qQ + 1);
              if (null != QQ) return QQ
            }
          }))
        };
        return wQ(this.state, 0)
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
        for (let FQ = 0; FQ < this.stack.length; FQ += 3)
          if (this.stack[FQ] != QQ.stack[FQ]) return !1;
        return !0
      }
      get parser() {
        return this.p.parser
      }
      dialectEnabled(QQ) {
        return this.p.parser.dialect.flags[QQ]
      }
      shiftContext(QQ, FQ) {
        this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, QQ, this, this.p.stream.reset(FQ)))
      }
      reduceContext(QQ, FQ) {
        this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, QQ, this, this.p.stream.reset(FQ)))
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
          let FQ = new oQ(this.curContext.tracker, QQ);
          FQ.hash != this.curContext.hash && this.emitContext(), this.curContext = FQ
        }
      }
      setLookAhead(QQ) {
        return !(QQ <= this.lookAhead) && (this.emitLookAhead(), this.lookAhead = QQ, !0)
      }
      close() {
        this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead()
      }
    }
    class oQ {
      constructor(QQ, FQ) {
        this.tracker = QQ, this.context = FQ, this.hash = QQ.strict ? QQ.hash(FQ) : 0
      }
    }
    class DQ {
      constructor(QQ) {
        this.start = QQ, this.state = QQ.state, this.stack = QQ.stack, this.base = this.stack.length
      }
      reduce(QQ) {
        let FQ = 65535 & QQ,
          wQ = QQ >> 19;
        0 == wQ ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= 3 * (wQ - 1);
        let LQ = this.start.p.parser.getGoto(this.stack[this.base - 3], FQ, !0);
        this.state = LQ
      }
    }
    class kQ {
      constructor(QQ, FQ, wQ) {
        this.stack = QQ, this.pos = FQ, this.index = wQ, this.buffer = QQ.buffer, 0 == this.index && this.maybeNext()
      }
      static create(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QQ.bufferBase + QQ.buffer.length;
        return new kQ(QQ, FQ, FQ - QQ.bufferBase)
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
        return new kQ(this.stack, this.pos, this.index)
      }
    }

    function vQ(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uint16Array;
      if ("string" != typeof QQ) return QQ;
      let wQ = null;
      for (let LQ = 0, qQ = 0; LQ < QQ.length;) {
        let oQ = 0;
        for (;;) {
          let FQ = QQ.charCodeAt(LQ++),
            wQ = !1;
          if (126 == FQ) {
            oQ = 65535;
            break
          }
          FQ >= 92 && FQ--, FQ >= 34 && FQ--;
          let qQ = FQ - 32;
          if (qQ >= 46 && (qQ -= 46, wQ = !0), oQ += qQ, wQ) break;
          oQ *= 46
        }
        wQ ? wQ[qQ++] = oQ : wQ = new FQ(oQ)
      }
      return wQ
    }
    class mQ {
      constructor() {
        this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0
      }
    }
    const uQ = new mQ;
    class HQ {
      constructor(QQ, FQ) {
        this.input = QQ, this.PA = FQ, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = uQ, this.rangeIndex = 0, this.pos = this.chunkPos = FQ[0].from, this.range = FQ[0], this.end = FQ[FQ.length - 1].to, this.readNext()
      }
      resolveOffset(QQ, FQ) {
        let wQ = this.range,
          LQ = this.rangeIndex,
          qQ = this.pos + QQ;
        for (; qQ < wQ.from;) {
          if (!LQ) return null;
          let QQ = this.PA[--LQ];
          qQ -= wQ.from - QQ.to, wQ = QQ
        }
        for (; FQ < 0 ? qQ > wQ.to : qQ >= wQ.to;) {
          if (LQ == this.PA.length - 1) return null;
          let QQ = this.PA[++LQ];
          qQ += QQ.from - wQ.to, wQ = QQ
        }
        return qQ
      }
      clipPos(QQ) {
        if (QQ >= this.range.from && QQ < this.range.to) return QQ;
        for (let FQ of this.PA)
          if (FQ.to > QQ) return Math.max(QQ, FQ.from);
        return this.end
      }
      peek(QQ) {
        let FQ, wQ, LQ = this.chunkOff + QQ;
        if (LQ >= 0 && LQ < this.chunk.length) FQ = this.pos + QQ, wQ = this.chunk.charCodeAt(LQ);
        else {
          let LQ = this.resolveOffset(QQ, 1);
          if (null == LQ) return -1;
          if (FQ = LQ, FQ >= this.chunk2Pos && FQ < this.chunk2Pos + this.chunk2.length) wQ = this.chunk2.charCodeAt(FQ - this.chunk2Pos);
          else {
            let QQ = this.rangeIndex,
              LQ = this.range;
            for (; LQ.to <= FQ;) LQ = this.PA[++QQ];
            this.chunk2 = this.input.chunk(this.chunk2Pos = FQ), FQ + this.chunk2.length > LQ.to && (this.chunk2 = this.chunk2.slice(0, LQ.to - FQ)), wQ = this.chunk2.charCodeAt(0)
          }
        }
        return FQ >= this.token.lookAhead && (this.token.lookAhead = FQ + 1), wQ
      }
      acceptToken(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wQ = FQ ? this.resolveOffset(FQ, -1) : this.pos;
        if (null == wQ || wQ < this.token.start) throw new RangeError("Token end out of bounds");
        this.token.value = QQ, this.token.end = wQ
      }
      acceptTokenTo(QQ, FQ) {
        this.token.value = QQ, this.token.end = FQ
      }
      getChunk() {
        if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
          let {
            chunk: QQ,
            chunkPos: FQ
          } = this;
          this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = QQ, this.chunk2Pos = FQ, this.chunkOff = this.pos - this.chunkPos
        } else {
          this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
          let QQ = this.input.chunk(this.pos),
            FQ = this.pos + QQ.length;
          this.chunk = FQ > this.range.to ? QQ.slice(0, this.range.to - this.pos) : QQ, this.chunkPos = this.pos, this.chunkOff = 0
        }
      }
      readNext() {
        return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff)
      }
      advance() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        for (this.chunkOff += QQ; this.pos + QQ >= this.range.to;) {
          if (this.rangeIndex == this.PA.length - 1) return this.setDone();
          QQ -= this.range.to - this.pos, this.range = this.PA[++this.rangeIndex], this.pos = this.range.from
        }
        return this.pos += QQ, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext()
      }
      setDone() {
        return this.pos = this.chunkPos = this.end, this.range = this.PA[this.rangeIndex = this.PA.length - 1], this.chunk = "", this.next = -1
      }
      reset(QQ, FQ) {
        if (FQ ? (this.token = FQ, FQ.start = QQ, FQ.lookAhead = QQ + 1, FQ.value = FQ.extended = -1) : this.token = uQ, this.pos != QQ) {
          if (this.pos = QQ, QQ == this.end) return this.setDone(), this;
          for (; QQ < this.range.from;) this.range = this.PA[--this.rangeIndex];
          for (; QQ >= this.range.to;) this.range = this.PA[++this.rangeIndex];
          QQ >= this.chunkPos && QQ < this.chunkPos + this.chunk.length ? this.chunkOff = QQ - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext()
        }
        return this
      }
      read(QQ, FQ) {
        if (QQ >= this.chunkPos && FQ <= this.chunkPos + this.chunk.length) return this.chunk.slice(QQ - this.chunkPos, FQ - this.chunkPos);
        if (QQ >= this.chunk2Pos && FQ <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(QQ - this.chunk2Pos, FQ - this.chunk2Pos);
        if (QQ >= this.range.from && FQ <= this.range.to) return this.input.read(QQ, FQ);
        let wQ = "";
        for (let LQ of this.PA) {
          if (LQ.from >= FQ) break;
          LQ.to > QQ && (wQ += this.input.read(Math.max(LQ.from, QQ), Math.min(LQ.to, FQ)))
        }
        return wQ
      }
    }
    class bQ {
      constructor(QQ, FQ) {
        this.data = QQ, this.id = FQ
      }
      token(QQ, FQ) {
        let {
          parser: wQ
        } = FQ.p;
        AQ(this.data, QQ, FQ, this.id, wQ.data, wQ.tokenPrecTable)
      }
    }
    bQ.prototype.contextual = bQ.prototype.fallback = bQ.prototype.extend = !1;
    class YQ {
      constructor(QQ, FQ, wQ) {
        this.precTable = FQ, this.elseToken = wQ, this.data = "string" == typeof QQ ? vQ(QQ) : QQ
      }
      token(QQ, FQ) {
        let wQ = QQ.pos,
          LQ = 0;
        for (;;) {
          let wQ = QQ.next < 0,
            qQ = QQ.resolveOffset(1, 1);
          if (AQ(this.data, QQ, FQ, 0, this.data, this.precTable), QQ.token.value > -1) break;
          if (null == this.elseToken) return;
          if (wQ || LQ++, null == qQ) break;
          QQ.reset(qQ, QQ.token)
        }
        LQ && (QQ.reset(wQ, QQ.token), QQ.acceptToken(this.elseToken, LQ))
      }
    }
    YQ.prototype.contextual = bQ.prototype.fallback = bQ.prototype.extend = !1;
    class xQ {
      constructor(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.token = QQ, this.contextual = !!FQ.contextual, this.fallback = !!FQ.fallback, this.extend = !!FQ.extend
      }
    }

    function AQ(QQ, FQ, wQ, LQ, qQ, oQ) {
      let DQ = 0,
        kQ = 1 << LQ,
        {
          dialect: vQ
        } = wQ.p.parser;
      QQ: for (; 0 != (kQ & QQ[DQ]);) {
        let wQ = QQ[DQ + 1];
        for (let HQ = DQ + 3; HQ < wQ; HQ += 2)
          if ((QQ[HQ + 1] & kQ) > 0) {
            let wQ = QQ[HQ];
            if (vQ.allows(wQ) && (-1 == FQ.token.value || FQ.token.value == wQ || eQ(wQ, FQ.token.value, qQ, oQ))) {
              FQ.acceptToken(wQ);
              break
            }
          } let LQ = FQ.next,
          mQ = 0,
          uQ = QQ[DQ + 2];
        if (!(FQ.next < 0 && uQ > mQ && 65535 == QQ[wQ + 3 * uQ - 3])) {
          for (; mQ < uQ;) {
            let qQ = mQ + uQ >> 1,
              oQ = wQ + qQ + (qQ << 1),
              kQ = QQ[oQ],
              vQ = QQ[oQ + 1] || 65536;
            if (LQ < kQ) uQ = qQ;
            else {
              if (!(LQ >= vQ)) {
                DQ = QQ[oQ + 2], FQ.advance();
                continue QQ
              }
              mQ = qQ + 1
            }
          }
          break
        }
        DQ = QQ[wQ + 3 * uQ - 1]
      }
    }

    function tQ(QQ, FQ, wQ) {
      for (let LQ, qQ = FQ; 65535 != (LQ = QQ[qQ]); qQ++)
        if (LQ == wQ) return qQ - FQ;
      return -1
    }

    function eQ(QQ, FQ, wQ, LQ) {
      let qQ = tQ(wQ, LQ, FQ);
      return qQ < 0 || tQ(wQ, LQ, QQ) < qQ
    }
    const MQ = "undefined" != typeof process && {
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
    let GQ = null;

    function pQ(QQ, FQ, wQ) {
      let qQ = QQ.cursor(LQ.f.IncludeAnonymous);
      for (qQ.moveTo(FQ);;)
        if (!(wQ < 0 ? qQ.childBefore(FQ) : qQ.childAfter(FQ)))
          for (;;) {
            if ((wQ < 0 ? qQ.to < FQ : qQ.from > FQ) && !qQ.type.isError) return wQ < 0 ? Math.max(0, Math.min(qQ.to - 1, FQ - 25)) : Math.min(QQ.length, Math.max(qQ.from + 1, FQ + 25));
            if (wQ < 0 ? qQ.prevSibling() : qQ.nextSibling()) break;
            if (!qQ.parent()) return wQ < 0 ? 0 : QQ.length
          }
    }
    class cQ {
      constructor(QQ, FQ) {
        this.fragments = QQ, this.nodeSet = FQ, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment()
      }
      nextFragment() {
        let QQ = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
        if (QQ) {
          for (this.safeFrom = QQ.openStart ? pQ(QQ.tree, QQ.from + QQ.offset, 1) - QQ.offset : QQ.from, this.safeTo = QQ.openEnd ? pQ(QQ.tree, QQ.to + QQ.offset, -1) - QQ.offset : QQ.to; this.trees.length;) this.trees.pop(), this.start.pop(), this.index.pop();
          this.trees.push(QQ.tree), this.start.push(-QQ.offset), this.index.push(0), this.nextStart = this.safeFrom
        } else this.nextStart = 1e9
      }
      nodeAt(QQ) {
        if (QQ < this.nextStart) return null;
        for (; this.fragment && this.safeTo <= QQ;) this.nextFragment();
        if (!this.fragment) return null;
        for (;;) {
          let FQ = this.trees.length - 1;
          if (FQ < 0) return this.nextFragment(), null;
          let wQ = this.trees[FQ],
            qQ = this.index[FQ];
          if (qQ == wQ.children.length) {
            this.trees.pop(), this.start.pop(), this.index.pop();
            continue
          }
          let oQ = wQ.children[qQ],
            DQ = this.start[FQ] + wQ.positions[qQ];
          if (DQ > QQ) return this.nextStart = DQ, null;
          if (oQ instanceof LQ.t) {
            if (DQ == QQ) {
              if (DQ < this.safeFrom) return null;
              let QQ = DQ + oQ.length;
              if (QQ <= this.safeTo) {
                let FQ = oQ.prop(LQ.g.lookAhead);
                if (!FQ || QQ + FQ < this.fragment.to) return oQ
              }
            }
            this.index[FQ]++, DQ + oQ.length >= Math.max(this.safeFrom, QQ) && (this.trees.push(oQ), this.start.push(DQ), this.index.push(0))
          } else this.index[FQ]++, this.nextStart = DQ + oQ.length
        }
      }
    }
    class CQ {
      constructor(QQ, FQ) {
        this.stream = FQ, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = QQ.tokenizers.map((QQ => new mQ))
      }
      getActions(QQ) {
        let FQ = 0,
          wQ = null,
          {
            parser: LQ
          } = QQ.p,
          {
            tokenizers: qQ
          } = LQ,
          oQ = LQ.stateSlot(QQ.state, 3),
          DQ = QQ.curContext ? QQ.curContext.hash : 0,
          kQ = 0;
        for (let vQ = 0; vQ < qQ.length; vQ++) {
          if (0 == (1 << vQ & oQ)) continue;
          let LQ = qQ[vQ],
            mQ = this.tokens[vQ];
          if ((!wQ || LQ.fallback) && ((LQ.contextual || mQ.start != QQ.pos || mQ.mask != oQ || mQ.context != DQ) && (this.updateCachedToken(mQ, LQ, QQ), mQ.mask = oQ, mQ.context = DQ), mQ.lookAhead > mQ.end + 25 && (kQ = Math.max(mQ.lookAhead, kQ)), 0 != mQ.value)) {
            let qQ = FQ;
            if (mQ.extended > -1 && (FQ = this.addActions(QQ, mQ.extended, mQ.end, FQ)), FQ = this.addActions(QQ, mQ.value, mQ.end, FQ), !LQ.extend && (wQ = mQ, FQ > qQ)) break
          }
        }
        for (; this.actions.length > FQ;) this.actions.pop();
        return kQ && QQ.setLookAhead(kQ), wQ || QQ.pos != this.stream.end || (wQ = new mQ, wQ.value = QQ.p.parser.eofTerm, wQ.start = wQ.end = QQ.pos, FQ = this.addActions(QQ, wQ.value, wQ.end, FQ)), this.mainToken = wQ, this.actions
      }
      getMainToken(QQ) {
        if (this.mainToken) return this.mainToken;
        let FQ = new mQ,
          {
            pos: wQ,
            p: LQ
          } = QQ;
        return FQ.start = wQ, FQ.end = Math.min(wQ + 1, LQ.stream.end), FQ.value = wQ == LQ.stream.end ? LQ.parser.eofTerm : 0, FQ
      }
      updateCachedToken(QQ, FQ, wQ) {
        let LQ = this.stream.clipPos(wQ.pos);
        if (FQ.token(this.stream.reset(LQ, QQ), wQ), QQ.value > -1) {
          let {
            parser: FQ
          } = wQ.p;
          for (let LQ = 0; LQ < FQ.specialized.length; LQ++)
            if (FQ.specialized[LQ] == QQ.value) {
              let qQ = FQ.specializers[LQ](this.stream.read(QQ.start, QQ.end), wQ);
              if (qQ >= 0 && wQ.p.parser.dialect.allows(qQ >> 1)) {
                0 == (1 & qQ) ? QQ.value = qQ >> 1 : QQ.extended = qQ >> 1;
                break
              }
            }
        } else QQ.value = 0, QQ.end = this.stream.clipPos(LQ + 1)
      }
      putAction(QQ, FQ, wQ, LQ) {
        for (let qQ = 0; qQ < LQ; qQ += 3)
          if (this.actions[qQ] == QQ) return LQ;
        return this.actions[LQ++] = QQ, this.actions[LQ++] = FQ, this.actions[LQ++] = wQ, LQ
      }
      addActions(QQ, FQ, wQ, LQ) {
        let {
          state: qQ
        } = QQ, {
          parser: oQ
        } = QQ.p, {
          data: DQ
        } = oQ;
        for (let kQ = 0; kQ < 2; kQ++)
          for (let QQ = oQ.stateSlot(qQ, kQ ? 2 : 1);; QQ += 3) {
            if (65535 == DQ[QQ]) {
              if (1 != DQ[QQ + 1]) {
                0 == LQ && 2 == DQ[QQ + 1] && (LQ = this.putAction(sQ(DQ, QQ + 2), FQ, wQ, LQ));
                break
              }
              QQ = sQ(DQ, QQ + 2)
            }
            DQ[QQ] == FQ && (LQ = this.putAction(sQ(DQ, QQ + 1), FQ, wQ, LQ))
          }
        return LQ
      }
    }
    class SQ {
      constructor(QQ, FQ, wQ, LQ) {
        this.parser = QQ, this.input = FQ, this.PA = LQ, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new HQ(FQ, LQ), this.tokens = new CQ(QQ, this.stream), this.topTerm = QQ.top[1];
        let {
          from: oQ
        } = LQ[0];
        this.stacks = [qQ.start(this, QQ.top[0], oQ)], this.fragments = wQ.length && this.stream.end - oQ > 4 * QQ.bufferLength ? new cQ(wQ, QQ.nodeSet) : null
      }
      get parsedPos() {
        return this.minStackPos
      }
      advance() {
        let QQ, FQ, wQ = this.stacks,
          LQ = this.minStackPos,
          qQ = this.stacks = [];
        if (this.bigReductionCount > 300 && 1 == wQ.length) {
          let [QQ] = wQ;
          for (; QQ.forceReduce() && QQ.stack.length && QQ.stack[QQ.stack.length - 2] >= this.lastBigReductionStart;);
          this.bigReductionCount = this.lastBigReductionSize = 0
        }
        for (let oQ = 0; oQ < wQ.length; oQ++) {
          let DQ = wQ[oQ];
          for (;;) {
            if (this.tokens.mainToken = null, DQ.pos > LQ) qQ.push(DQ);
            else {
              if (this.advanceStack(DQ, qQ, wQ)) continue;
              {
                QQ || (QQ = [], FQ = []), QQ.push(DQ);
                let wQ = this.tokens.getMainToken(DQ);
                FQ.push(wQ.value, wQ.end)
              }
            }
            break
          }
        }
        if (!qQ.length) {
          let FQ = QQ && function(QQ) {
            let FQ = null;
            for (let wQ of QQ) {
              let QQ = wQ.p.stoppedAt;
              (wQ.pos == wQ.p.stream.end || null != QQ && wQ.pos > QQ) && wQ.p.parser.stateFlag(wQ.state, 2) && (!FQ || FQ.score < wQ.score) && (FQ = wQ)
            }
            return FQ
          }(QQ);
          if (FQ) return MQ && console.log("Finish with " + this.stackID(FQ)), this.stackToTree(FQ);
          if (this.parser.strict) throw MQ && QQ && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + LQ);
          this.recovering || (this.recovering = 5)
        }
        if (this.recovering && QQ) {
          let wQ = null != this.stoppedAt && QQ[0].pos > this.stoppedAt ? QQ[0] : this.runRecovery(QQ, FQ, qQ);
          if (wQ) return MQ && console.log("Force-finish " + this.stackID(wQ)), this.stackToTree(wQ.forceAll())
        }
        if (this.recovering) {
          let QQ = 1 == this.recovering ? 1 : 3 * this.recovering;
          if (qQ.length > QQ)
            for (qQ.sort(((QQ, FQ) => FQ.score - QQ.score)); qQ.length > QQ;) qQ.pop();
          qQ.some((QQ => QQ.reducePos > LQ)) && this.recovering--
        } else if (qQ.length > 1) {
          QQ: for (let QQ = 0; QQ < qQ.length - 1; QQ++) {
            let FQ = qQ[QQ];
            for (let wQ = QQ + 1; wQ < qQ.length; wQ++) {
              let LQ = qQ[wQ];
              if (FQ.sameState(LQ) || FQ.buffer.length > 500 && LQ.buffer.length > 500) {
                if (!((FQ.score - LQ.score || FQ.buffer.length - LQ.buffer.length) > 0)) {
                  qQ.splice(QQ--, 1);
                  continue QQ
                }
                qQ.splice(wQ--, 1)
              }
            }
          }
          qQ.length > 12 && (qQ.sort(((QQ, FQ) => FQ.score - QQ.score)), qQ.splice(12, qQ.length - 12))
        }
        this.minStackPos = qQ[0].pos;
        for (let oQ = 1; oQ < qQ.length; oQ++) qQ[oQ].pos < this.minStackPos && (this.minStackPos = qQ[oQ].pos);
        return null
      }
      stopAt(QQ) {
        if (null != this.stoppedAt && this.stoppedAt < QQ) throw new RangeError("Can't move stoppedAt forward");
        this.stoppedAt = QQ
      }
      advanceStack(QQ, FQ, wQ) {
        let qQ = QQ.pos,
          {
            parser: oQ
          } = this,
          DQ = MQ ? this.stackID(QQ) + " -> " : "";
        if (null != this.stoppedAt && qQ > this.stoppedAt) return QQ.forceReduce() ? QQ : null;
        if (this.fragments) {
          let FQ = QQ.curContext && QQ.curContext.tracker.strict,
            wQ = FQ ? QQ.curContext.hash : 0;
          for (let kQ = this.fragments.nodeAt(qQ); kQ;) {
            let qQ = this.parser.nodeSet.types[kQ.type.id] == kQ.type ? oQ.getGoto(QQ.state, kQ.type.id) : -1;
            if (qQ > -1 && kQ.length && (!FQ || (kQ.prop(LQ.g.contextHash) || 0) == wQ)) return QQ.useNode(kQ, qQ), MQ && console.log(DQ + this.stackID(QQ) + ` (via reuse of ${oQ.getName(kQ.type.id)})`), !0;
            if (!(kQ instanceof LQ.t) || 0 == kQ.children.length || kQ.positions[0] > 0) break;
            let vQ = kQ.children[0];
            if (!(vQ instanceof LQ.t && 0 == kQ.positions[0])) break;
            kQ = vQ
          }
        }
        let kQ = oQ.stateSlot(QQ.state, 4);
        if (kQ > 0) return QQ.reduce(kQ), MQ && console.log(DQ + this.stackID(QQ) + ` (via always-reduce ${oQ.getName(65535&kQ)})`), !0;
        if (QQ.stack.length >= 8400)
          for (; QQ.stack.length > 6e3 && QQ.forceReduce(););
        let vQ = this.tokens.getActions(QQ);
        for (let LQ = 0; LQ < vQ.length;) {
          let kQ = vQ[LQ++],
            mQ = vQ[LQ++],
            uQ = vQ[LQ++],
            HQ = LQ == vQ.length || !wQ,
            bQ = HQ ? QQ : QQ.split(),
            YQ = this.tokens.mainToken;
          if (bQ.apply(kQ, mQ, YQ ? YQ.start : bQ.pos, uQ), MQ && console.log(DQ + this.stackID(bQ) + ` (via ${0==(65536&kQ)?"shift":`reduce of ${oQ.getName(65535&kQ)}`} for ${oQ.getName(mQ)} @ ${qQ}${bQ==QQ?"":", split"})`), HQ) return !0;
          bQ.pos > qQ ? FQ.push(bQ) : wQ.push(bQ)
        }
        return !1
      }
      advanceFully(QQ, FQ) {
        let wQ = QQ.pos;
        for (;;) {
          if (!this.advanceStack(QQ, null, null)) return !1;
          if (QQ.pos > wQ) return iQ(QQ, FQ), !0
        }
      }
      runRecovery(QQ, FQ, wQ) {
        let LQ = null,
          qQ = !1;
        for (let oQ = 0; oQ < QQ.length; oQ++) {
          let DQ = QQ[oQ],
            kQ = FQ[oQ << 1],
            vQ = FQ[1 + (oQ << 1)],
            mQ = MQ ? this.stackID(DQ) + " -> " : "";
          if (DQ.deadEnd) {
            if (qQ) continue;
            if (qQ = !0, DQ.restart(), MQ && console.log(mQ + this.stackID(DQ) + " (restarted)"), this.advanceFully(DQ, wQ)) continue
          }
          let uQ = DQ.split(),
            HQ = mQ;
          for (let QQ = 0; QQ < 10 && uQ.forceReduce(); QQ++) {
            if (MQ && console.log(HQ + this.stackID(uQ) + " (via force-reduce)"), this.advanceFully(uQ, wQ)) break;
            MQ && (HQ = this.stackID(uQ) + " -> ")
          }
          for (let QQ of DQ.recoverByInsert(kQ)) MQ && console.log(mQ + this.stackID(QQ) + " (via recover-insert)"), this.advanceFully(QQ, wQ);
          this.stream.end > DQ.pos ? (vQ == DQ.pos && (vQ++, kQ = 0), DQ.recoverByDelete(kQ, vQ), MQ && console.log(mQ + this.stackID(DQ) + ` (via recover-delete ${this.parser.getName(kQ)})`), iQ(DQ, wQ)) : (!LQ || LQ.score < uQ.score) && (LQ = uQ)
        }
        return LQ
      }
      stackToTree(QQ) {
        return QQ.close(), LQ.t.build({
          buffer: kQ.create(QQ),
          nodeSet: this.parser.nodeSet,
          topID: this.topTerm,
          maxBufferLength: this.parser.bufferLength,
          reused: this.reused,
          start: this.PA[0].from,
          length: QQ.pos - this.PA[0].from,
          minRepeatType: this.parser.minRepeatTerm
        })
      }
      stackID(QQ) {
        let FQ = (GQ || (GQ = new WeakMap)).get(QQ);
        return FQ || GQ.set(QQ, FQ = String.fromCodePoint(this.nextStackID++)), FQ + QQ
      }
    }

    function iQ(QQ, FQ) {
      for (let wQ = 0; wQ < FQ.length; wQ++) {
        let LQ = FQ[wQ];
        if (LQ.pos == QQ.pos && LQ.sameState(QQ)) return void(FQ[wQ].score < QQ.score && (FQ[wQ] = QQ))
      }
      FQ.push(QQ)
    }
    class WQ {
      constructor(QQ, FQ, wQ) {
        this.source = QQ, this.flags = FQ, this.disabled = wQ
      }
      allows(QQ) {
        return !this.disabled || 0 == this.disabled[QQ]
      }
    }
    const RQ = QQ => QQ;
    class OQ extends LQ.q {
      constructor(QQ) {
        if (super(), this.wrappers = [], 14 != QQ.version) throw new RangeError(`Parser version (${QQ.version}) doesn't match runtime version (14)`);
        let FQ = QQ.nodeNames.split(" ");
        this.minRepeatTerm = FQ.length;
        for (let LQ = 0; LQ < QQ.repeatNodeCount; LQ++) FQ.push("");
        let wQ = Object.keys(QQ.topRules).map((FQ => QQ.topRules[FQ][1])),
          qQ = [];
        for (let LQ = 0; LQ < FQ.length; LQ++) qQ.push([]);

        function oQ(QQ, FQ, wQ) {
          qQ[QQ].push([FQ, FQ.deserialize(String(wQ))])
        }
        if (QQ.nodeProps)
          for (let kQ of QQ.nodeProps) {
            let QQ = kQ[0];
            "string" == typeof QQ && (QQ = LQ.g[QQ]);
            for (let FQ = 1; FQ < kQ.length;) {
              let wQ = kQ[FQ++];
              if (wQ >= 0) oQ(wQ, QQ, kQ[FQ++]);
              else {
                let LQ = kQ[FQ + -wQ];
                for (let qQ = -wQ; qQ > 0; qQ--) oQ(kQ[FQ++], QQ, LQ);
                FQ++
              }
            }
          }
        this.nodeSet = new LQ.h(FQ.map(((FQ, oQ) => LQ.l.define({
          name: oQ >= this.minRepeatTerm ? void 0 : FQ,
          id: oQ,
          props: qQ[oQ],
          top: wQ.indexOf(oQ) > -1,
          error: 0 == oQ,
          skipped: QQ.skippedNodes && QQ.skippedNodes.indexOf(oQ) > -1
        })))), QQ.propSources && (this.nodeSet = this.nodeSet.extend(...QQ.propSources)), this.strict = !1, this.bufferLength = LQ.e;
        let DQ = vQ(QQ.tokenData);
        this.context = QQ.context, this.specializerSpecs = QQ.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
        for (let LQ = 0; LQ < this.specializerSpecs.length; LQ++) this.specialized[LQ] = this.specializerSpecs[LQ].term;
        this.specializers = this.specializerSpecs.map(rQ), this.states = vQ(QQ.states, Uint32Array), this.data = vQ(QQ.stateData), this.goto = vQ(QQ.goto), this.maxTerm = QQ.maxTerm, this.tokenizers = QQ.tokenizers.map((QQ => "number" == typeof QQ ? new bQ(DQ, QQ) : QQ)), this.topRules = QQ.topRules, this.dialects = QQ.dialects || {}, this.dynamicPrecedences = QQ.dynamicPrecedences || null, this.tokenPrecTable = QQ.tokenPrec, this.termNames = QQ.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]]
      }
      createParse(QQ, FQ, wQ) {
        let LQ = new SQ(this, QQ, FQ, wQ);
        for (let qQ of this.wrappers) LQ = qQ(LQ, QQ, FQ, wQ);
        return LQ
      }
      getGoto(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          LQ = this.goto;
        if (FQ >= LQ[0]) return -1;
        for (let qQ = LQ[FQ + 1];;) {
          let FQ = LQ[qQ++],
            oQ = 1 & FQ,
            DQ = LQ[qQ++];
          if (oQ && wQ) return DQ;
          for (let wQ = qQ + (FQ >> 1); qQ < wQ; qQ++)
            if (LQ[qQ] == QQ) return DQ;
          if (oQ) return -1
        }
      }
      hasAction(QQ, FQ) {
        let wQ = this.data;
        for (let LQ = 0; LQ < 2; LQ++)
          for (let qQ, oQ = this.stateSlot(QQ, LQ ? 2 : 1);; oQ += 3) {
            if (65535 == (qQ = wQ[oQ])) {
              if (1 != wQ[oQ + 1]) {
                if (2 == wQ[oQ + 1]) return sQ(wQ, oQ + 2);
                break
              }
              qQ = wQ[oQ = sQ(wQ, oQ + 2)]
            }
            if (qQ == FQ || 0 == qQ) return sQ(wQ, oQ + 1)
          }
        return 0
      }
      stateSlot(QQ, FQ) {
        return this.states[6 * QQ + FQ]
      }
      stateFlag(QQ, FQ) {
        return (this.stateSlot(QQ, 0) & FQ) > 0
      }
      validAction(QQ, FQ) {
        return !!this.allActions(QQ, (QQ => QQ == FQ || null))
      }
      allActions(QQ, FQ) {
        let wQ = this.stateSlot(QQ, 4),
          LQ = wQ ? FQ(wQ) : void 0;
        for (let qQ = this.stateSlot(QQ, 1); null == LQ; qQ += 3) {
          if (65535 == this.data[qQ]) {
            if (1 != this.data[qQ + 1]) break;
            qQ = sQ(this.data, qQ + 2)
          }
          LQ = FQ(sQ(this.data, qQ + 1))
        }
        return LQ
      }
      nextStates(QQ) {
        let FQ = [];
        for (let wQ = this.stateSlot(QQ, 1);; wQ += 3) {
          if (65535 == this.data[wQ]) {
            if (1 != this.data[wQ + 1]) break;
            wQ = sQ(this.data, wQ + 2)
          }
          if (0 == (1 & this.data[wQ + 2])) {
            let QQ = this.data[wQ + 1];
            FQ.some(((FQ, wQ) => 1 & wQ && FQ == QQ)) || FQ.push(this.data[wQ], QQ)
          }
        }
        return FQ
      }
      configure(QQ) {
        let FQ = Object.assign(Object.create(OQ.prototype), this);
        if (QQ.props && (FQ.nodeSet = this.nodeSet.extend(...QQ.props)), QQ.top) {
          let wQ = this.topRules[QQ.top];
          if (!wQ) throw new RangeError(`Invalid top rule name ${QQ.top}`);
          FQ.top = wQ
        }
        return QQ.tokenizers && (FQ.tokenizers = this.tokenizers.map((FQ => {
          let wQ = QQ.tokenizers.find((QQ => QQ.from == FQ));
          return wQ ? wQ.to : FQ
        }))), QQ.specializers && (FQ.specializers = this.specializers.slice(), FQ.specializerSpecs = this.specializerSpecs.map(((wQ, LQ) => {
          let qQ = QQ.specializers.find((QQ => QQ.from == wQ.external));
          if (!qQ) return wQ;
          let oQ = Object.assign(Object.assign({}, wQ), {
            external: qQ.to
          });
          return FQ.specializers[LQ] = rQ(oQ), oQ
        }))), QQ.contextTracker && (FQ.context = QQ.contextTracker), QQ.dialect && (FQ.dialect = this.parseDialect(QQ.dialect)), null != QQ.strict && (FQ.strict = QQ.strict), QQ.wrap && (FQ.wrappers = FQ.wrappers.concat(QQ.wrap)), null != QQ.bufferLength && (FQ.bufferLength = QQ.bufferLength), FQ
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
        let FQ = this.dynamicPrecedences;
        return null == FQ ? 0 : FQ[QQ] || 0
      }
      parseDialect(QQ) {
        let FQ = Object.keys(this.dialects),
          wQ = FQ.map((() => !1));
        if (QQ)
          for (let qQ of QQ.split(" ")) {
            let QQ = FQ.indexOf(qQ);
            QQ >= 0 && (wQ[QQ] = !0)
          }
        let LQ = null;
        for (let qQ = 0; qQ < FQ.length; qQ++)
          if (!wQ[qQ])
            for (let QQ, wQ = this.dialects[FQ[qQ]]; 65535 != (QQ = this.data[wQ++]);)(LQ || (LQ = new Uint8Array(this.maxTerm + 1)))[QQ] = 1;
        return new WQ(QQ, wQ, LQ)
      }
      static deserialize(QQ) {
        return new OQ(QQ)
      }
    }

    function sQ(QQ, FQ) {
      return QQ[FQ] | QQ[FQ + 1] << 16
    }

    function rQ(QQ) {
      if (QQ.external) {
        let FQ = QQ.extend ? 1 : 0;
        return (wQ, LQ) => QQ.external(wQ, LQ) << 1 | FQ
      }
      return QQ.get
    }
    var IQ = wQ(40727);
    const UQ = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288],
      NQ = new class {
        constructor(QQ) {
          this.start = QQ.start, this.shift = QQ.shift || RQ, this.reduce = QQ.reduce || RQ, this.reuse = QQ.reuse || RQ, this.hash = QQ.hash || (() => 0), this.strict = !1 !== QQ.strict
        }
      }({
        start: !1,
        shift: (QQ, FQ) => 5 == FQ || 6 == FQ || 320 == FQ ? QQ : 321 == FQ,
        strict: !1
      }),
      TQ = new xQ(((QQ, FQ) => {
        let {
          next: wQ
        } = QQ;
        (125 == wQ || -1 == wQ || FQ.context) && QQ.acceptToken(318)
      }), {
        contextual: !0,
        fallback: !0
      }),
      KQ = new xQ(((QQ, FQ) => {
        let wQ, {
          next: LQ
        } = QQ;
        UQ.indexOf(LQ) > -1 || (47 != LQ || 47 != (wQ = QQ.peek(1)) && 42 != wQ) && (125 == LQ || 59 == LQ || -1 == LQ || FQ.context || QQ.acceptToken(316))
      }), {
        contextual: !0
      }),
      zQ = new xQ(((QQ, FQ) => {
        91 != QQ.next || FQ.context || QQ.acceptToken(317)
      }), {
        contextual: !0
      }),
      lQ = new xQ(((QQ, FQ) => {
        let {
          next: wQ
        } = QQ;
        if (43 == wQ || 45 == wQ) {
          if (QQ.advance(), wQ == QQ.next) {
            QQ.advance();
            let wQ = !FQ.context && FQ.canShift(1);
            QQ.acceptToken(wQ ? 1 : 2)
          }
        } else 63 == wQ && 46 == QQ.peek(1) && (QQ.advance(), QQ.advance(), (QQ.next < 48 || QQ.next > 57) && QQ.acceptToken(3))
      }), {
        contextual: !0
      });

    function jQ(QQ, FQ) {
      return QQ >= 65 && QQ <= 90 || QQ >= 97 && QQ <= 122 || 95 == QQ || QQ >= 192 || !FQ && QQ >= 48 && QQ <= 57
    }
    const aQ = new xQ(((QQ, FQ) => {
        if (60 != QQ.next || !FQ.dialectEnabled(0)) return;
        if (QQ.advance(), 47 == QQ.next) return;
        let wQ = 0;
        for (; UQ.indexOf(QQ.next) > -1;) QQ.advance(), wQ++;
        if (jQ(QQ.next, !0)) {
          for (QQ.advance(), wQ++; jQ(QQ.next, !1);) QQ.advance(), wQ++;
          for (; UQ.indexOf(QQ.next) > -1;) QQ.advance(), wQ++;
          if (44 == QQ.next) return;
          for (let FQ = 0;; FQ++) {
            if (7 == FQ) {
              if (!jQ(QQ.next, !0)) return;
              break
            }
            if (QQ.next != "extends".charCodeAt(FQ)) break;
            QQ.advance(), wQ++
          }
        }
        QQ.acceptToken(4, -wQ)
      })),
      XQ = (0, IQ.i)({
        "get set async static": IQ.q.modifier,
        "for while do if else switch try catch finally return throw break continue default case defer": IQ.q.controlKeyword,
        "in of await yield void typeof delete instanceof as satisfies": IQ.q.operatorKeyword,
        "let var const using function class extends": IQ.q.definitionKeyword,
        "import export from": IQ.q.moduleKeyword,
        "with debugger new": IQ.q.keyword,
        TemplateString: IQ.q.special(IQ.q.string),
        super: IQ.q.atom,
        BooleanLiteral: IQ.q.bool,
        this: IQ.q.self,
        null: IQ.q.null,
        Star: IQ.q.modifier,
        VariableName: IQ.q.variableName,
        "CallExpression/VariableName TaggedTemplateExpression/VariableName": IQ.q.function(IQ.q.variableName),
        VariableDefinition: IQ.q.definition(IQ.q.variableName),
        Label: IQ.q.labelName,
        PropertyName: IQ.q.propertyName,
        PrivatePropertyName: IQ.q.special(IQ.q.propertyName),
        "CallExpression/MemberExpression/PropertyName": IQ.q.function(IQ.q.propertyName),
        "FunctionDeclaration/VariableDefinition": IQ.q.function(IQ.q.definition(IQ.q.variableName)),
        "ClassDeclaration/VariableDefinition": IQ.q.definition(IQ.q.className),
        "NewExpression/VariableName": IQ.q.className,
        PropertyDefinition: IQ.q.definition(IQ.q.propertyName),
        PrivatePropertyDefinition: IQ.q.definition(IQ.q.special(IQ.q.propertyName)),
        UpdateOp: IQ.q.updateOperator,
        "LineComment Hashbang": IQ.q.lineComment,
        BlockComment: IQ.q.blockComment,
        Number: IQ.q.number,
        String: IQ.q.string,
        Escape: IQ.q.escape,
        ArithOp: IQ.q.arithmeticOperator,
        LogicOp: IQ.q.logicOperator,
        BitOp: IQ.q.bitwiseOperator,
        CompareOp: IQ.q.compareOperator,
        RegExp: IQ.q.regexp,
        Equals: IQ.q.definitionOperator,
        Arrow: IQ.q.function(IQ.q.punctuation),
        ": Spread": IQ.q.punctuation,
        "( )": IQ.q.paren,
        "[ ]": IQ.q.squareBracket,
        "{ }": IQ.q.brace,
        "InterpolationStart InterpolationEnd": IQ.q.special(IQ.q.brace),
        ".": IQ.q.derefOperator,
        ", ;": IQ.q.separator,
        "@": IQ.q.meta,
        TypeName: IQ.q.typeName,
        TypeDefinition: IQ.q.definition(IQ.q.typeName),
        "type enum interface implements namespace module declare": IQ.q.definitionKeyword,
        "abstract global Privacy readonly override": IQ.q.modifier,
        "is keyof unique infer asserts": IQ.q.operatorKeyword,
        JSXAttributeValue: IQ.q.attributeValue,
        JSXText: IQ.q.content,
        "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": IQ.q.angleBracket,
        "JSXIdentifier JSXNameSpacedName": IQ.q.tagName,
        "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": IQ.q.attributeName,
        "JSXBuiltin/JSXIdentifier": IQ.q.standard(IQ.q.tagName)
      }),
      fQ = {
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
      VQ = {
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
      hQ = {
        __proto__: null,
        "<": 193
      },
      JQ = OQ.deserialize({
        version: 14,
        states: "$F|Q%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Il'#IlO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JrO6[Q!0MxO'#JsO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO9XQMhO'#F|O9`Q`O'#F{OOQ!0Lf'#Js'#JsOOQ!0Lb'#Jr'#JrO9eQ`O'#GwOOQ['#K_'#K_O9pQ`O'#IYO9uQ!0LrO'#IZOOQ['#J`'#J`OOQ['#I_'#I_Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GsO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EyO;hQMhO'#FeO;xQ`O'#GsOOQO'#K`'#K`O;}Q`O'#K`O<]Q`O'#G{O<]Q`O'#G|O<]Q`O'#HOO9kQ`O'#HRO=SQ`O'#HUO>kQ`O'#CeO>{Q`O'#HcO?TQ`O'#HiO?TQ`O'#HkO`QlO'#HmO?TQ`O'#HoO?TQ`O'#HrO?YQ`O'#HxO?_Q!0LsO'#IOO%[QlO'#IQO?jQ!0LsO'#ISO?uQ!0LsO'#IUO9uQ!0LrO'#IWO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jv'#JvO%[QlO'#JvOOQO'#Jy'#JyOOQO'#Ih'#IhOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J}'#J}OC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jx'#JxODlQpO'#JyOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CD})CD}OOOO'#I`'#I`OFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ia'#IaOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Ic'#IcOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IdOGyQ`O'#JtOIxQ!fO'#JtO+}QlO'#JtOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KTOKPQ`O'#KSOKPQ`O'#KSOKXQ`O,5;^OK^Q`O'#KROOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KQONtQ`O'#KPO9eQ`O'#KPO! YQ`O'#KPO! bQ`O,5;]O! gQ`O'#KPO!#lQ!fO'#JsOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#Jz'#JzOOQO-E<j-E<jO9kQ`O,5=_O!$rQ`O,5=_O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;dO!(|QpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)[QlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IpO!+_Q!0LrO,5<iO%[QlO,5;eO!&zQMhO,5;eO!+|QMhO,5;eO!-nQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-uQ,UO'#FjO!.rQ,UO'#KXO!.^Q,UO'#KXO!.yQ,UO'#KXOOQO'#KX'#KXO!/_Q,UO,5<SOOOW,5<`,5<`O!/pQlO'#FvOOOW'#Io'#IoO7VO7dO,5<QO!/wQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<eO!1pQ`O,5<hO!3YQ(CWO'#GXO!3jQ`O'#GYO!3oQ`O'#GYO!5_Q(CWO'#G^O!6dQpO'#GbOOQO'#Gn'#GnO!,TQMhO'#GmOOQO'#Gp'#GpO!,TQMhO'#GoO!7VQ$IUO'#JlOOQ!0Lh'#Jl'#JlO!7aQ`O'#JkO!7oQ`O'#JjO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<eO1SQ`O'#DZO!,TQMhO'#GPO!,TQMhO'#GRO!8gQ`O'#GTO!8lQ`O'#GUO!3oQ`O'#G[O!,TQMhO'#GaO<]Q`O'#JkO!8qQ`O'#EqO!9`Q`O,5<gOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KR'#KRO!:iQ!0LrO'#KaO9uQ!0LrO,5=cO`QlO,5>tOOQ['#Jh'#JhOOQ[,5>u,5>uOOQ[-E<]-E<]O!<hQ!0MxO,5:bO!:]QpO,5:`O!?RQ!0MxO,5:jO%[QlO,5:jO!AiQ!0MxO,5:lOOQO,5@z,5@zO!BYQMhO,5=_O!BhQ!0LrO'#JiO9`Q`O'#JiO!ByQ!0LrO,59ZO!CUQpO,59ZO!C^QMhO,59ZO:dQMhO,59ZO!CiQ`O,5;ZO!CqQ`O'#HbO!DVQ`O'#KdO%[QlO,5;}O!:]QpO,5<PO!D_Q`O,5=zO!DdQ`O,5=zO!DiQ`O,5=zO!DwQ`O,5=zO9uQ!0LrO,5=zO<]Q`O,5=jOOQO'#Cy'#CyO!EOQpO,5=gO!EWQMhO,5=hO!EcQ`O,5=jO!EhQ!bO,5=mO!EpQ`O'#K`O?YQ`O'#HWO9kQ`O'#HYO!EuQ`O'#HYO:dQMhO'#H[O!EzQ`O'#H[OOQ[,5=p,5=pO!FPQ`O'#H]O!FbQ`O'#CoO!FgQ`O,59PO!FqQ`O,59PO!HvQlO,59POOQ[,59P,59PO!IWQ!0LrO,59PO%[QlO,59PO!KcQlO'#HeOOQ['#Hf'#HfOOQ['#Hg'#HgO`QlO,5=}O!KyQ`O,5=}O`QlO,5>TO`QlO,5>VO!LOQ`O,5>XO`QlO,5>ZO!LTQ`O,5>^O!LYQlO,5>dOOQ[,5>j,5>jO%[QlO,5>jO9uQ!0LrO,5>lOOQ[,5>n,5>nO#!dQ`O,5>nOOQ[,5>p,5>pO#!dQ`O,5>pOOQ[,5>r,5>rO##QQpO'#D_O%[QlO'#JvO##sQpO'#JvO##}QpO'#DmO#$`QpO'#DmO#&qQlO'#DmO#&xQ`O'#JuO#'QQ`O,5:WO#'VQ`O'#EtO#'eQ`O'#KUO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CUQpO,5;YO!C^QMhO,5;YO:dQMhO,5;YO#(`Q`O,5@bO#(eQ07dO,5:sOOQO-E<f-E<fO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!ByQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CUQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I^'#I^P#+RO&2DjO,58|POOO,58|,58|OOOO-E<^-E<^OOQ!0Lh1G.p1G.pOOOO-E<_-E<_OOOO,59},59}O#+^Q!bO,59}OOOO-E<a-E<aOOQ!0Lf1G/g1G/gO#+cQ!fO,5?OO+}QlO,5?OOOQO,5?U,5?UO#+mQlO'#IdOOQO-E<b-E<bO#+zQ`O,5@`O#,SQ!fO,5@`O#,ZQ`O,5@nOOQ!0Lf1G/m1G/mO%[QlO,5@oO#,cQ`O'#IjOOQO-E<h-E<hO#,ZQ`O,5@nOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@lO#,wQ!0LrO,5@lO#-YQ!0LrO,5@lO#-aQ`O,5@kO9eQ`O,5@kO#-iQ`O,5@kO#-wQ`O'#ImO#-aQ`O,5@kOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2yO9kQ`O1G2yOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0rQ!0MzO'#JlO!$wQlO1G0uO#2}Q!fO'#JwO%[QlO'#JwO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#3^Q`O1G1OO#5rQ!0MxO1G1PO#5yQ!0MxO1G1PO#8aQ!0MxO1G1PO#8hQ!0MxO1G1PO#;OQ!0MxO1G1PO#=fQ!0MxO1G1PO#=mQ!0MxO1G1PO#=tQ!0MxO1G1PO#@[Q!0MxO1G1PO#@cQ!0MxO1G1PO#BpQ?MtO'#CiO#DkQ?MtO1G1`O#DrQ?MtO'#JsO#EVQ!0MxO,5?[OOQ!0Lb-E<n-E<nO#GdQ!0MxO1G1PO#HaQ!0MzO1G1POOQ!0Lf1G1P1G1PO#IdQMjO'#J|O#InQ`O,5:xO#IsQ!0MxO1G1cO#JgQ,UO,5<WO#JoQ,UO,5<XO#JwQ,UO'#FoO#K`Q`O'#FnOOQO'#KY'#KYOOQO'#In'#InO#KeQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#KvQ?MtO'#JrO#LQQ`O,5<bO!)[QlO,5<bOOOW-E<m-E<mOOQ!0Lf1G1l1G1lO#LVQpO'#KXOOQ!0Lf,5<d,5<dO#L_QpO,5<dO#LdQMhO'#DTOOOO'#Ib'#IbO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8lQ`O'#IrO#LvQ`O,5<zOOQ!0Lh,5<w,5<wO!,TQMhO'#IuO#MdQMjO,5=XO!,TQMhO'#IwO#NVQMjO,5=ZO!&zQMhO,5=]OOQO1G2S1G2SO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GbO$!dQ!dO,5<sO$!kQ`O'#K[O9eQ`O'#K[O$!yQ`O,5<uO$#aQ!dO'#C{O!,TQMhO,5<tO$#kQ`O'#GZO$$PQ`O,5<tO$$UQ!dO'#GWO$$cQ!dO'#K]O$$mQ`O'#K]O!&zQMhO'#K]O$$rQ`O,5<xO$$wQlO'#JvO$%RQpO'#GcO#$`QpO'#GcO$%dQ`O'#GgO!3oQ`O'#GkO$%iQ!0LrO'#ItO$%tQpO,5<|OOQ!0Lp,5<|,5<|O$%{QpO'#GcO$&YQpO'#GdO$&kQpO'#GdO$&pQMjO,5=XO$'QQMjO,5=ZOOQ!0Lh,5=^,5=^O!,TQMhO,5@VO!,TQMhO,5@VO$'bQ`O'#IyO$'vQ`O,5@UO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@VO$)TQ$IYO,59uOOQ!0Lh'#Jp'#JpO$)vQMjO,5<kO$*iQMjO,5<mO@zQ`O,5<oOOQ!0Lh,5<p,5<pO$*sQ`O,5<vO$*xQMjO,5<{O$+YQ`O'#KPO!$wQlO1G2RO$+_Q`O1G2RO9eQ`O'#KSO9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I{O$+dQ!0LrO,5@{OOQ[1G2}1G2}OOQ[1G4`1G4`OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-fQ!0MxO1G0UOOQ[1G2y1G2yO!&zQMhO1G2yO%[QlO1G2yO#.tQ`O1G2yO$/jQMhO'#EkOOQ!0Lb,5@T,5@TO$/wQ!0LrO,5@TOOQ[1G.u1G.uO!ByQ!0LrO1G.uO!CUQpO1G.uO!C^QMhO1G.uO$0YQ`O1G0uO$0_Q`O'#CiO$0jQ`O'#KeO$0rQ`O,5=|O$0wQ`O'#KeO$0|Q`O'#KeO$1[Q`O'#JRO$1jQ`O,5AOO$1rQ!fO1G1iOOQ!0Lf1G1k1G1kO9kQ`O1G3fO@zQ`O1G3fO$1yQ`O1G3fO$2OQ`O1G3fO!DiQ`O1G3fO9uQ!0LrO1G3fOOQ[1G3f1G3fO!EcQ`O1G3UO!&zQMhO1G3RO$2TQ`O1G3ROOQ[1G3S1G3SO!&zQMhO1G3SO$2YQ`O1G3SO$2bQpO'#HQOOQ[1G3U1G3UO!6_QpO'#I}O!EhQ!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$2jQMhO,5=tO9kQ`O,5=tO$%dQ`O,5=vO9`Q`O,5=vO!CUQpO,5=vO!C^QMhO,5=vO:dQMhO,5=vO$2xQ`O'#KcO$3TQ`O,5=wOOQ[1G.k1G.kO$3YQ!0LrO1G.kO@zQ`O1G.kO$3eQ`O1G.kO9uQ!0LrO1G.kO$5mQ!fO,5AQO$5zQ`O,5AQO9eQ`O,5AQO$6VQlO,5>PO$6^Q`O,5>POOQ[1G3i1G3iO`QlO1G3iOOQ[1G3o1G3oOOQ[1G3q1G3qO?TQ`O1G3sO$6cQlO1G3uO$:gQlO'#HtOOQ[1G3x1G3xO$:tQ`O'#HzO?YQ`O'#H|OOQ[1G4O1G4OO$:|QlO1G4OO9uQ!0LrO1G4UOOQ[1G4W1G4WOOQ!0Lb'#G_'#G_O9uQ!0LrO1G4YO9uQ!0LrO1G4[O$?TQ`O,5@bO!)[QlO,5;`O9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CUQpO,5:XO$?YQ?MtO,5:XOOQO,5;`,5;`O$?dQpO'#IeO$?zQ`O,5@aOOQ!0Lf1G/r1G/rO$@SQpO'#IkO$@^Q`O,5@pOOQ!0Lb1G0y1G0yO#$`QpO,5:XOOQO'#Ig'#IgO$@fQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CUQpO1G0tO!C^QMhO1G0tOOQ!0Lb1G5|1G5|O!ByQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@mQ!0LrO1G0mO$@xQ!0LrO1G0mO!CUQpO1G0^ODWQpO1G0^O$AWQ!0LrO1G0mOOQO1G0^1G0^O$AlQ!0MxO1G0mPOOO-E<[-E<[POOO1G.h1G.hOOOO1G/i1G/iO$AvQ!bO,5<iO$BOQ!fO1G4jOOQO1G4p1G4pO%[QlO,5?OO$BYQ`O1G5zO$BbQ`O1G6YO$BjQ!fO1G6ZO9eQ`O,5?UO$BtQ!0MxO1G6WO%[QlO1G6WO$CUQ!0LrO1G6WO$CgQ`O1G6VO$CgQ`O1G6VO9eQ`O1G6VO$CoQ`O,5?XO9eQ`O,5?XOOQO,5?X,5?XO$DTQ`O,5?XO$+YQ`O,5?XOOQO-E<k-E<kOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(e7+(eO!&zQMhO7+(eO%[QlO7+(eO$DcQ`O7+(eO$DnQMhO7+(eO$D|Q!0MzO,5=XO$GXQ!0MzO,5=ZO$IdQ!0MzO,5=XO$KuQ!0MzO,5=ZO$NWQ!0MzO,59uO%!]Q!0MzO,5<kO%$hQ!0MzO,5<mO%&sQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%)UQ!0MxO7+&aO%)xQlO'#IfO%*VQ`O,5@cO%*_Q!fO,5@cOOQ!0Lf1G0P1G0PO%*iQ`O7+&jOOQ!0Lf7+&j7+&jO%*nQ?MtO,5:fO%[QlO7+&zO%*xQ?MtO,5:bO%+VQ?MtO,5:jO%+aQ?MtO,5:lO%+kQMhO'#IiO%+uQ`O,5@hOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%+}Q!jO,5<ZO!)[QlO,5<YOOQO-E<l-E<lOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%,YQ`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%,_Q!dO,59oOOOO-E<`-E<`OOQ!0Lh1G/X1G/XO%,fQ!0MxO7+'kOOQ!0Lh,5?^,5?^O%-YQMhO1G2fP%-aQ`O'#IrPOQ!0Lh-E<p-E<pO%-}QMjO,5?aOOQ!0Lh-E<s-E<sO%.pQMjO,5?cOOQ!0Lh-E<u-E<uO%.zQ!dO1G2wO%/RQ!dO'#CrO%/iQMhO'#KSO$$wQlO'#JvOOQ!0Lh1G2_1G2_O%/sQ`O'#IqO%0[Q`O,5@vO%0[Q`O,5@vO%0dQ`O,5@vO%0oQ`O,5@vOOQO1G2a1G2aO%0}QMjO1G2`O$+YQ`O'#K[O!,TQMhO1G2`O%1_Q(CWO'#IsO%1lQ`O,5@wO!&zQMhO,5@wO%1tQ!dO,5@wOOQ!0Lh1G2d1G2dO%4UQ!fO'#CiO%4`Q`O,5=POOQ!0Lb,5<},5<}O%4hQpO,5<}OOQ!0Lb,5=O,5=OOCwQ`O,5<}O%4sQpO,5<}OOQ!0Lb,5=R,5=RO$+YQ`O,5=VOOQO,5?`,5?`OOQO-E<r-E<rOOQ!0Lp1G2h1G2hO#$`QpO,5<}O$$wQlO,5=PO%5RQ`O,5=OO%5^QpO,5=OO!,TQMhO'#IuO%6WQMjO1G2sO!,TQMhO'#IwO%6yQMjO1G2uO%7TQMjO1G5qO%7_QMjO1G5qOOQO,5?e,5?eOOQO-E<w-E<wOOQO1G.{1G.{O!,TQMhO1G5qO!,TQMhO1G5qO!:]QpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%7lQ`O1G2ZO!,TQMhO1G2bO%7qQ!0MxO7+'mOOQ!0Lf7+'m7+'mO!$wQlO7+'mO%8eQ`O,5;`OOQ!0Lb,5?g,5?gOOQ!0Lb-E<y-E<yO%8jQ!dO'#K^O#(ZQ`O7+(eO4UQ!fO7+(eO$DfQ`O7+(eO%8tQ!0MvO'#CiO%9XQ!0MvO,5=SO%9lQ`O,5=SO%9tQ`O,5=SOOQ!0Lb1G5o1G5oOOQ[7+$a7+$aO!ByQ!0LrO7+$aO!CUQpO7+$aO!$wQlO7+&aO%9yQ`O'#JQO%:bQ`O,5APOOQO1G3h1G3hO9kQ`O,5APO%:bQ`O,5APO%:jQ`O,5APOOQO,5?m,5?mOOQO-E=P-E=POOQ!0Lf7+'T7+'TO%:oQ`O7+)QO9uQ!0LrO7+)QO9kQ`O7+)QO@zQ`O7+)QO%:tQ`O7+)QOOQ[7+)Q7+)QOOQ[7+(p7+(pO%:yQ!0MvO7+(mO!&zQMhO7+(mO!E^Q`O7+(nOOQ[7+(n7+(nO!&zQMhO7+(nO%;TQ`O'#KbO%;`Q`O,5=lOOQO,5?i,5?iOOQO-E<{-E<{OOQ[7+(s7+(sO%<rQpO'#HZOOQ[1G3`1G3`O!&zQMhO1G3`O%[QlO1G3`O%<yQ`O1G3`O%=UQMhO1G3`O9uQ!0LrO1G3bO$%dQ`O1G3bO9`Q`O1G3bO!CUQpO1G3bO!C^QMhO1G3bO%=dQ`O'#JPO%=xQ`O,5@}O%>QQpO,5@}OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>]Q`O7+$VO%[QlO1G6lO%[QlO1G6mO%>bQ!0LrO1G6lO%>lQlO1G3kO%>sQ`O1G3kO%>xQlO1G3kOOQ[7+)T7+)TO9uQ!0LrO7+)_O`QlO7+)aOOQ['#Kh'#KhOOQ['#JS'#JSO%?PQlO,5>`OOQ[,5>`,5>`O%[QlO'#HuO%?^Q`O'#HwOOQ[,5>f,5>fO9eQ`O,5>fOOQ[,5>h,5>hOOQ[7+)j7+)jOOQ[7+)p7+)pOOQ[7+)t7+)tOOQ[7+)v7+)vO%?cQpO1G5|O%?}Q?MtO1G0zO%@XQ`O1G0zOOQO1G/s1G/sO%@dQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?V,5?VOOQO-E<i-E<iO!CUQpO1G/sOOQO-E<e-E<eOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CUQpO7+&`OOQO7+%x7+%xO$AlQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@nQ!0LrO7+&XO!ByQ!0LrO7+%xO!CUQpO7+%xO%@yQ!0LrO7+&XO%AXQ!0MxO7++rO%[QlO7++rO%AiQ`O7++qO%AiQ`O7++qOOQO1G4s1G4sO9eQ`O1G4sO%AqQ`O1G4sOOQS7+%}7+%}O#(ZQ`O<<LPO4UQ!fO<<LPO%BPQ`O<<LPOOQ[<<LP<<LPO!&zQMhO<<LPO%[QlO<<LPO%BXQ`O<<LPO%BdQ!0MzO,5?aO%DoQ!0MzO,5?cO%FzQ!0MzO1G2`O%I]Q!0MzO1G2sO%KhQ!0MzO1G2uO%MsQ!fO,5?QO%[QlO,5?QOOQO-E<d-E<dO%M}Q`O1G5}OOQ!0Lf<<JU<<JUO%NVQ?MtO1G0uO&!^Q?MtO1G1PO&!eQ?MtO1G1PO&$fQ?MtO1G1PO&$mQ?MtO1G1PO&&nQ?MtO1G1PO&(oQ?MtO1G1PO&(vQ?MtO1G1PO&(}Q?MtO1G1PO&+OQ?MtO1G1PO&+VQ?MtO1G1PO&+^Q!0MxO<<JfO&-UQ?MtO1G1PO&.RQ?MvO1G1PO&/UQ?MvO'#JlO&1[Q?MtO1G1cO&1iQ?MtO1G0UO&1sQMjO,5?TOOQO-E<g-E<gO!)[QlO'#FqOOQO'#KZ'#KZOOQO1G1u1G1uO&1}Q`O1G1tO&2SQ?MtO,5?[OOOW7+'h7+'hOOOO1G/Z1G/ZO&2^Q!dO1G4xOOQ!0Lh7+(Q7+(QP!&zQMhO,5?^O!,TQMhO7+(cO&2eQ`O,5?]O9eQ`O,5?]O$+YQ`O,5?]OOQO-E<o-E<oO&2sQ`O1G6bO&2sQ`O1G6bO&2{Q`O1G6bO&3WQMjO7+'zO&3hQ!dO,5?_O&3rQ`O,5?_O!&zQMhO,5?_OOQO-E<q-E<qO&3wQ!dO1G6cO&4RQ`O1G6cO&4ZQ`O1G2kO!&zQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%4hQpO1G2iO!CUQpO1G2iOCwQ`O1G2iOOQ!0Lb1G2q1G2qO&4`QpO1G2iO&4nQ`O1G2kO$+YQ`O1G2jOCwQ`O1G2jO$$wQlO1G2kO&4vQ`O1G2jO&5jQMjO,5?aOOQ!0Lh-E<t-E<tO&6]QMjO,5?cOOQ!0Lh-E<v-E<vO!,TQMhO7++]O&6gQMjO7++]O&6qQMjO7++]OOQ!0Lh1G/c1G/cO&7OQ`O1G/cOOQ!0Lh7+'u7+'uO&7TQMjO7+'|O&7eQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&8XQ`O1G0zO!&zQMhO'#IzO&8^Q`O,5@xO&:`Q!fO<<LPO!&zQMhO1G2nO&:gQ!0LrO1G2nOOQ[<<G{<<G{O!ByQ!0LrO<<G{O&:xQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?l,5?lO&;lQ`O,5?lO&;qQ`O,5?lOOQO-E=O-E=OO&<PQ`O1G6kO&<PQ`O1G6kO9kQ`O1G6kO@zQ`O<<LlOOQ[<<Ll<<LlO&<XQ`O<<LlO9uQ!0LrO<<LlO9kQ`O<<LlOOQ[<<LX<<LXO%:yQ!0MvO<<LXOOQ[<<LY<<LYO!E^Q`O<<LYO&<^QpO'#I|O&<iQ`O,5@|O!)[QlO,5@|OOQ[1G3W1G3WOOQO'#JO'#JOO9uQ!0LrO'#JOO&<qQpO,5=uOOQ[,5=u,5=uO&<xQpO'#EgO&=PQpO'#GeO&=UQ`O7+(zO&=ZQ`O7+(zOOQ[7+(z7+(zO!&zQMhO7+(zO%[QlO7+(zO&=cQ`O7+(zOOQ[7+(|7+(|O9uQ!0LrO7+(|O$%dQ`O7+(|O9`Q`O7+(|O!CUQpO7+(|O&=nQ`O,5?kOOQO-E<}-E<}OOQO'#H^'#H^O&=yQ`O1G6iO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>RQ`O7+,WO&>WQ`O7+,XO%[QlO7+,WO%[QlO7+,XOOQ[7+)V7+)VO&>]Q`O7+)VO&>bQlO7+)VO&>iQ`O7+)VOOQ[<<Ly<<LyOOQ[<<L{<<L{OOQ[-E=Q-E=QOOQ[1G3z1G3zO&>nQ`O,5>aOOQ[,5>c,5>cO&>sQ`O1G4QO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&>xQ?MtO1G6ZO?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AlQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!ByQ!0LrO<<IdO&?SQ!0LrO<<IsO&?_Q!0MxO<= ^O&?oQ`O<= ]OOQO7+*_7+*_O9eQ`O7+*_OOQ[ANAkANAkO&?wQ!fOANAkO!&zQMhOANAkO#(ZQ`OANAkO4UQ!fOANAkO&@OQ`OANAkO%[QlOANAkO&@WQ!0MzO7+'zO&BiQ!0MzO,5?aO&DtQ!0MzO,5?cO&GPQ!0MzO7+'|O&IbQ!fO1G4lO&IlQ?MtO7+&aO&KpQ?MvO,5=XO&MwQ?MvO,5=ZO&NXQ?MvO,5=XO&NiQ?MvO,5=ZO&NyQ?MvO,59uO'#PQ?MvO,5<kO'%SQ?MvO,5<mO''hQ?MvO,5<{O')^Q?MtO7+'kO')kQ?MtO7+'mO')xQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*d7+*dO')}QMjO<<K}OOQO1G4w1G4wO'*UQ`O1G4wO'*aQ`O1G4wO'*oQ`O7++|O'*oQ`O7++|O!&zQMhO1G4yO'*wQ!dO1G4yO'+RQ`O7++}O'+ZQ`O7+(VO'+fQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!CUQpO7+(TOCwQ`O7+(TO'+pQ`O7+(VO!&zQMhO7+(VO$+YQ`O7+(UO'+uQ`O7+(VOCwQ`O7+(UO'+}QMjO<<NwO!,TQMhO<<NwOOQ!0Lh7+$}7+$}O',XQ!dO,5?fOOQO-E<x-E<xO',cQ!0MvO7+(YO!&zQMhO7+(YOOQ[AN=gAN=gO9kQ`O1G5WOOQO1G5W1G5WO',sQ`O1G5WO',xQ`O7+,VO',xQ`O7+,VO9uQ!0LrOANBWO@zQ`OANBWOOQ[ANBWANBWO'-QQ`OANBWOOQ[ANAsANAsOOQ[ANAtANAtO'-VQ`O,5?hOOQO-E<z-E<zO'-bQ?MtO1G6hOOQO,5?j,5?jOOQO-E<|-E<|OOQ[1G3a1G3aO'-lQ`O,5=POOQ[<<Lf<<LfO!&zQMhO<<LfO&=UQ`O<<LfO'-qQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9uQ!0LrO<<LhO$%dQ`O<<LhO9`Q`O<<LhO'-yQpO1G5VO'.UQ`O7+,TOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= r<= rOOQ[<= s<= sO'.^Q`O<= rO'.cQ`O<= sOOQ[<<Lq<<LqO'.hQ`O<<LqO'.mQlO<<LqOOQ[1G3{1G3{O?YQ`O7+)lO'.tQ`O<<JQO'/PQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AlQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<My<<MyOOQ[G27VG27VO!&zQMhOG27VO#(ZQ`OG27VO'/ZQ!fOG27VO4UQ!fOG27VO'/bQ`OG27VO'/jQ?MtO<<JfO'/wQ?MvO1G2`O'1mQ?MvO,5?aO'3pQ?MvO,5?cO'5sQ?MvO1G2sO'7vQ?MvO1G2uO'9yQ?MtO<<KXO':WQ?MtO<<I{OOQO1G1w1G1wO!,TQMhOANAiOOQO7+*c7+*cO':eQ`O7+*cO':pQ`O<= hO':xQ!dO7+*eOOQ!0Lb<<Kq<<KqO$+YQ`O<<KqOCwQ`O<<KqO';SQ`O<<KqO!&zQMhO<<KqOOQ!0Lb<<Ko<<KoO!CUQpO<<KoO';_Q!dO<<KqOOQ!0Lb<<Kp<<KpO';iQ`O<<KqO!&zQMhO<<KqO$+YQ`O<<KpO';nQMjOANDcO';xQ!0MvO<<KtOOQO7+*r7+*rO9kQ`O7+*rO'<YQ`O<= qOOQ[G27rG27rO9uQ!0LrOG27rO@zQ`OG27rO!)[QlO1G5SO'<bQ`O7+,SO'<jQ`O1G2kO&=UQ`OANBQOOQ[ANBQANBQO!&zQMhOANBQO'<oQ`OANBQOOQ[ANBSANBSO9uQ!0LrOANBSO$%dQ`OANBSOOQO'#H_'#H_OOQO7+*q7+*qOOQ[G22wG22wOOQ[ANE^ANE^OOQ[ANE_ANE_OOQ[ANB]ANB]O'<wQ`OANB]OOQ[<<MW<<MWO!)[QlOAN?lOOQOG24yG24yO$AlQ!0MxOG24yO#(ZQ`OLD,qOOQ[LD,qLD,qO!&zQMhOLD,qO'<|Q!fOLD,qO'=TQ?MvO7+'zO'>yQ?MvO,5?aO'@|Q?MvO,5?cO'CPQ?MvO7+'|O'DuQMjOG27TOOQO<<M}<<M}OOQ!0LbANA]ANA]O$+YQ`OANA]OCwQ`OANA]O'EVQ!dOANA]OOQ!0LbANAZANAZO'E^Q`OANA]O!&zQMhOANA]O'EiQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N^<<N^OOQ[LD-^LD-^O9uQ!0LrOLD-^O'EsQ?MtO7+*nOOQO'#Gf'#GfOOQ[G27lG27lO&=UQ`OG27lO!&zQMhOG27lOOQ[G27nG27nO9uQ!0LrOG27nOOQ[G27wG27wO'E}Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#(ZQ`O!$(!]O!&zQMhO!$(!]O'FXQ!0MzOG27TOOQ!0LbG26wG26wO$+YQ`OG26wO'HjQ`OG26wOCwQ`OG26wO'HuQ!dOG26wO!&zQMhOG26wOOQ[!$(!x!$(!xOOQ[LD-WLD-WO&=UQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#(ZQ`O!)9EwOOQ!0LbLD,cLD,cO$+YQ`OLD,cOCwQ`OLD,cO'H|Q`OLD,cO'IXQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'I`Q?MvOG27TOOQ!0Lb!$( }!$( }O$+YQ`O!$( }OCwQ`O!$( }O'KUQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$+YQ`O!)9EiOCwQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$+YQ`O!.K;TOOQ!0Lb!4/0o!4/0oO!)[QlO'#DzO1PQ`O'#EXO'KaQ!fO'#JrO'KhQ!L^O'#DvO'KoQlO'#EOO'KvQ!fO'#CiO'N^Q!fO'#CiO!)[QlO'#EQO'NnQlO,5;ZO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO'#IpO(!qQ`O,5<iO!)[QlO,5;eO(!yQMhO,5;eO($dQMhO,5;eO!)[QlO,5;wO!&zQMhO'#GmO(!yQMhO'#GmO!&zQMhO'#GoO(!yQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GPO(!yQMhO'#GPO!&zQMhO'#GRO(!yQMhO'#GRO!&zQMhO'#GaO(!yQMhO'#GaO!)[QlO,5:jO($kQpO'#D_O($uQpO'#JvO!)[QlO,5@oO'NnQlO1G0uO(%PQ?MtO'#CiO!)[QlO1G2PO!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO(%ZQ!dO'#CrO!&zQMhO,5<tO(!yQMhO,5<tO'NnQlO1G2RO!)[QlO7+&zO!&zQMhO1G2`O(!yQMhO1G2`O!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO!&zQMhO1G2bO(!yQMhO1G2bO'NnQlO7+'mO'NnQlO7+&aO!&zQMhOANAiO(!yQMhOANAiO(%nQ`O'#EoO(%sQ`O'#EoO(%{Q`O'#F]O(&QQ`O'#EyO(&VQ`O'#KTO(&bQ`O'#KRO(&mQ`O,5;ZO(&rQMjO,5<eO(&yQ`O'#GYO('OQ`O'#GYO('TQ`O,5<eO(']Q`O,5<gO('eQ`O,5;ZO('mQ?MtO1G1`O('tQ`O,5<tO('yQ`O,5<tO((OQ`O,5<vO((TQ`O,5<vO((YQ`O1G2RO((_Q`O1G0uO((dQMjO<<K}O((kQMjO<<K}O((rQMhO'#F|O9`Q`O'#F{OAuQ`O'#EnO!)[QlO,5;tO!3oQ`O'#GYO!3oQ`O'#GYO!3oQ`O'#G[O!3oQ`O'#G[O!,TQMhO7+(cO!,TQMhO7+(cO%.zQ!dO1G2wO%.zQ!dO1G2wO!&zQMhO,5=]O!&zQMhO,5=]",
        stateData: "()x~O'|OS'}OSTOS(ORQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&W!WO&^!XO&`!YO&b!ZO&d![O&g!]O&m!^O&s!_O&u!`O&w!aO&y!bO&{!cO(TSO(VTO(YUO(aVO(o[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O(O!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'z]X(a]X(r]X(y]X(z]X~O!g%RX~P(qO_!}O(V#PO(W!}O(X#PO~O_#QO(X#PO(Y#PO(Z#QO~Ox#SO!U#TO(b#TO(c#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T<ZO(VTO(YUO(aVO(o[O~O![#ZO!]#WO!Y(hP!Y(vP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(VTO(YUO(aVO(o[O~Op#mO![#iO!|]O#i#lO#j#iO(T<[O!k(sP~P.iO!l#oO(T#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa(fX'z(fX'w(fX!k(fX!Y(fX!_(fX%i(fX!g(fX~P1qO#S$dO#`$eO$Q$eOP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX!_(gX%i(gX~Oa(gX'z(gX'w(gX!Y(gX!k(gXv(gX!g(gX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T$sO(VTO(YUO(a$uO(y$}O(z%POg(^P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(T%gO~O!g%mO~Oa%nO'z%nO~O!Q%rO~P%[O(U!lO~P%[O%n%vO~P%[Oh%VO!l%eO(T%gO(U!lO~Oe%}O!l%eO(T%gO~Oj$RO~O!_&PO(T%gO(U!lO(VTO(YUO`)WP~O!Q&SO!l&RO%j&VO&T&WO~P;SO!x#sO~O%s&YO!S)SX!_)SX(T)SX~O(T&ZO~Ol!PO!u&`O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&eOe&dO!x&bO%h&cO%{&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&kO#`&nO%j&iO(U!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'x&{O'z%nO~Oa%nO'x'OO'z%nO~Oa%nO'x'QO'z%nO~O'w]X!Y]Xv]X!k]X&[]X!_]X%i]X!g]X~P(qO!b'_O!c'WO!d'WO(U!lO(VTO(YUO~Os'UO!S'TO!['XO(e'SO!^(iP!^(xP~P@nOn'bO!_'`O(T%gO~Oe'gO!l%eO(T%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<VO#T!pO#U!pO#W!pO#X!pO(U!lO(VTO(YUO(e!mO(o!sO~O!b'mO!c'lO!d'lO#V!pO#['nO#]'nO~PBYOa%nOh%VO!g#vO!l%eO'z%nO(r'pO~O!p'tO#`'rO~PChOs!nO!S!oO(VTO(YUO(e!mO(o!sO~O!_XOs(mX!S(mX!b(mX!c(mX!d(mX!|(mX#T(mX#U(mX#V(mX#W(mX#X(mX#[(mX#](mX(U(mX(V(mX(Y(mX(e(mX(o(mX~O!c'lO!d'lO(U!lO~PDWO(P'xO(Q'xO(R'zO~O_!}O(V'|O(W!}O(X'|O~O_#QO(X'|O(Y'|O(Z#QO~Ov(OO~P%[Ox#SO!U#TO(b#TO(c(RO~O![(TO!Y'WX!Y'^X!]'WX!]'^X~P+}O!](VO!Y(hX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](VO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~O!Y(hX~PHRO!Y([O~O!Y(uX!](uX!g(uX!k(uX(r(uX~O#`(uX#k#dX!^(uX~PJUO#`(]O!Y(wX!](wX~O!](^O!Y(vX~O!Y(aO~O#`$eO~PJUO!^(bO~P`OR#zO!Q#yO!S#{O!l#xO(aVOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(r!na(y!na(z!na~Oa!na'z!na'w!na!Y!na!k!nav!na!_!na%i!na!g!na~PKlO!k(cO~O!g#vO#`(dO(r'pO!](tXa(tX'z(tX~O!k(tX~PNXO!S%hO!_%iO!|]O#i(iO#j(hO(T%gO~O!](jO!k(sX~O!k(lO~O!S%hO!_%iO#j(hO(T%gO~OP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~O!g#vO!k(gX~P! uOR(nO!Q(mO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(T!{a~P!#vO!x(rO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~O#k(xO~O![(zO!k(kP~P%[O(e(|O(o[O~O!S)OO!l#xO(e(|O(o[O~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]$_Oa$qa'z$qa'w$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)dO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Og(pP~P!,TO!Q)iO!g)hO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)hO!_({X$Z({X$]({X$_({X$f({X~O!Q)iO~P!.^O!Q)iO!_({X$Z({X$]({X$_({X$f({X~O!_)kO$Z)oO$])jO$_)jO$f)pO~O![)sO~P!)[O$]$hO$_$gO$f)wO~On$zX!Q$zX#S$zX'y$zX(y$zX(z$zX~OgmXg$zXnmX!]mX#`mX~P!0SOx)yO(b)zO(c)|O~On*VO!Q*OO'y*PO(y$}O(z%PO~Og)}O~P!1WOg*WO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S*YO!_*ZO!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op*`O![*^O(T*XO!k)OP~P!1uO#k*aO~O!l*bO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T*dO(VTO(YUO(a$uO(y$}O(z%PO~O![*gO!Y)PP~P!3tOr*sOs!nO!S*iO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO(e!mO~O!^*pO~P!5iO#S$dOn(`X!Q(`X'y(`X(y(`X(z(`X!](`X#`(`X~Og(`X$O(`X~P!6kOn*xO#`*wOg(_X!](_X~O!]*yOg(^X~Oj%dOk%dOl%dO(T&ZOg(^P~Os*|O~Og)}O(T&ZO~O!l+SO~O(T(vO~Op+WO!S%hO![#iO!_%iO!|]O#i#lO#j#iO(T%gO!k(sP~O!g#vO#k+XO~O!S%hO![+ZO!](^O!_%iO(T%gO!Y(vP~Os'[O!S+]O![+[O(VTO(YUO(e(|O~O!^(xP~P!9|O!]+^Oa)TX'z)TX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa!ja!]!ja'z!ja'w!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:tOR#zO!Q#yO!S#{O!l#xO(aVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(r!ra(y!ra(z!ra~Oa!ra'z!ra'w!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!=[OR#zO!Q#yO!S#{O!l#xO(aVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(r!ta(y!ta(z!ta~Oa!ta'z!ta'w!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?rOh%VOn+gO!_'`O%i+fO~O!g+iOa(]X!_(]X'z(]X!](]X~Oa%nO!_XO'z%nO~Oh%VO!l%eO~Oh%VO!l%eO(T%gO~O!g#vO#k(xO~Ob+tO%j+uO(T+qO(VTO(YUO!^)XP~O!]+vO`)WX~O[+zO~O`+{O~O!_&PO(T%gO(U!lO`)WP~O%j,OO~P;SOh%VO#`,SO~Oh%VOn,VO!_$|O~O!_,XO~O!Q,ZO!_XO~O%n%vO~O!x,`O~Oe,eO~Ob,fO(T#nO(VTO(YUO!^)VP~Oe%}O~O%j!QO(T&ZO~P=gO[,kO`,jO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(VTO(YUO(aVO(o[O~O!_!eO!u!gO$W!kO(T!dO~P!FyO`,jOa%nO'z%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa,pOl!OO!uwO%l!OO%m!OO%n!OO~P!IcO!l&oO~O&^,vO~O!_,xO~O&o,zO&q,{OP&laQ&laS&laY&laa&lad&lae&lal&lap&lar&las&lat&laz&la|&la!O&la!S&la!W&la!X&la!_&la!i&la!l&la!o&la!p&la!q&la!s&la!u&la!x&la!|&la$W&la$n&la%h&la%j&la%l&la%m&la%n&la%q&la%s&la%v&la%w&la%y&la&W&la&^&la&`&la&b&la&d&la&g&la&m&la&s&la&u&la&w&la&y&la&{&la'w&la(T&la(V&la(Y&la(a&la(o&la!^&la&e&lab&la&j&la~O(T-QO~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P#!iO!g-VO#`-UOh(jX!]#hX!^#hX!g(jX!l(jX~O!](jX!^(jX~P##[Oh%VO!g-XO!l%eO!]!aX!^!aX~Os!nO!S!oO(VTO(YUO(e!mO~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(VTO(YUO(aVO(o[O~O(T=QO~P#$qO!]-]O!^(iX~O!^-_O~O!g-VO#`-UO!]#hX!^#hX~O!]-`O!^(xX~O!^-bO~O!c-cO!d-cO(U!lO~P#$`O!^-fO~P'_On-iO!_'`O~O!Y-nO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(U!{a(V!{a(Y!{a(e!{a(o!{a~P!#vO!p-sO#`-qO~PChO!c-uO!d-uO(U!lO~PDWOa%nO#`-qO'z%nO~Oa%nO!g#vO#`-qO'z%nO~Oa%nO!g#vO!p-sO#`-qO'z%nO(r'pO~O(P'xO(Q'xO(R-zO~Ov-{O~O!Y'Wa!]'Wa~P!:tO![.PO!Y'WX!]'WX~P%[O!](VO!Y(ha~O!Y(ha~PHRO!](^O!Y(va~O!S%hO![.TO!_%iO(T%gO!Y'^X!]'^X~O#`.VO!](ta!k(taa(ta'z(ta~O!g#vO~P#,wO!](jO!k(sa~O!S%hO!_%iO#j.ZO(T%gO~Op.`O!S%hO![.]O!_%iO!|]O#i._O#j.]O(T%gO!]'aX!k'aX~OR.dO!l#xO~Oh%VOn.gO!_'`O%i.fO~Oa#ci!]#ci'z#ci'w#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:tOn>]O!Q*OO'y*PO(y$}O(z%PO~O#k#_aa#_a#`#_a'z#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#k(`XP(`XR(`X[(`Xa(`Xj(`Xr(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X'z(`X(a(`X(r(`X!k(`X!Y(`X'w(`Xv(`X!_(`X%i(`X!g(`X~P!6kO!].tO!k(kX~P!:tO!k.wO~O!Y.yO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#3cO#n$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#6QO#r$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(aVOa#mi!]#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(aVO(z#}Oa#mi!]#mi#z#mi#{#mi'z#mi(r#mi(y#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#;VO#x#mi~P#;VO#v$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(aVO(y#|O(z#}Oa#mi!]#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#={O#z$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X!]]X!^]X~O$O]X~P#@jOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO#z<gO#{<hO(aVO(r$YO(y#|O(z#}O~O$O.{O~P#BwO#S$dO#`<nO$Q<nO$O(gX!^(gX~P! uOa'da!]'da'z'da'w'da!k'da!Y'dav'da!_'da%i'da!g'da~P!:tO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO(y#mi(z#mi~P#EyOn>]O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P#EyO!]/POg(pX~P!1WOg/RO~Oa$Pi!]$Pi'z$Pi'w$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:tO$]/SO$_/SO~O$]/TO$_/TO~O!g)hO#`/UO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/VO~O!_)kO$Z/XO$])jO$_)jO$f/YO~O!]<iO!^(fX~P#BwO!^/ZO~O!g)hO$f({X~O$f/]O~Ov/^O~P!&zOx)yO(b)zO(c/aO~O!S/dO~O(y$}On%aa!Q%aa'y%aa(z%aa!]%aa#`%aa~Og%aa$O%aa~P#L{O(z%POn%ca!Q%ca'y%ca(y%ca!]%ca#`%ca~Og%ca$O%ca~P#MnO!]fX!gfX!kfX!k$zX(rfX~P!0SOp%WO![/mO!](^O(T/lO!Y(vP!Y)PP~P!1uOr*sO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO~Os<}O!S/nO![+[O!^*pO(e<|O!^(xP~P$ [O!k/oO~P#/sO!]/pO!g#vO(r'pO!k)OX~O!k/uO~OnoX!QoX'yoX(yoX(zoX~O!g#vO!koX~P$#OOp/wO!S%hO![*^O!_%iO(T%gO!k)OP~O#k/xO~O!Y$zX!]$zX!g%RX~P!0SO!]/yO!Y)PX~P#/sO!g/{O~O!Y/}O~OpkO(T0OO~P.iOh%VOr0TO!g#vO!l%eO(r'pO~O!g+iO~Oa%nO!]0XO'z%nO~O!^0ZO~P!5iO!c0[O!d0[O(U!lO~P#$`Os!nO!S0]O(VTO(YUO(e!mO~O#[0_O~Og%aa!]%aa#`%aa$O%aa~P!1WOg%ca!]%ca#`%ca$O%ca~P!1WOj%dOk%dOl%dO(T&ZOg'mX!]'mX~O!]*yOg(^a~Og0hO~On0jO#`0iOg(_a!](_a~OR0kO!Q0kO!S0lO#S$dOn}a'y}a(y}a(z}a!]}a#`}a~Og}a$O}a~P$(cO!Q*OO'y*POn$sa(y$sa(z$sa!]$sa#`$sa~Og$sa$O$sa~P$)_O!Q*OO'y*POn$ua(y$ua(z$ua!]$ua#`$ua~Og$ua$O$ua~P$*QO#k0oO~Og%Ta!]%Ta#`%Ta$O%Ta~P!1WO!g#vO~O#k0rO~O!]+^Oa)Ta'z)Ta~OR#zO!Q#yO!S#{O!l#xO(aVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(r!ri(y!ri(z!ri~Oa!ri'z!ri'w!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$+oOh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op0{O%]0|O(T0zO~P$.VO!g+iOa(]a!_(]a'z(]a!](]a~O#k1SO~O[]X!]fX!^fX~O!]1TO!^)XX~O!^1VO~O[1WO~Ob1YO(T+qO(VTO(YUO~O!_&PO(T%gO`'uX!]'uX~O!]+vO`)Wa~O!k1]O~P!:tO[1`O~O`1aO~O#`1fO~On1iO!_$|O~O(e(|O!^)UP~Oh%VOn1rO!_1oO%i1qO~O[1|O!]1zO!^)VX~O!^1}O~O`2POa%nO'z%nO~O(T#nO(VTO(YUO~O#S$dO#`$eO$Q$eOP(gXR(gX[(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~Oj2SO&[2TOa(gX~P$3pOj2SO#`$eO&[2TO~Oa2VO~P%[Oa2XO~O&e2[OP&ciQ&ciS&ciY&cia&cid&cie&cil&cip&cir&cis&cit&ciz&ci|&ci!O&ci!S&ci!W&ci!X&ci!_&ci!i&ci!l&ci!o&ci!p&ci!q&ci!s&ci!u&ci!x&ci!|&ci$W&ci$n&ci%h&ci%j&ci%l&ci%m&ci%n&ci%q&ci%s&ci%v&ci%w&ci%y&ci&W&ci&^&ci&`&ci&b&ci&d&ci&g&ci&m&ci&s&ci&u&ci&w&ci&y&ci&{&ci'w&ci(T&ci(V&ci(Y&ci(a&ci(o&ci!^&cib&ci&j&ci~Ob2bO!^2`O&j2aO~P`O!_XO!l2dO~O&q,{OP&liQ&liS&liY&lia&lid&lie&lil&lip&lir&lis&lit&liz&li|&li!O&li!S&li!W&li!X&li!_&li!i&li!l&li!o&li!p&li!q&li!s&li!u&li!x&li!|&li$W&li$n&li%h&li%j&li%l&li%m&li%n&li%q&li%s&li%v&li%w&li%y&li&W&li&^&li&`&li&b&li&d&li&g&li&m&li&s&li&u&li&w&li&y&li&{&li'w&li(T&li(V&li(Y&li(a&li(o&li!^&li&e&lib&li&j&li~O!Y2jO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2pO(e!mO!]'XX!^'XX~P@nO!]-]O!^(ia~O!]'_X!^'_X~P!9|O!]-`O!^(xa~O!^2wO~P'_Oa%nO#`3QO'z%nO~Oa%nO!g#vO#`3QO'z%nO~Oa%nO!g#vO!p3UO#`3QO'z%nO(r'pO~Oa%nO'z%nO~P!:tO!]$_Ov$qa~O!Y'Wi!]'Wi~P!:tO!](VO!Y(hi~O!](^O!Y(vi~O!Y(wi!](wi~P!:tO!](ti!k(tia(ti'z(ti~P!:tO#`3WO!](ti!k(tia(ti'z(ti~O!](jO!k(si~O!S%hO!_%iO!|]O#i3]O#j3[O(T%gO~O!S%hO!_%iO#j3[O(T%gO~On3dO!_'`O%i3cO~Oh%VOn3dO!_'`O%i3cO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aav%aa!_%aa%i%aa!g%aa~P#L{O#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%cav%ca!_%ca%i%ca!g%ca~P#MnO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/sO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/sO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'z}a(a}a(r}a!k}a!Y}a'w}av}a!_}a%i}a!g}a~P$(cO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'z$sa(a$sa(r$sa!k$sa!Y$sa'w$sav$sa!_$sa%i$sa!g$sa~P$)_O#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'z$ua(a$ua(r$ua!k$ua!Y$ua'w$uav$ua!_$ua%i$ua!g$ua~P$*QO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'z%Ta(a%Ta(r%Ta!k%Ta!Y%Ta'w%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/sOa#cq!]#cq'z#cq'w#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:tO![3lO!]'YX!k'YX~P%[O!].tO!k(ka~O!].tO!k(ka~P!:tO!Y3oO~O$O!na!^!na~PKlO$O!ja!]!ja!^!ja~P#BwO$O!ra!^!ra~P!=[O$O!ta!^!ta~P!?rOg']X!]']X~P!,TO!]/POg(pa~OSfO!_4TO$d4UO~O!^4YO~Ov4ZO~P#/sOa$mq!]$mq'z$mq'w$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:tO!Y4]O~P!&zO!S4^O~O!Q*OO'y*PO(z%POn'ia(y'ia!]'ia#`'ia~Og'ia$O'ia~P%-fO!Q*OO'y*POn'ka(y'ka(z'ka!]'ka#`'ka~Og'ka$O'ka~P%.XO(r$YO~P#/sO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!0SOp%WO(T=WO~P!1uOp4bO!S%hO![4aO!_%iO(T%gO!]'eX!k'eX~O!]/pO!k)Oa~O!]/pO!g#vO!k)Oa~O!]/pO!g#vO(r'pO!k)Oa~Og$|i!]$|i#`$|i$O$|i~P!1WO![4jO!Y'gX!]'gX~P!3tO!]/yO!Y)Pa~O!]/yO!Y)Pa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~Oj%YX!g%YX~P%2OOj4oO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4tO!l%eO(r'pO~Or4yO!g#vO(r'pO~Os!nO!S4zO(VTO(YUO(e!mO~O(y$}On%ai!Q%ai'y%ai(z%ai!]%ai#`%ai~Og%ai$O%ai~P%5oO(z%POn%ci!Q%ci'y%ci(y%ci!]%ci#`%ci~Og%ci$O%ci~P%6bOg(_i!](_i~P!1WO#`5QOg(_i!](_i~P!1WO!k5VO~Oa$oq!]$oq'z$oq'w$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:tO!Y5ZO~O!]5[O!_)QX~P#/sOa$zX!_$zX%^]X'z$zX!]$zX~P!0SO%^5_OaoX!_oX'zoX!]oX~P$#OOp5`O(T#nO~O%^5_O~Ob5fO%j5gO(T+qO(VTO(YUO!]'tX!^'tX~O!]1TO!^)Xa~O[5kO~O`5lO~O[5pO~Oa%nO'z%nO~P#/sO!]5uO#`5wO!^)UX~O!^5xO~Or6OOs!nO!S*iO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!pO#W!pO#X!pO#[5}O#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O!^5|O~P%;eOn6TO!_1oO%i6SO~Oh%VOn6TO!_1oO%i6SO~Ob6[O(T#nO(VTO(YUO!]'sX!^'sX~O!]1zO!^)Va~O(VTO(YUO(e6^O~O`6bO~Oj6eO&[6fO~PNXO!k6gO~P%[Oa6iO~Oa6iO~P%[Ob2bO!^6nO&j2aO~P`O!g6pO~O!g6rOh(ji!](ji!^(ji!g(ji!l(jir(ji(r(ji~O!]#hi!^#hi~P#BwO#`6sO!]#hi!^#hi~O!]!ai!^!ai~P#BwOa%nO#`6|O'z%nO~Oa%nO!g#vO#`6|O'z%nO~O!](tq!k(tqa(tq'z(tq~P!:tO!](jO!k(sq~O!S%hO!_%iO#j7TO(T%gO~O!_'`O%i7WO~On7[O!_'`O%i7WO~O#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'z'ia(a'ia(r'ia!k'ia!Y'ia'w'iav'ia!_'ia%i'ia!g'ia~P%-fO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'z'ka(a'ka(r'ka!k'ka!Y'ka'w'kav'ka!_'ka%i'ka!g'ka~P%.XO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'z$|i(a$|i(r$|i!k$|i!Y$|i'w$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/sO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'z%ai(a%ai(r%ai!k%ai!Y%ai'w%aiv%ai!_%ai%i%ai!g%ai~P%5oO#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'z%ci(a%ci(r%ci!k%ci!Y%ci'w%civ%ci!_%ci%i%ci!g%ci~P%6bO!]'Ya!k'Ya~P!:tO!].tO!k(ki~O$O#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#n#mi~P%NdO#n<_O~P%NdOP$[OR#zOr<kO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#r#mi~P&!lO#r<aO~P&!lOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO(aVO#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#v#mi~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO(aVO(z#}O#z#mi#{#mi$O#mi(r#mi(y#mi!]#mi!^#mi~O#x<eO~P&&uO#x#mi~P&&uO#v<cO~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO(aVO(y#|O(z#}O#{#mi$O#mi(r#mi!]#mi!^#mi~O#z#mi~P&)UO#z<gO~P&)UOa#|y!]#|y'z#|y'w#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:tO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO(y#mi(z#mi~P&,QOn>^O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P&,QO#S$dOP(`XR(`X[(`Xj(`Xn(`Xr(`X!Q(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X$O(`X'y(`X(a(`X(r(`X(y(`X(z(`X!](`X!^(`X~O$O$Pi!]$Pi!^$Pi~P#BwO$O!ri!^!ri~P$+oOg']a!]']a~P!1WO!^7nO~O!]'da!^'da~P#BwO!Y7oO~P#/sO!g#vO(r'pO!]'ea!k'ea~O!]/pO!k)Oi~O!]/pO!g#vO!k)Oi~Og$|q!]$|q#`$|q$O$|q~P!1WO!Y'ga!]'ga~P#/sO!g7vO~O!]/yO!Y)Pi~P#/sO!]/yO!Y)Pi~O!Y7yO~Oh%VOr8OO!l%eO(r'pO~Oj8QO!g#vO~Or8TO!g#vO(r'pO~O!Q*OO'y*PO(z%POn'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P&5RO!Q*OO'y*POn'la(y'la(z'la!]'la#`'la~Og'la$O'la~P&5tOg(_q!](_q~P!1WO#`8VOg(_q!](_q~P!1WO!Y8WO~Og%Oq!]%Oq#`%Oq$O%Oq~P!1WOa$oy!]$oy'z$oy'w$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:tO!g6rO~O!]5[O!_)Qa~O!_'`OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(a$Ta(r$Ta(y$Ta(z$Ta~O%i7WO~P&8fO%^8[Oa%[i!_%[i'z%[i!]%[i~Oa#cy!]#cy'z#cy'w#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:tO[8^O~Ob8`O(T+qO(VTO(YUO~O!]1TO!^)Xi~O`8dO~O(e(|O!]'pX!^'pX~O!]5uO!^)Ua~O!^8nO~P%;eO(o!sO~P$&YO#[8oO~O!_1oO~O!_1oO%i8qO~On8tO!_1oO%i8qO~O[8yO!]'sa!^'sa~O!]1zO!^)Vi~O!k8}O~O!k9OO~O!k9RO~O!k9RO~P%[Oa9TO~O!g9UO~O!k9VO~O!](wi!^(wi~P#BwOa%nO#`9_O'z%nO~O!](ty!k(tya(ty'z(ty~P!:tO!](jO!k(sy~O%i9bO~P&8fO!_'`O%i9bO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'z$|q(a$|q(r$|q!k$|q!Y$|q'w$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/sO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'z'ja(a'ja(r'ja!k'ja!Y'ja'w'jav'ja!_'ja%i'ja!g'ja~P&5RO#k'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la'z'la(a'la(r'la!k'la!Y'la'w'lav'la!_'la%i'la!g'la~P&5tO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'z%Oq(a%Oq(r%Oq!k%Oq!Y%Oq'w%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/sO!]'Yi!k'Yi~P!:tO$O#cq!]#cq!^#cq~P#BwO(y$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(a%aa(r%aa!]%aa!^%aa~On%aa!Q%aa'y%aa(z%aa~P&IyO(z%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(a%ca(r%ca!]%ca!^%ca~On%ca!Q%ca'y%ca(y%ca~P&LQOn>^O!Q*OO'y*PO(z%PO~P&IyOn>^O!Q*OO'y*PO(y$}O~P&LQOR0kO!Q0kO!S0lO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'y}a(a}a(r}a(y}a(z}a!]}a!^}a~O!Q*OO'y*POP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(a$sa(r$sa(y$sa(z$sa!]$sa!^$sa~O!Q*OO'y*POP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(a$ua(r$ua(y$ua(z$ua!]$ua!^$ua~On>^O!Q*OO'y*PO(y$}O(z%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(a%Ta(r%Ta!]%Ta!^%Ta~P''VO$O$mq!]$mq!^$mq~P#BwO$O$oq!]$oq!^$oq~P#BwO!^9oO~O$O9pO~P!1WO!g#vO!]'ei!k'ei~O!g#vO(r'pO!]'ei!k'ei~O!]/pO!k)Oq~O!Y'gi!]'gi~P#/sO!]/yO!Y)Pq~Or9wO!g#vO(r'pO~O[9yO!Y9xO~P#/sO!Y9xO~Oj:PO!g#vO~Og(_y!](_y~P!1WO!]'na!_'na~P#/sOa%[q!_%[q'z%[q!]%[q~P#/sO[:UO~O!]1TO!^)Xq~O`:YO~O#`:ZO!]'pa!^'pa~O!]5uO!^)Ui~P#BwO!S:]O~O!_1oO%i:`O~O(VTO(YUO(e:eO~O!]1zO!^)Vq~O!k:hO~O!k:iO~O!k:jO~O!k:jO~P%[O#`:mO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%i:rO~P&8fO!_'`O%i:rO~O$O#|y!]#|y!^#|y~P#BwOP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(a$|i(r$|i!]$|i!^$|i~P''VO!Q*OO'y*PO(z%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(a'ia(r'ia(y'ia!]'ia!^'ia~O!Q*OO'y*POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(a'ka(r'ka(y'ka(z'ka!]'ka!^'ka~O(y$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'y%ai(a%ai(r%ai(z%ai!]%ai!^%ai~O(z%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'y%ci(a%ci(r%ci(y%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#BwO$O#cy!]#cy!^#cy~P#BwO!g#vO!]'eq!k'eq~O!]/pO!k)Oy~O!Y'gq!]'gq~P#/sOr:|O!g#vO(r'pO~O[;QO!Y;PO~P#/sO!Y;PO~Og(_!R!](_!R~P!1WOa%[y!_%[y'z%[y!]%[y~P#/sO!]1TO!^)Xy~O!]5uO!^)Uq~O(T;XO~O!_1oO%i;[O~O!k;_O~O%i;dO~P&8fOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(a$|q(r$|q!]$|q!^$|q~P''VO!Q*OO'y*PO(z%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(a'ja(r'ja(y'ja!]'ja!^'ja~O!Q*OO'y*POP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la$O'la(a'la(r'la(y'la(z'la!]'la!^'la~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(a%Oq(r%Oq!]%Oq!^%Oq~P''VOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!1WO!Y;hO~P#/sOr;iO!g#vO(r'pO~O[;kO!Y;hO~P#/sO!]'pq!^'pq~P#BwO!]#h!Z!^#h!Z~P#BwO#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'z%e!Z(a%e!Z(r%e!Z!k%e!Z!Y%e!Z'w%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/sOr;tO!g#vO(r'pO~O!Y;uO~P#/sOr;|O!g#vO(r'pO~O!Y;}O~P#/sOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(a%e!Z(r%e!Z!]%e!Z!^%e!Z~P''VOr<QO!g#vO(r'pO~Ov(fX~P1qO!Q%rO~P!)[O(U!lO~P!)[O!YfX!]fX#`fX~P%2OOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~O!gfX!k]X!kfX(rfX~P'LTOP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_XO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]<iO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<tO!S${O!_$|O!i>WO!l$xO#j<zO$W%`O$t<vO$v<xO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Ol)dO~P(!yOr!eX(r!eX~P#!iOr(jX(r(jX~P##[O!^]X!^fX~P'LTO!YfX!Y$zX!]fX!]$zX#`fX~P!0SO#k<^O~O!g#vO#k<^O~O#`<nO~Oj<bO~O#`=OO!](wX!^(wX~O#`<nO!](uX!^(uX~O#k=PO~Og=RO~P!1WO#k=XO~O#k=YO~Og=RO(T&ZO~O!g#vO#k=ZO~O!g#vO#k=PO~O$O=[O~P#BwO#k=]O~O#k=^O~O#k=cO~O#k=dO~O#k=eO~O#k=fO~O$O=gO~P!1WO$O=hO~P!1WOl=sO~P7eOk#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~(OT#o!X'|(U#ps#n#qr!Q'}$]'}(T$_(e~",
        goto: "$9Y)]PPPPPP)^PP)aP)rP+W/]PPPP6mPP7TPP=QPPP@tPA^PA^PPPA^PCfPA^PA^PA^PCjPCoPD^PIWPPPI[PPPPI[L_PPPLeMVPI[PI[PP! eI[PPPI[PI[P!#lI[P!'S!(X!(bP!)U!)Y!)U!,gPPPPPPP!-W!(XPP!-h!/YP!2iI[I[!2n!5z!:h!:h!>gPPP!>oI[PPPPPPPPP!BOP!C]PPI[!DnPI[PI[I[I[I[I[PI[!FQP!I[P!LbP!Lf!Lp!Lt!LtP!IXP!Lx!LxP#!OP#!SI[PI[#!Y#%_CjA^PA^PA^A^P#&lA^A^#)OA^#+vA^#.SA^A^#.r#1W#1W#1]#1f#1W#1qPP#1WPA^#2ZA^#6YA^A^6mPPP#:_PPP#:x#:xP#:xP#;`#:xPP#;fP#;]P#;]#;y#;]#<e#<k#<n)aP#<q)aP#<z#<z#<zP)aP)aP)aP)aPP)aP#=Q#=TP#=T)aP#=XP#=[P)aP)aP)aP)aP)aP)a)aPP#=b#=h#=s#=y#>P#>V#>]#>k#>q#>{#?R#?]#?c#?s#?y#@k#@}#AT#AZ#Ai#BO#Cs#DR#DY#Et#FS#Gt#HS#HY#H`#Hf#Hp#Hv#H|#IW#Ij#IpPPPPPPPPPPP#IvPPPPPPP#Jk#Mx$ b$ i$ qPPP$']P$'f$*_$0x$0{$1O$1}$2Q$2X$2aP$2g$2jP$3W$3[$4S$5b$5g$5}PP$6S$6Y$6^$6a$6e$6i$7e$7|$8e$8i$8l$8o$8y$8|$9Q$9UR!|RoqOXst!Z#d%m&r&t&u&w,s,x2[2_Y!vQ'`-e1o5{Q%tvQ%|yQ&T|Q&j!VS'W!e-]Q'f!iS'l!r!yU*k$|*Z*oQ+o%}S+|&V&WQ,d&dQ-c'_Q-m'gQ-u'mQ0[*qQ1b,OQ1y,eR<{<Y%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_S#q]<V!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU+P%]<s<tQ+t&PQ,f&gQ,m&oQ0x+gQ0}+iQ1Y+uQ2R,kQ3`.gQ5`0|Q5f1TQ6[1zQ7Y3dQ8`5gR9e7['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S!S!nQ!r!v!y!z$|'W'_'`'l'm'n*k*o*q*r-]-c-e-u0[0_1o5{5}%[$ti#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q&X|Q'U!eS'[%i-`Q+t&PQ,P&WQ,f&gQ0n+SQ1Y+uQ1_+{Q2Q,jQ2R,kQ5f1TQ5o1aQ6[1zQ6_1|Q6`2PQ8`5gQ8c5lQ8|6bQ:X8dQ:f8yQ;V:YR<}*ZrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R,h&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'b'r(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>R>S[#]WZ#W#Z'X(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ%wxQ%{yW&Q|&V&W,OQ&_!TQ'c!hQ'e!iQ(q#sS+n%|%}Q+r&PQ,_&bQ,c&dS-l'f'gQ.i(rQ1R+oQ1X+uQ1Z+vQ1^+zQ1t,`S1x,d,eQ2|-mQ5e1TQ5i1WQ5n1`Q6Z1yQ8_5gQ8b5kQ8f5pQ:T8^R;T:U!U$zi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y!^%yy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{Q+h%wQ,T&[Q,W&]Q,b&dQ.h(qQ1s,_U1w,c,d,eQ3e.iQ6U1tS6Y1x1yQ8x6Z#f>T#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o>U<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hW%Ti%V*y>PS&[!Q&iQ&]!RQ&^!SU*}%[%d=sR,R&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^T)z$u){V+P%]<s<tW'[!e%i*Z-`S(}#y#zQ+c%rQ+y&SS.b(m(nQ1j,XQ5T0kR8i5u'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S$i$^c#Y#e%q%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.|.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ'Y!eR2q-]!W!nQ!e!r!v!y!z$|'W'_'`'l'm'n*Z*k*o*q*r-]-c-e-u0[0_1o5{5}R1l,ZnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&y!^Q'v!xS(s#u<^Q+l%zQ,]&_Q,^&aQ-j'dQ-w'oS.r(x=PS0q+X=ZQ1P+mQ1n,[Q2c,zQ2e,{Q2m-WQ2z-kQ2}-oS5Y0r=eQ5a1QS5d1S=fQ6t2oQ6x2{Q6}3SQ8]5bQ9Y6vQ9Z6yQ9^7OR:l9V$d$]c#Y#e%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vS(o#p'iQ)P#zS+b%q.|S.c(n(pR3^.d'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS#q]<VQ&t!XQ&u!YQ&w![Q&x!]R2Z,vQ'a!hQ+e%wQ-h'cS.e(q+hQ2x-gW3b.h.i0w0yQ6w2yW7U3_3a3e5^U9a7V7X7ZU:q9c9d9fS;b:p:sQ;p;cR;x;qU!wQ'`-eT5y1o5{!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(j,s,x.[2[2_]!pQ!r'`-e1o5{T#q]<V%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S(}#y#zS.b(m(n!s=l$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU$fd)_,mS(p#p'iU*v%R(w4OU0m+O.n7gQ5^0xQ7V3`Q9d7YR:s9em!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}Q't!uS(f#g2US-s'k'wQ/s*]Q0R*jQ3U-vQ4f/tQ4r0TQ4s0UQ4x0^Q7r4`S7}4t4vS8R4y4{Q9r7sQ9v7yQ9{8OQ:Q8TS:{9w9xS;g:|;PS;s;h;iS;{;t;uS<P;|;}R<S<QQ#wbQ's!uS(e#g2US(g#m+WQ+Y%fQ+j%xQ+p&OU-r'k't'wQ.W(fU/r*]*`/wQ0S*jQ0V*lQ1O+kQ1u,aS3R-s-vQ3Z.`S4e/s/tQ4n0PS4q0R0^Q4u0WQ6W1vQ7P3US7q4`4bQ7u4fU7|4r4x4{Q8P4wQ8v6XS9q7r7sQ9u7yQ9}8RQ:O8SQ:c8wQ:y9rS:z9v9xQ;S:QQ;^:dS;f:{;PS;r;g;hS;z;s;uS<O;{;}Q<R<PQ<T<SQ=o=jQ={=tR=|=uV!wQ'`-e%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S#wz!j!r=i$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=o>R%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Q%fj!^%xy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{S&Oz!jQ+k%yQ,a&dW1v,b,c,d,eU6X1w1x1yS8w6Y6ZQ:d8x!r=j$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ=t>QR=u>R%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Y#bWZ#W#Z(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ,n&o!p=k$Z$n)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=n'XU']!e%i*ZR2s-`%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ,m&oQ0x+gQ3`.gQ7Y3dR9e7[!b$Tc#Y%q(S(Y(t(y)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!P<d)^)q-Z.|2k2n3p3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!f$Vc#Y%q(S(Y(t(y)W)X)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!T<f)^)q-Z.|2k2n3p3v3w3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!^$Zc#Y%q(S(Y(t(y)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<WQ4_/kz>S)^)q-Z.|2k2n3p4P4X6u7b7k7l8k9X9g9m9n;W;`=vQ>X>ZR>Y>['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS$oh$pR4U/U'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$kf$qQ$ifS)j$l)nR)v$qT$jf$qT)l$l)n'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$oh$pQ$rhR)u$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_!s>Q$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'b)O)s*i+]+g,p,s,x-i.g/V/n0]0l1r2S2T2V2X2[2_2a3d4T4z6T6e6f6i7[8t9T!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^Q+T%aQ/c*Oo4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!U$yi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>YQ*c$zU*l$|*Z*oQ+U%bQ0W*m#f=q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n=r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hQ=w>TQ=x>UQ=y>VR=z>W!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hnoOXst!Z#d%m&r&t&u&w,s,x2[2_S*f${*YQ-R'OQ-S'QR4i/y%[%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q,U&]Q1h,WQ5s1gR8h5tV*n$|*Z*oU*n$|*Z*oT5z1o5{S0P*i/nQ4w0]T8S4z:]Q+j%xQ0V*lQ1O+kQ1u,aQ6W1vQ8v6XQ:c8wR;^:d!U%Oi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Yx*R$v)e*S*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>OS0`*t0a#f<o#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<p<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!d=S(u)c*[*e.j.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[`=T3}7c7f7j9h:t:w;yS=_.l3iT=`7e9k!U%Qi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y|*T$v)e*U*t+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>OS0b*u0c#f<q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!h=U(u)c*[*e.k.l.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[d=V3}7d7e7j9h9i:t:u:w;yS=a.m3jT=b7f9lrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q&f!UR,p&ornOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R&f!UQ,Y&^R1d,RsnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q1p,_S6R1s1tU8p6P6Q6US:_8r8sS;Y:^:aQ;m;ZR;w;nQ&m!VR,i&iR6_1|R:f8yW&Q|&V&W,OR1Z+vQ&r!WR,s&sR,y&xT2],x2_R,}&yQ,|&yR2f,}Q'y!{R-y'ySsOtQ#dXT%ps#dQ#OTR'{#OQ#RUR'}#RQ){$uR/`){Q#UVR(Q#UQ#XWU(W#X(X.QQ(X#YR.Q(YQ-^'YR2r-^Q.u(yS3m.u3nR3n.vQ-e'`R2v-eY!rQ'`-e1o5{R'j!rQ/Q)eR4S/QU#_W%h*YU(_#_(`.RQ(`#`R.R(ZQ-a']R2t-at`OXst!V!Z#d%m&i&k&r&t&u&w,s,x2[2_S#hZ%eU#r`#h.[R.[(jQ(k#jQ.X(gW.a(k.X3X7RQ3X.YR7R3YQ)n$lR/W)nQ$phR)t$pQ$`cU)a$`-|<jQ-|<WR<j)qQ/q*]W4c/q4d7t9sU4d/r/s/tS7t4e4fR9s7u$e*Q$v(u)c)e*[*e*t*u+Q+R+V.l.m.o.p.q/_/g/i/k/v/|0d0e0v1e3f3g3h3}4R4[4g4h4l4|5O5R5S5W5r7]7^7_7`7e7f7h7i7j7p7w7z8U8X8Z9h9i9j9t9|:R:S:t:u:v:w:x:};R;e;j;v;y=p=}>O>Z>[Q/z*eU4k/z4m7xQ4m/|R7x4lS*o$|*ZR0Y*ox*S$v)e*t*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>O!d.j(u)c*[*e.l.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/h*S.j7ca7c3}7e7f7j9h:t:w;yQ0a*tQ3i.lU4}0a3i9kR9k7e|*U$v)e*t*u+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>O!h.k(u)c*[*e.l.m.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/j*U.k7de7d3}7e7f7j9h9i:t:u:w;yQ0c*uQ3j.mU5P0c3j9lR9l7fQ*z%UR0g*zQ5]0vR8Y5]Q+_%kR0u+_Q5v1jS8j5v:[R:[8kQ,[&_R1m,[Q5{1oR8m5{Q1{,fS6]1{8zR8z6_Q1U+rW5h1U5j8a:VQ5j1XQ8a5iR:V8bQ+w&QR1[+wQ2_,xR6m2_YrOXst#dQ&v!ZQ+a%mQ,r&rQ,t&tQ,u&uQ,w&wQ2Y,sS2],x2_R6l2[Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'q!uQ+`%lQ+l%zQ,Q&XQ,h&mQ-P&|W-p'k's't'wQ-w'oQ0X*nQ1P+mQ1c,PS2O,i,lQ2g-OQ2h-RQ2i-SQ2}-oW3P-r-s-v-xQ5a1QQ5m1_Q5q1eQ6V1uQ6a2QQ6k2ZU6z3O3R3UQ6}3SQ8]5bQ8e5oQ8g5rQ8l5zQ8u6WQ8{6`S9[6{7PQ9^7OQ:W8cQ:b8vQ:g8|Q:n9]Q;U:XQ;]:cQ;a:oQ;l;VR;o;^Q%zyQ'd!iQ'o!uU+m%{%|%}Q-W'VU-k'e'f'gS-o'k'uQ0Q*jS1Q+n+oQ2o-YS2{-l-mQ3S-tS4p0R0UQ5b1RQ6v2uQ6y2|Q7O3TU7{4r4s4vQ9z7}R;O9{S$wi>PR*{%VU%Ui%V>PR0f*yQ$viS(u#v+iS)c$b$cQ)e$dQ*[$xS*e${*YQ*t%OQ*u%QQ+Q%^Q+R%_Q+V%cQ.l<oQ.m<qQ.o<uQ.p<wQ.q<yQ/_)yQ/g*RQ/i*TQ/k*VQ/v*aS/|*g/mQ0d*wQ0e*xl0v+f,V.f1i1q3c6S7W8q9b:`:r;[;dQ1e,SQ3f=SQ3g=UQ3h=XS3}<l<mQ4R/PS4[/d4^Q4g/xQ4h/yQ4l/{Q4|0`Q5O0bQ5R0iQ5S0jQ5W0oQ5r1fQ7]=]Q7^=_Q7_=aQ7`=cQ7e<pQ7f<rQ7h<vQ7i<xQ7j<zQ7p4_Q7w4jQ7z4oQ8U5QQ8X5[Q8Z5_Q9h=YQ9i=TQ9j=VQ9t7vQ9|8QQ:R8VQ:S8[Q:t=^Q:u=`Q:v=bQ:w=dQ:x9pQ:}9yQ;R:PQ;e=gQ;j;QQ;v;kQ;y=hQ=p>PQ=}>XQ>O>YQ>Z>]R>[>^Q+O%]Q.n<sR7g<tnpOXst!Z#d%m&r&t&u&w,s,x2[2_Q!fPS#fZ#oQ&|!`W'h!o*i0]4zQ(P#SQ)Q#{Q)r$nS,l&k&nQ,q&oQ-O&{S-T'T/nQ-g'bQ.x)OQ/[)sQ0s+]Q0y+gQ2W,pQ2y-iQ3a.gQ4W/VQ5U0lQ6Q1rQ6c2SQ6d2TQ6h2VQ6j2XQ6o2aQ7Z3dQ7m4TQ8s6TQ9P6eQ9Q6fQ9S6iQ9f7[Q:a8tR:k9T#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'b)O*i+]+g,p,s,x-i.g/n0]0l1r2S2T2V2X2[2_2a3d4z6T6e6f6i7[8t9TQ#YWQ#eYQ%quQ%svS%uw!gS(S#W(VQ(Y#ZQ(t#uQ(y#xQ)R$OQ)S$PQ)T$QQ)U$RQ)V$SQ)W$TQ)X$UQ)Y$VQ)Z$WQ)[$XQ)^$ZQ)`$_Q)b$aQ)g$eW)q$n)s/V4TQ+d%tQ+x&RS-Z'X2pQ-x'rS-}(T.PQ.S(]Q.U(dQ.s(xQ.v(zQ.z<UQ.|<XQ.}<YQ/O<]Q/b)}Q0p+XQ2k-UQ2n-XQ3O-qQ3V.VQ3k.tQ3p<^Q3q<_Q3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{.{Q3|<kQ4P<nQ4Q<{Q4X<iQ5X0rQ5c1SQ6u=OQ6{3QQ7Q3WQ7a3lQ7b=PQ7k=RQ7l=ZQ8k5wQ9X6sQ9]6|Q9g=[Q9m=eQ9n=fQ:o9_Q;W:ZQ;`:mQ<W#SR=v>SR#[WR'Z!el!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}S'V!e-]U*j$|*Z*oS-Y'W'_S0U*k*qQ0^*rQ2u-cQ4v0[R4{0_R({#xQ!fQT-d'`-e]!qQ!r'`-e1o5{Q#p]R'i<VR)f$dY!uQ'`-e1o5{Q'k!rS'u!v!yS'w!z5}S-t'l'mQ-v'nR3T-uT#kZ%eS#jZ%eS%km,oU(g#h#i#lS.Y(h(iQ.^(jQ0t+^Q3Y.ZU3Z.[.]._S7S3[3]R9`7Td#^W#W#Z%h(T(^*Y+Z.T/mr#gZm#h#i#l%e(h(i(j+^.Z.[.]._3[3]7TS*]$x*bQ/t*^Q2U,oQ2l-VQ4`/pQ6q2dQ7s4aQ9W6rT=m'X+[V#aW%h*YU#`W%h*YS(U#W(^U(Z#Z+Z/mS-['X+[T.O(T.TV'^!e%i*ZQ$lfR)x$qT)m$l)nR4V/UT*_$x*bT*h${*YQ0w+fQ1g,VQ3_.fQ5t1iQ6P1qQ7X3cQ8r6SQ9c7WQ:^8qQ:p9bQ;Z:`Q;c:rQ;n;[R;q;dnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&l!VR,h&itmOXst!U!V!Z#d%m&i&r&t&u&w,s,x2[2_R,o&oT%lm,oR1k,XR,g&gQ&U|S+}&V&WR1^,OR+s&PT&p!W&sT&q!W&sT2^,x2_",
        nodeNames: "\u26a0 ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
        maxTerm: 380,
        context: NQ,
        nodeProps: [
          ["isolate", -8, 5, 6, 14, 37, 39, 51, 53, 55, ""],
          ["group", -26, 9, 17, 19, 68, 207, 211, 215, 216, 218, 221, 224, 234, 237, 243, 245, 247, 249, 252, 258, 264, 266, 268, 270, 272, 274, 275, "Statement", -34, 13, 14, 32, 35, 36, 42, 51, 54, 55, 57, 62, 70, 72, 76, 80, 82, 84, 85, 110, 111, 120, 121, 136, 139, 141, 142, 143, 144, 145, 147, 148, 167, 169, 171, "Expression", -23, 31, 33, 37, 41, 43, 45, 173, 175, 177, 178, 180, 181, 182, 184, 185, 186, 188, 189, 190, 201, 203, 205, 206, "Type", -3, 88, 103, 109, "ClassItem"],
          ["openedBy", 23, "<", 38, "InterpolationStart", 56, "[", 60, "{", 73, "(", 160, "JSXStartCloseTag"],
          ["closedBy", -2, 24, 168, ">", 40, "InterpolationEnd", 50, "]", 61, "}", 74, ")", 165, "JSXEndTag"]
        ],
        propSources: [XQ],
        skippedNodes: [0, 5, 6, 278],
        repeatNodeCount: 37,
        tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
        tokenizers: [KQ, zQ, lQ, aQ, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, TQ, new YQ("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340), new YQ("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)],
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
          get: QQ => fQ[QQ] || -1
        }, {
          term: 343,
          get: QQ => VQ[QQ] || -1
        }, {
          term: 95,
          get: QQ => hQ[QQ] || -1
        }],
        tokenPrec: 15201
      });
    var EQ = wQ(40718),
      nQ = wQ(40695),
      gQ = wQ(40702),
      PQ = wQ(40688);
    const ZQ = [(0, PQ.t)("function ${name}(${params}) {\n\t${}\n}", {
        label: "function",
        detail: "definition",
        type: "keyword"
      }), (0, PQ.t)("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}", {
        label: "for",
        detail: "loop",
        type: "keyword"
      }), (0, PQ.t)("for (let ${name} of ${collection}) {\n\t${}\n}", {
        label: "for",
        detail: "of loop",
        type: "keyword"
      }), (0, PQ.t)("do {\n\t${}\n} while (${})", {
        label: "do",
        detail: "loop",
        type: "keyword"
      }), (0, PQ.t)("while (${}) {\n\t${}\n}", {
        label: "while",
        detail: "loop",
        type: "keyword"
      }), (0, PQ.t)("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
        label: "try",
        detail: "/ catch block",
        type: "keyword"
      }), (0, PQ.t)("if (${}) {\n\t${}\n}", {
        label: "if",
        detail: "block",
        type: "keyword"
      }), (0, PQ.t)("if (${}) {\n\t${}\n} else {\n\t${}\n}", {
        label: "if",
        detail: "/ else block",
        type: "keyword"
      }), (0, PQ.t)("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
        label: "class",
        detail: "definition",
        type: "keyword"
      }), (0, PQ.t)('import {${names}} from "${module}"\n${}', {
        label: "import",
        detail: "named",
        type: "keyword"
      }), (0, PQ.t)('import ${name} from "${module}"\n${}', {
        label: "import",
        detail: "default",
        type: "keyword"
      })],
      yQ = ZQ.concat([(0, PQ.t)("interface ${name} {\n\t${}\n}", {
        label: "interface",
        detail: "definition",
        type: "keyword"
      }), (0, PQ.t)("type ${name} = ${type}", {
        label: "type",
        detail: "definition",
        type: "keyword"
      }), (0, PQ.t)("enum ${name} {\n\t${}\n}", {
        label: "enum",
        detail: "definition",
        type: "keyword"
      })]),
      BQ = new LQ.n,
      dQ = new Set(["Script", "Block", "FunctionExpression", "FunctionDeclaration", "ArrowFunction", "MethodDeclaration", "ForStatement"]);

    function QF(QQ) {
      return (FQ, wQ) => {
        let LQ = FQ.node.getChild("VariableDefinition");
        return LQ && wQ(LQ, QQ), !0
      }
    }
    const FF = ["FunctionDeclaration"],
      wF = {
        FunctionDeclaration: QF("function"),
        ClassDeclaration: QF("class"),
        ClassExpression: () => !0,
        EnumDeclaration: QF("constant"),
        TypeAliasDeclaration: QF("type"),
        NamespaceDeclaration: QF("namespace"),
        VariableDefinition(QQ, FQ) {
          QQ.matchContext(FF) || FQ(QQ, "variable")
        },
        TypeDefinition(QQ, FQ) {
          FQ(QQ, "type")
        },
        __proto__: null
      };

    function LF(QQ, FQ) {
      let wQ = BQ.get(FQ);
      if (wQ) return wQ;
      let qQ = [],
        oQ = !0;

      function DQ(FQ, wQ) {
        let LQ = QQ.sliceString(FQ.from, FQ.to);
        qQ.push({
          label: LQ,
          type: wQ
        })
      }
      return FQ.cursor(LQ.f.IncludeAnonymous).iterate((FQ => {
        if (oQ) oQ = !1;
        else if (FQ.name) {
          let QQ = wF[FQ.name];
          if (QQ && QQ(FQ, DQ) || dQ.has(FQ.name)) return !1
        } else if (FQ.to - FQ.from > 8192) {
          for (let wQ of LF(QQ, FQ.node)) qQ.push(wQ);
          return !1
        }
      })), BQ.set(FQ, qQ), qQ
    }
    const qF = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
      oF = ["TemplateString", "String", "RegExp", "LineComment", "BlockComment", "VariableDefinition", "TypeDefinition", "Label", "PropertyDefinition", "PropertyName", "PrivatePropertyDefinition", "PrivatePropertyName", "JSXText", "JSXAttributeValue", "JSXOpenTag", "JSXCloseTag", "JSXSelfClosingTag", ".", "?."];

    function DF(QQ) {
      let FQ = (0, EQ.ob)(QQ.state).resolveInner(QQ.pos, -1);
      if (oF.indexOf(FQ.name) > -1) return null;
      let wQ = "VariableName" == FQ.name || FQ.to - FQ.from < 20 && qF.test(QQ.state.sliceDoc(FQ.from, FQ.to));
      if (!wQ && !QQ.explicit) return null;
      let LQ = [];
      for (let qQ = FQ; qQ; qQ = qQ.parent) dQ.has(qQ.name) && (LQ = LQ.concat(LF(QQ.state.doc, qQ)));
      return {
        options: LQ,
        from: wQ ? FQ.from : QQ.pos,
        validFor: qF
      }
    }
    const kF = EQ.f.define({
        name: "javascript",
        parser: JQ.configure({
          props: [EQ.T.add({
            IfStatement: (0, EQ.n)({
              except: /^\s*({|else\b)/
            }),
            TryStatement: (0, EQ.n)({
              except: /^\s*({|catch\b|finally\b)/
            }),
            LabeledStatement: EQ.y,
            SwitchBody: QQ => {
              let FQ = QQ.textAfter,
                wQ = /^\s*\}/.test(FQ),
                LQ = /^\s*(case|default)\b/.test(FQ);
              return QQ.baseIndent + (wQ ? 0 : LQ ? 1 : 2) * QQ.unit
            },
            Block: (0, EQ.x)({
              closing: "}"
            }),
            ArrowFunction: QQ => QQ.baseIndent + QQ.unit,
            "TemplateString BlockComment": () => null,
            "Statement Property": (0, EQ.n)({
              except: /^\s*{/
            }),
            JSXElement(QQ) {
              let FQ = /^\s*<\//.test(QQ.textAfter);
              return QQ.lineIndent(QQ.node.from) + (FQ ? 0 : QQ.unit)
            },
            JSXEscape(QQ) {
              let FQ = /\s*\}/.test(QQ.textAfter);
              return QQ.lineIndent(QQ.node.from) + (FQ ? 0 : QQ.unit)
            },
            "JSXOpenTag JSXSelfClosingTag": QQ => QQ.column(QQ.node.from) + QQ.unit
          }), EQ.L.add({
            "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": EQ.E,
            BlockComment: QQ => ({
              from: QQ.from + 2,
              to: QQ.to - 2
            }),
            JSXElement(QQ) {
              let FQ = QQ.firstChild;
              if (!FQ || "JSXSelfClosingTag" == FQ.name) return null;
              let wQ = QQ.lastChild;
              return {
                from: FQ.to,
                to: wQ.type.isError ? QQ.to : wQ.from
              }
            },
            "JSXSelfClosingTag JSXOpenTag"(QQ) {
              var FQ;
              let wQ = null === (FQ = QQ.firstChild) || void 0 === FQ ? void 0 : FQ.nextSibling,
                LQ = QQ.lastChild;
              return !wQ || wQ.type.isError ? null : {
                from: wQ.to,
                to: LQ.type.isError ? QQ.to : LQ.from
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
      vF = {
        test: QQ => /^JSX/.test(QQ.name),
        facet: (0, EQ.t)({
          commentTokens: {
            block: {
              open: "{/*",
              close: "*/}"
            }
          }
        })
      },
      mF = kF.configure({
        dialect: "ts"
      }, "typescript"),
      uF = kF.configure({
        dialect: "jsx",
        props: [EQ.eb.add((QQ => QQ.isTop ? [vF] : void 0))]
      }),
      HF = kF.configure({
        dialect: "jsx ts",
        props: [EQ.eb.add((QQ => QQ.isTop ? [vF] : void 0))]
      }, "typescript");
    let bF = QQ => ({
      label: QQ,
      type: "keyword"
    });
    const YF = "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(bF),
      xF = YF.concat(["declare", "implements", "private", "protected", "public"].map(bF));

    function AF() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        FQ = QQ.jsx ? QQ.typescript ? HF : uF : QQ.typescript ? mF : kF,
        wQ = QQ.typescript ? yQ.concat(xF) : ZQ.concat(YF);
      return new EQ.j(FQ, [kF.data.of({
        autocomplete: (0, PQ.s)(oF, (0, PQ.m)(wQ))
      }), kF.data.of({
        autocomplete: DF
      }), QQ.jsx ? MF : []])
    }

    function tF(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : QQ.length;
      for (let LQ = null === FQ || void 0 === FQ ? void 0 : FQ.firstChild; LQ; LQ = LQ.nextSibling)
        if ("JSXIdentifier" == LQ.name || "JSXBuiltin" == LQ.name || "JSXNamespacedName" == LQ.name || "JSXMemberExpression" == LQ.name) return QQ.sliceString(LQ.from, Math.min(LQ.to, wQ));
      return ""
    }
    const eF = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      MF = gQ.f.inputHandler.of(((QQ, FQ, wQ, LQ, qQ) => {
        if ((eF ? QQ.composing : QQ.compositionStarted) || QQ.state.readOnly || FQ != wQ || ">" != LQ && "/" != LQ || !kF.isActiveAt(QQ.state, FQ, -1)) return !1;
        let oQ = qQ(),
          {
            state: DQ
          } = oQ,
          kQ = DQ.changeByRange((QQ => {
            var FQ;
            let wQ, {
                head: qQ
              } = QQ,
              oQ = (0, EQ.ob)(DQ).resolveInner(qQ - 1, -1);
            if ("JSXStartTag" == oQ.name && (oQ = oQ.parent), DQ.doc.sliceString(qQ - 1, qQ) != LQ || "JSXAttributeValue" == oQ.name && oQ.to > qQ);
            else {
              if (">" == LQ && "JSXFragmentTag" == oQ.name) return {
                range: QQ,
                changes: {
                  from: qQ,
                  insert: "</>"
                }
              };
              if ("/" == LQ && "JSXStartCloseTag" == oQ.name) {
                let QQ = oQ.parent,
                  LQ = QQ.parent;
                if (LQ && QQ.from == qQ - 2 && ((wQ = tF(DQ.doc, LQ.firstChild, qQ)) || "JSXFragmentTag" == (null === (FQ = LQ.firstChild) || void 0 === FQ ? void 0 : FQ.name))) {
                  let QQ = `${wQ}>`;
                  return {
                    range: nQ.j.cursor(qQ + QQ.length, -1),
                    changes: {
                      from: qQ,
                      insert: QQ
                    }
                  }
                }
              } else if (">" == LQ) {
                let FQ = function(QQ) {
                  for (;;) {
                    if ("JSXOpenTag" == QQ.name || "JSXSelfClosingTag" == QQ.name || "JSXFragmentTag" == QQ.name) return QQ;
                    if ("JSXEscape" == QQ.name || !QQ.parent) return null;
                    QQ = QQ.parent
                  }
                }(oQ);
                if (FQ && "JSXOpenTag" == FQ.name && !/^\/?>|^<\//.test(DQ.doc.sliceString(qQ, qQ + 2)) && (wQ = tF(DQ.doc, FQ, qQ))) return {
                  range: QQ,
                  changes: {
                    from: qQ,
                    insert: `</${wQ}>`
                  }
                }
              }
            }
            return {
              range: QQ
            }
          }));
        return !kQ.changes.empty && (QQ.dispatch([oQ, DQ.update(kQ, {
          userEvent: "input.complete",
          scrollIntoView: !0
        })]), !0)
      }))
  },
  40718: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      $: () => rQ,
      B: () => MF,
      E: () => ZQ,
      I: () => mF,
      L: () => PQ,
      O: () => eQ,
      P: () => IQ,
      S: () => NQ,
      T: () => KQ,
      X: () => nQ,
      Z: () => UQ,
      c: () => pF,
      db: () => VF,
      e: () => TQ,
      eb: () => HQ,
      f: () => xQ,
      ib: () => iF,
      j: () => OQ,
      kb: () => tQ,
      m: () => jF,
      n: () => JQ,
      ob: () => AQ,
      q: () => OF,
      t: () => uQ,
      x: () => fQ,
      y: () => hQ
    });
    var LQ, qQ = wQ(40723),
      oQ = wQ(40695),
      DQ = wQ(40702),
      kQ = wQ(40727),
      vQ = wQ(40709);
    const mQ = new qQ.g;

    function uQ(QQ) {
      return oQ.r.define({
        combine: QQ ? FQ => FQ.concat(QQ) : void 0
      })
    }
    const HQ = new qQ.g;
    class bQ {
      constructor(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this.data = QQ, this.name = LQ, oQ.n.prototype.hasOwnProperty("tree") || Object.defineProperty(oQ.n.prototype, "tree", {
          get() {
            return AQ(this)
          }
        }), this.parser = FQ, this.extension = [RQ.of(this), oQ.n.languageData.of(((QQ, FQ, wQ) => {
          let LQ = YQ(QQ, FQ, wQ),
            qQ = LQ.type.prop(mQ);
          if (!qQ) return [];
          let oQ = QQ.facet(qQ),
            DQ = LQ.type.prop(HQ);
          if (DQ) {
            let qQ = LQ.resolve(FQ - LQ.from, wQ);
            for (let FQ of DQ)
              if (FQ.test(qQ, QQ)) {
                let wQ = QQ.facet(FQ.facet);
                return "replace" == FQ.type ? wQ : wQ.concat(oQ)
              }
          }
          return oQ
        }))].concat(wQ)
      }
      isActiveAt(QQ, FQ) {
        return YQ(QQ, FQ, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1).type.prop(mQ) == this.data
      }
      findRegions(QQ) {
        let FQ = QQ.facet(RQ);
        if ((null === FQ || void 0 === FQ ? void 0 : FQ.data) == this.data) return [{
          from: 0,
          to: QQ.doc.length
        }];
        if (!FQ || !FQ.allowsNesting) return [];
        let wQ = [],
          LQ = (QQ, FQ) => {
            if (QQ.prop(mQ) == this.data) return void wQ.push({
              from: FQ,
              to: FQ + QQ.length
            });
            let oQ = QQ.prop(qQ.g.mounted);
            if (oQ) {
              if (oQ.tree.prop(mQ) == this.data) {
                if (oQ.overlay)
                  for (let QQ of oQ.overlay) wQ.push({
                    from: QQ.from + FQ,
                    to: QQ.to + FQ
                  });
                else wQ.push({
                  from: FQ,
                  to: FQ + QQ.length
                });
                return
              }
              if (oQ.overlay) {
                let QQ = wQ.length;
                if (LQ(oQ.tree, oQ.overlay[0].from + FQ), wQ.length > QQ) return
              }
            }
            for (let wQ = 0; wQ < QQ.children.length; wQ++) {
              let oQ = QQ.children[wQ];
              oQ instanceof qQ.t && LQ(oQ, QQ.positions[wQ] + FQ)
            }
          };
        return LQ(AQ(QQ), 0), wQ
      }
      get allowsNesting() {
        return !0
      }
    }

    function YQ(QQ, FQ, wQ) {
      let LQ = QQ.facet(RQ),
        oQ = AQ(QQ).topNode;
      if (!LQ || LQ.allowsNesting)
        for (let DQ = oQ; DQ; DQ = DQ.enter(FQ, wQ, qQ.f.ExcludeBuffers | qQ.f.EnterBracketed)) DQ.type.isTop && (oQ = DQ);
      return oQ
    }
    bQ.setState = oQ.H.define();
    class xQ extends bQ {
      constructor(QQ, FQ, wQ) {
        super(QQ, FQ, [], wQ), this.parser = FQ
      }
      static define(QQ) {
        let FQ = uQ(QQ.languageData);
        return new xQ(FQ, QQ.parser.configure({
          props: [mQ.add((QQ => QQ.isTop ? FQ : void 0))]
        }), QQ.name)
      }
      configure(QQ, FQ) {
        return new xQ(this.data, this.parser.configure(QQ), FQ || this.name)
      }
      get allowsNesting() {
        return this.parser.hasWrappers()
      }
    }

    function AQ(QQ) {
      let FQ = QQ.field(bQ.state, !1);
      return FQ ? FQ.tree : qQ.t.empty
    }

    function tQ(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QQ.doc.length;
      var wQ;
      return (null === (wQ = QQ.field(bQ.state, !1)) || void 0 === wQ ? void 0 : wQ.context.isDone(FQ)) || !1
    }

    function eQ(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QQ.viewport.to,
        wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        LQ = function(QQ, FQ) {
          let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
          var LQ;
          let qQ = null === (LQ = QQ.field(bQ.state, !1)) || void 0 === LQ ? void 0 : LQ.context;
          if (!qQ) return null;
          let oQ = qQ.viewport;
          qQ.updateViewport({
            from: 0,
            to: FQ
          });
          let DQ = qQ.isDone(FQ) || qQ.work(wQ, FQ) ? qQ.tree : null;
          return qQ.updateViewport(oQ), DQ
        }(QQ.state, FQ, wQ);
      return LQ != AQ(QQ.state) && QQ.dispatch({}), !!LQ
    }
    class MQ {
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
      read(QQ, FQ) {
        let wQ = this.cursorPos - this.string.length;
        return QQ < wQ || FQ >= this.cursorPos ? this.doc.sliceString(QQ, FQ) : this.string.slice(QQ - wQ, FQ - wQ)
      }
    }
    let GQ = null;
    class pQ {
      constructor(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          LQ = arguments.length > 3 ? arguments[3] : void 0,
          qQ = arguments.length > 4 ? arguments[4] : void 0,
          oQ = arguments.length > 5 ? arguments[5] : void 0,
          DQ = arguments.length > 6 ? arguments[6] : void 0,
          kQ = arguments.length > 7 ? arguments[7] : void 0;
        this.parser = QQ, this.state = FQ, this.fragments = wQ, this.tree = LQ, this.treeLen = qQ, this.viewport = oQ, this.skipped = DQ, this.scheduleOn = kQ, this.parse = null, this.tempSkipped = []
      }
      static create(QQ, FQ, wQ) {
        return new pQ(QQ, FQ, [], qQ.t.empty, 0, wQ, [], null)
      }
      startParse() {
        return this.parser.startParse(new MQ(this.state.doc), this.fragments)
      }
      work(QQ, FQ) {
        return null != FQ && FQ >= this.state.doc.length && (FQ = void 0), this.tree != qQ.t.empty && this.isDone(null !== FQ && void 0 !== FQ ? FQ : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext((() => {
          var wQ;
          if ("number" == typeof QQ) {
            let FQ = Date.now() + QQ;
            QQ = () => Date.now() > FQ
          }
          for (this.parse || (this.parse = this.startParse()), null != FQ && (null == this.parse.stoppedAt || this.parse.stoppedAt > FQ) && FQ < this.state.doc.length && this.parse.stopAt(FQ);;) {
            let LQ = this.parse.advance();
            if (LQ) {
              if (this.fragments = this.withoutTempSkipped(qQ.r.addTree(LQ, this.fragments, null != this.parse.stoppedAt)), this.treeLen = null !== (wQ = this.parse.stoppedAt) && void 0 !== wQ ? wQ : this.state.doc.length, this.tree = LQ, this.parse = null, !(this.treeLen < (null !== FQ && void 0 !== FQ ? FQ : this.state.doc.length))) return !0;
              this.parse = this.startParse()
            }
            if (QQ()) return !1
          }
        }))
      }
      takeTree() {
        let QQ, FQ;
        this.parse && (QQ = this.parse.parsedPos) >= this.treeLen && ((null == this.parse.stoppedAt || this.parse.stoppedAt > QQ) && this.parse.stopAt(QQ), this.withContext((() => {
          for (; !(FQ = this.parse.advance()););
        })), this.treeLen = QQ, this.tree = FQ, this.fragments = this.withoutTempSkipped(qQ.r.addTree(this.tree, this.fragments, !0)), this.parse = null)
      }
      withContext(QQ) {
        let FQ = GQ;
        GQ = this;
        try {
          return QQ()
        } finally {
          GQ = FQ
        }
      }
      withoutTempSkipped(QQ) {
        for (let FQ; FQ = this.tempSkipped.pop();) QQ = cQ(QQ, FQ.from, FQ.to);
        return QQ
      }
      changes(QQ, FQ) {
        let {
          fragments: wQ,
          tree: LQ,
          treeLen: oQ,
          viewport: DQ,
          skipped: kQ
        } = this;
        if (this.takeTree(), !QQ.empty) {
          let FQ = [];
          if (QQ.iterChangedRanges(((QQ, wQ, LQ, qQ) => FQ.push({
              fromA: QQ,
              toA: wQ,
              fromB: LQ,
              toB: qQ
            }))), wQ = qQ.r.applyChanges(wQ, FQ), LQ = qQ.t.empty, oQ = 0, DQ = {
              from: QQ.mapPos(DQ.from, -1),
              to: QQ.mapPos(DQ.to, 1)
            }, this.skipped.length) {
            kQ = [];
            for (let FQ of this.skipped) {
              let wQ = QQ.mapPos(FQ.from, 1),
                LQ = QQ.mapPos(FQ.to, -1);
              wQ < LQ && kQ.push({
                from: wQ,
                to: LQ
              })
            }
          }
        }
        return new pQ(this.parser, FQ, wQ, LQ, oQ, DQ, kQ, this.scheduleOn)
      }
      updateViewport(QQ) {
        if (this.viewport.from == QQ.from && this.viewport.to == QQ.to) return !1;
        this.viewport = QQ;
        let FQ = this.skipped.length;
        for (let wQ = 0; wQ < this.skipped.length; wQ++) {
          let {
            from: FQ,
            to: LQ
          } = this.skipped[wQ];
          FQ < QQ.to && LQ > QQ.from && (this.fragments = cQ(this.fragments, FQ, LQ), this.skipped.splice(wQ--, 1))
        }
        return !(this.skipped.length >= FQ) && (this.reset(), !0)
      }
      reset() {
        this.parse && (this.takeTree(), this.parse = null)
      }
      skipUntilInView(QQ, FQ) {
        this.skipped.push({
          from: QQ,
          to: FQ
        })
      }
      static getSkippingParser(QQ) {
        return new class extends qQ.q {
          createParse(FQ, wQ, LQ) {
            let oQ = LQ[0].from,
              DQ = LQ[LQ.length - 1].to;
            return {
              parsedPos: oQ,
              advance() {
                let FQ = GQ;
                if (FQ) {
                  for (let QQ of LQ) FQ.tempSkipped.push(QQ);
                  QQ && (FQ.scheduleOn = FQ.scheduleOn ? Promise.all([FQ.scheduleOn, QQ]) : QQ)
                }
                return this.parsedPos = DQ, new qQ.t(qQ.l.none, [], [], DQ - oQ)
              },
              stoppedAt: null,
              stopAt() {}
            }
          }
        }
      }
      isDone(QQ) {
        QQ = Math.min(QQ, this.state.doc.length);
        let FQ = this.fragments;
        return this.treeLen >= QQ && FQ.length && 0 == FQ[0].from && FQ[0].to >= QQ
      }
      static get() {
        return GQ
      }
    }

    function cQ(QQ, FQ, wQ) {
      return qQ.r.applyChanges(QQ, [{
        fromA: FQ,
        toA: wQ,
        fromB: FQ,
        toB: wQ
      }])
    }
    class CQ {
      constructor(QQ) {
        this.context = QQ, this.tree = QQ.tree
      }
      apply(QQ) {
        if (!QQ.docChanged && this.tree == this.context.tree) return this;
        let FQ = this.context.changes(QQ.changes, QQ.state),
          wQ = this.context.treeLen == QQ.startState.doc.length ? void 0 : Math.max(QQ.changes.mapPos(this.context.treeLen), FQ.viewport.to);
        return FQ.work(20, wQ) || FQ.takeTree(), new CQ(FQ)
      }
      static init(QQ) {
        let FQ = Math.min(3e3, QQ.doc.length),
          wQ = pQ.create(QQ.facet(RQ).parser, QQ, {
            from: 0,
            to: FQ
          });
        return wQ.work(20, FQ) || wQ.takeTree(), new CQ(wQ)
      }
    }
    bQ.state = oQ.L.define({
      create: CQ.init,
      update(QQ, FQ) {
        for (let wQ of FQ.effects)
          if (wQ.is(bQ.setState)) return wQ.value;
        return FQ.startState.facet(RQ) != FQ.state.facet(RQ) ? CQ.init(FQ.state) : QQ.apply(FQ)
      }
    });
    let SQ = QQ => {
      let FQ = setTimeout((() => QQ()), 500);
      return () => clearTimeout(FQ)
    };
    "undefined" != typeof requestIdleCallback && (SQ = QQ => {
      let FQ = -1,
        wQ = setTimeout((() => {
          FQ = requestIdleCallback(QQ, {
            timeout: 400
          })
        }), 100);
      return () => FQ < 0 ? clearTimeout(wQ) : cancelIdleCallback(FQ)
    });
    const iQ = "undefined" != typeof navigator && (null === (LQ = navigator.scheduling) || void 0 === LQ ? void 0 : LQ.isInputPending) ? () => navigator.scheduling.isInputPending() : null,
      WQ = DQ.h.fromClass(class {
        constructor(QQ) {
          this.view = QQ, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork()
        }
        update(QQ) {
          let FQ = this.view.state.field(bQ.state).context;
          (FQ.updateViewport(QQ.view.viewport) || this.view.viewport.to > FQ.treeLen) && this.scheduleWork(), (QQ.docChanged || QQ.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(FQ)
        }
        scheduleWork() {
          if (this.working) return;
          let {
            state: QQ
          } = this.view, FQ = QQ.field(bQ.state);
          FQ.tree == FQ.context.tree && FQ.context.isDone(QQ.doc.length) || (this.working = SQ(this.work))
        }
        work(QQ) {
          this.working = null;
          let FQ = Date.now();
          if (this.chunkEnd < FQ && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = FQ + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
          let {
            state: wQ,
            viewport: {
              to: LQ
            }
          } = this.view, qQ = wQ.field(bQ.state);
          if (qQ.tree == qQ.context.tree && qQ.context.isDone(LQ + 1e5)) return;
          let oQ = Date.now() + Math.min(this.chunkBudget, 100, QQ && !iQ ? Math.max(25, QQ.timeRemaining() - 5) : 1e9),
            DQ = qQ.context.treeLen < LQ && wQ.doc.length > LQ + 1e3,
            kQ = qQ.context.work((() => iQ && iQ() || Date.now() > oQ), LQ + (DQ ? 0 : 1e5));
          this.chunkBudget -= Date.now() - FQ, (kQ || this.chunkBudget <= 0) && (qQ.context.takeTree(), this.view.dispatch({
            effects: bQ.setState.of(new CQ(qQ.context))
          })), this.chunkBudget > 0 && (!kQ || DQ) && this.scheduleWork(), this.checkAsyncSchedule(qQ.context)
        }
        checkAsyncSchedule(QQ) {
          QQ.scheduleOn && (this.workScheduled++, QQ.scheduleOn.then((() => this.scheduleWork())).catch((QQ => (0, DQ.V)(this.view.state, QQ))).then((() => this.workScheduled--)), QQ.scheduleOn = null)
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
      RQ = oQ.r.define({
        combine: QQ => QQ.length ? QQ[0] : null,
        enables: QQ => [bQ.state, WQ, DQ.f.contentAttributes.compute([QQ], (FQ => {
          let wQ = FQ.facet(QQ);
          return wQ && wQ.name ? {
            "data-language": wQ.name
          } : {}
        }))]
      });
    class OQ {
      constructor(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        this.language = QQ, this.support = FQ, this.extension = [QQ, FQ]
      }
    }
    const sQ = oQ.r.define(),
      rQ = oQ.r.define({
        combine: QQ => {
          if (!QQ.length) return "  ";
          let FQ = QQ[0];
          if (!FQ || /\S/.test(FQ) || Array.from(FQ).some((QQ => QQ != FQ[0]))) throw new Error("Invalid indent unit: " + JSON.stringify(QQ[0]));
          return FQ
        }
      });

    function IQ(QQ) {
      let FQ = QQ.facet(rQ);
      return 9 == FQ.charCodeAt(0) ? QQ.tabSize * FQ.length : FQ.length
    }

    function UQ(QQ, FQ) {
      let wQ = "",
        LQ = QQ.tabSize,
        qQ = QQ.facet(rQ)[0];
      if ("\t" == qQ) {
        for (; FQ >= LQ;) wQ += "\t", FQ -= LQ;
        qQ = " "
      }
      for (let oQ = 0; oQ < FQ; oQ++) wQ += qQ;
      return wQ
    }

    function NQ(QQ, FQ) {
      QQ instanceof oQ.n && (QQ = new TQ(QQ));
      for (let LQ of QQ.state.facet(sQ)) {
        let wQ = LQ(QQ, FQ);
        if (void 0 !== wQ) return wQ
      }
      let wQ = AQ(QQ.state);
      return wQ.length >= FQ ? function(QQ, FQ, wQ) {
        let LQ = FQ.resolveStack(wQ),
          qQ = FQ.resolveInner(wQ, -1).resolve(wQ, 0).enterUnfinishedNodesBefore(wQ);
        if (qQ != LQ.node) {
          let QQ = [];
          for (let FQ = qQ; FQ && !(FQ.from < LQ.node.from || FQ.to > LQ.node.to || FQ.from == LQ.node.from && FQ.type == LQ.node.type); FQ = FQ.parent) QQ.push(FQ);
          for (let FQ = QQ.length - 1; FQ >= 0; FQ--) LQ = {
            node: QQ[FQ],
            next: LQ
          }
        }
        return zQ(LQ, QQ, wQ)
      }(QQ, wQ, FQ) : null
    }
    class TQ {
      constructor(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.state = QQ, this.options = FQ, this.unit = IQ(QQ)
      }
      lineAt(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          wQ = this.state.doc.lineAt(QQ),
          {
            simulateBreak: LQ,
            simulateDoubleBreak: qQ
          } = this.options;
        return null != LQ && LQ >= wQ.from && LQ <= wQ.to ? qQ && LQ == QQ ? {
          text: "",
          from: QQ
        } : (FQ < 0 ? LQ < QQ : LQ <= QQ) ? {
          text: wQ.text.slice(LQ - wQ.from),
          from: LQ
        } : {
          text: wQ.text.slice(0, LQ - wQ.from),
          from: wQ.from
        } : wQ
      }
      textAfterPos(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (this.options.simulateDoubleBreak && QQ == this.options.simulateBreak) return "";
        let {
          text: wQ,
          from: LQ
        } = this.lineAt(QQ, FQ);
        return wQ.slice(QQ - LQ, Math.min(wQ.length, QQ + 100 - LQ))
      }
      column(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: wQ,
            from: LQ
          } = this.lineAt(QQ, FQ),
          qQ = this.countColumn(wQ, QQ - LQ),
          oQ = this.options.overrideIndentation ? this.options.overrideIndentation(LQ) : -1;
        return oQ > -1 && (qQ += oQ - this.countColumn(wQ, wQ.search(/\S|$/))), qQ
      }
      countColumn(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QQ.length;
        return (0, oQ.X)(QQ, this.state.tabSize, FQ)
      }
      lineIndent(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: wQ,
            from: LQ
          } = this.lineAt(QQ, FQ),
          qQ = this.options.overrideIndentation;
        if (qQ) {
          let QQ = qQ(LQ);
          if (QQ > -1) return QQ
        }
        return this.countColumn(wQ, wQ.search(/\S|$/))
      }
      get simulatedBreak() {
        return this.options.simulateBreak || null
      }
    }
    const KQ = new qQ.g;

    function zQ(QQ, FQ, wQ) {
      for (let LQ = QQ; LQ; LQ = LQ.next) {
        let QQ = lQ(LQ.node);
        if (QQ) return QQ(aQ.create(FQ, wQ, LQ))
      }
      return 0
    }

    function lQ(QQ) {
      let FQ = QQ.type.prop(KQ);
      if (FQ) return FQ;
      let wQ, LQ = QQ.firstChild;
      if (LQ && (wQ = LQ.type.prop(qQ.g.closedBy))) {
        let FQ = QQ.lastChild,
          LQ = FQ && wQ.indexOf(FQ.name) > -1;
        return QQ => VQ(QQ, !0, 1, void 0, LQ && ! function(QQ) {
          return QQ.pos == QQ.options.simulateBreak && QQ.options.simulateDoubleBreak
        }(QQ) ? FQ.from : void 0)
      }
      return null == QQ.parent ? jQ : null
    }

    function jQ() {
      return 0
    }
    class aQ extends TQ {
      constructor(QQ, FQ, wQ) {
        super(QQ.state, QQ.options), this.base = QQ, this.pos = FQ, this.context = wQ
      }
      get node() {
        return this.context.node
      }
      static create(QQ, FQ, wQ) {
        return new aQ(QQ, FQ, wQ)
      }
      get textAfter() {
        return this.textAfterPos(this.pos)
      }
      get baseIndent() {
        return this.baseIndentFor(this.node)
      }
      baseIndentFor(QQ) {
        let FQ = this.state.doc.lineAt(QQ.from);
        for (;;) {
          let wQ = QQ.resolve(FQ.from);
          for (; wQ.parent && wQ.parent.from == wQ.from;) wQ = wQ.parent;
          if (XQ(wQ, QQ)) break;
          FQ = this.state.doc.lineAt(wQ.from)
        }
        return this.lineIndent(FQ.from)
      }
      continue () {
        return zQ(this.context.next, this.base, this.pos)
      }
    }

    function XQ(QQ, FQ) {
      for (let wQ = FQ; wQ; wQ = wQ.parent)
        if (QQ == wQ) return !0;
      return !1
    }

    function fQ(QQ) {
      let {
        closing: FQ,
        align: wQ = !0,
        units: LQ = 1
      } = QQ;
      return QQ => VQ(QQ, wQ, LQ, FQ)
    }

    function VQ(QQ, FQ, wQ, LQ, qQ) {
      let oQ = QQ.textAfter,
        DQ = oQ.match(/^\s*/)[0].length,
        kQ = LQ && oQ.slice(DQ, DQ + LQ.length) == LQ || qQ == QQ.pos + DQ,
        vQ = FQ ? function(QQ) {
          let FQ = QQ.node,
            wQ = FQ.childAfter(FQ.from),
            LQ = FQ.lastChild;
          if (!wQ) return null;
          let qQ = QQ.options.simulateBreak,
            oQ = QQ.state.doc.lineAt(wQ.from),
            DQ = null == qQ || qQ <= oQ.from ? oQ.to : Math.min(oQ.to, qQ);
          for (let kQ = wQ.to;;) {
            let QQ = FQ.childAfter(kQ);
            if (!QQ || QQ == LQ) return null;
            if (!QQ.type.isSkipped) {
              if (QQ.from >= DQ) return null;
              let FQ = /^ */.exec(oQ.text.slice(wQ.to - oQ.from))[0].length;
              return {
                from: wQ.from,
                to: wQ.to + FQ
              }
            }
            kQ = QQ.to
          }
        }(QQ) : null;
      return vQ ? kQ ? QQ.column(vQ.from) : QQ.column(vQ.to) : QQ.baseIndent + (kQ ? 0 : QQ.unit * wQ)
    }
    const hQ = QQ => QQ.baseIndent;

    function JQ() {
      let {
        except: QQ,
        units: FQ = 1
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return wQ => {
        let LQ = QQ && QQ.test(wQ.textAfter);
        return wQ.baseIndent + (LQ ? 0 : FQ * wQ.unit)
      }
    }
    const EQ = 200;

    function nQ() {
      return oQ.n.transactionFilter.of((QQ => {
        if (!QQ.docChanged || !QQ.isUserEvent("input.type") && !QQ.isUserEvent("input.complete")) return QQ;
        let FQ = QQ.startState.languageDataAt("indentOnInput", QQ.startState.selection.main.head);
        if (!FQ.length) return QQ;
        let wQ = QQ.newDoc,
          {
            head: LQ
          } = QQ.newSelection.main,
          qQ = wQ.lineAt(LQ);
        if (LQ > qQ.from + EQ) return QQ;
        let oQ = wQ.sliceString(qQ.from, LQ);
        if (!FQ.some((QQ => QQ.test(oQ)))) return QQ;
        let {
          state: DQ
        } = QQ, kQ = -1, vQ = [];
        for (let {
            head: mQ
          }
          of DQ.selection.PA) {
          let QQ = DQ.doc.lineAt(mQ);
          if (QQ.from == kQ) continue;
          kQ = QQ.from;
          let FQ = NQ(DQ, QQ.from);
          if (null == FQ) continue;
          let wQ = /^\s*/.exec(QQ.text)[0],
            LQ = UQ(DQ, FQ);
          wQ != LQ && vQ.push({
            from: QQ.from,
            to: QQ.from + wQ.length,
            insert: LQ
          })
        }
        return vQ.length ? [QQ, {
          changes: vQ,
          sequential: !0
        }] : QQ
      }))
    }
    const gQ = oQ.r.define(),
      PQ = new qQ.g;

    function ZQ(QQ) {
      let FQ = QQ.firstChild,
        wQ = QQ.lastChild;
      return FQ && FQ.to < wQ.from ? {
        from: FQ.to,
        to: wQ.type.isError ? QQ.to : wQ.from
      } : null
    }

    function yQ(QQ) {
      let FQ = QQ.lastChild;
      return FQ && FQ.to == QQ.to && FQ.type.isError
    }

    function BQ(QQ, FQ, wQ) {
      for (let LQ of QQ.facet(gQ)) {
        let qQ = LQ(QQ, FQ, wQ);
        if (qQ) return qQ
      }
      return function(QQ, FQ, wQ) {
        let LQ = AQ(QQ);
        if (LQ.length < wQ) return null;
        let qQ = null;
        for (let oQ = LQ.resolveStack(wQ, 1); oQ; oQ = oQ.next) {
          let DQ = oQ.node;
          if (DQ.to <= wQ || DQ.from > wQ) continue;
          if (qQ && DQ.from < FQ) break;
          let kQ = DQ.type.prop(PQ);
          if (kQ && (DQ.to < LQ.length - 50 || LQ.length == QQ.doc.length || !yQ(DQ))) {
            let LQ = kQ(DQ, QQ);
            LQ && LQ.from <= wQ && LQ.from >= FQ && LQ.to > wQ && (qQ = LQ)
          }
        }
        return qQ
      }(QQ, FQ, wQ)
    }

    function dQ(QQ, FQ) {
      let wQ = FQ.mapPos(QQ.from, 1),
        LQ = FQ.mapPos(QQ.to, -1);
      return wQ >= LQ ? void 0 : {
        from: wQ,
        to: LQ
      }
    }
    const QF = oQ.H.define({
        map: dQ
      }),
      FF = oQ.H.define({
        map: dQ
      });

    function wF(QQ) {
      let FQ = [];
      for (let {
          head: wQ
        }
        of QQ.state.selection.PA) FQ.some((QQ => QQ.from <= wQ && QQ.to >= wQ)) || FQ.push(QQ.lineBlockAt(wQ));
      return FQ
    }
    const LF = oQ.L.define({
      create: () => DQ.c.none,
      update(QQ, FQ) {
        FQ.isUserEvent("delete") && FQ.changes.iterChangedRanges(((FQ, wQ) => QQ = qF(QQ, FQ, wQ))), QQ = QQ.map(FQ.changes);
        for (let wQ of FQ.effects)
          if (wQ.is(QF) && !DF(QQ, wQ.value.from, wQ.value.to)) {
            let {
              preparePlaceholder: LQ
            } = FQ.state.facet(HF), qQ = LQ ? DQ.c.replace({
              widget: new AF(LQ(FQ.state, wQ.value))
            }) : xF;
            QQ = QQ.update({
              add: [qQ.range(wQ.value.from, wQ.value.to)]
            })
          } else wQ.is(FF) && (QQ = QQ.update({
            filter: (QQ, FQ) => wQ.value.from != QQ || wQ.value.to != FQ,
            filterFrom: wQ.value.from,
            filterTo: wQ.value.to
          }));
        return FQ.selection && (QQ = qF(QQ, FQ.selection.main.head)), QQ
      },
      provide: QQ => DQ.f.qo.from(QQ),
      toJSON(QQ, FQ) {
        let wQ = [];
        return QQ.between(0, FQ.doc.length, ((QQ, FQ) => {
          wQ.push(QQ, FQ)
        })), wQ
      },
      fromJSON(QQ) {
        if (!Array.isArray(QQ) || QQ.length % 2) throw new RangeError("Invalid JSON for fold state");
        let FQ = [];
        for (let wQ = 0; wQ < QQ.length;) {
          let LQ = QQ[wQ++],
            qQ = QQ[wQ++];
          if ("number" != typeof LQ || "number" != typeof qQ) throw new RangeError("Invalid JSON for fold state");
          FQ.push(xF.range(LQ, qQ))
        }
        return DQ.c.set(FQ, !0)
      }
    });

    function qF(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : FQ,
        LQ = !1;
      return QQ.between(FQ, wQ, ((QQ, qQ) => {
        QQ < wQ && qQ > FQ && (LQ = !0)
      })), LQ ? QQ.update({
        filterFrom: FQ,
        filterTo: wQ,
        filter: (QQ, LQ) => QQ >= wQ || LQ <= FQ
      }) : QQ
    }

    function oF(QQ, FQ, wQ) {
      var LQ;
      let qQ = null;
      return null === (LQ = QQ.field(LF, !1)) || void 0 === LQ || LQ.between(FQ, wQ, ((QQ, FQ) => {
        (!qQ || qQ.from > QQ) && (qQ = {
          from: QQ,
          to: FQ
        })
      })), qQ
    }

    function DF(QQ, FQ, wQ) {
      let LQ = !1;
      return QQ.between(FQ, FQ, ((QQ, qQ) => {
        QQ == FQ && qQ == wQ && (LQ = !0)
      })), LQ
    }

    function kF(QQ, FQ) {
      return QQ.field(LF, !1) ? FQ : FQ.concat(oQ.H.appendConfig.of(bF()))
    }

    function vF(QQ, FQ) {
      let wQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        LQ = QQ.state.doc.lineAt(FQ.from).number,
        qQ = QQ.state.doc.lineAt(FQ.to).number;
      return DQ.f.announce.of(`${QQ.state.phrase(wQ?"Folded lines":"Unfolded lines")} ${LQ} ${QQ.state.phrase("to")} ${qQ}.`)
    }
    const mF = [{
        key: "Ctrl-Shift-[",
        mac: "Cmd-Alt-[",
        run: QQ => {
          for (let FQ of wF(QQ)) {
            let wQ = BQ(QQ.state, FQ.from, FQ.to);
            if (wQ) return QQ.dispatch({
              effects: kF(QQ.state, [QF.of(wQ), vF(QQ, wQ)])
            }), !0
          }
          return !1
        }
      }, {
        key: "Ctrl-Shift-]",
        mac: "Cmd-Alt-]",
        run: QQ => {
          if (!QQ.state.field(LF, !1)) return !1;
          let FQ = [];
          for (let wQ of wF(QQ)) {
            let LQ = oF(QQ.state, wQ.from, wQ.to);
            LQ && FQ.push(FF.of(LQ), vF(QQ, LQ, !1))
          }
          return FQ.length && QQ.dispatch({
            effects: FQ
          }), FQ.length > 0
        }
      }, {
        key: "Ctrl-Alt-[",
        run: QQ => {
          let {
            state: FQ
          } = QQ, wQ = [];
          for (let LQ = 0; LQ < FQ.doc.length;) {
            let qQ = QQ.lineBlockAt(LQ),
              oQ = BQ(FQ, qQ.from, qQ.to);
            oQ && wQ.push(QF.of(oQ)), LQ = (oQ ? QQ.lineBlockAt(oQ.to) : qQ).to + 1
          }
          return wQ.length && QQ.dispatch({
            effects: kF(QQ.state, wQ)
          }), !!wQ.length
        }
      }, {
        key: "Ctrl-Alt-]",
        run: QQ => {
          let FQ = QQ.state.field(LF, !1);
          if (!FQ || !FQ.size) return !1;
          let wQ = [];
          return FQ.between(0, QQ.state.doc.length, ((QQ, FQ) => {
            wQ.push(FF.of({
              from: QQ,
              to: FQ
            }))
          })), QQ.dispatch({
            effects: wQ
          }), !0
        }
      }],
      uF = {
        placeholderDOM: null,
        preparePlaceholder: null,
        placeholderText: "\u2026"
      },
      HF = oQ.r.define({
        combine: QQ => (0, oQ.W)(QQ, uF)
      });

    function bF(QQ) {
      let FQ = [LF, GF];
      return QQ && FQ.push(HF.of(QQ)), FQ
    }

    function YF(QQ, FQ) {
      let {
        state: wQ
      } = QQ, LQ = wQ.facet(HF), qQ = FQ => {
        let wQ = QQ.lineBlockAt(QQ.posAtDOM(FQ.target)),
          LQ = oF(QQ.state, wQ.from, wQ.to);
        LQ && QQ.dispatch({
          effects: FF.of(LQ)
        }), FQ.preventDefault()
      };
      if (LQ.placeholderDOM) return LQ.placeholderDOM(QQ, qQ, FQ);
      let oQ = document.createElement("span");
      return oQ.textContent = LQ.placeholderText, oQ.setAttribute("aria-label", wQ.phrase("folded code")), oQ.title = wQ.phrase("unfold"), oQ.className = "cm-foldPlaceholder", oQ.onclick = qQ, oQ
    }
    const xF = DQ.c.replace({
      widget: new class extends DQ.l {
        toDOM(QQ) {
          return YF(QQ, null)
        }
      }
    });
    class AF extends DQ.l {
      constructor(QQ) {
        super(), this.value = QQ
      }
      eq(QQ) {
        return this.value == QQ.value
      }
      toDOM(QQ) {
        return YF(QQ, this.value)
      }
    }
    const tF = {
      openText: "\u2304",
      closedText: "\u203a",
      markerDOM: null,
      domEventHandlers: {},
      foldingChanged: () => !1
    };
    class eF extends DQ.g {
      constructor(QQ, FQ) {
        super(), this.config = QQ, this.open = FQ
      }
      eq(QQ) {
        return this.config == QQ.config && this.open == QQ.open
      }
      toDOM(QQ) {
        if (this.config.markerDOM) return this.config.markerDOM(this.open);
        let FQ = document.createElement("span");
        return FQ.textContent = this.open ? this.config.openText : this.config.closedText, FQ.title = QQ.state.phrase(this.open ? "Fold line" : "Unfold line"), FQ
      }
    }

    function MF() {
      let QQ = {
          ...tF,
          ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        },
        FQ = new eF(QQ, !0),
        wQ = new eF(QQ, !1),
        LQ = DQ.h.fromClass(class {
          constructor(QQ) {
            this.from = QQ.viewport.from, this.markers = this.buildMarkers(QQ)
          }
          update(FQ) {
            (FQ.docChanged || FQ.viewportChanged || FQ.startState.facet(RQ) != FQ.state.facet(RQ) || FQ.startState.field(LF, !1) != FQ.state.field(LF, !1) || AQ(FQ.startState) != AQ(FQ.state) || QQ.foldingChanged(FQ)) && (this.markers = this.buildMarkers(FQ.view))
          }
          buildMarkers(QQ) {
            let LQ = new oQ.z;
            for (let qQ of QQ.viewportLineBlocks) {
              let oQ = oF(QQ.state, qQ.from, qQ.to) ? wQ : BQ(QQ.state, qQ.from, qQ.to) ? FQ : null;
              oQ && LQ.add(qQ.from, qQ.from, oQ)
            }
            return LQ.finish()
          }
        }),
        {
          domEventHandlers: qQ
        } = QQ;
      return [LQ, (0, DQ.B)({
        class: "cm-foldGutter",
        markers(QQ) {
          var FQ;
          return (null === (FQ = QQ.plugin(LQ)) || void 0 === FQ ? void 0 : FQ.markers) || oQ.B.empty
        },
        initialSpacer: () => new eF(QQ, !1),
        domEventHandlers: {
          ...qQ,
          click: (QQ, FQ, wQ) => {
            if (qQ.click && qQ.click(QQ, FQ, wQ)) return !0;
            let LQ = oF(QQ.state, FQ.from, FQ.to);
            if (LQ) return QQ.dispatch({
              effects: FF.of(LQ)
            }), !0;
            let oQ = BQ(QQ.state, FQ.from, FQ.to);
            return !!oQ && (QQ.dispatch({
              effects: QF.of(oQ)
            }), !0)
          }
        }
      }), bF()]
    }
    const GF = DQ.f.baseTheme({
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
    class pF {
      constructor(QQ, FQ) {
        let wQ;

        function LQ(QQ) {
          let FQ = vQ.e.newName();
          return (wQ || (wQ = Object.create(null)))["." + FQ] = QQ, FQ
        }
        this.specs = QQ;
        const qQ = "string" == typeof FQ.all ? FQ.all : FQ.all ? LQ(FQ.all) : void 0,
          oQ = FQ.scope;
        this.scope = oQ instanceof bQ ? QQ => QQ.prop(mQ) == oQ.data : oQ ? QQ => QQ == oQ : void 0, this.style = (0, kQ.m)(QQ.map((QQ => ({
          tag: QQ.tag,
          class: QQ.class || LQ(Object.assign({}, QQ, {
            tag: null
          }))
        }))), {
          all: qQ
        }).style, this.module = wQ ? new vQ.e(wQ) : null, this.themeType = FQ.themeType
      }
      static define(QQ, FQ) {
        return new pF(QQ, FQ || {})
      }
    }
    const cF = oQ.r.define(),
      CF = oQ.r.define({
        combine: QQ => QQ.length ? [QQ[0]] : null
      });

    function SF(QQ) {
      let FQ = QQ.facet(cF);
      return FQ.length ? FQ : QQ.facet(CF)
    }

    function iF(QQ, FQ) {
      let wQ, LQ = [RF];
      return QQ instanceof pF && (QQ.module && LQ.push(DQ.f.styleModule.of(QQ.module)), wQ = QQ.themeType), (null === FQ || void 0 === FQ ? void 0 : FQ.fallback) ? LQ.push(CF.of(QQ)) : wQ ? LQ.push(cF.computeN([DQ.f.darkTheme], (FQ => FQ.facet(DQ.f.darkTheme) == ("dark" == wQ) ? [QQ] : []))) : LQ.push(cF.of(QQ)), LQ
    }
    class WF {
      constructor(QQ) {
        this.markCache = Object.create(null), this.tree = AQ(QQ.state), this.qo = this.buildDeco(QQ, SF(QQ.state)), this.decoratedTo = QQ.viewport.to
      }
      update(QQ) {
        let FQ = AQ(QQ.state),
          wQ = SF(QQ.state),
          LQ = wQ != SF(QQ.startState),
          {
            viewport: qQ
          } = QQ.view,
          oQ = QQ.changes.mapPos(this.decoratedTo, 1);
        FQ.length < qQ.to && !LQ && FQ.type == this.tree.type && oQ >= qQ.to ? (this.qo = this.qo.map(QQ.changes), this.decoratedTo = oQ) : (FQ != this.tree || QQ.viewportChanged || LQ) && (this.tree = FQ, this.qo = this.buildDeco(QQ.view, wQ), this.decoratedTo = qQ.to)
      }
      buildDeco(QQ, FQ) {
        if (!FQ || !this.tree.length) return DQ.c.none;
        let wQ = new oQ.z;
        for (let {
            from: LQ,
            to: qQ
          }
          of QQ.B5)(0, kQ.e)(this.tree, FQ, ((QQ, FQ, LQ) => {
          wQ.add(QQ, FQ, this.markCache[LQ] || (this.markCache[LQ] = DQ.c.mark({
            class: LQ
          })))
        }), LQ, qQ);
        return wQ.finish()
      }
    }
    const RF = oQ.w.high(DQ.h.fromClass(WF, {
        qo: QQ => QQ.qo
      })),
      OF = pF.define([{
        tag: kQ.q.meta,
        color: "#404740"
      }, {
        tag: kQ.q.link,
        textDecoration: "underline"
      }, {
        tag: kQ.q.heading,
        textDecoration: "underline",
        fontWeight: "bold"
      }, {
        tag: kQ.q.emphasis,
        fontStyle: "italic"
      }, {
        tag: kQ.q.strong,
        fontWeight: "bold"
      }, {
        tag: kQ.q.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: kQ.q.keyword,
        color: "#708"
      }, {
        tag: [kQ.q.atom, kQ.q.bool, kQ.q.url, kQ.q.contentSeparator, kQ.q.labelName],
        color: "#219"
      }, {
        tag: [kQ.q.literal, kQ.q.inserted],
        color: "#164"
      }, {
        tag: [kQ.q.string, kQ.q.deleted],
        color: "#a11"
      }, {
        tag: [kQ.q.regexp, kQ.q.escape, kQ.q.special(kQ.q.string)],
        color: "#e40"
      }, {
        tag: kQ.q.definition(kQ.q.variableName),
        color: "#00f"
      }, {
        tag: kQ.q.local(kQ.q.variableName),
        color: "#30a"
      }, {
        tag: [kQ.q.typeName, kQ.q.namespace],
        color: "#085"
      }, {
        tag: kQ.q.className,
        color: "#167"
      }, {
        tag: [kQ.q.special(kQ.q.variableName), kQ.q.macroName],
        color: "#256"
      }, {
        tag: kQ.q.definition(kQ.q.propertyName),
        color: "#00c"
      }, {
        tag: kQ.q.comment,
        color: "#940"
      }, {
        tag: kQ.q.invalid,
        color: "#f00"
      }]),
      sF = DQ.f.baseTheme({
        "&.cm-focused .cm-matchingBracket": {
          backgroundColor: "#328c8252"
        },
        "&.cm-focused .cm-nonmatchingBracket": {
          backgroundColor: "#bb555544"
        }
      }),
      rF = 1e4,
      IF = "()[]{}",
      UF = oQ.r.define({
        combine: QQ => (0, oQ.W)(QQ, {
          afterCursor: !0,
          brackets: IF,
          maxScanDistance: rF,
          renderMatch: KF
        })
      }),
      NF = DQ.c.mark({
        class: "cm-matchingBracket"
      }),
      TF = DQ.c.mark({
        class: "cm-nonmatchingBracket"
      });

    function KF(QQ) {
      let FQ = [],
        wQ = QQ.matched ? NF : TF;
      return FQ.push(wQ.range(QQ.start.from, QQ.start.to)), QQ.end && FQ.push(wQ.range(QQ.end.from, QQ.end.to)), FQ
    }

    function zF(QQ) {
      let FQ = [],
        wQ = QQ.facet(UF);
      for (let LQ of QQ.selection.PA) {
        if (!LQ.empty) continue;
        let qQ = VF(QQ, LQ.head, -1, wQ) || LQ.head > 0 && VF(QQ, LQ.head - 1, 1, wQ) || wQ.afterCursor && (VF(QQ, LQ.head, 1, wQ) || LQ.head < QQ.doc.length && VF(QQ, LQ.head + 1, -1, wQ));
        qQ && (FQ = FQ.concat(wQ.renderMatch(qQ, QQ)))
      }
      return DQ.c.set(FQ, !0)
    }
    const lF = [DQ.h.fromClass(class {
      constructor(QQ) {
        this.paused = !1, this.qo = zF(QQ.state)
      }
      update(QQ) {
        (QQ.docChanged || QQ.selectionSet || this.paused) && (QQ.view.composing ? (this.qo = this.qo.map(QQ.changes), this.paused = !0) : (this.qo = zF(QQ.state), this.paused = !1))
      }
    }, {
      qo: QQ => QQ.qo
    }), sF];

    function jF() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [UF.of(QQ), lF]
    }
    const aF = new qQ.g;

    function XF(QQ, FQ, wQ) {
      let LQ = QQ.prop(FQ < 0 ? qQ.g.openedBy : qQ.g.closedBy);
      if (LQ) return LQ;
      if (1 == QQ.name.length) {
        let LQ = wQ.indexOf(QQ.name);
        if (LQ > -1 && LQ % 2 == (FQ < 0 ? 1 : 0)) return [wQ[LQ + FQ]]
      }
      return null
    }

    function fF(QQ) {
      let FQ = QQ.type.prop(aF);
      return FQ ? FQ(QQ.node) : QQ
    }

    function VF(QQ, FQ, wQ) {
      let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        qQ = LQ.maxScanDistance || rF,
        oQ = LQ.brackets || IF,
        DQ = AQ(QQ),
        kQ = DQ.resolveInner(FQ, wQ);
      for (let vQ = kQ; vQ; vQ = vQ.parent) {
        let LQ = XF(vQ.type, wQ, oQ);
        if (LQ && vQ.from < vQ.to) {
          let qQ = fF(vQ);
          if (qQ && (wQ > 0 ? FQ >= qQ.from && FQ < qQ.to : FQ > qQ.from && FQ <= qQ.to)) return hF(QQ, FQ, wQ, vQ, qQ, LQ, oQ)
        }
      }
      return function(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
        if (wQ < 0 ? !FQ : FQ == QQ.doc.length) return null;
        let kQ = wQ < 0 ? QQ.sliceDoc(FQ - 1, FQ) : QQ.sliceDoc(FQ, FQ + 1),
          vQ = DQ.indexOf(kQ);
        if (vQ < 0 || vQ % 2 == 0 != wQ > 0) return null;
        let mQ = {
            from: wQ < 0 ? FQ - 1 : FQ,
            to: wQ > 0 ? FQ + 1 : FQ
          },
          uQ = QQ.doc.iterRange(FQ, wQ > 0 ? QQ.doc.length : 0),
          HQ = 0;
        for (let bQ = 0; !uQ.next().done && bQ <= oQ;) {
          let QQ = uQ.value;
          wQ < 0 && (bQ += QQ.length);
          let oQ = FQ + bQ * wQ;
          for (let FQ = wQ > 0 ? 0 : QQ.length - 1, kQ = wQ > 0 ? QQ.length : -1; FQ != kQ; FQ += wQ) {
            let kQ = DQ.indexOf(QQ[FQ]);
            if (!(kQ < 0 || LQ.resolveInner(oQ + FQ, 1).type != qQ))
              if (kQ % 2 == 0 == wQ > 0) HQ++;
              else {
                if (1 == HQ) return {
                  start: mQ,
                  end: {
                    from: oQ + FQ,
                    to: oQ + FQ + 1
                  },
                  matched: kQ >> 1 == vQ >> 1
                };
                HQ--
              }
          }
          wQ > 0 && (bQ += QQ.length)
        }
        return uQ.done ? {
          start: mQ,
          matched: !1
        } : null
      }(QQ, FQ, wQ, DQ, kQ.type, qQ, oQ)
    }

    function hF(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
      let kQ = LQ.parent,
        vQ = {
          from: qQ.from,
          to: qQ.to
        },
        mQ = 0,
        uQ = null === kQ || void 0 === kQ ? void 0 : kQ.cursor();
      if (uQ && (wQ < 0 ? uQ.childBefore(LQ.from) : uQ.childAfter(LQ.to)))
        do {
          if (wQ < 0 ? uQ.to <= LQ.from : uQ.from >= LQ.to) {
            if (0 == mQ && oQ.indexOf(uQ.type.name) > -1 && uQ.from < uQ.to) {
              let QQ = fF(uQ);
              return {
                start: vQ,
                end: QQ ? {
                  from: QQ.from,
                  to: QQ.to
                } : void 0,
                matched: !0
              }
            }
            if (XF(uQ.type, wQ, DQ)) mQ++;
            else if (XF(uQ.type, -wQ, DQ)) {
              if (0 == mQ) {
                let QQ = fF(uQ);
                return {
                  start: vQ,
                  end: QQ && QQ.from < QQ.to ? {
                    from: QQ.from,
                    to: QQ.to
                  } : void 0,
                  matched: !1
                }
              }
              mQ--
            }
          }
        } while (wQ < 0 ? uQ.prevSibling() : uQ.nextSibling());
      return {
        start: vQ,
        matched: !1
      }
    }
    const JF = Object.create(null),
      EF = [qQ.l.none],
      nF = [],
      gF = Object.create(null),
      PF = Object.create(null);
    for (let [BF, dF] of [
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
      ]) PF[BF] = yF(JF, dF);

    function ZF(QQ, FQ) {
      nF.indexOf(QQ) > -1 || (nF.push(QQ), console.warn(FQ))
    }

    function yF(QQ, FQ) {
      let wQ = [];
      for (let qQ of FQ.split(" ")) {
        let FQ = [];
        for (let wQ of qQ.split(".")) {
          let LQ = QQ[wQ] || kQ.q[wQ];
          LQ ? "function" == typeof LQ ? FQ.length ? FQ = FQ.map(LQ) : ZF(wQ, `Modifier ${wQ} used at start of tag`) : FQ.length ? ZF(wQ, `Tag ${wQ} used as modifier`) : FQ = Array.isArray(LQ) ? LQ : [LQ] : ZF(wQ, `Unknown highlighting tag ${wQ}`)
        }
        for (let QQ of FQ) wQ.push(QQ)
      }
      if (!wQ.length) return 0;
      let LQ = FQ.replace(/ /g, "_"),
        oQ = LQ + " " + wQ.map((QQ => QQ.id)),
        DQ = gF[oQ];
      if (DQ) return DQ.id;
      let vQ = gF[oQ] = qQ.l.define({
        id: EF.length,
        name: LQ,
        props: [(0, kQ.i)({
          [LQ]: wQ
        })]
      });
      return EF.push(vQ), vQ.id
    }
    DQ.d.RTL, DQ.d.LTR
  },
  40751: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => GQ,
      g: () => SQ
    });
    var LQ = wQ(40702),
      qQ = wQ(40695),
      oQ = wQ(40715);
    class DQ {
      constructor(QQ, FQ, wQ) {
        this.from = QQ, this.to = FQ, this.diagnostic = wQ
      }
    }
    class kQ {
      constructor(QQ, FQ, wQ) {
        this.diagnostics = QQ, this.panel = FQ, this.selected = wQ
      }
      static init(QQ, FQ, wQ) {
        let oQ = wQ.facet(cQ).markerFilter;
        oQ && (QQ = oQ(QQ, wQ));
        let DQ = QQ.slice().sort(((QQ, FQ) => QQ.from - FQ.from || QQ.to - FQ.to)),
          mQ = new qQ.z,
          uQ = [],
          HQ = 0,
          bQ = wQ.doc.iter(),
          YQ = 0,
          xQ = wQ.doc.length;
        for (let qQ = 0;;) {
          let QQ, FQ, wQ = qQ == DQ.length ? null : DQ[qQ];
          if (!wQ && !uQ.length) break;
          if (uQ.length) QQ = HQ, FQ = uQ.reduce(((QQ, FQ) => Math.min(QQ, FQ.to)), wQ && wQ.from > QQ ? wQ.from : 1e8);
          else {
            if (QQ = wQ.from, QQ > xQ) break;
            FQ = wQ.to, uQ.push(wQ), qQ++
          }
          for (; qQ < DQ.length;) {
            let wQ = DQ[qQ];
            if (wQ.from != QQ || !(wQ.to > wQ.from || wQ.to == QQ)) {
              FQ = Math.min(wQ.from, FQ);
              break
            }
            uQ.push(wQ), qQ++, FQ = Math.min(wQ.to, FQ)
          }
          FQ = Math.min(FQ, xQ);
          let oQ = !1;
          if (uQ.some((wQ => wQ.from == QQ && (wQ.to == FQ || FQ == xQ))) && (oQ = QQ == FQ, !oQ && FQ - QQ < 10)) {
            let wQ = QQ - (YQ + bQ.value.length);
            wQ > 0 && (bQ.next(wQ), YQ = QQ);
            for (let LQ = QQ;;) {
              if (LQ >= FQ) {
                oQ = !0;
                break
              }
              if (!bQ.lineBreak && YQ + bQ.value.length > LQ) break;
              LQ = YQ + bQ.value.length, YQ += bQ.value.length, bQ.next()
            }
          }
          let kQ = TQ(uQ);
          if (oQ) mQ.add(QQ, QQ, LQ.c.widget({
            widget: new RQ(kQ),
            diagnostics: uQ.slice()
          }));
          else {
            let wQ = uQ.reduce(((QQ, FQ) => FQ.markClass ? QQ + " " + FQ.markClass : QQ), "");
            mQ.add(QQ, FQ, LQ.c.mark({
              class: "cm-lintRange cm-lintRange-" + kQ + wQ,
              diagnostics: uQ.slice(),
              inclusiveEnd: uQ.some((QQ => QQ.to > FQ))
            }))
          }
          if (HQ = FQ, HQ == xQ) break;
          for (let LQ = 0; LQ < uQ.length; LQ++) uQ[LQ].to <= HQ && uQ.splice(LQ--, 1)
        }
        let AQ = mQ.finish();
        return new kQ(AQ, FQ, vQ(AQ))
      }
    }

    function vQ(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        LQ = null;
      return QQ.between(wQ, 1e9, ((QQ, wQ, qQ) => {
        let {
          spec: oQ
        } = qQ;
        if (!(FQ && oQ.diagnostics.indexOf(FQ) < 0))
          if (LQ) {
            if (oQ.diagnostics.indexOf(LQ.diagnostic) < 0) return !1;
            LQ = new DQ(LQ.from, wQ, LQ.diagnostic)
          } else LQ = new DQ(QQ, wQ, FQ || oQ.diagnostics[0])
      })), LQ
    }

    function mQ(QQ, FQ) {
      let wQ = FQ.pos,
        LQ = FQ.end || wQ,
        qQ = QQ.state.facet(cQ).hideOn(QQ, wQ, LQ);
      if (null != qQ) return qQ;
      let oQ = QQ.startState.doc.lineAt(FQ.pos);
      return !(!QQ.effects.some((QQ => QQ.is(HQ))) && !QQ.changes.touchesRange(oQ.from, Math.max(oQ.to, LQ)))
    }

    function uQ(QQ, FQ) {
      return QQ.field(xQ, !1) ? FQ : FQ.concat(qQ.H.appendConfig.of(KQ))
    }
    const HQ = qQ.H.define(),
      bQ = qQ.H.define(),
      YQ = qQ.H.define(),
      xQ = qQ.L.define({
        create: () => new kQ(LQ.c.none, null, null),
        update(QQ, FQ) {
          if (FQ.docChanged && QQ.diagnostics.size) {
            let wQ = QQ.diagnostics.map(FQ.changes),
              LQ = null,
              qQ = QQ.panel;
            if (QQ.selected) {
              let qQ = FQ.changes.mapPos(QQ.selected.from, 1);
              LQ = vQ(wQ, QQ.selected.diagnostic, qQ) || vQ(wQ, null, qQ)
            }!wQ.size && qQ && FQ.state.facet(cQ).autoPanel && (qQ = null), QQ = new kQ(wQ, qQ, LQ)
          }
          for (let wQ of FQ.effects)
            if (wQ.is(HQ)) {
              let LQ = FQ.state.facet(cQ).autoPanel ? wQ.value.length ? sQ.open : null : QQ.panel;
              QQ = kQ.init(wQ.value, LQ, FQ.state)
            } else wQ.is(bQ) ? QQ = new kQ(QQ.diagnostics, wQ.value ? sQ.open : null, QQ.selected) : wQ.is(YQ) && (QQ = new kQ(QQ.diagnostics, QQ.panel, wQ.value));
          return QQ
        },
        provide: QQ => [LQ.fb.from(QQ, (QQ => QQ.panel)), LQ.f.qo.from(QQ, (QQ => QQ.diagnostics))]
      });
    const AQ = LQ.c.mark({
      class: "cm-lintRange cm-lintRange-active"
    });

    function tQ(QQ, FQ, wQ) {
      let LQ, {
          diagnostics: qQ
        } = QQ.state.field(xQ),
        oQ = -1,
        DQ = -1;
      qQ.between(FQ - (wQ < 0 ? 1 : 0), FQ + (wQ > 0 ? 1 : 0), ((QQ, qQ, kQ) => {
        let {
          spec: vQ
        } = kQ;
        if (FQ >= QQ && FQ <= qQ && (QQ == qQ || (FQ > QQ || wQ > 0) && (FQ < qQ || wQ < 0))) return LQ = vQ.diagnostics, oQ = QQ, DQ = qQ, !1
      }));
      let kQ = QQ.state.facet(cQ).tooltipFilter;
      return LQ && kQ && (LQ = kQ(LQ, QQ.state)), LQ ? {
        pos: oQ,
        end: DQ,
        above: QQ.state.doc.lineAt(oQ).to < DQ,
        create: () => ({
          dom: eQ(QQ, LQ)
        })
      } : null
    }

    function eQ(QQ, FQ) {
      return (0, oQ.b)("ul", {
        class: "cm-tooltip-lint"
      }, FQ.map((FQ => WQ(QQ, FQ, !1))))
    }
    const MQ = QQ => {
        let FQ = QQ.state.field(xQ, !1);
        return !(!FQ || !FQ.panel) && (QQ.dispatch({
          effects: bQ.of(!1)
        }), !0)
      },
      GQ = [{
        key: "Mod-Shift-m",
        run: QQ => {
          let FQ = QQ.state.field(xQ, !1);
          FQ && FQ.panel || QQ.dispatch({
            effects: uQ(QQ.state, [bQ.of(!0)])
          });
          let wQ = (0, LQ.x)(QQ, sQ.open);
          return wQ && wQ.dom.querySelector(".cm-panel-lint ul").focus(), !0
        },
        preventDefault: !0
      }, {
        key: "F8",
        run: QQ => {
          let FQ = QQ.state.field(xQ, !1);
          if (!FQ) return !1;
          let wQ = QQ.state.selection.main,
            LQ = vQ(FQ.diagnostics, null, wQ.to + 1);
          return !(!LQ && (LQ = vQ(FQ.diagnostics, null, 0), !LQ || LQ.from == wQ.from && LQ.to == wQ.to)) && (QQ.dispatch({
            selection: {
              anchor: LQ.from,
              head: LQ.to
            },
            scrollIntoView: !0
          }), !0)
        }
      }],
      pQ = LQ.h.fromClass(class {
        constructor(QQ) {
          this.view = QQ, this.timeout = -1, this.set = !0;
          let {
            delay: FQ
          } = QQ.state.facet(cQ);
          this.lintTime = Date.now() + FQ, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, FQ)
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
              sources: FQ
            } = QQ.facet(cQ);
            FQ.length && function(QQ, FQ, wQ) {
              let LQ = [],
                qQ = -1;
              for (let oQ of QQ) oQ.then((wQ => {
                LQ.push(wQ), clearTimeout(qQ), LQ.length == QQ.length ? FQ(LQ) : qQ = setTimeout((() => FQ(LQ)), 200)
              }), wQ)
            }(FQ.map((QQ => Promise.resolve(QQ(this.view)))), (FQ => {
              this.view.state.doc == QQ.doc && this.view.dispatch(function(QQ, FQ) {
                return {
                  effects: uQ(QQ, [HQ.of(FQ)])
                }
              }(this.view.state, FQ.reduce(((QQ, FQ) => QQ.concat(FQ)))))
            }), (QQ => {
              (0, LQ.V)(this.view.state, QQ)
            }))
          }
        }
        update(QQ) {
          let FQ = QQ.state.facet(cQ);
          (QQ.docChanged || FQ != QQ.startState.facet(cQ) || FQ.needsRefresh && FQ.needsRefresh(QQ)) && (this.lintTime = Date.now() + FQ.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, FQ.delay)))
        }
        force() {
          this.set && (this.lintTime = Date.now(), this.run())
        }
        destroy() {
          clearTimeout(this.timeout)
        }
      });
    const cQ = qQ.r.define({
      combine: QQ => ({
        sources: QQ.map((QQ => QQ.source)).filter((QQ => null != QQ)),
        ...(0, qQ.W)(QQ.map((QQ => QQ.config)), {
          delay: 750,
          markerFilter: null,
          tooltipFilter: null,
          needsRefresh: null,
          hideOn: () => null
        }, {
          delay: Math.max,
          markerFilter: CQ,
          tooltipFilter: CQ,
          needsRefresh: (QQ, FQ) => QQ ? FQ ? wQ => QQ(wQ) || FQ(wQ) : QQ : FQ,
          hideOn: (QQ, FQ) => QQ ? FQ ? (wQ, LQ, qQ) => QQ(wQ, LQ, qQ) || FQ(wQ, LQ, qQ) : QQ : FQ,
          autoPanel: (QQ, FQ) => QQ || FQ
        })
      })
    });

    function CQ(QQ, FQ) {
      return QQ ? FQ ? (wQ, LQ) => FQ(QQ(wQ, LQ), LQ) : QQ : FQ
    }

    function SQ(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return [cQ.of({
        source: QQ,
        config: FQ
      }), pQ, KQ]
    }

    function iQ(QQ) {
      let FQ = [];
      if (QQ) QQ: for (let {
          name: wQ
        }
        of QQ) {
        for (let QQ = 0; QQ < wQ.length; QQ++) {
          let LQ = wQ[QQ];
          if (/[a-zA-Z]/.test(LQ) && !FQ.some((QQ => QQ.toLowerCase() == LQ.toLowerCase()))) {
            FQ.push(LQ);
            continue QQ
          }
        }
        FQ.push("")
      }
      return FQ
    }

    function WQ(QQ, FQ, wQ) {
      var LQ;
      let qQ = wQ ? iQ(FQ.actions) : [];
      return (0, oQ.b)("li", {
        class: "cm-diagnostic cm-diagnostic-" + FQ.severity
      }, (0, oQ.b)("span", {
        class: "cm-diagnosticText"
      }, FQ.renderMessage ? FQ.renderMessage(QQ) : FQ.message), null === (LQ = FQ.actions) || void 0 === LQ ? void 0 : LQ.map(((wQ, LQ) => {
        let DQ = !1,
          kQ = LQ => {
            if (LQ.preventDefault(), DQ) return;
            DQ = !0;
            let qQ = vQ(QQ.state.field(xQ).diagnostics, FQ);
            qQ && wQ.apply(QQ, qQ.from, qQ.to)
          },
          {
            name: mQ
          } = wQ,
          uQ = qQ[LQ] ? mQ.indexOf(qQ[LQ]) : -1,
          HQ = uQ < 0 ? mQ : [mQ.slice(0, uQ), (0, oQ.b)("u", mQ.slice(uQ, uQ + 1)), mQ.slice(uQ + 1)],
          bQ = wQ.markClass ? " " + wQ.markClass : "";
        return (0, oQ.b)("button", {
          type: "button",
          class: "cm-diagnosticAction" + bQ,
          onclick: kQ,
          onmousedown: kQ,
          "aria-label": ` Action: ${mQ}${uQ<0?"":` (access key "${qQ[LQ]})"`}.`
        }, HQ)
      })), FQ.source && (0, oQ.b)("div", {
        class: "cm-diagnosticSource"
      }, FQ.source))
    }
    class RQ extends LQ.l {
      constructor(QQ) {
        super(), this.sev = QQ
      }
      eq(QQ) {
        return QQ.sev == this.sev
      }
      toDOM() {
        return (0, oQ.b)("span", {
          class: "cm-lintPoint cm-lintPoint-" + this.sev
        })
      }
    }
    class OQ {
      constructor(QQ, FQ) {
        this.diagnostic = FQ, this.id = "item_" + Math.floor(4294967295 * Math.random()).toString(16), this.dom = WQ(QQ, FQ, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option")
      }
    }
    class sQ {
      constructor(QQ) {
        this.view = QQ, this.items = [];
        this.list = (0, oQ.b)("ul", {
          tabIndex: 0,
          role: "listbox",
          "aria-label": this.view.state.phrase("Diagnostics"),
          onkeydown: FQ => {
            if (!(FQ.ctrlKey || FQ.altKey || FQ.metaKey)) {
              if (27 == FQ.keyCode) MQ(this.view), this.view.focus();
              else if (38 == FQ.keyCode || 33 == FQ.keyCode) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
              else if (40 == FQ.keyCode || 34 == FQ.keyCode) this.moveSelection((this.selectedIndex + 1) % this.items.length);
              else if (36 == FQ.keyCode) this.moveSelection(0);
              else if (35 == FQ.keyCode) this.moveSelection(this.items.length - 1);
              else if (13 == FQ.keyCode) this.view.focus();
              else {
                if (!(FQ.keyCode >= 65 && FQ.keyCode <= 90 && this.selectedIndex >= 0)) return;
                {
                  let {
                    diagnostic: wQ
                  } = this.items[this.selectedIndex], LQ = iQ(wQ.actions);
                  for (let qQ = 0; qQ < LQ.length; qQ++)
                    if (LQ[qQ].toUpperCase().charCodeAt(0) == FQ.keyCode) {
                      let FQ = vQ(this.view.state.field(xQ).diagnostics, wQ);
                      FQ && wQ.actions[qQ].apply(QQ, FQ.from, FQ.to)
                    }
                }
              }
              FQ.preventDefault()
            }
          },
          onclick: QQ => {
            for (let FQ = 0; FQ < this.items.length; FQ++) this.items[FQ].dom.contains(QQ.target) && this.moveSelection(FQ)
          }
        }), this.dom = (0, oQ.b)("div", {
          class: "cm-panel-lint"
        }, this.list, (0, oQ.b)("button", {
          type: "button",
          name: "close",
          "aria-label": this.view.state.phrase("close"),
          onclick: () => MQ(this.view)
        }, "\xd7")), this.update()
      }
      get selectedIndex() {
        let QQ = this.view.state.field(xQ).selected;
        if (!QQ) return -1;
        for (let FQ = 0; FQ < this.items.length; FQ++)
          if (this.items[FQ].diagnostic == QQ.diagnostic) return FQ;
        return -1
      }
      update() {
        let {
          diagnostics: QQ,
          selected: FQ
        } = this.view.state.field(xQ), wQ = 0, LQ = !1, qQ = null, oQ = new Set;
        for (QQ.between(0, this.view.state.doc.length, ((QQ, DQ, kQ) => {
            let {
              spec: vQ
            } = kQ;
            for (let mQ of vQ.diagnostics) {
              if (oQ.has(mQ)) continue;
              oQ.add(mQ);
              let QQ, DQ = -1;
              for (let FQ = wQ; FQ < this.items.length; FQ++)
                if (this.items[FQ].diagnostic == mQ) {
                  DQ = FQ;
                  break
                } DQ < 0 ? (QQ = new OQ(this.view, mQ), this.items.splice(wQ, 0, QQ), LQ = !0) : (QQ = this.items[DQ], DQ > wQ && (this.items.splice(wQ, DQ - wQ), LQ = !0)), FQ && QQ.diagnostic == FQ.diagnostic ? QQ.dom.hasAttribute("aria-selected") || (QQ.dom.setAttribute("aria-selected", "true"), qQ = QQ) : QQ.dom.hasAttribute("aria-selected") && QQ.dom.removeAttribute("aria-selected"), wQ++
            }
          })); wQ < this.items.length && !(1 == this.items.length && this.items[0].diagnostic.from < 0);) LQ = !0, this.items.pop();
        0 == this.items.length && (this.items.push(new OQ(this.view, {
          from: -1,
          to: -1,
          severity: "info",
          message: this.view.state.phrase("No diagnostics")
        })), LQ = !0), qQ ? (this.list.setAttribute("aria-activedescendant", qQ.id), this.view.requestMeasure({
          key: this,
          read: () => ({
            sel: qQ.dom.getBoundingClientRect(),
            panel: this.list.getBoundingClientRect()
          }),
          write: QQ => {
            let {
              sel: FQ,
              panel: wQ
            } = QQ, LQ = wQ.height / this.list.offsetHeight;
            FQ.top < wQ.top ? this.list.scrollTop -= (wQ.top - FQ.top) / LQ : FQ.bottom > wQ.bottom && (this.list.scrollTop += (FQ.bottom - wQ.bottom) / LQ)
          }
        })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), LQ && this.sync()
      }
      sync() {
        let QQ = this.list.firstChild;

        function FQ() {
          let FQ = QQ;
          QQ = FQ.nextSibling, FQ.remove()
        }
        for (let wQ of this.items)
          if (wQ.dom.parentNode == this.list) {
            for (; QQ != wQ.dom;) FQ();
            QQ = wQ.dom.nextSibling
          } else this.list.insertBefore(wQ.dom, QQ);
        for (; QQ;) FQ()
      }
      moveSelection(QQ) {
        if (this.selectedIndex < 0) return;
        let FQ = vQ(this.view.state.field(xQ).diagnostics, this.items[QQ].diagnostic);
        FQ && this.view.dispatch({
          selection: {
            anchor: FQ.from,
            head: FQ.to
          },
          scrollIntoView: !0,
          effects: YQ.of(FQ)
        })
      }
      static open(QQ) {
        return new sQ(QQ)
      }
    }

    function rQ(QQ) {
      return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${arguments.length>1&&void 0!==arguments[1]?arguments[1]:'viewBox="0 0 40 40"'}>${encodeURIComponent(QQ)}</svg>')`
    }

    function IQ(QQ) {
      return rQ(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${QQ}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"')
    }
    const UQ = LQ.f.baseTheme({
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
        backgroundImage: IQ("#d11")
      },
      ".cm-lintRange-warning": {
        backgroundImage: IQ("orange")
      },
      ".cm-lintRange-info": {
        backgroundImage: IQ("#999")
      },
      ".cm-lintRange-hint": {
        backgroundImage: IQ("#66d")
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

    function NQ(QQ) {
      return "error" == QQ ? 4 : "warning" == QQ ? 3 : "info" == QQ ? 2 : 1
    }

    function TQ(QQ) {
      let FQ = "hint",
        wQ = 1;
      for (let LQ of QQ) {
        let QQ = NQ(LQ.severity);
        QQ > wQ && (wQ = QQ, FQ = LQ.severity)
      }
      return FQ
    }
    LQ.g;
    const KQ = [xQ, LQ.f.qo.compute([xQ], (QQ => {
      let {
        selected: FQ,
        panel: wQ
      } = QQ.field(xQ);
      return FQ && wQ && FQ.from != FQ.to ? LQ.c.set([AQ.range(FQ.from, FQ.to)]) : LQ.c.none
    })), (0, LQ.N)(tQ, {
      hideOn: mQ
    }), UQ]
  },
  40743: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => BQ,
      h: () => eQ,
      k: () => dQ
    });
    var LQ = wQ(40702),
      qQ = wQ(40695),
      oQ = wQ(40715);
    const DQ = "function" == typeof String.prototype.normalize ? QQ => QQ.normalize("NFKD") : QQ => QQ;
    class kQ {
      constructor(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : QQ.length,
          qQ = arguments.length > 4 ? arguments[4] : void 0,
          oQ = arguments.length > 5 ? arguments[5] : void 0;
        this.test = oQ, this.value = {
          from: 0,
          to: 0
        }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = QQ.iterRange(wQ, LQ), this.bufferStart = wQ, this.normalize = qQ ? QQ => qQ(DQ(QQ)) : DQ, this.query = this.normalize(FQ)
      }
      peek() {
        if (this.bufferPos == this.buffer.length) {
          if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
          this.bufferPos = 0, this.buffer = this.iter.value
        }
        return (0, qQ.T)(this.buffer, this.bufferPos)
      }
      next() {
        for (; this.matches.length;) this.matches.pop();
        return this.nextOverlapping()
      }
      nextOverlapping() {
        for (;;) {
          let QQ = this.peek();
          if (QQ < 0) return this.done = !0, this;
          let FQ = (0, qQ.eb)(QQ),
            wQ = this.bufferStart + this.bufferPos;
          this.bufferPos += (0, qQ.U)(QQ);
          let LQ = this.normalize(FQ);
          if (LQ.length)
            for (let qQ = 0, oQ = wQ;; qQ++) {
              let QQ = LQ.charCodeAt(qQ),
                DQ = this.match(QQ, oQ, this.bufferPos + this.bufferStart);
              if (qQ == LQ.length - 1) {
                if (DQ) return this.value = DQ, this;
                break
              }
              oQ == wQ && qQ < FQ.length && FQ.charCodeAt(qQ) == QQ && oQ++
            }
        }
      }
      match(QQ, FQ, wQ) {
        let LQ = null;
        for (let qQ = 0; qQ < this.matches.length; qQ += 2) {
          let FQ = this.matches[qQ],
            oQ = !1;
          this.query.charCodeAt(FQ) == QQ && (FQ == this.query.length - 1 ? LQ = {
            from: this.matches[qQ + 1],
            to: wQ
          } : (this.matches[qQ]++, oQ = !0)), oQ || (this.matches.splice(qQ, 2), qQ -= 2)
        }
        return this.query.charCodeAt(0) == QQ && (1 == this.query.length ? LQ = {
          from: FQ,
          to: wQ
        } : this.matches.push(1, FQ)), LQ && this.test && !this.test(LQ.from, LQ.to, this.buffer, this.bufferStart) && (LQ = null), LQ
      }
    }
    "undefined" != typeof Symbol && (kQ.prototype[Symbol.iterator] = function() {
      return this
    });
    const vQ = {
        from: -1,
        to: -1,
        match: /.*/.exec("")
      },
      mQ = "gm" + (null == /x/.unicode ? "" : "u");
    class uQ {
      constructor(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : QQ.length;
        if (this.text = QQ, this.to = qQ, this.curLine = "", this.done = !1, this.value = vQ, /\\[sWDnr]|\n|\r|\[\^/.test(FQ)) return new YQ(QQ, FQ, wQ, LQ, qQ);
        this.re = new RegExp(FQ, mQ + ((null === wQ || void 0 === wQ ? void 0 : wQ.ignoreCase) ? "i" : "")), this.test = null === wQ || void 0 === wQ ? void 0 : wQ.test, this.iter = QQ.iter();
        let oQ = QQ.lineAt(LQ);
        this.curLineStart = oQ.from, this.matchPos = xQ(QQ, LQ), this.getLine(this.curLineStart)
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
          let FQ = this.matchPos <= this.to && this.re.exec(this.curLine);
          if (FQ) {
            let wQ = this.curLineStart + FQ.index,
              LQ = wQ + FQ[0].length;
            if (this.matchPos = xQ(this.text, LQ + (wQ == LQ ? 1 : 0)), wQ == this.curLineStart + this.curLine.length && this.nextLine(), (wQ < LQ || wQ > this.value.to) && (!this.test || this.test(wQ, LQ, FQ))) return this.value = {
              from: wQ,
              to: LQ,
              match: FQ
            }, this;
            QQ = this.matchPos - this.curLineStart
          } else {
            if (!(this.curLineStart + this.curLine.length < this.to)) return this.done = !0, this;
            this.nextLine(), QQ = 0
          }
        }
      }
    }
    const HQ = new WeakMap;
    class bQ {
      constructor(QQ, FQ) {
        this.from = QQ, this.text = FQ
      }
      get to() {
        return this.from + this.text.length
      }
      static get(QQ, FQ, wQ) {
        let LQ = HQ.get(QQ);
        if (!LQ || LQ.from >= wQ || LQ.to <= FQ) {
          let LQ = new bQ(FQ, QQ.sliceString(FQ, wQ));
          return HQ.set(QQ, LQ), LQ
        }
        if (LQ.from == FQ && LQ.to == wQ) return LQ;
        let {
          text: qQ,
          from: oQ
        } = LQ;
        return oQ > FQ && (qQ = QQ.sliceString(FQ, oQ) + qQ, oQ = FQ), LQ.to < wQ && (qQ += QQ.sliceString(LQ.to, wQ)), HQ.set(QQ, new bQ(oQ, qQ)), new bQ(FQ, qQ.slice(FQ - oQ, wQ - oQ))
      }
    }
    class YQ {
      constructor(QQ, FQ, wQ, LQ, qQ) {
        this.text = QQ, this.to = qQ, this.done = !1, this.value = vQ, this.matchPos = xQ(QQ, LQ), this.re = new RegExp(FQ, mQ + ((null === wQ || void 0 === wQ ? void 0 : wQ.ignoreCase) ? "i" : "")), this.test = null === wQ || void 0 === wQ ? void 0 : wQ.test, this.flat = bQ.get(QQ, LQ, this.chunkEnd(LQ + 5e3))
      }
      chunkEnd(QQ) {
        return QQ >= this.to ? this.to : this.text.lineAt(QQ).to
      }
      next() {
        for (;;) {
          let QQ = this.re.lastIndex = this.matchPos - this.flat.from,
            FQ = this.re.exec(this.flat.text);
          if (FQ && !FQ[0] && FQ.index == QQ && (this.re.lastIndex = QQ + 1, FQ = this.re.exec(this.flat.text)), FQ) {
            let QQ = this.flat.from + FQ.index,
              wQ = QQ + FQ[0].length;
            if ((this.flat.to >= this.to || FQ.index + FQ[0].length <= this.flat.text.length - 10) && (!this.test || this.test(QQ, wQ, FQ))) return this.value = {
              from: QQ,
              to: wQ,
              match: FQ
            }, this.matchPos = xQ(this.text, wQ + (QQ == wQ ? 1 : 0)), this
          }
          if (this.flat.to == this.to) return this.done = !0, this;
          this.flat = bQ.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + 2 * this.flat.text.length))
        }
      }
    }

    function xQ(QQ, FQ) {
      if (FQ >= QQ.length) return FQ;
      let wQ, LQ = QQ.lineAt(FQ);
      for (; FQ < LQ.to && (wQ = LQ.text.charCodeAt(FQ - LQ.from)) >= 56320 && wQ < 57344;) FQ++;
      return FQ
    }
    "undefined" != typeof Symbol && (uQ.prototype[Symbol.iterator] = YQ.prototype[Symbol.iterator] = function() {
      return this
    });
    const AQ = {
        highlightWordAroundCursor: !1,
        minSelectionLength: 1,
        maxMatches: 100,
        wholeWords: !1
      },
      tQ = qQ.r.define({
        combine: QQ => (0, qQ.W)(QQ, AQ, {
          highlightWordAroundCursor: (QQ, FQ) => QQ || FQ,
          minSelectionLength: Math.min,
          maxMatches: Math.min
        })
      });

    function eQ(QQ) {
      let FQ = [CQ, cQ];
      return QQ && FQ.push(tQ.of(QQ)), FQ
    }
    const MQ = LQ.c.mark({
        class: "cm-selectionMatch"
      }),
      GQ = LQ.c.mark({
        class: "cm-selectionMatch cm-selectionMatch-main"
      });

    function pQ(QQ, FQ, wQ, LQ) {
      return (0 == wQ || QQ(FQ.sliceDoc(wQ - 1, wQ)) != qQ.h.Word) && (LQ == FQ.doc.length || QQ(FQ.sliceDoc(LQ, LQ + 1)) != qQ.h.Word)
    }
    const cQ = LQ.h.fromClass(class {
        constructor(QQ) {
          this.qo = this.getDeco(QQ)
        }
        update(QQ) {
          (QQ.selectionSet || QQ.docChanged || QQ.viewportChanged) && (this.qo = this.getDeco(QQ.view))
        }
        getDeco(QQ) {
          let FQ = QQ.state.facet(tQ),
            {
              state: wQ
            } = QQ,
            oQ = wQ.selection;
          if (oQ.PA.length > 1) return LQ.c.none;
          let DQ, vQ = oQ.main,
            mQ = null;
          if (vQ.empty) {
            if (!FQ.highlightWordAroundCursor) return LQ.c.none;
            let QQ = wQ.wordAt(vQ.head);
            if (!QQ) return LQ.c.none;
            mQ = wQ.charCategorizer(vQ.head), DQ = wQ.sliceDoc(QQ.from, QQ.to)
          } else {
            let QQ = vQ.to - vQ.from;
            if (QQ < FQ.minSelectionLength || QQ > 200) return LQ.c.none;
            if (FQ.wholeWords) {
              if (DQ = wQ.sliceDoc(vQ.from, vQ.to), mQ = wQ.charCategorizer(vQ.head), !pQ(mQ, wQ, vQ.from, vQ.to) || ! function(QQ, FQ, wQ, LQ) {
                  return QQ(FQ.sliceDoc(wQ, wQ + 1)) == qQ.h.Word && QQ(FQ.sliceDoc(LQ - 1, LQ)) == qQ.h.Word
                }(mQ, wQ, vQ.from, vQ.to)) return LQ.c.none
            } else if (DQ = wQ.sliceDoc(vQ.from, vQ.to), !DQ) return LQ.c.none
          }
          let uQ = [];
          for (let qQ of QQ.B5) {
            let QQ = new kQ(wQ.doc, DQ, qQ.from, qQ.to);
            for (; !QQ.next().done;) {
              let {
                from: qQ,
                to: oQ
              } = QQ.value;
              if ((!mQ || pQ(mQ, wQ, qQ, oQ)) && (vQ.empty && qQ <= vQ.from && oQ >= vQ.to ? uQ.push(GQ.range(qQ, oQ)) : (qQ >= vQ.to || oQ <= vQ.from) && uQ.push(MQ.range(qQ, oQ)), uQ.length > FQ.maxMatches)) return LQ.c.none
            }
          }
          return LQ.c.set(uQ)
        }
      }, {
        qo: QQ => QQ.qo
      }),
      CQ = LQ.f.baseTheme({
        ".cm-selectionMatch": {
          backgroundColor: "#99ff7780"
        },
        ".cm-searchMatch .cm-selectionMatch": {
          backgroundColor: "transparent"
        }
      });
    const SQ = qQ.r.define({
      combine: QQ => (0, qQ.W)(QQ, {
        top: !1,
        caseSensitive: !1,
        literal: !1,
        regexp: !1,
        wholeWord: !1,
        createPanel: QQ => new QF(QQ),
        scrollToMatch: QQ => LQ.f.scrollIntoView(QQ)
      })
    });
    class iQ {
      constructor(QQ) {
        this.search = QQ.search, this.caseSensitive = !!QQ.caseSensitive, this.literal = !!QQ.literal, this.regexp = !!QQ.regexp, this.replace = QQ.replace || "", this.valid = !!this.search && (!this.regexp || function(QQ) {
          try {
            return new RegExp(QQ, mQ), !0
          } catch (FQ) {
            return !1
          }
        }(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!QQ.wholeWord, this.test = QQ.test
      }
      unquote(QQ) {
        return this.literal ? QQ : QQ.replace(/\\([nrt\\])/g, ((QQ, FQ) => "n" == FQ ? "\n" : "r" == FQ ? "\r" : "t" == FQ ? "\t" : "\\"))
      }
      eq(QQ) {
        return this.search == QQ.search && this.replace == QQ.replace && this.caseSensitive == QQ.caseSensitive && this.regexp == QQ.regexp && this.wholeWord == QQ.wholeWord && this.test == QQ.test
      }
      create() {
        return this.regexp ? new UQ(this) : new OQ(this)
      }
      getCursor(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wQ = arguments.length > 2 ? arguments[2] : void 0,
          LQ = QQ.doc ? QQ : qQ.n.create({
            doc: QQ
          });
        return null == wQ && (wQ = LQ.doc.length), this.regexp ? sQ(this, LQ, FQ, wQ) : RQ(this, LQ, FQ, wQ)
      }
    }
    class WQ {
      constructor(QQ) {
        this.spec = QQ
      }
    }

    function RQ(QQ, FQ, wQ, LQ) {
      let oQ;
      var DQ, vQ;
      return QQ.wholeWord && (DQ = FQ.doc, vQ = FQ.charCategorizer(FQ.selection.main.head), oQ = (QQ, FQ, wQ, LQ) => ((LQ > QQ || LQ + wQ.length < FQ) && (LQ = Math.max(0, QQ - 2), wQ = DQ.sliceString(LQ, Math.min(DQ.length, FQ + 2))), (vQ(rQ(wQ, QQ - LQ)) != qQ.h.Word || vQ(IQ(wQ, QQ - LQ)) != qQ.h.Word) && (vQ(IQ(wQ, FQ - LQ)) != qQ.h.Word || vQ(rQ(wQ, FQ - LQ)) != qQ.h.Word))), QQ.test && (oQ = function(QQ, FQ, wQ) {
        return (LQ, qQ, oQ, DQ) => {
          if (wQ && !wQ(LQ, qQ, oQ, DQ)) return !1;
          let kQ = LQ >= DQ && qQ <= DQ + oQ.length ? oQ.slice(LQ - DQ, qQ - DQ) : FQ.doc.sliceString(LQ, qQ);
          return QQ(kQ, FQ, LQ, qQ)
        }
      }(QQ.test, FQ, oQ)), new kQ(FQ.doc, QQ.unquoted, wQ, LQ, QQ.caseSensitive ? void 0 : QQ => QQ.toLowerCase(), oQ)
    }
    class OQ extends WQ {
      constructor(QQ) {
        super(QQ)
      }
      nextMatch(QQ, FQ, wQ) {
        let LQ = RQ(this.spec, QQ, wQ, QQ.doc.length).nextOverlapping();
        if (LQ.done) {
          let wQ = Math.min(QQ.doc.length, FQ + this.spec.unquoted.length);
          LQ = RQ(this.spec, QQ, 0, wQ).nextOverlapping()
        }
        return LQ.done || LQ.value.from == FQ && LQ.value.to == wQ ? null : LQ.value
      }
      prevMatchInRange(QQ, FQ, wQ) {
        for (let LQ = wQ;;) {
          let wQ = Math.max(FQ, LQ - 1e4 - this.spec.unquoted.length),
            qQ = RQ(this.spec, QQ, wQ, LQ),
            oQ = null;
          for (; !qQ.nextOverlapping().done;) oQ = qQ.value;
          if (oQ) return oQ;
          if (wQ == FQ) return null;
          LQ -= 1e4
        }
      }
      prevMatch(QQ, FQ, wQ) {
        let LQ = this.prevMatchInRange(QQ, 0, FQ);
        return LQ || (LQ = this.prevMatchInRange(QQ, Math.max(0, wQ - this.spec.unquoted.length), QQ.doc.length)), !LQ || LQ.from == FQ && LQ.to == wQ ? null : LQ
      }
      getReplacement(QQ) {
        return this.spec.unquote(this.spec.replace)
      }
      matchAll(QQ, FQ) {
        let wQ = RQ(this.spec, QQ, 0, QQ.doc.length),
          LQ = [];
        for (; !wQ.next().done;) {
          if (LQ.length >= FQ) return null;
          LQ.push(wQ.value)
        }
        return LQ
      }
      highlight(QQ, FQ, wQ, LQ) {
        let qQ = RQ(this.spec, QQ, Math.max(0, FQ - this.spec.unquoted.length), Math.min(wQ + this.spec.unquoted.length, QQ.doc.length));
        for (; !qQ.next().done;) LQ(qQ.value.from, qQ.value.to)
      }
    }

    function sQ(QQ, FQ, wQ, LQ) {
      let oQ;
      var DQ;
      return QQ.wholeWord && (DQ = FQ.charCategorizer(FQ.selection.main.head), oQ = (QQ, FQ, wQ) => !wQ[0].length || (DQ(rQ(wQ.input, wQ.index)) != qQ.h.Word || DQ(IQ(wQ.input, wQ.index)) != qQ.h.Word) && (DQ(IQ(wQ.input, wQ.index + wQ[0].length)) != qQ.h.Word || DQ(rQ(wQ.input, wQ.index + wQ[0].length)) != qQ.h.Word)), QQ.test && (oQ = function(QQ, FQ, wQ) {
        return (LQ, qQ, oQ) => (!wQ || wQ(LQ, qQ, oQ)) && QQ(oQ[0], FQ, LQ, qQ)
      }(QQ.test, FQ, oQ)), new uQ(FQ.doc, QQ.search, {
        ignoreCase: !QQ.caseSensitive,
        test: oQ
      }, wQ, LQ)
    }

    function rQ(QQ, FQ) {
      return QQ.slice((0, qQ.$)(QQ, FQ, !1), FQ)
    }

    function IQ(QQ, FQ) {
      return QQ.slice(FQ, (0, qQ.$)(QQ, FQ))
    }
    class UQ extends WQ {
      nextMatch(QQ, FQ, wQ) {
        let LQ = sQ(this.spec, QQ, wQ, QQ.doc.length).next();
        return LQ.done && (LQ = sQ(this.spec, QQ, 0, FQ).next()), LQ.done ? null : LQ.value
      }
      prevMatchInRange(QQ, FQ, wQ) {
        for (let LQ = 1;; LQ++) {
          let qQ = Math.max(FQ, wQ - 1e4 * LQ),
            oQ = sQ(this.spec, QQ, qQ, wQ),
            DQ = null;
          for (; !oQ.next().done;) DQ = oQ.value;
          if (DQ && (qQ == FQ || DQ.from > qQ + 10)) return DQ;
          if (qQ == FQ) return null
        }
      }
      prevMatch(QQ, FQ, wQ) {
        return this.prevMatchInRange(QQ, 0, FQ) || this.prevMatchInRange(QQ, wQ, QQ.doc.length)
      }
      getReplacement(QQ) {
        return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, ((FQ, wQ) => {
          if ("&" == wQ) return QQ.match[0];
          if ("$" == wQ) return "$";
          for (let LQ = wQ.length; LQ > 0; LQ--) {
            let FQ = +wQ.slice(0, LQ);
            if (FQ > 0 && FQ < QQ.match.length) return QQ.match[FQ] + wQ.slice(LQ)
          }
          return FQ
        }))
      }
      matchAll(QQ, FQ) {
        let wQ = sQ(this.spec, QQ, 0, QQ.doc.length),
          LQ = [];
        for (; !wQ.next().done;) {
          if (LQ.length >= FQ) return null;
          LQ.push(wQ.value)
        }
        return LQ
      }
      highlight(QQ, FQ, wQ, LQ) {
        let qQ = sQ(this.spec, QQ, Math.max(0, FQ - 250), Math.min(wQ + 250, QQ.doc.length));
        for (; !qQ.next().done;) LQ(qQ.value.from, qQ.value.to)
      }
    }
    const NQ = qQ.H.define(),
      TQ = qQ.H.define(),
      KQ = qQ.L.define({
        create: QQ => new zQ(gQ(QQ).create(), null),
        update(QQ, FQ) {
          for (let wQ of FQ.effects) wQ.is(NQ) ? QQ = new zQ(wQ.value.create(), QQ.panel) : wQ.is(TQ) && (QQ = new zQ(QQ.query, wQ.value ? nQ : null));
          return QQ
        },
        provide: QQ => LQ.fb.from(QQ, (QQ => QQ.panel))
      });
    class zQ {
      constructor(QQ, FQ) {
        this.query = QQ, this.panel = FQ
      }
    }
    const lQ = LQ.c.mark({
        class: "cm-searchMatch"
      }),
      jQ = LQ.c.mark({
        class: "cm-searchMatch cm-searchMatch-selected"
      }),
      aQ = LQ.h.fromClass(class {
        constructor(QQ) {
          this.view = QQ, this.qo = this.highlight(QQ.state.field(KQ))
        }
        update(QQ) {
          let FQ = QQ.state.field(KQ);
          (FQ != QQ.startState.field(KQ) || QQ.docChanged || QQ.selectionSet || QQ.viewportChanged) && (this.qo = this.highlight(FQ))
        }
        highlight(QQ) {
          let {
            query: FQ,
            panel: wQ
          } = QQ;
          if (!wQ || !FQ.spec.valid) return LQ.c.none;
          let {
            view: oQ
          } = this, DQ = new qQ.z;
          for (let LQ = 0, qQ = oQ.B5, kQ = qQ.length; LQ < kQ; LQ++) {
            let {
              from: QQ,
              to: wQ
            } = qQ[LQ];
            for (; LQ < kQ - 1 && wQ > qQ[LQ + 1].from - 500;) wQ = qQ[++LQ].to;
            FQ.highlight(oQ.state, QQ, wQ, ((QQ, FQ) => {
              let wQ = oQ.state.selection.PA.some((wQ => wQ.from == QQ && wQ.to == FQ));
              DQ.add(QQ, FQ, wQ ? jQ : lQ)
            }))
          }
          return DQ.finish()
        }
      }, {
        qo: QQ => QQ.qo
      });

    function XQ(QQ) {
      return FQ => {
        let wQ = FQ.state.field(KQ, !1);
        return wQ && wQ.query.spec.valid ? QQ(FQ, wQ) : yQ(FQ)
      }
    }
    const fQ = XQ(((QQ, FQ) => {
        let {
          query: wQ
        } = FQ, {
          to: LQ
        } = QQ.state.selection.main, oQ = wQ.nextMatch(QQ.state, LQ, LQ);
        if (!oQ) return !1;
        let DQ = qQ.j.single(oQ.from, oQ.to),
          kQ = QQ.state.facet(SQ);
        return QQ.dispatch({
          selection: DQ,
          effects: [qF(QQ, oQ), kQ.scrollToMatch(DQ.main, QQ)],
          userEvent: "select.search"
        }), ZQ(QQ), !0
      })),
      VQ = XQ(((QQ, FQ) => {
        let {
          query: wQ
        } = FQ, {
          state: LQ
        } = QQ, {
          from: oQ
        } = LQ.selection.main, DQ = wQ.prevMatch(LQ, oQ, oQ);
        if (!DQ) return !1;
        let kQ = qQ.j.single(DQ.from, DQ.to),
          vQ = QQ.state.facet(SQ);
        return QQ.dispatch({
          selection: kQ,
          effects: [qF(QQ, DQ), vQ.scrollToMatch(kQ.main, QQ)],
          userEvent: "select.search"
        }), ZQ(QQ), !0
      })),
      hQ = XQ(((QQ, FQ) => {
        let {
          query: wQ
        } = FQ, LQ = wQ.matchAll(QQ.state, 1e3);
        return !(!LQ || !LQ.length) && (QQ.dispatch({
          selection: qQ.j.create(LQ.map((QQ => qQ.j.range(QQ.from, QQ.to)))),
          userEvent: "select.search.matches"
        }), !0)
      })),
      JQ = XQ(((QQ, FQ) => {
        let {
          query: wQ
        } = FQ, {
          state: oQ
        } = QQ, {
          from: DQ,
          to: kQ
        } = oQ.selection.main;
        if (oQ.readOnly) return !1;
        let vQ = wQ.nextMatch(oQ, DQ, DQ);
        if (!vQ) return !1;
        let mQ, uQ, HQ = vQ,
          bQ = [],
          YQ = [];
        HQ.from == DQ && HQ.to == kQ && (uQ = oQ.toText(wQ.getReplacement(HQ)), bQ.push({
          from: HQ.from,
          to: HQ.to,
          insert: uQ
        }), HQ = wQ.nextMatch(oQ, HQ.from, HQ.to), YQ.push(LQ.f.announce.of(oQ.phrase("replaced match on line $", oQ.doc.lineAt(DQ).number) + ".")));
        let xQ = QQ.state.changes(bQ);
        return HQ && (mQ = qQ.j.single(HQ.from, HQ.to).map(xQ), YQ.push(qF(QQ, HQ)), YQ.push(oQ.facet(SQ).scrollToMatch(mQ.main, QQ))), QQ.dispatch({
          changes: xQ,
          selection: mQ,
          effects: YQ,
          userEvent: "input.replace"
        }), !0
      })),
      EQ = XQ(((QQ, FQ) => {
        let {
          query: wQ
        } = FQ;
        if (QQ.state.readOnly) return !1;
        let qQ = wQ.matchAll(QQ.state, 1e9).map((QQ => {
          let {
            from: FQ,
            to: LQ
          } = QQ;
          return {
            from: FQ,
            to: LQ,
            insert: wQ.getReplacement(QQ)
          }
        }));
        if (!qQ.length) return !1;
        let oQ = QQ.state.phrase("replaced $ matches", qQ.length) + ".";
        return QQ.dispatch({
          changes: qQ,
          effects: LQ.f.announce.of(oQ),
          userEvent: "input.replace.all"
        }), !0
      }));

    function nQ(QQ) {
      return QQ.state.facet(SQ).createPanel(QQ)
    }

    function gQ(QQ, FQ) {
      var wQ, LQ, qQ, oQ, DQ;
      let kQ = QQ.selection.main,
        vQ = kQ.empty || kQ.to > kQ.from + 100 ? "" : QQ.sliceDoc(kQ.from, kQ.to);
      if (FQ && !vQ) return FQ;
      let mQ = QQ.facet(SQ);
      return new iQ({
        search: (null !== (wQ = null === FQ || void 0 === FQ ? void 0 : FQ.literal) && void 0 !== wQ ? wQ : mQ.literal) ? vQ : vQ.replace(/\n/g, "\\n"),
        caseSensitive: null !== (LQ = null === FQ || void 0 === FQ ? void 0 : FQ.caseSensitive) && void 0 !== LQ ? LQ : mQ.caseSensitive,
        literal: null !== (qQ = null === FQ || void 0 === FQ ? void 0 : FQ.literal) && void 0 !== qQ ? qQ : mQ.literal,
        regexp: null !== (oQ = null === FQ || void 0 === FQ ? void 0 : FQ.regexp) && void 0 !== oQ ? oQ : mQ.regexp,
        wholeWord: null !== (DQ = null === FQ || void 0 === FQ ? void 0 : FQ.wholeWord) && void 0 !== DQ ? DQ : mQ.wholeWord
      })
    }

    function PQ(QQ) {
      let FQ = (0, LQ.x)(QQ, nQ);
      return FQ && FQ.dom.querySelector("[main-field]")
    }

    function ZQ(QQ) {
      let FQ = PQ(QQ);
      FQ && FQ == QQ.root.activeElement && FQ.select()
    }
    const yQ = QQ => {
        let FQ = QQ.state.field(KQ, !1);
        if (FQ && FQ.panel) {
          let wQ = PQ(QQ);
          if (wQ && wQ != QQ.root.activeElement) {
            let LQ = gQ(QQ.state, FQ.query.spec);
            LQ.valid && QQ.dispatch({
              effects: NQ.of(LQ)
            }), wQ.focus(), wQ.select()
          }
        } else QQ.dispatch({
          effects: [TQ.of(!0), FQ ? NQ.of(gQ(QQ.state, FQ.query.spec)) : qQ.H.appendConfig.of(DF)]
        });
        return !0
      },
      BQ = QQ => {
        let FQ = QQ.state.field(KQ, !1);
        if (!FQ || !FQ.panel) return !1;
        let wQ = (0, LQ.x)(QQ, nQ);
        return wQ && wQ.dom.contains(QQ.root.activeElement) && QQ.focus(), QQ.dispatch({
          effects: TQ.of(!1)
        }), !0
      },
      dQ = [{
        key: "Mod-f",
        run: yQ,
        scope: "editor search-panel"
      }, {
        key: "F3",
        run: fQ,
        shift: VQ,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Mod-g",
        run: fQ,
        shift: VQ,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Escape",
        run: BQ,
        scope: "editor search-panel"
      }, {
        key: "Mod-Shift-l",
        run: QQ => {
          let {
            state: FQ,
            dispatch: wQ
          } = QQ, LQ = FQ.selection;
          if (LQ.PA.length > 1 || LQ.main.empty) return !1;
          let {
            from: oQ,
            to: DQ
          } = LQ.main, vQ = [], mQ = 0;
          for (let uQ = new kQ(FQ.doc, FQ.sliceDoc(oQ, DQ)); !uQ.next().done;) {
            if (vQ.length > 1e3) return !1;
            uQ.value.from == oQ && (mQ = vQ.length), vQ.push(qQ.j.range(uQ.value.from, uQ.value.to))
          }
          return wQ(FQ.update({
            selection: qQ.j.create(vQ, mQ),
            userEvent: "select.search.matches"
          })), !0
        }
      }, {
        key: "Mod-Alt-g",
        run: QQ => {
          let {
            state: FQ
          } = QQ, wQ = String(FQ.doc.lineAt(QQ.state.selection.main.head).number), {
            close: oQ,
            result: DQ
          } = (0, LQ.eb)(QQ, {
            label: FQ.phrase("Go to line"),
            input: {
              type: "text",
              name: "line",
              value: wQ
            },
            focus: !0,
            submitLabel: FQ.phrase("go")
          });
          return DQ.then((wQ => {
            let DQ = wQ && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(wQ.elements.line.value);
            if (!DQ) return void QQ.dispatch({
              effects: oQ
            });
            let kQ = FQ.doc.lineAt(FQ.selection.main.head),
              [, vQ, mQ, uQ, HQ] = DQ,
              bQ = uQ ? +uQ.slice(1) : 0,
              YQ = mQ ? +mQ : kQ.number;
            if (mQ && HQ) {
              let QQ = YQ / 100;
              vQ && (QQ = QQ * ("-" == vQ ? -1 : 1) + kQ.number / FQ.doc.lines), YQ = Math.round(FQ.doc.lines * QQ)
            } else mQ && vQ && (YQ = YQ * ("-" == vQ ? -1 : 1) + kQ.number);
            let xQ = FQ.doc.line(Math.max(1, Math.min(FQ.doc.lines, YQ))),
              AQ = qQ.j.cursor(xQ.from + Math.max(0, Math.min(bQ, xQ.length)));
            QQ.dispatch({
              effects: [oQ, LQ.f.scrollIntoView(AQ.from, {
                y: "center"
              })],
              selection: AQ
            })
          })), !0
        }
      }, {
        key: "Mod-d",
        run: QQ => {
          let {
            state: FQ,
            dispatch: wQ
          } = QQ, {
            PA: oQ
          } = FQ.selection;
          if (oQ.some((QQ => QQ.from === QQ.to))) return (QQ => {
            let {
              state: FQ,
              dispatch: wQ
            } = QQ, {
              selection: LQ
            } = FQ, oQ = qQ.j.create(LQ.PA.map((QQ => FQ.wordAt(QQ.head) || qQ.j.cursor(QQ.head))), LQ.mainIndex);
            return !oQ.eq(LQ) && (wQ(FQ.update({
              selection: oQ
            })), !0)
          })({
            state: FQ,
            dispatch: wQ
          });
          let DQ = FQ.sliceDoc(oQ[0].from, oQ[0].to);
          if (FQ.selection.PA.some((QQ => FQ.sliceDoc(QQ.from, QQ.to) != DQ))) return !1;
          let vQ = function(QQ, FQ) {
            let {
              main: wQ,
              PA: LQ
            } = QQ.selection, qQ = QQ.wordAt(wQ.head), oQ = qQ && qQ.from == wQ.from && qQ.to == wQ.to;
            for (let DQ = !1, vQ = new kQ(QQ.doc, FQ, LQ[LQ.length - 1].to);;) {
              if (vQ.next(), !vQ.done) {
                if (DQ && LQ.some((QQ => QQ.from == vQ.value.from))) continue;
                if (oQ) {
                  let FQ = QQ.wordAt(vQ.value.from);
                  if (!FQ || FQ.from != vQ.value.from || FQ.to != vQ.value.to) continue
                }
                return vQ.value
              }
              if (DQ) return null;
              vQ = new kQ(QQ.doc, FQ, 0, Math.max(0, LQ[LQ.length - 1].from - 1)), DQ = !0
            }
          }(FQ, DQ);
          return !!vQ && (wQ(FQ.update({
            selection: FQ.selection.addRange(qQ.j.range(vQ.from, vQ.to), !1),
            effects: LQ.f.scrollIntoView(vQ.to)
          })), !0)
        },
        preventDefault: !0
      }];
    class QF {
      constructor(QQ) {
        this.view = QQ;
        let FQ = this.query = QQ.state.field(KQ).query.spec;

        function wQ(QQ, FQ, wQ) {
          return (0, oQ.b)("button", {
            class: "cm-button",
            name: QQ,
            onclick: FQ,
            type: "button"
          }, wQ)
        }
        this.commit = this.commit.bind(this), this.searchField = (0, oQ.b)("input", {
          value: FQ.search,
          placeholder: FF(QQ, "Find"),
          "aria-label": FF(QQ, "Find"),
          class: "cm-textfield",
          name: "search",
          form: "",
          "main-field": "true",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.replaceField = (0, oQ.b)("input", {
          value: FQ.replace,
          placeholder: FF(QQ, "Replace"),
          "aria-label": FF(QQ, "Replace"),
          class: "cm-textfield",
          name: "replace",
          form: "",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.caseField = (0, oQ.b)("input", {
          type: "checkbox",
          name: "case",
          form: "",
          checked: FQ.caseSensitive,
          onchange: this.commit
        }), this.reField = (0, oQ.b)("input", {
          type: "checkbox",
          name: "re",
          form: "",
          checked: FQ.regexp,
          onchange: this.commit
        }), this.wordField = (0, oQ.b)("input", {
          type: "checkbox",
          name: "word",
          form: "",
          checked: FQ.wholeWord,
          onchange: this.commit
        }), this.dom = (0, oQ.b)("div", {
          onkeydown: QQ => this.keydown(QQ),
          class: "cm-search"
        }, [this.searchField, wQ("next", (() => fQ(QQ)), [FF(QQ, "next")]), wQ("prev", (() => VQ(QQ)), [FF(QQ, "previous")]), wQ("select", (() => hQ(QQ)), [FF(QQ, "all")]), (0, oQ.b)("label", null, [this.caseField, FF(QQ, "match case")]), (0, oQ.b)("label", null, [this.reField, FF(QQ, "regexp")]), (0, oQ.b)("label", null, [this.wordField, FF(QQ, "by word")]), ...QQ.state.readOnly ? [] : [(0, oQ.b)("br"), this.replaceField, wQ("replace", (() => JQ(QQ)), [FF(QQ, "replace")]), wQ("replaceAll", (() => EQ(QQ)), [FF(QQ, "replace all")])], (0, oQ.b)("button", {
          name: "close",
          onclick: () => BQ(QQ),
          "aria-label": FF(QQ, "close"),
          type: "button"
        }, ["\xd7"])])
      }
      commit() {
        let QQ = new iQ({
          search: this.searchField.value,
          caseSensitive: this.caseField.checked,
          regexp: this.reField.checked,
          wholeWord: this.wordField.checked,
          replace: this.replaceField.value
        });
        QQ.eq(this.query) || (this.query = QQ, this.view.dispatch({
          effects: NQ.of(QQ)
        }))
      }
      keydown(QQ) {
        (0, LQ.db)(this.view, QQ, "search-panel") ? QQ.preventDefault(): 13 == QQ.keyCode && QQ.target == this.searchField ? (QQ.preventDefault(), (QQ.shiftKey ? VQ : fQ)(this.view)) : 13 == QQ.keyCode && QQ.target == this.replaceField && (QQ.preventDefault(), JQ(this.view))
      }
      update(QQ) {
        for (let FQ of QQ.transactions)
          for (let QQ of FQ.effects) QQ.is(NQ) && !QQ.value.eq(this.query) && this.setQuery(QQ.value)
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
        return this.view.state.facet(SQ).top
      }
    }

    function FF(QQ, FQ) {
      return QQ.state.phrase(FQ)
    }
    const wF = 30,
      LF = /[\s\.,:;?!]/;

    function qF(QQ, FQ) {
      let {
        from: wQ,
        to: qQ
      } = FQ, oQ = QQ.state.doc.lineAt(wQ), DQ = QQ.state.doc.lineAt(qQ).to, kQ = Math.max(oQ.from, wQ - wF), vQ = Math.min(DQ, qQ + wF), mQ = QQ.state.sliceDoc(kQ, vQ);
      if (kQ != oQ.from)
        for (let LQ = 0; LQ < wF; LQ++)
          if (!LF.test(mQ[LQ + 1]) && LF.test(mQ[LQ])) {
            mQ = mQ.slice(LQ);
            break
          } if (vQ != DQ)
        for (let LQ = mQ.length - 1; LQ > mQ.length - wF; LQ--)
          if (!LF.test(mQ[LQ - 1]) && LF.test(mQ[LQ])) {
            mQ = mQ.slice(0, LQ);
            break
          } return LQ.f.announce.of(`${QQ.state.phrase("current match")}. ${mQ} ${QQ.state.phrase("on line")} ${oQ.number}.`)
    }
    const oF = LQ.f.baseTheme({
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
      DF = [KQ, qQ.w.low(aQ), oF]
  },
  40702: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => UQ,
      d: () => mF,
      f: () => Rq,
      g: () => vD,
      h: () => ZF,
      l: () => rQ,
      o: () => ro,
      r: () => yq,
      v: () => Do,
      x: () => Bo,
      A: () => Po,
      B: () => YD,
      H: () => Mo,
      F: () => ND,
      L: () => xo,
      N: () => go,
      O: () => Kq,
      S: () => sD,
      V: () => EF,
      Z: () => Co,
      $: () => Ro,
      db: () => jq,
      eb: () => qD,
      fb: () => LD,
      ib: () => fo
    });
    for (var LQ = wQ(40695), qQ = wQ(40709), oQ = {
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
      }, DQ = {
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
      }, kQ = "undefined" != typeof navigator && /Mac/.test(navigator.platform), vQ = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), mQ = 0; mQ < 10; mQ++) oQ[48 + mQ] = oQ[96 + mQ] = String(mQ);
    for (mQ = 1; mQ <= 24; mQ++) oQ[mQ + 111] = "F" + mQ;
    for (mQ = 65; mQ <= 90; mQ++) oQ[mQ] = String.fromCharCode(mQ + 32), DQ[mQ] = String.fromCharCode(mQ);
    for (var uQ in oQ) DQ.hasOwnProperty(uQ) || (DQ[uQ] = oQ[uQ]);
    var HQ = wQ(40715);
    let bQ = "undefined" != typeof navigator ? navigator : {
        userAgent: "",
        vendor: "",
        platform: ""
      },
      YQ = "undefined" != typeof document ? document : {
        documentElement: {
          style: {}
        }
      };
    const xQ = /Edge\/(\d+)/.exec(bQ.userAgent),
      AQ = /MSIE \d/.test(bQ.userAgent),
      tQ = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(bQ.userAgent),
      eQ = !!(AQ || tQ || xQ),
      MQ = !eQ && /gecko\/(\d+)/i.test(bQ.userAgent),
      GQ = !eQ && /Chrome\/(\d+)/.exec(bQ.userAgent),
      pQ = "webkitFontSmoothing" in YQ.documentElement.style,
      cQ = !eQ && /Apple Computer/.test(bQ.vendor),
      CQ = cQ && (/Mobile\/\w+/.test(bQ.userAgent) || bQ.maxTouchPoints > 2);
    var SQ = {
      mac: CQ || /Mac/.test(bQ.platform),
      windows: /Win/.test(bQ.platform),
      linux: /Linux|X11/.test(bQ.platform),
      ie: eQ,
      ie_version: AQ ? YQ.documentMode || 6 : tQ ? +tQ[1] : xQ ? +xQ[1] : 0,
      gecko: MQ,
      gecko_version: MQ ? +(/Firefox\/(\d+)/.exec(bQ.userAgent) || [0, 0])[1] : 0,
      chrome: !!GQ,
      chrome_version: GQ ? +GQ[1] : 0,
      ios: CQ,
      android: /Android\b/.test(bQ.userAgent),
      webkit: pQ,
      webkit_version: pQ ? +(/\bAppleWebKit\/(\d+)/.exec(bQ.userAgent) || [0, 0])[1] : 0,
      safari: cQ,
      safari_version: cQ ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(bQ.userAgent) || [0, 0])[1] : 0,
      tabSize: null != YQ.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size"
    };

    function iQ(QQ, FQ) {
      for (let wQ in QQ) "class" == wQ && FQ.class ? FQ.class += " " + QQ.class : "style" == wQ && FQ.style ? FQ.style += ";" + QQ.style : FQ[wQ] = QQ[wQ];
      return FQ
    }
    const WQ = Object.create(null);

    function RQ(QQ, FQ, wQ) {
      if (QQ == FQ) return !0;
      QQ || (QQ = WQ), FQ || (FQ = WQ);
      let LQ = Object.keys(QQ),
        qQ = Object.keys(FQ);
      if (LQ.length - (wQ && LQ.indexOf(wQ) > -1 ? 1 : 0) != qQ.length - (wQ && qQ.indexOf(wQ) > -1 ? 1 : 0)) return !1;
      for (let oQ of LQ)
        if (oQ != wQ && (-1 == qQ.indexOf(oQ) || QQ[oQ] !== FQ[oQ])) return !1;
      return !0
    }

    function OQ(QQ, FQ, wQ) {
      let LQ = !1;
      if (FQ)
        for (let qQ in FQ) wQ && qQ in wQ || (LQ = !0, "style" == qQ ? QQ.style.cssText = "" : QQ.removeAttribute(qQ));
      if (wQ)
        for (let qQ in wQ) FQ && FQ[qQ] == wQ[qQ] || (LQ = !0, "style" == qQ ? QQ.style.cssText = wQ[qQ] : QQ.setAttribute(qQ, wQ[qQ]));
      return LQ
    }

    function sQ(QQ) {
      let FQ = Object.create(null);
      for (let wQ = 0; wQ < QQ.attributes.length; wQ++) {
        let LQ = QQ.attributes[wQ];
        FQ[LQ.name] = LQ.value
      }
      return FQ
    }
    class rQ {
      eq(QQ) {
        return !1
      }
      updateDOM(QQ, FQ, wQ) {
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
      coordsAt(QQ, FQ, wQ) {
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
    var IQ = function(QQ) {
      return QQ[QQ.Text = 0] = "Text", QQ[QQ.WidgetBefore = 1] = "WidgetBefore", QQ[QQ.WidgetAfter = 2] = "WidgetAfter", QQ[QQ.WidgetRange = 3] = "WidgetRange", QQ
    }(IQ || (IQ = {}));
    class UQ extends LQ.D {
      constructor(QQ, FQ, wQ, LQ) {
        super(), this.startSide = QQ, this.endSide = FQ, this.widget = wQ, this.spec = LQ
      }
      get heightRelevant() {
        return !1
      }
      static mark(QQ) {
        return new NQ(QQ)
      }
      static widget(QQ) {
        let FQ = Math.max(-1e4, Math.min(1e4, QQ.side || 0)),
          wQ = !!QQ.block;
        return FQ += wQ && !QQ.inlineOrder ? FQ > 0 ? 3e8 : -4e8 : FQ > 0 ? 1e8 : -1e8, new KQ(QQ, FQ, FQ, wQ, QQ.widget || null, !1)
      }
      static replace(QQ) {
        let FQ, wQ, LQ = !!QQ.block;
        if (QQ.isBlockGap) FQ = -5e8, wQ = 4e8;
        else {
          let {
            start: qQ,
            end: oQ
          } = zQ(QQ, LQ);
          FQ = (qQ ? LQ ? -3e8 : -1 : 5e8) - 1, wQ = 1 + (oQ ? LQ ? 2e8 : 1 : -6e8)
        }
        return new KQ(QQ, FQ, wQ, LQ, QQ.widget || null, !0)
      }
      static line(QQ) {
        return new TQ(QQ)
      }
      static set(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return LQ.B.of(QQ, FQ)
      }
      hasHeight() {
        return !!this.widget && this.widget.estimatedHeight > -1
      }
    }
    UQ.none = LQ.B.empty;
    class NQ extends UQ {
      constructor(QQ) {
        let {
          start: FQ,
          end: wQ
        } = zQ(QQ);
        super(FQ ? -1 : 5e8, wQ ? 1 : -6e8, null, QQ), this.tagName = QQ.tagName || "span", this.attrs = QQ.class && QQ.attributes ? iQ(QQ.attributes, {
          class: QQ.class
        }) : QQ.class ? {
          class: QQ.class
        } : QQ.attributes || WQ
      }
      eq(QQ) {
        return this == QQ || QQ instanceof NQ && this.tagName == QQ.tagName && RQ(this.attrs, QQ.attrs)
      }
      range(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QQ;
        if (QQ >= FQ) throw new RangeError("Mark decorations may not be empty");
        return super.range(QQ, FQ)
      }
    }
    NQ.prototype.point = !1;
    class TQ extends UQ {
      constructor(QQ) {
        super(-2e8, -2e8, null, QQ)
      }
      eq(QQ) {
        return QQ instanceof TQ && this.spec.class == QQ.spec.class && RQ(this.spec.attributes, QQ.spec.attributes)
      }
      range(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QQ;
        if (FQ != QQ) throw new RangeError("Line decoration ranges must be zero-length");
        return super.range(QQ, FQ)
      }
    }
    TQ.prototype.mapMode = LQ.t.TrackBefore, TQ.prototype.point = !0;
    class KQ extends UQ {
      constructor(QQ, FQ, wQ, qQ, oQ, DQ) {
        super(FQ, wQ, oQ, QQ), this.block = qQ, this.isReplace = DQ, this.mapMode = qQ ? FQ <= 0 ? LQ.t.TrackBefore : LQ.t.TrackAfter : LQ.t.TrackDel
      }
      get type() {
        return this.startSide != this.endSide ? IQ.WidgetRange : this.startSide <= 0 ? IQ.WidgetBefore : IQ.WidgetAfter
      }
      get heightRelevant() {
        return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0)
      }
      eq(QQ) {
        return QQ instanceof KQ && (FQ = this.widget, wQ = QQ.widget, FQ == wQ || !!(FQ && wQ && FQ.compare(wQ))) && this.block == QQ.block && this.startSide == QQ.startSide && this.endSide == QQ.endSide;
        var FQ, wQ
      }
      range(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QQ;
        if (this.isReplace && (QQ > FQ || QQ == FQ && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && FQ != QQ) throw new RangeError("Widget decorations can only have zero-length ranges");
        return super.range(QQ, FQ)
      }
    }

    function zQ(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          inclusiveStart: wQ,
          inclusiveEnd: LQ
        } = QQ;
      return null == wQ && (wQ = QQ.inclusive), null == LQ && (LQ = QQ.inclusive), {
        start: null !== wQ && void 0 !== wQ ? wQ : FQ,
        end: null !== LQ && void 0 !== LQ ? LQ : FQ
      }
    }

    function lQ(QQ, FQ, wQ) {
      let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        qQ = wQ.length - 1;
      qQ >= 0 && wQ[qQ] + LQ >= QQ ? wQ[qQ] = Math.max(wQ[qQ], FQ) : wQ.push(QQ, FQ)
    }
    KQ.prototype.point = !0;
    class jQ extends LQ.D {
      constructor(QQ, FQ) {
        super(), this.tagName = QQ, this.attributes = FQ
      }
      eq(QQ) {
        return QQ == this || QQ instanceof jQ && this.tagName == QQ.tagName && RQ(this.attributes, QQ.attributes)
      }
      static create(QQ) {
        return new jQ(QQ.tagName, QQ.attributes || WQ)
      }
      static set(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return LQ.B.of(QQ, FQ)
      }
    }

    function aQ(QQ) {
      let FQ;
      return FQ = 11 == QQ.nodeType ? QQ.getSelection ? QQ : QQ.ownerDocument : QQ, FQ.getSelection()
    }

    function XQ(QQ, FQ) {
      return !!FQ && (QQ == FQ || QQ.contains(1 != FQ.nodeType ? FQ.parentNode : FQ))
    }

    function fQ(QQ, FQ) {
      if (!FQ.anchorNode) return !1;
      try {
        return XQ(QQ, FQ.anchorNode)
      } catch (wQ) {
        return !1
      }
    }

    function VQ(QQ) {
      return 3 == QQ.nodeType ? LF(QQ, 0, QQ.nodeValue.length).getClientRects() : 1 == QQ.nodeType ? QQ.getClientRects() : []
    }

    function hQ(QQ, FQ, wQ, LQ) {
      return !!wQ && (nQ(QQ, FQ, wQ, LQ, -1) || nQ(QQ, FQ, wQ, LQ, 1))
    }

    function JQ(QQ) {
      for (var FQ = 0;; FQ++)
        if (!(QQ = QQ.previousSibling)) return FQ
    }

    function EQ(QQ) {
      return 1 == QQ.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(QQ.nodeName)
    }

    function nQ(QQ, FQ, wQ, LQ, qQ) {
      for (;;) {
        if (QQ == wQ && FQ == LQ) return !0;
        if (FQ == (qQ < 0 ? 0 : gQ(QQ))) {
          if ("DIV" == QQ.nodeName) return !1;
          let wQ = QQ.parentNode;
          if (!wQ || 1 != wQ.nodeType) return !1;
          FQ = JQ(QQ) + (qQ < 0 ? 0 : 1), QQ = wQ
        } else {
          if (1 != QQ.nodeType) return !1;
          if (1 == (QQ = QQ.childNodes[FQ + (qQ < 0 ? -1 : 0)]).nodeType && "false" == QQ.contentEditable) return !1;
          FQ = qQ < 0 ? gQ(QQ) : 0
        }
      }
    }

    function gQ(QQ) {
      return 3 == QQ.nodeType ? QQ.nodeValue.length : QQ.childNodes.length
    }

    function PQ(QQ, FQ) {
      let wQ = FQ ? QQ.left : QQ.right;
      return {
        left: wQ,
        right: wQ,
        top: QQ.top,
        bottom: QQ.bottom
      }
    }

    function ZQ(QQ) {
      let FQ = QQ.visualViewport;
      return FQ ? {
        left: 0,
        right: FQ.width,
        top: 0,
        bottom: FQ.height
      } : {
        left: 0,
        right: QQ.innerWidth,
        top: 0,
        bottom: QQ.innerHeight
      }
    }

    function yQ(QQ, FQ) {
      let wQ = FQ.width / QQ.offsetWidth,
        LQ = FQ.height / QQ.offsetHeight;
      return (wQ > .995 && wQ < 1.005 || !isFinite(wQ) || Math.abs(FQ.width - QQ.offsetWidth) < 1) && (wQ = 1), (LQ > .995 && LQ < 1.005 || !isFinite(LQ) || Math.abs(FQ.height - QQ.offsetHeight) < 1) && (LQ = 1), {
        scaleX: wQ,
        scaleY: LQ
      }
    }

    function BQ(QQ) {
      let FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        wQ = QQ.ownerDocument,
        LQ = null,
        qQ = null;
      for (let oQ = QQ.parentNode; oQ && (oQ != wQ.body && (FQ && !LQ || !qQ));)
        if (1 == oQ.nodeType) !qQ && oQ.scrollHeight > oQ.clientHeight && (qQ = oQ), FQ && !LQ && oQ.scrollWidth > oQ.clientWidth && (LQ = oQ), oQ = oQ.assignedSlot || oQ.parentNode;
        else {
          if (11 != oQ.nodeType) break;
          oQ = oQ.host
        } return {
        x: LQ,
        y: qQ
      }
    }
    jQ.prototype.startSide = jQ.prototype.endSide = -1;
    class dQ {
      constructor() {
        this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
      }
      eq(QQ) {
        return this.anchorNode == QQ.anchorNode && this.anchorOffset == QQ.anchorOffset && this.focusNode == QQ.focusNode && this.focusOffset == QQ.focusOffset
      }
      setRange(QQ) {
        let {
          anchorNode: FQ,
          focusNode: wQ
        } = QQ;
        this.set(FQ, Math.min(QQ.anchorOffset, FQ ? gQ(FQ) : 0), wQ, Math.min(QQ.focusOffset, wQ ? gQ(wQ) : 0))
      }
      set(QQ, FQ, wQ, LQ) {
        this.anchorNode = QQ, this.anchorOffset = FQ, this.focusNode = wQ, this.focusOffset = LQ
      }
    }
    let QF, FF = null;

    function wF(QQ) {
      if (QQ.setActive) return QQ.setActive();
      if (FF) return QQ.focus(FF);
      let FQ = [];
      for (let wQ = QQ; wQ && (FQ.push(wQ, wQ.scrollTop, wQ.scrollLeft), wQ != wQ.ownerDocument); wQ = wQ.parentNode);
      if (QQ.focus(null == FF ? {
          get preventScroll() {
            return FF = {
              preventScroll: !0
            }, !0
          }
        } : void 0), !FF) {
        FF = !1;
        for (let QQ = 0; QQ < FQ.length;) {
          let wQ = FQ[QQ++],
            LQ = FQ[QQ++],
            qQ = FQ[QQ++];
          wQ.scrollTop != LQ && (wQ.scrollTop = LQ), wQ.scrollLeft != qQ && (wQ.scrollLeft = qQ)
        }
      }
    }

    function LF(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : FQ,
        LQ = QF || (QF = document.createRange());
      return LQ.setEnd(QQ, wQ), LQ.setStart(QQ, FQ), LQ
    }

    function qF(QQ, FQ, wQ, LQ) {
      let qQ = {
        key: FQ,
        code: FQ,
        keyCode: wQ,
        which: wQ,
        cancelable: !0
      };
      LQ && ({
        altKey: qQ.altKey,
        ctrlKey: qQ.ctrlKey,
        shiftKey: qQ.shiftKey,
        metaKey: qQ.metaKey
      } = LQ);
      let oQ = new KeyboardEvent("keydown", qQ);
      oQ.synthetic = !0, QQ.dispatchEvent(oQ);
      let DQ = new KeyboardEvent("keyup", qQ);
      return DQ.synthetic = !0, QQ.dispatchEvent(DQ), oQ.defaultPrevented || DQ.defaultPrevented
    }

    function oF(QQ) {
      return QQ instanceof Window ? QQ.pageYOffset > Math.max(0, QQ.document.documentElement.scrollHeight - QQ.innerHeight - 4) : QQ.scrollTop > Math.max(1, QQ.scrollHeight - QQ.clientHeight - 4)
    }

    function DF(QQ, FQ) {
      for (let wQ = QQ, LQ = FQ;;) {
        if (3 == wQ.nodeType && LQ > 0) return {
          node: wQ,
          offset: LQ
        };
        if (1 == wQ.nodeType && LQ > 0) {
          if ("false" == wQ.contentEditable) return null;
          wQ = wQ.childNodes[LQ - 1], LQ = gQ(wQ)
        } else {
          if (!wQ.parentNode || EQ(wQ)) return null;
          LQ = JQ(wQ), wQ = wQ.parentNode
        }
      }
    }

    function kF(QQ, FQ) {
      for (let wQ = QQ, LQ = FQ;;) {
        if (3 == wQ.nodeType && LQ < wQ.nodeValue.length) return {
          node: wQ,
          offset: LQ
        };
        if (1 == wQ.nodeType && LQ < wQ.childNodes.length) {
          if ("false" == wQ.contentEditable) return null;
          wQ = wQ.childNodes[LQ], LQ = 0
        } else {
          if (!wQ.parentNode || EQ(wQ)) return null;
          LQ = JQ(wQ) + 1, wQ = wQ.parentNode
        }
      }
    }
    SQ.safari && SQ.safari_version >= 26 && (FF = !1);
    class vF {
      constructor(QQ, FQ) {
        let wQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.node = QQ, this.offset = FQ, this.precise = wQ
      }
      static before(QQ, FQ) {
        return new vF(QQ.parentNode, JQ(QQ), FQ)
      }
      static after(QQ, FQ) {
        return new vF(QQ.parentNode, JQ(QQ) + 1, FQ)
      }
    }
    var mF = function(QQ) {
      return QQ[QQ.LTR = 0] = "LTR", QQ[QQ.RTL = 1] = "RTL", QQ
    }(mF || (mF = {}));
    const uF = mF.LTR,
      HF = mF.RTL;

    function bF(QQ) {
      let FQ = [];
      for (let wQ = 0; wQ < QQ.length; wQ++) FQ.push(1 << +QQ[wQ]);
      return FQ
    }
    const YF = bF("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),
      xF = bF("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),
      AF = Object.create(null),
      tF = [];
    for (let TD of ["()", "[]", "{}"]) {
      let QQ = TD.charCodeAt(0),
        FQ = TD.charCodeAt(1);
      AF[QQ] = FQ, AF[FQ] = -QQ
    }

    function eF(QQ) {
      return QQ <= 247 ? YF[QQ] : 1424 <= QQ && QQ <= 1524 ? 2 : 1536 <= QQ && QQ <= 1785 ? xF[QQ - 1536] : 1774 <= QQ && QQ <= 2220 ? 4 : 8192 <= QQ && QQ <= 8204 ? 256 : 64336 <= QQ && QQ <= 65023 ? 4 : 1
    }
    const MF = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
    class GF {
      get dir() {
        return this.level % 2 ? HF : uF
      }
      constructor(QQ, FQ, wQ) {
        this.from = QQ, this.to = FQ, this.level = wQ
      }
      side(QQ, FQ) {
        return this.dir == FQ == QQ ? this.to : this.from
      }
      forward(QQ, FQ) {
        return QQ == (this.dir == FQ)
      }
      static find(QQ, FQ, wQ, LQ) {
        let qQ = -1;
        for (let oQ = 0; oQ < QQ.length; oQ++) {
          let DQ = QQ[oQ];
          if (DQ.from <= FQ && DQ.to >= FQ) {
            if (DQ.level == wQ) return oQ;
            (qQ < 0 || (0 != LQ ? LQ < 0 ? DQ.from < FQ : DQ.to > FQ : QQ[qQ].level > DQ.level)) && (qQ = oQ)
          }
        }
        if (qQ < 0) throw new RangeError("Index out of range");
        return qQ
      }
    }

    function pF(QQ, FQ) {
      if (QQ.length != FQ.length) return !1;
      for (let wQ = 0; wQ < QQ.length; wQ++) {
        let LQ = QQ[wQ],
          qQ = FQ[wQ];
        if (LQ.from != qQ.from || LQ.to != qQ.to || LQ.direction != qQ.direction || !pF(LQ.inner, qQ.inner)) return !1
      }
      return !0
    }
    const cF = [];

    function CF(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
      let kQ = LQ % 2 ? 2 : 1;
      if (LQ % 2 == qQ % 2)
        for (let vQ = FQ, mQ = 0; vQ < wQ;) {
          let FQ = !0,
            uQ = !1;
          if (mQ == oQ.length || vQ < oQ[mQ].from) {
            let QQ = cF[vQ];
            QQ != kQ && (FQ = !1, uQ = 16 == QQ)
          }
          let HQ = FQ || 1 != kQ ? null : [],
            bQ = FQ ? LQ : LQ + 1,
            YQ = vQ;
          QQ: for (;;)
            if (mQ < oQ.length && YQ == oQ[mQ].from) {
              if (uQ) break QQ;
              let xQ = oQ[mQ];
              if (!FQ)
                for (let QQ = xQ.to, FQ = mQ + 1;;) {
                  if (QQ == wQ) break QQ;
                  if (!(FQ < oQ.length && oQ[FQ].from == QQ)) {
                    if (cF[QQ] == kQ) break QQ;
                    break
                  }
                  QQ = oQ[FQ++].to
                }
              if (mQ++, HQ) HQ.push(xQ);
              else {
                xQ.from > vQ && DQ.push(new GF(vQ, xQ.from, bQ)), SF(QQ, xQ.direction == uF != !(bQ % 2) ? LQ + 1 : LQ, qQ, xQ.inner, xQ.from, xQ.to, DQ), vQ = xQ.to
              }
              YQ = xQ.to
            } else {
              if (YQ == wQ || (FQ ? cF[YQ] != kQ : cF[YQ] == kQ)) break;
              YQ++
            } HQ ? CF(QQ, vQ, YQ, LQ + 1, qQ, HQ, DQ) : vQ < YQ && DQ.push(new GF(vQ, YQ, bQ)), vQ = YQ
        } else
          for (let vQ = wQ, mQ = oQ.length; vQ > FQ;) {
            let wQ = !0,
              uQ = !1;
            if (!mQ || vQ > oQ[mQ - 1].to) {
              let QQ = cF[vQ - 1];
              QQ != kQ && (wQ = !1, uQ = 16 == QQ)
            }
            let HQ = wQ || 1 != kQ ? null : [],
              bQ = wQ ? LQ : LQ + 1,
              YQ = vQ;
            QQ: for (;;)
              if (mQ && YQ == oQ[mQ - 1].to) {
                if (uQ) break QQ;
                let xQ = oQ[--mQ];
                if (!wQ)
                  for (let QQ = xQ.from, wQ = mQ;;) {
                    if (QQ == FQ) break QQ;
                    if (!wQ || oQ[wQ - 1].to != QQ) {
                      if (cF[QQ - 1] == kQ) break QQ;
                      break
                    }
                    QQ = oQ[--wQ].from
                  }
                if (HQ) HQ.push(xQ);
                else {
                  xQ.to < vQ && DQ.push(new GF(xQ.to, vQ, bQ)), SF(QQ, xQ.direction == uF != !(bQ % 2) ? LQ + 1 : LQ, qQ, xQ.inner, xQ.from, xQ.to, DQ), vQ = xQ.from
                }
                YQ = xQ.from
              } else {
                if (YQ == FQ || (wQ ? cF[YQ - 1] != kQ : cF[YQ - 1] == kQ)) break;
                YQ--
              } HQ ? CF(QQ, YQ, vQ, LQ + 1, qQ, HQ, DQ) : YQ < vQ && DQ.push(new GF(YQ, vQ, bQ)), vQ = YQ
          }
    }

    function SF(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
      let kQ = FQ % 2 ? 2 : 1;
      ! function(QQ, FQ, wQ, LQ, qQ) {
        for (let oQ = 0; oQ <= LQ.length; oQ++) {
          let DQ = oQ ? LQ[oQ - 1].to : FQ,
            kQ = oQ < LQ.length ? LQ[oQ].from : wQ,
            vQ = oQ ? 256 : qQ;
          for (let FQ = DQ, wQ = vQ, LQ = vQ; FQ < kQ; FQ++) {
            let qQ = eF(QQ.charCodeAt(FQ));
            512 == qQ ? qQ = wQ : 8 == qQ && 4 == LQ && (qQ = 16), cF[FQ] = 4 == qQ ? 2 : qQ, 7 & qQ && (LQ = qQ), wQ = qQ
          }
          for (let QQ = DQ, FQ = vQ, LQ = vQ; QQ < kQ; QQ++) {
            let qQ = cF[QQ];
            if (128 == qQ) QQ < kQ - 1 && FQ == cF[QQ + 1] && 24 & FQ ? qQ = cF[QQ] = FQ : cF[QQ] = 256;
            else if (64 == qQ) {
              let qQ = QQ + 1;
              for (; qQ < kQ && 64 == cF[qQ];) qQ++;
              let oQ = QQ && 8 == FQ || qQ < wQ && 8 == cF[qQ] ? 1 == LQ ? 1 : 8 : 256;
              for (let FQ = QQ; FQ < qQ; FQ++) cF[FQ] = oQ;
              QQ = qQ - 1
            } else 8 == qQ && 1 == LQ && (cF[QQ] = 1);
            FQ = qQ, 7 & qQ && (LQ = qQ)
          }
        }
      }(QQ, qQ, oQ, LQ, kQ),
      function(QQ, FQ, wQ, LQ, qQ) {
        let oQ = 1 == qQ ? 2 : 1;
        for (let DQ = 0, kQ = 0, vQ = 0; DQ <= LQ.length; DQ++) {
          let mQ = DQ ? LQ[DQ - 1].to : FQ,
            uQ = DQ < LQ.length ? LQ[DQ].from : wQ;
          for (let FQ, wQ, LQ, DQ = mQ; DQ < uQ; DQ++)
            if (wQ = AF[FQ = QQ.charCodeAt(DQ)])
              if (wQ < 0) {
                for (let QQ = kQ - 3; QQ >= 0; QQ -= 3)
                  if (tF[QQ + 1] == -wQ) {
                    let FQ = tF[QQ + 2],
                      wQ = 2 & FQ ? qQ : 4 & FQ ? 1 & FQ ? oQ : qQ : 0;
                    wQ && (cF[DQ] = cF[tF[QQ]] = wQ), kQ = QQ;
                    break
                  }
              } else {
                if (189 == tF.length) break;
                tF[kQ++] = DQ, tF[kQ++] = FQ, tF[kQ++] = vQ
              }
          else if (2 == (LQ = cF[DQ]) || 1 == LQ) {
            let QQ = LQ == qQ;
            vQ = QQ ? 0 : 1;
            for (let FQ = kQ - 3; FQ >= 0; FQ -= 3) {
              let wQ = tF[FQ + 2];
              if (2 & wQ) break;
              if (QQ) tF[FQ + 2] |= 2;
              else {
                if (4 & wQ) break;
                tF[FQ + 2] |= 4
              }
            }
          }
        }
      }(QQ, qQ, oQ, LQ, kQ),
      function(QQ, FQ, wQ, LQ) {
        for (let qQ = 0, oQ = LQ; qQ <= wQ.length; qQ++) {
          let DQ = qQ ? wQ[qQ - 1].to : QQ,
            kQ = qQ < wQ.length ? wQ[qQ].from : FQ;
          for (let vQ = DQ; vQ < kQ;) {
            let DQ = cF[vQ];
            if (256 == DQ) {
              let DQ = vQ + 1;
              for (;;)
                if (DQ == kQ) {
                  if (qQ == wQ.length) break;
                  DQ = wQ[qQ++].to, kQ = qQ < wQ.length ? wQ[qQ].from : FQ
                } else {
                  if (256 != cF[DQ]) break;
                  DQ++
                } let mQ = 1 == oQ,
                uQ = mQ == (1 == (DQ < FQ ? cF[DQ] : LQ)) ? mQ ? 1 : 2 : LQ;
              for (let FQ = DQ, LQ = qQ, oQ = LQ ? wQ[LQ - 1].to : QQ; FQ > vQ;) FQ == oQ && (FQ = wQ[--LQ].from, oQ = LQ ? wQ[LQ - 1].to : QQ), cF[--FQ] = uQ;
              vQ = DQ
            } else oQ = DQ, vQ++
          }
        }
      }(qQ, oQ, LQ, kQ), CF(QQ, qQ, oQ, FQ, wQ, LQ, DQ)
    }

    function iF(QQ, FQ, wQ) {
      if (!QQ) return [new GF(0, 0, FQ == HF ? 1 : 0)];
      if (FQ == uF && !wQ.length && !MF.test(QQ)) return WF(QQ.length);
      if (wQ.length)
        for (; QQ.length > cF.length;) cF[cF.length] = 256;
      let LQ = [],
        qQ = FQ == uF ? 0 : 1;
      return SF(QQ, qQ, qQ, wQ, 0, QQ.length, LQ), LQ
    }

    function WF(QQ) {
      return [new GF(0, QQ, 0)]
    }
    let RF = "";

    function OF(QQ, FQ, wQ, qQ, oQ) {
      var DQ;
      let kQ = qQ.head - QQ.from,
        vQ = GF.find(FQ, kQ, null !== (DQ = qQ.bidiLevel) && void 0 !== DQ ? DQ : -1, qQ.assoc),
        mQ = FQ[vQ],
        uQ = mQ.side(oQ, wQ);
      if (kQ == uQ) {
        let QQ = vQ += oQ ? 1 : -1;
        if (QQ < 0 || QQ >= FQ.length) return null;
        mQ = FQ[vQ = QQ], kQ = mQ.side(!oQ, wQ), uQ = mQ.side(oQ, wQ)
      }
      let HQ = (0, LQ.$)(QQ.text, kQ, mQ.forward(oQ, wQ));
      (HQ < mQ.from || HQ > mQ.to) && (HQ = uQ), RF = QQ.text.slice(Math.min(kQ, HQ), Math.max(kQ, HQ));
      let bQ = vQ == (oQ ? FQ.length - 1 : 0) ? null : FQ[vQ + (oQ ? 1 : -1)];
      return bQ && HQ == uQ && bQ.level + (oQ ? 0 : 1) < mQ.level ? LQ.j.cursor(bQ.side(!oQ, wQ) + QQ.from, bQ.forward(oQ, wQ) ? 1 : -1, bQ.level) : LQ.j.cursor(HQ + QQ.from, mQ.forward(oQ, wQ) ? -1 : 1, mQ.level)
    }

    function sF(QQ, FQ, wQ) {
      for (let LQ = FQ; LQ < wQ; LQ++) {
        let FQ = eF(QQ.charCodeAt(LQ));
        if (1 == FQ) return uF;
        if (2 == FQ || 4 == FQ) return HF
      }
      return uF
    }
    const rF = LQ.r.define(),
      IF = LQ.r.define(),
      UF = LQ.r.define(),
      NF = LQ.r.define(),
      TF = LQ.r.define(),
      KF = LQ.r.define(),
      zF = LQ.r.define(),
      lF = LQ.r.define(),
      jF = LQ.r.define(),
      aF = LQ.r.define({
        combine: QQ => QQ.some((QQ => QQ))
      }),
      XF = LQ.r.define({
        combine: QQ => QQ.some((QQ => QQ))
      }),
      fF = LQ.r.define();
    class VF {
      constructor(QQ, FQ, wQ, LQ, qQ) {
        let oQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.range = QQ, this.y = FQ, this.x = wQ, this.yMargin = LQ, this.xMargin = qQ, this.isSnapshot = oQ
      }
      map(QQ) {
        return QQ.empty ? this : new VF(this.range.map(QQ), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
      clip(QQ) {
        return this.range.to <= QQ.doc.length ? this : new VF(LQ.j.cursor(QQ.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
    }
    const hF = LQ.H.define({
        map: (QQ, FQ) => QQ.map(FQ)
      }),
      JF = LQ.H.define();

    function EF(QQ, FQ, wQ) {
      let LQ = QQ.facet(NF);
      LQ.length ? LQ[0](FQ) : window.onerror && window.onerror(String(FQ), wQ, void 0, void 0, FQ) || (wQ ? console.error(wQ + ":", FQ) : console.error(FQ))
    }
    const nF = LQ.r.define({
      combine: QQ => !QQ.length || QQ[0]
    });
    let gF = 0;
    const PF = LQ.r.define({
      combine: QQ => QQ.filter(((FQ, wQ) => {
        for (let LQ = 0; LQ < wQ; LQ++)
          if (QQ[LQ].plugin == FQ.plugin) return !1;
        return !0
      }))
    });
    class ZF {
      constructor(QQ, FQ, wQ, LQ, qQ) {
        this.id = QQ, this.create = FQ, this.domEventHandlers = wQ, this.domEventObservers = LQ, this.baseExtensions = qQ(this), this.extension = this.baseExtensions.concat(PF.of({
          plugin: this,
          arg: void 0
        }))
      }
      of(QQ) {
        return this.baseExtensions.concat(PF.of({
          plugin: this,
          arg: QQ
        }))
      }
      static define(QQ, FQ) {
        const {
          eventHandlers: wQ,
          eventObservers: LQ,
          provide: qQ,
          qo: oQ
        } = FQ || {};
        return new ZF(gF++, QQ, wQ, LQ, (QQ => {
          let FQ = [];
          return oQ && FQ.push(Qw.of((FQ => {
            let wQ = FQ.plugin(QQ);
            return wQ ? oQ(wQ) : UQ.none
          }))), qQ && FQ.push(qQ(QQ)), FQ
        }))
      }
      static fromClass(QQ, FQ) {
        return ZF.define(((FQ, wQ) => new QQ(FQ, wQ)), FQ)
      }
    }
    class yF {
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
            } catch (FQ) {
              if (EF(QQ.state, FQ, "CodeMirror plugin crashed"), this.value.destroy) try {
                this.value.destroy()
              } catch (wQ) {}
              this.deactivate()
            }
          }
        } else if (this.spec) try {
          this.value = this.spec.plugin.create(QQ, this.spec.arg)
        } catch (FQ) {
          EF(QQ.state, FQ, "CodeMirror plugin crashed"), this.deactivate()
        }
        return this
      }
      destroy(QQ) {
        var FQ;
        if (null === (FQ = this.value) || void 0 === FQ ? void 0 : FQ.destroy) try {
          this.value.destroy()
        } catch (wQ) {
          EF(QQ.state, wQ, "CodeMirror plugin crashed")
        }
      }
      deactivate() {
        this.spec = this.value = null
      }
    }
    const BF = LQ.r.define(),
      dF = LQ.r.define(),
      Qw = LQ.r.define(),
      Fw = LQ.r.define(),
      ww = LQ.r.define(),
      Lw = LQ.r.define(),
      qw = LQ.r.define();

    function ow(QQ, FQ) {
      let wQ = QQ.state.facet(qw);
      if (!wQ.length) return wQ;
      let qQ = wQ.map((FQ => FQ instanceof Function ? FQ(QQ) : FQ)),
        oQ = [];
      return LQ.B.spans(qQ, FQ.from, FQ.to, {
        point() {},
        span(QQ, wQ, LQ, qQ) {
          let DQ = QQ - FQ.from,
            kQ = wQ - FQ.from,
            vQ = oQ;
          for (let oQ = LQ.length - 1; oQ >= 0; oQ--, qQ--) {
            let QQ, wQ = LQ[oQ].spec.bidiIsolate;
            if (null == wQ && (wQ = sF(FQ.text, DQ, kQ)), qQ > 0 && vQ.length && (QQ = vQ[vQ.length - 1]).to == DQ && QQ.direction == wQ) QQ.to = kQ, vQ = QQ.inner;
            else {
              let QQ = {
                from: DQ,
                to: kQ,
                direction: wQ,
                inner: []
              };
              vQ.push(QQ), vQ = QQ.inner
            }
          }
        }
      }), oQ
    }
    const Dw = LQ.r.define();

    function kw(QQ) {
      let FQ = 0,
        wQ = 0,
        LQ = 0,
        qQ = 0;
      for (let oQ of QQ.state.facet(Dw)) {
        let DQ = oQ(QQ);
        DQ && (null != DQ.left && (FQ = Math.max(FQ, DQ.left)), null != DQ.right && (wQ = Math.max(wQ, DQ.right)), null != DQ.top && (LQ = Math.max(LQ, DQ.top)), null != DQ.bottom && (qQ = Math.max(qQ, DQ.bottom)))
      }
      return {
        left: FQ,
        right: wQ,
        top: LQ,
        bottom: qQ
      }
    }
    const vw = LQ.r.define();
    class mw {
      constructor(QQ, FQ, wQ, LQ) {
        this.fromA = QQ, this.toA = FQ, this.fromB = wQ, this.toB = LQ
      }
      join(QQ) {
        return new mw(Math.min(this.fromA, QQ.fromA), Math.max(this.toA, QQ.toA), Math.min(this.fromB, QQ.fromB), Math.max(this.toB, QQ.toB))
      }
      addToSet(QQ) {
        let FQ = QQ.length,
          wQ = this;
        for (; FQ > 0; FQ--) {
          let LQ = QQ[FQ - 1];
          if (!(LQ.fromA > wQ.toA)) {
            if (LQ.toA < wQ.fromA) break;
            wQ = wQ.join(LQ), QQ.splice(FQ - 1, 1)
          }
        }
        return QQ.splice(FQ, 0, wQ), QQ
      }
      static extendWithRanges(QQ, FQ) {
        if (0 == FQ.length) return QQ;
        let wQ = [];
        for (let LQ = 0, qQ = 0, oQ = 0;;) {
          let DQ = LQ < QQ.length ? QQ[LQ].fromB : 1e9,
            kQ = qQ < FQ.length ? FQ[qQ] : 1e9,
            vQ = Math.min(DQ, kQ);
          if (1e9 == vQ) break;
          let mQ = vQ + oQ,
            uQ = vQ,
            HQ = mQ;
          for (;;)
            if (qQ < FQ.length && FQ[qQ] <= uQ) {
              let wQ = FQ[qQ + 1];
              qQ += 2, uQ = Math.max(uQ, wQ);
              for (let FQ = LQ; FQ < QQ.length && QQ[FQ].fromB <= uQ; FQ++) oQ = QQ[FQ].toA - QQ[FQ].toB;
              HQ = Math.max(HQ, wQ + oQ)
            } else {
              if (!(LQ < QQ.length && QQ[LQ].fromB <= uQ)) break;
              {
                let FQ = QQ[LQ++];
                uQ = Math.max(uQ, FQ.toB), HQ = Math.max(HQ, FQ.toA), oQ = FQ.toA - FQ.toB
              }
            } wQ.push(new mw(mQ, HQ, vQ, uQ))
        }
        return wQ
      }
    }
    class uw {
      constructor(QQ, FQ, wQ) {
        this.view = QQ, this.state = FQ, this.transactions = wQ, this.flags = 0, this.startState = QQ.state, this.changes = LQ.ChangeSet.empty(this.startState.doc.length);
        for (let LQ of wQ) this.changes = this.changes.compose(LQ.changes);
        let qQ = [];
        this.changes.iterChangedRanges(((QQ, FQ, wQ, LQ) => qQ.push(new mw(QQ, FQ, wQ, LQ)))), this.changedRanges = qQ
      }
      static create(QQ, FQ, wQ) {
        return new uw(QQ, FQ, wQ)
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
    const Hw = [];
    class bw {
      constructor(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.dom = QQ, this.length = FQ, this.flags = wQ, this.parent = null, QQ.cmTile = this
      }
      get breakAfter() {
        return 1 & this.flags
      }
      get children() {
        return Hw
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
          QQ && function(QQ, FQ) {
            for (let wQ = QQ.attributes.length - 1; wQ >= 0; wQ--) {
              let LQ = QQ.attributes[wQ].name;
              null == FQ[LQ] && QQ.removeAttribute(LQ)
            }
            for (let wQ in FQ) {
              let LQ = FQ[wQ];
              "style" == wQ ? QQ.style.cssText = LQ : QQ.getAttribute(wQ) != LQ && QQ.setAttribute(wQ, LQ)
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
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.posAtStart;
        for (let wQ of this.children) {
          if (wQ == QQ) return FQ;
          FQ += wQ.length + wQ.breakAfter
        }
        throw new RangeError("Invalid child in posBefore")
      }
      posAfter(QQ) {
        return this.posBefore(QQ) + QQ.length
      }
      covers(QQ) {
        return !0
      }
      coordsIn(QQ, FQ) {
        return null
      }
      domPosFor(QQ, FQ) {
        let wQ = JQ(this.dom),
          LQ = this.length ? QQ > 0 : FQ > 0;
        return new vF(this.parent.dom, wQ + (LQ ? 1 : 0), 0 == QQ || QQ == this.length)
      }
      markDirty(QQ) {
        this.flags &= -3, QQ && (this.flags |= 4), this.parent && 2 & this.parent.flags && this.parent.markDirty(!1)
      }
      get overrideDOMText() {
        return null
      }
      get root() {
        for (let QQ = this; QQ; QQ = QQ.parent)
          if (QQ instanceof Aw) return QQ;
        return null
      }
      static get(QQ) {
        return QQ.cmTile
      }
    }
    class Yw extends bw {
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
        let FQ, wQ = this.dom,
          LQ = null,
          qQ = (null === QQ || void 0 === QQ ? void 0 : QQ.node) == wQ ? QQ : null,
          oQ = 0;
        for (let DQ of this.children) {
          if (DQ.sync(QQ), oQ += DQ.length + DQ.breakAfter, FQ = LQ ? LQ.nextSibling : wQ.firstChild, qQ && FQ != DQ.dom && (qQ.written = !0), DQ.dom.parentNode == wQ)
            for (; FQ && FQ != DQ.dom;) FQ = xw(FQ);
          else wQ.insertBefore(DQ.dom, FQ);
          LQ = DQ.dom
        }
        for (FQ = LQ ? LQ.nextSibling : wQ.firstChild, qQ && FQ && (qQ.written = !0); FQ;) FQ = xw(FQ);
        this.length = oQ
      }
    }

    function xw(QQ) {
      let FQ = QQ.nextSibling;
      return QQ.parentNode.removeChild(QQ), FQ
    }
    class Aw extends Yw {
      constructor(QQ, FQ) {
        super(FQ), this.view = QQ
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
          let FQ = bw.get(QQ);
          if (FQ && this.owns(FQ)) return FQ;
          QQ = QQ.parentNode
        }
      }
      blockTiles(QQ) {
        for (let FQ = [], wQ = this, LQ = 0, qQ = 0;;)
          if (LQ == wQ.children.length) {
            if (!FQ.length) return;
            wQ = wQ.parent, wQ.breakAfter && qQ++, LQ = FQ.pop()
          } else {
            let oQ = wQ.children[LQ++];
            if (oQ instanceof tw) FQ.push(LQ), wQ = oQ, LQ = 0;
            else {
              let FQ = qQ + oQ.length,
                wQ = QQ(oQ, qQ);
              if (void 0 !== wQ) return wQ;
              qQ = FQ + oQ.breakAfter
            }
          }
      }
      resolveBlock(QQ, FQ) {
        let wQ, LQ, qQ = -1,
          oQ = -1;
        if (this.blockTiles(((DQ, kQ) => {
            let vQ = kQ + DQ.length;
            if (QQ >= kQ && QQ <= vQ) {
              if (DQ.isWidget() && FQ >= -1 && FQ <= 1) {
                if (32 & DQ.flags) return !0;
                16 & DQ.flags && (wQ = void 0)
              }(kQ < QQ || QQ == vQ && (FQ < -1 ? DQ.length : DQ.covers(1))) && (!wQ || !DQ.isWidget() && wQ.isWidget()) && (wQ = DQ, qQ = QQ - kQ), (vQ > QQ || QQ == kQ && (FQ > 1 ? DQ.length : DQ.covers(-1))) && (!LQ || !DQ.isWidget() && LQ.isWidget()) && (LQ = DQ, oQ = QQ - kQ)
            }
          })), !wQ && !LQ) throw new Error("No tile at position " + QQ);
        return wQ && FQ < 0 || !LQ ? {
          tile: wQ,
          offset: qQ
        } : {
          tile: LQ,
          offset: oQ
        }
      }
    }
    class tw extends Yw {
      constructor(QQ, FQ) {
        super(QQ), this.wrapper = FQ
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
      static of (QQ, FQ) {
        let wQ = new tw(FQ || document.createElement(QQ.tagName), QQ);
        return FQ || (wQ.flags |= 4), wQ
      }
    }
    class ew extends Yw {
      constructor(QQ, FQ) {
        super(QQ), this.attrs = FQ
      }
      isLine() {
        return !0
      }
      static start(QQ, FQ, wQ) {
        let LQ = new ew(FQ || document.createElement("div"), QQ);
        return FQ && wQ || (LQ.flags |= 4), LQ
      }
      get domAttrs() {
        return this.attrs
      }
      resolveInline(QQ, FQ, wQ) {
        let LQ = null,
          qQ = -1,
          oQ = null,
          DQ = -1;
        ! function QQ(kQ, vQ) {
          for (let mQ = 0, uQ = 0; mQ < kQ.children.length && uQ <= vQ; mQ++) {
            let HQ = kQ.children[mQ],
              bQ = uQ + HQ.length;
            bQ >= vQ && (HQ.isComposite() ? QQ(HQ, vQ - uQ) : (!oQ || oQ.isHidden && (FQ > 0 || wQ && Mw(oQ, HQ))) && (bQ > vQ || 32 & HQ.flags) ? (oQ = HQ, DQ = vQ - uQ) : (uQ < vQ || 16 & HQ.flags && !HQ.isHidden) && (LQ = HQ, qQ = vQ - uQ)), uQ = bQ
          }
        }(this, QQ);
        let kQ = (FQ < 0 ? LQ : oQ) || LQ || oQ;
        return kQ ? {
          tile: kQ,
          offset: kQ == LQ ? qQ : DQ
        } : null
      }
      coordsIn(QQ, FQ) {
        let wQ = this.resolveInline(QQ, FQ, !0);
        return wQ ? wQ.tile.coordsIn(Math.max(0, wQ.offset), FQ) : function(QQ) {
          let FQ = QQ.dom.lastChild;
          if (!FQ) return QQ.dom.getBoundingClientRect();
          let wQ = VQ(FQ);
          return wQ[wQ.length - 1] || null
        }(this)
      }
      domIn(QQ, FQ) {
        let wQ = this.resolveInline(QQ, FQ);
        if (wQ) {
          let {
            tile: QQ,
            offset: LQ
          } = wQ;
          if (this.dom.contains(QQ.dom)) return QQ.isText() ? new vF(QQ.dom, Math.min(QQ.dom.nodeValue.length, LQ)) : QQ.domPosFor(LQ, 16 & QQ.flags ? 1 : 32 & QQ.flags ? -1 : FQ);
          let qQ = wQ.tile.parent,
            oQ = !1;
          for (let FQ of qQ.children) {
            if (oQ) return new vF(FQ.dom, 0);
            FQ == wQ.tile && (oQ = !0)
          }
        }
        return new vF(this.dom, 0)
      }
    }

    function Mw(QQ, FQ) {
      let wQ = QQ.coordsIn(0, 1),
        LQ = FQ.coordsIn(0, 1);
      return wQ && LQ && LQ.top < wQ.bottom
    }
    class Gw extends Yw {
      constructor(QQ, FQ) {
        super(QQ), this.mark = FQ
      }
      get domAttrs() {
        return this.mark.attrs
      }
      static of (QQ, FQ) {
        let wQ = new Gw(FQ || document.createElement(QQ.tagName), QQ);
        return FQ || (wQ.flags |= 4), wQ
      }
    }
    class pw extends bw {
      constructor(QQ, FQ) {
        super(QQ, FQ.length), this.text = FQ
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
      coordsIn(QQ, FQ) {
        let wQ = this.dom.nodeValue.length;
        QQ > wQ && (QQ = wQ);
        let LQ = QQ,
          qQ = QQ,
          oQ = 0;
        0 == QQ && FQ < 0 || QQ == wQ && FQ >= 0 ? SQ.chrome || SQ.gecko || (QQ ? (LQ--, oQ = 1) : qQ < wQ && (qQ++, oQ = -1)) : FQ < 0 ? LQ-- : qQ < wQ && qQ++;
        let DQ = LF(this.dom, LQ, qQ).getClientRects();
        if (!DQ.length) return null;
        let kQ = DQ[(oQ ? oQ < 0 : FQ >= 0) ? 0 : DQ.length - 1];
        return SQ.safari && !oQ && 0 == kQ.width && (kQ = Array.prototype.find.call(DQ, (QQ => QQ.width)) || kQ), oQ ? PQ(kQ, oQ < 0) : kQ || null
      }
      static of (QQ, FQ) {
        let wQ = new pw(FQ || document.createTextNode(QQ), QQ);
        return FQ || (wQ.flags |= 2), wQ
      }
    }
    class Cw extends bw {
      constructor(QQ, FQ, wQ, LQ) {
        super(QQ, FQ, LQ), this.widget = wQ
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
      coordsIn(QQ, FQ) {
        return this.coordsInWidget(QQ, FQ, !1)
      }
      coordsInWidget(QQ, FQ, wQ) {
        let LQ = this.widget.coordsAt(this.dom, QQ, FQ);
        if (LQ) return LQ;
        if (wQ) return PQ(this.dom.getBoundingClientRect(), this.length ? 0 == QQ : FQ <= 0);
        {
          let FQ = this.dom.getClientRects(),
            wQ = null;
          if (!FQ.length) return null;
          let LQ = !!(16 & this.flags) || !(32 & this.flags) && QQ > 0;
          for (let qQ = LQ ? FQ.length - 1 : 0; wQ = FQ[qQ], !(QQ > 0 ? 0 == qQ : qQ == FQ.length - 1 || wQ.top < wQ.bottom); qQ += LQ ? -1 : 1);
          return PQ(wQ, !LQ)
        }
      }
      get overrideDOMText() {
        if (!this.length) return LQ.P.empty;
        let {
          root: QQ
        } = this;
        if (!QQ) return LQ.P.empty;
        let FQ = this.posAtStart;
        return QQ.view.state.doc.slice(FQ, FQ + this.length)
      }
      destroy() {
        super.destroy(), this.widget.destroy(this.dom)
      }
      static of (QQ, FQ, wQ, LQ, qQ) {
        return qQ || (qQ = QQ.toDOM(FQ), QQ.editable || (qQ.contentEditable = "false")), new Cw(qQ, wQ, QQ, LQ)
      }
    }
    class Sw extends bw {
      constructor(QQ) {
        let FQ = document.createElement("img");
        FQ.className = "cm-widgetBuffer", FQ.setAttribute("aria-hidden", "true"), super(FQ, 0, QQ)
      }
      get isHidden() {
        return !0
      }
      get overrideDOMText() {
        return LQ.P.empty
      }
      coordsIn(QQ) {
        return this.dom.getBoundingClientRect()
      }
    }
    class iw {
      constructor(QQ) {
        this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = QQ
      }
      advance(QQ, FQ, wQ) {
        let {
          tile: LQ,
          index: qQ,
          beforeBreak: oQ,
          parents: DQ
        } = this;
        for (; QQ || FQ > 0;)
          if (LQ.isComposite())
            if (oQ) {
              if (!QQ) break;
              wQ && wQ.break(), QQ--, oQ = !1
            } else if (qQ == LQ.children.length) {
          if (!QQ && !DQ.length) break;
          wQ && wQ.leave(LQ), oQ = !!LQ.breakAfter, ({
            tile: LQ,
            index: qQ
          } = DQ.pop()), qQ++
        } else {
          let kQ = LQ.children[qQ],
            vQ = kQ.breakAfter;
          !(FQ > 0 ? kQ.length <= QQ : kQ.length < QQ) || wQ && !1 === wQ.skip(kQ, 0, kQ.length) && kQ.isComposite ? (DQ.push({
            tile: LQ,
            index: qQ
          }), LQ = kQ, qQ = 0, wQ && kQ.isComposite() && wQ.enter(kQ)) : (oQ = !!vQ, qQ++, QQ -= kQ.length)
        } else if (qQ == LQ.length) oQ = !!LQ.breakAfter, ({
          tile: LQ,
          index: qQ
        } = DQ.pop()), qQ++;
        else {
          if (!QQ) break;
          {
            let FQ = Math.min(QQ, LQ.length - qQ);
            wQ && wQ.skip(LQ, qQ, qQ + FQ), QQ -= FQ, qQ += FQ
          }
        }
        return this.tile = LQ, this.index = qQ, this.beforeBreak = oQ, this
      }
      get root() {
        return this.parents.length ? this.parents[0].tile : this.tile
      }
    }
    class Ww {
      constructor(QQ, FQ, wQ, LQ) {
        this.from = QQ, this.to = FQ, this.wrapper = wQ, this.rank = LQ
      }
    }
    class Rw {
      constructor(QQ, FQ, wQ) {
        this.cache = QQ, this.root = FQ, this.blockWrappers = wQ, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0
      }
      addText(QQ, FQ, wQ, LQ) {
        var qQ;
        this.flushBuffer();
        let oQ = this.ensureMarks(FQ, wQ),
          DQ = oQ.lastChild;
        if (DQ && DQ.isText() && !(8 & DQ.flags) && DQ.length + QQ.length < 512) {
          this.cache.reused.set(DQ, 2), (oQ.children[oQ.children.length - 1] = new pw(DQ.dom, DQ.text + QQ)).parent = oQ
        } else oQ.append(LQ || pw.of(QQ, null === (qQ = this.cache.find(pw)) || void 0 === qQ ? void 0 : qQ.dom));
        this.pos += QQ.length, this.afterWidget = null
      }
      addComposition(QQ, FQ) {
        let wQ = this.curLine;
        wQ.dom != FQ.line.dom && (wQ.setDOM(this.cache.reused.has(FQ.line) ? Tw(FQ.line.dom) : FQ.line.dom), this.cache.reused.set(FQ.line, 2));
        let LQ = wQ;
        for (let DQ = FQ.marks.length - 1; DQ >= 0; DQ--) {
          let QQ = FQ.marks[DQ],
            wQ = LQ.lastChild;
          if (wQ instanceof Gw && wQ.mark.eq(QQ.mark)) wQ.dom != QQ.dom && wQ.setDOM(Tw(QQ.dom)), LQ = wQ;
          else {
            if (this.cache.reused.get(QQ)) {
              let FQ = bw.get(QQ.dom);
              FQ && FQ.setDOM(Tw(QQ.dom))
            }
            let FQ = Gw.of(QQ.mark, QQ.dom);
            LQ.append(FQ), LQ = FQ
          }
          this.cache.reused.set(QQ, 2)
        }
        let qQ = bw.get(QQ.text);
        qQ && this.cache.reused.set(qQ, 2);
        let oQ = new pw(QQ.text, QQ.text.nodeValue);
        oQ.flags |= 8, LQ.append(oQ)
      }
      addInlineWidget(QQ, FQ, wQ) {
        let LQ = this.afterWidget && 48 & QQ.flags && (48 & this.afterWidget.flags) == (48 & QQ.flags);
        LQ || this.flushBuffer();
        let qQ = this.ensureMarks(FQ, wQ);
        LQ || 16 & QQ.flags || qQ.append(this.getBuffer(1)), qQ.append(QQ), this.pos += QQ.length, this.afterWidget = QQ
      }
      addMark(QQ, FQ, wQ) {
        this.flushBuffer(), this.ensureMarks(FQ, wQ).append(QQ), this.pos += QQ.length, this.afterWidget = null
      }
      addBlockWidget(QQ) {
        this.getBlockPos().append(QQ), this.pos += QQ.length, this.lastBlock = QQ, this.endLine()
      }
      continueWidget(QQ) {
        (this.afterWidget || this.lastBlock).length += QQ, this.pos += QQ
      }
      addLineStart(QQ, FQ) {
        var wQ;
        QQ || (QQ = Nw);
        let LQ = ew.start(QQ, FQ || (null === (wQ = this.cache.find(ew)) || void 0 === wQ ? void 0 : wQ.dom), !!FQ);
        this.getBlockPos().append(this.lastBlock = this.curLine = LQ)
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
      ensureMarks(QQ, FQ) {
        var wQ;
        let LQ = this.curLine;
        for (let qQ = QQ.length - 1; qQ >= 0; qQ--) {
          let oQ, DQ = QQ[qQ];
          if (FQ > 0 && (oQ = LQ.lastChild) && oQ instanceof Gw && oQ.mark.eq(DQ)) LQ = oQ, FQ--;
          else {
            let QQ = Gw.of(DQ, null === (wQ = this.cache.find(Gw, (QQ => QQ.mark.eq(DQ)))) || void 0 === wQ ? void 0 : wQ.dom);
            LQ.append(QQ), LQ = QQ, FQ = 0
          }
        }
        return LQ
      }
      endLine() {
        if (this.curLine) {
          this.flushBuffer();
          let QQ = this.curLine.lastChild;
          QQ && Uw(this.curLine, !1) && ("BR" == QQ.dom.nodeName || !QQ.isWidget() || SQ.ios && Uw(this.curLine, !0)) || this.curLine.append(this.cache.findWidget(zw, 0, 32) || new Cw(zw.toDOM(), 0, zw, 32)), this.curLine = this.afterWidget = null
        }
      }
      updateBlockWrappers() {
        this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
        for (let QQ = this.wrappers.length - 1; QQ >= 0; QQ--) this.wrappers[QQ].to < this.pos && this.wrappers.splice(QQ, 1);
        for (let QQ = this.blockWrappers; QQ.value && QQ.from <= this.pos; QQ.next())
          if (QQ.to >= this.pos) {
            let FQ = new Ww(QQ.from, QQ.to, QQ.value, QQ.rank),
              wQ = this.wrappers.length;
            for (; wQ > 0 && (this.wrappers[wQ - 1].rank - FQ.rank || this.wrappers[wQ - 1].to - FQ.to) < 0;) wQ--;
            this.wrappers.splice(wQ, 0, FQ)
          } this.wrapperPos = this.pos
      }
      getBlockPos() {
        var QQ;
        this.updateBlockWrappers();
        let FQ = this.root;
        for (let wQ of this.wrappers) {
          let LQ = FQ.lastChild;
          if (wQ.from < this.pos && LQ instanceof tw && LQ.wrapper.eq(wQ.wrapper)) FQ = LQ;
          else {
            let LQ = tw.of(wQ.wrapper, null === (QQ = this.cache.find(tw, (QQ => QQ.wrapper.eq(wQ.wrapper)))) || void 0 === QQ ? void 0 : QQ.dom);
            FQ.append(LQ), FQ = LQ
          }
        }
        return FQ
      }
      blockPosCovered() {
        let QQ = this.lastBlock;
        return null != QQ && !QQ.breakAfter && (!QQ.isWidget() || (160 & QQ.flags) > 0)
      }
      getBuffer(QQ) {
        let FQ = 2 | (QQ < 0 ? 16 : 32),
          wQ = this.cache.find(Sw, void 0, 1);
        return wQ && (wQ.flags = FQ), wQ || new Sw(FQ)
      }
      flushBuffer() {
        !this.afterWidget || 32 & this.afterWidget.flags || (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null)
      }
    }
    class Ow {
      constructor(QQ) {
        this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = QQ.iter()
      }
      skip(QQ) {
        this.textOff + QQ <= this.text.length ? this.textOff += QQ : (this.skipCount += QQ - (this.text.length - this.textOff), this.text = "", this.textOff = 0)
      }
      next(QQ) {
        if (this.textOff == this.text.length) {
          let {
            value: FQ,
            lineBreak: wQ,
            done: LQ
          } = this.cursor.next(this.skipCount);
          if (this.skipCount = 0, LQ) throw new Error("Ran out of text content when drawing inline views");
          this.text = FQ;
          let qQ = this.textOff = Math.min(QQ, FQ.length);
          return wQ ? null : FQ.slice(0, qQ)
        }
        let FQ = Math.min(this.text.length, this.textOff + QQ),
          wQ = this.text.slice(this.textOff, FQ);
        return this.textOff = FQ, wQ
      }
    }
    const sw = [Cw, ew, pw, Gw, Sw, tw, Aw];
    for (let TD = 0; TD < sw.length; TD++) sw[TD].bucket = TD;
    class rw {
      constructor(QQ) {
        this.view = QQ, this.buckets = sw.map((() => [])), this.index = sw.map((() => 0)), this.reused = new Map
      }
      add(QQ) {
        let FQ = QQ.constructor.bucket,
          wQ = this.buckets[FQ];
        wQ.length < 6 ? wQ.push(QQ) : wQ[this.index[FQ] = (this.index[FQ] + 1) % 6] = QQ
      }
      find(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          LQ = QQ.bucket,
          qQ = this.buckets[LQ],
          oQ = this.index[LQ];
        for (let DQ = qQ.length - 1; DQ >= 0; DQ--) {
          let QQ = (DQ + oQ) % qQ.length,
            kQ = qQ[QQ];
          if ((!FQ || FQ(kQ)) && !this.reused.has(kQ)) return qQ.splice(QQ, 1), QQ < oQ && this.index[LQ]--, this.reused.set(kQ, wQ), kQ
        }
        return null
      }
      findWidget(QQ, FQ, wQ) {
        let LQ = this.buckets[0];
        if (LQ.length)
          for (let qQ = 0, oQ = 0;; qQ++) {
            if (qQ == LQ.length) {
              if (oQ) return null;
              oQ = 1, qQ = 0
            }
            let DQ = LQ[qQ];
            if (!this.reused.has(DQ) && (0 == oQ ? DQ.widget.compare(QQ) : DQ.widget.constructor == QQ.constructor && QQ.updateDOM(DQ.dom, this.view, DQ.widget))) return LQ.splice(qQ, 1), qQ < this.index[0] && this.index[0]--, DQ.widget == QQ && DQ.length == FQ && (497 & DQ.flags) == wQ ? (this.reused.set(DQ, 1), DQ) : (this.reused.set(DQ, 2), new Cw(DQ.dom, FQ, QQ, -498 & DQ.flags | wQ))
          }
      }
      reuse(QQ) {
        return this.reused.set(QQ, 1), QQ
      }
      maybeReuse(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        if (!this.reused.has(QQ)) return this.reused.set(QQ, FQ), QQ.dom
      }
      clear() {
        for (let QQ = 0; QQ < this.buckets.length; QQ++) this.buckets[QQ].length = this.index[QQ] = 0
      }
    }
    class Iw {
      constructor(QQ, FQ, wQ, qQ, oQ) {
        this.view = QQ, this.qo = qQ, this.disallowBlockEffectsFor = oQ, this.openWidget = !1, this.openMarks = 0, this.cache = new rw(QQ), this.text = new Ow(QQ.state.doc), this.builder = new Rw(this.cache, new Aw(QQ, QQ.contentDOM), LQ.B.iter(wQ)), this.cache.reused.set(FQ, 2), this.old = new iw(FQ), this.reuseWalker = {
          skip: (QQ, FQ, wQ) => {
            if (this.cache.add(QQ), QQ.isComposite()) return !1
          },
          enter: QQ => this.cache.add(QQ),
          leave: () => {},
          break: () => {}
        }
      }
      run(QQ, FQ) {
        let wQ = FQ && this.getCompositionContext(FQ.text);
        for (let LQ = 0, qQ = 0, oQ = 0;;) {
          let DQ = oQ < QQ.length ? QQ[oQ++] : null,
            kQ = DQ ? DQ.fromA : this.old.root.length;
          if (kQ > LQ) {
            let QQ = kQ - LQ;
            this.preserve(QQ, !oQ, !DQ), LQ = kQ, qQ += QQ
          }
          if (!DQ) break;
          FQ && DQ.fromA <= FQ.range.fromA && DQ.toA >= FQ.range.toA ? (this.forward(DQ.fromA, FQ.range.fromA, FQ.range.fromA < FQ.range.toA ? 1 : -1), this.emit(qQ, FQ.range.fromB), this.cache.clear(), this.builder.addComposition(FQ, wQ), this.text.skip(FQ.range.toB - FQ.range.fromB), this.forward(FQ.range.fromA, DQ.toA), this.emit(FQ.range.toB, DQ.toB)) : (this.forward(DQ.fromA, DQ.toA), this.emit(qQ, DQ.toB)), qQ = DQ.toB, LQ = DQ.toA
        }
        return this.builder.curLine && this.builder.endLine(), this.builder.root
      }
      preserve(QQ, FQ, wQ) {
        let LQ = function(QQ) {
            let FQ = [];
            for (let wQ = QQ.parents.length; wQ > 1; wQ--) {
              let LQ = wQ == QQ.parents.length ? QQ.tile : QQ.parents[wQ].tile;
              LQ instanceof Gw && FQ.push(LQ.mark)
            }
            return FQ
          }(this.old),
          qQ = this.openMarks;
        this.old.advance(QQ, wQ ? 1 : -1, {
          skip: (QQ, FQ, wQ) => {
            if (QQ.isWidget())
              if (this.openWidget) this.builder.continueWidget(wQ - FQ);
              else {
                let oQ = wQ > 0 || FQ < QQ.length ? Cw.of(QQ.widget, this.view, wQ - FQ, 496 & QQ.flags, this.cache.maybeReuse(QQ)) : this.cache.reuse(QQ);
                256 & oQ.flags ? (oQ.flags &= -2, this.builder.addBlockWidget(oQ)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(oQ, LQ, qQ), qQ = LQ.length)
              }
            else if (QQ.isText()) this.builder.ensureLine(null), FQ || wQ != QQ.length || this.cache.reused.has(QQ) ? (this.cache.add(QQ), this.builder.addText(QQ.text.slice(FQ, wQ), LQ, qQ)) : this.builder.addText(QQ.text, LQ, qQ, this.cache.reuse(QQ)), qQ = LQ.length;
            else if (QQ.isLine()) QQ.flags &= -2, this.cache.reused.set(QQ, 1), this.builder.addLine(QQ);
            else if (QQ instanceof Sw) this.cache.add(QQ);
            else {
              if (!(QQ instanceof Gw)) return !1;
              this.builder.ensureLine(null), this.builder.addMark(QQ, LQ, qQ), this.cache.reused.set(QQ, 1), qQ = LQ.length
            }
            this.openWidget = !1
          },
          enter: QQ => {
            QQ.isLine() ? this.builder.addLineStart(QQ.attrs, this.cache.maybeReuse(QQ)) : (this.cache.add(QQ), QQ instanceof Gw && LQ.unshift(QQ.mark)), this.openWidget = !1
          },
          leave: QQ => {
            QQ.isLine() ? LQ.length && (LQ.length = qQ = 0) : QQ instanceof Gw && (LQ.shift(), qQ = Math.min(qQ, LQ.length))
          },
          break: () => {
            this.builder.addBreak(), this.openWidget = !1
          }
        }), this.text.skip(QQ)
      }
      emit(QQ, FQ) {
        let wQ = null,
          qQ = this.builder,
          oQ = 0,
          DQ = LQ.B.spans(this.qo, QQ, FQ, {
            point: (QQ, FQ, LQ, DQ, kQ, vQ) => {
              if (LQ instanceof KQ) {
                if (this.disallowBlockEffectsFor[vQ]) {
                  if (LQ.block) throw new RangeError("Block decorations may not be specified via plugins");
                  if (FQ > this.view.state.doc.lineAt(QQ).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins")
                }
                if (oQ = DQ.length, kQ > DQ.length) qQ.continueWidget(FQ - QQ);
                else {
                  let oQ = LQ.widget || (LQ.block ? Kw.block : Kw.inline),
                    vQ = function(QQ) {
                      let FQ = QQ.isReplace ? (QQ.startSide < 0 ? 64 : 0) | (QQ.endSide > 0 ? 128 : 0) : QQ.startSide > 0 ? 32 : 16;
                      QQ.block && (FQ |= 256);
                      return FQ
                    }(LQ),
                    mQ = this.cache.findWidget(oQ, FQ - QQ, vQ) || Cw.of(oQ, this.view, FQ - QQ, vQ);
                  LQ.block ? (LQ.startSide > 0 && qQ.addLineStartIfNotCovered(wQ), qQ.addBlockWidget(mQ)) : (qQ.ensureLine(wQ), qQ.addInlineWidget(mQ, DQ, kQ))
                }
                wQ = null
              } else wQ = function(QQ, FQ) {
                let wQ = FQ.spec.attributes,
                  LQ = FQ.spec.class;
                if (!wQ && !LQ) return QQ;
                QQ || (QQ = {
                  class: "cm-line"
                });
                wQ && iQ(wQ, QQ);
                LQ && (QQ.class += " " + LQ);
                return QQ
              }(wQ, LQ);
              FQ > QQ && this.text.skip(FQ - QQ)
            },
            span: (QQ, FQ, LQ, oQ) => {
              for (let DQ = QQ; DQ < FQ;) {
                let kQ = this.text.next(Math.min(512, FQ - DQ));
                null == kQ ? (qQ.addLineStartIfNotCovered(wQ), qQ.addBreak(), DQ++) : (qQ.ensureLine(wQ), qQ.addText(kQ, LQ, DQ == QQ ? oQ : LQ.length), DQ += kQ.length), wQ = null
              }
            }
          });
        qQ.addLineStartIfNotCovered(wQ), this.openWidget = DQ > oQ, this.openMarks = DQ
      }
      forward(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        FQ - QQ <= 10 ? this.old.advance(FQ - QQ, wQ, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(FQ - QQ - 10, -1), this.old.advance(5, wQ, this.reuseWalker))
      }
      getCompositionContext(QQ) {
        let FQ = [],
          wQ = null;
        for (let LQ = QQ.parentNode;; LQ = LQ.parentNode) {
          let QQ = bw.get(LQ);
          if (LQ == this.view.contentDOM) break;
          QQ instanceof Gw ? FQ.push(QQ) : (null === QQ || void 0 === QQ ? void 0 : QQ.isLine()) ? wQ = QQ : QQ instanceof tw || ("DIV" != LQ.nodeName || wQ || LQ == this.view.contentDOM ? wQ || FQ.push(Gw.of(new NQ({
            tagName: LQ.nodeName.toLowerCase(),
            attributes: sQ(LQ)
          }), LQ)) : wQ = new ew(LQ, Nw))
        }
        return {
          line: wQ,
          marks: FQ
        }
      }
    }

    function Uw(QQ, FQ) {
      let wQ = QQ => {
        for (let LQ of QQ.children)
          if ((FQ ? LQ.isText() : LQ.length) || wQ(LQ)) return !0;
        return !1
      };
      return wQ(QQ)
    }
    const Nw = {
      class: "cm-line"
    };

    function Tw(QQ) {
      let FQ = bw.get(QQ);
      return FQ && FQ.setDOM(QQ.cloneNode()), QQ
    }
    class Kw extends rQ {
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
    Kw.inline = new Kw("span"), Kw.block = new Kw("div");
    const zw = new class extends rQ {
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
    class lw {
      constructor(QQ) {
        this.view = QQ, this.qo = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = UQ.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new Aw(QQ, QQ.contentDOM), this.updateInner([new mw(0, 0, 0, QQ.state.doc.length)], null)
      }
      update(QQ) {
        var FQ;
        let wQ = QQ.changedRanges;
        this.minWidth > 0 && wQ.length && (wQ.every((QQ => {
          let {
            fromA: FQ,
            toA: wQ
          } = QQ;
          return wQ < this.minWidthFrom || FQ > this.minWidthTo
        })) ? (this.minWidthFrom = QQ.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = QQ.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(QQ);
        let qQ = -1;
        this.view.inputState.composing >= 0 && !this.view.observer.editContext && ((null === (FQ = this.domChanged) || void 0 === FQ ? void 0 : FQ.newSel) ? qQ = this.domChanged.newSel.head : function(QQ, FQ) {
          let wQ = !1;
          FQ && QQ.iterChangedRanges(((QQ, LQ) => {
            QQ < FQ.to && LQ > FQ.from && (wQ = !0)
          }));
          return wQ
        }(QQ.changes, this.hasComposition) || QQ.selectionSet || (qQ = QQ.state.selection.main.head));
        let oQ = qQ > -1 ? function(QQ, FQ, wQ) {
          let LQ = aw(QQ, wQ);
          if (!LQ) return null;
          let {
            node: qQ,
            from: oQ,
            to: DQ
          } = LQ, kQ = qQ.nodeValue;
          if (/[\n\r]/.test(kQ)) return null;
          if (QQ.state.doc.sliceString(LQ.from, LQ.to) != kQ) return null;
          let vQ = FQ.invertedDesc;
          return {
            range: new mw(vQ.mapPos(oQ), vQ.mapPos(DQ), oQ, DQ),
            text: qQ
          }
        }(this.view, QQ.changes, qQ) : null;
        if (this.domChanged = null, this.hasComposition) {
          let {
            from: FQ,
            to: LQ
          } = this.hasComposition;
          wQ = new mw(FQ, LQ, QQ.changes.mapPos(FQ, -1), QQ.changes.mapPos(LQ, 1)).addToSet(wQ.slice())
        }
        this.hasComposition = oQ ? {
          from: oQ.range.fromB,
          to: oQ.range.toB
        } : null, (SQ.ie || SQ.chrome) && !oQ && QQ && QQ.state.doc.lines != QQ.startState.doc.lines && (this.forceSelection = !0);
        let DQ = this.qo,
          kQ = this.blockWrappers;
        this.updateDeco();
        let vQ = function(QQ, FQ, wQ) {
          let qQ = new Xw;
          return LQ.B.compare(QQ, FQ, wQ, qQ), qQ.changes
        }(DQ, this.qo, QQ.changes);
        vQ.length && (wQ = mw.extendWithRanges(wQ, vQ));
        let mQ = function(QQ, FQ, wQ) {
          let qQ = new fw;
          return LQ.B.compare(QQ, FQ, wQ, qQ), qQ.changes
        }(kQ, this.blockWrappers, QQ.changes);
        return mQ.length && (wQ = mw.extendWithRanges(wQ, mQ)), oQ && !wQ.some((QQ => QQ.fromA <= oQ.range.fromA && QQ.toA >= oQ.range.toA)) && (wQ = oQ.range.addToSet(wQ.slice())), !(2 & this.tile.flags && 0 == wQ.length) && (this.updateInner(wQ, oQ), QQ.transactions.length && (this.lastUpdate = Date.now()), !0)
      }
      updateInner(QQ, FQ) {
        this.view.viewState.mustMeasureContent = !0;
        let {
          observer: wQ
        } = this.view;
        wQ.ignore((() => {
          if (FQ || QQ.length) {
            let wQ = this.tile,
              LQ = new Iw(this.view, wQ, this.blockWrappers, this.qo, this.dynamicDecorationMap);
            FQ && bw.get(FQ.text) && LQ.cache.reused.set(bw.get(FQ.text), 2), this.tile = LQ.run(QQ, FQ), jw(wQ, LQ.cache.reused)
          }
          this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
          let LQ = SQ.chrome || SQ.ios ? {
            node: wQ.selectionRange.focusNode,
            written: !1
          } : void 0;
          this.tile.sync(LQ), !LQ || !LQ.written && wQ.selectionRange.focusNode == LQ.node && this.tile.dom.contains(LQ.node) || (this.forceSelection = !0), this.tile.dom.style.height = ""
        }));
        let LQ = [];
        if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
          for (let qQ of this.tile.children) qQ.isWidget() && qQ.widget instanceof Vw && LQ.push(qQ.dom);
        wQ.updateGaps(LQ)
      }
      updateEditContextFormatting(QQ) {
        this.editContextFormatting = this.editContextFormatting.map(QQ.changes);
        for (let FQ of QQ.transactions)
          for (let QQ of FQ.effects) QQ.is(JF) && (this.editContextFormatting = QQ.value)
      }
      updateSelection() {
        let QQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this.view.observer.selectionRange.focusNode || this.view.observer.readSelectionRange();
        let {
          dom: FQ
        } = this.tile, wQ = this.view.root.activeElement, LQ = wQ == FQ, qQ = !LQ && !(this.view.state.facet(nF) || FQ.tabIndex > -1) && fQ(FQ, this.view.observer.selectionRange) && !(wQ && FQ.contains(wQ));
        if (!(LQ || QQ || qQ)) return;
        let oQ = this.forceSelection;
        this.forceSelection = !1;
        let DQ, kQ, vQ = this.view.state.selection.main;
        if (vQ.empty ? kQ = DQ = this.inlineDOMNearPos(vQ.anchor, vQ.assoc || 1) : (kQ = this.inlineDOMNearPos(vQ.head, vQ.head == vQ.from ? 1 : -1), DQ = this.inlineDOMNearPos(vQ.anchor, vQ.anchor == vQ.from ? 1 : -1)), SQ.gecko && vQ.empty && !this.hasComposition && (1 == (mQ = DQ).node.nodeType && mQ.node.firstChild && (0 == mQ.offset || "false" == mQ.node.childNodes[mQ.offset - 1].contentEditable) && (mQ.offset == mQ.node.childNodes.length || "false" == mQ.node.childNodes[mQ.offset].contentEditable))) {
          let QQ = document.createTextNode("");
          this.view.observer.ignore((() => DQ.node.insertBefore(QQ, DQ.node.childNodes[DQ.offset] || null))), DQ = kQ = new vF(QQ, 0), oQ = !0
        }
        var mQ;
        let uQ = this.view.observer.selectionRange;
        !oQ && uQ.focusNode && (hQ(DQ.node, DQ.offset, uQ.anchorNode, uQ.anchorOffset) && hQ(kQ.node, kQ.offset, uQ.focusNode, uQ.focusOffset) || this.suppressWidgetCursorChange(uQ, vQ)) || (this.view.observer.ignore((() => {
          SQ.android && SQ.chrome && FQ.contains(uQ.focusNode) && function(QQ, FQ) {
            for (let wQ = QQ; wQ && wQ != FQ; wQ = wQ.assignedSlot || wQ.parentNode)
              if (1 == wQ.nodeType && "false" == wQ.contentEditable) return !0;
            return !1
          }(uQ.focusNode, FQ) && (FQ.blur(), FQ.focus({
            preventScroll: !0
          }));
          let QQ = aQ(this.view.root);
          if (QQ)
            if (vQ.empty) {
              if (SQ.gecko) {
                let QQ = (LQ = DQ.node, oQ = DQ.offset, 1 != LQ.nodeType ? 0 : (oQ && "false" == LQ.childNodes[oQ - 1].contentEditable ? 1 : 0) | (oQ < LQ.childNodes.length && "false" == LQ.childNodes[oQ].contentEditable ? 2 : 0));
                if (QQ && 3 != QQ) {
                  let FQ = (1 == QQ ? DF : kF)(DQ.node, DQ.offset);
                  FQ && (DQ = new vF(FQ.node, FQ.offset))
                }
              }
              QQ.collapse(DQ.node, DQ.offset), null != vQ.bidiLevel && void 0 !== QQ.caretBidiLevel && (QQ.caretBidiLevel = vQ.bidiLevel)
            } else if (QQ.extend) {
            QQ.collapse(DQ.node, DQ.offset);
            try {
              QQ.extend(kQ.node, kQ.offset)
            } catch (mQ) {}
          } else {
            let FQ = document.createRange();
            vQ.anchor > vQ.head && ([DQ, kQ] = [kQ, DQ]), FQ.setEnd(kQ.node, kQ.offset), FQ.setStart(DQ.node, DQ.offset), QQ.removeAllRanges(), QQ.addRange(FQ)
          } else;
          var LQ, oQ;
          qQ && this.view.root.activeElement == FQ && (FQ.blur(), wQ && wQ.focus())
        })), this.view.observer.setSelectionRange(DQ, kQ)), this.impreciseAnchor = DQ.precise ? null : new vF(uQ.anchorNode, uQ.anchorOffset), this.impreciseHead = kQ.precise ? null : new vF(uQ.focusNode, uQ.focusOffset)
      }
      suppressWidgetCursorChange(QQ, FQ) {
        return this.hasComposition && FQ.empty && hQ(QQ.focusNode, QQ.focusOffset, QQ.anchorNode, QQ.anchorOffset) && this.posFromDOM(QQ.focusNode, QQ.focusOffset) == FQ.head
      }
      enforceCursorAssoc() {
        if (this.hasComposition) return;
        let {
          view: QQ
        } = this, FQ = QQ.state.selection.main, wQ = aQ(QQ.root), {
          anchorNode: LQ,
          anchorOffset: qQ
        } = QQ.observer.selectionRange;
        if (!wQ || !FQ.empty || !FQ.assoc || !wQ.modify) return;
        let oQ = this.lineAt(FQ.head, FQ.assoc);
        if (!oQ) return;
        let DQ = oQ.posAtStart;
        if (FQ.head == DQ || FQ.head == DQ + oQ.length) return;
        let kQ = this.coordsAt(FQ.head, -1),
          vQ = this.coordsAt(FQ.head, 1);
        if (!kQ || !vQ || kQ.bottom > vQ.top) return;
        let mQ = this.domAtPos(FQ.head + FQ.assoc, FQ.assoc);
        wQ.collapse(mQ.node, mQ.offset), wQ.modify("move", FQ.assoc < 0 ? "forward" : "backward", "lineboundary"), QQ.observer.readSelectionRange();
        let uQ = QQ.observer.selectionRange;
        QQ.docView.posFromDOM(uQ.anchorNode, uQ.anchorOffset) != FQ.from && wQ.collapse(LQ, qQ)
      }
      posFromDOM(QQ, FQ) {
        let wQ = this.tile.nearest(QQ);
        if (!wQ) return 2 & this.tile.dom.compareDocumentPosition(QQ) ? 0 : this.view.state.doc.length;
        let LQ = wQ.posAtStart;
        if (!wQ.isComposite()) return wQ.isText() ? QQ == wQ.dom ? LQ + FQ : LQ + (FQ ? wQ.length : 0) : LQ;
        {
          let qQ;
          if (QQ == wQ.dom) qQ = wQ.dom.childNodes[FQ];
          else {
            let LQ = 0 == gQ(QQ) ? 0 : 0 == FQ ? -1 : 1;
            for (;;) {
              let FQ = QQ.parentNode;
              if (FQ == wQ.dom) break;
              0 == LQ && FQ.firstChild != FQ.lastChild && (LQ = QQ == FQ.firstChild ? -1 : 1), QQ = FQ
            }
            qQ = LQ < 0 ? QQ : QQ.nextSibling
          }
          if (qQ == wQ.dom.firstChild) return LQ;
          for (; qQ && !bw.get(qQ);) qQ = qQ.nextSibling;
          if (!qQ) return LQ + wQ.length;
          for (let QQ = 0, FQ = LQ;; QQ++) {
            let LQ = wQ.children[QQ];
            if (LQ.dom == qQ) return FQ;
            FQ += LQ.length + LQ.breakAfter
          }
        }
      }
      domAtPos(QQ, FQ) {
        let {
          tile: wQ,
          offset: LQ
        } = this.tile.resolveBlock(QQ, FQ);
        return wQ.isWidget() ? wQ.domPosFor(QQ, FQ) : wQ.domIn(LQ, FQ)
      }
      inlineDOMNearPos(QQ, FQ) {
        let wQ, LQ, qQ = -1,
          oQ = !1,
          DQ = -1,
          kQ = !1;
        return this.tile.blockTiles(((FQ, vQ) => {
          if (FQ.isWidget()) {
            if (32 & FQ.flags && vQ >= QQ) return !0;
            16 & FQ.flags && (oQ = !0)
          } else {
            let mQ = vQ + FQ.length;
            if (vQ <= QQ && (wQ = FQ, qQ = QQ - vQ, oQ = mQ < QQ), mQ >= QQ && !LQ && (LQ = FQ, DQ = QQ - vQ, kQ = vQ > QQ), vQ > QQ && LQ) return !0
          }
        })), wQ || LQ ? (oQ && LQ ? wQ = null : kQ && wQ && (LQ = null), wQ && FQ < 0 || !LQ ? wQ.domIn(qQ, FQ) : LQ.domIn(DQ, FQ)) : this.domAtPos(QQ, FQ)
      }
      coordsAt(QQ, FQ) {
        let {
          tile: wQ,
          offset: LQ
        } = this.tile.resolveBlock(QQ, FQ);
        return wQ.isWidget() ? wQ.widget instanceof Vw ? null : wQ.coordsInWidget(LQ, FQ, !0) : wQ.coordsIn(LQ, FQ)
      }
      lineAt(QQ, FQ) {
        let {
          tile: wQ
        } = this.tile.resolveBlock(QQ, FQ);
        return wQ.isLine() ? wQ : null
      }
      coordsForChar(QQ) {
        let {
          tile: FQ,
          offset: wQ
        } = this.tile.resolveBlock(QQ, 1);
        if (!FQ.isLine()) return null;
        return function QQ(FQ, wQ) {
          if (FQ.isComposite())
            for (let LQ of FQ.children) {
              if (LQ.length >= wQ) {
                let FQ = QQ(LQ, wQ);
                if (FQ) return FQ
              }
              if ((wQ -= LQ.length) < 0) break
            } else if (FQ.isText() && wQ < FQ.length) {
              let QQ = (0, LQ.$)(FQ.text, wQ);
              if (QQ == wQ) return null;
              let qQ = LF(FQ.dom, wQ, QQ).getClientRects();
              for (let FQ = 0; FQ < qQ.length; FQ++) {
                let QQ = qQ[FQ];
                if (FQ == qQ.length - 1 || QQ.top < QQ.bottom && QQ.left < QQ.right) return QQ
              }
            } return null
        }(FQ, wQ)
      }
      measureVisibleLineHeights(QQ) {
        let FQ = [],
          {
            from: wQ,
            to: LQ
          } = QQ,
          qQ = this.view.contentDOM.clientWidth,
          oQ = qQ > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
          DQ = -1,
          kQ = this.view.textDirection == mF.LTR,
          vQ = 0,
          mQ = (QQ, uQ, HQ) => {
            for (let bQ = 0; bQ < QQ.children.length && !(uQ > LQ); bQ++) {
              let LQ = QQ.children[bQ],
                YQ = uQ + LQ.length,
                xQ = LQ.dom.getBoundingClientRect(),
                {
                  height: AQ
                } = xQ;
              if (HQ && !bQ && (vQ += xQ.top - HQ.top), LQ instanceof tw) YQ > wQ && mQ(LQ, uQ, xQ);
              else if (uQ >= wQ && (vQ > 0 && FQ.push(-vQ), FQ.push(AQ + vQ), vQ = 0, oQ)) {
                let QQ = LQ.dom.lastChild,
                  FQ = QQ ? VQ(QQ) : [];
                if (FQ.length) {
                  let QQ = FQ[FQ.length - 1],
                    wQ = kQ ? QQ.right - xQ.left : xQ.right - QQ.left;
                  wQ > DQ && (DQ = wQ, this.minWidth = qQ, this.minWidthFrom = uQ, this.minWidthTo = YQ)
                }
              }
              HQ && bQ == QQ.children.length - 1 && (vQ += HQ.bottom - xQ.bottom), uQ = YQ + LQ.breakAfter
            }
          };
        return mQ(this.tile, 0, null), FQ
      }
      textDirectionAt(QQ) {
        let {
          tile: FQ
        } = this.tile.resolveBlock(QQ, 1);
        return "rtl" == getComputedStyle(FQ.dom).direction ? mF.RTL : mF.LTR
      }
      measureTextSize() {
        let QQ = this.tile.blockTiles((QQ => {
          if (QQ.isLine() && QQ.children.length && QQ.length <= 20) {
            let FQ, wQ = 0;
            for (let LQ of QQ.children) {
              if (!LQ.isText() || /[^ -~]/.test(LQ.text)) return;
              let QQ = VQ(LQ.dom);
              if (1 != QQ.length) return;
              wQ += QQ[0].width, FQ = QQ[0].height
            }
            if (wQ) return {
              lineHeight: QQ.dom.getBoundingClientRect().height,
              charWidth: wQ / QQ.length,
              textHeight: FQ
            }
          }
        }));
        if (QQ) return QQ;
        let FQ, wQ, LQ, qQ = document.createElement("div");
        return qQ.className = "cm-line", qQ.style.width = "99999px", qQ.style.position = "absolute", qQ.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore((() => {
          this.tile.dom.appendChild(qQ);
          let QQ = VQ(qQ.firstChild)[0];
          FQ = qQ.getBoundingClientRect().height, wQ = QQ && QQ.width ? QQ.width / 27 : 7, LQ = QQ && QQ.height ? QQ.height : FQ, qQ.remove()
        })), {
          lineHeight: FQ,
          charWidth: wQ,
          textHeight: LQ
        }
      }
      computeBlockGapDeco() {
        let QQ = [],
          FQ = this.view.viewState;
        for (let wQ = 0, LQ = 0;; LQ++) {
          let qQ = LQ == FQ.viewports.length ? null : FQ.viewports[LQ],
            oQ = qQ ? qQ.from - 1 : this.view.state.doc.length;
          if (oQ > wQ) {
            let LQ = (FQ.lineBlockAt(oQ).bottom - FQ.lineBlockAt(wQ).top) / this.view.scaleY;
            QQ.push(UQ.replace({
              widget: new Vw(LQ),
              block: !0,
              inclusive: !0,
              isBlockGap: !0
            }).range(wQ, oQ))
          }
          if (!qQ) break;
          wQ = qQ.to + 1
        }
        return UQ.set(QQ)
      }
      updateDeco() {
        let QQ = 1,
          FQ = this.view.state.facet(Qw).map((FQ => (this.dynamicDecorationMap[QQ++] = "function" == typeof FQ) ? FQ(this.view) : FQ)),
          wQ = !1,
          qQ = this.view.state.facet(ww).map(((QQ, FQ) => {
            let LQ = "function" == typeof QQ;
            return LQ && (wQ = !0), LQ ? QQ(this.view) : QQ
          }));
        for (qQ.length && (this.dynamicDecorationMap[QQ++] = wQ, FQ.push(LQ.B.join(qQ))), this.qo = [this.editContextFormatting, ...FQ, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; QQ < this.qo.length;) this.dynamicDecorationMap[QQ++] = !1;
        this.blockWrappers = this.view.state.facet(Fw).map((QQ => "function" == typeof QQ ? QQ(this.view) : QQ))
      }
      scrollIntoView(QQ) {
        var FQ;
        if (QQ.isSnapshot) {
          let FQ = this.view.viewState.lineBlockAt(QQ.range.head);
          return this.view.scrollDOM.scrollTop = FQ.top - QQ.yMargin, void(this.view.scrollDOM.scrollLeft = QQ.xMargin)
        }
        for (let uQ of this.view.state.facet(fF)) try {
          if (uQ(this.view, QQ.range, QQ)) return !0
        } catch (mQ) {
          EF(this.view.state, mQ, "scroll handler")
        }
        let wQ, {
            range: LQ
          } = QQ,
          qQ = this.coordsAt(LQ.head, null !== (FQ = LQ.assoc) && void 0 !== FQ ? FQ : LQ.empty ? 0 : LQ.head > LQ.anchor ? -1 : 1);
        if (!qQ) return;
        !LQ.empty && (wQ = this.coordsAt(LQ.anchor, LQ.anchor > LQ.head ? -1 : 1)) && (qQ = {
          left: Math.min(qQ.left, wQ.left),
          top: Math.min(qQ.top, wQ.top),
          right: Math.max(qQ.right, wQ.right),
          bottom: Math.max(qQ.bottom, wQ.bottom)
        });
        let oQ = kw(this.view),
          DQ = {
            left: qQ.left - oQ.left,
            top: qQ.top - oQ.top,
            right: qQ.right + oQ.right,
            bottom: qQ.bottom + oQ.bottom
          },
          {
            offsetWidth: kQ,
            offsetHeight: vQ
          } = this.view.scrollDOM;
        if (function(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ) {
            let vQ = QQ.ownerDocument,
              mQ = vQ.defaultView || window;
            for (let uQ = QQ, HQ = !1; uQ && !HQ;)
              if (1 == uQ.nodeType) {
                let QQ, bQ = uQ == vQ.body,
                  YQ = 1,
                  xQ = 1;
                if (bQ) QQ = ZQ(mQ);
                else {
                  if (/^(fixed|sticky)$/.test(getComputedStyle(uQ).position) && (HQ = !0), uQ.scrollHeight <= uQ.clientHeight && uQ.scrollWidth <= uQ.clientWidth) {
                    uQ = uQ.assignedSlot || uQ.parentNode;
                    continue
                  }
                  let FQ = uQ.getBoundingClientRect();
                  ({
                    scaleX: YQ,
                    scaleY: xQ
                  } = yQ(uQ, FQ)), QQ = {
                    left: FQ.left,
                    right: FQ.left + uQ.clientWidth * YQ,
                    top: FQ.top,
                    bottom: FQ.top + uQ.clientHeight * xQ
                  }
                }
                let AQ = 0,
                  tQ = 0;
                if ("nearest" == qQ) FQ.top < QQ.top + DQ ? (tQ = FQ.top - (QQ.top + DQ), wQ > 0 && FQ.bottom > QQ.bottom + tQ && (tQ = FQ.bottom - QQ.bottom + DQ)) : FQ.bottom > QQ.bottom - DQ && (tQ = FQ.bottom - QQ.bottom + DQ, wQ < 0 && FQ.top - tQ < QQ.top && (tQ = FQ.top - (QQ.top + DQ)));
                else {
                  let LQ = FQ.bottom - FQ.top,
                    oQ = QQ.bottom - QQ.top;
                  tQ = ("center" == qQ && LQ <= oQ ? FQ.top + LQ / 2 - oQ / 2 : "start" == qQ || "center" == qQ && wQ < 0 ? FQ.top - DQ : FQ.bottom - oQ + DQ) - QQ.top
                }
                if ("nearest" == LQ ? FQ.left < QQ.left + oQ ? (AQ = FQ.left - (QQ.left + oQ), wQ > 0 && FQ.right > QQ.right + AQ && (AQ = FQ.right - QQ.right + oQ)) : FQ.right > QQ.right - oQ && (AQ = FQ.right - QQ.right + oQ, wQ < 0 && FQ.left < QQ.left + AQ && (AQ = FQ.left - (QQ.left + oQ))) : AQ = ("center" == LQ ? FQ.left + (FQ.right - FQ.left) / 2 - (QQ.right - QQ.left) / 2 : "start" == LQ == kQ ? FQ.left - oQ : FQ.right - (QQ.right - QQ.left) + oQ) - QQ.left, AQ || tQ)
                  if (bQ) mQ.scrollBy(AQ, tQ);
                  else {
                    let QQ = 0,
                      wQ = 0;
                    if (tQ) {
                      let QQ = uQ.scrollTop;
                      uQ.scrollTop += tQ / xQ, wQ = (uQ.scrollTop - QQ) * xQ
                    }
                    if (AQ) {
                      let FQ = uQ.scrollLeft;
                      uQ.scrollLeft += AQ / YQ, QQ = (uQ.scrollLeft - FQ) * YQ
                    }
                    FQ = {
                      left: FQ.left - QQ,
                      top: FQ.top - wQ,
                      right: FQ.right - QQ,
                      bottom: FQ.bottom - wQ
                    }, QQ && Math.abs(QQ - AQ) < 1 && (LQ = "nearest"), wQ && Math.abs(wQ - tQ) < 1 && (qQ = "nearest")
                  } if (bQ) break;
                (FQ.top < QQ.top || FQ.bottom > QQ.bottom || FQ.left < QQ.left || FQ.right > QQ.right) && (FQ = {
                  left: Math.max(FQ.left, QQ.left),
                  right: Math.min(FQ.right, QQ.right),
                  top: Math.max(FQ.top, QQ.top),
                  bottom: Math.min(FQ.bottom, QQ.bottom)
                }), uQ = uQ.assignedSlot || uQ.parentNode
              } else {
                if (11 != uQ.nodeType) break;
                uQ = uQ.host
              }
          }(this.view.scrollDOM, DQ, LQ.head < LQ.anchor ? -1 : 1, QQ.x, QQ.y, Math.max(Math.min(QQ.xMargin, kQ), -kQ), Math.max(Math.min(QQ.yMargin, vQ), -vQ), this.view.textDirection == mF.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (qQ.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || qQ.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
          let QQ = this.view.docView.lineAt(LQ.head, 1);
          QQ && QQ.dom.scrollIntoView({
            block: "nearest"
          })
        }
      }
      lineHasWidget(QQ) {
        let FQ = QQ => QQ.isWidget() || QQ.children.some(FQ);
        return FQ(this.tile.resolveBlock(QQ, 1).tile)
      }
      destroy() {
        jw(this.tile)
      }
    }

    function jw(QQ, FQ) {
      let wQ = null === FQ || void 0 === FQ ? void 0 : FQ.get(QQ);
      if (1 != wQ) {
        null == wQ && QQ.destroy();
        for (let wQ of QQ.children) jw(wQ, FQ)
      }
    }

    function aw(QQ, FQ) {
      let wQ = QQ.observer.selectionRange;
      if (!wQ.focusNode) return null;
      let LQ = DF(wQ.focusNode, wQ.focusOffset),
        qQ = kF(wQ.focusNode, wQ.focusOffset),
        oQ = LQ || qQ;
      if (qQ && LQ && qQ.node != LQ.node) {
        let FQ = bw.get(qQ.node);
        if (!FQ || FQ.isText() && FQ.text != qQ.node.nodeValue) oQ = qQ;
        else if (QQ.docView.lastCompositionAfterCursor) {
          let QQ = bw.get(LQ.node);
          !QQ || QQ.isText() && QQ.text != LQ.node.nodeValue || (oQ = qQ)
        }
      }
      if (QQ.docView.lastCompositionAfterCursor = oQ != LQ, !oQ) return null;
      let DQ = FQ - oQ.offset;
      return {
        from: DQ,
        to: DQ + oQ.node.nodeValue.length,
        node: oQ.node
      }
    }
    let Xw = class {
      constructor() {
        this.changes = []
      }
      compareRange(QQ, FQ) {
        lQ(QQ, FQ, this.changes)
      }
      comparePoint(QQ, FQ) {
        lQ(QQ, FQ, this.changes)
      }
      boundChange(QQ) {
        lQ(QQ, QQ, this.changes)
      }
    };
    class fw {
      constructor() {
        this.changes = []
      }
      compareRange(QQ, FQ) {
        lQ(QQ, FQ, this.changes)
      }
      comparePoint() {}
      boundChange(QQ) {
        lQ(QQ, QQ, this.changes)
      }
    }
    class Vw extends rQ {
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

    function hw(QQ, FQ, wQ) {
      let LQ = QQ.lineBlockAt(FQ);
      if (Array.isArray(LQ.type)) {
        let QQ;
        for (let qQ of LQ.type) {
          if (qQ.from > FQ) break;
          if (!(qQ.to < FQ)) {
            if (qQ.from < FQ && qQ.to > FQ) return qQ;
            QQ && (qQ.type != IQ.Text || QQ.type == qQ.type && !(wQ < 0 ? qQ.from < FQ : qQ.to > FQ)) || (QQ = qQ)
          }
        }
        return QQ || LQ
      }
      return LQ
    }

    function Jw(QQ, FQ, wQ, LQ) {
      let qQ = QQ.state.doc.lineAt(FQ.head),
        oQ = QQ.bidiSpans(qQ),
        DQ = QQ.textDirectionAt(qQ.from);
      for (let kQ = FQ, vQ = null;;) {
        let FQ = OF(qQ, oQ, DQ, kQ, wQ),
          mQ = RF;
        if (!FQ) {
          if (qQ.number == (wQ ? QQ.state.doc.lines : 1)) return kQ;
          mQ = "\n", qQ = QQ.state.doc.line(qQ.number + (wQ ? 1 : -1)), oQ = QQ.bidiSpans(qQ), FQ = QQ.visualLineSide(qQ, !wQ)
        }
        if (vQ) {
          if (!vQ(mQ)) return kQ
        } else {
          if (!LQ) return FQ;
          vQ = LQ(mQ)
        }
        kQ = FQ
      }
    }

    function Ew(QQ, FQ, wQ) {
      for (;;) {
        let LQ = 0;
        for (let qQ of QQ) qQ.between(FQ - 1, FQ + 1, ((QQ, qQ, oQ) => {
          if (FQ > QQ && FQ < qQ) {
            let oQ = LQ || wQ || (FQ - QQ < qQ - FQ ? -1 : 1);
            FQ = oQ < 0 ? QQ : qQ, LQ = oQ
          }
        }));
        if (!LQ) return FQ
      }
    }

    function nw(QQ, FQ) {
      let wQ = null;
      for (let qQ = 0; qQ < FQ.PA.length; qQ++) {
        let oQ = FQ.PA[qQ],
          DQ = null;
        if (oQ.empty) {
          let FQ = Ew(QQ, oQ.from, 0);
          FQ != oQ.from && (DQ = LQ.j.cursor(FQ, -1))
        } else {
          let FQ = Ew(QQ, oQ.from, -1),
            wQ = Ew(QQ, oQ.to, 1);
          FQ == oQ.from && wQ == oQ.to || (DQ = LQ.j.range(oQ.from == oQ.anchor ? FQ : wQ, oQ.from == oQ.head ? FQ : wQ))
        }
        DQ && (wQ || (wQ = FQ.PA.slice()), wQ[qQ] = DQ)
      }
      return wQ ? LQ.j.create(wQ, FQ.mainIndex) : FQ
    }

    function gw(QQ, FQ, wQ) {
      let qQ = Ew(QQ.state.facet(Lw).map((FQ => FQ(QQ))), wQ.from, FQ.head > wQ.from ? -1 : 1);
      return qQ == wQ.from ? wQ : LQ.j.cursor(qQ, qQ < wQ.from ? 1 : -1)
    }
    class Pw {
      constructor(QQ, FQ) {
        this.pos = QQ, this.assoc = FQ
      }
    }

    function Zw(QQ, FQ, wQ, qQ) {
      let oQ, DQ = QQ.contentDOM.getBoundingClientRect(),
        kQ = DQ.top + QQ.viewState.paddingTop,
        {
          x: vQ,
          y: mQ
        } = FQ,
        uQ = mQ - kQ;
      for (;;) {
        if (uQ < 0) return new Pw(0, 1);
        if (uQ > QQ.viewState.docHeight) return new Pw(QQ.state.doc.length, -1);
        if (oQ = QQ.elementAtHeight(uQ), null == qQ) break;
        if (oQ.type == IQ.Text) {
          if (qQ < 0 ? oQ.to < QQ.viewport.from : oQ.from > QQ.viewport.to) break;
          let FQ = QQ.docView.coordsAt(qQ < 0 ? oQ.from : oQ.to, qQ > 0 ? -1 : 1);
          if (FQ && (qQ < 0 ? FQ.top <= uQ + kQ : FQ.bottom >= uQ + kQ)) break
        }
        let FQ = QQ.viewState.heightOracle.textHeight / 2;
        uQ = qQ > 0 ? oQ.bottom + FQ : oQ.top - FQ
      }
      if (QQ.viewport.from >= oQ.to || QQ.viewport.to <= oQ.from) {
        if (wQ) return null;
        if (oQ.type == IQ.Text) {
          let FQ = function(QQ, FQ, wQ, qQ, oQ) {
            let DQ = Math.round((qQ - FQ.left) * QQ.defaultCharacterWidth);
            if (QQ.lineWrapping && wQ.height > 1.5 * QQ.defaultLineHeight) {
              let FQ = QQ.viewState.heightOracle.textHeight;
              DQ += Math.floor((oQ - wQ.top - .5 * (QQ.defaultLineHeight - FQ)) / FQ) * QQ.viewState.heightOracle.lineLength
            }
            let kQ = QQ.state.sliceDoc(wQ.from, wQ.to);
            return wQ.from + (0, LQ.db)(kQ, DQ, QQ.state.tabSize)
          }(QQ, DQ, oQ, vQ, mQ);
          return new Pw(FQ, FQ == oQ.from ? 1 : -1)
        }
      }
      if (oQ.type != IQ.Text) return uQ < (oQ.top + oQ.bottom) / 2 ? new Pw(oQ.from, 1) : new Pw(oQ.to, -1);
      let HQ = QQ.docView.lineAt(oQ.from, 2);
      return HQ && HQ.length == oQ.length || (HQ = QQ.docView.lineAt(oQ.from, -2)), new yw(QQ, vQ, mQ, QQ.textDirectionAt(oQ.from)).scanTile(HQ, oQ.from)
    }
    class yw {
      constructor(QQ, FQ, wQ, LQ) {
        this.view = QQ, this.x = FQ, this.y = wQ, this.baseDir = LQ, this.line = null, this.spans = null
      }
      bidiSpansAt(QQ) {
        return (!this.line || this.line.from > QQ || this.line.to < QQ) && (this.line = this.view.state.doc.lineAt(QQ), this.spans = this.view.bidiSpans(this.line)), this
      }
      baseDirAt(QQ, FQ) {
        let {
          line: wQ,
          spans: LQ
        } = this.bidiSpansAt(QQ);
        return LQ[GF.find(LQ, QQ - wQ.from, -1, FQ)].level == this.baseDir
      }
      dirAt(QQ, FQ) {
        let {
          line: wQ,
          spans: LQ
        } = this.bidiSpansAt(QQ);
        return LQ[GF.find(LQ, QQ - wQ.from, -1, FQ)].dir
      }
      bidiIn(QQ, FQ) {
        let {
          spans: wQ,
          line: LQ
        } = this.bidiSpansAt(QQ);
        return wQ.length > 1 || wQ.length && (wQ[0].level != this.baseDir || wQ[0].to + LQ.from < FQ)
      }
      scan(QQ, FQ) {
        let wQ, LQ, qQ, oQ = 0,
          DQ = QQ.length - 1,
          kQ = new Set,
          vQ = this.bidiIn(QQ[0], QQ[DQ]),
          mQ = -1,
          uQ = 1e9;
        QQ: for (; oQ < DQ;) {
          let HQ = DQ - oQ,
            bQ = oQ + DQ >> 1;
          FQ: if (kQ.has(bQ)) {
            let QQ = oQ + Math.floor(Math.random() * HQ);
            for (let FQ = 0; FQ < HQ; FQ++) {
              if (!kQ.has(QQ)) {
                bQ = QQ;
                break FQ
              }
              QQ++, QQ == DQ && (QQ = oQ)
            }
            break QQ
          } kQ.add(bQ);
          let YQ = FQ(bQ);
          if (YQ)
            for (let FQ = 0; FQ < YQ.length; FQ++) {
              let kQ = YQ[FQ],
                HQ = 0;
              if (!(0 == kQ.width && YQ.length > 1)) {
                if (kQ.bottom < this.y)(!wQ || wQ.bottom < kQ.bottom) && (wQ = kQ), HQ = 1;
                else if (kQ.top > this.y)(!LQ || LQ.top > kQ.top) && (LQ = kQ), HQ = -1;
                else {
                  let QQ = kQ.left > this.x ? this.x - kQ.left : kQ.right < this.x ? this.x - kQ.right : 0,
                    FQ = Math.abs(QQ);
                  FQ < uQ && (mQ = bQ, uQ = FQ, qQ = kQ), QQ && (HQ = QQ < 0 == (this.baseDir == mF.LTR) ? -1 : 1)
                } - 1 != HQ || vQ && !this.baseDirAt(QQ[bQ], 1) ? 1 != HQ || vQ && !this.baseDirAt(QQ[bQ + 1], -1) || (oQ = bQ + 1) : DQ = bQ
              }
            }
        }
        if (!qQ) {
          let qQ = wQ && (!LQ || this.y - wQ.bottom < LQ.top - this.y) ? wQ : LQ;
          return this.y = (qQ.top + qQ.bottom) / 2, this.scan(QQ, FQ)
        }
        if (uQ) {
          if (wQ && wQ.bottom > qQ.top) return this.y = wQ.bottom - 1, this.scan(QQ, FQ);
          if (LQ && LQ.top < qQ.bottom) return this.y = LQ.top + 1, this.scan(QQ, FQ)
        }
        let HQ = (vQ ? this.dirAt(QQ[mQ], 1) : this.baseDir) == mF.LTR;
        return {
          i: mQ,
          after: this.x > (qQ.left + qQ.right) / 2 == HQ
        }
      }
      scanText(QQ, FQ) {
        let wQ = [];
        for (let oQ = 0; oQ < QQ.length; oQ = (0, LQ.$)(QQ.text, oQ)) wQ.push(FQ + oQ);
        wQ.push(FQ + QQ.length);
        let qQ = this.scan(wQ, (LQ => {
          let qQ = wQ[LQ] - FQ,
            oQ = wQ[LQ + 1] - FQ;
          return LF(QQ.dom, qQ, oQ).getClientRects()
        }));
        return qQ.after ? new Pw(wQ[qQ.i + 1], -1) : new Pw(wQ[qQ.i], 1)
      }
      scanTile(QQ, FQ) {
        if (!QQ.length) return new Pw(FQ, 1);
        if (1 == QQ.children.length) {
          let wQ = QQ.children[0];
          if (wQ.isText()) return this.scanText(wQ, FQ);
          if (wQ.isComposite()) return this.scanTile(wQ, FQ)
        }
        let wQ = [FQ];
        for (let DQ = 0, kQ = FQ; DQ < QQ.children.length; DQ++) wQ.push(kQ += QQ.children[DQ].length);
        let LQ = this.scan(wQ, (FQ => {
            let wQ = QQ.children[FQ];
            return 48 & wQ.flags ? null : (1 == wQ.dom.nodeType ? wQ.dom : LF(wQ.dom, 0, wQ.length)).getClientRects()
          })),
          qQ = QQ.children[LQ.i],
          oQ = wQ[LQ.i];
        return qQ.isText() ? this.scanText(qQ, oQ) : qQ.isComposite() ? this.scanTile(qQ, oQ) : LQ.after ? new Pw(wQ[LQ.i + 1], -1) : new Pw(oQ, 1)
      }
    }
    const Bw = "\uffff";
    class dw {
      constructor(QQ, FQ) {
        this.points = QQ, this.view = FQ, this.text = "", this.lineSeparator = FQ.state.facet(LQ.n.lineSeparator)
      }
      append(QQ) {
        this.text += QQ
      }
      lineBreak() {
        this.text += Bw
      }
      readRange(QQ, FQ) {
        if (!QQ) return this;
        let wQ = QQ.parentNode;
        for (let LQ = QQ;;) {
          this.findPointBefore(wQ, LQ);
          let QQ = this.text.length;
          this.readNode(LQ);
          let qQ = bw.get(LQ),
            oQ = LQ.nextSibling;
          if (oQ == FQ) {
            (null === qQ || void 0 === qQ ? void 0 : qQ.breakAfter) && !oQ && wQ != this.view.contentDOM && this.lineBreak();
            break
          }
          let DQ = bw.get(oQ);
          (qQ && DQ ? qQ.breakAfter : (qQ ? qQ.breakAfter : EQ(LQ)) || EQ(oQ) && ("BR" != LQ.nodeName || (null === qQ || void 0 === qQ ? void 0 : qQ.isWidget())) && this.text.length > QQ) && !FL(oQ, FQ) && this.lineBreak(), LQ = oQ
        }
        return this.findPointBefore(wQ, FQ), this
      }
      readTextNode(QQ) {
        let FQ = QQ.nodeValue;
        for (let wQ of this.points) wQ.node == QQ && (wQ.pos = this.text.length + Math.min(wQ.offset, FQ.length));
        for (let wQ = 0, LQ = this.lineSeparator ? null : /\r\n?|\n/g;;) {
          let qQ, oQ = -1,
            DQ = 1;
          if (this.lineSeparator ? (oQ = FQ.indexOf(this.lineSeparator, wQ), DQ = this.lineSeparator.length) : (qQ = LQ.exec(FQ)) && (oQ = qQ.index, DQ = qQ[0].length), this.append(FQ.slice(wQ, oQ < 0 ? FQ.length : oQ)), oQ < 0) break;
          if (this.lineBreak(), DQ > 1)
            for (let FQ of this.points) FQ.node == QQ && FQ.pos > this.text.length && (FQ.pos -= DQ - 1);
          wQ = oQ + DQ
        }
      }
      readNode(QQ) {
        let FQ = bw.get(QQ),
          wQ = FQ && FQ.overrideDOMText;
        if (null != wQ) {
          this.findPointInside(QQ, wQ.length);
          for (let QQ = wQ.iter(); !QQ.next().done;) QQ.lineBreak ? this.lineBreak() : this.append(QQ.value)
        } else 3 == QQ.nodeType ? this.readTextNode(QQ) : "BR" == QQ.nodeName ? QQ.nextSibling && this.lineBreak() : 1 == QQ.nodeType && this.readRange(QQ.firstChild, null)
      }
      findPointBefore(QQ, FQ) {
        for (let wQ of this.points) wQ.node == QQ && QQ.childNodes[wQ.offset] == FQ && (wQ.pos = this.text.length)
      }
      findPointInside(QQ, FQ) {
        for (let wQ of this.points)(3 == QQ.nodeType ? wQ.node == QQ : QQ.contains(wQ.node)) && (wQ.pos = this.text.length + (QL(QQ, wQ.node, wQ.offset) ? FQ : 0))
      }
    }

    function QL(QQ, FQ, wQ) {
      for (;;) {
        if (!FQ || wQ < gQ(FQ)) return !1;
        if (FQ == QQ) return !0;
        wQ = JQ(FQ) + 1, FQ = FQ.parentNode
      }
    }

    function FL(QQ, FQ) {
      let wQ;
      for (; QQ != FQ && QQ; QQ = QQ.nextSibling) {
        let FQ = bw.get(QQ);
        if (!(null === FQ || void 0 === FQ ? void 0 : FQ.isWidget())) return !1;
        FQ && (wQ || (wQ = [])).push(FQ)
      }
      if (wQ)
        for (let LQ of wQ) {
          let QQ = LQ.overrideDOMText;
          if (null === QQ || void 0 === QQ ? void 0 : QQ.length) return !1
        }
      return !0
    }
    class wL {
      constructor(QQ, FQ) {
        this.node = QQ, this.offset = FQ, this.pos = -1
      }
    }
    class LL {
      constructor(QQ, FQ, wQ, qQ) {
        this.typeOver = qQ, this.bounds = null, this.text = "", this.domChanged = FQ > -1;
        let {
          impreciseHead: oQ,
          impreciseAnchor: DQ
        } = QQ.docView, kQ = QQ.state.selection;
        if (QQ.state.readOnly && FQ > -1) this.newSel = null;
        else if (FQ > -1 && (this.bounds = qL(QQ.docView.tile, FQ, wQ, 0))) {
          let FQ = oQ || DQ ? [] : function(QQ) {
              let FQ = [];
              if (QQ.root.activeElement != QQ.contentDOM) return FQ;
              let {
                anchorNode: wQ,
                anchorOffset: LQ,
                focusNode: qQ,
                focusOffset: oQ
              } = QQ.observer.selectionRange;
              wQ && (FQ.push(new wL(wQ, LQ)), qQ == wQ && oQ == LQ || FQ.push(new wL(qQ, oQ)));
              return FQ
            }(QQ),
            wQ = new dw(FQ, QQ);
          wQ.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = wQ.text, this.newSel = function(QQ, FQ) {
            if (0 == QQ.length) return null;
            let wQ = QQ[0].pos,
              qQ = 2 == QQ.length ? QQ[1].pos : wQ;
            return wQ > -1 && qQ > -1 ? LQ.j.single(wQ + FQ, qQ + FQ) : null
          }(FQ, this.bounds.from)
        } else {
          let FQ = QQ.observer.selectionRange,
            wQ = oQ && oQ.node == FQ.focusNode && oQ.offset == FQ.focusOffset || !XQ(QQ.contentDOM, FQ.focusNode) ? kQ.main.head : QQ.docView.posFromDOM(FQ.focusNode, FQ.focusOffset),
            qQ = DQ && DQ.node == FQ.anchorNode && DQ.offset == FQ.anchorOffset || !XQ(QQ.contentDOM, FQ.anchorNode) ? kQ.main.anchor : QQ.docView.posFromDOM(FQ.anchorNode, FQ.anchorOffset),
            vQ = QQ.viewport;
          if ((SQ.ios || SQ.chrome) && kQ.main.empty && wQ != qQ && (vQ.from > 0 || vQ.to < QQ.state.doc.length)) {
            let FQ = Math.min(wQ, qQ),
              LQ = Math.max(wQ, qQ),
              oQ = vQ.from - FQ,
              DQ = vQ.to - LQ;
            0 != oQ && 1 != oQ && 0 != FQ || 0 != DQ && -1 != DQ && LQ != QQ.state.doc.length || (wQ = 0, qQ = QQ.state.doc.length)
          }
          if (QQ.inputState.composing > -1 && kQ.PA.length > 1) this.newSel = kQ.replaceRange(LQ.j.range(qQ, wQ));
          else if (QQ.lineWrapping && qQ == wQ && (!kQ.main.empty || kQ.main.head != wQ) && QQ.inputState.lastTouchTime > Date.now() - 100) {
            let FQ = QQ.coordsAtPos(wQ, -1),
              qQ = 0;
            FQ && (qQ = QQ.inputState.lastTouchY <= FQ.bottom ? -1 : 1), this.newSel = LQ.j.create([LQ.j.cursor(wQ, qQ)])
          } else this.newSel = LQ.j.single(qQ, wQ)
        }
      }
    }

    function qL(QQ, FQ, wQ, LQ) {
      if (QQ.isComposite()) {
        let qQ = -1,
          oQ = -1,
          DQ = -1,
          kQ = -1;
        for (let vQ = 0, mQ = LQ, uQ = LQ; vQ < QQ.children.length; vQ++) {
          let LQ = QQ.children[vQ],
            HQ = mQ + LQ.length;
          if (mQ < FQ && HQ > wQ) return qL(LQ, FQ, wQ, mQ);
          if (HQ >= FQ && -1 == qQ && (qQ = vQ, oQ = mQ), mQ > wQ && LQ.dom.parentNode == QQ.dom) {
            DQ = vQ, kQ = uQ;
            break
          }
          uQ = HQ, mQ = HQ + LQ.breakAfter
        }
        return {
          from: oQ,
          to: kQ < 0 ? LQ + QQ.length : kQ,
          startDOM: (qQ ? QQ.children[qQ - 1].dom.nextSibling : null) || QQ.dom.firstChild,
          endDOM: DQ < QQ.children.length && DQ >= 0 ? QQ.children[DQ].dom : null
        }
      }
      return QQ.isText() ? {
        from: LQ,
        to: LQ + QQ.length,
        startDOM: QQ.dom,
        endDOM: QQ.dom.nextSibling
      } : null
    }

    function oL(QQ, FQ) {
      let wQ, {
          newSel: qQ
        } = FQ,
        {
          state: oQ
        } = QQ,
        DQ = oQ.selection.main,
        kQ = QQ.inputState.lastKeyTime > Date.now() - 100 ? QQ.inputState.lastKeyCode : -1;
      if (FQ.bounds) {
        let {
          from: QQ,
          to: qQ
        } = FQ.bounds, vQ = DQ.from, mQ = null;
        (8 === kQ || SQ.android && FQ.text.length < qQ - QQ) && (vQ = DQ.to, mQ = "end");
        let uQ, HQ, bQ = oQ.doc.sliceString(QQ, qQ, Bw);
        !DQ.empty && DQ.from >= QQ && DQ.to <= qQ && (FQ.typeOver || bQ != FQ.text) && bQ.slice(0, DQ.from - QQ) == FQ.text.slice(0, DQ.from - QQ) && bQ.slice(DQ.to - QQ) == FQ.text.slice(uQ = FQ.text.length - (bQ.length - (DQ.to - QQ))) ? wQ = {
          from: DQ.from,
          to: DQ.to,
          insert: LQ.P.of(FQ.text.slice(DQ.from - QQ, uQ).split(Bw))
        } : (HQ = kL(bQ, FQ.text, vQ - QQ, mQ)) && (SQ.chrome && 13 == kQ && HQ.toB == HQ.from + 2 && FQ.text.slice(HQ.from, HQ.toB) == Bw + Bw && HQ.toB--, wQ = {
          from: QQ + HQ.from,
          to: QQ + HQ.toA,
          insert: LQ.P.of(FQ.text.slice(HQ.from, HQ.toB).split(Bw))
        })
      } else qQ && (!QQ.hasFocus && oQ.facet(nF) || vL(qQ, DQ)) && (qQ = null);
      if (!wQ && !qQ) return !1;
      if ((SQ.mac || SQ.android) && wQ && wQ.from == wQ.to && wQ.from == DQ.head - 1 && /^\. ?$/.test(wQ.insert.toString()) && "off" == QQ.contentDOM.getAttribute("autocorrect") ? (qQ && 2 == wQ.insert.length && (qQ = LQ.j.single(qQ.main.anchor - 1, qQ.main.head - 1)), wQ = {
          from: wQ.from,
          to: wQ.to,
          insert: LQ.P.of([wQ.insert.toString().replace(".", " ")])
        }) : oQ.doc.lineAt(DQ.from).to < DQ.to && QQ.docView.lineHasWidget(DQ.to) && QQ.inputState.insertingTextAt > Date.now() - 50 ? wQ = {
          from: DQ.from,
          to: DQ.to,
          insert: oQ.toText(QQ.inputState.insertingText)
        } : SQ.chrome && wQ && wQ.from == wQ.to && wQ.from == DQ.head && "\n " == wQ.insert.toString() && QQ.lineWrapping && (qQ && (qQ = LQ.j.single(qQ.main.anchor - 1, qQ.main.head - 1)), wQ = {
          from: DQ.from,
          to: DQ.to,
          insert: LQ.P.of([" "])
        }), wQ) return DL(QQ, wQ, qQ, kQ);
      if (qQ && !vL(qQ, DQ)) {
        let FQ = !1,
          wQ = "select";
        return QQ.inputState.lastSelectionTime > Date.now() - 50 && ("select" == QQ.inputState.lastSelectionOrigin && (FQ = !0), wQ = QQ.inputState.lastSelectionOrigin, "select.pointer" == wQ && (qQ = nw(oQ.facet(Lw).map((FQ => FQ(QQ))), qQ))), QQ.dispatch({
          selection: qQ,
          scrollIntoView: FQ,
          userEvent: wQ
        }), !0
      }
      return !1
    }

    function DL(QQ, FQ, wQ) {
      let qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
      if (SQ.ios && QQ.inputState.flushIOSKey(FQ)) return !0;
      let oQ = QQ.state.selection.main;
      if (SQ.android && (FQ.to == oQ.to && (FQ.from == oQ.from || FQ.from == oQ.from - 1 && " " == QQ.state.sliceDoc(FQ.from, oQ.from)) && 1 == FQ.insert.length && 2 == FQ.insert.lines && qF(QQ.contentDOM, "Enter", 13) || (FQ.from == oQ.from - 1 && FQ.to == oQ.to && 0 == FQ.insert.length || 8 == qQ && FQ.insert.length < FQ.to - FQ.from && FQ.to > oQ.head) && qF(QQ.contentDOM, "Backspace", 8) || FQ.from == oQ.from && FQ.to == oQ.to + 1 && 0 == FQ.insert.length && qF(QQ.contentDOM, "Delete", 46))) return !0;
      let DQ, kQ = FQ.insert.toString();
      QQ.inputState.composing >= 0 && QQ.inputState.composing++;
      let vQ = () => DQ || (DQ = function(QQ, FQ, wQ) {
        let qQ, oQ = QQ.state,
          DQ = oQ.selection.main,
          kQ = -1;
        if (FQ.from == FQ.to && FQ.from < DQ.from || FQ.from > DQ.to) {
          let wQ = FQ.from < DQ.from ? -1 : 1,
            LQ = wQ < 0 ? DQ.from : DQ.to,
            qQ = Ew(oQ.facet(Lw).map((FQ => FQ(QQ))), LQ, wQ);
          FQ.from == qQ && (kQ = qQ)
        }
        if (kQ > -1) qQ = {
          changes: FQ,
          selection: LQ.j.cursor(FQ.from + FQ.insert.length, -1)
        };
        else if (FQ.from >= DQ.from && FQ.to <= DQ.to && FQ.to - FQ.from >= (DQ.to - DQ.from) / 3 && (!wQ || wQ.main.empty && wQ.main.from == FQ.from + FQ.insert.length) && QQ.inputState.composing < 0) {
          let wQ = DQ.from < FQ.from ? oQ.sliceDoc(DQ.from, FQ.from) : "",
            LQ = DQ.to > FQ.to ? oQ.sliceDoc(FQ.to, DQ.to) : "";
          qQ = oQ.replaceSelection(QQ.state.toText(wQ + FQ.insert.sliceString(0, void 0, QQ.state.lineBreak) + LQ))
        } else {
          let kQ = oQ.changes(FQ),
            vQ = wQ && wQ.main.to <= kQ.newLength ? wQ.main : void 0;
          if (oQ.selection.PA.length > 1 && (QQ.inputState.composing >= 0 || QQ.inputState.compositionPendingChange) && FQ.to <= DQ.to + 10 && FQ.to >= DQ.to - 10) {
            let mQ, uQ = QQ.state.sliceDoc(FQ.from, FQ.to),
              HQ = wQ && aw(QQ, wQ.main.head);
            if (HQ) {
              let QQ = FQ.insert.length - (FQ.to - FQ.from);
              mQ = {
                from: HQ.from,
                to: HQ.to - QQ
              }
            } else mQ = QQ.state.doc.lineAt(DQ.head);
            let bQ = DQ.to - FQ.to;
            qQ = oQ.changeByRange((wQ => {
              if (wQ.from == DQ.from && wQ.to == DQ.to) return {
                changes: kQ,
                range: vQ || wQ.map(kQ)
              };
              let qQ = wQ.to - bQ,
                HQ = qQ - uQ.length;
              if (QQ.state.sliceDoc(HQ, qQ) != uQ || qQ >= mQ.from && HQ <= mQ.to) return {
                range: wQ
              };
              let YQ = oQ.changes({
                  from: HQ,
                  to: qQ,
                  insert: FQ.insert
                }),
                xQ = wQ.to - DQ.to;
              return {
                changes: YQ,
                range: vQ ? LQ.j.range(Math.max(0, vQ.anchor + xQ), Math.max(0, vQ.head + xQ)) : wQ.map(YQ)
              }
            }))
          } else qQ = {
            changes: kQ,
            selection: vQ && oQ.selection.replaceRange(vQ)
          }
        }
        let vQ = "input.type";
        (QQ.composing || QQ.inputState.compositionPendingChange && QQ.inputState.compositionEndedAt > Date.now() - 50) && (QQ.inputState.compositionPendingChange = !1, vQ += ".compose", QQ.inputState.compositionFirstChange && (vQ += ".start", QQ.inputState.compositionFirstChange = !1));
        return oQ.update(qQ, {
          userEvent: vQ,
          scrollIntoView: !0
        })
      }(QQ, FQ, wQ));
      return QQ.state.facet(KF).some((wQ => wQ(QQ, FQ.from, FQ.to, kQ, vQ))) || QQ.dispatch(vQ()), !0
    }

    function kL(QQ, FQ, wQ, LQ) {
      let qQ = Math.min(QQ.length, FQ.length),
        oQ = 0;
      for (; oQ < qQ && QQ.charCodeAt(oQ) == FQ.charCodeAt(oQ);) oQ++;
      if (oQ == qQ && QQ.length == FQ.length) return null;
      let DQ = QQ.length,
        kQ = FQ.length;
      for (; DQ > 0 && kQ > 0 && QQ.charCodeAt(DQ - 1) == FQ.charCodeAt(kQ - 1);) DQ--, kQ--;
      if ("end" == LQ) {
        wQ -= DQ + Math.max(0, oQ - Math.min(DQ, kQ)) - oQ
      }
      if (DQ < oQ && QQ.length < FQ.length) {
        oQ -= wQ <= oQ && wQ >= DQ ? oQ - wQ : 0, kQ = oQ + (kQ - DQ), DQ = oQ
      } else if (kQ < oQ) {
        oQ -= wQ <= oQ && wQ >= kQ ? oQ - wQ : 0, DQ = oQ + (DQ - kQ), kQ = oQ
      }
      return {
        from: oQ,
        toA: DQ,
        toB: kQ
      }
    }

    function vL(QQ, FQ) {
      return FQ.head == QQ.main.head && FQ.anchor == QQ.main.anchor
    }
    class mL {
      setSelectionOrigin(QQ) {
        this.lastSelectionOrigin = QQ, this.lastSelectionTime = Date.now()
      }
      constructor(QQ) {
        this.view = QQ, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = QQ.hasFocus, SQ.safari && QQ.contentDOM.addEventListener("input", (() => null)), SQ.gecko && function(QQ) {
          TL.has(QQ) || (TL.add(QQ), QQ.addEventListener("copy", (() => {})), QQ.addEventListener("cut", (() => {})))
        }(QQ.contentDOM.ownerDocument)
      }
      handleEvent(QQ) {
        (function(QQ, FQ) {
          if (!FQ.bubbles) return !0;
          if (FQ.defaultPrevented) return !1;
          for (let wQ, LQ = FQ.target; LQ != QQ.contentDOM; LQ = LQ.parentNode)
            if (!LQ || 11 == LQ.nodeType || (wQ = bw.get(LQ)) && wQ.isWidget() && !wQ.isHidden && wQ.widget.ignoreEvent(FQ)) return !1;
          return !0
        })(this.view, QQ) && !this.ignoreDuringComposition(QQ) && ("keydown" == QQ.type && this.keydown(QQ) || (0 != this.view.updateState ? Promise.resolve().then((() => this.runHandlers(QQ.type, QQ))) : this.runHandlers(QQ.type, QQ)))
      }
      runHandlers(QQ, FQ) {
        let wQ = this.handlers[QQ];
        if (wQ) {
          for (let QQ of wQ.observers) QQ(this.view, FQ);
          for (let QQ of wQ.handlers) {
            if (FQ.defaultPrevented) break;
            if (QQ(this.view, FQ)) {
              FQ.preventDefault();
              break
            }
          }
        }
      }
      ensureHandlers(QQ) {
        let FQ = HL(QQ),
          wQ = this.handlers,
          LQ = this.view.contentDOM;
        for (let qQ in FQ)
          if ("scroll" != qQ) {
            let QQ = !FQ[qQ].handlers.length,
              oQ = wQ[qQ];
            oQ && QQ != !oQ.handlers.length && (LQ.removeEventListener(qQ, this.handleEvent), oQ = null), oQ || LQ.addEventListener(qQ, this.handleEvent, {
              passive: QQ
            })
          } for (let qQ in wQ) "scroll" == qQ || FQ[qQ] || LQ.removeEventListener(qQ, this.handleEvent);
        this.handlers = FQ
      }
      keydown(QQ) {
        if (this.lastKeyCode = QQ.keyCode, this.lastKeyTime = Date.now(), 9 == QQ.keyCode && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return !0;
        if (this.tabFocusMode > 0 && 27 != QQ.keyCode && xL.indexOf(QQ.keyCode) < 0 && (this.tabFocusMode = -1), SQ.android && SQ.chrome && !QQ.synthetic && (13 == QQ.keyCode || 8 == QQ.keyCode)) return this.view.observer.delayAndroidKey(QQ.key, QQ.keyCode), !0;
        let FQ;
        return !SQ.ios || QQ.synthetic || QQ.altKey || QQ.metaKey || QQ.shiftKey || !((FQ = bL.find((FQ => FQ.keyCode == QQ.keyCode))) && !QQ.ctrlKey || YL.indexOf(QQ.key) > -1 && QQ.ctrlKey) ? (229 != QQ.keyCode && this.view.observer.forceFlush(), !1) : (this.pendingIOSKey = FQ || QQ, setTimeout((() => this.flushIOSKey()), 250), !0)
      }
      flushIOSKey(QQ) {
        let FQ = this.pendingIOSKey;
        return !!FQ && (!("Enter" == FQ.key && QQ && QQ.from < QQ.to && /^\S+$/.test(QQ.insert.toString())) && (this.pendingIOSKey = void 0, qF(this.view.contentDOM, FQ.key, FQ.keyCode, FQ instanceof KeyboardEvent ? FQ : void 0)))
      }
      ignoreDuringComposition(QQ) {
        return !(!/^key/.test(QQ.type) || QQ.synthetic) && (this.composing > 0 || !!(SQ.safari && !SQ.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = !1, !0))
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

    function uL(QQ, FQ) {
      return (wQ, LQ) => {
        try {
          return FQ.call(QQ, LQ, wQ)
        } catch (qQ) {
          EF(wQ.state, qQ)
        }
      }
    }

    function HL(QQ) {
      let FQ = Object.create(null);

      function wQ(QQ) {
        return FQ[QQ] || (FQ[QQ] = {
          observers: [],
          handlers: []
        })
      }
      for (let LQ of QQ) {
        let QQ = LQ.spec,
          FQ = QQ && QQ.plugin.domEventHandlers,
          qQ = QQ && QQ.plugin.domEventObservers;
        if (FQ)
          for (let oQ in FQ) {
            let QQ = FQ[oQ];
            QQ && wQ(oQ).handlers.push(uL(LQ.value, QQ))
          }
        if (qQ)
          for (let oQ in qQ) {
            let QQ = qQ[oQ];
            QQ && wQ(oQ).observers.push(uL(LQ.value, QQ))
          }
      }
      for (let LQ in eL) wQ(LQ).handlers.push(eL[LQ]);
      for (let LQ in ML) wQ(LQ).observers.push(ML[LQ]);
      return FQ
    }
    const bL = [{
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
      YL = "dthko",
      xL = [16, 17, 18, 20, 91, 92, 224, 225];

    function AL(QQ) {
      return .7 * Math.max(0, QQ) + 8
    }
    class tL {
      constructor(QQ, FQ, wQ, qQ) {
        this.view = QQ, this.startEvent = FQ, this.style = wQ, this.mustSelect = qQ, this.scrollSpeed = {
          x: 0,
          y: 0
        }, this.scrolling = -1, this.lastEvent = FQ, this.scrollParents = BQ(QQ.contentDOM), this.atoms = QQ.state.facet(Lw).map((FQ => FQ(QQ)));
        let oQ = QQ.contentDOM.ownerDocument;
        oQ.addEventListener("mousemove", this.move = this.move.bind(this)), oQ.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = FQ.shiftKey, this.multiple = QQ.state.facet(LQ.n.allowMultipleSelections) && function(QQ, FQ) {
          let wQ = QQ.state.facet(rF);
          return wQ.length ? wQ[0](FQ) : SQ.mac ? FQ.metaKey : FQ.ctrlKey
        }(QQ, FQ), this.dragging = !(! function(QQ, FQ) {
          let {
            main: wQ
          } = QQ.state.selection;
          if (wQ.empty) return !1;
          let LQ = aQ(QQ.root);
          if (!LQ || 0 == LQ.rangeCount) return !0;
          let qQ = LQ.getRangeAt(0).getClientRects();
          for (let oQ = 0; oQ < qQ.length; oQ++) {
            let QQ = qQ[oQ];
            if (QQ.left <= FQ.clientX && QQ.right >= FQ.clientX && QQ.top <= FQ.clientY && QQ.bottom >= FQ.clientY) return !0
          }
          return !1
        }(QQ, FQ) || 1 != OL(FQ)) && null
      }
      start(QQ) {
        !1 === this.dragging && this.select(QQ)
      }
      move(QQ) {
        if (0 == QQ.buttons) return this.destroy();
        if (this.dragging || null == this.dragging && (FQ = this.startEvent, wQ = QQ, Math.max(Math.abs(FQ.clientX - wQ.clientX), Math.abs(FQ.clientY - wQ.clientY)) < 10)) return;
        var FQ, wQ;
        this.select(this.lastEvent = QQ);
        let LQ = 0,
          qQ = 0,
          oQ = 0,
          DQ = 0,
          kQ = this.view.win.innerWidth,
          vQ = this.view.win.innerHeight;
        this.scrollParents.x && ({
          left: oQ,
          right: kQ
        } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({
          top: DQ,
          bottom: vQ
        } = this.scrollParents.y.getBoundingClientRect());
        let mQ = kw(this.view);
        QQ.clientX - mQ.left <= oQ + 6 ? LQ = -AL(oQ - QQ.clientX) : QQ.clientX + mQ.right >= kQ - 6 && (LQ = AL(QQ.clientX - kQ)), QQ.clientY - mQ.top <= DQ + 6 ? qQ = -AL(DQ - QQ.clientY) : QQ.clientY + mQ.bottom >= vQ - 6 && (qQ = AL(QQ.clientY - vQ)), this.setScrollSpeed(LQ, qQ)
      }
      up(QQ) {
        null == this.dragging && this.select(this.lastEvent), this.dragging || QQ.preventDefault(), this.destroy()
      }
      destroy() {
        this.setScrollSpeed(0, 0);
        let QQ = this.view.contentDOM.ownerDocument;
        QQ.removeEventListener("mousemove", this.move), QQ.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null
      }
      setScrollSpeed(QQ, FQ) {
        this.scrollSpeed = {
          x: QQ,
          y: FQ
        }, QQ || FQ ? this.scrolling < 0 && (this.scrolling = setInterval((() => this.scroll()), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1)
      }
      scroll() {
        let {
          x: QQ,
          y: FQ
        } = this.scrollSpeed;
        QQ && this.scrollParents.x && (this.scrollParents.x.scrollLeft += QQ, QQ = 0), FQ && this.scrollParents.y && (this.scrollParents.y.scrollTop += FQ, FQ = 0), (QQ || FQ) && this.view.win.scrollBy(QQ, FQ), !1 === this.dragging && this.select(this.lastEvent)
      }
      select(QQ) {
        let {
          view: FQ
        } = this, wQ = nw(this.atoms, this.style.get(QQ, this.extend, this.multiple));
        !this.mustSelect && wQ.eq(FQ.state.selection, !1 === this.dragging) || this.view.dispatch({
          selection: wQ,
          userEvent: "select.pointer"
        }), this.mustSelect = !1
      }
      update(QQ) {
        QQ.transactions.some((QQ => QQ.isUserEvent("input.type"))) ? this.destroy() : this.style.update(QQ) && setTimeout((() => this.select(this.lastEvent)), 20)
      }
    }
    const eL = Object.create(null),
      ML = Object.create(null),
      GL = SQ.ie && SQ.ie_version < 15 || SQ.ios && SQ.webkit_version < 604;

    function pL(QQ, FQ, wQ) {
      for (let LQ of QQ.facet(FQ)) wQ = LQ(wQ, QQ);
      return wQ
    }

    function cL(QQ, FQ) {
      FQ = pL(QQ.state, lF, FQ);
      let wQ, {
          state: qQ
        } = QQ,
        oQ = 1,
        DQ = qQ.toText(FQ),
        kQ = DQ.lines == qQ.selection.PA.length;
      if (null != rL && qQ.selection.PA.every((QQ => QQ.empty)) && rL == DQ.toString()) {
        let QQ = -1;
        wQ = qQ.changeByRange((wQ => {
          let vQ = qQ.doc.lineAt(wQ.from);
          if (vQ.from == QQ) return {
            range: wQ
          };
          QQ = vQ.from;
          let mQ = qQ.toText((kQ ? DQ.line(oQ++).text : FQ) + qQ.lineBreak);
          return {
            changes: {
              from: vQ.from,
              insert: mQ
            },
            range: LQ.j.cursor(wQ.from + mQ.length)
          }
        }))
      } else wQ = kQ ? qQ.changeByRange((QQ => {
        let FQ = DQ.line(oQ++);
        return {
          changes: {
            from: QQ.from,
            to: QQ.to,
            insert: FQ.text
          },
          range: LQ.j.cursor(QQ.from + FQ.length)
        }
      })) : qQ.replaceSelection(DQ);
      QQ.dispatch(wQ, {
        userEvent: "input.paste",
        scrollIntoView: !0
      })
    }

    function CL(QQ, FQ, wQ, qQ) {
      if (1 == qQ) return LQ.j.cursor(FQ, wQ);
      if (2 == qQ) return function(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          qQ = QQ.charCategorizer(FQ),
          oQ = QQ.doc.lineAt(FQ),
          DQ = FQ - oQ.from;
        if (0 == oQ.length) return LQ.j.cursor(FQ);
        0 == DQ ? wQ = 1 : DQ == oQ.length && (wQ = -1);
        let kQ = DQ,
          vQ = DQ;
        wQ < 0 ? kQ = (0, LQ.$)(oQ.text, DQ, !1) : vQ = (0, LQ.$)(oQ.text, DQ);
        let mQ = qQ(oQ.text.slice(kQ, vQ));
        for (; kQ > 0;) {
          let QQ = (0, LQ.$)(oQ.text, kQ, !1);
          if (qQ(oQ.text.slice(QQ, kQ)) != mQ) break;
          kQ = QQ
        }
        for (; vQ < oQ.length;) {
          let QQ = (0, LQ.$)(oQ.text, vQ);
          if (qQ(oQ.text.slice(vQ, QQ)) != mQ) break;
          vQ = QQ
        }
        return LQ.j.range(kQ + oQ.from, vQ + oQ.from)
      }(QQ.state, FQ, wQ);
      {
        let qQ = QQ.docView.lineAt(FQ, wQ),
          oQ = QQ.state.doc.lineAt(qQ ? qQ.posAtEnd : FQ),
          DQ = qQ ? qQ.posAtStart : oQ.from,
          kQ = qQ ? qQ.posAtEnd : oQ.to;
        return kQ < QQ.state.doc.length && kQ == oQ.to && kQ++, LQ.j.range(DQ, kQ)
      }
    }
    ML.scroll = QQ => {
      QQ.inputState.lastScrollTop = QQ.scrollDOM.scrollTop, QQ.inputState.lastScrollLeft = QQ.scrollDOM.scrollLeft
    }, ML.wheel = ML.mousewheel = QQ => {
      QQ.inputState.lastWheelEvent = Date.now()
    }, eL.keydown = (QQ, FQ) => (QQ.inputState.setSelectionOrigin("select"), 27 == FQ.keyCode && 0 != QQ.inputState.tabFocusMode && (QQ.inputState.tabFocusMode = Date.now() + 2e3), !1), ML.touchstart = (QQ, FQ) => {
      let wQ = QQ.inputState,
        LQ = FQ.targetTouches[0];
      wQ.lastTouchTime = Date.now(), LQ && (wQ.lastTouchX = LQ.clientX, wQ.lastTouchY = LQ.clientY), wQ.setSelectionOrigin("select.pointer")
    }, ML.touchmove = QQ => {
      QQ.inputState.setSelectionOrigin("select.pointer")
    }, eL.mousedown = (QQ, FQ) => {
      if (QQ.observer.flush(), QQ.inputState.lastTouchTime > Date.now() - 2e3) return !1;
      let wQ = null;
      for (let LQ of QQ.state.facet(UF))
        if (wQ = LQ(QQ, FQ), wQ) break;
      if (wQ || 0 != FQ.button || (wQ = function(QQ, FQ) {
          let wQ = QQ.posAndSideAtCoords({
              x: FQ.clientX,
              y: FQ.clientY
            }, !1),
            qQ = OL(FQ),
            oQ = QQ.state.selection;
          return {
            update(QQ) {
              QQ.docChanged && (wQ.pos = QQ.changes.mapPos(wQ.pos), oQ = oQ.map(QQ.changes))
            },
            get(FQ, DQ, kQ) {
              let vQ, mQ = QQ.posAndSideAtCoords({
                  x: FQ.clientX,
                  y: FQ.clientY
                }, !1),
                uQ = CL(QQ, mQ.pos, mQ.assoc, qQ);
              if (wQ.pos != mQ.pos && !DQ) {
                let FQ = CL(QQ, wQ.pos, wQ.assoc, qQ),
                  oQ = Math.min(FQ.from, uQ.from),
                  DQ = Math.max(FQ.to, uQ.to);
                uQ = oQ < uQ.from ? LQ.j.range(oQ, DQ, uQ.assoc) : LQ.j.range(DQ, oQ, uQ.assoc)
              }
              return DQ ? oQ.replaceRange(oQ.main.extend(uQ.from, uQ.to, uQ.assoc)) : kQ && 1 == qQ && oQ.PA.length > 1 && (vQ = function(QQ, FQ) {
                for (let wQ = 0; wQ < QQ.PA.length; wQ++) {
                  let {
                    from: qQ,
                    to: oQ
                  } = QQ.PA[wQ];
                  if (qQ <= FQ && oQ >= FQ) return LQ.j.create(QQ.PA.slice(0, wQ).concat(QQ.PA.slice(wQ + 1)), QQ.mainIndex == wQ ? 0 : QQ.mainIndex - (QQ.mainIndex > wQ ? 1 : 0))
                }
                return null
              }(oQ, mQ.pos)) ? vQ : kQ ? oQ.addRange(uQ) : LQ.j.create([uQ])
            }
          }
        }(QQ, FQ)), wQ) {
        let LQ = !QQ.hasFocus;
        QQ.inputState.startMouseSelection(new tL(QQ, FQ, wQ, LQ)), LQ && QQ.observer.ignore((() => {
          wF(QQ.contentDOM);
          let FQ = QQ.root.activeElement;
          FQ && !FQ.contains(QQ.contentDOM) && FQ.blur()
        }));
        let qQ = QQ.inputState.mouseSelection;
        if (qQ) return qQ.start(FQ), !1 === qQ.dragging
      } else QQ.inputState.setSelectionOrigin("select.pointer");
      return !1
    };
    const SL = SQ.ie && SQ.ie_version <= 11;
    let iL = null,
      WL = 0,
      RL = 0;

    function OL(QQ) {
      if (!SL) return QQ.detail;
      let FQ = iL,
        wQ = RL;
      return iL = QQ, RL = Date.now(), WL = !FQ || wQ > Date.now() - 400 && Math.abs(FQ.clientX - QQ.clientX) < 2 && Math.abs(FQ.clientY - QQ.clientY) < 2 ? (WL + 1) % 3 : 1
    }

    function sL(QQ, FQ, wQ, LQ) {
      if (!(wQ = pL(QQ.state, lF, wQ))) return;
      let qQ = QQ.posAtCoords({
          x: FQ.clientX,
          y: FQ.clientY
        }, !1),
        {
          draggedContent: oQ
        } = QQ.inputState,
        DQ = LQ && oQ && function(QQ, FQ) {
          let wQ = QQ.state.facet(IF);
          return wQ.length ? wQ[0](FQ) : SQ.mac ? !FQ.altKey : !FQ.ctrlKey
        }(QQ, FQ) ? {
          from: oQ.from,
          to: oQ.to
        } : null,
        kQ = {
          from: qQ,
          insert: wQ
        },
        vQ = QQ.state.changes(DQ ? [DQ, kQ] : kQ);
      QQ.focus(), QQ.dispatch({
        changes: vQ,
        selection: {
          anchor: vQ.mapPos(qQ, -1),
          head: vQ.mapPos(qQ, 1)
        },
        userEvent: DQ ? "move.drop" : "input.drop"
      }), QQ.inputState.draggedContent = null
    }
    eL.dragstart = (QQ, FQ) => {
      let {
        selection: {
          main: wQ
        }
      } = QQ.state;
      if (FQ.target.draggable) {
        let qQ = QQ.docView.tile.nearest(FQ.target);
        if (qQ && qQ.isWidget()) {
          let QQ = qQ.posAtStart,
            FQ = QQ + qQ.length;
          (QQ >= wQ.to || FQ <= wQ.from) && (wQ = LQ.j.range(QQ, FQ))
        }
      }
      let {
        inputState: qQ
      } = QQ;
      return qQ.mouseSelection && (qQ.mouseSelection.dragging = !0), qQ.draggedContent = wQ, FQ.dataTransfer && (FQ.dataTransfer.setData("Text", pL(QQ.state, jF, QQ.state.sliceDoc(wQ.from, wQ.to))), FQ.dataTransfer.effectAllowed = "copyMove"), !1
    }, eL.dragend = QQ => (QQ.inputState.draggedContent = null, !1), eL.drop = (QQ, FQ) => {
      if (!FQ.dataTransfer) return !1;
      if (QQ.state.readOnly) return !0;
      let wQ = FQ.dataTransfer.files;
      if (wQ && wQ.length) {
        let LQ = Array(wQ.length),
          qQ = 0,
          oQ = () => {
            ++qQ == wQ.length && sL(QQ, FQ, LQ.filter((QQ => null != QQ)).join(QQ.state.lineBreak), !1)
          };
        for (let QQ = 0; QQ < wQ.length; QQ++) {
          let FQ = new FileReader;
          FQ.onerror = oQ, FQ.onload = () => {
            /[\x00-\x08\x0e-\x1f]{2}/.test(FQ.result) || (LQ[QQ] = FQ.result), oQ()
          }, FQ.readAsText(wQ[QQ])
        }
        return !0
      } {
        let wQ = FQ.dataTransfer.getData("Text");
        if (wQ) return sL(QQ, FQ, wQ, !0), !0
      }
      return !1
    }, eL.paste = (QQ, FQ) => {
      if (QQ.state.readOnly) return !0;
      QQ.observer.flush();
      let wQ = GL ? null : FQ.clipboardData;
      return wQ ? (cL(QQ, wQ.getData("text/plain") || wQ.getData("text/uri-list")), !0) : (function(QQ) {
        let FQ = QQ.dom.parentNode;
        if (!FQ) return;
        let wQ = FQ.appendChild(document.createElement("textarea"));
        wQ.style.cssText = "position: fixed; left: -10000px; top: 10px", wQ.focus(), setTimeout((() => {
          QQ.focus(), wQ.remove(), cL(QQ, wQ.value)
        }), 50)
      }(QQ), !1)
    };
    let rL = null;
    eL.copy = eL.cut = (QQ, FQ) => {
      if (!fQ(QQ.contentDOM, QQ.observer.selectionRange)) return !1;
      let {
        text: wQ,
        PA: LQ,
        linewise: qQ
      } = function(QQ) {
        let FQ = [],
          wQ = [],
          LQ = !1;
        for (let qQ of QQ.selection.PA) qQ.empty || (FQ.push(QQ.sliceDoc(qQ.from, qQ.to)), wQ.push(qQ));
        if (!FQ.length) {
          let qQ = -1;
          for (let {
              from: LQ
            }
            of QQ.selection.PA) {
            let oQ = QQ.doc.lineAt(LQ);
            oQ.number > qQ && (FQ.push(oQ.text), wQ.push({
              from: oQ.from,
              to: Math.min(QQ.doc.length, oQ.to + 1)
            })), qQ = oQ.number
          }
          LQ = !0
        }
        return {
          text: pL(QQ, jF, FQ.join(QQ.lineBreak)),
          PA: wQ,
          linewise: LQ
        }
      }(QQ.state);
      if (!wQ && !qQ) return !1;
      rL = qQ ? wQ : null, "cut" != FQ.type || QQ.state.readOnly || QQ.dispatch({
        changes: LQ,
        scrollIntoView: !0,
        userEvent: "delete.cut"
      });
      let oQ = GL ? null : FQ.clipboardData;
      return oQ ? (oQ.clearData(), oQ.setData("text/plain", wQ), !0) : (function(QQ, FQ) {
        let wQ = QQ.dom.parentNode;
        if (!wQ) return;
        let LQ = wQ.appendChild(document.createElement("textarea"));
        LQ.style.cssText = "position: fixed; left: -10000px; top: 10px", LQ.value = FQ, LQ.focus(), LQ.selectionEnd = FQ.length, LQ.selectionStart = 0, setTimeout((() => {
          LQ.remove(), QQ.focus()
        }), 50)
      }(QQ, wQ), !1)
    };
    const IL = LQ.d.define();

    function UL(QQ, FQ) {
      let wQ = [];
      for (let LQ of QQ.facet(zF)) {
        let qQ = LQ(QQ, FQ);
        qQ && wQ.push(qQ)
      }
      return wQ.length ? QQ.update({
        effects: wQ,
        annotations: IL.of(!0)
      }) : null
    }

    function NL(QQ) {
      setTimeout((() => {
        let FQ = QQ.hasFocus;
        if (FQ != QQ.inputState.notifiedFocused) {
          let wQ = UL(QQ.state, FQ);
          wQ ? QQ.dispatch(wQ) : QQ.update([])
        }
      }), 10)
    }
    ML.focus = QQ => {
      QQ.inputState.lastFocusTime = Date.now(), QQ.scrollDOM.scrollTop || !QQ.inputState.lastScrollTop && !QQ.inputState.lastScrollLeft || (QQ.scrollDOM.scrollTop = QQ.inputState.lastScrollTop, QQ.scrollDOM.scrollLeft = QQ.inputState.lastScrollLeft), NL(QQ)
    }, ML.blur = QQ => {
      QQ.observer.clearSelectionRange(), NL(QQ)
    }, ML.compositionstart = ML.compositionupdate = QQ => {
      QQ.observer.editContext || (null == QQ.inputState.compositionFirstChange && (QQ.inputState.compositionFirstChange = !0), QQ.inputState.composing < 0 && (QQ.inputState.composing = 0))
    }, ML.compositionend = QQ => {
      QQ.observer.editContext || (QQ.inputState.composing = -1, QQ.inputState.compositionEndedAt = Date.now(), QQ.inputState.compositionPendingKey = !0, QQ.inputState.compositionPendingChange = QQ.observer.pendingRecords().length > 0, QQ.inputState.compositionFirstChange = null, SQ.chrome && SQ.android ? QQ.observer.flushSoon() : QQ.inputState.compositionPendingChange ? Promise.resolve().then((() => QQ.observer.flush())) : setTimeout((() => {
        QQ.inputState.composing < 0 && QQ.docView.hasComposition && QQ.update([])
      }), 50))
    }, ML.contextmenu = QQ => {
      QQ.inputState.lastContextMenu = Date.now()
    }, eL.beforeinput = (QQ, FQ) => {
      var wQ, LQ;
      if ("insertText" != FQ.inputType && "insertCompositionText" != FQ.inputType || (QQ.inputState.insertingText = FQ.data, QQ.inputState.insertingTextAt = Date.now()), "insertReplacementText" == FQ.inputType && QQ.observer.editContext) {
        let LQ = null === (wQ = FQ.dataTransfer) || void 0 === wQ ? void 0 : wQ.getData("text/plain"),
          qQ = FQ.getTargetRanges();
        if (LQ && qQ.length) {
          let FQ = qQ[0],
            wQ = QQ.posAtDOM(FQ.startContainer, FQ.startOffset),
            oQ = QQ.posAtDOM(FQ.endContainer, FQ.endOffset);
          return DL(QQ, {
            from: wQ,
            to: oQ,
            insert: QQ.state.toText(LQ)
          }, null), !0
        }
      }
      let qQ;
      if (SQ.chrome && SQ.android && (qQ = bL.find((QQ => QQ.inputType == FQ.inputType))) && (QQ.observer.delayAndroidKey(qQ.key, qQ.keyCode), "Backspace" == qQ.key || "Delete" == qQ.key)) {
        let FQ = (null === (LQ = window.visualViewport) || void 0 === LQ ? void 0 : LQ.height) || 0;
        setTimeout((() => {
          var wQ;
          ((null === (wQ = window.visualViewport) || void 0 === wQ ? void 0 : wQ.height) || 0) > FQ + 10 && QQ.hasFocus && (QQ.contentDOM.blur(), QQ.focus())
        }), 100)
      }
      return SQ.ios && "deleteContentForward" == FQ.inputType && QQ.observer.flushSoon(), SQ.safari && "insertText" == FQ.inputType && QQ.inputState.composing >= 0 && setTimeout((() => ML.compositionend(QQ, FQ)), 20), !1
    };
    const TL = new Set;
    const KL = ["pre-wrap", "normal", "pre-line", "break-spaces"];
    let zL = !1;

    function lL() {
      zL = !1
    }
    class jL {
      constructor(QQ) {
        this.lineWrapping = QQ, this.doc = LQ.P.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30
      }
      heightForGap(QQ, FQ) {
        let wQ = this.doc.lineAt(FQ).number - this.doc.lineAt(QQ).number + 1;
        return this.lineWrapping && (wQ += Math.max(0, Math.ceil((FQ - QQ - wQ * this.lineLength * .5) / this.lineLength))), this.lineHeight * wQ
      }
      heightForLine(QQ) {
        if (!this.lineWrapping) return this.lineHeight;
        return (1 + Math.max(0, Math.ceil((QQ - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight
      }
      setDoc(QQ) {
        return this.doc = QQ, this
      }
      mustRefreshForWrapping(QQ) {
        return KL.indexOf(QQ) > -1 != this.lineWrapping
      }
      mustRefreshForHeights(QQ) {
        let FQ = !1;
        for (let wQ = 0; wQ < QQ.length; wQ++) {
          let LQ = QQ[wQ];
          LQ < 0 ? wQ++ : this.heightSamples[Math.floor(10 * LQ)] || (FQ = !0, this.heightSamples[Math.floor(10 * LQ)] = !0)
        }
        return FQ
      }
      refresh(QQ, FQ, wQ, LQ, qQ, oQ) {
        let DQ = KL.indexOf(QQ) > -1,
          kQ = Math.abs(FQ - this.lineHeight) > .3 || this.lineWrapping != DQ || Math.abs(wQ - this.charWidth) > .1;
        if (this.lineWrapping = DQ, this.lineHeight = FQ, this.charWidth = wQ, this.textHeight = LQ, this.lineLength = qQ, kQ) {
          this.heightSamples = {};
          for (let QQ = 0; QQ < oQ.length; QQ++) {
            let FQ = oQ[QQ];
            FQ < 0 ? QQ++ : this.heightSamples[Math.floor(10 * FQ)] = !0
          }
        }
        return kQ
      }
    }
    class aL {
      constructor(QQ, FQ) {
        this.from = QQ, this.heights = FQ, this.index = 0
      }
      get more() {
        return this.index < this.heights.length
      }
    }
    class XL {
      constructor(QQ, FQ, wQ, LQ, qQ) {
        this.from = QQ, this.length = FQ, this.top = wQ, this.height = LQ, this._content = qQ
      }
      get type() {
        return "number" == typeof this._content ? IQ.Text : Array.isArray(this._content) ? this._content : this._content.type
      }
      get to() {
        return this.from + this.length
      }
      get bottom() {
        return this.top + this.height
      }
      get widget() {
        return this._content instanceof KQ ? this._content.widget : null
      }
      get widgetLineBreaks() {
        return "number" == typeof this._content ? this._content : 0
      }
      join(QQ) {
        let FQ = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(QQ._content) ? QQ._content : [QQ]);
        return new XL(this.from, this.length + QQ.length, this.top, this.height + QQ.height, FQ)
      }
    }
    var fL = function(QQ) {
      return QQ[QQ.ByPos = 0] = "ByPos", QQ[QQ.ByHeight = 1] = "ByHeight", QQ[QQ.ByPosNoHeight = 2] = "ByPosNoHeight", QQ
    }(fL || (fL = {}));
    const VL = .001;
    class hL {
      constructor(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.length = QQ, this.height = FQ, this.flags = wQ
      }
      get outdated() {
        return (2 & this.flags) > 0
      }
      set outdated(QQ) {
        this.flags = (QQ ? 2 : 0) | -3 & this.flags
      }
      setHeight(QQ) {
        this.height != QQ && (Math.abs(this.height - QQ) > VL && (zL = !0), this.height = QQ)
      }
      replace(QQ, FQ, wQ) {
        return hL.of(wQ)
      }
      decomposeLeft(QQ, FQ) {
        FQ.push(this)
      }
      decomposeRight(QQ, FQ) {
        FQ.push(this)
      }
      applyChanges(QQ, FQ, wQ, LQ) {
        let qQ = this,
          oQ = wQ.doc;
        for (let DQ = LQ.length - 1; DQ >= 0; DQ--) {
          let {
            fromA: kQ,
            toA: vQ,
            fromB: mQ,
            toB: uQ
          } = LQ[DQ], HQ = qQ.lineAt(kQ, fL.ByPosNoHeight, wQ.setDoc(FQ), 0, 0), bQ = HQ.to >= vQ ? HQ : qQ.lineAt(vQ, fL.ByPosNoHeight, wQ, 0, 0);
          for (uQ += bQ.to - vQ, vQ = bQ.to; DQ > 0 && HQ.from <= LQ[DQ - 1].toA;) kQ = LQ[DQ - 1].fromA, mQ = LQ[DQ - 1].fromB, DQ--, kQ < HQ.from && (HQ = qQ.lineAt(kQ, fL.ByPosNoHeight, wQ, 0, 0));
          mQ += HQ.from - kQ, kQ = HQ.from;
          let YQ = BL.build(wQ.setDoc(oQ), QQ, mQ, uQ);
          qQ = JL(qQ, qQ.replace(kQ, vQ, YQ))
        }
        return qQ.updateHeight(wQ, 0)
      }
      static empty() {
        return new gL(0, 0, 0)
      }
      static of (QQ) {
        if (1 == QQ.length) return QQ[0];
        let FQ = 0,
          wQ = QQ.length,
          LQ = 0,
          qQ = 0;
        for (;;)
          if (FQ == wQ)
            if (LQ > 2 * qQ) {
              let qQ = QQ[FQ - 1];
              qQ.break ? QQ.splice(--FQ, 1, qQ.left, null, qQ.right) : QQ.splice(--FQ, 1, qQ.left, qQ.right), wQ += 1 + qQ.break, LQ -= qQ.size
            } else {
              if (!(qQ > 2 * LQ)) break;
              {
                let FQ = QQ[wQ];
                FQ.break ? QQ.splice(wQ, 1, FQ.left, null, FQ.right) : QQ.splice(wQ, 1, FQ.left, FQ.right), wQ += 2 + FQ.break, qQ -= FQ.size
              }
            }
        else if (LQ < qQ) {
          let wQ = QQ[FQ++];
          wQ && (LQ += wQ.size)
        } else {
          let FQ = QQ[--wQ];
          FQ && (qQ += FQ.size)
        }
        let oQ = 0;
        return null == QQ[FQ - 1] ? (oQ = 1, FQ--) : null == QQ[FQ] && (oQ = 1, wQ++), new ZL(hL.of(QQ.slice(0, FQ)), oQ, hL.of(QQ.slice(wQ)))
      }
    }

    function JL(QQ, FQ) {
      return QQ == FQ ? QQ : (QQ.constructor != FQ.constructor && (zL = !0), FQ)
    }
    hL.prototype.size = 1;
    const EL = UQ.replace({});
    class nL extends hL {
      constructor(QQ, FQ, wQ) {
        super(QQ, FQ), this.deco = wQ, this.spaceAbove = 0
      }
      mainBlock(QQ, FQ) {
        return new XL(FQ, this.length, QQ + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0)
      }
      blockAt(QQ, FQ, wQ, LQ) {
        return this.spaceAbove && QQ < wQ + this.spaceAbove ? new XL(LQ, 0, wQ, this.spaceAbove, EL) : this.mainBlock(wQ, LQ)
      }
      lineAt(QQ, FQ, wQ, LQ, qQ) {
        let oQ = this.mainBlock(LQ, qQ);
        return this.spaceAbove ? this.blockAt(0, wQ, LQ, qQ).join(oQ) : oQ
      }
      forEachLine(QQ, FQ, wQ, LQ, qQ, oQ) {
        QQ <= qQ + this.length && FQ >= qQ && oQ(this.lineAt(0, fL.ByPos, wQ, LQ, qQ))
      }
      setMeasuredHeight(QQ) {
        let FQ = QQ.heights[QQ.index++];
        FQ < 0 ? (this.spaceAbove = -FQ, FQ = QQ.heights[QQ.index++]) : this.spaceAbove = 0, this.setHeight(FQ)
      }
      updateHeight(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wQ = arguments.length > 3 ? arguments[3] : void 0;
        return wQ && wQ.from <= FQ && wQ.more && this.setMeasuredHeight(wQ), this.outdated = !1, this
      }
      toString() {
        return `block(${this.length})`
      }
    }
    class gL extends nL {
      constructor(QQ, FQ, wQ) {
        super(QQ, FQ, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = wQ
      }
      mainBlock(QQ, FQ) {
        return new XL(FQ, this.length, QQ + this.spaceAbove, this.height - this.spaceAbove, this.breaks)
      }
      replace(QQ, FQ, wQ) {
        let LQ = wQ[0];
        return 1 == wQ.length && (LQ instanceof gL || LQ instanceof PL && 4 & LQ.flags) && Math.abs(this.length - LQ.length) < 10 ? (LQ instanceof PL ? LQ = new gL(LQ.length, this.height, this.spaceAbove) : LQ.height = this.height, this.outdated || (LQ.outdated = !1), LQ) : hL.of(wQ)
      }
      updateHeight(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          LQ = arguments.length > 3 ? arguments[3] : void 0;
        return LQ && LQ.from <= FQ && LQ.more ? this.setMeasuredHeight(LQ) : (wQ || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, QQ.heightForLine(this.length - this.collapsed)) + this.breaks * QQ.lineHeight)), this.outdated = !1, this
      }
      toString() {
        return `line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`
      }
    }
    class PL extends hL {
      constructor(QQ) {
        super(QQ, 0)
      }
      heightMetrics(QQ, FQ) {
        let wQ, LQ = QQ.doc.lineAt(FQ).number,
          qQ = QQ.doc.lineAt(FQ + this.length).number,
          oQ = qQ - LQ + 1,
          DQ = 0;
        if (QQ.lineWrapping) {
          let FQ = Math.min(this.height, QQ.lineHeight * oQ);
          wQ = FQ / oQ, this.length > oQ + 1 && (DQ = (this.height - FQ) / (this.length - oQ - 1))
        } else wQ = this.height / oQ;
        return {
          firstLine: LQ,
          lastLine: qQ,
          perLine: wQ,
          perChar: DQ
        }
      }
      blockAt(QQ, FQ, wQ, LQ) {
        let {
          firstLine: qQ,
          lastLine: oQ,
          perLine: DQ,
          perChar: kQ
        } = this.heightMetrics(FQ, LQ);
        if (FQ.lineWrapping) {
          let qQ = LQ + (QQ < FQ.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (QQ - wQ) / this.height)) * this.length)),
            oQ = FQ.doc.lineAt(qQ),
            vQ = DQ + oQ.length * kQ,
            mQ = Math.max(wQ, QQ - vQ / 2);
          return new XL(oQ.from, oQ.length, mQ, vQ, 0)
        } {
          let LQ = Math.max(0, Math.min(oQ - qQ, Math.floor((QQ - wQ) / DQ))),
            {
              from: kQ,
              length: vQ
            } = FQ.doc.line(qQ + LQ);
          return new XL(kQ, vQ, wQ + DQ * LQ, DQ, 0)
        }
      }
      lineAt(QQ, FQ, wQ, LQ, qQ) {
        if (FQ == fL.ByHeight) return this.blockAt(QQ, wQ, LQ, qQ);
        if (FQ == fL.ByPosNoHeight) {
          let {
            from: FQ,
            to: LQ
          } = wQ.doc.lineAt(QQ);
          return new XL(FQ, LQ - FQ, 0, 0, 0)
        }
        let {
          firstLine: oQ,
          perLine: DQ,
          perChar: kQ
        } = this.heightMetrics(wQ, qQ), vQ = wQ.doc.lineAt(QQ), mQ = DQ + vQ.length * kQ, uQ = vQ.number - oQ, HQ = LQ + DQ * uQ + kQ * (vQ.from - qQ - uQ);
        return new XL(vQ.from, vQ.length, Math.max(LQ, Math.min(HQ, LQ + this.height - mQ)), mQ, 0)
      }
      forEachLine(QQ, FQ, wQ, LQ, qQ, oQ) {
        QQ = Math.max(QQ, qQ), FQ = Math.min(FQ, qQ + this.length);
        let {
          firstLine: DQ,
          perLine: kQ,
          perChar: vQ
        } = this.heightMetrics(wQ, qQ);
        for (let mQ = QQ, uQ = LQ; mQ <= FQ;) {
          let FQ = wQ.doc.lineAt(mQ);
          if (mQ == QQ) {
            let wQ = FQ.number - DQ;
            uQ += kQ * wQ + vQ * (QQ - qQ - wQ)
          }
          let LQ = kQ + vQ * FQ.length;
          oQ(new XL(FQ.from, FQ.length, uQ, LQ, 0)), uQ += LQ, mQ = FQ.to + 1
        }
      }
      replace(QQ, FQ, wQ) {
        let LQ = this.length - FQ;
        if (LQ > 0) {
          let QQ = wQ[wQ.length - 1];
          QQ instanceof PL ? wQ[wQ.length - 1] = new PL(QQ.length + LQ) : wQ.push(null, new PL(LQ - 1))
        }
        if (QQ > 0) {
          let FQ = wQ[0];
          FQ instanceof PL ? wQ[0] = new PL(QQ + FQ.length) : wQ.unshift(new PL(QQ - 1), null)
        }
        return hL.of(wQ)
      }
      decomposeLeft(QQ, FQ) {
        FQ.push(new PL(QQ - 1), null)
      }
      decomposeRight(QQ, FQ) {
        FQ.push(null, new PL(this.length - QQ - 1))
      }
      updateHeight(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          LQ = arguments.length > 3 ? arguments[3] : void 0,
          qQ = FQ + this.length;
        if (LQ && LQ.from <= FQ + this.length && LQ.more) {
          let wQ = [],
            oQ = Math.max(FQ, LQ.from),
            DQ = -1;
          for (LQ.from > FQ && wQ.push(new PL(LQ.from - FQ - 1).updateHeight(QQ, FQ)); oQ <= qQ && LQ.more;) {
            let FQ = QQ.doc.lineAt(oQ).length;
            wQ.length && wQ.push(null);
            let qQ = LQ.heights[LQ.index++],
              kQ = 0;
            qQ < 0 && (kQ = -qQ, qQ = LQ.heights[LQ.index++]), -1 == DQ ? DQ = qQ : Math.abs(qQ - DQ) >= VL && (DQ = -2);
            let vQ = new gL(FQ, qQ, kQ);
            vQ.outdated = !1, wQ.push(vQ), oQ += FQ + 1
          }
          oQ <= qQ && wQ.push(null, new PL(qQ - oQ).updateHeight(QQ, oQ));
          let kQ = hL.of(wQ);
          return (DQ < 0 || Math.abs(kQ.height - this.height) >= VL || Math.abs(DQ - this.heightMetrics(QQ, FQ).perLine) >= VL) && (zL = !0), JL(this, kQ)
        }
        return (wQ || this.outdated) && (this.setHeight(QQ.heightForGap(FQ, FQ + this.length)), this.outdated = !1), this
      }
      toString() {
        return `gap(${this.length})`
      }
    }
    class ZL extends hL {
      constructor(QQ, FQ, wQ) {
        super(QQ.length + FQ + wQ.length, QQ.height + wQ.height, FQ | (QQ.outdated || wQ.outdated ? 2 : 0)), this.left = QQ, this.right = wQ, this.size = QQ.size + wQ.size
      }
      get break() {
        return 1 & this.flags
      }
      blockAt(QQ, FQ, wQ, LQ) {
        let qQ = wQ + this.left.height;
        return QQ < qQ ? this.left.blockAt(QQ, FQ, wQ, LQ) : this.right.blockAt(QQ, FQ, qQ, LQ + this.left.length + this.break)
      }
      lineAt(QQ, FQ, wQ, LQ, qQ) {
        let oQ = LQ + this.left.height,
          DQ = qQ + this.left.length + this.break,
          kQ = FQ == fL.ByHeight ? QQ < oQ : QQ < DQ,
          vQ = kQ ? this.left.lineAt(QQ, FQ, wQ, LQ, qQ) : this.right.lineAt(QQ, FQ, wQ, oQ, DQ);
        if (this.break || (kQ ? vQ.to < DQ : vQ.from > DQ)) return vQ;
        let mQ = FQ == fL.ByPosNoHeight ? fL.ByPosNoHeight : fL.ByPos;
        return kQ ? vQ.join(this.right.lineAt(DQ, mQ, wQ, oQ, DQ)) : this.left.lineAt(DQ, mQ, wQ, LQ, qQ).join(vQ)
      }
      forEachLine(QQ, FQ, wQ, LQ, qQ, oQ) {
        let DQ = LQ + this.left.height,
          kQ = qQ + this.left.length + this.break;
        if (this.break) QQ < kQ && this.left.forEachLine(QQ, FQ, wQ, LQ, qQ, oQ), FQ >= kQ && this.right.forEachLine(QQ, FQ, wQ, DQ, kQ, oQ);
        else {
          let vQ = this.lineAt(kQ, fL.ByPos, wQ, LQ, qQ);
          QQ < vQ.from && this.left.forEachLine(QQ, vQ.from - 1, wQ, LQ, qQ, oQ), vQ.to >= QQ && vQ.from <= FQ && oQ(vQ), FQ > vQ.to && this.right.forEachLine(vQ.to + 1, FQ, wQ, DQ, kQ, oQ)
        }
      }
      replace(QQ, FQ, wQ) {
        let LQ = this.left.length + this.break;
        if (FQ < LQ) return this.balanced(this.left.replace(QQ, FQ, wQ), this.right);
        if (QQ > this.left.length) return this.balanced(this.left, this.right.replace(QQ - LQ, FQ - LQ, wQ));
        let qQ = [];
        QQ > 0 && this.decomposeLeft(QQ, qQ);
        let oQ = qQ.length;
        for (let DQ of wQ) qQ.push(DQ);
        if (QQ > 0 && yL(qQ, oQ - 1), FQ < this.length) {
          let QQ = qQ.length;
          this.decomposeRight(FQ, qQ), yL(qQ, QQ)
        }
        return hL.of(qQ)
      }
      decomposeLeft(QQ, FQ) {
        let wQ = this.left.length;
        if (QQ <= wQ) return this.left.decomposeLeft(QQ, FQ);
        FQ.push(this.left), this.break && (wQ++, QQ >= wQ && FQ.push(null)), QQ > wQ && this.right.decomposeLeft(QQ - wQ, FQ)
      }
      decomposeRight(QQ, FQ) {
        let wQ = this.left.length,
          LQ = wQ + this.break;
        if (QQ >= LQ) return this.right.decomposeRight(QQ - LQ, FQ);
        QQ < wQ && this.left.decomposeRight(QQ, FQ), this.break && QQ < LQ && FQ.push(null), FQ.push(this.right)
      }
      balanced(QQ, FQ) {
        return QQ.size > 2 * FQ.size || FQ.size > 2 * QQ.size ? hL.of(this.break ? [QQ, null, FQ] : [QQ, FQ]) : (this.left = JL(this.left, QQ), this.right = JL(this.right, FQ), this.setHeight(QQ.height + FQ.height), this.outdated = QQ.outdated || FQ.outdated, this.size = QQ.size + FQ.size, this.length = QQ.length + this.break+FQ.length, this)
      }
      updateHeight(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          LQ = arguments.length > 3 ? arguments[3] : void 0,
          {
            left: qQ,
            right: oQ
          } = this,
          DQ = FQ + qQ.length + this.break,
          kQ = null;
        return LQ && LQ.from <= FQ + qQ.length && LQ.more ? kQ = qQ = qQ.updateHeight(QQ, FQ, wQ, LQ) : qQ.updateHeight(QQ, FQ, wQ), LQ && LQ.from <= DQ + oQ.length && LQ.more ? kQ = oQ = oQ.updateHeight(QQ, DQ, wQ, LQ) : oQ.updateHeight(QQ, DQ, wQ), kQ ? this.balanced(qQ, oQ) : (this.height = this.left.height + this.right.height, this.outdated = !1, this)
      }
      toString() {
        return this.left + (this.break ? " " : "-") + this.right
      }
    }

    function yL(QQ, FQ) {
      let wQ, LQ;
      null == QQ[FQ] && (wQ = QQ[FQ - 1]) instanceof PL && (LQ = QQ[FQ + 1]) instanceof PL && QQ.splice(FQ - 1, 3, new PL(wQ.length + 1 + LQ.length))
    }
    class BL {
      constructor(QQ, FQ) {
        this.pos = QQ, this.oracle = FQ, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = QQ
      }
      get isCovered() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering
      }
      span(QQ, FQ) {
        if (this.lineStart > -1) {
          let QQ = Math.min(FQ, this.lineEnd),
            wQ = this.nodes[this.nodes.length - 1];
          wQ instanceof gL ? wQ.length += QQ - this.pos : (QQ > this.pos || !this.isCovered) && this.nodes.push(new gL(QQ - this.pos, -1, 0)), this.writtenTo = QQ, FQ > QQ && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1)
        }
        this.pos = FQ
      }
      point(QQ, FQ, wQ) {
        if (QQ < FQ || wQ.heightRelevant) {
          let LQ = wQ.widget ? wQ.widget.estimatedHeight : 0,
            qQ = wQ.widget ? wQ.widget.lineBreaks : 0;
          LQ < 0 && (LQ = this.oracle.lineHeight);
          let oQ = FQ - QQ;
          wQ.block ? this.WFQ(new nL(oQ, LQ, wQ)) : (oQ || qQ || LQ >= 5) && this.addLineDeco(LQ, qQ, oQ)
        } else FQ > QQ && this.span(QQ, FQ);
        this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
      }
      enterLine() {
        if (this.lineStart > -1) return;
        let {
          from: QQ,
          to: FQ
        } = this.oracle.doc.lineAt(this.pos);
        this.lineStart = QQ, this.lineEnd = FQ, this.writtenTo < QQ && ((this.writtenTo < QQ - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, QQ - 1)), this.nodes.push(null)), this.pos > QQ && this.nodes.push(new gL(this.pos - QQ, -1, 0)), this.writtenTo = this.pos
      }
      blankContent(QQ, FQ) {
        let wQ = new PL(FQ - QQ);
        return this.oracle.doc.lineAt(QQ).to == FQ && (wQ.flags |= 4), wQ
      }
      ensureLine() {
        this.enterLine();
        let QQ = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (QQ instanceof gL) return QQ;
        let FQ = new gL(0, -1, 0);
        return this.nodes.push(FQ), FQ
      }
      WFQ(QQ) {
        this.enterLine();
        let FQ = QQ.deco;
        FQ && FQ.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(QQ), this.writtenTo = this.pos = this.pos + QQ.length, FQ && FQ.endSide > 0 && (this.covering = QQ)
      }
      addLineDeco(QQ, FQ, wQ) {
        let LQ = this.ensureLine();
        LQ.length += wQ, LQ.collapsed += wQ, LQ.widgetHeight = Math.max(LQ.widgetHeight, QQ), LQ.breaks += FQ, this.writtenTo = this.pos = this.pos + wQ
      }
      finish(QQ) {
        let FQ = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
        !(this.lineStart > -1) || FQ instanceof gL || this.isCovered ? (this.writtenTo < this.pos || null == FQ) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new gL(0, -1, 0));
        let wQ = QQ;
        for (let LQ of this.nodes) LQ instanceof gL && LQ.updateHeight(this.oracle, wQ), wQ += LQ ? LQ.length : 1;
        return this.nodes
      }
      static build(QQ, FQ, wQ, qQ) {
        let oQ = new BL(wQ, QQ);
        return LQ.B.spans(FQ, wQ, qQ, oQ, 0), oQ.finish(wQ)
      }
    }
    class dL {
      constructor() {
        this.changes = []
      }
      compareRange() {}
      comparePoint(QQ, FQ, wQ, LQ) {
        (QQ < FQ || wQ && wQ.heightRelevant || LQ && LQ.heightRelevant) && lQ(QQ, FQ, this.changes, 5)
      }
    }

    function Qq(QQ, FQ) {
      let wQ = QQ.getBoundingClientRect(),
        LQ = QQ.ownerDocument,
        qQ = LQ.defaultView || window,
        oQ = Math.max(0, wQ.left),
        DQ = Math.min(qQ.innerWidth, wQ.right),
        kQ = Math.max(0, wQ.top),
        vQ = Math.min(qQ.innerHeight, wQ.bottom);
      for (let mQ = QQ.parentNode; mQ && mQ != LQ.body;)
        if (1 == mQ.nodeType) {
          let FQ = mQ,
            wQ = window.getComputedStyle(FQ);
          if ((FQ.scrollHeight > FQ.clientHeight || FQ.scrollWidth > FQ.clientWidth) && "visible" != wQ.overflow) {
            let wQ = FQ.getBoundingClientRect();
            oQ = Math.max(oQ, wQ.left), DQ = Math.min(DQ, wQ.right), kQ = Math.max(kQ, wQ.top), vQ = Math.min(mQ == QQ.parentNode ? qQ.innerHeight : vQ, wQ.bottom)
          }
          mQ = "absolute" == wQ.position || "fixed" == wQ.position ? FQ.offsetParent : FQ.parentNode
        } else {
          if (11 != mQ.nodeType) break;
          mQ = mQ.host
        } return {
        left: oQ - wQ.left,
        right: Math.max(oQ, DQ) - wQ.left,
        top: kQ - (wQ.top + FQ),
        bottom: Math.max(kQ, vQ) - (wQ.top + FQ)
      }
    }

    function Fq(QQ, FQ) {
      let wQ = QQ.getBoundingClientRect();
      return {
        left: 0,
        right: wQ.right - wQ.left,
        top: FQ,
        bottom: wQ.bottom - (wQ.top + FQ)
      }
    }
    class wq {
      constructor(QQ, FQ, wQ, LQ) {
        this.from = QQ, this.to = FQ, this.size = wQ, this.displaySize = LQ
      }
      static same(QQ, FQ) {
        if (QQ.length != FQ.length) return !1;
        for (let wQ = 0; wQ < QQ.length; wQ++) {
          let LQ = QQ[wQ],
            qQ = FQ[wQ];
          if (LQ.from != qQ.from || LQ.to != qQ.to || LQ.size != qQ.size) return !1
        }
        return !0
      }
      draw(QQ, FQ) {
        return UQ.replace({
          widget: new Lq(this.displaySize * (FQ ? QQ.scaleY : QQ.scaleX), FQ)
        }).range(this.from, this.to)
      }
    }
    class Lq extends rQ {
      constructor(QQ, FQ) {
        super(), this.size = QQ, this.vertical = FQ
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
      constructor(QQ, FQ) {
        this.view = QQ, this.state = FQ, this.pixelViewport = {
          left: 0,
          right: window.innerWidth,
          top: 0,
          bottom: 0
        }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = vq, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = mF.LTR, this.B5 = [], this.mustEnforceCursorAssoc = !1;
        let wQ = FQ.facet(dF).some((QQ => "function" != typeof QQ && "cm-lineWrapping" == QQ.class));
        this.heightOracle = new jL(wQ), this.stateDeco = mq(FQ), this.heightMap = hL.empty().applyChanges(this.stateDeco, LQ.P.empty, this.heightOracle.setDoc(FQ.doc), [new mw(0, 0, 0, FQ.doc.length)]);
        for (let LQ = 0; LQ < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); LQ++);
        this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = UQ.set(this.lineGaps.map((QQ => QQ.draw(this, !1)))), this.scrollParent = QQ.scrollDOM, this.computeVisibleRanges()
      }
      updateForViewport() {
        let QQ = [this.viewport],
          {
            main: FQ
          } = this.state.selection;
        for (let wQ = 0; wQ <= 1; wQ++) {
          let LQ = wQ ? FQ.head : FQ.anchor;
          if (!QQ.some((QQ => {
              let {
                from: FQ,
                to: wQ
              } = QQ;
              return LQ >= FQ && LQ <= wQ
            }))) {
            let {
              from: FQ,
              to: wQ
            } = this.lineBlockAt(LQ);
            QQ.push(new oq(FQ, wQ))
          }
        }
        return this.viewports = QQ.sort(((QQ, FQ) => QQ.from - FQ.from)), this.updateScaler()
      }
      updateScaler() {
        let QQ = this.scaler;
        return this.scaler = this.heightMap.height <= 7e6 ? vq : new uq(this.heightOracle, this.heightMap, this.viewports), QQ.eq(this.scaler) ? 0 : 2
      }
      updateViewportLines() {
        this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (QQ => {
          this.viewportLines.push(Hq(QQ, this.scaler))
        }))
      }
      update(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.state = QQ.state;
        let wQ = this.stateDeco;
        this.stateDeco = mq(this.state);
        let qQ = QQ.changedRanges,
          oQ = mw.extendWithRanges(qQ, function(QQ, FQ, wQ) {
            let qQ = new dL;
            return LQ.B.compare(QQ, FQ, wQ, qQ, 0), qQ.changes
          }(wQ, this.stateDeco, QQ ? QQ.changes : LQ.ChangeSet.empty(this.state.doc.length))),
          DQ = this.heightMap.height,
          kQ = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
        lL(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, QQ.startState.doc, this.heightOracle.setDoc(this.state.doc), oQ), (this.heightMap.height != DQ || zL) && (QQ.flags |= 2), kQ ? (this.scrollAnchorPos = QQ.changes.mapPos(kQ.from, -1), this.scrollAnchorHeight = kQ.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = DQ);
        let vQ = oQ.length ? this.mapViewport(this.viewport, QQ.changes) : this.viewport;
        (FQ && (FQ.range.head < vQ.from || FQ.range.head > vQ.to) || !this.viewportIsAppropriate(vQ)) && (vQ = this.getViewport(0, FQ));
        let mQ = vQ.from != this.viewport.from || vQ.to != this.viewport.to;
        this.viewport = vQ, QQ.flags |= this.updateForViewport(), (mQ || !QQ.changes.empty || 2 & QQ.flags) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, QQ.changes))), QQ.flags |= this.computeVisibleRanges(QQ.changes), FQ && (this.scrollTarget = FQ), !this.mustEnforceCursorAssoc && (QQ.selectionSet || QQ.focusChanged) && QQ.view.lineWrapping && QQ.state.selection.main.empty && QQ.state.selection.main.assoc && !QQ.state.facet(XF) && (this.mustEnforceCursorAssoc = !0)
      }
      measure() {
        let {
          view: QQ
        } = this, FQ = QQ.contentDOM, wQ = window.getComputedStyle(FQ), qQ = this.heightOracle, oQ = wQ.whiteSpace;
        this.defaultTextDirection = "rtl" == wQ.direction ? mF.RTL : mF.LTR;
        let DQ = this.heightOracle.mustRefreshForWrapping(oQ) || "refresh" === this.mustMeasureContent,
          kQ = FQ.getBoundingClientRect(),
          vQ = DQ || this.mustMeasureContent || this.contentDOMHeight != kQ.height;
        this.contentDOMHeight = kQ.height, this.mustMeasureContent = !1;
        let mQ = 0,
          uQ = 0;
        if (kQ.width && kQ.height) {
          let {
            scaleX: QQ,
            scaleY: wQ
          } = yQ(FQ, kQ);
          (QQ > .005 && Math.abs(this.scaleX - QQ) > .005 || wQ > .005 && Math.abs(this.scaleY - wQ) > .005) && (this.scaleX = QQ, this.scaleY = wQ, mQ |= 16, DQ = vQ = !0)
        }
        let HQ = (parseInt(wQ.paddingTop) || 0) * this.scaleY,
          bQ = (parseInt(wQ.paddingBottom) || 0) * this.scaleY;
        this.paddingTop == HQ && this.paddingBottom == bQ || (this.paddingTop = HQ, this.paddingBottom = bQ, mQ |= 18), this.editorWidth != QQ.scrollDOM.clientWidth && (qQ.lineWrapping && (vQ = !0), this.editorWidth = QQ.scrollDOM.clientWidth, mQ |= 16);
        let YQ = BQ(this.view.contentDOM, !1).y;
        YQ != this.scrollParent && (this.scrollParent = YQ, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
        let xQ = this.getScrollOffset();
        this.scrollOffset != xQ && (this.scrollAnchorHeight = -1, this.scrollOffset = xQ), this.scrolledToBottom = oF(this.scrollParent || QQ.win);
        let AQ = (this.printing ? Fq : Qq)(FQ, this.paddingTop),
          tQ = AQ.top - this.pixelViewport.top,
          eQ = AQ.bottom - this.pixelViewport.bottom;
        this.pixelViewport = AQ;
        let MQ = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
        if (MQ != this.inView && (this.inView = MQ, MQ && (vQ = !0)), !this.inView && !this.scrollTarget && ! function(QQ) {
            let FQ = QQ.getBoundingClientRect(),
              wQ = QQ.ownerDocument.defaultView || window;
            return FQ.left < wQ.innerWidth && FQ.right > 0 && FQ.top < wQ.innerHeight && FQ.bottom > 0
          }(QQ.dom)) return 0;
        let GQ = kQ.width;
        if (this.contentDOMWidth == GQ && this.editorHeight == QQ.scrollDOM.clientHeight || (this.contentDOMWidth = kQ.width, this.editorHeight = QQ.scrollDOM.clientHeight, mQ |= 16), vQ) {
          let FQ = QQ.docView.measureVisibleLineHeights(this.viewport);
          if (qQ.mustRefreshForHeights(FQ) && (DQ = !0), DQ || qQ.lineWrapping && Math.abs(GQ - this.contentDOMWidth) > qQ.charWidth) {
            let {
              lineHeight: wQ,
              charWidth: LQ,
              textHeight: kQ
            } = QQ.docView.measureTextSize();
            DQ = wQ > 0 && qQ.refresh(oQ, wQ, LQ, kQ, Math.max(5, GQ / LQ), FQ), DQ && (QQ.docView.minWidth = 0, mQ |= 16)
          }
          tQ > 0 && eQ > 0 ? uQ = Math.max(tQ, eQ) : tQ < 0 && eQ < 0 && (uQ = Math.min(tQ, eQ)), lL();
          for (let wQ of this.viewports) {
            let oQ = wQ.from == this.viewport.from ? FQ : QQ.docView.measureVisibleLineHeights(wQ);
            this.heightMap = (DQ ? hL.empty().applyChanges(this.stateDeco, LQ.P.empty, this.heightOracle, [new mw(0, 0, 0, QQ.state.doc.length)]) : this.heightMap).updateHeight(qQ, 0, DQ, new aL(wQ.from, oQ))
          }
          zL && (mQ |= 2)
        }
        let pQ = !this.viewportIsAppropriate(this.viewport, uQ) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
        return pQ && (2 & mQ && (mQ |= this.updateScaler()), this.viewport = this.getViewport(uQ, this.scrollTarget), mQ |= this.updateForViewport()), (2 & mQ || pQ) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(DQ ? [] : this.lineGaps, QQ)), mQ |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, QQ.docView.enforceCursorAssoc()), mQ
      }
      get visibleTop() {
        return this.scaler.fromDOM(this.pixelViewport.top)
      }
      get visibleBottom() {
        return this.scaler.fromDOM(this.pixelViewport.bottom)
      }
      getViewport(QQ, FQ) {
        let wQ = .5 - Math.max(-.5, Math.min(.5, QQ / 1e3 / 2)),
          LQ = this.heightMap,
          qQ = this.heightOracle,
          {
            visibleTop: oQ,
            visibleBottom: DQ
          } = this,
          kQ = new oq(LQ.lineAt(oQ - 1e3 * wQ, fL.ByHeight, qQ, 0, 0).from, LQ.lineAt(DQ + 1e3 * (1 - wQ), fL.ByHeight, qQ, 0, 0).to);
        if (FQ) {
          let {
            head: QQ
          } = FQ.range;
          if (QQ < kQ.from || QQ > kQ.to) {
            let wQ, oQ = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
              DQ = LQ.lineAt(QQ, fL.ByPos, qQ, 0, 0);
            wQ = "center" == FQ.y ? (DQ.top + DQ.bottom) / 2 - oQ / 2 : "start" == FQ.y || "nearest" == FQ.y && QQ < kQ.from ? DQ.top : DQ.bottom - oQ, kQ = new oq(LQ.lineAt(wQ - 500, fL.ByHeight, qQ, 0, 0).from, LQ.lineAt(wQ + oQ + 500, fL.ByHeight, qQ, 0, 0).to)
          }
        }
        return kQ
      }
      mapViewport(QQ, FQ) {
        let wQ = FQ.mapPos(QQ.from, -1),
          LQ = FQ.mapPos(QQ.to, 1);
        return new oq(this.heightMap.lineAt(wQ, fL.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(LQ, fL.ByPos, this.heightOracle, 0, 0).to)
      }
      viewportIsAppropriate(QQ) {
        let {
          from: FQ,
          to: wQ
        } = QQ, LQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!this.inView) return !0;
        let {
          top: qQ
        } = this.heightMap.lineAt(FQ, fL.ByPos, this.heightOracle, 0, 0), {
          bottom: oQ
        } = this.heightMap.lineAt(wQ, fL.ByPos, this.heightOracle, 0, 0), {
          visibleTop: DQ,
          visibleBottom: kQ
        } = this;
        return (0 == FQ || qQ <= DQ - Math.max(10, Math.min(-LQ, 250))) && (wQ == this.state.doc.length || oQ >= kQ + Math.max(10, Math.min(LQ, 250))) && qQ > DQ - 2e3 && oQ < kQ + 2e3
      }
      mapLineGaps(QQ, FQ) {
        if (!QQ.length || FQ.empty) return QQ;
        let wQ = [];
        for (let LQ of QQ) FQ.touchesRange(LQ.from, LQ.to) || wQ.push(new wq(FQ.mapPos(LQ.from), FQ.mapPos(LQ.to), LQ.size, LQ.displaySize));
        return wQ
      }
      ensureLineGaps(QQ, FQ) {
        let wQ = this.heightOracle.lineWrapping,
          qQ = wQ ? 1e4 : 2e3,
          oQ = qQ >> 1,
          DQ = qQ << 1;
        if (this.defaultTextDirection != mF.LTR && !wQ) return [];
        let kQ = [],
          vQ = (qQ, DQ, mQ, uQ) => {
            if (DQ - qQ < oQ) return;
            let HQ = this.state.selection.main,
              bQ = [HQ.from];
            HQ.empty || bQ.push(HQ.to);
            for (let QQ of bQ)
              if (QQ > qQ && QQ < DQ) return vQ(qQ, QQ - 10, mQ, uQ), void vQ(QQ + 10, DQ, mQ, uQ);
            let YQ = function(QQ, FQ) {
              for (let wQ of QQ)
                if (FQ(wQ)) return wQ;
              return
            }(QQ, (QQ => QQ.from >= mQ.from && QQ.to <= mQ.to && Math.abs(QQ.from - qQ) < oQ && Math.abs(QQ.to - DQ) < oQ && !bQ.some((FQ => QQ.from < FQ && QQ.to > FQ))));
            if (!YQ) {
              if (DQ < mQ.to && FQ && wQ && FQ.B5.some((QQ => QQ.from <= DQ && QQ.to >= DQ))) {
                let QQ = FQ.moveToLineBoundary(LQ.j.cursor(DQ), !1, !0).head;
                QQ > qQ && (DQ = QQ)
              }
              let QQ = this.gapSize(mQ, qQ, DQ, uQ);
              YQ = new wq(qQ, DQ, QQ, wQ || QQ < 2e6 ? QQ : 2e6)
            }
            kQ.push(YQ)
          },
          mQ = FQ => {
            if (FQ.length < DQ || FQ.type != IQ.Text) return;
            let oQ = function(QQ, FQ, wQ) {
              let qQ = [],
                oQ = QQ,
                DQ = 0;
              LQ.B.spans(wQ, QQ, FQ, {
                span() {},
                point(QQ, FQ) {
                  QQ > oQ && (qQ.push({
                    from: oQ,
                    to: QQ
                  }), DQ += QQ - oQ), oQ = FQ
                }
              }, 20), oQ < FQ && (qQ.push({
                from: oQ,
                to: FQ
              }), DQ += FQ - oQ);
              return {
                total: DQ,
                PA: qQ
              }
            }(FQ.from, FQ.to, this.stateDeco);
            if (oQ.total < DQ) return;
            let kQ, mQ, uQ = this.scrollTarget ? this.scrollTarget.range.head : null;
            if (wQ) {
              let QQ, wQ, LQ = qQ / this.heightOracle.lineLength * this.heightOracle.lineHeight;
              if (null != uQ) {
                let qQ = kq(oQ, uQ),
                  DQ = ((this.visibleBottom - this.visibleTop) / 2 + LQ) / FQ.height;
                QQ = qQ - DQ, wQ = qQ + DQ
              } else QQ = (this.visibleTop - FQ.top - LQ) / FQ.height, wQ = (this.visibleBottom - FQ.top + LQ) / FQ.height;
              kQ = Dq(oQ, QQ), mQ = Dq(oQ, wQ)
            } else {
              let wQ = oQ.total * this.heightOracle.charWidth,
                LQ = qQ * this.heightOracle.charWidth,
                DQ = 0;
              if (wQ > 2e6)
                for (let qQ of QQ) qQ.from >= FQ.from && qQ.from < FQ.to && qQ.size != qQ.displaySize && qQ.from * this.heightOracle.charWidth + DQ < this.pixelViewport.left && (DQ = qQ.size - qQ.displaySize);
              let vQ, HQ, bQ = this.pixelViewport.left + DQ,
                YQ = this.pixelViewport.right + DQ;
              if (null != uQ) {
                let QQ = kq(oQ, uQ),
                  FQ = ((YQ - bQ) / 2 + LQ) / wQ;
                vQ = QQ - FQ, HQ = QQ + FQ
              } else vQ = (bQ - LQ) / wQ, HQ = (YQ + LQ) / wQ;
              kQ = Dq(oQ, vQ), mQ = Dq(oQ, HQ)
            }
            kQ > FQ.from && vQ(FQ.from, kQ, FQ, oQ), mQ < FQ.to && vQ(mQ, FQ.to, FQ, oQ)
          };
        for (let LQ of this.viewportLines) Array.isArray(LQ.type) ? LQ.type.forEach(mQ) : mQ(LQ);
        return kQ
      }
      gapSize(QQ, FQ, wQ, LQ) {
        let qQ = kq(LQ, wQ) - kq(LQ, FQ);
        return this.heightOracle.lineWrapping ? QQ.height * qQ : LQ.total * this.heightOracle.charWidth * qQ
      }
      updateLineGaps(QQ) {
        wq.same(QQ, this.lineGaps) || (this.lineGaps = QQ, this.lineGapDeco = UQ.set(QQ.map((QQ => QQ.draw(this, this.heightOracle.lineWrapping)))))
      }
      computeVisibleRanges(QQ) {
        let FQ = this.stateDeco;
        this.lineGaps.length && (FQ = FQ.concat(this.lineGapDeco));
        let wQ = [];
        LQ.B.spans(FQ, this.viewport.from, this.viewport.to, {
          span(QQ, FQ) {
            wQ.push({
              from: QQ,
              to: FQ
            })
          },
          point() {}
        }, 20);
        let qQ = 0;
        if (wQ.length != this.B5.length) qQ = 12;
        else
          for (let LQ = 0; LQ < wQ.length && !(8 & qQ); LQ++) {
            let FQ = this.B5[LQ],
              oQ = wQ[LQ];
            FQ.from == oQ.from && FQ.to == oQ.to || (qQ |= 4, QQ && QQ.mapPos(FQ.from, -1) == oQ.from && QQ.mapPos(FQ.to, 1) == oQ.to || (qQ |= 8))
          }
        return this.B5 = wQ, qQ
      }
      lineBlockAt(QQ) {
        return QQ >= this.viewport.from && QQ <= this.viewport.to && this.viewportLines.find((FQ => FQ.from <= QQ && FQ.to >= QQ)) || Hq(this.heightMap.lineAt(QQ, fL.ByPos, this.heightOracle, 0, 0), this.scaler)
      }
      lineBlockAtHeight(QQ) {
        return QQ >= this.viewportLines[0].top && QQ <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((FQ => FQ.top <= QQ && FQ.bottom >= QQ)) || Hq(this.heightMap.lineAt(this.scaler.fromDOM(QQ), fL.ByHeight, this.heightOracle, 0, 0), this.scaler)
      }
      getScrollOffset() {
        return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY
      }
      scrollAnchorAt(QQ) {
        let FQ = this.lineBlockAtHeight(QQ + 8);
        return FQ.from >= this.viewport.from || this.viewportLines[0].top - QQ > 200 ? FQ : this.viewportLines[0]
      }
      elementAtHeight(QQ) {
        return Hq(this.heightMap.blockAt(this.scaler.fromDOM(QQ), this.heightOracle, 0, 0), this.scaler)
      }
      get docHeight() {
        return this.scaler.toDOM(this.heightMap.height)
      }
      get contentHeight() {
        return this.docHeight + this.paddingTop + this.paddingBottom
      }
    }
    class oq {
      constructor(QQ, FQ) {
        this.from = QQ, this.to = FQ
      }
    }

    function Dq(QQ, FQ) {
      let {
        total: wQ,
        PA: LQ
      } = QQ;
      if (FQ <= 0) return LQ[0].from;
      if (FQ >= 1) return LQ[LQ.length - 1].to;
      let qQ = Math.floor(wQ * FQ);
      for (let oQ = 0;; oQ++) {
        let {
          from: QQ,
          to: FQ
        } = LQ[oQ], wQ = FQ - QQ;
        if (qQ <= wQ) return QQ + qQ;
        qQ -= wQ
      }
    }

    function kq(QQ, FQ) {
      let wQ = 0;
      for (let {
          from: LQ,
          to: qQ
        }
        of QQ.PA) {
        if (FQ <= qQ) {
          wQ += FQ - LQ;
          break
        }
        wQ += qQ - LQ
      }
      return wQ / QQ.total
    }
    const vq = {
      toDOM: QQ => QQ,
      fromDOM: QQ => QQ,
      scale: 1,
      eq(QQ) {
        return QQ == this
      }
    };

    function mq(QQ) {
      let FQ = QQ.facet(Qw).filter((QQ => "function" != typeof QQ)),
        wQ = QQ.facet(ww).filter((QQ => "function" != typeof QQ));
      return wQ.length && FQ.push(LQ.B.join(wQ)), FQ
    }
    class uq {
      constructor(QQ, FQ, wQ) {
        let LQ = 0,
          qQ = 0,
          oQ = 0;
        this.viewports = wQ.map((wQ => {
          let {
            from: qQ,
            to: oQ
          } = wQ, DQ = FQ.lineAt(qQ, fL.ByPos, QQ, 0, 0).top, kQ = FQ.lineAt(oQ, fL.ByPos, QQ, 0, 0).bottom;
          return LQ += kQ - DQ, {
            from: qQ,
            to: oQ,
            top: DQ,
            bottom: kQ,
            domTop: 0,
            domBottom: 0
          }
        })), this.scale = (7e6 - LQ) / (FQ.height - LQ);
        for (let DQ of this.viewports) DQ.domTop = oQ + (DQ.top - qQ) * this.scale, oQ = DQ.domBottom = DQ.domTop + (DQ.bottom - DQ.top), qQ = DQ.bottom
      }
      toDOM(QQ) {
        for (let FQ = 0, wQ = 0, LQ = 0;; FQ++) {
          let qQ = FQ < this.viewports.length ? this.viewports[FQ] : null;
          if (!qQ || QQ < qQ.top) return LQ + (QQ - wQ) * this.scale;
          if (QQ <= qQ.bottom) return qQ.domTop + (QQ - qQ.top);
          wQ = qQ.bottom, LQ = qQ.domBottom
        }
      }
      fromDOM(QQ) {
        for (let FQ = 0, wQ = 0, LQ = 0;; FQ++) {
          let qQ = FQ < this.viewports.length ? this.viewports[FQ] : null;
          if (!qQ || QQ < qQ.domTop) return wQ + (QQ - LQ) / this.scale;
          if (QQ <= qQ.domBottom) return qQ.top + (QQ - qQ.domTop);
          wQ = qQ.bottom, LQ = qQ.domBottom
        }
      }
      eq(QQ) {
        return QQ instanceof uq && (this.scale == QQ.scale && this.viewports.length == QQ.viewports.length && this.viewports.every(((FQ, wQ) => FQ.from == QQ.viewports[wQ].from && FQ.to == QQ.viewports[wQ].to)))
      }
    }

    function Hq(QQ, FQ) {
      if (1 == FQ.scale) return QQ;
      let wQ = FQ.toDOM(QQ.top),
        LQ = FQ.toDOM(QQ.bottom);
      return new XL(QQ.from, QQ.length, wQ, LQ - wQ, Array.isArray(QQ._content) ? QQ._content.map((QQ => Hq(QQ, FQ))) : QQ._content)
    }
    const bq = LQ.r.define({
        combine: QQ => QQ.join(" ")
      }),
      Yq = LQ.r.define({
        combine: QQ => QQ.indexOf(!0) > -1
      }),
      xq = qQ.e.newName(),
      Aq = qQ.e.newName(),
      tq = qQ.e.newName(),
      eq = {
        "&light": "." + Aq,
        "&dark": "." + tq
      };

    function Mq(QQ, FQ, wQ) {
      return new qQ.e(FQ, {
        finish: FQ => /&/.test(FQ) ? FQ.replace(/&\w*/, (FQ => {
          if ("&" == FQ) return QQ;
          if (!wQ || !wQ[FQ]) throw new RangeError(`Unsupported selector: ${FQ}`);
          return wQ[FQ]
        })) : QQ + " " + FQ
      })
    }
    const Gq = Mq("." + xq, {
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
      }, eq),
      pq = {
        childList: !0,
        characterData: !0,
        subtree: !0,
        attributes: !0,
        characterDataOldValue: !0
      },
      cq = SQ.ie && SQ.ie_version <= 11;
    class Cq {
      constructor(QQ) {
        this.view = QQ, this.active = !1, this.editContext = null, this.selectionRange = new dQ, this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = QQ.contentDOM, this.observer = new MutationObserver((FQ => {
          for (let QQ of FQ) this.queue.push(QQ);
          (SQ.ie && SQ.ie_version <= 11 || SQ.ios && QQ.composing) && FQ.some((QQ => "childList" == QQ.type && QQ.removedNodes.length || "characterData" == QQ.type && QQ.oldValue.length > QQ.target.nodeValue.length)) ? this.flushSoon() : this.flush()
        })), !window.EditContext || !SQ.android || !1 === QQ.constructor.EDIT_CONTEXT || SQ.chrome && SQ.chrome_version < 126 || (this.editContext = new Wq(QQ), QQ.state.facet(nF) && (QQ.contentDOM.editContext = this.editContext.editContext)), cq && (this.onCharData = QQ => {
          this.queue.push({
            target: QQ.target,
            type: "characterData",
            oldValue: QQ.prevValue
          }), this.flushSoon()
        }), this.onSelectionChange = this.onSelectionChange.bind(this), this.aG = this.aG.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver((() => {
          var QQ;
          (null === (QQ = this.view.docView) || void 0 === QQ ? void 0 : QQ.lastUpdate) < Date.now() - 75 && this.aG()
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
      aG() {
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
        if (this.gapIntersection && (QQ.length != this.gaps.length || this.gaps.some(((FQ, wQ) => FQ != QQ[wQ])))) {
          this.gapIntersection.disconnect();
          for (let FQ of QQ) this.gapIntersection.observe(FQ);
          this.gaps = QQ
        }
      }
      onSelectionChange(QQ) {
        let FQ = this.selectionChanged;
        if (!this.readSelectionRange() || this.delayedAndroidKey) return;
        let {
          view: wQ
        } = this, LQ = this.selectionRange;
        if (wQ.state.facet(nF) ? wQ.root.activeElement != this.dom : !fQ(this.dom, LQ)) return;
        let qQ = LQ.anchorNode && wQ.docView.tile.nearest(LQ.anchorNode);
        qQ && qQ.isWidget() && qQ.widget.ignoreEvent(QQ) ? FQ || (this.selectionChanged = !1) : (SQ.ie && SQ.ie_version <= 11 || SQ.android && SQ.chrome) && !wQ.state.selection.main.empty && LQ.focusNode && hQ(LQ.focusNode, LQ.focusOffset, LQ.anchorNode, LQ.anchorOffset) ? this.flushSoon() : this.flush(!1)
      }
      readSelectionRange() {
        let {
          view: QQ
        } = this, FQ = aQ(QQ.root);
        if (!FQ) return !1;
        let wQ = SQ.safari && 11 == QQ.root.nodeType && QQ.root.activeElement == this.dom && function(QQ, FQ) {
          if (FQ.getComposedRanges) {
            let wQ = FQ.getComposedRanges(QQ.root)[0];
            if (wQ) return iq(QQ, wQ)
          }
          let wQ = null;

          function LQ(QQ) {
            QQ.preventDefault(), QQ.stopImmediatePropagation(), wQ = QQ.getTargetRanges()[0]
          }
          return QQ.contentDOM.addEventListener("beforeinput", LQ, !0), QQ.dom.ownerDocument.execCommand("indent"), QQ.contentDOM.removeEventListener("beforeinput", LQ, !0), wQ ? iq(QQ, wQ) : null
        }(this.view, FQ) || FQ;
        if (!wQ || this.selectionRange.eq(wQ)) return !1;
        let LQ = fQ(this.dom, wQ);
        return LQ && !this.selectionChanged && QQ.inputState.lastFocusTime > Date.now() - 200 && QQ.inputState.lastTouchTime < Date.now() - 300 && function(QQ, FQ) {
          let wQ = FQ.focusNode,
            LQ = FQ.focusOffset;
          if (!wQ || FQ.anchorNode != wQ || FQ.anchorOffset != LQ) return !1;
          for (LQ = Math.min(LQ, gQ(wQ));;)
            if (LQ) {
              if (1 != wQ.nodeType) return !1;
              let QQ = wQ.childNodes[LQ - 1];
              "false" == QQ.contentEditable ? LQ-- : (wQ = QQ, LQ = gQ(wQ))
            } else {
              if (wQ == QQ) return !0;
              LQ = JQ(wQ), wQ = wQ.parentNode
            }
        }(this.dom, wQ) ? (this.view.inputState.lastFocusTime = 0, QQ.docView.updateSelection(), !1) : (this.selectionRange.setRange(wQ), LQ && (this.selectionChanged = !0), !0)
      }
      setSelectionRange(QQ, FQ) {
        this.selectionRange.set(QQ.node, QQ.offset, FQ.node, FQ.offset), this.selectionChanged = !1
      }
      clearSelectionRange() {
        this.selectionRange.set(null, 0, null, 0)
      }
      listenForScroll() {
        this.parentCheck = -1;
        let QQ = 0,
          FQ = null;
        for (let wQ = this.dom; wQ;)
          if (1 == wQ.nodeType) !FQ && QQ < this.scrollTargets.length && this.scrollTargets[QQ] == wQ ? QQ++ : FQ || (FQ = this.scrollTargets.slice(0, QQ)), FQ && FQ.push(wQ), wQ = wQ.assignedSlot || wQ.parentNode;
          else {
            if (11 != wQ.nodeType) break;
            wQ = wQ.host
          } if (QQ < this.scrollTargets.length && !FQ && (FQ = this.scrollTargets.slice(0, QQ)), FQ) {
          for (let QQ of this.scrollTargets) QQ.removeEventListener("scroll", this.onScroll);
          for (let QQ of this.scrollTargets = FQ) QQ.addEventListener("scroll", this.onScroll)
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
        this.active || (this.observer.observe(this.dom, pq), cq && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0)
      }
      stop() {
        this.active && (this.active = !1, this.observer.disconnect(), cq && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData))
      }
      clear() {
        this.processRecords(), this.queue.length = 0, this.selectionChanged = !1
      }
      delayAndroidKey(QQ, FQ) {
        var wQ;
        if (!this.delayedAndroidKey) {
          let QQ = () => {
            let QQ = this.delayedAndroidKey;
            if (QQ) {
              this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = QQ.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && QQ.force && qF(this.dom, QQ.key, QQ.keyCode)
            }
          };
          this.flushingAndroidKey = this.view.win.requestAnimationFrame(QQ)
        }
        this.delayedAndroidKey && "Enter" != QQ || (this.delayedAndroidKey = {
          key: QQ,
          keyCode: FQ,
          force: this.lastChange < Date.now() - 50 || !!(null === (wQ = this.delayedAndroidKey) || void 0 === wQ ? void 0 : wQ.force)
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
        let FQ = -1,
          wQ = -1,
          LQ = !1;
        for (let qQ of QQ) {
          let QQ = this.readMutation(qQ);
          QQ && (QQ.typeOver && (LQ = !0), -1 == FQ ? ({
            from: FQ,
            to: wQ
          } = QQ) : (FQ = Math.min(QQ.from, FQ), wQ = Math.max(QQ.to, wQ)))
        }
        return {
          from: FQ,
          to: wQ,
          typeOver: LQ
        }
      }
      readChange() {
        let {
          from: QQ,
          to: FQ,
          typeOver: wQ
        } = this.processRecords(), LQ = this.selectionChanged && fQ(this.dom, this.selectionRange);
        if (QQ < 0 && !LQ) return null;
        QQ > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
        let qQ = new LL(this.view, QQ, FQ, wQ);
        return this.view.docView.domChanged = {
          newSel: qQ.newSel ? qQ.newSel.main : null
        }, qQ
      }
      flush() {
        let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
        QQ && this.readSelectionRange();
        let FQ = this.readChange();
        if (!FQ) return this.view.requestMeasure(), !1;
        let wQ = this.view.state,
          LQ = oL(this.view, FQ);
        return this.view.state == wQ && (FQ.domChanged || FQ.newSel && !vL(this.view.state.selection, FQ.newSel.main)) && this.view.update([]), LQ
      }
      readMutation(QQ) {
        let FQ = this.view.docView.tile.nearest(QQ.target);
        if (!FQ || FQ.isWidget()) return null;
        if (FQ.markDirty("attributes" == QQ.type), "childList" == QQ.type) {
          let wQ = Sq(FQ, QQ.previousSibling || QQ.target.previousSibling, -1),
            LQ = Sq(FQ, QQ.nextSibling || QQ.target.nextSibling, 1);
          return {
            from: wQ ? FQ.posAfter(wQ) : FQ.posAtStart,
            to: LQ ? FQ.posBefore(LQ) : FQ.posAtEnd,
            typeOver: !1
          }
        }
        return "characterData" == QQ.type ? {
          from: FQ.posAtStart,
          to: FQ.posAtEnd,
          typeOver: QQ.target.nodeValue == QQ.oldValue
        } : null
      }
      setWindow(QQ) {
        QQ != this.win && (this.removeWindowListeners(this.win), this.win = QQ, this.addWindowListeners(this.win))
      }
      addWindowListeners(QQ) {
        QQ.addEventListener("resize", this.aG), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : QQ.addEventListener("beforeprint", this.onPrint), QQ.addEventListener("scroll", this.onScroll), QQ.document.addEventListener("selectionchange", this.onSelectionChange)
      }
      removeWindowListeners(QQ) {
        QQ.removeEventListener("scroll", this.onScroll), QQ.removeEventListener("resize", this.aG), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : QQ.removeEventListener("beforeprint", this.onPrint), QQ.document.removeEventListener("selectionchange", this.onSelectionChange)
      }
      update(QQ) {
        this.editContext && (this.editContext.update(QQ), QQ.startState.facet(nF) != QQ.state.facet(nF) && (QQ.view.contentDOM.editContext = QQ.state.facet(nF) ? this.editContext.editContext : null))
      }
      destroy() {
        var QQ, FQ, wQ;
        this.stop(), null === (QQ = this.intersection) || void 0 === QQ || QQ.disconnect(), null === (FQ = this.gapIntersection) || void 0 === FQ || FQ.disconnect(), null === (wQ = this.resizeScroll) || void 0 === wQ || wQ.disconnect();
        for (let LQ of this.scrollTargets) LQ.removeEventListener("scroll", this.onScroll);
        this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy())
      }
    }

    function Sq(QQ, FQ, wQ) {
      for (; FQ;) {
        let LQ = bw.get(FQ);
        if (LQ && LQ.parent == QQ) return LQ;
        let qQ = FQ.parentNode;
        FQ = qQ != QQ.dom ? qQ : wQ > 0 ? FQ.nextSibling : FQ.previousSibling
      }
      return null
    }

    function iq(QQ, FQ) {
      let wQ = FQ.startContainer,
        LQ = FQ.startOffset,
        qQ = FQ.endContainer,
        oQ = FQ.endOffset,
        DQ = QQ.docView.domAtPos(QQ.state.selection.main.anchor, 1);
      return hQ(DQ.node, DQ.offset, qQ, oQ) && ([wQ, LQ, qQ, oQ] = [qQ, oQ, wQ, LQ]), {
        anchorNode: wQ,
        anchorOffset: LQ,
        focusNode: qQ,
        focusOffset: oQ
      }
    }
    class Wq {
      constructor(QQ) {
        this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = Object.create(null), this.composing = null, this.resetRange(QQ.state);
        let FQ = this.editContext = new window.EditContext({
          text: QQ.state.doc.sliceString(this.from, this.to),
          selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, QQ.state.selection.main.anchor))),
          selectionEnd: this.toContextPos(QQ.state.selection.main.head)
        });
        this.handlers.textupdate = wQ => {
          let qQ = QQ.state.selection.main,
            {
              anchor: oQ,
              head: DQ
            } = qQ,
            kQ = this.toEditorPos(wQ.updateRangeStart),
            vQ = this.toEditorPos(wQ.updateRangeEnd);
          QQ.inputState.composing >= 0 && !this.composing && (this.composing = {
            contextBase: wQ.updateRangeStart,
            editorBase: kQ,
            drifted: !1
          });
          let mQ = vQ - kQ > wQ.text.length;
          kQ == this.from && oQ < this.from ? kQ = oQ : vQ == this.to && oQ > this.to && (vQ = oQ);
          let uQ = kL(QQ.state.sliceDoc(kQ, vQ), wQ.text, (mQ ? qQ.from : qQ.to) - kQ, mQ ? "end" : null);
          if (!uQ) {
            let FQ = LQ.j.single(this.toEditorPos(wQ.selectionStart), this.toEditorPos(wQ.selectionEnd));
            return void(vL(FQ, qQ) || QQ.dispatch({
              selection: FQ,
              userEvent: "select"
            }))
          }
          let HQ = {
            from: uQ.from + kQ,
            to: uQ.toA + kQ,
            insert: LQ.P.of(wQ.text.slice(uQ.from, uQ.toB).split("\n"))
          };
          if ((SQ.mac || SQ.android) && HQ.from == DQ - 1 && /^\. ?$/.test(wQ.text) && "off" == QQ.contentDOM.getAttribute("autocorrect") && (HQ = {
              from: kQ,
              to: vQ,
              insert: LQ.P.of([wQ.text.replace(".", " ")])
            }), this.pendingContextChange = HQ, !QQ.state.readOnly) {
            let FQ = this.to - this.from + (HQ.to - HQ.from + HQ.insert.length);
            DL(QQ, HQ, LQ.j.single(this.toEditorPos(wQ.selectionStart, FQ), this.toEditorPos(wQ.selectionEnd, FQ)))
          }
          this.pendingContextChange && (this.revertPending(QQ.state), this.setSelection(QQ.state)), HQ.from < HQ.to && !HQ.insert.length && QQ.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(FQ.text.slice(Math.max(0, wQ.updateRangeStart - 1), Math.min(FQ.text.length, wQ.updateRangeStart + 1))) && this.handlers.compositionend(wQ)
        }, this.handlers.characterboundsupdate = wQ => {
          let LQ = [],
            qQ = null;
          for (let FQ = this.toEditorPos(wQ.rangeStart), oQ = this.toEditorPos(wQ.rangeEnd); FQ < oQ; FQ++) {
            let wQ = QQ.coordsForChar(FQ);
            qQ = wQ && new DOMRect(wQ.left, wQ.top, wQ.right - wQ.left, wQ.bottom - wQ.top) || qQ || new DOMRect, LQ.push(qQ)
          }
          FQ.updateCharacterBounds(wQ.rangeStart, LQ)
        }, this.handlers.textformatupdate = FQ => {
          let wQ = [];
          for (let QQ of FQ.getTextFormats()) {
            let FQ = QQ.underlineStyle,
              LQ = QQ.underlineThickness;
            if (!/none/i.test(FQ) && !/none/i.test(LQ)) {
              let qQ = this.toEditorPos(QQ.rangeStart),
                oQ = this.toEditorPos(QQ.rangeEnd);
              if (qQ < oQ) {
                let QQ = `text-decoration: underline ${/^[a-z]/.test(FQ)?FQ+" ":"Dashed"==FQ?"dashed ":"Squiggle"==FQ?"wavy ":""}${/thin/i.test(LQ)?1:2}px`;
                wQ.push(UQ.mark({
                  attributes: {
                    style: QQ
                  }
                }).range(qQ, oQ))
              }
            }
          }
          QQ.dispatch({
            effects: JF.of(UQ.set(wQ))
          })
        }, this.handlers.compositionstart = () => {
          QQ.inputState.composing < 0 && (QQ.inputState.composing = 0, QQ.inputState.compositionFirstChange = !0)
        }, this.handlers.compositionend = () => {
          if (QQ.inputState.composing = -1, QQ.inputState.compositionFirstChange = null, this.composing) {
            let {
              drifted: FQ
            } = this.composing;
            this.composing = null, FQ && this.reset(QQ.state)
          }
        };
        for (let wQ in this.handlers) FQ.addEventListener(wQ, this.handlers[wQ]);
        this.measureReq = {
          read: QQ => {
            this.editContext.updateControlBounds(QQ.contentDOM.getBoundingClientRect());
            let FQ = aQ(QQ.root);
            FQ && FQ.rangeCount && this.editContext.updateSelectionBounds(FQ.getRangeAt(0).getBoundingClientRect())
          }
        }
      }
      applyEdits(QQ) {
        let FQ = 0,
          wQ = !1,
          LQ = this.pendingContextChange;
        return QQ.changes.iterChanges(((qQ, oQ, DQ, kQ, vQ) => {
          if (wQ) return;
          let mQ = vQ.length - (oQ - qQ);
          if (LQ && oQ >= LQ.to) {
            if (LQ.from == qQ && LQ.to == oQ && LQ.insert.eq(vQ)) return LQ = this.pendingContextChange = null, FQ += mQ, void(this.to += mQ);
            LQ = null, this.revertPending(QQ.state)
          }
          if (qQ += FQ, (oQ += FQ) <= this.from) this.from += mQ, this.to += mQ;
          else if (qQ < this.to) {
            if (qQ < this.from || oQ > this.to || this.to - this.from + vQ.length > 3e4) return void(wQ = !0);
            this.editContext.updateText(this.toContextPos(qQ), this.toContextPos(oQ), vQ.toString()), this.to += mQ
          }
          FQ += mQ
        })), LQ && !wQ && this.revertPending(QQ.state), !wQ
      }
      update(QQ) {
        let FQ = this.pendingContextChange,
          wQ = QQ.startState.selection.main;
        this.composing && (this.composing.drifted || !QQ.changes.touchesRange(wQ.from, wQ.to) && QQ.transactions.some((QQ => !QQ.isUserEvent("input.type") && QQ.changes.touchesRange(this.from, this.to)))) ? (this.composing.drifted = !0, this.composing.editorBase = QQ.changes.mapPos(this.composing.editorBase)) : this.applyEdits(QQ) && this.rangeIsValid(QQ.state) ? (QQ.docChanged || QQ.selectionSet || FQ) && this.setSelection(QQ.state) : (this.pendingContextChange = null, this.reset(QQ.state)), (QQ.geometryChanged || QQ.docChanged || QQ.selectionSet) && QQ.view.requestMeasure(this.measureReq)
      }
      resetRange(QQ) {
        let {
          head: FQ
        } = QQ.selection.main;
        this.from = Math.max(0, FQ - 1e4), this.to = Math.min(QQ.doc.length, FQ + 1e4)
      }
      reset(QQ) {
        this.resetRange(QQ), this.editContext.updateText(0, this.editContext.text.length, QQ.doc.sliceString(this.from, this.to)), this.setSelection(QQ)
      }
      revertPending(QQ) {
        let FQ = this.pendingContextChange;
        this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(FQ.from), this.toContextPos(FQ.from + FQ.insert.length), QQ.doc.sliceString(FQ.from, FQ.to))
      }
      setSelection(QQ) {
        let {
          main: FQ
        } = QQ.selection, wQ = this.toContextPos(Math.max(this.from, Math.min(this.to, FQ.anchor))), LQ = this.toContextPos(FQ.head);
        this.editContext.selectionStart == wQ && this.editContext.selectionEnd == LQ || this.editContext.updateSelection(wQ, LQ)
      }
      rangeIsValid(QQ) {
        let {
          head: FQ
        } = QQ.selection.main;
        return !(this.from > 0 && FQ - this.from < 500 || this.to < QQ.doc.length && this.to - FQ < 500 || this.to - this.from > 3e4)
      }
      toEditorPos(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.to - this.from;
        QQ = Math.min(QQ, FQ);
        let wQ = this.composing;
        return wQ && wQ.drifted ? wQ.editorBase + (QQ - wQ.contextBase) : QQ + this.from
      }
      toContextPos(QQ) {
        let FQ = this.composing;
        return FQ && FQ.drifted ? FQ.contextBase + (QQ - FQ.editorBase) : QQ - this.from
      }
      destroy() {
        for (let QQ in this.handlers) this.editContext.removeEventListener(QQ, this.handlers[QQ])
      }
    }
    class Rq {
      get state() {
        return this.viewState.state
      }
      get viewport() {
        return this.viewState.viewport
      }
      get B5() {
        return this.viewState.B5
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
        var FQ;
        this.plugins = [], this.pluginMap = new Map, this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), QQ.parent && QQ.parent.appendChild(this.dom);
        let {
          dispatch: wQ
        } = QQ;
        this.dispatchTransactions = QQ.dispatchTransactions || wQ && (QQ => QQ.forEach((QQ => wQ(QQ, this)))) || (QQ => this.update(QQ)), this.dispatch = this.dispatch.bind(this), this._root = QQ.root || function(QQ) {
          for (; QQ;) {
            if (QQ && (9 == QQ.nodeType || 11 == QQ.nodeType && QQ.host)) return QQ;
            QQ = QQ.assignedSlot || QQ.parentNode
          }
          return null
        }(QQ.parent) || document, this.viewState = new qq(this, QQ.state || LQ.n.create(QQ)), QQ.scrollTo && QQ.scrollTo.is(hF) && (this.viewState.scrollTarget = QQ.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(PF).map((QQ => new yF(QQ)));
        for (let LQ of this.plugins) LQ.update(this);
        this.observer = new Cq(this), this.inputState = new mL(this), this.inputState.ensureHandlers(this.plugins), this.docView = new lw(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), (null === (FQ = document.fonts) || void 0 === FQ ? void 0 : FQ.ready) && document.fonts.ready.then((() => {
          this.viewState.mustMeasureContent = "refresh", this.requestMeasure()
        }))
      }
      dispatch() {
        for (var QQ = arguments.length, FQ = new Array(QQ), wQ = 0; wQ < QQ; wQ++) FQ[wQ] = arguments[wQ];
        let qQ = 1 == FQ.length && FQ[0] instanceof LQ.S ? FQ : 1 == FQ.length && Array.isArray(FQ[0]) ? FQ[0] : [this.state.update(...FQ)];
        this.dispatchTransactions(qQ, this)
      }
      update(QQ) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        let FQ, wQ = !1,
          qQ = !1,
          oQ = this.state;
        for (let LQ of QQ) {
          if (LQ.startState != oQ) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
          oQ = LQ.state
        }
        if (this.destroyed) return void(this.viewState.state = oQ);
        let DQ = this.hasFocus,
          kQ = 0,
          vQ = null;
        QQ.some((QQ => QQ.annotation(IL))) ? (this.inputState.notifiedFocused = DQ, kQ = 1) : DQ != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = DQ, vQ = UL(oQ, DQ), vQ || (kQ = 1));
        let mQ = this.observer.delayedAndroidKey,
          uQ = null;
        if (mQ ? (this.observer.clearDelayedAndroidKey(), uQ = this.observer.readChange(), (uQ && !this.state.doc.eq(oQ.doc) || !this.state.selection.eq(oQ.selection)) && (uQ = null)) : this.observer.clear(), oQ.facet(LQ.n.phrases) != this.state.facet(LQ.n.phrases)) return this.setState(oQ);
        FQ = uw.create(this, oQ, QQ), FQ.flags |= kQ;
        let HQ = this.viewState.scrollTarget;
        try {
          this.updateState = 2;
          for (let FQ of QQ) {
            if (HQ && (HQ = HQ.map(FQ.changes)), FQ.scrollIntoView) {
              let {
                main: QQ
              } = FQ.state.selection, {
                x: wQ,
                y: qQ
              } = this.state.facet(Rq.cursorScrollMargin);
              HQ = new VF(QQ.empty ? QQ : LQ.j.cursor(QQ.head, QQ.head > QQ.anchor ? -1 : 1), "nearest", "nearest", qQ, wQ)
            }
            for (let QQ of FQ.effects) QQ.is(hF) && (HQ = QQ.value.clip(this.state))
          }
          this.viewState.update(FQ, HQ), this.bidiCache = rq.update(this.bidiCache, FQ.changes), FQ.empty || (this.updatePlugins(FQ), this.inputState.update(FQ)), wQ = this.docView.update(FQ), this.state.facet(vw) != this.styleModules && this.mountStyles(), qQ = this.updateAttrs(), this.showAnnouncements(QQ), this.docView.updateSelection(wQ, QQ.some((QQ => QQ.isUserEvent("select.pointer"))))
        } finally {
          this.updateState = 0
        }
        if (FQ.startState.facet(bq) != FQ.state.facet(bq) && (this.viewState.mustMeasureContent = !0), (wQ || qQ || HQ || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), wQ && this.docViewUpdate(), !FQ.empty)
          for (let LQ of this.state.facet(TF)) try {
            LQ(FQ)
          } catch (bQ) {
            EF(this.state, bQ, "update listener")
          }(vQ || uQ) && Promise.resolve().then((() => {
            vQ && this.state == vQ.startState && this.dispatch(vQ), uQ && !oL(this, uQ) && mQ.force && qF(this.contentDOM, mQ.key, mQ.keyCode)
          }))
      }
      setState(QQ) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
        if (this.destroyed) return void(this.viewState.state = QQ);
        this.updateState = 2;
        let FQ = this.hasFocus;
        try {
          for (let QQ of this.plugins) QQ.destroy(this);
          this.viewState = new qq(this, QQ), this.plugins = QQ.facet(PF).map((QQ => new yF(QQ))), this.pluginMap.clear();
          for (let QQ of this.plugins) QQ.update(this);
          this.docView.destroy(), this.docView = new lw(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = []
        } finally {
          this.updateState = 0
        }
        FQ && this.focus(), this.requestMeasure()
      }
      updatePlugins(QQ) {
        let FQ = QQ.startState.facet(PF),
          wQ = QQ.state.facet(PF);
        if (FQ != wQ) {
          let LQ = [];
          for (let qQ of wQ) {
            let wQ = FQ.indexOf(qQ);
            if (wQ < 0) LQ.push(new yF(qQ));
            else {
              let FQ = this.plugins[wQ];
              FQ.mustUpdate = QQ, LQ.push(FQ)
            }
          }
          for (let FQ of this.plugins) FQ.mustUpdate != QQ && FQ.destroy(this);
          this.plugins = LQ, this.pluginMap.clear()
        } else
          for (let LQ of this.plugins) LQ.mustUpdate = QQ;
        for (let LQ = 0; LQ < this.plugins.length; LQ++) this.plugins[LQ].update(this);
        FQ != wQ && this.inputState.ensureHandlers(this.plugins)
      }
      docViewUpdate() {
        for (let FQ of this.plugins) {
          let wQ = FQ.value;
          if (wQ && wQ.docViewUpdate) try {
            wQ.docViewUpdate(this)
          } catch (QQ) {
            EF(this.state, QQ, "doc view update listener")
          }
        }
      }
      measure() {
        let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.destroyed) return;
        if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) return this.measureScheduled = -1, void this.requestMeasure();
        this.measureScheduled = 0, QQ && this.observer.forceFlush();
        let FQ = null,
          wQ = this.viewState.scrollParent,
          LQ = this.viewState.getScrollOffset(),
          {
            scrollAnchorPos: qQ,
            scrollAnchorHeight: oQ
          } = this.viewState;
        Math.abs(LQ - this.viewState.scrollOffset) > 1 && (oQ = -1), this.viewState.scrollAnchorHeight = -1;
        try {
          for (let QQ = 0;; QQ++) {
            if (oQ < 0)
              if (oF(wQ || this.win)) qQ = -1, oQ = this.viewState.heightMap.height;
              else {
                let QQ = this.viewState.scrollAnchorAt(LQ);
                qQ = QQ.from, oQ = QQ.top
              } this.updateState = 1;
            let kQ = this.viewState.measure();
            if (!kQ && !this.measureRequests.length && null == this.viewState.scrollTarget) break;
            if (QQ > 5) {
              console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
              break
            }
            let vQ = [];
            4 & kQ || ([this.measureRequests, vQ] = [vQ, this.measureRequests]);
            let mQ = vQ.map((QQ => {
                try {
                  return QQ.read(this)
                } catch (FQ) {
                  return EF(this.state, FQ), sq
                }
              })),
              uQ = uw.create(this, this.state, []),
              HQ = !1;
            uQ.flags |= kQ, FQ ? FQ.flags |= kQ : FQ = uQ, this.updateState = 2, uQ.empty || (this.updatePlugins(uQ), this.inputState.update(uQ), this.updateAttrs(), HQ = this.docView.update(uQ), HQ && this.docViewUpdate());
            for (let QQ = 0; QQ < vQ.length; QQ++)
              if (mQ[QQ] != sq) try {
                let FQ = vQ[QQ];
                FQ.write && FQ.write(mQ[QQ], this)
              } catch (DQ) {
                EF(this.state, DQ)
              }
            if (HQ && this.docView.updateSelection(!0), !uQ.viewportChanged && 0 == this.measureRequests.length) {
              if (this.viewState.editorHeight) {
                if (this.viewState.scrollTarget) {
                  this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, oQ = -1;
                  continue
                } {
                  let QQ = ((qQ < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(qQ).top) - oQ) / this.scaleY;
                  if ((QQ > 1 || QQ < -1) && (wQ == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                    LQ += QQ, wQ ? wQ.scrollTop += QQ : this.win.scrollBy(0, QQ), oQ = -1;
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
        if (FQ && !FQ.empty)
          for (let kQ of this.state.facet(TF)) kQ(FQ)
      }
      get themeClasses() {
        return xq + " " + (this.state.facet(Yq) ? tq : Aq) + " " + this.state.facet(bq)
      }
      updateAttrs() {
        let QQ = Iq(this, BF, {
            class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
          }),
          FQ = {
            spellcheck: "false",
            autocorrect: "off",
            autocapitalize: "off",
            writingsuggestions: "false",
            translate: "no",
            contenteditable: this.state.facet(nF) ? "true" : "false",
            class: "cm-content",
            style: `${SQ.tabSize}: ${this.state.tabSize}`,
            role: "textbox",
            "aria-multiline": "true"
          };
        this.state.readOnly && (FQ["aria-readonly"] = "true"), Iq(this, dF, FQ);
        let wQ = this.observer.ignore((() => {
          let wQ = OQ(this.contentDOM, this.contentAttrs, FQ),
            LQ = OQ(this.dom, this.editorAttrs, QQ);
          return wQ || LQ
        }));
        return this.editorAttrs = QQ, this.contentAttrs = FQ, wQ
      }
      showAnnouncements(QQ) {
        let FQ = !0;
        for (let wQ of QQ)
          for (let QQ of wQ.effects)
            if (QQ.is(Rq.announce)) {
              FQ && (this.announceDOM.textContent = ""), FQ = !1, this.announceDOM.appendChild(document.createElement("div")).textContent = QQ.value
            }
      }
      mountStyles() {
        this.styleModules = this.state.facet(vw);
        let QQ = this.state.facet(Rq.cspNonce);
        qQ.e.mount(this.root, this.styleModules.concat(Gq).reverse(), QQ ? {
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
            for (let FQ = 0; FQ < this.measureRequests.length; FQ++)
              if (this.measureRequests[FQ].key === QQ.key) return void(this.measureRequests[FQ] = QQ);
          this.measureRequests.push(QQ)
        }
      }
      plugin(QQ) {
        let FQ = this.pluginMap.get(QQ);
        return (void 0 === FQ || FQ && FQ.plugin != QQ) && this.pluginMap.set(QQ, FQ = this.plugins.find((FQ => FQ.plugin == QQ)) || null), FQ && FQ.update(this).value
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
      moveByChar(QQ, FQ, wQ) {
        return gw(this, QQ, Jw(this, QQ, FQ, wQ))
      }
      moveByGroup(QQ, FQ) {
        return gw(this, QQ, Jw(this, QQ, FQ, (FQ => function(QQ, FQ, wQ) {
          let qQ = QQ.state.charCategorizer(FQ),
            oQ = qQ(wQ);
          return QQ => {
            let FQ = qQ(QQ);
            return oQ == LQ.h.Space && (oQ = FQ), oQ == FQ
          }
        }(this, QQ.head, FQ))))
      }
      visualLineSide(QQ, FQ) {
        let wQ = this.bidiSpans(QQ),
          qQ = this.textDirectionAt(QQ.from),
          oQ = wQ[FQ ? wQ.length - 1 : 0];
        return LQ.j.cursor(oQ.side(FQ, qQ) + QQ.from, oQ.forward(!FQ, qQ) ? 1 : -1)
      }
      moveToLineBoundary(QQ, FQ) {
        return function(QQ, FQ, wQ, qQ) {
          let oQ = hw(QQ, FQ.head, FQ.assoc || -1),
            DQ = qQ && oQ.type == IQ.Text && (QQ.lineWrapping || oQ.widgetLineBreaks) ? QQ.coordsAtPos(FQ.assoc < 0 && FQ.head > oQ.from ? FQ.head - 1 : FQ.head) : null;
          if (DQ) {
            let FQ = QQ.dom.getBoundingClientRect(),
              qQ = QQ.textDirectionAt(oQ.from),
              kQ = QQ.posAtCoords({
                x: wQ == (qQ == mF.LTR) ? FQ.right - 1 : FQ.left + 1,
                y: (DQ.top + DQ.bottom) / 2
              });
            if (null != kQ) return LQ.j.cursor(kQ, wQ ? -1 : 1)
          }
          return LQ.j.cursor(wQ ? oQ.to : oQ.from, wQ ? -1 : 1)
        }(this, QQ, FQ, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2])
      }
      moveVertically(QQ, FQ, wQ) {
        return gw(this, QQ, function(QQ, FQ, wQ, qQ) {
          let oQ = FQ.head,
            DQ = wQ ? 1 : -1;
          if (oQ == (wQ ? QQ.state.doc.length : 0)) return LQ.j.cursor(oQ, FQ.assoc);
          let kQ, vQ = FQ.goalColumn,
            mQ = QQ.contentDOM.getBoundingClientRect(),
            uQ = QQ.coordsAtPos(oQ, FQ.assoc || ((FQ.empty ? wQ : FQ.head == FQ.from) ? 1 : -1)),
            HQ = QQ.documentTop;
          if (uQ) null == vQ && (vQ = uQ.left - mQ.left), kQ = DQ < 0 ? uQ.top : uQ.bottom;
          else {
            let FQ = QQ.viewState.lineBlockAt(oQ);
            null == vQ && (vQ = Math.min(mQ.right - mQ.left, QQ.defaultCharacterWidth * (oQ - FQ.from))), kQ = (DQ < 0 ? FQ.top : FQ.bottom) + HQ
          }
          let bQ = mQ.left + vQ,
            YQ = QQ.viewState.heightOracle.textHeight >> 1,
            xQ = null !== qQ && void 0 !== qQ ? qQ : YQ;
          for (let AQ = 0;; AQ += YQ) {
            let FQ = kQ + (xQ + AQ) * DQ,
              qQ = Zw(QQ, {
                x: bQ,
                y: FQ
              }, !1, DQ);
            if (wQ ? FQ > mQ.bottom : FQ < mQ.top) return LQ.j.cursor(qQ.pos, qQ.assoc);
            let oQ = QQ.coordsAtPos(qQ.pos, qQ.assoc),
              uQ = oQ ? (oQ.top + oQ.bottom) / 2 : 0;
            if (!oQ || (wQ ? uQ > kQ : uQ < kQ)) return LQ.j.cursor(qQ.pos, qQ.assoc, void 0, vQ)
          }
        }(this, QQ, FQ, wQ))
      }
      domAtPos(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return this.docView.domAtPos(QQ, FQ)
      }
      posAtDOM(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.docView.posFromDOM(QQ, FQ)
      }
      posAtCoords(QQ) {
        let FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this.readMeasured();
        let wQ = Zw(this, QQ, FQ);
        return wQ && wQ.pos
      }
      posAndSideAtCoords(QQ) {
        let FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return this.readMeasured(), Zw(this, QQ, FQ)
      }
      coordsAtPos(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.readMeasured();
        let wQ = this.docView.coordsAt(QQ, FQ);
        if (!wQ || wQ.left == wQ.right) return wQ;
        let LQ = this.state.doc.lineAt(QQ),
          qQ = this.bidiSpans(LQ);
        return PQ(wQ, qQ[GF.find(qQ, QQ - LQ.from, -1, FQ)].dir == mF.LTR == FQ > 0)
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
        return !this.state.facet(aF) || QQ < this.viewport.from || QQ > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(QQ))
      }
      get lineWrapping() {
        return this.viewState.heightOracle.lineWrapping
      }
      bidiSpans(QQ) {
        if (QQ.length > Oq) return WF(QQ.length);
        let FQ, wQ = this.textDirectionAt(QQ.from);
        for (let qQ of this.bidiCache)
          if (qQ.from == QQ.from && qQ.dir == wQ && (qQ.fresh || pF(qQ.isolates, FQ = ow(this, QQ)))) return qQ.order;
        FQ || (FQ = ow(this, QQ));
        let LQ = iF(QQ.text, wQ, FQ);
        return this.bidiCache.push(new rq(QQ.from, QQ.to, wQ, FQ, !0, LQ)), LQ
      }
      get hasFocus() {
        var QQ;
        return (this.dom.ownerDocument.hasFocus() || SQ.safari && (null === (QQ = this.inputState) || void 0 === QQ ? void 0 : QQ.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM
      }
      focus() {
        this.observer.ignore((() => {
          wF(this.contentDOM), this.docView.updateSelection()
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
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var wQ, qQ, oQ, DQ;
        return hF.of(new VF("number" == typeof QQ ? LQ.j.cursor(QQ) : QQ, null !== (wQ = FQ.y) && void 0 !== wQ ? wQ : "nearest", null !== (qQ = FQ.x) && void 0 !== qQ ? qQ : "nearest", null !== (oQ = FQ.yMargin) && void 0 !== oQ ? oQ : 5, null !== (DQ = FQ.xMargin) && void 0 !== DQ ? DQ : 5))
      }
      scrollSnapshot() {
        let {
          scrollTop: QQ,
          scrollLeft: FQ
        } = this.scrollDOM, wQ = this.viewState.scrollAnchorAt(QQ);
        return hF.of(new VF(LQ.j.cursor(wQ.from), "start", "start", wQ.top - QQ, FQ, !0))
      }
      setTabFocusMode(QQ) {
        null == QQ ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof QQ ? this.inputState.tabFocusMode = QQ ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + QQ)
      }
      static domEventHandlers(QQ) {
        return ZF.define((() => ({})), {
          eventHandlers: QQ
        })
      }
      static domEventObservers(QQ) {
        return ZF.define((() => ({})), {
          eventObservers: QQ
        })
      }
      static theme(QQ, FQ) {
        let wQ = qQ.e.newName(),
          LQ = [bq.of(wQ), vw.of(Mq(`.${wQ}`, QQ))];
        return FQ && FQ.dark && LQ.push(Yq.of(!0)), LQ
      }
      static baseTheme(QQ) {
        return LQ.w.lowest(vw.of(Mq("." + xq, QQ, eq)))
      }
      static findFromDOM(QQ) {
        var FQ;
        let wQ = QQ.querySelector(".cm-content"),
          LQ = wQ && bw.get(wQ) || bw.get(QQ);
        return (null === (FQ = null === LQ || void 0 === LQ ? void 0 : LQ.root) || void 0 === FQ ? void 0 : FQ.view) || null
      }
    }
    Rq.styleModule = vw, Rq.inputHandler = KF, Rq.clipboardInputFilter = lF, Rq.clipboardOutputFilter = jF, Rq.scrollHandler = fF, Rq.focusChangeEffect = zF, Rq.perLineTextDirection = aF, Rq.exceptionSink = NF, Rq.updateListener = TF, Rq.editable = nF, Rq.mouseSelectionStyle = UF, Rq.dragMovesSelection = IF, Rq.clickAddsSelectionRange = rF, Rq.qo = Qw, Rq.blockWrappers = Fw, Rq.outerDecorations = ww, Rq.atomicRanges = Lw, Rq.bidiIsolatedRanges = qw, Rq.cursorScrollMargin = LQ.r.define({
      combine: QQ => {
        let FQ = 5,
          wQ = 5;
        for (let LQ of QQ) "number" == typeof LQ ? FQ = wQ = LQ : ({
          x: FQ,
          y: wQ
        } = LQ);
        return {
          x: FQ,
          y: wQ
        }
      }
    }), Rq.scrollMargins = Dw, Rq.darkTheme = Yq, Rq.cspNonce = LQ.r.define({
      combine: QQ => QQ.length ? QQ[0] : ""
    }), Rq.contentAttributes = dF, Rq.editorAttributes = BF, Rq.lineWrapping = Rq.contentAttributes.of({
      class: "cm-lineWrapping"
    }), Rq.announce = LQ.H.define();
    const Oq = 4096,
      sq = {};
    class rq {
      constructor(QQ, FQ, wQ, LQ, qQ, oQ) {
        this.from = QQ, this.to = FQ, this.dir = wQ, this.isolates = LQ, this.fresh = qQ, this.order = oQ
      }
      static update(QQ, FQ) {
        if (FQ.empty && !QQ.some((QQ => QQ.fresh))) return QQ;
        let wQ = [],
          LQ = QQ.length ? QQ[QQ.length - 1].dir : mF.LTR;
        for (let qQ = Math.max(0, QQ.length - 10); qQ < QQ.length; qQ++) {
          let oQ = QQ[qQ];
          oQ.dir != LQ || FQ.touchesRange(oQ.from, oQ.to) || wQ.push(new rq(FQ.mapPos(oQ.from, 1), FQ.mapPos(oQ.to, -1), oQ.dir, oQ.isolates, !1, oQ.order))
        }
        return wQ
      }
    }

    function Iq(QQ, FQ, wQ) {
      for (let LQ = QQ.state.facet(FQ), qQ = LQ.length - 1; qQ >= 0; qQ--) {
        let FQ = LQ[qQ],
          oQ = "function" == typeof FQ ? FQ(QQ) : FQ;
        oQ && iQ(oQ, wQ)
      }
      return wQ
    }
    const Uq = SQ.mac ? "mac" : SQ.windows ? "win" : SQ.linux ? "linux" : "key";

    function Nq(QQ, FQ, wQ) {
      return FQ.altKey && (QQ = "Alt-" + QQ), FQ.ctrlKey && (QQ = "Ctrl-" + QQ), FQ.metaKey && (QQ = "Meta-" + QQ), !1 !== wQ && FQ.shiftKey && (QQ = "Shift-" + QQ), QQ
    }
    const Tq = LQ.w.default(Rq.domEventHandlers({
        keydown: (QQ, FQ) => Vq(lq(FQ.state), QQ, FQ, "editor")
      })),
      Kq = LQ.r.define({
        enables: Tq
      }),
      zq = new WeakMap;

    function lq(QQ) {
      let FQ = QQ.facet(Kq),
        wQ = zq.get(FQ);
      return wQ || zq.set(FQ, wQ = function(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uq,
          wQ = Object.create(null),
          LQ = Object.create(null),
          qQ = (QQ, FQ) => {
            let wQ = LQ[QQ];
            if (null == wQ) LQ[QQ] = FQ;
            else if (wQ != FQ) throw new Error("Key binding " + QQ + " is used both as a regular binding and as a multi-stroke prefix")
          },
          oQ = (QQ, LQ, oQ, DQ, kQ) => {
            var vQ, mQ;
            let uQ = wQ[QQ] || (wQ[QQ] = Object.create(null)),
              HQ = LQ.split(/ (?!$)/).map((QQ => function(QQ, FQ) {
                const wQ = QQ.split(/-(?!$)/);
                let LQ, qQ, oQ, DQ, kQ = wQ[wQ.length - 1];
                "Space" == kQ && (kQ = " ");
                for (let vQ = 0; vQ < wQ.length - 1; ++vQ) {
                  const QQ = wQ[vQ];
                  if (/^(cmd|meta|m)$/i.test(QQ)) DQ = !0;
                  else if (/^a(lt)?$/i.test(QQ)) LQ = !0;
                  else if (/^(c|ctrl|control)$/i.test(QQ)) qQ = !0;
                  else if (/^s(hift)?$/i.test(QQ)) oQ = !0;
                  else {
                    if (!/^mod$/i.test(QQ)) throw new Error("Unrecognized modifier name: " + QQ);
                    "mac" == FQ ? DQ = !0 : qQ = !0
                  }
                }
                return LQ && (kQ = "Alt-" + kQ), qQ && (kQ = "Ctrl-" + kQ), DQ && (kQ = "Meta-" + kQ), oQ && (kQ = "Shift-" + kQ), kQ
              }(QQ, FQ)));
            for (let FQ = 1; FQ < HQ.length; FQ++) {
              let wQ = HQ.slice(0, FQ).join(" ");
              qQ(wQ, !0), uQ[wQ] || (uQ[wQ] = {
                preventDefault: !0,
                stopPropagation: !1,
                run: [FQ => {
                  let LQ = aq = {
                    view: FQ,
                    prefix: wQ,
                    scope: QQ
                  };
                  return setTimeout((() => {
                    aq == LQ && (aq = null)
                  }), Xq), !0
                }]
              })
            }
            let bQ = HQ.join(" ");
            qQ(bQ, !1);
            let YQ = uQ[bQ] || (uQ[bQ] = {
              preventDefault: !1,
              stopPropagation: !1,
              run: (null === (mQ = null === (vQ = uQ._any) || void 0 === vQ ? void 0 : vQ.run) || void 0 === mQ ? void 0 : mQ.slice()) || []
            });
            oQ && YQ.run.push(oQ), DQ && (YQ.preventDefault = !0), kQ && (YQ.stopPropagation = !0)
          };
        for (let DQ of QQ) {
          let QQ = DQ.scope ? DQ.scope.split(" ") : ["editor"];
          if (DQ.any)
            for (let FQ of QQ) {
              let QQ = wQ[FQ] || (wQ[FQ] = Object.create(null));
              QQ._any || (QQ._any = {
                preventDefault: !1,
                stopPropagation: !1,
                run: []
              });
              let {
                any: LQ
              } = DQ;
              for (let FQ in QQ) QQ[FQ].run.push((QQ => LQ(QQ, fq)))
            }
          let LQ = DQ[FQ] || DQ.key;
          if (LQ)
            for (let FQ of QQ) oQ(FQ, LQ, DQ.run, DQ.preventDefault, DQ.stopPropagation), DQ.shift && oQ(FQ, "Shift-" + LQ, DQ.shift, DQ.preventDefault, DQ.stopPropagation)
        }
        return wQ
      }(FQ.reduce(((QQ, FQ) => QQ.concat(FQ)), []))), wQ
    }

    function jq(QQ, FQ, wQ) {
      return Vq(lq(QQ.state), FQ, QQ, wQ)
    }
    let aq = null;
    const Xq = 4e3;
    let fq = null;

    function Vq(QQ, FQ, wQ, qQ) {
      fq = FQ;
      let mQ = function(QQ) {
          var FQ = !(kQ && QQ.metaKey && QQ.shiftKey && !QQ.ctrlKey && !QQ.altKey || vQ && QQ.shiftKey && QQ.key && 1 == QQ.key.length || "Unidentified" == QQ.key) && QQ.key || (QQ.shiftKey ? DQ : oQ)[QQ.keyCode] || QQ.key || "Unidentified";
          return "Esc" == FQ && (FQ = "Escape"), "Del" == FQ && (FQ = "Delete"), "Left" == FQ && (FQ = "ArrowLeft"), "Up" == FQ && (FQ = "ArrowUp"), "Right" == FQ && (FQ = "ArrowRight"), "Down" == FQ && (FQ = "ArrowDown"), FQ
        }(FQ),
        uQ = (0, LQ.T)(mQ, 0),
        HQ = (0, LQ.U)(uQ) == mQ.length && " " != mQ,
        bQ = "",
        YQ = !1,
        xQ = !1,
        AQ = !1;
      aq && aq.view == wQ && aq.scope == qQ && (bQ = aq.prefix + " ", xL.indexOf(FQ.keyCode) < 0 && (xQ = !0, aq = null));
      let tQ, eQ, MQ = new Set,
        GQ = QQ => {
          if (QQ) {
            for (let FQ of QQ.run)
              if (!MQ.has(FQ) && (MQ.add(FQ), FQ(wQ))) return QQ.stopPropagation && (AQ = !0), !0;
            QQ.preventDefault && (QQ.stopPropagation && (AQ = !0), xQ = !0)
          }
          return !1
        },
        pQ = QQ[qQ];
      return pQ && (GQ(pQ[bQ + Nq(mQ, FQ, !HQ)]) ? YQ = !0 : !HQ || !(FQ.altKey || FQ.metaKey || FQ.ctrlKey) || SQ.windows && FQ.ctrlKey && FQ.altKey || SQ.mac && FQ.altKey && !FQ.ctrlKey && !FQ.metaKey || !(tQ = oQ[FQ.keyCode]) || tQ == mQ ? HQ && FQ.shiftKey && GQ(pQ[bQ + Nq(mQ, FQ, !0)]) && (YQ = !0) : (GQ(pQ[bQ + Nq(tQ, FQ, !0)]) || FQ.shiftKey && (eQ = DQ[FQ.keyCode]) != mQ && eQ != tQ && GQ(pQ[bQ + Nq(eQ, FQ, !1)])) && (YQ = !0), !YQ && GQ(pQ._any) && (YQ = !0)), xQ && (YQ = !0), YQ && AQ && FQ.stopPropagation(), fq = null, YQ
    }
    class hq {
      constructor(QQ, FQ, wQ, LQ, qQ) {
        this.className = QQ, this.left = FQ, this.top = wQ, this.width = LQ, this.height = qQ
      }
      draw() {
        let QQ = document.createElement("div");
        return QQ.className = this.className, this.adjust(QQ), QQ
      }
      update(QQ, FQ) {
        return FQ.className == this.className && (this.adjust(QQ), !0)
      }
      adjust(QQ) {
        QQ.style.left = this.left + "px", QQ.style.top = this.top + "px", null != this.width && (QQ.style.width = this.width + "px"), QQ.style.height = this.height + "px"
      }
      eq(QQ) {
        return this.left == QQ.left && this.top == QQ.top && this.width == QQ.width && this.height == QQ.height && this.className == QQ.className
      }
      static forRange(QQ, FQ, wQ) {
        if (wQ.empty) {
          let LQ = QQ.coordsAtPos(wQ.head, wQ.assoc || 1);
          if (!LQ) return [];
          let qQ = Jq(QQ);
          return [new hq(FQ, LQ.left - qQ.left, LQ.top - qQ.top, null, LQ.bottom - LQ.top)]
        }
        return function(QQ, FQ, wQ) {
          if (wQ.to <= QQ.viewport.from || wQ.from >= QQ.viewport.to) return [];
          let LQ = Math.max(wQ.from, QQ.viewport.from),
            qQ = Math.min(wQ.to, QQ.viewport.to),
            oQ = QQ.textDirection == mF.LTR,
            DQ = QQ.contentDOM,
            kQ = DQ.getBoundingClientRect(),
            vQ = Jq(QQ),
            mQ = DQ.querySelector(".cm-line"),
            uQ = mQ && window.getComputedStyle(mQ),
            HQ = kQ.left + (uQ ? parseInt(uQ.paddingLeft) + Math.min(0, parseInt(uQ.textIndent)) : 0),
            bQ = kQ.right - (uQ ? parseInt(uQ.paddingRight) : 0),
            YQ = hw(QQ, LQ, 1),
            xQ = hw(QQ, qQ, -1),
            AQ = YQ.type == IQ.Text ? YQ : null,
            tQ = xQ.type == IQ.Text ? xQ : null;
          AQ && (QQ.lineWrapping || YQ.widgetLineBreaks) && (AQ = Eq(QQ, LQ, 1, AQ));
          tQ && (QQ.lineWrapping || xQ.widgetLineBreaks) && (tQ = Eq(QQ, qQ, -1, tQ));
          if (AQ && tQ && AQ.from == tQ.from && AQ.to == tQ.to) return MQ(GQ(wQ.from, wQ.to, AQ));
          {
            let FQ = AQ ? GQ(wQ.from, null, AQ) : pQ(YQ, !1),
              LQ = tQ ? GQ(null, wQ.to, tQ) : pQ(xQ, !0),
              qQ = [];
            return (AQ || YQ).to < (tQ || xQ).from - (AQ && tQ ? 1 : 0) || YQ.widgetLineBreaks > 1 && FQ.bottom + QQ.defaultLineHeight / 2 < LQ.top ? qQ.push(eQ(HQ, FQ.bottom, bQ, LQ.top)) : FQ.bottom < LQ.top && QQ.elementAtHeight((FQ.bottom + LQ.top) / 2).type == IQ.Text && (FQ.bottom = LQ.top = (FQ.bottom + LQ.top) / 2), MQ(FQ).concat(qQ).concat(MQ(LQ))
          }

          function eQ(QQ, wQ, LQ, qQ) {
            return new hq(FQ, QQ - vQ.left, wQ - vQ.top, Math.max(0, LQ - QQ), qQ - wQ)
          }

          function MQ(QQ) {
            let {
              top: FQ,
              bottom: wQ,
              horizontal: LQ
            } = QQ, qQ = [];
            for (let oQ = 0; oQ < LQ.length; oQ += 2) qQ.push(eQ(LQ[oQ], FQ, LQ[oQ + 1], wQ));
            return qQ
          }

          function GQ(FQ, wQ, LQ) {
            let qQ = 1e9,
              DQ = -1e9,
              kQ = [];

            function vQ(FQ, wQ, vQ, mQ, uQ) {
              let YQ = QQ.coordsAtPos(FQ, FQ == LQ.to ? -2 : 2),
                xQ = QQ.coordsAtPos(vQ, vQ == LQ.from ? 2 : -2);
              YQ && xQ && (qQ = Math.min(YQ.top, xQ.top, qQ), DQ = Math.max(YQ.bottom, xQ.bottom, DQ), uQ == mF.LTR ? kQ.push(oQ && wQ ? HQ : YQ.left, oQ && mQ ? bQ : xQ.right) : kQ.push(!oQ && mQ ? HQ : xQ.left, !oQ && wQ ? bQ : YQ.right))
            }
            let mQ = null !== FQ && void 0 !== FQ ? FQ : LQ.from,
              uQ = null !== wQ && void 0 !== wQ ? wQ : LQ.to;
            for (let oQ of QQ.B5)
              if (oQ.to > mQ && oQ.from < uQ)
                for (let LQ = Math.max(oQ.from, mQ), qQ = Math.min(oQ.to, uQ);;) {
                  let oQ = QQ.state.doc.lineAt(LQ);
                  for (let DQ of QQ.bidiSpans(oQ)) {
                    let QQ = DQ.from + oQ.from,
                      kQ = DQ.to + oQ.from;
                    if (QQ >= qQ) break;
                    kQ > LQ && vQ(Math.max(QQ, LQ), null == FQ && QQ <= mQ, Math.min(kQ, qQ), null == wQ && kQ >= uQ, DQ.dir)
                  }
                  if (LQ = oQ.to + 1, LQ >= qQ) break
                }
            return 0 == kQ.length && vQ(mQ, null == FQ, uQ, null == wQ, QQ.textDirection), {
              top: qQ,
              bottom: DQ,
              horizontal: kQ
            }
          }

          function pQ(QQ, FQ) {
            let wQ = kQ.top + (FQ ? QQ.top : QQ.bottom);
            return {
              top: wQ,
              bottom: wQ,
              horizontal: []
            }
          }
        }(QQ, FQ, wQ)
      }
    }

    function Jq(QQ) {
      let FQ = QQ.scrollDOM.getBoundingClientRect();
      return {
        left: (QQ.textDirection == mF.LTR ? FQ.left : FQ.right - QQ.scrollDOM.clientWidth * QQ.scaleX) - QQ.scrollDOM.scrollLeft * QQ.scaleX,
        top: FQ.top - QQ.scrollDOM.scrollTop * QQ.scaleY
      }
    }

    function Eq(QQ, FQ, wQ, LQ) {
      let qQ = QQ.coordsAtPos(FQ, 2 * wQ);
      if (!qQ) return LQ;
      let oQ = QQ.dom.getBoundingClientRect(),
        DQ = (qQ.top + qQ.bottom) / 2,
        kQ = QQ.posAtCoords({
          x: oQ.left + 1,
          y: DQ
        }),
        vQ = QQ.posAtCoords({
          x: oQ.right - 1,
          y: DQ
        });
      return null == kQ || null == vQ ? LQ : {
        from: Math.max(LQ.from, Math.min(kQ, vQ)),
        to: Math.min(LQ.to, Math.max(kQ, vQ))
      }
    }
    class nq {
      constructor(QQ, FQ) {
        this.view = QQ, this.layer = FQ, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
          read: this.measure.bind(this),
          write: this.draw.bind(this)
        }, this.dom = QQ.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), FQ.above && this.dom.classList.add("cm-layer-above"), FQ.class && this.dom.classList.add(FQ.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(QQ.state), QQ.requestMeasure(this.measureReq), FQ.mount && FQ.mount(this.dom, QQ)
      }
      update(QQ) {
        QQ.startState.facet(gq) != QQ.state.facet(gq) && this.setOrder(QQ.state), (this.layer.update(QQ, this.dom) || QQ.geometryChanged) && (this.scale(), QQ.view.requestMeasure(this.measureReq))
      }
      docViewUpdate(QQ) {
        !1 !== this.layer.updateOnDocViewUpdate && QQ.requestMeasure(this.measureReq)
      }
      setOrder(QQ) {
        let FQ = 0,
          wQ = QQ.facet(gq);
        for (; FQ < wQ.length && wQ[FQ] != this.layer;) FQ++;
        this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - FQ)
      }
      measure() {
        return this.layer.markers(this.view)
      }
      scale() {
        let {
          scaleX: QQ,
          scaleY: FQ
        } = this.view;
        QQ == this.scaleX && FQ == this.scaleY || (this.scaleX = QQ, this.scaleY = FQ, this.dom.style.transform = `scale(${1/QQ}, ${1/FQ})`)
      }
      draw(QQ) {
        if (QQ.length != this.drawn.length || QQ.some(((QQ, FQ) => {
            return wQ = QQ, LQ = this.drawn[FQ], !(wQ.constructor == LQ.constructor && wQ.eq(LQ));
            var wQ, LQ
          }))) {
          let FQ = this.dom.firstChild,
            wQ = 0;
          for (let LQ of QQ) LQ.update && FQ && LQ.constructor && this.drawn[wQ].constructor && LQ.update(FQ, this.drawn[wQ]) ? (FQ = FQ.nextSibling, wQ++) : this.dom.insertBefore(LQ.draw(), FQ);
          for (; FQ;) {
            let QQ = FQ.nextSibling;
            FQ.remove(), FQ = QQ
          }
          this.drawn = QQ, SQ.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none")
        }
      }
      destroy() {
        this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove()
      }
    }
    const gq = LQ.r.define();

    function Pq(QQ) {
      return [ZF.define((FQ => new nq(FQ, QQ))), gq.of(QQ)]
    }
    const Zq = LQ.r.define({
      combine: QQ => (0, LQ.W)(QQ, {
        cursorBlinkRate: 1200,
        drawRangeCursor: !0,
        iosSelectionHandles: !0
      }, {
        cursorBlinkRate: (QQ, FQ) => Math.min(QQ, FQ),
        drawRangeCursor: (QQ, FQ) => QQ || FQ
      })
    });

    function yq() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Zq.of(QQ), dq, Fo, wo, XF.of(!0)]
    }

    function Bq(QQ) {
      return QQ.startState.facet(Zq) != QQ.state.facet(Zq)
    }
    const dq = Pq({
      above: !0,
      markers(QQ) {
        let {
          state: FQ
        } = QQ, wQ = FQ.facet(Zq), qQ = [];
        for (let oQ of FQ.selection.PA) {
          let DQ = oQ == FQ.selection.main;
          if (oQ.empty || wQ.drawRangeCursor && !(DQ && SQ.ios && wQ.iosSelectionHandles)) {
            let FQ = DQ ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary",
              wQ = oQ.empty ? oQ : LQ.j.cursor(oQ.head, oQ.assoc);
            for (let LQ of hq.forRange(QQ, FQ, wQ)) qQ.push(LQ)
          }
        }
        return qQ
      },
      update(QQ, FQ) {
        QQ.transactions.some((QQ => QQ.selection)) && (FQ.style.animationName = "cm-blink" == FQ.style.animationName ? "cm-blink2" : "cm-blink");
        let wQ = Bq(QQ);
        return wQ && Qo(QQ.state, FQ), QQ.docChanged || QQ.selectionSet || wQ
      },
      mount(QQ, FQ) {
        Qo(FQ.state, QQ)
      },
      class: "cm-cursorLayer"
    });

    function Qo(QQ, FQ) {
      FQ.style.animationDuration = QQ.facet(Zq).cursorBlinkRate + "ms"
    }
    const Fo = Pq({
        above: !1,
        markers(QQ) {
          let FQ = [],
            {
              main: wQ,
              PA: qQ
            } = QQ.state.selection;
          for (let LQ of qQ)
            if (!LQ.empty)
              for (let wQ of hq.forRange(QQ, "cm-selectionBackground", LQ)) FQ.push(wQ);
          if (SQ.ios && !wQ.empty && QQ.state.facet(Zq).iosSelectionHandles) {
            for (let qQ of hq.forRange(QQ, "cm-selectionHandle cm-selectionHandle-start", LQ.j.cursor(wQ.from, 1))) FQ.push(qQ);
            for (let qQ of hq.forRange(QQ, "cm-selectionHandle cm-selectionHandle-end", LQ.j.cursor(wQ.to, 1))) FQ.push(qQ)
          }
          return FQ
        },
        update: (QQ, FQ) => QQ.docChanged || QQ.selectionSet || QQ.viewportChanged || Bq(QQ),
        class: "cm-selectionLayer"
      }),
      wo = LQ.w.highest(Rq.theme({
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
      Lo = LQ.H.define({
        map: (QQ, FQ) => null == QQ ? null : FQ.mapPos(QQ)
      }),
      qo = LQ.L.define({
        create: () => null,
        update: (QQ, FQ) => (null != QQ && (QQ = FQ.changes.mapPos(QQ)), FQ.effects.reduce(((QQ, FQ) => FQ.is(Lo) ? FQ.value : QQ), QQ))
      }),
      oo = ZF.fromClass(class {
        constructor(QQ) {
          this.view = QQ, this.cursor = null, this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawCursor.bind(this)
          }
        }
        update(QQ) {
          var FQ;
          let wQ = QQ.state.field(qo);
          null == wQ ? null != this.cursor && (null === (FQ = this.cursor) || void 0 === FQ || FQ.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (QQ.startState.field(qo) != wQ || QQ.docChanged || QQ.geometryChanged) && this.view.requestMeasure(this.measureReq))
        }
        readPos() {
          let {
            view: QQ
          } = this, FQ = QQ.state.field(qo), wQ = null != FQ && QQ.coordsAtPos(FQ);
          if (!wQ) return null;
          let LQ = QQ.scrollDOM.getBoundingClientRect();
          return {
            left: wQ.left - LQ.left + QQ.scrollDOM.scrollLeft * QQ.scaleX,
            top: wQ.top - LQ.top + QQ.scrollDOM.scrollTop * QQ.scaleY,
            height: wQ.bottom - wQ.top
          }
        }
        drawCursor(QQ) {
          if (this.cursor) {
            let {
              scaleX: FQ,
              scaleY: wQ
            } = this.view;
            QQ ? (this.cursor.style.left = QQ.left / FQ + "px", this.cursor.style.top = QQ.top / wQ + "px", this.cursor.style.height = QQ.height / wQ + "px") : this.cursor.style.left = "-100000px"
          }
        }
        destroy() {
          this.cursor && this.cursor.remove()
        }
        setDropPos(QQ) {
          this.view.state.field(qo) != QQ && this.view.dispatch({
            effects: Lo.of(QQ)
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

    function Do() {
      return [qo, oo]
    }

    function ko(QQ, FQ, wQ, LQ, qQ) {
      FQ.lastIndex = 0;
      for (let oQ, DQ = QQ.iterRange(wQ, LQ), kQ = wQ; !DQ.next().done; kQ += DQ.value.length)
        if (!DQ.lineBreak)
          for (; oQ = FQ.exec(DQ.value);) qQ(kQ + oQ.index, oQ)
    }
    class vo {
      constructor(QQ) {
        const {
          regexp: FQ,
          decoration: wQ,
          decorate: LQ,
          boundary: qQ,
          maxLength: oQ = 1e3
        } = QQ;
        if (!FQ.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
        if (this.regexp = FQ, LQ) this.addMatch = (QQ, FQ, wQ, qQ) => LQ(qQ, wQ, wQ + QQ[0].length, QQ, FQ);
        else if ("function" == typeof wQ) this.addMatch = (QQ, FQ, LQ, qQ) => {
          let oQ = wQ(QQ, FQ, LQ);
          oQ && qQ(LQ, LQ + QQ[0].length, oQ)
        };
        else {
          if (!wQ) throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
          this.addMatch = (QQ, FQ, LQ, qQ) => qQ(LQ, LQ + QQ[0].length, wQ)
        }
        this.boundary = qQ, this.maxLength = oQ
      }
      createDeco(QQ) {
        let FQ = new LQ.z,
          wQ = FQ.add.bind(FQ);
        for (let {
            from: LQ,
            to: qQ
          }
          of
          function(QQ, FQ) {
            let wQ = QQ.B5;
            if (1 == wQ.length && wQ[0].from == QQ.viewport.from && wQ[0].to == QQ.viewport.to) return wQ;
            let LQ = [];
            for (let {
                from: qQ,
                to: oQ
              }
              of wQ) qQ = Math.max(QQ.state.doc.lineAt(qQ).from, qQ - FQ), oQ = Math.min(QQ.state.doc.lineAt(oQ).to, oQ + FQ), LQ.length && LQ[LQ.length - 1].to >= qQ ? LQ[LQ.length - 1].to = oQ : LQ.push({
              from: qQ,
              to: oQ
            });
            return LQ
          }(QQ, this.maxLength)) ko(QQ.state.doc, this.regexp, LQ, qQ, ((FQ, LQ) => this.addMatch(LQ, QQ, FQ, wQ)));
        return FQ.finish()
      }
      updateDeco(QQ, FQ) {
        let wQ = 1e9,
          LQ = -1;
        return QQ.docChanged && QQ.changes.iterChanges(((FQ, qQ, oQ, DQ) => {
          DQ >= QQ.view.viewport.from && oQ <= QQ.view.viewport.to && (wQ = Math.min(oQ, wQ), LQ = Math.max(DQ, LQ))
        })), QQ.viewportMoved || LQ - wQ > 1e3 ? this.createDeco(QQ.view) : LQ > -1 ? this.updateRange(QQ.view, FQ.map(QQ.changes), wQ, LQ) : FQ
      }
      updateRange(QQ, FQ, wQ, LQ) {
        for (let qQ of QQ.B5) {
          let oQ = Math.max(qQ.from, wQ),
            DQ = Math.min(qQ.to, LQ);
          if (DQ >= oQ) {
            let wQ = QQ.state.doc.lineAt(oQ),
              LQ = wQ.to < DQ ? QQ.state.doc.lineAt(DQ) : wQ,
              kQ = Math.max(qQ.from, wQ.from),
              vQ = Math.min(qQ.to, LQ.to);
            if (this.boundary) {
              for (; oQ > wQ.from; oQ--)
                if (this.boundary.test(wQ.text[oQ - 1 - wQ.from])) {
                  kQ = oQ;
                  break
                } for (; DQ < LQ.to; DQ++)
                if (this.boundary.test(LQ.text[DQ - LQ.from])) {
                  vQ = DQ;
                  break
                }
            }
            let mQ, uQ = [],
              HQ = (QQ, FQ, wQ) => uQ.push(wQ.range(QQ, FQ));
            if (wQ == LQ)
              for (this.regexp.lastIndex = kQ - wQ.from;
                (mQ = this.regexp.exec(wQ.text)) && mQ.index < vQ - wQ.from;) this.addMatch(mQ, QQ, mQ.index + wQ.from, HQ);
            else ko(QQ.state.doc, this.regexp, kQ, vQ, ((FQ, wQ) => this.addMatch(wQ, QQ, FQ, HQ)));
            FQ = FQ.update({
              filterFrom: kQ,
              filterTo: vQ,
              filter: (QQ, FQ) => QQ < kQ || FQ > vQ,
              add: uQ
            })
          }
        }
        return FQ
      }
    }
    const mo = null != /x/.unicode ? "gu" : "g",
      uo = new RegExp("[\0-\b\n-\x1f\x7f-\x9f\xad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]", mo),
      Ho = {
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
    let bo = null;
    const Yo = LQ.r.define({
      combine(QQ) {
        let FQ = (0, LQ.W)(QQ, {
          render: null,
          specialChars: uo,
          addSpecialChars: null
        });
        return (FQ.replaceTabs = ! function() {
          var QQ;
          if (null == bo && "undefined" != typeof document && document.body) {
            let FQ = document.body.style;
            bo = null != (null !== (QQ = FQ.tabSize) && void 0 !== QQ ? QQ : FQ.MozTabSize)
          }
          return bo || !1
        }()) && (FQ.specialChars = new RegExp("\t|" + FQ.specialChars.source, mo)), FQ.addSpecialChars && (FQ.specialChars = new RegExp(FQ.specialChars.source + "|" + FQ.addSpecialChars.source, mo)), FQ
      }
    });

    function xo() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Yo.of(QQ), Ao || (Ao = ZF.fromClass(class {
        constructor(QQ) {
          this.view = QQ, this.qo = UQ.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(QQ.state.facet(Yo)), this.qo = this.decorator.createDeco(QQ)
        }
        makeDecorator(QQ) {
          return new vo({
            regexp: QQ.specialChars,
            decoration: (FQ, wQ, qQ) => {
              let {
                doc: oQ
              } = wQ.state, DQ = (0, LQ.T)(FQ[0], 0);
              if (9 == DQ) {
                let QQ = oQ.lineAt(qQ),
                  FQ = wQ.state.tabSize,
                  DQ = (0, LQ.X)(QQ.text, FQ, qQ - QQ.from);
                return UQ.replace({
                  widget: new eo((FQ - DQ % FQ) * this.view.defaultCharacterWidth / this.view.scaleX)
                })
              }
              return this.decorationCache[DQ] || (this.decorationCache[DQ] = UQ.replace({
                widget: new to(QQ, DQ)
              }))
            },
            boundary: QQ.replaceTabs ? void 0 : /[^]/
          })
        }
        update(QQ) {
          let FQ = QQ.state.facet(Yo);
          QQ.startState.facet(Yo) != FQ ? (this.decorator = this.makeDecorator(FQ), this.qo = this.decorator.createDeco(QQ.view)) : this.qo = this.decorator.updateDeco(QQ, this.qo)
        }
      }, {
        qo: QQ => QQ.qo
      }))]
    }
    let Ao = null;
    class to extends rQ {
      constructor(QQ, FQ) {
        super(), this.options = QQ, this.code = FQ
      }
      eq(QQ) {
        return QQ.code == this.code
      }
      toDOM(QQ) {
        let FQ = function(QQ) {
            return QQ >= 32 ? "\u2022" : 10 == QQ ? "\u2424" : String.fromCharCode(9216 + QQ)
          }(this.code),
          wQ = QQ.state.phrase("Control character") + " " + (Ho[this.code] || "0x" + this.code.toString(16)),
          LQ = this.options.render && this.options.render(this.code, wQ, FQ);
        if (LQ) return LQ;
        let qQ = document.createElement("span");
        return qQ.textContent = FQ, qQ.title = wQ, qQ.setAttribute("aria-label", wQ), qQ.className = "cm-specialChar", qQ
      }
      ignoreEvent() {
        return !1
      }
    }
    class eo extends rQ {
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

    function Mo() {
      return po
    }
    const Go = UQ.line({
        class: "cm-activeLine"
      }),
      po = ZF.fromClass(class {
        constructor(QQ) {
          this.qo = this.getDeco(QQ)
        }
        update(QQ) {
          (QQ.docChanged || QQ.selectionSet) && (this.qo = this.getDeco(QQ.view))
        }
        getDeco(QQ) {
          let FQ = -1,
            wQ = [];
          for (let LQ of QQ.state.selection.PA) {
            let qQ = QQ.lineBlockAt(LQ.head);
            qQ.from > FQ && (wQ.push(Go.range(qQ.from)), FQ = qQ.from)
          }
          return UQ.set(wQ)
        }
      }, {
        qo: QQ => QQ.qo
      });
    class co extends rQ {
      constructor(QQ) {
        super(), this.content = QQ
      }
      toDOM(QQ) {
        let FQ = document.createElement("span");
        return FQ.className = "cm-placeholder", FQ.style.pointerEvents = "none", FQ.appendChild("string" == typeof this.content ? document.createTextNode(this.content) : "function" == typeof this.content ? this.content(QQ) : this.content.cloneNode(!0)), FQ.setAttribute("aria-hidden", "true"), FQ
      }
      coordsAt(QQ) {
        let FQ = QQ.firstChild ? VQ(QQ.firstChild) : [];
        if (!FQ.length) return null;
        let wQ = window.getComputedStyle(QQ.parentNode),
          LQ = PQ(FQ[0], "rtl" != wQ.direction),
          qQ = parseInt(wQ.lineHeight);
        return LQ.bottom - LQ.top > 1.5 * qQ ? {
          left: LQ.left,
          right: LQ.right,
          top: LQ.top,
          bottom: LQ.top + qQ
        } : LQ
      }
      ignoreEvent() {
        return !1
      }
    }

    function Co(QQ) {
      let FQ = ZF.fromClass(class {
        constructor(FQ) {
          this.view = FQ, this.placeholder = QQ ? UQ.set([UQ.widget({
            widget: new co(QQ),
            side: 1
          }).range(0)]) : UQ.none
        }
        get qo() {
          return this.view.state.doc.length ? UQ.none : this.placeholder
        }
      }, {
        qo: QQ => QQ.qo
      });
      return "string" == typeof QQ ? [FQ, Rq.contentAttributes.of({
        "aria-placeholder": QQ
      })] : FQ
    }
    const So = 2e3;

    function io(QQ, FQ) {
      let wQ = QQ.posAtCoords({
          x: FQ.clientX,
          y: FQ.clientY
        }, !1),
        qQ = QQ.state.doc.lineAt(wQ),
        oQ = wQ - qQ.from,
        DQ = oQ > So ? -1 : oQ == qQ.length ? function(QQ, FQ) {
          let wQ = QQ.coordsAtPos(QQ.viewport.from);
          return wQ ? Math.round(Math.abs((wQ.left - FQ) / QQ.defaultCharacterWidth)) : -1
        }(QQ, FQ.clientX) : (0, LQ.X)(qQ.text, QQ.state.tabSize, wQ - qQ.from);
      return {
        line: qQ.number,
        col: DQ,
        off: oQ
      }
    }

    function Wo(QQ, FQ) {
      let wQ = io(QQ, FQ),
        qQ = QQ.state.selection;
      return wQ ? {
        update(QQ) {
          if (QQ.docChanged) {
            let FQ = QQ.changes.mapPos(QQ.startState.doc.line(wQ.line).from),
              LQ = QQ.state.doc.lineAt(FQ);
            wQ = {
              line: LQ.number,
              col: wQ.col,
              off: Math.min(wQ.off, LQ.length)
            }, qQ = qQ.map(QQ.changes)
          }
        },
        get(FQ, oQ, DQ) {
          let kQ = io(QQ, FQ);
          if (!kQ) return qQ;
          let vQ = function(QQ, FQ, wQ) {
            let qQ = Math.min(FQ.line, wQ.line),
              oQ = Math.max(FQ.line, wQ.line),
              DQ = [];
            if (FQ.off > So || wQ.off > So || FQ.col < 0 || wQ.col < 0) {
              let kQ = Math.min(FQ.off, wQ.off),
                vQ = Math.max(FQ.off, wQ.off);
              for (let FQ = qQ; FQ <= oQ; FQ++) {
                let wQ = QQ.doc.line(FQ);
                wQ.length <= vQ && DQ.push(LQ.j.range(wQ.from + kQ, wQ.to + vQ))
              }
            } else {
              let kQ = Math.min(FQ.col, wQ.col),
                vQ = Math.max(FQ.col, wQ.col);
              for (let FQ = qQ; FQ <= oQ; FQ++) {
                let wQ = QQ.doc.line(FQ),
                  qQ = (0, LQ.db)(wQ.text, kQ, QQ.tabSize, !0);
                if (qQ < 0) DQ.push(LQ.j.cursor(wQ.to));
                else {
                  let FQ = (0, LQ.db)(wQ.text, vQ, QQ.tabSize);
                  DQ.push(LQ.j.range(wQ.from + qQ, wQ.from + FQ))
                }
              }
            }
            return DQ
          }(QQ.state, wQ, kQ);
          return vQ.length ? DQ ? LQ.j.create(vQ.concat(qQ.PA)) : LQ.j.create(vQ) : qQ
        }
      } : null
    }

    function Ro(QQ) {
      let FQ = (null === QQ || void 0 === QQ ? void 0 : QQ.eventFilter) || (QQ => QQ.altKey && 0 == QQ.button);
      return Rq.mouseSelectionStyle.of(((QQ, wQ) => FQ(wQ) ? Wo(QQ, wQ) : null))
    }
    const Oo = {
        Alt: [18, QQ => !!QQ.altKey],
        Control: [17, QQ => !!QQ.ctrlKey],
        Shift: [16, QQ => !!QQ.shiftKey],
        Meta: [91, QQ => !!QQ.metaKey]
      },
      so = {
        style: "cursor: crosshair"
      };

    function ro() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [FQ, wQ] = Oo[QQ.key || "Alt"],
        LQ = ZF.fromClass(class {
          constructor(QQ) {
            this.view = QQ, this.isDown = !1
          }
          set(QQ) {
            this.isDown != QQ && (this.isDown = QQ, this.view.update([]))
          }
        }, {
          eventObservers: {
            keydown(QQ) {
              this.set(QQ.keyCode == FQ || wQ(QQ))
            },
            keyup(QQ) {
              QQ.keyCode != FQ && wQ(QQ) || this.set(!1)
            },
            mousemove(QQ) {
              this.set(wQ(QQ))
            }
          }
        });
      return [LQ, Rq.contentAttributes.of((QQ => {
        var FQ;
        return (null === (FQ = QQ.plugin(LQ)) || void 0 === FQ ? void 0 : FQ.isDown) ? so : null
      }))]
    }
    const Io = "-10000px";
    class Uo {
      constructor(QQ, FQ, wQ, LQ) {
        this.facet = FQ, this.createTooltipView = wQ, this.removeTooltipView = LQ, this.input = QQ.state.facet(FQ), this.tooltips = this.input.filter((QQ => QQ));
        let qQ = null;
        this.tooltipViews = this.tooltips.map((QQ => qQ = wQ(QQ, qQ)))
      }
      update(QQ, FQ) {
        var wQ;
        let LQ = QQ.state.facet(this.facet),
          qQ = LQ.filter((QQ => QQ));
        if (LQ === this.input) {
          for (let FQ of this.tooltipViews) FQ.update && FQ.update(QQ);
          return !1
        }
        let oQ = [],
          DQ = FQ ? [] : null;
        for (let kQ = 0; kQ < qQ.length; kQ++) {
          let wQ = qQ[kQ],
            LQ = -1;
          if (wQ) {
            for (let QQ = 0; QQ < this.tooltips.length; QQ++) {
              let FQ = this.tooltips[QQ];
              FQ && FQ.create == wQ.create && (LQ = QQ)
            }
            if (LQ < 0) oQ[kQ] = this.createTooltipView(wQ, kQ ? oQ[kQ - 1] : null), DQ && (DQ[kQ] = !!wQ.above);
            else {
              let wQ = oQ[kQ] = this.tooltipViews[LQ];
              DQ && (DQ[kQ] = FQ[LQ]), wQ.update && wQ.update(QQ)
            }
          }
        }
        for (let kQ of this.tooltipViews) oQ.indexOf(kQ) < 0 && (this.removeTooltipView(kQ), null === (wQ = kQ.destroy) || void 0 === wQ || wQ.call(kQ));
        return FQ && (DQ.forEach(((QQ, wQ) => FQ[wQ] = QQ)), FQ.length = DQ.length), this.input = LQ, this.tooltips = qQ, this.tooltipViews = oQ, !0
      }
    }

    function No(QQ) {
      let FQ = QQ.dom.ownerDocument.documentElement;
      return {
        top: 0,
        left: 0,
        bottom: FQ.clientHeight,
        right: FQ.clientWidth
      }
    }
    const To = LQ.r.define({
        combine: QQ => {
          var FQ, wQ, LQ;
          return {
            position: SQ.ios ? "absolute" : (null === (FQ = QQ.find((QQ => QQ.position))) || void 0 === FQ ? void 0 : FQ.position) || "fixed",
            parent: (null === (wQ = QQ.find((QQ => QQ.parent))) || void 0 === wQ ? void 0 : wQ.parent) || null,
            tooltipSpace: (null === (LQ = QQ.find((QQ => QQ.tooltipSpace))) || void 0 === LQ ? void 0 : LQ.tooltipSpace) || No
          }
        }
      }),
      Ko = new WeakMap,
      zo = ZF.fromClass(class {
        constructor(QQ) {
          this.view = QQ, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
          let FQ = QQ.state.facet(To);
          this.position = FQ.position, this.parent = FQ.parent, this.classes = QQ.themeClasses, this.createContainer(), this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this
          }, this.resizeObserver = "function" == typeof ResizeObserver ? new ResizeObserver((() => this.measureSoon())) : null, this.manager = new Uo(QQ, fo, ((QQ, FQ) => this.createTooltip(QQ, FQ)), (QQ => {
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
          let FQ = this.manager.update(QQ, this.above);
          FQ && this.observeIntersection();
          let wQ = FQ || QQ.geometryChanged,
            LQ = QQ.state.facet(To);
          if (LQ.position != this.position && !this.madeAbsolute) {
            this.position = LQ.position;
            for (let QQ of this.manager.tooltipViews) QQ.dom.style.position = this.position;
            wQ = !0
          }
          if (LQ.parent != this.parent) {
            this.parent && this.container.remove(), this.parent = LQ.parent, this.createContainer();
            for (let QQ of this.manager.tooltipViews) this.container.appendChild(QQ.dom);
            wQ = !0
          } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
          wQ && this.maybeMeasure()
        }
        createTooltip(QQ, FQ) {
          let wQ = QQ.create(this.view),
            LQ = FQ ? FQ.dom : null;
          if (wQ.dom.classList.add("cm-tooltip"), QQ.arrow && !wQ.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
            let QQ = document.createElement("div");
            QQ.className = "cm-tooltip-arrow", wQ.dom.appendChild(QQ)
          }
          return wQ.dom.style.position = this.position, wQ.dom.style.top = Io, wQ.dom.style.left = "0px", this.container.insertBefore(wQ.dom, LQ), wQ.mount && wQ.mount(this.view), this.resizeObserver && this.resizeObserver.observe(wQ.dom), wQ
        }
        destroy() {
          var QQ, FQ, wQ;
          this.view.win.removeEventListener("resize", this.measureSoon);
          for (let LQ of this.manager.tooltipViews) LQ.dom.remove(), null === (QQ = LQ.destroy) || void 0 === QQ || QQ.call(LQ);
          this.parent && this.container.remove(), null === (FQ = this.resizeObserver) || void 0 === FQ || FQ.disconnect(), null === (wQ = this.intersectionObserver) || void 0 === wQ || wQ.disconnect(), clearTimeout(this.measureTimeout)
        }
        readMeasure() {
          let QQ = 1,
            FQ = 1,
            wQ = !1;
          if ("fixed" == this.position && this.manager.tooltipViews.length) {
            let {
              dom: QQ
            } = this.manager.tooltipViews[0];
            if (SQ.safari) {
              let FQ = QQ.getBoundingClientRect();
              wQ = Math.abs(FQ.top + 1e4) > 1 || Math.abs(FQ.left) > 1
            } else wQ = !!QQ.offsetParent && QQ.offsetParent != this.container.ownerDocument.body
          }
          if (wQ || "absolute" == this.position)
            if (this.parent) {
              let wQ = this.parent.getBoundingClientRect();
              wQ.width && wQ.height && (QQ = wQ.width / this.parent.offsetWidth, FQ = wQ.height / this.parent.offsetHeight)
            } else({
              scaleX: QQ,
              scaleY: FQ
            } = this.view.viewState);
          let LQ = this.view.scrollDOM.getBoundingClientRect(),
            qQ = kw(this.view);
          return {
            visible: {
              left: LQ.left + qQ.left,
              top: LQ.top + qQ.top,
              right: LQ.right - qQ.right,
              bottom: LQ.bottom - qQ.bottom
            },
            parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
            pos: this.manager.tooltips.map(((QQ, FQ) => {
              let wQ = this.manager.tooltipViews[FQ];
              return wQ.getCoords ? wQ.getCoords(QQ.pos) : this.view.coordsAtPos(QQ.pos)
            })),
            size: this.manager.tooltipViews.map((QQ => {
              let {
                dom: FQ
              } = QQ;
              return FQ.getBoundingClientRect()
            })),
            space: this.view.state.facet(To).tooltipSpace(this.view),
            scaleX: QQ,
            scaleY: FQ,
            makeAbsolute: wQ
          }
        }
        writeMeasure(QQ) {
          var FQ;
          if (QQ.makeAbsolute) {
            this.madeAbsolute = !0, this.position = "absolute";
            for (let QQ of this.manager.tooltipViews) QQ.dom.style.position = "absolute"
          }
          let {
            visible: wQ,
            space: LQ,
            scaleX: qQ,
            scaleY: oQ
          } = QQ, DQ = [];
          for (let kQ = 0; kQ < this.manager.tooltips.length; kQ++) {
            let vQ = this.manager.tooltips[kQ],
              mQ = this.manager.tooltipViews[kQ],
              {
                dom: uQ
              } = mQ,
              HQ = QQ.pos[kQ],
              bQ = QQ.size[kQ];
            if (!HQ || !1 !== vQ.clip && (HQ.bottom <= Math.max(wQ.top, LQ.top) || HQ.top >= Math.min(wQ.bottom, LQ.bottom) || HQ.right < Math.max(wQ.left, LQ.left) - .1 || HQ.left > Math.min(wQ.right, LQ.right) + .1)) {
              uQ.style.top = Io;
              continue
            }
            let YQ = vQ.arrow ? mQ.dom.querySelector(".cm-tooltip-arrow") : null,
              xQ = YQ ? 7 : 0,
              AQ = bQ.right - bQ.left,
              tQ = null !== (FQ = Ko.get(mQ)) && void 0 !== FQ ? FQ : bQ.bottom - bQ.top,
              eQ = mQ.offset || Xo,
              MQ = this.view.textDirection == mF.LTR,
              GQ = bQ.width > LQ.right - LQ.left ? MQ ? LQ.left : LQ.right - bQ.width : MQ ? Math.max(LQ.left, Math.min(HQ.left - (YQ ? 14 : 0) + eQ.x, LQ.right - AQ)) : Math.min(Math.max(LQ.left, HQ.left - AQ + (YQ ? 14 : 0) - eQ.x), LQ.right - AQ),
              pQ = this.above[kQ];
            !vQ.strictSide && (pQ ? HQ.top - tQ - xQ - eQ.y < LQ.top : HQ.bottom + tQ + xQ + eQ.y > LQ.bottom) && pQ == LQ.bottom - HQ.bottom > HQ.top - LQ.top && (pQ = this.above[kQ] = !pQ);
            let cQ = (pQ ? HQ.top - LQ.top : LQ.bottom - HQ.bottom) - xQ;
            if (cQ < tQ && !1 !== mQ.resize) {
              if (cQ < this.view.defaultLineHeight) {
                uQ.style.top = Io;
                continue
              }
              Ko.set(mQ, tQ), uQ.style.height = (tQ = cQ) / oQ + "px"
            } else uQ.style.height && (uQ.style.height = "");
            let CQ = pQ ? HQ.top - tQ - xQ - eQ.y : HQ.bottom + xQ + eQ.y,
              SQ = GQ + AQ;
            if (!0 !== mQ.overlap)
              for (let QQ of DQ) QQ.left < SQ && QQ.right > GQ && QQ.top < CQ + tQ && QQ.bottom > CQ && (CQ = pQ ? QQ.top - tQ - 2 - xQ : QQ.bottom + xQ + 2);
            if ("absolute" == this.position ? (uQ.style.top = (CQ - QQ.parent.top) / oQ + "px", jo(uQ, (GQ - QQ.parent.left) / qQ)) : (uQ.style.top = CQ / oQ + "px", jo(uQ, GQ / qQ)), YQ) {
              let QQ = HQ.left + (MQ ? eQ.x : -eQ.x) - (GQ + 14 - 7);
              YQ.style.left = QQ / qQ + "px"
            }!0 !== mQ.overlap && DQ.push({
              left: GQ,
              top: CQ,
              right: SQ,
              bottom: CQ + tQ
            }), uQ.classList.toggle("cm-tooltip-above", pQ), uQ.classList.toggle("cm-tooltip-below", !pQ), mQ.positioned && mQ.positioned(QQ.space)
          }
        }
        maybeMeasure() {
          if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
            for (let QQ of this.manager.tooltipViews) QQ.dom.style.top = Io
        }
      }, {
        eventObservers: {
          scroll() {
            this.maybeMeasure()
          }
        }
      });

    function jo(QQ, FQ) {
      let wQ = parseInt(QQ.style.left, 10);
      (isNaN(wQ) || Math.abs(FQ - wQ) > 1) && (QQ.style.left = FQ + "px")
    }
    const ao = Rq.baseTheme({
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
      Xo = {
        x: 0,
        y: 0
      },
      fo = LQ.r.define({
        enables: [zo, ao]
      }),
      Vo = LQ.r.define({
        combine: QQ => QQ.reduce(((QQ, FQ) => QQ.concat(FQ)), [])
      });
    class ho {
      static create(QQ) {
        return new ho(QQ)
      }
      constructor(QQ) {
        this.view = QQ, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new Uo(QQ, Vo, ((QQ, FQ) => this.createHostedView(QQ, FQ)), (QQ => QQ.dom.remove()))
      }
      createHostedView(QQ, FQ) {
        let wQ = QQ.create(this.view);
        return wQ.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(wQ.dom, FQ ? FQ.dom.nextSibling : this.dom.firstChild), this.mounted && wQ.mount && wQ.mount(this.view), wQ
      }
      mount(QQ) {
        for (let FQ of this.manager.tooltipViews) FQ.mount && FQ.mount(QQ);
        this.mounted = !0
      }
      positioned(QQ) {
        for (let FQ of this.manager.tooltipViews) FQ.positioned && FQ.positioned(QQ)
      }
      update(QQ) {
        this.manager.update(QQ)
      }
      destroy() {
        var QQ;
        for (let FQ of this.manager.tooltipViews) null === (QQ = FQ.destroy) || void 0 === QQ || QQ.call(FQ)
      }
      passProp(QQ) {
        let FQ;
        for (let wQ of this.manager.tooltipViews) {
          let LQ = wQ[QQ];
          if (void 0 !== LQ)
            if (void 0 === FQ) FQ = LQ;
            else if (FQ !== LQ) return
        }
        return FQ
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
    const Jo = fo.compute([Vo], (QQ => {
      let FQ = QQ.facet(Vo);
      return 0 === FQ.length ? null : {
        pos: Math.min(...FQ.map((QQ => QQ.pos))),
        end: Math.max(...FQ.map((QQ => {
          var FQ;
          return null !== (FQ = QQ.end) && void 0 !== FQ ? FQ : QQ.pos
        }))),
        create: ho.create,
        above: FQ[0].above,
        arrow: FQ.some((QQ => QQ.arrow))
      }
    }));
    class Eo {
      constructor(QQ, FQ, wQ, LQ, qQ) {
        this.view = QQ, this.source = FQ, this.field = wQ, this.setHover = LQ, this.hoverTime = qQ, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
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
          lastMove: FQ
        } = this, wQ = QQ.docView.tile.nearest(FQ.target);
        if (!wQ) return;
        let LQ, qQ = 1;
        if (wQ.isWidget()) LQ = wQ.posAtStart;
        else {
          if (LQ = QQ.posAtCoords(FQ), null == LQ) return;
          let wQ = QQ.coordsAtPos(LQ);
          if (!wQ || FQ.y < wQ.top || FQ.y > wQ.bottom || FQ.x < wQ.left - QQ.defaultCharacterWidth || FQ.x > wQ.right + QQ.defaultCharacterWidth) return;
          let oQ = QQ.bidiSpans(QQ.state.doc.lineAt(LQ)).find((QQ => QQ.from <= LQ && QQ.to >= LQ)),
            DQ = oQ && oQ.dir == mF.RTL ? -1 : 1;
          qQ = FQ.x < wQ.left ? -DQ : DQ
        }
        let oQ = this.source(QQ, LQ, qQ);
        if (null === oQ || void 0 === oQ ? void 0 : oQ.then) {
          let FQ = this.pending = {
            pos: LQ
          };
          oQ.then((wQ => {
            this.pending == FQ && (this.pending = null, !wQ || Array.isArray(wQ) && !wQ.length || QQ.dispatch({
              effects: this.setHover.of(Array.isArray(wQ) ? wQ : [wQ])
            }))
          }), (FQ => EF(QQ.state, FQ, "hover tooltip")))
        } else !oQ || Array.isArray(oQ) && !oQ.length || QQ.dispatch({
          effects: this.setHover.of(Array.isArray(oQ) ? oQ : [oQ])
        })
      }
      get tooltip() {
        let QQ = this.view.plugin(zo),
          FQ = QQ ? QQ.manager.tooltips.findIndex((QQ => QQ.create == ho.create)) : -1;
        return FQ > -1 ? QQ.manager.tooltipViews[FQ] : null
      }
      mousemove(QQ) {
        var FQ, wQ;
        this.lastMove = {
          x: QQ.clientX,
          y: QQ.clientY,
          target: QQ.target,
          time: Date.now()
        }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
        let {
          active: LQ,
          tooltip: qQ
        } = this;
        if (LQ.length && qQ && ! function(QQ, FQ) {
            let wQ, {
              left: LQ,
              right: qQ,
              top: oQ,
              bottom: DQ
            } = QQ.getBoundingClientRect();
            if (wQ = QQ.querySelector(".cm-tooltip-arrow")) {
              let QQ = wQ.getBoundingClientRect();
              oQ = Math.min(QQ.top, oQ), DQ = Math.max(QQ.bottom, DQ)
            }
            return FQ.clientX >= LQ - no && FQ.clientX <= qQ + no && FQ.clientY >= oQ - no && FQ.clientY <= DQ + no
          }(qQ.dom, QQ) || this.pending) {
          let {
            pos: qQ
          } = LQ[0] || this.pending, oQ = null !== (wQ = null === (FQ = LQ[0]) || void 0 === FQ ? void 0 : FQ.end) && void 0 !== wQ ? wQ : qQ;
          (qQ == oQ ? this.view.posAtCoords(this.lastMove) == qQ : function(QQ, FQ, wQ, LQ, qQ) {
            let oQ = QQ.scrollDOM.getBoundingClientRect(),
              DQ = QQ.documentTop + QQ.documentPadding.top + QQ.contentHeight;
            if (oQ.left > LQ || oQ.right < LQ || oQ.top > qQ || Math.min(oQ.bottom, DQ) < qQ) return !1;
            let kQ = QQ.posAtCoords({
              x: LQ,
              y: qQ
            }, !1);
            return kQ >= FQ && kQ <= wQ
          }(this.view, qQ, oQ, QQ.clientX, QQ.clientY)) || (this.view.dispatch({
            effects: this.setHover.of([])
          }), this.pending = null)
        }
      }
      mouseleave(QQ) {
        clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
        let {
          active: FQ
        } = this;
        if (FQ.length) {
          let {
            tooltip: FQ
          } = this;
          FQ && FQ.dom.contains(QQ.relatedTarget) ? this.watchTooltipLeave(FQ.dom) : this.view.dispatch({
            effects: this.setHover.of([])
          })
        }
      }
      watchTooltipLeave(QQ) {
        let FQ = wQ => {
          QQ.removeEventListener("mouseleave", FQ), this.active.length && !this.view.dom.contains(wQ.relatedTarget) && this.view.dispatch({
            effects: this.setHover.of([])
          })
        };
        QQ.addEventListener("mouseleave", FQ)
      }
      destroy() {
        clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove)
      }
    }
    const no = 4;

    function go(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        wQ = LQ.H.define(),
        qQ = LQ.L.define({
          create: () => [],
          update(QQ, qQ) {
            if (QQ.length && (FQ.hideOnChange && (qQ.docChanged || qQ.selection) ? QQ = [] : FQ.hideOn && (QQ = QQ.filter((QQ => !FQ.hideOn(qQ, QQ)))), qQ.docChanged)) {
              let FQ = [];
              for (let wQ of QQ) {
                let QQ = qQ.changes.mapPos(wQ.pos, -1, LQ.t.TrackDel);
                if (null != QQ) {
                  let LQ = Object.assign(Object.create(null), wQ);
                  LQ.pos = QQ, null != LQ.end && (LQ.end = qQ.changes.mapPos(LQ.end)), FQ.push(LQ)
                }
              }
              QQ = FQ
            }
            for (let FQ of qQ.effects) FQ.is(wQ) && (QQ = FQ.value), FQ.is(Zo) && (QQ = []);
            return QQ
          },
          provide: QQ => Vo.from(QQ)
        });
      return {
        active: qQ,
        extension: [qQ, ZF.define((LQ => new Eo(LQ, QQ, qQ, wQ, FQ.hoverTime || 300))), Jo]
      }
    }

    function Po(QQ, FQ) {
      let wQ = QQ.plugin(zo);
      if (!wQ) return null;
      let LQ = wQ.manager.tooltips.indexOf(FQ);
      return LQ < 0 ? null : wQ.manager.tooltipViews[LQ]
    }
    const Zo = LQ.H.define();
    const yo = LQ.r.define({
      combine(QQ) {
        let FQ, wQ;
        for (let LQ of QQ) FQ = FQ || LQ.topContainer, wQ = wQ || LQ.bottomContainer;
        return {
          topContainer: FQ,
          bottomContainer: wQ
        }
      }
    });

    function Bo(QQ, FQ) {
      let wQ = QQ.plugin(QD),
        LQ = wQ ? wQ.specs.indexOf(FQ) : -1;
      return LQ > -1 ? wQ.panels[LQ] : null
    }
    const QD = ZF.fromClass(class {
      constructor(QQ) {
        this.input = QQ.state.facet(LD), this.specs = this.input.filter((QQ => QQ)), this.panels = this.specs.map((FQ => FQ(QQ)));
        let FQ = QQ.state.facet(yo);
        this.top = new FD(QQ, !0, FQ.topContainer), this.bottom = new FD(QQ, !1, FQ.bottomContainer), this.top.sync(this.panels.filter((QQ => QQ.top))), this.bottom.sync(this.panels.filter((QQ => !QQ.top)));
        for (let wQ of this.panels) wQ.dom.classList.add("cm-panel"), wQ.mount && wQ.mount()
      }
      update(QQ) {
        let FQ = QQ.state.facet(yo);
        this.top.container != FQ.topContainer && (this.top.sync([]), this.top = new FD(QQ.view, !0, FQ.topContainer)), this.bottom.container != FQ.bottomContainer && (this.bottom.sync([]), this.bottom = new FD(QQ.view, !1, FQ.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
        let wQ = QQ.state.facet(LD);
        if (wQ != this.input) {
          let FQ = wQ.filter((QQ => QQ)),
            LQ = [],
            qQ = [],
            oQ = [],
            DQ = [];
          for (let wQ of FQ) {
            let FQ, kQ = this.specs.indexOf(wQ);
            kQ < 0 ? (FQ = wQ(QQ.view), DQ.push(FQ)) : (FQ = this.panels[kQ], FQ.update && FQ.update(QQ)), LQ.push(FQ), (FQ.top ? qQ : oQ).push(FQ)
          }
          this.specs = FQ, this.panels = LQ, this.top.sync(qQ), this.bottom.sync(oQ);
          for (let QQ of DQ) QQ.dom.classList.add("cm-panel"), QQ.mount && QQ.mount()
        } else
          for (let LQ of this.panels) LQ.update && LQ.update(QQ)
      }
      destroy() {
        this.top.sync([]), this.bottom.sync([])
      }
    }, {
      provide: QQ => Rq.scrollMargins.of((FQ => {
        let wQ = FQ.plugin(QQ);
        return wQ && {
          top: wQ.top.scrollMargin(),
          bottom: wQ.bottom.scrollMargin()
        }
      }))
    });
    class FD {
      constructor(QQ, FQ, wQ) {
        this.view = QQ, this.top = FQ, this.container = wQ, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses()
      }
      sync(QQ) {
        for (let FQ of this.panels) FQ.destroy && QQ.indexOf(FQ) < 0 && FQ.destroy();
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
        for (let FQ of this.panels)
          if (FQ.dom.parentNode == this.dom) {
            for (; QQ != FQ.dom;) QQ = wD(QQ);
            QQ = QQ.nextSibling
          } else this.dom.insertBefore(FQ.dom, QQ);
        for (; QQ;) QQ = wD(QQ)
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

    function wD(QQ) {
      let FQ = QQ.nextSibling;
      return QQ.remove(), FQ
    }
    const LD = LQ.r.define({
      enables: QD
    });

    function qD(QQ, FQ) {
      let wQ, qQ = new Promise((QQ => wQ = QQ)),
        oQ = QQ => function(QQ, FQ, wQ) {
          let LQ = FQ.content ? FQ.content(QQ, (() => DQ(null))) : null;
          if (!LQ) {
            if (LQ = (0, HQ.b)("form"), FQ.input) {
              let QQ = (0, HQ.b)("input", FQ.input);
              /^(text|password|number|email|tel|url)$/.test(QQ.type) && QQ.classList.add("cm-textfield"), QQ.name || (QQ.name = "input"), LQ.appendChild((0, HQ.b)("label", (FQ.label || "") + ": ", QQ))
            } else LQ.appendChild(document.createTextNode(FQ.label || ""));
            LQ.appendChild(document.createTextNode(" ")), LQ.appendChild((0, HQ.b)("button", {
              class: "cm-button",
              type: "submit"
            }, FQ.submitLabel || "OK"))
          }
          let qQ = "FORM" == LQ.nodeName ? [LQ] : LQ.querySelectorAll("form");
          for (let kQ = 0; kQ < qQ.length; kQ++) {
            let QQ = qQ[kQ];
            QQ.addEventListener("keydown", (FQ => {
              27 == FQ.keyCode ? (FQ.preventDefault(), DQ(null)) : 13 == FQ.keyCode && (FQ.preventDefault(), DQ(QQ))
            })), QQ.addEventListener("submit", (FQ => {
              FQ.preventDefault(), DQ(QQ)
            }))
          }
          let oQ = (0, HQ.b)("div", LQ, (0, HQ.b)("button", {
            onclick: () => DQ(null),
            "aria-label": QQ.state.phrase("close"),
            class: "cm-dialog-close",
            type: "button"
          }, ["\xd7"]));
          FQ.class && (oQ.className = FQ.class);

          function DQ(FQ) {
            oQ.contains(oQ.ownerDocument.activeElement) && QQ.focus(), wQ(FQ)
          }
          return oQ.classList.add("cm-dialog"), {
            dom: oQ,
            top: FQ.top,
            mount: () => {
              if (FQ.focus) {
                let QQ;
                QQ = "string" == typeof FQ.focus ? LQ.querySelector(FQ.focus) : LQ.querySelector("input") || LQ.querySelector("button"), QQ && "select" in QQ ? QQ.select() : QQ && "focus" in QQ && QQ.focus()
              }
            }
          }
        }(QQ, FQ, wQ);
      QQ.state.field(oD, !1) ? QQ.dispatch({
        effects: DD.of(oQ)
      }) : QQ.dispatch({
        effects: LQ.H.appendConfig.of(oD.init((() => [oQ])))
      });
      let DQ = kD.of(oQ);
      return {
        close: DQ,
        result: qQ.then((FQ => ((QQ.win.queueMicrotask || (FQ => QQ.win.setTimeout(FQ, 10)))((() => {
          QQ.state.field(oD).indexOf(oQ) > -1 && QQ.dispatch({
            effects: DQ
          })
        })), FQ)))
      }
    }
    const oD = LQ.L.define({
        create: () => [],
        update(QQ, FQ) {
          for (let wQ of FQ.effects) wQ.is(DD) ? QQ = [wQ.value].concat(QQ) : wQ.is(kD) && (QQ = QQ.filter((QQ => QQ != wQ.value)));
          return QQ
        },
        provide: QQ => LD.computeN([QQ], (FQ => FQ.field(QQ)))
      }),
      DD = LQ.H.define(),
      kD = LQ.H.define();
    class vD extends LQ.D {
      compare(QQ) {
        return this == QQ || this.constructor == QQ.constructor && this.eq(QQ)
      }
      eq(QQ) {
        return !1
      }
      destroy(QQ) {}
    }
    vD.prototype.elementClass = "", vD.prototype.toDOM = void 0, vD.prototype.mapMode = LQ.t.TrackBefore, vD.prototype.startSide = vD.prototype.endSide = -1, vD.prototype.point = !0;
    const mD = LQ.r.define(),
      uD = LQ.r.define(),
      HD = {
        class: "",
        renderEmptyElements: !1,
        elementStyle: "",
        markers: () => LQ.B.empty,
        lineMarker: () => null,
        widgetMarker: () => null,
        lineMarkerChange: null,
        initialSpacer: null,
        updateSpacer: null,
        domEventHandlers: {},
        side: "before"
      },
      bD = LQ.r.define();

    function YD(QQ) {
      return [AD(), bD.of({
        ...HD,
        ...QQ
      })]
    }
    const xD = LQ.r.define({
      combine: QQ => QQ.some((QQ => QQ))
    });

    function AD(QQ) {
      let FQ = [tD];
      return QQ && !1 === QQ.fixed && FQ.push(xD.of(!0)), FQ
    }
    const tD = ZF.fromClass(class {
      constructor(QQ) {
        this.view = QQ, this.domAfter = null, this.prevViewport = QQ.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = QQ.state.facet(bD).map((FQ => new pD(QQ, FQ))), this.fixed = !QQ.state.facet(xD);
        for (let FQ of this.gutters) "after" == FQ.config.side ? this.getDOMAfter().appendChild(FQ.dom) : this.dom.appendChild(FQ.dom);
        this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), QQ.scrollDOM.insertBefore(this.dom, QQ.contentDOM)
      }
      getDOMAfter() {
        return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter
      }
      update(QQ) {
        if (this.updateGutters(QQ)) {
          let FQ = this.prevViewport,
            wQ = QQ.view.viewport,
            LQ = Math.min(FQ.to, wQ.to) - Math.max(FQ.from, wQ.from);
          this.syncGutters(LQ < .8 * (wQ.to - wQ.from))
        }
        if (QQ.geometryChanged) {
          let QQ = this.view.contentHeight / this.view.scaleY + "px";
          this.dom.style.minHeight = QQ, this.domAfter && (this.domAfter.style.minHeight = QQ)
        }
        this.view.state.facet(xD) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = QQ.view.viewport
      }
      syncGutters(QQ) {
        let FQ = this.dom.nextSibling;
        QQ && (this.dom.remove(), this.domAfter && this.domAfter.remove());
        let wQ = LQ.B.iter(this.view.state.facet(mD), this.view.viewport.from),
          qQ = [],
          oQ = this.gutters.map((QQ => new GD(QQ, this.view.viewport, -this.view.documentPadding.top)));
        for (let LQ of this.view.viewportLineBlocks)
          if (qQ.length && (qQ = []), Array.isArray(LQ.type)) {
            let QQ = !0;
            for (let FQ of LQ.type)
              if (FQ.type == IQ.Text && QQ) {
                MD(wQ, qQ, FQ.from);
                for (let QQ of oQ) QQ.line(this.view, FQ, qQ);
                QQ = !1
              } else if (FQ.widget)
              for (let QQ of oQ) QQ.widget(this.view, FQ)
          } else if (LQ.type == IQ.Text) {
          MD(wQ, qQ, LQ.from);
          for (let QQ of oQ) QQ.line(this.view, LQ, qQ)
        } else if (LQ.widget)
          for (let QQ of oQ) QQ.widget(this.view, LQ);
        for (let LQ of oQ) LQ.finish();
        QQ && (this.view.scrollDOM.insertBefore(this.dom, FQ), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter))
      }
      updateGutters(QQ) {
        let FQ = QQ.startState.facet(bD),
          wQ = QQ.state.facet(bD),
          qQ = QQ.docChanged || QQ.heightChanged || QQ.viewportChanged || !LQ.B.eq(QQ.startState.facet(mD), QQ.state.facet(mD), QQ.view.viewport.from, QQ.view.viewport.to);
        if (FQ == wQ)
          for (let LQ of this.gutters) LQ.update(QQ) && (qQ = !0);
        else {
          qQ = !0;
          let LQ = [];
          for (let qQ of wQ) {
            let wQ = FQ.indexOf(qQ);
            wQ < 0 ? LQ.push(new pD(this.view, qQ)) : (this.gutters[wQ].update(QQ), LQ.push(this.gutters[wQ]))
          }
          for (let QQ of this.gutters) QQ.dom.remove(), LQ.indexOf(QQ) < 0 && QQ.destroy();
          for (let QQ of LQ) "after" == QQ.config.side ? this.getDOMAfter().appendChild(QQ.dom) : this.dom.appendChild(QQ.dom);
          this.gutters = LQ
        }
        return qQ
      }
      destroy() {
        for (let QQ of this.gutters) QQ.destroy();
        this.dom.remove(), this.domAfter && this.domAfter.remove()
      }
    }, {
      provide: QQ => Rq.scrollMargins.of((FQ => {
        let wQ = FQ.plugin(QQ);
        if (!wQ || 0 == wQ.gutters.length || !wQ.fixed) return null;
        let LQ = wQ.dom.offsetWidth * FQ.scaleX,
          qQ = wQ.domAfter ? wQ.domAfter.offsetWidth * FQ.scaleX : 0;
        return FQ.textDirection == mF.LTR ? {
          left: LQ,
          right: qQ
        } : {
          right: LQ,
          left: qQ
        }
      }))
    });

    function eD(QQ) {
      return Array.isArray(QQ) ? QQ : [QQ]
    }

    function MD(QQ, FQ, wQ) {
      for (; QQ.value && QQ.from <= wQ;) QQ.from == wQ && FQ.push(QQ.value), QQ.next()
    }
    class GD {
      constructor(QQ, FQ, wQ) {
        this.gutter = QQ, this.height = wQ, this.i = 0, this.cursor = LQ.B.iter(QQ.markers, FQ.from)
      }
      addElement(QQ, FQ, wQ) {
        let {
          gutter: LQ
        } = this, qQ = (FQ.top - this.height) / QQ.scaleY, oQ = FQ.height / QQ.scaleY;
        if (this.i == LQ.elements.length) {
          let FQ = new cD(QQ, oQ, qQ, wQ);
          LQ.elements.push(FQ), LQ.dom.appendChild(FQ.dom)
        } else LQ.elements[this.i].update(QQ, oQ, qQ, wQ);
        this.height = FQ.bottom, this.i++
      }
      line(QQ, FQ, wQ) {
        let LQ = [];
        MD(this.cursor, LQ, FQ.from), wQ.length && (LQ = LQ.concat(wQ));
        let qQ = this.gutter.config.lineMarker(QQ, FQ, LQ);
        qQ && LQ.unshift(qQ);
        let oQ = this.gutter;
        (0 != LQ.length || oQ.config.renderEmptyElements) && this.addElement(QQ, FQ, LQ)
      }
      widget(QQ, FQ) {
        let wQ = this.gutter.config.widgetMarker(QQ, FQ.widget, FQ),
          LQ = wQ ? [wQ] : null;
        for (let qQ of QQ.state.facet(uD)) {
          let wQ = qQ(QQ, FQ.widget, FQ);
          wQ && (LQ || (LQ = [])).push(wQ)
        }
        LQ && this.addElement(QQ, FQ, LQ)
      }
      finish() {
        let QQ = this.gutter;
        for (; QQ.elements.length > this.i;) {
          let FQ = QQ.elements.pop();
          QQ.dom.removeChild(FQ.dom), FQ.destroy()
        }
      }
    }
    class pD {
      constructor(QQ, FQ) {
        this.view = QQ, this.config = FQ, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
        for (let wQ in FQ.domEventHandlers) this.dom.addEventListener(wQ, (LQ => {
          let qQ, oQ = LQ.target;
          if (oQ != this.dom && this.dom.contains(oQ)) {
            for (; oQ.parentNode != this.dom;) oQ = oQ.parentNode;
            let QQ = oQ.getBoundingClientRect();
            qQ = (QQ.top + QQ.bottom) / 2
          } else qQ = LQ.clientY;
          let DQ = QQ.lineBlockAtHeight(qQ - QQ.documentTop);
          FQ.domEventHandlers[wQ](QQ, DQ, LQ) && LQ.preventDefault()
        }));
        this.markers = eD(FQ.markers(QQ)), FQ.initialSpacer && (this.spacer = new cD(QQ, 0, 0, [FQ.initialSpacer(QQ)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none")
      }
      update(QQ) {
        let FQ = this.markers;
        if (this.markers = eD(this.config.markers(QQ.view)), this.spacer && this.config.updateSpacer) {
          let FQ = this.config.updateSpacer(this.spacer.markers[0], QQ);
          FQ != this.spacer.markers[0] && this.spacer.update(QQ.view, 0, 0, [FQ])
        }
        let wQ = QQ.view.viewport;
        return !LQ.B.eq(this.markers, FQ, wQ.from, wQ.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(QQ)
      }
      destroy() {
        for (let QQ of this.elements) QQ.destroy()
      }
    }
    class cD {
      constructor(QQ, FQ, wQ, LQ) {
        this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(QQ, FQ, wQ, LQ)
      }
      update(QQ, FQ, wQ, LQ) {
        this.height != FQ && (this.height = FQ, this.dom.style.height = FQ + "px"), this.above != wQ && (this.dom.style.marginTop = (this.above = wQ) ? wQ + "px" : ""),
          function(QQ, FQ) {
            if (QQ.length != FQ.length) return !1;
            for (let wQ = 0; wQ < QQ.length; wQ++)
              if (!QQ[wQ].compare(FQ[wQ])) return !1;
            return !0
          }(this.markers, LQ) || this.setMarkers(QQ, LQ)
      }
      setMarkers(QQ, FQ) {
        let wQ = "cm-gutterElement",
          LQ = this.dom.firstChild;
        for (let qQ = 0, oQ = 0;;) {
          let DQ = oQ,
            kQ = qQ < FQ.length ? FQ[qQ++] : null,
            vQ = !1;
          if (kQ) {
            let QQ = kQ.elementClass;
            QQ && (wQ += " " + QQ);
            for (let FQ = oQ; FQ < this.markers.length; FQ++)
              if (this.markers[FQ].compare(kQ)) {
                DQ = FQ, vQ = !0;
                break
              }
          } else DQ = this.markers.length;
          for (; oQ < DQ;) {
            let QQ = this.markers[oQ++];
            if (QQ.toDOM) {
              QQ.destroy(LQ);
              let FQ = LQ.nextSibling;
              LQ.remove(), LQ = FQ
            }
          }
          if (!kQ) break;
          kQ.toDOM && (vQ ? LQ = LQ.nextSibling : this.dom.insertBefore(kQ.toDOM(QQ), LQ)), vQ && oQ++
        }
        this.dom.className = wQ, this.markers = FQ
      }
      destroy() {
        this.setMarkers(null, [])
      }
    }
    const CD = LQ.r.define(),
      SD = LQ.r.define(),
      iD = LQ.r.define({
        combine: QQ => (0, LQ.W)(QQ, {
          formatNumber: String,
          domEventHandlers: {}
        }, {
          domEventHandlers(QQ, FQ) {
            let wQ = Object.assign({}, QQ);
            for (let LQ in FQ) {
              let QQ = wQ[LQ],
                qQ = FQ[LQ];
              wQ[LQ] = QQ ? (FQ, wQ, LQ) => QQ(FQ, wQ, LQ) || qQ(FQ, wQ, LQ) : qQ
            }
            return wQ
          }
        })
      });
    class WD extends vD {
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

    function RD(QQ, FQ) {
      return QQ.state.facet(iD).formatNumber(FQ, QQ.state)
    }
    const OD = bD.compute([iD], (QQ => ({
      class: "cm-lineNumbers",
      renderEmptyElements: !1,
      markers: QQ => QQ.state.facet(CD),
      lineMarker: (QQ, FQ, wQ) => wQ.some((QQ => QQ.toDOM)) ? null : new WD(RD(QQ, QQ.state.doc.lineAt(FQ.from).number)),
      widgetMarker: (QQ, FQ, wQ) => {
        for (let LQ of QQ.state.facet(SD)) {
          let qQ = LQ(QQ, FQ, wQ);
          if (qQ) return qQ
        }
        return null
      },
      lineMarkerChange: QQ => QQ.startState.facet(iD) != QQ.state.facet(iD),
      initialSpacer: QQ => new WD(RD(QQ, rD(QQ.state.doc.lines))),
      updateSpacer(QQ, FQ) {
        let wQ = RD(FQ.view, rD(FQ.view.state.doc.lines));
        return wQ == QQ.number ? QQ : new WD(wQ)
      },
      domEventHandlers: QQ.facet(iD).domEventHandlers,
      side: "before"
    })));

    function sD() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [iD.of(QQ), AD(), OD]
    }

    function rD(QQ) {
      let FQ = 9;
      for (; FQ < QQ;) FQ = 10 * FQ + 9;
      return FQ
    }
    const ID = new class extends vD {
        constructor() {
          super(...arguments), this.elementClass = "cm-activeLineGutter"
        }
      },
      UD = mD.compute(["selection"], (QQ => {
        let FQ = [],
          wQ = -1;
        for (let LQ of QQ.selection.PA) {
          let qQ = QQ.doc.lineAt(LQ.head).from;
          qQ > wQ && (wQ = qQ, FQ.push(ID.range(qQ)))
        }
        return LQ.B.of(FQ)
      }));

    function ND() {
      return UD
    }
  },
  40723: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => LQ,
      f: () => YQ,
      g: () => DQ,
      h: () => uQ,
      l: () => mQ,
      n: () => NQ,
      q: () => KQ,
      r: () => TQ,
      t: () => xQ
    });
    const LQ = 1024;
    let qQ = 0;
    class oQ {
      constructor(QQ, FQ) {
        this.from = QQ, this.to = FQ
      }
    }
    class DQ {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.id = qQ++, this.perNode = !!QQ.perNode, this.deserialize = QQ.deserialize || (() => {
          throw new Error("This node type doesn't define a deserialize function")
        }), this.combine = QQ.combine || null
      }
      add(QQ) {
        if (this.perNode) throw new RangeError("Can't add per-node props to node types");
        return "function" != typeof QQ && (QQ = mQ.match(QQ)), FQ => {
          let wQ = QQ(FQ);
          return void 0 === wQ ? null : [this, wQ]
        }
      }
    }
    DQ.closedBy = new DQ({
      deserialize: QQ => QQ.split(" ")
    }), DQ.openedBy = new DQ({
      deserialize: QQ => QQ.split(" ")
    }), DQ.group = new DQ({
      deserialize: QQ => QQ.split(" ")
    }), DQ.isolate = new DQ({
      deserialize: QQ => {
        if (QQ && "rtl" != QQ && "ltr" != QQ && "auto" != QQ) throw new RangeError("Invalid value for isolate: " + QQ);
        return QQ || "auto"
      }
    }), DQ.contextHash = new DQ({
      perNode: !0
    }), DQ.lookAhead = new DQ({
      perNode: !0
    }), DQ.mounted = new DQ({
      perNode: !0
    });
    class kQ {
      constructor(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this.tree = QQ, this.overlay = FQ, this.parser = wQ, this.bracketed = LQ
      }
      static get(QQ) {
        return QQ && QQ.props && QQ.props[DQ.mounted.id]
      }
    }
    const vQ = Object.create(null);
    class mQ {
      constructor(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.name = QQ, this.props = FQ, this.id = wQ, this.flags = LQ
      }
      static define(QQ) {
        let FQ = QQ.props && QQ.props.length ? Object.create(null) : vQ,
          wQ = (QQ.top ? 1 : 0) | (QQ.skipped ? 2 : 0) | (QQ.error ? 4 : 0) | (null == QQ.name ? 8 : 0),
          LQ = new mQ(QQ.name || "", FQ, QQ.id, wQ);
        if (QQ.props)
          for (let qQ of QQ.props)
            if (Array.isArray(qQ) || (qQ = qQ(LQ)), qQ) {
              if (qQ[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
              FQ[qQ[0].id] = qQ[1]
            } return LQ
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
          let FQ = this.prop(DQ.group);
          return !!FQ && FQ.indexOf(QQ) > -1
        }
        return this.id == QQ
      }
      static match(QQ) {
        let FQ = Object.create(null);
        for (let wQ in QQ)
          for (let LQ of wQ.split(" ")) FQ[LQ] = QQ[wQ];
        return QQ => {
          for (let wQ = QQ.prop(DQ.group), LQ = -1; LQ < (wQ ? wQ.length : 0); LQ++) {
            let qQ = FQ[LQ < 0 ? QQ.name : wQ[LQ]];
            if (qQ) return qQ
          }
        }
      }
    }
    mQ.none = new mQ("", Object.create(null), 0, 8);
    class uQ {
      constructor(QQ) {
        this.types = QQ;
        for (let FQ = 0; FQ < QQ.length; FQ++)
          if (QQ[FQ].id != FQ) throw new RangeError("Node type ids should correspond to array positions when creating a node set")
      }
      extend() {
        let QQ = [];
        for (var FQ = arguments.length, wQ = new Array(FQ), LQ = 0; LQ < FQ; LQ++) wQ[LQ] = arguments[LQ];
        for (let qQ of this.types) {
          let FQ = null;
          for (let QQ of wQ) {
            let wQ = QQ(qQ);
            if (wQ) {
              FQ || (FQ = Object.assign({}, qQ.props));
              let QQ = wQ[1],
                LQ = wQ[0];
              LQ.combine && LQ.id in FQ && (QQ = LQ.combine(FQ[LQ.id], QQ)), FQ[LQ.id] = QQ
            }
          }
          QQ.push(FQ ? new mQ(qQ.name, FQ, qQ.id, qQ.flags) : qQ)
        }
        return new uQ(QQ)
      }
    }
    const HQ = new WeakMap,
      bQ = new WeakMap;
    var YQ;
    ! function(QQ) {
      QQ[QQ.ExcludeBuffers = 1] = "ExcludeBuffers", QQ[QQ.IncludeAnonymous = 2] = "IncludeAnonymous", QQ[QQ.IgnoreMounts = 4] = "IgnoreMounts", QQ[QQ.IgnoreOverlays = 8] = "IgnoreOverlays", QQ[QQ.EnterBracketed = 16] = "EnterBracketed"
    }(YQ || (YQ = {}));
    class xQ {
      constructor(QQ, FQ, wQ, LQ, qQ) {
        if (this.type = QQ, this.children = FQ, this.positions = wQ, this.length = LQ, this.props = null, qQ && qQ.length) {
          this.props = Object.create(null);
          for (let [QQ, FQ] of qQ) this.props["number" == typeof QQ ? QQ : QQ.id] = FQ
        }
      }
      toString() {
        let QQ = kQ.get(this);
        if (QQ && !QQ.overlay) return QQ.tree.toString();
        let FQ = "";
        for (let wQ of this.children) {
          let QQ = wQ.toString();
          QQ && (FQ && (FQ += ","), FQ += QQ)
        }
        return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (FQ.length ? "(" + FQ + ")" : "") : FQ
      }
      cursor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return new OQ(this.topNode, QQ)
      }
      cursorAt(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wQ = HQ.get(this) || this.topNode,
          LQ = new OQ(wQ);
        return LQ.moveTo(QQ, FQ), HQ.set(this, LQ._tree), LQ
      }
      get topNode() {
        return new pQ(this, 0, 0, null)
      }
      resolve(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wQ = MQ(HQ.get(this) || this.topNode, QQ, FQ, !1);
        return HQ.set(this, wQ), wQ
      }
      resolveInner(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wQ = MQ(bQ.get(this) || this.topNode, QQ, FQ, !0);
        return bQ.set(this, wQ), wQ
      }
      resolveStack(QQ) {
        return function(QQ, FQ, wQ) {
          let LQ = QQ.resolveInner(FQ, wQ),
            qQ = null;
          for (let oQ = LQ instanceof pQ ? LQ : LQ.context.parent; oQ; oQ = oQ.parent)
            if (oQ.index < 0) {
              let QQ = oQ.parent;
              (qQ || (qQ = [LQ])).push(QQ.resolve(FQ, wQ)), oQ = QQ
            } else {
              let QQ = kQ.get(oQ.tree);
              if (QQ && QQ.overlay && QQ.overlay[0].from <= FQ && QQ.overlay[QQ.overlay.length - 1].to >= FQ) {
                let DQ = new pQ(QQ.tree, QQ.overlay[0].from + oQ.from, -1, oQ);
                (qQ || (qQ = [LQ])).push(MQ(DQ, FQ, wQ, !1))
              }
            } return qQ ? WQ(qQ) : LQ
        }(this, QQ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
      }
      iterate(QQ) {
        let {
          enter: FQ,
          leave: wQ,
          from: LQ = 0,
          to: qQ = this.length
        } = QQ, oQ = QQ.mode || 0, DQ = (oQ & YQ.IncludeAnonymous) > 0;
        for (let kQ = this.cursor(oQ | YQ.IncludeAnonymous);;) {
          let QQ = !1;
          if (kQ.from <= qQ && kQ.to >= LQ && (!DQ && kQ.type.isAnonymous || !1 !== FQ(kQ))) {
            if (kQ.firstChild()) continue;
            QQ = !0
          }
          for (; QQ && wQ && (DQ || !kQ.type.isAnonymous) && wQ(kQ), !kQ.nextSibling();) {
            if (!kQ.parent()) return;
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
          for (let FQ in this.props) QQ.push([+FQ, this.props[FQ]]);
        return QQ
      }
      balance() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this.children.length <= 8 ? this : UQ(mQ.none, this.children, this.positions, 0, this.children.length, 0, this.length, ((QQ, FQ, wQ) => new xQ(this.type, QQ, FQ, wQ, this.propValues)), QQ.makeTree || ((QQ, FQ, wQ) => new xQ(mQ.none, QQ, FQ, wQ)))
      }
      static build(QQ) {
        return function(QQ) {
          var FQ;
          let {
            buffer: wQ,
            nodeSet: qQ,
            maxBufferLength: oQ = LQ,
            reused: kQ = [],
            minRepeatType: vQ = qQ.types.length
          } = QQ, mQ = Array.isArray(wQ) ? new AQ(wQ, wQ.length) : wQ, uQ = qQ.types, HQ = 0, bQ = 0;

          function YQ(QQ, FQ, wQ, LQ, DQ, xQ) {
            let {
              id: AQ,
              start: SQ,
              end: iQ,
              size: WQ
            } = mQ, RQ = bQ, OQ = HQ;
            if (WQ < 0) {
              if (mQ.next(), -1 == WQ) {
                let FQ = kQ[AQ];
                return wQ.push(FQ), void LQ.push(SQ - QQ)
              }
              if (-3 == WQ) return void(HQ = AQ);
              if (-4 == WQ) return void(bQ = AQ);
              throw new RangeError(`Unrecognized record size: ${WQ}`)
            }
            let sQ, rQ, IQ = uQ[AQ],
              NQ = SQ - QQ;
            if (iQ - SQ <= oQ && (rQ = cQ(mQ.pos - FQ, DQ))) {
              let FQ = new Uint16Array(rQ.size - rQ.skip),
                wQ = mQ.pos - rQ.size,
                LQ = FQ.length;
              for (; mQ.pos > wQ;) LQ = CQ(rQ.start, FQ, LQ);
              sQ = new tQ(FQ, iQ - rQ.start, qQ), NQ = rQ.start - QQ
            } else {
              let QQ = mQ.pos - WQ;
              mQ.next();
              let FQ = [],
                wQ = [],
                LQ = AQ >= vQ ? AQ : -1,
                qQ = 0,
                DQ = iQ;
              for (; mQ.pos > QQ;) LQ >= 0 && mQ.id == LQ && mQ.size >= 0 ? (mQ.end <= DQ - oQ && (GQ(FQ, wQ, SQ, qQ, mQ.end, DQ, LQ, RQ, OQ), qQ = FQ.length, DQ = mQ.end), mQ.next()) : xQ > 2500 ? eQ(SQ, QQ, FQ, wQ) : YQ(SQ, QQ, FQ, wQ, LQ, xQ + 1);
              if (LQ >= 0 && qQ > 0 && qQ < FQ.length && GQ(FQ, wQ, SQ, qQ, SQ, DQ, LQ, RQ, OQ), FQ.reverse(), wQ.reverse(), LQ > -1 && qQ > 0) {
                let QQ = MQ(IQ, OQ);
                sQ = UQ(IQ, FQ, wQ, 0, FQ.length, 0, iQ - SQ, QQ, QQ)
              } else sQ = pQ(IQ, FQ, wQ, iQ - SQ, RQ - iQ, OQ)
            }
            wQ.push(sQ), LQ.push(NQ)
          }

          function eQ(QQ, FQ, wQ, LQ) {
            let DQ = [],
              kQ = 0,
              vQ = -1;
            for (; mQ.pos > FQ;) {
              let {
                id: QQ,
                start: FQ,
                end: wQ,
                size: LQ
              } = mQ;
              if (LQ > 4) mQ.next();
              else {
                if (vQ > -1 && FQ < vQ) break;
                vQ < 0 && (vQ = wQ - oQ), DQ.push(QQ, FQ, wQ), kQ++, mQ.next()
              }
            }
            if (kQ) {
              let FQ = new Uint16Array(4 * kQ),
                oQ = DQ[DQ.length - 2];
              for (let QQ = DQ.length - 3, wQ = 0; QQ >= 0; QQ -= 3) FQ[wQ++] = DQ[QQ], FQ[wQ++] = DQ[QQ + 1] - oQ, FQ[wQ++] = DQ[QQ + 2] - oQ, FQ[wQ++] = wQ;
              wQ.push(new tQ(FQ, DQ[2] - oQ, qQ)), LQ.push(oQ - QQ)
            }
          }

          function MQ(QQ, FQ) {
            return (wQ, LQ, qQ) => {
              let oQ, kQ, vQ = 0,
                mQ = wQ.length - 1;
              if (mQ >= 0 && (oQ = wQ[mQ]) instanceof xQ) {
                if (!mQ && oQ.type == QQ && oQ.length == qQ) return oQ;
                (kQ = oQ.prop(DQ.lookAhead)) && (vQ = LQ[mQ] + oQ.length + kQ)
              }
              return pQ(QQ, wQ, LQ, qQ, vQ, FQ)
            }
          }

          function GQ(QQ, FQ, wQ, LQ, oQ, DQ, kQ, vQ, mQ) {
            let uQ = [],
              HQ = [];
            for (; QQ.length > LQ;) uQ.push(QQ.pop()), HQ.push(FQ.pop() + wQ - oQ);
            QQ.push(pQ(qQ.types[kQ], uQ, HQ, DQ - oQ, vQ - DQ, mQ)), FQ.push(oQ - wQ)
          }

          function pQ(QQ, FQ, wQ, LQ, qQ, oQ, kQ) {
            if (oQ) {
              let QQ = [DQ.contextHash, oQ];
              kQ = kQ ? [QQ].concat(kQ) : [QQ]
            }
            if (qQ > 25) {
              let QQ = [DQ.lookAhead, qQ];
              kQ = kQ ? [QQ].concat(kQ) : [QQ]
            }
            return new xQ(QQ, FQ, wQ, LQ, kQ)
          }

          function cQ(QQ, FQ) {
            let wQ = mQ.fork(),
              LQ = 0,
              qQ = 0,
              DQ = 0,
              kQ = wQ.end - oQ,
              uQ = {
                size: 0,
                start: 0,
                skip: 0
              };
            QQ: for (let oQ = wQ.pos - QQ; wQ.pos > oQ;) {
              let QQ = wQ.size;
              if (wQ.id == FQ && QQ >= 0) {
                uQ.size = LQ, uQ.start = qQ, uQ.skip = DQ, DQ += 4, LQ += 4, wQ.next();
                continue
              }
              let mQ = wQ.pos - QQ;
              if (QQ < 0 || mQ < oQ || wQ.start < kQ) break;
              let HQ = wQ.id >= vQ ? 4 : 0,
                bQ = wQ.start;
              for (wQ.next(); wQ.pos > mQ;) {
                if (wQ.size < 0) {
                  if (-3 != wQ.size && -4 != wQ.size) break QQ;
                  HQ += 4
                } else wQ.id >= vQ && (HQ += 4);
                wQ.next()
              }
              qQ = bQ, LQ += QQ, DQ += HQ
            }
            return (FQ < 0 || LQ == QQ) && (uQ.size = LQ, uQ.start = qQ, uQ.skip = DQ), uQ.size > 4 ? uQ : void 0
          }

          function CQ(QQ, FQ, wQ) {
            let {
              id: LQ,
              start: qQ,
              end: oQ,
              size: DQ
            } = mQ;
            if (mQ.next(), DQ >= 0 && LQ < vQ) {
              let kQ = wQ;
              if (DQ > 4) {
                let LQ = mQ.pos - (DQ - 4);
                for (; mQ.pos > LQ;) wQ = CQ(QQ, FQ, wQ)
              }
              FQ[--wQ] = kQ, FQ[--wQ] = oQ - QQ, FQ[--wQ] = qQ - QQ, FQ[--wQ] = LQ
            } else - 3 == DQ ? HQ = LQ : -4 == DQ && (bQ = LQ);
            return wQ
          }
          let SQ = [],
            iQ = [];
          for (; mQ.pos > 0;) YQ(QQ.start || 0, QQ.bufferStart || 0, SQ, iQ, -1, 0);
          let WQ = null !== (FQ = QQ.length) && void 0 !== FQ ? FQ : SQ.length ? iQ[0] + SQ[0].length : 0;
          return new xQ(uQ[QQ.topID], SQ.reverse(), iQ.reverse(), WQ)
        }(QQ)
      }
    }
    xQ.empty = new xQ(mQ.none, [], [], 0);
    class AQ {
      constructor(QQ, FQ) {
        this.buffer = QQ, this.index = FQ
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
        return new AQ(this.buffer, this.index)
      }
    }
    class tQ {
      constructor(QQ, FQ, wQ) {
        this.buffer = QQ, this.length = FQ, this.set = wQ
      }
      get type() {
        return mQ.none
      }
      toString() {
        let QQ = [];
        for (let FQ = 0; FQ < this.buffer.length;) QQ.push(this.childString(FQ)), FQ = this.buffer[FQ + 3];
        return QQ.join(",")
      }
      childString(QQ) {
        let FQ = this.buffer[QQ],
          wQ = this.buffer[QQ + 3],
          LQ = this.set.types[FQ],
          qQ = LQ.name;
        if (/\W/.test(qQ) && !LQ.isError && (qQ = JSON.stringify(qQ)), wQ == (QQ += 4)) return qQ;
        let oQ = [];
        for (; QQ < wQ;) oQ.push(this.childString(QQ)), QQ = this.buffer[QQ + 3];
        return qQ + "(" + oQ.join(",") + ")"
      }
      findChild(QQ, FQ, wQ, LQ, qQ) {
        let {
          buffer: oQ
        } = this, DQ = -1;
        for (let kQ = QQ; kQ != FQ && !(eQ(qQ, LQ, oQ[kQ + 1], oQ[kQ + 2]) && (DQ = kQ, wQ > 0)); kQ = oQ[kQ + 3]);
        return DQ
      }
      slice(QQ, FQ, wQ) {
        let LQ = this.buffer,
          qQ = new Uint16Array(FQ - QQ),
          oQ = 0;
        for (let DQ = QQ, kQ = 0; DQ < FQ;) {
          qQ[kQ++] = LQ[DQ++], qQ[kQ++] = LQ[DQ++] - wQ;
          let FQ = qQ[kQ++] = LQ[DQ++] - wQ;
          qQ[kQ++] = LQ[DQ++] - QQ, oQ = Math.max(oQ, FQ)
        }
        return new tQ(qQ, oQ, this.set)
      }
    }

    function eQ(QQ, FQ, wQ, LQ) {
      switch (QQ) {
        case -2:
          return wQ < FQ;
        case -1:
          return LQ >= FQ && wQ < FQ;
        case 0:
          return wQ < FQ && LQ > FQ;
        case 1:
          return wQ <= FQ && LQ > FQ;
        case 2:
          return LQ > FQ;
        case 4:
          return !0
      }
    }

    function MQ(QQ, FQ, wQ, LQ) {
      for (var qQ; QQ.from == QQ.to || (wQ < 1 ? QQ.from >= FQ : QQ.from > FQ) || (wQ > -1 ? QQ.to <= FQ : QQ.to < FQ);) {
        let FQ = !LQ && QQ instanceof pQ && QQ.index < 0 ? null : QQ.parent;
        if (!FQ) return QQ;
        QQ = FQ
      }
      let oQ = LQ ? 0 : YQ.IgnoreOverlays;
      if (LQ)
        for (let DQ = QQ, kQ = DQ.parent; kQ; DQ = kQ, kQ = DQ.parent) DQ instanceof pQ && DQ.index < 0 && (null === (qQ = kQ.enter(FQ, wQ, oQ)) || void 0 === qQ ? void 0 : qQ.from) != DQ.from && (QQ = kQ);
      for (;;) {
        let LQ = QQ.enter(FQ, wQ, oQ);
        if (!LQ) return QQ;
        QQ = LQ
      }
    }
    class GQ {
      cursor() {
        return new OQ(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)
      }
      getChild(QQ) {
        let FQ = cQ(this, QQ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null);
        return FQ.length ? FQ[0] : null
      }
      getChildren(QQ) {
        return cQ(this, QQ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
      }
      resolve(QQ) {
        return MQ(this, QQ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !1)
      }
      resolveInner(QQ) {
        return MQ(this, QQ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !0)
      }
      matchContext(QQ) {
        return CQ(this.parent, QQ)
      }
      enterUnfinishedNodesBefore(QQ) {
        let FQ = this.childBefore(QQ),
          wQ = this;
        for (; FQ;) {
          let QQ = FQ.lastChild;
          if (!QQ || QQ.to != FQ.to) break;
          QQ.type.isError && QQ.from == QQ.to ? (wQ = FQ, FQ = QQ.prevSibling) : FQ = QQ
        }
        return wQ
      }
      get node() {
        return this
      }
      get next() {
        return this.parent
      }
    }
    class pQ extends GQ {
      constructor(QQ, FQ, wQ, LQ) {
        super(), this._tree = QQ, this.from = FQ, this.index = wQ, this._parent = LQ
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
      nextChild(QQ, FQ, wQ, LQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        for (let oQ = this;;) {
          for (let {
              children: DQ,
              positions: vQ
            } = oQ._tree, mQ = FQ > 0 ? DQ.length : -1; QQ != mQ; QQ += FQ) {
            let mQ, uQ = DQ[QQ],
              HQ = vQ[QQ] + oQ.from;
            if (qQ & YQ.EnterBracketed && uQ instanceof xQ && (mQ = kQ.get(uQ)) && !mQ.overlay && mQ.bracketed && wQ >= HQ && wQ <= HQ + uQ.length || eQ(LQ, wQ, HQ, HQ + uQ.length))
              if (uQ instanceof tQ) {
                if (qQ & YQ.ExcludeBuffers) continue;
                let DQ = uQ.findChild(0, uQ.buffer.length, FQ, wQ - HQ, LQ);
                if (DQ > -1) return new iQ(new SQ(oQ, uQ, QQ, HQ), null, DQ)
              } else if (qQ & YQ.IncludeAnonymous || !uQ.type.isAnonymous || sQ(uQ)) {
              let DQ;
              if (!(qQ & YQ.IgnoreMounts) && (DQ = kQ.get(uQ)) && !DQ.overlay) return new pQ(DQ.tree, HQ, QQ, oQ);
              let vQ = new pQ(uQ, HQ, QQ, oQ);
              return qQ & YQ.IncludeAnonymous || !vQ.type.isAnonymous ? vQ : vQ.nextChild(FQ < 0 ? uQ.children.length - 1 : 0, FQ, wQ, LQ, qQ)
            }
          }
          if (qQ & YQ.IncludeAnonymous || !oQ.type.isAnonymous) return null;
          if (QQ = oQ.index >= 0 ? oQ.index + FQ : FQ < 0 ? -1 : oQ._parent._tree.children.length, oQ = oQ._parent, !oQ) return null
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
      enter(QQ, FQ) {
        let wQ, LQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (!(LQ & YQ.IgnoreOverlays) && (wQ = kQ.get(this._tree)) && wQ.overlay) {
          let qQ = QQ - this.from,
            oQ = LQ & YQ.EnterBracketed && wQ.bracketed;
          for (let {
              from: QQ,
              to: LQ
            }
            of wQ.overlay)
            if ((FQ > 0 || oQ ? QQ <= qQ : QQ < qQ) && (FQ < 0 || oQ ? LQ >= qQ : LQ > qQ)) return new pQ(wQ.tree, wQ.overlay[0].from + this.from, -1, this)
        }
        return this.nextChild(0, 1, QQ, FQ, LQ)
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

    function cQ(QQ, FQ, wQ, LQ) {
      let qQ = QQ.cursor(),
        oQ = [];
      if (!qQ.firstChild()) return oQ;
      if (null != wQ)
        for (let DQ = !1; !DQ;)
          if (DQ = qQ.type.is(wQ), !qQ.nextSibling()) return oQ;
      for (;;) {
        if (null != LQ && qQ.type.is(LQ)) return oQ;
        if (qQ.type.is(FQ) && oQ.push(qQ.node), !qQ.nextSibling()) return null == LQ ? oQ : []
      }
    }

    function CQ(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : FQ.length - 1;
      for (let LQ = QQ; wQ >= 0; LQ = LQ.parent) {
        if (!LQ) return !1;
        if (!LQ.type.isAnonymous) {
          if (FQ[wQ] && FQ[wQ] != LQ.name) return !1;
          wQ--
        }
      }
      return !0
    }
    class SQ {
      constructor(QQ, FQ, wQ, LQ) {
        this.parent = QQ, this.buffer = FQ, this.index = wQ, this.start = LQ
      }
    }
    class iQ extends GQ {
      get name() {
        return this.type.name
      }
      get from() {
        return this.context.start + this.context.buffer.buffer[this.index + 1]
      }
      get to() {
        return this.context.start + this.context.buffer.buffer[this.index + 2]
      }
      constructor(QQ, FQ, wQ) {
        super(), this.context = QQ, this._parent = FQ, this.index = wQ, this.type = QQ.buffer.set.types[QQ.buffer.buffer[wQ]]
      }
      child(QQ, FQ, wQ) {
        let {
          buffer: LQ
        } = this.context, qQ = LQ.findChild(this.index + 4, LQ.buffer[this.index + 3], QQ, FQ - this.context.start, wQ);
        return qQ < 0 ? null : new iQ(this.context, this, qQ)
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
      enter(QQ, FQ) {
        if ((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0) & YQ.ExcludeBuffers) return null;
        let {
          buffer: wQ
        } = this.context, LQ = wQ.findChild(this.index + 4, wQ.buffer[this.index + 3], FQ > 0 ? 1 : -1, QQ - this.context.start, FQ);
        return LQ < 0 ? null : new iQ(this.context, this, LQ)
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
        } = this.context, FQ = QQ.buffer[this.index + 3];
        return FQ < (this._parent ? QQ.buffer[this._parent.index + 3] : QQ.buffer.length) ? new iQ(this.context, this._parent, FQ) : this.externalSibling(1)
      }
      get prevSibling() {
        let {
          buffer: QQ
        } = this.context, FQ = this._parent ? this._parent.index + 4 : 0;
        return this.index == FQ ? this.externalSibling(-1) : new iQ(this.context, this._parent, QQ.findChild(FQ, this.index, -1, 0, 4))
      }
      get tree() {
        return null
      }
      toTree() {
        let QQ = [],
          FQ = [],
          {
            buffer: wQ
          } = this.context,
          LQ = this.index + 4,
          qQ = wQ.buffer[this.index + 3];
        if (qQ > LQ) {
          let oQ = wQ.buffer[this.index + 1];
          QQ.push(wQ.slice(LQ, qQ, oQ)), FQ.push(0)
        }
        return new xQ(this.type, QQ, FQ, this.to - this.from)
      }
      toString() {
        return this.context.buffer.childString(this.index)
      }
    }

    function WQ(QQ) {
      if (!QQ.length) return null;
      let FQ = 0,
        wQ = QQ[0];
      for (let oQ = 1; oQ < QQ.length; oQ++) {
        let LQ = QQ[oQ];
        (LQ.from > wQ.from || LQ.to < wQ.to) && (wQ = LQ, FQ = oQ)
      }
      let LQ = wQ instanceof pQ && wQ.index < 0 ? null : wQ.parent,
        qQ = QQ.slice();
      return LQ ? qQ[FQ] = LQ : qQ.splice(FQ, 1), new RQ(qQ, wQ)
    }
    class RQ {
      constructor(QQ, FQ) {
        this.heads = QQ, this.node = FQ
      }
      get next() {
        return WQ(this.heads)
      }
    }
    class OQ {
      get name() {
        return this.type.name
      }
      constructor(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = FQ & ~YQ.EnterBracketed, QQ instanceof pQ) this.yieldNode(QQ);
        else {
          this._tree = QQ.context.parent, this.buffer = QQ.context;
          for (let FQ = QQ._parent; FQ; FQ = FQ._parent) this.stack.unshift(FQ.index);
          this.bufferNode = QQ, this.yieldBuf(QQ.index)
        }
      }
      yieldNode(QQ) {
        return !!QQ && (this._tree = QQ, this.type = QQ.type, this.from = QQ.from, this.to = QQ.to, !0)
      }
      yieldBuf(QQ, FQ) {
        this.index = QQ;
        let {
          start: wQ,
          buffer: LQ
        } = this.buffer;
        return this.type = FQ || LQ.set.types[LQ.buffer[QQ]], this.from = wQ + LQ.buffer[QQ + 1], this.to = wQ + LQ.buffer[QQ + 2], !0
      }
      yield(QQ) {
        return !!QQ && (QQ instanceof pQ ? (this.buffer = null, this.yieldNode(QQ)) : (this.buffer = QQ.context, this.yieldBuf(QQ.index, QQ.type)))
      }
      toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
      }
      enterChild(QQ, FQ, wQ) {
        if (!this.buffer) return this.yield(this._tree.nextChild(QQ < 0 ? this._tree._tree.children.length - 1 : 0, QQ, FQ, wQ, this.mode));
        let {
          buffer: LQ
        } = this.buffer, qQ = LQ.findChild(this.index + 4, LQ.buffer[this.index + 3], QQ, FQ - this.buffer.start, wQ);
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
      enter(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.mode;
        return this.buffer ? !(wQ & YQ.ExcludeBuffers) && this.enterChild(1, QQ, FQ) : this.yield(this._tree.enter(QQ, FQ, wQ))
      }
      parent() {
        if (!this.buffer) return this.yieldNode(this.mode & YQ.IncludeAnonymous ? this._tree._parent : this._tree.parent);
        if (this.stack.length) return this.yieldBuf(this.stack.pop());
        let QQ = this.mode & YQ.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        return this.buffer = null, this.yieldNode(QQ)
      }
      sibling(QQ) {
        if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + QQ, QQ, 0, 4, this.mode));
        let {
          buffer: FQ
        } = this.buffer, wQ = this.stack.length - 1;
        if (QQ < 0) {
          let QQ = wQ < 0 ? 0 : this.stack[wQ] + 4;
          if (this.index != QQ) return this.yieldBuf(FQ.findChild(QQ, this.index, -1, 0, 4))
        } else {
          let QQ = FQ.buffer[this.index + 3];
          if (QQ < (wQ < 0 ? FQ.buffer.length : FQ.buffer[this.stack[wQ] + 3])) return this.yieldBuf(QQ)
        }
        return wQ < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + QQ, QQ, 0, 4, this.mode))
      }
      nextSibling() {
        return this.sibling(1)
      }
      prevSibling() {
        return this.sibling(-1)
      }
      atLastNode(QQ) {
        let FQ, wQ, {
          buffer: LQ
        } = this;
        if (LQ) {
          if (QQ > 0) {
            if (this.index < LQ.buffer.buffer.length) return !1
          } else
            for (let QQ = 0; QQ < this.index; QQ++)
              if (LQ.buffer.buffer[QQ + 3] < this.index) return !1;
          ({
            index: FQ,
            parent: wQ
          } = LQ)
        } else({
          index: FQ,
          _parent: wQ
        } = this._tree);
        for (; wQ;
          ({
            index: FQ,
            _parent: wQ
          } = wQ))
          if (FQ > -1)
            for (let LQ = FQ + QQ, qQ = QQ < 0 ? -1 : wQ._tree.children.length; LQ != qQ; LQ += QQ) {
              let QQ = wQ._tree.children[LQ];
              if (this.mode & YQ.IncludeAnonymous || QQ instanceof tQ || !QQ.type.isAnonymous || sQ(QQ)) return !1
            }
        return !0
      }
      move(QQ, FQ) {
        if (FQ && this.enterChild(QQ, 0, 4)) return !0;
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
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        for (;
          (this.from == this.to || (FQ < 1 ? this.from >= QQ : this.from > QQ) || (FQ > -1 ? this.to <= QQ : this.to < QQ)) && this.parent(););
        for (; this.enterChild(1, QQ, FQ););
        return this
      }
      get node() {
        if (!this.buffer) return this._tree;
        let QQ = this.bufferNode,
          FQ = null,
          wQ = 0;
        if (QQ && QQ.context == this.buffer) QQ: for (let LQ = this.index, qQ = this.stack.length; qQ >= 0;) {
          for (let oQ = QQ; oQ; oQ = oQ._parent)
            if (oQ.index == LQ) {
              if (LQ == this.index) return oQ;
              FQ = oQ, wQ = qQ + 1;
              break QQ
            } LQ = this.stack[--qQ]
        }
        for (let LQ = wQ; LQ < this.stack.length; LQ++) FQ = new iQ(this.buffer, FQ, this.stack[LQ]);
        return this.bufferNode = new iQ(this.buffer, FQ, this.index)
      }
      get tree() {
        return this.buffer ? null : this._tree._tree
      }
      iterate(QQ, FQ) {
        for (let wQ = 0;;) {
          let LQ = !1;
          if (this.type.isAnonymous || !1 !== QQ(this)) {
            if (this.firstChild()) {
              wQ++;
              continue
            }
            this.type.isAnonymous || (LQ = !0)
          }
          for (;;) {
            if (LQ && FQ && FQ(this), LQ = this.type.isAnonymous, !wQ) return;
            if (this.nextSibling()) break;
            this.parent(), wQ--, LQ = !0
          }
        }
      }
      matchContext(QQ) {
        if (!this.buffer) return CQ(this.node.parent, QQ);
        let {
          buffer: FQ
        } = this.buffer, {
          types: wQ
        } = FQ.set;
        for (let LQ = QQ.length - 1, qQ = this.stack.length - 1; LQ >= 0; qQ--) {
          if (qQ < 0) return CQ(this._tree, QQ, LQ);
          let oQ = wQ[FQ.buffer[this.stack[qQ]]];
          if (!oQ.isAnonymous) {
            if (QQ[LQ] && QQ[LQ] != oQ.name) return !1;
            LQ--
          }
        }
        return !0
      }
    }

    function sQ(QQ) {
      return QQ.children.some((QQ => QQ instanceof tQ || !QQ.type.isAnonymous || sQ(QQ)))
    }
    const rQ = new WeakMap;

    function IQ(QQ, FQ) {
      if (!QQ.isAnonymous || FQ instanceof tQ || FQ.type != QQ) return 1;
      let wQ = rQ.get(FQ);
      if (null == wQ) {
        wQ = 1;
        for (let LQ of FQ.children) {
          if (LQ.type != QQ || !(LQ instanceof xQ)) {
            wQ = 1;
            break
          }
          wQ += IQ(QQ, LQ)
        }
        rQ.set(FQ, wQ)
      }
      return wQ
    }

    function UQ(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ) {
      let mQ = 0;
      for (let YQ = LQ; YQ < qQ; YQ++) mQ += IQ(QQ, FQ[YQ]);
      let uQ = Math.ceil(1.5 * mQ / 8),
        HQ = [],
        bQ = [];
      return function FQ(wQ, LQ, qQ, DQ, kQ) {
        for (let mQ = qQ; mQ < DQ;) {
          let qQ = mQ,
            YQ = LQ[mQ],
            xQ = IQ(QQ, wQ[mQ]);
          for (mQ++; mQ < DQ; mQ++) {
            let FQ = IQ(QQ, wQ[mQ]);
            if (xQ + FQ >= uQ) break;
            xQ += FQ
          }
          if (mQ == qQ + 1) {
            if (xQ > uQ) {
              let QQ = wQ[qQ];
              FQ(QQ.children, QQ.positions, 0, QQ.children.length, LQ[qQ] + kQ);
              continue
            }
            HQ.push(wQ[qQ])
          } else {
            let FQ = LQ[mQ - 1] + wQ[mQ - 1].length - YQ;
            HQ.push(UQ(QQ, wQ, LQ, qQ, mQ, YQ, FQ, null, vQ))
          }
          bQ.push(YQ + kQ - oQ)
        }
      }(FQ, wQ, LQ, qQ, 0), (kQ || vQ)(HQ, bQ, DQ)
    }
    class NQ {
      constructor() {
        this.map = new WeakMap
      }
      setBuffer(QQ, FQ, wQ) {
        let LQ = this.map.get(QQ);
        LQ || this.map.set(QQ, LQ = new Map), LQ.set(FQ, wQ)
      }
      getBuffer(QQ, FQ) {
        let wQ = this.map.get(QQ);
        return wQ && wQ.get(FQ)
      }
      set(QQ, FQ) {
        QQ instanceof iQ ? this.setBuffer(QQ.context.buffer, QQ.index, FQ) : QQ instanceof pQ && this.map.set(QQ.tree, FQ)
      }
      get(QQ) {
        return QQ instanceof iQ ? this.getBuffer(QQ.context.buffer, QQ.index) : QQ instanceof pQ ? this.map.get(QQ.tree) : void 0
      }
      cursorSet(QQ, FQ) {
        QQ.buffer ? this.setBuffer(QQ.buffer.buffer, QQ.index, FQ) : this.map.set(QQ.tree, FQ)
      }
      cursorGet(QQ) {
        return QQ.buffer ? this.getBuffer(QQ.buffer.buffer, QQ.index) : this.map.get(QQ.tree)
      }
    }
    class TQ {
      constructor(QQ, FQ, wQ, LQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          oQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.from = QQ, this.to = FQ, this.tree = wQ, this.offset = LQ, this.open = (qQ ? 1 : 0) | (oQ ? 2 : 0)
      }
      get openStart() {
        return (1 & this.open) > 0
      }
      get openEnd() {
        return (2 & this.open) > 0
      }
      static addTree(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          LQ = [new TQ(0, QQ.length, QQ, 0, !1, wQ)];
        for (let qQ of FQ) qQ.to > QQ.length && LQ.push(qQ);
        return LQ
      }
      static applyChanges(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
        if (!FQ.length) return QQ;
        let LQ = [],
          qQ = 1,
          oQ = QQ.length ? QQ[0] : null;
        for (let DQ = 0, kQ = 0, vQ = 0;; DQ++) {
          let mQ = DQ < FQ.length ? FQ[DQ] : null,
            uQ = mQ ? mQ.fromA : 1e9;
          if (uQ - kQ >= wQ)
            for (; oQ && oQ.from < uQ;) {
              let FQ = oQ;
              if (kQ >= FQ.from || uQ <= FQ.to || vQ) {
                let QQ = Math.max(FQ.from, kQ) - vQ,
                  wQ = Math.min(FQ.to, uQ) - vQ;
                FQ = QQ >= wQ ? null : new TQ(QQ, wQ, FQ.tree, FQ.offset + vQ, DQ > 0, !!mQ)
              }
              if (FQ && LQ.push(FQ), oQ.to > uQ) break;
              oQ = qQ < QQ.length ? QQ[qQ++] : null
            }
          if (!mQ) break;
          kQ = mQ.toA, vQ = mQ.toA - mQ.toB
        }
        return LQ
      }
    }
    class KQ {
      startParse(QQ, FQ, wQ) {
        return "string" == typeof QQ && (QQ = new zQ(QQ)), wQ = wQ ? wQ.length ? wQ.map((QQ => new oQ(QQ.from, QQ.to))) : [new oQ(0, 0)] : [new oQ(0, QQ.length)], this.createParse(QQ, FQ || [], wQ)
      }
      parse(QQ, FQ, wQ) {
        let LQ = this.startParse(QQ, FQ, wQ);
        for (;;) {
          let QQ = LQ.advance();
          if (QQ) return QQ
        }
      }
    }
    class zQ {
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
      read(QQ, FQ) {
        return this.string.slice(QQ, FQ)
      }
    }
    new DQ({
      perNode: !0
    })
  },
  40727: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => bQ,
      i: () => vQ,
      m: () => HQ,
      q: () => rQ
    });
    var LQ = wQ(40723);
    let qQ = 0;
    class oQ {
      constructor(QQ, FQ, wQ, LQ) {
        this.name = QQ, this.set = FQ, this.base = wQ, this.modified = LQ, this.id = qQ++
      }
      toString() {
        let {
          name: QQ
        } = this;
        for (let FQ of this.modified) FQ.name && (QQ = `${FQ.name}(${QQ})`);
        return QQ
      }
      static define(QQ, FQ) {
        let wQ = "string" == typeof QQ ? QQ : "?";
        if (QQ instanceof oQ && (FQ = QQ), null === FQ || void 0 === FQ ? void 0 : FQ.base) throw new Error("Can not derive from a modified tag");
        let LQ = new oQ(wQ, [], null, []);
        if (LQ.set.push(LQ), FQ)
          for (let qQ of FQ.set) LQ.set.push(qQ);
        return LQ
      }
      static defineModifier(QQ) {
        let FQ = new kQ(QQ);
        return QQ => QQ.modified.indexOf(FQ) > -1 ? QQ : kQ.get(QQ.base || QQ, QQ.modified.concat(FQ).sort(((QQ, FQ) => QQ.id - FQ.id)))
      }
    }
    let DQ = 0;
    class kQ {
      constructor(QQ) {
        this.name = QQ, this.instances = [], this.id = DQ++
      }
      static get(QQ, FQ) {
        if (!FQ.length) return QQ;
        let wQ = FQ[0].instances.find((wQ => {
          return wQ.base == QQ && (LQ = FQ, qQ = wQ.modified, LQ.length == qQ.length && LQ.every(((QQ, FQ) => QQ == qQ[FQ])));
          var LQ, qQ
        }));
        if (wQ) return wQ;
        let LQ = [],
          qQ = new oQ(QQ.name, LQ, QQ, FQ);
        for (let oQ of FQ) oQ.instances.push(qQ);
        let DQ = function(QQ) {
          let FQ = [
            []
          ];
          for (let wQ = 0; wQ < QQ.length; wQ++)
            for (let LQ = 0, qQ = FQ.length; LQ < qQ; LQ++) FQ.push(FQ[LQ].concat(QQ[wQ]));
          return FQ.sort(((QQ, FQ) => FQ.length - QQ.length))
        }(FQ);
        for (let oQ of QQ.set)
          if (!oQ.modified.length)
            for (let QQ of DQ) LQ.push(kQ.get(oQ, QQ));
        return qQ
      }
    }

    function vQ(QQ) {
      let FQ = Object.create(null);
      for (let wQ in QQ) {
        let LQ = QQ[wQ];
        Array.isArray(LQ) || (LQ = [LQ]);
        for (let QQ of wQ.split(" "))
          if (QQ) {
            let wQ = [],
              qQ = 2,
              oQ = QQ;
            for (let FQ = 0;;) {
              if ("..." == oQ && FQ > 0 && FQ + 3 == QQ.length) {
                qQ = 1;
                break
              }
              let LQ = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(oQ);
              if (!LQ) throw new RangeError("Invalid path: " + QQ);
              if (wQ.push("*" == LQ[0] ? "" : '"' == LQ[0][0] ? JSON.parse(LQ[0]) : LQ[0]), FQ += LQ[0].length, FQ == QQ.length) break;
              let DQ = QQ[FQ++];
              if (FQ == QQ.length && "!" == DQ) {
                qQ = 0;
                break
              }
              if ("/" != DQ) throw new RangeError("Invalid path: " + QQ);
              oQ = QQ.slice(FQ)
            }
            let DQ = wQ.length - 1,
              kQ = wQ[DQ];
            if (!kQ) throw new RangeError("Invalid path: " + QQ);
            let vQ = new uQ(LQ, qQ, DQ > 0 ? wQ.slice(0, DQ) : null);
            FQ[kQ] = vQ.sort(FQ[kQ])
          }
      }
      return mQ.add(FQ)
    }
    const mQ = new LQ.g({
      combine(QQ, FQ) {
        let wQ, LQ, qQ;
        for (; QQ || FQ;) {
          if (!QQ || FQ && QQ.depth >= FQ.depth ? (qQ = FQ, FQ = FQ.next) : (qQ = QQ, QQ = QQ.next), wQ && wQ.mode == qQ.mode && !qQ.context && !wQ.context) continue;
          let oQ = new uQ(qQ.tags, qQ.mode, qQ.context);
          wQ ? wQ.next = oQ : LQ = oQ, wQ = oQ
        }
        return LQ
      }
    });
    class uQ {
      constructor(QQ, FQ, wQ, LQ) {
        this.tags = QQ, this.mode = FQ, this.context = wQ, this.next = LQ
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

    function HQ(QQ, FQ) {
      let wQ = Object.create(null);
      for (let oQ of QQ)
        if (Array.isArray(oQ.tag))
          for (let QQ of oQ.tag) wQ[QQ.id] = oQ.class;
        else wQ[oQ.tag.id] = oQ.class;
      let {
        scope: LQ,
        all: qQ = null
      } = FQ || {};
      return {
        style: QQ => {
          let FQ = qQ;
          for (let LQ of QQ)
            for (let QQ of LQ.set) {
              let LQ = wQ[QQ.id];
              if (LQ) {
                FQ = FQ ? FQ + " " + LQ : LQ;
                break
              }
            }
          return FQ
        },
        scope: LQ
      }
    }

    function bQ(QQ, FQ, wQ) {
      let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : QQ.length,
        oQ = new YQ(LQ, Array.isArray(FQ) ? FQ : [FQ], wQ);
      oQ.highlightRange(QQ.cursor(), LQ, qQ, "", oQ.highlighters), oQ.flush(qQ)
    }
    uQ.empty = new uQ([], 2, null);
    class YQ {
      constructor(QQ, FQ, wQ) {
        this.at = QQ, this.highlighters = FQ, this.span = wQ, this.class = ""
      }
      startSpan(QQ, FQ) {
        FQ != this.class && (this.flush(QQ), QQ > this.at && (this.at = QQ), this.class = FQ)
      }
      flush(QQ) {
        QQ > this.at && this.class && this.span(this.at, QQ, this.class)
      }
      highlightRange(QQ, FQ, wQ, qQ, oQ) {
        let {
          type: DQ,
          from: kQ,
          to: vQ
        } = QQ;
        if (kQ >= wQ || vQ <= FQ) return;
        DQ.isTop && (oQ = this.highlighters.filter((QQ => !QQ.scope || QQ.scope(DQ))));
        let HQ = qQ,
          bQ = function(QQ) {
            let FQ = QQ.type.prop(mQ);
            for (; FQ && FQ.context && !QQ.matchContext(FQ.context);) FQ = FQ.next;
            return FQ || null
          }(QQ) || uQ.empty,
          YQ = function(QQ, FQ) {
            let wQ = null;
            for (let LQ of QQ) {
              let QQ = LQ.style(FQ);
              QQ && (wQ = wQ ? wQ + " " + QQ : QQ)
            }
            return wQ
          }(oQ, bQ.tags);
        if (YQ && (HQ && (HQ += " "), HQ += YQ, 1 == bQ.mode && (qQ += (qQ ? " " : "") + YQ)), this.startSpan(Math.max(FQ, kQ), HQ), bQ.opaque) return;
        let xQ = QQ.tree && QQ.tree.prop(LQ.g.mounted);
        if (xQ && xQ.overlay) {
          let LQ = QQ.node.enter(xQ.overlay[0].from + kQ, 1),
            DQ = this.highlighters.filter((QQ => !QQ.scope || QQ.scope(xQ.tree.type))),
            mQ = QQ.firstChild();
          for (let uQ = 0, bQ = kQ;; uQ++) {
            let YQ = uQ < xQ.overlay.length ? xQ.overlay[uQ] : null,
              AQ = YQ ? YQ.from + kQ : vQ,
              tQ = Math.max(FQ, bQ),
              eQ = Math.min(wQ, AQ);
            if (tQ < eQ && mQ)
              for (; QQ.from < eQ && (this.highlightRange(QQ, tQ, eQ, qQ, oQ), this.startSpan(Math.min(eQ, QQ.to), HQ), !(QQ.to >= AQ) && QQ.nextSibling()););
            if (!YQ || AQ > wQ) break;
            bQ = YQ.to + kQ, bQ > FQ && (this.highlightRange(LQ.cursor(), Math.max(FQ, YQ.from + kQ), Math.min(wQ, bQ), "", DQ), this.startSpan(Math.min(wQ, bQ), HQ))
          }
          mQ && QQ.parent()
        } else if (QQ.firstChild()) {
          xQ && (qQ = "");
          do {
            if (!(QQ.to <= FQ)) {
              if (QQ.from >= wQ) break;
              this.highlightRange(QQ, FQ, wQ, qQ, oQ), this.startSpan(Math.min(wQ, QQ.to), HQ)
            }
          } while (QQ.nextSibling());
          QQ.parent()
        }
      }
    }
    const xQ = oQ.define,
      AQ = xQ(),
      tQ = xQ(),
      eQ = xQ(tQ),
      MQ = xQ(tQ),
      GQ = xQ(),
      pQ = xQ(GQ),
      cQ = xQ(GQ),
      CQ = xQ(),
      SQ = xQ(CQ),
      iQ = xQ(),
      WQ = xQ(),
      RQ = xQ(),
      OQ = xQ(RQ),
      sQ = xQ(),
      rQ = {
        comment: AQ,
        lineComment: xQ(AQ),
        blockComment: xQ(AQ),
        docComment: xQ(AQ),
        name: tQ,
        variableName: xQ(tQ),
        typeName: eQ,
        tagName: xQ(eQ),
        propertyName: MQ,
        attributeName: xQ(MQ),
        className: xQ(tQ),
        labelName: xQ(tQ),
        namespace: xQ(tQ),
        macroName: xQ(tQ),
        literal: GQ,
        string: pQ,
        docString: xQ(pQ),
        character: xQ(pQ),
        attributeValue: xQ(pQ),
        number: cQ,
        integer: xQ(cQ),
        float: xQ(cQ),
        bool: xQ(GQ),
        regexp: xQ(GQ),
        escape: xQ(GQ),
        color: xQ(GQ),
        url: xQ(GQ),
        keyword: iQ,
        self: xQ(iQ),
        null: xQ(iQ),
        atom: xQ(iQ),
        unit: xQ(iQ),
        modifier: xQ(iQ),
        operatorKeyword: xQ(iQ),
        controlKeyword: xQ(iQ),
        definitionKeyword: xQ(iQ),
        moduleKeyword: xQ(iQ),
        operator: WQ,
        derefOperator: xQ(WQ),
        arithmeticOperator: xQ(WQ),
        logicOperator: xQ(WQ),
        bitwiseOperator: xQ(WQ),
        compareOperator: xQ(WQ),
        updateOperator: xQ(WQ),
        definitionOperator: xQ(WQ),
        typeOperator: xQ(WQ),
        controlOperator: xQ(WQ),
        punctuation: RQ,
        separator: xQ(RQ),
        bracket: OQ,
        angleBracket: xQ(OQ),
        squareBracket: xQ(OQ),
        paren: xQ(OQ),
        brace: xQ(OQ),
        content: CQ,
        heading: SQ,
        heading1: xQ(SQ),
        heading2: xQ(SQ),
        heading3: xQ(SQ),
        heading4: xQ(SQ),
        heading5: xQ(SQ),
        heading6: xQ(SQ),
        contentSeparator: xQ(CQ),
        list: xQ(CQ),
        quote: xQ(CQ),
        emphasis: xQ(CQ),
        strong: xQ(CQ),
        link: xQ(CQ),
        monospace: xQ(CQ),
        strikethrough: xQ(CQ),
        inserted: xQ(),
        deleted: xQ(),
        changed: xQ(),
        invalid: xQ(),
        meta: sQ,
        documentMeta: xQ(sQ),
        annotation: xQ(sQ),
        processingInstruction: xQ(sQ),
        definition: oQ.defineModifier("definition"),
        constant: oQ.defineModifier("constant"),
        function: oQ.defineModifier("function"),
        standard: oQ.defineModifier("standard"),
        local: oQ.defineModifier("local"),
        special: oQ.defineModifier("special")
      };
    for (let IQ in rQ) {
      let QQ = rQ[IQ];
      QQ instanceof oQ && (QQ.name = IQ)
    }
    HQ([{
      tag: rQ.link,
      class: "tok-link"
    }, {
      tag: rQ.heading,
      class: "tok-heading"
    }, {
      tag: rQ.emphasis,
      class: "tok-emphasis"
    }, {
      tag: rQ.strong,
      class: "tok-strong"
    }, {
      tag: rQ.keyword,
      class: "tok-keyword"
    }, {
      tag: rQ.atom,
      class: "tok-atom"
    }, {
      tag: rQ.bool,
      class: "tok-bool"
    }, {
      tag: rQ.url,
      class: "tok-url"
    }, {
      tag: rQ.labelName,
      class: "tok-labelName"
    }, {
      tag: rQ.inserted,
      class: "tok-inserted"
    }, {
      tag: rQ.deleted,
      class: "tok-deleted"
    }, {
      tag: rQ.literal,
      class: "tok-literal"
    }, {
      tag: rQ.string,
      class: "tok-string"
    }, {
      tag: rQ.number,
      class: "tok-number"
    }, {
      tag: [rQ.regexp, rQ.escape, rQ.special(rQ.string)],
      class: "tok-string2"
    }, {
      tag: rQ.variableName,
      class: "tok-variableName"
    }, {
      tag: rQ.local(rQ.variableName),
      class: "tok-variableName tok-local"
    }, {
      tag: rQ.definition(rQ.variableName),
      class: "tok-variableName tok-definition"
    }, {
      tag: rQ.special(rQ.variableName),
      class: "tok-variableName2"
    }, {
      tag: rQ.definition(rQ.propertyName),
      class: "tok-propertyName tok-definition"
    }, {
      tag: rQ.typeName,
      class: "tok-typeName"
    }, {
      tag: rQ.namespace,
      class: "tok-namespace"
    }, {
      tag: rQ.className,
      class: "tok-className"
    }, {
      tag: rQ.macroName,
      class: "tok-macroName"
    }, {
      tag: rQ.propertyName,
      class: "tok-propertyName"
    }, {
      tag: rQ.operator,
      class: "tok-operator"
    }, {
      tag: rQ.comment,
      class: "tok-comment"
    }, {
      tag: rQ.meta,
      class: "tok-meta"
    }, {
      tag: rQ.invalid,
      class: "tok-invalid"
    }, {
      tag: rQ.punctuation,
      class: "tok-punctuation"
    }])
  },
  40736: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => kQ.f,
      g: () => DQ.w,
      h: () => DQ.H,
      l: () => DQ.L,
      n: () => kQ.h,
      q: () => iw,
      u: () => kQ.N,
      w: () => kQ.ib
    });
    var LQ = wQ(1381),
      qQ = wQ(1373),
      oQ = wQ(53),
      DQ = wQ(40695),
      kQ = wQ(40702),
      vQ = wQ(40718),
      mQ = wQ(40723);

    function uQ(QQ, FQ) {
      return wQ => {
        let {
          state: LQ,
          dispatch: qQ
        } = wQ;
        if (LQ.readOnly) return !1;
        let oQ = QQ(FQ, LQ);
        return !!oQ && (qQ(LQ.update(oQ)), !0)
      }
    }
    const HQ = uQ(eQ, 0),
      bQ = uQ(tQ, 0),
      YQ = uQ(((QQ, FQ) => tQ(QQ, FQ, function(QQ) {
        let FQ = [];
        for (let wQ of QQ.selection.PA) {
          let LQ = QQ.doc.lineAt(wQ.from),
            qQ = wQ.to <= LQ.to ? LQ : QQ.doc.lineAt(wQ.to);
          qQ.from > LQ.from && qQ.from == wQ.to && (qQ = wQ.to == LQ.to + 1 ? LQ : QQ.doc.lineAt(wQ.to - 1));
          let oQ = FQ.length - 1;
          oQ >= 0 && FQ[oQ].to > LQ.from ? FQ[oQ].to = qQ.to : FQ.push({
            from: LQ.from + /^\s*/.exec(LQ.text)[0].length,
            to: qQ.to
          })
        }
        return FQ
      }(FQ))), 0);

    function xQ(QQ, FQ) {
      let wQ = QQ.languageDataAt("commentTokens", FQ, 1);
      return wQ.length ? wQ[0] : {}
    }
    const AQ = 50;

    function tQ(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : FQ.selection.PA,
        LQ = wQ.map((QQ => xQ(FQ, QQ.from).block));
      if (!LQ.every((QQ => QQ))) return null;
      let qQ = wQ.map(((QQ, wQ) => function(QQ, FQ, wQ, LQ) {
        let qQ, oQ, {
            open: DQ,
            close: kQ
          } = FQ,
          vQ = QQ.sliceDoc(wQ - AQ, wQ),
          mQ = QQ.sliceDoc(LQ, LQ + AQ),
          uQ = /\s*$/.exec(vQ)[0].length,
          HQ = /^\s*/.exec(mQ)[0].length,
          bQ = vQ.length - uQ;
        if (vQ.slice(bQ - DQ.length, bQ) == DQ && mQ.slice(HQ, HQ + kQ.length) == kQ) return {
          open: {
            pos: wQ - uQ,
            margin: uQ && 1
          },
          close: {
            pos: LQ + HQ,
            margin: HQ && 1
          }
        };
        LQ - wQ <= 2 * AQ ? qQ = oQ = QQ.sliceDoc(wQ, LQ) : (qQ = QQ.sliceDoc(wQ, wQ + AQ), oQ = QQ.sliceDoc(LQ - AQ, LQ));
        let YQ = /^\s*/.exec(qQ)[0].length,
          xQ = /\s*$/.exec(oQ)[0].length,
          tQ = oQ.length - xQ - kQ.length;
        return qQ.slice(YQ, YQ + DQ.length) == DQ && oQ.slice(tQ, tQ + kQ.length) == kQ ? {
          open: {
            pos: wQ + YQ + DQ.length,
            margin: /\s/.test(qQ.charAt(YQ + DQ.length)) ? 1 : 0
          },
          close: {
            pos: LQ - xQ - kQ.length,
            margin: /\s/.test(oQ.charAt(tQ - 1)) ? 1 : 0
          }
        } : null
      }(FQ, LQ[wQ], QQ.from, QQ.to)));
      if (2 != QQ && !qQ.every((QQ => QQ))) return {
        changes: FQ.changes(wQ.map(((QQ, FQ) => qQ[FQ] ? [] : [{
          from: QQ.from,
          insert: LQ[FQ].open + " "
        }, {
          from: QQ.to,
          insert: " " + LQ[FQ].close
        }])))
      };
      if (1 != QQ && qQ.some((QQ => QQ))) {
        let QQ = [];
        for (let FQ, wQ = 0; wQ < qQ.length; wQ++)
          if (FQ = qQ[wQ]) {
            let qQ = LQ[wQ],
              {
                open: oQ,
                close: DQ
              } = FQ;
            QQ.push({
              from: oQ.pos - qQ.open.length,
              to: oQ.pos + oQ.margin
            }, {
              from: DQ.pos - DQ.margin,
              to: DQ.pos + qQ.close.length
            })
          } return {
          changes: QQ
        }
      }
      return null
    }

    function eQ(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : FQ.selection.PA,
        LQ = [],
        qQ = -1;
      QQ: for (let {
          from: oQ,
          to: DQ
        }
        of wQ) {
        let QQ, wQ = LQ.length,
          kQ = 1e9;
        for (let vQ = oQ; vQ <= DQ;) {
          let wQ = FQ.doc.lineAt(vQ);
          if (void 0 == QQ && (QQ = xQ(FQ, wQ.from).line, !QQ)) continue QQ;
          if (wQ.from > qQ && (oQ == DQ || DQ > wQ.from)) {
            qQ = wQ.from;
            let FQ = /^\s*/.exec(wQ.text)[0].length,
              oQ = FQ == wQ.length,
              DQ = wQ.text.slice(FQ, FQ + QQ.length) == QQ ? FQ : -1;
            FQ < wQ.text.length && FQ < kQ && (kQ = FQ), LQ.push({
              line: wQ,
              comment: DQ,
              token: QQ,
              indent: FQ,
              empty: oQ,
              single: !1
            })
          }
          vQ = wQ.to + 1
        }
        if (kQ < 1e9)
          for (let FQ = wQ; FQ < LQ.length; FQ++) LQ[FQ].indent < LQ[FQ].line.text.length && (LQ[FQ].indent = kQ);
        LQ.length == wQ + 1 && (LQ[wQ].single = !0)
      }
      if (2 != QQ && LQ.some((QQ => QQ.comment < 0 && (!QQ.empty || QQ.single)))) {
        let QQ = [];
        for (let {
            line: FQ,
            token: qQ,
            indent: oQ,
            empty: DQ,
            single: kQ
          }
          of LQ) !kQ && DQ || QQ.push({
          from: FQ.from + oQ,
          insert: qQ + " "
        });
        let wQ = FQ.changes(QQ);
        return {
          changes: wQ,
          selection: FQ.selection.map(wQ, 1)
        }
      }
      if (1 != QQ && LQ.some((QQ => QQ.comment >= 0))) {
        let QQ = [];
        for (let {
            line: FQ,
            comment: wQ,
            token: qQ
          }
          of LQ)
          if (wQ >= 0) {
            let LQ = FQ.from + wQ,
              oQ = LQ + qQ.length;
            " " == FQ.text[oQ - FQ.from] && oQ++, QQ.push({
              from: LQ,
              to: oQ
            })
          } return {
          changes: QQ
        }
      }
      return null
    }
    const MQ = DQ.d.define(),
      GQ = DQ.d.define(),
      pQ = DQ.r.define(),
      cQ = DQ.r.define({
        combine: QQ => (0, DQ.W)(QQ, {
          minDepth: 100,
          newGroupDelay: 500,
          joinToEvent: (QQ, FQ) => FQ
        }, {
          minDepth: Math.max,
          newGroupDelay: Math.min,
          joinToEvent: (QQ, FQ) => (wQ, LQ) => QQ(wQ, LQ) || FQ(wQ, LQ)
        })
      }),
      CQ = DQ.L.define({
        create: () => aQ.empty,
        update(QQ, FQ) {
          let wQ = FQ.state.facet(cQ),
            LQ = FQ.annotation(MQ);
          if (LQ) {
            let qQ = sQ.fromTransaction(FQ, LQ.selection),
              oQ = LQ.side,
              DQ = 0 == oQ ? QQ.undone : QQ.done;
            return DQ = qQ ? rQ(DQ, DQ.length, wQ.minDepth, qQ) : TQ(DQ, FQ.startState.selection), new aQ(0 == oQ ? LQ.rest : DQ, 0 == oQ ? DQ : LQ.rest)
          }
          let qQ = FQ.annotation(GQ);
          if ("full" != qQ && "before" != qQ || (QQ = QQ.isolate()), !1 === FQ.annotation(DQ.S.addToHistory)) return FQ.changes.empty ? QQ : QQ.addMapping(FQ.changes.desc);
          let oQ = sQ.fromTransaction(FQ),
            kQ = FQ.annotation(DQ.S.time),
            vQ = FQ.annotation(DQ.S.userEvent);
          return oQ ? QQ = QQ.addChanges(oQ, kQ, vQ, wQ, FQ) : FQ.selection && (QQ = QQ.addSelection(FQ.startState.selection, kQ, vQ, wQ.newGroupDelay)), "full" != qQ && "after" != qQ || (QQ = QQ.isolate()), QQ
        },
        toJSON: QQ => ({
          done: QQ.done.map((QQ => QQ.toJSON())),
          undone: QQ.undone.map((QQ => QQ.toJSON()))
        }),
        fromJSON: QQ => new aQ(QQ.done.map(sQ.fromJSON), QQ.undone.map(sQ.fromJSON))
      });

    function SQ(QQ, FQ) {
      return function(wQ) {
        let {
          state: LQ,
          dispatch: qQ
        } = wQ;
        if (!FQ && LQ.readOnly) return !1;
        let oQ = LQ.field(CQ, !1);
        if (!oQ) return !1;
        let DQ = oQ.pop(QQ, LQ, FQ);
        return !!DQ && (qQ(DQ), !0)
      }
    }
    const iQ = SQ(0, !1),
      WQ = SQ(1, !1),
      RQ = SQ(0, !0),
      OQ = SQ(1, !0);
    class sQ {
      constructor(QQ, FQ, wQ, LQ, qQ) {
        this.changes = QQ, this.effects = FQ, this.mapped = wQ, this.startSelection = LQ, this.selectionsAfter = qQ
      }
      setSelAfter(QQ) {
        return new sQ(this.changes, this.effects, this.mapped, this.startSelection, QQ)
      }
      toJSON() {
        var QQ, FQ, wQ;
        return {
          changes: null === (QQ = this.changes) || void 0 === QQ ? void 0 : QQ.toJSON(),
          mapped: null === (FQ = this.mapped) || void 0 === FQ ? void 0 : FQ.toJSON(),
          startSelection: null === (wQ = this.startSelection) || void 0 === wQ ? void 0 : wQ.toJSON(),
          selectionsAfter: this.selectionsAfter.map((QQ => QQ.toJSON()))
        }
      }
      static fromJSON(QQ) {
        return new sQ(QQ.changes && DQ.ChangeSet.fromJSON(QQ.changes), [], QQ.mapped && DQ.e.fromJSON(QQ.mapped), QQ.startSelection && DQ.j.fromJSON(QQ.startSelection), QQ.selectionsAfter.map(DQ.j.fromJSON))
      }
      static fromTransaction(QQ, FQ) {
        let wQ = UQ;
        for (let LQ of QQ.startState.facet(pQ)) {
          let FQ = LQ(QQ);
          FQ.length && (wQ = wQ.concat(FQ))
        }
        return !wQ.length && QQ.changes.empty ? null : new sQ(QQ.changes.invert(QQ.startState.doc), wQ, void 0, FQ || QQ.startState.selection, UQ)
      }
      static selection(QQ) {
        return new sQ(void 0, UQ, void 0, void 0, QQ)
      }
    }

    function rQ(QQ, FQ, wQ, LQ) {
      let qQ = FQ + 1 > wQ + 20 ? FQ - wQ - 1 : 0,
        oQ = QQ.slice(qQ, FQ);
      return oQ.push(LQ), oQ
    }

    function IQ(QQ, FQ) {
      return QQ.length ? FQ.length ? QQ.concat(FQ) : QQ : FQ
    }
    const UQ = [],
      NQ = 200;

    function TQ(QQ, FQ) {
      if (QQ.length) {
        let wQ = QQ[QQ.length - 1],
          LQ = wQ.selectionsAfter.slice(Math.max(0, wQ.selectionsAfter.length - NQ));
        return LQ.length && LQ[LQ.length - 1].eq(FQ) ? QQ : (LQ.push(FQ), rQ(QQ, QQ.length - 1, 1e9, wQ.setSelAfter(LQ)))
      }
      return [sQ.selection([FQ])]
    }

    function KQ(QQ) {
      let FQ = QQ[QQ.length - 1],
        wQ = QQ.slice();
      return wQ[QQ.length - 1] = FQ.setSelAfter(FQ.selectionsAfter.slice(0, FQ.selectionsAfter.length - 1)), wQ
    }

    function zQ(QQ, FQ) {
      if (!QQ.length) return QQ;
      let wQ = QQ.length,
        LQ = UQ;
      for (; wQ;) {
        let qQ = lQ(QQ[wQ - 1], FQ, LQ);
        if (qQ.changes && !qQ.changes.empty || qQ.effects.length) {
          let FQ = QQ.slice(0, wQ);
          return FQ[wQ - 1] = qQ, FQ
        }
        FQ = qQ.mapped, wQ--, LQ = qQ.selectionsAfter
      }
      return LQ.length ? [sQ.selection(LQ)] : UQ
    }

    function lQ(QQ, FQ, wQ) {
      let LQ = IQ(QQ.selectionsAfter.length ? QQ.selectionsAfter.map((QQ => QQ.map(FQ))) : UQ, wQ);
      if (!QQ.changes) return sQ.selection(LQ);
      let qQ = QQ.changes.map(FQ),
        oQ = FQ.mapDesc(QQ.changes, !0),
        kQ = QQ.mapped ? QQ.mapped.composeDesc(oQ) : oQ;
      return new sQ(qQ, DQ.H.mapEffects(QQ.effects, FQ), kQ, QQ.startSelection.map(oQ), LQ)
    }
    const jQ = /^(input\.type|delete)($|\.)/;
    class aQ {
      constructor(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        this.done = QQ, this.undone = FQ, this.prevTime = wQ, this.prevUserEvent = LQ
      }
      isolate() {
        return this.prevTime ? new aQ(this.done, this.undone) : this
      }
      addChanges(QQ, FQ, wQ, LQ, qQ) {
        let oQ = this.done,
          kQ = oQ[oQ.length - 1];
        return oQ = kQ && kQ.changes && !kQ.changes.empty && QQ.changes && (!wQ || jQ.test(wQ)) && (!kQ.selectionsAfter.length && FQ - this.prevTime < LQ.newGroupDelay && LQ.joinToEvent(qQ, function(QQ, FQ) {
          let wQ = [],
            LQ = !1;
          return QQ.iterChangedRanges(((QQ, FQ) => wQ.push(QQ, FQ))), FQ.iterChangedRanges(((QQ, FQ, qQ, oQ) => {
            for (let DQ = 0; DQ < wQ.length;) {
              let QQ = wQ[DQ++],
                FQ = wQ[DQ++];
              oQ >= QQ && qQ <= FQ && (LQ = !0)
            }
          })), LQ
        }(kQ.changes, QQ.changes)) || "input.type.compose" == wQ) ? rQ(oQ, oQ.length - 1, LQ.minDepth, new sQ(QQ.changes.compose(kQ.changes), IQ(DQ.H.mapEffects(QQ.effects, kQ.changes), kQ.effects), kQ.mapped, kQ.startSelection, UQ)) : rQ(oQ, oQ.length, LQ.minDepth, QQ), new aQ(oQ, UQ, FQ, wQ)
      }
      addSelection(QQ, FQ, wQ, LQ) {
        let qQ = this.done.length ? this.done[this.done.length - 1].selectionsAfter : UQ;
        return qQ.length > 0 && FQ - this.prevTime < LQ && wQ == this.prevUserEvent && wQ && /^select($|\.)/.test(wQ) && (oQ = qQ[qQ.length - 1], DQ = QQ, oQ.PA.length == DQ.PA.length && 0 === oQ.PA.filter(((QQ, FQ) => QQ.empty != DQ.PA[FQ].empty)).length) ? this : new aQ(TQ(this.done, QQ), this.undone, FQ, wQ);
        var oQ, DQ
      }
      addMapping(QQ) {
        return new aQ(zQ(this.done, QQ), zQ(this.undone, QQ), this.prevTime, this.prevUserEvent)
      }
      pop(QQ, FQ, wQ) {
        let LQ = 0 == QQ ? this.done : this.undone;
        if (0 == LQ.length) return null;
        let qQ = LQ[LQ.length - 1],
          oQ = qQ.selectionsAfter[0] || (qQ.startSelection ? qQ.startSelection.map(qQ.changes.invertedDesc, 1) : FQ.selection);
        if (wQ && qQ.selectionsAfter.length) return FQ.update({
          selection: qQ.selectionsAfter[qQ.selectionsAfter.length - 1],
          annotations: MQ.of({
            side: QQ,
            rest: KQ(LQ),
            selection: oQ
          }),
          userEvent: 0 == QQ ? "select.undo" : "select.redo",
          scrollIntoView: !0
        });
        if (qQ.changes) {
          let wQ = 1 == LQ.length ? UQ : LQ.slice(0, LQ.length - 1);
          return qQ.mapped && (wQ = zQ(wQ, qQ.mapped)), FQ.update({
            changes: qQ.changes,
            selection: qQ.startSelection,
            effects: qQ.effects,
            annotations: MQ.of({
              side: QQ,
              rest: wQ,
              selection: oQ
            }),
            filter: !1,
            userEvent: 0 == QQ ? "undo" : "redo",
            scrollIntoView: !0
          })
        }
        return null
      }
    }
    aQ.empty = new aQ(UQ, UQ);
    const XQ = [{
      key: "Mod-z",
      run: iQ,
      preventDefault: !0
    }, {
      key: "Mod-y",
      mac: "Mod-Shift-z",
      run: WQ,
      preventDefault: !0
    }, {
      linux: "Ctrl-Shift-z",
      run: WQ,
      preventDefault: !0
    }, {
      key: "Mod-u",
      run: RQ,
      preventDefault: !0
    }, {
      key: "Alt-u",
      mac: "Mod-Shift-u",
      run: OQ,
      preventDefault: !0
    }];

    function fQ(QQ, FQ) {
      return DQ.j.create(QQ.PA.map(FQ), QQ.mainIndex)
    }

    function VQ(QQ, FQ) {
      return QQ.update({
        selection: FQ,
        scrollIntoView: !0,
        userEvent: "select"
      })
    }

    function hQ(QQ, FQ) {
      let {
        state: wQ,
        dispatch: LQ
      } = QQ, qQ = fQ(wQ.selection, FQ);
      return !qQ.eq(wQ.selection, !0) && (LQ(VQ(wQ, qQ)), !0)
    }

    function JQ(QQ, FQ) {
      return DQ.j.cursor(FQ ? QQ.to : QQ.from)
    }

    function EQ(QQ, FQ) {
      return hQ(QQ, (wQ => wQ.empty ? QQ.moveByChar(wQ, FQ) : JQ(wQ, FQ)))
    }

    function nQ(QQ) {
      return QQ.textDirectionAt(QQ.state.selection.main.head) == kQ.d.LTR
    }
    const gQ = QQ => EQ(QQ, !nQ(QQ)),
      PQ = QQ => EQ(QQ, nQ(QQ));

    function ZQ(QQ, FQ) {
      return hQ(QQ, (wQ => wQ.empty ? QQ.moveByGroup(wQ, FQ) : JQ(wQ, FQ)))
    }
    "undefined" != typeof Intl && Intl.Segmenter;

    function yQ(QQ, FQ, wQ) {
      if (FQ.type.prop(wQ)) return !0;
      let LQ = FQ.to - FQ.from;
      return LQ && (LQ > 2 || /[^\s,.;:]/.test(QQ.sliceDoc(FQ.from, FQ.to))) || FQ.firstChild
    }

    function BQ(QQ, FQ, wQ) {
      let LQ, qQ, oQ = (0, vQ.ob)(QQ).resolveInner(FQ.head),
        kQ = wQ ? mQ.g.closedBy : mQ.g.openedBy;
      for (let DQ = FQ.head;;) {
        let FQ = wQ ? oQ.childAfter(DQ) : oQ.childBefore(DQ);
        if (!FQ) break;
        yQ(QQ, FQ, kQ) ? oQ = FQ : DQ = wQ ? FQ.to : FQ.from
      }
      return qQ = oQ.type.prop(kQ) && (LQ = wQ ? (0, vQ.db)(QQ, oQ.from, 1) : (0, vQ.db)(QQ, oQ.to, -1)) && LQ.matched ? wQ ? LQ.end.to : LQ.end.from : wQ ? oQ.to : oQ.from, DQ.j.cursor(qQ, wQ ? -1 : 1)
    }

    function dQ(QQ, FQ) {
      return hQ(QQ, (wQ => {
        if (!wQ.empty) return JQ(wQ, FQ);
        let LQ = QQ.moveVertically(wQ, FQ);
        return LQ.head != wQ.head ? LQ : QQ.moveToLineBoundary(wQ, FQ)
      }))
    }
    const QF = QQ => dQ(QQ, !1),
      FF = QQ => dQ(QQ, !0);

    function wF(QQ) {
      let FQ, wQ = QQ.scrollDOM.clientHeight < QQ.scrollDOM.scrollHeight - 2,
        LQ = 0,
        qQ = 0;
      if (wQ) {
        for (let FQ of QQ.state.facet(kQ.f.scrollMargins)) {
          let wQ = FQ(QQ);
          (null === wQ || void 0 === wQ ? void 0 : wQ.top) && (LQ = Math.max(null === wQ || void 0 === wQ ? void 0 : wQ.top, LQ)), (null === wQ || void 0 === wQ ? void 0 : wQ.bottom) && (qQ = Math.max(null === wQ || void 0 === wQ ? void 0 : wQ.bottom, qQ))
        }
        FQ = QQ.scrollDOM.clientHeight - LQ - qQ
      } else FQ = (QQ.dom.ownerDocument.defaultView || window).innerHeight;
      return {
        marginTop: LQ,
        marginBottom: qQ,
        selfScroll: wQ,
        height: Math.max(QQ.defaultLineHeight, FQ - 5)
      }
    }

    function LF(QQ, FQ) {
      let wQ, LQ = wF(QQ),
        {
          state: qQ
        } = QQ,
        oQ = fQ(qQ.selection, (wQ => wQ.empty ? QQ.moveVertically(wQ, FQ, LQ.height) : JQ(wQ, FQ)));
      if (oQ.eq(qQ.selection)) return !1;
      if (LQ.selfScroll) {
        let FQ = QQ.coordsAtPos(qQ.selection.main.head),
          DQ = QQ.scrollDOM.getBoundingClientRect(),
          vQ = DQ.top + LQ.marginTop,
          mQ = DQ.bottom - LQ.marginBottom;
        FQ && FQ.top > vQ && FQ.bottom < mQ && (wQ = kQ.f.scrollIntoView(oQ.main.head, {
          y: "start",
          yMargin: FQ.top - vQ
        }))
      }
      return QQ.dispatch(VQ(qQ, oQ), {
        effects: wQ
      }), !0
    }
    const qF = QQ => LF(QQ, !1),
      oF = QQ => LF(QQ, !0);

    function DF(QQ, FQ, wQ) {
      let LQ = QQ.lineBlockAt(FQ.head),
        qQ = QQ.moveToLineBoundary(FQ, wQ);
      if (qQ.head == FQ.head && qQ.head != (wQ ? LQ.to : LQ.from) && (qQ = QQ.moveToLineBoundary(FQ, wQ, !1)), !wQ && qQ.head == LQ.from && LQ.length) {
        let wQ = /^\s*/.exec(QQ.state.sliceDoc(LQ.from, Math.min(LQ.from + 100, LQ.to)))[0].length;
        wQ && FQ.head != LQ.from + wQ && (qQ = DQ.j.cursor(LQ.from + wQ))
      }
      return qQ
    }

    function kF(QQ, FQ, wQ) {
      let LQ = !1,
        qQ = fQ(QQ.selection, (FQ => {
          let qQ = (0, vQ.db)(QQ, FQ.head, -1) || (0, vQ.db)(QQ, FQ.head, 1) || FQ.head > 0 && (0, vQ.db)(QQ, FQ.head - 1, 1) || FQ.head < QQ.doc.length && (0, vQ.db)(QQ, FQ.head + 1, -1);
          if (!qQ || !qQ.end) return FQ;
          LQ = !0;
          let oQ = qQ.start.from == FQ.head ? qQ.end.to : qQ.end.from;
          return wQ ? DQ.j.range(FQ.anchor, oQ) : DQ.j.cursor(oQ)
        }));
      return !!LQ && (FQ(VQ(QQ, qQ)), !0)
    }

    function vF(QQ, FQ) {
      let wQ = fQ(QQ.state.selection, (QQ => {
        let wQ = FQ(QQ);
        return DQ.j.range(QQ.anchor, wQ.head, wQ.goalColumn, wQ.bidiLevel || void 0, wQ.assoc)
      }));
      return !wQ.eq(QQ.state.selection) && (QQ.dispatch(VQ(QQ.state, wQ)), !0)
    }

    function mF(QQ, FQ) {
      return vF(QQ, (wQ => QQ.moveByChar(wQ, FQ)))
    }
    const uF = QQ => mF(QQ, !nQ(QQ)),
      HF = QQ => mF(QQ, nQ(QQ));

    function bF(QQ, FQ) {
      return vF(QQ, (wQ => QQ.moveByGroup(wQ, FQ)))
    }

    function YF(QQ, FQ) {
      return vF(QQ, (wQ => QQ.moveVertically(wQ, FQ)))
    }
    const xF = QQ => YF(QQ, !1),
      AF = QQ => YF(QQ, !0);

    function tF(QQ, FQ) {
      return vF(QQ, (wQ => QQ.moveVertically(wQ, FQ, wF(QQ).height)))
    }
    const eF = QQ => tF(QQ, !1),
      MF = QQ => tF(QQ, !0),
      GF = QQ => {
        let {
          state: FQ,
          dispatch: wQ
        } = QQ;
        return wQ(VQ(FQ, {
          anchor: 0
        })), !0
      },
      pF = QQ => {
        let {
          state: FQ,
          dispatch: wQ
        } = QQ;
        return wQ(VQ(FQ, {
          anchor: FQ.doc.length
        })), !0
      },
      cF = QQ => {
        let {
          state: FQ,
          dispatch: wQ
        } = QQ;
        return wQ(VQ(FQ, {
          anchor: FQ.selection.main.anchor,
          head: 0
        })), !0
      },
      CF = QQ => {
        let {
          state: FQ,
          dispatch: wQ
        } = QQ;
        return wQ(VQ(FQ, {
          anchor: FQ.selection.main.anchor,
          head: FQ.doc.length
        })), !0
      };

    function SF(QQ, FQ) {
      let {
        state: wQ
      } = QQ, LQ = wQ.selection, qQ = wQ.selection.PA.slice();
      for (let oQ of wQ.selection.PA) {
        let LQ = wQ.doc.lineAt(oQ.head);
        if (FQ ? LQ.to < QQ.state.doc.length : LQ.from > 0)
          for (let wQ = oQ;;) {
            let oQ = QQ.moveVertically(wQ, FQ);
            if (oQ.head < LQ.from || oQ.head > LQ.to) {
              qQ.some((QQ => QQ.head == oQ.head)) || qQ.push(oQ);
              break
            }
            if (oQ.head == wQ.head) break;
            wQ = oQ
          }
      }
      return qQ.length != LQ.PA.length && (QQ.dispatch(VQ(wQ, DQ.j.create(qQ, qQ.length - 1))), !0)
    }

    function iF(QQ, FQ) {
      if (QQ.state.readOnly) return !1;
      let wQ = "delete.selection",
        {
          state: LQ
        } = QQ,
        qQ = LQ.changeByRange((LQ => {
          let {
            from: qQ,
            to: oQ
          } = LQ;
          if (qQ == oQ) {
            let DQ = FQ(LQ);
            DQ < qQ ? (wQ = "delete.backward", DQ = WF(QQ, DQ, !1)) : DQ > qQ && (wQ = "delete.forward", DQ = WF(QQ, DQ, !0)), qQ = Math.min(qQ, DQ), oQ = Math.max(oQ, DQ)
          } else qQ = WF(QQ, qQ, !1), oQ = WF(QQ, oQ, !0);
          return qQ == oQ ? {
            range: LQ
          } : {
            changes: {
              from: qQ,
              to: oQ
            },
            range: DQ.j.cursor(qQ, qQ < LQ.head ? -1 : 1)
          }
        }));
      return !qQ.changes.empty && (QQ.dispatch(LQ.update(qQ, {
        scrollIntoView: !0,
        userEvent: wQ,
        effects: "delete.selection" == wQ ? kQ.f.announce.of(LQ.phrase("Selection deleted")) : void 0
      })), !0)
    }

    function WF(QQ, FQ, wQ) {
      if (QQ instanceof kQ.f)
        for (let LQ of QQ.state.facet(kQ.f.atomicRanges).map((FQ => FQ(QQ)))) LQ.between(FQ, FQ, ((QQ, LQ) => {
          QQ < FQ && LQ > FQ && (FQ = wQ ? LQ : QQ)
        }));
      return FQ
    }
    const RF = (QQ, FQ, wQ) => iF(QQ, (LQ => {
        let qQ, oQ, kQ = LQ.from,
          {
            state: mQ
          } = QQ,
          uQ = mQ.doc.lineAt(kQ);
        if (wQ && !FQ && kQ > uQ.from && kQ < uQ.from + 200 && !/[^ \t]/.test(qQ = uQ.text.slice(0, kQ - uQ.from))) {
          if ("\t" == qQ[qQ.length - 1]) return kQ - 1;
          let QQ = (0, DQ.X)(qQ, mQ.tabSize) % (0, vQ.P)(mQ) || (0, vQ.P)(mQ);
          for (let FQ = 0; FQ < QQ && " " == qQ[qQ.length - 1 - FQ]; FQ++) kQ--;
          oQ = kQ
        } else oQ = (0, DQ.$)(uQ.text, kQ - uQ.from, FQ, FQ) + uQ.from, oQ == kQ && uQ.number != (FQ ? mQ.doc.lines : 1) ? oQ += FQ ? 1 : -1 : !FQ && /[\ufe00-\ufe0f]/.test(uQ.text.slice(oQ - uQ.from, kQ - uQ.from)) && (oQ = (0, DQ.$)(uQ.text, oQ - uQ.from, !1, !1) + uQ.from);
        return oQ
      })),
      OF = QQ => RF(QQ, !1, !0),
      sF = QQ => RF(QQ, !0, !1),
      rF = (QQ, FQ) => iF(QQ, (wQ => {
        let LQ = wQ.head,
          {
            state: qQ
          } = QQ,
          oQ = qQ.doc.lineAt(LQ),
          kQ = qQ.charCategorizer(LQ);
        for (let QQ = null;;) {
          if (LQ == (FQ ? oQ.to : oQ.from)) {
            LQ == wQ.head && oQ.number != (FQ ? qQ.doc.lines : 1) && (LQ += FQ ? 1 : -1);
            break
          }
          let vQ = (0, DQ.$)(oQ.text, LQ - oQ.from, FQ) + oQ.from,
            mQ = oQ.text.slice(Math.min(LQ, vQ) - oQ.from, Math.max(LQ, vQ) - oQ.from),
            uQ = kQ(mQ);
          if (null != QQ && uQ != QQ) break;
          " " == mQ && LQ == wQ.head || (QQ = uQ), LQ = vQ
        }
        return LQ
      })),
      IF = QQ => rF(QQ, !1);

    function UF(QQ) {
      let FQ = [],
        wQ = -1;
      for (let LQ of QQ.selection.PA) {
        let qQ = QQ.doc.lineAt(LQ.from),
          oQ = QQ.doc.lineAt(LQ.to);
        if (LQ.empty || LQ.to != oQ.from || (oQ = QQ.doc.lineAt(LQ.to - 1)), wQ >= qQ.number) {
          let QQ = FQ[FQ.length - 1];
          QQ.to = oQ.to, QQ.PA.push(LQ)
        } else FQ.push({
          from: qQ.from,
          to: oQ.to,
          PA: [LQ]
        });
        wQ = oQ.number + 1
      }
      return FQ
    }

    function NF(QQ, FQ, wQ) {
      if (QQ.readOnly) return !1;
      let LQ = [],
        qQ = [];
      for (let oQ of UF(QQ)) {
        if (wQ ? oQ.to == QQ.doc.length : 0 == oQ.from) continue;
        let FQ = QQ.doc.lineAt(wQ ? oQ.to + 1 : oQ.from - 1),
          kQ = FQ.length + 1;
        if (wQ) {
          LQ.push({
            from: oQ.to,
            to: FQ.to
          }, {
            from: oQ.from,
            insert: FQ.text + QQ.lineBreak
          });
          for (let FQ of oQ.PA) qQ.push(DQ.j.range(Math.min(QQ.doc.length, FQ.anchor + kQ), Math.min(QQ.doc.length, FQ.head + kQ)))
        } else {
          LQ.push({
            from: FQ.from,
            to: oQ.from
          }, {
            from: oQ.to,
            insert: QQ.lineBreak + FQ.text
          });
          for (let QQ of oQ.PA) qQ.push(DQ.j.range(QQ.anchor - kQ, QQ.head - kQ))
        }
      }
      return !!LQ.length && (FQ(QQ.update({
        changes: LQ,
        scrollIntoView: !0,
        selection: DQ.j.create(qQ, QQ.selection.mainIndex),
        userEvent: "move.line"
      })), !0)
    }

    function TF(QQ, FQ, wQ) {
      if (QQ.readOnly) return !1;
      let LQ = [];
      for (let oQ of UF(QQ)) wQ ? LQ.push({
        from: oQ.from,
        insert: QQ.doc.slice(oQ.from, oQ.to) + QQ.lineBreak
      }) : LQ.push({
        from: oQ.to,
        insert: QQ.lineBreak + QQ.doc.slice(oQ.from, oQ.to)
      });
      let qQ = QQ.changes(LQ);
      return FQ(QQ.update({
        changes: qQ,
        selection: QQ.selection.map(qQ, wQ ? 1 : -1),
        scrollIntoView: !0,
        userEvent: "input.copyline"
      })), !0
    }
    const KF = zF(!1);

    function zF(QQ) {
      return FQ => {
        let {
          state: wQ,
          dispatch: LQ
        } = FQ;
        if (wQ.readOnly) return !1;
        let qQ = wQ.changeByRange((FQ => {
          let {
            from: LQ,
            to: qQ
          } = FQ, oQ = wQ.doc.lineAt(LQ), kQ = !QQ && LQ == qQ && function(QQ, FQ) {
            if (/\(\)|\[\]|\{\}/.test(QQ.sliceDoc(FQ - 1, FQ + 1))) return {
              from: FQ,
              to: FQ
            };
            let wQ, LQ = (0, vQ.ob)(QQ).resolveInner(FQ),
              qQ = LQ.childBefore(FQ),
              oQ = LQ.childAfter(FQ);
            return qQ && oQ && qQ.to <= FQ && oQ.from >= FQ && (wQ = qQ.type.prop(mQ.g.closedBy)) && wQ.indexOf(oQ.name) > -1 && QQ.doc.lineAt(qQ.to).from == QQ.doc.lineAt(oQ.from).from && !/\S/.test(QQ.sliceDoc(qQ.to, oQ.from)) ? {
              from: qQ.to,
              to: oQ.from
            } : null
          }(wQ, LQ);
          QQ && (LQ = qQ = (qQ <= oQ.to ? oQ : wQ.doc.lineAt(qQ)).to);
          let uQ = new vQ.e(wQ, {
              simulateBreak: LQ,
              simulateDoubleBreak: !!kQ
            }),
            HQ = (0, vQ.S)(uQ, LQ);
          for (null == HQ && (HQ = (0, DQ.X)(/^\s*/.exec(wQ.doc.lineAt(LQ).text)[0], wQ.tabSize)); qQ < oQ.to && /\s/.test(oQ.text[qQ - oQ.from]);) qQ++;
          kQ ? ({
            from: LQ,
            to: qQ
          } = kQ) : LQ > oQ.from && LQ < oQ.from + 100 && !/\S/.test(oQ.text.slice(0, LQ)) && (LQ = oQ.from);
          let bQ = ["", (0, vQ.Z)(wQ, HQ)];
          return kQ && bQ.push((0, vQ.Z)(wQ, uQ.lineIndent(oQ.from, -1))), {
            changes: {
              from: LQ,
              to: qQ,
              insert: DQ.P.of(bQ)
            },
            range: DQ.j.cursor(LQ + 1 + bQ[1].length)
          }
        }));
        return LQ(wQ.update(qQ, {
          scrollIntoView: !0,
          userEvent: "input"
        })), !0
      }
    }

    function lF(QQ, FQ) {
      let wQ = -1;
      return QQ.changeByRange((LQ => {
        let qQ = [];
        for (let DQ = LQ.from; DQ <= LQ.to;) {
          let oQ = QQ.doc.lineAt(DQ);
          oQ.number > wQ && (LQ.empty || LQ.to > oQ.from) && (FQ(oQ, qQ, LQ), wQ = oQ.number), DQ = oQ.to + 1
        }
        let oQ = QQ.changes(qQ);
        return {
          changes: qQ,
          range: DQ.j.range(oQ.mapPos(LQ.anchor, 1), oQ.mapPos(LQ.head, 1))
        }
      }))
    }
    const jF = QQ => {
        let {
          state: FQ,
          dispatch: wQ
        } = QQ;
        return !FQ.readOnly && (wQ(FQ.update(lF(FQ, ((QQ, wQ) => {
          wQ.push({
            from: QQ.from,
            insert: FQ.facet(vQ.$)
          })
        })), {
          userEvent: "input.indent"
        })), !0)
      },
      aF = QQ => {
        let {
          state: FQ,
          dispatch: wQ
        } = QQ;
        return !FQ.readOnly && (wQ(FQ.update(lF(FQ, ((QQ, wQ) => {
          let LQ = /^\s*/.exec(QQ.text)[0];
          if (!LQ) return;
          let qQ = (0, DQ.X)(LQ, FQ.tabSize),
            oQ = 0,
            kQ = (0, vQ.Z)(FQ, Math.max(0, qQ - (0, vQ.P)(FQ)));
          for (; oQ < LQ.length && oQ < kQ.length && LQ.charCodeAt(oQ) == kQ.charCodeAt(oQ);) oQ++;
          wQ.push({
            from: QQ.from + oQ,
            to: QQ.from + LQ.length,
            insert: kQ.slice(oQ)
          })
        })), {
          userEvent: "delete.dedent"
        })), !0)
      },
      XF = [{
        key: "Alt-ArrowLeft",
        mac: "Ctrl-ArrowLeft",
        run: QQ => hQ(QQ, (FQ => BQ(QQ.state, FQ, !nQ(QQ)))),
        shift: QQ => vF(QQ, (FQ => BQ(QQ.state, FQ, !nQ(QQ))))
      }, {
        key: "Alt-ArrowRight",
        mac: "Ctrl-ArrowRight",
        run: QQ => hQ(QQ, (FQ => BQ(QQ.state, FQ, nQ(QQ)))),
        shift: QQ => vF(QQ, (FQ => BQ(QQ.state, FQ, nQ(QQ))))
      }, {
        key: "Alt-ArrowUp",
        run: QQ => {
          let {
            state: FQ,
            dispatch: wQ
          } = QQ;
          return NF(FQ, wQ, !1)
        }
      }, {
        key: "Shift-Alt-ArrowUp",
        run: QQ => {
          let {
            state: FQ,
            dispatch: wQ
          } = QQ;
          return TF(FQ, wQ, !1)
        }
      }, {
        key: "Alt-ArrowDown",
        run: QQ => {
          let {
            state: FQ,
            dispatch: wQ
          } = QQ;
          return NF(FQ, wQ, !0)
        }
      }, {
        key: "Shift-Alt-ArrowDown",
        run: QQ => {
          let {
            state: FQ,
            dispatch: wQ
          } = QQ;
          return TF(FQ, wQ, !0)
        }
      }, {
        key: "Mod-Alt-ArrowUp",
        run: QQ => SF(QQ, !1)
      }, {
        key: "Mod-Alt-ArrowDown",
        run: QQ => SF(QQ, !0)
      }, {
        key: "Escape",
        run: QQ => {
          let {
            state: FQ,
            dispatch: wQ
          } = QQ, LQ = FQ.selection, qQ = null;
          return LQ.PA.length > 1 ? qQ = DQ.j.create([LQ.main]) : LQ.main.empty || (qQ = DQ.j.create([DQ.j.cursor(LQ.main.head)])), !!qQ && (wQ(VQ(FQ, qQ)), !0)
        }
      }, {
        key: "Mod-Enter",
        run: zF(!0)
      }, {
        key: "Alt-l",
        mac: "Ctrl-l",
        run: QQ => {
          let {
            state: FQ,
            dispatch: wQ
          } = QQ, LQ = UF(FQ).map((QQ => {
            let {
              from: wQ,
              to: LQ
            } = QQ;
            return DQ.j.range(wQ, Math.min(LQ + 1, FQ.doc.length))
          }));
          return wQ(FQ.update({
            selection: DQ.j.create(LQ),
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Mod-i",
        run: QQ => {
          let {
            state: FQ,
            dispatch: wQ
          } = QQ, LQ = fQ(FQ.selection, (QQ => {
            let wQ = (0, vQ.ob)(FQ),
              LQ = wQ.resolveStack(QQ.from, 1);
            if (QQ.empty) {
              let FQ = wQ.resolveStack(QQ.from, -1);
              FQ.node.from >= LQ.node.from && FQ.node.to <= LQ.node.to && (LQ = FQ)
            }
            for (let FQ = LQ; FQ; FQ = FQ.next) {
              let {
                node: wQ
              } = FQ;
              if ((wQ.from < QQ.from && wQ.to >= QQ.to || wQ.to > QQ.to && wQ.from <= QQ.from) && FQ.next) return DQ.j.range(wQ.to, wQ.from)
            }
            return QQ
          }));
          return !LQ.eq(FQ.selection) && (wQ(VQ(FQ, LQ)), !0)
        },
        preventDefault: !0
      }, {
        key: "Mod-[",
        run: aF
      }, {
        key: "Mod-]",
        run: jF
      }, {
        key: "Mod-Alt-\\",
        run: QQ => {
          let {
            state: FQ,
            dispatch: wQ
          } = QQ;
          if (FQ.readOnly) return !1;
          let LQ = Object.create(null),
            qQ = new vQ.e(FQ, {
              overrideIndentation: QQ => {
                let FQ = LQ[QQ];
                return null == FQ ? -1 : FQ
              }
            }),
            oQ = lF(FQ, ((QQ, wQ, oQ) => {
              let DQ = (0, vQ.S)(qQ, QQ.from);
              if (null == DQ) return;
              /\S/.test(QQ.text) || (DQ = 0);
              let kQ = /^\s*/.exec(QQ.text)[0],
                mQ = (0, vQ.Z)(FQ, DQ);
              (kQ != mQ || oQ.from < QQ.from + kQ.length) && (LQ[QQ.from] = DQ, wQ.push({
                from: QQ.from,
                to: QQ.from + kQ.length,
                insert: mQ
              }))
            }));
          return oQ.changes.empty || wQ(FQ.update(oQ, {
            userEvent: "indent"
          })), !0
        }
      }, {
        key: "Shift-Mod-k",
        run: QQ => {
          if (QQ.state.readOnly) return !1;
          let {
            state: FQ
          } = QQ, wQ = FQ.changes(UF(FQ).map((QQ => {
            let {
              from: wQ,
              to: LQ
            } = QQ;
            return wQ > 0 ? wQ-- : LQ < FQ.doc.length && LQ++, {
              from: wQ,
              to: LQ
            }
          }))), LQ = fQ(FQ.selection, (FQ => {
            let wQ;
            if (QQ.lineWrapping) {
              let LQ = QQ.lineBlockAt(FQ.head),
                qQ = QQ.coordsAtPos(FQ.head, FQ.assoc || 1);
              qQ && (wQ = LQ.bottom + QQ.documentTop - qQ.bottom + QQ.defaultLineHeight / 2)
            }
            return QQ.moveVertically(FQ, !0, wQ)
          })).map(wQ);
          return QQ.dispatch({
            changes: wQ,
            selection: LQ,
            scrollIntoView: !0,
            userEvent: "delete.line"
          }), !0
        }
      }, {
        key: "Shift-Mod-\\",
        run: QQ => {
          let {
            state: FQ,
            dispatch: wQ
          } = QQ;
          return kF(FQ, wQ, !1)
        }
      }, {
        key: "Mod-/",
        run: QQ => {
          let {
            state: FQ
          } = QQ, wQ = FQ.doc.lineAt(FQ.selection.main.from), LQ = xQ(QQ.state, wQ.from);
          return LQ.line ? HQ(QQ) : !!LQ.block && YQ(QQ)
        }
      }, {
        key: "Alt-A",
        run: bQ
      }, {
        key: "Ctrl-m",
        mac: "Shift-Alt-m",
        run: QQ => (QQ.setTabFocusMode(), !0)
      }].concat([{
        key: "ArrowLeft",
        run: gQ,
        shift: uF,
        preventDefault: !0
      }, {
        key: "Mod-ArrowLeft",
        mac: "Alt-ArrowLeft",
        run: QQ => ZQ(QQ, !nQ(QQ)),
        shift: QQ => bF(QQ, !nQ(QQ)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowLeft",
        run: QQ => hQ(QQ, (FQ => DF(QQ, FQ, !nQ(QQ)))),
        shift: QQ => vF(QQ, (FQ => DF(QQ, FQ, !nQ(QQ)))),
        preventDefault: !0
      }, {
        key: "ArrowRight",
        run: PQ,
        shift: HF,
        preventDefault: !0
      }, {
        key: "Mod-ArrowRight",
        mac: "Alt-ArrowRight",
        run: QQ => ZQ(QQ, nQ(QQ)),
        shift: QQ => bF(QQ, nQ(QQ)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowRight",
        run: QQ => hQ(QQ, (FQ => DF(QQ, FQ, nQ(QQ)))),
        shift: QQ => vF(QQ, (FQ => DF(QQ, FQ, nQ(QQ)))),
        preventDefault: !0
      }, {
        key: "ArrowUp",
        run: QF,
        shift: xF,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowUp",
        run: GF,
        shift: cF
      }, {
        mac: "Ctrl-ArrowUp",
        run: qF,
        shift: eF
      }, {
        key: "ArrowDown",
        run: FF,
        shift: AF,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowDown",
        run: pF,
        shift: CF
      }, {
        mac: "Ctrl-ArrowDown",
        run: oF,
        shift: MF
      }, {
        key: "PageUp",
        run: qF,
        shift: eF
      }, {
        key: "PageDown",
        run: oF,
        shift: MF
      }, {
        key: "Home",
        run: QQ => hQ(QQ, (FQ => DF(QQ, FQ, !1))),
        shift: QQ => vF(QQ, (FQ => DF(QQ, FQ, !1))),
        preventDefault: !0
      }, {
        key: "Mod-Home",
        run: GF,
        shift: cF
      }, {
        key: "End",
        run: QQ => hQ(QQ, (FQ => DF(QQ, FQ, !0))),
        shift: QQ => vF(QQ, (FQ => DF(QQ, FQ, !0))),
        preventDefault: !0
      }, {
        key: "Mod-End",
        run: pF,
        shift: CF
      }, {
        key: "Enter",
        run: KF,
        shift: KF
      }, {
        key: "Mod-a",
        run: QQ => {
          let {
            state: FQ,
            dispatch: wQ
          } = QQ;
          return wQ(FQ.update({
            selection: {
              anchor: 0,
              head: FQ.doc.length
            },
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Backspace",
        run: OF,
        shift: OF,
        preventDefault: !0
      }, {
        key: "Delete",
        run: sF,
        preventDefault: !0
      }, {
        key: "Mod-Backspace",
        mac: "Alt-Backspace",
        run: IF,
        preventDefault: !0
      }, {
        key: "Mod-Delete",
        mac: "Alt-Delete",
        run: QQ => rF(QQ, !0),
        preventDefault: !0
      }, {
        mac: "Mod-Backspace",
        run: QQ => iF(QQ, (FQ => {
          let wQ = QQ.moveToLineBoundary(FQ, !1).head;
          return FQ.head > wQ ? wQ : Math.max(0, FQ.head - 1)
        })),
        preventDefault: !0
      }, {
        mac: "Mod-Delete",
        run: QQ => iF(QQ, (FQ => {
          let wQ = QQ.moveToLineBoundary(FQ, !0).head;
          return FQ.head < wQ ? wQ : Math.min(QQ.state.doc.length, FQ.head + 1)
        })),
        preventDefault: !0
      }].concat([{
        key: "Ctrl-b",
        run: gQ,
        shift: uF,
        preventDefault: !0
      }, {
        key: "Ctrl-f",
        run: PQ,
        shift: HF
      }, {
        key: "Ctrl-p",
        run: QF,
        shift: xF
      }, {
        key: "Ctrl-n",
        run: FF,
        shift: AF
      }, {
        key: "Ctrl-a",
        run: QQ => hQ(QQ, (FQ => DQ.j.cursor(QQ.lineBlockAt(FQ.head).from, 1))),
        shift: QQ => vF(QQ, (FQ => DQ.j.cursor(QQ.lineBlockAt(FQ.head).from)))
      }, {
        key: "Ctrl-e",
        run: QQ => hQ(QQ, (FQ => DQ.j.cursor(QQ.lineBlockAt(FQ.head).to, -1))),
        shift: QQ => vF(QQ, (FQ => DQ.j.cursor(QQ.lineBlockAt(FQ.head).to)))
      }, {
        key: "Ctrl-d",
        run: sF
      }, {
        key: "Ctrl-h",
        run: OF
      }, {
        key: "Ctrl-k",
        run: QQ => iF(QQ, (FQ => {
          let wQ = QQ.lineBlockAt(FQ.head).to;
          return FQ.head < wQ ? wQ : Math.min(QQ.state.doc.length, FQ.head + 1)
        }))
      }, {
        key: "Ctrl-Alt-h",
        run: IF
      }, {
        key: "Ctrl-o",
        run: QQ => {
          let {
            state: FQ,
            dispatch: wQ
          } = QQ;
          if (FQ.readOnly) return !1;
          let LQ = FQ.changeByRange((QQ => ({
            changes: {
              from: QQ.from,
              to: QQ.to,
              insert: DQ.P.of(["", ""])
            },
            range: DQ.j.cursor(QQ.from)
          })));
          return wQ(FQ.update(LQ, {
            scrollIntoView: !0,
            userEvent: "input"
          })), !0
        }
      }, {
        key: "Ctrl-t",
        run: QQ => {
          let {
            state: FQ,
            dispatch: wQ
          } = QQ;
          if (FQ.readOnly) return !1;
          let LQ = FQ.changeByRange((QQ => {
            if (!QQ.empty || 0 == QQ.from || QQ.from == FQ.doc.length) return {
              range: QQ
            };
            let wQ = QQ.from,
              LQ = FQ.doc.lineAt(wQ),
              qQ = wQ == LQ.from ? wQ - 1 : (0, DQ.$)(LQ.text, wQ - LQ.from, !1) + LQ.from,
              oQ = wQ == LQ.to ? wQ + 1 : (0, DQ.$)(LQ.text, wQ - LQ.from, !0) + LQ.from;
            return {
              changes: {
                from: qQ,
                to: oQ,
                insert: FQ.doc.slice(wQ, oQ).append(FQ.doc.slice(qQ, wQ))
              },
              range: DQ.j.cursor(oQ)
            }
          }));
          return !LQ.changes.empty && (wQ(FQ.update(LQ, {
            scrollIntoView: !0,
            userEvent: "move.character"
          })), !0)
        }
      }, {
        key: "Ctrl-v",
        run: oF
      }].map((QQ => ({
        mac: QQ.key,
        run: QQ.run,
        shift: QQ.shift
      }))))),
      fF = {
        key: "Tab",
        run: jF,
        shift: aF
      };
    var VF = wQ(40743),
      hF = wQ(40688),
      JF = wQ(40751),
      EF = function(QQ) {
        void 0 === QQ && (QQ = {});
        var {
          crosshairCursor: FQ = !1
        } = QQ, wQ = [];
        !1 !== QQ.closeBracketsKeymap && (wQ = wQ.concat(hF.g)), !1 !== QQ.defaultKeymap && (wQ = wQ.concat(XF)), !1 !== QQ.searchKeymap && (wQ = wQ.concat(VF.k)), !1 !== QQ.historyKeymap && (wQ = wQ.concat(XQ)), !1 !== QQ.foldKeymap && (wQ = wQ.concat(vQ.I)), !1 !== QQ.completionKeymap && (wQ = wQ.concat(hF.o)), !1 !== QQ.lintKeymap && (wQ = wQ.concat(JF.c));
        var LQ = [];
        return !1 !== QQ.lineNumbers && LQ.push((0, kQ.S)()), !1 !== QQ.highlightActiveLineGutter && LQ.push((0, kQ.F)()), !1 !== QQ.highlightSpecialChars && LQ.push((0, kQ.L)()), !1 !== QQ.history && LQ.push(function() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return [CQ, cQ.of(QQ), kQ.f.domEventHandlers({
            beforeinput(QQ, FQ) {
              let wQ = "historyUndo" == QQ.inputType ? iQ : "historyRedo" == QQ.inputType ? WQ : null;
              return !!wQ && (QQ.preventDefault(), wQ(FQ))
            }
          })]
        }()), !1 !== QQ.foldGutter && LQ.push((0, vQ.B)()), !1 !== QQ.drawSelection && LQ.push((0, kQ.r)()), !1 !== QQ.dropCursor && LQ.push((0, kQ.v)()), !1 !== QQ.allowMultipleSelections && LQ.push(DQ.n.allowMultipleSelections.of(!0)), !1 !== QQ.indentOnInput && LQ.push((0, vQ.X)()), !1 !== QQ.syntaxHighlighting && LQ.push((0, vQ.ib)(vQ.q, {
          fallback: !0
        })), !1 !== QQ.bracketMatching && LQ.push((0, vQ.m)()), !1 !== QQ.closeBrackets && LQ.push((0, hF.i)()), !1 !== QQ.autocompletion && LQ.push((0, hF.c)()), !1 !== QQ.rectangularSelection && LQ.push((0, kQ.$)()), !1 !== FQ && LQ.push((0, kQ.o)()), !1 !== QQ.highlightActiveLine && LQ.push((0, kQ.H)()), !1 !== QQ.highlightSelectionMatches && LQ.push((0, VF.h)()), QQ.tabSize && "number" === typeof QQ.tabSize && LQ.push(vQ.$.of(" ".repeat(QQ.tabSize))), LQ.concat([kQ.O.of(wQ.flat())]).filter(Boolean)
      },
      nF = wQ(40727);
    const gF = "#e5c07b",
      PF = "#e06c75",
      ZF = "#56b6c2",
      yF = "#ffffff",
      BF = "#abb2bf",
      dF = "#7d8799",
      Qw = "#61afef",
      Fw = "#98c379",
      ww = "#d19a66",
      Lw = "#c678dd",
      qw = "#21252b",
      ow = "#2c313a",
      Dw = "#282c34",
      kw = "#353a42",
      vw = "#3E4451",
      mw = "#528bff",
      uw = kQ.f.theme({
        "&": {
          color: BF,
          backgroundColor: Dw
        },
        ".cm-content": {
          caretColor: mw
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: mw
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: vw
        },
        ".cm-panels": {
          backgroundColor: qw,
          color: BF
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
          backgroundColor: Dw,
          color: dF,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: ow
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#ddd"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: kw
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: kw,
          borderBottomColor: kw
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: ow,
            color: BF
          }
        }
      }, {
        dark: !0
      }),
      Hw = vQ.c.define([{
        tag: nF.q.keyword,
        color: Lw
      }, {
        tag: [nF.q.name, nF.q.deleted, nF.q.character, nF.q.propertyName, nF.q.macroName],
        color: PF
      }, {
        tag: [nF.q.function(nF.q.variableName), nF.q.labelName],
        color: Qw
      }, {
        tag: [nF.q.color, nF.q.constant(nF.q.name), nF.q.standard(nF.q.name)],
        color: ww
      }, {
        tag: [nF.q.definition(nF.q.name), nF.q.separator],
        color: BF
      }, {
        tag: [nF.q.typeName, nF.q.className, nF.q.number, nF.q.changed, nF.q.annotation, nF.q.modifier, nF.q.self, nF.q.namespace],
        color: gF
      }, {
        tag: [nF.q.operator, nF.q.operatorKeyword, nF.q.url, nF.q.escape, nF.q.regexp, nF.q.link, nF.q.special(nF.q.string)],
        color: ZF
      }, {
        tag: [nF.q.meta, nF.q.comment],
        color: dF
      }, {
        tag: nF.q.strong,
        fontWeight: "bold"
      }, {
        tag: nF.q.emphasis,
        fontStyle: "italic"
      }, {
        tag: nF.q.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: nF.q.link,
        color: dF,
        textDecoration: "underline"
      }, {
        tag: nF.q.heading,
        fontWeight: "bold",
        color: PF
      }, {
        tag: [nF.q.atom, nF.q.bool, nF.q.special(nF.q.variableName)],
        color: ww
      }, {
        tag: [nF.q.processingInstruction, nF.q.string, nF.q.inserted],
        color: Fw
      }, {
        tag: nF.q.invalid,
        color: yF
      }]),
      bw = [uw, (0, vQ.ib)(Hw)];
    var Yw = kQ.f.theme({
      "&": {
        backgroundColor: "#fff"
      }
    }, {
      dark: !1
    });
    class xw {
      constructor(QQ, FQ) {
        this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = FQ, this.timeoutMS = FQ, this.callbacks.push(QQ)
      }
      fH() {
        if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
          this.isTimeExhausted = !0;
          var QQ = this.callbacks.slice();
          this.callbacks.length = 0, QQ.forEach((QQ => {
            try {
              QQ()
            } catch (FQ) {
              console.error("TimeoutLatch callback error:", FQ)
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
    class Aw {
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
            QQ.fH(), QQ.isDone && this.remove(QQ)
          }))
        }), 1))
      }
      stop() {
        null !== this.interval && (clearInterval(this.interval), this.interval = null)
      }
    }
    var tw = null,
      ew = DQ.d.define(),
      Mw = [];

    function Gw(QQ) {
      var {
        value: FQ,
        selection: wQ,
        onChange: LQ,
        onStatistics: qQ,
        onCreateEditor: vQ,
        onUpdate: mQ,
        extensions: uQ = Mw,
        autoFocus: HQ,
        theme: bQ = "light",
        height: YQ = null,
        minHeight: xQ = null,
        maxHeight: AQ = null,
        width: tQ = null,
        minWidth: eQ = null,
        maxWidth: MQ = null,
        placeholder: GQ = "",
        editable: pQ = !0,
        readOnly: cQ = !1,
        indentWithTab: CQ = !0,
        basicSetup: SQ = !0,
        root: iQ,
        initialState: WQ
      } = QQ, [RQ, OQ] = (0, oQ.useState)(), [sQ, rQ] = (0, oQ.useState)(), [IQ, UQ] = (0, oQ.useState)(), NQ = (0, oQ.useState)((() => ({
        current: null
      })))[0], TQ = (0, oQ.useState)((() => ({
        current: null
      })))[0], KQ = kQ.f.theme({
        "&": {
          height: YQ,
          minHeight: xQ,
          maxHeight: AQ,
          width: tQ,
          minWidth: eQ,
          maxWidth: MQ
        },
        "& .cm-scroller": {
          height: "100% !important"
        }
      }), zQ = kQ.f.updateListener.of((QQ => {
        if (QQ.docChanged && "function" === typeof LQ && !QQ.transactions.some((QQ => QQ.annotation(ew)))) {
          NQ.current ? NQ.current.reset() : (NQ.current = new xw((() => {
            if (TQ.current) {
              var QQ = TQ.current;
              TQ.current = null, QQ()
            }
            NQ.current = null
          }), 200), ("undefined" === typeof window ? new Aw : (tw || (tw = new Aw), tw)).add(NQ.current));
          var FQ = QQ.state.doc.toString();
          LQ(FQ, QQ)
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
          PA: QQ.state.selection.PA,
          selectionCode: QQ.state.sliceDoc(QQ.state.selection.main.from, QQ.state.selection.main.to),
          selections: QQ.state.selection.PA.map((FQ => QQ.state.sliceDoc(FQ.from, FQ.to))),
          selectedText: QQ.state.selection.PA.some((QQ => !QQ.empty))
        }))(QQ))
      })), lQ = function(QQ) {
        void 0 === QQ && (QQ = {});
        var {
          indentWithTab: FQ = !0,
          editable: wQ = !0,
          readOnly: LQ = !1,
          theme: qQ = "light",
          placeholder: oQ = "",
          basicSetup: vQ = !0
        } = QQ, mQ = [];
        switch (FQ && mQ.unshift(kQ.O.of([fF])), vQ && ("boolean" === typeof vQ ? mQ.unshift(EF()) : mQ.unshift(EF(vQ))), oQ && mQ.unshift((0, kQ.Z)(oQ)), qQ) {
          case "light":
            mQ.push(Yw);
            break;
          case "dark":
            mQ.push(bw);
            break;
          case "none":
            break;
          default:
            mQ.push(qQ)
        }
        return !1 === wQ && mQ.push(kQ.f.editable.of(!1)), LQ && mQ.push(DQ.n.readOnly.of(!0)), [...mQ]
      }({
        theme: bQ,
        editable: pQ,
        readOnly: cQ,
        placeholder: GQ,
        indentWithTab: CQ,
        basicSetup: SQ
      }), jQ = [zQ, KQ, ...lQ];
      return mQ && "function" === typeof mQ && jQ.push(kQ.f.updateListener.of(mQ)), jQ = jQ.concat(uQ), (0, oQ.useLayoutEffect)((() => {
        if (RQ && !IQ) {
          var QQ = {
              doc: FQ,
              selection: wQ,
              extensions: jQ
            },
            LQ = WQ ? DQ.n.fromJSON(WQ.json, QQ, WQ.fields) : DQ.n.create(QQ);
          if (UQ(LQ), !sQ) {
            var qQ = new kQ.f({
              state: LQ,
              parent: RQ,
              root: iQ
            });
            rQ(qQ), vQ && vQ(qQ, LQ)
          }
        }
        return () => {
          sQ && (UQ(void 0), rQ(void 0))
        }
      }), [RQ, IQ]), (0, oQ.useEffect)((() => {
        QQ.container && OQ(QQ.container)
      }), [QQ.container]), (0, oQ.useEffect)((() => () => {
        sQ && (sQ.destroy(), rQ(void 0)), NQ.current && (NQ.current.cancel(), NQ.current = null)
      }), [sQ]), (0, oQ.useEffect)((() => {
        HQ && sQ && sQ.focus()
      }), [HQ, sQ]), (0, oQ.useEffect)((() => {
        sQ && sQ.dispatch({
          effects: DQ.H.reconfigure.of(jQ)
        })
      }), [bQ, uQ, YQ, xQ, AQ, tQ, eQ, MQ, GQ, pQ, cQ, CQ, SQ, LQ, mQ]), (0, oQ.useEffect)((() => {
        if (void 0 !== FQ) {
          var QQ = sQ ? sQ.state.doc.toString() : "";
          if (sQ && FQ !== QQ) {
            var wQ = () => {
              sQ && FQ !== sQ.state.doc.toString() && sQ.dispatch({
                changes: {
                  from: 0,
                  to: sQ.state.doc.toString().length,
                  insert: FQ || ""
                },
                annotations: [ew.of(!0)]
              })
            };
            NQ.current && !NQ.current.isDone ? TQ.current = wQ : wQ()
          }
        }
      }), [FQ, sQ]), {
        state: IQ,
        setState: UQ,
        view: sQ,
        setView: rQ,
        container: RQ,
        setContainer: OQ
      }
    }
    var pw = wQ(1107),
      Cw = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"],
      Sw = (0, oQ.forwardRef)(((QQ, FQ) => {
        var {
          className: wQ,
          value: DQ = "",
          selection: kQ,
          extensions: vQ = [],
          onChange: mQ,
          onStatistics: uQ,
          onCreateEditor: HQ,
          onUpdate: bQ,
          autoFocus: YQ,
          theme: xQ = "light",
          height: AQ,
          minHeight: tQ,
          maxHeight: eQ,
          width: MQ,
          minWidth: GQ,
          maxWidth: pQ,
          basicSetup: cQ,
          placeholder: CQ,
          indentWithTab: SQ,
          editable: iQ,
          readOnly: WQ,
          root: RQ,
          initialState: OQ
        } = QQ, sQ = (0, qQ.d)(QQ, Cw), rQ = (0, oQ.useRef)(null), {
          state: IQ,
          view: UQ,
          container: NQ,
          setContainer: TQ
        } = Gw({
          root: RQ,
          value: DQ,
          autoFocus: YQ,
          theme: xQ,
          height: AQ,
          minHeight: tQ,
          maxHeight: eQ,
          width: MQ,
          minWidth: GQ,
          maxWidth: pQ,
          basicSetup: cQ,
          placeholder: CQ,
          indentWithTab: SQ,
          editable: iQ,
          readOnly: WQ,
          selection: kQ,
          onChange: mQ,
          onStatistics: uQ,
          onCreateEditor: HQ,
          onUpdate: bQ,
          extensions: vQ,
          initialState: OQ
        });
        (0, oQ.useImperativeHandle)(FQ, (() => ({
          editor: rQ.current,
          state: IQ,
          view: UQ
        })), [rQ, NQ, IQ, UQ]);
        var KQ = (0, oQ.useCallback)((QQ => {
          rQ.current = QQ, TQ(QQ)
        }), [TQ]);
        if ("string" !== typeof DQ) throw new Error("value must be typeof string but got " + typeof DQ);
        var zQ = "string" === typeof xQ ? "cm-theme-" + xQ : "cm-theme";
        return (0, pw.jsx)("div", (0, LQ.b)({
          ref: KQ,
          className: zQ + (wQ ? " " + wQ : "")
        }, sQ))
      }));
    Sw.displayName = "CodeMirror";
    const iw = Sw
  },
  40715: (QQ, FQ, wQ) => {
    function LQ() {
      var QQ = arguments[0];
      "string" == typeof QQ && (QQ = document.createElement(QQ));
      var FQ = 1,
        wQ = arguments[1];
      if (wQ && "object" == typeof wQ && null == wQ.nodeType && !Array.isArray(wQ)) {
        for (var LQ in wQ)
          if (Object.prototype.hasOwnProperty.call(wQ, LQ)) {
            var oQ = wQ[LQ];
            "string" == typeof oQ ? QQ.setAttribute(LQ, oQ) : null != oQ && (QQ[LQ] = oQ)
          } FQ++
      }
      for (; FQ < arguments.length; FQ++) qQ(QQ, arguments[FQ]);
      return QQ
    }

    function qQ(QQ, FQ) {
      if ("string" == typeof FQ) QQ.appendChild(document.createTextNode(FQ));
      else if (null == FQ);
      else if (null != FQ.nodeType) QQ.appendChild(FQ);
      else {
        if (!Array.isArray(FQ)) throw new RangeError("Unsupported child node: " + FQ);
        for (var wQ = 0; wQ < FQ.length; wQ++) qQ(QQ, FQ[wQ])
      }
    }
    wQ.d(FQ, {
      b: () => LQ
    })
  },
  40709: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => DQ
    });
    const LQ = "undefined" == typeof Symbol ? "__\u037c" : Symbol.for("\u037c"),
      qQ = "undefined" == typeof Symbol ? "__styleSet" + Math.floor(1e8 * Math.random()) : Symbol("styleSet"),
      oQ = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : {};
    class DQ {
      constructor(QQ, FQ) {
        this.rules = [];
        let {
          finish: wQ
        } = FQ || {};

        function LQ(QQ) {
          return /^@/.test(QQ) ? [QQ] : QQ.split(/,\s*/)
        }

        function qQ(QQ, FQ, oQ, DQ) {
          let kQ = [],
            vQ = /^@(\w+)\b/.exec(QQ[0]),
            mQ = vQ && "keyframes" == vQ[1];
          if (vQ && null == FQ) return oQ.push(QQ[0] + ";");
          for (let wQ in FQ) {
            let DQ = FQ[wQ];
            if (/&/.test(wQ)) qQ(wQ.split(/,\s*/).map((FQ => QQ.map((QQ => FQ.replace(/&/, QQ))))).reduce(((QQ, FQ) => QQ.concat(FQ))), DQ, oQ);
            else if (DQ && "object" == typeof DQ) {
              if (!vQ) throw new RangeError("The value of a property (" + wQ + ") should be a primitive value.");
              qQ(LQ(wQ), DQ, kQ, mQ)
            } else null != DQ && kQ.push(wQ.replace(/_.*/, "").replace(/[A-Z]/g, (QQ => "-" + QQ.toLowerCase())) + ": " + DQ + ";")
          }(kQ.length || mQ) && oQ.push((!wQ || vQ || DQ ? QQ : QQ.map(wQ)).join(", ") + " {" + kQ.join(" ") + "}")
        }
        for (let oQ in QQ) qQ(LQ(oQ), QQ[oQ], this.rules)
      }
      getRules() {
        return this.rules.join("\n")
      }
      static newName() {
        let QQ = oQ[LQ] || 1;
        return oQ[LQ] = QQ + 1, "\u037c" + QQ.toString(36)
      }
      static mount(QQ, FQ, wQ) {
        let LQ = QQ[qQ],
          oQ = wQ && wQ.nonce;
        LQ ? oQ && LQ.setNonce(oQ) : LQ = new vQ(QQ, oQ), LQ.mount(Array.isArray(FQ) ? FQ : [FQ], QQ)
      }
    }
    let kQ = new Map;
    class vQ {
      constructor(QQ, FQ) {
        let wQ = QQ.ownerDocument || QQ,
          LQ = wQ.defaultView;
        if (!QQ.head && QQ.adoptedStyleSheets && LQ.CSSStyleSheet) {
          let FQ = kQ.get(wQ);
          if (FQ) return QQ[qQ] = FQ;
          this.sheet = new LQ.CSSStyleSheet, kQ.set(wQ, this)
        } else this.styleTag = wQ.createElement("style"), FQ && this.styleTag.setAttribute("nonce", FQ);
        this.modules = [], QQ[qQ] = this
      }
      mount(QQ, FQ) {
        let wQ = this.sheet,
          LQ = 0,
          qQ = 0;
        for (let oQ = 0; oQ < QQ.length; oQ++) {
          let FQ = QQ[oQ],
            DQ = this.modules.indexOf(FQ);
          if (DQ < qQ && DQ > -1 && (this.modules.splice(DQ, 1), qQ--, DQ = -1), -1 == DQ) {
            if (this.modules.splice(qQ++, 0, FQ), wQ)
              for (let QQ = 0; QQ < FQ.rules.length; QQ++) wQ.insertRule(FQ.rules[QQ], LQ++)
          } else {
            for (; qQ < DQ;) LQ += this.modules[qQ++].rules.length;
            LQ += FQ.rules.length, qQ++
          }
        }
        if (wQ) FQ.adoptedStyleSheets.indexOf(this.sheet) < 0 && (FQ.adoptedStyleSheets = [this.sheet, ...FQ.adoptedStyleSheets]);
        else {
          let QQ = "";
          for (let FQ = 0; FQ < this.modules.length; FQ++) QQ += this.modules[FQ].getRules() + "\n";
          this.styleTag.textContent = QQ;
          let wQ = FQ.head || FQ;
          this.styleTag.parentNode != wQ && wQ.insertBefore(this.styleTag, wQ.firstChild)
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