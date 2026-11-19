export const id = 284;
export const ids = [284];
export const modules = {
  40387: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => Cr,
      f: () => er,
      h: () => Er,
      k: () => gY,
      m: () => fr,
      o: () => aY,
      r: () => sr
    });
    var FY = DY(40395),
      AY = DY(40398),
      IY = DY(40417);
    class RY {
      constructor(YY, rY, DY, FY) {
        this.state = YY, this.pos = rY, this.explicit = DY, this.view = FY, this.abortListeners = [], this.abortOnDocChange = !1
      }
      tokenBefore(YY) {
        let rY = (0, IY.sb)(this.state).resolveInner(this.pos, -1);
        for (; rY && YY.indexOf(rY.name) < 0;) rY = rY.parent;
        return rY ? {
          from: rY.from,
          to: this.pos,
          text: this.state.sliceDoc(rY.from, this.pos),
          type: rY.type
        } : null
      }
      matchBefore(YY) {
        let rY = this.state.doc.lineAt(this.pos),
          DY = Math.max(rY.from, this.pos - 250),
          FY = rY.text.slice(DY - rY.from, this.pos - rY.from),
          AY = FY.search(sY(YY, !1));
        return AY < 0 ? null : {
          from: DY + AY,
          to: this.pos,
          text: FY.slice(AY)
        }
      }
      get aborted() {
        return null == this.abortListeners
      }
      addEventListener(YY, rY, DY) {
        "abort" == YY && this.abortListeners && (this.abortListeners.push(rY), DY && DY.onDocChange && (this.abortOnDocChange = !0))
      }
    }

    function OY(YY) {
      let rY = Object.keys(YY).join(""),
        DY = /\w/.test(rY);
      return DY && (rY = rY.replace(/\w/g, "")), `[${DY?"\\w":""}${rY.replace(/[^\w\s]/g,"\\$&")}]`
    }

    function gY(YY) {
      let rY = YY.map((YY => "string" == typeof YY ? {
          label: YY
        } : YY)),
        [DY, FY] = rY.every((YY => /^\w+$/.test(YY.label))) ? [/\w*$/, /\w+$/] : function(YY) {
          let rY = Object.create(null),
            DY = Object.create(null);
          for (let {
              label: AY
            }
            of YY) {
            rY[AY[0]] = !0;
            for (let YY = 1; YY < AY.length; YY++) DY[AY[YY]] = !0
          }
          let FY = OY(rY) + OY(DY) + "*$";
          return [new RegExp("^" + FY), new RegExp(FY)]
        }(rY);
      return YY => {
        let AY = YY.matchBefore(FY);
        return AY || YY.explicit ? {
          from: AY ? AY.from : YY.pos,
          options: rY,
          validFor: DY
        } : null
      }
    }

    function aY(YY, rY) {
      return DY => {
        for (let rY = (0, IY.sb)(DY.state).resolveInner(DY.pos, -1); rY; rY = rY.parent) {
          if (YY.indexOf(rY.name) > -1) return null;
          if (rY.type.isTop) break
        }
        return rY(DY)
      }
    }
    class vY {
      constructor(YY, rY, DY, FY) {
        this.completion = YY, this.source = rY, this.match = DY, this.score = FY
      }
    }

    function uY(YY) {
      return YY.selection.main.from
    }

    function sY(YY, rY) {
      var DY;
      let {
        source: FY
      } = YY, AY = rY && "^" != FY[0], IY = "$" != FY[FY.length - 1];
      return AY || IY ? new RegExp(`${AY?"^":""}(?:${FY})${IY?"$":""}`, null !== (DY = YY.flags) && void 0 !== DY ? DY : YY.ignoreCase ? "i" : "") : YY
    }
    const iY = FY.e.define();

    function yY(YY, rY, DY, AY) {
      let {
        main: IY
      } = YY.selection, RY = DY - IY.from, OY = AY - IY.from;
      return {
        ...YY.changeByRange((gY => {
          if (gY != IY && DY != AY && YY.sliceDoc(gY.from + RY, gY.from + OY) != YY.sliceDoc(DY, AY)) return {
            range: gY
          };
          let aY = YY.toText(rY);
          return {
            changes: {
              from: gY.from + RY,
              to: AY == IY.from ? gY.to : gY.from + OY,
              insert: aY
            },
            range: FY.n.cursor(gY.from + RY + aY.length)
          }
        })),
        scrollIntoView: !0,
        userEvent: "input.complete"
      }
    }
    const QY = new WeakMap;

    function oY(YY) {
      if (!Array.isArray(YY)) return YY;
      let rY = QY.get(YY);
      return rY || QY.set(YY, rY = gY(YY)), rY
    }
    const WY = FY.E.define(),
      EY = FY.E.define();
    class mY {
      constructor(YY) {
        this.pattern = YY, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
        for (let rY = 0; rY < YY.length;) {
          let DY = (0, FY.R)(YY, rY),
            AY = (0, FY.U)(DY);
          this.chars.push(DY);
          let IY = YY.slice(rY, rY + AY),
            RY = IY.toUpperCase();
          this.folded.push((0, FY.R)(RY == IY ? IY.toLowerCase() : RY, 0)), rY += AY
        }
        this.astral = YY.length != this.chars.length
      }
      ret(YY, rY) {
        return this.score = YY, this.matched = rY, this
      }
      match(YY) {
        if (0 == this.pattern.length) return this.ret(-100, []);
        if (YY.length < this.pattern.length) return null;
        let {
          chars: rY,
          folded: DY,
          any: AY,
          precise: IY,
          byWord: RY
        } = this;
        if (1 == rY.length) {
          let AY = (0, FY.R)(YY, 0),
            IY = (0, FY.U)(AY),
            RY = IY == YY.length ? 0 : -100;
          if (AY == rY[0]);
          else {
            if (AY != DY[0]) return null;
            RY += -200
          }
          return this.ret(RY, [0, IY])
        }
        let OY = YY.indexOf(this.pattern);
        if (0 == OY) return this.ret(YY.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
        let gY = rY.length,
          aY = 0;
        if (OY < 0) {
          for (let IY = 0, RY = Math.min(YY.length, 200); IY < RY && aY < gY;) {
            let RY = (0, FY.R)(YY, IY);
            RY != rY[aY] && RY != DY[aY] || (AY[aY++] = IY), IY += (0, FY.U)(RY)
          }
          if (aY < gY) return null
        }
        let vY = 0,
          uY = 0,
          sY = !1,
          iY = 0,
          yY = -1,
          QY = -1,
          oY = /[a-z]/.test(YY),
          WY = !0;
        for (let EY = 0, mY = Math.min(YY.length, 200), VY = 0; EY < mY && uY < gY;) {
          let AY = (0, FY.R)(YY, EY);
          OY < 0 && (vY < gY && AY == rY[vY] && (IY[vY++] = EY), iY < gY && (AY == rY[iY] || AY == DY[iY] ? (0 == iY && (yY = EY), QY = EY + 1, iY++) : iY = 0));
          let aY, mY = AY < 255 ? AY >= 48 && AY <= 57 || AY >= 97 && AY <= 122 ? 2 : AY >= 65 && AY <= 90 ? 1 : 0 : (aY = (0, FY.bb)(AY)) != aY.toLowerCase() ? 1 : aY != aY.toUpperCase() ? 2 : 0;
          (!EY || 1 == mY && oY || 0 == VY && 0 != mY) && (rY[uY] == AY || DY[uY] == AY && (sY = !0) ? RY[uY++] = EY : RY.length && (WY = !1)), VY = mY, EY += (0, FY.U)(AY)
        }
        return uY == gY && 0 == RY[0] && WY ? this.result((sY ? -200 : 0) - 100, RY, YY) : iY == gY && 0 == yY ? this.ret(-200 - YY.length + (QY == YY.length ? 0 : -100), [0, QY]) : OY > -1 ? this.ret(-700 - YY.length, [OY, OY + this.pattern.length]) : iY == gY ? this.ret(-900 - YY.length, [yY, QY]) : uY == gY ? this.result((sY ? -200 : 0) - 100 - 700 + (WY ? 0 : -1100), RY, YY) : 2 == rY.length ? null : this.result((AY[0] ? -700 : 0) - 200 - 1100, AY, YY)
      }
      result(YY, rY, DY) {
        let AY = [],
          IY = 0;
        for (let RY of rY) {
          let YY = RY + (this.astral ? (0, FY.U)((0, FY.R)(DY, RY)) : 1);
          IY && AY[IY - 1] == RY ? AY[IY - 1] = YY : (AY[IY++] = RY, AY[IY++] = YY)
        }
        return this.ret(YY - DY.length, AY)
      }
    }
    class VY {
      constructor(YY) {
        this.pattern = YY, this.matched = [], this.score = 0, this.folded = YY.toLowerCase()
      }
      match(YY) {
        if (YY.length < this.pattern.length) return null;
        let rY = YY.slice(0, this.pattern.length),
          DY = rY == this.pattern ? 0 : rY.toLowerCase() == this.folded ? -200 : null;
        return null == DY ? null : (this.matched = [0, rY.length], this.score = DY + (YY.length == this.pattern.length ? 0 : -100), this)
      }
    }
    const SY = FY.r.define({
      combine: YY => (0, FY.Y)(YY, {
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
        positionInfo: TY,
        filterStrict: !1,
        compareCompletions: (YY, rY) => (YY.sortText || YY.label).localeCompare(rY.sortText || rY.label),
        interactionDelay: 75,
        updateSyncTime: 100
      }, {
        defaultKeymap: (YY, rY) => YY && rY,
        closeOnBlur: (YY, rY) => YY && rY,
        icons: (YY, rY) => YY && rY,
        tooltipClass: (YY, rY) => DY => lY(YY(DY), rY(DY)),
        optionClass: (YY, rY) => DY => lY(YY(DY), rY(DY)),
        addToOptions: (YY, rY) => YY.concat(rY),
        filterStrict: (YY, rY) => YY || rY
      })
    });

    function lY(YY, rY) {
      return YY ? rY ? YY + " " + rY : YY : rY
    }

    function TY(YY, rY, DY, FY, IY, RY) {
      let OY, gY, aY = YY.textDirection == AY.c.RTL,
        vY = aY,
        uY = !1,
        sY = "top",
        iY = rY.left - IY.left,
        yY = IY.right - rY.right,
        QY = FY.right - FY.left,
        oY = FY.bottom - FY.top;
      if (vY && iY < Math.min(QY, yY) ? vY = !1 : !vY && yY < Math.min(QY, iY) && (vY = !0), QY <= (vY ? iY : yY)) OY = Math.max(IY.top, Math.min(DY.top, IY.bottom - oY)) - rY.top, gY = Math.min(400, vY ? iY : yY);
      else {
        uY = !0, gY = Math.min(400, (aY ? rY.right : IY.right - rY.left) - 30);
        let YY = IY.bottom - rY.bottom;
        YY >= oY || YY > rY.top ? OY = DY.bottom - rY.top : (sY = "bottom", OY = rY.bottom - DY.top)
      }
      return {
        style: `${sY}: ${OY/((rY.bottom-rY.top)/RY.offsetHeight)}px; max-width: ${gY/((rY.right-rY.left)/RY.offsetWidth)}px`,
        class: "cm-completionInfo-" + (uY ? aY ? "left-narrow" : "right-narrow" : vY ? "left" : "right")
      }
    }
    const eY = FY.E.define();

    function NY(YY, rY, DY) {
      if (YY <= DY) return {
        from: 0,
        to: YY
      };
      if (rY < 0 && (rY = 0), rY <= YY >> 1) {
        let YY = Math.floor(rY / DY);
        return {
          from: YY * DY,
          to: (YY + 1) * DY
        }
      }
      let FY = Math.floor((YY - rY) / DY);
      return {
        from: YY - (FY + 1) * DY,
        to: YY - FY * DY
      }
    }
    class BY {
      constructor(YY, rY, DY) {
        this.view = YY, this.stateField = rY, this.applyCompletion = DY, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
          read: () => this.measureInfo(),
          write: YY => this.placeInfo(YY),
          key: this
        }, this.space = null, this.currentClass = "";
        let FY = YY.state.field(rY),
          {
            options: AY,
            selected: IY
          } = FY.open,
          RY = YY.state.facet(SY);
        this.optionContent = function(YY) {
          let rY = YY.addToOptions.slice();
          return YY.icons && rY.push({
            render(YY) {
              let rY = document.createElement("div");
              return rY.classList.add("cm-completionIcon"), YY.type && rY.classList.add(...YY.type.split(/\s+/g).map((YY => "cm-completionIcon-" + YY))), rY.setAttribute("aria-hidden", "true"), rY
            },
            position: 20
          }), rY.push({
            render(YY, rY, DY, FY) {
              let AY = document.createElement("span");
              AY.className = "cm-completionLabel";
              let IY = YY.displayLabel || YY.label,
                RY = 0;
              for (let OY = 0; OY < FY.length;) {
                let YY = FY[OY++],
                  rY = FY[OY++];
                YY > RY && AY.appendChild(document.createTextNode(IY.slice(RY, YY)));
                let DY = AY.appendChild(document.createElement("span"));
                DY.appendChild(document.createTextNode(IY.slice(YY, rY))), DY.className = "cm-completionMatchedText", RY = rY
              }
              return RY < IY.length && AY.appendChild(document.createTextNode(IY.slice(RY))), AY
            },
            position: 50
          }, {
            render(YY) {
              if (!YY.detail) return null;
              let rY = document.createElement("span");
              return rY.className = "cm-completionDetail", rY.textContent = YY.detail, rY
            },
            position: 80
          }), rY.sort(((YY, rY) => YY.position - rY.position)).map((YY => YY.render))
        }(RY), this.optionClass = RY.optionClass, this.tooltipClass = RY.tooltipClass, this.range = NY(AY.length, IY, RY.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(YY.state), this.dom.addEventListener("mousedown", (DY => {
          let {
            options: FY
          } = YY.state.field(rY).open;
          for (let rY, AY = DY.target; AY && AY != this.dom; AY = AY.parentNode)
            if ("LI" == AY.nodeName && (rY = /-(\d+)$/.exec(AY.id)) && +rY[1] < FY.length) return this.applyCompletion(YY, FY[+rY[1]]), void DY.preventDefault();
          if (DY.target == this.list) {
            let rY = this.list.classList.contains("cm-completionListIncompleteTop") && DY.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && DY.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
            null != rY && (YY.dispatch({
              effects: eY.of(rY)
            }), DY.preventDefault())
          }
        })), this.dom.addEventListener("focusout", (rY => {
          let DY = YY.state.field(this.stateField, !1);
          DY && DY.tooltip && YY.state.facet(SY).closeOnBlur && rY.relatedTarget != YY.contentDOM && YY.dispatch({
            effects: EY.of(null)
          })
        })), this.showOptions(AY, FY.id)
      }
      mount() {
        this.updateSel()
      }
      showOptions(YY, rY) {
        this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(YY, rY, this.range)), this.list.addEventListener("scroll", (() => {
          this.info && this.view.requestMeasure(this.placeInfoReq)
        }))
      }
      update(YY) {
        var rY;
        let DY = YY.state.field(this.stateField),
          FY = YY.startState.field(this.stateField);
        if (this.updateTooltipClass(YY.state), DY != FY) {
          let {
            options: AY,
            selected: IY,
            disabled: RY
          } = DY.open;
          FY.open && FY.open.options == AY || (this.range = NY(AY.length, IY, YY.state.facet(SY).maxRenderedOptions), this.showOptions(AY, DY.id)), this.updateSel(), RY != (null === (rY = FY.open) || void 0 === rY ? void 0 : rY.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!RY)
        }
      }
      updateTooltipClass(YY) {
        let rY = this.tooltipClass(YY);
        if (rY != this.currentClass) {
          for (let YY of this.currentClass.split(" ")) YY && this.dom.classList.remove(YY);
          for (let YY of rY.split(" ")) YY && this.dom.classList.add(YY);
          this.currentClass = rY
        }
      }
      positioned(YY) {
        this.space = YY, this.info && this.view.requestMeasure(this.placeInfoReq)
      }
      updateSel() {
        let YY = this.view.state.field(this.stateField),
          rY = YY.open;
        (rY.selected > -1 && rY.selected < this.range.from || rY.selected >= this.range.to) && (this.range = NY(rY.options.length, rY.selected, this.view.state.facet(SY).maxRenderedOptions), this.showOptions(rY.options, YY.id));
        let DY = this.updateSelectedOption(rY.selected);
        if (DY) {
          this.destroyInfo();
          let {
            completion: FY
          } = rY.options[rY.selected], {
            info: IY
          } = FY;
          if (!IY) return;
          let RY = "string" === typeof IY ? document.createTextNode(IY) : IY(FY);
          if (!RY) return;
          "then" in RY ? RY.then((rY => {
            rY && this.view.state.field(this.stateField, !1) == YY && this.addInfoPane(rY, FY)
          })).catch((YY => (0, AY._)(this.view.state, YY, "completion info"))) : (this.addInfoPane(RY, FY), DY.setAttribute("aria-describedby", this.info.id))
        }
      }
      addInfoPane(YY, rY) {
        this.destroyInfo();
        let DY = this.info = document.createElement("div");
        if (DY.className = "cm-tooltip cm-completionInfo", DY.id = "cm-completionInfo-" + Math.floor(65535 * Math.random()).toString(16), null != YY.nodeType) DY.appendChild(YY), this.infoDestroy = null;
        else {
          let {
            dom: rY,
            destroy: FY
          } = YY;
          DY.appendChild(rY), this.infoDestroy = FY || null
        }
        this.dom.appendChild(DY), this.view.requestMeasure(this.placeInfoReq)
      }
      updateSelectedOption(YY) {
        let rY = null;
        for (let DY = this.list.firstChild, FY = this.range.from; DY; DY = DY.nextSibling, FY++) "LI" == DY.nodeName && DY.id ? FY == YY ? DY.hasAttribute("aria-selected") || (DY.setAttribute("aria-selected", "true"), rY = DY) : DY.hasAttribute("aria-selected") && (DY.removeAttribute("aria-selected"), DY.removeAttribute("aria-describedby")) : FY--;
        return rY && function(YY, rY) {
          let DY = YY.getBoundingClientRect(),
            FY = rY.getBoundingClientRect(),
            AY = DY.height / YY.offsetHeight;
          FY.top < DY.top ? YY.scrollTop -= (DY.top - FY.top) / AY : FY.bottom > DY.bottom && (YY.scrollTop += (FY.bottom - DY.bottom) / AY)
        }(this.list, rY), rY
      }
      measureInfo() {
        let YY = this.dom.querySelector("[aria-selected]");
        if (!YY || !this.info) return null;
        let rY = this.dom.getBoundingClientRect(),
          DY = this.info.getBoundingClientRect(),
          FY = YY.getBoundingClientRect(),
          AY = this.space;
        if (!AY) {
          let YY = this.dom.ownerDocument.documentElement;
          AY = {
            left: 0,
            top: 0,
            right: YY.clientWidth,
            bottom: YY.clientHeight
          }
        }
        return FY.top > Math.min(AY.bottom, rY.bottom) - 10 || FY.bottom < Math.max(AY.top, rY.top) + 10 ? null : this.view.state.facet(SY).positionInfo(this.view, rY, FY, DY, AY, this.dom)
      }
      placeInfo(YY) {
        this.info && (YY ? (YY.style && (this.info.style.cssText = YY.style), this.info.className = "cm-tooltip cm-completionInfo " + (YY.class || "")) : this.info.style.cssText = "top: -1e6px")
      }
      createListBox(YY, rY, DY) {
        const FY = document.createElement("ul");
        FY.id = rY, FY.setAttribute("role", "listbox"), FY.setAttribute("aria-expanded", "true"), FY.setAttribute("aria-label", this.view.state.phrase("Completions")), FY.addEventListener("mousedown", (YY => {
          YY.target == FY && YY.preventDefault()
        }));
        let AY = null;
        for (let IY = DY.from; IY < DY.to; IY++) {
          let {
            completion: RY,
            match: OY
          } = YY[IY], {
            section: gY
          } = RY;
          if (gY) {
            let YY = "string" == typeof gY ? gY : gY.name;
            if (YY != AY && (IY > DY.from || 0 == DY.from))
              if (AY = YY, "string" != typeof gY && gY.header) FY.appendChild(gY.header(gY));
              else {
                FY.appendChild(document.createElement("completion-section")).textContent = YY
              }
          }
          const aY = FY.appendChild(document.createElement("li"));
          aY.id = rY + "-" + IY, aY.setAttribute("role", "option");
          let vY = this.optionClass(RY);
          vY && (aY.className = vY);
          for (let YY of this.optionContent) {
            let rY = YY(RY, this.view.state, this.view, OY);
            rY && aY.appendChild(rY)
          }
        }
        return DY.from && FY.classList.add("cm-completionListIncompleteTop"), DY.to < YY.length && FY.classList.add("cm-completionListIncompleteBottom"), FY
      }
      destroyInfo() {
        this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
      }
      destroy() {
        this.destroyInfo()
      }
    }

    function cY(YY, rY) {
      return DY => new BY(DY, YY, rY)
    }

    function KY(YY) {
      return 100 * (YY.boost || 0) + (YY.apply ? 10 : 0) + (YY.info ? 5 : 0) + (YY.type ? 1 : 0)
    }
    class HY {
      constructor(YY, rY, DY, FY, AY, IY) {
        this.options = YY, this.attrs = rY, this.tooltip = DY, this.timestamp = FY, this.selected = AY, this.disabled = IY
      }
      setSelected(YY, rY) {
        return YY == this.selected || YY >= this.options.length ? this : new HY(this.options, fY(rY, YY), this.tooltip, this.timestamp, YY, this.disabled)
      }
      static build(YY, rY, DY, FY, AY, IY) {
        if (FY && !IY && YY.some((YY => YY.isPending))) return FY.setDisabled();
        let RY = function(YY, rY) {
          let DY = [],
            FY = null,
            AY = null,
            IY = YY => {
              DY.push(YY);
              let {
                section: rY
              } = YY.completion;
              if (rY) {
                FY || (FY = []);
                let YY = "string" == typeof rY ? rY : rY.name;
                FY.some((rY => rY.name == YY)) || FY.push("string" == typeof rY ? {
                  name: YY
                } : rY)
              }
            },
            RY = rY.facet(SY);
          for (let uY of YY)
            if (uY.hasResult()) {
              let YY = uY.result.getMatch;
              if (!1 === uY.result.filter)
                for (let rY of uY.result.options) IY(new vY(rY, uY.source, YY ? YY(rY) : [], 1e9 - DY.length));
              else {
                let DY, FY = rY.sliceDoc(uY.from, uY.to),
                  OY = RY.filterStrict ? new VY(FY) : new mY(FY);
                for (let rY of uY.result.options)
                  if (DY = OY.match(rY.label)) {
                    let FY = rY.displayLabel ? YY ? YY(rY, DY.matched) : [] : DY.matched,
                      RY = DY.score + (rY.boost || 0);
                    if (IY(new vY(rY, uY.source, FY, RY)), "object" == typeof rY.section && "dynamic" === rY.section.rank) {
                      let {
                        name: YY
                      } = rY.section;
                      AY || (AY = Object.create(null)), AY[YY] = Math.max(RY, AY[YY] || -1e9)
                    }
                  }
              }
            } if (FY) {
            let YY = Object.create(null),
              rY = 0,
              IY = (YY, rY) => ("dynamic" === YY.rank && "dynamic" === rY.rank ? AY[rY.name] - AY[YY.name] : 0) || ("number" == typeof YY.rank ? YY.rank : 1e9) - ("number" == typeof rY.rank ? rY.rank : 1e9) || (YY.name < rY.name ? -1 : 1);
            for (let DY of FY.sort(IY)) rY -= 1e5, YY[DY.name] = rY;
            for (let FY of DY) {
              let {
                section: rY
              } = FY.completion;
              rY && (FY.score += YY["string" == typeof rY ? rY : rY.name])
            }
          }
          let OY = [],
            gY = null,
            aY = RY.compareCompletions;
          for (let vY of DY.sort(((YY, rY) => rY.score - YY.score || aY(YY.completion, rY.completion)))) {
            let YY = vY.completion;
            !gY || gY.label != YY.label || gY.detail != YY.detail || null != gY.type && null != YY.type && gY.type != YY.type || gY.apply != YY.apply || gY.boost != YY.boost ? OY.push(vY) : KY(vY.completion) > KY(gY) && (OY[OY.length - 1] = vY), gY = vY.completion
          }
          return OY
        }(YY, rY);
        if (!RY.length) return FY && YY.some((YY => YY.isPending)) ? FY.setDisabled() : null;
        let OY = rY.facet(SY).selectOnOpen ? 0 : -1;
        if (FY && FY.selected != OY && -1 != FY.selected) {
          let YY = FY.options[FY.selected].completion;
          for (let rY = 0; rY < RY.length; rY++)
            if (RY[rY].completion == YY) {
              OY = rY;
              break
            }
        }
        return new HY(RY, fY(DY, OY), {
          pos: YY.reduce(((YY, rY) => rY.hasResult() ? Math.min(YY, rY.from) : YY), 1e8),
          create: XY,
          above: AY.aboveCursor
        }, FY ? FY.timestamp : Date.now(), OY, !1)
      }
      map(YY) {
        return new HY(this.options, this.attrs, {
          ...this.tooltip,
          pos: YY.mapPos(this.tooltip.pos)
        }, this.timestamp, this.selected, this.disabled)
      }
      setDisabled() {
        return new HY(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0)
      }
    }
    class zY {
      constructor(YY, rY, DY) {
        this.active = YY, this.id = rY, this.open = DY
      }
      static start() {
        return new zY(jY, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
      }
      update(YY) {
        let {
          state: rY
        } = YY, DY = rY.facet(SY), FY = (DY.override || rY.languageDataAt("autocomplete", uY(rY)).map(oY)).map((rY => (this.active.find((YY => YY.source == rY)) || new dY(rY, this.active.some((YY => 0 != YY.state)) ? 1 : 0)).update(YY, DY)));
        FY.length == this.active.length && FY.every(((YY, rY) => YY == this.active[rY])) && (FY = this.active);
        let AY = this.open,
          IY = YY.effects.some((YY => YY.is(MY)));
        AY && YY.docChanged && (AY = AY.map(YY.changes)), YY.selection || FY.some((rY => rY.hasResult() && YY.changes.touchesRange(rY.from, rY.to))) || ! function(YY, rY) {
          if (YY == rY) return !0;
          for (let DY = 0, FY = 0;;) {
            for (; DY < YY.length && !YY[DY].hasResult();) DY++;
            for (; FY < rY.length && !rY[FY].hasResult();) FY++;
            let AY = DY == YY.length,
              IY = FY == rY.length;
            if (AY || IY) return AY == IY;
            if (YY[DY++].result != rY[FY++].result) return !1
          }
        }(FY, this.active) || IY ? AY = HY.build(FY, rY, this.id, AY, DY, IY) : AY && AY.disabled && !FY.some((YY => YY.isPending)) && (AY = null), !AY && FY.every((YY => !YY.isPending)) && FY.some((YY => YY.hasResult())) && (FY = FY.map((YY => YY.hasResult() ? new dY(YY.source, 0) : YY)));
        for (let RY of YY.effects) RY.is(eY) && (AY = AY && AY.setSelected(RY.value, this.id));
        return FY == this.active && AY == this.open ? this : new zY(FY, this.id, AY)
      }
      get tooltip() {
        return this.open ? this.open.tooltip : null
      }
      get attrs() {
        return this.open ? this.open.attrs : this.active.length ? ZY : CY
      }
    }
    const ZY = {
        "aria-autocomplete": "list"
      },
      CY = {};

    function fY(YY, rY) {
      let DY = {
        "aria-autocomplete": "list",
        "aria-haspopup": "listbox",
        "aria-controls": YY
      };
      return rY > -1 && (DY["aria-activedescendant"] = YY + "-" + rY), DY
    }
    const jY = [];

    function hY(YY, rY) {
      if (YY.isUserEvent("input.complete")) {
        let DY = YY.annotation(iY);
        if (DY && rY.activateOnCompletion(DY)) return 12
      }
      let DY = YY.isUserEvent("input.type");
      return DY && rY.activateOnTyping ? 5 : DY ? 1 : YY.isUserEvent("delete.backward") ? 2 : YY.selection ? 8 : YY.docChanged ? 16 : 0
    }
    class dY {
      constructor(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.source = YY, this.state = rY, this.explicit = DY
      }
      hasResult() {
        return !1
      }
      get isPending() {
        return 1 == this.state
      }
      update(YY, rY) {
        let DY = hY(YY, rY),
          FY = this;
        (8 & DY || 16 & DY && this.touches(YY)) && (FY = new dY(FY.source, 0)), 4 & DY && 0 == FY.state && (FY = new dY(this.source, 1)), FY = FY.updateFor(YY, DY);
        for (let AY of YY.effects)
          if (AY.is(WY)) FY = new dY(FY.source, 1, AY.value);
          else if (AY.is(EY)) FY = new dY(FY.source, 0);
        else if (AY.is(MY))
          for (let YY of AY.value) YY.source == FY.source && (FY = YY);
        return FY
      }
      updateFor(YY, rY) {
        return this.map(YY.changes)
      }
      map(YY) {
        return this
      }
      touches(YY) {
        return YY.changes.touchesRange(uY(YY.state))
      }
    }
    class JY extends dY {
      constructor(YY, rY, DY, FY, AY, IY) {
        super(YY, 3, rY), this.limit = DY, this.result = FY, this.from = AY, this.to = IY
      }
      hasResult() {
        return !0
      }
      updateFor(YY, rY) {
        var DY;
        if (!(3 & rY)) return this.map(YY.changes);
        let FY = this.result;
        FY.map && !YY.changes.empty && (FY = FY.map(FY, YY.changes));
        let AY = YY.changes.mapPos(this.from),
          IY = YY.changes.mapPos(this.to, 1),
          OY = uY(YY.state);
        if (OY > IY || !FY || 2 & rY && (uY(YY.startState) == this.from || OY < this.limit)) return new dY(this.source, 4 & rY ? 1 : 0);
        let gY = YY.changes.mapPos(this.limit);
        return function(YY, rY, DY, FY) {
          if (!YY) return !1;
          let AY = rY.sliceDoc(DY, FY);
          return "function" == typeof YY ? YY(AY, DY, FY, rY) : sY(YY, !0).test(AY)
        }(FY.validFor, YY.state, AY, IY) ? new JY(this.source, this.explicit, gY, FY, AY, IY) : FY.update && (FY = FY.update(FY, AY, IY, new RY(YY.state, OY, !1))) ? new JY(this.source, this.explicit, gY, FY, FY.from, null !== (DY = FY.to) && void 0 !== DY ? DY : uY(YY.state)) : new dY(this.source, 1, this.explicit)
      }
      map(YY) {
        if (YY.empty) return this;
        return (this.result.map ? this.result.map(this.result, YY) : this.result) ? new JY(this.source, this.explicit, YY.mapPos(this.limit), this.result, YY.mapPos(this.from), YY.mapPos(this.to, 1)) : new dY(this.source, 0)
      }
      touches(YY) {
        return YY.changes.touchesRange(this.from, this.to)
      }
    }
    const MY = FY.E.define({
        map: (YY, rY) => YY.map((YY => YY.map(rY)))
      }),
      wY = FY.G.define({
        create: () => zY.start(),
        update: (YY, rY) => YY.update(rY),
        provide: YY => [AY.nb.from(YY, (YY => YY.tooltip)), AY.e.contentAttributes.from(YY, (YY => YY.attrs))]
      });

    function bY(YY, rY) {
      const DY = rY.completion.apply || rY.completion.label;
      let FY = YY.state.field(wY).active.find((YY => YY.source == rY.source));
      return FY instanceof JY && ("string" == typeof DY ? YY.dispatch({
        ...yY(YY.state, DY, FY.from, FY.to),
        annotations: iY.of(rY.completion)
      }) : DY(YY, rY.completion, FY.from, FY.to), !0)
    }
    const XY = cY(wY, bY);

    function qY(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option";
      return DY => {
        let FY = DY.state.field(wY, !1);
        if (!FY || !FY.open || FY.open.disabled || Date.now() - FY.open.timestamp < DY.state.facet(SY).interactionDelay) return !1;
        let IY, RY = 1;
        "page" == rY && (IY = (0, AY.C)(DY, FY.open.tooltip)) && (RY = Math.max(2, Math.floor(IY.dom.offsetHeight / IY.dom.querySelector("li").offsetHeight) - 1));
        let {
          length: OY
        } = FY.open.options, gY = FY.open.selected > -1 ? FY.open.selected + RY * (YY ? 1 : -1) : YY ? 0 : OY - 1;
        return gY < 0 ? gY = "page" == rY ? 0 : OY - 1 : gY >= OY && (gY = "page" == rY ? OY - 1 : 0), DY.dispatch({
          effects: eY.of(gY)
        }), !0
      }
    }
    const pY = YY => !!YY.state.field(wY, !1) && (YY.dispatch({
      effects: WY.of(!0)
    }), !0);
    class kY {
      constructor(YY, rY) {
        this.active = YY, this.context = rY, this.time = Date.now(), this.updates = [], this.done = void 0
      }
    }
    const GY = AY.k.fromClass(class {
        constructor(YY) {
          this.view = YY, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
          for (let rY of YY.state.field(wY).active) rY.isPending && this.startQuery(rY)
        }
        update(YY) {
          let rY = YY.state.field(wY),
            DY = YY.state.facet(SY);
          if (!YY.selectionSet && !YY.docChanged && YY.startState.field(wY) == rY) return;
          let FY = YY.transactions.some((YY => {
            let rY = hY(YY, DY);
            return 8 & rY || (YY.selection || YY.docChanged) && !(3 & rY)
          }));
          for (let OY = 0; OY < this.running.length; OY++) {
            let rY = this.running[OY];
            if (FY || rY.context.abortOnDocChange && YY.docChanged || rY.updates.length + YY.transactions.length > 50 && Date.now() - rY.time > 1e3) {
              for (let YY of rY.context.abortListeners) try {
                YY()
              } catch (RY) {
                (0, AY._)(this.view.state, RY)
              }
              rY.context.abortListeners = null, this.running.splice(OY--, 1)
            } else rY.updates.push(...YY.transactions)
          }
          this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), YY.transactions.some((YY => YY.effects.some((YY => YY.is(WY))))) && (this.pendingStart = !0);
          let IY = this.pendingStart ? 50 : DY.activateOnTypingDelay;
          if (this.debounceUpdate = rY.active.some((YY => YY.isPending && !this.running.some((rY => rY.active.source == YY.source)))) ? setTimeout((() => this.startUpdate()), IY) : -1, 0 != this.composing)
            for (let AY of YY.transactions) AY.isUserEvent("input.type") ? this.composing = 2 : 2 == this.composing && AY.selection && (this.composing = 3)
        }
        startUpdate() {
          this.debounceUpdate = -1, this.pendingStart = !1;
          let {
            state: YY
          } = this.view, rY = YY.field(wY);
          for (let DY of rY.active) DY.isPending && !this.running.some((YY => YY.active.source == DY.source)) && this.startQuery(DY);
          this.running.length && rY.open && rY.open.disabled && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(SY).updateSyncTime))
        }
        startQuery(YY) {
          let {
            state: rY
          } = this.view, DY = uY(rY), FY = new RY(rY, DY, YY.explicit, this.view), IY = new kY(YY, FY);
          this.running.push(IY), Promise.resolve(YY.source(FY)).then((YY => {
            IY.context.aborted || (IY.done = YY || null, this.scheduleAccept())
          }), (YY => {
            this.view.dispatch({
              effects: EY.of(null)
            }), (0, AY._)(this.view.state, YY)
          }))
        }
        scheduleAccept() {
          this.running.every((YY => void 0 !== YY.done)) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(SY).updateSyncTime))
        }
        accept() {
          var YY;
          this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
          let rY = [],
            DY = this.view.state.facet(SY),
            FY = this.view.state.field(wY);
          for (let AY = 0; AY < this.running.length; AY++) {
            let IY = this.running[AY];
            if (void 0 === IY.done) continue;
            if (this.running.splice(AY--, 1), IY.done) {
              let FY = uY(IY.updates.length ? IY.updates[0].startState : this.view.state),
                AY = Math.min(FY, IY.done.from + (IY.active.explicit ? 0 : 1)),
                RY = new JY(IY.active.source, IY.active.explicit, AY, IY.done, IY.done.from, null !== (YY = IY.done.to) && void 0 !== YY ? YY : FY);
              for (let YY of IY.updates) RY = RY.update(YY, DY);
              if (RY.hasResult()) {
                rY.push(RY);
                continue
              }
            }
            let RY = FY.active.find((YY => YY.source == IY.active.source));
            if (RY && RY.isPending)
              if (null == IY.done) {
                let YY = new dY(IY.active.source, 0);
                for (let rY of IY.updates) YY = YY.update(rY, DY);
                YY.isPending || rY.push(YY)
              } else this.startQuery(RY)
          }(rY.length || FY.open && FY.open.disabled) && this.view.dispatch({
            effects: MY.of(rY)
          })
        }
      }, {
        eventHandlers: {
          blur(YY) {
            let rY = this.view.state.field(wY, !1);
            if (rY && rY.tooltip && this.view.state.facet(SY).closeOnBlur) {
              let DY = rY.open && (0, AY.C)(this.view, rY.open.tooltip);
              DY && DY.dom.contains(YY.relatedTarget) || setTimeout((() => this.view.dispatch({
                effects: EY.of(null)
              })), 10)
            }
          },
          compositionstart() {
            this.composing = 1
          },
          compositionend() {
            3 == this.composing && setTimeout((() => this.view.dispatch({
              effects: WY.of(!1)
            })), 20), this.composing = 0
          }
        }
      }),
      xY = "object" == typeof navigator && /Win/.test(navigator.platform),
      nY = FY.v.highest(AY.e.domEventHandlers({
        keydown(YY, rY) {
          let DY = rY.state.field(wY, !1);
          if (!DY || !DY.open || DY.open.disabled || DY.open.selected < 0 || YY.key.length > 1 || YY.ctrlKey && (!xY || !YY.altKey) || YY.metaKey) return !1;
          let FY = DY.open.options[DY.open.selected],
            AY = DY.active.find((YY => YY.source == FY.source)),
            IY = FY.completion.commitCharacters || AY.result.commitCharacters;
          return IY && IY.indexOf(YY.key) > -1 && bY(rY, FY), !1
        }
      })),
      PY = AY.e.baseTheme({
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
    class UY {
      constructor(YY, rY, DY, FY) {
        this.field = YY, this.line = rY, this.from = DY, this.to = FY
      }
    }
    class LY {
      constructor(YY, rY, DY) {
        this.field = YY, this.from = rY, this.to = DY
      }
      map(YY) {
        let rY = YY.mapPos(this.from, -1, FY.u.TrackDel),
          DY = YY.mapPos(this.to, 1, FY.u.TrackDel);
        return null == rY || null == DY ? null : new LY(this.field, rY, DY)
      }
    }
    class tY {
      constructor(YY, rY) {
        this.lines = YY, this.fieldPositions = rY
      }
      instantiate(YY, rY) {
        let DY = [],
          FY = [rY],
          AY = YY.doc.lineAt(rY),
          RY = /^\s*/.exec(AY.text)[0];
        for (let gY of this.lines) {
          if (DY.length) {
            let DY = RY,
              AY = /^\t*/.exec(gY)[0].length;
            for (let rY = 0; rY < AY; rY++) DY += YY.facet(IY.db);
            FY.push(rY + DY.length - AY), gY = DY + gY.slice(AY)
          }
          DY.push(gY), rY += gY.length + 1
        }
        let OY = this.fieldPositions.map((YY => new LY(YY.field, FY[YY.line] + YY.from, FY[YY.line] + YY.to)));
        return {
          text: DY,
          ws: OY
        }
      }
      static parse(YY) {
        let rY, DY = [],
          FY = [],
          AY = [];
        for (let IY of YY.split(/\r\n?|\n/)) {
          for (; rY = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(IY);) {
            let YY = rY[1] ? +rY[1] : null,
              RY = rY[2] || rY[3] || "",
              OY = -1,
              gY = RY.replace(/\\[{}]/g, (YY => YY[1]));
            for (let rY = 0; rY < DY.length; rY++)(null != YY ? DY[rY].seq == YY : gY && DY[rY].name == gY) && (OY = rY);
            if (OY < 0) {
              let rY = 0;
              for (; rY < DY.length && (null == YY || null != DY[rY].seq && DY[rY].seq < YY);) rY++;
              DY.splice(rY, 0, {
                seq: YY,
                name: gY
              }), OY = rY;
              for (let YY of AY) YY.field >= OY && YY.field++
            }
            for (let DY of AY)
              if (DY.line == FY.length && DY.from > rY.index) {
                let YY = rY[2] ? 3 + (rY[1] || "").length : 2;
                DY.from -= YY, DY.to -= YY
              } AY.push(new UY(OY, FY.length, rY.index, rY.index + gY.length)), IY = IY.slice(0, rY.index) + RY + IY.slice(rY.index + rY[0].length)
          }
          IY = IY.replace(/\\([{}])/g, ((YY, rY, DY) => {
            for (let IY of AY) IY.line == FY.length && IY.from > DY && (IY.from--, IY.to--);
            return rY
          })), FY.push(IY)
        }
        return new tY(FY, AY)
      }
    }
    let Yr = AY.b.widget({
        widget: new class extends AY.n {
          toDOM() {
            let YY = document.createElement("span");
            return YY.className = "cm-snippetFieldPosition", YY
          }
          ignoreEvent() {
            return !1
          }
        }
      }),
      rr = AY.b.mark({
        class: "cm-snippetField"
      });
    class Dr {
      constructor(YY, rY) {
        this.ws = YY, this.active = rY, this.deco = AY.b.set(YY.map((YY => (YY.from == YY.to ? Yr : rr).range(YY.from, YY.to))), !0)
      }
      map(YY) {
        let rY = [];
        for (let DY of this.ws) {
          let FY = DY.map(YY);
          if (!FY) return null;
          rY.push(FY)
        }
        return new Dr(rY, this.active)
      }
      selectionInsideField(YY) {
        return YY.ws.every((YY => this.ws.some((rY => rY.field == this.active && rY.from <= YY.from && rY.to >= YY.to))))
      }
    }
    const Fr = FY.E.define({
        map: (YY, rY) => YY && YY.map(rY)
      }),
      Ar = FY.E.define(),
      Ir = FY.G.define({
        create: () => null,
        update(YY, rY) {
          for (let DY of rY.effects) {
            if (DY.is(Fr)) return DY.value;
            if (DY.is(Ar) && YY) return new Dr(YY.ws, DY.value)
          }
          return YY && rY.docChanged && (YY = YY.map(rY.changes)), YY && rY.selection && !YY.selectionInsideField(rY.selection) && (YY = null), YY
        },
        provide: YY => AY.e.CA.from(YY, (YY => YY ? YY.deco : AY.b.none))
      });

    function Rr(YY, rY) {
      return FY.n.create(YY.filter((YY => YY.field == rY)).map((YY => FY.n.range(YY.from, YY.to))))
    }

    function Or(YY) {
      let rY = tY.parse(YY);
      return (YY, DY, AY, IY) => {
        let {
          text: RY,
          ws: OY
        } = rY.instantiate(YY.state, AY), {
          main: gY
        } = YY.state.selection, aY = {
          changes: {
            from: AY,
            to: IY == gY.from ? gY.to : IY,
            insert: FY.K.of(RY)
          },
          scrollIntoView: !0,
          annotations: DY ? [iY.of(DY), FY.N.userEvent.of("input.complete")] : void 0
        };
        if (OY.length && (aY.selection = Rr(OY, 0)), OY.some((YY => YY.field > 0))) {
          let rY = new Dr(OY, 0),
            DY = aY.effects = [Fr.of(rY)];
          void 0 === YY.state.field(Ir, !1) && DY.push(FY.E.appendConfig.of([Ir, ur, ir, PY]))
        }
        YY.dispatch(YY.state.update(aY))
      }
    }

    function gr(YY) {
      return rY => {
        let {
          state: DY,
          dispatch: FY
        } = rY, AY = DY.field(Ir, !1);
        if (!AY || YY < 0 && 0 == AY.active) return !1;
        let IY = AY.active + YY,
          RY = YY > 0 && !AY.ws.some((rY => rY.field == IY + YY));
        return FY(DY.update({
          selection: Rr(AY.ws, IY),
          effects: Fr.of(RY ? null : new Dr(AY.ws, IY)),
          scrollIntoView: !0
        })), !0
      }
    }
    const ar = [{
        key: "Tab",
        run: gr(1),
        shift: gr(-1)
      }, {
        key: "Escape",
        run: YY => {
          let {
            state: rY,
            dispatch: DY
          } = YY;
          return !!rY.field(Ir, !1) && (DY(rY.update({
            effects: Fr.of(null)
          })), !0)
        }
      }],
      vr = FY.r.define({
        combine: YY => YY.length ? YY[0] : ar
      }),
      ur = FY.v.highest(AY.S.compute([vr], (YY => YY.facet(vr))));

    function sr(YY, rY) {
      return {
        ...rY,
        apply: Or(YY)
      }
    }
    const ir = AY.e.domEventHandlers({
      mousedown(YY, rY) {
        let DY, FY = rY.state.field(Ir, !1);
        if (!FY || null == (DY = rY.posAtCoords({
            x: YY.clientX,
            y: YY.clientY
          }))) return !1;
        let AY = FY.ws.find((YY => YY.from <= DY && YY.to >= DY));
        return !(!AY || AY.field == FY.active) && (rY.dispatch({
          selection: Rr(FY.ws, AY.field),
          effects: Fr.of(FY.ws.some((YY => YY.field > AY.field)) ? new Dr(FY.ws, AY.field) : null),
          scrollIntoView: !0
        }), !0)
      }
    });
    const yr = {
        brackets: ["(", "[", "{", "'", '"'],
        before: ")]}:;>",
        stringPrefixes: []
      },
      Qr = FY.E.define({
        map(YY, rY) {
          let DY = rY.mapPos(YY, -1, FY.u.TrackAfter);
          return null == DY ? void 0 : DY
        }
      }),
      or = new class extends FY.C {};
    or.startSide = 1, or.endSide = -1;
    const Wr = FY.G.define({
      create: () => FY.B.empty,
      update(YY, rY) {
        if (YY = YY.map(rY.changes), rY.selection) {
          let DY = rY.state.doc.lineAt(rY.selection.main.head);
          YY = YY.update({
            filter: YY => YY >= DY.from && YY <= DY.to
          })
        }
        for (let DY of rY.effects) DY.is(Qr) && (YY = YY.update({
          add: [or.range(DY.value, DY.value + 1)]
        }));
        return YY
      }
    });

    function Er() {
      return [Tr, Wr]
    }
    const mr = "()[]{}<>\xab\xbb\xbb\xab\uff3b\uff3d\uff5b\uff5d";

    function Vr(YY) {
      for (let rY = 0; rY < 16; rY += 2)
        if (mr.charCodeAt(rY) == YY) return mr.charAt(rY + 1);
      return (0, FY.bb)(YY < 128 ? YY : YY + 1)
    }

    function Sr(YY, rY) {
      return YY.languageDataAt("closeBrackets", rY)[0] || yr
    }
    const lr = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      Tr = AY.e.inputHandler.of(((YY, rY, DY, AY) => {
        if ((lr ? YY.composing : YY.compositionStarted) || YY.state.readOnly) return !1;
        let IY = YY.state.selection.main;
        if (AY.length > 2 || 2 == AY.length && 1 == (0, FY.U)((0, FY.R)(AY, 0)) || rY != IY.from || DY != IY.to) return !1;
        let RY = function(YY, rY) {
          let DY = Sr(YY, YY.selection.main.head),
            AY = DY.brackets || yr.brackets;
          for (let IY of AY) {
            let RY = Vr((0, FY.R)(IY, 0));
            if (rY == IY) return RY == IY ? Hr(YY, IY, AY.indexOf(IY + IY + IY) > -1, DY) : cr(YY, IY, RY, DY.before || yr.before);
            if (rY == RY && Nr(YY, YY.selection.main.from)) return Kr(YY, IY, RY)
          }
          return null
        }(YY.state, AY);
        return !!RY && (YY.dispatch(RY), !0)
      })),
      er = [{
        key: "Backspace",
        run: YY => {
          let {
            state: rY,
            dispatch: DY
          } = YY;
          if (rY.readOnly) return !1;
          let AY = Sr(rY, rY.selection.main.head).brackets || yr.brackets,
            IY = null,
            RY = rY.changeByRange((YY => {
              if (YY.empty) {
                let DY = function(YY, rY) {
                  let DY = YY.sliceString(rY - 2, rY);
                  return (0, FY.U)((0, FY.R)(DY, 0)) == DY.length ? DY : DY.slice(1)
                }(rY.doc, YY.head);
                for (let IY of AY)
                  if (IY == DY && Br(rY.doc, YY.head) == Vr((0, FY.R)(IY, 0))) return {
                    changes: {
                      from: YY.head - IY.length,
                      to: YY.head + IY.length
                    },
                    range: FY.n.cursor(YY.head - IY.length)
                  }
              }
              return {
                range: IY = YY
              }
            }));
          return IY || DY(rY.update(RY, {
            scrollIntoView: !0,
            userEvent: "delete.backward"
          })), !IY
        }
      }];

    function Nr(YY, rY) {
      let DY = !1;
      return YY.field(Wr).between(0, YY.doc.length, (YY => {
        YY == rY && (DY = !0)
      })), DY
    }

    function Br(YY, rY) {
      let DY = YY.sliceString(rY, rY + 2);
      return DY.slice(0, (0, FY.U)((0, FY.R)(DY, 0)))
    }

    function cr(YY, rY, DY, AY) {
      let IY = null,
        RY = YY.changeByRange((RY => {
          if (!RY.empty) return {
            changes: [{
              insert: rY,
              from: RY.from
            }, {
              insert: DY,
              from: RY.to
            }],
            effects: Qr.of(RY.to + rY.length),
            range: FY.n.range(RY.anchor + rY.length, RY.head + rY.length)
          };
          let OY = Br(YY.doc, RY.head);
          return !OY || /\s/.test(OY) || AY.indexOf(OY) > -1 ? {
            changes: {
              insert: rY + DY,
              from: RY.head
            },
            effects: Qr.of(RY.head + rY.length),
            range: FY.n.cursor(RY.head + rY.length)
          } : {
            range: IY = RY
          }
        }));
      return IY ? null : YY.update(RY, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function Kr(YY, rY, DY) {
      let AY = null,
        IY = YY.changeByRange((rY => rY.empty && Br(YY.doc, rY.head) == DY ? {
          changes: {
            from: rY.head,
            to: rY.head + DY.length,
            insert: DY
          },
          range: FY.n.cursor(rY.head + DY.length)
        } : AY = {
          range: rY
        }));
      return AY ? null : YY.update(IY, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function Hr(YY, rY, DY, AY) {
      let RY = AY.stringPrefixes || yr.stringPrefixes,
        OY = null,
        gY = YY.changeByRange((AY => {
          if (!AY.empty) return {
            changes: [{
              insert: rY,
              from: AY.from
            }, {
              insert: rY,
              from: AY.to
            }],
            effects: Qr.of(AY.to + rY.length),
            range: FY.n.range(AY.anchor + rY.length, AY.head + rY.length)
          };
          let gY, aY = AY.head,
            vY = Br(YY.doc, aY);
          if (vY == rY) {
            if (zr(YY, aY)) return {
              changes: {
                insert: rY + rY,
                from: aY
              },
              effects: Qr.of(aY + rY.length),
              range: FY.n.cursor(aY + rY.length)
            };
            if (Nr(YY, aY)) {
              let AY = DY && YY.sliceDoc(aY, aY + 3 * rY.length) == rY + rY + rY ? rY + rY + rY : rY;
              return {
                changes: {
                  from: aY,
                  to: aY + AY.length,
                  insert: AY
                },
                range: FY.n.cursor(aY + AY.length)
              }
            }
          } else {
            if (DY && YY.sliceDoc(aY - 2 * rY.length, aY) == rY + rY && (gY = Zr(YY, aY - 2 * rY.length, RY)) > -1 && zr(YY, gY)) return {
              changes: {
                insert: rY + rY + rY + rY,
                from: aY
              },
              effects: Qr.of(aY + rY.length),
              range: FY.n.cursor(aY + rY.length)
            };
            if (YY.charCategorizer(aY)(vY) != FY.j.Word && Zr(YY, aY, RY) > -1 && ! function(YY, rY, DY, FY) {
                let AY = (0, IY.sb)(YY).resolveInner(rY, -1),
                  RY = FY.reduce(((YY, rY) => Math.max(YY, rY.length)), 0);
                for (let IY = 0; IY < 5; IY++) {
                  let IY = YY.sliceDoc(AY.from, Math.min(AY.to, AY.from + DY.length + RY)),
                    OY = IY.indexOf(DY);
                  if (!OY || OY > -1 && FY.indexOf(IY.slice(0, OY)) > -1) {
                    let rY = AY.firstChild;
                    for (; rY && rY.from == AY.from && rY.to - rY.from > DY.length + OY;) {
                      if (YY.sliceDoc(rY.to - DY.length, rY.to) == DY) return !1;
                      rY = rY.firstChild
                    }
                    return !0
                  }
                  let gY = AY.to == rY && AY.parent;
                  if (!gY) break;
                  AY = gY
                }
                return !1
              }(YY, aY, rY, RY)) return {
              changes: {
                insert: rY + rY,
                from: aY
              },
              effects: Qr.of(aY + rY.length),
              range: FY.n.cursor(aY + rY.length)
            }
          }
          return {
            range: OY = AY
          }
        }));
      return OY ? null : YY.update(gY, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function zr(YY, rY) {
      let DY = (0, IY.sb)(YY).resolveInner(rY + 1);
      return DY.parent && DY.from == rY
    }

    function Zr(YY, rY, DY) {
      let AY = YY.charCategorizer(rY);
      if (AY(YY.sliceDoc(rY - 1, rY)) != FY.j.Word) return rY;
      for (let IY of DY) {
        let DY = rY - IY.length;
        if (YY.sliceDoc(DY, rY) == IY && AY(YY.sliceDoc(DY - 1, DY)) != FY.j.Word) return DY
      }
      return -1
    }

    function Cr() {
      let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [nY, wY, SY.of(YY), GY, jr, PY]
    }
    const fr = [{
        key: "Ctrl-Space",
        run: pY
      }, {
        mac: "Alt-`",
        run: pY
      }, {
        mac: "Alt-i",
        run: pY
      }, {
        key: "Escape",
        run: YY => {
          let rY = YY.state.field(wY, !1);
          return !(!rY || !rY.active.some((YY => 0 != YY.state))) && (YY.dispatch({
            effects: EY.of(null)
          }), !0)
        }
      }, {
        key: "ArrowDown",
        run: qY(!0)
      }, {
        key: "ArrowUp",
        run: qY(!1)
      }, {
        key: "PageDown",
        run: qY(!0, "page")
      }, {
        key: "PageUp",
        run: qY(!1, "page")
      }, {
        key: "Enter",
        run: YY => {
          let rY = YY.state.field(wY, !1);
          return !(YY.state.readOnly || !rY || !rY.open || rY.open.selected < 0 || rY.open.disabled || Date.now() - rY.open.timestamp < YY.state.facet(SY).interactionDelay) && bY(YY, rY.open.options[rY.open.selected])
        }
      }],
      jr = FY.v.highest(AY.S.computeN([SY], (YY => YY.facet(SY).defaultKeymap ? [fr] : [])))
  },
  40529: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => aY,
      f: () => sY,
      g: () => vY,
      k: () => uY
    });
    var FY = DY(40395);
    class AY {
      constructor(YY, rY, DY, FY) {
        this.origin = YY, this.changes = rY, this.effects = DY, this.clientID = FY
      }
    }
    class IY {
      constructor(YY, rY) {
        this.version = YY, this.unconfirmed = rY
      }
    }
    const RY = FY.r.define({
        combine(YY) {
          let rY = (0, FY.Y)(YY, {
            startVersion: 0,
            clientID: null,
            sharedEffects: () => []
          }, {
            generatedID: YY => YY
          });
          return null == rY.clientID && (rY.clientID = YY.length && YY[0].generatedID || ""), rY
        }
      }),
      OY = FY.e.define(),
      gY = FY.G.define({
        create: YY => new IY(YY.facet(RY).startVersion, []),
        update(YY, rY) {
          let DY = rY.annotation(OY);
          if (DY) return DY;
          let {
            sharedEffects: FY,
            clientID: gY
          } = rY.startState.facet(RY), aY = FY(rY);
          return aY.length || !rY.changes.empty ? new IY(YY.version, YY.unconfirmed.concat(new AY(rY, rY.changes, aY, gY))) : YY
        }
      });

    function aY() {
      let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [gY, RY.of(Object.assign({
        generatedID: Math.floor(1e9 * Math.random()).toString(36)
      }, YY))]
    }

    function vY(YY, rY) {
      let {
        version: DY,
        unconfirmed: aY
      } = YY.field(gY), {
        clientID: vY
      } = YY.facet(RY);
      DY += rY.length;
      let uY = [],
        sY = null,
        iY = 0;
      for (let AY of rY) {
        let YY = iY < aY.length ? aY[iY] : null;
        YY && YY.clientID == AY.clientID ? (sY && (sY = sY.map(YY.changes, !0)), uY = FY.E.mapEffects(uY, AY.changes), iY++) : (uY = FY.E.mapEffects(uY, AY.changes), AY.effects && (uY = uY.concat(AY.effects)), sY = sY ? sY.compose(AY.changes) : AY.changes)
      }
      if (iY && (aY = aY.slice(iY)), aY.length && (sY && (aY = aY.map((YY => {
          let rY = YY.changes.map(sY);
          return sY = sY.map(YY.changes, !0), new AY(YY.origin, rY, FY.E.mapEffects(YY.effects, sY), vY)
        }))), uY.length)) {
        let YY = aY.reduce(((YY, rY) => YY.compose(rY.changes)), FY.ChangeSet.empty(aY[0].changes.length));
        uY = FY.E.mapEffects(uY, YY)
      }
      return sY ? YY.update({
        changes: sY,
        effects: uY,
        annotations: [FY.N.addToHistory.of(!1), FY.N.remote.of(!0), OY.of(new IY(DY, aY))],
        filter: !1
      }) : YY.update({
        annotations: [OY.of(new IY(DY, aY))]
      })
    }

    function uY(YY) {
      return YY.field(gY).unconfirmed
    }

    function sY(YY) {
      return YY.field(gY).version
    }
  },
  40435: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => Qr
    });
    var FY = DY(40424);
    class AY {
      constructor(YY, rY, DY, FY, AY, IY, RY, OY, gY) {
        let aY = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          vY = arguments.length > 10 ? arguments[10] : void 0;
        this.p = YY, this.stack = rY, this.state = DY, this.reducePos = FY, this.pos = AY, this.score = IY, this.buffer = RY, this.bufferBase = OY, this.curContext = gY, this.lookAhead = aY, this.parent = vY
      }
      toString() {
        return `[${this.stack.filter(((YY,rY)=>rY%3==0)).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`
      }
      static start(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          FY = YY.parser.context;
        return new AY(YY, [], rY, DY, DY, 0, [], 0, FY ? new IY(FY, FY.start) : null, 0, null)
      }
      get context() {
        return this.curContext ? this.curContext.context : null
      }
      pushState(YY, rY) {
        this.stack.push(this.state, rY, this.bufferBase + this.buffer.length), this.state = YY
      }
      reduce(YY) {
        var rY;
        let DY = YY >> 19,
          FY = 65535 & YY,
          {
            parser: AY
          } = this.p,
          IY = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos),
          RY = AY.dynamicPrecedence(FY);
        if (RY && (this.score += RY), 0 == DY) return this.pushState(AY.getGoto(this.state, FY, !0), this.reducePos), FY < AY.minRepeatTerm && this.storeNode(FY, this.reducePos, this.reducePos, IY ? 8 : 4, !0), void this.reduceContext(FY, this.reducePos);
        let OY = this.stack.length - 3 * (DY - 1) - (262144 & YY ? 6 : 0),
          gY = OY ? this.stack[OY - 2] : this.p.ws[0].from,
          aY = this.reducePos - gY;
        aY >= 2e3 && !(null === (rY = this.p.parser.nodeSet.types[FY]) || void 0 === rY ? void 0 : rY.isAnonymous) && (gY == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = aY) : this.p.lastBigReductionSize < aY && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = gY, this.p.lastBigReductionSize = aY));
        let vY = OY ? this.stack[OY - 1] : 0,
          uY = this.bufferBase + this.buffer.length - vY;
        if (FY < AY.minRepeatTerm || 131072 & YY) {
          let YY = AY.stateFlag(this.state, 1) ? this.pos : this.reducePos;
          this.storeNode(FY, gY, YY, uY + 4, !0)
        }
        if (262144 & YY) this.state = this.stack[OY];
        else {
          let YY = this.stack[OY - 3];
          this.state = AY.getGoto(YY, FY, !0)
        }
        for (; this.stack.length > OY;) this.stack.pop();
        this.reduceContext(FY, gY)
      }
      storeNode(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
          AY = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (0 == YY && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
          let YY = this,
            FY = this.buffer.length;
          if (0 == FY && YY.parent && (FY = YY.bufferBase - YY.parent.bufferBase, YY = YY.parent), FY > 0 && 0 == YY.buffer[FY - 4] && YY.buffer[FY - 1] > -1) {
            if (rY == DY) return;
            if (YY.buffer[FY - 2] >= rY) return void(YY.buffer[FY - 2] = DY)
          }
        }
        if (AY && this.pos != DY) {
          let AY = this.buffer.length;
          if (AY > 0 && (0 != this.buffer[AY - 4] || this.buffer[AY - 1] < 0)) {
            let YY = !1;
            for (let rY = AY; rY > 0 && this.buffer[rY - 2] > DY; rY -= 4)
              if (this.buffer[rY - 1] >= 0) {
                YY = !0;
                break
              } if (YY)
              for (; AY > 0 && this.buffer[AY - 2] > DY;) this.buffer[AY] = this.buffer[AY - 4], this.buffer[AY + 1] = this.buffer[AY - 3], this.buffer[AY + 2] = this.buffer[AY - 2], this.buffer[AY + 3] = this.buffer[AY - 1], AY -= 4, FY > 4 && (FY -= 4)
          }
          this.buffer[AY] = YY, this.buffer[AY + 1] = rY, this.buffer[AY + 2] = DY, this.buffer[AY + 3] = FY
        } else this.buffer.push(YY, rY, DY, FY)
      }
      shift(YY, rY, DY, FY) {
        if (131072 & YY) this.pushState(65535 & YY, this.pos);
        else if (0 == (262144 & YY)) {
          let AY = YY,
            {
              parser: IY
            } = this.p;
          this.pos = FY;
          let RY = IY.stateFlag(AY, 1);
          !RY && (FY > DY || rY <= IY.maxNode) && (this.reducePos = FY), this.pushState(AY, RY ? DY : Math.min(DY, this.reducePos)), this.shiftContext(rY, DY), rY <= IY.maxNode && this.buffer.push(rY, DY, FY, 4)
        } else this.pos = FY, this.shiftContext(rY, DY), rY <= this.p.parser.maxNode && this.buffer.push(rY, DY, FY, 4)
      }
      apply(YY, rY, DY, FY) {
        65536 & YY ? this.reduce(YY) : this.shift(YY, rY, DY, FY)
      }
      useNode(YY, rY) {
        let DY = this.p.reused.length - 1;
        (DY < 0 || this.p.reused[DY] != YY) && (this.p.reused.push(YY), DY++);
        let FY = this.pos;
        this.reducePos = this.pos = FY + YY.length, this.pushState(rY, FY), this.buffer.push(DY, FY, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, YY, this, this.p.stream.reset(this.pos - YY.length)))
      }
      split() {
        let YY = this,
          rY = YY.buffer.length;
        for (; rY > 0 && YY.buffer[rY - 2] > YY.reducePos;) rY -= 4;
        let DY = YY.buffer.slice(rY),
          FY = YY.bufferBase + rY;
        for (; YY && FY == YY.bufferBase;) YY = YY.parent;
        return new AY(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, DY, FY, this.curContext, this.lookAhead, YY)
      }
      recoverByDelete(YY, rY) {
        let DY = YY <= this.p.parser.maxNode;
        DY && this.storeNode(YY, this.pos, rY, 4), this.storeNode(0, this.pos, rY, DY ? 8 : 4), this.pos = this.reducePos = rY, this.score -= 190
      }
      canShift(YY) {
        for (let rY = new RY(this);;) {
          let DY = this.p.parser.stateSlot(rY.state, 4) || this.p.parser.hasAction(rY.state, YY);
          if (0 == DY) return !1;
          if (0 == (65536 & DY)) return !0;
          rY.reduce(DY)
        }
      }
      recoverByInsert(YY) {
        if (this.stack.length >= 300) return [];
        let rY = this.p.parser.nextStates(this.state);
        if (rY.length > 8 || this.stack.length >= 120) {
          let DY = [];
          for (let FY, AY = 0; AY < rY.length; AY += 2)(FY = rY[AY + 1]) != this.state && this.p.parser.hasAction(FY, YY) && DY.push(rY[AY], FY);
          if (this.stack.length < 120)
            for (let YY = 0; DY.length < 8 && YY < rY.length; YY += 2) {
              let FY = rY[YY + 1];
              DY.some(((YY, rY) => 1 & rY && YY == FY)) || DY.push(rY[YY], FY)
            }
          rY = DY
        }
        let DY = [];
        for (let FY = 0; FY < rY.length && DY.length < 4; FY += 2) {
          let YY = rY[FY + 1];
          if (YY == this.state) continue;
          let AY = this.split();
          AY.pushState(YY, this.pos), AY.storeNode(0, AY.pos, AY.pos, 4, !0), AY.shiftContext(rY[FY], this.pos), AY.reducePos = this.pos, AY.score -= 200, DY.push(AY)
        }
        return DY
      }
      forceReduce() {
        let {
          parser: YY
        } = this.p, rY = YY.stateSlot(this.state, 5);
        if (0 == (65536 & rY)) return !1;
        if (!YY.validAction(this.state, rY)) {
          let DY = rY >> 19,
            FY = 65535 & rY,
            AY = this.stack.length - 3 * DY;
          if (AY < 0 || YY.getGoto(this.stack[AY], FY, !1) < 0) {
            let YY = this.findForcedReduction();
            if (null == YY) return !1;
            rY = YY
          }
          this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100
        }
        return this.reducePos = this.pos, this.reduce(rY), !0
      }
      findForcedReduction() {
        let {
          parser: YY
        } = this.p, rY = [], DY = (FY, AY) => {
          if (!rY.includes(FY)) return rY.push(FY), YY.allActions(FY, (rY => {
            if (393216 & rY);
            else if (65536 & rY) {
              let DY = (rY >> 19) - AY;
              if (DY > 1) {
                let FY = 65535 & rY,
                  AY = this.stack.length - 3 * DY;
                if (AY >= 0 && YY.getGoto(this.stack[AY], FY, !1) >= 0) return DY << 19 | 65536 | FY
              }
            } else {
              let YY = DY(rY, AY + 1);
              if (null != YY) return YY
            }
          }))
        };
        return DY(this.state, 0)
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
          parser: YY
        } = this.p;
        return 65535 == YY.data[YY.stateSlot(this.state, 1)] && !YY.stateSlot(this.state, 4)
      }
      restart() {
        this.storeNode(0, this.pos, this.pos, 4, !0), this.state = this.stack[0], this.stack.length = 0
      }
      sameState(YY) {
        if (this.state != YY.state || this.stack.length != YY.stack.length) return !1;
        for (let rY = 0; rY < this.stack.length; rY += 3)
          if (this.stack[rY] != YY.stack[rY]) return !1;
        return !0
      }
      get parser() {
        return this.p.parser
      }
      dialectEnabled(YY) {
        return this.p.parser.dialect.flags[YY]
      }
      shiftContext(YY, rY) {
        this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, YY, this, this.p.stream.reset(rY)))
      }
      reduceContext(YY, rY) {
        this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, YY, this, this.p.stream.reset(rY)))
      }
      emitContext() {
        let YY = this.buffer.length - 1;
        (YY < 0 || -3 != this.buffer[YY]) && this.buffer.push(this.curContext.hash, this.pos, this.pos, -3)
      }
      emitLookAhead() {
        let YY = this.buffer.length - 1;
        (YY < 0 || -4 != this.buffer[YY]) && this.buffer.push(this.lookAhead, this.pos, this.pos, -4)
      }
      updateContext(YY) {
        if (YY != this.curContext.context) {
          let rY = new IY(this.curContext.tracker, YY);
          rY.hash != this.curContext.hash && this.emitContext(), this.curContext = rY
        }
      }
      setLookAhead(YY) {
        return !(YY <= this.lookAhead) && (this.emitLookAhead(), this.lookAhead = YY, !0)
      }
      close() {
        this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead()
      }
    }
    class IY {
      constructor(YY, rY) {
        this.tracker = YY, this.context = rY, this.hash = YY.strict ? YY.hash(rY) : 0
      }
    }
    class RY {
      constructor(YY) {
        this.start = YY, this.state = YY.state, this.stack = YY.stack, this.base = this.stack.length
      }
      reduce(YY) {
        let rY = 65535 & YY,
          DY = YY >> 19;
        0 == DY ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= 3 * (DY - 1);
        let FY = this.start.p.parser.getGoto(this.stack[this.base - 3], rY, !0);
        this.state = FY
      }
    }
    class OY {
      constructor(YY, rY, DY) {
        this.stack = YY, this.pos = rY, this.index = DY, this.buffer = YY.buffer, 0 == this.index && this.maybeNext()
      }
      static create(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YY.bufferBase + YY.buffer.length;
        return new OY(YY, rY, rY - YY.bufferBase)
      }
      maybeNext() {
        let YY = this.stack.parent;
        null != YY && (this.index = this.stack.bufferBase - YY.bufferBase, this.stack = YY, this.buffer = YY.buffer)
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
        return new OY(this.stack, this.pos, this.index)
      }
    }

    function gY(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uint16Array;
      if ("string" != typeof YY) return YY;
      let DY = null;
      for (let FY = 0, AY = 0; FY < YY.length;) {
        let IY = 0;
        for (;;) {
          let rY = YY.charCodeAt(FY++),
            DY = !1;
          if (126 == rY) {
            IY = 65535;
            break
          }
          rY >= 92 && rY--, rY >= 34 && rY--;
          let AY = rY - 32;
          if (AY >= 46 && (AY -= 46, DY = !0), IY += AY, DY) break;
          IY *= 46
        }
        DY ? DY[AY++] = IY : DY = new rY(IY)
      }
      return DY
    }
    class aY {
      constructor() {
        this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0
      }
    }
    const vY = new aY;
    class uY {
      constructor(YY, rY) {
        this.input = YY, this.ws = rY, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = vY, this.rangeIndex = 0, this.pos = this.chunkPos = rY[0].from, this.range = rY[0], this.end = rY[rY.length - 1].to, this.readNext()
      }
      resolveOffset(YY, rY) {
        let DY = this.range,
          FY = this.rangeIndex,
          AY = this.pos + YY;
        for (; AY < DY.from;) {
          if (!FY) return null;
          let YY = this.ws[--FY];
          AY -= DY.from - YY.to, DY = YY
        }
        for (; rY < 0 ? AY > DY.to : AY >= DY.to;) {
          if (FY == this.ws.length - 1) return null;
          let YY = this.ws[++FY];
          AY += YY.from - DY.to, DY = YY
        }
        return AY
      }
      clipPos(YY) {
        if (YY >= this.range.from && YY < this.range.to) return YY;
        for (let rY of this.ws)
          if (rY.to > YY) return Math.max(YY, rY.from);
        return this.end
      }
      peek(YY) {
        let rY, DY, FY = this.chunkOff + YY;
        if (FY >= 0 && FY < this.chunk.length) rY = this.pos + YY, DY = this.chunk.charCodeAt(FY);
        else {
          let FY = this.resolveOffset(YY, 1);
          if (null == FY) return -1;
          if (rY = FY, rY >= this.chunk2Pos && rY < this.chunk2Pos + this.chunk2.length) DY = this.chunk2.charCodeAt(rY - this.chunk2Pos);
          else {
            let YY = this.rangeIndex,
              FY = this.range;
            for (; FY.to <= rY;) FY = this.ws[++YY];
            this.chunk2 = this.input.chunk(this.chunk2Pos = rY), rY + this.chunk2.length > FY.to && (this.chunk2 = this.chunk2.slice(0, FY.to - rY)), DY = this.chunk2.charCodeAt(0)
          }
        }
        return rY >= this.token.lookAhead && (this.token.lookAhead = rY + 1), DY
      }
      acceptToken(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          DY = rY ? this.resolveOffset(rY, -1) : this.pos;
        if (null == DY || DY < this.token.start) throw new RangeError("Token end out of bounds");
        this.token.value = YY, this.token.end = DY
      }
      acceptTokenTo(YY, rY) {
        this.token.value = YY, this.token.end = rY
      }
      getChunk() {
        if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
          let {
            chunk: YY,
            chunkPos: rY
          } = this;
          this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = YY, this.chunk2Pos = rY, this.chunkOff = this.pos - this.chunkPos
        } else {
          this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
          let YY = this.input.chunk(this.pos),
            rY = this.pos + YY.length;
          this.chunk = rY > this.range.to ? YY.slice(0, this.range.to - this.pos) : YY, this.chunkPos = this.pos, this.chunkOff = 0
        }
      }
      readNext() {
        return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff)
      }
      advance() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        for (this.chunkOff += YY; this.pos + YY >= this.range.to;) {
          if (this.rangeIndex == this.ws.length - 1) return this.setDone();
          YY -= this.range.to - this.pos, this.range = this.ws[++this.rangeIndex], this.pos = this.range.from
        }
        return this.pos += YY, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext()
      }
      setDone() {
        return this.pos = this.chunkPos = this.end, this.range = this.ws[this.rangeIndex = this.ws.length - 1], this.chunk = "", this.next = -1
      }
      reset(YY, rY) {
        if (rY ? (this.token = rY, rY.start = YY, rY.lookAhead = YY + 1, rY.value = rY.extended = -1) : this.token = vY, this.pos != YY) {
          if (this.pos = YY, YY == this.end) return this.setDone(), this;
          for (; YY < this.range.from;) this.range = this.ws[--this.rangeIndex];
          for (; YY >= this.range.to;) this.range = this.ws[++this.rangeIndex];
          YY >= this.chunkPos && YY < this.chunkPos + this.chunk.length ? this.chunkOff = YY - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext()
        }
        return this
      }
      read(YY, rY) {
        if (YY >= this.chunkPos && rY <= this.chunkPos + this.chunk.length) return this.chunk.slice(YY - this.chunkPos, rY - this.chunkPos);
        if (YY >= this.chunk2Pos && rY <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(YY - this.chunk2Pos, rY - this.chunk2Pos);
        if (YY >= this.range.from && rY <= this.range.to) return this.input.read(YY, rY);
        let DY = "";
        for (let FY of this.ws) {
          if (FY.from >= rY) break;
          FY.to > YY && (DY += this.input.read(Math.max(FY.from, YY), Math.min(FY.to, rY)))
        }
        return DY
      }
    }
    class sY {
      constructor(YY, rY) {
        this.data = YY, this.id = rY
      }
      token(YY, rY) {
        let {
          parser: DY
        } = rY.p;
        QY(this.data, YY, rY, this.id, DY.data, DY.tokenPrecTable)
      }
    }
    sY.prototype.contextual = sY.prototype.fallback = sY.prototype.extend = !1;
    class iY {
      constructor(YY, rY, DY) {
        this.precTable = rY, this.elseToken = DY, this.data = "string" == typeof YY ? gY(YY) : YY
      }
      token(YY, rY) {
        let DY = YY.pos,
          FY = 0;
        for (;;) {
          let DY = YY.next < 0,
            AY = YY.resolveOffset(1, 1);
          if (QY(this.data, YY, rY, 0, this.data, this.precTable), YY.token.value > -1) break;
          if (null == this.elseToken) return;
          if (DY || FY++, null == AY) break;
          YY.reset(AY, YY.token)
        }
        FY && (YY.reset(DY, YY.token), YY.acceptToken(this.elseToken, FY))
      }
    }
    iY.prototype.contextual = sY.prototype.fallback = sY.prototype.extend = !1;
    class yY {
      constructor(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.token = YY, this.contextual = !!rY.contextual, this.fallback = !!rY.fallback, this.extend = !!rY.extend
      }
    }

    function QY(YY, rY, DY, FY, AY, IY) {
      let RY = 0,
        OY = 1 << FY,
        {
          dialect: gY
        } = DY.p.parser;
      YY: for (; 0 != (OY & YY[RY]);) {
        let DY = YY[RY + 1];
        for (let uY = RY + 3; uY < DY; uY += 2)
          if ((YY[uY + 1] & OY) > 0) {
            let DY = YY[uY];
            if (gY.allows(DY) && (-1 == rY.token.value || rY.token.value == DY || WY(DY, rY.token.value, AY, IY))) {
              rY.acceptToken(DY);
              break
            }
          } let FY = rY.next,
          aY = 0,
          vY = YY[RY + 2];
        if (!(rY.next < 0 && vY > aY && 65535 == YY[DY + 3 * vY - 3])) {
          for (; aY < vY;) {
            let AY = aY + vY >> 1,
              IY = DY + AY + (AY << 1),
              OY = YY[IY],
              gY = YY[IY + 1] || 65536;
            if (FY < OY) vY = AY;
            else {
              if (!(FY >= gY)) {
                RY = YY[IY + 2], rY.advance();
                continue YY
              }
              aY = AY + 1
            }
          }
          break
        }
        RY = YY[DY + 3 * vY - 1]
      }
    }

    function oY(YY, rY, DY) {
      for (let FY, AY = rY; 65535 != (FY = YY[AY]); AY++)
        if (FY == DY) return AY - rY;
      return -1
    }

    function WY(YY, rY, DY, FY) {
      let AY = oY(DY, FY, rY);
      return AY < 0 || oY(DY, FY, YY) < AY
    }
    const EY = "undefined" != typeof process && {
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
    let mY = null;

    function VY(YY, rY, DY) {
      let AY = YY.cursor(FY.e.IncludeAnonymous);
      for (AY.moveTo(rY);;)
        if (!(DY < 0 ? AY.childBefore(rY) : AY.childAfter(rY)))
          for (;;) {
            if ((DY < 0 ? AY.to < rY : AY.from > rY) && !AY.type.isError) return DY < 0 ? Math.max(0, Math.min(AY.to - 1, rY - 25)) : Math.min(YY.length, Math.max(AY.from + 1, rY + 25));
            if (DY < 0 ? AY.prevSibling() : AY.nextSibling()) break;
            if (!AY.parent()) return DY < 0 ? 0 : YY.length
          }
    }
    class SY {
      constructor(YY, rY) {
        this.fragments = YY, this.nodeSet = rY, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment()
      }
      nextFragment() {
        let YY = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
        if (YY) {
          for (this.safeFrom = YY.openStart ? VY(YY.tree, YY.from + YY.offset, 1) - YY.offset : YY.from, this.safeTo = YY.openEnd ? VY(YY.tree, YY.to + YY.offset, -1) - YY.offset : YY.to; this.trees.length;) this.trees.pop(), this.start.pop(), this.index.pop();
          this.trees.push(YY.tree), this.start.push(-YY.offset), this.index.push(0), this.nextStart = this.safeFrom
        } else this.nextStart = 1e9
      }
      nodeAt(YY) {
        if (YY < this.nextStart) return null;
        for (; this.fragment && this.safeTo <= YY;) this.nextFragment();
        if (!this.fragment) return null;
        for (;;) {
          let rY = this.trees.length - 1;
          if (rY < 0) return this.nextFragment(), null;
          let DY = this.trees[rY],
            AY = this.index[rY];
          if (AY == DY.children.length) {
            this.trees.pop(), this.start.pop(), this.index.pop();
            continue
          }
          let IY = DY.children[AY],
            RY = this.start[rY] + DY.positions[AY];
          if (RY > YY) return this.nextStart = RY, null;
          if (IY instanceof FY.w) {
            if (RY == YY) {
              if (RY < this.safeFrom) return null;
              let YY = RY + IY.length;
              if (YY <= this.safeTo) {
                let rY = IY.prop(FY.h.lookAhead);
                if (!rY || YY + rY < this.fragment.to) return IY
              }
            }
            this.index[rY]++, RY + IY.length >= Math.max(this.safeFrom, YY) && (this.trees.push(IY), this.start.push(RY), this.index.push(0))
          } else this.index[rY]++, this.nextStart = RY + IY.length
        }
      }
    }
    class lY {
      constructor(YY, rY) {
        this.stream = rY, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = YY.tokenizers.map((YY => new aY))
      }
      getActions(YY) {
        let rY = 0,
          DY = null,
          {
            parser: FY
          } = YY.p,
          {
            tokenizers: AY
          } = FY,
          IY = FY.stateSlot(YY.state, 3),
          RY = YY.curContext ? YY.curContext.hash : 0,
          OY = 0;
        for (let gY = 0; gY < AY.length; gY++) {
          if (0 == (1 << gY & IY)) continue;
          let FY = AY[gY],
            aY = this.tokens[gY];
          if ((!DY || FY.fallback) && ((FY.contextual || aY.start != YY.pos || aY.mask != IY || aY.context != RY) && (this.updateCachedToken(aY, FY, YY), aY.mask = IY, aY.context = RY), aY.lookAhead > aY.end + 25 && (OY = Math.max(aY.lookAhead, OY)), 0 != aY.value)) {
            let AY = rY;
            if (aY.extended > -1 && (rY = this.addActions(YY, aY.extended, aY.end, rY)), rY = this.addActions(YY, aY.value, aY.end, rY), !FY.extend && (DY = aY, rY > AY)) break
          }
        }
        for (; this.actions.length > rY;) this.actions.pop();
        return OY && YY.setLookAhead(OY), DY || YY.pos != this.stream.end || (DY = new aY, DY.value = YY.p.parser.eofTerm, DY.start = DY.end = YY.pos, rY = this.addActions(YY, DY.value, DY.end, rY)), this.mainToken = DY, this.actions
      }
      getMainToken(YY) {
        if (this.mainToken) return this.mainToken;
        let rY = new aY,
          {
            pos: DY,
            p: FY
          } = YY;
        return rY.start = DY, rY.end = Math.min(DY + 1, FY.stream.end), rY.value = DY == FY.stream.end ? FY.parser.eofTerm : 0, rY
      }
      updateCachedToken(YY, rY, DY) {
        let FY = this.stream.clipPos(DY.pos);
        if (rY.token(this.stream.reset(FY, YY), DY), YY.value > -1) {
          let {
            parser: rY
          } = DY.p;
          for (let FY = 0; FY < rY.specialized.length; FY++)
            if (rY.specialized[FY] == YY.value) {
              let AY = rY.specializers[FY](this.stream.read(YY.start, YY.end), DY);
              if (AY >= 0 && DY.p.parser.dialect.allows(AY >> 1)) {
                0 == (1 & AY) ? YY.value = AY >> 1 : YY.extended = AY >> 1;
                break
              }
            }
        } else YY.value = 0, YY.end = this.stream.clipPos(FY + 1)
      }
      putAction(YY, rY, DY, FY) {
        for (let AY = 0; AY < FY; AY += 3)
          if (this.actions[AY] == YY) return FY;
        return this.actions[FY++] = YY, this.actions[FY++] = rY, this.actions[FY++] = DY, FY
      }
      addActions(YY, rY, DY, FY) {
        let {
          state: AY
        } = YY, {
          parser: IY
        } = YY.p, {
          data: RY
        } = IY;
        for (let OY = 0; OY < 2; OY++)
          for (let YY = IY.stateSlot(AY, OY ? 2 : 1);; YY += 3) {
            if (65535 == RY[YY]) {
              if (1 != RY[YY + 1]) {
                0 == FY && 2 == RY[YY + 1] && (FY = this.putAction(KY(RY, YY + 2), rY, DY, FY));
                break
              }
              YY = KY(RY, YY + 2)
            }
            RY[YY] == rY && (FY = this.putAction(KY(RY, YY + 1), rY, DY, FY))
          }
        return FY
      }
    }
    class TY {
      constructor(YY, rY, DY, FY) {
        this.parser = YY, this.input = rY, this.ws = FY, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new uY(rY, FY), this.tokens = new lY(YY, this.stream), this.topTerm = YY.top[1];
        let {
          from: IY
        } = FY[0];
        this.stacks = [AY.start(this, YY.top[0], IY)], this.fragments = DY.length && this.stream.end - IY > 4 * YY.bufferLength ? new SY(DY, YY.nodeSet) : null
      }
      get parsedPos() {
        return this.minStackPos
      }
      advance() {
        let YY, rY, DY = this.stacks,
          FY = this.minStackPos,
          AY = this.stacks = [];
        if (this.bigReductionCount > 300 && 1 == DY.length) {
          let [YY] = DY;
          for (; YY.forceReduce() && YY.stack.length && YY.stack[YY.stack.length - 2] >= this.lastBigReductionStart;);
          this.bigReductionCount = this.lastBigReductionSize = 0
        }
        for (let IY = 0; IY < DY.length; IY++) {
          let RY = DY[IY];
          for (;;) {
            if (this.tokens.mainToken = null, RY.pos > FY) AY.push(RY);
            else {
              if (this.advanceStack(RY, AY, DY)) continue;
              {
                YY || (YY = [], rY = []), YY.push(RY);
                let DY = this.tokens.getMainToken(RY);
                rY.push(DY.value, DY.end)
              }
            }
            break
          }
        }
        if (!AY.length) {
          let rY = YY && function(YY) {
            let rY = null;
            for (let DY of YY) {
              let YY = DY.p.stoppedAt;
              (DY.pos == DY.p.stream.end || null != YY && DY.pos > YY) && DY.p.parser.stateFlag(DY.state, 2) && (!rY || rY.score < DY.score) && (rY = DY)
            }
            return rY
          }(YY);
          if (rY) return EY && console.log("Finish with " + this.stackID(rY)), this.stackToTree(rY);
          if (this.parser.strict) throw EY && YY && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + FY);
          this.recovering || (this.recovering = 5)
        }
        if (this.recovering && YY) {
          let DY = null != this.stoppedAt && YY[0].pos > this.stoppedAt ? YY[0] : this.runRecovery(YY, rY, AY);
          if (DY) return EY && console.log("Force-finish " + this.stackID(DY)), this.stackToTree(DY.forceAll())
        }
        if (this.recovering) {
          let YY = 1 == this.recovering ? 1 : 3 * this.recovering;
          if (AY.length > YY)
            for (AY.sort(((YY, rY) => rY.score - YY.score)); AY.length > YY;) AY.pop();
          AY.some((YY => YY.reducePos > FY)) && this.recovering--
        } else if (AY.length > 1) {
          YY: for (let YY = 0; YY < AY.length - 1; YY++) {
            let rY = AY[YY];
            for (let DY = YY + 1; DY < AY.length; DY++) {
              let FY = AY[DY];
              if (rY.sameState(FY) || rY.buffer.length > 500 && FY.buffer.length > 500) {
                if (!((rY.score - FY.score || rY.buffer.length - FY.buffer.length) > 0)) {
                  AY.splice(YY--, 1);
                  continue YY
                }
                AY.splice(DY--, 1)
              }
            }
          }
          AY.length > 12 && (AY.sort(((YY, rY) => rY.score - YY.score)), AY.splice(12, AY.length - 12))
        }
        this.minStackPos = AY[0].pos;
        for (let IY = 1; IY < AY.length; IY++) AY[IY].pos < this.minStackPos && (this.minStackPos = AY[IY].pos);
        return null
      }
      stopAt(YY) {
        if (null != this.stoppedAt && this.stoppedAt < YY) throw new RangeError("Can't move stoppedAt forward");
        this.stoppedAt = YY
      }
      advanceStack(YY, rY, DY) {
        let AY = YY.pos,
          {
            parser: IY
          } = this,
          RY = EY ? this.stackID(YY) + " -> " : "";
        if (null != this.stoppedAt && AY > this.stoppedAt) return YY.forceReduce() ? YY : null;
        if (this.fragments) {
          let rY = YY.curContext && YY.curContext.tracker.strict,
            DY = rY ? YY.curContext.hash : 0;
          for (let OY = this.fragments.nodeAt(AY); OY;) {
            let AY = this.parser.nodeSet.types[OY.type.id] == OY.type ? IY.getGoto(YY.state, OY.type.id) : -1;
            if (AY > -1 && OY.length && (!rY || (OY.prop(FY.h.contextHash) || 0) == DY)) return YY.useNode(OY, AY), EY && console.log(RY + this.stackID(YY) + ` (via reuse of ${IY.getName(OY.type.id)})`), !0;
            if (!(OY instanceof FY.w) || 0 == OY.children.length || OY.positions[0] > 0) break;
            let gY = OY.children[0];
            if (!(gY instanceof FY.w && 0 == OY.positions[0])) break;
            OY = gY
          }
        }
        let OY = IY.stateSlot(YY.state, 4);
        if (OY > 0) return YY.reduce(OY), EY && console.log(RY + this.stackID(YY) + ` (via always-reduce ${IY.getName(65535&OY)})`), !0;
        if (YY.stack.length >= 8400)
          for (; YY.stack.length > 6e3 && YY.forceReduce(););
        let gY = this.tokens.getActions(YY);
        for (let FY = 0; FY < gY.length;) {
          let OY = gY[FY++],
            aY = gY[FY++],
            vY = gY[FY++],
            uY = FY == gY.length || !DY,
            sY = uY ? YY : YY.split(),
            iY = this.tokens.mainToken;
          if (sY.apply(OY, aY, iY ? iY.start : sY.pos, vY), EY && console.log(RY + this.stackID(sY) + ` (via ${0==(65536&OY)?"shift":`reduce of ${IY.getName(65535&OY)}`} for ${IY.getName(aY)} @ ${AY}${sY==YY?"":", split"})`), uY) return !0;
          sY.pos > AY ? rY.push(sY) : DY.push(sY)
        }
        return !1
      }
      advanceFully(YY, rY) {
        let DY = YY.pos;
        for (;;) {
          if (!this.advanceStack(YY, null, null)) return !1;
          if (YY.pos > DY) return eY(YY, rY), !0
        }
      }
      runRecovery(YY, rY, DY) {
        let FY = null,
          AY = !1;
        for (let IY = 0; IY < YY.length; IY++) {
          let RY = YY[IY],
            OY = rY[IY << 1],
            gY = rY[1 + (IY << 1)],
            aY = EY ? this.stackID(RY) + " -> " : "";
          if (RY.deadEnd) {
            if (AY) continue;
            if (AY = !0, RY.restart(), EY && console.log(aY + this.stackID(RY) + " (restarted)"), this.advanceFully(RY, DY)) continue
          }
          let vY = RY.split(),
            uY = aY;
          for (let YY = 0; YY < 10 && vY.forceReduce(); YY++) {
            if (EY && console.log(uY + this.stackID(vY) + " (via force-reduce)"), this.advanceFully(vY, DY)) break;
            EY && (uY = this.stackID(vY) + " -> ")
          }
          for (let YY of RY.recoverByInsert(OY)) EY && console.log(aY + this.stackID(YY) + " (via recover-insert)"), this.advanceFully(YY, DY);
          this.stream.end > RY.pos ? (gY == RY.pos && (gY++, OY = 0), RY.recoverByDelete(OY, gY), EY && console.log(aY + this.stackID(RY) + ` (via recover-delete ${this.parser.getName(OY)})`), eY(RY, DY)) : (!FY || FY.score < vY.score) && (FY = vY)
        }
        return FY
      }
      stackToTree(YY) {
        return YY.close(), FY.w.build({
          buffer: OY.create(YY),
          nodeSet: this.parser.nodeSet,
          topID: this.topTerm,
          maxBufferLength: this.parser.bufferLength,
          reused: this.reused,
          start: this.ws[0].from,
          length: YY.pos - this.ws[0].from,
          minRepeatType: this.parser.minRepeatTerm
        })
      }
      stackID(YY) {
        let rY = (mY || (mY = new WeakMap)).get(YY);
        return rY || mY.set(YY, rY = String.fromCodePoint(this.nextStackID++)), rY + YY
      }
    }

    function eY(YY, rY) {
      for (let DY = 0; DY < rY.length; DY++) {
        let FY = rY[DY];
        if (FY.pos == YY.pos && FY.sameState(YY)) return void(rY[DY].score < YY.score && (rY[DY] = YY))
      }
      rY.push(YY)
    }
    class NY {
      constructor(YY, rY, DY) {
        this.source = YY, this.flags = rY, this.disabled = DY
      }
      allows(YY) {
        return !this.disabled || 0 == this.disabled[YY]
      }
    }
    const BY = YY => YY;
    class cY extends FY.s {
      constructor(YY) {
        if (super(), this.wrappers = [], 14 != YY.version) throw new RangeError(`Parser version (${YY.version}) doesn't match runtime version (14)`);
        let rY = YY.nodeNames.split(" ");
        this.minRepeatTerm = rY.length;
        for (let FY = 0; FY < YY.repeatNodeCount; FY++) rY.push("");
        let DY = Object.keys(YY.topRules).map((rY => YY.topRules[rY][1])),
          AY = [];
        for (let FY = 0; FY < rY.length; FY++) AY.push([]);

        function IY(YY, rY, DY) {
          AY[YY].push([rY, rY.deserialize(String(DY))])
        }
        if (YY.nodeProps)
          for (let OY of YY.nodeProps) {
            let YY = OY[0];
            "string" == typeof YY && (YY = FY.h[YY]);
            for (let rY = 1; rY < OY.length;) {
              let DY = OY[rY++];
              if (DY >= 0) IY(DY, YY, OY[rY++]);
              else {
                let FY = OY[rY + -DY];
                for (let AY = -DY; AY > 0; AY--) IY(OY[rY++], YY, FY);
                rY++
              }
            }
          }
        this.nodeSet = new FY.k(rY.map(((rY, IY) => FY.l.define({
          name: IY >= this.minRepeatTerm ? void 0 : rY,
          id: IY,
          props: AY[IY],
          top: DY.indexOf(IY) > -1,
          error: 0 == IY,
          skipped: YY.skippedNodes && YY.skippedNodes.indexOf(IY) > -1
        })))), YY.propSources && (this.nodeSet = this.nodeSet.extend(...YY.propSources)), this.strict = !1, this.bufferLength = FY.c;
        let RY = gY(YY.tokenData);
        this.context = YY.context, this.specializerSpecs = YY.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
        for (let FY = 0; FY < this.specializerSpecs.length; FY++) this.specialized[FY] = this.specializerSpecs[FY].term;
        this.specializers = this.specializerSpecs.map(HY), this.states = gY(YY.states, Uint32Array), this.data = gY(YY.stateData), this.goto = gY(YY.goto), this.maxTerm = YY.maxTerm, this.tokenizers = YY.tokenizers.map((YY => "number" == typeof YY ? new sY(RY, YY) : YY)), this.topRules = YY.topRules, this.dialects = YY.dialects || {}, this.dynamicPrecedences = YY.dynamicPrecedences || null, this.tokenPrecTable = YY.tokenPrec, this.termNames = YY.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]]
      }
      createParse(YY, rY, DY) {
        let FY = new TY(this, YY, rY, DY);
        for (let AY of this.wrappers) FY = AY(FY, YY, rY, DY);
        return FY
      }
      getGoto(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          FY = this.goto;
        if (rY >= FY[0]) return -1;
        for (let AY = FY[rY + 1];;) {
          let rY = FY[AY++],
            IY = 1 & rY,
            RY = FY[AY++];
          if (IY && DY) return RY;
          for (let DY = AY + (rY >> 1); AY < DY; AY++)
            if (FY[AY] == YY) return RY;
          if (IY) return -1
        }
      }
      hasAction(YY, rY) {
        let DY = this.data;
        for (let FY = 0; FY < 2; FY++)
          for (let AY, IY = this.stateSlot(YY, FY ? 2 : 1);; IY += 3) {
            if (65535 == (AY = DY[IY])) {
              if (1 != DY[IY + 1]) {
                if (2 == DY[IY + 1]) return KY(DY, IY + 2);
                break
              }
              AY = DY[IY = KY(DY, IY + 2)]
            }
            if (AY == rY || 0 == AY) return KY(DY, IY + 1)
          }
        return 0
      }
      stateSlot(YY, rY) {
        return this.states[6 * YY + rY]
      }
      stateFlag(YY, rY) {
        return (this.stateSlot(YY, 0) & rY) > 0
      }
      validAction(YY, rY) {
        return !!this.allActions(YY, (YY => YY == rY || null))
      }
      allActions(YY, rY) {
        let DY = this.stateSlot(YY, 4),
          FY = DY ? rY(DY) : void 0;
        for (let AY = this.stateSlot(YY, 1); null == FY; AY += 3) {
          if (65535 == this.data[AY]) {
            if (1 != this.data[AY + 1]) break;
            AY = KY(this.data, AY + 2)
          }
          FY = rY(KY(this.data, AY + 1))
        }
        return FY
      }
      nextStates(YY) {
        let rY = [];
        for (let DY = this.stateSlot(YY, 1);; DY += 3) {
          if (65535 == this.data[DY]) {
            if (1 != this.data[DY + 1]) break;
            DY = KY(this.data, DY + 2)
          }
          if (0 == (1 & this.data[DY + 2])) {
            let YY = this.data[DY + 1];
            rY.some(((rY, DY) => 1 & DY && rY == YY)) || rY.push(this.data[DY], YY)
          }
        }
        return rY
      }
      configure(YY) {
        let rY = Object.assign(Object.create(cY.prototype), this);
        if (YY.props && (rY.nodeSet = this.nodeSet.extend(...YY.props)), YY.top) {
          let DY = this.topRules[YY.top];
          if (!DY) throw new RangeError(`Invalid top rule name ${YY.top}`);
          rY.top = DY
        }
        return YY.tokenizers && (rY.tokenizers = this.tokenizers.map((rY => {
          let DY = YY.tokenizers.find((YY => YY.from == rY));
          return DY ? DY.to : rY
        }))), YY.specializers && (rY.specializers = this.specializers.slice(), rY.specializerSpecs = this.specializerSpecs.map(((DY, FY) => {
          let AY = YY.specializers.find((YY => YY.from == DY.external));
          if (!AY) return DY;
          let IY = Object.assign(Object.assign({}, DY), {
            external: AY.to
          });
          return rY.specializers[FY] = HY(IY), IY
        }))), YY.contextTracker && (rY.context = YY.contextTracker), YY.dialect && (rY.dialect = this.parseDialect(YY.dialect)), null != YY.strict && (rY.strict = YY.strict), YY.wrap && (rY.wrappers = rY.wrappers.concat(YY.wrap)), null != YY.bufferLength && (rY.bufferLength = YY.bufferLength), rY
      }
      hasWrappers() {
        return this.wrappers.length > 0
      }
      getName(YY) {
        return this.termNames ? this.termNames[YY] : String(YY <= this.maxNode && this.nodeSet.types[YY].name || YY)
      }
      get eofTerm() {
        return this.maxNode + 1
      }
      get topNode() {
        return this.nodeSet.types[this.top[1]]
      }
      dynamicPrecedence(YY) {
        let rY = this.dynamicPrecedences;
        return null == rY ? 0 : rY[YY] || 0
      }
      parseDialect(YY) {
        let rY = Object.keys(this.dialects),
          DY = rY.map((() => !1));
        if (YY)
          for (let AY of YY.split(" ")) {
            let YY = rY.indexOf(AY);
            YY >= 0 && (DY[YY] = !0)
          }
        let FY = null;
        for (let AY = 0; AY < rY.length; AY++)
          if (!DY[AY])
            for (let YY, DY = this.dialects[rY[AY]]; 65535 != (YY = this.data[DY++]);)(FY || (FY = new Uint8Array(this.maxTerm + 1)))[YY] = 1;
        return new NY(YY, DY, FY)
      }
      static deserialize(YY) {
        return new cY(YY)
      }
    }

    function KY(YY, rY) {
      return YY[rY] | YY[rY + 1] << 16
    }

    function HY(YY) {
      if (YY.external) {
        let rY = YY.extend ? 1 : 0;
        return (DY, FY) => YY.external(DY, FY) << 1 | rY
      }
      return YY.get
    }
    var zY = DY(40431);
    const ZY = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288],
      CY = new class {
        constructor(YY) {
          this.start = YY.start, this.shift = YY.shift || BY, this.reduce = YY.reduce || BY, this.reuse = YY.reuse || BY, this.hash = YY.hash || (() => 0), this.strict = !1 !== YY.strict
        }
      }({
        start: !1,
        shift: (YY, rY) => 5 == rY || 6 == rY || 320 == rY ? YY : 321 == rY,
        strict: !1
      }),
      fY = new yY(((YY, rY) => {
        let {
          next: DY
        } = YY;
        (125 == DY || -1 == DY || rY.context) && YY.acceptToken(318)
      }), {
        contextual: !0,
        fallback: !0
      }),
      jY = new yY(((YY, rY) => {
        let DY, {
          next: FY
        } = YY;
        ZY.indexOf(FY) > -1 || (47 != FY || 47 != (DY = YY.peek(1)) && 42 != DY) && (125 == FY || 59 == FY || -1 == FY || rY.context || YY.acceptToken(316))
      }), {
        contextual: !0
      }),
      hY = new yY(((YY, rY) => {
        91 != YY.next || rY.context || YY.acceptToken(317)
      }), {
        contextual: !0
      }),
      dY = new yY(((YY, rY) => {
        let {
          next: DY
        } = YY;
        if (43 == DY || 45 == DY) {
          if (YY.advance(), DY == YY.next) {
            YY.advance();
            let DY = !rY.context && rY.canShift(1);
            YY.acceptToken(DY ? 1 : 2)
          }
        } else 63 == DY && 46 == YY.peek(1) && (YY.advance(), YY.advance(), (YY.next < 48 || YY.next > 57) && YY.acceptToken(3))
      }), {
        contextual: !0
      });

    function JY(YY, rY) {
      return YY >= 65 && YY <= 90 || YY >= 97 && YY <= 122 || 95 == YY || YY >= 192 || !rY && YY >= 48 && YY <= 57
    }
    const MY = new yY(((YY, rY) => {
        if (60 != YY.next || !rY.dialectEnabled(0)) return;
        if (YY.advance(), 47 == YY.next) return;
        let DY = 0;
        for (; ZY.indexOf(YY.next) > -1;) YY.advance(), DY++;
        if (JY(YY.next, !0)) {
          for (YY.advance(), DY++; JY(YY.next, !1);) YY.advance(), DY++;
          for (; ZY.indexOf(YY.next) > -1;) YY.advance(), DY++;
          if (44 == YY.next) return;
          for (let rY = 0;; rY++) {
            if (7 == rY) {
              if (!JY(YY.next, !0)) return;
              break
            }
            if (YY.next != "extends".charCodeAt(rY)) break;
            YY.advance(), DY++
          }
        }
        YY.acceptToken(4, -DY)
      })),
      wY = (0, zY.e)({
        "get set async static": zY.j.modifier,
        "for while do if else switch try catch finally return throw break continue default case defer": zY.j.controlKeyword,
        "in of await yield void typeof delete instanceof as satisfies": zY.j.operatorKeyword,
        "let var const using function class extends": zY.j.definitionKeyword,
        "import export from": zY.j.moduleKeyword,
        "with debugger new": zY.j.keyword,
        TemplateString: zY.j.special(zY.j.string),
        super: zY.j.atom,
        BooleanLiteral: zY.j.bool,
        this: zY.j.self,
        null: zY.j.null,
        Star: zY.j.modifier,
        VariableName: zY.j.variableName,
        "CallExpression/VariableName TaggedTemplateExpression/VariableName": zY.j.function(zY.j.variableName),
        VariableDefinition: zY.j.definition(zY.j.variableName),
        Label: zY.j.labelName,
        PropertyName: zY.j.propertyName,
        PrivatePropertyName: zY.j.special(zY.j.propertyName),
        "CallExpression/MemberExpression/PropertyName": zY.j.function(zY.j.propertyName),
        "FunctionDeclaration/VariableDefinition": zY.j.function(zY.j.definition(zY.j.variableName)),
        "ClassDeclaration/VariableDefinition": zY.j.definition(zY.j.className),
        "NewExpression/VariableName": zY.j.className,
        PropertyDefinition: zY.j.definition(zY.j.propertyName),
        PrivatePropertyDefinition: zY.j.definition(zY.j.special(zY.j.propertyName)),
        UpdateOp: zY.j.updateOperator,
        "LineComment Hashbang": zY.j.lineComment,
        BlockComment: zY.j.blockComment,
        Number: zY.j.number,
        String: zY.j.string,
        Escape: zY.j.escape,
        ArithOp: zY.j.arithmeticOperator,
        LogicOp: zY.j.logicOperator,
        BitOp: zY.j.bitwiseOperator,
        CompareOp: zY.j.compareOperator,
        RegExp: zY.j.regexp,
        Equals: zY.j.definitionOperator,
        Arrow: zY.j.function(zY.j.punctuation),
        ": Spread": zY.j.punctuation,
        "( )": zY.j.paren,
        "[ ]": zY.j.squareBracket,
        "{ }": zY.j.brace,
        "InterpolationStart InterpolationEnd": zY.j.special(zY.j.brace),
        ".": zY.j.derefOperator,
        ", ;": zY.j.separator,
        "@": zY.j.meta,
        TypeName: zY.j.typeName,
        TypeDefinition: zY.j.definition(zY.j.typeName),
        "type enum interface implements namespace module declare": zY.j.definitionKeyword,
        "abstract global Privacy readonly override": zY.j.modifier,
        "is keyof unique infer asserts": zY.j.operatorKeyword,
        JSXAttributeValue: zY.j.attributeValue,
        JSXText: zY.j.content,
        "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": zY.j.angleBracket,
        "JSXIdentifier JSXNameSpacedName": zY.j.tagName,
        "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": zY.j.attributeName,
        "JSXBuiltin/JSXIdentifier": zY.j.standard(zY.j.tagName)
      }),
      bY = {
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
      XY = {
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
      qY = {
        __proto__: null,
        "<": 193
      },
      pY = cY.deserialize({
        version: 14,
        states: "$F|Q%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Il'#IlO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JrO6[Q!0MxO'#JsO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO9XQMhO'#F|O9`Q`O'#F{OOQ!0Lf'#Js'#JsOOQ!0Lb'#Jr'#JrO9eQ`O'#GwOOQ['#K_'#K_O9pQ`O'#IYO9uQ!0LrO'#IZOOQ['#J`'#J`OOQ['#I_'#I_Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GsO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EyO;hQMhO'#FeO;xQ`O'#GsOOQO'#K`'#K`O;}Q`O'#K`O<]Q`O'#G{O<]Q`O'#G|O<]Q`O'#HOO9kQ`O'#HRO=SQ`O'#HUO>kQ`O'#CeO>{Q`O'#HcO?TQ`O'#HiO?TQ`O'#HkO`QlO'#HmO?TQ`O'#HoO?TQ`O'#HrO?YQ`O'#HxO?_Q!0LsO'#IOO%[QlO'#IQO?jQ!0LsO'#ISO?uQ!0LsO'#IUO9uQ!0LrO'#IWO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jv'#JvO%[QlO'#JvOOQO'#Jy'#JyOOQO'#Ih'#IhOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J}'#J}OC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jx'#JxODlQpO'#JyOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CD})CD}OOOO'#I`'#I`OFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ia'#IaOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Ic'#IcOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IdOGyQ`O'#JtOIxQ!fO'#JtO+}QlO'#JtOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KTOKPQ`O'#KSOKPQ`O'#KSOKXQ`O,5;^OK^Q`O'#KROOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KQONtQ`O'#KPO9eQ`O'#KPO! YQ`O'#KPO! bQ`O,5;]O! gQ`O'#KPO!#lQ!fO'#JsOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#Jz'#JzOOQO-E<j-E<jO9kQ`O,5=_O!$rQ`O,5=_O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;dO!(|QpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)[QlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IpO!+_Q!0LrO,5<iO%[QlO,5;eO!&zQMhO,5;eO!+|QMhO,5;eO!-nQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-uQ,UO'#FjO!.rQ,UO'#KXO!.^Q,UO'#KXO!.yQ,UO'#KXOOQO'#KX'#KXO!/_Q,UO,5<SOOOW,5<`,5<`O!/pQlO'#FvOOOW'#Io'#IoO7VO7dO,5<QO!/wQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<eO!1pQ`O,5<hO!3YQ(CWO'#GXO!3jQ`O'#GYO!3oQ`O'#GYO!5_Q(CWO'#G^O!6dQpO'#GbOOQO'#Gn'#GnO!,TQMhO'#GmOOQO'#Gp'#GpO!,TQMhO'#GoO!7VQ$IUO'#JlOOQ!0Lh'#Jl'#JlO!7aQ`O'#JkO!7oQ`O'#JjO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<eO1SQ`O'#DZO!,TQMhO'#GPO!,TQMhO'#GRO!8gQ`O'#GTO!8lQ`O'#GUO!3oQ`O'#G[O!,TQMhO'#GaO<]Q`O'#JkO!8qQ`O'#EqO!9`Q`O,5<gOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KR'#KRO!:iQ!0LrO'#KaO9uQ!0LrO,5=cO`QlO,5>tOOQ['#Jh'#JhOOQ[,5>u,5>uOOQ[-E<]-E<]O!<hQ!0MxO,5:bO!:]QpO,5:`O!?RQ!0MxO,5:jO%[QlO,5:jO!AiQ!0MxO,5:lOOQO,5@z,5@zO!BYQMhO,5=_O!BhQ!0LrO'#JiO9`Q`O'#JiO!ByQ!0LrO,59ZO!CUQpO,59ZO!C^QMhO,59ZO:dQMhO,59ZO!CiQ`O,5;ZO!CqQ`O'#HbO!DVQ`O'#KdO%[QlO,5;}O!:]QpO,5<PO!D_Q`O,5=zO!DdQ`O,5=zO!DiQ`O,5=zO!DwQ`O,5=zO9uQ!0LrO,5=zO<]Q`O,5=jOOQO'#Cy'#CyO!EOQpO,5=gO!EWQMhO,5=hO!EcQ`O,5=jO!EhQ!bO,5=mO!EpQ`O'#K`O?YQ`O'#HWO9kQ`O'#HYO!EuQ`O'#HYO:dQMhO'#H[O!EzQ`O'#H[OOQ[,5=p,5=pO!FPQ`O'#H]O!FbQ`O'#CoO!FgQ`O,59PO!FqQ`O,59PO!HvQlO,59POOQ[,59P,59PO!IWQ!0LrO,59PO%[QlO,59PO!KcQlO'#HeOOQ['#Hf'#HfOOQ['#Hg'#HgO`QlO,5=}O!KyQ`O,5=}O`QlO,5>TO`QlO,5>VO!LOQ`O,5>XO`QlO,5>ZO!LTQ`O,5>^O!LYQlO,5>dOOQ[,5>j,5>jO%[QlO,5>jO9uQ!0LrO,5>lOOQ[,5>n,5>nO#!dQ`O,5>nOOQ[,5>p,5>pO#!dQ`O,5>pOOQ[,5>r,5>rO##QQpO'#D_O%[QlO'#JvO##sQpO'#JvO##}QpO'#DmO#$`QpO'#DmO#&qQlO'#DmO#&xQ`O'#JuO#'QQ`O,5:WO#'VQ`O'#EtO#'eQ`O'#KUO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CUQpO,5;YO!C^QMhO,5;YO:dQMhO,5;YO#(`Q`O,5@bO#(eQ07dO,5:sOOQO-E<f-E<fO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!ByQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CUQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I^'#I^P#+RO&2DjO,58|POOO,58|,58|OOOO-E<^-E<^OOQ!0Lh1G.p1G.pOOOO-E<_-E<_OOOO,59},59}O#+^Q!bO,59}OOOO-E<a-E<aOOQ!0Lf1G/g1G/gO#+cQ!fO,5?OO+}QlO,5?OOOQO,5?U,5?UO#+mQlO'#IdOOQO-E<b-E<bO#+zQ`O,5@`O#,SQ!fO,5@`O#,ZQ`O,5@nOOQ!0Lf1G/m1G/mO%[QlO,5@oO#,cQ`O'#IjOOQO-E<h-E<hO#,ZQ`O,5@nOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@lO#,wQ!0LrO,5@lO#-YQ!0LrO,5@lO#-aQ`O,5@kO9eQ`O,5@kO#-iQ`O,5@kO#-wQ`O'#ImO#-aQ`O,5@kOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2yO9kQ`O1G2yOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0rQ!0MzO'#JlO!$wQlO1G0uO#2}Q!fO'#JwO%[QlO'#JwO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#3^Q`O1G1OO#5rQ!0MxO1G1PO#5yQ!0MxO1G1PO#8aQ!0MxO1G1PO#8hQ!0MxO1G1PO#;OQ!0MxO1G1PO#=fQ!0MxO1G1PO#=mQ!0MxO1G1PO#=tQ!0MxO1G1PO#@[Q!0MxO1G1PO#@cQ!0MxO1G1PO#BpQ?MtO'#CiO#DkQ?MtO1G1`O#DrQ?MtO'#JsO#EVQ!0MxO,5?[OOQ!0Lb-E<n-E<nO#GdQ!0MxO1G1PO#HaQ!0MzO1G1POOQ!0Lf1G1P1G1PO#IdQMjO'#J|O#InQ`O,5:xO#IsQ!0MxO1G1cO#JgQ,UO,5<WO#JoQ,UO,5<XO#JwQ,UO'#FoO#K`Q`O'#FnOOQO'#KY'#KYOOQO'#In'#InO#KeQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#KvQ?MtO'#JrO#LQQ`O,5<bO!)[QlO,5<bOOOW-E<m-E<mOOQ!0Lf1G1l1G1lO#LVQpO'#KXOOQ!0Lf,5<d,5<dO#L_QpO,5<dO#LdQMhO'#DTOOOO'#Ib'#IbO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8lQ`O'#IrO#LvQ`O,5<zOOQ!0Lh,5<w,5<wO!,TQMhO'#IuO#MdQMjO,5=XO!,TQMhO'#IwO#NVQMjO,5=ZO!&zQMhO,5=]OOQO1G2S1G2SO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GbO$!dQ!dO,5<sO$!kQ`O'#K[O9eQ`O'#K[O$!yQ`O,5<uO$#aQ!dO'#C{O!,TQMhO,5<tO$#kQ`O'#GZO$$PQ`O,5<tO$$UQ!dO'#GWO$$cQ!dO'#K]O$$mQ`O'#K]O!&zQMhO'#K]O$$rQ`O,5<xO$$wQlO'#JvO$%RQpO'#GcO#$`QpO'#GcO$%dQ`O'#GgO!3oQ`O'#GkO$%iQ!0LrO'#ItO$%tQpO,5<|OOQ!0Lp,5<|,5<|O$%{QpO'#GcO$&YQpO'#GdO$&kQpO'#GdO$&pQMjO,5=XO$'QQMjO,5=ZOOQ!0Lh,5=^,5=^O!,TQMhO,5@VO!,TQMhO,5@VO$'bQ`O'#IyO$'vQ`O,5@UO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@VO$)TQ$IYO,59uOOQ!0Lh'#Jp'#JpO$)vQMjO,5<kO$*iQMjO,5<mO@zQ`O,5<oOOQ!0Lh,5<p,5<pO$*sQ`O,5<vO$*xQMjO,5<{O$+YQ`O'#KPO!$wQlO1G2RO$+_Q`O1G2RO9eQ`O'#KSO9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I{O$+dQ!0LrO,5@{OOQ[1G2}1G2}OOQ[1G4`1G4`OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-fQ!0MxO1G0UOOQ[1G2y1G2yO!&zQMhO1G2yO%[QlO1G2yO#.tQ`O1G2yO$/jQMhO'#EkOOQ!0Lb,5@T,5@TO$/wQ!0LrO,5@TOOQ[1G.u1G.uO!ByQ!0LrO1G.uO!CUQpO1G.uO!C^QMhO1G.uO$0YQ`O1G0uO$0_Q`O'#CiO$0jQ`O'#KeO$0rQ`O,5=|O$0wQ`O'#KeO$0|Q`O'#KeO$1[Q`O'#JRO$1jQ`O,5AOO$1rQ!fO1G1iOOQ!0Lf1G1k1G1kO9kQ`O1G3fO@zQ`O1G3fO$1yQ`O1G3fO$2OQ`O1G3fO!DiQ`O1G3fO9uQ!0LrO1G3fOOQ[1G3f1G3fO!EcQ`O1G3UO!&zQMhO1G3RO$2TQ`O1G3ROOQ[1G3S1G3SO!&zQMhO1G3SO$2YQ`O1G3SO$2bQpO'#HQOOQ[1G3U1G3UO!6_QpO'#I}O!EhQ!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$2jQMhO,5=tO9kQ`O,5=tO$%dQ`O,5=vO9`Q`O,5=vO!CUQpO,5=vO!C^QMhO,5=vO:dQMhO,5=vO$2xQ`O'#KcO$3TQ`O,5=wOOQ[1G.k1G.kO$3YQ!0LrO1G.kO@zQ`O1G.kO$3eQ`O1G.kO9uQ!0LrO1G.kO$5mQ!fO,5AQO$5zQ`O,5AQO9eQ`O,5AQO$6VQlO,5>PO$6^Q`O,5>POOQ[1G3i1G3iO`QlO1G3iOOQ[1G3o1G3oOOQ[1G3q1G3qO?TQ`O1G3sO$6cQlO1G3uO$:gQlO'#HtOOQ[1G3x1G3xO$:tQ`O'#HzO?YQ`O'#H|OOQ[1G4O1G4OO$:|QlO1G4OO9uQ!0LrO1G4UOOQ[1G4W1G4WOOQ!0Lb'#G_'#G_O9uQ!0LrO1G4YO9uQ!0LrO1G4[O$?TQ`O,5@bO!)[QlO,5;`O9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CUQpO,5:XO$?YQ?MtO,5:XOOQO,5;`,5;`O$?dQpO'#IeO$?zQ`O,5@aOOQ!0Lf1G/r1G/rO$@SQpO'#IkO$@^Q`O,5@pOOQ!0Lb1G0y1G0yO#$`QpO,5:XOOQO'#Ig'#IgO$@fQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CUQpO1G0tO!C^QMhO1G0tOOQ!0Lb1G5|1G5|O!ByQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@mQ!0LrO1G0mO$@xQ!0LrO1G0mO!CUQpO1G0^ODWQpO1G0^O$AWQ!0LrO1G0mOOQO1G0^1G0^O$AlQ!0MxO1G0mPOOO-E<[-E<[POOO1G.h1G.hOOOO1G/i1G/iO$AvQ!bO,5<iO$BOQ!fO1G4jOOQO1G4p1G4pO%[QlO,5?OO$BYQ`O1G5zO$BbQ`O1G6YO$BjQ!fO1G6ZO9eQ`O,5?UO$BtQ!0MxO1G6WO%[QlO1G6WO$CUQ!0LrO1G6WO$CgQ`O1G6VO$CgQ`O1G6VO9eQ`O1G6VO$CoQ`O,5?XO9eQ`O,5?XOOQO,5?X,5?XO$DTQ`O,5?XO$+YQ`O,5?XOOQO-E<k-E<kOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(e7+(eO!&zQMhO7+(eO%[QlO7+(eO$DcQ`O7+(eO$DnQMhO7+(eO$D|Q!0MzO,5=XO$GXQ!0MzO,5=ZO$IdQ!0MzO,5=XO$KuQ!0MzO,5=ZO$NWQ!0MzO,59uO%!]Q!0MzO,5<kO%$hQ!0MzO,5<mO%&sQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%)UQ!0MxO7+&aO%)xQlO'#IfO%*VQ`O,5@cO%*_Q!fO,5@cOOQ!0Lf1G0P1G0PO%*iQ`O7+&jOOQ!0Lf7+&j7+&jO%*nQ?MtO,5:fO%[QlO7+&zO%*xQ?MtO,5:bO%+VQ?MtO,5:jO%+aQ?MtO,5:lO%+kQMhO'#IiO%+uQ`O,5@hOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%+}Q!jO,5<ZO!)[QlO,5<YOOQO-E<l-E<lOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%,YQ`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%,_Q!dO,59oOOOO-E<`-E<`OOQ!0Lh1G/X1G/XO%,fQ!0MxO7+'kOOQ!0Lh,5?^,5?^O%-YQMhO1G2fP%-aQ`O'#IrPOQ!0Lh-E<p-E<pO%-}QMjO,5?aOOQ!0Lh-E<s-E<sO%.pQMjO,5?cOOQ!0Lh-E<u-E<uO%.zQ!dO1G2wO%/RQ!dO'#CrO%/iQMhO'#KSO$$wQlO'#JvOOQ!0Lh1G2_1G2_O%/sQ`O'#IqO%0[Q`O,5@vO%0[Q`O,5@vO%0dQ`O,5@vO%0oQ`O,5@vOOQO1G2a1G2aO%0}QMjO1G2`O$+YQ`O'#K[O!,TQMhO1G2`O%1_Q(CWO'#IsO%1lQ`O,5@wO!&zQMhO,5@wO%1tQ!dO,5@wOOQ!0Lh1G2d1G2dO%4UQ!fO'#CiO%4`Q`O,5=POOQ!0Lb,5<},5<}O%4hQpO,5<}OOQ!0Lb,5=O,5=OOCwQ`O,5<}O%4sQpO,5<}OOQ!0Lb,5=R,5=RO$+YQ`O,5=VOOQO,5?`,5?`OOQO-E<r-E<rOOQ!0Lp1G2h1G2hO#$`QpO,5<}O$$wQlO,5=PO%5RQ`O,5=OO%5^QpO,5=OO!,TQMhO'#IuO%6WQMjO1G2sO!,TQMhO'#IwO%6yQMjO1G2uO%7TQMjO1G5qO%7_QMjO1G5qOOQO,5?e,5?eOOQO-E<w-E<wOOQO1G.{1G.{O!,TQMhO1G5qO!,TQMhO1G5qO!:]QpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%7lQ`O1G2ZO!,TQMhO1G2bO%7qQ!0MxO7+'mOOQ!0Lf7+'m7+'mO!$wQlO7+'mO%8eQ`O,5;`OOQ!0Lb,5?g,5?gOOQ!0Lb-E<y-E<yO%8jQ!dO'#K^O#(ZQ`O7+(eO4UQ!fO7+(eO$DfQ`O7+(eO%8tQ!0MvO'#CiO%9XQ!0MvO,5=SO%9lQ`O,5=SO%9tQ`O,5=SOOQ!0Lb1G5o1G5oOOQ[7+$a7+$aO!ByQ!0LrO7+$aO!CUQpO7+$aO!$wQlO7+&aO%9yQ`O'#JQO%:bQ`O,5APOOQO1G3h1G3hO9kQ`O,5APO%:bQ`O,5APO%:jQ`O,5APOOQO,5?m,5?mOOQO-E=P-E=POOQ!0Lf7+'T7+'TO%:oQ`O7+)QO9uQ!0LrO7+)QO9kQ`O7+)QO@zQ`O7+)QO%:tQ`O7+)QOOQ[7+)Q7+)QOOQ[7+(p7+(pO%:yQ!0MvO7+(mO!&zQMhO7+(mO!E^Q`O7+(nOOQ[7+(n7+(nO!&zQMhO7+(nO%;TQ`O'#KbO%;`Q`O,5=lOOQO,5?i,5?iOOQO-E<{-E<{OOQ[7+(s7+(sO%<rQpO'#HZOOQ[1G3`1G3`O!&zQMhO1G3`O%[QlO1G3`O%<yQ`O1G3`O%=UQMhO1G3`O9uQ!0LrO1G3bO$%dQ`O1G3bO9`Q`O1G3bO!CUQpO1G3bO!C^QMhO1G3bO%=dQ`O'#JPO%=xQ`O,5@}O%>QQpO,5@}OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>]Q`O7+$VO%[QlO1G6lO%[QlO1G6mO%>bQ!0LrO1G6lO%>lQlO1G3kO%>sQ`O1G3kO%>xQlO1G3kOOQ[7+)T7+)TO9uQ!0LrO7+)_O`QlO7+)aOOQ['#Kh'#KhOOQ['#JS'#JSO%?PQlO,5>`OOQ[,5>`,5>`O%[QlO'#HuO%?^Q`O'#HwOOQ[,5>f,5>fO9eQ`O,5>fOOQ[,5>h,5>hOOQ[7+)j7+)jOOQ[7+)p7+)pOOQ[7+)t7+)tOOQ[7+)v7+)vO%?cQpO1G5|O%?}Q?MtO1G0zO%@XQ`O1G0zOOQO1G/s1G/sO%@dQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?V,5?VOOQO-E<i-E<iO!CUQpO1G/sOOQO-E<e-E<eOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CUQpO7+&`OOQO7+%x7+%xO$AlQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@nQ!0LrO7+&XO!ByQ!0LrO7+%xO!CUQpO7+%xO%@yQ!0LrO7+&XO%AXQ!0MxO7++rO%[QlO7++rO%AiQ`O7++qO%AiQ`O7++qOOQO1G4s1G4sO9eQ`O1G4sO%AqQ`O1G4sOOQS7+%}7+%}O#(ZQ`O<<LPO4UQ!fO<<LPO%BPQ`O<<LPOOQ[<<LP<<LPO!&zQMhO<<LPO%[QlO<<LPO%BXQ`O<<LPO%BdQ!0MzO,5?aO%DoQ!0MzO,5?cO%FzQ!0MzO1G2`O%I]Q!0MzO1G2sO%KhQ!0MzO1G2uO%MsQ!fO,5?QO%[QlO,5?QOOQO-E<d-E<dO%M}Q`O1G5}OOQ!0Lf<<JU<<JUO%NVQ?MtO1G0uO&!^Q?MtO1G1PO&!eQ?MtO1G1PO&$fQ?MtO1G1PO&$mQ?MtO1G1PO&&nQ?MtO1G1PO&(oQ?MtO1G1PO&(vQ?MtO1G1PO&(}Q?MtO1G1PO&+OQ?MtO1G1PO&+VQ?MtO1G1PO&+^Q!0MxO<<JfO&-UQ?MtO1G1PO&.RQ?MvO1G1PO&/UQ?MvO'#JlO&1[Q?MtO1G1cO&1iQ?MtO1G0UO&1sQMjO,5?TOOQO-E<g-E<gO!)[QlO'#FqOOQO'#KZ'#KZOOQO1G1u1G1uO&1}Q`O1G1tO&2SQ?MtO,5?[OOOW7+'h7+'hOOOO1G/Z1G/ZO&2^Q!dO1G4xOOQ!0Lh7+(Q7+(QP!&zQMhO,5?^O!,TQMhO7+(cO&2eQ`O,5?]O9eQ`O,5?]O$+YQ`O,5?]OOQO-E<o-E<oO&2sQ`O1G6bO&2sQ`O1G6bO&2{Q`O1G6bO&3WQMjO7+'zO&3hQ!dO,5?_O&3rQ`O,5?_O!&zQMhO,5?_OOQO-E<q-E<qO&3wQ!dO1G6cO&4RQ`O1G6cO&4ZQ`O1G2kO!&zQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%4hQpO1G2iO!CUQpO1G2iOCwQ`O1G2iOOQ!0Lb1G2q1G2qO&4`QpO1G2iO&4nQ`O1G2kO$+YQ`O1G2jOCwQ`O1G2jO$$wQlO1G2kO&4vQ`O1G2jO&5jQMjO,5?aOOQ!0Lh-E<t-E<tO&6]QMjO,5?cOOQ!0Lh-E<v-E<vO!,TQMhO7++]O&6gQMjO7++]O&6qQMjO7++]OOQ!0Lh1G/c1G/cO&7OQ`O1G/cOOQ!0Lh7+'u7+'uO&7TQMjO7+'|O&7eQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&8XQ`O1G0zO!&zQMhO'#IzO&8^Q`O,5@xO&:`Q!fO<<LPO!&zQMhO1G2nO&:gQ!0LrO1G2nOOQ[<<G{<<G{O!ByQ!0LrO<<G{O&:xQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?l,5?lO&;lQ`O,5?lO&;qQ`O,5?lOOQO-E=O-E=OO&<PQ`O1G6kO&<PQ`O1G6kO9kQ`O1G6kO@zQ`O<<LlOOQ[<<Ll<<LlO&<XQ`O<<LlO9uQ!0LrO<<LlO9kQ`O<<LlOOQ[<<LX<<LXO%:yQ!0MvO<<LXOOQ[<<LY<<LYO!E^Q`O<<LYO&<^QpO'#I|O&<iQ`O,5@|O!)[QlO,5@|OOQ[1G3W1G3WOOQO'#JO'#JOO9uQ!0LrO'#JOO&<qQpO,5=uOOQ[,5=u,5=uO&<xQpO'#EgO&=PQpO'#GeO&=UQ`O7+(zO&=ZQ`O7+(zOOQ[7+(z7+(zO!&zQMhO7+(zO%[QlO7+(zO&=cQ`O7+(zOOQ[7+(|7+(|O9uQ!0LrO7+(|O$%dQ`O7+(|O9`Q`O7+(|O!CUQpO7+(|O&=nQ`O,5?kOOQO-E<}-E<}OOQO'#H^'#H^O&=yQ`O1G6iO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>RQ`O7+,WO&>WQ`O7+,XO%[QlO7+,WO%[QlO7+,XOOQ[7+)V7+)VO&>]Q`O7+)VO&>bQlO7+)VO&>iQ`O7+)VOOQ[<<Ly<<LyOOQ[<<L{<<L{OOQ[-E=Q-E=QOOQ[1G3z1G3zO&>nQ`O,5>aOOQ[,5>c,5>cO&>sQ`O1G4QO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&>xQ?MtO1G6ZO?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AlQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!ByQ!0LrO<<IdO&?SQ!0LrO<<IsO&?_Q!0MxO<= ^O&?oQ`O<= ]OOQO7+*_7+*_O9eQ`O7+*_OOQ[ANAkANAkO&?wQ!fOANAkO!&zQMhOANAkO#(ZQ`OANAkO4UQ!fOANAkO&@OQ`OANAkO%[QlOANAkO&@WQ!0MzO7+'zO&BiQ!0MzO,5?aO&DtQ!0MzO,5?cO&GPQ!0MzO7+'|O&IbQ!fO1G4lO&IlQ?MtO7+&aO&KpQ?MvO,5=XO&MwQ?MvO,5=ZO&NXQ?MvO,5=XO&NiQ?MvO,5=ZO&NyQ?MvO,59uO'#PQ?MvO,5<kO'%SQ?MvO,5<mO''hQ?MvO,5<{O')^Q?MtO7+'kO')kQ?MtO7+'mO')xQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*d7+*dO')}QMjO<<K}OOQO1G4w1G4wO'*UQ`O1G4wO'*aQ`O1G4wO'*oQ`O7++|O'*oQ`O7++|O!&zQMhO1G4yO'*wQ!dO1G4yO'+RQ`O7++}O'+ZQ`O7+(VO'+fQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!CUQpO7+(TOCwQ`O7+(TO'+pQ`O7+(VO!&zQMhO7+(VO$+YQ`O7+(UO'+uQ`O7+(VOCwQ`O7+(UO'+}QMjO<<NwO!,TQMhO<<NwOOQ!0Lh7+$}7+$}O',XQ!dO,5?fOOQO-E<x-E<xO',cQ!0MvO7+(YO!&zQMhO7+(YOOQ[AN=gAN=gO9kQ`O1G5WOOQO1G5W1G5WO',sQ`O1G5WO',xQ`O7+,VO',xQ`O7+,VO9uQ!0LrOANBWO@zQ`OANBWOOQ[ANBWANBWO'-QQ`OANBWOOQ[ANAsANAsOOQ[ANAtANAtO'-VQ`O,5?hOOQO-E<z-E<zO'-bQ?MtO1G6hOOQO,5?j,5?jOOQO-E<|-E<|OOQ[1G3a1G3aO'-lQ`O,5=POOQ[<<Lf<<LfO!&zQMhO<<LfO&=UQ`O<<LfO'-qQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9uQ!0LrO<<LhO$%dQ`O<<LhO9`Q`O<<LhO'-yQpO1G5VO'.UQ`O7+,TOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= r<= rOOQ[<= s<= sO'.^Q`O<= rO'.cQ`O<= sOOQ[<<Lq<<LqO'.hQ`O<<LqO'.mQlO<<LqOOQ[1G3{1G3{O?YQ`O7+)lO'.tQ`O<<JQO'/PQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AlQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<My<<MyOOQ[G27VG27VO!&zQMhOG27VO#(ZQ`OG27VO'/ZQ!fOG27VO4UQ!fOG27VO'/bQ`OG27VO'/jQ?MtO<<JfO'/wQ?MvO1G2`O'1mQ?MvO,5?aO'3pQ?MvO,5?cO'5sQ?MvO1G2sO'7vQ?MvO1G2uO'9yQ?MtO<<KXO':WQ?MtO<<I{OOQO1G1w1G1wO!,TQMhOANAiOOQO7+*c7+*cO':eQ`O7+*cO':pQ`O<= hO':xQ!dO7+*eOOQ!0Lb<<Kq<<KqO$+YQ`O<<KqOCwQ`O<<KqO';SQ`O<<KqO!&zQMhO<<KqOOQ!0Lb<<Ko<<KoO!CUQpO<<KoO';_Q!dO<<KqOOQ!0Lb<<Kp<<KpO';iQ`O<<KqO!&zQMhO<<KqO$+YQ`O<<KpO';nQMjOANDcO';xQ!0MvO<<KtOOQO7+*r7+*rO9kQ`O7+*rO'<YQ`O<= qOOQ[G27rG27rO9uQ!0LrOG27rO@zQ`OG27rO!)[QlO1G5SO'<bQ`O7+,SO'<jQ`O1G2kO&=UQ`OANBQOOQ[ANBQANBQO!&zQMhOANBQO'<oQ`OANBQOOQ[ANBSANBSO9uQ!0LrOANBSO$%dQ`OANBSOOQO'#H_'#H_OOQO7+*q7+*qOOQ[G22wG22wOOQ[ANE^ANE^OOQ[ANE_ANE_OOQ[ANB]ANB]O'<wQ`OANB]OOQ[<<MW<<MWO!)[QlOAN?lOOQOG24yG24yO$AlQ!0MxOG24yO#(ZQ`OLD,qOOQ[LD,qLD,qO!&zQMhOLD,qO'<|Q!fOLD,qO'=TQ?MvO7+'zO'>yQ?MvO,5?aO'@|Q?MvO,5?cO'CPQ?MvO7+'|O'DuQMjOG27TOOQO<<M}<<M}OOQ!0LbANA]ANA]O$+YQ`OANA]OCwQ`OANA]O'EVQ!dOANA]OOQ!0LbANAZANAZO'E^Q`OANA]O!&zQMhOANA]O'EiQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N^<<N^OOQ[LD-^LD-^O9uQ!0LrOLD-^O'EsQ?MtO7+*nOOQO'#Gf'#GfOOQ[G27lG27lO&=UQ`OG27lO!&zQMhOG27lOOQ[G27nG27nO9uQ!0LrOG27nOOQ[G27wG27wO'E}Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#(ZQ`O!$(!]O!&zQMhO!$(!]O'FXQ!0MzOG27TOOQ!0LbG26wG26wO$+YQ`OG26wO'HjQ`OG26wOCwQ`OG26wO'HuQ!dOG26wO!&zQMhOG26wOOQ[!$(!x!$(!xOOQ[LD-WLD-WO&=UQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#(ZQ`O!)9EwOOQ!0LbLD,cLD,cO$+YQ`OLD,cOCwQ`OLD,cO'H|Q`OLD,cO'IXQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'I`Q?MvOG27TOOQ!0Lb!$( }!$( }O$+YQ`O!$( }OCwQ`O!$( }O'KUQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$+YQ`O!)9EiOCwQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$+YQ`O!.K;TOOQ!0Lb!4/0o!4/0oO!)[QlO'#DzO1PQ`O'#EXO'KaQ!fO'#JrO'KhQ!L^O'#DvO'KoQlO'#EOO'KvQ!fO'#CiO'N^Q!fO'#CiO!)[QlO'#EQO'NnQlO,5;ZO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO'#IpO(!qQ`O,5<iO!)[QlO,5;eO(!yQMhO,5;eO($dQMhO,5;eO!)[QlO,5;wO!&zQMhO'#GmO(!yQMhO'#GmO!&zQMhO'#GoO(!yQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GPO(!yQMhO'#GPO!&zQMhO'#GRO(!yQMhO'#GRO!&zQMhO'#GaO(!yQMhO'#GaO!)[QlO,5:jO($kQpO'#D_O($uQpO'#JvO!)[QlO,5@oO'NnQlO1G0uO(%PQ?MtO'#CiO!)[QlO1G2PO!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO(%ZQ!dO'#CrO!&zQMhO,5<tO(!yQMhO,5<tO'NnQlO1G2RO!)[QlO7+&zO!&zQMhO1G2`O(!yQMhO1G2`O!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO!&zQMhO1G2bO(!yQMhO1G2bO'NnQlO7+'mO'NnQlO7+&aO!&zQMhOANAiO(!yQMhOANAiO(%nQ`O'#EoO(%sQ`O'#EoO(%{Q`O'#F]O(&QQ`O'#EyO(&VQ`O'#KTO(&bQ`O'#KRO(&mQ`O,5;ZO(&rQMjO,5<eO(&yQ`O'#GYO('OQ`O'#GYO('TQ`O,5<eO(']Q`O,5<gO('eQ`O,5;ZO('mQ?MtO1G1`O('tQ`O,5<tO('yQ`O,5<tO((OQ`O,5<vO((TQ`O,5<vO((YQ`O1G2RO((_Q`O1G0uO((dQMjO<<K}O((kQMjO<<K}O((rQMhO'#F|O9`Q`O'#F{OAuQ`O'#EnO!)[QlO,5;tO!3oQ`O'#GYO!3oQ`O'#GYO!3oQ`O'#G[O!3oQ`O'#G[O!,TQMhO7+(cO!,TQMhO7+(cO%.zQ!dO1G2wO%.zQ!dO1G2wO!&zQMhO,5=]O!&zQMhO,5=]",
        stateData: "()x~O'|OS'}OSTOS(ORQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&W!WO&^!XO&`!YO&b!ZO&d![O&g!]O&m!^O&s!_O&u!`O&w!aO&y!bO&{!cO(TSO(VTO(YUO(aVO(o[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O(O!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'z]X(a]X(r]X(y]X(z]X~O!g%RX~P(qO_!}O(V#PO(W!}O(X#PO~O_#QO(X#PO(Y#PO(Z#QO~Ox#SO!U#TO(b#TO(c#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T<ZO(VTO(YUO(aVO(o[O~O![#ZO!]#WO!Y(hP!Y(vP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(VTO(YUO(aVO(o[O~Op#mO![#iO!|]O#i#lO#j#iO(T<[O!k(sP~P.iO!l#oO(T#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa(fX'z(fX'w(fX!k(fX!Y(fX!_(fX%i(fX!g(fX~P1qO#S$dO#`$eO$Q$eOP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX!_(gX%i(gX~Oa(gX'z(gX'w(gX!Y(gX!k(gXv(gX!g(gX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T$sO(VTO(YUO(a$uO(y$}O(z%POg(^P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(T%gO~O!g%mO~Oa%nO'z%nO~O!Q%rO~P%[O(U!lO~P%[O%n%vO~P%[Oh%VO!l%eO(T%gO(U!lO~Oe%}O!l%eO(T%gO~Oj$RO~O!_&PO(T%gO(U!lO(VTO(YUO`)WP~O!Q&SO!l&RO%j&VO&T&WO~P;SO!x#sO~O%s&YO!S)SX!_)SX(T)SX~O(T&ZO~Ol!PO!u&`O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&eOe&dO!x&bO%h&cO%{&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&kO#`&nO%j&iO(U!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'x&{O'z%nO~Oa%nO'x'OO'z%nO~Oa%nO'x'QO'z%nO~O'w]X!Y]Xv]X!k]X&[]X!_]X%i]X!g]X~P(qO!b'_O!c'WO!d'WO(U!lO(VTO(YUO~Os'UO!S'TO!['XO(e'SO!^(iP!^(xP~P@nOn'bO!_'`O(T%gO~Oe'gO!l%eO(T%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<VO#T!pO#U!pO#W!pO#X!pO(U!lO(VTO(YUO(e!mO(o!sO~O!b'mO!c'lO!d'lO#V!pO#['nO#]'nO~PBYOa%nOh%VO!g#vO!l%eO'z%nO(r'pO~O!p'tO#`'rO~PChOs!nO!S!oO(VTO(YUO(e!mO(o!sO~O!_XOs(mX!S(mX!b(mX!c(mX!d(mX!|(mX#T(mX#U(mX#V(mX#W(mX#X(mX#[(mX#](mX(U(mX(V(mX(Y(mX(e(mX(o(mX~O!c'lO!d'lO(U!lO~PDWO(P'xO(Q'xO(R'zO~O_!}O(V'|O(W!}O(X'|O~O_#QO(X'|O(Y'|O(Z#QO~Ov(OO~P%[Ox#SO!U#TO(b#TO(c(RO~O![(TO!Y'WX!Y'^X!]'WX!]'^X~P+}O!](VO!Y(hX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](VO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~O!Y(hX~PHRO!Y([O~O!Y(uX!](uX!g(uX!k(uX(r(uX~O#`(uX#k#dX!^(uX~PJUO#`(]O!Y(wX!](wX~O!](^O!Y(vX~O!Y(aO~O#`$eO~PJUO!^(bO~P`OR#zO!Q#yO!S#{O!l#xO(aVOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(r!na(y!na(z!na~Oa!na'z!na'w!na!Y!na!k!nav!na!_!na%i!na!g!na~PKlO!k(cO~O!g#vO#`(dO(r'pO!](tXa(tX'z(tX~O!k(tX~PNXO!S%hO!_%iO!|]O#i(iO#j(hO(T%gO~O!](jO!k(sX~O!k(lO~O!S%hO!_%iO#j(hO(T%gO~OP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~O!g#vO!k(gX~P! uOR(nO!Q(mO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(T!{a~P!#vO!x(rO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~O#k(xO~O![(zO!k(kP~P%[O(e(|O(o[O~O!S)OO!l#xO(e(|O(o[O~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]$_Oa$qa'z$qa'w$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)dO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Og(pP~P!,TO!Q)iO!g)hO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)hO!_({X$Z({X$]({X$_({X$f({X~O!Q)iO~P!.^O!Q)iO!_({X$Z({X$]({X$_({X$f({X~O!_)kO$Z)oO$])jO$_)jO$f)pO~O![)sO~P!)[O$]$hO$_$gO$f)wO~On$zX!Q$zX#S$zX'y$zX(y$zX(z$zX~OgmXg$zXnmX!]mX#`mX~P!0SOx)yO(b)zO(c)|O~On*VO!Q*OO'y*PO(y$}O(z%PO~Og)}O~P!1WOg*WO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S*YO!_*ZO!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op*`O![*^O(T*XO!k)OP~P!1uO#k*aO~O!l*bO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T*dO(VTO(YUO(a$uO(y$}O(z%PO~O![*gO!Y)PP~P!3tOr*sOs!nO!S*iO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO(e!mO~O!^*pO~P!5iO#S$dOn(`X!Q(`X'y(`X(y(`X(z(`X!](`X#`(`X~Og(`X$O(`X~P!6kOn*xO#`*wOg(_X!](_X~O!]*yOg(^X~Oj%dOk%dOl%dO(T&ZOg(^P~Os*|O~Og)}O(T&ZO~O!l+SO~O(T(vO~Op+WO!S%hO![#iO!_%iO!|]O#i#lO#j#iO(T%gO!k(sP~O!g#vO#k+XO~O!S%hO![+ZO!](^O!_%iO(T%gO!Y(vP~Os'[O!S+]O![+[O(VTO(YUO(e(|O~O!^(xP~P!9|O!]+^Oa)TX'z)TX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa!ja!]!ja'z!ja'w!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:tOR#zO!Q#yO!S#{O!l#xO(aVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(r!ra(y!ra(z!ra~Oa!ra'z!ra'w!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!=[OR#zO!Q#yO!S#{O!l#xO(aVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(r!ta(y!ta(z!ta~Oa!ta'z!ta'w!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?rOh%VOn+gO!_'`O%i+fO~O!g+iOa(]X!_(]X'z(]X!](]X~Oa%nO!_XO'z%nO~Oh%VO!l%eO~Oh%VO!l%eO(T%gO~O!g#vO#k(xO~Ob+tO%j+uO(T+qO(VTO(YUO!^)XP~O!]+vO`)WX~O[+zO~O`+{O~O!_&PO(T%gO(U!lO`)WP~O%j,OO~P;SOh%VO#`,SO~Oh%VOn,VO!_$|O~O!_,XO~O!Q,ZO!_XO~O%n%vO~O!x,`O~Oe,eO~Ob,fO(T#nO(VTO(YUO!^)VP~Oe%}O~O%j!QO(T&ZO~P=gO[,kO`,jO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(VTO(YUO(aVO(o[O~O!_!eO!u!gO$W!kO(T!dO~P!FyO`,jOa%nO'z%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa,pOl!OO!uwO%l!OO%m!OO%n!OO~P!IcO!l&oO~O&^,vO~O!_,xO~O&o,zO&q,{OP&laQ&laS&laY&laa&lad&lae&lal&lap&lar&las&lat&laz&la|&la!O&la!S&la!W&la!X&la!_&la!i&la!l&la!o&la!p&la!q&la!s&la!u&la!x&la!|&la$W&la$n&la%h&la%j&la%l&la%m&la%n&la%q&la%s&la%v&la%w&la%y&la&W&la&^&la&`&la&b&la&d&la&g&la&m&la&s&la&u&la&w&la&y&la&{&la'w&la(T&la(V&la(Y&la(a&la(o&la!^&la&e&lab&la&j&la~O(T-QO~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P#!iO!g-VO#`-UOh(jX!]#hX!^#hX!g(jX!l(jX~O!](jX!^(jX~P##[Oh%VO!g-XO!l%eO!]!aX!^!aX~Os!nO!S!oO(VTO(YUO(e!mO~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(VTO(YUO(aVO(o[O~O(T=QO~P#$qO!]-]O!^(iX~O!^-_O~O!g-VO#`-UO!]#hX!^#hX~O!]-`O!^(xX~O!^-bO~O!c-cO!d-cO(U!lO~P#$`O!^-fO~P'_On-iO!_'`O~O!Y-nO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(U!{a(V!{a(Y!{a(e!{a(o!{a~P!#vO!p-sO#`-qO~PChO!c-uO!d-uO(U!lO~PDWOa%nO#`-qO'z%nO~Oa%nO!g#vO#`-qO'z%nO~Oa%nO!g#vO!p-sO#`-qO'z%nO(r'pO~O(P'xO(Q'xO(R-zO~Ov-{O~O!Y'Wa!]'Wa~P!:tO![.PO!Y'WX!]'WX~P%[O!](VO!Y(ha~O!Y(ha~PHRO!](^O!Y(va~O!S%hO![.TO!_%iO(T%gO!Y'^X!]'^X~O#`.VO!](ta!k(taa(ta'z(ta~O!g#vO~P#,wO!](jO!k(sa~O!S%hO!_%iO#j.ZO(T%gO~Op.`O!S%hO![.]O!_%iO!|]O#i._O#j.]O(T%gO!]'aX!k'aX~OR.dO!l#xO~Oh%VOn.gO!_'`O%i.fO~Oa#ci!]#ci'z#ci'w#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:tOn>]O!Q*OO'y*PO(y$}O(z%PO~O#k#_aa#_a#`#_a'z#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#k(`XP(`XR(`X[(`Xa(`Xj(`Xr(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X'z(`X(a(`X(r(`X!k(`X!Y(`X'w(`Xv(`X!_(`X%i(`X!g(`X~P!6kO!].tO!k(kX~P!:tO!k.wO~O!Y.yO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#3cO#n$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#6QO#r$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(aVOa#mi!]#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(aVO(z#}Oa#mi!]#mi#z#mi#{#mi'z#mi(r#mi(y#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#;VO#x#mi~P#;VO#v$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(aVO(y#|O(z#}Oa#mi!]#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#={O#z$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X!]]X!^]X~O$O]X~P#@jOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO#z<gO#{<hO(aVO(r$YO(y#|O(z#}O~O$O.{O~P#BwO#S$dO#`<nO$Q<nO$O(gX!^(gX~P! uOa'da!]'da'z'da'w'da!k'da!Y'dav'da!_'da%i'da!g'da~P!:tO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO(y#mi(z#mi~P#EyOn>]O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P#EyO!]/POg(pX~P!1WOg/RO~Oa$Pi!]$Pi'z$Pi'w$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:tO$]/SO$_/SO~O$]/TO$_/TO~O!g)hO#`/UO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/VO~O!_)kO$Z/XO$])jO$_)jO$f/YO~O!]<iO!^(fX~P#BwO!^/ZO~O!g)hO$f({X~O$f/]O~Ov/^O~P!&zOx)yO(b)zO(c/aO~O!S/dO~O(y$}On%aa!Q%aa'y%aa(z%aa!]%aa#`%aa~Og%aa$O%aa~P#L{O(z%POn%ca!Q%ca'y%ca(y%ca!]%ca#`%ca~Og%ca$O%ca~P#MnO!]fX!gfX!kfX!k$zX(rfX~P!0SOp%WO![/mO!](^O(T/lO!Y(vP!Y)PP~P!1uOr*sO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO~Os<}O!S/nO![+[O!^*pO(e<|O!^(xP~P$ [O!k/oO~P#/sO!]/pO!g#vO(r'pO!k)OX~O!k/uO~OnoX!QoX'yoX(yoX(zoX~O!g#vO!koX~P$#OOp/wO!S%hO![*^O!_%iO(T%gO!k)OP~O#k/xO~O!Y$zX!]$zX!g%RX~P!0SO!]/yO!Y)PX~P#/sO!g/{O~O!Y/}O~OpkO(T0OO~P.iOh%VOr0TO!g#vO!l%eO(r'pO~O!g+iO~Oa%nO!]0XO'z%nO~O!^0ZO~P!5iO!c0[O!d0[O(U!lO~P#$`Os!nO!S0]O(VTO(YUO(e!mO~O#[0_O~Og%aa!]%aa#`%aa$O%aa~P!1WOg%ca!]%ca#`%ca$O%ca~P!1WOj%dOk%dOl%dO(T&ZOg'mX!]'mX~O!]*yOg(^a~Og0hO~On0jO#`0iOg(_a!](_a~OR0kO!Q0kO!S0lO#S$dOn}a'y}a(y}a(z}a!]}a#`}a~Og}a$O}a~P$(cO!Q*OO'y*POn$sa(y$sa(z$sa!]$sa#`$sa~Og$sa$O$sa~P$)_O!Q*OO'y*POn$ua(y$ua(z$ua!]$ua#`$ua~Og$ua$O$ua~P$*QO#k0oO~Og%Ta!]%Ta#`%Ta$O%Ta~P!1WO!g#vO~O#k0rO~O!]+^Oa)Ta'z)Ta~OR#zO!Q#yO!S#{O!l#xO(aVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(r!ri(y!ri(z!ri~Oa!ri'z!ri'w!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$+oOh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op0{O%]0|O(T0zO~P$.VO!g+iOa(]a!_(]a'z(]a!](]a~O#k1SO~O[]X!]fX!^fX~O!]1TO!^)XX~O!^1VO~O[1WO~Ob1YO(T+qO(VTO(YUO~O!_&PO(T%gO`'uX!]'uX~O!]+vO`)Wa~O!k1]O~P!:tO[1`O~O`1aO~O#`1fO~On1iO!_$|O~O(e(|O!^)UP~Oh%VOn1rO!_1oO%i1qO~O[1|O!]1zO!^)VX~O!^1}O~O`2POa%nO'z%nO~O(T#nO(VTO(YUO~O#S$dO#`$eO$Q$eOP(gXR(gX[(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~Oj2SO&[2TOa(gX~P$3pOj2SO#`$eO&[2TO~Oa2VO~P%[Oa2XO~O&e2[OP&ciQ&ciS&ciY&cia&cid&cie&cil&cip&cir&cis&cit&ciz&ci|&ci!O&ci!S&ci!W&ci!X&ci!_&ci!i&ci!l&ci!o&ci!p&ci!q&ci!s&ci!u&ci!x&ci!|&ci$W&ci$n&ci%h&ci%j&ci%l&ci%m&ci%n&ci%q&ci%s&ci%v&ci%w&ci%y&ci&W&ci&^&ci&`&ci&b&ci&d&ci&g&ci&m&ci&s&ci&u&ci&w&ci&y&ci&{&ci'w&ci(T&ci(V&ci(Y&ci(a&ci(o&ci!^&cib&ci&j&ci~Ob2bO!^2`O&j2aO~P`O!_XO!l2dO~O&q,{OP&liQ&liS&liY&lia&lid&lie&lil&lip&lir&lis&lit&liz&li|&li!O&li!S&li!W&li!X&li!_&li!i&li!l&li!o&li!p&li!q&li!s&li!u&li!x&li!|&li$W&li$n&li%h&li%j&li%l&li%m&li%n&li%q&li%s&li%v&li%w&li%y&li&W&li&^&li&`&li&b&li&d&li&g&li&m&li&s&li&u&li&w&li&y&li&{&li'w&li(T&li(V&li(Y&li(a&li(o&li!^&li&e&lib&li&j&li~O!Y2jO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2pO(e!mO!]'XX!^'XX~P@nO!]-]O!^(ia~O!]'_X!^'_X~P!9|O!]-`O!^(xa~O!^2wO~P'_Oa%nO#`3QO'z%nO~Oa%nO!g#vO#`3QO'z%nO~Oa%nO!g#vO!p3UO#`3QO'z%nO(r'pO~Oa%nO'z%nO~P!:tO!]$_Ov$qa~O!Y'Wi!]'Wi~P!:tO!](VO!Y(hi~O!](^O!Y(vi~O!Y(wi!](wi~P!:tO!](ti!k(tia(ti'z(ti~P!:tO#`3WO!](ti!k(tia(ti'z(ti~O!](jO!k(si~O!S%hO!_%iO!|]O#i3]O#j3[O(T%gO~O!S%hO!_%iO#j3[O(T%gO~On3dO!_'`O%i3cO~Oh%VOn3dO!_'`O%i3cO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aav%aa!_%aa%i%aa!g%aa~P#L{O#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%cav%ca!_%ca%i%ca!g%ca~P#MnO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/sO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/sO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'z}a(a}a(r}a!k}a!Y}a'w}av}a!_}a%i}a!g}a~P$(cO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'z$sa(a$sa(r$sa!k$sa!Y$sa'w$sav$sa!_$sa%i$sa!g$sa~P$)_O#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'z$ua(a$ua(r$ua!k$ua!Y$ua'w$uav$ua!_$ua%i$ua!g$ua~P$*QO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'z%Ta(a%Ta(r%Ta!k%Ta!Y%Ta'w%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/sOa#cq!]#cq'z#cq'w#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:tO![3lO!]'YX!k'YX~P%[O!].tO!k(ka~O!].tO!k(ka~P!:tO!Y3oO~O$O!na!^!na~PKlO$O!ja!]!ja!^!ja~P#BwO$O!ra!^!ra~P!=[O$O!ta!^!ta~P!?rOg']X!]']X~P!,TO!]/POg(pa~OSfO!_4TO$d4UO~O!^4YO~Ov4ZO~P#/sOa$mq!]$mq'z$mq'w$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:tO!Y4]O~P!&zO!S4^O~O!Q*OO'y*PO(z%POn'ia(y'ia!]'ia#`'ia~Og'ia$O'ia~P%-fO!Q*OO'y*POn'ka(y'ka(z'ka!]'ka#`'ka~Og'ka$O'ka~P%.XO(r$YO~P#/sO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!0SOp%WO(T=WO~P!1uOp4bO!S%hO![4aO!_%iO(T%gO!]'eX!k'eX~O!]/pO!k)Oa~O!]/pO!g#vO!k)Oa~O!]/pO!g#vO(r'pO!k)Oa~Og$|i!]$|i#`$|i$O$|i~P!1WO![4jO!Y'gX!]'gX~P!3tO!]/yO!Y)Pa~O!]/yO!Y)Pa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~Oj%YX!g%YX~P%2OOj4oO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4tO!l%eO(r'pO~Or4yO!g#vO(r'pO~Os!nO!S4zO(VTO(YUO(e!mO~O(y$}On%ai!Q%ai'y%ai(z%ai!]%ai#`%ai~Og%ai$O%ai~P%5oO(z%POn%ci!Q%ci'y%ci(y%ci!]%ci#`%ci~Og%ci$O%ci~P%6bOg(_i!](_i~P!1WO#`5QOg(_i!](_i~P!1WO!k5VO~Oa$oq!]$oq'z$oq'w$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:tO!Y5ZO~O!]5[O!_)QX~P#/sOa$zX!_$zX%^]X'z$zX!]$zX~P!0SO%^5_OaoX!_oX'zoX!]oX~P$#OOp5`O(T#nO~O%^5_O~Ob5fO%j5gO(T+qO(VTO(YUO!]'tX!^'tX~O!]1TO!^)Xa~O[5kO~O`5lO~O[5pO~Oa%nO'z%nO~P#/sO!]5uO#`5wO!^)UX~O!^5xO~Or6OOs!nO!S*iO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!pO#W!pO#X!pO#[5}O#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O!^5|O~P%;eOn6TO!_1oO%i6SO~Oh%VOn6TO!_1oO%i6SO~Ob6[O(T#nO(VTO(YUO!]'sX!^'sX~O!]1zO!^)Va~O(VTO(YUO(e6^O~O`6bO~Oj6eO&[6fO~PNXO!k6gO~P%[Oa6iO~Oa6iO~P%[Ob2bO!^6nO&j2aO~P`O!g6pO~O!g6rOh(ji!](ji!^(ji!g(ji!l(jir(ji(r(ji~O!]#hi!^#hi~P#BwO#`6sO!]#hi!^#hi~O!]!ai!^!ai~P#BwOa%nO#`6|O'z%nO~Oa%nO!g#vO#`6|O'z%nO~O!](tq!k(tqa(tq'z(tq~P!:tO!](jO!k(sq~O!S%hO!_%iO#j7TO(T%gO~O!_'`O%i7WO~On7[O!_'`O%i7WO~O#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'z'ia(a'ia(r'ia!k'ia!Y'ia'w'iav'ia!_'ia%i'ia!g'ia~P%-fO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'z'ka(a'ka(r'ka!k'ka!Y'ka'w'kav'ka!_'ka%i'ka!g'ka~P%.XO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'z$|i(a$|i(r$|i!k$|i!Y$|i'w$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/sO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'z%ai(a%ai(r%ai!k%ai!Y%ai'w%aiv%ai!_%ai%i%ai!g%ai~P%5oO#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'z%ci(a%ci(r%ci!k%ci!Y%ci'w%civ%ci!_%ci%i%ci!g%ci~P%6bO!]'Ya!k'Ya~P!:tO!].tO!k(ki~O$O#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#n#mi~P%NdO#n<_O~P%NdOP$[OR#zOr<kO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#r#mi~P&!lO#r<aO~P&!lOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO(aVO#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#v#mi~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO(aVO(z#}O#z#mi#{#mi$O#mi(r#mi(y#mi!]#mi!^#mi~O#x<eO~P&&uO#x#mi~P&&uO#v<cO~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO(aVO(y#|O(z#}O#{#mi$O#mi(r#mi!]#mi!^#mi~O#z#mi~P&)UO#z<gO~P&)UOa#|y!]#|y'z#|y'w#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:tO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO(y#mi(z#mi~P&,QOn>^O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P&,QO#S$dOP(`XR(`X[(`Xj(`Xn(`Xr(`X!Q(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X$O(`X'y(`X(a(`X(r(`X(y(`X(z(`X!](`X!^(`X~O$O$Pi!]$Pi!^$Pi~P#BwO$O!ri!^!ri~P$+oOg']a!]']a~P!1WO!^7nO~O!]'da!^'da~P#BwO!Y7oO~P#/sO!g#vO(r'pO!]'ea!k'ea~O!]/pO!k)Oi~O!]/pO!g#vO!k)Oi~Og$|q!]$|q#`$|q$O$|q~P!1WO!Y'ga!]'ga~P#/sO!g7vO~O!]/yO!Y)Pi~P#/sO!]/yO!Y)Pi~O!Y7yO~Oh%VOr8OO!l%eO(r'pO~Oj8QO!g#vO~Or8TO!g#vO(r'pO~O!Q*OO'y*PO(z%POn'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P&5RO!Q*OO'y*POn'la(y'la(z'la!]'la#`'la~Og'la$O'la~P&5tOg(_q!](_q~P!1WO#`8VOg(_q!](_q~P!1WO!Y8WO~Og%Oq!]%Oq#`%Oq$O%Oq~P!1WOa$oy!]$oy'z$oy'w$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:tO!g6rO~O!]5[O!_)Qa~O!_'`OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(a$Ta(r$Ta(y$Ta(z$Ta~O%i7WO~P&8fO%^8[Oa%[i!_%[i'z%[i!]%[i~Oa#cy!]#cy'z#cy'w#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:tO[8^O~Ob8`O(T+qO(VTO(YUO~O!]1TO!^)Xi~O`8dO~O(e(|O!]'pX!^'pX~O!]5uO!^)Ua~O!^8nO~P%;eO(o!sO~P$&YO#[8oO~O!_1oO~O!_1oO%i8qO~On8tO!_1oO%i8qO~O[8yO!]'sa!^'sa~O!]1zO!^)Vi~O!k8}O~O!k9OO~O!k9RO~O!k9RO~P%[Oa9TO~O!g9UO~O!k9VO~O!](wi!^(wi~P#BwOa%nO#`9_O'z%nO~O!](ty!k(tya(ty'z(ty~P!:tO!](jO!k(sy~O%i9bO~P&8fO!_'`O%i9bO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'z$|q(a$|q(r$|q!k$|q!Y$|q'w$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/sO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'z'ja(a'ja(r'ja!k'ja!Y'ja'w'jav'ja!_'ja%i'ja!g'ja~P&5RO#k'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la'z'la(a'la(r'la!k'la!Y'la'w'lav'la!_'la%i'la!g'la~P&5tO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'z%Oq(a%Oq(r%Oq!k%Oq!Y%Oq'w%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/sO!]'Yi!k'Yi~P!:tO$O#cq!]#cq!^#cq~P#BwO(y$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(a%aa(r%aa!]%aa!^%aa~On%aa!Q%aa'y%aa(z%aa~P&IyO(z%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(a%ca(r%ca!]%ca!^%ca~On%ca!Q%ca'y%ca(y%ca~P&LQOn>^O!Q*OO'y*PO(z%PO~P&IyOn>^O!Q*OO'y*PO(y$}O~P&LQOR0kO!Q0kO!S0lO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'y}a(a}a(r}a(y}a(z}a!]}a!^}a~O!Q*OO'y*POP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(a$sa(r$sa(y$sa(z$sa!]$sa!^$sa~O!Q*OO'y*POP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(a$ua(r$ua(y$ua(z$ua!]$ua!^$ua~On>^O!Q*OO'y*PO(y$}O(z%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(a%Ta(r%Ta!]%Ta!^%Ta~P''VO$O$mq!]$mq!^$mq~P#BwO$O$oq!]$oq!^$oq~P#BwO!^9oO~O$O9pO~P!1WO!g#vO!]'ei!k'ei~O!g#vO(r'pO!]'ei!k'ei~O!]/pO!k)Oq~O!Y'gi!]'gi~P#/sO!]/yO!Y)Pq~Or9wO!g#vO(r'pO~O[9yO!Y9xO~P#/sO!Y9xO~Oj:PO!g#vO~Og(_y!](_y~P!1WO!]'na!_'na~P#/sOa%[q!_%[q'z%[q!]%[q~P#/sO[:UO~O!]1TO!^)Xq~O`:YO~O#`:ZO!]'pa!^'pa~O!]5uO!^)Ui~P#BwO!S:]O~O!_1oO%i:`O~O(VTO(YUO(e:eO~O!]1zO!^)Vq~O!k:hO~O!k:iO~O!k:jO~O!k:jO~P%[O#`:mO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%i:rO~P&8fO!_'`O%i:rO~O$O#|y!]#|y!^#|y~P#BwOP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(a$|i(r$|i!]$|i!^$|i~P''VO!Q*OO'y*PO(z%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(a'ia(r'ia(y'ia!]'ia!^'ia~O!Q*OO'y*POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(a'ka(r'ka(y'ka(z'ka!]'ka!^'ka~O(y$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'y%ai(a%ai(r%ai(z%ai!]%ai!^%ai~O(z%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'y%ci(a%ci(r%ci(y%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#BwO$O#cy!]#cy!^#cy~P#BwO!g#vO!]'eq!k'eq~O!]/pO!k)Oy~O!Y'gq!]'gq~P#/sOr:|O!g#vO(r'pO~O[;QO!Y;PO~P#/sO!Y;PO~Og(_!R!](_!R~P!1WOa%[y!_%[y'z%[y!]%[y~P#/sO!]1TO!^)Xy~O!]5uO!^)Uq~O(T;XO~O!_1oO%i;[O~O!k;_O~O%i;dO~P&8fOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(a$|q(r$|q!]$|q!^$|q~P''VO!Q*OO'y*PO(z%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(a'ja(r'ja(y'ja!]'ja!^'ja~O!Q*OO'y*POP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la$O'la(a'la(r'la(y'la(z'la!]'la!^'la~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(a%Oq(r%Oq!]%Oq!^%Oq~P''VOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!1WO!Y;hO~P#/sOr;iO!g#vO(r'pO~O[;kO!Y;hO~P#/sO!]'pq!^'pq~P#BwO!]#h!Z!^#h!Z~P#BwO#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'z%e!Z(a%e!Z(r%e!Z!k%e!Z!Y%e!Z'w%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/sOr;tO!g#vO(r'pO~O!Y;uO~P#/sOr;|O!g#vO(r'pO~O!Y;}O~P#/sOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(a%e!Z(r%e!Z!]%e!Z!^%e!Z~P''VOr<QO!g#vO(r'pO~Ov(fX~P1qO!Q%rO~P!)[O(U!lO~P!)[O!YfX!]fX#`fX~P%2OOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~O!gfX!k]X!kfX(rfX~P'LTOP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_XO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]<iO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<tO!S${O!_$|O!i>WO!l$xO#j<zO$W%`O$t<vO$v<xO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Ol)dO~P(!yOr!eX(r!eX~P#!iOr(jX(r(jX~P##[O!^]X!^fX~P'LTO!YfX!Y$zX!]fX!]$zX#`fX~P!0SO#k<^O~O!g#vO#k<^O~O#`<nO~Oj<bO~O#`=OO!](wX!^(wX~O#`<nO!](uX!^(uX~O#k=PO~Og=RO~P!1WO#k=XO~O#k=YO~Og=RO(T&ZO~O!g#vO#k=ZO~O!g#vO#k=PO~O$O=[O~P#BwO#k=]O~O#k=^O~O#k=cO~O#k=dO~O#k=eO~O#k=fO~O$O=gO~P!1WO$O=hO~P!1WOl=sO~P7eOk#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~(OT#o!X'|(U#ps#n#qr!Q'}$]'}(T$_(e~",
        goto: "$9Y)]PPPPPP)^PP)aP)rP+W/]PPPP6mPP7TPP=QPPP@tPA^PA^PPPA^PCfPA^PA^PA^PCjPCoPD^PIWPPPI[PPPPI[L_PPPLeMVPI[PI[PP! eI[PPPI[PI[P!#lI[P!'S!(X!(bP!)U!)Y!)U!,gPPPPPPP!-W!(XPP!-h!/YP!2iI[I[!2n!5z!:h!:h!>gPPP!>oI[PPPPPPPPP!BOP!C]PPI[!DnPI[PI[I[I[I[I[PI[!FQP!I[P!LbP!Lf!Lp!Lt!LtP!IXP!Lx!LxP#!OP#!SI[PI[#!Y#%_CjA^PA^PA^A^P#&lA^A^#)OA^#+vA^#.SA^A^#.r#1W#1W#1]#1f#1W#1qPP#1WPA^#2ZA^#6YA^A^6mPPP#:_PPP#:x#:xP#:xP#;`#:xPP#;fP#;]P#;]#;y#;]#<e#<k#<n)aP#<q)aP#<z#<z#<zP)aP)aP)aP)aPP)aP#=Q#=TP#=T)aP#=XP#=[P)aP)aP)aP)aP)aP)a)aPP#=b#=h#=s#=y#>P#>V#>]#>k#>q#>{#?R#?]#?c#?s#?y#@k#@}#AT#AZ#Ai#BO#Cs#DR#DY#Et#FS#Gt#HS#HY#H`#Hf#Hp#Hv#H|#IW#Ij#IpPPPPPPPPPPP#IvPPPPPPP#Jk#Mx$ b$ i$ qPPP$']P$'f$*_$0x$0{$1O$1}$2Q$2X$2aP$2g$2jP$3W$3[$4S$5b$5g$5}PP$6S$6Y$6^$6a$6e$6i$7e$7|$8e$8i$8l$8o$8y$8|$9Q$9UR!|RoqOXst!Z#d%m&r&t&u&w,s,x2[2_Y!vQ'`-e1o5{Q%tvQ%|yQ&T|Q&j!VS'W!e-]Q'f!iS'l!r!yU*k$|*Z*oQ+o%}S+|&V&WQ,d&dQ-c'_Q-m'gQ-u'mQ0[*qQ1b,OQ1y,eR<{<Y%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_S#q]<V!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU+P%]<s<tQ+t&PQ,f&gQ,m&oQ0x+gQ0}+iQ1Y+uQ2R,kQ3`.gQ5`0|Q5f1TQ6[1zQ7Y3dQ8`5gR9e7['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S!S!nQ!r!v!y!z$|'W'_'`'l'm'n*k*o*q*r-]-c-e-u0[0_1o5{5}%[$ti#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q&X|Q'U!eS'[%i-`Q+t&PQ,P&WQ,f&gQ0n+SQ1Y+uQ1_+{Q2Q,jQ2R,kQ5f1TQ5o1aQ6[1zQ6_1|Q6`2PQ8`5gQ8c5lQ8|6bQ:X8dQ:f8yQ;V:YR<}*ZrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R,h&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'b'r(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>R>S[#]WZ#W#Z'X(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ%wxQ%{yW&Q|&V&W,OQ&_!TQ'c!hQ'e!iQ(q#sS+n%|%}Q+r&PQ,_&bQ,c&dS-l'f'gQ.i(rQ1R+oQ1X+uQ1Z+vQ1^+zQ1t,`S1x,d,eQ2|-mQ5e1TQ5i1WQ5n1`Q6Z1yQ8_5gQ8b5kQ8f5pQ:T8^R;T:U!U$zi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y!^%yy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{Q+h%wQ,T&[Q,W&]Q,b&dQ.h(qQ1s,_U1w,c,d,eQ3e.iQ6U1tS6Y1x1yQ8x6Z#f>T#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o>U<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hW%Ti%V*y>PS&[!Q&iQ&]!RQ&^!SU*}%[%d=sR,R&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^T)z$u){V+P%]<s<tW'[!e%i*Z-`S(}#y#zQ+c%rQ+y&SS.b(m(nQ1j,XQ5T0kR8i5u'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S$i$^c#Y#e%q%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.|.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ'Y!eR2q-]!W!nQ!e!r!v!y!z$|'W'_'`'l'm'n*Z*k*o*q*r-]-c-e-u0[0_1o5{5}R1l,ZnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&y!^Q'v!xS(s#u<^Q+l%zQ,]&_Q,^&aQ-j'dQ-w'oS.r(x=PS0q+X=ZQ1P+mQ1n,[Q2c,zQ2e,{Q2m-WQ2z-kQ2}-oS5Y0r=eQ5a1QS5d1S=fQ6t2oQ6x2{Q6}3SQ8]5bQ9Y6vQ9Z6yQ9^7OR:l9V$d$]c#Y#e%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vS(o#p'iQ)P#zS+b%q.|S.c(n(pR3^.d'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS#q]<VQ&t!XQ&u!YQ&w![Q&x!]R2Z,vQ'a!hQ+e%wQ-h'cS.e(q+hQ2x-gW3b.h.i0w0yQ6w2yW7U3_3a3e5^U9a7V7X7ZU:q9c9d9fS;b:p:sQ;p;cR;x;qU!wQ'`-eT5y1o5{!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(j,s,x.[2[2_]!pQ!r'`-e1o5{T#q]<V%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S(}#y#zS.b(m(n!s=l$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU$fd)_,mS(p#p'iU*v%R(w4OU0m+O.n7gQ5^0xQ7V3`Q9d7YR:s9em!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}Q't!uS(f#g2US-s'k'wQ/s*]Q0R*jQ3U-vQ4f/tQ4r0TQ4s0UQ4x0^Q7r4`S7}4t4vS8R4y4{Q9r7sQ9v7yQ9{8OQ:Q8TS:{9w9xS;g:|;PS;s;h;iS;{;t;uS<P;|;}R<S<QQ#wbQ's!uS(e#g2US(g#m+WQ+Y%fQ+j%xQ+p&OU-r'k't'wQ.W(fU/r*]*`/wQ0S*jQ0V*lQ1O+kQ1u,aS3R-s-vQ3Z.`S4e/s/tQ4n0PS4q0R0^Q4u0WQ6W1vQ7P3US7q4`4bQ7u4fU7|4r4x4{Q8P4wQ8v6XS9q7r7sQ9u7yQ9}8RQ:O8SQ:c8wQ:y9rS:z9v9xQ;S:QQ;^:dS;f:{;PS;r;g;hS;z;s;uS<O;{;}Q<R<PQ<T<SQ=o=jQ={=tR=|=uV!wQ'`-e%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S#wz!j!r=i$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=o>R%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Q%fj!^%xy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{S&Oz!jQ+k%yQ,a&dW1v,b,c,d,eU6X1w1x1yS8w6Y6ZQ:d8x!r=j$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ=t>QR=u>R%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Y#bWZ#W#Z(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ,n&o!p=k$Z$n)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=n'XU']!e%i*ZR2s-`%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ,m&oQ0x+gQ3`.gQ7Y3dR9e7[!b$Tc#Y%q(S(Y(t(y)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!P<d)^)q-Z.|2k2n3p3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!f$Vc#Y%q(S(Y(t(y)W)X)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!T<f)^)q-Z.|2k2n3p3v3w3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!^$Zc#Y%q(S(Y(t(y)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<WQ4_/kz>S)^)q-Z.|2k2n3p4P4X6u7b7k7l8k9X9g9m9n;W;`=vQ>X>ZR>Y>['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS$oh$pR4U/U'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$kf$qQ$ifS)j$l)nR)v$qT$jf$qT)l$l)n'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$oh$pQ$rhR)u$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_!s>Q$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'b)O)s*i+]+g,p,s,x-i.g/V/n0]0l1r2S2T2V2X2[2_2a3d4T4z6T6e6f6i7[8t9T!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^Q+T%aQ/c*Oo4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!U$yi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>YQ*c$zU*l$|*Z*oQ+U%bQ0W*m#f=q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n=r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hQ=w>TQ=x>UQ=y>VR=z>W!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hnoOXst!Z#d%m&r&t&u&w,s,x2[2_S*f${*YQ-R'OQ-S'QR4i/y%[%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q,U&]Q1h,WQ5s1gR8h5tV*n$|*Z*oU*n$|*Z*oT5z1o5{S0P*i/nQ4w0]T8S4z:]Q+j%xQ0V*lQ1O+kQ1u,aQ6W1vQ8v6XQ:c8wR;^:d!U%Oi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Yx*R$v)e*S*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>OS0`*t0a#f<o#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<p<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!d=S(u)c*[*e.j.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[`=T3}7c7f7j9h:t:w;yS=_.l3iT=`7e9k!U%Qi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y|*T$v)e*U*t+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>OS0b*u0c#f<q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!h=U(u)c*[*e.k.l.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[d=V3}7d7e7j9h9i:t:u:w;yS=a.m3jT=b7f9lrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q&f!UR,p&ornOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R&f!UQ,Y&^R1d,RsnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q1p,_S6R1s1tU8p6P6Q6US:_8r8sS;Y:^:aQ;m;ZR;w;nQ&m!VR,i&iR6_1|R:f8yW&Q|&V&W,OR1Z+vQ&r!WR,s&sR,y&xT2],x2_R,}&yQ,|&yR2f,}Q'y!{R-y'ySsOtQ#dXT%ps#dQ#OTR'{#OQ#RUR'}#RQ){$uR/`){Q#UVR(Q#UQ#XWU(W#X(X.QQ(X#YR.Q(YQ-^'YR2r-^Q.u(yS3m.u3nR3n.vQ-e'`R2v-eY!rQ'`-e1o5{R'j!rQ/Q)eR4S/QU#_W%h*YU(_#_(`.RQ(`#`R.R(ZQ-a']R2t-at`OXst!V!Z#d%m&i&k&r&t&u&w,s,x2[2_S#hZ%eU#r`#h.[R.[(jQ(k#jQ.X(gW.a(k.X3X7RQ3X.YR7R3YQ)n$lR/W)nQ$phR)t$pQ$`cU)a$`-|<jQ-|<WR<j)qQ/q*]W4c/q4d7t9sU4d/r/s/tS7t4e4fR9s7u$e*Q$v(u)c)e*[*e*t*u+Q+R+V.l.m.o.p.q/_/g/i/k/v/|0d0e0v1e3f3g3h3}4R4[4g4h4l4|5O5R5S5W5r7]7^7_7`7e7f7h7i7j7p7w7z8U8X8Z9h9i9j9t9|:R:S:t:u:v:w:x:};R;e;j;v;y=p=}>O>Z>[Q/z*eU4k/z4m7xQ4m/|R7x4lS*o$|*ZR0Y*ox*S$v)e*t*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>O!d.j(u)c*[*e.l.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/h*S.j7ca7c3}7e7f7j9h:t:w;yQ0a*tQ3i.lU4}0a3i9kR9k7e|*U$v)e*t*u+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>O!h.k(u)c*[*e.l.m.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/j*U.k7de7d3}7e7f7j9h9i:t:u:w;yQ0c*uQ3j.mU5P0c3j9lR9l7fQ*z%UR0g*zQ5]0vR8Y5]Q+_%kR0u+_Q5v1jS8j5v:[R:[8kQ,[&_R1m,[Q5{1oR8m5{Q1{,fS6]1{8zR8z6_Q1U+rW5h1U5j8a:VQ5j1XQ8a5iR:V8bQ+w&QR1[+wQ2_,xR6m2_YrOXst#dQ&v!ZQ+a%mQ,r&rQ,t&tQ,u&uQ,w&wQ2Y,sS2],x2_R6l2[Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'q!uQ+`%lQ+l%zQ,Q&XQ,h&mQ-P&|W-p'k's't'wQ-w'oQ0X*nQ1P+mQ1c,PS2O,i,lQ2g-OQ2h-RQ2i-SQ2}-oW3P-r-s-v-xQ5a1QQ5m1_Q5q1eQ6V1uQ6a2QQ6k2ZU6z3O3R3UQ6}3SQ8]5bQ8e5oQ8g5rQ8l5zQ8u6WQ8{6`S9[6{7PQ9^7OQ:W8cQ:b8vQ:g8|Q:n9]Q;U:XQ;]:cQ;a:oQ;l;VR;o;^Q%zyQ'd!iQ'o!uU+m%{%|%}Q-W'VU-k'e'f'gS-o'k'uQ0Q*jS1Q+n+oQ2o-YS2{-l-mQ3S-tS4p0R0UQ5b1RQ6v2uQ6y2|Q7O3TU7{4r4s4vQ9z7}R;O9{S$wi>PR*{%VU%Ui%V>PR0f*yQ$viS(u#v+iS)c$b$cQ)e$dQ*[$xS*e${*YQ*t%OQ*u%QQ+Q%^Q+R%_Q+V%cQ.l<oQ.m<qQ.o<uQ.p<wQ.q<yQ/_)yQ/g*RQ/i*TQ/k*VQ/v*aS/|*g/mQ0d*wQ0e*xl0v+f,V.f1i1q3c6S7W8q9b:`:r;[;dQ1e,SQ3f=SQ3g=UQ3h=XS3}<l<mQ4R/PS4[/d4^Q4g/xQ4h/yQ4l/{Q4|0`Q5O0bQ5R0iQ5S0jQ5W0oQ5r1fQ7]=]Q7^=_Q7_=aQ7`=cQ7e<pQ7f<rQ7h<vQ7i<xQ7j<zQ7p4_Q7w4jQ7z4oQ8U5QQ8X5[Q8Z5_Q9h=YQ9i=TQ9j=VQ9t7vQ9|8QQ:R8VQ:S8[Q:t=^Q:u=`Q:v=bQ:w=dQ:x9pQ:}9yQ;R:PQ;e=gQ;j;QQ;v;kQ;y=hQ=p>PQ=}>XQ>O>YQ>Z>]R>[>^Q+O%]Q.n<sR7g<tnpOXst!Z#d%m&r&t&u&w,s,x2[2_Q!fPS#fZ#oQ&|!`W'h!o*i0]4zQ(P#SQ)Q#{Q)r$nS,l&k&nQ,q&oQ-O&{S-T'T/nQ-g'bQ.x)OQ/[)sQ0s+]Q0y+gQ2W,pQ2y-iQ3a.gQ4W/VQ5U0lQ6Q1rQ6c2SQ6d2TQ6h2VQ6j2XQ6o2aQ7Z3dQ7m4TQ8s6TQ9P6eQ9Q6fQ9S6iQ9f7[Q:a8tR:k9T#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'b)O*i+]+g,p,s,x-i.g/n0]0l1r2S2T2V2X2[2_2a3d4z6T6e6f6i7[8t9TQ#YWQ#eYQ%quQ%svS%uw!gS(S#W(VQ(Y#ZQ(t#uQ(y#xQ)R$OQ)S$PQ)T$QQ)U$RQ)V$SQ)W$TQ)X$UQ)Y$VQ)Z$WQ)[$XQ)^$ZQ)`$_Q)b$aQ)g$eW)q$n)s/V4TQ+d%tQ+x&RS-Z'X2pQ-x'rS-}(T.PQ.S(]Q.U(dQ.s(xQ.v(zQ.z<UQ.|<XQ.}<YQ/O<]Q/b)}Q0p+XQ2k-UQ2n-XQ3O-qQ3V.VQ3k.tQ3p<^Q3q<_Q3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{.{Q3|<kQ4P<nQ4Q<{Q4X<iQ5X0rQ5c1SQ6u=OQ6{3QQ7Q3WQ7a3lQ7b=PQ7k=RQ7l=ZQ8k5wQ9X6sQ9]6|Q9g=[Q9m=eQ9n=fQ:o9_Q;W:ZQ;`:mQ<W#SR=v>SR#[WR'Z!el!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}S'V!e-]U*j$|*Z*oS-Y'W'_S0U*k*qQ0^*rQ2u-cQ4v0[R4{0_R({#xQ!fQT-d'`-e]!qQ!r'`-e1o5{Q#p]R'i<VR)f$dY!uQ'`-e1o5{Q'k!rS'u!v!yS'w!z5}S-t'l'mQ-v'nR3T-uT#kZ%eS#jZ%eS%km,oU(g#h#i#lS.Y(h(iQ.^(jQ0t+^Q3Y.ZU3Z.[.]._S7S3[3]R9`7Td#^W#W#Z%h(T(^*Y+Z.T/mr#gZm#h#i#l%e(h(i(j+^.Z.[.]._3[3]7TS*]$x*bQ/t*^Q2U,oQ2l-VQ4`/pQ6q2dQ7s4aQ9W6rT=m'X+[V#aW%h*YU#`W%h*YS(U#W(^U(Z#Z+Z/mS-['X+[T.O(T.TV'^!e%i*ZQ$lfR)x$qT)m$l)nR4V/UT*_$x*bT*h${*YQ0w+fQ1g,VQ3_.fQ5t1iQ6P1qQ7X3cQ8r6SQ9c7WQ:^8qQ:p9bQ;Z:`Q;c:rQ;n;[R;q;dnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&l!VR,h&itmOXst!U!V!Z#d%m&i&r&t&u&w,s,x2[2_R,o&oT%lm,oR1k,XR,g&gQ&U|S+}&V&WR1^,OR+s&PT&p!W&sT&q!W&sT2^,x2_",
        nodeNames: "\u26a0 ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
        maxTerm: 380,
        context: CY,
        nodeProps: [
          ["isolate", -8, 5, 6, 14, 37, 39, 51, 53, 55, ""],
          ["group", -26, 9, 17, 19, 68, 207, 211, 215, 216, 218, 221, 224, 234, 237, 243, 245, 247, 249, 252, 258, 264, 266, 268, 270, 272, 274, 275, "Statement", -34, 13, 14, 32, 35, 36, 42, 51, 54, 55, 57, 62, 70, 72, 76, 80, 82, 84, 85, 110, 111, 120, 121, 136, 139, 141, 142, 143, 144, 145, 147, 148, 167, 169, 171, "Expression", -23, 31, 33, 37, 41, 43, 45, 173, 175, 177, 178, 180, 181, 182, 184, 185, 186, 188, 189, 190, 201, 203, 205, 206, "Type", -3, 88, 103, 109, "ClassItem"],
          ["openedBy", 23, "<", 38, "InterpolationStart", 56, "[", 60, "{", 73, "(", 160, "JSXStartCloseTag"],
          ["closedBy", -2, 24, 168, ">", 40, "InterpolationEnd", 50, "]", 61, "}", 74, ")", 165, "JSXEndTag"]
        ],
        propSources: [wY],
        skippedNodes: [0, 5, 6, 278],
        repeatNodeCount: 37,
        tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
        tokenizers: [jY, hY, dY, MY, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, fY, new iY("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340), new iY("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)],
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
          get: YY => bY[YY] || -1
        }, {
          term: 343,
          get: YY => XY[YY] || -1
        }, {
          term: 95,
          get: YY => qY[YY] || -1
        }],
        tokenPrec: 15201
      });
    var kY = DY(40417),
      GY = DY(40395),
      xY = DY(40398),
      nY = DY(40387);
    const PY = [(0, nY.r)("function ${name}(${params}) {\n\t${}\n}", {
        label: "function",
        detail: "definition",
        type: "keyword"
      }), (0, nY.r)("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}", {
        label: "for",
        detail: "loop",
        type: "keyword"
      }), (0, nY.r)("for (let ${name} of ${collection}) {\n\t${}\n}", {
        label: "for",
        detail: "of loop",
        type: "keyword"
      }), (0, nY.r)("do {\n\t${}\n} while (${})", {
        label: "do",
        detail: "loop",
        type: "keyword"
      }), (0, nY.r)("while (${}) {\n\t${}\n}", {
        label: "while",
        detail: "loop",
        type: "keyword"
      }), (0, nY.r)("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
        label: "try",
        detail: "/ catch block",
        type: "keyword"
      }), (0, nY.r)("if (${}) {\n\t${}\n}", {
        label: "if",
        detail: "block",
        type: "keyword"
      }), (0, nY.r)("if (${}) {\n\t${}\n} else {\n\t${}\n}", {
        label: "if",
        detail: "/ else block",
        type: "keyword"
      }), (0, nY.r)("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
        label: "class",
        detail: "definition",
        type: "keyword"
      }), (0, nY.r)('import {${names}} from "${module}"\n${}', {
        label: "import",
        detail: "named",
        type: "keyword"
      }), (0, nY.r)('import ${name} from "${module}"\n${}', {
        label: "import",
        detail: "default",
        type: "keyword"
      })],
      UY = PY.concat([(0, nY.r)("interface ${name} {\n\t${}\n}", {
        label: "interface",
        detail: "definition",
        type: "keyword"
      }), (0, nY.r)("type ${name} = ${type}", {
        label: "type",
        detail: "definition",
        type: "keyword"
      }), (0, nY.r)("enum ${name} {\n\t${}\n}", {
        label: "enum",
        detail: "definition",
        type: "keyword"
      })]),
      LY = new FY.p,
      tY = new Set(["Script", "Block", "FunctionExpression", "FunctionDeclaration", "ArrowFunction", "MethodDeclaration", "ForStatement"]);

    function Yr(YY) {
      return (rY, DY) => {
        let FY = rY.node.getChild("VariableDefinition");
        return FY && DY(FY, YY), !0
      }
    }
    const rr = ["FunctionDeclaration"],
      Dr = {
        FunctionDeclaration: Yr("function"),
        ClassDeclaration: Yr("class"),
        ClassExpression: () => !0,
        EnumDeclaration: Yr("constant"),
        TypeAliasDeclaration: Yr("type"),
        NamespaceDeclaration: Yr("namespace"),
        VariableDefinition(YY, rY) {
          YY.matchContext(rr) || rY(YY, "variable")
        },
        TypeDefinition(YY, rY) {
          rY(YY, "type")
        },
        __proto__: null
      };

    function Fr(YY, rY) {
      let DY = LY.get(rY);
      if (DY) return DY;
      let AY = [],
        IY = !0;

      function RY(rY, DY) {
        let FY = YY.sliceString(rY.from, rY.to);
        AY.push({
          label: FY,
          type: DY
        })
      }
      return rY.cursor(FY.e.IncludeAnonymous).iterate((rY => {
        if (IY) IY = !1;
        else if (rY.name) {
          let YY = Dr[rY.name];
          if (YY && YY(rY, RY) || tY.has(rY.name)) return !1
        } else if (rY.to - rY.from > 8192) {
          for (let DY of Fr(YY, rY.node)) AY.push(DY);
          return !1
        }
      })), LY.set(rY, AY), AY
    }
    const Ar = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
      Ir = ["TemplateString", "String", "RegExp", "LineComment", "BlockComment", "VariableDefinition", "TypeDefinition", "Label", "PropertyDefinition", "PropertyName", "PrivatePropertyDefinition", "PrivatePropertyName", "JSXText", "JSXAttributeValue", "JSXOpenTag", "JSXCloseTag", "JSXSelfClosingTag", ".", "?."];

    function Rr(YY) {
      let rY = (0, kY.sb)(YY.state).resolveInner(YY.pos, -1);
      if (Ir.indexOf(rY.name) > -1) return null;
      let DY = "VariableName" == rY.name || rY.to - rY.from < 20 && Ar.test(YY.state.sliceDoc(rY.from, rY.to));
      if (!DY && !YY.explicit) return null;
      let FY = [];
      for (let AY = rY; AY; AY = AY.parent) tY.has(AY.name) && (FY = FY.concat(Fr(YY.state.doc, AY)));
      return {
        options: FY,
        from: DY ? rY.from : YY.pos,
        validFor: Ar
      }
    }
    const Or = kY.j.define({
        name: "javascript",
        parser: pY.configure({
          props: [kY.W.add({
            IfStatement: (0, kY.p)({
              except: /^\s*({|else\b)/
            }),
            TryStatement: (0, kY.p)({
              except: /^\s*({|catch\b|finally\b)/
            }),
            LabeledStatement: kY.z,
            SwitchBody: YY => {
              let rY = YY.textAfter,
                DY = /^\s*\}/.test(rY),
                FY = /^\s*(case|default)\b/.test(rY);
              return YY.baseIndent + (DY ? 0 : FY ? 1 : 2) * YY.unit
            },
            Block: (0, kY.w)({
              closing: "}"
            }),
            ArrowFunction: YY => YY.baseIndent + YY.unit,
            "TemplateString BlockComment": () => null,
            "Statement Property": (0, kY.p)({
              except: /^\s*{/
            }),
            JSXElement(YY) {
              let rY = /^\s*<\//.test(YY.textAfter);
              return YY.lineIndent(YY.node.from) + (rY ? 0 : YY.unit)
            },
            JSXEscape(YY) {
              let rY = /\s*\}/.test(YY.textAfter);
              return YY.lineIndent(YY.node.from) + (rY ? 0 : YY.unit)
            },
            "JSXOpenTag JSXSelfClosingTag": YY => YY.column(YY.node.from) + YY.unit
          }), kY.K.add({
            "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": kY.E,
            BlockComment: YY => ({
              from: YY.from + 2,
              to: YY.to - 2
            }),
            JSXElement(YY) {
              let rY = YY.firstChild;
              if (!rY || "JSXSelfClosingTag" == rY.name) return null;
              let DY = YY.lastChild;
              return {
                from: rY.to,
                to: DY.type.isError ? YY.to : DY.from
              }
            },
            "JSXSelfClosingTag JSXOpenTag"(YY) {
              var rY;
              let DY = null === (rY = YY.firstChild) || void 0 === rY ? void 0 : rY.nextSibling,
                FY = YY.lastChild;
              return !DY || DY.type.isError ? null : {
                from: DY.to,
                to: FY.type.isError ? YY.to : FY.from
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
      gr = {
        test: YY => /^JSX/.test(YY.name),
        facet: (0, kY.t)({
          commentTokens: {
            block: {
              open: "{/*",
              close: "*/}"
            }
          }
        })
      },
      ar = Or.configure({
        dialect: "ts"
      }, "typescript"),
      vr = Or.configure({
        dialect: "jsx",
        props: [kY.kb.add((YY => YY.isTop ? [gr] : void 0))]
      }),
      ur = Or.configure({
        dialect: "jsx ts",
        props: [kY.kb.add((YY => YY.isTop ? [gr] : void 0))]
      }, "typescript");
    let sr = YY => ({
      label: YY,
      type: "keyword"
    });
    const ir = "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(sr),
      yr = ir.concat(["declare", "implements", "private", "protected", "public"].map(sr));

    function Qr() {
      let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        rY = YY.jsx ? YY.typescript ? ur : vr : YY.typescript ? ar : Or,
        DY = YY.typescript ? UY.concat(yr) : PY.concat(ir);
      return new kY.m(rY, [Or.data.of({
        autocomplete: (0, nY.o)(Ir, (0, nY.k)(DY))
      }), Or.data.of({
        autocomplete: Rr
      }), YY.jsx ? Er : []])
    }

    function or(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : YY.length;
      for (let FY = null === rY || void 0 === rY ? void 0 : rY.firstChild; FY; FY = FY.nextSibling)
        if ("JSXIdentifier" == FY.name || "JSXBuiltin" == FY.name || "JSXNamespacedName" == FY.name || "JSXMemberExpression" == FY.name) return YY.sliceString(FY.from, Math.min(FY.to, DY));
      return ""
    }
    const Wr = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      Er = xY.e.inputHandler.of(((YY, rY, DY, FY, AY) => {
        if ((Wr ? YY.composing : YY.compositionStarted) || YY.state.readOnly || rY != DY || ">" != FY && "/" != FY || !Or.isActiveAt(YY.state, rY, -1)) return !1;
        let IY = AY(),
          {
            state: RY
          } = IY,
          OY = RY.changeByRange((YY => {
            var rY;
            let DY, {
                head: AY
              } = YY,
              IY = (0, kY.sb)(RY).resolveInner(AY - 1, -1);
            if ("JSXStartTag" == IY.name && (IY = IY.parent), RY.doc.sliceString(AY - 1, AY) != FY || "JSXAttributeValue" == IY.name && IY.to > AY);
            else {
              if (">" == FY && "JSXFragmentTag" == IY.name) return {
                range: YY,
                changes: {
                  from: AY,
                  insert: "</>"
                }
              };
              if ("/" == FY && "JSXStartCloseTag" == IY.name) {
                let YY = IY.parent,
                  FY = YY.parent;
                if (FY && YY.from == AY - 2 && ((DY = or(RY.doc, FY.firstChild, AY)) || "JSXFragmentTag" == (null === (rY = FY.firstChild) || void 0 === rY ? void 0 : rY.name))) {
                  let YY = `${DY}>`;
                  return {
                    range: GY.n.cursor(AY + YY.length, -1),
                    changes: {
                      from: AY,
                      insert: YY
                    }
                  }
                }
              } else if (">" == FY) {
                let rY = function(YY) {
                  for (;;) {
                    if ("JSXOpenTag" == YY.name || "JSXSelfClosingTag" == YY.name || "JSXFragmentTag" == YY.name) return YY;
                    if ("JSXEscape" == YY.name || !YY.parent) return null;
                    YY = YY.parent
                  }
                }(IY);
                if (rY && "JSXOpenTag" == rY.name && !/^\/?>|^<\//.test(RY.doc.sliceString(AY, AY + 2)) && (DY = or(RY.doc, rY, AY))) return {
                  range: YY,
                  changes: {
                    from: AY,
                    insert: `</${DY}>`
                  }
                }
              }
            }
            return {
              range: YY
            }
          }));
        return !OY.changes.empty && (YY.dispatch([IY, RY.update(OY, {
          userEvent: "input.complete",
          scrollIntoView: !0
        })]), !0)
      }))
  },
  40417: (YY, rY, DY) => {
    DY.d(rY, {
      $: () => ZY,
      C: () => Er,
      E: () => PY,
      I: () => ar,
      K: () => nY,
      L: () => WY,
      P: () => zY,
      S: () => CY,
      W: () => jY,
      Y: () => GY,
      db: () => HY,
      e: () => Vr,
      f: () => fY,
      hb: () => Xr,
      j: () => yY,
      kb: () => uY,
      m: () => cY,
      n: () => Jr,
      nb: () => er,
      p: () => pY,
      r: () => cr,
      rb: () => oY,
      sb: () => QY,
      t: () => vY,
      w: () => bY,
      z: () => qY
    });
    var FY, AY = DY(40424),
      IY = DY(40395),
      RY = DY(40398),
      OY = DY(40431),
      gY = DY(40400);
    const aY = new AY.h;

    function vY(YY) {
      return IY.r.define({
        combine: YY ? rY => rY.concat(YY) : void 0
      })
    }
    const uY = new AY.h;
    class sY {
      constructor(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this.data = YY, this.name = FY, IY.p.prototype.hasOwnProperty("tree") || Object.defineProperty(IY.p.prototype, "tree", {
          get() {
            return QY(this)
          }
        }), this.parser = rY, this.extension = [BY.of(this), IY.p.languageData.of(((YY, rY, DY) => {
          let FY = iY(YY, rY, DY),
            AY = FY.type.prop(aY);
          if (!AY) return [];
          let IY = YY.facet(AY),
            RY = FY.type.prop(uY);
          if (RY) {
            let AY = FY.resolve(rY - FY.from, DY);
            for (let rY of RY)
              if (rY.test(AY, YY)) {
                let DY = YY.facet(rY.facet);
                return "replace" == rY.type ? DY : DY.concat(IY)
              }
          }
          return IY
        }))].concat(DY)
      }
      isActiveAt(YY, rY) {
        return iY(YY, rY, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1).type.prop(aY) == this.data
      }
      findRegions(YY) {
        let rY = YY.facet(BY);
        if ((null === rY || void 0 === rY ? void 0 : rY.data) == this.data) return [{
          from: 0,
          to: YY.doc.length
        }];
        if (!rY || !rY.allowsNesting) return [];
        let DY = [],
          FY = (YY, rY) => {
            if (YY.prop(aY) == this.data) return void DY.push({
              from: rY,
              to: rY + YY.length
            });
            let IY = YY.prop(AY.h.mounted);
            if (IY) {
              if (IY.tree.prop(aY) == this.data) {
                if (IY.overlay)
                  for (let YY of IY.overlay) DY.push({
                    from: YY.from + rY,
                    to: YY.to + rY
                  });
                else DY.push({
                  from: rY,
                  to: rY + YY.length
                });
                return
              }
              if (IY.overlay) {
                let YY = DY.length;
                if (FY(IY.tree, IY.overlay[0].from + rY), DY.length > YY) return
              }
            }
            for (let DY = 0; DY < YY.children.length; DY++) {
              let IY = YY.children[DY];
              IY instanceof AY.w && FY(IY, YY.positions[DY] + rY)
            }
          };
        return FY(QY(YY), 0), DY
      }
      get allowsNesting() {
        return !0
      }
    }

    function iY(YY, rY, DY) {
      let FY = YY.facet(BY),
        IY = QY(YY).topNode;
      if (!FY || FY.allowsNesting)
        for (let RY = IY; RY; RY = RY.enter(rY, DY, AY.e.ExcludeBuffers | AY.e.EnterBracketed)) RY.type.isTop && (IY = RY);
      return IY
    }
    sY.setState = IY.E.define();
    class yY extends sY {
      constructor(YY, rY, DY) {
        super(YY, rY, [], DY), this.parser = rY
      }
      static define(YY) {
        let rY = vY(YY.languageData);
        return new yY(rY, YY.parser.configure({
          props: [aY.add((YY => YY.isTop ? rY : void 0))]
        }), YY.name)
      }
      configure(YY, rY) {
        return new yY(this.data, this.parser.configure(YY), rY || this.name)
      }
      get allowsNesting() {
        return this.parser.hasWrappers()
      }
    }

    function QY(YY) {
      let rY = YY.field(sY.state, !1);
      return rY ? rY.tree : AY.w.empty
    }

    function oY(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YY.doc.length;
      var DY;
      return (null === (DY = YY.field(sY.state, !1)) || void 0 === DY ? void 0 : DY.context.isDone(rY)) || !1
    }

    function WY(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YY.viewport.to,
        DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        FY = function(YY, rY) {
          let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
          var FY;
          let AY = null === (FY = YY.field(sY.state, !1)) || void 0 === FY ? void 0 : FY.context;
          if (!AY) return null;
          let IY = AY.viewport;
          AY.updateViewport({
            from: 0,
            to: rY
          });
          let RY = AY.isDone(rY) || AY.work(DY, rY) ? AY.tree : null;
          return AY.updateViewport(IY), RY
        }(YY.state, rY, DY);
      return FY != QY(YY.state) && YY.dispatch({}), !!FY
    }
    class EY {
      constructor(YY) {
        this.doc = YY, this.cursorPos = 0, this.string = "", this.cursor = YY.iter()
      }
      get length() {
        return this.doc.length
      }
      syncTo(YY) {
        return this.string = this.cursor.next(YY - this.cursorPos).value, this.cursorPos = YY + this.string.length, this.cursorPos - this.string.length
      }
      chunk(YY) {
        return this.syncTo(YY), this.string
      }
      get lineChunks() {
        return !0
      }
      read(YY, rY) {
        let DY = this.cursorPos - this.string.length;
        return YY < DY || rY >= this.cursorPos ? this.doc.sliceString(YY, rY) : this.string.slice(YY - DY, rY - DY)
      }
    }
    let mY = null;
    class VY {
      constructor(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          FY = arguments.length > 3 ? arguments[3] : void 0,
          AY = arguments.length > 4 ? arguments[4] : void 0,
          IY = arguments.length > 5 ? arguments[5] : void 0,
          RY = arguments.length > 6 ? arguments[6] : void 0,
          OY = arguments.length > 7 ? arguments[7] : void 0;
        this.parser = YY, this.state = rY, this.fragments = DY, this.tree = FY, this.treeLen = AY, this.viewport = IY, this.skipped = RY, this.scheduleOn = OY, this.parse = null, this.tempSkipped = []
      }
      static create(YY, rY, DY) {
        return new VY(YY, rY, [], AY.w.empty, 0, DY, [], null)
      }
      startParse() {
        return this.parser.startParse(new EY(this.state.doc), this.fragments)
      }
      work(YY, rY) {
        return null != rY && rY >= this.state.doc.length && (rY = void 0), this.tree != AY.w.empty && this.isDone(null !== rY && void 0 !== rY ? rY : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext((() => {
          var DY;
          if ("number" == typeof YY) {
            let rY = Date.now() + YY;
            YY = () => Date.now() > rY
          }
          for (this.parse || (this.parse = this.startParse()), null != rY && (null == this.parse.stoppedAt || this.parse.stoppedAt > rY) && rY < this.state.doc.length && this.parse.stopAt(rY);;) {
            let FY = this.parse.advance();
            if (FY) {
              if (this.fragments = this.withoutTempSkipped(AY.t.addTree(FY, this.fragments, null != this.parse.stoppedAt)), this.treeLen = null !== (DY = this.parse.stoppedAt) && void 0 !== DY ? DY : this.state.doc.length, this.tree = FY, this.parse = null, !(this.treeLen < (null !== rY && void 0 !== rY ? rY : this.state.doc.length))) return !0;
              this.parse = this.startParse()
            }
            if (YY()) return !1
          }
        }))
      }
      takeTree() {
        let YY, rY;
        this.parse && (YY = this.parse.parsedPos) >= this.treeLen && ((null == this.parse.stoppedAt || this.parse.stoppedAt > YY) && this.parse.stopAt(YY), this.withContext((() => {
          for (; !(rY = this.parse.advance()););
        })), this.treeLen = YY, this.tree = rY, this.fragments = this.withoutTempSkipped(AY.t.addTree(this.tree, this.fragments, !0)), this.parse = null)
      }
      withContext(YY) {
        let rY = mY;
        mY = this;
        try {
          return YY()
        } finally {
          mY = rY
        }
      }
      withoutTempSkipped(YY) {
        for (let rY; rY = this.tempSkipped.pop();) YY = SY(YY, rY.from, rY.to);
        return YY
      }
      changes(YY, rY) {
        let {
          fragments: DY,
          tree: FY,
          treeLen: IY,
          viewport: RY,
          skipped: OY
        } = this;
        if (this.takeTree(), !YY.empty) {
          let rY = [];
          if (YY.iterChangedRanges(((YY, DY, FY, AY) => rY.push({
              fromA: YY,
              toA: DY,
              fromB: FY,
              toB: AY
            }))), DY = AY.t.applyChanges(DY, rY), FY = AY.w.empty, IY = 0, RY = {
              from: YY.mapPos(RY.from, -1),
              to: YY.mapPos(RY.to, 1)
            }, this.skipped.length) {
            OY = [];
            for (let rY of this.skipped) {
              let DY = YY.mapPos(rY.from, 1),
                FY = YY.mapPos(rY.to, -1);
              DY < FY && OY.push({
                from: DY,
                to: FY
              })
            }
          }
        }
        return new VY(this.parser, rY, DY, FY, IY, RY, OY, this.scheduleOn)
      }
      updateViewport(YY) {
        if (this.viewport.from == YY.from && this.viewport.to == YY.to) return !1;
        this.viewport = YY;
        let rY = this.skipped.length;
        for (let DY = 0; DY < this.skipped.length; DY++) {
          let {
            from: rY,
            to: FY
          } = this.skipped[DY];
          rY < YY.to && FY > YY.from && (this.fragments = SY(this.fragments, rY, FY), this.skipped.splice(DY--, 1))
        }
        return !(this.skipped.length >= rY) && (this.reset(), !0)
      }
      reset() {
        this.parse && (this.takeTree(), this.parse = null)
      }
      skipUntilInView(YY, rY) {
        this.skipped.push({
          from: YY,
          to: rY
        })
      }
      static getSkippingParser(YY) {
        return new class extends AY.s {
          createParse(rY, DY, FY) {
            let IY = FY[0].from,
              RY = FY[FY.length - 1].to;
            return {
              parsedPos: IY,
              advance() {
                let rY = mY;
                if (rY) {
                  for (let YY of FY) rY.tempSkipped.push(YY);
                  YY && (rY.scheduleOn = rY.scheduleOn ? Promise.all([rY.scheduleOn, YY]) : YY)
                }
                return this.parsedPos = RY, new AY.w(AY.l.none, [], [], RY - IY)
              },
              stoppedAt: null,
              stopAt() {}
            }
          }
        }
      }
      isDone(YY) {
        YY = Math.min(YY, this.state.doc.length);
        let rY = this.fragments;
        return this.treeLen >= YY && rY.length && 0 == rY[0].from && rY[0].to >= YY
      }
      static get() {
        return mY
      }
    }

    function SY(YY, rY, DY) {
      return AY.t.applyChanges(YY, [{
        fromA: rY,
        toA: DY,
        fromB: rY,
        toB: DY
      }])
    }
    class lY {
      constructor(YY) {
        this.context = YY, this.tree = YY.tree
      }
      apply(YY) {
        if (!YY.docChanged && this.tree == this.context.tree) return this;
        let rY = this.context.changes(YY.changes, YY.state),
          DY = this.context.treeLen == YY.startState.doc.length ? void 0 : Math.max(YY.changes.mapPos(this.context.treeLen), rY.viewport.to);
        return rY.work(20, DY) || rY.takeTree(), new lY(rY)
      }
      static init(YY) {
        let rY = Math.min(3e3, YY.doc.length),
          DY = VY.create(YY.facet(BY).parser, YY, {
            from: 0,
            to: rY
          });
        return DY.work(20, rY) || DY.takeTree(), new lY(DY)
      }
    }
    sY.state = IY.G.define({
      create: lY.init,
      update(YY, rY) {
        for (let DY of rY.effects)
          if (DY.is(sY.setState)) return DY.value;
        return rY.startState.facet(BY) != rY.state.facet(BY) ? lY.init(rY.state) : YY.apply(rY)
      }
    });
    let TY = YY => {
      let rY = setTimeout((() => YY()), 500);
      return () => clearTimeout(rY)
    };
    "undefined" != typeof requestIdleCallback && (TY = YY => {
      let rY = -1,
        DY = setTimeout((() => {
          rY = requestIdleCallback(YY, {
            timeout: 400
          })
        }), 100);
      return () => rY < 0 ? clearTimeout(DY) : cancelIdleCallback(rY)
    });
    const eY = "undefined" != typeof navigator && (null === (FY = navigator.scheduling) || void 0 === FY ? void 0 : FY.isInputPending) ? () => navigator.scheduling.isInputPending() : null,
      NY = RY.k.fromClass(class {
        constructor(YY) {
          this.view = YY, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork()
        }
        update(YY) {
          let rY = this.view.state.field(sY.state).context;
          (rY.updateViewport(YY.view.viewport) || this.view.viewport.to > rY.treeLen) && this.scheduleWork(), (YY.docChanged || YY.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(rY)
        }
        scheduleWork() {
          if (this.working) return;
          let {
            state: YY
          } = this.view, rY = YY.field(sY.state);
          rY.tree == rY.context.tree && rY.context.isDone(YY.doc.length) || (this.working = TY(this.work))
        }
        work(YY) {
          this.working = null;
          let rY = Date.now();
          if (this.chunkEnd < rY && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = rY + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
          let {
            state: DY,
            viewport: {
              to: FY
            }
          } = this.view, AY = DY.field(sY.state);
          if (AY.tree == AY.context.tree && AY.context.isDone(FY + 1e5)) return;
          let IY = Date.now() + Math.min(this.chunkBudget, 100, YY && !eY ? Math.max(25, YY.timeRemaining() - 5) : 1e9),
            RY = AY.context.treeLen < FY && DY.doc.length > FY + 1e3,
            OY = AY.context.work((() => eY && eY() || Date.now() > IY), FY + (RY ? 0 : 1e5));
          this.chunkBudget -= Date.now() - rY, (OY || this.chunkBudget <= 0) && (AY.context.takeTree(), this.view.dispatch({
            effects: sY.setState.of(new lY(AY.context))
          })), this.chunkBudget > 0 && (!OY || RY) && this.scheduleWork(), this.checkAsyncSchedule(AY.context)
        }
        checkAsyncSchedule(YY) {
          YY.scheduleOn && (this.workScheduled++, YY.scheduleOn.then((() => this.scheduleWork())).catch((YY => (0, RY._)(this.view.state, YY))).then((() => this.workScheduled--)), YY.scheduleOn = null)
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
      BY = IY.r.define({
        combine: YY => YY.length ? YY[0] : null,
        enables: YY => [sY.state, NY, RY.e.contentAttributes.compute([YY], (rY => {
          let DY = rY.facet(YY);
          return DY && DY.name ? {
            "data-language": DY.name
          } : {}
        }))]
      });
    class cY {
      constructor(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        this.language = YY, this.support = rY, this.extension = [YY, rY]
      }
    }
    const KY = IY.r.define(),
      HY = IY.r.define({
        combine: YY => {
          if (!YY.length) return "  ";
          let rY = YY[0];
          if (!rY || /\S/.test(rY) || Array.from(rY).some((YY => YY != rY[0]))) throw new Error("Invalid indent unit: " + JSON.stringify(YY[0]));
          return rY
        }
      });

    function zY(YY) {
      let rY = YY.facet(HY);
      return 9 == rY.charCodeAt(0) ? YY.tabSize * rY.length : rY.length
    }

    function ZY(YY, rY) {
      let DY = "",
        FY = YY.tabSize,
        AY = YY.facet(HY)[0];
      if ("\t" == AY) {
        for (; rY >= FY;) DY += "\t", rY -= FY;
        AY = " "
      }
      for (let IY = 0; IY < rY; IY++) DY += AY;
      return DY
    }

    function CY(YY, rY) {
      YY instanceof IY.p && (YY = new fY(YY));
      for (let FY of YY.state.facet(KY)) {
        let DY = FY(YY, rY);
        if (void 0 !== DY) return DY
      }
      let DY = QY(YY.state);
      return DY.length >= rY ? function(YY, rY, DY) {
        let FY = rY.resolveStack(DY),
          AY = rY.resolveInner(DY, -1).resolve(DY, 0).enterUnfinishedNodesBefore(DY);
        if (AY != FY.node) {
          let YY = [];
          for (let rY = AY; rY && !(rY.from < FY.node.from || rY.to > FY.node.to || rY.from == FY.node.from && rY.type == FY.node.type); rY = rY.parent) YY.push(rY);
          for (let rY = YY.length - 1; rY >= 0; rY--) FY = {
            node: YY[rY],
            next: FY
          }
        }
        return hY(FY, YY, DY)
      }(YY, DY, rY) : null
    }
    class fY {
      constructor(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.state = YY, this.options = rY, this.unit = zY(YY)
      }
      lineAt(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          DY = this.state.doc.lineAt(YY),
          {
            simulateBreak: FY,
            simulateDoubleBreak: AY
          } = this.options;
        return null != FY && FY >= DY.from && FY <= DY.to ? AY && FY == YY ? {
          text: "",
          from: YY
        } : (rY < 0 ? FY < YY : FY <= YY) ? {
          text: DY.text.slice(FY - DY.from),
          from: FY
        } : {
          text: DY.text.slice(0, FY - DY.from),
          from: DY.from
        } : DY
      }
      textAfterPos(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (this.options.simulateDoubleBreak && YY == this.options.simulateBreak) return "";
        let {
          text: DY,
          from: FY
        } = this.lineAt(YY, rY);
        return DY.slice(YY - FY, Math.min(DY.length, YY + 100 - FY))
      }
      column(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: DY,
            from: FY
          } = this.lineAt(YY, rY),
          AY = this.countColumn(DY, YY - FY),
          IY = this.options.overrideIndentation ? this.options.overrideIndentation(FY) : -1;
        return IY > -1 && (AY += IY - this.countColumn(DY, DY.search(/\S|$/))), AY
      }
      countColumn(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YY.length;
        return (0, IY.Z)(YY, this.state.tabSize, rY)
      }
      lineIndent(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: DY,
            from: FY
          } = this.lineAt(YY, rY),
          AY = this.options.overrideIndentation;
        if (AY) {
          let YY = AY(FY);
          if (YY > -1) return YY
        }
        return this.countColumn(DY, DY.search(/\S|$/))
      }
      get simulatedBreak() {
        return this.options.simulateBreak || null
      }
    }
    const jY = new AY.h;

    function hY(YY, rY, DY) {
      for (let FY = YY; FY; FY = FY.next) {
        let YY = dY(FY.node);
        if (YY) return YY(MY.create(rY, DY, FY))
      }
      return 0
    }

    function dY(YY) {
      let rY = YY.type.prop(jY);
      if (rY) return rY;
      let DY, FY = YY.firstChild;
      if (FY && (DY = FY.type.prop(AY.h.closedBy))) {
        let rY = YY.lastChild,
          FY = rY && DY.indexOf(rY.name) > -1;
        return YY => XY(YY, !0, 1, void 0, FY && ! function(YY) {
          return YY.pos == YY.options.simulateBreak && YY.options.simulateDoubleBreak
        }(YY) ? rY.from : void 0)
      }
      return null == YY.parent ? JY : null
    }

    function JY() {
      return 0
    }
    class MY extends fY {
      constructor(YY, rY, DY) {
        super(YY.state, YY.options), this.base = YY, this.pos = rY, this.context = DY
      }
      get node() {
        return this.context.node
      }
      static create(YY, rY, DY) {
        return new MY(YY, rY, DY)
      }
      get textAfter() {
        return this.textAfterPos(this.pos)
      }
      get baseIndent() {
        return this.baseIndentFor(this.node)
      }
      baseIndentFor(YY) {
        let rY = this.state.doc.lineAt(YY.from);
        for (;;) {
          let DY = YY.resolve(rY.from);
          for (; DY.parent && DY.parent.from == DY.from;) DY = DY.parent;
          if (wY(DY, YY)) break;
          rY = this.state.doc.lineAt(DY.from)
        }
        return this.lineIndent(rY.from)
      }
      continue () {
        return hY(this.context.next, this.base, this.pos)
      }
    }

    function wY(YY, rY) {
      for (let DY = rY; DY; DY = DY.parent)
        if (YY == DY) return !0;
      return !1
    }

    function bY(YY) {
      let {
        closing: rY,
        align: DY = !0,
        units: FY = 1
      } = YY;
      return YY => XY(YY, DY, FY, rY)
    }

    function XY(YY, rY, DY, FY, AY) {
      let IY = YY.textAfter,
        RY = IY.match(/^\s*/)[0].length,
        OY = FY && IY.slice(RY, RY + FY.length) == FY || AY == YY.pos + RY,
        gY = rY ? function(YY) {
          let rY = YY.node,
            DY = rY.childAfter(rY.from),
            FY = rY.lastChild;
          if (!DY) return null;
          let AY = YY.options.simulateBreak,
            IY = YY.state.doc.lineAt(DY.from),
            RY = null == AY || AY <= IY.from ? IY.to : Math.min(IY.to, AY);
          for (let OY = DY.to;;) {
            let YY = rY.childAfter(OY);
            if (!YY || YY == FY) return null;
            if (!YY.type.isSkipped) {
              if (YY.from >= RY) return null;
              let rY = /^ */.exec(IY.text.slice(DY.to - IY.from))[0].length;
              return {
                from: DY.from,
                to: DY.to + rY
              }
            }
            OY = YY.to
          }
        }(YY) : null;
      return gY ? OY ? YY.column(gY.from) : YY.column(gY.to) : YY.baseIndent + (OY ? 0 : YY.unit * DY)
    }
    const qY = YY => YY.baseIndent;

    function pY() {
      let {
        except: YY,
        units: rY = 1
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return DY => {
        let FY = YY && YY.test(DY.textAfter);
        return DY.baseIndent + (FY ? 0 : rY * DY.unit)
      }
    }
    const kY = 200;

    function GY() {
      return IY.p.transactionFilter.of((YY => {
        if (!YY.docChanged || !YY.isUserEvent("input.type") && !YY.isUserEvent("input.complete")) return YY;
        let rY = YY.startState.languageDataAt("indentOnInput", YY.startState.selection.main.head);
        if (!rY.length) return YY;
        let DY = YY.newDoc,
          {
            head: FY
          } = YY.newSelection.main,
          AY = DY.lineAt(FY);
        if (FY > AY.from + kY) return YY;
        let IY = DY.sliceString(AY.from, FY);
        if (!rY.some((YY => YY.test(IY)))) return YY;
        let {
          state: RY
        } = YY, OY = -1, gY = [];
        for (let {
            head: aY
          }
          of RY.selection.ws) {
          let YY = RY.doc.lineAt(aY);
          if (YY.from == OY) continue;
          OY = YY.from;
          let rY = CY(RY, YY.from);
          if (null == rY) continue;
          let DY = /^\s*/.exec(YY.text)[0],
            FY = ZY(RY, rY);
          DY != FY && gY.push({
            from: YY.from,
            to: YY.from + DY.length,
            insert: FY
          })
        }
        return gY.length ? [YY, {
          changes: gY,
          sequential: !0
        }] : YY
      }))
    }
    const xY = IY.r.define(),
      nY = new AY.h;

    function PY(YY) {
      let rY = YY.firstChild,
        DY = YY.lastChild;
      return rY && rY.to < DY.from ? {
        from: rY.to,
        to: DY.type.isError ? YY.to : DY.from
      } : null
    }

    function UY(YY) {
      let rY = YY.lastChild;
      return rY && rY.to == YY.to && rY.type.isError
    }

    function LY(YY, rY, DY) {
      for (let FY of YY.facet(xY)) {
        let AY = FY(YY, rY, DY);
        if (AY) return AY
      }
      return function(YY, rY, DY) {
        let FY = QY(YY);
        if (FY.length < DY) return null;
        let AY = null;
        for (let IY = FY.resolveStack(DY, 1); IY; IY = IY.next) {
          let RY = IY.node;
          if (RY.to <= DY || RY.from > DY) continue;
          if (AY && RY.from < rY) break;
          let OY = RY.type.prop(nY);
          if (OY && (RY.to < FY.length - 50 || FY.length == YY.doc.length || !UY(RY))) {
            let FY = OY(RY, YY);
            FY && FY.from <= DY && FY.from >= rY && FY.to > DY && (AY = FY)
          }
        }
        return AY
      }(YY, rY, DY)
    }

    function tY(YY, rY) {
      let DY = rY.mapPos(YY.from, 1),
        FY = rY.mapPos(YY.to, -1);
      return DY >= FY ? void 0 : {
        from: DY,
        to: FY
      }
    }
    const Yr = IY.E.define({
        map: tY
      }),
      rr = IY.E.define({
        map: tY
      });

    function Dr(YY) {
      let rY = [];
      for (let {
          head: DY
        }
        of YY.state.selection.ws) rY.some((YY => YY.from <= DY && YY.to >= DY)) || rY.push(YY.lineBlockAt(DY));
      return rY
    }
    const Fr = IY.G.define({
      create: () => RY.b.none,
      update(YY, rY) {
        rY.isUserEvent("delete") && rY.changes.iterChangedRanges(((rY, DY) => YY = Ar(YY, rY, DY))), YY = YY.map(rY.changes);
        for (let DY of rY.effects)
          if (DY.is(Yr) && !Rr(YY, DY.value.from, DY.value.to)) {
            let {
              preparePlaceholder: FY
            } = rY.state.facet(ur), AY = FY ? RY.b.replace({
              widget: new Qr(FY(rY.state, DY.value))
            }) : yr;
            YY = YY.update({
              add: [AY.range(DY.value.from, DY.value.to)]
            })
          } else DY.is(rr) && (YY = YY.update({
            filter: (YY, rY) => DY.value.from != YY || DY.value.to != rY,
            filterFrom: DY.value.from,
            filterTo: DY.value.to
          }));
        return rY.selection && (YY = Ar(YY, rY.selection.main.head)), YY
      },
      provide: YY => RY.e.CA.from(YY),
      toJSON(YY, rY) {
        let DY = [];
        return YY.between(0, rY.doc.length, ((YY, rY) => {
          DY.push(YY, rY)
        })), DY
      },
      fromJSON(YY) {
        if (!Array.isArray(YY) || YY.length % 2) throw new RangeError("Invalid JSON for fold state");
        let rY = [];
        for (let DY = 0; DY < YY.length;) {
          let FY = YY[DY++],
            AY = YY[DY++];
          if ("number" != typeof FY || "number" != typeof AY) throw new RangeError("Invalid JSON for fold state");
          rY.push(yr.range(FY, AY))
        }
        return RY.b.set(rY, !0)
      }
    });

    function Ar(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : rY,
        FY = !1;
      return YY.between(rY, DY, ((YY, AY) => {
        YY < DY && AY > rY && (FY = !0)
      })), FY ? YY.update({
        filterFrom: rY,
        filterTo: DY,
        filter: (YY, FY) => YY >= DY || FY <= rY
      }) : YY
    }

    function Ir(YY, rY, DY) {
      var FY;
      let AY = null;
      return null === (FY = YY.field(Fr, !1)) || void 0 === FY || FY.between(rY, DY, ((YY, rY) => {
        (!AY || AY.from > YY) && (AY = {
          from: YY,
          to: rY
        })
      })), AY
    }

    function Rr(YY, rY, DY) {
      let FY = !1;
      return YY.between(rY, rY, ((YY, AY) => {
        YY == rY && AY == DY && (FY = !0)
      })), FY
    }

    function Or(YY, rY) {
      return YY.field(Fr, !1) ? rY : rY.concat(IY.E.appendConfig.of(sr()))
    }

    function gr(YY, rY) {
      let DY = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        FY = YY.state.doc.lineAt(rY.from).number,
        AY = YY.state.doc.lineAt(rY.to).number;
      return RY.e.announce.of(`${YY.state.phrase(DY?"Folded lines":"Unfolded lines")} ${FY} ${YY.state.phrase("to")} ${AY}.`)
    }
    const ar = [{
        key: "Ctrl-Shift-[",
        mac: "Cmd-Alt-[",
        run: YY => {
          for (let rY of Dr(YY)) {
            let DY = LY(YY.state, rY.from, rY.to);
            if (DY) return YY.dispatch({
              effects: Or(YY.state, [Yr.of(DY), gr(YY, DY)])
            }), !0
          }
          return !1
        }
      }, {
        key: "Ctrl-Shift-]",
        mac: "Cmd-Alt-]",
        run: YY => {
          if (!YY.state.field(Fr, !1)) return !1;
          let rY = [];
          for (let DY of Dr(YY)) {
            let FY = Ir(YY.state, DY.from, DY.to);
            FY && rY.push(rr.of(FY), gr(YY, FY, !1))
          }
          return rY.length && YY.dispatch({
            effects: rY
          }), rY.length > 0
        }
      }, {
        key: "Ctrl-Alt-[",
        run: YY => {
          let {
            state: rY
          } = YY, DY = [];
          for (let FY = 0; FY < rY.doc.length;) {
            let AY = YY.lineBlockAt(FY),
              IY = LY(rY, AY.from, AY.to);
            IY && DY.push(Yr.of(IY)), FY = (IY ? YY.lineBlockAt(IY.to) : AY).to + 1
          }
          return DY.length && YY.dispatch({
            effects: Or(YY.state, DY)
          }), !!DY.length
        }
      }, {
        key: "Ctrl-Alt-]",
        run: YY => {
          let rY = YY.state.field(Fr, !1);
          if (!rY || !rY.size) return !1;
          let DY = [];
          return rY.between(0, YY.state.doc.length, ((YY, rY) => {
            DY.push(rr.of({
              from: YY,
              to: rY
            }))
          })), YY.dispatch({
            effects: DY
          }), !0
        }
      }],
      vr = {
        placeholderDOM: null,
        preparePlaceholder: null,
        placeholderText: "\u2026"
      },
      ur = IY.r.define({
        combine: YY => (0, IY.Y)(YY, vr)
      });

    function sr(YY) {
      let rY = [Fr, mr];
      return YY && rY.push(ur.of(YY)), rY
    }

    function ir(YY, rY) {
      let {
        state: DY
      } = YY, FY = DY.facet(ur), AY = rY => {
        let DY = YY.lineBlockAt(YY.posAtDOM(rY.target)),
          FY = Ir(YY.state, DY.from, DY.to);
        FY && YY.dispatch({
          effects: rr.of(FY)
        }), rY.preventDefault()
      };
      if (FY.placeholderDOM) return FY.placeholderDOM(YY, AY, rY);
      let IY = document.createElement("span");
      return IY.textContent = FY.placeholderText, IY.setAttribute("aria-label", DY.phrase("folded code")), IY.title = DY.phrase("unfold"), IY.className = "cm-foldPlaceholder", IY.onclick = AY, IY
    }
    const yr = RY.b.replace({
      widget: new class extends RY.n {
        toDOM(YY) {
          return ir(YY, null)
        }
      }
    });
    class Qr extends RY.n {
      constructor(YY) {
        super(), this.value = YY
      }
      eq(YY) {
        return this.value == YY.value
      }
      toDOM(YY) {
        return ir(YY, this.value)
      }
    }
    const or = {
      openText: "\u2304",
      closedText: "\u203a",
      markerDOM: null,
      domEventHandlers: {},
      foldingChanged: () => !1
    };
    class Wr extends RY.h {
      constructor(YY, rY) {
        super(), this.config = YY, this.open = rY
      }
      eq(YY) {
        return this.config == YY.config && this.open == YY.open
      }
      toDOM(YY) {
        if (this.config.markerDOM) return this.config.markerDOM(this.open);
        let rY = document.createElement("span");
        return rY.textContent = this.open ? this.config.openText : this.config.closedText, rY.title = YY.state.phrase(this.open ? "Fold line" : "Unfold line"), rY
      }
    }

    function Er() {
      let YY = {
          ...or,
          ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        },
        rY = new Wr(YY, !0),
        DY = new Wr(YY, !1),
        FY = RY.k.fromClass(class {
          constructor(YY) {
            this.from = YY.viewport.from, this.markers = this.buildMarkers(YY)
          }
          update(rY) {
            (rY.docChanged || rY.viewportChanged || rY.startState.facet(BY) != rY.state.facet(BY) || rY.startState.field(Fr, !1) != rY.state.field(Fr, !1) || QY(rY.startState) != QY(rY.state) || YY.foldingChanged(rY)) && (this.markers = this.buildMarkers(rY.view))
          }
          buildMarkers(YY) {
            let FY = new IY.z;
            for (let AY of YY.viewportLineBlocks) {
              let IY = Ir(YY.state, AY.from, AY.to) ? DY : LY(YY.state, AY.from, AY.to) ? rY : null;
              IY && FY.add(AY.from, AY.from, IY)
            }
            return FY.finish()
          }
        }),
        {
          domEventHandlers: AY
        } = YY;
      return [FY, (0, RY.F)({
        class: "cm-foldGutter",
        markers(YY) {
          var rY;
          return (null === (rY = YY.plugin(FY)) || void 0 === rY ? void 0 : rY.markers) || IY.B.empty
        },
        initialSpacer: () => new Wr(YY, !1),
        domEventHandlers: {
          ...AY,
          click: (YY, rY, DY) => {
            if (AY.click && AY.click(YY, rY, DY)) return !0;
            let FY = Ir(YY.state, rY.from, rY.to);
            if (FY) return YY.dispatch({
              effects: rr.of(FY)
            }), !0;
            let IY = LY(YY.state, rY.from, rY.to);
            return !!IY && (YY.dispatch({
              effects: Yr.of(IY)
            }), !0)
          }
        }
      }), sr()]
    }
    const mr = RY.e.baseTheme({
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
    class Vr {
      constructor(YY, rY) {
        let DY;

        function FY(YY) {
          let rY = gY.e.newName();
          return (DY || (DY = Object.create(null)))["." + rY] = YY, rY
        }
        this.specs = YY;
        const AY = "string" == typeof rY.all ? rY.all : rY.all ? FY(rY.all) : void 0,
          IY = rY.scope;
        this.scope = IY instanceof sY ? YY => YY.prop(aY) == IY.data : IY ? YY => YY == IY : void 0, this.style = (0, OY.i)(YY.map((YY => ({
          tag: YY.tag,
          class: YY.class || FY(Object.assign({}, YY, {
            tag: null
          }))
        }))), {
          all: AY
        }).style, this.module = DY ? new gY.e(DY) : null, this.themeType = rY.themeType
      }
      static define(YY, rY) {
        return new Vr(YY, rY || {})
      }
    }
    const Sr = IY.r.define(),
      lr = IY.r.define({
        combine: YY => YY.length ? [YY[0]] : null
      });

    function Tr(YY) {
      let rY = YY.facet(Sr);
      return rY.length ? rY : YY.facet(lr)
    }

    function er(YY, rY) {
      let DY, FY = [Br];
      return YY instanceof Vr && (YY.module && FY.push(RY.e.styleModule.of(YY.module)), DY = YY.themeType), (null === rY || void 0 === rY ? void 0 : rY.fallback) ? FY.push(lr.of(YY)) : DY ? FY.push(Sr.computeN([RY.e.darkTheme], (rY => rY.facet(RY.e.darkTheme) == ("dark" == DY) ? [YY] : []))) : FY.push(Sr.of(YY)), FY
    }
    class Nr {
      constructor(YY) {
        this.markCache = Object.create(null), this.tree = QY(YY.state), this.CA = this.buildDeco(YY, Tr(YY.state)), this.decoratedTo = YY.viewport.to
      }
      update(YY) {
        let rY = QY(YY.state),
          DY = Tr(YY.state),
          FY = DY != Tr(YY.startState),
          {
            viewport: AY
          } = YY.view,
          IY = YY.changes.mapPos(this.decoratedTo, 1);
        rY.length < AY.to && !FY && rY.type == this.tree.type && IY >= AY.to ? (this.CA = this.CA.map(YY.changes), this.decoratedTo = IY) : (rY != this.tree || YY.viewportChanged || FY) && (this.tree = rY, this.CA = this.buildDeco(YY.view, DY), this.decoratedTo = AY.to)
      }
      buildDeco(YY, rY) {
        if (!rY || !this.tree.length) return RY.b.none;
        let DY = new IY.z;
        for (let {
            from: FY,
            to: AY
          }
          of YY.B_)(0, OY.b)(this.tree, rY, ((YY, rY, FY) => {
          DY.add(YY, rY, this.markCache[FY] || (this.markCache[FY] = RY.b.mark({
            class: FY
          })))
        }), FY, AY);
        return DY.finish()
      }
    }
    const Br = IY.v.high(RY.k.fromClass(Nr, {
        CA: YY => YY.CA
      })),
      cr = Vr.define([{
        tag: OY.j.meta,
        color: "#404740"
      }, {
        tag: OY.j.link,
        textDecoration: "underline"
      }, {
        tag: OY.j.heading,
        textDecoration: "underline",
        fontWeight: "bold"
      }, {
        tag: OY.j.emphasis,
        fontStyle: "italic"
      }, {
        tag: OY.j.strong,
        fontWeight: "bold"
      }, {
        tag: OY.j.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: OY.j.keyword,
        color: "#708"
      }, {
        tag: [OY.j.atom, OY.j.bool, OY.j.url, OY.j.contentSeparator, OY.j.labelName],
        color: "#219"
      }, {
        tag: [OY.j.literal, OY.j.inserted],
        color: "#164"
      }, {
        tag: [OY.j.string, OY.j.deleted],
        color: "#a11"
      }, {
        tag: [OY.j.regexp, OY.j.escape, OY.j.special(OY.j.string)],
        color: "#e40"
      }, {
        tag: OY.j.definition(OY.j.variableName),
        color: "#00f"
      }, {
        tag: OY.j.local(OY.j.variableName),
        color: "#30a"
      }, {
        tag: [OY.j.typeName, OY.j.namespace],
        color: "#085"
      }, {
        tag: OY.j.className,
        color: "#167"
      }, {
        tag: [OY.j.special(OY.j.variableName), OY.j.macroName],
        color: "#256"
      }, {
        tag: OY.j.definition(OY.j.propertyName),
        color: "#00c"
      }, {
        tag: OY.j.comment,
        color: "#940"
      }, {
        tag: OY.j.invalid,
        color: "#f00"
      }]),
      Kr = RY.e.baseTheme({
        "&.cm-focused .cm-matchingBracket": {
          backgroundColor: "#328c8252"
        },
        "&.cm-focused .cm-nonmatchingBracket": {
          backgroundColor: "#bb555544"
        }
      }),
      Hr = 1e4,
      zr = "()[]{}",
      Zr = IY.r.define({
        combine: YY => (0, IY.Y)(YY, {
          afterCursor: !0,
          brackets: zr,
          maxScanDistance: Hr,
          renderMatch: jr
        })
      }),
      Cr = RY.b.mark({
        class: "cm-matchingBracket"
      }),
      fr = RY.b.mark({
        class: "cm-nonmatchingBracket"
      });

    function jr(YY) {
      let rY = [],
        DY = YY.matched ? Cr : fr;
      return rY.push(DY.range(YY.start.from, YY.start.to)), YY.end && rY.push(DY.range(YY.end.from, YY.end.to)), rY
    }

    function hr(YY) {
      let rY = [],
        DY = YY.facet(Zr);
      for (let FY of YY.selection.ws) {
        if (!FY.empty) continue;
        let AY = Xr(YY, FY.head, -1, DY) || FY.head > 0 && Xr(YY, FY.head - 1, 1, DY) || DY.afterCursor && (Xr(YY, FY.head, 1, DY) || FY.head < YY.doc.length && Xr(YY, FY.head + 1, -1, DY));
        AY && (rY = rY.concat(DY.renderMatch(AY, YY)))
      }
      return RY.b.set(rY, !0)
    }
    const dr = [RY.k.fromClass(class {
      constructor(YY) {
        this.paused = !1, this.CA = hr(YY.state)
      }
      update(YY) {
        (YY.docChanged || YY.selectionSet || this.paused) && (YY.view.composing ? (this.CA = this.CA.map(YY.changes), this.paused = !0) : (this.CA = hr(YY.state), this.paused = !1))
      }
    }, {
      CA: YY => YY.CA
    }), Kr];

    function Jr() {
      let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Zr.of(YY), dr]
    }
    const Mr = new AY.h;

    function wr(YY, rY, DY) {
      let FY = YY.prop(rY < 0 ? AY.h.openedBy : AY.h.closedBy);
      if (FY) return FY;
      if (1 == YY.name.length) {
        let FY = DY.indexOf(YY.name);
        if (FY > -1 && FY % 2 == (rY < 0 ? 1 : 0)) return [DY[FY + rY]]
      }
      return null
    }

    function br(YY) {
      let rY = YY.type.prop(Mr);
      return rY ? rY(YY.node) : YY
    }

    function Xr(YY, rY, DY) {
      let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        AY = FY.maxScanDistance || Hr,
        IY = FY.brackets || zr,
        RY = QY(YY),
        OY = RY.resolveInner(rY, DY);
      for (let gY = OY; gY; gY = gY.parent) {
        let FY = wr(gY.type, DY, IY);
        if (FY && gY.from < gY.to) {
          let AY = br(gY);
          if (AY && (DY > 0 ? rY >= AY.from && rY < AY.to : rY > AY.from && rY <= AY.to)) return qr(YY, rY, DY, gY, AY, FY, IY)
        }
      }
      return function(YY, rY, DY, FY, AY, IY, RY) {
        if (DY < 0 ? !rY : rY == YY.doc.length) return null;
        let OY = DY < 0 ? YY.sliceDoc(rY - 1, rY) : YY.sliceDoc(rY, rY + 1),
          gY = RY.indexOf(OY);
        if (gY < 0 || gY % 2 == 0 != DY > 0) return null;
        let aY = {
            from: DY < 0 ? rY - 1 : rY,
            to: DY > 0 ? rY + 1 : rY
          },
          vY = YY.doc.iterRange(rY, DY > 0 ? YY.doc.length : 0),
          uY = 0;
        for (let sY = 0; !vY.next().done && sY <= IY;) {
          let YY = vY.value;
          DY < 0 && (sY += YY.length);
          let IY = rY + sY * DY;
          for (let rY = DY > 0 ? 0 : YY.length - 1, OY = DY > 0 ? YY.length : -1; rY != OY; rY += DY) {
            let OY = RY.indexOf(YY[rY]);
            if (!(OY < 0 || FY.resolveInner(IY + rY, 1).type != AY))
              if (OY % 2 == 0 == DY > 0) uY++;
              else {
                if (1 == uY) return {
                  start: aY,
                  end: {
                    from: IY + rY,
                    to: IY + rY + 1
                  },
                  matched: OY >> 1 == gY >> 1
                };
                uY--
              }
          }
          DY > 0 && (sY += YY.length)
        }
        return vY.done ? {
          start: aY,
          matched: !1
        } : null
      }(YY, rY, DY, RY, OY.type, AY, IY)
    }

    function qr(YY, rY, DY, FY, AY, IY, RY) {
      let OY = FY.parent,
        gY = {
          from: AY.from,
          to: AY.to
        },
        aY = 0,
        vY = null === OY || void 0 === OY ? void 0 : OY.cursor();
      if (vY && (DY < 0 ? vY.childBefore(FY.from) : vY.childAfter(FY.to)))
        do {
          if (DY < 0 ? vY.to <= FY.from : vY.from >= FY.to) {
            if (0 == aY && IY.indexOf(vY.type.name) > -1 && vY.from < vY.to) {
              let YY = br(vY);
              return {
                start: gY,
                end: YY ? {
                  from: YY.from,
                  to: YY.to
                } : void 0,
                matched: !0
              }
            }
            if (wr(vY.type, DY, RY)) aY++;
            else if (wr(vY.type, -DY, RY)) {
              if (0 == aY) {
                let YY = br(vY);
                return {
                  start: gY,
                  end: YY && YY.from < YY.to ? {
                    from: YY.from,
                    to: YY.to
                  } : void 0,
                  matched: !1
                }
              }
              aY--
            }
          }
        } while (DY < 0 ? vY.prevSibling() : vY.nextSibling());
      return {
        start: gY,
        matched: !1
      }
    }
    const pr = Object.create(null),
      kr = [AY.l.none],
      Gr = [],
      xr = Object.create(null),
      nr = Object.create(null);
    for (let [Lr, tr] of [
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
      ]) nr[Lr] = Ur(pr, tr);

    function Pr(YY, rY) {
      Gr.indexOf(YY) > -1 || (Gr.push(YY), console.warn(rY))
    }

    function Ur(YY, rY) {
      let DY = [];
      for (let AY of rY.split(" ")) {
        let rY = [];
        for (let DY of AY.split(".")) {
          let FY = YY[DY] || OY.j[DY];
          FY ? "function" == typeof FY ? rY.length ? rY = rY.map(FY) : Pr(DY, `Modifier ${DY} used at start of tag`) : rY.length ? Pr(DY, `Tag ${DY} used as modifier`) : rY = Array.isArray(FY) ? FY : [FY] : Pr(DY, `Unknown highlighting tag ${DY}`)
        }
        for (let YY of rY) DY.push(YY)
      }
      if (!DY.length) return 0;
      let FY = rY.replace(/ /g, "_"),
        IY = FY + " " + DY.map((YY => YY.id)),
        RY = xr[IY];
      if (RY) return RY.id;
      let gY = xr[IY] = AY.l.define({
        id: kr.length,
        name: FY,
        props: [(0, OY.e)({
          [FY]: DY
        })]
      });
      return kr.push(gY), gY.id
    }
    RY.c.RTL, RY.c.LTR
  },
  40447: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => mY,
      e: () => TY
    });
    var FY = DY(40398),
      AY = DY(40395),
      IY = DY(40409);
    class RY {
      constructor(YY, rY, DY) {
        this.from = YY, this.to = rY, this.diagnostic = DY
      }
    }
    class OY {
      constructor(YY, rY, DY) {
        this.diagnostics = YY, this.panel = rY, this.selected = DY
      }
      static init(YY, rY, DY) {
        let IY = DY.facet(SY).markerFilter;
        IY && (YY = IY(YY, DY));
        let RY = YY.slice().sort(((YY, rY) => YY.from - rY.from || YY.to - rY.to)),
          aY = new AY.z,
          vY = [],
          uY = 0,
          sY = DY.doc.iter(),
          iY = 0,
          yY = DY.doc.length;
        for (let AY = 0;;) {
          let YY, rY, DY = AY == RY.length ? null : RY[AY];
          if (!DY && !vY.length) break;
          if (vY.length) YY = uY, rY = vY.reduce(((YY, rY) => Math.min(YY, rY.to)), DY && DY.from > YY ? DY.from : 1e8);
          else {
            if (YY = DY.from, YY > yY) break;
            rY = DY.to, vY.push(DY), AY++
          }
          for (; AY < RY.length;) {
            let DY = RY[AY];
            if (DY.from != YY || !(DY.to > DY.from || DY.to == YY)) {
              rY = Math.min(DY.from, rY);
              break
            }
            vY.push(DY), AY++, rY = Math.min(DY.to, rY)
          }
          rY = Math.min(rY, yY);
          let IY = !1;
          if (vY.some((DY => DY.from == YY && (DY.to == rY || rY == yY))) && (IY = YY == rY, !IY && rY - YY < 10)) {
            let DY = YY - (iY + sY.value.length);
            DY > 0 && (sY.next(DY), iY = YY);
            for (let FY = YY;;) {
              if (FY >= rY) {
                IY = !0;
                break
              }
              if (!sY.lineBreak && iY + sY.value.length > FY) break;
              FY = iY + sY.value.length, iY += sY.value.length, sY.next()
            }
          }
          let OY = fY(vY);
          if (IY) aY.add(YY, YY, FY.b.widget({
            widget: new BY(OY),
            diagnostics: vY.slice()
          }));
          else {
            let DY = vY.reduce(((YY, rY) => rY.markClass ? YY + " " + rY.markClass : YY), "");
            aY.add(YY, rY, FY.b.mark({
              class: "cm-lintRange cm-lintRange-" + OY + DY,
              diagnostics: vY.slice(),
              inclusiveEnd: vY.some((YY => YY.to > rY))
            }))
          }
          if (uY = rY, uY == yY) break;
          for (let FY = 0; FY < vY.length; FY++) vY[FY].to <= uY && vY.splice(FY--, 1)
        }
        let QY = aY.finish();
        return new OY(QY, rY, gY(QY))
      }
    }

    function gY(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        FY = null;
      return YY.between(DY, 1e9, ((YY, DY, AY) => {
        let {
          spec: IY
        } = AY;
        if (!(rY && IY.diagnostics.indexOf(rY) < 0))
          if (FY) {
            if (IY.diagnostics.indexOf(FY.diagnostic) < 0) return !1;
            FY = new RY(FY.from, DY, FY.diagnostic)
          } else FY = new RY(YY, DY, rY || IY.diagnostics[0])
      })), FY
    }

    function aY(YY, rY) {
      let DY = rY.pos,
        FY = rY.end || DY,
        AY = YY.state.facet(SY).hideOn(YY, DY, FY);
      if (null != AY) return AY;
      let IY = YY.startState.doc.lineAt(rY.pos);
      return !(!YY.effects.some((YY => YY.is(uY))) && !YY.changes.touchesRange(IY.from, Math.max(IY.to, FY)))
    }

    function vY(YY, rY) {
      return YY.field(yY, !1) ? rY : rY.concat(AY.E.appendConfig.of(jY))
    }
    const uY = AY.E.define(),
      sY = AY.E.define(),
      iY = AY.E.define(),
      yY = AY.G.define({
        create: () => new OY(FY.b.none, null, null),
        update(YY, rY) {
          if (rY.docChanged && YY.diagnostics.size) {
            let DY = YY.diagnostics.map(rY.changes),
              FY = null,
              AY = YY.panel;
            if (YY.selected) {
              let AY = rY.changes.mapPos(YY.selected.from, 1);
              FY = gY(DY, YY.selected.diagnostic, AY) || gY(DY, null, AY)
            }!DY.size && AY && rY.state.facet(SY).autoPanel && (AY = null), YY = new OY(DY, AY, FY)
          }
          for (let DY of rY.effects)
            if (DY.is(uY)) {
              let FY = rY.state.facet(SY).autoPanel ? DY.value.length ? KY.open : null : YY.panel;
              YY = OY.init(DY.value, FY, rY.state)
            } else DY.is(sY) ? YY = new OY(YY.diagnostics, DY.value ? KY.open : null, YY.selected) : DY.is(iY) && (YY = new OY(YY.diagnostics, YY.panel, DY.value));
          return YY
        },
        provide: YY => [FY.lb.from(YY, (YY => YY.panel)), FY.e.CA.from(YY, (YY => YY.diagnostics))]
      });
    const QY = FY.b.mark({
      class: "cm-lintRange cm-lintRange-active"
    });

    function oY(YY, rY, DY) {
      let FY, {
          diagnostics: AY
        } = YY.state.field(yY),
        IY = -1,
        RY = -1;
      AY.between(rY - (DY < 0 ? 1 : 0), rY + (DY > 0 ? 1 : 0), ((YY, AY, OY) => {
        let {
          spec: gY
        } = OY;
        if (rY >= YY && rY <= AY && (YY == AY || (rY > YY || DY > 0) && (rY < AY || DY < 0))) return FY = gY.diagnostics, IY = YY, RY = AY, !1
      }));
      let OY = YY.state.facet(SY).tooltipFilter;
      return FY && OY && (FY = OY(FY, YY.state)), FY ? {
        pos: IY,
        end: RY,
        above: YY.state.doc.lineAt(IY).to < RY,
        create: () => ({
          dom: WY(YY, FY)
        })
      } : null
    }

    function WY(YY, rY) {
      return (0, IY.e)("ul", {
        class: "cm-tooltip-lint"
      }, rY.map((rY => NY(YY, rY, !1))))
    }
    const EY = YY => {
        let rY = YY.state.field(yY, !1);
        return !(!rY || !rY.panel) && (YY.dispatch({
          effects: sY.of(!1)
        }), !0)
      },
      mY = [{
        key: "Mod-Shift-m",
        run: YY => {
          let rY = YY.state.field(yY, !1);
          rY && rY.panel || YY.dispatch({
            effects: vY(YY.state, [sY.of(!0)])
          });
          let DY = (0, FY.A)(YY, KY.open);
          return DY && DY.dom.querySelector(".cm-panel-lint ul").focus(), !0
        },
        preventDefault: !0
      }, {
        key: "F8",
        run: YY => {
          let rY = YY.state.field(yY, !1);
          if (!rY) return !1;
          let DY = YY.state.selection.main,
            FY = gY(rY.diagnostics, null, DY.to + 1);
          return !(!FY && (FY = gY(rY.diagnostics, null, 0), !FY || FY.from == DY.from && FY.to == DY.to)) && (YY.dispatch({
            selection: {
              anchor: FY.from,
              head: FY.to
            },
            scrollIntoView: !0
          }), !0)
        }
      }],
      VY = FY.k.fromClass(class {
        constructor(YY) {
          this.view = YY, this.timeout = -1, this.set = !0;
          let {
            delay: rY
          } = YY.state.facet(SY);
          this.lintTime = Date.now() + rY, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, rY)
        }
        run() {
          clearTimeout(this.timeout);
          let YY = Date.now();
          if (YY < this.lintTime - 10) this.timeout = setTimeout(this.run, this.lintTime - YY);
          else {
            this.set = !1;
            let {
              state: YY
            } = this.view, {
              sources: rY
            } = YY.facet(SY);
            rY.length && function(YY, rY, DY) {
              let FY = [],
                AY = -1;
              for (let IY of YY) IY.then((DY => {
                FY.push(DY), clearTimeout(AY), FY.length == YY.length ? rY(FY) : AY = setTimeout((() => rY(FY)), 200)
              }), DY)
            }(rY.map((YY => Promise.resolve(YY(this.view)))), (rY => {
              this.view.state.doc == YY.doc && this.view.dispatch(function(YY, rY) {
                return {
                  effects: vY(YY, [uY.of(rY)])
                }
              }(this.view.state, rY.reduce(((YY, rY) => YY.concat(rY)))))
            }), (YY => {
              (0, FY._)(this.view.state, YY)
            }))
          }
        }
        update(YY) {
          let rY = YY.state.facet(SY);
          (YY.docChanged || rY != YY.startState.facet(SY) || rY.needsRefresh && rY.needsRefresh(YY)) && (this.lintTime = Date.now() + rY.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, rY.delay)))
        }
        force() {
          this.set && (this.lintTime = Date.now(), this.run())
        }
        destroy() {
          clearTimeout(this.timeout)
        }
      });
    const SY = AY.r.define({
      combine: YY => ({
        sources: YY.map((YY => YY.source)).filter((YY => null != YY)),
        ...(0, AY.Y)(YY.map((YY => YY.config)), {
          delay: 750,
          markerFilter: null,
          tooltipFilter: null,
          needsRefresh: null,
          hideOn: () => null
        }, {
          delay: Math.max,
          markerFilter: lY,
          tooltipFilter: lY,
          needsRefresh: (YY, rY) => YY ? rY ? DY => YY(DY) || rY(DY) : YY : rY,
          hideOn: (YY, rY) => YY ? rY ? (DY, FY, AY) => YY(DY, FY, AY) || rY(DY, FY, AY) : YY : rY,
          autoPanel: (YY, rY) => YY || rY
        })
      })
    });

    function lY(YY, rY) {
      return YY ? rY ? (DY, FY) => rY(YY(DY, FY), FY) : YY : rY
    }

    function TY(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return [SY.of({
        source: YY,
        config: rY
      }), VY, jY]
    }

    function eY(YY) {
      let rY = [];
      if (YY) YY: for (let {
          name: DY
        }
        of YY) {
        for (let YY = 0; YY < DY.length; YY++) {
          let FY = DY[YY];
          if (/[a-zA-Z]/.test(FY) && !rY.some((YY => YY.toLowerCase() == FY.toLowerCase()))) {
            rY.push(FY);
            continue YY
          }
        }
        rY.push("")
      }
      return rY
    }

    function NY(YY, rY, DY) {
      var FY;
      let AY = DY ? eY(rY.actions) : [];
      return (0, IY.e)("li", {
        class: "cm-diagnostic cm-diagnostic-" + rY.severity
      }, (0, IY.e)("span", {
        class: "cm-diagnosticText"
      }, rY.renderMessage ? rY.renderMessage(YY) : rY.message), null === (FY = rY.actions) || void 0 === FY ? void 0 : FY.map(((DY, FY) => {
        let RY = !1,
          OY = FY => {
            if (FY.preventDefault(), RY) return;
            RY = !0;
            let AY = gY(YY.state.field(yY).diagnostics, rY);
            AY && DY.apply(YY, AY.from, AY.to)
          },
          {
            name: aY
          } = DY,
          vY = AY[FY] ? aY.indexOf(AY[FY]) : -1,
          uY = vY < 0 ? aY : [aY.slice(0, vY), (0, IY.e)("u", aY.slice(vY, vY + 1)), aY.slice(vY + 1)],
          sY = DY.markClass ? " " + DY.markClass : "";
        return (0, IY.e)("button", {
          type: "button",
          class: "cm-diagnosticAction" + sY,
          onclick: OY,
          onmousedown: OY,
          "aria-label": ` Action: ${aY}${vY<0?"":` (access key "${AY[FY]})"`}.`
        }, uY)
      })), rY.source && (0, IY.e)("div", {
        class: "cm-diagnosticSource"
      }, rY.source))
    }
    class BY extends FY.n {
      constructor(YY) {
        super(), this.sev = YY
      }
      eq(YY) {
        return YY.sev == this.sev
      }
      toDOM() {
        return (0, IY.e)("span", {
          class: "cm-lintPoint cm-lintPoint-" + this.sev
        })
      }
    }
    class cY {
      constructor(YY, rY) {
        this.diagnostic = rY, this.id = "item_" + Math.floor(4294967295 * Math.random()).toString(16), this.dom = NY(YY, rY, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option")
      }
    }
    class KY {
      constructor(YY) {
        this.view = YY, this.items = [];
        this.list = (0, IY.e)("ul", {
          tabIndex: 0,
          role: "listbox",
          "aria-label": this.view.state.phrase("Diagnostics"),
          onkeydown: rY => {
            if (!(rY.ctrlKey || rY.altKey || rY.metaKey)) {
              if (27 == rY.keyCode) EY(this.view), this.view.focus();
              else if (38 == rY.keyCode || 33 == rY.keyCode) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
              else if (40 == rY.keyCode || 34 == rY.keyCode) this.moveSelection((this.selectedIndex + 1) % this.items.length);
              else if (36 == rY.keyCode) this.moveSelection(0);
              else if (35 == rY.keyCode) this.moveSelection(this.items.length - 1);
              else if (13 == rY.keyCode) this.view.focus();
              else {
                if (!(rY.keyCode >= 65 && rY.keyCode <= 90 && this.selectedIndex >= 0)) return;
                {
                  let {
                    diagnostic: DY
                  } = this.items[this.selectedIndex], FY = eY(DY.actions);
                  for (let AY = 0; AY < FY.length; AY++)
                    if (FY[AY].toUpperCase().charCodeAt(0) == rY.keyCode) {
                      let rY = gY(this.view.state.field(yY).diagnostics, DY);
                      rY && DY.actions[AY].apply(YY, rY.from, rY.to)
                    }
                }
              }
              rY.preventDefault()
            }
          },
          onclick: YY => {
            for (let rY = 0; rY < this.items.length; rY++) this.items[rY].dom.contains(YY.target) && this.moveSelection(rY)
          }
        }), this.dom = (0, IY.e)("div", {
          class: "cm-panel-lint"
        }, this.list, (0, IY.e)("button", {
          type: "button",
          name: "close",
          "aria-label": this.view.state.phrase("close"),
          onclick: () => EY(this.view)
        }, "\xd7")), this.update()
      }
      get selectedIndex() {
        let YY = this.view.state.field(yY).selected;
        if (!YY) return -1;
        for (let rY = 0; rY < this.items.length; rY++)
          if (this.items[rY].diagnostic == YY.diagnostic) return rY;
        return -1
      }
      update() {
        let {
          diagnostics: YY,
          selected: rY
        } = this.view.state.field(yY), DY = 0, FY = !1, AY = null, IY = new Set;
        for (YY.between(0, this.view.state.doc.length, ((YY, RY, OY) => {
            let {
              spec: gY
            } = OY;
            for (let aY of gY.diagnostics) {
              if (IY.has(aY)) continue;
              IY.add(aY);
              let YY, RY = -1;
              for (let rY = DY; rY < this.items.length; rY++)
                if (this.items[rY].diagnostic == aY) {
                  RY = rY;
                  break
                } RY < 0 ? (YY = new cY(this.view, aY), this.items.splice(DY, 0, YY), FY = !0) : (YY = this.items[RY], RY > DY && (this.items.splice(DY, RY - DY), FY = !0)), rY && YY.diagnostic == rY.diagnostic ? YY.dom.hasAttribute("aria-selected") || (YY.dom.setAttribute("aria-selected", "true"), AY = YY) : YY.dom.hasAttribute("aria-selected") && YY.dom.removeAttribute("aria-selected"), DY++
            }
          })); DY < this.items.length && !(1 == this.items.length && this.items[0].diagnostic.from < 0);) FY = !0, this.items.pop();
        0 == this.items.length && (this.items.push(new cY(this.view, {
          from: -1,
          to: -1,
          severity: "info",
          message: this.view.state.phrase("No diagnostics")
        })), FY = !0), AY ? (this.list.setAttribute("aria-activedescendant", AY.id), this.view.requestMeasure({
          key: this,
          read: () => ({
            sel: AY.dom.getBoundingClientRect(),
            panel: this.list.getBoundingClientRect()
          }),
          write: YY => {
            let {
              sel: rY,
              panel: DY
            } = YY, FY = DY.height / this.list.offsetHeight;
            rY.top < DY.top ? this.list.scrollTop -= (DY.top - rY.top) / FY : rY.bottom > DY.bottom && (this.list.scrollTop += (rY.bottom - DY.bottom) / FY)
          }
        })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), FY && this.sync()
      }
      sync() {
        let YY = this.list.firstChild;

        function rY() {
          let rY = YY;
          YY = rY.nextSibling, rY.remove()
        }
        for (let DY of this.items)
          if (DY.dom.parentNode == this.list) {
            for (; YY != DY.dom;) rY();
            YY = DY.dom.nextSibling
          } else this.list.insertBefore(DY.dom, YY);
        for (; YY;) rY()
      }
      moveSelection(YY) {
        if (this.selectedIndex < 0) return;
        let rY = gY(this.view.state.field(yY).diagnostics, this.items[YY].diagnostic);
        rY && this.view.dispatch({
          selection: {
            anchor: rY.from,
            head: rY.to
          },
          scrollIntoView: !0,
          effects: iY.of(rY)
        })
      }
      static open(YY) {
        return new KY(YY)
      }
    }

    function HY(YY) {
      return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${arguments.length>1&&void 0!==arguments[1]?arguments[1]:'viewBox="0 0 40 40"'}>${encodeURIComponent(YY)}</svg>')`
    }

    function zY(YY) {
      return HY(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${YY}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"')
    }
    const ZY = FY.e.baseTheme({
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
        backgroundImage: zY("#d11")
      },
      ".cm-lintRange-warning": {
        backgroundImage: zY("orange")
      },
      ".cm-lintRange-info": {
        backgroundImage: zY("#999")
      },
      ".cm-lintRange-hint": {
        backgroundImage: zY("#66d")
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

    function CY(YY) {
      return "error" == YY ? 4 : "warning" == YY ? 3 : "info" == YY ? 2 : 1
    }

    function fY(YY) {
      let rY = "hint",
        DY = 1;
      for (let FY of YY) {
        let YY = CY(FY.severity);
        YY > DY && (DY = YY, rY = FY.severity)
      }
      return rY
    }
    FY.h;
    const jY = [yY, FY.e.CA.compute([yY], (YY => {
      let {
        selected: rY,
        panel: DY
      } = YY.field(yY);
      return rY && DY && rY.from != rY.to ? FY.b.set([QY.range(rY.from, rY.to)]) : FY.b.none
    })), (0, FY.O)(oY, {
      hideOn: aY
    }), ZY]
  },
  40443: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => LY,
      d: () => WY,
      e: () => tY
    });
    var FY = DY(40398),
      AY = DY(40395),
      IY = DY(40409);
    const RY = "function" == typeof String.prototype.normalize ? YY => YY.normalize("NFKD") : YY => YY;
    class OY {
      constructor(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : YY.length,
          AY = arguments.length > 4 ? arguments[4] : void 0,
          IY = arguments.length > 5 ? arguments[5] : void 0;
        this.test = IY, this.value = {
          from: 0,
          to: 0
        }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = YY.iterRange(DY, FY), this.bufferStart = DY, this.normalize = AY ? YY => AY(RY(YY)) : RY, this.query = this.normalize(rY)
      }
      peek() {
        if (this.bufferPos == this.buffer.length) {
          if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
          this.bufferPos = 0, this.buffer = this.iter.value
        }
        return (0, AY.R)(this.buffer, this.bufferPos)
      }
      next() {
        for (; this.matches.length;) this.matches.pop();
        return this.nextOverlapping()
      }
      nextOverlapping() {
        for (;;) {
          let YY = this.peek();
          if (YY < 0) return this.done = !0, this;
          let rY = (0, AY.bb)(YY),
            DY = this.bufferStart + this.bufferPos;
          this.bufferPos += (0, AY.U)(YY);
          let FY = this.normalize(rY);
          if (FY.length)
            for (let AY = 0, IY = DY;; AY++) {
              let YY = FY.charCodeAt(AY),
                RY = this.match(YY, IY, this.bufferPos + this.bufferStart);
              if (AY == FY.length - 1) {
                if (RY) return this.value = RY, this;
                break
              }
              IY == DY && AY < rY.length && rY.charCodeAt(AY) == YY && IY++
            }
        }
      }
      match(YY, rY, DY) {
        let FY = null;
        for (let AY = 0; AY < this.matches.length; AY += 2) {
          let rY = this.matches[AY],
            IY = !1;
          this.query.charCodeAt(rY) == YY && (rY == this.query.length - 1 ? FY = {
            from: this.matches[AY + 1],
            to: DY
          } : (this.matches[AY]++, IY = !0)), IY || (this.matches.splice(AY, 2), AY -= 2)
        }
        return this.query.charCodeAt(0) == YY && (1 == this.query.length ? FY = {
          from: rY,
          to: DY
        } : this.matches.push(1, rY)), FY && this.test && !this.test(FY.from, FY.to, this.buffer, this.bufferStart) && (FY = null), FY
      }
    }
    "undefined" != typeof Symbol && (OY.prototype[Symbol.iterator] = function() {
      return this
    });
    const gY = {
        from: -1,
        to: -1,
        match: /.*/.exec("")
      },
      aY = "gm" + (null == /x/.unicode ? "" : "u");
    class vY {
      constructor(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : YY.length;
        if (this.text = YY, this.to = AY, this.curLine = "", this.done = !1, this.value = gY, /\\[sWDnr]|\n|\r|\[\^/.test(rY)) return new iY(YY, rY, DY, FY, AY);
        this.re = new RegExp(rY, aY + ((null === DY || void 0 === DY ? void 0 : DY.ignoreCase) ? "i" : "")), this.test = null === DY || void 0 === DY ? void 0 : DY.test, this.iter = YY.iter();
        let IY = YY.lineAt(FY);
        this.curLineStart = IY.from, this.matchPos = yY(YY, FY), this.getLine(this.curLineStart)
      }
      getLine(YY) {
        this.iter.next(YY), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next())
      }
      nextLine() {
        this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0)
      }
      next() {
        for (let YY = this.matchPos - this.curLineStart;;) {
          this.re.lastIndex = YY;
          let rY = this.matchPos <= this.to && this.re.exec(this.curLine);
          if (rY) {
            let DY = this.curLineStart + rY.index,
              FY = DY + rY[0].length;
            if (this.matchPos = yY(this.text, FY + (DY == FY ? 1 : 0)), DY == this.curLineStart + this.curLine.length && this.nextLine(), (DY < FY || DY > this.value.to) && (!this.test || this.test(DY, FY, rY))) return this.value = {
              from: DY,
              to: FY,
              match: rY
            }, this;
            YY = this.matchPos - this.curLineStart
          } else {
            if (!(this.curLineStart + this.curLine.length < this.to)) return this.done = !0, this;
            this.nextLine(), YY = 0
          }
        }
      }
    }
    const uY = new WeakMap;
    class sY {
      constructor(YY, rY) {
        this.from = YY, this.text = rY
      }
      get to() {
        return this.from + this.text.length
      }
      static get(YY, rY, DY) {
        let FY = uY.get(YY);
        if (!FY || FY.from >= DY || FY.to <= rY) {
          let FY = new sY(rY, YY.sliceString(rY, DY));
          return uY.set(YY, FY), FY
        }
        if (FY.from == rY && FY.to == DY) return FY;
        let {
          text: AY,
          from: IY
        } = FY;
        return IY > rY && (AY = YY.sliceString(rY, IY) + AY, IY = rY), FY.to < DY && (AY += YY.sliceString(FY.to, DY)), uY.set(YY, new sY(IY, AY)), new sY(rY, AY.slice(rY - IY, DY - IY))
      }
    }
    class iY {
      constructor(YY, rY, DY, FY, AY) {
        this.text = YY, this.to = AY, this.done = !1, this.value = gY, this.matchPos = yY(YY, FY), this.re = new RegExp(rY, aY + ((null === DY || void 0 === DY ? void 0 : DY.ignoreCase) ? "i" : "")), this.test = null === DY || void 0 === DY ? void 0 : DY.test, this.flat = sY.get(YY, FY, this.chunkEnd(FY + 5e3))
      }
      chunkEnd(YY) {
        return YY >= this.to ? this.to : this.text.lineAt(YY).to
      }
      next() {
        for (;;) {
          let YY = this.re.lastIndex = this.matchPos - this.flat.from,
            rY = this.re.exec(this.flat.text);
          if (rY && !rY[0] && rY.index == YY && (this.re.lastIndex = YY + 1, rY = this.re.exec(this.flat.text)), rY) {
            let YY = this.flat.from + rY.index,
              DY = YY + rY[0].length;
            if ((this.flat.to >= this.to || rY.index + rY[0].length <= this.flat.text.length - 10) && (!this.test || this.test(YY, DY, rY))) return this.value = {
              from: YY,
              to: DY,
              match: rY
            }, this.matchPos = yY(this.text, DY + (YY == DY ? 1 : 0)), this
          }
          if (this.flat.to == this.to) return this.done = !0, this;
          this.flat = sY.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + 2 * this.flat.text.length))
        }
      }
    }

    function yY(YY, rY) {
      if (rY >= YY.length) return rY;
      let DY, FY = YY.lineAt(rY);
      for (; rY < FY.to && (DY = FY.text.charCodeAt(rY - FY.from)) >= 56320 && DY < 57344;) rY++;
      return rY
    }
    "undefined" != typeof Symbol && (vY.prototype[Symbol.iterator] = iY.prototype[Symbol.iterator] = function() {
      return this
    });
    const QY = {
        highlightWordAroundCursor: !1,
        minSelectionLength: 1,
        maxMatches: 100,
        wholeWords: !1
      },
      oY = AY.r.define({
        combine: YY => (0, AY.Y)(YY, QY, {
          highlightWordAroundCursor: (YY, rY) => YY || rY,
          minSelectionLength: Math.min,
          maxMatches: Math.min
        })
      });

    function WY(YY) {
      let rY = [lY, SY];
      return YY && rY.push(oY.of(YY)), rY
    }
    const EY = FY.b.mark({
        class: "cm-selectionMatch"
      }),
      mY = FY.b.mark({
        class: "cm-selectionMatch cm-selectionMatch-main"
      });

    function VY(YY, rY, DY, FY) {
      return (0 == DY || YY(rY.sliceDoc(DY - 1, DY)) != AY.j.Word) && (FY == rY.doc.length || YY(rY.sliceDoc(FY, FY + 1)) != AY.j.Word)
    }
    const SY = FY.k.fromClass(class {
        constructor(YY) {
          this.CA = this.getDeco(YY)
        }
        update(YY) {
          (YY.selectionSet || YY.docChanged || YY.viewportChanged) && (this.CA = this.getDeco(YY.view))
        }
        getDeco(YY) {
          let rY = YY.state.facet(oY),
            {
              state: DY
            } = YY,
            IY = DY.selection;
          if (IY.ws.length > 1) return FY.b.none;
          let RY, gY = IY.main,
            aY = null;
          if (gY.empty) {
            if (!rY.highlightWordAroundCursor) return FY.b.none;
            let YY = DY.wordAt(gY.head);
            if (!YY) return FY.b.none;
            aY = DY.charCategorizer(gY.head), RY = DY.sliceDoc(YY.from, YY.to)
          } else {
            let YY = gY.to - gY.from;
            if (YY < rY.minSelectionLength || YY > 200) return FY.b.none;
            if (rY.wholeWords) {
              if (RY = DY.sliceDoc(gY.from, gY.to), aY = DY.charCategorizer(gY.head), !VY(aY, DY, gY.from, gY.to) || ! function(YY, rY, DY, FY) {
                  return YY(rY.sliceDoc(DY, DY + 1)) == AY.j.Word && YY(rY.sliceDoc(FY - 1, FY)) == AY.j.Word
                }(aY, DY, gY.from, gY.to)) return FY.b.none
            } else if (RY = DY.sliceDoc(gY.from, gY.to), !RY) return FY.b.none
          }
          let vY = [];
          for (let AY of YY.B_) {
            let YY = new OY(DY.doc, RY, AY.from, AY.to);
            for (; !YY.next().done;) {
              let {
                from: AY,
                to: IY
              } = YY.value;
              if ((!aY || VY(aY, DY, AY, IY)) && (gY.empty && AY <= gY.from && IY >= gY.to ? vY.push(mY.range(AY, IY)) : (AY >= gY.to || IY <= gY.from) && vY.push(EY.range(AY, IY)), vY.length > rY.maxMatches)) return FY.b.none
            }
          }
          return FY.b.set(vY)
        }
      }, {
        CA: YY => YY.CA
      }),
      lY = FY.e.baseTheme({
        ".cm-selectionMatch": {
          backgroundColor: "#99ff7780"
        },
        ".cm-searchMatch .cm-selectionMatch": {
          backgroundColor: "transparent"
        }
      });
    const TY = AY.r.define({
      combine: YY => (0, AY.Y)(YY, {
        top: !1,
        caseSensitive: !1,
        literal: !1,
        regexp: !1,
        wholeWord: !1,
        createPanel: YY => new Yr(YY),
        scrollToMatch: YY => FY.e.scrollIntoView(YY)
      })
    });
    class eY {
      constructor(YY) {
        this.search = YY.search, this.caseSensitive = !!YY.caseSensitive, this.literal = !!YY.literal, this.regexp = !!YY.regexp, this.replace = YY.replace || "", this.valid = !!this.search && (!this.regexp || function(YY) {
          try {
            return new RegExp(YY, aY), !0
          } catch (rY) {
            return !1
          }
        }(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!YY.wholeWord, this.test = YY.test
      }
      unquote(YY) {
        return this.literal ? YY : YY.replace(/\\([nrt\\])/g, ((YY, rY) => "n" == rY ? "\n" : "r" == rY ? "\r" : "t" == rY ? "\t" : "\\"))
      }
      eq(YY) {
        return this.search == YY.search && this.replace == YY.replace && this.caseSensitive == YY.caseSensitive && this.regexp == YY.regexp && this.wholeWord == YY.wholeWord && this.test == YY.test
      }
      create() {
        return this.regexp ? new ZY(this) : new cY(this)
      }
      getCursor(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          DY = arguments.length > 2 ? arguments[2] : void 0,
          FY = YY.doc ? YY : AY.p.create({
            doc: YY
          });
        return null == DY && (DY = FY.doc.length), this.regexp ? KY(this, FY, rY, DY) : BY(this, FY, rY, DY)
      }
    }
    class NY {
      constructor(YY) {
        this.spec = YY
      }
    }

    function BY(YY, rY, DY, FY) {
      let IY;
      var RY, gY;
      return YY.wholeWord && (RY = rY.doc, gY = rY.charCategorizer(rY.selection.main.head), IY = (YY, rY, DY, FY) => ((FY > YY || FY + DY.length < rY) && (FY = Math.max(0, YY - 2), DY = RY.sliceString(FY, Math.min(RY.length, rY + 2))), (gY(HY(DY, YY - FY)) != AY.j.Word || gY(zY(DY, YY - FY)) != AY.j.Word) && (gY(zY(DY, rY - FY)) != AY.j.Word || gY(HY(DY, rY - FY)) != AY.j.Word))), YY.test && (IY = function(YY, rY, DY) {
        return (FY, AY, IY, RY) => {
          if (DY && !DY(FY, AY, IY, RY)) return !1;
          let OY = FY >= RY && AY <= RY + IY.length ? IY.slice(FY - RY, AY - RY) : rY.doc.sliceString(FY, AY);
          return YY(OY, rY, FY, AY)
        }
      }(YY.test, rY, IY)), new OY(rY.doc, YY.unquoted, DY, FY, YY.caseSensitive ? void 0 : YY => YY.toLowerCase(), IY)
    }
    class cY extends NY {
      constructor(YY) {
        super(YY)
      }
      nextMatch(YY, rY, DY) {
        let FY = BY(this.spec, YY, DY, YY.doc.length).nextOverlapping();
        if (FY.done) {
          let DY = Math.min(YY.doc.length, rY + this.spec.unquoted.length);
          FY = BY(this.spec, YY, 0, DY).nextOverlapping()
        }
        return FY.done || FY.value.from == rY && FY.value.to == DY ? null : FY.value
      }
      prevMatchInRange(YY, rY, DY) {
        for (let FY = DY;;) {
          let DY = Math.max(rY, FY - 1e4 - this.spec.unquoted.length),
            AY = BY(this.spec, YY, DY, FY),
            IY = null;
          for (; !AY.nextOverlapping().done;) IY = AY.value;
          if (IY) return IY;
          if (DY == rY) return null;
          FY -= 1e4
        }
      }
      prevMatch(YY, rY, DY) {
        let FY = this.prevMatchInRange(YY, 0, rY);
        return FY || (FY = this.prevMatchInRange(YY, Math.max(0, DY - this.spec.unquoted.length), YY.doc.length)), !FY || FY.from == rY && FY.to == DY ? null : FY
      }
      getReplacement(YY) {
        return this.spec.unquote(this.spec.replace)
      }
      matchAll(YY, rY) {
        let DY = BY(this.spec, YY, 0, YY.doc.length),
          FY = [];
        for (; !DY.next().done;) {
          if (FY.length >= rY) return null;
          FY.push(DY.value)
        }
        return FY
      }
      highlight(YY, rY, DY, FY) {
        let AY = BY(this.spec, YY, Math.max(0, rY - this.spec.unquoted.length), Math.min(DY + this.spec.unquoted.length, YY.doc.length));
        for (; !AY.next().done;) FY(AY.value.from, AY.value.to)
      }
    }

    function KY(YY, rY, DY, FY) {
      let IY;
      var RY;
      return YY.wholeWord && (RY = rY.charCategorizer(rY.selection.main.head), IY = (YY, rY, DY) => !DY[0].length || (RY(HY(DY.input, DY.index)) != AY.j.Word || RY(zY(DY.input, DY.index)) != AY.j.Word) && (RY(zY(DY.input, DY.index + DY[0].length)) != AY.j.Word || RY(HY(DY.input, DY.index + DY[0].length)) != AY.j.Word)), YY.test && (IY = function(YY, rY, DY) {
        return (FY, AY, IY) => (!DY || DY(FY, AY, IY)) && YY(IY[0], rY, FY, AY)
      }(YY.test, rY, IY)), new vY(rY.doc, YY.search, {
        ignoreCase: !YY.caseSensitive,
        test: IY
      }, DY, FY)
    }

    function HY(YY, rY) {
      return YY.slice((0, AY.$)(YY, rY, !1), rY)
    }

    function zY(YY, rY) {
      return YY.slice(rY, (0, AY.$)(YY, rY))
    }
    class ZY extends NY {
      nextMatch(YY, rY, DY) {
        let FY = KY(this.spec, YY, DY, YY.doc.length).next();
        return FY.done && (FY = KY(this.spec, YY, 0, rY).next()), FY.done ? null : FY.value
      }
      prevMatchInRange(YY, rY, DY) {
        for (let FY = 1;; FY++) {
          let AY = Math.max(rY, DY - 1e4 * FY),
            IY = KY(this.spec, YY, AY, DY),
            RY = null;
          for (; !IY.next().done;) RY = IY.value;
          if (RY && (AY == rY || RY.from > AY + 10)) return RY;
          if (AY == rY) return null
        }
      }
      prevMatch(YY, rY, DY) {
        return this.prevMatchInRange(YY, 0, rY) || this.prevMatchInRange(YY, DY, YY.doc.length)
      }
      getReplacement(YY) {
        return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, ((rY, DY) => {
          if ("&" == DY) return YY.match[0];
          if ("$" == DY) return "$";
          for (let FY = DY.length; FY > 0; FY--) {
            let rY = +DY.slice(0, FY);
            if (rY > 0 && rY < YY.match.length) return YY.match[rY] + DY.slice(FY)
          }
          return rY
        }))
      }
      matchAll(YY, rY) {
        let DY = KY(this.spec, YY, 0, YY.doc.length),
          FY = [];
        for (; !DY.next().done;) {
          if (FY.length >= rY) return null;
          FY.push(DY.value)
        }
        return FY
      }
      highlight(YY, rY, DY, FY) {
        let AY = KY(this.spec, YY, Math.max(0, rY - 250), Math.min(DY + 250, YY.doc.length));
        for (; !AY.next().done;) FY(AY.value.from, AY.value.to)
      }
    }
    const CY = AY.E.define(),
      fY = AY.E.define(),
      jY = AY.G.define({
        create: YY => new hY(xY(YY).create(), null),
        update(YY, rY) {
          for (let DY of rY.effects) DY.is(CY) ? YY = new hY(DY.value.create(), YY.panel) : DY.is(fY) && (YY = new hY(YY.query, DY.value ? GY : null));
          return YY
        },
        provide: YY => FY.lb.from(YY, (YY => YY.panel))
      });
    class hY {
      constructor(YY, rY) {
        this.query = YY, this.panel = rY
      }
    }
    const dY = FY.b.mark({
        class: "cm-searchMatch"
      }),
      JY = FY.b.mark({
        class: "cm-searchMatch cm-searchMatch-selected"
      }),
      MY = FY.k.fromClass(class {
        constructor(YY) {
          this.view = YY, this.CA = this.highlight(YY.state.field(jY))
        }
        update(YY) {
          let rY = YY.state.field(jY);
          (rY != YY.startState.field(jY) || YY.docChanged || YY.selectionSet || YY.viewportChanged) && (this.CA = this.highlight(rY))
        }
        highlight(YY) {
          let {
            query: rY,
            panel: DY
          } = YY;
          if (!DY || !rY.spec.valid) return FY.b.none;
          let {
            view: IY
          } = this, RY = new AY.z;
          for (let FY = 0, AY = IY.B_, OY = AY.length; FY < OY; FY++) {
            let {
              from: YY,
              to: DY
            } = AY[FY];
            for (; FY < OY - 1 && DY > AY[FY + 1].from - 500;) DY = AY[++FY].to;
            rY.highlight(IY.state, YY, DY, ((YY, rY) => {
              let DY = IY.state.selection.ws.some((DY => DY.from == YY && DY.to == rY));
              RY.add(YY, rY, DY ? JY : dY)
            }))
          }
          return RY.finish()
        }
      }, {
        CA: YY => YY.CA
      });

    function wY(YY) {
      return rY => {
        let DY = rY.state.field(jY, !1);
        return DY && DY.query.spec.valid ? YY(rY, DY) : UY(rY)
      }
    }
    const bY = wY(((YY, rY) => {
        let {
          query: DY
        } = rY, {
          to: FY
        } = YY.state.selection.main, IY = DY.nextMatch(YY.state, FY, FY);
        if (!IY) return !1;
        let RY = AY.n.single(IY.from, IY.to),
          OY = YY.state.facet(TY);
        return YY.dispatch({
          selection: RY,
          effects: [Ar(YY, IY), OY.scrollToMatch(RY.main, YY)],
          userEvent: "select.search"
        }), PY(YY), !0
      })),
      XY = wY(((YY, rY) => {
        let {
          query: DY
        } = rY, {
          state: FY
        } = YY, {
          from: IY
        } = FY.selection.main, RY = DY.prevMatch(FY, IY, IY);
        if (!RY) return !1;
        let OY = AY.n.single(RY.from, RY.to),
          gY = YY.state.facet(TY);
        return YY.dispatch({
          selection: OY,
          effects: [Ar(YY, RY), gY.scrollToMatch(OY.main, YY)],
          userEvent: "select.search"
        }), PY(YY), !0
      })),
      qY = wY(((YY, rY) => {
        let {
          query: DY
        } = rY, FY = DY.matchAll(YY.state, 1e3);
        return !(!FY || !FY.length) && (YY.dispatch({
          selection: AY.n.create(FY.map((YY => AY.n.range(YY.from, YY.to)))),
          userEvent: "select.search.matches"
        }), !0)
      })),
      pY = wY(((YY, rY) => {
        let {
          query: DY
        } = rY, {
          state: IY
        } = YY, {
          from: RY,
          to: OY
        } = IY.selection.main;
        if (IY.readOnly) return !1;
        let gY = DY.nextMatch(IY, RY, RY);
        if (!gY) return !1;
        let aY, vY, uY = gY,
          sY = [],
          iY = [];
        uY.from == RY && uY.to == OY && (vY = IY.toText(DY.getReplacement(uY)), sY.push({
          from: uY.from,
          to: uY.to,
          insert: vY
        }), uY = DY.nextMatch(IY, uY.from, uY.to), iY.push(FY.e.announce.of(IY.phrase("replaced match on line $", IY.doc.lineAt(RY).number) + ".")));
        let yY = YY.state.changes(sY);
        return uY && (aY = AY.n.single(uY.from, uY.to).map(yY), iY.push(Ar(YY, uY)), iY.push(IY.facet(TY).scrollToMatch(aY.main, YY))), YY.dispatch({
          changes: yY,
          selection: aY,
          effects: iY,
          userEvent: "input.replace"
        }), !0
      })),
      kY = wY(((YY, rY) => {
        let {
          query: DY
        } = rY;
        if (YY.state.readOnly) return !1;
        let AY = DY.matchAll(YY.state, 1e9).map((YY => {
          let {
            from: rY,
            to: FY
          } = YY;
          return {
            from: rY,
            to: FY,
            insert: DY.getReplacement(YY)
          }
        }));
        if (!AY.length) return !1;
        let IY = YY.state.phrase("replaced $ matches", AY.length) + ".";
        return YY.dispatch({
          changes: AY,
          effects: FY.e.announce.of(IY),
          userEvent: "input.replace.all"
        }), !0
      }));

    function GY(YY) {
      return YY.state.facet(TY).createPanel(YY)
    }

    function xY(YY, rY) {
      var DY, FY, AY, IY, RY;
      let OY = YY.selection.main,
        gY = OY.empty || OY.to > OY.from + 100 ? "" : YY.sliceDoc(OY.from, OY.to);
      if (rY && !gY) return rY;
      let aY = YY.facet(TY);
      return new eY({
        search: (null !== (DY = null === rY || void 0 === rY ? void 0 : rY.literal) && void 0 !== DY ? DY : aY.literal) ? gY : gY.replace(/\n/g, "\\n"),
        caseSensitive: null !== (FY = null === rY || void 0 === rY ? void 0 : rY.caseSensitive) && void 0 !== FY ? FY : aY.caseSensitive,
        literal: null !== (AY = null === rY || void 0 === rY ? void 0 : rY.literal) && void 0 !== AY ? AY : aY.literal,
        regexp: null !== (IY = null === rY || void 0 === rY ? void 0 : rY.regexp) && void 0 !== IY ? IY : aY.regexp,
        wholeWord: null !== (RY = null === rY || void 0 === rY ? void 0 : rY.wholeWord) && void 0 !== RY ? RY : aY.wholeWord
      })
    }

    function nY(YY) {
      let rY = (0, FY.A)(YY, GY);
      return rY && rY.dom.querySelector("[main-field]")
    }

    function PY(YY) {
      let rY = nY(YY);
      rY && rY == YY.root.activeElement && rY.select()
    }
    const UY = YY => {
        let rY = YY.state.field(jY, !1);
        if (rY && rY.panel) {
          let DY = nY(YY);
          if (DY && DY != YY.root.activeElement) {
            let FY = xY(YY.state, rY.query.spec);
            FY.valid && YY.dispatch({
              effects: CY.of(FY)
            }), DY.focus(), DY.select()
          }
        } else YY.dispatch({
          effects: [fY.of(!0), rY ? CY.of(xY(YY.state, rY.query.spec)) : AY.E.appendConfig.of(Rr)]
        });
        return !0
      },
      LY = YY => {
        let rY = YY.state.field(jY, !1);
        if (!rY || !rY.panel) return !1;
        let DY = (0, FY.A)(YY, GY);
        return DY && DY.dom.contains(YY.root.activeElement) && YY.focus(), YY.dispatch({
          effects: fY.of(!1)
        }), !0
      },
      tY = [{
        key: "Mod-f",
        run: UY,
        scope: "editor search-panel"
      }, {
        key: "F3",
        run: bY,
        shift: XY,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Mod-g",
        run: bY,
        shift: XY,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Escape",
        run: LY,
        scope: "editor search-panel"
      }, {
        key: "Mod-Shift-l",
        run: YY => {
          let {
            state: rY,
            dispatch: DY
          } = YY, FY = rY.selection;
          if (FY.ws.length > 1 || FY.main.empty) return !1;
          let {
            from: IY,
            to: RY
          } = FY.main, gY = [], aY = 0;
          for (let vY = new OY(rY.doc, rY.sliceDoc(IY, RY)); !vY.next().done;) {
            if (gY.length > 1e3) return !1;
            vY.value.from == IY && (aY = gY.length), gY.push(AY.n.range(vY.value.from, vY.value.to))
          }
          return DY(rY.update({
            selection: AY.n.create(gY, aY),
            userEvent: "select.search.matches"
          })), !0
        }
      }, {
        key: "Mod-Alt-g",
        run: YY => {
          let {
            state: rY
          } = YY, DY = String(rY.doc.lineAt(YY.state.selection.main.head).number), {
            close: IY,
            result: RY
          } = (0, FY.kb)(YY, {
            label: rY.phrase("Go to line"),
            input: {
              type: "text",
              name: "line",
              value: DY
            },
            focus: !0,
            submitLabel: rY.phrase("go")
          });
          return RY.then((DY => {
            let RY = DY && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(DY.elements.line.value);
            if (!RY) return void YY.dispatch({
              effects: IY
            });
            let OY = rY.doc.lineAt(rY.selection.main.head),
              [, gY, aY, vY, uY] = RY,
              sY = vY ? +vY.slice(1) : 0,
              iY = aY ? +aY : OY.number;
            if (aY && uY) {
              let YY = iY / 100;
              gY && (YY = YY * ("-" == gY ? -1 : 1) + OY.number / rY.doc.lines), iY = Math.round(rY.doc.lines * YY)
            } else aY && gY && (iY = iY * ("-" == gY ? -1 : 1) + OY.number);
            let yY = rY.doc.line(Math.max(1, Math.min(rY.doc.lines, iY))),
              QY = AY.n.cursor(yY.from + Math.max(0, Math.min(sY, yY.length)));
            YY.dispatch({
              effects: [IY, FY.e.scrollIntoView(QY.from, {
                y: "center"
              })],
              selection: QY
            })
          })), !0
        }
      }, {
        key: "Mod-d",
        run: YY => {
          let {
            state: rY,
            dispatch: DY
          } = YY, {
            ws: IY
          } = rY.selection;
          if (IY.some((YY => YY.from === YY.to))) return (YY => {
            let {
              state: rY,
              dispatch: DY
            } = YY, {
              selection: FY
            } = rY, IY = AY.n.create(FY.ws.map((YY => rY.wordAt(YY.head) || AY.n.cursor(YY.head))), FY.mainIndex);
            return !IY.eq(FY) && (DY(rY.update({
              selection: IY
            })), !0)
          })({
            state: rY,
            dispatch: DY
          });
          let RY = rY.sliceDoc(IY[0].from, IY[0].to);
          if (rY.selection.ws.some((YY => rY.sliceDoc(YY.from, YY.to) != RY))) return !1;
          let gY = function(YY, rY) {
            let {
              main: DY,
              ws: FY
            } = YY.selection, AY = YY.wordAt(DY.head), IY = AY && AY.from == DY.from && AY.to == DY.to;
            for (let RY = !1, gY = new OY(YY.doc, rY, FY[FY.length - 1].to);;) {
              if (gY.next(), !gY.done) {
                if (RY && FY.some((YY => YY.from == gY.value.from))) continue;
                if (IY) {
                  let rY = YY.wordAt(gY.value.from);
                  if (!rY || rY.from != gY.value.from || rY.to != gY.value.to) continue
                }
                return gY.value
              }
              if (RY) return null;
              gY = new OY(YY.doc, rY, 0, Math.max(0, FY[FY.length - 1].from - 1)), RY = !0
            }
          }(rY, RY);
          return !!gY && (DY(rY.update({
            selection: rY.selection.addRange(AY.n.range(gY.from, gY.to), !1),
            effects: FY.e.scrollIntoView(gY.to)
          })), !0)
        },
        preventDefault: !0
      }];
    class Yr {
      constructor(YY) {
        this.view = YY;
        let rY = this.query = YY.state.field(jY).query.spec;

        function DY(YY, rY, DY) {
          return (0, IY.e)("button", {
            class: "cm-button",
            name: YY,
            onclick: rY,
            type: "button"
          }, DY)
        }
        this.commit = this.commit.bind(this), this.searchField = (0, IY.e)("input", {
          value: rY.search,
          placeholder: rr(YY, "Find"),
          "aria-label": rr(YY, "Find"),
          class: "cm-textfield",
          name: "search",
          form: "",
          "main-field": "true",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.replaceField = (0, IY.e)("input", {
          value: rY.replace,
          placeholder: rr(YY, "Replace"),
          "aria-label": rr(YY, "Replace"),
          class: "cm-textfield",
          name: "replace",
          form: "",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.caseField = (0, IY.e)("input", {
          type: "checkbox",
          name: "case",
          form: "",
          checked: rY.caseSensitive,
          onchange: this.commit
        }), this.reField = (0, IY.e)("input", {
          type: "checkbox",
          name: "re",
          form: "",
          checked: rY.regexp,
          onchange: this.commit
        }), this.wordField = (0, IY.e)("input", {
          type: "checkbox",
          name: "word",
          form: "",
          checked: rY.wholeWord,
          onchange: this.commit
        }), this.dom = (0, IY.e)("div", {
          onkeydown: YY => this.keydown(YY),
          class: "cm-search"
        }, [this.searchField, DY("next", (() => bY(YY)), [rr(YY, "next")]), DY("prev", (() => XY(YY)), [rr(YY, "previous")]), DY("select", (() => qY(YY)), [rr(YY, "all")]), (0, IY.e)("label", null, [this.caseField, rr(YY, "match case")]), (0, IY.e)("label", null, [this.reField, rr(YY, "regexp")]), (0, IY.e)("label", null, [this.wordField, rr(YY, "by word")]), ...YY.state.readOnly ? [] : [(0, IY.e)("br"), this.replaceField, DY("replace", (() => pY(YY)), [rr(YY, "replace")]), DY("replaceAll", (() => kY(YY)), [rr(YY, "replace all")])], (0, IY.e)("button", {
          name: "close",
          onclick: () => LY(YY),
          "aria-label": rr(YY, "close"),
          type: "button"
        }, ["\xd7"])])
      }
      commit() {
        let YY = new eY({
          search: this.searchField.value,
          caseSensitive: this.caseField.checked,
          regexp: this.reField.checked,
          wholeWord: this.wordField.checked,
          replace: this.replaceField.value
        });
        YY.eq(this.query) || (this.query = YY, this.view.dispatch({
          effects: CY.of(YY)
        }))
      }
      keydown(YY) {
        (0, FY.hb)(this.view, YY, "search-panel") ? YY.preventDefault(): 13 == YY.keyCode && YY.target == this.searchField ? (YY.preventDefault(), (YY.shiftKey ? XY : bY)(this.view)) : 13 == YY.keyCode && YY.target == this.replaceField && (YY.preventDefault(), pY(this.view))
      }
      update(YY) {
        for (let rY of YY.transactions)
          for (let YY of rY.effects) YY.is(CY) && !YY.value.eq(this.query) && this.setQuery(YY.value)
      }
      setQuery(YY) {
        this.query = YY, this.searchField.value = YY.search, this.replaceField.value = YY.replace, this.caseField.checked = YY.caseSensitive, this.reField.checked = YY.regexp, this.wordField.checked = YY.wholeWord
      }
      mount() {
        this.searchField.select()
      }
      get pos() {
        return 80
      }
      get top() {
        return this.view.state.facet(TY).top
      }
    }

    function rr(YY, rY) {
      return YY.state.phrase(rY)
    }
    const Dr = 30,
      Fr = /[\s\.,:;?!]/;

    function Ar(YY, rY) {
      let {
        from: DY,
        to: AY
      } = rY, IY = YY.state.doc.lineAt(DY), RY = YY.state.doc.lineAt(AY).to, OY = Math.max(IY.from, DY - Dr), gY = Math.min(RY, AY + Dr), aY = YY.state.sliceDoc(OY, gY);
      if (OY != IY.from)
        for (let FY = 0; FY < Dr; FY++)
          if (!Fr.test(aY[FY + 1]) && Fr.test(aY[FY])) {
            aY = aY.slice(FY);
            break
          } if (gY != RY)
        for (let FY = aY.length - 1; FY > aY.length - Dr; FY--)
          if (!Fr.test(aY[FY - 1]) && Fr.test(aY[FY])) {
            aY = aY.slice(0, FY);
            break
          } return FY.e.announce.of(`${YY.state.phrase("current match")}. ${aY} ${YY.state.phrase("on line")} ${IY.number}.`)
    }
    const Ir = FY.e.baseTheme({
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
      Rr = [jY, AY.v.low(MY), Ir]
  },
  40398: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => ZY,
      c: () => ar,
      e: () => NA,
      h: () => IR,
      k: () => Pr,
      n: () => HY,
      r: () => KI,
      u: () => PA,
      y: () => II,
      A: () => PI,
      C: () => GI,
      F: () => vR,
      K: () => WI,
      H: () => HR,
      M: () => iI,
      O: () => kI,
      S: () => fA,
      W: () => NR,
      _: () => kr,
      cb: () => SI,
      fb: () => NI,
      hb: () => dA,
      kb: () => rR,
      lb: () => YR,
      nb: () => MI
    });
    for (var FY = DY(40395), AY = DY(40400), IY = {
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
      }, RY = {
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
      }, OY = "undefined" != typeof navigator && /Mac/.test(navigator.platform), gY = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), aY = 0; aY < 10; aY++) IY[48 + aY] = IY[96 + aY] = String(aY);
    for (aY = 1; aY <= 24; aY++) IY[aY + 111] = "F" + aY;
    for (aY = 65; aY <= 90; aY++) IY[aY] = String.fromCharCode(aY + 32), RY[aY] = String.fromCharCode(aY);
    for (var vY in IY) RY.hasOwnProperty(vY) || (RY[vY] = IY[vY]);
    var uY = DY(40409);
    let sY = "undefined" != typeof navigator ? navigator : {
        userAgent: "",
        vendor: "",
        platform: ""
      },
      iY = "undefined" != typeof document ? document : {
        documentElement: {
          style: {}
        }
      };
    const yY = /Edge\/(\d+)/.exec(sY.userAgent),
      QY = /MSIE \d/.test(sY.userAgent),
      oY = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(sY.userAgent),
      WY = !!(QY || oY || yY),
      EY = !WY && /gecko\/(\d+)/i.test(sY.userAgent),
      mY = !WY && /Chrome\/(\d+)/.exec(sY.userAgent),
      VY = "webkitFontSmoothing" in iY.documentElement.style,
      SY = !WY && /Apple Computer/.test(sY.vendor),
      lY = SY && (/Mobile\/\w+/.test(sY.userAgent) || sY.maxTouchPoints > 2);
    var TY = {
      mac: lY || /Mac/.test(sY.platform),
      windows: /Win/.test(sY.platform),
      linux: /Linux|X11/.test(sY.platform),
      ie: WY,
      ie_version: QY ? iY.documentMode || 6 : oY ? +oY[1] : yY ? +yY[1] : 0,
      gecko: EY,
      gecko_version: EY ? +(/Firefox\/(\d+)/.exec(sY.userAgent) || [0, 0])[1] : 0,
      chrome: !!mY,
      chrome_version: mY ? +mY[1] : 0,
      ios: lY,
      android: /Android\b/.test(sY.userAgent),
      webkit: VY,
      webkit_version: VY ? +(/\bAppleWebKit\/(\d+)/.exec(sY.userAgent) || [0, 0])[1] : 0,
      safari: SY,
      safari_version: SY ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(sY.userAgent) || [0, 0])[1] : 0,
      tabSize: null != iY.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size"
    };

    function eY(YY, rY) {
      for (let DY in YY) "class" == DY && rY.class ? rY.class += " " + YY.class : "style" == DY && rY.style ? rY.style += ";" + YY.style : rY[DY] = YY[DY];
      return rY
    }
    const NY = Object.create(null);

    function BY(YY, rY, DY) {
      if (YY == rY) return !0;
      YY || (YY = NY), rY || (rY = NY);
      let FY = Object.keys(YY),
        AY = Object.keys(rY);
      if (FY.length - (DY && FY.indexOf(DY) > -1 ? 1 : 0) != AY.length - (DY && AY.indexOf(DY) > -1 ? 1 : 0)) return !1;
      for (let IY of FY)
        if (IY != DY && (-1 == AY.indexOf(IY) || YY[IY] !== rY[IY])) return !1;
      return !0
    }

    function cY(YY, rY, DY) {
      let FY = !1;
      if (rY)
        for (let AY in rY) DY && AY in DY || (FY = !0, "style" == AY ? YY.style.cssText = "" : YY.removeAttribute(AY));
      if (DY)
        for (let AY in DY) rY && rY[AY] == DY[AY] || (FY = !0, "style" == AY ? YY.style.cssText = DY[AY] : YY.setAttribute(AY, DY[AY]));
      return FY
    }

    function KY(YY) {
      let rY = Object.create(null);
      for (let DY = 0; DY < YY.attributes.length; DY++) {
        let FY = YY.attributes[DY];
        rY[FY.name] = FY.value
      }
      return rY
    }
    class HY {
      eq(YY) {
        return !1
      }
      updateDOM(YY, rY, DY) {
        return !1
      }
      compare(YY) {
        return this == YY || this.constructor == YY.constructor && this.eq(YY)
      }
      get estimatedHeight() {
        return -1
      }
      get lineBreaks() {
        return 0
      }
      ignoreEvent(YY) {
        return !0
      }
      coordsAt(YY, rY, DY) {
        return null
      }
      get isHidden() {
        return !1
      }
      get editable() {
        return !1
      }
      destroy(YY) {}
    }
    var zY = function(YY) {
      return YY[YY.Text = 0] = "Text", YY[YY.WidgetBefore = 1] = "WidgetBefore", YY[YY.WidgetAfter = 2] = "WidgetAfter", YY[YY.WidgetRange = 3] = "WidgetRange", YY
    }(zY || (zY = {}));
    class ZY extends FY.C {
      constructor(YY, rY, DY, FY) {
        super(), this.startSide = YY, this.endSide = rY, this.widget = DY, this.spec = FY
      }
      get heightRelevant() {
        return !1
      }
      static mark(YY) {
        return new CY(YY)
      }
      static widget(YY) {
        let rY = Math.max(-1e4, Math.min(1e4, YY.side || 0)),
          DY = !!YY.block;
        return rY += DY && !YY.inlineOrder ? rY > 0 ? 3e8 : -4e8 : rY > 0 ? 1e8 : -1e8, new jY(YY, rY, rY, DY, YY.widget || null, !1)
      }
      static replace(YY) {
        let rY, DY, FY = !!YY.block;
        if (YY.isBlockGap) rY = -5e8, DY = 4e8;
        else {
          let {
            start: AY,
            end: IY
          } = hY(YY, FY);
          rY = (AY ? FY ? -3e8 : -1 : 5e8) - 1, DY = 1 + (IY ? FY ? 2e8 : 1 : -6e8)
        }
        return new jY(YY, rY, DY, FY, YY.widget || null, !0)
      }
      static line(YY) {
        return new fY(YY)
      }
      static set(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return FY.B.of(YY, rY)
      }
      hasHeight() {
        return !!this.widget && this.widget.estimatedHeight > -1
      }
    }
    ZY.none = FY.B.empty;
    class CY extends ZY {
      constructor(YY) {
        let {
          start: rY,
          end: DY
        } = hY(YY);
        super(rY ? -1 : 5e8, DY ? 1 : -6e8, null, YY), this.tagName = YY.tagName || "span", this.attrs = YY.class && YY.attributes ? eY(YY.attributes, {
          class: YY.class
        }) : YY.class ? {
          class: YY.class
        } : YY.attributes || NY
      }
      eq(YY) {
        return this == YY || YY instanceof CY && this.tagName == YY.tagName && BY(this.attrs, YY.attrs)
      }
      range(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YY;
        if (YY >= rY) throw new RangeError("Mark decorations may not be empty");
        return super.range(YY, rY)
      }
    }
    CY.prototype.point = !1;
    class fY extends ZY {
      constructor(YY) {
        super(-2e8, -2e8, null, YY)
      }
      eq(YY) {
        return YY instanceof fY && this.spec.class == YY.spec.class && BY(this.spec.attributes, YY.spec.attributes)
      }
      range(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YY;
        if (rY != YY) throw new RangeError("Line decoration ranges must be zero-length");
        return super.range(YY, rY)
      }
    }
    fY.prototype.mapMode = FY.u.TrackBefore, fY.prototype.point = !0;
    class jY extends ZY {
      constructor(YY, rY, DY, AY, IY, RY) {
        super(rY, DY, IY, YY), this.block = AY, this.isReplace = RY, this.mapMode = AY ? rY <= 0 ? FY.u.TrackBefore : FY.u.TrackAfter : FY.u.TrackDel
      }
      get type() {
        return this.startSide != this.endSide ? zY.WidgetRange : this.startSide <= 0 ? zY.WidgetBefore : zY.WidgetAfter
      }
      get heightRelevant() {
        return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0)
      }
      eq(YY) {
        return YY instanceof jY && (rY = this.widget, DY = YY.widget, rY == DY || !!(rY && DY && rY.compare(DY))) && this.block == YY.block && this.startSide == YY.startSide && this.endSide == YY.endSide;
        var rY, DY
      }
      range(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YY;
        if (this.isReplace && (YY > rY || YY == rY && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && rY != YY) throw new RangeError("Widget decorations can only have zero-length ranges");
        return super.range(YY, rY)
      }
    }

    function hY(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          inclusiveStart: DY,
          inclusiveEnd: FY
        } = YY;
      return null == DY && (DY = YY.inclusive), null == FY && (FY = YY.inclusive), {
        start: null !== DY && void 0 !== DY ? DY : rY,
        end: null !== FY && void 0 !== FY ? FY : rY
      }
    }

    function dY(YY, rY, DY) {
      let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        AY = DY.length - 1;
      AY >= 0 && DY[AY] + FY >= YY ? DY[AY] = Math.max(DY[AY], rY) : DY.push(YY, rY)
    }
    jY.prototype.point = !0;
    class JY extends FY.C {
      constructor(YY, rY) {
        super(), this.tagName = YY, this.attributes = rY
      }
      eq(YY) {
        return YY == this || YY instanceof JY && this.tagName == YY.tagName && BY(this.attributes, YY.attributes)
      }
      static create(YY) {
        return new JY(YY.tagName, YY.attributes || NY)
      }
      static set(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return FY.B.of(YY, rY)
      }
    }

    function MY(YY) {
      let rY;
      return rY = 11 == YY.nodeType ? YY.getSelection ? YY : YY.ownerDocument : YY, rY.getSelection()
    }

    function wY(YY, rY) {
      return !!rY && (YY == rY || YY.contains(1 != rY.nodeType ? rY.parentNode : rY))
    }

    function bY(YY, rY) {
      if (!rY.anchorNode) return !1;
      try {
        return wY(YY, rY.anchorNode)
      } catch (DY) {
        return !1
      }
    }

    function XY(YY) {
      return 3 == YY.nodeType ? Fr(YY, 0, YY.nodeValue.length).getClientRects() : 1 == YY.nodeType ? YY.getClientRects() : []
    }

    function qY(YY, rY, DY, FY) {
      return !!DY && (GY(YY, rY, DY, FY, -1) || GY(YY, rY, DY, FY, 1))
    }

    function pY(YY) {
      for (var rY = 0;; rY++)
        if (!(YY = YY.previousSibling)) return rY
    }

    function kY(YY) {
      return 1 == YY.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(YY.nodeName)
    }

    function GY(YY, rY, DY, FY, AY) {
      for (;;) {
        if (YY == DY && rY == FY) return !0;
        if (rY == (AY < 0 ? 0 : xY(YY))) {
          if ("DIV" == YY.nodeName) return !1;
          let DY = YY.parentNode;
          if (!DY || 1 != DY.nodeType) return !1;
          rY = pY(YY) + (AY < 0 ? 0 : 1), YY = DY
        } else {
          if (1 != YY.nodeType) return !1;
          if (1 == (YY = YY.childNodes[rY + (AY < 0 ? -1 : 0)]).nodeType && "false" == YY.contentEditable) return !1;
          rY = AY < 0 ? xY(YY) : 0
        }
      }
    }

    function xY(YY) {
      return 3 == YY.nodeType ? YY.nodeValue.length : YY.childNodes.length
    }

    function nY(YY, rY) {
      let DY = rY ? YY.left : YY.right;
      return {
        left: DY,
        right: DY,
        top: YY.top,
        bottom: YY.bottom
      }
    }

    function PY(YY) {
      let rY = YY.visualViewport;
      return rY ? {
        left: 0,
        right: rY.width,
        top: 0,
        bottom: rY.height
      } : {
        left: 0,
        right: YY.innerWidth,
        top: 0,
        bottom: YY.innerHeight
      }
    }

    function UY(YY, rY) {
      let DY = rY.width / YY.offsetWidth,
        FY = rY.height / YY.offsetHeight;
      return (DY > .995 && DY < 1.005 || !isFinite(DY) || Math.abs(rY.width - YY.offsetWidth) < 1) && (DY = 1), (FY > .995 && FY < 1.005 || !isFinite(FY) || Math.abs(rY.height - YY.offsetHeight) < 1) && (FY = 1), {
        scaleX: DY,
        scaleY: FY
      }
    }

    function LY(YY) {
      let rY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        DY = YY.ownerDocument,
        FY = null,
        AY = null;
      for (let IY = YY.parentNode; IY && (IY != DY.body && (rY && !FY || !AY));)
        if (1 == IY.nodeType) !AY && IY.scrollHeight > IY.clientHeight && (AY = IY), rY && !FY && IY.scrollWidth > IY.clientWidth && (FY = IY), IY = IY.assignedSlot || IY.parentNode;
        else {
          if (11 != IY.nodeType) break;
          IY = IY.host
        } return {
        x: FY,
        y: AY
      }
    }
    JY.prototype.startSide = JY.prototype.endSide = -1;
    class tY {
      constructor() {
        this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
      }
      eq(YY) {
        return this.anchorNode == YY.anchorNode && this.anchorOffset == YY.anchorOffset && this.focusNode == YY.focusNode && this.focusOffset == YY.focusOffset
      }
      setRange(YY) {
        let {
          anchorNode: rY,
          focusNode: DY
        } = YY;
        this.set(rY, Math.min(YY.anchorOffset, rY ? xY(rY) : 0), DY, Math.min(YY.focusOffset, DY ? xY(DY) : 0))
      }
      set(YY, rY, DY, FY) {
        this.anchorNode = YY, this.anchorOffset = rY, this.focusNode = DY, this.focusOffset = FY
      }
    }
    let Yr, rr = null;

    function Dr(YY) {
      if (YY.setActive) return YY.setActive();
      if (rr) return YY.focus(rr);
      let rY = [];
      for (let DY = YY; DY && (rY.push(DY, DY.scrollTop, DY.scrollLeft), DY != DY.ownerDocument); DY = DY.parentNode);
      if (YY.focus(null == rr ? {
          get preventScroll() {
            return rr = {
              preventScroll: !0
            }, !0
          }
        } : void 0), !rr) {
        rr = !1;
        for (let YY = 0; YY < rY.length;) {
          let DY = rY[YY++],
            FY = rY[YY++],
            AY = rY[YY++];
          DY.scrollTop != FY && (DY.scrollTop = FY), DY.scrollLeft != AY && (DY.scrollLeft = AY)
        }
      }
    }

    function Fr(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : rY,
        FY = Yr || (Yr = document.createRange());
      return FY.setEnd(YY, DY), FY.setStart(YY, rY), FY
    }

    function Ar(YY, rY, DY, FY) {
      let AY = {
        key: rY,
        code: rY,
        keyCode: DY,
        which: DY,
        cancelable: !0
      };
      FY && ({
        altKey: AY.altKey,
        ctrlKey: AY.ctrlKey,
        shiftKey: AY.shiftKey,
        metaKey: AY.metaKey
      } = FY);
      let IY = new KeyboardEvent("keydown", AY);
      IY.synthetic = !0, YY.dispatchEvent(IY);
      let RY = new KeyboardEvent("keyup", AY);
      return RY.synthetic = !0, YY.dispatchEvent(RY), IY.defaultPrevented || RY.defaultPrevented
    }

    function Ir(YY) {
      return YY instanceof Window ? YY.pageYOffset > Math.max(0, YY.document.documentElement.scrollHeight - YY.innerHeight - 4) : YY.scrollTop > Math.max(1, YY.scrollHeight - YY.clientHeight - 4)
    }

    function Rr(YY, rY) {
      for (let DY = YY, FY = rY;;) {
        if (3 == DY.nodeType && FY > 0) return {
          node: DY,
          offset: FY
        };
        if (1 == DY.nodeType && FY > 0) {
          if ("false" == DY.contentEditable) return null;
          DY = DY.childNodes[FY - 1], FY = xY(DY)
        } else {
          if (!DY.parentNode || kY(DY)) return null;
          FY = pY(DY), DY = DY.parentNode
        }
      }
    }

    function Or(YY, rY) {
      for (let DY = YY, FY = rY;;) {
        if (3 == DY.nodeType && FY < DY.nodeValue.length) return {
          node: DY,
          offset: FY
        };
        if (1 == DY.nodeType && FY < DY.childNodes.length) {
          if ("false" == DY.contentEditable) return null;
          DY = DY.childNodes[FY], FY = 0
        } else {
          if (!DY.parentNode || kY(DY)) return null;
          FY = pY(DY) + 1, DY = DY.parentNode
        }
      }
    }
    TY.safari && TY.safari_version >= 26 && (rr = !1);
    class gr {
      constructor(YY, rY) {
        let DY = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.node = YY, this.offset = rY, this.precise = DY
      }
      static before(YY, rY) {
        return new gr(YY.parentNode, pY(YY), rY)
      }
      static after(YY, rY) {
        return new gr(YY.parentNode, pY(YY) + 1, rY)
      }
    }
    var ar = function(YY) {
      return YY[YY.LTR = 0] = "LTR", YY[YY.RTL = 1] = "RTL", YY
    }(ar || (ar = {}));
    const vr = ar.LTR,
      ur = ar.RTL;

    function sr(YY) {
      let rY = [];
      for (let DY = 0; DY < YY.length; DY++) rY.push(1 << +YY[DY]);
      return rY
    }
    const ir = sr("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),
      yr = sr("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),
      Qr = Object.create(null),
      or = [];
    for (let zR of ["()", "[]", "{}"]) {
      let YY = zR.charCodeAt(0),
        rY = zR.charCodeAt(1);
      Qr[YY] = rY, Qr[rY] = -YY
    }

    function Wr(YY) {
      return YY <= 247 ? ir[YY] : 1424 <= YY && YY <= 1524 ? 2 : 1536 <= YY && YY <= 1785 ? yr[YY - 1536] : 1774 <= YY && YY <= 2220 ? 4 : 8192 <= YY && YY <= 8204 ? 256 : 64336 <= YY && YY <= 65023 ? 4 : 1
    }
    const Er = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
    class mr {
      get dir() {
        return this.level % 2 ? ur : vr
      }
      constructor(YY, rY, DY) {
        this.from = YY, this.to = rY, this.level = DY
      }
      side(YY, rY) {
        return this.dir == rY == YY ? this.to : this.from
      }
      forward(YY, rY) {
        return YY == (this.dir == rY)
      }
      static find(YY, rY, DY, FY) {
        let AY = -1;
        for (let IY = 0; IY < YY.length; IY++) {
          let RY = YY[IY];
          if (RY.from <= rY && RY.to >= rY) {
            if (RY.level == DY) return IY;
            (AY < 0 || (0 != FY ? FY < 0 ? RY.from < rY : RY.to > rY : YY[AY].level > RY.level)) && (AY = IY)
          }
        }
        if (AY < 0) throw new RangeError("Index out of range");
        return AY
      }
    }

    function Vr(YY, rY) {
      if (YY.length != rY.length) return !1;
      for (let DY = 0; DY < YY.length; DY++) {
        let FY = YY[DY],
          AY = rY[DY];
        if (FY.from != AY.from || FY.to != AY.to || FY.direction != AY.direction || !Vr(FY.inner, AY.inner)) return !1
      }
      return !0
    }
    const Sr = [];

    function lr(YY, rY, DY, FY, AY, IY, RY) {
      let OY = FY % 2 ? 2 : 1;
      if (FY % 2 == AY % 2)
        for (let gY = rY, aY = 0; gY < DY;) {
          let rY = !0,
            vY = !1;
          if (aY == IY.length || gY < IY[aY].from) {
            let YY = Sr[gY];
            YY != OY && (rY = !1, vY = 16 == YY)
          }
          let uY = rY || 1 != OY ? null : [],
            sY = rY ? FY : FY + 1,
            iY = gY;
          YY: for (;;)
            if (aY < IY.length && iY == IY[aY].from) {
              if (vY) break YY;
              let yY = IY[aY];
              if (!rY)
                for (let YY = yY.to, rY = aY + 1;;) {
                  if (YY == DY) break YY;
                  if (!(rY < IY.length && IY[rY].from == YY)) {
                    if (Sr[YY] == OY) break YY;
                    break
                  }
                  YY = IY[rY++].to
                }
              if (aY++, uY) uY.push(yY);
              else {
                yY.from > gY && RY.push(new mr(gY, yY.from, sY)), Tr(YY, yY.direction == vr != !(sY % 2) ? FY + 1 : FY, AY, yY.inner, yY.from, yY.to, RY), gY = yY.to
              }
              iY = yY.to
            } else {
              if (iY == DY || (rY ? Sr[iY] != OY : Sr[iY] == OY)) break;
              iY++
            } uY ? lr(YY, gY, iY, FY + 1, AY, uY, RY) : gY < iY && RY.push(new mr(gY, iY, sY)), gY = iY
        } else
          for (let gY = DY, aY = IY.length; gY > rY;) {
            let DY = !0,
              vY = !1;
            if (!aY || gY > IY[aY - 1].to) {
              let YY = Sr[gY - 1];
              YY != OY && (DY = !1, vY = 16 == YY)
            }
            let uY = DY || 1 != OY ? null : [],
              sY = DY ? FY : FY + 1,
              iY = gY;
            YY: for (;;)
              if (aY && iY == IY[aY - 1].to) {
                if (vY) break YY;
                let yY = IY[--aY];
                if (!DY)
                  for (let YY = yY.from, DY = aY;;) {
                    if (YY == rY) break YY;
                    if (!DY || IY[DY - 1].to != YY) {
                      if (Sr[YY - 1] == OY) break YY;
                      break
                    }
                    YY = IY[--DY].from
                  }
                if (uY) uY.push(yY);
                else {
                  yY.to < gY && RY.push(new mr(yY.to, gY, sY)), Tr(YY, yY.direction == vr != !(sY % 2) ? FY + 1 : FY, AY, yY.inner, yY.from, yY.to, RY), gY = yY.from
                }
                iY = yY.from
              } else {
                if (iY == rY || (DY ? Sr[iY - 1] != OY : Sr[iY - 1] == OY)) break;
                iY--
              } uY ? lr(YY, iY, gY, FY + 1, AY, uY, RY) : iY < gY && RY.push(new mr(iY, gY, sY)), gY = iY
          }
    }

    function Tr(YY, rY, DY, FY, AY, IY, RY) {
      let OY = rY % 2 ? 2 : 1;
      ! function(YY, rY, DY, FY, AY) {
        for (let IY = 0; IY <= FY.length; IY++) {
          let RY = IY ? FY[IY - 1].to : rY,
            OY = IY < FY.length ? FY[IY].from : DY,
            gY = IY ? 256 : AY;
          for (let rY = RY, DY = gY, FY = gY; rY < OY; rY++) {
            let AY = Wr(YY.charCodeAt(rY));
            512 == AY ? AY = DY : 8 == AY && 4 == FY && (AY = 16), Sr[rY] = 4 == AY ? 2 : AY, 7 & AY && (FY = AY), DY = AY
          }
          for (let YY = RY, rY = gY, FY = gY; YY < OY; YY++) {
            let AY = Sr[YY];
            if (128 == AY) YY < OY - 1 && rY == Sr[YY + 1] && 24 & rY ? AY = Sr[YY] = rY : Sr[YY] = 256;
            else if (64 == AY) {
              let AY = YY + 1;
              for (; AY < OY && 64 == Sr[AY];) AY++;
              let IY = YY && 8 == rY || AY < DY && 8 == Sr[AY] ? 1 == FY ? 1 : 8 : 256;
              for (let rY = YY; rY < AY; rY++) Sr[rY] = IY;
              YY = AY - 1
            } else 8 == AY && 1 == FY && (Sr[YY] = 1);
            rY = AY, 7 & AY && (FY = AY)
          }
        }
      }(YY, AY, IY, FY, OY),
      function(YY, rY, DY, FY, AY) {
        let IY = 1 == AY ? 2 : 1;
        for (let RY = 0, OY = 0, gY = 0; RY <= FY.length; RY++) {
          let aY = RY ? FY[RY - 1].to : rY,
            vY = RY < FY.length ? FY[RY].from : DY;
          for (let rY, DY, FY, RY = aY; RY < vY; RY++)
            if (DY = Qr[rY = YY.charCodeAt(RY)])
              if (DY < 0) {
                for (let YY = OY - 3; YY >= 0; YY -= 3)
                  if (or[YY + 1] == -DY) {
                    let rY = or[YY + 2],
                      DY = 2 & rY ? AY : 4 & rY ? 1 & rY ? IY : AY : 0;
                    DY && (Sr[RY] = Sr[or[YY]] = DY), OY = YY;
                    break
                  }
              } else {
                if (189 == or.length) break;
                or[OY++] = RY, or[OY++] = rY, or[OY++] = gY
              }
          else if (2 == (FY = Sr[RY]) || 1 == FY) {
            let YY = FY == AY;
            gY = YY ? 0 : 1;
            for (let rY = OY - 3; rY >= 0; rY -= 3) {
              let DY = or[rY + 2];
              if (2 & DY) break;
              if (YY) or[rY + 2] |= 2;
              else {
                if (4 & DY) break;
                or[rY + 2] |= 4
              }
            }
          }
        }
      }(YY, AY, IY, FY, OY),
      function(YY, rY, DY, FY) {
        for (let AY = 0, IY = FY; AY <= DY.length; AY++) {
          let RY = AY ? DY[AY - 1].to : YY,
            OY = AY < DY.length ? DY[AY].from : rY;
          for (let gY = RY; gY < OY;) {
            let RY = Sr[gY];
            if (256 == RY) {
              let RY = gY + 1;
              for (;;)
                if (RY == OY) {
                  if (AY == DY.length) break;
                  RY = DY[AY++].to, OY = AY < DY.length ? DY[AY].from : rY
                } else {
                  if (256 != Sr[RY]) break;
                  RY++
                } let aY = 1 == IY,
                vY = aY == (1 == (RY < rY ? Sr[RY] : FY)) ? aY ? 1 : 2 : FY;
              for (let rY = RY, FY = AY, IY = FY ? DY[FY - 1].to : YY; rY > gY;) rY == IY && (rY = DY[--FY].from, IY = FY ? DY[FY - 1].to : YY), Sr[--rY] = vY;
              gY = RY
            } else IY = RY, gY++
          }
        }
      }(AY, IY, FY, OY), lr(YY, AY, IY, rY, DY, FY, RY)
    }

    function er(YY, rY, DY) {
      if (!YY) return [new mr(0, 0, rY == ur ? 1 : 0)];
      if (rY == vr && !DY.length && !Er.test(YY)) return Nr(YY.length);
      if (DY.length)
        for (; YY.length > Sr.length;) Sr[Sr.length] = 256;
      let FY = [],
        AY = rY == vr ? 0 : 1;
      return Tr(YY, AY, AY, DY, 0, YY.length, FY), FY
    }

    function Nr(YY) {
      return [new mr(0, YY, 0)]
    }
    let Br = "";

    function cr(YY, rY, DY, AY, IY) {
      var RY;
      let OY = AY.head - YY.from,
        gY = mr.find(rY, OY, null !== (RY = AY.bidiLevel) && void 0 !== RY ? RY : -1, AY.assoc),
        aY = rY[gY],
        vY = aY.side(IY, DY);
      if (OY == vY) {
        let YY = gY += IY ? 1 : -1;
        if (YY < 0 || YY >= rY.length) return null;
        aY = rY[gY = YY], OY = aY.side(!IY, DY), vY = aY.side(IY, DY)
      }
      let uY = (0, FY.$)(YY.text, OY, aY.forward(IY, DY));
      (uY < aY.from || uY > aY.to) && (uY = vY), Br = YY.text.slice(Math.min(OY, uY), Math.max(OY, uY));
      let sY = gY == (IY ? rY.length - 1 : 0) ? null : rY[gY + (IY ? 1 : -1)];
      return sY && uY == vY && sY.level + (IY ? 0 : 1) < aY.level ? FY.n.cursor(sY.side(!IY, DY) + YY.from, sY.forward(IY, DY) ? 1 : -1, sY.level) : FY.n.cursor(uY + YY.from, aY.forward(IY, DY) ? -1 : 1, aY.level)
    }

    function Kr(YY, rY, DY) {
      for (let FY = rY; FY < DY; FY++) {
        let rY = Wr(YY.charCodeAt(FY));
        if (1 == rY) return vr;
        if (2 == rY || 4 == rY) return ur
      }
      return vr
    }
    const Hr = FY.r.define(),
      zr = FY.r.define(),
      Zr = FY.r.define(),
      Cr = FY.r.define(),
      fr = FY.r.define(),
      jr = FY.r.define(),
      hr = FY.r.define(),
      dr = FY.r.define(),
      Jr = FY.r.define(),
      Mr = FY.r.define({
        combine: YY => YY.some((YY => YY))
      }),
      wr = FY.r.define({
        combine: YY => YY.some((YY => YY))
      }),
      br = FY.r.define();
    class Xr {
      constructor(YY, rY, DY, FY, AY) {
        let IY = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.range = YY, this.y = rY, this.x = DY, this.yMargin = FY, this.xMargin = AY, this.isSnapshot = IY
      }
      map(YY) {
        return YY.empty ? this : new Xr(this.range.map(YY), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
      clip(YY) {
        return this.range.to <= YY.doc.length ? this : new Xr(FY.n.cursor(YY.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
    }
    const qr = FY.E.define({
        map: (YY, rY) => YY.map(rY)
      }),
      pr = FY.E.define();

    function kr(YY, rY, DY) {
      let FY = YY.facet(Cr);
      FY.length ? FY[0](rY) : window.onerror && window.onerror(String(rY), DY, void 0, void 0, rY) || (DY ? console.error(DY + ":", rY) : console.error(rY))
    }
    const Gr = FY.r.define({
      combine: YY => !YY.length || YY[0]
    });
    let xr = 0;
    const nr = FY.r.define({
      combine: YY => YY.filter(((rY, DY) => {
        for (let FY = 0; FY < DY; FY++)
          if (YY[FY].plugin == rY.plugin) return !1;
        return !0
      }))
    });
    class Pr {
      constructor(YY, rY, DY, FY, AY) {
        this.id = YY, this.create = rY, this.domEventHandlers = DY, this.domEventObservers = FY, this.baseExtensions = AY(this), this.extension = this.baseExtensions.concat(nr.of({
          plugin: this,
          arg: void 0
        }))
      }
      of(YY) {
        return this.baseExtensions.concat(nr.of({
          plugin: this,
          arg: YY
        }))
      }
      static define(YY, rY) {
        const {
          eventHandlers: DY,
          eventObservers: FY,
          provide: AY,
          CA: IY
        } = rY || {};
        return new Pr(xr++, YY, DY, FY, (YY => {
          let rY = [];
          return IY && rY.push(YD.of((rY => {
            let DY = rY.plugin(YY);
            return DY ? IY(DY) : ZY.none
          }))), AY && rY.push(AY(YY)), rY
        }))
      }
      static fromClass(YY, rY) {
        return Pr.define(((rY, DY) => new YY(rY, DY)), rY)
      }
    }
    class Ur {
      constructor(YY) {
        this.spec = YY, this.mustUpdate = null, this.value = null
      }
      get plugin() {
        return this.spec && this.spec.plugin
      }
      update(YY) {
        if (this.value) {
          if (this.mustUpdate) {
            let YY = this.mustUpdate;
            if (this.mustUpdate = null, this.value.update) try {
              this.value.update(YY)
            } catch (rY) {
              if (kr(YY.state, rY, "CodeMirror plugin crashed"), this.value.destroy) try {
                this.value.destroy()
              } catch (DY) {}
              this.deactivate()
            }
          }
        } else if (this.spec) try {
          this.value = this.spec.plugin.create(YY, this.spec.arg)
        } catch (rY) {
          kr(YY.state, rY, "CodeMirror plugin crashed"), this.deactivate()
        }
        return this
      }
      destroy(YY) {
        var rY;
        if (null === (rY = this.value) || void 0 === rY ? void 0 : rY.destroy) try {
          this.value.destroy()
        } catch (DY) {
          kr(YY.state, DY, "CodeMirror plugin crashed")
        }
      }
      deactivate() {
        this.spec = this.value = null
      }
    }
    const Lr = FY.r.define(),
      tr = FY.r.define(),
      YD = FY.r.define(),
      rD = FY.r.define(),
      DD = FY.r.define(),
      FD = FY.r.define(),
      AD = FY.r.define();

    function ID(YY, rY) {
      let DY = YY.state.facet(AD);
      if (!DY.length) return DY;
      let AY = DY.map((rY => rY instanceof Function ? rY(YY) : rY)),
        IY = [];
      return FY.B.spans(AY, rY.from, rY.to, {
        point() {},
        span(YY, DY, FY, AY) {
          let RY = YY - rY.from,
            OY = DY - rY.from,
            gY = IY;
          for (let IY = FY.length - 1; IY >= 0; IY--, AY--) {
            let YY, DY = FY[IY].spec.bidiIsolate;
            if (null == DY && (DY = Kr(rY.text, RY, OY)), AY > 0 && gY.length && (YY = gY[gY.length - 1]).to == RY && YY.direction == DY) YY.to = OY, gY = YY.inner;
            else {
              let YY = {
                from: RY,
                to: OY,
                direction: DY,
                inner: []
              };
              gY.push(YY), gY = YY.inner
            }
          }
        }
      }), IY
    }
    const RD = FY.r.define();

    function OD(YY) {
      let rY = 0,
        DY = 0,
        FY = 0,
        AY = 0;
      for (let IY of YY.state.facet(RD)) {
        let RY = IY(YY);
        RY && (null != RY.left && (rY = Math.max(rY, RY.left)), null != RY.right && (DY = Math.max(DY, RY.right)), null != RY.top && (FY = Math.max(FY, RY.top)), null != RY.bottom && (AY = Math.max(AY, RY.bottom)))
      }
      return {
        left: rY,
        right: DY,
        top: FY,
        bottom: AY
      }
    }
    const gD = FY.r.define();
    class aD {
      constructor(YY, rY, DY, FY) {
        this.fromA = YY, this.toA = rY, this.fromB = DY, this.toB = FY
      }
      join(YY) {
        return new aD(Math.min(this.fromA, YY.fromA), Math.max(this.toA, YY.toA), Math.min(this.fromB, YY.fromB), Math.max(this.toB, YY.toB))
      }
      addToSet(YY) {
        let rY = YY.length,
          DY = this;
        for (; rY > 0; rY--) {
          let FY = YY[rY - 1];
          if (!(FY.fromA > DY.toA)) {
            if (FY.toA < DY.fromA) break;
            DY = DY.join(FY), YY.splice(rY - 1, 1)
          }
        }
        return YY.splice(rY, 0, DY), YY
      }
      static extendWithRanges(YY, rY) {
        if (0 == rY.length) return YY;
        let DY = [];
        for (let FY = 0, AY = 0, IY = 0;;) {
          let RY = FY < YY.length ? YY[FY].fromB : 1e9,
            OY = AY < rY.length ? rY[AY] : 1e9,
            gY = Math.min(RY, OY);
          if (1e9 == gY) break;
          let aY = gY + IY,
            vY = gY,
            uY = aY;
          for (;;)
            if (AY < rY.length && rY[AY] <= vY) {
              let DY = rY[AY + 1];
              AY += 2, vY = Math.max(vY, DY);
              for (let rY = FY; rY < YY.length && YY[rY].fromB <= vY; rY++) IY = YY[rY].toA - YY[rY].toB;
              uY = Math.max(uY, DY + IY)
            } else {
              if (!(FY < YY.length && YY[FY].fromB <= vY)) break;
              {
                let rY = YY[FY++];
                vY = Math.max(vY, rY.toB), uY = Math.max(uY, rY.toA), IY = rY.toA - rY.toB
              }
            } DY.push(new aD(aY, uY, gY, vY))
        }
        return DY
      }
    }
    class vD {
      constructor(YY, rY, DY) {
        this.view = YY, this.state = rY, this.transactions = DY, this.flags = 0, this.startState = YY.state, this.changes = FY.ChangeSet.empty(this.startState.doc.length);
        for (let FY of DY) this.changes = this.changes.compose(FY.changes);
        let AY = [];
        this.changes.iterChangedRanges(((YY, rY, DY, FY) => AY.push(new aD(YY, rY, DY, FY)))), this.changedRanges = AY
      }
      static create(YY, rY, DY) {
        return new vD(YY, rY, DY)
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
        return this.transactions.some((YY => YY.selection))
      }
      get empty() {
        return 0 == this.flags && 0 == this.transactions.length
      }
    }
    const uD = [];
    class sD {
      constructor(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.dom = YY, this.length = rY, this.flags = DY, this.parent = null, YY.cmTile = this
      }
      get breakAfter() {
        return 1 & this.flags
      }
      get children() {
        return uD
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
      sync(YY) {
        if (this.flags |= 2, 4 & this.flags) {
          this.flags &= -5;
          let YY = this.domAttrs;
          YY && function(YY, rY) {
            for (let DY = YY.attributes.length - 1; DY >= 0; DY--) {
              let FY = YY.attributes[DY].name;
              null == rY[FY] && YY.removeAttribute(FY)
            }
            for (let DY in rY) {
              let FY = rY[DY];
              "style" == DY ? YY.style.cssText = FY : YY.getAttribute(DY) != FY && YY.setAttribute(DY, FY)
            }
          }(this.dom, YY)
        }
      }
      toString() {
        return this.constructor.name + (this.children.length ? `(${this.children})` : "") + (this.breakAfter ? "#" : "")
      }
      destroy() {
        this.parent = null
      }
      setDOM(YY) {
        this.dom = YY, YY.cmTile = this
      }
      get posAtStart() {
        return this.parent ? this.parent.posBefore(this) : 0
      }
      get posAtEnd() {
        return this.posAtStart + this.length
      }
      posBefore(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.posAtStart;
        for (let DY of this.children) {
          if (DY == YY) return rY;
          rY += DY.length + DY.breakAfter
        }
        throw new RangeError("Invalid child in posBefore")
      }
      posAfter(YY) {
        return this.posBefore(YY) + YY.length
      }
      covers(YY) {
        return !0
      }
      coordsIn(YY, rY) {
        return null
      }
      domPosFor(YY, rY) {
        let DY = pY(this.dom),
          FY = this.length ? YY > 0 : rY > 0;
        return new gr(this.parent.dom, DY + (FY ? 1 : 0), 0 == YY || YY == this.length)
      }
      markDirty(YY) {
        this.flags &= -3, YY && (this.flags |= 4), this.parent && 2 & this.parent.flags && this.parent.markDirty(!1)
      }
      get overrideDOMText() {
        return null
      }
      get root() {
        for (let YY = this; YY; YY = YY.parent)
          if (YY instanceof QD) return YY;
        return null
      }
      static get(YY) {
        return YY.cmTile
      }
    }
    class iD extends sD {
      constructor(YY) {
        super(YY, 0), this._children = []
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
      append(YY) {
        this.children.push(YY), YY.parent = this
      }
      sync(YY) {
        if (2 & this.flags) return;
        super.sync(YY);
        let rY, DY = this.dom,
          FY = null,
          AY = (null === YY || void 0 === YY ? void 0 : YY.node) == DY ? YY : null,
          IY = 0;
        for (let RY of this.children) {
          if (RY.sync(YY), IY += RY.length + RY.breakAfter, rY = FY ? FY.nextSibling : DY.firstChild, AY && rY != RY.dom && (AY.written = !0), RY.dom.parentNode == DY)
            for (; rY && rY != RY.dom;) rY = yD(rY);
          else DY.insertBefore(RY.dom, rY);
          FY = RY.dom
        }
        for (rY = FY ? FY.nextSibling : DY.firstChild, AY && rY && (AY.written = !0); rY;) rY = yD(rY);
        this.length = IY
      }
    }

    function yD(YY) {
      let rY = YY.nextSibling;
      return YY.parentNode.removeChild(YY), rY
    }
    class QD extends iD {
      constructor(YY, rY) {
        super(rY), this.view = YY
      }
      owns(YY) {
        for (; YY; YY = YY.parent)
          if (YY == this) return !0;
        return !1
      }
      isBlock() {
        return !0
      }
      nearest(YY) {
        for (;;) {
          if (!YY) return null;
          let rY = sD.get(YY);
          if (rY && this.owns(rY)) return rY;
          YY = YY.parentNode
        }
      }
      blockTiles(YY) {
        for (let rY = [], DY = this, FY = 0, AY = 0;;)
          if (FY == DY.children.length) {
            if (!rY.length) return;
            DY = DY.parent, DY.breakAfter && AY++, FY = rY.pop()
          } else {
            let IY = DY.children[FY++];
            if (IY instanceof oD) rY.push(FY), DY = IY, FY = 0;
            else {
              let rY = AY + IY.length,
                DY = YY(IY, AY);
              if (void 0 !== DY) return DY;
              AY = rY + IY.breakAfter
            }
          }
      }
      resolveBlock(YY, rY) {
        let DY, FY, AY = -1,
          IY = -1;
        if (this.blockTiles(((RY, OY) => {
            let gY = OY + RY.length;
            if (YY >= OY && YY <= gY) {
              if (RY.isWidget() && rY >= -1 && rY <= 1) {
                if (32 & RY.flags) return !0;
                16 & RY.flags && (DY = void 0)
              }(OY < YY || YY == gY && (rY < -1 ? RY.length : RY.covers(1))) && (!DY || !RY.isWidget() && DY.isWidget()) && (DY = RY, AY = YY - OY), (gY > YY || YY == OY && (rY > 1 ? RY.length : RY.covers(-1))) && (!FY || !RY.isWidget() && FY.isWidget()) && (FY = RY, IY = YY - OY)
            }
          })), !DY && !FY) throw new Error("No tile at position " + YY);
        return DY && rY < 0 || !FY ? {
          tile: DY,
          offset: AY
        } : {
          tile: FY,
          offset: IY
        }
      }
    }
    class oD extends iD {
      constructor(YY, rY) {
        super(YY), this.wrapper = rY
      }
      isBlock() {
        return !0
      }
      covers(YY) {
        return !!this.children.length && (YY < 0 ? this.children[0].covers(-1) : this.lastChild.covers(1))
      }
      get domAttrs() {
        return this.wrapper.attributes
      }
      static of (YY, rY) {
        let DY = new oD(rY || document.createElement(YY.tagName), YY);
        return rY || (DY.flags |= 4), DY
      }
    }
    class WD extends iD {
      constructor(YY, rY) {
        super(YY), this.attrs = rY
      }
      isLine() {
        return !0
      }
      static start(YY, rY, DY) {
        let FY = new WD(rY || document.createElement("div"), YY);
        return rY && DY || (FY.flags |= 4), FY
      }
      get domAttrs() {
        return this.attrs
      }
      resolveInline(YY, rY, DY) {
        let FY = null,
          AY = -1,
          IY = null,
          RY = -1;
        ! function YY(OY, gY) {
          for (let aY = 0, vY = 0; aY < OY.children.length && vY <= gY; aY++) {
            let uY = OY.children[aY],
              sY = vY + uY.length;
            sY >= gY && (uY.isComposite() ? YY(uY, gY - vY) : (!IY || IY.isHidden && (rY > 0 || DY && ED(IY, uY))) && (sY > gY || 32 & uY.flags) ? (IY = uY, RY = gY - vY) : (vY < gY || 16 & uY.flags && !uY.isHidden) && (FY = uY, AY = gY - vY)), vY = sY
          }
        }(this, YY);
        let OY = (rY < 0 ? FY : IY) || FY || IY;
        return OY ? {
          tile: OY,
          offset: OY == FY ? AY : RY
        } : null
      }
      coordsIn(YY, rY) {
        let DY = this.resolveInline(YY, rY, !0);
        return DY ? DY.tile.coordsIn(Math.max(0, DY.offset), rY) : function(YY) {
          let rY = YY.dom.lastChild;
          if (!rY) return YY.dom.getBoundingClientRect();
          let DY = XY(rY);
          return DY[DY.length - 1] || null
        }(this)
      }
      domIn(YY, rY) {
        let DY = this.resolveInline(YY, rY);
        if (DY) {
          let {
            tile: YY,
            offset: FY
          } = DY;
          if (this.dom.contains(YY.dom)) return YY.isText() ? new gr(YY.dom, Math.min(YY.dom.nodeValue.length, FY)) : YY.domPosFor(FY, 16 & YY.flags ? 1 : 32 & YY.flags ? -1 : rY);
          let AY = DY.tile.parent,
            IY = !1;
          for (let rY of AY.children) {
            if (IY) return new gr(rY.dom, 0);
            rY == DY.tile && (IY = !0)
          }
        }
        return new gr(this.dom, 0)
      }
    }

    function ED(YY, rY) {
      let DY = YY.coordsIn(0, 1),
        FY = rY.coordsIn(0, 1);
      return DY && FY && FY.top < DY.bottom
    }
    class mD extends iD {
      constructor(YY, rY) {
        super(YY), this.mark = rY
      }
      get domAttrs() {
        return this.mark.attrs
      }
      static of (YY, rY) {
        let DY = new mD(rY || document.createElement(YY.tagName), YY);
        return rY || (DY.flags |= 4), DY
      }
    }
    class VD extends sD {
      constructor(YY, rY) {
        super(YY, rY.length), this.text = rY
      }
      sync(YY) {
        2 & this.flags || (super.sync(YY), this.dom.nodeValue != this.text && (YY && YY.node == this.dom && (YY.written = !0), this.dom.nodeValue = this.text))
      }
      isText() {
        return !0
      }
      toString() {
        return JSON.stringify(this.text)
      }
      coordsIn(YY, rY) {
        let DY = this.dom.nodeValue.length;
        YY > DY && (YY = DY);
        let FY = YY,
          AY = YY,
          IY = 0;
        0 == YY && rY < 0 || YY == DY && rY >= 0 ? TY.chrome || TY.gecko || (YY ? (FY--, IY = 1) : AY < DY && (AY++, IY = -1)) : rY < 0 ? FY-- : AY < DY && AY++;
        let RY = Fr(this.dom, FY, AY).getClientRects();
        if (!RY.length) return null;
        let OY = RY[(IY ? IY < 0 : rY >= 0) ? 0 : RY.length - 1];
        return TY.safari && !IY && 0 == OY.width && (OY = Array.prototype.find.call(RY, (YY => YY.width)) || OY), IY ? nY(OY, IY < 0) : OY || null
      }
      static of (YY, rY) {
        let DY = new VD(rY || document.createTextNode(YY), YY);
        return rY || (DY.flags |= 2), DY
      }
    }
    class SD extends sD {
      constructor(YY, rY, DY, FY) {
        super(YY, rY, FY), this.widget = DY
      }
      isWidget() {
        return !0
      }
      get isHidden() {
        return this.widget.isHidden
      }
      covers(YY) {
        return !(48 & this.flags) && (this.flags & (YY < 0 ? 64 : 128)) > 0
      }
      coordsIn(YY, rY) {
        return this.coordsInWidget(YY, rY, !1)
      }
      coordsInWidget(YY, rY, DY) {
        let FY = this.widget.coordsAt(this.dom, YY, rY);
        if (FY) return FY;
        if (DY) return nY(this.dom.getBoundingClientRect(), this.length ? 0 == YY : rY <= 0);
        {
          let rY = this.dom.getClientRects(),
            DY = null;
          if (!rY.length) return null;
          let FY = !!(16 & this.flags) || !(32 & this.flags) && YY > 0;
          for (let AY = FY ? rY.length - 1 : 0; DY = rY[AY], !(YY > 0 ? 0 == AY : AY == rY.length - 1 || DY.top < DY.bottom); AY += FY ? -1 : 1);
          return nY(DY, !FY)
        }
      }
      get overrideDOMText() {
        if (!this.length) return FY.K.empty;
        let {
          root: YY
        } = this;
        if (!YY) return FY.K.empty;
        let rY = this.posAtStart;
        return YY.view.state.doc.slice(rY, rY + this.length)
      }
      destroy() {
        super.destroy(), this.widget.destroy(this.dom)
      }
      static of (YY, rY, DY, FY, AY) {
        return AY || (AY = YY.toDOM(rY), YY.editable || (AY.contentEditable = "false")), new SD(AY, DY, YY, FY)
      }
    }
    class lD extends sD {
      constructor(YY) {
        let rY = document.createElement("img");
        rY.className = "cm-widgetBuffer", rY.setAttribute("aria-hidden", "true"), super(rY, 0, YY)
      }
      get isHidden() {
        return !0
      }
      get overrideDOMText() {
        return FY.K.empty
      }
      coordsIn(YY) {
        return this.dom.getBoundingClientRect()
      }
    }
    class TD {
      constructor(YY) {
        this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = YY
      }
      advance(YY, rY, DY) {
        let {
          tile: FY,
          index: AY,
          beforeBreak: IY,
          parents: RY
        } = this;
        for (; YY || rY > 0;)
          if (FY.isComposite())
            if (IY) {
              if (!YY) break;
              DY && DY.break(), YY--, IY = !1
            } else if (AY == FY.children.length) {
          if (!YY && !RY.length) break;
          DY && DY.leave(FY), IY = !!FY.breakAfter, ({
            tile: FY,
            index: AY
          } = RY.pop()), AY++
        } else {
          let OY = FY.children[AY],
            gY = OY.breakAfter;
          !(rY > 0 ? OY.length <= YY : OY.length < YY) || DY && !1 === DY.skip(OY, 0, OY.length) && OY.isComposite ? (RY.push({
            tile: FY,
            index: AY
          }), FY = OY, AY = 0, DY && OY.isComposite() && DY.enter(OY)) : (IY = !!gY, AY++, YY -= OY.length)
        } else if (AY == FY.length) IY = !!FY.breakAfter, ({
          tile: FY,
          index: AY
        } = RY.pop()), AY++;
        else {
          if (!YY) break;
          {
            let rY = Math.min(YY, FY.length - AY);
            DY && DY.skip(FY, AY, AY + rY), YY -= rY, AY += rY
          }
        }
        return this.tile = FY, this.index = AY, this.beforeBreak = IY, this
      }
      get root() {
        return this.parents.length ? this.parents[0].tile : this.tile
      }
    }
    class eD {
      constructor(YY, rY, DY, FY) {
        this.from = YY, this.to = rY, this.wrapper = DY, this.rank = FY
      }
    }
    class ND {
      constructor(YY, rY, DY) {
        this.cache = YY, this.root = rY, this.blockWrappers = DY, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0
      }
      addText(YY, rY, DY, FY) {
        var AY;
        this.flushBuffer();
        let IY = this.ensureMarks(rY, DY),
          RY = IY.lastChild;
        if (RY && RY.isText() && !(8 & RY.flags) && RY.length + YY.length < 512) {
          this.cache.reused.set(RY, 2), (IY.children[IY.children.length - 1] = new VD(RY.dom, RY.text + YY)).parent = IY
        } else IY.append(FY || VD.of(YY, null === (AY = this.cache.find(VD)) || void 0 === AY ? void 0 : AY.dom));
        this.pos += YY.length, this.afterWidget = null
      }
      addComposition(YY, rY) {
        let DY = this.curLine;
        DY.dom != rY.line.dom && (DY.setDOM(this.cache.reused.has(rY.line) ? CD(rY.line.dom) : rY.line.dom), this.cache.reused.set(rY.line, 2));
        let FY = DY;
        for (let RY = rY.marks.length - 1; RY >= 0; RY--) {
          let YY = rY.marks[RY],
            DY = FY.lastChild;
          if (DY instanceof mD && DY.mark.eq(YY.mark)) DY.dom != YY.dom && DY.setDOM(CD(YY.dom)), FY = DY;
          else {
            if (this.cache.reused.get(YY)) {
              let rY = sD.get(YY.dom);
              rY && rY.setDOM(CD(YY.dom))
            }
            let rY = mD.of(YY.mark, YY.dom);
            FY.append(rY), FY = rY
          }
          this.cache.reused.set(YY, 2)
        }
        let AY = sD.get(YY.text);
        AY && this.cache.reused.set(AY, 2);
        let IY = new VD(YY.text, YY.text.nodeValue);
        IY.flags |= 8, FY.append(IY)
      }
      addInlineWidget(YY, rY, DY) {
        let FY = this.afterWidget && 48 & YY.flags && (48 & this.afterWidget.flags) == (48 & YY.flags);
        FY || this.flushBuffer();
        let AY = this.ensureMarks(rY, DY);
        FY || 16 & YY.flags || AY.append(this.getBuffer(1)), AY.append(YY), this.pos += YY.length, this.afterWidget = YY
      }
      addMark(YY, rY, DY) {
        this.flushBuffer(), this.ensureMarks(rY, DY).append(YY), this.pos += YY.length, this.afterWidget = null
      }
      addBlockWidget(YY) {
        this.getBlockPos().append(YY), this.pos += YY.length, this.lastBlock = YY, this.endLine()
      }
      continueWidget(YY) {
        (this.afterWidget || this.lastBlock).length += YY, this.pos += YY
      }
      addLineStart(YY, rY) {
        var DY;
        YY || (YY = ZD);
        let FY = WD.start(YY, rY || (null === (DY = this.cache.find(WD)) || void 0 === DY ? void 0 : DY.dom), !!rY);
        this.getBlockPos().append(this.lastBlock = this.curLine = FY)
      }
      addLine(YY) {
        this.getBlockPos().append(YY), this.pos += YY.length, this.lastBlock = YY, this.endLine()
      }
      addBreak() {
        this.lastBlock.flags |= 1, this.endLine(), this.pos++
      }
      addLineStartIfNotCovered(YY) {
        this.blockPosCovered() || this.addLineStart(YY)
      }
      ensureLine(YY) {
        this.curLine || this.addLineStart(YY)
      }
      ensureMarks(YY, rY) {
        var DY;
        let FY = this.curLine;
        for (let AY = YY.length - 1; AY >= 0; AY--) {
          let IY, RY = YY[AY];
          if (rY > 0 && (IY = FY.lastChild) && IY instanceof mD && IY.mark.eq(RY)) FY = IY, rY--;
          else {
            let YY = mD.of(RY, null === (DY = this.cache.find(mD, (YY => YY.mark.eq(RY)))) || void 0 === DY ? void 0 : DY.dom);
            FY.append(YY), FY = YY, rY = 0
          }
        }
        return FY
      }
      endLine() {
        if (this.curLine) {
          this.flushBuffer();
          let YY = this.curLine.lastChild;
          YY && zD(this.curLine, !1) && ("BR" == YY.dom.nodeName || !YY.isWidget() || TY.ios && zD(this.curLine, !0)) || this.curLine.append(this.cache.findWidget(jD, 0, 32) || new SD(jD.toDOM(), 0, jD, 32)), this.curLine = this.afterWidget = null
        }
      }
      updateBlockWrappers() {
        this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
        for (let YY = this.wrappers.length - 1; YY >= 0; YY--) this.wrappers[YY].to < this.pos && this.wrappers.splice(YY, 1);
        for (let YY = this.blockWrappers; YY.value && YY.from <= this.pos; YY.next())
          if (YY.to >= this.pos) {
            let rY = new eD(YY.from, YY.to, YY.value, YY.rank),
              DY = this.wrappers.length;
            for (; DY > 0 && (this.wrappers[DY - 1].rank - rY.rank || this.wrappers[DY - 1].to - rY.to) < 0;) DY--;
            this.wrappers.splice(DY, 0, rY)
          } this.wrapperPos = this.pos
      }
      getBlockPos() {
        var YY;
        this.updateBlockWrappers();
        let rY = this.root;
        for (let DY of this.wrappers) {
          let FY = rY.lastChild;
          if (DY.from < this.pos && FY instanceof oD && FY.wrapper.eq(DY.wrapper)) rY = FY;
          else {
            let FY = oD.of(DY.wrapper, null === (YY = this.cache.find(oD, (YY => YY.wrapper.eq(DY.wrapper)))) || void 0 === YY ? void 0 : YY.dom);
            rY.append(FY), rY = FY
          }
        }
        return rY
      }
      blockPosCovered() {
        let YY = this.lastBlock;
        return null != YY && !YY.breakAfter && (!YY.isWidget() || (160 & YY.flags) > 0)
      }
      getBuffer(YY) {
        let rY = 2 | (YY < 0 ? 16 : 32),
          DY = this.cache.find(lD, void 0, 1);
        return DY && (DY.flags = rY), DY || new lD(rY)
      }
      flushBuffer() {
        !this.afterWidget || 32 & this.afterWidget.flags || (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null)
      }
    }
    class BD {
      constructor(YY) {
        this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = YY.iter()
      }
      skip(YY) {
        this.textOff + YY <= this.text.length ? this.textOff += YY : (this.skipCount += YY - (this.text.length - this.textOff), this.text = "", this.textOff = 0)
      }
      next(YY) {
        if (this.textOff == this.text.length) {
          let {
            value: rY,
            lineBreak: DY,
            done: FY
          } = this.cursor.next(this.skipCount);
          if (this.skipCount = 0, FY) throw new Error("Ran out of text content when drawing inline views");
          this.text = rY;
          let AY = this.textOff = Math.min(YY, rY.length);
          return DY ? null : rY.slice(0, AY)
        }
        let rY = Math.min(this.text.length, this.textOff + YY),
          DY = this.text.slice(this.textOff, rY);
        return this.textOff = rY, DY
      }
    }
    const cD = [SD, WD, VD, mD, lD, oD, QD];
    for (let zR = 0; zR < cD.length; zR++) cD[zR].bucket = zR;
    class KD {
      constructor(YY) {
        this.view = YY, this.buckets = cD.map((() => [])), this.index = cD.map((() => 0)), this.reused = new Map
      }
      add(YY) {
        let rY = YY.constructor.bucket,
          DY = this.buckets[rY];
        DY.length < 6 ? DY.push(YY) : DY[this.index[rY] = (this.index[rY] + 1) % 6] = YY
      }
      find(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          FY = YY.bucket,
          AY = this.buckets[FY],
          IY = this.index[FY];
        for (let RY = AY.length - 1; RY >= 0; RY--) {
          let YY = (RY + IY) % AY.length,
            OY = AY[YY];
          if ((!rY || rY(OY)) && !this.reused.has(OY)) return AY.splice(YY, 1), YY < IY && this.index[FY]--, this.reused.set(OY, DY), OY
        }
        return null
      }
      findWidget(YY, rY, DY) {
        let FY = this.buckets[0];
        if (FY.length)
          for (let AY = 0, IY = 0;; AY++) {
            if (AY == FY.length) {
              if (IY) return null;
              IY = 1, AY = 0
            }
            let RY = FY[AY];
            if (!this.reused.has(RY) && (0 == IY ? RY.widget.compare(YY) : RY.widget.constructor == YY.constructor && YY.updateDOM(RY.dom, this.view, RY.widget))) return FY.splice(AY, 1), AY < this.index[0] && this.index[0]--, RY.widget == YY && RY.length == rY && (497 & RY.flags) == DY ? (this.reused.set(RY, 1), RY) : (this.reused.set(RY, 2), new SD(RY.dom, rY, YY, -498 & RY.flags | DY))
          }
      }
      reuse(YY) {
        return this.reused.set(YY, 1), YY
      }
      maybeReuse(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        if (!this.reused.has(YY)) return this.reused.set(YY, rY), YY.dom
      }
      clear() {
        for (let YY = 0; YY < this.buckets.length; YY++) this.buckets[YY].length = this.index[YY] = 0
      }
    }
    class HD {
      constructor(YY, rY, DY, AY, IY) {
        this.view = YY, this.CA = AY, this.disallowBlockEffectsFor = IY, this.openWidget = !1, this.openMarks = 0, this.cache = new KD(YY), this.text = new BD(YY.state.doc), this.builder = new ND(this.cache, new QD(YY, YY.contentDOM), FY.B.iter(DY)), this.cache.reused.set(rY, 2), this.old = new TD(rY), this.reuseWalker = {
          skip: (YY, rY, DY) => {
            if (this.cache.add(YY), YY.isComposite()) return !1
          },
          enter: YY => this.cache.add(YY),
          leave: () => {},
          break: () => {}
        }
      }
      run(YY, rY) {
        let DY = rY && this.getCompositionContext(rY.text);
        for (let FY = 0, AY = 0, IY = 0;;) {
          let RY = IY < YY.length ? YY[IY++] : null,
            OY = RY ? RY.fromA : this.old.root.length;
          if (OY > FY) {
            let YY = OY - FY;
            this.preserve(YY, !IY, !RY), FY = OY, AY += YY
          }
          if (!RY) break;
          rY && RY.fromA <= rY.range.fromA && RY.toA >= rY.range.toA ? (this.forward(RY.fromA, rY.range.fromA, rY.range.fromA < rY.range.toA ? 1 : -1), this.emit(AY, rY.range.fromB), this.cache.clear(), this.builder.addComposition(rY, DY), this.text.skip(rY.range.toB - rY.range.fromB), this.forward(rY.range.fromA, RY.toA), this.emit(rY.range.toB, RY.toB)) : (this.forward(RY.fromA, RY.toA), this.emit(AY, RY.toB)), AY = RY.toB, FY = RY.toA
        }
        return this.builder.curLine && this.builder.endLine(), this.builder.root
      }
      preserve(YY, rY, DY) {
        let FY = function(YY) {
            let rY = [];
            for (let DY = YY.parents.length; DY > 1; DY--) {
              let FY = DY == YY.parents.length ? YY.tile : YY.parents[DY].tile;
              FY instanceof mD && rY.push(FY.mark)
            }
            return rY
          }(this.old),
          AY = this.openMarks;
        this.old.advance(YY, DY ? 1 : -1, {
          skip: (YY, rY, DY) => {
            if (YY.isWidget())
              if (this.openWidget) this.builder.continueWidget(DY - rY);
              else {
                let IY = DY > 0 || rY < YY.length ? SD.of(YY.widget, this.view, DY - rY, 496 & YY.flags, this.cache.maybeReuse(YY)) : this.cache.reuse(YY);
                256 & IY.flags ? (IY.flags &= -2, this.builder.addBlockWidget(IY)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(IY, FY, AY), AY = FY.length)
              }
            else if (YY.isText()) this.builder.ensureLine(null), rY || DY != YY.length || this.cache.reused.has(YY) ? (this.cache.add(YY), this.builder.addText(YY.text.slice(rY, DY), FY, AY)) : this.builder.addText(YY.text, FY, AY, this.cache.reuse(YY)), AY = FY.length;
            else if (YY.isLine()) YY.flags &= -2, this.cache.reused.set(YY, 1), this.builder.addLine(YY);
            else if (YY instanceof lD) this.cache.add(YY);
            else {
              if (!(YY instanceof mD)) return !1;
              this.builder.ensureLine(null), this.builder.addMark(YY, FY, AY), this.cache.reused.set(YY, 1), AY = FY.length
            }
            this.openWidget = !1
          },
          enter: YY => {
            YY.isLine() ? this.builder.addLineStart(YY.attrs, this.cache.maybeReuse(YY)) : (this.cache.add(YY), YY instanceof mD && FY.unshift(YY.mark)), this.openWidget = !1
          },
          leave: YY => {
            YY.isLine() ? FY.length && (FY.length = AY = 0) : YY instanceof mD && (FY.shift(), AY = Math.min(AY, FY.length))
          },
          break: () => {
            this.builder.addBreak(), this.openWidget = !1
          }
        }), this.text.skip(YY)
      }
      emit(YY, rY) {
        let DY = null,
          AY = this.builder,
          IY = 0,
          RY = FY.B.spans(this.CA, YY, rY, {
            point: (YY, rY, FY, RY, OY, gY) => {
              if (FY instanceof jY) {
                if (this.disallowBlockEffectsFor[gY]) {
                  if (FY.block) throw new RangeError("Block decorations may not be specified via plugins");
                  if (rY > this.view.state.doc.lineAt(YY).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins")
                }
                if (IY = RY.length, OY > RY.length) AY.continueWidget(rY - YY);
                else {
                  let IY = FY.widget || (FY.block ? fD.block : fD.inline),
                    gY = function(YY) {
                      let rY = YY.isReplace ? (YY.startSide < 0 ? 64 : 0) | (YY.endSide > 0 ? 128 : 0) : YY.startSide > 0 ? 32 : 16;
                      YY.block && (rY |= 256);
                      return rY
                    }(FY),
                    aY = this.cache.findWidget(IY, rY - YY, gY) || SD.of(IY, this.view, rY - YY, gY);
                  FY.block ? (FY.startSide > 0 && AY.addLineStartIfNotCovered(DY), AY.addBlockWidget(aY)) : (AY.ensureLine(DY), AY.addInlineWidget(aY, RY, OY))
                }
                DY = null
              } else DY = function(YY, rY) {
                let DY = rY.spec.attributes,
                  FY = rY.spec.class;
                if (!DY && !FY) return YY;
                YY || (YY = {
                  class: "cm-line"
                });
                DY && eY(DY, YY);
                FY && (YY.class += " " + FY);
                return YY
              }(DY, FY);
              rY > YY && this.text.skip(rY - YY)
            },
            span: (YY, rY, FY, IY) => {
              for (let RY = YY; RY < rY;) {
                let OY = this.text.next(Math.min(512, rY - RY));
                null == OY ? (AY.addLineStartIfNotCovered(DY), AY.addBreak(), RY++) : (AY.ensureLine(DY), AY.addText(OY, FY, RY == YY ? IY : FY.length), RY += OY.length), DY = null
              }
            }
          });
        AY.addLineStartIfNotCovered(DY), this.openWidget = RY > IY, this.openMarks = RY
      }
      forward(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        rY - YY <= 10 ? this.old.advance(rY - YY, DY, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(rY - YY - 10, -1), this.old.advance(5, DY, this.reuseWalker))
      }
      getCompositionContext(YY) {
        let rY = [],
          DY = null;
        for (let FY = YY.parentNode;; FY = FY.parentNode) {
          let YY = sD.get(FY);
          if (FY == this.view.contentDOM) break;
          YY instanceof mD ? rY.push(YY) : (null === YY || void 0 === YY ? void 0 : YY.isLine()) ? DY = YY : YY instanceof oD || ("DIV" != FY.nodeName || DY || FY == this.view.contentDOM ? DY || rY.push(mD.of(new CY({
            tagName: FY.nodeName.toLowerCase(),
            attributes: KY(FY)
          }), FY)) : DY = new WD(FY, ZD))
        }
        return {
          line: DY,
          marks: rY
        }
      }
    }

    function zD(YY, rY) {
      let DY = YY => {
        for (let FY of YY.children)
          if ((rY ? FY.isText() : FY.length) || DY(FY)) return !0;
        return !1
      };
      return DY(YY)
    }
    const ZD = {
      class: "cm-line"
    };

    function CD(YY) {
      let rY = sD.get(YY);
      return rY && rY.setDOM(YY.cloneNode()), YY
    }
    class fD extends HY {
      constructor(YY) {
        super(), this.tag = YY
      }
      eq(YY) {
        return YY.tag == this.tag
      }
      toDOM() {
        return document.createElement(this.tag)
      }
      updateDOM(YY) {
        return YY.nodeName.toLowerCase() == this.tag
      }
      get isHidden() {
        return !0
      }
    }
    fD.inline = new fD("span"), fD.block = new fD("div");
    const jD = new class extends HY {
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
    class hD {
      constructor(YY) {
        this.view = YY, this.CA = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = ZY.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new QD(YY, YY.contentDOM), this.updateInner([new aD(0, 0, 0, YY.state.doc.length)], null)
      }
      update(YY) {
        var rY;
        let DY = YY.changedRanges;
        this.minWidth > 0 && DY.length && (DY.every((YY => {
          let {
            fromA: rY,
            toA: DY
          } = YY;
          return DY < this.minWidthFrom || rY > this.minWidthTo
        })) ? (this.minWidthFrom = YY.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = YY.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(YY);
        let AY = -1;
        this.view.inputState.composing >= 0 && !this.view.observer.editContext && ((null === (rY = this.domChanged) || void 0 === rY ? void 0 : rY.newSel) ? AY = this.domChanged.newSel.head : function(YY, rY) {
          let DY = !1;
          rY && YY.iterChangedRanges(((YY, FY) => {
            YY < rY.to && FY > rY.from && (DY = !0)
          }));
          return DY
        }(YY.changes, this.hasComposition) || YY.selectionSet || (AY = YY.state.selection.main.head));
        let IY = AY > -1 ? function(YY, rY, DY) {
          let FY = JD(YY, DY);
          if (!FY) return null;
          let {
            node: AY,
            from: IY,
            to: RY
          } = FY, OY = AY.nodeValue;
          if (/[\n\r]/.test(OY)) return null;
          if (YY.state.doc.sliceString(FY.from, FY.to) != OY) return null;
          let gY = rY.invertedDesc;
          return {
            range: new aD(gY.mapPos(IY), gY.mapPos(RY), IY, RY),
            text: AY
          }
        }(this.view, YY.changes, AY) : null;
        if (this.domChanged = null, this.hasComposition) {
          let {
            from: rY,
            to: FY
          } = this.hasComposition;
          DY = new aD(rY, FY, YY.changes.mapPos(rY, -1), YY.changes.mapPos(FY, 1)).addToSet(DY.slice())
        }
        this.hasComposition = IY ? {
          from: IY.range.fromB,
          to: IY.range.toB
        } : null, (TY.ie || TY.chrome) && !IY && YY && YY.state.doc.lines != YY.startState.doc.lines && (this.forceSelection = !0);
        let RY = this.CA,
          OY = this.blockWrappers;
        this.updateDeco();
        let gY = function(YY, rY, DY) {
          let AY = new MD;
          return FY.B.compare(YY, rY, DY, AY), AY.changes
        }(RY, this.CA, YY.changes);
        gY.length && (DY = aD.extendWithRanges(DY, gY));
        let aY = function(YY, rY, DY) {
          let AY = new wD;
          return FY.B.compare(YY, rY, DY, AY), AY.changes
        }(OY, this.blockWrappers, YY.changes);
        return aY.length && (DY = aD.extendWithRanges(DY, aY)), IY && !DY.some((YY => YY.fromA <= IY.range.fromA && YY.toA >= IY.range.toA)) && (DY = IY.range.addToSet(DY.slice())), !(2 & this.tile.flags && 0 == DY.length) && (this.updateInner(DY, IY), YY.transactions.length && (this.lastUpdate = Date.now()), !0)
      }
      updateInner(YY, rY) {
        this.view.viewState.mustMeasureContent = !0;
        let {
          observer: DY
        } = this.view;
        DY.ignore((() => {
          if (rY || YY.length) {
            let DY = this.tile,
              FY = new HD(this.view, DY, this.blockWrappers, this.CA, this.dynamicDecorationMap);
            rY && sD.get(rY.text) && FY.cache.reused.set(sD.get(rY.text), 2), this.tile = FY.run(YY, rY), dD(DY, FY.cache.reused)
          }
          this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
          let FY = TY.chrome || TY.ios ? {
            node: DY.selectionRange.focusNode,
            written: !1
          } : void 0;
          this.tile.sync(FY), !FY || !FY.written && DY.selectionRange.focusNode == FY.node && this.tile.dom.contains(FY.node) || (this.forceSelection = !0), this.tile.dom.style.height = ""
        }));
        let FY = [];
        if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
          for (let AY of this.tile.children) AY.isWidget() && AY.widget instanceof bD && FY.push(AY.dom);
        DY.updateGaps(FY)
      }
      updateEditContextFormatting(YY) {
        this.editContextFormatting = this.editContextFormatting.map(YY.changes);
        for (let rY of YY.transactions)
          for (let YY of rY.effects) YY.is(pr) && (this.editContextFormatting = YY.value)
      }
      updateSelection() {
        let YY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this.view.observer.selectionRange.focusNode || this.view.observer.readSelectionRange();
        let {
          dom: rY
        } = this.tile, DY = this.view.root.activeElement, FY = DY == rY, AY = !FY && !(this.view.state.facet(Gr) || rY.tabIndex > -1) && bY(rY, this.view.observer.selectionRange) && !(DY && rY.contains(DY));
        if (!(FY || YY || AY)) return;
        let IY = this.forceSelection;
        this.forceSelection = !1;
        let RY, OY, gY = this.view.state.selection.main;
        if (gY.empty ? OY = RY = this.inlineDOMNearPos(gY.anchor, gY.assoc || 1) : (OY = this.inlineDOMNearPos(gY.head, gY.head == gY.from ? 1 : -1), RY = this.inlineDOMNearPos(gY.anchor, gY.anchor == gY.from ? 1 : -1)), TY.gecko && gY.empty && !this.hasComposition && (1 == (aY = RY).node.nodeType && aY.node.firstChild && (0 == aY.offset || "false" == aY.node.childNodes[aY.offset - 1].contentEditable) && (aY.offset == aY.node.childNodes.length || "false" == aY.node.childNodes[aY.offset].contentEditable))) {
          let YY = document.createTextNode("");
          this.view.observer.ignore((() => RY.node.insertBefore(YY, RY.node.childNodes[RY.offset] || null))), RY = OY = new gr(YY, 0), IY = !0
        }
        var aY;
        let vY = this.view.observer.selectionRange;
        !IY && vY.focusNode && (qY(RY.node, RY.offset, vY.anchorNode, vY.anchorOffset) && qY(OY.node, OY.offset, vY.focusNode, vY.focusOffset) || this.suppressWidgetCursorChange(vY, gY)) || (this.view.observer.ignore((() => {
          TY.android && TY.chrome && rY.contains(vY.focusNode) && function(YY, rY) {
            for (let DY = YY; DY && DY != rY; DY = DY.assignedSlot || DY.parentNode)
              if (1 == DY.nodeType && "false" == DY.contentEditable) return !0;
            return !1
          }(vY.focusNode, rY) && (rY.blur(), rY.focus({
            preventScroll: !0
          }));
          let YY = MY(this.view.root);
          if (YY)
            if (gY.empty) {
              if (TY.gecko) {
                let YY = (FY = RY.node, IY = RY.offset, 1 != FY.nodeType ? 0 : (IY && "false" == FY.childNodes[IY - 1].contentEditable ? 1 : 0) | (IY < FY.childNodes.length && "false" == FY.childNodes[IY].contentEditable ? 2 : 0));
                if (YY && 3 != YY) {
                  let rY = (1 == YY ? Rr : Or)(RY.node, RY.offset);
                  rY && (RY = new gr(rY.node, rY.offset))
                }
              }
              YY.collapse(RY.node, RY.offset), null != gY.bidiLevel && void 0 !== YY.caretBidiLevel && (YY.caretBidiLevel = gY.bidiLevel)
            } else if (YY.extend) {
            YY.collapse(RY.node, RY.offset);
            try {
              YY.extend(OY.node, OY.offset)
            } catch (aY) {}
          } else {
            let rY = document.createRange();
            gY.anchor > gY.head && ([RY, OY] = [OY, RY]), rY.setEnd(OY.node, OY.offset), rY.setStart(RY.node, RY.offset), YY.removeAllRanges(), YY.addRange(rY)
          } else;
          var FY, IY;
          AY && this.view.root.activeElement == rY && (rY.blur(), DY && DY.focus())
        })), this.view.observer.setSelectionRange(RY, OY)), this.impreciseAnchor = RY.precise ? null : new gr(vY.anchorNode, vY.anchorOffset), this.impreciseHead = OY.precise ? null : new gr(vY.focusNode, vY.focusOffset)
      }
      suppressWidgetCursorChange(YY, rY) {
        return this.hasComposition && rY.empty && qY(YY.focusNode, YY.focusOffset, YY.anchorNode, YY.anchorOffset) && this.posFromDOM(YY.focusNode, YY.focusOffset) == rY.head
      }
      enforceCursorAssoc() {
        if (this.hasComposition) return;
        let {
          view: YY
        } = this, rY = YY.state.selection.main, DY = MY(YY.root), {
          anchorNode: FY,
          anchorOffset: AY
        } = YY.observer.selectionRange;
        if (!DY || !rY.empty || !rY.assoc || !DY.modify) return;
        let IY = this.lineAt(rY.head, rY.assoc);
        if (!IY) return;
        let RY = IY.posAtStart;
        if (rY.head == RY || rY.head == RY + IY.length) return;
        let OY = this.coordsAt(rY.head, -1),
          gY = this.coordsAt(rY.head, 1);
        if (!OY || !gY || OY.bottom > gY.top) return;
        let aY = this.domAtPos(rY.head + rY.assoc, rY.assoc);
        DY.collapse(aY.node, aY.offset), DY.modify("move", rY.assoc < 0 ? "forward" : "backward", "lineboundary"), YY.observer.readSelectionRange();
        let vY = YY.observer.selectionRange;
        YY.docView.posFromDOM(vY.anchorNode, vY.anchorOffset) != rY.from && DY.collapse(FY, AY)
      }
      posFromDOM(YY, rY) {
        let DY = this.tile.nearest(YY);
        if (!DY) return 2 & this.tile.dom.compareDocumentPosition(YY) ? 0 : this.view.state.doc.length;
        let FY = DY.posAtStart;
        if (!DY.isComposite()) return DY.isText() ? YY == DY.dom ? FY + rY : FY + (rY ? DY.length : 0) : FY;
        {
          let AY;
          if (YY == DY.dom) AY = DY.dom.childNodes[rY];
          else {
            let FY = 0 == xY(YY) ? 0 : 0 == rY ? -1 : 1;
            for (;;) {
              let rY = YY.parentNode;
              if (rY == DY.dom) break;
              0 == FY && rY.firstChild != rY.lastChild && (FY = YY == rY.firstChild ? -1 : 1), YY = rY
            }
            AY = FY < 0 ? YY : YY.nextSibling
          }
          if (AY == DY.dom.firstChild) return FY;
          for (; AY && !sD.get(AY);) AY = AY.nextSibling;
          if (!AY) return FY + DY.length;
          for (let YY = 0, rY = FY;; YY++) {
            let FY = DY.children[YY];
            if (FY.dom == AY) return rY;
            rY += FY.length + FY.breakAfter
          }
        }
      }
      domAtPos(YY, rY) {
        let {
          tile: DY,
          offset: FY
        } = this.tile.resolveBlock(YY, rY);
        return DY.isWidget() ? DY.domPosFor(YY, rY) : DY.domIn(FY, rY)
      }
      inlineDOMNearPos(YY, rY) {
        let DY, FY, AY = -1,
          IY = !1,
          RY = -1,
          OY = !1;
        return this.tile.blockTiles(((rY, gY) => {
          if (rY.isWidget()) {
            if (32 & rY.flags && gY >= YY) return !0;
            16 & rY.flags && (IY = !0)
          } else {
            let aY = gY + rY.length;
            if (gY <= YY && (DY = rY, AY = YY - gY, IY = aY < YY), aY >= YY && !FY && (FY = rY, RY = YY - gY, OY = gY > YY), gY > YY && FY) return !0
          }
        })), DY || FY ? (IY && FY ? DY = null : OY && DY && (FY = null), DY && rY < 0 || !FY ? DY.domIn(AY, rY) : FY.domIn(RY, rY)) : this.domAtPos(YY, rY)
      }
      coordsAt(YY, rY) {
        let {
          tile: DY,
          offset: FY
        } = this.tile.resolveBlock(YY, rY);
        return DY.isWidget() ? DY.widget instanceof bD ? null : DY.coordsInWidget(FY, rY, !0) : DY.coordsIn(FY, rY)
      }
      lineAt(YY, rY) {
        let {
          tile: DY
        } = this.tile.resolveBlock(YY, rY);
        return DY.isLine() ? DY : null
      }
      coordsForChar(YY) {
        let {
          tile: rY,
          offset: DY
        } = this.tile.resolveBlock(YY, 1);
        if (!rY.isLine()) return null;
        return function YY(rY, DY) {
          if (rY.isComposite())
            for (let FY of rY.children) {
              if (FY.length >= DY) {
                let rY = YY(FY, DY);
                if (rY) return rY
              }
              if ((DY -= FY.length) < 0) break
            } else if (rY.isText() && DY < rY.length) {
              let YY = (0, FY.$)(rY.text, DY);
              if (YY == DY) return null;
              let AY = Fr(rY.dom, DY, YY).getClientRects();
              for (let rY = 0; rY < AY.length; rY++) {
                let YY = AY[rY];
                if (rY == AY.length - 1 || YY.top < YY.bottom && YY.left < YY.right) return YY
              }
            } return null
        }(rY, DY)
      }
      measureVisibleLineHeights(YY) {
        let rY = [],
          {
            from: DY,
            to: FY
          } = YY,
          AY = this.view.contentDOM.clientWidth,
          IY = AY > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
          RY = -1,
          OY = this.view.textDirection == ar.LTR,
          gY = 0,
          aY = (YY, vY, uY) => {
            for (let sY = 0; sY < YY.children.length && !(vY > FY); sY++) {
              let FY = YY.children[sY],
                iY = vY + FY.length,
                yY = FY.dom.getBoundingClientRect(),
                {
                  height: QY
                } = yY;
              if (uY && !sY && (gY += yY.top - uY.top), FY instanceof oD) iY > DY && aY(FY, vY, yY);
              else if (vY >= DY && (gY > 0 && rY.push(-gY), rY.push(QY + gY), gY = 0, IY)) {
                let YY = FY.dom.lastChild,
                  rY = YY ? XY(YY) : [];
                if (rY.length) {
                  let YY = rY[rY.length - 1],
                    DY = OY ? YY.right - yY.left : yY.right - YY.left;
                  DY > RY && (RY = DY, this.minWidth = AY, this.minWidthFrom = vY, this.minWidthTo = iY)
                }
              }
              uY && sY == YY.children.length - 1 && (gY += uY.bottom - yY.bottom), vY = iY + FY.breakAfter
            }
          };
        return aY(this.tile, 0, null), rY
      }
      textDirectionAt(YY) {
        let {
          tile: rY
        } = this.tile.resolveBlock(YY, 1);
        return "rtl" == getComputedStyle(rY.dom).direction ? ar.RTL : ar.LTR
      }
      measureTextSize() {
        let YY = this.tile.blockTiles((YY => {
          if (YY.isLine() && YY.children.length && YY.length <= 20) {
            let rY, DY = 0;
            for (let FY of YY.children) {
              if (!FY.isText() || /[^ -~]/.test(FY.text)) return;
              let YY = XY(FY.dom);
              if (1 != YY.length) return;
              DY += YY[0].width, rY = YY[0].height
            }
            if (DY) return {
              lineHeight: YY.dom.getBoundingClientRect().height,
              charWidth: DY / YY.length,
              textHeight: rY
            }
          }
        }));
        if (YY) return YY;
        let rY, DY, FY, AY = document.createElement("div");
        return AY.className = "cm-line", AY.style.width = "99999px", AY.style.position = "absolute", AY.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore((() => {
          this.tile.dom.appendChild(AY);
          let YY = XY(AY.firstChild)[0];
          rY = AY.getBoundingClientRect().height, DY = YY && YY.width ? YY.width / 27 : 7, FY = YY && YY.height ? YY.height : rY, AY.remove()
        })), {
          lineHeight: rY,
          charWidth: DY,
          textHeight: FY
        }
      }
      computeBlockGapDeco() {
        let YY = [],
          rY = this.view.viewState;
        for (let DY = 0, FY = 0;; FY++) {
          let AY = FY == rY.viewports.length ? null : rY.viewports[FY],
            IY = AY ? AY.from - 1 : this.view.state.doc.length;
          if (IY > DY) {
            let FY = (rY.lineBlockAt(IY).bottom - rY.lineBlockAt(DY).top) / this.view.scaleY;
            YY.push(ZY.replace({
              widget: new bD(FY),
              block: !0,
              inclusive: !0,
              isBlockGap: !0
            }).range(DY, IY))
          }
          if (!AY) break;
          DY = AY.to + 1
        }
        return ZY.set(YY)
      }
      updateDeco() {
        let YY = 1,
          rY = this.view.state.facet(YD).map((rY => (this.dynamicDecorationMap[YY++] = "function" == typeof rY) ? rY(this.view) : rY)),
          DY = !1,
          AY = this.view.state.facet(DD).map(((YY, rY) => {
            let FY = "function" == typeof YY;
            return FY && (DY = !0), FY ? YY(this.view) : YY
          }));
        for (AY.length && (this.dynamicDecorationMap[YY++] = DY, rY.push(FY.B.join(AY))), this.CA = [this.editContextFormatting, ...rY, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; YY < this.CA.length;) this.dynamicDecorationMap[YY++] = !1;
        this.blockWrappers = this.view.state.facet(rD).map((YY => "function" == typeof YY ? YY(this.view) : YY))
      }
      scrollIntoView(YY) {
        var rY;
        if (YY.isSnapshot) {
          let rY = this.view.viewState.lineBlockAt(YY.range.head);
          return this.view.scrollDOM.scrollTop = rY.top - YY.yMargin, void(this.view.scrollDOM.scrollLeft = YY.xMargin)
        }
        for (let vY of this.view.state.facet(br)) try {
          if (vY(this.view, YY.range, YY)) return !0
        } catch (aY) {
          kr(this.view.state, aY, "scroll handler")
        }
        let DY, {
            range: FY
          } = YY,
          AY = this.coordsAt(FY.head, null !== (rY = FY.assoc) && void 0 !== rY ? rY : FY.empty ? 0 : FY.head > FY.anchor ? -1 : 1);
        if (!AY) return;
        !FY.empty && (DY = this.coordsAt(FY.anchor, FY.anchor > FY.head ? -1 : 1)) && (AY = {
          left: Math.min(AY.left, DY.left),
          top: Math.min(AY.top, DY.top),
          right: Math.max(AY.right, DY.right),
          bottom: Math.max(AY.bottom, DY.bottom)
        });
        let IY = OD(this.view),
          RY = {
            left: AY.left - IY.left,
            top: AY.top - IY.top,
            right: AY.right + IY.right,
            bottom: AY.bottom + IY.bottom
          },
          {
            offsetWidth: OY,
            offsetHeight: gY
          } = this.view.scrollDOM;
        if (function(YY, rY, DY, FY, AY, IY, RY, OY) {
            let gY = YY.ownerDocument,
              aY = gY.defaultView || window;
            for (let vY = YY, uY = !1; vY && !uY;)
              if (1 == vY.nodeType) {
                let YY, sY = vY == gY.body,
                  iY = 1,
                  yY = 1;
                if (sY) YY = PY(aY);
                else {
                  if (/^(fixed|sticky)$/.test(getComputedStyle(vY).position) && (uY = !0), vY.scrollHeight <= vY.clientHeight && vY.scrollWidth <= vY.clientWidth) {
                    vY = vY.assignedSlot || vY.parentNode;
                    continue
                  }
                  let rY = vY.getBoundingClientRect();
                  ({
                    scaleX: iY,
                    scaleY: yY
                  } = UY(vY, rY)), YY = {
                    left: rY.left,
                    right: rY.left + vY.clientWidth * iY,
                    top: rY.top,
                    bottom: rY.top + vY.clientHeight * yY
                  }
                }
                let QY = 0,
                  oY = 0;
                if ("nearest" == AY) rY.top < YY.top + RY ? (oY = rY.top - (YY.top + RY), DY > 0 && rY.bottom > YY.bottom + oY && (oY = rY.bottom - YY.bottom + RY)) : rY.bottom > YY.bottom - RY && (oY = rY.bottom - YY.bottom + RY, DY < 0 && rY.top - oY < YY.top && (oY = rY.top - (YY.top + RY)));
                else {
                  let FY = rY.bottom - rY.top,
                    IY = YY.bottom - YY.top;
                  oY = ("center" == AY && FY <= IY ? rY.top + FY / 2 - IY / 2 : "start" == AY || "center" == AY && DY < 0 ? rY.top - RY : rY.bottom - IY + RY) - YY.top
                }
                if ("nearest" == FY ? rY.left < YY.left + IY ? (QY = rY.left - (YY.left + IY), DY > 0 && rY.right > YY.right + QY && (QY = rY.right - YY.right + IY)) : rY.right > YY.right - IY && (QY = rY.right - YY.right + IY, DY < 0 && rY.left < YY.left + QY && (QY = rY.left - (YY.left + IY))) : QY = ("center" == FY ? rY.left + (rY.right - rY.left) / 2 - (YY.right - YY.left) / 2 : "start" == FY == OY ? rY.left - IY : rY.right - (YY.right - YY.left) + IY) - YY.left, QY || oY)
                  if (sY) aY.scrollBy(QY, oY);
                  else {
                    let YY = 0,
                      DY = 0;
                    if (oY) {
                      let YY = vY.scrollTop;
                      vY.scrollTop += oY / yY, DY = (vY.scrollTop - YY) * yY
                    }
                    if (QY) {
                      let rY = vY.scrollLeft;
                      vY.scrollLeft += QY / iY, YY = (vY.scrollLeft - rY) * iY
                    }
                    rY = {
                      left: rY.left - YY,
                      top: rY.top - DY,
                      right: rY.right - YY,
                      bottom: rY.bottom - DY
                    }, YY && Math.abs(YY - QY) < 1 && (FY = "nearest"), DY && Math.abs(DY - oY) < 1 && (AY = "nearest")
                  } if (sY) break;
                (rY.top < YY.top || rY.bottom > YY.bottom || rY.left < YY.left || rY.right > YY.right) && (rY = {
                  left: Math.max(rY.left, YY.left),
                  right: Math.min(rY.right, YY.right),
                  top: Math.max(rY.top, YY.top),
                  bottom: Math.min(rY.bottom, YY.bottom)
                }), vY = vY.assignedSlot || vY.parentNode
              } else {
                if (11 != vY.nodeType) break;
                vY = vY.host
              }
          }(this.view.scrollDOM, RY, FY.head < FY.anchor ? -1 : 1, YY.x, YY.y, Math.max(Math.min(YY.xMargin, OY), -OY), Math.max(Math.min(YY.yMargin, gY), -gY), this.view.textDirection == ar.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (AY.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || AY.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
          let YY = this.view.docView.lineAt(FY.head, 1);
          YY && YY.dom.scrollIntoView({
            block: "nearest"
          })
        }
      }
      lineHasWidget(YY) {
        let rY = YY => YY.isWidget() || YY.children.some(rY);
        return rY(this.tile.resolveBlock(YY, 1).tile)
      }
      destroy() {
        dD(this.tile)
      }
    }

    function dD(YY, rY) {
      let DY = null === rY || void 0 === rY ? void 0 : rY.get(YY);
      if (1 != DY) {
        null == DY && YY.destroy();
        for (let DY of YY.children) dD(DY, rY)
      }
    }

    function JD(YY, rY) {
      let DY = YY.observer.selectionRange;
      if (!DY.focusNode) return null;
      let FY = Rr(DY.focusNode, DY.focusOffset),
        AY = Or(DY.focusNode, DY.focusOffset),
        IY = FY || AY;
      if (AY && FY && AY.node != FY.node) {
        let rY = sD.get(AY.node);
        if (!rY || rY.isText() && rY.text != AY.node.nodeValue) IY = AY;
        else if (YY.docView.lastCompositionAfterCursor) {
          let YY = sD.get(FY.node);
          !YY || YY.isText() && YY.text != FY.node.nodeValue || (IY = AY)
        }
      }
      if (YY.docView.lastCompositionAfterCursor = IY != FY, !IY) return null;
      let RY = rY - IY.offset;
      return {
        from: RY,
        to: RY + IY.node.nodeValue.length,
        node: IY.node
      }
    }
    let MD = class {
      constructor() {
        this.changes = []
      }
      compareRange(YY, rY) {
        dY(YY, rY, this.changes)
      }
      comparePoint(YY, rY) {
        dY(YY, rY, this.changes)
      }
      boundChange(YY) {
        dY(YY, YY, this.changes)
      }
    };
    class wD {
      constructor() {
        this.changes = []
      }
      compareRange(YY, rY) {
        dY(YY, rY, this.changes)
      }
      comparePoint() {}
      boundChange(YY) {
        dY(YY, YY, this.changes)
      }
    }
    class bD extends HY {
      constructor(YY) {
        super(), this.height = YY
      }
      toDOM() {
        let YY = document.createElement("div");
        return YY.className = "cm-gap", this.updateDOM(YY), YY
      }
      eq(YY) {
        return YY.height == this.height
      }
      updateDOM(YY) {
        return YY.style.height = this.height + "px", !0
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

    function XD(YY, rY, DY) {
      let FY = YY.lineBlockAt(rY);
      if (Array.isArray(FY.type)) {
        let YY;
        for (let AY of FY.type) {
          if (AY.from > rY) break;
          if (!(AY.to < rY)) {
            if (AY.from < rY && AY.to > rY) return AY;
            YY && (AY.type != zY.Text || YY.type == AY.type && !(DY < 0 ? AY.from < rY : AY.to > rY)) || (YY = AY)
          }
        }
        return YY || FY
      }
      return FY
    }

    function qD(YY, rY, DY, FY) {
      let AY = YY.state.doc.lineAt(rY.head),
        IY = YY.bidiSpans(AY),
        RY = YY.textDirectionAt(AY.from);
      for (let OY = rY, gY = null;;) {
        let rY = cr(AY, IY, RY, OY, DY),
          aY = Br;
        if (!rY) {
          if (AY.number == (DY ? YY.state.doc.lines : 1)) return OY;
          aY = "\n", AY = YY.state.doc.line(AY.number + (DY ? 1 : -1)), IY = YY.bidiSpans(AY), rY = YY.visualLineSide(AY, !DY)
        }
        if (gY) {
          if (!gY(aY)) return OY
        } else {
          if (!FY) return rY;
          gY = FY(aY)
        }
        OY = rY
      }
    }

    function pD(YY, rY, DY) {
      for (;;) {
        let FY = 0;
        for (let AY of YY) AY.between(rY - 1, rY + 1, ((YY, AY, IY) => {
          if (rY > YY && rY < AY) {
            let IY = FY || DY || (rY - YY < AY - rY ? -1 : 1);
            rY = IY < 0 ? YY : AY, FY = IY
          }
        }));
        if (!FY) return rY
      }
    }

    function kD(YY, rY) {
      let DY = null;
      for (let AY = 0; AY < rY.ws.length; AY++) {
        let IY = rY.ws[AY],
          RY = null;
        if (IY.empty) {
          let rY = pD(YY, IY.from, 0);
          rY != IY.from && (RY = FY.n.cursor(rY, -1))
        } else {
          let rY = pD(YY, IY.from, -1),
            DY = pD(YY, IY.to, 1);
          rY == IY.from && DY == IY.to || (RY = FY.n.range(IY.from == IY.anchor ? rY : DY, IY.from == IY.head ? rY : DY))
        }
        RY && (DY || (DY = rY.ws.slice()), DY[AY] = RY)
      }
      return DY ? FY.n.create(DY, rY.mainIndex) : rY
    }

    function GD(YY, rY, DY) {
      let AY = pD(YY.state.facet(FD).map((rY => rY(YY))), DY.from, rY.head > DY.from ? -1 : 1);
      return AY == DY.from ? DY : FY.n.cursor(AY, AY < DY.from ? 1 : -1)
    }
    class xD {
      constructor(YY, rY) {
        this.pos = YY, this.assoc = rY
      }
    }

    function nD(YY, rY, DY, AY) {
      let IY, RY = YY.contentDOM.getBoundingClientRect(),
        OY = RY.top + YY.viewState.paddingTop,
        {
          x: gY,
          y: aY
        } = rY,
        vY = aY - OY;
      for (;;) {
        if (vY < 0) return new xD(0, 1);
        if (vY > YY.viewState.docHeight) return new xD(YY.state.doc.length, -1);
        if (IY = YY.elementAtHeight(vY), null == AY) break;
        if (IY.type == zY.Text) {
          if (AY < 0 ? IY.to < YY.viewport.from : IY.from > YY.viewport.to) break;
          let rY = YY.docView.coordsAt(AY < 0 ? IY.from : IY.to, AY > 0 ? -1 : 1);
          if (rY && (AY < 0 ? rY.top <= vY + OY : rY.bottom >= vY + OY)) break
        }
        let rY = YY.viewState.heightOracle.textHeight / 2;
        vY = AY > 0 ? IY.bottom + rY : IY.top - rY
      }
      if (YY.viewport.from >= IY.to || YY.viewport.to <= IY.from) {
        if (DY) return null;
        if (IY.type == zY.Text) {
          let rY = function(YY, rY, DY, AY, IY) {
            let RY = Math.round((AY - rY.left) * YY.defaultCharacterWidth);
            if (YY.lineWrapping && DY.height > 1.5 * YY.defaultLineHeight) {
              let rY = YY.viewState.heightOracle.textHeight;
              RY += Math.floor((IY - DY.top - .5 * (YY.defaultLineHeight - rY)) / rY) * YY.viewState.heightOracle.lineLength
            }
            let OY = YY.state.sliceDoc(DY.from, DY.to);
            return DY.from + (0, FY.ab)(OY, RY, YY.state.tabSize)
          }(YY, RY, IY, gY, aY);
          return new xD(rY, rY == IY.from ? 1 : -1)
        }
      }
      if (IY.type != zY.Text) return vY < (IY.top + IY.bottom) / 2 ? new xD(IY.from, 1) : new xD(IY.to, -1);
      let uY = YY.docView.lineAt(IY.from, 2);
      return uY && uY.length == IY.length || (uY = YY.docView.lineAt(IY.from, -2)), new PD(YY, gY, aY, YY.textDirectionAt(IY.from)).scanTile(uY, IY.from)
    }
    class PD {
      constructor(YY, rY, DY, FY) {
        this.view = YY, this.x = rY, this.y = DY, this.baseDir = FY, this.line = null, this.spans = null
      }
      bidiSpansAt(YY) {
        return (!this.line || this.line.from > YY || this.line.to < YY) && (this.line = this.view.state.doc.lineAt(YY), this.spans = this.view.bidiSpans(this.line)), this
      }
      baseDirAt(YY, rY) {
        let {
          line: DY,
          spans: FY
        } = this.bidiSpansAt(YY);
        return FY[mr.find(FY, YY - DY.from, -1, rY)].level == this.baseDir
      }
      dirAt(YY, rY) {
        let {
          line: DY,
          spans: FY
        } = this.bidiSpansAt(YY);
        return FY[mr.find(FY, YY - DY.from, -1, rY)].dir
      }
      bidiIn(YY, rY) {
        let {
          spans: DY,
          line: FY
        } = this.bidiSpansAt(YY);
        return DY.length > 1 || DY.length && (DY[0].level != this.baseDir || DY[0].to + FY.from < rY)
      }
      scan(YY, rY) {
        let DY, FY, AY, IY = 0,
          RY = YY.length - 1,
          OY = new Set,
          gY = this.bidiIn(YY[0], YY[RY]),
          aY = -1,
          vY = 1e9;
        YY: for (; IY < RY;) {
          let uY = RY - IY,
            sY = IY + RY >> 1;
          rY: if (OY.has(sY)) {
            let YY = IY + Math.floor(Math.random() * uY);
            for (let rY = 0; rY < uY; rY++) {
              if (!OY.has(YY)) {
                sY = YY;
                break rY
              }
              YY++, YY == RY && (YY = IY)
            }
            break YY
          } OY.add(sY);
          let iY = rY(sY);
          if (iY)
            for (let rY = 0; rY < iY.length; rY++) {
              let OY = iY[rY],
                uY = 0;
              if (!(0 == OY.width && iY.length > 1)) {
                if (OY.bottom < this.y)(!DY || DY.bottom < OY.bottom) && (DY = OY), uY = 1;
                else if (OY.top > this.y)(!FY || FY.top > OY.top) && (FY = OY), uY = -1;
                else {
                  let YY = OY.left > this.x ? this.x - OY.left : OY.right < this.x ? this.x - OY.right : 0,
                    rY = Math.abs(YY);
                  rY < vY && (aY = sY, vY = rY, AY = OY), YY && (uY = YY < 0 == (this.baseDir == ar.LTR) ? -1 : 1)
                } - 1 != uY || gY && !this.baseDirAt(YY[sY], 1) ? 1 != uY || gY && !this.baseDirAt(YY[sY + 1], -1) || (IY = sY + 1) : RY = sY
              }
            }
        }
        if (!AY) {
          let AY = DY && (!FY || this.y - DY.bottom < FY.top - this.y) ? DY : FY;
          return this.y = (AY.top + AY.bottom) / 2, this.scan(YY, rY)
        }
        if (vY) {
          if (DY && DY.bottom > AY.top) return this.y = DY.bottom - 1, this.scan(YY, rY);
          if (FY && FY.top < AY.bottom) return this.y = FY.top + 1, this.scan(YY, rY)
        }
        let uY = (gY ? this.dirAt(YY[aY], 1) : this.baseDir) == ar.LTR;
        return {
          i: aY,
          after: this.x > (AY.left + AY.right) / 2 == uY
        }
      }
      scanText(YY, rY) {
        let DY = [];
        for (let IY = 0; IY < YY.length; IY = (0, FY.$)(YY.text, IY)) DY.push(rY + IY);
        DY.push(rY + YY.length);
        let AY = this.scan(DY, (FY => {
          let AY = DY[FY] - rY,
            IY = DY[FY + 1] - rY;
          return Fr(YY.dom, AY, IY).getClientRects()
        }));
        return AY.after ? new xD(DY[AY.i + 1], -1) : new xD(DY[AY.i], 1)
      }
      scanTile(YY, rY) {
        if (!YY.length) return new xD(rY, 1);
        if (1 == YY.children.length) {
          let DY = YY.children[0];
          if (DY.isText()) return this.scanText(DY, rY);
          if (DY.isComposite()) return this.scanTile(DY, rY)
        }
        let DY = [rY];
        for (let RY = 0, OY = rY; RY < YY.children.length; RY++) DY.push(OY += YY.children[RY].length);
        let FY = this.scan(DY, (rY => {
            let DY = YY.children[rY];
            return 48 & DY.flags ? null : (1 == DY.dom.nodeType ? DY.dom : Fr(DY.dom, 0, DY.length)).getClientRects()
          })),
          AY = YY.children[FY.i],
          IY = DY[FY.i];
        return AY.isText() ? this.scanText(AY, IY) : AY.isComposite() ? this.scanTile(AY, IY) : FY.after ? new xD(DY[FY.i + 1], -1) : new xD(IY, 1)
      }
    }
    const UD = "\uffff";
    class LD {
      constructor(YY, rY) {
        this.points = YY, this.view = rY, this.text = "", this.lineSeparator = rY.state.facet(FY.p.lineSeparator)
      }
      append(YY) {
        this.text += YY
      }
      lineBreak() {
        this.text += UD
      }
      readRange(YY, rY) {
        if (!YY) return this;
        let DY = YY.parentNode;
        for (let FY = YY;;) {
          this.findPointBefore(DY, FY);
          let YY = this.text.length;
          this.readNode(FY);
          let AY = sD.get(FY),
            IY = FY.nextSibling;
          if (IY == rY) {
            (null === AY || void 0 === AY ? void 0 : AY.breakAfter) && !IY && DY != this.view.contentDOM && this.lineBreak();
            break
          }
          let RY = sD.get(IY);
          (AY && RY ? AY.breakAfter : (AY ? AY.breakAfter : kY(FY)) || kY(IY) && ("BR" != FY.nodeName || (null === AY || void 0 === AY ? void 0 : AY.isWidget())) && this.text.length > YY) && !YF(IY, rY) && this.lineBreak(), FY = IY
        }
        return this.findPointBefore(DY, rY), this
      }
      readTextNode(YY) {
        let rY = YY.nodeValue;
        for (let DY of this.points) DY.node == YY && (DY.pos = this.text.length + Math.min(DY.offset, rY.length));
        for (let DY = 0, FY = this.lineSeparator ? null : /\r\n?|\n/g;;) {
          let AY, IY = -1,
            RY = 1;
          if (this.lineSeparator ? (IY = rY.indexOf(this.lineSeparator, DY), RY = this.lineSeparator.length) : (AY = FY.exec(rY)) && (IY = AY.index, RY = AY[0].length), this.append(rY.slice(DY, IY < 0 ? rY.length : IY)), IY < 0) break;
          if (this.lineBreak(), RY > 1)
            for (let rY of this.points) rY.node == YY && rY.pos > this.text.length && (rY.pos -= RY - 1);
          DY = IY + RY
        }
      }
      readNode(YY) {
        let rY = sD.get(YY),
          DY = rY && rY.overrideDOMText;
        if (null != DY) {
          this.findPointInside(YY, DY.length);
          for (let YY = DY.iter(); !YY.next().done;) YY.lineBreak ? this.lineBreak() : this.append(YY.value)
        } else 3 == YY.nodeType ? this.readTextNode(YY) : "BR" == YY.nodeName ? YY.nextSibling && this.lineBreak() : 1 == YY.nodeType && this.readRange(YY.firstChild, null)
      }
      findPointBefore(YY, rY) {
        for (let DY of this.points) DY.node == YY && YY.childNodes[DY.offset] == rY && (DY.pos = this.text.length)
      }
      findPointInside(YY, rY) {
        for (let DY of this.points)(3 == YY.nodeType ? DY.node == YY : YY.contains(DY.node)) && (DY.pos = this.text.length + (tD(YY, DY.node, DY.offset) ? rY : 0))
      }
    }

    function tD(YY, rY, DY) {
      for (;;) {
        if (!rY || DY < xY(rY)) return !1;
        if (rY == YY) return !0;
        DY = pY(rY) + 1, rY = rY.parentNode
      }
    }

    function YF(YY, rY) {
      let DY;
      for (; YY != rY && YY; YY = YY.nextSibling) {
        let rY = sD.get(YY);
        if (!(null === rY || void 0 === rY ? void 0 : rY.isWidget())) return !1;
        rY && (DY || (DY = [])).push(rY)
      }
      if (DY)
        for (let FY of DY) {
          let YY = FY.overrideDOMText;
          if (null === YY || void 0 === YY ? void 0 : YY.length) return !1
        }
      return !0
    }
    class rF {
      constructor(YY, rY) {
        this.node = YY, this.offset = rY, this.pos = -1
      }
    }
    class DF {
      constructor(YY, rY, DY, AY) {
        this.typeOver = AY, this.bounds = null, this.text = "", this.domChanged = rY > -1;
        let {
          impreciseHead: IY,
          impreciseAnchor: RY
        } = YY.docView, OY = YY.state.selection;
        if (YY.state.readOnly && rY > -1) this.newSel = null;
        else if (rY > -1 && (this.bounds = FF(YY.docView.tile, rY, DY, 0))) {
          let rY = IY || RY ? [] : function(YY) {
              let rY = [];
              if (YY.root.activeElement != YY.contentDOM) return rY;
              let {
                anchorNode: DY,
                anchorOffset: FY,
                focusNode: AY,
                focusOffset: IY
              } = YY.observer.selectionRange;
              DY && (rY.push(new rF(DY, FY)), AY == DY && IY == FY || rY.push(new rF(AY, IY)));
              return rY
            }(YY),
            DY = new LD(rY, YY);
          DY.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = DY.text, this.newSel = function(YY, rY) {
            if (0 == YY.length) return null;
            let DY = YY[0].pos,
              AY = 2 == YY.length ? YY[1].pos : DY;
            return DY > -1 && AY > -1 ? FY.n.single(DY + rY, AY + rY) : null
          }(rY, this.bounds.from)
        } else {
          let rY = YY.observer.selectionRange,
            DY = IY && IY.node == rY.focusNode && IY.offset == rY.focusOffset || !wY(YY.contentDOM, rY.focusNode) ? OY.main.head : YY.docView.posFromDOM(rY.focusNode, rY.focusOffset),
            AY = RY && RY.node == rY.anchorNode && RY.offset == rY.anchorOffset || !wY(YY.contentDOM, rY.anchorNode) ? OY.main.anchor : YY.docView.posFromDOM(rY.anchorNode, rY.anchorOffset),
            gY = YY.viewport;
          if ((TY.ios || TY.chrome) && OY.main.empty && DY != AY && (gY.from > 0 || gY.to < YY.state.doc.length)) {
            let rY = Math.min(DY, AY),
              FY = Math.max(DY, AY),
              IY = gY.from - rY,
              RY = gY.to - FY;
            0 != IY && 1 != IY && 0 != rY || 0 != RY && -1 != RY && FY != YY.state.doc.length || (DY = 0, AY = YY.state.doc.length)
          }
          if (YY.inputState.composing > -1 && OY.ws.length > 1) this.newSel = OY.replaceRange(FY.n.range(AY, DY));
          else if (YY.lineWrapping && AY == DY && (!OY.main.empty || OY.main.head != DY) && YY.inputState.lastTouchTime > Date.now() - 100) {
            let rY = YY.coordsAtPos(DY, -1),
              AY = 0;
            rY && (AY = YY.inputState.lastTouchY <= rY.bottom ? -1 : 1), this.newSel = FY.n.create([FY.n.cursor(DY, AY)])
          } else this.newSel = FY.n.single(AY, DY)
        }
      }
    }

    function FF(YY, rY, DY, FY) {
      if (YY.isComposite()) {
        let AY = -1,
          IY = -1,
          RY = -1,
          OY = -1;
        for (let gY = 0, aY = FY, vY = FY; gY < YY.children.length; gY++) {
          let FY = YY.children[gY],
            uY = aY + FY.length;
          if (aY < rY && uY > DY) return FF(FY, rY, DY, aY);
          if (uY >= rY && -1 == AY && (AY = gY, IY = aY), aY > DY && FY.dom.parentNode == YY.dom) {
            RY = gY, OY = vY;
            break
          }
          vY = uY, aY = uY + FY.breakAfter
        }
        return {
          from: IY,
          to: OY < 0 ? FY + YY.length : OY,
          startDOM: (AY ? YY.children[AY - 1].dom.nextSibling : null) || YY.dom.firstChild,
          endDOM: RY < YY.children.length && RY >= 0 ? YY.children[RY].dom : null
        }
      }
      return YY.isText() ? {
        from: FY,
        to: FY + YY.length,
        startDOM: YY.dom,
        endDOM: YY.dom.nextSibling
      } : null
    }

    function AF(YY, rY) {
      let DY, {
          newSel: AY
        } = rY,
        {
          state: IY
        } = YY,
        RY = IY.selection.main,
        OY = YY.inputState.lastKeyTime > Date.now() - 100 ? YY.inputState.lastKeyCode : -1;
      if (rY.bounds) {
        let {
          from: YY,
          to: AY
        } = rY.bounds, gY = RY.from, aY = null;
        (8 === OY || TY.android && rY.text.length < AY - YY) && (gY = RY.to, aY = "end");
        let vY, uY, sY = IY.doc.sliceString(YY, AY, UD);
        !RY.empty && RY.from >= YY && RY.to <= AY && (rY.typeOver || sY != rY.text) && sY.slice(0, RY.from - YY) == rY.text.slice(0, RY.from - YY) && sY.slice(RY.to - YY) == rY.text.slice(vY = rY.text.length - (sY.length - (RY.to - YY))) ? DY = {
          from: RY.from,
          to: RY.to,
          insert: FY.K.of(rY.text.slice(RY.from - YY, vY).split(UD))
        } : (uY = RF(sY, rY.text, gY - YY, aY)) && (TY.chrome && 13 == OY && uY.toB == uY.from + 2 && rY.text.slice(uY.from, uY.toB) == UD + UD && uY.toB--, DY = {
          from: YY + uY.from,
          to: YY + uY.toA,
          insert: FY.K.of(rY.text.slice(uY.from, uY.toB).split(UD))
        })
      } else AY && (!YY.hasFocus && IY.facet(Gr) || OF(AY, RY)) && (AY = null);
      if (!DY && !AY) return !1;
      if ((TY.mac || TY.android) && DY && DY.from == DY.to && DY.from == RY.head - 1 && /^\. ?$/.test(DY.insert.toString()) && "off" == YY.contentDOM.getAttribute("autocorrect") ? (AY && 2 == DY.insert.length && (AY = FY.n.single(AY.main.anchor - 1, AY.main.head - 1)), DY = {
          from: DY.from,
          to: DY.to,
          insert: FY.K.of([DY.insert.toString().replace(".", " ")])
        }) : IY.doc.lineAt(RY.from).to < RY.to && YY.docView.lineHasWidget(RY.to) && YY.inputState.insertingTextAt > Date.now() - 50 ? DY = {
          from: RY.from,
          to: RY.to,
          insert: IY.toText(YY.inputState.insertingText)
        } : TY.chrome && DY && DY.from == DY.to && DY.from == RY.head && "\n " == DY.insert.toString() && YY.lineWrapping && (AY && (AY = FY.n.single(AY.main.anchor - 1, AY.main.head - 1)), DY = {
          from: RY.from,
          to: RY.to,
          insert: FY.K.of([" "])
        }), DY) return IF(YY, DY, AY, OY);
      if (AY && !OF(AY, RY)) {
        let rY = !1,
          DY = "select";
        return YY.inputState.lastSelectionTime > Date.now() - 50 && ("select" == YY.inputState.lastSelectionOrigin && (rY = !0), DY = YY.inputState.lastSelectionOrigin, "select.pointer" == DY && (AY = kD(IY.facet(FD).map((rY => rY(YY))), AY))), YY.dispatch({
          selection: AY,
          scrollIntoView: rY,
          userEvent: DY
        }), !0
      }
      return !1
    }

    function IF(YY, rY, DY) {
      let AY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
      if (TY.ios && YY.inputState.flushIOSKey(rY)) return !0;
      let IY = YY.state.selection.main;
      if (TY.android && (rY.to == IY.to && (rY.from == IY.from || rY.from == IY.from - 1 && " " == YY.state.sliceDoc(rY.from, IY.from)) && 1 == rY.insert.length && 2 == rY.insert.lines && Ar(YY.contentDOM, "Enter", 13) || (rY.from == IY.from - 1 && rY.to == IY.to && 0 == rY.insert.length || 8 == AY && rY.insert.length < rY.to - rY.from && rY.to > IY.head) && Ar(YY.contentDOM, "Backspace", 8) || rY.from == IY.from && rY.to == IY.to + 1 && 0 == rY.insert.length && Ar(YY.contentDOM, "Delete", 46))) return !0;
      let RY, OY = rY.insert.toString();
      YY.inputState.composing >= 0 && YY.inputState.composing++;
      let gY = () => RY || (RY = function(YY, rY, DY) {
        let AY, IY = YY.state,
          RY = IY.selection.main,
          OY = -1;
        if (rY.from == rY.to && rY.from < RY.from || rY.from > RY.to) {
          let DY = rY.from < RY.from ? -1 : 1,
            FY = DY < 0 ? RY.from : RY.to,
            AY = pD(IY.facet(FD).map((rY => rY(YY))), FY, DY);
          rY.from == AY && (OY = AY)
        }
        if (OY > -1) AY = {
          changes: rY,
          selection: FY.n.cursor(rY.from + rY.insert.length, -1)
        };
        else if (rY.from >= RY.from && rY.to <= RY.to && rY.to - rY.from >= (RY.to - RY.from) / 3 && (!DY || DY.main.empty && DY.main.from == rY.from + rY.insert.length) && YY.inputState.composing < 0) {
          let DY = RY.from < rY.from ? IY.sliceDoc(RY.from, rY.from) : "",
            FY = RY.to > rY.to ? IY.sliceDoc(rY.to, RY.to) : "";
          AY = IY.replaceSelection(YY.state.toText(DY + rY.insert.sliceString(0, void 0, YY.state.lineBreak) + FY))
        } else {
          let OY = IY.changes(rY),
            gY = DY && DY.main.to <= OY.newLength ? DY.main : void 0;
          if (IY.selection.ws.length > 1 && (YY.inputState.composing >= 0 || YY.inputState.compositionPendingChange) && rY.to <= RY.to + 10 && rY.to >= RY.to - 10) {
            let aY, vY = YY.state.sliceDoc(rY.from, rY.to),
              uY = DY && JD(YY, DY.main.head);
            if (uY) {
              let YY = rY.insert.length - (rY.to - rY.from);
              aY = {
                from: uY.from,
                to: uY.to - YY
              }
            } else aY = YY.state.doc.lineAt(RY.head);
            let sY = RY.to - rY.to;
            AY = IY.changeByRange((DY => {
              if (DY.from == RY.from && DY.to == RY.to) return {
                changes: OY,
                range: gY || DY.map(OY)
              };
              let AY = DY.to - sY,
                uY = AY - vY.length;
              if (YY.state.sliceDoc(uY, AY) != vY || AY >= aY.from && uY <= aY.to) return {
                range: DY
              };
              let iY = IY.changes({
                  from: uY,
                  to: AY,
                  insert: rY.insert
                }),
                yY = DY.to - RY.to;
              return {
                changes: iY,
                range: gY ? FY.n.range(Math.max(0, gY.anchor + yY), Math.max(0, gY.head + yY)) : DY.map(iY)
              }
            }))
          } else AY = {
            changes: OY,
            selection: gY && IY.selection.replaceRange(gY)
          }
        }
        let gY = "input.type";
        (YY.composing || YY.inputState.compositionPendingChange && YY.inputState.compositionEndedAt > Date.now() - 50) && (YY.inputState.compositionPendingChange = !1, gY += ".compose", YY.inputState.compositionFirstChange && (gY += ".start", YY.inputState.compositionFirstChange = !1));
        return IY.update(AY, {
          userEvent: gY,
          scrollIntoView: !0
        })
      }(YY, rY, DY));
      return YY.state.facet(jr).some((DY => DY(YY, rY.from, rY.to, OY, gY))) || YY.dispatch(gY()), !0
    }

    function RF(YY, rY, DY, FY) {
      let AY = Math.min(YY.length, rY.length),
        IY = 0;
      for (; IY < AY && YY.charCodeAt(IY) == rY.charCodeAt(IY);) IY++;
      if (IY == AY && YY.length == rY.length) return null;
      let RY = YY.length,
        OY = rY.length;
      for (; RY > 0 && OY > 0 && YY.charCodeAt(RY - 1) == rY.charCodeAt(OY - 1);) RY--, OY--;
      if ("end" == FY) {
        DY -= RY + Math.max(0, IY - Math.min(RY, OY)) - IY
      }
      if (RY < IY && YY.length < rY.length) {
        IY -= DY <= IY && DY >= RY ? IY - DY : 0, OY = IY + (OY - RY), RY = IY
      } else if (OY < IY) {
        IY -= DY <= IY && DY >= OY ? IY - DY : 0, RY = IY + (RY - OY), OY = IY
      }
      return {
        from: IY,
        toA: RY,
        toB: OY
      }
    }

    function OF(YY, rY) {
      return rY.head == YY.main.head && rY.anchor == YY.main.anchor
    }
    class gF {
      setSelectionOrigin(YY) {
        this.lastSelectionOrigin = YY, this.lastSelectionTime = Date.now()
      }
      constructor(YY) {
        this.view = YY, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = YY.hasFocus, TY.safari && YY.contentDOM.addEventListener("input", (() => null)), TY.gecko && function(YY) {
          CF.has(YY) || (CF.add(YY), YY.addEventListener("copy", (() => {})), YY.addEventListener("cut", (() => {})))
        }(YY.contentDOM.ownerDocument)
      }
      handleEvent(YY) {
        (function(YY, rY) {
          if (!rY.bubbles) return !0;
          if (rY.defaultPrevented) return !1;
          for (let DY, FY = rY.target; FY != YY.contentDOM; FY = FY.parentNode)
            if (!FY || 11 == FY.nodeType || (DY = sD.get(FY)) && DY.isWidget() && !DY.isHidden && DY.widget.ignoreEvent(rY)) return !1;
          return !0
        })(this.view, YY) && !this.ignoreDuringComposition(YY) && ("keydown" == YY.type && this.keydown(YY) || (0 != this.view.updateState ? Promise.resolve().then((() => this.runHandlers(YY.type, YY))) : this.runHandlers(YY.type, YY)))
      }
      runHandlers(YY, rY) {
        let DY = this.handlers[YY];
        if (DY) {
          for (let YY of DY.observers) YY(this.view, rY);
          for (let YY of DY.handlers) {
            if (rY.defaultPrevented) break;
            if (YY(this.view, rY)) {
              rY.preventDefault();
              break
            }
          }
        }
      }
      ensureHandlers(YY) {
        let rY = vF(YY),
          DY = this.handlers,
          FY = this.view.contentDOM;
        for (let AY in rY)
          if ("scroll" != AY) {
            let YY = !rY[AY].handlers.length,
              IY = DY[AY];
            IY && YY != !IY.handlers.length && (FY.removeEventListener(AY, this.handleEvent), IY = null), IY || FY.addEventListener(AY, this.handleEvent, {
              passive: YY
            })
          } for (let AY in DY) "scroll" == AY || rY[AY] || FY.removeEventListener(AY, this.handleEvent);
        this.handlers = rY
      }
      keydown(YY) {
        if (this.lastKeyCode = YY.keyCode, this.lastKeyTime = Date.now(), 9 == YY.keyCode && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return !0;
        if (this.tabFocusMode > 0 && 27 != YY.keyCode && iF.indexOf(YY.keyCode) < 0 && (this.tabFocusMode = -1), TY.android && TY.chrome && !YY.synthetic && (13 == YY.keyCode || 8 == YY.keyCode)) return this.view.observer.delayAndroidKey(YY.key, YY.keyCode), !0;
        let rY;
        return !TY.ios || YY.synthetic || YY.altKey || YY.metaKey || YY.shiftKey || !((rY = uF.find((rY => rY.keyCode == YY.keyCode))) && !YY.ctrlKey || sF.indexOf(YY.key) > -1 && YY.ctrlKey) ? (229 != YY.keyCode && this.view.observer.forceFlush(), !1) : (this.pendingIOSKey = rY || YY, setTimeout((() => this.flushIOSKey()), 250), !0)
      }
      flushIOSKey(YY) {
        let rY = this.pendingIOSKey;
        return !!rY && (!("Enter" == rY.key && YY && YY.from < YY.to && /^\S+$/.test(YY.insert.toString())) && (this.pendingIOSKey = void 0, Ar(this.view.contentDOM, rY.key, rY.keyCode, rY instanceof KeyboardEvent ? rY : void 0)))
      }
      ignoreDuringComposition(YY) {
        return !(!/^key/.test(YY.type) || YY.synthetic) && (this.composing > 0 || !!(TY.safari && !TY.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = !1, !0))
      }
      startMouseSelection(YY) {
        this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = YY
      }
      update(YY) {
        this.view.observer.update(YY), this.mouseSelection && this.mouseSelection.update(YY), this.draggedContent && YY.docChanged && (this.draggedContent = this.draggedContent.map(YY.changes)), YY.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0)
      }
      destroy() {
        this.mouseSelection && this.mouseSelection.destroy()
      }
    }

    function aF(YY, rY) {
      return (DY, FY) => {
        try {
          return rY.call(YY, FY, DY)
        } catch (AY) {
          kr(DY.state, AY)
        }
      }
    }

    function vF(YY) {
      let rY = Object.create(null);

      function DY(YY) {
        return rY[YY] || (rY[YY] = {
          observers: [],
          handlers: []
        })
      }
      for (let FY of YY) {
        let YY = FY.spec,
          rY = YY && YY.plugin.domEventHandlers,
          AY = YY && YY.plugin.domEventObservers;
        if (rY)
          for (let IY in rY) {
            let YY = rY[IY];
            YY && DY(IY).handlers.push(aF(FY.value, YY))
          }
        if (AY)
          for (let IY in AY) {
            let YY = AY[IY];
            YY && DY(IY).observers.push(aF(FY.value, YY))
          }
      }
      for (let FY in oF) DY(FY).handlers.push(oF[FY]);
      for (let FY in WF) DY(FY).observers.push(WF[FY]);
      return rY
    }
    const uF = [{
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
      sF = "dthko",
      iF = [16, 17, 18, 20, 91, 92, 224, 225];

    function yF(YY) {
      return .7 * Math.max(0, YY) + 8
    }
    class QF {
      constructor(YY, rY, DY, AY) {
        this.view = YY, this.startEvent = rY, this.style = DY, this.mustSelect = AY, this.scrollSpeed = {
          x: 0,
          y: 0
        }, this.scrolling = -1, this.lastEvent = rY, this.scrollParents = LY(YY.contentDOM), this.atoms = YY.state.facet(FD).map((rY => rY(YY)));
        let IY = YY.contentDOM.ownerDocument;
        IY.addEventListener("mousemove", this.move = this.move.bind(this)), IY.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = rY.shiftKey, this.multiple = YY.state.facet(FY.p.allowMultipleSelections) && function(YY, rY) {
          let DY = YY.state.facet(Hr);
          return DY.length ? DY[0](rY) : TY.mac ? rY.metaKey : rY.ctrlKey
        }(YY, rY), this.dragging = !(! function(YY, rY) {
          let {
            main: DY
          } = YY.state.selection;
          if (DY.empty) return !1;
          let FY = MY(YY.root);
          if (!FY || 0 == FY.rangeCount) return !0;
          let AY = FY.getRangeAt(0).getClientRects();
          for (let IY = 0; IY < AY.length; IY++) {
            let YY = AY[IY];
            if (YY.left <= rY.clientX && YY.right >= rY.clientX && YY.top <= rY.clientY && YY.bottom >= rY.clientY) return !0
          }
          return !1
        }(YY, rY) || 1 != BF(rY)) && null
      }
      start(YY) {
        !1 === this.dragging && this.select(YY)
      }
      move(YY) {
        if (0 == YY.buttons) return this.destroy();
        if (this.dragging || null == this.dragging && (rY = this.startEvent, DY = YY, Math.max(Math.abs(rY.clientX - DY.clientX), Math.abs(rY.clientY - DY.clientY)) < 10)) return;
        var rY, DY;
        this.select(this.lastEvent = YY);
        let FY = 0,
          AY = 0,
          IY = 0,
          RY = 0,
          OY = this.view.win.innerWidth,
          gY = this.view.win.innerHeight;
        this.scrollParents.x && ({
          left: IY,
          right: OY
        } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({
          top: RY,
          bottom: gY
        } = this.scrollParents.y.getBoundingClientRect());
        let aY = OD(this.view);
        YY.clientX - aY.left <= IY + 6 ? FY = -yF(IY - YY.clientX) : YY.clientX + aY.right >= OY - 6 && (FY = yF(YY.clientX - OY)), YY.clientY - aY.top <= RY + 6 ? AY = -yF(RY - YY.clientY) : YY.clientY + aY.bottom >= gY - 6 && (AY = yF(YY.clientY - gY)), this.setScrollSpeed(FY, AY)
      }
      up(YY) {
        null == this.dragging && this.select(this.lastEvent), this.dragging || YY.preventDefault(), this.destroy()
      }
      destroy() {
        this.setScrollSpeed(0, 0);
        let YY = this.view.contentDOM.ownerDocument;
        YY.removeEventListener("mousemove", this.move), YY.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null
      }
      setScrollSpeed(YY, rY) {
        this.scrollSpeed = {
          x: YY,
          y: rY
        }, YY || rY ? this.scrolling < 0 && (this.scrolling = setInterval((() => this.scroll()), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1)
      }
      scroll() {
        let {
          x: YY,
          y: rY
        } = this.scrollSpeed;
        YY && this.scrollParents.x && (this.scrollParents.x.scrollLeft += YY, YY = 0), rY && this.scrollParents.y && (this.scrollParents.y.scrollTop += rY, rY = 0), (YY || rY) && this.view.win.scrollBy(YY, rY), !1 === this.dragging && this.select(this.lastEvent)
      }
      select(YY) {
        let {
          view: rY
        } = this, DY = kD(this.atoms, this.style.get(YY, this.extend, this.multiple));
        !this.mustSelect && DY.eq(rY.state.selection, !1 === this.dragging) || this.view.dispatch({
          selection: DY,
          userEvent: "select.pointer"
        }), this.mustSelect = !1
      }
      update(YY) {
        YY.transactions.some((YY => YY.isUserEvent("input.type"))) ? this.destroy() : this.style.update(YY) && setTimeout((() => this.select(this.lastEvent)), 20)
      }
    }
    const oF = Object.create(null),
      WF = Object.create(null),
      EF = TY.ie && TY.ie_version < 15 || TY.ios && TY.webkit_version < 604;

    function mF(YY, rY, DY) {
      for (let FY of YY.facet(rY)) DY = FY(DY, YY);
      return DY
    }

    function VF(YY, rY) {
      rY = mF(YY.state, dr, rY);
      let DY, {
          state: AY
        } = YY,
        IY = 1,
        RY = AY.toText(rY),
        OY = RY.lines == AY.selection.ws.length;
      if (null != KF && AY.selection.ws.every((YY => YY.empty)) && KF == RY.toString()) {
        let YY = -1;
        DY = AY.changeByRange((DY => {
          let gY = AY.doc.lineAt(DY.from);
          if (gY.from == YY) return {
            range: DY
          };
          YY = gY.from;
          let aY = AY.toText((OY ? RY.line(IY++).text : rY) + AY.lineBreak);
          return {
            changes: {
              from: gY.from,
              insert: aY
            },
            range: FY.n.cursor(DY.from + aY.length)
          }
        }))
      } else DY = OY ? AY.changeByRange((YY => {
        let rY = RY.line(IY++);
        return {
          changes: {
            from: YY.from,
            to: YY.to,
            insert: rY.text
          },
          range: FY.n.cursor(YY.from + rY.length)
        }
      })) : AY.replaceSelection(RY);
      YY.dispatch(DY, {
        userEvent: "input.paste",
        scrollIntoView: !0
      })
    }

    function SF(YY, rY, DY, AY) {
      if (1 == AY) return FY.n.cursor(rY, DY);
      if (2 == AY) return function(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          AY = YY.charCategorizer(rY),
          IY = YY.doc.lineAt(rY),
          RY = rY - IY.from;
        if (0 == IY.length) return FY.n.cursor(rY);
        0 == RY ? DY = 1 : RY == IY.length && (DY = -1);
        let OY = RY,
          gY = RY;
        DY < 0 ? OY = (0, FY.$)(IY.text, RY, !1) : gY = (0, FY.$)(IY.text, RY);
        let aY = AY(IY.text.slice(OY, gY));
        for (; OY > 0;) {
          let YY = (0, FY.$)(IY.text, OY, !1);
          if (AY(IY.text.slice(YY, OY)) != aY) break;
          OY = YY
        }
        for (; gY < IY.length;) {
          let YY = (0, FY.$)(IY.text, gY);
          if (AY(IY.text.slice(gY, YY)) != aY) break;
          gY = YY
        }
        return FY.n.range(OY + IY.from, gY + IY.from)
      }(YY.state, rY, DY);
      {
        let AY = YY.docView.lineAt(rY, DY),
          IY = YY.state.doc.lineAt(AY ? AY.posAtEnd : rY),
          RY = AY ? AY.posAtStart : IY.from,
          OY = AY ? AY.posAtEnd : IY.to;
        return OY < YY.state.doc.length && OY == IY.to && OY++, FY.n.range(RY, OY)
      }
    }
    WF.scroll = YY => {
      YY.inputState.lastScrollTop = YY.scrollDOM.scrollTop, YY.inputState.lastScrollLeft = YY.scrollDOM.scrollLeft
    }, WF.wheel = WF.mousewheel = YY => {
      YY.inputState.lastWheelEvent = Date.now()
    }, oF.keydown = (YY, rY) => (YY.inputState.setSelectionOrigin("select"), 27 == rY.keyCode && 0 != YY.inputState.tabFocusMode && (YY.inputState.tabFocusMode = Date.now() + 2e3), !1), WF.touchstart = (YY, rY) => {
      let DY = YY.inputState,
        FY = rY.targetTouches[0];
      DY.lastTouchTime = Date.now(), FY && (DY.lastTouchX = FY.clientX, DY.lastTouchY = FY.clientY), DY.setSelectionOrigin("select.pointer")
    }, WF.touchmove = YY => {
      YY.inputState.setSelectionOrigin("select.pointer")
    }, oF.mousedown = (YY, rY) => {
      if (YY.observer.flush(), YY.inputState.lastTouchTime > Date.now() - 2e3) return !1;
      let DY = null;
      for (let FY of YY.state.facet(Zr))
        if (DY = FY(YY, rY), DY) break;
      if (DY || 0 != rY.button || (DY = function(YY, rY) {
          let DY = YY.posAndSideAtCoords({
              x: rY.clientX,
              y: rY.clientY
            }, !1),
            AY = BF(rY),
            IY = YY.state.selection;
          return {
            update(YY) {
              YY.docChanged && (DY.pos = YY.changes.mapPos(DY.pos), IY = IY.map(YY.changes))
            },
            get(rY, RY, OY) {
              let gY, aY = YY.posAndSideAtCoords({
                  x: rY.clientX,
                  y: rY.clientY
                }, !1),
                vY = SF(YY, aY.pos, aY.assoc, AY);
              if (DY.pos != aY.pos && !RY) {
                let rY = SF(YY, DY.pos, DY.assoc, AY),
                  IY = Math.min(rY.from, vY.from),
                  RY = Math.max(rY.to, vY.to);
                vY = IY < vY.from ? FY.n.range(IY, RY, vY.assoc) : FY.n.range(RY, IY, vY.assoc)
              }
              return RY ? IY.replaceRange(IY.main.extend(vY.from, vY.to, vY.assoc)) : OY && 1 == AY && IY.ws.length > 1 && (gY = function(YY, rY) {
                for (let DY = 0; DY < YY.ws.length; DY++) {
                  let {
                    from: AY,
                    to: IY
                  } = YY.ws[DY];
                  if (AY <= rY && IY >= rY) return FY.n.create(YY.ws.slice(0, DY).concat(YY.ws.slice(DY + 1)), YY.mainIndex == DY ? 0 : YY.mainIndex - (YY.mainIndex > DY ? 1 : 0))
                }
                return null
              }(IY, aY.pos)) ? gY : OY ? IY.addRange(vY) : FY.n.create([vY])
            }
          }
        }(YY, rY)), DY) {
        let FY = !YY.hasFocus;
        YY.inputState.startMouseSelection(new QF(YY, rY, DY, FY)), FY && YY.observer.ignore((() => {
          Dr(YY.contentDOM);
          let rY = YY.root.activeElement;
          rY && !rY.contains(YY.contentDOM) && rY.blur()
        }));
        let AY = YY.inputState.mouseSelection;
        if (AY) return AY.start(rY), !1 === AY.dragging
      } else YY.inputState.setSelectionOrigin("select.pointer");
      return !1
    };
    const lF = TY.ie && TY.ie_version <= 11;
    let TF = null,
      eF = 0,
      NF = 0;

    function BF(YY) {
      if (!lF) return YY.detail;
      let rY = TF,
        DY = NF;
      return TF = YY, NF = Date.now(), eF = !rY || DY > Date.now() - 400 && Math.abs(rY.clientX - YY.clientX) < 2 && Math.abs(rY.clientY - YY.clientY) < 2 ? (eF + 1) % 3 : 1
    }

    function cF(YY, rY, DY, FY) {
      if (!(DY = mF(YY.state, dr, DY))) return;
      let AY = YY.posAtCoords({
          x: rY.clientX,
          y: rY.clientY
        }, !1),
        {
          draggedContent: IY
        } = YY.inputState,
        RY = FY && IY && function(YY, rY) {
          let DY = YY.state.facet(zr);
          return DY.length ? DY[0](rY) : TY.mac ? !rY.altKey : !rY.ctrlKey
        }(YY, rY) ? {
          from: IY.from,
          to: IY.to
        } : null,
        OY = {
          from: AY,
          insert: DY
        },
        gY = YY.state.changes(RY ? [RY, OY] : OY);
      YY.focus(), YY.dispatch({
        changes: gY,
        selection: {
          anchor: gY.mapPos(AY, -1),
          head: gY.mapPos(AY, 1)
        },
        userEvent: RY ? "move.drop" : "input.drop"
      }), YY.inputState.draggedContent = null
    }
    oF.dragstart = (YY, rY) => {
      let {
        selection: {
          main: DY
        }
      } = YY.state;
      if (rY.target.draggable) {
        let AY = YY.docView.tile.nearest(rY.target);
        if (AY && AY.isWidget()) {
          let YY = AY.posAtStart,
            rY = YY + AY.length;
          (YY >= DY.to || rY <= DY.from) && (DY = FY.n.range(YY, rY))
        }
      }
      let {
        inputState: AY
      } = YY;
      return AY.mouseSelection && (AY.mouseSelection.dragging = !0), AY.draggedContent = DY, rY.dataTransfer && (rY.dataTransfer.setData("Text", mF(YY.state, Jr, YY.state.sliceDoc(DY.from, DY.to))), rY.dataTransfer.effectAllowed = "copyMove"), !1
    }, oF.dragend = YY => (YY.inputState.draggedContent = null, !1), oF.drop = (YY, rY) => {
      if (!rY.dataTransfer) return !1;
      if (YY.state.readOnly) return !0;
      let DY = rY.dataTransfer.files;
      if (DY && DY.length) {
        let FY = Array(DY.length),
          AY = 0,
          IY = () => {
            ++AY == DY.length && cF(YY, rY, FY.filter((YY => null != YY)).join(YY.state.lineBreak), !1)
          };
        for (let YY = 0; YY < DY.length; YY++) {
          let rY = new FileReader;
          rY.onerror = IY, rY.onload = () => {
            /[\x00-\x08\x0e-\x1f]{2}/.test(rY.result) || (FY[YY] = rY.result), IY()
          }, rY.readAsText(DY[YY])
        }
        return !0
      } {
        let DY = rY.dataTransfer.getData("Text");
        if (DY) return cF(YY, rY, DY, !0), !0
      }
      return !1
    }, oF.paste = (YY, rY) => {
      if (YY.state.readOnly) return !0;
      YY.observer.flush();
      let DY = EF ? null : rY.clipboardData;
      return DY ? (VF(YY, DY.getData("text/plain") || DY.getData("text/uri-list")), !0) : (function(YY) {
        let rY = YY.dom.parentNode;
        if (!rY) return;
        let DY = rY.appendChild(document.createElement("textarea"));
        DY.style.cssText = "position: fixed; left: -10000px; top: 10px", DY.focus(), setTimeout((() => {
          YY.focus(), DY.remove(), VF(YY, DY.value)
        }), 50)
      }(YY), !1)
    };
    let KF = null;
    oF.copy = oF.cut = (YY, rY) => {
      if (!bY(YY.contentDOM, YY.observer.selectionRange)) return !1;
      let {
        text: DY,
        ws: FY,
        linewise: AY
      } = function(YY) {
        let rY = [],
          DY = [],
          FY = !1;
        for (let AY of YY.selection.ws) AY.empty || (rY.push(YY.sliceDoc(AY.from, AY.to)), DY.push(AY));
        if (!rY.length) {
          let AY = -1;
          for (let {
              from: FY
            }
            of YY.selection.ws) {
            let IY = YY.doc.lineAt(FY);
            IY.number > AY && (rY.push(IY.text), DY.push({
              from: IY.from,
              to: Math.min(YY.doc.length, IY.to + 1)
            })), AY = IY.number
          }
          FY = !0
        }
        return {
          text: mF(YY, Jr, rY.join(YY.lineBreak)),
          ws: DY,
          linewise: FY
        }
      }(YY.state);
      if (!DY && !AY) return !1;
      KF = AY ? DY : null, "cut" != rY.type || YY.state.readOnly || YY.dispatch({
        changes: FY,
        scrollIntoView: !0,
        userEvent: "delete.cut"
      });
      let IY = EF ? null : rY.clipboardData;
      return IY ? (IY.clearData(), IY.setData("text/plain", DY), !0) : (function(YY, rY) {
        let DY = YY.dom.parentNode;
        if (!DY) return;
        let FY = DY.appendChild(document.createElement("textarea"));
        FY.style.cssText = "position: fixed; left: -10000px; top: 10px", FY.value = rY, FY.focus(), FY.selectionEnd = rY.length, FY.selectionStart = 0, setTimeout((() => {
          FY.remove(), YY.focus()
        }), 50)
      }(YY, DY), !1)
    };
    const HF = FY.e.define();

    function zF(YY, rY) {
      let DY = [];
      for (let FY of YY.facet(hr)) {
        let AY = FY(YY, rY);
        AY && DY.push(AY)
      }
      return DY.length ? YY.update({
        effects: DY,
        annotations: HF.of(!0)
      }) : null
    }

    function ZF(YY) {
      setTimeout((() => {
        let rY = YY.hasFocus;
        if (rY != YY.inputState.notifiedFocused) {
          let DY = zF(YY.state, rY);
          DY ? YY.dispatch(DY) : YY.update([])
        }
      }), 10)
    }
    WF.focus = YY => {
      YY.inputState.lastFocusTime = Date.now(), YY.scrollDOM.scrollTop || !YY.inputState.lastScrollTop && !YY.inputState.lastScrollLeft || (YY.scrollDOM.scrollTop = YY.inputState.lastScrollTop, YY.scrollDOM.scrollLeft = YY.inputState.lastScrollLeft), ZF(YY)
    }, WF.blur = YY => {
      YY.observer.clearSelectionRange(), ZF(YY)
    }, WF.compositionstart = WF.compositionupdate = YY => {
      YY.observer.editContext || (null == YY.inputState.compositionFirstChange && (YY.inputState.compositionFirstChange = !0), YY.inputState.composing < 0 && (YY.inputState.composing = 0))
    }, WF.compositionend = YY => {
      YY.observer.editContext || (YY.inputState.composing = -1, YY.inputState.compositionEndedAt = Date.now(), YY.inputState.compositionPendingKey = !0, YY.inputState.compositionPendingChange = YY.observer.pendingRecords().length > 0, YY.inputState.compositionFirstChange = null, TY.chrome && TY.android ? YY.observer.flushSoon() : YY.inputState.compositionPendingChange ? Promise.resolve().then((() => YY.observer.flush())) : setTimeout((() => {
        YY.inputState.composing < 0 && YY.docView.hasComposition && YY.update([])
      }), 50))
    }, WF.contextmenu = YY => {
      YY.inputState.lastContextMenu = Date.now()
    }, oF.beforeinput = (YY, rY) => {
      var DY, FY;
      if ("insertText" != rY.inputType && "insertCompositionText" != rY.inputType || (YY.inputState.insertingText = rY.data, YY.inputState.insertingTextAt = Date.now()), "insertReplacementText" == rY.inputType && YY.observer.editContext) {
        let FY = null === (DY = rY.dataTransfer) || void 0 === DY ? void 0 : DY.getData("text/plain"),
          AY = rY.getTargetRanges();
        if (FY && AY.length) {
          let rY = AY[0],
            DY = YY.posAtDOM(rY.startContainer, rY.startOffset),
            IY = YY.posAtDOM(rY.endContainer, rY.endOffset);
          return IF(YY, {
            from: DY,
            to: IY,
            insert: YY.state.toText(FY)
          }, null), !0
        }
      }
      let AY;
      if (TY.chrome && TY.android && (AY = uF.find((YY => YY.inputType == rY.inputType))) && (YY.observer.delayAndroidKey(AY.key, AY.keyCode), "Backspace" == AY.key || "Delete" == AY.key)) {
        let rY = (null === (FY = window.visualViewport) || void 0 === FY ? void 0 : FY.height) || 0;
        setTimeout((() => {
          var DY;
          ((null === (DY = window.visualViewport) || void 0 === DY ? void 0 : DY.height) || 0) > rY + 10 && YY.hasFocus && (YY.contentDOM.blur(), YY.focus())
        }), 100)
      }
      return TY.ios && "deleteContentForward" == rY.inputType && YY.observer.flushSoon(), TY.safari && "insertText" == rY.inputType && YY.inputState.composing >= 0 && setTimeout((() => WF.compositionend(YY, rY)), 20), !1
    };
    const CF = new Set;
    const fF = ["pre-wrap", "normal", "pre-line", "break-spaces"];
    let jF = !1;

    function hF() {
      jF = !1
    }
    class dF {
      constructor(YY) {
        this.lineWrapping = YY, this.doc = FY.K.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30
      }
      heightForGap(YY, rY) {
        let DY = this.doc.lineAt(rY).number - this.doc.lineAt(YY).number + 1;
        return this.lineWrapping && (DY += Math.max(0, Math.ceil((rY - YY - DY * this.lineLength * .5) / this.lineLength))), this.lineHeight * DY
      }
      heightForLine(YY) {
        if (!this.lineWrapping) return this.lineHeight;
        return (1 + Math.max(0, Math.ceil((YY - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight
      }
      setDoc(YY) {
        return this.doc = YY, this
      }
      mustRefreshForWrapping(YY) {
        return fF.indexOf(YY) > -1 != this.lineWrapping
      }
      mustRefreshForHeights(YY) {
        let rY = !1;
        for (let DY = 0; DY < YY.length; DY++) {
          let FY = YY[DY];
          FY < 0 ? DY++ : this.heightSamples[Math.floor(10 * FY)] || (rY = !0, this.heightSamples[Math.floor(10 * FY)] = !0)
        }
        return rY
      }
      refresh(YY, rY, DY, FY, AY, IY) {
        let RY = fF.indexOf(YY) > -1,
          OY = Math.abs(rY - this.lineHeight) > .3 || this.lineWrapping != RY || Math.abs(DY - this.charWidth) > .1;
        if (this.lineWrapping = RY, this.lineHeight = rY, this.charWidth = DY, this.textHeight = FY, this.lineLength = AY, OY) {
          this.heightSamples = {};
          for (let YY = 0; YY < IY.length; YY++) {
            let rY = IY[YY];
            rY < 0 ? YY++ : this.heightSamples[Math.floor(10 * rY)] = !0
          }
        }
        return OY
      }
    }
    class JF {
      constructor(YY, rY) {
        this.from = YY, this.heights = rY, this.index = 0
      }
      get more() {
        return this.index < this.heights.length
      }
    }
    class MF {
      constructor(YY, rY, DY, FY, AY) {
        this.from = YY, this.length = rY, this.top = DY, this.height = FY, this._content = AY
      }
      get type() {
        return "number" == typeof this._content ? zY.Text : Array.isArray(this._content) ? this._content : this._content.type
      }
      get to() {
        return this.from + this.length
      }
      get bottom() {
        return this.top + this.height
      }
      get widget() {
        return this._content instanceof jY ? this._content.widget : null
      }
      get widgetLineBreaks() {
        return "number" == typeof this._content ? this._content : 0
      }
      join(YY) {
        let rY = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(YY._content) ? YY._content : [YY]);
        return new MF(this.from, this.length + YY.length, this.top, this.height + YY.height, rY)
      }
    }
    var wF = function(YY) {
      return YY[YY.ByPos = 0] = "ByPos", YY[YY.ByHeight = 1] = "ByHeight", YY[YY.ByPosNoHeight = 2] = "ByPosNoHeight", YY
    }(wF || (wF = {}));
    const bF = .001;
    class XF {
      constructor(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.length = YY, this.height = rY, this.flags = DY
      }
      get outdated() {
        return (2 & this.flags) > 0
      }
      set outdated(YY) {
        this.flags = (YY ? 2 : 0) | -3 & this.flags
      }
      setHeight(YY) {
        this.height != YY && (Math.abs(this.height - YY) > bF && (jF = !0), this.height = YY)
      }
      replace(YY, rY, DY) {
        return XF.of(DY)
      }
      decomposeLeft(YY, rY) {
        rY.push(this)
      }
      decomposeRight(YY, rY) {
        rY.push(this)
      }
      applyChanges(YY, rY, DY, FY) {
        let AY = this,
          IY = DY.doc;
        for (let RY = FY.length - 1; RY >= 0; RY--) {
          let {
            fromA: OY,
            toA: gY,
            fromB: aY,
            toB: vY
          } = FY[RY], uY = AY.lineAt(OY, wF.ByPosNoHeight, DY.setDoc(rY), 0, 0), sY = uY.to >= gY ? uY : AY.lineAt(gY, wF.ByPosNoHeight, DY, 0, 0);
          for (vY += sY.to - gY, gY = sY.to; RY > 0 && uY.from <= FY[RY - 1].toA;) OY = FY[RY - 1].fromA, aY = FY[RY - 1].fromB, RY--, OY < uY.from && (uY = AY.lineAt(OY, wF.ByPosNoHeight, DY, 0, 0));
          aY += uY.from - OY, OY = uY.from;
          let iY = UF.build(DY.setDoc(IY), YY, aY, vY);
          AY = qF(AY, AY.replace(OY, gY, iY))
        }
        return AY.updateHeight(DY, 0)
      }
      static empty() {
        return new GF(0, 0, 0)
      }
      static of (YY) {
        if (1 == YY.length) return YY[0];
        let rY = 0,
          DY = YY.length,
          FY = 0,
          AY = 0;
        for (;;)
          if (rY == DY)
            if (FY > 2 * AY) {
              let AY = YY[rY - 1];
              AY.break ? YY.splice(--rY, 1, AY.left, null, AY.right) : YY.splice(--rY, 1, AY.left, AY.right), DY += 1 + AY.break, FY -= AY.size
            } else {
              if (!(AY > 2 * FY)) break;
              {
                let rY = YY[DY];
                rY.break ? YY.splice(DY, 1, rY.left, null, rY.right) : YY.splice(DY, 1, rY.left, rY.right), DY += 2 + rY.break, AY -= rY.size
              }
            }
        else if (FY < AY) {
          let DY = YY[rY++];
          DY && (FY += DY.size)
        } else {
          let rY = YY[--DY];
          rY && (AY += rY.size)
        }
        let IY = 0;
        return null == YY[rY - 1] ? (IY = 1, rY--) : null == YY[rY] && (IY = 1, DY++), new nF(XF.of(YY.slice(0, rY)), IY, XF.of(YY.slice(DY)))
      }
    }

    function qF(YY, rY) {
      return YY == rY ? YY : (YY.constructor != rY.constructor && (jF = !0), rY)
    }
    XF.prototype.size = 1;
    const pF = ZY.replace({});
    class kF extends XF {
      constructor(YY, rY, DY) {
        super(YY, rY), this.deco = DY, this.spaceAbove = 0
      }
      mainBlock(YY, rY) {
        return new MF(rY, this.length, YY + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0)
      }
      blockAt(YY, rY, DY, FY) {
        return this.spaceAbove && YY < DY + this.spaceAbove ? new MF(FY, 0, DY, this.spaceAbove, pF) : this.mainBlock(DY, FY)
      }
      lineAt(YY, rY, DY, FY, AY) {
        let IY = this.mainBlock(FY, AY);
        return this.spaceAbove ? this.blockAt(0, DY, FY, AY).join(IY) : IY
      }
      forEachLine(YY, rY, DY, FY, AY, IY) {
        YY <= AY + this.length && rY >= AY && IY(this.lineAt(0, wF.ByPos, DY, FY, AY))
      }
      setMeasuredHeight(YY) {
        let rY = YY.heights[YY.index++];
        rY < 0 ? (this.spaceAbove = -rY, rY = YY.heights[YY.index++]) : this.spaceAbove = 0, this.setHeight(rY)
      }
      updateHeight(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          DY = arguments.length > 3 ? arguments[3] : void 0;
        return DY && DY.from <= rY && DY.more && this.setMeasuredHeight(DY), this.outdated = !1, this
      }
      toString() {
        return `block(${this.length})`
      }
    }
    class GF extends kF {
      constructor(YY, rY, DY) {
        super(YY, rY, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = DY
      }
      mainBlock(YY, rY) {
        return new MF(rY, this.length, YY + this.spaceAbove, this.height - this.spaceAbove, this.breaks)
      }
      replace(YY, rY, DY) {
        let FY = DY[0];
        return 1 == DY.length && (FY instanceof GF || FY instanceof xF && 4 & FY.flags) && Math.abs(this.length - FY.length) < 10 ? (FY instanceof xF ? FY = new GF(FY.length, this.height, this.spaceAbove) : FY.height = this.height, this.outdated || (FY.outdated = !1), FY) : XF.of(DY)
      }
      updateHeight(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          FY = arguments.length > 3 ? arguments[3] : void 0;
        return FY && FY.from <= rY && FY.more ? this.setMeasuredHeight(FY) : (DY || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, YY.heightForLine(this.length - this.collapsed)) + this.breaks * YY.lineHeight)), this.outdated = !1, this
      }
      toString() {
        return `line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`
      }
    }
    class xF extends XF {
      constructor(YY) {
        super(YY, 0)
      }
      heightMetrics(YY, rY) {
        let DY, FY = YY.doc.lineAt(rY).number,
          AY = YY.doc.lineAt(rY + this.length).number,
          IY = AY - FY + 1,
          RY = 0;
        if (YY.lineWrapping) {
          let rY = Math.min(this.height, YY.lineHeight * IY);
          DY = rY / IY, this.length > IY + 1 && (RY = (this.height - rY) / (this.length - IY - 1))
        } else DY = this.height / IY;
        return {
          firstLine: FY,
          lastLine: AY,
          perLine: DY,
          perChar: RY
        }
      }
      blockAt(YY, rY, DY, FY) {
        let {
          firstLine: AY,
          lastLine: IY,
          perLine: RY,
          perChar: OY
        } = this.heightMetrics(rY, FY);
        if (rY.lineWrapping) {
          let AY = FY + (YY < rY.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (YY - DY) / this.height)) * this.length)),
            IY = rY.doc.lineAt(AY),
            gY = RY + IY.length * OY,
            aY = Math.max(DY, YY - gY / 2);
          return new MF(IY.from, IY.length, aY, gY, 0)
        } {
          let FY = Math.max(0, Math.min(IY - AY, Math.floor((YY - DY) / RY))),
            {
              from: OY,
              length: gY
            } = rY.doc.line(AY + FY);
          return new MF(OY, gY, DY + RY * FY, RY, 0)
        }
      }
      lineAt(YY, rY, DY, FY, AY) {
        if (rY == wF.ByHeight) return this.blockAt(YY, DY, FY, AY);
        if (rY == wF.ByPosNoHeight) {
          let {
            from: rY,
            to: FY
          } = DY.doc.lineAt(YY);
          return new MF(rY, FY - rY, 0, 0, 0)
        }
        let {
          firstLine: IY,
          perLine: RY,
          perChar: OY
        } = this.heightMetrics(DY, AY), gY = DY.doc.lineAt(YY), aY = RY + gY.length * OY, vY = gY.number - IY, uY = FY + RY * vY + OY * (gY.from - AY - vY);
        return new MF(gY.from, gY.length, Math.max(FY, Math.min(uY, FY + this.height - aY)), aY, 0)
      }
      forEachLine(YY, rY, DY, FY, AY, IY) {
        YY = Math.max(YY, AY), rY = Math.min(rY, AY + this.length);
        let {
          firstLine: RY,
          perLine: OY,
          perChar: gY
        } = this.heightMetrics(DY, AY);
        for (let aY = YY, vY = FY; aY <= rY;) {
          let rY = DY.doc.lineAt(aY);
          if (aY == YY) {
            let DY = rY.number - RY;
            vY += OY * DY + gY * (YY - AY - DY)
          }
          let FY = OY + gY * rY.length;
          IY(new MF(rY.from, rY.length, vY, FY, 0)), vY += FY, aY = rY.to + 1
        }
      }
      replace(YY, rY, DY) {
        let FY = this.length - rY;
        if (FY > 0) {
          let YY = DY[DY.length - 1];
          YY instanceof xF ? DY[DY.length - 1] = new xF(YY.length + FY) : DY.push(null, new xF(FY - 1))
        }
        if (YY > 0) {
          let rY = DY[0];
          rY instanceof xF ? DY[0] = new xF(YY + rY.length) : DY.unshift(new xF(YY - 1), null)
        }
        return XF.of(DY)
      }
      decomposeLeft(YY, rY) {
        rY.push(new xF(YY - 1), null)
      }
      decomposeRight(YY, rY) {
        rY.push(null, new xF(this.length - YY - 1))
      }
      updateHeight(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          FY = arguments.length > 3 ? arguments[3] : void 0,
          AY = rY + this.length;
        if (FY && FY.from <= rY + this.length && FY.more) {
          let DY = [],
            IY = Math.max(rY, FY.from),
            RY = -1;
          for (FY.from > rY && DY.push(new xF(FY.from - rY - 1).updateHeight(YY, rY)); IY <= AY && FY.more;) {
            let rY = YY.doc.lineAt(IY).length;
            DY.length && DY.push(null);
            let AY = FY.heights[FY.index++],
              OY = 0;
            AY < 0 && (OY = -AY, AY = FY.heights[FY.index++]), -1 == RY ? RY = AY : Math.abs(AY - RY) >= bF && (RY = -2);
            let gY = new GF(rY, AY, OY);
            gY.outdated = !1, DY.push(gY), IY += rY + 1
          }
          IY <= AY && DY.push(null, new xF(AY - IY).updateHeight(YY, IY));
          let OY = XF.of(DY);
          return (RY < 0 || Math.abs(OY.height - this.height) >= bF || Math.abs(RY - this.heightMetrics(YY, rY).perLine) >= bF) && (jF = !0), qF(this, OY)
        }
        return (DY || this.outdated) && (this.setHeight(YY.heightForGap(rY, rY + this.length)), this.outdated = !1), this
      }
      toString() {
        return `gap(${this.length})`
      }
    }
    class nF extends XF {
      constructor(YY, rY, DY) {
        super(YY.length + rY + DY.length, YY.height + DY.height, rY | (YY.outdated || DY.outdated ? 2 : 0)), this.left = YY, this.right = DY, this.size = YY.size + DY.size
      }
      get break() {
        return 1 & this.flags
      }
      blockAt(YY, rY, DY, FY) {
        let AY = DY + this.left.height;
        return YY < AY ? this.left.blockAt(YY, rY, DY, FY) : this.right.blockAt(YY, rY, AY, FY + this.left.length + this.break)
      }
      lineAt(YY, rY, DY, FY, AY) {
        let IY = FY + this.left.height,
          RY = AY + this.left.length + this.break,
          OY = rY == wF.ByHeight ? YY < IY : YY < RY,
          gY = OY ? this.left.lineAt(YY, rY, DY, FY, AY) : this.right.lineAt(YY, rY, DY, IY, RY);
        if (this.break || (OY ? gY.to < RY : gY.from > RY)) return gY;
        let aY = rY == wF.ByPosNoHeight ? wF.ByPosNoHeight : wF.ByPos;
        return OY ? gY.join(this.right.lineAt(RY, aY, DY, IY, RY)) : this.left.lineAt(RY, aY, DY, FY, AY).join(gY)
      }
      forEachLine(YY, rY, DY, FY, AY, IY) {
        let RY = FY + this.left.height,
          OY = AY + this.left.length + this.break;
        if (this.break) YY < OY && this.left.forEachLine(YY, rY, DY, FY, AY, IY), rY >= OY && this.right.forEachLine(YY, rY, DY, RY, OY, IY);
        else {
          let gY = this.lineAt(OY, wF.ByPos, DY, FY, AY);
          YY < gY.from && this.left.forEachLine(YY, gY.from - 1, DY, FY, AY, IY), gY.to >= YY && gY.from <= rY && IY(gY), rY > gY.to && this.right.forEachLine(gY.to + 1, rY, DY, RY, OY, IY)
        }
      }
      replace(YY, rY, DY) {
        let FY = this.left.length + this.break;
        if (rY < FY) return this.balanced(this.left.replace(YY, rY, DY), this.right);
        if (YY > this.left.length) return this.balanced(this.left, this.right.replace(YY - FY, rY - FY, DY));
        let AY = [];
        YY > 0 && this.decomposeLeft(YY, AY);
        let IY = AY.length;
        for (let RY of DY) AY.push(RY);
        if (YY > 0 && PF(AY, IY - 1), rY < this.length) {
          let YY = AY.length;
          this.decomposeRight(rY, AY), PF(AY, YY)
        }
        return XF.of(AY)
      }
      decomposeLeft(YY, rY) {
        let DY = this.left.length;
        if (YY <= DY) return this.left.decomposeLeft(YY, rY);
        rY.push(this.left), this.break && (DY++, YY >= DY && rY.push(null)), YY > DY && this.right.decomposeLeft(YY - DY, rY)
      }
      decomposeRight(YY, rY) {
        let DY = this.left.length,
          FY = DY + this.break;
        if (YY >= FY) return this.right.decomposeRight(YY - FY, rY);
        YY < DY && this.left.decomposeRight(YY, rY), this.break && YY < FY && rY.push(null), rY.push(this.right)
      }
      balanced(YY, rY) {
        return YY.size > 2 * rY.size || rY.size > 2 * YY.size ? XF.of(this.break ? [YY, null, rY] : [YY, rY]) : (this.left = qF(this.left, YY), this.right = qF(this.right, rY), this.setHeight(YY.height + rY.height), this.outdated = YY.outdated || rY.outdated, this.size = YY.size + rY.size, this.length = YY.length + this.break+rY.length, this)
      }
      updateHeight(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          FY = arguments.length > 3 ? arguments[3] : void 0,
          {
            left: AY,
            right: IY
          } = this,
          RY = rY + AY.length + this.break,
          OY = null;
        return FY && FY.from <= rY + AY.length && FY.more ? OY = AY = AY.updateHeight(YY, rY, DY, FY) : AY.updateHeight(YY, rY, DY), FY && FY.from <= RY + IY.length && FY.more ? OY = IY = IY.updateHeight(YY, RY, DY, FY) : IY.updateHeight(YY, RY, DY), OY ? this.balanced(AY, IY) : (this.height = this.left.height + this.right.height, this.outdated = !1, this)
      }
      toString() {
        return this.left + (this.break ? " " : "-") + this.right
      }
    }

    function PF(YY, rY) {
      let DY, FY;
      null == YY[rY] && (DY = YY[rY - 1]) instanceof xF && (FY = YY[rY + 1]) instanceof xF && YY.splice(rY - 1, 3, new xF(DY.length + 1 + FY.length))
    }
    class UF {
      constructor(YY, rY) {
        this.pos = YY, this.oracle = rY, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = YY
      }
      get isCovered() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering
      }
      span(YY, rY) {
        if (this.lineStart > -1) {
          let YY = Math.min(rY, this.lineEnd),
            DY = this.nodes[this.nodes.length - 1];
          DY instanceof GF ? DY.length += YY - this.pos : (YY > this.pos || !this.isCovered) && this.nodes.push(new GF(YY - this.pos, -1, 0)), this.writtenTo = YY, rY > YY && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1)
        }
        this.pos = rY
      }
      point(YY, rY, DY) {
        if (YY < rY || DY.heightRelevant) {
          let FY = DY.widget ? DY.widget.estimatedHeight : 0,
            AY = DY.widget ? DY.widget.lineBreaks : 0;
          FY < 0 && (FY = this.oracle.lineHeight);
          let IY = rY - YY;
          DY.block ? this.VYY(new kF(IY, FY, DY)) : (IY || AY || FY >= 5) && this.addLineDeco(FY, AY, IY)
        } else rY > YY && this.span(YY, rY);
        this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
      }
      enterLine() {
        if (this.lineStart > -1) return;
        let {
          from: YY,
          to: rY
        } = this.oracle.doc.lineAt(this.pos);
        this.lineStart = YY, this.lineEnd = rY, this.writtenTo < YY && ((this.writtenTo < YY - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, YY - 1)), this.nodes.push(null)), this.pos > YY && this.nodes.push(new GF(this.pos - YY, -1, 0)), this.writtenTo = this.pos
      }
      blankContent(YY, rY) {
        let DY = new xF(rY - YY);
        return this.oracle.doc.lineAt(YY).to == rY && (DY.flags |= 4), DY
      }
      ensureLine() {
        this.enterLine();
        let YY = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (YY instanceof GF) return YY;
        let rY = new GF(0, -1, 0);
        return this.nodes.push(rY), rY
      }
      VYY(YY) {
        this.enterLine();
        let rY = YY.deco;
        rY && rY.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(YY), this.writtenTo = this.pos = this.pos + YY.length, rY && rY.endSide > 0 && (this.covering = YY)
      }
      addLineDeco(YY, rY, DY) {
        let FY = this.ensureLine();
        FY.length += DY, FY.collapsed += DY, FY.widgetHeight = Math.max(FY.widgetHeight, YY), FY.breaks += rY, this.writtenTo = this.pos = this.pos + DY
      }
      finish(YY) {
        let rY = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
        !(this.lineStart > -1) || rY instanceof GF || this.isCovered ? (this.writtenTo < this.pos || null == rY) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new GF(0, -1, 0));
        let DY = YY;
        for (let FY of this.nodes) FY instanceof GF && FY.updateHeight(this.oracle, DY), DY += FY ? FY.length : 1;
        return this.nodes
      }
      static build(YY, rY, DY, AY) {
        let IY = new UF(DY, YY);
        return FY.B.spans(rY, DY, AY, IY, 0), IY.finish(DY)
      }
    }
    class LF {
      constructor() {
        this.changes = []
      }
      compareRange() {}
      comparePoint(YY, rY, DY, FY) {
        (YY < rY || DY && DY.heightRelevant || FY && FY.heightRelevant) && dY(YY, rY, this.changes, 5)
      }
    }

    function tF(YY, rY) {
      let DY = YY.getBoundingClientRect(),
        FY = YY.ownerDocument,
        AY = FY.defaultView || window,
        IY = Math.max(0, DY.left),
        RY = Math.min(AY.innerWidth, DY.right),
        OY = Math.max(0, DY.top),
        gY = Math.min(AY.innerHeight, DY.bottom);
      for (let aY = YY.parentNode; aY && aY != FY.body;)
        if (1 == aY.nodeType) {
          let rY = aY,
            DY = window.getComputedStyle(rY);
          if ((rY.scrollHeight > rY.clientHeight || rY.scrollWidth > rY.clientWidth) && "visible" != DY.overflow) {
            let DY = rY.getBoundingClientRect();
            IY = Math.max(IY, DY.left), RY = Math.min(RY, DY.right), OY = Math.max(OY, DY.top), gY = Math.min(aY == YY.parentNode ? AY.innerHeight : gY, DY.bottom)
          }
          aY = "absolute" == DY.position || "fixed" == DY.position ? rY.offsetParent : rY.parentNode
        } else {
          if (11 != aY.nodeType) break;
          aY = aY.host
        } return {
        left: IY - DY.left,
        right: Math.max(IY, RY) - DY.left,
        top: OY - (DY.top + rY),
        bottom: Math.max(OY, gY) - (DY.top + rY)
      }
    }

    function YA(YY, rY) {
      let DY = YY.getBoundingClientRect();
      return {
        left: 0,
        right: DY.right - DY.left,
        top: rY,
        bottom: DY.bottom - (DY.top + rY)
      }
    }
    class rA {
      constructor(YY, rY, DY, FY) {
        this.from = YY, this.to = rY, this.size = DY, this.displaySize = FY
      }
      static same(YY, rY) {
        if (YY.length != rY.length) return !1;
        for (let DY = 0; DY < YY.length; DY++) {
          let FY = YY[DY],
            AY = rY[DY];
          if (FY.from != AY.from || FY.to != AY.to || FY.size != AY.size) return !1
        }
        return !0
      }
      draw(YY, rY) {
        return ZY.replace({
          widget: new DA(this.displaySize * (rY ? YY.scaleY : YY.scaleX), rY)
        }).range(this.from, this.to)
      }
    }
    class DA extends HY {
      constructor(YY, rY) {
        super(), this.size = YY, this.vertical = rY
      }
      eq(YY) {
        return YY.size == this.size && YY.vertical == this.vertical
      }
      toDOM() {
        let YY = document.createElement("div");
        return this.vertical ? YY.style.height = this.size + "px" : (YY.style.width = this.size + "px", YY.style.height = "2px", YY.style.display = "inline-block"), YY
      }
      get estimatedHeight() {
        return this.vertical ? this.size : -1
      }
    }
    class FA {
      constructor(YY, rY) {
        this.view = YY, this.state = rY, this.pixelViewport = {
          left: 0,
          right: window.innerWidth,
          top: 0,
          bottom: 0
        }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = OA, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = ar.LTR, this.B_ = [], this.mustEnforceCursorAssoc = !1;
        let DY = rY.facet(tr).some((YY => "function" != typeof YY && "cm-lineWrapping" == YY.class));
        this.heightOracle = new dF(DY), this.stateDeco = gA(rY), this.heightMap = XF.empty().applyChanges(this.stateDeco, FY.K.empty, this.heightOracle.setDoc(rY.doc), [new aD(0, 0, 0, rY.doc.length)]);
        for (let FY = 0; FY < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); FY++);
        this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = ZY.set(this.lineGaps.map((YY => YY.draw(this, !1)))), this.scrollParent = YY.scrollDOM, this.computeVisibleRanges()
      }
      updateForViewport() {
        let YY = [this.viewport],
          {
            main: rY
          } = this.state.selection;
        for (let DY = 0; DY <= 1; DY++) {
          let FY = DY ? rY.head : rY.anchor;
          if (!YY.some((YY => {
              let {
                from: rY,
                to: DY
              } = YY;
              return FY >= rY && FY <= DY
            }))) {
            let {
              from: rY,
              to: DY
            } = this.lineBlockAt(FY);
            YY.push(new AA(rY, DY))
          }
        }
        return this.viewports = YY.sort(((YY, rY) => YY.from - rY.from)), this.updateScaler()
      }
      updateScaler() {
        let YY = this.scaler;
        return this.scaler = this.heightMap.height <= 7e6 ? OA : new aA(this.heightOracle, this.heightMap, this.viewports), YY.eq(this.scaler) ? 0 : 2
      }
      updateViewportLines() {
        this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (YY => {
          this.viewportLines.push(vA(YY, this.scaler))
        }))
      }
      update(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.state = YY.state;
        let DY = this.stateDeco;
        this.stateDeco = gA(this.state);
        let AY = YY.changedRanges,
          IY = aD.extendWithRanges(AY, function(YY, rY, DY) {
            let AY = new LF;
            return FY.B.compare(YY, rY, DY, AY, 0), AY.changes
          }(DY, this.stateDeco, YY ? YY.changes : FY.ChangeSet.empty(this.state.doc.length))),
          RY = this.heightMap.height,
          OY = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
        hF(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, YY.startState.doc, this.heightOracle.setDoc(this.state.doc), IY), (this.heightMap.height != RY || jF) && (YY.flags |= 2), OY ? (this.scrollAnchorPos = YY.changes.mapPos(OY.from, -1), this.scrollAnchorHeight = OY.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = RY);
        let gY = IY.length ? this.mapViewport(this.viewport, YY.changes) : this.viewport;
        (rY && (rY.range.head < gY.from || rY.range.head > gY.to) || !this.viewportIsAppropriate(gY)) && (gY = this.getViewport(0, rY));
        let aY = gY.from != this.viewport.from || gY.to != this.viewport.to;
        this.viewport = gY, YY.flags |= this.updateForViewport(), (aY || !YY.changes.empty || 2 & YY.flags) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, YY.changes))), YY.flags |= this.computeVisibleRanges(YY.changes), rY && (this.scrollTarget = rY), !this.mustEnforceCursorAssoc && (YY.selectionSet || YY.focusChanged) && YY.view.lineWrapping && YY.state.selection.main.empty && YY.state.selection.main.assoc && !YY.state.facet(wr) && (this.mustEnforceCursorAssoc = !0)
      }
      measure() {
        let {
          view: YY
        } = this, rY = YY.contentDOM, DY = window.getComputedStyle(rY), AY = this.heightOracle, IY = DY.whiteSpace;
        this.defaultTextDirection = "rtl" == DY.direction ? ar.RTL : ar.LTR;
        let RY = this.heightOracle.mustRefreshForWrapping(IY) || "refresh" === this.mustMeasureContent,
          OY = rY.getBoundingClientRect(),
          gY = RY || this.mustMeasureContent || this.contentDOMHeight != OY.height;
        this.contentDOMHeight = OY.height, this.mustMeasureContent = !1;
        let aY = 0,
          vY = 0;
        if (OY.width && OY.height) {
          let {
            scaleX: YY,
            scaleY: DY
          } = UY(rY, OY);
          (YY > .005 && Math.abs(this.scaleX - YY) > .005 || DY > .005 && Math.abs(this.scaleY - DY) > .005) && (this.scaleX = YY, this.scaleY = DY, aY |= 16, RY = gY = !0)
        }
        let uY = (parseInt(DY.paddingTop) || 0) * this.scaleY,
          sY = (parseInt(DY.paddingBottom) || 0) * this.scaleY;
        this.paddingTop == uY && this.paddingBottom == sY || (this.paddingTop = uY, this.paddingBottom = sY, aY |= 18), this.editorWidth != YY.scrollDOM.clientWidth && (AY.lineWrapping && (gY = !0), this.editorWidth = YY.scrollDOM.clientWidth, aY |= 16);
        let iY = LY(this.view.contentDOM, !1).y;
        iY != this.scrollParent && (this.scrollParent = iY, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
        let yY = this.getScrollOffset();
        this.scrollOffset != yY && (this.scrollAnchorHeight = -1, this.scrollOffset = yY), this.scrolledToBottom = Ir(this.scrollParent || YY.win);
        let QY = (this.printing ? YA : tF)(rY, this.paddingTop),
          oY = QY.top - this.pixelViewport.top,
          WY = QY.bottom - this.pixelViewport.bottom;
        this.pixelViewport = QY;
        let EY = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
        if (EY != this.inView && (this.inView = EY, EY && (gY = !0)), !this.inView && !this.scrollTarget && ! function(YY) {
            let rY = YY.getBoundingClientRect(),
              DY = YY.ownerDocument.defaultView || window;
            return rY.left < DY.innerWidth && rY.right > 0 && rY.top < DY.innerHeight && rY.bottom > 0
          }(YY.dom)) return 0;
        let mY = OY.width;
        if (this.contentDOMWidth == mY && this.editorHeight == YY.scrollDOM.clientHeight || (this.contentDOMWidth = OY.width, this.editorHeight = YY.scrollDOM.clientHeight, aY |= 16), gY) {
          let rY = YY.docView.measureVisibleLineHeights(this.viewport);
          if (AY.mustRefreshForHeights(rY) && (RY = !0), RY || AY.lineWrapping && Math.abs(mY - this.contentDOMWidth) > AY.charWidth) {
            let {
              lineHeight: DY,
              charWidth: FY,
              textHeight: OY
            } = YY.docView.measureTextSize();
            RY = DY > 0 && AY.refresh(IY, DY, FY, OY, Math.max(5, mY / FY), rY), RY && (YY.docView.minWidth = 0, aY |= 16)
          }
          oY > 0 && WY > 0 ? vY = Math.max(oY, WY) : oY < 0 && WY < 0 && (vY = Math.min(oY, WY)), hF();
          for (let DY of this.viewports) {
            let IY = DY.from == this.viewport.from ? rY : YY.docView.measureVisibleLineHeights(DY);
            this.heightMap = (RY ? XF.empty().applyChanges(this.stateDeco, FY.K.empty, this.heightOracle, [new aD(0, 0, 0, YY.state.doc.length)]) : this.heightMap).updateHeight(AY, 0, RY, new JF(DY.from, IY))
          }
          jF && (aY |= 2)
        }
        let VY = !this.viewportIsAppropriate(this.viewport, vY) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
        return VY && (2 & aY && (aY |= this.updateScaler()), this.viewport = this.getViewport(vY, this.scrollTarget), aY |= this.updateForViewport()), (2 & aY || VY) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(RY ? [] : this.lineGaps, YY)), aY |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, YY.docView.enforceCursorAssoc()), aY
      }
      get visibleTop() {
        return this.scaler.fromDOM(this.pixelViewport.top)
      }
      get visibleBottom() {
        return this.scaler.fromDOM(this.pixelViewport.bottom)
      }
      getViewport(YY, rY) {
        let DY = .5 - Math.max(-.5, Math.min(.5, YY / 1e3 / 2)),
          FY = this.heightMap,
          AY = this.heightOracle,
          {
            visibleTop: IY,
            visibleBottom: RY
          } = this,
          OY = new AA(FY.lineAt(IY - 1e3 * DY, wF.ByHeight, AY, 0, 0).from, FY.lineAt(RY + 1e3 * (1 - DY), wF.ByHeight, AY, 0, 0).to);
        if (rY) {
          let {
            head: YY
          } = rY.range;
          if (YY < OY.from || YY > OY.to) {
            let DY, IY = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
              RY = FY.lineAt(YY, wF.ByPos, AY, 0, 0);
            DY = "center" == rY.y ? (RY.top + RY.bottom) / 2 - IY / 2 : "start" == rY.y || "nearest" == rY.y && YY < OY.from ? RY.top : RY.bottom - IY, OY = new AA(FY.lineAt(DY - 500, wF.ByHeight, AY, 0, 0).from, FY.lineAt(DY + IY + 500, wF.ByHeight, AY, 0, 0).to)
          }
        }
        return OY
      }
      mapViewport(YY, rY) {
        let DY = rY.mapPos(YY.from, -1),
          FY = rY.mapPos(YY.to, 1);
        return new AA(this.heightMap.lineAt(DY, wF.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(FY, wF.ByPos, this.heightOracle, 0, 0).to)
      }
      viewportIsAppropriate(YY) {
        let {
          from: rY,
          to: DY
        } = YY, FY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!this.inView) return !0;
        let {
          top: AY
        } = this.heightMap.lineAt(rY, wF.ByPos, this.heightOracle, 0, 0), {
          bottom: IY
        } = this.heightMap.lineAt(DY, wF.ByPos, this.heightOracle, 0, 0), {
          visibleTop: RY,
          visibleBottom: OY
        } = this;
        return (0 == rY || AY <= RY - Math.max(10, Math.min(-FY, 250))) && (DY == this.state.doc.length || IY >= OY + Math.max(10, Math.min(FY, 250))) && AY > RY - 2e3 && IY < OY + 2e3
      }
      mapLineGaps(YY, rY) {
        if (!YY.length || rY.empty) return YY;
        let DY = [];
        for (let FY of YY) rY.touchesRange(FY.from, FY.to) || DY.push(new rA(rY.mapPos(FY.from), rY.mapPos(FY.to), FY.size, FY.displaySize));
        return DY
      }
      ensureLineGaps(YY, rY) {
        let DY = this.heightOracle.lineWrapping,
          AY = DY ? 1e4 : 2e3,
          IY = AY >> 1,
          RY = AY << 1;
        if (this.defaultTextDirection != ar.LTR && !DY) return [];
        let OY = [],
          gY = (AY, RY, aY, vY) => {
            if (RY - AY < IY) return;
            let uY = this.state.selection.main,
              sY = [uY.from];
            uY.empty || sY.push(uY.to);
            for (let YY of sY)
              if (YY > AY && YY < RY) return gY(AY, YY - 10, aY, vY), void gY(YY + 10, RY, aY, vY);
            let iY = function(YY, rY) {
              for (let DY of YY)
                if (rY(DY)) return DY;
              return
            }(YY, (YY => YY.from >= aY.from && YY.to <= aY.to && Math.abs(YY.from - AY) < IY && Math.abs(YY.to - RY) < IY && !sY.some((rY => YY.from < rY && YY.to > rY))));
            if (!iY) {
              if (RY < aY.to && rY && DY && rY.B_.some((YY => YY.from <= RY && YY.to >= RY))) {
                let YY = rY.moveToLineBoundary(FY.n.cursor(RY), !1, !0).head;
                YY > AY && (RY = YY)
              }
              let YY = this.gapSize(aY, AY, RY, vY);
              iY = new rA(AY, RY, YY, DY || YY < 2e6 ? YY : 2e6)
            }
            OY.push(iY)
          },
          aY = rY => {
            if (rY.length < RY || rY.type != zY.Text) return;
            let IY = function(YY, rY, DY) {
              let AY = [],
                IY = YY,
                RY = 0;
              FY.B.spans(DY, YY, rY, {
                span() {},
                point(YY, rY) {
                  YY > IY && (AY.push({
                    from: IY,
                    to: YY
                  }), RY += YY - IY), IY = rY
                }
              }, 20), IY < rY && (AY.push({
                from: IY,
                to: rY
              }), RY += rY - IY);
              return {
                total: RY,
                ws: AY
              }
            }(rY.from, rY.to, this.stateDeco);
            if (IY.total < RY) return;
            let OY, aY, vY = this.scrollTarget ? this.scrollTarget.range.head : null;
            if (DY) {
              let YY, DY, FY = AY / this.heightOracle.lineLength * this.heightOracle.lineHeight;
              if (null != vY) {
                let AY = RA(IY, vY),
                  RY = ((this.visibleBottom - this.visibleTop) / 2 + FY) / rY.height;
                YY = AY - RY, DY = AY + RY
              } else YY = (this.visibleTop - rY.top - FY) / rY.height, DY = (this.visibleBottom - rY.top + FY) / rY.height;
              OY = IA(IY, YY), aY = IA(IY, DY)
            } else {
              let DY = IY.total * this.heightOracle.charWidth,
                FY = AY * this.heightOracle.charWidth,
                RY = 0;
              if (DY > 2e6)
                for (let AY of YY) AY.from >= rY.from && AY.from < rY.to && AY.size != AY.displaySize && AY.from * this.heightOracle.charWidth + RY < this.pixelViewport.left && (RY = AY.size - AY.displaySize);
              let gY, uY, sY = this.pixelViewport.left + RY,
                iY = this.pixelViewport.right + RY;
              if (null != vY) {
                let YY = RA(IY, vY),
                  rY = ((iY - sY) / 2 + FY) / DY;
                gY = YY - rY, uY = YY + rY
              } else gY = (sY - FY) / DY, uY = (iY + FY) / DY;
              OY = IA(IY, gY), aY = IA(IY, uY)
            }
            OY > rY.from && gY(rY.from, OY, rY, IY), aY < rY.to && gY(aY, rY.to, rY, IY)
          };
        for (let FY of this.viewportLines) Array.isArray(FY.type) ? FY.type.forEach(aY) : aY(FY);
        return OY
      }
      gapSize(YY, rY, DY, FY) {
        let AY = RA(FY, DY) - RA(FY, rY);
        return this.heightOracle.lineWrapping ? YY.height * AY : FY.total * this.heightOracle.charWidth * AY
      }
      updateLineGaps(YY) {
        rA.same(YY, this.lineGaps) || (this.lineGaps = YY, this.lineGapDeco = ZY.set(YY.map((YY => YY.draw(this, this.heightOracle.lineWrapping)))))
      }
      computeVisibleRanges(YY) {
        let rY = this.stateDeco;
        this.lineGaps.length && (rY = rY.concat(this.lineGapDeco));
        let DY = [];
        FY.B.spans(rY, this.viewport.from, this.viewport.to, {
          span(YY, rY) {
            DY.push({
              from: YY,
              to: rY
            })
          },
          point() {}
        }, 20);
        let AY = 0;
        if (DY.length != this.B_.length) AY = 12;
        else
          for (let FY = 0; FY < DY.length && !(8 & AY); FY++) {
            let rY = this.B_[FY],
              IY = DY[FY];
            rY.from == IY.from && rY.to == IY.to || (AY |= 4, YY && YY.mapPos(rY.from, -1) == IY.from && YY.mapPos(rY.to, 1) == IY.to || (AY |= 8))
          }
        return this.B_ = DY, AY
      }
      lineBlockAt(YY) {
        return YY >= this.viewport.from && YY <= this.viewport.to && this.viewportLines.find((rY => rY.from <= YY && rY.to >= YY)) || vA(this.heightMap.lineAt(YY, wF.ByPos, this.heightOracle, 0, 0), this.scaler)
      }
      lineBlockAtHeight(YY) {
        return YY >= this.viewportLines[0].top && YY <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((rY => rY.top <= YY && rY.bottom >= YY)) || vA(this.heightMap.lineAt(this.scaler.fromDOM(YY), wF.ByHeight, this.heightOracle, 0, 0), this.scaler)
      }
      getScrollOffset() {
        return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY
      }
      scrollAnchorAt(YY) {
        let rY = this.lineBlockAtHeight(YY + 8);
        return rY.from >= this.viewport.from || this.viewportLines[0].top - YY > 200 ? rY : this.viewportLines[0]
      }
      elementAtHeight(YY) {
        return vA(this.heightMap.blockAt(this.scaler.fromDOM(YY), this.heightOracle, 0, 0), this.scaler)
      }
      get docHeight() {
        return this.scaler.toDOM(this.heightMap.height)
      }
      get contentHeight() {
        return this.docHeight + this.paddingTop + this.paddingBottom
      }
    }
    class AA {
      constructor(YY, rY) {
        this.from = YY, this.to = rY
      }
    }

    function IA(YY, rY) {
      let {
        total: DY,
        ws: FY
      } = YY;
      if (rY <= 0) return FY[0].from;
      if (rY >= 1) return FY[FY.length - 1].to;
      let AY = Math.floor(DY * rY);
      for (let IY = 0;; IY++) {
        let {
          from: YY,
          to: rY
        } = FY[IY], DY = rY - YY;
        if (AY <= DY) return YY + AY;
        AY -= DY
      }
    }

    function RA(YY, rY) {
      let DY = 0;
      for (let {
          from: FY,
          to: AY
        }
        of YY.ws) {
        if (rY <= AY) {
          DY += rY - FY;
          break
        }
        DY += AY - FY
      }
      return DY / YY.total
    }
    const OA = {
      toDOM: YY => YY,
      fromDOM: YY => YY,
      scale: 1,
      eq(YY) {
        return YY == this
      }
    };

    function gA(YY) {
      let rY = YY.facet(YD).filter((YY => "function" != typeof YY)),
        DY = YY.facet(DD).filter((YY => "function" != typeof YY));
      return DY.length && rY.push(FY.B.join(DY)), rY
    }
    class aA {
      constructor(YY, rY, DY) {
        let FY = 0,
          AY = 0,
          IY = 0;
        this.viewports = DY.map((DY => {
          let {
            from: AY,
            to: IY
          } = DY, RY = rY.lineAt(AY, wF.ByPos, YY, 0, 0).top, OY = rY.lineAt(IY, wF.ByPos, YY, 0, 0).bottom;
          return FY += OY - RY, {
            from: AY,
            to: IY,
            top: RY,
            bottom: OY,
            domTop: 0,
            domBottom: 0
          }
        })), this.scale = (7e6 - FY) / (rY.height - FY);
        for (let RY of this.viewports) RY.domTop = IY + (RY.top - AY) * this.scale, IY = RY.domBottom = RY.domTop + (RY.bottom - RY.top), AY = RY.bottom
      }
      toDOM(YY) {
        for (let rY = 0, DY = 0, FY = 0;; rY++) {
          let AY = rY < this.viewports.length ? this.viewports[rY] : null;
          if (!AY || YY < AY.top) return FY + (YY - DY) * this.scale;
          if (YY <= AY.bottom) return AY.domTop + (YY - AY.top);
          DY = AY.bottom, FY = AY.domBottom
        }
      }
      fromDOM(YY) {
        for (let rY = 0, DY = 0, FY = 0;; rY++) {
          let AY = rY < this.viewports.length ? this.viewports[rY] : null;
          if (!AY || YY < AY.domTop) return DY + (YY - FY) / this.scale;
          if (YY <= AY.domBottom) return AY.top + (YY - AY.domTop);
          DY = AY.bottom, FY = AY.domBottom
        }
      }
      eq(YY) {
        return YY instanceof aA && (this.scale == YY.scale && this.viewports.length == YY.viewports.length && this.viewports.every(((rY, DY) => rY.from == YY.viewports[DY].from && rY.to == YY.viewports[DY].to)))
      }
    }

    function vA(YY, rY) {
      if (1 == rY.scale) return YY;
      let DY = rY.toDOM(YY.top),
        FY = rY.toDOM(YY.bottom);
      return new MF(YY.from, YY.length, DY, FY - DY, Array.isArray(YY._content) ? YY._content.map((YY => vA(YY, rY))) : YY._content)
    }
    const uA = FY.r.define({
        combine: YY => YY.join(" ")
      }),
      sA = FY.r.define({
        combine: YY => YY.indexOf(!0) > -1
      }),
      iA = AY.e.newName(),
      yA = AY.e.newName(),
      QA = AY.e.newName(),
      oA = {
        "&light": "." + yA,
        "&dark": "." + QA
      };

    function WA(YY, rY, DY) {
      return new AY.e(rY, {
        finish: rY => /&/.test(rY) ? rY.replace(/&\w*/, (rY => {
          if ("&" == rY) return YY;
          if (!DY || !DY[rY]) throw new RangeError(`Unsupported selector: ${rY}`);
          return DY[rY]
        })) : YY + " " + rY
      })
    }
    const EA = WA("." + iA, {
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
      }, oA),
      mA = {
        childList: !0,
        characterData: !0,
        subtree: !0,
        attributes: !0,
        characterDataOldValue: !0
      },
      VA = TY.ie && TY.ie_version <= 11;
    class SA {
      constructor(YY) {
        this.view = YY, this.active = !1, this.editContext = null, this.selectionRange = new tY, this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = YY.contentDOM, this.observer = new MutationObserver((rY => {
          for (let YY of rY) this.queue.push(YY);
          (TY.ie && TY.ie_version <= 11 || TY.ios && YY.composing) && rY.some((YY => "childList" == YY.type && YY.removedNodes.length || "characterData" == YY.type && YY.oldValue.length > YY.target.nodeValue.length)) ? this.flushSoon() : this.flush()
        })), !window.EditContext || !TY.android || !1 === YY.constructor.EDIT_CONTEXT || TY.chrome && TY.chrome_version < 126 || (this.editContext = new eA(YY), YY.state.facet(Gr) && (YY.contentDOM.editContext = this.editContext.editContext)), VA && (this.onCharData = YY => {
          this.queue.push({
            target: YY.target,
            type: "characterData",
            oldValue: YY.prevValue
          }), this.flushSoon()
        }), this.onSelectionChange = this.onSelectionChange.bind(this), this.QE = this.QE.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver((() => {
          var YY;
          (null === (YY = this.view.docView) || void 0 === YY ? void 0 : YY.lastUpdate) < Date.now() - 75 && this.QE()
        })), this.resizeScroll.observe(YY.scrollDOM)), this.addWindowListeners(this.win = YY.win), this.start(), "function" == typeof IntersectionObserver && (this.intersection = new IntersectionObserver((YY => {
          this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), YY.length > 0 && YY[YY.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")))
        }), {
          threshold: [0, .001]
        }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((YY => {
          YY.length > 0 && YY[YY.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"))
        }), {})), this.listenForScroll(), this.readSelectionRange()
      }
      onScrollChanged(YY) {
        this.view.inputState.runHandlers("scroll", YY), this.intersecting && this.view.measure()
      }
      onScroll(YY) {
        this.intersecting && this.flush(!1), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(YY)
      }
      QE() {
        this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout((() => {
          this.resizeTimeout = -1, this.view.requestMeasure()
        }), 50))
      }
      onPrint(YY) {
        ("change" != YY.type && YY.type || YY.matches) && (this.view.viewState.printing = !0, this.view.measure(), setTimeout((() => {
          this.view.viewState.printing = !1, this.view.requestMeasure()
        }), 500))
      }
      updateGaps(YY) {
        if (this.gapIntersection && (YY.length != this.gaps.length || this.gaps.some(((rY, DY) => rY != YY[DY])))) {
          this.gapIntersection.disconnect();
          for (let rY of YY) this.gapIntersection.observe(rY);
          this.gaps = YY
        }
      }
      onSelectionChange(YY) {
        let rY = this.selectionChanged;
        if (!this.readSelectionRange() || this.delayedAndroidKey) return;
        let {
          view: DY
        } = this, FY = this.selectionRange;
        if (DY.state.facet(Gr) ? DY.root.activeElement != this.dom : !bY(this.dom, FY)) return;
        let AY = FY.anchorNode && DY.docView.tile.nearest(FY.anchorNode);
        AY && AY.isWidget() && AY.widget.ignoreEvent(YY) ? rY || (this.selectionChanged = !1) : (TY.ie && TY.ie_version <= 11 || TY.android && TY.chrome) && !DY.state.selection.main.empty && FY.focusNode && qY(FY.focusNode, FY.focusOffset, FY.anchorNode, FY.anchorOffset) ? this.flushSoon() : this.flush(!1)
      }
      readSelectionRange() {
        let {
          view: YY
        } = this, rY = MY(YY.root);
        if (!rY) return !1;
        let DY = TY.safari && 11 == YY.root.nodeType && YY.root.activeElement == this.dom && function(YY, rY) {
          if (rY.getComposedRanges) {
            let DY = rY.getComposedRanges(YY.root)[0];
            if (DY) return TA(YY, DY)
          }
          let DY = null;

          function FY(YY) {
            YY.preventDefault(), YY.stopImmediatePropagation(), DY = YY.getTargetRanges()[0]
          }
          return YY.contentDOM.addEventListener("beforeinput", FY, !0), YY.dom.ownerDocument.execCommand("indent"), YY.contentDOM.removeEventListener("beforeinput", FY, !0), DY ? TA(YY, DY) : null
        }(this.view, rY) || rY;
        if (!DY || this.selectionRange.eq(DY)) return !1;
        let FY = bY(this.dom, DY);
        return FY && !this.selectionChanged && YY.inputState.lastFocusTime > Date.now() - 200 && YY.inputState.lastTouchTime < Date.now() - 300 && function(YY, rY) {
          let DY = rY.focusNode,
            FY = rY.focusOffset;
          if (!DY || rY.anchorNode != DY || rY.anchorOffset != FY) return !1;
          for (FY = Math.min(FY, xY(DY));;)
            if (FY) {
              if (1 != DY.nodeType) return !1;
              let YY = DY.childNodes[FY - 1];
              "false" == YY.contentEditable ? FY-- : (DY = YY, FY = xY(DY))
            } else {
              if (DY == YY) return !0;
              FY = pY(DY), DY = DY.parentNode
            }
        }(this.dom, DY) ? (this.view.inputState.lastFocusTime = 0, YY.docView.updateSelection(), !1) : (this.selectionRange.setRange(DY), FY && (this.selectionChanged = !0), !0)
      }
      setSelectionRange(YY, rY) {
        this.selectionRange.set(YY.node, YY.offset, rY.node, rY.offset), this.selectionChanged = !1
      }
      clearSelectionRange() {
        this.selectionRange.set(null, 0, null, 0)
      }
      listenForScroll() {
        this.parentCheck = -1;
        let YY = 0,
          rY = null;
        for (let DY = this.dom; DY;)
          if (1 == DY.nodeType) !rY && YY < this.scrollTargets.length && this.scrollTargets[YY] == DY ? YY++ : rY || (rY = this.scrollTargets.slice(0, YY)), rY && rY.push(DY), DY = DY.assignedSlot || DY.parentNode;
          else {
            if (11 != DY.nodeType) break;
            DY = DY.host
          } if (YY < this.scrollTargets.length && !rY && (rY = this.scrollTargets.slice(0, YY)), rY) {
          for (let YY of this.scrollTargets) YY.removeEventListener("scroll", this.onScroll);
          for (let YY of this.scrollTargets = rY) YY.addEventListener("scroll", this.onScroll)
        }
      }
      ignore(YY) {
        if (!this.active) return YY();
        try {
          return this.stop(), YY()
        } finally {
          this.start(), this.clear()
        }
      }
      start() {
        this.active || (this.observer.observe(this.dom, mA), VA && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0)
      }
      stop() {
        this.active && (this.active = !1, this.observer.disconnect(), VA && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData))
      }
      clear() {
        this.processRecords(), this.queue.length = 0, this.selectionChanged = !1
      }
      delayAndroidKey(YY, rY) {
        var DY;
        if (!this.delayedAndroidKey) {
          let YY = () => {
            let YY = this.delayedAndroidKey;
            if (YY) {
              this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = YY.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && YY.force && Ar(this.dom, YY.key, YY.keyCode)
            }
          };
          this.flushingAndroidKey = this.view.win.requestAnimationFrame(YY)
        }
        this.delayedAndroidKey && "Enter" != YY || (this.delayedAndroidKey = {
          key: YY,
          keyCode: rY,
          force: this.lastChange < Date.now() - 50 || !!(null === (DY = this.delayedAndroidKey) || void 0 === DY ? void 0 : DY.force)
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
        for (let YY of this.observer.takeRecords()) this.queue.push(YY);
        return this.queue
      }
      processRecords() {
        let YY = this.pendingRecords();
        YY.length && (this.queue = []);
        let rY = -1,
          DY = -1,
          FY = !1;
        for (let AY of YY) {
          let YY = this.readMutation(AY);
          YY && (YY.typeOver && (FY = !0), -1 == rY ? ({
            from: rY,
            to: DY
          } = YY) : (rY = Math.min(YY.from, rY), DY = Math.max(YY.to, DY)))
        }
        return {
          from: rY,
          to: DY,
          typeOver: FY
        }
      }
      readChange() {
        let {
          from: YY,
          to: rY,
          typeOver: DY
        } = this.processRecords(), FY = this.selectionChanged && bY(this.dom, this.selectionRange);
        if (YY < 0 && !FY) return null;
        YY > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
        let AY = new DF(this.view, YY, rY, DY);
        return this.view.docView.domChanged = {
          newSel: AY.newSel ? AY.newSel.main : null
        }, AY
      }
      flush() {
        let YY = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
        YY && this.readSelectionRange();
        let rY = this.readChange();
        if (!rY) return this.view.requestMeasure(), !1;
        let DY = this.view.state,
          FY = AF(this.view, rY);
        return this.view.state == DY && (rY.domChanged || rY.newSel && !OF(this.view.state.selection, rY.newSel.main)) && this.view.update([]), FY
      }
      readMutation(YY) {
        let rY = this.view.docView.tile.nearest(YY.target);
        if (!rY || rY.isWidget()) return null;
        if (rY.markDirty("attributes" == YY.type), "childList" == YY.type) {
          let DY = lA(rY, YY.previousSibling || YY.target.previousSibling, -1),
            FY = lA(rY, YY.nextSibling || YY.target.nextSibling, 1);
          return {
            from: DY ? rY.posAfter(DY) : rY.posAtStart,
            to: FY ? rY.posBefore(FY) : rY.posAtEnd,
            typeOver: !1
          }
        }
        return "characterData" == YY.type ? {
          from: rY.posAtStart,
          to: rY.posAtEnd,
          typeOver: YY.target.nodeValue == YY.oldValue
        } : null
      }
      setWindow(YY) {
        YY != this.win && (this.removeWindowListeners(this.win), this.win = YY, this.addWindowListeners(this.win))
      }
      addWindowListeners(YY) {
        YY.addEventListener("resize", this.QE), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : YY.addEventListener("beforeprint", this.onPrint), YY.addEventListener("scroll", this.onScroll), YY.document.addEventListener("selectionchange", this.onSelectionChange)
      }
      removeWindowListeners(YY) {
        YY.removeEventListener("scroll", this.onScroll), YY.removeEventListener("resize", this.QE), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : YY.removeEventListener("beforeprint", this.onPrint), YY.document.removeEventListener("selectionchange", this.onSelectionChange)
      }
      update(YY) {
        this.editContext && (this.editContext.update(YY), YY.startState.facet(Gr) != YY.state.facet(Gr) && (YY.view.contentDOM.editContext = YY.state.facet(Gr) ? this.editContext.editContext : null))
      }
      destroy() {
        var YY, rY, DY;
        this.stop(), null === (YY = this.intersection) || void 0 === YY || YY.disconnect(), null === (rY = this.gapIntersection) || void 0 === rY || rY.disconnect(), null === (DY = this.resizeScroll) || void 0 === DY || DY.disconnect();
        for (let FY of this.scrollTargets) FY.removeEventListener("scroll", this.onScroll);
        this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy())
      }
    }

    function lA(YY, rY, DY) {
      for (; rY;) {
        let FY = sD.get(rY);
        if (FY && FY.parent == YY) return FY;
        let AY = rY.parentNode;
        rY = AY != YY.dom ? AY : DY > 0 ? rY.nextSibling : rY.previousSibling
      }
      return null
    }

    function TA(YY, rY) {
      let DY = rY.startContainer,
        FY = rY.startOffset,
        AY = rY.endContainer,
        IY = rY.endOffset,
        RY = YY.docView.domAtPos(YY.state.selection.main.anchor, 1);
      return qY(RY.node, RY.offset, AY, IY) && ([DY, FY, AY, IY] = [AY, IY, DY, FY]), {
        anchorNode: DY,
        anchorOffset: FY,
        focusNode: AY,
        focusOffset: IY
      }
    }
    class eA {
      constructor(YY) {
        this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = Object.create(null), this.composing = null, this.resetRange(YY.state);
        let rY = this.editContext = new window.EditContext({
          text: YY.state.doc.sliceString(this.from, this.to),
          selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, YY.state.selection.main.anchor))),
          selectionEnd: this.toContextPos(YY.state.selection.main.head)
        });
        this.handlers.textupdate = DY => {
          let AY = YY.state.selection.main,
            {
              anchor: IY,
              head: RY
            } = AY,
            OY = this.toEditorPos(DY.updateRangeStart),
            gY = this.toEditorPos(DY.updateRangeEnd);
          YY.inputState.composing >= 0 && !this.composing && (this.composing = {
            contextBase: DY.updateRangeStart,
            editorBase: OY,
            drifted: !1
          });
          let aY = gY - OY > DY.text.length;
          OY == this.from && IY < this.from ? OY = IY : gY == this.to && IY > this.to && (gY = IY);
          let vY = RF(YY.state.sliceDoc(OY, gY), DY.text, (aY ? AY.from : AY.to) - OY, aY ? "end" : null);
          if (!vY) {
            let rY = FY.n.single(this.toEditorPos(DY.selectionStart), this.toEditorPos(DY.selectionEnd));
            return void(OF(rY, AY) || YY.dispatch({
              selection: rY,
              userEvent: "select"
            }))
          }
          let uY = {
            from: vY.from + OY,
            to: vY.toA + OY,
            insert: FY.K.of(DY.text.slice(vY.from, vY.toB).split("\n"))
          };
          if ((TY.mac || TY.android) && uY.from == RY - 1 && /^\. ?$/.test(DY.text) && "off" == YY.contentDOM.getAttribute("autocorrect") && (uY = {
              from: OY,
              to: gY,
              insert: FY.K.of([DY.text.replace(".", " ")])
            }), this.pendingContextChange = uY, !YY.state.readOnly) {
            let rY = this.to - this.from + (uY.to - uY.from + uY.insert.length);
            IF(YY, uY, FY.n.single(this.toEditorPos(DY.selectionStart, rY), this.toEditorPos(DY.selectionEnd, rY)))
          }
          this.pendingContextChange && (this.revertPending(YY.state), this.setSelection(YY.state)), uY.from < uY.to && !uY.insert.length && YY.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(rY.text.slice(Math.max(0, DY.updateRangeStart - 1), Math.min(rY.text.length, DY.updateRangeStart + 1))) && this.handlers.compositionend(DY)
        }, this.handlers.characterboundsupdate = DY => {
          let FY = [],
            AY = null;
          for (let rY = this.toEditorPos(DY.rangeStart), IY = this.toEditorPos(DY.rangeEnd); rY < IY; rY++) {
            let DY = YY.coordsForChar(rY);
            AY = DY && new DOMRect(DY.left, DY.top, DY.right - DY.left, DY.bottom - DY.top) || AY || new DOMRect, FY.push(AY)
          }
          rY.updateCharacterBounds(DY.rangeStart, FY)
        }, this.handlers.textformatupdate = rY => {
          let DY = [];
          for (let YY of rY.getTextFormats()) {
            let rY = YY.underlineStyle,
              FY = YY.underlineThickness;
            if (!/none/i.test(rY) && !/none/i.test(FY)) {
              let AY = this.toEditorPos(YY.rangeStart),
                IY = this.toEditorPos(YY.rangeEnd);
              if (AY < IY) {
                let YY = `text-decoration: underline ${/^[a-z]/.test(rY)?rY+" ":"Dashed"==rY?"dashed ":"Squiggle"==rY?"wavy ":""}${/thin/i.test(FY)?1:2}px`;
                DY.push(ZY.mark({
                  attributes: {
                    style: YY
                  }
                }).range(AY, IY))
              }
            }
          }
          YY.dispatch({
            effects: pr.of(ZY.set(DY))
          })
        }, this.handlers.compositionstart = () => {
          YY.inputState.composing < 0 && (YY.inputState.composing = 0, YY.inputState.compositionFirstChange = !0)
        }, this.handlers.compositionend = () => {
          if (YY.inputState.composing = -1, YY.inputState.compositionFirstChange = null, this.composing) {
            let {
              drifted: rY
            } = this.composing;
            this.composing = null, rY && this.reset(YY.state)
          }
        };
        for (let DY in this.handlers) rY.addEventListener(DY, this.handlers[DY]);
        this.measureReq = {
          read: YY => {
            this.editContext.updateControlBounds(YY.contentDOM.getBoundingClientRect());
            let rY = MY(YY.root);
            rY && rY.rangeCount && this.editContext.updateSelectionBounds(rY.getRangeAt(0).getBoundingClientRect())
          }
        }
      }
      applyEdits(YY) {
        let rY = 0,
          DY = !1,
          FY = this.pendingContextChange;
        return YY.changes.iterChanges(((AY, IY, RY, OY, gY) => {
          if (DY) return;
          let aY = gY.length - (IY - AY);
          if (FY && IY >= FY.to) {
            if (FY.from == AY && FY.to == IY && FY.insert.eq(gY)) return FY = this.pendingContextChange = null, rY += aY, void(this.to += aY);
            FY = null, this.revertPending(YY.state)
          }
          if (AY += rY, (IY += rY) <= this.from) this.from += aY, this.to += aY;
          else if (AY < this.to) {
            if (AY < this.from || IY > this.to || this.to - this.from + gY.length > 3e4) return void(DY = !0);
            this.editContext.updateText(this.toContextPos(AY), this.toContextPos(IY), gY.toString()), this.to += aY
          }
          rY += aY
        })), FY && !DY && this.revertPending(YY.state), !DY
      }
      update(YY) {
        let rY = this.pendingContextChange,
          DY = YY.startState.selection.main;
        this.composing && (this.composing.drifted || !YY.changes.touchesRange(DY.from, DY.to) && YY.transactions.some((YY => !YY.isUserEvent("input.type") && YY.changes.touchesRange(this.from, this.to)))) ? (this.composing.drifted = !0, this.composing.editorBase = YY.changes.mapPos(this.composing.editorBase)) : this.applyEdits(YY) && this.rangeIsValid(YY.state) ? (YY.docChanged || YY.selectionSet || rY) && this.setSelection(YY.state) : (this.pendingContextChange = null, this.reset(YY.state)), (YY.geometryChanged || YY.docChanged || YY.selectionSet) && YY.view.requestMeasure(this.measureReq)
      }
      resetRange(YY) {
        let {
          head: rY
        } = YY.selection.main;
        this.from = Math.max(0, rY - 1e4), this.to = Math.min(YY.doc.length, rY + 1e4)
      }
      reset(YY) {
        this.resetRange(YY), this.editContext.updateText(0, this.editContext.text.length, YY.doc.sliceString(this.from, this.to)), this.setSelection(YY)
      }
      revertPending(YY) {
        let rY = this.pendingContextChange;
        this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(rY.from), this.toContextPos(rY.from + rY.insert.length), YY.doc.sliceString(rY.from, rY.to))
      }
      setSelection(YY) {
        let {
          main: rY
        } = YY.selection, DY = this.toContextPos(Math.max(this.from, Math.min(this.to, rY.anchor))), FY = this.toContextPos(rY.head);
        this.editContext.selectionStart == DY && this.editContext.selectionEnd == FY || this.editContext.updateSelection(DY, FY)
      }
      rangeIsValid(YY) {
        let {
          head: rY
        } = YY.selection.main;
        return !(this.from > 0 && rY - this.from < 500 || this.to < YY.doc.length && this.to - rY < 500 || this.to - this.from > 3e4)
      }
      toEditorPos(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.to - this.from;
        YY = Math.min(YY, rY);
        let DY = this.composing;
        return DY && DY.drifted ? DY.editorBase + (YY - DY.contextBase) : YY + this.from
      }
      toContextPos(YY) {
        let rY = this.composing;
        return rY && rY.drifted ? rY.contextBase + (YY - rY.editorBase) : YY - this.from
      }
      destroy() {
        for (let YY in this.handlers) this.editContext.removeEventListener(YY, this.handlers[YY])
      }
    }
    class NA {
      get state() {
        return this.viewState.state
      }
      get viewport() {
        return this.viewState.viewport
      }
      get B_() {
        return this.viewState.B_
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
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var rY;
        this.plugins = [], this.pluginMap = new Map, this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), YY.parent && YY.parent.appendChild(this.dom);
        let {
          dispatch: DY
        } = YY;
        this.dispatchTransactions = YY.dispatchTransactions || DY && (YY => YY.forEach((YY => DY(YY, this)))) || (YY => this.update(YY)), this.dispatch = this.dispatch.bind(this), this._root = YY.root || function(YY) {
          for (; YY;) {
            if (YY && (9 == YY.nodeType || 11 == YY.nodeType && YY.host)) return YY;
            YY = YY.assignedSlot || YY.parentNode
          }
          return null
        }(YY.parent) || document, this.viewState = new FA(this, YY.state || FY.p.create(YY)), YY.scrollTo && YY.scrollTo.is(qr) && (this.viewState.scrollTarget = YY.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(nr).map((YY => new Ur(YY)));
        for (let FY of this.plugins) FY.update(this);
        this.observer = new SA(this), this.inputState = new gF(this), this.inputState.ensureHandlers(this.plugins), this.docView = new hD(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), (null === (rY = document.fonts) || void 0 === rY ? void 0 : rY.ready) && document.fonts.ready.then((() => {
          this.viewState.mustMeasureContent = "refresh", this.requestMeasure()
        }))
      }
      dispatch() {
        for (var YY = arguments.length, rY = new Array(YY), DY = 0; DY < YY; DY++) rY[DY] = arguments[DY];
        let AY = 1 == rY.length && rY[0] instanceof FY.N ? rY : 1 == rY.length && Array.isArray(rY[0]) ? rY[0] : [this.state.update(...rY)];
        this.dispatchTransactions(AY, this)
      }
      update(YY) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        let rY, DY = !1,
          AY = !1,
          IY = this.state;
        for (let FY of YY) {
          if (FY.startState != IY) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
          IY = FY.state
        }
        if (this.destroyed) return void(this.viewState.state = IY);
        let RY = this.hasFocus,
          OY = 0,
          gY = null;
        YY.some((YY => YY.annotation(HF))) ? (this.inputState.notifiedFocused = RY, OY = 1) : RY != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = RY, gY = zF(IY, RY), gY || (OY = 1));
        let aY = this.observer.delayedAndroidKey,
          vY = null;
        if (aY ? (this.observer.clearDelayedAndroidKey(), vY = this.observer.readChange(), (vY && !this.state.doc.eq(IY.doc) || !this.state.selection.eq(IY.selection)) && (vY = null)) : this.observer.clear(), IY.facet(FY.p.phrases) != this.state.facet(FY.p.phrases)) return this.setState(IY);
        rY = vD.create(this, IY, YY), rY.flags |= OY;
        let uY = this.viewState.scrollTarget;
        try {
          this.updateState = 2;
          for (let rY of YY) {
            if (uY && (uY = uY.map(rY.changes)), rY.scrollIntoView) {
              let {
                main: YY
              } = rY.state.selection, {
                x: DY,
                y: AY
              } = this.state.facet(NA.cursorScrollMargin);
              uY = new Xr(YY.empty ? YY : FY.n.cursor(YY.head, YY.head > YY.anchor ? -1 : 1), "nearest", "nearest", AY, DY)
            }
            for (let YY of rY.effects) YY.is(qr) && (uY = YY.value.clip(this.state))
          }
          this.viewState.update(rY, uY), this.bidiCache = KA.update(this.bidiCache, rY.changes), rY.empty || (this.updatePlugins(rY), this.inputState.update(rY)), DY = this.docView.update(rY), this.state.facet(gD) != this.styleModules && this.mountStyles(), AY = this.updateAttrs(), this.showAnnouncements(YY), this.docView.updateSelection(DY, YY.some((YY => YY.isUserEvent("select.pointer"))))
        } finally {
          this.updateState = 0
        }
        if (rY.startState.facet(uA) != rY.state.facet(uA) && (this.viewState.mustMeasureContent = !0), (DY || AY || uY || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), DY && this.docViewUpdate(), !rY.empty)
          for (let FY of this.state.facet(fr)) try {
            FY(rY)
          } catch (sY) {
            kr(this.state, sY, "update listener")
          }(gY || vY) && Promise.resolve().then((() => {
            gY && this.state == gY.startState && this.dispatch(gY), vY && !AF(this, vY) && aY.force && Ar(this.contentDOM, aY.key, aY.keyCode)
          }))
      }
      setState(YY) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
        if (this.destroyed) return void(this.viewState.state = YY);
        this.updateState = 2;
        let rY = this.hasFocus;
        try {
          for (let YY of this.plugins) YY.destroy(this);
          this.viewState = new FA(this, YY), this.plugins = YY.facet(nr).map((YY => new Ur(YY))), this.pluginMap.clear();
          for (let YY of this.plugins) YY.update(this);
          this.docView.destroy(), this.docView = new hD(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = []
        } finally {
          this.updateState = 0
        }
        rY && this.focus(), this.requestMeasure()
      }
      updatePlugins(YY) {
        let rY = YY.startState.facet(nr),
          DY = YY.state.facet(nr);
        if (rY != DY) {
          let FY = [];
          for (let AY of DY) {
            let DY = rY.indexOf(AY);
            if (DY < 0) FY.push(new Ur(AY));
            else {
              let rY = this.plugins[DY];
              rY.mustUpdate = YY, FY.push(rY)
            }
          }
          for (let rY of this.plugins) rY.mustUpdate != YY && rY.destroy(this);
          this.plugins = FY, this.pluginMap.clear()
        } else
          for (let FY of this.plugins) FY.mustUpdate = YY;
        for (let FY = 0; FY < this.plugins.length; FY++) this.plugins[FY].update(this);
        rY != DY && this.inputState.ensureHandlers(this.plugins)
      }
      docViewUpdate() {
        for (let rY of this.plugins) {
          let DY = rY.value;
          if (DY && DY.docViewUpdate) try {
            DY.docViewUpdate(this)
          } catch (YY) {
            kr(this.state, YY, "doc view update listener")
          }
        }
      }
      measure() {
        let YY = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.destroyed) return;
        if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) return this.measureScheduled = -1, void this.requestMeasure();
        this.measureScheduled = 0, YY && this.observer.forceFlush();
        let rY = null,
          DY = this.viewState.scrollParent,
          FY = this.viewState.getScrollOffset(),
          {
            scrollAnchorPos: AY,
            scrollAnchorHeight: IY
          } = this.viewState;
        Math.abs(FY - this.viewState.scrollOffset) > 1 && (IY = -1), this.viewState.scrollAnchorHeight = -1;
        try {
          for (let YY = 0;; YY++) {
            if (IY < 0)
              if (Ir(DY || this.win)) AY = -1, IY = this.viewState.heightMap.height;
              else {
                let YY = this.viewState.scrollAnchorAt(FY);
                AY = YY.from, IY = YY.top
              } this.updateState = 1;
            let OY = this.viewState.measure();
            if (!OY && !this.measureRequests.length && null == this.viewState.scrollTarget) break;
            if (YY > 5) {
              console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
              break
            }
            let gY = [];
            4 & OY || ([this.measureRequests, gY] = [gY, this.measureRequests]);
            let aY = gY.map((YY => {
                try {
                  return YY.read(this)
                } catch (rY) {
                  return kr(this.state, rY), cA
                }
              })),
              vY = vD.create(this, this.state, []),
              uY = !1;
            vY.flags |= OY, rY ? rY.flags |= OY : rY = vY, this.updateState = 2, vY.empty || (this.updatePlugins(vY), this.inputState.update(vY), this.updateAttrs(), uY = this.docView.update(vY), uY && this.docViewUpdate());
            for (let YY = 0; YY < gY.length; YY++)
              if (aY[YY] != cA) try {
                let rY = gY[YY];
                rY.write && rY.write(aY[YY], this)
              } catch (RY) {
                kr(this.state, RY)
              }
            if (uY && this.docView.updateSelection(!0), !vY.viewportChanged && 0 == this.measureRequests.length) {
              if (this.viewState.editorHeight) {
                if (this.viewState.scrollTarget) {
                  this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, IY = -1;
                  continue
                } {
                  let YY = ((AY < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(AY).top) - IY) / this.scaleY;
                  if ((YY > 1 || YY < -1) && (DY == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                    FY += YY, DY ? DY.scrollTop += YY : this.win.scrollBy(0, YY), IY = -1;
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
        if (rY && !rY.empty)
          for (let OY of this.state.facet(fr)) OY(rY)
      }
      get themeClasses() {
        return iA + " " + (this.state.facet(sA) ? QA : yA) + " " + this.state.facet(uA)
      }
      updateAttrs() {
        let YY = HA(this, Lr, {
            class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
          }),
          rY = {
            spellcheck: "false",
            autocorrect: "off",
            autocapitalize: "off",
            writingsuggestions: "false",
            translate: "no",
            contenteditable: this.state.facet(Gr) ? "true" : "false",
            class: "cm-content",
            style: `${TY.tabSize}: ${this.state.tabSize}`,
            role: "textbox",
            "aria-multiline": "true"
          };
        this.state.readOnly && (rY["aria-readonly"] = "true"), HA(this, tr, rY);
        let DY = this.observer.ignore((() => {
          let DY = cY(this.contentDOM, this.contentAttrs, rY),
            FY = cY(this.dom, this.editorAttrs, YY);
          return DY || FY
        }));
        return this.editorAttrs = YY, this.contentAttrs = rY, DY
      }
      showAnnouncements(YY) {
        let rY = !0;
        for (let DY of YY)
          for (let YY of DY.effects)
            if (YY.is(NA.announce)) {
              rY && (this.announceDOM.textContent = ""), rY = !1, this.announceDOM.appendChild(document.createElement("div")).textContent = YY.value
            }
      }
      mountStyles() {
        this.styleModules = this.state.facet(gD);
        let YY = this.state.facet(NA.cspNonce);
        AY.e.mount(this.root, this.styleModules.concat(EA).reverse(), YY ? {
          nonce: YY
        } : void 0)
      }
      readMeasured() {
        if (2 == this.updateState) throw new Error("Reading the editor layout isn't allowed during an update");
        0 == this.updateState && this.measureScheduled > -1 && this.measure(!1)
      }
      requestMeasure(YY) {
        if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame((() => this.measure()))), YY) {
          if (this.measureRequests.indexOf(YY) > -1) return;
          if (null != YY.key)
            for (let rY = 0; rY < this.measureRequests.length; rY++)
              if (this.measureRequests[rY].key === YY.key) return void(this.measureRequests[rY] = YY);
          this.measureRequests.push(YY)
        }
      }
      plugin(YY) {
        let rY = this.pluginMap.get(YY);
        return (void 0 === rY || rY && rY.plugin != YY) && this.pluginMap.set(YY, rY = this.plugins.find((rY => rY.plugin == YY)) || null), rY && rY.update(this).value
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
      elementAtHeight(YY) {
        return this.readMeasured(), this.viewState.elementAtHeight(YY)
      }
      lineBlockAtHeight(YY) {
        return this.readMeasured(), this.viewState.lineBlockAtHeight(YY)
      }
      get viewportLineBlocks() {
        return this.viewState.viewportLines
      }
      lineBlockAt(YY) {
        return this.viewState.lineBlockAt(YY)
      }
      get contentHeight() {
        return this.viewState.contentHeight
      }
      moveByChar(YY, rY, DY) {
        return GD(this, YY, qD(this, YY, rY, DY))
      }
      moveByGroup(YY, rY) {
        return GD(this, YY, qD(this, YY, rY, (rY => function(YY, rY, DY) {
          let AY = YY.state.charCategorizer(rY),
            IY = AY(DY);
          return YY => {
            let rY = AY(YY);
            return IY == FY.j.Space && (IY = rY), IY == rY
          }
        }(this, YY.head, rY))))
      }
      visualLineSide(YY, rY) {
        let DY = this.bidiSpans(YY),
          AY = this.textDirectionAt(YY.from),
          IY = DY[rY ? DY.length - 1 : 0];
        return FY.n.cursor(IY.side(rY, AY) + YY.from, IY.forward(!rY, AY) ? 1 : -1)
      }
      moveToLineBoundary(YY, rY) {
        return function(YY, rY, DY, AY) {
          let IY = XD(YY, rY.head, rY.assoc || -1),
            RY = AY && IY.type == zY.Text && (YY.lineWrapping || IY.widgetLineBreaks) ? YY.coordsAtPos(rY.assoc < 0 && rY.head > IY.from ? rY.head - 1 : rY.head) : null;
          if (RY) {
            let rY = YY.dom.getBoundingClientRect(),
              AY = YY.textDirectionAt(IY.from),
              OY = YY.posAtCoords({
                x: DY == (AY == ar.LTR) ? rY.right - 1 : rY.left + 1,
                y: (RY.top + RY.bottom) / 2
              });
            if (null != OY) return FY.n.cursor(OY, DY ? -1 : 1)
          }
          return FY.n.cursor(DY ? IY.to : IY.from, DY ? -1 : 1)
        }(this, YY, rY, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2])
      }
      moveVertically(YY, rY, DY) {
        return GD(this, YY, function(YY, rY, DY, AY) {
          let IY = rY.head,
            RY = DY ? 1 : -1;
          if (IY == (DY ? YY.state.doc.length : 0)) return FY.n.cursor(IY, rY.assoc);
          let OY, gY = rY.goalColumn,
            aY = YY.contentDOM.getBoundingClientRect(),
            vY = YY.coordsAtPos(IY, rY.assoc || ((rY.empty ? DY : rY.head == rY.from) ? 1 : -1)),
            uY = YY.documentTop;
          if (vY) null == gY && (gY = vY.left - aY.left), OY = RY < 0 ? vY.top : vY.bottom;
          else {
            let rY = YY.viewState.lineBlockAt(IY);
            null == gY && (gY = Math.min(aY.right - aY.left, YY.defaultCharacterWidth * (IY - rY.from))), OY = (RY < 0 ? rY.top : rY.bottom) + uY
          }
          let sY = aY.left + gY,
            iY = YY.viewState.heightOracle.textHeight >> 1,
            yY = null !== AY && void 0 !== AY ? AY : iY;
          for (let QY = 0;; QY += iY) {
            let rY = OY + (yY + QY) * RY,
              AY = nD(YY, {
                x: sY,
                y: rY
              }, !1, RY);
            if (DY ? rY > aY.bottom : rY < aY.top) return FY.n.cursor(AY.pos, AY.assoc);
            let IY = YY.coordsAtPos(AY.pos, AY.assoc),
              vY = IY ? (IY.top + IY.bottom) / 2 : 0;
            if (!IY || (DY ? vY > OY : vY < OY)) return FY.n.cursor(AY.pos, AY.assoc, void 0, gY)
          }
        }(this, YY, rY, DY))
      }
      domAtPos(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return this.docView.domAtPos(YY, rY)
      }
      posAtDOM(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.docView.posFromDOM(YY, rY)
      }
      posAtCoords(YY) {
        let rY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this.readMeasured();
        let DY = nD(this, YY, rY);
        return DY && DY.pos
      }
      posAndSideAtCoords(YY) {
        let rY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return this.readMeasured(), nD(this, YY, rY)
      }
      coordsAtPos(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.readMeasured();
        let DY = this.docView.coordsAt(YY, rY);
        if (!DY || DY.left == DY.right) return DY;
        let FY = this.state.doc.lineAt(YY),
          AY = this.bidiSpans(FY);
        return nY(DY, AY[mr.find(AY, YY - FY.from, -1, rY)].dir == ar.LTR == rY > 0)
      }
      coordsForChar(YY) {
        return this.readMeasured(), this.docView.coordsForChar(YY)
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
      textDirectionAt(YY) {
        return !this.state.facet(Mr) || YY < this.viewport.from || YY > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(YY))
      }
      get lineWrapping() {
        return this.viewState.heightOracle.lineWrapping
      }
      bidiSpans(YY) {
        if (YY.length > BA) return Nr(YY.length);
        let rY, DY = this.textDirectionAt(YY.from);
        for (let AY of this.bidiCache)
          if (AY.from == YY.from && AY.dir == DY && (AY.fresh || Vr(AY.isolates, rY = ID(this, YY)))) return AY.order;
        rY || (rY = ID(this, YY));
        let FY = er(YY.text, DY, rY);
        return this.bidiCache.push(new KA(YY.from, YY.to, DY, rY, !0, FY)), FY
      }
      get hasFocus() {
        var YY;
        return (this.dom.ownerDocument.hasFocus() || TY.safari && (null === (YY = this.inputState) || void 0 === YY ? void 0 : YY.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM
      }
      focus() {
        this.observer.ignore((() => {
          Dr(this.contentDOM), this.docView.updateSelection()
        }))
      }
      setRoot(YY) {
        this._root != YY && (this._root = YY, this.observer.setWindow((9 == YY.nodeType ? YY : YY.ownerDocument).defaultView || window), this.mountStyles())
      }
      destroy() {
        this.root.activeElement == this.contentDOM && this.contentDOM.blur();
        for (let YY of this.plugins) YY.destroy(this);
        this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0
      }
      static scrollIntoView(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var DY, AY, IY, RY;
        return qr.of(new Xr("number" == typeof YY ? FY.n.cursor(YY) : YY, null !== (DY = rY.y) && void 0 !== DY ? DY : "nearest", null !== (AY = rY.x) && void 0 !== AY ? AY : "nearest", null !== (IY = rY.yMargin) && void 0 !== IY ? IY : 5, null !== (RY = rY.xMargin) && void 0 !== RY ? RY : 5))
      }
      scrollSnapshot() {
        let {
          scrollTop: YY,
          scrollLeft: rY
        } = this.scrollDOM, DY = this.viewState.scrollAnchorAt(YY);
        return qr.of(new Xr(FY.n.cursor(DY.from), "start", "start", DY.top - YY, rY, !0))
      }
      setTabFocusMode(YY) {
        null == YY ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof YY ? this.inputState.tabFocusMode = YY ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + YY)
      }
      static domEventHandlers(YY) {
        return Pr.define((() => ({})), {
          eventHandlers: YY
        })
      }
      static domEventObservers(YY) {
        return Pr.define((() => ({})), {
          eventObservers: YY
        })
      }
      static theme(YY, rY) {
        let DY = AY.e.newName(),
          FY = [uA.of(DY), gD.of(WA(`.${DY}`, YY))];
        return rY && rY.dark && FY.push(sA.of(!0)), FY
      }
      static baseTheme(YY) {
        return FY.v.lowest(gD.of(WA("." + iA, YY, oA)))
      }
      static findFromDOM(YY) {
        var rY;
        let DY = YY.querySelector(".cm-content"),
          FY = DY && sD.get(DY) || sD.get(YY);
        return (null === (rY = null === FY || void 0 === FY ? void 0 : FY.root) || void 0 === rY ? void 0 : rY.view) || null
      }
    }
    NA.styleModule = gD, NA.inputHandler = jr, NA.clipboardInputFilter = dr, NA.clipboardOutputFilter = Jr, NA.scrollHandler = br, NA.focusChangeEffect = hr, NA.perLineTextDirection = Mr, NA.exceptionSink = Cr, NA.updateListener = fr, NA.editable = Gr, NA.mouseSelectionStyle = Zr, NA.dragMovesSelection = zr, NA.clickAddsSelectionRange = Hr, NA.CA = YD, NA.blockWrappers = rD, NA.outerDecorations = DD, NA.atomicRanges = FD, NA.bidiIsolatedRanges = AD, NA.cursorScrollMargin = FY.r.define({
      combine: YY => {
        let rY = 5,
          DY = 5;
        for (let FY of YY) "number" == typeof FY ? rY = DY = FY : ({
          x: rY,
          y: DY
        } = FY);
        return {
          x: rY,
          y: DY
        }
      }
    }), NA.scrollMargins = RD, NA.darkTheme = sA, NA.cspNonce = FY.r.define({
      combine: YY => YY.length ? YY[0] : ""
    }), NA.contentAttributes = tr, NA.editorAttributes = Lr, NA.lineWrapping = NA.contentAttributes.of({
      class: "cm-lineWrapping"
    }), NA.announce = FY.E.define();
    const BA = 4096,
      cA = {};
    class KA {
      constructor(YY, rY, DY, FY, AY, IY) {
        this.from = YY, this.to = rY, this.dir = DY, this.isolates = FY, this.fresh = AY, this.order = IY
      }
      static update(YY, rY) {
        if (rY.empty && !YY.some((YY => YY.fresh))) return YY;
        let DY = [],
          FY = YY.length ? YY[YY.length - 1].dir : ar.LTR;
        for (let AY = Math.max(0, YY.length - 10); AY < YY.length; AY++) {
          let IY = YY[AY];
          IY.dir != FY || rY.touchesRange(IY.from, IY.to) || DY.push(new KA(rY.mapPos(IY.from, 1), rY.mapPos(IY.to, -1), IY.dir, IY.isolates, !1, IY.order))
        }
        return DY
      }
    }

    function HA(YY, rY, DY) {
      for (let FY = YY.state.facet(rY), AY = FY.length - 1; AY >= 0; AY--) {
        let rY = FY[AY],
          IY = "function" == typeof rY ? rY(YY) : rY;
        IY && eY(IY, DY)
      }
      return DY
    }
    const zA = TY.mac ? "mac" : TY.windows ? "win" : TY.linux ? "linux" : "key";

    function ZA(YY, rY, DY) {
      return rY.altKey && (YY = "Alt-" + YY), rY.ctrlKey && (YY = "Ctrl-" + YY), rY.metaKey && (YY = "Meta-" + YY), !1 !== DY && rY.shiftKey && (YY = "Shift-" + YY), YY
    }
    const CA = FY.v.default(NA.domEventHandlers({
        keydown: (YY, rY) => bA(hA(rY.state), YY, rY, "editor")
      })),
      fA = FY.r.define({
        enables: CA
      }),
      jA = new WeakMap;

    function hA(YY) {
      let rY = YY.facet(fA),
        DY = jA.get(rY);
      return DY || jA.set(rY, DY = function(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zA,
          DY = Object.create(null),
          FY = Object.create(null),
          AY = (YY, rY) => {
            let DY = FY[YY];
            if (null == DY) FY[YY] = rY;
            else if (DY != rY) throw new Error("Key binding " + YY + " is used both as a regular binding and as a multi-stroke prefix")
          },
          IY = (YY, FY, IY, RY, OY) => {
            var gY, aY;
            let vY = DY[YY] || (DY[YY] = Object.create(null)),
              uY = FY.split(/ (?!$)/).map((YY => function(YY, rY) {
                const DY = YY.split(/-(?!$)/);
                let FY, AY, IY, RY, OY = DY[DY.length - 1];
                "Space" == OY && (OY = " ");
                for (let gY = 0; gY < DY.length - 1; ++gY) {
                  const YY = DY[gY];
                  if (/^(cmd|meta|m)$/i.test(YY)) RY = !0;
                  else if (/^a(lt)?$/i.test(YY)) FY = !0;
                  else if (/^(c|ctrl|control)$/i.test(YY)) AY = !0;
                  else if (/^s(hift)?$/i.test(YY)) IY = !0;
                  else {
                    if (!/^mod$/i.test(YY)) throw new Error("Unrecognized modifier name: " + YY);
                    "mac" == rY ? RY = !0 : AY = !0
                  }
                }
                return FY && (OY = "Alt-" + OY), AY && (OY = "Ctrl-" + OY), RY && (OY = "Meta-" + OY), IY && (OY = "Shift-" + OY), OY
              }(YY, rY)));
            for (let rY = 1; rY < uY.length; rY++) {
              let DY = uY.slice(0, rY).join(" ");
              AY(DY, !0), vY[DY] || (vY[DY] = {
                preventDefault: !0,
                stopPropagation: !1,
                run: [rY => {
                  let FY = JA = {
                    view: rY,
                    prefix: DY,
                    scope: YY
                  };
                  return setTimeout((() => {
                    JA == FY && (JA = null)
                  }), MA), !0
                }]
              })
            }
            let sY = uY.join(" ");
            AY(sY, !1);
            let iY = vY[sY] || (vY[sY] = {
              preventDefault: !1,
              stopPropagation: !1,
              run: (null === (aY = null === (gY = vY._any) || void 0 === gY ? void 0 : gY.run) || void 0 === aY ? void 0 : aY.slice()) || []
            });
            IY && iY.run.push(IY), RY && (iY.preventDefault = !0), OY && (iY.stopPropagation = !0)
          };
        for (let RY of YY) {
          let YY = RY.scope ? RY.scope.split(" ") : ["editor"];
          if (RY.any)
            for (let rY of YY) {
              let YY = DY[rY] || (DY[rY] = Object.create(null));
              YY._any || (YY._any = {
                preventDefault: !1,
                stopPropagation: !1,
                run: []
              });
              let {
                any: FY
              } = RY;
              for (let rY in YY) YY[rY].run.push((YY => FY(YY, wA)))
            }
          let FY = RY[rY] || RY.key;
          if (FY)
            for (let rY of YY) IY(rY, FY, RY.run, RY.preventDefault, RY.stopPropagation), RY.shift && IY(rY, "Shift-" + FY, RY.shift, RY.preventDefault, RY.stopPropagation)
        }
        return DY
      }(rY.reduce(((YY, rY) => YY.concat(rY)), []))), DY
    }

    function dA(YY, rY, DY) {
      return bA(hA(YY.state), rY, YY, DY)
    }
    let JA = null;
    const MA = 4e3;
    let wA = null;

    function bA(YY, rY, DY, AY) {
      wA = rY;
      let aY = function(YY) {
          var rY = !(OY && YY.metaKey && YY.shiftKey && !YY.ctrlKey && !YY.altKey || gY && YY.shiftKey && YY.key && 1 == YY.key.length || "Unidentified" == YY.key) && YY.key || (YY.shiftKey ? RY : IY)[YY.keyCode] || YY.key || "Unidentified";
          return "Esc" == rY && (rY = "Escape"), "Del" == rY && (rY = "Delete"), "Left" == rY && (rY = "ArrowLeft"), "Up" == rY && (rY = "ArrowUp"), "Right" == rY && (rY = "ArrowRight"), "Down" == rY && (rY = "ArrowDown"), rY
        }(rY),
        vY = (0, FY.R)(aY, 0),
        uY = (0, FY.U)(vY) == aY.length && " " != aY,
        sY = "",
        iY = !1,
        yY = !1,
        QY = !1;
      JA && JA.view == DY && JA.scope == AY && (sY = JA.prefix + " ", iF.indexOf(rY.keyCode) < 0 && (yY = !0, JA = null));
      let oY, WY, EY = new Set,
        mY = YY => {
          if (YY) {
            for (let rY of YY.run)
              if (!EY.has(rY) && (EY.add(rY), rY(DY))) return YY.stopPropagation && (QY = !0), !0;
            YY.preventDefault && (YY.stopPropagation && (QY = !0), yY = !0)
          }
          return !1
        },
        VY = YY[AY];
      return VY && (mY(VY[sY + ZA(aY, rY, !uY)]) ? iY = !0 : !uY || !(rY.altKey || rY.metaKey || rY.ctrlKey) || TY.windows && rY.ctrlKey && rY.altKey || TY.mac && rY.altKey && !rY.ctrlKey && !rY.metaKey || !(oY = IY[rY.keyCode]) || oY == aY ? uY && rY.shiftKey && mY(VY[sY + ZA(aY, rY, !0)]) && (iY = !0) : (mY(VY[sY + ZA(oY, rY, !0)]) || rY.shiftKey && (WY = RY[rY.keyCode]) != aY && WY != oY && mY(VY[sY + ZA(WY, rY, !1)])) && (iY = !0), !iY && mY(VY._any) && (iY = !0)), yY && (iY = !0), iY && QY && rY.stopPropagation(), wA = null, iY
    }
    class XA {
      constructor(YY, rY, DY, FY, AY) {
        this.className = YY, this.left = rY, this.top = DY, this.width = FY, this.height = AY
      }
      draw() {
        let YY = document.createElement("div");
        return YY.className = this.className, this.adjust(YY), YY
      }
      update(YY, rY) {
        return rY.className == this.className && (this.adjust(YY), !0)
      }
      adjust(YY) {
        YY.style.left = this.left + "px", YY.style.top = this.top + "px", null != this.width && (YY.style.width = this.width + "px"), YY.style.height = this.height + "px"
      }
      eq(YY) {
        return this.left == YY.left && this.top == YY.top && this.width == YY.width && this.height == YY.height && this.className == YY.className
      }
      static forRange(YY, rY, DY) {
        if (DY.empty) {
          let FY = YY.coordsAtPos(DY.head, DY.assoc || 1);
          if (!FY) return [];
          let AY = qA(YY);
          return [new XA(rY, FY.left - AY.left, FY.top - AY.top, null, FY.bottom - FY.top)]
        }
        return function(YY, rY, DY) {
          if (DY.to <= YY.viewport.from || DY.from >= YY.viewport.to) return [];
          let FY = Math.max(DY.from, YY.viewport.from),
            AY = Math.min(DY.to, YY.viewport.to),
            IY = YY.textDirection == ar.LTR,
            RY = YY.contentDOM,
            OY = RY.getBoundingClientRect(),
            gY = qA(YY),
            aY = RY.querySelector(".cm-line"),
            vY = aY && window.getComputedStyle(aY),
            uY = OY.left + (vY ? parseInt(vY.paddingLeft) + Math.min(0, parseInt(vY.textIndent)) : 0),
            sY = OY.right - (vY ? parseInt(vY.paddingRight) : 0),
            iY = XD(YY, FY, 1),
            yY = XD(YY, AY, -1),
            QY = iY.type == zY.Text ? iY : null,
            oY = yY.type == zY.Text ? yY : null;
          QY && (YY.lineWrapping || iY.widgetLineBreaks) && (QY = pA(YY, FY, 1, QY));
          oY && (YY.lineWrapping || yY.widgetLineBreaks) && (oY = pA(YY, AY, -1, oY));
          if (QY && oY && QY.from == oY.from && QY.to == oY.to) return EY(mY(DY.from, DY.to, QY));
          {
            let rY = QY ? mY(DY.from, null, QY) : VY(iY, !1),
              FY = oY ? mY(null, DY.to, oY) : VY(yY, !0),
              AY = [];
            return (QY || iY).to < (oY || yY).from - (QY && oY ? 1 : 0) || iY.widgetLineBreaks > 1 && rY.bottom + YY.defaultLineHeight / 2 < FY.top ? AY.push(WY(uY, rY.bottom, sY, FY.top)) : rY.bottom < FY.top && YY.elementAtHeight((rY.bottom + FY.top) / 2).type == zY.Text && (rY.bottom = FY.top = (rY.bottom + FY.top) / 2), EY(rY).concat(AY).concat(EY(FY))
          }

          function WY(YY, DY, FY, AY) {
            return new XA(rY, YY - gY.left, DY - gY.top, Math.max(0, FY - YY), AY - DY)
          }

          function EY(YY) {
            let {
              top: rY,
              bottom: DY,
              horizontal: FY
            } = YY, AY = [];
            for (let IY = 0; IY < FY.length; IY += 2) AY.push(WY(FY[IY], rY, FY[IY + 1], DY));
            return AY
          }

          function mY(rY, DY, FY) {
            let AY = 1e9,
              RY = -1e9,
              OY = [];

            function gY(rY, DY, gY, aY, vY) {
              let iY = YY.coordsAtPos(rY, rY == FY.to ? -2 : 2),
                yY = YY.coordsAtPos(gY, gY == FY.from ? 2 : -2);
              iY && yY && (AY = Math.min(iY.top, yY.top, AY), RY = Math.max(iY.bottom, yY.bottom, RY), vY == ar.LTR ? OY.push(IY && DY ? uY : iY.left, IY && aY ? sY : yY.right) : OY.push(!IY && aY ? uY : yY.left, !IY && DY ? sY : iY.right))
            }
            let aY = null !== rY && void 0 !== rY ? rY : FY.from,
              vY = null !== DY && void 0 !== DY ? DY : FY.to;
            for (let IY of YY.B_)
              if (IY.to > aY && IY.from < vY)
                for (let FY = Math.max(IY.from, aY), AY = Math.min(IY.to, vY);;) {
                  let IY = YY.state.doc.lineAt(FY);
                  for (let RY of YY.bidiSpans(IY)) {
                    let YY = RY.from + IY.from,
                      OY = RY.to + IY.from;
                    if (YY >= AY) break;
                    OY > FY && gY(Math.max(YY, FY), null == rY && YY <= aY, Math.min(OY, AY), null == DY && OY >= vY, RY.dir)
                  }
                  if (FY = IY.to + 1, FY >= AY) break
                }
            return 0 == OY.length && gY(aY, null == rY, vY, null == DY, YY.textDirection), {
              top: AY,
              bottom: RY,
              horizontal: OY
            }
          }

          function VY(YY, rY) {
            let DY = OY.top + (rY ? YY.top : YY.bottom);
            return {
              top: DY,
              bottom: DY,
              horizontal: []
            }
          }
        }(YY, rY, DY)
      }
    }

    function qA(YY) {
      let rY = YY.scrollDOM.getBoundingClientRect();
      return {
        left: (YY.textDirection == ar.LTR ? rY.left : rY.right - YY.scrollDOM.clientWidth * YY.scaleX) - YY.scrollDOM.scrollLeft * YY.scaleX,
        top: rY.top - YY.scrollDOM.scrollTop * YY.scaleY
      }
    }

    function pA(YY, rY, DY, FY) {
      let AY = YY.coordsAtPos(rY, 2 * DY);
      if (!AY) return FY;
      let IY = YY.dom.getBoundingClientRect(),
        RY = (AY.top + AY.bottom) / 2,
        OY = YY.posAtCoords({
          x: IY.left + 1,
          y: RY
        }),
        gY = YY.posAtCoords({
          x: IY.right - 1,
          y: RY
        });
      return null == OY || null == gY ? FY : {
        from: Math.max(FY.from, Math.min(OY, gY)),
        to: Math.min(FY.to, Math.max(OY, gY))
      }
    }
    class kA {
      constructor(YY, rY) {
        this.view = YY, this.layer = rY, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
          read: this.measure.bind(this),
          write: this.draw.bind(this)
        }, this.dom = YY.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), rY.above && this.dom.classList.add("cm-layer-above"), rY.class && this.dom.classList.add(rY.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(YY.state), YY.requestMeasure(this.measureReq), rY.mount && rY.mount(this.dom, YY)
      }
      update(YY) {
        YY.startState.facet(GA) != YY.state.facet(GA) && this.setOrder(YY.state), (this.layer.update(YY, this.dom) || YY.geometryChanged) && (this.scale(), YY.view.requestMeasure(this.measureReq))
      }
      docViewUpdate(YY) {
        !1 !== this.layer.updateOnDocViewUpdate && YY.requestMeasure(this.measureReq)
      }
      setOrder(YY) {
        let rY = 0,
          DY = YY.facet(GA);
        for (; rY < DY.length && DY[rY] != this.layer;) rY++;
        this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - rY)
      }
      measure() {
        return this.layer.markers(this.view)
      }
      scale() {
        let {
          scaleX: YY,
          scaleY: rY
        } = this.view;
        YY == this.scaleX && rY == this.scaleY || (this.scaleX = YY, this.scaleY = rY, this.dom.style.transform = `scale(${1/YY}, ${1/rY})`)
      }
      draw(YY) {
        if (YY.length != this.drawn.length || YY.some(((YY, rY) => {
            return DY = YY, FY = this.drawn[rY], !(DY.constructor == FY.constructor && DY.eq(FY));
            var DY, FY
          }))) {
          let rY = this.dom.firstChild,
            DY = 0;
          for (let FY of YY) FY.update && rY && FY.constructor && this.drawn[DY].constructor && FY.update(rY, this.drawn[DY]) ? (rY = rY.nextSibling, DY++) : this.dom.insertBefore(FY.draw(), rY);
          for (; rY;) {
            let YY = rY.nextSibling;
            rY.remove(), rY = YY
          }
          this.drawn = YY, TY.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none")
        }
      }
      destroy() {
        this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove()
      }
    }
    const GA = FY.r.define();

    function xA(YY) {
      return [Pr.define((rY => new kA(rY, YY))), GA.of(YY)]
    }
    const nA = FY.r.define({
      combine: YY => (0, FY.Y)(YY, {
        cursorBlinkRate: 1200,
        drawRangeCursor: !0,
        iosSelectionHandles: !0
      }, {
        cursorBlinkRate: (YY, rY) => Math.min(YY, rY),
        drawRangeCursor: (YY, rY) => YY || rY
      })
    });

    function PA() {
      let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [nA.of(YY), LA, YI, rI, wr.of(!0)]
    }

    function UA(YY) {
      return YY.startState.facet(nA) != YY.state.facet(nA)
    }
    const LA = xA({
      above: !0,
      markers(YY) {
        let {
          state: rY
        } = YY, DY = rY.facet(nA), AY = [];
        for (let IY of rY.selection.ws) {
          let RY = IY == rY.selection.main;
          if (IY.empty || DY.drawRangeCursor && !(RY && TY.ios && DY.iosSelectionHandles)) {
            let rY = RY ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary",
              DY = IY.empty ? IY : FY.n.cursor(IY.head, IY.assoc);
            for (let FY of XA.forRange(YY, rY, DY)) AY.push(FY)
          }
        }
        return AY
      },
      update(YY, rY) {
        YY.transactions.some((YY => YY.selection)) && (rY.style.animationName = "cm-blink" == rY.style.animationName ? "cm-blink2" : "cm-blink");
        let DY = UA(YY);
        return DY && tA(YY.state, rY), YY.docChanged || YY.selectionSet || DY
      },
      mount(YY, rY) {
        tA(rY.state, YY)
      },
      class: "cm-cursorLayer"
    });

    function tA(YY, rY) {
      rY.style.animationDuration = YY.facet(nA).cursorBlinkRate + "ms"
    }
    const YI = xA({
        above: !1,
        markers(YY) {
          let rY = [],
            {
              main: DY,
              ws: AY
            } = YY.state.selection;
          for (let FY of AY)
            if (!FY.empty)
              for (let DY of XA.forRange(YY, "cm-selectionBackground", FY)) rY.push(DY);
          if (TY.ios && !DY.empty && YY.state.facet(nA).iosSelectionHandles) {
            for (let AY of XA.forRange(YY, "cm-selectionHandle cm-selectionHandle-start", FY.n.cursor(DY.from, 1))) rY.push(AY);
            for (let AY of XA.forRange(YY, "cm-selectionHandle cm-selectionHandle-end", FY.n.cursor(DY.to, 1))) rY.push(AY)
          }
          return rY
        },
        update: (YY, rY) => YY.docChanged || YY.selectionSet || YY.viewportChanged || UA(YY),
        class: "cm-selectionLayer"
      }),
      rI = FY.v.highest(NA.theme({
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
      DI = FY.E.define({
        map: (YY, rY) => null == YY ? null : rY.mapPos(YY)
      }),
      FI = FY.G.define({
        create: () => null,
        update: (YY, rY) => (null != YY && (YY = rY.changes.mapPos(YY)), rY.effects.reduce(((YY, rY) => rY.is(DI) ? rY.value : YY), YY))
      }),
      AI = Pr.fromClass(class {
        constructor(YY) {
          this.view = YY, this.cursor = null, this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawCursor.bind(this)
          }
        }
        update(YY) {
          var rY;
          let DY = YY.state.field(FI);
          null == DY ? null != this.cursor && (null === (rY = this.cursor) || void 0 === rY || rY.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (YY.startState.field(FI) != DY || YY.docChanged || YY.geometryChanged) && this.view.requestMeasure(this.measureReq))
        }
        readPos() {
          let {
            view: YY
          } = this, rY = YY.state.field(FI), DY = null != rY && YY.coordsAtPos(rY);
          if (!DY) return null;
          let FY = YY.scrollDOM.getBoundingClientRect();
          return {
            left: DY.left - FY.left + YY.scrollDOM.scrollLeft * YY.scaleX,
            top: DY.top - FY.top + YY.scrollDOM.scrollTop * YY.scaleY,
            height: DY.bottom - DY.top
          }
        }
        drawCursor(YY) {
          if (this.cursor) {
            let {
              scaleX: rY,
              scaleY: DY
            } = this.view;
            YY ? (this.cursor.style.left = YY.left / rY + "px", this.cursor.style.top = YY.top / DY + "px", this.cursor.style.height = YY.height / DY + "px") : this.cursor.style.left = "-100000px"
          }
        }
        destroy() {
          this.cursor && this.cursor.remove()
        }
        setDropPos(YY) {
          this.view.state.field(FI) != YY && this.view.dispatch({
            effects: DI.of(YY)
          })
        }
      }, {
        eventObservers: {
          dragover(YY) {
            this.setDropPos(this.view.posAtCoords({
              x: YY.clientX,
              y: YY.clientY
            }))
          },
          dragleave(YY) {
            YY.target != this.view.contentDOM && this.view.contentDOM.contains(YY.relatedTarget) || this.setDropPos(null)
          },
          dragend() {
            this.setDropPos(null)
          },
          drop() {
            this.setDropPos(null)
          }
        }
      });

    function II() {
      return [FI, AI]
    }

    function RI(YY, rY, DY, FY, AY) {
      rY.lastIndex = 0;
      for (let IY, RY = YY.iterRange(DY, FY), OY = DY; !RY.next().done; OY += RY.value.length)
        if (!RY.lineBreak)
          for (; IY = rY.exec(RY.value);) AY(OY + IY.index, IY)
    }
    class OI {
      constructor(YY) {
        const {
          regexp: rY,
          decoration: DY,
          decorate: FY,
          boundary: AY,
          maxLength: IY = 1e3
        } = YY;
        if (!rY.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
        if (this.regexp = rY, FY) this.addMatch = (YY, rY, DY, AY) => FY(AY, DY, DY + YY[0].length, YY, rY);
        else if ("function" == typeof DY) this.addMatch = (YY, rY, FY, AY) => {
          let IY = DY(YY, rY, FY);
          IY && AY(FY, FY + YY[0].length, IY)
        };
        else {
          if (!DY) throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
          this.addMatch = (YY, rY, FY, AY) => AY(FY, FY + YY[0].length, DY)
        }
        this.boundary = AY, this.maxLength = IY
      }
      createDeco(YY) {
        let rY = new FY.z,
          DY = rY.add.bind(rY);
        for (let {
            from: FY,
            to: AY
          }
          of
          function(YY, rY) {
            let DY = YY.B_;
            if (1 == DY.length && DY[0].from == YY.viewport.from && DY[0].to == YY.viewport.to) return DY;
            let FY = [];
            for (let {
                from: AY,
                to: IY
              }
              of DY) AY = Math.max(YY.state.doc.lineAt(AY).from, AY - rY), IY = Math.min(YY.state.doc.lineAt(IY).to, IY + rY), FY.length && FY[FY.length - 1].to >= AY ? FY[FY.length - 1].to = IY : FY.push({
              from: AY,
              to: IY
            });
            return FY
          }(YY, this.maxLength)) RI(YY.state.doc, this.regexp, FY, AY, ((rY, FY) => this.addMatch(FY, YY, rY, DY)));
        return rY.finish()
      }
      updateDeco(YY, rY) {
        let DY = 1e9,
          FY = -1;
        return YY.docChanged && YY.changes.iterChanges(((rY, AY, IY, RY) => {
          RY >= YY.view.viewport.from && IY <= YY.view.viewport.to && (DY = Math.min(IY, DY), FY = Math.max(RY, FY))
        })), YY.viewportMoved || FY - DY > 1e3 ? this.createDeco(YY.view) : FY > -1 ? this.updateRange(YY.view, rY.map(YY.changes), DY, FY) : rY
      }
      updateRange(YY, rY, DY, FY) {
        for (let AY of YY.B_) {
          let IY = Math.max(AY.from, DY),
            RY = Math.min(AY.to, FY);
          if (RY >= IY) {
            let DY = YY.state.doc.lineAt(IY),
              FY = DY.to < RY ? YY.state.doc.lineAt(RY) : DY,
              OY = Math.max(AY.from, DY.from),
              gY = Math.min(AY.to, FY.to);
            if (this.boundary) {
              for (; IY > DY.from; IY--)
                if (this.boundary.test(DY.text[IY - 1 - DY.from])) {
                  OY = IY;
                  break
                } for (; RY < FY.to; RY++)
                if (this.boundary.test(FY.text[RY - FY.from])) {
                  gY = RY;
                  break
                }
            }
            let aY, vY = [],
              uY = (YY, rY, DY) => vY.push(DY.range(YY, rY));
            if (DY == FY)
              for (this.regexp.lastIndex = OY - DY.from;
                (aY = this.regexp.exec(DY.text)) && aY.index < gY - DY.from;) this.addMatch(aY, YY, aY.index + DY.from, uY);
            else RI(YY.state.doc, this.regexp, OY, gY, ((rY, DY) => this.addMatch(DY, YY, rY, uY)));
            rY = rY.update({
              filterFrom: OY,
              filterTo: gY,
              filter: (YY, rY) => YY < OY || rY > gY,
              add: vY
            })
          }
        }
        return rY
      }
    }
    const gI = null != /x/.unicode ? "gu" : "g",
      aI = new RegExp("[\0-\b\n-\x1f\x7f-\x9f\xad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]", gI),
      vI = {
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
    let uI = null;
    const sI = FY.r.define({
      combine(YY) {
        let rY = (0, FY.Y)(YY, {
          render: null,
          specialChars: aI,
          addSpecialChars: null
        });
        return (rY.replaceTabs = ! function() {
          var YY;
          if (null == uI && "undefined" != typeof document && document.body) {
            let rY = document.body.style;
            uI = null != (null !== (YY = rY.tabSize) && void 0 !== YY ? YY : rY.MozTabSize)
          }
          return uI || !1
        }()) && (rY.specialChars = new RegExp("\t|" + rY.specialChars.source, gI)), rY.addSpecialChars && (rY.specialChars = new RegExp(rY.specialChars.source + "|" + rY.addSpecialChars.source, gI)), rY
      }
    });

    function iI() {
      let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [sI.of(YY), yI || (yI = Pr.fromClass(class {
        constructor(YY) {
          this.view = YY, this.CA = ZY.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(YY.state.facet(sI)), this.CA = this.decorator.createDeco(YY)
        }
        makeDecorator(YY) {
          return new OI({
            regexp: YY.specialChars,
            decoration: (rY, DY, AY) => {
              let {
                doc: IY
              } = DY.state, RY = (0, FY.R)(rY[0], 0);
              if (9 == RY) {
                let YY = IY.lineAt(AY),
                  rY = DY.state.tabSize,
                  RY = (0, FY.Z)(YY.text, rY, AY - YY.from);
                return ZY.replace({
                  widget: new oI((rY - RY % rY) * this.view.defaultCharacterWidth / this.view.scaleX)
                })
              }
              return this.decorationCache[RY] || (this.decorationCache[RY] = ZY.replace({
                widget: new QI(YY, RY)
              }))
            },
            boundary: YY.replaceTabs ? void 0 : /[^]/
          })
        }
        update(YY) {
          let rY = YY.state.facet(sI);
          YY.startState.facet(sI) != rY ? (this.decorator = this.makeDecorator(rY), this.CA = this.decorator.createDeco(YY.view)) : this.CA = this.decorator.updateDeco(YY, this.CA)
        }
      }, {
        CA: YY => YY.CA
      }))]
    }
    let yI = null;
    class QI extends HY {
      constructor(YY, rY) {
        super(), this.options = YY, this.code = rY
      }
      eq(YY) {
        return YY.code == this.code
      }
      toDOM(YY) {
        let rY = function(YY) {
            return YY >= 32 ? "\u2022" : 10 == YY ? "\u2424" : String.fromCharCode(9216 + YY)
          }(this.code),
          DY = YY.state.phrase("Control character") + " " + (vI[this.code] || "0x" + this.code.toString(16)),
          FY = this.options.render && this.options.render(this.code, DY, rY);
        if (FY) return FY;
        let AY = document.createElement("span");
        return AY.textContent = rY, AY.title = DY, AY.setAttribute("aria-label", DY), AY.className = "cm-specialChar", AY
      }
      ignoreEvent() {
        return !1
      }
    }
    class oI extends HY {
      constructor(YY) {
        super(), this.width = YY
      }
      eq(YY) {
        return YY.width == this.width
      }
      toDOM() {
        let YY = document.createElement("span");
        return YY.textContent = "\t", YY.className = "cm-tab", YY.style.width = this.width + "px", YY
      }
      ignoreEvent() {
        return !1
      }
    }

    function WI() {
      return mI
    }
    const EI = ZY.line({
        class: "cm-activeLine"
      }),
      mI = Pr.fromClass(class {
        constructor(YY) {
          this.CA = this.getDeco(YY)
        }
        update(YY) {
          (YY.docChanged || YY.selectionSet) && (this.CA = this.getDeco(YY.view))
        }
        getDeco(YY) {
          let rY = -1,
            DY = [];
          for (let FY of YY.state.selection.ws) {
            let AY = YY.lineBlockAt(FY.head);
            AY.from > rY && (DY.push(EI.range(AY.from)), rY = AY.from)
          }
          return ZY.set(DY)
        }
      }, {
        CA: YY => YY.CA
      });
    class VI extends HY {
      constructor(YY) {
        super(), this.content = YY
      }
      toDOM(YY) {
        let rY = document.createElement("span");
        return rY.className = "cm-placeholder", rY.style.pointerEvents = "none", rY.appendChild("string" == typeof this.content ? document.createTextNode(this.content) : "function" == typeof this.content ? this.content(YY) : this.content.cloneNode(!0)), rY.setAttribute("aria-hidden", "true"), rY
      }
      coordsAt(YY) {
        let rY = YY.firstChild ? XY(YY.firstChild) : [];
        if (!rY.length) return null;
        let DY = window.getComputedStyle(YY.parentNode),
          FY = nY(rY[0], "rtl" != DY.direction),
          AY = parseInt(DY.lineHeight);
        return FY.bottom - FY.top > 1.5 * AY ? {
          left: FY.left,
          right: FY.right,
          top: FY.top,
          bottom: FY.top + AY
        } : FY
      }
      ignoreEvent() {
        return !1
      }
    }

    function SI(YY) {
      let rY = Pr.fromClass(class {
        constructor(rY) {
          this.view = rY, this.placeholder = YY ? ZY.set([ZY.widget({
            widget: new VI(YY),
            side: 1
          }).range(0)]) : ZY.none
        }
        get CA() {
          return this.view.state.doc.length ? ZY.none : this.placeholder
        }
      }, {
        CA: YY => YY.CA
      });
      return "string" == typeof YY ? [rY, NA.contentAttributes.of({
        "aria-placeholder": YY
      })] : rY
    }
    const lI = 2e3;

    function TI(YY, rY) {
      let DY = YY.posAtCoords({
          x: rY.clientX,
          y: rY.clientY
        }, !1),
        AY = YY.state.doc.lineAt(DY),
        IY = DY - AY.from,
        RY = IY > lI ? -1 : IY == AY.length ? function(YY, rY) {
          let DY = YY.coordsAtPos(YY.viewport.from);
          return DY ? Math.round(Math.abs((DY.left - rY) / YY.defaultCharacterWidth)) : -1
        }(YY, rY.clientX) : (0, FY.Z)(AY.text, YY.state.tabSize, DY - AY.from);
      return {
        line: AY.number,
        col: RY,
        off: IY
      }
    }

    function eI(YY, rY) {
      let DY = TI(YY, rY),
        AY = YY.state.selection;
      return DY ? {
        update(YY) {
          if (YY.docChanged) {
            let rY = YY.changes.mapPos(YY.startState.doc.line(DY.line).from),
              FY = YY.state.doc.lineAt(rY);
            DY = {
              line: FY.number,
              col: DY.col,
              off: Math.min(DY.off, FY.length)
            }, AY = AY.map(YY.changes)
          }
        },
        get(rY, IY, RY) {
          let OY = TI(YY, rY);
          if (!OY) return AY;
          let gY = function(YY, rY, DY) {
            let AY = Math.min(rY.line, DY.line),
              IY = Math.max(rY.line, DY.line),
              RY = [];
            if (rY.off > lI || DY.off > lI || rY.col < 0 || DY.col < 0) {
              let OY = Math.min(rY.off, DY.off),
                gY = Math.max(rY.off, DY.off);
              for (let rY = AY; rY <= IY; rY++) {
                let DY = YY.doc.line(rY);
                DY.length <= gY && RY.push(FY.n.range(DY.from + OY, DY.to + gY))
              }
            } else {
              let OY = Math.min(rY.col, DY.col),
                gY = Math.max(rY.col, DY.col);
              for (let rY = AY; rY <= IY; rY++) {
                let DY = YY.doc.line(rY),
                  AY = (0, FY.ab)(DY.text, OY, YY.tabSize, !0);
                if (AY < 0) RY.push(FY.n.cursor(DY.to));
                else {
                  let rY = (0, FY.ab)(DY.text, gY, YY.tabSize);
                  RY.push(FY.n.range(DY.from + AY, DY.from + rY))
                }
              }
            }
            return RY
          }(YY.state, DY, OY);
          return gY.length ? RY ? FY.n.create(gY.concat(AY.ws)) : FY.n.create(gY) : AY
        }
      } : null
    }

    function NI(YY) {
      let rY = (null === YY || void 0 === YY ? void 0 : YY.eventFilter) || (YY => YY.altKey && 0 == YY.button);
      return NA.mouseSelectionStyle.of(((YY, DY) => rY(DY) ? eI(YY, DY) : null))
    }
    const BI = {
        Alt: [18, YY => !!YY.altKey],
        Control: [17, YY => !!YY.ctrlKey],
        Shift: [16, YY => !!YY.shiftKey],
        Meta: [91, YY => !!YY.metaKey]
      },
      cI = {
        style: "cursor: crosshair"
      };

    function KI() {
      let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [rY, DY] = BI[YY.key || "Alt"],
        FY = Pr.fromClass(class {
          constructor(YY) {
            this.view = YY, this.isDown = !1
          }
          set(YY) {
            this.isDown != YY && (this.isDown = YY, this.view.update([]))
          }
        }, {
          eventObservers: {
            keydown(YY) {
              this.set(YY.keyCode == rY || DY(YY))
            },
            keyup(YY) {
              YY.keyCode != rY && DY(YY) || this.set(!1)
            },
            mousemove(YY) {
              this.set(DY(YY))
            }
          }
        });
      return [FY, NA.contentAttributes.of((YY => {
        var rY;
        return (null === (rY = YY.plugin(FY)) || void 0 === rY ? void 0 : rY.isDown) ? cI : null
      }))]
    }
    const HI = "-10000px";
    class zI {
      constructor(YY, rY, DY, FY) {
        this.facet = rY, this.createTooltipView = DY, this.removeTooltipView = FY, this.input = YY.state.facet(rY), this.tooltips = this.input.filter((YY => YY));
        let AY = null;
        this.tooltipViews = this.tooltips.map((YY => AY = DY(YY, AY)))
      }
      update(YY, rY) {
        var DY;
        let FY = YY.state.facet(this.facet),
          AY = FY.filter((YY => YY));
        if (FY === this.input) {
          for (let rY of this.tooltipViews) rY.update && rY.update(YY);
          return !1
        }
        let IY = [],
          RY = rY ? [] : null;
        for (let OY = 0; OY < AY.length; OY++) {
          let DY = AY[OY],
            FY = -1;
          if (DY) {
            for (let YY = 0; YY < this.tooltips.length; YY++) {
              let rY = this.tooltips[YY];
              rY && rY.create == DY.create && (FY = YY)
            }
            if (FY < 0) IY[OY] = this.createTooltipView(DY, OY ? IY[OY - 1] : null), RY && (RY[OY] = !!DY.above);
            else {
              let DY = IY[OY] = this.tooltipViews[FY];
              RY && (RY[OY] = rY[FY]), DY.update && DY.update(YY)
            }
          }
        }
        for (let OY of this.tooltipViews) IY.indexOf(OY) < 0 && (this.removeTooltipView(OY), null === (DY = OY.destroy) || void 0 === DY || DY.call(OY));
        return rY && (RY.forEach(((YY, DY) => rY[DY] = YY)), rY.length = RY.length), this.input = FY, this.tooltips = AY, this.tooltipViews = IY, !0
      }
    }

    function ZI(YY) {
      let rY = YY.dom.ownerDocument.documentElement;
      return {
        top: 0,
        left: 0,
        bottom: rY.clientHeight,
        right: rY.clientWidth
      }
    }
    const CI = FY.r.define({
        combine: YY => {
          var rY, DY, FY;
          return {
            position: TY.ios ? "absolute" : (null === (rY = YY.find((YY => YY.position))) || void 0 === rY ? void 0 : rY.position) || "fixed",
            parent: (null === (DY = YY.find((YY => YY.parent))) || void 0 === DY ? void 0 : DY.parent) || null,
            tooltipSpace: (null === (FY = YY.find((YY => YY.tooltipSpace))) || void 0 === FY ? void 0 : FY.tooltipSpace) || ZI
          }
        }
      }),
      fI = new WeakMap,
      jI = Pr.fromClass(class {
        constructor(YY) {
          this.view = YY, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
          let rY = YY.state.facet(CI);
          this.position = rY.position, this.parent = rY.parent, this.classes = YY.themeClasses, this.createContainer(), this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this
          }, this.resizeObserver = "function" == typeof ResizeObserver ? new ResizeObserver((() => this.measureSoon())) : null, this.manager = new zI(YY, MI, ((YY, rY) => this.createTooltip(YY, rY)), (YY => {
            this.resizeObserver && this.resizeObserver.unobserve(YY.dom), YY.dom.remove()
          })), this.above = this.manager.tooltips.map((YY => !!YY.above)), this.intersectionObserver = "function" == typeof IntersectionObserver ? new IntersectionObserver((YY => {
            Date.now() > this.lastTransaction - 50 && YY.length > 0 && YY[YY.length - 1].intersectionRatio < 1 && this.measureSoon()
          }), {
            threshold: [1]
          }) : null, this.observeIntersection(), YY.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure()
        }
        createContainer() {
          this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom
        }
        observeIntersection() {
          if (this.intersectionObserver) {
            this.intersectionObserver.disconnect();
            for (let YY of this.manager.tooltipViews) this.intersectionObserver.observe(YY.dom)
          }
        }
        measureSoon() {
          this.measureTimeout < 0 && (this.measureTimeout = setTimeout((() => {
            this.measureTimeout = -1, this.maybeMeasure()
          }), 50))
        }
        update(YY) {
          YY.transactions.length && (this.lastTransaction = Date.now());
          let rY = this.manager.update(YY, this.above);
          rY && this.observeIntersection();
          let DY = rY || YY.geometryChanged,
            FY = YY.state.facet(CI);
          if (FY.position != this.position && !this.madeAbsolute) {
            this.position = FY.position;
            for (let YY of this.manager.tooltipViews) YY.dom.style.position = this.position;
            DY = !0
          }
          if (FY.parent != this.parent) {
            this.parent && this.container.remove(), this.parent = FY.parent, this.createContainer();
            for (let YY of this.manager.tooltipViews) this.container.appendChild(YY.dom);
            DY = !0
          } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
          DY && this.maybeMeasure()
        }
        createTooltip(YY, rY) {
          let DY = YY.create(this.view),
            FY = rY ? rY.dom : null;
          if (DY.dom.classList.add("cm-tooltip"), YY.arrow && !DY.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
            let YY = document.createElement("div");
            YY.className = "cm-tooltip-arrow", DY.dom.appendChild(YY)
          }
          return DY.dom.style.position = this.position, DY.dom.style.top = HI, DY.dom.style.left = "0px", this.container.insertBefore(DY.dom, FY), DY.mount && DY.mount(this.view), this.resizeObserver && this.resizeObserver.observe(DY.dom), DY
        }
        destroy() {
          var YY, rY, DY;
          this.view.win.removeEventListener("resize", this.measureSoon);
          for (let FY of this.manager.tooltipViews) FY.dom.remove(), null === (YY = FY.destroy) || void 0 === YY || YY.call(FY);
          this.parent && this.container.remove(), null === (rY = this.resizeObserver) || void 0 === rY || rY.disconnect(), null === (DY = this.intersectionObserver) || void 0 === DY || DY.disconnect(), clearTimeout(this.measureTimeout)
        }
        readMeasure() {
          let YY = 1,
            rY = 1,
            DY = !1;
          if ("fixed" == this.position && this.manager.tooltipViews.length) {
            let {
              dom: YY
            } = this.manager.tooltipViews[0];
            if (TY.safari) {
              let rY = YY.getBoundingClientRect();
              DY = Math.abs(rY.top + 1e4) > 1 || Math.abs(rY.left) > 1
            } else DY = !!YY.offsetParent && YY.offsetParent != this.container.ownerDocument.body
          }
          if (DY || "absolute" == this.position)
            if (this.parent) {
              let DY = this.parent.getBoundingClientRect();
              DY.width && DY.height && (YY = DY.width / this.parent.offsetWidth, rY = DY.height / this.parent.offsetHeight)
            } else({
              scaleX: YY,
              scaleY: rY
            } = this.view.viewState);
          let FY = this.view.scrollDOM.getBoundingClientRect(),
            AY = OD(this.view);
          return {
            visible: {
              left: FY.left + AY.left,
              top: FY.top + AY.top,
              right: FY.right - AY.right,
              bottom: FY.bottom - AY.bottom
            },
            parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
            pos: this.manager.tooltips.map(((YY, rY) => {
              let DY = this.manager.tooltipViews[rY];
              return DY.getCoords ? DY.getCoords(YY.pos) : this.view.coordsAtPos(YY.pos)
            })),
            size: this.manager.tooltipViews.map((YY => {
              let {
                dom: rY
              } = YY;
              return rY.getBoundingClientRect()
            })),
            space: this.view.state.facet(CI).tooltipSpace(this.view),
            scaleX: YY,
            scaleY: rY,
            makeAbsolute: DY
          }
        }
        writeMeasure(YY) {
          var rY;
          if (YY.makeAbsolute) {
            this.madeAbsolute = !0, this.position = "absolute";
            for (let YY of this.manager.tooltipViews) YY.dom.style.position = "absolute"
          }
          let {
            visible: DY,
            space: FY,
            scaleX: AY,
            scaleY: IY
          } = YY, RY = [];
          for (let OY = 0; OY < this.manager.tooltips.length; OY++) {
            let gY = this.manager.tooltips[OY],
              aY = this.manager.tooltipViews[OY],
              {
                dom: vY
              } = aY,
              uY = YY.pos[OY],
              sY = YY.size[OY];
            if (!uY || !1 !== gY.clip && (uY.bottom <= Math.max(DY.top, FY.top) || uY.top >= Math.min(DY.bottom, FY.bottom) || uY.right < Math.max(DY.left, FY.left) - .1 || uY.left > Math.min(DY.right, FY.right) + .1)) {
              vY.style.top = HI;
              continue
            }
            let iY = gY.arrow ? aY.dom.querySelector(".cm-tooltip-arrow") : null,
              yY = iY ? 7 : 0,
              QY = sY.right - sY.left,
              oY = null !== (rY = fI.get(aY)) && void 0 !== rY ? rY : sY.bottom - sY.top,
              WY = aY.offset || JI,
              EY = this.view.textDirection == ar.LTR,
              mY = sY.width > FY.right - FY.left ? EY ? FY.left : FY.right - sY.width : EY ? Math.max(FY.left, Math.min(uY.left - (iY ? 14 : 0) + WY.x, FY.right - QY)) : Math.min(Math.max(FY.left, uY.left - QY + (iY ? 14 : 0) - WY.x), FY.right - QY),
              VY = this.above[OY];
            !gY.strictSide && (VY ? uY.top - oY - yY - WY.y < FY.top : uY.bottom + oY + yY + WY.y > FY.bottom) && VY == FY.bottom - uY.bottom > uY.top - FY.top && (VY = this.above[OY] = !VY);
            let SY = (VY ? uY.top - FY.top : FY.bottom - uY.bottom) - yY;
            if (SY < oY && !1 !== aY.resize) {
              if (SY < this.view.defaultLineHeight) {
                vY.style.top = HI;
                continue
              }
              fI.set(aY, oY), vY.style.height = (oY = SY) / IY + "px"
            } else vY.style.height && (vY.style.height = "");
            let lY = VY ? uY.top - oY - yY - WY.y : uY.bottom + yY + WY.y,
              TY = mY + QY;
            if (!0 !== aY.overlap)
              for (let YY of RY) YY.left < TY && YY.right > mY && YY.top < lY + oY && YY.bottom > lY && (lY = VY ? YY.top - oY - 2 - yY : YY.bottom + yY + 2);
            if ("absolute" == this.position ? (vY.style.top = (lY - YY.parent.top) / IY + "px", hI(vY, (mY - YY.parent.left) / AY)) : (vY.style.top = lY / IY + "px", hI(vY, mY / AY)), iY) {
              let YY = uY.left + (EY ? WY.x : -WY.x) - (mY + 14 - 7);
              iY.style.left = YY / AY + "px"
            }!0 !== aY.overlap && RY.push({
              left: mY,
              top: lY,
              right: TY,
              bottom: lY + oY
            }), vY.classList.toggle("cm-tooltip-above", VY), vY.classList.toggle("cm-tooltip-below", !VY), aY.positioned && aY.positioned(YY.space)
          }
        }
        maybeMeasure() {
          if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
            for (let YY of this.manager.tooltipViews) YY.dom.style.top = HI
        }
      }, {
        eventObservers: {
          scroll() {
            this.maybeMeasure()
          }
        }
      });

    function hI(YY, rY) {
      let DY = parseInt(YY.style.left, 10);
      (isNaN(DY) || Math.abs(rY - DY) > 1) && (YY.style.left = rY + "px")
    }
    const dI = NA.baseTheme({
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
      JI = {
        x: 0,
        y: 0
      },
      MI = FY.r.define({
        enables: [jI, dI]
      }),
      wI = FY.r.define({
        combine: YY => YY.reduce(((YY, rY) => YY.concat(rY)), [])
      });
    class bI {
      static create(YY) {
        return new bI(YY)
      }
      constructor(YY) {
        this.view = YY, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new zI(YY, wI, ((YY, rY) => this.createHostedView(YY, rY)), (YY => YY.dom.remove()))
      }
      createHostedView(YY, rY) {
        let DY = YY.create(this.view);
        return DY.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(DY.dom, rY ? rY.dom.nextSibling : this.dom.firstChild), this.mounted && DY.mount && DY.mount(this.view), DY
      }
      mount(YY) {
        for (let rY of this.manager.tooltipViews) rY.mount && rY.mount(YY);
        this.mounted = !0
      }
      positioned(YY) {
        for (let rY of this.manager.tooltipViews) rY.positioned && rY.positioned(YY)
      }
      update(YY) {
        this.manager.update(YY)
      }
      destroy() {
        var YY;
        for (let rY of this.manager.tooltipViews) null === (YY = rY.destroy) || void 0 === YY || YY.call(rY)
      }
      passProp(YY) {
        let rY;
        for (let DY of this.manager.tooltipViews) {
          let FY = DY[YY];
          if (void 0 !== FY)
            if (void 0 === rY) rY = FY;
            else if (rY !== FY) return
        }
        return rY
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
    const XI = MI.compute([wI], (YY => {
      let rY = YY.facet(wI);
      return 0 === rY.length ? null : {
        pos: Math.min(...rY.map((YY => YY.pos))),
        end: Math.max(...rY.map((YY => {
          var rY;
          return null !== (rY = YY.end) && void 0 !== rY ? rY : YY.pos
        }))),
        create: bI.create,
        above: rY[0].above,
        arrow: rY.some((YY => YY.arrow))
      }
    }));
    class qI {
      constructor(YY, rY, DY, FY, AY) {
        this.view = YY, this.source = rY, this.field = DY, this.setHover = FY, this.hoverTime = AY, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
          x: 0,
          y: 0,
          target: YY.dom,
          time: 0
        }, this.checkHover = this.checkHover.bind(this), YY.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), YY.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this))
      }
      update() {
        this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout((() => this.startHover()), 20))
      }
      get active() {
        return this.view.state.field(this.field)
      }
      checkHover() {
        if (this.hoverTimeout = -1, this.active.length) return;
        let YY = Date.now() - this.lastMove.time;
        YY < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - YY) : this.startHover()
      }
      startHover() {
        clearTimeout(this.restartTimeout);
        let {
          view: YY,
          lastMove: rY
        } = this, DY = YY.docView.tile.nearest(rY.target);
        if (!DY) return;
        let FY, AY = 1;
        if (DY.isWidget()) FY = DY.posAtStart;
        else {
          if (FY = YY.posAtCoords(rY), null == FY) return;
          let DY = YY.coordsAtPos(FY);
          if (!DY || rY.y < DY.top || rY.y > DY.bottom || rY.x < DY.left - YY.defaultCharacterWidth || rY.x > DY.right + YY.defaultCharacterWidth) return;
          let IY = YY.bidiSpans(YY.state.doc.lineAt(FY)).find((YY => YY.from <= FY && YY.to >= FY)),
            RY = IY && IY.dir == ar.RTL ? -1 : 1;
          AY = rY.x < DY.left ? -RY : RY
        }
        let IY = this.source(YY, FY, AY);
        if (null === IY || void 0 === IY ? void 0 : IY.then) {
          let rY = this.pending = {
            pos: FY
          };
          IY.then((DY => {
            this.pending == rY && (this.pending = null, !DY || Array.isArray(DY) && !DY.length || YY.dispatch({
              effects: this.setHover.of(Array.isArray(DY) ? DY : [DY])
            }))
          }), (rY => kr(YY.state, rY, "hover tooltip")))
        } else !IY || Array.isArray(IY) && !IY.length || YY.dispatch({
          effects: this.setHover.of(Array.isArray(IY) ? IY : [IY])
        })
      }
      get tooltip() {
        let YY = this.view.plugin(jI),
          rY = YY ? YY.manager.tooltips.findIndex((YY => YY.create == bI.create)) : -1;
        return rY > -1 ? YY.manager.tooltipViews[rY] : null
      }
      mousemove(YY) {
        var rY, DY;
        this.lastMove = {
          x: YY.clientX,
          y: YY.clientY,
          target: YY.target,
          time: Date.now()
        }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
        let {
          active: FY,
          tooltip: AY
        } = this;
        if (FY.length && AY && ! function(YY, rY) {
            let DY, {
              left: FY,
              right: AY,
              top: IY,
              bottom: RY
            } = YY.getBoundingClientRect();
            if (DY = YY.querySelector(".cm-tooltip-arrow")) {
              let YY = DY.getBoundingClientRect();
              IY = Math.min(YY.top, IY), RY = Math.max(YY.bottom, RY)
            }
            return rY.clientX >= FY - pI && rY.clientX <= AY + pI && rY.clientY >= IY - pI && rY.clientY <= RY + pI
          }(AY.dom, YY) || this.pending) {
          let {
            pos: AY
          } = FY[0] || this.pending, IY = null !== (DY = null === (rY = FY[0]) || void 0 === rY ? void 0 : rY.end) && void 0 !== DY ? DY : AY;
          (AY == IY ? this.view.posAtCoords(this.lastMove) == AY : function(YY, rY, DY, FY, AY) {
            let IY = YY.scrollDOM.getBoundingClientRect(),
              RY = YY.documentTop + YY.documentPadding.top + YY.contentHeight;
            if (IY.left > FY || IY.right < FY || IY.top > AY || Math.min(IY.bottom, RY) < AY) return !1;
            let OY = YY.posAtCoords({
              x: FY,
              y: AY
            }, !1);
            return OY >= rY && OY <= DY
          }(this.view, AY, IY, YY.clientX, YY.clientY)) || (this.view.dispatch({
            effects: this.setHover.of([])
          }), this.pending = null)
        }
      }
      mouseleave(YY) {
        clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
        let {
          active: rY
        } = this;
        if (rY.length) {
          let {
            tooltip: rY
          } = this;
          rY && rY.dom.contains(YY.relatedTarget) ? this.watchTooltipLeave(rY.dom) : this.view.dispatch({
            effects: this.setHover.of([])
          })
        }
      }
      watchTooltipLeave(YY) {
        let rY = DY => {
          YY.removeEventListener("mouseleave", rY), this.active.length && !this.view.dom.contains(DY.relatedTarget) && this.view.dispatch({
            effects: this.setHover.of([])
          })
        };
        YY.addEventListener("mouseleave", rY)
      }
      destroy() {
        clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove)
      }
    }
    const pI = 4;

    function kI(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        DY = FY.E.define(),
        AY = FY.G.define({
          create: () => [],
          update(YY, AY) {
            if (YY.length && (rY.hideOnChange && (AY.docChanged || AY.selection) ? YY = [] : rY.hideOn && (YY = YY.filter((YY => !rY.hideOn(AY, YY)))), AY.docChanged)) {
              let rY = [];
              for (let DY of YY) {
                let YY = AY.changes.mapPos(DY.pos, -1, FY.u.TrackDel);
                if (null != YY) {
                  let FY = Object.assign(Object.create(null), DY);
                  FY.pos = YY, null != FY.end && (FY.end = AY.changes.mapPos(FY.end)), rY.push(FY)
                }
              }
              YY = rY
            }
            for (let rY of AY.effects) rY.is(DY) && (YY = rY.value), rY.is(xI) && (YY = []);
            return YY
          },
          provide: YY => wI.from(YY)
        });
      return {
        active: AY,
        extension: [AY, Pr.define((FY => new qI(FY, YY, AY, DY, rY.hoverTime || 300))), XI]
      }
    }

    function GI(YY, rY) {
      let DY = YY.plugin(jI);
      if (!DY) return null;
      let FY = DY.manager.tooltips.indexOf(rY);
      return FY < 0 ? null : DY.manager.tooltipViews[FY]
    }
    const xI = FY.E.define();
    const nI = FY.r.define({
      combine(YY) {
        let rY, DY;
        for (let FY of YY) rY = rY || FY.topContainer, DY = DY || FY.bottomContainer;
        return {
          topContainer: rY,
          bottomContainer: DY
        }
      }
    });

    function PI(YY, rY) {
      let DY = YY.plugin(UI),
        FY = DY ? DY.specs.indexOf(rY) : -1;
      return FY > -1 ? DY.panels[FY] : null
    }
    const UI = Pr.fromClass(class {
      constructor(YY) {
        this.input = YY.state.facet(YR), this.specs = this.input.filter((YY => YY)), this.panels = this.specs.map((rY => rY(YY)));
        let rY = YY.state.facet(nI);
        this.top = new LI(YY, !0, rY.topContainer), this.bottom = new LI(YY, !1, rY.bottomContainer), this.top.sync(this.panels.filter((YY => YY.top))), this.bottom.sync(this.panels.filter((YY => !YY.top)));
        for (let DY of this.panels) DY.dom.classList.add("cm-panel"), DY.mount && DY.mount()
      }
      update(YY) {
        let rY = YY.state.facet(nI);
        this.top.container != rY.topContainer && (this.top.sync([]), this.top = new LI(YY.view, !0, rY.topContainer)), this.bottom.container != rY.bottomContainer && (this.bottom.sync([]), this.bottom = new LI(YY.view, !1, rY.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
        let DY = YY.state.facet(YR);
        if (DY != this.input) {
          let rY = DY.filter((YY => YY)),
            FY = [],
            AY = [],
            IY = [],
            RY = [];
          for (let DY of rY) {
            let rY, OY = this.specs.indexOf(DY);
            OY < 0 ? (rY = DY(YY.view), RY.push(rY)) : (rY = this.panels[OY], rY.update && rY.update(YY)), FY.push(rY), (rY.top ? AY : IY).push(rY)
          }
          this.specs = rY, this.panels = FY, this.top.sync(AY), this.bottom.sync(IY);
          for (let YY of RY) YY.dom.classList.add("cm-panel"), YY.mount && YY.mount()
        } else
          for (let FY of this.panels) FY.update && FY.update(YY)
      }
      destroy() {
        this.top.sync([]), this.bottom.sync([])
      }
    }, {
      provide: YY => NA.scrollMargins.of((rY => {
        let DY = rY.plugin(YY);
        return DY && {
          top: DY.top.scrollMargin(),
          bottom: DY.bottom.scrollMargin()
        }
      }))
    });
    class LI {
      constructor(YY, rY, DY) {
        this.view = YY, this.top = rY, this.container = DY, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses()
      }
      sync(YY) {
        for (let rY of this.panels) rY.destroy && YY.indexOf(rY) < 0 && rY.destroy();
        this.panels = YY, this.syncDOM()
      }
      syncDOM() {
        if (0 == this.panels.length) return void(this.dom && (this.dom.remove(), this.dom = void 0));
        if (!this.dom) {
          this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
          let YY = this.container || this.view.dom;
          YY.insertBefore(this.dom, this.top ? YY.firstChild : null)
        }
        let YY = this.dom.firstChild;
        for (let rY of this.panels)
          if (rY.dom.parentNode == this.dom) {
            for (; YY != rY.dom;) YY = tI(YY);
            YY = YY.nextSibling
          } else this.dom.insertBefore(rY.dom, YY);
        for (; YY;) YY = tI(YY)
      }
      scrollMargin() {
        return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top)
      }
      syncClasses() {
        if (this.container && this.classes != this.view.themeClasses) {
          for (let YY of this.classes.split(" ")) YY && this.container.classList.remove(YY);
          for (let YY of (this.classes = this.view.themeClasses).split(" ")) YY && this.container.classList.add(YY)
        }
      }
    }

    function tI(YY) {
      let rY = YY.nextSibling;
      return YY.remove(), rY
    }
    const YR = FY.r.define({
      enables: UI
    });

    function rR(YY, rY) {
      let DY, AY = new Promise((YY => DY = YY)),
        IY = YY => function(YY, rY, DY) {
          let FY = rY.content ? rY.content(YY, (() => RY(null))) : null;
          if (!FY) {
            if (FY = (0, uY.e)("form"), rY.input) {
              let YY = (0, uY.e)("input", rY.input);
              /^(text|password|number|email|tel|url)$/.test(YY.type) && YY.classList.add("cm-textfield"), YY.name || (YY.name = "input"), FY.appendChild((0, uY.e)("label", (rY.label || "") + ": ", YY))
            } else FY.appendChild(document.createTextNode(rY.label || ""));
            FY.appendChild(document.createTextNode(" ")), FY.appendChild((0, uY.e)("button", {
              class: "cm-button",
              type: "submit"
            }, rY.submitLabel || "OK"))
          }
          let AY = "FORM" == FY.nodeName ? [FY] : FY.querySelectorAll("form");
          for (let OY = 0; OY < AY.length; OY++) {
            let YY = AY[OY];
            YY.addEventListener("keydown", (rY => {
              27 == rY.keyCode ? (rY.preventDefault(), RY(null)) : 13 == rY.keyCode && (rY.preventDefault(), RY(YY))
            })), YY.addEventListener("submit", (rY => {
              rY.preventDefault(), RY(YY)
            }))
          }
          let IY = (0, uY.e)("div", FY, (0, uY.e)("button", {
            onclick: () => RY(null),
            "aria-label": YY.state.phrase("close"),
            class: "cm-dialog-close",
            type: "button"
          }, ["\xd7"]));
          rY.class && (IY.className = rY.class);

          function RY(rY) {
            IY.contains(IY.ownerDocument.activeElement) && YY.focus(), DY(rY)
          }
          return IY.classList.add("cm-dialog"), {
            dom: IY,
            top: rY.top,
            mount: () => {
              if (rY.focus) {
                let YY;
                YY = "string" == typeof rY.focus ? FY.querySelector(rY.focus) : FY.querySelector("input") || FY.querySelector("button"), YY && "select" in YY ? YY.select() : YY && "focus" in YY && YY.focus()
              }
            }
          }
        }(YY, rY, DY);
      YY.state.field(DR, !1) ? YY.dispatch({
        effects: FR.of(IY)
      }) : YY.dispatch({
        effects: FY.E.appendConfig.of(DR.init((() => [IY])))
      });
      let RY = AR.of(IY);
      return {
        close: RY,
        result: AY.then((rY => ((YY.win.queueMicrotask || (rY => YY.win.setTimeout(rY, 10)))((() => {
          YY.state.field(DR).indexOf(IY) > -1 && YY.dispatch({
            effects: RY
          })
        })), rY)))
      }
    }
    const DR = FY.G.define({
        create: () => [],
        update(YY, rY) {
          for (let DY of rY.effects) DY.is(FR) ? YY = [DY.value].concat(YY) : DY.is(AR) && (YY = YY.filter((YY => YY != DY.value)));
          return YY
        },
        provide: YY => YR.computeN([YY], (rY => rY.field(YY)))
      }),
      FR = FY.E.define(),
      AR = FY.E.define();
    class IR extends FY.C {
      compare(YY) {
        return this == YY || this.constructor == YY.constructor && this.eq(YY)
      }
      eq(YY) {
        return !1
      }
      destroy(YY) {}
    }
    IR.prototype.elementClass = "", IR.prototype.toDOM = void 0, IR.prototype.mapMode = FY.u.TrackBefore, IR.prototype.startSide = IR.prototype.endSide = -1, IR.prototype.point = !0;
    const RR = FY.r.define(),
      OR = FY.r.define(),
      gR = {
        class: "",
        renderEmptyElements: !1,
        elementStyle: "",
        markers: () => FY.B.empty,
        lineMarker: () => null,
        widgetMarker: () => null,
        lineMarkerChange: null,
        initialSpacer: null,
        updateSpacer: null,
        domEventHandlers: {},
        side: "before"
      },
      aR = FY.r.define();

    function vR(YY) {
      return [sR(), aR.of({
        ...gR,
        ...YY
      })]
    }
    const uR = FY.r.define({
      combine: YY => YY.some((YY => YY))
    });

    function sR(YY) {
      let rY = [iR];
      return YY && !1 === YY.fixed && rY.push(uR.of(!0)), rY
    }
    const iR = Pr.fromClass(class {
      constructor(YY) {
        this.view = YY, this.domAfter = null, this.prevViewport = YY.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = YY.state.facet(aR).map((rY => new WR(YY, rY))), this.fixed = !YY.state.facet(uR);
        for (let rY of this.gutters) "after" == rY.config.side ? this.getDOMAfter().appendChild(rY.dom) : this.dom.appendChild(rY.dom);
        this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), YY.scrollDOM.insertBefore(this.dom, YY.contentDOM)
      }
      getDOMAfter() {
        return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter
      }
      update(YY) {
        if (this.updateGutters(YY)) {
          let rY = this.prevViewport,
            DY = YY.view.viewport,
            FY = Math.min(rY.to, DY.to) - Math.max(rY.from, DY.from);
          this.syncGutters(FY < .8 * (DY.to - DY.from))
        }
        if (YY.geometryChanged) {
          let YY = this.view.contentHeight / this.view.scaleY + "px";
          this.dom.style.minHeight = YY, this.domAfter && (this.domAfter.style.minHeight = YY)
        }
        this.view.state.facet(uR) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = YY.view.viewport
      }
      syncGutters(YY) {
        let rY = this.dom.nextSibling;
        YY && (this.dom.remove(), this.domAfter && this.domAfter.remove());
        let DY = FY.B.iter(this.view.state.facet(RR), this.view.viewport.from),
          AY = [],
          IY = this.gutters.map((YY => new oR(YY, this.view.viewport, -this.view.documentPadding.top)));
        for (let FY of this.view.viewportLineBlocks)
          if (AY.length && (AY = []), Array.isArray(FY.type)) {
            let YY = !0;
            for (let rY of FY.type)
              if (rY.type == zY.Text && YY) {
                QR(DY, AY, rY.from);
                for (let YY of IY) YY.line(this.view, rY, AY);
                YY = !1
              } else if (rY.widget)
              for (let YY of IY) YY.widget(this.view, rY)
          } else if (FY.type == zY.Text) {
          QR(DY, AY, FY.from);
          for (let YY of IY) YY.line(this.view, FY, AY)
        } else if (FY.widget)
          for (let YY of IY) YY.widget(this.view, FY);
        for (let FY of IY) FY.finish();
        YY && (this.view.scrollDOM.insertBefore(this.dom, rY), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter))
      }
      updateGutters(YY) {
        let rY = YY.startState.facet(aR),
          DY = YY.state.facet(aR),
          AY = YY.docChanged || YY.heightChanged || YY.viewportChanged || !FY.B.eq(YY.startState.facet(RR), YY.state.facet(RR), YY.view.viewport.from, YY.view.viewport.to);
        if (rY == DY)
          for (let FY of this.gutters) FY.update(YY) && (AY = !0);
        else {
          AY = !0;
          let FY = [];
          for (let AY of DY) {
            let DY = rY.indexOf(AY);
            DY < 0 ? FY.push(new WR(this.view, AY)) : (this.gutters[DY].update(YY), FY.push(this.gutters[DY]))
          }
          for (let YY of this.gutters) YY.dom.remove(), FY.indexOf(YY) < 0 && YY.destroy();
          for (let YY of FY) "after" == YY.config.side ? this.getDOMAfter().appendChild(YY.dom) : this.dom.appendChild(YY.dom);
          this.gutters = FY
        }
        return AY
      }
      destroy() {
        for (let YY of this.gutters) YY.destroy();
        this.dom.remove(), this.domAfter && this.domAfter.remove()
      }
    }, {
      provide: YY => NA.scrollMargins.of((rY => {
        let DY = rY.plugin(YY);
        if (!DY || 0 == DY.gutters.length || !DY.fixed) return null;
        let FY = DY.dom.offsetWidth * rY.scaleX,
          AY = DY.domAfter ? DY.domAfter.offsetWidth * rY.scaleX : 0;
        return rY.textDirection == ar.LTR ? {
          left: FY,
          right: AY
        } : {
          right: FY,
          left: AY
        }
      }))
    });

    function yR(YY) {
      return Array.isArray(YY) ? YY : [YY]
    }

    function QR(YY, rY, DY) {
      for (; YY.value && YY.from <= DY;) YY.from == DY && rY.push(YY.value), YY.next()
    }
    class oR {
      constructor(YY, rY, DY) {
        this.gutter = YY, this.height = DY, this.i = 0, this.cursor = FY.B.iter(YY.markers, rY.from)
      }
      addElement(YY, rY, DY) {
        let {
          gutter: FY
        } = this, AY = (rY.top - this.height) / YY.scaleY, IY = rY.height / YY.scaleY;
        if (this.i == FY.elements.length) {
          let rY = new ER(YY, IY, AY, DY);
          FY.elements.push(rY), FY.dom.appendChild(rY.dom)
        } else FY.elements[this.i].update(YY, IY, AY, DY);
        this.height = rY.bottom, this.i++
      }
      line(YY, rY, DY) {
        let FY = [];
        QR(this.cursor, FY, rY.from), DY.length && (FY = FY.concat(DY));
        let AY = this.gutter.config.lineMarker(YY, rY, FY);
        AY && FY.unshift(AY);
        let IY = this.gutter;
        (0 != FY.length || IY.config.renderEmptyElements) && this.addElement(YY, rY, FY)
      }
      widget(YY, rY) {
        let DY = this.gutter.config.widgetMarker(YY, rY.widget, rY),
          FY = DY ? [DY] : null;
        for (let AY of YY.state.facet(OR)) {
          let DY = AY(YY, rY.widget, rY);
          DY && (FY || (FY = [])).push(DY)
        }
        FY && this.addElement(YY, rY, FY)
      }
      finish() {
        let YY = this.gutter;
        for (; YY.elements.length > this.i;) {
          let rY = YY.elements.pop();
          YY.dom.removeChild(rY.dom), rY.destroy()
        }
      }
    }
    class WR {
      constructor(YY, rY) {
        this.view = YY, this.config = rY, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
        for (let DY in rY.domEventHandlers) this.dom.addEventListener(DY, (FY => {
          let AY, IY = FY.target;
          if (IY != this.dom && this.dom.contains(IY)) {
            for (; IY.parentNode != this.dom;) IY = IY.parentNode;
            let YY = IY.getBoundingClientRect();
            AY = (YY.top + YY.bottom) / 2
          } else AY = FY.clientY;
          let RY = YY.lineBlockAtHeight(AY - YY.documentTop);
          rY.domEventHandlers[DY](YY, RY, FY) && FY.preventDefault()
        }));
        this.markers = yR(rY.markers(YY)), rY.initialSpacer && (this.spacer = new ER(YY, 0, 0, [rY.initialSpacer(YY)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none")
      }
      update(YY) {
        let rY = this.markers;
        if (this.markers = yR(this.config.markers(YY.view)), this.spacer && this.config.updateSpacer) {
          let rY = this.config.updateSpacer(this.spacer.markers[0], YY);
          rY != this.spacer.markers[0] && this.spacer.update(YY.view, 0, 0, [rY])
        }
        let DY = YY.view.viewport;
        return !FY.B.eq(this.markers, rY, DY.from, DY.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(YY)
      }
      destroy() {
        for (let YY of this.elements) YY.destroy()
      }
    }
    class ER {
      constructor(YY, rY, DY, FY) {
        this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(YY, rY, DY, FY)
      }
      update(YY, rY, DY, FY) {
        this.height != rY && (this.height = rY, this.dom.style.height = rY + "px"), this.above != DY && (this.dom.style.marginTop = (this.above = DY) ? DY + "px" : ""),
          function(YY, rY) {
            if (YY.length != rY.length) return !1;
            for (let DY = 0; DY < YY.length; DY++)
              if (!YY[DY].compare(rY[DY])) return !1;
            return !0
          }(this.markers, FY) || this.setMarkers(YY, FY)
      }
      setMarkers(YY, rY) {
        let DY = "cm-gutterElement",
          FY = this.dom.firstChild;
        for (let AY = 0, IY = 0;;) {
          let RY = IY,
            OY = AY < rY.length ? rY[AY++] : null,
            gY = !1;
          if (OY) {
            let YY = OY.elementClass;
            YY && (DY += " " + YY);
            for (let rY = IY; rY < this.markers.length; rY++)
              if (this.markers[rY].compare(OY)) {
                RY = rY, gY = !0;
                break
              }
          } else RY = this.markers.length;
          for (; IY < RY;) {
            let YY = this.markers[IY++];
            if (YY.toDOM) {
              YY.destroy(FY);
              let rY = FY.nextSibling;
              FY.remove(), FY = rY
            }
          }
          if (!OY) break;
          OY.toDOM && (gY ? FY = FY.nextSibling : this.dom.insertBefore(OY.toDOM(YY), FY)), gY && IY++
        }
        this.dom.className = DY, this.markers = rY
      }
      destroy() {
        this.setMarkers(null, [])
      }
    }
    const mR = FY.r.define(),
      VR = FY.r.define(),
      SR = FY.r.define({
        combine: YY => (0, FY.Y)(YY, {
          formatNumber: String,
          domEventHandlers: {}
        }, {
          domEventHandlers(YY, rY) {
            let DY = Object.assign({}, YY);
            for (let FY in rY) {
              let YY = DY[FY],
                AY = rY[FY];
              DY[FY] = YY ? (rY, DY, FY) => YY(rY, DY, FY) || AY(rY, DY, FY) : AY
            }
            return DY
          }
        })
      });
    class lR extends IR {
      constructor(YY) {
        super(), this.number = YY
      }
      eq(YY) {
        return this.number == YY.number
      }
      toDOM() {
        return document.createTextNode(this.number)
      }
    }

    function TR(YY, rY) {
      return YY.state.facet(SR).formatNumber(rY, YY.state)
    }
    const eR = aR.compute([SR], (YY => ({
      class: "cm-lineNumbers",
      renderEmptyElements: !1,
      markers: YY => YY.state.facet(mR),
      lineMarker: (YY, rY, DY) => DY.some((YY => YY.toDOM)) ? null : new lR(TR(YY, YY.state.doc.lineAt(rY.from).number)),
      widgetMarker: (YY, rY, DY) => {
        for (let FY of YY.state.facet(VR)) {
          let AY = FY(YY, rY, DY);
          if (AY) return AY
        }
        return null
      },
      lineMarkerChange: YY => YY.startState.facet(SR) != YY.state.facet(SR),
      initialSpacer: YY => new lR(TR(YY, BR(YY.state.doc.lines))),
      updateSpacer(YY, rY) {
        let DY = TR(rY.view, BR(rY.view.state.doc.lines));
        return DY == YY.number ? YY : new lR(DY)
      },
      domEventHandlers: YY.facet(SR).domEventHandlers,
      side: "before"
    })));

    function NR() {
      let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [SR.of(YY), sR(), eR]
    }

    function BR(YY) {
      let rY = 9;
      for (; rY < YY;) rY = 10 * rY + 9;
      return rY
    }
    const cR = new class extends IR {
        constructor() {
          super(...arguments), this.elementClass = "cm-activeLineGutter"
        }
      },
      KR = RR.compute(["selection"], (YY => {
        let rY = [],
          DY = -1;
        for (let FY of YY.selection.ws) {
          let AY = YY.doc.lineAt(FY.head).from;
          AY > DY && (DY = AY, rY.push(cR.range(AY)))
        }
        return FY.B.of(rY)
      }));

    function HR() {
      return KR
    }
  },
  40424: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => FY,
      e: () => iY,
      h: () => RY,
      k: () => vY,
      l: () => aY,
      p: () => CY,
      s: () => jY,
      t: () => fY,
      w: () => yY
    });
    const FY = 1024;
    let AY = 0;
    class IY {
      constructor(YY, rY) {
        this.from = YY, this.to = rY
      }
    }
    class RY {
      constructor() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.id = AY++, this.perNode = !!YY.perNode, this.deserialize = YY.deserialize || (() => {
          throw new Error("This node type doesn't define a deserialize function")
        }), this.combine = YY.combine || null
      }
      add(YY) {
        if (this.perNode) throw new RangeError("Can't add per-node props to node types");
        return "function" != typeof YY && (YY = aY.match(YY)), rY => {
          let DY = YY(rY);
          return void 0 === DY ? null : [this, DY]
        }
      }
    }
    RY.closedBy = new RY({
      deserialize: YY => YY.split(" ")
    }), RY.openedBy = new RY({
      deserialize: YY => YY.split(" ")
    }), RY.group = new RY({
      deserialize: YY => YY.split(" ")
    }), RY.isolate = new RY({
      deserialize: YY => {
        if (YY && "rtl" != YY && "ltr" != YY && "auto" != YY) throw new RangeError("Invalid value for isolate: " + YY);
        return YY || "auto"
      }
    }), RY.contextHash = new RY({
      perNode: !0
    }), RY.lookAhead = new RY({
      perNode: !0
    }), RY.mounted = new RY({
      perNode: !0
    });
    class OY {
      constructor(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this.tree = YY, this.overlay = rY, this.parser = DY, this.bracketed = FY
      }
      static get(YY) {
        return YY && YY.props && YY.props[RY.mounted.id]
      }
    }
    const gY = Object.create(null);
    class aY {
      constructor(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.name = YY, this.props = rY, this.id = DY, this.flags = FY
      }
      static define(YY) {
        let rY = YY.props && YY.props.length ? Object.create(null) : gY,
          DY = (YY.top ? 1 : 0) | (YY.skipped ? 2 : 0) | (YY.error ? 4 : 0) | (null == YY.name ? 8 : 0),
          FY = new aY(YY.name || "", rY, YY.id, DY);
        if (YY.props)
          for (let AY of YY.props)
            if (Array.isArray(AY) || (AY = AY(FY)), AY) {
              if (AY[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
              rY[AY[0].id] = AY[1]
            } return FY
      }
      prop(YY) {
        return this.props[YY.id]
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
      is(YY) {
        if ("string" == typeof YY) {
          if (this.name == YY) return !0;
          let rY = this.prop(RY.group);
          return !!rY && rY.indexOf(YY) > -1
        }
        return this.id == YY
      }
      static match(YY) {
        let rY = Object.create(null);
        for (let DY in YY)
          for (let FY of DY.split(" ")) rY[FY] = YY[DY];
        return YY => {
          for (let DY = YY.prop(RY.group), FY = -1; FY < (DY ? DY.length : 0); FY++) {
            let AY = rY[FY < 0 ? YY.name : DY[FY]];
            if (AY) return AY
          }
        }
      }
    }
    aY.none = new aY("", Object.create(null), 0, 8);
    class vY {
      constructor(YY) {
        this.types = YY;
        for (let rY = 0; rY < YY.length; rY++)
          if (YY[rY].id != rY) throw new RangeError("Node type ids should correspond to array positions when creating a node set")
      }
      extend() {
        let YY = [];
        for (var rY = arguments.length, DY = new Array(rY), FY = 0; FY < rY; FY++) DY[FY] = arguments[FY];
        for (let AY of this.types) {
          let rY = null;
          for (let YY of DY) {
            let DY = YY(AY);
            if (DY) {
              rY || (rY = Object.assign({}, AY.props));
              let YY = DY[1],
                FY = DY[0];
              FY.combine && FY.id in rY && (YY = FY.combine(rY[FY.id], YY)), rY[FY.id] = YY
            }
          }
          YY.push(rY ? new aY(AY.name, rY, AY.id, AY.flags) : AY)
        }
        return new vY(YY)
      }
    }
    const uY = new WeakMap,
      sY = new WeakMap;
    var iY;
    ! function(YY) {
      YY[YY.ExcludeBuffers = 1] = "ExcludeBuffers", YY[YY.IncludeAnonymous = 2] = "IncludeAnonymous", YY[YY.IgnoreMounts = 4] = "IgnoreMounts", YY[YY.IgnoreOverlays = 8] = "IgnoreOverlays", YY[YY.EnterBracketed = 16] = "EnterBracketed"
    }(iY || (iY = {}));
    class yY {
      constructor(YY, rY, DY, FY, AY) {
        if (this.type = YY, this.children = rY, this.positions = DY, this.length = FY, this.props = null, AY && AY.length) {
          this.props = Object.create(null);
          for (let [YY, rY] of AY) this.props["number" == typeof YY ? YY : YY.id] = rY
        }
      }
      toString() {
        let YY = OY.get(this);
        if (YY && !YY.overlay) return YY.tree.toString();
        let rY = "";
        for (let DY of this.children) {
          let YY = DY.toString();
          YY && (rY && (rY += ","), rY += YY)
        }
        return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (rY.length ? "(" + rY + ")" : "") : rY
      }
      cursor() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return new cY(this.topNode, YY)
      }
      cursorAt(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          DY = uY.get(this) || this.topNode,
          FY = new cY(DY);
        return FY.moveTo(YY, rY), uY.set(this, FY._tree), FY
      }
      get topNode() {
        return new VY(this, 0, 0, null)
      }
      resolve(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          DY = EY(uY.get(this) || this.topNode, YY, rY, !1);
        return uY.set(this, DY), DY
      }
      resolveInner(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          DY = EY(sY.get(this) || this.topNode, YY, rY, !0);
        return sY.set(this, DY), DY
      }
      resolveStack(YY) {
        return function(YY, rY, DY) {
          let FY = YY.resolveInner(rY, DY),
            AY = null;
          for (let IY = FY instanceof VY ? FY : FY.context.parent; IY; IY = IY.parent)
            if (IY.index < 0) {
              let YY = IY.parent;
              (AY || (AY = [FY])).push(YY.resolve(rY, DY)), IY = YY
            } else {
              let YY = OY.get(IY.tree);
              if (YY && YY.overlay && YY.overlay[0].from <= rY && YY.overlay[YY.overlay.length - 1].to >= rY) {
                let RY = new VY(YY.tree, YY.overlay[0].from + IY.from, -1, IY);
                (AY || (AY = [FY])).push(EY(RY, rY, DY, !1))
              }
            } return AY ? NY(AY) : FY
        }(this, YY, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
      }
      iterate(YY) {
        let {
          enter: rY,
          leave: DY,
          from: FY = 0,
          to: AY = this.length
        } = YY, IY = YY.mode || 0, RY = (IY & iY.IncludeAnonymous) > 0;
        for (let OY = this.cursor(IY | iY.IncludeAnonymous);;) {
          let YY = !1;
          if (OY.from <= AY && OY.to >= FY && (!RY && OY.type.isAnonymous || !1 !== rY(OY))) {
            if (OY.firstChild()) continue;
            YY = !0
          }
          for (; YY && DY && (RY || !OY.type.isAnonymous) && DY(OY), !OY.nextSibling();) {
            if (!OY.parent()) return;
            YY = !0
          }
        }
      }
      prop(YY) {
        return YY.perNode ? this.props ? this.props[YY.id] : void 0 : this.type.prop(YY)
      }
      get propValues() {
        let YY = [];
        if (this.props)
          for (let rY in this.props) YY.push([+rY, this.props[rY]]);
        return YY
      }
      balance() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this.children.length <= 8 ? this : ZY(aY.none, this.children, this.positions, 0, this.children.length, 0, this.length, ((YY, rY, DY) => new yY(this.type, YY, rY, DY, this.propValues)), YY.makeTree || ((YY, rY, DY) => new yY(aY.none, YY, rY, DY)))
      }
      static build(YY) {
        return function(YY) {
          var rY;
          let {
            buffer: DY,
            nodeSet: AY,
            maxBufferLength: IY = FY,
            reused: OY = [],
            minRepeatType: gY = AY.types.length
          } = YY, aY = Array.isArray(DY) ? new QY(DY, DY.length) : DY, vY = AY.types, uY = 0, sY = 0;

          function iY(YY, rY, DY, FY, RY, yY) {
            let {
              id: QY,
              start: TY,
              end: eY,
              size: NY
            } = aY, BY = sY, cY = uY;
            if (NY < 0) {
              if (aY.next(), -1 == NY) {
                let rY = OY[QY];
                return DY.push(rY), void FY.push(TY - YY)
              }
              if (-3 == NY) return void(uY = QY);
              if (-4 == NY) return void(sY = QY);
              throw new RangeError(`Unrecognized record size: ${NY}`)
            }
            let KY, HY, zY = vY[QY],
              CY = TY - YY;
            if (eY - TY <= IY && (HY = SY(aY.pos - rY, RY))) {
              let rY = new Uint16Array(HY.size - HY.skip),
                DY = aY.pos - HY.size,
                FY = rY.length;
              for (; aY.pos > DY;) FY = lY(HY.start, rY, FY);
              KY = new oY(rY, eY - HY.start, AY), CY = HY.start - YY
            } else {
              let YY = aY.pos - NY;
              aY.next();
              let rY = [],
                DY = [],
                FY = QY >= gY ? QY : -1,
                AY = 0,
                RY = eY;
              for (; aY.pos > YY;) FY >= 0 && aY.id == FY && aY.size >= 0 ? (aY.end <= RY - IY && (mY(rY, DY, TY, AY, aY.end, RY, FY, BY, cY), AY = rY.length, RY = aY.end), aY.next()) : yY > 2500 ? WY(TY, YY, rY, DY) : iY(TY, YY, rY, DY, FY, yY + 1);
              if (FY >= 0 && AY > 0 && AY < rY.length && mY(rY, DY, TY, AY, TY, RY, FY, BY, cY), rY.reverse(), DY.reverse(), FY > -1 && AY > 0) {
                let YY = EY(zY, cY);
                KY = ZY(zY, rY, DY, 0, rY.length, 0, eY - TY, YY, YY)
              } else KY = VY(zY, rY, DY, eY - TY, BY - eY, cY)
            }
            DY.push(KY), FY.push(CY)
          }

          function WY(YY, rY, DY, FY) {
            let RY = [],
              OY = 0,
              gY = -1;
            for (; aY.pos > rY;) {
              let {
                id: YY,
                start: rY,
                end: DY,
                size: FY
              } = aY;
              if (FY > 4) aY.next();
              else {
                if (gY > -1 && rY < gY) break;
                gY < 0 && (gY = DY - IY), RY.push(YY, rY, DY), OY++, aY.next()
              }
            }
            if (OY) {
              let rY = new Uint16Array(4 * OY),
                IY = RY[RY.length - 2];
              for (let YY = RY.length - 3, DY = 0; YY >= 0; YY -= 3) rY[DY++] = RY[YY], rY[DY++] = RY[YY + 1] - IY, rY[DY++] = RY[YY + 2] - IY, rY[DY++] = DY;
              DY.push(new oY(rY, RY[2] - IY, AY)), FY.push(IY - YY)
            }
          }

          function EY(YY, rY) {
            return (DY, FY, AY) => {
              let IY, OY, gY = 0,
                aY = DY.length - 1;
              if (aY >= 0 && (IY = DY[aY]) instanceof yY) {
                if (!aY && IY.type == YY && IY.length == AY) return IY;
                (OY = IY.prop(RY.lookAhead)) && (gY = FY[aY] + IY.length + OY)
              }
              return VY(YY, DY, FY, AY, gY, rY)
            }
          }

          function mY(YY, rY, DY, FY, IY, RY, OY, gY, aY) {
            let vY = [],
              uY = [];
            for (; YY.length > FY;) vY.push(YY.pop()), uY.push(rY.pop() + DY - IY);
            YY.push(VY(AY.types[OY], vY, uY, RY - IY, gY - RY, aY)), rY.push(IY - DY)
          }

          function VY(YY, rY, DY, FY, AY, IY, OY) {
            if (IY) {
              let YY = [RY.contextHash, IY];
              OY = OY ? [YY].concat(OY) : [YY]
            }
            if (AY > 25) {
              let YY = [RY.lookAhead, AY];
              OY = OY ? [YY].concat(OY) : [YY]
            }
            return new yY(YY, rY, DY, FY, OY)
          }

          function SY(YY, rY) {
            let DY = aY.fork(),
              FY = 0,
              AY = 0,
              RY = 0,
              OY = DY.end - IY,
              vY = {
                size: 0,
                start: 0,
                skip: 0
              };
            YY: for (let IY = DY.pos - YY; DY.pos > IY;) {
              let YY = DY.size;
              if (DY.id == rY && YY >= 0) {
                vY.size = FY, vY.start = AY, vY.skip = RY, RY += 4, FY += 4, DY.next();
                continue
              }
              let aY = DY.pos - YY;
              if (YY < 0 || aY < IY || DY.start < OY) break;
              let uY = DY.id >= gY ? 4 : 0,
                sY = DY.start;
              for (DY.next(); DY.pos > aY;) {
                if (DY.size < 0) {
                  if (-3 != DY.size && -4 != DY.size) break YY;
                  uY += 4
                } else DY.id >= gY && (uY += 4);
                DY.next()
              }
              AY = sY, FY += YY, RY += uY
            }
            return (rY < 0 || FY == YY) && (vY.size = FY, vY.start = AY, vY.skip = RY), vY.size > 4 ? vY : void 0
          }

          function lY(YY, rY, DY) {
            let {
              id: FY,
              start: AY,
              end: IY,
              size: RY
            } = aY;
            if (aY.next(), RY >= 0 && FY < gY) {
              let OY = DY;
              if (RY > 4) {
                let FY = aY.pos - (RY - 4);
                for (; aY.pos > FY;) DY = lY(YY, rY, DY)
              }
              rY[--DY] = OY, rY[--DY] = IY - YY, rY[--DY] = AY - YY, rY[--DY] = FY
            } else - 3 == RY ? uY = FY : -4 == RY && (sY = FY);
            return DY
          }
          let TY = [],
            eY = [];
          for (; aY.pos > 0;) iY(YY.start || 0, YY.bufferStart || 0, TY, eY, -1, 0);
          let NY = null !== (rY = YY.length) && void 0 !== rY ? rY : TY.length ? eY[0] + TY[0].length : 0;
          return new yY(vY[YY.topID], TY.reverse(), eY.reverse(), NY)
        }(YY)
      }
    }
    yY.empty = new yY(aY.none, [], [], 0);
    class QY {
      constructor(YY, rY) {
        this.buffer = YY, this.index = rY
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
        return new QY(this.buffer, this.index)
      }
    }
    class oY {
      constructor(YY, rY, DY) {
        this.buffer = YY, this.length = rY, this.set = DY
      }
      get type() {
        return aY.none
      }
      toString() {
        let YY = [];
        for (let rY = 0; rY < this.buffer.length;) YY.push(this.childString(rY)), rY = this.buffer[rY + 3];
        return YY.join(",")
      }
      childString(YY) {
        let rY = this.buffer[YY],
          DY = this.buffer[YY + 3],
          FY = this.set.types[rY],
          AY = FY.name;
        if (/\W/.test(AY) && !FY.isError && (AY = JSON.stringify(AY)), DY == (YY += 4)) return AY;
        let IY = [];
        for (; YY < DY;) IY.push(this.childString(YY)), YY = this.buffer[YY + 3];
        return AY + "(" + IY.join(",") + ")"
      }
      findChild(YY, rY, DY, FY, AY) {
        let {
          buffer: IY
        } = this, RY = -1;
        for (let OY = YY; OY != rY && !(WY(AY, FY, IY[OY + 1], IY[OY + 2]) && (RY = OY, DY > 0)); OY = IY[OY + 3]);
        return RY
      }
      slice(YY, rY, DY) {
        let FY = this.buffer,
          AY = new Uint16Array(rY - YY),
          IY = 0;
        for (let RY = YY, OY = 0; RY < rY;) {
          AY[OY++] = FY[RY++], AY[OY++] = FY[RY++] - DY;
          let rY = AY[OY++] = FY[RY++] - DY;
          AY[OY++] = FY[RY++] - YY, IY = Math.max(IY, rY)
        }
        return new oY(AY, IY, this.set)
      }
    }

    function WY(YY, rY, DY, FY) {
      switch (YY) {
        case -2:
          return DY < rY;
        case -1:
          return FY >= rY && DY < rY;
        case 0:
          return DY < rY && FY > rY;
        case 1:
          return DY <= rY && FY > rY;
        case 2:
          return FY > rY;
        case 4:
          return !0
      }
    }

    function EY(YY, rY, DY, FY) {
      for (var AY; YY.from == YY.to || (DY < 1 ? YY.from >= rY : YY.from > rY) || (DY > -1 ? YY.to <= rY : YY.to < rY);) {
        let rY = !FY && YY instanceof VY && YY.index < 0 ? null : YY.parent;
        if (!rY) return YY;
        YY = rY
      }
      let IY = FY ? 0 : iY.IgnoreOverlays;
      if (FY)
        for (let RY = YY, OY = RY.parent; OY; RY = OY, OY = RY.parent) RY instanceof VY && RY.index < 0 && (null === (AY = OY.enter(rY, DY, IY)) || void 0 === AY ? void 0 : AY.from) != RY.from && (YY = OY);
      for (;;) {
        let FY = YY.enter(rY, DY, IY);
        if (!FY) return YY;
        YY = FY
      }
    }
    class mY {
      cursor() {
        return new cY(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)
      }
      getChild(YY) {
        let rY = SY(this, YY, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null);
        return rY.length ? rY[0] : null
      }
      getChildren(YY) {
        return SY(this, YY, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
      }
      resolve(YY) {
        return EY(this, YY, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !1)
      }
      resolveInner(YY) {
        return EY(this, YY, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !0)
      }
      matchContext(YY) {
        return lY(this.parent, YY)
      }
      enterUnfinishedNodesBefore(YY) {
        let rY = this.childBefore(YY),
          DY = this;
        for (; rY;) {
          let YY = rY.lastChild;
          if (!YY || YY.to != rY.to) break;
          YY.type.isError && YY.from == YY.to ? (DY = rY, rY = YY.prevSibling) : rY = YY
        }
        return DY
      }
      get node() {
        return this
      }
      get next() {
        return this.parent
      }
    }
    class VY extends mY {
      constructor(YY, rY, DY, FY) {
        super(), this._tree = YY, this.from = rY, this.index = DY, this._parent = FY
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
      nextChild(YY, rY, DY, FY) {
        let AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        for (let IY = this;;) {
          for (let {
              children: RY,
              positions: gY
            } = IY._tree, aY = rY > 0 ? RY.length : -1; YY != aY; YY += rY) {
            let aY, vY = RY[YY],
              uY = gY[YY] + IY.from;
            if (AY & iY.EnterBracketed && vY instanceof yY && (aY = OY.get(vY)) && !aY.overlay && aY.bracketed && DY >= uY && DY <= uY + vY.length || WY(FY, DY, uY, uY + vY.length))
              if (vY instanceof oY) {
                if (AY & iY.ExcludeBuffers) continue;
                let RY = vY.findChild(0, vY.buffer.length, rY, DY - uY, FY);
                if (RY > -1) return new eY(new TY(IY, vY, YY, uY), null, RY)
              } else if (AY & iY.IncludeAnonymous || !vY.type.isAnonymous || KY(vY)) {
              let RY;
              if (!(AY & iY.IgnoreMounts) && (RY = OY.get(vY)) && !RY.overlay) return new VY(RY.tree, uY, YY, IY);
              let gY = new VY(vY, uY, YY, IY);
              return AY & iY.IncludeAnonymous || !gY.type.isAnonymous ? gY : gY.nextChild(rY < 0 ? vY.children.length - 1 : 0, rY, DY, FY, AY)
            }
          }
          if (AY & iY.IncludeAnonymous || !IY.type.isAnonymous) return null;
          if (YY = IY.index >= 0 ? IY.index + rY : rY < 0 ? -1 : IY._parent._tree.children.length, IY = IY._parent, !IY) return null
        }
      }
      get firstChild() {
        return this.nextChild(0, 1, 0, 4)
      }
      get lastChild() {
        return this.nextChild(this._tree.children.length - 1, -1, 0, 4)
      }
      childAfter(YY) {
        return this.nextChild(0, 1, YY, 2)
      }
      childBefore(YY) {
        return this.nextChild(this._tree.children.length - 1, -1, YY, -2)
      }
      prop(YY) {
        return this._tree.prop(YY)
      }
      enter(YY, rY) {
        let DY, FY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (!(FY & iY.IgnoreOverlays) && (DY = OY.get(this._tree)) && DY.overlay) {
          let AY = YY - this.from,
            IY = FY & iY.EnterBracketed && DY.bracketed;
          for (let {
              from: YY,
              to: FY
            }
            of DY.overlay)
            if ((rY > 0 || IY ? YY <= AY : YY < AY) && (rY < 0 || IY ? FY >= AY : FY > AY)) return new VY(DY.tree, DY.overlay[0].from + this.from, -1, this)
        }
        return this.nextChild(0, 1, YY, rY, FY)
      }
      nextSignificantParent() {
        let YY = this;
        for (; YY.type.isAnonymous && YY._parent;) YY = YY._parent;
        return YY
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

    function SY(YY, rY, DY, FY) {
      let AY = YY.cursor(),
        IY = [];
      if (!AY.firstChild()) return IY;
      if (null != DY)
        for (let RY = !1; !RY;)
          if (RY = AY.type.is(DY), !AY.nextSibling()) return IY;
      for (;;) {
        if (null != FY && AY.type.is(FY)) return IY;
        if (AY.type.is(rY) && IY.push(AY.node), !AY.nextSibling()) return null == FY ? IY : []
      }
    }

    function lY(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : rY.length - 1;
      for (let FY = YY; DY >= 0; FY = FY.parent) {
        if (!FY) return !1;
        if (!FY.type.isAnonymous) {
          if (rY[DY] && rY[DY] != FY.name) return !1;
          DY--
        }
      }
      return !0
    }
    class TY {
      constructor(YY, rY, DY, FY) {
        this.parent = YY, this.buffer = rY, this.index = DY, this.start = FY
      }
    }
    class eY extends mY {
      get name() {
        return this.type.name
      }
      get from() {
        return this.context.start + this.context.buffer.buffer[this.index + 1]
      }
      get to() {
        return this.context.start + this.context.buffer.buffer[this.index + 2]
      }
      constructor(YY, rY, DY) {
        super(), this.context = YY, this._parent = rY, this.index = DY, this.type = YY.buffer.set.types[YY.buffer.buffer[DY]]
      }
      child(YY, rY, DY) {
        let {
          buffer: FY
        } = this.context, AY = FY.findChild(this.index + 4, FY.buffer[this.index + 3], YY, rY - this.context.start, DY);
        return AY < 0 ? null : new eY(this.context, this, AY)
      }
      get firstChild() {
        return this.child(1, 0, 4)
      }
      get lastChild() {
        return this.child(-1, 0, 4)
      }
      childAfter(YY) {
        return this.child(1, YY, 2)
      }
      childBefore(YY) {
        return this.child(-1, YY, -2)
      }
      prop(YY) {
        return this.type.prop(YY)
      }
      enter(YY, rY) {
        if ((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0) & iY.ExcludeBuffers) return null;
        let {
          buffer: DY
        } = this.context, FY = DY.findChild(this.index + 4, DY.buffer[this.index + 3], rY > 0 ? 1 : -1, YY - this.context.start, rY);
        return FY < 0 ? null : new eY(this.context, this, FY)
      }
      get parent() {
        return this._parent || this.context.parent.nextSignificantParent()
      }
      externalSibling(YY) {
        return this._parent ? null : this.context.parent.nextChild(this.context.index + YY, YY, 0, 4)
      }
      get nextSibling() {
        let {
          buffer: YY
        } = this.context, rY = YY.buffer[this.index + 3];
        return rY < (this._parent ? YY.buffer[this._parent.index + 3] : YY.buffer.length) ? new eY(this.context, this._parent, rY) : this.externalSibling(1)
      }
      get prevSibling() {
        let {
          buffer: YY
        } = this.context, rY = this._parent ? this._parent.index + 4 : 0;
        return this.index == rY ? this.externalSibling(-1) : new eY(this.context, this._parent, YY.findChild(rY, this.index, -1, 0, 4))
      }
      get tree() {
        return null
      }
      toTree() {
        let YY = [],
          rY = [],
          {
            buffer: DY
          } = this.context,
          FY = this.index + 4,
          AY = DY.buffer[this.index + 3];
        if (AY > FY) {
          let IY = DY.buffer[this.index + 1];
          YY.push(DY.slice(FY, AY, IY)), rY.push(0)
        }
        return new yY(this.type, YY, rY, this.to - this.from)
      }
      toString() {
        return this.context.buffer.childString(this.index)
      }
    }

    function NY(YY) {
      if (!YY.length) return null;
      let rY = 0,
        DY = YY[0];
      for (let IY = 1; IY < YY.length; IY++) {
        let FY = YY[IY];
        (FY.from > DY.from || FY.to < DY.to) && (DY = FY, rY = IY)
      }
      let FY = DY instanceof VY && DY.index < 0 ? null : DY.parent,
        AY = YY.slice();
      return FY ? AY[rY] = FY : AY.splice(rY, 1), new BY(AY, DY)
    }
    class BY {
      constructor(YY, rY) {
        this.heads = YY, this.node = rY
      }
      get next() {
        return NY(this.heads)
      }
    }
    class cY {
      get name() {
        return this.type.name
      }
      constructor(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = rY & ~iY.EnterBracketed, YY instanceof VY) this.yieldNode(YY);
        else {
          this._tree = YY.context.parent, this.buffer = YY.context;
          for (let rY = YY._parent; rY; rY = rY._parent) this.stack.unshift(rY.index);
          this.bufferNode = YY, this.yieldBuf(YY.index)
        }
      }
      yieldNode(YY) {
        return !!YY && (this._tree = YY, this.type = YY.type, this.from = YY.from, this.to = YY.to, !0)
      }
      yieldBuf(YY, rY) {
        this.index = YY;
        let {
          start: DY,
          buffer: FY
        } = this.buffer;
        return this.type = rY || FY.set.types[FY.buffer[YY]], this.from = DY + FY.buffer[YY + 1], this.to = DY + FY.buffer[YY + 2], !0
      }
      yield(YY) {
        return !!YY && (YY instanceof VY ? (this.buffer = null, this.yieldNode(YY)) : (this.buffer = YY.context, this.yieldBuf(YY.index, YY.type)))
      }
      toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
      }
      enterChild(YY, rY, DY) {
        if (!this.buffer) return this.yield(this._tree.nextChild(YY < 0 ? this._tree._tree.children.length - 1 : 0, YY, rY, DY, this.mode));
        let {
          buffer: FY
        } = this.buffer, AY = FY.findChild(this.index + 4, FY.buffer[this.index + 3], YY, rY - this.buffer.start, DY);
        return !(AY < 0) && (this.stack.push(this.index), this.yieldBuf(AY))
      }
      firstChild() {
        return this.enterChild(1, 0, 4)
      }
      lastChild() {
        return this.enterChild(-1, 0, 4)
      }
      childAfter(YY) {
        return this.enterChild(1, YY, 2)
      }
      childBefore(YY) {
        return this.enterChild(-1, YY, -2)
      }
      enter(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.mode;
        return this.buffer ? !(DY & iY.ExcludeBuffers) && this.enterChild(1, YY, rY) : this.yield(this._tree.enter(YY, rY, DY))
      }
      parent() {
        if (!this.buffer) return this.yieldNode(this.mode & iY.IncludeAnonymous ? this._tree._parent : this._tree.parent);
        if (this.stack.length) return this.yieldBuf(this.stack.pop());
        let YY = this.mode & iY.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        return this.buffer = null, this.yieldNode(YY)
      }
      sibling(YY) {
        if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + YY, YY, 0, 4, this.mode));
        let {
          buffer: rY
        } = this.buffer, DY = this.stack.length - 1;
        if (YY < 0) {
          let YY = DY < 0 ? 0 : this.stack[DY] + 4;
          if (this.index != YY) return this.yieldBuf(rY.findChild(YY, this.index, -1, 0, 4))
        } else {
          let YY = rY.buffer[this.index + 3];
          if (YY < (DY < 0 ? rY.buffer.length : rY.buffer[this.stack[DY] + 3])) return this.yieldBuf(YY)
        }
        return DY < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + YY, YY, 0, 4, this.mode))
      }
      nextSibling() {
        return this.sibling(1)
      }
      prevSibling() {
        return this.sibling(-1)
      }
      atLastNode(YY) {
        let rY, DY, {
          buffer: FY
        } = this;
        if (FY) {
          if (YY > 0) {
            if (this.index < FY.buffer.buffer.length) return !1
          } else
            for (let YY = 0; YY < this.index; YY++)
              if (FY.buffer.buffer[YY + 3] < this.index) return !1;
          ({
            index: rY,
            parent: DY
          } = FY)
        } else({
          index: rY,
          _parent: DY
        } = this._tree);
        for (; DY;
          ({
            index: rY,
            _parent: DY
          } = DY))
          if (rY > -1)
            for (let FY = rY + YY, AY = YY < 0 ? -1 : DY._tree.children.length; FY != AY; FY += YY) {
              let YY = DY._tree.children[FY];
              if (this.mode & iY.IncludeAnonymous || YY instanceof oY || !YY.type.isAnonymous || KY(YY)) return !1
            }
        return !0
      }
      move(YY, rY) {
        if (rY && this.enterChild(YY, 0, 4)) return !0;
        for (;;) {
          if (this.sibling(YY)) return !0;
          if (this.atLastNode(YY) || !this.parent()) return !1
        }
      }
      next() {
        let YY = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(1, YY)
      }
      prev() {
        let YY = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(-1, YY)
      }
      moveTo(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        for (;
          (this.from == this.to || (rY < 1 ? this.from >= YY : this.from > YY) || (rY > -1 ? this.to <= YY : this.to < YY)) && this.parent(););
        for (; this.enterChild(1, YY, rY););
        return this
      }
      get node() {
        if (!this.buffer) return this._tree;
        let YY = this.bufferNode,
          rY = null,
          DY = 0;
        if (YY && YY.context == this.buffer) YY: for (let FY = this.index, AY = this.stack.length; AY >= 0;) {
          for (let IY = YY; IY; IY = IY._parent)
            if (IY.index == FY) {
              if (FY == this.index) return IY;
              rY = IY, DY = AY + 1;
              break YY
            } FY = this.stack[--AY]
        }
        for (let FY = DY; FY < this.stack.length; FY++) rY = new eY(this.buffer, rY, this.stack[FY]);
        return this.bufferNode = new eY(this.buffer, rY, this.index)
      }
      get tree() {
        return this.buffer ? null : this._tree._tree
      }
      iterate(YY, rY) {
        for (let DY = 0;;) {
          let FY = !1;
          if (this.type.isAnonymous || !1 !== YY(this)) {
            if (this.firstChild()) {
              DY++;
              continue
            }
            this.type.isAnonymous || (FY = !0)
          }
          for (;;) {
            if (FY && rY && rY(this), FY = this.type.isAnonymous, !DY) return;
            if (this.nextSibling()) break;
            this.parent(), DY--, FY = !0
          }
        }
      }
      matchContext(YY) {
        if (!this.buffer) return lY(this.node.parent, YY);
        let {
          buffer: rY
        } = this.buffer, {
          types: DY
        } = rY.set;
        for (let FY = YY.length - 1, AY = this.stack.length - 1; FY >= 0; AY--) {
          if (AY < 0) return lY(this._tree, YY, FY);
          let IY = DY[rY.buffer[this.stack[AY]]];
          if (!IY.isAnonymous) {
            if (YY[FY] && YY[FY] != IY.name) return !1;
            FY--
          }
        }
        return !0
      }
    }

    function KY(YY) {
      return YY.children.some((YY => YY instanceof oY || !YY.type.isAnonymous || KY(YY)))
    }
    const HY = new WeakMap;

    function zY(YY, rY) {
      if (!YY.isAnonymous || rY instanceof oY || rY.type != YY) return 1;
      let DY = HY.get(rY);
      if (null == DY) {
        DY = 1;
        for (let FY of rY.children) {
          if (FY.type != YY || !(FY instanceof yY)) {
            DY = 1;
            break
          }
          DY += zY(YY, FY)
        }
        HY.set(rY, DY)
      }
      return DY
    }

    function ZY(YY, rY, DY, FY, AY, IY, RY, OY, gY) {
      let aY = 0;
      for (let iY = FY; iY < AY; iY++) aY += zY(YY, rY[iY]);
      let vY = Math.ceil(1.5 * aY / 8),
        uY = [],
        sY = [];
      return function rY(DY, FY, AY, RY, OY) {
        for (let aY = AY; aY < RY;) {
          let AY = aY,
            iY = FY[aY],
            yY = zY(YY, DY[aY]);
          for (aY++; aY < RY; aY++) {
            let rY = zY(YY, DY[aY]);
            if (yY + rY >= vY) break;
            yY += rY
          }
          if (aY == AY + 1) {
            if (yY > vY) {
              let YY = DY[AY];
              rY(YY.children, YY.positions, 0, YY.children.length, FY[AY] + OY);
              continue
            }
            uY.push(DY[AY])
          } else {
            let rY = FY[aY - 1] + DY[aY - 1].length - iY;
            uY.push(ZY(YY, DY, FY, AY, aY, iY, rY, null, gY))
          }
          sY.push(iY + OY - IY)
        }
      }(rY, DY, FY, AY, 0), (OY || gY)(uY, sY, RY)
    }
    class CY {
      constructor() {
        this.map = new WeakMap
      }
      setBuffer(YY, rY, DY) {
        let FY = this.map.get(YY);
        FY || this.map.set(YY, FY = new Map), FY.set(rY, DY)
      }
      getBuffer(YY, rY) {
        let DY = this.map.get(YY);
        return DY && DY.get(rY)
      }
      set(YY, rY) {
        YY instanceof eY ? this.setBuffer(YY.context.buffer, YY.index, rY) : YY instanceof VY && this.map.set(YY.tree, rY)
      }
      get(YY) {
        return YY instanceof eY ? this.getBuffer(YY.context.buffer, YY.index) : YY instanceof VY ? this.map.get(YY.tree) : void 0
      }
      cursorSet(YY, rY) {
        YY.buffer ? this.setBuffer(YY.buffer.buffer, YY.index, rY) : this.map.set(YY.tree, rY)
      }
      cursorGet(YY) {
        return YY.buffer ? this.getBuffer(YY.buffer.buffer, YY.index) : this.map.get(YY.tree)
      }
    }
    class fY {
      constructor(YY, rY, DY, FY) {
        let AY = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          IY = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.from = YY, this.to = rY, this.tree = DY, this.offset = FY, this.open = (AY ? 1 : 0) | (IY ? 2 : 0)
      }
      get openStart() {
        return (1 & this.open) > 0
      }
      get openEnd() {
        return (2 & this.open) > 0
      }
      static addTree(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          FY = [new fY(0, YY.length, YY, 0, !1, DY)];
        for (let AY of rY) AY.to > YY.length && FY.push(AY);
        return FY
      }
      static applyChanges(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
        if (!rY.length) return YY;
        let FY = [],
          AY = 1,
          IY = YY.length ? YY[0] : null;
        for (let RY = 0, OY = 0, gY = 0;; RY++) {
          let aY = RY < rY.length ? rY[RY] : null,
            vY = aY ? aY.fromA : 1e9;
          if (vY - OY >= DY)
            for (; IY && IY.from < vY;) {
              let rY = IY;
              if (OY >= rY.from || vY <= rY.to || gY) {
                let YY = Math.max(rY.from, OY) - gY,
                  DY = Math.min(rY.to, vY) - gY;
                rY = YY >= DY ? null : new fY(YY, DY, rY.tree, rY.offset + gY, RY > 0, !!aY)
              }
              if (rY && FY.push(rY), IY.to > vY) break;
              IY = AY < YY.length ? YY[AY++] : null
            }
          if (!aY) break;
          OY = aY.toA, gY = aY.toA - aY.toB
        }
        return FY
      }
    }
    class jY {
      startParse(YY, rY, DY) {
        return "string" == typeof YY && (YY = new hY(YY)), DY = DY ? DY.length ? DY.map((YY => new IY(YY.from, YY.to))) : [new IY(0, 0)] : [new IY(0, YY.length)], this.createParse(YY, rY || [], DY)
      }
      parse(YY, rY, DY) {
        let FY = this.startParse(YY, rY, DY);
        for (;;) {
          let YY = FY.advance();
          if (YY) return YY
        }
      }
    }
    class hY {
      constructor(YY) {
        this.string = YY
      }
      get length() {
        return this.string.length
      }
      chunk(YY) {
        return this.string.slice(YY)
      }
      get lineChunks() {
        return !1
      }
      read(YY, rY) {
        return this.string.slice(YY, rY)
      }
    }
    new RY({
      perNode: !0
    })
  },
  40431: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => sY,
      e: () => gY,
      i: () => uY,
      j: () => HY
    });
    var FY = DY(40424);
    let AY = 0;
    class IY {
      constructor(YY, rY, DY, FY) {
        this.name = YY, this.set = rY, this.base = DY, this.modified = FY, this.id = AY++
      }
      toString() {
        let {
          name: YY
        } = this;
        for (let rY of this.modified) rY.name && (YY = `${rY.name}(${YY})`);
        return YY
      }
      static define(YY, rY) {
        let DY = "string" == typeof YY ? YY : "?";
        if (YY instanceof IY && (rY = YY), null === rY || void 0 === rY ? void 0 : rY.base) throw new Error("Can not derive from a modified tag");
        let FY = new IY(DY, [], null, []);
        if (FY.set.push(FY), rY)
          for (let AY of rY.set) FY.set.push(AY);
        return FY
      }
      static defineModifier(YY) {
        let rY = new OY(YY);
        return YY => YY.modified.indexOf(rY) > -1 ? YY : OY.get(YY.base || YY, YY.modified.concat(rY).sort(((YY, rY) => YY.id - rY.id)))
      }
    }
    let RY = 0;
    class OY {
      constructor(YY) {
        this.name = YY, this.instances = [], this.id = RY++
      }
      static get(YY, rY) {
        if (!rY.length) return YY;
        let DY = rY[0].instances.find((DY => {
          return DY.base == YY && (FY = rY, AY = DY.modified, FY.length == AY.length && FY.every(((YY, rY) => YY == AY[rY])));
          var FY, AY
        }));
        if (DY) return DY;
        let FY = [],
          AY = new IY(YY.name, FY, YY, rY);
        for (let IY of rY) IY.instances.push(AY);
        let RY = function(YY) {
          let rY = [
            []
          ];
          for (let DY = 0; DY < YY.length; DY++)
            for (let FY = 0, AY = rY.length; FY < AY; FY++) rY.push(rY[FY].concat(YY[DY]));
          return rY.sort(((YY, rY) => rY.length - YY.length))
        }(rY);
        for (let IY of YY.set)
          if (!IY.modified.length)
            for (let YY of RY) FY.push(OY.get(IY, YY));
        return AY
      }
    }

    function gY(YY) {
      let rY = Object.create(null);
      for (let DY in YY) {
        let FY = YY[DY];
        Array.isArray(FY) || (FY = [FY]);
        for (let YY of DY.split(" "))
          if (YY) {
            let DY = [],
              AY = 2,
              IY = YY;
            for (let rY = 0;;) {
              if ("..." == IY && rY > 0 && rY + 3 == YY.length) {
                AY = 1;
                break
              }
              let FY = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(IY);
              if (!FY) throw new RangeError("Invalid path: " + YY);
              if (DY.push("*" == FY[0] ? "" : '"' == FY[0][0] ? JSON.parse(FY[0]) : FY[0]), rY += FY[0].length, rY == YY.length) break;
              let RY = YY[rY++];
              if (rY == YY.length && "!" == RY) {
                AY = 0;
                break
              }
              if ("/" != RY) throw new RangeError("Invalid path: " + YY);
              IY = YY.slice(rY)
            }
            let RY = DY.length - 1,
              OY = DY[RY];
            if (!OY) throw new RangeError("Invalid path: " + YY);
            let gY = new vY(FY, AY, RY > 0 ? DY.slice(0, RY) : null);
            rY[OY] = gY.sort(rY[OY])
          }
      }
      return aY.add(rY)
    }
    const aY = new FY.h({
      combine(YY, rY) {
        let DY, FY, AY;
        for (; YY || rY;) {
          if (!YY || rY && YY.depth >= rY.depth ? (AY = rY, rY = rY.next) : (AY = YY, YY = YY.next), DY && DY.mode == AY.mode && !AY.context && !DY.context) continue;
          let IY = new vY(AY.tags, AY.mode, AY.context);
          DY ? DY.next = IY : FY = IY, DY = IY
        }
        return FY
      }
    });
    class vY {
      constructor(YY, rY, DY, FY) {
        this.tags = YY, this.mode = rY, this.context = DY, this.next = FY
      }
      get opaque() {
        return 0 == this.mode
      }
      get inherit() {
        return 1 == this.mode
      }
      sort(YY) {
        return !YY || YY.depth < this.depth ? (this.next = YY, this) : (YY.next = this.sort(YY.next), YY)
      }
      get depth() {
        return this.context ? this.context.length : 0
      }
    }

    function uY(YY, rY) {
      let DY = Object.create(null);
      for (let IY of YY)
        if (Array.isArray(IY.tag))
          for (let YY of IY.tag) DY[YY.id] = IY.class;
        else DY[IY.tag.id] = IY.class;
      let {
        scope: FY,
        all: AY = null
      } = rY || {};
      return {
        style: YY => {
          let rY = AY;
          for (let FY of YY)
            for (let YY of FY.set) {
              let FY = DY[YY.id];
              if (FY) {
                rY = rY ? rY + " " + FY : FY;
                break
              }
            }
          return rY
        },
        scope: FY
      }
    }

    function sY(YY, rY, DY) {
      let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : YY.length,
        IY = new iY(FY, Array.isArray(rY) ? rY : [rY], DY);
      IY.highlightRange(YY.cursor(), FY, AY, "", IY.highlighters), IY.flush(AY)
    }
    vY.empty = new vY([], 2, null);
    class iY {
      constructor(YY, rY, DY) {
        this.at = YY, this.highlighters = rY, this.span = DY, this.class = ""
      }
      startSpan(YY, rY) {
        rY != this.class && (this.flush(YY), YY > this.at && (this.at = YY), this.class = rY)
      }
      flush(YY) {
        YY > this.at && this.class && this.span(this.at, YY, this.class)
      }
      highlightRange(YY, rY, DY, AY, IY) {
        let {
          type: RY,
          from: OY,
          to: gY
        } = YY;
        if (OY >= DY || gY <= rY) return;
        RY.isTop && (IY = this.highlighters.filter((YY => !YY.scope || YY.scope(RY))));
        let uY = AY,
          sY = function(YY) {
            let rY = YY.type.prop(aY);
            for (; rY && rY.context && !YY.matchContext(rY.context);) rY = rY.next;
            return rY || null
          }(YY) || vY.empty,
          iY = function(YY, rY) {
            let DY = null;
            for (let FY of YY) {
              let YY = FY.style(rY);
              YY && (DY = DY ? DY + " " + YY : YY)
            }
            return DY
          }(IY, sY.tags);
        if (iY && (uY && (uY += " "), uY += iY, 1 == sY.mode && (AY += (AY ? " " : "") + iY)), this.startSpan(Math.max(rY, OY), uY), sY.opaque) return;
        let yY = YY.tree && YY.tree.prop(FY.h.mounted);
        if (yY && yY.overlay) {
          let FY = YY.node.enter(yY.overlay[0].from + OY, 1),
            RY = this.highlighters.filter((YY => !YY.scope || YY.scope(yY.tree.type))),
            aY = YY.firstChild();
          for (let vY = 0, sY = OY;; vY++) {
            let iY = vY < yY.overlay.length ? yY.overlay[vY] : null,
              QY = iY ? iY.from + OY : gY,
              oY = Math.max(rY, sY),
              WY = Math.min(DY, QY);
            if (oY < WY && aY)
              for (; YY.from < WY && (this.highlightRange(YY, oY, WY, AY, IY), this.startSpan(Math.min(WY, YY.to), uY), !(YY.to >= QY) && YY.nextSibling()););
            if (!iY || QY > DY) break;
            sY = iY.to + OY, sY > rY && (this.highlightRange(FY.cursor(), Math.max(rY, iY.from + OY), Math.min(DY, sY), "", RY), this.startSpan(Math.min(DY, sY), uY))
          }
          aY && YY.parent()
        } else if (YY.firstChild()) {
          yY && (AY = "");
          do {
            if (!(YY.to <= rY)) {
              if (YY.from >= DY) break;
              this.highlightRange(YY, rY, DY, AY, IY), this.startSpan(Math.min(DY, YY.to), uY)
            }
          } while (YY.nextSibling());
          YY.parent()
        }
      }
    }
    const yY = IY.define,
      QY = yY(),
      oY = yY(),
      WY = yY(oY),
      EY = yY(oY),
      mY = yY(),
      VY = yY(mY),
      SY = yY(mY),
      lY = yY(),
      TY = yY(lY),
      eY = yY(),
      NY = yY(),
      BY = yY(),
      cY = yY(BY),
      KY = yY(),
      HY = {
        comment: QY,
        lineComment: yY(QY),
        blockComment: yY(QY),
        docComment: yY(QY),
        name: oY,
        variableName: yY(oY),
        typeName: WY,
        tagName: yY(WY),
        propertyName: EY,
        attributeName: yY(EY),
        className: yY(oY),
        labelName: yY(oY),
        namespace: yY(oY),
        macroName: yY(oY),
        literal: mY,
        string: VY,
        docString: yY(VY),
        character: yY(VY),
        attributeValue: yY(VY),
        number: SY,
        integer: yY(SY),
        float: yY(SY),
        bool: yY(mY),
        regexp: yY(mY),
        escape: yY(mY),
        color: yY(mY),
        url: yY(mY),
        keyword: eY,
        self: yY(eY),
        null: yY(eY),
        atom: yY(eY),
        unit: yY(eY),
        modifier: yY(eY),
        operatorKeyword: yY(eY),
        controlKeyword: yY(eY),
        definitionKeyword: yY(eY),
        moduleKeyword: yY(eY),
        operator: NY,
        derefOperator: yY(NY),
        arithmeticOperator: yY(NY),
        logicOperator: yY(NY),
        bitwiseOperator: yY(NY),
        compareOperator: yY(NY),
        updateOperator: yY(NY),
        definitionOperator: yY(NY),
        typeOperator: yY(NY),
        controlOperator: yY(NY),
        punctuation: BY,
        separator: yY(BY),
        bracket: cY,
        angleBracket: yY(cY),
        squareBracket: yY(cY),
        paren: yY(cY),
        brace: yY(cY),
        content: lY,
        heading: TY,
        heading1: yY(TY),
        heading2: yY(TY),
        heading3: yY(TY),
        heading4: yY(TY),
        heading5: yY(TY),
        heading6: yY(TY),
        contentSeparator: yY(lY),
        list: yY(lY),
        quote: yY(lY),
        emphasis: yY(lY),
        strong: yY(lY),
        link: yY(lY),
        monospace: yY(lY),
        strikethrough: yY(lY),
        inserted: yY(),
        deleted: yY(),
        changed: yY(),
        invalid: yY(),
        meta: KY,
        documentMeta: yY(KY),
        annotation: yY(KY),
        processingInstruction: yY(KY),
        definition: IY.defineModifier("definition"),
        constant: IY.defineModifier("constant"),
        function: IY.defineModifier("function"),
        standard: IY.defineModifier("standard"),
        local: IY.defineModifier("local"),
        special: IY.defineModifier("special")
      };
    for (let zY in HY) {
      let YY = HY[zY];
      YY instanceof IY && (YY.name = zY)
    }
    uY([{
      tag: HY.link,
      class: "tok-link"
    }, {
      tag: HY.heading,
      class: "tok-heading"
    }, {
      tag: HY.emphasis,
      class: "tok-emphasis"
    }, {
      tag: HY.strong,
      class: "tok-strong"
    }, {
      tag: HY.keyword,
      class: "tok-keyword"
    }, {
      tag: HY.atom,
      class: "tok-atom"
    }, {
      tag: HY.bool,
      class: "tok-bool"
    }, {
      tag: HY.url,
      class: "tok-url"
    }, {
      tag: HY.labelName,
      class: "tok-labelName"
    }, {
      tag: HY.inserted,
      class: "tok-inserted"
    }, {
      tag: HY.deleted,
      class: "tok-deleted"
    }, {
      tag: HY.literal,
      class: "tok-literal"
    }, {
      tag: HY.string,
      class: "tok-string"
    }, {
      tag: HY.number,
      class: "tok-number"
    }, {
      tag: [HY.regexp, HY.escape, HY.special(HY.string)],
      class: "tok-string2"
    }, {
      tag: HY.variableName,
      class: "tok-variableName"
    }, {
      tag: HY.local(HY.variableName),
      class: "tok-variableName tok-local"
    }, {
      tag: HY.definition(HY.variableName),
      class: "tok-variableName tok-definition"
    }, {
      tag: HY.special(HY.variableName),
      class: "tok-variableName2"
    }, {
      tag: HY.definition(HY.propertyName),
      class: "tok-propertyName tok-definition"
    }, {
      tag: HY.typeName,
      class: "tok-typeName"
    }, {
      tag: HY.namespace,
      class: "tok-namespace"
    }, {
      tag: HY.className,
      class: "tok-className"
    }, {
      tag: HY.macroName,
      class: "tok-macroName"
    }, {
      tag: HY.propertyName,
      class: "tok-propertyName"
    }, {
      tag: HY.operator,
      class: "tok-operator"
    }, {
      tag: HY.comment,
      class: "tok-comment"
    }, {
      tag: HY.meta,
      class: "tok-meta"
    }, {
      tag: HY.invalid,
      class: "tok-invalid"
    }, {
      tag: HY.punctuation,
      class: "tok-punctuation"
    }])
  },
  40439: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => OY.e,
      e: () => RY.v,
      g: () => RY.E,
      h: () => RY.G,
      j: () => OY.k,
      n: () => TD,
      o: () => OY.O,
      s: () => OY.nb
    });
    var FY = DY(1371),
      AY = DY(1363),
      IY = DY(61),
      RY = DY(40395),
      OY = DY(40398),
      gY = DY(40417),
      aY = DY(40424);

    function vY(YY, rY) {
      return DY => {
        let {
          state: FY,
          dispatch: AY
        } = DY;
        if (FY.readOnly) return !1;
        let IY = YY(rY, FY);
        return !!IY && (AY(FY.update(IY)), !0)
      }
    }
    const uY = vY(WY, 0),
      sY = vY(oY, 0),
      iY = vY(((YY, rY) => oY(YY, rY, function(YY) {
        let rY = [];
        for (let DY of YY.selection.ws) {
          let FY = YY.doc.lineAt(DY.from),
            AY = DY.to <= FY.to ? FY : YY.doc.lineAt(DY.to);
          AY.from > FY.from && AY.from == DY.to && (AY = DY.to == FY.to + 1 ? FY : YY.doc.lineAt(DY.to - 1));
          let IY = rY.length - 1;
          IY >= 0 && rY[IY].to > FY.from ? rY[IY].to = AY.to : rY.push({
            from: FY.from + /^\s*/.exec(FY.text)[0].length,
            to: AY.to
          })
        }
        return rY
      }(rY))), 0);

    function yY(YY, rY) {
      let DY = YY.languageDataAt("commentTokens", rY, 1);
      return DY.length ? DY[0] : {}
    }
    const QY = 50;

    function oY(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : rY.selection.ws,
        FY = DY.map((YY => yY(rY, YY.from).block));
      if (!FY.every((YY => YY))) return null;
      let AY = DY.map(((YY, DY) => function(YY, rY, DY, FY) {
        let AY, IY, {
            open: RY,
            close: OY
          } = rY,
          gY = YY.sliceDoc(DY - QY, DY),
          aY = YY.sliceDoc(FY, FY + QY),
          vY = /\s*$/.exec(gY)[0].length,
          uY = /^\s*/.exec(aY)[0].length,
          sY = gY.length - vY;
        if (gY.slice(sY - RY.length, sY) == RY && aY.slice(uY, uY + OY.length) == OY) return {
          open: {
            pos: DY - vY,
            margin: vY && 1
          },
          close: {
            pos: FY + uY,
            margin: uY && 1
          }
        };
        FY - DY <= 2 * QY ? AY = IY = YY.sliceDoc(DY, FY) : (AY = YY.sliceDoc(DY, DY + QY), IY = YY.sliceDoc(FY - QY, FY));
        let iY = /^\s*/.exec(AY)[0].length,
          yY = /\s*$/.exec(IY)[0].length,
          oY = IY.length - yY - OY.length;
        return AY.slice(iY, iY + RY.length) == RY && IY.slice(oY, oY + OY.length) == OY ? {
          open: {
            pos: DY + iY + RY.length,
            margin: /\s/.test(AY.charAt(iY + RY.length)) ? 1 : 0
          },
          close: {
            pos: FY - yY - OY.length,
            margin: /\s/.test(IY.charAt(oY - 1)) ? 1 : 0
          }
        } : null
      }(rY, FY[DY], YY.from, YY.to)));
      if (2 != YY && !AY.every((YY => YY))) return {
        changes: rY.changes(DY.map(((YY, rY) => AY[rY] ? [] : [{
          from: YY.from,
          insert: FY[rY].open + " "
        }, {
          from: YY.to,
          insert: " " + FY[rY].close
        }])))
      };
      if (1 != YY && AY.some((YY => YY))) {
        let YY = [];
        for (let rY, DY = 0; DY < AY.length; DY++)
          if (rY = AY[DY]) {
            let AY = FY[DY],
              {
                open: IY,
                close: RY
              } = rY;
            YY.push({
              from: IY.pos - AY.open.length,
              to: IY.pos + IY.margin
            }, {
              from: RY.pos - RY.margin,
              to: RY.pos + AY.close.length
            })
          } return {
          changes: YY
        }
      }
      return null
    }

    function WY(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : rY.selection.ws,
        FY = [],
        AY = -1;
      YY: for (let {
          from: IY,
          to: RY
        }
        of DY) {
        let YY, DY = FY.length,
          OY = 1e9;
        for (let gY = IY; gY <= RY;) {
          let DY = rY.doc.lineAt(gY);
          if (void 0 == YY && (YY = yY(rY, DY.from).line, !YY)) continue YY;
          if (DY.from > AY && (IY == RY || RY > DY.from)) {
            AY = DY.from;
            let rY = /^\s*/.exec(DY.text)[0].length,
              IY = rY == DY.length,
              RY = DY.text.slice(rY, rY + YY.length) == YY ? rY : -1;
            rY < DY.text.length && rY < OY && (OY = rY), FY.push({
              line: DY,
              comment: RY,
              token: YY,
              indent: rY,
              empty: IY,
              single: !1
            })
          }
          gY = DY.to + 1
        }
        if (OY < 1e9)
          for (let rY = DY; rY < FY.length; rY++) FY[rY].indent < FY[rY].line.text.length && (FY[rY].indent = OY);
        FY.length == DY + 1 && (FY[DY].single = !0)
      }
      if (2 != YY && FY.some((YY => YY.comment < 0 && (!YY.empty || YY.single)))) {
        let YY = [];
        for (let {
            line: rY,
            token: AY,
            indent: IY,
            empty: RY,
            single: OY
          }
          of FY) !OY && RY || YY.push({
          from: rY.from + IY,
          insert: AY + " "
        });
        let DY = rY.changes(YY);
        return {
          changes: DY,
          selection: rY.selection.map(DY, 1)
        }
      }
      if (1 != YY && FY.some((YY => YY.comment >= 0))) {
        let YY = [];
        for (let {
            line: rY,
            comment: DY,
            token: AY
          }
          of FY)
          if (DY >= 0) {
            let FY = rY.from + DY,
              IY = FY + AY.length;
            " " == rY.text[IY - rY.from] && IY++, YY.push({
              from: FY,
              to: IY
            })
          } return {
          changes: YY
        }
      }
      return null
    }
    const EY = RY.e.define(),
      mY = RY.e.define(),
      VY = RY.r.define(),
      SY = RY.r.define({
        combine: YY => (0, RY.Y)(YY, {
          minDepth: 100,
          newGroupDelay: 500,
          joinToEvent: (YY, rY) => rY
        }, {
          minDepth: Math.max,
          newGroupDelay: Math.min,
          joinToEvent: (YY, rY) => (DY, FY) => YY(DY, FY) || rY(DY, FY)
        })
      }),
      lY = RY.G.define({
        create: () => MY.empty,
        update(YY, rY) {
          let DY = rY.state.facet(SY),
            FY = rY.annotation(EY);
          if (FY) {
            let AY = KY.fromTransaction(rY, FY.selection),
              IY = FY.side,
              RY = 0 == IY ? YY.undone : YY.done;
            return RY = AY ? HY(RY, RY.length, DY.minDepth, AY) : fY(RY, rY.startState.selection), new MY(0 == IY ? FY.rest : RY, 0 == IY ? RY : FY.rest)
          }
          let AY = rY.annotation(mY);
          if ("full" != AY && "before" != AY || (YY = YY.isolate()), !1 === rY.annotation(RY.N.addToHistory)) return rY.changes.empty ? YY : YY.addMapping(rY.changes.desc);
          let IY = KY.fromTransaction(rY),
            OY = rY.annotation(RY.N.time),
            gY = rY.annotation(RY.N.userEvent);
          return IY ? YY = YY.addChanges(IY, OY, gY, DY, rY) : rY.selection && (YY = YY.addSelection(rY.startState.selection, OY, gY, DY.newGroupDelay)), "full" != AY && "after" != AY || (YY = YY.isolate()), YY
        },
        toJSON: YY => ({
          done: YY.done.map((YY => YY.toJSON())),
          undone: YY.undone.map((YY => YY.toJSON()))
        }),
        fromJSON: YY => new MY(YY.done.map(KY.fromJSON), YY.undone.map(KY.fromJSON))
      });

    function TY(YY, rY) {
      return function(DY) {
        let {
          state: FY,
          dispatch: AY
        } = DY;
        if (!rY && FY.readOnly) return !1;
        let IY = FY.field(lY, !1);
        if (!IY) return !1;
        let RY = IY.pop(YY, FY, rY);
        return !!RY && (AY(RY), !0)
      }
    }
    const eY = TY(0, !1),
      NY = TY(1, !1),
      BY = TY(0, !0),
      cY = TY(1, !0);
    class KY {
      constructor(YY, rY, DY, FY, AY) {
        this.changes = YY, this.effects = rY, this.mapped = DY, this.startSelection = FY, this.selectionsAfter = AY
      }
      setSelAfter(YY) {
        return new KY(this.changes, this.effects, this.mapped, this.startSelection, YY)
      }
      toJSON() {
        var YY, rY, DY;
        return {
          changes: null === (YY = this.changes) || void 0 === YY ? void 0 : YY.toJSON(),
          mapped: null === (rY = this.mapped) || void 0 === rY ? void 0 : rY.toJSON(),
          startSelection: null === (DY = this.startSelection) || void 0 === DY ? void 0 : DY.toJSON(),
          selectionsAfter: this.selectionsAfter.map((YY => YY.toJSON()))
        }
      }
      static fromJSON(YY) {
        return new KY(YY.changes && RY.ChangeSet.fromJSON(YY.changes), [], YY.mapped && RY.f.fromJSON(YY.mapped), YY.startSelection && RY.n.fromJSON(YY.startSelection), YY.selectionsAfter.map(RY.n.fromJSON))
      }
      static fromTransaction(YY, rY) {
        let DY = ZY;
        for (let FY of YY.startState.facet(VY)) {
          let rY = FY(YY);
          rY.length && (DY = DY.concat(rY))
        }
        return !DY.length && YY.changes.empty ? null : new KY(YY.changes.invert(YY.startState.doc), DY, void 0, rY || YY.startState.selection, ZY)
      }
      static selection(YY) {
        return new KY(void 0, ZY, void 0, void 0, YY)
      }
    }

    function HY(YY, rY, DY, FY) {
      let AY = rY + 1 > DY + 20 ? rY - DY - 1 : 0,
        IY = YY.slice(AY, rY);
      return IY.push(FY), IY
    }

    function zY(YY, rY) {
      return YY.length ? rY.length ? YY.concat(rY) : YY : rY
    }
    const ZY = [],
      CY = 200;

    function fY(YY, rY) {
      if (YY.length) {
        let DY = YY[YY.length - 1],
          FY = DY.selectionsAfter.slice(Math.max(0, DY.selectionsAfter.length - CY));
        return FY.length && FY[FY.length - 1].eq(rY) ? YY : (FY.push(rY), HY(YY, YY.length - 1, 1e9, DY.setSelAfter(FY)))
      }
      return [KY.selection([rY])]
    }

    function jY(YY) {
      let rY = YY[YY.length - 1],
        DY = YY.slice();
      return DY[YY.length - 1] = rY.setSelAfter(rY.selectionsAfter.slice(0, rY.selectionsAfter.length - 1)), DY
    }

    function hY(YY, rY) {
      if (!YY.length) return YY;
      let DY = YY.length,
        FY = ZY;
      for (; DY;) {
        let AY = dY(YY[DY - 1], rY, FY);
        if (AY.changes && !AY.changes.empty || AY.effects.length) {
          let rY = YY.slice(0, DY);
          return rY[DY - 1] = AY, rY
        }
        rY = AY.mapped, DY--, FY = AY.selectionsAfter
      }
      return FY.length ? [KY.selection(FY)] : ZY
    }

    function dY(YY, rY, DY) {
      let FY = zY(YY.selectionsAfter.length ? YY.selectionsAfter.map((YY => YY.map(rY))) : ZY, DY);
      if (!YY.changes) return KY.selection(FY);
      let AY = YY.changes.map(rY),
        IY = rY.mapDesc(YY.changes, !0),
        OY = YY.mapped ? YY.mapped.composeDesc(IY) : IY;
      return new KY(AY, RY.E.mapEffects(YY.effects, rY), OY, YY.startSelection.map(IY), FY)
    }
    const JY = /^(input\.type|delete)($|\.)/;
    class MY {
      constructor(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        this.done = YY, this.undone = rY, this.prevTime = DY, this.prevUserEvent = FY
      }
      isolate() {
        return this.prevTime ? new MY(this.done, this.undone) : this
      }
      addChanges(YY, rY, DY, FY, AY) {
        let IY = this.done,
          OY = IY[IY.length - 1];
        return IY = OY && OY.changes && !OY.changes.empty && YY.changes && (!DY || JY.test(DY)) && (!OY.selectionsAfter.length && rY - this.prevTime < FY.newGroupDelay && FY.joinToEvent(AY, function(YY, rY) {
          let DY = [],
            FY = !1;
          return YY.iterChangedRanges(((YY, rY) => DY.push(YY, rY))), rY.iterChangedRanges(((YY, rY, AY, IY) => {
            for (let RY = 0; RY < DY.length;) {
              let YY = DY[RY++],
                rY = DY[RY++];
              IY >= YY && AY <= rY && (FY = !0)
            }
          })), FY
        }(OY.changes, YY.changes)) || "input.type.compose" == DY) ? HY(IY, IY.length - 1, FY.minDepth, new KY(YY.changes.compose(OY.changes), zY(RY.E.mapEffects(YY.effects, OY.changes), OY.effects), OY.mapped, OY.startSelection, ZY)) : HY(IY, IY.length, FY.minDepth, YY), new MY(IY, ZY, rY, DY)
      }
      addSelection(YY, rY, DY, FY) {
        let AY = this.done.length ? this.done[this.done.length - 1].selectionsAfter : ZY;
        return AY.length > 0 && rY - this.prevTime < FY && DY == this.prevUserEvent && DY && /^select($|\.)/.test(DY) && (IY = AY[AY.length - 1], RY = YY, IY.ws.length == RY.ws.length && 0 === IY.ws.filter(((YY, rY) => YY.empty != RY.ws[rY].empty)).length) ? this : new MY(fY(this.done, YY), this.undone, rY, DY);
        var IY, RY
      }
      addMapping(YY) {
        return new MY(hY(this.done, YY), hY(this.undone, YY), this.prevTime, this.prevUserEvent)
      }
      pop(YY, rY, DY) {
        let FY = 0 == YY ? this.done : this.undone;
        if (0 == FY.length) return null;
        let AY = FY[FY.length - 1],
          IY = AY.selectionsAfter[0] || (AY.startSelection ? AY.startSelection.map(AY.changes.invertedDesc, 1) : rY.selection);
        if (DY && AY.selectionsAfter.length) return rY.update({
          selection: AY.selectionsAfter[AY.selectionsAfter.length - 1],
          annotations: EY.of({
            side: YY,
            rest: jY(FY),
            selection: IY
          }),
          userEvent: 0 == YY ? "select.undo" : "select.redo",
          scrollIntoView: !0
        });
        if (AY.changes) {
          let DY = 1 == FY.length ? ZY : FY.slice(0, FY.length - 1);
          return AY.mapped && (DY = hY(DY, AY.mapped)), rY.update({
            changes: AY.changes,
            selection: AY.startSelection,
            effects: AY.effects,
            annotations: EY.of({
              side: YY,
              rest: DY,
              selection: IY
            }),
            filter: !1,
            userEvent: 0 == YY ? "undo" : "redo",
            scrollIntoView: !0
          })
        }
        return null
      }
    }
    MY.empty = new MY(ZY, ZY);
    const wY = [{
      key: "Mod-z",
      run: eY,
      preventDefault: !0
    }, {
      key: "Mod-y",
      mac: "Mod-Shift-z",
      run: NY,
      preventDefault: !0
    }, {
      linux: "Ctrl-Shift-z",
      run: NY,
      preventDefault: !0
    }, {
      key: "Mod-u",
      run: BY,
      preventDefault: !0
    }, {
      key: "Alt-u",
      mac: "Mod-Shift-u",
      run: cY,
      preventDefault: !0
    }];

    function bY(YY, rY) {
      return RY.n.create(YY.ws.map(rY), YY.mainIndex)
    }

    function XY(YY, rY) {
      return YY.update({
        selection: rY,
        scrollIntoView: !0,
        userEvent: "select"
      })
    }

    function qY(YY, rY) {
      let {
        state: DY,
        dispatch: FY
      } = YY, AY = bY(DY.selection, rY);
      return !AY.eq(DY.selection, !0) && (FY(XY(DY, AY)), !0)
    }

    function pY(YY, rY) {
      return RY.n.cursor(rY ? YY.to : YY.from)
    }

    function kY(YY, rY) {
      return qY(YY, (DY => DY.empty ? YY.moveByChar(DY, rY) : pY(DY, rY)))
    }

    function GY(YY) {
      return YY.textDirectionAt(YY.state.selection.main.head) == OY.c.LTR
    }
    const xY = YY => kY(YY, !GY(YY)),
      nY = YY => kY(YY, GY(YY));

    function PY(YY, rY) {
      return qY(YY, (DY => DY.empty ? YY.moveByGroup(DY, rY) : pY(DY, rY)))
    }
    "undefined" != typeof Intl && Intl.Segmenter;

    function UY(YY, rY, DY) {
      if (rY.type.prop(DY)) return !0;
      let FY = rY.to - rY.from;
      return FY && (FY > 2 || /[^\s,.;:]/.test(YY.sliceDoc(rY.from, rY.to))) || rY.firstChild
    }

    function LY(YY, rY, DY) {
      let FY, AY, IY = (0, gY.sb)(YY).resolveInner(rY.head),
        OY = DY ? aY.h.closedBy : aY.h.openedBy;
      for (let RY = rY.head;;) {
        let rY = DY ? IY.childAfter(RY) : IY.childBefore(RY);
        if (!rY) break;
        UY(YY, rY, OY) ? IY = rY : RY = DY ? rY.to : rY.from
      }
      return AY = IY.type.prop(OY) && (FY = DY ? (0, gY.hb)(YY, IY.from, 1) : (0, gY.hb)(YY, IY.to, -1)) && FY.matched ? DY ? FY.end.to : FY.end.from : DY ? IY.to : IY.from, RY.n.cursor(AY, DY ? -1 : 1)
    }

    function tY(YY, rY) {
      return qY(YY, (DY => {
        if (!DY.empty) return pY(DY, rY);
        let FY = YY.moveVertically(DY, rY);
        return FY.head != DY.head ? FY : YY.moveToLineBoundary(DY, rY)
      }))
    }
    const Yr = YY => tY(YY, !1),
      rr = YY => tY(YY, !0);

    function Dr(YY) {
      let rY, DY = YY.scrollDOM.clientHeight < YY.scrollDOM.scrollHeight - 2,
        FY = 0,
        AY = 0;
      if (DY) {
        for (let rY of YY.state.facet(OY.e.scrollMargins)) {
          let DY = rY(YY);
          (null === DY || void 0 === DY ? void 0 : DY.top) && (FY = Math.max(null === DY || void 0 === DY ? void 0 : DY.top, FY)), (null === DY || void 0 === DY ? void 0 : DY.bottom) && (AY = Math.max(null === DY || void 0 === DY ? void 0 : DY.bottom, AY))
        }
        rY = YY.scrollDOM.clientHeight - FY - AY
      } else rY = (YY.dom.ownerDocument.defaultView || window).innerHeight;
      return {
        marginTop: FY,
        marginBottom: AY,
        selfScroll: DY,
        height: Math.max(YY.defaultLineHeight, rY - 5)
      }
    }

    function Fr(YY, rY) {
      let DY, FY = Dr(YY),
        {
          state: AY
        } = YY,
        IY = bY(AY.selection, (DY => DY.empty ? YY.moveVertically(DY, rY, FY.height) : pY(DY, rY)));
      if (IY.eq(AY.selection)) return !1;
      if (FY.selfScroll) {
        let rY = YY.coordsAtPos(AY.selection.main.head),
          RY = YY.scrollDOM.getBoundingClientRect(),
          gY = RY.top + FY.marginTop,
          aY = RY.bottom - FY.marginBottom;
        rY && rY.top > gY && rY.bottom < aY && (DY = OY.e.scrollIntoView(IY.main.head, {
          y: "start",
          yMargin: rY.top - gY
        }))
      }
      return YY.dispatch(XY(AY, IY), {
        effects: DY
      }), !0
    }
    const Ar = YY => Fr(YY, !1),
      Ir = YY => Fr(YY, !0);

    function Rr(YY, rY, DY) {
      let FY = YY.lineBlockAt(rY.head),
        AY = YY.moveToLineBoundary(rY, DY);
      if (AY.head == rY.head && AY.head != (DY ? FY.to : FY.from) && (AY = YY.moveToLineBoundary(rY, DY, !1)), !DY && AY.head == FY.from && FY.length) {
        let DY = /^\s*/.exec(YY.state.sliceDoc(FY.from, Math.min(FY.from + 100, FY.to)))[0].length;
        DY && rY.head != FY.from + DY && (AY = RY.n.cursor(FY.from + DY))
      }
      return AY
    }

    function Or(YY, rY, DY) {
      let FY = !1,
        AY = bY(YY.selection, (rY => {
          let AY = (0, gY.hb)(YY, rY.head, -1) || (0, gY.hb)(YY, rY.head, 1) || rY.head > 0 && (0, gY.hb)(YY, rY.head - 1, 1) || rY.head < YY.doc.length && (0, gY.hb)(YY, rY.head + 1, -1);
          if (!AY || !AY.end) return rY;
          FY = !0;
          let IY = AY.start.from == rY.head ? AY.end.to : AY.end.from;
          return DY ? RY.n.range(rY.anchor, IY) : RY.n.cursor(IY)
        }));
      return !!FY && (rY(XY(YY, AY)), !0)
    }

    function gr(YY, rY) {
      let DY = bY(YY.state.selection, (YY => {
        let DY = rY(YY);
        return RY.n.range(YY.anchor, DY.head, DY.goalColumn, DY.bidiLevel || void 0, DY.assoc)
      }));
      return !DY.eq(YY.state.selection) && (YY.dispatch(XY(YY.state, DY)), !0)
    }

    function ar(YY, rY) {
      return gr(YY, (DY => YY.moveByChar(DY, rY)))
    }
    const vr = YY => ar(YY, !GY(YY)),
      ur = YY => ar(YY, GY(YY));

    function sr(YY, rY) {
      return gr(YY, (DY => YY.moveByGroup(DY, rY)))
    }

    function ir(YY, rY) {
      return gr(YY, (DY => YY.moveVertically(DY, rY)))
    }
    const yr = YY => ir(YY, !1),
      Qr = YY => ir(YY, !0);

    function or(YY, rY) {
      return gr(YY, (DY => YY.moveVertically(DY, rY, Dr(YY).height)))
    }
    const Wr = YY => or(YY, !1),
      Er = YY => or(YY, !0),
      mr = YY => {
        let {
          state: rY,
          dispatch: DY
        } = YY;
        return DY(XY(rY, {
          anchor: 0
        })), !0
      },
      Vr = YY => {
        let {
          state: rY,
          dispatch: DY
        } = YY;
        return DY(XY(rY, {
          anchor: rY.doc.length
        })), !0
      },
      Sr = YY => {
        let {
          state: rY,
          dispatch: DY
        } = YY;
        return DY(XY(rY, {
          anchor: rY.selection.main.anchor,
          head: 0
        })), !0
      },
      lr = YY => {
        let {
          state: rY,
          dispatch: DY
        } = YY;
        return DY(XY(rY, {
          anchor: rY.selection.main.anchor,
          head: rY.doc.length
        })), !0
      };

    function Tr(YY, rY) {
      let {
        state: DY
      } = YY, FY = DY.selection, AY = DY.selection.ws.slice();
      for (let IY of DY.selection.ws) {
        let FY = DY.doc.lineAt(IY.head);
        if (rY ? FY.to < YY.state.doc.length : FY.from > 0)
          for (let DY = IY;;) {
            let IY = YY.moveVertically(DY, rY);
            if (IY.head < FY.from || IY.head > FY.to) {
              AY.some((YY => YY.head == IY.head)) || AY.push(IY);
              break
            }
            if (IY.head == DY.head) break;
            DY = IY
          }
      }
      return AY.length != FY.ws.length && (YY.dispatch(XY(DY, RY.n.create(AY, AY.length - 1))), !0)
    }

    function er(YY, rY) {
      if (YY.state.readOnly) return !1;
      let DY = "delete.selection",
        {
          state: FY
        } = YY,
        AY = FY.changeByRange((FY => {
          let {
            from: AY,
            to: IY
          } = FY;
          if (AY == IY) {
            let RY = rY(FY);
            RY < AY ? (DY = "delete.backward", RY = Nr(YY, RY, !1)) : RY > AY && (DY = "delete.forward", RY = Nr(YY, RY, !0)), AY = Math.min(AY, RY), IY = Math.max(IY, RY)
          } else AY = Nr(YY, AY, !1), IY = Nr(YY, IY, !0);
          return AY == IY ? {
            range: FY
          } : {
            changes: {
              from: AY,
              to: IY
            },
            range: RY.n.cursor(AY, AY < FY.head ? -1 : 1)
          }
        }));
      return !AY.changes.empty && (YY.dispatch(FY.update(AY, {
        scrollIntoView: !0,
        userEvent: DY,
        effects: "delete.selection" == DY ? OY.e.announce.of(FY.phrase("Selection deleted")) : void 0
      })), !0)
    }

    function Nr(YY, rY, DY) {
      if (YY instanceof OY.e)
        for (let FY of YY.state.facet(OY.e.atomicRanges).map((rY => rY(YY)))) FY.between(rY, rY, ((YY, FY) => {
          YY < rY && FY > rY && (rY = DY ? FY : YY)
        }));
      return rY
    }
    const Br = (YY, rY, DY) => er(YY, (FY => {
        let AY, IY, OY = FY.from,
          {
            state: aY
          } = YY,
          vY = aY.doc.lineAt(OY);
        if (DY && !rY && OY > vY.from && OY < vY.from + 200 && !/[^ \t]/.test(AY = vY.text.slice(0, OY - vY.from))) {
          if ("\t" == AY[AY.length - 1]) return OY - 1;
          let YY = (0, RY.Z)(AY, aY.tabSize) % (0, gY.P)(aY) || (0, gY.P)(aY);
          for (let rY = 0; rY < YY && " " == AY[AY.length - 1 - rY]; rY++) OY--;
          IY = OY
        } else IY = (0, RY.$)(vY.text, OY - vY.from, rY, rY) + vY.from, IY == OY && vY.number != (rY ? aY.doc.lines : 1) ? IY += rY ? 1 : -1 : !rY && /[\ufe00-\ufe0f]/.test(vY.text.slice(IY - vY.from, OY - vY.from)) && (IY = (0, RY.$)(vY.text, IY - vY.from, !1, !1) + vY.from);
        return IY
      })),
      cr = YY => Br(YY, !1, !0),
      Kr = YY => Br(YY, !0, !1),
      Hr = (YY, rY) => er(YY, (DY => {
        let FY = DY.head,
          {
            state: AY
          } = YY,
          IY = AY.doc.lineAt(FY),
          OY = AY.charCategorizer(FY);
        for (let YY = null;;) {
          if (FY == (rY ? IY.to : IY.from)) {
            FY == DY.head && IY.number != (rY ? AY.doc.lines : 1) && (FY += rY ? 1 : -1);
            break
          }
          let gY = (0, RY.$)(IY.text, FY - IY.from, rY) + IY.from,
            aY = IY.text.slice(Math.min(FY, gY) - IY.from, Math.max(FY, gY) - IY.from),
            vY = OY(aY);
          if (null != YY && vY != YY) break;
          " " == aY && FY == DY.head || (YY = vY), FY = gY
        }
        return FY
      })),
      zr = YY => Hr(YY, !1);

    function Zr(YY) {
      let rY = [],
        DY = -1;
      for (let FY of YY.selection.ws) {
        let AY = YY.doc.lineAt(FY.from),
          IY = YY.doc.lineAt(FY.to);
        if (FY.empty || FY.to != IY.from || (IY = YY.doc.lineAt(FY.to - 1)), DY >= AY.number) {
          let YY = rY[rY.length - 1];
          YY.to = IY.to, YY.ws.push(FY)
        } else rY.push({
          from: AY.from,
          to: IY.to,
          ws: [FY]
        });
        DY = IY.number + 1
      }
      return rY
    }

    function Cr(YY, rY, DY) {
      if (YY.readOnly) return !1;
      let FY = [],
        AY = [];
      for (let IY of Zr(YY)) {
        if (DY ? IY.to == YY.doc.length : 0 == IY.from) continue;
        let rY = YY.doc.lineAt(DY ? IY.to + 1 : IY.from - 1),
          OY = rY.length + 1;
        if (DY) {
          FY.push({
            from: IY.to,
            to: rY.to
          }, {
            from: IY.from,
            insert: rY.text + YY.lineBreak
          });
          for (let rY of IY.ws) AY.push(RY.n.range(Math.min(YY.doc.length, rY.anchor + OY), Math.min(YY.doc.length, rY.head + OY)))
        } else {
          FY.push({
            from: rY.from,
            to: IY.from
          }, {
            from: IY.to,
            insert: YY.lineBreak + rY.text
          });
          for (let YY of IY.ws) AY.push(RY.n.range(YY.anchor - OY, YY.head - OY))
        }
      }
      return !!FY.length && (rY(YY.update({
        changes: FY,
        scrollIntoView: !0,
        selection: RY.n.create(AY, YY.selection.mainIndex),
        userEvent: "move.line"
      })), !0)
    }

    function fr(YY, rY, DY) {
      if (YY.readOnly) return !1;
      let FY = [];
      for (let IY of Zr(YY)) DY ? FY.push({
        from: IY.from,
        insert: YY.doc.slice(IY.from, IY.to) + YY.lineBreak
      }) : FY.push({
        from: IY.to,
        insert: YY.lineBreak + YY.doc.slice(IY.from, IY.to)
      });
      let AY = YY.changes(FY);
      return rY(YY.update({
        changes: AY,
        selection: YY.selection.map(AY, DY ? 1 : -1),
        scrollIntoView: !0,
        userEvent: "input.copyline"
      })), !0
    }
    const jr = hr(!1);

    function hr(YY) {
      return rY => {
        let {
          state: DY,
          dispatch: FY
        } = rY;
        if (DY.readOnly) return !1;
        let AY = DY.changeByRange((rY => {
          let {
            from: FY,
            to: AY
          } = rY, IY = DY.doc.lineAt(FY), OY = !YY && FY == AY && function(YY, rY) {
            if (/\(\)|\[\]|\{\}/.test(YY.sliceDoc(rY - 1, rY + 1))) return {
              from: rY,
              to: rY
            };
            let DY, FY = (0, gY.sb)(YY).resolveInner(rY),
              AY = FY.childBefore(rY),
              IY = FY.childAfter(rY);
            return AY && IY && AY.to <= rY && IY.from >= rY && (DY = AY.type.prop(aY.h.closedBy)) && DY.indexOf(IY.name) > -1 && YY.doc.lineAt(AY.to).from == YY.doc.lineAt(IY.from).from && !/\S/.test(YY.sliceDoc(AY.to, IY.from)) ? {
              from: AY.to,
              to: IY.from
            } : null
          }(DY, FY);
          YY && (FY = AY = (AY <= IY.to ? IY : DY.doc.lineAt(AY)).to);
          let vY = new gY.f(DY, {
              simulateBreak: FY,
              simulateDoubleBreak: !!OY
            }),
            uY = (0, gY.S)(vY, FY);
          for (null == uY && (uY = (0, RY.Z)(/^\s*/.exec(DY.doc.lineAt(FY).text)[0], DY.tabSize)); AY < IY.to && /\s/.test(IY.text[AY - IY.from]);) AY++;
          OY ? ({
            from: FY,
            to: AY
          } = OY) : FY > IY.from && FY < IY.from + 100 && !/\S/.test(IY.text.slice(0, FY)) && (FY = IY.from);
          let sY = ["", (0, gY.$)(DY, uY)];
          return OY && sY.push((0, gY.$)(DY, vY.lineIndent(IY.from, -1))), {
            changes: {
              from: FY,
              to: AY,
              insert: RY.K.of(sY)
            },
            range: RY.n.cursor(FY + 1 + sY[1].length)
          }
        }));
        return FY(DY.update(AY, {
          scrollIntoView: !0,
          userEvent: "input"
        })), !0
      }
    }

    function dr(YY, rY) {
      let DY = -1;
      return YY.changeByRange((FY => {
        let AY = [];
        for (let RY = FY.from; RY <= FY.to;) {
          let IY = YY.doc.lineAt(RY);
          IY.number > DY && (FY.empty || FY.to > IY.from) && (rY(IY, AY, FY), DY = IY.number), RY = IY.to + 1
        }
        let IY = YY.changes(AY);
        return {
          changes: AY,
          range: RY.n.range(IY.mapPos(FY.anchor, 1), IY.mapPos(FY.head, 1))
        }
      }))
    }
    const Jr = YY => {
        let {
          state: rY,
          dispatch: DY
        } = YY;
        return !rY.readOnly && (DY(rY.update(dr(rY, ((YY, DY) => {
          DY.push({
            from: YY.from,
            insert: rY.facet(gY.db)
          })
        })), {
          userEvent: "input.indent"
        })), !0)
      },
      Mr = YY => {
        let {
          state: rY,
          dispatch: DY
        } = YY;
        return !rY.readOnly && (DY(rY.update(dr(rY, ((YY, DY) => {
          let FY = /^\s*/.exec(YY.text)[0];
          if (!FY) return;
          let AY = (0, RY.Z)(FY, rY.tabSize),
            IY = 0,
            OY = (0, gY.$)(rY, Math.max(0, AY - (0, gY.P)(rY)));
          for (; IY < FY.length && IY < OY.length && FY.charCodeAt(IY) == OY.charCodeAt(IY);) IY++;
          DY.push({
            from: YY.from + IY,
            to: YY.from + FY.length,
            insert: OY.slice(IY)
          })
        })), {
          userEvent: "delete.dedent"
        })), !0)
      },
      wr = [{
        key: "Alt-ArrowLeft",
        mac: "Ctrl-ArrowLeft",
        run: YY => qY(YY, (rY => LY(YY.state, rY, !GY(YY)))),
        shift: YY => gr(YY, (rY => LY(YY.state, rY, !GY(YY))))
      }, {
        key: "Alt-ArrowRight",
        mac: "Ctrl-ArrowRight",
        run: YY => qY(YY, (rY => LY(YY.state, rY, GY(YY)))),
        shift: YY => gr(YY, (rY => LY(YY.state, rY, GY(YY))))
      }, {
        key: "Alt-ArrowUp",
        run: YY => {
          let {
            state: rY,
            dispatch: DY
          } = YY;
          return Cr(rY, DY, !1)
        }
      }, {
        key: "Shift-Alt-ArrowUp",
        run: YY => {
          let {
            state: rY,
            dispatch: DY
          } = YY;
          return fr(rY, DY, !1)
        }
      }, {
        key: "Alt-ArrowDown",
        run: YY => {
          let {
            state: rY,
            dispatch: DY
          } = YY;
          return Cr(rY, DY, !0)
        }
      }, {
        key: "Shift-Alt-ArrowDown",
        run: YY => {
          let {
            state: rY,
            dispatch: DY
          } = YY;
          return fr(rY, DY, !0)
        }
      }, {
        key: "Mod-Alt-ArrowUp",
        run: YY => Tr(YY, !1)
      }, {
        key: "Mod-Alt-ArrowDown",
        run: YY => Tr(YY, !0)
      }, {
        key: "Escape",
        run: YY => {
          let {
            state: rY,
            dispatch: DY
          } = YY, FY = rY.selection, AY = null;
          return FY.ws.length > 1 ? AY = RY.n.create([FY.main]) : FY.main.empty || (AY = RY.n.create([RY.n.cursor(FY.main.head)])), !!AY && (DY(XY(rY, AY)), !0)
        }
      }, {
        key: "Mod-Enter",
        run: hr(!0)
      }, {
        key: "Alt-l",
        mac: "Ctrl-l",
        run: YY => {
          let {
            state: rY,
            dispatch: DY
          } = YY, FY = Zr(rY).map((YY => {
            let {
              from: DY,
              to: FY
            } = YY;
            return RY.n.range(DY, Math.min(FY + 1, rY.doc.length))
          }));
          return DY(rY.update({
            selection: RY.n.create(FY),
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Mod-i",
        run: YY => {
          let {
            state: rY,
            dispatch: DY
          } = YY, FY = bY(rY.selection, (YY => {
            let DY = (0, gY.sb)(rY),
              FY = DY.resolveStack(YY.from, 1);
            if (YY.empty) {
              let rY = DY.resolveStack(YY.from, -1);
              rY.node.from >= FY.node.from && rY.node.to <= FY.node.to && (FY = rY)
            }
            for (let rY = FY; rY; rY = rY.next) {
              let {
                node: DY
              } = rY;
              if ((DY.from < YY.from && DY.to >= YY.to || DY.to > YY.to && DY.from <= YY.from) && rY.next) return RY.n.range(DY.to, DY.from)
            }
            return YY
          }));
          return !FY.eq(rY.selection) && (DY(XY(rY, FY)), !0)
        },
        preventDefault: !0
      }, {
        key: "Mod-[",
        run: Mr
      }, {
        key: "Mod-]",
        run: Jr
      }, {
        key: "Mod-Alt-\\",
        run: YY => {
          let {
            state: rY,
            dispatch: DY
          } = YY;
          if (rY.readOnly) return !1;
          let FY = Object.create(null),
            AY = new gY.f(rY, {
              overrideIndentation: YY => {
                let rY = FY[YY];
                return null == rY ? -1 : rY
              }
            }),
            IY = dr(rY, ((YY, DY, IY) => {
              let RY = (0, gY.S)(AY, YY.from);
              if (null == RY) return;
              /\S/.test(YY.text) || (RY = 0);
              let OY = /^\s*/.exec(YY.text)[0],
                aY = (0, gY.$)(rY, RY);
              (OY != aY || IY.from < YY.from + OY.length) && (FY[YY.from] = RY, DY.push({
                from: YY.from,
                to: YY.from + OY.length,
                insert: aY
              }))
            }));
          return IY.changes.empty || DY(rY.update(IY, {
            userEvent: "indent"
          })), !0
        }
      }, {
        key: "Shift-Mod-k",
        run: YY => {
          if (YY.state.readOnly) return !1;
          let {
            state: rY
          } = YY, DY = rY.changes(Zr(rY).map((YY => {
            let {
              from: DY,
              to: FY
            } = YY;
            return DY > 0 ? DY-- : FY < rY.doc.length && FY++, {
              from: DY,
              to: FY
            }
          }))), FY = bY(rY.selection, (rY => {
            let DY;
            if (YY.lineWrapping) {
              let FY = YY.lineBlockAt(rY.head),
                AY = YY.coordsAtPos(rY.head, rY.assoc || 1);
              AY && (DY = FY.bottom + YY.documentTop - AY.bottom + YY.defaultLineHeight / 2)
            }
            return YY.moveVertically(rY, !0, DY)
          })).map(DY);
          return YY.dispatch({
            changes: DY,
            selection: FY,
            scrollIntoView: !0,
            userEvent: "delete.line"
          }), !0
        }
      }, {
        key: "Shift-Mod-\\",
        run: YY => {
          let {
            state: rY,
            dispatch: DY
          } = YY;
          return Or(rY, DY, !1)
        }
      }, {
        key: "Mod-/",
        run: YY => {
          let {
            state: rY
          } = YY, DY = rY.doc.lineAt(rY.selection.main.from), FY = yY(YY.state, DY.from);
          return FY.line ? uY(YY) : !!FY.block && iY(YY)
        }
      }, {
        key: "Alt-A",
        run: sY
      }, {
        key: "Ctrl-m",
        mac: "Shift-Alt-m",
        run: YY => (YY.setTabFocusMode(), !0)
      }].concat([{
        key: "ArrowLeft",
        run: xY,
        shift: vr,
        preventDefault: !0
      }, {
        key: "Mod-ArrowLeft",
        mac: "Alt-ArrowLeft",
        run: YY => PY(YY, !GY(YY)),
        shift: YY => sr(YY, !GY(YY)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowLeft",
        run: YY => qY(YY, (rY => Rr(YY, rY, !GY(YY)))),
        shift: YY => gr(YY, (rY => Rr(YY, rY, !GY(YY)))),
        preventDefault: !0
      }, {
        key: "ArrowRight",
        run: nY,
        shift: ur,
        preventDefault: !0
      }, {
        key: "Mod-ArrowRight",
        mac: "Alt-ArrowRight",
        run: YY => PY(YY, GY(YY)),
        shift: YY => sr(YY, GY(YY)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowRight",
        run: YY => qY(YY, (rY => Rr(YY, rY, GY(YY)))),
        shift: YY => gr(YY, (rY => Rr(YY, rY, GY(YY)))),
        preventDefault: !0
      }, {
        key: "ArrowUp",
        run: Yr,
        shift: yr,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowUp",
        run: mr,
        shift: Sr
      }, {
        mac: "Ctrl-ArrowUp",
        run: Ar,
        shift: Wr
      }, {
        key: "ArrowDown",
        run: rr,
        shift: Qr,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowDown",
        run: Vr,
        shift: lr
      }, {
        mac: "Ctrl-ArrowDown",
        run: Ir,
        shift: Er
      }, {
        key: "PageUp",
        run: Ar,
        shift: Wr
      }, {
        key: "PageDown",
        run: Ir,
        shift: Er
      }, {
        key: "Home",
        run: YY => qY(YY, (rY => Rr(YY, rY, !1))),
        shift: YY => gr(YY, (rY => Rr(YY, rY, !1))),
        preventDefault: !0
      }, {
        key: "Mod-Home",
        run: mr,
        shift: Sr
      }, {
        key: "End",
        run: YY => qY(YY, (rY => Rr(YY, rY, !0))),
        shift: YY => gr(YY, (rY => Rr(YY, rY, !0))),
        preventDefault: !0
      }, {
        key: "Mod-End",
        run: Vr,
        shift: lr
      }, {
        key: "Enter",
        run: jr,
        shift: jr
      }, {
        key: "Mod-a",
        run: YY => {
          let {
            state: rY,
            dispatch: DY
          } = YY;
          return DY(rY.update({
            selection: {
              anchor: 0,
              head: rY.doc.length
            },
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Backspace",
        run: cr,
        shift: cr,
        preventDefault: !0
      }, {
        key: "Delete",
        run: Kr,
        preventDefault: !0
      }, {
        key: "Mod-Backspace",
        mac: "Alt-Backspace",
        run: zr,
        preventDefault: !0
      }, {
        key: "Mod-Delete",
        mac: "Alt-Delete",
        run: YY => Hr(YY, !0),
        preventDefault: !0
      }, {
        mac: "Mod-Backspace",
        run: YY => er(YY, (rY => {
          let DY = YY.moveToLineBoundary(rY, !1).head;
          return rY.head > DY ? DY : Math.max(0, rY.head - 1)
        })),
        preventDefault: !0
      }, {
        mac: "Mod-Delete",
        run: YY => er(YY, (rY => {
          let DY = YY.moveToLineBoundary(rY, !0).head;
          return rY.head < DY ? DY : Math.min(YY.state.doc.length, rY.head + 1)
        })),
        preventDefault: !0
      }].concat([{
        key: "Ctrl-b",
        run: xY,
        shift: vr,
        preventDefault: !0
      }, {
        key: "Ctrl-f",
        run: nY,
        shift: ur
      }, {
        key: "Ctrl-p",
        run: Yr,
        shift: yr
      }, {
        key: "Ctrl-n",
        run: rr,
        shift: Qr
      }, {
        key: "Ctrl-a",
        run: YY => qY(YY, (rY => RY.n.cursor(YY.lineBlockAt(rY.head).from, 1))),
        shift: YY => gr(YY, (rY => RY.n.cursor(YY.lineBlockAt(rY.head).from)))
      }, {
        key: "Ctrl-e",
        run: YY => qY(YY, (rY => RY.n.cursor(YY.lineBlockAt(rY.head).to, -1))),
        shift: YY => gr(YY, (rY => RY.n.cursor(YY.lineBlockAt(rY.head).to)))
      }, {
        key: "Ctrl-d",
        run: Kr
      }, {
        key: "Ctrl-h",
        run: cr
      }, {
        key: "Ctrl-k",
        run: YY => er(YY, (rY => {
          let DY = YY.lineBlockAt(rY.head).to;
          return rY.head < DY ? DY : Math.min(YY.state.doc.length, rY.head + 1)
        }))
      }, {
        key: "Ctrl-Alt-h",
        run: zr
      }, {
        key: "Ctrl-o",
        run: YY => {
          let {
            state: rY,
            dispatch: DY
          } = YY;
          if (rY.readOnly) return !1;
          let FY = rY.changeByRange((YY => ({
            changes: {
              from: YY.from,
              to: YY.to,
              insert: RY.K.of(["", ""])
            },
            range: RY.n.cursor(YY.from)
          })));
          return DY(rY.update(FY, {
            scrollIntoView: !0,
            userEvent: "input"
          })), !0
        }
      }, {
        key: "Ctrl-t",
        run: YY => {
          let {
            state: rY,
            dispatch: DY
          } = YY;
          if (rY.readOnly) return !1;
          let FY = rY.changeByRange((YY => {
            if (!YY.empty || 0 == YY.from || YY.from == rY.doc.length) return {
              range: YY
            };
            let DY = YY.from,
              FY = rY.doc.lineAt(DY),
              AY = DY == FY.from ? DY - 1 : (0, RY.$)(FY.text, DY - FY.from, !1) + FY.from,
              IY = DY == FY.to ? DY + 1 : (0, RY.$)(FY.text, DY - FY.from, !0) + FY.from;
            return {
              changes: {
                from: AY,
                to: IY,
                insert: rY.doc.slice(DY, IY).append(rY.doc.slice(AY, DY))
              },
              range: RY.n.cursor(IY)
            }
          }));
          return !FY.changes.empty && (DY(rY.update(FY, {
            scrollIntoView: !0,
            userEvent: "move.character"
          })), !0)
        }
      }, {
        key: "Ctrl-v",
        run: Ir
      }].map((YY => ({
        mac: YY.key,
        run: YY.run,
        shift: YY.shift
      }))))),
      br = {
        key: "Tab",
        run: Jr,
        shift: Mr
      };
    var Xr = DY(40443),
      qr = DY(40387),
      pr = DY(40447),
      kr = function(YY) {
        void 0 === YY && (YY = {});
        var {
          crosshairCursor: rY = !1
        } = YY, DY = [];
        !1 !== YY.closeBracketsKeymap && (DY = DY.concat(qr.f)), !1 !== YY.defaultKeymap && (DY = DY.concat(wr)), !1 !== YY.searchKeymap && (DY = DY.concat(Xr.e)), !1 !== YY.historyKeymap && (DY = DY.concat(wY)), !1 !== YY.foldKeymap && (DY = DY.concat(gY.I)), !1 !== YY.completionKeymap && (DY = DY.concat(qr.m)), !1 !== YY.lintKeymap && (DY = DY.concat(pr.c));
        var FY = [];
        return !1 !== YY.lineNumbers && FY.push((0, OY.W)()), !1 !== YY.highlightActiveLineGutter && FY.push((0, OY.H)()), !1 !== YY.highlightSpecialChars && FY.push((0, OY.M)()), !1 !== YY.history && FY.push(function() {
          let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return [lY, SY.of(YY), OY.e.domEventHandlers({
            beforeinput(YY, rY) {
              let DY = "historyUndo" == YY.inputType ? eY : "historyRedo" == YY.inputType ? NY : null;
              return !!DY && (YY.preventDefault(), DY(rY))
            }
          })]
        }()), !1 !== YY.foldGutter && FY.push((0, gY.C)()), !1 !== YY.drawSelection && FY.push((0, OY.u)()), !1 !== YY.dropCursor && FY.push((0, OY.y)()), !1 !== YY.allowMultipleSelections && FY.push(RY.p.allowMultipleSelections.of(!0)), !1 !== YY.indentOnInput && FY.push((0, gY.Y)()), !1 !== YY.syntaxHighlighting && FY.push((0, gY.nb)(gY.r, {
          fallback: !0
        })), !1 !== YY.bracketMatching && FY.push((0, gY.n)()), !1 !== YY.closeBrackets && FY.push((0, qr.h)()), !1 !== YY.autocompletion && FY.push((0, qr.c)()), !1 !== YY.rectangularSelection && FY.push((0, OY.fb)()), !1 !== rY && FY.push((0, OY.r)()), !1 !== YY.highlightActiveLine && FY.push((0, OY.K)()), !1 !== YY.highlightSelectionMatches && FY.push((0, Xr.d)()), YY.tabSize && "number" === typeof YY.tabSize && FY.push(gY.db.of(" ".repeat(YY.tabSize))), FY.concat([OY.S.of(DY.flat())]).filter(Boolean)
      },
      Gr = DY(40431);
    const xr = "#e5c07b",
      nr = "#e06c75",
      Pr = "#56b6c2",
      Ur = "#ffffff",
      Lr = "#abb2bf",
      tr = "#7d8799",
      YD = "#61afef",
      rD = "#98c379",
      DD = "#d19a66",
      FD = "#c678dd",
      AD = "#21252b",
      ID = "#2c313a",
      RD = "#282c34",
      OD = "#353a42",
      gD = "#3E4451",
      aD = "#528bff",
      vD = OY.e.theme({
        "&": {
          color: Lr,
          backgroundColor: RD
        },
        ".cm-content": {
          caretColor: aD
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: aD
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: gD
        },
        ".cm-panels": {
          backgroundColor: AD,
          color: Lr
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
          backgroundColor: RD,
          color: tr,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: ID
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#ddd"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: OD
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: OD,
          borderBottomColor: OD
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: ID,
            color: Lr
          }
        }
      }, {
        dark: !0
      }),
      uD = gY.e.define([{
        tag: Gr.j.keyword,
        color: FD
      }, {
        tag: [Gr.j.name, Gr.j.deleted, Gr.j.character, Gr.j.propertyName, Gr.j.macroName],
        color: nr
      }, {
        tag: [Gr.j.function(Gr.j.variableName), Gr.j.labelName],
        color: YD
      }, {
        tag: [Gr.j.color, Gr.j.constant(Gr.j.name), Gr.j.standard(Gr.j.name)],
        color: DD
      }, {
        tag: [Gr.j.definition(Gr.j.name), Gr.j.separator],
        color: Lr
      }, {
        tag: [Gr.j.typeName, Gr.j.className, Gr.j.number, Gr.j.changed, Gr.j.annotation, Gr.j.modifier, Gr.j.self, Gr.j.namespace],
        color: xr
      }, {
        tag: [Gr.j.operator, Gr.j.operatorKeyword, Gr.j.url, Gr.j.escape, Gr.j.regexp, Gr.j.link, Gr.j.special(Gr.j.string)],
        color: Pr
      }, {
        tag: [Gr.j.meta, Gr.j.comment],
        color: tr
      }, {
        tag: Gr.j.strong,
        fontWeight: "bold"
      }, {
        tag: Gr.j.emphasis,
        fontStyle: "italic"
      }, {
        tag: Gr.j.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: Gr.j.link,
        color: tr,
        textDecoration: "underline"
      }, {
        tag: Gr.j.heading,
        fontWeight: "bold",
        color: nr
      }, {
        tag: [Gr.j.atom, Gr.j.bool, Gr.j.special(Gr.j.variableName)],
        color: DD
      }, {
        tag: [Gr.j.processingInstruction, Gr.j.string, Gr.j.inserted],
        color: rD
      }, {
        tag: Gr.j.invalid,
        color: Ur
      }]),
      sD = [vD, (0, gY.nb)(uD)];
    var iD = OY.e.theme({
      "&": {
        backgroundColor: "#fff"
      }
    }, {
      dark: !1
    });
    class yD {
      constructor(YY, rY) {
        this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = rY, this.timeoutMS = rY, this.callbacks.push(YY)
      }
      Zu() {
        if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
          this.isTimeExhausted = !0;
          var YY = this.callbacks.slice();
          this.callbacks.length = 0, YY.forEach((YY => {
            try {
              YY()
            } catch (rY) {
              console.error("TimeoutLatch callback error:", rY)
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
    class QD {
      constructor() {
        this.interval = null, this.latches = new Set
      }
      add(YY) {
        this.latches.add(YY), this.start()
      }
      remove(YY) {
        this.latches.delete(YY), 0 === this.latches.size && this.stop()
      }
      start() {
        null === this.interval && (this.interval = setInterval((() => {
          this.latches.forEach((YY => {
            YY.Zu(), YY.isDone && this.remove(YY)
          }))
        }), 1))
      }
      stop() {
        null !== this.interval && (clearInterval(this.interval), this.interval = null)
      }
    }
    var oD = null,
      WD = RY.e.define(),
      ED = [];

    function mD(YY) {
      var {
        value: rY,
        selection: DY,
        onChange: FY,
        onStatistics: AY,
        onCreateEditor: gY,
        onUpdate: aY,
        extensions: vY = ED,
        autoFocus: uY,
        theme: sY = "light",
        height: iY = null,
        minHeight: yY = null,
        maxHeight: QY = null,
        width: oY = null,
        minWidth: WY = null,
        maxWidth: EY = null,
        placeholder: mY = "",
        editable: VY = !0,
        readOnly: SY = !1,
        indentWithTab: lY = !0,
        basicSetup: TY = !0,
        root: eY,
        initialState: NY
      } = YY, [BY, cY] = (0, IY.useState)(), [KY, HY] = (0, IY.useState)(), [zY, ZY] = (0, IY.useState)(), CY = (0, IY.useState)((() => ({
        current: null
      })))[0], fY = (0, IY.useState)((() => ({
        current: null
      })))[0], jY = OY.e.theme({
        "&": {
          height: iY,
          minHeight: yY,
          maxHeight: QY,
          width: oY,
          minWidth: WY,
          maxWidth: EY
        },
        "& .cm-scroller": {
          height: "100% !important"
        }
      }), hY = OY.e.updateListener.of((YY => {
        if (YY.docChanged && "function" === typeof FY && !YY.transactions.some((YY => YY.annotation(WD)))) {
          CY.current ? CY.current.reset() : (CY.current = new yD((() => {
            if (fY.current) {
              var YY = fY.current;
              fY.current = null, YY()
            }
            CY.current = null
          }), 200), ("undefined" === typeof window ? new QD : (oD || (oD = new QD), oD)).add(CY.current));
          var rY = YY.state.doc.toString();
          FY(rY, YY)
        }
        AY && AY((YY => ({
          line: YY.state.doc.lineAt(YY.state.selection.main.from),
          lineCount: YY.state.doc.lines,
          lineBreak: YY.state.lineBreak,
          length: YY.state.doc.length,
          readOnly: YY.state.readOnly,
          tabSize: YY.state.tabSize,
          selection: YY.state.selection,
          selectionAsSingle: YY.state.selection.asSingle().main,
          ws: YY.state.selection.ws,
          selectionCode: YY.state.sliceDoc(YY.state.selection.main.from, YY.state.selection.main.to),
          selections: YY.state.selection.ws.map((rY => YY.state.sliceDoc(rY.from, rY.to))),
          selectedText: YY.state.selection.ws.some((YY => !YY.empty))
        }))(YY))
      })), dY = function(YY) {
        void 0 === YY && (YY = {});
        var {
          indentWithTab: rY = !0,
          editable: DY = !0,
          readOnly: FY = !1,
          theme: AY = "light",
          placeholder: IY = "",
          basicSetup: gY = !0
        } = YY, aY = [];
        switch (rY && aY.unshift(OY.S.of([br])), gY && ("boolean" === typeof gY ? aY.unshift(kr()) : aY.unshift(kr(gY))), IY && aY.unshift((0, OY.cb)(IY)), AY) {
          case "light":
            aY.push(iD);
            break;
          case "dark":
            aY.push(sD);
            break;
          case "none":
            break;
          default:
            aY.push(AY)
        }
        return !1 === DY && aY.push(OY.e.editable.of(!1)), FY && aY.push(RY.p.readOnly.of(!0)), [...aY]
      }({
        theme: sY,
        editable: VY,
        readOnly: SY,
        placeholder: mY,
        indentWithTab: lY,
        basicSetup: TY
      }), JY = [hY, jY, ...dY];
      return aY && "function" === typeof aY && JY.push(OY.e.updateListener.of(aY)), JY = JY.concat(vY), (0, IY.useLayoutEffect)((() => {
        if (BY && !zY) {
          var YY = {
              doc: rY,
              selection: DY,
              extensions: JY
            },
            FY = NY ? RY.p.fromJSON(NY.json, YY, NY.fields) : RY.p.create(YY);
          if (ZY(FY), !KY) {
            var AY = new OY.e({
              state: FY,
              parent: BY,
              root: eY
            });
            HY(AY), gY && gY(AY, FY)
          }
        }
        return () => {
          KY && (ZY(void 0), HY(void 0))
        }
      }), [BY, zY]), (0, IY.useEffect)((() => {
        YY.container && cY(YY.container)
      }), [YY.container]), (0, IY.useEffect)((() => () => {
        KY && (KY.destroy(), HY(void 0)), CY.current && (CY.current.cancel(), CY.current = null)
      }), [KY]), (0, IY.useEffect)((() => {
        uY && KY && KY.focus()
      }), [uY, KY]), (0, IY.useEffect)((() => {
        KY && KY.dispatch({
          effects: RY.E.reconfigure.of(JY)
        })
      }), [sY, vY, iY, yY, QY, oY, WY, EY, mY, VY, SY, lY, TY, FY, aY]), (0, IY.useEffect)((() => {
        if (void 0 !== rY) {
          var YY = KY ? KY.state.doc.toString() : "";
          if (KY && rY !== YY) {
            var DY = () => {
              KY && rY !== KY.state.doc.toString() && KY.dispatch({
                changes: {
                  from: 0,
                  to: KY.state.doc.toString().length,
                  insert: rY || ""
                },
                annotations: [WD.of(!0)]
              })
            };
            CY.current && !CY.current.isDone ? fY.current = DY : DY()
          }
        }
      }), [rY, KY]), {
        state: zY,
        setState: ZY,
        view: KY,
        setView: HY,
        container: BY,
        setContainer: cY
      }
    }
    var VD = DY(1125),
      SD = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"],
      lD = (0, IY.forwardRef)(((YY, rY) => {
        var {
          className: DY,
          value: RY = "",
          selection: OY,
          extensions: gY = [],
          onChange: aY,
          onStatistics: vY,
          onCreateEditor: uY,
          onUpdate: sY,
          autoFocus: iY,
          theme: yY = "light",
          height: QY,
          minHeight: oY,
          maxHeight: WY,
          width: EY,
          minWidth: mY,
          maxWidth: VY,
          basicSetup: SY,
          placeholder: lY,
          indentWithTab: TY,
          editable: eY,
          readOnly: NY,
          root: BY,
          initialState: cY
        } = YY, KY = (0, AY.d)(YY, SD), HY = (0, IY.useRef)(null), {
          state: zY,
          view: ZY,
          container: CY,
          setContainer: fY
        } = mD({
          root: BY,
          value: RY,
          autoFocus: iY,
          theme: yY,
          height: QY,
          minHeight: oY,
          maxHeight: WY,
          width: EY,
          minWidth: mY,
          maxWidth: VY,
          basicSetup: SY,
          placeholder: lY,
          indentWithTab: TY,
          editable: eY,
          readOnly: NY,
          selection: OY,
          onChange: aY,
          onStatistics: vY,
          onCreateEditor: uY,
          onUpdate: sY,
          extensions: gY,
          initialState: cY
        });
        (0, IY.useImperativeHandle)(rY, (() => ({
          editor: HY.current,
          state: zY,
          view: ZY
        })), [HY, CY, zY, ZY]);
        var jY = (0, IY.useCallback)((YY => {
          HY.current = YY, fY(YY)
        }), [fY]);
        if ("string" !== typeof RY) throw new Error("value must be typeof string but got " + typeof RY);
        var hY = "string" === typeof yY ? "cm-theme-" + yY : "cm-theme";
        return (0, VD.jsx)("div", (0, FY.d)({
          ref: jY,
          className: hY + (DY ? " " + DY : "")
        }, KY))
      }));
    lD.displayName = "CodeMirror";
    const TD = lD
  },
  40409: (YY, rY, DY) => {
    function FY() {
      var YY = arguments[0];
      "string" == typeof YY && (YY = document.createElement(YY));
      var rY = 1,
        DY = arguments[1];
      if (DY && "object" == typeof DY && null == DY.nodeType && !Array.isArray(DY)) {
        for (var FY in DY)
          if (Object.prototype.hasOwnProperty.call(DY, FY)) {
            var IY = DY[FY];
            "string" == typeof IY ? YY.setAttribute(FY, IY) : null != IY && (YY[FY] = IY)
          } rY++
      }
      for (; rY < arguments.length; rY++) AY(YY, arguments[rY]);
      return YY
    }

    function AY(YY, rY) {
      if ("string" == typeof rY) YY.appendChild(document.createTextNode(rY));
      else if (null == rY);
      else if (null != rY.nodeType) YY.appendChild(rY);
      else {
        if (!Array.isArray(rY)) throw new RangeError("Unsupported child node: " + rY);
        for (var DY = 0; DY < rY.length; DY++) AY(YY, rY[DY])
      }
    }
    DY.d(rY, {
      e: () => FY
    })
  },
  40400: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => RY
    });
    const FY = "undefined" == typeof Symbol ? "__\u037c" : Symbol.for("\u037c"),
      AY = "undefined" == typeof Symbol ? "__styleSet" + Math.floor(1e8 * Math.random()) : Symbol("styleSet"),
      IY = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : {};
    class RY {
      constructor(YY, rY) {
        this.rules = [];
        let {
          finish: DY
        } = rY || {};

        function FY(YY) {
          return /^@/.test(YY) ? [YY] : YY.split(/,\s*/)
        }

        function AY(YY, rY, IY, RY) {
          let OY = [],
            gY = /^@(\w+)\b/.exec(YY[0]),
            aY = gY && "keyframes" == gY[1];
          if (gY && null == rY) return IY.push(YY[0] + ";");
          for (let DY in rY) {
            let RY = rY[DY];
            if (/&/.test(DY)) AY(DY.split(/,\s*/).map((rY => YY.map((YY => rY.replace(/&/, YY))))).reduce(((YY, rY) => YY.concat(rY))), RY, IY);
            else if (RY && "object" == typeof RY) {
              if (!gY) throw new RangeError("The value of a property (" + DY + ") should be a primitive value.");
              AY(FY(DY), RY, OY, aY)
            } else null != RY && OY.push(DY.replace(/_.*/, "").replace(/[A-Z]/g, (YY => "-" + YY.toLowerCase())) + ": " + RY + ";")
          }(OY.length || aY) && IY.push((!DY || gY || RY ? YY : YY.map(DY)).join(", ") + " {" + OY.join(" ") + "}")
        }
        for (let IY in YY) AY(FY(IY), YY[IY], this.rules)
      }
      getRules() {
        return this.rules.join("\n")
      }
      static newName() {
        let YY = IY[FY] || 1;
        return IY[FY] = YY + 1, "\u037c" + YY.toString(36)
      }
      static mount(YY, rY, DY) {
        let FY = YY[AY],
          IY = DY && DY.nonce;
        FY ? IY && FY.setNonce(IY) : FY = new gY(YY, IY), FY.mount(Array.isArray(rY) ? rY : [rY], YY)
      }
    }
    let OY = new Map;
    class gY {
      constructor(YY, rY) {
        let DY = YY.ownerDocument || YY,
          FY = DY.defaultView;
        if (!YY.head && YY.adoptedStyleSheets && FY.CSSStyleSheet) {
          let rY = OY.get(DY);
          if (rY) return YY[AY] = rY;
          this.sheet = new FY.CSSStyleSheet, OY.set(DY, this)
        } else this.styleTag = DY.createElement("style"), rY && this.styleTag.setAttribute("nonce", rY);
        this.modules = [], YY[AY] = this
      }
      mount(YY, rY) {
        let DY = this.sheet,
          FY = 0,
          AY = 0;
        for (let IY = 0; IY < YY.length; IY++) {
          let rY = YY[IY],
            RY = this.modules.indexOf(rY);
          if (RY < AY && RY > -1 && (this.modules.splice(RY, 1), AY--, RY = -1), -1 == RY) {
            if (this.modules.splice(AY++, 0, rY), DY)
              for (let YY = 0; YY < rY.rules.length; YY++) DY.insertRule(rY.rules[YY], FY++)
          } else {
            for (; AY < RY;) FY += this.modules[AY++].rules.length;
            FY += rY.rules.length, AY++
          }
        }
        if (DY) rY.adoptedStyleSheets.indexOf(this.sheet) < 0 && (rY.adoptedStyleSheets = [this.sheet, ...rY.adoptedStyleSheets]);
        else {
          let YY = "";
          for (let rY = 0; rY < this.modules.length; rY++) YY += this.modules[rY].getRules() + "\n";
          this.styleTag.textContent = YY;
          let DY = rY.head || rY;
          this.styleTag.parentNode != DY && DY.insertBefore(this.styleTag, DY.firstChild)
        }
      }
      setNonce(YY) {
        this.styleTag && this.styleTag.getAttribute("nonce") != YY && this.styleTag.setAttribute("nonce", YY)
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);